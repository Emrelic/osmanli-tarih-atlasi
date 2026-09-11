# -*- coding: utf-8 -*-
"""KUYRUK KAYNAK — 234 slug adayi icin HTTP kod olcumu (nazik, araliklı).
Cikti: denetim/OLCUM-KUYRUK-KAYNAK-HTTP-0911.json
"""
import io, json, subprocess, sys, time

slugs = [l.strip() for l in io.open("denetim/_kuyruk_slug_evreni.txt", encoding="utf-8")
         if l.strip()]

sonuc = {}
for i, s in enumerate(slugs):
    url = "https://islamansiklopedisi.org.tr/" + s
    try:
        r = subprocess.run(
            ["curl", "-s", "-o", "/dev/null", "-w", "%{http_code}", url],
            capture_output=True, text=True, timeout=15)
        kod = r.stdout.strip()
    except Exception as e:
        kod = "HATA:" + str(e)
    sonuc[s] = kod
    if i % 20 == 0:
        print(i, "/", len(slugs), "...", flush=True)
    time.sleep(0.4)

io.open("denetim/OLCUM-KUYRUK-KAYNAK-HTTP-0911.json", "w", encoding="utf-8").write(
    json.dumps(sonuc, ensure_ascii=False, indent=1))

canli = [s for s, k in sonuc.items() if k == "200"]
olu = [s for s, k in sonuc.items() if k == "302"]
diger = [s for s, k in sonuc.items() if k not in ("200", "302")]
print("\nCANLI (200):", len(canli))
print("OLU (302):", len(olu))
print("DIGER:", len(diger), diger[:10])
