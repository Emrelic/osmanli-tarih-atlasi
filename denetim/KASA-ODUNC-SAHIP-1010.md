# KASA-ODUNC-SAHIP-1010 — ÖDÜNÇ SAHİP: mekanik aday üretimi ÖLÇÜLDÜ, üç dedektör de güvenilmez

Görev: YILDIRIM BAYEZIT (KANADA iniş mesajı ④: "ÖDÜNÇ SAHİP TURUNA BAŞLA … mekanik aday üret, elle tarama değil · künye
penceresi × nokta koordinatı × dönem · öngörü + evren önce, birim KAYIT") · KASA · salt okuma.
**Bu rapor öngörüden ÖNCE durdu:** öngörünün evreni bir dedektöre dayanacaktı, ve dedektörlerin hiçbiri geçerlik sınavını
geçmedi. Güvenilmez bir evren üstüne öngörü yazmak, evrensiz öngörüden daha kötü (sayı var gibi görünür). ⇒ Önce
dedektör sınavı, karar senin.

## 0. Ön soru — ABD künyesi var mı? (koordinatör ⚠️)
**VAR.** `abd` "Amerika Birleşik Devletleri" f 1776-07-04 · t 1945-09-02 · `harita:"abd"` · `renkler.py:2298` BOYALAR'da
`#a828d8` · 228 KAYIT zaten kullanıyor. ⇒ 11 ABD kaydının düzeltilmesi BOYASIZ DELİK açmaz.

## 1. Bilinen pozitifler (sınav kümesi)
- 11 ABD KAYDI (KANADA §5): Fort Astoria · Fort Vancouver · Fort Nez Percés · Fort Colvile · Spokane House · Boise ·
  Fort Hall · Duluth · Grand Portage · Keweenaw · Pembina.
- 2 U1281 (ODUNC-UC): Mankup → Bizans · Akçakale → Memlûk.
- ⇒ 13 KAYIT.

## 2. Üç dedektör, üç ölçüm (hepsi `girdi.yukle` + `oku_devletler`; grep yok)
| dedektör | tanım | aday | bilinen pozitif duyarlılığı | kesinlik (gözle sınav) |
|---|---|---|---|---|
| **D1 komşu uyuşmazlığı** | 1290-1920 her 10 yılda; nokta sahibi 400 km içindeki ≤8 komşunun HİÇBİRİNDE yok VE komşuların ≥ %75'i başka bir sahip | 173 KAYIT (≥2 tarihte) | **1/13** (yalnız Keweenaw) | ölçülmedi |
| **D2 hat tarafı (ham)** | `d_sinirlar*.js`'in yönlü 382 hattı (`sol_taraf`); ≤250 km noktanın hattın hangi tarafında olduğu ↔ sahibi | 484 KAYIT | **6/11** ABD | **çok düşük** — dondurulmamış 20'lik bir bakışta Basel (İsviçre), Lozan (İsviçre), Kilis (TBMM), Manastır (SHS), İşkodra (Arnavutluk), Dubrovnik/Kotor (SHS), Freiburg, Maribor DOĞRU sahipte ama "yanlış taraf" sayıldı |
| **D3 hat tarafı (öz-ayarlı)** | D2 + her hattın yönü kendi ≤50 km noktalarının çoğunluğundan; ≥ %80 tutarlılık yoksa hat atlanır | 34 KAYIT | **0/11** | ölçülmedi |
- D3'te 382 hattın **289'u ayarlanamadı**: yakın noktaların %20-80'i bir tarafta. ⇒ `sol_taraf` yönelimi hat hat tutarsız ya
  da çizgi/nokta geometrisi yan testine elvermiyor (kısa segmentler, kıvrımlı hatlar, 1923 hattının erken dönemlere
  uygulanması). Ters çevrilen hat 0, yani sorun basit bir işaret çevrilmesi değil.
- D2'nin yakaladığı 6 ABD kaydı doğu/prairie hatlarına yakın olanlar. Kaçanlar (Astoria · Vancouver · Walla Walla ·
  Boise · Fort Hall) Oregon içinde, herhangi bir hattan >250 km. Batı 49. paralel hattı veride neredeyse yok:
  `d1923-ca-us-bati-1` yalnız 4 km.

## 3. Neden çalışmıyor — sınıfın doğası (ölçümün yorumu)
- **Ödünç sahip KÜMELİ yazılıyor:** bir paket bir bölgeyi tek varsayımla doldurmuş. Oregon'un 7 karakolunun hepsi `kanada`,
  hepsi `yerlesimler_kamerika.js`.
- ⇒ D1 (yerel tutarlılık) TANIM GEREĞİ kör: hatalı nokta hatalı komşularıyla uyumlu.
- D2/D3 (dış çapa) doğru fikir, ama çapa verisi (yönlü sınır hatları) yön ve kapsam bakımından bu iş için yeterince
  temiz değil.
- **Bilinen 13'ün 13'ü KAYNAK OKUMASINDAN çıktı** (KANADA bölge ataması + ODUNC-UC örneklemi), dedektörden değil.

## 4. Öneri (karar senin)
- **(a) Paket × sahip birimi:** evren = (veri dosyası, sahip künyesi) çiftleri. Her çiftten koordinatı en uç
  (künyenin bilinen çekirdeğinden en uzak) 1-2 kayıt kör doğrulanır.
  - Gerekçe: hata paket düzeyinde sistematik. Bir çiftte bir yanlış, çiftin tamamını şüpheli yapar (Oregon emsali).
  - Evren ölçülebilir ve sonlu.
- **(b) D2'nin ≤ 10 km kovası (23 KAYIT):** hatta çok yakın noktalar ya koordinat hassasiyeti ya gerçek sınır kayması.
  Küçük ve ucuz, ama ödünç sahip değil sınır-nokta sınıfı ⇒ ayrı.
- **(c) Yalnız bilinen 11 ABD kaydını yaz** (KANADA'nın devamı; ABD'ye geçiş günü kaydı başına kaynak) — sınıf evreni
  sorusundan bağımsız, hemen yapılabilir.
- Önerim: **(c) şimdi, (a) sonra.** (a)'nın öngörüsü evreni kurulunca yazılır.
