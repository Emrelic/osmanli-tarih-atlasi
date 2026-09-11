# -*- coding: utf-8 -*-
"""25 olu slugtan 'tdv-' onekli olanlarin CIPLAK halini de dener."""
import io, subprocess, time

adaylar = ["tdv-dirhem", "tdv-ebu-said-bahadir-han", "tdv-kansu-gavri",
           "tdv-kayitbay", "tdv-kibris", "tdv-kubbetus-sahre", "tdv-kudus",
           "tdv-malatya", "tdv-memlukler", "tdv-muhammed-b-kalavun",
           "tdv-ozbek-han", "tdv-tenkiz", "tdv-trablussam", "tdv-vakif"]

for a in adaylar:
    cip = a[4:]  # "tdv-" onekini at
    for s in (a, cip):
        r = subprocess.run(
            ["curl", "-s", "-o", "/dev/null", "-w", "%{http_code}",
             "https://islamansiklopedisi.org.tr/" + s],
            capture_output=True, text=True, timeout=15)
        print(s, "->", r.stdout.strip())
        time.sleep(0.3)
