# BOLGE italya (ikinci dalga) — A: yerleşimsiz künyeler (UMIT alt ajanı, 15 Kasım 2026)

Dal: `umit-1115b-italya` (taban `origin/main` 8fb10bdf1). Kaynak okuma: Treccani sayfaları `WebFetch` ile (özetleyici model; "okundu" = sayfa metni cevaba girdi). Birinci dalga (`umit-1115-bolge-italya`) main'de değil; Verona'ya dokunulmadı.

## Yazılan (3 künye için yerleşim penceresi)

| Künye | Yerleşim | Pencere | Kaynak (gün/yıl) | Not |
|---|---|---|---|---|
| urbino-dukaligi | **Urbino (YENİ)**, `data/yerlesimler_italya_1115b.js` | 1443-04-25 → 1631-04-28 | Treccani EI «Urbino»: dük unvanı Siena'da 25 Nisan 1443; Francesco Maria II ölümü 28 Nisan 1631 (devoluzione). İkinci: DBI «Oddantonio». GÜN | `kur:`=1443-04-25 ve `bit:`=1631-04-28 **görünme/petek-ömrü sınırıdır, kent kuruluşu değil** (`neden:` alanında beyan). Önce/sonra toprak komşu peteklere (papalik) kalır. Ardıl zincir (Marche: Napolyon 1808, 1860 ilhakı) kaynaklı OKUNMADI → yazılmadı. 3 km mükerrer: yok (San Marino 28,7 km, Rimini 38 km). EI «Montefeltro» 26 Nisan der (çelişki, aynı kurum; 25 korundu). |
| padova-carrara | Padova (mevcut kayıt, `yerlesimler_avrupa.js`) | **1337-08-03 → 1345-01-01** (önceki: `__BOSLUK__` 1318-07-25..1345-01-01) | Treccani DBI «Carrara, Ubertino da»: 3 Ağustos 1337 «sancì l'effettivo costituirsi della signoria carrarese»; DBI «Carrara, Marsilio da»: Alberto della Scala esir, Marsilio senyör (3 Ağustos 1337). GÜN | Künye f=1318-01-01 içinde. Tek kurum (DBI iki madde). |
| della-scala | Padova | **1328-09-10 → 1337-08-03** | DBI «Carrara, Marsilio da»: Cangrande 10 Eylül 1328'de girdi, ertesi gün senyörlük. GÜN | 1328 girişi/devri 10/11 Eylül: atlas giriş gününü alır. |
| (Padova 1318-07-25 → 1328-09-10) | — | `__BOSLUK__` BEYANLI kaldı | DBI «Carrara, Giacomo da»: 25 Temmuz 1318 «eletto … capitano generale a vita e signore di Padova», ölüm 22/23 Kasım 1324. DBI Marsilio: 3 Eylül 1328'de Alman garnizonu görevden alındı | 1318-1328 kesintisiz Carrara senyörlüğü **kurulamadı**: 1319 Kasım'da Cangrande vekillerine devir, 1324 ölüm, 1328 öncesi Alman garnizonu (yılı okunmadı). Ara dönem için devlet künyesi/gün yok → boşluk beyanlı; padova-carrara uydurulmadı. |

D2 maddeleri: `data/kronoloji_sinir_italya_1115b.js` (1443-04-25, 1631-04-28, 1328-09-10, 1337-08-03). Padova 1345-01-01 ve 1318-07-25 kırılmalarının maddeleri zaten var (`olaylar_napolyon_italya_1028.js` 1318-07-25; carrara 1345 künye/zincir). `index.html`e 2 `<script>` satırı (?v= yok), `arac/girdi_listesi.py`ye 1 satır (liste motor tuzu DEĞİL).

## Yazılamayan künyeler (arandı / bulunamadı)

| Künye | Durum |
|---|---|
| verona-scaliger, verona-komunu, ezzelino-signoria, della-torre-signoria | Birinci dalga işi; DOKUNULMADI |
| torino-markizligi | Torino `data/yerlesimler.js` (YASAK dosya): 1000-1136 `__BOSLUK__`. Künye f=0940 (onyıl), t=1091-12-19 (gün okunmadı). Kuyruk kalem 4 (birinci dalga) geçerli. |
| trento-piskoposlugu | Trento 1281-1803-02-25 `almanya`; künye t=1803-01-01 ile pencere sınırı 1803-02-25 çelişir (Treccani 1802/1803). Pencere kurmak künye t kararı ister (RDH 25 Şubat 1803 kaynakla okunmadı) → yazılmadı. |
| pavia-komunu | Künye f=1100 (onyıl, Treccani «12° sec. primi consoli» — 1100 teyitsiz); t=1359 yıl. Pavia kaydı 962'de bitiyor. Pencere f'si kaynaksız olurdu (EO «Pavia»: 1164 Barbarossa komün özgürlükleri, 1359 Visconti — yıl). Düzeltme önerisi: 1164-01-01 → 1359-01-01 pencere + künye f=1164; kararı KASA/EMRELIC. |
| capua-prensligi, aquileia-patrikligi, taranto-prensligi | Künye gün/yıl uçları EI/arama özetinde okunmadı (Capua f=0900 onyıl, t=1135 teyitsiz; Aquileia 3 Nisan 1077 arama özeti; Taranto t 1465-03-30 DBI ile çelişir — fiilî 1463-11-15). Taranto `yerlesimler.js` (YASAK). |
| padova-carrara 1318-1328 | yukarıda |
| apulya-kontlugu-melfi, lombard-birligi, sardinya-aragon | Ek kaynak okunmadı; sardinya-aragon ikiz (pencere `aragon`/`ispanya`) |
| treviso, vicenza, pontecorvo, montalcino | Künye YOK (B bölümü); EI okumaları birinci dalga belgesinde |
