# -*- coding: utf-8 -*-
"""
GİRDİ — yerleşim verisinin TEK okuma noktası
=============================================
`arac/uret_petek.py` ve `arac/denetle.py` yerleşim verisini buradan okur.

## Neden ayrı bir modül

Bu depoda iki araç aynı veriyi FARKLI katılıkta okuduğu için bir kez üretim
çöktü: `denetle.py` JS dizisinin sonundaki fazladan virgüle toleranslıydı,
motor değildi — denetim "temiz" derken üretim düşüyordu (bkz. uret_petek.py
içindeki uyarı). Aynı hatanın çok dosyalı girdide tekrar etmemesi için okuma
mantığı ve DOSYA LİSTESİ tek yerde duruyor. Bir parti canlıya alınacaksa
değişecek tek şey aşağıdaki `GIRDI_DOSYALARI` listesidir.

## Neden glob değil, izin listesi

`data/yerlesimler_*.js` desenini çıplak okumak cazip ama TEHLİKELİ: depoda
merge'e hazır OLMAYAN partiler duruyor ve desen onları sessizce içeri alır.

  data/yerlesimler_asya.js    344 nokta — 135 devlet kimliği renkler.py'de YOK,
                              tamamı 62°D'nin doğusunda, harita penceresi dışı
  data/yerlesimler_avrupa.js  237 nokta — 15 kimlik renkler.py'de YOK, DSATUR
                              renk dağıtımı gerekiyor
  (sayılar 2 Ağustos 2026 ölçümü — yorumdaki sayı ölçümün fotoğrafıdır ve
  eskir; partiye dokunan oturum yeniden ölçüp burayı düzeltir)

Kimliği tanımsız nokta üretimde uyarı verir ve bölgesi BOYANMAZ; yani glob
kullanmak "bir dosya ekledim" ile "haritada renksiz delik açtım"ı aynı işleme
indirger. İzin listesiyle bir partiyi canlıya almak tek satırlık, gözden
geçirilmiş bir karar oluyor.

## Bir parti nasıl canlıya alınır

1. Partinin bütün devlet kimlikleri `arac/renkler.py`'deki BOYALAR'da olsun
2. `py arac/denetle.py` — altı denetim de temiz olsun (ad çakışması, 3 km
   yakınlık ve maske kontrolü bu modül üzerinden çalışır)
3. Dosya adını aşağıdaki listeye ekle
4. `py arac/uret_petek.py` — üretim koşarken hiçbir girdi dosyasına YAZILMAZ
"""
import io
import json
import math
import os
import re

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(KOK, "data")


def anlik_goruntu():
    """Girdi dosyalarını geçici bir dizine kopyalar ve DATA'yı oraya çevirir.

    ⚠️ ÜRETİM KİLİDİNİ KALDIRAN DEĞİŞİKLİK. Kilit teknik bir zorunluluk değil,
    protokoldü — ölçüldü: `uret_petek.py` 1320 satırda girdiye ÜÇ kez dokunuyor
    ve üçü de başta (parmak_izi · oku_goller · yukle). 233. satırdan sonraki
    1087 satır tamamen bellekle çalışıyor. Yani koşu sırasında dosyanın
    değişmesi motorun OKUDUĞUNU değiştirmiyor; kilit, değişikliğin çıktıya
    girdiğini SANMAYI önlemek için vardı.

    Anlık görüntü o sanıyı imkânsız kılıyor: motor koşu boyunca kopyadan okur,
    kopya değişmez, orijinaller serbest kalır.

    ⚠️ KOPYA ATOMİK DEĞİL. Üç dosya sırayla kopyalanırken araya bir yazma
    girerse KARIŞIK anlık görüntü çıkar (biri değişiklik öncesi, öteki sonrası).
    Pencere milisaniye ama sıfır değil. Bu yüzden kopyadan sonra orijinaller
    yeniden özetlenir; biri değiştiyse kopya TEKRARLANIR.
    Ölçülen maliyet: 3 dosya / 369 KB / 18 ms (iki tur sha256 dahil) —
    44 dakikalık koşuda 1/147.000.

    📌 VE BUGÜN AÇIK OLAN BİR KAPIYI KAPATIYOR: `oku_goller()` motorun 125.
    satırında, `yukle()` 233'te. Aralarında bir pencere var ve girdi orada
    değişirse motor KARIŞIK okur; `_GIRDI_IZI` bunu ancak üçüncü yazma
    noktasında, ~40 dakika sonra yakalar. Kilit tam bu pencereyi kapatmak için
    konmuştu ama KAPATMIYORDU. Anlık görüntü kapatıyor.
    """
    global DATA
    import hashlib
    import shutil
    import tempfile

    def _ozet(kok):
        iz = {}
        for ad in list(GIRDI_DOSYALARI) + [GOL_DOSYASI]:
            y = os.path.join(kok, ad)
            if os.path.exists(y):
                iz[ad] = hashlib.sha256(io.open(y, "rb").read()).hexdigest()
        return iz

    kaynak = DATA
    hedef = tempfile.mkdtemp(prefix="petek_girdi_")
    for deneme in range(1, 6):
        once = _ozet(kaynak)
        for ad in list(GIRDI_DOSYALARI) + [GOL_DOSYASI]:
            y = os.path.join(kaynak, ad)
            if os.path.exists(y):
                shutil.copy2(y, os.path.join(hedef, ad))
        if _ozet(kaynak) == once:
            DATA = hedef
            print(f"Girdi anlık görüntüsü: {len(once)} dosya kopyalandı"
                  + (f" ({deneme}. denemede)" if deneme > 1 else "")
                  + " → girdi dosyaları SERBEST")
            return hedef
        print(f"  anlık görüntü sırasında girdi değişti, tekrarlanıyor "
              f"({deneme}/5)")
    raise SystemExit("Girdi 5 denemede de durulmadı — kopya alınamadı.")

# ⚠️ SIRA ÖNEMLİ: aynı ad iki dosyada varsa hangisinin kazandığı değil, HATA
# verilmesi gerekir (aşağıda kontrol ediliyor). Sıra yalnız okunabilirlik için.
GIRDI_DOSYALARI = [
    "yerlesimler.js",           # çekirdek — Osmanlı ve komşuları
    # 153 nokta (Oturum 14). Merge provası 764'lük çekirdeğe karşı iki kez
    # koşturuldu (hatalar 2-3 oturumu): ad çakışması YOK, 3 km'den yakın çift
    # YOK, Değişmez 1 sahipsiz 34'te sabit, Değişmez 2 437 kırılma / 0 açık,
    # Değişmez 3 çelişki 378'de sabit (Afrika'dan sıfır katkı). 12 devlet
    # kimliğinin hepsi renkler.py'de tanımlı, yeni renk gerekmiyor. 58 dönemde
    # ocaklık ayrımı (Cezayir 23 / Tunus 21 / Trablus 14 nokta) geçirildi ve
    # tek açık kırılma üretmedi.
    "yerlesimler_afrika.js",
    # 15 nokta (NOKTA EKLEME, 1 Ağustos 2026). Beş boşluğun ölçülmüş kapanışı:
    # Yukarı Macaristan 4 (Kassa·Eperjes·Tokaj·Sopron, ~28.000 km² 91 yıl yanlış
    # Osmanlı) · Dalmaçya kıyı 4 (Zadar·Şibenik·Split·Kotor) · Klis sancağı 5
    # (Knin·Sin·Klis·Vrana·Nadin) · Herseknovi · Bihaç. Toplam 76.353 km² petek.
    # Kabul ölçütü canlıymış gibi ayrıca koşturuldu: ad çakışması YOK, 3 km en
    # yakın çift 8,38 km, maske 15/15 içeride, Değişmez 1 15/15 KESİNTİSİZ
    # (günlük tam tarama), 8 kimliğin 8'i renkler.py'de — YENİ RENK GEREKMEDİ.
    # Dört kırılma borcu VERİ KRONOLOJİ tarafından kapatıldı (Sin 1513 · Knin
    # 1522-05-29 · Klis 1537-03-12 · Klis kaybı 1648-03-31 · Bihaç 1592-06-19).
    # ⚠️ Skradin ÇIKARILDI: 1522 fethinin GÜNÜ bilinmiyor; madde uydurma gün
    #    taşımasın diye kayıt dosyada YORUM olarak bekliyor (§76).
    "yerlesimler_ek.js",
    "yerlesimler_ortaasya2.js",
    # 7 nokta (MOTOR 2, 2 Ağustos 2026). Canlıya alınma gerekçesi — üç ön koşulun
    # üçü de ölçülerek sağlandı: ① 9 devlet kimliğinin 9'u renkler.py BOYALAR'da
    # tanımlı (yeni renk gerekmedi), ② 7/7 nokta BOLGE kutusunun İÇİNDE
    # (lon 51,92..61,50 — kutu işi yok), ③ canlı 991 noktaya karşı 3 km çakışması
    # YOK (en yakın çift 17,36 km: Aşkabad ↔ Nesâ), partinin kendi içinde de yok.
    # HAZIR DEĞİL — kimlikleri renkler.py'de tanımsız, açılırsa renksiz delik:
    # "yerlesimler_asya.js",    # 344 nokta, 135 tanımsız kimlik, 62°D'nin doğusu
    # "yerlesimler_avrupa.js",  # 237 nokta, 15 tanımsız kimlik, DSATUR gerekiyor
]

YAKINLIK_ESIK_KM = 3.0          # CLAUDE.md §11: 3 km içinde ikinci nokta açma

# ⚠️ ALAN NORMALİZASYONU — bu modülün var olma sebebinin ikinci kanıtı
# Şema alanlarının çoğu İSTEĞE BAĞLI ve dosyalar farklı alışkanlıklarla yazılmış:
#   yerlesimler.js       : d: HER kayıtta var (boşsa d:[] yazılmış)
#   yerlesimler_afrika.js: 47 kayıtta d: HİÇ YOK — Osmanlı dönemi olmayan yerler
# Motor `y["d"]` diye okuyordu, denetim `y.get("d")` diye. Afrika partisi girdiye
# eklendiği anda üretim `KeyError: 'd'` ile düştü — denetim ise TEMİZ diyordu.
# Bu, sondaki virgül vakasının birebir aynısı: iki araç aynı veriyi farklı
# katılıkta okuyor. Çözüm de aynı yerde olmalı — normalizasyon burada yapılır,
# iki araç da tam alanlı kayıt alır. Yeni bir isteğe bağlı alan eklenirse
# (kur:, bit:, kd:) varsayılanı BURAYA yazılır, iki aracın koduna değil.
VARSAYILAN = {
    "tur": "sehir",
    "g": 0,
    "k": 0,          # idari kademe: 0 = kademesiz
    "m": None,       # bağlı olunan k1/k2 merkezin adı
    "s": [],         # yabancı sahiplik dönemleri
    "d": [],         # doğrudan Osmanlı dönemleri
    "v": [],         # tâbi / dolaylı idare dönemleri
}

# ⚠️ BİLİNEN ALAN KÜTÜĞÜ — "sessizce yutulan alan" hata sınıfının kapağı
# Yeni bir alan (isg:, kur:, bit:, go:) şemaya girdiğinde motor onu tanımaz ve
# HİÇ SES ÇIKARMADAN yok sayar. Sorun yeni alanda değil, YAZIM HATASINDA:
# `isg:` yerine `isgal:`, `kur:` yerine `kr:` yazılırsa veri dosyada durur,
# denetim temiz raporlar, harita eski hâlinde kalır ve kimse fark etmez.
# Bu depoda aynı sınıftan üç hata çıktı (sondaki virgül, KeyError:'d', ek9'un
# yayına bağlanmaması) ve üçü de "iki araç aynı veriyi farklı katılıkta okuyor"
# yüzündendi. Kütük, yeni alanı AÇIKÇA kaydetmeye zorlar.
# Bir alanı buraya eklemek "motor bunu okuyor" demek DEĞİLDİR; "bu alanın
# varlığından haberdarım" demektir. Hangi aracın okuduğu yorumda yazılı.
BILINEN_ALANLAR = {
    "ad":  "zorunlu — benzersiz yerleşim adı",
    "lat": "zorunlu — enlem",
    "lon": "zorunlu — boylam",
    "tur": "sehir / kale / bolge …",
    "g":   "gösterim önceliği (app.js: etiket zoom kademesi)",
    "k":   "idari kademe 0-4",
    "m":   "bağlı olunan k1/k2 merkezin adı",
    "s":   "yabancı sahiplik dönemleri — MOTOR BOYAR",
    "d":   "doğrudan Osmanlı dönemleri — MOTOR BOYAR",
    "v":   "tâbi / dolaylı idare dönemleri — MOTOR BOYAR",
    "kur": "kuruluş tarihi — motor: petek_epok() bu tarihten önce peteği "
           "komşuya devreder",
    "bit": "yok oluş tarihi — kur:'un aynadaki hâli",
    "go":  "önemin söndüğü gün — YALNIZ app.js (etiket kalabalığı); motor okumaz",
    # ⚠️ isg: MOTOR TARAFINDAN KASTEN OKUNMAZ. Sebebi şema kararıdır, ihmal
    # değil: işgal bir dönem TÜRÜ değil ÖRTÜ katmanıdır (commit 043e911).
    #   d:/v:/s: → DE JURE sahiplik → peteğin TABAN RENGİ (motorun işi)
    #   isg:     → DE FACTO denetim → tarama katmanı (uret_devirler.py'nin işi)
    # Mısır bunu zorunlu kılıyor: İngiltere 1882'den beri fiilen orada ama
    # Osmanlı hükümranlığı hukuken 1914'e kadar sürüyor. İşgal bir dönem türü
    # olsaydı taban rengi değişir ve 32 yıllık hukukî durum haritadan silinirdi.
    # Bosna aynı desen: 1878 Avusturya işgali, 1908 ilhak — ikisi AYRI gösterim.
    "isg": "işgal örtüsü — motor OKUMAZ (taban rengi de jure kalır); "
           "window.ISGALLER üreticisi arac/uret_devirler.py",
    # ⚠️ GEOMETRİNİN SORAMADIĞI SORUYU TAŞIYAN ALAN.
    # Motor "bu peteğin çevresi sahipli mi" diye sorabiliyor ama "o dağ
    # YÖNETİLİYOR muydu" diye soramıyor. Kuşatılmışlık ölçütü bu yüzden
    # Cetinje'yi devretmek istiyor (%94,5) — oysa TDV `karadag` Karadağ'ı
    # "göçebe kabilelerin GEVŞEK KONFEDERASYONU" diye tarif ediyor ve
    # Podgorica XVIII. yy'da hâlâ dağa karşı altı tabyayla tahkim ediliyor.
    # Kuşatılmışlık ovadan geliyor; dağ yönetilmiyordu.
    # ⇒ Ölçüt VARSAYILAN, bu alan İSTİSNA. Ve istisna YALNIZ KAYNAKLI
    #   araştırma hükmüyle yazılır — "bence öyle" ile değil.
    # 📌 Alan yoksa varsayılan False'tur: yani sessizlik "kasıtlı değil"
    #   demektir, "bilinmiyor" değil. Bilinmiyorsa yazılmaz ve ölçüt karar
    #   verir; bu, bilgisizliği kasıt gibi göstermenin önüne geçiyor.
    "kasitli_bosluk": "True ise kuşatılmışlık ölçütü bu peteği DEVRETMEZ — "
                      "boşluk kasten öyle. Yalnız kaynaklı hükümle yazılır. "
                      "Okuyan: uret_petek.py, _kusatilmis()",
}

# Dönem nesnelerinin (s/d/v/isg elemanları) alanları
BILINEN_DONEM_ALANLARI = {
    "f": "başlangıç (YYYY-AA-GG)",
    "t": "bitiş",
    "d": "devlet kimliği — s: ve isg: içinde; renkler.py'de tanımlı olmalı",
    "k": "tâbi devletin adı — v: içinde (motor okumaz, gösterim için)",
    # ⚠️ `y:` İKİ ANLAMDA KULLANILMIŞTI — Oturum 2'nin bulgusu, kütüğün ilk
    # gerçek müşterisi. d:/s: içinde KAZANIM BİÇİMİ enum'u (kusatma 85, savas
    # 77, antlasma 67 kayıt), isg: içinde ise KAYNAK SLUG'ı. Aynı ada iki
    # anlam: `y:` üzerinden istatistik alan bir araç işgal kayıtlarını enum
    # sanıp sayardı. Ayrıldı — isg: tarafı `kaynak:` oldu (olaylar.js'in zaten
    # kullandığı sözleşme; yeni ad uydurulmadı).
    "y": "kazanım biçimi enum'u (kusatma/savas/antlasma…) — d: ve s: içinde",
    "kaynak": "kaynak slug'ı — isg: içinde; motor OKUMAZ, "
              "üretici arac/uret_devirler.py",
}


def _cevir(js, degisken):
    """`window.<degisken> = [ ... ];` gövdesini JSON'a çevirir."""
    js = "\n".join(l for l in js.split("\n") if not l.strip().startswith("//"))
    anahtar = f"window.{degisken} = "
    govde = js[js.index(anahtar) + len(anahtar):]
    govde = govde[:govde.rindex("]") + 1]
    j = re.sub(r'([{,]\s*)([A-Za-zçğıöşüÇĞİÖŞÜ_]\w*)\s*:', r'\1"\2":', govde)
    # JS'te dizi/nesne sonundaki fazladan virgül geçerli, JSON'da değil.
    j = re.sub(r',(\s*[\]}])', r'\1', j)
    # JS'te uzun metin "a" + "b" diye bölünebilir, JSON'da bölünemez. goller.js'in
    # `kaynak:` alanı böyle yazılmış ve okuyucu burada patlamıştı. Birleştirme
    # güvenli: JSON dizesi kaçışsız `"` içeremez, dolayısıyla desen dizenin
    # İÇİNDEKİ bir artıyla eşleşemez.
    _bir = r'"((?:[^"\\]|\\.)*)"\s*\+\s*"((?:[^"\\]|\\.)*)"'
    while re.search(_bir, j):
        j = re.sub(_bir, lambda m: '"' + m.group(1) + m.group(2) + '"', j)
    return json.loads(j)


def oku_dosya(ad):
    """Tek dosyayı okur; `window.YERLESIMLER*` değişkenini kendisi bulur."""
    yol = os.path.join(DATA, ad)
    js = io.open(yol, encoding="utf-8").read()
    m = re.search(r"window\.(YERLESIMLER\w*)\s*=", js)
    if not m:
        raise ValueError(f"{ad}: window.YERLESIMLER* bulunamadı")
    return _cevir(js, m.group(1))


def km(a_lat, a_lon, b_lat, b_lon):
    orta = math.radians((a_lat + b_lat) / 2)
    return 111.32 * math.hypot(a_lat - b_lat, (a_lon - b_lon) * math.cos(orta))


def yukle(sessiz=False):
    """Bütün girdi dosyalarını birleştirip döker. Ad çakışmasında ValueError."""
    hepsi, nereden, bilinmeyen = [], {}, {}
    for ad in GIRDI_DOSYALARI:
        kayitlar = oku_dosya(ad)
        for y in kayitlar:
            if y["ad"] in nereden:
                raise ValueError(
                    f"AD ÇAKIŞMASI: '{y['ad']}' hem {nereden[y['ad']]} hem {ad} "
                    f"içinde. Yerleşim adı benzersiz olmalı (VERI-YAPISI.md)."
                )
            nereden[y["ad"]] = ad
            for alan in y:
                if alan not in BILINEN_ALANLAR:
                    bilinmeyen.setdefault(alan, []).append(f"{ad}:{y['ad']}")
            for kat in ("s", "d", "v", "isg"):
                for p in y.get(kat) or []:
                    for alan in p:
                        if alan not in BILINEN_DONEM_ALANLARI:
                            bilinmeyen.setdefault(f"{kat}.{alan}", []).append(
                                f"{ad}:{y['ad']}")
            for alan, deger in VARSAYILAN.items():
                y.setdefault(alan, [] if deger == [] else deger)
        hepsi.extend(kayitlar)
        if not sessiz:
            print(f"  {ad}: {len(kayitlar)} nokta")
    # ⚠️ Bilinmeyen alan HATA DEĞİL, UYARIDIR — bir alanı şemaya eklemek ile
    # motoru ona göre değiştirmek ayrı işlerdir ve ayrı oturumlarda yapılır.
    # Ama SESSİZ de olamaz: yazım hatası olan alan da tam böyle görünür.
    for alan, kimde in sorted(bilinmeyen.items()):
        print(f"  UYARI alan: '{alan}' BILINEN_ALANLAR'da yok — {len(kimde)} "
              f"kayıtta ({', '.join(kimde[:3])}{'…' if len(kimde) > 3 else ''}). "
              f"Yazım hatası mı, yeni şema alanı mı? girdi.py'ye kaydet.")
    if not sessiz and len(GIRDI_DOSYALARI) > 1:
        print(f"  toplam: {len(hepsi)} nokta")
    return hepsi


# ⚠️ EK GÖLLER — Natural Earth'ün MODERN göl katmanının tarihî düzeltmesi
# Baraj gölü kuralı (uret_petek.py:73-88) maskeye FAZLA su giren hâli düzeltir:
# 1960 sonrası yapılmış bir baraj 1500 haritasında delik açmasın diye maskeden
# çıkarılmaz. Bu dosya TERS yöndeki hatayı düzeltir: tarihte VAR OLAN ama
# modern katmanda kurumuş/küçülmüş göller. Bugün tek kayıt var — Aral.
# Natural Earth Aral'ı kuruma SONRASI iki artık parça olarak taşıyor; oysa
# 1281-1923 boyunca ~68.000 km²'lik tek göldü. Motor farkı bilmediği için
# gölün yerini KARA sayıyor ve en yakın petek oraya emiliyor (MIMARI.md §2).
# ⚠️ ZAMAN BOYUTU YOK: motorun GOLLER birleşimi statiktir. Bu yüzden
# `gecerli` penceresi atlasın ufkunu KAPSAMIYORSA kayıt ALINMAZ — dar
# pencereli bir gölü statik uygulamak, düzeltmeye çalıştığı anakronizmin
# aynısını üretir. Zamana bağlı göl gerekirse önce motorda epok desteği
# (petek_epok deseni) kurulmalı.
GOL_DOSYASI = "goller.js"
UFUK = ("1281-01-01", "1923-10-29")


def oku_goller(sessiz=False):
    """Ek göl poligonları — GeoJSON `geometry` sözlüklerinin listesi.
    Dosya yoksa boş liste döner (motor onsuz da çalışır)."""
    yol = os.path.join(DATA, GOL_DOSYASI)
    if not os.path.exists(yol):
        return []
    js = io.open(yol, encoding="utf-8").read()
    m = re.search(r"window\.(GOLLER\w*)\s*=", js)
    if not m:
        raise ValueError(f"{GOL_DOSYASI}: window.GOLLER bulunamadı")
    alinan = []
    for g in _cevir(js, m.group(1)):
        gec = g.get("gecerli") or {}
        if gec.get("f", UFUK[0]) > UFUK[0] or gec.get("t", UFUK[1]) < UFUK[1]:
            print(f"  UYARI göl: '{g.get('ad')}' yalnız {gec.get('f')}→"
                  f"{gec.get('t')} arası geçerli, motor statik göl kullanıyor "
                  f"— ATLANDI (zamana bağlı göl için epok desteği gerekir)")
            continue
        alinan.append(g)
    if not sessiz and alinan:
        print(f"  {GOL_DOSYASI}: {len(alinan)} tarihî göl düzeltmesi "
              f"({', '.join(g['ad'].split('(')[0].strip() for g in alinan)})")
    return alinan


# ⚠️ KOŞU BEKÇİSİ — yedi üretimi yakan hata sınıfının TEKNİK kapağı
# Motor girdiyi koşunun BAŞINDA bir kez okur. Koşunun 13. dakikasında yapılan
# bir düzenleme çıktıya HİÇ girmez ama koşu temiz biter, denetim temiz çıkar
# ve harita sessizce veriden geri kalır. Bugün canlı örneği yaşandı:
#   21:53:33 üretim başladı
#   22:06:07 yerlesimler_afrika.js'e 108 satır eklendi (Mısır batı çölü vahaları)
#   → o koşunun çıktısında vahalar YOK, ama hiçbir denetim bunu göremez.
# Protokol "her oturum 'girdi sabit' desin" diyordu; yetmedi, çünkü duyuru
# mesaj katmanında ve mesaj kuyrukta bekleyebiliyor (bugün öyle oldu).
# Bekçi duyuruya değil ÖLÇÜME bağlar: parmak izi başta alınır, her yazımdan
# önce doğrulanır, tutmazsa çıktı YAZILMAZ.
# Kapsam: yalnız data/ girdileri. veri-kaynak/*.geojson (27 MB) kapsam dışı —
# depo verisi, oturumlar arasında değişmiyor ve her yazımda hashlemek pahalı.
def parmak_izi():
    """Okunan data/ girdilerinin sha256'ları — {dosya: özet}."""
    import hashlib
    iz = {}
    for ad in list(GIRDI_DOSYALARI) + [GOL_DOSYASI]:
        yol = os.path.join(DATA, ad)
        if os.path.exists(yol):
            iz[ad] = hashlib.sha256(io.open(yol, "rb").read()).hexdigest()
    return iz


def motor_izi():
    """Üretimi yapan KODUN sha256'ları — {dosya: özet}.

    `parmak_izi()` "çıktı hangi VERİDEN üretildi" sorusunu cevaplar; bu ise
    "hangi KODDAN üretildi" sorusunu. İkisi çıktıya birlikte yazılır.

    ⚠️ Neden gerekli — 31 Temmuz'da yaşandı. Koordinatör elindeki
    `donemler.js`in düzeltilmiş motordan mı çıktığını soramadı: dosya damgası
    koşuyu değil son dokunuşu gösteriyor, boyut kaba bir ipucu, ve sekiz
    denetimin "temiz" demesi kanıt değil — hiçbiri o soruyu sormuyor. Cevap
    ancak log arkeolojisiyle verilebildi. Damga çıktının İÇİNDE olursa soru
    dosyanın kendisinden cevaplanır.
    """
    import hashlib
    iz = {}
    for ad in ("uret_petek.py", "renkler.py", "girdi.py"):
        yol = os.path.join(os.path.dirname(os.path.abspath(__file__)), ad)
        if os.path.exists(yol):
            iz[ad] = hashlib.sha256(io.open(yol, "rb").read()).hexdigest()
    return iz


def motor_izi_dogrula(baslangic, nerede):
    """Motor KODU koşu sırasında değiştiyse ÖLDÜRÜR.

    `izi_dogrula`nın kod eksenindeki eşi. 1 Ağustos 2026'da ölçüldü: girdi
    koşunun BAŞINDA damgalanıp üç yerde doğrulanıyordu, kod ise SONUNDA
    diskten okunuyordu ve hiç doğrulanmıyordu. Koşu sırasında `renkler.py`
    düzenlense süreç etkilenmez (Python dosyayı başta belleğe alır) ama
    damga, koşunun ÇALIŞTIRMADIĞI kodun özetini yazardı — "çıktı hangi
    koddan üretildi" sorusuna sessizce yanlış cevap.

    📌 Sebep bilgi eksikliği değildi: `uret_petek.py`nin çıktı bölümünde
    aynı gerekçe GİRDİ için yazılıydı. Gerekçe yazılmış, bir argüman
    ötesine uygulanmamıştı.
    ⇒ Bir yöntemin bağışık olduğunu varsaydığın eksen, taramayı en çok
      atlayacağın eksendir.
    """
    simdi = motor_izi()
    degisen = [a for a in set(baslangic) | set(simdi)
               if baslangic.get(a) != simdi.get(a)]
    if degisen:
        raise SystemExit(
            "MOTOR KODU KOSU SIRASINDA DEGISTI: " + ", ".join(sorted(degisen))
            + " (" + nerede + " yazilmadan once olculdu). Cikti karisik"
            " koddan uretilmis olabilir ve damga da yalan soylerdi."
            " Kosu OLDURULDU -- bastan baslat.")


def izi_dogrula(baslangic, nerede):
    """Girdi koşu sırasında değiştiyse ÖLDÜRÜR. Sessiz geçiş yok."""
    simdi = parmak_izi()
    degisen = [a for a in set(baslangic) | set(simdi)
               if baslangic.get(a) != simdi.get(a)]
    if degisen:
        print("")
        print("  " + "=" * 66)
        print(f"  ✗ GİRDİ KOŞU SIRASINDA DEĞİŞTİ — '{nerede}' YAZILMADI")
        for a in sorted(degisen):
            print(f"      {a}")
        print("  Bu çıktı bayat olurdu: motor girdiyi koşunun başında bir kez")
        print("  okur, sonraki düzenlemeler çıktıya girmez ve hiçbir denetim")
        print("  bunu göremez. Girdiyi sabitleyip üretimi BAŞTAN koşturun.")
        print("  " + "=" * 66)
        raise SystemExit(1)


def yakin_ciftler(Y, esik=YAKINLIK_ESIK_KM):
    """Eşikten yakın nokta çiftleri — mükerrer/çelişen kayıt avı."""
    ciftler = []
    for i in range(len(Y)):
        for j in range(i + 1, len(Y)):
            d = km(Y[i]["lat"], Y[i]["lon"], Y[j]["lat"], Y[j]["lon"])
            if d < esik:
                ciftler.append((d, Y[i]["ad"], Y[j]["ad"]))
    ciftler.sort()
    return ciftler
