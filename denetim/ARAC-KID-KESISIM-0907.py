# -*- coding: utf-8 -*-
"""③ KESISIM — benim 16 sozlesme ihlalim ile DORT-KALEM'in 18 kapsayani
AYNI KAYITLAR MI?  1.MURAT M-3160: "ikiniz kesin."

🔴 ILK KOSUMDA EVRENIM GENISTI: B'yi BUTUN v: donemlerine acmistim (165
   yerlesim — Misir, Tunus, Sudan dahil). DORT-KALEM'in kumesi EFLAK/BOGDAN.
   Kendi dersim, kendi olcumumde. Daraltildi ve ikisi de basiliyor.
"""
import contextlib
import io
import os
import sys

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass
KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)

with contextlib.redirect_stdout(io.StringIO()):
    import girdi
    Y = girdi.yukle()
    D = girdi.oku_devletler()

ks = [k for k in (D.values() if isinstance(D, dict) else D)
      if isinstance(k, dict) and k.get("id")]
pencere = {k["id"]: (k.get("f"), k.get("t")) for k in ks}

GUN = "1859-01-24"
ROM = ("eflak", "bogdan", "romanya")


def romen(p):
    """Bu donem EFLAK/BOGDAN ailesine mi ait? kid VE k metnine bakar."""
    if p.get("kid") in ROM:
        return True
    k = (p.get("k") or "").lower()
    return ("eflak" in k or "boğdan" in k or "bogdan" in k
            or "romanya" in k)


A, B_dar, B_genis, C = [], [], [], []
for t in Y:
    ad = t.get("ad")
    for p in (t.get("v") or []):
        kid, f, tt = p.get("kid"), p.get("f"), p.get("t")
        if kid and f and tt:
            kf, kt = pencere.get(kid, (None, None))
            if kf and kt and not (kf <= f and tt <= kt):
                A.append((ad, kid, f, tt, kf, kt))
        if f and tt and f < GUN < tt:
            B_genis.append(ad)
            if romen(p):
                B_dar.append((ad, kid, p.get("k"), f, tt))
    for kat in ("s", "d", "v"):
        for p in (t.get(kat) or []):
            if p.get("f") == GUN or p.get("t") == GUN:
                C.append((ad, kat, p.get("d") or p.get("kid")))

adA = {a[0] for a in A}
adAr = {a[0] for a in A if a[1] in ROM}      # A'nin ROMEN yarisi
adBd = {b[0] for b in B_dar}
adC = {c[0] for c in C}

print("=" * 74)
print("A — BENIM 16: kid var, kunye penceresi donemi KAPSAMIYOR")
print("=" * 74)
kd = {}
for a in A:
    kd[a[1]] = kd.get(a[1], 0) + 1
print("   donem %d · yerlesim %d" % (len(A), len(adA)))
print("   kid: " + " · ".join("%s %d" % kv for kv in sorted(kd.items())))
print("   ROMEN olan %d · ROMEN OLMAYAN %d  -> %s"
      % (len(adAr), len(adA - adAr), ", ".join(sorted(adA - adAr))))

print()
print("=" * 74)
print("B — %s'u KAPSAYIP KIRILMAYAN" % GUN)
print("=" * 74)
print("   GENIS evren (butun v:)  : %d yerlesim   <- benim ILK kosum, FAZLA")
print("   DAR evren (eflak/bogdan): %d yerlesim   <- DORT-KALEM'in kumesi"
      % len(adBd))
for b in sorted(B_dar):
    print("      %-30s kid=%-10s k=%s" % (b[0], b[1], (b[2] or "")[:34]))

print()
print("=" * 74)
print("C — %s'te KIRILAN" % GUN)
print("=" * 74)
print("   yerlesim %d : %s" % (len(adC), ", ".join(sorted(adC))))

print()
print("=" * 74)
print("KESISIM — A(romen) ile B(dar)")
print("=" * 74)
print("   A(romen) ∩ B(dar) : %3d" % len(adAr & adBd))
print("   yalniz A(romen)   : %3d  %s"
      % (len(adAr - adBd), ", ".join(sorted(adAr - adBd)) or "-"))
print("   yalniz B(dar)     : %3d  %s"
      % (len(adBd - adAr), ", ".join(sorted(adBd - adAr)) or "-"))
print("   A ∩ C             : %3d  %s"
      % (len(adA & adC), ", ".join(sorted(adA & adC)) or "-"))
print()
print("   ⇒ %s" % ("AYNI KAYITLAR — tek kusur, iki alet, iki ad"
                   if adAr == adBd else
                   "TAM ORTUSMUYOR — fark yukarida"))
print("   ⇒ A ∩ C = %d : %s" % (len(adA & adC),
                                "kirilanlarin HICBIRI benim listemde YOK"
                                if not (adA & adC) else "ortusme VAR"))
