# -*- coding: utf-8 -*-
"""Kisa/genel-terim gorunumlu 12 slug icin <title> etiketini ceker
(baslik-carpismasi riski icin ornek denetim)."""
import io, re, subprocess, time

adaylar = ["berid", "hisbe", "ikta", "hidiv", "taun", "pamuk", "surre",
           "dirhem", "esrefi", "karimi", "ulucami", "func"]

for s in adaylar:
    r = subprocess.run(
        ["curl", "-s", "-L", "https://islamansiklopedisi.org.tr/" + s],
        capture_output=True, text=True, timeout=20, encoding="utf-8", errors="replace")
    m = re.search(r"<title>(.*?)</title>", r.stdout, re.S)
    baslik = m.group(1).strip() if m else "(baslik bulunamadi)"
    print(s, "->", baslik[:80])
    time.sleep(0.4)
