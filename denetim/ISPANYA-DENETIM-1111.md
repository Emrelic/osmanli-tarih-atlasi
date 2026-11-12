# İSPANYA DENETİMİ — 11/12 Kasım 2026 (DENETIM-1111)

**Kapsam:** Kastilya · Aragon · Navarra · Gırnata (Nasrî) · Portekiz birliği → İspanya (1479–bugün),
İtalya (Napoli/Sicilya/Sardinya/Milano), Kuzey Afrika kaleleri, Amerika ve Pasifik sömürgeleri,
Fas himayesi, Sahra, İç Savaş, Ceuta/Melilla.
**Makine/ağaç:** UMIT (eczane makinesi, HAFİF KİP: yönetici oturumun talimatıyla `denetle*.py`,
`paketle`, `push_kapisi` koşturulmadı). Dal `claude/elastic-franklin-745cff`, taban `7a3659d54`
(`origin/main` ile 0 fark, 11 Kasım 2026).
**Yöntem:** `data/devletler.js`, 127 `yerlesimler*.js`, 289 `kronoloji*/olaylar*` dosyası node ile
okundu (betikler scratchpad'de: `cikar.js`, `analiz.js`, `bul.js`). Değişmez 2 **yaklaşık** ölçüldü:
bir kırılmanın ±30 gününde yer adını ya da taraflardan birinin kimliğini anan herhangi bir madde
(künye kronolojisi dahil) varsa "maddeli" sayıldı. `denetle.py`nin kendi ölçüsü değildir; `denetle`
koşturulamadı (ölçülemedi). Üretilmiş harita (`devletler_harita.js`, `donemler.js`) ölçülmedi —
bulgular **veri** katmanındadır; motorun petek emişi ayrıca etkiler.
Osmanlı dönemleri yerleşimlerde `kd:`/`m:` ile taşınır; `s:` dizisindeki "delik" görünen Osmanlı
dilimleri (Oran 1708–32, 1792–1831; Bicâye 1555–1833; Tunus 1574–1881) **hata değildir**, denetlendi.

---

## A. EN ÖNEMLİ BULGULAR (öncelik sırasıyla)

### A1 · SINIR + SESSİZ-DEĞİŞİM — Fas İspanyol himaye bölgesi haritada yok denecek kadar az (1912–1956)
- **Atlasta:** `fas-ispanyol-himayesi` yalnız **1 yerleşimde** (Nador). Bölgenin başkenti
  **Tıtvân (Tetuan)** (`yerlesimler_h2_kuzeyafrika.js`), **el-Arâiş (Larache)**, **Kasrülkebîr**
  (aynı dosya) ve **Arzila (Asilah)** (`yerlesimler_ek3.js`) 1912-03-30 → 1956-03-02
  `fas-fransiz-himayesi` boyalı. **Tanca** (`yerlesimler.js`) de 1912–1956 `fas-fransiz-himayesi`.
- **Kaynak:** 27 Kasım 1912 Madrid Hispano-Fransız Sözleşmesi kuzey bölgesini İspanya'ya verdi;
  Yüksek Komiserlik ve halife Tetuan'da oturdu (BNE, *Protectorado* dosyası,
  https://www.bne.es/sites/default/files/repositorio-archivos/PROTECTORADO1.pdf; CEPC, *Revista de
  Política Internacional*, https://www.cepc.gob.es/sites/default/files/2021-12/11088rpi025156.pdf).
  Larache ve Kasrülkebîr Haziran 1911'de İspanyol birliklerince işgal edildi (Univ. Murcia,
  https://digitum.um.es/digitum/bitstream/10201/11947/1/2573079.pdf). Bölge 7 Nisan 1956 Ortak
  Bildirisi'yle sona erdi (BOE 4 Mart 1957; CIRAM metni
  https://ciram.unimc.it/it/focus/diritto-geopolitica-mare/WesternSahara/ConvenioEspMarr_1956_en.pdf).
- **Tanca:** Tanca Statüsü 18 Aralık 1923 imza, **1 Haziran 1925 yürürlük**; İspanyol işgali
  14 Haziran 1940 – 11 Ekim 1945; uluslararası statü 29 Ekim 1956'ya kadar (Britannica "Tangier";
  Awraq 21, https://www.awraq.es/storage/2023/01/021-Tanger-internacional-y-su-estatus.pdf).
- **Önerilen düzeltme:** Tetuan, Larache, Kasrülkebîr, Asilah: `1912-11-27 → 1956-04-07
  d:"fas-ispanyol-himayesi"` (1912-03-30 → 1912-11-27 arası: `fas` ya da Fas Fransız himayesi
  sözleşmesi öncesi beyanlı); Tanca: `1912-03-30→1925-06-01 fas` (statüsü tartışmalı: beyan),
  `1925-06-01→1940-06-14 tanca-uluslararasi-bolge`, `1940-06-14→1945-10-11 fas-ispanyol-himayesi`
  (İspanyol işgali), `1945-10-11→1956-10-29 tanca-uluslararasi-bolge`, sonra `fas-krallik`.
  Rif ve Cebele'ye (Şefşavan, el-Hüseyme çevresi, Nador–Melilla hinterlandı) yeni nokta gerekebilir:
  önce mükerrer taraması.

### A2 · SINIR — İç Savaş haritası milliyetçi bölgeyi büyük ölçüde eksik gösteriyor (1936–1939)
- **Atlasta:** `ispanya-milliyetci` 20 yerleşimde. 1936-07-17 → 1939-04-01 boyunca **42
  İspanyol yerleşimi** kesintisiz `ispanya` (Cumhuriyet) kalıyor, aralarında Temmuz 1936'da
  ayaklanmacıların eline geçenler var: **Melîle, Sebte, Bâdis, el-Hüseyme, Cabo Juby** (Afrika
  ordusu, 17–18 Temmuz), **Kanarya Adaları** (Las Palmas, La Laguna, Santa Cruz de La Palma,
  La Gomera, El Hierro, Teguise, Betancuria — 18 Temmuz), **Cádiz, Kurtuba, Granada, Algeciras,
  Huelva, Vigo, León, Zamora, Astorga, Simancas, İbiza**. Sonraki yıllarda düşen San Sebastián
  (Eylül 1936), Toledo (Eylül 1936), Ronda (Eylül 1936), Málaga/Motril (Şubat 1937), Tortosa
  (Nisan 1938), Girona/Vic (Şubat 1939), Menorka (Şubat 1939), Alicante/Murcia/Cartagena/
  Almería/Jaén/Cuenca (Mart 1939 sonu) da kırılmasız.
- **Kaynak:** Melilla, Tetuan, Ceuta 17–18 Temmuz gecesi; Kanarya'da Franco 18 Temmuz sabahı
  sıkıyönetim ilan etti; Cádiz ve Sevilla ayaklanmacılarda; Granada Temmuz sonunda
  (Univ. València kronolojisi https://www.uv.es/ivorra/Historia/SXX/1936b.htm; La Sauceda arşivi
  "Frentes de batalla"). **Kurtuba ve Cádiz için kaynaklar ilk günlerde kısmi denetim diyor**
  (çelişkili; şehir merkezi isyancıda).
- **Önerilen:** Sayılan her yerleşime düşüş günüyle `ispanya-milliyetci` dönemi + madde
  (`ispanya-milliyetci` künye kronolojisi şu an yalnız 13 şehir sayıyor). Günler tek tek kaynakla
  okunmalı (Gran Enciclopèdia Catalana "Guerra civil espanyola" künyede zaten kullanılıyor).
- **Etiket:** Cumhuriyet bölgesi haritada `ispanya` künyesiyle **"İspanya (Kastilya-Aragon)"** adıyla
  görünüyor. II. Cumhuriyet (1931-04-14 → 1939-04-01) için ad/dönem ayrımı yok (EKSİK-DEVLET
  sınıfında değil, AD sorunu). Öneri: künyeye dönemli ad ya da `ispanya-cumhuriyet-2` künyesi;
  1931-04-14 maddesi `kronoloji_cok_1923_1945.js`te var.

### A3 · TARİH-HATA + SESSİZ-DEĞİŞİM — Filipinler bütünüyle 13 Ağustos 1898'de ABD'ye geçiyor
- **Atlasta:** 13 yerleşim (Manila, Cebu, Kotabato, Iloilo, Vigan, Zamboanga, Naga, Butuan,
  Tuguegarao, Puerto Princesa…) 1898-08-13 `ispanya → abd`. ±30 günde yer adını anan madde yok.
  `ispanyol-filipinler` künyesi (t 1898-12-10) haritada **hiç kullanılmıyor**.
- **Kaynak:** 13 Ağustos 1898 yalnız **Manila'nın** teslimidir. Iloilo'daki İspanyol garnizonu
  24 Aralık 1898'de çekildi, şehir Visayas devrimcilerine kaldı; son İspanyol mevzii
  **Zamboanga Mayıs 1899**'da teslim edildi (17/18 Mayıs; tahliye 23 Mayıs) (philamwar.com
  kronolojisi https://www.philamwar.com/timeline.html; Taylor raporu "Panay"
  https://philamwar.com/taylor-07-panay.html — birincil ABD askerî raporu neşri). Hukukî devir
  Paris Antlaşması 10 Aralık 1898 (künye zaten bunu yazıyor). **Üçüncü bağımsız akademik kaynakla
  teyit edilmedi → beyanlı.**
- **Öneri:** Manila 1898-08-13 `abd` kalabilir; öteki adalar 1898-12-10'a kadar `ispanya`;
  Iloilo 1898-12-24, Zamboanga 1899-05-18 devirleri (arada devrimci yönetim: Malolos künyesi var,
  yalnız Malolos noktasında kullanılıyor). Madde yazılmalı.

### A4 · HAYALET/ÇELİŞKİ — Caracas, Bogotá, Quito 1810–1821 "Peru Genel Valiliği"ne boyalı
- **Atlasta:** `yeni-granada-valiligi` künyesi t **1810-07-20**, `venezuela-genel-kaptanligi`
  1810-04-19'da bitiyor; arkasından bu yerleşimler **`ispanyol-peru`** oluyor: Caracas
  1810-04-19→1821-06-24, Bogotá 1810-07-20→1819-12-17, Quito 1810-07-20→1822-05-24, Panamá
  1810-07-20→1821-11-28 (toplam 31+ yerleşim: 11 Venezuela + 20 Yeni Granada grubu).
- **Kaynak:** 19 Nisan 1810 Caracas ve 20 Temmuz 1810 Bogotá cuntaları yerel özerklik ilanlarıdır;
  Yeni Granada valiliği kralcı idare olarak 1819'a dek sürdü (Sámano Ağustos 1819'da kaçtı).
  Peru Genel Valisi Abascal'ın 13 Temmuz 1810 kararnamesi yalnız **Río de la Plata'ya bağlı
  vilayetleri (Yukarı Peru: Potosí, La Paz, Cochabamba, Charcas)** Peru'ya kattı — Venezuela ve
  Yeni Granada'yı değil (PUCP deposu
  https://repositorio.pucp.edu.pe/bitstreams/33b18fe7-2166-49f9-b42f-f93efd5b2441/download;
  CEPC *Historia y Política* 24, 2010).
- **Öneri:** `yeni-granada-valiligi.t` ve `venezuela-genel-kaptanligi.t` kralcı idarenin sonuna
  uzatılsın (Bogotá 1819-08-07/10, Caracas 1821-06-24, Quito 1822-05-24, Panamá 1821-11-28);
  vatansever cumhuriyet dilimleri (I. Venezuela Cumhuriyeti 1811-07-05→1812-07-25, II. 1813–1814;
  Cundinamarca/Birleşik Eyaletler 1810–1816) Emre kararıyla ayrı künye ya da beyan. Bu tartışmalı
  bir hanedan/egemenlik sorusu değil, kimlik hatasıdır.

### A5 · SINIR — Río de la Plata Genel Valiliği (1776–1810) haritada hiç yok
- **Atlasta:** `rio-de-la-plata-valiligi` künyesi (1776–1810) **0 yerleşimde**. Buenos Aires
  1580–1810 düz `ispanya`; Potosí, La Paz, Sucre, Oruro, Tarija 1545/1548→1824 kesintisiz
  `ispanyol-peru` (oysa 1776'da Río de la Plata'ya bağlandılar, 1810'da Peru'ya döndüler).
  Montevideo 1726–1814 `ispanya`.
- **Kaynak:** Charcas'ın Peru'dan ayrılıp Río de la Plata'ya bağlanması (III. Carlos, 1776) ve
  13 Temmuz 1810 geri katılışı — A4'teki PUCP kaynağı; Hamnett aktarımı.
- **Öneri:** Buenos Aires, Montevideo, Asunción, Yukarı Peru şehirleri için
  `1776-08-01 → 1810-05-25/07-13 rio-de-la-plata-valiligi` (kuruluş günü kaynakla okunmalı:
  geçici kararname 1 Ağustos 1776, kesin 27 Ekim 1777 — **okunmadı, teyitsiz**).
  Ayrıca `yeni-granada-valiligi` 1717-05-27'den kesintisiz; valilik **5 Kasım 1723'te kaldırıldı,
  20 Ağustos 1739'da yeniden kuruldu** (*Fronteras de la Historia*, Redalyc
  https://www.redalyc.org/pdf/833/83350361007.pdf; Britannica "Viceroyalty of New Granada"):
  1723–1739 arası `ispanyol-peru`ya dönmeli.

---

## B. DİĞER BULGULAR

| # | Kimlik | Atlasta | Kaynak | Sınıf | Öneri |
|---|---|---|---|---|---|
| B1 | `fas-ispanyol-himayesi` künye `t` + Nador (`yerlesimler_halef_1946.js`) | t **1956-04-05**; künye kronolojisi "1956-04-07"; sınır maddesi `kronoloji_sinir_halef_1923_2000.js` 1956-04-05 | 7 Nisan 1956 Madrid Ortak Bildirisi (BOE 4.III.1957) | ÇELİŞKİ / TARİH-HATA | t, Nador kırılması ve sınır maddesi **1956-04-07** |
| B2 | Menorka (Mahon) `yerlesimler.js` | 1708-09-29 → 1802-03-25 kesintisiz `ingiltere` | 1756–1763 Fransız; 1782-02-05 İspanya geri aldı (madde `kronoloji_ispanya.js`te **var**: 1782-02-05); 1798 Kasım İngiliz; 1802 Amiens | SESSİZ-DEĞİŞİM (ters: madde var, harita yok) | `1756-06-28 fransa · 1763-02-10 ingiltere · 1782-02-05 ispanya · 1798-11-16 ingiltere · 1802-03-25 ispanya` (1756 ve 1798 günleri teyit edilmeli) |
| B3 | Milano `yerlesimler.js` · `milano-dukaligi` kron | `ispanya → avusturya` **1714-03-07** (Rastatt); künye kron **1714-01-01** | Eugenio Milano'ya Eylül 1706'da girdi (Britannica "Milan: Evolution of the modern city"; tarih 24 ya da **26 Eylül** — kaynaklar ayrışıyor); 13 Mart 1707 Milano Sözleşmesi Bourbon kuvvetlerini çekti | TARİH-HATA / ÇELİŞKİ | fiilî devir 1706-09-26 (beyan: 24/26) + madde; künye kron 1714-01-01 → 1714-03-07 ya da kaldır |
| B4 | Napoli, Sicilya şehirleri | Napoli 1281–1861 `napoli` (yalnız 1799 Partenopea); Palermo/Messina 1282–1816 `sicilya-aragon` | İspanyol Napoli 1503/04–1707; **Avusturya Napoli 7 Temmuz 1707–1734**; Sicilya **Savoya 1713–1720, Avusturya 1720–1734/35** (künye kronolojileri 1713-08-13 ve 1720-02-17 maddelerini zaten yazıyor) | SINIR / SESSİZ-DEĞİŞİM (ters) | Napoli için 1707-07-07 `avusturya`, 1734-05-25 `napoli` (Bourbon); Sicilya şehirleri için 1713 Savoya, 1720 Avusturya, 1735 Bourbon dilimleri. Orbetello 1707'de zaten Avusturya'ya geçiyor — tutarsız. 1503–1707 İspanyol egemenliği: aynı künye mi, `harita:"ispanya"` mı — Emre kararı |
| B5 | Kalyari / Sardinya şehirleri; `sardinya-aragon` | 1479–1720-09-02 kesintisiz `ispanya`; `sardinya-aragon` künyesi 0 yerleşim | Cagliari Ağustos 1708'de İngiliz-Avusturya eline geçti; 1717 Alberoni yeniden aldı (künye kronunda var); 1720: 2 Ağustos ön protokol, **5 Ağustos genel vali Chacón ayrıldı** (UCM *Cuadernos de Historia Moderna* https://revistas.ucm.es/index.php/CHMO/article/download/43287/41004/64394); künye kronunda "24 Ağustos" | ÇELİŞKİ / SINIR | 1708-08 `avusturya`, 1717-10 `ispanya`, 1720 devri tek güne indirilsin (kaynaklar 2/5/8/24 Ağustos — beyanlı); `sardinya-aragon` ya kullanılsın ya künye ömrü kısaltılsın |
| B6 | New Orleans `yerlesimler_amerika.js` | `fransa → ispanya` **1763-11-03** | Fontainebleau gizli antlaşması **3 Kasım 1762** (madde `olaylar_kamerika.js`te 1762-11-03 olarak **var**; Spiro aynı günü kullanıyor) | TARİH-HATA (yıl yazımı) | 1762-11-03 (fiilî İspanyol idaresi 1766 Ulloa / 1769 O'Reilly — beyan). Ayrıca 1800 San Ildefonso – 30 Kasım 1803 Fransız devri gösterilmiyor (madde `kronoloji_ispanya.js` 1803-11-30 var) |
| B7 | Melîle (Melilla) `yerlesimler_ek3.js` | `merini → ispanya` **1497-01-01** | Madde `kronoloji_sinir_avrupa_bati.js:63` **1497-09-17** (Estopiñán) | TARİH-HATA (kendi maddesiyle >30 gün) | kırılma 1497-09-17. (Not: 1497'de Fas'ta Vattâsîler; atlas `merini` künyesini 1549'a uzatmış — tasarım beyanı) |
| B8 | İspanyol Sahrası: Villa Cisneros (Dahla) `yerlesimler_a78_afrika.js`, La Agüera | Villa Cisneros `ispanya` 1884-01-01→**1976-04-14**; La Agüera `ispanyol-sahra` →1976-02-26; künye f 1884-12-26, t 1976-02-26 | İspanya 26 Şubat 1976'da çekildi; Dahla bölgesi Moritanya'ya (eldebate/UAM *REIM* https://revistas-new.uam.es/reauam/article/download/21440/18789/73963) | ÇELİŞKİ / HAYALET (1976-02-26→04-14 arası İspanya yok) | Villa Cisneros: `1884-12-26→1976-02-26 ispanyol-sahra`; 1976-02-26→04-14 arası beyanlı (Moritanya fiilî; 14 Nisan bölüşme antlaşması) |
| B9 | Cabo Juby (Tarfaya) | `ispanya` 1916-01-01→1958-04-10; `cabo-juby-ispanyol` künyesi (1912-11-27→1958-04-01) 0 yerleşim | İspanyol işgali 1916 (gün okunmadı); Angra de Cintra 1 Nisan 1958 (madde `kronoloji_sinir_halef_1923_2000.js` 1958-04-01) | ÇELİŞKİ | yerleşim `cabo-juby-ispanyol` + t'yi künyeyle eşle (1958-04-01 imza / 04-10 teslim: biri seçilip beyan) |
| B10 | `ifni-ispanyol` (1934–1969) | künye var, **haritada nokta yok** | İfni 6 Nisan 1934 işgal, 30 Haziran 1969 devir | EKSİK (harita) | Sidi Ifni noktası ekle (mükerrer tara) |
| B11 | Ternate, Tidore (`ispanya`) · Kolonia (Pohnpei) · Natchez · Pensacola · St. Augustine · Florida 1821 | 1606-04-01, 1663-05-01, 1779-09-21, 1781-05-08, **1821-07-10/17**, 1798-04-07, 1899-10-12 kırılmalarının ±30 gününde madde yok | Florida günleri künye `ispanyol-florida`nın `ic_not`unda kaynaklı (NPS) ama künye kronolojisi D2 evreninde değil | SESSİZ-DEĞİŞİM | Florida 1821 için `kronoloji_sinir*`e iki madde; ötekiler için kaynaklı madde |
| B12 | Gırnata seferi | Ronda **1485-05-22**, Mojácar **1488-06-10**, Cebelitarık+Algeciras **1462-08-20** kırılmaları maddesiz | Ronda 22 Mayıs 1485; Cebelitarık 20 Ağustos 1462 — günler doğru (TDV "Gırnata"da yalnız yıl) | SESSİZ-DEĞİŞİM | madde yaz (TDV + DBE) |
| B13 | Siena | `ispanya → toskana` **1557-07-03** maddesiz | II. Felipe'nin Siena'yı Cosimo'ya tımar olarak verdiği Londra Antlaşması, 3 Temmuz 1557 (gün **teyit edilmedi**) | SESSİZ-DEĞİŞİM | madde + gün teyidi |
| B14 | Maastricht 1632-08-22, Tournai 1521-11-30 | maddesiz | Maastricht kuşatması 22 Ağustos 1632'de bitti (teyitsiz) | SESSİZ-DEĞİŞİM | madde |
| B15 | Portekiz birliği 1580–1640 | Yalnız ana kara (10 şehir, 1580-08-25 Alcântara) + Sebte `ispanya`'ya geçiyor; Portekiz sömürgeleri (Goa, Brezilya, Angola, Malaka…) `portekiz`te kalıyor | Portekiz, Tomar Kortesi'yle (Nisan 1581) ayrı taç olarak kaldı; TDV "İspanya" «ilhak» diyor | ÇELİŞKİ (tasarım) | İki seçenek Emre'ye: (a) birlik dönemi `portekiz` kalır + kişisel birlik beyanı, (b) sömürgeler de `ispanya` rengine. Ana kara günü: 25 Ağustos 1580 savaş günü, hukukî 15/16 Nisan 1581 (`kronoloji_ispanya.js` 1581-04-15, Sebte 1581-04-16 — tek güne indirilmeli) |
| B16 | Habsburg Hollandası / Artois / Franche-Comté | 22 yerleşim + Arras, Lille, Besançon `1516-01-23 → ispanya` | 1516 Fernando'nun ölümü Carlos'u İspanya kralı yaptı; Burgonya mirası (Hollanda) İspanya tacına 25 Ekim 1555 / 16 Ocak 1556 tahttan çekilmeyle bağlandı (`kronoloji_ispanya.js` 1556-01-16 maddesi var) | ÇELİŞKİ | Emre kararı: 1516 kişisel birlik `habsburg-hollandasi` kalsın, 1556-01-16'da `ispanya`; ya da mevcut hâl + beyan |
| B17 | `ispanya` künye kron "1580-06-01 Osmanlı ile fiilî ateşkes" | gün 06-01 kaynaksız | İlk mütareke **7 Şubat 1578** (Margliani; DergiPark OTAM https://dergipark.org.tr/tr/pub/otam/article/132247 ve https://dergipark.org.tr/en/download/article-file/290093); 1580/1581'de yenilendi (YÖK Açık Bilim 20.500.12812/98048) — kaynaklar yenileme yılında ayrışıyor | KAYNAKSIZ / ÇELİŞKİ | 1578-02-07 ilk mütareke maddesi; 1580 yenilemesi yıl hassasiyetinde ve TDV "İspanya" + "Osmanlı-İspanya" ile teyit (**TDV maddesi bu oturumda açılmadı**) |
| B18 | Tanca künyeleri | `tanca-uluslararasi-bolge` (f 1923-12-18) ve `tanca-bolgesi` (f 1924-05-14) — **mükerrer**, ikisi de 0 yerleşim | Statü 18.XII.1923 imza, **1.VI.1925 yürürlük** | MÜKERRER / TARİH-HATA | tek künye, f 1925-06-01 (imza `ic_not`ta) |
| B19 | Kullanılmayan sömürge künyeleri | `ispanyol-oran-1/2`, `ispanyol-halkulvad`, `ispanyol-kuba`, `ispanyol-florida`, `ispanyol-santo-domingo`, `ispanyol-filipinler`, `valensiya-kralligi`, `cebelitarik-ingiliz`, `sardinya-aragon` — hepsi **0 yerleşim**; haritada `ispanya`/`ingiltere` görünür | — | TASARIM (bilgi) | Künye sayfası ile harita etiketi ayrışıyor; ya `s:` bu künyelere bağlansın (harita: `ispanya` boyasıyla), ya künyelere "haritada `ispanya` boyası" beyanı |
| B20 | Yukarı Peru 1824-12-09 → 1825-08-06 | Potosí, La Paz, Sucre, Callao vb. `ispanyol-peru → ispanya` | Ayacucho kapitülasyonu sonrası Olañeta'nın kralcı direnişi 1 Nisan 1825'e (Tumusla) dek; Callao kalesi 23 Ocak 1826 | BİLGİ | dilim makul; madde ekle (Tumusla) |
| B21 | Santo Domingo / Higüey 1865-03-03 | `ispanya → dominik-cumhuriyeti` maddesiz | İlhakı iptal eden kraliyet kararı **3 Mart 1865** (doğru); tahliye 10–15 Temmuz 1865 (Academia Dominicana de la Historia, *Clío* 202 https://catalogo.academiadominicanahistoria.org.do/opac-tmpl/files/clio/Clio-2021-202-113-125.pdf) | SESSİZ-DEĞİŞİM | madde yaz; kırılmayı tahliyeye (1865-07-11) taşıma seçeneği beyanla |
| B22 | `data/kronoloji_ispanya.js` başlık yorumu | "⚠️ HENÜZ CANLI DEĞİL. index.html'e bağlanmadı" | `index.html` dosyayı yüklüyor | BAYAT YORUM | yorumu düzelt |
| B23 | Perpignan 1463-01-01 | `aragon → fransa` maddesiz, yıl hassasiyeti | Bayonne Antlaşması 9 Mayıs 1462 (rehin), Fransız işgali 1463 (teyitsiz) | SESSİZ-DEĞİŞİM | madde + gün |

---

## C. DOĞRULANAN (sorun bulunmadı)

Kastilya-Aragon birliği 1479-01-19 (DBE, Emre kararı) · Gırnata 1492-01-02 (TDV) · Navarra/Pamplona
1512-07-25 · Oran 1509-05-17→1708-04-04, 1732-07-01→1792-09-12 (aralar Osmanlı `kd:`) · Bicâye
1510→1555-09-27 · Trablus 1510-07-25→1530-03-24 (Malta şövalyeleri) · Annaba 1535–1540 ·
Halkulvâd 1535-07-21→1574-08-24 · Tunus 1573-10-10→1574-09-12 · Cerbe 1560 · Bâdis 1564 ·
Larache 1610–1689 · Mamûra 1614–1681 · el-Hüseyme 1673 · Lizbon 1580-08-25 / 1640-12-01 ·
Cebelitarık 1704-08-04 · Sebte 1581 sonrası kesintisiz İspanyol (1640'ta İspanya'da kaldı, 1668
Lizbon Antlaşması maddesi var) · Havana 1762–63 · Manila 1762–64 · Yeni İspanya 1535-04-17 /
Meksika 1821-09-27 · Peru 1542-11-20 / 1824-12-09 · Buenos Aires 1810-05-25 · Şili 1818-02-12 ·
Küba/Porto Riko 1898-12-10 · Guam 1898-06-21 · Ekvator Ginesi 1968-10-12 · İç Savaş'ta mevcut 20
şehrin günleri (GEC kaynaklı).

---

## D. SAYILAR

- **Künye:** 110 aday tarandı; İspanya zinciri + sömürge + komşu **64 künye** ayrıntılı (f/t,
  kronoloji, kullanım sayısı). Kullanılmayan (0 yerleşim): 13.
- **Yerleşim:** zincirden bir künyeye en az bir kez bağlı **517 yerleşim**; **1449 kırılma**,
  618 (tarih × eski→yeni) grubu. 1281 sonrası, ilk-görünüş hariç **~360 grup**; bunlardan
  **65 grup** yaklaşık ölçüyle ±30 günde maddesiz (çoğu Portekiz sömürgesi, Amerika fethi ve
  Filipinler — İspanya'ya doğrudan ait olanlar B11–B14'te).
- **Madde:** İspanya/Portekiz/İberya'yla ilgili 2086 aday madde tarandı (regex); 15 `ispanya`,
  5 `granada`, 23 `ispanya-milliyetci` künye maddesi tek tek okundu.
- **Kaynak teyidi:** 12 web araması (İspanyol akademik: BNE, CEPC, UAM, UCM, Univ. Murcia,
  Univ. València, PUCP, Academia Dominicana; TR: DergiPark OTAM; dünya: Britannica).
- **Bulgu:** 5 ana (A1–A5) + 23 ikincil (B1–B23) = **28**.

## E. ÖLÇÜLEMEYENLER / BULUNAMAYANLAR

- `py arac/denetle.py` **koşturulmadı** (UMIT hafif kip). Değişmez 1/2/3/8 resmî sayıları yok;
  D2 yalnız yaklaşık.
- Üretilmiş harita (petek emişi) ölçülmedi: A1/A2'deki eksiklerin ekranda ne kadar alan tuttuğu
  bilinmiyor.
- **RAH Diccionario Biográfico ve TDV sayfaları bu oturumda açılmadı** (yalnız arama). B17
  (1578/1580 mütarekesi), B13 (Siena), B5 (Sardinya devri günü), A5 (Río de la Plata kuruluş
  günü), Menorka 1756/1798 günleri, Cabo Juby 1916 günü **teyitsiz**. A3 (Filipinler) üçüncü
  bağımsız akademik kaynakla teyit edilmedi → beyanlı.
- 1281 öncesi ilk halkalar (Kastilya 1035, Aragon 1035, Navarra 824, Portekiz 1097) yalnız
  kuruluş günü bakımından görüldü; yeni bulgu yok (künyelerde zaten beyan var).
- Kuzey ve Güney Amerika bağımsızlık sonrası sınırlar (Meksika 1836/1848 vb.) kapsam dışı
  bırakıldı (ABD ve Latin Amerika denetimleriyle çakışır).

## F. ÖNERİ (Emre'ye)

1. **A1 + A2 tek paket:** Fas kuzey bölgesi + İç Savaş noktaları aynı veri işi (Tetuan/Larache/
   Asilah/Kasrülkebîr/Tanca ve ~40 İspanyol şehri); KASA'da tek oturum, sonra koşu.
2. **A4 + A5 tek paket:** İspanyol Amerikası valilik zinciri (künye t'leri + `s:`); 60+ yerleşim.
3. **A3 + B2–B9** küçük düzeltmeler, ayrı oturumda.
4. Karar bekleyenler: B4 (İspanyol Napoli/Sicilya boyası), B15 (Portekiz birliği), B16
   (Hollanda 1516/1556), A2 etiketi (II. Cumhuriyet künyesi).
