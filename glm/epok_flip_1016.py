# -*- coding: utf-8 -*-
"""25 flip adayının autosuggest eşleşme listelerini (slug · başlık) basar."""
import io, json, os, sys
if __name__ == "__main__":
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ara = {}
for l in io.open(os.path.join(KOK, "glm", "epok_ara1016.jsonl"), encoding="utf-8"):
    if l.strip():
        d = json.loads(l)
        ara[d["ad"]] = d
tsv = os.path.join(KOK, "denetim", "GLM1-EPOK-SAHIP-1016.tsv")
yazili = set()
for i, l in enumerate(io.open(tsv, encoding="utf-8")):
    if i and l.strip():
        yazili.add(l.split("\t")[1])
evren = {e["ad"]: e for e in json.load(io.open(os.path.join(KOK, "glm", "epok_evren.json"), encoding="utf-8"))}
asama = {}
for l in io.open(os.path.join(KOK, "glm", "epok_asama1.jsonl"), encoding="utf-8"):
    if l.strip():
        d = json.loads(l)
        asama[d["ad"]] = d
for ad in sorted(yazili.symmetric_difference(set(evren)) & set(asama)):
    a = ara.get(ad)
    if not a or a.get("sonuc") != "bulundu":
        continue
    print(f"## {ad} [{evren[ad]['bolge']}] atlas={evren[ad]['sahip_ad']} · eski-slug={asama[ad].get('slug')}")
    for t in a.get("tumu", []):
        isaret = " <<<" if t.get("slug") == a.get("slug") else ""
        print(f"   {t.get('slug')}  ·  {t.get('baslik', '?')}{isaret}")
    print()
