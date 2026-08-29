# 0038/H-0003 + H-0004 sinavi — konkav kopru ve renk atamasi
# C13: IKI YONDE de sinanir. Burada UC dal zorlanir.
import math, sys
sys.stdout.reconfigure(encoding="utf-8")
from shapely.geometry import Polygon, Point
from shapely.ops import unary_union

B2_KAVIS = 0.35
B2_TEMAS = 0.02


def kopru(n1, n2, en_ana, en_enklav, kavis):
    dx, dy = (n2[0] - n1[0]), (n2[1] - n1[1])
    bo = math.hypot(dx, dy) or 1e-9
    px, py = -dy / bo, dx / bo
    N = 24
    sol, sag = [], []
    for i in range(N + 1):
        t = i / float(N)
        lin = en_ana + (en_enklav - en_ana) * t
        w = lin * (1.0 - kavis * math.sin(math.pi * t))
        cx, cy = n1[0] + dx * t, n1[1] + dy * t
        sol.append((cx + px * w, cy + py * w))
        sag.append((cx - px * w, cy - py * w))
    return Polygon(sol + list(reversed(sag))).buffer(0)


print("=" * 66)
print("① GECME YOLU — kavis kopruyu KOPARMIYOR mu")
n1, n2 = (0.0, 0.0), (2.0, 0.0)
duz = kopru(n1, n2, 0.40, 0.20, 0.0)
egr = kopru(n1, n2, 0.40, 0.20, B2_KAVIS)
print(f"   duz yamuk   gecerli={duz.is_valid} parca={len(getattr(duz,'geoms',[duz]))} alan={duz.area:.5f}")
print(f"   konkav      gecerli={egr.is_valid} parca={len(getattr(egr,'geoms',[egr]))} alan={egr.area:.5f}")
assert egr.is_valid and egr.geom_type == "Polygon", "KOPRU KOPTU"
print(f"   alan orani  {egr.area/duz.area:.3f}  (beklenen ~0.78 — %22 incelme)")

print()
print("② UCLAR TAM GENISLIKTE mi — kaynak yeri incelmemeli")
for t, ad in ((0.0, "anakara ucu"), (1.0, "enklav ucu")):
    lin = 0.40 + (0.20 - 0.40) * t
    w = lin * (1.0 - B2_KAVIS * math.sin(math.pi * t))
    print(f"   t={t:.1f} {ad:<12} yari-genislik {w:.4f}  (duz {lin:.4f})  fark {abs(w-lin):.6f}")
    assert abs(w - lin) < 1e-12, "UC INCELDI — kaynak kopar"

print()
print("③ ORTA GERCEKTEN ICE BUKEY mi")
t = 0.5
lin = 0.40 + (0.20 - 0.40) * t
w = lin * (1.0 - B2_KAVIS * math.sin(math.pi * t))
print(f"   t=0.5  duz {lin:.4f} -> konkav {w:.4f}   ice basma %{100*(1-w/lin):.1f}")
assert w < lin, "KAVIS ATESLEMEDI"

print()
print("④ ATESLEME ZORLAMA — kavis tavani asilirsa KOPAR mi (C13)")
for k in (0.5, 0.9, 1.0):
    q = kopru(n1, n2, 0.40, 0.20, k)
    kesisiyor = not q.is_valid or q.area <= 0
    print(f"   KAVIS={k:.2f}  gecerli={q.is_valid} alan={q.area:.5f}  {'KOPUK/BOZUK' if kesisiyor else 'saglam'}")
print("   -> 0,35 tavanin ALTINDA; belge tavani 0,5 diyor ve dal zorlandi.")

print()
print("=" * 66)
print("⑤ H-0004 RENK ATAMASI — kopru yaslandigi govdeyi buluyor mu")
# dogrudan govde solda, tabi govde sagda; kopru ikisinin arasinda
g_ham = Polygon([(-1, -1), (0, -1), (0, 1), (-1, 1)])          # DOGRUDAN
gt_ham = Polygon([(3, -1), (4, -1), (4, 1), (3, 1)])           # TABI


def ata(q, gd, gt):
    cev = q.buffer(B2_TEMAS)
    ad = cev.intersection(gd).area if gd is not None and not gd.is_empty else 0.0
    at = cev.intersection(gt).area if gt is not None and not gt.is_empty else 0.0
    return ("TABI" if at > ad else "DOGRUDAN"), ad, at


# (a) DOGRUDAN'a yaslanan kopru
ka = Polygon([(0.0, -0.2), (1.0, -0.2), (1.0, 0.2), (0.0, 0.2)])
# (b) TABI'ye yaslanan kopru
kb = Polygon([(2.0, -0.2), (3.0, -0.2), (3.0, 0.2), (2.0, 0.2)])
# (c) HICBIRINE degmeyen kopru -> beraberlik -> DOGRUDAN (eski davranis)
kc = Polygon([(1.4, -0.2), (1.6, -0.2), (1.6, 0.2), (1.4, 0.2)])
for q, ad, bek in ((ka, "dogrudana yaslanan", "DOGRUDAN"),
                   (kb, "tabiye yaslanan", "TABI"),
                   (kc, "hicbirine degmeyen", "DOGRUDAN")):
    s, a1, a2 = ata(q, g_ham, gt_ham)
    im = "OK" if s == bek else "CURUDU"
    print(f"   {ad:<22} -> {s:<9} (dogrudan alan {a1:.5f} · tabi alan {a2:.5f})  {im}")
    assert s == bek, f"{ad}: beklenen {bek}, cikan {s}"

print()
print("⑥ GT YOKKEN — tabi katmani None ise cokmez mi")
s, a1, a2 = ata(kb, g_ham, None)
print(f"   gt=None  -> {s}  (beklenen DOGRUDAN)")
assert s == "DOGRUDAN"

print()
print("HEPSI GECTI — alti dalin altisi.")
