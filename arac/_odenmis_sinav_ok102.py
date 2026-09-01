# -*- coding: utf-8 -*-
"""
`ODENMIS_VAKALAR` NÖBETÇİSİNİN C13 SINAVI — İKİ YÖN DE ZORLANIR
================================================================
`arac/denetle_eslesme.py`ye 2 Eylül 2026'da eklenen `odenmis_vaka_sinamasi`
bloğunu sınar. Ayrı dosya olmasının sebebi: o dosya bir DENETİMDİR, sınav
kodu onun çıktısını kirletmemeli.

🔴 NİÇİN ŞART — `CLAUDE.md §11` (`C13`):
   "Yeni yazılan denetim, İKİ YÖNDE DE sınanmadan 'çalışıyor' sayılmaz.
    Gerçek veride o kusur yoksa dal koşulamaz ⇒ sahte girdiyle ya da geçici
    eşik değişikliğiyle ZORLA ateşlenir. Zorlanamayan dal, denetimsiz daldır."
Bugün gerçek veride hiçbir ödeme geri alınmamış — yani ATEŞLEME yolu
kendiliğinden koşulamaz. Zorlanıyor: ödemenin kırılması hafızadaki bir
kopyadan SİLİNİYOR ve nöbetçinin ötmesi bekleniyor.
⚠️ Silme YALNIZ hafızada; `data/` dosyalarına DOKUNULMAZ.

ÇALIŞTIRMA
    py arac/_odenmis_sinav_ok102.py      # çıkış kodu 0 = dört dal da geçti
"""
import copy
import io
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import girdi
import denetle_eslesme as esl

if getattr(sys.stdout, "encoding", "").lower() not in ("utf-8", "utf8"):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")


def kirilmayi_sil(Y, ad, gun):
    """Hafızadaki kopyadan o yerleşimin o günkü dönem ucunu SİLER."""
    Z = copy.deepcopy(Y)
    for y in Z:
        if y["ad"] != ad:
            continue
        for kat in ("d", "v", "s"):
            y[kat] = [p for p in (y.get(kat) or [])
                      if p.get("f") != gun and p.get("t") != gun]
    return Z


def main():
    Y = girdi.yukle(sessiz=True)
    kod = 0
    print("=" * 74)
    print("ODENMIS_VAKALAR — C13 SINAVI (geçme + ateşleme, ikisi de zorlanır)")
    print("=" * 74)
    print("  ödenmiş vaka: %d · yerleşim: %d" % (len(esl.ODENMIS_VAKALAR), len(Y)))

    # ── ① GEÇME YOLU — gerçek veride TEMİZ demeli ───────────────────────
    geri = esl.odenmis_vaka_sinamasi(Y)
    if not geri:
        print("  🟢 GEÇME ✓ gerçek veride 0 geri alınan — nöbetçi TEMİZ diyor")
    else:
        print("  🔴 GEÇME ✗ gerçek veride %d geri alınan çıktı: %s"
              % (len(geri), [g[0] for g in geri]))
        kod = 1

    # ── ② ATEŞLEME — her ödeme AYRI AYRI silinip sınanır ────────────────
    # ⚠️ Tek vaka silip "dal çalışıyor" demek yetmez: liste büyüdükçe
    #    yalnız ilk satırı okuyan bir kusur sessiz kalırdı.
    for ad, gun, _ in esl.ODENMIS_VAKALAR:
        Z = kirilmayi_sil(Y, ad, gun)
        g = esl.odenmis_vaka_sinamasi(Z)
        adlar = [x[0] for x in g]
        if adlar == [ad]:
            print("  🟢 ATEŞLEME ✓ %-10s %s silindi → nöbetçi TAM O VAKAYI bildirdi"
                  % (ad, gun))
        else:
            print("  🔴 ATEŞLEME ✗ %-10s %s silindi → beklenen ['%s'], gelen %s"
                  % (ad, gun, ad, adlar))
            kod = 1

    # ── ③ YAN ETKİ YOK MU — silme öteki vakaları etkilemedi mi ──────────
    Z = kirilmayi_sil(Y, esl.ODENMIS_VAKALAR[0][0], esl.ODENMIS_VAKALAR[0][1])
    if len(esl.odenmis_vaka_sinamasi(Z)) == 1:
        print("  🟢 YALITIM ✓ bir vakayı silmek ötekileri ötürtmedi")
    else:
        print("  🔴 YALITIM ✗ tek silme birden çok vakayı ötürttü")
        kod = 1

    # ── ④ GÜN KAYMASI da yakalanmalı — silme değil, TARİH DEĞİŞTİRME ────
    # Gerçek risk "kayıt silinir" değil, "günü kayar" (§11: yuvarlak tarih).
    ad, gun, _ = esl.ODENMIS_VAKALAR[1]
    Z = copy.deepcopy(Y)
    for y in Z:
        if y["ad"] == ad:
            for kat in ("d", "v", "s"):
                for p in (y.get(kat) or []):
                    for alan in ("f", "t"):
                        if p.get(alan) == gun:
                            p[alan] = "1423-01-01"      # bir yıl kaydır
    g = esl.odenmis_vaka_sinamasi(Z)
    if [x[0] for x in g] == [ad]:
        print("  🟢 GÜN KAYMASI ✓ %s'ın günü kaydırıldı → nöbetçi öttü" % ad)
    else:
        print("  🔴 GÜN KAYMASI ✗ gün kaydı ama nöbetçi susuyor: %s" % [x[0] for x in g])
        kod = 1

    print()
    print("SONUÇ:", "dört dal da geçti ✓" if not kod else "🔴 SINAV BAŞARISIZ")
    return kod


if __name__ == "__main__":
    sys.exit(main())
