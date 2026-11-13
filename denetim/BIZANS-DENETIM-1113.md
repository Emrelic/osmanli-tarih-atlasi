# BİZANS (DOĞU ROMA) DENETİMİ — kronoloji × harita × kaynak (1281 → 1453/1460)

- **Tarih:** 13 Kasım 2026 · **Makine:** UMIT · **Ağaç:** worktree `umit-1113-bizans`, taban `origin/main` (f4b45bb0a)
- **Yöntem:** hafif kip. `denetle.py`, `coz-c`, `paketle` koşturulmadı. Yerleşim dönemleri `data/yerlesimler*.js`
  üzerinden node betiğiyle okundu (scratchpad); kronoloji `devletler.js`, `kronoloji_bizans.js`, `olaylar*.js`.
  Kaynak doğrulaması WebSearch ile (TDV ilk). **Veriye dokunulmadı.**
- **Kapsam sınırı:** Bizans künyesi (`bizans`, 0330–1453) ve 1281 sonrasına uzanan Bizans dönemleri. Epir, Trabzon, Mora
  Despotluğu, Latin İmparatorluğu, Balkan devletleri **ayrı raporlardır** (BALKAN-ORTACAG, BALKAN-HALEF); burada yalnız
  Bizans'ın bıraktığı ya da aldığı yerler.

## 0. Envanter (ölçüldü)

| Ne | Sayı |
|---|---|
| `bizans` künyesi | 1 (devletler.js:81, f 0330-05-11, t 1453-05-29), kendi kronolojisi 15 madde |
| Bizans sahipli yerleşim satırı (herhangi bir dönemde `d:"bizans"`) | ≈ 300 satır, 19 `yerlesimler*.js` dosyası |
| 1281 sonrasına uzanan Bizans dönemi (t ≥ 1281-01-01) | **223** |
| — bunlardan t = `1281-01-01` (kesim işareti, 1281 öncesi dönemin bölünmesi) | 11 (kırılma değil, ufuk işareti) |
| — t `-01-01` ile biten (yıl hassasiyetli, 1281 dışı) | 136 |
| — 1282–1461 arasında benzersiz (gün × yeni sahip) çifti | 83 |
| `bizans` künyesinin kronoloji maddesi | 15; `kronoloji_bizans.js` ayrıca ~50 madde |

**Ana hüküm:** Bizans'ın asıl kırılmaları (Bursa 1326-04-06, İznik 1331-03-02, Gelibolu 1354-03-02, Edirne 1361-05-05,
Selanik 1387-04-09, İstanbul 1453-05-29) kronolojide **gün aynı** ve haritayla örtüşüyor; bulunan sorunlar maddelerin
tarih/metin çelişkileridir, harita boşluğu değil. Ölçülemeyen yan: Değişmez 2'nin kendisi (`denetle` koşturulmadı).

## ① KRONOLOJİ — çelişkiler (3 bulgu, hepsi "Emre kararı")

| # | Kimlik | Atlasta | Kaynak | Sınıf | Öneri |
|---|---|---|---|---|---|
| K1 | devletler.js:95 (`bizans`) · olaylar_ek.js:119 | Künye maddesi **1391-01-01** "Bayezid İstanbul'u kuşattı"; olaylar_ek'te **1391-10-01** "ilk abluka" — iki madde birbirini tutmuyor | TDV «Bayezid I» (İnalcık): Bayezid «yedi yıldır abluka altında tuttuğu İstanbul'u **1394 ilkbaharında** yeniden sıkı bir kuşatma altına aldı»; Manuel'e Türk mahallesi/cami/kadı şartı | ÇELİŞKİ (3 tarih: ~1387 abluka başı, 1391, 1394) | Künye maddesini olaylar_ek.js:119 ile aynı güne hizala **ya da** TDV'ye göre `1394-04-01` (ilkbahar, ay hassasiyeti, ic_not'ta "abluka 1394 öncesi 7 yıl") yaz. Hangi olgunun işaretleneceği (abluka başı mı, sıkı kuşatma mı) Emre kararı. |
| K2 | devletler.js:92 | `1347-01-01` "VI. İoannis–V. İoannis iç savaşı" — gün yok, iç savaşı 1347'ye kilitliyor | İç savaş **Eylül/Ekim 1341 → 3 Şubat 1347** (Kantakuzenos'un İstanbul'a girişi); TDV «Kantakuzenos» aramada çıkmadı (ölçülemedi). 1347'nin tek başına yıl olması savaşın bitişi için doğru, başlangıç için yanlış | EKSİK-GÜN | `1347-02-03` + "iç savaşın sonu" metni; ikinci kaynak TDV «Kantakuzenos»/«Bizans» okunmadan gün yazılmaz. Başlangıç (1341) ayrı madde ister. |
| K3 | devletler.js:100 (`bizans`) · `mora-despotlugu` künyesi | Mora Despotluğu'nun Osmanlı'ya katılışı `1460-05-31` | TDV «Mezistre»: Mistra «**30 Mayıs 1460** tarihinde teslim oldu» (II. Mora seferi, Dimitrios) | ÇELİŞKİ (1 gün) | TDV esas ⇒ `1460-05-30`; Mora künye `t`si ve 6+ Mora yerleşiminin dönemi birlikte taşınmalı (BALKAN-HALEF hattında). Yalnız Mistra'nın teslim günü; Mora'nın tamamının düşüşü (Salmeniko 1461) ayrı. |

Doğrulandı (değişiklik gerekmez):
- `1302-07-27` Koyunhisar: Kur'an Ansiklopedisi «Koyunhisar Savaşı» 27 Temmuz 1302. Not: İnalcık 1301 olasılığını savunur;
  `ic_not`ta bu tartışma beyan edilmedi — **beyan eklenmesi** önerilir (kaynak: İnalcık, «Osman Gazi'nin İznik Kuşatması
  ve Bafeus Savaşı», 1960; TDV'de gün görülmedi).
- `1366-01-01` Gelibolu (kronoloji_bizans.js:299): zaten TDV «Murad I» «Zilhicce 767 / Ağustos 1366» ile beyanlı; yıla
  indirme Emre kararı (TEYIT-KARAR-1014). Harita kırılması `1366-08-01` (olaylar_ek.js:115 `1366-08-01` madde ile uyumlu).
  Kur'an Ansiklopedisi «Gelibolu»: 13 Ağustos 1366 alındı, 14 Haziran 1367'de Bizans'a bırakıldı (ikincil; gün TDV'de yok).
- `1361-05-05` Edirne: TDV «Edirne» (Gökbilgin): 1361 görüşü ağırlıkta; TDV «Murad I»: 762 baharı. Madde olaylar.js:24 ✓.
- `1376-09-01` Gelibolu'nun Osmanlı'ya devri: madde `1376-08-12` (IV. Andronikos'un darbesi, 20 gün) ✓; Wikipedia "Eylül 1376",
  akademik kaynak yalnız yıl veriyor.

## ② HARİTA UYUMU

### 2a. Sessiz değişim — ölçülemedi / kısmen ölçüldü
Kronoloji maddesi proxy'siyle (±30 günde Bizans/Osmanlı/Rum/Konstantinopolis anan madde) 83 kırılmanın **34'ünde
eşleşme bulundu**, 49'unda bulunamadı (çoğu `-01-01` yıl kırılması); ancak bulunamayanların çoğu Osmanlı kaynaklı maddelerle (devletler.js `osmanli` kronolojisi,
olaylar*.js) örtüşüyor ve anahtar-kelime aramam bunları kaçırdı (ör. Edirne 1361 ilk aramada "YOK" çıktı, elle bulundu).
Gerçek Değişmez 2 sonucu `py arac/denetle.py` çıktısıdır — **burada ölçülmedi**. Elle şüpheli kalan:

| # | Kırılma | Not |
|---|---|---|
| S1 | `1311-03-15` Tırhala, Yenişehir (Larissa) Bizans → `__BOSLUK__` + 4 yerleşim Bizans → Katalan | Halmiros savaşı (15 Mart 1311); Katalan Kumpanyası maddesi devletler.js:1159 `1305-04-30` — 1311 maddesi aranmalı |
| S2 | `1346-06-15` Sakız, Sisam Bizans → `sakiz-maona` | Giustiniani'nin Sakız fethi; ±30 günde madde bulunamadı (proxy) |
| S3 | `1423-09-14` Selanik Bizans → Venedik, `1430-03-29` Kesendire/Selanik, `1430-10-09` Yanya | Selanik 1387 maddesi var; 1423 ve 1430 maddeleri proxy'de görünmüyor (kronoloji_bizans.js:497 yalnız 1430) |
| S4 | `1401-01-01` Parga → Venedik, `1424-02-22`/`bulgaristan-prensligi`,`tbmm-turkiye` etiketli iki dönem | **Zincir şüphesi:** `tbmm-turkiye` (1920–23) bir Bizans dönemi ardılı olamaz — ya ardıl yerleşim `v:`/`kd:` yapısıyla çıkarılıyor (betik yanılmış olabilir) ya da hata. Dosya satırı elle okunmalı (ölçülemedi). |

### 2b. Haritanın tarihe uymadığı yer
**Bulunamadı** (kaynak doğrulamasıyla bir sınır/hayalet hatası saptanmadı). Doğrulanan kırılmalar: Bursa 1326-04-06,
İznik 1331-03-02, Gelibolu 1354-03-02, Edirne 1361-05-05, Selanik 1387-04-09, İstanbul 1453-05-29.

## ③ ÖLÇÜLEMEDİ
- `denetle.py` Değişmez 2/3/8 sonuçları.
- TDV «Kantakuzenos» ve TDV «Bizans» tam metni (arama çıkarımı yalnız özet verdi).
- Yıl-düzeyi kırılmalar: 136 dönem `-01-01` ile bitiyor; `kesinlik` alanını tek tek okumadım (yıl beyanlı olup olmadıkları ölçülmedi).

### Yıl hassasiyetli `-01-01` kırılmaları (toplu; beyan durumu ölçülmedi)
Örnekler: 1297 Karesi (12), 1308 Aydın (6), 1309 Çandar (6), 1349 Mora (7), 1345 Sırp/Nemanjiç (10), 1357 Süleyman Çelebi (6),
1334 Sırp (6). Gün gerektiren yerler için ikinci akademik kaynak aranırsa gün kazanılır
(Berat/Avlonya 1345 TDV'de yıl; Manastır/Ohri 1334 yıl).

## ④ EMRE KARARI BEKLEYENLER
1. K1: İstanbul kuşatma/abluka günü (3 tarih arasında seçim).
2. K2: iç savaş maddesi 1347-02-03 sonu + 1341 başlangıcı ayrı madde — TDV «Kantakuzenos» doğrulaması şartıyla.
3. K3: Mistra 30 Mayıs / 31 Mayıs — künye ve Mora yerleşimleri birlikte taşınacak (BALKAN-HALEF ile eşgüdüm).
4. Koyunhisar 1301/1302 beyanı.
