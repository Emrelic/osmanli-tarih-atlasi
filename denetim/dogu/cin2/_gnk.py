import sys, io, math
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
S = "C:/Users/user/AppData/Local/Temp/claude/C--atlas/2e265d3a-21c7-47e9-ac13-c26e0cabd3c6/scratchpad/gaz-geonames1000/cities1000.txt"
# kullanim: py _gnk.py lat lon yaricap_km
la0, lo0, r = float(sys.argv[1]), float(sys.argv[2]), float(sys.argv[3])
def km(a, b, c, d):
    p1, p2 = math.radians(a), math.radians(c); dl = math.radians(d - b)
    h = math.sin((p2 - p1) / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 12742 * math.asin(math.sqrt(h))
for ln in open(S, encoding='utf-8'):
    f = ln.split('\t')
    la, lo = float(f[4]), float(f[5])
    d = km(la0, lo0, la, lo)
    if d <= r: print('%.1f km | %s %s %s %s %s pop %s' % (d, f[0], f[1], f[2], la, lo, f[14]))
