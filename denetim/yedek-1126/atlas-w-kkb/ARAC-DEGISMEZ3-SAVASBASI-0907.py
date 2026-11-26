# -*- coding: utf-8 -*-
"""DEGISMEZ3-0907 ⑳ — MEKANİZMANIN İKİNCİ UCU: `savas_basi` taşıyan 28 kayıt.

ÖLÇÜLEN UÇ (önceki tur) : 8 açığın **0'ı** `savas_basi` taşıyor
VARSAYILAN UÇ (bu tur)  : 28 `savas_basi` kaydının **hepsi senkron mu?**
`§3.5.1`: *bir hüküm önerildiğinde İKİ UÇ DA ölçülür.*

╔═ ÖNGÖRÜ — ÖLÇÜMDEN ÖNCE, MAZERETİYLE ════════════════════════════════╗
 ① 28/28 SENKRON.  🔴 MAZERET YOK.
    (Açık liste 8 ve hiçbiri `savas_basi` taşımıyor ⇒ mantıken çıkıyor;
     ama ÇIKARIM ile ÖLÇÜM ayrı şeydir — bugün kendi `ad` kusurumda
     görüldü. Doğrudan sayılıyor, anahtar **(t, ad)**.)
 ② 🔴 ASIL SINAV — MESAFE: mekanizmam *"alanı yazan kişi maddeyi de
    yazmış"* diyorsa, 28'in maddeye uzaklığı `savas_basi` TAŞIMAYAN
    143 kayıttan **belirgin KÜÇÜK** olmalı.
    Beklenen: taşıyan medyan **0-1 gün** · taşımayan medyan **daha büyük**.
    MAZERET: örneklem küçük (28 ↔ 143), fark BELİRGİN olmayabilir —
    ama **YÖN tutmalı**. Yön ters çıkarsa mekanizma ÇÜRÜR.
 ③ KAPSAM KOVASI: `t` taşımayan kayıt `savas_senkronu`da SESSİZCE
    atlanıyor (`:2833`) ⇒ o kayıtlar "senkron" DEĞİL "ölçülmemiş"tir.
    Ayrı sayılıyor.
 ÖLÇÜM: `denetle.savas_senkronu` + `gun_no`/`tam`, birim GÜN.
╚══════════════════════════════════════════════════════════════════════╝
"""
import io
import json
import os
import statistics
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import denetle  # noqa: E402

P = denetle.SAVAS_PENCERE
O = denetle.olaylari_yukle()
S = denetle.oku_pencere(os.path.join(KOK, "data", "savaslar.js"), "SAVASLAR")
n_top, ayk = denetle.savas_senkronu(S, O)

# 🔴 ANAHTAR (t, ad) — bugün kendi bulduğum kusur
ACIK = {(a[0], a[1]) for a in ayk}

ol = []
for o in O:
    try:
        ol.append(denetle.gun_no(denetle.tam(o["t"])))
    except Exception:
        pass


def mesafe(r):
    try:
        g = denetle.gun_no(denetle.tam(r["t"]))
    except Exception:
        return None
    return min(abs(og - g) for og in ol)


print("=" * 76)
print("MEKANİZMANIN İKİNCİ UCU — `savas_basi` taşıyan kayıtlar")
print("=" * 76)
print("SAVASLAR %d · madde %d · pencere ±%d · Ⓐ açık %d"
      % (len(S), len(O), P, len(ayk)))

basli, bassiz, kapsam_disi = [], [], []
for r in S:
    if not r.get("t"):
        kapsam_disi.append(r.get("ad", "?"))
        continue
    (basli if r.get("savas_basi") else bassiz).append(r)

print("\n[KÜME]")
print("  `savas_basi` TAŞIYAN  : %d" % len(basli))
print("  taşımayan             : %d" % len(bassiz))
print("  `t` yok (KAPSAM DIŞI) : %d %s" % (len(kapsam_disi), kapsam_disi[:4]))

# ── ① 28/28 SENKRON MU — DOĞRUDAN SAYIM, çıkarım DEĞİL ──────────────
b_acik = [r for r in basli if (r["t"], r.get("ad")) in ACIK]
s_acik = [r for r in bassiz if (r["t"], r.get("ad")) in ACIK]
print("\n[① SENKRON — anahtar (t, ad) ile DOĞRUDAN sayıldı]")
print("  `savas_basi` taşıyan  : %d senkron / %d açık"
      % (len(basli) - len(b_acik), len(b_acik)))
print("  taşımayan             : %d senkron / %d açık"
      % (len(bassiz) - len(s_acik), len(s_acik)))
if b_acik:
    print("  🔴 AÇIK OLAN `savas_basi` KAYITLARI:")
    for r in b_acik:
        print("     %s  %s" % (r["t"], r.get("ad")))
o1 = not b_acik
print("  ⇒ ÖNGÖRÜ ①: %s" % ("TUTTU ✓ (%d/%d senkron)" % (len(basli), len(basli))
                             if o1 else "🔴 ÇÜRÜDÜ — mazeret YOK"))

# ── ② MESAFE — mekanizmanın ASIL sınavı ─────────────────────────────
mb = [m for m in (mesafe(r) for r in basli) if m is not None]
ms = [m for m in (mesafe(r) for r in bassiz) if m is not None]
print("\n[② MESAFE — maddeye en yakın uzaklık, GÜN]")


def ozet(v, ad):
    if not v:
        print("  %-22s (boş)" % ad)
        return None
    v = sorted(v)
    print("  %-22s n=%3d  medyan %5.1f  ortalama %6.1f  0 gün olan %d (%%%.0f)"
          % (ad, len(v), statistics.median(v), sum(v) / len(v),
             v.count(0), 100.0 * v.count(0) / len(v)))
    return statistics.median(v)


med_b = ozet(mb, "`savas_basi` TAŞIYAN")
med_s = ozet(ms, "taşımayan")
o2 = med_b is not None and med_s is not None and med_b <= med_s
print("  ⇒ ÖNGÖRÜ ② (yön: taşıyan ≤ taşımayan): %s"
      % ("TUTTU ✓" if o2 else "🔴 ÇÜRÜDÜ — MEKANİZMA TERS"))
if med_b is not None and med_s is not None:
    print("     fark: medyan %+.1f gün" % (med_b - med_s))
    belirgin = med_s - med_b >= 1
    print("     belirgin mi (≥1 gün): %s" % ("EVET" if belirgin else
                                             "HAYIR — yön tuttu, GÜÇ zayıf"))

print("\n" + "=" * 76)
print("HÜKÜM")
print("=" * 76)
if o1 and o2:
    print("🟢 MEKANİZMA İKİ UÇTAN DA DESTEKLENDİ:")
    print("   ① `savas_basi` taşıyanların %d/%d'i senkron" % (len(basli), len(basli)))
    print("   ② ve maddeye mesafeleri taşımayanlardan KÜÇÜK")
    print("   ⇒ önerim (*8 açığa `savas_basi` yaz*) DAYANAK KAZANDI.")
elif o1 and not o2:
    print("🟡 MEKANİZMA ZAYIFLADI: senkron tuttu ama MESAFE deseni yok.")
    print("   ⇒ 'alan varlığı senkronu GARANTİ ETMİYOR' — öneri DÜŞER.")
else:
    print("🔴 MEKANİZMA ÇÜRÜDÜ.")

json.dump({"_NOT": ("Mekanizmanın ikinci ucu. Anahtar (t, ad). Öngörü "
                    "ölçümden ÖNCE docstring'e yazıldı, mazeretiyle."),
           "pencere": P,
           "kume": {"savas_basi_tasiyan": len(basli), "tasimayan": len(bassiz),
                    "t_yok_kapsam_disi": kapsam_disi},
           "senkron": {"basli_acik": [(r["t"], r.get("ad")) for r in b_acik],
                       "bassiz_acik": [(r["t"], r.get("ad")) for r in s_acik]},
           "mesafe": {"basli_medyan": med_b, "bassiz_medyan": med_s,
                      "basli_n": len(mb), "bassiz_n": len(ms),
                      "basli_sifir": mb.count(0) if mb else 0,
                      "bassiz_sifir": ms.count(0) if ms else 0},
           "ongoru": {"bir_senkron": o1, "iki_mesafe_yonu": o2}},
          open(os.path.join(KOK, "denetim", "OLCUM-DEGISMEZ3-SAVASBASI-0907.json"),
               "w", encoding="utf-8", newline=""), ensure_ascii=False, indent=1)
print("\n[YAZILDI] denetim/OLCUM-DEGISMEZ3-SAVASBASI-0907.json")
