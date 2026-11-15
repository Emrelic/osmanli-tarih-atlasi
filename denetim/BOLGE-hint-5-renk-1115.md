# BOLGE hint — Adım 5: Renk (15 Kasım 2026)

Ölçüm: `arac/renkler.py` BOYALAR (2246 kayıt) × `devletler.js` `harita:`/`id` (171 `guney-asya` künyesi); RGB Öklid mesafesi; **`renkler.py`ye dokunulmadı** (tuz). `py arac/renk_olc.py` bu oturumda koşturulmadı (palet ölçümü veri değişince şart; veri değişmedi) → "ölçülmedi".

## 1. Sayılar
| Ölçü | Değer |
|---|---|
| Künyenin `harita:` (yoksa `id`) anahtarı BOYALAR'da | 171/171 (eksik **0**) |
| Aynı hex'i paylaşan künye grubu | **8** (aşağıda) |
| Yakın renk (RGB<40) ve ≥20 yıl ortak ömürlü çift (1281+) | **33** |

## 2. Aynı hex (8 grup)
| Hex | Künyeler (ömür) | Çakışma riski |
|---|---|---|
| #20d820 | delhi-sultanligi (1206–1526), ingiliz-hindistani (1757–1947) | zamansal çakışma yok → düşük |
| #15421e | meysur (1610–1799), meysur-racaligi (1799–1947) | ardıl; kasıtlı olabilir |
| #451539 | bhopal (1708–1949), bhopal-eyaleti-1949 (1949–1956) | ardıl |
| #03a6ff | butan (1907–), danimarka-hindistani (1620–1868) | zamansal yok; `butan` zaten kopya künye (Adım 1 K2) |
| #17def8 | sakalar-bati-satraplar (35–405), indo-grek (−179–10) | çekirdek dışı |
| #08cdff | maurya, gandhara-mahajanapada, nanda | çekirdek dışı |
| #8076a2 | gupta (320–540), pandya-1 (601–) | çekirdek dışı |
| #b86bb4 | rastrakuta (755–975), vishnukundina (500–631) | çekirdek dışı |
(Çekirdek 1281–1923 için gerçek çakışma: 0; hepsi zamansal olarak ayrık.)

## 3. En yakın renkler (ortak ömür ≥20 yıl, RGB<40; coğrafî komşuluk ayrıca elenmedi)
d=6.0 koch-bihar~tripura-manikya (1515–1949; **komşu devletler, ikisi de yerleşimsiz** → şu an boyanmıyor) · d=6.0 orissa~malva-sultanligi (1392–1562; coğrafî komşu değil) · d=7.3 kakatiya~kocin · d=10.4 kalat-hanligi~bhutan · d=12.0 baroda~sikkim-krallik · d=13.4 baroda~ingiliz-seylan, sikkim-krallik~sri-lanka · d=16.2 bengal-sultanligi~madurai-sultanligi (1340–1378) · d=18.0 **bicapur~ahom** · d=19.0 baroda~hollanda-seylani, nayak-devletleri~sind, gond-kralliklari~deva-samatata · d=21.2 gucerat-sultanligi~seylan-sinhala · d=24.7 sind~ladak, sitavaka~argun · d=26.2 nayak~ladak · d=27.8 kandy~bhopal · d=30.0 bundela-orcha~kotte · d=30.6 sind~ahom · d=32.6 **babur-imparatorlugu~bengal-nevabligi (1717–1757; komşu!)** · d=35.0 bhutan~guhila-mevar · d=37.1 bhopal~cunagadh (komşu değil; ikisi de Hint)…
**Gerçekten komşu olan, ayırt edilebilirliği zayıf çiftler (öncelik):** babur-imparatorlugu~bengal-nevabligi (d=32,6), bhopal~cunagadh (d=37,1; ikisi de Hint prensliği, mesafe orta), kalat-hanligi~bhutan (d=10,4; uzak, sorun değil), sind~nayak/ahom (uzak). Diğer çiftler coğrafi olarak ayrık (Himalaya–Güney Hint–Seylan).

## 4. Öneri (renkler.py'e yazılmadı)
- `babur-imparatorlugu` ↔ `bengal-nevabligi` sınır komşusu, d=32,6: Bengal Nevablığı rengi için daha ayrık bir ton önerilir (KASA `renk_olc.py` ile ΔE ölçsün).
- `butan` ve `bhutan` birleştirildiğinde (Adım 1, K2) bir hex düşer.
- Koch Bihar ve Tripura yerleşimlerine pencere verildiğinde (kuyruk) 6'lık mesafe komşuluk nedeniyle görünür sorun olacak: biri değiştirilmeli.
