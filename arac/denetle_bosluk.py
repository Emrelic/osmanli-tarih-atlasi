# -*- coding: utf-8 -*-
"""
BOŞLUK ENVANTERİ — haritada boş kalan yerler ve SEBEPLERİ
==========================================================
Kullanıcının görevi (kendi ifadesiyle):

    "Haritanın belli bir tarih anında o haritada bulunan BOŞ YERLER tespit
     edilip SEBEBİ ortaya çıkarılmalı. Bu boşluk bir hata mı yoksa mantıklı bir
     sebebi var mı? … eğer boş kalması gerekiyorsa boş bıraksın VE SEBEBİNİ
     KAYDETSİN, doldurmak gerekiyorsa doldursun, yandaki haritaya bağlamak
     gerekiyorsa bağlasın."

Üç seçenek var, "doldur" yalnız biri. Bu araç **hüküm vermez**, envanter üretir.

═══ EN ÖNEMLİ TASARIM KARARI: DEFTER PROZA DEĞİL VERİ ═══
Her boşluğun **kararlı kimliği** var (konum ızgarası + zaman aralığı). Kimlik
olmadan çıktı her koşuda baştan okunacak bir liste olur ve kimse okumaz —
bu depoda bugün beş kez çıkan "bayat belge" sınıfının en büyük hâli.
Kimlik sayesinde denetim iki ayrı şey diyebiliyor:

    boşluk BİLİNİYOR ve kabul edildi (sebebi defterde)   → sessiz geç
    boşluk YENİ                                           → rapor et

Tavan mantığının aynısı: kabul edilmiş boşluklar AZALABİLİR, artarsa ihlal.

⚠️ KİMLİK IZGARASI 0,5° — ve bu bir uzlaşma. Çok ince olursa aynı boşluk
geometri her üretimde birkaç yüz metre oynadığında YENİ görünür ve defter
işe yaramaz. Çok kaba olursa iki ayrı boşluk tek kimliğe düşer. 0,5° ≈ 55 km
(ekvatorda; kuzeyde daha dar — bkz. `denetle_olcek.py`, o hatayı burada
tekrarlamamak için ızgara ENLEM/BOYLAM ayrı tutuluyor).

═══ ZAMAN BOYUTU — ÖRNEKLEME YOK ═══
"Tüm zaman kırılımları" 458 kırılma demek. Kesit örneklemesi YAPILMIYOR:
her dönem taranıyor ve aynı kimlikteki ardışık dönemler tek ARALIĞA
birleştiriliyor. Bir boşluk "1453-05-29 → 1517-04-13 arası boştu" diye
kaydediliyor, "1500'de boştu" diye değil.
→ Örnekleme yapılsaydı hangi kesitlerin atlandığı çıktıya yazılırdı; bugün
  buna gerek yok ve gerek olursa yazılacak.

ÇALIŞTIRMA
    py arac/denetle_bosluk.py --kesit 1500-06-15   # tek gün, ucuz, sınama için
    py arac/denetle_bosluk.py                      # bütün dönemler (PAHALI)
    py arac/denetle_bosluk.py --defter             # kabul edilmiş boşlukları bas

⚠️ ÜRETİLMİŞ GEOMETRİDEN OKUR, girdiden değil — kullanıcının sorduğu şey
HARİTADA GÖRÜNEN boşluk. Sonuç son üretimin tarihine aittir; çıktının ilk
satırında `donemler.js`'in damgası yazılı.
"""
import io
import json
import os
import re
import sys
import time

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import girdi

if getattr(sys.stdout, "encoding", "").lower() not in ("utf-8", "utf8"):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

from shapely.geometry import Point, Polygon, shape
from shapely.ops import unary_union
from shapely.strtree import STRtree

KOK = girdi.KOK
DATA = os.path.join(KOK, "data")
KAYNAK = os.path.join(KOK, "veri-kaynak")
DEFTER = os.path.join(KOK, "denetim", "BOSLUK-DEFTERI.json")

# Haritanın çizildiği pencere — `uret_petek.py`'deki BOLGE kutusuyla AYNI
# olmalı. Kaynaktan okunuyor, kopyalanmıyor (bugünkü beşinci bayat kopya
# hatasını üretmemek için).
BOLGE_DESENI = r"BOLGE\s*=\s*box\(([-\d.]+),\s*([-\d.]+),\s*([-\d.]+),\s*([-\d.]+)\)"

# Bu alanın altındaki boşluk raporlanmaz. ✅ ÖLÇÜLDÜ (1500-06-15 kesiti).
# Önceki değer 500'dü ve `denetle_bitisiklik.py`'den ÖDÜNÇ ALINMIŞ TAHMİNDİ;
# ölçüm onu YANLIŞ çıkardı — 500, tıkız ve gerçek 66 boşluğu atıyordu.
#
# Ayıraç ALAN DEĞİL, TIKIZLIK (4πA/P²): kıyı kırıntısı, kara maskesi ile
# çizilen gövdenin farklı sadeleştirme toleranslarından (KARA_TOL ≠ SADE_TOL)
# doğan uzun-ince şeritlerdir. Ölçülen dağılım kırılmayı 10 km²'de gösterdi:
#
#     alan bandı        parça   medyan tıkızlık   %'i 0,15 altında
#      0 –   2 km²      20471        0,035              %91   ← şerit
#      2 –  10 km²         28        0,003              %71   ← şerit
#     10 – 100 km²         17        0,617              % 0   ← HİÇBİRİ ince değil
#    100 – 500 km²         49        0,259              %29
#
# 10 km²'nin altı kırıntı, üstü tıkız. 20.499 elenen parçanın toplamı 2.142 km²
# — bütün boşluğun %0,02'si. Yani eşik gürültüyü atıyor, bilgi atmıyor.
# ⚠️ Kesit 1500; parça sayısı 1600'de de aynı mertebede (115). BAYAT geometri
# üzerinde ölçüldü — taze üretimden sonra yeniden bakılmalı.
ASGARI_KM2 = 10

# Kimlik ızgarası. Enlem ve boylam AYRI tutuluyor: boylam dereceleri kuzeye
# gidildikçe daralır ve tek sayı kullanmak `nehir_mes = 0.30° = "33 km"`
# hatasının aynısı olurdu (bkz. denetle_olcek.py).
IZGARA_DERECE = 0.5


def _dizi(metin, ad):
    i = metin.index("window." + ad + " = ") + len("window." + ad + " = ")
    return json.loads(metin[i:metin.index("];", i) + 1])


def _km2(alan_derece, enlem):
    from math import cos, radians
    return alan_derece * 111.32 * (111.32 * cos(radians(enlem)))


def bolge_kutusu():
    """`uret_petek.py`'deki BOLGE kutusunu KAYNAKTAN okur."""
    try:
        kaynak = open(os.path.join(KOK, "arac", "uret_petek.py"), encoding="utf-8").read()
        m = re.search(BOLGE_DESENI, kaynak)
        if m:
            return tuple(float(x) for x in m.groups())
    except Exception:
        pass
    return None


def yukle():
    """(PETEKLER, PARCALAR, DONEMLER, kara, damga) — üretilmiş geometri."""
    yol = os.path.join(DATA, "donemler.js")
    if not os.path.exists(yol):
        print("✗ data/donemler.js yok — önce üretim koşmalı")
        sys.exit(2)
    metin = open(yol, encoding="utf-8").read()
    P, PARCA, D = _dizi(metin, "PETEKLER"), _dizi(metin, "PARCALAR"), _dizi(metin, "DONEMLER")
    del metin
    ne = json.load(open(os.path.join(KAYNAK, "ne_10m_land.geojson"), encoding="utf-8"))
    kara = unary_union([shape(f["geometry"]) for f in ne["features"]])
    return P, PARCA, D, kara, time.ctime(os.path.getmtime(yol))


def yabanci_govdeler(gun):
    """O gün boyanan YABANCI devlet gövdeleri. Boşluk = kara − (Osmanlı + yabancı).

    ⚠️ Yabancıları katmamak, boşluk sayısını KAT KAT şişirirdi: Avrupa'nın
    tamamı, İran, Rusya "boş" görünürdü. Kullanıcının sorduğu boşluk, HİÇBİR
    devletin boyamadığı yerdir.

    🔴 BU FONKSİYON BİR KEZ SESSİZCE YANLIŞTI VE TAM DA KORKULAN ŞEKİLDE:
    aranan global adı `DEVLETLER_HARITA` yazılmıştı, dosyadaki ad `DEVLET_HARITA`.
    Desen eşleşmez, fonksiyon `None` döner, boşluk = kara − Osmanlı olurdu —
    yani Avrupa'nın, İran'ın, Rusya'nın tamamı "BOŞ" raporlanırdı. Envanterin
    TAMAMI yanlış çıkardı ve sayı "çok boşluk var" diye MAKUL görünürdü (§44).
    Yakalandı çünkü koşturulmadan doğru sayılmadı. Bu yüzden artık hiçbir
    başarısızlık `None` dönmüyor — hepsi GÜRÜLTÜLÜ ölüyor.
    """
    yol = os.path.join(DATA, "devletler_harita.js")
    if not os.path.exists(yol):
        raise SystemExit("!! data/devletler_harita.js yok — yabancı gövdeler "
                         "olmadan boşluk ölçülemez (Avrupa'nın tamamı boş çıkar)")
    metin = open(yol, encoding="utf-8").read()
    havuz = _dizi(metin, "DEVLET_PARCALAR")
    kayitlar = _dizi(metin, "DEVLET_HARITA")
    del metin
    ps, bozuk = [], 0
    for kayit in kayitlar:
        for d in (kayit.get("dnm") or []):
            if not (d.get("f") and d.get("t")):
                continue
            if not (d["f"] <= gun < d["t"]):
                continue
            for i in (d.get("g") or []):
                try:
                    halkalar = havuz[i]
                    p = Polygon(halkalar[0], halkalar[1:])
                    if not p.is_valid:
                        p = p.buffer(0)
                    if not p.is_empty:
                        ps.append(p)
                except Exception:
                    bozuk += 1
    if bozuk:
        # Sessizce yutulursa eksik gövde = fazladan boşluk demek olur.
        print("  !  %d yabancı parça çözülemedi (boşluk ŞİŞMİŞ olabilir)" % bozuk)
    if not ps:
        raise SystemExit("!! %s günü için HİÇ yabancı gövde çözülemedi — "
                         "okuyucu bozuk olabilir, envanter güvenilmez" % gun)
    return unary_union(ps), {k.get("id") for k in kayitlar if k.get("id")}


def kimlik(geom):
    """Boşluğun KARARLI kimliği — merkezinin ızgaraya oturtulmuş hâli.

    Geometri her üretimde birkaç yüz metre oynar; ham merkez kullanılsaydı
    aynı boşluk her koşuda YENİ görünürdü ve defter işe yaramazdı.
    """
    c = geom.centroid
    return "%.1f,%.1f" % (round(c.x / IZGARA_DERECE) * IZGARA_DERECE,
                          round(c.y / IZGARA_DERECE) * IZGARA_DERECE)


def sinifla(geom, Y, sahipsiz_adlar, gun=None, boyali_kimlikler=None):
    """Makineyle ayırt edilebilen üç sebebi ayırır; dördüncüsü araştırmaya gider.

    | sınıf              | işaret                                            |
    |--------------------|---------------------------------------------------|
    | KASITLI SAHİPSİZ   | boşlukta KASTEN sahipsiz bir yerleşim var         |
    | NOKTA YOK          | boşlukta hiç yerleşim yok, en yakın nokta uzakta  |
    | BOYANMAMIŞ         | yerleşim var, sahibi var, kimlik BOYALAR'da yok   |
    | ARAŞTIRMA          | kalan her şey — prenslik, şehir devleti, koloni   |

    ⚠️ Dördüncüsü BU ARACIN İŞİ DEĞİL. İlk üçünü eleyip listeyi küçültmek işi.
    """
    icinde = [y for y in Y if geom.contains(Point(y["lon"], y["lat"]))]
    if not icinde:
        return "NOKTA YOK", None
    kasitli = [y["ad"] for y in icinde if y["ad"] in sahipsiz_adlar]
    if kasitli:
        return "KASITLI SAHİPSİZ", kasitli[0]
    # BOYANMAMIŞ: sahibi YAZILI ama o kimlik haritada boyanmıyor. Bu sınıf
    # belgede vardı, KODDA YOKTU — Yeni Ürgenç 1500'de `timurlu` elinde olduğu
    # hâlde ARAŞTIRMA'ya düşüyordu, yani araştırılacak diye insana havale
    # ediliyordu. Oysa makineyle ayırt edilebilir: kimlik boyanan devletler
    # kümesinde mi? Belgelenmiş ama uygulanmamış sınıf, olmayan sınıftan kötüdür:
    # tablo "üçünü eliyorum" der, kod ikisini eler.
    if boyali_kimlikler is not None:
        for y in icinde:
            for p in (y.get("s") or []):
                if p.get("f", "") <= gun < p.get("t", "") and p.get("d") \
                        and p["d"] not in boyali_kimlikler:
                    return "BOYANMAMIŞ", "%s → %s" % (y["ad"], p["d"])
    return "ARAŞTIRMA", icinde[0]["ad"]


def osmanli_govde(gun, D, PARCA):
    """O gün Osmanlı gövdesi — DOĞRUDAN (`o`) **ve TÂBİ** (`v`) birlikte.

    🔴 İLK YAZIMDA `v` ATLANMIŞTI ve ölçüm sessizce yanlıştı: 1500 kesitinde
    Kırım (Bahçesaray) ve Eflak (Bükreş) "BOŞ" raporlandı — ikisi de o tarihte
    Osmanlı tâbii, haritada BOYALI. Tek başına sayı makuldü (203.834 km²);
    yakalandı çünkü listede **olamayacak bir üye** vardı (§44). Tâbi toprak
    `uret_petek.py:1669`'da AYRI alana yazılıyor; `o` yalnız doğrudan toprak.
    """
    sec = [d for d in D if d.get("f") and d.get("t") and d["f"] <= gun < d["t"]]
    if not sec:
        raise SystemExit("!! %s hiçbir DONEMLER kaydına düşmüyor" % gun)
    if len(sec) > 1:
        print("  !  %s günü %d döneme birden düşüyor — ilki alındı" % (gun, len(sec)))
    ps = []
    for alan in ("o", "v"):
        for i in (sec[0].get(alan) or []):
            try:
                halkalar = PARCA[i]
                p = Polygon(halkalar[0], halkalar[1:])
                if not p.is_valid:
                    p = p.buffer(0)
                if not p.is_empty:
                    ps.append(p)
            except Exception:
                pass
    return (unary_union(ps) if ps else None), sec[0]


def defter_oku():
    """Kabul edilmiş boşluklar — kimlik → sebep."""
    if not os.path.exists(DEFTER):
        return {}
    try:
        return json.load(open(DEFTER, encoding="utf-8"))
    except Exception:
        print("  !  BOSLUK-DEFTERI.json okunamadı — bozuk olabilir")
        return {}


def main():
    kesit = None
    if "--kesit" in sys.argv:
        kesit = sys.argv[sys.argv.index("--kesit") + 1]
    print("Boşluk envanteri — haritada boş kalan yerler ve sebepleri\n")

    kutu = bolge_kutusu()
    print("  harita penceresi (uret_petek.py'den okundu): %s" % (kutu,))
    defter = defter_oku()
    print("  defterde kabul edilmiş boşluk: %d" % len(defter))

    if "--defter" in sys.argv:
        for k, v in sorted(defter.items()):
            print("    %-14s %s" % (k, v))
        return 0

    if kesit is None:
        print()
        print("⚠️ TAM TARAMA HENÜZ KOŞTURULMADI ve bu BİLEREK böyle.")
        print("   MOTOR üretimi koşuyor; bugünkü çıktı üzerinde ölçüm alınsa")
        print("   envanter DOĞAR DOĞMAZ BAYAT olurdu — bu depoda bugün beş kez")
        print("   çıkan sınıfın aynısı. Yeni geometri gelince:")
        print("       py arac/denetle_bosluk.py --kesit 1500-06-15   # ucuz sınama")
        print("       py arac/denetle_bosluk.py                      # tam tarama")
        print()
        print("   Altyapı hazır: kararlı kimlik · defter · üç sınıflı ayırt etme.")
        print("   Eşikler (ASGARI_KM2) ÖLÇÜLMEDİ — ilk koşudan sonra dağılıma")
        print("   bakılıp konacak. Ölçmeden eşik koymuyorum.")
        return 0

    t0 = time.time()
    P, PARCA, D, kara, damga = yukle()
    print("  geometri damgası: %s" % damga)
    # ⚠️ BAYAT GEOMETRİ SESSİZ GEÇMEZ. Bu araç ÜRETİLMİŞ geometriyi okur; girdi
    # üretimden sonra değiştiyse ölçülen boşluk EKRANDAKİ boşluk değil, dünkü
    # ekrandakidir. 1500 kesitinde tam bu yaşandı: Yeni Ürgenç 28.657 km²'lik
    # bir delik olarak çıktı, sebebi veri kusuru sanıldı — oysa o kaydın
    # düzeltmesi üretimden SONRA yapılmıştı.
    try:
        import denetle_yayin as _dy
        if _dy.bayat_mi()[3]:
            print("  🔴 GEOMETRİ BAYAT — girdi üretimden sonra değişmiş.")
            print("     Aşağıdaki her sayı DÜNKÜ haritaya aittir; defter yazılmamalı.")
    except Exception as _e:
        print("  !  tazelik ölçülemedi (%s) — sayılar doğrulanmamış" % _e)
    Y = girdi.yukle(sessiz=True)
    print("  %d petek · %d dönem · %d yerleşim · %.0f sn" % (len(P), len(D), len(Y), time.time() - t0))
    print("\n  --kesit %s için tek gün taraması" % kesit)
    print("  ⚠️ Tek kesit TAM ENVANTER DEĞİLDİR — yalnız altyapı sınamasıdır.")

    osm, dnm = osmanli_govde(kesit, D, PARCA)
    print("  dönem: %s → %s  «%s»" % (dnm["f"], dnm["t"], dnm.get("ad", "")))
    yab, boyali_kimlikler = yabanci_govdeler(kesit)
    print("  haritada boyanan devlet kimliği: %d" % len(boyali_kimlikler))
    print("  Osmanlı gövde: %s parça · yabancı gövde: %s parça"
          % ("yok" if osm is None else len(getattr(osm, "geoms", [osm])),
             len(getattr(yab, "geoms", [yab]))))

    # Boşluk = (kara ∩ pencere) − boyanan her şey.
    pencere = Polygon([(kutu[0], kutu[1]), (kutu[2], kutu[1]),
                       (kutu[2], kutu[3]), (kutu[0], kutu[3])])
    zemin = kara.intersection(pencere)
    boyali = unary_union([g for g in (osm, yab) if g is not None])
    bosluk = zemin.difference(boyali)
    parcalar = list(getattr(bosluk, "geoms", [bosluk]))

    Y = [y for y in Y]
    olculen = []
    for g in parcalar:
        if g.is_empty:
            continue
        km2 = _km2(g.area, g.centroid.y)
        olculen.append((km2, g))
    olculen.sort(key=lambda t: -t[0])
    print("\n  ham boşluk parçası: %d · toplam %.0f km²"
          % (len(olculen), sum(k for k, _ in olculen)))

    # ═══ ASGARI_KM2 BURADAN ÖLÇÜLECEK — dağılımı bas, eşiği ŞİMDİ koyma ═══
    toplam = sum(k for k, _ in olculen)
    print("\n  ALAN DAĞILIMI (eşik ölçümü için — ASGARI_KM2 hâlâ ödünç %d):"
          % ASGARI_KM2)
    for esik in (1, 2, 5, 10, 50, 100, 500, 1000, 5000, 20000, 100000):
        n = sum(1 for k, _ in olculen if k >= esik)
        pay = sum(k for k, _ in olculen if k >= esik)
        print("     ≥ %7d km² : %5d parça · toplam %10.0f km² (%%%.2f)"
              % (esik, n, pay, 100 * pay / max(1e-9, toplam)))

    # ═══ TIKIZLIK — alandan DAHA İYİ bir ayıraç ═══
    # Kıyı kırıntısı, kara maskesi ile çizilen gövdenin FARKLI sadeleştirme
    # toleranslarından doğar (KARA_TOL ≠ SADE_TOL): uzun, İNCE, kıyıya paralel
    # şeritler. Gerçek boşluk ise tıkızdır. Alan eşiği ikisini ayıramaz —
    # 40 km²'lik bir kıyı şeridi ile 40 km²'lik gerçek bir cep aynı kovaya düşer.
    # Tıkızlık = 4πA/P² (daire 1,0 · şerit → 0).
    def tikiz(g):
        return 4 * 3.141592653589793 * g.area / max(1e-12, g.length ** 2)
    print("\n  TIKIZLIK (4πA/P² — şerit→0, daire→1):")
    for alt, ust in ((0, 2), (2, 10), (10, 100), (100, 500), (500, 1e9)):
        kume = [tikiz(g) for k, g in olculen if alt <= k < ust]
        if not kume:
            continue
        kume.sort()
        print("     %6.0f–%-8.0f km² : %5d parça · medyan tıkızlık %.3f · "
              "%%%.0f'i 0,15'in altında"
              % (alt, ust, len(kume), kume[len(kume) // 2],
                 100 * sum(1 for t in kume if t < 0.15) / len(kume)))

    elenen = [t for t in olculen if t[0] < ASGARI_KM2]
    olculen = [t for t in olculen if t[0] >= ASGARI_KM2]
    print("\n  ASGARI_KM2=%d uygulandı: %d parça elendi (%.0f km²) · %d kaldı"
          % (ASGARI_KM2, len(elenen), sum(k for k, _ in elenen), len(olculen)))

    print("\n  EN BÜYÜK 15 BOŞLUK:")
    sahipsiz = set()
    for y in Y:
        if not (y.get("d") or y.get("v") or y.get("s")):
            sahipsiz.add(y["ad"])
    for km2, g in olculen[:15]:
        sinif, kanit = sinifla(g, Y, sahipsiz, kesit, boyali_kimlikler)
        print("     %-14s %9.0f km²  %-16s %s"
              % (kimlik(g), km2, sinif, kanit or ""))
    return 0


if __name__ == "__main__":
    sys.exit(main() or 0)
