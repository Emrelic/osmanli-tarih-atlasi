# -*- coding: utf-8 -*-
r"""`degismez4`in KIMLIK COZUMU icin IKI YONLU SINAV (1 Ekim 2026).

NICIN: KASA olctu — `degismez4` kunyeyi yalniz `id` ile esliyordu, oysa
yerlesimin `s:[].d` alani kunyenin `harita:` boya anahtarini tasiyabilir.
Cozum girdi (id ∪ harita). Ama bir denetim TEK YONDE sinanmadan calismis
saylmaz (`CLAUDE.md §11`): "cozuluyor" kadar "cozulMEMESI gerekeni
yakaliyor mu" da sinanir.

SINAV SENTETIK VERIYLE KOSAR — `data/` HIC OKUNMAZ, HIC DEGISMEZ.
Her yon icin beklenen kova ONCEDEN yazildi; tutmazsa cikis 1.

KULLANIM:  py denetim/ARAC-D4-HARITA-SINAV-1001.py
"""
import os
import sys

sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)

import denetle as D  # noqa: E402

# ── gercek kunye evrenini oku (node ile) ───────────────────────────────────
K = D._devletler_yukle()
if K is None:
    print("🔴 devletler.js okunamadi — SINAV KOSMADI (bu 'temiz' DEGIL)")
    sys.exit(2)
H = D._devletler_harita()
if H is None:
    print("🔴 harita haritasi kurulamadi — SINAV KOSMADI")
    sys.exit(2)
print("  kunye (id)          : %d" % len(K))
print("  harita takma adi    : %d" % len(H))
cok = {k: v for k, v in H.items() if len(v) > 1}
print("  COK kunyeli takma ad: %d  %s" % (len(cok), sorted(cok)[:6]))

# ── sinav icin gercek ornekler SEC (uydurma degil, veriden) ────────────────
tek = [k for k, v in H.items() if len(v) == 1 and k not in K]
if not tek:
    print("🔴 tek kunyeli takma ad bulunamadi — sinav kurulamadi")
    sys.exit(2)
TAKMA = sorted(tek)[0]
GERCEK_ID = sorted(K)[0]
print("  sinavda kullanilan takma ad : %s -> %s" % (TAKMA, H[TAKMA][0][2]))
print("  sinavda kullanilan gercek id: %s" % GERCEK_ID)

kf, kt = K[GERCEK_ID]
hf, ht = H[TAKMA][0][0], H[TAKMA][0][1]


def yer(ad, kim, f, t):
    return {"ad": ad, "s": [{"d": kim, "f": f, "t": t}]}


# ── BES YON, her birinin BEKLENEN kovasi ONCEDEN yazili ───────────────────
#   (ad, yerlesim, beklenen kova)
SINAVLAR = [
    ("① GERCEK id cozulmeli, hicbir kovaya dusmemeli",
     yer("SINAV-ID", GERCEK_ID, kf or "1300-01-01", kt or "1400-01-01"),
     None),
    ("② `harita:` TAKMA ADI cozulmeli, kunyesiz SAYILMAMALI",
     yer("SINAV-TAKMA", TAKMA, hf or "1300-01-01", ht or "1400-01-01"),
     None),
    ("③ UYDURMA kimlik KUNYESIZ kovasina dusmeli  ← ters yon",
     yer("SINAV-YOK", "bu-kimlik-kesinlikle-yok-12345", "1500-01-01",
         "1600-01-01"),
     "kunyesiz"),
    ("④ `__BOSLUK__` MUAF — hicbir kovaya dusmemeli",
     yer("SINAV-BOSLUK", "__BOSLUK__", "1500-01-01", "1600-01-01"),
     None),
]
if cok:
    CK = sorted(cok)[0]
    SINAVLAR.append(
        ("⑤ COK kunyeli takma ad, kapsayici tarihte SECILEMEMELI",
         yer("SINAV-COK", CK, "0001-01-01", "9999-01-01"), "cok_harita"))

print("\n### IKI YONLU SINAV ###")
hata = 0
for ad, y, beklenen in SINAVLAR:
    ihlal, kunyesiz, olculdu, asan, once, cok_harita = D.degismez4([y])
    kovalar = {"kunyesiz": kunyesiz, "cok_harita": cok_harita}
    dusen = [k for k, v in kovalar.items() if v]
    # ihlal/asan/once kovalari tarihe bagli; sinav YALNIZ kimlik cozumunu
    # olcuyor, o yuzden onlar DEGERLENDIRILMEZ (ad duzeyinde beyan).
    if beklenen is None:
        ok = not dusen
        bek = "hicbir kimlik kovasina dusmemeli"
    else:
        ok = dusen == [beklenen]
        bek = "yalniz `%s`" % beklenen
    print("  %s %s" % ("✓" if ok else "✗", ad))
    print("      beklenen: %-42s dusen: %s" % (bek, dusen or "yok"))
    if not ok:
        hata += 1

print("\n### SONUC ###")
if hata:
    print("🔴 %d YON BASARISIZ — kimlik cozumu guvenilir DEGIL" % hata)
    sys.exit(1)
print("✓ %d yonun hepsi gecti — cozuluyor VE cozulmemesi gereken yakalaniyor"
      % len(SINAVLAR))
