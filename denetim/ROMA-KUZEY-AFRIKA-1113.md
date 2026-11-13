# ROMA-KUZEY-AFRIKA-1113 — eyalet bazlı Roma zincirleri (Africa · Numidia · Tripolitania · Mauretania)

Tarih: 13 Kasım 2026 · Dal: `emrelic-1113-roma-kuzey-afrika` (`emrelic-1113-roma-kibris-misir-yunan` tepesinden) · Ağır araç (tam denetle, renk_olc, denetle_yayin, ceviri) KOŞTURULMADI. Koşturulan: `node --check` (6 veri dosyası), `girdi.yukle` ölçümü, kendi doğrulama betiği (çakışma / sıfır uzunluk / künye aşımı: yeni dönemlerde 0; kalan uyarılar eski kayıtlara ait: Kafsa eksarhlık 0698-03-20, BOYALAR araması `fas-*` Tanca/Rabat/Kasrülkebîr), `paketle yenile` + `surum_damgala` + `paketle sina` (TAZE). Yeni yerleşim noktası/dosyası yok; motor tuzu dosyalarına ve denetle tavanlarına dokunulmadı.

## 1. Ölçüm (arac/girdi.yukle, bu worktree, 5628 yerleşim; bbox lat 19–38 / lon −10–25; ölçüt: MS 150-01-01'de `s:` dönemi olmayan ya da `__BOSLUK__`)
| | önce | sonra |
|---|---|---|
| bbox'ta MS 150 dönemsiz | 286 | 242 |
| doldurulan yerleşim | — | 44 |
| yeni kronoloji maddesi (`kronoloji_sinir_antik_roma.js`) | — | +19 (yalnız Türkçe) |

Kalan 242'nin çoğu: Sahra/Fizan/Tibesti vahaları (Roma sınırı dışı), Fas atlantik/iç yerleşimleri, ortaçağ kuruluşları, Kirenayka (aşağıda), Sicilya/İber/Yunan kıyıları (bbox taşması; başka tur) ve Mısır tarafı.

## 2. Eyaletler (her biri ayrı commit)
Zincir: roma-cumhuriyeti → roma-imp (-0026-01-16, künye) → bati-roma (395-01-17; TDV «Afrika»: Afrika'nın batısı Batı Roma'ya bağlandı) → … mevcut ilk dilim. Abi merkez: Africa→Kartaca, Numidia→Konstantin (Cirta), Tripolitania→Trablus (Oea), Mauretania→Şerşel (Iol Caesarea)/Tanca (Tingi); `kaynak:`da «ABİ MERKEZ … zincir eyalet düzeyinde künye sınırlarından devralındı, BEYANLI YAKLAŞIKLIK». Varlık tanığı her yerleşimin ilk diliminde Pleiades id'si (≤3 km, Roma dönemi tanıklı; toplu CSV 13.11.2026).

| Eyalet | Yıl ve kaynak | Yerleşim | Madde |
|---|---|---|---|
| **Africa (Vetus)** | -0145 (MÖ 146): Appian, Punica 135 (Horace White çev., Livius.org aracılığıyla; ikinci akademik kaynak aranıyor) + TDV «Afrika» (Kartaca yenilgisi sonrası kıyılar Roma'nın; TDV yıl vermez) | 11: Kartaca (Carthage), Kelîbiye, Nâbil, Sûse, Munastır, Mehdiye, Sfaks, Benzert, Mâtir, Zağvân, Kerkene | 8 (Africa toplam; Africa Nova batısı ile birlikte) |
| **Africa Nova (batı Tunus)** | -0045 (MÖ 46): Cassius Dio 43.9.2 (Loeb/Thayer, okundu) + künye numidia t -0045 | 7: Kef, Bâce, Testûr, Tabarka, Sübaytıla, Mekter, Kafsa | (yukarıdaki 8'e dahil) |
| Africa devamı | 440 Vandal: TDV «Tunus» (440-535; künye kaynağı 439 → ic_not'ta, TDV esas) · 534 Bizans: künye (TDV 535; künye aşımı olmasın diye 534 korundu, çelişki beyanlı) · 591 Eksarhlık (künye, Treccani «esarcato») · 698: TDV «Berberîler» (Kayrevan 701/698 rivayeti) → beyanlı `__BOSLUK__` → mevcut ilk dilim | — | — |
| **Numidia (Africa Nova)** | -0045: Cassius Dio 43.9.2 + künye numidia | 7: Konstantin, Mîle, Tebesse, Hanşele, Kalme, Sikikde, Annaba | 4 (-0045, -0026, 395, 429) |
| **Tripolitania** | -0045: TDV «Libya»: «MÖ 46'da Numidya'yı katınca» Sabratha-Oea-Leptis birleşti | 2: Trablus (Oea), Hums (Leptis Magna) | 4 |
| **Mauretania** | 0040: Treccani «Mauretania» (künye mauretania-krallik t) + Cassius Dio 59.25 (başlık) + 60.9 (Claudius ülkeyi Tingis/Caesarea adlı iki bölgeye ayırdı; Treccani: 42) | 17: Velîlâ (Volubilis), Altava, Rabat (Sala), Tanca (Tingi), Kasrülkebîr, Melîle (Rusaddir), Şerşel, Tenes, Miliana, Cezayir (Icosium), Tilimsan (Pomaria), Oran, Ayn Temûşent, Dellîs, Cicel, Şelif, Medea | 3 (40, 395, 429) |

Numidia / Tripolitania / Mauretania 395 sonrası: bati-roma 429-05-01'e dek (künye vandal f, Hydatius Chronicon 90 «mense Maio»); sonrası beyanlı `__BOSLUK__` — 435 Hippo, 442 antlaşması, Bizans 533-534 ve Berberî krallıkları şehre özgü okunmadı. Kartaca/Trablus/Tilimsan'da zincir mevcut 500 dilimine, Kafsa'da mevcut beyanlı 500-534 `__BOSLUK__` Vandal ile değiştirilerek 534 Bizans dilimine bağlandı (tek mevcut dilim değişikliği; o dilim kaynaksız beyandı). Volubilis ve Altava (`harabe`, `bit` 1281): `bos:"veri-yok"` kaldırıldı.
Diocletianus bölünmeleri (Numidia 198, Byzacena/Tripolitania/Sitifensis 293-303) künye değiştirmediğinden ayrı kırılma/madde yazılmadı (beyanlı).

## 3. Yazılmayanlar ve nedeni
- **Kirenayka** (Bingazi, Derne, Tobruk, Merc, Tulmeyse, Beyzâ/Kirene, Ayn el-Ğazâle): eyalet yılı için kabul edilebilir kaynak bulunamadı. TDV «Libya»: «kısmen MÖ II. yy'dan beri … tamamı ancak MS IV. yy'da» (yıl yok); MÖ 96/74/67 yalnız Vikipedi türevi sayfalarda görüldü (yasak), Livy Periochae 70 / Livius sayfaları açılamadı (404). Arap fethi (Berka 21/642, TDV «Libya») okundu ama tek başına zincir kurmaz. YAZILMADI.
- **Sahra/limes yerleri** (Ğadâmis, Derc, Sinâvin, Mızde, Nâlût, Kabâv, Garyân, Zuvâre, Zilten, Terhûne, Câlû, Sokna, Merâde, Cağbûb, Ecdâbiye): Pleiades Roma tanıklı ama çoğu Severus dönemi (200+) kale; MS 150'de eyalet içi olduğu kanıtlanamadı, -0045/-0145'ten başlatmak yanlış olurdu.
- **Gabes (Tacape), Cerciş (Gergis), Tozer, Kıbillî, Dûz, Nefta, Tatavin, Sirte, Misrata**: Emporia/Syrtica/Djerid'in Roma'ya geçiş yılı okunmadı (TDV «Libya» yalnız Oea-Leptis-Sabratha'yı anar); Gabes ve Cerciş mevcut 500 dilimine bağlanmadı.
- **Tunus, Halkulvâdî, Kayrevan, Rakkāde, Cendûbe, Ğâru'l-Melh, Kasrayn, Ğar Dimâv**: Pleiades eşleşmesi yok/zayıf (>2 km yalnız akvedük/«Untitled») ya da Kayrevan Roma çağında yok (670 kuruluş).
- **Setif, Mesîle, Cilfe, Tâhert, Biskra, Batna, Bicâye, Aynı Beydâ, Bû Sa'âde, Sûk Ahrâs**: Caesariensis/Numidia/Sitifensis sınırında eyalet-içi yeri ya da Pleiades eşleşmesi belirsiz.
- **Mazagan, Miknâs, Arzila, Larache, Sebte, Bâdis, Tamesna, Fas Atlantik güneyi**: Mauretania Tingitana limes dışı (Sala'nın güneyi) ya da Pleiades eşleşmesi zayıf. **İber/Sicilya/Malta/Yunan** yerleşimleri (bbox taşması): başka tur.
- Cartago öncesi Numidya/Pön evresi (kartaca künyesi Karthago noktasında zaten var; numidia künyesi -0200..-0045) yazılmadı.

## 4. Ölçülemedi / uyarı
1. Tam `denetle.py` (Değişmez 2/2s/3/8), `renk_olc`, çeviri eşitliği ölçülmedi. 19 madde yalnız Türkçe → `ceviri.py` tavanı kapıda yükselebilir (Emre kararı: çeviri yok). Yeni kırılmaların her biri için aynı gün tarihli, `yer`'inde o yerleşimleri anan madde yazıldı (kuruluşta üretildi); kapıda doğrulanmalı. Mevcut dilime bağlanma uçları (1281 vb.) yeni kırılma sayılırsa mevcut maddelere bırakıldı.
2. Appian Punica 135 yalnız Livius.org (White çevirisi) üzerinden okundu; TDV «Afrika» MÖ 146 yılını açık yazmaz. Bir hakemli makale MÖ 146'da eyalet statüsünü tartışır (arama özeti; metin 403, okunamadı) → BEYANLI YAKLAŞIKLIK.
3. Vandal başlangıcı: TDV 440 (esas) ↔ künye kaynağı 439 (Kartaca; 19 Ekim 439 günü kaynakta doğrulanamadı); bitiş TDV 535 ↔ künye 534. Künye sınırı korundu.
4. TDV «Tunus» 701'de Kartaca'nın geri alınışını verir (82 H), künye/TDV «Berberîler» 698: künye 698 esas.
5. Kartaca sahası MÖ 146–44 arası yıkıktı; zincir -0145'ten başlar (sahanın Roma toprağı oluşu), yeniden imar tarihi okunmadı (beyanlı).
6. Mauretania'da 429 sonrası Roma varlığı (Tingi, Caesarea) ve Mauri krallıkları okunmadı: 429-05-01'den mevcut ilk dilime dek beyanlı boşluk (Hums için 1912'ye dek).

## 5. Karar soruları
1. Kirenayka için Livius.org (Lendering) tek kaynak olarak kabul edilsin mi, yoksa Brill's New Pauly/CAH/Laronde makalesi mi beklensin?
2. Vandal ucu: TDV 440 mı, künye kaynağı 439 mu (gün 19 Ekim 439 kaynaklı doğrulanırsa künye f ve zincir güncellensin mi)?
3. 429 sonrası Mauretania/Numidia/Tripolitania'da Bizans 533-534 fethi ve Berberî krallıkları şehir bazında ayrı bir turda mı yazılsın?
