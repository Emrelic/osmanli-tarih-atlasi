# KAPSAM ÖLÇÜMÜ — 14 Kasım 2026 (salt-okunur ölçüm)

Ağaç: worktree `kasa-1113-koordinasyon` (HEAD 54e8e1782). Ölçüm araçları scratchpad'de; depoya yazılan tek dosya budur.

## Yöntem ve sınırlar (önce oku)
- Yerleşim: `girdi.yukle()` ile **5636** nokta (GIRDI_DOSYALARI). Künye: `girdi.oku_devletler()` ile **2268** künye. BOYALAR: **2246** anahtar.
- Madde: `data/olaylar*.js` + `data/kronoloji*.js` (295 dosya) node `vm` ile tarayıcı gibi yüklendi: **18734** madde (`t` alanı olan). `taraflar:` dolu **9825**, `yer_kon:` dolu **1232**, `yer_id:` dolu **12859** kayıt.
- Bir künyenin "madde sayısı" = (a) `taraflar:` içinde geçen madde + (b) `yer_id`'si o künyeye ait yerleşimin o günkü `s:` sahibi olan madde, **ayrı sütun** (c) `devletler.js` künye içi `kronoloji:[…]` listesi (künye başına 2-15 öğe; hemen her künyede var, bu yüzden "kronoloji sütunu 0 olan künye yok" bulgusu tek başına anlam taşımaz — (a)+(b) sütununa bak).
- Yerleşimin bölgesi: **koordinat kutusu**, çakışmada öncelik sırası: Çinhindi > Maritim > Moğolistan > Hint > Orta Asya > Çin. Çin kutusundan Kore/Japonya parçası (lon≥124,2 ve lat≤43; 51 nokta) çıkarıldı. Alman kutusu [5,5–15,5E; 47–55N], İtalya kutusu [6,5–18,6E; 36,6–46,7N] (kutular benim seçimim; sizin verdiğiniz yalnız ilk 5'i).
- Künyenin bölgesi: sahibi olduğu yerleşimlerin **çoğunluk bölgesi** (yoksa `bolge:` alanı). Bu yüzden Moğol İmparatorluğu / Yuan gibi çok bölgeli künyeler tek bölgeye düşer — özellikle Moğolistan sayıları **düşük ölçülmüş olabilir** (Karakurum maddeleri `moğol-imparatorlugu`'nda, o da Çin/Orta Asya'ya yazıldı).
- Yerleşim "yüzyılda var" = o yüzyılla kesişen, `__BOSLUK__` olmayan en az bir `s:` penceresi. `s:`'siz noktalar (yalnız `d:`/`v:` ile Osmanlı) sayılmaz.
- Ölçülmedi: harita çıktısı (petek koşusu) — bu rapor **veri** kapsamıdır, boyanan haritayı değil. Maddenin kaynak kalitesi ölçülmedi.

## Ortak bulgu: 1281 çıtası
Her bölgede yerleşim sayısı 1200'lü yüzyılda 3-4 kat sıçrar (örn. Çinhindi 30→94, Maritim 12→91, Çin 30→81, Orta Asya 21→94). Atlas çekirdeği 1281-1923; **1281 öncesi bölgesel kapsam ince**, 1281 sonrası görece düzgün. Bu rapordaki "KISMEN" hükümlerinin ana kaynağı budur.

## Tablo 1 — Yerleşim (kutu içi, öncelikli bölge)
| Bölge | Yerleşim | s:'siz | min f | max t | 1000s | 1100s | 1200s | 1300s | 1400s | 1500s | 1600s | 1700s | 1800s | 1900s |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 Çinhindi | 126 | 9 | -1999 | 2000 | 30 | 30 | 94 | 104 | 105 | 105 | 106 | 109 | 111 | 114 |
| 2 Maritim GD Asya | 179 | 22 | 500 | 2000 | 12 | 12 | 91 | 98 | 103 | 112 | 117 | 121 | 147 | 157 |
| 3 Hint alt kıtası | 248 | 35 | -5049 | 2000 | 39 | 42 | 137 | 136 | 139 | 150 | 159 | 175 | 179 | 183 |
| 4 Çin (Kore/Japonya hariç) | 168 | 8 | -6999 | 2000 | 29 | 30 | 81 | 84 | 86 | 88 | 108 | 116 | 125 | 128 |
| 5a Orta Asya | 147 | 15 | -6098 | 2000 | 20 | 21 | 94 | 93 | 93 | 95 | 105 | 114 | 124 | 125 |
| 5b Moğolistan | 40 | 8 | 520 | 2000 | 2 | 2 | 17 | 17 | 17 | 17 | 23 | 29 | 29 | 30 |
| 6 Alman kutusu | 115 | 13 | -49 | 2000 | 34 | 37 | 88 | 83 | 83 | 84 | 84 | 85 | 85 | 91 |
| 7 İtalya kutusu | 238 | 22 | -5331 | 2000 | 51 | 62 | 151 | 153 | 158 | 148 | 129 | 134 | 146 | 175 |

(Yüzyıl sütunu = "o yüzyılda penceresi olan yerleşim". 500-900'ler ve 1900'ler ayrıntısı betikte; Çinhindi 500s 18, Maritim 500s 3, Çin 500s 6, Moğolistan 700-1100 arası 1-2.)

## Tablo 2 — Künye ve madde (künyeler: yerleşim çoğunluk bölgesi; 1 ve 5b ve 6-7 için ilgili `bolge:`)
| Bölge | Künye | Yerleşimli künye | Yerleşimsiz künye | (a)+(b) madde bağı olan | Yalnız künye-içi kronoloji olan (bağ yok) | Toplam madde (a+b+c) | Renksiz künye |
|---|---|---|---|---|---|---|---|
| 1 Çinhindi | 58 | 58 | 0 | 55 | 3 | 695 | 0 |
| 2 Maritim | 69 | 69 | 0 | 59 | 10 | 710 | 0 |
| 3 Hint | 185 | 158 | 27 | 172 | 13 | 2423 | 0 |
| 4 Çin (+38 `dogu-asya` bolge'li yerleşimsiz künye) | 135 (+38) | 135 | 27* | 143/173 | 30 | 2073 | 0 |
| 5a Orta Asya | 77 | 55 | 22 | 70 | 7 | 1372 | 0 |
| 5b Moğolistan | 13 | 13 | 0 | 13 | 0 | 171 | 0 |
| 6 Alman (`bolge=orta-avrupa`, tüm tarih) | 92 | 62 | 30 | — (900-1806 alt kümesi aşağıda) | — | 1852 | 0 |
| 7 İtalya (`bolge=italya`, tüm tarih) | 119 | 94 | 25 | — | — | 2053 | 0 |

(*Çin'de "yerleşimsiz" 27 = çoğunluk kuralı dışında kalan künyeler; 38 künye yerleşimsiz olup `dogu-asya`'dan Çin'e atandı.)

**(c) Renk:** künye `harita:` anahtarı (yoksa `id`) BOYALAR'da olmayan künye = **0** (bütün 2268 için). Not: salt `id` ile BOYALAR'a bakılırsa 52 künye eşleşmez — bunlar `harita:` ile başka renk anahtarına bağlı; yani gerçek renk boşluğu 0.

**Künyesi olup yerleşimi VE (a)+(b) maddesi olmayan:** Çinhindi 0, Maritim 0, Hint (butan, fransiz-hindistani, danimarka-hindistani, indo-grek, koch-bihar vb. 13 "bağsız" künyeden 5'i yerleşimsiz de), Çin (shang, shu-han, hosut, guge… 30 bağsız), Orta Asya (buhara-halk-cumhuriyeti, kusan-sasani, xianbei, transkaspi-hukumeti…). Bunlar yalnız künye-içi `kronoloji:` listesine sahip.

## Tablo 3 — Yüzyıl bazında en seyrek 3 dilim (10.-19. yüzyıllar arasında)
Ölçüt: yerleşim sayısı (Tablo 1), madde sayısı (yer_kon kutuda veya taraflar bölge künyelerinden), künye aktif sayısı.
| Bölge | Yerleşim en seyrek 3 | Madde (yer_kon∪taraflar) en seyrek 3 | Not |
|---|---|---|---|
| Çinhindi | 1100s(30), 1000s(30), 1200s(94) | 1300s(3), 1600s(3), 1400s(5) | 1300-1699 arası yüzyılda 3-8 madde: harita boyar ama kronoloji ince |
| Maritim | 1000s(12), 1100s(12), 1200s(91) | 1700s(2), 1400s(3), 1100s(4) | 1700s'te 2 madde |
| Hint | 1000s(39), 1100s(42), 1300s(136) | 1400s(26), 1300s(64), 1600s(70) | yoğunluk iyi, 1400s kronoloji göreli zayıf |
| Çin | 1000s(29), 1100s(30), 1200s(81) | 1400s(16), 1300s(20), 1500s(27) | Ming döneminde 4 aktif künye / yüzyılda 16 madde |
| Orta Asya | 1000s(20), 1100s(21), 1300s/1400s(93) | 1400s(12), 1600s(23), 1000s(26) | 1300s'ten sonra aktif künye 6-8 |
| Moğolistan | 1000s(2), 1100s(2), 1200-1500s(17 eşit) | 1000s(0), 1100s(0), 1400s(0), 1500s(0), 1800s(0) | **1700-1800'lerde aktif künye 0**; yerleşimler başka künyeye bağlı (muhtemelen Qing — doğrulanmadı); Karakurum maddeleri başka bölgeye düşmüş olabilir |
| Alman kutusu | 1000s(34), 1100s(37), 1300s/1400s(83) | **1300s(10), 1500s(10), 1400s(11)** (1200s: 76) | ortaçağ sonu Almanya madde çukuru |
| İtalya kutusu | 1000s(51), 1100s(62), 1600s(129) | 1500s(32), 1000s(36), 1300s(52) | 1200s'te 79 |

## Bölge hükümleri

### 1) Çinhindi — KISMEN (1281 sonrası TAMAM'a yakın)
- 126 yerleşim, 58 künye; 58/58 yerleşimli, hepsinde madde var. Ayutthaya, Sukhothai, Lan Na, Lan Xang, Pagan, Toungoo, Konbaung, Angkor/Kamboç, Champa+Linyi, Lý-Trần-Hồ-Lê-Mạc-Nguyễn-Tây Sơn zinciri, Hanthawaddy, Arakan künyesi var.
- Eksik/zayıf: **Dai Viet adıyla birleşik künye yok** (hanedan zinciri var, sorun değil); Arakan'da (Mrauk U) maddesi **0** (a+b), yalnız 3 yerleşim; Lan Xang 2 madde/5 yerleşim; Ayutthaya 6 madde / 22 yerleşim (1350-1767 için ince); 1300-1699 arası yüzyıl başına 3-8 harita-bağlı madde; 1000-1199 yalnız 30 yerleşim.
### 2) Maritim GD Asya — KISMEN
- 179 yerleşim, 69 künye, hepsi yerleşimli. Majapahit, Srivijaya, Medang, Mataram, Malaka, Aceh, Brunei, Sulu, Tondo/Filipin racalıkları, Ternate, Bugis, Banten, Bali, Johor, Timor beylikleri var.
- Zayıf: 1000-1199 yalnız 12 yerleşim; madde sayıları çok düşük (Majapahit 5, Aceh 2, Mataram 1, Malaka 2, Ternate 2, Bugis 1, Sulu 1, Banten 2); 10 künye yalnız künye-içi kronolojide (Yogyakarta, Gowa-Makassar, Tidore, Banda, Magindanao, Pontianak, Kutai…). `ispanyol-filipinler`, `portekiz-malaka`, `hollanda-malaka` künyelerinin yerleşimi **0**. Yeni Gine'de yalnız modern (1949+) künyeler.
### 3) Hint alt kıtası — KISMEN (1281+ TAMAM'a yakın)
- 248 yerleşim, 185 künye (158 yerleşimli, 27 yerleşimsiz), 172 maddeli. Delhi Sultanlığı (81 yerleşim, 89 madde), Bâbürlü (92/103), Vijayanagara, Behmenî, Maratha, Racput, Sih, Bengal, Gucerat, Ahom, Keşmir, Sind, Multan, Nepal, Seylan, Maldiv, Bhutan künyeleri var.
- Zayıf: **Delhi Sultanlığı tek künye** (Halacî/Tuğluk/Seyyid/Lodî ayrı künye değil — ad aramasında yok, `delhi-sultanligi` penceresi 1206-1526); Nepal yalnız 1 yerleşim/42 madde; Bhutan 2 yerleşim, 0 madde; Kandy/Kotte 1'er yerleşim; Vijayanagara 17 yerleşim/5 madde; Pala, Gupta, Kamarupa, Tomara… yerleşimsiz (çoğu 1281 öncesi); 1000-1199 yalnız 39-42 yerleşim; Tibet/Himalaya yerleşimleri ince (Tibet 6 yerleşim).
### 4) Çin — KISMEN
- 168 yerleşim (Kore/Japonya hariç), 135 künye (+38 atanamayan). Song, Liao, Jin, Batı Xia, Doğu Xia, Yuan, Kuzey Yuan, Ming, Güney Ming, Qing, ÇC, ÇHC, Tibet (Sakya/Phagmodru/Ganden), Guge, Çağatay/Moğulistan, Yakub Bey, Doğu Türkistan cumhuriyetleri var.
- Zayıf: Çin'in 1281-1923 çekirdeğinde yüzyılda 81-128 yerleşim (≈ kıta ölçeği için ince); Ming/Qing arası aktif künye çok az (1400s: 3, 1700s: 3); Batı Xia 3 yerleşim; Tibet 6 yerleşim, Guge **0 yerleşim**; 27 yerleşimsiz künye (Gojoseon, Tuyuhun, Dian, Mengjiang, Nanjing-Wang Jingwei…); 30 künye yalnız künye-içi kronolojiyle (Shang, Shu Han, neolitik kültürler). Çin Sovyet Cumhuriyeti 1 yerleşim.
### 5a) Orta Asya cumhuriyetleri — KISMEN
- 147 yerleşim, 77 künye (55 yerleşimli). Kazak Hanlığı (26/46), Buhara (54/62), Hive (8/28), Hokand (14/18), Timurlu (178/60), Çağatay, Türkmen konfederasyonları, Kazakistan (34), Özbekistan (13), Türkmenistan (11), Tacikistan (10), Kırgızistan (5) künyeleri var.
- Zayıf: Kırgızistan 5, Tacikistan 10 yerleşim; modern cumhuriyet künyelerinin madde sayısı 1'er (Özbekistan 1, Tacikistan 1, Kırgızistan 1, Türkmenistan 1); 22 yerleşimsiz künye (Kerayit, Nayman, Hunnu, Xianbei, Rouran, Hive-Afrigid…, çoğu 1281 öncesi/göçebe); 1400s'te 12 madde.
### 5b) Moğolistan — EKSİK / KISMEN (ölçüm sınırlı)
- 40 yerleşim, 13 künye (hepsi yerleşimli). Künyeler: Moğol İmparatorluğu, Kuzey Yuan, Bogd Hanlık, MHC… **1691-1911 arası aktif künye 0** (Kuzey Yuan t=1691, Bogd Hanlık f=1911). 1000-1199'da kutuda 2 yerleşim, 0 kutu-içi madde. Qing dönemi yerleşimlerin sahibi ölçülmedi.
### 6) Almanya / Orta Avrupa — KISMEN
- Model: **hibrit**. Tek büyük künye `almanya` ("Kutsal Roma 962-1806"; künye f 0962-02-02 → t 1945-06-05, 180 yerleşim, 466 madde) + 900-1806 arasında aktif **53** ayrı `bolge=orta-avrupa` künyesi (Bavyera, Saksonya, Brandenburg, Württemberg, Pfalz, Baden, Bohemya, Hannover, Braunschweig-Lüneburg, Mecklenburg, Schleswig-Holstein, Salzburg, Magdeburg, Lübeck, Hamburg, Bremen, Hanse, Hessen, Lorraine, Lüksemburg, Liège, Utrecht, Trento…). 40/53 yerleşimli, ama yalnız **29'u kutuda** yerleşimli; **13 yerleşimsiz**: Hamburg, Lübeck, Bremen, Hanse Birliği, Hessen, Mecklenburg Dükalığı, Pomeranya, Karintiya, Moravya, Nordmark, Lihtenştayn, Bern, Orta Macar Krallığı.
- Harita: 1500'de kutuda 83 yerleşim, 18 ayrı sahip; `almanya` 39 noktayı (%47) tutar, Habsburg Hollandası 8, Avusturya 8, Saksonya 4, Schleswig-Holstein 4, Württemberg 2, Pfalz 2, Baden 1, Brandenburg 1. Köln, Mainz, Trier, Nürnberg, Augsburg, Hamburg, Lübeck, Bremen, Frankfurt, Regensburg, Würzburg, Stuttgart, Ulm, Konstanz, Aachen yerleşimlerinin 1281-1806 sahibi **yalnız `almanya`** (veya Brandenburg/Saksonya/Württemberg gibi birkaç büyük elektörlük). Münih, Strazburg, Worms (s:'siz), Mainz, Köln yerleşimi var; Speyer, Bamberg yerleşimi yok.
- Eksik künye (ad aramasıyla bulunamadı): Köln/Mainz/Trier elektör başpiskoposlukları, Nürnberg/Augsburg/Frankfurt(1815 öncesi) serbest şehir künyeleri, Hessen (yalnız 1264-1567, yerleşimsiz), Bamberg/Würzburg/Münster piskoposlukları, Pfalz-Zweibrücken, Anhalt, Thüringen landgraflığı; Hamburg/Lübeck/Bremen künye var ama yerleşimsiz → haritada görünmez.
- Kronoloji (kutu yer_kon ∪ taraflar, 900-1806): 254 madde; 1300s 10, 1400s 11, 1500s 10 (1200s 76). `almanya` künyesine 466 madde (HRE olayları tek künyede toplanıyor).
### 7) İtalya ortaçağ — KISMEN (en iyi kapsanan, TAMAM'a en yakın)
- `bolge=italya` 1000-1550 aktif 70 künye; 54 yerleşimli, 53'ü kutuda; 16 yerleşimsiz: Sardinya-Aragon, Verona-Scaliger/Verona-Komünü, Aquileia Patrikliği, Taranto, **Urbino**, Padova-Carrara, Trento Piskoposluğu, Capua, Torino Markizliği, Apulya-Melfi, Lombard Birliği, Pavia, Ezzelino, Visconti-Signoria, Della Torre.
- Mevcut (künye/yerleşim/madde): Venedik 111/122, Cenova 17/143, Floransa 2/29, Milano Dükalığı 15/32 (+Visconti 15/12), Siena 1/24, Piza 5/8, Lucca (Komünü 1/8), Papalık 14/87, Napoli 39/31, Sicilya Krallığı 42/58, Sicilya-Aragon 14/7, Savoya 10/13, Ferrara-Este 2/39, Montferrat 1/11, Mantua (Gonzaga) 1/7 (+Bonacolsi 1/1), Modena, Parma, Bologna Komünü 1/1, Ancona, Amalfi, Salerno, San Marino, Arborea künyeleri var.
- Zayıf: Floransa 2 yerleşim (Medici dönemi ayrı künye değil), Siena/Piza/Lucca/Bologna 1 yerleşim; Sforza ayrı künye yok (Milano Dükalığı 1097-1859 tek künye); Urbino, Verona, Padova, Trento, Torino yerleşimsiz; Bologna/Cremona/Brescia/Bergamo komünleri 0-1 madde. Yüzyıl bazında 1500s'te 32 madde.

## Tablo 4 — En önemli 10 kaba eksik (ölçüme + ad aramasına dayalı; "künye yok" = id/ad alt dizgesiyle bulunamadı)
1. **Moğolistan 1691-1911** (Qing yönetimindeki Dış Moğolistan): aktif künye 0; yerleşim 29 var ama sahibi ölçülmedi.
2. **Alman serbest şehir/prens-piskopos mozaiği**: Köln, Mainz, Trier, Nürnberg, Augsburg, Frankfurt (1815 öncesi) künyesi yok; Hamburg/Lübeck/Bremen/Hanse/Hessen/Mecklenburg-Dükalığı künyeleri yerleşimsiz (haritada görünmez).
3. **Alman kronolojisi 1300-1599**: 10-11 madde/yüzyıl (1200s'te 76).
4. **Delhi Sultanlığı hanedanları** (Halacî, Tuğluk, Seyyid, Lodî) ayrı künye değil; tek künye 1206-1526.
5. **Maritim GD Asya kronolojisi**: yüzyıl başına 2-14 madde (1700s: 2, 1400s: 3); Aceh, Mataram, Malaka, Sulu, Ternate 1-2 madde; Portekiz/Hollanda Malakası ve İspanyol Filipinleri yerleşimsiz.
6. **1000-1199 kuşağı bütün Asya'da**: Çinhindi 30, Maritim 12, Çin ~30, Orta Asya ~20, Moğolistan 2 yerleşim (Hint 39-42).
7. **Çin çekirdeği yoğunluğu**: 1300-1599'da kutuda 84-88 yerleşim; Tibet 6, Guge 0 yerleşim; Ming dönemi madde 16/yüzyıl.
8. **Çinhindi kronolojisi 1300-1699**: yüzyıl başına 3-8 harita-bağlı madde; Arakan 0 madde, Lan Xang 2.
9. **İtalya yerleşimsiz künyeler**: Urbino, Verona, Padova-Carrara, Trento, Torino, Pavia (haritada görünmez); Floransa 2 yerleşim.
10. **Orta Asya cumhuriyetleri**: Kırgızistan 5 / Tacikistan 10 yerleşim; modern künye başına 1 madde; 22 yerleşimsiz künye.

## 15 satırlık özet
1. Veri: 5636 yerleşim, 2268 künye, 18734 madde; bölge künyelerinde BOYALAR eksiği 0.
2. Çinhindi: 126 yerleşim/58 künye/695 madde — KISMEN (1281+ iyi, kronoloji 1300-1699 çok ince).
3. Maritim GD Asya: 179/69/710 — KISMEN (madde yüzyılda 2-14; 10 künye bağsız).
4. Hint: 248/185/2423 — KISMEN, 1281+ TAMAM'a yakın; Delhi tek künye; 27 yerleşimsiz künye.
5. Çin: 168 yerleşim (Kore/Japonya hariç)/135+38 künye/2073 — KISMEN; Tibet 6, Guge 0 yerleşim.
6. Orta Asya: 147/77/1372 — KISMEN; Kırgızistan 5, Tacikistan 10 yerleşim; 22 yerleşimsiz künye.
7. Moğolistan: 40/13/171 — EKSİK (1691-1911 aktif künye 0; ölçüm bölge ataması nedeniyle alt sınır olabilir).
8. Almanya: tek `almanya` künyesi (180 yerleşim/466 madde) + 53 ayrı küçük künye; 13'ü yerleşimsiz; 1500'de kutuda 83 noktadan 39'u `almanya` — KISMEN.
9. Almanya'da Bavyera, Saksonya, Brandenburg, Württemberg, Pfalz, Baden var; Köln/Mainz/Trier/Nürnberg/Augsburg künyesi yok; kronoloji 1300-1599 ≈ 10 madde/yüzyıl.
10. İtalya: 1000-1550 için 70 künye, 54 yerleşimli; Venedik, Floransa, Milano, Cenova, Siena, Piza, Lucca, Papalık, Napoli/Sicilya, Savoya, Mantua, Ferrara, Urbino künyesi var — KISMEN (Urbino dahil 16 yerleşimsiz).
11. Ortak çukur: 1000-1199 (tüm bölgelerde yerleşim 2-62), 1200'lerde 3-4 kat sıçrama (1281 çıtası).
12. En seyrek yerleşim dilimleri: 1000s ve 1100s (tüm bölgeler); en seyrek madde dilimleri: Çinhindi 1300s/1600s, Maritim 1700s/1400s, Almanya 1300s-1500s, Moğolistan 1000s-1500s.
13. Renk: harita anahtarıyla BOYALAR eşleşmeyen künye 0 (yalnız `id` bakılırsa 52 — `harita:` ile çözülmüş).
14. Ölçülmedi: boyanan harita, kaynak kalitesi, Moğolistan/Qing yerleşim sahipleri, künyelerin madde "derinliği".
15. Dosya: D:\atlas\.claude\worktrees\kasa-1113-koordinasyon\denetim\KAPSAM-OLCUM-1114.md
