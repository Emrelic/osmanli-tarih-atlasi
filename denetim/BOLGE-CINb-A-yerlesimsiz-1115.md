# BOLGE-CINb / A — Yerleşimsiz künye + 1368-04-01 uçları (15 Kasım 2026, UMIT, ikinci dalga)

Dal: `umit-1115b-cin` (origin/main 8fb10bdf1 tabanı). `data/yerlesimler.js` DOKUNULMADI.

## A1. Yazılan yerleşim
| Yerleşim | Künye | Pencere | Kaynak | Dosya |
|---|---|---|---|---|
| Weihaiwei (37,513 K / 122,120 D) | `weihaiwei-ingiliz` (yeni, bkz. B belgesi) | 1898-07-01 → 1930-10-01 (enklav:true), sonra cin-cumhuriyeti → 1949-10-01 → cin-halk-cumhuriyeti | zh.wikisource 訂租威海衛專條 (1898-07-01, okundu); Hansard 5 Mayıs 1930 (okundu) | `data/yerlesimler_cin_1115b.js` (yeni; index.html + girdi_listesi.py'ye bağlandı) |
Mükerrer taraması: ad + 3 km temiz (en yakın Yantai, 59,6 km). Madde: `data/kronoloji_sinir_cin_1115b.js` (1898-07-01 ve 1930-10-01; Değişmez 2 evreni).
Sapma beyanı: brif «yeni dosya GIRDI_DOSYALARI'na girmek zorundaysa mevcut ek dosyaya ekle» diyordu; `arac/girdi_listesi.py` başlığına göre liste VERİDİR ve tuzu değiştirmez (son iki parti — zincir64, sahne1108 — aynı yolla girdi). Bu yüzden yeni dosya + liste satırı seçildi; girdi.py/uret_petek.py'ye dokunulmadı. KASA farklı karar verirse tek satır geri alınır.

## A2. Guge / Tholing / Tsaparang / Purang — YAZILMADI (bulunamadı)
- Guge künyesi (f 1000-01-01, t 1630-01-01; kaynak alanı Vikipedi kökenli) hâlâ yerleşimsiz; `Tholing (Toding)` kaydı `s:[]`.
- Bu turda okunabilen yalnız Vikipedi türevi sayfalar ve turizm bloglarıydı (kullanılamaz). Vitali (*The Kingdoms of Gu.ge Pu.hrang*, 1996) ve Petech (*The Kingdom of Ladakh*, 1977) ERİŞİLEMEDİ → OKUNMADI.
- Kaynak ihtilafı görüldü (arama özeti, sayılmadı): Guge'nin kuruluşu 910/912 (Nyimagon) ile 967 (Yeshe-Ö) arasında ayrışıyor; 1630 Ladakh fethi ve 1679-80 Ganden Phodrang fethi anılıyor. Gün hassasiyeti hiçbirinde yok. `f`/`t` yıl hassasiyetli yazılacaksa yalnız hakemli kaynakla (Vitali/Petech) yapılmalı.
- Tsaparang ve Purang yerleşimleri açılmadı (koordinat için kaynak okunmadı; tarih uydurma yok).

## A3. 1368-04-01 uçları — Ming shi'den gerçek günler (YERLESIMLER.JS DIŞI, kuyruk)
Metin: zh.wikisource Ming shi j.2/3/125/129 (WebFetch ile okundu; gün adı Meeus ay başlangıçları + ganzhi→JDN ile çevrildi; sınama: 洪武1 正月乙亥=1368-01-23, 永樂22 七月辛卯=1424-08-12, 萬曆47 三月甲申=1619-04-14). Yöntem ve doğrulama `data/kronoloji_cin_ming_1115b.js` başlığında.
| Yerleşim | Atlas Yuan→Ming ucu | Ming shi'ye göre | Not |
|---|---|---|---|
| Taiyuan | (kontrol edilmedi) | 1369-01-09 (洪武1/12 丁卯: «徐達克太原…山西平») | Madde yazıldı |
| Xi'an | 1368-04-01 | 1369-04-12 varış (洪武2/3 庚子 «徐達至奉元，張思道遁»); 1369-05-27 Yu Prensi bozgunu (4. ay 乙酉) | atlas ucu ≈ 1 yıl ERKEN; ayrıca Xu Da biyografisi (j.125): «遂克奉元» gün vermez |
| Qingyang | — | 1369-09-22 (洪武2/8 癸未) | madde yazıldı |
| Kaiping/Shangdu | — | 1369-07-20 (洪武2/6 己卯) | madde yazıldı |
| Lanzhou | 1368-04-01 | Ming'e geçiş günü OKUNMADI: j.125 «分兵克蘭州» gün vermez (洪武2); j.2'de 洪武2/12'de Kuokuo Temür'ün Lanzhou'ya saldırısı anılır → 1369 sonunda Ming elinde | Gün BULUNAMADI |
| Yan'an | 1368-04-01 | Xu Da biyografisinde adı geçmez; j.129 Fu Youde: «九年破擒伯顏帖木兒于延安» (1376) → Yan'an'ın 1368'de Ming olduğu şüpheli | sahibi araştırılmalı |
| Zhangye/Gansu, Dunhuang, Yinchuan, Xining | 1368-04-01 | Feng Sheng'in 1372 seferi (j.129): Lanzhou → «至甘肅，元將上都驢迎降» → «至亦集乃路…降» → Fu Youde «至瓜沙州»; Gansu/Guazhou-Shazhou için GÜN okunmadı; Xining ve Yinchuan metinde YOK | atlas 1368 ucu kaynaksız; 1372 (yıl) en yakın kaynaklı değer, gün bulunamadı |
| Kaifeng 1368-04-16, Luoyang/Zhengzhou 1368-04-25, Tongguan 1368-05-13 | — | birinci dalga (BOLGE-cin-2b, Ming shi j.2) bulmuştu | bu dalda yeniden okunmadı |
Uygulama önerisi (yerlesimler.js sahibi): Xi'an ucu → 1369-04-12 (+ `kaynak:`); araya kalan 1368-04-01..1369-04-12 için Yuan/Kuzey Yuan beyanı; Lanzhou/Yan'an/Zhangye/Dunhuang/Xining/Yinchuan için önce gün kaynağı.

## A4. Ming kronolojisindeki mevcut maddelere düzeltme önerileri (ortak dosyaya dokunulmadı)
| Mevcut madde (kronoloji_cin.js) | Mevcut t | Ming shi'ye göre | Not |
|---|---|---|---|
| Hu Weiyong davası | 1380-01-01 (yıl) | 洪武13/1 戊戌 = 1380-02-12 («胡惟庸謀反…伏誅», j.2) | gün + tür düzeltmesi |
| Altan Han Pekin'i kuşattı | 1550-08-01 | Gubeikou'nun yarılması 1550-09-26 (嘉靖29/8 丁丑); kuşatma günleri OKUNMADI | mevcut gün Ming shi ile uyuşmuyor |
| Wanli tahta çıkış | 1572-07-05 | 1572-07-19 (birinci dalga zaten düzeltti) | — |
| Yasak Şehir/başkent | 1420-01-01 | 1421-02-02 ilk Pekin yeni yıl töreni (本紀 j.7); taşınma kararı 永樂18 9./11. ay girişleri okunmadı | — |
