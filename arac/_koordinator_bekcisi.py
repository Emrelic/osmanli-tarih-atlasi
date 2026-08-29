# -*- coding: utf-8 -*-
"""KOORDİNATÖR BEKÇİSİ — bir oturum BANA yazdığı an uyandırır.

    py arac/_koordinator_bekcisi.py --sn 60

🔴 NİÇİN VAR — Emre'nin emri (30 Ağustos 2026):
    *"Bekçiler kurulsun ve oturumları takip et. Görevler yapıldıkça yeni
     görevler verelim sabaha kadar."*

Bu, iş çevriminin KAPANMAYAN halkasıydı. Var olan nöbetçiler:
```
_isci_nabzi.py       işçi ÇIKTISI durdu mu   — dosya damgasına bakar
_pil_bekcisi.py      pil eşikleri            — güç kesilirse
_nobet.py            30 dakikada bir "şimdi ne yapmalı"
```
🔴 Üçü de **bir oturumun İŞİNİ BİTİRDİĞİNİ** söylemiyor. `_nobet.py`
mesaj sayısını basıyor ama **yarım saat gecikmeyle** — bir oturum işini
bitirip yeni iş beklerken 30 dakika boşta durabiliyor.

⇒ Bu bekçi tahtayı yoklar ve **BANA yazılan her yeni mesajı** tek satır
  hâlinde basar. Monitor altında her satır koordinatörü uyandırır.

🟢 VE BİTİŞ SİNYALİNİ AYIRT EDER. Mesajda tamamlanma işareti varsa
  satırın başına 🟢 koyar — koordinatör "kim boşaldı" sorusunu
  mesajı açmadan görür. Bu, uyanışın İÇİNİ DOLDURUR: uyanan
  koordinatör ölçümü hazır bulur.

⚠️ Sessizken SIFIR çıktı: yalnız YENİ mesajda öter (kenar tetiklemeli).
  Emre'nin kuralı: *"token yiyen uyandırmaya karşıyım."*
"""
import argparse
import io
import json
import os
import re
import sys
import time

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TAHTA = os.path.join(KOK, "oturumlar", "tahta.json")
BEN = ("ORHANGAZI", "ORHANGAZİ")

# Bitiş/boşalma işaretleri — mesajı AÇMADAN "kim hazır" görünsün diye
BITTI_RX = re.compile(
    r"BOŞTAYIM|BOSTAYIM|bitti|BİTTİ|tamamland|TESLİM|TESLIM|"
    r"\b(\d+)\s*/\s*\1\b|yeni görev|yeni gorev|iş bekliyorum|is bekliyorum",
    re.I)
# Acil işaretleri — bunlar beklemez
ACIL_RX = re.compile(r"🔴🔴|ACİL|ACIL|ÇAKIŞMA|CAKISMA|DURDUR|ihlal|İHLAL", re.I)


def oku():
    try:
        d = json.load(io.open(TAHTA, encoding="utf-8"))
    except Exception:
        return []
    return d["mesajlar"] if isinstance(d, dict) else d


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--sn", type=int, default=60)
    a = ap.parse_args()

    gorulen = {x.get("no") for x in oku() if x.get("kime") in BEN}
    while True:
        time.sleep(max(20, a.sn))
        for x in oku():
            if x.get("kime") not in BEN:
                continue
            no = x.get("no")
            if not no or no in gorulen:
                continue
            gorulen.add(no)
            kim = x.get("kimden") or "?"
            gov = (x.get("mesaj") or "").replace("\n", " ")
            im = "🔴" if ACIL_RX.search(gov[:400]) else (
                 "🟢" if BITTI_RX.search(gov[:400]) else "·")
            print("%s %s %-18s %s" % (im, no, kim[:18], gov[:150]), flush=True)


if __name__ == "__main__":
    main()
