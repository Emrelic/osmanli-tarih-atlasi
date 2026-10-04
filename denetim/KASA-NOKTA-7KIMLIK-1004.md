# KASA-NOKTA-7KIMLIK-1004 — "sıfır yerleşimli" 7 kimlik için nokta araştırması (YALNIZ ÖLÇÜM)

KASA · 4 Ekim 2026 · koordinatörün talebi (LAB: Değişmez 8'in 78 kör hattının 16'sı bu 7 kimlikten) · taban `origin/main` `5866c000` (okuma; `data/` donuk)
Koordinatlar **GeoNames** sayfasından (id ile). Aidiyet kaynakları ham metinden. **Veriye yazılmadı.**

## HÜKÜM (ölçtüm) — 7 kimlik üç ayrı sınıfa düşüyor; yalnız biri "nokta yok"
| sınıf | kimlik | durum | çare |
|---|---|---|---|
| 🟢 **GERÇEKTEN NOKTA YOK** | nikaragua-cumhuriyeti · kosta-rika-cumhuriyeti · honduras-cumhuriyeti (başkent) | 50 km içinde hiç nokta yok | **3 yeni nokta** (aşağıda A) |
| 🔴 **NOKTA VAR, YANLIŞ KİMLİKTE** | guney-afrika-birligi · ingiliz-hondurasi · honduras-cumhuriyeti (kıyı) | Noktalar mevcut, ama zincirleri bu künyeye hiç geçmiyor | Yeni nokta **gerekmez**; mevcut zincirler düzelir (aşağıda B) |
| ⚪ **NOKTA VAR, `v:` KOLUNDA** | tunus-beyligi-fransiz · misir-kavalali | 6 + 9 kayıt bu kimliği `v:` olarak taşıyor | Yeni nokta **gerekmez**. "Sıfır yerleşim" sayımı `v:`'yi saymıyor olabilir (aşağıda C) |
- 📌 **LAB'ın "7 kimliğin sıfır yerleşimi var" bulgusu 2/7'de sayım tanımından kaynaklanıyor.** `girdi.yukle()` ile ölçüldü: `tunus-beyligi-fransiz` 6 kayıtta, `misir-kavalali` en az 9 kayıtta `v:` kimliği. Değişmez 8'in gövdesi yalnız `s:`'den kuruluyorsa bu iki kör hat bir **araç** sorusu, nokta sorusu değil.
- 🔴 **Yeni bulgu (Orta Amerika):** Honduras kıyısındaki üç nokta (Trujillo, Omoa, Río Tinto) **1821-09-27 → 1923-10-29 kesintisiz `meksika`**. Atlasın kendi künyesi `orta-amerika-federasyonu` (1823-07-01 → 1838-05-30) ve `honduras-cumhuriyeti` (1838-10-26 →) varken üç Honduras kasabası 102 yıl Meksika'ya boyanıyor. Bu, bu gecenin "yanlış sahip" sınıfının (koordinatörün hüküm (c)'si) en uzun örneği.

## A · YENİ NOKTA ÖNERİLERİ (3)
| öneri | GeoNames | lat / lon | aidiyet kaynağı · tam cümle | `kur:` |
|---|---|---|---|---|
| **Managua** (Managua) — Nikaragua | id **3617763** "Managua, Nicaragua" | **12.13282 / -86.2504** | ELAHC (Gale), 'Managua', David L. Jickling (encyclopedia.com): "Before 1855, however, it was an obscure village. At that time it was chosen as a compromise capital to avoid conflict between the competing centers of León and Granada." · Oxford World Encyclopedia: "It became the capital in 1855." | **YAZILMAZ** (kuruluş yılı kaynakta yok) |
| **San José** (San José) — Kosta Rika | id **3621849** "San José, Costa Rica" | **9.93388 / -84.08489** | ELAHC, 'San José, Costa Rica', John Patrick Bell: "The final shift in power from Cartago to San José came in 1823 in a short, violent clash" | **YAZILMAZ**: kaynak "first settled during the second quarter of the eighteenth century" diyor (yüzyıl çeyreği; `D210`) |
| **Tegucigalpa** (Tegucigalpa) — Honduras | id **3600949** "Tegucigalpa, Honduras" | **14.0818 / -87.20681** | ELAHC, 'Tegucigalpa', Kenneth V. Finney: "In 1880, however, President Marco Aurelio Soto moved the seat of government permanently to Tegucigalpa, where it has remained ever since." (künyenin kendi kaynağıyla aynı cümle) | ⚠️ kaynak: "The Real de Minas de San Miguel de Tegucigalpa was **probably** formally established on 29 September 1578." ⇒ "muhtemelen" deniyor; `kur` yazılacaksa **1578 YIL + beyan**, gün yazılmaz. Önerim: yazılmasın ya da beyanlı yazılsın (hüküm sende) |
- **Mükerrer kontrolü** (`girdi.yukle()`, normalleştirilmiş ad + mesafe): üçünün **50 km** içinde hiç nokta yok. "San José" ad eşleşmesi 7 başka kayıt veriyor; hepsi farklı ülkelerde (Trinidad, Meksika, Bolivya, Arjantin…), 3 km kuralına girmiyor. **Mükerrer yok.**
- ⚠️ **Değişmez 1 notu (parti işi):** Her noktanın 1281–1923 her gününde sahibi olmalı. Kaynaklar yalnız cumhuriyet dönemini veriyor. 1838 öncesi zincir (İspanya → 1821 bağımsızlık → `orta-amerika-federasyonu` 1823-07-01→1838) atlasın künyelerinden kurulabilir, ama bu üç nokta için ayrı ayrı kaynaklanmadı. Managua'nın 1855 öncesi "obscure village" olması noktanın 1855 öncesinde de var olduğunu söylüyor; `kur:` için dayanak değil.
- Başkent seçimi gerekçesi (`§2` Voronoi): üçü de kimliğin bugünkü başkenti ve en büyük şehri. Nikaragua'da ikinci bir aday León/Granada olabilir; ELAHC cümlesi ikisini adıyla anıyor ama koordinat aranmadı (en çok 3 sınırı içinde, istenirse eklenir).

## B · NOKTA VAR, YANLIŞ KİMLİKTE (yeni nokta gerekmez)
### guney-afrika-birligi (f 1910-05-31)
- TDV `guney-afrika-cumhuriyeti`: "1910 yılında eski iki İngiliz eyaletiyle (Cape ve Natal) bu iki Boer eyaleti ortaklaşa hazırladıkları bir anayasayı yürürlüğe koyarak İngiltere'ye bağlı Güney Afrika Birliği Devleti'ni kurdular."
- Atlasta 22°G–35°G / 16°D–33°D kutusunda **62 nokta** var. Birliğin dört eyaletine düşenlerin zinciri **1923-10-29'a kadar `ingiltere`**, `guney-afrika-birligi`'ne hiç geçmiyor.
  - Örnekler: Kap (Cape Town) `ingiltere 1806→1923` · Transvaal (Bur cumhuriyeti) [koordinatı Pretoria] `transvaal→1902, ingiltere 1902→1923` · Oranj (Bur cumhuriyeti) [Bloemfontein] aynı · Kimberley · Nevkasl (Newcastle) · Potchefstroom · Vryburg · Upington · Umgungundlovu · Ulundi (Zululand).
- ⇒ Çare: bu noktalarda **1910-05-31**'de `ingiltere → guney-afrika-birligi`. Yeni nokta gerekmez.
- ⚠️ Kutudaki noktaların hepsi Birliğe ait değil. Bechuanaland (Serowe, Palapye, Kanye, Molepolole… İngiliz himayesi), Svaziland (Lobamba), Mozambik (Lourenço Marques) **dışarıda kalır**. Hangi noktanın Birlik sınırında olduğu poligonla ölçülmeli; elle ayırmadım.
- 📌 **Ek:** TDV: "Savaş sonrasında Milletler Cemiyeti, Güneybatı Afrika'nın manda yönetimini Güney Afrika Birliği'ne verdi." Atlasta Güneybatı Afrika noktaları (Vindhuk, Gobabis, Rehoboth, Keetmanshoop, Mariental, Aranos, Bethanie, Varmbad, Otjimbingve) **1915-07-09 → 1923 `ingiltere`**. Manda yılı TDV'de yok; ayrı kalem.

### ingiliz-hondurasi (f 1862-01-01)
- Atlas: **Belize Town** (17.504 / -88.197) `ingiltere 1716 → 1923` kesintisiz.
- Künyenin kendi kaynağı (history.state.gov): "Prior to independence Belize had been a British colony since 1862."
- ⇒ Çare: Belize Town'da **1862**'de `ingiltere → ingiliz-hondurasi` (künye YIL hassasiyetinde, 1862-01-01). Yeni nokta gerekmez.

### honduras-cumhuriyeti (kıyı noktaları)
- Atlas: **Trujillo (Honduras)** 15.918/-85.953 · **Omoa (San Fernando de Omoa)** 15.7664/-88.0428 · **Río Tinto (Black River, Moskito kıyısı)** 15.85/-84.85. Üçü de `meksika 1821-09-27 → 1923-10-29`.
- Atlasın künyeleri: `orta-amerika-federasyonu` 1823-07-01→1838-05-30 · `honduras-cumhuriyeti` f 1838-10-26 (Worldmark: "After Honduras declared itself independent on 26 October 1838").
- ⇒ Trujillo ve Omoa'nın 1838-10-26'dan sonra `honduras-cumhuriyeti` olması gerekir; 1823–1838 `orta-amerika-federasyonu`. Meksika'nın 1821–1823 penceresi için kaynak aranmadı.
- ⚠️ Río Tinto (Moskito kıyısı) ayrı: 19. yy'da İngiliz himayesindeki Miskito bölgesi. Kaynak aranmadı; Honduras'a geçiş günü bilinmeden `honduras-cumhuriyeti` yazılmamalı.

## C · NOKTA VAR, `v:` KOLUNDA
- **tunus-beyligi-fransiz** (1881-05-12 →): `v:` olarak Tunus, Kayrevan, Gabes, Sfaks, Cerbe (Djerba), Kerkene (Kerkennah); hepsi 1881-05-12 → 1923-10-29.
- **misir-kavalali** (1805-07-03 → 1914-12-18): `v:` olarak Kahire, İskenderiye (1805→1914), Hartum (1821→1885), Urfa, Maraş, Adana, Tarsus, Antakya (1832→1841), Mora/Tripoliçe (1825→1828) … (liste ilk eşleşmelerle sınırlı).
- ⇒ Bu iki kimliğin yerleşimi var. LAB'ın sayımı `s:` kimliklerini sayıyorsa iki kör hattın sebebi nokta eksikliği değil, **gövdenin `v:` kimliğinden kurulmaması**. Hangisi olduğu araçta ölçülmeli (ben aracı okumadım).

## ① NE ÖLÇTÜM · ② NE BULAMADIM · ③ NE İSTİYORUM
- ① 7 kimlikten yalnız 3'ü (Nikaragua, Kosta Rika, Honduras başkenti) gerçekten noktasız; bunlar için GeoNames koordinatlı ve ELAHC aidiyet cümleli 3 öneri var. 2 kimlik noktaları yanlış künyede tutuyor (Güney Afrika ~20 nokta, Belize 1). Honduras'ın kıyı noktaları 102 yıl `meksika`. 2 kimlik `v:` kolunda zaten yerleşimli.
- ② Bulamadıklarım: Managua ve San José için `kur:` (yıl yok) · Tegucigalpa `kur:` "probably" · Meksika 1821–1823 penceresinin kaynağı · Río Tinto'nun Miskito/İngiliz dönemi · Güneybatı Afrika manda yılı · Güney Afrika noktalarının poligonla Birlik içi/dışı ayrımı.
- ③ İstediklerim: (a) 3 yeni nokta parti adayı mı? · (b) Güney Afrika / Belize / Honduras kıyı noktalarının zincir düzeltmesi (yeni nokta yerine) · (c) Değişmez 8 gövdesinin `v:` kimliğini okuyup okumadığı LAB'a sorulsun mu?

Kaynaklar: GeoNames 3617763 / 3621849 / 3600949 · ELAHC 'Managua' (Jickling), 'San José, Costa Rica' (Bell), 'Tegucigalpa' (Finney) — encyclopedia.com · Oxford World Encyclopedia 'Managua' · TDV `guney-afrika-cumhuriyeti` · künye kaynakları (devletler.js).
