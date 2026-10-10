# KAYNAKSIZ-ORNEKLEM-1010 — evren: denetle.kaynaksizlik_olc (VERI_UFKU pencereli, v2)
import sys, io, os, json, contextlib, subprocess
from collections import Counter
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOK = os.path.abspath(sys.argv[1]); CIKTI = sys.argv[2]
sys.path.insert(0, os.path.join(KOK, "arac")); os.chdir(KOK)
import girdi, denetle
with contextlib.redirect_stdout(io.StringIO()):
    Y = girdi.yukle(sessiz=True)
K = denetle.kaynaksizlik_olc(Y)
print("VERI_UFKU", girdi.VERI_UFKU, "· UFUK", girdi.UFUK)
print({k: len(v) for k, v in K.items()})
H = set(K["hicbiri"])
yol = os.path.join(KOK, "data", "devletler.js")
js = ("global.window={};eval(require('fs').readFileSync(%s,'utf8'));"
      "process.stdout.write(JSON.stringify(window.DEVLETLER||[]));" % json.dumps(yol))
KL = json.loads(subprocess.run(["node", "-e", js], capture_output=True, encoding="utf-8").stdout)
bolge = {}
for k in KL:
    for a in {k.get("id"), k.get("harita")}:
        if a: bolge.setdefault(a, k.get("bolge") or "?")
U0, U1 = girdi.VERI_UFKU
kayit = []
for y in Y:
    a = "%s|%s" % (y.get("_kaynak"), y.get("ad"))
    if a not in H: continue
    S = [p for p in y["s"] if isinstance(p, dict)]
    ic = [p for p in S if p.get("f") and denetle._donem_pencerede(p, girdi.VERI_UFKU)]
    # baskın sahip: pencere içi en uzun s: dönemi
    def uz(p):
        f = max(denetle.pad(p["f"]), U0); t = min(denetle.pad(p.get("t") or U1), U1)
        return (t > f, t, f)
    bas = max(ic, key=lambda p: (min(denetle.pad(p.get("t") or U1), U1) > max(denetle.pad(p["f"]), U0),
                                  len(p.get("d") or ""))) if ic else None
    kayit.append(dict(anahtar=a, ad=y.get("ad"), dosya=y.get("_kaynak"), lat=y.get("lat"), lon=y.get("lon"),
                      s=[{k2: p.get(k2) for k2 in ("f", "t", "d", "kaynak")} for p in S],
                      d=[{k2: p.get(k2) for k2 in ("f", "t")} for p in (y.get("d") or [])],
                      n_ic=len(ic)))
c = Counter(k["dosya"] for k in kayit)
print("dosya dağılımı:", c.most_common())
print("pencere içi s: dönemi olmayan kayıt:", sum(1 for k in kayit if k["n_ic"] == 0))
json.dump(dict(veri_ufku=girdi.VERI_UFKU, sayilar={k: len(v) for k, v in K.items()}, kayit=kayit, bolge=bolge),
          open(CIKTI, "w", encoding="utf-8"), ensure_ascii=False)
