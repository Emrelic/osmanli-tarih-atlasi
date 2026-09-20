# -*- coding: utf-8 -*-
"""HARITA-DURUM-0074 — H-0007 · H-0014 · H-0015 ham olcum.
Cikti: denetim/HARITA-DURUM-0074-OLCUM.json
"""
import sys, os, json, io
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

Y = girdi.yukle(sessiz=True)
DEV = girdi.oku_devletler()

def pad(t):
    if not t: return ""
    p = t.split("-")
    return "%04d-%02d-%02d" % (int(p[0]), int(p[1]) if len(p) > 1 else 1,
                               int(p[2]) if len(p) > 2 else 1)

def kutu(y, la0, la1, lo0, lo1):
    la, lo = y.get("lat"), y.get("lon")
    if la is None or lo is None: return False
    return la0 <= la <= la1 and lo0 <= lo <= lo1

def sahip(y, gun):
    """O gun gecerli s: / v: / isg: kayitlari."""
    g = pad(gun)
    out = {"s": [], "v": [], "isg": [], "d": []}
    for kat in ("s", "v", "isg", "d"):
        for p in y.get(kat) or []:
            f, t = pad(p.get("f", "")), pad(p.get("t", ""))
            if f and f > g: continue
            if t and t <= g: continue
            out[kat].append({k: p.get(k) for k in ("f", "t", "d", "kid", "kaynak") if p.get(k)})
    return out

SON = {}

# ---- H-0007: Bohemya kutusu, 1827-07-06 ----
B7 = dict(la0=49.84, la1=51.10, lo0=15.73, lo1=18.09)
g7 = "1827-07-06"
ic7 = [y for y in Y if kutu(y, B7["la0"], B7["la1"], B7["lo0"], B7["lo1"])]
h7 = {"kutu": B7, "gun": g7, "kutudaki_nokta": len(ic7), "noktalar": []}
for y in ic7:
    s = sahip(y, g7)
    h7["noktalar"].append({"ad": y["ad"], "lat": y.get("lat"), "lon": y.get("lon"),
                           "kaynak_dosya": y.get("_kaynak"),
                           "o_gun_sahipli": bool(s["s"] or s["v"]), "gecerli": s})
# genisletilmis kutu: cevre 3 derece
ic7g = [y for y in Y if kutu(y, B7["la0"]-3, B7["la1"]+3, B7["lo0"]-3, B7["lo1"]+3)]
h7["genis_kutu_nokta"] = len(ic7g)
h7["genis_kutu_o_gun_sahipli"] = sum(1 for y in ic7g if (lambda s: bool(s["s"] or s["v"]))(sahip(y, g7)))
SON["H-0007"] = h7

# ---- H-0014: Poti/Batum kutusu, 1829-09-14 ----
B14 = dict(la0=41.82, la1=42.64, lo0=41.35, lo1=42.70)
g14 = "1829-09-14"
ic14 = [y for y in Y if kutu(y, B14["la0"], B14["la1"], B14["lo0"], B14["lo1"])]
h14 = {"kutu": B14, "gun": g14, "kutudaki_nokta": len(ic14), "noktalar": []}
for y in ic14:
    s = sahip(y, g14)
    h14["noktalar"].append({"ad": y["ad"], "lat": y.get("lat"), "lon": y.get("lon"),
                            "kaynak_dosya": y.get("_kaynak"),
                            "o_gun_sahipli": bool(s["s"] or s["v"]), "gecerli": s})
ic14g = [y for y in Y if kutu(y, B14["la0"]-2, B14["la1"]+2, B14["lo0"]-2, B14["lo1"]+2)]
h14["genis_kutu_nokta"] = len(ic14g)
h14["genis_kutu_o_gun_sahipli"] = sum(1 for y in ic14g if (lambda s: bool(s["s"] or s["v"]))(sahip(y, g14)))
SON["H-0014"] = h14

# ---- H-0015: Eflak-Bogdan isgal kayitlari ----
B15 = dict(la0=43.14, la1=48.21, lo0=22.91, lo1=29.42)
g15 = "1830-05-07"
ic15 = [y for y in Y if kutu(y, B15["la0"], B15["la1"], B15["lo0"], B15["lo1"])]
h15 = {"kutu": B15, "gun": g15, "kutudaki_nokta": len(ic15),
       "o_gun_isgalli": [], "o_gun_sahipsiz": [], "isg_penceresi_dagilimi": {}}
for y in ic15:
    s = sahip(y, g15)
    if s["isg"]:
        h15["o_gun_isgalli"].append({"ad": y["ad"], "isg": s["isg"], "s": s["s"], "v": s["v"]})
        for p in s["isg"]:
            k = "%s..%s -> %s" % (p.get("f"), p.get("t"), p.get("d"))
            h15["isg_penceresi_dagilimi"][k] = h15["isg_penceresi_dagilimi"].get(k, 0) + 1
    if not (s["s"] or s["v"]):
        h15["o_gun_sahipsiz"].append({"ad": y["ad"], "lat": y.get("lat"), "lon": y.get("lon"),
                                      "kaynak_dosya": y.get("_kaynak")})
# butun atlasta 1828-1834 rusya isgal kaydi
tum = []
for y in Y:
    for p in y.get("isg") or []:
        if p.get("d") == "rusya" and pad(p.get("f", "")) >= "1826-01-01" and pad(p.get("f", "")) <= "1830-01-01":
            tum.append({"ad": y["ad"], "f": p.get("f"), "t": p.get("t"),
                        "kaynak": p.get("kaynak"), "dosya": y.get("_kaynak")})
h15["atlas_geneli_1828_rus_isgali"] = tum
SON["H-0015"] = h15

yol = os.path.join(KOK, "denetim", "HARITA-DURUM-0074-OLCUM.json")
io.open(yol, "w", encoding="utf-8").write(json.dumps(SON, ensure_ascii=False, indent=1))
print("yazildi:", yol)
print("H-0007 kutuda nokta:", h7["kutudaki_nokta"], "| genis:", h7["genis_kutu_nokta"], "sahipli:", h7["genis_kutu_o_gun_sahipli"])
print("H-0014 kutuda nokta:", h14["kutudaki_nokta"], "| genis:", h14["genis_kutu_nokta"], "sahipli:", h14["genis_kutu_o_gun_sahipli"])
print("H-0015 kutuda nokta:", h15["kutudaki_nokta"], "| isgalli:", len(h15["o_gun_isgalli"]), "| sahipsiz:", len(h15["o_gun_sahipsiz"]))
print("H-0015 pencereler:", json.dumps(h15["isg_penceresi_dagilimi"], ensure_ascii=False))
print("atlas geneli 1826-1830 rus isgal kaydi:", len(tum))
