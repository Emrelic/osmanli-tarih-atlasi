# -*- coding: utf-8 -*-
"""MOTOR-LEGO-0925 — önbellek veritabanlarında katman başına satır sayısı (SALT OKUNUR).
Kullanım: py denetim/ARAC-LEGO-0925-say.py [sqlite_yolu ...]"""
import sqlite3
import sys
import time

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
yollar = sys.argv[1:] or [r"C:\atlas\_motor_onbellek\motor_onbellek.sqlite",
                          r"C:\atlas-onbellek\motor_onbellek.sqlite"]
for y in yollar:
    b = sqlite3.connect(f"file:{y}?mode=ro", uri=True, timeout=30)
    print(f"== {y}")
    for k, n, z0, z1 in b.execute(
            "SELECT katman, COUNT(*), MIN(zaman), MAX(zaman) FROM kayit GROUP BY katman ORDER BY 2 DESC"):
        print(f"  {k:<12} {n:>7}  ilk {time.strftime('%m-%d %H:%M', time.localtime(z0))}"
              f"  son {time.strftime('%m-%d %H:%M', time.localtime(z1))}")
    b.close()
