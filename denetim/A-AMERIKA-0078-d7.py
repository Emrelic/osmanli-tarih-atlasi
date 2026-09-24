# -*- coding: utf-8 -*-
"""A-AMERIKA-0078 — Değişmez 7 artışının sınıflaması (SALT OKUR).
denetle.py --ayrinti çıktısının ÖNCE/SONRA Değişmez 7 bloklarını karşılaştırır; SONRA'da yeni beliren ada satırlarını
① ada kümesi bu partinin noktasını içeriyor mu ② dönem başlangıcı 1900'den sonra mı diye sayar.
Kullanım: py denetim/A-AMERIKA-0078-d7.py <once_ayrinti.txt> <sonra_ayrinti.txt>
"""
import sys, io, re, json, os
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def blok(yol):
    t = io.open(yol, encoding="utf-8").read()
    t = t[t.index("Değişmez 7"):]
    t = t[:t.index("SONUÇ")] if "SONUÇ" in t else t
    return [l.rstrip() for l in t.splitlines() if re.match(r"\s+\d{4}-\d{2}-\d{2}\s", l)]
O, S = blok(sys.argv[1]), blok(sys.argv[2])
kalan = list(O); yeni = []
for l in S:
    if l in kalan: kalan.remove(l)
    else: yeni.append(l)
adlar = [a["ad"] for a in json.load(io.open(os.path.join(KOK, "denetim/A-AMERIKA-0078-adaylar.json"), encoding="utf-8"))]
kisa = [a[:20] for a in adlar]
print(f"ÖNCE {len(O)} satır · SONRA {len(S)} · yeni {len(yeni)} · kaybolan {len(kalan)}")
for l in yeni:
    bizim = any(k in l for k in kisa)
    yil = int(l.split()[0][:4])
    print(("BİZİM " if bizim else "ESKİ  ") + ("≥1900 " if yil >= 1900 else "      ") + l.strip())
for l in kalan: print("KAYBOLAN " + l.strip())
