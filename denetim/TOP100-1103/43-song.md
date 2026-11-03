# 43 · Song Hanedanı — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 3 Kasım 2026 (ölçer: top100_olc.py safevi memluk song; `--ara song` → id `song`)

## Özet
- Künye 1 (`song`, 0960-01-01 → 1279-03-19, harita ayrı değil: `kaynak:cin--ulke`, `boya_gerekli:true`). Yerleşim yalnız **23 kayıt**; en geniş yıl 1125 (22), 1140 sonrası 14, 1275: 9. Kırılma 39, **AÇIK 1** (1000-01-01 — ufuk işareti, bkz. d).
- Künye evre bölünmesi yok (Kuzey Song / Güney Song tek künye). Öneri: BÖLME; Güney Song'un başkent/evre notları kronolojiyle kapatılsın.
- **En ağır 3 bulgu:** (1) künye `f:0960-01-01` yerine **0960-02-04** (Song shi 1 «建隆元年春正月乙巳»; Jülyen 乙巳 günü hesabımla 960-02-04, yerleşim `s:` dönemleri zaten 0960-02-04) — f ile yerleşimler 34 gün farklı; (2) künye kronoloji satırları yanlış tarih/yerli: «1127-01-01 … saray Hangzhou'ya çekildi» (gerçek: Kaifeng 1127-01-09, Gaozong tahtı 1127-06-12 Yingtianfu, Hangzhou 1129-03-05, Lin'an başkent 1138) ve «1279 … odak_yer Kaifeng» (gerçek: Yamen); (3) Yamen'in gün maddesi Değişmez 2 evreninde (olaylar*/kronoloji_sinir*) YOK; Lin'an teslimi (1276-02-04) ve Jin'in sonu (1234-02-09) yok.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| song | Song Hanedanı (Çin) | 0960-01-01 | 1279-03-19 | TAM künye; tek (Kuzey+Güney). `s:` yerleşim sayısı çok az (23). |
| jin-hanedani | Jin Hanedanı | 1115-01-01 | 1234-02-09 | komşu/ardıl; ayrı ajan |
| yuan-hanedani | Yuan Hanedanı | — | — | ardıl; ayrı ajan |
| liao-hanedani, dali-kralligi | komşu | — | — | ayrı ajan |
Eksik evre: yok. İsteğe bağlı: `song-kuzey` (960-02-04→1127-01-09) / `song-guney` (1127-06-12→1279-03-19) — TOP100 listesinde tek Song; BÖLME önerilmez.

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm |
|---|---|---|---|---|
| f | 0960-01-01 | Tuotuo vd., *Song shi* juan 1 (zh.wikisource.org/wiki/宋史/卷001): «建隆元年春正月乙巳，大赦，改元，定有天下之號曰宋。» | Ouyang Xiu, *Xin Wudai shi* juan 12 (atlas kaynakçası): 顯德七年春正月 (sayfa 404 verdi — çekilemedi); takvim hesabı: **乙巳 = 960-02-04 (Jülyen)** (benim formülüm, 4 başka atlas tarihiyle çapraz doğrulandı) | f → **0960-02-04**. Çift teyit tam değil (2. kaynak çekilemedi); Cambridge History of China 5/1 erişilemeyen. Takvim: Çin ay-güneş takviminden hesap, "doğrulanmadı" (arac/cin_gun.py yok). |
| Kaifeng (Jingkang) | künyede 1127-01-01 | *Song shi* juan 23: «閏十一月丙辰 … 京城陷» (1126 ay-yılı) → 丙辰 = **1127-01-09 (Jülyen)** | atlas `kronoloji_sinir_once1281_yerlesim_asya_iran.js:21`: 1127-01-09 | DOĞRU 1127-01-09; künyedeki 1127-01-01 satırı yer/tarih yanlış. |
| Jin'in Huizong/Qinzong'u götürmesi | 1127-05-13 | *Song shi* juan 23: «四月庚申朔: 金人以帝及皇后、皇太子北歸» → 庚申 = 1127-05-13 ✓ | `olaylar_ortacag_cin.js:60` | DOĞRU. |
| Zhang Bangchang 'Chu' | 1127-04-20 | *Song shi* juan 23: «三月丁酉: 金人立張邦昌為楚帝» → 丁酉 = 1127-04-20 ✓ | `olaylar_ortacag_cin.js:59` | DOĞRU. |
| Güney Song'un kuruluşu | künyede yok | *Song shi* juan 24: «五月庚寅朔，帝登壇受命 … 即位於府治。改元建炎» (Yingtianfu/Nanjing) → 庚寅 = **1127-06-12** ✓ | — | EKSİK madde. |
| Hangzhou | 1129-03-05 | `olaylar_ortacag_cin.js:62`, `:64` (Lin'an fu 1129-08-01) | — | Mevcut; başkent olarak ilan (1138) eksik. |
| Güney Song'un ilk barışı | 1141-12-17 | `olaylar_ortacag_cin.js:66` | — | VAR. |
| Lin'an'ın teslimi | künyede yok | *Song shi* juan 47: «德祐二年正月甲申 … 遣監察御史楊應奎上傳國璽降» → 甲申 = **1276-02-04** ✓ | atlas `yerlesimler` kaynakları Yuan shi 8 | EKSİK madde. |
| Duanzong (Jingyan) | künyede yok | *Song shi* juan 47: «景炎元年五月乙未朔 … 立昰于福州» → 乙未 = **1276-06-14** | — | EKSİK (Song devamı). |
| t (son) | 1279-03-19 | *Song shi* juan 47: 祥興二年二月癸未 «陸秀夫 … 負昺投海中» → 癸未 = **1279-03-19** ✓ | *Yuan shi* juan 10 (至元十六年正月甲戌: «廣王昺偕其官屬俱赴海死») → 甲戌 = 1279-03-10 veya 01-09 (ay/takvim farkı; hesap) | **KAYNAKLAR ARASI GÜN FARKI** (癸未 19 Mart vs 甲戌 9-10): çoğu kaynak/Vikipedi 19 Mart; seçim 1279-03-19 (Song shi, Hanedanın kendi resmî tarihi), çelişki ic_not'ta iki kaynakla beyan. Ek bir ikincil: Treccani 'sung' çekilemedi. Karar: t doğru. |
| Jin bitişi (komşu) | 1234-02-09 | tarih → 己酉 = 1234-02-09 hesap uyuyor (Jin shi 18: tarih okunmadı) | — | Jin ajanına. |

## c) Kronoloji
Değişmez 2 evreninde VAR (dosya:satır): Zhao Kuangyin 960 maddesi YOK (künye içinde `0960-01-01`, evren dışı); Gaoliang Nehri 979 `olaylar_ortacag_cin.js:52`; Taizong Tsongkha 1104-05-08 `kronoloji_sinir_asya_zincir_1024.js:109`; Huizong tahtı 1100-02-23 `:56`; Qinzong 1126-01-19 `:57`; Kaifeng ilk kuşatma 1126-03-04 `:58`; Kaifeng 1127-01-09 `kronoloji_sinir_once1281_yerlesim_asya_iran.js:21`; Zhang Bangchang `:59`; Jin götürdü `:60`; Gaozong Yangzhou 1129-02-23 `:61`; Hangzhou 1129-03-05 `:62`; Lin'an fu 1129-08-01 `:64`; Wuzhu Lin'an 1130-01-22 `:65`; 1141-12-17 `:66`; Yue Fei 1142-01-27 `:67`; Kubilay Wuchang 1259-09-27 `:68`; Xiangyang 1270-08-18 `:69`, 1273-03-14 sınır (`kronoloji_sinir_once1281_geriye.js:223`); Yuan 1271-12-18 `:70`; Wuchang 1275-01-15 ve Nanjing 1275-03-27 (aynı dosya :222, :220).
Künye `kronoloji:` (evren dışı): 960-01-01, 1127-01-01, 1234-01-01, 1279-03-19.
**Künye kronoloji hataları (evren dışı ama haritada gösteriliyorsa kırıcı):** 1127-01-01 "Hangzhou'ya çekildi" yanlış (yukarı); 1234-01-01 odak Kaifeng: Song-Moğol ittifak 1233; Jin sonu 1234-02-09 (Caizhou); Kaifeng Moğol işgali 1233-1234; odak_yer yanlış; 1279 odak_yer Kaifeng yanlış (Yamen/Guangzhou yöresi `yer_id` yok olabilir — kontrol).
EKSİK madde önerileri:
```
{ t:"0960-02-04", kesinlik:"gun", b:"Zhao Kuangyin (Taizu) imparator oldu — Song hanedanı kuruldu; Sonraki Zhou sona erdi", tur:"kurulus", yer_id:"Kaifeng", kaynak:"Tuotuo vd., Song shi juan 1: «建隆元年春正月乙巳 … 定有天下之號曰宋»; 乙巳 = 960-02-04 (Jülyen, hesap; çevrilmedi/doğrulanmadı)" }
{ t:"1127-06-12", kesinlik:"gun", b:"Gaozong Yingtianfu'da (Nanjing/Shangqiu) tahta çıktı, Jianyan çağı başladı — Güney Song'un başlangıcı", tur:"kurulus", yer_id:"Nanking (Nanjing)", kaynak:"Song shi juan 24: «五月庚寅朔，帝登壇受命 … 即位於府治。改元建炎»; 庚寅 = 1127-06-12" }  // yer_id: Yingtianfu ≠ Nanjing (Jiangsu); doğru yer_id gerekir, Shangqiu — sehirler.js'te yok: yerleşim ekle
{ t:"1138-01-01", kesinlik:"yil", b:"Lin'an (Hangzhou) Güney Song'un resmî başkenti (xingzai) olarak tesbit edildi", tur:"baskent", yer_id:"Hangzhou", kaynak:"Song shi (Shaoxing 8; juan 28-29) — çekilemedi; 'Erişilemeyen'e yazıldı" }
{ t:"1276-02-04", kesinlik:"gun", b:"Lin'an teslim oldu: İmparatoriçe Dul Xie ve Gong Di Yuan'a boyun eğdi, devlet mührü teslim edildi", tur:"fetih", yer_id:"Hangzhou", kaynak:"Song shi juan 47: «德祐二年正月甲申 … 上傳國璽降»; 甲申 = 1276-02-04 (hesap)" }
{ t:"1276-06-14", kesinlik:"gun", b:"Song'un hayatta kalan sarayı Fuzhou'da Duanzong'u (Zhao Shi) imparator yaptı, Jingyan çağı", tur:"hukumdar", yer_id:"Fuzhou", kaynak:"Song shi juan 47: «五月乙未朔 … 立昰于福州 … 改元景炎»; 乙未 = 1276-06-14 (hesap)" }
{ t:"1279-03-19", kesinlik:"gun", b:"Yamen deniz savaşı: Lu Xiufu çocuk imparator Zhao Bing ile denize atladı — Song hanedanı sona erdi", tur:"son", yer_id:"Yamen (Guangdong)", kaynak:"Song shi juan 47: 祥興二年二月癸未 «陸秀夫 … 負昺投海中» (癸未 = 1279-03-19, hesap) · Yuan shi 10: 至元十六年正月甲戌 «廣王昺 … 赴海死» (ay/gün farkı, ic_not'ta iki kaynak)" }
```
Dikkat: Yamen/Yingtianfu için yer_id'ler `data/sehirler.js`'te var mı doğrulanmadı (grep yalnız yerlesimler'de adı aradı; "Yamen"/"Yingtianfu" bulunamadı). Yoksa maddeyi haritaya bağlayan en yakın yerleşim: Guangzhou (Kanton) / Yingtianfu için Shangqiu — **eksik yerleşim** (yeni yerleşim önerisi, mükerrer tarama gerekir).

## d) Harita uyumu
Ölçer: kırılma 39, **AÇIK 1**: `1000-01-01 kazanç Chenzhou (Hunan), Ganzhou, Shaoxing, Wuchang (Wuhan)` — bu bir ufuk işaretidir: `yerlesimler_asya.js` satırlarında `f:"1000-01-01" … "UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor)"`; ölçer sahiplik değişimi sayıyor, iki parça (960→1000 / 1000→1127) aynı sahip (song). ÖNERİ: Değişmez 2 ölçütü ufuk kaydını ihlal saymasın ya da dönemleri birleştir (`f:0960-02-04→1127...` tek parça). Bu gerçek bir toprak değişimi değildir.
Yerleşim sayısı yetersiz: Song'un 23 yerleşimi (Kaifeng, Luoyang, Chang'an, Hangzhou, Kanton, Fuzhou, Çengdu, Chongqing, Changsha, Nanjing, Wuchang, Xiangyang, Shaoxing, Ganzhou, Chenzhou…). `yerlesimler*.js` ilk satır taramasında şu şehirlerin `d:[]` (sahip dönemi boş) göründüğü: Suzhou, Taiyuan, Ningbo, Guilin, Jingzhou, Lanzhou, Jinan (Taiyuan 979-1126 Song, Jinan, Suzhou, Ningbo Song'un önemli şehirleri) — grep ilk satırla ölçüldü; çok satırlı `d:[` olanlar (Yangzhou, Nanchang, Zeytun) ayrıca doğrulanmadı. ÖNERİ: Song `s:` dönemi gereken şehirler: Taiyuan (979→1126-09-21, Jin'e), Suzhou, Ningbo, Jingzhou (Hubei), Guilin, Lanzhou/Xining (Tsongkha/Song 1104), Jinan (→1129 Jin), Yangzhou (→1276), Nanchang, Quanzhou (Zeytun), Taizhou — her birine Song shi Dili zhi (juan 85-90) kaynaklı `f/t`. Petek motoru: noktası olmayan bölge en yakın peteğe emilir ⇒ Güney Song'un doğu kıyısı şu an Jin/Dali/Wuyue peteklerine emiliyor olabilir (ölçülmedi: harita çıktısı bu makinede yok).
1125 en geniş an (22 yerleşim): Kaifeng, Luoyang, Chang'an (Song, Kuzey), Nanking vb. Güney Song'da 14'e düşüş: Kuzey şehirleri doğru şekilde Jin'e geçiyor (1126-01-04 Pekin, 1126-09-21 Taiyuan, 1126-11-16 Luoyang, 1129-11-14 Chang'an). Not: 1139-04-16→1140 Song'a iade (Jin'in Henan/Shaanxi'yi iadesi) var (`kronoloji_sinir_once1281_geriye.js:214`) — Song shi 29 «得東西南三京» — doğru, ikinci kaynak Jinshi 4 (atlas kaynağında).
Büyük şehir sahipliği uyumu: bilinen sınırın dışında Song'un gibi görünen yer: ölçülmedi (yerleşim listesi 23, hepsi Song çekirdeği içinde: Kanton–Chongqing–Kaifeng dörtgeni; Yinchuan/Xining Song dışında). Xining 1104-05-08→1131 Song (TDV değil; *Song shi* 87) — DOĞRU.

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js` `song`: `f:"0960-01-01"` → `"0960-02-04"`; `kronoloji`: `{t:"0960-01-01"…}` → `0960-02-04`; `{t:"1127-01-01" Hangzhou}` → metni "Jin Kaifeng'i aldı (1127-01-09); Gaozong 1127-06-12'de tahta çıktı; Hangzhou 1129'da" ile değiştir ya da böl; `{t:"1234-01-01" odak_yer Kaifeng}` → Caizhou/1234-02-09; `{t:"1279-03-19" odak_yer Kaifeng}` → `odak_yer:["Hangzhou"]` (Yamen yok) — odak yeri `odak_olc.py` ölçsün.
2. Yeni olaylar: c bölümündeki 6 madde satırı `data/olaylar_ortacag_cin.js` sonuna (Song shi gün + hesap beyanı).
3. Yamen: iki kaynak gün farkı (癸未 vs 甲戌) `ic_not_t` ile beyan.
4. `yerlesimler_asya.js` ufuk parçaları `f:"1000-01-01"` — ölçer 1000-01-01 açığını gidermek için ya birleştir ya `denetle`/`top100_olc` ufuk işaretini (`UFUK SINIR İŞARETİDİR`) muaf say.
5. Song'un d:[] boş şehirlerine `s:` ekle (d bölümü listesi; Dili zhi ile, mükerrer taraması + 3 km).

## Erişilemeyen kaynaklar
- *Cambridge History of China* vol.5 part 1 (Smith & Twitchett, eds.) «The Sung Dynasty» — f 960 günü; Güney Song başkenti 1138 (stable URL yok; soru: "Taizu hangi gün tahta çıktı (Gregoryen/Jülyen)").
- *Xin Wudai shi* juan 12 — zh.wikisource sayfası 404 (URL aranacak): 顯德七年 Chenqiao günü.
- *Song shi* juan 28-29 (高宗五/六, 紹興八年) — Lin'an'ın başkent ilanı; zh.wikisource.org/wiki/宋史/卷028 — çekilemedi.
- *Yuan shi* juan 10'daki 甲戌 ve Song shi 癸未 farkı: hangi takvim/hangi gün? (*Yuan shi*; NAOJ tabloları) — Çin ay-güneş takvimi çevrilmedi.
- Britannica 403; Treccani «Sung» çekilemedi (ana sayfaya yönlendirdi).
