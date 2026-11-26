# -*- coding: utf-8 -*-
# D7 üyeliği: taban (temiz main) üzerinde değişiklikleri tek tek uygula, degismez7'yi koştur.
import sys, os, copy, io, contextlib
K = sys.argv[1]
sys.path.insert(0, os.path.join(K, "arac")); os.chdir(K)
import girdi
import denetle
with contextlib.redirect_stderr(io.StringIO()):
    Y0 = girdi.yukle(sessiz=True)

def bul(Y, ad):
    r = [y for y in Y if y["ad"] == ad]
    assert len(r) == 1, (ad, len(r))
    return r[0]

def radom(Y):
    y = bul(Y, "Radom (Polonya)")
    for p in y["s"]:
        if p["t"] == "1915-07-01": p["t"] = "1915-07-20"
        if p["f"] == "1915-07-01": p["f"] = "1915-07-20"

def lublin(Y):
    y = bul(Y, "Lublin")
    s = [p for p in y["s"] if p["f"] < "1815-06-10"]
    s[-1] = dict(s[-1]); s[-1]["t"] = "1915-07-30"
    s += [{"f": "1915-07-30", "t": "1918-11-11", "d": "avusturya"},
          {"f": "1918-11-11", "t": "1923-10-29", "d": "polonya"}]
    y["s"] = s

def lublin_isg(Y):
    y = bul(Y, "Lublin")
    y["isg"] = list(y.get("isg") or []) + [{"f": "1915-07-30", "t": "1918-11-11", "d": "avusturya"}]

def kos(ad, *degisiklik):
    Y = copy.deepcopy(Y0)
    for d in degisiklik: d(Y)
    with contextlib.redirect_stdout(io.StringIO()):
        ih, muaf = denetle.degismez7(Y)
    uye = {(r["gun"], r["yerlesim"], r["sahip"]): r for r in ih}
    return ad, uye, muaf

S = [kos("TABAN"), kos("RADOM", radom), kos("RADOM+LUBLIN-ISG", radom, lublin_isg), kos("LUBLIN-ISG", lublin_isg), kos("RADOM+LUBLIN-S", radom, lublin)]
taban = S[0][1]
for ad, uye, muaf in S:
    print(f"== {ad}: {len(uye)} ihlal · gecici-cephe {muaf['gecici-cephe']} · muaf {muaf}")
    for k in sorted(set(taban) - set(uye)):
        r = taban[k]; print("   DÜŞTÜ ", k, "ada:", "+".join(r["ada"]), r["ana_km"], "km", r["ana"])
    for k in sorted(set(uye) - set(taban)):
        r = uye[k]; print("   YENİ  ", k, "ada:", "+".join(r["ada"]), r["ana_km"], "km", r["ana"])

# Sebep: düşen kayıt için f ve f+365'te bileşen
from datetime import date, timedelta
def bilesen_rapor(ad_, deg, kim, gun):
    Y = copy.deepcopy(Y0)
    for d in deg: d(Y)
    kom = denetle._d7_komsuluk(Y)
    ix = {y["ad"]: i for i, y in enumerate(Y)}
    def sahip(i, g):
        for p in (Y[i].get("s") or []):
            if p["f"] <= g < p["t"]: return denetle._d7_aile(p["d"])
        for kat in ("d", "v"):
            for p in (Y[i].get(kat) or []):
                if p["f"] <= g < p["t"]: return "OSMANLI"
        return None
    i = ix[kim]; s = sahip(i, gun)
    gor, q = {i}, [i]
    while q and len(gor) < 400:
        u = q.pop(0)
        for v in kom[u]:
            if v not in gor and sahip(v, gun) == s:
                gor.add(v); q.append(v)
    ad_l = sorted(Y[j]["ad"] for j in gor)
    print(f"   [{ad_}] {kim} @ {gun}: sahip={s} bileşen={len(gor)} " + ("+".join(ad_l) if len(gor) <= 8 else "(" + ", ".join(ad_l[:8]) + ", …)"))
    print(f"      komşular: " + ", ".join(f"{Y[v]['ad']}={sahip(v, gun)}" for v in kom[i]))

print("\n== SEBEP ==")
for kim, f in (("Radom (Polonya)", "1915-07-01"), ("Kielce", "1915-10-01")):
    g1 = (date.fromisoformat(f) + timedelta(days=365)).isoformat()
    for ad_, deg in (("TABAN", ()), ("RADOM", (radom,)), ("LUBLIN", (lublin,)), ("İKİSİ", (radom, lublin))):
        bilesen_rapor(ad_, deg, kim, f)
        bilesen_rapor(ad_, deg, kim, g1)
# Radom yeni başlangıcı
for ad_, deg in (("RADOM", (radom,)), ("İKİSİ", (radom, lublin))):
    bilesen_rapor(ad_, deg, "Radom (Polonya)", "1915-07-20")
    bilesen_rapor(ad_, deg, "Radom (Polonya)", "1916-07-19")
bilesen_rapor("İKİSİ", (radom, lublin), "Lublin", "1915-07-30")
bilesen_rapor("İKİSİ", (radom, lublin), "Lublin", "1916-07-29")
