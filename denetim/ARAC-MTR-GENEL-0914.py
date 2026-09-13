# -*- coding: utf-8 -*-
"""ARAC-MTR-GENEL-0914 — bir GÜNDE bütün dünyada boyalı katmanlar arası BİNME ve
ham (onarımsız) gövde poligonlarının GEÇERSİZLİĞİ. SALT OKUMA.

Kullanım:
  py denetim/ARAC-MTR-GENEL-0914.py <gun> [<gun> ...] [--json cikti.json]
  MTR_REV=<commit> ile eski bir yayının çıktısı ölçülür (D010 ters yön).

Binme: farklı iki katman (OSMANLI · OSMANLI-tabi · yabancı id) kesişimi > 1 km².
OSMANLI ↔ OSMANLI-tabi de sayılır (motor g.difference(gt) ile ayırıyor, 0 beklenir).
Geçersizlik: shapely is_valid + explain_validity; self-intersection noktası basılır.
"""
import sys, os, json, importlib.util, argparse, re
from shapely import STRtree
from shapely.geometry import Point

_s = importlib.util.spec_from_file_location("mtr", os.path.join(os.path.dirname(os.path.abspath(__file__)), "ARAC-MTR-ORTAK-0914.py"))
M = importlib.util.module_from_spec(_s); _s.loader.exec_module(M)


def olc(gun):
    kat = M.sahipler(gun)
    ad = sorted(kat)
    geos = [kat[a] for a in ad]
    agac = STRtree(geos)
    binme = []
    for i, a in enumerate(ad):
        for j in agac.query(geos[i]):
            j = int(j)
            if j <= i:
                continue
            x = geos[i].intersection(geos[j])
            k = M.km2(x)
            if k > 1.0:
                rp = x.representative_point()
                binme.append((round(k, 1), a, ad[j], round(rp.y, 2), round(rp.x, 2)))
    binme.sort(reverse=True)
    # geçersiz ham poligonlar
    o_ham, v_ham, _ = M.osmanli(gun, onar=False)
    hamlar = [("OSMANLI", o_ham or []), ("OSMANLI-tabi", v_ham or [])]
    for k, (gg, _) in M.yabancilar(gun, None, onar=False).items():
        hamlar.append((k, gg))
    gec, n = [], 0
    for k, ps in hamlar:
        for q in ps:
            n += 1
            if not q.is_valid:
                e = M.explain_validity(q)
                m = re.search(r"\[([-\d.]+) ([-\d.]+)\]", e)
                gec.append((k, e.split("[")[0], round(float(m.group(2)), 3) if m else None,
                            round(float(m.group(1)), 3) if m else None, round(M.km2(q.buffer(0)))))
    return {"gun": gun, "rev": M.REV or "r8232 (calisma kopyasi)", "katman": len(ad),
            "binme_n": len(binme), "binme_km2": round(sum(b[0] for b in binme)),
            "binme_osm_tabi": [b for b in binme if {b[1], b[2]} == {"OSMANLI", "OSMANLI-tabi"}],
            "binme_ilk30": binme[:30], "binme_hepsi": binme,
            "ham_poligon": n, "gecersiz_n": len(gec), "gecersiz": gec}


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("gun", nargs="+"); ap.add_argument("--json")
    a = ap.parse_args()
    out = []
    for g in a.gun:
        R = olc(g)
        out.append(R)
        print(f"== {g} · {R['rev']} · katman {R['katman']} · ham poligon {R['ham_poligon']}")
        print(f"   BİNME {R['binme_n']} yüz · {R['binme_km2']:,} km² · OSMANLI↔tabi {len(R['binme_osm_tabi'])}")
        for b in R["binme_ilk30"][:12]:
            print("     ", b)
        print(f"   GEÇERSİZ {R['gecersiz_n']}")
        for q in R["gecersiz"][:12]:
            print("     ", q)
    if a.json:
        json.dump(out, open(a.json, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
