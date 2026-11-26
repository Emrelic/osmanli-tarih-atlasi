# DEVLET-500-1000 — yer_id adayı `sehirler` havuzunda var mı? (girdi.yukle() + odak_cozum.js ⑤ süzgeci)
#   py denetim/ARAC-DEVLET-500-1000-YER.py "Dımaşk" "Bağdat" ...
#   py denetim/ARAC-DEVLET-500-1000-YER.py --ara <regex>
#   py denetim/ARAC-DEVLET-500-1000-YER.py --dosya data/kronoloji_cok_500_1000.js   (yer_id'leri sınar, node ile yükler)
import sys, os, re, json, subprocess
sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
sys.path.insert(0, os.path.join(KOK, "arac"))
import io, contextlib
with contextlib.redirect_stdout(io.StringIO()):
    import girdi
    Y = girdi.yukle(sessiz=True)
S = set()
for y in Y:
    if not (y.get("d") or y.get("v") or y.get("s")): continue
    ad = y.get("ad")
    if not isinstance(ad, str) or not ad: continue
    S.add(ad); S.add(ad.split(" (")[0])
a = sys.argv[1:]
print("havuz evreni:", len(S), "ad ·", len(Y), "yerleşim")
if a and a[0] == "--ara":
    rx = re.compile(a[1], re.I)
    print("  ", sorted(s for s in S if rx.search(s))[:40])
elif a and a[0] == "--dosya":
    js = "global.window={};eval(require('fs').readFileSync(process.argv[1],'utf8'));" \
         "const k=Object.keys(window);process.stdout.write(JSON.stringify(window[k[0]]))"
    L = json.loads(subprocess.check_output(["node", "-e", js, os.path.join(KOK, a[1])], encoding="utf-8"))
    kirik = [m for m in L if m.get("yer_id") and m["yer_id"] not in S]
    bos = [m for m in L if not m.get("yer_id") and not m.get("odak_kimlik")]
    for m in kirik: print("  KIRIK:", m["t"], m["yer_id"])
    for m in bos: print("  ODAKSIZ:", m["t"], m["b"])
    print("madde", len(L), "· kırık yer_id", len(kirik), "· odaksız", len(bos),
          "· kapsam_genis", sum(1 for m in L if m.get("kapsam_genis")))
else:
    for s in a: print("  VAR " if s in S else "  YOK ", s)
