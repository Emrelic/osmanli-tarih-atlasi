# -*- coding: utf-8 -*-
"""Part karar dosyasini glm/epok_karar1016.jsonl'e ekler (ad zaten varsa atlar).
Kullanim: py glm/epok_karar1016_ekle.py <pN.jsonl>"""
import io, json, os, sys
if __name__ == "__main__":
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HEDEF = os.path.join(KOK, "glm", "epok_karar1016.jsonl")
kaynak = os.path.join(KOK, "glm", os.path.basename(sys.argv[1] if len(sys.argv) > 1 else "yok"))
var = set()
if os.path.exists(HEDEF):
    for l in io.open(HEDEF, encoding="utf-8"):
        if l.strip():
            var.add(json.loads(l)["ad"])
eklenen = 0
with io.open(HEDEF, "a", encoding="utf-8") as h:
    for l in io.open(kaynak, encoding="utf-8"):
        if not l.strip():
            continue
        d = json.loads(l)
        if d["ad"] in var:
            print("atlandı (var):", d["ad"])
            continue
        h.write(json.dumps(d, ensure_ascii=False) + "\n")
        var.add(d["ad"])
        eklenen += 1
print(f"eklenen {eklenen} · toplam {len(var)}")
