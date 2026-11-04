"""Sonraki 100 KARA-EKSKLAV (koridorda yabancı kara >= 5/9, >= 50 km²), alan büyükten küçüğe, K101-K200.
Deniz aşırı sömürge gövdesi ayrılır: devlet metropol/sömürge ailesinden VE koridor > 500 km VE koridorda deniz/boşluk örneği."""
import json, os, sys, collections
SP = os.path.dirname(os.path.abspath(__file__))
J = json.load(open(os.path.join(SP, "..", "olcum2.json"), encoding="utf-8"))
A = J["adaylar"]
ONC = ["ENKLAV", "KARA-EKSKLAV", "DAR-AYRIM", "ADA"]


def sinif(a):
    for s in ONC:
        if a["siniflar"].get(s):
            return s
    return "?"


def yabanci_kara(a):
    k = a.get("koridor") or {}
    return sum(v for s, v in k.items() if s not in ("DENIZ/BOS", "KENDI"))


SOM = ("ingiltere", "ingiliz", "fransa", "fransiz", "portekiz", "ispanya", "ispanyol", "italya", "almanya", "alman",
       "belcika", "hollanda", "abd", "danimarka", "japonya", "rusya", "yeni-ispanya", "kongo-serbest")
kara = sorted([a for a in A if sinif(a) == "KARA-EKSKLAV" and a["alan_max"] >= 50 and yabanci_kara(a) >= 5],
              key=lambda a: -a["alan_max"])
sec = kara[100:200]
for i, a in enumerate(sec, 101):
    a["no"] = "K%03d" % i
    a["S"] = "KARA-EKSKLAV"
    a["somurge"] = bool(a["devlet"].startswith(SOM) and (a.get("koridor_km") or 0) > 500
                        and ((a.get("koridor") or {}).get("DENIZ/BOS", 0) >= 1 or a["koridor_km"] > 2000))
json.dump(sec, open(os.path.join(SP, "aday2.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=0)
print("toplam yabanci-kara", len(kara), "secilen", len(sec), "somurge", sum(a["somurge"] for a in sec))
for a in sec:
    k = sorted((a.get("koridor") or {}).items(), key=lambda x: -x[1])[:3]
    ic = a["yerlesimler"]
    print(a["no"], "S" if a["somurge"] else "-", a["devlet"], a["f"][:10], a["t"][:10], int(a["alan_max"]),
          "kor", a.get("koridor_km"), k, "| ic", len(ic), "sahipsiz", sum(1 for y in ic if not y["sahip"]),
          "|", ", ".join(y["ad"] for y in ic[:3]))
