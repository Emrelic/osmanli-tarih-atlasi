# -*- coding: utf-8 -*-
"""PIOMBINO KALEMİ — renk + 2s kapısı ölçümü.

Aleti TAKLİT ETMEZ, çağırır: renk için renkler.BOYALAR, madde için
denetle.olaylari_yukle() (ÇEKİRDEK evreni — kuyruk DEĞİL, YONTEM §⑤).
"""
import sys, os, io
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, os.path.join(os.getcwd(), "arac"))

import renkler as R

print("=== RENK — BOYALAR anahtarı (harita: DOLAYLAMASI dahil) ===")
import girdi
KUN = {k["id"]: k for k in girdi.oku_devletler() if k.get("id")}
for kid in ("piombino", "toskana", "italya", "piza", "sardinya"):
    k = KUN.get(kid) or {}
    anahtar = k.get("harita") or kid          # §11: renk `harita:`ya bakar
    hx = R.BOYALAR.get(anahtar)
    print("  %-10s anahtar=%-10s %s   (künye %s -> %s)"
          % (kid, anahtar, hx or "RENK YOK", k.get("f", "-"), k.get("t", "-")))

print()
print("=== 2s KAPISI — ÇEKİRDEK evreninde en yakın madde ===")
import denetle
O = denetle.olaylari_yukle()
print("  çekirdek madde: %d" % len(O))


def gun(s):
    s = s if len(s) > 7 else s + "-01"
    from datetime import date
    return date(int(s[:4]), int(s[5:7]), int(s[8:10])).toordinal()


for hedef in ("1815-06-09", "1815-01-01", "1860-03-22", "1861-03-17"):
    gh = gun(hedef)
    yakin = sorted(((abs(gun(o["t"]) - gh), o["t"], o.get("b", "")) for o in O
                    if o.get("t")))[:2]
    print()
    print("  " + hedef + ":")
    for d, t, b in yakin:
        print("     %4d gün  %s  %s" % (d, t, str(b)[:74]))
