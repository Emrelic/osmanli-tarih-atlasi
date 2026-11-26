# -*- coding: utf-8 -*-
"""PAKET-A6A ölçüm aleti — SALT OKUR.
Kullanım:
  py denetim/ARAC-A6A-OLC-0913.py kutu  GUN  LAT1 LAT2 LON1 LON2
  py denetim/ARAC-A6A-OLC-0913.py ad    ADPARCASI [ADPARCASI ...]
Sahiplik sırası VERI-YAPISI.md: v -> d -> s ; isg ayrıca basılır.
Evren: arac/girdi.py GIRDI_DOSYALARI (yukle).
"""
import io, os, sys, json
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa

TR = str.maketrans({"İ": "i", "I": "i", "ı": "i", "Ş": "s", "ş": "s", "Ğ": "g", "ğ": "g",
                    "Ü": "u", "ü": "u", "Ö": "o", "ö": "o", "Ç": "c", "ç": "c", "Â": "a",
                    "â": "a", "Î": "i", "î": "i", "Û": "u", "û": "u"})


def norm(s):
    import unicodedata
    s = s.translate(TR)
    s = unicodedata.normalize("NFKD", s)
    return "".join(c for c in s if not unicodedata.combining(c)).lower()


def ic(p, g):
    return p.get("f", "") <= g < p.get("t", "9999")


def sahip(y, g):
    if y.get("kur") and y["kur"] > g:
        return "(kurulmamis)"
    for p in y.get("v") or []:
        if ic(p, g):
            return "TABI" + (":" + p["d"] if p.get("d") else "")
    for p in y.get("d") or []:
        if ic(p, g):
            return "OSMANLI"
    for p in y.get("s") or []:
        if ic(p, g):
            return p.get("d")
    return "— SAHIPSIZ"


def isg(y, g):
    return [p.get("d") for p in (y.get("isg") or []) if ic(p, g)]


def main():
    Y = girdi.yukle(sessiz=True)
    print("evren:", len(Y), "nokta ·", len(girdi.GIRDI_DOSYALARI), "dosya")
    if sys.argv[1] == "kutu":
        g = sys.argv[2]
        a1, a2, o1, o2 = map(float, sys.argv[3:7])
        n = 0
        say = {}
        for y in sorted(Y, key=lambda r: (-r["lat"], r["lon"])):
            if a1 <= y["lat"] <= a2 and o1 <= y["lon"] <= o2:
                n += 1
                s = sahip(y, g)
                say[s] = say.get(s, 0) + 1
                ek = " isg:" + ",".join(isg(y, g)) if isg(y, g) else ""
                print(f"  {y['ad'][:30]:30} {y['lat']:7.3f} {y['lon']:7.3f}  {s}{ek}  [{y['_kaynak']}]")
        print("kutu nokta:", n, "·", say)
    else:
        for parca in sys.argv[2:]:
            for y in Y:
                if norm(parca) in norm(y["ad"]):
                    r = {k: v for k, v in y.items() if v not in ([], None, "")}
                    print(json.dumps(r, ensure_ascii=False))


main()
