# 52 · Sui Hanedanı — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-04 (ölçer top100_olc.py; kronoloji taraması k50.py; gün-ganzhi hesabı gz50.py Jülyen JDN+49 mod 60, 618-06-18=甲子 ve 581-03-04=甲子 ile sınandı; ay başı tablosu bu makinede yok)

## Özet
- Künye 7 (`sui` + 6 ardıl/rakip: Zheng, Wei, Qin, Liang-Xiao Xian, Liang-Shidu, Xia-Dou Jiande); ayrıca Xiao Xian için **çift künye** (`xiao-xian-liang`). Açık kırılma 0/9 (ölçer, diğer künyelerde 0/10). Eksik künye adayı 5; eksik madde 5.
- Ağır 1: **Xiao Xian için iki künye var ve t'leri çelişir:** `sui-liang-xiao-xian` t=0621-01-01, `xiao-xian-liang` t=0621-11-10. Jiangling `s:` 0621-11-10'a dek uzanıyor (ZZTJ 189: 乙巳 = 0621-11-10 doğrulandı) → `sui-liang-xiao-xian` künyesi 10 ay erken bitiyor ve zaten başka künyeyle mükerrer.
- Ağır 2: **Chen'in düşüşü günü tutarsız:** üç yerleşim (Nanjing, Changsha, Fuzhou) `f:0589-02-02` (Suishu 2 «丙子»), kronoloji olayı 0589-02-12 (Chen shu «景戌»). Chen shu'nun kendi sıralaması (正月 乙丑朔 = 589-01-22; 甲申 = 589-02-10 savaş; «及夜» Hou Zhu yakalandı; 丙戌 = 589-02-12 Jin Wang Guang girdi) Suishu'nun 丙子'sını (= 02-02, ayın 12. günü, oysa Chen shu'da o gün Sui hâlâ Zhongshan'a varmamıştı: 辛巳 = 17. gün) imkânsız kılıyor. Ayrıca Suishu 丙子 dahi `Han Qinhu Jianye'ye girdi` der. 10 günlük çelişki Değişmez 2'yi geçer (±30) ama harita ile madde 10 gün ayrı.
- Ağır 3: Liang (Shidu) künyesi `t:0628-05-28` (丙申) **kaynaksız gün**: JTS 2'de 丙申 bir önceki cümleye (Khitan) aittir, Liang Shidu cümlesi yalnız «夏四月» der. Ayrıca bu künyede 0 yerleşim: haritada görünmüyor.
- MÖ yok; hicrî yok. Tarih çevirisi: hatalı ganzhi→Jülyen YOK (kontrol edilen 14 gün).

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| sui | Sui Hanedanı | 0581-03-04 | 0619-05-25 | doğru f; t Yue Wang Tong'un Luoyang rejiminin sonu (Wang Shichong 乙巳). Özet metni «t 618-06-18» diyor → tutarsız |
| sui-zheng-wang-shichong | Zheng (鄭) | 0619-01-01 | 0621-06-04 | **f 0619-05-25 olmalı** (aşağıda) |
| sui-wei-li-mi | Wei (Li Mi) | 0617-01-01 | 0618-10-06 | f yıl düzeyi; `s:` 0617-03-31 |
| sui-qin-xue-ju | Qin (Xue Ju) | 0617-01-01 | 0618-11-30 | f yıl; `s:` 0617-05-13 |
| sui-liang-xiao-xian | Liang (Xiao Xian) | 0617-01-01 | 0621-01-01 | **mükerrer** `xiao-xian-liang` (0617-01-01 → 0621-11-10) |
| sui-liang-liang-shidu | Liang (Liang Shidu) | 0617-01-01 | 0628-05-28 | 0 yerleşim; t kaynaksız gün |
| sui-xia-dou-jiande | Xia (Dou Jiande) | 0617-02-10 | 0621-05-28 | f günü kaynaksız; t doğru (己未) |

EKSİK künye adayları (kaynak araştırması YAPILMADI, yalnız JTS 56 anıyor): Wu (Du Fuwei/Li Zitong) Jiangnan; Liang (Shen Faxing, 義寧二年 → 武德三年); Xu (Yuwen Huaji, 618-619); Han/Ding Yang (Liu Wuzhou, 617-622); Song (Fu Gongyou, 武德五年 → ; Tang dönemi, kapsam dışı).

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm | önerilen satır |
|---|---|---|---|---|---|
| sui f | 0581-03-04 | Suishu 1 «開皇元年二月甲子，上自相府常服入宮，備禮即皇帝位於臨光殿» (okundu) | Zhoushu 8 «甲子，隨王楊堅稱尊號，帝遜于別宮» (okundu); ZZTJ 175 «甲子...禪位於隋» (okundu) | 3 tarihçi aynı gün (二月甲子); Julian güne çeviri: ganzhi aritmetiği 581-03-04 = 甲子 ile uyumlu, ay başı tablosu bu makinede YOK → ay bağı doğrulanmadı. Hüküm: doğru. | değişmez |
| sui t | 0619-05-25 | JTS 1 «夏四月乙巳，王世充篡越王侗位» (okundu; 乙巳 = 619-05-25 hesap doğru) | Suishu 5 (Gongdi ji): «戊午，詔曰 ... 是日，上遜位於大唐» (okundu) = 618-06-12; JTS 1 «甲子，高祖即皇帝位» = 618-06-18 | Sui iki ucu: de jure Gongdi'nin devri 618-06-12 / Tang tahtı 618-06-18; Luoyang'da Yue Wang Tong 619-05-25'e dek. Atlas ikinciyi seçmiş: kabul. | `ozet`'teki «t günü 618-06-18» cümlesi düzeltilmeli; ic_not: «t: Luoyang rejimi; Gongdi devri 618-06-12 (Suishu 5, JTS 1)» |
| Chen'in fethi (olay) | 0589-02-12 | Chen shu 6 (Hou Zhu ji): «景戌，晉王廣入據京城»; «及夜，為隋軍所執» (甲申 savaşı sonrası = 589-02-10) | Suishu 2 «丙子...韓擒虎進師入建鄴，獲陳主叔寶。陳國平» (= 02-02); ZZTJ 177 «丙戌，晉王廣入建康» (okundu) | Chen shu + ZZTJ: Guang 丙戌 = 02-12; yakalanma 02-10 gecesi. Suishu 丙子 sıra olarak hatalı. | 3 yerleşimin `f`'sini `0589-02-12` yap (egemenlik değişimi) ya da olay metnini "02-10 yakalanma / 02-12 giriş" diye ayır. |
| Zheng f | 0619-01-01 | JTS 1: «夏四月乙巳，王世充篡越王侗位，僭稱天子，國號鄭» (619-05-25) | JTS 54: «世充僭即皇帝位，建元曰開明，國號鄭» (gün yok) | künye f `s:` ve olaydan 5 ay erken | f → 0619-05-25 |
| Zheng t | 0621-06-04 | JTS 1 «丙寅，王世充舉東都降» (丙寅 = 621-06-04 hesap doğru) | JTS 54 «乃率其將吏詣軍門請降» | doğru | — |
| Xia t | 0621-05-28 | JTS 1 «己未...擒建德» (己未 = 621-05-28 doğru) | JTS 54 (武德四年 Wuhao, gün yok) | doğru | — |
| Xia f | 0617-02-10 | JTS 54 «十三年正月，築壇場...自稱長樂王» | — | gün yok; 02-10 atlasın kendi hesabı, kaynaksız | kesinlik gun → ay |
| Xiao Xian t | 0621-01-01 | ZZTJ 189 «乙巳，銑以太牢告於太廟，下令開門出降» (冬十月; 乙巳 = 621-11-10 doğru) | JTS 56 «五年而滅»; atlasın `xiao-xian-liang` künyesi 0621-11-10 | künye t 10 ay erken | birleştir, t → 0621-11-10 |
| Xiao Xian f | 0617-01-01 | JTS 56 «大業十三年 ... 即日自稱梁公» (ay yok) | JTS 56 «武德元年 ... 遷都江陵» ve ZZTJ'da başkent Jiangling 618 | f yıl; ilk yerleşim 618-01-01 (Jiangling) | kabul, yıl hassasiyeti beyanı |
| Liang Shidu t | 0628-05-28 | JTS 2 «貞觀二年 夏四月 ... 梁師都為其從父弟洛仁所殺» — **gün yok** (丙申 önceki Khitan cümlesinin) | JTS 56 «凡十二歲» | kaynaksız gün | t → 0628-01-01, kesinlik yil, ic_not: 夏四月 |
| Wei t | 0618-10-06 | JTS 53 «九月，世充...密遂敗績» (gün yok) | — | gün (甲寅) JTS 53'te yok; ZZTJ 186'da okunmadı | gün teyidi için ZZTJ 186 |
| Qin t | 0618-11-30 | atlas `ic_not_takvim`: 己酉 武德元年 十一月 (JTS 55 yalnız «窮蹙...降») | — | gün JTS 55'te yok, ZZTJ'ya dayanıyor (okunmadı) | teyit |

Not (Dou Jiande 長樂王 «年號丁丑» — JTS 54: «丁丑» bir yıl adıdır, gün değil).

## c) Kronoloji (Değişmez 2 evreni)
Var olanlar:
| madde | t | dosya:satır | hüküm |
|---|---|---|---|
| Yang Jian tahta çıktı, Sui kuruldu | 0581-03-04 | data/olaylar_ortacag_cin.js:11 | doğru (Suishu 1 alıntılı) |
| Sui Hou Liang'i ilga etti, Jiangling | 0587-10-26 | kronoloji_sinir_dogu_500_1281.js:~289 | okunmadı |
| Sui ordusu Jiankang'a girdi | 0589-02-12 | kronoloji_sinir_dogu_500_1281.js:236 | bkz. b) |
| Yangdi Dongjing'in inşasını emretti | 0605-04-10 | olaylar_ortacag_cin.js:12 | doğru: Suishu 3 «大業元年 三月丁未» (丁未 = 605-04-10 hesap doğru) |
| Tongji Kanalı | 0605-04-14 | olaylar_ortacag_cin.js:13 | doğru: Suishu 3 «三月辛亥» (辛亥 = 605-04-14 doğru) |
| Li Yuan Taiyuan'da ayaklandı | 0617-06-23 | olaylar_ortacag_cin.js:14 | 甲子 = 617-06-23 doğru |
| Li Mi Wei Dükü | 0617-03-31 | kronoloji_sinir_asya_zincir_1024.js:72 | gün ZZTJ'ya dayanıyor, okunmadı |
| Xue Ju Batı Qin | 0617-05-13 | :73 | aynı |
| Li Yuan Daxing'i aldı | 0617-12-12 | olaylar_ortacag_cin.js:15 | 丙辰 = 617-12-12 doğru (Suishu 4 «十一月丙辰，唐公入京師») |
| Yangdi öldürüldü | 0618-04-11 | olaylar_ortacag_cin.js:16 | 丙辰 doğru |
| Li Yuan tahta çıktı | 0618-06-18 | kronoloji_sinir_dogu_500_1281.js:167 | 甲子 doğru |
| Wei çöktü / Qin çöktü | 0618-10-06 / 0618-11-30 | kronoloji_sinir_asya_zincir_1024.js:74-75 | bkz. b) |
| Wang Shichong Zheng'i kurdu | 0619-05-25 | kronoloji_sinir_dogu_500_1281.js:28 | doğru |
| Dou Jiande esir | 0621-05-28 | :375 | doğru |
| Wang Shichong teslim | 0621-06-04 | :51 | doğru |
| Jiangling Tang'a geçti | 0621-11-10 | :329 | doğru (ZZTJ 189) |

Eksik maddeler (hepsi Suishu 1/3/4 okundu; gün-ay çevirisi için ay başı tablosu gerekli olduğundan gün YAZILMADI, ganzhi ayrı):
1. Daxing'in yapımı emri: `{ t:"0582-07-29", kesinlik:"gun", b:"Sui Daxing'i (yeni Chang'an) kurma emrini verdi", yer_id:"Xi'an (Chang'an)", kaynak:"Suishu 1 «開皇二年六月丙申 ... 創造新都»" }` (丙申 = 582-07-29 hesap doğru; ay bağı atlasın yerleşim notunda var).
2. `{ t:"0583-01-05", kesinlik:"gun", b:"Yeni başkent 'Daxing' adını aldı", yer_id:"Xi'an (Chang'an)", kaynak:"Suishu 1 «丙子，名新都曰大興城» (開皇二年十二月)" }` — yerleşim notunda var ama madde yok.
3. `{ t:"0583-04-15", kesinlik:"gun", b:"Wendi yeni başkent Daxing'e girdi", yer_id:"Xi'an (Chang'an)", kaynak:"Suishu 1 «三年 ... 丙辰，雨，常服入新都»" }`.
4. Goguryeo seferi: `{ t:"0612-01-01", kesinlik:"yil", b:"Yangdi Goguryeo'ya sefer başlattı; Salsu (Salsu/Sa-su) yenilgisi", yer_id:"Pyongyang", kaynak:"Suishu 4 «大業八年 正月壬午 (= 下詔伐高麗) ... 七月壬寅，宇文述等敗績於薩水»" }` — gün çevrilmedi; yıl hassasiyeti. (Atlas olaylarında hiç yok.)
5. Yangdi'nin tahta çıkışı (604): Suishu 3 «四年七月，高祖崩，上即皇帝位於仁壽宮» — gün yok → `t:"0604-01-01"`.
Ayrıca Büyük Kanal'ın diğer kolları: Yongji Kanalı Suishu 3 «大業四年 春正月乙巳» (gün çevrilmedi); Jiangnan Kanalı Suishu 3'te YOK (okundu: 大業六年 kanal kaydı bulunamadı).

## d) Harita uyumu
Ölçer: `sui` kırılma 9, açık 0; ardıl künyeler 0. En geniş yıl 602: **7 yerleşim**: Xi'an, Luoyang, Nanjing, Jingzhou, Changsha, Fuzhou, Hanoi. Gerçek Sui 190 commandery, ~50 milyon nüfus; haritada ~7 nokta.
Ölçülmüş eksik: Taiyuan, Chengdu (yalnız `__BOSLUK__` 0347-0907), Guangzhou/Kanton, Yangzhou/Jiangdu, Kaifeng, Datong, Dunhuang (BOŞLUK 0423-0851), Zhangye (BOŞLUK), Liaoyang (BOŞLUK), Anyang/Ye, Xiangyang, Jinan, Xuzhou, Hangzhou, Suzhou, Nanchang — `s:` zincirinde Sui dönemi **yok** (bu oturumda 40 noktanın yerlesimler*.js kayıtları tarandı; hepsi s:'te Sui yazmıyor veya `__BOSLUK__`). Öneri: önce Yangzhou/Jiangdu (Yangdi'nin ölümü olayı bu şehirde ve haritada Sui sahibi yok), Taiyuan (Li Yuan'ın ayaklanması), Chengdu, Guangzhou, Kaifeng, Datong.
Diğer bulgular:
- Changsha `s:` 0617'de Sui'den çıkıyor ve `d:"xiao-xian-liang"` yazıyor (künye mükerrer bkz. özet).
- Xi'an `s:` Sui 0617-12-12'de bitiyor, ardından Tang; oysa Yang You (Gongdi) Daxing'de 0617-12-?? ile 0618-06-12 arası Sui tahtında (Suishu 4 «辛酉 ... 立代王侑為帝»); atlas fiilî sahibi (Tang) seçmiş ve bunu not etmiş: kabul, beyan var.
- Wagang `s: sui-wei-li-mi` 0618-10-06'ya dek; olay metni «sahipsiz kaldı» diyor ama `s:` sonrası: okunmadı.
- Liang (Shidu): **0 yerleşim, haritada görünmüyor.** Öneri: Shuofang/Xiazhou (Tongwancheng) için `s:` 617?-0628; Xiazhou kaydı `yerlesimler_*.js` içinde bulunamadı (aday: yeni nokta) — gün için JTS 2 «夏四月» (Jülyen karşılığı çevrilmedi).
- Wei `sui` s: Luoyang 0619-05-25'e dek Sui: JTS 53'e göre Li Mi Luoyang çevresini kuşattı ama şehre giremedi — doğru (beyan var).
- Jiangling `s:` Sui f=0587-10-26: künye f 0581'den sonra, kabul.

## Önerilen düzeltmeler (KASA için)
1. data/devletler.js (sui-liang-xiao-xian) — künyeyi `xiao-xian-liang` ile birleştir (kalan `xiao-xian-liang`, t 0621-11-10); yerleşimlerdeki `d:"xiao-xian-liang"` (yerlesimler_asya.js:2131) zaten onu kullanıyor; Jingzhou `s:` (yerlesimler_asya.js:2102) ve odak_yedek:77/`not:` alanlarındaki `sui-liang-xiao-xian` göndermesi tek künyeye çekilsin (renkler.py BOYALAR tuzlu dosya → HAVVA koşusu).
2. data/devletler.js:sui-zheng-wang-shichong f → 0619-05-25.
3. data/devletler.js:sui-liang-liang-shidu t → 0628-01-01 (kesinlik yil); ic_not «JTS 2 夏四月, gün yok».
4. data/devletler.js:sui-xia-dou-jiande f 0617-02-10 → kesinlik ay (gün kaynaksız).
5. data/yerlesimler_asya.js:1983 (Nanjing), :2119 (Changsha), :2387 (Fuzhou) — `f:"0589-02-02"` → `0589-02-12` (Chen shu 景戌 + ZZTJ 177 丙戌), kaynak: Suishu 2 丙子 sıralama hatası.
6. data/devletler.js:20436 (sui) `ozet` — «t günü (618-06-18)» ifadesini çıkar; künye t 0619-05-25 ile uyumlu yaz.
7. data/olaylar_ortacag_cin.js — c.1-5 maddelerini ekle.
8. data/yerlesimler_asya.js Yangzhou/Taiyuan/Chengdu/Guangzhou/Kaifeng/Datong — `s: sui` dönemleri (kaynak turu); haritada 7 nokta yetersiz.

## Erişilemeyen kaynaklar
- Twitchett, D. (ed.), *The Cambridge History of China*, vol. 3, Sui and T'ang China, 589-906 Part I (1979) — Sui'nin kuruluş (581), Chen fethi (589), çöküş (618-619) için akademik ikinci kaynak. Soru: Yue Wang Tong'un Luoyang'da imparator ilanı ve 619'da Wang Shichong'un onu indirmesi hangi ay?
- Wright, A.F., *The Sui Dynasty* (1978) — aynı sorular.
- Graff, D. (Taylor & Francis ch. «Koguryŏ War and the Fall of Sui») — 612 seferi başlangıcı ve Salsu.
- Ay başı tabloları (Academia Sinica/NAOJ, ytliu0 ChineseCalendar): 581-02, 589-01, 612-01, 617-02, 619-04, 628-04 ay başları — ganzhi'den Jülyen güne çeviri doğrulaması.
- ZZTJ 183-186, 188 (Li Mi'nin Wei Dükü günü, Xue Ju günü, Wei'nin yıkılışı, Qin'in düşüşü): atlas kaynak alanları ZZTJ'ya dayanıyor, bu oturumda okunmadı.

## Koordinatör kararı (EMRELİC 1 KASIM, 4 Kasım 2026) — kaynaklı düzeltme önerisi
- Chen'in düşüşü: yerleşimlerdeki 0589-02-02 (Suishu 丙子) ile evren maddesindeki 0589-02-12 (Chen shu, ZZTJ 丙戌)
  tek güne indirilsin; Chen shu sırası Suishu gününü dışladığı için öneri **0589-02-12** (iki kaynak) + `ic_not`
  "Suishu 丙子 = 02-02; ganzhi çevirisi hesap, doğrulanmadı". Cambridge History of China 3 okunamadı.
- Mükerrer künye: `sui-liang-xiao-xian` (t 0621-01-01) ile `xiao-xian-liang` (t 0621-11-10) aynı polity ⇒
  **birleştirme**: `xiao-xian-liang` kalsın (t 621-11-10, ZZTJ 189 乙巳), öbürünün yerleşim dönemleri ve maddeleri
  ona taşınsın; renk girdisi (renkler.py, tuz) kalabilir.
