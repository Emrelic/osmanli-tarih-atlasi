# -*- coding: utf-8 -*-
"""DUYARLILIK SINAVI — hücre·yıl sıralaması `kur:` KAPSAMASINA ne kadar bağlı?

🔴 NİÇİN YAZILDI: `ARAC-BOSLUK-BOLGE-0903.py` şunu verdi —
      Güney Amerika      kur: %80,3   hücre·yıl 194.750  (2.)
      Sahra altı Afrika  kur: %10,0   hücre·yıl 189.100  (3.)
   Güney Amerika Afrika'yı %3 farkla geçti, ama `kur:` kapsaması 8 KAT iyi.
   ⇒ Bu bir BULGU mu, yoksa ÖLÇÜM YANLILIĞI mı? Sayıya bakarak
     ayırt edilemez. Bu araç onu ayırt etmeye çalışır.

YÖNTEM — iki uç senaryo, gerçek ikisinin ARASINDA:
   ALT SINIR  `kur:` yoksa nokta HER ZAMAN vardı  (bugünkü davranış)
              ⇒ erken kesitler olduğundan DOLU ⇒ hücre·yıl KÜÇÜK
   ÜST SINIR  `kur:` yoksa noktaya KENDİ BÖLGESİNİN MEDYAN `kur:`ı atanır
              ⇒ erken kesitler olduğundan BOŞ ⇒ hücre·yıl BÜYÜK

   Bir bölgenin sırası İKİ SENARYODA DA aynıysa o sıra SAĞLAM.
   Senaryolar arasında sıra değişiyorsa o sıra `kur:` kapsamasının
   ESERİDİR, veri hakkında bir şey söylemez.

kullanım:  py denetim/ARAC-BOSLUK-DUYARLILIK-0903.py [ızgara]
"""
import io, json, math, os, sys, collections, statistics
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, os.path.join(os.getcwd(), "arac"))
import girdi                                              # noqa

ADIM = float(sys.argv[1]) if len(sys.argv) > 1 else 2.0
YILLAR = [1300, 1400, 1500, 1600, 1700, 1800, 1900]
TAVAN = 200.0

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
BOL_AD = [b[0] for b in BOLGE]


def yil_of(s):
    try:
        return int(str(s).split("-")[0])
    except (ValueError, AttributeError, TypeError):
        return None


def bolgeleri(la, lo):
    return [ad for ad, g, ku, b, d in BOLGE if g <= la < ku and b <= lo < d]


Y = [y for y in girdi.yukle(sessiz=True)
     if isinstance(y.get("lat"), (int, float))]

# --- bolge medyan kur: (kur:i YAZILI olanlardan)
med = {}
for ad, g, ku, b, d in BOLGE:
    kl = [yil_of(y.get("kur")) for y in Y
          if g <= y["lat"] < ku and b <= y["lon"] < d and yil_of(y.get("kur"))]
    med[ad] = int(statistics.median(kl)) if kl else None

TUM = []
for y in Y:
    k = yil_of(y.get("kur"))
    bs = bolgeleri(y["lat"], y["lon"])
    # UST SINIR icin varsayilan kur:
    if k is not None:
        ust = k
    else:
        adaylar = [med[a] for a in bs if med.get(a)]
        ust = min(adaylar) if adaylar else None   # min = en TEMKINLI ust sinir
    TUM.append((y["lat"], y["lon"], k, yil_of(y.get("bit")), ust))

print("bağlı nokta: %d · `kur:` yazılı %d · üst-sınır ataması yapılan %d"
      % (len(TUM), sum(1 for t in TUM if t[2] is not None),
         sum(1 for t in TUM if t[2] is None and t[4] is not None)))
print("bölge medyan `kur:` —", {a: med[a] for a in BOL_AD if med[a]})
print()

from shapely.geometry import shape, Point                 # noqa
from shapely.ops import unary_union                       # noqa
from shapely.prepared import prep                         # noqa

gj = json.load(io.open("veri-kaynak/ne_10m_land.geojson", encoding="utf-8"))
hazir = prep(unary_union([shape(o["geometry"]) for o in gj["features"]]))
HUCRE, la = [], -56.0
while la < 78.0:
    lo = -180.0
    while lo < 180.0:
        if hazir.contains(Point(lo + ADIM / 2, la + ADIM / 2)):
            HUCRE.append((la + ADIM / 2, lo + ADIM / 2))
        lo += ADIM
    la += ADIM
HUC_BOLGE = [bolgeleri(a, o) for a, o in HUCRE]
print("kara hücresi: %d · ızgara %.1f°" % (len(HUCRE), ADIM))


def km(a, b, c, d):
    t = math.pi / 180.0
    s = (math.sin((c - a) * t / 2) ** 2 + math.cos(a * t) * math.cos(c * t)
         * math.sin((d - b) * t / 2) ** 2)
    return 6371.0 * 2 * math.asin(math.sqrt(min(1.0, s)))


def acik_kume(nok):
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
                dd = km(hla, hlo, p[0], p[1])
                if dd < en:
                    en = dd
                    if en <= TAVAN:
                        break
            if en <= TAVAN:
                break
        if en > TAVAN:
            out.add(i)
    return out


def egri(kur_ix):
    """kur_ix: TUM icinde hangi alan kur: sayilacak (2=alt sinir, 4=ust sinir)"""
    out = {}
    for yil in YILLAR:
        nok = [(t[0], t[1]) for t in TUM
               if (t[kur_ix] is None or t[kur_ix] <= yil)
               and (t[3] is None or t[3] > yil)]
        ak = acik_kume(nok)
        say = collections.Counter()
        for i in ak:
            for ad in HUC_BOLGE[i]:
                say[ad] += 1
        out[yil] = say
    return out


def trapez(e, ad):
    return sum((e[YILLAR[i]].get(ad, 0) + e[YILLAR[i + 1]].get(ad, 0)) / 2.0
               * (YILLAR[i + 1] - YILLAR[i]) for i in range(len(YILLAR) - 1))


print("ALT SINIR koşuluyor (bugünkü davranış)…")
alt = egri(2)
print("ÜST SINIR koşuluyor (kur: yoksa bölge medyanı)…")
ust = egri(4)
print()

a_sira = sorted(BOL_AD, key=lambda a: -trapez(alt, a))
u_sira = sorted(BOL_AD, key=lambda a: -trapez(ust, a))

print("%-24s %12s %4s   %12s %4s   %s"
      % ("BÖLGE", "ALT hücre·yıl", "sıra", "ÜST hücre·yıl", "sıra", "KAYMA"))
print("-" * 82)
oynak = []
for ad in a_sira:
    ai, ui = a_sira.index(ad) + 1, u_sira.index(ad) + 1
    k = ui - ai
    im = "🟢 SABİT" if k == 0 else ("🔴 %+d" % -k)
    if k != 0:
        oynak.append((ad, ai, ui))
    print("%-24s %12s %4d   %12s %4d   %s"
          % (ad, "{:,.0f}".format(trapez(alt, ad)).replace(",", "."), ai,
             "{:,.0f}".format(trapez(ust, ad)).replace(",", "."), ui, im))

print()
print("=" * 82)
print("HÜKÜM")
print("=" * 82)
if not oynak:
    print("🟢 HİÇBİR BÖLGE SIRA DEĞİŞTİRMEDİ — sıralama `kur:` kapsamasına")
    print("   DUYARSIZ ve SAĞLAM.")
else:
    print("🔴 %d BÖLGE İKİ SENARYO ARASINDA SIRA DEĞİŞTİRDİ:" % len(oynak))
    for ad, ai, ui in oynak:
        print("      %-24s alt=%d  üst=%d" % (ad, ai, ui))
    print()
    print("   ⇒ Bu bölgelerin sırası VERİ HAKKINDA DEĞİL, `kur:` KAPSAMASI")
    print("     hakkında bilgi taşıyor. Sıralama ölçütü olarak KULLANILAMAZ.")
print()
print("""📌 SINIR — bu sınavın kendisi de bir şey SÖYLEMEZ:
   ÜST SINIR senaryosu `kur:`ı olmayan noktaya bölge medyanını atar.
   Bu bir TAHMİNDİR, ölçüm değil — gerçek `kur:` değerleri araştırılana
   kadar doğru sıra BİLİNMİYOR. Sınav yalnız şunu söyler: sıra
   `kur:`a DUYARLI mı, değil mi.
   ⚠️ Ve `min()` kullanıldı (en temkinli üst sınır): bir hücre birden çok
   bölgeye düşüyorsa EN ERKEN medyan atanır, yani üst sınır OLABİLECEĞİNDEN
   DAHA DAR tutuldu. Gerçek üst sınır bundan büyüktür.""")
