# -*- coding: utf-8 -*-
"""genel parca ekleyici: py glm/epok_karar_ekle.py <parca-dosya-adi>
orn: py glm/epok_karar_ekle.py epok_karar_p3.jsonl"""
import io, json, os, sys
if __name__ == "__main__":
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ana = os.path.join(KOK, "glm", "epok_karar.jsonl")
if len(sys.argv) != 2:
    print("kullanim: py glm/epok_karar_ekle.py <parca.jsonl>"); sys.exit(2)
parca = os.path.join(KOK, "glm", sys.argv[1])

mevcut = set()
with io.open(ana, encoding="utf-8") as f:
    for l in f:
        l = l.strip()
        if l:
            mevcut.add(json.loads(l)["ad"])

eklenen, atlanan = 0, []
with io.open(parca, encoding="utf-8") as f, \
     io.open(ana, "a", encoding="utf-8", newline="\n") as cik:
    for l in f:
        l = l.strip()
        if not l:
            continue
        d = json.loads(l)
        if d["ad"] in mevcut:
            atlanan.append(d["ad"])
            continue
        cik.write(json.dumps(d, ensure_ascii=False) + "\n")
        mevcut.add(d["ad"])
        eklenen += 1

kova = {}
with io.open(ana, encoding="utf-8") as f:
    for l in f:
        if l.strip():
            d = json.loads(l)
            kova[d["kova"]] = kova.get(d["kova"], 0) + 1
print("eklenen:", eklenen, "· atlanan:", atlanan)
print("toplam karar:", sum(kova.values()), "· kova:", dict(sorted(kova.items())))
