# -*- coding: utf-8 -*-
"""SAHIP-ADAY-1021.json -> SAHIP-YAZILAN-1021.json: yalnız KAYNAKLI ve ÇAKIŞMASIZ s: dönemleri.
Kural (şimdilik tek yol): yer bir devletin BAŞKENTİ ise (devletler.js künyesi ya da DEVLET-LISTESI 'okundu/kismen-okundu') ve yerin
kronolojideki ilk tarihi devletin f..t aralığına düşüyorsa s:[{f,t,d}] devletin künye f/t'siyle yazılır; kaynak: künyenin kaynak alanı.
Madde taraflarından (savaşta taraf olmak = sahip olmak değildir) SAHİP ÇIKARILMAZ.
Kullanım: py -I denetim/ARAC-YER-SAHIP-YAZ-1021.py <veri.json>"""
import sys, io, os, re, json, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
KL = os.path.join(KOK, "denetim", "yer-arastirma")
w = json.load(open(sys.argv[1], encoding="utf-8"))["win"]
dev = {d["id"]: d for d in w["DEVLETLER"] if d.get("id")}
dl = json.load(open(os.path.join(KL, "_DEVLET-LISTESI-kopya.json"), encoding="utf-8"))
dlk = {d["id"]: d for d in dl["kayitlar"]}
env = json.load(open(os.path.join(KOK, "denetim", "ONCE1281-YER-ENVANTER.json"), encoding="utf-8"))
ilk = {}
for s in ("yok", "bolge", "atlasta"):
    for r in env[s]:
        ilk.setdefault(r["ad"], r["yil_min"])
sahip = json.load(open(os.path.join(KL, "SAHIP-ADAY-1021.json"), encoding="utf-8"))


def yil(s):
    m = re.match(r"^(-?\d{1,5})", s or "") if isinstance(s, str) else None
    return int(m.group(1)) if m else None


def kaynak_metni(i):
    d = dev.get(i)
    if d and d.get("kaynak"):
        k = d["kaynak"]
        return "künye %s (devletler.js) f/t; kaynak: %s" % (i, (k if isinstance(k, str) else " | ".join(map(str, k)))[:300])
    d = dlk.get(i)
    if d:
        k = d.get("kaynak")
        return "künye %s (DEVLET-LISTESI, %s) f/t; kaynak: %s" % (i, d.get("dogrulama"), (k if isinstance(k, str) else " | ".join(map(str, k or [])))[:300])
    return ""


yazilan, atlanan, bekleyen = {}, collections.defaultdict(list), {}
for x in sahip:
    if x["tur"] == "bolge":
        continue
    adaylar = []
    for e in x["baskent_eslesmesi"]:
        i = e["devlet"]
        d = dev.get(i) or dlk.get(i)
        if not d:
            continue
        if i not in dev and not (d.get("devredilebilir") and d.get("dogrulama") in ("okundu", "kismen-okundu")):
            atlanan[x["ad"]].append("devlet %s listede ama devredilebilir/okundu değil" % i)
            continue
        f, t = d.get("f"), d.get("t")
        if not f:
            continue
        adaylar.append((f, t or "9999-01-01", i))
    adaylar = sorted(set(adaylar))
    if not adaylar:
        continue
    y0 = ilk.get(x["kronoloji_adi"], ilk.get(x["ad"]))
    # çakışma
    ok = True
    for a, b in zip(adaylar, adaylar[1:]):
        if b[0] < a[1]:
            ok = False
    if not ok:
        atlanan[x["ad"]].append("devlet dönemleri çakışıyor: " + ", ".join(a[2] for a in adaylar))
        continue
    if y0 is not None and not any(yil(a[0]) is not None and yil(a[0]) - 5 <= y0 <= (yil(a[1]) or 9999) + 5 for a in adaylar):
        atlanan[x["ad"]].append("yerin kronolojideki ilk yılı (%s) hiçbir başkentlik döneminde değil" % y0)
        continue
    zincir = [{"f": a[0], "t": (None if a[1] == "9999-01-01" else a[1]), "d": a[2], "kaynak": kaynak_metni(a[2])} for a in adaylar]
    if any(a[2] not in dev for a in adaylar):      # künye devletler.js'te yok: hayalet kimlik olmaması için BEKLET
        bekleyen[x["ad"]] = zincir
        continue
    yazilan[x["ad"]] = zincir
json.dump({"yazilan": yazilan, "atlanan": atlanan, "bekleyen_kunye_devletler_jsde_yok": bekleyen}, open(os.path.join(KL, "SAHIP-YAZILAN-1021.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("s: yazılacak yerleşim:", len(yazilan), "| atlanan:", len(atlanan))
for k, v in list(yazilan.items())[:40]:
    print(k, [(p["d"], p["f"], p["t"]) for p in v])
for k, v in list(atlanan.items())[:20]:
    print("ATLANDI", k, v)
