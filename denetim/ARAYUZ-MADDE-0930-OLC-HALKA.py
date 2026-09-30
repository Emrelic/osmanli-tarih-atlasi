# ARAYUZ-MADDE-0930 — H-0114 ölçümü: devletsiz halka ↔ aynı yerdeki yerleşim
# Soru: 92 halka kaydının kaçının 1 km içinde bir yerleşimi var, ve o
# yerleşimin kaç tanesi EN AZ BİR tarihte sahipli (d/v/s/isg)? Sahipli olan
# her kayıt, bugün "zamansız" çizildiği için o tarihlerde YANLIŞ halka basıyor.
import sys, json, subprocess, os
sys.path.insert(0, "arac")
import girdi

havuz = girdi.yukle(sessiz=True)
Y = havuz if isinstance(havuz, list) else havuz.get("yerlesimler", havuz)
js = r'''
global.window={};eval(require("fs").readFileSync("data/bos_alanlar.js","utf8"));
process.stdout.write(JSON.stringify({k:window.BOS_ALANLAR,c:window.BOS_CINSLER}));
'''
out = subprocess.run(["node", "-e", js], capture_output=True, text=True, encoding="utf-8")
d = json.loads(out.stdout)
halka = [k for k in d["k"] if (d["c"].get(k["cins"]) or {}).get("gosterim") == "halka"]
print("evren: BOS_ALANLAR", len(d["k"]), "· halka", len(halka), "· yerleşim", len(Y))

def en_yakin(k):
    en, ek = None, 1e9
    for y in Y:
        if y.get("lat") is None or y.get("lon") is None: continue
        km = girdi.km(k["lat"], k["lon"], y["lat"], y["lon"])
        if km < ek: en, ek = y, km
    return en, ek

eslesen = eslesmeyen = hep_sahipsiz = bazen_sahipli = 0
ornek = []
for k in halka:
    y, km = en_yakin(k)
    if y is None or km >= 1.0:
        eslesmeyen += 1; ornek.append(("ESLESMEDI", k["ad"], round(km, 2))); continue
    eslesen += 1
    pen = [(a, p["f"], p["t"]) for a in ("d", "v", "s", "isg") for p in (y.get(a) or [])]
    if pen:
        bazen_sahipli += 1
        if len(ornek) < 40: ornek.append(("SAHIPLI", k["ad"], pen[:3]))
    else:
        hep_sahipsiz += 1
print("1 km içinde eşleşen", eslesen, "· eşleşmeyen", eslesmeyen)
print("eşleşenden EN AZ BİR tarihte sahipli", bazen_sahipli, "· hiç sahipli değil", hep_sahipsiz)
for o in ornek: print(" ", o)
