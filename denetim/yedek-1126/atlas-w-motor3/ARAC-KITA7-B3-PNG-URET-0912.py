# -*- coding: utf-8 -*-
"""KITA 7 -- B3 KORIDOR, once/sonra PNG serisi (Is④). GERCEK kesitlerden
iki somut ornegi (bir MAKUL agiz-divergence, bir FORMUL-COKMESI ornegi)
yeniden kurup gorsellestirir. arac/uret_petek.py'ye dokunmaz."""
import json, math
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from shapely.geometry import Polygon, box
from shapely.ops import unary_union
from shapely.validation import make_valid

B3_KAPAMA_DER = 0.45
B3_SADELIK = 0.02

def temiz(q):
    if not q.is_valid:
        q = make_valid(q)
    if q.geom_type == "GeometryCollection":
        polys = [p for p in q.geoms if p.geom_type in ("Polygon", "MultiPolygon")]
        q = unary_union(polys) if polys else Polygon()
    return q.buffer(0)

def kapat(g, yaricap=0.15):
    if g.is_empty:
        return g
    k = temiz(g.buffer(yaricap, join_style=2, mitre_limit=2.0)).buffer(-yaricap, join_style=2, mitre_limit=2.0)
    return unary_union([temiz(k), g])

def poligon_kur(p):
    return Polygon(p["ext"], p.get("holes") or [])

def bul_ve_ciz(kesitler, hedef_tarih, hedef_alan, hedef_alan_km2, ad, dosya):
    kesit = next(k for k in kesitler if k["tarih"] == hedef_tarih and k["alan"] == hedef_alan)
    polys = [poligon_kur(p) for p in kesit["parcalar"]]
    g = temiz(unary_union(polys))
    gs = g.simplify(B3_SADELIK, preserve_topology=True)
    k = kapat(gs, B3_KAPAMA_DER)
    aday = temiz(k.difference(g))
    x0, y0, x1, y1 = g.bounds
    m = B3_KAPAMA_DER * 4
    kutu = box(x0 - m, y0 - m, x1 + m, y1 + m)
    disari = temiz(kutu.difference(k))
    disari_kenar = disari.buffer(0.01)
    comps = list(aday.geoms) if aday.geom_type == "MultiPolygon" else [aday]
    hedef_c, hedef_agiz, en_yakin = None, None, 1e18
    for c in comps:
        if c.is_empty or c.length <= 0:
            continue
        agiz = temiz(c.intersection(disari_kenar))
        if agiz.is_empty:
            continue
        km2 = c.area * 111.32 * 111.32 * math.cos(math.radians(g.centroid.y))
        fark = abs(km2 - hedef_alan_km2)
        if fark < en_yakin:
            en_yakin, hedef_c, hedef_agiz = fark, c, agiz
    if hedef_c is None:
        print(f"BULUNAMADI: {hedef_tarih} {hedef_alan}")
        return
    w_der = 2.0 * hedef_c.area / hedef_c.length
    d_der = hedef_c.hausdorff_distance(hedef_agiz)
    agiz_gen = hedef_agiz.length / 2.0

    fig, axes = plt.subplots(1, 3, figsize=(15, 5))
    fig.suptitle(f"{ad} — {hedef_tarih} [{hedef_alan}]  "
                 f"derinlik={d_der*111.32:.0f}km  gövde-genişlik={w_der*111.32:.0f}km  "
                 f"ağız-genişlik={agiz_gen*111.32:.0f}km", fontsize=10)

    def plot_poly(ax, poly, **kw):
        if poly.geom_type == "Polygon":
            xs, ys = poly.exterior.xy
            ax.fill(xs, ys, **kw)
        else:
            for p in poly.geoms:
                xs, ys = p.exterior.xy
                ax.fill(xs, ys, **kw)

    # Panel 1: notch (aday) bileşeni + ağız vurgulu
    ax = axes[0]
    ax.set_title("① aday bileşen (c) + ağız (kırmızı)")
    plot_poly(ax, hedef_c, color="tan", edgecolor="black")
    plot_poly(ax, hedef_agiz, color="red", edgecolor="darkred")
    ax.set_aspect("equal")

    # Panel 2: kod kararı — govde = c - agiz.buffer(w_der)
    ax = axes[1]
    govde = temiz(hedef_c.difference(hedef_agiz.buffer(w_der)))
    kod_sig = d_der <= w_der
    ax.set_title(f"② KOD (w_der={w_der*111.32:.0f}km): "
                 + ("SIĞ, BIRAKILIR" if kod_sig else "DERİN, DOLDURULUR"))
    plot_poly(ax, hedef_c, color="lightgray", edgecolor="black")
    if not kod_sig:
        plot_poly(ax, govde, color="tan", edgecolor="darkorange", alpha=0.8)
        ax.text(0.05, 0.05, "taralı=doldurulan gövde", transform=ax.transAxes, fontsize=8)
    ax.set_aspect("equal")

    # Panel 3: Emre'nin kuralı — agiz_genislik ile karar
    ax = axes[2]
    govde2 = temiz(hedef_c.difference(hedef_agiz.buffer(agiz_gen)))
    emre_sig = d_der <= agiz_gen
    ax.set_title(f"③ EMRE (ağız={agiz_gen*111.32:.0f}km): "
                 + ("SIĞ, BIRAKILIR" if emre_sig else "DERİN, DOLDURULUR"))
    plot_poly(ax, hedef_c, color="lightgray", edgecolor="black")
    if not emre_sig:
        plot_poly(ax, govde2, color="tan", edgecolor="darkorange", alpha=0.8)
    ax.set_aspect("equal")

    plt.tight_layout()
    plt.savefig(dosya, dpi=110)
    plt.close()
    print(f"yazildi: {dosya}  (kod={'SIG' if kod_sig else 'DOLDUR'} emre={'SIG' if emre_sig else 'DOLDUR'})")

if __name__ == "__main__":
    import sys
    kesitler = json.load(open(sys.argv[1], encoding="utf-8"))
    bul_ve_ciz(kesitler, "1570-09-09", "dogrudan", 210.7,
               "MAKUL ÖRNEK (ağız~gövde ölçek, gerçek ayrışma)",
               sys.argv[2])
    bul_ve_ciz(kesitler, "1694-09-21", "dogrudan", 127489.4,
               "FORMÜL ÇÖKMESİ ÖRNEĞİ (kıvrımlı kıyı → agiz.length şişiyor)",
               sys.argv[3])
