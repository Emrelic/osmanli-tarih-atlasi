# -*- coding: utf-8 -*-
"""KUNYE YAMALARI arasi cakisma olcumu (M-2990) -- _kunye_uygula.py'nin
KENDI kunyeleri_cikar() ve oku() fonksiyonlarini kullanir, kendi
ayristiricisini YAZMAZ (§11, 7. kez ayni ders)."""
import sys, os, glob, json, io, collections
sys.path.insert(0, "arac")
import _kunye_uygula as K

KOK = os.getcwd()
desen = os.path.join(KOK, "denetim", "YAMA-KUNYE-*0905*.json")
yamalar = sorted(glob.glob(desen))

print("BULUNAN DOSYA SAYISI:", len(yamalar))
istek = []
for y in yamalar:
    try:
        d = json.load(io.open(y, encoding="utf-8"))
    except Exception as e:
        print("  🔴 YUKLENEMEDI:", os.path.basename(y), str(e)[:100])
        continue
    L = K.kunyeleri_cikar(d)
    print("  %-40s %2d kunye" % (os.path.basename(y), len(L)))
    for k in L:
        istek.append((k, os.path.basename(y)))

print()
print("TOPLAM ISTEK:", len(istek))

# ① ayni id, kac dosyada?
gruplu = collections.defaultdict(list)
for k, dosya in istek:
    gruplu[k.get("id", "?")].append((k, dosya))

tek, mekanik, karar_gerek = [], [], []
for kid, liste in gruplu.items():
    if len(liste) == 1:
        tek.append(kid)
        continue
    # icerik ayni mi (f,t,bolge,ozet,kaynak karsilastir)
    alanlar = ("f", "t", "bolge", "ozet", "kaynak")
    ilk = liste[0][0]
    ayni = all(all(k.get(a) == ilk.get(a) for a in alanlar) for k, _ in liste[1:])
    if ayni:
        mekanik.append((kid, [d for _, d in liste]))
    else:
        farklar = []
        for a in alanlar:
            degerler = {k.get(a) for k, _ in liste}
            if len(degerler) > 1:
                farklar.append(a)
        karar_gerek.append((kid, [d for _, d in liste], farklar))

print()
print("① TEK DOSYADA:", len(tek))
print("② IKI+ DOSYA, DEGERLER AYNI (mekanik):", len(mekanik))
for kid, dosyalar in mekanik:
    print("   ", kid, "->", dosyalar)
print("③ IKI+ DOSYA, DEGERLER FARKLI (karar gerek):", len(karar_gerek))
for kid, dosyalar, farklar in karar_gerek:
    print("   ", kid, "->", dosyalar, "farkli alanlar:", farklar)

# ③ devletler.js'teki 591 kunyeyle carpistir
onceki = K.oku(K.DEVLETLER)
mevcut = set(onceki["ids"]) if onceki else set()
bolgeler = set(onceki["bolgeler"]) if onceki else set()
print()
print("DEVLETLER.JS KUNYE SAYISI:", onceki["adet"] if onceki else "OKUNAMADI")

benzersiz_id = list(gruplu.keys())
zaten_var = [kid for kid in benzersiz_id if kid in mevcut]
print()
print("④ ONERILEN id'LERDEN devletler.js'TE ZATEN VAR OLANLAR (GUNCELLEME sorunu):", len(zaten_var))
for kid in zaten_var:
    print("   ", kid)

bolge_disi = []
for kid, liste in gruplu.items():
    for k, dosya in liste:
        if k.get("bolge") and k["bolge"] not in bolgeler:
            bolge_disi.append((kid, dosya, k.get("bolge")))
print()
print("⑤ BOLGE LISTEDE OLMAYAN oneriler:", len(bolge_disi))
for kid, dosya, b in bolge_disi:
    print("   ", kid, dosya, "->", b)
