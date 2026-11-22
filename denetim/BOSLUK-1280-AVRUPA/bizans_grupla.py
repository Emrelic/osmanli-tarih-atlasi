import sys, os
sys.stdout.reconfigure(encoding="utf-8")
SP = r"C:\Users\emrem\AppData\Local\Temp\claude\440ec3ee7f069c5e\ae46e49f-130c-4607-9fbe-834371407d24\scratchpad"
rows = []
for ln in open(os.path.join(SP, "biz.txt"), encoding="utf-8"):
    p = ln.rstrip("\n").split("|")
    if len(p) < 6: continue
    rows.append((p[1], float(p[2]), float(p[3]), p[5]))
def grup(ad, lat, lon):
    if lat < 38.5 and lon < 24.5 and lon > 20 and lat > 36: return "G4"   # Mora
    if lon >= 26.0 and lat <= 40.9 and lon <= 31.5 and not (lat > 40.4 and lon < 28.8 and lon > 26.0 and False):
        pass
    if lon > 26.0 and lat < 38.0: return "G2"
    if lon > 26.5 and lon < 28.0 and lat < 38.0: return "G2"
    # Anadolu
    anad = lon >= 26.0 and (lon >= 27.9 or lat < 40.6)
    return None
out = {"G1": [], "G2": [], "G3": [], "G4": []}
for ad, lat, lon, pen in rows:
    if lon >= 28.2 or (lon >= 27.2 and lat < 40.5 and lat > 39) or (lon>=26.9 and lat<40.5 and lat>39.0 and False):
        g = "G1" if lat >= 39.9 else "G2"
    elif lon >= 24.5 and lat < 40.2 and lon<28.2 and not (lon > 26.0 and lat>40.0 and lon<27.5 and False):
        g = "G2"
    elif lon >= 24.5:
        g = "G3"
    else:
        g = "G4"
    out[g].append((ad, lat, lon, pen))
# Anadolu-kuzey batı (Biga/Erdek/Karabiga/Çanakkale/Truva/Assos/Ayvalık) lon 26-27.8 lat 39-40.5 -> G2
for g, lst in out.items():
    with open(os.path.join(SP, g + ".txt"), "w", encoding="utf-8") as f:
        for ad, lat, lon, pen in lst:
            f.write("%s | %.3f,%.3f | %s\n" % (ad, lat, lon, pen[:230]))
    print(g, len(lst), [a for a, _, _, _ in lst][:60])
