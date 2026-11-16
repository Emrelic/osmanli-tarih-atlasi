# BOLGE-MOGOLISTANb — B: eksik devlet / künye (UMIT, 15 Kasım 2026, 2. dalga)

Dal: `umit-1115b-mogolistan` (taban `origin/main` 8fb10bdf1). Okunan TAM METİNLER (bu oturumda curl ile Wikisource ham metni; Vikipedi/ikincil sayılmadı): Qing Shilu (Shengzu shilu) juan 150 · Qing Shi gao juan 2, 521, 522, 523, 524, 525 · Ming shi juan 327, 328. TDV `cengiz-han` (WebFetch ile açıldı). OKUNMADI: Bawden, Perdue, Atwood, Moğol Gizli Tarihi akademik neşri (Rachewiltz), Rusça akademik kaynak, Ming Shilu, Qing Shilu Taizong/Yongzheng ciltleri (Wikisource aramasıyla bulunamadı).

## Yazılan (1 künye, 4 künye-içi madde, 2 kronoloji maddesi, 8 yerleşim penceresi)
| Künye | f → t | Kaynak | Not |
|---|---|---|---|
| `qing-halha-aymaklari` (Qing Halha Aymakları: Tüşetü Han, Çeçen Han, Sain Noyan, Zasaktu Han) | **1691-05-30** (gün) → 1911-12-29 (ay hassasiyeti; gün komşu künyeden) | Shilu juan 150 5. ay 戊子 «將爾等與朕四十九旗一例編設 … 土謝圖汗車臣汗名號俱著仍舊存留 … 去其濟農諾顏之名，皆封為多羅郡王»; Shi gao juan 521 «自是始稱土謝圖汗部», «雍正三年 … 別為一部 … 喀爾喀有四部自此始», «乾隆二十七年 … 庫倫置辦事大臣», «宣統三年 … 十一月，哲布尊丹巴稱尊號於庫倫» | `harita:"qing-hanedani"` (boya değişmez), qing-hanedani (1616-1912) ömrü İÇİNDE; ayrı devlet değil alt birim |

Gün hesabı (干支, Gregoryen, 1691>1582): 丙戌 = 05-28, 丁亥 = 05-29, 戊子 = 05-30 (`scratchpad/mgb/gz2.py`, 60 günlük döngüde tek aday). Shilu aynı toplantıyı üç güne böler: 乙酉 05-27 varış, 丁亥 05-29 huzura kabul (birinci dalganın Dolon Nor maddesi bu günü yazar), **戊子 05-30 ferman: Halha 49 bayrakla aynı düzende, unvanlar ve zasaklar** → künye f ve pencere ucu bu gün. Birinci dalganın 05-29 maddesiyle ÇELİŞMEZ (ayrı olay).

Kronoloji (`data/olaylar_mogolistan_1115b.js`, `window.OLAYLAR_MOGOLISTAN1115B`, index.html'e `<script>` eklendi, `?v=` yok):
1. **1691-05-30** Halha'nın Qing zasak-bayrak düzenine alınması (taraflar: kuzey-yuan → qing-halha-aymaklari; yer_id Urga; odak_yer 8 yerleşim). Bu, pencere kırılmasının (D2) ±30 gün içindeki maddesidir.
2. **1635-07-11** Çahar'ın son hanı Ejei'nin annesiyle teslimi (Shi gao juan 2, Tiancong 9 5. ay 丙子; 5. ayın maddeleri 乙卯 06-20 · 癸亥 06-28 · 己巳 07-04 · 壬申 07-07 · 丙子 07-11; **tek tam metin**, çift teyit YOK). Künye-içi kuzey-yuan «1635-01-01 Ejei» yıl maddesinin gün karşılığı; etiket yalnız `konu-siyasi` (2t borcu doğurmasın diye toprak etiketi yok).
Künye-içi (devletler.js): 1691-05-30 kuruluş · 1725 Sain Noyan (yıl) · 1762 Kulun amban (yıl) · 1911-12-29 son (ay).

## Yazılamayanlar ve NEDEN (kaynaklı künye için f/t günü bulunamadı ⇒ yazılmadı; tarih uydurulmadı)
- **Çahar Hanlığı (Ligdan, 1604-1634/35)**: t için Shi gao juan 2 (1634 ölüm haberi = Tiancong 8 閏八月 庚寅; 1635-07-11 teslim); **f (1604 Ligdan'ın tahta çıkışı) hiçbir okunan metinde yok** (Ming shi 327 «虎墩兔者，居插漢兒地 … 四傳至虎墩兔» yalnız soy verir). Künye f'siz yazılmaz ⇒ bulunamadı.
- **Tümed / Altan Han (1540'lar-1582)**: Ming shi 327'de 順義王 unvanının verilmesi (俺答: «詔封俺答為順義王»), ölümü «十年春» ve oğlu 黃台吉'nin (乞慶哈) ardıllığı, «十五年春» Chelik'in ardıllığı (hükümdarlık yılları Wanli sayımıyla; Wanli yıl başlığı okunan kesitte doğrulanmadı); **gün yok**, künye f'si yok. Unvanın verildiği yıl/gün bu metinde yazılı değil (okunan bölümde yıl başlığı yok) ⇒ künye yazılmadı.
- **Halha Hanlıkları (Üç Han 1600'ler-1691)**: Shi gao 521: Abatai Sain Han unvanını Dalay Lama ziyaretinden sonra (yıl yok), Gombu «始號土謝圖汗» (yıl yok), Shunzhi 12 (1655) «設喀爾喀八扎薩克» (gün yok), Chongde 3 (1638) «九白» haracı; kuruluş f'si yok ⇒ künye yazılmadı. Halha'nın 1691 sonrası hâli yukarıdaki künyededir.
- **Dörben Oyrat / Esen Taişi (1434-1455)**: Ming shi 328 (瓦剌) okundu, ama f/t tarihleri ve künye ayrımı (Tumu 1449 künye-içi maddesi var, aktör künyesi yok) için akademik gün bulunamadı (Ming shi hükümdar sıralaması yıl düzeyinde) ⇒ yazılmadı.
- **Tannu Uriyanhay (Qing Tuva 1757-1912), Kobdo/Uliastay generalliği, Barga**: Shi gao juan 524 (唐努烏梁海, 阿勒泰烏梁海) okundu ama yönetim kuruluş günü bulunamadı; bunlar zaten `qing-hanedani` altında kalır (şemsiye künyeye KATILMADI).
- **Ejin (Hara-Hoto) 1636 kalemi: ÇÖZÜLEMEDİ.** Shi gao juan 521-525'te `額濟納` HİÇ geçmez (grep 0/5 cilt); Alaşa Hoşut yalnız «阿拉善厄魯特，設扎薩克一» (juan 523 和碩特部, tarihsiz). Atlas: Ejin kuzey-yuan → 1636-05-15 qing (Qing'in ad alma günü, Hong Taiji; Ejin'in o gün Qing'e geçişi için HİÇBİR kaynak okunmadı). Önerim: Ejin/Gaşun Gobi/Alaşa kuzeyi 1636-05-15 pencere ucunun kaynağı aranana dek «gün kaynaksız» işaretlensin; Ejin Torgut'un 1698-1705 göçü ve Alaşa Hoşut'un 1697 Qing'e bağlanması için Perdue/Bawden'e ya da Cambridge History of Late Imperial China cilt 9'a ihtiyaç var (okunmadı).
- **Kobdo 1635 kalemi: ÇÖZÜLEMEDİ.** Atlas: kuzey-yuan → cungar 1635-01-01 → qing 1755-01-01. Shi gao 523 (杜爾伯特部): «先是杜爾伯特及烏梁海未內屬 … 以科布多為烏梁海牧» yalnız Qianlong 20'li yıllar (1755-1759); 1635'te Kobdo'nun Oyrat/Cungar elinde olduğuna dair okunan metin YOK (Cungar künye f=1634-01-01 atlasın kendisi, dayanak değil). 1755 ucu için: Shi gao 521 Tüşetü bölümü «二十年，進剿達瓦齊於伊犁» (Qianlong 20 = 1755) Qing'in Cungar'ı yıktığı yıl; gün okunmadı.

## Renk
`denetim/RENK-ONERI-1115-mogolistanb.md`.
