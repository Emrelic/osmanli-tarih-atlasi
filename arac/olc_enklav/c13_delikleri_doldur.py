# -*- coding: utf-8 -*-
"""⑤ C13 — `delikleri_doldur` muafiyeti IKI YONDE sinanir.

🔴 SINANAN SEY GERCEK KOD. Fonksiyon ve yanindaki `_KB_*` kurulumu
`arac/uret_petek.py`den **ast ile** cikariliyor ve OLDUGU GIBI exec ediliyor.
Kendi kopyami yazsaydim kendi kopyami sinamis olurdum — bu depoda ucuncu kez
ogrenilen ders: "veri zaten bir dilde yazilmissa, o dilin yorumlayicisini cagir".

GECME YOLU   motorun KENDI yazdigi kapali govdeler uzerinde:
             muaf=True ile muaf=False BIREBIR ayni cikmali
             + ayri sinav: "sinanacak DELIKLI govde VAR mi"
               (bos kume uzerinde gecen bir test GECMIS SAYILMAZ)
ATESLEME     gercek veride o hal YOK (0 halka) -> SAHTE GIRDIYLE zorlanir

🟢 INDEKS ESLEMESI GEREKTIRMEZ. Ilk surum `petek_govde.js` hucrelerini
   `YERLER` ile indeksten esliyordu ve taban 2308->2312 kayinca IndexError
   ile dustu. Care indeksi tamir etmek DEGIL, INDEKSE HIC GUVENMEMEK oldu.

Cikis kodu: 0 = hepsi gecti · 1 = en az bir sinav dustu

Kosum:  py arac/olc_enklav/c13_delikleri_doldur.py
"""
import sys
import ast
import _ortak as O
import girdi
from shapely.geometry import Polygon, MultiPolygon, Point
from shapely.ops import unary_union
from shapely.strtree import STRtree

KAYNAK = open(O.KOK + "/arac/uret_petek.py", encoding="utf-8").read()
AGAC = ast.parse(KAYNAK)

ISTENEN = {"_KB_IX", "_KB_NOKTA", "_KB_AGAC", "_KB_MUAF"}
parcalar = []
for d in AGAC.body:
    if isinstance(d, ast.Assign):
        if {t.id for t in d.targets if isinstance(t, ast.Name)} & ISTENEN:
            parcalar.append(ast.get_source_segment(KAYNAK, d))
    elif isinstance(d, ast.FunctionDef) and d.name == "delikleri_doldur":
        parcalar.append(ast.get_source_segment(KAYNAK, d))
print(f"ast ile cikarilan parca: {len(parcalar)}")
if len(parcalar) != 5:
    print(f"🔴 beklenen 5 parca (4 atama + 1 fonksiyon), bulunan {len(parcalar)}")
    print("   uret_petek.py degismis olabilir — bu betik guncellenmeli.")
    sys.exit(1)

YERLER = girdi.yukle(sessiz=True)
noktalar = [Point(y["lon"], y["lat"]) for y in YERLER]
NS = dict(YERLER=YERLER, noktalar=noktalar, Polygon=Polygon,
          MultiPolygon=MultiPolygon, unary_union=unary_union, STRtree=STRtree)
exec("\n".join(parcalar), NS)
dd = NS["delikleri_doldur"]
print(f"gercek fonksiyon yuklendi · nobetci nokta: {len(NS['_KB_IX'])}")
print(f"imza varsayilani muaf = {dd.__defaults__}")

BASARI, HATA = [], []


def sina(ad, kosul, ayrinti=""):
    (BASARI if kosul else HATA).append(ad)
    print(f"   {'✓' if kosul else '🔴 DUSTU'}  {ad}   {ayrinti}")


sina("VARSAYILAN muaf=True (bugunku davranis degismemeli)",
     dd.__defaults__ == (True,), f"{dd.__defaults__}")

# ═══════════════════════════════════════════════════════════════════════════
print()
print("=" * 78)
print("① GECME YOLU — motorun KENDI yazdigi govdeler")
print("=" * 78)
D, V, coz = O.oku_yayin_govdeleri()
hepsi = []
for d in D["DONEMLER"]:
    for alan in ("o", "v"):
        hepsi += coz(d.get(alan), D["PARCALAR"], D["PARCA_HALKA"])
for dev in V["DEVLET_HARITA"]:
    for d in dev["dnm"]:
        hepsi += coz(d.get("g"), V["DEVLET_PARCALAR"], V["DEVLET_PARCA_HALKA"])
delikli = [p for p in hepsi if p.geom_type == "Polygon" and len(p.interiors) > 0]
print(f"   yayindaki govde parcasi: {len(hepsi):,}  ·  DELIGI OLAN: {len(delikli):,}")
sina("sinanacak DELIKLI govde VAR (bos kume uzerinde gecen test GECMIS SAYILMAZ)",
     len(delikli) >= 100, f"{len(delikli)} delikli parca")

fark = 0.0
for p in delikli:
    fark += abs(dd(p, muaf=True).area - dd(p, muaf=False).area)
sina("muaf=True ile ESKI davranis BIREBIR ayni",
     fark < 1e-12, f"({len(delikli)} govde, toplam fark {fark:.2e} derece²)")
sina("hicbir halka atlanmadi (_KB_MUAF bos)",
     not NS["_KB_MUAF"], f"_KB_MUAF = {dict(NS['_KB_MUAF'])}")
print(f"   taban: {len(YERLER)} nokta · {len(NS['_KB_IX'])} kasitli bosluk "
      f"(11 Agu 2026 olcumunde 2308 / 138 idi)")

# ═══════════════════════════════════════════════════════════════════════════
print()
print("=" * 78)
print("② ATESLEME — SAHTE GIRDI (gercek veride bu hal YOK, ZORLANIYOR)")
print("=" * 78)
kb0 = NS["_KB_IX"][0]
kbp = noktalar[kb0]
print(f"   secilen nobetci nokta: {YERLER[kb0]['ad']}  "
      f"{kbp.y:.2f}K {kbp.x:.2f}D")

dis = Polygon([(kbp.x - 5, kbp.y - 5), (kbp.x + 5, kbp.y - 5),
               (kbp.x + 5, kbp.y + 5), (kbp.x - 5, kbp.y + 5)])
delik_kb = [(kbp.x - .5, kbp.y - .5), (kbp.x + .5, kbp.y - .5),
            (kbp.x + .5, kbp.y + .5), (kbp.x - .5, kbp.y + .5)]
delik_bos = [(kbp.x + 3, kbp.y + 3), (kbp.x + 4, kbp.y + 3),
             (kbp.x + 4, kbp.y + 4), (kbp.x + 3, kbp.y + 4)]

NS["_KB_MUAF"].clear()
A = dd(Polygon(dis.exterior, [delik_kb]))
sina("(A) icinde KB noktasi olan halka KORUNDU",
     abs(A.area - 99.0) < 1e-9, f"alan {A.area:.4f} (beklenen 99 = 100 - 1x1)")
sina("(A) atlama ADIYLA raporlandi",
     NS["_KB_MUAF"].get(YERLER[kb0]["ad"]) == 1, f"{dict(NS['_KB_MUAF'])}")

NS["_KB_MUAF"].clear()
B = dd(Polygon(dis.exterior, [delik_bos]))
sina("(B) icinde KB noktasi OLMAYAN halka DOLDU",
     abs(B.area - 100.0) < 1e-9, f"alan {B.area:.4f}")
sina("(B) rapor bos kaldi", not NS["_KB_MUAF"], f"{dict(NS['_KB_MUAF'])}")

NS["_KB_MUAF"].clear()
C = dd(Polygon(dis.exterior, [delik_kb, delik_bos]))
sina("(C) ayni govdede KB'li KORUNDU + oteki DOLDU (HALKA bazli, govde bazli DEGIL)",
     abs(C.area - 99.0) < 1e-9, f"alan {C.area:.4f}")

NS["_KB_MUAF"].clear()
Dd = dd(Polygon(dis.exterior, [delik_kb, delik_bos]), muaf=False)
sina("(D) muaf=False -> ESKI DAVRANIS, ikisi de doldu",
     abs(Dd.area - 100.0) < 1e-9, f"alan {Dd.area:.4f}")
sina("(D) muaf=False rapor uretmez", not NS["_KB_MUAF"], f"{dict(NS['_KB_MUAF'])}")

NS["_KB_MUAF"].clear()
E = dd(MultiPolygon([Polygon(dis.exterior, [delik_kb]),
                     Polygon([(kbp.x + 20, kbp.y), (kbp.x + 22, kbp.y),
                              (kbp.x + 22, kbp.y + 2), (kbp.x + 20, kbp.y + 2)])]))
sina("(E) MultiPolygon govdede de calisiyor",
     abs(E.area - 103.0) < 1e-9, f"alan {E.area:.4f} (beklenen 99 + 4)")

print()
print("=" * 78)
print(f"C13 SONUC:  gecen {len(BASARI)} · DUSEN {len(HATA)}")
for h in HATA:
    print("   🔴 " + h)
print("=" * 78)
print()
print("🔴 SINANMAYAN, ACIKCA: kosu icindeki `if _KB_MUAF:` RAPOR DALININ")
print("   METNI. Gercek veride 0 halka atlandigi icin yalniz `else` dali")
print("   basiliyor. Ateseleyen dalin metni bir gun ilk kez gorulecek.")
sys.exit(1 if HATA else 0)
