# -*- coding: utf-8 -*-
"""ARAC-ZINCIR-SINAV-1006 — `zincir_kaynagi:` bayat kopya kapısının sınavı (UMIT-W9-ZINCIR-1006).

Üç kol, İKİ YÖNDE (CLAUDE.md §11: "yeni denetim iki yönde sınanmadan çalışıyor sayılmaz"):
  ① BAYAT kopya kurulunca ÖTER   (taban farkı · yalnız isg farkı · v:kid farkı · bozuk beyan)
  ② GÜNCEL kopyada ÖTMEZ         (A/B yazım biçimi farkı sahibi değiştirmez ⇒ sahte bayat yok)
  ③ alan YOKSA eski davranış     (beyan 0 · ihlal yok · ÖZET satırı yok · tek bilgi satırı)
  ④ gerçek veri                  (bilgi: kaç beyan, kaç bayat — adlarıyla)

Koşu:  py denetim/ARAC-ZINCIR-SINAV-1006.py        (depo kökünden)
Çıkış: 0 bütün kollar tuttu · 1 en az bir kol çürüdü
"""
import contextlib
import copy
import io
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")
import denetle  # noqa: E402

KAYNAK = {"ad": "Kaynak", "s": [{"f": "1281-01-01", "t": "1400-01-01", "d": "bizans"},
                                {"f": "1500-01-01", "t": "1923-10-29", "d": "safevi"}],
          "d": [{"f": "1400-01-01", "t": "1500-01-01"}],
          "v": [], "isg": [{"f": "1600-01-01", "t": "1610-01-01", "d": "rusya"}]}
ZK = {"yer": "Kaynak", "pencere": ["1281-01-01", "1923-10-29"], "tur": "birebir"}
SONUC = []


def kol(ad, kosul):
    SONUC.append((ad, bool(kosul)))
    print(("  ✓ " if kosul else "  ✗ ") + ad)


def kopya(**degis):
    y = copy.deepcopy(KAYNAK)
    y["ad"] = "Kopya"
    y["zincir_kaynagi"] = copy.deepcopy(ZK)
    y.update(degis)
    return y


def kos(Y):
    R = denetle.zincir_kaynagi_denetimi(Y)
    tampon = io.StringIO()
    with contextlib.redirect_stdout(tampon):
        ihlal = denetle.zincir_kaynagi_rapor(R)
    return R, ihlal, tampon.getvalue()


print("① BAYAT kopya ÖTER")
y = kopya(s=[{"f": "1281-01-01", "t": "1400-01-01", "d": "bizans"},
             {"f": "1500-01-01", "t": "1923-10-29", "d": "kacar"}])
R, _, cikti = kos([KAYNAK, y])
kol("taban farkı (safevi ↔ kacar) bayat sayılır", len(R["bayat"]) == 1)
kol("adıyla basılır", "BAYAT KOPYA  Kopya ← Kaynak" in cikti)
kol("ÖZET satırı sayıyı taşır (D265)", (R.get("ozet") or "").startswith("ÖZET · bayat kopya: 1"))
R, _, cikti = kos([KAYNAK, kopya(isg=[])])
kol("yalnız isg: farkı bayat sayılır ve etiketlenir",
    len(R["bayat"]) == 1 and "YALNIZ isg:" in cikti)
k2 = copy.deepcopy(KAYNAK)
k2["v"] = [{"f": "1450-01-01", "t": "1460-01-01"}]
y = kopya(v=[{"f": "1450-01-01", "t": "1460-01-01", "kid": "eflak"}])
R, _, _ = kos([k2, y])
kol("v:kid farkı (tâbi kimliği) bayat sayılır", len(R["bayat"]) == 1)
y = kopya()
y["zincir_kaynagi"] = {"yer": "Pencere", "pencere": ["1700-01-01", "1800-01-01"], "tur": "pencere"}
z = copy.deepcopy(KAYNAK)
z["ad"] = "Pencere"
z["s"] = [{"f": "1281-01-01", "t": "1923-10-29", "d": "safevi"}]
z["d"] = []
z["isg"] = []
R, _, _ = kos([KAYNAK, z, y])
kol("pencere DIŞI fark sayılmaz, İÇİ sayılır (1700-1800 aynı ⇒ 0)", len(R["bayat"]) == 0)
y["zincir_kaynagi"]["pencere"] = ["1450-01-01", "1800-01-01"]
R, _, _ = kos([KAYNAK, z, y])
kol("pencere farka uzanınca sayılır (1450-1500 OSMANLI ↔ safevi)", len(R["bayat"]) == 1)
for bozuk, ne in ((dict(ZK, yer="YokBöyleKayıt"), "kaynak kayıt yok"),
                  (dict(ZK, tur="kopya"), "tanımsız tur"),
                  (dict(ZK, pencere=["1923-10-29", "1281-01-01"]), "ters pencere"),
                  (dict(ZK, pencere=["1281"]), "eksik pencere"),
                  (dict(ZK, yer="Kopya"), "kendine kopya"),
                  ([], "boş liste")):
    y = kopya(zincir_kaynagi=bozuk)
    R, ihlal, _ = kos([KAYNAK, y])
    kol(f"bozuk beyan ihlaldir — {ne}", len(R["bozuk"]) == 1 and ihlal)
eski = denetle.BEKLENEN_BAYAT_KOPYA
try:
    denetle.BEKLENEN_BAYAT_KOPYA = 0
    y = kopya(s=[{"f": "1281-01-01", "t": "1923-10-29", "d": "kacar"}])
    R, ihlal, _ = kos([KAYNAK, y])
    kol("tavan yazılınca tavanı AŞAN bayat ihlaldir", ihlal)
    denetle.BEKLENEN_BAYAT_KOPYA = 1
    R, ihlal, _ = kos([KAYNAK, y])
    kol("tavan İÇİNDEKİ bayat ihlal değildir", not ihlal)
finally:
    denetle.BEKLENEN_BAYAT_KOPYA = eski
y = kopya()
w = kopya()
w["ad"] = "Kopyanın kopyası"
w["zincir_kaynagi"] = dict(ZK, yer="Kopya")
R, _, _ = kos([KAYNAK, y, w])
kol("zincirleme (kaynak da kopya) ayrı sayılır", R["zincirleme"] == [("Kopyanın kopyası", "Kopya")])

print("② GÜNCEL kopya ÖTMEZ")
R, ihlal, _ = kos([KAYNAK, kopya()])
kol("birebir aynı zincir ⇒ 0 bayat, ihlal yok", not R["bayat"] and not ihlal)
# B biçimi: d: SÜREKLİ, v: içine yuvalanır · A biçimi: d: kesilir, araya v: girer
A = {"ad": "Kaynak", "s": [], "isg": [],
     "d": [{"f": "1281-01-01", "t": "1500-01-01"}, {"f": "1600-01-01", "t": "1923-10-29"}],
     "v": [{"f": "1500-01-01", "t": "1600-01-01", "kid": "eflak"}]}
Bk = {"ad": "Kopya", "s": [], "isg": [], "zincir_kaynagi": dict(ZK),
      "d": [{"f": "1281-01-01", "t": "1923-10-29"}],
      "v": [{"f": "1500-01-01", "t": "1600-01-01", "kid": "eflak"}]}
R, _, _ = kos([A, Bk])
kol("A/B yazım biçimi (v: kazanır) sahte bayat ÜRETMEZ", not R["bayat"])
y = kopya()
y["s"] = [{"f": "1281-01-01", "t": "1350-01-01", "d": "bizans"},
          {"f": "1350-01-01", "t": "1400-01-01", "d": "bizans"},
          {"f": "1500-01-01", "t": "1923-10-29", "d": "safevi"}]
R, _, _ = kos([KAYNAK, y])
kol("aynı sahibin bölünmüş dönemi sahte bayat ÜRETMEZ", not R["bayat"])
y = kopya(zincir_kaynagi=[dict(ZK, pencere=["1281-01-01", "1500-01-01"], tur="pencere"),
                          dict(ZK, pencere=["1500-01-01", "1923-10-29"], tur="pencere")])
R, _, _ = kos([KAYNAK, y])
kol("liste biçimi (iki parça) okunur, 0 bayat", R["parca"] == 2 and not R["bayat"])

print("③ alan YOKSA eski davranış")
y = copy.deepcopy(KAYNAK)
y["ad"] = "Beyansız"
y["s"] = [{"f": "1281-01-01", "t": "1923-10-29", "d": "kacar"}]   # kaynaktan FARKLI ama beyansız
R, ihlal, cikti = kos([KAYNAK, y])
kol("beyansız farklı kayıt kapıya GÖRÜNMEZ", R["beyanli"] == 0 and not R["bayat"])
kol("ihlal yok · ÖZET satırı yok", not ihlal and R.get("ozet") is None)
kol("tek bilgi satırı basılır", cikti.count("\n") == 1 and "0 kayıt beyanlı" in cikti)

print("④ gerçek veri (bilgi — tavan ÖNERİSİ buradan)")
import girdi  # noqa: E402
with contextlib.redirect_stdout(io.StringIO()):
    Y = girdi.yukle(sessiz=True)
R = denetle.zincir_kaynagi_denetimi(Y)
print(f"  beyanlı kayıt {R['beyanli']} · parça {R['parca']} · BAYAT {len(R['bayat'])} · "
      f"bozuk {len(R['bozuk'])} · zincirleme {len(R['zincirleme'])}")
for ad, yer, f, t, tur, fk in R["bayat"]:
    print(f"    {ad} ← {yer} [{f}, {t}) {tur} · {len(fk)} dilim")
for ad, sebep in R["bozuk"]:
    print(f"    BOZUK {ad}: {sebep}")

cur = [a for a, ok in SONUC if not ok]
print(f"\nSINAV: {len(SONUC) - len(cur)}/{len(SONUC)} kol tuttu" + (" — ÇÜRÜYEN: " + " · ".join(cur) if cur else ""))
sys.exit(1 if cur else 0)
