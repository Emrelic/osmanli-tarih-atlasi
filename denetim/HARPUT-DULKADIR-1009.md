# HARPUT-DULKADIR-1009 — Harput 1353→1429 boşluğu (koordinatör Ⓑ: dulkadir 1378→1429)

Görev UMIT İRTİBAT · 9 Ekim 2026 · ağaç `C:\atlas-harput` (`origin/makine/umit` 77abc6b9, ARTUKLU
inmiş) · commit yok · **diff'ler UYGULANMADI** (ölçüm için ağaçta uygulanıp geri alındı).

## 0. Öngörü — ölçümden ÖNCE
- 4c: Harput'un `artuklu` aşımı (+20 yıl) kalkar, 126 → 125.
- Değişmez 7: 1378'de Harput yeni bir Dulkadır adası olur (+1), çünkü 1436 kalemiyle aynı
  geometri.
- 2s: 1378 kırılmasının ±30 günü içinde madde yok; madde eklenmezse açık +1.
**Sonuç:** 4c ✓ · D7 ✓ (+1, 153 km) · 2s ✗ — 1378 kırılması 2s sayılarını **hiç
oynatmadı** (1723/185 aynı; maddesiz hâl AYRICA ölçülmedi — §3).

## 1. Kaynak (birebir, gövde okundu)
TDV `dulkadirogullari` (Refet Yinanç, 1994):
- *"Bir süre sonra Harput’u zaptederek Malatya’yı tehdit etmeye başladı. Ancak Mısır hükümetinin
  harekete geçmesi üzerine Harput’u Memlükler’e teslim etmek zorunda kaldı. Bununla beraber Halil
  Bey on yıl sonra bu şehri tekrar ele geçirdi. Bu olay üzerine Memlük orduları kumandanı Berkuk,
  1378’de Mübârek Şah emrindeki Halep kuvvetlerini Dulkadırlılar üzerine sevketti."*
  ⇒ Yeniden zapt 1378'den **önce**, yılı yok. **1378 bir üst sınırdır.**
- *"…Halil Bey ve kardeşi Sevli Bey bu defa yenilgiye uğradılar ve Harput’a çekildiler."* (1381
  yazı)
- *"Bu evlilik sayesinde Dulkadırlılar 1429’da Akkoyunlular’a kaptırdıkları Harput’u geri aldılar."*

TDV `harput`:
- *"1234’e kadar Artuklular’ın elinde kalan şehir"* — `artuklu 1353` bu yüzden **kesin yanlış**.
- *"XIV. yüzyıldan sonra … Dulkadırlı, Kadı Burhâneddin, Karakoyunlu ve Akkoyunlu devletleri
  arasında sık sık el değiştirmesine yol açtı."* ⇒ 1381-1429 arasının kesintisiz olduğu iddia
  edilemez. **ÇIKARIMDIR** ve `kaynak:` ile `not:` alanlarına açıkça böyle yazıldı (D207).

## 2. 1353-1378 dilimi — ölçüldü, iki seçenek
TDV bu dilim için yalnız sırayı veriyor: Dulkadır zaptı ("bir süre sonra", 1360 sonrası) →
Memlük'e teslim → "on yıl sonra" Dulkadır. **Hiçbir geçişin yılı yok.**

| | V1 (öneri) `artuklu` KALIR | V2 `__BOSLUK__` |
|---|---|---|
| doğruluk | bilinen yanlış (Artuklu 1234'te bitti), ama mevcut ve beyanlı | "kimsenin değildi" der — o da YANLIŞ: şehrin sahibi vardı, yalnız yılları bilinmiyor |
| VERI-YAPISI kuralı | — | 🟢 "komşuya itmek yanlış" tutar, ama deyimin anlamı ("burası kimsenin değildi") tutmaz |
| harita | Harput+Palu Artuklu adası (bugünkü gibi) | Harput 25 yıl BOYANMAZ (delik); Palu tek başına Artuklu adası |
| denetle | aynı (aşağıda) | aynı + D7'de `__BOSLUK__` adası (1592 km) |

**Önerim V1.** İki seçenek de yanlış, ama V2 yeni bir yanlış iddia ("kimsenin") ve görünür bir
delik ekliyor. Koordinatörün hükmü (Ⓑ) 1378 öncesine dokunmuyor. V2 diff'i ayrıca hazır
(`-KOORD-V2-BOSLUK.diff`).
📌 Yan not: `ilhanli 1281→1353` da kaynaksız. TDV `harput` İlhanlı zaptını anlatıyor ama bitişini
vermiyor. Dokunulmadı.

## 3. `denetle.py` — önce / sonra (V1, madde dahil, tavan dahil)
İki koşu da **çıkış 2**: Değişmez 8 ÖLÇÜLEMEDİ, çünkü taze ağaçta `devletler_harita.js` yok.
Bu koşuyu bekler.
```
                         ÖNCE (77abc6b9)        SONRA (V1)
Değişmez 1               309 sahipsiz           309
Değişmez 2               624 / 0 açık           624 / 0
Değişmez 2s              1723 · 185 AÇIK        1723 · 185   (değişmedi)
Değişmez 2sk             2250 (tavan 2250)      2250
Değişmez 4c              126 (tavan 126)        125  → BEKLENEN_ASAN 125 (aynı commit'te, diff'te)
Değişmez 7               738                    739 (+1)
```
V2'de de sayılar birebir aynı (4c 125 · D7 739). ⚠️ Kaynaksız `s:` tavanındaki "TAVAN GEVŞEK
1930→1912" uyarısı **önceden de vardı**; benim değil.
⚠️ 1378 kırılması 2s'nin toplamını (1723) oynatmadı. Yani bu kırılma 2s evrenine **girmiyor**.
Neden girmediği ölçülmedi. Madde 2s açısından nötr; kronoloji ile haritanın birbirini doğrulaması
için ekleniyor (`yer_id: Harput`).

### Değişmez 7 kalemleri — ADIYLA
```
ÖNCE   1353-01-01  Harput (Elazığ) → artuklu   203 km  ada: Harput (Elazığ)+Palu
       1353-01-01  Palu            → artuklu   169 km  ada: Harput (Elazığ)+Palu
       1436-01-01  Harput (Elazığ) → dulkadir  153 km  ada: Harput (Elazığ)
SONRA  (V1) üçü aynen durur
       + 1378-01-01  Harput (Elazığ) → dulkadir  153 km  ada: Harput (Elazığ)   ← YENİ (A-koridor 545→546)
SONRA  (V2) 1353 Harput+Palu adası → "Palu → artuklu 169 km ada: Palu" + "Harput → __BOSLUK__ 1592 km"
```
- **"1353 Harput+Palu ada":** 1353'te Harput ve Palu `artuklu`ya geçtiğinde Artuklu ana gövdesinden
  (Mardin kümesi) 169-203 km kopuk iki noktalık bir Artuklu adası oluşuyor. Sebep artuklu
  kimliğinin kendisi (1234 sonrası Harput için yanlış). V1 bunu çözmez. Palu açık kalem olduğu
  için ada **Palu yüzünden** yaşamaya devam eder.
- **"1436 Harput→dulkadir":** 1436'da Akkoyunlu'dan Dulkadır'a geçen Harput, Dulkadır ana
  gövdesinden (Elbistan/Maraş) 153 km kopuk. Arada Malatya, Arapkir ve Kâhta Memlük. TDV
  `dulkadirogullari`'nın beylik sahası ("doğuda Harput’tan") ile tutarlı bir **kopuk mülk**, veri
  kusuru değil. Yeni 1378 kalemi bunun aynı geometrisi.
- ⇒ Değişmez 7 tavanı (731, donuk) zaten 7 aşımdaydı, şimdi 8. 🧊 Emre'nin hükmü: kampanya
  boyunca yükseltilmez, ihlal sayılmaz. **Tavana dokunmadım.**

## 4. Diff'ler
- `HARPUT-DULKADIR-1009-KOORD.diff` (V1):
  - `yerlesimler.js` Harput: artuklu 1353→**1378** · **dulkadir 1378→1429** (kaynak alanında
    "UÇLAR KAYNAKLI, ARASI ÇIKARIM") · `not:` alanının başına çözüm cümlesi.
  - `arac/denetle.py` `BEKLENEN_ASAN 126→125`: **AYNI commit** (§3.4-2/3). Bu sabit inmezse kapı
    "TAVAN GEVŞEK" basar (ölçüldü).
- `HARPUT-DULKADIR-1009.diff`: `kronoloji_anadolu.js` 1378-01-01 maddesi (Halil Bey Harput'u
  yeniden aldı; Berkuk'un 1378 seferi). Gün YIL; `gun:` alanında üst sınır olduğu yazılı. Node ile
  eval edildi. KOORD ile aynı commit'te.
- `HARPUT-DULKADIR-1009-KOORD-V2-BOSLUK.diff`: alternatif (V1 yerine, birlikte değil).
- `git apply` sınaması:
  - temel 77abc6b9 üzerine tek başına ✓
  - KRONO-SENKRON + bütün DIVRIGI ARTUKLU-SONRASI zinciri + EK diff'leri üzerine ✓ (aynı dosya,
    ayrı satırlar; sıradan bağımsız)
  - LF, CR 0.
- **Palu'ya dokunulmadı** (kaynak tüketilmiş, beyanlı).
