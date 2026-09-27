"""ASYA-0079 — H-79:3 / H-79:4 kutularinda 1281-01-01 ve kronolojik kesitlerde sahip kimlikler.
Kuru olcum; hicbir dosyaya yazmaz."""
import sys, collections
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, "arac")
import girdi

Y = girdi.yukle(sessiz=True)
K = {d["id"]: d for d in girdi.oku_devletler()}
harita_ters = collections.defaultdict(list)
for d in K.values():
    if d.get("harita"):
        harita_ters[d["harita"]].append(d["id"])

KUTU = {
    "H3-kafkas": (41.0, 44.4, 46.4, 50.2),
    "H4-turkmen": (35.0, 47.2, 49.5, 64.6),
}

def sahip(y, gun):
    for p in y.get("s") or []:
        if p.get("f", "") <= gun < p.get("t", "9999"):
            return p.get("d")
    return None

def tabi(y, gun):
    for p in y.get("v") or []:
        if p.get("f", "") <= gun < p.get("t", "9999"):
            return p.get("d") or p.get("kid")
    return None

def kunye(i):
    if i is None:
        return "SAHIPSIZ"
    k = K.get(i)
    if not k:
        return f"KUNYESIZ (harita-anahtari? {harita_ters.get(i, '-')})"
    return f"{k.get('ad')} [{k.get('f')}..{k.get('t')}] harita={k.get('harita', '-')}"

gunler = sys.argv[1:] or ["1281-01-01"]
for ad, (la0, la1, lo0, lo1) in KUTU.items():
    icerde = [y for y in Y if la0 <= y["lat"] <= la1 and lo0 <= y["lon"] <= lo1]
    print(f"\n=== {ad}  {len(icerde)} nokta (butun zamanlar)")
    for gun in gunler:
        say = collections.Counter()
        orn = collections.defaultdict(list)
        for y in icerde:
            if y.get("f", "0000") > gun or y.get("t", "9999") <= gun:
                continue
            s = sahip(y, gun)
            say[s] += 1
            if len(orn[s]) < 4:
                orn[s].append(f"{y['ad']}({y['lat']:.1f},{y['lon']:.1f})")
        print(f"  -- {gun}")
        for s, n in say.most_common():
            print(f"    {n:4d}  {s}  :: {kunye(s)}  e.g. {', '.join(orn[s])}")
