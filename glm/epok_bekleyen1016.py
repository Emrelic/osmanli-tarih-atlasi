# -*- coding: utf-8 -*-
"""Bekleyen (satırsız) noktalari listeler: ad · slug · yanlis-mi · ara-durumu."""
import io, json, os, sys
if __name__ == "__main__":
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def yukle(p):
    out = []
    if os.path.exists(p):
        for l in io.open(p, encoding="utf-8"):
            if l.strip():
                out.append(json.loads(l))
    return out

evren = json.load(io.open(os.path.join(KOK, "glm", "epok_evren.json"), encoding="utf-8"))
asama = {}
for d in yukle(os.path.join(KOK, "glm", "epok_asama1.jsonl")):
    asama[d["ad"]] = d
tsv = os.path.join(KOK, "denetim", "GLM1-EPOK-SAHIP-1016.tsv")
yazili = set()
for i, l in enumerate(io.open(tsv, encoding="utf-8")):
    if i == 0:
        continue
    if l.strip():
        yazili.add(l.split("\t")[0])
yanlis = {d["ad"]: d for d in yukle(os.path.join(KOK, "glm", "epok_yanlis1016.jsonl"))}
ara = {}
for d in yukle(os.path.join(KOK, "glm", "epok_ara1016.jsonl")):
    ara[d["ad"]] = d
bekleyen = [n for n in evren if n["ad"] in asama and n["ad"] not in yazili]
print("bekleyen:", len(bekleyen))
for n in bekleyen:
    ad = n["ad"]
    t = asama[ad]
    y = yanlis.get(ad)
    a = ara.get(ad)
    print(f"- {ad} · slug={t.get('slug')} http={t.get('http')} · yanlis={bool(y)} · ara={a['sonuc'] if a else 'yok'} slug2={a.get('slug') if a else '-'}")
