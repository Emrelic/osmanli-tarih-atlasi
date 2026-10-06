# P84-DOBRUCA-TUNA-1006 — SALT OKUR ölçüm: Dobruca/Tuna ağzı noktalarının
# verilen günlerdeki sahibi (girdi.yukle, regex DEĞİL) + çevredeki noktalar.
import sys, os
sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import girdi

HEDEF = ["Silistre", "Köstence", "Babadağı (Babadag)", "İshakçı (Isaccea)",
         "İbrail", "Kalas (Galatz)"]
GUNLER = sys.argv[1:] or ["1401-06-01", "1402-07-27", "1402-07-29", "1405-01-01",
                          "1412-01-01", "1414-01-01", "1417-01-01", "1419-06-01"]


def sahip(y, g):
    out = []
    for kat in ("isg", "s", "d", "v"):
        for p in y.get(kat) or []:
            if p["f"] <= g < p["t"]:
                out.append(f"{kat}:{p.get('d', 'OSMANLI' if kat == 'd' else '?')}")
    return " + ".join(out) or "SAHIPSIZ"


Y = girdi.yukle(sessiz=True)
ada = {y["ad"]: y for y in Y}
print("== HEDEF NOKTALAR ==")
for a in HEDEF:
    y = ada.get(a)
    if not y:
        print(a, "YOK"); continue
    print(f"\n{a} ({y['lat']},{y['lon']}) [{y['_kaynak']}]")
    for g in GUNLER:
        print(f"   {g}  {sahip(y, g)}")

# Çevre: Dobruca kutusundaki bütün noktalar, 1405'te
print("\n== KUTU 43.3-45.7K 26.8-30.0D — bütün noktalar ==")
kutu = [y for y in Y if 43.3 <= y["lat"] <= 45.7 and 26.8 <= y["lon"] <= 30.0]
for y in sorted(kutu, key=lambda y: -y["lat"]):
    print(f"  {y['ad'][:28]:28} {y['lat']:.3f} {y['lon']:.3f}  "
          + " | ".join(f"{g}:{sahip(y, g)}" for g in GUNLER[2:5]))
print(f"  toplam {len(kutu)}")
