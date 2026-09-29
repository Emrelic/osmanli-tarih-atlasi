# KRONO-ITALYA-0929 — DUZELTME eki: (a) künye-içi mükerrer 38 satır, (b) kaynak zayıf/atlas-içi maddeler. Salt okunur.
import json, os, re, sys, io
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
d = json.load(open(os.environ["TEMP"] + "/tum.json", encoding="utf-8"))
D = {x["id"]: x for x in d["devletler::DEVLETLER"]}
out = []
L = d["kronoloji_italya.js::KRONOLOJI_COK_ITALYA"]
out.append("## (a) İtalya.js maddeleri — künyenin gömülü maddesiyle AYNI gün (yakın mükerrer)\nindeks\tt\tkünye\tbenim b\tkünye b")
n = 0
for i, x in enumerate(L):
    for kid in (x.get("devletler") or [x["devlet"]]):
        for o in D[kid].get("kronoloji", []) or []:
            if o["t"] == x["t"] and o["b"] != x["b"]:
                n += 1
                out.append("%d\t%s\t%s\t%s\t%s" % (i, x["t"], kid, x["b"][:60], o["b"][:60]))
out.append("TOPLAM %d" % n)
out.append("\n## (b) kaynak: alanı atlasın kendisi (\"Atlas referans değildir\" §4)")
out.append("dosya\tindeks\tt\tb\tkaynak(ilk 90)")
for anahtar, ad in (("kronoloji_venedik.js::KRONOLOJI_VENEDIK", "venedik.js"), ("kronoloji_italya.js::KRONOLOJI_COK_ITALYA", "italya.js")):
    for i, x in enumerate(d[anahtar]):
        k = x["kaynak"]
        if re.match(r"(data/|depo|CLAUDE|denetim/)", k) or "devletler.js" in k[:60] or "savaslar.js" in k[:60]:
            out.append("%s\t%d\t%s\t%s\t%s" % (ad, i, x["t"], x["b"][:55], k[:90].replace("\n", " ")))
out.append("\n## (c) italya.js — kaynak 'gün YAKLAŞIK' (72): gün kaynaksız, ama YYYY-MM-DD yazılmış (sahte kesinlik adayı)")
for i, x in enumerate(L):
    if re.match(r"bulunamadı — gün YAKLAŞIK", x["kaynak"]):
        out.append("%d\t%s\t%s\t%s" % (i, x["t"], x["devlet"] if "devlet" in x else "+".join(x["devletler"]), x["b"][:70]))
V = d["kronoloji_venedik.js::KRONOLOJI_VENEDIK"]
out.append("\n## (d) venedik.js — kaynak 'bulunamadı' ile başlayan (36)")
for i, x in enumerate(V):
    if x["kaynak"].startswith("bulunamadı"):
        out.append("%d\t%s\t%s" % (i, x["t"], x["b"][:70]))
io.open("denetim/KRONO-ITALYA-0929-DUZELTME-EK.tsv", "w", encoding="utf-8").write("\n".join(out) + "\n")
print(n, "mükerrer satır ·", len(out), "satır yazıldı")
