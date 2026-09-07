# -*- coding: utf-8 -*-
"""ENKLAV-0907 — C-hakiki yamasının ÖN SINAVI.

🔴 ARACI KOŞTURUR, TAKLİT ETMEZ (şartname §②d).
   `denetle.degismez7(Y)` doğrudan çağrılıyor — eşik, kova yapısı ve
   muafiyet mantığı aletin KENDİSİNDEN geliyor. Bir aleti taklit eden
   ölçüm onun eşiğini VE kova yapısını taşımak zorundadır (`§11`); en
   ucuzu taşımamak değil, ALETİ ÇAĞIRMAKTIR.

🔴 C13 DÖRT AYAK:
   ① GEÇME     yama UYGULANMADAN taban ölçülür; 661 çıkmalı (aksi hâlde
               aleti YANLIŞ YERDEN okuyorum demektir)
   ② ATEŞLEME  yama uygulanınca sayı DÜŞMELİ; düşmezse `enklav` alanı
               beklediğim yerde DEĞİL
   ③ GİRDİ     Y `denetle.yerlesimleri_yukle()`den — gerçek dosyalardan
   ④ ÇIKTI     dönüş yapısı VARSAYILMAZ, dökülür (`repr`/`len`)

⚠️ Bu betik VERİYE YAZMAZ. Yamayı yalnız BELLEKTE uygular.
"""
import sys, os, io, json

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import denetle

# ── C-HAKİKİ'nin HAKİKİ çıkan dokuz dönemi ───────────────────────────
# (yerleşim adı, dönem `f`, kimlik) — üçü de eşleşmeli, yoksa DURUR.
HEDEF = [
    ("Gore (Gorée)",                "1444-01-01", "portekiz"),
    ("Gore (Gorée)",                "1627-01-01", "hollanda"),
    ("Massangano",                  "1583-01-01", "portekiz"),
    ("Kambambe (Cambambe)",         "1604-01-01", "portekiz"),
    ("Çandernagor",                 "1816-12-04", "fransa-cumhuriyet"),
    ("Pondişeri",                   "1816-12-04", "fransa-cumhuriyet"),
    ("Pemaquid",                    "1625-01-01", "ingiltere"),
    ("Falmouth (Portland, Maine)",  "1632-01-01", "ingiltere"),
    ("Portsmouth (New Hampshire)",  "1623-01-01", "ingiltere"),
]

Y = denetle.yerlesimleri_yukle()
print("girdi: %d yerleşim" % len(Y))

# ── ① GEÇME + ④ ÇIKTI: taban ölçülür, dönüş yapısı DÖKÜLÜR ───────────
d7, muaf = denetle.degismez7(Y)
print("taban  : %d sorgusuz enklav   (tavan %d)"
      % (len(d7), denetle.BEKLENEN_ENKLAV_SORGU))
print("muaf   : %s" % muaf)
print("kayıt anahtarları: %s" % sorted(d7[0].keys()))
kova0 = {}
for r in d7:
    kova0[r["kova"]] = kova0.get(r["kova"], 0) + 1
print("kovalar: %s" % kova0)
assert len(d7) == 661, (
    "TABAN 661 DEĞİL (%d) — ya veri değişti ya ALETİ YANLIŞ YERDEN "
    "OKUYORUM. İkincisi ise bu betiğin bütün sayıları geçersiz." % len(d7))

# ── ② ATEŞLEME: yamayı BELLEKTE uygula ───────────────────────────────
ix = {}
for y in Y:
    ix.setdefault(y["ad"], []).append(y)
for ad, adet in ix.items():
    assert len(adet) == 1, "MÜKERRER AD: %s (%d)" % (ad, len(adet))

konan = 0
for ad, f, kim in HEDEF:
    assert ad in ix, "AD BULUNAMADI: %r" % ad          # §4 Türkçe yazım ekseni
    y = ix[ad][0]
    esl = [p for p in y.get("s", []) if p.get("f") == f and p.get("d") == kim]
    assert len(esl) == 1, (
        "DÖNEM EŞLEŞMESİ %d (1 bekleniyordu): %s %s %s" % (len(esl), ad, f, kim))
    assert not esl[0].get("enklav"), "ZATEN enklav: %s %s" % (ad, f)
    esl[0]["enklav"] = True
    konan += 1
assert konan == len(HEDEF), "konan %d != hedef %d" % (konan, len(HEDEF))
print("\nbellekte `enklav:true` konan dönem: %d" % konan)

d7b, muafb = denetle.degismez7(Y)
print("yamalı : %d sorgusuz enklav" % len(d7b))
kova1 = {}
for r in d7b:
    kova1[r["kova"]] = kova1.get(r["kova"], 0) + 1
print("kovalar: %s" % kova1)
print("muaf   : %s" % muafb)
print("\nFARK   : %d → %d   (%+d)" % (len(d7), len(d7b), len(d7b) - len(d7)))
print("C-hakiki: %d → %d" % (kova0.get("C-hakiki", 0), kova1.get("C-hakiki", 0)))
print("tavan %d  ⇒  %s" % (denetle.BEKLENEN_ENKLAV_SORGU,
      "✓ ALTINDA" if len(d7b) <= denetle.BEKLENEN_ENKLAV_SORGU else "✗ HÂLÂ ÜSTÜNDE"))

# ② ateşleme gerçekten oldu mu — düşmediyse alan yanlış yerde demektir
assert len(d7b) < len(d7), (
    "ATEŞLEME YOK: sayı düşmedi. `enklav` alanı beklediğim yerde DEĞİL "
    "(dönem içi mi kayıt üstü mü?) — yama YAZILMAMALI.")
