# -*- coding: utf-8 -*-
"""ARAC-SICIL-CAPRAZ-0910 — hukum x delil_atlas caprazi + hukumlu kume dokumu.

Girdi : denetim/OLCUM-SICIL-KULLIYAT-0910.json (ARAC-SICIL-OKU-0910 uretir)
Cikti : ekrana capraz tablo · denetim/OLCUM-SICIL-HUKUMLU-0910.txt (500 satir)
"""
import json, io, collections

G = "denetim/OLCUM-SICIL-KULLIYAT-0910.json"
CIKTI = "denetim/OLCUM-SICIL-HUKUMLU-0910.txt"

ACIK_HUKUM = {"sirada", "olculecek", "kosu-bekliyor"}

d = json.load(io.open(G, encoding="utf-8"))
ms = d["maddeler"]

capraz = collections.Counter((m["hukum"], m["delil_atlas"]) for m in ms)
hukumler = sorted({m["hukum"] for m in ms})
atlaslar = sorted({m["delil_atlas"] for m in ms})

print("%-14s %s" % ("hukum", " ".join("%12s" % a for a in atlaslar)), " |  toplam")
for h in hukumler:
    satir = [capraz[(h, a)] for a in atlaslar]
    print("%-14s %s  |  %4d" % (h, " ".join("%12d" % x for x in satir), sum(satir)))
print("%-14s %s  |  %4d" % ("TOPLAM",
      " ".join("%12d" % sum(capraz[(h, a)] for h in hukumler) for a in atlaslar), len(ms)))

hukumlu = [m for m in ms if m["hukum"] not in ACIK_HUKUM]
acik = [m for m in ms if m["hukum"] in ACIK_HUKUM]
print()
print("hukumlu:", len(hukumlu), "| acik:", len(acik))
print("hukumlu icinde commit'li:", sum(1 for m in hukumlu if m["delil_commit"].strip()))

# ayni commit'i paylasan maddeler -> kumelenmenin ilk ipucu
c = collections.Counter(m["delil_commit"] for m in hukumlu if m["delil_commit"].strip())
print("benzersiz commit:", len(c), "| en cok paylasilan:", c.most_common(5))

with io.open(CIKTI, "w", encoding="utf-8") as f:
    for m in hukumlu:
        f.write("%s|%s|%s|%s|%s|%s\n" % (
            m["paket"].replace("parti-", "").replace("emrelic-", "E").replace("kasa-", "K"),
            m["no"].replace("H-", ""), m["hukum"],
            (m["delil_commit"] or "-")[:8], (m["delil_atlas"] or "-"),
            (m["baslik"] or m["not_bas"])[:130]))
print("yazildi:", CIKTI)
