# -*- coding: utf-8 -*-
"""YUK-BOLME-0925 — `geo_dilimle.py --sina` KAPISININ kendi sinavi (C13: iki yonde).
Dilimli bir KOPYA uzerinde (varsayilan C:/atlas-yuk-bolme) sirayla:
  T0 temiz cikti            -> kapi 0 dönmeli
  T1 _web DONEMLER'de 1 tarih degisti (catal)      -> 1 (S3)
  T2 bir dilimde 1 koordinat degisti, boy ayni     -> 1 (S2)
  T3 bir dilim dosyasi silindi                     -> 1 (S4)
Her bozma sonrasi dosya geri yazilir; en sonda T0 yeniden kosar.
Kullanim: py denetim/ARAC-YUK-KAPI-SINAV-0925.py [kok]"""
import os, re, shutil, subprocess, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = sys.argv[1] if len(sys.argv) > 1 else "C:/atlas-yuk-bolme"
ARAC = os.path.join(KOK, "arac", "geo_dilimle.py")


def kapi():
    r = subprocess.run([sys.executable, ARAC, "--sina", "--kok", KOK], capture_output=True, text=True, encoding="utf-8")
    satir = [s for s in r.stdout.splitlines() if s.startswith("❌") or s.startswith("SONUC")]
    return r.returncode, satir


def sina(ad, beklenen, bozan=None, geri=None):
    if bozan: bozan()
    try:
        kod, satir = kapi()
    finally:
        if geri: geri()
    ok = (kod == beklenen)
    print("%s %-44s cikis %d (beklenen %d)" % ("✓" if ok else "✗ KAPI YANILDI", ad, kod, beklenen))
    for s in satir: print("      " + s)
    return ok


web = os.path.join(KOK, "data", "donemler_web.js")
g05 = os.path.join(KOK, "data", "geo", "g05.json")
g24 = os.path.join(KOK, "data", "geo", "g24.json")
yedek = {}


def sakla(y):
    yedek[y] = open(y, "rb").read()


def geri_yaz(y):
    return lambda: open(y, "wb").write(yedek[y])


def boz_web():
    sakla(web)
    m = open(web, "rb").read().decode("utf-8")
    i = m.index('window.DONEMLER = [{"f":"1281-01-01","t":"')
    j = i + len('window.DONEMLER = [{"f":"1281-01-01","t":"')
    yil = m[j:j + 4]
    m = m[:j] + str(int(yil) + 1) + m[j + 4:]
    open(web, "wb").write(m.encode("utf-8"))


def boz_g05():
    sakla(g05)
    m = open(g05, "rb").read().decode("utf-8")
    k = m.index('"r":[[[') + len('"r":[[[')          # ilk halkanin ilk koordinatinin ilk hanesi
    rakam = [p for p in range(k, k + 12) if m[p].isdigit()]
    p = rakam[-1]
    m = m[:p] + ("1" if m[p] != "1" else "2") + m[p + 1:]
    open(g05, "wb").write(m.encode("utf-8"))


def boz_g24():
    sakla(g24)
    os.remove(g24)


sonuc = [
    sina("T0 temiz", 0),
    sina("T1 catal: _web DONEMLER tarihi +1 yil", 1, boz_web, geri_yaz(web)),
    sina("T2 dilim halkasi: 1 rakam, bayt ayni", 1, boz_g05, geri_yaz(g05)),
    sina("T3 dilim dosyasi silindi", 1, boz_g24, geri_yaz(g24)),
    sina("T0' geri yazildiktan sonra temiz", 0),
]
print("KAPI SINAVI: %d/%d" % (sum(sonuc), len(sonuc)))
sys.exit(0 if all(sonuc) else 1)
