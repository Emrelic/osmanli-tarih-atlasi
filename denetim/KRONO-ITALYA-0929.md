# KRONO-ITALYA-0929 — Venedik · Ceneviz · Papalık (rapor, 29 Eylül 2026)

Model: Sonnet 5.5 (koordinatör deneyi, şartname §0). Kaynak: TDV gövdeleri
`denetim/KRONO-ITALYA-0929-tdv-onbellek/` (ceneviz · venedik · sakiz-adasi · kefe · galata · papalik ·
korfu · inebahti · atina · dalmacya · ayamavra · pasarofca-antlasmasi · naksa · izmir · bodrum · mora …).
Araçlar: `denetim/ARAC-KRONO-ITALYA-0929-*.py`. Yardımcı ölçüm: 10.106 madde (128 dosya + künye içi).

## 1. ENVANTER (ölçüm)
| Küme | Madde | Not |
|---|---|---|
| `kronoloji_venedik.js` | 86 | 13.yy 5 · 14 11 · 15 21 · 16 20 · 17 18 · 18 11 |
| `kronoloji_italya.js` | 192 | 13.yy 10 · 14 18 · 15 34 · 16 33 · 17 6 · 18 22 · 19 55 · 20 14 |
| `kronoloji_italya_sehir.js` | 186 | dokunulmadı (BAGLAMA) — 124'ü Cenova |
| Ceneviz (`cenova` künyesi) | künye içi 10 + italya.js 18 + sehir ≈124 | şartname "Ceneviz'in dosyası yok" der; anılma değil **madde** var |
| Papalık (`papalik`) | künye içi 6 + italya.js 31 | Osmanlı-ilişkili papalık eylemi maddesi az (bkz. §5) |

## 2. 🔴 BULGU 1 — `kronoloji_italya.js` YANLIŞ KÜNYEYE BAĞLIYDI (düzeltildi)
`KRONOLOJI_ITALYA` → `derinKronolojiBindir` → künye `italya` (f=1861-03-17). 192 maddenin **164'ü 1861'den önce**
(anakronik) ve `italya`nın kendi 6 maddesini eziyordu. Papalık/Napoli/Cenova/Milano/Floransa/Siena/Ferrara/Savoya
künyeleri bu maddeleri hiç görmüyordu. Çare: her maddeye olay günü var olan künye yazıldı, global
`KRONOLOJI_COK_ITALYA` yapıldı (`ARAC-KRONO-ITALYA-0929-BAGLA.py`, pencere sınaması node ile: **192/192 içeride, 0 dışarıda**).
Dağılım: papalik 31 · napoli 33 · cenova 18 · milano-dukaligi 26 · floransa 18 · toskana 12 · siena 3 · ferrara 5 ·
savoya 3 · sardinya-piyemonte 18 · italya-napolyon 1 · italya 27 (iki künyeli 3 tam-geçiş günü dahil).
⚠️ Yan etki: 38 madde (44 künye-satırı) künyelerin kendi gömülü maddeleriyle AYNI gün ve olay (kaynakları zaten "devletler.js
embedded kronoloji") — `cokTarafliKronolojiEkle` t+b eşliyor, b farklı ⇒ o künyelerde **44 yakın-mükerrer satır** görünür
(liste: `KRONO-ITALYA-0929-DUZELTME-EK.tsv` (a)). Öneri: app.js dedupe'u `t` + benzer başlık; ya da bu maddeler silinsin.

`kronoloji_venedik.js` ise doğru künyeye (`venedik`) bağlı; bindirici künyenin gömülü 11 maddesini eziyor, 4'ü dosyada
başka günle zaten var, 1204 IV. Haçlı Seferi maddesi (atlas penceresi 1281 öncesi) kayboluyor — dokunulmadı.

## 3. 🔴 BULGU 2 — ŞARTNAME HİPOTEZİ ÖLÇÜLDÜ: "Ceneviz en eksik kısım" DOĞRU ÇIKMADI
Ceneviz'de TDV `ceneviz` (Gallotta) içindeki Osmanlı-Ceneviz olaylarının çoğu zaten yazılı (1261 Ninfeon · 1346 Sakız ·
1352 Orhan · 1381 Torino · 1387 ahidnâme · 1396 · 1402 · 1403 · 1453 Galata ×3 · 1455 Foça · 1456 Enez · 1461 · 1462 ·
1475 Kefe · 1566 Sakız). Eksik olan 10 olay yazıldı → `data/kronoloji_cok_ceneviz.js` (10 madde, hepsi TDV `ceneviz`, `devlet:"cenova"`).
📌 Şartname ipucu "Rumeli'ye geçişte Ceneviz gemileri **1352-1354**": TDV bunu **1363**'ten başlatır ("1363'ten başlayarak II. Mehmed
zamanına kadar … ilk defa 60.000 altın"); 1352 = Orhan-Ceneviz antlaşması (Galata'ya erzak/asker yardımı), Rumeli geçişi değil.
1352-54'te geçiş iddiası için TDV'de dayanak **bulunamadı** ⇒ yazılmadı.

## 4. NET 17 ADAY — SINIFLANDIRMA (defter sütunu `net_olay_adayi`)
Defterin "kapalı" ölçütü (`denetle.py` 2s yer/taraf şartı): aynı gün bir madde kırılan **yerleşimin adını** ya da **eski+yeni
sahibi birlikte** anmıyorsa kapanmaz — yani birçok aday "madde yok" değil "madde var ama yeri anmıyor".
| Tarih | Yerleşimler | Sonuç |
|---|---|---|
| 1362 | Nikarya (İkarya) bizans→ceneviz | **ölçülemedi** — TDV'de `ikarya` slug ölü, arama sonuçsuz; yıl kaynaksız (yıl-temsili borç) |
| 1386 | Butrint bizans→venedik | TDV `korfu`: Korfu 1386'da Venedik'e bağlandı → **madde yazıldı (Korfu)**. Butrint'in 1386'da Venedik'e geçişi ve eski sahibinin "bizans" olması TDV'de **bulunamadı**; TDV `pasarofca` yalnız 1718'de "Butrinto'yu aldılar" der |
| 1401 | Parga bizans→venedik | **bulunamadı** (TDV slug ölü) |
| 1402-01-01 | Bodrum →sovalye | TDV `bodrum` yalnız 1522 Osmanlı fethini verir; 1402 **bulunamadı** |
| 1402-07-28 | İzmir · Çeşme sovalye→aydin | **HARİTA TARİHİ YANLIŞ**: TDV `izmir`: "Timur'un **Aralık 1402**'deki zaptı"; kırılma Ankara gününe (28 Temmuz) konmuş. Madde VAR (1402-12-14/15, çekirdek+Rodos dosyası). Çeşme için TDV `cesme` tarih vermez → ölçülemedi. → YERLESIM-ONERI |
| 1409 · 1412 · 1420 | Zadar · Nadin · Vrana · Şibenik · Kotor · Split | madde VAR (`venedik.js` 1409-07-09, "gün doğrulanmadı"); harita 1409-01-01 **yıl-temsili** (189 gün önce). TDV `dalmacya`: Kotor 1420, gün yok. Şibenik/Split/Zadar için TDV'de tarih **bulunamadı**. → YERLESIM-ONERI (yalnız tutarsızlık, tarih uydurmadım) |
| 1470-07-12 | Karistos (Kızılhisar) | Eğriboz'un kaybı 3 dosyada aynı gün VAR ama Karistos/Kızılhisar anılmıyor. TDV `egriboz` Kızılhisar'ı Osmanlı garnizonu olarak anar, düşüş günü vermez → madde eklenemedi (bulunamadı) |
| 1521 | Fornoz (Fourni) ceneviz→OSMANLI | TDV `ceneviz`/`sakiz-adasi` 1521 vermez → **veri şüphesi**, bulunamadı |
| 1540-10-02 | Nadin · Vrana | zaten `kunyede_kapali`; TDV `dalmacya` teyit eder ("1540 antlaşması ile Nadin ve Urana Osmanlılar'a bırakıldı") |
| 1566-04-15 | 8 Kiklad yerleşimi venedik→OSMANLI | 🔴 **ÇELİŞKİ**: TDV `naksa`: Osmanlı kontrolü **1537-38**, hâkimiyet **1540**'ta resmen devredildi, **1566'da düklük Yasef Nasi'ye verildi** ("adanın statüsüne dokunulmadı"; Nasi ölümünde 1579). 1566-04-15 "ilhak" TDV'de yok; `eski: venedik` de Nakşa Dükalığı olmalı (Paros aynı bölgede `naksa-dukaligi`). → YERLESIM-ONERI + DUZELTME (karar koordinatörde) |
| 1686-09-30 | Sin (Sinj) | **bulunamadı** — TDV'de Sinj yok, dış kaynak gerekir |
| 1687-08-01 · 08-06 | Mora (Tripoliçe) · Elafonisos · İnebahtı | TDV `inebahti`: kaleler "**1687 Temmuzunda** düştü"; kırılma 08-06 → madde yazıldı (`t:1687-07-01`, gün TDV'de yok). Mora/Tripoliçe: TDV `mora` yalnız 1684-86 aralığı verir → gün **bulunamadı** |
| 1687-09-30 | Herseknovi (Herceg Novi) | 🔴 TDV `dalmacya`: "**1686'da** Castelnuovo'yu aldılar"; harita 1687-09-30. Kaynak kendiyle/haritayla çelişiyor → hüküm koordinatörde, TDV esas ise harita 1686 |
| 1715-07-20 | Damala · Ermiyoni · Kranidi · Methana | Anabolu'nun fethi maddesi aynı günde VAR ama bu dört yeri anmıyor; TDV yer maddesi yok → **bulunamadı** |
| 1718-07-21 | Ayamavra (Lefkada) · Çuha Adası (Kythira) | ✅ **KAPATILDI**: TDV `pasarofca-antlasmasi` + `ayamavra`; `venedik.js` #78'in `d:` metni düzeltildi (bkz. §6) ve iki yer artık adıyla geçiyor. Ayrıca `Ayamavra Eylül 1715 Osmanlı` maddesi yazıldı |
| 1720-08-02 | Aosta · Annemasse · Thonon · Bourg | `kunyede_kapali` (savoya + sardinya-piyemonte künye maddeleri aynı gün) |
| 1809 · 1324 · 1475 | Cres/Krk/Rab · Kalyari/Sasari · Martigny | başka paketlerin (ATLANTIK · ORTA-AVRUPA) birincil işi — dokunulmadı |
**Sayı:** 17 adayın 2'si tam kapatıldı (1718 grubu), 1'i (1687-07 İnebahtı) kısmen maddeleşti ama harita günü TDV'yle uyuşmuyor;
**5'inin harita tarafı yanlış/çelişkili** (1402 İzmir · 1409 yıl-temsili · 1566 Kiklad · 1687 Herceg Novi · 1687 İnebahtı);
kalanlar kaynak **bulunamadı**. "Madde yazarak kapat" için TDV yetmiyor — gün-düzeyi Dalmaçya/Girit-Mora kaynağı (Treccani/Setton)
koordinatörün onayıyla ayrı bir paket ister; Vikipedi/küçük model kullanılmadı.

## 5. Papalık — ✗ madde YAZILMADI (`bulunamadı` bir sonuçtur)
TDV `papalik` gövdesi olay günü vermez; Osmanlı-ilişkili papalık eylemleri (1455-56 III. Callixtus'un haçlı çağrısı ·
1459 Mantua Kongresi · 1538 Kutsal Birlik'in kuruluşu · 1683-84 XI. Innocentius) için TDV'de yer/kişi maddesi çekilemedi
(`arama:` yalnız gezinti sayfası döndürür; slug tahmini 302). Elimdeki gün bilgisi kaynaksız hafıza olur → yazmadım.
Papalık'ın **devlet/kurum ayrımı** mevcut `italya.js` maddelerinde tutarlı: toprak (1798 · 1809 · 1849 · 1870-09-20) `isgal/son/kurulus`,
kurum (Unam Sanctam · Trent · Yanılmazlık) `din/kriz`. ISTEK: bu 4 madde için TDV dışı (Setton, *The Papacy and the Levant*; Treccani
*Dizionario Biografico*) kaynak izni.

## 6. DÜZELTMELER (bu oturumda UYGULANAN — hepsi kaynaklı)
1. `kronoloji_italya.js`: 192 maddeye `devlet:`/`devletler:` + global adı (Bulgu 1).
2. `kronoloji_venedik.js` #78 (1718-07-21 Pasarofça): `d:` yanlıştı ("Korfu bırakıldı; Dalmaçya'da küçük kazanımlar"). TDV: Çuha
   iadesi; Butrinto·İfrindos·Preveze·Voniçe alındı; Ayamavra terk; Mora anılmıyor. Kaynak alanı da TDV'ye çevrildi (eski: atlas `savaslar.js`).
Diğer bütün bulgular SİLİNMEDEN `-DUZELTME.md`de (hüküm koordinatörde).

## 7. YENİ DOSYALAR
`data/kronoloji_cok_ceneviz.js` (10) · `data/kronoloji_cok_venedik.js` (7: Korfu 1386 · İnebahtı 1407 · Atina 1466 · Dalmaçya
1538/1684 · Ayamavra 1715 · İnebahtı 1687-07). `index.html` satırı ve `arac/paketle.py` **koordinatörde** — bağlanana dek sitede görünmez.
Denetim: `node --check` ✓ 4 dosya · `odak_olc.py`: bu dosyalarda **kırık atıf 0** (çekirdek kırık 1: dogu_afrika 'Ogaden', benim değil) ·
`denetle.py`: bkz. teslim mesajı.
