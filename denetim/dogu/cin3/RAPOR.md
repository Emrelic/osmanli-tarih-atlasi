# cin3 raporu (Çin kümesi 3 · girdi_cin3.json · 22 polity)

Yöntem: zh.wikisource.org tam sayfaları `curl` ile çekildi (Xin Wudai shi, Song shi, Jin shi, Yuan shi, Zizhi tongjian, Shiji, Zuozhuan,
Dian zai ji, Nanzhao yeshi, Dushi fangyu jiyao vb.); `kaynak:` alanındaki her Çince alıntı sayfa metninde birebir bulunup yazıldı.
Ganzhi gün adları → Jülyen: JDN algoritması (`_gzlib.py`), sınama 乙巳 = 960-02-04 (Song shi 1) ve 辛未 = 947-03-10; ay hizası, kaynağın
kendi «N月XX朔» kayıtlarıyla kuruldu. Gün veren her maddede `ic_not_takvim` var. Yardımcı olarak Wikipedia özeti yalnız kontrol amaçlı
(dayanak sayılmadı). Çağdaş akademik kaynaklar (Backus, Cambridge History of China, Petech, Vitali) AÇILAMADI — «atıf; açılmadı».

## ① Ölçülen (diskteki dosyalardan; `node denetim/dogu/dogrula.js cin3` çıkış 0, ihlal 0, uyarı 0; ayrıca `_sinav.py` ihlal 0)
- Polity: 22 (KUNYE_YOK 4 · KUNYE_MS1_DALINDA 3 · KUNYE_MAIN_DA 15).
- Künye yazılan: **3** (`da-tianxing`, `da-yining`, `ba-devleti`) + 6 künye-içi iskelet maddesi. YAZILMAYAN: `heiyue-purang` (bkz. ②).
- Kronoloji: `kronoloji_cok_dogu_cin3.js` **43** anlatı maddesi + `kronoloji_sinir_dogu_cin3.js` **30** devir maddesi = 73 (dogrula `kron` 73).
  Polity başına (taraf olarak geçtiği madde, cok+sinir): song 27 · sonraki-jin 10 · sonraki-han 9 · dali-kralligi 7 · sonraki-zhou 7 ·
  da-qi 6 · da-yining 6 · sonraki-shu 5 · jin-hanedani 5 · da-chu 4 · da-tianxing 4 · kuzey-han 4 · dingan-guo 3 · guney-tang 3 · tsongkha 3 ·
  ba-devleti 2 · bati-xia 2 · sakya 2 · yuan-hanedani 2 · dongxia 1 · guge 0 · heiyue-purang 0. Hassasiyet: gün 53 (hepsi ganzhi'den hesaplı, `ic_not_takvim` var;
  cok 27 + sinir 26), yıl 20 (cok 16 + sinir 4).
- Yeni yerleşim kaydı: **0**. Gerekçe: Pleiades Çin/Tibet kapsamıyla örtüşmüyor (`_koor.py`: Daming, Acheng/Huining, Burang, Dali, Taiyuan,
  Kaifeng, Chengdu için Pleiades eşleşmesi YOK; yalnız GeoNames: Daming 1813915 36.285 115.145 · Acheng 2038679 45.546 126.952 · Burang 1281593
  30.296 81.175 · Toding/Tholing 1279865 31.481 79.798). Şartname «5 km içinde iki tanık yoksa yazma» dediği için yazılmadı.
  `yerlesimler_dogu_cin3.js` boş dizidir. Çift tanıklı koordinat: 0.
- Mevcut yerleşimlere YAMA: `yama_dogu_cin3.js` **11 kayıt (9 farklı yerleşim; Kaifeng 3 parça), 25 `s:` dilimi, `__BOSLUK__` dilimi 0.**
  Her kırılma günü için ±30 gün içinde `kronoloji_sinir` maddesi var (`_sinav.py`: 0 eksik).

## ② Bulamadığım / doğrulayamadığım
- `heiyue-purang` (künye yazılmadı): TDV araması (`Guge`, `Ladak`) sonuç vermedi; akademik kaynak açılamadı; Wikipedia özetleri kendi içinde çelişik
  (Nyimagon c. 912/919/930; Guge-Purang bölünme c. 930; Yeshe-Ö Guge 967; Tholing 996/997). f=0930, t=null girdi taslağı doğrulanamadı → tarih uydurmamak için YAZILMADI.
- `guge`: girdi `taslak`; ham kaynaktan yeniden doğrulayamadım (Petech 1977, Vitali 1996, Handa 2001 açılmadı). Kronolojiye madde eklenmedi.
- Tholing/Tsaparang/Purang yerleşimleri: Tibet kaynağı + çift tanık yok → yazılmadı. Guge/Heiyue-Purang bu yüzden haritada nokta alamıyor.
- Daming (Da Qi başkenti 1130-1132), Huining (Jin Shangjing), Qingtang (=Xining, atlasta mevcut): Daming/Huining için çift tanık yok → yazılmadı.
- Dingan: başkent/yer bilinmiyor (ms1 künyesi «Fuyu?»); Song shi 491 kuruluş yılı vermez → yerleşim yazılmadı; f=0938 bu sayfada DOĞRULANMADI (ilk tarihli tanık 970, son 991).
- Batı Xia: Xingqing'in 1023-1038 sahibi (Li Deming'in Xia yönetimi); Zhongxing'in düştüğü gün (Yuan shi 1: «六月», gün yok) → 1227 yıl hassasiyeti.
- Dali: Da Changhe→Da Tianxing devri (928) ve süre çelişkisi (Yang hanedanı 8 ay / 2 yıl / 8 yıl: 南詔蒙段野史 · 滇載記 · 讀史方輿紀要) kaynaklar arası çözülemedi; t=937 en çok desteklenen değer.
- Moğol takvimi ile Song takvimi arasında ±1 gün olasılığı (Dali 1254-01-02).
- Luoyang/Chengdu/Taiyuan/Nanjing/Xining için Song→Jin/Moğol/Yuan devri (1127-1281) bu kümede YOK; yama zincirleri bu yüzden 960/965/1126/976/1104'te biter (aşağıda DEVAM listesi). Yuan (`yuan-hanedani`, 12 mevcut madde) ve Jin'in ilk yarısına kronoloji eklenmedi.
- «kismen-okundu» kayıtlardan yeniden doğrulananlar: Dali (937 ve 1253→1254), Jin (yalnız Kaifeng 1127-1138 ve Taiyuan 1126 devirleri), Sonraki Shu/Güney Tang/Kuzey Han/Zhou/Han/Jin (Xin Wudai shi + Song shi + Zizhi tongjian ile gün hassasiyeti); doğrulanamayanlar: Guge, Sakya (yalnız Yuan shi 202), Doğu Xia (ay düzeyi).

## ③ Kararlar / istekler
### KUNYE_MAIN_DA düzeltme önerileri (dosyaya yazılmadı)
| id | atlas | doğrulanan | kaynak |
|---|---|---|---|
| sonraki-tang-5hanedan (bu kümenin değil) | t 0936-01-01 | **0937-01-11** | Xin Wudai 7 (辛巳) |
| sonraki-jin-5hanedan | t 0947-01-01 | **0947-01-10** (ZZ'ye göre Liao'nun girişi 0947-01-25; ic_not'ta) | Xin Wudai 9 |
| sonraki-han-5hanedan | f 0947-01-01 (devletler.js) / girdi 0947-03-10 | **0947-03-10** (辛未) ; t: 951-01-02 imparatorun ölümü, Kaifeng devri 951-02-13 | Xin Wudai 10/11 |
| sonraki-zhou-5hanedan | f 0951-01-01, t 0960-01-01 | **f 0951-02-13 · t 0960-02-04** (feragat 0960-02-03) | Xin Wudai 11/12 |
| sonraki-shu | f 0934-01-01, t 0965-01-01 | **f 0934-03-16 · t 0965-02-17** | ZZ 278 · Song shi 2 |
| guney-tang | f 0937-01-01, t 0975-01-01 (iskelet 0937-11-11) | **f/kuruluş 0937-11-10 · t 0976-01-01** | ZZ 281 · Song shi 3 |
| kuzey-han-10krallik | t 0979-01-01 | **0979-06-03** (Gaoping 0954-04-24, iskelet 0954-01-01) | Song shi 4 |
| dali-kralligi | t 1253-01-01 | **1254-01-02** | Yuan shi 4 · Song shi 43 (ay hizası) |
| tsongkha | t 1104-01-01; iskelette 1102 «ilhak» | **t 1104-05-08**; 1102 maddesi Song shi 492/19 ile örtüşmez (1099-10-06 kısa işgal; 1104-06-06 adı Xining) | Song shi 18, 19, 492 |
| bati-xia | f 1038-01-01 | f genişletme önerisi: Li Deming 1023 (Xingzhou) / «Xia kralı» dönemi; t=1227 ay düzeyi (6. ay) | Song shi 485 · Yuan shi 1 |
| dingan-guo (ms1 künyesi) | f 0938-01-01 | f DOĞRULANMADI (ilk tarihli tanık 0970-01-01), t 0991 son anış | Song shi 491 |
| da-chu-zhang-bangchang (ms1) | f 1127-03-01, t 1127-04-01 | **f 1127-04-20 · t 1127-05-16** | Song shi 23/24/475 |
| da-qi-liu-yu (ms1) | f 1130-01-01, t 1137-01-01 | **f 1130-09-01 (atama) / 1130-10-12 (tahta) · t 1138-01-02** | Song shi 475/28 · Jin shi 77 |
| heiyue-purang / guge | — | heiyue-purang ile guge birleştirilmesi (aynı Purang-Guge hattı) önerilir; f=1000 için dayanak bulunamadı | — |

### YAMA GEREKLİ (makine okunur: `yama_dogu_cin3.js`)
- **Kaifeng**: önek 0937-01-11 sonraki-jin → 0947-01-10 liao-hanedani → 0947-07-01 sonraki-han → 0951-02-13 sonraki-zhou → 0960-02-04 song → 1000-01-01 (mevcut song başı). Ek parçalar: da-chu 1127-04-20→1127-05-16 · da-qi 1130-10-12→1138-01-02; DEVAM: 1127-05-16 song, 1138-01-02 jin (sonrası ms1 zincirinde).
- **Luoyang**: 0937-01-11 sonraki-jin → 0947-01-10 liao → 0947-06-23 sonraki-han → 0951-02-13 sonraki-zhou → 0960-02-04; DEVAM: song 960-02-04→(1127?) ve sonrası başka kümede.
- **Çengdu (Chengdu)**: 0934-03-16 sonraki-shu → 0965-02-17; DEVAM: song 965-02-17→(Moğol 1236) ve sonrası.
- **Taiyuan**: 0936-11-28 sonraki-jin → 0947-03-10 sonraki-han → 0951-02-24 kuzey-han → 0979-06-03 song → 1126-09-21; DEVAM: jin 1126-09-21→(Moğol).
- **Nanking (Nanjing)**: 0937-11-10 guney-tang → 0976-01-01; DEVAM: song 976-01-01→...; önceki yang-wu başka kümede.
- **Hangzhou**: 0978-06-09 song → 1000-01-01 (mevcut song başı).
- **Dali**: 0928-01-01 da-tianxing → 0929-01-01 da-yining → 0937-01-01 dali-kralligi → 1254-01-02 mogol-imparatorlugu → 1281-01-01 (mevcut yuan başı).
- **Xining (=Qingtang)**: 1032-01-01 tsongkha → 1104-05-08; DEVAM: song 1104-05-08→...
- **Yinchuan (Ningxia) (=Xingqing)**: 1038-01-01 bati-xia → 1227-01-01 → mogol-imparatorlugu 1227-01-01 → 1281-01-01 (mevcut yuan başı).

### Boya ihtiyacı (`arac/renkler.py BOYALAR` — bu worktree'nin dosyasında YOK; `grep` ile ölçüldü, main'in güncel BOYALAR'ı ölçülmedi)
Yeni künye: da-tianxing, da-yining, ba-devleti. Mevcut künye ama BOYALAR'da bulunmayanlar: sonraki-jin-5hanedan, sonraki-han-5hanedan, sonraki-zhou-5hanedan, sonraki-tang-5hanedan,
guney-tang, sonraki-shu, kuzey-han-10krallik, tsongkha, wuyue, yang-wu, dingan-guo (ms1), da-chu-zhang-bangchang (ms1), da-qi-liu-yu (ms1). (liao-hanedani, song, dali-kralligi, bati-xia, mogol-imparatorlugu, yuan-hanedani, jin-hanedani, dongxia, sakya, guge BOYALAR'da var.)

### Yeni tür önerisi
`kronoloji.tur` sözlüğüne `siyaset` ve `baskent` (mevcut dosyalarda zaten kullanılıyor) eklenmesi ya da bu iki türün `siyaset`→`baskent` ayrımının onaylanması. `bolge` için yeni değer gerekmedi.

### Çatışmalar (ic_not'ta iki kaynağıyla beyan edilenler)
Kaifeng 947: Xin Wudai 9 (01-10) ↔ ZZ 286 (01-25) · Jin sonu: Song shi 28 丁未 (1138-01-02) ↔ Song shi 475 丙午 (01-01) · Da Chu süresi «40 gün» (Li Gang) ↔ gün hesabı 26 gün ·
Dali: Yang hanedanı 8 ay / 2 yıl / 8-9 yıl · Tsongkha: Song shi'ye karşı atlas künyesi (1102).

### İstek
1. Karar: yeni yerleşim noktaları (Daming, Huining, Purang, Tholing/Tsaparang) için ikinci koordinat tanığı olarak Pleiades yerine başka bağımsız kaynak (CHGIS / TDV Haritası vb.) kabul edilsin mi? Kabul edilirse Da Qi (Daming), Jin Shangjing (Huining) ve Guge/Purang noktaları açılır.
2. Cambridge History of China cilt 3/5/6 ve Backus (Dali), Petech/Vitali (Guge) tam metni (kurum erişimi) — Dali süre çelişkisi ve Guge/Heiyue-Purang için.
3. Song→Jin→Moğol zincirleri (Luoyang, Chengdu, Taiyuan, Nanjing, Xining 1104-1281): ayrı bir iş olarak (Song/Jin/Yuan cin kümesi).
