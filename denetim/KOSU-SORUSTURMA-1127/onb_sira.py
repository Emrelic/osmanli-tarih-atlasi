# -*- coding: utf-8 -*-
"""Önbellek: SALT OKUMA, düşük öncelik. (1) dolgu2_* kayıtlarının rowid sırası (yalnız dizin) ⇒ kesit
başına kaç devlet/talep ISKASI olduğu. (2) örnek dolgu2_kesit kayıtlarının yazım zamanı ⇒ kesit hızı.
(3) katman başına blob boyu (yalnız kayıt başlığı)."""
import sqlite3, sys, time, ctypes, bisect, statistics as st
try:
    ctypes.windll.kernel32.SetPriorityClass(ctypes.windll.kernel32.GetCurrentProcess(), 0x40)  # IDLE
except Exception:
    pass
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
yol = sys.argv[1]
b = sqlite3.connect("file:" + yol.replace("\\", "/") + "?mode=ro", uri=True, timeout=30)
t0 = time.time()
sira = {}
for k in ("dolgu2_kesit", "dolgu2_devlet", "dolgu2_talep"):
    sira[k] = sorted(r[0] for r in b.execute("SELECT rowid FROM kayit WHERE katman=?", (k,)))
    print(k, len(sira[k]), "rowid", sira[k][0], "…", sira[k][-1])
ks, dv, tl = sira["dolgu2_kesit"], sira["dolgu2_devlet"], sira["dolgu2_talep"]
# kesit i'nin ıskaları = (önceki kesit rowid, bu kesit rowid) aralığındaki devlet/talep yazımları
dn, tn = [], []
onc = 0
for r in ks:
    dn.append(bisect.bisect_left(dv, r) - bisect.bisect_left(dv, onc))
    tn.append(bisect.bisect_left(tl, r) - bisect.bisect_left(tl, onc))
    onc = r
print("son kesitten SONRA yazılan (yarım kesit): devlet", len(dv) - bisect.bisect_left(dv, onc),
      "talep", len(tl) - bisect.bisect_left(tl, onc))


def ozet(ad, x):
    s = sorted(x)
    n = len(s)
    print("%s: n=%d toplam=%d ort=%.1f medyan=%d p10=%d p25=%d p75=%d p90=%d p99=%d en çok=%d · sıfır olan kesit=%d"
          % (ad, n, sum(s), sum(s) / n, s[n // 2], s[n // 10], s[n // 4], s[3 * n // 4], s[9 * n // 10],
             s[99 * n // 100], s[-1], sum(1 for v in s if v == 0)))


ozet("kesit başına DEVLET ıskası", dn)
ozet("kesit başına TALEP (kapanış) ıskası", tn)
# 250'lik bloklar hâlinde seyir
print("blok(250 kesit) → devlet ıskası ort / talep ıskası ort")
for i in range(0, len(ks), 250):
    d, t = dn[i:i + 250], tn[i:i + 250]
    print("  kesit %4d-%4d: devlet %.1f  talep %.2f" % (i, i + len(d) - 1, sum(d) / len(d), sum(t) / len(t)))
print("dizin kısmı %.1f sn" % (time.time() - t0))

# (2) örnek kesit yazım zamanları (blob zinciri okunur — örnek küçük tutuldu)
t1 = time.time()
N = int(sys.argv[2]) if len(sys.argv) > 2 else 60
ornek = [ks[int(i * (len(ks) - 1) / (N - 1))] for i in range(N)]
zam = []
for r in ornek:
    z, L = b.execute("SELECT zaman, length(deger) FROM kayit WHERE rowid=?", (r,)).fetchone()
    zam.append((bisect.bisect_left(ks, r), z, L))
print("örnek kesit: sıra · yazım zamanı · blob MB · (önceki örnekten beri sn/kesit)")
onc = None
for i, z, L in zam:
    ek = ""
    if onc is not None and i > onc[0]:
        ek = "%.0f sn/kesit" % ((z - onc[1]) / (i - onc[0]))
    print("  %4d  %s  %.2f MB  %s" % (i, time.strftime("%d.%m %H:%M", time.localtime(z)), L / 2**20, ek))
    onc = (i, z, L)
print("örnek kısmı %.1f sn" % (time.time() - t1))
