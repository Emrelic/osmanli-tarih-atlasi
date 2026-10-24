# BOZKIR raporu — tur 2 (web doğrulama)

Yöntem: Bash + `curl -sL -A "Mozilla/5.0"` ile TDV İslâm Ansiklopedisi (islamansiklopedisi.org.tr, 30+ madde tam metin) ve archive.org tam metinleri: Grousset *The Empire of the Steppes* (1970), Golden *An Introduction to the History of the Turkic Peoples* (1992), Barthold *Turkestan Down to the Mongol Invasion* (1928), Hulsewé–Loewe *China in Central Asia* (1979, Han-shu 61/96), UNESCO *History of Civilizations of Central Asia* c. 1-3. Alıntılar metinden regex ile bulunup kaydedildi. Hiçbir kayıt "Vikipedi tek dayanak" değildir.

## ① Sayılar (diskteki dosyalardan sayıldı)
| Dilim | Kayıt | okundu | kismen-okundu | taslak | eksik | var | var-f-t-farkli | var-kisa |
|---|---|---|---|---|---|---|---|---|
| A | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| B | 8 | 0 | 7 | 1 | 8 | 0 | 0 | 0 |
| C | 44 | 10 | 22 | 12 | 32 | 8 | 2 | 2 |
| D | 34 | 15 | 15 | 4 | 13 | 17 | 4 | 0 |
| E | 15 | 7 | 8 | 0 | 5 | 9 | 1 | 0 |
| Toplam | 101 | 32 | 52 | 17 | 58 | 34 | 7 | 2 |

Eklenen 4: `yarkand-suoju`, `bati-xiongnu-zhizhi`, `afrigoglu-harezm` (TDV Hârizm 305-995, atlasta yok), `kuclug-karahitay` (1211-1218). Elenen: 0 (BOZKIR_ELENEN.json oluşturulmadı). Elenmesi ÖNERİLEN: `kurykan` (Tiele boy adı, f/t yok), `kirgiz-yenisey` (mükerrer).
"okundu" yalnız f ve t'si bu oturumda bir sayfadan okunmuş kayıtlar; "kismen-okundu" = varlık ya da bir ucu okundu, öteki ucu okunmadı (ic_not'ta hangisi olduğu yazılı). Metinler Türkçe karakterli yazıldı.

## Künye bulguları (öncelikli maddeler)
- `kerayit`: TDV'de Kerait/Kerayit/Kereyit/Kerayitler maddesi YOK (5 yazım arandı). Golden (s. 285): Kereyid Nesturî Hıristiyanlığı "ca. 1007"de kabul etti; yani 1007 = Hıristiyanlaşma, devlet kuruluşu değil. t=1203 TDV Cengiz Han md. Kuruluş olarak 1007'yi yazmak Emre kararı; ic_not'ta tartışıldı. Atlas künyesi 1199-1203 → `var-f-t-farkli`.
- `karahitay`: TDV Karahıtaylar md. 1130-1211 (kuruluş 1130 bahar); benim taslak 1124-1218 yanlıştı, düzeltildi. Atlas künyesi 1130-1211 doğru.
- `turges`: Golden 699 (Ocirliq, On Oq içinde Türgeş liderliği), kağan unvanı 708-709, Suluk 716-738 (Barthold: Arap 737/Çin 738), TDV t=766. Atlas f=717 Sulu/716 okulu; üç farklı "kuruluş" tanımı ic_not'ta. Karar bekliyor.
- `kusan`: UNESCO HCCA2 Kujula Kadphises ~MS 50; Grousset 30'dan başlatır (30-91/92). f=50 korundu (atlas ile aynı), 30 ic_not'ta. Kanişka çağı 78-278 "hotly disputed". t=350 okunmadı (Grousset Vasudeva'yı 244'te kapar).
- `xianbei`: künye 155-235 yalnız Tanshihuai-Kebineng; Golden ve Grousset 87-93 seferlerinde Xianbei'nin Kuzey Moğolistan'a efendi olduğunu verir → f=93. t=235 okunmadı; Golden Tanshihuai koalisyonunun onun ölümünden (181) sonra dağıldığını söyler (181-235 zayıf).
- `kirgiz-yenisey` / `yenisey-kirgiz`: AYNI polity (TDV Kırgızlar: 840 Uygur'u yıkıp Ötüken'e hâkim, 920 Kitan Ötüken'den çıkarır, 1207 Cengiz'e itaat). `kirgiz-yenisey` yalnız Ötüken evresidir. Birleştirme önerisi: tek kayıt `yenisey-kirgiz` 0840-1207. Ayrıca 630-680 müstakil Kırgız evresi (TDV) → `kirgiz-erken` `var-kisa`.
- `bati-gokturk`: TDV 582-630 (Çin'e bağlı beyliklere ayrılma) ↔ Grousset Aşina Helu 651-657 yeniden kuruluşu ve 657 yenilgisi; atlas 582-659. Kural gereği TDV esas alındı (t=630), çelişki ic_not'ta — 630-657 aralığı için karar gerekir.
- `uygur`: iki TDV maddesi bile farklı (Uygurlar md. 745, Dokuz Oğuzlar md. 744); 744 tutuldu.
- `avar`: Golden/Grousset Pannonia Avar devleti 791-796'da yıkıldı, 805'te tâbi kağan Theodore; atlas t=822 kaynaksız → t=805'e çekildi (künye kısaltma önerisi). TDV "Avarlar" md. Dağıstan Avarlarını anlatır, Pannonia ile ilgisiz.
- `kimek`: f=800/t=1050 kaynaksızdı; Golden ~850, TDV "XI. yüzyılda ad kalktı" (t=null). `oguz-yabgu`: TDV X. yy ilk yarısı güçlü; f/t yıl vermiyor (null).
- `buhara-hudat` t=874 kaynaksızdı (null); TDV: Tuğşâde 710-739, Bünyât Mehdî devrinde (775-785) idam. `semerkant-ihsid`: Gûrek ca. 710-738 (TDV 738, Grousset 739).
- `greko-baktria`: UNESCO MÖ 246 (veya 238); f=-0245; t=-0129 (Grousset 140-130 aralığı).
- `rouran` 402-552 (Golden Shih-lun 402-410, A-na-kuei 520-552; TDV Bumın 552), `hun-avrupa` ~370-454 (Golden: Nedao 454), `eftalit` t=557 (Golden; atlas 560), `kipcak` f=1054 ilk anış (TDV), `harizmsah` 1097-1231, `gurlu` 1000-1215, `gazneli` 963-1186, `samani` 819-1005, `karahanli` 840-1212 toplam (atlas 840-1041 + dogu/bati-karahanli), `cagatay` 1227-1370, `altinorda` 1241-1502 (atlas 1242), `idil-bulgar` t=1236 — hepsi TDV ile uyumlu.
- Eşleme düzeltmeleri: `alania` (taslakta "eksik" demiştim; atlasta `alania-krallik` 850-1090 var), `tuoba-dai` → atlas/CIN `dai-tuoba`, `kuzey-wei` → atlas `kuzey-wei`, `kirgiz-erken` → `yenisey-kirgiz` var-kisa.

## Çin / ORTAAV / HINT ile mükerrer tarama (ic_not'a yazıldı)
- CIN_C: `on-yan`=onceki-yan (0337-0370; Grousset "early Yen 349-370"), `sonraki-yan` (0384-0407, Grousset aynı), `bati-yan` (0384-0394, Grousset aynı), `guney-yan` (0398-0410), `bati-qin-qifu`=bati-qin (0385-0431; Grousset 385-400 + 409-431), `guney-liang-tufa`=guney-liang-16 (0397-0414), `tuoba-dai`=dai-tuoba, `kuzey-wei`, `tuyuhun` (aynı değerler).
- CIN_D `ganzhou-uygur` (0894-1036) = bizim `gansu-uygur`. TDV yıl vermez (911 Dunhuang, 939 son anılan kağan, 1028 Tangut nüfuzu).
- CIN dosyalarında YOK (yalnız burada): Güney Xiongnu (`han-zhao` ardıl olarak var), Donghu, Yuwen/Duan/Murong Xianbei.
- ORTAAV: `kutrigur`, `utigur` (ORTAAV_D), `hun-avrupa`, `alan` (ORTAAV_C alan-konfederasyonu), `sarmat` (ORTAAV_C sarmat-*; BALKAN_C roksolanlar/yazigler).
- HINT_C: `kidarit` (aynı değerler), `alkhon` (HINT 0490-0528 ↔ bizim 0400-0560; HINT esas alınmalı).
- Atlas içi mükerrer: `ogedey-ulusu` (1267-1309) ↔ `ogedey-ulusu-kaydu` (1271-1309); `kirgiz-yenisey` ↔ `yenisey-kirgiz`.

## ② Ulaşılamayan / okunamayan
- TDV'de ayrı madde yok (arandı): Kerait, Nayman, Merkit, Eftalit, Hun, Kuşan, Kuça, Hotan, Karahıtay (ayrı "Karahıtaylar" var), Türgiş, Basmıl, Alan/Alanya, Tuyuhun, Öngüt, Xianbei, Rouran. Eftalit/Hun sayfaları ilk denemede "Bakım Modu" döndü; yeniden denemede arama sayfası geldi.
- Britannica/Iranica, Brill, Cambridge History of China ve of Early Inner Asia, Bosworth *New Islamic Dynasties* archive.org'da ödünç kitaplık (401): tam metin alınamadı. Çin yıllıkları (Hou Han-shu, Jiu Tangshu) doğrudan okunmadı; Han-shu 96 yalnız Hulsewé çevirisinden.
- Hâlâ taslak kalan 17 kayıt (B: iskit-kralligi; C: kirim-iskit, sarmat, alan, yuwen/duan-xianbei, guney-yan, tuoba-dai, guney-liang-tufa, tuyuhun, alkhon, onogur, tashtyk, ...; D: sabir, cac-tudun, usrusana-afsin, alania): kaynak bulunamadı ya da bu oturumda okunmadı; uydurma künye yazılmadı.
- f/t'si null kalan: Saka, Massaget, Dahae, Donghu(f), Yuezhi(f), Wusun, Kangju, Fergana, Hotan(f), Kuça(f), Kaşgar, Loulan(f), Cheshi, Yanqi, Yuwen/Duan/Murong, Tiele, Kutrigur/Utigur/Sabir, Kurykan, Kimek(t), Oğuz Yabgu, Buhara hudat, Naiman(f), Merkit(f), Tatar(f), Öngüt(f). Sogd şehirleri (Buhara, Semerkant, Çaç, Üsrûşana) için doğrudan kuruluş/son yılı kaynakta bulunamadı.
- Sığ kalan: Tarım havzası şehir devletleri (yalnız Yarkand eklendi), Sogd alt beylikleri, Tokharistan yerel şahları, Peçenek/Kıpçak alt boyları, Moğol öncesi boylar (Kongırat, Celâyir, Tayiçiud, Oyrat) — kaynak okunmadı.

## ③ İstekler
1. Kerait için "kuruluş" tanımı kararı (1007 Hıristiyanlaşma / ~1170 Toğrul / 1199 atlas) ve Türgiş için 699/708/716 kararı.
2. `bati-gokturk` t=630 mu 657/659 mu; `avar` t=805'e çekilsin mi; `xianbei` künyesi 93'e genişletilsin mi (ic_not'larda kaynaklar yazılı).
3. Kültür kompleksleri (BMAC, Pazırık, Tagar, Taştık) `tur_yeni: kultur-kompleksi` olarak işaretlendi; devlet listesine alınıp alınmayacağı ana oturum kararı. Boy adları (Massaget, Dahae, Sarmat, Alan, Tatar, Merkit, Kurykan, Tiele, Kutrigur/Utigur/Sabir) siyasî birim mi, karar.
4. Taslak kalan kayıtlar için ayrı bir "VAHA/Sogd" ve "Doğu Avrupa bozkırı" işi (Han-shu 96 Hulsewé çevirisi hazır, Tang kaynakları ve Pelliot/Marquart gerek).
5. Birleştirme aşamasında yukarıdaki mükerrer listeleri (CIN, ORTAAV, HINT) kullanın; çakışmada CIN/HINT kaydı esas.

Geçici dosyalar (TDV ve archive.org metin kopyaları) yalnız scratchpad'dedir; repoya yazılan: `BOZKIR_B..E.json` ve bu rapor.
