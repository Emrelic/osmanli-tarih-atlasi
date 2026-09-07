# MEKANİZMANIN İKİNCİ UCU — VE ÖNCÜLÜM ÇÜRÜDÜ · `DEGISMEZ3-0907`

## 🔴🔴 BAŞLIK: `savas_basi` `SAVASLAR`DA HİÇ YOK — ÖNCÜLÜM YANLIŞ KÜMEDEYDİ

Önceki turda şunu yazdım ve koordinatör onu **onaylayıp iş açtı**:
> *"`SAVASLAR` kayıtlarının `savas_basi` alanı VAR (28 kayıtta) ⇒ orada da
> ARALIK olabilir, ve bugünkü %95 aynı sebeple OLDUĞUNDAN DÜŞÜK olabilir."*

**Ölçüldü:**
```
küme           kayıt   savas_basi    f
SAVASLAR        171         0        0     ← 🔴 ALAN HİÇ YOK
ANTLASMALAR      31        28        0     ← alan BURADA
SEFERLER         61         0       61     ← `f` burada (bu iddiam DOĞRUYDU)
SERILER          16         0        0
```
⇒ **`savas_basi` `ANTLASMALAR` kümesinde.** Ben onu `SAVASLAR`ın alanı
sandım — çünkü `ARAC-DEGISMEZ3-SAVASKAPSAM-0907.py`nin çıktısında alan
listeleri **küme küme** basılıyordu ve ben `ANTLASMALAR` satırındaki
`savas_basi(28)`i taşıdım.

📌 `§11`in *"sayıyı biliyorum ≠ sayının NEYE GÖRE olduğunu biliyorum"*
ailesinin **küme** yüzü. Öncekiler **birim** (km²·dönem) · **alan adı**
(`kim`↔`kimden`) · **referans** (2014 km neye göre) · **an** (disk↔yamalı);
bu **hangi kümede**.

🔴 **Ve bedeli bir tur:** koordinatör öncülü doğrulamadan sevke yazdı
(*"`savas_basi` olan 28 kayıt aralık taşır"*), ben de kendi öncülümü
doğrulamadan ona verdim. `§11`in *"bir sevk taşıdığı öncülü de
doğrulamalıdır"* kuralının **işçi tarafı** — kural iki yönlü.

---

## ① ÖNGÖRÜ ① — "TUTTU" GÖRÜNÜYOR AMA ANLAMSIZ
```
`savas_basi` taşıyan : 0 senkron / 0 açık   ⇒ "0/0 senkron" TUTTU ✓
```
🔴 **Bu bir doğrulama değil.** Boş küme her öngörüyü doğrular. Damgası
`TUTTU` değil **`KÜME BOŞ — SINANAMADI`** olmalı, ve aletim bunu
ayırt edemedi. (Aletin kusuru: `if not b_acik` boş kümede de doğru.)

## ② ÖNGÖRÜ ② — ÇÜRÜDÜ, ama küme boş olduğu için
Mesafe karşılaştırması yapılamadı: bir taraf boş.

## 🟡 HÜKÜM: MEKANİZMA SINANAMAZ — iki katmanda da
```
SAVASLAR      alan HİÇ YOK                      ⇒ sınanamaz
ANTLASMALAR   alan VAR (28/31) ama AÇIK YOK (0) ⇒ ayrım yapılamaz
```
⇒ *"Alanı yazan kişi maddeyi de yazmış"* mekanizması **ne kanıtlandı ne
çürütüldü** — sınanacağı yer yok.

🔴 **VE ÖNERİMİ GERİ ÇEKİYORUM:** *"8 açığa `savas_basi` yaz"* önerisi
`SAVASLAR` şemasında **o alan hiç bulunmadığı** için yanlış çerçevelenmişti.
Doğru çerçeve: *"`SAVASLAR`a bir başlangıç alanı EKLENSİN mi"* — bu bir
**şema kararı**, ve benim kalemim değil.

---

## 🟢 YAN BULGU — `SAVASLAR`ın SENKRON SAĞLIĞI İLK KEZ ÖLÇÜLDÜ
```
171 kaydın maddeye uzaklığı:  medyan 0,0 gün · ortalama 9,1 gün
TAM GÜNÜNDE maddesi olan   :  140 / 171  (%82)
```
📌 Yani `SAVASLAR`ın **%82'si tam gününde** maddeli. Bu, `Değişmez 2`nin
ruhunun bu katmanda güçlü işlediğini gösteriyor — ve 8 açık, %95'lik bir
oranın kuyruğu.

---

## ÖLÇMEDİKLERİM
- `ANTLASMALAR`ın 28 `savas_basi` kaydında mekanizma **sınanamadı**
  (0 açık ⇒ ayrım yok). Mesafe dağılımını orada da ölçebilirdim;
  **ölçmedim**.
- `SAVASLAR`ın 8 açığı için `savas_basi` **olsaydı** ne olurdu —
  karşı olgusal, ölçülemez.
- `ANTLASMALAR`ın gerçek paydası **41** (bkz. `oku_pencere` bulgusu);
  yukarıdaki 28/31 **31 üzerinden**. Görünmeyen 10'da kaç `savas_basi`
  olduğu **bilinmiyor**.
