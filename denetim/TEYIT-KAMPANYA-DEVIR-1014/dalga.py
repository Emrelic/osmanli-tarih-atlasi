"""Kalan güvensiz maddeleri (pilotlar hariç) künye/dosya bütünlüğünü koruyarak ≤80'lik dilimlere böler."""
import csv, re, sys, os, glob, collections, subprocess
kok, girdi_dizin, n_dilim, onek = sys.argv[1], sys.argv[2], int(sys.argv[3]), sys.argv[4]
dev = subprocess.run(["git", "-C", kok, "show", "origin/main:data/devletler.js"], capture_output=True).stdout.decode("utf-8")
bolge = dict(re.findall(r'id:"([^"]+)"[^\n]*?bolge:"([^"]+)"', dev))
tsv = subprocess.run(["git", "-C", kok, "show", "origin/main:denetim/KAYNAK-GUVEN-1014/guvensiz_maddeler.tsv"], capture_output=True).stdout.decode("utf-8")
rows = list(csv.DictReader(tsv.splitlines(), delimiter="\t"))
yapilan = set()
for p in glob.glob(os.path.join(girdi_dizin, "*.tsv")):
    if p.endswith(".cikti.tsv"):
        continue
    for r in csv.DictReader(open(p, encoding="utf-8"), delimiter="\t"):
        yapilan.add((r["dosya"], r["anahtar"]))
kalan = [r for r in rows if (r["dosya"], r["anahtar"]) not in yapilan]
# grup: künye kronolojisinde künye; dosyada dosya (büyük dosyalar 80'lik parçalara)
ONCELIK = ["anadolu", "kafkasya", "iran", "arabistan", "mezopotamya", "suriye-filistin", "misir-sudan",
           "kuzey-afrika", "orta-asya", "balkanlar", "dogu-avrupa", "orta-avrupa", "italya", "bati-avrupa",
           "dogu-asya", "guney-asya", "guneydogu-asya", "dogu-afrika", "orta-afrika", "bati-afrika",
           "guney-afrika", "okyanusya", "orta-amerika-karayip", "orta-amerika", "kuzey-amerika", "guney-amerika"]
gruplar = collections.OrderedDict()
dosya_m = [r for r in kalan if r["evren"] != "kunye-kronoloji"]
for r in dosya_m:
    gruplar.setdefault(("0dosya", r["dosya"]), []).append(r)
kun = [r for r in kalan if r["evren"] == "kunye-kronoloji"]
for r in sorted(kun, key=lambda r: (ONCELIK.index(bolge.get(r["anahtar"].split("#")[0], "")) if bolge.get(r["anahtar"].split("#")[0], "") in ONCELIK else 99, r["anahtar"].split("#")[0])):
    kid = r["anahtar"].split("#")[0]
    gruplar.setdefault((bolge.get(kid, "?"), kid), []).append(r)
dilimler, cur = [], []
for (b, g), lst in gruplar.items():
    while len(lst) > 80:
        dilimler.append(lst[:80]); lst = lst[80:]
    if len(cur) + len(lst) > 80 and cur:
        dilimler.append(cur); cur = []
    cur += lst
if cur:
    dilimler.append(cur)
alan = list(rows[0].keys()) + ["bolge"]
print("kalan madde:", len(kalan), "· dilim:", len(dilimler))
for i, d in enumerate(dilimler[:n_dilim], 1):
    ad = "%s%02d" % (onek, i)
    with open(os.path.join(girdi_dizin, ad + ".tsv"), "w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=alan, delimiter="\t", lineterminator="\n")
        w.writeheader()
        for r in d:
            r = dict(r); r["bolge"] = bolge.get(r["anahtar"].split("#")[0], "") if r["evren"] == "kunye-kronoloji" else ""
            w.writerow(r)
    ozet = collections.Counter((r["dosya"] if r["evren"] != "kunye-kronoloji" else "kunye:" + r["bolge"] if False else ("kunye:" + bolge.get(r["anahtar"].split("#")[0], "?"))) for r in d)
    print(ad, len(d), dict(ozet.most_common(4)))
