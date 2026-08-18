# -*- coding: utf-8 -*-
"""KOŞU SÜRESİ — "11 saat mi 3 saat mi" sorusunun ölçümü.

Emre, 18 Ağustos 2026: *"koşunun kaç saat süreceği önemli."*

Motor her aşamanın hem DUVAR hem İŞLEMCİ süresini basıyor. Makine uyursa
duvar uzar, işlemci uzamaz — fark uykudur. Bu betik bütün koşu loglarını
tarayıp ikisini yan yana koyar, böylece "gerçek yük" ile "uykuyla şişmiş
duvar" ayrılır.

    py arac/olc_kosu_suresi.py
"""
import io
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# "AŞAMA BİLANÇOSU — koşu 11s 07dk 51sn (işlemci 3s 15dk 51sn)"
SON = re.compile(r"AŞAMA BİLANÇOSU\s*—\s*koşu\s+(.+?)\s*\(işlemci\s+(.+?)\)")


def sn(s):
    """'11s 07dk 51sn' → saniye.

    🔴 İLK SÜRÜM YANLIŞTI ve "uyku" sütununu NEGATİF gösteriyordu:
    alternasyon `(s|dk|sn)` sırasıyla yazılmıştı, `sn` gelince önce `s`
    eşleşiyor ve 51 SANİYE 51 SAAT sayılıyordu. Uzun birim ÖNCE gelmeli.
    📌 Ve kusur ÇIKTIDA görünürdü: negatif uyku fizikî olarak imkânsız.
    Aletin saçmaladığını sayının kendisi söyledi.
    """
    t = 0
    for sayi, birim in re.findall(r"(\d+)\s*(sn|dk|s)", s):
        t += int(sayi) * {"s": 3600, "dk": 60, "sn": 1}[birim]
    return t


def yaz(t):
    return f"{t // 3600}s {t % 3600 // 60:02d}dk"


satir = []
for ad in sorted(os.listdir(KOK)):
    if not (ad.startswith("kosu") and ad.endswith(".log")):
        continue
    yol = os.path.join(KOK, ad)
    try:
        m = SON.search(io.open(yol, encoding="utf-8", errors="replace").read())
    except Exception:                                       # noqa: BLE001
        continue
    if not m:
        continue
    duvar, islemci = sn(m.group(1)), sn(m.group(2))
    satir.append((os.path.getmtime(yol), ad, duvar, islemci))

satir.sort()
print(f"{'log':26s} {'DUVAR':>9s} {'İŞLEMCİ':>9s} {'uyku/bekleme':>13s}  oran")
print("-" * 72)
for _, ad, d, i in satir:
    kayip = d - i
    print(f"{ad:26s} {yaz(d):>9s} {yaz(i):>9s} {yaz(kayip):>13s}  "
          f"{'×%.1f' % (d / i) if i else '—'}")

if satir:
    ic = [i for _, _, _, i in satir]
    print("-" * 72)
    print(f"İŞLEMCİ süresi: en kısa {yaz(min(ic))} · en uzun {yaz(max(ic))} · "
          f"son koşu {yaz(ic[-1])}")
    print("\n📌 DUVAR ile İŞLEMCİ arasındaki fark UYKUDUR — motorun yükü değil.")
    print("📌 Makine uyumazsa koşu ≈ İŞLEMCİ süresi kadar sürer.")
    print("   Uyku kapatma:  powercfg /change standby-timeout-ac 0")
