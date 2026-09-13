# P04 · BALKAN — teslim raporu

**Oturum:** P04-BALKAN · **Tarih:** 14 Eylül 2026 · **Koordinatör:** 1.MURAT
**Plan:** `denetim/PAKET-SINIF2-0914.md` §P04 · **Brifing:** `oturumlar/DALGA-SINIF2-0914.md`
**Commit:** YOK (brifing gereği). Motor koşulmadı. Koordinatörün TOPARLA talimatıyla kapandı.

---

## Madde madde

| madde | ne yapıldı | kaynak | durum |
|---|---|---|---|
| `0042/H-0034` Fetret'te Şehirköy kırmızı | `yerlesimler_serhat.js` Şehirköy: `d` 1386→**1402-07-28**'de biter; 1402-1412 Emîr Süleyman / Mûsâ Çelebi dönemleri; `sirp-despotlugu` **1412-01-01**→1428. Madde `olaylar_p0055.js` | TDV `sehirkoy` (1412 Stefan zaptı) · `musa-celebi` (Fetret günleri, şartlı komşu günü) | **çözüldü** (koşu bekler) |
| `0042/H-0042` Çamurlu'da Pirot enklavı | Şehirköy tarafı yukarıda. Kalanı **Niş**'te: TDV `nis` 1413'te Niş'in Stefan'a verildiğini, 1428'de geri alındığını söylüyor; veri 1413-1428 Osmanlı | TDV `nis` | **sırada** — öneri `YAMA-TRAKYA-0914.json` (yerlesimler.js kilitli) |
| `0035/H-0063` Herseknovi işgalinin maddesi yok | `yerlesimler_ek.js` isg t 1539-01-01→**1539-08-10** (P-0063). İki madde `olaylar_p0055.js`: 1538 zapt · 10 Ağustos 1539 geri alış | TDV `barbaros-hayreddin-pasa` (gün) · `dalmacya` (yıl) | **çözüldü** |
| `0042/H-0021` Çirmen sonrası kırmızı toprak | Kırmızı alan **Dejanoviç Prensliği** (tâbi). Kaynak vasallığı **doğruluyor**. Maddesi yoktu → `olaylar_p0055.js`'e yazıldı. Ayrıca prensliğin merkezi **Köstendil** veride yeşil (bulgaristan) kalıyor → öneri | TDV `kostendil` · `ustrumca` · `doyran` · `koprulu` | madde **çözüldü**; Köstendil **sırada** (öneri) |
| `0042/H-0018` · `H-0019` · `0025/H-0009` · `0030/H-0009` Trakya fetih sırası | Sıra kaynaktan kuruldu; 25 kayıt için 53 alanlık yama + 7 madde önerisi + 7 halka önerisi `YAMA-TRAKYA-0914.json`. **Veriye yazılmadı**: hedefler `yerlesimler.js` · `ek24` · `ek29` | TDV `murad-i` (İnalcık) ana dayanak; `dimetoka` · `luleburgaz` · `kirklareli` · `cirmen` · `haci-ilbey` · `timurtas-pasa` · `tekirdag` | **sırada** — P02 inişiyle, maddelerle AYNI partide |

## Trakya — ölçülen kusur ve kaynaktan sıra

**Kusur (ölçüldü):** 12 yerleşim `1361-01-01`'de Osmanlı oluyor — Edirne (1361-03-01), Dimetoka (1361-02-01), Çorlu/Lüleburgaz/Kırklareli (1362-06-01) ve Uzunköprü/Çirmen/Sofulu (1371-09-26) hepsinden ÖNCE. Kaynakları `veri-ici sozlesme` ve `olaylar_ek17` Vize maddesi (kaynağı `kirklareli`, o gövde bu yerlere yıl vermiyor). Emre'nin "atlama"sı budur.

**TDV `murad-i` sırayı açıkça veriyor:**
```
1357        Süleyman Paşa: Malkara · İpsala · Tekirdağ   (veride, dokunulmadı)
1360        Çorlu · Lüleburgaz · Keşan — Edirne'nin yardım yolları    (veri 1362 / 1357)
1361        Dimetoka + Orta Meriç: Sofulu · Meriç · Uzunköprü         (veri 1361-02 / 1371)
1361-05-05  Edirne + Havsa · Kumçiftliği · Lalapaşa                   (veri 1361-03 / 1361-01)
1363        Gümülcine (veride, dokunulmadı — üç görüş)
1366        Çirmen · Mustafapaşa · Ferecik · Dedeağaç                 (veri 1371 / 1361 / 1357)
1369        Kırklareli · Vize · Kofçaz · Dereköy · Demirköy · Malko Tırnova ·
            İğneada · Ahtopol · Rezve · Elhova                         (veri 1362 / 1361 / 1371)
1371-09-26  Çirmen Savaşı + Dejanoviç vasallığı
```
**Ön sınav (bellekte, yama uygulanmış kopya):** Değişmez 2 açık 0→0 · yıllık sahipsiz 337→337. `denetle.py` DEĞİL; inişten sonra şart.

## Kaynak çelişkileri (M-3954'te bildirildi, taraf seçilmedi)
- **Çirmen:** TDV `cirmen` "Edirne'nin fethi sırasında" ↔ TDV `murad-i` 1366 seferinde teslim. Öneri 1366, seçenek 1361-05-05. Veri (1371) ikisine de aykırı.
- **Dimetoka:** 1359 (`haci-ilbey`) · 1360/61 (`murad-i`) · 1361 (`dimetoka`) · Kasım 1361 (Babinger/Schreiner).
- **Gümülcine:** 1361 / 1363 / "1371'den biraz önce".

## Emre'ye sorular
1. Çirmen: 1366 mı, Edirne'yle 1361 mi?
2. Gümülcine: üç görüşten hangisi? Üçüncüsü H-0019'daki adayı kaldırır.
3. Dedeağaç: Ferecik'le (1366) mi Gümülcine'yle (1363) mi? Kaynakta yok.
4. İğneada · Ahtopol · Rezve: fetih yılı bulunamadı; 1369 yalnız sırayı koruyor. Kabul mü?

## Bulunamadı / okunmadı
- Herseknovi 1538 zaptının ayı/günü — bulunamadı (Imber 1972 okunmadı).
- Museo del Ejército 7 Ağustos 1539 — bu oturum yeniden okumadı.
- İğneada · Ahtopol · Rezve · Dedeağaç fetih yılı — bulunamadı.
- Uzunköprü'nün TDV'nin "Orta Meriç" tarifine girip girmediği — ölçülemedi.

## Kapsam dışı bulgular (yeni kalem açılmadı)
- Çatalca: TDV `murad-i` 1366-67, veri 1453 (kayıt "bulunamadı" diyor).
- Filibe · Eski Zağra: veri 1372; TDV görüşleri 1364 / 1360'ların sonu / muhtemelen 1371.
- Süleyman Paşa maddesinin kaynağı `gelibolu` gövdesinde Keşan · Ferecik fethi geçmiyor (D144) → MT-7.

## Denetim — önce / sonra (`py arac/denetle.py`)
```
                 TABAN (01:13)            SONRA (01:47)
Değişmez 1       3818 · 324 sahipsiz      3822 · 324 sahipsiz
Değişmez 1b      0                         0
Değişmez 2       531 kırılma · 0 açık     535 · 0 açık
Değişmez 2s      1329 · 100 açık          1333 · 99 açık (tavan 121)
Değişmez 2i      65 · 3 açık              65 · 3 açık (tavan 3)
Değişmez 2t      15                        16
Değişmez 4c/4d   129 / 356                129 / 356
Değişmez 7       658                       ÖLÇÜLEMEDİ — satır sonraki çıktıda YOK
SONUÇ            temiz                     İHLAL VAR (çıkış 1) — mükerrer madde 6 çift
```
🔴 **İHLAL BENİM DEĞİL — dosya ölçüldü:** altı şüpheli çiftin altısı da 1919-1922 işgal/taarruz maddeleri (Eskişehir · Maraş · Antalya · Muğla · Bursa · Uşak · İnegöl · Büyük Taarruz) ve hepsi `data/olaylar_p0057.js`'te (son yazım 01:39:40; brifinge göre P09'un dosyası). `olaylar_p0055.js`'te 1919-1922 maddesi yok.
⚠️ **Değişmez 7 ölçülemedi:** tabanda `658` satırı vardı, sonraki çıktıda o satır hiç basılmadı. Şehirköy değişikliği enklav sayısını oynatabilir (1402-1413 Osmanlı adası kalktı, 1412-1413 Sırp adası doğdu) — koordinatör yeniden koşarken bakmalı.
**Farklar kimden (dosya damgalarıyla ölçüldü, tahmin değil):**
- Yerleşim 3818→3822: `data/yerlesimler_anadolu_0914.js` (01:42, P05'in dosyası). Benim dosyalarım yeni nokta eklemedi.
- 2t 15→16: yeni kayıt `1811-07-04 Rusçuk Muharebesi` (benim değil); `1921-06-01` defterden düştü. p0055 maddelerinin dördü de kırılmalı güne düşüyor.
- `node denetim/ARAC-A2-BAG-0913.js --hepsi`: BAĞ 603/603 · HATA 0.
- `node --check`: `olaylar_p0055.js` · `yerlesimler_serhat.js` · `yerlesimler_ek.js` temiz.

## 🔴 §7 SÜPÜRME — iki düzenlemem başkasının commit'ine girdi
```
data/yerlesimler_serhat.js   düzenleme 01:41:13   →  commit 8a128bc 01:42:27
data/yerlesimler_ek.js       düzenleme 01:41:17   →  commit 8a128bc 01:42:27
8a128bc  "TEMIZ — okura gorunen metinlerden gelistirici notlari ayiklandi (527 kayit)"
```
🟢 Veri kaybı YOK (ölçüldü: iki değişiklik diskte ve HEAD'de, grep 1/1).
🔴 Kaybolan şey GEREKÇE: commit başlığı Şehirköy'ü ve Herseknovi'yi anmıyor. Gerekçe bu raporda, kayıtların `not`/yorum alanlarında ve tahta M-3964'te.
Bu oturum commit atmadı, `git add` de çalıştırmadı.

## Dosyalar
- `data/yerlesimler_serhat.js` — yalnız Şehirköy (s/d + not)
- `data/yerlesimler_ek.js` — yalnız Herseknovi (isg t + yorum)
- `data/olaylar_p0055.js` — YENİ, `window.OLAYLAR_P0055`, 4 madde
- `denetim/YAMA-TRAKYA-0914.json` — YENİ, öneri (53 yama · 7 madde · 7 halka · ön sınav)
- `denetim/P04-BALKAN-0914.md` — bu rapor

**index.html'e koordinatörün ekleyeceği satır:**
`<script src="data/olaylar_p0055.js?v=r8232"></script>`
