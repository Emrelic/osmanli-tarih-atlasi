# 05 · Han Hanedanı (Batı Han, Xin arası, Doğu Han) — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-03 (salt okuma; veri dosyasına yazılmadı)

## Özet
- Künye: 6 ilgili kayıt — `bati-han`, `xin` + `xin-hanedani` (MÜKERRER), `gengshi`, `chimei-jianshi`, `dogu-han`. Komşu/devam: `shu-han`, `cao-wei` (Han'ın ardılı Üç Krallık; Han değil).
- Ölçer AÇIK kırılma: 0 (bati-han 4 kırılma, xin-hanedani 2, dogu-han 7, shu-han 2 — hepsi ±30 günde alâkalı madde buldu).
- Eksik madde: 6 (olaylar*/kronoloji_sinir*'de olmayan, yalnız künye-gömülü kronolojide bulunan kuruluş/çöküş günleri; Üç Krallık ucu).
- En ağır 3 bulgu: (1) **Han haritada neredeyse yok**: Batı Han en geniş an 3 yerleşim (Chang'an, Zhangye, Dunhuang), Doğu Han 4, Xin 1; Luoyang MÖ 220→MS 23 ve Çengdu MÖ 220→MS 25 / 36→221 **sahipsiz**; (2) `xin` ile `xin-hanedani` aynı devletin iki künyesi (f 0009-01-15/0009-01-10, t 0023-01-01/0023-10-06), `xin`'in yerleşimi 0 ve BOYALAR'da iki ayrı renk (arac/renkler.py:439-440) — hayalet künye; (3) `shu-han` t=0263-01-01 yanlış: Sanguozhi 4 Liu Shan'ın teslimini 263'ün **11. ayına** koyuyor (yaklaşık 10 ay erken).

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| bati-han | Batı Han | -0205-01-01 (MÖ 206) | 0009-01-10 | OK; 3 yerleşim (en geniş an -101: 3) |
| xin-hanedani | Xin (Wang Mang) | 0009-01-10 | 0023-10-06 | OK; 1 yerleşim (Xi'an) |
| xin | Xin (Wang Mang) — MÜKERRER | 0009-01-15 | 0023-01-01 | **mükerrer, 0 yerleşim**; t=0023-01-01 ayrıca Hanshu 99 ile çelişir (Wang Mang 23-10-06) |
| gengshi | Gengshi (Liu Xuan) | 0023-01-01 | 0025-11-05 | OK (Xi'an 0023-10-06→0025-01-01, Luoyang 0023-01-01→0025-11-05) |
| chimei-jianshi | Chimei (Jianshi) | 0025-01-01 | 0027-01-01 | OK (Xi'an 25→27) |
| dogu-han | Doğu Han | 0025-08-05 | 0220-12-10 | OK; 4 yerleşim (en geniş an 196: 4) |
| (komşu) shu-han / cao-wei | Üç Krallık | 0221 / 0220-12-10 | 0263 / 0266-02-08 | Han değil; shu-han t hatalı (b) |
Eksik parçalar: (i) 23–36 arası yerel hükümdarlar (Wei Xiao/Longyou, Dou Rong/Hexi, Peng Chong/Yuyang, Zhang Bu/Qi, Lu Fang/Shuofang) yok; yalnız `chengjia-gongsun-shu` (0025–0036) var — kritik değil, Han yeniden birleşmesinin evresi. (ii) Batı Han öncesi Chu-Han savaşı (Batı Chu) başka künyenin işi.

## b) f/t ve evreler
Not: Çin birincil tarihleri (Hanshu, Hou Hanshu, Sanguozhi, Yuan shi) bu denetimde zh.wikisource'tan okundu; gün çevirisi (ganzhi→Jülyen) arac/cin_gun.py takvim verisi (D:/kaynak-derlem) bu makinede yok; yerine bağımsız bir JDN formülüyle hesaplandı ve 3 çapa (戊辰=0009-01-10, 庚戌=0023-10-06, 己未=0025-08-05) künyelerle bire bir tuttu. 2. bağımsız akademik kaynak (Britannica 'Han dynasty', Cambridge History of China vol.1) HTTP 403/erişilemedi → "çekilemedi".
| uç | atlas | kaynak 1 | kaynak 2 | hüküm | önerilen |
|---|---|---|---|---|---|
| bati-han f -0205-01-01 | MÖ 206 yıl | Hanshu 1上 (zh.wikisource 漢書/卷001上): «二月，羽自立為西楚霸王…更立沛公為漢王，王巴、蜀、漢中» | künyedeki Britannica 'Han dynasty' dayanak olamaz (tek, erişilemedi) | yıl doğru (Han Kralı, MÖ 206 = -0205); imparatorluk unvanı MÖ 202 = -0201 (s: başlangıcı -0201 ile tutarlı); 2. ay→gün çevrilemedi (Qin/Han 10. ay yıl başı) | f korunur; `ic_not_f`: "f = Han Kralı (Hanshu 1上); imparator unvanı MÖ 202 (-0201), s: o yıldan"; ikinci akademik kaynak aranmalı |
| bati-han t 0009-01-10 | gün | Hanshu 99中 «戊辰，莽至高廟拜受金匱神嬗» → 戊辰 = 0009-01-10 (hesapla) | Hanshu 99: 以十二月朔癸酉為建國元年正月之朔 → 癸酉 = 0009-01-15 (`xin` künyesinin f'si bu) | iki gün ayrı olay: 01-10 tahta oturuş/mandat, 01-15 "Jianguo 1/1/1"; künye 01-10 ile tutarlı, bitişik xin-hanedani f=01-10 | korunur |
| xin-hanedani f/t | 0009-01-10 / 0023-10-06 | Hanshu 99上-下 (戊辰; 庚戌=0023-10-06 hesap) | Hou Hanshu 11 «九月…公賓就斬王莽於漸臺» (Han takviminde 9. ay = Xin'in 10. ayı) | çift teyit (iki birincil metin) | korunur |
| xin f 0009-01-15 / t 0023-01-01 | mükerrer | f: 癸酉 (b yukarı) | t=0023-01-01: kaynak yok; Hanshu 23-10-06 | **yanlış t + mükerrer** | **`xin` künyesini sil** (s: yok; BOYALAR'dan da `xin`i çıkar) — yalnız bir yerde başvuru var: data/kronoloji_cok_ms1_1000_asya.js:11, data/sehir_tarihce_k12.js / k3 `d:"xin"` satırları (evren dışı) → bunları `xin-hanedani`ne çevir |
| gengshi f 0023-01-01 | yıl | Hou Hanshu 11 «二月辛巳…即帝位…更始元年» (zh.wikisource 後漢書/卷11) | künye `ic_not`: ay eşlemesi Xin takvimi yüzünden belirsiz; 辛巳=0023-03-11 yalnız aday | yıl-düzeyi doğru | f korunur (`0023-01-01`) — gün çevrilemedi, kasa Academia Sinica tablosuyla kapatsın |
| gengshi t 0025-11-05 | gün | Hou Hanshu 1上 «辛卯，朱鮪舉城降» (9. ay) → 辛卯=0025-11-05 hesap tutuyor | Hou Hanshu 11 «十月…肉袒詣長樂宮，上璽綬於盆子» | Luoyang ucu için tutarlı; Liu Xuan'ın Chang'an'daki teslimi 10. ay (≈ Kasım-Aralık 25) | korunur |
| dogu-han f 0025-08-05 | gün | Hou Hanshu 1上 «六月己未，即皇帝位» → 己未=0025-08-05 (hesap) | Hou Hanshu 1上 Luoyang'a giriş «冬十月癸丑» → 0025-11-27 (hesap tutuyor); yerlesimler Luoyang f 0025-11-05 ile tutarlı | çift teyit (tek kaynak ailesi) | korunur; başkent (Hao, 25-08) → Luoyang farkı için `ic_not`: Luoyang'a giriş 25-11-27, Zhu Wei teslimi 25-11-05 |
| dogu-han t 0220-12-10 | gün | Sanguozhi 2: 庚午 «王升壇即阼» = 0220-12-10 (Cao Pi'nin sunakta tahta çıkışı) | Hou Hanshu 9: «冬十月乙卯，皇帝遜位» → 乙卯 = **0220-11-25** (hesap) | iki farklı gün: künye `kaynak` alıntısı 乙卯'yu veriyor ama t=12-10 (=庚午). Wei f ile bitişik olmak için 12-10 savunulabilir | t korunur; `kaynak`ı düzelt: "Hou Hanshu 9 (feragat fermanı 乙卯=0220-11-25) + Sanguozhi 2 (庚午=220-12-10 tahta çıkış)" ve çelişkiyi `ic_not_t`'de iki tarihle beyan et |
| (komşu) shu-han t 0263-01-01 | yıl | Sanguozhi 33 (三國志/卷33): «冬，鄧艾破衛將軍諸葛瞻於綿竹…降於艾» (kış) | Sanguozhi 4 (卷04) Chenliu Wang: «十一月…是月，蜀主劉禪詣艾降» → 263'ün 11. ayı | **yıl başı yanlış ~10 ay erken**: Çengdu/Shu 0263-01-01'de Wei'ye geçiyor | t = 0263-11-01 (ay hassasiyeti; 11. ay ≈ Aralık 263; gün için cin_gun) + `cao-wei` "Wei, Shu'yu fetheder" maddesini 0263-01-01'den taşı |
| (komşu) shu-han f 0221-01-01 | yıl | Sanguozhi 33 künye alıntısı «惟章武元年五月辛巳» | — | ay+ganzhi var; 辛巳 5. ayda → 0221-06-19 aday (Jülyen, hesap; 4. ay adayı 04-20) | f = 0221-06-19 yalnız Academia Sinica ile doğrulanırsa; aksi hâlde `0221-01-01` + "yıl teyitli" |

## c) Kronoloji
Evren (olaylar*/kronoloji_sinir*) içinde var: Batı Han için `kronoloji_sinir_asya_zincir_1024.js:24-38` (MÖ 206/205 Chu-Han kırılmaları), :43 (-0110 Nanyue), :41, :39; Wang Mang 0009-01-10 (:47), 0023-10-06 (:48); Doğu Han Liaodong 0189 (:51), Wei 0238 (:53). Künye-gömülü (olaylar*/sinir* dışında): bati-han (devletler.js:20323-20331: MÖ 206 kuruluş, -0201 Gaozu, Wudi, Qing-Huo, Nanyue, Wiman, Batı Bölgeleri, 0006 Wang Mang naip); xin (20333-20337); dogu-han (20339-20352).
Önerilen eksik maddeler (hepsi Hanshu/Hou Hanshu birincil metin; ikinci akademik kaynak TODO):
1. `{ t:"-0205-01-01", kesinlik:"yil", b:"Xiang Yu Liu Bang'ı Han Kralı yaptı (Ba, Shu, Hanzhong); Han'ın kuruluşu (MÖ 206)", odak_yer:["Çengdu (Chengdu)"], kaynak:"Hanshu 1上 (漢書/卷001上): «更立沛公為漢王，王巴、蜀、漢中四十一縣，都南鄭»" }`
2. `{ t:"-0201-01-01", kesinlik:"yil", b:"Liu Bang Han imparatoru (Gaozu) oldu; Chang'an kalıcı başkent", odak_yer:["Xi'an (Chang'an)"], kaynak:"Hanshu 1下 (okunacak: 五年二月甲午 汜水)" }` — künye-gömülü tarih -0201 ile uyumlu; Hanshu 1下 bu turda okunamadı.
3. `{ t:"0025-08-05", b:"Guangwudi Hao'da Han'ı yeniden kurdu (Doğu Han)", odak_yer:["Luoyang"], kaynak:"Hou Hanshu 1上 «六月己未，即皇帝位» (己未=0025-08-05 hesap)" }`
4. `{ t:"0025-11-05", b:"Gengshi komutanı Zhu Wei Luoyang'ı Guangwu'ya teslim etti", odak_yer:["Luoyang"], kaynak:"Hou Hanshu 1上 «辛卯，朱鮪舉城降» (建武元年九月; 辛卯=0025-11-05)" }` — Luoyang s: bu günden başlıyor; Değişmez 2 evreninde madde yok.
5. `{ t:"0030-05-28", b:"Guangwudi Chang'an'a geldi; Han Chang'an'ı yeniden aldı", odak_yer:["Xi'an (Chang'an)"], kaynak:"Hou Hanshu 1下 «夏四月丙子，幸長安» (丙子=0030-05-28)" }`
6. `{ t:"0263-11-01", kesinlik:"ay", b:"Liu Shan Deng Ai'ye teslim oldu; Shu Han sona erdi", odak_yer:["Çengdu (Chengdu)"], kaynak:"Sanguozhi 4 «十一月…蜀主劉禪詣艾降»" }` ve cao-wei'deki 0263-01-01 "Wei, Shu'yu fetheder" maddesini aynı güne taşı.

## d) Harita uyumu
Ölçer AÇIK: 0 (Batı Han 4 kırılma, Xin 2, Doğu Han 7).
Yerleşim sahipliği:
- Batı Han: en geniş yıl -101 → 3 yerleşim: Xi'an (-0201→0009-01-10), Zhangye (-0120→0009-01-10), Dunhuang (-0110→0009-01-10). Han'ın en az 100 komutanlığı / 1.500 ilçesi var; harita Han'ı görünür kılmıyor.
- Xin: yalnız Xi'an. Doğu Han: Luoyang (0025-11-05→0220), Xi'an (0030-05-28→0220), Changsha (0025-08-05→0215), +1. Gengshi: Xi'an, Luoyang.
- **Delikler (yerlesimler_asya.js, kendi ölçümüm; denetle Değişmez 1 ile teyit et)**: Luoyang -0220→0023 BOŞLUK (Han'ın ikinci başkenti/Henan komutanlığı; Batı Han süresince Han olmalı); Çengdu -0220→0025 BOŞLUK ve 0036→0221 BOŞLUK (Shu komutanlığı Han toprağı; 36'da Doğu Han Gongsun Shu'yu yendi); Xi'an -0206→-0201 BOŞLUK (Chu-Han geçişi, beyanlı olabilir); Xi'an 0027→0030-05-28 BOŞLUK (Chimei çekilişi sonrası Chang'an'ın sahibi belirsiz; Hou Hanshu 1上-下 okunacak); Zhangye/Dunhuang 0009-01-10→0397 BOŞLUK (Wei Xiao, Dou Rong Hexi'si; Doğu Han'ın Hexi hâkimiyeti 36'dan sonra: Dunhuang/Zhangye `dogu-han` 0036?→0220 eksik — Hou Hanshu 'Dou Rong' okunacak).
- Öneri (kaynakla birlikte kasa doldursun): Luoyang `bati-han` -0201-01-01→0009-01-10 (Hanshu 28 «Dili zhi» Henan komutanlığı — OKUNMADI: çekilemedi); Çengdu `bati-han` -0205-01-01→0009-01-10 ve `dogu-han` 0036-01-01→0220-12-10 (Hou Hanshu 13 «Gongsun Shu» 36'da ele geçirilme); Zhangye/Dunhuang `dogu-han` ~0036→0220 (kesinlik onyıl, beyanlı yaklaşıklık).
- Sınır dışı tuhaflık yok (Han dışına taşan yerleşim tespit edilmedi; ölçüm 4 yerleşim üzerinden anlamlı değil).

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js:20332` `xin` künyesini sil; `arac/renkler.py:439` `"xin"` girdisini kaldır (tuz dosyası — Emre'nin onayı); `data/kronoloji_cok_ms1_1000_asya.js:11`, `data/sehir_tarihce_k12.js`, `k3`'teki `d:"xin"` → `xin-hanedani`.
2. `data/devletler.js:20338` dogu-han `kaynak`/`ic_not_t`: 乙卯=0220-11-25 / 庚午=0220-12-10 beyanı.
3. `data/devletler.js` (shu-han, ~20355) t `0263-01-01` → `0263-11-01`; `cao-wei` maddesi `t:"0263-01-01"` (devletler.js içindeki "Wei, Shu Han'ı fetheder") aynı güne; Çengdu s: `shu-han` t'sini `0263-11-01`'e çek, `cao-wei` f `0263-11-01`.
4. `data/olaylar_…` yeni dosya/ek: c bölümündeki 1-6 maddeler.
5. Han yerleşim doldurma: d bölümündeki Luoyang/Çengdu/Zhangye/Dunhuang kayıtları (Han'ın yerleşim sayısı 3-4'ten ancak buradan artar; asıl çözüm Çin komutanlık listesi (Hanshu 28 / Hou Hanshu 'Junguo zhi') ile toplu yerleşim girişi).

## Erişilemeyen kaynaklar
- Britannica 'Han dynasty', 'Wang Mang', 'Guangwudi' (HTTP 403) — çekilemedi; Cambridge History of China vol. 1 (Twitchett–Loewe), Loewe/Bielenstein "Restoration of the Han Dynasty" (BMFEA 26, 1954) için erişim yok; Hanshu 1下, 28上-下, Hou Hanshu 13, Sanguozhi 2 okunamadı (arama özetiyle sınırlı). Iranica/JSTOR erişimi yok.
- arac/cin_gun.py tablosu (D:/kaynak-derlem/cin-takvim/src/calendarData.js) bu makinede yok; ganzhi→Jülyen çevirileri bağımsız JDN formülüyle hesaplandı (üç künye çapasıyla doğrulandı) — KASA kendi takvim tablosuyla çaprazlasın.
