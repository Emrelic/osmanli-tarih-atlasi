# -*- coding: utf-8 -*-
"""`kur:` KAPSAMASI BÖLGE BÖLGE — hücre·yıl tablosunun GÜVENİLİRLİK ÖLÇÜSÜ.

🔴 NİÇİN: `ARAC-BOSLUK-BOLGE-0903.py` bir noktanın `kur:`ı YOKSA onu
BÜTÜN kesitlerde VAR sayar. Bir bölgede `kur:` hiç yazılmamışsa o
bölgenin eğrisi YAPAY OLARAK DÜZ çıkar — ve "burada geç doluluk yok"
diye okunur. Oysa ölçülen şey "kur: yazılmamış"tır.

⇒ Hücre·yıl tablosunun her satırı, o bölgenin `kur:` kapsamasıyla
BİRLİKTE okunmalı. Düşük kapsama = düşük güven.
"""
import sys, os
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, os.path.join(os.getcwd(), "arac"))
import girdi                                              # noqa

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


Y = [y for y in girdi.yukle(sessiz=True)
     if isinstance(y.get("lat"), (int, float))]
print("bağlı nokta:", len(Y))
print()

print("%-24s %7s %7s %7s   %s" % ("BÖLGE", "nokta", "kur:", "%", "kur: MEDYAN / EN GEÇ"))
print("-" * 84)
satir = []
for ad, g, ku, b, d in BOLGE:
    ic = [y for y in Y if g <= y["lat"] < ku and b <= y["lon"] < d]
    kl = sorted(yil_of(y.get("kur")) for y in ic if yil_of(y.get("kur")))
    oran = 100.0 * len(kl) / len(ic) if ic else 0.0
    med = kl[len(kl) // 2] if kl else None
    enge = kl[-1] if kl else None
    satir.append((oran, ad, len(ic), len(kl), med, enge))

for oran, ad, n, nk, med, enge in sorted(satir, key=lambda r: r[0]):
    guven = ("🔴 DÜŞÜK" if oran < 10 else
             "🟡 ORTA " if oran < 30 else "🟢 İYİ  ")
    print("%-24s %7d %7d %6.1f%%  %s  medyan=%s  en geç=%s"
          % (ad, n, nk, oran, guven, med or "—", enge or "—"))

print()
print("=" * 84)
print("""🔴 NASIL OKUNUR — hücre·yıl tablosunun her satırı BU sütunla birlikte okunur

  `kur:` kapsaması DÜŞÜK bir bölgede eğrinin DÜZ çıkması iki şey
  demek OLABİLİR ve bu araç ikisini AYIRT EDEMEZ:
     ① o bölgede gerçekten geç doluluk YOK          (bulgu)
     ② o bölgede `kur:` yazılmamış                   (veri eksikliği)

  ⇒ Kapsaması düşük bir bölgenin hücre·yıl'ı OLDUĞUNDAN KÜÇÜK'tür.
    Yani sıralamada OLDUĞUNDAN AŞAĞIDA görünür.
  ⇒ Sıralamada YUKARI çıkan bir bölge GERÇEKTEN yukarıdadır (kur:
    eklenmesi onu daha da yukarı taşır, aşağı taşımaz). Ama AŞAĞIDA
    görünen bir bölge için aynı şey SÖYLENEMEZ.

📌 Yani bu tablo bir ALT SINIR verir, kesin sıra değil.""")
