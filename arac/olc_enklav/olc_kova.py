# -*- coding: utf-8 -*-
"""① KOVA SAYACI — "var ama sahipsiz" kumesi.  EVREN: yalniz VERI, geometri YOK.

NE OLCER: her kesit gununde noktalari uc kovaya ayirir —
   sahipli · varlik epoku DISINDA · VAR ama SAHIPSIZ
ve ucuncusunu `kasitli_bosluk` bayragina gore ikiye boler.

NICIN VAR: `_kusatilmis()` (uret_petek.py:2015) satir 2027'de bir KAPI tasiyor —
yalnizca varlik epoku DISINDAKI noktalara bakiyor. Bu betik o kapinin
disarida biraktigi kumeyi olcer.

⚠️ GEOMETRI OKUMAZ, dolayisiyla "bu nokta HARITADA boyaniyor mu" sorusuna
   CEVAP VEREMEZ. O soru `olc_kb_boyanma.py`nin.

Kosum:  py arac/olc_enklav/olc_kova.py
"""
import _ortak as O
import girdi

Y = girdi.yukle(sessiz=True)
print(f"nokta: {len(Y)}")

GUNLER = ["1300-06-15", "1400-06-15", "1500-06-15", "1600-06-15",
          "1700-06-15", "1800-06-15", "1900-06-15"]

print()
print("=" * 82)
print("① KOVALAR")
print("=" * 82)
print(f"{'gun':<14}{'sahipli':>9}{'epok disi':>11}{'VAR+SAHIPSIZ':>14}"
      f"{'bunun bayrakli':>16}{'BAYRAKSIZ':>11}")
kalanlar = {}
for g in GUNLER:
    s = ed = vs = vsk = 0
    kalan = []
    for y in Y:
        if not O.epok_ici(y, g):
            ed += 1
            continue
        if O.sahipli(y, g):
            s += 1
            continue
        vs += 1
        if y.get("kasitli_bosluk"):
            vsk += 1
        else:
            kalan.append(y["ad"])
    kalanlar[g] = kalan
    print(f"{g:<14}{s:>9}{ed:>11}{vs:>14}{vsk:>16}{len(kalan):>11}")

print()
print("=" * 82)
print("② BAYRAKSIZ kume — 'VAR + SAHIPSIZ + kasitli_bosluk YOK'")
print("=" * 82)
print("🔴 11 Agustos 2026 olcumu: 55 kaydin 55'i de col/issiz dolgu noktasiydi.")
print("   Yani fiilen kasitli ama BAYRAKSIZ. Bugun zarar vermiyorlar (hicbiri")
print("   delik degil) ama yarin kusatilabilirler — o zaman SESSIZCE boyanirlar.")
print("   `delikleri_doldur` muafiyeti onlari KURTARMAZ: bayrak yok.")
print()
birlesim = {}
for g, ks in kalanlar.items():
    for ad in ks:
        birlesim.setdefault(ad, []).append(g[:4])
ix = {y["ad"]: y for y in Y}
print(f"toplam farkli yerlesim: {len(birlesim)}")
for ad in sorted(birlesim, key=lambda a: (-len(birlesim[a]), a)):
    y = ix[ad]
    print(f"  {ad:<38} {len(birlesim[ad])}/{len(GUNLER)} kesit  "
          f"{y['lat']:7.2f}K {y['lon']:8.2f}D  k={y.get('k')}  "
          f"s={len(y.get('s') or [])} d={len(y.get('d') or [])} "
          f"v={len(y.get('v') or [])}")

print()
print("=" * 82)
print("③ `kasitli_bosluk` alaninin gercek hali")
print("=" * 82)
kb = [y for y in Y if y.get("kasitli_bosluk")]
print(f"bayrak tasiyan nokta: {len(kb)}")
deger = {}
for y in kb:
    deger[repr(y.get("kasitli_bosluk"))] = deger.get(repr(y.get("kasitli_bosluk")), 0) + 1
for k, v in sorted(deger.items(), key=lambda x: -x[1]):
    print(f"   deger {k:<12} {v}")
print(f"   `neden:` alani olan: {sum(1 for y in kb if y.get('neden'))} / {len(kb)}")
print()
print("⚠️ CLAUDE.md §11: bayragin CINSI (`devletsiz` / `veri-yok`) cogunlukla")
print("   serbest metin `neden:` alanina gomulu — makine SORAMIYOR. Ve")
print("   `denetle.py` `kasitli_bosluk` alanini HIC OKUMUYOR. Bayragi yazmak")
print("   ile makinenin sorabilmesi IKI AYRI IS.")

print()
print("=" * 82)
print("④ `enklav:` alani — BASKA BIR IS, karistirma")
print("=" * 82)
enk = [y for y in Y if any(p.get("enklav") for p in (y.get("s") or []))]
print(f"`enklav:` tasiyan nokta: {len(enk)}  (yetim yuz muafiyeti, uret_petek.py:874)")
print("   " + ", ".join(sorted(x["ad"] for x in enk)))
print()
print("📌 `enklav:` = presidio muafiyeti (hinterlandi YOKTUR, hukuki durum).")
print("   `kasitli_bosluk` = kasten bos birakilan alan (col, bozkir).")
print("   Ikisi AYRI alan, AYRI mekanizma, AYRI asama. Adlari benziyor.")
