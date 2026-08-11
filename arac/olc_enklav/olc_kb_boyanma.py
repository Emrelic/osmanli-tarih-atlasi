# -*- coding: utf-8 -*-
"""④ KASITLI BOSLUK BOYANIYOR MU?  EVREN: EKRANDA GORULEN SEY.

🟢 `delikleri_doldur` MUAFIYETININ (uret_petek.py:783) CANLI SAGLAMASI.
Muafiyet, icinde `kasitli_bosluk` noktasi olan halkanin dolmasini engeller.
Bu betik dogrudan sorar: kasten bos birakilan bir yer BOYANIYOR MU?

NE OLCER: her kesitte, kasten bos noktalardan kaci yayindaki bir govdenin
ICINDE kaliyor.

🔴🔴 EVREN TUZAGI — BUNU ATLAMA. Ilk yazimda butun `kasitli_bosluk`
noktalarini saydim ve "110 nokta boyaniyor" dedi. YANLISTI: bir nokta HEM
bayrak tasiyip HEM o tarihte SAHIPLI olabilir —
    Kuveyt  kur:1716, 1716'dan sahipli   -> 1800'de boyanmasi DOGRU
    Doha · Abu Dabi · Matsumae · Cetinje  -> ayni desen
Cetinje ayrica `_kusatilmis`in kusatilmislik devrine giriyor.
Sorulacak kume: bayrakli + O GUN SAHIPSIZ + VARLIK EPOKU ICINDE.
Evren daraltilinca sayi 110 -> 0.

Kosum:  py arac/olc_enklav/olc_kb_boyanma.py
"""
import time
import _ortak as O
import girdi
from shapely.geometry import Point
from shapely.strtree import STRtree

t0 = time.time()
Y = girdi.yukle(sessiz=True)
D, V, coz = O.oku_yayin_govdeleri()
print(f"okundu ({time.time()-t0:.0f} sn)")

KB_HEP = [i for i, y in enumerate(Y) if y.get("kasitli_bosluk")]
print(f"`kasitli_bosluk` bayragi tasiyan nokta (hepsi): {len(KB_HEP)}")

GUNLER = ["1300-06-15", "1400-06-15", "1500-06-15", "1600-06-15",
          "1700-06-15", "1800-06-15", "1900-06-15"]

print()
print("=" * 98)
print(f"{'gun':<13}{'govde':>7}{'bayrakli+sahipsiz+epok ici':>28}"
      f"{'BUNUN BOYANANI':>16}{'bayraksiz col BOYANAN':>24}")
print("=" * 98)
BAYRAKSIZ_BOYANAN = {}
for g in GUNLER:
    ps = []
    for d in D["DONEMLER"]:
        if d["f"] <= g < d["t"]:
            ps += coz(d.get("o"), D["PARCALAR"], D["PARCA_HALKA"])
            ps += coz(d.get("v"), D["PARCALAR"], D["PARCA_HALKA"])
    for dev in V["DEVLET_HARITA"]:
        for d in dev["dnm"]:
            if d["f"] <= g < d["t"]:
                ps += coz(d.get("g"), V["DEVLET_PARCALAR"],
                          V["DEVLET_PARCA_HALKA"])
    agac = STRtree(ps)

    def icinde(i):
        pt = Point(Y[i]["lon"], Y[i]["lat"])
        for q in agac.query(pt):
            if ps[int(q)].contains(pt):
                return True
        return False

    kb_aday = [i for i in KB_HEP if O.epok_ici(Y[i], g) and not O.sahipli(Y[i], g)]
    kb_ic = [i for i in kb_aday if icinde(i)]
    bayraksiz = [i for i, y in enumerate(Y)
                 if O.epok_ici(y, g) and not O.sahipli(y, g)
                 and not y.get("kasitli_bosluk")]
    bs_ic = [i for i in bayraksiz if icinde(i)]
    for i in bs_ic:
        BAYRAKSIZ_BOYANAN.setdefault(Y[i]["ad"], []).append(g[:4])
    print(f"{g:<13}{len(ps):>7}{len(kb_aday):>28}{len(kb_ic):>16}"
          f"{str(len(bs_ic)) + '/' + str(len(bayraksiz)):>24}")
    for i in kb_ic:
        print(f"        🔴 KASTEN BOS AMA BOYANMIS: {Y[i]['ad']}  "
              f"{Y[i]['lat']:.2f}K {Y[i]['lon']:.2f}D")

print()
print("=" * 98)
print("BAYRAKSIZ ama fiilen kasitli — DELIK OLARAK DOLDURULMUS olanlar")
print("=" * 98)
ix = {y["ad"]: y for y in Y}
for ad, gs in sorted(BAYRAKSIZ_BOYANAN.items(), key=lambda x: -len(x[1])):
    y = ix[ad]
    print(f"   {ad:<32} {len(gs)}/{len(GUNLER)} kesit  "
          f"{y['lat']:7.2f}K {y['lon']:8.2f}D  ({','.join(gs)})")
print()
print("⚠️ Muafiyet BUNLARI KURTARMAZ — `kasitli_bosluk` bayragi tasimiyorlar.")
print("   Kusur MOTORDA DEGIL VERIDE. Bir veri oturumunun isi.")
print()
print("11 Agu 2026 tabani (r1140):")
print("   bayrakli+sahipsiz+epok ici aday  122·122·122·115·77·74·23")
print("   BUNUN BOYANANI                     0·  0·  0·  0· 0· 0· 0")
print("   bayraksiz boyanan: Darfur · Somali colu · Ogaden · Libya ic colu")
print()
print("🔴 HUKUM: 'BUNUN BOYANANI' sifirdan farkli cikarsa ya muafiyet")
print("   calismiyor ya bir kasitli bosluk gercekten kusatilmis. Ikisi de")
print("   BULGU. `else` dali yerine `if _KB_MUAF:` dali basiliyorsa,")
print("   motor zaten uyarmis demektir — kosu logunu oku.")
