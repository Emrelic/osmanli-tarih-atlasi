# -*- coding: utf-8 -*-
"""Bölge bölge 1281 öncesi ÖNEMLİ yerleşim sırası (başkentler): devletler.js (baskent / bk) + DEVLET-LISTESI (baskent / sehirler, okundu+kismen-okundu).
Önem puanı = sum over devlet (devletin 1281 öncesi ömrü, yıl) ; devlet sayısı ; ilk yıl. Atlasta var/yok: ad / parantez / ESKI_AD eşlemesi.
Kullanım: py -I denetim/ARAC-YER-ONEMLI-1021.py <veri.json>  -> denetim/once1281/yer-eksik/ONEMLI-YERLESIM-SIRA.tsv (+ yok listesi TSV: ONEMLI-YOK.tsv)"""
import sys, io, os, re, json, ast, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
from ad_esanlam import sadelestir as N

KL = os.path.join(KOK, "denetim", "yer-arastirma")
w = json.load(open(sys.argv[1], encoding="utf-8"))["win"]
dev = {d["id"]: d for d in w["DEVLETLER"] if d.get("id")}
dl = json.load(open(os.path.join(KL, "_DEVLET-LISTESI-kopya.json"), encoding="utf-8"))["kayitlar"]
dlk = {d["id"]: d for d in dl}
src = open(os.path.join(KOK, "denetim", "ARAC-YER-ENVANTER-1021.py"), encoding="utf-8").read()
ESKI = {}
for node in ast.parse(src).body:
    if isinstance(node, ast.Assign) and getattr(node.targets[0], "id", "") == "ESKI":
        ESKI = ast.literal_eval(node.value)
Y = girdi.yukle(sessiz=True)
idx = {}
for y in Y:
    for a in [y["ad"], re.sub(r"\s*\(.*?\)", "", y["ad"])] + re.findall(r"\(([^)]*)\)", y["ad"]):
        for p in re.split(r"[;,/]| veya ", a):
            n = N(p)
            if len(n) >= 3:
                idx.setdefault(n, y["ad"])
for atlas, es in ESKI.items():
    t = idx.get(N(atlas))
    if t:
        for e in es:
            idx.setdefault(N(e), t)


def yil(s):
    m = re.match(r"^(-?\d{1,5})", s or "") if isinstance(s, str) else None
    return int(m.group(1)) if m else None


def adlar(v):
    out = []
    for p in re.split(r"[;,/]", re.sub(r"\(([^)]*)\)", r" \1,", v or "")):
        p = p.strip(" .")
        if len(N(p)) >= 3:
            out.append(p)
    return out


kayit = collections.defaultdict(lambda: {"puan": 0, "devletler": [], "ilk": 9999, "bolge": collections.Counter(), "ad": ""})
for i, d in list(dev.items()) + [(k, v) for k, v in dlk.items() if k not in dev and v.get("devredilebilir") and v.get("dogrulama") in ("okundu", "kismen-okundu")]:
    f = yil(d.get("f"))
    if f is None or f >= 1281:
        continue
    t = yil(d.get("t"))
    omur = max(0, min(t if t is not None else 1281, 1281) - f)
    yerler = []
    if isinstance(d.get("baskent"), str):
        yerler += adlar(d["baskent"])[:1]
    for bk in (d.get("bk") or []):
        if isinstance(bk, dict) and isinstance(bk.get("baskent"), str):
            yerler += adlar(bk["baskent"])[:1]
    for s in (d.get("sehirler") or [])[:1]:
        pass
    for y in dict.fromkeys(yerler):
        k = N(y)
        r = kayit[k]
        r["ad"] = r["ad"] or y
        r["puan"] += omur
        r["devletler"].append(i)
        r["ilk"] = min(r["ilk"], f)
        r["bolge"][d.get("bolge") or "?"] += 1
sat = []
for k, r in kayit.items():
    var = idx.get(k)
    sat.append((r["bolge"].most_common(1)[0][0], r["ad"], r["puan"], len(set(r["devletler"])), r["ilk"], "var" if var else "yok", var or "", ",".join(sorted(set(r["devletler"]))[:6])))
sat.sort(key=lambda x: (x[0], -x[2]))
os.makedirs(os.path.join(KOK, "denetim", "once1281", "yer-eksik"), exist_ok=True)
p = os.path.join(KOK, "denetim", "once1281", "yer-eksik", "ONEMLI-YERLESIM-SIRA.tsv")
open(p, "w", encoding="utf-8").write("bolge\tyer\tonem_puan\tdevlet_sayisi\tilk_yil\tatlasta\tatlas_ad\tdevletler\n" + "\n".join("\t".join(map(str, s)) for s in sat) + "\n")
yok = [s for s in sat if s[5] == "yok"]
open(os.path.join(KOK, "denetim", "once1281", "yer-eksik", "ONEMLI-YOK.tsv"), "w", encoding="utf-8").write(
    "ad\tmodern_ad\tlat\tlon\tilgili_devlet\tilk_kaynak\tkoordinat_durumu\n" + "\n".join("\t".join([s[1], "", "-", "-", s[7], "devletler.js/DEVLET-LISTESI baskent", "ipucu yok"]) for s in yok) + "\n")
print("başkent yeri:", len(sat), "| atlasta var:", len(sat) - len(yok), "| yok:", len(yok))
b = collections.Counter(s[0] for s in yok)
print(dict(b.most_common()))
