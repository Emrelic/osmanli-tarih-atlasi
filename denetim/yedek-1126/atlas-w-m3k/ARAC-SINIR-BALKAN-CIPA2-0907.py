# -*- coding: utf-8 -*-
"""
SINIR-BALKAN-0907 · CIPA SINAVI, IKINCI TUR
Birinci tur IKI sapma verdi; ikisi de KOVALANDI:
  ① `almanya` g=1923-10-28'de "aktif degil" cikti  -> UC HANELI YIL TUZAGI
     "962-02-02" <= "1923-10-28"  ->  False   ("9" > "1")
     CLAUDE.md §3.5.0: "bir duzeltmeyi bir alete koymak, onu OTEKI aletlere koymaz."
     Bu, projede o tuzagin BILINEN dorduncu vakasi; benim aletim besincisi oldu.
  ② `avusturya-cumhuriyet` ADIM1'in 109'unda YOK -> EVREN farki mi, kusur mu?
"""
import json, os, io, sys, subprocess
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

JS = r"""
const fs=require("fs"),path=require("path");
global.window={};
eval(fs.readFileSync(path.join(process.argv[2],"data","devletler.js"),"utf8"));
const D=window.DEVLETLER||[];
// UC HANELI YIL TUZAGI: dizgi karsilastirmasi once YILI 4 haneye pad'ler.
const pad=s=>{ if(!s) return s; const m=String(s).match(/^(\d+)(-.*)?$/);
  return m ? String(m[1]).padStart(4,"0")+(m[2]||"") : String(s); };
const aktif=g=>D.filter(d=>d.f&&d.t&&pad(d.f)<=pad(g)&&pad(g)<pad(d.t));
const ham  =g=>D.filter(d=>d.f&&d.t&&d.f<=g&&g<d.t);
const a28=aktif("1923-10-28"), h28=ham("1923-10-28");
console.log(JSON.stringify({
  toplam:D.length,
  pad28:a28.map(d=>d.id), ham28:h28.map(d=>d.id),
  pad29:aktif("1923-10-29").map(d=>d.id),
  uc_haneli:D.filter(d=>d.f&&/^\d{1,3}-/.test(String(d.f))).map(d=>d.id+" f:"+d.f),
}));
"""


def kos():
    yol = os.path.join(KOK, "denetim", "_cipa2.js")
    with open(yol, "w", encoding="utf-8") as f:
        f.write(JS)
    p = subprocess.run(["node", yol, KOK], capture_output=True, text=True,
                       encoding="utf-8", errors="replace")
    os.remove(yol)
    if p.returncode != 0:
        print("NODE:", p.stderr[-800:]); sys.exit(1)
    return json.loads(p.stdout)


r = kos()
pad28, ham28 = set(r["pad28"]), set(r["ham28"])
print("① UC HANELI YIL TUZAGI")
print("   aktif g=1923-10-28 · pad'siz :", len(ham28))
print("   aktif g=1923-10-28 · pad'li  :", len(pad28))
print("   pad OLMADAN KACIRILAN        :", sorted(pad28 - ham28))
print("   `f:` yili 1-3 haneli kunye   :", len(r["uc_haneli"]))
for x in r["uc_haneli"][:12]:
    print("      ", x)
print("   aktif g=1923-10-29 · pad'li  :", len(r["pad29"]), " <- CIPA GUNU HALA BOS")
print()

with open(os.path.join(KOK, "denetim", "SINIR-HUKUKI-BALKAN-0907.json"), encoding="utf-8") as f:
    B = json.load(f)
benim = set()
for e in B["kenarlar"]:
    for a in ("kimlik_1923_a", "kimlik_1923_b"):
        if e.get(a):
            benim.add(e[a])
print("   BENIM 17 kimligimin pad'li g=28 durumu:",
      len(benim & pad28), "/", len(benim),
      "· eksik:", sorted(benim - pad28) or "yok ✓")
print()

A1 = os.path.join(KOK, "denetim", "KIMLIK-1923-0907-ADIM1.json")
with open(A1, encoding="utf-8") as f:
    A = json.load(f)
st = A["sinir_tuzagi"]
print("② ADIM1 EVRENI — anahtarlari DOKULDU, varsayilmadi")
for kk, vv in st.items():
    print("   %-28s %s" % (kk, (len(vv) if isinstance(vv, (list, dict)) else repr(vv)[:70])))
lst = st.get("yalniz_1923-10-28")
ids = set()
if isinstance(lst, list):
    ids = set((x.get("id") or x.get("kimlik")) if isinstance(x, dict) else x for x in lst)
print()
print("   ADIM1 109 vs pad'li 112 —")
print("   ADIM1'de olup bende olmayan  :", len(ids - pad28), sorted(ids - pad28)[:8])
print("   pad'li kumede olup ADIM1'de OLMAYAN:", sorted(pad28 - ids))
if isinstance(lst, list) and lst and isinstance(lst[0], dict):
    print()
    print("   ADIM1 kayit alanlari:", sorted(lst[0].keys()))
    for x in lst:
        i = x.get("id") or x.get("kimlik")
        if i in benim:
            print("   ", i, "->", {k: v for k, v in x.items() if k != "id"})
