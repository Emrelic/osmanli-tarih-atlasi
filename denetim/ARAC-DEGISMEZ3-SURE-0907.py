# -*- coding: utf-8 -*-
"""DEGISMEZ3-0907 ㉒ — `SAVASLAR`ın `sure`/`bitis` alanları: BAŞLANGIÇ TÜRETİLEBİLİR Mİ?

🔴 ALAN SÖZLEŞMESİ ÖLÇÜMÜ BENİM KENDİ HÜKMÜMÜ SARSTI:
   Dedim ki: *"`SAVASLAR` şemasında başlangıç alanı HİÇ YOK"*
   Ölçüm gösterdi: `SAVASLAR`ın **kendine özgü** alanları
       bitis · galip · seri · sure
   ⇒ `sure` varsa başlangıç ≈ `t` − `sure` diye TÜRETİLEBİLİR;
     `bitis` varsa `t` zaten başlangıç OLABİLİR.
   ⇒ Koordinatörün *"`SAVASLAR`a alan EKLENMİYOR"* hükmünün gerekçesi
     (*"alan yok"*) yanlış olabilir — alan VAR, BAŞKA ADLA.

ÖLÇÜLEN:
  ① `sure` ve `bitis` kaç kayıtta, ve BİÇİMLERİ ne (gün? metin?)
  ② 8 AÇIĞIN kaçında var
  ③ türetilebilir mi: `t` − `sure` bir tarih veriyor mu
"""
import io
import json
import os
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import denetle  # noqa: E402

O = denetle.olaylari_yukle()
S = denetle.oku_pencere(os.path.join(KOK, "data", "savaslar.js"), "SAVASLAR")
n_top, ayk = denetle.savas_senkronu(S, O)
ACIK = {(a[0], a[1]) for a in ayk}          # anahtar (t, ad) — kendi kusurum

print("=" * 76)
print("`SAVASLAR` — `sure` ve `bitis` alanları")
print("=" * 76)
sure = [r for r in S if r.get("sure")]
bitis = [r for r in S if r.get("bitis")]
print("  kayıt %d · `sure` taşıyan %d · `bitis` taşıyan %d"
      % (len(S), len(sure), len(bitis)))

print("\n[① BİÇİM — `sure` değerleri]")
ornekler = sorted({str(r["sure"]) for r in sure})
print("  benzersiz değer: %d" % len(ornekler))
for v in ornekler[:14]:
    print("    %s" % v)
tipler = {}
for r in sure:
    tipler[type(r["sure"]).__name__] = tipler.get(type(r["sure"]).__name__, 0) + 1
print("  tipler: %s" % tipler)

print("\n[① BİÇİM — `bitis` değerleri]")
b_ornek = sorted({str(r["bitis"]) for r in bitis})
print("  benzersiz değer: %d" % len(b_ornek))
for v in b_ornek[:8]:
    print("    %s" % v)

print("\n[② 8 AÇIĞIN DURUMU]")
acik_kayit = [r for r in S if (r["t"], r.get("ad")) in ACIK]
n_s = n_b = 0
for r in acik_kayit:
    s_v, b_v = r.get("sure"), r.get("bitis")
    if s_v:
        n_s += 1
    if b_v:
        n_b += 1
    print("  %-26s t:%s  sure:%-12s bitis:%s"
          % (str(r.get("ad"))[:26], r["t"], str(s_v or "—")[:12], b_v or "—"))
print("  ⇒ 8 açığın `sure` taşıyanı: %d · `bitis` taşıyanı: %d" % (n_s, n_b))

print("\n[③ TÜRETİLEBİLİRLİK]")
if not sure:
    print("  `sure` hiç yok — türetme YOK")
else:
    sayisal = [r for r in sure if isinstance(r["sure"], (int, float))]
    print("  `sure` SAYISAL olan : %d / %d" % (len(sayisal), len(sure)))
    if len(sayisal) < len(sure):
        print("  ⇒ 🔴 `sure` SERBEST METİN — `t` − `sure` aritmetiği")
        print("    YAPILAMAZ; önce ayrıştırılması gerekir.")
    else:
        print("  ⇒ 🟢 sayısal, türetme mümkün")

print("\n" + "=" * 76)
print("HÜKÜM")
print("=" * 76)
if not sure and not bitis:
    print("🟢 Kendi hükmüm AYAKTA: başlangıç alanı gerçekten yok.")
elif n_s or n_b:
    print("🔴 KENDİ HÜKMÜM SARSILDI: 8 açığın %d'inde `sure`/`bitis` VAR"
          % max(n_s, n_b))
    print("   ⇒ koordinatörün 'alan yok' gerekçesi YENİDEN ÖLÇÜLMELİ")
else:
    print("🟡 ALAN VAR ama AÇIKLARDA YOK: `sure` %d · `bitis` %d kayıtta,"
          % (len(sure), len(bitis)))
    print("   8 açığın hiçbirinde yok ⇒ hükmün SONUCU değişmiyor,")
    print("   ama GEREKÇESİ değişiyor: 'alan yok' DEĞİL,")
    print("   'alan var ama tam da gereken yerde yok'.")
    print("   📌 Bu, `savas_basi` deseninin BİREBİR tekrarı — üçüncü kez.")

json.dump({"_NOT": "SAVASLAR sure/bitis ölçümü — kendi hükmümü sınıyorum.",
           "kayit": len(S), "sure_tasiyan": len(sure),
           "bitis_tasiyan": len(bitis),
           "sure_ornekleri": ornekler[:30], "bitis_ornekleri": b_ornek[:20],
           "acikta_sure": n_s, "acikta_bitis": n_b,
           "acik_kayitlar": [{"ad": r.get("ad"), "t": r["t"],
                              "sure": r.get("sure"), "bitis": r.get("bitis")}
                             for r in acik_kayit]},
          open(os.path.join(KOK, "denetim", "OLCUM-DEGISMEZ3-SURE-0907.json"),
               "w", encoding="utf-8", newline=""), ensure_ascii=False, indent=1)
print("\n[YAZILDI] denetim/OLCUM-DEGISMEZ3-SURE-0907.json")
