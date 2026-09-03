# -*- coding: utf-8 -*-
"""KONUM DÜZELTİCİ — `denetle.py`nin KENDİ reçetesini kaynak dosyalara işler.

🔴 NİÇİN DENETÇİNİN REÇETESİ, KENDİ HESABIM DEĞİL:
Benim `kara_sina.py`im `ne_10m_land` üzerinde TEK ADIMLI `covers()`
kullanıyordu ve "35 kayıt kıyıda, ≤7,4 km, kabul edilebilir" dedi.
`denetle.py`nin maskesi DÖRT ADIMLI ve aynı veride **54 İHLAL** buldu.
⇒ Kendi maskemle düzeltmek, aynı hatayı ikinci kez yapmak olurdu.

🔴 VE HER REÇETE UYGULANMAZ: `denetle.py` kendi önerisini yazılacağı
hassasiyette (4 ondalık) SINAR ve geçmeyeni damgalar
(*"bu öneri sınandı ve GEÇMEDİ"*). Onlar ATLANIR — `§11`: *"bir aracın
verdiği reçete, uygulanınca kendi testini geçmek ZORUNDADIR."*

PROJE KÖKÜNDEN:  py denetim/ARAC-KAMERIKA-0903-konum-duzelt.py
"""
import io
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KAYNAK = ("denetim/_konum_duzeltme.txt",)
S = r"C:\Users\emrem\AppData\Local\Temp\claude"
S = os.path.join(S, "C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-",
                 "582bd848-b253-4be4-8c65-08c188cd1948", "scratchpad")
ADAY_DOSYA = ["adaylar.json", "adaylar2.json", "adaylar3.json",
              "adaylar4.json", "adaylar5.json", "adaylar6.json",
              "adaylar_serit.json"]

RX = re.compile(r"^(.*?)\s+([\d.]+)\s*km dışarıda\s+[-\d.,]+\s*→\s*"
                r"ŞUNU YAZ:\s*lat:([-\d.]+),\s*lon:([-\d.]+)(.*)$")

recete, gecmeyen = {}, []
for yol in KAYNAK:
    # 🔴 encoding="utf-8-sig": PowerShell `Out-File -Encoding utf8` dosyanın
    #    başına BOM (U+FEFF) koyuyor ve o BOM İLK KAYDIN ADINA yapışıyor
    #    ⇒ "Native Point…" ≠ "﻿Native Point…" ve kayıt BULUNAMADI diye
    #    raporlanıyordu. Aynı BOM bugün `_omur.json`da da ısırmıştı.
    for satir in io.open(yol, encoding="utf-8-sig"):
        m = RX.match(satir.strip())
        if not m:
            continue
        ad, uz, la, lo, kuyruk = m.groups()
        ad = ad.strip()
        if "GEÇMEDİ" in kuyruk:
            gecmeyen.append((ad, float(uz)))
            continue
        recete[ad] = (float(la), float(lo), float(uz))

print("reçete okundu   : %d" % (len(recete) + len(gecmeyen)))
print("  uygulanacak   : %d" % len(recete))
print("  ATLANAN (öneri kendi testini GEÇMEDİ): %d" % len(gecmeyen))
for ad, uz in gecmeyen:
    print("     %s  (%.2f km)" % (ad, uz))

toplam = 0
bulunmayan = set(recete)
for dosya in ADAY_DOSYA:
    yol = os.path.join(S, dosya)
    if not os.path.exists(yol):
        continue
    kayit = json.load(io.open(yol, encoding="utf-8"))
    n = 0
    for k in kayit:
        if k["ad"] in recete:
            la, lo, uz = recete[k["ad"]]
            eski = (k["lat"], k["lon"])
            k["lat"], k["lon"] = la, lo
            k.setdefault("not", "")
            damga = ("konum denetle.py reçetesiyle düzeltildi "
                     "(%.2f km maske dışıydı: %.4f,%.4f → %.4f,%.4f)"
                     % (uz, eski[0], eski[1], la, lo))
            k["not"] = (k["not"] + " · " + damga) if k["not"] else damga
            bulunmayan.discard(k["ad"])
            n += 1
    if n:
        json.dump(kayit, io.open(yol, "w", encoding="utf-8"),
                  ensure_ascii=False, indent=1)
        print("  %-22s %d kayıt düzeltildi" % (dosya, n))
        toplam += n

print("\nTOPLAM düzeltilen: %d" % toplam)
if bulunmayan:
    print("🔴 REÇETESİ VAR AMA KAYNAK DOSYADA BULUNAMADI: %d" % len(bulunmayan))
    for a in sorted(bulunmayan):
        print("     " + a)
    sys.exit(1)
print("🟢 reçetenin tamamı kaynağa işlendi")
