# -*- coding: utf-8 -*-
"""
PETEK MOTORU — yerleşim tabanlı harita üretimi
==============================================
Yaklaşım (kullanıcı önerisi):
  Her şehir/kale/bölge bir PETEK'tir; çevresindeki toprağı temsil eder.
  Petek sınırları komşu yerleşimlerin tam ortasından geçer (Voronoi), ardından
  gerçek kıyı çizgisine ve nehir yataklarına yaslanır. Bir yerleşim el
  değiştirdiğinde peteği bütün olarak el değiştirir → cetvelle çizilmiş köşeli
  sınır, yapay enklav ve "yarım kalmış bölge" sorunu ortadan kalkar.

Girdi : ../data/yerlesimler.js  (ad, koordinat, hâkimiyet dönemleri)
        Natural Earth 10m kara + nehir verisi
Çıktı : ../data/donemler.js     (window.DONEMLER — sitenin okuduğu dosya)

Çalıştırma:  py uret_petek.py
"""
# ══════════════════════════════════════════════════════════════════════
# 🔴🔴 İTHAL KİLİDİ — bu dosyanın TAMAMI modül düzeyinde koşar.
#
# Yani `import uret_petek` bir OKUMA değil, 80 DAKİKALIK BİR ÜRETİMDİR.
# Ve çift koşu kilidi `KOSUYU-SIMDI-BASLAT.bat` içindeydi ⇒ import yolu
# kilide HİÇ UĞRAMIYORDU. "İki üretim aynı anda koşamaz" garantisi
# **yoktu**; bu proje dört üretimi tam bu sınıftan kaybetti.
#
# DOĞURAN VAKA (16 Ağustos 2026, OPUS HAZIR KITA 8 bildirdi):
#   Bir işçi oturum `BOLGE` sabitini okumak için betiğinin sonuna
#   `import uret_petek` yazdı. 23:2x'te tam üretim başladı, 00:59'da
#   bitti. Oturum ne başlattığını üretim bitene kadar bilmiyordu.
#
# ⚠️ VE UYARI ZATEN YAZILIYDI — `arac/uret_altlik.py:29`, bir YORUM
# satırında: *"`import uret_petek` YAPILMAZ"*. Doğru ders, makinenin
# göremediği yerde. Bu blok onu bir `if`e çeviriyor.
# 📌 Sınav tek soru: *bu bilgiyi bir `if` ile sorabiliyor muyum?*
#
# Ölçüldü: gerçek import eden alet sayısı **0** — yani bu kilit hiçbir
# çalışan işi kırmıyor, yalnız kazayı kesiyor.
if __name__ != "__main__":
    raise RuntimeError(
        "uret_petek.py İÇE AKTARILAMAZ — bu modül import edildiği anda "
        "80 dakikalık ÜRETİMİ başlatır (dosyanın tamamı modül düzeyinde "
        "koşar). Sabit okumak istiyorsan dosyayı METİN olarak ayrıştır "
        "ya da değeri arac/girdi.py üzerinden al. Üretimi gerçekten "
        "başlatacaksan: py arac/uret_petek.py — ve ÖNCE Oturum 0'a sor.")
# ══════════════════════════════════════════════════════════════════════
import json, os, sys, io, math, re, time
# ⚠️ line_buffering=True — AŞAMA ZAMANLAYICISININ ÖN KOŞULU (MOTOR 3).
# Bu sarmalayıcı varsayılan hâliyle BLOK TAMPONLUDUR: `py -u` ile başlatılsa
# bile satırlar ancak çıkışta boşalır. Bir kez yaşandı — koşu 4s39dk sürdü ve
# log dosyası koşu boyunca boş göründü, yani ölçüm körleşti. Tamponlu bir
# akışta aşama zamanlayıcısı işe yaramaz: bilanço ancak satırlar ANINDA
# aktığında bilançodur.
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8",
                              errors="replace", line_buffering=True)
import shapely
from shapely.geometry import (shape, box, Polygon, MultiPolygon, Point, MultiPoint,
                              LineString, MultiLineString)
from shapely.ops import unary_union, voronoi_diagram, nearest_points, linemerge, polygonize
from shapely.affinity import scale as _scale   # A1 yarıçap tavanı (enlem düzeltmeli elips)
from shapely.strtree import STRtree
from shapely.validation import make_valid
from shapely.prepared import prep

def temiz(q):
    """Geçersiz halkaları onarır; make_valid'in döndürebileceği çizgi artıklarını atar."""
    if not q.is_valid: q = make_valid(q)
    if q.geom_type == "GeometryCollection":
        q = unary_union([p for p in q.geoms if p.geom_type in ("Polygon", "MultiPolygon")])
    return q.buffer(0)

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# ⚠️ Bu yol bir dönem geçici klasöre (%TEMP%\claude\…\scratchpad\basemaps) bakıyordu.
# Temp temizlense harita motoru tamamen çalışmaz hâle gelirdi: 567 yerleşimlik veri
# elde kalır ama haritaya dönüştürülemezdi. Girdi verisi artık depoda; bkz.
# veri-kaynak/README.md. Yol betiğin konumundan türetilir, makineye bağlı değildir.
BASEMAPS = os.path.join(KOK, "veri-kaynak")
CIKTI = os.path.join(KOK, "data", "donemler.js")
# Kapsam (2 Ağustos 2026 genişletmesi — KARAR-BOLGE-KUTUSU): Batı Avrupa'dan
# Japonya'ya, Endonezya'dan Kuzey İskandinavya'ya. Kenar gerekçeleri ölçülü:
#   DOĞU 146: Hokkaido+Sahalin BÜTÜN girer (İş M; 142 Sapporo'nun kendi
#     adasını bölüyordu, 145 Hokkaido'yu yarım bırakıyordu); Yeni Gine
#     bölünmesi BİLİNÇLİ kabul (noktasız, hiçbir kenar kapatamıyor, kesik
#     tarihî 141° Hollanda sınırının yanında — §82 notu).
#   GÜNEY −11: Endonezya takımadası (24 nokta yalnız Doğu+Güney birlikte
#     açılınca girer — İş J kenar etkileşimi).
#   KUZEY 64: Sundsvall+Trondheim girer; 64'ü aşan her derece bugün
#     getirisiz (İş J: 71'e uzatmak aynı 2 nokta için 3,3 kat pahalı).
#   BATI −12: değişmedi (lon<−12'de nokta YOK — İş J, bulunamadı).
# 🔴 KUTU ARTIK DİKDÖRTGEN DEĞİL, "L" — 4 Ağustos 2026, koşu 9.
# Emre kuzeyi adıyla istedi: *"HARİTANIN KUZEY SINIRI KUZEY KUTUP NOKTASI
# OLSUN… İZLANDA NORVEÇİN SKARSVAG ADASI MEHAM GAMVİK NOVAYA ZEMLYA
# SEVERNAYA ZEMLYA RUDOLF İSLAND"*.
#   · kuzey 64 → 82: yedi yer bununla giriyor (+4,83 mn km², +25.842 köşe)
#   · İZLANDA girmiyordu: 13°B-24,5°B arasında, batı kenarı −12'ydi
# ⚠️ AMA BATIYI DÜZ AÇMAK (box(-25,-11,…)) İKİ YENİ HATA AÇIYORDU —
#    PETEK/NOKTA ölçtü: o şeridin %77'si BATI AFRİKA, İzlanda yalnız %9.
#      Timbuktu'nun s:/d:/v: üçü de boş  → Senegal-Gambiya beyaz delik
#      Agadir `fas` taşıyor              → KANARYA ADALARI Fas boyanırdı
# ⇒ Batı yalnız KUZEYDE açılıyor. L'nin çentik köşesi (−12°D / 60°K) açık
#   okyanusta; hiçbir peteğe değmiyor (ölçüldü).
# 📌 Ve kuzey, noktalar HAZIR OLMADAN açılmadı: noktasız açılsa 4,83 mn km²
#   mevcut peteklere emilir ve Moğolistan'ın Uliastay'ı Arktik Sibirya'yı,
#   Sapporo Arktik adalarını boyardı (ölçüldü, `CLAUDE.md §2`).
#   `yerlesimler_ek8.js` (39 nokta, 64,5-80,3°K) bu koşuda birlikte iniyor.
BOLGE = unary_union([box(-12, -11, 146, 82), box(-25, 60, -12, 82)])

# ---------------- Devlet boya tablosu ----------------
# Yerleşimlerin s alanındaki kimlikler; her devlet haritada kendi renginde
# ayrı gövde olarak boyanır (Osmanlı d/v aktifken s bastırılır).
# Devlet renkleri ayrı modülde: arac/renkler.py
# (renk çalışması ile geometri çalışması aynı dosyaya yazmasın diye ayrıldı)
from renkler import BOYALAR
# Yerleşim girdisinin tek okuma noktası — dosya listesi girdi.py'de.
import girdi
R_DUNYA = 6371.0088

# ⚠️ ANLIK GÖRÜNTÜ — HER ŞEYDEN ÖNCE, parmak izinden de önce.
# Bu satırdan sonra motor girdi dosyalarının KOPYASINDAN okur; orijinaller
# serbesttir ve koşu sırasında değiştirilebilir. Üretim kilidi bu yüzden
# kalktı — gerekçesi ve ölçümü girdi.py, anlik_goruntu().
# Damga da burada atılır: TAKİPÇİ bugüne kadar yalnız BİTİŞLERİ görebiliyordu,
# kilit süresini hesaplayamıyordu.
import datetime as _dt
_BASLADI = _dt.datetime.now()
io.open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "..",
                     ".uretim-basladi"), "w", encoding="utf-8").write(
    _BASLADI.strftime("%Y-%m-%d %H:%M:%S") + "\n")

# ---------------- AŞAMA ZAMANLAYICISI ----------------
# ⚠️ NİÇİN VAR (MOTOR 3, 3 Ağustos 2026). 4s41dklık bir koşunun nerede yandığı
# üç oturum boyunca DOSYA DAMGASINDAN tahmin edildi: bolgeler.js 01:56,
# devletler_harita.js 05:38. Damga "yazma anı"nı verir, "hesabın başladığı
# an"ı değil — yani elimizdeki en iyi kanıt bir işaretti, ölçüm değil.
# Bu blok o tahmini emekliye çıkarır: koşu KENDİ bilançosunu yazar.
#
# 📌 Üç ayrı şey ölçülür ve üçü de gerekli:
#   asama()   — ardışık ana aşamalar; toplamları koşu süresini verir
#   sayac()   — ÇAPRAZ maliyet: birden çok aşamaya dağılmış tek bir işlev
#               (kuşatılmışlık üç ayrı aşamadan çağrılıyor; aşama tablosu
#               tek başına onu ASLA gösteremezdi — 241 dakika üç aşamaya
#               bölünmüş hâlde görünmez kalırdı)
#   ilerleme()— uzun döngülerde satır; 3s42dk boyunca tek satır basmayan bir
#               blok, "takıldı mı bitiyor mu" sorusunu cevaplayamaz
_T0 = time.time()
_ASAMA_KAYIT, _SAYAC = [], {}
_ASAMA_AD, _ASAMA_T, _ASAMA_C = None, _T0, time.process_time()


def _sure(s):
    """Saniyeyi okunur süreye çevirir (1s 23dk 45sn)."""
    s = int(round(s))
    if s >= 3600: return f"{s//3600}s {(s%3600)//60:02d}dk {s%60:02d}sn"
    if s >= 60:   return f"{s//60}dk {s%60:02d}sn"
    return f"{s}sn"


def asama(ad=None):
    """Açık aşamayı kapatır, yenisini açar. ad=None ise yalnız kapatır.

    🔴 DUVAR SAATİ TEK BAŞINA YALAN SÖYLER — 3 Ağustos 2026'da ölçüldü.
    Koşu 7'nin "Yabancı devlet gövdeleri" aşaması **3s 13dk 34sn** bildirdi;
    koşu 4-6'da aynı aşama 28-34 dakikaydı. Altı kat. Girdi neredeyse aynıydı
    (+4 nokta) ve geometri ayrıca ölçüldü: aynı 10 devlet yalıtılmış hâlde
    **14,5 saniye** sürüyor. Sebep koda ait değildi:
        Windows Power-Troubleshooter — Uykuya geçiş 20:08:55, uyanma 22:38:45
        ⇒ makine aşamanın ORTASINDA 2 saat 29 dakika 50 saniye UYUDU
    `time.time()` duvar saatidir; uykuyu da sayar. Gerçek hesap ~44 dakikaydı.
    ⚠️ Ve bu, bugünün beşinci "araç yanlış ekseni ölçüyor" vakası — bu sefer
    ölçen araç bu dosyanın kendisiydi.
    ⇒ Çare: İŞLEMCİ SÜRESİ de yazılır. İkisi ayrışırsa sebep uyku ya da
      başka bir sürecin rekabetidir; aşama gerçekten yavaşlamış DEĞİLDİR.
    """
    global _ASAMA_AD, _ASAMA_T, _ASAMA_C
    simdi, simdi_c = time.time(), time.process_time()
    if _ASAMA_AD is not None:
        _ASAMA_KAYIT.append((_ASAMA_AD, simdi - _ASAMA_T, simdi_c - _ASAMA_C))
        _duvar, _cpu = simdi - _ASAMA_T, simdi_c - _ASAMA_C
        # %60'tan azı işlemcide geçtiyse aşama BEKLEMİŞTİR, çalışmamıştır
        _not = ("   ⚠️ duvar ≫ işlemci: UYKU ya da REKABET"
                if _duvar > 60 and _cpu < _duvar * 0.6 else "")
        print(f"  ⏱ {_ASAMA_AD} — {_sure(_duvar)} "
              f"(işlemci {_sure(_cpu)}) (koşu {_sure(simdi - _T0)}){_not}")
    _ASAMA_AD, _ASAMA_T, _ASAMA_C = ad, simdi, simdi_c
    if ad is not None:
        print(f"[{_dt.datetime.now():%H:%M:%S}] ▶ {ad}")
        # 🔴 MOTOR PARMAK İZİ HER AŞAMADA SINANIR — 8 Ağustos 2026'da ölçüldü.
        # O gün bir koşu **83 dakika** çalıştı ve en sonda reddedildi:
        #     "MOTOR KODU KOŞU SIRASINDA DEĞİŞTİ: renkler.py"
        # Doğru hüküm, ama **83 dakika sonra** verildi. Sebep: `motor_izi_dogrula`
        # yalnız EN SON çağrılıyordu (`donemler.js`ten hemen önce), oysa değişiklik
        # koşunun **8. dakikasında** olmuştu.
        # ⇒ Bir nöbetçinin DOĞRU olması yetmiyor, **ZAMANINDA** olması da gerekiyor.
        #   Geç öten alarm, ötmeyen alarmdan yalnız biraz iyidir.
        # ⚠️ Aşama başı sınama ucuzdur (birkaç dosyanın özeti) ve en kötü ihtimalle
        #   bir aşama boyu gecikir — 83 dakika değil.
        try:
            girdi.motor_izi_dogrula(_MOTOR_IZI, f"aşama: {ad}")
        except NameError:
            pass          # _MOTOR_IZI henüz kurulmadı (ilk aşamalar)


def sayac(ad, sn, n=1):
    """Çapraz sayaç: aşamalara dağılmış bir işlevin toplam maliyeti."""
    r = _SAYAC.setdefault(ad, [0, 0.0])
    r[0] += n; r[1] += sn


def ilerleme(i, n, her, etiket, kum=None):
    """Uzun döngüde ilerleme satırı — kalan süre tahminiyle.

    🔴 `kum` VERİLMEZSE TAHMİN DOĞRUSALDIR VE YANILTIR. Yaşandı (3 Ağustos
    2026): yabancı gövde döngüsünde `devlet 10/226` satırı "tahminî kalan
    1s 41dk" bastı, gerçek 33dk 41sn çıktı — 3 kat. Koordinatör o satıra
    bakıp yayın saatini 15:00 diye duyurmaya hazırlanıyordu.
    Sebep: döngü adımları EŞİT MALİYETLİ DEĞİL. Ölçüldü — ilk 10 devlet
    gövdelerin %14,7'si ama işin %27,3'ü.

    `kum` = adım başına KÜMÜLATİF iş (uzunluk n+1). Verilirse tahmin işe
    göre ağırlıklanır.

    ÖLÇÜLMÜŞ İSABET — yeni tahmin kosu3'e GERİYE DÖNÜK uygulandı
    (gerçek 33,7 dk):
        adım      doğrusal      iş ağırlıklı
          10        +215%            −49%
          20        +421%            −16%
          30        +440%             +7%
          40-80  +114…+318%        +4…+5%
    ⚠️ İLK KONTROL NOKTASI YİNE GÜVENİLMEZ ve sebebi ölçüldü: ilk devletler
    hücre başına 0,0155 sn ile ilerliyor, kararlı hız 0,0300 — oran ancak
    ~%25 ilerlemede oturuyor. Yani bu satır "%10'da ne dediyse o" diye
    okunmaz; **ilk iki satırı atla, üçüncüden itibaren ±%5 güven.**
    📌 Doğrusal tahminin hiçbir noktada yakınsamadığına dikkat: sorun
    "erken olması" değildi, ÖLÇÜTÜN YANLIŞ olmasıydı.
    """
    if i % her and i != n: return
    gec = time.time() - _ASAMA_T
    if kum is not None and kum[n] > 0 and kum[i] > 0:
        pay = kum[i] / kum[n]
        kalan = max(gec / pay - gec, 0.0)
        print(f"      {etiket} {i}/{n}  geçen {_sure(gec)}  iş %{pay*100:.0f}"
              f"  tahminî kalan {_sure(kalan)}")
    else:
        kalan = gec / max(i, 1) * (n - i)
        print(f"      {etiket} {i}/{n}  geçen {_sure(gec)}  tahminî kalan "
              f"{_sure(kalan)} ⚠️doğrusal")


def asama_ozet():
    """Sonda ÖZET TABLO: aşama · süre · toplam içindeki payı."""
    asama(None)
    top = time.time() - _T0
    print("\n" + "=" * 64)
    print(f"AŞAMA BİLANÇOSU — koşu {_sure(top)} "
          f"(işlemci {_sure(time.process_time())})")
    print(f"  {'aşama':<38} {'duvar':>11} {'işlemci':>11}   pay")
    print("=" * 64)
    for ad, sn, cp in _ASAMA_KAYIT:
        _im = " ⚠️uyku/rekabet" if sn > 60 and cp < sn * 0.6 else ""
        print(f"  {ad[:38]:<38} {_sure(sn):>11} {_sure(cp):>11}  "
              f"%{sn/top*100:4.1f}{_im}")
    olculen = sum(s for _, s, _c in _ASAMA_KAYIT)
    print(f"  {'(aşama dışı: kurulum/import)':<44} "
          f"{_sure(top - olculen):>12}  %{(top-olculen)/top*100:4.1f}")
    if _SAYAC:
        print("-" * 64)
        print("  ÇAPRAZ SAYAÇ — yukarıdaki aşamaların İÇİNDE geçen süre")
        print("  (toplama EKLENMEZ; hangi aşamada olduğu değil, NE OLDUĞU)")
        for ad, (n, sn) in sorted(_SAYAC.items(), key=lambda x: -x[1][1]):
            print(f"  {ad[:34]:<34} {n:>7} çağrı {_sure(sn):>12}  "
                  f"%{sn/top*100:4.1f}")
    print("=" * 64)


asama("Girdi anlık görüntüsü")
girdi.anlik_goruntu()

# ⚠️ KOŞU BEKÇİSİ — parmak izi anlık görüntüden SONRA, kopyadan alınır.
# Sıra kritik: göller (goller.js) yerleşimlerden ÖNCE okunuyor, bu yüzden iz
# yerleşim okumasının yanında alınamaz — o noktada goller.js çoktan okunmuş
# olurdu ve arada değişse bekçi yanlış tarafa düşerdi (değişmiş veriyi okuyup
# "değişmemiş" derdi). Gerekçe ve bugünkü canlı vaka: girdi.py, parmak_izi().
# 📌 Artık kopyadan alındığı için bekçi pratikte hiç ateşlemez — ama ANLAMI
# kalır ve daha da güçlenir: "yazdığım şey, okuduğum şeyden geldi."
# Ve `URETIM_IZI`e yazılan iz KOPYANIN izidir, yani koşunun GERÇEKTEN okuduğu
# hâl; diskteki hâl değil (o koşu boyunca değişebilir).
_GIRDI_IZI = girdi.parmak_izi()
# ⚠️ MOTOR İZİ DE BAŞTA — 1 Ağustos 2026'da bulundu. Eskiden çıktı yazılırken
# diskten okunuyordu; koşu sırasında `renkler.py` değişse süreç etkilenmez
# (kod başta belleğe alınır) ama DAMGA etkilenirdi: koşunun çalıştırmadığı
# kodun özeti yazılırdı. Aşağıda GİRDİ için yazılmış olan gerekçe, koda
# uygulanmamıştı.
_MOTOR_IZI = girdi.motor_izi()

# ---------------- ① EĞİM ÇARPANI — DEM'in ERKEN SINAVI ----------------
# `ALTYAPI ①` · ölçüm: denetim/EGIM-CARPANI-OLCUM.md (`T-0112`, 15 Ağustos 2026)
#
# Motorun KARA-KISITLI SAHİPLİK Dijkstra'sı (:1515) bugüne kadar AĞIRLIKSIZDI:
# adım bedeli yalnız kilometreydi, dağ ile ova aynı fiyattaydı. 44 gerçek kara
# seferi güzergâhı üzerinde ölçüldü — her sefer için A→B en ucuz yol hesaplanıp
# gerçek rotaya sapması alındı:
#     çarpan 0,000   ort 88,2 km  medyan 52,7   ← eğim SAYILMIYOR
#     çarpan 0,005   ort 71,9 km  medyan 36,4   ← EN İYİ (−%18,5 / −%30,9)
#     çarpan 0,05+                              ← kötüleşiyor
#
# 🔴 VE ÖLÇÜMÜN SINIRI DA KAYITLI: EĞRİ DÜZ. 0,005 ile 0,1 arası yalnız 5,5 km —
# 20 kat büyüyen bir çarpan sonucu %8 değiştiriyor. Ölçüm "çarpan TAM OLARAK
# 0,005'tir" DEMİYOR; dediği şu: **sıfır olmamalı** · 0,005-0,02 ayırt edilemiyor
# · 0,05 üstü kötüleşiyor. Bu sayıyı "ince ayarlamak" gürültüyü kalibre etmek
# olur — güzergâh verisi kaba (3-6 düğüm) ve ordular en ucuz yolu değil
# STRATEJİK yolu izler. YAPMA.
EGIM_CARPANI = 0.005

# 🔴 NİÇİN SÜRTÜNME DEM'DEN, KARA/DENİZ KARARI MASKEDEN — koordinatör kararı
# (M-0126, "A yolu"). `maliyet.py` prototipi kara/deniz kararını da DEM'e
# (`z > 0`) sorabiliyor ve o daha tutarlı olurdu; ama motorun maskesi
# `motor_kara.geojson`dur ve ikisi AYRIŞIYOR — prototipin kendi `kara_farki()`
# ölçümü bunu zaten söylüyor. Bugün ikisini birden değiştirmek koşuyu İKİ
# DEĞİŞKENLİ yapardı ve `A1 tavanı` vakası tam bunun bedelini ölçtü: düzeltme
# doğruydu, sonraki aşama geri aldı, ve hangi aşamanın ne yaptığı ancak tek
# değişken sabitken görülebildi.
# ⏸️ B YOLU (kara tanımını da DEM'e taşımak) ERTELENDİ — sebebi tek değişken
#    kuralı, ölçüm değil. Bu bir BORÇTUR ve kayıtsız kalırsa yarın kusur diye
#    yeniden keşfedilir; kaydı burada ve denetim/EGIM-ONGORU.md'dedir.
#
# ⚠️ GRADYAN HAM z ÜZERİNDE ALINIYOR — batimetri dâhil, ve bu KASITLI.
#    `egim_olc.py:100` kalibrasyonu da öyle yapıyordu; değiştirseydik 0,005
#    başka bir yüzeyde ölçülmüş bir sayı hâline gelirdi. Şüphe ölçüldü:
#        kıyı şeridi medyan sürtünme 1,204 · iç bölge 1,117 · maks 8,25/11,03
#    ⇒ kıyıda şişme VAR ama marjinal. Ölçülmüş şüphe, ölçülmemiş temizlikten
#      iyidir; kayıt burada duruyor.
#
# 🔴 DEM YOKSA KOŞU ÖLÜR — ve bu, sessizce eğimsiz koşmaktan İYİDİR.
#    `§11`: "ölçemediğini eleyen bir süzgeç, onu temiz sayar." Eğimsiz koşan bir
#    motor kusursuz bir harita üretir, bütün denetimler temiz raporlar, ve
#    kimse peteklerin eğimsiz çizildiğini ANLAMAZ. DEM `.gitignore:15` ile depo
#    dışında (183 MB); tek komutla geri gelir.
# ⚠️ VE SINAV BURADA, KOŞUNUN BAŞINDA — 30. dakikada değil. `motor_izi`
#    vakasının dersi: "bir nöbetçinin DOĞRU olması yetmiyor, ZAMANINDA olması
#    da gerekiyor. Geç öten alarm, ötmeyen alarmdan yalnız biraz iyidir."
EGIM_DEM = None
if os.environ.get("MOTOR_EGIMSIZ"):
    # Açık, kayıtlı, KARARLA verilmiş bir vazgeçiş — kaza değil.
    EGIM_CARPANI = 0.0
    print("  🔴 MOTOR_EGIMSIZ=1 — EĞİM ÇARPANI KAPATILDI (çarpan 0,000).")
    print("     Bu koşunun sahipliği eğimsiz hesaplanacak. KARARLA yapıldı;")
    print("     çıktının damgasına yazılır ki bir sonraki oturum bilsin.")
elif EGIM_CARPANI > 0:
    import yukseklik as _yk
    for _a in ("etopo2022_30s_dunya.tif", "etopo2022_30s_atlas.tif"):
        _y = os.path.join(BASEMAPS, "yukseklik", _a)
        if not os.path.exists(_y):
            continue
        _tam, _neden = _yk.tam_mi(_y)
        if _tam:
            EGIM_DEM = _y
            print(f"  eğim DEM: {_a} · {_neden}")
            break
        print(f"  ⚠️ {_a} ATLANDI — {_neden}")
    if EGIM_DEM is None:
        raise SystemExit(
            "EGIM DEM YOK ya da YARIM. Kosu baslamadan durduruldu.\n"
            "  arananlar: veri-kaynak/yukseklik/etopo2022_30s_dunya.tif\n"
            "             veri-kaynak/yukseklik/etopo2022_30s_atlas.tif\n"
            "  CARE : py arac/yukseklik_indir.py\n"
            "  ya da: MOTOR_EGIMSIZ=1 py arac/uret_petek.py  (KARARLA egimsiz kos)\n"
            "  NICIN OLDURUYORUM: egimsiz kosan motor kusursuz gorunen bir\n"
            "  harita uretir ve HICBIR denetim bunu gormez. Sessiz bayat\n"
            "  cikti, gurultulu bir olumden pahalidir.")

# ---------------- Kara maskesi ----------------
# KARA_TOL: kıyı çizgisinin sadeleştirme toleransı (derece). Bütün gövdeler
# kıyıyı EN SON ve bu tek maskeden aldığı için kıyı hassasiyetini tek başına
# bu sayı belirler. 0.004 ≈ 440 m Çanakkale gibi dar boğazları genişletiyordu
# (B-12); 0.002 ≈ 220 m ile maske köşe sayısı yalnız %33 artar (36,2k → 48,3k)
# ve parça havuzu sayesinde dosya bütçesine sığar — ölçüm: denetim/OTURUM-8 raporu.
KARA_TOL = 0.002
asama(f"Kara maskesi (Natural Earth 10m, tolerans {KARA_TOL})")
_ne = json.load(open(os.path.join(BASEMAPS, "ne_10m_land.geojson"), encoding="utf-8"))
KARA = unary_union([shape(f["geometry"]).buffer(0).intersection(BOLGE)
                    for f in _ne["features"] if shape(f["geometry"]).envelope.intersects(BOLGE)])
KARA = KARA.buffer(0).simplify(KARA_TOL, preserve_topology=True).buffer(0)
print("  tamam")

# ---------------- Göller ----------------
# Kural: iki yerleşim arasında göl varsa sınır göldür. Büyük göller kara
# maskesinden çıkarılır → petekler göl kıyısında biter, göl doğal sınır olur
# (Van, Urmiye, Tuz, Beyşehir, Ohri, İşkodra, Balaton...). delikleri_doldur
# sonrası .intersection(KARA) gölleri yeniden oyduğu için deliğe dönüşmezler.
# ⚠️ MODERN BARAJ GÖLLERİ ÇIKARILMAZ — hatalar 5.docx madde 1
# Kullanıcı: "Antalya İçel çukurovadaki boşluklar eğer gerçek değil ise
# düzeltilmeli... Aynı şey tuz gölünde de var." Ölçüldü: 1595'te Anadolu
# güneyinde Osmanlı olmayan TEK kara hücresi yok; oradaki üç boşluk Eğirdir,
# Beyşehir ve Tuz gölleridir — üçü de gerçek, kasıtlı. AMA aynı ölçüm, gerçek
# OLMAYAN dokuz boşluk ortaya çıkardı: Natural Earth'ün göl katmanı 20. yüzyıl
# BARAJ göllerini de taşıyor ve bunlar 1281-1923 atlasında delik açıyordu:
#   Nâsır gölü (Asvan 1970) Nûbe'de · Keban 1974 · Karakaya 1987 · Atatürk 1992
#   Esed gölü (Tabka 1974) · Tharthâr 1956 · Habbâniye 1956 · Mingeçevir 1953
#   Dinyeper zinciri (Kiev 1964, Kahovka 1956, Kremençug 1959, Dniprodzerjinsk)
# Bunlar artık maskeden çıkarılmıyor; yerleri kara sayılıyor.
# featurecla=="Reservoir" tek başına yetmiyor: NE, Mjøsa · Ilmen · Kubenskoye
# gibi DOĞAL gölleri de üzerlerindeki regülatör yüzünden "Reservoir" etiketler.
# Ölçüt: Reservoir + (yıl ≥ 1900 ya da baraj adı var) → çıkarılmaz;
# aşağıdaki DOGAL_GOL kümesi bu ölçütün yanlış yakaladığı doğal gölleri kurtarır.
DOGAL_GOL = {"Lake Il'Men'", "Ozero Kubenskoye", "Mjøsa", "Kostroma Reservoir"}
asama("Göller")
GOLLER = None
try:
    _gl = json.load(open(os.path.join(BASEMAPS, "ne_10m_lakes.geojson"), encoding="utf-8"))
    _gs, _baraj = [], []
    for f in _gl["features"]:
        p = f["properties"]
        g = shape(f["geometry"]).buffer(0)
        if not (g.envelope.intersects(BOLGE) and g.area > 0.02):
            continue
        _ad = p.get("name") or "(adsız)"
        _yil = p.get("year") or -99
        if (p.get("featurecla") == "Reservoir" and _ad not in DOGAL_GOL
                and (_yil >= 1900 or p.get("dam_name"))):
            _baraj.append(f"{_ad} ({_yil if _yil > 0 else 'yıl?'})")
            continue
        g = g.intersection(BOLGE)
        if not g.is_empty: _gs.append(g)
    # ⚠️ TARİHÎ GÖL DÜZELTMELERİ — baraj kuralının AYNADAKİ HÂLİ
    # Yukarıdaki baraj kuralı maskeye FAZLA su girmesini engeller (1960'ta
    # yapılmış göl 1500 haritasında delik açmasın). Buradaki düzeltme EKSİK
    # suyu tamamlar: tarihte var olan ama modern katmanda kurumuş göller.
    # Ölçüldü (2026-07-30, Oturum 16): Natural Earth Aral'ı kuruma sonrası üç
    # artık parça olarak taşıyor (South Aral 3.392 + North Aral 2.952 +
    # Barsakelmes 235 = 6.579 km²); tarihî göl 73.666 km². Aradaki
    # 67.087 km² bugün KARA sayılıyor ve tamamını TEK petek yutuyor: KÜNGRAT.
    # Yani Hîve Hanlığı haritada gölün üstüne taşıyor. Oturum 11'in bulgusu,
    # Oturum 15'in poligonu (data/goller.js), ölçüm bu oturumda doğrulandı.
    for _eg in girdi.oku_goller():
        _g = shape(_eg["geometry"]).buffer(0).intersection(BOLGE)
        if not _g.is_empty: _gs.append(_g)
    GOLLER = unary_union(_gs).buffer(0).simplify(0.01, preserve_topology=True).buffer(0)
    KARA = KARA.difference(GOLLER).buffer(0)
    print(f"  {len(_gs)} büyük göl kara maskesinden çıkarıldı")
    print(f"  {len(_baraj)} MODERN BARAJ GÖLÜ çıkarılmadı (anakronik delik açıyordu):")
    for _b in sorted(_baraj): print(f"      {_b}")
except Exception as e:
    print("  göl verisi yok:", e)

# ---------------- Nehir yatakları ----------------
asama("Nehir yatakları")
BUYUK = {"Danube","Duna","Dunav","Sava","Drava","Tisza","Tisa","Morava","Dniester",
         "Dnipro","Dnieper","Prut","Southern Bug","Don","Kuban","Firat","Al Furat",
         "Euphrates","Dijlah","Tigris","Murat","Kura","Aras","Nile","Bahr el Nil",
         "Maritsa","Meric","Vardar","Struma","Sakarya","Kizilirmak","Yesilirmak",
         "Seyhan","Ceyhan","Jordan","Orontes","Buyuk Menderes","Gediz",
         # --- Anadolu beylik sınırlarını taşıyan akarsular (kullanıcı talebi:
         # sınırlar cetvelle değil coğrafyayla çizilsin). Natural Earth'te adı
         # geçmeyenler sessizce atlanır, fazladan isim zarar vermez. ---
         "Kucuk Menderes","Kücük Menderes","Menderes","Maeander","Meander",
         "Bakircay","Caicus","Susurluk","Simav","Kocacay",
         "Porsuk","Aksu","Kopru","Koprucay","Dalaman","Esen","Xanthos",
         "Goksu","Calycadnus","Coruh","Kelkit","Devrez","Filyos","Yenice",
         "Buyuk Zap","Great Zab","Kucuk Zab","Little Zab","Habur","Khabur",
         "Balikh","Asi","Berdan","Tarsus","Manavgat","Bartin","Gonen","Granicus",
         # --- YEREL YAZIMLAR (COĞRAFYA'nın bulgusu, mekanizması ölçülerek
         # düzeltildi). Natural Earth aynı nehri parça parça FARKLI ADLA
         # kaydediyor ve parçaların rivernum'ı bile ayrı:
         #     name='Dicle'  rivernum=120        name='Tigris' rivernum=135
         # Motor "Tigris" parçasını yaslıyordu, "Dicle" parçasını yaslamıyordu.
         # ⚠️ COĞRAFYA bunu "name_alt okunmuyor" diye teşhis etmişti; ölçtüm,
         # İKİ KAYDIN DA name_alt ALANI BOŞ — o yama bu vakayı çözmezdi.
         # Sebep listenin kendisiydi: Tigris vardı, Dicle yoktu. Aynı sınıfta
         # üç isim daha (karşılıkları listede olduğu hâlde yerel yazımı yok).
         "Dicle","Donau","Tuna","Evros","Drau"}
def _ad_sadelestir(s):
    """Nehir adlarını karşılaştırılabilir hâle getirir. Natural Earth dosyasındaki
    Türkçe adlar bozuk kodlanmış ('Byk Menderes', 'Kiz?lirmak'); harfi harfine
    karşılaştırma yüzünden Büyük Menderes ve Kızılırmak gibi iki büyük sınır
    nehri sessizce devre dışı kalıyordu. Alfabe dışı her şey atılıp küçük harfe
    indirilerek eşleşme sağlanır."""
    return "".join(c for c in s.lower() if c.isalpha())

BUYUK_SADE = {_ad_sadelestir(b) for b in BUYUK}
# Bozuk kodlanmış hâlleri de tanı (ü/ı düşmüş varyantlar)
BUYUK_SADE |= {"bykmenderes", "kizlirmak", "kiziirmak", "kckmenderes",
               "yesiirmak", "bakiray", "kprüay", "kopruay", "gksu"}

# Nehir önem eşiği — Natural Earth `scalerank`. Ölçüm gerekçesi aşağıda.
NEHIR_ONEM_ESIGI = 5.0

NEHIRLER = []
_bulunan = set()
try:
    _rv = json.load(open(os.path.join(BASEMAPS, "ne_10m_rivers.geojson"), encoding="utf-8"))
    for f in _rv["features"]:
        pr = f["properties"]
        # ⚠️ `name_alt` DE OKUNUR — ikinci ve AYRI bir kaçak yolu. Natural Earth
        # bazı parçaları yerel adla kaydedip asıl adı name_alt'a koyuyor
        # (Mur → name_alt="Drava"). Yukarıdaki yerel-yazım eklemeleri bu vakayı
        # ÇÖZMEZ, çünkü orada eşleşen ad name alanında değil.
        # Tersi de doğru: Dicle'nin name_alt'ı BOŞ, yani bu satır de onu
        # kurtarmaz. İki mekanizma birbirinin yerine geçmez, ikisi de gerekli.
        _adlar = [pr.get("name"), pr.get("name_en"), pr.get("name_alt")]
        _ad = next((a for a in _adlar
                    if a and _ad_sadelestir(a) in BUYUK_SADE), None)
        # 🔴 AD LİSTESİ ARTIK TEK KAPI DEĞİL — `scalerank` İKİNCİ KAPI.
        # Ölçüldü (7 Ağustos 2026): harita penceresinde 780 nehir parçası ve
        # 593 ADLI akarsu var; motor bunların 43'ünü / 31 adını kullanıyordu.
        # Sebep pencere DEĞİLDİ, yukarıdaki 31 adlık BEYAZ LİSTEYDİ — ve liste
        # tamamen Osmanlı kuşağı. Ren · Po · Elbe · Vistül · İndus · Ganj ·
        # Amuderya · Nijer, hiçbiri yoktu. VERİ DURUYORDU, SÜZGEÇ GEÇİRMİYORDU.
        #
        # Natural Earth her parçaya `scalerank` (önem derecesi) veriyor.
        # Pencerede kümülatif: ≤1:21 · ≤2:46 · ≤3:77 · ≤4:124 · ≤5:157 ·
        # ≤6:267 · ≤7:447 · hepsi 780. Eşik 5 seçildi: 3,6 kat artış ama hâlâ
        # "büyük nehir" sınıfı — dereye yaslanma riski yok. 6'da 267'ye
        # fırlıyor ve gürültü başlıyor.
        #
        # ⚠️ AD LİSTESİ KALDIRILMADI, TABAN OLARAK DURUYOR: elle seçilmiş
        # beylik sınırı akarsularının bazısı küçük ve scalerank'ı yüksek
        # (Porsuk, Bakırçay, Devrez…). İki kapı BİRBİRİNİN YERİNE GEÇMEZ —
        # ad listesi "küçük ama sınır taşıyan"ı, scalerank "büyük ama adı
        # listede olmayan"ı kurtarır.
        try:
            _sr = float(pr.get("scalerank"))
        except (TypeError, ValueError):
            _sr = 99.0
        if _ad is None and _sr > NEHIR_ONEM_ESIGI:
            continue
        g = shape(f["geometry"])
        if g.envelope.intersects(BOLGE):
            NEHIRLER.append(g.intersection(BOLGE))
            _bulunan.add(_ad or (pr.get("name") or pr.get("name_en") or "?"))
    NEHIRLER = [n for n in NEHIRLER if not n.is_empty]
except Exception as e:
    print("  nehir verisi yok:", e)
NEHIR_HAT = unary_union(NEHIRLER) if NEHIRLER else None
print(f"  {len(NEHIRLER)} nehir parçası — {len(_bulunan)} adlı akarsu: "
      + ", ".join(sorted(_bulunan)))

# ---------------- Dağ sırtları ----------------
# İki şehir arasında dağ varsa sınır dağın sırtından geçer. Natural Earth dağ
# sırası poligonlarının orta ekseni (skeleton yerine merkez hattı yaklaşımı:
# poligonun içine doğru daraltılmış hattı) sırt kabul edilir.
asama("Dağ sırtları")
SIRTLAR = []
try:
    _dg = json.load(open(os.path.join(BASEMAPS, "ne_10m_geography_regions_polys.geojson"),
                         encoding="utf-8"))
    # 🔴 ARTIK YALNIZ `Range` DEĞİL — üç engel sınıfı daha eklendi (7 Ağustos).
    # Askerî coğrafya doktrini (OCOKA/OAKOC) arazi geçirgenliğini üçe ayırır:
    #   unrestricted (ova · bozkır)      → engel DEĞİL, dahil edilmez
    #   restricted (yayla · bataklık)    → yavaşlatır, kanalize eder  ← EKLENDİ
    #   severely restricted (sıradağ)    → zaten vardı
    # Ölçüm (pencerede): Range/mtn 127 · Plateau 34 · Gorge 2 · Wetlands 1.
    # `Plain` (ova, 16 poligon) BİLEREK DIŞARIDA — ova engel değildir, sınır
    # ovada durmaz. `Geoarea` (bozkır, 23) da dışarıda ve sebebi TERS:
    # bozkır engel değil KORİDORDUR (Deşt-i Kıpçak, Kırım akınlarının yolu);
    # onu katmak sınırı yanlış yere yaslardı. Bozkır ayrı bir mantık ister.
    ENGEL_SINIFI = ("Range/mtn", "Plateau", "Gorge", "Wetlands")
    for f in _dg["features"]:
        p = f["properties"]
        _fc = p.get("FEATURECLA") or ""
        if not any(k in _fc for k in ENGEL_SINIFI): continue
        g = shape(f["geometry"]).buffer(0)
        if not g.envelope.intersects(BOLGE): continue
        g = g.intersection(BOLGE)
        if g.is_empty or g.area < 0.05: continue
        # sırt hattı: poligonu içeriye daraltıp kalan çekirdeğin sınırı
        cekirdek = g.buffer(-0.12)
        SIRTLAR.append(cekirdek.boundary if not cekirdek.is_empty else g.boundary)
except Exception as e:
    print("  dağ verisi yok:", e)
SIRT_HAT = unary_union(SIRTLAR) if SIRTLAR else None
print(f"  {len(SIRTLAR)} dağ sırası")

# ---------------- Yerleşim verisi ----------------
# ⚠️ ÇOK DOSYALI GİRDİ (YAPILACAKLAR.md — paralel oturumların ön koşulu).
# Okuma mantığı ve dosya listesi artık `arac/girdi.py`'de; motor ile denetle.py
# aynı modülü kullanıyor. Sebep tarihî: iki araç aynı veriyi farklı katılıkta
# okuduğu için bir kez DENETİM TEMİZ DERKEN ÜRETİM ÇÖKTÜ (sondaki virgül
# toleransı motorda yoktu). Tek okuma noktası bunu yapısal olarak imkânsız kılar.
# Bir parti canlıya alınacaksa değişecek tek şey girdi.py'deki GIRDI_DOSYALARI.
asama("Yerleşimler okunuyor")
YERLER = girdi.yukle()
_cakisan = girdi.yakin_ciftler(YERLER)
if _cakisan:
    print(f"  UYARI: {len(_cakisan)} nokta çifti {girdi.YAKINLIK_ESIK_KM} km'den yakın")
    for _d, _a, _b in _cakisan[:10]:
        print(f"      {_d:.2f} km  {_a} <-> {_b}")
# ⚠️ Alan varsayılanları artık girdi.py'de (VARSAYILAN) — motor ve denetim tam
# alanlı kayıt alıyor. Buradaki blok `d` alanını SAYMIYORDU ve Afrika partisi
# girdiye eklendiğinde üretim `KeyError: 'd'` ile düştü; 47 Afrika kaydında
# d: hiç yok (Osmanlı dönemi olmayan yerler), çekirdek dosyada ise hep d:[] var.
# Aşağıdaki setdefault'lar artık gereksiz ama zararsız güvenlik ağı olarak
# duruyor; yeni isteğe bağlı alanın varsayılanı girdi.py'ye yazılır.
for y in YERLER:
    for _alan, _dv in girdi.VARSAYILAN.items():
        y.setdefault(_alan, [] if _dv == [] else _dv)
    for sp in y["s"]:
        if sp["d"] not in BOYALAR:
            print(f"  UYARI boya: {y['ad']} bilinmeyen devlet kimliği '{sp['d']}'")
print(f"  {len(YERLER)} yerleşim ({sum(1 for y in YERLER if y['d'] or y['v'])} Osmanlı, "
      f"{sum(1 for y in YERLER if not (y['d'] or y['v']))} komşu, "
      f"{sum(1 for y in YERLER if y['v'])} tâbi dönemi olan)")

# Kademe doğrulaması: her Osmanlı k3/k4 yerleşimi geçerli bir k1/k2 merkeze bağlı olmalı
AD2IDX = {y["ad"]: i for i, y in enumerate(YERLER)}


# ⚠️ m: ZİNCİRİ GEÇİŞLİ ÇÖZÜLÜR — hatalar 7 turunun devri (merkez oturum ölçtü)
# Eski kontrol TEK HOP bakıyordu: y["m"] doğrudan k1/k2 değilse uyarı basıyordu
# ve bölge katmanı o yerleşimi k:3 bir merkezin altında topluyordu. Sekiz kayıt
# (Divriği, Arapkir, Hısn-ı Mansûr, Behisni, Kâhta, Siverek, Kanina, Oreoi) bu
# yüzden bölge sınırına girmiyordu: m: alanları Malatya/Harput/Urfa gibi k:3
# merkezleri gösteriyor, onlar da kendi k:2 merkezine bağlı.
# Veriyi değiştirmek ÇÖZÜM DEĞİL: dört seçenek de ölçüldü (hepsi Maraş / hepsi
# Diyarbakır / hepsi Sivas / karma) ve dördü de Değişmez 3 çelişkisini 378'den
# 390-395'e çıkarıp 383 tavanını aşıyor. Sebep MIMARI.md §3.4: m: tek değerli ve
# zamansız, hangi k:2 merkezi seçilse bir dönemde başka devletin elinde kalıyor.
# Kademe uyarısının bedeli kozmetik (bölge sınırı çizilmiyor, toprak boyaması
# etkilenmiyor); Değişmez 3'ün bedeli gerçek bir tutarsızlık sinyalini kaybetmek.
# Bu yüzden düzeltme motorda: zincir iki hop takip edilince Divriği → Malatya →
# Maraş (k:2), Siverek → Urfa → Diyarbakır (k:2) diye kapanıyor.
def k12_merkez(i, azami=5):
    """m: zincirini k1/k2 bir merkeze kadar takip eder. Kendisi k1/k2 ise
    kendini döner. Zincir kapanmazsa (ya da döngüye girerse) None."""
    gorulen, j = set(), i
    for _ in range(azami):
        y = YERLER[j]
        if y["k"] in (1, 2):
            return j
        ad = y["m"]
        if not ad or ad not in AD2IDX or j in gorulen:
            return None
        gorulen.add(j)
        j = AD2IDX[ad]
    return None


_kademe_uyari = 0
for i, y in enumerate(YERLER):
    if (y["d"] or y["v"]) and y["k"] in (3, 4) and k12_merkez(i) is None:
        print(f"  UYARI kademe: {y['ad']} (k:{y['k']}) m: zinciri bir k1/k2 "
              f"merkeze kapanmıyor (m:{y['m'] or '—'})")
        _kademe_uyari += 1
print(f"  kademe: {_kademe_uyari} yerleşimin m: zinciri açık (beklenen 0)")

def gun(s):
    y, a, g = s.split("-")
    return int(y) * 10000 + int(a) * 100 + int(g)

# ---------------- Petekler (Voronoi) ----------------
asama("Petekler üretiliyor (Voronoi)")
noktalar = [Point(y["lon"], y["lat"]) for y in YERLER]
vd = voronoi_diagram(MultiPoint(noktalar), envelope=BOLGE, tolerance=0.0)
hucreler = list(vd.geoms)
# her hücreyi içindeki noktayla eşle
PETEK = [None] * len(YERLER)
for h in hucreler:
    for i, p in enumerate(noktalar):
        if PETEK[i] is None and h.contains(p):
            PETEK[i] = h.intersection(BOLGE)
            break
eksik = [i for i, p in enumerate(PETEK) if p is None]
for i in eksik:                              # nadiren eşleşmezse en yakın hücre
    PETEK[i] = min(hucreler, key=lambda h: h.distance(noktalar[i])).intersection(BOLGE)
print(f"  {len(PETEK)} petek ({len(eksik)} yedek eşleşme)")

# ---------------- A1: YARIÇAP TAVANI ----------------
# 🔴 EMRE, 8 Ağustos 2026: "Bir yerleşim yerinin idarî, askerî, sosyal,
# siyasal olarak hükmedeceği alan bellidir… uçsuz bucaksız toprağa, çöle,
# bozkıra, ormana ancak X kilometre kadar hâkim olabilir."
# Doğru, ve bu tavan motorda YOKTU: Voronoi hücresi komşu bulamayınca
# sonsuza kadar büyüyordu. Ölçülmüş sonucu: `banda-adalari` 573.188 km²
# boyuyordu — kendi yüzölçümünün (~180 km²) ~3.200 KATI.
#
# ⚠️ VE X BİR KİLOMETRE DEĞİL, BİR GÜN SAYISIDIR. Ölçüldü: yoğun ve
# gerçekçi modellenmiş bölgelerde komşu mesafesi Batı Anadolu 17 km
# (yarım günlük yürüyüş), Trakya ve Nil vadisi 33-34 km (bir günlük).
# Veriye bu konmadı — ÖLÇÜNCE ÇIKTI.
#
# 🔴 İLK TABLO YÜRÜYÜŞ HIZINDAN TÜRETİLDİ VE ÇOK SIKIYDI. Kara maskesinden
# SONRA ölçülüp çarpan süpürüldü (ölçüt: tavan BOŞ bölgede bağlasın, YOĞUN
# bölgede HİÇ bağlamasın):
#     çarpan  kayıp%  bağlanan   B.Anadolu · Trakya · Nil · İtalya · Fransa
#       1.5   33.8%     507        0 · 0 · 12 · 0 · 0
#       2.0   23.1%     304        0 · 0 ·  4 · 0 · 0    ← SEÇİLDİ
#       3.0   11.8%     126        hepsi 0
# ⚠️ Nil'in 4'ü YANLIŞ POZİTİF DEĞİL: Nil yerleşimleri BİR ÇİZGİ boyunca
# yoğundur, hücreleri çöle sarkar. Asyût'un peteğinin Sahra'ya 400 km
# uzanması ZATEN yanlıştı; tavan onu kesiyor. Testin "yoğun bölge" tanımı
# ALAN yoğunluğuna bakıyor, DİZİLİME değil.
#
# 🟢 VE ASIL DOĞRULAMA SAYIDA DEĞİL, KESİLENLERİN KİMLİĞİNDE: en çok
# kesilen 20 peteğin YİRMİSİ DE çöl, yağmur ormanı, tundra ya da yüksek
# yayla (Timbuktu -2,45 M km² · Ndjamena -1,29 M · Agadez -914 bin ·
# Kisangani -598 bin · Hatanga · Şigatse · Dunhuang · Hotan…).
# LİSTEDE TEK BİR TARIM ÇEKİRDEĞİ YOK.
#
# 📌 Ve tavanın bedava bir kazancı var: Sahra ve Rub'ul Hâlî'deki DOLGU
# NOKTALARI sırf emilmeyi engellemek için konmuş bir HİLEYDİ; tavan o işi
# yapısal olarak yapınca emekli edilebilirler.
TAVAN_KM = {1: 700, 2: 420, 3: 280, 4: 140, 0: 280}   # ölçülmüş: TABAN × 2,0
_TV_BAGLI = set()          # tavanın BAĞLADIĞI hücrelerin indisleri (§KIYI'de dolar)
_tv_once = _tv_sonra = 0.0

def _tavan_daire(p, r_km, lat):
    """Enlem düzeltmeli tavan elipsi. Boylam derecesi enlemle kısalır."""
    dy = r_km / 111.32
    dx = r_km / (111.32 * max(0.15, math.cos(math.radians(lat))))
    return _scale(p.buffer(1.0, quad_segs=24), xfact=dx, yfact=dy, origin=p)

# ═══════════════════════════════════════════════════════════════════════════
# 🔴 A1b: TAVAN ARTIK İZOTROP DEĞİL — YÖNE DUYARLI  (MOTOR TAVAN-YÖN, 12 Ağu 2026)
# ═══════════════════════════════════════════════════════════════════════════
# EMRE, beş ekran görüntüsüyle:
#   "Pergelle çizilmiş gibi yuvarlak alanlar boyamış… O merkezden çizilen
#    çemberin çaplarına insan yolculuğu sanki çöl ya da düz ova imiş gibi aynı
#    uzaklıkta mı? O çember etrafındaki 8 noktayı düşün, her birisi için farklı
#    uzaklıklar, engeller söz konusu."
#   "Yuan hânedanının toprakları birbirinden hep ayrık… arada sahipsiz kalan
#    bu topraklar nasıl yapılmalı?"
#
# Teşhis birebir doğruydu: `_tavan_daire` İZOTROP bir elips çizer — her yöne
# aynı. ÖLÇÜLDÜ (12 Ağu, 2356 taban, ham Voronoi ∩ gerçek kara maskesi):
#     A1 tavanı 391/2356 noktayı bağlıyor · 17.198.016 km² kesiyor
#     = KARA'nın %22,9'u   (motorun kendi logu, koşu 4b: %23,0 — çapraz doğrulama)
#
# 📌 VE ÇÖL TAVANI (:1549) BUNU YAPMIYOR, YAPAMAZ: COL_TAVAN_KM = 300 iken
#    k0=280 · k3=280 · k4=140 hepsi ALTINDA ⇒ o kademelerde A1 zaten daha
#    içeride, çöl tavanı YAPISAL OLARAK hiçbir şey kesemez (2283/2356 nokta).
#    Sahra çemberlerini adı "çöl tavanı" olan şey DEĞİL, A1 çiziyor.
#
# ── KURAL, tek cümlede ─────────────────────────────────────────────────────
#   Tavan ŞEKİL değiştirir, BOYUT değiştirmez: komşusu uzak olan yöne uzanır,
#   yakın olan yöne çekilir — ve BOYADIĞI ALAN AYNI KALIR.
#
# 🔴 NİÇİN ALAN KORUNUYOR — İKİ ADIMDA ÖĞRENİLDİ, İKİSİ DE ÖLÇÜLEREK.
#
# ① İLK BİÇİM komşusuz sektöre de `k·r` veriyordu, yani BOŞLUĞA doğru
#    büyütüyordu. Ölçüm iyi görünüyordu ve tam bu yüzden tehlikeliydi: boşluğa
#    büyümek tavanın VAR OLUŞ SEBEBİNİ geri getirir (`banda-adalari`
#    573.188 km² — kendi yüzölçümünün ~3.200 katı).
#
# ② İKİNCİ BİÇİM yalnız gerçek komşuya doğru büyütüyordu. ÖLÇÜLDÜ (2362 taban),
#    ve KENDİ GEREKÇESİNİ ÇÜRÜTTÜ:
#        k_üst   kopuk çift %          en büyük petek     Osmanlı      toplam
#                Sahra/Himalaya/Yuan
#        1,0        11 / 11 / 18          245.514 km²          +0       +0,00%
#        1,5         8 /  8 / 16          375.863 km²    +225.274       +5,23%
#        2,0         8 /  8 / 16          539.518 km²    +272.170       +7,37%
#    ⇒ Boşluğu neredeyse HİÇ kapatmıyor (%18 → %16), ama en büyük peteği
#      `banda-adalari` bölgesine taşıyor. **Bedel büyük, kazanç yok.**
#
# 🟢 VE ASIL TEŞHİS (koordinatör, 12 Ağustos): EKSEN YANLIŞTI.
#        Emre ne dedi   "pergelle çizilmiş gibi YUVARLAK"  → ŞEKİL kusuru
#        gevşetme       alanı büyütür                      → BOYUT değişimi
#    ***Daireyi kırmak için alanı büyütmek gerekmiyor.*** Ve büyütmek zaten
#    kırmıyor: DAHA BÜYÜK BİR ÇEMBER, ÇEMBER OLMAKTAN ÇIKMAZ.
#
# ── NİÇİN "d/2" ────────────────────────────────────────────────────────────
# Komşu d km ötedeyse Voronoi sınırı zaten TAM ORTADAN (d/2) geçer. Şeklin o
# yöndeki ham ölçüsü d/2'dir: "bu yönde sınırımı komşum çiziyor" demek.
# Normalizasyon bu ham ölçüleri, alanı bozmadan, bir çokgene çevirir.
#
# ── ALAN KORUMA NASIL ──────────────────────────────────────────────────────
# İki kademe, ve İKİSİ DE yapısal:
#   ① TAVAN BAĞLAMIYORSA (hücre zaten dairenin içinde) → DAİRENİN KENDİSİ
#      döndürülür. Ölçüldü: 2362 noktanın ~1970'i böyle ⇒ o noktalarda çıktı
#      BUGÜNKÜNÜN BİREBİR AYNISI, tek bit değişmez.
#   ② TAVAN BAĞLIYORSA → λ ölçeği, kesilen alanın DEĞİŞMEMESİ şartıyla
#      ikiye bölme (bisection) ile çözülür:
#           alan(hücre ∩ çokgen(λ·w))  =  alan(hücre ∩ daire(R))
#      ⇒ Osmanlı alanı öngörüsü bir UMUT değil, HESABIN KENDİSİ.
#
# ⚠️ NİÇİN DİSK ALANINI EŞİTLEMEK YETMEZDİ: normalizasyon `∮r²dθ/2 = πR²`
#    diskin alanını korur, ama BOYANAN alan `hücre ∩ tavan`dır. Şekil, tavanın
#    BAĞLADIĞI yöne (hücrenin büyük olduğu yön) uzanıp bağlamadığı yöne
#    (hücrenin zaten küçük olduğu yön) çekilir ⇒ kesişim SİSTEMATİK OLARAK
#    BÜYÜR. Yani disk-normalizasyonu "alan korundu" der ve boyanan alan artar.
#    📌 Bu, bu projenin "denetim var ≠ o soruyu soruyor" ailesinin ta kendisi:
#       doğru büyüklüğü korumak yetmiyor, DOĞRU BÜYÜKLÜĞÜ korumak gerekiyor.
_TV_ANIZ_KAT = 1.75        # şekil oranı sınırı: hiçbir yön medyanın ±bu katından
                           # öteye gidemez (dar mızrak çıkmasın diye)
_TV_SEKTOR = 16            # yön çözünürlüğü (22,5°)
_TV_KOSE = 128             # çokgen köşe sayısı
_TV_BISEC = 24             # λ için ikiye bölme adımı

# Voronoi komşuluğu — "o yönde komşu var mı" sorusunun EVRENİ budur.
# ⚠️ Neden en-yakın-N nokta DEĞİL: bir nokta bana yakın olsa bile araya başka
#    bir hücre giriyorsa benim sınırımı O belirlemez. Tavanın soracağı soru
#    "bu yönde sınırımı kim çiziyor" — cevabı Voronoi komşuluğudur.
_tv_hucre_agac = STRtree(PETEK)
_TV_KOMSULAR = []
for _i in range(len(YERLER)):
    _ks = []
    if PETEK[_i] is not None and not PETEK[_i].is_empty:
        for _k in _tv_hucre_agac.query(PETEK[_i]):
            _k = int(_k)
            if _k == _i or PETEK[_k] is None or PETEK[_k].is_empty:
                continue
            try:
                if PETEK[_i].intersection(PETEK[_k]).length > 1e-9:
                    _ks.append(_k)
            except Exception:
                pass
    _TV_KOMSULAR.append(_ks)
print(f"     Voronoi komşuluğu kuruldu · ortalama komşu "
      f"{sum(len(k) for k in _TV_KOMSULAR)/max(len(YERLER),1):.1f}")


def _tv_ham_olcu(i):
    """Sektör başına HAM şekil ölçüsü w_s (km). Voronoi komşusu olan yönde
    d/2 (komşuyla bölüşüm çizgisi); olmayan yönde, iki yanındaki dolu
    sektörlerden AÇISAL ARA DEĞER — sabit bir sayı uydurulmuyor."""
    y = YERLER[i]
    la, lo = y["lat"], y["lon"]
    _sek = [None] * _TV_SEKTOR
    for j in _TV_KOMSULAR[i]:
        d = girdi.km(la, lo, YERLER[j]["lat"], YERLER[j]["lon"])
        dy = YERLER[j]["lat"] - la
        dx = (YERLER[j]["lon"] - lo) * math.cos(math.radians(la))
        if dx == 0.0 and dy == 0.0:
            continue
        s = int((math.atan2(dy, dx) % (2 * math.pi))
                / (2 * math.pi / _TV_SEKTOR)) % _TV_SEKTOR
        if _sek[s] is None or d < _sek[s]:
            _sek[s] = d
    dolu = [s for s in range(_TV_SEKTOR) if _sek[s] is not None]
    if not dolu:
        return None                       # komşusuz nokta → şekil bilgisi YOK
    w = []
    for s in range(_TV_SEKTOR):
        if _sek[s] is not None:
            w.append(_sek[s] / 2.0); continue
        ileri = min((k - s) % _TV_SEKTOR for k in dolu)
        geri = min((s - k) % _TV_SEKTOR for k in dolu)
        a = _sek[(s + ileri) % _TV_SEKTOR] / 2.0
        b = _sek[(s - geri) % _TV_SEKTOR] / 2.0
        w.append((a * geri + b * ileri) / (ileri + geri))
    # ŞEKİL ORANI SINIRI: dar mızrak çıkmasın — medyanın ±_TV_ANIZ_KAT katı
    med = sorted(w)[len(w) // 2]
    if med <= 0:
        return None
    return [min(med * _TV_ANIZ_KAT, max(med / _TV_ANIZ_KAT, x)) for x in w]


def _tv_cokgen_kur(lo, la, rs):
    """Sektör yarıçaplarından çokgen. Sektörler arası doğrusal geçiş —
    köşeli sıçrama ortak kenar ağını bozardı."""
    co = max(0.15, math.cos(math.radians(la)))
    cs = []
    for t in range(_TV_KOSE):
        th = 2 * math.pi * t / _TV_KOSE
        s = int(th / (2 * math.pi / _TV_SEKTOR)) % _TV_SEKTOR
        f = (th % (2 * math.pi / _TV_SEKTOR)) / (2 * math.pi / _TV_SEKTOR)
        rr = rs[s] * (1 - f) + rs[(s + 1) % _TV_SEKTOR] * f
        cs.append((lo + rr / 111.32 / co * math.cos(th),
                   la + rr / 111.32 * math.sin(th)))
    return Polygon(cs)


_TV_AYNI = 0          # daire aynen döndürüldü (tavan bağlamıyor ya da şekil yok)
_TV_SEKILLI = 0       # şekil verildi
_TV_COZULEMEDI = 0    # λ bulunamadı → daire korundu
_TV_SAPMA = []        # |boyanan alan farkı| / hedef  — alan koruma NÖBETÇİSİ


def _tavan_cokgen(i):
    """ALAN KORUYAN yöne duyarlı tavan.

    🟢 C13 GEÇME YOLU İKİ AYRI DALDA YAPISAL — ikisi de `_tavan_daire`in
       KENDİSİNİ döndürür, yaklaşık değil:
         ① tavan bu noktada BAĞLAMIYOR  (hücre zaten dairenin içinde)
         ② şekil ölçüsü yok ya da her yönde AYNI (komşusuz / eş dağılımlı)
    """
    global _TV_AYNI, _TV_SEKILLI, _TV_COZULEMEDI
    y = YERLER[i]
    la, lo = y["lat"], y["lon"]
    R = TAVAN_KM.get(y.get("k") or 0, TAVAN_KM[0])
    daire = _tavan_daire(noktalar[i], R, la)
    hucre = PETEK[i]
    if hucre is None or hucre.is_empty:
        _TV_AYNI += 1
        return daire
    # ⚡ HIZLI YOL — `∩ KARA` PAHALI (maske ~48 bin köşe, 2362 hücre).
    # Ham hücre zaten dairenin içindeyse tavan hiçbir şekilde bağlayamaz;
    # KARA ile kesmeye hiç gerek yok. Noktaların çoğu bu daldan çıkıyor.
    try:
        if daire.contains(hucre):
            _TV_AYNI += 1
            return daire
        hucre = hucre.intersection(KARA)
    except Exception:
        _TV_AYNI += 1
        return daire
    a_tam = hucre.area
    if a_tam <= 0:
        _TV_AYNI += 1
        return daire
    hedef = hucre.intersection(daire).area
    if hedef >= a_tam * (1 - 1e-9):        # ① tavan BAĞLAMIYOR
        _TV_AYNI += 1
        return daire
    w = _tv_ham_olcu(i)
    if w is None or max(w) - min(w) < 1e-12:   # ② şekil bilgisi yok
        _TV_AYNI += 1
        return daire
    # ③ λ'yı ikiye bölerek çöz: boyanan alan DEĞİŞMESİN
    olcek = R / (sorted(w)[len(w) // 2])
    lo_k, hi_k = olcek * 0.05, olcek * 20.0
    en_iyi, en_iyi_fark = None, 9e99
    for _ in range(_TV_BISEC):
        ort = (lo_k + hi_k) / 2.0
        g = _tv_cokgen_kur(lo, la, [x * ort for x in w])
        a = hucre.intersection(g).area
        f = abs(a - hedef)
        if f < en_iyi_fark:
            en_iyi, en_iyi_fark = g, f
        if a < hedef:
            lo_k = ort
        else:
            hi_k = ort
    if en_iyi is None or en_iyi_fark > hedef * 0.01:   # %1'e inemedi
        _TV_COZULEMEDI += 1
        return daire
    _TV_SEKILLI += 1
    _TV_SAPMA.append(en_iyi_fark / max(hedef, 1e-12))
    return en_iyi


TAVAN_DAIRE = [_tavan_cokgen(i) for i in range(len(YERLER))]
print(f"     tavan (km): " + " · ".join(f"k{k}={v}" for k, v in sorted(TAVAN_KM.items())))
print(f"     ALAN KORUYAN anizotropi: {_TV_SEKILLI} peteğe şekil verildi · "
      f"{_TV_AYNI} daire AYNEN korundu · {_TV_COZULEMEDI} çözülemedi")
print(f"     şekil oranı sınırı ×{_TV_ANIZ_KAT} · {_TV_SEKTOR} sektör · "
      f"{_TV_KOSE} köşe · {_TV_BISEC} ikiye bölme adımı")
# 🔴 ALAN KORUMA NÖBETÇİSİ — "korudum" demek yetmez, ÖLÇÜLÜR.
if _TV_SAPMA:
    _sp = sorted(_TV_SAPMA)
    print(f"     alan koruma sapması: medyan %{100*_sp[len(_sp)//2]:.4f} · "
          f"azamî %{100*_sp[-1]:.4f} "
          + ("✓" if _sp[-1] <= 0.01 else "✗ BİR PETEKTE %1'İ AŞTI"))
if _TV_COZULEMEDI > _TV_SEKILLI * 0.05:
    print(f"     ⚠️ ÇÖZÜLEMEYEN ORANI YÜKSEK ({_TV_COZULEMEDI}) — "
          f"_TV_BISEC ya da şekil oranı sınırı gözden geçirilmeli")
print(f"     ⚠️ tavan BURADA UYGULANMAZ — kıyı kesiminde uygulanır (bkz. §KIYI)")
# 🔴 ÜÇ YERDE OKUNUYOR, ÜÇÜ DE `TAVAN_DAIRE`DEN BESLENİR — ve bu KASITLI:
#     :605  kurulum  ·  §KIYI  kıyı kesimi  ·  ADA KURALI  "boşta kalan pay"
# Ada kuralı payı yalnız `TAVAN_DAIRE[_en]` içinde verir; ayrı bir izotrop
# daire kullansaydı kıyı kesimiyle AYRIŞIRDI ve `MIMARI §2.9`un "aşamalar
# arası sözleşme yok" ailesine yeni bir vaka eklenirdi.

# 🔴 NİÇİN BURADA DEĞİL — 9 Ağustos 2026, ÖLÇÜLDÜ VE ÖNGÖRÜ ÇÜRÜDÜ.
# Tavan ilk yazıldığında TAM BURAYA, Voronoi'nin hemen ardına kondu. Koşu 4
# başladı ve motorun kendi çıktısı öngörüyü çürüttü:
#     öngörü  ~300 petek · alan ~%23      (kara maskesi ÜZERİNDE kalibre edildi)
#     ölçüm    513 petek · alan  %40,0
#     ve bozuk kenar 58 → 75
# İki ayrı sebep vardı ve ikisi de YER'den geliyordu:
#   ① Bu noktada hücre yalnız `BOLGE` ile kesik, KARA ile DEĞİL — yani tavan
#      DENİZİ de kesiyordu. Kalibrasyon karada ölçmüştü ⇒ %23 yerine %40.
#      Deniz zaten 924. satırda siliniyor, yani o kesim BOŞA çalışıyordu.
#   ② Ortak kenar ağı tavandan SONRA kuruluyor (§TOPOLOJİ). Tavan hücreleri
#      TEK TEK yaylarla kesince ağ bozuldu ⇒ +17 bozuk kenar.
#      `CLAUDE.md` topoloji kuralı bunu zaten yasaklıyor: "yumuşatma ve
#      sadeleştirme petek petek DEĞİL, ORTAK KENAR AĞI üzerinde."
# ⇒ Tavan artık kıyı kesimiyle AYNI ADIMDA uygulanıyor: orada zaten her hücre
#   ayrı ayrı kesiliyor ve sonrasında hiçbir yumuşatma yok, yani ne topoloji
#   bozulur ne de boşa deniz kesilir.
# 📌 Ve bunu yakalayan şey bir denetim değil, KOŞUDAN ÖNCE YAZILMIŞ BİR
#   ÖNGÖRÜNÜN ÇÜRÜMESİYDİ. Sayı beklenenden farklı çıktı ⇒ sebep arandı ⇒
#   iki ayrı kusur bulundu. Öngörü yazılmasaydı 513 sayısı "olur böyle" diye
#   geçilirdi.

# ---------------- Petek sınırlarını doğal hatlara yasla ----------------
# ⚠️ TOPOLOJİ KURALI (Oturum 8): yumuşatma ve sadeleştirme petek petek DEĞİL,
# örtünün ORTAK KENAR AĞI üzerinde bir kez yapılır. Aynı kenar iki komşu hücrede
# ayrı ayrı işlenirse iki farklı sonuç çıkar → haritada kılcal boşluk/bindirme.
def chaikin_acik(cs, tur=2):
    """Açık hat için Chaikin: uç noktalar (düğümler) sabit kalır."""
    if len(cs) < 3: return cs
    for _ in range(tur):
        yeni = [cs[0]]
        for i in range(len(cs) - 1):
            p, q = cs[i], cs[i+1]
            yeni.append((0.75*p[0]+0.25*q[0], 0.75*p[1]+0.25*q[1]))
            yeni.append((0.25*p[0]+0.75*q[0], 0.25*p[1]+0.75*q[1]))
        yeni.append(cs[-1]); cs = yeni
    return cs

def sikla(cs, adim=0.22):
    yeni = []
    for i in range(len(cs) - 1):
        (x1,y1),(x2,y2) = cs[i], cs[i+1]
        yeni.append((x1,y1))
        n = int(math.hypot(x2-x1, y2-y1) / adim)
        for k in range(1, n):
            t = k/n; yeni.append((x1+(x2-x1)*t, y1+(y2-y1)*t))
    yeni.append(cs[-1]); return yeni

# ⚠️ KORUMA PAYI — hatalar 7.docx madde 2-3 (SIFIR ALANLI PETEK)
# Kullanıcı "Estergon'un kaybı haritada görülmüyor" ve "Solnok'un kaybı
# görünmüyor" dedi. Zincir kovalandı: veri doğru (d: 1683-10-09 / 1685-10-19),
# maddeler 0 gün farkla eşleşiyor, motor petekleri dönem kümesinden düzgün
# çıkarıyor — AMA boyanan alan değişmiyor, çünkü o iki peteğin ALANI YOK
# (Estergon 8 km², Solnok 0 km²). Çıplak Voronoi ile ölçüldü: olması gereken
# Estergon 4.819 km², Solnok 8.681 km². Yani hatayı üreten adım BURASI.
#
# Sebep: yaslama yarıçapı nehir için 0.30 derece ≈ 33 km ve Estergon Tuna'nın,
# Solnok Tisza'nın TAM ÜSTÜNDE. Peteğin bütün sınır köşeleri 33 km yarıçapta
# nehri gördüğü için nehir yatağına çekiliyor; şehir de nehrin üstünde olduğuna
# göre sınır şehrin kendi üstüne çöküyor ve petek yok oluyor. Segedin (nehre
# 0.166 km, daha yakın) sağlam kalıyor — yani mesele yakınlık değil, sınırın
# hangi tarafa çekildiği; bu bir kumar ve nehir şehirlerinde tutuyor.
#
# Çözüm: yaslama bir sınırı YERLEŞİMİN ÜSTÜNE çekemez. Hedef nokta bir yerleşime
# `koruma`dan yakın düşüyorsa VE bu onu mevcut konumundan daha da yaklaştırıyorsa
# yaslama iptal edilir, Voronoi hattı korunur. Sınırın nehri takip etme
# davranışı şehirlerden uzakta olduğu gibi kalıyor.
KORUMA_PAYI = 0.06          # ~6.7 km; peteğin asgarî yarıçapı


def dogal_hatta_yasla(cs, nehir_mes=0.30, sirt_mes=0.35, koruma=KORUMA_PAYI):
    """Petek sınırını en yakın doğal engele çeker:
       1) yakında nehir varsa nehir yatağına (sınır nehri takip eder)
       2) yoksa dağ sırtına (sınır sırttan geçer)
       3) ikisi de yoksa Voronoi hattı kalır (iki şehrin tam ortası).
    NOT: MultiLineString üzerinde project/interpolate parçalar arasında kayar ve
    sınırı kıtanın öbür ucuna fırlatır; bu yüzden nearest_points kullanılır."""
    yeni = []
    for x, y in cs:
        p = Point(x, y)
        dn = NEHIR_HAT.distance(p) if NEHIR_HAT is not None else 9e9
        ds = SIRT_HAT.distance(p) if SIRT_HAT is not None else 9e9
        q = None
        if dn < nehir_mes and dn <= ds:
            q = nearest_points(NEHIR_HAT, p)[0]
        elif ds < sirt_mes:
            q = nearest_points(SIRT_HAT, p)[0]
        if q is None:
            yeni.append((x, y)); continue
        # KORUMA: hedef bir yerleşime çok yakın VE onu yaklaştırıyorsa yaslama yok
        j = int(_SEED_AGACI.nearest(q))
        d_q, d_p = noktalar[j].distance(q), noktalar[j].distance(p)
        if d_q < koruma and d_q < d_p:
            _YASLAMA_IPTAL.append(YERLER[j]["ad"])
            yeni.append((x, y))
        else:
            yeni.append((q.x, q.y))
    return yeni


_SEED_AGACI = STRtree(noktalar)     # yaslama koruması için tohum nokta ağacı
_YASLAMA_IPTAL = []                 # koruma yüzünden iptal edilen yaslamalar

# Atlasın başlangıç tarihi. TDV'ye göre Ertuğrul Gazi 680 (1281-82) yılında
# vefat etti ve Osman Bey beyliğe geçti; ilk askerî harekât 1285 Kulacahisar,
# ilk şehir fethi 1288 Karacahisar. Bu yüzden epok 1299 değil 1281.
EPOK = "1281-01-01"

# Örtü sadeleştirme toleransı (derece). coverage_simplify ile örtünün TAMAMINA
# bir kez uygulanır; ortak kenarların iki yanı birebir aynı kalır. Gövde başına
# ayrı simplify + dışa taşırma hilesi kaldırıldı — gerek kalmadı.
SADE_TOL = 0.012

def kapat(g, yaricap=0.15):
    """Morfolojik kapama: aralarında yaricap*2'den (≈33 km) daha az boşluk olan
    ayrı parçaları birleştirir. Aynı çekirdek beyliğin parçası olan komşu
    petekler, aralarına giren ince 'henüz o an aktif olmayan komşu' şeridi
    yüzünden kopuk görünebiliyordu (ör. 1299'da İnegöl'ün Söğüt-Bilecik'ten
    ayrı bir 'ada' gibi çizilmesi). Deniz/kıta arası gerçek boşluklar bu
    yarıçaptan büyük olduğu için etkilenmez; kapamadan sonra KARA ile
    kesişim alınacağından geçici deniz taşkını da temizlenir.
    Topoloji notu: mitre birleşim, buffer'ın yay örneklemesiyle kenara nokta
    eklemesini önler; sonuç orijinalle BİRLEŞTİRİLİR ki gidip-gelen buffer'ın
    sayısal aşındırması ortak kenarı bir mikron bile oynatamasın (boşluk kaynağı)."""
    if g.is_empty: return g
    k = temiz(g.buffer(yaricap, join_style=2, mitre_limit=2.0)).buffer(-yaricap, join_style=2, mitre_limit=2.0)
    return unary_union([temiz(k), g])

def poligonal(g):
    """intersection/difference çıktısı geçerli ama karışık bir GeometryCollection
    olabilir (kıyıda çizgi artığı); poligonal olmayan parçaları süz."""
    if g.geom_type == "GeometryCollection" or not g.is_valid: return temiz(g)
    return g

# ═══ 🔴 KASITLI BOŞLUK MUAFİYETİ — MOTOR ENKLAV, 11 Ağustos 2026 ═══════════
# `delikleri_doldur` bu satıra kadar HİÇBİR ŞEY SORMUYORDU: gövdenin bütün
# interior ring'lerini kayıtsız şartsız dolduruyordu. Ölçüldü, ve ikisi de
# rapora girdi:
#
#   ① BUGÜN ZARAR VERMİYOR. Yayındaki çıktıda (donemler.js ·
#      devletler_harita.js) 7 kesitin 7'sinde de "bayraklı + o gün sahipsiz +
#      varlık epoku içi" noktanın BOYANANI **0**:
#          aday    122 · 122 · 122 · 115 · 77 · 74 · 23
#          boyanan   0 ·   0 ·   0 ·   0 ·  0 ·  0 ·  0
#      Sebebi yapısal: kasten boş bırakılan yerler (Sahra · Rub'ul Hâlî ·
#      Karakum · Üstyurt) DELİK değil, kıyıya ve öteki boşluklara AÇIK
#      bölgelerdir; interior ring hiç olmuyorlar.
#
#   ② AMA GÜVENCE VERİYE BAĞLI, YAPISAL DEĞİL. Nokta kümesi büyüdükçe bir
#      vaha ya da çöl cebi kuşatılabilir — ve o an SESSİZCE boyanır.
#      `renk_olc.py`nin başındaki dersin aynısı: "veriye dokunan her koşudan
#      sonra yeniden sorulur" (§9). Bu yüzden nöbetçi ŞİMDİ kondu, kusur
#      doğduktan sonra değil.
#
# ⚠️ MUAFİYET HALKA BAZLIDIR, GÖVDE BAZLI DEĞİL: aynı gövdenin bir deliği
#    muaf tutulurken ötekiler dolmaya devam eder. Gövdeyi bütünüyle muaf
#    tutmak, tek bir çöl cebi yüzünden dağ bloklarını da açık bırakırdı.
#
# 📌 VE MUAFİYETİN KAPSAMI `kasitli_bosluk` BAYRAĞIDIR, "sahipsizlik" DEĞİL.
#    Sahipsizliği ölçüt yapmak, YAZILMAMIŞ boşluğu da korurdu ve fonksiyonun
#    var oluş sebebini iptal ederdi (dağ bloğu da sahipsizdir). Ayrım
#    `§2015 _kusatilmis`in ayrımıyla aynı: kaynaklı hüküm ile veri borcu
#    ayrı şeylerdir. ⚠️ Bedeli ölçüldü ve saklanmıyor: bugün 55 kayıt
#    fiilen kasıtlı ama BAYRAKSIZ, ve dördü (Darfur · Somali çölü · Ogaden ·
#    Libya iç çölü) şu an delik olarak DOLUYOR. Muafiyet onları KURTARMAZ —
#    kusur motorda değil veride, ve bir veri oturumuna yazıldı.
_KB_IX = [i for i, y in enumerate(YERLER) if y.get("kasitli_bosluk")]
_KB_NOKTA = [noktalar[i] for i in _KB_IX]
_KB_AGAC = STRtree(_KB_NOKTA) if _KB_NOKTA else None
_KB_MUAF = {}                       # ad → kaç halka; SESSİZ ATLAMA YOK
print(f"     delik doldurma muafiyeti: {len(_KB_IX)} kasıtlı boşluk noktası nöbette")


def delikleri_doldur(g, muaf=True):
    """Kuşatılmış boşluk bırakmaz: çevresi ele geçmiş alan (dağ bloğu, ova) da
    hâkimiyet altındadır.

    muaf=True  (VARSAYILAN): içinde `kasitli_bosluk` noktası bulunan halka
               DOLDURULMAZ — kaynaklı araştırma hükmü, motorun varsayımını yener.
    muaf=False: 11 Ağustos 2026 ÖNCESİ davranış (her halka dolar). Yalnız
               `C13` geçme-yolu sınavı için duruyor; üretimde çağrılmaz."""
    if g.is_empty: return g
    ps = g.geoms if isinstance(g, MultiPolygon) else [g]
    out = []
    for p in ps:
        tut = []
        if muaf and _KB_AGAC is not None:
            for h in p.interiors:
                halka = Polygon(h)
                try:
                    icerde = [int(q) for q in _KB_AGAC.query(halka)
                              if halka.contains(_KB_NOKTA[int(q)])]
                except Exception:
                    halka = halka.buffer(0)
                    icerde = [int(q) for q in _KB_AGAC.query(halka)
                              if halka.contains(_KB_NOKTA[int(q)])]
                if icerde:
                    tut.append(h)
                    for q in icerde:
                        _ad = YERLER[_KB_IX[q]]["ad"]
                        _KB_MUAF[_ad] = _KB_MUAF.get(_ad, 0) + 1
        out.append(Polygon(p.exterior, tut) if tut else Polygon(p.exterior))
    return unary_union(out).buffer(0)

# ---------------- Örtü boru hattı ----------------
# Petekler tek bir ÖRTÜ (coverage) olarak işlenir:
#   1) Voronoi hücrelerinin ortak kenar ağı çıkarılır (her kenar TEK kopya)
#   2) Yaslama + Chaikin bu ağ üzerinde bir kez yapılır (düğümler sabit)
#   3) polygonize ile hücreler geri kurulur → boşluksuz/bindirmesiz örtü
#   4) set_precision ortak ızgara, coverage_simplify topoloji korumalı sadeleştirme
#   5) Kıyı kesimi (KARA) EN SON — sonrasında hiçbir geometri işlemi yok
asama("Ortak kenar ağı çıkarılıyor")
_bx0, _by0, _bx1, _by1 = BOLGE.bounds
def _kutuda(x, y, e=1e-9):
    # ⚠️ L KUTUSUNUN ÇENTİK KENARLARI DA ÇERÇEVEDİR. `BOLGE.bounds` yalnız
    # dış dikdörtgeni verir (−25,−11,146,82); çentiği çizen İKİ kenar
    # (lon −12, lat<60  ·  lat 60, lon<−12) orada görünmez. Çerçeve sayılmazsa
    # yaslama onları nehre/sırta çeker ve veri sınırı eğrilir.
    if (abs(x-_bx0) < e or abs(x-_bx1) < e or
            abs(y-_by0) < e or abs(y-_by1) < e):
        return True
    if abs(x + 12.0) < e and y <= 60.0 + e:      # çentiğin dikey kenarı
        return True
    if abs(y - 60.0) < e and x <= -12.0 + e:     # çentiğin yatay kenarı
        return True
    return False

# ⚠️ HÜCRE ÇOK PARÇALI OLABİLİR — kutu "L" olduğundan beri (4 Ağustos 2026).
# Dikdörtgen kutuda `h.intersection(BOLGE)` her zaman tek parça veriyordu ve
# bu satır `.exterior` diyordu. L'nin çentiği bir Voronoi hücresini ikiye
# bölünce koşu `AttributeError: 'MultiPolygon' object has no attribute
# 'exterior'` ile düştü (koşu 9, ilk deneme, 56. saniye).
# 📌 Alt akış çok parçalılığı ZATEN destekliyor (`_kume` hücre başına yüz
# listesi tutuyor); tek eksik bu satırdı.
_dis_halkalar = []
for h in PETEK:
    for _p in (h.geoms if h.geom_type == "MultiPolygon" else [h]):
        if not _p.is_empty:
            _dis_halkalar.append(_p.exterior)
_ag = linemerge(unary_union(_dis_halkalar))
_kenarlar = list(_ag.geoms) if _ag.geom_type == "MultiLineString" else [_ag]
print(f"  {len(_kenarlar)} kenar")

asama("Kenarlar doğal hatlara yaslanıp yumuşatılıyor")
_puruzsuz = []
for _kn_i, ln in enumerate(_kenarlar, 1):
    ilerleme(_kn_i, len(_kenarlar), 1000, "kenar")
    cs = list(ln.coords)
    if all(_kutuda(x, y) for x, y in cs):        # BOLGE çerçevesi düz kalır
        _puruzsuz.append(ln); continue
    bas, son = cs[0], cs[-1]
    cs = dogal_hatta_yasla(sikla(cs))
    cs[0], cs[-1] = bas, son                     # düğümler sabit: komşu kenarlar aynı noktada buluşur
    _puruzsuz.append(LineString(chaikin_acik(cs, 2)))

asama("Hücreler geri kuruluyor (polygonize)")
# ⚠️ ULP kuralı: bütün yüzler TEK bir polygonize'dan çıkmalı ve hücreler
# coverage_union_all ile (yeniden düğümleme YAPMADAN) birleştirilmeli. Yüz yüz
# unary_union ya da yerel intersection(f) kırpması, ortak köşeleri son bitte
# (ULP) kaydırıp örtüde bozuk kenar bırakıyordu (Hvar/Vis/Dir'iye vakaları).
_nokta_agaci = STRtree(noktalar)
def _cizgiler(g):
    """Geometrinin çizgi bileşenlerini döker (polygonize girdisi için)."""
    if g.is_empty: return []
    if g.geom_type in ("LineString", "LinearRing"): return [g]
    if hasattr(g, "geoms"): return [p for q in g.geoms for p in _cizgiler(q)]
    return []
def _yuzler_kur(hatlar):
    return [f for f in polygonize(unary_union(hatlar)) if not f.is_empty]

_yuzler = _yuzler_kur(_puruzsuz)
# Çok noktalı yüzler (yaslama bir kenarı noktaların üzerinden geçirmiş): yüzün
# içine mini-Voronoi bölme çizgileri eklenir ve HER ŞEY birlikte yeniden
# polygonize edilir — böylece bölme kenarları da ortak düğümlemeden geçer.
_ek_hat = []
for f in _yuzler:
    ic = [int(i) for i in _nokta_agaci.query(f, predicate="contains_properly")]
    if len(ic) > 1:
        alt = voronoi_diagram(MultiPoint([noktalar[i] for i in ic]), envelope=f)
        _ek_hat += _cizgiler(unary_union([c.boundary for c in alt.geoms]).intersection(f))
if _ek_hat:
    _yuzler = _yuzler_kur(_puruzsuz + _ek_hat)
print(f"  {len(_yuzler)} yüz ({len(_ek_hat)} mini-Voronoi bölme çizgisi)")

_kume = [[] for _ in YERLER]                     # hücre başına yüz listesi
_yetim = []
for f in _yuzler:
    ic = [int(i) for i in _nokta_agaci.query(f, predicate="contains_properly")]
    if not ic:
        _yetim.append(f)
    else:
        if len(ic) > 1:                          # bölme sonrası hâlâ çoksa (nadir): en yakını alır
            print(f"  UYARI örtü: yüz {len(ic)} nokta içeriyor, en yakını seçildi")
            ic = [min(ic, key=lambda i: f.centroid.distance(noktalar[i]))]
        _kume[ic[0]].append(f)
# Nokta içermeyen yüzler: en uzun ortak kenarı paylaştığı sahipli yüzün
# hücresine katılır (birkaç tur: yetim zinciri olabilir); komşusuz kalan
# en yakın noktaya verilir.
# 🔴 ÖLÇÜT DEĞİŞTİ — "en uzun ortak kenar" → "ham hücre örtüşmesi".
# MOTOR 3, 3 Ağustos 2026. Bugüne kadarki en pahalı tek kusur buradaydı.
#
# ESKİ ÖLÇÜT: yetim yüz, EN UZUN ORTAK KENARI paylaştığı yüzün sahibine
# veriliyordu. Ama "en uzun ortak kenar" ile "bu toprak aslında kimindi"
# aynı soru DEĞİL. Yaslama bir hücreyi ikiye böldüğünde, kopan parçanın en
# uzun kenarı çoğu zaman DAĞ SIRTININ ya da BOĞAZIN ÖTE YAKASINDAKİ şehirle
# oluyordu:
#     Eperjes'in 23.357 km²'si  → KRAKOV      (Karpatlar'ın öte yakası)
#     Reggio Calabria'nın payı  → SİRAKUZA    (Messina Boğazı'nın öte yakası)
# Yani motor Slovak toprağını Krakov'a yazıyordu.
#
# ÖLÇÜLDÜ (MOTOR 3 raporu §⑦, canlı 1619 noktalı veriyle):
#   yer değiştiren yüzlerde BUGÜNKÜ sahibin kendi ham hücresiyle örtüşmesi
#   ortalama %3,1 — 8 yüzün 6'sında %2'DEN AZ. Yani "kazanmamış, YUTMUŞ".
#   Nihai etki: %10 altında kalan petek 6 → 0 · yer değiştiren 78.368 km².
#   🟢 Korunum sınavı: toplam boyanan alan iki ölçütte de 65.374.719 km²,
#      fark −0. Değişiklik toprak yaratmıyor/yok etmiyor, ADRESİNİ düzeltiyor.
#
# ⚠️ ENKLAV KISITI — ölçütün tek başına yetmediği yer.
# Yeni ölçüt 7 çiftin 6'sında doğru sonuç verdi ama Sebte'de yanıldı ve
# doğru olduğu yerlerde de İLKEDEN değil TESADÜFEN doğruydu (enklav çoğu
# zaman kısa kenarlıdır). Presidionun hinterlandı YOKTUR; bu geometrik
# değil HUKUKÎ bir durumdur ve hiçbir örtüşme ölçütü onu soramaz —
# `kasitli_bosluk` ile aynı sınıf. Veri alanı: `s:` içinde `enklav:`.
# 📌 Yaklaşıklık: taban geometri ZAMANSIZ olduğu için "bir dönemde bile
#    enklavsa hiç ememez" okuması uygulanıyor. Bedeli ÖLÇÜLDÜ —
#    1.609 km² · 155 yıl · tek nokta (Oran), yani on binde 3. Dönem bazlı
#    gerçek çözüm bu bedele değmedi (koordinatör kararı, 3 Ağustos).
_ENKLAV = frozenset(i for i, y in enumerate(YERLER)
                    if any(p.get("enklav") for p in y["s"]))
if not _ENKLAV:
    print("  " + "=" * 66)
    print("  ⚠️ `enklav:` ALANI TAŞIYAN HİÇBİR KAYIT YOK.")
    print("     A listesi (14 nokta / 20 dönem) veriye işlenmemiş olabilir.")
    print("     BU KOŞUDA PRESİDİOLAR HİNTERLAND KAZANIR — ölçüldü:")
    print("       Sebte %3,3 → %87,1 · Oran %7,9 → hinterland kazanır")
    print("     Beklenen bu değilse koşuyu durdurup A listesini işleyin.")
    print("  " + "=" * 66)
else:
    print(f"  enklav: {len(_ENKLAV)} nokta yetim yüz EMMEYECEK "
          f"({', '.join(sorted(YERLER[i]['ad'] for i in _ENKLAV)[:6])}"
          f"{'…' if len(_ENKLAV) > 6 else ''})")

_PETEK_AGACI = STRtree(PETEK)
for f in _yetim:
    _en, _ea = None, 0.0
    for k in _PETEK_AGACI.query(f):
        i = int(k)
        if i in _ENKLAV: continue
        try:
            _a = PETEK[i].intersection(f).area
        except Exception:
            continue
        if _a > _ea: _ea, _en = _a, i
    if _en is None:                      # hiçbir ham hücreyle örtüşmüyor
        _en = min((i for i in range(len(noktalar)) if i not in _ENKLAV),
                  key=lambda i: f.distance(noktalar[i]))
    _kume[_en].append(f)

PETEK_TAM = []
for i, fs in enumerate(_kume):
    if not fs:
        print(f"  UYARI örtü: {YERLER[i]['ad']} hücresiz kaldı")
        PETEK_TAM.append(Polygon())
    else:
        PETEK_TAM.append(shapely.coverage_union_all(fs) if len(fs) > 1 else fs[0])
print(f"  {len(_yetim)} yetim yüz sahipli komşulara katıldı")

asama("Örtü sadeleştirme (coverage_simplify)")
# NOT: set_precision KULLANILMIYOR — ortak köşeler zaten bit düzeyinde aynı;
# ızgaraya oturtma, üçlü kavşaklarda hücre başına farklı çökme yapıp bozuk
# kenar üretiyordu (Maraş/Adana/Antakya kavşağında görüldü).
def _bozuk_liste(hucreler):
    """Bozuk kenarı olan hücrelerin (indis, kenar) listesi."""
    idx = [i for i, g in enumerate(hucreler) if g is not None and not g.is_empty]
    b = shapely.coverage_invalid_edges([hucreler[i] for i in idx])
    return [(idx[k], x) for k, x in enumerate(b) if x is not None and not x.is_empty]

def _bozuk_dok(hucreler, etiket):
    kot = _bozuk_liste(hucreler)
    for i, x in kot:
        print(f"    BOZUK KENAR [{etiket}] {YERLER[i]['ad']}: {x.wkt[:90]}")
    return len(kot)
_n0 = _bozuk_dok(PETEK_TAM, "ham")
PETEK_TAM = list(shapely.coverage_simplify(PETEK_TAM, SADE_TOL))
_n1 = _bozuk_dok(PETEK_TAM, "sade")
print(f"  örtü geçerliliği: sadeleştirme öncesi {_n0}, sonrası {_n1} bozuk kenar "
      + ("✓" if _n0 == 0 and _n1 == 0 else "✗ BOŞLUK/BİNDİRME VAR"))

# Kıyı kesimi EN SON: bütün gövdelerin deniz sınırı doğrudan KARA maskesinden
# gelir; kesimden sonra hiçbir sadeleştirme/yumuşatma yapılmaz.
asama("Kıyı kesimi (her hücre × KARA) + A1 YARIÇAP TAVANI")
# 🔴 TAVAN BURADA — kıyı kesimiyle AYNI ADIMDA. Gerekçe yukarıda (§TAVAN_KM).
# Burada uygulanmasının iki sebebi var ve ikisi de ölçülmüş:
#   ① kesim KARA üzerinde ⇒ tavan denizi boşuna kesmez, kalibrasyonla örtüşür
#   ② bu adımdan SONRA hiçbir yumuşatma/sadeleştirme yok ⇒ ortak kenar ağı
#      bozulmaz (Voronoi'nin ardında uygulandığında +17 bozuk kenar açmıştı)
_TV_BAGLI = set()          # 🔴 SAYI DEĞİL KÜME — aşağıdaki nöbetçi kovayı ayırsın diye
_tv_once = _tv_sonra = 0.0
PETEK_D = []
for i, g in enumerate(PETEK_TAM):
    kara_kesik = g.intersection(KARA)
    a0 = kara_kesik.area
    if a0 > 0:
        kes = kara_kesik.intersection(TAVAN_DAIRE[i])
        if not kes.is_empty:
            _tv_once += a0
            _tv_sonra += kes.area
            if (a0 - kes.area) / a0 > 0.02:
                _TV_BAGLI.add(i)
            kara_kesik = kes
        # tavan hücreyi TAMAMEN yerse dokunma: nokta kendi peteğinden olmaz
    PETEK_D.append(poligonal(kara_kesik))
print(f"  yarıçap tavanı: {len(_TV_BAGLI)} petek bağlandı "
      f"({100*len(_TV_BAGLI)/len(YERLER):.1f}%) · "
      f"KARA alanının {100*(_tv_once-_tv_sonra)/max(_tv_once,1e-9):.1f}%'i kesildi")

# ═══ 🔴 KOVA GENİŞLETİLDİ — koşu 5'in öngörü ①'i BUNU ÇÜRÜTTÜ ═══
# İlk sürüm yalnız tavanın BAĞLADIĞI hücreyi kasıtlı sayıyordu. Öngörü
# "kıyı kovası 60-66 olmalı" diyordu ve "mazeret YOK" damgalıydı. Ölçüm:
#     kıyı kovası 162 · tavan kovası 220   (toplam 382, 4b ile aynı)
# ⇒ ~100 kenar tavanın kestiği hücrenin KOMŞUSUNA düşüyor. Doğaldır: A
#   kesilip B kesilmeyince uyuşmazlık İKİ TARAFA da yazılır. Kovayı yalnız
#   A'ya kurmak, aynı olayın yarısını kusur sayar.
# ⇒ Kasıtlı kovası, tavanın bağladığı hücrelerin KOMŞULARINI da kapsar.
# ⚠️ Bedeli aynı ve saklanmıyor: komşu hücrede doğan GERÇEK bir kıyı kusuru
#    da bu kovaya düşer. İki sayı da basılıyor ki oran izlenebilsin.
_tv_agac = STRtree(PETEK_TAM)
_TV_KOMSU = set(_TV_BAGLI)
for _i in _TV_BAGLI:
    if PETEK_TAM[_i].is_empty:
        continue
    for _k in _tv_agac.query(PETEK_TAM[_i]):
        _k = int(_k)
        if not PETEK_TAM[_k].is_empty and PETEK_TAM[_k].intersects(PETEK_TAM[_i]):
            _TV_KOMSU.add(_k)
print(f"  tavan kovası: {len(_TV_BAGLI)} bağlanan + "
      f"{len(_TV_KOMSU)-len(_TV_BAGLI)} komşu = {len(_TV_KOMSU)} hücre")

# 🔴 KORUNUM SINAVI — 9 Ağustos 2026, ve NİÇİN VAR:
# Koşu 4b'den sonra "Osmanlı 7/9 kesitte daraldı, yabancı +%15 (+6,6 M km²)"
# ölçüldü ve yayın DURDURULDU. Ama bir TAVAN alan ARTIRAMAZ — yani ya motorda
# bir kaçak vardı ya da ÖLÇÜM yanlıştı. Çıktı dosyaları geri alındığı için
# soru koşu dışından cevaplanamadı.  ⇒ Alet koşunun İÇİNE kondu.
# Tavan yalnız KESER: kesimden sonra toplam boyanan alan, kesilen kadar
# AZALMALI — artarsa sonraki bir aşama kaçak veriyor demektir.
_TV_BEKLENEN_KAYIP = _tv_once - _tv_sonra
_TV_TOPLAM_SONRA = sum(g.area for g in PETEK_D if g is not None and not g.is_empty)
print(f"  korunum: tavan sonrası toplam boyanan {_TV_TOPLAM_SONRA:,.0f} birim² · "
      f"tavanın kestiği {_TV_BEKLENEN_KAYIP:,.0f} birim²")

# ---------------- ADA KURALI ----------------
# Bir yerleşimin peteği KENDİ kara parçasının dışına taşamaz.
# Voronoi noktalar üzerinden hesaplanıp hücreler sonra karaya kırpıldığı için,
# deniz atılıyor ama hücrenin KARŞI KIYIDAKİ parçası kalıyordu: Midilli
# Ayvalık'ı, Marmara Adası Kapıdağ'ı, İskiathos Eğriboz'un kuzeyini boyuyordu.
# Artık kara maskesinin her bağlantılı parçası yalnız kendi içindeki
# yerleşimler arasında paylaşılıyor.
asama("Ada kuralı (petekler kendi kara parçasına)")
_komp = list(KARA.geoms) if KARA.geom_type == "MultiPolygon" else [KARA]
_ptl = [Point(y["lon"], y["lat"]) for y in YERLER]
_pagac = STRtree(_ptl)
_tasan, _yalitilan = 0, 0
_tavan_tuttu = _tavan_kesti = 0.0
for _k in _komp:
    if _k.is_empty or _k.area < 1e-7:
        continue
    _ic = [int(i) for i in _pagac.query(_k) if _k.intersects(_ptl[int(i)])]
    if not _ic:
        continue                       # noktasız kara parçası: eski davranış
    _icset = set(_ic)
    # dışarıdaki yerleşimlerin bu parçadaki payını kes
    for _j in [int(i) for i in range(len(PETEK_D)) if i not in _icset]:
        if PETEK_D[_j].is_empty or not PETEK_D[_j].intersects(_k):
            continue
        _yeni = poligonal(PETEK_D[_j].difference(_k))
        if not _yeni.equals(PETEK_D[_j]):
            PETEK_D[_j] = _yeni
            _tasan += 1
    # boşta kalan payı, parçanın İÇİNDEKİ en yakın yerleşime ver
    # ═══ 🔴 9 Ağustos 2026 — A1 TAVANI BU SATIRLARDA GERİ ALINIYORDU ═══
    # Koşu 5 ölçtü: tavan 1.929 birim² kesti, bu aşamanın sonunda alan
    # +1.911 birim² ARTMIŞTI — kesilenin **%99,1'i geri verilmiş.**
    # Sebep: `_bos`, kara parçasının hücrelerle kaplanmayan kısmıdır ve tavan
    # devreye girdikten sonra ORAYA TAVANIN BOŞALTTIĞI ÇÖL DE DÂHİLDİR.
    # Kural onu "boşta kalmış" sanıp en yakın yerleşime veriyordu — yani
    # `§2` emilmesi, tavanın onu önlemesinden HEMEN SONRA yeniden yapılıyordu.
    # 📌 Gece bu kaçak "yetim yüz mantığı" diye teşhis edilmişti; ölçüm o
    #    teşhisi çürüttü (yetim yüz 116→118, üstelik tavandan ÖNCE koşuyor).
    #    HÜKÜM doğruydu ("sonraki bir aşama geri veriyor"), TEŞHİS yanlıştı.
    # ⇒ ÇARE: boşta kalan pay yalnız ALICININ TAVAN DAİRESİ İÇİNDE kalan
    #   kadarıyla verilir. Adanın kuralı korunur (yerleşimin dibindeki küçük
    #   artık yine emilir — tavanın içindedir), tavanın boşalttığı uzak çöl
    #   ise SAHİPSİZ KALIR, ki tavanın var oluş sebebi budur.
    _dolu = unary_union([PETEK_D[i] for i in _ic]) if _ic else None
    _bos = poligonal(_k.difference(_dolu)) if _dolu is not None else _k
    if not _bos.is_empty and _bos.area > 1e-9:
        for _pp in (_bos.geoms if _bos.geom_type == "MultiPolygon" else [_bos]):
            if _pp.is_empty:
                continue
            _en = min(_ic, key=lambda i: _ptl[i].distance(_pp))
            _pay = _pp.intersection(TAVAN_DAIRE[_en])
            if _pay.is_empty or _pay.area <= 1e-12:
                _tavan_tuttu += _pp.area          # tavan sahipsiz bıraktı
                continue
            _tavan_kesti += _pp.area - _pay.area
            PETEK_D[_en] = poligonal(unary_union([PETEK_D[_en], _pay]))
            _yalitilan += 1
print(f"  {_tasan} taşma kesildi, {_yalitilan} boşta kalan parça içerideki yerleşime verildi")
print(f"  A1 tavanı ada kuralında: {_tavan_tuttu:,.1f} birim² HİÇ verilmedi · "
      f"{_tavan_kesti:,.1f} birim² kısmen kesildi")
# 🔴 AŞAMA SONDASI — korunum ② bütün aralığı ölçüyor ama HANGİ aşama olduğunu
# söylemiyordu; koşu 5'te "Ada kuralı mı devret mi" sorusu ELLE ayrıldı.
# Bir daha ayrılmasın diye sonda buraya kondu. (📌 "Denetim var ≠ o soruyu
# soruyor" — burada denetim vardı, soruyu SORAN yoktu.)
_TV_ADA_SONRA = sum(g.area for g in PETEK_D if g is not None and not g.is_empty)
_d = _TV_ADA_SONRA - _TV_TOPLAM_SONRA
print(f"  korunum ②a (ada kuralı): {_d:+,.1f} birim² "
      f"({100*_d/max(_TV_TOPLAM_SONRA,1e-9):+.2f}%)"
      + ("  ⚠️ ARTIŞ" if _d > 0.001 * _TV_TOPLAM_SONRA else "  ✓"))


def _ham_km2(g):
    """Yuvarlamasız km² — alan_km2 bini yuvarladığı için oran hesabına uymuyor."""
    if g is None or g.is_empty:
        return 0.0
    ps = g.geoms if isinstance(g, MultiPolygon) else [g]
    T = 0.0
    for p in ps:
        for ring, sg in [(p.exterior, 1)] + [(h, -1) for h in p.interiors]:
            cs = list(ring.coords); s = 0.0
            for i in range(len(cs) - 1):
                lo1, la1 = math.radians(cs[i][0]), math.radians(cs[i][1])
                lo2, la2 = math.radians(cs[i + 1][0]), math.radians(cs[i + 1][1])
                s += (lo2 - lo1) * (2 + math.sin(la1) + math.sin(la2))
            T += sg * abs(s * R_DUNYA * R_DUNYA / 2)
    return T


# ---------------- KARA-KISITLI SAHİPLİK ----------------
# Ada kuralı KARA BİLEŞENİ bazlıdır ve Afrika ile Avrasya Sina üzerinden TEK
# bileşendir; bu yüzden Oran'ın peteği İspanya anakarasına geçebiliyordu. Kural
# "ihlal yok" diyor, sonuç saçma. Kullanıcının cümlesi (hatalar 15 md.19):
# "PETEK BÖLGESİ DENİZAŞIRI OLAMAZ… binlerce kilometre karadan geçiş ile bu
# bölgenin Oran'a ait olması mantıksız."
#
# Çare: sahipliği DÜZ mesafeyle değil KARA ÜZERİNDEN mesafeyle sormak. Kara
# maskesi ızgaraya dökülür, bütün tohumlardan çok kaynaklı Dijkstra koşar, her
# hücre "kara yolundan en yakın tohum"unu öğrenir.
#
# ⚠️ IZGARA YALNIZ SAHİPLİĞE KARAR VERİR, SINIR ÇİZMEZ. Sınır yine Voronoi'den
#    gelir; bu yüzden ızgaranın kabalığı haritaya YANSIMAZ. Aksi hâlde çözümün
#    kendisi yeni bir "cetvel" kusuru üretirdi — çaresi derdinden beter olurdu.
#
# ⚠️ KAPSAM — prototipin İLK sürümündeki hata ve düzeltmesi.
#    İlk sürüm ızgarayı BÜTÜN parçalara sordu ve saçmaladı: en büyük iki
#    değişiklik Nijniy Novgorod→Vologda (243.191 km²) ve Moskova→Vologda
#    (124.467 km²) çıktı; ikisi de iç karada, denizle ilgisi yok. Sebep:
#    0,05° ızgara mesafeyi ~%8 hatayla ölçer (oktil yaklaşımı + tohum
#    yuvarlaması) ve KARADA bu, Voronoi'nin KESİN cevabından kötüdür.
#    Doğru kapsam, yaklaşık yöntemi kesin yöntemin YANILDIĞI yere kısıtlamaktır:
#      · tohum→parça düz hattı tamamen karadaysa → düz mesafe geçerli, VORONOI KALIR
#      · hat denizden geçiyorsa                  → düz mesafe anlamsız, IZGARA KARAR VERİR
#    Eşik yok; ölçüt "hat denizi kesiyor mu", bir sayı değil.
#
# GEÇME ÖLÇÜTÜ (prototipte ölçüldü, 32/32 parça kabul edildi): Oslo, Königsberg
# ve Azak dar su geçişli MEŞRU parçalardır ve 0 km² kaybetmelidir. Kural onları
# bozuyorsa kural yanlıştır.
KV_ADIM = 0.05                   # ≈5,5 km enlemde
KV_MIN_KM2 = 200.0               # ızgara çözünürlüğünün güvenilir olduğu taban
asama(f"Kara-kısıtlı sahiplik: ızgara {KV_ADIM}° kuruluyor")
_kvx0, _kvy0, _kvx1, _kvy1 = BOLGE.bounds
_kvnx = int(round((_kvx1 - _kvx0) / KV_ADIM))
_kvny = int(round((_kvy1 - _kvy0) / KV_ADIM))
_kvkp = prep(KARA)          # aşağıda LineString sınamasında da kullanılıyor
# ⚠️ VEKTÖRLEŞTİRİLDİ — MOTOR 3, 3 Ağustos 2026.
# Eski hâli 4,74 milyon ayrı `_kvkp.contains(Point(...))` çağrısıydı ve aşama
# bilançosunda 3dk 20sn tutuyordu (koşunun %4,4'ü) — ızgara kurulumu, faz-1'in
# çöl tavanından sonraki en pahalı kalemiydi. `shapely.contains_xy` AYNI GEOS
# yüklemini dizi üzerinde koşturur.
# ÖLÇÜLDÜ (scratchpad, 60 satır × 3.160 = 189.600 hücre): FARKLI HÜCRE = 0,
# yani birebir aynı maske; hız 25,7× (6,78 sn → 0,26 sn), tam ızgara ~170 sn → ~7 sn.
# 📌 Satır satır çağrılıyor: 4,74M'lik tek dizi ~76 MB ara bellek isterdi,
# satır başına 3.160 nokta hem hızın tamamını verir hem belleği düz tutar.
import numpy as _np
shapely.prepare(KARA)
_kvxs = _kvx0 + (_np.arange(_kvnx) + 0.5) * KV_ADIM
_kvkara = bytearray(_kvnx * _kvny)
for _j in range(_kvny):
    _lat = _kvy0 + (_j + 0.5) * KV_ADIM
    _kvkara[_j * _kvnx:(_j + 1) * _kvnx] = shapely.contains_xy(
        KARA, _kvxs, _np.full(_kvnx, _lat)).astype(_np.uint8).tobytes()
print(f"  ızgara {_kvnx}×{_kvny} = {_kvnx*_kvny:,} hücre, "
      f"kara {sum(_kvkara):,}")

# Tohumları ızgaraya oturt. ⚠️ Kıyıdaki tohum su hücresine düşebilir (0,002°
# maske vs 0,05° ızgara); en yakın kara hücresine kaydırılmazsa ulaşılmaz olur.
_kvtohum, _kvkaydi, _kverisilmez = {}, 0, []
for _idx, _y in enumerate(YERLER):
    _i = min(_kvnx - 1, max(0, int((_y["lon"] - _kvx0) / KV_ADIM)))
    _j = min(_kvny - 1, max(0, int((_y["lat"] - _kvy0) / KV_ADIM)))
    if not _kvkara[_j * _kvnx + _i]:
        _en, _ed = None, 9e9
        for _dj in range(-3, 4):
            for _di in range(-3, 4):
                _a, _b = _i + _di, _j + _dj
                if 0 <= _a < _kvnx and 0 <= _b < _kvny and _kvkara[_b * _kvnx + _a]:
                    _d = _di * _di + _dj * _dj
                    if _d < _ed: _ed, _en = _d, (_a, _b)
        if _en is None:
            _kverisilmez.append(_y["ad"]); continue
        _i, _j = _en; _kvkaydi += 1
    _kvtohum.setdefault(_j * _kvnx + _i, []).append(_idx)
print(f"  {sum(len(v) for v in _kvtohum.values())} tohum yerleşti "
      f"({_kvkaydi} tanesi en yakın kara hücresine kaydırıldı)")
if _kverisilmez:
    print(f"  ⚠️ ızgarada yer bulunamayan {len(_kverisilmez)} tohum "
          f"(bu noktalar için Voronoi kalır): {', '.join(_kverisilmez[:8])}")

# ---------------- ① EĞİM SÜRTÜNMESİ — ızgaranın kendi çözünürlüğünde --------
# DEM aynı ızgaraya (BOLGE.bounds × KV_ADIM) indirgenir ve hücre başına
# sürtünme çarpanı üretilir:  surt = 1 + EGIM_CARPANI × |∇z|
#
# ⚠️ ÇÖZÜNÜRLÜK KALİBRASYONLA AYNI OLMAK ZORUNDA — ve ölçüldü, ŞANS DEĞİL.
# `|∇z|` birimi METRE / HÜCRE'dir, yani hücre boyuyla ÖLÇEKLENİR: 0,02°lik bir
# ızgarada aynı yamaç 2,5 kat küçük bir eğim değeri verir ve 0,005 çarpanı
# sessizce başka bir şeye dönüşürdü. `egim_olc.py:62` → `ADIM = 0.05`;
# buradaki `KV_ADIM` de 0,05. İkisi aynı, o yüzden çarpan taşınabilir.
# 📌 Bu, `§11`in "bir aletin evreni değişince alet sessizce yanılır" dersinin
#    önlenmiş hâli: aynı sayı, farklı ızgarada AYNI SAYI DEĞİLDİR.
#
# 🔴 `np.flipud` ŞART VE SEBEBİ ÖLÇÜLDÜ (maliyet.py:262-282'nin aynısı):
#    rasterio dizisinde SATIR 0 KUZEY'dir; bu ızgara `_kvy0 + (_j+0,5)*KV_ADIM`
#    ile kurulur, yani **_j=0 GÜNEY'dir.** İkisi TERS ve fark SESSİZDİR —
#    toplam kara oranı neredeyse değişmediği için hiçbir toplam ölçüm ötmez.
#    Bağlanmasaydı motor Karadeniz kıyısını Akdeniz'in eğimiyle hesaplardı.
# 🟢 VE DOĞRULUĞU BAĞIMSIZ TANIKLA SINANDI, varsayılmadı: çevirmeden sonra
#    en pahalı hücreler 84,1°D/28,5°K (Annapurna, sürt 11,03) ve 74,7°D/36,4°K
#    (Karakurum, 9,10) çıkıyor. Ters olsaydı bunlar Hint Okyanusu'na düşerdi.
#    ⇒ Coğrafya, dizinin doğru yönde olduğunun tanığıdır.
_kvsurt = None
if EGIM_CARPANI > 0 and EGIM_DEM:
    asama("Kara-kısıtlı sahiplik: eğim yüzeyi (DEM)")
    import rasterio as _rio
    from rasterio.windows import from_bounds as _from_bounds
    with _rio.open(EGIM_DEM) as _ds:
        # Izgaranın GERÇEK kutusu: _kvnx/_kvny yuvarlanarak bulundu, o yüzden
        # BOLGE.bounds'un üst ucu değil ızgaranın kendi üst ucu kullanılır.
        # Aksi hâlde DEM yarım hücre kayardı ve kayma SESSİZ olurdu.
        _win = _from_bounds(_kvx0, _kvy0,
                            _kvx0 + _kvnx * KV_ADIM, _kvy0 + _kvny * KV_ADIM,
                            transform=_ds.transform)
        _z = _ds.read(1, window=_win, out_shape=(_kvny, _kvnx),
                      resampling=_rio.enums.Resampling.average).astype("float32")
    _z = _np.flipud(_z)
    _gy, _gx = _np.gradient(_z)
    _kvegim = _np.hypot(_gx, _gy)
    # array('f') — düz liste 6,4 M ayrı Python float'ı olurdu (~200 MB);
    # array 4 bayt/öğe ile 25 MB'ta kalır ve indeksleme yine Python float verir.
    import array as _array
    _kvsurt = _array.array("f", (1.0 + EGIM_CARPANI * _kvegim).ravel().tolist())
    _kvsm = _kvegim.ravel()[_np.frombuffer(bytes(_kvkara), dtype=_np.uint8) > 0]
    print(f"  eğim çarpanı {EGIM_CARPANI} · kara hücresinde eğim medyanı "
          f"{float(_np.median(_kvsm)):,.0f} m/hücre → sürtünme medyanı "
          f"{1.0 + EGIM_CARPANI * float(_np.median(_kvsm)):.3f}")
    print(f"  en pahalı hücre: sürtünme {1.0 + EGIM_CARPANI * float(_kvsm.max()):.2f} "
          f"(eğim {float(_kvsm.max()):,.0f} m/hücre)")
    del _z, _gy, _gx, _kvegim, _kvsm
else:
    print("  🔴 EĞİM YOK — Dijkstra ağırlıksız koşuyor (çarpan 0,000).")

# Çok kaynaklı Dijkstra, YALNIZ kara hücreleri üzerinden. Adım maliyeti gerçek
# km: boylam adımı cos(enlem) ile daralır, yoksa kuzeyde mesafeler şişer ve
# Baltık/Norveç vakaları yanlış tarafa düşer.
# ⚠️ VE ARTIK km DEĞİL, km × SÜRTÜNME. `_kvuzak` bu aşamadan sonra "kilometre"
#    değil "yürüme bedeli" taşır; başka bir yerde mesafe diye OKUNMAMALIDIR.
#    (Bu aşamada yalnız KARŞILAŞTIRMA için kullanılıyor — hangi tohum daha
#    ucuz — ve karşılaştırma için birim önemsizdir. Mutlak km isteyen yeni bir
#    kullanıcı çıkarsa bu satırı okusun: o sayı artık km değildir.)
import heapq as _heapq
asama("Kara-kısıtlı sahiplik: Dijkstra (kara ızgarası)")
_KVDY = KV_ADIM * 111.32


def _kv_dijkstra(surt):
    """Çok kaynaklı Dijkstra. surt=None ise ağırlıksız (eski davranış).

    ⚠️ İŞLEV HÂLİNE GETİRİLDİ ki AYNI KOD iki kez koşabilsin — eğimli ve
    eğimsiz. Kopyala-yapıştır ikinci bir gövde yazmak daha kolaydı ve YANLIŞ
    olurdu: iki kopya zamanla ayrışır, ve ayrıştıkları an A/B ölçümü
    sessizce anlamını yitirir. Karşılaştırmanın geçerliliği, iki tarafın
    AYNI KOD olmasına bağlıdır.
    """
    uzak = [float("inf")] * (_kvnx * _kvny)
    sahip = [-1] * (_kvnx * _kvny)
    q = []
    for h, idxs in _kvtohum.items():
        uzak[h] = 0.0
        sahip[h] = idxs[0]
        _heapq.heappush(q, (0.0, h))
    while q:
        d, h = _heapq.heappop(q)
        if d > uzak[h]: continue
        j, i = divmod(h, _kvnx)
        dx = _KVDY * math.cos(math.radians(_kvy0 + (j + 0.5) * KV_ADIM))
        for di, dj in ((1,0),(-1,0),(0,1),(0,-1),(1,1),(1,-1),(-1,1),(-1,-1)):
            a, b = i + di, j + dj
            if not (0 <= a < _kvnx and 0 <= b < _kvny): continue
            k = b * _kvnx + a
            if not _kvkara[k]: continue
            # Sürtünme HEDEF hücreden okunur — `egim_olc.py:136` (`f = fr[jj][ii]`)
            # kalibrasyonu birebir böyle yaptı. Kaynak hücreden ya da iki
            # hücrenin ortalamasından okumak BAŞKA bir yüzeydir ve 0,005 orada
            # ölçülmedi.
            nd = d + math.hypot(dx * di, _KVDY * dj) * (surt[k] if surt else 1.0)
            if nd < uzak[k]:
                uzak[k] = nd; sahip[k] = sahip[h]
                _heapq.heappush(q, (nd, k))
    return uzak, sahip


_kvuzak, _kvsahip = _kv_dijkstra(_kvsurt)
print(f"  kara yolu çözüldü, erişilen hücre {sum(1 for s in _kvsahip if s >= 0):,}")

# ---------------- ① A/B — EĞİMİN ETKİSİ, AYNI KOŞUNUN İÇİNDE ----------------
# 🔴 NİÇİN VAR: `A1 tavanı` vakasının dersi *"bir düzeltme doğru çalışabilir ve
# SONRAKİ AŞAMA onu geri alabilir, ve ikisi arasındaki boşluk hiçbir denetimin
# sorusu değildir."* Eğim çarpanı için aynı soruyu sorabilmenin normal yolu iki
# tam koşudur (eğimli + eğimsiz) — 160 dakika. Oysa ölçülmek istenen şey
# aşamanın KENDİ içinde: aynı ızgara, aynı tohumlar, tek fark sürtünme.
# ⇒ İkinci Dijkstra burada koşar (ölçülen maliyet: 1dk 38sn, koşunun %2,1'i) ve
#   sonucu ÜRETİME HİÇ KARIŞMAZ; yalnız `_kvsahip0` olarak okunur.
#
# ⚠️ VE BU, ÖNGÖRÜNÜN MAZERETİNİ ORTADAN KALDIRIYOR. Öngörüyü yazarken tek
# ölçemediğim şey *"ızgaradaki değişimin kaçı HARİTAYA iniyor"*du, çünkü o soru
# PETEK_D'yi gerektiriyor ve PETEK_D koşuda doğuyor. Şimdi koşunun kendisi
# cevaplıyor. `§11`: sonradan yazılan mazeret bulguya benzer — en iyisi mazeret
# ihtiyacını KALDIRMAK.
#
# 📌 ÖLÇTÜĞÜM ile ÇIKARDIĞIM ayrı (B10): aşağıdaki sayı *"eğim yüzünden alıcısı
# değişen parça"*dır. *"Haritanın eğim yüzünden ne kadar düzeldiği"* DEĞİLDİR —
# onu ancak Emre'nin gözü ve kronoloji söyler.
_kvsahip0 = None
if _kvsurt is not None and not os.environ.get("MOTOR_EGIM_AB_KAPALI"):
    asama("Kara-kısıtlı sahiplik: A/B ölçümü (eğimsiz ikinci Dijkstra)")
    _kvuzak0, _kvsahip0 = _kv_dijkstra(None)
    _ab_hucre = sum(1 for _k in range(_kvnx * _kvny)
                    if _kvsahip[_k] != _kvsahip0[_k])
    _ab_er0 = sum(1 for s in _kvsahip0 if s >= 0)
    _ab_er1 = sum(1 for s in _kvsahip if s >= 0)
    print(f"  eğimsiz erişilen {_ab_er0:,} · eğimli erişilen {_ab_er1:,} "
          + ("✓ AYNI" if _ab_er0 == _ab_er1 else
             f"🔴 FARK {_ab_er1 - _ab_er0:+,} — eğim erişilebilirliği "
             "DEĞİŞTİRMEMELİ, sürtünme sonludur"))
    print(f"  ızgarada sahibi değişen hücre: {_ab_hucre:,} "
          f"({100.0 * _ab_hucre / max(1, _ab_er1):.2f}% · ÖNGÖRÜ ~166.966 / %4,97)")
    del _kvuzak0

asama("Kara-kısıtlı sahiplik: parçaları sına ve devret")

# Parçaları sına ve el değiştirenleri UYGULA. Parça bütün olarak taşınır, yani
# birleşim korunur: kaybolan ya da iki kez sayılan toprak olamaz. Bunu aşağıdaki
# _bozuk_dok ayrıca doğrular.
#
# 🔴 ANA PARÇA DOKUNULMAZ — bu kuralın eksikliği ilk koşuyu düşürdü.
# İlk sürümde bu koruma yoktu ve on liman peteğinin TAMAMINI kaybetti:
# Sinop, Aden, Benzert, Koron, Hafun, Arkîko, Masavva, Şârika, ve en çarpıcısı
# **Küngrat %0 (0 / 132.678 km²)** — yani "Küngrat → Üstyurt 132.678 km²"
# geçme ölçütü tutuyordu ama devretilen şey Küngrat'ın peteğinin TAMAMIYDI.
# Ölçüt bir kusuru ölçüyormuş: liman kendi ayağının altındaki toprağı da verdi.
# Sebep: kıyı yerleşiminin parçası tohumdan körfezle ayrılabiliyor, düz hat
# denizi kesiyor, ızgara "kara yolundan daha yakın bir iç yerleşim var" diyor —
# ve teknik olarak haklı. Ama bir yerleşimin ÜZERİNDE DURDUĞU toprak asla
# başkasına geçemez; bu bir mesafe sorusu değil, tanım gereği böyle.
_kvana = []
for _i in range(len(PETEK_D)):
    _g = PETEK_D[_i]
    if _g is None or _g.is_empty:
        _kvana.append(None); continue
    _ps = list(_g.geoms) if _g.geom_type == "MultiPolygon" else [_g]
    _ic = [p for p in _ps if p.contains(_ptl[_i])]
    _kvana.append(_ic[0] if _ic else min(_ps, key=lambda p: p.distance(_ptl[_i])))

# ═══ 🔴 10 Ağustos 2026 — BİLEŞEN KİLİDİ (MOTOR DENİZAŞIRI oturumu) ═══════════
# ADA KURALI (yukarıda, :997) peteği KENDİ kara bileşenine kısıtlıyor.
# BU AŞAMA onu geri veriyordu. Sebep ÖLÇÜLDÜ: 0,05°lik ızgara (≈5,5 km) dar
# boğazı GÖREMİYOR ve adayı anakaraya bitişik sanıyor —
#     Pag    ızgara bileşeni 4.084 / 4.868 hücre = %83,9  → anakaraya "bağlı"
#     Vardø  ızgara bileşeni 3.307 / 3.307      = %100   → anakaraya "bağlı"
#   (gerçek maskede ikisi de AYRI bileşen: Pag #351 · Vardø #1886)
# ⇒ ADA KURALI kesiyor, Dijkstra geri veriyor. A1 tavanı / yetim yüz vakasının
#   İKİZİ: iki aşama tek tek doğru, ARALARINDA sözleşme yok.
#
# ÇARE: devir yalnız ALICI ile PARÇA aynı GERÇEK maske bileşenindeyse geçerli.
#   Izgara SAHİPLİĞE karar vermeye devam eder; yalnız bileşen atlayamaz.
#
# ÖLÇÜLDÜ — koşusuz, yayındaki `petek_govde.js` (r1140) üzerinde:
#   · etkisi TAM İKİ KAYIT: Pag 7.277 km² + Vardø 4.831 km² = 12.108 km²
#   · motorun KENDİ KABUL TESTİ (:1111) BOZULMUYOR — Oslo · Königsberg · Azak ·
#     Tromsø · Bergen · Ålesund = 0 km² kayıp. Altısı da tohumlarıyla AYNI
#     bileşende; Tromsøya ile anakara gerçek maskede tek bileşen (fiyort ağzı
#     kapalı), o yüzden 20.902 km²lik fiyort toprağı etkilenmiyor.
#   · noktasız bileşenlere DOKUNMAZ (341.335 km²) — Dijkstra onları zaten
#     devretmiyor (:1015 "noktasız kara parçası: eski davranış").
# ⚠️ BEKLENTİ, ÖLÇÜM DEĞİL: `Değişmez 1` değişmemeli (sahipsiz 180 kalır),
#    çünkü ADA KURALI payı zaten anakara noktasına vermiş oluyor (:1040-1052) —
#    bu KODDAN ÇIKARIM, koşuyla doğrulanmadı. Koşudan sonra sınanacak.
_kvkomp_gecerli = [(_j, _k) for _j, _k in enumerate(_komp)
                   if not _k.is_empty and _k.area > 1e-9]
_kvkomp_idx = [_j for _j, _ in _kvkomp_gecerli]
_kvkomp_geo = [_k for _, _k in _kvkomp_gecerli]
_kvkomp_agac = STRtree(_kvkomp_geo)


def _kv_bilesen(_pt):
    """Noktanın GERÇEK maske bileşeni; maskenin dışındaysa -1 (karar verme)."""
    for _q in [int(_x) for _x in _kvkomp_agac.query(_pt)]:
        if _kvkomp_geo[_q].intersects(_pt):
            return _kvkomp_idx[_q]
    return -1


_kvtohum_bilesen = [_kv_bilesen(_p) for _p in _ptl]
_kvbilesen_red, _kvbilesen_alan = 0, 0.0
# ═════════════════════════════════════════════════════════════════════════════

_kvver, _kval, _kvdegisen = {}, {}, []
_kvkucuk_n, _kvkucuk_a = 0, 0.0
_kvkararsiz, _kvana_korundu = 0, 0
_ab_parca = []                    # ① eğimin HARİTAYA İNEN etkisi (ölçüm)
for _i, _g in enumerate(PETEK_D):
    if _g is None or _g.is_empty: continue
    for _p in (_g.geoms if _g.geom_type == "MultiPolygon" else [_g]):
        if _p.is_empty: continue
        if _kvana[_i] is not None and _p.equals(_kvana[_i]):
            _kvana_korundu += 1
            continue                      # tohumun üstündeki toprak devredilmez
        _a = _ham_km2(_p)
        if _a < KV_MIN_KM2:
            _kvkucuk_n += 1; _kvkucuk_a += _a
            continue                      # ızgara bu ölçekte karar veremez
        _rp = _p.representative_point()
        if _kvkp.contains(LineString([_ptl[_i], _rp])):
            continue                      # kesin geometri geçerli — dokunma
        _gi = min(_kvnx - 1, max(0, int((_rp.x - _kvx0) / KV_ADIM)))
        _gj = min(_kvny - 1, max(0, int((_rp.y - _kvy0) / KV_ADIM)))
        _s = _kvsahip[_gj * _kvnx + _gi]
        # ---- ① A/B: bu parçanın cevabını EĞİM mi değiştirdi? -------------
        # 🔴 ASIL SORU BU, ve ızgara düzeyindeki 166.966 hücre onu CEVAPLAMAZ.
        # Sebep bir satır yukarıda: `:1790` düz hattı karada olan her parçayı
        # eliyor, yani ızgaraya YALNIZ deniz aşırı parçalar soruluyor. Eğimin
        # Himalaya'da ürettiği fark oraya hiç ulaşmaz.
        # ⇒ Burada sayılan şey, eğimin HARİTAYA İNEN etkisidir — tavanı değil,
        #   kendisi. `_ab_parca` bu aşamanın kabul ölçütüdür.
        # ⚠️ ÖLÇÜM SATIRIDIR, ÜRETİME KARIŞMAZ: `_s0` hiçbir karara girmiyor.
        if _kvsahip0 is not None:
            _s0 = _kvsahip0[_gj * _kvnx + _gi]
            if _s0 != _s:
                _ab_parca.append((_a, YERLER[_i]["ad"],
                                  YERLER[_s0]["ad"] if _s0 >= 0 else "(kararsız)",
                                  YERLER[_s]["ad"] if _s >= 0 else "(kararsız)"))
        if _s < 0:
            _kvkararsiz += 1; continue    # ızgarada su/erişilmez → karar verme
        if _s != _i:
            # 🔴 BİLEŞEN KİLİDİ — alıcı parçanın bileşeninde değilse devir YOK.
            # Izgara dar boğazı göremediği için "kara yolu var" diyebilir;
            # gerçek maske hayır diyorsa gerçek maske kazanır.
            _pb = _kv_bilesen(_rp)
            if (_pb >= 0 and _kvtohum_bilesen[_s] >= 0
                    and _pb != _kvtohum_bilesen[_s]):
                _kvbilesen_red += 1
                _kvbilesen_alan += _a
                continue
            _kval.setdefault(_i, []).append(_p)
            _kvver.setdefault(_s, []).append(_p)
            _kvdegisen.append((_a, YERLER[_i]["ad"], YERLER[_s]["ad"], _rp.y, _rp.x))
for _i, _ps in _kval.items():
    PETEK_D[_i] = poligonal(PETEK_D[_i].difference(unary_union(_ps).buffer(0)))
for _i, _ps in _kvver.items():
    PETEK_D[_i] = poligonal(unary_union([PETEK_D[_i]] + _ps))
print(f"  {len(_kvdegisen)} parça el değiştirdi, toplam "
      f"{sum(d[0] for d in _kvdegisen):,.0f} km²")
# ---- ① EĞİMİN KABUL ÖLÇÜTÜ — ve SIFIR da bir sonuçtur ----------------------
# 📌 `denetim/EGIM-ONGORU.md` bu satır için yazıldı. Öngörü: 0-8 parça.
#    SIFIR çıkarsa bu bir BAŞARISIZLIK DEĞİL, bir ÖLÇÜMDÜR: eğim doğru
#    hesaplanıyor (ızgarada 166.966 hücre değişiyor) ama `:1790` süzgeci onu
#    haritadan uzak tutuyor. O hâlde bir sonraki iş çarpanı ayarlamak değil,
#    SÜZGECİ tartışmaktır — ve bu, koşudan önce yazıldığı için çürütülebilir
#    bir cümledir.
if _kvsahip0 is not None:
    print(f"  ① EĞİM ETKİSİ: {len(_ab_parca)} parçanın ızgara cevabını eğim "
          f"değiştirdi, {sum(p[0] for p in _ab_parca):,.0f} km² "
          f"(ÖNGÖRÜ 0-8 parça — denetim/EGIM-ONGORU.md)")
    for _a2, _kim, _eski, _yeni in sorted(_ab_parca, reverse=True)[:12]:
        print(f"     {_a2:>10,.0f} km²  {_kim:<20} eğimsiz→{_eski:<18} "
              f"eğimli→{_yeni}")
    if not _ab_parca:
        print("     SIFIR — eğim ızgarada çalışıyor ama `:1790` süzgeci onu")
        print("     haritaya geçirmiyor. Bulgu budur; çarpanı DEĞİŞTİRME.")
print(f"  ızgaraya sorulmayan: {_kvkucuk_n} parça / {_kvkucuk_a:,.0f} km² "
      f"({KV_MIN_KM2:.0f} km² altı) · kararsız {_kvkararsiz} · "
      f"ana parça korundu {_kvana_korundu}")
print(f"  🔒 bileşen kilidi: {_kvbilesen_red} devir REDDEDİLDİ / "
      f"{_kvbilesen_alan:,.0f} km² (ada kuralı korundu) "
      f"— ÖNGÖRÜ: 2 parça / 12.108 km² (Pag 7.277 + Vardø 4.831)")
# Hiçbir petek tamamen boşalmamalı — ana parça kuralı bunu garanti eder, ama
# garanti EDİLDİĞİNİ VARSAYMAK yerine ölçülür. İlk koşuyu düşüren tam buydu.
_kvbos = [YERLER[_i]["ad"] for _i in range(len(PETEK_D))
          if _kvana[_i] is not None and PETEK_D[_i].is_empty]
print(f"  kara-kısıtlı sahiplik sonrası boşalan petek: {len(_kvbos)} "
      + ("✓" if not _kvbos else "✗ " + ", ".join(_kvbos[:10])))
for _a, _eski, _yeni, _lat, _lon in sorted(_kvdegisen, reverse=True)[:20]:
    print(f"     {_a:>10,.0f} km²  {_eski:<22} → {_yeni:<22} "
          f"{_lat:6.2f}K {_lon:7.2f}D")
if len(_kvdegisen) > 20:
    print(f"     … ve {len(_kvdegisen)-20} parça daha (hepsi yukarıdaki "
          f"toplama dahil)")

# ⚠️ BU SATIR YILLARDIR "✗" BASIYORDU VE KİMSE BAKMIYORDU — ölçüldü, açıklandı.
# Sadeleştirme aşamalarında bozuk kenar SIFIR (_n0 = _n1 = 0). 32 kenar yalnız
# `PETEK_D = g.intersection(KARA)` adımından sonra çıkıyor: örtü hücreler
# arasında geçerli, ama her hücre kara maskesiyle AYRI AYRI kesilince ortak
# kenar iki hücrede farklı düğümleniyor (fark 15. ondalıkta, ~1e-10 m).
# Bu uyuşmazlık HARİTAYA ULAŞMIYOR — çıktıdan önce hücreler gövdeye
# birleştiriliyor ve birleştirme yarığı yutuyor. r176 çıktısında ölçüldü
# (scratchpad/bozuk_kenar.py): 1 km²'den küçük iç delik 0, 5 km² altı yarık 0,
# dört kesitte de parça toplamı = birleşik alan (fark 0 km²).
# Doğru okuma mutlak sayı değil TABANA GÖRE ARTIŞ: taban ise sessiz kalmalı,
# artarsa gerçekten yeni bir uyuşmazlık açılmış demektir.
#
# 🔴 TABAN 32 → 57, VE NÖBETÇİ YERİ DEĞİŞTİ — MOTOR 3, 3 Ağustos 2026.
# Son koşu 130 bozuk kenar bildirdi ve "✗ TABANIN ÜSTÜNDE" bastı. Ölçüldü:
# YANLIŞ ALARM, iki ayrı sebepten ve ikisi de yukarıdaki yorumu geçersiz
# kılıyordu.
#
# ① SAYAÇ İKİ ALAKASIZ OLAYI TOPLUYORDU. 130 kenarın hepsi logdan ayrıştırılıp
#    kara maskesi + Natural Earth çöl poligonlarıyla konumlandırıldı:
#        ÇÖL  (kıyıdan >25 km uzak)   73     ← kıyı kesimiyle İLGİSİ YOK
#        KIYI (<1 km)                 57     ← bu yorumun anlattığı ULP sınıfı
#    Bir kıyı kesimi artefaktı Ténéré'nin ortasında, kıyıdan 470 km içeride
#    olamaz (Agadez · Hoggar · Tibesti · Kaşgar · Hotan · Turfan · Baotou…).
#
# ② SEBEP ÇÖL TAVANI, VE O KASITLI. Sayaç "kıyı" diye etiketliydi ama kıyı
#    kesiminden DÖRT aşama sonra koşuyordu; araya çöl tavanı giriyor ve
#    4.609.677 km²'yi bilerek SAHİPSİZLEŞTİRİYOR. Sahipsiz alan = örtüde delik
#    = coverage_invalid_edges'in bildirmesi GEREKEN şey. Sayaç doğru çalışıyor,
#    ölçtüğü şey kusur değil özellikti. İki bağımsız delil:
#      · çöl tavanının en çok kısalttığı 12 peteğin 11'i bozuk kenar bildiriyor
#      · çöl sınıfı kenarların kendi noktasına uzaklığı medyan 311 km, 44/73'ü
#        ≥270 km — tam 300 km'lik tavan diskinin kenarında
#    Karşı sınama: kara-kısıtlı devirde adı geçen 37 yerleşimin yalnız 1'i
#    bozuk kenar bildiriyor → o aşama sebep DEĞİL.
#
# 🔴 VE TABAN 32 BU MOTORUN TABANI DEĞİLDİ (git'ten):
#        31 Tem 14:01  a148161  taban 32 ölçüldü (r217)
#        31 Tem 18:43  2254268  ÇÖL TAVANI eklendi        ← 4s42dk sonra
#        02 Ağu 15:10  6bfcc0d  KUTU AÇILDI (Asya · Endonezya · Japonya)
#    Taban ölçüldüğünde sahipsiz alan üreten aşama YOKTU, yani çöl sınıfı var
#    OLAMAZDI; kutu da küçüktü ve nokta sayısı 951'di. İki yapısal
#    değişiklikten sonra taban hiç yeniden ölçülmedi.
#    Kıyı ekseni tek başına alındığında büyüme oransal — yani orada da yeni bir
#    uyuşmazlığa delil yok:  nokta 951→1.579 (1,66×) · kıyı sınıfı 32→57 (1,78×)
#    üstelik kıyı çok daha parçalı (Endonezya · Filipinler · Japonya · Ege).
#
# ⚠️ 57 TÜRETİLMİŞ BİR SAYIDIR, ÖLÇÜLMÜŞ DEĞİL — ve bunu saklamıyoruz.
#    Çöl tavanı SONRASI çıktının sınıflandırılmasından geldi; nöbetçi ise artık
#    çöl tavanı ÖNCESİNDE duruyor. İki nokta aynı geometriyi görmüyor, o yüzden
#    ilk koşu 57'yi doğrulayabilir de düzeltebilir de. Aşağıdaki nöbetçi bu
#    yüzden ÇİFT YÖNLÜ: taban aşılırsa ✗ basar, tabanın ALTINDA kalırsa da
#    "taban gevşek, şu sayıya çek" der. Bu deponun tekrarlayan hastalığı
#    ölçülmüş bir sabitin motor altından değişince yeniden ölçülmemesi; çift
#    yönlü nöbetçi tam onu yakalar.
# 🔴 57 → 48: İLK KOŞU ÖLÇTÜ VE BENİ DÜZELTTİ (kosu3.log, 12:49:39).
# 57 türetilmiş bir sayıydı — çöl tavanı SONRASI çıktıyı sınıflandırarak
# bulunmuştu, oysa nöbetçi tavandan ÖNCE duruyor. Aradaki 9 kenar 'kıyı'
# gibi görünüp aslında tavanın açtığı kenarlarmış; yani çöl tavanının payı
# 73 değil 82. Çift yönlü nöbetçinin ALT dalı bunu ilk koşuda yakaladı:
#   'çöl tavanı ÖNCESİ örtü: 48 bozuk kenar (taban 57) ✓ — TABAN GEVŞEK'
# ⚠️ Tek yönlü bir nöbetçi burada sessiz '✓' basar, taban 57'de kalır ve
# 48-57 arasındaki her gerçek regresyon görünmez olurdu.
# ═══ 🔴 6 Agustos 2026 — "ORANA CEVIR" ONERISI OLCULDU VE CURUDU ═══
# Koordinator "taban mutlak sayi, oysa bugun 59 nokta ekledik; nokta sayisi
# buyurken sabit esik tutmak 2s tavaniyla ayni sinif hata -- ORANA cevrilmeli"
# dedi. PETEK/NOKTA once "payda `tur:'bolge'` sayisi olabilir" diye oneri
# yazdi, sonra OLCTU ve KENDI ONERISINI CURUTTU. Sekiz kosu gunlugu:
#     1.606 → 1.623 nokta (+17)  →  bozuk kenar TAM 48'DE SABIT
#     1.623 → 1.713      (+90)   →  48 → 60   (+12)
#     1.713 → 1.772      (+59)   →  60 → 58   🔴 (−2)
# Son satir HER oran onerisini curutuyor: NOKTA ARTTI, KENAR AZALDI.
# ⇒ Bozuk kenar nokta sayisinin fonksiyonu DEGIL; ne noktaya ne `bolge`ye
#   bolunur -- PAYDASI YOK.
#
# 🟢 PEKI NEYIN FONKSIYONU: KIYI. Olculdu, parti basina kiyiya <25 km oran:
#     ek7 %41 · ek8 %51 · ek13 %38 · OTEKI DOKUZ DOSYA %0 (hepsi ic kara)
#     kosu9 (ek7+ek8+ek9)  90 nokta · kiyida 37 (%41)  →  +12 kenar
#     r772  (ek13…ek20)    59 nokta · kiyida  6 (%10)  →   −2 kenar
#   Bozuk kenar KIYI KESIMINDEN doguyor: fiyort, ada, girintili sahil.
#   ek7/ek8'in 36 fiyort-ada noktasi +12 getirdi; Sibirya-Orta Asya-bozkir
#   partilerinin SIFIR kiyi noktasi kenar getirmedi.
#
# HUKUM: orana CEVRILMEDI (veri desteklemiyor) · mutlak tripwire KALIYOR ·
#   artis okunabilir olsun diye parti basina "kiyiya <25 km nokta" bakilir.
# 48 -> 58: bugunku deger bir REGRESYON DEGIL; +10'un tamami ek7/ek8'in
#   geometrisinden ve o parti dort gun once baglandi.
# 📌 Ve cift yonlu nobetci burada ise yaradi: 60 → 58 DUSUSUNU tek yonlu bir
#   nobetci sessizce yutardi.
# 📌 ONCELIK.md K4'un yeni bir yuzu: OLCMEDEN VERILEN ONERI DE UC TUR DEMEK.
#   Uygulansaydi ek17/ek18 gibi `bolge` dolgusu bol ama kiyisi sifir
#   partiler yanlislikla ceza alirdi.
BOZUK_KIYI_TABAN = 58

# 🔴 NÖBETÇİ BURADA — ÇÖL TAVANINDAN ÖNCE. Bu çağrı, taban 32'yi üreten r217
# koşusuyla AYNI ölçümdür (kıyı kesimi + ada kuralı + kara-kısıtlı sahiplik
# sonrası); yalnız yeri düzeltildi. Çöl tavanı sonrasındaki çağrı aşağıda
# duruyor ama artık BİLGİ satırı — ✗ basmıyor, çünkü orada ölçtüğü delikler
# kasıtlı.
# ═══ 🔴 9 Ağustos 2026 — NÖBETÇİNİN EVRENİ DEĞİŞTİ, KENDİSİ DEĞİŞMEDİ ═══
# Bu nöbetçi kurulduğunda önünde KASITLI DELİK AÇAN hiçbir aşama yoktu; bütün
# bozuk kenarlar kıyı geometrisinden geliyordu ve taban (58) onu ölçüyordu.
# 8 Ağustos'ta A1 YARIÇAP TAVANI tam onun ÖNÜNE kondu ve kasıtlı delik açmaya
# başladı. Nöbetçi ikisini AYNI KOVAYA koydu:
#     koşu 3  (tavan yok)          62 bozuk kenar
#     koşu 4b (tavan kıyı kesiminde)  382       ← "✗ YENİ UYUŞMAZLIK"
# Ölçüldü: 335 yeni kenarın adları neredeyse tamamen çöl · bozkır · Sibirya ·
# Afrika — yani TAVANIN KESTİĞİ hücreler. Kıyıda yeni bir uyuşmazlık YOK.
# 📌 Ve motor bu kavramı ZATEN biliyordu: 30 satır yukarıda çöl tavanı için
#    "orada ölçtüğü delikler kasıtlı" diye muafiyet yazılı. A1'e yazılmamıştı,
#    çünkü A1 nöbetçiden SONRA doğdu.
# ⇒ Kova ayrıldı: tavanın bağladığı hücreler BİLGİ, ötekiler TRIPWIRE.
# ⚠️ Yaklaşıklık ve saklanmıyor: tavanın bağladığı bir hücrede GERÇEK bir kıyı
#    uyuşmazlığı doğarsa "kasıtlı" kovasına düşer ve tripwire onu görmez.
#    Bedeli ölçülebilir olsun diye iki sayı da basılıyor.
# 🔴 KORUNUM SINAVI ②: tavandan buraya kadar (ada kuralı + kara-kısıtlı
# sahiplik) alan ARTMIŞ olmamalı. Koşu 4b'de "yabancı +%15" ölçülmüştü ve
# hangi aşamanın ürettiği bilinmiyordu; bu satır onu koşunun içinde söyler.
_TV_TOPLAM_SIMDI = sum(g.area for g in PETEK_D if g is not None and not g.is_empty)
_tv_delta = _TV_TOPLAM_SIMDI - _TV_TOPLAM_SONRA
print(f"  korunum ②: tavandan bu noktaya alan {_tv_delta:+,.0f} birim² "
      f"({100*_tv_delta/max(_TV_TOPLAM_SONRA,1e-9):+.2f}%)"
      + ("  ⚠️ ARTIŞ — bir aşama sahipsiz alanı geri veriyor"
         if _tv_delta > 0.001 * _TV_TOPLAM_SONRA else "  ✓"))

_kot0 = _bozuk_liste(PETEK_D)
_nk0 = sum(1 for i, _ in _kot0 if i not in _TV_KOMSU)
_nk0_tavan = len(_kot0) - _nk0
for i, x in _kot0:
    _ki = "tavan/kasıtlı" if i in _TV_KOMSU else "çöl öncesi"
    print(f"    BOZUK KENAR [{_ki}] {YERLER[i]['ad']}: {x.wkt[:90]}")
if _nk0_tavan:
    print(f"  A1 tavanının açtığı kenar: {_nk0_tavan} (KASITLI — sahipsizleşen "
          f"alanın kenarı, tripwire'a SAYILMAZ)")
if _nk0 > BOZUK_KIYI_TABAN:
    print(f"  çöl tavanı ÖNCESİ örtü: {_nk0} bozuk kenar "
          f"(taban {BOZUK_KIYI_TABAN}) ✗ TABANIN ÜSTÜNDE — YENİ UYUŞMAZLIK")
elif _nk0 < BOZUK_KIYI_TABAN:
    print(f"  çöl tavanı ÖNCESİ örtü: {_nk0} bozuk kenar "
          f"(taban {BOZUK_KIYI_TABAN}) ✓ — ⚠️ TABAN GEVŞEK, "
          f"BOZUK_KIYI_TABAN = {_nk0} yapılmalı")
else:
    print(f"  çöl tavanı ÖNCESİ örtü: {_nk0} bozuk kenar "
          f"(taban {BOZUK_KIYI_TABAN}) ✓")

# ---------------- ÇÖL TAVANI ----------------
# Kullanıcının en eski açık şikâyeti: çölde sınırlar "pat diye" geçiyor.
# Sebep ölçüldü ve cetvel DEĞİL — nokta yokluğu: Sahra'da 120 yerleşim var,
# medyan aralık 120 km, ama tek bir peteğin erişimi 1.475 km'ye kadar çıkıyor
# (Timbuktu). O kadar uzağa uzanan bir hâkimiyet iddiası tarihen de yanlış.
#
# KURAL (COGRAFYA-COL-TAVANI.md §2): bir yerleşimin peteği, ÇÖL içinde kalan
# kısmında, noktasından 300 km'den uzağa uzanamaz.
#
# ⚠️ DERECE ≠ KİLOMETRE — bu kuralın en sinsi tuzağı ve A/B'de GÖRÜNMEZ.
# Sabit 2,70° yazılsaydı gerçek erişim Sahra'da 272 km, Akdeniz kenarında
# 246 km olurdu; hiçbir denetim patlamaz, tavan yalnız istenenden %10-18 dar
# olurdu ve kimse aramazdı. Bu yüzden disk ENLEME GÖRE ölçekli bir elipstir:
# boylam yarıçapı cos(enlem) ile genişler.
#
# 🔴 GÜVENLİK ÖZELLİĞİ: tavan yalnız ÇIKARIR, hiç EKLEMEZ. Yani
# petek_son ⊆ petek_voronoi her zaman doğru ⇒ yeni emilme riski yapısal olarak
# üretilemez, Değişmez 1 ve 2 etkilenmez (nokta değil ALAN çıkıyor ve her
# yerleşim kendi diskinin merkezinde).
# 🔴 VE ÇÖL DIŞI HİÇ ETKİLENMEZ — bu da yapısal: kesim `COL` ile kesişimden
# türüyor. Bu yüzden "çöl dışında kısalma = 0" ölçülmez, buradan okunur.
COL_TAVAN_KM = 300.0
COL_SU_MUAF_KM = 30.0
# 🔴 MUAFİYETİN KAPSAMI — şartname iki okumaya birden açıktı ve ikisi farklı
# sonuç veriyor. Karar iki kez döndü, o yüzden TEK SATIRLIK anahtar yapıldı:
#   False (ALAN bazlı)     kuralın lafzı: "30 km'den yakın ALANDA tavan
#                          uygulanmaz". Nil şehrinin peteği Nil boyunca
#                          sınırsız uzanır ama çöle doğru 300 km'de durur.
#                          Yapısal olarak sınırlı — hiçbir petek 300 km'yi
#                          çöle doğru aşamaz, veri ne olursa olsun.
#   True  (YERLEŞİM bazlı) kullanıcının cümlesi: "nehrin kıyısındaki şehirler
#                          bir tarafı Nil'e dayanan DİĞER TARAFI ÇÖLE UZANAN
#                          bölgeyi kullanırlar". Suya 30 km'den yakın
#                          yerleşimin peteği HİÇ kesilmez.
# ⚠️ Seçim (True) ölçüme dayanıyor: muaf kümenin azamisi bugün 346 km, yani
#    "muafiyet kaçak yola dönüşür" korkusu GERÇEKLEŞMİYOR. Ama bu VERİYE
#    bağlı bir güvence, yapısal değil: suya yakın yeni bir çöl kenarı noktası
#    eklenirse o nokta sınırsız erişim kazanır ve kimse uyarmaz.
#    Bu yüzden aşağıda muaf peteklerin azami erişimi HER KOŞUDA raporlanıyor.
# 🔴 (A) SEÇİLDİ — ÖLÇÜLEREK. (B) denendi ve koordinatörün İLK korkusunu
# doğruladı: yerleşim bazlıda TIMBUKTU muaf çıkıyor (Nijer kıyısında,
# suya 30 km'den yakın) ve peteği Sahra'yı 1.475 km boyunca kesmeye
# devam ediyor — yani kullanıcının BİRİNCİ şikâyeti hiç çözülmüyor.
# Ndjamena (Şari) 1.450 km ile ikinci. Alan bazlıda ikisi de kesiliyor
# (Timbuktu tek başına 812.532 km²).
COL_MUAF_YERLESIM_BAZLI = False
asama("Çöl tavanı")
_col_parca = []
try:
    _gr = json.load(open(os.path.join(BASEMAPS,
                                      "ne_10m_geography_regions_polys.geojson"),
                         encoding="utf-8"))
    for f in _gr["features"]:
        # ⚠️ ANAHTARLAR BÜYÜK HARF. Küçük harfle sorulunca sessizce None döner
        # ve "pencerede çöl yok" gibi sakin bir yanlış üretir.
        if (f["properties"].get("FEATURECLA") or "") != "Desert":
            continue
        _g = shape(f["geometry"])
        if not _g.envelope.intersects(BOLGE):
            continue
        _g = _g.buffer(0).intersection(BOLGE)
        if not _g.is_empty:
            _col_parca.append(_g)
except Exception as _e:
    print("  UYARI çöl verisi okunamadı, tavan UYGULANMIYOR:", _e)
COL = unary_union(_col_parca) if _col_parca else None
print(f"  {len(_col_parca)} çöl poligonu birleşti")

# Su koridoru muafiyeti (§3.1): Natural Earth'ün çöl lekeleri Nil vadisinin
# ÜSTÜNDEN geçiyor, vadiyi oymuyor. Ham tavan Mısır'ı keserdi — çöl poligonu
# içinde ve Nil'e 55 km'den yakın 35 yerleşim ölçülmüş.
# ⚠️ Muafiyet ALAN bazlı yazıldı, kuralın lafzına uyarak ("30 km'den yakın
#    ALANDA tavan uygulanmaz"). Yerleşim bazlı okuma da mümkündü ve Mısır'da
#    fark üretiyor; ikisi ölçülüp koordinatöre sayıyla getirildi.
# ⚠️ SU KÜMESİ, MOTORUN YASLAMA KÜMESİ DEĞİLDİR — ölçülerek ayrıldı.
# İlk yazımda `NEHIR_HAT`ı (41 adlı akarsu parçası) kullandım ve muaf/tâbi
# ayrımı 46/74 çıktı; şartname 55/61 diyordu. Fark 9 kayıt, yani tavana girip
# girmeyeceği belirsiz 9 yerleşim.
# Dosyanın TAMAMIYLA ölçtüm: 57/63 — şartnameye 2 kayıt uzaklıkta.
# 📌 Kavramsal olarak da doğrusu bu: muafiyet *"burada su var mı"* diye soruyor,
# *"motor buraya yaslanıyor mu"* diye değil. Adsız bir vadi kenarındaki
# yerleşim de su kenarındadır.
_tum_nehir = []
try:
    for _f in json.load(open(os.path.join(BASEMAPS, "ne_10m_rivers.geojson"),
                             encoding="utf-8"))["features"]:
        _g = shape(_f["geometry"])
        if _g.envelope.intersects(BOLGE):
            _g = _g.intersection(BOLGE)
            if not _g.is_empty:
                _tum_nehir.append(_g)
except Exception as _e:
    print("  UYARI tam nehir kümesi okunamadı, yaslama kümesine düşülüyor:", _e)
    _tum_nehir = [NEHIR_HAT] if NEHIR_HAT is not None else []
print(f"  su koridoru: {len(_tum_nehir)} akarsu parçası + kıyı")
_su_hat = [x for x in (unary_union(_tum_nehir) if _tum_nehir else None,
                       KARA.boundary) if x is not None and not x.is_empty]
_SU = unary_union(_su_hat) if _su_hat else None
# ⚠️ Tampon da derece uzayında: çöller 0-40° arasında, cos 1,00-0,77.
#    Enlem yönünde tam, boylam yönünde en kötü %23 dar kalır — muafiyeti
#    DARALTAN yönde hata, yani Nil'i kesme riskine karşı GÜVENLİ taraf değil.
#    Bu yüzden tampon cos(enlem) EN KÖTÜ hâline göre genişletiliyor.
_SU_TAMPON = (_SU.buffer(COL_SU_MUAF_KM / 111.32 / math.cos(math.radians(40.0)))
              if _SU is not None else None)

if COL is not None:
    _tv_n, _tv_alan, _tv_dok = 0, 0.0, []
    _tv_muaf = 0
    _tv_yapisan = 0
    _colp = prep(COL)
    for _i in range(len(PETEK_D)):
        _g = PETEK_D[_i]
        if _g is None or _g.is_empty:
            continue
        if not _colp.intersects(_g):
            continue                      # çöle hiç değmiyor → dokunma
        _y = YERLER[_i]
        if COL_MUAF_YERLESIM_BAZLI and _SU_TAMPON is not None \
                and _SU_TAMPON.contains(Point(_y["lon"], _y["lat"])):
            _tv_muaf += 1
            continue                      # yerleşim suya yakın → peteği hiç kesilmez
        # 300 km'lik disk: ELİPS, çünkü boylam derecesi enlemle daralıyor.
        _co = max(math.cos(math.radians(_y["lat"])), 0.05)
        _rx = COL_TAVAN_KM / 111.32 / _co
        _ry = COL_TAVAN_KM / 111.32
        # Elips doğrudan kuruluyor — `shapely.affinity` içeri alınmamış ve
        # `import shapely` alt modülü açmıyor; derleme temiz geçer, koşu
        # 20. dakikada patlardı.
        _disk = Polygon([(_y["lon"] + _rx * math.cos(_t * math.pi / 32.0),
                          _y["lat"] + _ry * math.sin(_t * math.pi / 32.0))
                         for _t in range(64)])
        # kesilecek = peteğin ÇÖLDE olan, SUYA uzak olan ve DİSK DIŞINDA kalan payı
        _kes = _g.intersection(COL).difference(_disk)
        if _SU_TAMPON is not None and not _kes.is_empty:
            _kes = _kes.difference(_SU_TAMPON)
        if _kes.is_empty:
            continue
        _a = _ham_km2(_kes)
        if _a < 1.0:
            continue                      # kırıntı
        _yeni = poligonal(_g.difference(_kes))
        if _yeni.is_empty:
            # ⚠️ ANA PARÇA DEĞİŞMEZİ: bir yerleşim kendi altındaki toprağı
            # kaybedemez. Tavan bunu üretemez (nokta kendi diskinin
            # merkezindedir) ama sessiz kalmasın diye sınanıyor.
            print(f"  ✗ TAVAN {_y['ad']} peteğini YOK ETTİ — uygulanmadı")
            continue
        PETEK_D[_i] = _yeni
        _tv_n += 1; _tv_alan += _a
        _tv_dok.append((_a, _y["ad"], _y["lat"], _y["lon"]))
    print(f"  {_tv_n} petek kısaldı, toplam {_tv_alan:,.0f} km² sahipsizleşti"
          + (f" · {_tv_muaf} petek su koridoru muafiyetiyle KESİLMEDİ"
             if COL_MUAF_YERLESIM_BAZLI else ""))
    # ⚠️ Yerleşim bazlı muafiyet VERİYE bağlı bir güvence: muaf bir noktanın
    # erişimi ilkece sınırsız. Bugün azami 346 km ama yeni bir su kenarı çöl
    # noktası bunu sessizce büyütebilir. Bu yüzden HER KOŞUDA raporlanıyor.
    if COL_MUAF_YERLESIM_BAZLI and _SU_TAMPON is not None:
        _mer = []
        for _i2 in range(len(PETEK_D)):
            _g2 = PETEK_D[_i2]
            if _g2 is None or _g2.is_empty: continue
            _y2 = YERLER[_i2]
            if not _SU_TAMPON.contains(Point(_y2["lon"], _y2["lat"])): continue
            if not _colp.intersects(_g2): continue
            _en2 = 0.0
            for _p2 in (_g2.geoms if _g2.geom_type == "MultiPolygon" else [_g2]):
                for _x2, _yy2 in _p2.exterior.coords:
                    _d2 = girdi.km(_y2["lat"], _y2["lon"], _yy2, _x2)
                    if _d2 > _en2: _en2 = _d2
            _mer.append((_en2, _y2["ad"]))
        if _mer:
            _mer.sort(reverse=True)
            print(f"  muaf peteklerin azami erişimi: {_mer[0][0]:,.0f} km "
                  f"({_mer[0][1]}) · ikinci {_mer[1][0]:,.0f} km"
                  if len(_mer) > 1 else
                  f"  muaf peteklerin azami erişimi: {_mer[0][0]:,.0f} km")
    for _a, _ad, _la, _lo in sorted(_tv_dok, reverse=True)[:12]:
        print(f"     {_a:>10,.0f} km²  {_ad:<26} {_la:6.2f}K {_lo:7.2f}D")
    if len(_tv_dok) > 12:
        print(f"     … ve {len(_tv_dok)-12} petek daha")

# ---------------- MOTORUN ÇİZDİĞİ KARA — altlığın kıyısı buradan gelsin ----
# ⚠️ TEK GEOMETRİ İKİ YERDE ÜRETİLMESİN (OGRENILENLER §35).
# Vektör altlık kıyısını kendi başına `simplify(SADE_TOL)` ile üretiyordu; motor
# ise `simplify(KARA_TOL)` → `coverage_simplify(SADE_TOL)` zinciriyle. Douglas-
# Peucker böyle bileşmiyor ve sapma ÖLÇÜLDÜ: 16.249 kıyı köşesi, medyan 0,26 km,
# %90 0,94 km, %99 1,29 km — %99 dilimi SADE_TOL'ün km karşılığına (1,34 km)
# yapışık, yani sapma gürültü değil sadeleştirme farkının kendisi.
# z5'te 0,4 px görünmez, z10'da 13 px bariz.
# 📌 Sabiti paylaşmak sapmanın TAVANINI indirir, SIFIRLAMAZ. Çakışmanın inşa
# gereği tam olması için ÇIKTININ paylaşılması gerekiyor — dosya bu.
# Hücreler BOLGE'yi döşeyip KARA'ya kırpıldığı için birleşimleri tanımı gereği
# "motorun çizdiği kara"dır; yeni hesap değil, elimizdekinin yazılması.
asama("Motorun çizdiği kara (motor_kara.geojson)")
_mkara = unary_union([g for g in PETEK_D if g is not None and not g.is_empty])
_mkyol = os.path.join(BASEMAPS, "motor_kara.geojson")
io.open(_mkyol, "w", encoding="utf-8").write(json.dumps(
    {"type": "FeatureCollection", "features": [
        {"type": "Feature", "properties": {"kaynak": "uret_petek.py",
                                           "not": "ALTLIK BUNU KULLANIR — elle düzenlemeyin"},
         "geometry": shapely.geometry.mapping(_mkara)}]},
    separators=(",", ":")))
print(f"Motorun çizdiği kara → veri-kaynak/motor_kara.geojson "
      f"({os.path.getsize(_mkyol)//1024} KB)")

# ⚠️ BU SATIR ARTIK NÖBETÇİ DEĞİL, BİLGİ. Nöbetçi çöl tavanının ÖNÜNE alındı
# (bkz. BOZUK_KIYI_TABAN bloğu). Buradaki sayı çöl tavanının SAHİPSİZLEŞTİRDİĞİ
# alanın kenarını da içerir ve o delikler KASITLIDIR — "tavan yalnız ÇIKARIR".
# Bir eşikle karşılaştırmak, kasıtlı bir özelliği kusur diye raporlamak olurdu;
# tam olarak 130 sayısının aylarca "✗" bastırmasının sebebi buydu.
# 📌 İzlenmeye değer olan MUTLAK SAYI değil FARK: çöl tavanı kaç yeni kenar
# açtı. Kısalan petek sayısı değişmediği hâlde fark büyürse tavanın davranışı
# değişmiş demektir.
_nk = _bozuk_dok(PETEK_D, "çöl sonrası")
print(f"  çöl tavanı sonrası örtü: {_nk} bozuk kenar "
      f"(çöl öncesi {_nk0} → tavanın açtığı {_nk - _nk0}; sahipsizleşen alanın "
      f"kenarı, BEKLENEN — gövde birleştirmesi yutuyor)")

# ---------------- Zaman çizelgesi: kırılma tarihleri ----------------
tarihler = set()
for y in YERLER:
    for dn in y["d"] + y["v"]:
        tarihler.add(dn["f"]); tarihler.add(dn["t"])
tarihler = sorted(t for t in tarihler if EPOK <= t <= "1923-11-01")
if tarihler[0] != EPOK: tarihler.insert(0, EPOK)
if tarihler[-1] != "1923-11-01": tarihler.append("1923-11-01")
print(f"Kırılma tarihi: {len(tarihler)}")

def alan_km2(g):
    if g.is_empty: return 0
    ps = g.geoms if isinstance(g, MultiPolygon) else [g]
    T = 0.0
    for p in ps:
        for ring, sg in [(p.exterior, 1)] + [(h, -1) for h in p.interiors]:
            cs = list(ring.coords); s = 0.0
            for i in range(len(cs)-1):
                lo1, la1 = math.radians(cs[i][0]), math.radians(cs[i][1])
                lo2, la2 = math.radians(cs[i+1][0]), math.radians(cs[i+1][1])
                s += (lo2-lo1) * (2 + math.sin(la1) + math.sin(la2))
            T += sg * abs(s * R_DUNYA * R_DUNYA / 2)
    return int(round(T, -3))

# ---------------- YEDİNCİ DENETİM — sıfır alanlı petek ----------------
# hatalar 7.docx madde 2-3'ün kalıcı çözümü. Bu hata sınıfı SESSİZDİR:
# veri doğru, madde doğru, motor peteği dönem kümesinden düzgün çıkarır ama
# petek toprak taşımadığı için haritada hiçbir şey olmaz. Üç değişmez de bunu
# göremez çünkü hiçbiri "bu noktanın peteği var mı" diye sormuyor.
# denetle.py bunu ölçemez — hücre geometrisi yalnız burada, üretim sırasında
# var. Bu yüzden denetim motorun içinde ve üretimi UYARIYLA bitirir.
# ⚠️ ÖLÇÜT MUTLAK ALAN DEĞİL, ORAN — ilk yazımdaki hata ve düzeltmesi
# İlk sürüm `alan_km2(PETEK_D[i]) < 50` diye bakıyordu ve 101 petek işaretledi:
# Bursa, İznik, Bilecik, İnegöl, Yenişehir, Limni… Hepsi YANLIŞ ALARMDI, iki
# sebepten: (1) `alan_km2` bini yuvarlıyor (`round(T, -3)`), yani 500 km²'nin
# altındaki her şey "0 km²" basıyor ve 50 km² eşiği yuvarlama tanesinin altında
# kalıyor; (2) kuruluş devri çekirdeği GERÇEKTEN sık — İnegöl'ün komşuları 15 km
# ötede, peteği haklı olarak küçük. Mutlak alan bu iki durumu ayırt edemiyor.
# Doğru ölçüt: peteğin YASLAMA ÖNCESİ ham Voronoi hücresine oranı. Estergon
# 8 / 4.819 = %0.2 (boru hattı hücreyi yok etti), İnegöl ise %100 (hücre küçük
# ama sağlam). Oran, yoğunluktan bağımsız olarak yalnız KAYBI ölçer.
SIFIR_PETEK_ORAN = 0.10          # ham hücrenin %10'unun altı: hücre yok edilmiş
asama("Petek alanları (yedinci denetim)")


# ⚠️ ORAN TABANI: ham hücre TÜM KARA ile değil, yerleşimin KENDİ kara bileşeni
# ile kesilir. İlk sürüm `PETEK[i].intersection(KARA)` diyordu ve 18 vaka
# işaretliyordu — ölçüldü, 17'si ADA KURALININ DOĞRU ÇALIŞMASIYDI. Venedik'in
# ham hücresi 36.825 km²'dir ama 36.803 km²'si ANAKARADADIR; ada kuralı onu
# kesince oran %0,1 çıkıyor ve denetim "hücre yok edildi" diye bağırıyor.
# Oysa Venedik'in kendi kara parçası (lagün adası) 9 km² ve tamamı elinde.
# Aynısı Masira, Kemeran, Kiş, Brakya, Bozcaada, Pag, Elba, Ferasan… için.
# Taban kendi bileşenine çevrilince 18 → 1 (Ankober %7,3, gerçek sinyal).
# Ölçüm: Oturum 8 raporu (OTURUM-8-OLCUMLER.md §2) + Oturum 16'nın bağımsız
# doğrulaması — iki ölçüm aynı 18 vakayı ve aynı tek kalanı verdi.
_kagac = STRtree(_komp)
_oranlar = []
for i in range(len(YERLER)):
    if PETEK[i] is None:
        _oranlar.append((1.0, 0.0, 0.0, YERLER[i]["ad"])); continue
    try:
        _kendi = _komp[int(_kagac.nearest(_ptl[i]))]
    except Exception:
        _kendi = KARA
    ham = _ham_km2(PETEK[i].intersection(_kendi))
    son = _ham_km2(PETEK_D[i])
    _oranlar.append((son / ham if ham > 1 else 1.0, son, ham, YERLER[i]["ad"]))
_oranlar.sort()
if _YASLAMA_IPTAL:
    print(f"  koruma payı: {len(_YASLAMA_IPTAL)} yaslama iptal edildi "
          f"({len(set(_YASLAMA_IPTAL))} yerleşim korundu)")
print("  en düşük 6 oran: " + " · ".join(
    f"{ad} %{o*100:.0f} ({son:,.0f}/{ham:,.0f} km²)" for o, son, ham, ad in _oranlar[:6]))
# 🔴 ENKLAV MUAFİYETİ — MOTOR 3, 3 Ağustos 2026.
# Enklav bir presidiodur; peteğinin ham hücresine oranla KÜÇÜK kalması
# kusur değil, İSTENEN sonuçtur. Muaf tutulmazsa bu denetim doğduğu günden
# itibaren Sebte'yi (%3,3) ve Oran'ı (%7,9) SONSUZA KADAR işaretler —
# yani tam olarak `BOZUK_KIYI_TABAN = 32`'nin başına gelen şey: her koşuda
# "✗" basan, kimsenin bakmadığı, gerçek bir regresyonu artık gizleyen satır.
# ⚠️ Muafiyet SESSİZ DEĞİL: muaf tutulanlar ayrıca yazılır, çünkü "muaf"
#    ile "gözden kaçtı" ekranda aynı görünmemeli.
# ═══ 🔴 A1 TAVANI MUAFİYETİ — 9 Ağustos 2026, ENKLAV MUAFİYETİNİN İKİZİ ═══
# Bu denetim bir ORAN sorar: "petek, ham hücresinin %10'undan küçük mü?"
# Tavanlı hücrede o soru YANLIŞTIR, çünkü tavanın VAR OLUŞ SEBEBİ ham
# hücreyi küçültmektir. Ölçülmüş vaka (koşu 4b):
#     Timbuktu   ham 2.690.000 km²  →  son 245.000 km²  =  %9
# Oran %10'un altında ⇒ uyarı "fetih/kayıp maddeleri GÖRÜNMEZ" diyor. Ama
# 245.000 km² çoğu Avrupa ülkesinden büyüktür ve fazlasıyla görünür.
# ⇒ Tavanlı hücrede doğru ölçüt ORAN değil MUTLAK BÜYÜKLÜKTÜR.
# 📌 Ve bu, `BOZUK_KIYI_TABAN`ın ve `Değişmez 1` tavanının aynı gün ölçülen
#    üçüncü vakası: nöbetçi doğru, EVRENİ değişmiş. Enklav muafiyetinin
#    gerekçesi buraya kelimesi kelimesine uyuyor — "küçük kalması kusur
#    değil, İSTENEN sonuçtur."
# ⚠️ Muafiyet KÖR DEĞİL: mutlak taban altına düşen tavanlı hücre YİNE
#    işaretlenir (tavan bir hücreyi gerçekten yok edebilir), ve muaf
#    tutulanlar ENKLAVLAR GİBİ AYRICA yazılır — "muaf" ile "gözden kaçtı"
#    ekranda aynı görünmemeli.
TAVAN_MUAF_TABAN_KM2 = 20_000     # bu büyüklükte bir gövde haritada görünür
_TV_AD = {YERLER[i]["ad"] for i in _TV_BAGLI}
_ENK_AD = {YERLER[i]["ad"] for i in _ENKLAV}
_tavan_muaf = [r for r in _oranlar
               if r[0] < SIFIR_PETEK_ORAN and r[3] in _TV_AD
               and r[3] not in _ENK_AD and r[1] >= TAVAN_MUAF_TABAN_KM2]
_TM_AD = {r[3] for r in _tavan_muaf}
_kayip = [r for r in _oranlar if r[0] < SIFIR_PETEK_ORAN
          and r[3] not in _ENK_AD and r[3] not in _TM_AD]
_kayip_muaf = [r for r in _oranlar if r[0] < SIFIR_PETEK_ORAN and r[3] in _ENK_AD]
if _tavan_muaf:
    print(f"  i A1 TAVANI MUAFİYETİ: {len(_tavan_muaf)} petek oran testinin "
          f"altında ama ≥{TAVAN_MUAF_TABAN_KM2:,} km² — tavanın İSTENEN sonucu, "
          f"kusur DEĞİL:")
    for o, son, ham, ad in _tavan_muaf:
        print(f"      {ad:<28} %{o*100:5.1f}   {son:>9,.0f} / {ham:>9,.0f} km²")
if _kayip:
    print(f"  ✗ {len(_kayip)} PETEK ham hücresinin %{SIFIR_PETEK_ORAN*100:.0f}'undan "
          f"küçük — bu yerleşimlerin fetih/kayıp maddeleri haritada GÖRÜNMEZ:")
    for o, son, ham, ad in _kayip:
        print(f"      {ad:<28} %{o*100:5.1f}   {son:>9,.0f} / {ham:>9,.0f} km²")
else:
    print(f"  ✓ hiçbir petek ham hücresinin %{SIFIR_PETEK_ORAN*100:.0f}'unun altında değil"
          + (" (enklavlar hariç)" if _kayip_muaf else ""))
if _kayip_muaf:
    print(f"  ⓘ enklav muafiyeti: {len(_kayip_muaf)} petek eşiğin altında ama "
          f"BEKLENEN (presidionun hinterlandı yoktur):")
    for o, son, ham, ad in _kayip_muaf:
        print(f"      {ad:<28} %{o*100:5.1f}   {son:>9,.0f} / {ham:>9,.0f} km²")

# ---------------- AŞINMA BANDI — iki farklı soru, iki farklı eşik ----------
# Yedinci denetimin %10 eşiği "HÜCRE YOK EDİLDİ" sorusu için kalibre edildi
# (Estergon 8/4.819 = %0,2). Ama bir petek yok olmadan alanının %60'ını
# kaybedebilir ve kullanıcı bunu GÖRÜR — Budin %41 tam bu sınıf, ve çöl tavanı
# koşusunda Dongola %38 ile aynı yere düştü.
# İki soru tek eşiğe sıkışmıştı:
#     %10 altı   hücre YOK EDİLDİ, fetih maddesi haritada görünmez   → ✗ HATA
#     %10-60     hücre AŞINDI, gövde küçülmüş görünür                → ⚠️ bilgi
# Eşiği oynatmak yanlış olurdu: o zaman gerçek "yok edildi" vakaları onlarca
# yanlış alarmın içinde kaybolurdu. Ayrı bant, ayrı satır, üretimi DURDURMAZ.
# ⚠️ `boşalan petek 0` bu bandı GÖREMEZ — "yok olmadı" ile "kesilmedi" ayrı
# şeyler; koordinatörün Nil sınavında tam bu ayrım belirleyici oldu.
ASINMA_ALT, ASINMA_UST = SIFIR_PETEK_ORAN, 0.60
_asinan = [r for r in _oranlar if ASINMA_ALT <= r[0] < ASINMA_UST]
if _asinan:
    print(f"  ⚠️ AŞINMA BANDI — ham hücresinin %{ASINMA_ALT*100:.0f}-"
          f"%{ASINMA_UST*100:.0f}'ı arasında kalan petek: {len(_asinan)}")
    for o, son, ham, ad in _asinan[:10]:
        print(f"      {ad:<28} %{o*100:5.1f}   {son:>9,.0f} / {ham:>9,.0f} km²")
    if len(_asinan) > 10:
        print(f"      … ve {len(_asinan)-10} petek daha")
else:
    print(f"  ✓ aşınma bandında (%{ASINMA_ALT*100:.0f}-%{ASINMA_UST*100:.0f}) "
          f"petek yok")

# ---------------- kur: / bit: — VARLIK EPOKLARI ----------------
# ⚠️ MIMARI.md §3.1'in çözümü. Ölçüm: denetim/KUR-ALANI-OLCUMU.md
#
# Motor `kur:` alanını okumuyordu: henüz kurulmamış şehrin peteği 1281'den beri
# haritada duruyor ve komşularından toprak koparıyordu. ÖLÇÜLDÜ — `kur:` taşıyan
# 34 nokta, kuruluşlarından önce toplam **1.699.095 km²** tutuyor; en büyükleri
# Ufa (391.590 km², kur 1574) ve Perm (364.108 km², kur 1723), ikisi de Ural
# eteğinde ve komşusuz. Yani hata "geç kuruluş × seyrek komşuluk" çarpımıdır ve
# nokta eklendikçe büyür.
#
# ZAMAN DİLİMLİ VORONOI'YE GEREK YOK. Diyagramı 441 kırılma için yeniden
# hesaplamak pahalı ve gereksiz; ADA KURALI'nın kullandığı makine yeterli:
# kurulmamış peteğin payı, o tarihte SAHNEDE OLAN en yakın komşuya devredilir.
# Varlık kümesi yalnız kur:/bit: günlerinde değiştiği için sonuç önbelleklenir —
# 917 nokta içinde 34 kur: + 3 bit: var, yani en çok ~37 ayrı epok.
#
# ⚠️ EN ÖNEMLİ KISIT: devir YALNIZ YANLIŞ BOYANAN peteklere uygulanır.
# Ölçüt "kurulmamış" değil, "kurulmamış VE o tarihte bir sahibi yazılı".
# Sebebi: bu projede sahipsizlik bazen KASITLIDIR (CLAUDE.md §3 — çöl dolgu
# noktaları, körfez şeyhlikleri). Kuveyt'in `kur:1716` ve ilk sahiplik penceresi
# de 1716; yani 1716 öncesi hem kurulmamış hem sahipsiz ve haritada BOŞ olması
# DOĞRU. O peteği komşusuna devretmek körfez kıyısını Basra'yla doldurup kasıtlı
# boşluğu yok ederdi. St. Petersburg ise `kur:1703` olduğu hâlde `s:` 1281'den
# rusya diyor — işte yanlış boyanan budur ve devredilir.
# Kural tek cümleyle: motor, VERİNİN BOYADIĞI ama HENÜZ VAR OLMAYAN alanı taşır;
# verinin bilerek boş bıraktığı alana dokunmaz.
_VARLIK_ONBELLEK = {}
_VARLIK_DEVIR = {}
# ② paylaştırma sayacı — İŞ 2'nin KABUL ÖLÇÜTÜ. Anahtar `devir` frozenset'i,
# yani önbellekle AYNI anahtar: bir epok iki kez hesaplanmaz, sayaç da
# şişmez. (Sayacı çağrı başına tutmak, önbellek isabetlerini iki kez sayardı.)
_VARLIK_PAY = {}
_KUS_IX = [i for i in range(len(PETEK_D))
           if PETEK_D[i] is not None and not PETEK_D[i].is_empty]
_KUS_AGAC = STRtree([PETEK_D[i] for i in _KUS_IX])
# ⚠️ TAMPON BİR KEZ — ölçüm betiğimde bu döngü İÇİNDEYDİ ve 35 epok × 12
# boşluk = 420 kez tam kıyı çizgisini tamponluyordu: bad allocation.
_KIYI_TAMPON = KARA.boundary.buffer(0.01)

# 🔴 PETEK_D MÜHRÜ — `_IC_ONBELLEK`in geçerlilik şartının ÖLÇÜLMESİ.
# Önbellek "PETEK_D bu noktadan sonra değişmez" varsayımına dayanıyor. Bu
# depoda bir varsayımın doğru OLDUĞUNU varsaymak yasak (bkz. kara-kısıtlı
# sahiplik bloğu: "garanti EDİLDİĞİNİ VARSAYMAK yerine ölçülür — ilk koşuyu
# düşüren tam buydu"). Mühür burada alınır, çıktı yazılmadan önce sınanır;
# tutmazsa koşu ÖLDÜRÜLÜR. Yanlış önbellek sessiz bayat harita üretirdi ve
# hiçbir denetim göremezdi — sekiz denetim de çıktının İÇ tutarlılığına bakıyor.
def _petek_muhru():
    return (len(PETEK_D),
            sum(shapely.get_num_coordinates(g) for g in PETEK_D),
            round(sum(g.area for g in PETEK_D), 9))


_PETEK_MUHUR = _petek_muhru()


def _muhru_dogrula(nerede):
    simdi = _petek_muhru()
    if simdi != _PETEK_MUHUR:
        raise SystemExit(
            "PETEK_D KOSU SIRASINDA DEGISTI: " + repr(_PETEK_MUHUR) + " -> "
            + repr(simdi) + " (" + nerede + " yazilmadan once olculdu)."
            " _IC_ONBELLEK/_CEP_ONBELLEK bayat kaldi, kusatilmislik kararlari"
            " ESKI geometriden verilmis olabilir. Kosu OLDURULDU --"
            " onbellekleri temizleyen ya da PETEK_D'ye yazan yeni satiri bul.")


def _sahipli(y, g):
    """y yerleşiminin g tarihinde yazılı bir sahibi var mı (s/d/v)."""
    for kat in ("d", "v", "s"):
        for p in y[kat]:
            if p["f"] <= g < p["t"]:
                return True
    return False


# ---------------- KUŞATILMIŞLIK — "yazılmamış boşluk" ile "kasıtlı" ayrımı ---
# `_sahipli` ölçütü Kuveyt için doğru kuruldu (kur:1716, ilk sahiplik de 1716 →
# kasıtlı boş) ama Rumeli Hisarı'na da aynı cevabı veriyordu: 1452'de yapılmış
# bir hisara 1288 sahibi yazılmamış, oysa toprak Bizans'tı. Kural "kasıtlı
# boşluk" ile "yazılmamış boşluk"u ayıramıyor — ikisi de veride aynı görünüyor.
#
# ÜÇ ÖLÇÜT SIRAYLA ELENDİ, üçü de farklı sebeple:
#   1. "komşuları sahipli mi"        → 12'nin 10'unu işaretledi, Kuveyt dahil
#   2. "en yakın 6 komşu oy birliği" → KOMŞULUK TANIMINA DAYANIKSIZ: düz
#      mesafeyle Rumeli Hisarı devrediliyor, gerçek petek komşuluğuyla KUVEYT
#      devrediliyor. Tam tersi. Sebep: düz mesafe HER ZAMAN 6 komşu bulur;
#      Rumeli Hisarı'nın gerçekte 1 ortak-kenarlı komşusu var.
#   3. çevre payı, kıyı paydada     → Rumeli Hisarı %35 çıktı, çünkü çevresinin
#      çoğu Boğaz. Kıyıda komşu OLAMAZ; yokluğu kuşatılmamışlık delili değildir.
# Kalan ölçüt: KARA komşuluğu payı (kıyı paydadan çıkarılmış), tek sahip.
#
# 📌 EŞİK ÖNEMSİZ — ve bu, tek uydurma sayıya yaslanmaktan çok daha sağlam.
# 35 epokun hepsinde ölçüldü, her yerleşimin azami payı:
#     100,0 Adapazarı · 95,6 Rumeli Hisarı · 95,4 Anadolu Hisarı
#      90,8 Yeni Ürgenç                      ← bekletildi, aşağıya bak
#     ───────────────── 25 puanlık boşluk ─────────────────
#      65,6 Kesela · 62,8 Krasnovodsk · 62,7 İlbasan · 49,5 Doha · 48,9 Cetinje
#      45,2 Kuveyt · 36,0 Vladikavkaz
# 65,6 ile 90,8 arasında HİÇBİR vaka yok ⇒ %66 ile %90 arasındaki HER eşik
# aynı sonucu verir. Eşiği "ayarlamaya" kalkma; ayarlanacak bir şey yok.
#
# ⚠️ HATA ASİMETRİSİ: yanlış devir haritayı BOZAR (Kuveyt İran boyanır),
# devretmemek bugünkü hâli KORUR. Eşik yüksek tutulmuştur; en kötü ihtimalde
# bugünden kötü değiliz.
#
# ⏸️ YENİ ÜRGENÇ (%90,8) BİLEREK DIŞARIDA. Üç eksende de tutuyordu ama üçü de
# aynı soruyu soruyor: "orayı kim yönetiyordu". Asıl soru o değil: şehir
# CEYHUN'UN YATAK DEĞİŞTİRMESİ üzerine kuruldu, eski Ürgenç susuz kaldı.
# Soru "Hîve orayı yönetiyor muydu" değil, "1646'dan önce orası sulanan vahanın
# içinde miydi, yoksa çöl müydü". Çölse boşluk DOĞRU ve kuşatılmışlık bunu
# göremez — çöl de kuşatılmış olabilir. ARAŞTIRMA DOĞU'nun cevabı bekleniyor.
# 🔴 ÖLÇÜT GEVŞETİLDİ — "tek sahip ≥%90" DEĞİL, "SAHİPLİ ≥%90".
# Eski hâli deliği yeniden açıyordu ve kullanıcı onu gördü: Anadolu Hisarı
# 1305'e kadar devrediliyor, sonra Osmanlı Bitinya'ya girince çevre
# Bizans+Osmanlı karışımı oluyor ve tek-sahip payı %95,2 → %75,9'a düşüyor.
# Toplam SAHİPLİ oran ise %95,4'te kalıyor:
#     1305: en büyük %95,2 (1 sahip)   → devrediliyordu
#     1340: en büyük %75,9 (2 sahip)   → DELİK, toplam %95,4
# ⇒ Kasıtlı boşluğu ayıran şey "kaç sahip" değil "HİÇ sahip var mı".
#   Kuveyt'in çevresi %45 sahipli — orada gerçekten devlet yok.
#   Anadolu Hisarı'nın çevresi %95 — orada İKİ devlet var, toprak ikisinden
#   birinin ve "kimsesiz" göstermek yanlış.
# Ön-kayıtlı sınav geçti: Kuveyt %45,2 · Doha %49,4 · Abu Dabi ölçülemez —
# üçü de eşiğin çok altında, gevşetme kasıtlı boşlukları BOZMUYOR.
#
# 🔴 BEYAZ LİSTE KALDIRILDI. Eskiden `KUSATMA_ADLAR` üç ölçülmüş adı tutuyordu;
# gevşetilmiş ölçüt sekiz ad üretiyor ve liste kalsaydı ölçüt SESSİZCE
# kısıtlanmış olurdu — kodun söylediği ile yaptığı ayrışırdı.
# Yerine `kasitli_bosluk:` veri alanı geçti: ölçüt VARSAYILAN, kaynaklı
# araştırma hükmü İSTİSNA.
#
# 🔴 DEVİR HEDEFİ DEĞİŞMEDİ — `petek_epok`'un kuralı: EN YAKIN sahnedeki komşu.
# "En büyük paylı komşuya devret" ölçüldü ve TEHLİKELİ çıktı:
#     1340'ta en büyük pay   OSMANLI %75,9  → hücre OSMANLI boyanırdı
#     1340'ta en yakın komşu İSTANBUL 11 km → hücre BİZANS boyanıyor
# Tarihen doğru olan Bizans (Boğaz kıyısı 1452'ye kadar Bizans'ta).
# ⚠️ Yanlış renk boşluktan KÖTÜDÜR: boşluk "bilmiyoruz" der, yanlış renk
# "biliyoruz" der. Gevşetme yalnız "devredilsin mi" sorusunu değiştiriyor,
# "kime" sorusunu değil.
KUSATMA_ESIK = 0.90
_KUS_ONBELLEK = {}

# 🔴 KOŞUNUN %86'SI BU İKİ SATIRDA YANIYORDU — MOTOR 3, 3 Ağustos 2026, ölçüldü.
# `_kusatilmis` her TARİH için bütün adayların "kıyı olmayan sınır payı"nı
# baştan hesaplıyordu:
#       ic = c.boundary.difference(_KIYI_TAMPON)
# Oysa bu ifade `g` TARİHİNDEN BAĞIMSIZDIR: `c` = PETEK_D[i] ve PETEK_D'nin son
# değişimi çöl tavanı bloğundadır (`PETEK_D[_i] = _yeni`), yani _kusatilmis ilk
# kez çağrılmadan ÇOK ÖNCE donar; `_KIYI_TAMPON` de sabittir. Aynı 96 değer
# 1.207 kez yeniden hesaplanıyordu.
#
# ÖLÇÜM (scratchpad, canlı veri + uretilmiş petek_govde.js geometrisi):
#     _kusatilmis çağrı başına        11,7 sn ortalama  →  ~0,45 sn
#     bunun %96,5'i tek satır          difference(_KIYI_TAMPON)
#     1.207 ayrı tarih × 11,7 sn      = 241 dk = koşunun %86'sı
#     ilk çağrı önbelleği doldurur (24 sn), sonrakiler 0,2-1,2 sn
# 19 tarihte eski/yeni sonuç KARŞILAŞTIRILDI: fark 0, frozenset'ler BİREBİR.
#
# ⚠️ ÖNBELLEĞİN GEÇERLİLİK ŞARTI TEK CÜMLE: PETEK_D bu noktadan sonra
# DEĞİŞMEZ. `petek_epok()` onu kopyalayıp (`hucre = list(PETEK_D)`) kopyayı
# değiştirir, tabanı değil. Motorda PETEK_D'ye yazan yeni bir satır açılırsa
# — ve o satır bu bloktan SONRA çalışırsa — önbellek bayat kalır ve hata
# SESSİZ olur. Yeni bir yazma noktası açan oturum bu sözlüğü temizlemelidir.
_IC_ONBELLEK, _CEP_ONBELLEK = {}, {}


def _ic_kara(i):
    """PETEK_D[i] sınırının KIYI OLMAYAN payı — tarihten bağımsız, önbellekli."""
    v = _IC_ONBELLEK.get(i)
    if v is None:
        v = PETEK_D[i].boundary.difference(_KIYI_TAMPON)
        _IC_ONBELLEK[i] = v
    return v


def _cep(i):
    """PETEK_D[i]'nin komşu sorgusu için tamponu — o da tarihten bağımsız."""
    v = _CEP_ONBELLEK.get(i)
    if v is None:
        v = PETEK_D[i].buffer(0.02)
        _CEP_ONBELLEK[i] = v
    return v


def _kusatilmis(g):
    """g epokunda, sahibi yazılmamış ama KARA komşuluğunun ≥%90'ı tek bir
    sahibe ait olan petekler. Karar epok gününde verilir ve epok aralığı
    boyunca geçerlidir; devrin KİME yapılacağını `petek_epok` o günün
    verisinden bulur, yani sahip kimliği donmuş olmuyor."""
    if g in _KUS_ONBELLEK:
        return _KUS_ONBELLEK[g]
    _t_kus = time.time()
    out = set()
    for i, y in enumerate(YERLER):
        if y.get("kasitli_bosluk"):
            continue                      # KAYNAKLI hüküm: boşluk kasten öyle
        if not ((y.get("kur") and y["kur"] > g) or (y.get("bit") and y["bit"] <= g)):
            continue
        if _sahipli(y, g):
            continue                      # zaten devrediliyor
        c = PETEK_D[i]
        if c is None or c.is_empty:
            continue
        ic = _ic_kara(i)
        if ic.length <= 1e-9:
            continue                      # tamamen kıyı — karar verilemez
        sahipli = []
        for q in _KUS_AGAC.query(_cep(i)):
            j = _KUS_IX[int(q)]
            if j == i: continue
            yj = YERLER[j]
            if (yj.get("kur") and yj["kur"] > g) or (yj.get("bit") and yj["bit"] <= g):
                continue
            if _sahipli(yj, g):
                sahipli.append(PETEK_D[j])
        if not sahipli:
            continue
        try:
            # ⚠️ SAHİP AYRIMI YAPILMIYOR — hepsi tek birleşim. Soru "hangi
            # devlet" değil, "HİÇ devlet var mı".
            ort = ic.intersection(unary_union(sahipli).buffer(0.002))
            if not ort.is_empty and min(ort.length / ic.length, 1.0) >= KUSATMA_ESIK:
                out.add(i)
        except Exception:
            pass
    _KUS_ONBELLEK[g] = frozenset(out)
    sayac("kuşatılmışlık (_kusatilmis)", time.time() - _t_kus)
    return _KUS_ONBELLEK[g]


def devir_kumesi(g):
    """g tarihinde SAHNEDE OLMAYAN ve peteği devredilecek yerleşimler:
    (a) veride SAHİBİ YAZILI olanlar, (b) sahibi yazılmamış ama kara
    komşuluğunun ≥%90'ı tek bir sahibe ait olanlar (bkz. yukarıdaki blok)."""
    yazili = frozenset(
        i for i, y in enumerate(YERLER)
        if ((y.get("kur") and y["kur"] > g) or (y.get("bit") and y["bit"] <= g))
        and _sahipli(y, g))
    return yazili | _kusatilmis(g)


# ---------------- SERBEST KENAR — sahipli ↔ SAHİPSİZ sınırı ----------------
# hatalar 15 md.17'nin çözümü. Kullanıcı çölde "cetvelle çizilmiş" sınır görüyor;
# ölçüldü ve sebebi bulundu: o kenarların BEŞİ DE `(boş) | OSMANLI`, yani çizgi
# iki devlet arasında DEĞİL, devlet ile SAHİPSİZ ÇÖL arasında.
# İki devlet arasındaki Voronoi orta dikmesi kaba da olsa GERÇEK bir iddiadır —
# "yetki burada bölünüyordu". Devlet ile HİÇLİK arasındaki orta dikme ise hiçbir
# şeyin iddiası değil: dolgu noktasını nereye koyduğumuzun artefaktı. O çizgi
# haritada keskin çizilmemeli, çünkü olmayan bir kesinlik iddia ediyor.
# ⚠️ Bu yüzden çare ergleri yaslama hedefi yapmak DEĞİLDİ: sahte bir çizgiyi
# gerçek bir fiziki hatta oturtmak onu daha İNANDIRICI yapardı. Görsel şikâyet
# kapanır, epistemik hata derinleşirdi.
# Ölçüldü (r138 geometrisi): serbest kenar, Osmanlı gövde sınırının köşe olarak
# %1,7-3,1'i ama UZUNLUK olarak %17-22'si. Ortalama parçası 29,6 km, gövdenin
# geneli 4,2 km — yedi kat kaba. Yani hem ucuz (dönem başına ~470 köşe) hem de
# marjinal değil (çevrenin beşte biri).
# Çıktı: window.SERBEST hat havuzu + dönem kaydında "sb" (PARCALAR/"o" deseninin
# birebir aynısı); js/app.js line-blur ile dışa doğru söndürür.
SERBEST_TOL = 0.02          # ~2 km: gövde sınırı ile boş bölgenin çakışma payı
_SERBEST_ONBELLEK = {}


def bos_bolge(g, pe):
    """g tarihinde hiçbir sahibi YAZILI OLMAYAN peteklerin birleşimi (tamponlu).
    Küme dönemler arası neredeyse sabit — 40 sahipsiz noktanın çoğu kalıcı — bu
    yüzden petek_epok()'un önbellek deseni birebir tekrarlanıyor: 453 dönemin
    maliyeti birkaç düzine ayrı kümeye iner.
    ⚠️ Anahtar (sahipsiz, devir) İKİLİSİ: petek geometrisi epoktan epoğa
    değiştiği için yalnız sahipsiz kümesiyle anahtarlamak bayat sonuç verirdi."""
    anahtar = (frozenset(i for i, y in enumerate(YERLER) if not _sahipli(y, g)),
               devir_kumesi(g))
    if anahtar in _SERBEST_ONBELLEK:
        return _SERBEST_ONBELLEK[anahtar]
    bos = [pe[i] for i in anahtar[0] if not pe[i].is_empty]
    b = unary_union(bos).buffer(SERBEST_TOL) if bos else None
    _SERBEST_ONBELLEK[anahtar] = b
    return b


def serbest_kenar(g, govde, pe):
    """Gövdenin SAHİPSİZ alana bakan kenar parçaları."""
    if govde is None or govde.is_empty:
        return None
    b = bos_bolge(g, pe)
    if b is None or b.is_empty:
        return None
    try:
        k = govde.boundary.intersection(b)
        return None if k.is_empty else k
    except Exception:
        return None


def hat_belirsizlik(cs):
    """Hattın BELİRSİZLİĞİ, km. Serbest kenar iki tohumun ORTA DİKMESİDİR —
    sahipli yerleşim ile sahipsiz dolgu noktası. Dolgu noktasını d kadar
    oynatırsak sınır d/2 kayar; yani belirsizlik = iki tohum arası / 2.
    ⚠️ Neden tek çıpa değil: ölçüldü (r138), dağılım GENİŞ. Bölge medyanları
    Anadolu 23,4 km · Rumeli 30,5 · Kafkasya 62,0 · Libya 150,7 · Sahra 181,9 ·
    Arabistan 217,3 — en dar ile en geniş arasında 9,3 KAT. Tek kalınlık
    seçilseydi Anadolu'da hale 7 kat geniş, Arabistan'da 4 kat dar olurdu ve
    ölçtüğümüz farkı gizlerdi. Anadolu'daki serbest kenar neredeyse gerçek bir
    sınır; Arabistan'daki neredeyse hiçbir şey söylemiyor.
    Hat boyunca değişiyorsa MEDYAN alınır (ortalama değil — Q3/Q1 3,2-4,6)."""
    v = []
    for i in range(len(cs) - 1):
        p = Point((cs[i][0] + cs[i+1][0]) / 2, (cs[i][1] + cs[i+1][1]) / 2)
        yak = sorted((noktalar[int(k)].distance(p), int(k))
                     for k in _SEED_AGACI.query(p.buffer(6.0)))[:2]
        if len(yak) < 2:
            continue
        a, b = noktalar[yak[0][1]], noktalar[yak[1][1]]
        v.append(girdi.km(a.y, a.x, b.y, b.x) / 2.0)
    if not v:
        return None
    v.sort()
    return round(v[len(v) // 2], 1)


def hat_havuza(hatlar):
    """Hat havuzu + PARALEL belirsizlik dizisi. Aynı hat birden çok dönemde
    kullanılıyorsa tekilleşir ve belirsizliği bir kez hesaplanır."""
    out = []
    for cs in hatlar:
        k = json.dumps(cs, separators=(",", ":"))
        j = SRB_IX.get(k)
        if j is None:
            j = len(SRB_HAVUZ)
            SRB_HAVUZ.append(cs)
            SRB_U.append(hat_belirsizlik(cs))
            SRB_IX[k] = j
        out.append(j)
    return out


def hat_koord(g):
    """Hat geometrisini havuza yazılabilir koordinat listesine çevirir."""
    if g is None or g.is_empty:
        return []
    hs = ([g] if g.geom_type == "LineString"
          else [x for x in getattr(g, "geoms", []) if x.geom_type == "LineString"])
    out = []
    for h in hs:
        # Ardışık aynı nokta eleniyor (YUK-SARTNAME.md · D). Burası HAT,
        # halka değil — kapanış noktası yok, o yüzden kapatma da yok.
        cs = []
        for x, y in h.coords:
            q = [round(x, 3), round(y, 3)]
            if not cs or q != cs[-1]:
                cs.append(q)
        if len(cs) >= 2:
            out.append(cs)
    return out


# ---------------- ② VARLIK EPOKU PAYLAŞTIRMASI ------------------------------
# 🔴 EMRE'NİN CÜMLESİ (16 Ağustos 2026): *"sonradan doğan yerleşim kendi
# bölgesini kapmalı."*
#
# ⚠️ KUSUR "DEVİR YAPILMIYOR" DEĞİLDİ — devir yapılıyordu ama YANLIŞ BİÇİMDE:
# doğmamış noktanın peteği **bütünüyle TEK komşuya** gidiyordu (`agac.nearest`).
# Oysa o nokta yokken sınır **öbür komşuların ARASINDAN** geçerdi. Yani A'ya
# bütün gitmemeliydi; A, B ve C **paylaşmalıydı.**
#
# 📌 NİÇİN TAM VORONOİ DEĞİL — ölçüldü, naif yol PAHALI:
#     289 nokta kur: · 250 ayrı varlık kırılması
#     tam Voronoi 35 sn × 250 = +2,4 saat        🔴 kabul edilemez
#     ortalama Delaunay komşusu 6,0             ⇒ YEREL onarım yeter
# ⇒ Bütün diyagramı yeniden kurmak yerine, YALNIZ ÖLEN PETEĞE clip'lenmiş bir
#   mini-Voronoi kuruluyor. Sonuç aynı (o bölgede sınır, hayatta olan
#   komşuların orta dikmeleridir), maliyet binde biri.
#
# 🔴 VE BİTİŞİK ÖLÜ HÜCRELER BİRLİKTE İŞLENİR — bu, tek tek işlemenin sessiz
# hatasını kapatır. İki ölü hücre yan yanaysa ve tek tek işlenirse, birincinin
# "komşusu" ikinci ÖLÜ hücre olur; ölü bir komşuya pay vermek anlamsızdır ve
# sonuç İŞLEME SIRASINA bağlı hâle gelir. Bileşen hâlinde işlenince sıra
# etkisi ortadan kalkar — `§11`in *"SIRA bağlıyor olabilir"* dersinin önlenmiş
# hâli.
#
# ⚠️ ALAN KORUNUMU VARSAYILMAZ, ÖLÇÜLÜR. Motorun kendi kuralı (kara-kısıtlı
# sahiplik bloğu): *"garanti EDİLDİĞİNİ VARSAYMAK yerine ölçülür — ilk koşuyu
# düşüren tam buydu."* Mini-Voronoi'nin bölgeleri clip'lenen alanı tam
# örtmeyebilir (zarf payı, sayısal artık). Artık ÖLÇÜLÜR ve en yakın canlıya
# verilir; **sessizce kaybolmaz.**
_EPOK_PAY_TOL = 1e-12          # birim² — bunun altındaki artık sayısal gürültü


def _canli_komsular(alan, sahne_kume):
    """`alan`a değen, HAYATTA olan yerleşimlerin indeksleri.

    Komşuluk DONMUŞ `PETEK_D` üzerinden sorulur (kopyadan değil): ölü hücreler
    kopyada boşaltıldığı için kopyaya sormak komşuyu kaybettirirdi.
    """
    out = []
    for _q in _KUS_AGAC.query(alan.buffer(0.02)):
        j = _KUS_IX[int(_q)]
        if j in sahne_kume:
            out.append(j)
    return out


def _olu_bilesenler(olu, hucre):
    """Bitişik ölü hücreleri gruplar. [[i, ...], ...] döner."""
    if len(olu) == 1:
        return [list(olu)]
    agac = STRtree([hucre[i] for i in olu])
    baglanti = {i: set() for i in olu}
    for a, i in enumerate(olu):
        for _q in agac.query(hucre[i].buffer(0.02)):
            j = olu[int(_q)]
            if j != i:
                baglanti[i].add(j)
                baglanti[j].add(i)
    gorulen, out = set(), []
    for i in olu:
        if i in gorulen:
            continue
        yigin, grup = [i], []
        gorulen.add(i)
        while yigin:
            k = yigin.pop()
            grup.append(k)
            for j in baglanti[k]:
                if j not in gorulen:
                    gorulen.add(j)
                    yigin.append(j)
        out.append(grup)
    return out


def petek_epok(g):
    """g tarihinde geçerli petek listesi; kurulmamış/yok olmuş noktanın payı
    o tarihte sahnede olan komşulara **Voronoi kuralıyla PAYLAŞTIRILMIŞ** hâlde.

    Eski davranış (tek komşuya bütün) yalnız iki hâlde sürer ve ikisi de
    DOĞRUDUR: hayatta tek komşu varsa (bölünecek bir şey yok) ve hiç komşu
    yoksa (yerel onarım kurulamaz → küresel en yakına, eski yol).
    """
    devir = devir_kumesi(g)
    if not devir:
        return PETEK_D
    if devir in _VARLIK_ONBELLEK:
        return _VARLIK_ONBELLEK[devir]
    _t_pe = time.time()
    hucre = list(PETEK_D)
    sahne = [i for i in range(len(YERLER)) if i not in devir]
    sahne_kume = set(sahne)
    agac = STRtree([noktalar[i] for i in sahne])
    kayit = []
    # sayaç — İŞ 2'nin KABUL ÖLÇÜTÜ (koordinatör, M-0221)
    _pay = {"paylastirilan": 0, "tek_komsu": 0, "komsusuz": 0,
            "artik_km2": 0.0, "alici": 0}

    olu = [i for i in sorted(devir) if not hucre[i].is_empty]
    for grup in _olu_bilesenler(olu, hucre):
        alan = poligonal(unary_union([hucre[i] for i in grup]))
        if alan.is_empty:
            continue
        komsu = _canli_komsular(alan, sahne_kume)
        # ── ① hiç canlı komşu yok → ESKİ YOL (küresel en yakın) ──────────
        if not komsu:
            for i in grup:
                k = sahne[int(agac.nearest(noktalar[i]))]
                hucre[k] = poligonal(unary_union([hucre[k], hucre[i]]))
                kayit.append((YERLER[i]["ad"], YERLER[k]["ad"],
                              _ham_km2(hucre[i]), "komşusuz"))
                hucre[i] = Polygon()
                _pay["komsusuz"] += 1
            continue
        # ── ② tek canlı komşu → bütün ona; BÖLÜNECEK BİR ŞEY YOK ─────────
        if len(komsu) == 1:
            k = komsu[0]
            for i in grup:
                kayit.append((YERLER[i]["ad"], YERLER[k]["ad"],
                              _ham_km2(hucre[i]), "tek komşu"))
                hucre[i] = Polygon()
                _pay["tek_komsu"] += 1
            hucre[k] = poligonal(unary_union([hucre[k], alan]))
            continue
        # ── ③ ASIL YOL — yerel Voronoi, ölü alana clip'li ────────────────
        try:
            _zarf = box(*alan.buffer(1.0).bounds)
            _vd = voronoi_diagram(MultiPoint([noktalar[j] for j in komsu]),
                                  envelope=_zarf)
            _bolge = list(getattr(_vd, "geoms", []))
        except Exception:
            _bolge = []
        _verildi, _toplam = {}, 0.0
        for _b in _bolge:
            # Voronoi çıktısının SIRASI girdiyle AYNI DEĞİLDİR — her bölgeyi
            # içindeki noktayla eşleştirmek ŞART. (Sırasına güvenmek bu
            # dosyada daha önce ölçülmüş bir hata sınıfıdır.)
            _sahip = None
            for j in komsu:
                if _b.covers(noktalar[j]):
                    _sahip = j
                    break
            if _sahip is None:
                continue
            _pay_geo = _b.intersection(alan)
            if _pay_geo.is_empty or _pay_geo.area <= _EPOK_PAY_TOL:
                continue
            _verildi[_sahip] = poligonal(
                unary_union([_verildi[_sahip], _pay_geo])
                if _sahip in _verildi else _pay_geo)
            _toplam += _pay_geo.area
        # ⚠️ ARTIK — ÖLÇÜLÜR VE VERİLİR, sessizce kaybolmaz
        _artik = alan.area - _toplam
        if _artik > _EPOK_PAY_TOL and _bolge:
            try:
                _kalan = poligonal(alan.difference(
                    unary_union(list(_verildi.values()))))
                if not _kalan.is_empty:
                    _k2 = komsu[int(STRtree([noktalar[j] for j in komsu])
                                    .nearest(_kalan.representative_point()))]
                    _verildi[_k2] = poligonal(unary_union(
                        [_verildi.get(_k2, Polygon()), _kalan]))
                    _pay["artik_km2"] += _ham_km2(_kalan)
            except Exception:
                pass
        if not _verildi:              # Voronoi kurulamadı → ESKİ YOL
            for i in grup:
                k = sahne[int(agac.nearest(noktalar[i]))]
                hucre[k] = poligonal(unary_union([hucre[k], hucre[i]]))
                kayit.append((YERLER[i]["ad"], YERLER[k]["ad"],
                              _ham_km2(hucre[i]), "voronoi YOK"))
                hucre[i] = Polygon()
                _pay["komsusuz"] += 1
            continue
        for j, _geo in _verildi.items():
            hucre[j] = poligonal(unary_union([hucre[j], _geo]))
        for i in grup:
            kayit.append((YERLER[i]["ad"],
                          " + ".join(YERLER[j]["ad"] for j in sorted(_verildi))[:80],
                          _ham_km2(hucre[i]), "PAYLAŞTIRILDI %d" % len(_verildi)))
            hucre[i] = Polygon()
            _pay["paylastirilan"] += 1
        _pay["alici"] += len(_verildi)

    _VARLIK_ONBELLEK[devir] = hucre
    _VARLIK_DEVIR[devir] = kayit
    _VARLIK_PAY[devir] = _pay
    sayac("varlık devri (petek_epok)", time.time() - _t_pe)
    return hucre


asama("Varlık epokları (kur:/bit:) — kuşatılmışlık ön geçişi")
_kur_sayi = sum(1 for y in YERLER if y.get("kur"))
_bit_sayi = sum(1 for y in YERLER if y.get("bit"))
_epok_gun = sorted({y["kur"] for y in YERLER if y.get("kur")}
                   | {y["bit"] for y in YERLER if y.get("bit")})
print(f"  {_kur_sayi} nokta kur:, {_bit_sayi} nokta bit: taşıyor "
      f"→ {len(_epok_gun)} varlık kırılması")
for _g in (EPOK, "1500-06-15", "1700-06-15", "1900-06-15"):
    _d = devir_kumesi(_g)
    _a = sum(_ham_km2(PETEK_D[i]) for i in _d)
    print(f"  {_g}: {len(_d)} petek devredilecek, {_a:,.0f} km²")

# ---- ② PAYLAŞTIRMANIN KABUL ÖLÇÜTÜ — koşu KENDİ sayısını basar -------------
# 🔴 Koordinatörün şartı (M-0221): *"52'nin kaçı PAYLAŞTIRILDI, kaçı tek
# sahipte kaldı ve NİÇİN kaldı."* — ve "niçin" ÜÇ AYRI KOVA, tek sayı değil:
#     PAYLAŞTIRILDI  ≥2 hayatta komşu → mini-Voronoi böldü        ← ASIL İŞ
#     tek komşu      1 hayatta komşu  → bölünecek bir şey YOK     ← MEŞRU
#     komşusuz       0 hayatta komşu  → eski yol (küresel en yakın) ← MEŞRU
# ⚠️ Son iki kova BAŞARISIZLIK DEĞİLDİR ve öyle raporlanmamalı. Tek komşusu
# olan bir peteği "bölemedik" diye saymak, bölünecek şey olmadığı hâlde
# kusur uydurmak olurdu.
_pe_ozet = petek_epok(EPOK) and _VARLIK_PAY.get(devir_kumesi(EPOK))
if _pe_ozet:
    _tp = (_pe_ozet["paylastirilan"] + _pe_ozet["tek_komsu"]
           + _pe_ozet["komsusuz"])
    print(f"  ② PAYLAŞTIRMA ({EPOK}): {_tp} peteğin "
          f"{_pe_ozet['paylastirilan']}'i PAYLAŞTIRILDI "
          f"({_pe_ozet['alici']} alıcıya), "
          f"{_pe_ozet['tek_komsu']}'i tek komşu (bölünecek şey yok), "
          f"{_pe_ozet['komsusuz']}'i komşusuz (eski yol)")
    if _pe_ozet["artik_km2"] > 0.5:
        print(f"     ⚠️ artık {_pe_ozet['artik_km2']:,.0f} km² en yakın "
              f"canlıya verildi — SESSİZ KAYIP YOK")
    print(f"     ÖNGÖRÜ: denetim/EPOK-ONGORU.md")

# ⚠️ KUŞATILMIŞLIK DEVİRLERİ ADIYLA VE EPOKUYLA YAZILIR — koordinatörün şartı.
# Sebep: %90 çizgisi 12 kayıtlık bir dağılımdan çıktı. İleride kasıtlı bir
# boşluk ≥%90 kuşatılabilir (tek bir vahanın etrafı tümüyle sahipli olabilir).
# Liste basılırsa YENİ BİR DEVİR SESSİZ GELMEZ.
# 📌 Bu şartın karşılığı daha ilk turda alındı: üç ad beklenirken 35 epok
# taraması DÖRDÜNCÜYÜ (Yeni Ürgenç, %90,8, 16 epok) buldu. Tek epoktan
# çıkarılmış "beklenen liste" onu göremiyordu.
# Gevşetilmiş ölçütün 35 epokta ürettiği küme (scratchpad/gevsetme_tarama.py).
# Kaynaklı `kasitli_bosluk: true` yazılanlar buradan DÜŞER; liste yalnız
# "beklenmedik ad çıktı mı" sorusu için duruyor.
_KUS_BEKLENEN = {"Adapazarı", "Rumeli Hisarı", "Anadolu Hisarı",
                 "İlbasan (Elbasan)", "Kesela", "Cetinje",
                 "Vladikavkaz", "Yeni Ürgenç"}
_kus_kayit = []
for _g in [EPOK] + _epok_gun:
    for _i in sorted(_kusatilmis(_g)):
        _kus_kayit.append((_g, YERLER[_i]["ad"]))
if _kus_kayit:
    _kus_ad = sorted({a for _, a in _kus_kayit})
    print(f"  kuşatılmışlık devri (kara komşuluğu ≥%{KUSATMA_ESIK*100:.0f}): "
          f"{len(_kus_kayit)} epok-vaka, {len(_kus_ad)} yerleşim")
    for _ad in _kus_ad:
        _ep = [g for g, a in _kus_kayit if a == _ad]
        # ⚠️ Beyaz liste kalktığı için "liste dışı" diye bir şey yok; onun
        # yerine ÖLÇÜLMÜŞ küme ile karşılaştırılıyor. Yeni bir ad çıkarsa
        # işaretlenir — şart "yanlış EKLEME"yi yakalamak içindi ve duruyor.
        _im = "" if _ad in _KUS_BEKLENEN else "   ✗ BEKLENMEDİK — İNCELE"
        print(f"     {_ad:<24} {len(_ep):>3} epok  ({_ep[0]} … {_ep[-1]}){_im}")
else:
    print("  kuşatılmışlık devri: yok")

# ---------------- Parça havuzu ----------------
# Aynı gövde parçası (ada, değişmeyen ana halka…) yüzlerce dönemde birebir
# tekrarlanıyordu; ölçüm: donemler.js noktalarının yalnız %40'ı eşsizdi.
# Parçalar dosya başına TEK havuza yazılır, dönem kayıtları havuz indeksi taşır.
# js/app.js yüklerken indeksleri geometriye çevirir (aynı parça bellekte de
# tek nesne olur). Kazanç: kıyı 0.004 çözünürlükte kalırken dosya ~%60 küçülür.
def seyrelt(halka_hav, parca_hav, kayitlar, don_kose, tol):
    """B · UZAK COĞRAFYA SEYRELTME — YUK-SARTNAME.md.

    Halka halka Douglas-Peucker, AMA `don_kose` kümesindeki köşeler SABİT.
    Dondurulan köşe = aynı ANDA iki farklı sahibin (yabancı devlet ya da
    Osmanlı) sınırında geçen köşe. Onlar hiç oynamadığı için iki komşu
    arasında **boşluk yapısal olarak doğamaz** — ölçülmesi bile gerekmez.

    🔴 NİÇİN ÖLÇÜT BU (hepsi 4 Ağustos 2026'da ölçüldü):
      · yabancı gövde köşelerinin %86,7'si KIYIDA → `coverage_simplify`
        (yalnız hücreler arası kenarı sadeleştirir) baytın en fazla
        %13'ünü verebilir, 27 MB'ı ASLA. O yol elendi.
      · boşluğu kıyı değil ORTAK SINIR açıyor ve ortak sınır, aynı tarihte,
        köşelerin yalnız %6'sı.
      · düz Douglas-Peucker tol=0,02'de 27,09 MB veriyor ama 83.646 km²
        boşluk açıyor; hibrit tol=0,03'te 26,90 MB veriyor ve boşluk SIFIR.
        ⇒ Boşluğu ödemeye hiç gerek yokmuş; bir kademe tolerans yetti.

    ⚠️ DONDURMA KÜMESİ OSMANLI'YI DA İÇERMELİ. İlk ölçümde yalnız yabancı
    devletlere baktım; Avusturya-Osmanlı sınırındaki köşe tek yabancı
    devlette göründüğü için donmuyordu ve Macaristan-Erdel-Kafkasya hattında
    boşluk açacaktı. Osmanlı gövdesi eklenince +16.091 köşe donuyor,
    bedeli 0,18 MB — kazancın %0,7'si.
    ⚠️ VE ÖRTÜŞME ZAMANLIDIR: "iki devlette geçen köşe" ölçütü %87 donduruyor
    ve YANLIŞ — aynı kıyıyı 1600'de A, 1700'de B kullanıyor, onlar hiç komşu
    olmuyor. Zaman örtüşmesi eklenince %13,5'e iniyor; ayrım yapılmazsa
    kazanç 27 MB yerine 4 MB olur.
    """
    from shapely.geometry import LineString as _LS
    yeni_halka, esle = [], {}
    for _hi, r in enumerate(halka_hav):
        cs, run = [], []
        for q in r:
            if tuple(q) in don_kose:
                if len(run) > 2:
                    cs.extend([list(x) for x in
                               _LS(run).simplify(tol, preserve_topology=False).coords][:-1])
                elif run:
                    cs.extend(run[:-1])
                run = []
                cs.append(q)
            else:
                if not run and cs:
                    run = [cs.pop()]
                run.append(q)
        if len(run) > 2:
            cs.extend([list(x) for x in
                       _LS(run).simplify(tol, preserve_topology=False).coords])
        else:
            cs.extend(run)
        if len(cs) >= 3 and cs[0] != cs[-1]:
            cs.append(list(cs[0]))
        cs = [[round(x, 3), round(y, 3)] for x, y in cs]
        # ardışık tekrar yeniden doğabilir (D ile aynı ölçüt)
        t2 = []
        for q in cs:
            if not t2 or q != t2[-1]:
                t2.append(q)
        if len(t2) >= 3 and t2[0] != t2[-1]:
            t2.append(list(t2[0]))
        esle[_hi] = len(yeni_halka)
        yeni_halka.append(t2 if len(t2) >= 4 else r)   # bozulduysa aslını koru
    for ks in parca_hav:
        for i2 in range(len(ks)):
            ks[i2] = esle[ks[i2]]
    return yeni_halka


def don_kose_kur(*kaynaklar):
    """Aynı ANDA iki farklı sahibin sınırında geçen köşeler — donacak küme.
    kaynaklar: (halka_havuzu, parca_havuzu, [(sahip, f, t, [parça_ix...])]) üçlüleri.
    """
    kose = {}
    for halka_hav, parca_hav, refs in kaynaklar:
        for sahip, f, t, pix in refs:
            for pj in pix:
                for hj in parca_hav[pj]:
                    for q in set(map(tuple, halka_hav[hj])):
                        kose.setdefault(q, []).append((sahip, f, t))
    out = set()
    for q, rs in kose.items():
        if len(rs) < 2:
            continue
        rs.sort(key=lambda x: x[1])
        for i2 in range(len(rs)):
            si, fi, ti = rs[i2]
            for k2 in range(i2 + 1, len(rs)):
                sk, fk, _ = rs[k2]
                if fk >= ti:
                    break
                if sk != si:
                    out.add(q)
                    break
            if q in out:
                break
    return out


def havuza(mp, halka_hav, halka_ix, parca_hav, parca_ix):
    """İKİ KADEMELİ HAVUZ — YUK-SARTNAME.md · C.

    Eskiden havuz PARÇA (halka listesi) tutuyordu; aynı halka farklı
    parçalarda tekrar tekrar yazılıyordu. Ölçüldü (canlı çıktı, 4 Ağustos):
        donemler.js           5.391 halkanın 2.717'si BİREBİR TEKRAR
        devletler_harita.js  22.042 halkanın 6.112'si BİREBİR TEKRAR
    Artık halkalar havuza girer, parça yalnız halka indeksleri taşır.

    🔴 KAZANÇ SIRAYA BAĞLI: ardışık tekrar nokta temizliği (D) ÖNCE
    yapılmazsa halkaların bir kısmı sırf tekrar noktalar yüzünden "farklı"
    görünür ve havuza giremez. Ölçüldü — C tek başına 5,15 MB, D'den sonra
    10,63 MB; sıranın kendisi 5,48 MB ediyor.

    ⚠️ SÖZLEŞME (ARAYÜZ 2 ile çivilendi, `js/app.js` parcaCoz):
        window.PARCALAR         + window.PARCA_HALKA
        window.DEVLET_PARCALAR  + window.DEVLET_PARCA_HALKA
    `parcaCoz` yeni biçim kararını DİZİ BAŞINA BİR KEZ verir ve delikte
    `throw` eder — sessiz bozuk geometri üretmez. Bu yüzden burada da
    kural "ya tam ya hiç": iki liste birlikte yazılır, yarısı yazılmaz.
    """
    out = []
    for parca in mp:
        ks = []
        for halka in parca:
            k = json.dumps(halka, separators=(",", ":"))
            j = halka_ix.get(k)
            if j is None:
                j = len(halka_hav); halka_hav.append(halka); halka_ix[k] = j
            ks.append(j)
        pk = json.dumps(ks, separators=(",", ":"))
        j = parca_ix.get(pk)
        if j is None:
            j = len(parca_hav); parca_hav.append(ks); parca_ix[pk] = j
        out.append(j)
    return out

def mp_koord(g):
    if g.is_empty: return []
    if isinstance(g, Polygon): g = MultiPolygon([g])
    out = []
    for p in g.geoms:
        # ⚠️ Eşik 0.008'di (~79 km²) ve GERÇEK ADALARI atıyordu: Patmos 34 km²,
        # Herke 28, Folegandros 32, Sömbeki 58, Kaşot 66… Emilmeyi önlemek için
        # eklenen ada noktalarının peteği üretiliyor ama çıktıya yazılmıyordu:
        # veri doğru, harita boş. Filtrenin amacı buffer(0)/intersection'dan
        # kalan sayısal kırıntıları atmak; onlar 1e-5 mertebesindedir.
        if p.area < 0.0002: continue      # ~2 km²
        halkalar = []
        for ring in [p.exterior] + list(p.interiors):
            # 🔴 ARDIŞIK AYNI NOKTA ELENİYOR — YUK-SARTNAME.md · D.
            # 3 ondalığa yuvarlama (~111 m) art arda gelen köşeleri BİRE
            # indiriyor ve dosyaya iki kez yazılıyordu: iki çıktıda 145.000
            # nokta (%3,5) bir öncekiyle birebir aynıydı, ~1,9 MB.
            # ⚠️ HALKANIN KAPANIŞI TEKRAR DEĞİLDİR: shapely halkayı ilk
            # noktayı sona ekleyerek kapatır (p0…pn,p0) ve o p0 SİLİNMEZ —
            # ölçüt "bir ÖNCEKİ noktayla aynı mı", "ilk noktayla aynı mı"
            # değil. Silinseydi halka açık kalır ve GeoJSON bozulurdu.
            cs = []
            for x, y in ring.coords:
                q = [round(x, 3), round(y, 3)]
                if not cs or q != cs[-1]:
                    cs.append(q)
            # Yuvarlama son köşeyi kapanış noktasına eşitlediyse kapanış
            # elenmiş olabilir; halka açık kalmasın.
            if len(cs) >= 3 and cs[0] != cs[-1]:
                cs.append(list(cs[0]))
            if len(cs) >= 4: halkalar.append(cs)
        if halkalar: out.append(halkalar)
    return out

# ---------------- Bölge (2. kademe merkez) toplu sınırları ----------------
# Kural 6: her k3/k4 yerleşim en yakın k1/k2 merkeze bağlıdır; merkez, üyelerinin
# peteklerini toplayan daha büyük bir bölge sınırına sahiptir → data/bolgeler.js
asama("Bölge sınırları (k1/k2 merkezleri)")
_uyeler = {}
for j, y in enumerate(YERLER):
    if not (y["d"] or y["v"]) or not y["k"]: continue
    # Geçişli çözüm (bkz. k12_merkez): eski hâli y["m"]'e TEK HOP bakıyordu ve
    # k:3 bir merkeze bağlı yerleşimler için k:3 adına bölge kaydı üretiyordu —
    # "k1/k2 merkez sınırları" diyen katmana k:3 bölge giriyordu. Artık zincir
    # k:2'ye kadar takip ediliyor; kapanmazsa yerleşim bölge katmanına girmez.
    mi = k12_merkez(j)
    if mi is None: continue
    _uyeler.setdefault(YERLER[mi]["ad"], []).append(j)
BOLGELER = []
for ad in sorted(_uyeler):
    mi = AD2IDX[ad]; my = YERLER[mi]
    bg = unary_union([PETEK_D[j] for j in _uyeler[ad]])
    bg = poligonal(delikleri_doldur(kapat(bg)).intersection(KARA))
    ara = my["d"] + my["v"]
    if not ara or bg.is_empty: continue
    BOLGELER.append({
        "ad": ad, "k": my["k"], "lat": my["lat"], "lon": my["lon"],
        "f": min(dn["f"] for dn in ara), "t": max(dn["t"] for dn in ara),
        "uy": [YERLER[j]["ad"] for j in _uyeler[ad] if j != mi],
        "g": mp_koord(bg)})
_byol = os.path.join(KOK, "data", "bolgeler.js")
_bj  = "// Otomatik üretildi — elle düzenlemeyin. Betik: arac/uret_petek.py\n"
_bj += "// k1/k2 merkezlerin toplu bölge sınırları (üye peteklerinin birleşimi).\n"
_bj += "// f/t: merkezin Osmanlı aralığı — çizgi haritada yalnız bu aralıkta görünür.\n"
_bj += "window.BOLGELER = " + json.dumps(BOLGELER, ensure_ascii=False, separators=(",",":")) + ";\n"
# İz donemler.js'inkiyle AYNI kaynaktan: koşu BAŞINDA alınan _GIRDI_IZI.
# (İş G, 2 Ağustos: 7 üretilen çıktının 6'sında iz yoktu — denetle_yayin
#  tazeliği yalnız donemler.js için ölçebiliyordu, gerisi kör noktaydı.)
_bj += ("window.URETIM_IZI = "
        + json.dumps({"girdi": _GIRDI_IZI, "motor": _MOTOR_IZI},
                     separators=(",", ":"), sort_keys=True) + ";\n")
_muhru_dogrula("data/bolgeler.js")
girdi.izi_dogrula(_GIRDI_IZI, "data/bolgeler.js")
open(_byol, "w", encoding="utf-8").write(_bj)
print(f"  {len(BOLGELER)} bölge → data/bolgeler.js ({os.path.getsize(_byol)//1024} KB)")

# ---------------- Yabancı devlet gövdeleri ----------------
# Her boya kimliği için: o kimliğe s dönemi olan hücrelerden, Osmanlı d/v'nin
# AKTİF OLMADIĞI aralıklarda birleşik gövde üretilir → data/devletler_harita.js
# 🔴 ÇIKTI KIYASININ İKİNCİ EKSENİ — ölçüldüğü için eklendi, tahminle değil.
# `URETIM_OLCU` ilk yazıldığında YALNIZ Osmanlı `ao`/`av` ölçüyordu. Koşu 5'te
# sınandı ve kör noktası KANITLANDI: o koşuda iki büyük yapısal değişiklik
# vardı — yetim emilim ölçütü (78.368 km² yer değiştirdi) ve `iran`ın üçe
# bölünmesi (123 kayıt) — ve kıyas İKİSİNİ DE GÖREMEDİ, "2/9 kesit, %0,0"
# dedi. Sebep tek: değişikliklerin ~%98'i YABANCI gövdelerde, kıyas ise
# Osmanlı eksenini ölçüyordu.
# 📌 Genel kural (koordinatör, 3 Ağustos): *bir denetim, ölçtüğü eksenin
#    dışında hiçbir şey söylemez — ve o eksen künyesine yazılmazsa okuyan
#    onu "her şey" sanar.* Bu yüzden aşağıda yalnız sayı değil KAPSAM da
#    künyeye yazılıyor.
# ⚠️ Alan YALNIZ kesit tarihlerini kapsayan dönemler için hesaplanıyor:
#    1.966 gövdenin tamamına `alan_km2` koşturmak ~20 sn tutardı, oysa
#    dokuz kesit için birkaç yüz hesap yetiyor.
OLCU_KESIT = ["1300-06-15", "1400-06-15", "1453-05-29", "1500-06-15",
              "1517-07-06", "1600-06-15", "1700-06-15", "1800-06-15",
              "1900-06-15"]
# 🔴 Künye alanları SEYRELTMEDEN SONRA hesaplanır (aşağıda, _yabanci_g).
# Koşu sırasında toplanan bir liste YOK: seyreltme geometriyi değiştiriyor
# ve künye YAYINLANAN çıktıyı ölçmeli, ondan öncekini değil.


# 🔴 ESKİ ÇIKTIDAN TABAN — ve NİÇİN TAM BURADA.
# Kıyas aşaması koşunun SONUNDA çalışıyor, oysa `devletler_harita.js` bu
# bloğun sonunda ÜZERİNE YAZILIYOR. Yani taban orada aranırsa YENİ dosya
# okunur ve kıyas kendini kendiyle karşılaştırır — sessizce "fark yok" der.
# Bu yüzden eski dosya, üzerine yazılmadan ÖNCE burada okunuyor.
# ⚠️ Yalnız bir kez ödenir: önceki künyede `yabanci` varsa 40 MB hiç açılmaz.
def _eski_yabanci_taban():
    _dy = os.path.join(KOK, "data", "donemler.js")
    if os.path.exists(_dy):
        try:
            _e = io.open(_dy, encoding="utf-8").read()
            _i = _e.find("window.URETIM_OLCU = ")
            if _i >= 0:
                _o = json.loads(_e[_i + 21:_e.find(";\n", _i)])
                if _o.get("yabanci"):
                    return None          # künyede zaten var, türetmeye gerek yok
        except Exception:
            pass
    _dh = os.path.join(KOK, "data", "devletler_harita.js")
    if not os.path.exists(_dh):
        return None
    _t0 = time.time()
    try:
        _s = io.open(_dh, encoding="utf-8").read()

        def _al(ad):
            _a = "window." + ad + " = "
            _i = _s.find(_a)
            return json.loads(_s[_i + len(_a):_s.find(";\n", _i)]) if _i >= 0 else None

        _hav, _dev = _al("DEVLET_PARCALAR"), _al("DEVLET_HARITA")
        if _hav is None or _dev is None:
            return None
    except Exception as _e2:
        print(f"  eski yabancı taban okunamadı: {_e2}")
        return None
    _pa = {}

    def _parca_km2(j):
        if j in _pa: return _pa[j]
        T = 0.0
        for _r, _sg in [(_hav[j][0], 1)] + [(h, -1) for h in _hav[j][1:]]:
            _s2 = 0.0
            for _k in range(len(_r) - 1):
                lo1, la1 = math.radians(_r[_k][0]), math.radians(_r[_k][1])
                lo2, la2 = math.radians(_r[_k+1][0]), math.radians(_r[_k+1][1])
                _s2 += (lo2 - lo1) * (2 + math.sin(la1) + math.sin(la2))
            T += _sg * abs(_s2 * R_DUNYA * R_DUNYA / 2)
        _pa[j] = T
        return T

    _out = {}
    for _g in OLCU_KESIT:
        _tp = 0
        for _d in _dev:
            for _p in _d["dnm"]:
                if _p["f"] <= _g < _p["t"]:
                    # alan_km2 ile AYNI: gövde başına yuvarla, sonra topla
                    _tp += int(round(sum(_parca_km2(j) for j in _p["g"]), -3))
                    break
        _out[_g] = _tp
    print(f"  eski yabancı taban türetildi ({time.time()-_t0:.0f}sn, "
          f"{len(_dev)} devlet · {len(_hav)} parça) — kıyas ilk koşuda çalışacak")
    return _out


_ESKI_YABANCI = _eski_yabanci_taban()

asama("Yabancı devlet gövdeleri")
def _osm_aktif(y, a):
    return (any(dn["f"] <= a < dn["t"] for dn in y["d"]) or
            any(dn["f"] <= a < dn["t"] for dn in y["v"]))
DEVLET_KAYIT = []
DEV_HALKA, DEV_HALKA_IX = [], {}   # → window.DEVLET_PARCALAR (halka havuzu)
DEV_PARCA, DEV_PARCA_IX = [], {}   # → window.DEVLET_PARCA_HALKA (parça→halka)
# ⚠️ BU BLOK 3 SAAT 42 DAKİKA BOYUNCA TEK SATIR BASMIYORDU (r-öncesi koşu,
# 01:56 → 05:38). Log sessiz kalınca "takıldı mı, ilerliyor mu" sorusunun
# cevabı yoktu ve üç oturum boş yere bekledi. İlerleme satırı bu yüzden var.
#
# ---- ETA AĞIRLIĞI (yalnız `ilerleme()` için — ÇIKTIYA GİRMEZ) ----
# 🔴 NİÇİN: doğrusal tahmin bu döngüde 3 kat yanıldı ve bir yayın saatinin
# yanlış duyurulmasına ramak kaldı (bkz. ilerleme() başlığı). Ağırlık, o
# devletin kuracağı HÜCRE-BİRLEŞİMİ sayısıdır — süreyi açıklayan değişkenin
# bu olduğu 23 kontrol noktasıyla ölçüldü: hücre R²=0,96 · gövde R²=0,51.
#
# ⚠️ BU BLOK AŞAĞIDAKİ DÖNGÜNÜN SET MANTIĞINI TEKRARLIYOR ve bu bilinçli bir
# ödün. Döngüyü ikiye bölüp (önce plan, sonra geometri) tekrarı kaldırmak
# denendi ve BIRAKILDI: dönem birleştirme ölçütü `aktif == onceki and dnm`,
# yani set mantığı GEOMETRİ SONUCUNA bağlı (`dnm` yalnız gövde boş çıkmayınca
# büyüyor). Ayırmak çıktıyı değiştirebilirdi; "hiçbir çıktı değişmemeli"
# kuralı tekrarı kabul etmekten daha ağır bastı.
# 📌 ARIZA BİÇİMİ ZARARSIZ: bu blok ana döngüden saparsa TAHMİN bozulur,
#    ÇIKTI bozulmaz — burada üretilen tek şey bir yüzde.
# 📌 `devir_kumesi()` KASTEN çağrılmıyor: ağırlığın mutlak doğruluğu değil
#    ORANI önemli, ve onu çağırmak "aşamanın maliyetini ölçmek için aşamayı
#    koşturmak" olurdu.
_DV_KUM = [0]
for _wdid in BOYALAR:
    _whj = [j for j, y in enumerate(YERLER) if any(sp["d"] == _wdid for sp in y["s"])]
    _w = 0
    if _whj:
        _wts = set()
        for _wj in _whj:
            for _wsp in YERLER[_wj]["s"]:
                if _wsp["d"] == _wdid:
                    _wts.add(_wsp["f"]); _wts.add(_wsp["t"])
            for _wdn in YERLER[_wj]["d"] + YERLER[_wj]["v"]:
                _wts.add(_wdn["f"]); _wts.add(_wdn["t"])
        _wts = sorted(t for t in _wts if EPOK <= t <= "1923-11-01")
        if _wts:
            if _wts[0] != EPOK: _wts.insert(0, EPOK)
            _wonce = None
            for _wk in range(len(_wts) - 1):
                _wa = _wts[_wk]
                _wak = frozenset(
                    j for j in _whj
                    if any(sp["d"] == _wdid and sp["f"] <= _wa < sp["t"]
                           for sp in YERLER[j]["s"])
                    and not _osm_aktif(YERLER[j], _wa))
                if _wak == _wonce and _w and _wak: continue
                _wonce = _wak
                if not _wak: continue
                _w += len(_wak)
    _DV_KUM.append(_DV_KUM[-1] + _w)
print(f"  ETA ağırlığı hazır: {_DV_KUM[-1]:,} hücre-birleşimi bekleniyor")

for _dv_i, (did, (dad, renk)) in enumerate(BOYALAR.items(), 1):
    ilerleme(_dv_i, len(BOYALAR), 10, "devlet", _DV_KUM)
    hj = [j for j, y in enumerate(YERLER) if any(sp["d"] == did for sp in y["s"])]
    if not hj: continue
    ts = set()
    for j in hj:
        for sp in YERLER[j]["s"]:
            if sp["d"] == did: ts.add(sp["f"]); ts.add(sp["t"])
        for dn in YERLER[j]["d"] + YERLER[j]["v"]:
            ts.add(dn["f"]); ts.add(dn["t"])
    ts = sorted(t for t in ts if EPOK <= t <= "1923-11-01")
    if not ts: continue
    if ts[0] != EPOK: ts.insert(0, EPOK)
    if ts[-1] != "1923-11-01": ts.append("1923-11-01")
    dnm = []; onceki = None
    for i in range(len(ts) - 1):
        a, b = ts[i], ts[i+1]
        # kur:/bit: — henüz kurulmamış (ya da yok olmuş) nokta o tarihte devletin
        # gövdesine KATILMAZ; peteği de petek_epok() ile komşusuna devredilmiştir.
        _dv = devir_kumesi(a)
        aktif = frozenset(j for j in hj
                          if j not in _dv
                          and any(sp["d"] == did and sp["f"] <= a < sp["t"]
                                  for sp in YERLER[j]["s"])
                          and not _osm_aktif(YERLER[j], a))
        if aktif == onceki and dnm and aktif:
            dnm[-1]["t"] = b; continue
        onceki = aktif
        if not aktif: continue
        _t_gv = time.time()
        g = unary_union([petek_epok(a)[j] for j in aktif])
        g = delikleri_doldur(kapat(g))
        # Sadeleştirme örtü üzerinde ÖNCEDEN yapıldı (coverage_simplify); gövde
        # başına simplify ve "tolerans/2 dışa taşırma" hilesi kaldırıldı — komşu
        # devletlerin paylaştığı kenar artık birebir aynı koordinatlardan geçer,
        # kılcal boşluk da bindirme de üretilmez. Kıyı EN SON kesilir: deniz
        # sınırı doğrudan KARA maskesinden gelir, girinti-çıkıntıya birebir oturur.
        g = poligonal(g.intersection(KARA))
        if g.is_empty:
            sayac("yabancı gövde geometrisi", time.time() - _t_gv)
            continue
        rp = g.representative_point()
        _kayit = {"f": a, "t": b,
                  "g": havuza(mp_koord(g), DEV_HALKA, DEV_HALKA_IX,
                              DEV_PARCA, DEV_PARCA_IX),
                  "c": [round(rp.x, 2), round(rp.y, 2)]}
        dnm.append(_kayit)
        # 🔴 KAYDIN KENDİSİ TUTULUR, KOPYASI DEĞİL — ve sebebi ölçüldü.
        # İlk yazımda `(a, b, alan)` üçlüsü saklanıyordu. Ama bu döngü
        # dönemleri BİRLEŞTİRİYOR: `aktif == onceki` olunca `dnm[-1]["t"] = b`
        # ile bir önceki kaydın bitişi UZATILIYOR. Kopyalanmış `b` o uzamayı
        # görmüyordu, dolayısıyla uzatılmış bir dönem kesit tarihini kapsasa
        # bile toplama girmiyordu → yabancı toplam SİSTEMATİK EKSİK çıkıyordu.
        # Koşu 6 bunu canlı gösterdi: eksen ilk kıyasında "-6.947.000 km²
        # (-%14,5)" diye BAĞIRDI ve sapmanın tamamı bu hataydı — yani aracın
        # ilk alarmı YANLIŞ ALARMDI. Kaydın kendisini tutunca `["t"]`
        # mutasyonu doğrudan görülüyor.
        # ⚠️ Bu yüzden alan artık HER gövde için hesaplanıyor: uzama sonradan
        # olduğu için "bu dönem kesiti kapsıyor mu" sorusu yaratılış anında
        # cevaplanamaz. Maliyet ~1.970 çağrı; ölçüp bildireceğim.
        sayac("yabancı gövde geometrisi", time.time() - _t_gv)
    if dnm: DEVLET_KAYIT.append({"id": did, "ad": dad, "renk": renk, "dnm": dnm})
# 🔴 `devletler_harita.js` YAZIMI ERTELENDİ — B (seyreltme) yüzünden.
# Seyreltmenin dondurma kümesi OSMANLI sınırını da içermeli, ama Osmanlı
# gövdeleri aşağıdaki "Dönemler" döngüsünde kuruluyor. Dosya burada
# yazılsaydı seyreltilmemiş hâli yayınlanır, ya da Osmanlı sınırı
# korunmadan seyreltilirdi. Yazım, iki havuz da hazırken yapılıyor.
print(f"  {len(DEVLET_KAYIT)} devlet, "
      f"{sum(len(d['dnm']) for d in DEVLET_KAYIT)} dönem — "
      f"yazım seyreltmeden sonraya ertelendi")

asama("Dönemler kuruluyor (delta yapısı)")
# İki katman:
#   DOĞRUDAN (o)  : merkezden yönetilen toprak — koyu kırmızı
#   TÂBİ     (v)  : hâkimiyetin dolaylı olduğu toprak (muhtar valilik, tâbi
#                   beylik, fiilî işgal) — bir ton açık. Bir yerleşim aynı anda
#                   iki listede de görünüyorsa TÂBİ kazanır; çünkü "v" doğrudan
#                   idarenin askıya alındığı aralığı bildirir (ör. Suriye
#                   1832-1841 Kavalalı İbrâhim Paşa'nın elinde).
donemler = []
OSM_HALKA, OSM_HALKA_IX = [], {}   # → window.PARCALAR (halka havuzu)
OSM_PARCA, OSM_PARCA_IX = [], {}   # → window.PARCA_HALKA (parça→halka)
SRB_HAVUZ, SRB_IX = [], {}   # serbest kenar hatları (sahipli ↔ sahipsiz sınırı)
SRB_U = []                   # havuza PARALEL: her hattın belirsizliği (km)
onceki_aktif = None      # işaret/marker için: doğrudan + tâbi hepsi
onceki_anahtar = None    # geometri için: (doğrudan, tâbi) ikilisi
# ETA ağırlığı — yukarıdaki gerekçenin aynısı, ama burada tekrar YOK: bu
# döngüde iş, o tarihte aktif olan petek sayısıdır ve iki satırla çıkar.
# Osmanlı toprağı 1281'den 1683'e büyüdüğü için iş SONA yığılı; doğrusal
# tahmin burada tersine, olduğundan KISA gösteriyordu.
_DN_KUM = [0]
for _i in range(len(tarihler) - 1):
    _a = tarihler[_i]
    _wt = set(j for j, y in enumerate(YERLER)
              if any(dn["f"] <= _a < dn["t"] for dn in y["v"]))
    _wd = set(j for j, y in enumerate(YERLER)
              if any(dn["f"] <= _a < dn["t"] for dn in y["d"])) - _wt
    _DN_KUM.append(_DN_KUM[-1] + len(_wd) + len(_wt))

for i in range(len(tarihler) - 1):
    ilerleme(i + 1, len(tarihler) - 1, 50, "kırılma", _DN_KUM)
    a, b = tarihler[i], tarihler[i+1]
    # kur:/bit: — kurulmamış nokta Osmanlı gövdesine de katılmaz. Örnek:
    # St. Petersburg'un s: alanı 1281'den rusya diyor ve kur:1703; Kesela'nın
    # d: penceresi kur: gününde başlıyor. Devredilen petekler petek_epok()
    # içinde komşularına geçtiği için toprak kaybolmaz, yalnız yer değiştirir.
    _dv = devir_kumesi(a)
    _pe = petek_epok(a)
    tabi = frozenset(j for j, y in enumerate(YERLER)
                     if j not in _dv
                     and any(dn["f"] <= a < dn["t"] for dn in y["v"]))
    dogrudan = frozenset(j for j, y in enumerate(YERLER)
                         if j not in _dv
                         and any(dn["f"] <= a < dn["t"] for dn in y["d"])) - tabi
    aktif = dogrudan | tabi
    if not aktif:
        continue
    anahtar = (dogrudan, tabi)
    if anahtar == onceki_anahtar and donemler:  # hiçbir şey değişmediyse dönemi uzat
        donemler[-1]["t"] = b
        continue

    giren = [YERLER[j]["ad"] for j, y in enumerate(YERLER)
             if any(dn["f"] == a for dn in y["d"] + y["v"])]
    cikan = [YERLER[j]["ad"] for j, y in enumerate(YERLER)
             if any(dn["t"] == a for dn in y["d"] + y["v"])]
    if giren:   ad = "Katılım: " + ", ".join(giren[:3]) + ("…" if len(giren) > 3 else "")
    elif cikan: ad = "Kayıp: " + ", ".join(cikan[:3]) + ("…" if len(cikan) > 3 else "")
    else:       ad = donemler[-1]["ad"] if donemler else "—"

    _t_ov = time.time()
    gt = None
    if tabi:
        gt = poligonal(delikleri_doldur(kapat(unary_union([_pe[j] for j in tabi]))).intersection(KARA))
    g = poligonal(delikleri_doldur(kapat(unary_union([_pe[j] for j in dogrudan]))).intersection(KARA))
    # Tâbi bölge doğrudan gövdenin içinden çıkarılır; yoksa delik doldurma
    # Suriye'yi/Mısır'ı yutar ve iki katman üst üste biner.
    if gt is not None and not gt.is_empty:
        g = poligonal(g.difference(gt))
    kaplam = unary_union([g, gt]) if gt is not None else g
    x0, y0, x1, y1 = kaplam.bounds
    # Geometri gönderilmez; yalnızca aktif petek indeksleri (delta) ve özetler.
    ekle = sorted(aktif - onceki_aktif) if onceki_aktif else sorted(aktif)
    cik  = sorted(onceki_aktif - aktif) if onceki_aktif else []
    # Birleşik dış hat: petekler tek gövde olarak çizilir, aradaki petek
    # sınırları görünmez. Kesim sonrası simplify YOK — hem kıyı oturması hem
    # yabancı komşularla ortak kenar bozulurdu (eski 0.022/0.03 buradaydı).
    kayit = {"f": a, "t": b, "ad": ad,
             "b": [round(x0,2), round(y0,2), round(x1,2), round(y1,2)],
             "ao": alan_km2(g), "e": ekle, "c": cik,
             "o": havuza(mp_koord(g), OSM_HALKA, OSM_HALKA_IX,
                          OSM_PARCA, OSM_PARCA_IX)}
    if gt is not None and not gt.is_empty:
        kayit["av"] = alan_km2(gt)
        kayit["v"]  = havuza(mp_koord(gt), OSM_HALKA, OSM_HALKA_IX,
                                       OSM_PARCA, OSM_PARCA_IX)
    # Serbest kenar: gövdenin sahipsiz alana bakan yüzü. Boşsa alan hiç yazılmaz
    # (çoğu dönemde çölle sınırdaş olunmuyor — kuruluş devri gibi).
    sayac("Osmanlı gövde geometrisi", time.time() - _t_ov)
    _t_sb = time.time()
    _sb = hat_havuza(hat_koord(serbest_kenar(a, kaplam, _pe)))
    sayac("serbest kenar (sahipsiz sınır)", time.time() - _t_sb)
    if _sb:
        kayit["sb"] = _sb
    donemler.append(kayit)
    onceki_aktif = aktif
    onceki_anahtar = anahtar

# 🔴 MUAFİYET RAPORU — SESSİZ ATLAMA YOK.
# `delikleri_doldur`ın ÜÇ çağrı yeri var ve üçü de bu satırdan ÖNCE koşar;
# rapor bu yüzden buraya kondu:
#     :2511  bölge (k1/k2 idarî) sınırı  → data/bolgeler.js
#     :2717  yabancı devlet gövdesi      → data/devletler_harita.js
#     :2820  Osmanlı doğrudan + tâbi     → data/donemler.js
# ⚠️ Üçüncüsünü ilk taramada KAÇIRMIŞTIM (`:2511`) — `grep` ile değil GÖZLE
#    saymıştım. Muafiyet oraya da uygulanıyor ve doğrusu bu: kasten boş
#    bırakılmış bir çöl cebi, bir sancağın sınırı içinde de yutulmamalı.
# ⚠️ "Hiçbiri atlanmadı" satırı da BASILIR. Boş kovayı basmamak, muafiyetin
# hiç çalışmadığı hâl ile hiç gerekmediği hâli birbirinden ayırt edilemez
# kılardı — `§11`in "ölçülemedi ≠ temiz" kuralının bu fonksiyondaki yüzü.
if _KB_MUAF:
    print(f"  delik doldurma muafiyeti: {len(_KB_MUAF)} kasıtlı boşluk noktası, "
          f"{sum(_KB_MUAF.values())} halka DOLDURULMADI")
    for _mad, _mn in sorted(_KB_MUAF.items(), key=lambda x: (-x[1], x[0])):
        print(f"     {_mad:<34} {_mn} halka")
    print("     ⚠️ BEKLENEN 0 İDİ — yeni bir kasıtlı boşluk kuşatılmış olabilir, "
          "İNCELE (ölçüm 11 Ağu 2026: 7 kesitin 7'sinde de 0)")
else:
    print("  delik doldurma muafiyeti: 0 halka atlandı "
          "— BEKLENEN BU (ölçüldü 11 Ağu 2026, 7 kesitin 7'sinde 0)")

# Petek geometrileri bir kez yazılır; dönemler yalnızca indeks tutar (21 MB → ~4 MB)
# Petek geometrileri artık gönderilmiyor; birleşik dış gövde yeterli (boyut)
petekler = [{"a": YERLER[j]["ad"]} for j in range(len(YERLER))]

js  = "// Otomatik üretildi — elle düzenlemeyin. Betik: arac/uret_petek.py\n"
js += "// PETEK (Voronoi) tabanlı: her yerleşimin bölgesi kıyı ve nehir yataklarına yaslı.\n"
js += "// PETEKLER bir kez tanımlanır; DONEMLER yalnızca eklenen/çıkan petek indekslerini tutar.\n"
js += "// DONEMLER'in o/v alanları PARCALAR havuzuna indekstir (js/app.js çözer).\n"
js += "// SERBEST: sahipli ↔ SAHİPSİZ sınırı. Bu kenar KESKİN ÇİZİLMEMELİDİR —\n"
js += "// iki devlet arasındaki sınır değil, devlet ile boş alan arasındaki\n"
js += "// artefakttır (bkz. uret_petek.py, SERBEST KENAR bloğu). DONEMLER[].sb\n"
js += "// bu havuza indekstir; js/app.js line-blur ile dışa doğru söndürür.\n"
js += "window.SERBEST = " + json.dumps(SRB_HAVUZ, separators=(",",":")) + ";\n"
# ⚠️ SERBEST_U — havuza PARALEL belirsizlik (km). Kalınlık BURADAN gelir, sabit
# çıpadan değil: dağılım geniş (Anadolu 23,4 km ↔ Arabistan 217,3 km, 9,3 kat).
# Bu satır bir koşuda EKSİK KALDI ve çıktı sessizce belirsizliksiz üretildi —
# SRB_U hesaplanıyordu, log'a dağılımı bile basıyordu, yalnız dosyaya yazılmıyordu.
# Katman `coalesce(get(u), 60)` ile 60 km'ye düşüp çalışmaya devam ettiği için
# hata GÖRÜNMEDİ. İki satır yan yana durmalı ki bir daha ayrılmasınlar.
js += "window.SERBEST_U = " + json.dumps(SRB_U, separators=(",",":")) + ";\n"
js += "window.PETEKLER = " + json.dumps(petekler, separators=(",",":")) + ";\n"
js += ("window.PARCALAR = "
       + json.dumps(OSM_HALKA, separators=(",", ":")) + ";\n")
js += ("window.PARCA_HALKA = "
       + json.dumps(OSM_PARCA, separators=(",", ":")) + ";\n")
js += "window.DONEMLER = " + json.dumps(donemler, separators=(",",":")) + ";\n"

# ---------------- PER-PETEK GÖVDE — AYRI DOSYA ----------------
# İşgal örtüsü üreticisi (`uret_devirler.py`) "şu 55 yerleşimin hücrelerinin
# birleşimi"ni istiyor ve bunu bugünkü çıktıdan çıkaramıyor: `PETEKLER` yalnız
# ad taşıyor, `DONEMLER.e/c` delta, `DONEMLER.o/v` ise BİRLEŞTİRİLMİŞ gövde.
#
# ⚠️ `PARCALAR`a indeks verilemez — o havuzda yalnız birleşik gövdeler var,
# per-petek parçalar hiç girmiyor. Bu yüzden kendi havuzu yazılıyor.
# Ölçüldü: 951 petek → 2.166 eşsiz parça, 1,4 MB.
#
# 🔴 NEDEN AYRI DOSYA: `donemler.js`i `index.html:149` yüklüyor, yani 1,4 MB'ı
# HER ZİYARETÇİ indirirdi — oysa bu veriyi yalnız üretim betiği kullanıyor.
# Sitenin yükü zaten 24,5 MB; tarayıcının hiç açmayacağı veriyi oraya koymak
# saf israf. Bu dosya `index.html`e EKLENMEZ.
#
# ⚠️ ZAMANSIZ — ve bu sessizce yanıltabilir. Petek geometrisi `petek_epok()`
# ile değişebiliyor (`kur:`/`bit:` devirleri); buradaki TABAN geometridir.
# Bugünkü tüketici için doğru: en geç `kur:` 1869-01-01, `isg:` aralıkları
# 1878'den başlıyor, yani o tarihlerde bütün noktalar kurulmuş. Ama 1869
# ÖNCESİNE uzanan bir örtü istenirse bu dosya yanlış cevap verir ve uyarmaz.
# ---------------- B · UZAK COĞRAFYA SEYRELTME ----------------
# Bkz. seyrelt() başlığı: ölçüm, elenen yollar ve dondurma ölçütü orada.
# ⚠️ YALNIZ YABANCI HAVUZ. Osmanlı havuzu (`PARCALAR`) ELLENMİYOR — kademe
# 4-5 (Söğüt-Bursa çekirdeği, Osmanlı gövdesi, 1923 Türkiye) dokunulmaz.
SEYRELT_TOL = 0.03          # ≈3,3 km — ölçülmüş kırılma noktası
asama("Uzak coğrafya seyreltme (yabancı havuz)")
_don = don_kose_kur(
    (DEV_HALKA, DEV_PARCA, [(d["id"], p["f"], p["t"], p["g"])
                            for d in DEVLET_KAYIT for p in d["dnm"]]),
    (OSM_HALKA, OSM_PARCA, [("__OSMANLI__", r["f"], r["t"],
                             (r.get("o") or []) + (r.get("v") or []))
                            for r in donemler]))
_k0 = sum(len(h) for h in DEV_HALKA)
DEV_HALKA = seyrelt(DEV_HALKA, DEV_PARCA, DEVLET_KAYIT, _don, SEYRELT_TOL)
_k1 = sum(len(h) for h in DEV_HALKA)
print(f"  dondurulan köşe {len(_don):,} · yabancı havuz köşe "
      f"{_k0:,} → {_k1:,} (%{_k1/_k0*100:.0f}) · boşluk 0 (yapısal)")

_dyol = os.path.join(KOK, "data", "devletler_harita.js")
_dj  = "// Otomatik üretildi — elle düzenlemeyin. Betik: arac/uret_petek.py\n"
_dj += "// Yabancı devletlerin dönem gövdeleri (yerlesimler.js s alanından).\n"
_dj += "// dnm[].g, DEVLET_PARCALAR havuzuna indekstir (js/app.js çözer).\n"
_dj += ("window.DEVLET_PARCALAR = "
        + json.dumps(DEV_HALKA, separators=(",", ":")) + ";\n")
_dj += ("window.DEVLET_PARCA_HALKA = "
        + json.dumps(DEV_PARCA, separators=(",", ":")) + ";\n")
_dj += "window.DEVLET_HARITA = " + json.dumps(DEVLET_KAYIT, ensure_ascii=False, separators=(",",":")) + ";\n"
_dj += ("window.URETIM_IZI = "
        + json.dumps({"girdi": _GIRDI_IZI, "motor": _MOTOR_IZI},
                     separators=(",", ":"), sort_keys=True) + ";\n")
_muhru_dogrula("data/devletler_harita.js")
girdi.izi_dogrula(_GIRDI_IZI, "data/devletler_harita.js")
open(_dyol, "w", encoding="utf-8").write(_dj)
print(f"  {len(DEVLET_KAYIT)} devlet, {sum(len(d['dnm']) for d in DEVLET_KAYIT)} dönem → "
      f"data/devletler_harita.js ({os.path.getsize(_dyol)//1024} KB)")

# ---------------- Dönemleri kur ----------------

asama("Çıktı yazımı (petek_govde.js + donemler.js)")
_pg_havuz, _pg_ix, _pg_indeks = [], {}, []
for _i, _g in enumerate(PETEK_D):
    _ks = []
    for _par in mp_koord(_g):
        _k = json.dumps(_par, separators=(",", ":"))
        _j = _pg_ix.get(_k)
        if _j is None:
            _j = len(_pg_havuz); _pg_havuz.append(_par); _pg_ix[_k] = _j
        _ks.append(_j)
    _pg_indeks.append(_ks)
_pgyol = os.path.join(KOK, "data", "petek_govde.js")
_pg = ("// Otomatik üretildi — elle düzenlemeyin. Betik: arac/uret_petek.py\n"
       "// ⚠️ index.html BU DOSYAYI YÜKLEMEZ. Yalnız üretim betikleri okur\n"
       "//    (uret_devirler.py). Tarayıcıya 1,4 MB fazladan yük binmesin diye\n"
       "//    donemler.js'e KONMADI.\n"
       "// ⚠️ ZAMANSIZ: taban geometri. kur:/bit: devirlerini TAŞIMAZ; 1869\n"
       "//    öncesine uzanan sorularda yanlış cevap verir ve UYARMAZ.\n"
       "// PETEK_GOVDE[i] → PETEK_GOVDE_PARCA havuzuna indeksler.\n"
       "// Sıra PETEKLER (donemler.js) ile AYNIDIR.\n")
_pg += ("window.PETEK_GOVDE_PARCA = "
        + json.dumps(_pg_havuz, separators=(",", ":")) + ";\n")
_pg += ("window.PETEK_GOVDE = "
        + json.dumps(_pg_indeks, separators=(",", ":")) + ";\n")
_pg += ("window.URETIM_IZI = "
        + json.dumps({"girdi": _GIRDI_IZI, "motor": _MOTOR_IZI},
                     separators=(",", ":"), sort_keys=True) + ";\n")
girdi.izi_dogrula(_GIRDI_IZI, "data/petek_govde.js")
io.open(_pgyol, "w", encoding="utf-8").write(_pg)
print(f"Per-petek gövde → data/petek_govde.js "
      f"({os.path.getsize(_pgyol)//1024} KB, {len(_pg_havuz)} eşsiz parça) "
      f"— index.html YÜKLEMEZ")
# ⚠️ ÜRETİM İZİ — çıktının kendi künyesi. İki ayrı soruyu cevaplar:
#   girdi: bu harita hangi VERİDEN üretildi → "yayın bayat mı"
#   motor: hangi KODDAN üretildi            → "düzeltme bu çıktıda var mı"
# İkisi de 31 Temmuz'da SORULDU ve dosyadan cevaplanamadı. Yayın girdiden dokuz
# nokta geride kalmıştı ve sekiz denetimin hiçbiri fark etmemişti — hepsi
# çıktının kendi İÇ tutarlılığına bakıyor, hiçbiri GÜNCEL olup olmadığına.
# ⚠️ Ad kümesi karşılaştırması bu işi göremez: yerleşim TAŞINIRSA ya da
# `d:`/`v:`/`s:` değişirse ad kümesi aynı kalır, ölçüt "temiz" der, harita
# bayattır. sha256 üçünü birden yakalar.
# 📌 `_GIRDI_IZI` koşunun BAŞINDA alınmıştır (motorun okuduğu hâl), sona değil;
# aksi hâlde koşu ortasında değişen bir girdi kendi izini damgalar ve damga
# yalanı doğrular.
js += ("window.URETIM_IZI = "
       + json.dumps({"girdi": _GIRDI_IZI, "motor": _MOTOR_IZI},
                    separators=(",", ":"), sort_keys=True) + ";\n")
# VERI_SINIRI — arayüzün "Veri sınırı" düğmesinin TEK otoritesi (İş S1,
# koordinatör onayı 2 Ağustos). app.js:594'teki elle kopya bu satırdan
# beslenecek (`window.VERI_SINIRI || yedek`): kutu değişince çizgi otomatik
# izler, kimse elle güncellemez. Değer ELLE YAZILMAZ — BOLGE'den türetilir
# (bugün üç elle kopya temizlendi; dördüncüsü burada açılmasın).
# ⚠️ ARTIK EKSİK BİR ÖLÇÜ — kutu L oldu, bu satır hâlâ DİKDÖRTGEN veriyor.
# `js/app.js:688` (`veriSiniriKur`) dört sayıdan bir dikdörtgen çiziyor;
# L'nin çentiği (güneybatı: −25..−12 D / −11..60 K) o dikdörtgenin İÇİNDE
# görünür ama kapsama DAHİL DEĞİL. Yani "Veri sınırı" düğmesi açılırsa
# kapsanmayan bir alanı kapsanmış gibi gösterir.
# 🔴 Bugünkü ders serisinin aynısı: ölçü, ölçtüğü şeyin şeklini kaybetti.
# Katman varsayılan olarak KAPALI (`visibility: "none"`) olduğu için yayını
# engellemiyor; ama `app.js` bir çokgen kabul edecek şekilde güncellenmeli
# (ARAYÜZ'ün dosyası). O gün burası `BOLGE.exterior.coords` yazacak.
js += ("window.VERI_SINIRI = "
       + json.dumps(list(BOLGE.bounds)) + ";\n")
# ---------------- ÇIKTI KIYASI — "geçen koşuya göre ne oynadı" ----------------
# 🔴 NİÇİN VAR (3 Ağustos 2026, koordinatör şartnamesi). `donemler.js` bir
# koşuda 34.362 KB → 26.303 KB düştü (%24) ve bunu HİÇBİR DENETİM SORMADI:
# `denetle.py` yalnız girdiyi okur, `denetle_yayin.py` izin TAZE olduğunu
# doğrular, boyutun MAKUL olduğunu değil. Koordinatör elle yakaladı; bir
# sonraki koşuda gerçek bir kusur olsa yine kimse sormayacaktı.
#
# 🔴 VE NİÇİN EŞİK YOK. Bu depoda sabit eşikler ölçülüp sonra motor altından
# değişince çürüyor — `BOZUK_KIYI_TABAN = 32` (çöl tavanı eklenince
# anlamsızlaştı, her koşu ✗ bastı) ve `_KUS_BEKLENEN` 8 ad (veri 1.579
# noktaya çıktı, 44 "BEKLENMEDİK" üretti). *"%20'den fazla oynarsa uyar"*
# tipi bir ölçüt tam bu sınıftır: %24'lük o düşüş MEŞRUYDU, eşik ilk günden
# yanlış alarma dönerdi, ikinci koşuda susturulurdu, üçüncüde kimse bakmazdı.
# ⇒ Ölçüt her zaman "GEÇEN SEFERE GÖRE"dir; sabit sayı yoktur.
#
# 🔴 VE ASIL ÖLÇÜ BOYUT DEĞİL. Boyut yalnız bakmaya sevk eder; teşhisi
# TARİH KESİTİ verdi: *"1453'e kadar fark sıfır, 1517'de başlıyor"* — yani
# Osmanlı Mısır ve Arabistan'a girdiği an. Otomatikleşen şey teşhistir.
#
# ⚠️ BU BİR KAPI DEĞİL, TEŞHİSTİR: üretimi DURDURMAZ, hüküm VERMEZ.
# "Bu sapma meşru mu" sorusunun cevabı her seferinde insanda kalır —
# bugün olduğu gibi. Rapor eder, yorumlamaz.
def _halka_km2(halkalar):
    """Halka listesinden (dış + delikler) km² — alan_km2 ile aynı formül."""
    T = 0.0
    for _i, r in enumerate(halkalar):
        sg = 1 if _i == 0 else -1
        s2 = 0.0
        for _k in range(len(r) - 1):
            lo1, la1 = math.radians(r[_k][0]), math.radians(r[_k][1])
            lo2, la2 = math.radians(r[_k+1][0]), math.radians(r[_k+1][1])
            s2 += (lo2 - lo1) * (2 + math.sin(la1) + math.sin(la2))
        T += sg * abs(s2 * R_DUNYA * R_DUNYA / 2)
    return T


def _yabanci_g(g):
    """g gününde boyalı YABANCI toplam (Osmanlı dışı), km².
    SEYRELTİLMİŞ havuzdan okunur — künye yayınlanan çıktıyı ölçer.
    ⚠️ Osmanlı d/v aktifken o petek zaten yabancı gövdeye girmiyor
    (`_osm_aktif` bastırıyor), yani çifte sayım yok."""
    T = 0
    for d in DEVLET_KAYIT:
        for p in d["dnm"]:
            if p["f"] <= g < p["t"]:
                T += int(round(sum(_halka_km2([DEV_HALKA[h] for h in DEV_PARCA[pj]])
                                   for pj in p["g"]), -3))
                break
    return T


def _alan_g(dnm, g):
    """g gününde yürürlükteki dönemin (doğrudan, tâbi) alanı."""
    for d in dnm:
        if d["f"] <= g < d["t"]:
            return d.get("ao", 0), d.get("av", 0)
    return None, None


def _onceki_olcu():
    """Önceki koşunun ölçüsü. `URETIM_OLCU` varsa oradan (ucuz), yoksa eski
    `DONEMLER`den türetir — böylece bu yamanın İLK koşusu da kıyaslanabilir."""
    if not os.path.exists(CIKTI):
        return None
    try:
        _e = io.open(CIKTI, encoding="utf-8").read()
    except Exception:
        return None

    def _pencere(ad):
        a = f"window.{ad} = "
        i = _e.find(a)
        if i < 0: return None
        j = _e.find(";\n", i + len(a))
        if j < 0: return None
        try:
            return json.loads(_e[i + len(a):j])
        except Exception:
            return None

    o = _pencere("URETIM_OLCU")
    if o:
        # `yabanci` ekseni sonradan eklendi; eski künyede yoksa koşunun
        # BAŞINDA eski devletler_harita.js'ten türetilen taban kullanılır.
        if not o.get("yabanci") and _ESKI_YABANCI:
            o["yabanci"] = _ESKI_YABANCI
        return o
    d = _pencere("DONEMLER")
    if not d: return None
    return {"donem": len(d),
            "kesit": {g: list(_alan_g(d, g)) for g in OLCU_KESIT}}


asama("Çıktı kıyası (geçen koşuya göre)")
_OLCU = {"donem": len(donemler), "nokta": len(YERLER),
         "kesit": {g: list(_alan_g(donemler, g)) for g in OLCU_KESIT},
         "yabanci": {g: _yabanci_g(g) for g in OLCU_KESIT},
         # 🔴 KAPSAM KÜNYEYE YAZILIR — bu satır olmadan okuyan, ölçülmeyeni
         # "değişmemiş" sanar. Koşu 5'te tam bu oldu.
         "kapsam": ("ao=Osmanlı doğrudan · av=tâbi · yabanci=Osmanlı dışı "
                    "boyalı toplam · 9 kesit örneklenir, ARALARI ÖLÇÜLMEZ "
                    "(ör. 1865-1885 penceresi hiçbir kesite düşmüyor) · "
                    "alanlar 1.000 km²'ye yuvarlı, ±1.000 gürültü tabanıdır")}
_esk = _onceki_olcu()
if _esk is None:
    print("  önceki çıktı yok ya da ölçüsü okunamadı — KIYAS YAPILAMADI")
    print("  (bu yamanın ilk koşusuysa normaldir; sonraki koşu kıyaslar)")
else:
    print(f"  dönem  {_esk.get('donem','?')} → {_OLCU['donem']}"
          + (f"   ·   nokta {_esk['nokta']} → {_OLCU['nokta']}"
             if _esk.get("nokta") else ""))
    _oyn = []
    for _g in OLCU_KESIT:
        _a = (_esk.get("kesit") or {}).get(_g)
        _b = _OLCU["kesit"][_g]
        if not _a or _a[0] is None or _b[0] is None:
            print(f"    {_g}   —  kesit karşılaştırılamadı")
            continue
        _d = _b[0] - _a[0]
        _p = (_d / _a[0] * 100) if _a[0] else 0.0
        print(f"    {_g}   doğrudan {_a[0]:>11,} → {_b[0]:>11,} km²  "
              f"{_d:>+11,} ({_p:+5.1f}%)")
        if _d: _oyn.append((_g, _d, _p))
        # ikinci eksen — koşu 5'te ölçülen kör noktanın kapağı
        _ya = (_esk.get("yabanci") or {}).get(_g)
        _yb = _OLCU["yabanci"][_g]
        if _ya is None:
            print(f"                 YABANCI            —  → {_yb:>11,} km²"
                  f"   (önceki koşuda ölçülmemiş, TABAN kuruluyor)")
        else:
            _yd = _yb - _ya
            _yp = (_yd / _ya * 100) if _ya else 0.0
            print(f"                 YABANCI {_ya:>11,} → {_yb:>11,} km²  "
                  f"{_yd:>+11,} ({_yp:+5.1f}%)")
            if _yd: _oyn.append((_g + " (yabancı)", _yd, _yp))
    # ⚠️ İLK SAPMA GÜNÜ — teşhisi veren satır budur, toplam fark değil.
    _ilk = None
    for _d in donemler:
        _a = (_esk.get("kesit") or {}).get(_d["f"])
        if _a is None: continue
        if _a[0] != _d.get("ao"):
            _ilk = (_d["f"], _d.get("ao", 0) - _a[0]); break
    if not _oyn:
        print("  → BÜTÜN KESİTLER AYNI. Girdi değiştiyse bu da bir haberdir: "
              "değişiklik boyanan alana yansımamış.")
    else:
        _en = max(_oyn, key=lambda x: abs(x[1]))
        # ⚠️ PAYDA İKİ EKSENİ SAYAR. Yabancı ekseni eklenince payda 9 kalmıştı
        # ve satır "13/9 kesit oynadı" diye ANLAMSIZ bir şey bastı. Kendi
        # teşhis satırının yanlış sayması, bu dosyanın bütün derdi.
        _payda = len(OLCU_KESIT) * (2 if (_esk.get("yabanci") or _OLCU["yabanci"])
                                    else 1)
        _osm_n = sum(1 for x in _oyn if "(yabancı)" not in x[0])
        _yab_n = len(_oyn) - _osm_n
        print(f"  → SAPMA VAR: {len(_oyn)}/{_payda} ölçüm oynadı "
              f"(Osmanlı {_osm_n}/{len(OLCU_KESIT)} · yabancı {_yab_n}/{len(OLCU_KESIT)})"
              f" · en büyük {_en[0]} tarihinde {_en[1]:+,} km² ({_en[2]:+.1f}%)")
        # ⚠️ Etiket "1300-06-15 (yabancı)" olabilir; kıyas TARİH kısmıyla
        # yapılmalı, yoksa dize karşılaştırması kendi kesitini de "önceki"
        # sayar ve "ondan önceki N kesitte fark YOK" satırı yanlış çıkar.
        _once = [g for g in OLCU_KESIT if g < _oyn[0][0][:10]]
        print(f"  → ilk oynayan kesit {_oyn[0][0]}"
              + (f"; ondan önceki {len(_once)} kesitte fark YOK" if _once else "")
              + (f" · ilk sapan dönem başlangıcı {_ilk[0]} ({_ilk[1]:+,} km²)"
                 if _ilk else ""))
        print("  ⚠️ Bu bir HÜKÜM DEĞİL. Sapma meşru olabilir (yeni nokta, yeni "
              "renk, kasıtlı sahipsiz dolgu) ya da olmayabilir — kararı veren "
              "sensin. Sapmanın BAŞLADIĞI TARİH sebebi gösterir.")
js += ("window.URETIM_OLCU = "
       + json.dumps(_OLCU, separators=(",", ":"), sort_keys=True) + ";\n")

_muhru_dogrula("data/donemler.js")
girdi.izi_dogrula(_GIRDI_IZI, "data/donemler.js")
# Damganın DOĞRU olması yetmez, KORUNMASI da gerek: kod koşu sırasında
# değiştiyse çıktı karışık koddan üretilmiş olabilir. Girdiyle aynı
# felsefe — sessiz geçiş yok.
girdi.motor_izi_dogrula(_MOTOR_IZI, "data/donemler.js")
# Kıyas aşaması bittiyse dosya yazımı ONUN hanesine yazılmasın — 26 MB'lık
# yazım kıyasın maliyeti değil. (Bu dosyanın bütün derdi doğru etiket.)
asama("donemler.js yazımı")
open(CIKTI, "w", encoding="utf-8").write(js)

print(f"Dönem sayısı: {len(donemler)}")
print(f"Havuz — donemler: {len(OSM_HALKA):,} eşsiz halka / "
      f"{len(OSM_PARCA):,} eşsiz parça  ·  devletler: {len(DEV_HALKA):,} halka / "
      f"{len(DEV_PARCA):,} parça")
# 🔴 YA TAM YA HİÇ — parça listesindeki her halka indeksi havuzda OLMALI.
# `js/app.js` parcaCoz delikte `throw` ediyor (ARAYÜZ 2 sözleşmesi); delik
# oraya varmadan BURADA yakalanır. Sessiz bozuk geometri üretilemez.
for _ad2, _hv, _pr in (("donemler", OSM_HALKA, OSM_PARCA),
                       ("devletler", DEV_HALKA, DEV_PARCA)):
    _kotu = [j for ks in _pr for j in ks if not (0 <= j < len(_hv))]
    if _kotu:
        raise SystemExit(f"HAVUZ DELIGI ({_ad2}): {len(_kotu)} gecersiz halka "
                         f"indeksi, ornek {_kotu[:5]} — cikti YAZILMADI")
print(f"  havuz bütünlüğü: "
      f"{sum(len(k) for k in OSM_PARCA) + sum(len(k) for k in DEV_PARCA):,} "
      f"halka atıfının hepsi geçerli ✓")
_sbd = sum(1 for d in donemler if d.get("sb"))
_sbk = sum(len(h) for h in SRB_HAVUZ)
import statistics as _stt
_uv = sorted(u for u in SRB_U if u)
print(f"Serbest kenar: {len(SRB_HAVUZ)} eşsiz hat ({_sbk:,} köşe), "
      f"{_sbd}/{len(donemler)} dönemde sahipsiz alanla sınırdaş, "
      f"{len(_SERBEST_ONBELLEK)} ayrı boş-bölge kümesi")
if _uv:
    print(f"  belirsizlik km — medyan {_stt.median(_uv):.1f} · "
          f"Q1 {_uv[len(_uv)//4]:.1f} · Q3 {_uv[3*len(_uv)//4]:.1f} · maks {_uv[-1]:.1f}")
print(f"Dosya boyutu: {os.path.getsize(CIKTI)//1024} KB")

# ---------------- Doğrulama ----------------
hata = 0
for j, y in enumerate(YERLER):
    if not (y["d"] or y["v"]): continue
    if PETEK_D[j].is_empty:
        print(f"  BOŞ PETEK: {y['ad']}"); hata += 1; continue
    if not PETEK_D[j].buffer(0.08).contains(Point(y["lon"], y["lat"])):
        print(f"  NOKTA PETEK DIŞINDA: {y['ad']}"); hata += 1
print("Doğrulama:", "tüm yerleşimlerin peteği geçerli ✓" if not hata else f"{hata} uyumsuzluk")
for d in donemler[:3] + donemler[-3:]:
    print(f"  {d['f']} → {d['t']}  {d['ao']/1e6:5.2f} mn km²  {d['ad'][:44]}")
print("Tâbi katmanlı dönem:", sum(1 for d in donemler if d.get("v")))
for d in donemler:
    if "1830-01-01" <= d["f"] <= "1842-12-31":
        print(f"  {d['f']} → {d['t']}  doğrudan {d['ao']/1e6:4.2f} + tâbi "
              f"{d.get('av',0)/1e6:4.2f} mn km²  {d['ad'][:46]}")

# 📌 KOŞU KENDİ BİLANÇOSUNU YAZAR — bu satırdan sonra "nerede yanıyor" sorusu
# bir daha dosya damgasından TAHMİN edilmez.
asama_ozet()
