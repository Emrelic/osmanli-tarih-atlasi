# KRONO-OSMANLI-CEVRE-0929 — TDV önbelleğinden cümle çıkarıcı (regex geri izlemesi yerine cümle bölme).
# Kullanım: py -X utf8 denetim/KRONO-OSMANLI-CEVRE-0929-cumle.py <slug> "<desen1|desen2>" [azami]
import sys, re, os
sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "KRONO-OSMANLI-CEVRE-0929-tdv-onbellek")
slug, desen = sys.argv[1], re.compile(sys.argv[2])
azami = int(sys.argv[3]) if len(sys.argv) > 3 else 6
metin = open(os.path.join(KOK, slug + ".txt"), encoding="utf-8").read()
govde = metin.split("BİBLİYOGRAFYA")[0]
cumleler = re.split(r"(?<=[.!?])\s+(?=[A-ZÇĞİÖŞÜÂÎÛ0-9(“\"])", govde.replace("\n", " "))
n = 0
for c in cumleler:
    if desen.search(c):
        print("·", c.strip()[:600])
        n += 1
        if n >= azami:
            break
print(f"[{slug}] {n} cümle")
