# B dolgu için ufuk bandı bütçesi — ÖNERİ TASLAĞI (17-18 Kasım 2026)

Durum: **taslak, kodlanmadı.** Karar Emre'nin. Dal `ufuk-bant-sinav` (üzerine `ufuk-bant-1117`).
Ölçü aleti: `denetim/ARAC-UFUK-BANT-GOVDE-SINAV-1117.py --dolgu <gün>` (bant gövdesi × 5/7/10 günlük
yarıçapla `arac/dolgu.py kesit_dolgu` koşturur; motor değişmez, yalnız kesit metni).

## 1. Bugünkü durum (kodtan okundu)

- `arac/dolgu.py`: `UFUK_GUN` (varsayılan **10**) → `UFUK_KM = gün × 40,32`; kapanış yarıçapı
  `YARICAP_KM = UFUK_KM / 2` (= 201,6 km; "2r'den dar boşluk kapanır" = 403 km).
- B dolgu **tek bütçeyle** (10 gün) üretilir, `data/dolgu.js` (ve `dolgu_once1281.js`) tek dosyadır.
  Arayüzde 5 ya da 7 gün seçilince **gövde** küçülür (bant), ama dolgu 10 günlük kalır → gövde ile dolgu
  bütçesi birbirini tutmaz. Bu, Emre'nin "5/7/10 küçülüyor" gözleminin dolgu tarafıdır.
- Kapanış önbelleği anahtarına `r_km` giriyor (`dolgu2_talep`, `dolgu2_kesit`) → farklı yarıçaplar
  birbirini bozmaz; üç yarıçap üç ayrı önbellek bölgesidir.

## 2. Ölçüm (iki kutu, tek gün; km²)

Her satır: o günkü **bant gövdeleri** (≤5 / ≤7 / ≤10 gün) ile dolgu motoru çalıştırıldı.

**A) İberya + Mağrib, 1230-01-01** (kutu −10,35,5,44.5; yalnız o bölgede yerleşimi olan 29 devlet.
Sahra'nın güneyinde süzgeçte devlet olmadığı için çöl "sahipsiz" görünür — bu, paylaşım rakamlarını
ŞİŞİRİR; aşağıdaki mutlak sayılar üst sınırdır, oranlar yön gösterir.)

| bant gövdesi | gövde | dolgu r=100,8 (5g) | r=141,1 (7g) | r=201,6 (10g) |
|---|---|---|---|---|
| ≤5 | 383.952 | 360.443 (%94) | 1.403.612 (%366) | 3.712.383 (%967) |
| ≤7 | 403.080 | 341.256 (%85) | 1.384.429 (%344) | 3.693.474 (%916) |
| ≤10 | 404.152 | 340.292 (%84) | 1.383.456 (%342) | 3.692.513 (%914) |

Cins dökümü (≤5 gövde): r5 = paylaşım 213.144 + boşluk 147.299 · r7 = paylaşım 1.265.006 + boşluk 138.606 ·
r10 = paylaşım 3.606.846 + boşluk 105.537. Parça sayısı 66 → 208 → 322. Süre kesit başına 0-5 sn.

**B) Roma / Massalia / Kartaca, −0150-06-15** (kutu 3,40,16,46; 5 devlet)

| bant gövdesi | gövde | r5 | r7 | r10 | gövde + dolgu(r=bant) |
|---|---|---|---|---|---|
| ≤5 | 150.102 | 166.171 | 165.949 | 165.804 | 316.273 |
| ≤7 | 171.938 | 144.236 | 144.181 | 144.382 | 316.174 |
| ≤10 | 190.302 | 125.808 | 125.874 | 126.210 | 316.110 |

## 3. Okuma (ölçüme dayalı)

1. **Dolgu, gövdenin hangi bant olduğuna neredeyse duyarsız; yarıçapa duyarlı.** A'da r=10 gün için
   ≤5 gövdeyle 3.712.383, ≤10 gövdeyle 3.692.513 (%0,5 fark). Yani dolgu tabandan (ya da herhangi bir
   banttan) bir kez hesaplanıp yarıçapa göre üç kez üretilebilir; gövde bandı başına ayrı dolgu
   gerekmez.
2. **Yarıçap büyüdükçe dolgu doğrusal değil katlanarak büyür** (A: %94 → %366 → %967). Sıçrama
   "paylaşım" cinsinden gelir (213 bin → 1,27 milyon → 3,6 milyon km²): açık çöl/boş toprak. 5 günde
   dolgu gövdeyle aynı mertebede (%94); 7 günde gövdenin 3,7 katı; 10 günde ~9,7 katı. Bu mutlak sayı kutu artefaktıyla şişmiş
   olabilir (Sahra'da komşu devlet yok), ama **sıçramanın kendisi** 7→10 değil 5→7 arasında başlıyor.
3. **Birleşim (gövde + dolgu) bant-yarıçap eşleşmesinde sabit kalıyor** (B kutusu: 316.273 / 316.174 /
   316.110). Gövde bantla küçüldükçe dolgu aynı toprağı geri dolduruyor — "5 gün seçince harita 5 günlük
   gövde + 5 günlük dolgu" tutarlı bir bütün. Bugünkü tek-10-gün dolgusunda 5 gün seçilince 5 günlük gövde
   üstüne 10 günlük dolgu biner: Roma kutusunda gövde ≤5 = 150 bin + dolgu(r10) = 166 bin (fark bu kutuda
   küçük), Mağrib'de 384 bin + 3,7 milyon (fark çok büyük).

## 4. Öneri (Emre karar verecek)

**Seçenek 1 — bant-bütçeli dolgu (önerilen).** Dolgu üç yarıçapla üretilir: r(b) = b × 40,32 / 2 →
**5 gün 100,8 km · 7 gün 141,1 km · 10 gün 201,6 km**; arayüz bant düğmesiyle aynı anahtarla dolgunun
da bandını seçer. Hesap tabandan ya da ≤10 gövdeden bir kez; üç yarıçap ayrı önbelleğe oturur.
- Maliyet (ölçü): kesit başına 0-5 sn (A kutusu); tam koşuda mevcut dolgu süresinin yaklaşık **3 katı**
  (önbellek yarıçapa göre ayrı; mevcut 10 günlük geçiş zaten var → ek iki geçiş). Tam koşu maliyeti
  **ölçülmedi** (B-4 ölçümü dar dilimde yapılmıştı).
- Dosya: ya üç ayrı `dolgu_<b>.js` ya da kayıtlara `b` alanı. Arayüz değişikliği küçük (bant seçiminde
  dolgu dosyasını da değiştirir).

**Seçenek 2 — paylaşım tavanı (Seçenek 1'e eklenir).** Ölçümde sıçramayı "paylaşım" cinsi yapıyor.
Devlet başına `paylaşım ≤ k × gövde` (k ≈ 1) ya da çöl bölgesinde paylaşım yarıçapının sabit 5 gün
tutulması (motorun çöl kelepçesi `MOTOR_COL_UFUK_SAAT` zaten bunu gövde tarafında yapıyor). k ve çöl
kuralı için bu ölçüm yetmez — **önce tam dünya kesitinde 5 gün/7 gün/10 gün paylaşım alanı** ölçülmeli.

**Seçenek 3 — bugünkü hâl (tek 10 gün).** Maliyet sıfır; ama 5/7 gün seçilince gövde ile dolgu bütçesi
uyuşmaz (§3-3). Önerilmez.

## 5. Ölçülmeyen / sınırlar

- İki kutu, her biri **tek gün**. Çok devletli tam dünya kesiti yok → mutlak km² değil oran/yön okunmalı.
- Dolgunun kendi monotonluğu (r büyüdükçe dolgu(r) ⊇ dolgu(r')) ölçülmedi; talep monoton artıyor
  (A: 360 bin → 741 bin → 1,42 milyon) ama kapsama ilişkisi sınanmadı.
- "Engellenen enklav" sayısı A'da 14-15, B'de 1-2 (dolgu raporu); bunların bant bağımlılığı ölçülmedi.
- Dolgu sonrası harita ile kronoloji doğrulaması (Değişmez 2) bu çalışmanın konusu değil.
