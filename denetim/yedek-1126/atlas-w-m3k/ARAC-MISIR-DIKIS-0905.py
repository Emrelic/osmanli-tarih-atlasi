# -*- coding: utf-8 -*-
import sys
sys.path.insert(0, "arac")
import girdi

Y = girdi.yukle(sessiz=True)

GECIS1 = "1914-12-18"   # sultanlik baslangici
GECIS2 = "1922-03-15"   # kralligin baslangici (oneri)

# 55'lik kume (ayni imza)
secilenler = []
for y in Y:
    s = y.get("s") or []
    v = y.get("v") or []
    onceki_kavalali_v = any("kavalal" in (p.get("k") or "").lower() and p.get("t") == GECIS1 for p in v)
    hedef_donem = next((p for p in s if p.get("d") == "ingiltere" and p.get("f") == GECIS1 and p.get("t") == "1923-10-29"), None)
    if onceki_kavalali_v and hedef_donem:
        secilenler.append(y)

print("55'lik kume:", len(secilenler))
print()
print("=== ① 1914-12-18 DIKISI (v:Kavalali -> s:) ===")
tam, ortusme, bosluk = [], [], []
for y in secilenler:
    v = y.get("v") or []
    kaval = next((p for p in v if "kavalal" in (p.get("k") or "").lower()), None)
    if kaval is None:
        continue
    vt = kaval.get("t")
    if vt == GECIS1:
        tam.append(y["ad"])
    elif vt and vt > GECIS1:
        ortusme.append((y["ad"], vt))
    elif vt and vt < GECIS1:
        bosluk.append((y["ad"], vt))
print("TAM DIKIS:", len(tam))
print("ORTUSME  :", len(ortusme), ortusme[:10])
print("BOSLUK   :", len(bosluk), bosluk[:10])

print()
print("=== ② 1922-03-15 DIKISI (kendi onerimiz, sultanlik->kralligi) ===")
# Bu gunu HENUZ veri tasimiyor (proposed), yani her noktada "s:" icinde
# bugun icin bir seam olmasi beklenmiyor -- bu bir INSA kontrolu:
# proposed iki donemin f/t'si TAM ortusuyor mu (1922-03-15 = 1922-03-15)
# -- yer_yama dosyasinin kendi icindeki tutarliligini dogrudan kontrol et.
import re
icerik = open("denetim/yer_yama_misir_himaye.js", encoding="utf-8").read()
kayitlar = re.findall(r'ad:"([^"]+)".*?s:(\[.*?\]),', icerik, re.S)
tam2, sorun2 = 0, []
for ad, s_metni in kayitlar:
    fler = re.findall(r'f:"([^"]+)"', s_metni)
    tler = re.findall(r't:"([^"]+)"', s_metni)
    # son iki donem sultanligi/kralligi olmali
    if len(tler) >= 2 and len(fler) >= 2:
        sultanlik_t = tler[-2]
        kralligi_f = fler[-1]
        if sultanlik_t == kralligi_f == GECIS2:
            tam2 += 1
        else:
            sorun2.append((ad, sultanlik_t, kralligi_f))
print("TAM DIKIS (proposed sultanlik.t == kralligi.f):", tam2, "/", len(kayitlar))
print("SORUNLU:", sorun2[:10])

print()
print("=== ③ 55'IN DISINDA -- v:Kavalali tasiyip 1914-12-18'de BITMEYEN nokta var mi? ===")
disarida = []
for y in Y:
    v = y.get("v") or []
    kaval = next((p for p in v if "kavalal" in (p.get("k") or "").lower()), None)
    if kaval and y not in secilenler:
        disarida.append((y["ad"], kaval.get("f"), kaval.get("t")))
print("DISARIDAKI SAYISI:", len(disarida))
for ad, f, t in disarida[:20]:
    print(" ", ad, f, "->", t)
