# KRONO-AKADEMIK-1006 — kaynaksız 9 gün + D3'te kaybolan 3 günün ikizi (UMIT-W28)

YALNIZ ARAŞTIRMA · `data/`'ya yazılmadı. Taban: `358e2349` (D1-D3 diff olarak commitli, uygulanmamış).

## 0. ÖNGÖRÜ — kaynak aranmadan ÖNCE mühürlendi
12 kalem (9 kaynaksız gün + Moskova ikizi aynı kalemde + macaristan 1308 + isveç 1714 ikizi).
| kova | öngörü |
|---|---|
| kurumsal/akademik kaynakla GÜN bulunan | **7 ± 2** |
| bulunan gün atlastaki iki günden BİRİNE uyan | **≥ 4** |
| hiçbirine uymayan (üçüncü gün) | **≤ 2** |
| `bulunamadı` | **2 ± 1** (adayım: Mora 1715 ve Halep 1400 — "geri alınış"/"düşüş" tek güne bağlanmaz) |
| TAKVİM tuzağı (1582 öncesi Jülyen ↔ Gregoryen, Rus/İsveç takvimi) en az bir kalemde | **≥ 1** (aday: Moskova 1571 · isveç 1714) |
| isveç 1714-10-11 ikizi (TDV "11 Ekim") akademikle ÇELİŞİR | **evet, olası** (Batı yazınında Stralsund'a varış Kasım) |

## 1. Sonuç tablosu (12 kalem)
K = künye (`data/devletler.js`) · F = ad eşlemeli dosya. Satırlar `ee415f4e`'dendir. Kaynak türü: **A** akademik (hakemli) · **K** kurumsal.
| # | kalem | K | F | bulunan gün | kaynak | alıntı (birebir) | cümle neyi tarihliyor (§4 ⑧) | hüküm |
|---|---|---|---|---|---|---|---|---|
| 1 | Potop 1655 | `:739` 07-01 | `kronoloji_lehistan.js:293` 07-25 | **1655-07-21** | K · Muzeum Historii Polski, kalendarium "Początek potopu szwedzkiego" (muzhp.pl) | "21 lipca 1655 r. na ziemie Rzeczypospolitej wkroczyła z Pomorza Szczecińskiego armia szwedzka" | İsveç ordusunun sınırı geçişi, yani Potop'un başlangıcı. Aynı sayfa Ujście kapitülasyonuna gün VERMİYOR | **ÜÇÜNCÜ GÜN**: ne K ne F. F'nin 07-25'i Ujście kapitülasyonunun günü olabilir ama onu bu turda yalnız Vikipedi ve popüler siteler veriyor (dayanak değil) |
| 2 | Hanya 1645 | `:369` 01-01 "Girit Savaşı başladı" | `kronoloji_venedik.js:402` 08-22 "başlaması ve Hanya'nın düşüşü" | **1645-08-22** (Hanya) · **1645-06-23** (savaşın başı) | A · Metin Menekşe, "…Kaptan-ı Derya Silahdâr Yusuf Paşa (1604-1646)", Stratejik ve Sosyal Araştırmalar Dergisi 5/3 (2021), DOI 10.30692/sisad.987261 | "22 Ağustos 1645 tarihinde Hanya Kalesi’ni fethederek “Hanya Fâtihi” unvanını almıştır." · Kâtib Çelebi aktarımı: "Rebî‘ülâhırın yirmi sekizinde (23 Haziran 1645) muhâsara etdiklerinde" (Aya Todori) | 22 Ağustos Hanya'nın fethini, 23 Haziran Aya Todori'ye çıkarmayı (savaşın fiilî başı) tarihliyor. ⚠️ Makalenin İNGİLİZCE özeti "August 19, 1645" diyor; metin 19 Ağustos'u "teslim teklifi" günü olarak veriyor (Adıyeke 2002). Makale kendi içinde uyumsuz | **F (Hanya günü) kaynaklı.** F'nin başlığı iki olayı birleştiriyor; "savaşın başlaması" 23 Haziran'dır |
| 3 | Mora 1715 | `:373` 06-25 | `kronoloji_venedik.js:481` 07-01 | **1715-06-26** (Mora'ya giriş) · **1715-09-07** (son kale) | A · Hüseyin Sarıkaya & Veysel Göger, "Mora’nın Yeniden Fethine Dair Osmanlıların Hazırladıkları Fetihnâme (1715)", Tarih Dergisi 67 (2018), DOI 10.26650/TurkJHist.2018.369193 | fetihnâme: "mâh-ı Cumâdelâhıra'nın yigirmi üçüncü günü … Gördüs Boğazı … Mora Cezîresi içine dühûl eyleyüp" + dipnot "23 Cumâdelâhır 1127 = 26 Haziran 1715 Çarşamba" · öz: "Benefşe de 7 Eylül’de teslim oldu" | "Geri alınış" TEK GÜN değil, bir sefer: 26 Haziran ordunun yarımadaya girişi, 7 Eylül son kalenin teslimi | **ÜÇÜNCÜ GÜN**: K 1 gün kayık (06-25 ↔ 06-26). Öneri: madde ya giriş (06-26) ya tamamlanma (09-07) olarak adlandırılsın |
| 4 | 1422 kuşatması | `:95` 06-10 | `kronoloji_bizans.js:454` 06-08 | — | **bulunamadı**: Britannica 403 döndü; elde yalnız Vikipedi'nin aktardığı Bizans kısa kroniği ("on 10 June, Wednesday …") | — | — | **bulunamadı.** Aday 10 Haziran (K) ama Vikipedi aracılığıyla; dayanak olamaz. TDV iç uyumsuzluğu (Receb 825) beyanlı kalıyor |
| 5 | Sarı Sular 1648 | `:216` 05-01 | `kronoloji_kirim.js:311` 05-16 | **1648-05-16** | K · Encyclopedia of Ukraine (Canadian Institute of Ukrainian Studies), "Zhovti Vody, Battle of" | "A battle between Bohdan Khmelnytsky's forces and the Polish army, on 16 May 1648" · "approximately 4,000 Crimean Tatars led by Tuhai-Bei" | Muharebenin günü; Tugay Bey'in katılımını da tanıklıyor | **F doğru** |
| 6 | Dózsa 1514 | `:685` 07-15 bastırıldı | `kronoloji_macaristan.js:364` 07-20 idam | **07-15** ve **07-20** | K · honvedelem.hu (Macaristan Savunma Bakanlığı portalı), Kecskeméti József, 15.07.2010 | "1514. július 15-én mért döntő csapást Szapolyai János a Dózsa György vezette jobbágylázadásra." · "akit néhány nappal később, július 20-án végeztek ki." | 15 Temmuz Temesvár'da isyanın ezilmesi, 20 Temmuz Dózsa'nın idamı | **İKİSİ DE doğru**: ayrı alt-olaylar, mükerrer değil |
| 7 | Halep 1400 | `:1819` 01-01 | `kronoloji_timurlu.js:85` 10-01 | **1400-10-30** | A · Ercan Cengiz, "Timur’un Suriye Seferi", Kafkas Üniv. SBE Dergisi 26 (2020), DOI 10.9775/kausbed.2020.034 | "28 Ekim 1400’de Halep’e ulaştı" · "Memluk kuvvetleri 30 Ekim’de şehrin dışına çıkarak Timur’un ordusuna doğru saldırıya geçtiler" · "Timur’un ordusu Halep’e girerek şehri yağmaladı" | 30 Ekim meydan savaşı ve şehre giriş (aynı anlatı); kale daha sonra düştü, gün verilmiyor | **ÜÇÜNCÜ GÜN**: F'nin 10-01'i ay başı yer tutucu |
| 8 | Katalan 1303 | `:998` 01-01 | `kronoloji_katalan.js:13` 09-01 | — | **bulunamadı**: Hellenic World ansiklopedisi (fhw.gr) bağlantıyı reddetti; Setton'un metni okunamadı; elde yalnız Vikipedi "September 1303" | — | — | **bulunamadı** (ay adayı Eylül, dayanak değil) |
| 9 | Moskova 1571 | `:215` **05-24** (D3'te silinmişti) | `kronoloji_kirim.js:207` 01-01 | **1571-05-24** | A · Serkan Acar, "Kırım Hanı Devlet Giray’ın 1571 Rusya Seferi ve Moskova Yangını", Karadeniz Araştırmaları (2013) | özet: "He set fire suburbs of the city in May 24th, 1571" | Şehrin varoşlarının ateşe verilişi | **SİLİNEN değer (K) DOĞRU çıktı**, ikiz yalnız yıldı ⇒ D2c'de ikize Acar kaynağıyla 05-24 yazıldı. Takvim: 1582 öncesi, Jülyen/Gregoryen sorusu doğmuyor |
| 10 | macaristan 1308 | `:678` **06-15** (silinmişti) | `kronoloji_macaristan.js:126` 11-27 | — | ikizin dayanağı Engel (2001) s. 124-131, metni bu turda **okunamadı**; bağımsız kurumsal kaynak **bulunamadı** (yalnız Vikipedi: "27 November 1308", Pest) | — | — | **Silinen ≠ ikiz.** İkizin günü akademik dayanaklı ama doğrulanmadı. Silinen 06-15 hiçbir kaynakta 1308 için geçmiyor (Vikipedi bunu 1309 taç giymesi olarak anıyor, dayanak değil) |
| 11 | isveç 1714 | `:861` **02-01** "terk etti" (silinmişti) | `kronoloji_isvec.js:302` 10-11 varış | yola çıkış **09-19 / 09-20** · varış **10-11 / 11-11** | TDV `isvec` + K · Encyclopaedia Britannica 1911, "Charles XII." (Wikisource) | TDV: "19 Eylül’de yola çıkıp 11 Ekim’de memleketine ulaştı." · EB1911: "he quitted Demotika on the 20th of September 1714, and … arrived unexpectedly at midnight, on the 11th of November, at Stralsund" | Yola çıkış ve varış, iki ayrı olay | **ÇELİŞKİ:** varışta TDV 11 Ekim ↔ EB1911 11 Kasım (bir ay), çıkışta 19 ↔ 20 Eylül. **Silinen 02-01 hiçbir kaynakta yok ve olayla da uyuşmuyor.** Künyenin olayı (yola çıkış) ikizin olayıyla (varış) aynı DEĞİL ⇒ mükerrer değil |

## 2. Koordinatör hükmünün uygulanması: D2c + D3b
| kalem | silinen gün | ikizin günü | eşit mi | yapılan |
|---|---|---|---|---|
| kırım 1571 | 05-24 | 01-01 (yıl) | ✗ | **D2c:** İKİZİN günü Acar (2013) ile 05-24'e çıktı, künyeyle aynı gün oldu → **D3b'de temiz mükerrer silme**, ikize iz notu |
| macaristan 1308 | 06-15 | 11-27 | ✗ | **D2c:** künye 11-27'ye çekildi, eski 06-15 `ic_not_b`'de ve beyanda duruyor → **D3b'de temiz silme**, ikize iz notu ("daha önce künyede 1308-06-15 yazılıydı, kaynaksız…") |
| isveç 1714 | 02-01 | 10-11 | ✗ | **D2c:** künye kendi olayının TDV gününe (1714-09-19, "yola çıktı") çekildi + EB1911 beyanı; ikize TDV ↔ EB1911 ÇELİŞKİ beyanı → **D3b'den ÇIKTI** (ayrı olay, silinmiyor) |
- **İz kuralı:** D3b'de silinen 19 maddenin HER birinin ikizine künyedeki İLK (D2 öncesi) değer yazıldı: "daha önce künyede (devletler.js) <değer> yazılıydı, <kaynaksız/…>; mükerrer olarak kaldırıldı (KRONO-CELISKI-1006 §2 #n)". Yıl hassasiyetli `-01-01` değerler de dahil (19/19).
- D3'teki kaynak taşıma (8 ikiz + #26 döngüsel atıf) D3b'de AYNEN duruyor (aynı kod parçası koşturuldu).
- **`denetim/KRONO-MUKERRER-SIL-1006.diff` (eski D3) ARTIK GEÇERSİZ.** Yerini `KRONO-MUKERRER-SIL-1006b.diff` aldı; eski D3 uygulanmamalı.

### 2.1 Diff'ler ve zincir: tek tek `--check`
| sıra | diff | satır | CR (dosya bazında) | `git apply --check` (önceki adımın üstüne) |
|---|---|---|---|---|
| 1 | `KRONO-SAHTE-ALINTI-1006.diff` | 48 | 3 dosya CR 0 | ✓ (`ee415f4e`) |
| 2 | `KRONO-TARIH-1006.diff` | 188 | devletler.js 65 · 6 dosya 0 | ✓ |
| 3 | `KRONO-TARIH-1006b.diff` | 13 | devletler.js 8 | ✓ |
| 4 | **`KRONO-TARIH-1006c.diff`** (yeni) | 53 | devletler.js 16 · kronoloji_isvec 0 · kronoloji_kirim 0 | ✓ |
| 5 | **`KRONO-MUKERRER-SIL-1006b.diff`** (yeni) | 339 | devletler.js 98 · 13 kronoloji dosyası 0 | ✓ |
Beşi sırayla uygulanınca sonuç worktree'nin son hâliyle **birebir**. Hedef 17 dosyanın hiçbiri `ee415f4e` → bugünkü HEAD `ac6e57bf` arasında değişmedi.
devletler.js'teki CR'ler o dosyanın `-text` karışık satır sonundan geliyor (UMIT'in ölçümüyle aynı açıklama).

### 2.2 Değişmez 2 önce/sonra (`py arac/denetle.py`)
| | Değişmez 2 | 2s | 2i | 2t | mükerrer | çıkış |
|---|---|---|---|---|---|---|
| D3b öncesi (D1…D2c) | 623 · 0 açık | 187 | 1 | 13 | 112 | 2 |
| D3b sonrası | 623 · 0 açık | 187 | 1 | 13 | 112 | 2 |
- D3b öncesi ve sonrası çıktı **satır satır AYNI**. İlk taban ile D2c arasındaki tek fark yine 4s listesinde `katalan`/`adal` yazdırma sırası (eşit sayı).
- Çıkış 2: Değişmez 8 ÖLÇÜLEMEDİ (taze worktree'de `devletler_harita.js` yok); her ölçümde aynı.

## 3. Öngörü tuttu mu
| kova | öngörü | ölçülen | |
|---|---|---|---|
| gün bulunan (A/K kaynak) | 7 ± 2 | **8** (Potop · Hanya · Mora · Sarı Sular · Dózsa · Halep · Moskova · isveç/EB1911) | ✓ |
| atlastaki günlerden birine uyan | ≥ 4 | **4** (Hanya F · Sarı Sular F · Dózsa K+F · Moskova K) | ✓ |
| üçüncü gün | ≤ 2 | **4** (Potop 07-21 · Mora 06-26/09-07 · Halep 10-30 · isveç varış 11-11) | ✗ (atlasın ay başı yer tutucularını hafife aldım) |
| bulunamadı | 2 ± 1 · aday Mora, Halep | **3** (1422 · Katalan · macaristan için bağımsız kaynak) | ✓ sayı / ✗ ad (Mora ve Halep BULUNDU) |
| takvim tuzağı ≥ 1 | aday Moskova, isveç | **1** (isveç: İsveç 1712-53 arası Jülyen takvimdeydi, EB1911'in takvimi belirsiz) · Moskova tuzak DEĞİL (1582 öncesi) | ✓ |
| isveç ikizi akademikle çelişir | olası | **evet** (TDV 11 Ekim ↔ EB1911 11 Kasım) | ✓ |

## 4. Öneri (UYGULANMADI, diff yazılmadı; kapsam kararı koordinatörün)
Kaynağı bulunan ama atlasa yazılmamış günler (hepsi ikinci bir tarih turu ister):
- Potop: F `kronoloji_lehistan.js:293` 07-25 → **1655-07-21** (MHP). K `devletler.js:739` 07-01 mükerrer.
- Hanya: F'nin başlığı ikiye ayrılmalı: 1645-06-23 savaşın başı (Aya Todori) · 1645-08-22 Hanya'nın fethi (Menekşe 2021).
- Mora: K 06-25 / F 07-01 → **1715-06-26** (Mora'ya giriş) ya da **1715-09-07** (son kale), olay adıyla.
- Halep: F 10-01 → **1400-10-30** (Cengiz 2020).
- Sarı Sular: F 05-16 doğru (EoU); K 05-01 mükerrer.
- Dózsa: ikisi de doğru, ayrı alt-olay olarak kalmalı (K'ya kaynak eklenebilir: honvedelem.hu).
- 1422 ve Katalan: kaynak turu sürmeli (Schreiner, *Die byzantinischen Kleinchroniken*; Setton 1975).

## 5. Değişen dosyalar
`C:\atlas-umit\denetim\` altında: bu rapor · `KRONO-TARIH-1006c.diff` · `KRONO-MUKERRER-SIL-1006b.diff`. `data/`'ya yazılmadı, commit yok.
Kilit: kronoloji_isvec · memluk · venedik · macaristan dosyalarının onayını diff'i yazdıktan SONRA istedim (UMIT'in usul notu kayda geçti).
