# -*- coding: utf-8 -*-
"""NİÇİN BOŞ — "burası niçin boyanmıyor" sorusunun tek ölçüm aleti.

Emre'nin 0021 partisinde ON madde aynı soruyu soruyor:
    "bu boşluk neden Osmanlı görünmüyor · 400/300/200 · 4/2/1 sistemi
     çalışmıyor mu"
Bu alet o soruyu TEK GÖRSEL AÇMADAN, sayıyla cevaplar.

═══ NE ÖLÇER ═══
Verilen (lat, lon, gün) için:
  ① en yakın yerleşimler — mesafe · o gün SAHİBİ · kademe k: · A1 tavanı
  ② EMRE'NİN PUANI — devlet devlet: 0-200=4p · 200-300=2p · 300-400=1p
     (uret_petek.py PUAN_HALKA ile birebir aynı, oradan içe aktarılmaz
      ÇÜNKÜ o dosya import edilince 40 dakikalık üretim başlar — sabit
      burada TEKRARLANIR ve tekrarlandığı AÇIKÇA yazılıdır; ayrışırsa
      `--sabit-dogrula` bunu söyler)
  ③ A1 YARIÇAP TAVANI — hangi noktanın tavanı buraya YETİŞİYOR

═══ 🔴 ALETİN KENDİ SINIRI — okumadan sonucuna güvenme ═══
  · A1 tavanı motorda YÖNE DUYARLI (A1b, uret_petek.py:710). Buradaki
    ölçüm İZOTROP yarıçapı kullanır. Tavan şekil değiştirir ama ALANI
    korur ⇒ izotrop yarıçap bir YAKLAŞIKTIR, kesin sınır değil.
    "Tavan yetişmiyor" hükmü bu yüzden GÜÇLÜ, "yetişiyor" hükmü ZAYIF.
  · Petek sahipliğini Voronoi + sürtünmeli mesafe belirler; bu alet
    yalnız KUŞ UÇUŞU bakar. Yani "en yakın nokta X" ile "peteği X'in"
    aynı şey DEĞİLDİR.
  ⇒ Alet bir TEŞHİS aleti, bir HÜKÜM aleti değil.

═══ KULLANIM ═══
    py arac/nicin_bos.py --lat 31.0 --lon 45.0 --gun 1650-06-15
    py arac/nicin_bos.py --lat 26.5 --lon 37.5 --gun 1577-06-15 --n 12
    py arac/nicin_bos.py --sabit-dogrula
"""
import argparse
import io
import math
import os
import re
import sys

# 🔴 stdout SARMALANMAZ, YENİDEN AYARLANIR. İki alet de sarmalayınca ikinci
# sarmalayıcı birincinin tamponunu KAPATIYOR — ölçüldü, `olc_ekleyici.py`
# bu dosyayı import edince "ValueError: I/O operation on closed file".
# `reconfigure` yeni nesne yaratmaz, aynı akışı ayarlar.
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))

import girdi  # noqa: E402

# ── uret_petek.py'den TEKRARLANMIŞ sabitler ──────────────────────────
# 🔴 Kopya OLDUĞU açıkça yazılı ve `--sabit-dogrula` onları kaynaktan
# okuyup karşılaştırır. "İki yerde duran bilgi ayrışır" (CLAUDE.md §11)
# — ayrışmayı gizlemek yerine ÖLÇÜLEBİLİR yapıyoruz.
PUAN_HALKA = ((200.0, 4), (300.0, 2), (400.0, 1))
PUAN_ESIK = 4
TAVAN_KM = {1: 700, 2: 420, 3: 280, 4: 140, 0: 280}


def sabit_dogrula():
    """uret_petek.py'deki asıl sabitlerle karşılaştır — ayrıştırıcı DEĞİL,
    kaynağın kendi satırını okur."""
    src = io.open(os.path.join(KOK, "arac", "uret_petek.py"),
                  encoding="utf-8").read()
    tamam = True
    for ad, benim in (("PUAN_HALKA", PUAN_HALKA), ("PUAN_ESIK", PUAN_ESIK),
                      ("TAVAN_KM", TAVAN_KM)):
        m = re.search(r"^" + ad + r"\s*=\s*(.+?)(?:\s{2,}#|\s*#|$)",
                      src, flags=re.M)
        if not m:
            print(f"  🔴 {ad}: uret_petek.py'de BULUNAMADI")
            tamam = False
            continue
        try:
            asil = eval(m.group(1).strip())
        except Exception as e:                              # noqa: BLE001
            print(f"  🔴 {ad}: kaynak satırı okunamadı ({e})")
            tamam = False
            continue
        esit = asil == benim
        print(f"  {'✓' if esit else '🔴'} {ad}: "
              f"{'aynı' if esit else f'AYRIŞTI — motor {asil} · alet {benim}'}")
        tamam = tamam and esit
    return tamam


def var_mi(y, g):
    """Yerleşim `g` gününde SAHNEDE mi? (`kur:` / `bit:`)

    🔴 BU FONKSİYON BİR HATADAN DOĞDU — 18 Ağustos 2026.
    Alet `kur:`/`bit:` alanlarını HİÇ OKUMUYORDU ve üç teşhisi birden
    yanlış zeminde verdi:
        H-0020 (1577)  "en yakın nokta Kuveyt"        → Kuveyt kur:1716
        H-0009 (1604)  "en yakın nokta Vladikavkaz"   → Vladikavkaz kur:1784
        H-0023 (1577)  aynı Vladikavkaz
    Üçü de o tarihte HENÜZ KURULMAMIŞTI. Motor onları `petek_epok()` ile
    komşusuna devrediyor; alet ise sahnedeymiş gibi sayıp "sahipsiz nokta
    buradan emiyor" dedi. Ölçüm doğru çalışıyordu, EVRENİ yanlıştı — ve
    hüküm koordinatöre "sebep bulundu" diye gitti.
    📌 `uret_petek.py:devir_kumesi()` bunu zaten yapıyordu; alet motorun
    bildiği bir şeyi bilmiyordu.
    """
    kur = y.get("kur")
    bit = y.get("bit")
    if kur and g < kur:
        return False
    if bit and g >= bit:
        return False
    return True


def sahip(y, g):
    """Yerleşimin `g` günündeki sahibi. (motorun d/v/s sırası)"""
    if not var_mi(y, g):
        return None
    for p in y.get("d") or []:
        if p["f"] <= g < p["t"]:
            return "OSMANLI"
    for p in y.get("v") or []:
        if p["f"] <= g < p["t"]:
            return "OSMANLI(tâbi)"
    for p in y.get("s") or []:
        if p["f"] <= g < p["t"]:
            return p.get("d") or "?"
    return None


def olc(Y, lat, lon, gun, n=10, yaricap=450.0):
    cevre = []
    yok = 0
    for y in Y:
        d = girdi.km(lat, lon, y["lat"], y["lon"])
        if d > yaricap:
            continue
        # 🔴 O gün SAHNEDE OLMAYAN nokta komşu DEĞİLDİR — "sahipsiz" de
        # değildir, YOKTUR. İkisini karıştırmak aletin ilk üç teşhisini
        # bozdu (bkz. var_mi). Motor onun peteğini komşusuna devrediyor.
        if not var_mi(y, gun):
            yok += 1
            continue
        cevre.append((d, y))
    cevre.sort(key=lambda t: t[0])
    if yok:
        print(f"   (o gün henüz kurulmamış / yok olmuş {yok} nokta "
              f"komşuluktan ÇIKARILDI — kur:/bit:)")

    print(f"\n{'='*74}")
    print(f"NOKTA  {lat:.4f} K · {lon:.4f} D     GÜN  {gun}")
    print(f"{'='*74}")
    if not cevre:
        print(f"🔴 {yaricap:.0f} km içinde HİÇ yerleşim yok — "
              f"boşluğun sebebi NOKTASIZLIK (CLAUDE.md §2).")
        return

    print(f"\n① EN YAKIN {min(n, len(cevre))} YERLEŞİM "
          f"({yaricap:.0f} km içinde toplam {len(cevre)})")
    print(f"   {'km':>7}  {'yerleşim':26s} {'sahip':18s} {'k':>2} "
          f"{'A1':>5}  tavan")
    for d, y in cevre[:n]:
        s = sahip(y, gun)
        k = y.get("k") or 0
        tv = TAVAN_KM.get(k, TAVAN_KM[0])
        yet = "YETİŞİR" if d <= tv else f"yetişmez ({d - tv:+.0f})"
        print(f"   {d:7.1f}  {y['ad'][:26]:26s} {str(s or '—')[:18]:18s} "
              f"{k:2d} {tv:5.0f}  {yet}")

    # ② EMRE'NİN PUANI — devlet devlet
    print(f"\n② EMRE'NİN PUANI  (0-200=4p · 200-300=2p · 300-400=1p · "
          f"eşik {PUAN_ESIK})")
    puan = {}
    katki = {}
    for d, y in cevre:
        s = sahip(y, gun)
        if s is None:
            continue
        p = 0
        once = 0.0
        for e, pu in PUAN_HALKA:
            if once <= d < e:
                p = pu
                break
            once = e
        if p:
            puan[s] = puan.get(s, 0) + p
            katki.setdefault(s, []).append((d, y["ad"], p))
    if not puan:
        print("   🔴 400 km içinde SAHİPLİ tek bir merkez yok — puan 0.")
    for s, p in sorted(puan.items(), key=lambda t: -t[1]):
        im = "✅ EŞİĞİ GEÇER" if p >= PUAN_ESIK else "❌ eşiğin altında"
        print(f"   {s:20s} {p:4d} puan   {im}")
        for d, ad, pu in sorted(katki[s])[:4]:
            print(f"        {d:7.1f} km  {ad[:30]:30s} +{pu}")

    # ③ A1 TAVANI
    print(f"\n③ A1 YARIÇAP TAVANI  (k1=700 · k2=420 · k3=280 · k4=140 · k0=280)")
    yetisen = [(d, y, TAVAN_KM.get(y.get("k") or 0, TAVAN_KM[0]))
               for d, y in cevre
               if d <= TAVAN_KM.get(y.get("k") or 0, TAVAN_KM[0])]
    yetisen_sahipli = [(d, y, tv) for d, y, tv in yetisen if sahip(y, gun)]
    print(f"   tavanı buraya yetişen nokta: {len(yetisen)} "
          f"(sahipli olan: {len(yetisen_sahipli)})")
    for d, y, tv in yetisen_sahipli[:6]:
        print(f"        {d:7.1f} km ≤ {tv:3.0f}   {y['ad'][:28]:28s} "
              f"{sahip(y, gun)}")

    # ④ HÜKÜM
    print(f"\n④ TEŞHİS")
    gecen = [s for s, p in puan.items() if p >= PUAN_ESIK]

    # 🔴 EN YAKIN NOKTA SAHİPSİZSE, PETEK ONUNDUR VE BOŞLUK ORADAN DOĞAR.
    # Bu dal ölçümden SONRA eklendi: aletin ilk koşusu (H-0016, Yenbu-Tebük)
    # "boyanıyor olmalı" dedi, oysa en yakın nokta 201,7 km'deki SAHİPSİZ
    # Teymâ'ydı ve boşluğu o açıyordu. Yani hüküm dalı, ölçtüğü şeyi
    # sormuyordu — `CLAUDE.md §11`: "denetim var ≠ o soruyu soruyor".
    en_d, en_y = cevre[0]
    en_s = sahip(en_y, gun)
    if en_s is None:
        bayrak = en_y.get("kasitli_bosluk")
        cins = en_y.get("bos") or "(cins YAZILMAMIŞ)"
        print(f"   🔴 EN YAKIN NOKTA SAHİPSİZ: {en_y['ad']} · {en_d:.1f} km")
        print(f"      kasitli_bosluk={'EVET' if bayrak else 'hayır'} · "
              f"bos={cins}")
        print(f"      ⇒ Voronoi peteği ONUN, ve sahibi yok ⇒ BOŞLUK BURADAN.")
        if gecen:
            print(f"      ⚠️ VE ÇELİŞKİ: Emre'nin puanı {gecen} için eşiği "
                  f"GEÇİYOR ({max(puan.values())}p)")
            print(f"         ama puanlama kapısı toprak EKLEYEMEZ — "
                  f"uret_petek.py:3568 bir KESİŞİM.")
            print(f"         ⇒ Kapı 'burası kimsenin mi' diye SORUYOR, "
                  f"cevabı sahiplik ATAMASINDA kullanılmıyor.")
        if bayrak:
            print(f"      📌 Ama bu boşluk KASITLI — kayıt öyle diyor. "
                  f"Hüküm Emre'nin: dolgu kalsın mı, kalkıp puanlamaya mı "
                  f"bıraksın.")
        return

    if not yetisen_sahipli and gecen:
        print(f"   🔴 ÇELİŞKİ: Emre'nin puanı {gecen} için EŞİĞİ GEÇİYOR,")
        print(f"      ama HİÇBİR sahipli noktanın A1 tavanı buraya yetişmiyor.")
        print(f"      ⇒ Boşluğu açan şey PUANLAMA DEĞİL, A1 YARIÇAP TAVANI.")
        print(f"      ⇒ Ve puanlama kapısı bunu KAPATAMAZ: kapı bir KESİŞİM")
        print(f"        (uret_petek.py:3568) — gövdeyi yalnız küçültür.")
    elif not yetisen_sahipli and not gecen:
        print(f"   ⚪ Ne puan eşiği geçiliyor ne tavan yetişiyor —")
        print(f"      boşluk İKİ ÖLÇÜTE GÖRE DE doğru. Sebep: NOKTASIZLIK.")
    elif yetisen_sahipli and not gecen:
        print(f"   🟡 Tavan yetişiyor ama puan eşiği geçilmiyor.")
    else:
        print(f"   🟢 Hem tavan yetişiyor hem puan geçiyor — burası "
              f"BOYANIYOR olmalı.")
        print(f"      Boşluk görünüyorsa sebep başka: rakip petek sahipliği,")
        print(f"      kara maskesi ya da GÖRSEL BAYAT (§11).")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--lat", type=float)
    ap.add_argument("--lon", type=float)
    ap.add_argument("--gun", default="1650-06-15")
    ap.add_argument("--n", type=int, default=10)
    ap.add_argument("--yaricap", type=float, default=450.0)
    ap.add_argument("--sabit-dogrula", action="store_true")
    a = ap.parse_args()

    if a.sabit_dogrula:
        print("SABİT DOĞRULAMA — uret_petek.py'ye karşı")
        sys.exit(0 if sabit_dogrula() else 1)

    if a.lat is None or a.lon is None:
        ap.error("--lat ve --lon zorunlu (ya da --sabit-dogrula)")

    Y = girdi.yukle(sessiz=True)
    print(f"evren: {len(Y)} nokta ({len(girdi.GIRDI_DOSYALARI)} girdi dosyası)")
    olc(Y, a.lat, a.lon, a.gun, a.n, a.yaricap)


if __name__ == "__main__":
    main()
