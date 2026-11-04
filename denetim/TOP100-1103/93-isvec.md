# 93 · İsveç İmparatorluğu (Stormaktstiden 1611–1721) — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-04 (ölçer top100_olc.py `isvec yeni-isvec`; kr_ara; yerleşim zincir betikleri; hepsi salt okur)

## Özet
- Künye: İmparatorluk için AYRI künye YOK. Tek ana künye `isvec` (İsveç Krallığı, 1523-06-06→None, `ic_not_t` pencere ucu); öncül `isvec-birlik-oncesi` (→1523-06-06), sömürge `yeni-isvec` (1638-03-29→1655-09-15), ardıl-birlik `norvec-isvec-birligi` (1814-11-04→1905-06-07). 85 yerleşim kaydı isvec'e ait; en geniş an **1661 (63 yerleşim)**, 1684: 63.
- Kırılma 23, AÇIK 8 (+ otomatik-uç 0). `yeni-isvec`: **0 yerleşim — haritada görünmüyor**. Eksik kronoloji/yerleşim önerisi: 7 madde + 14 yerleşim (c, d).
- En ağır 3 bulgu: (1) **Takvim HATASI — evrende 4 İsveç/Danimarka maddesi Jülyen günü taşıyor** (Roskilde 1658-02-26→03-08; Brömsebro 1645-08-13→08-23; Stolbovo 1617-02-27→03-09; Åbo 1743-08-07→08-18) ve atlasın kendi `kronoloji_isvec.js` "TAKVİM BEYANI"ı bunu zaten itiraf ediyor ("toplu çeviri kararı Emre'nindir") — koordinatör kuralıyla HATA; (2) imparatorluğun asıl kazanımları haritada yok: Wismar, Stade/Verden (Bremen-Verden), Greifswald/Wolgast, Ösel (Kuressaare), Haapsalu, Kexholm/Käkisalmi, Ivangorod, Trondheim 1658-60 — 0 kayıt; (3) Riga/Livonya 1621 ve Stralsund/Stettin 1648/1720, Viipuri 1721 kırılmalarının evren maddeleri yanlış `yer_id` taşıyor (AÇIK 6 bundan).
- 1923-10-29 ufuk izi: isvec'te YOK.
- MÜKERRER: olaylar_ek16.js:328 ve :746 — aynı gün (1617-02-27) iki Stolbovo maddesi (biri "Stolbova… Baltık kıyısını", biri "Stolbovo… İngermanland'ı"); biri silinmeli. Ayrıca `yeni-isvec` (künye, 0 yerleşim) ile haritadaki "Fort Christina" için yerleşim yok.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| isvec-birlik-oncesi | İsveç Krallığı (Kalmar Birliği Öncesi ve Dönemi) | 1000-01-01 | 1523-06-06 | öncül ✓ (t=isvec.f) |
| isvec | İsveç Krallığı | 1523-06-06 | None (pencere ucu, ic_not_t) | ana künye; harita:"isvec"; kaynak:"isvec" (yalnız TDV slug'ı) |
| yeni-isvec | Yeni İsveç | 1638-03-29 | 1655-09-15 | 0 yerleşim — haritada görünmüyor |
| norvec-isvec-birligi | Norveç Krallığı (İsveç ile Birlik) | 1814-11-04 | 1905-06-07 | ardıl; kapsam dışı |
| finlandiya-buyuk-dukaligi | Finlandiya Büyük Dükalığı | 1809-09-17 | 1917-12-06 | Finlandiya'nın İsveç'ten çıkışı (Turku/Helsinki/Oulu 1809-09-17 ✓ Hamina) |
Eksik evre: "Stormaktstiden" (1611-1721) künyede yok; öneri: ayrı künye açma — mevcut tek künye + kronoloji yeterli (s: sahiplik yerleşim bazında zaten İsveç'te). Evre bilgisi `ozet`e yazılsın: "1611-1721 Büyük Güçler Çağı".

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm | önerilen satır |
|---|---|---|---|---|---|
| f isvec | 1523-06-06 (Strängnäs seçimi) | kronoloji_isvec.js:1 (evren DIŞI) — atlas referans değil | SBL «Gustav I» / NDB: ÇEKİLEMEDİ | teyit EKSİK (iki bağımsız kaynak okunamadı) | `f` korunur; ic_not: "6 Haziran 1523 Strängnäs seçimi; Stockholm'e giriş 24 Haziran 1523 — kaynak çekilemedi" |
| t isvec | None | — | — | İsveç hâlâ var; ic_not_t pencere ucu ✓ | — |
| imparatorluk başı | 1611 (II. Gustav Adolf) | ADB «Gustav II. Adolf» (de.wikisource.org/wiki/ADB:Gustav_II._Adolf): "gegen Ende 1611" tahta çıktı, Karl IX'un ölüm günü verilmiyor (OKUNDU) | Gripsholm Kalesi sitesi: "became king when Karl IX died that year" (OKUNDU) | Gün: atlas künye-kronolojisinde 1611-10-30 = Jülyen; Gregoryen **1611-11-09** | kronoloji_isvec.js (evren dışı) 1611-10-30 → 1611-11-09 (+10 g) |
| imparatorluk sonu | 1721-09-10 Nystad | olaylar_ek16.js:296-301 açıklaması "30 Ağustos 1721'de imzalandı" — Jülyen; t=Gregoryen ✓ | EB1911 / SBL: çekilemedi | tarih Gregoryen ✓; açıklama metni "30 Ağustos (Jülyen) = 10 Eylül (Gregoryen)" şeklinde tamamlanmalı | d: metnine ekle |
Takvim kuralı: İsveç 1753-03-01'e dek Jülyen (1700-03-01…1712-02-30 "İsveç takvimi", Jülyen'den bir gün ileri); danimarka 1700'de Gregoryene geçti, ama 1658 Roskilde'de iki devlet farklı takvimlerdeydi (Danimarka Jülyen, 1700'e dek). **İsveç kaynaklı gün Jülyen ise atlasa +10 g (1582-1700-02), +11 g (1700-03-1753-02) ile Gregoryen yazılır.**

### Takvim kanıtı (neden HATA?)
- ADB, Karl Wittich, «Gustav II. Adolf» (okundu): Peenemünde'ye çıkış "am 26. Juni" 1630; EB1911 «Gustavus II. Adolphus»: "two days after midsummer day" (24 Haziran + 2). 26 Haziran Jülyen = **6 Temmuz Gregoryen** — atlas 1630-07-06 (Gregoryen ✓). Aynı ADB metni Lützen'i "6. November" (Jülyen) veriyor → Gregoryen **16 Kasım 1632**; atlas künye kronolojisi 1632-11-06 (Jülyen, HATA); aynı kaynakta Altmark "16. Sept. 1629" → Gregoryen **26 Eylül 1629** (kronoloji_isvec.js 1629-09-16 HATA).
- EB1911 «Charles XII.»: ölüm "11 Dec. 1718" (Gregoryen) ↔ atlas künye kronolojisi 1718-11-30 (Jülyen); fark 11 g ✓ — dönüşümü bağımsız doğrular; Narva "19 Kasım / ertesi sabah" (Jülyen 20 Kasım = Gregoryen 30 Kasım) ✓ atlas 1700-11-30 Gregoryen.
- Breitenfeld: ADB "5. + 2 gün" = 7 Eylül Jülyen → **17 Eylül Gregoryen** ✓ atlas 1631-09-17 doğru. (Yani atlas bazı İsveç günlerini çevirmiş, bazılarını çevirmemiş — tutarsızlık.)
- Riga: İsveç mektubu "Pazar 16 Eylül 1621" (RPSL el ilanı, arama özeti) — 16.09.1621 Jülyen = Pazar (Gregoryen 26 Eylül Pazar; Gregoryen 16 Eylül Perşembe) ⇒ İsveç günü Jülyen ⇒ teslim 15 Eylül Jülyen = **25 Eylül Gregoryen**.

## c) Kronoloji
Evrende (Değişmez 2) VAR (dosya:satır):
| tarih | madde | dosya | takvim hükmü |
|---|---|---|---|
| 1561-06-01 | Reval İsveç himayesine girdi | olaylar_ek16.js:678 | ay hassasiyeti ✓ |
| 1581-01-01 | İsveç Narva'yı Rusya'dan aldı | olaylar_ek16.js:539 | yalnız yıl; gün: kaynak çekilemedi |
| 1611-07-16 | Novgorod İsveç ordusunca alındı | olaylar_ek16.js (satır ölçülmedi) | Jülyen mi? kaynak çekilemedi; **KONTROL** |
| 1617-02-27 | Stolbovo (×2) | olaylar_ek16.js:328 ve :746 | **HATA: Jülyen; Gregoryen 1617-03-09** (Presidential Library prlib.ru "February 27 (March 9), 1617" arama özeti; sayfa güvenlik duvarı, okunamadı) + MÜKERRER |
| 1625-01-01 | İsveç Tartu'yu aldı | olaylar_ek16.js:750 | yalnız yıl (gün: ağustos 1625? kaynak çekilemedi) |
| 1645-08-13 | Brömsebro | kronoloji_sinir_avrupa_bati.js:122 | **HATA: Jülyen; Gregoryen 1645-08-23** (atlas kendi beyanı kronoloji_isvec.js'te; Danimarka+İsveç aynı Jülyen) |
| 1648-10-24 | Vestfalya Barışı | olaylar (Münster yer_id) | ✓ Gregoryen |
| 1658-02-26 | Roskilde | olaylar_2s_0919.js:199 | **HATA: Jülyen; Gregoryen 1658-03-08** |
| 1658-12-08 | Bornholm ayaklanması | kronoloji_sinir_iskandinavya.js:46 | Danimarka kaynaklı, Jülyen olabilir — **KONTROL** (8 Aralık 1658 Jülyen → 18 Aralık) |
| 1703-05-12 | Nyenskans düştü (Rus) | harita s:; madde Yenikale'ye ait (alâkasız) | AÇIK |
| 1703-05-27 | St. Petersburg kuruluşu | olaylar_ek16.js ~373 | ✓ açıklamada "16/27 Mayıs 1703" |
| 1709-07-08 | Poltava | yalnız künye kronolojisinde | Gregoryen ✓ (evren dışı) |
| 1721-09-10 | Nystad | olaylar_ek16.js:296 | ✓ Gregoryen |
| 1743-08-07 | Åbo | kronoloji_sinir_iskandinavya.js:31 | **HATA: Jülyen; Gregoryen 1743-08-18** (kronoloji_isvec.js beyanında "Wikipedia: 18 August 1743 (OS 7 August)" — ikincil; Svensk/Finlandiya akademik kaynak çekilemedi) |
| 1751-10-02 | Strömstad | kronoloji_sinir_avrupa_bati.js:148 | gün: Jülyen mi? **KONTROL** |
| 1809-09-17 | Hamina | olaylar_ek16.js:143 | ✓ Gregoryen (5 Eylül Jülyen karşılığı) |
| 1814-01-14 | Kiel | olaylar (Oslo) | ✓ Danimarka Gregoryen |
Künye içi (devletler.js:978-986) ve kronoloji_isvec.js (535 satır) "var, evren dışı": Gustav Vasa 1523, Västerås 1527, IX. Karl 1611-10-30, Knäred 1613-01-20, Altmark 1629-09-16, Peenemünde 1630-07-06, Breitenfeld 1631-09-17, Lützen 1632-11-06, Westphalia 1648-10-24, Roskilde 1658-02-26, Kopenhag 1660-05-27, Lund 1676-12-04, XI. Karl ölümü 1697-04-05, Narva 1700-11-30, Altranstädt 1706-09-24, Poltava 1709-07-08, XII. Karl ölümü 1718-11-30, Nystad 1721-09-10 …
Jülyen-olduğu şüpheli künye içi (evren dışı, KASA için kontrol listesi, +10/+11 g): 1611-10-30→1611-11-09; 1613-01-20→1613-01-30 (EB1911: "28 Jan 1613" — çelişki, kaynak çekilemedi); 1629-09-16→1629-09-26; 1632-11-06→1632-11-16; 1654-06-06→1654-06-16; 1660-02-13→1660-02-23; 1660-05-27→1660-06-06 (atlas kendi beyanı); 1672-12-18→1672-12-28; 1676-12-04→1676-12-14 (Lund, Danimarka kaynağıyla karışık; kontrol); 1697-04-05→1697-04-15; 1718-11-30→1718-12-11 (EB1911 doğruladı); 1720-03-24→1720-04-04; 1751-03-25→1751-04-05; 1714-09-19 (TDV; takvim belirsiz — TDV esas, `ic_not` beyanı zaten var; dokunma).
EKSİK evren maddeleri (kaynak okunmadan YAZILMASIN; her satır için kaynak çekilemedi = ERİŞİLEMEYEN):
1. `{ t:"1611-01-01", b:"İsveç Neva ağzında Nyenskans'ı kurdu — İngermanland işgalinin başlangıcı", tur:"kurulus", yer_id:"Nyenskans (Nyen)", kaynak:"ÇEKİLEMEDİ (SBL / Sven Lundkvist)" }` (AÇIK #1; mevcut s: başlangıcı 1611-01-01; yıl hassasiyeti).
2. Riga'nın İsveç'e teslimi `1621-09-25` (Jülyen 15 Eylül), yer_id Riga — iki bağımsız kaynak çekilemedi (EB1911 "invested 13 August and surrendered 15 September 1621" OKUNDU ama takvimi belirtmiyor; RPSL mektubu zayıf).
3. Altmark Ateşkesi `1629-09-26` — ADB okundu (16 Eylül Jülyen); ikinci kaynak çekilemedi.
4. Lützen `1632-11-16` — ADB (6 Kasım) + EB1911 (6 Kasım) okundu, hepsi Jülyen; Gregoryen karşılığı hesap; Gregoryen kaynak (NDB / Cambridge Modern History) çekilemedi.
5. Stockholm Antlaşması (İsveç–Prusya) `1720-02-01`: Stettin ve Ön Pomeranya Prusya'ya — yer_id Stettin (Szczecin) — AÇIK #6; kaynak çekilemedi.
6. Frederiksborg (Danimarka) ve Stockholm (Hanover) antlaşmaları — Bremen-Verden'in Hanover'e (1719-11-20) geçişi: haritada yerleşim yok, madde de yok — kaynak çekilemedi.
7. Büyük Kuzey Savaşı başlangıcı: Narva'dan önce 1700-02-12 Saksonya Riga saldırısı (evrende yok; künye içinde 1700-01-01 yıl) — kaynak çekilemedi.

## d) Harita uyumu
Ölçer: 23 kırılma, AÇIK 8, otomatik-uç 0, ⚠ harita anahtarı ihlali yok.
| # | gün | yerleşim | öneri |
|---|---|---|---|
| 1 | 1611-01-01 kazanç | Nyenskans (yerlesimler_ek29.js; s: f 1611-01-01) | madde c/1; yıl hassasiyeti |
| 2 | 1621-09-15 kazanç | Cēsis (Wenden), Pärnu, Riga | Riga: gün 1621-09-25; Pärnu/Cēsis ayrı kaynak (Pärnu 1617 mi 1621 mi? kaynak çekilemedi) — bkz. 92/d#2 |
| 3 | 1648-10-24 kazanç | Stralsund | Vestfalya maddesi yer_id Münster; ölçer "alâkalı" bulmuyor. Öneri: aynı maddeye `yer:"Münster, Stralsund, Stettin"` (gün ✓). Yerleşim yok: Wismar, Greifswald, Stade, Verden |
| 4 | 1703-05-12 kayıp | Nyenskans | Madde YOK (en yakın Yenikale alâkasız). Gün: 1 Mayıs 1703 Jülyen = **12 Mayıs Gregoryen** ✓ atlas Gregoryen (kaynak çekilemedi); Peterburg kuruluşu 1703-05-27 maddesi yer_id St. Petersburg, Nyenskans değil |
| 5 | 1703-05-14 kayıp | Koporye, Yam (Yamburg) | Madde YOK. Gün (14 Mayıs) kaynak çekilemedi — Koporye/Yam'ın Rus eline geçiş günü 1703'te başka olabilir; ÇEKİLEMEDİ, doğrulanmadan dokunma |
| 6 | 1720-02-01 kayıp | Stettin (Szczecin) | madde c/5 |
| 7 | 1721-09-10 kayıp | Viipuri (Vyborg) | Nystad maddesi yer_id Riga; Viipuri dahil değil. Öneri: `yer: "Riga, Tallinn (Reval), Narva, Viipuri (Vyborg)"` (+ Kexholm yerleşimi eksik) |
| 8 | 1814-05-17 kayıp | Alta, Bergen, Bodø, Hamar | Norveç'in İsveç'e 1814-01-14→1814-05-17 hukukî devri (`isvec` zincirinde); Eidsvoll maddesi var ama yer_id Oslo; yer listesi genişlet; ayrıca Norveç'in bu 4 ayda fiilen İsveç'te olmadığı (Kiel'i reddetti) — beyanlı yaklaşıklık eksik, bu imparatorluk kapsamı DIŞI |
En geniş an (1661, 63 yerleşim) sahiplik: İsveç tarafında görünenler: Riga/Tallinn/Narva/Tartu/Pärnu/Viipuri/Stettin/Stralsund/Malmö/Halmstad/Visby/Östersund/Kristianstad/Nyenskans/Koporye/Yam (hepsi kaynaklı sınırla uyuyor). **Kaynağın İsveç'e verdiği ama haritada hiç olmayan yerler** (yerleşim sayısı 0): Wismar, Stade, Verden, Greifswald, Wolgast, Kuressaare (Arensburg, Ösel), Haapsalu, Kexholm/Käkisalmi, Ivangorod, Landskrona, Dünamünde (Daugavgrīva), Pillau/Memel (1626-35 geçici). Trondheim 1658-02-26/1660 arası İsveç'te (Roskilde → Kopenhag 1660) — haritada Trondheim 1814-01-14'e dek Danimarka (eksik 1658-1660 dilimi; kaynak: kronoloji_isvec.js "Kopenhag"). Bunlar Değişmez 1/3'ü bozmaz (komşu peteklere emilir) ama İsveç'in toprak omurgasını eksik gösterir: Bremen-Verden (1648-1712/1719) ve Wismar (1648-1803) özellikle.
Koşu etkisi: yeni yerleşimler motor çıktısını değiştirir; HAVVA koşusu şart.
Yeni İsveç (`yeni-isvec`): künye var, **yerleşim 0** — Fort Christina (Wilmington, Delaware) için `s:[{f:"1638-03-29",t:"1655-09-15",d:"yeni-isvec"}]` yerleşimi önerilir; f: LoC "late March, 1638" (künye ic_not "29 Mart gün teyitsiz") — yalnız ay hassasiyeti; t: 15 Eylül 1655 yalnız yıl teyitli.

## Önerilen düzeltmeler (KASA için)
1. olaylar_2s_0919.js:199 `t:"1658-02-26"` → `"1658-03-08"` (+ ic_not_takvim: "İsveç/Danimarka Jülyen 26 Şubat 1658 → Gregoryen 8 Mart"; yerlesimler_ek7.js Kristianstad, yerlesimler_avrupa.js Malmö f/t 1658-02-26 → 1658-03-08).
2. kronoloji_sinir_avrupa_bati.js:122 `t:"1645-08-13"` → `"1645-08-23"` (+ Visby/Halmstad/Östersund s: sınırları 1645-08-23).
3. olaylar_ek16.js:328 ve :746 — birini sil (mükerrer); kalan `t:"1617-02-27"` → `"1617-03-09"`; Yam/Koporye s: 1617-02-27 → 1617-03-09 (yerlesimler_ek29.js).
4. kronoloji_sinir_iskandinavya.js:31 `t:"1743-08-07"` → `"1743-08-18"` (+ Lappeenranta s:, yerlesimler_ek7.js; ic_not'ta kaynak).
5. kronoloji_isvec.js (evren dışı): yukarıdaki Jülyen satırlarının Gregoryene çevrilmesi (ayrı tur, KASA).
6. olaylar'a Riga 1621-09-25, Altmark 1629-09-26, Stockholm 1720-02-01 maddeleri (kaynak okunduktan sonra).
7. Yeni yerleşim önerileri (yerlesimler_ek*.js): Wismar (1648-10-24→1803-06-26 pfandvertrag?), Stade, Verden, Greifswald, Kuressaare, Haapsalu, Kexholm — YALNIZ kaynaklı s: ile; sınırları kaynak çekilemedi.
8. `kaynak:"isvec"` (devletler.js:977) → TDV URL + okunan cümle.
9. Åbo/Stolbovo/Roskilde gibi günlerde komşu devletlerin (Rusya/Danimarka/Finlandiya) künyelerinin ic_not'ları da bu düzeltmeyle senkron tutulmalı.

## Erişilemeyen kaynaklar
1. SBL (Svenskt biografiskt lexikon, sok.riksarkivet.se/sbl) «Gustav II Adolf», «Karl IX», «Kristina» — soru: "Karl IX'un ölüm günü (30 Ekim 1611 Jülyen mi?), Riga teslim günü, Altmark ve Lützen günleri takvimi."
2. NDB «Gustav II. Adolf» (deutsche-biographie.de/sfz35749.html, NDB 7 / 1953 s.300) — soru: "Lützen 16 Kasım 1632 Gregoryen kabul mü? Peenemünde 6 Temmuz?"
3. Presidential Library (prlib.ru/en/node/619081) «Treaty of Stolbovo» — soru: "27 Şubat (9 Mart) 1617" ifadesi; sayfa güvenlik duvarı verdi.
4. Finlandiya akademik kaynağı (Suomen historian pikkujättiläinen / Kansallisbiografia) — Åbo Antlaşması günü (7 Ağustos 1743 Jülyen / 18 Ağustos).
5. Nyenskans 1703 ve Koporye/Yam 1703 teslim günleri — Zetterberg / Lundkvist, Karolinska Förbundets Årsbok.
6. Tartu 1625 teslim günü — Estonya akademik kaynağı (Tartu Üniv. Tarihi, Eesti ajalugu II).
7. Bremen-Verden'in İsveç'e geçişi (Vestfalya 1648) ve Wismar'ın kaynaklı s: sınırları — Cambridge Modern History IV / Peter Wilson, *Europe's Tragedy* (2009).
8. Stockholm Antlaşması (Prusya) ve Frederiksborg günleri — SBL «Fredrik I» / Danimarka (lex.dk).
