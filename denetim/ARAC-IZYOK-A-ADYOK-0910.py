# -*- coding: utf-8 -*-
"""IZ-YOK DENETIM A — AD-YOK kayitlarini IKIYE AYIRIR (SALT OKUR).

1.MURAT'in sorusu (M-3278 ④): bir yama kaydinin canli veride karsiligi
olmamasi IKI AYRI SEY olabilir:
   (a) GERCEK BOSLUK — yerlesim atlasta hic yok
   (b) ESANLAM BORCU — yerlesim VAR, ADI ayrisiyor
                       (`Diyarbekir ↔ Diyarbakir` sinifi)
🔴 Ve (b) normallestiricinin COZMEDIGI ve COZMEMESI GEREKEN siniftir
   (CLAUDE.md §4: normallestirici bir SOZLUK degildir).

UC BAGIMSIZ OLCUT — ve UCU DE AYRI RAPORLANIR (tek sayiya indirilmez):
   ① KOORDINAT   yamada lat/lon varsa: en yakin canli nokta kac km?
                 <= 3 km  -> AYNI YER, ad ayrisiyor  ⇒ (b) KUVVETLI
                 <= 25 km -> supheli, elle bakilmali
   ② AD BENZERLIGI  normallestirilmis adlar arasinda difflib orani
                 >= 0.80 -> (b) adayi
   ③ PARANTEZ/EK  "Sibam" ile "Sibam (Hadramut)" gibi onek-icerme
⚠️ Hicbiri TEK BASINA hukum degildir; alet UCUNU DE basar, hukmu okuyan verir.
"""
import json, os, sys, io, importlib.util, difflib

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))

_spec = importlib.util.spec_from_file_location(
    "n", os.path.join(KOK, "denetim", "ARAC-NORMAL-0903.py"))
_m = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_m)
norm = _m.norm

import girdi

Y = girdi.yukle(sessiz=True)
CANLI_N = {}
for y in Y:
    CANLI_N.setdefault(norm(y.get("ad", "")), y)

DONEM_ALAN = ("d", "s", "v", "isg")
DUZ_ALAN = ("m", "k", "bos", "tur", "kur")


def topla(v, derinlik=0):
    out = []
    if derinlik > 4:
        return out
    if isinstance(v, list):
        for x in v:
            if isinstance(x, dict):
                out.append(x)
            elif isinstance(x, list):
                out.extend(topla(x, derinlik + 1))
    elif isinstance(v, dict):
        if "ad" in v or ("t" in v and "b" in v):
            out.append(v)
        else:
            for _, vv in v.items():
                out.extend(topla(vv, derinlik + 1))
    return out


def en_yakin(lat, lon):
    en, ey = None, None
    for y in Y:
        la, lo = y.get("lat"), y.get("lon")
        if la is None or lo is None:
            continue
        d = girdi.km(lat, lon, la, lo)
        if en is None or d < en:
            en, ey = d, y
    return en, ey


ham = json.load(open(sys.argv[1], encoding="utf-8"))
adyok = []
for dosya, gov in sorted(ham.items()):
    for _, v in (gov.get("degiskenler") or {}).items():
        for k in topla(v):
            if not isinstance(k, dict) or "ad" not in k:
                continue
            if not any(a in k for a in DONEM_ALAN + DUZ_ALAN + ("kd",)):
                continue
            if norm(k["ad"]) in CANLI_N:
                continue
            adyok.append((dosya, k))

print("# canli taban: %d nokta" % len(Y))
print("# AD-YOK kayit: %d" % len(adyok))
print()

kova = {"(b) KOORDINAT <=3km": [], "(b) AD BENZER >=0.80": [],
        "🟡 SUPHELI 3-25 km": [], "(a) GERCEK BOSLUK": [],
        "⚪ KOORDINATSIZ + benzer ad YOK": []}

canli_adlar = list(CANLI_N.keys())
for dosya, k in adyok:
    ad = k["ad"]
    n = norm(ad)
    lat, lon = k.get("lat"), k.get("lon")
    mesafe, komsu = (None, None)
    if lat is not None and lon is not None:
        mesafe, komsu = en_yakin(lat, lon)
    yakin = difflib.get_close_matches(n, canli_adlar, n=1, cutoff=0.80)
    benzer = CANLI_N[yakin[0]].get("ad") if yakin else None
    oran = difflib.SequenceMatcher(None, n, yakin[0]).ratio() if yakin else 0.0

    satir = "%-34s %-26s" % (ad[:33], dosya[:25])
    if mesafe is not None:
        satir += " | en yakin %6.1f km = %s" % (mesafe, (komsu or {}).get("ad"))
    if benzer:
        satir += " | ad~%.2f = %s" % (oran, benzer)

    if mesafe is not None and mesafe <= 3:
        kova["(b) KOORDINAT <=3km"].append(satir)
    elif benzer:
        kova["(b) AD BENZER >=0.80"].append(satir)
    elif mesafe is not None and mesafe <= 25:
        kova["🟡 SUPHELI 3-25 km"].append(satir)
    elif mesafe is not None:
        kova["(a) GERCEK BOSLUK"].append(satir)
    else:
        kova["⚪ KOORDINATSIZ + benzer ad YOK"].append(satir)

for kk, vv in kova.items():
    print("=" * 108)
    print("%s : %d" % (kk, len(vv)))
    for s in vv:
        print("   ", s)
