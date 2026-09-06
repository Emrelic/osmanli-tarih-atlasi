# -*- coding: utf-8 -*-
"""② EKSİK KÜNYE — TDV gövdelerinden `f:`/`t:` çıkarılır.

🔴 Gövde KESİLMEZ · yıl araması SINIR KORUMALI · boilerplate AYRI kova.
🔴 Her polity için ARANAN KELİME ayrı — genel bir tarama, cümlenin
   neyi tarihlediğini söylemez (`§4⑧`).
🔴 VERİ YAZMAZ.
"""
import io
import os
import re
import subprocess
import sys

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
os.chdir(KOK)
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

HEDEF = [
    ("Mekke Şerifliği", ["mekke", "haremeyn"],
     r"(şerif|şerifli|emirli|Hâşim|1517|1916|Hicaz)"),
    ("Orta Macar Krallığı (Tököli)", ["tokoli-imre"],
     r"(Orta Macar|kral|1682|1685|1699|Tököli)"),
    ("Ahmed Bey — Konstantin beyliği", ["kostantine"],
     r"(Ahmed Bey|bey|1826|1830|1837|Fransız)"),
    ("Kumuk şamhallığı", ["kumuklar"],
     r"(şamhal|şevhal|Tarki|Tarku|hâkimiyet|Rus)"),
    ("Kaheti krallığı", ["gurcistan"],
     r"(Kahet|Kaheti|Kartli|krallı|1762|1801)"),
    ("Arvanid sancağı", ["arnavutluk"],
     r"(Arvanid|sancak|1415|1431|1443|İskender)"),
    ("Sabah emirliği (Kuveyt)", ["kuveyt"],
     r"(Sabah|1756|1899|1913|1914|himaye|kaza)"),
    ("Sânî emirliği (Katar)", ["katar", "al-i-sani"],
     r"(Sânî|Sani|1868|1871|1913|1916|kaza|himaye)"),
    ("Crnojeviç Zetası", ["karadag"],
     r"(Crnojevi|Zeta|Ivan|1496|1499|Karadağ)"),
]


def govde(slug):
    r = subprocess.run(
        ["curl", "-sL", "--max-time", "30",
         "https://islamansiklopedisi.org.tr/%s" % slug],
        capture_output=True)
    h = r.stdout.decode("utf-8", "replace")
    h = re.sub(r"(?is)<(script|style)[^>]*>.*?</\1>", " ", h)
    t = re.sub(r"(?s)<[^>]+>", " ", h)
    t = re.sub(r"&#\d+;|&[a-z]+;", " ", t)
    return re.sub(r"\s+", " ", t).strip()


for ad, sluglar, ilgi in HEDEF:
    print("\n═══════ %s" % ad)
    rx = re.compile(ilgi, re.I)
    for s in sluglar:
        t = govde(s)
        if len(t) < 2000:
            print("   ⚫ %-12s BOİLERPLATE (%d kar.) — §4④, 'yok' SAYILMAZ"
                  % (s, len(t)))
            continue
        print("   ── %-12s %d kar." % (s, len(t)))
        n = 0
        for m in re.finditer(r"(?<!\d)(1[3-9]\d\d)(?!\d)", t):
            a, b = max(0, m.start() - 190), min(len(t), m.end() + 150)
            c = t[a:b]
            if not rx.search(c):
                continue
            n += 1
            if n > 4:
                break
            print("      %s … %s …" % (m.group(1), c[70:300].strip()))
        if not n:
            print("      ⚪ ilgili yıl BULUNAMADI (gövde okundu, kesilmedi)")
