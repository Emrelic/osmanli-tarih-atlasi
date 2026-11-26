# -*- coding: utf-8 -*-
"""157 `kid`SIZ `v:` DONEMI — kacini KUNYEYE baglayabiliriz?

BULGU (ARAC-VL-KID-0907): `kid` ile gruplamak `k` ile gruplamaktan DAHA
KOTU cikti (+1 etiket). Sebep KISMI KAPSAMA: 272/429 doneme `kid`
yazilmis, kalanina yazilmamis ⇒ AYNI POLITY ikiye boluniyor
("Bogdan Voyvodaligi" · "Bogdan Voyvodaligi (Moldavia)").

⇒ Care `kid`den vazgecmek DEGIL, KAPSAMAYI TAMAMLAMAK. Bu betik olcer:
kac tanesi MEKANIK baglanabilir (ayni `k` metnini tasiyan BASKA bir
donemde `kid` zaten var), kacinin ARASTIRMA gerektirdigi.

🔴 UYDURMA YOK: bir `k` metni ile bir kunye `ad`i arasinda BENZERLIK
   aramak, `§4`un "ad benzerligi esanlam DEGILDIR" dersini cignerdi
   (Haydarabad Sind ↔ Dekken 1500 km). Yalnizca VERININ KENDI ICINDEKI
   `k` -> `kid` eslesmeleri kullanilir; gerisi ARASTIRMA kovasina gider.
"""
import collections
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi   # noqa: E402

Y = girdi.yukle(sessiz=True)
DEV = {d["id"]: d for d in girdi.oku_devletler() if d.get("id")}
if len(Y) < 3000 or len(DEV) < 100:
    raise SystemExit("SESSIZ SIFIR")

# ① VERININ KENDI SOZLUGU: `k` metni -> gorulen `kid` degerleri
sozluk = collections.defaultdict(collections.Counter)
for y in Y:
    for p in (y.get("v") or []):
        if p.get("k") and p.get("kid"):
            sozluk[p["k"]][p["kid"]] += 1

tek_anlamli = {k: list(v)[0] for k, v in sozluk.items() if len(v) == 1}
cok_anlamli = {k: dict(v) for k, v in sozluk.items() if len(v) > 1}
print("verinin kendi sozlugu: %d `k` metni -> kid" % len(sozluk))
print("  TEK ANLAMLI %d · COK ANLAMLI %d" % (len(tek_anlamli), len(cok_anlamli)))
for k, v in list(cok_anlamli.items())[:5]:
    print("     🔴 %-44s %s" % (k[:44], v))

# ② kidSIZ donemleri kovala
mekanik, arastirma, adsiz = [], [], 0
for y in Y:
    for p in (y.get("v") or []):
        if p.get("kid"):
            continue
        k = p.get("k")
        if not k:
            adsiz += 1
            continue
        if k in tek_anlamli:
            mekanik.append((y.get("ad"), k, tek_anlamli[k]))
        else:
            arastirma.append((y.get("ad"), k))

print("\n" + "=" * 70)
print("  MEKANIK baglanabilir : %d   (verinin kendi sozlugunden)" % len(mekanik))
print("  ARASTIRMA gerekir    : %d" % len(arastirma))
print("  ADSIZ (k de yok)     : %d" % adsiz)
print("=" * 70)

print("\nMEKANIK — ornek:")
for ad, k, kid in mekanik[:10]:
    print("   %-22s %-40s -> %s" % (ad[:22], k[:40], kid))
if len(mekanik) > 10:
    print("   … +%d" % (len(mekanik) - 10))

say = collections.Counter(k for _, k in arastirma)
print("\nARASTIRMA — `k` metnine gore:")
for k, n in say.most_common(14):
    print("   ×%-4d %s" % (n, k[:60]))
print("\n  farkli `k` metni: %d" % len(say))
