# -*- coding: utf-8 -*-
"""Önbellek veritabanını SALT OKUMA açar; yalnız birincil anahtar dizininden katman başına sayar.
Blob okumaz (ağır G/Ç yok)."""
import sqlite3, sys, time
yol = sys.argv[1]
t = time.time()
b = sqlite3.connect("file:" + yol.replace("\\", "/") + "?mode=ro", uri=True, timeout=30)
print("sayfa boyu", b.execute("PRAGMA page_size").fetchone(), "sayfa", b.execute("PRAGMA page_count").fetchone())
print(b.execute("EXPLAIN QUERY PLAN SELECT katman, COUNT(*) FROM kayit GROUP BY katman").fetchall())
top = 0
for k, n in b.execute("SELECT katman, COUNT(*) FROM kayit GROUP BY katman ORDER BY 2 DESC"):
    print("%-22s %9d" % (k, n))
    top += n
print("TOPLAM", top, "· %.1f sn" % (time.time() - t))
try:
    print(b.execute("SELECT * FROM meta").fetchall())
except Exception as e:
    print("meta yok:", e)
