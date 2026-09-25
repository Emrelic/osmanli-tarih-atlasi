# -*- coding: utf-8 -*-
"""MOTOR-LEGO-0925 — önbellek veritabanlarında katman başına satır sayısı (SALT OKUNUR).
Kullanım: py denetim/ARAC-LEGO-sayim.py [yol ...]"""
import sqlite3, sys, os, time
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
yollar = sys.argv[1:] or [r"C:\atlas-onbellek\motor_onbellek.sqlite",
                          r"C:\atlas\_motor_onbellek\motor_onbellek.sqlite"]
for y in yollar:
    if not os.path.exists(y):
        print(y, "YOK"); continue
    b = sqlite3.connect(f"file:{y}?mode=ro", uri=True, timeout=60)
    print(f"== {y} · {os.path.getsize(y)/1024**2:.1f} MB · wal "
          f"{os.path.getsize(y+'-wal')/1024**2 if os.path.exists(y+'-wal') else 0:.1f} MB")
    for k, n, zmax in b.execute("SELECT katman, COUNT(*), MAX(zaman) FROM kayit GROUP BY katman ORDER BY 2 DESC"):
        print(f"   {k:12s} {n:7,d}  son yazım {time.strftime('%Y-%m-%d %H:%M', time.localtime(zmax))}")
    b.close()
