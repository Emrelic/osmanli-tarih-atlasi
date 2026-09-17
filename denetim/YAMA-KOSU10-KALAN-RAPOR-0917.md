# KOSU10-KALAN — "İNMEDİ" 24 kalemin yeniden ölçümü · 17 Eylül 2026

Oturum: KOSU10-KALAN (eski 1DUNYA-A) · sevk: 1.MURAT · girdi: `denetim/KOSU10-DOGRULA-0917.md`
Çıktı: **`denetim/YAMA-KOSU10-KALAN-0917.json`** — ÖNERİ, veriye YAZILMADI (KOSU13-YAMA yerleşim
dosyalarında çalışıyor; sıra 1.MURAT'ta).

## Yöntem
- 24 kalem altı gruba bölündü; beşini alt ajanlar (Opus), altıncısını bu oturum ölçtü. Uzlaştırma (G7) bu oturumda.
- Taban: bugünkü veri — `55a5b28 KOSU13-YAMA indi` DAHİL. Her kalem için güncel kayıt `girdi.yukle` + ham satırla okundu.
- Kaynak: yamanın beyanına güvenilmedi; TDV gövdeleri açılıp cümle arandı (`kaynak_durumu`: `dogrulandi` · `yamadan-aktarildi` · `olculemedi`).
- Günde çelişen kaynaklarda taraf SEÇİLMEDİ → `karar`.
- `eski` metinlerin dosyada birebir durduğu `ARAC-KOSU10-KALAN-SINA-0917.py` ile sınandı: **✗ 0**.

## Sayım
```
kova            kalem
uygulanabilir     72
karar             34
bloke             16
bildirim          28   (7'si uzlaştırmadan: mükerrer / Emre kararıyla çözülmüş)
kapandi            5
toplam           155
```
| grup | kapsam | UYG | KAR | BLO | BİL | KAP |
|---|---|---|---|---|---|---|
| G1 | Bitlis · KITA29 Ferhatpaşa | 8 | – | – | 4 | – |
| G2 | Ferhat Paşa cephesi · Kirmanşah | 18 | 5 | – | 7 | 2 |
| G3 | Cizre-Bohtan · Kartli-Kaheti · A6c · ARAS0048 | 4 | 4 | 6 | 3 | 2 |
| G4 | Budin · Debrecen · KITA14 · KRON3 · A6a | 12 | 5 | 4 | 5 | – |
| G5 | 2S-Rusya · RUS · A6b · Fizan · Kavalalı | 15 | 8 | 3 | 5 | 1 |
| G6 | Malaka · Niğbolu · Kilitbahir · KRON2 · HALKA-ADAY | 14 | 12 | 3 | 4 | – |
| G7 | uzlaştırma — Nahçıvan kümesi 1586 (Emre kararı) | 1 | – | – | – | – |

## DOGRULA raporunun bugün yanlış çıkan satırları
- **Maku ve Şerur "hiçbir yerleşim dosyasında yok"** — ikisi de VAR (`yerlesimler.js:1775`, `yerlesimler_kalite4.js:56`). Eçmiyazin `d:` artık boş değil (1724-35 inmiş).
- **Katar/Doha "yok"** — `Katar Yarımadası (iç, dolgu)` adıyla VAR, `v:` 1559-1670 inmiş (KAPANDI).
- **Malaka "dört yerde"** — SEKİZ yerde (künye kronolojisi, malay-sultanliklari, `kd:` ve `kademe_f5c9a5.js` kopyası dahil).
- **Kavalalı "koşu gerektirir"** — koşu çözmez: motor `DEVLET_HARITA`ya yalnız `s:` kimliklerini yazıyor, Mısır veride yalnız `v:kid` → anahtar hiç doğmaz. Çare `js/app.js:5992` `_cTarafRengi`'ye tâbi yedeği (Oturum 1).

## Önemli bulgular
1. **Emre'nin 13-14 Eylül Ferhat Paşa kararlarının HİÇBİRİ veriye inmemiş** (Hemedan · Burûcird · Luristan · Nihâvend · Ahar · Sarâb · Miyâne · Bîcâr · Nahçıvan 1586 …). Birleşik ve EMRE5 yamaları diskte duruyor. G2 + G7 bunları uygulanabilir kalemlere çevirdi.
2. **55a5b28 A6C ön koşulunu indirmeden indi** — KOSU13'ün `on_kosul 0` satırları (Tebriz 07-28 · 1731-11-15 penceresi · Nahçıvan t 1735-06-19) veride yok (G3).
3. **Kopya tuzağı:** `yer_yama_zend_kacar.js` birçok kaydın `s:` dizisinin tamamını taşıyor → yamaların `s:` BÖLME önerileri uygulanırsa geri alınır. G1/G2 önerileri bu yüzden `d:`/`v:` ekleme biçiminde. Ek kopyalar: `yer_yama_tbmm_1920_0905.js` (Kilitbahir · Erzincan · Maraş), `yer_yama_ferhatpasa.js` (Culfa), `yer_yama_cukurova_isg_0907.js` (Maraş), `yer_yama_balkan_1923.js` · `yer_yama_erken.js` · `yer_yama_gece_v3.js` · `yer_yama_romanya.js` · `yer_yama_litvanya.js` (G5).
4. **Ölçüm aletinin ilk sürümü `ad: "X"` (boşluklu) kopyaları kaçırıyordu** (G4 buldu, düzeltildi). Düzeltilmiş desenle G6 yeniden ölçüldü → Kilitbahir ve Erzincan'da iki yeni kopya çıktı ve yamaya girdi.
5. **Yeni kusurlar:**
   - Derbend `d:` 1578-1607 ile `s:safevi` 1509-1722 ÖRTÜŞÜYOR.
   - Ohri: TDV 1385-1395 arasını vassal idaresi sayıyor, atlas doğrudan.
   - Niğbolu'nun 1395-01-01 maddesi Debre'nin kırılmasını SAHTE kapatıyor.
   - Kilitbahir 1366/1376 Gelibolu maddelerinde anakronik anılıyor.
   - `polonya-erken` 9 noktada kullanılıyor, rengi yok.
   - `yer_yama_barka_dogu8.js` yetim ve 12 Eylül öncesi Bingazi hâlini taşıyor.
   - `kronoloji_kuzeyafrika.js` 1358 Tilimsan iki kez.
6. **TDV iç çelişkileri (karar):**
   - Kanije: 11 Rebîülâhir (20 Ekim) ile 13 Rebîülâhir (22 Ekim); hicrî günleri de farklı.
   - Şehzade Mustafa: aynı hicrî gün, farklı çeviri (5/6 Ekim); aritmetik sınama 6 Ekim Cuma'yı destekliyor.
   - Niğbolu: 1395 ile 1394.
   - 1732 antlaşması: 8 Ocak ile 10 Ocak.
   - Maraş: 1521 ile 1522.
   - Bitlis: H.938 yıla yayılıyor.

## Uzlaştırma (aynı kayda dokunan kalemler)
| kalem | karar |
|---|---|
| G2-MAKU · G2-GENCE-BERDE | mükerrer → G1 kalemleri uygulanır |
| G3-A6C-P0058A | mükerrer → G2-TIFLIS (bir kez) |
| K29-C2-GUMRU | Emre kararı 11 (örtülü Osmanlı) → G2-GUMRU |
| G2-ECMIYADZIN | G1'in belge alıntılı kalemi uygulanır; kaynak metnine Emre kararı 11 eklenir |
| K29-A2-SERUR · K29-B2-NAHCIVAN | Emre kararı 14 Eyl ("EVET TAŞI") → G2-SERUR + G7-NAHCIVAN-1586. G1'in şartlı-komşu itirazı kayıtta |
| G4-A6A-Y1b · G6-HALKA-ERZINCAN | aynı satır, farklı dilim — aynı partide; tbmm kopyasında iki dilim birden |

## Uygulama sırası önerisi (D166)
1. **Önce ön koşullar:** G3 A6c (Tebriz · Nahçıvan t · Şamahı) → G7 Nahçıvan 1586 → G1 Revan + Eçmiyazin (AYRILMAZ) + Gümrü (G2).
2. **Ferhat Paşa cephesi (G2):** her kalem kendi maddesiyle (G2-MADDE-1589 · 1588-AHAR-MEREND · EK2-TEBRIZ) AYNI partide.
3. **Bağımsızlar:** G6 Malaka · KRON2 (2·4·9·10·11·12·13) · HALKA Trablusgarp/Tilimsan/Kandiye/Derbend/Erzincan · G4 Kostayniçe/Dubrovnik/A6a · G5 RUS (maddeleriyle birlikte).
4. **Her partide:** `yer_yama` kopyaları + ek okuma/merak/savaslar bağları aynı anda (kalemlerde listeli) → `py arac/denetle.py` (2 · 2s · 2i · 2t DELTA) → `py arac/renk_olc.py`.
5. **Karar bekleyenler (34):** en yüksek etkili olanlar Niğbolu · Kilitbahir · Kanije · Şehzade Mustafa · Batum · Maraş · Budin 1529 · Cizre (Emre) · Kartli-Kaheti · Fizan (Emre) · Kazak Hetmanlığı Sol Yaka.

## Ölçülemeyenler
- Encyclopaedia Iranica bazı maddelerde 403 döndü (KANDAHAR iv · MOKRI 404).
- Şu kaynaklar okunmadı; bu kaynaklara dayanan kalemler `yamadan-aktarildi` ya da `karar`:
  - Eskandar Beg Monshi (Savory) · Kütükoğlu · Şerefnâme · Bilge 2017
  - BSE · Babilunga · Goldfrank · Kashirin
- Veriye yazılmadığı için `denetle.py` önce/sonra DELTA'sı ve petek benzetimi koşturulmadı. Uygulayıcı her partide koşturmalı.

## Toplu kopya taraması (düzeltilmiş desen)
- `SINA --kopya`: 72 uygulanabilir kalemin kayıtlarında, kalemin kendi metninde anılmayan kopya içeren **35 uyarı** çıktı.
- `ARAC-KOSU10-KALAN-KOPYAALAN-0917.py` ile her kopyanın hangi alanı yeniden yazdığı ölçüldü. Çoğu gürültü:
  - `hukuki_sinirlar.js` düğüm adları
  - `kademe_*` (yalnız k/m)
  - koridor geometrisi
  - yalnız `v:` taşıyan `vassal_kid` / `kid20`
  - yalnız `s:` taşıyan `zend_kacar` kopyası; kalemler `d:` değiştiriyor.
- **Gerçek geri alma riski: 8 kalem.** Kalemlere `kopya_riski_ek` olarak yazıldı; kopyalar `_sahiplik_uygula` globunda (`/^yer_yama.*\.js$/`):
  - `yer_yama_tbmm_1920_0905.js` → Bitlis · Manisa · Erzincan (`d:`/`s:` tamamı)
  - `yer_yama_manda_0906.js` → Nablus (`s:`)
  - `yer_yama_gece_v3.js` → Bükreş · Yaş (`isg:` tamamı; RUS kalemlerinin üçü)
- `yama_p0037_bekleyen.js` aynı `isg:` dizilerini taşıyor ama uygulayıcı globunda değil → emekli damgası önerilir.

## Aletler
`denetim/ARAC-KOSU10-KALAN-OLCUM-0917.py` (yer/madde/künye/ham) · `…-GUN-0917.py` (bir günün kırılma+madde görünümü) ·
`…-KRON2-0917.py` · `…-BIRLESTIR-0917.py` (yamayı üretir; UZLASTIR ve EK_KOPYA tabloları içinde) · `…-SINA-0917.py` (çapa sınavı + `--kopya`) · `…-KOPYAALAN-0917.py` (kopyanın yeniden yazdığı alanlar).
Grup ölçümleri (G1-G7) birleştiricinin girdisidir; yama dosyası onların tam içeriğini taşır.
