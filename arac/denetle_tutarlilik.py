# -*- coding: utf-8 -*-
"""
BELGE TUTARLILIĞI — aynı olayın tarihi kaç belgede geçiyor ve hepsi aynı mı?
============================================================================
Doğuran vaka (KOORDİNATÖR + ARABİSTAN, 2026-08-01): **Memlük Devleti'nin sonu
için üç farklı tarihimiz var ve üçü de kendi belgemiz.**

    devletler.js    t:"1517-01-22"     (Ridâniye günü)
    olaylar*.js       1517-02-15       ("hukuken sona erdiğinin ilânı")
    CLAUDE.md §3.5    1517-04-13       ("devletin gerçek sonu")

İkinci vaka aynı sınıf, başka belgelerde:

    olaylar*.js       1446-05-05       "Buçuktepe Vak'ası — II. Murad'ın dönüşü"
    padisahlar.js     1446-09          II. Murad'ın 2. saltanatının başlangıcı
                                       → 119 gün fark

⚠️ NEDEN MEVCUT DENETİMLERİN HİÇBİRİ BUNU GÖRMEZ
Hepsi **bir belgenin kendi içinde** tutarlı olup olmadığını sorar:
    Değişmez 1/2      yerlesimler.js ↔ olaylar
    anakronizm        yerlesimler.js ↔ devletler.js  (+ artık savaslar.js)
    savaş senkronu    savaslar.js    ↔ olaylar
Hiçbiri **iki belgenin aynı olay için yazdığı tarihi** karşılaştırmıyor.
Her belge kendi içinde tutarlı olabilir ve yine de birbirlerini yalanlarlar.

═══ EŞİK KOYMUYORUM — DAĞILIMI BASIYORUM ═══
Bu araç ilk turda **hüküm vermez**. Sebebi ölçülü: `padisahlar.js` AY
hassasiyetinde yazılmış (`1326-04`), kronoloji GÜN hassasiyetinde. Ay tarihi
ayın 1'ine genişler, yani gerçek gün 30 güne kadar sonrada olabilir. Bu
yapısal payı ölçmeden tolerans koymak, ±45'i tahminle koymanın aynısı olurdu.

ÇALIŞTIRMA
    py arac/denetle_tutarlilik.py
    py arac/denetle_tutarlilik.py --ayrinti
"""
import io
import os
import re
import sys

if getattr(sys.stdout, "encoding", "").lower() not in ("utf-8", "utf8"):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import denetle

HARF = "a-zçğıöşüâîû"

# ═══ KIYAS KAPSAMI — tolerans DEĞİL ═══
# 🔴 İLK KOŞU BU SABİT OLMADAN YAPILDI VE ARACIN KENDİ KUSURUNU GÖSTERDİ:
# "en yakın ilgili madde" penceresiz arandığında, ilgili madde HİÇ YOKKEN
# yüzlerce yıl uzaktaki bir madde eşleşme sanılıyordu —
#     Osman Gazi cülûs (1299-01) ↔ "I. Mustafa'nın hal'i" (1618-02)  +116.568 gün
# Osman Gazi'nin cülûsu için kronolojide madde YOK; araç bunu "319 yıl fark"
# diye ölçüm gibi raporladı. Bu, bu oturumda dört kez çıkan sınıfın ta kendisi:
# **ölçülemeyeni ölçülmüş gibi göstermek.** A'da 23, B'de 182 çift bu artefakttı.
#
# ⚠️ 366 bir TOLERANS değil, KIYAS KAPSAMIDIR: "bu iki belge aynı olaydan mı
# bahsediyor" sorusunun sınırı. İhlal eşiği bundan AYRI ve kapsam içi
# dağılımdan ölçülecek. İkisini karıştırmak, kapsamı gevşetip "temiz" almak
# demek olurdu.
KIYAS_KAPSAMI = 366

# Cülûs/hal maddesini ayırt eden kökler. ⚠️ Kök listesi ÖLÇÜLEREK büyütülmeli;
# eksik kök, maddeyi "yok" göstererek SAHTE bulgu üretir — yani bu listenin
# eksikliği veriyi değil ARACI suçlar.
# 🔴 İLK LİSTE EKSİKTİ VE TAM UYARDIĞIM ŞEKİLDE YANILTTI: "tahta dönüş"
# yoktu, bu yüzden II. Murad'ın 1446 cülûsu — bu denetimi DOĞURAN iki vakadan
# biri — "kapsam içinde madde YOK" diye raporlandı. Oysa madde duruyor:
# `1446-05-05 "Buçuktepe Vak'ası — II. Murad'ın tahta dönüşü"`.
# Yani araç, aradığı vakayı kendi sözlük eksiği yüzünden görmedi.
CULUS_KOK = ("cülûs", "culus", "tahta çık", "tahta geç", "saltanat",
             "hükümdar old", "padişah old", "cülus", "tahta dön", "tahta geri",
             "yeniden tahta", "tahta oturt", "tahta çıkarıl", "ikinci kez tahta")
HAL_KOK = ("hal'", "hal edil", "tahttan indir", "vefat", "ölüm", "öldür",
           "katl", "şehid", "azl", "indirildi", "tahttan çekil", "ölümü")


def _sadelestir(s):
    return (s or "").lower()


def _gecen_mi(metin, kokler):
    m = _sadelestir(metin)
    return any(k in m for k in kokler)


def _ad_kokleri(ad):
    """'II. Murad (Koca)' → {'murad'} gibi anlamlı ad kökleri."""
    t = re.sub(r"\(.*?\)", " ", ad or "")
    t = re.sub(r"\b[IVX]+\.", " ", t)
    out = set()
    for w in re.split(r"[^%s]+" % HARF, t.lower()):
        if len(w) >= 4 and w not in ("gazi", "sultan", "efendi", "çelebi",
                                     "hüdavendigâr", "yıldırım", "fatih",
                                     "yavuz", "kanuni", "genç", "avci", "avcı",
                                     "deli", "sarı", "koca"):
            out.add(w)
    return out


def _anar_mi(baslik, kokler):
    b = _sadelestir(baslik)
    return any(re.search("(?<![%s])%s" % (HARF, re.escape(k)), b) for k in kokler)


def padisah_tutarliligi(P, O):
    """Her saltanat sınırı için en yakın ilgili maddeyi bulur.

    Döner: (kayit_listesi, olculemeyen) — kayit: (ad, yon, belge_tarihi,
    madde_tarihi, fark_gun, madde_basligi)
    """
    ol = [(denetle.gun_no(denetle.tam(o["t"])), o.get("b", ""), o["t"]) for o in O]
    kayit, olculemeyen = [], []
    for p in P:
        adk = _ad_kokleri(p.get("ad", ""))
        if not adk:
            olculemeyen.append((p.get("ad", ""), "ad kökü çıkarılamadı"))
            continue
        for yon, alan, kokler in (("cülûs", "from", CULUS_KOK),
                                  ("hal/vefat", "to", HAL_KOK)):
            t = p.get(alan)
            if not t:
                continue
            g = denetle.gun_no(denetle.tam(t))
            aday = [(abs(og - g), og, b, ot) for og, b, ot in ol
                    if _anar_mi(b, adk) and _gecen_mi(b, kokler)
                    and abs(og - g) <= KIYAS_KAPSAMI]
            if not aday:
                olculemeyen.append(("%s %s" % (p.get("ad", ""), yon),
                                    "kapsam içinde ilgili madde YOK"))
                continue
            aday.sort()
            fark, og, b, ot = aday[0]
            kayit.append((p.get("ad", ""), yon, t, ot, og - g, b))
    return kayit, olculemeyen


def devlet_tutarliligi(D, O):
    """`devletler.js`'in f:/t: tarihleri ↔ o devleti anan kuruluş/yıkılış maddesi."""
    ol = [(denetle.gun_no(denetle.tam(o["t"])), o.get("b", ""), o["t"]) for o in O]
    kayit, olculemeyen = [], []
    KUR = ("kuruluş", "kurulu", "kuruldu", "ilân", "ilan")
    YIK = ("yıkıl", "son", "sona er", "ilhak", "ortadan kalk", "fetih", "teslim")
    for d in D:
        ad = d.get("ad") or ""
        adk = {w for w in re.split(r"[^%s]+" % HARF, ad.lower()) if len(w) >= 5}
        if not adk:
            continue
        for yon, alan, kokler in (("kuruluş", "f", KUR), ("yıkılış", "t", YIK)):
            t = d.get(alan)
            if not t or len(t) < 7:
                continue
            try:
                g = denetle.gun_no(denetle.tam(t[:10]))
            except Exception:
                continue
            aday = [(abs(og - g), og, b, ot) for og, b, ot in ol
                    if _anar_mi(b, adk) and _gecen_mi(b, kokler)
                    and abs(og - g) <= KIYAS_KAPSAMI]
            if not aday:
                olculemeyen.append(("%s %s" % (ad, yon), "kapsam içinde madde yok"))
                continue
            aday.sort()
            fark, og, b, ot = aday[0]
            kayit.append((ad, yon, t, ot, og - g, b))
    return kayit, olculemeyen


def _dagilim(kayit, baslik):
    print("\n  %s — %d ölçülebilen çift" % (baslik, len(kayit)))
    if not kayit:
        return
    farklar = sorted(abs(k[4]) for k in kayit)
    for alt, ust in ((0, 1), (1, 8), (8, 31), (31, 46), (46, 92), (92, 366), (366, 10**9)):
        n = sum(1 for f in farklar if alt <= f < ust)
        if n:
            print("     %4d – %-6s gün : %3d çift" % (alt, ust if ust < 10**8 else "∞", n))
    print("     medyan %d gün · en büyük %d gün" % (farklar[len(farklar)//2], farklar[-1]))


def main():
    ayrinti = "--ayrinti" in sys.argv
    print("Belge tutarlılığı — aynı olayın tarihi belgeler arasında aynı mı?\n")
    print("  ⚠️ BU TURDA HÜKÜM YOK, DAĞILIM VAR. Tolerans ölçülmeden konmaz;")
    print("     padisahlar.js AY hassasiyetinde, kronoloji GÜN — yapısal pay")
    print("     ölçülmeden ±45 gibi bir sayı tahminden ibaret olurdu.\n")

    O = denetle.olaylari_yukle()
    P = denetle.oku_pencere(os.path.join(denetle.DATA, "padisahlar.js"), "PADISAHLAR")
    print("  %d madde · %d saltanat kaydı" % (len(O), len(P)))

    # --- A) padisahlar.js ↔ olaylar ---------------------------------------
    kayit, olculemeyen = padisah_tutarliligi(P, O)
    print("\n=== A) PADİŞAHLAR ↔ KRONOLOJİ ===")
    _dagilim(kayit, "saltanat sınırı ↔ en yakın cülûs/hal maddesi")
    # ⚠️ ÖLÇÜLEMEYEN AYRI RAPORLANIR. "0 ihlal" ile "0 ölçülebilen" aynı şey
    # değildir; bu ayrım bugün dört kez denetimi yanlış ✓ vermekten kurtardı.
    print("\n  ölçülemeyen: %d" % len(olculemeyen))
    for a, sebep in (olculemeyen if ayrinti else olculemeyen[:8]):
        print("     %-42s %s" % (a[:42], sebep))
    if not ayrinti and len(olculemeyen) > 8:
        print("     … %d satır daha (--ayrinti)" % (len(olculemeyen) - 8))

    buyuk = sorted((k for k in kayit if abs(k[4]) > 31), key=lambda k: -abs(k[4]))
    print("\n  31 GÜNDEN BÜYÜK FARK (ay hassasiyetinin açıklayamadığı): %d" % len(buyuk))
    for ad, yon, bt, ot, fark, b in (buyuk if ayrinti else buyuk[:12]):
        print("     %-30s %-10s belge:%-10s madde:%-10s %+5dg  %s"
              % (ad[:30], yon, bt, ot, fark, b[:34]))

    # --- B) devletler.js ↔ olaylar ----------------------------------------
    try:
        import denetle_anakronizm as A
        D = A.oku_devletler()
    except Exception as e:
        print("\n=== B) DEVLETLER ↔ KRONOLOJİ — OKUNAMADI: %s" % str(e)[:60])
        return 0
    kayit2, olculemeyen2 = devlet_tutarliligi(D, O)
    print("\n=== B) DEVLETLER ↔ KRONOLOJİ — %d devlet kaydı ===" % len(D))
    _dagilim(kayit2, "devlet f:/t: ↔ en yakın kuruluş/yıkılış maddesi")
    print("\n  ölçülemeyen (ilgili madde yok): %d" % len(olculemeyen2))
    print("  ⚠️ Bu sayı BÜYÜK olacak ve bu BEKLENEN: 241 devletin çoğunun")
    print("     kronolojide kuruluş/yıkılış maddesi yok. Ölçüt burada")
    print("     'madde eksik' demiyor, 'kıyaslayacak ikinci belge yok' diyor.")

    print("\nSONUÇ: ölçüm turu — ihlal kademesi YOK, eşik bir sonraki turda konur.")
    return 0


if __name__ == "__main__":
    sys.exit(main() or 0)
