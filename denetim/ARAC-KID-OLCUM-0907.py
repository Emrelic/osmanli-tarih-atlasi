# -*- coding: utf-8 -*-
"""③④ — `kid` ile `k` ayni donemlerde mi, ve `kid` degerleri GERCEK mi?

1.MURAT M-3151. HUKUM VERMIYORUM, OLCUYORUM.
🔴 ④'un sarti: "TAHMIN ETME, TARA — ortak normallestiriciyle."
"""
import contextlib
import io
import os
import sys
from collections import Counter

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
idler = {k["id"] for k in ks}
har = {k["harita"] for k in ks if k.get("harita")}
pencere = {k["id"]: (k.get("f"), k.get("t")) for k in ks}

# ── ③ k / kid kesisimi
hem = sadece_k = sadece_kid = hicbiri = 0
kid_deger = Counter()
kid_ornek = {}
kapsam_ihlal = []
for t in Y:
    for p in (t.get("v") or []):
        k = p.get("k")
        kid = p.get("kid")
        if k and kid:
            hem += 1
        elif k:
            sadece_k += 1
        elif kid:
            sadece_kid += 1
        else:
            hicbiri += 1
        if kid:
            kid_deger[kid] += 1
            kid_ornek.setdefault(kid, (t.get("ad"), k))
            # ④b kunye PENCERESI donemi kapsiyor mu (alanin KENDI sozlesmesi)
            f, tt = pencere.get(kid, (None, None))
            if f and tt and p.get("f") and p.get("t"):
                if not (f <= p["f"] and p["t"] <= tt):
                    kapsam_ihlal.append((t.get("ad"), kid, p["f"], p["t"], f, tt))

toplam = hem + sadece_k + sadece_kid + hicbiri
print("=" * 74)
print("③ `v:` DONEMLERINDE `k` ve `kid` — %d donem" % toplam)
print("=" * 74)
print("   HER IKISI de var : %4d" % hem)
print("   yalniz `k`       : %4d" % sadece_k)
print("   yalniz `kid`     : %4d" % sadece_kid)
print("   HICBIRI          : %4d" % hicbiri)
print()
print("   ⇒ %s" % ("BIRBIRININ YERINE GECMIYORLAR — birlikte duruyorlar"
                   if hem > max(sadece_k, sadece_kid)
                   else "birbirinin yerine geciyor olabilir"))

print()
print("=" * 74)
print("④ `kid` DEGERLERI devletler.js'te GERCEKTEN VAR MI (TARANDI)")
print("=" * 74)
print("   benzersiz `kid` degeri: %d" % len(kid_deger))
var = [k for k in kid_deger if k in idler]
harita_ile = [k for k in kid_deger if k not in idler and k in har]
yok = [k for k in kid_deger if k not in idler and k not in har]
print("   🟢 kunye `id` olarak VAR      : %3d kimlik · %4d donem"
      % (len(var), sum(kid_deger[k] for k in var)))
print("   🟡 yalniz `harita:` anahtari  : %3d kimlik · %4d donem"
      % (len(harita_ile), sum(kid_deger[k] for k in harita_ile)))
print("   🔴 HICBIR YERDE YOK           : %3d kimlik · %4d donem"
      % (len(yok), sum(kid_deger[k] for k in yok)))
if harita_ile:
    print("      harita-only: " + ", ".join(sorted(harita_ile))[:200])
if yok:
    print("      YOK        : " + ", ".join(sorted(yok))[:300])
print()
print("   en cok kullanilan 10 `kid`:")
for k, n in kid_deger.most_common(10):
    im = "🟢" if k in idler else ("🟡" if k in har else "🔴")
    ad, gk = kid_ornek[k]
    print("      %s %-26s %4d  (or. %s · k=%s)" % (im, k, n, str(ad)[:18],
                                                   str(gk)[:26]))

print()
print("=" * 74)
print("④b ALANIN KENDI SOZLESMESI — 'kunye penceresi donemi KAPSAMALI'")
print("=" * 74)
print("   ihlal eden donem: %d" % len(kapsam_ihlal))
for ad, kid, f, t, kf, kt in kapsam_ihlal[:10]:
    print("      %-22s kid=%-20s donem %s..%s · kunye %s..%s"
          % (str(ad)[:22], kid, f, t, kf, kt))
if len(kapsam_ihlal) > 10:
    print("      ... +%d" % (len(kapsam_ihlal) - 10))
print()
print("🔴 NOT: bu sozlesme `girdi.py:932`de YAZILI ama hicbir alet onu")
print("   SINAMIYOR — yukaridaki sayiyi BU BETIK uretti, denetle.py degil.")
