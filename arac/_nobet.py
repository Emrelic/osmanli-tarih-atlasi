# -*- coding: utf-8 -*-
"""YARIM SAATLİK NÖBET — "şimdi ne yapmalı?" sorusunu koordinatöre SORDURUR.

    py arac/_nobet.py --dk 30

🔴 NİÇİN VAR — Emre'nin emri (29 Ağustos 2026):
    *"Sürekli belli bir dakikada bir 'şimdi ne yapmam lazım' sorusunu
     kendine sorman lazım. Uyumaman lazım. Seni uyandıracak bir ben
     olmayacağım belli bir süre."*

⚠️ VE TEKNİK GERÇEK ŞU: koordinatör kendi kendine uyanmaz. Turu bitince
   bir şey onu dürtene kadar DURUR. `Monitor` altında koşan bu betiğin
   bastığı HER SATIR onu uyandırır. Yani "kendine sor" bir niyet değil,
   BU DÜZENEKTİR.

🟢 VE UYANIŞ BOŞ GELMEZ. `_isci_nabzi.py` kenar tetiklemelidir (yalnız hâl
   değişince öter, boşta sıfır token). Bu ise TERSİ: bilerek DÜZENLİ öter,
   ama ötüşü bir SORU değil bir CEVAP taşır — uyanan koordinatör ölçümü
   hazır bulur, aynı ölçümü yapmak için üç-beş araç çağırmaz.
   ⇒ Düzenli uyandırmanın maliyeti, uyandırmanın İÇİ DOLU olmasıyla ödenir.
"""
import argparse
import io
import json
import os
import subprocess
import sys
import time

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BEN = ("ORHANGAZI", "ORHANGAZİ")


def kabuk(komut, sn=60):
    try:
        return subprocess.run(komut, cwd=KOK, capture_output=True, text=True,
                              encoding="utf-8", errors="replace",
                              timeout=sn).stdout.strip()
    except Exception:
        return ""


def pil():
    ps = ("$b = Get-CimInstance Win32_Battery | Select-Object -First 1; "
          "if ($b) { \"$($b.EstimatedChargeRemaining)|$($b.BatteryStatus)\" }")
    ham = kabuk(["powershell", "-NoProfile", "-Command", ps], 30)
    if "|" not in ham:
        return "pil ?"
    y, d = ham.split("|", 1)
    try:
        fis = int(d.strip()) != 1
    except ValueError:
        fis = True
    return "pil %%%s %s" % (y.strip(), "FİŞTE" if fis else "BATARYA")


def tahta_yeni(taban):
    """Bana gelen YENİ mesajların numaraları."""
    yol = os.path.join(KOK, "oturumlar", "tahta.json")
    try:
        d = json.load(io.open(yol, encoding="utf-8"))
    except Exception:
        return taban, []
    m = d["mesajlar"] if isinstance(d, dict) else d
    bana = [x.get("no") for x in m if x.get("kime") in BEN]
    yeni = [n for n in bana if n and n > (taban or "")]
    return (bana[-1] if bana else taban), yeni


def commit_sayisi():
    s = kabuk(["git", "log", "--oneline", "--since", "35 minutes ago"])
    return len([x for x in s.splitlines() if x.strip()])


def calisan_dosya():
    """Son 35 dakikada değişmiş data/ dosyaları — işçiler çalışıyor mu?"""
    s = kabuk(["git", "status", "--short", "data/"])
    return len([x for x in s.splitlines() if x.strip()])


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dk", type=int, default=30, help="nöbet aralığı (dakika)")
    a = ap.parse_args()

    taban, _ = tahta_yeni(None)
    tur = 0
    # İlk satır HEMEN basılmaz — nöbet kurulurken koordinatör zaten uyanık.
    while True:
        time.sleep(max(60, a.dk * 60))
        tur += 1
        taban, yeni = tahta_yeni(taban)
        c = commit_sayisi()
        d = calisan_dosya()

        parca = ["ŞİMDİ NE YAPMALI? · tur %d" % tur, pil(),
                 "son 35dk commit: %d" % c,
                 "data/ bekleyen: %d" % d]
        if yeni:
            parca.append("🔴 BANA %d YENİ MESAJ: %s"
                         % (len(yeni), ", ".join(yeni[-6:])))
        else:
            parca.append("yeni mesaj YOK")
        print(" · ".join(parca), flush=True)


if __name__ == "__main__":
    main()
