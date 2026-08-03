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
BOLGE = box(-12, -11, 146, 64)

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
_ASAMA_AD, _ASAMA_T = None, _T0


def _sure(s):
    """Saniyeyi okunur süreye çevirir (1s 23dk 45sn)."""
    s = int(round(s))
    if s >= 3600: return f"{s//3600}s {(s%3600)//60:02d}dk {s%60:02d}sn"
    if s >= 60:   return f"{s//60}dk {s%60:02d}sn"
    return f"{s}sn"


def asama(ad=None):
    """Açık aşamayı kapatır, yenisini açar. ad=None ise yalnız kapatır."""
    global _ASAMA_AD, _ASAMA_T
    simdi = time.time()
    if _ASAMA_AD is not None:
        _ASAMA_KAYIT.append((_ASAMA_AD, simdi - _ASAMA_T))
        print(f"  ⏱ {_ASAMA_AD} — {_sure(simdi - _ASAMA_T)} "
              f"(koşu {_sure(simdi - _T0)})")
    _ASAMA_AD, _ASAMA_T = ad, simdi
    if ad is not None:
        print(f"[{_dt.datetime.now():%H:%M:%S}] ▶ {ad}")


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
    print(f"AŞAMA BİLANÇOSU — koşu {_sure(top)}")
    print("=" * 64)
    for ad, sn in _ASAMA_KAYIT:
        print(f"  {ad[:44]:<44} {_sure(sn):>12}  %{sn/top*100:4.1f}")
    olculen = sum(s for _, s in _ASAMA_KAYIT)
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
        if _ad is None: continue
        g = shape(f["geometry"])
        if g.envelope.intersects(BOLGE):
            NEHIRLER.append(g.intersection(BOLGE)); _bulunan.add(_ad)
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
    for f in _dg["features"]:
        p = f["properties"]
        if "Range" not in (p.get("FEATURECLA") or ""): continue
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

def delikleri_doldur(g):
    """Kuşatılmış boşluk bırakmaz: çevresi ele geçmiş alan (dağ bloğu, ova) da
    hâkimiyet altındadır."""
    if g.is_empty: return g
    ps = g.geoms if isinstance(g, MultiPolygon) else [g]
    return unary_union([Polygon(p.exterior) for p in ps]).buffer(0)

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
    return (abs(x-_bx0) < e or abs(x-_bx1) < e or
            abs(y-_by0) < e or abs(y-_by1) < e)

_ag = linemerge(unary_union([h.exterior for h in PETEK]))
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
def _bozuk_dok(hucreler, etiket):
    idx = [i for i, g in enumerate(hucreler) if g is not None and not g.is_empty]
    b = shapely.coverage_invalid_edges([hucreler[i] for i in idx])
    kot = [(idx[k], x) for k, x in enumerate(b) if x is not None and not x.is_empty]
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
asama("Kıyı kesimi (her hücre × KARA)")
PETEK_D = [poligonal(g.intersection(KARA)) for g in PETEK_TAM]

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
    _dolu = unary_union([PETEK_D[i] for i in _ic]) if _ic else None
    _bos = poligonal(_k.difference(_dolu)) if _dolu is not None else _k
    if not _bos.is_empty and _bos.area > 1e-9:
        for _pp in (_bos.geoms if _bos.geom_type == "MultiPolygon" else [_bos]):
            if _pp.is_empty:
                continue
            _en = min(_ic, key=lambda i: _ptl[i].distance(_pp))
            PETEK_D[_en] = poligonal(unary_union([PETEK_D[_en], _pp]))
            _yalitilan += 1
print(f"  {_tasan} taşma kesildi, {_yalitilan} boşta kalan parça içerideki yerleşime verildi")


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

# Çok kaynaklı Dijkstra, YALNIZ kara hücreleri üzerinden. Adım maliyeti gerçek
# km: boylam adımı cos(enlem) ile daralır, yoksa kuzeyde mesafeler şişer ve
# Baltık/Norveç vakaları yanlış tarafa düşer.
import heapq as _heapq
asama("Kara-kısıtlı sahiplik: Dijkstra (kara ızgarası)")
_kvuzak = [float("inf")] * (_kvnx * _kvny)
_kvsahip = [-1] * (_kvnx * _kvny)
_kvq = []
for _h, _idxs in _kvtohum.items():
    _kvuzak[_h] = 0.0
    _kvsahip[_h] = _idxs[0]
    _heapq.heappush(_kvq, (0.0, _h))
_KVDY = KV_ADIM * 111.32
while _kvq:
    _d, _h = _heapq.heappop(_kvq)
    if _d > _kvuzak[_h]: continue
    _j, _i = divmod(_h, _kvnx)
    _dx = _KVDY * math.cos(math.radians(_kvy0 + (_j + 0.5) * KV_ADIM))
    for _di, _dj in ((1,0),(-1,0),(0,1),(0,-1),(1,1),(1,-1),(-1,1),(-1,-1)):
        _a, _b = _i + _di, _j + _dj
        if not (0 <= _a < _kvnx and 0 <= _b < _kvny): continue
        _k = _b * _kvnx + _a
        if not _kvkara[_k]: continue
        _nd = _d + math.hypot(_dx * _di, _KVDY * _dj)
        if _nd < _kvuzak[_k]:
            _kvuzak[_k] = _nd; _kvsahip[_k] = _kvsahip[_h]
            _heapq.heappush(_kvq, (_nd, _k))
print(f"  kara yolu çözüldü, erişilen hücre {sum(1 for s in _kvsahip if s >= 0):,}")
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

_kvver, _kval, _kvdegisen = {}, {}, []
_kvkucuk_n, _kvkucuk_a = 0, 0.0
_kvkararsiz, _kvana_korundu = 0, 0
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
        if _s < 0:
            _kvkararsiz += 1; continue    # ızgarada su/erişilmez → karar verme
        if _s != _i:
            _kval.setdefault(_i, []).append(_p)
            _kvver.setdefault(_s, []).append(_p)
            _kvdegisen.append((_a, YERLER[_i]["ad"], YERLER[_s]["ad"], _rp.y, _rp.x))
for _i, _ps in _kval.items():
    PETEK_D[_i] = poligonal(PETEK_D[_i].difference(unary_union(_ps).buffer(0)))
for _i, _ps in _kvver.items():
    PETEK_D[_i] = poligonal(unary_union([PETEK_D[_i]] + _ps))
print(f"  {len(_kvdegisen)} parça el değiştirdi, toplam "
      f"{sum(d[0] for d in _kvdegisen):,.0f} km²")
print(f"  ızgaraya sorulmayan: {_kvkucuk_n} parça / {_kvkucuk_a:,.0f} km² "
      f"({KV_MIN_KM2:.0f} km² altı) · kararsız {_kvkararsiz} · "
      f"ana parça korundu {_kvana_korundu}")
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
BOZUK_KIYI_TABAN = 48

# 🔴 NÖBETÇİ BURADA — ÇÖL TAVANINDAN ÖNCE. Bu çağrı, taban 32'yi üreten r217
# koşusuyla AYNI ölçümdür (kıyı kesimi + ada kuralı + kara-kısıtlı sahiplik
# sonrası); yalnız yeri düzeltildi. Çöl tavanı sonrasındaki çağrı aşağıda
# duruyor ama artık BİLGİ satırı — ✗ basmıyor, çünkü orada ölçtüğü delikler
# kasıtlı.
_nk0 = _bozuk_dok(PETEK_D, "çöl öncesi")
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
_ENK_AD = {YERLER[i]["ad"] for i in _ENKLAV}
_kayip = [r for r in _oranlar if r[0] < SIFIR_PETEK_ORAN and r[3] not in _ENK_AD]
_kayip_muaf = [r for r in _oranlar if r[0] < SIFIR_PETEK_ORAN and r[3] in _ENK_AD]
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
        cs = [[round(x, 3), round(y, 3)] for x, y in h.coords]
        if len(cs) >= 2:
            out.append(cs)
    return out


def petek_epok(g):
    """g tarihinde geçerli petek listesi; kurulmamış/yok olmuş noktanın payı
    o tarihte sahnede olan en yakın komşuya devredilmiş hâlde."""
    devir = devir_kumesi(g)
    if not devir:
        return PETEK_D
    if devir in _VARLIK_ONBELLEK:
        return _VARLIK_ONBELLEK[devir]
    _t_pe = time.time()
    hucre = list(PETEK_D)
    sahne = [i for i in range(len(YERLER)) if i not in devir]
    agac = STRtree([noktalar[i] for i in sahne])
    kayit = []
    for i in sorted(devir):
        if hucre[i].is_empty:
            continue
        k = sahne[int(agac.nearest(noktalar[i]))]
        hucre[k] = poligonal(unary_union([hucre[k], hucre[i]]))
        kayit.append((YERLER[i]["ad"], YERLER[k]["ad"], _ham_km2(hucre[i])))
        hucre[i] = Polygon()
    _VARLIK_ONBELLEK[devir] = hucre
    _VARLIK_DEVIR[devir] = kayit
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
def havuza(mp, havuz, ix):
    out = []
    for parca in mp:
        k = json.dumps(parca, separators=(",", ":"))
        j = ix.get(k)
        if j is None:
            j = len(havuz); havuz.append(parca); ix[k] = j
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
            cs = [[round(x,3), round(y,3)] for x,y in ring.coords]
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
_DEV_ALAN = []          # (f, t, km²) — yalnız künye için; ÇIKTIYA YAZILMAZ


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
DEV_HAVUZ, DEV_IX = [], {}
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
        dnm.append({"f": a, "t": b, "g": havuza(mp_koord(g), DEV_HAVUZ, DEV_IX),
                    "c": [round(rp.x, 2), round(rp.y, 2)]})
        if any(a <= _kg < b for _kg in OLCU_KESIT):
            _DEV_ALAN.append((a, b, alan_km2(g)))
        sayac("yabancı gövde geometrisi", time.time() - _t_gv)
    if dnm: DEVLET_KAYIT.append({"id": did, "ad": dad, "renk": renk, "dnm": dnm})
_dyol = os.path.join(KOK, "data", "devletler_harita.js")
_dj  = "// Otomatik üretildi — elle düzenlemeyin. Betik: arac/uret_petek.py\n"
_dj += "// Yabancı devletlerin dönem gövdeleri (yerlesimler.js s alanından).\n"
_dj += "// dnm[].g, DEVLET_PARCALAR havuzuna indekstir (js/app.js çözer).\n"
_dj += "window.DEVLET_PARCALAR = " + json.dumps(DEV_HAVUZ, separators=(",",":")) + ";\n"
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
asama("Dönemler kuruluyor (delta yapısı)")
# İki katman:
#   DOĞRUDAN (o)  : merkezden yönetilen toprak — koyu kırmızı
#   TÂBİ     (v)  : hâkimiyetin dolaylı olduğu toprak (muhtar valilik, tâbi
#                   beylik, fiilî işgal) — bir ton açık. Bir yerleşim aynı anda
#                   iki listede de görünüyorsa TÂBİ kazanır; çünkü "v" doğrudan
#                   idarenin askıya alındığı aralığı bildirir (ör. Suriye
#                   1832-1841 Kavalalı İbrâhim Paşa'nın elinde).
donemler = []
OSM_HAVUZ, OSM_IX = [], {}   # o + v parçaları tek havuzda
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
             "o": havuza(mp_koord(g), OSM_HAVUZ, OSM_IX)}
    if gt is not None and not gt.is_empty:
        kayit["av"] = alan_km2(gt)
        kayit["v"]  = havuza(mp_koord(gt), OSM_HAVUZ, OSM_IX)
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
js += "window.PARCALAR = " + json.dumps(OSM_HAVUZ, separators=(",",":")) + ";\n"
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
def _yabanci_g(g):
    """g gününde boyalı YABANCI toplam (Osmanlı dışı), km².
    ⚠️ Osmanlı d/v aktifken o petek zaten yabancı gövdeye girmiyor
    (`_osm_aktif` bastırıyor), yani çifte sayım yok."""
    return sum(al for f, t, al in _DEV_ALAN if f <= g < t)


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
        print(f"  → SAPMA VAR: {len(_oyn)}/{len(OLCU_KESIT)} kesit oynadı · "
              f"en büyük {_en[0]} tarihinde {_en[1]:+,} km² ({_en[2]:+.1f}%)")
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
print(f"Parça havuzu: donemler {len(OSM_HAVUZ)}, devletler {len(DEV_HAVUZ)} eşsiz parça")
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
