# H0016-BINME-MOTOR-1006 · Osmanlı gövdesinden komşu peteği çıkarma (DIFF, UYGULANMADI)

Oturum: P84-ROTUS-TASARIM-1006 (devam) · 6 Ekim 2026 · görevi veren: UMIT İRTİBAT
Önceki ölçüm: `denetim/P84-ROTUS-TASARIM-1006.md §3`
Temel: `origin/main 32c5f22e` (0083-B içinde) · worktree `C:\atlas-p84-h0016`
Diff: `denetim/H0016-BINME-MOTOR-1006.diff`, 70 satır, yalnız `arac/uret_petek.py`.
`git apply --check` TEMİZ (temiz tabanda) · yamalı dosya `py_compile` TEMİZ · CR 0.
🔴 MOTOR TUZU ⇒ yalnız **bir sonraki TAM İNŞA** koşusuna. Bu akşamki koşuya (HAVVA
19:00) GİRMEZ.

## 1. SEÇİM: (a) `_komsu_toprak_cikar`ı Osmanlı doğrudan + tâbi gövdesine uygulamak
Gerekçe, (b)'ye (0083-B `kapat` ölçütünü noktadan petek alanına genişletmek) karşı:
1. **Bütün ekleme adımlarını kapsar.** Fazla toprak yalnız `kapat`tan gelmez: B2 köprüsü
   ve `delikleri_doldur` da ekler. (b) yalnız `kapat`ı düzeltir. (a) ise sonucu,
   hangi adım eklemiş olursa olsun keser. GOVDE-CAKISMA-0079 da aynı nedenle bu yolu
   seçmişti: `kapat` + B2 + B3'ün üçü de komşu toprağını görmüyordu.
2. **Yeni bir sahiplik kuralı doğmaz.** Mevcut `_gun_sahipleri` /
   `_komsu_toprak_cikar` çifti aynen kullanılır, `did="OSMANLI"`. Yabancı yolda
   koşu 16'dan beri çalışıyor. İki gövde ailesi artık **simetrik**.
3. **Önbellek anahtarı değişmez.** Çıkarma önbellekten SONRA uygulanır, yabancı
   yoldaki gibi. (b) `kapat`ın içine girer, bütün gövde anahtarlarını ve B3/bölgeler
   çağrılarını etkiler.
4. **`kapat`ın varlık sebebi korunur:** sahipsiz petek çıkarılmaz (`kim`de yok).
   1299 İnegöl köprüsü durur.
- 0083-B'nin nokta engeli YERİNDE kalır. Ucuzdur, ve noktalı vakalarda aynı sonucu daha
  erken verir.
- Kapatma anahtarı: `MOTOR_OSM_KOMSU_CIKAR_KAPALI=1` ⇒ eski davranış bit-bit. Koşu
  raporuna sayaç satırı eklendi (boş kova da basılır).

## 2. ÖNGÖRÜ — koşudan ÖNCE yazıldı
Yöntem: yayın geometrisi (1 Eki üretimi, 0083-B öncesi) + bugünkü veri
(`girdi.yukle`) + zamansız taban petek (`petek_govde`). Yamanın yaptığı iş ofline
taklit edildi: Osmanlı (o ∪ v) − o gün yabancı sahipli peteklerin birleşimi.
**H-0016 kutusu** (20,6-22,2D · 38,9-40,2K), Osmanlı∩Bizans:
| gün | önce km² | sonra km² | düşüş |
|---|---|---|---|
| 1396-06-01 | 1.308 | 1 | %99,9 |
| 1399-06-01 | 1.308 | 1 | %99,9 |
| 1414-06-01 | 1.308 | 1 | %99,9 |
| 1420-06-01 | 1.212 | 1 | %99,9 |
| 1428-06-01 | 1.212 | 1 | %99,9 |
⇒ **Öngörü: ≥%95 düşer** (taklitte %99,9). Pay bırakmamın sebebi: motor
`petek_epok(a)` kullanır, taklit ise zamansız taban peteği. Ayrıca zaman kesiti
bedeli var (§3). **0'a inmez.** Bu kutuda **yeni beyaz 0**: lobların hepsini Bizans
gövdesi zaten boyuyor.

**Bütün harita** (aynı taklit). Kesilecek alan, bu alanın ne kadarını yabancı gövdenin
zaten boyadığı (= kalkacak BİNME) ve kalanı (= YENİ BEYAZ):
| gün | Osmanlı gövdesi km² | kesilecek | yabancının boyadığı (binme) | YENİ BEYAZ | en büyük beyazlar |
|---|---|---|---|---|---|
| 1300 | 10.879 | 268 | 171 | **97** | 66 @29,9/40,0 · 24 @29,9/40,1 |
| 1420 | 471.379 | 4.921 | 4.846 | 75 | 38 @26,2/44,0 · 35 @19,7/41,0 |
| 1453 | 583.286 | 3.350 | 3.242 | 109 | 38 · 35 · 10 @18,8/44,1 |
| 1520 | 3.302.084 | 8.101 | 7.809 | 292 | 141 @36,8/48,2 · 38 · 29 @40,2/50,1 |
| 1600 | 5.775.059 | 8.404 | 8.120 | 284 | 133 @10,3/27,9 · 21 @47,2/39,1 |
| 1700 | 5.037.909 | 5.258 | 5.041 | 216 | 133 @10,3/27,9 |
| 1800 | 4.674.745 | 5.191 | 4.996 | 195 | 133 @10,3/27,9 |
| 1880 | 5.168.742 | 11.742 | 5.394 | 6.348 ⚠️ | 6.051 @22,3/38,8 |
- ⚠️ **1880'deki 6.051 km² TAKLİT ARTEFAKTI, yamanın etkisi değil.** İzdin (Lamia)
  `s: yunanistan 1832→` 4 Ekim'de veriye girdi (PAKET-0076-BITIR-1004 A2). Geometri
  1 Ekim'de üretildiği için bayat ve İzdin'in bütün peteğini (6.097 km²) Osmanlı
  boyuyor. Tam inşa onu zaten Yunan'a verir. Ayrıldığında 1880'deki beyaz ≈ 297 km².
- ⇒ **Öngörü:** her kesitte Osmanlı∩yabancı binmesi **~3-8 bin km² düşer** (kesilenin
  %95-98'i). Bu, GOVDE-CAKISMA-0079 ölçerinde Osmanlı×yabancı satırına düşer.
  **Yeni beyaz ~75-300 km²/kesit** (Osmanlı gövdesinin %0,01'i). En büyük adaylar:
  Fizan çölü @10,3/27,9 (133 km², 1600-1800) · Azak kuzeyi @36,8/48,2 (141 km², 1520)
  · Bitinya @29,9/40,0 (66 km², 1300).
  🔴 **`D206` TERS YÖN — 1300 Bitinya adayı Emre'nin gözüne en çok çarpacak olan.**
  Osmanlı çekirdeğinde bir Bizans peteği, Bizans gövdesince boyanmıyor ve Osmanlı'dan
  da kesilecek. Koşudan sonra ilk bakılacak yer burası. Sınıfı ölçülmedi: bayat
  geometri mi, Bizans puan kapısı mı, petek_epok farkı mı.

**Değişmezler** (yama veri değil gövde değiştiriyor):
| değişmez | etkilenir mi | neden |
|---|---|---|
| 1 sahipsizlik · 1b · 2 · 2s · 2i · 2t · konum | **HAYIR** | nokta/veri ölçümü, gövde okumaz |
| 8a (petek × D hattı) | **HAYIR** | petek değişmez |
| 8b (BÖLGELER ∩ yabancı gövde) | **HAYIR** (beklenen) | `BOLGELER` kendi `kapat(bg)`ini kurar (`:5871`), Osmanlı gövdesini okumaz. Yabancı gövde değişmez |
| gövde çakışması (GOVDE-CAKISMA-0079-olc) | **İYİLEŞİR** | Osmanlı×yabancı satırı düşer |
| `denetle_bitisiklik` gövde içi kopukluk | **ARTABİLİR** | `kapat`/B2'nin yabancı petek üzerinden kurduğu köprüler kesilince Osmanlı gövdesi bölünebilir. Sayı ÖNGÖRÜLEMEDİ |
| renk/palet (`renk_olc.py`) | koşu sonrası sorulmalı | komşuluk değişebilir |

## 3. BİLİNEN BEDELLER (saklanmıyor)
1. **Zaman kesiti:** Osmanlı dönemi yalnız kendi anahtarı değişince kırılır. Komşu dönem
   ortasında sahip değiştirirse çıkarma dönemin ilk gününe göre kalır (yabancı yolla
   aynı bedel).
2. **Yeni beyaz (§2):** yanlış iddianın geri çekilmesidir, delik değil. Yine de görünür.
3. **Süre: ÖLÇÜLMEDİ.** Önbellekten SONRA koştuğu için önbellek isabetinde de ödenir.
   Dönem başına Osmanlı gövdesinin sınırındaki yüzlerce yabancı peteğin birleşimi +
   büyük bir `difference` yapılıyor. Kaba tahmin: dönem başına saniyeler mertebesi,
   ~580 dönemde **+10-30 dk** olabilir. İlk koşunun logunda ölçülmeli. Yavaşsa çare:
   `diger`i gövde sınırından ~0,3° tampona daraltmak (ayrı yama).
4. Himaye gövdeleri (MOTOR-HIMAYE) bu yamada YOK.

## 4. KOŞU SONRASI SINAV (iki yön)
- Log satırı `🧱 H0016 Osmanlı gövdesinden komşu toprağı çıkarıldı: N dönem` ⇒
  **N > 0 olmalı**. 0 çıkarsa yama çalışmıyor, "temiz" DEĞİL.
- H-0016 kutusu (1396-1428): Osmanlı∩Bizans ≤ %5 × 1.212 ≈ **≤ 60 km²**.
- `MOTOR_OSM_KOMSU_CIKAR_KAPALI=1` ile aynı kesit ⇒ eski değer (~1.2-1.3 bin km²)
  geri gelmeli. Ters yön sınavı budur.
- 1300 @29,9/40,0'a bakılır: beyaz kaldıysa sınıflandırılır (§2 🔴).

## 5. YENİDEN ÜRETMEK İÇİN
`py arac/kodla.py coz-c data <out> devlet|donem|govde` (C:\atlas) → taklit betikleri
scratchpad'deydi (`p84_ong.py`, `p84_kutu.py`, `p84_w.py`). İstenirse `denetim/`e alınır.
