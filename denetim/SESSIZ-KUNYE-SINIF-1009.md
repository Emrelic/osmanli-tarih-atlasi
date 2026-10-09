# SESSIZ-KUNYE-SINIF-1009 — "hiçbir yerde" kovasındaki 11 künyenin sınıflaması

Bu rapor yalnız ölçüm ve sınıflama içeriyor. Hüküm ve düzeltme önerisi yok. Web'e çıkılmadı.
Taban `origin/main` **79115d23**, okuma `C:\atlas-umit-sessiz` worktree'sinde yapıldı.

## 0. Kova sayımı yeniden ölçüldü
`py arac/durum_tablosu.py` komut satırından koşturuldu (`olc()` redirect altında çağrılmadı).
Satırı şöyle: 🔴 **7** delik · 🟡 **11** hiçbir yerde · 🟢 5 beyanlı · ⚪ 125 yalnız başka katmanda · ⚪ 14 tâbi.
⇒ Görevdeki 11 sayısı tutuyor. Ad listesini araç basmıyor. Bu yüzden verilen 11 adın her biri
ayrı ayrı tarandı (§2): hiçbiri yerleşim girdisinde ya da katman evreninde geçmiyor. Hiçbirinde
`harita:` yok, `boya_gerekli` yok, `BOYALAR`da da yoklar. Hiçbir künye bunlara `harita:` ile işaret etmiyor.

## 1. Tablo

| id | f → t | bölge | ekleyen commit / iz | kullanım taraması | SINIF | gerekçe (gözlem) |
|---|---|---|---|---|---|---|
| aleut | 1281-01-01 → 1784-08-14 | kuzey-amerika | `565ae43c` (03.09, 146 künye, DUNYA-KAMERIKA-0903) | yalnız `devletler.js` ve `paket_05.js` kopyası | **NOKTASIZ** | Aleut kutusunda (50-57K, 160-180B) tek nokta var: Unalaska. Onun da `kur:1787-01-01`, s: 1787 rusya → 1867 abd. Künye penceresinde (1784'e kadar) bölgede nokta yok. Öksüz kalışın izi M-2519 (DUNYA-KAMERIKA): Unalaska önce `bolge:Aleut` yazılmış, sonra Rus karakolu olduğu için çevrilmiş ve künye öksüz kalmış. Aynı mesajda Nikolski (Umnak) noktası önerilmiş ama yazılmamış. Komşu Alaska Yarımadası noktaları (Katmai, Chignik) 1281-1784 `alutiiq` taşıyor. |
| arua | 1281-01-01 → 1836-01-01 | guney-amerika | `6ce7c5ec` (03.09, GAMERIKA 4 künye) | yalnız devletler + paket_05 | **NOKTASIZ** | Marajó kutusunda 4 nokta var, hepsi kur'lu: Belém 1616, Cametá 1635, Macapá 1758, Chaves (Marajó) 1758. 1281-1616 arasında bölgede nokta yok. Marajó adasının kendisinde 1758'e kadar nokta yok. 1758-1836 arasında Chaves `portekiz-brezilyasi`, 1822'den sonra `brezilya-imparatorlugu`. Künye özeti 1793 sürgününü anlatıyor, yani adada sonraki pay başka kimlikle boyanıyor. |
| charrua | 1281-01-01 → 1831-01-01 | guney-amerika | `6ce7c5ec` | yalnız devletler + paket_05 | **beş kovanın hiçbirine tam oturmuyor → BEYANLI BOŞLUK** (en yakını NOKTASIZ) | Uruguay iç bölgesinde nokta VAR: `Beyan G31.5 B56.5`, `kasitli_bosluk:true` ve `bos:"kabile"`. 1281-1828 arasını Charrúa/Minuan diye adıyla anan bir BEYAN kapsıyor ve kimlik bilerek yazılmamış. Kayıtta açık not var: "mapuche BURAYA YAZILMAZ". Kıyı noktaları (Colonia 1680, Montevideo 1726, Minas 1783) `ispanya`/`portekiz` ile boyanıyor. Yani bağlanmak için nokta değil, beyanı kimliğe çevirme kararı gerekiyor. |
| crnojevic-zetasi | 1482-01-01 → 1499-01-01 | balkanlar | `c37ec026` (07.09). Kaynak YAMA-KUNYE-VASSAL-0906 (M-3080): v: etiketleri için açılan 10 polity'den biri | yalnız devletler + paket_05 | **BAŞKA KİMLİKLE BOYANIYOR** — `zeta` (v:kid, tâbi) | Cetinje'de v: 1482-1499 `k:"Crnojević Zetası (Osmanlı tâbii)"` var, ama `kid:"zeta"`. Künye `zeta` 1356-1514 aralığında ve bu künyeyi tümüyle kapsıyor. D205 ② (aynı polity) görünümünde. `ARAC-KUNYE-DUNYA-0929.py:569` ve `ARAC-KUNYE-BIRLESTIR-0929-UYGULA.py:180` bunu zaten "mükerrer künye — birleştirme kararı" diye kayda geçirmiş. |
| hatay-devleti | 1938-09-02 → 1939-06-23 | suriye-filistin | `52222fa3` (01.10, KOŞU 19 girdisi). Künye KUNYE-1945-0930'da açıldı (M-5557) | devletler + paket_05. Ek olarak `data/yer_yama_1923_1945.js`te 3 nokta (Antakya vb.) `d:"hatay-devleti"` taşıyor. O dosya **KARANTİNADA** (`36186769`): `GIRDI_DOSYALARI`nda yok, `index.html`de yok | **UFUK DIŞI** | Pencere tümüyle 1923-10-29 sonrasında. Yerleşim ufku 1923'te bitiyor (Antakya s: 1920 → 1923 `suriye-lubnan-mandasi`). Bağlanacağı tek yer, aktive edilmeyen Z5 yaması. |
| kibris-ingiliz | 1878-06-04 → 1914-11-05 | anadolu | `72f97998` (28.07, ilk 64 komşu dizini). Emekli `data/kimlikler.js`te de kayıtlı (canlı değil) | devletler + paket_05 + emekli kimlikler.js | **BAŞKA KİMLİKLE BOYANIYOR** — `ingiltere` (s:) | Kıbrıs'taki 6 noktanın 6'sı da 1878-06-04'ten itibaren `s:ingiltere`, Osmanlı `d:` de o gün bitiyor. Künye `tur:"gecici-isgal"`. M-4636 (SESSIZ-BORC-2) KARAR 6 açık duruyor: (A) `s:kibris-ingiliz` 1878-1914 ya da (B) `d:` + `isg:ingiltere`. D205 açısından metropol kimliği alt idareyi boyuyor; kol/alt yapı görünümü. |
| luksemburg-hollanda-birligi | 1815-06-09 → 1890-11-23 | bati-avrupa | `63d064a1` (17.09, KUNYE-TARAF, G4-G7 kolu, D3-AVRUPA-BATI M-4167/M-4271) | devletler + paket_05. Künye-içi `kronoloji:[]` **boş** | **BAŞKA KİMLİKLE BOYANIYOR** — `hollanda` (s:). İkincil iz: KRONOLOJİ BEKLİYOR | Lüksemburg noktasında s: `hollanda` 1815-06-09 → 1890-11-23 var, künye penceresiyle günü gününe aynı. Ardıl `luksemburg` 1890-11-23'ten başlıyor. Arlon ve Bastogne 1839'dan sonra `belcika`. D205 açısından şahsî birlik ortağı (hollanda) boyuyor. Ayrıca `DAGITIM-1004.md:46` ve M-5555 bu künyeyi "sitede HİÇ maddesi olmayan 3 künyeden biri" diye ölçmüş. |
| norvec-isvec-birligi | 1814-11-04 → 1905-06-07 | kuzey-avrupa | `63d064a1` (KUNYE-TARAF, G4-G7) | yalnız devletler + paket_05 | **BAŞKA KİMLİKLE BOYANIYOR** — `isvec` (s:) | Oslo ve Bergen (ve öteki Norveç noktaları) s: `isvec` 1814-01-14 → 1905-06-07. Ardıl `norvec` 1905'ten, öncül `danimarka`. Veri ile künye arasında başlangıç farkı var: veri Kiel'i (14 Ocak), künye Storting'i (4 Kasım) alıyor, yani yaklaşık 10 ay. D205 açısından birlik ortağı boyuyor, aynı polity / ara yapı görünümünde. |
| ranquel | 1281-01-01 → 1883-01-01 | guney-amerika | `6ce7c5ec` | yalnız devletler + paket_05 | **BAŞKA KİMLİKLE BOYANIYOR** — `mapuche-araukanya` (s:) | Pampa batısında 5 beyan noktası var (`kasitli_bosluk`, `bos:"kabile"`). 1281-1725 sahipsiz BEYAN, 1725-1883 `s:mapuche-araukanya`, 1883'ten sonra arjantin. 1883 bitişi bu künyenin `t:`siyle aynı. Künye özeti Ranquel'i "Araukanya kökenli boyların en güçlüsü" diye tanımlıyor. D205 açısından kol/alt yapı görünümünde. |
| sabah-emirligi | 1795-04-01 → 1914-11-22 | arabistan | `c37ec026` (YAMA-KUNYE-VASSAL-0906, M-3080) | yalnız devletler + paket_05 | **BAŞKA KİMLİKLE BOYANIYOR** — `kuveyt` (v:kid, tâbi) | Kuveyt noktasında v: 1795-1871 `k:"Sabah emirliği (Osmanlı himayesinde)"` ve 1871-1914 "kazâsı" var, ikisinde de `kid:"kuveyt"`. Künye `kuveyt` 1752'den başlıyor. Künyenin kendi `kaynak:` alanı f/t'nin bu iki v: döneminden devralındığını söylüyor. ARAC-KUNYE-DUNYA-0929 bunu "mükerrer — aynı polity iki künye" diye kaydetmiş. D205 ② görünümünde. |
| sani-emirligi | 1871-09-20 → 1913-07-29 | arabistan | `c37ec026` (YAMA-KUNYE-VASSAL-0906) | yalnız devletler + paket_05 | **BAŞKA KİMLİKLE BOYANIYOR** — `katar` (v:kid, tâbi) | Doha ve Katar iç dolgu noktalarında v: 1871-09-20 → 1913-07-29 `k:"Sânî emirliği (Osmanlı kazâsı)"` var, `kid:"katar"`. Künye `katar` 1868'den başlıyor. Künye f/t günleri bu v: dönemiyle aynı ("VERİDEN DEVRALINDI"). ARAC-KUNYE-DUNYA-0929 bunu "mükerrer" diye kaydetmiş. D205 ② görünümünde. |

## 2. Kullanım taraması nasıl yapıldı
- **Yerleşim:** `girdi.yukle()` ile 93 dosya ve 4300 nokta okundu. Kutu × tarih sondasıyla `s:`/`v:kid`/`isg:`/`d:` alanlarına bakıldı. 11 kimliğin hiçbiri bir sahip ya da kid olarak geçmiyor.
- **Metin:** `data/`, `js/` ve `arac/` altındaki bütün `.js`, `.py` ve `.json` dosyalarında tırnaklı kimlik (`"id"` / `'id'`) arandı. Her kimlik yalnız `devletler.js`teki kendi künye satırında ve `paket_05.js` kopyasında çıktı. İstisnalar: `kibris-ingiliz` emekli `kimlikler.js`te (index.html'de yok) geçiyor, `hatay-devleti` karantinadaki `yer_yama_1923_1945.js`te geçiyor.
- Kronoloji, savaş, kişi ve sınır alanlarında (`durum_tablosu.katman_evreni` alanları) eşleşme 0. Bunu `durum_tablosu`nun "hiçbir yerde" sayısı da doğruluyor (11).

## 3. Kova sayıları
| Kova | Sayı | Kimlikler |
|---|---|---|
| UFUK DIŞI | 1 | hatay-devleti |
| NOKTASIZ | 2 | aleut · arua |
| BAŞKA KİMLİKLE BOYANIYOR | 7 | crnojevic-zetasi→zeta · sabah-emirligi→kuveyt · sani-emirligi→katar (bu üçü v:kid, tâbi, "mükerrer" diye zaten kayıtlı) · kibris-ingiliz→ingiltere · luksemburg-hollanda-birligi→hollanda · norvec-isvec-birligi→isvec · ranquel→mapuche-araukanya (bu dördü s:) |
| KRONOLOJİ BEKLİYOR | 0 birincil (1 ikincil iz: luksemburg-hollanda-birligi, künye-içi kronoloji boş) | — |
| bulunamadı | 0 | — |
| kovaya oturmayan | 1 | charrua (BEYANLI BOŞLUK: nokta var, kabile beyanı adıyla Charrúa diyor, kimlik bilerek yazılmamış) |

Toplam 11.

## 4. Ölçemediklerim
- **Ölçülemedi: motor çıktısında noktasız bölgeyi hangi peteğin yuttuğu** (aleut 1281-1784 Aleut adaları, arua 1281-1758 Marajó). `devletler_harita.js` ve `donemler.js` açılmadı. Sondadaki "nokta yok" bilgisi girdiye dayanıyor, haritanın ne boyadığına değil (§2: noktasız bölge en yakın peteğe emilir).
- **Ölçülemedi: `durum_tablosu`nun 11'lik ad listesi.** Araç adları basmıyor, `olc()` da kasıtlı olarak içe aktarılıp çağrılmadı. Sayının (11) ve her adın tek tek kullanılmadığının eşleştiği gösterildi. Listenin birebir aynı olduğu dolaylı olarak doğrulandı, doğrudan değil.
- **Kutu sondası kabadır.** Bölge kutuları elle seçildi. Kutu dışında kalıp aynı polity'ye ait olabilecek noktalar taranmadı. Bu özellikle norvec-isvec için geçerli: kutuya Rusya/Finlandiya noktaları da düştü (31 adet `rusya`), Norveç noktaları ayrı okundu.
- G17 (GEMINI, M-5498) bu soruyu 30 Eylül'de sormuş. `gemini/` altında yalnız görev dosyası (`G16-G17-GOREV.txt`) var, çıktı bulunamadı.

YENİ DOSYALAR: `C:\atlas-umit\denetim\SESSIZ-KUNYE-SINIF-1009.md` (yalnız bu dosya). Commit yok.
