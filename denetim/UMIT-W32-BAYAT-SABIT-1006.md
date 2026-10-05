# UMIT-W32-BAYAT-SABIT-1006

Görev: W27 envanteri (`SINAV-ENVANTER-1006.tsv`, 13a3ae93) OTTU kovasında
`beklenen_kaynak=sabit` + "BAYAT SABIT ADAYI" olan 7 betik. Hariç tutulan
(W31: ODAK-KAPI-SINAV · 1783-ULKE-SINA · EKO-BOLGE-BAG-SINA-0920 ·
KAMERIKA-0903-taban-sina; W7: KAYNAK-TAVAN-SINAV) — **bu yedinin hiçbiri
hariç listesinde değil**. Çalışma yeri: atılabilir worktree `origin/main`
a59e4b7b; 7 betik `makine/umit` ile birebir aynı.

## 0. ÖNGÖRÜ (ölçümden ÖNCE yazıldı — W27'nin son satırlarına dayanır)

| betik | öngörü sınıfı | gerekçe (yalnız envanter son satırı) |
|---|---|---|
| ARAC-ANTLASMA-KADEME-SINAV-0074.js | BAYAT (veri büyüdü) | "2 geçti · 6 kaldı" — antlaşma maddeleri eklendi |
| ARAC-ENKLAV-SINAV-0907.py | BAYAT (veri büyüdü) | TABAN 661 → 734 |
| ARAC-MANDA-IRAK-SINAV-0907.py | BAYAT (kod arayüzü değişti) | `degismez4` dönüşü tuple oldu |
| SINAV-IKINCI-GECIS-0903.py | BAYAT | son satır bilgi vermiyor |
| SINAV-KOSU8-ENKLAV-0907.py | BAYAT (veri) | "+1 ADLANDIRILAMADI" |
| SINAV-KOSU8-MUKERRERANAHTAR-0907.py | BAYAT | son satır bilgi vermiyor |
| SINAV-RENK-98-0903.py | BAYAT ya da kullanım (argüman) | "Beklenen sayı ZORUNLU" |

Öngörü: 7/7 BAYAT, 0 GERİLEME. Bir GERİLEME çıkarsa öngörü yanlıştır ve öyle yazılır.
Mühür: bu bölüm yazıldığı anda sha256 `6be06ff378a1dd72…` · 2026-10-06T01:27:28+03:00
(ilk betik koşturulmadan önce).

## 1. SONUÇ — öngörü 3/7 TUTTU, 4/7 ÇÜRÜDÜ

| betik | eski sabit | bugünkü ölçüm | sınıf | ne yapıldı |
|---|---|---|---|---|
| ARAC-ANTLASMA-KADEME-SINAV-0074.js | isg 238 · Lozan 23/78 · Mondros 25/93 | **önce yükleyici kusuru:** 10 yerleşim · 6 madde (index.html `paket_NN.js`e geçti, süzgeç tanımıyordu) → düzeltilince isg 269 · Lozan 23/84 · Mondros 26/100 | **BAYAT (veri) + KIRIK YÜKLEYİCİ** | yükleyici `paket_` alır · SESSİZ SIFIR kapısı (çıkış 2) · 238 → `girdi.py` evreniyle karşılaştırma · DAR/ORTA sayıları → ⓐⓑⓒ yapı şartı · yapay iki yönlü |
| ARAC-ENKLAV-SINAV-0907.py | `assert len(d7) == 661` | 734 · dokuz dönemin **9/9'u veride `enklav:true`**: yama inmiş, ön sınavın işi BİTMİŞ | **BAYAT (veri) + AMACI TÜKENMİŞ** | sınav TERS yöne çevrildi: yerinde mi · kaldırınca yükselir mi (734→743, +9) · geri dönüyor mu · negatif kontrol |
| ARAC-MANDA-IRAK-SINAV-0907.py | `ALANLAR4` 5 alan | `degismez4` 6 alan döndürüyor (`cok_harita` eklendi) | **BAYAT (kod arayüzü)** | alan adları `degismez4`ün SON `return`ünden AST ile okunur · okuyucunun kendisi yapay iki yönlü sınanır · manda yamasının veride olduğu basılır (35 dönem; 35/42 kayıt birebir aynı) |
| SINAV-KOSU8-ENKLAV-0907.py | `TABAN_COMMIT="d041a08"` · 660/661 | d041a08 verisi bugünkü 93 dosyalık girdi listesini taşımıyor ⇒ taban hiç kurulamıyordu | **BAYAT (veri + girdi evreni)** | taban commit'i = tavan SAYISININ son değiştiği commit (`git log -G` + ebeveynle karşılaştırma ⇒ `ac262390`, 731) · tavan kaynaktan okunur · tabanda olmayan girdi dosyası ADIYLA boş sayılır · net = yeni − kapanan aritmetik sınavı (tutmazsa çıkış 2) |
| SINAV-KOSU8-MUKERRERANAHTAR-0907.py | (örtük 0) | **2 mükerrer `s:`** — Sayram (İsficâb) + Taraz (Evliya-Ata), `yerlesimler_ok107.js` | 🔴 **GERİLEME — veri kusuru, sınav HAKLI** | DOKUNULMADI. Giriş commit'i ölçüldü: `17cd2f98` (30 Eyl, "125 yerleşim düzeltmesi indi"); 9102b7c6'da her kayıtta 1 `s`, 17cd2f98'de 2. Kalan (motorun okuduğu) değer YENİ olandır (1370-04-09), düşen eski (1370-01-01) — haritaya etkisi yok, ama ölü veri. `--atesle` 7/7 dal ateşledi |
| SINAV-IKINCI-GECIS-0903.py | — | argüman ister (`<artefakt>`); 3 Eylül artefaktıyla koşunca "29 çift hâlâ ihlal · KABUL EDİLMEDİ" | **YANLIŞ KOVA — sınav değil, tek seferlik kabul aracı** | DOKUNULMADI. Sabiti yok; geçmiş bir renk partisi artefaktını bugünkü veriyle yargılıyor — 29 sayısı bir gerileme ölçmüyor |
| SINAV-RENK-98-0903.py | — | `<beklenen_sayı>` argümanı zorunlu; argümanla koşunca `renk_olc.py --oner` çağırıp `_sinav_oner_*.txt` + `denetim/oneri-*.txt` YAZAR | **YANLIŞ KOVA — sınav değil, yan etkili akış aracı** | DOKUNULMADI, KOŞTURULMADI (yan etki). Kendi başlığı zaten "ADI BAYAT, evren 143" diyor |

Öngörüm "7/7 BAYAT, 0 GERİLEME" idi. Tutan 3 (ENKLAV · MANDA · KOSU8-ENKLAV, ANTLASMA kısmen).
Çürüyen: ANTLASMA'nın asıl kusuru sabit değil **yükleyiciydi**; MUKERRERANAHTAR bir
**GERİLEME**; IKINCI-GECIS + RENK-98 **sınav bile değil**. Envanter son satırından sınıf
okumak 4/7 yanlış verdi.

## 2. Ayrıştırma ölçümleri — fark VERİDEN mi KODDAN mı

- **ANTLASMA:** sınavın doğduğu commit'in (24546273, 21 Eyl) verisi + BUGÜNKÜ `suzgec.js`
  → **14 geçti · 0 kaldı** (238 · 23/78 · 25/93 birebir). ⇒ kod aynı sonucu veriyor, fark
  verinin büyümesi (3921 → 4299 yerleşim, isg 238 → 269). O commit'in kendi koduyla
  ölçülemedi: `SG.isgalliYerlesimler` o commit'te `suzgec.js`te YOK (sınav commit'lenmemiş
  koda karşı yazılmış).
- **ENKLAV 731 → 734 (+3) — dondurma altında, İHLAL SAYILMIYOR** (`KAMPANYA_DONDURMA`).
  KOSU8-ENKLAV artık bunu adıyla döküyor: `ac262390`dan bugüne **41 yeni · 38 kapanan**,
  çoğu aynı adanın yeniden anahtarlanması (gün 1370-01-01 → 1370-04-09, 1393-01-01 →
  1393-08-29 vb. — KD/tarih düzeltmeleri) ve yeni ara noktalar. Sınıflandırılmadı (görev
  dışı); liste `py denetim/SINAV-KOSU8-ENKLAV-0907.py` ile yeniden üretilir.

## 3. Yöntem (W7 KRONO-SAY-SAĞLAM ile aynı dört ayak)

| betik | dosyadan/aletten ölç | sınıf hâlâ var | yapay iki yönlü | negatif kontrol |
|---|---|---|---|---|
| ANTLASMA | isg evreni ↔ `girdi.py` (ikinci ayrıştırıcı) | isg > 0 · ORTA > DAR ×5 | Lozan'a yapay yerleşim: taraf işgali → +1 ve `k2=isg:osmanli` · taraf olmayan → +0 | eski süzgeçle (paket'siz) → **çıkış 2 ÖLÇÜLEMEDİ**, "6 kaldı" değil |
| ENKLAV | `denetle.degismez7` | 9/9 `enklav:true` | kaldır → 743 · geri koy → 734 | `enklav:false` → 734 (oynamaz) |
| MANDA | `degismez4` kaynağı (AST) | GEREKEN 4 alan var mı | yapay kaynak → `('a','b','ok','c')`, erken return sayılmaz | adsız eleman (`g(x)`) → REDDEDİLİR |
| KOSU8-ENKLAV | tavan kaynaktan · commit `git log -G` | tavan commit'inin değeri = bugünkü tavan (değilse çıkış 2) | — (çokluk farkı zaten iki yön: yeni/kapanan) | net ≠ yeni − kapanan ⇒ çıkış 2 |

Koşu sonuçları (worktree, origin/main a59e4b7b):
ANTLASMA çıkış **0** (hepsi ✓) · ENKLAV **0** · MANDA **0** · KOSU8-ENKLAV **0**.

## 4. Tavan
🔴 Tavan YAZILMADI, ÖNERİLMİYOR: bu dört betikte tavan yok, sabitler ölçüme çevrildi.
`BEKLENEN_ENKLAV_SORGU = 731` kampanya dondurmasında — 734 aşımı görünür, hükmü Emre'nin
dondurma kararına bağlı (`denetle.py §3092`).

## 5. Öneriler (koordinatöre)
1. **MUKERRERANAHTAR GERİLEMESİ** → `yerlesimler_ok107.js` Sayram + Taraz'daki eski
   (1370-01-01) `s:` satırı silinmeli; veri sahibinin kalemi. Bu sınav kapıda değil, o
   yüzden 6 gündür sessiz — W27'nin "kapıya aday" listesinde mi, bakılmalı.
2. **W27 envanter düzeltmesi:** IKINCI-GECIS + RENK-98 "BAYAT SABİT ADAYI" değil,
   "ARGÜMANLI ARAÇ" kovası; RENK-98 yan etkili (dosya yazar) — toplu sınav taramasında
   koşturulmamalı.
3. **Yükleyici sınıfı — ADAY 30 betik:** `index.html`den `src="(data` okuyan 34 betiğin
   **30'unda "paket" kelimesi hiç geçmiyor** (4'ünde geçiyor, biri bu düzeltme). Kaba
   ölçüm: süzgeci olmayan, bütün `src`leri yükleyen betik etkilenmez — tek tek
   DOĞRULANMADI. Dikkat çeken ikisi: `ARAC-1DUNYA-A-SINA-0917.js` (W27'de **GERİLEME
   ADAYI** — gerilemesi aynı yükleyici kusuru olabilir) ve `ARAC-EKOKUMA-ANTLASMA-0921-SINAV.js`.
   Öneri: tek bir paylaşılan yükleyici (ör. `arac/odak_cozum.js`in yolu) — ayrı iş.

## 6. Çıktılar
- `denetim/BAYAT-SABIT-SAGLAM-1006.diff` — 4 dosya, +235/−46; origin/main'e karşı üretildi,
  `makine/umit`e `git apply --check` TEMİZ.
- Commit YOK (görev gereği). Worktree kaldırıldı.
