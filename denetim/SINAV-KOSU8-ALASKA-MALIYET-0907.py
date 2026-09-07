# -*- coding: utf-8 -*-
u"""ALASKA YAMASININ `Değişmez 2s` MALİYETİ — merge'den ÖNCE.

    SINAV-KOSU8-0907 · 7 Eylül 2026

`SINAV-KOSU8-ALASKA-DONUSTUR-0907.py` yamanın `Değişmez 1` kapsamasını
ölçüyor (boşluk 0 · çakışma 0 · canlı veri `eski` ile aynı). Bu alet
**sayılmayan ekseni** ölçüyor.

📌 `CLAUDE.md §11`, `zend`→`kacar` vakası: bir hüküm *"her eksende
temiz"* diye savunuldu, dört eksen sayıldı, ve **beşinci eksen**
(`2s`) ölçülünce `101 → 102` çıktı. Sayılmayan eksen bir boşluk değil,
**görünmeyen bir iddiadır.**

Bu yama **iki YENİ sınır günü** getiriyor (`1799-01-01` · `1867-06-20`)
ve **bir günü bırakıyor** (`1867-07-01`). Üç soru:

    M1  Alaska noktaları `2s` KAPSAMINDA mı?  (tavan 2014 km)
        ⚠️ ve mesafe OSMANLI BAŞKENTİNE değil, `d:`/`v:` taşıyan
           BÜTÜN GÖVDEYE ölçülür — `§11` bu hatayı adıyla kaydediyor
           (15 sanılan sayı gerçekte 165 çıkmıştı).
    M2  Yeni sınır günlerinin çekirdekte maddesi var mı?
    M3  Bırakılan `1867-07-01` BAŞKA kayıtlarda da kullanılıyor mu?
        (yalnız bu beşi kullanıyorsa gün külliyattan DÜŞER)

Bu alet hiçbir dosyaya yazmaz.
"""
from __future__ import unicode_literals

import io
import json
import math
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)  # girdi.py ve denetle.py depo kökünden okuyor

KAPSAM_KM = 2014.0
YENI_GUN = ["1799-01-01", "1867-06-20"]
BIRAKILAN = "1867-07-01"


def km(a, b):
    la1, lo1 = math.radians(a[0]), math.radians(a[1])
    la2, lo2 = math.radians(b[0]), math.radians(b[1])
    h = (math.sin((la2 - la1) / 2) ** 2
         + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2)
    return 6371.0 * 2 * math.asin(min(1.0, math.sqrt(h)))


def main():
    import girdi
    import denetle

    with io.open(os.path.join(KOK, "denetim", "ALASKA-DEVIR-0907.json"),
                 encoding="utf-8") as f:
        adlar = [k["ad"] for k in json.load(f)["kalemler"]]

    Y = girdi.yukle(sessiz=True)
    print("girdi.yukle: %d yerleşim" % len(Y))
    print("")

    alaska = [y for y in Y if y.get("ad") in adlar]
    if len(alaska) != len(adlar):
        print("🔴 DUR — %d ad arandı, %d bulundu. Ölçüm yapılmadı."
              % (len(adlar), len(alaska)))
        return 2

    # ── M1 · kapsam
    osmanli = [y for y in Y if (y.get("d") or y.get("v"))]
    print("M1 · `2s` KAPSAMI (tavan %.0f km)" % KAPSAM_KM)
    print("  Osmanlı gövdesi (`d:` ya da `v:` taşıyan nokta): %d"
          % len(osmanli))
    en_yakin_hepsi = None
    for a in alaska:
        p = (a["lat"], a["lon"])
        d, kim = min(((km(p, (o["lat"], o["lon"])), o["ad"])
                      for o in osmanli), key=lambda t: t[0])
        icinde = d <= KAPSAM_KM
        print("  %-34s en yakın Osmanlı noktası %8.0f km (%s) %s"
              % (a["ad"], d, kim, "🔴 KAPSAM İÇİ" if icinde else "⚪ KAPSAM DIŞI"))
        if en_yakin_hepsi is None or d < en_yakin_hepsi:
            en_yakin_hepsi = d
    kapsamda = en_yakin_hepsi <= KAPSAM_KM
    print("  ⇒ en yakını %.0f km · tavan %.0f km ⇒ %s"
          % (en_yakin_hepsi, KAPSAM_KM,
             "🔴 EN AZ BİRİ KAPSAM İÇİ — `2s` ETKİLENİR"
             if kapsamda else
             "🟢 BEŞİ DE KAPSAM DIŞI — `2s` AÇIK sayısı DEĞİŞMEZ"))
    print("")

    # ── M2 · çekirdekte madde
    print("M2 · YENİ SINIR GÜNLERİNİN ÇEKİRDEKTE KARŞILIĞI")
    print("  (`denetle.olaylari_yukle()` — kendi ayrıştırıcım DEĞİL)")
    O = denetle.olaylari_yukle()
    print("  çekirdek madde: %d" % len(O))

    def gunu_coz(s):
        s = (s or "")[:10]
        if len(s) == 7:
            s += "-01"
        try:
            import datetime
            return datetime.date(int(s[0:4]), int(s[5:7]), int(s[8:10]))
        except Exception:
            return None

    tarihli = []
    for o in O:
        g = gunu_coz(o.get("t"))
        if g:
            tarihli.append((g, o.get("b") or o.get("d") or ""))
    for gun in YENI_GUN + [BIRAKILAN]:
        hedef = gunu_coz(gun)
        fark, metin = min(((abs((g - hedef).days), b) for g, b in tarihli),
                          key=lambda t: t[0])
        im = "🟢" if fark <= 30 else "🔴"
        print("  %s %s  en yakın çekirdek madde %4d gün — %s"
              % (im, gun, fark, metin[:64]))
    print("")

    # ── M3 · bırakılan gün başka yerde var mı
    print("M3 · BIRAKILAN GÜN `%s` BAŞKA KAYITLARDA" % BIRAKILAN)
    kullanan = []
    for y in Y:
        if y.get("ad") in adlar:
            continue
        for alan in ("d", "v", "s", "isg"):
            for p in (y.get(alan) or []):
                if p.get("f") == BIRAKILAN or p.get("t") == BIRAKILAN:
                    kullanan.append("%s(%s)" % (y.get("ad"), alan))
                    break
    print("  bu beş kayıt DIŞINDA kullanan: %d" % len(kullanan))
    if kullanan:
        print("    %s" % ", ".join(sorted(set(kullanan))[:12]))
        print("  ⇒ gün külliyatta KALIYOR; yama onu düşürmüyor.")
    else:
        print("  ⇒ 🔴 gün YALNIZ bu beş kayıtta. Yama inince külliyattan "
              "DÜŞER —")
        print("     bir kırılma günü kaybolur. Kusur değil ama BEYAN.")
    return 0


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.exit(main())
