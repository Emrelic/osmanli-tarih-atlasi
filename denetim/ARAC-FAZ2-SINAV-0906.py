# -*- coding: utf-8 -*-
"""FAZ 2 ③④ — YAMANIN SINAVI, iki yönde (`C13`).

① ATEŞLEME — boşluk sınavı gerçekten ötüyor mu? (gerçek veride kusur
   YOK ⇒ sahte bir boşlukla ZORLA ateşlenir; ateşlenemeyen dal
   denetimsiz daldır)
② GEÇME + DENETLE — yama bellekte uygulanır ve `denetle.py`nin KENDİ
   fonksiyonları çağrılır. `_osmanli_kure` önbelleği temizlenir,
   sessiz no-op `assert` ile kapatılır.

🔴 VERİ YAZMAZ.
"""
import copy
import io
import json
import os
import sys

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
import denetle as D  # noqa: E402
import girdi  # noqa: E402

SON = "1923-10-29"
YAMA = json.load(open("denetim/YAMA-ISG-FAZ2-cukurova.json",
                      encoding="utf-8"))["kayit"]


def bosluk_sinavi(d, s):
    dilim = sorted([(p["f"], p["t"]) for p in d + s], key=lambda x: x[0])
    imlec, bos = "1918-10-30", []
    for f, t in dilim:
        if t <= imlec:
            continue
        if f > imlec:
            bos.append("%s→%s" % (imlec, f))
        imlec = max(imlec, t)
    if imlec < SON:
        bos.append("%s→%s" % (imlec, SON))
    return bos


# ── ① ATEŞLEME — sahte boşlukla ZORLA
print("═══ ① ATEŞLEME SINAVI (C13 — dal zorla koşuluyor)")
ornek = copy.deepcopy(YAMA[0])
temiz = bosluk_sinavi(ornek["d"], ornek["s"])
print("   gerçek kayıt (%s) : %s"
      % (ornek["ad"], temiz if temiz else "🟢 BOŞLUK YOK — dal ötmedi"))
bozuk = copy.deepcopy(ornek)
for p in bozuk["s"]:
    if p.get("d") == "tbmm-turkiye":
        p["f"] = "1921-01-01"          # 8 aylık SAHTE boşluk aç
bos = bosluk_sinavi(bozuk["d"], bozuk["s"])
print("   BOZULMUŞ kayıt     : %s" % (bos if bos else "🔴 DAL ATEŞLEMEDİ"))
assert bos, "🔴 C13 İHLALİ: boşluk dalı zorlanamadı ⇒ DENETİMSİZ DAL"
print("   ⇒ 🟢 dal ateşledi, sınav sağlam")

# ── ② GEÇME + DENETLE
Y0 = girdi.yukle(sessiz=True)
O = D.olaylari_yukle()
Y1 = copy.deepcopy(Y0)
ix = {z["ad"]: z for z in Y1}
n = 0
for k in YAMA:
    z = ix.get(k["ad"])
    assert z is not None, "🔴 eşleşmedi: %s" % k["ad"]
    z["d"] = copy.deepcopy(k["d"])
    z["s"] = copy.deepcopy(k["s"])
    z["isg"] = copy.deepcopy(k["isg"])
    n += 1
assert n == len(YAMA), "🔴 SESSİZ NO-OP: %d/%d" % (n, len(YAMA))
print("\n═══ ② %d/%d kayıt bellekte uygulandı" % (n, len(YAMA)))

ters = [(z["ad"], kat, p) for z in Y1 for kat in ("d", "s", "v", "isg")
        for p in (z.get(kat) or [])
        if p.get("f") and p.get("t") and p["f"] >= p["t"]]
print("   TERS/SIFIR dönem : %d %s" % (len(ters), ters[:2] if ters else ""))


def olc(Y, et):
    D._osmanli_kure.__defaults__[0].clear()
    Yc = [z for z in Y if z.get("_kaynak") not in D.KUYRUK_DOSYALARI]
    sz = D.degismez1(Y)
    k2, a2 = D.degismez2(Yc, O)
    ks, a_ham = D.degismez2(Yc, O, ("s",))
    a_s, ds = D.kapsam_disi(Y, a_ham)
    ki, ai = D.degismez2(Yc, O, ("isg",))
    print("   %-6s sahipsiz %-4d D2 %d/%d  D2s %d/%d  D2i %d/%d (tavan %d)"
          % (et, len(sz), len(k2), len(a2), len(ks), len(a_s),
             len(ki), len(ai), D.BEKLENEN_ACIK_ISG))
    return {a[0] for a in ai}


print()
g0 = olc(Y0, "ÖNCE")
g1 = olc(Y1, "SONRA")
print("\n   2i YENİ AÇILAN GÜN (madde YAZILACAK): %d" % len(g1 - g0))
for g in sorted(g1 - g0):
    print("      🔴 %s" % g)
