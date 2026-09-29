# KRONO-DOGU-ISLAM-0929 — yeni kuyruk maddelerinin SENKRON-DEFTER açık gruplarını kapatıp kapatmadığı.
# Kapının KENDİ işlevi (arac/denetle.py degismez2, yer_sarti=True — 2s ALÂKA şartı) küçük evrende koşar:
#   Y = yalnız defterde bu pakete düşen açık yerleşimler · O = yalnız yeni data/kronoloji_cok_{iran,memluk}.js
# Böylece 2,4 GB'lık tam denetle.py koşusu gerekmez (M-5457). Tam kapı teslimde bir kez koşar.
# Kullanım: py denetim/ARAC-KRONO-DOGU-ISLAM-0929-KAPANIS.py
import sys, os, io, json, subprocess, contextlib
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
import denetle as D   # yalnız işlev tanımları yüklenir; main() KOŞMAZ
Y = girdi.yukle(sessiz=True)
defter = json.load(io.open(os.path.join(KOK, "denetim", "SENKRON-DEFTER-0929.json"), encoding="utf-8"))
K = defter["paket"]["KRONO-DOGU-ISLAM-0929"]["kayit"]
acik = {k["yerlesim"] for k in K if not k["kunyede_kapali"]}
Ysub = [y for y in Y if y.get("ad") in acik and y.get("_kaynak") not in D.KUYRUK_DOSYALARI]
js = ("const fs=require('fs'),vm=require('vm');const o=[];for(const f of ['kronoloji_cok_iran.js','kronoloji_cok_memluk.js'])"
      "{const c={window:{}};vm.runInNewContext(fs.readFileSync('%s/data/'+f,'utf8'),c);"
      "for(const v of Object.values(c.window))if(Array.isArray(v))o.push(...v);}process.stdout.write(JSON.stringify(o));"
      % KOK.replace("\\", "/"))
O = json.loads(subprocess.run(["node", "-e", js], capture_output=True, encoding="utf-8").stdout)
# ⚠️ degismez2 madde listesi BOŞSA hiçbir kırılmayı açık saymaz (`if not ol: fark = 0`) — ilk koşu bu
#   yüzden "0 kapandı" dedi. Taban koşusuna kırılmalardan çok uzak bir kukla madde verilir.
KUKLA = {"t": "1000-01-01", "b": "kukla", "d": ""}
kir0, acik0 = D.degismez2(Ysub, [KUKLA], ("s",), yer_sarti=True)
kir1, acik1 = D.degismez2(Ysub, [KUKLA] + O, ("s",), yer_sarti=True)
a0 = {r[0]: set(kir0[r[0]].get("eksik") or kir0[r[0]]["ad"]) for r in acik0}
a1 = {r[0]: set(kir1[r[0]].get("eksik") or kir1[r[0]]["ad"]) for r in acik1}
print(f"evren: {len(Ysub)} açık yerleşim · {len(O)} yeni madde")
kapanan = 0
for g in sorted(a0):
    once, sonra = a0[g], a1.get(g, set())
    fark = once - sonra
    if fark:
        kapanan += len(fark)
        print(f"  {g}: {len(fark)} yerleşim KAPANDI ({', '.join(sorted(fark)[:6])}{' …' if len(fark) > 6 else ''}) · açık kalan {len(sonra)}")
print(f"TOPLAM kapanan (gün, yerleşim) çifti: {kapanan}")
