# kuyrukcin RAPORU — Song / Liao / Jin / Batı Xia / Moğol-Yuan kuyruğu (960→1281) ve cin1/2/3 yamalarının birleştirilmesi

Ölçüm yeri: C:\atlas\.claude\worktrees\dogu (worktree `dogu`), 22 Ekim 2026. Üretici: `_uret.js` (veri) + `_yaz.js` (yazım); alıntı sınaması `_alinti.js`; takvim: `cin2/_cal.py` + `_m.js` (ay-ilk-günü + ganzhi farkı; ±1 gün). Birincil metinler `zh.wikisource.org` ham metninden çekilip önbelleğe alındı (Jin shi 1-18, Song shi 1-47, Yuan shi 1-14 ve 60, Xin Wudai shi 12/61/62/66/67). Sınav: `node denetim/dogu/dogrula.js kuyrukcin` → **ihlal 0 · uyarı 0** (çıkış 0; 18 yama kaydı, 143 dilim, 125 devir maddesi, devir_eşleşmeyen 0).

## ① Ölçülen
- Girdi listesi **20 şehir**; **18'i için yama yazıldı**, **2'sinde boşluk yok** (Dali, Yinchuan — zincirleri cin2/cin3 yamalarıyla zaten 1281-01-01'e sürekli ulaşıyor; yama YAZILMADI).
- **18 şehrin tamamında zincir sürekli** (dilim sonu = sonraki dilim başı) ve son dilimin `t`si = mevcut zincirin ilk dönemi `f`i (16 şehirde 1281-01-01; Kaifeng ve Hangzhou'da 1000-01-01). Kaldı: 0 şehir. `__BOSLUK__` dilimi: **0**.
- Dilim: **143** (71 kopya + **72 yeni/düzeltilmiş**; yeni dilimin **32'sinde BEYAN** var). Şehir başına yeni dilim: Xi'an 9 · Zhengding 7 · Luoyang 7 · Pekin 5 · Yangzhou 5 · Xining 5 · Nanjing 4 · Chengdu 4 · Fuzhou 4 · Changsha 4 · Liaoyang 4 · Taiyuan 3 · Zhangye 3 · Dunhuang 3 · Jingzhou 2 · Guangzhou 2 · Hangzhou 1 · Kaifeng 0.
- Devir (sınır) maddesi: **125** (`kronoloji_sinir_dogu_kuyrukcin.js`): **70 yeni** + **55 cin1/2/3 maddesinin AYNEN kopyası** (dogrula küme-içi ölçtüğü için kopyalar burada da var; birleştirmede `(yer_id, t, b)` tekrarları atılmalı).
- Alıntı sınaması (`_alinti.js`): yeni dilimlerdeki 「…」/«…» **253** CJK parçası önbellekteki metinlerde arandı; **251 bulundu, 2 bulunamadı** (Fuzhou, `自唐乾寧二年…至皇朝太平興國三年國除`: cin2'nin sınır maddesinden aktarılan sayfa-notu; metinde "bu oturumda doğrulanmadı" yazıldı).
- Yeni künye: **0** (`kunye_yeni.js` yazılmadı). Kullanılan 44 devlet kimliğinden 35'i `devletler.js`'te; 9'u yalnız ms1/cin künyelerinde: `sui-zheng-wang-shichong, an-lushan-yan, hou-liang-xi-liang, sui-liang-xiao-xian, tang-jin-shatuo-prensligi, zhao-wang-rong, yan-liu-shouguang, ganzhou-uygur, xiazhou-dangxiang`.

### Yamaların YERİNE geçtiği cin yamaları (aynı ad'lı kayıt; ikisi birden uygulanmaz)
| Şehir | Yerine geçtiği dosya(lar) | Önek aralığı |
|---|---|---|
| Xi'an (Chang'an) | cin1/yama_cin1.js | 0500-01-01 → 1281-01-01 (16 dilim) |
| Luoyang | cin1 + cin2/yama_cin2.json + cin3/yama_dogu_cin3.js | 0500 → 1281 (23) |
| Nanking (Nanjing) | cin1 + cin3 | 0500 → 1281 (9) |
| Jingzhou | cin1 + cin2 | 0500 → 1281 (11) |
| Kaifeng | cin2 + cin3 | 0907-06-01 → **1000-01-01** (7) |
| Hangzhou | cin2 + cin3 | 0907-06-01 → **1000-01-01** (2) |
| Taiyuan | cin2 + cin3 | 0895 → 1281 (9) |
| Zhengding | cin2 | 0907-06-01 → 1281 (10) |
| Pekin (Hanbalık) | cin2 | 0907-06-01 → 1281 (10) |
| Çengdu (Chengdu) | cin2 + cin3 | 0907-06-01 → 1281 (6) |
| Yangzhou | cin2 | 0902 → 1281 (5) |
| Fuzhou | cin2 | 0907-06-01 → 1281 (5) |
| Kanton (Guangzhou) | cin2 | 0907-06-01 → 1281 (4) |
| Changsha | cin2 | 0907-06-01 → 1281 (5) |
| Zhangye (Ganzhou) | cin2 | 0894 → 1281 (5) |
| Dunhuang | cin2 | 0851 → 1281 (5) |
| Liaoyang | cin2 | 0919-04-01 → 1281 (5) |
| Xining | cin3 | 1032 → 1281 (6) |

Çakışma/boşluk düzeltmeleri (kopyalarda): **Luoyang** cin1'in tek parça `tang 705→907` dilimi cin2'nin `an-lushan-yan` dilimleriyle çakışıyordu → Tang 705-03-03→756-01-18 · an-lushan 756-01-18→757-01-01 · Tang 757-01-01→759-09-26 · an-lushan 759-09-26→762-11-20 · Tang 762-11-20→907-06-01 (beş dilim). **Hangzhou** wuyue t 978-01-01 → 978-06-09 (cin3 song f ile 159 günlük boşluk kapandı). **Çengdu** sonraki-tang t 934-01-01 → 934-03-16 (74 günlük boşluk). **Yangzhou** yang-wu t 937-10-01 → 937-11-10 (Güney Tang başlangıcıyla aynı gün; Nanjing ile hizalı). **Kaifeng**: cin3'ün `da-chu-zhang-bangchang 1127-04-20→05-16` ve `da-qi-liu-yu 1130-10-12→1138-01-02` dilimleri **ATILDI** (mevcut atlas zinciri 1000'den başlayıp Song 1127'ye, Jin 1127-1234'e gittiği için önek 1000-01-01'de biter; bkz. ③).

## ② Bulamadığım / doğrulayamadığım (BEYANLI YAKLAŞIKLIK olarak yazıldı; kaynak adıyla `kaynak:` alanında)
- **Xi'an, Zhengding 907-960:** şehir adıyla Beş Hanedan devir kaynağı okunmadı → Luoyang/Kaifeng hanedan zinciri **ABİ MERKEZ** olarak devralındı (Liao ara dönemi 947-01-10→06-23 bu iki şehirde atlandı, Han'a bağlandı). Zhengding'in 947 Liao teslimi (Du Chongwei) ve Xi'an'daki yerel isyanlar okunmadı.
- **Xi'an/Luoyang 1130-1138 Qi (Liu Yu):** `da-qi-liu-yu` kimliği atlas'ta yok (cin3 künyesinde) → Jin'e yazıldı; 1127-1129 Song/Jin gidiş gelişleri okunmadı. Xi'an: Jin shi 3 «天會六年 2. ay… 攻下…京兆» (ilk fetih) ile «天會七年 10. ay 丙子朔 京兆府降» arası; kalıcı devir 1129-11-14.
- **Taiyuan Jin→Moğol:** Jin shi 15 (1218 düşüş · 1219-01 «已定太原» · 1219-06 Jin geri aldı) ve Yuan shi 1 (1218) tek kalıcı gün vermiyor; Jin shi 16-18'de yeniden düşüş kaydı YOK → devir Jin sonuna (1234-02-09, Jin shi 18 己酉) bağlandı. **Zhengding**: Wu Xian gidiş gelişleri → 1225-05-09 (Wu Xian'ın Jin'e çekilişi, Jin shi 17). **Luoyang**: 1232-03-29 «平中京» ile 1233-07-17 «中京破» arası → kalıcı 1233-07-17. **Xi'an**: 1231-10-10 (Jin'in şehri terk edişi).
- **Pekin:** Song'un fiilî giriş günü yok; Jin'in 1123-05-07 teslim günü alındı. **Liaoyang 1215-1260:** şehir adıyla kaynak yok; Pu-xian Wannu ('Liaodong', `dongxia`) 1215-10-24→1216-11-11 varsayımı; Yuan shi 119 «乙亥…平定東京» (yılsız) ile çelişki `kaynak:`ta. Moğol'un Liaoyang'a fiilî girişi okunmadı.
- **Chengdu:** Moğol girişi 1236 (Yuan shi 2); Song'un 1236-12 geri alımı (Song shi 42) ve ~1239 yeniden düşüşü tek günle okunamadı → 1236-10-31 (ay düzeyi); 1258'de Moğol elinde olduğu kesin (Yuan shi 3, Song shi 44).
- **Guangzhou:** 1276-1278 arasında 7 el değiştirme (Song shi 47) tek dilime indirildi; son kalıcı Yuan girişi 1278-12-29 (閏11 癸亥). **Fuzhou:** Min sonrası 945-947 Güney Tang (Li Rengda) nominal; Wuyue'nun Fuzhou'yu alış yılı kaynakta yok (en geç 947) → 947-01-01 (yil); Wuyue→Song 978-06-09 Hangzhou'dan devralındı.
- **Changsha 951-963:** Wuping/Wu'an jun (Liu Yan, Wang Kui, Zhou Xingfeng) için künye yok → Güney Tang 951→952, sonra Sonraki Zhou/Song nominal egemenliği. **Nanjing 618-902:** Tang nominal (620-624 rakip rejimler ve 624-902 valilikleri okunmadı); 902-937 Yang Wu.
- **Dunhuang 1227 / Zhangye 1226:** Yuan shi 60 ve Yuan shi 1 yıl düzeyi (Zhangye'de «取甘、肅等州» 1226 yazı → 1226-01-01; Xia künye t=1227). **Xining:** Song'un 1104-1131 idaresi okunmadı; Jin'in 1131 pacify'ı ay düzeyi (1131-01-31); Xia 1220-10-20 (Jin shi 16), Moğol 1227-03-19 (ay).
- Açılmayan: Song shi coğrafya (87), Song shi 483/485/486/490/492 (yalnız cin kopyaları), ZZTJ 285-290, TDV/İSAM/akademik monograf (bu coğrafya için Çin dinastik tarihleri esas; Cambridge History of China 5-6 **açılmadı**).

## ③ Kararlar / istekler
- **Künye düzeltme önerileri (yazılmadı):** `bati-xia` t=1227-01-01 → Xining 1220-10-20→1227-03-19 dilimi 77 gün aşıyor (Xia fiilen 1227 yazında bitti). cin2'nin önerileri geçerli: `sonraki-liang/tang/jin/han/zhou-5hanedan`, `tang` (Luoyang 762-11-20→907-06-01), `yang-wu` (937-11-10), `wuyue` t 978-06-09, `guney-tang` t 975→976-01-01. `yuan-hanedani` f=1260-01-01 **yıl düzeyidir** (Yuan shi 4: 中統元年 3. ay 辛卯 Kubilay tahta çıktı; 'Da Yuan' adı 1271, Yuan shi 7) — 1260 sınırı 10 şehirde (Xi'an, Luoyang, Taiyuan, Zhengding, Pekin, Chengdu, Zhangye, Dunhuang, Liaoyang, Xining) 1260-01-01 olarak yazıldı.
- **MEVCUT zincirlere düzeltme önerisi (dosyaya yazılmadı):** (a) Kaifeng `1127-01-01→1234-01-01 jin`: 1127-1138 arası `da-chu-zhang-bangchang` 1127-04-20→05-16, Song 1127-05→1128, `da-qi-liu-yu` 1130-10-12→1138-01-02 (cin3 yaması) eklenmeli. (b) Kaifeng `1260→1281 __BOSLUK__`: `yuan-hanedani` f=1260-01-01 olduğundan yuan'a çevrilebilir. (c) Hangzhou mevcut `song 1000→1276-01-01` Moğol'a 1276-02'de geçti (Yuan shi 8 Lin'an teslimi okunmadı).
- **Boya ihtiyacı** (BOYALAR'da olmayan, yamada geçen 37 kimlik): an-lushan-yan bati-wei chen chu-ma dogu-wei ganzhou-uygur guiyi-jun-dunhuang guney-han-10krallik guney-qi guney-tang hou-liang-xi-liang kuzey-han-10krallik kuzey-qi kuzey-wei kuzey-zhou liang-guney min-krallik nan-ping-jingnan onceki-shu sonraki-han-5hanedan sonraki-jin-5hanedan sonraki-liang-5hanedan sonraki-shu sonraki-tang-5hanedan sonraki-zhou-5hanedan sui sui-liang-xiao-xian sui-zheng-wang-shichong tang tang-jin-shatuo-prensligi tsongkha wu-zhou wuyue xiazhou-dangxiang yan-liu-shouguang yang-wu zhao-wang-rong. Yeni 'kuyruk' kimlikleri (song, jin-hanedani, bati-xia, dongxia, liao-hanedani, mogol-imparatorlugu, yuan-hanedani) BOYALAR'da var.
- **Pencere/format:** kuyrukcin sınır dosyası cin1/2/3 maddelerinin 55 kopyasını içerir; birleştirmede tekrar atılmalı. Yeni tür/bölge değeri gerekmedi.
- İstek: Emre `bati-xia`/`yuan-hanedani` künye yıl-düzeyi kararını ve Kaifeng 1127-1138 / 1260-1281 düzeltmelerini onaylasın; Chengdu 1239, Taiyuan 1217-1219, Liaoyang 1215-1260 için ayrı ikinci kaynak turu (Song shi 43/44, Yuan shi 119/150, Jin shi 116/118 listeleri; YÖK tezleri) açılabilir.
