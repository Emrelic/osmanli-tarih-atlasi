# -*- coding: utf-8 -*-
"""KITA 8 · İŞ ② — ENKLAV TAVANI, DAĞILIMDAN TÜRETME.

🔴 KENDİ AYRIŞTIRICIMI YAZMIYORUM (`D023`). Geometri evrenini ölçen araç
   ZATEN VAR: `denetim/ARAC-B-UCUZ-PARCALAR-0911.py`. Onu İTHAL ediyorum;
   dosyaya DOKUNMUYORUM (başka oturumun dosyası, `§7`). Modül düzeyinde
   koşuyor ve `karasal` listesini bırakıyor — dağılımı ondan çıkarıyorum.

🔴 VE İKİ EVREN AYRI — sevk "650 enklavın alan dağılımı" diyor:
   `degismez7`    650 kayıt · GRAF evreni (yerleşim komşuluğu, gün bazlı)
                  ALAN ALANI YOK
   B2 geometrisi  332 karasal görünüm · donemler.js · ALAN VAR
   Tavan B2'nin üstünde işleyecek ⇒ dağılım ORADAN türetilmeli.
"""
import os
import sys
import collections
import importlib.util

import numpy as np

DEPO = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
sys.path.insert(0, os.path.join(DEPO, "arac"))
sys.stdout.reconfigure(encoding="utf-8")


def yuzdelik_tablo(a, ad):
    a = np.asarray(sorted(a))
    print("   %s — n=%d · toplam %s km²" % (ad, len(a), "{:,.0f}".format(a.sum())))
    for p in (10, 25, 50, 75, 90, 95, 99, 100):
        print("      p%-3d %12s km²" % (p, "{:,.0f}".format(np.percentile(a, p))))
    for k in (1, 5, 10):
        pay = a[-k:].sum() / a.sum() * 100 if len(a) >= k else float("nan")
        print("      en büyük %2d kayıt toplamın %%%.1f'ini taşıyor" % (k, pay))


def en_buyuk_log_bosluk(a):
    """Tavanı DAĞILIMDAN türetme: log ölçekte en büyük sıçrama."""
    a = np.array(sorted(set(round(x) for x in a if x > 0)), dtype=float)
    if len(a) < 3:
        return None
    lg = np.log10(a)
    d = np.diff(lg)
    i = int(np.argmax(d))
    return a[i], a[i + 1], 10 ** ((lg[i] + lg[i + 1]) / 2), d[i]


def main():
    # ── ① GRAF EVRENİ (650) — alanı YOK, ölçülebileni ölç ────────────────
    import denetle
    import girdi
    Y = girdi.yukle(sessiz=True)
    ihl, muaf = denetle.degismez7(Y)
    print("═" * 72)
    print("① GRAF EVRENİ — `degismez7`, %d kayıt (sevkteki '650')" % len(ihl))
    print("═" * 72)
    kova = collections.Counter(r["kova"] for r in ihl)
    boy = collections.Counter(len(r["ada"]) for r in ihl)
    print("   kova: %s" % dict(kova))
    print("   ada BÜYÜKLÜĞÜ (yerleşim sayısı): %s"
          % dict(sorted(boy.items())[:8]))
    km = np.array([r["ana_km"] for r in ihl], dtype=float)
    print("   ana gövdeye uzaklık km: medyan %.0f · p90 %.0f · en uzak %.0f"
          % (np.median(km), np.percentile(km, 90), km.max()))
    print("   🔴 BU EVRENDE ALAN YOK — kayıt {gun, yerlesim, sahip, ada,")
    print("      ana_km, ana, kova}. Bir ALAN TAVANI bu kümeye UYGULANAMAZ.")
    graf_adlar = set()
    for r in ihl:
        graf_adlar.update(r["ada"])
    print("   benzersiz yerleşim adı: %d" % len(graf_adlar))

    # ── ② GEOMETRİ EVRENİ — var olan aracı İTHAL et ─────────────────────
    print()
    print("═" * 72)
    print("② GEOMETRİ EVRENİ — ARAC-B-UCUZ-PARCALAR-0911.py İTHAL EDİLİYOR")
    print("   (dosyaya dokunulmuyor; kendi çıktısını basacak, sonra dağılımı")
    print("    onun `karasal` listesinden çıkaracağım)")
    print("═" * 72)
    yol = os.path.join(DEPO, "denetim", "ARAC-B-UCUZ-PARCALAR-0911.py")
    spec = importlib.util.spec_from_file_location("_ucuz", yol)
    m = importlib.util.module_from_spec(spec)
    eski = os.getcwd()
    os.chdir(DEPO)
    try:
        spec.loader.exec_module(m)
    finally:
        os.chdir(eski)

    karasal = getattr(m, "karasal", None)
    if karasal is None:
        print("🔴 `karasal` bulunamadı — araç değişmiş olabilir. ÖLÇÜLEMEDİ.")
        return
    print()
    print("═" * 72)
    print("③ ALAN DAĞILIMI — tavanın GERÇEKTEN işleyeceği küme")
    print("═" * 72)
    alanlar = [k[2] for k in karasal]
    yuzdelik_tablo(alanlar, "KARASAL enklav görünümü")
    # adıyla tekilleştir — bir enklav çok dönemde tekrar sayılıyor
    ad_en = collections.defaultdict(float)
    for k in karasal:
        ad_en[k[5] or "(adsız)"] = max(ad_en[k[5] or "(adsız)"], k[2])
    print()
    yuzdelik_tablo(list(ad_en.values()), "TEKİL enklav (ada göre, en büyük hâli)")

    print()
    print("   EN BÜYÜK 12 TEKİL ENKLAV:")
    for ad, a in sorted(ad_en.items(), key=lambda t: -t[1])[:12]:
        mes = min((k[1] for k in karasal if (k[5] or "(adsız)") == ad),
                  default=float("nan"))
        print("      %-28s %11s km²  en yakın mesafe %.0f km"
              % (ad, "{:,.0f}".format(a), mes))

    print()
    print("═" * 72)
    print("④ TAVANI DAĞILIMDAN TÜRET — tahminden değil")
    print("═" * 72)
    for ad, kume in (("görünüm", alanlar), ("tekil", list(ad_en.values()))):
        r = en_buyuk_log_bosluk(kume)
        if r is None:
            print("   %s: ölçülemedi" % ad)
            continue
        alt, ust, orta, d = r
        print("   %-8s en büyük LOG boşluk: %s → %s km²  (×%.1f)  ⇒ tavan ≈ %s km²"
              % (ad, "{:,.0f}".format(alt), "{:,.0f}".format(ust), 10 ** d,
                 "{:,.0f}".format(orta)))
    print()
    print("   ÖNERİLEN 100.000 km² TAVANI NE KESİYOR:")
    for ad, kume in (("görünüm", alanlar), ("tekil", list(ad_en.values()))):
        ust = [a for a in kume if a > 100000]
        print("      %-8s %d / %d kayıt tavanın ÜSTÜNDE (%%%.1f) · alanları %s km²"
              % (ad, len(ust), len(kume), 100.0 * len(ust) / len(kume),
                 "{:,.0f}".format(sum(ust))))
    print("   TAVANIN ÜSTÜNDE KALAN TEKİL ENKLAVLAR (yani BİRLEŞTİRİLMEYECEKLER):")
    for ad, a in sorted(ad_en.items(), key=lambda t: -t[1]):
        if a > 100000:
            print("      %-28s %11s km²" % (ad, "{:,.0f}".format(a)))

    # ── ⑤ İKİ EVREN ÖRTÜŞÜYOR MU (K1'in sınavı) ────────────────────────
    geo_adlar = set(ad_en) - {"(adsız)"}
    ortak = graf_adlar & geo_adlar
    print()
    print("═" * 72)
    print("⑤ İKİ EVREN ÖRTÜŞÜYOR MU — K1'in sınavı")
    print("═" * 72)
    print("   graf evreni benzersiz ad   %d" % len(graf_adlar))
    print("   geometri evreni benzersiz ad %d" % len(geo_adlar))
    print("   ORTAK %d  ⇒ geometri evreninin %%%.1f'i grafta da var"
          % (len(ortak), 100.0 * len(ortak) / max(1, len(geo_adlar))))
    if ortak:
        print("   örnek ortak: %s" % ", ".join(sorted(ortak)[:10]))


if __name__ == "__main__":
    main()
