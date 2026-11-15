# BOLGE-cin / ADIM 1 — Künye envanteri (15 Kasım 2026, UMIT, bölge ajanı)

Ağaç: `umit-1115-bolge-cin` (origin/main 8fb10bdf1 tabanı). Ölçüm: node `vm` ile `data/devletler.js` + `data/yerlesimler*.js` (127 yerleşim dizisi, 5638 kayıt) yüklendi.

## Ölçüm
- `bolge:"dogu-asya"` künyesi **205**; bunların Kore (Goryeo/Joseon/Silla/Baekje/Goguryeo/Gaya/Taebong/Hubaekje/Tamna/Balhae-Goguryeo ardılları, KK/GK vb.) ve Japonya (Yamato…Edo/Meiji/Ryukyu/Ezo/Ōshū/Abe…) künyeleri bu bölgenin **dışındadır** (görev: Kore/Japonya hariç). Çin bölgesine düşen künye ≈ **150** (Çin hanedanları, onaltı krallık/beş hanedan-on krallık, Tibet, Doğu Türkistan kuzeni künyeler, Moğol-Yuan, Mançu-Qing, ÇC/ÇHC, istila/ayrılıkçı rejimler, enklavlar).
- Renk: 205 künyenin **205'inin** `harita:`/`id` anahtarı `arac/renkler.py` BOYALAR'da tanımlı (BOYALAR 2248 anahtar) → renksiz künye **0** (`cin6.py`).
- Yerleşimsiz (hiçbir yerleşimin `s:` penceresinde `d:` olmayan) künye, Çin kümesinde: xi-liang-li-gao, hou-liang-lu-guang, guge, nanjing-wang-jingwei, mengjiang, kore-geçici-hükümeti (Kore, hariç), doguhebei-ozerk, dian, tuyuhun, guney-xiongnu, bati-qin-qifu, peiligang, shangshan, ba-devleti, zheng-devleti, wu-devleti, dingan-guo, da-chu-zhang-bangchang, ongut, qiuchi, sui-liang-liang-shidu, taira/masakado/abe/guney-saray (Japonya, hariç). **Çin için 1281-1923 ile ilgili olanlar: guge (1000-1630), mengjiang/nanjing-wang-jingwei/doguhebei (1935-45, 1923 sonrası), ongut (1204-06).**
- 1281-1923 çekirdeğinde Çin künye/yerleşim: Yuan 139, Ming 103, Qing 217, Güney Ming 55, Kuzey Yuan 34, Tibet (Sakya 2, Phagmodrupa 6, Ganden Phodrang 11), ÇC 154, Taiping 8, Pingnan 4, San Fan 28, Dashun 12, Daxi 1, Hoşut 1, Tungning 8, Hollanda Formosası 3, İspanyol Formosası 1, Formosa Cum. 4, Hong Kong 1, Makao 1.

## Bölgede atlasta KARŞILIĞI OLAN (1281-1923) başlıca devletler
Song (→1279), Jin, Batı Xia, Doğu Xia, Dali (→1254), Moğol İmp., Yuan, Kuzey Yuan, Ming, Güney Ming, Dashun, Daxi, Qing, Üç Vasal, Tungning, Taiping, Pingnan, Hoşut, Sakya, Phagmodrupa/Tibet, Ganden Phodrang, Guge, ÇC, Mogolistan (Bogd), Hollanda/İspanyol Formosa, Formosa Cumhuriyeti, Yarkent Hanlığı (orta-asya), Yakub Bey, Cungar, Doğu Türkistan cumhuriyetleri (1933, 1944), Hong Kong, Makao.

## EKSİK künyeler (atlasta id/ad aramasıyla bulunamadı; 1281-1923 çekirdeği)
Her biri için aşağıda **kaynak adayı**; **kaynakta kesin okunan gün olmadan künye açılmadı** (CLAUDE: tarih uydurma yok; bu tur akademik kaynak OKUNMADI — bkz. 2. adım "kaynak durumu"). `f`/`t` alanlarına yaklaşık YAZILMADI.

| # | Devlet / yapı | Yaklaşık dönem (genel bilgi, doğrulanmadı) | Neden gerekli | Kaynak adayı |
|---|---|---|---|---|
| 1 | Liang Prensliği (Basalawarmi, Yunnan) | 1368-1382 | Yunnan 1368-1382 şu an `kuzey-yuan` `eksklav:true` ile modelli (Kunming/Lijiang yerleşimlerinde BEYANLI) — ayrı künye daha doğru | Mingshi j.124 (wikisource; atlas zaten okumuş), Dardess, *Conquerors and Confucians* |
| 2 | Kumul (Hami) Hanlığı / Hami Çağatay hanedanı | 1696-1930 | Hâmi yerleşimi 1680 sonrası s: var ama künye yok | Millward, *Beyond the Pass*; Perdue, *China Marches West*; TDV "Hami" okunmadı |
| 3 | Turfan Hanlığı (Moğulistan ardılı) | ~1480'ler-1680'ler | Turfan s: dilimi var | Millward / Newby; TDV okunmadı |
| 4 | Çahar Hanlığı (Ligdan) | 1604-1635 | Kuzey Yuan künyesi (t=1691) içinde eriyor; atlas maddesi «1635 Ejei Qing'e teslim» var, künyesi yok | Elverskog; Crossley; Di Cosmo |
| 5 | İngiliz Weihaiwei kira bölgesi | 1898-1930 | yerleşim ve künye yok (enklav) | Hong Kong/Weihaiwei akad. (Atwell; Johnston, *Lion and Dragon in North China*) |
| 6 | Fransız Guangzhouwan | 1898/1899-1945 | yerleşim ve künye yok | Fransız arşiv neşirleri |
| 7 | Rus/Japon Kwantung Kiralık Bölgesi (Port Arthur-Dalny) | 1898-1945 | Lüşun yerleşimi var (s: Ming'e kadar baktım; 1898 sonrası pencere ölçülemedi) | Pekin 1898/Portsmouth 1905 antlaşma metinleri |
| 8 | Şanghay Uluslararası Yerleşimi / Fransız imtiyazı | 1845-1943 | Şanghay yerleşimi tek sahipli (Yuan→Ming→…) | Wasserstrom; Bergère |
| 9 | Beiyang hükümetleri / savaş ağası devletleri (Zhili, Fengtian, Anhui, Guangdong 1917-) | 1916-1928 | `cin-cumhuriyeti` tek künye; 1916-28 savaş ağaları ayrı modellenmemiş | Sheridan, *Chinese Warlord*; Waldron |
| 10 | Fujian Halk Hükümeti | 1933-1934 | küçük | akademik |
| 11 | Xinjiang vilayeti / Sheng Shicai | 1912-1944 | Doğu Türkistan 1933/1944 var, ana Xinjiang idaresi yok | Forbes, *Warlords and Muslims* |
| 12 | Tibet için ayrık "bağımsız dönem" künyesi | 1912-1951 | `tibet-ganden-phodrang` t=1959-03-28 tek künye; fiili bağımsızlık (1912-1950) ile Qing nüfuzu (1720-1912) arası ayrım yok | Goldstein, *History of Modern Tibet* c.1 |
| 13 | Bhutan/Sikkim sınır Tibet'i | — | Hint ajanının | — |
| 14 | Tusi (yerli şeflik) statüleri: Mu (Lijiang), Sichuan Tusi, Guizhou Tusi | 1382-1723 | Yunnan Tusi'leri ayrı değil | Giersch, *Asian Borderlands* |

(Kore/Japonya, Orta Asya, Hint, Moğolistan, Çinhindi bölgelerinde olanlar ilgili bölge ajanlarınındır; çakışma önlendi.)

## Yerleşimli ama maddesiz/zayıf (Çin çekirdeği)
- Guge: 0 yerleşim, 10 künye-içi madde. `Tholing (Toding)` yerleşimi `YERLESIMLER_ONCE1281_YT_HINT` içinde var ama `s: []` boş (haritada görünmez). Tsaparang, Purang yok.
- Lhasa ve Şigatse: 1281-1354 `yuan-hanedani`, 1354-1642 `tibet`. 1264-1354 `sakya` künyesi 2 yerleşim tutuyor; Lhasa/Şigatse'nin 1281-1354 sahibi Yuan (doğrudan idare) mi Sakya (Yuan himayesinde) mi — kaynakta (Petech, *Central Tibet and the Mongols*; Sperling) beyan gerek, **tartışma 4. adımda**.
- Batı Xia: yalnız 3 yerleşim (1038-1227, 1281 öncesi).
- Hong Kong: tek nokta (Hong Kong); **Kowloon (1860) ve Yeni Bölgeler (1898)** ayrı yerleşim yok — künye kronolojisi bunları anlatıyor ama harita sahipliği değişmez (bkz. adım 6).

## Karar
Künye envanteri KISMEN: çekirdek (Song→ÇHC) tam, ama 14 yapı eksik; hiçbirini bu turda açmadım çünkü açılış gün/yıl için okunmuş akademik kaynak yok (bkz. adım 7, "açılışı bekleyen künye listesi"). Kaynak aranırsa ilk sıra: Mingshi/Qing shi gao wikisource (atlas bu yöntemi zaten kullanıyor), Cambridge History of China c.7-11, Millward/Perdue/Goldstein.
