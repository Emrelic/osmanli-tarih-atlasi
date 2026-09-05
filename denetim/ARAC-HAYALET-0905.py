# -*- coding: utf-8 -*-
"""HAYALET DEVLET NÖBETÇİSİ — `CLAUDE.md §3.5`in dördüncü değişmezi.

SORU: *veri, künyenin ÖLMEDİĞİ (ya da HENÜZ DOĞMADIĞI) bir günde o kimliği
kullanıyor mu?*

🔴 NİÇİN YENİ BİR ALET — `denetle.py`de ZATEN bir `Değişmez 4` var, ve o
   ÇALIŞIYOR. Ama EVRENİ DAR: `denetle.py:1782` yalnız `y.get("s")`
   üzerinde döner. Ölçüldü — `isg:` alanı da KİMLİK TAŞIYOR:
       isg:[{f:"1737-07-01", t:"1737-10-01", d:"avusturya", ...}]
   ⇒ İşgal dönemleri künye penceresine karşı HİÇ SINANMIYOR.
   Bu alet o boşluğu ölçmek için var; `denetle.py`nin yerine geçmez.
   📌 `CLAUDE.md §11`: *"denetim var ≠ o soruyu soruyor"* — burada soru
      doğru soruluyor ama YALNIZ BİR ALANDA.

🔴 TARİH KARŞILAŞTIRMASI DİZGİYLE YAPILMAZ. Bu projede 18 künye 3 HANELİ
   yıl taşıyor (`bizans 330` · `venedik 697` · `almanya 962` …) ve
   `"1281-01-01" < "962-02-02"` dizgi olarak **True** döner. Ölçülmüş bir
   tuzak (5 Eylül 2026, NEHİR SÜRTÜNME). Burada `datetime.date` kullanılır.

KULLANIM
    py denetim/ARAC-HAYALET-0905.py            # ölç ve raporla
    py denetim/ARAC-HAYALET-0905.py --sinav    # C13 dört ayak sınavı
    py denetim/ARAC-HAYALET-0905.py --ayrinti  # tam liste

🔴 DÜZELTME YAPMAZ. Salt okuma.
"""
import io
import os
import sys
from datetime import date

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
# 🔴 `sys.stdout` MODÜL DÜZEYİNDE SARILMAZ — uzlaştırma turunda ölçüldü:
#    bu satır burada olduğunda aleti `import` eden betiğin stdout'u
#    KAPANIYOR ("I/O operation on closed file"). Bir alet, import edilmekle
#    çağıranı bozmamalı. Sarma artık `main()` içinde.

UFUK_BAS = "1281-01-01"
UFUK_SON = "1923-10-29"
# Bölgesel teslim gecikmesi MEŞRUDUR (`§3.5`: Mekke'nin memlûk dönemi
# 1517-07-06'da biter, devlet 04-13'te yıkılmıştır). Aylar mertebesi normal,
# YILLAR mertebesi değil. `denetle.py` 400 gün kullanıyor; aynısını alıyorum
# ki iki alet AYNI eşikle konuşsun.
TOLERANS_GUN = 400
ALANLAR = ("d", "s", "v", "isg")


def _gun(s):
    """ISO dizgisini GERÇEK tarihe çevirir. 3 haneli yıl da doğru okunur."""
    if not s:
        return None
    p = str(s).split("-")
    try:
        return date(int(p[0]), int(p[1]) if len(p) > 1 else 1,
                    int(p[2]) if len(p) > 2 else 1)
    except (ValueError, IndexError):
        return None


def kunye_penceresi():
    """{id: (f_date, t_date)} — künye penceresi.

    ⚠️ C13 ④: dönüşün BİÇİMİNİ varsaymıyorum, ÖLÇÜYORUM ve basıyorum.
    """
    import girdi
    ham = girdi.oku_devletler()
    print("  girdi.oku_devletler() → %s · uzunluk %d"
          % (type(ham).__name__, len(ham)))
    kayitlar = ham.values() if isinstance(ham, dict) else ham
    ilk = next(iter(kayitlar), None)
    print("  bir öğenin biçimi: %s · anahtarlar: %s"
          % (type(ilk).__name__,
             sorted(ilk.keys())[:9] if isinstance(ilk, dict) else "—"))
    pen = {}
    for d in kayitlar:
        if not isinstance(d, dict) or not d.get("id"):
            continue
        pen[d["id"]] = (_gun(d.get("f")), _gun(d.get("t")),
                        d.get("f"), d.get("t"))
    return pen


def olc(Y, pen):
    """Üç kova + künyesiz. Dönüş: (tam_disarida, tasan, sinir, kunyesiz, sayac)"""
    tam, tasan, sinir, kunyesiz = [], [], [], []
    sayac = {"donem": 0, "kimlikli": 0}
    for y in Y:
        ad = y.get("ad", "?")
        for alan in ALANLAR:
            for p in (y.get(alan) or []):
                sayac["donem"] += 1
                kim = p.get("d")
                if not kim:
                    continue          # `d:`/`v:` Osmanlı — kimlik taşımaz
                sayac["kimlikli"] += 1
                pf, pt = _gun(p.get("f")), _gun(p.get("t"))
                if pf is None or pt is None:
                    continue
                if kim not in pen:
                    kunyesiz.append((ad, alan, kim, p.get("f"), p.get("t")))
                    continue
                kf, kt, kfs, kts = pen[kim]
                if kf is None or kt is None:
                    continue
                # ⚪ SINIR İŞARETİ — pencere ucu bir ÖLÇÜM DEĞERİ değildir
                # 🔴 DÜZELTİLDİ (uzlaştırma turu): ilk sürümde bu bayrak
                #    KESİŞMEYEN dönemleri de yutuyordu ve ALTI GERÇEK
                #    HAYALETİ (hepsi `iran`, f:1281-01-01) ihlal dışına
                #    çıkarıyordu. `denetle.py` haklıydı: pencere-ucu
                #    muafiyeti ANA hayalet testine DEĞİL, yalnız
                #    "taşma" kovasına uygulanır (`:1805` `kt < ATLAS_SONU`,
                #    `:1812` `kf > ATLAS_BASI`).
                ucta = (p.get("f") == UFUK_BAS or p.get("t") == UFUK_SON
                        or kfs == UFUK_BAS or kts == UFUK_SON)
                # kesişim var mı
                # 🔴 DÜZELTİLDİ: `<=` yerine `<`. Bitişik dönem (biri
                #    künyenin doğduğu gün BİTİYOR) bir boşluk değil NORMAL
                #    DEVİRDİR. İlk sürüm Tenochtitlan ve Tlacopan'ı
                #    (aztek 1325→1428, künye 1428→) yanlışlıkla hayalet
                #    saydı; `denetle.py` saymıyor ve HAKLI.
                if pt < kf or pf > kt:
                    yil = (kf - pt).days / 365.25 if pt < kf \
                        else (pf - kt).days / 365.25
                    kayit = (ad, alan, kim, p.get("f"), p.get("t"),
                             kfs, kts, round(yil, 1))
                    tam.append(kayit)          # ← ucta OLSA BİLE ihlaldir
                    continue
                # kısmen taşıyor mu (tolerans dışı)
                on = (kf - pf).days
                arka = (pt - kt).days
                if on > TOLERANS_GUN or arka > TOLERANS_GUN:
                    yil = round(max(on, arka) / 365.25, 1)
                    kayit = (ad, alan, kim, p.get("f"), p.get("t"),
                             kfs, kts, yil)
                    (sinir if ucta else tasan).append(kayit)
    return tam, tasan, sinir, kunyesiz, sayac


def bas(baslik, kume, sinir_no=20):
    print("\n%s: %d" % (baslik, len(kume)))
    for k in sorted(kume, key=lambda x: -x[7])[:sinir_no]:
        print("   %-26s %-4s %-22s %s→%s   künye %s→%s   %6.1f yıl"
              % (k[0][:26], k[1], k[2][:22], k[3], k[4], k[5], k[6], k[7]))
    if len(kume) > sinir_no:
        print("   … %d tane daha (--ayrinti)" % (len(kume) - sinir_no))


def sinav():
    """C13 DÖRT AYAK — geçme · ateşleme · girdi · çıktı."""
    print("═══ C13 DÖRT AYAK SINAVI ═══")
    pen = {"hayali": (_gun("1500-01-01"), _gun("1600-01-01"),
                      "1500-01-01", "1600-01-01")}

    # ① GEÇME — kusursuz kayıtta SUSMALI
    temiz = [{"ad": "SINAV-TEMIZ",
              "s": [{"f": "1520-01-01", "t": "1580-01-01", "d": "hayali"}]}]
    t, ts, sn, kz, _ = olc(temiz, pen)
    g1 = (len(t) == 0 and len(ts) == 0 and len(sn) == 0 and len(kz) == 0)
    print("① GEÇME     temiz kayıt → tam %d · taşan %d · sınır %d · künyesiz %d  %s"
          % (len(t), len(ts), len(sn), len(kz), "✓" if g1 else "🔴 GEÇMEDİ"))

    # ② ATEŞLEME — üç dalın ÜÇÜ de ayrı ayrı ötmeli
    a = [{"ad": "SINAV-TAM", "s": [{"f": "1700-01-01", "t": "1750-01-01",
                                    "d": "hayali"}]}]
    t, _, _, _, _ = olc(a, pen)
    g2a = len(t) == 1
    print("② ATEŞLEME  (a) TAM DIŞARIDA  → %d  %s"
          % (len(t), "✓" if g2a else "🔴 ÖTMEDİ"))

    b = [{"ad": "SINAV-TASAN", "s": [{"f": "1550-01-01", "t": "1650-01-01",
                                      "d": "hayali"}]}]
    _, ts, _, _, _ = olc(b, pen)
    g2b = len(ts) == 1
    print("            (b) TAŞAN         → %d  %s"
          % (len(ts), "✓" if g2b else "🔴 ÖTMEDİ"))

    c = [{"ad": "SINAV-KUNYESIZ", "isg": [{"f": "1550-01-01", "t": "1560-01-01",
                                           "d": "OLMAYAN-KIMLIK"}]}]
    _, _, _, kz, _ = olc(c, pen)
    g2c = len(kz) == 1
    print("            (c) KÜNYESİZ (isg alanından!) → %d  %s"
          % (len(kz), "✓" if g2c else "🔴 ÖTMEDİ"))

    # ⚪ SINIR İŞARETİ — KESİŞEN ama ucu pencereye dayanan dönem
    # 🔴 BU SINAV UZLAŞTIRMA TURUNDA DEĞİŞTİ. Eski hâli KESİŞMEYEN bir
    #    dönemi ⚪ bekliyordu ve o beklenti YANLIŞTI — `denetle.py` ile
    #    karşılaştırma altı gerçek hayaletin (hepsi `iran`) benim ⚪ kovam
    #    tarafından yutulduğunu gösterdi. Sınav düzeltilen ANLAMA göre
    #    yeniden yazıldı. 📌 C13 tam bunun için var: anlam değişince sınav
    #    ÖTTÜ ve beklentiyi ben değil ALET düzeltti.
    d_ = [{"ad": "SINAV-SINIR", "s": [{"f": UFUK_BAS, "t": "1560-01-01",
                                       "d": "hayali"}]}]
    t, ts, sn, _, _ = olc(d_, pen)
    g2d = (len(sn) == 1 and len(t) == 0 and len(ts) == 0)
    print("            (d) KESİŞEN + ucu pencerede → sınır %d · ihlal %d  %s"
          % (len(sn), len(t) + len(ts), "✓" if g2d else "🔴 YANLIŞ KOVA"))

    # 🔴 (f) YENİ DAL — pencere ucu bir MUAFİYET DEĞİLDİR
    f_ = [{"ad": "SINAV-UC-AMA-HAYALET",
           "s": [{"f": UFUK_BAS, "t": "1200-01-01", "d": "hayali"}]}]
    t, ts, sn, _, _ = olc(f_, pen)
    g2f = (len(t) == 1 and len(sn) == 0)
    print("            (f) KESİŞMEYEN + ucu pencerede → İHLAL %d · sınır %d  %s"
          % (len(t), len(sn), "✓" if g2f else "🔴 ⚪ KOVASI YUTUYOR"))

    # 🔴 3 HANELİ YIL — dizgi karşılaştırması burada ÇÖKER
    pen2 = {"eski": (_gun("962-02-02"), _gun("1923-10-29"),
                     "962-02-02", "1923-10-29")}
    e = [{"ad": "SINAV-3HANE", "s": [{"f": "1281-01-01", "t": "1500-01-01",
                                      "d": "eski"}]}]
    t, ts, sn, _, _ = olc(e, pen2)
    g2e = (len(t) == 0 and len(ts) == 0)
    print("            (e) 3 HANELİ YIL (962) yanlış ötmüyor → ihlal %d  %s"
          % (len(t) + len(ts), "✓" if g2e else "🔴 DİZGİ TUZAĞINA DÜŞTÜ"))

    print("\n③ GİRDİ     gerçek dosyalardan okuma yolu aşağıdaki ANA KOŞUDA")
    print("④ ÇIKTI     `oku_devletler()` dönüşünün biçimi ANA KOŞUDA basılıyor")
    return all([g1, g2a, g2b, g2c, g2d, g2e, g2f])


def main():
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
    ayrinti = "--ayrinti" in sys.argv
    if "--sinav" in sys.argv:
        ok = sinav()
        print("\nSINAV: %s" % ("🟢 DÖRT AYAK DA GEÇTİ" if ok else "🔴 DÜŞTÜ"))
        return 0 if ok else 1

    print("═══ HAYALET DEVLET NÖBETÇİSİ ═══")
    import girdi
    # 🔴 ELLE DOSYA LİSTESİ YOK — tek otorite girdi.GIRDI_DOSYALARI
    print("  girdi.GIRDI_DOSYALARI: %d dosya" % len(girdi.GIRDI_DOSYALARI))
    Y = girdi.yukle(sessiz=True)
    print("  girdi.yukle() → %s · %d yerleşim" % (type(Y).__name__, len(Y)))
    pen = kunye_penceresi()
    print("  künye penceresi: %d kimlik" % len(pen))

    tam, tasan, sinir, kunyesiz, sayac = olc(Y, pen)
    print("\n  taranan dönem: %d · kimlik TAŞIYAN: %d  (alanlar: %s)"
          % (sayac["donem"], sayac["kimlikli"], " · ".join(ALANLAR)))

    n = 10 ** 6 if ayrinti else 20
    bas("🔴 TAM DIŞARIDA — dönem künye penceresiyle HİÇ kesişmiyor", tam, n)
    bas("🟡 TAŞAN — kısmen dışarıda (tolerans %d gün)" % TOLERANS_GUN, tasan, n)
    bas("⚪ SINIR İŞARETİ — pencere ucu · İHLAL SAYILMAZ", sinir, n)
    print("\n⚠️ KÜNYESİZ kimlik (künyede hiç yok): %d" % len(kunyesiz))
    for k in kunyesiz[:12]:
        print("   %-26s %-4s %s" % (k[0][:26], k[1], k[2]))

    # alan bazlı dağılım — `denetle.py`nin GÖRMEDİĞİ kova burada
    print("\n📌 ALAN BAZLI (ihlal = tam + taşan):")
    for alan in ALANLAR:
        a = sum(1 for k in tam + tasan if k[1] == alan)
        print("   %-4s %4d %s" % (alan, a,
              "← denetle.py BUNU TARIYOR" if alan == "s"
              else "← denetle.py'nin GÖRMEDİĞİ kova" if a else ""))
    return 0


if __name__ == "__main__":
    sys.exit(main())
