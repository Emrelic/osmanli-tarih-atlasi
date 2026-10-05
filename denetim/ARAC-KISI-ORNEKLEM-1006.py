# UMIT-W16-KISI-ORNEKLEM-1006 — kaynaksız kişi kayıtlarından tekrar üretilebilir rastgele örneklem.
# Kullanım: py denetim/ARAC-KISI-ORNEKLEM-1006.py [kisiler.js yolu]
# Kaynaksız = `kaynak` alanı yok ya da boşluktan arınınca boş. YALNIZ OKUR.
import json, random, subprocess, sys
from collections import Counter

YOL = sys.argv[1] if len(sys.argv) > 1 else "data/kisiler.js"
TOHUM = 1006
N = 20

js = ("global.window={};require(require('path').resolve(process.argv[1]));"
      "process.stdout.write(JSON.stringify(window.KISILER))")
K = json.loads(subprocess.run(["node", "-e", js, YOL], capture_output=True,
                              check=True, encoding="utf-8").stdout)

kaynaksiz = [k for k in K if not str(k.get("kaynak") or "").strip()]
print(f"toplam {len(K)} · kaynaklı {len(K) - len(kaynaksiz)} · kaynaksız {len(kaynaksiz)}")

# Sıra dosya sırasıdır (id'ye göre sıralama YOK); tohumla örneklem.
secim = random.Random(TOHUM).sample(kaynaksiz, N)

def dag(liste):
    return Counter(k["tur"] for k in liste)

g, o = dag(kaynaksiz), dag(secim)
print(f"\ntohum {TOHUM} · n {N}\n{'tur':18} {'266 içinde':>12} {'örneklem':>10}")
for t, s in g.most_common():
    print(f"{t:18} {s:4} ({s/len(kaynaksiz):5.1%}) {o.get(t,0):4} ({o.get(t,0)/N:5.1%})")

print()
for i, k in enumerate(secim, 1):
    print(f"{i:2}. {k['id']} | {k['tur']} | {k['ad']} | f={k.get('f','')} t={k.get('t','')} | donem={k.get('donem','')} | devlet={k.get('devlet','')}")
