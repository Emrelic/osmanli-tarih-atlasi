# -*- coding: utf-8 -*-
"""IZ-YOK DENETIM A — kume olcumleri (SALT OKUR).

Hukum notlarindaki SAYI iddialarini bugunku veriye karsi olcer.
"""
import re, io, sys, os

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def blok(s, degisken):
    i = s.find("window." + degisken)
    if i < 0:
        return ""
    j = s.find("window.", i + 8)
    return s[i:j] if j > 0 else s[i:]


def say(ad, degisken):
    s = open(os.path.join(KOK, "data", ad), encoding="utf-8").read()
    b = blok(s, degisken)
    if not b:
        print("%-14s ARANDI, YOK" % degisken)
        return
    kay = re.findall(r"\{[^{}]*\}", b)
    lat = sum(1 for k in kay if "lat:" in k)
    print("%-14s kayit %4d | lat tasiyan %4d" % (degisken, len(kay), lat))


# H-0044 / H-0063 — "ANTLASMALAR 41 kaydin 1'i koordinatli, savaslar 169/169"
say("savaslar.js", "SAVASLAR")
say("savaslar.js", "ANTLASMALAR")
say("savaslar.js", "SERILER")
say("savaslar.js", "SEFERLER")
