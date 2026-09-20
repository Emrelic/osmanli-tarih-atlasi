# -*- coding: utf-8 -*-
"""D-RENK-0073 — M: Emre'nin IKI GORSELINDE renk hattan ne kadar sapiyor?
H-0009 (1828-02-22) ve H-0006 (1827-07-06): o gun cizilen hatlarin uzerinde
~5 km'de bir nokta, +-5 km sag/sol hangi devlete boyali."""
import io, json, math, collections
from shapely.geometry import shape, LineString, Point
from shapely.strtree import STRtree
from shapely.prepared import prep

SP = r"C:\Users\emrem\AppData\Local\Temp\claude\C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-\0f85f827-a96b-4a7c-bfd6-a06cab079a08\scratchpad"
K = json.load(io.open(SP + r"\hatlar.json", encoding="utf-8"))["kayitlar"]

VAKA = [("H-0009 Turkmencay", "1828-02-22", "govde_1828.geojson", (43.90, 37.02, 44.84, 39.85)),
        ("H-0006 Londra",     "1827-07-06", "govde_1827.geojson", (1.94, 48.87, 7.83, 53.74))]
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
    for k in K:
        if k["nokta"] < 2:
            continue
        f, t = k.get("f") or "0000-01-01", k.get("t") or "9999-12-31"
        if not (f <= GUN < t):
            continue
        xs = [p[0] for p in k["hat"]]; ys = [p[1] for p in k["hat"]]
        if max(xs) < kutu[0] or min(xs) > kutu[2] or max(ys) < kutu[1] or min(ys) > kutu[3]:
            continue
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
        asim = collections.defaultdict(list)     # sahip -> hattin o sahibin icinde kac km derinde oldugu
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
                # iki yan ayni sahip: hat o sahibin GOVDESININ ICINDE kaliyor.
                # Hattin o govdenin kenarina uzakligi = rengin hatti asma derinligi.
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
