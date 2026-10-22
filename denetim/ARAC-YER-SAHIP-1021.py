# -*- coding: utf-8 -*-
"""Aday yerleşimler için sahip-devlet eşleme adayları (yazmaz; yalnız ölçer).
Kaynaklar: (a) devletler.js DEVLETLER (baskent / bk), (b) DEVLET-LISTESI kayitlar (baskent, sehirler, devredilebilir),
(c) kronoloji maddelerinin taraflar[] alanı (yerin geçtiği madde, tarih).
Kullanım: py -I denetim/ARAC-YER-SAHIP-1021.py <veri.json>  -> denetim/yer-arastirma/SAHIP-ADAY-1021.json"""
import sys, io, os, re, json, glob, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
from ad_esanlam import sadelestir as N

KL = os.path.join(KOK, "denetim", "yer-arastirma")
w = json.load(open(sys.argv[1], encoding="utf-8"))["win"]
dev = {d["id"]: d for d in w["DEVLETLER"] if d.get("id")}
dl = json.load(open(os.path.join(KL, "_DEVLET-LISTESI-kopya.json"), encoding="utf-8"))
dlk = {d["id"]: d for d in dl["kayitlar"]}


def yil(s):
    m = re.match(r"^(-?\d{1,5})", s or "") if isinstance(s, str) else None
    return int(m.group(1)) if m else None


# devlet -> yer adları (normalleştirilmiş)
dev_yer = collections.defaultdict(set)
for i, d in dev.items():
    for k in ("baskent",):
        v = d.get(k)
        if isinstance(v, str):
            for p in re.split(r"[;,/]", re.sub(r"\([^)]*\)", " ", v)):
                if N(p):
                    dev_yer[N(p)].add(("devletler.js", i))
    for bk in d.get("bk") or []:
        v = bk.get("baskent") if isinstance(bk, dict) else None
        if isinstance(v, str) and N(v):
            dev_yer[N(v)].add(("devletler.js", i))
for i, d in dlk.items():
    for v in [d.get("baskent")] + list(d.get("sehirler") or []):
        if isinstance(v, str):
            for p in re.split(r"[;,/]", re.sub(r"\([^)]*\)", " ", v)):
                if N(p):
                    dev_yer[N(p)].add(("DEVLET-LISTESI", i))

# maddeler: yer adı -> [(t, devlet id, başlık)]
tarafli = collections.defaultdict(list)
for k, v in w.items():
    if not isinstance(v, list):
        continue
    for it in v:
        if not (isinstance(it, dict) and it.get("b") and isinstance(it.get("t"), str)):
            continue
        ids = [x if isinstance(x, str) else (x or {}).get("id") for alan in ("taraflar", "devletler") for x in (it.get(alan) or [])]
        if isinstance(it.get("devlet"), str):
            ids.append(it["devlet"])
        ids = [i for i in ids if i in dev or i in dlk]
        if not ids:
            continue
        for fld in ("yer_id", "yer"):
            val = it.get(fld)
            if isinstance(val, str):
                for p in re.split(r"[;,/·→]| ve ", val):
                    for a in [re.sub(r"\([^)]*\)", " ", p)] + re.findall(r"\(([^)]*)\)", p):
                        n = N(a)
                        if len(n) >= 3:
                            for i in ids:
                                tarafli[n].append((it["t"], i, it["b"][:80]))

out = []
for f in sorted(glob.glob(os.path.join(KL, "aday", "yerlesimler_once1281_yt_*.js"))):
    s = open(f, encoding="utf-8").read()
    for b in re.split(r"\n(?=\{ ad:)", s)[1:]:
        m = re.match(r'\{ ad:"([^"]*)", tur:"([^"]*)", lat:(-?[\d.]+), lon:(-?[\d.]+)', b)
        k = re.search(r"kronolojide (.*?) adıyla geçer", b)
        if not m:
            continue
        ad, tur = m.group(1), m.group(2)
        kron = k.group(1) if k else ad
        keys = {N(kron), N(re.sub(r"\s*\(.*", "", ad))} | {N(x) for x in re.findall(r"\(([^)]*)\)", ad)}
        keys.discard("")
        bask = sorted({x for kk in keys for x in dev_yer.get(kk, ())})
        tar = sorted({(t, i, bt) for kk in keys for (t, i, bt) in tarafli.get(kk, ())})
        out.append({"ad": ad, "kronoloji_adi": kron, "tur": tur, "dosya": os.path.basename(f),
                    "baskent_eslesmesi": [{"kaynak": a, "devlet": i, "f": (dev.get(i) or dlk.get(i) or {}).get("f"), "t": (dev.get(i) or dlk.get(i) or {}).get("t"),
                                           "devredilebilir": (dlk.get(i) or {}).get("devredilebilir"), "dogrulama": (dlk.get(i) or {}).get("dogrulama"), "devletler_jsde": i in dev} for a, i in bask],
                    "madde_taraflari": [{"t": t, "devlet": i, "madde": bt, "devletler_jsde": i in dev} for t, i, bt in tar[:12]]})
json.dump(out, open(os.path.join(KL, "SAHIP-ADAY-1021.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
y = [x for x in out if x["tur"] != "bolge"]
print("kayıt", len(out), "yerleşim", len(y))
print("başkent eşleşmesi olan yerleşim:", sum(1 for x in y if x["baskent_eslesmesi"]))
print("madde tarafı olan yerleşim:", sum(1 for x in y if x["madde_taraflari"]))
print("ikisinden biri:", sum(1 for x in y if x["baskent_eslesmesi"] or x["madde_taraflari"]))
print("devletler.js'te olan sahip adayı olan yerleşim:", sum(1 for x in y if any(e["devletler_jsde"] for e in x["baskent_eslesmesi"]) or any(e["devletler_jsde"] for e in x["madde_taraflari"])))
