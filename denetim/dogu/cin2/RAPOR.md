# cin2 RAPORU — Çin kümesi 2. parça (Balhae … Chu, 22 polity)

Ölçüm yeri: C:\atlas\.claude\worktrees\dogu (worktree `dogu`), 22 Ekim 2026. Üretici: `cin2/_uret.py` (veri `_v1*.py`/`_v3.py`); sınav: `node denetim/dogu/dogrula.js cin2` → **ihlal 0 · uyarı 0** (çıkış 0); `py cin2/_sinav.py` (kendi kırılma/±30 gün sınavı).
Takvim aracı: `cin2/_cal.py` (Meeus yeni ay + güneş boylamı, zhongqi kuralı; 907-06-01 甲子, 618-06-18 甲子, 923-05-13 己巳, 960-02-04 乙巳 çapalarında doğru; Tang-Liao takvim sapması olan aylarda ±1 gün/±1 ay riski — ilgili maddelerde `ic_not_takvim`/`ic_not` beyanı var).

## ① Ölçülen
- **Polity: 22.** Künye yazılan: **1** (`da-changhe`; ms1 dalı künyeleri yazılmadı, main künyeler yazılmadı).
- **Kronoloji (cok): 77 madde** (`kronoloji_cok_dogu_cin2.js`) + **sınır (Değişmez 2): 53 madde** (`kronoloji_sinir_dogu_cin2.js`) = 130 (dogrula sayısı). Güncel `tur`: siyaset 24 · hukumdar 12 · kurulus 9 · savas 8 · son 8 · isyan 6 · baskent 4 · ittifak 2 · antlasma 2 · isgal 1 · bolunme 1. Hassasiyet: gun 22 · ay 18 · yil 37 (cok).
- Polity başına cok maddesi (taraflar sayımı; ortak maddeler iki tarafa yazılır): sonraki-liang 16 · sonraki-tang 14 · tang-jin-shatuo 10 · liao 8 (+20 mevcut) · onceki-shu 7 · balhae 5 · chu-ma 5 · guney-han 5 · nanzhao 4 · da-changhe 4 · ganzhou-uygur 4 · min 4 · qi 4 · xiazhou-dangxiang 4 · yang-wu 4 · zhao 4 · an-lushan-yan 3 · wuyue 3 · yan-liu 3 · dongdan 2 · nan-ping 2 · guiyi 1. **Yeni madde sayısı 6 ve üstü olan: 5 polity (sonraki-liang, sonraki-tang, tang-jin-shatuo, liao, onceki-shu); 3’ün altında: guiyi (1), dongdan (2), nan-ping (2)** — mevcut (devletler.js) kronolojisi olan polity’lerde (balhae 7, nanzhao 11, guiyi 4, yang-wu 5, wuyue 5, min 8, chu 5, nan-ping 6, guney-han 5, liao 20…) eksik kalan kısım için kaynak sayfasında yıl/gün taşıyan başka madde okunmadı; uydurulmadı.
- Okunan birincil metin: Xin Wudai shi (juan 2,3,4,5,7,8,39,40,61,63,65–69,74), Jiu Wudai shi 54, Zizhi tongjian (254,260,268,269,271), Jiu Tang shu (9,10,11,200 shang), Xin Tang shu (219, 222 zhong), Liao shi (1,2,3,4), Jin shi 2, Song shi (485, 490, 488); ikincil: chinaknowledge.de «Nanzhao» (Theobald). Hepsi `zh.wikisource.org`dan çekilip alıntı birebir `kaynak:`a yazıldı; **açılmayan kaynak “okundu” yazılmadı** (Song Taizong’un 994 Xiazhou yıkımı “atıf; açılmadı”).
- **Yerleşim:** yeni **2** (`Sanggyeong (Longquanfu)` 44,131/129,142 · `Xiazhou (Tongwancheng)` 37,999/108,849); mevcutla çakışıp yeni kayıt açılmayan **16** (yama, aşağıda). `s:` dilimi: yeni kayıtlarda 6, yama parçalarında 34. `__BOSLUK__` dilimi: **0**.
- **Çift tanıklı koordinat: 2/2** — ama Pleiades Doğu Asya’yı kapsamıyor (Asya penceresinde 63 kayıt, hepsi Hint/Orta Asya, hiçbir Çin/Kore kenti yok) ve GeoNames cities1000 iki yerin 25/40 km çevresinde kayıt vermiyor. Çift tanık **Wikidata + OSM Nominatim** (iki bağımsız veri tabanı, <1 km). Şartnameden sapma; `kaynak:` alanında beyan edilmiş.
- Sınav (kırılma ↔ ±30 gün maddesi): yama ve yeni kayıtların tüm dilim sınırları sınandı (40 dilim, 16+2 şehir); **maddesiz kalan 7 nokta** (hepsi beyanlı): Dali 0738-01-01 (Nanzhao başı, kaynak vardı ama devir günü yok) · Dali 0928-01-01 (Da Tianxing devri cin3’te) · Zhangye 0894-01-01 (künye f, kaynakta okunmadı) · Çengdu 0934-01-01 (Sonraki Shu devri cin3’te) · Sanggyeong 0755-01-01 (şehrin Üst Başkent oluşu — kuruluş, devir değil) · Sanggyeong 0929-01-01 (terk) · Xiazhou 0994-01-01 (terk).

## ② Bulamadığım / doğrulayamadığım
- **Fengxiang (Qi başkenti), Linhuang/Shangjing ve Daning/Zhongjing (Liao başkentleri), Datong/Xijing (Liao):** yerleşim yazılmadı — yeni kayıt, 1281’e kadar Jin/Moğol-dönemi kuyruk zinciri ister ve bu kümede kaynak yok. **Sonuç: Qi (`qi-li-maozhen`) için noktası olan bir yerleşim yok → bölgesi boyanmaz** (Değişmez 1 etkisi: Fengxiang atlasta hiç yok). Liao, mevcut Liaoyang + Pekin yamalarıyla boyanır ama beş başkenti tamam değil.
- **Dongmozu (Balhae ilk başkenti, 698–755):** koordinat çift tanıksız, yazılmadı.
- **Da Changhe:** birincil Çin kaynağı bulunamadı (Xin Tang 222, ZZTJ 262–265, Song shi 488, Xin Wudai 74, Nanzhao yeshi tarandı: Zheng Maisi geçmiyor). Tek açılan kaynak chinaknowledge.de (kaynakçalı ama ansiklopedik); ikinci hakemli kaynak (Backus 1981, Yang Bin) aranmalı. Tarih çelişkisi (927/928) `ic_not`ta.
- **TDV:** `islamansiklopedisi.org.tr/arama/?q=` ile Balhae, Nanzhao, Dunhuang, Tangut, Batı Xia, Liao, Kitan, Taiyuan, Kaifeng, Çengdu, Hangzhou, Wuyue, Sonraki Tang, Ganzhou, Sarı Uygur, An Lushan arandı: sonuç listesi sayfa şablonundan ayrıştırılamadı (çekilemedi ≠ yok). Bu coğrafya için TDV birincil değil; asıl kaynak Çin dinastik tarihleri. Hiçbir madde yalnız TDV’ye dayandırılmadı.
- **Sonraki Tang / Liang kronolojisi:** 936-11-28 ve 923-11-19 gibi günler ganzhi→Jülyen çevrimiyle (±1 gün). 757’deki Luoyang geri alışı (壬戌 = 757-10-04 ya da 757-12-03) ve 759 4/9. ay günleri Tang takvimiyle ±1 ay uyuşmadığı için yalnız yıl/ay hassasiyetinde yazıldı.
- **Kanıtı eksik başlangıçlar (beyanlı):** Ganzhou Uygur f=894 (Song shi 490 ilk tanık 977); Nanzhao’nun Dali’deki ilk sahipliği (738 = Tang tanıması); Guiyi Jun f (848 vs 851); Zhao Wang unvan günü; Qi’nin “Qi Wang” kuruluş günü (Xin Wudai 40 yıl vermiyor).
- **Pekin zinciri:** Jin’in Yanjing’e giriş günü (庚寅 = 1123-01-04) okundu; Song’un 1123 ara devri bu kümede yok (cin3/cin4).
- Hâlâ “kismen-okundu” kalanlar (ham kaynaktan yeniden okunamayan uçlar): Qi f (Fengxiang), Xiazhou t (1038 künye; yalnız Yuanhao’nun ilanı), Ganzhou Uygur f, Guiyi t (1035 Song shi / 1036 künye), Wuyue f (895 mü 907 mi), Nan Han f (905/917), Yan t, Dongdan f/t.

## ③ Kararlar / istekler
**Künye düzeltme önerileri (KUNYE_MAIN_DA + ms1 dalı; yazılmadı, dosyaya dokunulmadı):**
1. `balhae` t=0926-01-01 → **0926-02-28** (Liao shi 2: 辛未 Yi Zhen teslim; DEVLET_LISTESI 0926-04-03 de var — ikisi uzlaştırılmalı).
2. `sonraki-liang-5hanedan` t=0923-01-01 → **0923-11-18** (戊寅 梁亡; Kaifeng’in düşüşü 11-19); `sonraki-tang-5hanedan` t=0936-01-01 → **0937-01-11** (devletler.js yanlış).
3. `onceki-shu` t=0925-01-01 → **0925-12-08** (己酉 王衍降); f=0907-01-01 ya olduğu gibi ya da imparatorluk ilanı 0907-11-03 (Shu fiilen 903’ten Shu Kralı).
4. `chu-ma` f=0927-01-01 → **0907-06-01** (Liang’ın Chu Kralı unvanı; Ma Yin 896’dan Tanzhou’da). **Zincir bu düzeltmeye bağlı:** Changsha 0907-06-01’den yazıldı; künye 927 kalırsa 20 yıl hayalet-devlet çıkar.
5. `min-krallik` f=0909-01-01 → **0907-06-01** (Xin Wudai 68 «唐亡…封閩王»); t kararı (945/946 çelişkisi) beyanlı. Fuzhou zinciri 0907-06-01’den.
6. `tang-jin-shatuo-prensligi` f=0902-01-01 → **0895-01-01** (ZZTJ 260 Qianning 2 «進李克用爵晉王»). Taiyuan zinciri 895’ten yazıldı (895–902 Tang yerine Jin: künye düzelmezse hayalet).
7. `yan-liu-shouguang` t=0913-01-01 → **0913-11-01** (Xin Wudai 5: 十年十月 攻破); `zhao-wang-rong` t=0921-01-01 → **0921-02-11** (ZZTJ 271/Xin Wudai 5: Tianyou 18 1. ay).
8. `yang-wu` t=0937-10-01 → **0937-11-06** (Tianzuo 3 10. ay ilk günü, Jülyen); `guney-han-10krallik` t 0971-01-01/02-01 → **0971-02-28**; ic_not: Xin Wudai Guangzhou egemenliğini 905’ten sayar.
9. `ganzhou-uygur` t=1036-01-01 → **1028-01-01** (Song shi 485 天聖六年 Ganzhou alındı); `guiyi-jun-dunhuang` f=0848 → **0851** (Song shi 490 大中五年) ya da 848 + 851 beyanı; t=1036 (Song shi 485 anlatıda Jingyou 2 = 1035).
10. `an-lushan-yan` t=0763-01-01: aynı kaynak «朝義寶應元年滅» (762) der; Luoyang 762-11-20 kaybı — seçim Emre/koordinatörde. `dongdan` f/t: ms1 (926-01-01…936-01-01) ↔ DEVLET_LISTESI (926-04-04…929-01-01); zincir **926-04-04…929-01-01**.
11. `nan-ping-jingnan`: künye f=0924-01-01 ile zincir uyumlu (Xin Wudai 69: Jingnan valiliği 907, Nanping Wang 925); ic_not’a “907’den vali” eklenmeli.

**YAMA GEREKLİ** (mevcut yerleşim; ayrıntı `cin2/yama_cin2.json`, dilim başına kaynak+alıntı orada; “>” = f→t, sahip=`d:`; bu parçalar mevcut zincirin ÖNÜNE/ARASINA girer, komşu dilimler kendi kümelerinindir):
- **Kaifeng** — sonraki-liang 0907-06-01>0923-11-19 · sonraki-tang 0923-11-19>0937-01-11 (sonrası sonraki-jin: cin3).
- **Luoyang** — an-lushan-yan 0756-01-18>0757-01-01 · an-lushan-yan 0759-09-26>0762-11-20 · sonraki-liang 0907-06-01>0923-11-19 · sonraki-tang 0923-11-19>0937-01-11.
- **Taiyuan** — tang-jin-shatuo-prensligi 0895-01-01>0923-05-13 · sonraki-tang 0923-05-13>0936-11-28.
- **Zhengding** — zhao-wang-rong 0907-06-01>0921-02-11 · tang-jin-shatuo 0921-02-11>0923-05-13 · sonraki-tang 0923-05-13>0937-01-11.
- **Pekin (Hanbalık)** — sonraki-liang 0907-06-01>0911-09-08 (nominal, beyanlı) · yan-liu-shouguang 0911-09-08>0913-11-01 · tang-jin-shatuo 0913-11-01>0923-05-13 · sonraki-tang 0923-05-13>0936-11-28 · liao-hanedani 0936-11-28>1123-01-04.
- **Çengdu (Chengdu)** — onceki-shu 0907-06-01>0925-12-08 · sonraki-tang 0925-12-08>0934-01-01 (bitiş = sonraki-shu f, cin3).
- **Hangzhou** — wuyue 0907-06-01>0978-01-01 · **Yangzhou** — yang-wu 0902-01-01>0937-10-01 · **Fuzhou** — min-krallik 0907-06-01>0945-01-01 · **Changsha** — chu-ma 0907-06-01>0951-01-01.
- **Kanton (Guangzhou)** — sonraki-liang 0907-06-01>0917-01-01 (nominal, beyanlı) · guney-han 0917-01-01>0971-02-28.
- **Jingzhou** — sonraki-liang 0907-06-01>0923-11-19 · sonraki-tang 0923-11-19>0924-01-01 · nan-ping-jingnan 0924-01-01>0963-01-01.
- **Dali** — nanzhao 0738-01-01>0902-01-01 (başı beyanlı) · da-changhe 0902-01-01>0928-01-01 (sonrası da-tianxing: cin3).
- **Zhangye (Ganzhou)** — ganzhou-uygur 0894-01-01>1028-01-01 (başı beyanlı) · xiazhou-dangxiang 1028-01-01>1038-01-01 (sonrası bati-xia).
- **Dunhuang** — guiyi-jun-dunhuang 0851-01-01>1036-01-01 · xiazhou-dangxiang 1036-01-01>1038-01-01.
- **Liaoyang** — liao-hanedani 0919-04-01>1116-06-12 (sonrası jin-hanedani; Gao Yongchang aralığı Liao’ya beyanla yazıldı).
- Bu parçaların sınır maddeleri `kronoloji_sinir_dogu_cin2.js`te. cin3’e düşen devir maddeleri: Çengdu 934-01-01, Dali 928-01-01 (da-tianxing), Yangzhou/Fuzhou/Changsha’nın guney-tang tarafı, Hangzhou/Guangzhou/Jingzhou’nun song tarafı, Kaifeng/Luoyang/Zhengding/Taiyuan’ın sonraki-jin tarafı (benim sınır maddem kayıp tarafı olarak yazdı, taraflar[0]=kazanan).

**BOYA İHTİYACI (arac/renkler.py BOYALAR’da olmayan 21 kimlik):** balhae, nanzhao, an-lushan-yan, guiyi-jun-dunhuang, xiazhou-dangxiang, ganzhou-uygur, qi-li-maozhen (noktasız), da-changhe, tang-jin-shatuo-prensligi, yang-wu, onceki-shu, sonraki-liang-5hanedan, wuyue, zhao-wang-rong, min-krallik, yan-liu-shouguang, guney-han-10krallik, sonraki-tang-5hanedan, nan-ping-jingnan, dongdan, chu-ma. (`liao-hanedani` BOYALAR’da var.) Ayrıca yeni `d:` kimlikleri: yama/zincirde kullanılan `da-changhe` künyesi bu kümede; `da-tianxing` ve `sonraki-shu` cin3’ün.

**Yeni tür/bölge önerisi:** kronolojide mevcut atlas çizgisini izleyen `baskent`, `siyaset` türlerini kullandım (şartname listesinde yok; mevcut `data/` kullanıyor). Yeni bölge değeri gerekmedi (`dogu-asya`).

**Notlar:** (a) Sınır dosyasında `devlet`=kazanan (toprak-kazanc) ya da kaybeden (toprak-kayip), `taraflar[0]`=kazanan. (b) Luoyang 756-01-18: Jiu Tang shu 9 «丁酉» ↔ 10 «十二月丁未» (756-01-28) çelişkisi `ic_not`ta. (c) 1281 sonrası hiçbir dilim yazılmadı; son dilim t’leri gerçek devir günü ya da künye t.
