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

🔴 W32 (6 Ekim): yama VERİYE İNDİ; ön sınav artık TERS yönde koşar (aşağıda
   "W32" yorumu) — yukarıdaki ①/② ayaklarının 661'i tarihsel kayıttır.
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
# 🔴 W32 (6 Ekim): ESKİ SABİT `assert len(d7) == 661` BAYATLADI ve bu betiğin
#    İŞİ BİTTİ — dokuz dönemin dokuzu da bugün veride `enklav:true` taşıyor
#    (yama uygulandı). 661 yamadan ÖNCEKİ tabandı; bugün 734 (veri büyüdü:
#    3921 → 4299 yerleşim, kampanya tabanı `BEKLENEN_ENKLAV_SORGU` DONDU,
#    `denetle.py §3092`). Sabit yerine sınav TERS YÖNDE kurulur:
#      ① YERİNDE   dokuz dönem `enklav:true` taşıyor mu (sınıf hâlâ var)
#      ② ATEŞLEME  bellekte KALDIRILINCA sayı YÜKSELMELİ, geri konunca
#                  tabana TAM dönmeli (alan beklenen yerde mi)
#      ③ NEGATİF   `enklav` taşımayan bir dönemden "kaldırmak" sayıyı
#                  OYNATMAMALI (ölçüm gürültüsü yok)
#    Taban ölçülür ve basılır; hükmü `denetle.py` verir (dondurma).
ix = {}
for y in Y:
    ix.setdefault(y["ad"], []).append(y)
for ad, adet in ix.items():
    assert len(adet) == 1, "MÜKERRER AD: %s (%d)" % (ad, len(adet))

donem = []
for ad, f, kim in HEDEF:
    assert ad in ix, "AD BULUNAMADI: %r" % ad          # §4 Türkçe yazım ekseni
    esl = [p for p in ix[ad][0].get("s", []) if p.get("f") == f and p.get("d") == kim]
    assert len(esl) == 1, (
        "DÖNEM EŞLEŞMESİ %d (1 bekleniyordu): %s %s %s" % (len(esl), ad, f, kim))
    donem.append(esl[0])
yerinde = sum(1 for p in donem if p.get("enklav") is True)
print("\n① yerinde: %d / %d dönem `enklav:true`" % (yerinde, len(HEDEF)))
assert yerinde == len(HEDEF), (
    "YAMA YERİNDE DEĞİL: %d/%d — biri `enklav`ı kaldırdı ya da dönem bölündü"
    % (yerinde, len(HEDEF)))

for p in donem:
    del p["enklav"]
d7b, _ = denetle.degismez7(Y)
for p in donem:
    p["enklav"] = True
d7c, _ = denetle.degismez7(Y)
print("② kaldırınca: %d → %d (%+d) · geri koyunca: %d"
      % (len(d7), len(d7b), len(d7b) - len(d7), len(d7c)))
assert len(d7b) > len(d7), (
    "ATEŞLEME YOK: kaldırınca sayı yükselmedi. `enklav` alanı beklediğim "
    "yerde DEĞİL (dönem içi mi kayıt üstü mü?)")
assert len(d7c) == len(d7), "GERİ DÖNMEDİ: %d != taban %d" % (len(d7c), len(d7))

# ③ NEGATİF: aynı yerleşimlerin `enklav` TAŞIMAYAN bir dönemine dokunmak
negatif = [p for ad, _f, _k in HEDEF for p in ix[ad][0].get("s", [])
           if "enklav" not in p][:1]
assert negatif, "NEGATİF KONTROL KURULAMADI: enklav'sız dönem yok"
negatif[0]["enklav"] = False                         # değer yanlışsa etkisiz olmalı
d7n, _ = denetle.degismez7(Y)
del negatif[0]["enklav"]
print("③ negatif (enklav:false): %d (taban %d)" % (len(d7n), len(d7)))
assert len(d7n) == len(d7), "NEGATİF KONTROL OYNADI: %d != %d" % (len(d7n), len(d7))
print("\nSONUÇ: GEÇTİ — taban %d (tavan %d, %s)"
      % (len(d7), denetle.BEKLENEN_ENKLAV_SORGU,
         "DONDU" if getattr(denetle, "KAMPANYA_DONDURMA", False) else "dondurma yok"))
