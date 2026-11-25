# Her cikti dosyasinin n'leri kendi kaynak paketine ait mi?
import json, os, glob, re, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), "yeni")
izin = {}
for y in glob.glob(os.path.join(D, "*_*.txt")):
    ad = os.path.basename(y)[:-4]
    if re.match(r"^(arayuz|devlet|olay)_\d+$", ad):
        izin[ad] = [int(l.split("\t", 1)[0]) for l in open(y, encoding="utf-8") if "\t" in l]
for dil in "sq bs hy ka ku".split():
    kotu = {}; eksik = {}; toplam = 0
    for y in sorted(glob.glob(os.path.join(D, dil, "c_*.jsonl"))):
        m = re.match(r"^c_((arayuz|devlet|olay)_\d+)", os.path.basename(y))
        if not m or m.group(1) not in izin: kotu[os.path.basename(y)] = "paket eslesmedi"; continue
        ns = []
        for l in open(y, encoding="utf-8-sig", errors="replace"):
            g = re.match(r'\s*\{\s*"n"\s*:\s*"?(\d+)', l)
            if g: ns.append(int(g.group(1)))
        a = izin[m.group(1)]; yab = [n for n in ns if n not in set(a)]
        toplam += len(ns)
        if yab: kotu[m.group(1)] = "%d/%d yabanci n (ornek %s, beklenen %d-%d)" % (len(yab), len(ns), yab[:3], a[0], a[-1])
        elif ns != a[:len(ns)] or len(ns) != len(a): eksik[m.group(1)] = "%d/%d satir ya da sira farkli" % (len(ns), len(a))
    print(dil, "| satir", toplam, "| YABANCI n iceren dosya", len(kotu), "| eksik/sira farkli", len(eksik))
    for k, v in list(kotu.items())[:12]: print("    ", k, v)
    if eksik: print("    eksik ornek:", list(eksik.items())[:5])
