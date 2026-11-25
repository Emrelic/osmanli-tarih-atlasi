# Itilmis dallardaki olay kayitlari: kaynak ozeti, uzunluk orani, 3-4 haneli sayi uyumu (paket penceresi bazinda)
import sys, os, json, re
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
S = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, S)
import dogrula_ortak as O, ceviri as C
OL = json.load(open(os.path.join(S, "yeni", "olay_kaynak.json"), encoding="utf-8"))
O.git("fetch", "origin", "--quiet")
def sayi(s): return set(re.findall(r"(?<!\d)\d{3,4}(?!\d)", s))
for dil in "sq bs hy ka ku".split():
    kay = O.oku("origin/ceviri-%s-1126" % dil, dil, "olay")
    ozet_kotu = kisa = uzun = sb = st = 0; pencere = {}
    for k, i in enumerate(OL["idler"]):
        if i not in kay: continue
        src = OL["kaynak"][i]
        for a, s in src.items():
            if a not in kay[i]: continue
            v, h = kay[i][a]
            if h != C.ozet(s): ozet_kotu += 1
            if len(s) > 150:
                r = len(v) / len(s); kisa += r < 0.6; uzun += r > 1.9
        s = " ".join(src.values()); v = " ".join(x[0] for x in kay[i].values()); ns = sayi(s)
        if ns:
            ok = len(ns & sayi(v)) >= max(1, (len(ns) + 1) // 2)
            sb += 1; st += ok
            w = pencere.setdefault(k // 40, [0, 0]); w[0] += 1; w[1] += ok
    kotu = [(w * 40 + 1, "%d/%d" % (t, b)) for w, (b, t) in sorted(pencere.items()) if b >= 5 and t < 0.8 * b]
    print("%s kayit %d | ozet uyumsuz %d | cok kisa %d cok uzun %d | sayi uyumu %d/%d | uyumu dusuk 40'lik pencere %d %s" % (dil, len(kay), ozet_kotu, kisa, uzun, st, sb, len(kotu), kotu[:8]))
