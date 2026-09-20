# GLM-7 · DUSUK-973 ayrıştırması (yalnız ölçüm)

- Betik: `glm/dusuk973.py` · JSON: `glm/DUSUK-973.json`
- Girdi: `glm/M-ALANI-ONERI.json` (üretici `glm/m_alani_oneri.py`) — yeniden üretilmedi, ölçülmüş çıktı sınıflandı
- DUSUK toplam: **991** kayıt

## Sebep sınıfları (öncelik: a > b > d; c kesişen boyut)

| sınıf | kayıt | benzersiz yerleşim | km (min/ortanca/max) | tanım |
|---|---|---|---|---|
| a-konum-celisiyor | 973 | 502 | 300.1/2457.3/10762.6 | aday bölge adı VAR (öneri_m dolu), konum ÖLÇÜLDÜ ve >300 km — beyan/çı |
| b1-pencere-bos | 7 | 7 | — | aday YOK — ±30 gün penceresinde madde hiç yok (yeni madde ister) |
| b2-aday-cikarilamadi | 11 | 11 | — | aday YOK — pencerede madde var ama metninden bölge adı çıkarılamadı (ö |
| d-baska | 0 | 0 | — | (a)+(b) dışında kalan DUSUK — üretim kuralında böyle yol yok; 0 beklen |

- (c) madde-ilgisizliği BAĞIMSIZ sebep değil: DUSUK kayıtların dayanak dağılımı {"pencere-bos": 7, "ayni-kirilmayi-kapatan": 427, "yalniz-pencere": 555, "tek-taraf-metinde": 2}; (a) içinde yalnız-pencere dayanaklı 550 kayıt

## (a) konum dağılımı

- 973 kayıtın tamamında km ölçülmüş: min 300.1 · ortanca 2457.3 · max 10762.6 km
  - ≤300 km: 0 kayıt
  - ≤500 km: 39 kayıt
  - ≤800 km: 112 kayıt
  - ≤1500 km: 218 kayıt
  - ≤3000 km: 598 kayıt

## Eşik duyarlılığı — E = 300/500/800 km (iki yön)

| eşik | DUSUK→ORTA | ORTA→DUSUK | net ORTA | net DUSUK |
|---|---|---|---|---|
| E=300 | 0 | 0 | 938 | 991 |
| E=500 | 39 | 0 | 977 | 952 |
| E=800 | 112 | 0 | 1050 | 879 |

- Sınav: E=300 (mevcut eşik) yükselen/düşen 0 — TUTTU ✓

## Örnekler — (a) grubundan en çelişkili 10

| yerleşim | tarih | öneri m: | km | m: şimdi | dayanak |
|---|---|---|---|---|---|
| Markovo | 1917-11-07 | Filistin | 10762.6 | (boş) | ayni-kirilmayi-kapatan |
| Olyutorsk (Arhangelsk) | 1917-11-07 | Filistin | 10735.4 | (boş) | ayni-kirilmayi-kapatan |
| Nijnekamçatsk | 1917-11-07 | Filistin | 10596.6 | (boş) | ayni-kirilmayi-kapatan |
| Penjinsk ostrogu | 1917-11-07 | Filistin | 10529.4 | (boş) | ayni-kirilmayi-kapatan |
| Verhnekamçatsk | 1917-11-07 | Filistin | 10435.9 | (boş) | ayni-kirilmayi-kapatan |
| Bolşeretsk | 1917-11-07 | Filistin | 10359.6 | (boş) | ayni-kirilmayi-kapatan |
| Tigil | 1917-11-07 | Filistin | 10262.5 | (boş) | ayni-kirilmayi-kapatan |
| Gijiga | 1917-11-07 | Filistin | 10185.1 | (boş) | ayni-kirilmayi-kapatan |
| Ostrovnoye (Anyuy panayırı) | 1917-11-07 | Filistin | 10166.3 | (boş) | ayni-kirilmayi-kapatan |
| Nijnekolımsk | 1917-11-07 | Filistin | 9939.3 | (boş) | ayni-kirilmayi-kapatan |

## Örnekler — (b) aday yok (b1+b2)

| yerleşim | tarih | alt | sonuc |
|---|---|---|---|
| Tırhala | 1311-03-15 | b1-pencere-bos | pencere boş |
| Yenişehir (Larissa) | 1311-03-15 | b1-pencere-bos | pencere boş |
| Cenne (Djenné) | 1591-04-13 | b1-pencere-bos | pencere boş |
| Gao | 1591-04-13 | b1-pencere-bos | pencere boş |
| Timbuktu | 1591-04-13 | b1-pencere-bos | pencere boş |
| Tanca | 1684-02-05 | b2-aday-cikarilamadi | aday çıkarılamadı |
| Lindi | 1698-12-13 | b2-aday-cikarilamadi | aday çıkarılamadı |
| Mikindani | 1698-12-13 | b2-aday-cikarilamadi | aday çıkarılamadı |
| Pangani | 1698-12-13 | b2-aday-cikarilamadi | aday çıkarılamadı |
| İsiolo | 1895-07-01 | b2-aday-cikarilamadi | aday çıkarılamadı |

