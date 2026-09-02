# -*- coding: utf-8 -*-
"""DÜNYA BOŞLUK HARİTASI — "bütün yerleşimleri bitirelim" ölçülebilir hâle.

🔴 NİÇİN BİR ÖLÇÜT GEREKİYOR
"1281-1923 arası dünyadaki BÜTÜN yerleşimler" bitmeyen bir listedir —
o çağda dünyada yüz binlerce köy vardı ve atlas onları çizmiyor.
Atlasın ihtiyacı **kapsama**dır, tamlık değil: `§2` gereği noktasız
bölge EN YAKIN PETEĞE emilir ve O PETEĞİN SAHİBİYLE boyanır.

⇒ ÖLÇÜT MOTORUN KENDİ PARAMETRESİNDEN gelir:
   `TAVAN_KM` = 200 (hepsi) ⇒ bir nokta en çok ~200 km'ye uzanır.
   Bir kara hücresi en yakın noktadan 200 km'den uzaksa HİÇBİR peteğe
   girmez — boyanmaz. 200 km'den yakınsa boyanır.
   BOŞLUK = en yakın noktası 200 km'den uzak kara hücresi.

Bu ölçüt bitirilebilir: "kaç hücre açık" sorusunun sayısı var, ve her
yeni nokta onu düşürür.

🔴 MASKE: `ne_10m_land.geojson` KULLANILIR, `motor_kara.geojson` DEĞİL.
İkincisi motorun ÇIKTISIDIR ve zaten tavanla biçimlenmiştir — onunla
boşluk aramak, boşlukları eleyen maskeyle boşluk aramaktır.
(OPUS HAZIR KITA 120 ölçtü: motor_kara 5.456 hücre · ne_10m_land 10.857.)

kullanım:  py arac/_dunya_bosluk.py [izgara_derece]
"""
import io
import json
import math
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
sys.path.insert(0, "arac")
import girdi                                              # noqa: E402

ADIM = float(sys.argv[1]) if len(sys.argv) > 1 else 1.0
TAVAN = 200.0

print("DÜNYA BOŞLUK HARİTASI · ızgara %.1f° · tavan %d km" % (ADIM, TAVAN))

# ---- noktalar ----
Y = girdi.yukle(sessiz=True)
NOK = [(y["lat"], y["lon"]) for y in Y
       if isinstance(y.get("lat"), (int, float))
       and isinstance(y.get("lon"), (int, float))]
print("bağlı nokta: %d" % len(NOK))

# ---- kara maskesi ----
from shapely.geometry import shape, Point                 # noqa: E402
from shapely.ops import unary_union                       # noqa: E402
from shapely.prepared import prep                         # noqa: E402

gj = json.load(io.open("veri-kaynak/ne_10m_land.geojson", encoding="utf-8"))
kara = unary_union([shape(o["geometry"]) for o in gj["features"]])
hazir = prep(kara)
print("kara maskesi yüklendi")


def km(a_lat, a_lon, b_lat, b_lon):
    t = math.pi / 180.0
    dp = (b_lat - a_lat) * t
    dl = (b_lon - a_lon) * t
    s = (math.sin(dp / 2) ** 2
         + math.cos(a_lat * t) * math.cos(b_lat * t) * math.sin(dl / 2) ** 2)
    return 6371.0 * 2 * math.asin(math.sqrt(min(1.0, s)))


# kaba ön eleme için noktaları enlem kuşaklarına böl
KUSAK = {}
for la, lo in NOK:
    KUSAK.setdefault(int(la // 5), []).append((la, lo))


def en_yakin(la, lo):
    en = 1e9
    for k in range(int(la // 5) - 1, int(la // 5) + 2):
        for p in KUSAK.get(k, ()):
            d = km(la, lo, p[0], p[1])
            if d < en:
                en = d
    if en > 900:                       # kuşak dışı da bak
        for p in NOK:
            d = km(la, lo, p[0], p[1])
            if d < en:
                en = d
    return en


# ---- tarama ----
BOLGE = [
    ["Kuzey Amerika",        15, 72, -170, -52],
    ["Orta Amerika+Karayip",  7, 25, -118, -59],
    ["Güney Amerika",       -56, 13,  -82, -34],
    ["Kuzey Afrika",         20, 37,  -18,  35],
    ["Sahra altı Afrika",   -35, 20,  -18,  52],
    ["Avrupa",               35, 71,  -11,  40],
    ["Anadolu+Levant+İran",  25, 45,   25,  63],
    ["Arabistan",            12, 32,   34,  60],
    ["Orta Asya",            35, 50,   46,  88],
    ["Sibirya+Ural",         50, 78,   55, 145],
    ["Uzak Doğu Sibirya",    50, 73,  145, 180],
    ["Moğolistan+Tibet",     26, 53,   73, 120],
    ["Güney Asya",            5, 36,   60,  92],
    ["Doğu Asya",            18, 54,   92, 146],
    ["Güneydoğu Asya",      -11, 25,   92, 141],
    ["Avustralya",          -44,-10,  112, 154],
    ["Yeni Gine+Okyanusya", -25,  0,  130, 180],
]
print("\n%-24s %8s %8s %8s   %s" % ("BÖLGE", "kara", "AÇIK", "%", "en uzak"))
print("-" * 68)
tk = ta = 0
sonuc = []
for ad, g, ku, b, d in BOLGE:
    kara_n = acik_n = 0
    en_uzak = (0.0, None)
    la = g + ADIM / 2
    while la < ku:
        lo = b + ADIM / 2
        while lo < d:
            if hazir.contains(Point(lo, la)):
                kara_n += 1
                u = en_yakin(la, lo)
                if u > TAVAN:
                    acik_n += 1
                if u > en_uzak[0]:
                    en_uzak = (u, (round(la, 1), round(lo, 1)))
            lo += ADIM
        la += ADIM
    tk += kara_n
    ta += acik_n
    oran = (100.0 * acik_n / kara_n) if kara_n else 0.0
    im = "🟢" if oran < 5 else ("🟡" if oran < 25 else "🔴")
    print("%-24s %8d %8d %7.1f%%   %5.0f km %-16s %s"
          % (ad, kara_n, acik_n, oran, en_uzak[0],
             str(en_uzak[1] or ""), im))
    sonuc.append((ad, kara_n, acik_n, oran))

print("-" * 68)
print("%-24s %8d %8d %7.1f%%" % ("TOPLAM", tk, ta,
                                 (100.0 * ta / tk) if tk else 0))
print("\n📌 AÇIK = en yakın noktası %d km'den uzak kara hücresi." % TAVAN)
print("   Bu hücreler HİÇBİR peteğe girmez ⇒ haritada boyanmaz.")
print("   Kabaca her açık hücre ~%d bin km²; bir nokta ~%d bin km² kapatır."
      % (int(111 * ADIM * 111 * ADIM / 1000),
         int(math.pi * TAVAN * TAVAN / 1000)))
