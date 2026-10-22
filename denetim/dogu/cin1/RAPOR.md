# CIN-1 RAPORU (cin1 — en erken kuruluşlu 24 polity, 500-1281 penceresi)

Ağaç: C:\atlas\.claude\worktrees\dogu (worktree-dogu). Git'e dokunulmadı. Çıktılar yalnız `denetim/dogu/cin1/`.
Yöntem: zh.wikisource.org birincil metinleri (Wei shu, Nan Qi shu, Liang shu, Chen shu, Bei Qi shu, Zhou shu, Sui shu, Jiu/Xin Tang shu) curl ile çekildi, alıntılar metinde regex/okuma ile bulundu; günler metindeki ganzhi gününden Jülyen'e hesapla çevrildi (JDN + ortalama yeni ay + zhongqi artık-ay kuralı; sınama günleri 甲子=618-06-18, 乙亥=557-11-16, 丙寅=502-04-30, 丙寅=534-11-08, 壬午=690-10-16, 甲寅=705-03-03 bilinen günlerle örtüştü). Pleiades bu coğrafyada kayıtsız; koordinatlar Wikidata + (GeoNames | OSM) çifti.

## ① Ölçülen
- Polity: girdide 24. Künye YAZILAN: 4 (yarlung-krallik, qiuchi, sui-liang-liang-shidu, sui-xia-dou-jiande). KUNYE_MS1_DALINDA 5 (hou-liang-xi-liang, sui-liang-xiao-xian, sui-qin-xue-ju, sui-wei-li-mi, sui-zheng-wang-shichong): künye yazılmadı, yalnız kronoloji. KUNYE_MAIN_DA 15: düzeltme önerileri aşağıda.
- Kronoloji maddesi: toplam 95 = `kronoloji_cok_dogu_cin1.js` 67 (anlatı) + `kronoloji_sinir_dogu_cin1.js` 28 (yerleşim s: kırılma günü, Değişmez 2). Dosya sayısı polity taraflarına göre (ortak maddeler her tarafa sayıldı): kuzey-zhou 18, sui 20, tang 22, bati-wei 14, kuzey-wei 12, kuzey-qi 8, liang-guney 8, dogu-wei 7, tuyuhun 6, qiuchi 6, hou-liang-xi-liang 6, sui-zheng-wang-shichong 6, guney-qi 5, wu-zhou 5, tibet-imparatorlugu 5, sui-liang-xiao-xian 5, chen 4, sui-qin-xue-ju 4, sui-xia-dou-jiande 4, sui-liang-liang-shidu 3, sui-wei-li-mi 3, yarlung-krallik 2 (+2 künye iskeleti). Bunlar MEVCUT kronolojiye EK'tir (mevcut: tang 76, sui 20, tibet 15 vb. tekrarlanmadı).
- Gün hassasiyeti (ölçüldü): anlatı 67 maddede gün 33 (ganzhi→Jülyen), ay 13, yıl 21 (kaynak gün vermiyorsa `YYYY-01-01` + `kesinlik:"yil"`); sınır 28 maddede 25'i gün (biri üst sınır: Luoyang 577-02-23), 3'ü yıl hassasiyeti (0535-01-01, 0618-01-01, 0629-01-01).
- Yerleşim: yeni 3 (Ye (Yecheng), Yarlung (Nêdong/Tsetang), Leshou (Xianxian)) = 9 `s:` dilimi, 0 `__BOSLUK__`; çift tanıklı koordinat 3 (Wikidata+OSM 1.2 km, Wikidata+GeoNames 1.1 km, Wikidata+GeoNames 0.1 km). Mevcutla çakışıp yeni kayıt açılmayan: 4 (Xi'an (Chang'an), Luoyang, Nanking (Nanjing)=Jiankang, Jingzhou=Jiangling) = YAMA, 26 `s:` dilimi `yama_cin1.js` içinde (`window.YAMA_DOGU_CIN1`, yerleşim dosyası DEĞİLDİR). `yer_ara.py yakin 3 km`: yeni 3 noktada mükerrer 0.
- Sınav: `node denetim/dogu/dogrula.js cin1` → ihlal 0, uyarı 0 (künye 4, kron 95, yer 3, s 9). Ek betikle: yama+yeni 7 zincirde 33 kırılmanın hepsi ±30 gün içinde sınır maddesiyle eşleşti (eksik 0, yetim 0), tüm `d:` kimlikleri devletler.js ∪ ms1 ∪ kunye_yeni içinde.

## ② Bulamadığım / doğrulayamadığım
- **yarlung-krallik:** f=-0126 (Tibet geleneği MÖ 127) doğrulanamadı (kaynak açılamadı) → künyede `kesinlik:{f:"yuzyil"}` + "atıf; açılmadı"; 500-629 arası tarihli olay yok (Çin kaynakları Yarlung'u yalnız Xin Tang shu soy kütüğü olarak verir; Tibet Yıllıkları 650'den başlar). Taç giyme 629 yalnız Britannica atfına (MS1 kaydı) dayanır, açılmadı. Denenen: TDV «Tibet» (okundu; yıl yok), TDV «tuguhun» (arama sonuç vermedi), Xin Tang shu 216 shang.
- **qiuchi:** f=296 ve girdi t=580 doğrulanamadı; kaynak olarak Wei shu 101 (Han Jian'an, Yang Teng) ve Zhou shu 49 okundu → t=553 önerildi. Jin shu 296 (Yang Maosou) okunmadı.
- **tuyuhun:** Fusi (伏俟城) koordinatı için çift tanık yok (Wikidata/Pleiades/GeoNames'te kayıt bulunmadı) → yerleşim YAZILMADI → bölge boyanmaz. Künye f/t (313/663) ve Kualü'nün hanlık unvanı yılı okunmadı.
- **Yerleşim yazılamayan başkentler:** Shuofang (Liang Shidu), Jincheng/Lanzhou (Xue Ju; Lanzhou atlasta var ama 617-618 zinciri kaynaklanmadı), Wagang/Luokou (Li Mi), Mingzhou/Yongnian (Dou Jiande 2. başkent), Fusi, Qiuchi/Wuxing, Lhasa (kuruluş tarihi bulunamadı; atlasta yama yok), Pingcheng/Datong (534 sonrası zincir okunmadı), Taiyuan/Chengdu/Yangzhou/Kanton (Tang ara şehirleri). Hedef "polity başına 3-12 yerleşim" KARŞILANMADI: 22 polity için 3 yeni + 4 yama = 7 yerleşim. Bu polity'ler (qiuchi, tuyuhun, sui-liang-liang-shidu, sui-qin-xue-ju, sui-wei-li-mi) yerleşimsiz kaldığından harita ÜZERİNDE BOYANMAZ.
- **Ye için ZAYIF ikinci tanık:** OSM düğümü «邺城» otoyol çıkışı (Ye'ye adanmış ama alan değil), GeoNames'te Linzhang/Ye yok, Pleiades Asya'da 0 kayıt. Konum Wikidata'ya ağırlıkla dayanır (yaklaşık, Linzhang ilçe merkezinin ~20 km batısı).
- **Tarih çelişkileri/ölçülemeyenler:** (a) Chen'in düşüşü: Sui shu 丙子=589-02-02, Chen shu 丙戌=589-02-12 → 02-12 seçildi (künye ile uyumlu). (b) Tuyuhun'un Muhan Kağan saldırısı: Zhou shu 恭帝二年 (555) vs Zhou shu notu/Zizhi Tongjian 556 → 556. (c) Dou Jiande "Xia Kralı": Jiu Tang juan 54 618 kış gündönümü, juan 1 620 → ic_not. (d) Hulao ayı: juan 1-2 五月, juan 54 三月 → ganzhi 五月 ile uyumlu. (e) Mangshan (543) ganzhi dizisi modelle 3. aya oturmadı → yıl hassasiyeti. (f) Jiangling'in düşüşü Jülyen 555-01-07'dir; mevcut atlas maddesi "0554" yıl-seviyeli (aynı olay). (g) Artık-ay modeli 534 (閏十二月) ve 619 (artık 4. ay) için ortalama takvimle birebir tutmuyor; bu iki günde ganzhi + en yakın 60 günlük aday seçildi. TDV bu konularda (Çin hanedanları, Tuyuhun, Qiuchi) madde vermedi/yıl vermedi; TDV «tuguhun», «gokturkler», «wei-hanedani» slug'ları boş/kısa döndü.
- Birincil metin tarafı: Wei shu juan 8-12, Nan Qi shu 8, Liang shu 1/5, Chen shu 2/6, Bei Qi shu 4/8, Zhou shu 1-3/6/8/48-50, Sui shu 1/4, Jiu Tang shu 1/2/6/7/53-56, Xin Tang shu 216 shang okundu. Okunmadı: Chen shu 1/5, Liang shu 2-4, Sui shu 2'nin gövdesi (yalnız ilgili satırlar), Zizhi Tongjian (hiç), Xin Wudai shi (907 sonu DEVLET_LISTESI kaydından, ayrıca doğrulanmadı), Jin shu 125/126 (Qiuchi'ye ait değil çıktı).

## ③ Kararlar
**Künye düzeltme önerileri (KUNYE_MAIN_DA; dosyaya yazılmadı)** — tümü bu oturumda okunan birincil metinlere dayanır:
- guney-qi: t 0502-01-01 → 0502-04-30 (Nan Qi shu 8 + Liang shu 2). f 0479 okunmadı.
- liang-guney: f 0502-01-01 → 0502-04-30; t 0557-01-01 → 0557-11-16 (Chen shu 2).
- dogu-wei: f 0534-01-01 → 0534-11-08 (Wei shu 12 丙寅); t 0550-01-01 → 0550-06-09 (Bei Qi shu 4 戊午).
- bati-wei: t 0557-01-01 → 0557-02-15 (Zhou shu 3 辛丑); f 0535-01-01 yıl düzeyinde kalır (閏十二月 ≈ 535-01/02, gün yok).
- kuzey-qi: f 0550-01-01 → 0550-06-09; t 0577-01-01 → 0577-02-22 (Zhou shu 6 癸巳; Ye düşüşü).
- chen: f 0557-01-01 → 0557-11-16; t 0589-01-01 → 0589-02-12.
- kuzey-zhou: f 0557-01-01 → 0557-02-15; t 0581-01-01 → 0581-03-04.
- sui: f 0581-01-01 → 0581-03-04; t 0618-01-01 → 0618-06-18.
- tang: f 0618-01-01 → 0618-06-18; t 0907-01-01 → 0907-06-01 (DEVLET_LISTESI).
- wu-zhou: f 0690-01-01 → 0690-10-16; t 0705-01-01 → 0705-03-03.
- kuzey-wei: girdi f 0386-02-20 (main 0386-01-01) okunmadı, bu oturumda doğrulanmadı. tuyuhun, tibet-imparatorlugu: f/t değişiklik önerisi yok; tibet-imparatorlugu ↔ tubo-tibet-imparatorlugu mükerrer (CIN_RAPOR2) birleştirilmeli.
- Mevcut maddeler bu oturumun gün hassasiyetli maddeleriyle ÖRTÜŞÜR (silme/birleştirme önerisi): bati-wei "0554-01-01 Jiangling" ↔ 0555-01-07; tang "0621-01-01 Dou Jiande/Wang Shichong/Xiao Xian" ↔ 0621-05-28 / 06-04 / 11-10; sui/tang künye iskeleti "0618-01-01" ↔ 0618-06-18.

**YAMA GEREKLİ (yerleşim dosyasına yazılmadı, hazır girdi: `yama_cin1.js`):**
- Xi'an (Chang'an) — mevcut zincir başı yuan-hanedani (1281): önek 7 dilim 0500-01-01 → 0907-06-01 (kuzey-wei, bati-wei, kuzey-zhou, sui, tang, wu-zhou, tang).
- Luoyang — önek 9 dilim 0500 → 0907 (kuzey-wei, dogu-wei, kuzey-qi, kuzey-zhou, sui, sui-zheng-wang-shichong, tang, wu-zhou, tang).
- Nanking (Nanjing; Jiankang) — önek 4 dilim 0500 → 0618-06-18 (guney-qi, liang-guney, chen, sui).
- Jingzhou (Jiangling) — önek 6 dilim 0500 → 0907 (guney-qi, liang-guney, hou-liang-xi-liang, sui, sui-liang-xiao-xian, tang).
Devamı (907 sonrası boşluk) cin2-cin4 dilimlerine bırakıldı; 618-907 arası Nanking için Fu Gongshi/Tang okunmadı (zincir 618-06-18'de bitiyor).

**Boya ihtiyacı** (`arac/renkler.py BOYALAR`, n=1168, bu oturumda yüklenip ölçüldü): 22 kimliğin HEPSİ BOYALAR'da YOK: yarlung-krallik, qiuchi, tuyuhun, kuzey-wei, guney-qi, liang-guney, dogu-wei, bati-wei, kuzey-qi, hou-liang-xi-liang, chen, kuzey-zhou, sui, sui-liang-liang-shidu, sui-liang-xiao-xian, sui-qin-xue-ju, sui-wei-li-mi, sui-xia-dou-jiande, tang, sui-zheng-wang-shichong, tibet-imparatorlugu, wu-zhou. (Yerleşimsiz 5'i — qiuchi, tuyuhun, sui-liang-liang-shidu, sui-qin-xue-ju, sui-wei-li-mi — yerleşim yazılana dek boyanmaz.)

**Yeni tür/bölge önerisi:** yok (hepsi `krallik`/`dogu-asya`). Yarlung ve Tibet için `bolge` sözlüğünde Tibet'i taşıyan ayrı bir değer yok; `dogu-asya` kullanıldı (girdi öyle diyor).

**Kronoloji tür notu:** koordinatör düzeltmesi uygulandı: toprak-kazanc/kayip maddeleri yalnız sınır dosyasında (28); cok dosyasındaki Tuyuhun toprak olayları (Taoyang/Honghe, Longhe/Fuzhou, Tuolou-tun) yerleşim kaydı olmadığı için `savas`/`birlesme` türüyle yazıldı.

**İstek (önerim):** (1) Emre: Yarlung f=-0126 kararı (MÖ 127 efsane tarihi kalsın mı yoksa f=0500-01-01 mi) ve qiuchi t=553 onayı. (2) cin2-cin4 işçileri 907 sonrası zincirleri bu 4 yama ve 3 yeni yerleşimin üstüne yazsın (özellikle Ye 618 sonrası: kaynaklı Hebei zinciri, Leshou 907 sonrası). (3) Tuyuhun, Qiuchi, Xue/Li Mi/Liang Shidu için yerleşim: Fusi, Shuofang, Luokou, Lanzhou 617-618, Wuxing — çift tanıklı koordinat ancak CHGIS / Harvard WorldMap ya da Tibet-Gansu arkeoloji haritası ile; Pleiades bu bölgeyi kapsamıyor.
