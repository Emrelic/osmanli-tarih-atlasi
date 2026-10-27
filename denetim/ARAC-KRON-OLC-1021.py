# -*- coding: utf-8 -*-
"""(A) Kronoloji↔harita ölçümü: devletler.js'te f<1281 künyesi olan her devlet için kronolojide kaç madde var,
kuruluş/yayılma/kayıp/çöküş maddeleri var mı, yer_id oranı. Hafif, salt okunur.
Kullanım: py -I denetim/ARAC-KRON-OLC-1021.py <veri.json>  -> denetim/KRON-1281-OLC-1021.json + .md"""
import sys, io, os, re, json, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
w = json.load(open(sys.argv[1], encoding="utf-8"))["win"]
dev = {d["id"]: d for d in w["DEVLETLER"] if d.get("id")}


def yil(s):
    m = re.match(r"^(-?\d{1,5})", s or "") if isinstance(s, str) else None
    return int(m.group(1)) if m else None


KUR = {"kurulus"}
YAY = {"fetih", "toprak-kazanc"}
KAY = {"kayip", "toprak-kayip"}
COK = {"cokus", "yikilis"}
maddeler, gor = [], set()
for k, v in w.items():
    if isinstance(v, list):
        for it in v:
            if isinstance(it, dict) and it.get("b") and isinstance(it.get("t"), str) and (it["t"], it["b"]) not in gor:
                gor.add((it["t"], it["b"]))
                maddeler.append(it)
for d in dev.values():
    for it in d.get("kronoloji") or []:
        if isinstance(it, dict) and it.get("b") and isinstance(it.get("t"), str) and (it["t"], it["b"]) not in gor:
            gor.add((it["t"], it["b"]))
            it = dict(it)
            it.setdefault("devlet", d["id"])
            maddeler.append(it)
per = collections.defaultdict(list)
for it in maddeler:
    ids = {x if isinstance(x, str) else (x or {}).get("id") for alan in ("taraflar", "devletler") for x in (it.get(alan) or [])}
    if isinstance(it.get("devlet"), str):
        ids.add(it["devlet"])
    for i in ids:
        if i in dev:
            per[i].append(it)
sat = []
for i, d in dev.items():
    f = yil(d.get("f"))
    if f is None or f >= 1281:
        continue
    ms = per.get(i, [])
    t = yil(d.get("t"))
    kat = collections.Counter()
    for it in ms:
        et = set(it.get("etiket") or []) | {it.get("k"), it.get("tur")}
        if et & KUR: kat["kurulus"] += 1
        if et & YAY: kat["yayilma"] += 1
        if et & KAY: kat["kayip"] += 1
        if et & COK: kat["cokus"] += 1
    ms_oncesi = [it for it in ms if (yil(it["t"]) or 0) < 1281]
    yer = sum(1 for it in ms_oncesi if it.get("yer_id"))
    sat.append({"id": i, "ad": d.get("ad"), "bolge": d.get("bolge"), "f": d.get("f"), "t": d.get("t"), "madde": len(ms), "madde_1281_oncesi": len(ms_oncesi),
                "yer_id_orani": round(yer / len(ms_oncesi), 2) if ms_oncesi else None, "kurulus": kat["kurulus"], "yayilma": kat["yayilma"], "kayip": kat["kayip"], "cokus": kat["cokus"],
                "omur_yil": (min(t if t is not None else 1281, 1281) - f) if f is not None else None})
sat.sort(key=lambda x: (-(x["omur_yil"] or 0), x["madde_1281_oncesi"]))
json.dump(sat, open(os.path.join(KOK, "denetim", "KRON-1281-OLC-1021.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
n = len(sat)
print("f<1281 künye:", n)
print("1281 öncesi HİÇ maddesi yok:", sum(1 for x in sat if x["madde_1281_oncesi"] == 0))
print("1-2 maddesi olan:", sum(1 for x in sat if 1 <= x["madde_1281_oncesi"] <= 2))
print("kuruluş maddesi yok:", sum(1 for x in sat if x["kurulus"] == 0), "| kayıp/çöküş maddesi yok:", sum(1 for x in sat if x["kayip"] + x["cokus"] == 0))
print("yer_id oranı <%50 (maddesi olanlar):", sum(1 for x in sat if x["yer_id_orani"] is not None and x["yer_id_orani"] < 0.5))
md = ["# 1281 öncesi kronoloji ↔ künye ölçümü (22 Ekim 2026)", "", "Üreten: `denetim/ARAC-KRON-OLC-1021.py` (hafif). %d künye (f<1281). Sıra: ömür uzun + maddesi az önce." % n, "",
      "| id | ad | bölge | f | t | madde<1281 | kuruluş | yayılma | kayıp | çöküş | yer_id oranı |", "|---|---|---|---|---|---|---|---|---|---|---|"]
for x in sat[:200]:
    md.append("| %s | %s | %s | %s | %s | %d | %d | %d | %d | %d | %s |" % (x["id"], (x["ad"] or "")[:30], x["bolge"], x["f"], x["t"], x["madde_1281_oncesi"], x["kurulus"], x["yayilma"], x["kayip"], x["cokus"], x["yer_id_orani"]))
open(os.path.join(KOK, "denetim", "KRON-1281-OLC-1021.md"), "w", encoding="utf-8").write("\n".join(md) + "\n")
