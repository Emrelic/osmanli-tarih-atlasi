# -*- coding: utf-8 -*-
"""PAKET ÖZETİ BAYAT MI — `hukum_dagilimi` ile GERÇEK sayım tutuyor mu?

    py arac/_paket_bayat.py

═══ NİÇİN VAR — üç oturum BAĞIMSIZ olarak aynı sınıfı buldu ═══
1-2 Eylül 2026, tek gün:
    PAKET-0003-0006  "CEVAP.json bayattı, 4 kalem zaten çözülmüştü"
    PAKET-KUCUKLER   "2 kalem BAŞKA PROJEYE (EczAsist) aitmiş"
    PAKET-0023       "`hukum_dagilimi` 17/12/2/1 diyor, gerçek 20/9/2/1"

⇒ Üçü de aynı şeyin yüzleri: **paketin KENDİ ÖZETİ, kendi maddelerinden
ayrışmış.** Ve koordinatörün "180 açık" tabanı bu özetlerden türüyordu.

🔴 EN SİNSİ HÂLİ (PAKET-0023'ün ölçtüğü): **TOPLAM TUTUYOR, dağılım
KAYIYOR.** 17+12+2+1 = 32 ve 20+9+2+1 = 32. Yani bir kontrol toplamı
bakan kişi *"tutuyor"* der ve geçer. Ayrışma ancak kova kova bakılınca
görünür.
📌 `CLAUDE.md §1.5`in *"bir kez bayatlayan belge tekrar bayatlar — çare
yeni bir satır değil, satırı ELLE YAZILMAKTAN ÇIKARMAKTIR"* dersinin
paket tarafı. Bu betik o satırı elle yazılmaktan çıkarmaz ama
**ayrıştığında SÖYLER.**
"""
import collections
import glob
import io
import json
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = "C:/Users/emrem/OneDrive/Desktop/ClaudEmre/kutu/giden"
ACIK = ("sirada", "olculecek")


def main():
    bayat, temiz, ozetsiz = [], 0, 0
    toplam_acik = 0
    for y in sorted(glob.glob(os.path.join(KOK, "*", "CEVAP.json"))):
        ad = os.path.basename(os.path.dirname(y))
        try:
            d = json.load(io.open(y, encoding="utf-8"))
        except Exception as e:
            bayat.append((ad, "BOZUK JSON: %s" % e, None, None))
            continue
        m = d.get("maddeler") or {}
        gercek = collections.Counter()
        for v in m.values():
            if isinstance(v, dict):
                gercek[(v.get("hukum") or "").strip()] += 1
        toplam_acik += sum(gercek[k] for k in ACIK)

        ozet = d.get("hukum_dagilimi")
        if ozet is None:
            ozetsiz += 1
            continue
        if isinstance(ozet, dict):
            o = collections.Counter({k: int(v) for k, v in ozet.items()})
        else:
            bayat.append((ad, "ozet DICT DEGIL: %r" % type(ozet).__name__,
                          None, None))
            continue
        if o == gercek:
            temiz += 1
        else:
            bayat.append((ad, None, o, gercek))

    print("PAKET ÖZETİ DENETİMİ")
    print("  özeti TUTAN     : %d" % temiz)
    print("  özeti BAYAT     : %d" % len(bayat))
    print("  özeti HİÇ YOK   : %d" % ozetsiz)
    print("  GERÇEK açık madde toplamı: %d" % toplam_acik)
    print()
    if not bayat:
        print("🟢 Bayat özet yok.")
        return 0
    print("🔴 AYRIŞANLAR — özette yazan  vs  maddelerden SAYILAN:")
    for ad, hata, o, g in bayat:
        if hata:
            print("  %-30s %s" % (ad, hata))
            continue
        # 🔴 TOPLAM TUTUP DAĞILIM KAYABİLİR — o yüzden ayrıca yazılıyor
        ayni_toplam = sum(o.values()) == sum(g.values())
        print("  %-30s %s" % (ad,
              "⚠️ TOPLAM AYNI, DAĞILIM KAYMIŞ" if ayni_toplam
              else "toplam da farklı (%d vs %d)" % (sum(o.values()),
                                                    sum(g.values()))))
        for k in sorted(set(o) | set(g)):
            if o[k] != g[k]:
                print("        %-16s özet %3d   gerçek %3d" % (k, o[k], g[k]))
    print()
    print("📌 'Toplam tutuyor' bir DOĞRULAMA DEĞİLDİR: dağılım kayarken")
    print("   toplam sabit kalabilir, ve kontrol toplamına bakan geçer.")
    return 1


if __name__ == "__main__":
    sys.exit(main())
