# -*- coding: utf-8 -*-
"""DÜNYA BOŞLUK EĞRİSİ — `_dunya_bosluk.py`nin ZAMAN KESİTLİ hâli.

🔴 NİÇİN: `_dunya_bosluk.py` `kur:`a BAKMAZ — bir noktayı 1281'den
1923'e kadar VAR sayar. Ama motor (`petek_epok`) bakar: `kur:`dan önce
peteği komşuya devreder. ⇒ Sömürge dönemi kasabalarıyla dolan bir kutu
"zamansız" ölçütte %3 boşluk gösterir ve 1400'de %38 boş olabilir.

DUNYA-AFRIKA-0903 bunu Afrika'da ölçtü (66 → 750). Bu araç aynı soruyu
BÜTÜN DÜNYAYA ve TEK KOŞUDA sorar — maske bir kez yüklenir.

⚠️ Nokta bir yılda VAR sayılır:  (kur: yok  ya da  kur: <= yıl)
                            VE  (bit: yok  ya da  bit: >  yıl)

kullanım:  py _bosluk_egri.py [ızgara] [yıl1 yıl2 …]
"""
import io, json, math, os, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.getcwd()
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi                                              # noqa

ADIM = float(sys.argv[1]) if len(sys.argv) > 1 else 2.0
YILLAR = [int(x) for x in sys.argv[2:]] or [1400, 1600, 1800, 1900]
TAVAN = 200.0


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

from shapely.geometry import shape                        # noqa
from shapely.ops import unary_union                       # noqa
from shapely.prepared import prep                         # noqa

gj = json.load(io.open("veri-kaynak/ne_10m_land.geojson", encoding="utf-8"))
kara = unary_union([shape(o["geometry"]) for o in gj["features"]])
hazir = prep(kara)
print("kara maskesi yüklendi · ızgara %.1f° · tavan %d km" % (ADIM, TAVAN))

from shapely.geometry import Point                        # noqa
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


def km(a, b, c, d):
    t = math.pi / 180.0
    s = (math.sin((c - a) * t / 2) ** 2 + math.cos(a * t) * math.cos(c * t)
         * math.sin((d - b) * t / 2) ** 2)
    return 6371.0 * 2 * math.asin(math.sqrt(min(1.0, s)))


def acik_say(nok):
    """kac hucrenin en yakin noktasi TAVAN'dan uzak"""
    kusak = {}
    for p in nok:
        kusak.setdefault(int(p[0] // 5), []).append(p)
    n = 0
    for hla, hlo in HUCRE:
        en = 1e9
        for k in range(int(hla // 5) - 1, int(hla // 5) + 2):
            for p in kusak.get(k, ()):
                if abs(p[1] - hlo) > 4.0:      # kaba boylam elemesi
                    continue
                d = km(hla, hlo, p[0], p[1])
                if d < en:
                    en = d
                    if en <= TAVAN:
                        break
            if en <= TAVAN:
                break
        if en > TAVAN:
            n += 1
    return n


print()
print("%-10s %8s %8s %7s" % ("KESİT", "nokta", "açık", "%"))
zamansiz = [(t[0], t[1]) for t in TUM]
a0 = acik_say(zamansiz)
print("%-10s %8d %8d %6.1f%%   ← RESMÎ ÖLÇÜT (kur: yok sayılıyor)"
      % ("zamansız", len(zamansiz), a0, 100.0 * a0 / len(HUCRE)))
for yil in YILLAR:
    nok = [(t[0], t[1]) for t in TUM
           if (t[2] is None or t[2] <= yil) and (t[3] is None or t[3] > yil)]
    a = acik_say(nok)
    print("%-10d %8d %8d %6.1f%%   fark %+d" % (yil, len(nok), a,
                                                100.0 * a / len(HUCRE), a - a0))
print()
print("📌 «zamansız» satır programın bugünkü bitiş ölçütüdür.")
print("   Kesit satırları, kullanıcı zaman çubuğunu oraya çektiğinde")
print("   haritanın ne kadarının BOŞ olduğunu söyler.")
print("⚠️ Boşluk KUSUR DEĞİL olabilir: 1400'de o kasaba YOKTU ve boş")
print("   olması DOĞRUdur (Emre: 'devasa boşluklar olacaksa olsun').")
print("   Bu ölçüm hangi boşluğun DOĞRU hangisinin EKSİK olduğunu")
print("   SÖYLEMEZ — onu ancak kaynak söyler.")
