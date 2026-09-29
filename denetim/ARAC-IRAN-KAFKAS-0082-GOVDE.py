# -*- coding: utf-8 -*-
"""IRAN-KAFKAS-0082 — MOTOR ÇIKTISI ölçümü: bir yabancı devletin o GÜNkü gövdesi (devletler_harita.js)
verilen noktaları KAPSIYOR mu? 177 MB dosya BELLEĞE ALINMAZ: DEVLET_HARITA (~2 MB) okunur, PARCALAR
akışla taranır ve yalnız gereken parçalar json'a çevrilir (RAM darboğazı ilanı yürürlükte).
Kullanım: py denetim/ARAC-IRAN-KAFKAS-0082-GOVDE.py <devlet_id> <gun> "Ad:lat:lon" ..."""
import sys, io, json
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
YOL = "data/devletler_harita.js"
did, gun = sys.argv[1], sys.argv[2]
noktalar = [(a, float(b), float(c)) for a, b, c in (x.split(":") for x in sys.argv[3:])]

with open(YOL, "rb") as f:
    ham = f.read()  # bayt olarak — 177 MB tek kopya, json nesnesine ÇEVRİLMEZ
i = ham.find(b"window.DEVLET_HARITA =")
j = ham.find(b"window.URETIM_IZI =")
dh = ham[i + len(b"window.DEVLET_HARITA ="):j].strip().rstrip(b";")
DH = json.loads(dh.decode("utf-8"))
kay = next((d for d in DH if d["id"] == did), None)
if not kay:
    print("devlet yok:", did); sys.exit(1)
dn = next((d for d in kay["dnm"] if d["f"] <= gun < d["t"]), None)
if not dn:
    print(f"{did} {gun}: dönem YOK (gövde çizilmiyor)"); sys.exit(0)
lazim = set(dn["g"])
print(f"{did} {gun}: dönem {dn['f']}→{dn['t']} · {len(lazim)} parça")

# PARCALAR akış taraması: üst düzey elemanları köşeli parantez derinliğiyle ayır
bas = ham.find(b"[", ham.find(b"window.DEVLET_PARCALAR ="))
son = ham.find(b"window.DEVLET_PARCA_HALKA =")
derin, idx, eb = 0, 0, None
parcalar = {}
for k in range(bas + 1, son):
    c = ham[k]
    if c == 0x5B:  # [
        if derin == 0:
            eb = k
        derin += 1
    elif c == 0x5D:  # ]
        derin -= 1
        if derin == 0:
            if idx in lazim:
                parcalar[idx] = json.loads(ham[eb:k + 1])
            idx += 1
            if len(parcalar) == len(lazim):
                break
        elif derin < 0:
            break

def icinde(lon, lat, halka):
    ic = False
    n = len(halka)
    for a in range(n):
        x1, y1 = halka[a]; x2, y2 = halka[(a + 1) % n]
        if (y1 > lat) != (y2 > lat) and lon < (x2 - x1) * (lat - y1) / (y2 - y1) + x1:
            ic = not ic
    return ic

for ad, lat, lon in noktalar:
    kap = [p for p, h in parcalar.items() if icinde(lon, lat, h)]
    print(f"  {ad:<14} ({lat},{lon}) → {'İÇİNDE (parça ' + str(kap) + ')' if kap else 'dışında'}")
