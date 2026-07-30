# Oturum 12 — Batı ve Kuzey Avrupa yerleşim katmanı — İLERLEME / BİLDİRİM

> **GÜNCELLEME (devam görevi, 2026-07-30):** dosya **237 noktaya** çıktı —
> İberya kıyısına 9 nokta eklendi (Oran taşması / hatalar 8: Motril, Mojácar,
> Dénia, Castellón, Tortosa, Huelva, Lagos, Setúbal, Aveiro). Ölçüm: Águilas
> kıyısında en yakın nokta Granada 203 km → **Cartagena 34 km**; Almería
> kıyısı 135 → 31 km; Alicante güneyi 124 → 13 km; Huelva kıyısı 101 → 20 km.
> İberya'da eşik (120 km) aşan ızgara noktası 720 → **31**.
> İbiza/Menorka/Mayorka zaten mevcutmuş (917'lik canlı veri) — eklenmedi.
> Bu belgenin §4'ü yerine **`OTURUM-12-KIMLIK.md`** (DSATUR girdisi: yaşam
> aralıkları, ölçülmüş komşuluk çizgesi, kesit sahne sayımları, granülerlik
> kararı), §5'i yerine **`OTURUM-12-DUZELTMELER.md`** (satır numaralı tam
> kayıtlar) geçerlidir.

**Durum: TAMAM.** `data/yerlesimler_avrupa.js` oluşturuldu — **237 nokta**.
Commit atılmadı, üretim çalıştırılmadı (oturum kuralı). Bu belge entegrasyon
oturumuna bildirimdir.

| Bölge | Önce | Eklenen | Görev hedefi |
|---|---|---|---|
| Britanya ve İrlanda | 3 | **43** | 30-40 |
| Fransa | 6 | **46** | 40-50 |
| İberya | 11 | **35** | 35-45 |
| İskandinavya + Danimarka | 7 | **33** | 30-40 |
| Alçak Ülkeler + Batı Almanya + İsviçre | ~8 | **47** | 30-40 |
| İtalya | 47 | **24** | +20 |

## 1. B-6 ve B-7 kapandı mı — ölçüldü

Ölçüm, `arac/denetle_kapsama.py`'nin kendi fonksiyonlarıyla (aynı kara maskesi,
aynı 0.25° ızgara, eşik 120 km), mevcut 738 + yeni 228 nokta birleştirilerek
yapıldı. Denetim raporundaki sonda koordinatlarında:

| Sonda (rapor koordinatı) | Önce | Sonra |
|---|---|---|
| B-6 Jutland (55.5, 8.5) | Hamburg 253 km | **Ribe 41 km** |
| B-6 Kuzey Jutland (57.0, 9.5) | Kopenhag 238 km | **Aalborg 38 km** |
| B-7 Bretanya (48.5, -2.8) | Paris 388 km | **Saint-Malo 70 km** |
| B-7 Bretanya batı ucu (48.4, -4.4) | Londra 462 km (BOŞ boyanıyordu) | **Brest 8 km** |

Jutland artık en yakın peteğini Danimarka noktalarından alır (B-6), Bretanya
Fransız/Breton noktalarından (B-7). Bölge özeti (eşik 120 km, en kötü boşluk /
eşiği aşan ızgara noktası):

| Bölge kutusu | Önce | Sonra |
|---|---|---|
| Batı Avrupa | 537 km / 1310 nokta | **153 km / 23 nokta** |
| Kuzey Avrupa | 385 km / 1065 | **278 km / 537** |
| İberya | 357 km / 730 | **146 km / 41** |
| İtalya | 254 km / 202 | **146 km / 12** |
| Orta Avrupa | 263 km / 767 | 206 km / 426 |

Kalanlar: Kuzey Avrupa'nın kalıntısı ağırlıkla lat 60-62 arası kuzey İskandinavya
ve Baltık doğusudur (kutu sınırı; bu oturumun kapsamı dışı). Orta Avrupa (doğu
Almanya-Polonya içi) başka oturumun işidir; buradaki iyileşme yan etkidir.

## 2. Öz-denetim sonuçları

- `denetle.py`'nin ayrıştırıcısıyla (`oku_pencere`) sorunsuz okunuyor — 228 kayıt.
- Dönem sağlığı: her kayıt `kur`/1281'den 1923-10-29'a boşluksuz ve çakışmasız
  örtülü; sıfır uzunluk / ters dönem yok. (Kayıtların tamamı `s:`; `d:`/`v:` boş —
  **Değişmez 2 yükü doğurmaz**, o denetim yalnız Osmanlı `d`/`v` kırılmalarını sayar.)
- 3 km mükerrer: mevcut 880 kayda (yerlesimler + iran + ortaasya) ve kendi içine
  karşı **0 ihlal**. İlk taslaktaki iki mükerrer (Palma, Helsinki — meğer
  yerlesimler.js'te varmış) çıkarıldı.
- Karada mı (ne_10m_land.geojson): **228/228 karada.** Stavanger yarımadası 10m
  maskede çözünmediği için nokta 4 km güneybatıya (58.940, 5.680) alındı.
- `py arac/denetle.py` (üç değişmez, benim dosyamı okumaz): **SONUÇ temiz** —
  738 yerleşim, 35 sahipsiz (beklenen 35), 427 kırılma 0 açık. (427 ≠ 426 notu
  betiğin kendi "sadece bilgi" satırıdır, bu oturumdan önce de vardı.)

## 3. ⚠️ BOLGE kutusu dışında kalan 2 nokta

`box(-12, 1.5, 62, 62)`'nin **kuzeyinde**: **Trondheim** (63.43°K) ve
**Sundsvall** (62.39°K). Veri ileriye dönük hazır; kutu kuzeye açılana dek
çizilmezler. Dosya içinde tek tek işaretli. İzlanda ve Faroe hiç eklenmedi
(lon/lat tamamen kutu dışı) — kutu açılınca Reykjavík, Tórshavn eklenmeli.

## 4. EKLENMESİ İSTENEN DEVLET KİMLİKLERİ — renkler.py'ye yazılMADI

Dosyada kullanılan 35 kimlikten 20'si BOYALAR'da tanımlı; **15'i değil**.
Tanımlanana dek o pencereler boyasız kalır (delik değil, renksiz). Renk
seçimini komşuluk/DSATUR dengesi bilen entegrasyon oturumuna bırakıyorum;
aşağıda yalnız hangi devletlerle aynı sahnede komşu olduklarını not ettim.

### Birinci öncelik — geniş alan, uzun süre

| kimlik | tam ad | aralık (veride) | merkez | komşuları (renk uzak dursun) | kaynak |
|---|---|---|---|---|---|
| `iskocya` | İskoçya Krallığı | 1281–1707-05-01 | Edinburgh | ingiltere, norvec | standart (Britanya birliği 1707) |
| `irlanda` | İrlanda (Gal beylikleri; 1922 sonrası Serbest Devlet) | 1281–1603-03-30 ve 1922-12-06–1923 | — / Dublin | ingiltere | standart (Mellifont 1603, Serbest Devlet 1922) |
| `bretanya` | Bretanya Dükalığı | 1281–1532-08-13 | Rennes | fransa, ingiltere | standart (1532 Vannes birlik fermanı) |
| `burgonya` | Burgonya Dükalığı (Valois) | 1281–1482-03-27 (Dijon 1477'ye dek) | Dijon | fransa, almanya, ingiltere, isvicre | standart |
| `kastilya` | Kastilya Tacı | 1281–1479-01-20 | Toledo | aragon, navarra, granada, portekiz | standart (II. Fernando'nun tahta çıkışı) |
| `aragon` | Aragon Tacı | 1281–1479-01-20 | Zaragoza | kastilya, navarra, fransa, granada — ve Akdeniz'de venedik/ceneviz sahneleri | standart |
| `navarra` | Navarra Krallığı | 1281–1512-07-25 (Pau tarafı 1620'ye dek) | Pamplona | kastilya, aragon, fransa | standart |
| `isvicre` | İsviçre Konfederasyonu | 1332'den itibaren kademeli | Bern | almanya, fransa, avusturya, sardinya, milanoduka | standart |
| `belcika` | Belçika Krallığı | 1830-10-04–1923 | Brüksel | fransa, hollanda, almanya | standart |

### İkinci öncelik — küçük alan; istenirse komşuya sadeleştirilebilir

| kimlik | tam ad | aralık (veride) | merkez | sadeleştirme seçeneği |
|---|---|---|---|---|
| `siena` | Siena Cumhuriyeti | 1281–1555-04-17 | Siena | toskana |
| `ferrara` | Este Devleti (Ferrara; 1598 sonrası Modena) | 1281–1598 / Modena 1860'a dek | Ferrara/Modena | papalik |
| `mantua` | Mantua Dukalığı (Gonzaga) | 1281–1708-01-01 | Mantova | venedik veya milanoduka |
| `parma` | Parma Dukalığı (Farnese/Bourbon) | 1545-08-16–1860-03-18 | Parma | milanoduka |
| `piza` | Pisa Cumhuriyeti | 1281–1406-10-09 | Pisa | toskana |
| `luksemburg` | Lüksemburg Büyük Dükalığı | 1890-11-23–1923 | Lüksemburg | belcika veya hollanda |

Bu devletlerin `data/devletler.js` dizin kayıtları Oturum 3'ün işidir; orada da
yoklarsa eklenmeleri gerekir (bolge değerleri: `bati-avrupa`, `kuzey-avrupa`,
`iberya`, `italya`).

## 5. Mevcut kayıtlar için düzeltme ÖNERİLERİ (yerlesimler.js — Oturum 0'ın dosyası)

Yeni noktalarla yan yana durunca çelişecek mevcut kayıtlar. Ben dokunMADIM:

1. **Edinburg** `ingiltere` (tüm aralık) → 1707-05-01 öncesi `iskocya` olmalı;
   yoksa yeni İskoç noktaların ortasında tek İngiliz petek durur.
2. **Bordo** `fransa` (tüm aralık) → 1281–1453-10-19 `ingiltere` (Plantagenet
   Gaskonyası). Yeni Bayonne kaydı bu pencereyi kullanıyor.
3. **Dublin** `ingiltere` (tüm aralık) → 1922-12-06'dan sonra `irlanda`;
   çevresindeki yeni noktaların hepsi 1922'de Serbest Devlet'e geçiyor.
4. **Madrid, Sevilla** → 1479-01-20 öncesi `kastilya`; **Barselona, Valensiya,
   Mayorka (Palma)** → 1479-01-20 öncesi `aragon`.
5. **Oslo** → 1537-01-01 öncesi `norvec` penceresi (yeni Bergen/Tønsberg/
   Stavanger/Trondheim böyle; Oslo 1281'den itibaren danimarka görünüyor).
6. **Lizbon, Porto** (+ bu dosyanın 5 Portekiz noktası) → İber birliği
   1580-08-25–1640-12-01 `ispanya` penceresi eklenecekse **yedisine birden**
   eklenmeli; ben mevcut konvansiyona (kesintisiz portekiz) uydum.
7. İsteğe bağlı: **Marsilya** (Provence 1481'e dek Anjou), **Paris** (1420-1436
   İngiliz idaresi) — mevcut kayıtlar sade `fransa`; ben de yeni Provence/
   Dauphiné noktalarını aynı sadelikte tuttum, bilinçli karar entegrasyonun.

## 6. Belgelenmiş sadeleştirmeler (yeni dosyada)

- **Kalmar Birliği ve Danimarka-Norveç:** Norveç 1537'ye kadar `norvec`,
  1537–1814 `danimarka` ("Danimarka-Norveç" etiketi zaten bu birliği taşıyor),
  1814–1905 `isvec`, sonra `norvec` — mevcut Oslo kaydının 1814/1905
  tarihleriyle uyumlu.
- **Kiel (Holstein):** Danimarka krallarının imparatorluk fiefi; `almanya`ya
  sadeleştirildi. Schleswig tarafı (Flensburg, Aabenraa) `danimarka` →
  1864-10-30 `almanya` (→ Aabenraa 1920-06-15 geri).
- **Galler:** Gwynedd'in 1281–1283 iki yıllık son penceresi yazılmadı.
- **Verona/Padova/Brescia/Bergamo** Venedik öncesi `milanoduka` (Visconti) —
  mevcut Milano kaydının 1281 başlangıcıyla aynı yaklaşım; Scaligeri/Carrara
  ayrı kimlik açılmadı.
- **Ravenna, Rimini:** 15. yy Venedik/Malatesta pencereleri yazılmadı (papalik).
- **Napolyon dönemi** (1795-1815) yalnız kalıcı sonuç bıraktığı yerde işlendi
  (Belçika-Ren hattı); İtalya/Hollanda'daki kısa Fransız pencereleri mevcut
  kayıtların konvansiyonuna uyularak atlandı.
- **Mayorka Krallığı** (1276-1344) ve **Dauphiné** (1349 öncesi) ayrı kimlik
  açılmadı (`aragon` / `fransa`).
- Gün bilinmeyen geçişlerde `YYYY-01-01` kullanıldı: Mulhouse 1515, Limoges 1370
  dönüşü, Montpellier 1349, Perpignan 1463, Pau 1479, Cenevre/Lozan 1536,
  Uddevalla/Bergen vd. 1537, Brescia 1426, Bergamo 1428, Mantova 1708,
  Kristiansand 1641 (kur), Le Havre 1517 (kur).

## 7. Entegrasyon adımları (Oturum 0 için özet)

1. `arac/renkler.py`'ye §4'teki kimlikleri ekle (birinci öncelik 9'u şart).
2. `index.html`'e `<script src="data/yerlesimler_avrupa.js">` satırı +
   `js/app.js`/`uret_petek.py` birleştirme noktasına dizi.
3. §5'teki mevcut kayıt düzeltmelerini değerlendir (en kritik: Edinburg, Bordo,
   Dublin — yeni noktalarla görsel çelişki üretecekler).
4. Üretimi çalıştır; B-6/B-7'nin haritada kapandığını 1500 ve 1600 karelerinde
   gözle doğrula.
