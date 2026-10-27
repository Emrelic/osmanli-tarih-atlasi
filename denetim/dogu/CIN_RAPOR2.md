# CIN raporu — tur 2 (web doğrulama)

Yöntem: Bash + `curl -sL -A "Mozilla/5.0"` ile zh.wikisource.org'daki birincil metinlerin tam sayfaları (Shiji, Han shu, Hou Han shu, Sanguo zhi, Jin shu, Song shu, Nan Qi shu, Liang shu, Chen shu, Wei shu, Bei Qi shu, Zhou shu, Sui shu, Jiu/Xin Tang shu, Jiu/Xin Wudai shi, Song shi, Liao shi, Jin shi, Yuan shi, Zizhi tongjian) çekildi; alıntılar regex ile metinden birebir bulundu ve `kaynak:` alanına yazıldı. Gün tarihleri, metindeki ganzhi gün adından Jülyen takvimine HESAPLA çevrildi (JDN algoritması; sınama: 甲子=618-06-18 Tang, 乙亥=557-11-16 Chen, 戊午=550-06-09 Bei Qi, 乙巳=960-02-04 Song, 甲午=MÖ 202-02-28 Han, 辛未=947-03-10 Later Han — hepsi bilinen günlerle örtüştü). Ay doğrulaması için çevrim anchor'ı kaynak ayının tahmini aralığıdır; belirsiz kalanlar yıl/ay hassasiyetinde bırakıldı.

## ① Sayılar (diskteki dosyalardan sayıldı, `stat.py`)
| Dilim | Kayıt | okundu | kismen-okundu | taslak | eksik | var | var-kisa |
|---|---|---|---|---|---|---|---|
| A | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| B | 29 | 0 | 17 | 12 | 23 | 5 | 1 |
| C | 71 | 7 | 54 | 10 | 51 | 20 | 0 |
| D | 50 | 22 | 22 | 6 | 20 | 30 | 0 |
| E | 10 | 0 | 6 | 4 | 2 | 8 | 0 |
| Toplam | 160 | 29 | 99 | 32 | 96 | 63 | 1 |

Eklenen kayıt: 0. Elenen: 0 (ELENEN dosyası oluşturulmadı). "okundu" yalnız f ve t'nin ikisi de bu oturumda metinden okunduğu kayıttır; "kismen-okundu" = varlık ya da bir uç okundu, diğeri `ic_not`ta "okunmadı" diye işaretli. B diliminde Shiji MÖ yılı vermez (feodal tarihler yok); olay okundu, MÖ yıl eşdeğeri standart kronolojiden (CHAC/Shaughnessy) olduğu için hiçbiri `okundu` yapılmadı.

## Düzeltilen / farklı çıkan tarihler (taslak değerler `ic_not`ta saklı)
- Song (960-02-04 … 1279-03-19) Song shi'den ve Liang/Chen/Qi/Zhou/Sui/Tang (502/557/550/557/581/618 … 907) gün hassasiyetine çekildi; Beş Hanedan (Later Liang 907-06-01 … Later Zhou 951-02-13) okundu.
- `sonraki-tang-5hanedan` t: 清泰三年閏十一月辛巳 = 937-01-11 (Jülyen); atlas geleneği 936. `sonraki-han-5hanedan` t: 乾祐三年十一月乙酉 = 951-01-02.
- `cao-wei` t: Jin kuruluşu 泰始元年冬十二月丙寅 = 266-02-08; atlas 265 (咸熙二年 yıl sayımı) yanlış yıl veriyor.
- `dongou` t: 建元三年 = MÖ 138 (-0137); atlas -0136.
- `guiyi-jun-dunhuang` f: Song shi 大中五年 (851) — atlas 848 (Zhang Yichao'nun Shazhou'yu alışı) ic_not'ta. `dingan-guo` t: 991 (son tarihli anış, devlet sonu değil).
- Jin shu'da tarih çelişkileri: `sonraki-yan` f (Jin shu 383 ↔ atlas 384), `bati-liang-16` t (Jin shu 423 ↔ 421), `sonraki-liang-16` (Jin shu 387/390/404 ↔ atlas 386/403), `min-krallik` t (Ouyang 946 ↔ 945). Hepsi `ic_not`ta iki kaynağıyla; seçim Emre'de.

## Mükerrer kontroller (talep edilen)
- `tibet-imparatorlugu` ↔ `tubo-tibet-imparatorlugu`: mevcut_once1281.tsv'de f/t/başkent AYNI (0629–0842, Lhasa). Jiu Tang shu 196 shang + Xin Tang shu 216 xia tek bir 吐蕃 polity'sini anlatır. MÜKERRER kesin: birleştirilmeli (CIN kaydı `tibet-imparatorlugu`).
- BOZKIR ile çakışanlar: `onceki-yan` (=on-yan), `sonraki-yan`, `bati-yan`, `guney-yan`, `bati-qin` (=bati-qin-qifu), `guney-liang-16` (=guney-liang-tufa), `dai-tuoba` (=tuoba-dai), `kuzey-wei`, `tuyuhun`, `ganzhou-uygur` (=gansu-uygur) — hepsinde TEK kayıt CIN'de kalır ve ilgili kayıtların `ic_not`unda mükerrer ID belirtildi (BOZKIR dosyalarına dokunulmadı; onların tarafında silinmesi ayrı iş).

## ② Ulaşılamayan / okunamayan
- ctext.org: anti-scraping (bot koruması) yüzünden kullanılmadı; aşılmaya çalışılmadı. Yerine zh.wikisource.org birincil metin sayfaları.
- Cambridge History of China cilt 1/3/5/6 ve CHAC archive.org tam metinleri ödünç-kısıtlı (djvu metni dönmedi): Xia (-2069…-1599) ve Shang (-1599…-1045), Western Zhou ve Zhou eyaletlerinin kuruluş tarihleri okunamadı → `taslak`/`null` kaldı. TDV (Karahıtay çevresi) Çin kayıtları için gerekmedi.
- Okunmayan uçlar: Han-Zhao t, Hou Zhao t, Ran Wei t, Onceki Qin t, Hu-Xia t, Bati Qin t, Kuzey Liang, Kuzey Yan, Zhai Wei, Bati Shu (Qiao), Shu Han t, Sun Wu t, Bati Jin t, Liao t (1125), Jin t (1234), Bati Xia t (1227), Dali (937/1253), Da Changhe/Da Tianxing/Da Yining (Zheng Maisi 902 deseni 4 sayfada bulunamadı), Heiyue-Purang, Guge, Tsongkha, Sakya, Yarlung, Zhangzhung, Xia/Shang/Lu-Jin-Song-Yue-Wu-Zhu-Teng-Zeng-Xu-Ju vb. B kayıtları, Chu-Han 18 krallığın tek tek bitiş yılları.
- Chu-Han 18 krallık: yalnız f (漢之元年四月 各就國, MÖ 206) Shiji 7'den doğrulandı; kendi sonları okunmadı (Shiji 16 aylık tablo işlenmedi).
- Tamamlama (yeni polity ekleme) yapılmadı; B diliminde Zhou eyaletlerinden Xue/Ji/Lai/Ying/Shen/Deng/Ru/Tan/Sui vb. hâlâ eksik.

## ③ İstekler
1. Karar: Chu-Han 18 krallık haritada ayrı çizilecek mi? (yalnız f doğrulandı; çizilmeyecekse sil).
2. Karar: yukarıdaki çelişkili uçlar (Jin shu vs atlas, 945/946, 851/848).
3. `tibet-imparatorlugu`/`tubo-tibet-imparatorlugu` birleştirme ve BOZKIR↔CIN mükerrer silme kararı.
4. Cambridge History / CHAC tam metnine erişim (kurum erişimi ya da elle) → Xia/Shang/Western Zhou için.
5. Not: bu oturum scratchpad'de başkasının `g.py`/`run.py`/`idx.py`/`q.py` adlı dosyalarının üstüne yazmış olabilir (ortak scratchpad); kendi araçlarım `.../scratchpad/cin/` altına taşındı.
