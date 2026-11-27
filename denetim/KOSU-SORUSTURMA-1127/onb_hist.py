# -*- coding: utf-8 -*-
"""Son kesitlerde kesit başına devlet ıskası dağılımı (yalnız dizin, salt okuma)."""
import sqlite3, sys, bisect, collections
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
b = sqlite3.connect("file:" + sys.argv[1].replace("\\", "/") + "?mode=ro", uri=True, timeout=30)
ks = sorted(r[0] for r in b.execute("SELECT rowid FROM kayit WHERE katman='dolgu2_kesit'"))
dv = sorted(r[0] for r in b.execute("SELECT rowid FROM kayit WHERE katman='dolgu2_devlet'"))
tl = sorted(r[0] for r in b.execute("SELECT rowid FROM kayit WHERE katman='dolgu2_talep'"))
dn, tn, onc = [], [], 0
for r in ks:
    dn.append(bisect.bisect_left(dv, r) - bisect.bisect_left(dv, onc))
    tn.append(bisect.bisect_left(tl, r) - bisect.bisect_left(tl, onc))
    onc = r
for bas, son in ((0, 500), (1000, 1500), (2000, 2505)):
    h = collections.Counter(min(x // 20, 16) for x in dn[bas:son])
    print("kesit %d-%d · devlet ıskası 20'lik kovalar:" % (bas, son))
    print("   " + "  ".join("%d-%d:%d" % (k * 20, k * 20 + 19, h[k]) for k in sorted(h)))
print("son 60 kesit (devlet ıskası/talep ıskası):")
print("   " + " ".join("%d/%d" % (d, t) for d, t in zip(dn[-60:], tn[-60:])))
# talep ıskası 1 olan kesitlerde devlet ıskası (tek gövde değişti → kaç devlet yeniden hesaplandı)
for bas, son in ((0, 500), (1000, 1500), (2000, 2505)):
    x = sorted(d for d, t in zip(dn[bas:son], tn[bas:son]) if t == 1)
    if x:
        print("kesit %d-%d · TEK gövde değişen %d kesitte devlet ıskası: medyan %d · p10 %d · p90 %d · en çok %d"
              % (bas, son, len(x), x[len(x) // 2], x[len(x) // 10], x[9 * len(x) // 10], x[-1]))
