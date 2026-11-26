# -*- coding: utf-8 -*-
"""9 gercek olu slug icin alternatif adres denemesi (madde basina en cok 2)."""
import subprocess, time

denemeler = [
    "belgrad-antlasmasi", "belgrad",
    "bukres-antlasmasi", "bukres",
    "cildir-eyaleti", "cildir",
    "kasr-i-sirin", "murad-iv",
    "firuz-sah-tugluk", "delhi-sultanligi",
    "isfahan", "isfahan--sehir",
    "kirim-harbi", "kirim-savasi--devlet",
]

for s in denemeler:
    r = subprocess.run(
        ["curl", "-s", "-o", "/dev/null", "-w", "%{http_code}",
         "https://islamansiklopedisi.org.tr/" + s],
        capture_output=True, text=True, timeout=15)
    print(s, "->", r.stdout.strip())
    time.sleep(0.35)
