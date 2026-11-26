# KRONO-ATLANTIK-A-0929 — senkron defterini A (Fransa·İspanya·Portekiz) / B (İngiltere·Hollanda) koluna böler
# Kural (şartname): kayıt hangi metropolün künyesine bağlıysa o kola aittir.
# İki uçta iki koldan künye varsa → ORTAK (el ile hüküm).
import json, io, collections, sys
sys.stdout.reconfigure(encoding="utf-8")

A = {"fransa", "fransa-cumhuriyet", "ispanya", "portekiz", "aragon", "kastilya",
     "navarra", "yeni-ispanya", "ispanyol-peru", "portekiz-brezilyasi", "burgonya",
     "italya-napolyon", "yeni-granada", "rio-de-la-plata"}
B = {"ingiltere", "hollanda", "ingiliz-kuzey-amerika", "ingiliz-hindistani",
     "hollanda-dogu-hint", "hollanda-guyanasi", "ingiliz-guyanasi", "belcika",
     "avustralya"}

d = json.load(io.open("denetim/SENKRON-DEFTER-0929.json", encoding="utf-8"))
kay = [r for r in d["paket"]["KRONO-ATLANTIK-0929"]["kayit"] if r["paket"] == "KRONO-ATLANTIK-0929"]

def kol(r):
    u = {r["eski"], r["yeni"]}
    a, b = bool(u & A), bool(u & B)
    if a and b: return "ORTAK"
    if a: return "A"
    if b: return "B"
    return "?"

for r in kay: r["kol"] = kol(r)
print("kayıt", len(kay), collections.Counter(r["kol"] for r in kay))
for k in ("ORTAK", "?"):
    c = collections.Counter((r["eski"], r["yeni"]) for r in kay if r["kol"] == k)
    print(k, c.most_common())

# A kolu — olay adayı: (gün, eski, yeni) grubu, kapalı olmayanlar
ak = [r for r in kay if r["kol"] in ("A", "ORTAK")]
def kapali(r): return r["kuyrukta_kapali"] or r["kunyede_kapali"]
g = collections.OrderedDict()
for r in sorted(ak, key=lambda r: (r["gun"], r["eski"], r["yeni"])):
    g.setdefault((r["gun"], r["eski"], r["yeni"]), []).append(r)
print("A+ORTAK kayıt", len(ak), "grup", len(g),
      "açık grup", sum(1 for v in g.values() if not all(kapali(r) for r in v)))
out = []
for (gun, e, y), v in g.items():
    out.append({"gun": gun, "eski": e, "yeni": y, "kol": v[0]["kol"],
                "kova": collections.Counter(r["kova"] for r in v).most_common(1)[0][0],
                "n": len(v), "kapali_n": sum(1 for r in v if kapali(r)),
                "yerler": [r["yerlesim"] for r in v][:8],
                "lat": round(sum(r["lat"] for r in v) / len(v), 2),
                "lon": round(sum(r["lon"] for r in v) / len(v), 2),
                "en_yakin_madde": v[0]["en_yakin_madde"], "fark_gun": v[0]["fark_gun"]})
json.dump(out, io.open("denetim/KRONO-ATLANTIK-A-0929-gruplar.json", "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)
