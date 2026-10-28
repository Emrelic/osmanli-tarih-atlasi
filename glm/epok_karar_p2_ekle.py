# -*- coding: utf-8 -*-
"""epok_karar_p2.jsonl parcasini epok_karar.jsonl sonuna ekler, sonra kova sayar."""
import io, json, os
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ana = os.path.join(KOK, "glm", "epok_karar.jsonl")
parca = os.path.join(KOK, "glm", "epok_karar_p2.jsonl")

# ad fiili yok: ayni ad iki kez yazilmasin
mevcut = {}
with io.open(ana, encoding="utf-8") as f:
    for l in f:
        l = l.strip()
        if not l:
            continue
        d = json.loads(l)
        mevcut.setdefault(d["ad"], 0)
        mevcut[d["ad"]] += 1

eklenen = 0
atlanan = []
with io.open(parca, encoding="utf-8") as f, io.open(ana, "a", encoding="utf-8", newline="\n") as cik:
    for l in f:
        l = l.strip()
        if not l:
            continue
        d = json.loads(l)
        if d["ad"] in mevcut:
            atlanan.append(d["ad"])
            continue
        cik.write(json.dumps(d, ensure_ascii=False) + "\n")
        mevcut[d["ad"]] = 1
        eklenen += 1

print("eklenen:", eklenen, "atlanan:", atlayan := atlanan)
kova = {}
with io.open(ana, encoding="utf-8") as f:
    for l in f:
        if l.strip():
            d = json.loads(l)
            kova[d["kova"]] = kova.get(d["kova"], 0) + 1
top = sum(kova.values())
print("toplam karar:", top, "kova:", dict(sorted(kova.items())))
