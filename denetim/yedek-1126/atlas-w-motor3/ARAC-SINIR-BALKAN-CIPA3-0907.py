# -*- coding: utf-8 -*-
"""
SINIR-BALKAN-0907 · CIPA SINAVI, UCUNCU TUR — IKI SORU
  ① `avusturya` (ADIM1'in kullandigi) ile `avusturya-cumhuriyet` (kunye id'si)
     hangisi? Benim `kimlik_1923` alanim hangisini tasimali?
  ② UC HANELI YIL tuzagi YERLESIM VERISINDE de var mi — yani ADIM1'in kendi
     sayisi (109 / sahipsiz 3636) pad'siz uretildiyse eksik mi?
Ikisi de DOKULEREK olculur, varsayilmaz.
"""
import json, os, io, sys, subprocess
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

JS = r"""
const fs=require("fs"),path=require("path");
const KOK=process.argv[2];
global.window={};
eval(fs.readFileSync(path.join(KOK,"data","devletler.js"),"utf8"));
const D=window.DEVLETLER||[];
const idler=new Set(D.map(d=>d.id));
const harita=new Set(D.map(d=>d.harita).filter(Boolean));
const ARA=["avusturya","avusturya-cumhuriyet","osmanli","adal","maratha","meysur",
           "cimma","hicaz","almanya","yugoslavya","cekoslovakya","sovyet-rusya",
           "polonya","romanya-kralligi","macaristan-naiplik","yunanistan","italya",
           "isvicre","estonya","letonya","litvanya","bulgaristan-kralligi",
           "arnavutluk-bagimsiz","tbmm-turkiye"];
const rapor={};
for(const a of ARA){
  const k=D.find(d=>d.id===a);
  rapor[a]={kunye_id:idler.has(a), harita_anahtari:harita.has(a),
            f:k?k.f:null, t:k?k.t:null,
            harita_alani:k?(k.harita||null):null};
}
// hangi kunyelerin harita: alani "avusturya"?
rapor["__harita_avusturya_olan"]=D.filter(d=>d.harita==="avusturya").map(d=>d.id);
rapor["__harita_osmanli_olan"]=D.filter(d=>d.harita==="osmanli").map(d=>d.id);
console.log(JSON.stringify(rapor));
"""

PY_VERI = r"""
import sys, os, re
sys.path.insert(0, os.path.join(r"{KOK}", "arac"))
import girdi, json
Y = girdi.yukle()
def pad(s):
    m = re.match(r"^(\d+)(-.*)?$", str(s or ""))
    return m.group(1).zfill(4) + (m.group(2) or "") if m else str(s)
uc = []
kimlik = {"ham": set(), "pad": set()}
G = "1923-10-28"
for y in Y:
    for kat in ("d", "s", "v", "isg"):
        for p in (y.get(kat) or []):
            f, t = p.get("f"), p.get("t")
            if not f or not t: continue
            if re.match(r"^\d{1,3}-", str(f)): uc.append((y.get("ad"), kat, f, t))
            kid = p.get("d") or p.get("kid") or ("OSMANLI" if kat == "d" else None)
            if f <= G < t: kimlik["ham"].add(kid)
            if pad(f) <= pad(G) < pad(t): kimlik["pad"].add(kid)
print(json.dumps({
  "yerlesim": len(Y),
  "uc_haneli_donem": len(uc),
  "uc_ornek": uc[:10],
  "ham": len(kimlik["ham"]), "pad": len(kimlik["pad"]),
  "pad_farki": sorted(str(x) for x in (kimlik["pad"] - kimlik["ham"])),
}, ensure_ascii=False))
"""


def node():
    y = os.path.join(KOK, "denetim", "_cipa3.js")
    open(y, "w", encoding="utf-8").write(JS)
    p = subprocess.run(["node", y, KOK], capture_output=True, text=True,
                       encoding="utf-8", errors="replace")
    os.remove(y)
    if p.returncode: print("NODE:", p.stderr[-600:]); sys.exit(1)
    return json.loads(p.stdout)


def veri():
    y = os.path.join(KOK, "denetim", "_cipa3.py")
    open(y, "w", encoding="utf-8").write(PY_VERI.replace("{KOK}", KOK.replace("\\", "\\\\")))
    p = subprocess.run([sys.executable, y], capture_output=True, text=True,
                       encoding="utf-8", errors="replace", cwd=KOK)
    os.remove(y)
    if p.returncode:
        return {"HATA": p.stderr[-900:]}
    return json.loads(p.stdout.strip().splitlines()[-1])


r = node()
print("① `avusturya` MI `avusturya-cumhuriyet` MI?")
for a in ["avusturya", "avusturya-cumhuriyet", "osmanli", "adal", "maratha",
          "meysur", "cimma", "hicaz", "almanya", "yugoslavya"]:
    v = r[a]
    print("   %-24s kunye_id=%-5s harita_anahtari=%-5s harita:=%-12s %s→%s"
          % (a, v["kunye_id"], v["harita_anahtari"],
             str(v["harita_alani"]), v["f"], v["t"]))
print("   harita:'avusturya' olan kunyeler :", r["__harita_avusturya_olan"])
print("   harita:'osmanli'  olan kunyeler :", r["__harita_osmanli_olan"][:6])
print()
print("② UC HANELI YIL — YERLESIM VERISINDE")
v = veri()
if "HATA" in v:
    print("   OLCULEMEDI:", v["HATA"][:400])
else:
    print("   yerlesim              :", v["yerlesim"])
    print("   1-3 haneli yilli donem:", v["uc_haneli_donem"])
    for x in v["uc_ornek"]:
        print("      ", x)
    print("   g=1923-10-28 kimlik · ham:", v["ham"], "· pad:", v["pad"])
    print("   pad'in EKLEDIGI       :", v["pad_farki"] or "yok")
