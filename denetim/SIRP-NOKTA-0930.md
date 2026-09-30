# SIRP-NOKTA-0930 — 12 nahiye merkezi teklifi + 1830 ferman günü ölçümü

**Yazan:** SIRP-NOKTA-0930 · 30 Eylül 2026 · **uygulanmadı**, çünkü `data/` donmuş (koşu 18).
Makine metni: [`SIRP-NOKTA-0930.json`](SIRP-NOKTA-0930.json). Kayıtların tam metni, kaynak
kimlikleri ve her dönem ucunun dayanağı orada.
Evren: `girdi.GIRDI_DOSYALARI` içindeki 93 dosya ve 4296 yerleşim.

## Özet — üçlü kural
- **① Ölçtüm:** 12 noktanın **12'sinde** koordinat var. 11'inde üç bağımsız kaynak var:
  GeoNames · OpenStreetMap · Wikidata. **Hiçbirinde ayrışma 2 km'yi aşmıyor** (en büyüğü
  Zaječar 1,66 km). Sokol'da iki kaynak var ve **bağımsız değiller** (aşağıya bak).
  Mükerrer taraması **12/12 temiz.** Ad normalleştirmesi `ARAC-NORMAL-0903` ile yapıldı,
  yakınlık taraması 3 km yarıçapla. Ćuprija için çıkan iki ad eşleşmesi yanlış pozitif:
  "köprü" iki uzak kayıtta da geçiyor (Köprühisar/Bursa ve Köprülü/Veles).
  Tam kayıt önerilebilen nokta **5**: Pasarofça · Valjevo · Ćuprija · Rudnik şartlı,
  Öziçe iki seçenekli.
- **② Bulamadım:** **7 noktanın sahiplik zinciri bulunamadı.** Bunlar Sokol, Paraćin,
  Loznica, Negotin, Zaječar, Aleksinac ve Ražanj. Koordinatları hazır ama kayıt yazılmadı.
  Asıl sebep aşağıda 🔴 1'de.
- **③ İstiyorum:** aşağıdaki 5 karar (§ Kararlar).

## 🔴 Beklenmeyen bulgu 1 — 12 noktanın hepsi 1830 fermanına bağlanamaz
- **TDV `alacahisar`:** Kruşevac *"1833'te ise Muhtar Sırbistan Prensliği'ne devredildi."*
- **TDV `edirne-antlasmasi` md. 6:** Osmanlı *"Sırbistan'dan ayrılmış olan altı nahiyeyi de
  geri verecekti."* Madde nahiyelerin adını da yılını da vermiyor.
- **TDV `ozice`:** Öziçe *"1862'de … Osmanlı idaresinden çıkarılıp Sırbistan'a dahil edildi."*

⇒ Listedeki noktalar üç ayrı tarihe düşüyor:

| Grup | Noktalar | Dayanağın durumu |
|---|---|---|
| **1830** (Belgrad paşalığı) | Pasarofça · Valjevo · Ćuprija · Rudnik | TDV `sirbistan` (Rudnik adıyla sayılıyor) · 1830 günü TDV |
| **1833** (altı nahiye) | Negotin (Krajina) · Zaječar (Crna Reka) · Paraćin · Loznica (Jadar) | Liste yalnız Vikipedi'de ve erişemediğim bir makalede (academia.edu 403) ⇒ **§4: tek dayanak olamaz** |
| **1833?** (belirsiz) | Aleksinac · Ražanj | Vikipedi'nin **iki listesi birbiriyle çelişiyor** |
| **1862** (kale-şehir) | Öziçe · Sokol | Öziçe için TDV var (YIL). Sokol'un TDV maddesi yok |

Bu gruplamayı TDV'de ancak Kruşevac için doğrulayabildim; öteki 1833 adları TDV'de yok.

## 🔴 Beklenmeyen bulgu 2 — Belgrad'ın dışarıda kalmasının yarısı noktasızlık değil
Belgrad, Semendire ve Böğürdelen kendi kayıtlarında `d:` ile **1867-04-18'e kadar Osmanlı.**
Bu, TDV'nin 1867'de çekilen garnizonlarıdır. Pasarofça noktası Semendire'nin doğusundaki
boşluğu kapatır. Ama **Belgrad'ın kendi peteği 1867'ye kadar Osmanlı kalır.** Burada verilmesi
gereken bir model kararı var: nokta kaleyi mi temsil ediyor, şehri mi? Nokta eklemek bu soruyu
çözmez. Öziçe'yi 1862'ye kadar `d:` yazmak da aynı mekanizmayı Užice'ye taşır.

## 12 nokta

Kısaltmalar: GN = GeoNames (sayı geonameid'dir) · OSM = OpenStreetMap (sayı düğüm kimliğidir)
· WD = Wikidata. **Yazılan koordinat birinci kaynağın değeridir** (Sokol'da OSM). Ortalama
alınmadı. Ayrışma birinci kaynağa göre ölçüldü (1↔2 · 1↔3).

| # | Ad | lat | lon | Kaynak 1 | Kaynak 2 | Kaynak 3 | Ayrışma km | Mükerrer · en yakın | Grup · durum |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Pasarofça (Požarevac) | 44.6213 | 21.1878 | GN 786827 | OSM node/1582764486 | WD Q199942 | 0,24 · 0,21 | temiz · Semendire 20,9 | 1830 · şartlı kayıt |
| 2 | Valjevo | 44.2751 | 19.8982 | GN 3188402 | OSM node/307649772 | WD Q208015 | 1,06 · 1,52 | temiz · Böğürdelen 55,3 | 1830 · şartlı kayıt |
| 3 | Öziçe (Užice) | 43.8586 | 19.8488 | GN 3188434 | OSM node/848084912 | WD Q59473 | 0,72 · 0,96 | temiz · Çaçak 40,4 | 1862 · iki seçenek |
| 4 | Ćuprija | 43.9275 | 21.3700 | GN 791678 | OSM node/1599441293 | WD Q336475 | 0,68 · 0,51 | temiz (2 yanlış pozitif) · Yagodina 10,3 | 1830 · şartlı kayıt |
| 5 | Paraćin | 43.8608 | 21.4078 | GN 787215 | OSM node/1599441250 | WD Q714643 | 0,36 · 0,96 | temiz · Yagodina 17,5 | 1833 · **kayıt yok** |
| 6 | Rudnik | 44.1398 | 20.4940 | GN 786203 | OSM node/355059927 | WD Q2479848 | 0,36 · 0,41 | temiz · Çaçak 30,0 | 1830 · şartlı kayıt |
| 7 | Sokol (Soko Grad) | 44.2701 | 19.4288 | OSM node/7417544190 | WD Q7555131 | — | **0,00** ⚠️ | temiz · İzvornik 29,0 | ? · **kayıt yok** |
| 8 | Loznica | 44.5312 | 19.2427 | GN 3196153 | OSM node/254036981 | WD Q648489 | 1,50 · 1,36 | temiz · İzvornik 19,6 | 1833 · **kayıt yok** |
| 9 | Negotin | 44.2264 | 22.5308 | GN 787718 | OSM node/317236520 | WD Q649168 | 0,08 · 1,56 | temiz · Vidin 37,8 | 1833 · **kayıt yok** |
| 10 | Zaječar | 43.9036 | 22.2641 | GN 784024 | OSM node/281664933 | WD Q144495 | 1,16 · 1,66 | temiz · Vidin 49,8 | 1833 · **kayıt yok** |
| 11 | Aleksinac | 43.5417 | 21.7078 | GN 793138 | OSM node/1599387453 | WD Q966804 | 0,15 · 0,45 | temiz · Niş 28,9 | 1833? · **kayıt yok** |
| 12 | Ražanj | 43.6722 | 21.5494 | GN 786390 | OSM node/2258265756 | WD Q2477932 | 0,04 · 0,62 | temiz · Alacahisar 20,7 | 1833? · **kayıt yok** |

**Sokol'a dair iki uyarı:**
- **Kaynaklar bağımsız değil.** OSM ile Wikidata 0,00 km ayrışıyor; biri ötekinden kopyalanmış
  olabilir. GeoNames'te Ljubovija'daki Soko Grad yok, yalnız 4,5 km ötedeki "Sokolske Planine"
  dağı var.
- **Aynı adla başka bir yer daha var.** Sokobanja yanındaki Soko Grad (GN 837194 · WD Q839031)
  Banja nahiyesidir. Belgrad paşalığının Sokol'u **değildir.** Teklif, Drina kıyısındaki
  Ljubovija Sokol'udur.

**Ad seçimi:** "Pasarofça (Požarevac)" bilerek bu biçimde yazıldı. Aynı yazım
`olaylar_ek5.js:547`de `yer:"Pasarofça (Požarevac), Sırbistan"` olarak, `yer_yama.js:884`te de
`eksik_nokta` olarak geçiyor. Ancak `yer_id` bağı yok, yani bağ kendiliğinden kurulmaz; nokta
inerse o madde `yer_id` ile bağlanabilir.
Öziçe adını TDV slug'ından (`ozice`) aldım.

## Kayıt teklifi — 1830 grubu (4 nokta, aynı zincir)
```
s: sirbistan        1281-01-01 → 1439-08-27
d: (kusatma)        1439-08-27 → 1444-08-15    TDV semendire — GÜN, bölgesel
s: sirp-despotlugu  1444-08-15 → 1459-06-20    TDV semendire — GÜN
d: (kusatma)        1459-06-20 → 1718-07-21    TDV semendire + sirbistan
s: avusturya        1718-07-21 → 1739-09-18    TDV pasarofca GÜN · 1739 YALNIZ YIL ⚠️
d: (antlasma)       1739-09-18 → 1830-10-17
v: sirbistan-prensligi (vassal) 1830-10-17 → 1878-07-13   TDV sirbistan — GÜN
s: sirbistan-prensligi 1878-07-13 → 1882-03-06 → sirbistan-kralligi → 1918-12-01 → yugoslavya → 1923-10-29
g:0 · k:4 · m:"Belgrad"
```
Devlet kimlikleri tarandı: `sirbistan` · `sirp-despotlugu` · `avusturya` ·
`sirbistan-prensligi` · `sirbistan-kralligi` · `yugoslavya`. Hepsi künye ya da `harita:`
anahtarı olarak tanımlı ve komşu Sırp kayıtlarında kullanılıyor.
**Yazılmayanlar ve sebepleri:**
- **1689-1690 ve 1789-1791:** Noktaya özel kaynak yok. Komşuların bu dönemleri "kaynak:
  bulunamadı" diye taşıyor, zincirleme devralma da yasak.
- **1804-1813:** Atlas bu dönemi yalnız Böğürdelen'de çiziyor.

## Kararlar — koordinatöre
1. **1718 / 1739 uçları.**
   - 1718'de TDV'nin günü (21 Temmuz 1718) ile komşuların günü (1717-08-18) arasında **11
     aylık bir Osmanlı adası** oluşur.
   - 1739'da TDV yalnız yılı veriyor. Ben komşularla hizalayıp 1739-09-18 yazdım; bu günün
     **kaynağı yok.** Seçenekler: kaynak aranır ya da `1739-01-01` (YIL) yazılır.
2. **Öziçe'nin modeli.**
   - **A:** 1862'ye kadar `d:` (TDV, YIL). Bu, Belgrad'daki mekanizmanın aynısıdır.
   - **B:** 1830-10-17'den `v:`, Užice'yi kırsalıyla birlikte nahiye sayar.
   - Ayrıca fetih yılında **TDV kendiyle çelişiyor** (1445 · 1459 · 1463); ben 1463'ü
     yazdım.
3. **1833 grubu (6 nokta).** Altı nahiyenin listesi için akademik bir kaynak mı aranacak,
   yoksa bu noktalar bekletilecek mi? İki şey daha eksik:
   - Bu noktaların 1281-1833 zinciri bulunamadı. Semendire'nin tarihleri Vidin/Niş/Drina
     tarafına **taşınamaz.**
   - Değişmez 2 için **1833 ve 1862 kronoloji maddeleri de gerekir.** 1832-1834 ve 1861-1863
     taraması boş çıktı.
4. **Hedef dosya.** Önerim yeni bir parti:
   - dosya `data/yerlesimler_sirp0930.js`
   - değişken `window.YERLESIMLER_SIRP0930`
   - `girdi.py`de `GIRDI_DOSYALARI` listesine bir satır
   ⚠️ **Tehlike:** `girdi.py` motorun tuzundadır (§9.1). Buna dokunulursa önbellek sıfırlanır,
   bu yüzden ya bir sonraki tam inşa koşusunu beklemeli ya da `yerlesimler.js`e yazılmalı.
   Seçim ve dosya sahipliği sende.
5. **Alacahisar kusuru.** Başka bir dosyada ama kapsamda: `yerlesimler_serhat.js:152` 1454-1878
   arasını kesintisiz `d:` taşıyor. Oysa TDV 1833'te devri söylüyor ⇒ **45 yıl yanlış renk.**

## 🔴 Ferman günü — 17 Ekim 1830 (Emre kararı). Ölçtüm, **hiçbir şeyi değiştirmedim.**

**Künye:** `devletler.js:1243` → `sirbistan-prensligi` `f:"1804-02-14"`, `t:"1882-03-06"`,
`tabi:[{f:"1817-01-01", t:"1878-07-13", ust:"osmanli"}]`. Künyenin kronolojisi
(`devletler.js:1250`) **zaten 1830-10-17** ve kaynaklı.

**Zaten 17 Ekim olanlar:**
- `kronoloji_sirbistan.js:244`
- `d_sinirlar_avrupa_orta.js:193`: `d1830-hm-sr-tuna-sp` `f:"1830-10-17"`. Dayanağı TDV; notunda
  *"atlas maddesi 1830-11-08 — ÇELİŞKİ"* yazıyor.
- `sinir_sinif_dizini.js:655`
- Canlı girdide Kragujevac, Çaçak (`yerlesimler.js`) ve Yagodina (`yerlesimler_ek29.js`).

**Çekilecekler:**

| Yer | Şimdi | Not |
|---|---|---|
| `data/olaylar_ek.js:73` | `t:"1830-11-08"` | Değişmez 2 çekirdeğinde. Kırılmalar 1830-10-17'de, madde 22 gün sonra. ±30 içinde olduğu için **bugün ihlal değil, ama gün yanlış.** `statu_vasal:["Kragujevac","Çaçak"]` — yeni noktalar da buraya girer |
| `data/savaslar.js:550` | `t:"1830-08-30"` | **"30 Ağustos"un tek canlı yeri burası, künye değil** |
| `data/ekokuma_isyan1821.js:73` | `"1830-11-08\|özerklik fermanı"` | Maddeye bağlı. Madde çekilir de bu çekilmezse **bağ kopar** |
| `yer_yama_vassal_kid_0906.js:152,153,313` · `yer_yama_kid20_0907.js:358` · `yer_yama_ok110.js:82-83` | `1830-11-08` | Ölü yamalar: `GIRDI_DOSYALARI`nda yoklar, motor okumuyor. **Yeniden uygulanırlarsa 17 Ekim'i 8 Kasım'a geri çekerler** |
| `paket_01/05/12/13/14/28.js` | kopyalar | Üretilmiş paketler. Kaynak düzeltilince yeniden paketlenir |
| `donemler_ust.js` (yayın r10675) | "Katılım: Kragujevac, Çaçak, Yagodina" `f:"1830-11-08"` | Yayın girdiden **bayat.** Koşu 18 düzeltir, elle dokunulmaz |

**48 günlük delik sorusu — cevap: DELİK AÇILMAZ.** Çekilecek bir künye `f:`si yok, çünkü künyede
30 Ağustos hiç yok. 30 Ağustos yalnız şu üç yerde duruyor:
- `savaslar.js:550` (bir antlaşma kaydı; sahipliği belirlemez)
- onun `paket_12.js` kopyası
- `devletler.js.yedek`

1830-08-30 → 1830-10-17 arasında kutudaki 21 noktanın hepsinin yazılı bir sahibi var:
- **Kragujevac, Çaçak, Yagodina:** `d:` Osmanlı, 1830-10-17'ye kadar
- **Belgrad, Semendire, Böğürdelen:** `d:`, 1867'ye kadar
- **Alacahisar, Niş:** `d:`

Sahipsiz nokta **0.** `1830-08-30` taşıyan yerleşim dönemi ucu **0.** §3.5.1 sınıflaması
gerekmiyor: künye aşımı yok, yalnız `savaslar.js:550`de bir kayıt düzeltmesi var.

## Kaynaklar (okunanlar)
- **TDV**, önbellek `scratchpad/tdv/`: `sirbistan` · `semendire` · `ozice` · `alacahisar` ·
  `bogurdelen` · `belgrad` · `nis` · `vidin` · `pasarofca-antlasmasi` · `edirne-antlasmasi`
  (`denetim/KRONO-TUNA-0929-tdv-onbellek/`).
- **Ölü slug'lar (302):** `pasarofca` · `valyevo` · `sokol` · `fethulislam` ·
  `kanlica-konferansi` · `milos-obrenovic` · `negotin` · `rudnik` · `krusevac` ·
  `belgrad-antlasmasi` · `belgrad-muahedesi`.
- **GeoNames:** search.html sayfası ve kayıt 786203.
- **OSM:** Nominatim ve Overpass (`place=*` ile `historic=fort` düğümleri).
- **Wikidata:** P625 alanı.
- **Vikipedi:** yalnız 1833 listesi için ve **dayanak olarak kullanılmadı.**
