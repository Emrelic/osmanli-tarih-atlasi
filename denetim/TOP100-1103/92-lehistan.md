# 92 · Lehistan-Litvanya Birliği — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-04 (ölçer: top100_olc.py + kr_ara.py + yerleşim zincir betikleri; hepsi salt okur)

## Özet
- Künye: ana künye `lehistan` (1) + komşu/öncül künyeler `polonya-erken` (→1569-07-01), `litvanya-buyuk-dukalik` (→1569-07-01), `kraliyet-prusyasi` (1466-10-19→1772-09-13; ölçülmedi). 62 yerleşim kaydı lehistan'a ait; en geniş an 1613 (59 yerleşim).
- Kırılma 23; ±30 günde alâkalı madde olmayan AÇIK 6 (+ yalnız otomatik "dönem ucu" maddesiyle kapanan 0). Eksik kronoloji maddesi: 6 öneri (aşağıda c).
- En ağır 3 bulgu: (1) **Polotsk 1569-1579 haritada Lehistan'dır ama 1563-1579 arası Moskova elindeydi** (evrende "1579-01-01 Polotsk'u geri aldı" maddesi var, s: dönemi onu yansıtmıyor — hata adayı, kaynak çekilemedi, bkz. d/#1); (2) 17.-18. yy günlerinin bir kısmı Jülyen/Gregoryen karışık; Lehistan kendi günleri Gregoryen (1582 sonrası) ve temiz görünüyor, ama Livonya kayıpları (Riga 1621-09-15) İsveç Jülyen gününü taşıyor (bkz. 93 ve d/#2); (3) `kaynak:"polonya"` künye alanı yalnız TDV slug'ı — sayfa/cümle/URL yok (Kaynak kuralı eksiği).
- 1923-10-29 ufuk izi: Lehistan için YOK (bu künyede 1923 kırılması yok).
- MÜKERRER: (a) `kraliyet-prusyasi` (1466-1772) ile `lehistan` (1569-1795) 1569-1772'de aynı toprakta çakışan künye (Gdańsk/Toruń 1793'e dek Lehistan'da kalıyor, kraliyet-prusyasi t=1772-09-13 → "Gdańsk hariç, 1793" notu var, Toruń eksik) — ölçülmedi, KASA'ya bırakıldı; (b) `olaylar_ek16.js:328` ile `:746` aynı gün (1617-02-27) iki Stolbovo maddesi (bkz. 93).

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| lehistan | Lehistan-Litvanya Birliği | 1569-07-01 | 1795-10-24 | ana künye; harita:"lehistan"; kaynak:"polonya" (yalnız TDV slug'ı) |
| polonya-erken | Polonya Krallığı (Birlik Öncesi) | 0966-01-01 | 1569-07-01 | öncül; Lublin'de t=lehistan.f ✓ (boşluk yok) |
| litvanya-buyuk-dukalik | Litvanya Büyük Dükalığı | 1236-01-01 | 1569-07-01 | öncül; Lublin'de t=f ✓ |
| kraliyet-prusyasi | Kraliyet (Polonya) Prusyası | 1466-10-19 | 1772-09-13 | alt-bölge künyesi; lehistan ile çakışır; ölçülmedi |
| (kongre-polonyasi 1815-06-09…) | ardıl | | | kapsam dışı |
Eksik evre/parça: yok. Kurland Dükalığı (Lehistan vasalı; Jelgava `kurland-dukaligi` 1561-11-28→1795-03-28) ayrı künye olarak var ✓; Prusya Dükalığı (Königsberg `prusya-dukaligi` 1525-04-08→1701-01-18) ✓ — vasallar Lehistan'a boyanmaz, doğru.

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm | önerilen satır |
|---|---|---|---|---|---|
| f | 1569-07-01 | dzieje.pl (Polish History portal) https://dzieje.pl/node/105745 — «Unia Lubelska została powołana na Sejmie walnym w Lublinie 1 lipca 1569 r.» (OKUNDU) | Rzeszów Üniv. dergisi (journals.ur.edu.pl/tematyikonteksty/article/download/284/259/528) — arama özeti: akt 1 Temmuz, kral imzası 4 Temmuz; PDF sıkıştırılmış, metin ÇEKİLEMEDİ | 1 Temmuz = akt/yemin günü doğrulandı (tek okunan kaynak + özet); 4 Temmuz = kralın onayı (ikincil çelişki değil, ayrı olay) | `f:"1569-07-01"` kalır; ic_not: "akt 1 Tem 1569; kral onayı 4 Tem 1569; Sejm'in kapanışı 12 Ağustos". Kaynak 2'nin gerçek okunması KASA'da |
| t | 1795-10-24 | zpe.gov.pl (MEN eğitim platformu) https://zpe.gov.pl/watek/LPALNC5V6X/0/a/unicestwienie-rzeczypospolitej-obojga-narodow/D4U3LSXGN — "24 October 1795, signed … in St. Petersburg" (OKUNDU) | dzieje.pl/node/13423 — Stanisław August'un feragatı 25 Kasım 1795 (OKUNDU) | 24 Ekim = III. Taksim antlaşması; devletin hukuken sonu için 25 Kasım feragat de savunulur. Atlas antlaşma gününü seçmiş; tutarlı | `t:"1795-10-24"` kalır + ic_not "25 Kasım 1795 Grodno'da kral feragat etti (zpe.gov.pl, dzieje.pl); konvansiyon 26 Ocak 1797" |
Evre sınırları: Lehistan tek evre (seçimli krallık); künyede evre yok, gerek de yok. 1654-1667 (Rus işgali) ve 1655-1660 (Tufan) için ayrı evre gerekmez; harita zaten yerleşim bazında bunu taşıyor (1657:42 yerleşim sayısı düşüşü Smolensk/Kiev/Çernigov kaybı ile uyumlu).
Hicri/takvim: Lehistan 1582'de Gregoryene geçti; 1569-1582 günleri kaynaktaki gibi (Jülyen) kalır. 1582 sonrası Lehistan günleri (1611-06-13 Smolensk, 1618-12-11 Deulino, 1699-01-26 Karlofça) Gregoryen ✓. Rus kaynaklı Pereyaslav 1654-01-18 ve Andrusovo 1667-02-09 atlasta zaten Jülyen→Gregoryen çevrilmiş (olaylar_ek16.js:344,360 ic_not_takvim) ✓.

## c) Kronoloji
Evrende (Değişmez 2) VAR:
- 1569-07-01 Lublin Birliği — olaylar_2s_0918.js:61 (yer_id Bar (Podolya)); ikinci "Haliç: polonya → lehistan" otomatik madde.
- 1561-11-28 Vilnius Antlaşması — olaylar_ek16.js:270; 1582-01-15 Yam Zapolski — olaylar_2s_0919.js:151; 1581-01-01 Riga Lehistan'a bağlandı (yalnız yıl) — olaylar_ek16.js:540.
- 1611-06-13 Smolensk — olaylar_ek16.js:320; 1618-12-11 Deulino — :336; 1649-08-18 Zboriv — kronoloji_sinir_lehistan_ukrayna_1028.js:56; 1654-01-18 Pereyaslav — olaylar_ek16.js:344; 1654-10-03 Smolensk geri — :352; 1667-02-09 Andrusovo — olaylar_ek16.js:360 + kronoloji_sinir_lehistan_ukrayna_1028.js:57; 1672-08-27 Kamaniçe — olaylar_ek5.js:261; 1672-10-18 Bucaş — olaylar.js:116; 1674-08-03 Uman — olaylar_ek5.js:262; 1683-09-12 II. Viyana — olaylar.js:118; 1684-08-24 Yazlofça — olaylar_ki117.js:7; 1686-05-16 Ebedî Barış — kronoloji_sinir_avrupa_orta.js:29; 1699-01-26 Karlofça — kronoloji_sinir_lehistan_ukrayna_1028.js:55; 1699-09-22 Kamaniçe teslimi — olaylar_ki117.js:72; 1772-08-05 / 1793-01-23 / 1795-10-24 Taksimler — kronoloji_sinir_lehistan_ukrayna_1028.js:59,61,62; 1773-09-30 ve 1797-01-26 maddeleri de var (dosya satırı ölçülmedi).
Künye içi `kronoloji:[]` (evren DIŞI, devletler.js:820-830): 1569-07-01, 1573-05-16, 1620-09-01 Hotin/Ţuţora, 1655-07-21 (İsveç, kaynaklı), 1672-10-18, 1683-09-12, 1699-01-26, 1764-09-07, 1772-08-05, … — "var, evren dışı".
Düzeltme/uyarı: künye kronolojisinde "1573-05-16 Henrician Articles kabul edildi, ilk seçimli kral Valois Henri tahta çıktı" — 16 Mayıs 1573 seçimin ilanı; Henri'nin taç giymesi 21 Şubat 1574 (kaynak çekilemedi; PSB/ipsb.pl'den doğrulanmalı). "tahta çıktı" ifadesi seçim için de kullanılabilir; öneri: "seçildi".
EKSİK maddeler (kaynak çekilemedi olanlar işaretli; kaynak okunmadan yazılmasın):
1. `{ t:"1795-11-25", b:"Stanisław August Poniatowski Grodno'da tahttan feragat etti — Lehistan-Litvanya Birliği'nin son hukukî kopuşu", tur:"hukumdar", kapsam:"dis", yer_id:"Grodno", kaynak:"zpe.gov.pl 'Unicestwienie Rzeczypospolitej Obojga Narodów' (https://zpe.gov.pl/watek/LPALNC5V6X/0/a/unicestwienie-rzeczypospolitej-obojga-narodow/D4U3LSXGN): 25 listopada 1795, Grodno; dzieje.pl/node/13423 (feragat 25 Kasım 1795)" }` — iki kaynak OKUNDU.
2. 1579-08-30 Polotsk'un Batory'ca geri alınışı: evrende yalnız `1579-01-01` (yer_id yok). Öneri: gün ve `yer_id:"Polotsk"` ekle — kaynak çekilemedi (Cambridge History of Poland I / Britannica 'Stephen Báthory'); ERİŞİLEMEYEN listesine yazıldı.
3. 1563-02-15 Polotsk'un Moskova'ca alınışı (Livonya Savaşı) — evrende yok; kaynak çekilemedi.
4. 1791-05-03 Üç Mayıs Anayasası (Lehistan'ın son reform eylemi) — yer_id Varşova; evrende yok; kaynak çekilemedi (zpe.gov.pl/dzieje.pl'den okunabilir).
5. 1794-03-24 Kościuszko Ayaklanması (Kraków'da yemin) — evrende yok; kaynak çekilemedi.
6. 1660-05-03 Oliwa Barışı (Lehistan Kuzey Livonya'yı İsveç'e resmen bıraktı; Vasa iddiası bitti) — evrende yok, Riga/Cēsis/Pärnu'nun Lehistan→İsveç geçişini (1621) hukukî olarak bağlar; kaynak çekilemedi.

## d) Harita uyumu
Ölçer: kırılma 23, AÇIK 6 (aşağıda hepsi), otomatik-ucu 0, ⚠ harita anahtarı ihlali yok.
| # | gün | yerleşimler | durum / öneri |
|---|---|---|---|
| 1 | 1571-01-01 kazanç | Kostantinov (Starokostiantyniv) (yerlesimler_ukrayna_0916.js:20, kur:"1571-01-01", s: 1571-01-01→1793-01-23 lehistan) | Lublin'de (1569-07-01) Volhynia/Kiev/Braclaw Litvanya'dan Polonya Tacı'na geçti (olaylar_2s_0918.js:63 açıklaması; atlas referans değil). 1571 kuruluş (`kur`) yılı s: f ile karışmış görünüyor; yerleşim 1571'de kurulmuşsa `f` doğru, ama o zaman ölçer "kazanç"ı kuruluş maddesiyle kapatmalı. Öneri: madde "Kostantinov kuruldu 1571" ya da f. KASA, kur/ f ayrımını denetlesin. |
| 2 | 1621-09-15 kayıp | Cēsis (Wenden), Pärnu, Riga | Alâkalı madde YOK (en yakın Hotin). Riga'nın İsveç'e geçişi evrende yok (yalnız 1581-01-01 maddesinin açıklamasında "1621'de İsveç"). Gün: Riga teslimi 15 Eylül **1621 Jülyen (İsveç)**; Gregoryen 25 Eylül 1621. Dahili kanıt: RPSL el ilanı (İsveç mektubu) "Pazar 16 Eylül 1621" — 16.09.1621 Jülyen = Pazar (Gregoryen 26 Eylül Pazar; Gregoryen 16 Eylül Perşembe) → Jülyen. Öneri: yeni madde `{ t:"1621-09-25", b:"Riga İsveç'e teslim oldu (II. Gustav Adolf; Jülyen 15 Eylül)", yer_id:"Riga" }` + s: dönemlerini 1621-09-25'e çek. Cēsis/Pärnu için ayrı kaynak şart: Pärnu'nun İsveç'e geçişi 1617 mi 1621 mi (kaynak çekilemedi); Cēsis (Wenden) 1621 sonbaharı — kaynak çekilemedi. |
| 3 | 1654-01-18 kayıp | Kremençuk | Pereyaslav maddesi yer_id Çernigov; Kremençuk için alâkalı değil. Kremençuk Zboriv (1649-08-18) ile Kazak Hetmanlığı'na mı geçti, yoksa 1654'e kadar Lehistan'da mı kaldı: kaynak çekilemedi. Atlas zinciri Kiev/Poltava/Baturin'i 1649'da, Kremençuk'u 1654'te kesiyor — tutarsız. Öneri: Zboriv maddesine yer_id ekle ve Kremençuk'u 1649-08-18'e çek (kaynak onayıyla). |
| 4 | 1699-01-26 kazanç | Uman, Vinnitsa | Karlofça maddesi (kronoloji_sinir_lehistan_ukrayna_1028.js:55) metinde "Sağ Yaka Ukrayna" diyor ama yer_id/odak yalnız Kamaniçe. Öneri: aynı maddeye `yer: "Kamaniçe, Bar, Uman, Vinnitsa"` (gün zaten doğru, madde kapsamı eksik). |
| 5 | 1772-08-05 kayıp | Rēzekne (Rositten) | Birinci Taksim maddesi (…1028.js:59) Rusya'nın Inflanty (Daugavpils, Rēzekne) payını yer olarak taşımıyor. Öneri: yer listesine "Daugavpils, Rēzekne, Polotsk, Vitebsk, Mogilev, Gomel" ekle (hepsi aynı gün s: kırılması). |
| 6 | 1793-01-23 kayıp | Berdiçev, Bobruysk, Fastov, Jitomir, … | İkinci Taksim maddesi (…1028.js:61) yalnız Rivne/Minsk/Kamaniçe/Bar/Vinnitsa/Braslav/Bila Tserkva sayıyor. Öneri: yer listesine Berdiçev, Bobruysk, Fastov, Jitomir, Mozır, Pinsk (aynı gün kırılan) eklensin. |
Ek sahiplik bulguları (kaynak sınırlı, "doğrulanmadı" olarak işaretle):
- **Polotsk (yerlesimler_ek7.js)**: litvanya-buyuk-dukalik → lehistan[1569-07-01→1772-08-05] kesintisiz. Polotsk 1563-02-15'te Moskova'ya geçti, Batory 1579'da aldı (evren maddesi 1579-01-01 bunu söylüyor). Dolayısıyla 1569-07-01→1579 arası Polotsk `rusya` olmalı. Öneri s: `{f:"1569-07-01",t:"1579-08-30",d:"rusya"},{f:"1579-08-30",t:"1772-08-05",d:"lehistan"}`; 30 Ağustos kaynak çekilemedi (ERİŞİLEMEYEN #1). Benzer şekilde Vitebsk/Velizh/Sebezh gibi Moskova'nın 1569'da elinde tuttuğu yerler için kontrol önerilir.
- Smolensk: lehistan[1611-06-13→1654-10-03] ✓ evren maddeleriyle uyumlu. Deulino 1618-12-11 Çernigov/Novgorod-Seversk ✓.
- Kiev/Poltava/Baturin: lehistan[1569→1649-08-18] ✓ Zboriv; Kiev 1667-02-09'da Rusya (Andrusovo) ✓.
- 1672-08-27/1699-01-26 Podolya (Bar, Kamaniçe, Meciboj, Yazlofça): ✓ Bucaş/Karlofça; Yazlofça 1684-08-24 Leh'e (kısa) → 1699 ✓ (olaylar_ki117.js:7).
- 1795 sonrası: Varşova prusya, Krakov/Lublin avusturya, Vilnius/Grodno/Brest rusya ✓ (III. Taksim paylaşımıyla uyumlu).
- Gdańsk/Toruń: lehistan[→1793-01-23] ✓ (İkinci Taksim). Elbląg/Malbork: lehistan→1772 ✓.
- Yerleşim sayısı 1657:42 (Rus-Kazak işgali) ve 1778:40 (I. Taksim) beklenen düşüşler; 1569:53→1613:59 genişleme Smolensk/Çernigov/Riga/Tartu girişleriyle uyumlu. Livonya için Tartu (Dorpat) lehistan[1582-01-01→1625-01-01]: İsveç'in Tartu'yu aldığı gün 1625'te Ağustos (kaynak çekilemedi); evren maddesi yalnız yıl veriyor ("sefer Temmuz 1625'te başladı") → `1625-01-01` gün uydurması değil, yıl hassasiyeti; kaynakla gün bulunursa güncellensin.

## Önerilen düzeltmeler (KASA için)
1. data/olaylar_ek16.js:540 sonrası: yeni madde 1795-11-25 (yukarı c/1, iki kaynak okundu).
2. data/kronoloji_sinir_lehistan_ukrayna_1028.js:55,59,61: `yer`/odak listelerini genişlet (Uman/Vinnitsa; Daugavpils/Rēzekne; Berdiçev/Bobruysk/Fastov/Jitomir) — gün ve içerik değişmez, ölçer 3 AÇIK kapanır.
3. Riga 1621: yeni madde (1621-09-25, Jülyen 15 Eylül notu) + data/yerlesimler.js (Riga), yerlesimler_ek11.js (Pärnu; Cēsis ayrı dosya) s: sınırlarını 1621-09-25'e çek — Pärnu/Cēsis günü kaynakla doğrulanmadan DOKUNMA.
4. data/yerlesimler_ek7.js Polotsk: yukarıdaki iki dönemli s: (1579-08-30 kaynakla doğrulandıktan sonra).
5. data/devletler.js:817-819 `kaynak:"polonya"` → TDV 'polonya' madde URL'si + okunan cümle (veya Lublin/III. Taksim için zpe.gov.pl/dzieje.pl).
6. devletler.js lehistan `ic_not`: "t: 24 Ekim 1795 antlaşma; 25 Kasım 1795 feragat".

## Erişilemeyen kaynaklar
1. Polotsk 1579-08-30 (Batory) ve 1563-02-15 (Moskova): Cambridge History of Poland I (1950) bölüm "Stephen Báthory" — soru: "Polotsk'un Batory'ya teslim günü ve Moskova elinde kaldığı yıllar."
2. Riga/Pärnu/Cēsis 1621: SBL (Svenskt biografiskt lexikon) Gustav II Adolf maddesi veya Seppo Zetterberg (ed.) — soru: "Riga teslim günü (Jülyen) ve Pärnu/Cēsis'in İsveç eline geçiş günleri."
3. Union of Lublin ikinci kaynak: journals.ur.edu.pl/tematyikonteksty/article/download/284/259/528 (PDF metni çıkarılamadı) — soru: "1 Temmuz akt, 4 Temmuz kral onayı."
4. Kostantinov (Starokostiantyniv) kuruluşu 1571 ve Lublin sonrası aidiyet — Słownik geograficzny Królestwa Polskiego, "Konstantynów".
5. Kremençuk 1649/1654 aidiyeti — Wielka Encyklopedia PWN / Ukrayna ansiklopedisi (EoU) "Kremenchuk".
6. Henri Valois'nın taç giyme günü — Polski Słownik Biograficzny (ipsb.pl) "Henryk Walezy".
