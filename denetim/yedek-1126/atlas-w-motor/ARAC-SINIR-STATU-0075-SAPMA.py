# -*- coding: utf-8 -*-
"""SINIR-STATU-0075 — ARAC-D-RENK-0073-GORSELSAPMA.py'nin uyarlamasi.
H-0003 (Isvicre) · H-0004 (Hollanda) · H-0005 (Sirbistan) gorsellerinde: o gun ve o kutuda
yururlukte olan hatlarin uzerinde ~5 km'de bir nokta, +-5 km sag/sol hangi devlete boyali,
ve o hatlarin YOKLUGUNDA gorsel kutuda hangi devlet gövdeleri var.
Girdi: SP/hatlar.json (ARAC-D-RENK-0073-DOK.js) + SP/govde_<gun>.geojson (GOVDEGUN.js).
SP = kendi scratchpadin (asagida DEGISTIR). 🔴 govde dosyasini diskteki degil HEAD surumu gövdelerden uret
(kilit sirasinda disk surumu yarim yazilmis olabilir)."""
import io, json, math, collections, sys
from shapely.geometry import shape, LineString, Point, box
from shapely.strtree import STRtree
from shapely.prepared import prep

sys.stdout.reconfigure(encoding="utf-8")
SP = r"C:\Users\emrem\AppData\Local\Temp\claude\C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-\5ff25445-e091-44b4-ab3c-92a0887236ff\scratchpad"
K = json.load(io.open(SP + r"\hatlar.json", encoding="utf-8"))["kayitlar"]

VAKA = [("H-0003 Isvicre", "1830-02-03", "govde_1830-02-03.geojson", (4.83, 45.38, 11.44, 48.05)),
        ("H-0004 Hollanda", "1830-02-03", "govde_1830-02-03.geojson", (1.59, 48.91, 8.96, 53.82)),
        ("H-0005 Sirbistan", "1830-11-08", "govde_1830-11-08.geojson", (16.85, 42.22, 22.92, 46.02))]
YAN_KM, ADIM_KM = 5.0, 5.0

for ad, GUN, dosya, kutu in VAKA:
    gj = json.load(io.open(SP + "\\" + dosya, encoding="utf-8"))
    IDH = json.load(io.open(SP + "\\" + dosya.replace(".geojson", "_idharita.json"), encoding="utf-8"))
    g, kim = [], []
    for f in gj["features"]:
        geo = shape(f["geometry"])
        if not geo.is_valid:
            geo = geo.buffer(0)
        g.append(geo); kim.append(f["properties"]["id"])
    agac = STRtree(g); hazir = [prep(x) for x in g]

    def sahip(x, y):
        p = Point(x, y)
        for i in agac.query(p):
            i = int(i)
            if hazir[i].contains(p):
                return kim[i]
        return None

    def hk(t):
        return "osmanli" if t == "osmanli" else IDH.get(t, t)

    print("=" * 70)
    print("%s · %s · kutu %s" % (ad, GUN, kutu))
    # kutuyla kesisen boyali govdeler (gorselde ne boyali)
    kb = box(*kutu)
    ic = collections.Counter()
    for i in range(len(g)):
        if g[i].intersects(kb):
            ic[kim[i]] += g[i].intersection(kb).area
    print("  kutuyla kesisen boyali govdeler (derece2 alan):",
          ", ".join("%s %.2f" % (a, v) for a, v in ic.most_common(12)))
    yururluk = 0
    for k in K:
        if k["nokta"] < 2:
            continue
        f, t = k.get("f") or "0000-01-01", k.get("t") or "9999-12-31"
        if not (f <= GUN < t):
            continue
        xs = [p[0] for p in k["hat"]]; ys = [p[1] for p in k["hat"]]
        if max(xs) < kutu[0] or min(xs) > kutu[2] or max(ys) < kutu[1] or min(ys) > kutu[3]:
            continue
        yururluk += 1
        tr = [hk(x) for x in (k.get("taraflar") or [])]
        hat = LineString(k["hat"])
        uz = 0.0
        c = k["hat"]
        for i in range(len(c) - 1):
            (x1, y1), (x2, y2) = c[i], c[i + 1]
            uz += math.hypot((x2 - x1) * 111.32 * math.cos(math.radians((y1 + y2) / 2)),
                             (y2 - y1) * 111.32)
        n = max(3, min(400, int(uz / ADIM_KM)))
        say = collections.Counter()
        yanlar = collections.Counter()
        asim = collections.defaultdict(list)
        for j in range(n):
            s = (j + 0.5) / n
            p = hat.interpolate(s, normalized=True)
            q = hat.interpolate(min(1.0, s + 0.002), normalized=True)
            vx, vy = q.x - p.x, q.y - p.y
            L = math.hypot(vx, vy) or 1e-9
            kos = math.cos(math.radians(p.y)) or 1e-6
            nx, ny = -vy / L, vx / L
            dd = YAN_KM / 111.32
            sol = sahip(p.x + nx * dd / kos, p.y + ny * dd)
            sag = sahip(p.x - nx * dd / kos, p.y - ny * dd)
            yanlar[(sol, sag)] += 1
            if sol is not None and sol == sag:
                dmin = min((g[i].boundary.distance(p) for i in range(len(g)) if kim[i] == sol),
                           default=None)
                if dmin is not None:
                    asim[sol].append(dmin * 111.32 * math.cos(math.radians(p.y)))
            if set([sol, sag]) == set(tr):
                say["iki yan DOGRU"] += 1
            elif sol in tr or sag in tr:
                say["tek yan dogru"] += 1
            elif sol is None and sag is None:
                say["iki yan BOS"] += 1
            else:
                say["ucuncu devlet"] += 1
        print("  %-28s sinif=%-3s %s..%s · %.0f km · %d nokta · taraf: %s"
              % (k["id"], k.get("sinif"), k.get("f"), k.get("t"), uz, n, " / ".join(tr)))
        for h, v in say.most_common():
            print("      %-16s %3d (%%%.0f)" % (h, v, 100.0 * v / n))
        print("      en sik yan ciftleri:", ", ".join(
            "%s|%s x%d" % (a or "BOS", b or "BOS", v) for (a, b), v in yanlar.most_common(3)))
        for sah, dz in sorted(asim.items(), key=lambda x: -len(x[1])):
            dz.sort()
            print("      '%s' hattin IKI YANINI da boyuyor: %d nokta · hattin o govdenin "
                  "kenarina uzakligi medyan %.0f km, en fazla %.0f km"
                  % (sah, len(dz), dz[len(dz)//2], dz[-1]))
    print("  >> kutuda o gun yururlukteki hat kaydi:", yururluk)
