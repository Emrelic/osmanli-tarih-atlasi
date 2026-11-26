# KRONO-ATLANTIK-A-0929 — A kolunun (Fransa·İspanya·Portekiz) kırılma gruplarını coğrafyaya ayırır:
# METROPOL/AKDENİZ (bu paketin işi) · AMERİKA · SAHRA-ALTI AFRİKA · MAĞRİB · ASYA-OKYANUSYA (sömürge tier'ı)
# Girdi: denetim/KRONO-ATLANTIK-A-0929-gruplar.json (ARAC-...-BOL.py üretir)
import json, io, collections, sys
sys.stdout.reconfigure(encoding="utf-8")
G = json.load(io.open("denetim/KRONO-ATLANTIK-A-0929-gruplar.json", encoding="utf-8"))

def bolge(la, lo):
    if lo < -30: return "amerika"
    if lo > 60 or la < -30 and lo > 100: return "asya-okyanusya"
    if 34 <= la <= 72 and -12 <= lo <= 45: return "metropol-avrupa"
    if 30 <= la <= 42 and 25 <= lo <= 45: return "dogu-akdeniz"   # Levant / Anadolu
    if 19 <= la < 38 and -18 <= lo <= 12: return "magrib-sahra"
    if la < 19 and -30 <= lo <= 55: return "sahra-alti-afrika"
    if 10 <= la <= 30 and 40 <= lo <= 60: return "arabistan"
    return "diger"

sat = []
for g in G:
    b = bolge(g["lat"], g["lon"])
    # grup ortalaması iki kıtaya yayılan grupta yanıltır: tek tek yer adına bakmak için ilk yeri de yaz
    g["bolge"] = b
    sat.append(g)
ac = [g for g in sat if g["kapali_n"] < g["n"]]
say = collections.defaultdict(lambda: collections.Counter())
for g in ac:
    say[g["bolge"]]["grup"] += 1; say[g["bolge"]]["kayit"] += g["n"] - g["kapali_n"]
    say[g["bolge"]][g["kova"]] += 1
print("AÇIK A+ORTAK grupları bölgeye göre:")
for b, c in sorted(say.items(), key=lambda x: -x[1]["grup"]): print(f"  {b:20s}", dict(c))
json.dump(sat, io.open("denetim/KRONO-ATLANTIK-A-0929-gruplar.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
for b in ("metropol-avrupa", "dogu-akdeniz", "magrib-sahra", "arabistan", "diger"):
    print("\n##", b)
    for g in ac:
        if g["bolge"] == b: print(" ", g["gun"], g["kova"], g["eski"], "->", g["yeni"], g["n"], "|", ", ".join(g["yerler"][:4]))
