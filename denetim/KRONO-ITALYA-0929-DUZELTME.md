# KRONO-ITALYA-0929 — DUZELTME (silinmedi; hüküm koordinatörde)
Biçim: dosya · madde · mevcut · önerilen · kaynak · gerekçe. Toplu listeler: `KRONO-ITALYA-0929-DUZELTME-EK.tsv`.
UYGULANANLAR ayrıca işaretli (✅) — yalnız benim dosyalarımda ve kaynakla.

## ✅ U1 — `kronoloji_italya.js`: 164 anakronik madde `italya` künyesi altındaydı
Ayrıntı: `KRONO-ITALYA-0929.md` §2. Uygulandı (devlet/devletler + `KRONOLOJI_COK_ITALYA`).

## ✅ U2 — `kronoloji_venedik.js` #78 (1718-07-21 Pasarofça)
Mevcut `d:`: "Mora Osmanlı'da kaldı; Venedik'e Dalmaçya'da küçük kazanımlar ve **Korfu bırakıldı**." Önerilen/uygulanan: Çuha iadesi;
Butrinto·İfrindos·Preveze·Voniçe; Ayamavra terk; Mora anılmıyor. Kaynak: TDV `pasarofca-antlasmasi` (imza 21 Temmuz 1718) + TDV `ayamavra`.
Gerekçe: Korfu Venedik'in elindeydi, "bırakılmadı"; TDV Korfu'dan söz etmiyor.

## D1 — `kronoloji_italya.js` #69 (1455-01-01 "Sakız Adası'nın Maona şirketi idaresine geçmesi") + künye `cenova` gömülü aynı madde
Mevcut: 1455. Önerilen: **SİL** (ya da 1346-06-15/21). Kaynak: TDV `sakiz-adasi`: "1346'da Cenovalı Simone Vignosi … Sakız'ı işgal etti (15-21 Haziran)";
Maona'ya tasarruf hakkı bunu izledi; "Fâtih 1455'te … iki filo yolladıysa da bir sonuç elde edemedi". 1455 Maona'nın başlangıcı değil, Osmanlı'nın başarısız girişimidir.
`kronoloji_italya_sehir.js` #12 zaten 1346-06-15'i doğru yazıyor. (Künye içi aynı madde için `data/devletler.js` — koordinatör.)

## D2 — TDV kendi içinde çelişiyor: Sakız'ın düşüşü
`ceneviz`: "Sakız 1561'de". `sakiz-adasi`: teslim "24 Ramazan 973 / **14 Nisan 1566**", "220 yıl süren Maona hâkimiyeti son buldu". Yer maddesi esas alındı;
atlas (14 Nisan 1566) uyumlu. `ceneviz`in 1561'i bir baskı/okuma hatası olmalı — düzeltme gerekmez, not.

## D3 — `kronoloji_italya_sehir.js` (BAGLAMA'nın; dokunmadım) tarih uydurma adayları — TDV `ceneviz` ile
| Madde | Mevcut | TDV |
|---|---|---|
| #17 Boğaz Savaşı | 1352-02-13 | TDV gün vermez; kaynak Epstein (kontrol edilemedi) |
| #18 Orhan antlaşması | 1352-05-01 | "1352 **başlarında**" → gün/ay TDV'de yok |
| #22 Andronikos tahta çıkışı | 1376-01-01 | "**Ağustos** 1376" (32 günlük kuşatma) → 1376-08-01 + `gun:` açıklaması |
| #29 Ceneviz gemileri Osmanlı'yı Rumeli'ye geçirdi | **1402-07-28** (Ankara günü) | TDV: "Ankara'da uğradıkları yenilgiden faydalanma anı geldiğinde (1402)" — gün yok; Ankara günü sahte kesinlik |
| #30 Gelibolu Antlaşması | 1403-01-20 | TDV: "**1403 yılına ait**" — gün yok |
| #43 Foça | 1455-12-01 | TDV `ceneviz`: "Eski ve Yeni Foça 1455'te" — gün/ay yok |
Yeni yazdığım maddeler bu kuralı izler (yıl bilinir ⇒ `YYYY-01-01` + `gun:` açıklaması).

## D4 — künye `milano-dukaligi` (t=1859-11-10) şüpheli — bağladığım maddeler ona bağlı
KUNYE-DUNYA `supheli_omur` zaten işaretledi (dükalık 1859'a uzanmaz; Cisalpin 1797, Lombardiya-Venedik 1815). İtalya.js #96-#102'yi mevcut künyeye bağladım
(#98 Cisalpin ayrıca `italya-napolyon`a). Künye düzelirse #97+ `italya-napolyon`/`lombardiya-venedik`e taşınmalı.

## D5 — atlasın kendisini kaynak gösteren 52 madde ("Atlas referans değildir", CLAUDE.md §4)
`venedik.js` 14 (kaynak: `data/savaslar.js` deposu) · `italya.js` 38 (kaynak: `data/devletler.js` gömülü kronoloji / CLAUDE.md #68).
Liste: EK.tsv (b). Bu maddeler bağımsız kaynakla doğrulanana dek "gün kaynağı: atlas" sayılmalı; öneri: TDV/Treccani turu (ayrı paket).

## D6 — `italya.js`: 126/192 madde `kaynak: bulunamadı…`; 72'sinde "gün YAKLAŞIK" ama `YYYY-MM-DD` yazılı
Sahte kesinlik adayı (CLAUDE.md §4 "Hassasiyet"): EK.tsv (c). `venedik.js`: 36/86 `bulunamadı`, hepsi "gün DOĞRULANMADI" (EK.tsv d). Vikipedi kaynak olarak yok (0).
Hiçbir tür-değeri listeye yeni değil, zorunlu on alan tam (0 eksik). `gun:` alanı yok — YYYY-01-01 biçiminde 14+28 madde açıklamasız.

## D7 — pencere-ucu dolgu maddeleri (`t:"1281-01-01"`)
`venedik.js` #0 ("Levant imparatorluğu — XIII. yüzyıl sonunda …") · `italya.js` #0 ("Papalık — XIII. yüzyıl sonunda …") ve italya_sehir'in 4'ü:
1281-01-01 ölçüm değil pencere ucudur (§4). Öneri: `gun:`/açıklama ekle ya da sil.

## D8 — `venedik.js` #85 (1797-10-17 Campoformio) `venedik` künyesinin penceresi (t=1797-05-12) DIŞINDA
Mevcut: `venedik`. Önerilen: `devletler:["habsburg"]` ya da künye t=1797-10-17 (KUNYE-DUNYA: `pencere_disi:1`). Konu Venedik'in kaderi olduğu için içerik doğru; yalnız pencere.

## D9 — 1566 Kiklad "ilhakı" çelişkisi (kaynak + harita)
`olaylar_ek5.js` 1566-04-15 "Nakşa Dukalığı'nın ilhakı — Kiklad Adaları'nın tamamı". TDV `naksa`: 1537-38 Barbaros ile Osmanlı kontrolü; **1540'ta hâkimiyet
resmen devredildi**; 1566'da düklük Yasef Nasi'ye verildi ("adanın statüsüne dokunulmadı"); Nasi ölümü 1579. ⇒ 1566-04-15 "tam ilhak" TDV'de yok. Çekirdek
maddesi başka oturumun (Osmanlı çekirdeği) → koordinatör karar verir. Harita tarafı: YERLESIM-ONERI §B.

## D10 — Herseknovi (Herceg Novi): TDV 1686, harita 1687-09-30
TDV `dalmacya`: "1684'te … pek çok kaleyi zaptettiler ve son olarak da **1686'da** Castelnuovo'yu aldılar." `yerlesimler_ek.js` Herseknovi `kd`/`s`: 1687-09-30.
CLAUDE.md §4: çelişirse TDV esas — ama yalnız özet maddede, yer maddesi bulunamadı (arama tuzağı). Ölçülemedi; hüküm koordinatörde.

## D11 — İnebahtı: TDV "1687 Temmuzu", harita `s: 1687-08-06`
TDV `inebahti`: "1687 Temmuzunda düştü", "Karlofça'dan bir yıl sonrasına kadar" Venedik elinde. Harita 1687-08-06 → Temmuz'a çekilmeli (gün TDV'de yok). Ayrıca TDV
"Karlofça'dan **bir yıl sonrasına kadar**" der (≈1700); haritada İnebahtı `s: 1687-08-06 → 1715-07-01` — 1700'de Osmanlı'ya dönüş kırılması yok mu? Ölçülemedi.

## D12 — künye-içi yakın mükerrer (44 satır) — `italya.js` ↔ `devletler.js` gömülü
Liste: EK.tsv (a). Öneri: app.js dedupe kuralı `t` + başlık benzerliği ya da mükerrer italya.js maddelerini işaretle/sil.
Koordinatör kararı: bu 38 madde `d:` bakımından künye içi olanlardan ZENGİN olduğundan silme yönü künye içi maddeyi seçmek olabilir.

## D13 — `venedik` künyesinin gömülü 11 maddesinden `KRONOLOJI_VENEDIK` ezmesiyle kaybolanlar
1204 IV. Haçlı Seferi (atlas penceresi 1281 öncesi) · 1645-01-01 · 1669-09-27 · 1684-01-01 · 1715-06-25. Dosyada aynı olay farklı günle var
(1645-08-22 · 1669-09-06 · 1684-03-05 · 1715-07-01) — yani "aynı olay, iki gün" sınıfı: **1669 Kandiye teslimi** dosyada 09-06, künyede 09-27
(TDV `girit`/`kandiye` gövdesinde gün aranmalı; bu oturumda okunmadı) ⇒ ölçülemedi.
