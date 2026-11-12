# ABD DENETİMİ — 1111 (kronoloji × harita × kaynak)

**Kapsam:** abd künye zinciri (on-uc-koloni → abd; konfedere-devletler; teksas-cumhuriyeti; hawaii-kralligi/-cumhuriyeti;
rus-amerikasi; puerto-riko; amerikan-filipinleri / filipin-commonwealth; amerikan-samoasi; panama-kanali-bolgesi;
pasifik-adalari-vesayet-toprak; ryukyu-abd-idaresi; abd-ordu-askeri-hukumeti-kore) ve komşu/yerli künyeler, 1607–bugün.
**Ölçüm yeri:** UMIT (CPU %100; Emre kararı: "burada hafif devam"), worktree `stoic-austin-ae0658`, HEAD `7a3659d54`.
**Yöntem:** `data/yerlesim*.js` içinden ABD ailesine giren her yerleşimin `s:` zinciri hafif betikle çıkarıldı (≈200 zincir,
119 kırılma günü); her kırılma gününe ±30 gün içindeki kronoloji maddeleri listelendi; iki alt ajan (1607–1867, 1867–bugün)
ABD kaynaklarıyla (Office of the Historian, LoC, National Archives, Avalon, NPS) gün doğruladı.
**Ölçülemedi:** `py arac/denetle.py` koşturulmadı (makine yükü + yönetici talimatı) → **Değişmez 1/2/3 ölçülmedi**; "sessiz"
hükümleri ±30 gün el taramasına dayanır (tırnaksız/çok satırlı maddeleri betik kaçırmış olabilir; ör. Gadsden 1854-06-30
maddesi `kronoloji_sinir_amerika.js`te VAR). Üretilmiş harita (petek) ölçülmedi.

Etiket: "okundu" = sayfa açılıp cümle görüldü · "arama özeti" = sayfa açılmadı · "teyitsiz" = kaynak açılmadı.

---

## 1. En önemli bulgular (öncelik sırası)

### 1.1 [TARİH-HATA · SESSİZ-DEĞİŞİM] 1923-10-29 "ufuk" artığı — 3 nokta 1923'te ABD'ye geçiyor
- `yerlesimler_kamerika.js:1375` **El Paso del Norte** (31.76,-106.49) ve `:1419` **La Junta de los Ríos (Presidio)** (29.56,-104.37):
  `meksika → abd 1923-10-29`. Kaydın kendi kaynağı "Guadalupe Hidalgo 1848 sonrası" diyor. ±30 günde yalnız Türkiye maddeleri.
- `yerlesimler_kamerika.js:806` **Fort St. Pierre (Rainy Lake)** (48.61,-93.40): `kanada → abd 1923-10-29`, kaynak "Britannica:
  Alaska sınırı 1903/1908" — ilgisiz. Parks Canada DFHD id=372 / historicplaces.ca (arama özeti): kale Fort Frances, Ontario
  (Pither's Point) — Kanada yakası.
- **Düzeltme:** Fort St. Pierre: abd dönemi sil, `kanada` 1867-07-01→2000-12-31. El Paso / Presidio: iki seçenek (Emre):
  (a) ad tarihî kasabayı (1659 misyonu = bugünkü Ciudad Juárez ~31.739,-106.487; La Junta = Ojinaga ~29.56,-104.41) gösteriyorsa
  koordinat taşınsın, `meksika` 2000'e uzasın — **önerilen**; (b) ABD yakası kalacaksa `abd` 1848 Guadalupe günüyle başlasın
  (bkz. 1.6 konvansiyon) ve ad "El Paso (Texas)" olsun.

### 1.2 [EKSİK-DEVLET · SINIR · ÇELİŞKİ] Konfedere Devletler haritada yalnız 2 nokta
- `konfedere-devletler` (`devletler.js:18839`, BOYALAR'da var) yalnız `yerlesimler_nokta2.js:56-57` Montgomery (1861-02-08) ve
  Richmond (1861-05-08) noktalarında; New Orleans, Charleston, Savannah, Mobile, Natchez, Pensacola, St. Augustine, San Antonio,
  Houston, Memphis, Little Rock, Nashville 1861–65 `abd`. Harita iç savaşı göstermiyor; iki küçük ada.
- Uç çelişkisi: s: bitişi 1865-05-04, künye t 1865-05-05. NPS *Surrender Events After Appomattox* (okundu): «May 5, 1865 … meets
  with his cabinet at Washington, Georgia, and the group dissolves» — 4 Mayıs Taylor'un Citronelle teslimi.
- **Düzeltme:** s: bitişi 1865-05-05 (künyeyle); `kronoloji_sinir_nokta2.js` 1865-05-04 maddesi 05-05'e. 11 eyalet merkezine
  ayrılış günüyle dönem + madde: SC 1860-12-20 · MS 1861-01-09 · FL 01-10 · AL 01-11 · GA 01-19 · LA 01-26 · TX 02-01 ·
  VA 04-17 · AR 05-06 · NC 05-20 · TN 06-08 (teyitsiz — yazmadan önce kaynakla doğrulanmalı; SC Konfederasyon öncesi
  1860-12-20…1861-02-08 için seçenek: abd'de bırak ya da beyanlı). Birlik geri alışları `isg:` olarak: New Orleans 1862-05-01,
  Nashville 1862-02-25, Memphis 1862-06-06 (teyitsiz). Konfedere künye 1861-02-04 maddesinin odak_yer'i Richmond → Montgomery;
  1865-05-05 dağılma maddesi yok [EKSİK-MADDE]; kaynak Britannica Kids → NPS/NARA.

### 1.3 [TARİH-HATA · SINIR] Louisiana 1762–1803: Mobile, Biloxi, New Orleans zincirleri
- `yerlesimler_kamerika.js:1395` **Mobile**, `:1403` **Biloxi**: fransa → `yeni-ispanya` 1762-11-03 → abd 1803-12-20.
  Mississippi'nin doğusu 1763 Paris ile İngiltere'ye geçti (louisiana künyesi de yazıyor). Encyclopedia of Alabama *Mobile*
  (okundu): «French (1702-1763), British (1763-1780) and Spanish (1780-1813)»; «Mobile became an American city in 1813».
  Madison bildirisi 1810-10-27 (Batı Florida, Perdido'ya dek; arama özeti).
  **Düzeltme:** Mobile: fransa →1763-02-10 · ingiltere →1780-03-14 (Gálvez, gün teyitsiz) · ispanya →**1813-04-13** (04-15 ic_not
  beyanı) · abd. Biloxi: fransa →1763-02-10 · ingiltere →1779/1781 (gün teyitsiz) · ispanya →1810-10-27 (bildiri; fiilî işgal 1811,
  gün bulunamadı) · abd. Kronolojiye 1810-10-27 ve 1813-04-13 maddeleri [EKSİK-MADDE].
- `yerlesimler_amerika.js:902` **New Orleans**: fransa → ispanya **1763-11-03** (öteki noktalar ve louisiana künyesi Fontainebleau
  1762-11-03) → 1803-04-30 **ispanya→ispanya sahte kırılma** → abd 1803-12-20. 1803-11-30 İspanya→Fransa devri yok.
  Louisiana State Museum *Louisiana Purchase* (okundu): «On November 30, 1803, Spain's representatives… officially transferred
  Louisiana to France's representative»; «On December 20, 1803 … signed the transfer document».
  **Düzeltme:** fransa →1762-11-03 (ya da fiilî İspanyol idaresi 1766-03-05 Ulloa / 1769-08-18 O'Reilly — seçim beyanlı) ·
  ispanya →1803-11-30 · `fransa-cumhuriyet` 1803-11-30→1803-12-20 · abd. St. Louis (`yerlesimler_kamerika.js:1177`): 1804-03-09
  İspanya→Fransa bir günlük devri yok (1804-03-10 kendi kaydında "doğrulanmadı").
- Kimlik çelişkisi: Louisiana noktaları `yeni-ispanya`, New Orleans `ispanya` (Louisiana Küba kaptanlığına bağlıydı) → `ispanya`.
- louisiana künyesi 1682 ve 1762 maddelerinin kaynağı Vikipedi [KAYNAKSIZ].

### 1.4 [TARİH-HATA · EKSİK-MADDE · SESSİZ] Filipinler 1898–1945
- 1898-08-13 (Manila'nın düşüşü) 13 noktaya uygulanmış (Manila, Cebu, Kotabato — `yerlesimler_asya.js:4287/4296/4313`; Iloilo,
  Vigan, Zamboanga, Butuan, Naga, Batangas, Legazpi, Tuguegarao, Dagupan, Puerto Princesa — `yerlesimler_gdasya.js`). Bu güne
  ait Filipin maddesi YOK (sessiz). LoC *World of 1898 Chronology* (okundu): «13 August 1898: Manila fell to U.S. troops».
  Office of the Historian *Philippine-American War* (okundu): devrimciler Luzon'un çoğunu ele geçirdi. Iloilo: İspanyollar
  1898-12-24/26 çekildi, ABD 1899-02-11 girdi; Cebu ABD girişi 1899-02-22 ya da 26 (arama özetleri, ikincil).
  **Düzeltme:** Manila 1898-08-13 kalsın + madde. Öteki 12 nokta: asgari `ispanya→abd` 1899-04-11 (Paris ilanı) BEYANLI
  YAKLAŞIKLIK; doğrusu İspanyol tahliyesi → `filipin-malolos-cumhuriyeti` → ABD girişi (Iloilo: 1898-12-25 → 1899-02-11).
  Kaynak önerisi: Linn, *The Philippine War 1899–1902* (UP Kansas 2000); CMH.
- Malolos Cumhuriyeti yalnız 1 nokta (`yerlesimler_nokta2.js:44`, 1899-01-23'ten). Künye `filipin-malolos-cumhuriyeti`
  f "1898-06-12" iken ic_not "f=1899-01-23 teyitli" diyor [ÇELİŞKİ]. Malolos noktasında 1942–45 Japon işgali yok, öteki 14 nokta
  işgalli [ÇELİŞKİ].
- Japon işgalinin bitişi 14 noktada 1945-09-02; Manila'da örgütlü direniş 1945-03-03'te bitti (Smith, *Triumph in the
  Philippines* XVI-4, arama özeti). **Düzeltme:** Manila 1945-03-03; öteki adalar kaynakla, bulunamazsa 1945-09-02 beyanlı.
- `filipin-commonwealth` f "1935-01-01" (`devletler.js:11016`) — amerikan-filipinleri t 1935-11-15 ile 10,5 ay örtüşme →
  f=1935-11-15 [ÇELİŞKİ].
- Colo (Jolo) `yerlesimler_asya.js:4304` 1915-03-22'ye dek sulu-sultanligi; İspanya 1876'dan, ABD 1899'dan garnizon (teyitsiz) [ÇELİŞKİ].

### 1.5 [HAYALET · TARİH-HATA] Pasifik: Japon mandası, Guam, Iwo Jima, Ryukyu
- `meiji-japonya` künyesi t "1947-05-03" (`devletler.js:5716`), ama Garapan (`yerlesimler_a78_okyanusya.js:126`), Kolonia
  (`:131`), Jaluit (`:137`), Koror (`yerlesimler_ek_pasifik_adalar.js:15`) onu 1947-07-18'e taşıyor (+76 gün HAYALET); üstelik
  1944–45'ten beri fiilen ABD Donanması idaresi. Tinian 1944-08-01'de abd'ye geçerken Saipan 1947'ye dek Japon [ÇELİŞKİ].
  **Düzeltme:** Garapan abd 1944-07-09'dan (NPS WAPA HRS, arama özeti: Saipan «declared … secure on July 9»); Kolonia, Jaluit,
  Koror abd 1945-09-02→1947-07-18 beyanlı.
- Garapan/Kolonia almanya→meiji-japonya 1914-10-01; atlasın kendi kaynağı (`kronoloji_sinir_nokta3.js:21`) Saipan 1914-10-14,
  Ponape 1914-10-07 → bu günler.
- **Guam** `yerlesimler_a78_okyanusya.js:120` Hagåtña: ispanya→abd 1898-06-21 — hiçbir kronoloji dosyasında madde yok [SESSİZ].
  Glass raporu (NHHC, açılamadı/arama özeti): resmî zilyetlik 21 Haziran 14.45; LoC 20 Haziran der [ÇELİŞKİ, atlas birincile
  uyuyor]. **Japon işgali yok** [EKSİK]: NPS *Battle of Guam*: 1941-12-10 teslim; «officially declared secure … August 10» 1944.
  **Düzeltme:** Hagåtña'ya `meiji-japonya` 1941-12-10→1944-08-10 + üç madde (1898-06-21, 1941-12-10, 1944-08-10).
- **Iwo Jima** `yerlesimler_asya.js:2706`: meiji-japonya→abd 1945-09-02; Morison XIV/5 (arama özeti): 26 Mart 1945 harekât
  tamam → 1945-03-26 + madde. Chichijima 1945-09-02 kalabilir.
- **Ryukyu** `yerlesimler_halef_1946.js:54-55` Hirara, Ishigaki 1945-04-01'de ryukyu-abd-idaresi. Kabine Sekreterliği
  (cas.go.jp senkaku02-01, okundu): «On September 7, 1945, by the signature of the Instrument of Surrender in the Ryukyu islands,
  the occupational administration … started over the Nansei Islands south of 30 degree latitude.» → Miyako/Yaeyama 1945-09-07
  (+ madde). Amami (1953-12-25 iadesi) için nokta yok [EKSİK].
- **Palau** Koror 1981-01-01'de `palau`; Marshall/FSM Compact günüyle (1986) geçiyor, anayasa günüyle değil [ÇELİŞKİ].
  Bildiri 6726 (arama özeti): Vesayet Palau için 1994-10-01'de sona erdi → Koror vesayet 1994-10-01'e dek; palau f=1994-10-01.

### 1.6 [ÇELİŞKİ] Antlaşma günü konvansiyonu tutarsız
- Guadalupe Hidalgo: yerleşimler (17 nokta) ve `devletler.js` (×3) **1848-02-02** (imza); `kronoloji_sinir_amerika.js:65`
  **1848-05-30** (onay teatisi). Avalon (okundu): «CONCLUDED … FEBRUARY 2, 1848 … RATIFICATIONS EXCHANGED AT QUERETARO, MAY 30,
  1848 … PROCLAIMED, JULY 4, 1848». Adams-Onís (1821-02-22) ve Gadsden (1854-06-30) onay teatisi; Oregon (1846-06-15) ve 1818
  Konvansiyonu (Pembina 1818-10-20) imza günü (teatiler 1846-07-17, 1819-01-30, teyitsiz).
- **Emre kararı:** tek konvansiyon seçilsin (öneri: yürürlük = onay teatisi; fiilî işgal ayrıca `isg:`); seçime göre Guadalupe,
  Oregon, Pembina taşınır. Not: 1846–47 fiilî işgaller (Santa Fe 1846-08-18, Kaliforniya) haritada yok.

### 1.7 [ÇELİŞKİ · EKSİK-DEVLET] Küba ve Porto Riko 1898–1909
- Küba 10 noktası 1898-12-10→1902-05-20 `abd` (ilhak gibi). Paris Küba'yı ilhak etmedi. LoC (okundu): «1 January 1899: Spanish
  forces left Cuba»; Office of the Historian *Cuba* (okundu): «On May 20, 1902, the United States relinquished its occupation
  authority». **Öneri:** `kuba-abd-askeri-idaresi` künyesi (f 1899-01-01, t 1902-05-20, harita abd) — Ryukyu/USAMGIK emsali.
  Santiago de Cuba için 1898-07-17 teslimi (teyitsiz). İkinci işgal 1906-09-29→1909-01-28 atlasta hiç yok [EKSİK-DEVLET]
  (NARA RG 199, arama özeti). `kuba-cumhuriyeti` f 1902-05-19 vs yerleşim 1902-05-20 → 05-20.
- Porto Riko `yerlesimler_amerika.js:1138` San Germán, `:1144` San Juan: ispanya→abd 1898-12-10. NARA Puerto Rican records
  rehberi ve LoC *Today in History Oct 18* (arama özeti): San Juan 1898-10-18'de ABD'ye teslim → **1898-10-18** + madde.
  `puerto-riko` f 1899-04-11 teyitli (LoC: «11 April 1899: The Treaty of Paris was proclaimed»).

### 1.8 [EKSİK-DEVLET] Japonya'nın Müttefik işgali 1945-09-02 → 1952-04-28 yok
- `almanya-muttefik-isgali` ve `abd-ordu-askeri-hukumeti-kore` var; Japonya karşılığı yok. Office of the Historian
  *Japan reconstruction* (okundu): SCAP Eylül 1945. **Öneri:** `japonya-muttefik-isgali` künyesi (f 1945-09-02, t 1952-04-28,
  boya meiji-japonya/japonya-devleti — ayrı boya Emre kararı) + iki uç maddesi.

---

## 2. Öteki bulgular — 1607–1867

| # | Kimlik | Atlas | Kaynak | Sınıf / Düzeltme |
|---|---|---|---|---|
| 2.1 | `yerlesimler_kamerika.js:1442` Mound Key | ingiltere → **abd 1783-09-03** | Florida 1783'te İspanya'ya döndü; Doğu Florida bayrak devri 1784-07-12 (Florida DOS, arama özeti) | TARİH-HATA: ingiltere 1763-02-10 → ispanya 1784-07-12 → abd 1821-07-10 |
| 2.2 | St. Augustine `yerlesimler_amerika.js:968`, Mission San Luis `kamerika:1399` | ingiltere→ispanya 1783-09-03 | fiilî devir 1784-07-12 | konvansiyon (1.6) ile; ya da beyan |
| 2.3 | Fort Ross `kamerika:1187` | rusya → **abd 1867-10-18** | NPS / CA State Parks (arama özeti): Sutter'a satış Aralık 1841, Ruslar Ocak 1842 çekildi | TARİH-HATA: rusya →1841-12 (gün teyitsiz) → meksika → abd 1848 |
| 2.4 | Memphis `kamerika:1290` | cikasav→abd 1832-10-20 (Pontotoc) | Tennessee Encyclopedia (arama özeti): Tuscaloosa/Jackson Purchase 1818-10-19 | TARİH-HATA → 1818-10-19 |
| 2.5 | Saginaw `kamerika:1039` | ojibwe→abd **1850-09-07** (Kanada Robinson-Superior günü) | Kappler II s.185 / 7 Stat. 203 (arama özeti): 1819-09-24 | TARİH-HATA → 1819-09-24 |
| 2.6 | Chota `amerika:878`, Kituwa `kamerika:1279` | cherokee→abd 1791-07-02 (Holston, sınır antlaşması) | Calhoun antlaşması 1819-02-27 (Kappler, arama özeti) | TARİH-HATA: Chota 1819-02-27; Kituwa teyitsiz |
| 2.7 | Ocmulgee `kamerika:1347` | creek→abd 1832-03-24 | 1805-11-14 Washington antlaşması (teyitsiz) | olası TARİH-HATA |
| 2.8 | Saukenuk `kamerika:1088` | sauk→abd 1832-09-21 | 1804-11-03 St. Louis antlaşması, 1831 tahliye (teyitsiz) | olası TARİH-HATA |
| 2.9 | Etowah `kamerika:1328` | creek → **ingiltere 1733-06-09** | KB Georgia 1835 New Echota'ya dek Cherokee/Creek | TARİH-HATA/HAYALET (Georgia beratı toprak devri değil) |
| 2.10 | Prairie du Chien `kamerika:1047` | **fransa** 1781-1783 | Fransa 1763'ten sonra egemen değil; İngilizler 1796'ya dek tuttu | HAYALET |
| 2.11 | Sault Ste. Marie, Grand Portage, La Baye, Chequamegon, Onondaga + 4 İrokua kasabası | abd 1783-09-03 | Detroit/Michilimackinac 1796'ya taşınmışken bunlar 1783'te | ÇELİŞKİ (Jay karakolları); İrokua devirleri 1784 Fort Stanwix / 1797 Big Tree; haudenosaunee→ingiltere 1777-01-01 kaynaksız |
| 2.12 | Natchez `amerika:856` | ispanya→abd 1798-04-07 (Mississippi Bölgesi kuruluşu) | Rowland, *Encyclopedia of Mississippi History* (1907), MS SOS (arama özeti): İspanyollar 1798-03-30 çekildi | TARİH-HATA → 1798-03-30 |
| 2.13 | Detroit, Michilimackinac, Prairie du Chien | 1796 sonrası kesintisiz abd | 1812 Savaşı İngiliz işgalleri: Detroit 1812-08-16→1813-09-29, Mackinac 1812-07-17→1815-07-18 (teyitsiz) | EKSİK `isg:` + madde |
| 2.14 | New Amsterdam `amerika:917` | 1664→1776 ingiltere | Hollanda geri alışı 1673-08-09 (N.S.) → 1674-11-10 devir (arama özeti) | EKSİK dönem + madde |
| 2.15 | Pensacola `amerika:978` | ispanya 1781-05-08 | teslim yaygın olarak 1781-05-10; 1719-22 Fransız işgali yok | teyitsiz |
| 2.16 | Oregon: Fort Colvile, Spokane House, Fort Nez Percés, Fort Boise, Fort Hall (`kamerika:802,852,945,1028,1051`) | 1846'ya dek `__BOSLUK__` beyansız | Fort Vancouver/Astoria'da 1818 md. III beyanı VAR | beyan bu beşe de yazılsın; Wayám (`:956`) 1855'e dek sahaptin — komşularıyla ÇELİŞKİ |
| 2.17 | Uncompahgre `kamerika:1190` | ute→abd 1880-01-01 | künye ute t 1880-06-15 (Kongre kabul yasası; anlaşma 1880-03-06) | ÇELİŞKİ → 1880-06-15 |
| 2.18 | Künye t ↔ yerleşim ucu kopuk (künye düzeltilmiş, nokta izlememiş) | navaho 1868-08-12 / Tsegi 1868-06-01 · savni, miami 1795-12-02 / 1795-08-03 · sauk 1833-02-13 / 1832-09-21 · sosoni 1869-02-24 / 4 nokta 1868-07-03 · pavni 1858-05-26 / 1857-09-24 · klamath 1870-02-17 / 1864-01-01 · sahaptin 1859-04-18 / 1855-01-01 · ponka 1859-04-11 / 1858-01-01 · powhatan 1646-10-05 / Werowocomoco 1646-10-01 | — | ÇELİŞKİ: yerleşim ucu, künye ucu, madde aynı güne |
| 2.19 | Devils Lake `kamerika:829` | **lakota**→abd 1890-12-29 (Wounded Knee) | Mni Wakan Sisseton-Wahpeton Dakota toprağı; 1867-02-19 antlaşması rezervasyonu kurdu (Kappler II, arama özeti) | TARİH-HATA + yanlış devlet; `dakota` künyesi yok |
| 2.20 | Comanchería, Klamath, Mohave, Payut, Yavapai, Meskalero, Wiçita, Sahaptin | YYYY-01-01, kaynak "bulunamadı" | Comanchería: Quanah teslimi 1875-06-02 (arama özeti); Klamath 1864-10-14 (teyitsiz); Walla Walla 1855-06-09 | merdiven ⑧ (Kappler) yürünmemiş; komanci künye t de 1875-06-02 |
| 2.21 | Knife River, On-A-Slant, Crow Agency | abd 1851-09-17 (Fort Laramie) | antlaşma toprak devri değil, Senato onaylamadı (NPS; ince dosyasının kendi alıntısı) | TARİH-HATA (anlam); devirler 1866-1886 antlaşmaları |
| 2.22 | Tsegi (Canyon de Chelly) | navaho→abd 1868 | Bosque Redondo antlaşması Navajo'yu geri gönderdi | anlam ters; beyan |
| 2.23 | Ponca köyleri `kamerika:1243` (36.7N Oklahoma) | 1281–1858 ponka | Ponca buraya 1877-78'de sürüldü | HAYALET konum → Niobrara (Nebraska) |
| 2.24 | Fort Yukon | ingiliz-kuzey-amerika 1847–1867 | HBC karakolu Rus toprağında | SINIR → rusya |

**Takvim [TAKVİM]** (`yerlesimler_amerika.js:931-946`, hiçbirinde ic_not takvim beyanı yok):
Jamestown 1607-05-23 (Gregoryen; üstteki yorum 05-13 Jülyen) · Plymouth 1620-12-21 (Gregoryen) · **Boston 1630-09-07 (Jülyen →
Gregoryen 1630-09-17)** · **Philadelphia 1682-10-27 (Jülyen → 1682-11-06; kuruluşla eşlemesi tartışmalı)** · **Charleston
1670-04-15 (Jülyen olası)** · Savannah 1733-02-12 (Gregoryen). Aynı dosyada iki takvim karışık; kural (1582-10-15 sonrası
Gregoryen) gereği Boston/Philadelphia/Charleston çevrilsin, altısına iki günlü ic_not. `on-uc-koloni` künye f 1607-01-01 ve
1607/1620 maddeleri YYYY-01-01 (Britannica Kids) — gün kaynakta var [TARİH/KAYNAKSIZ].

**Kronoloji örneklemi (52 madde, 1607–1867):** k2 dosyasının 31 maddesi ve cok_kuzey'in 28 maddesi standart günlerle uyumlu.
Sorunlar: `ince` dosyası New York Antlaşması 1790-01-01 (gün 1790-08-07), Indian Springs 1825-01-01 (1825-02-12),
Sycamore Shoals 1775-01-01 (1775-03-17) — "kaynak yıl verir" denip merdiven yürünmemiş. `ispanyol-florida` 1565-01-01 maddesi /
St. Augustine 1565-09-08 [ÇELİŞKİ]; 1783 iade ve 1821-07-10/07-17 devir maddeleri yok [SESSİZ]. Aynı olay çok yerde: Fallen
Timbers ×3, Fort Laramie 1851 ×4, Guadalupe (1.6), Fontainebleau (1.3).

---

## 3. Öteki bulgular — 1867–bugün ve `abd` künyesi

- **`abd` künyesi** (`devletler.js:6395-6409`) yalnız 9 madde; hepsinin odak_yer'i Philadelphia (Washington D.C. noktası
  `yerlesimler_kamerika.js:1511`'de var); 1607–1867 maddeleri kaynaksız [KAYNAKSIZ]. 1959 eyaletlikleri `tur:"toprak-kazanc"` →
  `siyaset` (toprak 1867/1898'den beri ABD). Alaska kaynağı EBSCO → NARA Bildiri 3269; Hawaii → Bildiri 3309 (presidency.ucsb.edu).
  1898-04-25 "nüfuz alanına girdi" belirsiz. **Eksik ana maddeler [EKSİK-MADDE]:** Louisiana 1803-12-20, Florida 1821, Teksas
  1845-12-29, Oregon 1846, Guadalupe 1848, Gadsden 1854, Alaska 1867-10-18, Hawaii 1898-08-12, Guam 1898-06-21, Manila
  1898-08-13, Porto Riko 1898-10-18, Paris yürürlüğü 1899-04-11, Samoa 1900-04-17, Kanal Bölgesi 1904-02-26, Virjin Adaları
  1917-03-31, Pearl Harbor 1941-12-07, Japonya teslimi 1945-09-02.
- **Doğrulanan (sorun yok):** Alaska 1867-10-18 (Office of the Historian, okundu: «formally transferred … on October 18, 1867») ·
  Hawaii 1898-08-12 (OH *Hawaii*, okundu; LoC 8 Temmuz "acquired" der) · Kanal Bölgesi 1904-02-26 → 1979-10-01 (OH okundu; kanal
  1999-12-31 `devletler.js:9043`) · Teksas 1845-12-29 (künyede fiilî devir 1846-02-19 beyanlı) · Gadsden 1854-06-30 · Tinian
  1944-08-01 · Marshall 1986-10-21 · FSM ve Kuzey Marianalar 1986-11-03 · Ryukyu iadesi 1972-05-15 · USAMGIK 1945-09-09→1948-08-15 ·
  Samoa (Tutuila) 1900-04-17 · Detroit 1796-07-11 · Kaskaskia 1778-07-04 · Vincennes 1779-02-25.
  `panama-kanali-bolgesi` künyesinde `harita:` yok ama `arac/renkler.py:4755`te kendi BOYALAR anahtarı var — hata değil.
- **Virjin Adaları** 1917-03-31: LoC + Danimarka Ulusal Müzesi aynı; NARA RG 55 28 Mart der → ic_not beyanı [ÇELİŞKİ küçük].
- **Eksik noktalar:** Manu'a (1904-07-14 devri), Wake, Midway, Amami için yerleşim noktası yok [EKSİK].
- **Alaska Rus tarafı günü** (Jülyen + tarih çizgisi) ic_not'ta beyan edilebilir [TAKVİM].

---

## 4. Eksik siyasal yapılar [EKSİK-DEVLET]
Vermont Cumhuriyeti 1777-01-15→1791-03-04 · Franklin Eyaleti 1784–1788 · Batı Florida Cumhuriyeti 1810-09-26→1810-12-10 ·
Kaliforniya (Ayı Bayrağı) Cumhuriyeti 1846-06-14→07-09 · Deseret 1849–1851 · Dakota (Santee/Sisseton), Cheyenne, Arapaho,
Kiowa, Osage künyeleri · Küba ABD askerî idareleri (1899–1902, 1906–1909) · Japonya Müttefik işgali 1945–52. (Günler teyitsiz.)
Seminole künyesi var (1775–1858) ama zincirde Seminole noktası görülmedi (ölçülmedi).

## 5. Yerli toprakların gösterimi
Yerli→abd kırılmalarının hemen hepsinin kaynak alanı "bulunamadı" (yalnız "dayanak: HNAI"). Devir günü için tutarlı bir
konvansiyon (cession antlaşması · rezervasyon · askerî teslim) seçilmemiş ve beyan edilmemiş → **beyansız yaklaşıklık**.
Öneri (Emre kararı): konvansiyon = Kappler'deki cession antlaşmasının ilan/yürürlük günü; askerî teslim ayrı madde.
Fort Laramie 1851 gibi devir olmayan antlaşmalar kırılma günü olamaz.

---

## 6. Sayılar
- Künye: **38** (kıta 14 + deniz aşırı/Pasifik 24) — f/t ve kronoloji maddeleri; 10 künyede t ↔ yerleşim hizası ölçüldü.
- Yerleşim zinciri: **≈200** çıkarıldı (`abd_zincir.txt`, 418 satır); ≈120'si tek tek incelendi.
- Kırılma günü: **119**; her biri için ±30 gün madde taraması.
- Kronoloji maddesi: **≈180** okundu (52 + ≈130).
- Bulgu: **≈60** (1. bölüm 8 ağır başlık, 2. bölüm 24 satır + takvim + kronoloji, 3–5. bölümler).
- **Ölçülemedi:** `denetle.py` (Değişmez 1/2/3/8) · üretilmiş harita · Konfedere ayrılış günleri, Ocmulgee 1805, Saukenuk 1804,
  Pensacola 1781-05-10, Boston Jülyen günü, Gálvez 1780 günü, 1812 işgal günleri, Filipin şehirlerinin (Manila, Iloilo, Cebu
  dışı) 1898–99 ve 1945 günleri, Chichijima 1945-09-03, Ogasawara 1968-06-26, Koror 1914 günü, Japonya işgali bitişi
  1952-04-28 (açılmadı) · Handbook of Texas, Kappler OSU, Tennessee Encyclopedia tam metinleri (yalnız arama özeti) ·
  history.navy.mil (sertifika hatası) · 30 Stat. 1754 PDF metni · Cambridge History kullanılmadı.

## 7. Emre'ye kararlar
1. Antlaşma günü konvansiyonu (imza / onay teatisi / ilan) — Guadalupe, Oregon, 1818 Konvansiyonu taşınır mı?
2. El Paso del Norte / Presidio: koordinatı Meksika yakasına taşı mı, ad değiştir mi?
3. Konfedere Devletler: 11 eyalet merkezine dönem yazılsın mı (harita iç savaşı gösterir), SC 1860-12-20…1861-02-08 aralığı?
4. Küba (1899–1902, 1906–09) ve Japonya (1945–52) işgalleri için ayrı künye (ayrı boya mı, aynı boya mı)?
5. Yerli toprak devri konvansiyonu (bölüm 5).
