# -*- coding: utf-8 -*-
"""ARAC-KENAR-OLC2-0907 — birinci ölçümün YETMEDİĞİ iki soru.

    KADEME-MODEL-0907 · 7 Eylül 2026

Birinci alet (`ARAC-KENAR-OLC-0907.py`) şunu buldu:
    342 kenar çifti · ortak tepesi OLMAYAN 0 · alan örtüşmesi 0
    ⚠️ AMA `ortak tepe` ASGARİSİ 2 — ve bu bir uyarıdır:
       uzun bir kenarda yalnız İKİ UÇ eşleşiyorsa o kenar tepe-özdeş
       DEĞİLDİR. "Ortak tepesi var" ile "kenarı BİREBİR aynı" AYNI ŞEY
       DEĞİL, ve birincisi ikincisini ima etmiyor.

Bu alet iki ayrı soruyu sorar:

  ① KENARIN KENDİSİ — paylaşılan çizginin tepe noktalarının KAÇI
     iki ülkenin de tepe kümesinde BİREBİR var?
        %100  → kenar çıkarımı MEKANİK
        <%100 → o kenarda TOLERANS gerekir

  ② KAÇIRILAN KOMŞU — `intersects` YANLIŞ NEGATİF veriyor mu?
     İki poligon kıl payı bir BOŞLUKLA ayrılmışsa değmezler ve
     birinci alet onları hiç saymaz. 🔴 O zaman "342" bir ALT SINIRDIR.
     Ölçüt: değmeyen aday çiftlerin ARALARINDAKİ EN KISA UZAKLIK.

🔴 §11: kendi ayrıştırıcım yok — `json` + `shapely`.
"""
import io
import json
import os
import sys
from collections import Counter

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

from shapely.geometry import shape
from shapely.strtree import STRtree

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GEOJSON = os.path.join(KOK, "veri-kaynak", "ne_10m_admin_0_countries.geojson")
CIKTI = os.path.join(KOK, "denetim", "OLCUM-KENAR2-0907.json")

# ② için: değmeyen komşuların uzaklık bantları (derece).
# Ekvatorda 1 derece ~ 111 km ⇒ 1e-6 derece ~ 11 cm.
BANT = [1e-9, 1e-7, 1e-6, 1e-5, 1e-4, 1e-3, 1e-2, 1e-1]


def tepeler(geom, out=None):
    if out is None:
        out = []
    t = geom.geom_type
    if t == "Polygon":
        out.extend(geom.exterior.coords)
        for h in geom.interiors:
            out.extend(h.coords)
    elif t == "MultiPolygon":
        for p in geom.geoms:
            tepeler(p, out)
    return out


def cizgi_tepeleri(g, out=None):
    """Kesişim geometrisinin çizgi parçalarındaki tepe noktaları."""
    if out is None:
        out = []
    if g.is_empty:
        return out
    t = g.geom_type
    if t in ("LineString", "LinearRing"):
        out.extend(g.coords)
    elif t in ("MultiLineString", "GeometryCollection"):
        for p in g.geoms:
            cizgi_tepeleri(p, out)
    return out


def main():
    print("═" * 74)
    print("ARAC-KENAR-OLC2-0907 — ① kenar birebir mi · ② kaçırılan komşu var mı")
    print("═" * 74)

    with io.open(GEOJSON, encoding="utf-8") as f:
        ham = json.load(f)

    adlar, geoms = [], []
    for o in ham["features"]:
        p = o["properties"]
        adlar.append(p.get("NAME") or p.get("ADMIN") or "?")
        geoms.append(shape(o["geometry"]))

    kume = [set(tepeler(g)) for g in geoms]
    agac = STRtree(geoms)

    aday = set()
    for i, g in enumerate(geoms):
        for j in agac.query(g):
            j = int(j)
            if j != i:
                aday.add((min(i, j), max(i, j)))

    tam, kismi, kayit = 0, 0, []
    degmeyen = []
    for (i, j) in sorted(aday):
        a, b = geoms[i], geoms[j]
        try:
            hat = a.boundary.intersection(b.boundary)
        except Exception as e:
            print("  🔴 kesişim hatası %s ↔ %s: %s" % (adlar[i], adlar[j], e))
            continue
        tv = cizgi_tepeleri(hat)
        if not tv:
            # KENAR YOK — ② sorusunun evreni: gerçekten uzak mı, kıl payı mı?
            try:
                d = a.distance(b)
            except Exception:
                continue
            if d > 0:
                degmeyen.append((d, adlar[i], adlar[j]))
            continue
        tv = list(dict.fromkeys(tv))          # sıra korunarak tekilleştir
        n = len(tv)
        ikisinde = sum(1 for c in tv if c in kume[i] and c in kume[j])
        oran = ikisinde / float(n)
        kayit.append({"a": adlar[i], "b": adlar[j], "hat_tepe": n,
                      "ikisinde": ikisinde, "oran": oran,
                      "uzunluk_derece": hat.length})
        if ikisinde == n:
            tam += 1
        else:
            kismi += 1

    print("kenar paylaşan çift        : %d" % len(kayit))
    print("  ① TAMAMI birebir ortak   : %d" % tam)
    print("  ① KISMEN ortak           : %d  🔴" % kismi)
    if kayit:
        oranlar = sorted(k["oran"] for k in kayit)
        print("  oran: asgari %.4f · ortanca %.4f · azami %.4f" %
              (oranlar[0], oranlar[len(oranlar) // 2], oranlar[-1]))
        eksik = sum(k["hat_tepe"] - k["ikisinde"] for k in kayit)
        toplam = sum(k["hat_tepe"] for k in kayit)
        print("  hat tepesi TOPLAM %d · ikisinde OLMAYAN %d (%%%.3f)" %
              (toplam, eksik, 100.0 * eksik / toplam))
        print("")
        print("  🔴 EN DÜŞÜK ORANLI 12 ÇİFT:")
        for k in sorted(kayit, key=lambda x: x["oran"])[:12]:
            print("     %-22s ↔ %-22s hat %5d · ikisinde %5d · oran %.3f · %7.3f°" %
                  (k["a"], k["b"], k["hat_tepe"], k["ikisinde"], k["oran"],
                   k["uzunluk_derece"]))

    print("")
    print("─" * 74)
    print("② KAÇIRILAN KOMŞU — değmeyen aday çift: %d" % len(degmeyen))
    sayac = Counter()
    for d, a, b in degmeyen:
        for ust in BANT:
            if d < ust:
                sayac[ust] += 1
                break
        else:
            sayac["≥0.1"] += 1
    for ust in BANT:
        if sayac.get(ust):
            print("   uzaklık < %-8s : %4d çift" % (ust, sayac[ust]))
    if sayac.get("≥0.1"):
        print("   uzaklık ≥ 0.1      : %4d çift  (gerçekten uzak — ada/deniz)" % sayac["≥0.1"])
    print("   🔴 EN YAKIN 10 DEĞMEYEN ÇİFT:")
    for d, a, b in sorted(degmeyen)[:10]:
        print("     %-24s ↔ %-24s uzaklık %.3e° (~%.1f m)" % (a, b, d, d * 111319.0))

    with io.open(CIKTI, "w", encoding="utf-8") as f:
        json.dump({
            "_NOT": "ARAC-KENAR-OLC2-0907 · ① kenar birebirliği ② kaçırılan komşu",
            "kenar_cift": len(kayit), "tam_birebir": tam, "kismen": kismi,
            "degmeyen_cift": len(degmeyen),
            "degmeyen_en_yakin": [{"uzaklik_derece": d, "a": a, "b": b}
                                  for d, a, b in sorted(degmeyen)[:40]],
            "kenarlar": sorted(kayit, key=lambda x: x["oran"]),
        }, f, ensure_ascii=False, indent=1)
    print("")
    print("→ %s yazıldı" % os.path.relpath(CIKTI, KOK))


if __name__ == "__main__":
    main()
