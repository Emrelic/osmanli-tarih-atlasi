# -*- coding: utf-8 -*-
"""YEDISAN CAKISMASI — rapor dogru mu, ve CAKISMA GERCEKTEN KUSUR MU?

UYGULAMA-ERKEN: "d: 1783-04-19 → 1792-01-09 indi ama s: kirim
1502-03-01 → 1792-01-09 KISALTILMAMIS. Dokuz yil cakisma."

🔴 AMA IKI OLCUM GEREKIYOR, biri otekini gecersiz kilabilir:
  ① rapor DOGRU mu (veri gercekten oyle mi)
  ② `d:` ustune binen `s:` bu projede KUSUR mu, yoksa KALIP mi?
     Culfa yamasi: "MEVCUT s: DIZISINE DOKUNULMADI, yalniz d: eklendi —
     komsularin besinde kullanilan kalip bu; s: safevi blogu kesintisiz
     kalir, Osmanli donemi d: katmaninda USTUNE BINER."
  Eger ② KALIP ise, Yedisan DOGRU ve UC KARDESI YANLIS olabilir.
"""
import collections
import sys

sys.path.insert(0, "arac")
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import girdi  # noqa: E402

Y = girdi.yukle() if hasattr(girdi, "yukle") else girdi.oku()
if isinstance(Y, tuple):
    Y = Y[0]
ix = {y["ad"]: y for y in Y}

print("=" * 70)
print("① RAPOR DOGRU MU — Yedisan ve uc kardesi")
for ad in ("Yedisan bozkırı", "Soçi (Sâşe)", "Tuapse", "Maykop (Çerkezya)"):
    y = ix.get(ad)
    if not y:
        print("  %-22s VERIDE YOK" % ad)
        continue
    print("  %s" % ad)
    for a in ("d", "s", "v"):
        for p in (y.get(a) or []):
            print("      %s %s → %s %s" % (a, p.get("f"), p.get("t"), p.get("d", "")))

print()
print("=" * 70)
print("② `d:` ile `s:` CAKISMASI PROJEDE NE KADAR YAYGIN?")
print("   (yaygin ise KALIP, nadir ise KUSUR)")


def cakisir(a, b):
    return a["f"] < b["t"] and b["f"] < a["t"]


cakisan = []
for y in Y:
    ds = y.get("d") or []
    ss = y.get("s") or []
    for pd in ds:
        for ps in ss:
            if pd.get("f") and pd.get("t") and ps.get("f") and ps.get("t") \
                    and cakisir(pd, ps):
                cakisan.append((y["ad"], pd["f"], pd["t"], ps["f"], ps["t"],
                                ps.get("d", "?")))
                break

print("   d: ile s: cakisan KAYIT: %d / %d nokta" % (
      len({c[0] for c in cakisan}), len(Y)))
print()
ornek = collections.Counter(c[5] for c in cakisan)
print("   hangi yabanci kimlikle cakisiyor (ilk 10):")
for k, v in ornek.most_common(10):
    print("      %-24s %3d" % (k, v))
print()
print("   ORNEK 12 KAYIT:")
for c in cakisan[:12]:
    print("      %-26s d %s→%s   s %s→%s %s" % (c[0][:26], c[1], c[2], c[3], c[4], c[5]))
