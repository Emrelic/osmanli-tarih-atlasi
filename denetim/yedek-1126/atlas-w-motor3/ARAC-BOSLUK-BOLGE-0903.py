# -*- coding: utf-8 -*-
"""BÖLGE × KESİT BOŞLUK EĞRİSİ — `ARAC-BOSLUK-EGRISI-0903.py`nin bölge kırılımlı hâli.

🔴 NİÇİN (M-2482 / M-2483): ölçüt değişti.
      ESKİ   "bu bölgede kaç hücre açık"
      YENİ   "kaç hücre × KAÇ YIL açık"  = hücre·yıl
   Okyanusya kutusu 642 yılın 570'inde %87,5 açık ve 69 kasaba kaydı
   yalnız son 73 yıla hizmet ediyor. Sıralama TERSİNE DÖNEBİLİR.

🔴 `arac/` DONUK (koşu canlı) — bu dosya `denetim/` altında, orada değişti.

FARKI: özgün araç her kesit için yalnız SAYI döndürüyordu (`acik_say`).
Bu sürüm AÇIK HÜCRE KÜMESİNİ döndürür ⇒ tek taramada hem dünya toplamı
hem 17 bölge kırılımı çıkar. Kesit başına ikinci bir tarama YOK.

kullanım:  py denetim/ARAC-BOSLUK-BOLGE-0903.py [ızgara] [yıl1 yıl2 …]
örnek   :  py denetim/ARAC-BOSLUK-BOLGE-0903.py 2.0 1300 1400 1500 1600 1700 1800 1900
"""
import io, json, math, os, sys, collections
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.getcwd()
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi                                              # noqa

ADIM = float(sys.argv[1]) if len(sys.argv) > 1 else 2.0
YILLAR = [int(x) for x in sys.argv[2:]] or [1300, 1400, 1500, 1600, 1700, 1800, 1900]
TAVAN = 200.0

# `arac/_dunya_bosluk.py:92-110`dan BİREBİR alındı (elle yazılmadı, kopyalandı)
BOLGE = [
    ["Kuzey Amerika",         15,  72, -170, -52],
    ["Orta Amerika+Karayip",   7,  25, -118, -59],
    ["Güney Amerika",        -56,  13,  -82, -34],
    ["Kuzey Afrika",          20,  37,  -18,  35],
    ["Sahra altı Afrika",    -35,  20,  -18,  52],
    ["Avrupa",                35,  71,  -11,  40],
    ["Anadolu+Levant+İran",   25,  45,   25,  63],
    ["Arabistan",             12,  32,   34,  60],
    ["Orta Asya",             35,  50,   46,  88],
    ["Sibirya+Ural",          50,  78,   55, 145],
    ["Uzak Doğu Sibirya",     50,  73,  145, 180],
    ["Moğolistan+Tibet",      26,  53,   73, 120],
    ["Güney Asya",             5,  36,   60,  92],
    ["Doğu Asya",             18,  54,   92, 146],
    ["Güneydoğu Asya",       -11,  25,   92, 141],
    ["Avustralya",           -44, -10,  112, 154],
    ["Yeni Gine+Okyanusya",  -25,   0,  130, 180],
]


def yil_of(s):
    try:
        return int(str(s).split("-")[0])
    except (ValueError, AttributeError, TypeError):
        return None


Y = girdi.yukle(sessiz=True)
TUM = []
for y in Y:
    if not isinstance(y.get("lat"), (int, float)):
        continue
    TUM.append((y["lat"], y["lon"], yil_of(y.get("kur")), yil_of(y.get("bit"))))
print("bağlı nokta: %d · `kur:` yazılı %d · `bit:` yazılı %d"
      % (len(TUM), sum(1 for t in TUM if t[2]), sum(1 for t in TUM if t[3])))

from shapely.geometry import shape, Point                 # noqa
from shapely.ops import unary_union                       # noqa
from shapely.prepared import prep                         # noqa

gj = json.load(io.open("veri-kaynak/ne_10m_land.geojson", encoding="utf-8"))
kara = unary_union([shape(o["geometry"]) for o in gj["features"]])
hazir = prep(kara)
print("kara maskesi yüklendi · ızgara %.1f° · tavan %d km" % (ADIM, TAVAN))

HUCRE = []
la = -56.0
while la < 78.0:
    lo = -180.0
    while lo < 180.0:
        if hazir.contains(Point(lo + ADIM / 2, la + ADIM / 2)):
            HUCRE.append((la + ADIM / 2, lo + ADIM / 2))
        lo += ADIM
    la += ADIM
print("kara hücresi: %d" % len(HUCRE))

# ---- her hücreye bölge etiketi (ÇOKLU olabilir — kutular ÖRTÜŞÜYOR)
HUC_BOLGE = []
ortusen = 0
bolgesiz = 0
for hla, hlo in HUCRE:
    ait = [ad for ad, g, ku, b, d in BOLGE if g <= hla < ku and b <= hlo < d]
    if len(ait) > 1:
        ortusen += 1
    if not ait:
        bolgesiz += 1
    HUC_BOLGE.append(ait)

print("🔴 ÖRTÜŞME ÖLÇÜMÜ — kutular ayrık DEĞİL:")
print("   birden çok bölgeye düşen hücre: %d (%.1f%%)"
      % (ortusen, 100.0 * ortusen / len(HUCRE)))
print("   HİÇBİR bölgeye düşmeyen hücre : %d (%.1f%%)"
      % (bolgesiz, 100.0 * bolgesiz / len(HUCRE)))
if ortusen:
    cift = collections.Counter()
    for ait in HUC_BOLGE:
        if len(ait) > 1:
            for i in range(len(ait)):
                for j in range(i + 1, len(ait)):
                    cift[tuple(sorted((ait[i], ait[j])))] += 1
    print("   en çok örtüşen çiftler:")
    for (a, b), n in cift.most_common(6):
        print("      %-24s ↔ %-24s %4d hücre" % (a, b, n))
print("   ⇒ Bölge sütunları TOPLANAMAZ; dünya toplamı ayrı hesaplanıyor.")
print()


def km(a, b, c, d):
    t = math.pi / 180.0
    s = (math.sin((c - a) * t / 2) ** 2 + math.cos(a * t) * math.cos(c * t)
         * math.sin((d - b) * t / 2) ** 2)
    return 6371.0 * 2 * math.asin(math.sqrt(min(1.0, s)))


def acik_kume(nok):
    """AÇIK hücrelerin INDEKS kümesi — özgün araç yalnız SAYI döndürüyordu."""
    kusak = {}
    for p in nok:
        kusak.setdefault(int(p[0] // 5), []).append(p)
    out = set()
    for i, (hla, hlo) in enumerate(HUCRE):
        en = 1e9
        for k in range(int(hla // 5) - 1, int(hla // 5) + 2):
            for p in kusak.get(k, ()):
                if abs(p[1] - hlo) > 4.0:
                    continue
                d = km(hla, hlo, p[0], p[1])
                if d < en:
                    en = d
                    if en <= TAVAN:
                        break
            if en <= TAVAN:
                break
        if en > TAVAN:
            out.add(i)
    return out


# ---- kesitler
BOL_AD = [b[0] for b in BOLGE]
bol_hucre = {ad: sum(1 for a in HUC_BOLGE if ad in a) for ad in BOL_AD}
kesit = {}          # yil -> {bolge: acik_sayi}, ayrica "__DUNYA__"
for yil in YILLAR:
    nok = [(t[0], t[1]) for t in TUM
           if (t[2] is None or t[2] <= yil) and (t[3] is None or t[3] > yil)]
    ak = acik_kume(nok)
    say = collections.Counter()
    for i in ak:
        for ad in HUC_BOLGE[i]:
            say[ad] += 1
    say["__DUNYA__"] = len(ak)
    kesit[yil] = say
    print("  kesit %d bitti · nokta %d · açık %d (%.1f%%)"
          % (yil, len(nok), len(ak), 100.0 * len(ak) / len(HUCRE)))

# zamansız (bugünkü resmî ölçüt)
ak0 = acik_kume([(t[0], t[1]) for t in TUM])
say0 = collections.Counter()
for i in ak0:
    for ad in HUC_BOLGE[i]:
        say0[ad] += 1
say0["__DUNYA__"] = len(ak0)
print("  zamansız bitti · açık %d (%.1f%%)" % (len(ak0), 100.0 * len(ak0) / len(HUCRE)))
print()


def trapez(ad):
    """hücre·yıl ≈ kesitlerin trapez toplamı (M-2483: kaba yeter)"""
    t = 0.0
    for i in range(len(YILLAR) - 1):
        y1, y2 = YILLAR[i], YILLAR[i + 1]
        t += (kesit[y1].get(ad, 0) + kesit[y2].get(ad, 0)) / 2.0 * (y2 - y1)
    return t


# ---- TABLO
bas = "%-24s %6s" % ("BÖLGE", "kara")
for y in YILLAR:
    bas += " %6d" % y
bas += " %12s %9s" % ("HÜCRE·YIL", "zamansız")
print(bas)
print("-" * len(bas))

satir = []
for ad in BOL_AD:
    satir.append((trapez(ad), ad))
satir.sort(reverse=True)

for hy, ad in satir:
    s = "%-24s %6d" % (ad, bol_hucre[ad])
    for y in YILLAR:
        s += " %6d" % kesit[y].get(ad, 0)
    s += " %12s %9d" % ("{:,.0f}".format(hy).replace(",", "."), say0.get(ad, 0))
    print(s)

print("-" * len(bas))
s = "%-24s %6d" % ("DÜNYA (örtüşmesiz)", len(HUCRE))
for y in YILLAR:
    s += " %6d" % kesit[y]["__DUNYA__"]
s += " %12s %9d" % ("{:,.0f}".format(trapez("__DUNYA__")).replace(",", "."),
                    say0["__DUNYA__"])
print(s)

print()
print("=" * 76)
print("🔴 BU ÖLÇÜMÜN SÖYLEMEDİKLERİ — sınır beyanı (M-2483 ③)")
print("=" * 76)
print("""
① BOŞLUĞUN DOĞRU MU EKSİK Mİ olduğunu SÖYLEMEZ.
   Sibirya'da 1300'ün boş olması GERÇEKTİR (Emre: "devasa boşluklar
   olacaksa olsun"). Afrika'da kadîm yerleşim eksikliği KUSUR olabilir.
   İkisi bu tabloda AYNI sayıyla görünür. Ayrımı ancak KAYNAK söyler —
   ve bu araç kaynağa bakmaz. `§11`: ölçüm doğru, çıkarım yanlış.

② BÖLGE SÜTUNLARI TOPLANAMAZ — kutular ÖRTÜŞÜYOR (yukarıda ölçüldü).
   Bir hücre hem "Doğu Asya" hem "Moğolistan+Tibet" sayılabilir.
   Dünya satırı ayrı ve örtüşmesiz hesaplanıyor.

③ `kur:` YAZILI OLAN NOKTA SAYISI SINIRLIYOR. `kur:` yazılmamış bir
   nokta bütün kesitlerde VAR sayılır ⇒ erken kesitler OLDUĞUNDAN
   DOLU görünür. Yani bu tablo boşluğu OLDUĞUNDAN AZ gösterir; gerçek
   hücre·yıl daha büyüktür. Yön biliniyor, büyüklüğü ÖLÇÜLMEDİ.

④ 200 km TAVANI motorun `TAVAN_KM`iyle aynı ama HÜCRE MERKEZİNDEN
   ölçülüyor; motor petek geometrisiyle çalışır. Yakın ama AYNI DEĞİL.

⑤ 2° ızgara: kutup ve ekvator hücreleri AYNI ağırlıkta sayılıyor —
   yüksek enlemde hücre alanı küçük olduğu için Sibirya/Kanada
   OLDUĞUNDAN AĞIR görünür. Alan ağırlıklı değil, HÜCRE sayılı bir
   ölçüttür. (M-2483 "2° yeter" dedi; bu onun bedeli.)
""")
