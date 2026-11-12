# ÇİN DENETİMİ — 11/12 Kasım 2026 (CIN-DENETIM-1111)

Kapsam: Çin devlet zinciri 1279–2000 (atlas ufku `VERI_UFKU` 2000-12-31) — Yuan → Ming → Sonraki Jin/Qing → Çin Cumhuriyeti
(Beiyang/Nanking, Tayvan) → ÇHC; çevre: Kuzey Yuan, Oyrat, Tibet (Sakya, Phagmodrupa, Ganden Phodrang), Cungar, Hoşut,
Doğu Türkistan (Yakup Bey, 1933 ve 1944–49 cumhuriyetleri), Moğolistan, Tannu Tuva, Mançukuo ve öteki Japon işgal yapıları,
Kore/Ryukyu haraçgüzarlığı, Tungning/Formosa, Hong Kong, Makao, kiralık topraklar, Rus antlaşmaları.

**Tür: YALNIZ DENETİM.** `data/` altında hiçbir dosya değişmedi. Bu belge bulgu ve öneri listesidir; düzeltmeleri
koordinatör dağıtacak.

## Yöntem ve ölçüm koşulları (önce bunu okuyun)

- **Makine: UMIT** (eczaneyle ortak; CLAUDE.md'ye göre atlas işi verilmemesi gereken makine). Ölçüm sırasında boş fiziksel
  bellek ~1–2 GB'a, bir ara 1 MB'a düştü. Bash süreç başlatamadı. Emre'nin talimatı: gece yarısına kadar yalnız token işi.
  ⇒ **`py arac/denetle.py` koşturulmadı.** Değişmez 2 (±30 gün) ölçümü örneklemle, Grep'le yapıldı. Sistematik ölçüm
  yok: **ölçülemedi (2) ≠ temiz.**
- Dört dönem alt ajanı yalnız Grep/Read/WebFetch/WebSearch kullandı: A 1279–1644 · B 1644–1911 · C 1911–1949 ·
  D 1949–2000. Her parça aşağıda olduğu gibi duruyor. Bölüm sonlarında kendi "Sayılar" ve "Ölçülemedi" listeleri var.
- **Takvim:** sinocal.sinica.edu.tw (兩千年中西曆轉換) bütün ajanlara **401 verdi**. Ay-güneş günleri, kaynaktaki 干支 gününden
  JDN formülüyle (JDN+49 mod 60) hesaplandı. Formül atlasın 7 kesin günüyle sınandı ve hepsi tuttu: 1279-03-19, 1368-01-23,
  1368-09-14, 1449-09-01, 1616-02-17, 1619-04-14, 1644-04-25. Yine de **"[hesap]" etiketli her gün düzeltmeden önce
  sinocal/NAOJ ile bir kez teyit edilmeli.** Özellikle artık ayın bulunduğu yıllarda ay sınırı ±1 ay şaşabilir.
- Birincil kaynak olarak okunanlar: 元史 42; 明史 1, 2, 3, 6, 7, 9, 22, 23, 24; 清史稿 1, 4 (zh.wikisource neşirleri).
  Ayrıca TDV «Türkistan», kotobank (Nihon Daihyakka, Yamakawa), JACAR, FRUS 1941, AJIL 1915, Xinhua, Fudan Tibet arşivi.
  中国大百科全书 (zgbk.com) maddeleri aramada doğrudan çıkmadı: **bulunamadı**. БРЭ (bigenc.ru) 401 verdi.
- "DOĞRULANMADI" ya da "genel bilgi" diye işaretli günler model bilgisidir; düzeltme olarak uygulanmadan önce kaynak okunmalıdır.

## Sayılar (dört parçanın toplamı)

| | A 1279–1644 | B 1644–1911 | C 1911–1949 | D 1949–2000 | Toplam |
|---|---|---|---|---|---|
| Künye denetlendi | 14 | 24 | 14 | 7 | ~50 (örtüşmeli; ayrı künye ~45) |
| Kronoloji maddesi okundu | ~112 (~30 kaynakla) | ~95 | ~60 | ~48 | ~315 |
| Yerleşim kaydı okundu | ~95 (60 kırılma kaynakla) | ~45 zincir + 110 isyan dilimi | ~75 | ~30 ayrıntılı + 147 ÇHC dilimi | ~245 ayrıntılı |
| Ana bulgu | 24 | ~33 | 18 | 17 | **~92** |

Sınıflara göre (yaklaşık): TAKVİM 10 · TARİH-HATA ~25 · SESSİZ-DEĞİŞİM 9 küme (≈45 yerleşim kırılması) · EKSİK-MADDE ~12
küme (≈40 madde) · EKSİK-DEVLET 6 küme (≈12 künye adayı) · SINIR / yanlış sahip ~17 · HAYALET 5 · ÇELİŞKİ ~24 ·
KAYNAKSIZ 4 tablo (~35 satır) · TARTIŞMALI seçenek 8 (Tibet ×3, Tayvan, Makao, Aksai Chin, Nurgan, Japon işgal ölçütü).

## En önemli 10 bulgu (haritayı en çok etkileyenler önce)

1. **Mançukuo canlı haritada yok** (C-1). Mukden, Liaoyang, Cilin, Harbin, Qiqihar, Ningguta, Aigun ve Cehol 1932–45'te
   `cin-cumhuriyeti` boyanıyor; `mancukuo` yalnız Hsinking noktasında var. Kaynaklı doğru zincir
   `yer_yama_1923_1945.js:7711–7923`'te duruyor ama canlı `yerlesimler*.js`e inmemiş. Hiç mi inmedi, DUNYA-1102 (3–4 Kasım)
   turunda mı ezildi: ölçülemedi. Yama dosyasının son commit'i `3bd402d10`.
2. **«1368-04-01» toplu Yuan→Ming kırılması** (A). Yaklaşık 32 yerleşimin hiçbirinin kaynağı yok. 洪武元年**四月**'in ay
   sayısı Batı ayı gibi yazılmış (TAKVİM). Üstelik yanlış bölgeyi kapsıyor: Ming shi 2'ye göre Xi'an 1369-04-12'de,
   Gansu 1372'de geçti, Dunhuang 1368'de hiç geçmedi. ±30 gün içinde tek madde yok (SESSİZ). Şehir şehir günler A'da.
3. **Ay-güneş günü Batı günü sanılmış — Dashun zinciri** (A + B). Xi'an, Tongguan ve Yan'an'da «1643-10-11» yazıyor; doğrusu
   Tongguan **1643-11-16**, Xi'an **1643-11-22** (明史 24). Xi'an'ın Qing'e geçişi «1645-01-18» → **1645-02-14** (清史稿 4).
   Luoyang 1641-03-08 → 1641-03-01. Aynı hata türü: Kaifeng seli 1642-09-01 → 1642-10-08; Kızıl Sarıklılar 1351-05-01 →
   1351-05-28; Taiping Wuchang «Aralık 1852» → 1853-01-12; muhtemelen 1550-08-01 (Gengxu) ve 1678-03-01 (Wu Sangui).
4. **Ming hayaleti ve yanlış sahip** (B). 17 yerleşim, Ming künyesinin bittiği 1644-04-25'ten sonra da Ming kalıyor;
   Penghu 1661'e kadar. Chengdu ve Chongqing `dashun`a verilmiş, doğrusu `daxi-zhang`. Dashun dilimleri künyenin
   başlangıcından önce açılıyor (1641, 1643). Dashun künyesinin üç ucu da yanlış: f 1644-02-08, Pekin terki 1644-06-02,
   t 1645.
5. **Liaodong ve Sonraki Jin** (A). Mukden, Liaoyang ve Lüşun 1368-09-14'ten beri Ming görünüyor; gerçekte 1371.
   Qing'e geçişleri «1621-01-01» yazılmış; doğrusu Shenyang **1621-05-04**, Liaoyang **1621-05-11**, Lüşun **1633-08-18**.
   Bunlara kronoloji maddesi de yok. Sonraki Jin'in 1616–21 arasında tek yerleşimi yok: Mançurya Amur'a kadar Ming'e
   emiliyor. Hetu Ala, Fushun, Kaiyuan, Tieling, Guangning ve Jinzhou noktaları önerildi.
6. **ÇHC'nin 1949-10-01 toplu kırılması** (C-13, D-5). Yaklaşık 140 yerleşimin kaynağı "ilan 1949-10-01, tsv kunye",
   yani atlasın kendi künyesi. Bu yüzden Kanton (10-14), Guilin, Chongqing (11-30), Nanning, Kunming (12-09), Chengdu
   (12-27) ve Mengzi (1950-01-16) erken ÇHC görünüyor. Pekin (01-31), Nanking (04-23) ve Şanghay (05-27) ise 10-01'e kadar
   ÇC kalıyor; ÇKP denetim bölgeleri için künye yok. Bu bir Emre kararı (C-13 seçenekleri).
7. **Japon işgali iki ölçütle yazılmış** (C-2). Hainan 1939–45 `s:` ile `meiji-japonya`. Buna karşılık Mengjiang,
   Wang Jingwei Nanjing ve Doğu Hebei'nin haritada tek noktası yok; Kuzey ve Doğu Çin 1937–45 arasında düz ÇC ve `isg:`
   da yok. Hangi ölçüt tutarlı uygulanacak: Emre kararı.
8. **Doğu Türkistan 1864–1878 ve 1757–59** (B). Eksik yapılar: İli Taranchi Sultanlığı (1864–71; Gulca o yıllarda qing),
   Ürümçi Dungan rejimi (1864–70), Hotan Habibullah rejimi (1864–66), Hoca kardeşler (1757–59). Tarih hataları: Turfan
   1876-08-18 → **1877-05-16** (TDV esas); Hotan 1878-01-02. Yakup Bey künyesinin t 1878-03-16'sının kaynağı yok;
   Kaşgar için üç gün var, TDV'ye göre 1877-12-16. İli'nin Rus işgali (1871-07-04) ile iadesi (1882-03-22) için madde yok.
9. **Moğolistan 1919–21** (C-3/4). Çin'in Urga'daki denetimi Temmuz değil Şubat 1921'de (Ungern) bitiyor; gün kaynaklarda
   çelişkili, DOĞRULANMADI. Kobdo'da 1919–21 Çin dönemi hiç yok. Kyahta 1915-06-07 maddesi eksik (AJIL ile doğrulandı).
10. **Yuan sonu isyancı devletleri ve Ming Xia** (A). Jiangnan, Zhu Yuanzhang'ın 1356'dan beri tuttuğu Nanjing dahil,
    1368-01-23'e kadar Yuan boyanıyor. Oysa atlasın kendi `yerlesimler_nokta_asya_0917.js` dosyası aynı dönemi beyanlı
    boşluk yapıyor (ÇELİŞKİ). Ming Xia (Chongqing ve Chengdu, 1363–1371) ile Oyrat künyeleri yok.

Öteki önemli bulgular: Tungning'in teslimi için üç gün var (1683-08-01 / 10-03 / 10-05). Kyahta maddesi aslında Bur
antlaşmasının Jülyen günü (Gregoryen 1727-08-31). Kunming/Dali 1382-01-06 yerine 01-16 / 04-07 (atlasın a78 dosyası zaten
doğru). Pekin'in başkent oluşu 1421-02-02. Ming–Annam için üç gün var. Çamdo 1950-10-19 (D-1). Lüşun'da 1945–55 Sovyet
üssü yok. Zhoushan, Dachen, Aksai Chin, Weihaiwei, Guangzhouwan, Kowloon ve Yeni Topraklar için yerleşim noktası yok.
ÇC'nin 1971/1987/1996/2000 maddelerinde kamera Pekin'e ya da Nanking'e gidiyor (Taipei olmalı). Hejian/Leshou'nun DEVRALMA
kaynak metni Mukden, Datong ve Taiyuan'a kopyalanmış: kayıtlar kaynaklı görünüyor ama değil (A, KAYNAKSIZ notu).

## Parçalar arası örtüşme ve uzlaştırma

- **Xi'an / Tongguan / Yan'an 1643** hem A'da hem B'de var. B üçüne de 11-22 önerdi; A Tongguan için 明史 24'ün ayrı günü
  丙寅 = **1643-11-16**'yı buldu. **A esas alınmalı**: Tongguan 11-16, Xi'an 11-22, Yan'an [araştır].
- **Dashun künye f**: A ve B ikisi de 1644-02-08 (崇禎17 正月初一) buldu. B'nin önerisi f'yi 1643'e (Xiangyang «新順王»)
  genişletmek; A'nın Luoyang 1641 önerisi ise dilimi kırpmak (Li Zicheng şehri tutmadı). İkisi uyumlu.
- **1949 şehir düşüşleri** hem C-13'te hem D-5'te var; aynı öneri, tek iş olarak dağıtılmalı.
- **Makao 1557–1887** (A ve B) ile **Tibet** (A 1354–1642, B 1720/1751, C 1913, D 1950–51/1959) tartışmalı seçenekler.
  Taraf tutan düzeltme önerilmedi; her parçada iki tarafın kaynağı ayrı yazıldı.
- **Penghu 1644–1661** (B HAYALET): A'nın alanına girmedi; B'nin önerisi geçerlidir.

## Emre'den beklenen kararlar

1. 1945–49 ÇKP denetim bölgeleri için künye açılsın mı, yoksa şehirler ÇHC'ye kendi düşüş günlerinde mi geçsin (C-13 / D-5)?
2. Japon işgali ölçütü: Mengjiang ve Wang Jingwei'ye `s:` mi verilsin, Hainan `isg:`e mi taşınsın (C-2)?
3. Tibet: Çamdo ile Lhasa aynı ölçütte olsun; antlaşma günü (1951-05-23) mi, fiilî giriş günü (1951-10-26) mi (D-1/2)?
   1913 bildirisi nasıl yazılsın (C-7)? Ming dönemi (A)?
4. Makao 1557–1887 (A, B); Tungning künye f 1650 mi, 1661/62 mi (B); Aksai Chin noktası (D-7); Lüşun Sovyet üssü
   `isg:` mi (C-18 / D-3)?
5. Yuan sonu isyancıları: Ming künyesini Wu krallığına mı genişletmeli (seçenek a), yoksa ayrı künyeler mi açmalı (b) (A)?

## Ölçülemedi (toplu)

- `denetle.py`, renk ve koşu çıktısı: makine yükü ve süreç yasağı yüzünden koşturulmadı. Aksai Chin, Arunachal, Shaksgam,
  Zhoushan ve Pratas'ın haritada hangi renge boyandığı bilinmiyor.
- sinocal 401 verdi: bütün çeviriler hesap, tablo teyidi yok. zgbk maddeleri bulunamadı. БРЭ 401 verdi.
- Mançukuo yamasının akıbeti: git pickaxe araması (`git log -S`) ağır olduğu için koşturulmadı.
- Okunmayan dosyalar: `kronoloji_cok_1923_1945.js`, `kronoloji_japonya.js`, `kronoloji_portekiz.js`,
  `kronoloji_ingiltere.js`, ve `yer_yama_cin.js`'nin ayrıntısı. Bu yüzden aynı olayın bu dosyalarda farklı günle geçip
  geçmediği ölçülmedi.

---

## ÇİN DENETİMİ — Parça A (1279–1644)

Ağaç: `C:\atlas\.claude\worktrees\pensive-engelbart-7e58ff` (KASA değil: UMIT; yalnız Grep/Read/WebFetch, süreç başlatılmadı).

**Takvim yöntemi:** sinocal.sinica.edu.tw bu oturumda **401 verdi (erişilemedi)**. Bu yüzden günler 干支 gününün JDN formülüyle hesaplandı:
(JDN+49) mod 60 (0=甲子). Formül atlasın kendi çapalarıyla sınandı: 1644-04-25 G = 丁未 ✓, 1368-01-23 J = 乙亥 ✓,
1368-09-14 J = 庚午 ✓, 1279-03-19 J = 癸未 ✓, 1449-09-01 J = 壬戌 ✓, 1616-02-17 G = 壬申 ✓, 1619-04-14 = 甲申 ✓.
Ay sınırı, kaynaktaki ay adına ve komşu çapalara göre seçildi. **Aşağıda "[hesap]" diye işaretli her gün sinocal'la bir kez
teyit edilmeli** (ay sınırı ±1 ay belirsizliği olabilen yerlerde ayrıca yazdım).

---

## 1. Doğrulanan çekirdek günler (bulgu DEĞİL, kayıt için)

| Olay | Atlas | Kaynak | Sonuç |
|---|---|---|---|
| Yamen, Song sonu | 1279-03-19 (song t, yuan kronoloji) | 祥興二年二月癸未 | ✓ Jülyen |
| Ming kuruluşu | 1368-01-23 | Ming shi 2 洪武元年正月乙亥 | ✓ Jülyen (正月初一 = 1368-01-20) |
| Dadu/Yuan sonu | 1368-09-14 | Ming shi 2 «八月…庚午，徐達入元都» | ✓ (Toghon'un kaçışı 閏七月丙寅 = 1368-09-10 [hesap]) |
| Ming sonu | 1644-04-25 | Ming shi 24 «丁未，昧爽，內城陷。帝崩» | ✓ Gregoryen |
| Tumu | 1449-09-01 | 正統十四年八月壬戌 | ✓ |
| Sarhu | 1619-04-14 | 清史稿 1 «三月甲申朔，清旦，師行» | ✓ Gregoryen |
| Qing adı | 1636-05-15 | 崇德元年四月乙酉 | ✓ |
| Qing Pekin'e girişi | 1644-06-06 | 清史稿 4 五月己丑 | ✓ |
| Joseon kuruluşu | 1392-08-05 | Sillok Taejo 1/7/17 丙申 | ✓ (önceki denetimde düzeltilmiş) |
| Zheng He 1. sefer | 1405-07-11 | Ming shi 6 «夏六月己卯，中官鄭和帥舟師使西洋» | ✓ |
| Yongle'nin ölümü | 1424-08-12 | Ming shi 7 «辛卯，崩» | ✓ |
| Şanhayguan savaşı (Ming t) | 1644-05-27 | 崇禎十七年四月二十二 | ✓ [hesap] |
| Ming-Annam t | 1427-11-12 | Ming shi 9 «十月戊寅，王通棄交阯，與黎利盟» | ✓ 戊寅 = 1427-11-12 J [hesap] |

---

## 2. Bulgular

### 1368-04-01 «toplu Yuan→Ming kırılması»: takvim hatası + yanlış bölge + sessiz değişim
- Kimlik: data/yerlesimler_asya.js — Xi'an 1853-1854, Luoyang 1898-1899, Kaifeng 1923, Zhengzhou 1931, Lanzhou 2251-2252, Zhangye 2269-2270, Dunhuang 2289-2290, Xining 2306-2307, Yinchuan 2316-2317, Kanton 2347, Makao 2360, Zeytun 2377, Fuzhou 2407, Amoy 2419, Zhangzhou 2427, Chaozhou 2436, Swatow 2446, Guilin 2453, Nanning 2462, Beihai 2471, Haikou 2483, Danzhou 2498, Yazhou 2505, Wanzhou 2512, Wuzhou 2519, Penghu 2560, Kinmen 2637, Matsu 2646, Tongguan 3036, Yan'an 3043, Şaoguan 3059, Leizhou 3066 (≈32 kayıt; hepsi `kaynak:` YOK)
- Atlasta: `{f:"1281-01-01", t:"1368-04-01", d:"yuan-hanedani"}` + `{f:"1368-04-01", …, d:"ming-hanedani"}`
- Kaynak: Ming shi 卷2 (zh.wikisource.org/wiki/明史/卷2, okundu). Fethin gerçek sırası (gün [hesap], Jülyen):
  - Fujian: 正月 «湯和克延平…福建平» (庚子'den sonra) ≈ 1368-02-17
  - Kaifeng: 三月己亥 «徐達徇汴梁» = 1368-04-16 · Tongguan: 四月丙寅 «馮勝克潼關» = 1368-05-13 · Henan (Luoyang): 四月 戊申'den sonra «河南平» ≈ 1368-04-25
  - Kanton: 四月 «元守臣何真降，廣東平» ≈ 1368-04-18..05-16 · Wuzhou: 五月己卯 = 1368-05-26 · Hainan: 六月甲辰 «海南、海北諸道降» = 1368-06-20
  - Guilin (靖江): 六月壬戌 = 1368-07-08 · Guangxi tamam: 七月戊子 «廣西平» = 1368-08-03
  - **Xi'an (奉元): 洪武二年三月庚子 «徐達至奉元» = 1369-04-12** · Lintao 1369-05 · Qingyang/Shaanxi tamam: 二年八月癸未 (1369)
  - **Gansu (Zhangye/Jiuquan): 五年六月戊寅 «馮勝克甘肅» (1372)** · Xining, Ningxia: Ming shi 2'de 1368-72 arası adla geçmiyor
  - **Dunhuang (沙州): 1368'de Ming'in eline hiç geçmedi** — 1372 seferi «追敗元兵於瓜、沙州» yalnız takip; Shazhou Wei 1404 (yerel Moğol beyliği, 羈縻)
- Sınıf: TAKVİM (04-01 = 洪武元年**四月** ay sayısının Batı ayı sanılması; 四月初一 ≈ 1368-04-18 J) + TARİH-HATA (kuzeybatı 1-4 yıl erken) + SESSİZ-DEĞİŞİM (±30 günde hiç madde yok: `kronoloji*/olaylar*` içinde 1368-03..05 aralığında 0 madde, ölçüldü)
- Öneri: tek tek şehir günü: Fuzhou/Zeytun/Amoy/Zhangzhou ≈1368-02-17 (Fujian, yıl-ay beyanı); Kaifeng 1368-04-16; Zhengzhou/Luoyang 1368-04-25 (beyan); Tongguan 1368-05-13; Kanton/Chaozhou/Swatow/Şaoguan 1368-04-18 (ay başı, beyan); Wuzhou 1368-05-26; Hainan (Haikou/Danzhou/Yazhou/Wanzhou/Leizhou) 1368-06-20; Guilin 1368-07-08 (atlasın kendi Chenzhou kaydı zaten bu günü Ming shi'den okumuş: yerlesimler_nokta_asya_0917.js:178); Nanning/Beihai 1368-08-03; **Xi'an 1369-04-12; Yan'an/Lanzhou 1369 (Shaanxi seferi; ay [hesap gerek]); Zhangye/Yinchuan 1372 (yıl); Xining 1373 (西寧衛, yıl — teyit gerek); Dunhuang: 1368-1404 kuzey-yuan, 1404 sonrası yerel Shazhou Wei (beyan)**. Arada 1368-09-14'ten sonraki kuzeybatı dilimi → `kuzey-yuan` (Köke Temür/Li Siqi). Her gün için kronoloji maddesi (Kanton 何真降, Kaifeng, Xi'an, Gansu 1372) yazılmalı.

### Taiyuan, Datong, Pingyao: 1368-09-14 Ming başlangıcı erken
- Kimlik: data/yerlesimler_asya.js:1789 (Datong), 1795 (Taiyuan), 1802 (Pingyao)
- Atlasta: `{f:"1368-09-14", …, d:"ming-hanedani"}` (kaynak: Hejian/Leshou DEVRALMA)
- Kaynak: Ming shi 2: «十二月丁卯，徐達克太原，擴廓帖木兒走甘肅，山西平» = 1369-01-09 J [hesap]; «二年春正月庚申，常遇春取大同» = 1369-03-03 J [hesap]
- Sınıf: TARİH-HATA
- Öneri: Taiyuan/Pingyao f=1369-01-09; Datong f=1369-03-03; 1368-09-14→o gün arası `kuzey-yuan` (Köke Temür). Kronoloji maddesi: «Xu Da Taiyuan'ı aldı, Shanxi Ming'e geçti» (1369-01-09).

### Liaodong (Mukden, Liaoyang, Lüşun): Ming başlangıcı 1368, Sonraki Jin geçişi «1621-01-01»
- Kimlik: data/yerlesimler_asya.js:2727-2728 (Mukden), 2743-2744 (Liaoyang), 2784-2785 (Lüşun)
- Atlasta: `{f:"1368-09-14", t:"1621-01-01", d:"ming-hanedani"}` → `{f:"1621-01-01", d:"qing-hanedani"}`; kaynak alanı Hejian/Leshou metni (Liaodong'la ilgisiz)
- Kaynak:
  - Giriş: Ming shi 2 洪武四年二月 «元平章劉益以遼東降» (1371; gün kaynakta yok); Naghachu'nun teslimi Ming shi 3 洪武二十年六月 «丁未，納哈出降» (≈1387-07-14 J [hesap, ay sınırı teyitsiz])
  - Çıkış: Ming shi 22 天啟元年三月 «乙卯，大清兵取瀋陽» = **1621-05-04 G**; «壬戌，大清兵取遼陽» = **1621-05-11 G** [hesap]; 清史稿 1 «癸亥，入遼陽» = 1621-05-12 (bir gün fark, ÇELİŞKİ ic_not'a)
  - Lüşun: Ming shi 22 天啟五年正月 «癸亥，大清兵取旅順» (1625, geçici); Ming shi 23 崇禎六年 «秋七月甲辰，大清兵取旅順，總兵官黃龍死之» = **1633-08-18 G** [hesap; 7. ay içinde tek 甲辰]
- Sınıf: TARİH-HATA (giriş 3 yıl erken, çıkış yıl-temsili) + SESSİZ-DEĞİŞİM (1621-01-01 ±30 günde madde yok; Liaoyang/Shenyang 1621 maddesi hiçbir kronoloji dosyasında yok, ölçüldü) + KAYNAKSIZ (devralınmış kaynak başka şehre ait)
- Öneri: Mukden/Liaoyang f(Ming)=1371-01-01 (yıl; 洪武四年二月, BEYAN), 1368-09-14→1371 `kuzey-yuan`; Mukden t=1621-05-04, Liaoyang t=1621-05-11 (ya da 清史稿 ile 05-12, ic_not'ta iki gün); Lüşun t=1633-08-18 (1625 geçici alış not). Kronoloji: «Sonraki Jin Shenyang'ı aldı» 1621-05-04, «Liaoyang düştü» 1621-05-11, «Lüşun düştü» 1633-08-18.

### Sonraki Jin'in 1616-1621 toprağı haritada yok; Mançurya 1368-1621 Ming'e emiliyor
- Kimlik: yerleşim taraması (Grep `Hetu Ala|Fushun|Nurgan|Jinzhou|Ningyuan` → 0 kayıt; Cilin kur 1673, Ningguta kur 1653, Aigun kur 1683)
- Atlasta: 1616-1621 arasında `qing-hanedani` sahibi tek bir yerleşim yok; Mukden'in kuzeyi/doğusu en yakın Ming peteğine (Mukden, Liaoyang) emiliyor → harita Ming'i Amur'a dek gösteriyor, Sonraki Jin 1616'da kurulmuş görünmüyor
- Kaynak: 清史稿 1: «天命元年丙辰春正月壬申朔，上卽位，建元天命，定國號曰金» (= 1616-02-17 G [hesap]; Hetu Ala); 天命三年 Fushun (Li Yongfang teslim); 天命四年 六月 Kaiyuan, 七月 Tieling; 天命七年正月 «庚申，上入廣寧» = 1622-03-05 G [hesap]; Ming shi 24 崇禎十五年 «二月戊午，大清兵克松山», «三月己卯，祖大壽以錦州降»
- Sınıf: EKSİK-YERLEŞİM / SINIR (+ Değişmez 2 evreninde kazanç maddesi yok)
- Öneri: yeni yerleşimler: Hetu Ala (41.68K 124.96D; 1616-02-17 qing), Fushun (1618, gün [araştır]), Kaiyuan (1619-06/07), Tieling (1619-07/08), Guangning/Beizhen (1622-03-05), Jinzhou (1642, 崇禎十五年三月己卯), Ningyuan/Xingcheng (Ming'de 1644'e dek). Nurgan (Tyr, 52.9K 139.8D) için 1409 奴兒干都司 penceresi — TARTIŞMALI (aşağıda).
- Ayrıca: kronoloji_cin.js:373 «1616-01-01 Nurhaci» gün artık bulunabilir: 天命元年正月壬申朔 = **1616-02-17 G** [hesap; ic_not "doğrulanamadı" diyordu]; qing künyesi f da 1616-02-17'ye.

### Xi'an / Tongguan / Yan'an Dashun'a geçişi «1643-10-11» — ay-güneş günü Batı günü yazılmış
- Kimlik: data/yerlesimler_asya.js:1854-1855 (Xi'an), 3037-3038 (Tongguan), 3044-3045 (Yan'an)
- Atlasta: `{f:"1368-04-01", t:"1643-10-11", d:"ming-hanedani"}`, `{f:"1643-10-11", …, d:"dashun"}`
- Kaynak: Ming shi 24 (zh.wikisource.org/wiki/明史/卷24, okundu): 崇禎十六年冬十月 «丙寅，李自成陷潼關，督師尚書孫傳庭死之» = **1643-11-16 G**; «壬申，李自成陷西安» = **1643-11-22 G** [hesap; 10/11 ve 10/17'ye düşer]
- Sınıf: TAKVİM (崇禎16年10月11日 → "1643-10-11") + SESSİZ-DEĞİŞİM (1643-1x için madde yok) + HAYALET (dashun künye f=1644-01-01, dilim 1643'te başlıyor)
- Öneri: Tongguan t=1643-11-16, Xi'an t=1643-11-22; Yan'an [gün araştır]. Kronoloji maddeleri. Dashun künyesi: ya f=1643 (崇禎十六年 Xiangyang «新順王» unvanı — B ajanıyla eşgüdüm) ya da 1643-11-22→1644-02-08 dilimi «Li Zicheng (Dashun öncesi)» beyanıyla dashun'a. Dashun'un ilanı 崇禎十七年正月初一 = 1644-02-08 G [hesap] (künye 1644-01-01 yıl-temsili; B'nin alanı, bilgi için).

### Luoyang «1641-03-08» Dashun — gün 7 gün kaymış + hayalet
- Kimlik: data/yerlesimler_asya.js:1899-1900
- Atlasta: `t:"1641-03-08"` ming → `d:"dashun"` 1641-03-08→1645-01-18
- Kaynak: Ming shi 24 崇禎十四年正月 «丙申，李自成陷河南，福王常洵遇害» = **1641-03-01 G** [hesap]
- Sınıf: TARİH-HATA + HAYALET (dashun f=1644-01-01; 1641-1644 arası künye dışı) + SESSİZ-DEĞİŞİM (1641-02..04 madde yok)
- Öneri: t=1641-03-01; 1641-1643 dilimini dashun değil `__BOSLUK__`/beyanlı Li Zicheng (künyesiz isyan) — Li Luoyang'ı 1641'de tutmadı (yağmalayıp çekildi), Ming geri aldı; kalıcı alış 1642-43 [araştır]. En az: Ming 1644'e dek, 1641-03-01 baskın maddesi.

### Datong, Taiyuan, Pingyao 1644 düşüşleri
- Kimlik: data/yerlesimler_asya.js:1789-1790 (Datong ming→qing 1644-05-31), 1795, 1802 (t 1644-03-16)
- Kaynak: Ming shi 24: 崇禎十七年 «二月…丙寅，陷太原» = **1644-03-15 G**; 三月 «庚寅…賊至大同，總兵官姜瓌降賊» = **1644-04-08 G**; «己亥，李自成至宣府» = 1644-04-17 [hesap; 丁未=04-25 çapasından sayıldı]
- Sınıf: TARİH-HATA (Taiyuan/Pingyao 1 gün; Datong 53 gün geç ve Dashun dilimi yok)
- Öneri: Taiyuan/Pingyao t=1644-03-15; Datong t(ming)=1644-04-08 → dashun → (Jiang Xiang'ın Qing'e geçişi, B'nin alanı).

### Xiangyang «1643-01-01»
- Kimlik: data/yerlesimler_asya.js:2114
- Kaynak: Ming shi 24 崇禎十五年十二月 «己巳，李自成陷襄陽，據之» ≈ **1643-01-23 G** [hesap; 1642'de 閏十一月 var, ay sınırı teyit edilmeli]
- Sınıf: TARİH-HATA (yıl-temsili, oysa gün kaynakta var)
- Öneri: t=1643-01-23 (teyitle), kronoloji maddesi.

### Kaifeng sel felaketi «1642-09-01» — ay sayısı
- Kimlik: data/kronoloji_cin.js:397
- Atlasta: `t:"1642-09-01"` «Kaifeng sedleri bilerek yıkıldı»
- Kaynak: Ming shi 24 崇禎十五年 «九月壬午，賊決河灌開封。癸未，城圮» = **1642-10-08 / 10-09 G** [hesap]
- Sınıf: TAKVİM
- Öneri: t=1642-10-08; ic_not: Ming shi «賊決河» der (Li Zicheng'e yükler), madde «Ming valisi patlattı» diyor — iki anlatı ÇELİŞKİ olarak beyan.

### Çengdu / Çongqing: Ming Xia (大夏, Ming Yuzhen 1362–1371) yok; Ming başlangıcı 3,5 yıl erken
- Kimlik: data/yerlesimler_asya.js:2189-2190 (Chengdu), 2200-2201 (Chongqing)
- Atlasta: yuan → 1368-01-23 → ming
- Kaynak: Ming shi 2 洪武四年 «六月…癸卯，湯和至重慶，明昇降» = 1371-08-03 J; «七月辛酉，傅友德下成都，四川平» = 1371-08-21 J [hesap; 4. yılda 閏三月 var, ay sınırı teyit edilmeli]
- Sınıf: EKSİK-DEVLET (Ming Xia, başkent Chongqing) + TARİH-HATA
- Öneri: yeni künye `ming-xia` (f: 1363 Ming Yuzhen'in imparatorluk ilanı [gün araştır], t: 1371-08-03); Chongqing ming f=1371-08-03, Chengdu f=1371-08-21. Kronoloji: «Ming Sheng teslim oldu, Xia sona erdi».

### Yuan sonu isyancı devletleri künyesiz; Jiangnan'da 1368'e dek Yuan boyası
- Kimlik: data/yerlesimler_asya.js Nanking 1971-1972, Yangzhou 2000, Suzhou 2013, Hangzhou 2022/2032, Shaoxing 2041, Şanghay 2053, Ningbo 2060, Wenzhou 2070, Hefei 2078, Anqing 2085, Wuchang 2096, Jingzhou 2103, Xiangyang 2113, Changsha 2140, Nanchang 2150, Jiujiang 2157, Wuhu 3050 (hepsi yuan → 1368-01-23, `kaynak:` yok)
- Atlasta: Zhu Yuanzhang'ın 1356'dan beri tuttuğu Nanjing dahil, Yangzi havzası 1368-01-23'e dek `yuan-hanedani`
- Kaynak: Ming shi 1 (okundu): 至正十六年 «三月癸未，進攻集慶» (1356; atlas kronoloji_cin.js:139 1356-04-10); 至正二十四年正月丙寅朔 «乃即吳王位» (= 1364-02-04 J [hesap]); 二十三年 «友諒中流矢死» (Chen Youliang, Han); 二十七年 «徐達克平江，執士誠，吳地平» (Zhang Shicheng)
- Atlas kendi içinde ÇELİŞKİLİ: yerlesimler_nokta_asya_0917.js (Hengyang:141, Ji'an:154, Ganzhou:169, Xinyang:192) aynı dönemi doğru biçimde `__BOSLUK__` yapıp «Wu rejimi / Chen Han / Tianwan — künye yok → eksik_kimlik» beyan ediyor; ana dosya aynı bölgeyi Yuan gösteriyor.
- Sınıf: EKSİK-DEVLET + SINIR + ÇELİŞKİ
- Öneri (Emre'ye seçenek): (a) `ming-hanedani` künyesini «aynı polity sürüyor» kuralıyla Zhu'nun Wu krallığına GENİŞLET (f=1364-02-04, ozet'te «Wu Kralı 1364, imparator 1368» beyanı) ve Nanjing'i 1356-04-10'dan itibaren ona ver; (b) ayrı künyeler: `tianwan-xu-shouhui` (1351-1360), `chen-han` (1360-1363/64), `zhang-shicheng-zhou-wu` (1354/56-1367-10), `fang-guozhen` (Zhejiang kıyısı), `kizil-sarikli-song` (Han Lin'er, 1355-1366). (a) minimum, (b) tam çözüm.

### Yunnan: Kunming/Dali/Guiyang 1382-01-06 — Ming shi ile ve atlasın öteki dosyasıyla çelişiyor
- Kimlik: data/yerlesimler_asya.js:2213-2214 (Kunming), 2225-2226 (Dali), 2237-2238 (Guiyang); data/kronoloji_cok_dogu_asya.js:38 (1382-01-06, kaynak Dreyer/Yang/Mote «sayfa verilmedi, açılmadı»)
- Kaynak: Ming shi 3 (okundu): 洪武十五年 «正月壬午，元曲靖宣慰司及中慶、澂江、武定諸路俱降，雲南平» (中慶 = Kunming) = **1382-01-16 J** [hesap]; «閏月癸卯，藍玉、沐英克大理» = **1382-04-07 J** [hesap]. yerlesimler_a78_asya.js aynı kaynakla 1382-01-16 / 04-07 / 04-14 kullanıyor.
- Sınıf: ÇELİŞKİ + TARİH-HATA (Dali 3 ay erken)
- Öneri: Kunming f(ming)=1382-01-16 (Basalawarmi'nin intiharı 1381 12. ayı ise ic_not'ta iki gün; Ming shi 124 okunmalı), Dali f=1382-04-07; kronoloji_cok_dogu_asya.js:38 günü 1382-01-16'ya ya da kaynağı açılıp 01-06 teyit edilsin. Guiyang: 1368-82 Guizhou yerel tusi'leri 1372'de Ming'e bağlandı (貴州宣慰司) — `kuzey-yuan` yerine Ming 1372 [araştır].

### Ming–Đại Việt: üç farklı gün + yıl-temsili maddeler
- Kimlik: devletler.js:18213 (ming-annam f 1407-06-16, t 1427-11-12), devletler.js:8175/8183 (Hồ t 1407-06-17), yerlesimler_asya.js:3883/3894/3910 ve yerlesimler_gdasya.js:84-274 (8 kayıt, ming 1407-06-17 → 1428-01-03), kronoloji_cin.js:199 («1406-01-01 Ming Đại Ngu'yu işgal etti»), :235 («1427-01-01 Ming Vietnam'dan çekildi»), ming-annam kronoloji 1407-01-01
- Kaynak: Ming shi 6 (okundu): 永樂四年 «秋七月辛卯，朱能為征夷將軍…討安南» (sefer emri); 永樂五年 «五月甲子，張輔擒黎季犛、黎蒼…安南平» = **1407-06-16 J**; «六月癸未…置交阯布政司» = 1407-07-05 J; Ming shi 9: 宣德二年 «十月戊寅，王通棄交阯，與黎利盟» = **1427-11-12 J**; «十一月乙酉…悉召文武吏士還». [hepsi hesap]
- Sınıf: ÇELİŞKİ (künye 06-16, Hồ ve yerleşimler 06-17; künye 1427-11-12, yerleşimler 1428-01-03) + TARİH-HATA (kronoloji_cin 1406-01-01 ve 1427-01-01 yıl-temsili, 1427 maddesi 10,5 ay erken)
- Öneri: Hồ t ve yerleşim f → 1407-06-16; kronoloji_cin.js:199 → «1406 Ming seferi başladı» (yıl, tur savas) ve yeni madde 1407-06-16 «Hồ Quý Ly yakalandı, Ming ülkeyi ilhak etti»; kronoloji_cin.js:235 → 1427-11-12; yerleşim t=1428-01-03 için kaynak (Toàn thư 12. ay çekilişi) yazılmalı, aksi hâlde 1427-11-12'ye çekilmeli. 1428-01-03 ±30 günde yalnız Lê künyesi «1428-01-01» yıl-temsili maddesi var (sahte eşleşme).

### Başkentin Pekin'e taşınması: iki dosyada iki yıl, ikisi de yıl-temsili
- Kimlik: devletler.js:5601 (`1421-01-01`), kronoloji_cin.js:223 (`1420-01-01`)
- Kaynak: Ming shi 7 (okundu): 永樂十八年 «九月…丁亥，詔自明年改京師為南京，北京為京師» = 1420-10-28 J; «十二月…癸亥，北京郊廟宮殿成» = 1421-02-01 J; 十九年 «春正月甲子朔…御奉天殿受朝賀» = **1421-02-02 J** [hesap; 甲子朔 formülle birebir]
- Sınıf: ÇELİŞKİ + TARİH-HATA
- Öneri: ikisi de 1421-02-02 («Pekin resmen başkent; Yasak Şehir'de ilk saray kabulü»), ic_not: ferman 1420-10-28, saray tamam 1421-02-01. devletler.js tur "hukumdar" → "baskent".

### Yuan adının ilanı «1271-01-01»
- Kimlik: devletler.js:5588
- Kaynak: Yuan shi 7 «可建國號曰大元» 至元八年十一月乙亥 = **1271-12-18 J** [hesap; 乙亥 günü Yuan shi 7'den ayrıca okunmalı]
- Sınıf: TARİH-HATA (yıl-temsili)
- Öneri: t=1271-12-18, kaynak Yuan shi 7.

### Yuan künye f=1260-01-01
- Kimlik: devletler.js:5583
- Kaynak: Yuan shi 4 中統元年三月辛卯 «帝即皇帝位» = 1260-05-05 J (atlasın 6+ yerleşim kaydı bunu zaten okumuş ve «künye düzeltme önerisi» yazmış)
- Sınıf: TARİH-HATA (yıl hassasiyeti, gün kaynakta var)
- Öneri: yuan f ve mogol-imparatorlugu t → 1260-05-05 (birlikte); ilk halka kayıtları (…1260-01-01) aynı commit'te kaydırılır.

### Kızıl Sarıklı isyanı ve Jia Lu: ay sayısı / iki dosyada iki gün
- Kimlik: kronoloji_cin.js:127 (`1351-05-01`), :133 (`1351-01-01` Jia Lu); devletler.js:5590 (`1351-01-01` Kızıl Sarıklı)
- Kaynak: Yuan shi 42 (zh.wikisource.org/wiki/元史/卷042, okundu): «辛亥，潁州妖人劉福通為亂，以紅巾為號，陷潁州» (五月) = **1351-05-28 J**; «夏四月壬午，詔開黃河故道，命賈魯…» = **1351-04-29 J** [hesap]
- Sınıf: TAKVİM (五月 → "05-01") + ÇELİŞKİ (iki dosya)
- Öneri: Kızıl Sarıklı 1351-05-28 (iki dosyada), Jia Lu 1351-04-29.

### «İkinci Japonya seferi tayfunla dağıldı» 1281-06-23
- Kimlik: kronoloji_cin.js:79
- Atlasta: 1281-06-23 + "tayfun"
- Kaynak: Japon kaynağına göre tayfun 弘安四年閏七月一日 ≈ 1281-08-15/16 J (Kotobank/日本大百科全書'nde kontrol edilmeli); 1281-06-23 ≈ 弘安四年六月六日 = Shikanoshima çarpışmalarının başı
- Sınıf: ÇELİŞKİ (gün başka olaya ait) — [gün NAOJ ile teyitsiz]
- Öneri: t → tayfun günü (NAOJ çevirisiyle), ya da başlık «Hakata körfezi çarpışmaları başladı».

### Penghu/Tayvan değil, ama Jeju ve Pyongyang: atlasın kendi kaynağıyla çelişen Yuan dilimleri
- Kimlik: data/yerlesimler_asya.js:3487-3488 (Pyongyang), 3574-3575 (Ceccu/Jeju)
- Atlasta: Pyongyang `{f:"1281-01-01", …, d:"goryeo"}`; Jeju `{f:"1281-01-01", t:"1356-01-01", d:"yuan-hanedani"}`
- Kaynak: aynı kaydın kendi kaynağı — Pyongyang: Goryeosa 58 «忠烈王十六年，元歸我西京及諸城» (1290); Jeju: «1294'te (Yuanshi 208 三十一年) Goryeo'ya iade»
- Sınıf: TARİH-HATA / ÇELİŞKİ (1281 ufuk bitişiği kaynağı ezmiş)
- Öneri: Pyongyang 1281→1290 yuan, 1290'dan goryeo (yıl; Goryeosa 30 ile ay-gün aranmalı). Jeju 1294'te goryeo; 1356-01-01 kırılması (kaynaksız, maddesiz) kaldırılmalı ya da Yuan'ın 1300'de yeniden kurduğu 耽羅軍民摠管府 kaynakla gösterilirse o dilime bağlanmalı.

### Kuzey Yuan: künye içi çelişki ve Moğolistan dilimleri
- Kimlik: devletler.js:7169-7178; yerlesimler_asya.js:2820 (Karakurum kuzey-yuan → 1635-01-01 → qing), 2850-2851 (Kobdo → 1635 cungar)
- Atlasta: künye t=1691-05-30 (ozet: «BİTİŞ 1635 DEĞİL 1691»), ama kronoloji son maddesi `t:"1635-01-01", tur:"son"`; Karakurum (Halha toprağı) 1635'te Qing'e geçiyor, Urga ise 1691'e dek kuzey-yuan
- Kaynak: künyenin kendi ozet'i; Qing'e Halha'nın tâbiiyeti Dolonnor 1691
- Sınıf: ÇELİŞKİ (künye içi + Karakurum/Urga arası)
- Öneri: kronoloji 1635 maddesi tur "son" → "toprak-kayip" («Çahar teslim oldu; Halha bağımsız sürdü»); Karakurum t(kuzey-yuan)=1691-05-30 (B'nin 1691 maddesiyle). Kuzey Yuan kronolojisine eksik maddeler: 1387 Naghachu teslimi, 1388 Buyur Nur (Ming shi 3 洪武二十一年四月丙辰 «藍玉襲破元嗣君於捕魚兒海»), 1380 Karakurum'un yakılması (`bit:1380` var, madde yok).

### Oyrat konfederasyonu (EKSİK-DEVLET)
- Kimlik: Kobdo 2850 (kuzey-yuan 1368→1635), Hâmi, Dunhuang, Tumu maddesi (kuzey-yuan künyesine yazılmış)
- Atlasta: batı Moğolistan 1368-1635 boyunca Kuzey Yuan; Tumu (1449) Kuzey Yuan kronolojisinde
- Kaynak: Tumu'yu yapan Oyrat Esen Taişi'dir (atlasın kendi maddesi «Oyratlar» diyor); Esen 1453-54'te kendini han ilan etti
- Sınıf: EKSİK-DEVLET
- Öneri: `oyrat` (Dörben Oirat) künyesi ~1399/1400 – 1634/35 (cungar'a ardıl) — Kobdo 1400'lerden itibaren Oyrat. Kaynak: TDV «Kalmuklar»/«Oyratlar» maddesi (aranmalı) + Cambridge History of Inner Asia.

### Makao 1557: Portekiz egemenliği mi yerleşim izni mi
- Kimlik: data/yerlesimler_asya.js:2361-2362 (`1557-01-01 d:"portekiz"`), makao-portekiz künyesi f=1887-12-01
- Atlasta: 1557'den itibaren Portekiz boyası; kronoloji_cin.js:295 aynı olayı tur "kultur", «yerleşim hakkı» diye yazıyor
- Kaynak: atlasın kendi künyesi: «Pekin Antlaşması (1887) Portekiz yönetimini tanıdı; fiilî yerleşim 1557»
- Sınıf: SINIR (TARTIŞMALI): Çin tarafı (ÇHC/ÇC tarih yazımı) 1557-1887 egemenliğin Ming/Qing'de kaldığını, Portekiz'in kira ödeyen yerleşimci olduğunu yazar; Portekiz/Batı yazımı fiilî Portekiz idaresini 1557'den başlatır
- Öneri (Emre'ye): (a) 1557-1887 Ming/Qing + kd: Portekiz yerleşimi beyanı; (b) mevcut hâl, ama kronoloji maddesi tur "toprak-kayip"/"isgal" yapılıp gün (1557, yıl) beyan edilmeli.

### Tibet 1354-1642: Ming'le ilişki (TARTIŞMALI — seçenek)
- Kimlik: devletler.js:7147 (tibet, kaynak «bulunamadı»), Lhasa/Şigatse/Gyantse/Çamdo 2984-3013
- Atlasta: 1354-1642 bağımsız `tibet`; 1281-1354 doğrudan `yuan-hanedani` (sakya künyesi 1264-1354 var ama yerleşimlerde kullanılmıyor)
- Kaynak: ÇHC yazımı: Ming 1373'te 烏思藏都指揮使司 kurdu, Tibet Ming toprağıdır (中国大百科全书 — zgbk.com bu oturumda açılmadı). Batı/Tibet yazımı (Sperling, Petech; Kapstein 2006): Ming'in Tibet'te idarî varlığı yoktu, unvan/haraç ilişkisi. TDV «tibet»: 1354 Phagmodrupa.
- Sınıf: TARTIŞMALI / KAYNAKSIZ (tibet künyesi)
- Öneri (Emre'ye): (a) mevcut (bağımsız Tibet) + ozet'te ÇHC görüşünün beyanı; (b) Ming vesayeti için kd:/beyan. Yuan dönemi için: (a) mevcut yuan + sakya künyesi silinmesin; (b) Lhasa 1281-1354 `sakya` (Yuan vesayetinde), ozet'te iki görüş. Künye kaynağı TDV tibet + Petech 1990 + Kapstein ile doldurulmalı.

### Ming künyesinin kronolojisi toprak olaylarından yoksun (EKSİK-MADDE)
- Kimlik: devletler.js:5598-5603 (4 madde: kuruluş, Zheng He, Pekin, son)
- Eksik toprak maddeleri (gün → kaynak): 1368-09-14 Dadu [var, kronoloji_cin]; 1369-01-09 Taiyuan; 1369-04-12 Xi'an; 1371 Liaodong (Liu Yi); 1371-08-03 Chongqing / 1371-08-21 Chengdu; 1372 Gansu; 1382-01-16 Yunnan; 1387 Naghachu; 1407-06-16 Annam; 1427-11-12 Annam'ı bırakış; 1449-09-01 Tumu; 1513 Hâmi kaybı (atlas yerleşimi var, maddesi yok — Hâmi 2940 `t:"1513-01-01"` ve 2939 `f:"1404-01-01"` için ±30 gün madde yok: SESSİZ); 1524 Dunhuang/Jiayuguan batısının terki (2290, maddesiz); 1621-05-04/11 Shenyang-Liaoyang; 1622-03-05 Guangning; 1633-08-18 Lüşun; 1642 Songshan/Jinzhou; 1643-11-22 Xi'an; 1644-03-15 Taiyuan.
- Sınıf: EKSİK-MADDE (her biri bir sınır kırılmasının karşılığı; birçoğu ayrıca SESSİZ-DEĞİŞİM)

### Kore'nin 1627/1637 Sonraki Jin/Qing istilaları maddesiz
- Kimlik: devletler.js:5662 (joseon: 1392, 1444, 1592, 1897, 1910 — 1627/1637 yok); kronoloji_cin'de de yok
- Kaynak: Ming shi 23 崇禎十年 «是月，朝鮮降於我大清» (二月; gün yok); Kore tarafı: Injo 15/1/30 Samjeondo teslimi = 1637-02-24 G (encykorea «삼전도» — bu oturumda açılmadı)
- Sınıf: EKSİK-MADDE (toprak değişmez — haraç ilişkisi; ama Ming'in son vassalını kaybı)
- Öneri: joseon kronolojisine 1627 (Jeongmyo, 天聰元年正月, ay [araştır]) ve 1637-02-24 (Samjeondo, encykorea ile teyit).

### Küçük gün hataları (toprak dışı, kronoloji_cin.js)
- :277 «1521-04-19 Jiajing tahta çıktı» — Zhengde'nin ölümü 正德十六年三月丙寅 = 1521-04-20 J [hesap]; Jiajing'in tahta çıkışı 四月癸卯 = 1521-05-27 J [hesap]. Sınıf: TARİH-HATA. Öneri: 1521-05-27.
- :319 «1572-07-05 Wanli tahta çıktı» — 1572-07-05 Longqing'in ölüm günüdür; Wanli 六月甲子 = 1572-07-19 J (yaygın; Ming shi 20 ile teyit edilmeli). Sınıf: TARİH-HATA.
- :289 «1550-08-01 Altan Han Pekin'i kuşattı» — Gengxu olayı 嘉靖二十九年**八月** (≈ Eylül-Ekim 1550); "08-01" ay sayısının Batı ayı sanılması olası. Sınıf: TAKVİM [Ming shi 18 ile gün belirlenmeli].
- :241/devletler 7175 Tumu ✓; :247 1457-02-11 ✓ (bakıldı).

---

## 3. KAYNAKSIZ tablosu (dönem A)

| Yer | Durum | Önerilen kaynak |
|---|---|---|
| devletler.js yuan-hanedani künye + 1271, 1279, 1351, 1368 maddeleri | kaynak `cin--ulke` / yok | Yuan shi 4, 7, 42; Song shi 47; Ming shi 2 |
| ming-hanedani künye + 4 madde | `cin--ulke`, maddelerde yok | Ming shi 2, 6, 7, 24 |
| kuzey-yuan künye | «bulunamadı» | Ming shi 2-3, 327 (韃靼傳); Cambridge Hist. of China 6/7 |
| tibet künye + 4 madde | «bulunamadı» | TDV tibet; Petech 1990; Kapstein 2006 |
| joseon, goryeo, ryukyu künye `kaynak:` | «bulunamadı» | encykorea.aks.ac.kr; Sillok; Kerr 1953 / Smits 2019 |
| guge 1037, 1088, 1240, 1265, 1277, 1378, 1499, 1624 maddeleri | yalnız en.wikipedia | Vitali, *The Kingdoms of Gu.ge Pu.hrang* (1996); Petech |
| sakya 1264(2.), 1270, 1285, 1290, 1322 | yalnız en.wikipedia | Petech 1990 |
| ≈32 kayıt «1368-04-01» + ≈17 kayıt «1368-01-23» (Jiangnan) + Liaodong/Shanxi 1368-09-14 | `kaynak:` yok ya da başka şehrin (Hejian/Leshou) DEVRALMA metni | Ming shi 1-2 (yukarıdaki günler) |
| kronoloji_cin 1279-1644 maddeleri | ~%70'i «Cambridge History of China cilt N — sayfa yok», ~%20'si yalnız `cin--ulke` | Ming shi/Yuan shi 本紀 (günler zaten orada) |

Not: «DEVRALMA … Leshou» kaynak metni Mukden, Liaoyang, Lüşun, Datong, Taiyuan gibi Hebei dışı şehirlere de kopyalanmış; metin Hejian'ın düşüşünü anlatıyor. Bu kayıtlar kaynaklı **görünüyor ama değil** — en sinsi KAYNAKSIZ türü.

---

## Sayılar

- Künye: 14 (yuan-hanedani, ming-hanedani, qing-hanedani [1616-1644 dilimi], kuzey-yuan, tibet, sakya, guge, dali-kralligi [ilk halka], goryeo, joseon, ryukyu, ming-annam-idaresi, song [t], dashun [f]).
- Kronoloji maddesi: kronoloji_cin.js 1279-1644 arası **56** madde + devletler.js künye kronolojileri ≈ **55** + kronoloji_cok_dogu_asya.js 1 = ≈ **112**; bunların **≈30'u** gün/kaynakla karşılaştırıldı.
- Yerleşim: `d:"yuan-hanedani"` 125 dönem (7 dosya), `d:"ming-hanedani"` 110 dönem (6 dosya) tarandı; ≈ **95 yerleşim kaydı** okundu, ≈ **60'ının** kırılma günü kaynakla karşılaştırıldı.
- Bulgu (ana başlık 24): TAKVİM 5 (1368-04-01 toplu, 1643-10-11, 1642-09-01, 1351-05-01, 1550-08-01) · TARİH-HATA 13 · SESSİZ-DEĞİŞİM 6 küme (1368-04-01 ×≈32 kayıt, 1621-01-01 ×3, 1643-10-11 ×3, 1641-03-08, Hâmi 1404/1513, Dunhuang 1524) · EKSİK-DEVLET 4 (Ming Xia, Wu/Chen Han/Zhang Shicheng/Tianwan/Song isyancıları, Oyrat, Sonraki Jin'in yerleşimsizliği) · EKSİK-MADDE 3 küme (Ming toprak olayları ≈18, Kuzey Yuan 3, Kore 2) · ÇELİŞKİ 7 · HAYALET 2 (Luoyang 1641, Xi'an 1643 dashun) · TARTIŞMALI 2 (Tibet, Makao) · KAYNAKSIZ tablo 1.

## Ölçülemedi

- **sinocal.sinica.edu.tw 401 verdi** — tüm Batı günleri JDN-干支 hesabıdır; ay sınırının ±1 ay belirsiz olduğu yerler: Naghachu 1387, Chongqing/Chengdu 1371 (閏三月), Xiangyang 1643 (閏十一月), Lüşun 1633. Bunlar teyitsiz.
- 中国大百科全书 (zgbk.com), Academia Sinica 漢籍電子文獻 açılmadı (deneme yapılmadı — süre); ÇHC tarafı görüşleri (Tibet/Makao) bu ansiklopediden alıntılanmadı, genel bilgiyle yazıldı.
- Ming shi 卷20 (Wanli), 卷18 (Gengxu 1550), 卷124 (Basalawarmi'nin ölüm günü), Yuan shi 卷7 (1271 乙亥) açılmadı — ilgili günler [hesap/yaygın] etiketli.
- Japon tayfun günü (1281), Kore 1627/1637 günleri (encykorea) açılmadı.
- Değişmez 2 için `py arac/denetle.py` koşturulamadı (süreç yasağı); SESSİZ-DEĞİŞİM yalnız Grep ile ±30 gün penceresinde `kronoloji*/olaylar*/devletler.js` aranarak ölçüldü — `kronoloji_sinir*` dosyalarında 1368-03..05 ve 1621/1641/1643 için de madde bulunmadı.
- yer_yama_*.js içindeki Yuan/Ming dilimleri (yer_yama_1923_yeni.js 3 kayıt) ve yerlesimler_ek19/ek21 (12 kayıt, hepsi yuan→1368-09-14) tek tek okunmadı.
- Hong Kong, Tayvan (1624-1661 Penghu Ming dilimi `yerlesimler_asya.js:2563` 1644 sonrası Ming hayaleti) — B ajanının alanı, dokunulmadı.


---

## ÇİN DENETİMİ — Parça B: 1644–1911 (Qing)

Ağaç: C:\atlas\.claude\worktrees\pensive-engelbart-7e58ff (yalnız okundu, hiçbir depo dosyası değişmedi).
Araç: Grep/Read/WebFetch/WebSearch. Makine yükü nedeniyle tam tarama yapılmadı; aşağıdaki sayılar örneklemdir.

**Takvim teyidi notu:** sinocal.sinica.edu.tw WebFetch'e 401 verdi (açılamadı). Aşağıdaki bütün ay-güneş → Gregoryen
çevirileri **ganzhi hesabı, tablo teyitsiz**tir. Yöntem: dayanak gün 1644-04-25 = 丁未 (Mingshi 24: Chongzhen 17/3 丁未
「內城陷」, Pekin'in düşüşü — atlasın da kabul ettiği gün); hedef ganzhi'ye 60'lık mod farkla gidildi, ay penceresi
kontrol edildi. Ay başları (ör. 順治2 正月初一 ≈ 1645-01-28) tahmindir; sinocal ile teyit edilmeli.

---

## A. TAKVİM bulguları

### Xi'an'ın Dashun'a geçişi ay-güneş günü olarak yazılmış
- Kimlik: data/yerlesimler_asya.js:1854-1855 (Xi'an), 3038 (Tongguan), 3045 (Yan'an) · dashun
- Atlasta: `{f:"1368-04-01", t:"1643-10-11", d:"ming-hanedani"}`, `{f:"1643-10-11", t:"1645-01-18", d:"dashun"}`
- Kaynak: Mingshi juan 24 (zh.wikisource.org/wiki/明史/卷24, okundu): «壬申，李自成陷西安» (崇禎16, 冬十月). 壬申 bu ayın 11. günüdür → "10-11" ayın kendisi.
- Sınıf: TAKVİM
- Öneri: 1643-10-11 → **1643-11-22** (ganzhi hesabı: 1644-04-25 丁未'den 155 gün geri = 壬申; tablo teyitsiz). Üç yerleşimde de.

### Qing'in Xi'an'a girişi ay-güneş günü olarak yazılmış
- Kimlik: data/yerlesimler_asya.js:1855-1856 (Xi'an), 1900 (Luoyang), 1925 (Kaifeng), 1933 (Zhengzhou), 3038, 3045 · dashun → qing-hanedani
- Atlasta: `t:"1645-01-18", d:"dashun"` / `f:"1645-01-18", d:"qing-hanedani"`
- Kaynak: Qingshigao juan 4 (zh.wikisource.org/wiki/清史稿/卷4, okundu): «壬寅，多鐸師至西安，自成奔商州» (順治2 正月). 壬寅 = 正月十八 → "01-18" ayın kendisi.
- Sınıf: TAKVİM
- Öneri: 1645-01-18 → **1645-02-14** (ganzhi hesabı, tablo teyitsiz). Not: Luoyang/Kaifeng/Zhengzhou'nun Qing'e geçişi Xi'an ile aynı gün olmayabilir (Henan Qing'e 1644 sonu–1645 başında geçti); her biri ayrı kaynak ister.

### Wu Sangui'nin imparatorluk ilanı muhtemelen ay-güneş günü
- Kimlik: data/devletler.js:8021 · san-fan
- Atlasta: `t:"1678-03-01" ... 'Büyük Zhou' ... imparatoru ilan edip`
- Kaynak: Çin kaynakları ilanı 康熙17年3月1日 olarak verir (yalnız arama/ikincil bilgisi; Qingshigao okunmadı). Ay başı yaklaşık 1678-03-23.
- Sınıf: TAKVİM (şüpheli, teyitsiz)
- Öneri: 清史稿 吳三桂傳 / 聖祖本紀 ile ganzhi okunup çevrilsin; beklenen değer ≈ 1678-03-23.

### Kyakhta maddesi Bur(insk) gününü Jülyen haliyle taşıyor
- Kimlik: data/kronoloji_cin.js:517
- Atlasta: `t:"1727-08-20", b:"Kyakhta Antlaşması — Rusya sınırı ve ticareti düzenlendi"`
- Kaynak: atlasın kendi kronoloji_sinir_asya.js:53 metni (IBS No.64): «20 Ağustos 1727'de Bur ırmağı kıyısında imzalanan antlaşma»; Kyakhta antlaşması 21 Ekim 1727 (IALS treaty kaydı resources.ials.sas.ac.uk/node/733264, özet, takvimi belirtilmemiş). Rus günleri 1918 öncesi Jülyen (1700-1800: +11).
- Sınıf: TAKVİM + ÇELİŞKİ (sinir_asya:53 aynı süreç için 1727-10-12 Abagatuy protokolünü yazar)
- Öneri: madde ya Bur antlaşması olarak **1727-08-31** (Jülyen 20 Ağustos +11) ya da Kyakhta antlaşması olarak **1727-11-01** (Jülyen 21 Ekim +11) yazılsın, `ic_not_takvim` ile. Çin günü (雍正5年) 清實錄'den teyit edilmeli. sinir_asya:53'teki 1727-10-12 ve 10-27 protokol günlerinin de Jülyen olup olmadığı belirsiz — IBS takvim belirtmez, ölçülemedi.

### Taiping'in Wuchang'ı alışı yanlış yılda
- Kimlik: data/devletler.js:8139 · taiping
- Atlasta: `t:"1852-01-01", b:"Taipingler Aralık 1852'de Wuchang bölgesini ele geçirdi."`
- Kaynak: Wuchang 咸豐2年12月4日 düştü = Gregoryen **1853-01-12** (yaygın akademik gün; Spence 1996 aynı ayı verir). "Aralık 1852" ay-güneş ayının Batı ayı sanılmasıdır.
- Sınıf: TAKVİM / TARİH-HATA
- Öneri: t → 1853-01-12, metin "Ocak 1853". 8142'deki "1856-01-01 … Aralık 1856" (Qing'in geri alışı, 咸豐6年11月 ≈ 1856-12-19, teyitsiz) aynı biçimde düzeltilsin. Odak "Wuhu" (8138, 8141, 8143, 8144) yanlış; Jintian/Nanjing olmalı.

---

## B. TARİH-HATA

### Dashun künyesinin üç ucu yanlış
- Kimlik: data/devletler.js:8026-8035 · dashun
- Atlasta: f `1644-01-01`, madde "1645-01-01 Wu Sangui-Qing ittifakına yenilip Pekin'i terk etti", t `1647-01-01 Li Zicheng öldü`
- Kaynak:
  - Kuruluş: Dashun 崇禎17年正月初一 = 8 Şubat 1644, Xi'an (ikincil: en.wikipedia "Shun dynasty"/"Li Zicheng" özeti; Mingshi 24 bu ilanı kaydetmez).
  - Shanhaiguan bozgunu: Qingshigao 4 «四月己卯 … 賊兵大潰 … 自成遁還燕京» → ganzhi 1644-05-27.
  - Pekin'den çekiliş: «四月乙酉，自成棄燕京西走» → ganzhi 1644-06-02.
  - Ölüm: Qingshigao 4 «閏六月甲申 … 自成竄九宮山，自縊死» (順治2 = 1645; ganzhi ≈ 1645-07-26, rapor günü).
- Sınıf: TARİH-HATA (+ künye f TAKVİM yer tutucusu)
- Öneri:
  - f → 1644-02-08.
  - Madde → 1644-05-27 (Shanhaiguan) ve/veya 1644-06-02/04 (Pekin terki).
  - t → 1645 (Qingshigao rapor günü ≈1645-07-26; tablo teyitsiz). Kuidong kalıntısı (1664'e dek) ayrı beyan olarak yazılabilir.
  - yerlesimler_asya.js:2202'deki `t:"1647-01-01", d:"dashun"` da buna bağlı (bkz. C).

### Güney Ming'in sonu: Yongli 1662-06-01'de öldürüldü
- Kimlik: data/devletler.js:7742, 7749 · guney-ming; data/kronoloji_cin.js:433
- Atlasta: `t:"1662-01-01"` "Yongli teslim alınıp idam edildi"
- Kaynak: Yongli, 康熙元年4月15日 Kunming'de boğduruldu = **1 Haziran 1662** (en.wikipedia "Yongli Emperor" özeti, ikincil; Çin basın kaynakları aynı olayı verir). Birmanya'nın teslimi 順治18年12月 (Ocak 1662).
- Sınıf: TARİH-HATA
- Öneri: künye t ve kronoloji_cin:433 → 1662-06-01 (ya da teslim günü ayrı madde). Kaynak olarak 清史稿 聖祖本紀 ganzhi'si okunmalı. 7748'deki odak_yer "Nanking" → "Kunming".

### Turfan'ın Qing'e dönüşü bir yıl erken
- Kimlik: data/yerlesimler_asya.js:2926-2932 (Turfan) · yakub-beg → qing-hanedani
- Atlasta: `{f:"1864-06-04", t:"1876-08-18", d:"yakub-beg"}` (Ürümçi'nin günü)
- Kaynak: TDV "Yâkub Beg" maddesi (atlasta kronoloji_orta_asya.js:1118): «Çinliler 16 Mayıs 1877'de Turfan'ı da ele geçirdiler». Çin kaynakları Liu Jintang'ın Turfan'ı alışını 1877 Nisan sonuna koyar (光緒3年3月; teyitsiz).
- Sınıf: TARİH-HATA + SESSİZ-DEĞİŞİM (1876-08-18 ±30 günde Turfan maddesi yok)
- Öneri: Turfan t → 1877-05-16 (TDV esas). Çin günü bulunursa `ic_not`ta iki kaynaklı beyan.

### Hotan'ın Qing'e dönüşü
- Kimlik: data/yerlesimler_asya.js:2917-2918 (Hotan)
- Atlasta: `t:"1877-12-17"` (Kaşgar'ın günü)
- Kaynak: kronoloji_cok_orta_asya2.js:122 (Kim 2004 özeti): «Hoten Ocak 1878'de takip etti». Yaygın gün 1878-01-02 (teyitsiz).
- Sınıf: TARİH-HATA
- Öneri: Hotan t → 1878-01-02 (kaynak okunarak); madde eklenmeli.

### yakub-beg künye sonu kaynaksız
- Kimlik: data/devletler.js:5407, 5415; kronoloji_cin.js:733
- Atlasta: `t:"1878-03-16"` "Çin orduları Doğu Türkistan'ı tamamen yeniden fethetti"
- Kaynak: TDV (kronoloji_orta_asya.js:1130) Kaşgar'ın düşüşünü 16 Aralık 1877 verir. Son yerleşim kırılması 1877-12-17 (Kaşgar/Yarkent/Hotan). 1878-03-16 için kaynak bulunamadı. Atlasın kendi notu (cok_orta_asya2:124) da bunun "künyenin bitiş günü, kaynak değil" olduğunu söyler.
- Sınıf: KAYNAKSIZ / ÇELİŞKİ
- Öneri: künye t → 1877-12-16 (TDV) ya da Hotan'ın düşüşü 1878-01-02. kronoloji_cin:733 → aynı gün. Kaşgar'ın üç günü (TDV 12-16, cok_orta_asya2 12-18, yerleşim 12-17) TDV'ye göre 12-16'da birleştirilsin.

---

## C. Yanlış devlet / SINIR

### Chengdu ve Chongqing Dashun değil, Daxi (Zhang Xianzhong) toprağı
- Kimlik: data/yerlesimler_asya.js:2191 (Chengdu `1644-09-09..1644-12-04 dashun`), 2202 (Chongqing `1644-07-01..1647-01-01 dashun`)
- Atlasta: yukarıdaki dilimler. Chengdu kaydının kendi notu: «sahibi dashun YANLIŞ görünüyor».
- Kaynak:
  - Mingshi 309 (atlasta alıntılı): «遂進陷成都 … 冬十一月庚寅，即偽位 … 名成都曰西京». Chengdu'yu Zhang Xianzhong aldı.
  - daxi-zhang künyesi f 1644-09-09'u Chengdu'nun alınışı olarak verir.
- Sınıf: SINIR (yanlış sahip)
- Öneri:
  - Chengdu 1644-09-09..1647-01-02 → d:"daxi-zhang" (iki dilim birleşir).
  - Chongqing → d:"daxi-zhang"; f, Zhang'ın Chongqing'i alış günü (崇禎17年6月, ≈ Temmuz 1644 sonu, teyitsiz); t → 1647-01-02.

### Ming künyesi bittikten sonra hâlâ Ming boyalı 17 dilim (HAYALET)
- Kimlik: ming-hanedani künyesi t 1644-04-25 (devletler.js:5595). Aşan dilimler (yerlesimler_asya.js):
  - 1752, 1758, 1764, 1772, 1939, 1945, 1951, 1966 → t 1644-06-06 (Hebei/Shandong)
  - 1789 → 05-31
  - 3029 (Şanhayguan) → 05-27
  - 2201 (Chongqing) → 07-01
  - 2190 (Chengdu) → 09-09
  - 2252, 2270, 2280, 2317 (Lanzhou, Zhangye, Jiayuguan, Yinchuan) → 1644-10-01
  - **2563 (Penghu) → 1661-04-30**
- Sınıf: HAYALET
- Öneri:
  - Pekin dışındaki Kuzey Çin dilimleri (04-25..06-06) kaynağa göre dashun ya da beyanlı guney-ming.
  - Gansu/Ningxia noktaları: Dashun bu bölgeyi 1643 sonu–1644 başında aldı (teyitsiz). Dashun dilimi yazılmalı ya da kaynak bulunana dek guney-ming değil dashun + beyan.
  - Penghu 1644-04-25..1661-04-30: Zheng ailesinin Ming-sadık idaresi. guney-ming (Yongli'ye bağlı Zheng) ya da tungning (künye f 1650) → en az 1644-04-25..1650 guney-ming, 1650..1661 tungning.
- Not: Ölçüm yalnız yerlesimler_asya.js'deki boşluklu `t:"…", d:"ming-hanedani"` biçimini kapsar; başka dosya ve biçimler taranmadı.

### Dashun dilimleri künye doğumundan önce (HAYALET)
- Kimlik: yerlesimler_asya.js:1900 (Luoyang `f:"1641-03-08"`), 2115 (Xiangyang `f:"1643-01-01"`), 1855/3038/3045 (`f:"1643-10-11"`) · dashun künyesi f 1644-01-01
- Sınıf: HAYALET (künye aşımı)
- Öneri: CLAUDE.md sınıflandırması: Li Zicheng'in 1641-43 rejimi (1643'te Xiangyang'da "Xinshun Wang") aynı polity'dir → künye f'si GENİŞLET. Önerilen f 1643 (Xiangyang, 崇禎16年正月/3月; teyitsiz). Luoyang 1641 ise o yıl yağmalanıp bırakıldı, kalıcı idare değildi → Luoyang dilimi kırpılsın.

### Xining 1636–1724 Hoşut boyalı
- Kimlik: data/yerlesimler_asya.js:2308 (Xining) `{f:"1636-01-01", t:"1724-01-01", d:"hosut"}`
- Kaynak: Xining şehri Ming 西寧衛, sonra Qing idaresindeydi. Hoşut Kokonor otlaklarını tutuyordu (TDV Kalmuklar; sayfa bu oturumda okunmadı).
- Sınıf: SINIR
- Öneri: Xining şehri Ming/Qing kalmalı; Kokonor için şehir dışında ayrı bir Hoşut noktası (Kokonor gölü çevresi) açılsın. Bunun için "noktası olmayan bölge emilir" kuralı da kontrol edilmeli. Hoşut sonu 1724 (Lobzang Danjin isyanının bastırılması, 雍正2年 baharı) yıl düzeyinde uygun.

---

## D. ÇELİŞKİ (aynı olay, farklı gün)

### Tungning'in teslimi: üç gün
- Kimlik:
  - kronoloji_cin.js:451 `1683-08-01`
  - kronoloji_sinir_nokta2.js:40 `1683-10-03`
  - devletler.js:7777/7784 ve yerlesimler_asya.js:2535/2536/2583 `1683-10-05`
  - Penghu 2564/2565 `1683-07-16`
- Kaynak: sinir_nokta2:40 (ikincil): Penghu Temmuz 1683; teslim teklifi 5 Eylül; Shi Lang'ın Tayvan'a varışı 3 Ekim 1683 (康熙22年8月13日). Atlas notu: «Zincirdeki 5 Ekim, 3 Ekim'e 2 gün uzaktır».
- Sınıf: ÇELİŞKİ
- Öneri: 1683-10-03'te birleştirmek (künye t, yerleşimler, kronoloji_cin:451). Kaynak: 清史稿 施琅傳 / 聖祖本紀 ganzhi'si okunup çevrilmeli (bu oturumda okunmadı).

### Tungning künye f 1650
- Kimlik: devletler.js:7777, 7781
- Atlasta: `f:"1650-01-01"` "Zheng Chenggong Amoy'u üs edindi"
- Kaynak: Zheng Chenggong 1650'de (順治7年, sonbahar) Xiamen'i Zheng Lian'dan aldı (ikincil). "Dongning" adı 1664'te Zheng Jing tarafından verildi. 1650-61 arası Zheng rejimi Yongli'ye bağlı Yanping prensliğidir.
- Sınıf: ÇELİŞKİ (kimlik tanımı)
- Öneri (Emre'ye seçenek):
  - (a) künye f 1650 kalsın, `ic_not_f`ye "1650-61 Yongli'ye bağlı Zheng idaresi; Dongning adı 1664" beyanı yazılsın;
  - (b) f 1661-04-30 / 1662-02-01 olsun, 1650-61 Amoy/Kinmen dilimleri guney-ming'e verilsin.
  - Gün yıl düzeyinde kalmalı (gün bulunamadı).

### San Fan isyanının başlangıcı
- Kimlik: kronoloji_cin.js:445 `1673-12-01` ↔ devletler.js:8016/8020 `1673-12-28`
- Kaynak: 康熙12年11月21日 = 1673-12-28 (künyenin değeri; yerleşimlerle uyumlu).
- Sınıf: ÇELİŞKİ
- Öneri: kronoloji_cin:445 → 1673-12-28 (12-01 büyük olasılıkla "1673-12" genişlemesi).

### Tibet'in Qing himayesine girişi
- Kimlik: devletler.js:5777 `1720-01-01` ↔ kronoloji_cin.js:505 `1720-09-01`
- Kaynak: Qing ordusunun Lhasa'ya girişi 康熙59年 8. ay (≈ Eylül sonu–Ekim başı 1720; teyitsiz).
- Sınıf: ÇELİŞKİ (iki yer tutucu)
- Öneri: 清聖祖實錄 / 清史稿 西藏傳 ganzhi'si okunup tek güne indirilsin. Ayrıca 1751 Ganden Phodrang düzenlemesi (Kashag + amban, 13 madde) EKSİK-MADDE.

### İli'nin Rus işgali
- Kimlik:
  - yerlesimler_asya.js:2964-2965 (Gulca) `1871-07-04` (Gregoryen, doğru)
  - kronoloji_cin.js:709 `1871-01-01`
  - kronoloji_cok_rusya.js:449 `1871-01-01`
  - kronoloji_orta_asya.js:1082 `1871-06-01`
- Kaynak: Rus birlikleri Kulca'ya 22 Haziran (Jülyen) = 4 Temmuz 1871 (Gregoryen) girdi (yerleşim notunun değeri; birincil kaynak bu oturumda okunmadı).
- Sınıf: ÇELİŞKİ + SESSİZ-DEĞİŞİM (07-04 kırılmasının ±30 gününde madde yok; 06-01 33 gün uzakta)
- Öneri: üç madde 1871-07-04'te birleştirilsin, `ic_not_takvim`: "Jülyen 22 Haziran = Gregoryen 4 Temmuz 1871".

### Pingnan: kuruluş ve sonu
- Kimlik: devletler.js:8357, 8361, 8367; yerlesimler_asya.js:2231 (Dali `f:"1856-01-01"`)
- Atlasta: f 1855 (TDV "panthay"), t 1873-01-15
- Kaynak:
  - TDV panthay (atlas alıntısı): «1855'te Du Wenxiu, Dali'yi zaptederek…».
  - Çin/İngilizce kaynaklar Dali'nin alınışını 咸豐6年 (Eylül 1856) verir.
  - Du Wenxiu 26 Aralık 1872'de öldü (ikincil İngilizce kaynaklar; Çin günü teyitsiz). Qing'in Dali'ye girişi/katliamı Ocak 1873.
- Sınıf: ÇELİŞKİ (TDV ↔ Çin kaynakları)
- Öneri: TDV esas → f 1855 kalsın, `ic_not_f`ye "Çin kaynakları Dali'nin alınışını 1856 (咸豐6年8月) verir" beyanı. Dali yerleşimi zaten 1856. 1872-12-26 (Du Wenxiu'nun ölümü) ayrı madde. t 1873-01-15 için kaynak okunmalı.

### Tayvan'da iki ayrı Hollanda kimliği
- Kimlik: yerlesimler_asya.js:2534 (Tainan `hollanda-dogu-hint`) ↔ 2582 (Kaohsiung `hollanda-formosa`); künye hollanda-formosa (devletler.js:18452) f 1624-01-01
- Sınıf: ÇELİŞKİ (aynı polity, iki id)
- Öneri: Tainan 1624-08-26..1662-02-01 → d:"hollanda-formosa".

---

## E. SESSİZ-DEĞİŞİM / EKSİK-MADDE

### Gulca'nın 1882'de Qing'e iadesi maddesiz
- Kimlik: yerlesimler_asya.js:2965-2966 (Gulca `rusya` → `qing-hanedani` 1882-03-22)
- Ölçüm: tek dosya taramasında 1882-02-20..04-21 aralığında Çin/Rusya maddesi bulunamadı. En yakın madde 1881-08-19 (sinir_asya:68, onay günü).
- Sınıf: SESSİZ-DEĞİŞİM
- Öneri: 1882-03-22 maddesi: "Rusya Kulca'yı Qing'e teslim etti (St. Petersburg Antlaşması 1881 gereği)". Gün Rus kaynağıyla (Jülyen 10 Mart?) teyit edilmeli.

### Kore'nin haraçgüzarlığının sonu maddesiz
- Kimlik: devletler.js:5662-5672 · joseon
- Atlasta: 1592'den 1897'ye madde yok.
- Kaynak: Shimonoseki Antlaşması md. I (atlasın japon-tayvani künyesinde alıntılanan worldjpn.net metni): Çin Kore'nin tam bağımsızlığını tanır, haraç törenleri son bulur. Ayrıca 1637 (Qing'e vassallık, Samjeondo) ve 1876 Ganghwa Antlaşması da yok.
- Sınıf: EKSİK-MADDE (toprak kırılması değil; Değişmez 2 dışı)
- Öneri: joseon künyesine:
  - 1637 Samjeondo teslimi (Sillok günü, ay-güneş çevrilerek)
  - 1876-02-27 Ganghwa
  - 1895-04-17 "Shimonoseki md. I: Çin'e haraç bağı sona erdi"

### Shimonoseki: Liaodong iadesi ve Penghu'nun fiilî işgali
- Kimlik: kronoloji_cin.js:757-761; yerlesimler_asya.js:2778-2787 (Lüşun), 2565-2566 (Penghu)
- Atlasta:
  - kronoloji_cin:760 «Tayvan ve Liaodong yarımadasını Japonya'ya bıraktı» — Üçlü Müdahale ve iade yok.
  - Lüşun'un 1894-11-21..1895 Japon işgali bilerek açılmadı (kayıt notu: "bir yıldan kısa").
  - Penghu qing → japon-tayvani 1895-04-17.
- Kaynak: Üçlü Müdahale 23 Nisan 1895; Liaodong iade sözleşmesi 8 Kasım 1895 (ikincil, bu oturumda birincil okunmadı). Penghu Mart 1895'te (≈ 23-26 Mart) Japon çıkarmasıyla, antlaşmadan önce işgal edildi.
- Sınıf: EKSİK-MADDE (Liaodong iadesi); SINIR (Penghu fiilî işgali, beyan)
- Öneri:
  - kronoloji_cin'e 1895-04-23 (Üçlü Müdahale) ve 1895-11-08 (Liaodong iade sözleşmesi) maddeleri.
  - 760'daki cümleye "Liaodong Kasım 1895'te iade edildi" eklensin.
  - Penghu'ya `ic_not`: "Japon işgali Mart 1895; hukukî devir 17 Nisan (imza) / 8 Mayıs (onay)".
  - Liaodong noktasında (Lüşun) dilim açılıp açılmayacağı Emre'nin kararı (atlas kuralı: bir yıldan kısa işgal açılmıyor).

### Shimonoseki: Tayvan'ın 04-17..05-23 sahibi
- Kimlik: yerlesimler_asya.js:2537, 2548, 2585 (`meiji-japonya` 1895-04-17..05-23) ↔ künye japon-tayvani f 1895-04-17
- Sınıf: ÇELİŞKİ (id tutarsızlığı)
- Öneri: d:"japon-tayvani" (harita boyası aynı: meiji-japonya). Ya da f 1895-05-08 (onay teatisi), künyenin ic_not'undaki seçenekle birlikte Emre'ye.

### Sincan eyaleti 1884
- Kimlik: kronoloji_orta_asya.js:1136 `t:"1884-11-18"`; kronoloji_cin.js:736 (yalnız metinde "1884")
- Kaynak:
  - Çin kaynakları (ifeng özel sayfası; Jinan Üniv. ve CNKI makaleleri, arama özeti) yalnız 光緒10年 (1884) "新疆建省上諭" verir.
  - Yaygın gün 光緒10年9月30日 = 17 Kasım 1884; bu bu oturumda birincil kaynaktan teyit edilemedi.
- Sınıf: ÇELİŞKİ (1 gün; teyitsiz)
- Öneri: 清德宗實錄 光緒10年9月 ganzhi'si okunup gün kesinleşsin. 1884-11-17 doğrulanırsa madde taşınsın. Liu Jintang'ın ilk vali atanması da madde olabilir.

### Doğu Türkistan 1864-1870: eksik yerel rejimler (EKSİK-DEVLET)
- Kimlik:
  - yerlesimler_asya.js:2959-2964 (Gulca: 1755-1871 kesintisiz qing)
  - 2949-2952 (Ürümçi: 1864-06-04'ten yakub-beg)
  - 2911-2917 (Hotan: 1864-06-04'ten yakub-beg)
  - 2876-2894 (Kaşgar: 1864-06-04'ten yakub-beg; künye f 1865-01-01 → künye aşımı, beyanlı)
- Kaynak: TDV Yâkub Beg (atlasta kronoloji_orta_asya 1060-1080): Kaşgar'da Sıddık Beg, sonra Büzürg Han (1864-65); Yâkub Beg Hoten'i 1866'da, Dunganları Urumçi'den 1870'te aldı. Kim 2004 (atlas özeti): Kuça Reşidüddin Hoca rejimi.
- Sınıf: EKSİK-DEVLET
- Öneri (künye adayları):
  - İli/Taranchi Sultanlığı (Gulca, 1864/66–1871): Gulca'nın 1864-1871 qing dilimi bu rejime verilsin.
  - Tuo Ming / Daud Halife Dungan idaresi (Ürümçi, 1864–1870): Ürümçi 1864-1870.
  - Hotan Habibullah rejimi (1864–1866/67): Hotan 1864-1866.
  - Kaşgar 1864-06-04..1865-01: Sıddık Beg idaresi ya da beyanlı boşluk.
  - Günler TDV/Kim 2004'ten okunmalı.

### Altışehir 1757–1759: Hoca kardeşler eksik
- Kimlik: yerlesimler_asya.js:2892, 2905, 2915, 2923 (`cungar` 1705..1759-01-01) · cungar künyesi t 1758-01-01 (beyanlı aşım)
- Kaynak: Cungar çöküşünden sonra Burhaneddin ve Hoca Cihan (Afakî) Altışehir'i 1757-59 arasında bağımsız yönetti. Qing Kaşgar/Yarkent'i Temmuz–Ağustos 1759'da aldı (TDV Kâşgar/Doğu Türkistan maddeleri bu oturumda okunmadı).
- Sınıf: EKSİK-DEVLET + HAYALET (cungar dilimleri künye t'sinden 1 yıl uzun)
- Öneri: Hoca kardeşler (Afakî) künyesi, 1757–1759. Bu Altışehir dilimlerinin cungar → afaki-hocalar → qing olarak kurulması aşımı da giderir. Gün TDV'den.

### Kiralık topraklar ve Kowloon/Yeni Topraklar: nokta yok
- Kimlik: yalnız `Hong Kong` (2366, tek nokta, 22.32N — Kowloon enlemi), `Qingdao` (1958; almanya 1898-03-06 ✓), `Lüşun` (2782; rusya 1898-03-27 → Japonya 1905-09-05 ✓). Weihaiwei, Guangzhouwan (Fort-Bayard), Dalian, Kowloon ve Yeni Topraklar için yerleşim YOK (Grep "Weihai|Guangzhouwan|Fort-Bayard|Dalian|Kowloon" eşleşme vermedi).
- Sınıf: EKSİK (yerleşim) — kronolojideki Kowloon 1860-10-24 ve Yeni Topraklar sınırı 1899-03-19 maddeleri haritada karşılıksız
- Öneri: noktalar açılsın:
  - Weihaiwei (İngiliz, 1898-07-01 sözleşmesi; fiilî 1898-05-24; 1930-10-01 iade)
  - Fort-Bayard/Zhanjiang (Fransız, 1899-11-16 sözleşmesi; 1945 iade)
  - Dalian (Rus 1898-03-27; Japon 1905)
  - Yeni Topraklar/Tai Po (İngiliz kira 1898-07-01; fiilî devir 1899-04-16)
  - Hong Kong noktası Victoria'ya (22.28N, 114.16E) taşınıp Kowloon ayrı nokta yapılsın (1860-10-24)
  - Hepsinin günleri antlaşma metinlerinden teyit edilmeli.

### Makao 1557–1887 "portekiz"
- Kimlik: yerlesimler_asya.js:2362
- Not: Ming/Qing'e yıllık kira ödenen yerleşimdir; egemenlik 1887'ye dek tartışmalıdır. Atlas Portekiz yazmış.
- Sınıf: SINIR (beyan)
- Öneri: `ic_not`a "1557-1849 Çin'e kira ödendi (foro do chão); fiilî Portekiz idaresi" beyanı. Egemenlik başlangıcı için seçenekler:
  - 1849 (Amaral'ın kirayı kesmesi)
  - 1887-12-01
  - Emre'ye sunulsun.

---

## F. Doğru bulunanlar (kısa)
- Qing Pekin 1644-06-06 · Nanjing 1645-06-08 · Longwu 1646-10-06 · Guangzhou 1650-11-24
- Daxi 1644-09-09 / 12-04 / 1647-01-02 (Mingshi/Qingshigao ganzhi'li)
- Zeelandia 1662-02-01 · Luermen 1661-04-30
- Wu Sangui ayaklanması 1673-12-28, ölümü 1678-10-02, Kunming 1681-12-07
- Taiping: Jintian 1851-01-11, Nanjing 1853-03-19, Tianjing'in düşüşü 1864-07-19
- Nanking Antlaşması 1842-08-29 · Kiautschou 1898-03-06 · Port Arthur 1898-03-27
- Aigun 1858-05-28 · Pekin Ek Antlaşması 1860-11-14 · Tarbagatay 1864-10-07 · St. Petersburg onayı 1881-08-19 (hepsi Gregoryene çevrilmiş, beyanlı)
- Nerçinsk 1689-09-06 (1 günlük Çin/Rus farkı beyanlı, açık)
- Ryukyu 1872-10-16 · 1879-03-27 · Formosa Cumhuriyeti 1895-05-23 / 10-21 (JACAR) · İspanyol Formosası 1642-08-26

---

## G. KAYNAKSIZ künyeler (tek tablo)

| Künye (devletler.js satırı) | kaynak alanı | Kaynaksız uç / madde | Önerilen kaynak |
|---|---|---|---|
| guney-ming (7741) | "bulunamadı" | f, t, bütün maddeler | 明史 卷120 諸王傳 / 清史稿 世祖·聖祖本紀; Struve, *The Southern Ming* (Yale 1984); 中国大百科全书 "南明" |
| tungning (7776) | "bulunamadı" | f 1650, 1661, 1683 | 清史稿 施琅傳 / 鄭成功傳; Andrade 2008 (Hollanda yakası); 國史館 / 臺灣歷史博物館 |
| dashun (8026) | "bulunamadı" | hepsi (bkz. B) | 明史 卷309 流賊·李自成傳; 清史稿 卷4; 中国大百科全书 "大顺" |
| san-fan (8015) | "bulunamadı" | f, 1678 maddeleri | 清史稿 卷474 吳三桂傳; 聖祖本紀 |
| taiping (8133) | "bulunamadı" | künye f/t (bazı maddelerin kaynağı var) | 清史稿 文宗·穆宗本紀; Spence 1996; 中国大百科全书 "太平天国" |
| cungar (5395) | "bulunamadı" (TDV Kalmuklar ic_not'ta) | 1634, 1697, 1755, 1758 | TDV "Kalmuklar" (künye kaynağına yazılmalı); 清史稿 藩部傳 準噶爾; Perdue, *China Marches West* (2005) |
| ryukyu (5754) | "bulunamadı" | 1429, 1879 | 中山世鑑/球陽; kotobank 琉球処分 (1879-03-27) |
| joseon (5662) | "bulunamadı" | 1592, 1897, 1910 | encykorea.aks.ac.kr; 朝鮮王朝實錄 |
| qing-hanedani (5625) | var (cin--ulke, CHC 9) | 1839-01-01, 1900-01-01 maddeleri yer tutucu; odak "Mukden" yanlış | 清史稿 宣宗/德宗本紀 |
| tibet-ganden-phodrang (5771) | "tibet" | 1642, 1720, 1904, 1912 yer tutucu | Petech, *China and Tibet in the Early XVIIIth Century* (1972); 清史稿 西藏傳 (tartışmalı konu: ÇHC/Tibet kaynakları ayrı yazılmalı) |
| hosut (7765) | "kalmuklar" (TDV) | 1636, 1717, 1724 yıl | TDV Kalmuklar okunup gün; 清史稿 藩部傳 青海 (羅卜藏丹津 isyanı 雍正2年) |
| kuca-hocalari (12137) | okunmadı | — | Kim 2004 |

---

## Sayılar
- Künye: 24 okundu. Bunlar: qing, ming, guney-ming, tungning, dashun, daxi-zhang, san-fan, taiping, pingnan, hosut, cungar, yakub-beg, ryukyu, joseon, tibet-ganden-phodrang, formosa-cumhuriyeti, japon-tayvani, hollanda-formosa, ispanyol-formosa, hong-kong-ingiliz, makao-portekiz, goryeo (yan), kamakura/muromachi (yan).
- Kronoloji maddesi: yaklaşık 95 (kronoloji_cin 1642–1919, kronoloji_sinir_asya 50-99, kronoloji_orta_asya 1060-1136, kronoloji_cok_orta_asya2 92-129, kronoloji_sinir_nokta2 36-43, künye içi maddeler).
- Yerleşim: yaklaşık 45 zincir ayrıntılı (Doğu Türkistan 8, Tayvan/Penghu 5, Sichuan/Shaanxi/Henan 9, Mançurya 6, HK/Makao/Qingdao/Yantai/Lüşun 5, Hebei/Gansu örnekleri). Ayrıca isyan devleti dilimi taraması 110 eşleşme (pingnan/taiping/san-fan/dashun/daxi/guney-ming/hosut/kuca), ming-hanedani aşımı 17 dilim.
- Bulgu (yaklaşık 33):
  - TAKVİM 5 (2'si ganzhi ile kesin, tablo teyitsiz)
  - TARİH-HATA 5
  - SINIR / yanlış sahip 3
  - HAYALET 3 grup
  - ÇELİŞKİ 9
  - SESSİZ-DEĞİŞİM 2
  - EKSİK-MADDE 3
  - EKSİK-DEVLET 2 grup (5 künye adayı)
  - EKSİK yerleşim 1 grup (5 nokta)
  - KAYNAKSIZ tablo 12 künye

## Ölçülemedi
- sinocal.sinica.edu.tw 401 verdi; bütün ay-güneş çevirileri ganzhi hesabıdır, tablo teyitsiz. Ay başları tahmin.
- 中国大百科全书 (zgbk.com) denenmedi (makine yükü).
- Kowloon 1860 / Yeni Topraklar 1898-07-01 / Weihaiwei / Guangzhouwan / Makao 1887 günleri birincil metinden teyit edilmedi.
- Nerçinsk'teki 1 günlük fark çözülmedi.
- Kyakhta'nın Çin günü (雍正5年) okunmadı.
- 1720 Lhasa girişi, 1724 Hoşut, 1759 Kaşgar/Yarkent, 1884 Sincan günleri birincil kaynaktan okunmadı.
- Değişmez 2 taraması yalnız örneklemle yapıldı. Sistematik ±30 gün ölçümü (denetle.py) koşturulmadı: Bash yasak, makine yükü.
- kronoloji_sinir_adalar_dogu_asya, kronoloji_japonya, kronoloji_portekiz, kronoloji_ingiltere, kronoloji_cok_dogu_asya (yalnız bir Grep) okunmadı. yer_yama_cin / yer_yama_doguasya taranmadı.
- Tibet 1720/1751 ve Tayvan statüsü tartışmalı konulardır: ÇHC ve öteki taraf kaynakları ayrı okunmadı. Öneriler yalnız gün düzeyindedir, statü hükmü içermez.


---

## ÇİN DENETİMİ — PARÇA C: 1911–1949

Kapsam: Çin Cumhuriyeti, Moğolistan (Bogd Hanlık · MHC), Tannu Tuva, Tibet (Ganden Phodrang), I./II. Doğu Türkistan, Çin Sovyet Cumhuriyeti, Mançukuo, Mengjiang, Doğu Hebei, Wang Jingwei Nanjing, Japon Tayvanı, Kwantung/Port Arthur, Qingdao, Hong Kong, Hainan, İç Savaş 1945–49.
Ölçüm: worktree pensive-engelbart-7e58ff, makine UMIT, yalnız Grep/Read/WebFetch/WebSearch (Bash yok). Hiçbir depo dosyası değiştirilmedi.
İşaret: "DOĞRULANMADI" = günü bu turda dış kaynakla teyit edilemedi (model bilgisi ya da zayıf kaynak).

## 0. Yöntem notu — yama dosyaları canlı değil (Mançukuo bulgusunun ağırlığı)
- `data/yer_yama_1923_1945.js` ve `data/yer_yama_halef_1946.js`: `index.html`de `<script src>` satırı YOK (Grep "yer_yama" → 0 eşleşme); `arac/girdi_listesi.py` GIRDI_DOSYALARI'nda YOK (yalnız `yerlesimler_halef_1946.js` var — farklı dosya).
- Yamalar motora doğrudan girmez; `arac/_sahiplik_uygula.py` ile `yerlesimler*.js`e İNDİRİLİR (satır 1787: "Z5 gövdesi (`data/yer_yama_1923_1945.js`, 3.982 kayıt)… taban kapısı"). Yani haritanın kaynağı canlı `yerlesimler*.js`tir.
- Canlı veride (aşağıda 1. bulgu) Z5/MANCURYA-ISG-1014 yamasının Mançurya/Rehe kayıtları YOK ⇒ yama ya hiç indirilmemiş ya da 3–4 Kasım DUNYA-1102 "1923 ESKİ UFUK DÜZELTMESİ / DEVRALMA" turunda ezilmiş. Hangisi olduğu ölçülemedi (git geçmişi Bash ister).

---

### 1. Mançukuo canlı haritada yalnız Hsinking noktası (Mançurya 1932–45 ÇC boyanıyor)
- Kimlik: data/yerlesimler_asya.js:2725 Mukden · 2731 Liaoyang · 2750 Cilin · 2756 Ningguta · 2764 Aigun · 2773 Harbin · 3080 Qiqihar · 1778 Cehol (Chengde) · data/yerlesimler_nokta_asya_0917.js:59 Chifeng · künye `mancukuo` (devletler.js:10902)
- Atlasta: hepsi `{f:"1912-02-12", t:"1949-10-01", d:"cin-cumhuriyeti"}`; `isg:` yok. Canlı veride `mancukuo` geçen tek kayıt: yerlesimler_nokta2.js:30 "Hsinking (Changchun)" 1932-03-09→1945-08-17. Kaynaklı doğru zincir yer_yama_1923_1945.js:7711–7923'te (Mançukuo 1932-03-09/Rehe 1933-03-04 → 1945-08-17; Sovyet `isg:` 1945-08-18/21 → 1946-03-12…05-03) ama canlıya inmemiş.
- Kaynak: yamanın kendi kaynakları (Nihon Daihyakka 「満州国」, BSE 'Маньчжурская операция', Glantz LP-7, 吉林省编年纪事, FRUS 1946 c. IX).
- Sınıf: SINIR (+ SESSİZ-DEĞİŞİM tersinden: künye kronolojisinde 1932-03-09 kuruluş ve 1933-03-04 Rehe maddesi var, haritada karşılık yok)
- Öneri: MANCURYA-ISG-1014 / Z5 Mançurya-Rehe kayıtlarını `_sahiplik_uygula.py` taban kapısından geçirip yerlesimler_asya.js'e indir; Mergen (Nenjiang), Sanxing (Yilan) canlıda yoksa ad+3 km mükerrer taramasıyla ekle. Önce git log ile ezilme mi, hiç inmeme mi ölç.

### 2. Japon işgal yapıları (Mengjiang, Doğu Hebei, Wang Jingwei) haritada toprak almıyor; Hainan ise s: ile Japon
- Kimlik: yerlesimler_asya.js:1770 Kalgan · 2858 Hohhot · 3073 Baotou · 1787 Datong · 1726 Pekin · 1750 Tiencin · 1983 Nanking · 2052 Şanghay ↔ 2482/2496/2503/2510 Hainan (Qiongzhou, Danzhou, Yazhou, Wanzhou)
- Atlasta: Kuzey/Doğu Çin 1912-02-12→1949-10-01 düz `cin-cumhuriyeti` ("1937–45 Japon işgali … izlenmedi" beyanı). Hainan: `{f:"1939-02-10", t:"1945-09-02", d:"meiji-japonya"}` — işgal `s:` (egemenlik) olarak yazılmış.
- Kaynak: künyeler mengjiang (devletler.js:18052), doguhebei-ozerk (18502), nanjing-wang-jingwei (10914) — üçünün de haritada tek noktası yok.
- Sınıf: SINIR + ÇELİŞKİ (aynı işgal bir yerde egemenlik, öbür yerde yok sayılıyor)
- Öneri: Seçenek A — Hainan'ı da `isg:` katmanına taşı (Z5 ölçütü ③: "hukuken sürüyor→isg:"). Seçenek B — Mengjiang (Kalgan, Hohhot, Baotou, Datong 1937-10/1939-09→1945-08-19) ve Wang Jingwei (Nanking/Şanghay 1940-03-30→1945-08-16) için `s:` yaz (Z5 ölçütü ②: yeni kukla devlet → künye; Mançukuo böyle yapıldı). Hangi ölçüt tutarlı uygulanacak: Emre kararı. Doğu Hebei (1935-11-25→1938-02-01) için nokta gerekir (Tongzhou).

### 3. Moğolistan: Çin denetiminin sonu Temmuz değil Şubat 1921
- Kimlik: yerlesimler_asya.js:2822–2844 (Karakurum, Urga, Uliastay…) · künye `mogolistan` devletler.js:7865
- Atlasta: `{f:"1919-11-22", t:"1921-07-11", d:"cin-cumhuriyeti"}` → `mogolistan` 1921-07-11.
- Kaynak: Urga Muharebesi Şubat 1921 başı, Çin garnizonu kaçtı; Bogd Han tahta iade edildi (Şubat 1921). Gün kaynaklarda 1–4 / 2–5 Şubat; iade günü 11, 22 ya da 26 Şubat diye çelişiyor (Wikipedia 'Battle of Urga'; warhistory.org; akademik aday: S. L. Kuzmin 2017, academia.edu/35801743 — açılmadı). BRE (bigenc.ru) 401 verdi.
- Sınıf: TARİH-HATA + EKSİK-MADDE
- Öneri: Çin dönemi t → Şubat 1921 (gün DOĞRULANMADI; Kuzmin/БРЭ ile teyit sonra yazılmalı); 1921-02 → 1921-07-11 `mogolistan` (Bogd Han restorasyonu, Ungern fiilî denetimi — BEYANLI). Kronolojiye "Ungern Urga'yı aldı, Bogd Han tahtına döndü" maddesi. Halk hükûmeti 1921-07-11 maddesi zaten var.

### 4. Kobdo 1919–21 Çin dönemini almıyor (iç tutarsızlık)
- Kimlik: yerlesimler_asya.js:2853 Kobdo (Hovd)
- Atlasta: `{f:"1912-08-20", t:"1924-11-26", d:"mogolistan"}` — öteki Dış Moğol noktalarındaki 1919-11-22→1921 Çin dönemi yok.
- Kaynak: künye `mogolistan` kronolojisi 1919-11-22 "muhtariyet kaldırıldı" (bütün Dış Moğolistan); Kobdo'ya özgü kaynak aranmadı — DOĞRULANMADI.
- Sınıf: ÇELİŞKİ
- Öneri: Kobdo'ya da Urga ile aynı Çin dönemini yaz ya da Kobdo'nun Çin garnizonu dışında kaldığını kaynakla beyan et.

### 5. Kyahta Antlaşması 1915 kronolojide yok
- Kimlik: devletler.js:7869 `mogolistan` kronoloji
- Atlasta: madde yok.
- Kaynak: American Journal of International Law, "Declarations made by Russia and China upon signing the Tripartite Agreement … of June 7 (May 25), 1915" (cambridge.org/core/journals/american-journal-of-international-law/article/abs/…B4F002D9…) — imza 7 Haziran 1915 Gregoryen = 25 Mayıs Jülyen. DOĞRULANDI.
- Sınıf: EKSİK-MADDE
- Öneri: `{t:"1915-06-07", tur:"antlasma", b:"Kyahta Üçlü Antlaşması: Rusya ve Çin Dış Moğolistan'ın muhtariyetini, Moğolistan Çin'in metbuluğunu tanıdı", ic_not_takvim:"Jülyen 1915-05-25 = Gregoryen 1915-06-07"}`. Toprak değişimi yok.

### 6. `cin-cumhuriyeti` 1912-11-01 maddesi iki olayı birleştiriyor
- Kimlik: devletler.js:7855
- Atlasta: `t:"1912-11-01", tur:"toprak-kayip", b:"Dış Moğolistan ve Tibet fiilî bağımsızlıklarını ilân etti"`, kaynaksız.
- Kaynak: Moğolistan ilanı 1911-12-01/1911-12-29 (künye mogolistan f 1911-12-29); Tibet bildirisi 1913-02-13 (Shakabpa, Tibet: A Political History, 1967, s. 246–248, aktaran tibetjustice.org/materials/tibet/tibet1.html: "eighth day of the first month of the Water-Ox year"). Rus-Moğol Urga protokolü 1912-11-03 — DOĞRULANMADI.
- Sınıf: TARİH-HATA + KAYNAKSIZ
- Öneri: maddeyi ikiye böl: 1911-12-29 "Dış Moğolistan ayrıldı" (haritadaki kırılmayla aynı gün) ve 1913-02-13 Tibet (bkz. 7). 1912-11-01 kaldırılsın.

### 7. Tibet 1912/1913 statüsü — TARTIŞMALI
- Kimlik: devletler.js:5779 `tibet-ganden-phodrang` · yerlesimler_asya.js:2988/2998/3007 Lhasa, Şigatse, Gyantse
- Atlasta: `t:"1912-01-01", tur:"bolunme", b:"…13. Dalai Lama bağımsızlığını ilan etti"`, kaynaksız; yerleşimler 1912-02-12'de `tibet-ganden-phodrang`.
- Kaynak (Tibet tarafı): 1913-02-13 bildirisi (Shakabpa 1967). Kaynak (ÇHC tarafı): bildiri bağımsızlık ilânı sayılmaz; Tibet Çin'in parçası kaldı (ÇHC beyaz kitapları — bu turda açılmadı, DOĞRULANMADI). Simla 1914-07-03 (DOĞRULANMADI).
- Sınıf: TARİH-HATA + ÇELİŞKİ (tartışmalı)
- Öneri (seçenekler, Emre): (a) madde günü 1913-02-13'e taşınsın, metin "Dalai Lama bildirisi; Tibet tarafı bağımsızlık ilânı sayar, ÇHC saymaz" — iki kaynak `ic_not`ta; (b) yerleşim kırılması 1912-02-12'de kalırsa ona bağlı madde Qing'in sonu (cin-cumhuriyeti 1912-02-12) olarak beyan edilsin. Ayrıca Simla maddesi (tartışmalı, ÇC imzalamadı).

### 8. Mançukuo: ilan 1932-03-01, Kangde 1934-03-01
- Kimlik: devletler.js:10903 (f), 10909 (Kangde maddesi)
- Atlasta: f `1932-03-09` (özet: "devletin ilan günü ayrıca ölçülemedi"); `t:"1934-01-01", tur:"hukumdar", b:"Puyi imparator ilan edildi (Kangde)", kaynak:"BRIT Puyi — YIL verir"`.
- Kaynak: kotobank 「満州国」 (Yamakawa Nihonshi Shō-jiten: «3月1日には建国宣言を行い»; Nihon Daihyakka: «3月9日溥儀の執政就任式»; «34年3月帝政へ移行» — gün yok). 1934-03-01 帝政実施: JACAR glossary (jacar.go.jp/english/exhibition/glossary_en/term2/0050-0030-0040-0020.html) ve archontology — ay DOĞRULANDI (kotobank), gün 1 Mart JACAR'a dayanır (tek kaynak).
- Sınıf: TARİH-HATA (Kangde) · beyan (f)
- Öneri: Kangde maddesi `t:"1934-03-01"` (kaynak: JACAR + kotobank ay). f için kuruluş maddesi `1932-03-01 kurulus "Mançukuo'nun kuruluşu ilan edildi"` eklensin; f'nin 03-01'e çekilmesi Emre kararı (yerleşimler 03-09'da — ikisi birlikte taşınmalı).

### 9. Wang Jingwei: Almanya-İtalya tanıması 1941-07-01, madde günü 1941-01-01
- Kimlik: devletler.js:10922 · ayrıca 10916 `ic_not_t`
- Atlasta: `t:"1941-01-01", b:"Temmuz 1941'de Almanya ve İtalya … tanıdı"`; ic_not_t "bitiş GÜNÜ ölçülemedi" ama 1945-08-16 son maddesi var (eskimiş not).
- Kaynak: FRUS 1941 c. V d. 591 (history.state.gov/historicaldocuments/frus1941v05/d591): Gauss'un 2 Temmuz 1941 telgrafı, Çin Dışişleri bildirisi «The recognition of the puppet regime at Nankin by the German and Italian Governments…»; tanıma 1 Temmuz (yıllık kronolojiler) — gün 1 Temmuz tek ikincil kaynakta, DOĞRULANMADI; ay DOĞRULANDI.
- Sınıf: TARİH-HATA (+ eskimiş ic_not)
- Öneri: `t:"1941-07-01"`, kaynak FRUS; ic_not_t güncellensin.

### 10. Mengjiang künye f ile kuruluş maddesi uyuşmuyor
- Kimlik: devletler.js:18052–18053
- Atlasta: künye `f:"1936-01-01"`; kuruluş maddesi `1936-05-12` (Vikipedi, ikincil). Künye kaynağı kotobank yalnız 1937-10 / 1939-09 verir.
- Sınıf: ÇELİŞKİ + KAYNAKSIZ (gün)
- Öneri: f = 1936-05-12 (kaynak bulunursa) ya da kuruluş maddesi 1936-01-01 + "yalnız yıl" beyanı; ikisi aynı olmalı. Gün DOĞRULANMADI.

### 11. I. Doğu Türkistan İslâm Cumhuriyeti — t TDV ile doğrulandı, "son" maddesi eksik
- Kimlik: devletler.js:18059 · yerlesimler_asya.js:2897 Kaşgar
- Atlasta: t `1934-03-21`; özet "t [gun yok] … Vikipedi 6 Şubat"; kronolojide `son` maddesi yok.
- Kaynak: TDV «Türkistan» (islamansiklopedisi.org.tr/turkistan; `dogu-turkistan` slug'ı yönlendirme): kuruluş "Kâşgar'da Şarkî Türkistan Cumhuriyeti ilân edildi (Kasım 1933)"; hükûmet General Ma'nın 21 Mart 1934'te şehre girmesiyle Kaşgar'ı bıraktı. DOĞRULANDI (TDV).
- Sınıf: EKSİK-MADDE (+ özet notu eskimiş)
- Öneri: `{t:"1934-03-21", tur:"son", b:"Tungan (Ma) kuvvetleri Kaşgar'a girdi; hükûmet şehri bıraktı", kaynak:"TDV Türkistan"}`; özetteki "gun yok/6 Şubat" notu TDV çelişkisi olarak `ic_not`a taşınsın.

### 12. II. Doğu Türkistan Cumhuriyeti (Gulca) — TDV uç günleri atlasla aynı; bitiş maddesi yok; halef yaması çelişkili
- Kimlik: devletler.js:18063 · yerlesimler_asya.js:2968 Gulca · data/yer_yama_halef_1946.js:79–81 (canlı değil)
- Atlasta: künye 1944-11-12 → 1949-10-20 (canlı Gulca kaydı aynı); özet "t: ay-gün bulunamadı (Vikipedi 20 Aralık)"; kronolojide son maddesi yok. Yama: 1946-01-01 → 1949-01-01.
- Kaynak: TDV «Türkistan»: "Kulca'da (Yining)… yeniden kuruldu (12 Kasım 1944)"; devletin sonu 20 Ekim 1949; 1946'da Sovyet baskısıyla Sincan eyalet hükûmetiyle birleştirildi. DOĞRULANDI (TDV).
- Sınıf: EKSİK-MADDE + ÇELİŞKİ (yama; özet)
- Öneri: `{t:"1949-10-20", tur:"son", kaynak:"TDV Türkistan"}`; özet notu düzeltilsin; yer_yama_halef_1946.js:79–81'deki 1946–1949 Gulca dönemi uygulanmasın (TDV ile çelişir). Üç Vilayet'in Çöçek (Tacheng) ve Altay noktası var mı ölçülmedi.

### 13. Anakara Çin 1949-10-01'de toptan ÇHC'ye geçiyor; şehir düşüş günleri yok
- Kimlik: yerlesimler_asya.js ~60 Çin noktası (`t:"1949-10-01"` → `cin-halk-cumhuriyeti`, kaynak "ilan 1949-10-01, tsv kunye") · devletler.js:21625 ÇHC künyesi
- Atlasta: Pekin, Nanking, Şanghay 10-01'e dek ÇC; Kanton, Çongqing, Çengdu, Kunming 10-01'de ÇHC (henüz ÇC elindeyken).
- Kaynak: Pekin 1949-01-31, Nanking 1949-04-23: 12371.cn / cpc.people.com.cn (ÇKP tarih portalı) — DOĞRULANDI. Şanghay 05-27, Guangzhou 10-14, Chongqing 11-30, Chengdu 12-27: yalnız toutiao tablosu — DOĞRULANMADI (resmî kaynakla teyit gerek).
- Sınıf: SINIR + EKSİK-MADDE
- Öneri: 1949-10-01 öncesi ÇKP denetimi için künye yok; seçenekler: (a) ÇHC f'sinden önceki düşüşler için ÇC dönemi sürsün, ÇHC 10-01'de başlasın ama 10-01 sonrası düşen şehirler (Kanton 10-14, Çongqing 11-30, Çengdu 12-27, Kunming — Lu Han 1949-12-09 DOĞRULANMADI) kendi günlerinde geçsin + her biri için ÇHC kronoloji maddesi; (b) "ÇKP denetim bölgeleri 1945–49" künyesi açılsın (BOYALAR tuzu). Emre kararı.

### 14. Japon Tayvanı'nın sonu maddesi yok
- Kimlik: devletler.js:18480 (t 1945-10-25), yerlesimler_asya.js:2539–2627 (1945-10-25 → cin-cumhuriyeti)
- Atlasta: kronoloji 1945-08-14, 09-30, 10-15 maddeleri; 10-25 devir maddesi yok. Künye ic_not: "25 Ekim 1945 teslim … t okunmadı".
- Kaynak: bu turda açılmadı — DOĞRULANMADI (aday: 國史館 Academia Historica, 臺灣省行政長官公署 kabul töreni).
- Sınıf: EKSİK-MADDE (Değişmez 2: 10-15 maddesi ±30 gün içinde olduğu için ölçüt muhtemelen geçer, ama olayı anlatan madde yok)
- Öneri: `{t:"1945-10-25", tur:"son", b:"Taipei'de Japon teslim töreni; Tayvan Çin Cumhuriyeti idaresine geçti"}` — kaynak Academia Historica; ÇC/ÇHC/ABD hukukî statü tartışması `ic_not`ta.

### 15. Çamdo 1918 ve 1950
- Kimlik: yerlesimler_asya.js:3016–3017
- Atlasta: ÇC 1912-02-12 → `tibet-ganden-phodrang` 1918-08-19 → ÇHC 1951-05-23.
- Kaynak: 1918-08-19 = Teichman aracılığıyla Chamdo geçici anlaşması; Tibet ordusunun şehri alışı 1918 baharı — DOĞRULANMADI. ÇHC'nin Çamdo'yu alışı 1950-10-19 — DOĞRULANMADI (dönem dışı).
- Sınıf: SINIR
- Öneri: fiilî alış günü kaynakla bulunursa kırılma oraya; 1950 Çamdo muharebesi için kırılma 1950-10, Lhasa 1951-05-23'te kalsın (iki ayrı olay).

### 16. Hong Kong Japon işgali yazılmamış (beyanlı)
- Kimlik: yerlesimler_asya.js:2370
- Atlasta: hong-kong-ingiliz 1842→1997, beyan: "Japon işgali (1941-12-25/1945-08-30) ayrı dönem yazılmadı".
- Sınıf: SINIR (beyanlı borç)
- Öneri: `isg:` 1941-12-25 → 1945-08-30 meiji-japonya (günler DOĞRULANMADI).

### 17. Künye ic_not'ları eskimiş
- tibet-ganden-phodrang devletler.js:5772 ic_not_t "Lhasa hükûmetinin feshi 1959, gün ölçülemedi" — oysa 1959-03-28 maddesi var. Yerleşimler 1951-05-23'te bitiyor, künye 1959'da: 1951–59 topraksız künye (beyan gerek).
- nanjing-wang-jingwei (bkz. 9).
- Sınıf: ÇELİŞKİ (not)

### 18. Port Arthur / Kwantung 1945–55
- Kimlik: yerlesimler_asya.js:2787 Lüşun
- Atlasta: meiji-japonya → 1945-09-02 `cin-cumhuriyeti` → 1949-10-01 ÇHC; Sovyet üssü (1945–1955) `isg:` yok; kaynak "Cin-Sovyet Dostluk Antlasmasi 1945-08-14".
- Kaynak: yer_yama_1923_1945.js Mukden isg kaynakları "Port Arthur hariç" Sovyet çekilmesi; Port Arthur iadesi 1955-05 — DOĞRULANMADI.
- Sınıf: SINIR
- Öneri: `isg:` sovyet-rusya 1945-08-22 (Sovyet indirmesi, DOĞRULANMADI) → 1955-05-26 (DOĞRULANMADI); Dalian ayrı nokta yok — ölç.

---

## KAYNAKSIZ tablosu (kronoloji maddesinde `kaynak:` yok)
| Künye | Madde | Öneri kaynak |
|---|---|---|
| cin-cumhuriyeti | f/kaynak "bulunamadı"; 1911-10-10, 1912-02-12, 1912-11-01, 1916-06-06 | 清帝遜位詔書 (zh.wikisource, yerleşimlerde zaten okunmuş); 中国大百科全书 «辛亥革命»; Yuan Shikai ölümü: Britannica |
| mogolistan | künye kaynağı "bulunamadı"; 5 madde kaynaksız | AJIL 1915 (Kyahta); Kuzmin 2017; Bawden, Modern History of Mongolia |
| tibet-ganden-phodrang | 1642, 1720, 1904, 1912 maddeleri | Shakabpa 1967 + ÇHC beyaz kitabı (iki taraf); Petech 1972 (1720) |
| mengjiang, dogu-turkistan-islam-cumhuriyeti, -gulca, cin-sovyet-cumhuriyeti, doguhebei-ozerk | çoğu madde yalnız Vikipedi | TDV Türkistan (DTİC, Gulca); kotobank 中華ソビエト共和国 / 冀東防共自治政府 (künye kaynaklarında zaten var — maddelere taşınsın) |
| ÇC 1931-09-18 (Mukden olayı) | kaynak USHMM | kotobank 「満州事変」 ile çift teyit |

## Sayılar
- Künye denetlendi: 14 (cin-cumhuriyeti, mogolistan, mogolistan-halk-cumhuriyeti, tannu-tuva, tibet-ganden-phodrang, mancukuo, nanjing-wang-jingwei, mengjiang, doguhebei-ozerk, dogu-turkistan-islam-cumhuriyeti, dogu-turkistan-cumhuriyeti-gulca, cin-sovyet-cumhuriyeti, japon-tayvani, hong-kong-ingiliz).
- Kronoloji maddesi okundu: ~60 (yalnız künye içi). kronoloji_cin.js / kronoloji_cok_dogu_asya.js / kronoloji_cok_1923_1945.js 1911–49 maddeleri OKUNMADI.
- Yerleşim: ~75 canlı Çin/Mançurya/Moğol/Doğu Türkistan/Tibet/Tayvan/Hainan kaydının 1911–49 dönemleri okundu (yerlesimler_asya.js, nokta2.js) + yer_yama_1923_1945.js'de ~70 kayıt karşılaştırıldı.
- Bulgu: 18 — SINIR 6 (1, 2, 13, 15, 16, 18) · TARİH-HATA 5 (3, 6, 7, 8, 9) · EKSİK-MADDE 5 (5, 11, 12, 14, +3) · ÇELİŞKİ 5 (2, 4, 10, 12, 17) · KAYNAKSIZ tablo 1 · HAYALET 0 · EKSİK-DEVLET 0 (1945–49 ÇKP denetim bölgesi için künye yokluğu 13'te seçenek olarak).
- Dış doğrulama: DOĞRULANDI — Mançukuo ilanı 1932-03-01 (kotobank), Kangde Mart 1934 (kotobank; 1 Mart JACAR), Kyahta 1915-06-07 (AJIL), DTİC 1933-11 / 1934-03-21 ve Gulca 1944-11-12 / 1949-10-20 (TDV Türkistan), Wang Jingwei tanınması Temmuz 1941 (FRUS), Pekin 1949-01-31 ve Nanking 1949-04-23 (ÇKP tarih portalı), Dalai Lama bildirisi 1913-02-13 (Shakabpa; yalnız Tibet tarafı).

## Ölçülemedi
- Yama ezildi mi, hiç inmedi mi: git log gerekir (Bash yasak).
- Ungern / Bogd Han iade günü (kaynaklar 11/22/26 Şubat çelişkili; BRE 401 verdi); Kuzmin 2017 açılmadı.
- Simla 1914, Urga protokolü 1912-11-03, Çamdo 1918 ve 1950, Port Arthur 1955, Hong Kong işgal günleri, Lu Han 1949-12-09, Şanghay/Guangzhou/Chongqing/Chengdu resmî kaynak teyidi, Tayvan 1945-10-25 Academia Historica — açılmadı.
- zgbk.com ve Academia Historica bu turda açılmadı (Çin kaynaklı teyit yalnız ÇKP portalı ve 吉林 kronolojisi üzerinden).
- Değişmez 2 ±30 gün ölçümü örneklemle, gözle yapıldı; `denetle.py` koşturulmadı.
- Üç Vilayet'in Çöçek/Altay noktaları, Mergen/Sanxing/Dalian canlıda var mı — ölçülmedi.
- kronoloji_cin.js, kronoloji_cok_dogu_asya.js, kronoloji_cok_1923_1945.js içindeki 1911–1949 maddeleri okunmadı (iki dosyada aynı olay farklı gün kontrolü yapılamadı).


---

## ÇİN DENETİMİ — Parça D: 1949–bugün (atlas ufku 2000-12-31)

Makine: UMIT · ağaç: worktree pensive-engelbart-7e58ff (7a3659d54) · yalnız Grep/Read/WebSearch; süreç başlatılmadı.
Atlas ufku: `js/app.js:199-200` `BITIS = 2000-12-31`, `VERI_UFKU = ["1281-01-01","2000-12-31"]`. Yani 2000 sonrası
olaylar (Bolşoy Ussuriysky/Heixiazi 2004-10-14 antlaşması, 2008-10-14 devri) **ufuk dışı**. Yerleşimlerin
`t:"2000-12-31"` uçları ufuk işaretidir, hata değildir (ÇHC ve ÇC künyelerinde `t` yok — doğru).

---

## A. HARİTAYI ETKİLEYEN BULGULAR

### 1. Çamdo, On Yedi Madde günü (1951-05-23) ÇHC'ye geçiyor; askerî düşüş 1950-10-19
- Kimlik: data/yerlesimler_asya.js:3011-3017 · "Çamdo (Chamdo)"
- Atlasta: `{f:"1918-08-19", t:"1951-05-23", d:"tibet-ganden-phodrang"}` → `{f:"1951-05-23", …, d:"cin-halk-cumhuriyeti"}`.
  Atlasın kendi kronolojisi bunu söylüyor: kronoloji_sinir_halef_1923_2000.js:118 «Çamdo Ekim 1950'de HKO tarafından alınmıştı».
- Kaynak: ÇHC tarafı — Xinhua/People's Daily aktarımları: 昌都战役 1950-10-06'da başladı, «1950年10月19日，持续了13天的昌都战役胜利告终»
  (xinhuanet.com/politics/2020-10/12/c_1126597013.htm). Tibet/dünya tarafı da günü değil hukuki niteliği tartışır
  (işgal/“kurtuluş”); Tsering Shakya, *The Dragon in the Land of Snows* (1999) ve Goldstein, *A History of Modern Tibet* c.2
  Ngabö'nün Ekim 1950'de Çamdo'da teslim olduğunu yazar [kitaplar bu oturumda açılmadı — sayfa teyidi gerekir].
  Zgbk (中国大百科全书) maddesi aramada çıkmadı: bulunamadı.
- Sınıf: SINIR (+ Değişmez 2 açısından madde var ama 1950-10-19 günlü ayrı madde YOK → EKSİK-MADDE)
- Öneri: Çamdo kırılması `1951-05-23 → 1950-10-19` (fiilî askerî denetim; Hainan 1950-05-01 kaydı da fiilî denetim
  ölçütüyle yazılmış — aynı ölçüt). Yanına 1950-10-19 kronoloji maddesi (taraflar tibet-ganden-phodrang, cin-halk-cumhuriyeti;
  b: "Halk Kurtuluş Ordusu Çamdo'yu aldı"; ic_not'ta iki anlatı: ÇHC "昌都解放" / Tibet sürgün hükûmeti "işgal").
  Lhasa/Şigatse/Gyantse 1951-05-23'te kalabilir (aşağıda madde 2'deki seçenekle).

### 2. Merkezî Tibet kırılması: 1951-05-23 (antlaşma) mı, 1951-10-26 (HKO Lhasa'ya giriş) mı — TARTIŞMALI, seçenek
- Kimlik: yerlesimler_asya.js:2988 (Lhasa), 2998 (Şigatse), 3007 (Gyantse); yerlesimler_nokta2.js:26 (Sakya)
- Atlasta: dördü de 1951-05-23'te ÇHC; kaynak alanı «PLA Lhasa'ya 1951-09-09» der (öncü birlik).
- Kaynak: ÇHC: 和平解放 1951-05-23 (antlaşma imzası) — ÇHC'nin resmî "kurtuluş" günü; ana kuvvet (Zhang Guohua) Lhasa'ya
  1951-10-26 girdi. Tibet sürgün hükûmeti (tibet.net): antlaşma baskıyla imzalandı, Dalai Lama 1959-04-18 Tezpur
  açıklamasıyla reddetti (atlasta devletler.js:5782 var). TDV «Tibet»: «23 Mayıs 1951» (atlas zaten bunu yazmış).
- Sınıf: SINIR (tartışmalı; taraf tutulmaz)
- Öneri (Emre seçer): (a) bugünkü gibi 1951-05-23 (TDV + ÇHC antlaşma günü; hukuki devir) — ic_not'a Tibet tarafının
  itirazı yazılsın; (b) Lhasa/Şigatse/Gyantse 1951-10-26 (fiilî askerî varlık; Hainan/Çamdo ölçütüyle tutarlı).
  Hangisi seçilirse Çamdo (madde 1) ile birlikte bütün Tibet noktaları **aynı ölçütte** olmalı.

### 3. Lüşun (Port Arthur) 1945-1955 Sovyet askerî varlığı zincirde yok; 1949 kırılmasının kaynağı uygun değil
- Kimlik: data/yerlesimler_asya.js:2782-2787 · "Lüşun (Port Arthur)"
- Atlasta: `1945-09-02→1949-10-01 cin-cumhuriyeti` (kaynak: "Port Arthur ortak deniz üssü 1955'e kadar"),
  `1949-10-01→2000-12-31 cin-halk-cumhuriyeti` (kaynak: "Britannica Lüshun" — günü taşımıyor).
- Kaynak: Britannica «Dalian»: Sovyet kuvvetleri Lüshun'dan nihayet 1955'te çekildi (britannica.com/place/Dalian; arama
  özeti, sayfa açılmadı). Rusça basın (gazeta.ru 2025-05-24) Sovyet birliklerinin ayrılışını 24 Mayıs 1955 verir (basın,
  akademik değil). 1945-08-14 Çin-Sovyet antlaşması: üs ortak kullanım, sivil idare Çin'de. 1945-49'da ÇC fiilen
  bölgeye giremedi (Sovyet işgali; yerel idare ÇKP'li) — bu 1945-49 dilimi parça B/C'nin alanı.
- Sınıf: SINIR + KAYNAKSIZ (1949 ucu) + EKSİK-MADDE (1955 iadesi atlasın hiçbir kronolojisinde yok — Grep `1955-05`: 0)
- Öneri: Emre'ye iki seçenek: (a) egemenlik ölçütü: zincir kalır, yalnız 1955 iade maddesi eklenir
  (t "1955-05-24" ya da gün akademik teyide dek "1955-01-01" + beyan); (b) fiilî denetim ölçütü: `isg:[{f:"1945-08-22",
  t:"1955-05-24", d:"sovyet-rusya"}]` (Kızıl Ordu'nun Port Arthur'a girişi 22 Ağustos 1945 — bu oturumda teyit
  edilmedi). Her iki durumda 1949 dilimine "ilan 1949-10-01" kaynağı yazılmalı; "Britannica Lüshun" bu günü vermiyor.

### 4. Sipsòng Panna / Chiang Hung (Jinghong) ÇHC'ye geçişi "1950-01-01 (yalnız yıl)" — gün bulundu
- Kimlik: data/yerlesimler_a78_asya.js:149-150 · "Chiang Hung (Jinghong)"; kronoloji_sinir_asya_zincir_1024.js:147
- Atlasta: `{f:"1950-01-01", d:"cin-halk-cumhuriyeti"}`, madde "1950 (yalnız yıl)".
- Kaynak: Xishuangbanna CÇP tarih bölümü yazısı (thepaper.cn newsDetail_forward_19869539, aktarım): 1995'te il komitesi
  **1950-02-17**'yi "西双版纳解放日" ilan etti (乌龟山战斗, 38. tümen 114. alay); 1950 Şubatında Cheli/Fohai/Nanqiao/Zhenyue
  ilçelerinde halk iktidarı kuruldu. Yerel parti tarihi, akademik değil (tek kaynak).
- Sınıf: TARİH-HATA (hassasiyet) / EKSİK-GÜN
- Öneri: kırılma ve madde `1950-01-01 → 1950-02-17`, `kesinlik:"gun"` değil "gun (tek kaynak, yerel parti tarihi)";
  ic_not: Daniels 2013 "1950" (yıl) + Xishuangbanna 1950-02-17. Akademik teyit: Grabowsky & Wichasin (2012) Chronicle
  kitabının 1950 kaydı.

### 5. "ÇHC = 1949-10-01" toplu kırılması — 1949-10-01 sonrası düşen şehirler (A/B parçasıyla örtüşür)
- Kimlik: ~140 yerleşim `{f:"1949-10-01",…,d:"cin-halk-cumhuriyeti", kaynak:"ilan 1949-10-01, tsv kunye"}`
  (yerlesimler_asya.js 91 · a78_asya 15 · nokta_asya_0917 10 · ortaasya3 8 · ek20 3 · ek21 1 · yer_yama_doguasya 17).
  İstisnalar zaten yazılmış: Hainan 4 nokta 1950-05-01, Gulca 1949-10-20, Tibet 1951-05-23, Hong Kong 1997, Makao 1999,
  Chiang Hung 1950. Kaynak alanı "ilan 1949-10-01, tsv kunye" = atlas künyesine dayanma (Kaynak kuralı: atlas referans değil).
- Kaynak: 1949-10-01'de ÇC'de kalan büyük merkezler (tarihler genel bilgi, bu oturumda kaynakla açılmadı):
  Kanton 1949-10-14, Guilin 1949-11-22, Çongqing 1949-11-30, Nanning 1949-12-04, Kunming (Lu Han'ın saf değiştirmesi)
  1949-12-09, Çengdu 1949-12-27, Mengzi 1950-01-16, Xichang 1950-03-27. Bunların ±30 gün dışında kalanları
  (Çongqing, Kunming, Çengdu, Nanning, Mengzi, Guilin) haritada **erken** ÇHC görünür.
- Sınıf: SINIR + KAYNAKSIZ (toplu)
- Öneri: 1949 Ekim-Aralık düşüşleri brief gereği parça B/C'nin (1911-1949 ajanı) işi — orada çözülmediyse koordinatör
  birleştirsin. Benim alanımda kalan 1950 düşüşleri: Mengzi (a78_asya:121 civarı, "Mengzi") → 1950-01-16
  [teyit gerekli; 蒙自 机场 战斗]. Xichang'da nokta yok.

### 6. Zhoushan ve Dachen adaları: nokta yok → anakara peteğine emilip ÇC döneminde ÇHC boyanıyor
- Kimlik: Grep `ad:"…(Zhoushan|Dinghai|Chusan|Dachen|Tachen|Wanshan)…"` yerlesimler*/yer_yama*: **0 sonuç**.
- Atlasta: Zhoushan takımadası en yakın anakara peteğine (Ningbo, yerlesimler_asya.js:2059, ÇHC 1949-10-01) emilir.
- Kaynak: Zhoushan'ı ÇC 1950 Mayıs ortasında tahliye etti (舟山撤退; HKO Dinghai'ye ~1950-05-17/19 girdi); Dachen tahliyesi
  1955-02-08…12 (大陳撤退), Yijiangshan 1955-01-18 — günler bu oturumda kaynakla açılmadı (genel bilgi).
- Sınıf: SINIR (nokta eksikliği — "orada yerleşim noktası var mı?" sorusunun cevabı: yok)
- Öneri: Dinghai (Zhoushan) noktası: `cin-cumhuriyeti … t:"1950-05-17"` → `cin-halk-cumhuriyeti`, gün akademik kaynakla
  (中国大百科 舟山岛战役 / Academia Historica 國史館) teyit edilerek; kronoloji maddesi aynı günle. Dachen için nokta
  açmak isteğe bağlı (adalar küçük; petekte ayrı görünmeyebilir) — açılırsa ÇC → 1955-02-12 → ÇHC.
  Kinmen/Matsu zaten ÇC'de, doğru (yerlesimler_asya.js:2635-2651).

### 7. Aksai Chin noktası yok — petek muhtemelen Leh'e (Hindistan) gidiyor; tartışmalı bölge, seçenek
- Kimlik: Grep Aksai/Hotan/Leh: yalnız Leh (yerlesimler_asya.js:639, Hindistan 1947-10-26→) ve Hotan (2911, ÇHC).
- Atlasta: Aksai Chin'in merkezi (~35.0K 79.0D) Leh'e ~160 km, Hotan'a ~250 km (benim hesabım, düz mesafe; motor sırt/nehir
  kullanır — ölçülmedi, koşu çıktısında bakılmalı). Leh'e emilirse bölge 1950'lerden beri fiilen ÇHC denetiminde olduğu hâlde
  Hindistan boyanır.
- Kaynak: Çin-Hint Savaşı 1962-10-20 / 1962-11-21 tek taraflı ateşkes (atlasta devletler.js:21631, 21783 var).
  ÇHC: Aksai Chin Sincan/Tibet'in parçası; Hindistan: Ladakh'ın parçası, işgal altında. Taraf tutmadan iki çözüm:
- Sınıf: SINIR (tartışmalı)
- Öneri (Emre seçer): (a) fiilî denetim ölçütü: Aksai Chin'e bir nokta (ör. Tianshuihai/Heweitan karakolu) `d:"cin-halk-cumhuriyeti"`
  + beyan "Hindistan talep eder"; (b) dokunma, ama "harita fiilî denetimi değil petek yakınlığını gösteriyor" beyanı.
  Aynı soru Shaksgam (1963-03-02 Çin-Pakistan) ve Arunachal (1951-02 Hindistan Tawang'a yerleşti; Tsona noktası yalnız ölü
  dosyada) için de geçerli; önce koşu çıktısında bu bölgelerin rengi ölçülmeli.

### 8. yer_yama_doguasya.js: Kham noktaları 1912-1951 "Ganden Phodrang" — dosya CANLI DEĞİL ama 1949 düzeltmesi buna da yazılmış
- Kimlik: data/yer_yama_doguasya.js:28-36 (Dartsedo/Kangding, Litang, Batang, Derge, Jyekundo/Yushu, Songpan, Ngawa,
  Nagçu, Tsona). Dosya `arac/girdi_listesi.py`'de YOK (Grep: 0) → motora girmiyor.
- Atlasta: hepsi `tibet-ganden-phodrang 1642→1951-05-23 → cin-halk-cumhuriyeti`.
- Kaynak: Kangding 1939-1950 ÇC'nin Xikang eyaletinin başkentiydi; Songpan/Ngawa Sichuan, Yushu Qinghai idaresindeydi;
  1932 Gangtuo ateşkesi sınırı Jinsha'ya oturttu (Batang, Litang, Kangding, Derge ilçe merkezi doğu yakada). Bu yerler
  1949 sonu-1950'de ÇC'den ÇHC'ye geçti, Tibet'ten değil [genel bilgi; bu oturumda kaynakla açılmadı].
- Sınıf: HAYALET-SAHİPLİK (ölü dosyada) / SINIR
- Öneri: dosya canlıya alınacaksa önce bu 7 nokta (Nagçu ve Tsona hariç) yeniden zincirlenmeli; alınmayacaksa dosyanın
  başına "CANLI DEĞİL" uyarısı yeterli. 1949 ÇHC eklemesini yapan DUNYA-1102 adımı ölü dosyaya da yazmış — bilgi.

---

## B. KÜNYE VE KRONOLOJİ BULGULARI

### 9. Çin Cumhuriyeti kronolojisi 1987/1996/2000 maddelerinde kamera Nanking'e gidiyor
- Kimlik: data/devletler.js:7860, 7861, 7862 · cin-cumhuriyeti
- Atlasta: `odak_yer:["Nanking"]` — sıkıyönetimin kaldırılması (1987-07-15), Lee Teng-hui seçimi (1996-03-23), Chen Shui-bian (2000-03-18).
- Kaynak: Nanking 1949'dan beri ÇHC'de (yerlesimler_asya.js:1983); olaylar Tayvan'da.
- Sınıf: ÇELİŞKİ (kronoloji ↔ harita senkronu: madde okunduğunda kamera başka devletin şehrine gidiyor)
- Öneri: üçünde `odak_yer:["Taipei"]`. Aynı kusur: 1971-10-25 maddesinde `odak_yer:["Pekin"]` (7859) — ÇC maddesi, `Taipei` olmalı.

### 10. ÇC 1949-12-07 Taipei başkent maddesinin dayanağı Vikipedi + "genel bilgi"
- Kimlik: devletler.js:7858
- Atlasta: kaynak "en.wikipedia History of Taiwan … 7 Aralık günü genel bilgi".
- Kaynak: Taipei Times 1999-12-08 (taipeitimes.com/News/front/archives/1999/12/08/0000014054, 50. yıl yazısı; arama
  aktarımı: 1949-12-07'de hükûmet Taipei'ye taşınma kararı); Academia Historica (國史館) sayfası aramada çıkmadı: bulunamadı.
- Sınıf: KAYNAKSIZ (Vikipedi tek dayanak)
- Öneri: gün doğru görünüyor; kaynak alanına Taipei Times 1999-12-08 + 國史館 «中華民國政府遷臺» kaydı (bulunursa) yazılsın.

### 11. Tibet Özerk Bölgesi Hazırlık Komitesi: "1956-01-01 (gün bulunamadı)" — gün 1956-04-22
- Kimlik: devletler.js:5780 · tibet-ganden-phodrang
- Kaynak: Fudan Üniv. Tibet arşivi (tecang.fudan.edu.cn/repositories/2/archival_objects/18318): «1956年4月22日西藏自治区筹委会成立大会开幕»;
  Tayvan basını yıllığı aynı günü verir (n.yam.com 20150901249907) — iki taraftan aynı gün (çift teyit adayı, ikisi de akademik değil).
- Sınıf: TARİH-HATA (hassasiyet)
- Öneri: `t:"1956-04-22"`, kaynak Fudan arşivi.

### 12. EKSİK-MADDE: Tibet Özerk Bölgesi 1965 ve Sincan Uygur Özerk Bölgesi 1955
- Kimlik: devletler.js cin-halk-cumhuriyeti (21625-21641) — ikisi de yok (Grep `1965-09-0`, `1955-10-01` Çin bağlamında: 0).
- Kaynak: TÖB — thepaper.cn (newsDetail_forward_1372846): 1965-09-01…09 1. Halk Kongresi kuruluşu ilan etti, 1965-09-09
  kutlama; başka yıllık 1965-09-01 der → ÇELİŞKİ (ic_not'a ikisi). SUÖB 1955-10-01 (genel bilgi; zgbk teyidi yapılmadı).
  TDV «Türkistan»/«Uygurlar» maddesinde SUÖB günü bakılmadı (ölçülemedi).
- Sınıf: EKSİK-MADDE (harita kırılması yok; sahiplik değişmiyor)
- Öneri: iki `siyaset` maddesi; TÖB ic_not: ÇHC "özerklik" / sürgün hükûmeti "ilhakın kurumsallaşması" iki anlatısı.

### 13. EKSİK-MADDE: ÇHC sınır antlaşmaları ve çatışmaları (haritada nokta olmadığı için kırılma üretmiyor)
- Kimlik: Grep (kronoloji*, olaylar*, devletler.js) şu günlerde 0 sonuç: 1949-10-16 (ÇHC-Moğolistan diplomatik ilişki),
  1949-10-25 (Guningtou/Kinmen), 1955-01-18/02-08…12 (Yijiangshan, Dachen), 1958-08-23 (Kinmen bombardımanı),
  1960-10-01 (Çin-Burma sınır antlaşması; Namwan kiralık arazisi Burma'ya, Hpimaw-Gawlum-Kangfang Çin'e),
  1961-10-05 (Çin-Nepal), 1962-12-26 (Çin-Moğolistan), 1963-03-02 (Çin-Pakistan, Shaksgam), 1969-03-02 (Zhenbao/Damanski),
  1974-01-19/20 (Paracel), 1979-02-17…03-16 (Çin-Vietnam savaşı; Lạng Sơn 1979-03-05 düştü — kısa işgal, işgal kuralı
  gereği pencere almaz, doğru), 1991-05-16 (Çin-Sovyet doğu sınırı; Zhenbao Çin'e), 1999-12-30 (Çin-Vietnam kara sınırı).
- Kaynak: günler genel bilgi; bu oturumda tek tek kaynakla açılmadı.
- Sınıf: EKSİK-MADDE
- Öneri: ÇHC künyesine (ve karşı taraf künyelerine) `antlasma`/`savas` maddeleri; her biri için ① zgbk ② karşı taraf
  (Hindistan MEA, Rus BRE, Vietnam, Burma) kaynağı. Paracel ve Çin-Hint için iki taraflı ic_not şart.

### 14. Doğu Türkistan Cumhuriyeti (Gulca) künye özeti `t` ile çelişiyor
- Kimlik: devletler.js:18063 · dogu-turkistan-cumhuriyeti-gulca
- Atlasta: `t:"1949-10-20"` (TDV), ama ozet: «[gun yok] t: 1949 yılı kesin, ay-gün bulunamadı (Vikipedi 20 Aralık ipucu)».
  Künyenin kendi kronolojisinde son maddesi yok (son madde kronoloji_sinir_asya_zincir_1024.js:146'da).
- Kaynak: TDV «Türkistan» «20 Ekim 1949'da bu devlet yıkıldı» (zincir dosyasında alıntılı). ÇHC tarafı: Üç Vilayet Millî
  Ordusu 1949-12-20'de HKO 5. Ordu'ya dönüştürüldü (Vikipedi'nin "20 Aralık"ı bu olay — genel bilgi, kaynakla açılmadı).
- Sınıf: ÇELİŞKİ (künye içi) + EKSİK-MADDE
- Öneri: ozet'ten eski cümle çıkarılsın; `t` 1949-10-20 (TDV esas) kalsın; ic_not: "ÇHC kaynaklarında ordunun HKO'ya
  katılışı 1949-12-20". Künye kronolojisine 1949-10-20 `son` maddesi.

### 15. tibet-ganden-phodrang: 1959-03-28 "toprak-kayip … Sakya dahil" maddesi artık bir kırılmaya karşılık gelmiyor
- Kimlik: kronoloji_sinir_nokta2.js:93; yerlesimler_nokta2.js:26 (Sakya kaynağı: "eski 1959-03-28 ucu kaldırıldı")
- Atlasta: madde `tur:"toprak-kayip"`, yer_id Sakya; ama Sakya 1951-05-23'te ÇHC'ye geçiyor (Emre #13 kararı).
  Künye t=1959-03-28 kalıyor; 1951-1959 arası hiçbir yerleşim Ganden Phodrang'da değil → künye haritada 8 yıl görünmez.
- Sınıf: ÇELİŞKİ (madde türü) — Değişmez 2'yi bozmaz (fazla madde serbest)
- Öneri: madde `tur:"siyaset"`e çekilsin, "(Sakya dahil)" ve yer_id Sakya çıkarılsın. Künye t=1959-03-28 kalabilir
  (yerel hükûmet hukuken 1959'a dek sürdü) — ozet'e "1951-1959 ÇHC egemenliği altında yerel hükûmet; haritada ÇHC" beyanı.

### 16. Ganden Phodrang 1959-04-29 sürgün Kashag maddesinin kaynağı bir Vikipedi yansısı
- Kimlik: devletler.js:5783
- Atlasta: kaynak `wiki.krisyotam.com/... (yalnız yönlendirme; birincil kaynak bulunamadı)`.
- Sınıf: KAYNAKSIZ
- Öneri: Merkezî Tibet İdaresi (tibet.net) "History of CTA" sayfası (sürgün tarafı) — gün orada aranmalı; ÇHC bu kurumu tanımaz,
  ic_not'ta belirtilmeli. (Bu oturumda açılmadı.)

### 17. Kore Savaşı'na giriş günü: atlas 1950-10-19 (Yalu geçişi); ÇHC resmî anma günü 1950-10-25
- Kimlik: devletler.js:21627 (ÇHC), 21897 (Kuzey Kore)
- Kaynak: 10-19 Yalu geçişi; 10-25 ilk çarpışma, ÇHC'nin 抗美援朝纪念日 (genel bilgi).
- Sınıf: — (hata değil) → ic_not önerisi
- Öneri: ic_not: "ÇHC anma günü 1950-10-25 (ilk çarpışma); geçiş 1950-10-19".

---

## C. DOĞRU BULUNANLAR (ölçüldü, bulgu yok)
- Hainan 4 nokta 1950-05-01 ÇHC (yerlesimler_asya.js:2487-2516) + madde kronoloji_sinir_adalar_dogu_asya.js:25
  (Haikou 23 Nisan, ada 1 Mayıs — gün tutarlı). Kaynağı ikincil (China Daily HK) → zgbk 海南岛战役 eklenmeli (KAYNAKSIZ tablosu).
- Tayvan 8 nokta (2540-2627) 1945-10-25'ten ÇC, 2000'e dek; Kinmen/Matsu 1912'den ÇC, 1949 sonrası kırılma yok — doğru.
  Tayvan'ın 1945-1952 hukuki statüsü (San Francisco 1952-04-28'de Japonya feragat etti, devralan belirtilmedi) tartışmalıdır;
  atlas fiilî ÇC idaresini yazıyor — ÇHC görüşü (Tayvan Çin'in parçası) ve "statü belirsiz" görüşü ozet'e beyan olarak eklenebilir.
- Hong Kong 1997-07-01 (2371) ve Makao 1999-12-20 (2362): künye t'leri, yerleşim kırılmaları ve kronoloji maddeleri
  (devletler.js:15487, 15497; halef dosyası 336, 341; ÇHC 21639-21640) aynı gün — Değişmez 2 sağlanıyor.
- Gulca 1949-10-20 (2968-2969) ↔ madde zincir_1024:146 aynı gün.
- Ürümçi ve öteki Sincan noktaları 1949-10-01: Sincan ÇC idaresi 1949-09-25/26'da saf değiştirdi (Tao Zhiyue/Burhan) —
  ±30 gün içinde (madde yok → parça B/C'ye EKSİK-MADDE notu: 1949-09-25 Sincan'ın barışçıl teslimi).
- Namkham/Lashio (a78_asya 164-169) 1948'den Burma; 1960 Çin-Burma antlaşması bu noktaların sahibini değiştirmez — doğru.
- Lạng Sơn 1979 kısa işgali pencere almıyor — işgal kuralına uygun.
- ÇHC/ÇC/MHC künyelerinde `t` yok; yerleşim uçları 2000-12-31 = VERI_UFKU — doğru.

---

## KAYNAKSIZ / zayıf kaynaklı maddeler (tablo)

| Yer | Madde | Şimdiki kaynak | Öneri |
|---|---|---|---|
| devletler.js:7858 | ÇC Taipei 1949-12-07 | en.wikipedia + "genel bilgi" | Taipei Times 1999-12-08; 國史館 |
| devletler.js:7859 / 21634 | BM 2758, 1971-10-25 | Taipei Times 1999 | BM GA Res. 2758 (XXVI) metni, undocs.org/A/RES/2758(XXVI) |
| devletler.js:7860 | sıkıyönetim 1987-07-15 | abacus2.gcsu.edu (kişisel sayfa) | 國史館 / Academia Historica; Taipei Times |
| devletler.js:7862 | 2000-03-18 | NMTH + "bulunamadı" | Merkez Seçim Komisyonu (cec.gov.tw) |
| devletler.js:5783 | Kashag 1959-04-29 | Vikipedi yansısı | tibet.net (CTA) |
| devletler.js:10831-10832 | MHC 1990/1992 | en.wikipedia, globalsecurity | Moğolistan Anayasası metni (legalinfo.mn) |
| devletler.js:15491-15494 | Makao 1928/1966/1974/1986 | en.wikipedia | Makao Hükûmeti Yıllığı (gcs.gov.mo); 1974-01-01 yerine 1976-02-17 Organik Statü değerlendirilsin |
| devletler.js:18064-18068 | ETR Gulca | en.wikipedia | TDV «Türkistan»; Forbes 1986 |
| kronoloji_sinir_adalar_dogu_asya.js:25 | Hainan 1950-05-01 | China Daily HK (ikincil) | 中国大百科全书 «海南岛战役» |
| ~140 yerleşim | ÇHC 1949-10-01 dilimi | "ilan 1949-10-01, tsv kunye" (atlas künyesi) | US OH Milestones / Britannica PRC (künye kaynağı) + şehir düşüş günleri (madde 5) |
| yerlesimler_asya.js:2787 | Lüşun 1949-10-01 | "Britannica Lüshun" | madde 3 |

---

## Sayılar
- Künye: 7 (cin-halk-cumhuriyeti, cin-cumhuriyeti, tibet-ganden-phodrang, mogolistan-halk-cumhuriyeti,
  hong-kong-ingiliz, makao-portekiz, dogu-turkistan-cumhuriyeti-gulca).
- Kronoloji maddesi: ~48 (ÇHC 15, ÇC 1949-sonrası 5, Ganden Phodrang 1956-sonrası 4, MHC 1949-sonrası 4, HK 2, Makao 6,
  ETR 5, halef_1923_2000 3, zincir_1024 2, adalar 1, nokta2 1).
- Yerleşim: ÇHC dilimi taşıyan 147 `s:` kaydının hepsinin f/t'si okundu (Grep -o); ayrıntılı okunan ~30
  (Hainan 4, Tayvan 8, Kinmen, Matsu, Lüşun, Gulca, Ürümçi, Lhasa, Şigatse, Gyantse, Çamdo, Sakya, Chiang Hung, Ning'er,
  Lijiang, Tonghai, Taşkurgan, Namkham, Lashio, Hong Kong, Makao, Zeytun) + yer_yama_doguasya 19.
- Bulgu: 17 madde — SINIR 6 (1,2,3,6,7,8), TARİH-HATA/gün 2 (4,11), toplu SINIR+KAYNAKSIZ 1 (5), ÇELİŞKİ 3 (9,14,15),
  KAYNAKSIZ 2 (10,16) + tablo 11 satır, EKSİK-MADDE 2 grup (12,13; 13'te 13 olay), ic_not önerisi 1 (17).
  TAKVİM bulgusu: 0 (dönem tamamen Gregoryen; ÇC 1912'den, ÇHC Gregoryen kullanır).

## Ölçülemedi
- Petek çıktısı (Aksai Chin, Arunachal, Shaksgam, Zhoushan, Dachen, Pratas'ın hangi renge boyandığı): koşu çıktısı/`coz-c`
  gerektiriyor, süreç başlatma yasağı — **ölçülmedi**; madde 6-7'deki mesafe tahmini düz hesap.
- zgbk.com maddeleri: aramada doğrudan madde çıkmadı (昌都战役, 海南岛战役, 旅顺 iadesi) — **bulunamadı**, ÇHC tarafı için
  Xinhua/People's Daily aktarımları kullanıldı. sinocal gerekmedi (dönem Gregoryen).
- Lüşun iadesi günü (1955-05-24/26/31 adayları) akademik kaynakla teyit edilemedi.
- Madde 5 ve 13'teki günlerin çoğu genel bilgidir, bu oturumda tek tek kaynakla açılmadı — öneri olarak verildi, doğrulanmış sayılmamalı.
- TDV'de «Uygurlar», «Sincan», «Tibet» maddeleri bu oturumda açılmadı (TDV alıntıları atlastaki mevcut kaynak alanlarından).
- Değişmez 2 tam taraması (her ÇHC/ÇC kırılması ↔ ±30 gün madde) `denetle.py` gerektiriyor; elle örneklem yapıldı:
  1949-10-01 (madde var: halef:110), 1949-10-20, 1950-01-01, 1950-05-01, 1951-05-23, 1997-07-01, 1999-12-20 — hepsinde madde var.

Kaynaklar (bu oturumda erişilen): xinhuanet.com/politics/2020-10/12/c_1126597013.htm · britannica.com/place/Dalian (arama özeti) ·
gazeta.ru/social/2025/05/24/21091274.shtml · taipeitimes.com/News/front/archives/1999/12/08/0000014054 ·
tecang.fudan.edu.cn/repositories/2/archival_objects/18318 · m.thepaper.cn/newsDetail_forward_1372846 ·
m.thepaper.cn/newsDetail_forward_19869539 · n.yam.com/Article/20150901249907


---

