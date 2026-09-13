# C-FERHATPASA-HAT · Ferhat Paşa 1590 sınır çizgisi — TEK C KAYDI

```
OTURUM   C-FERHATPASA-HAT · 13 Eylül 2026 · koşu AKTİF → data/ yalnız hukuki_sinirlar.js (C dosyası koşu dışı)
YAZILAN  data/hukuki_sinirlar.js  →  YENİ kayıt `ferhad-pasa-1590-sinir-hatti`
                                     + `ferhad-pasa-istanbul-1590`e Nihâvend noktası ve Luristan çelişki notu
         bu rapor · commit YOK
GİRDİ    OLCUM-FERHATPASA-SEHIR-MATRISI-0913 (kuzey) · OLCUM-FERHATPASA-GUNEY-0913 · OLCUM-0047-FERHATPASA-BATI-0913
ALETLER  (scratchpad, depoya konmadı) hat_sina.js · hat_sina2.js · ek_yapistir.py ·
         denetim/ARAC-KITA15-CKATMAN-DOGRULA-0913.js (değiştirilmeden koşuldu)
```

## 0 · SEVK SIRASINDA GELEN İKİ BAĞLAYICI DEĞİŞİKLİK

1. **Emre ilkesi:** *"Atlası referans alamazsın."* Bu yüzden ilk sürümdeki köşeler (atlas noktalarının orta noktası) **atıldı**. Aynı yer çiftleri korundu, ama her yerin konumu **GeoNames**'ten okundu. Sahiplik hükmü raporların **kaynak** hükmü; atlasın gösterdiği sınav değildir.
2. **ASM-ARASTIRMA:** Ahar/Sarâb/Miyâne çalışması sürüyor. Bu yüzden köşe 3-6 `gecici:true` + `bekleyen:"ASM-ARASTIRMA…"` taşıyor.

## 1 · KÖŞELER (kuzey → güney · Osmanlı tarafı BATI, Hazar–Aras kesiminde KUZEY)

| # | köşe | lat | lon | hüküm dayanağı (iki uç) | konum | doğr.? |
|---|---|---|---|---|---|---|
| 1 | Bakü ↔ Lenkeran (Hazar kıyısı) | 39.5659 | 49.3713 | Bakü OSM: TDV baku · Iranica BAKU ║ Lenkeran SAF: Narkvevebi IV s.82 ← Pigulevskaya · Petrushevsky | GeoNames orta nokta | ✗ |
| 2 | **Hudâferin köprüleri (Aras)** | 39.1500 | 46.9416 | Arakel s.31 *"up to Khudafrin"* — kaynakta ADIYLA | Wikipedia + NE `Aras` 1,0 km | **✓** |
| 3 | Ahar ↔ Meşkin | 38.4381 | 47.3758 | Ahar OSM-tâbi: Eskandar II s.582-583 ║ Meşkin BELİRSİZ | GeoNames | ✗ · geçici |
| 4 | Sarâb ↔ Erdebil | 38.0952 | 47.9149 | Sarâb OSM (çıkarım) ║ Erdebil SAF: Eskandar · TDV · Narkvevebi | GeoNames | ✗ · geçici |
| 5 | Miyâne ↔ Halhâl | 37.5196 | 48.1221 | iki uç BELİRSİZ | GeoNames | ✗ · geçici |
| 6 | Miyâne ↔ Zencan | 37.0486 | 48.1056 | Miyâne BELİRSİZ ║ Zencan SAF (0047) | GeoNames | ✗ · geçici |
| 7 | Sakkız ↔ Bîcâr | 36.0582 | 46.9392 | Sakkız örtülü ║ Bîcâr BELİRSİZ | GeoNames | ✗ |
| 8 | Kirmanşah ↔ Bîcâr | 35.0904 | 47.3350 | Kirmanşah örtülü ║ Bîcâr BELİRSİZ | GeoNames | ✗ |
| 9 | Kirmanşah ↔ Hemedan | 34.5567 | 47.7897 | ║ Hemedan SAF: Monshi s.587·690·825 · Iranica | GeoNames | ✗ |
| 10 | Nihâvend ↔ Hemedan | 34.4950 | 48.4444 | Nihâvend OSM: TDV nihavend--iran · Monshi · Iranica | GeoNames | ✗ |
| 11 | Nihâvend ↔ Burûcird | 34.0440 | 48.5629 | Burûcird SAF: Monshi s.643-644 (1593) | GeoNames | ✗ |
| 12 | Luristan (Hürremâbâd) ↔ Burûcird | 33.6925 | 48.5536 | Luristan OSM-tâbi 1590: Monshi s.643 · TDV luristan | GeoNames | ✗ |
| 13 | Luristan ↔ Dizfûl | 32.9344 | 48.3807 | Dizfûl SAF: Monshi · TDV huzistan | GeoNames | ✗ |
| 14 | Kût ↔ Dizfûl | 32.4469 | 47.1119 | Kût örtülü ║ Dizfûl SAF | GeoNames | ✗ |
| 15 | Ammâre ↔ Havîza | 31.6487 | 47.6093 | Ammâre örtülü ║ Havîza SAF-tâbi: Monshi · Iranica IRAQ iv | GeoNames | ✗ |
| 16 | Kürne ↔ Havîza | 31.2385 | 47.7538 | Kürne örtülü ║ Havîza | GeoNames | ✗ |
| 17 | Basra ↔ Ahvaz | 30.9136 | 48.2323 | Basra OSM: TDV basra ║ Ahvaz örtülü-SAF | GeoNames | ✗ |
| 18 | Fâv ↔ Abâdân | 30.1567 | 48.3887 | Fâv örtülü ║ Abâdân BULUNAMADI | GeoNames | ✗ |
| 19 | Şattülarap ağzı | 29.9612 | 48.5318 | 1590 için sınır diye anan kaynak okunmadı | Natural Earth rivers | ✗ |

**18/19 köşe `dogrulanmadi:true`.** Sebep: orta nokta bir kaynak değildir. İki kaynaklı yer arasında bile sınırın **tam orta noktadan** geçtiğini söyleyen kaynak yok. Iranica BOUNDARIES i: sınır **kuşak**tır.

**Birleşmeler:**
- **36°K:** kuzey köşe 7 doğrudan güney düğüm 3'e bağlandı.
  - GUNEY düğüm 1 (Şehrizor|Bâne) ve 2 (Halepçe|Merîvan) **atıldı**. İkisi Bâne ve Merîvan'ı Safevî ucu sayıyordu. Oysa 0047 ikisini **kaynaklı** Osmanlı-tâbi buldu (BOA hükümleri).
  - Kayıtta `atilan_koseler` altında duruyorlar.
- **Hazar ucu:** kuzey köşe 1'deki Mahmudâbâd'ın hükmü belirsiz ve GeoNames'te kaydı yok. Yerine kuzey kolunun kendi bant notundaki kaynaklı çift kondu: Bakü ↔ Lenkeran.
- **Körfez ucu:** köşe 19 eklendi. Köşe 18 karada bitiyor ve son segmentin uzantısı Fâv'ı Safevî tarafına düşürüyordu. Bu uç eklenince Fâv doğru tarafta kalıyor (ölçüldü).

## 2 · TARİHLER — yalnız kaynaktan

```
f        1590-03-21  Adlığ 2026 [298]        ⚠ Kütükoğlu 1962: "22 Mart 1590'a kadar" — 1 gün, ÇÖZÜLMEDİ
t        1603-10-21  TDV tebriz [58]
t_hukuki 1612-11-20  TDV nasuh-pasa [73]
```
🔴 **t_uyari — güney kesimi 1603'e kadar geçerli değil.**
- Luristan 1592/93'te Safevî'ye döndü (Monshi s.643-644). TDV ise "1603" diyor; **çelişki**.
- Değişim **günü** kaynakta yok. Bu yüzden kayıt bölünmedi; 1593 hattı çizilmeyen `guney_1593_varyant` alanında duruyor.
- O varyantın iki köşesinin GUNEY koordinatı atlas orta noktasıydı. Koordinatlar **alınmadı** (`null`).

## 3 · TARAF SINAVI

**Sınav A — GeoNames konumu + kaynak hükmü** (`hat_sina2.js`). 35 yer, 5'i belirsiz:
```
kaynaklı, köşeye KATILMAYAN (bağımsız)   10/10  Tebriz · Bağdat · Merâga · Kasr-ı Şîrîn · Merîvan · Bâne · Mahabad · Sultâniye · Astara · Şüşter
kaynaklı, köşeye katılan                12/12  ⚠ DÖNGÜSEL — köşe onların ortasından kuruldu, kanıt değil (D123)
çıkarım 1/1 · örtülü 7/7 · karşı 0
belirsiz 5   Miyâne · Abâdân → Osmanlı yanı ;  Meşkin · Halhâl · Bîcâr → Safevî yanı
```
İstenen dört nokta:

| yer | sonuç |
|---|---|
| Tebriz (38.0800, 46.2917) | OSM ✓ |
| Bağdat (33.3406, 44.4009) | OSM ✓ |
| Erdebil (38.2497, 48.2931) | SAF ✓ |
| Hemedan (34.7992, 48.5144) | SAF ✓ |

`negatif_taraf:"osmanli"` doğru; kuzey→güney sırada Osmanlı tarafı `cross<0`.

**Sınav B — geniş evren** (`hat_sina.js`):
- Konum için girdi.yukle() kullanıldı, yalnız **konum vekili** olarak (sahiplik alınmadı).
- Hükümlü 110 nokta: 103 uyumlu · **0 karşı** · 7 belirsiz.
- Atlas konumu ile GeoNames arasında en büyük sapma **3,7 km** (Bağdat). Kût'un 1121 km'si aletin ad eşleştirme hatası.

**Sınav C — app.js'in GERÇEK kodu** (node'da eval edildi):
- **Eski kod** (ilk↔son kirişi): `kapsama.kutu` ile 30 hükümlü yerde **10 YANLIŞ**.
  - Erdebil · Hemedan · Zencan · Sultâniye · Lenkeran · Astara · Burûcird · Dizfûl · Havîza → osmanli
  - Bakü → safevi
  - Bu bir ENGEL'di; tahtaya M-3783 olarak yazıldı.
- **C-NSEGMENT oturumunun çalışan app.js'i** (N segmentli bölme, commit'lenmemiş): aynı kutu ile 30/30 · geniş evrende 100/100 doğru.

⚠️ §8.2'nin yerel en-yakın-segment cross'u nokta-poligon testinden 6 noktada ayrıldı. Hepsi hattan uzak, bir köşeye eşit mesafede duran noktalar. §8.2'nin kendi "tasarlandı, sınanmadı" uyarısı ölçüldü; sınav nokta-poligon testiyle yapıldı.

## 4 · ÇİZİM + RENK — `ARAC-KITA15-CKATMAN-DOGRULA-0913.js`

```
HUKUKI_SINIRLAR 9 kayıt · 8/9 "çiziliyor VE gri yok"
ferhad-pasa-1590-sinir-hatti   çizgi 19 nokta · dolgu 0 · renk [] · ters sıra sınavı ✓
ferhad-pasa-istanbul-1590      15 nokta, 15'i #8e0b22 (Nihâvend eklendi) · dolgu 0 (bolge türü kutu istiyor, kayıtta yalnız odak_kutu)
🔴 misir-sudan-22-paralel-1899  GRİ (#9a9a9a) — ÖNCEDEN VAR, bu işle ilgisiz (ingiliz-sudani rengi yok)
```

**Dolgu kararı — DOLGUSUZ yazıldı.** Kayıtta `kapsama.tur:"poligon"` + boş `nokta_dizisi` var; `kutu` yalnız belge amaçlı. Dört sebep:
1. Yazıldığı anda yayındaki kod 10 yeri yanlış boyuyordu.
2. N segmentli kod henüz commit'lenmedi.
3. Tek renk dolgu **tâbi ayrımını düzleştirir**: Kutaisi · Zagem · Ahar · Merîvan · Bâne · Mahabad · Luristan tâbi, Havîza Safevî tâbisi.
4. 18/19 köşe doğrulanmadı ve 4 köşe geçici (D089).

⇒ Dolgu isteniyorsa `tur:"poligon"` ve `nokta_dizisi:[]` satırları silinir. Bu yalnız C-NSEGMENT indikten sonra ve koordinatör kararıyla yapılır.

**Çift boyama yok.**
- Eski `bolge` kaydı dolgu üretmiyor: `_cBolgeGeometrisi` `kapsama.kutu` istiyor, kayıtta yalnız `odak_kutu` var.
- İki kayıt aynı pencerede (1590-03-21 → 1603-10-21) birlikte görünür: kesik çizgi + 15 nokta.
- Eski kaydın koordinatlı **15 noktasının 15'i** çizginin Osmanlı tarafında.
- Eski kayıttan veri silinmedi.

## 5 · NİHÂVEND ADASI

- Hat türü (`dogal-tanimsiz`) nokta çizmez. Bu yüzden Nihâvend, eski `ferhad-pasa-istanbul-1590` kaydının `nokta_atamalari`na **eklendi**: GeoNames 34.1908/48.3744, `osmanli`.
  - Kaynak: TDV nihavend--iran · Monshi s.583, 618, 824 · Iranica.
- ⚠️ Kaydın `t:1603-10-21`'i Nihâvend için kaynaklı değil; düşüş 1011/1602-03, gün yok. Bu, noktanın `not` alanında yazılı.
- Aynı kaydın **Luristan** noktasına çelişki notu eklendi: Monshi 1592/93 ↔ TDV 1603. İşaret değiştirilmedi, taraf seçilmedi.

## 6 · ARAŞTIRMA KOLLARININ ATLASTAN ÖDÜNÇ ALDIĞI GÜN VE KOORDİNATLAR (Emre ilkesi · yeniden kaynaklanacak)

| kol | ödünç | nerede |
|---|---|---|
| KUZEY | **7 köşenin 7'si** atlas noktalarının orta noktası; Emre poligonunun köşeleri atlas koordinatı | SEHIR-MATRISI §⑥ · JSON `sinir_hatti_kuzey` · `ARAC-…-MATRIS-BOLGE` ("hat köşeleri atlastan") |
| KUZEY | **Merend** `f 1588-09-01` = **Gence'nin günü** (D084) · `t 1603-10-21` = Tebriz kuşağı | YAMA O-MEREND `gun_gerekcesi` |
| KUZEY | **Selmâs** `1585-09-25 → 1603-10-21` = **Hoy'un günleri** (42 km, D084) | YAMA O-SELMAS |
| KUZEY | **Gümrü** `1583-09-13 → 1604-06-08` = **Revan/Eçmiyadzin C1/B1 günleri** | YAMA O-GUMRU |
| KUZEY | "örtülü" hükümler, atlas orta noktalı hattın batısında kalma ölçüsüne dayanıyor | matris `tur:ortulu` (16 yer) |
| KUZEY | Tiflis bitişi `1606-01-01` atlasta bırakıldı ("öneri yok") · Ordubad `1585-01-01` "Nahçıvan kalıbı" | matris notları |
| GÜNEY | **13 + 11 düğüm** atlas noktalarının orta noktası; poligon köşeleri (İsfahan · Behbehan) atlas | GUNEY §① §⑥ · JSON `sinir_hatti_guney*` |
| GÜNEY | **Nihâvend bitişi `1603-10-21`** atlasta bırakıldı ("gün kaynaksız, DOKUNMA") · ada koordinatı atlas | YAMA A4 · `osmanli_adasi` |
| 0047 | **Kasr-ı Şirin** `1534-12-04 → 1623-11-28` = **Hânekîn'in günleri** (25 km, D084) | YAMA A0047-1 |
| 0047 | **Merîvan · Bâne · Mahabad · Sakkız · Serdeşt** `1585-09-25 → 1603-10-21` = **Tebriz kuşağı (Mîyandoab/Merâga) günleri** (D084) | YAMA B0047-1/2/3 · C0047-1/2 · karar C0047-4 |
| 0047 | Tablonun lat/lon sütunu ve hat A-D km testi atlas koordinatlarıyla | 0047 §⓪ §⑥ |
| MEVCUT C | `ferhad-pasa-istanbul-1590` noktalarının koordinatları atlas noktalarıyla birebir aynı (ör. Tebriz 38.0800/46.2920) | hukuki_sinirlar.js — bu işte değiştirilmedi |

📌 Bu yeni kayıtta atlastan alınmış **hiçbir** koordinat ya da gün yok. Konumlar GeoNames, Wikipedia+Natural Earth ve Natural Earth'ten; günler TDV ve Adlığ'dan.

## 7 · AÇIK KALEMLER

```
① 18/19 köşe dogrulanmadi — sınır kuşak; kaynaklı sınır ögesi yalnız Hudâferin (ve 1593 varyantında Kür-kûh, konumu ARANMADI)
② köşe 3-6 geçici — ASM-ARASTIRMA sonucu bekleniyor
③ Luristan 1592/93 günü → kayıt ikiye bölünecek; guney_1593_varyant koordinatları null
④ Nihâvend düşüş günü · Abâdân 1590 sahibi · Mahmudâbâd/Salyan hükmü — bulunamadı
⑤ f: 21 ↔ 22 Mart 1590 (Adlığ ↔ Kütükoğlu aktarımı)
⑥ Pelengân (Ardalan) · Kür-kûh gazetteer konumu — aranmadı
⑦ dolgu: C-NSEGMENT inince açılabilir (30/30 ölçüldü) ama tâbi düzleşmesi kararı koordinatörün
⑧ misir-sudan-22-paralel-1899 gri — önceden var, ayrı iş
⑨ ARAC-KITA15 aracı "ciziliyor" sütununda nesne basıyor (g.dolgu.length || g.hat) — kozmetik, sonucu etkilemiyor
```

## 8 · ÖLÇEMEDİKLERİM (D107)

```
BULUNAMADI   Mahmudâbâd GeoNames kaydı · 1590 için Şattülarap'ı sınır diye anan kaynak
OKUMADIM     raporların tarih kaynaklarını yeniden (D104) · Feridun Bey Münşeât
ÖLÇÜLEMEDİ   C-NSEGMENT app.js'i commit'lenmediği için "yayındaki" davranış — iki sürüm de ayrı ayrı ölçüldü (§3C)
```
