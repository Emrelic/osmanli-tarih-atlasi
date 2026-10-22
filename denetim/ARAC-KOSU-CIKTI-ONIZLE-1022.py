# -*- coding: utf-8 -*-
"""KOŞU ÇIKTISINDAN TEK-GÜN ÖNİZLEME (hafif: motor koşmaz, ≤ ~2 GB RAM).
Kullanım: py denetim/ARAC-KOSU-CIKTI-ONIZLE-1022.py <devletler_harita.js> <cikti_dizin> <gün> [<gün>…]
  gün biçimi: astronomik ISO (MÖ N = -(N-1)); örn. MÖ 3000 = -2999-06-15 · MS 500 = 0500-06-15
Büyük JS'i (350 MB) TAMAMEN json'a açmaz: önce küçük değişkenleri (DEVLET_HARITA, DEVLET_PARCA_HALKA) okur,
sonra DEVLET_PARCALAR'ı halka halka tarar ve yalnız gereken halkaları tutar.
Çıktı: <gün>.png + <gün>.geojson + ozet.json (devlet başına km², toplam)."""
import io, json, math, os, re, sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
AG = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(AG, "arac"))
import gun as GN


def oku_degisken(metin, ad, dec=json.JSONDecoder()):
    m = re.search(r"window\.%s\s*=\s*" % ad, metin)
    if not m:
        raise SystemExit("değişken yok: " + ad)
    v, _ = dec.raw_decode(metin, m.end())
    return v


def halkalari_tara(metin, gerekli):
    """DEVLET_PARCALAR = [ring, ring, …] — yalnız `gerekli` indeksli halkaları döndürür."""
    m = re.search(r"window\.DEVLET_PARCALAR\s*=\s*\[", metin)
    dec = json.JSONDecoder()
    i, n, say = m.end(), len(metin), 0
    bulunan = {}
    kalan = set(gerekli)
    while i < n and kalan:
        while metin[i] in " \n\r\t,":
            i += 1
        if metin[i] == "]":
            break
        ring, i = dec.raw_decode(metin, i)
        if say in kalan:
            bulunan[say] = ring
            kalan.discard(say)
        say += 1
    return bulunan


def main():
    yol, cikti, gunler = sys.argv[1], sys.argv[2], sys.argv[3:]
    os.makedirs(cikti, exist_ok=True)
    metin = io.open(yol, encoding="utf-8").read()
    H = oku_degisken(metin, "DEVLET_HARITA")
    HL = oku_degisken(metin, "DEVLET_PARCA_HALKA")
    aktif = {g: [] for g in gunler}
    gerekli = set()
    for d in H:
        for dn in d.get("dnm") or []:
            f, t = GN.gun(dn["f"]), GN.gun(dn["t"])
            for g in gunler:
                if f <= GN.gun(g) < t:
                    aktif[g].append((d["id"], dn.get("g") or []))
                    for p in dn.get("g") or []:
                        if isinstance(p, int):
                            gerekli.update(h for h in HL[p])
    print("gerekli halka:", len(gerekli), flush=True)
    halka = halkalari_tara(metin, gerekli)
    del metin
    from shapely.geometry import Polygon, mapping
    from shapely.ops import unary_union
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    from matplotlib.patches import Polygon as MP
    try:
        import contextlib
        with contextlib.redirect_stdout(io.StringIO()):
            import renkler as R
        renk = lambda k: R.BOYALAR.get(k, ("?", "#888888"))[1]
    except Exception:
        renk = lambda k: "#888888"
    ozet = []
    for g in gunler:
        feats, kms = [], {}
        for did, parcalar in aktif[g]:
            polys = []
            for p in parcalar:
                rings = [halka[h] for h in HL[p] if h in halka] if isinstance(p, int) else [p]
                rings = [r for r in rings if len(r) >= 4]
                if rings:
                    pg = Polygon(rings[0], rings[1:])
                    polys.append(pg if pg.is_valid else pg.buffer(0))
            if not polys:
                continue
            u = unary_union(polys)
            c = u.centroid
            km2 = u.area * 111.32 * math.cos(math.radians(c.y)) * 110.574
            kms[did] = kms.get(did, 0) + round(km2)
            feats.append((did, u))
        fig, ax = plt.subplots(figsize=(16, 8), dpi=110)
        for did, u in feats:
            for p in (u.geoms if hasattr(u, "geoms") else [u]):
                if p.geom_type == "Polygon":
                    ax.add_patch(MP(list(p.exterior.coords), closed=True, fc=renk(did), ec="#333333", lw=0.3, alpha=0.7))
        ax.set_xlim(-12, 130); ax.set_ylim(-10, 62); ax.set_aspect(1.25); ax.set_facecolor("#f2efe6")
        ax.set_title("%s · %d devlet/kültür · boyalı ≈ %s km² (KOŞU çıktısı)" % (g, len(kms), format(sum(kms.values()), ",")))
        fig.savefig(os.path.join(cikti, g + ".png")); plt.close(fig)
        with io.open(os.path.join(cikti, g + ".geojson"), "w", encoding="utf-8") as f:
            json.dump({"type": "FeatureCollection", "features": [
                {"type": "Feature", "properties": {"id": d, "renk": renk(d)}, "geometry": mapping(u)} for d, u in feats]}, f)
        ozet.append({"gun": g, "devlet": len(kms), "toplam_km2": sum(kms.values()), "devlet_km2": dict(sorted(kms.items(), key=lambda x: -x[1])[:12])})
        print(ozet[-1]["gun"], ozet[-1]["devlet"], ozet[-1]["toplam_km2"], flush=True)
    with io.open(os.path.join(cikti, "ozet.json"), "w", encoding="utf-8") as f:
        json.dump(ozet, f, ensure_ascii=False, indent=1)


if __name__ == "__main__":
    main()
