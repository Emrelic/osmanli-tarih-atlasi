# ARAC-D8A-YOGUNLUK-SINAV-1015 — 8a birimi NOKTA YOĞUNLUĞUNA bağlı OLMAMALI (iki yönde).
# Vaka (15 Ekim 2026, KOŞU 25): KUTU-H5 aynı taşma şeritlerine yeni noktalar ekledi,
# geometri değişmeden 8a 1500 → 1508 oldu. Eski birim (parça × en yakın yer) idi.
#   py denetim/ARAC-D8A-YOGUNLUK-SINAV-1015.py      (yapay, saniyeler)
# Çıkış: 0 bütün sorular tuttu · 1 en az biri çürüdü.
import sys, os
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "arac"))
import denetle
from shapely.geometry import box, Polygon

SONUC = []


def sina(ad, kosul, ayrinti=""):
    SONUC.append(bool(kosul))
    print(("  ✓ " if kosul else "  ✗ ") + ad + ("  · " + ayrinti if ayrinti else ""))


class Sahte:
    damga = "YAPAY"

    def __init__(self, parcalar):
        self.p = parcalar
        self.bolgeler = []
        self._Polygon = Polygon

    def kesit(self, gun, kutu, bitis_dahil=False):
        return list(self.p)


def yer(ad, lon, lat, d):
    return {"ad": ad, "lon": lon, "lat": lat, "s": [{"d": d, "f": "1000-01-01", "t": "3000-01-01"}]}


KM = 1 / 111.32
HAT = {"id": "yapay", "taraflar": ["aaa-yapay", "bbb-yapay"], "sol_taraf": "aaa-yapay",
       "f": "1900-01-01", "t": "1900-06-01", "sinif": "E", "hat": [[0.0, -0.9], [0.0, 0.9]]}
A = box(-1, -1, 0, 1)
B = box(0, -1, 1, 1)
TEMEL = [yer("A-merkez", -0.5, 0.0, "aaa-yapay"), yer("B-merkez", 0.5, 0.0, "bbb-yapay"),
         yer("B-cikinti", 0.02, 0.35, "bbb-yapay")]
SIK = TEMEL + [yer("B-ikinci", 0.02, 0.22, "bbb-yapay")]    # AYNI taşmanın yanına yeni nokta


def olc(Y, cik):
    gv = Sahte([("aaa-yapay", A.difference(cik)), ("bbb-yapay", B.union(cik))])
    return denetle.degismez8(Y, hatlar=[HAT], gv=gv)["a"]


cik = box(-15 * KM, 0.2, 0, 0.4)
a1, a2 = olc(TEMEL, cik), olc(SIK, cik)
print("YÖN 1 — aynı geometri, daha sık nokta ⇒ birim sayısı DEĞİŞMEZ")
sina("temel ölçüm ateşledi (2 gün × 1 parça)", len(a1) == 2, f"{len(a1)} birim")
sina("yeni nokta eklenince sayı AYNI", len(a2) == len(a1), f"{len(a1)} → {len(a2)}")
sina("yeni nokta yerler listesinde görünür (bilgi kaybolmadı)",
     a2 and all({"B-cikinti", "B-ikinci"} <= set(x["yerler"]) for x in a2),
     "; ".join(",".join(x["yerler"]) for x in a2))
sina("alan korunur (bölünse de toplam aynı, ±4 km²)",
     a1 and a2 and all(abs(p["km2"] - q["km2"]) <= 4 for p, q in zip(a1, a2)),
     f"{[x['km2'] for x in a1]} → {[x['km2'] for x in a2]}")
sina("yer = en büyük paylı ad",
     a2 and all(x["yer"] == x["yerler"][0] for x in a2), ", ".join(x["yer"] for x in a2))

print("YÖN 2 — AYRI taşma parçaları hâlâ AYRI sayılır (sayım çökmedi)")
iki = box(-15 * KM, 0.2, 0, 0.4).union(box(-15 * KM, -0.4, 0, -0.2))
Y2 = TEMEL + [yer("B-guney", 0.02, -0.3, "bbb-yapay")]
a3 = olc(Y2, iki)
sina("iki ayrık taşma ⇒ 2 gün × 2 parça = 4 birim", len(a3) == 4, f"{len(a3)} birim")
sina("her parça kendi yerine bağlandı",
     {x["yer"] for x in a3} == {"B-cikinti", "B-guney"}, ", ".join(sorted({x['yer'] for x in a3})))
Y3 = [yer("A-merkez", -0.5, 0.0, "aaa-yapay"), yer("B-tek", 0.02, 0.0, "bbb-yapay")]
a5 = olc(Y3, iki)                                          # iki parça, en yakın yer AYNI
ic, _, _ = denetle.d8_sayac(dict(a=a5, b=[]), None)
sina("iki ayrık parça AYNI ada düşse de defter anahtarı 2 × 2 = 4 (çökmez)",
     len(a5) == 4 and len(ic) == 4, f"kayıt {len(a5)} · anahtar {len(ic)} · {sorted(ic)[:2]}")
a4 = olc(TEMEL, box(-3 * KM, 0.2, 0, 0.4))
sina("3 km (< D8_DERIN) hâlâ 0", len(a4) == 0, f"{len(a4)}")

print("SONUÇ: %d/%d" % (sum(SONUC), len(SONUC)))
sys.exit(0 if all(SONUC) else 1)
