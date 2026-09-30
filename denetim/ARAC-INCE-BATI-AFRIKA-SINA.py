# INCE-BATI-AFRIKA — kapı ②③: taraf kimlikleri devletler.js'te var mı · künye penceresi · küresel ad.
import re, io, sys, os, glob, json, subprocess
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
dosya = os.path.join(KOK, "data", "kronoloji_cok_ince_bati_afrika.js")
ad = "KRONOLOJI_COK_INCE_BATI_AFRIKA"
dev = io.open(os.path.join(KOK, "data", "devletler.js"), encoding="utf-8").read()
pen = {}
for b in re.split(r'\n(?=\{ id:")', dev):
    m = re.match(r'\{ id:"([^"]+)"', b)
    if m:
        f = re.search(r'[ ,]f:\s*"([^"]*)"', b)
        t = re.search(r'[ ,]t:\s*"([^"]*)"', b)
        pen[m.group(1)] = (f and f.group(1), t and t.group(1))
js = "process.stdout.write(JSON.stringify((function(){var window={};eval(require('fs').readFileSync(%s,'utf8'));return window.%s})()))" % (json.dumps(dosya), ad)
out = subprocess.run(["node", "-e", js], capture_output=True, text=True, encoding="utf-8")
veri = json.loads(out.stdout)
print("madde:", len(veri))
eslenmeyen = 0; pencere_asim = 0
zorunlu = ["t", "b", "tur", "onem", "dunya", "kapsam", "etiket", "yer_id", "d", "kaynak", "taraflar"]
def pad(y):
    return y.zfill(len(y)) if y else y
for x in veri:
    eks = [k for k in zorunlu if k not in x or (k != "yer_id" and x[k] in ("", None, []))]
    if eks:
        print("EKSIK", x["t"], eks)
    for tid in x["taraflar"]:
        if tid not in pen:
            eslenmeyen += 1
            print("ESLENMEYEN", tid)
        else:
            f, t = pen[tid]
            if not (f <= x["t"] <= t):
                pencere_asim += 1
                print("PENCERE DISI", x["t"], tid, f, t)
            if len(x["t"]) != 10:
                print("TARIH BICIM", x["t"])
print("eslenemeyen taraf:", eslenmeyen, "· kunye penceresi disi:", pencere_asim)
# küresel ad: başka dosyada geçiyor mu
n = 0
evren = 0
for p in glob.glob(os.path.join(KOK, "data", "*.js")):
    evren += 1
    if os.path.abspath(p) == os.path.abspath(dosya):
        continue
    if ad in io.open(p, encoding="utf-8", errors="replace").read():
        n += 1
        print("AD BASKA DOSYADA:", p)
print("kuresel ad baska dosyada:", n, "· taranan data/*.js:", evren)
print("gunlu:", sum(1 for x in veri if not x["t"].endswith("-01-01")), "· yil-duzeyi:", sum(1 for x in veri if x["t"].endswith("-01-01")))
print("kunye sayisi:", len({t for x in veri for t in x["taraflar"]}))
