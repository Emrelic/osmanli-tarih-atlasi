# -*- coding: utf-8 -*-
"""KITA 13 — CALDIRAN GUNU (1514-09-06) TOPLU ATAMA MI? (SALT OKUR)

Paketin BES maddesi ayni cografya ve ayni donemi anlatiyor:
   H-0011 "caldiran savasi maddesinde neden boyle UC TANE ENKLAV"
   H-0012 "tebrizden cekildikten SONRA da harita boyle enklavli"
   H-0013 "dogu anadolunun katilisi boyle KOPUK ve ENKLAVLI"
   H-0014 "yavuz'un Istanbul'dan hareketinde dogu topraklari boyle"
   H-0018 "dogubeyazit caldirandan sonra boyle osmanli kirmizisi kaldi"

HIPOTEZ (K2): Caldiran gunu (1514-09-06) bir TOPLU SINIR olarak
kullanilmis; o gun OSMANLI olan noktalarin bir kismi komsusuz kalmis ve
ENKLAV dogurmus. (D157: bir kategori sismeyi aciklamaz, TOPLU ATAMA
aciklar.)

SINAV: `d:` baslangici TAM 1514-09-06 olan noktalari bul; her biri icin
o gunden SONRA en yakin 6 komsunun sahibini olc. Komsularin hicbiri
OSMANLI degilse -> TAM ENKLAV.

⚠️ Bu alet bir HUKUM vermez: bir enklav TARIHEN DOGRU olabilir. Ciktisi
   bir ADAY LISTESIDIR ve her aday kaynaga sorulmalidir.
"""
import os, sys, io, collections

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

Y = girdi.yukle(sessiz=True)
GUN = sys.argv[1] if len(sys.argv) > 1 else "1514-09-06"
OLC = sys.argv[2] if len(sys.argv) > 2 else "1514-09-30"
N = 6


def sahip(y, g):
    for p in (y.get("d") or []):
        if p.get("f") <= g < p.get("t"):
            return "OSMANLI"
    for p in (y.get("v") or []):
        if p.get("f") <= g < p.get("t"):
            return "tâbi"
    for p in (y.get("s") or []):
        if p.get("f") <= g < p.get("t"):
            return p.get("d")
    return "SAHİPSİZ"


# --- o gun `d:` BASLAYANLAR
baslayan = [y for y in Y if any((p.get("f") == GUN) for p in (y.get("d") or []))]
print("# taban %d nokta · `d:` baslangici TAM %s olan: %d"
      % (len(Y), GUN, len(baslayan)))

# --- ayni gun BASKA hangi gunler toplu kullanilmis (kiyas icin)
sayac = collections.Counter()
for y in Y:
    for p in (y.get("d") or []):
        if p.get("f"):
            sayac[p["f"]] += 1
print("# kiyas — `d:` baslangicinin EN COK yigildigi 8 gun:")
for g, n in sayac.most_common(8):
    im = " ←" if g == GUN else ""
    print("     %s  %4d nokta%s" % (g, n, im))
print()

tam, kismi, temiz = [], [], []
for y in baslayan:
    la, lo = y.get("lat"), y.get("lon")
    if la is None or lo is None:
        continue
    k = []
    for z in Y:
        if z is y:
            continue
        zla, zlo = z.get("lat"), z.get("lon")
        if zla is None or zlo is None:
            continue
        k.append((girdi.km(la, lo, zla, zlo), z))
    k.sort(key=lambda x: x[0])
    yakin = k[:N]
    osmanli = sum(1 for d, z in yakin if sahip(z, OLC) == "OSMANLI")
    kayit = (y.get("ad"), osmanli,
             [(round(d), z.get("ad"), sahip(z, OLC)) for d, z in yakin[:3]])
    if osmanli == 0:
        tam.append(kayit)
    elif osmanli <= 2:
        kismi.append(kayit)
    else:
        temiz.append(kayit)

print("=" * 78)
print("🔴🔴 TAM ENKLAV ADAYI (en yakın %d komşunun HİÇBİRİ OSMANLI değil): %d"
      % (N, len(tam)))
for ad, n, ornek in tam:
    print("   %-26s" % ad)
    for d, za, sz in ornek:
        print("        %4d km  %-24s %s" % (d, za, sz))
print()
print("🟡 YARIM (komşularının 1-2'si OSMANLI): %d" % len(kismi))
for ad, n, ornek in kismi:
    print("   %-26s  OSMANLI komşu: %d" % (ad, n))
print()
print("🟢 BİTİŞİK (3+ komşusu OSMANLI): %d" % len(temiz))
print("   " + ", ".join(a for a, _, _ in temiz[:20]))
