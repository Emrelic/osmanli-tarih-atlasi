# KASA-GORUNURLUK-SAYAC-1010 — denetle.py'ye beyanlı görünürlük sayaçları (öneri diff'i)

Görev: YILDIRIM BAYEZIT (UZUN-DILIM kararı ⑤c + ⑤d) · Araştırmacı: KASA · `arac/` DONUK ⇒ yalnız diff:
`KASA-GORUNURLUK-SAYAC-1010.diff` (101 satır, `arac/denetle.py`, main d50ddbedd).

## Ne ekliyor
Kapı değil, **beyanlı sayaç**. Tavan aşılırsa ✗ (gerileme, `ihlal`); altına inerse ⚠️ GEVŞEK.
| sayaç | ölçüt | ölçülen = tavan |
|---|---|---|
| TAM PENCERE | `s:` dönemi tanıksız VE `f = VERI_UFKU[0]`, `t = VERI_UFKU[1]` | **110** |
| tek dilimli tam pencere nokta | noktanın `__BOSLUK__` dışındaki tek `s:` dönemi tam pencere (kaynaktan bağımsız) | **112** |
| künye iç boşluğu | `KUNYE_IC_BOSLUK = {"almanya": ("1806-08-06", "1871-01-18")}`; dönem aralığı kesintisiz aşıyor (açık uç dahil) | **27** |
| `bulunamadı` | dönemin `kaynak:`'ı dolu ama `bulunamadı`/`bulunamadi` | **6** |
Sayılar UZUN-DILIM §1.1 ve §1.5'in bağımsız ölçümüyle birebir aynı.

## ⚠️ ⑤d ile mevcut sözleşme ÇAKIŞIYOR — bu yüzden `_kaynak_dolu` DEĞİŞTİRİLMEDİ
`denetle.py:5920` `_kaynak_dolu`: *"`bulunamadı` da DOLUDUR (§4: geçerli değer)"*. Kaynak tavanı bu sözleşmeyle
çalışıyor: kendi çıktısı *"→ kayda `kaynak:` yaz (bulunamadıysa `bulunamadı`)"* der. Tavan bir **beyan borcu**
ölçüyor ve `bulunamadı` o borcu ÖDER. `_kaynak_dolu`'yu değiştirmek bu borcu geriye dönük açardı.
⇒ Diff ayrı bir yüklem ekliyor: **`_kaynak_tanikli(v)`** = dolu VE `bulunamadı` değil. "Bu dönemi bir kaynak
tarihliyor mu" sorusu bunu kullanır; kaynak tavanının hükmü aynen kalır, `bulunamadı` dönemleri ayrıca sayılır.
**DIKIS-KAPI için:** o diff birleşirse `dikis_olc` içindeki tek satır `_kaynak_dolu(p.get("kaynak"))` →
`_kaynak_tanikli(p.get("kaynak"))` olmalı (dikiş günü bir tanık ister, beyan değil). Bu satır bu diff'e bağımlı;
DIKIS v3'ü sen isterse yazarım. Kaynak tavanının da değişmesini istersen o ayrı bir sözleşme kararı.

## Sınav (scratch kopya, `data/` salt okuma)
- Gerçek veri: 110 / 112 / 27 / 6 — dördü ✓.
- Sentetik (6/6 GEÇTİ): yeni tam pencere → 111 ✗ ve `ihlal` · kaynaklı tam pencere sayılmaz · `BULUNAMADI` (büyük
  harf) tanık değil · `__BOSLUK__` ne dilim ne tek dilim · `almanya` açık uçlu ve eksi yıllı başlangıç sayılır,
  aralık içinde biten ve tam sınırda başlayan sayılmaz · `_kaynak_dolu('bulunamadı')` hâlâ True.
- Tam denetle koşusu, önce/sonra: çıktı farkı YALNIZ yeni 5 satırlık blok; çıkış kodu ikisinde de 2. Sebep scratch
  ortamı: üretilmiş `devletler_harita.js` yok ⇒ Değişmez 8/R ÖLÇÜLEMEDİ. Veri ihlali değil, iki koşuda aynı.
- `git apply --check`: main'e tek başına ✓; DIKIS-KAPI diff'inin ÜSTÜNE ✓ (çağrı, ikisinin çakışmaması için
  "mükerrer kronoloji" bloğunun önüne bağlandı) · sözdizimi ✓.

## Beyanlı sınır
Sayı tavanı, üyelik defteri yok: aşılınca hangi üyenin YENİ olduğunu söyleyemez. Bunu yanlış üye göstermek yerine
açıkça basar (`--ayrinti` ile tam liste). Üyelik defteri istenirse 110 + 27 anahtarlık bir json gerekir.
