# KAMP-EKSIK-KRONOLOJI-B — K0'ın İKİNCİ, BAĞIMSIZ araştırması (10 Ekim 2026)

Oturum: `KAMP-EKSIK-KRONOLOJI-B` (eski `HAZIR KITA 0910.2126.09`, EMRELIC). K0 koordinatörün
send_message'ıyla bana verildi; tahtada öteki `KAMP-EKSIK-KRONOLOJI` oturumu (M-5919) benden önce
almıştı — çakışma M-5922 ile bildirildi. İki araştırma birbirini GÖRMEDEN yürüdü ⇒ 46 ortak künyede
**bağımsız çapraz ölçüm** oldu (aşağıda §3). Hiçbir `data/*.js` dosyasına dokunulmadı.

Taban: `main` 40b61bde (ölçüm anı `HEAD..origin/main` = 0).

## Dosyalar
- `denetim/KAMP-EKSIK-KRONOLOJI-B-KRONOLOJI.csv` — **190 madde · 50 künye** · `§3` şeması + `tur` sütunu
- `denetim/KAMP-EKSIK-KRONOLOJI-B-CAPRAZ.csv` — öteki oturumla (A) yıl düzeyinde karşılaştırma, 77 fark satırı
- bu dosya — ölçüm, kaynak seti, çapraz bulgu, künye başına gerekçe/`bulunamadı` (§4)
- LISTE ayrıca yazılmadı: benim ölçümümün id kümesi `denetim/KAMP-EKSIK-KRONOLOJI-LISTE.csv` ile BİREBİR aynı (`comm` farkı 0).

## 1. Liste ölçümü — 228, üç evrende
`data/devletler.js` 897 künye (897 benzersiz id) × `data/olaylar*.js` + `data/kronoloji*.js` (184 dosya, vm ile yüklendi, ayrıştırma hatası 0):

| evren | anılmayan |
|---|---|
| KATI — maddenin bir alan DEĞERİ (ya da dizi elemanı) tam olarak id. Eşleşen alanlar: `taraflar` 6169 · `etiket` 1867 · `devlet` 1706 · `devletler` 1414 · `odak_kimlik` 320 · `kaynak` 140 · `kunye` 49 · `devlet2` 6 | **228** |
| KATI, `kaynak` alanı hariç (TDV slug'ı id'ye denk gelebiliyor: `karamanogullari` vb.) | **228** |
| GEVŞEK — dosya metninde `"<id>"` (koordinatörün deseni) | **228** |
| yalnız gevşekte anılan | 0 |

⇒ Koordinatörün 228'i ile fark **0**. ⚠️ Öteki oturumun bulduğu üçüncü yol (künye-içi `kronoloji:[]`,
`app.js derinKronolojiBindir` — 224 dolu) BU ölçümün evreninde DEĞİL; ben onu ölçmedim.

## 2. Araştırma — 52 künye seçildi, 51'inde madde
Seçim ölçütü: TDV'nin birincil olduğu evren (Anadolu · İran/Orta Asya · Arabistan/Levant · Afrika İslâm ·
Balkan/Kafkas). 5 alt-grup, aynı talimatla (`§4` altı kural):

| grup | künye | madde |
|---|---|---|
| G1 Anadolu beylikleri | 9 | 24 |
| G2 İran · Orta Asya · erken İslâm | 10 | 37 |
| G3 Arabistan · Levant | 11 | 54 |
| G4 Afrika İslâm | 11 | 33 (dacu: 0) |
| G5 Balkan · Kafkas · Sovyet Orta Asya | 11 | 43 |
| **toplam** | **52** | **191** |

`tur`: yıkılış 49 · kuruluş 39 · fetih 31 · tâbiiyet 22 · başkent 5 · diğer 45.
`kesinlik`: yıl 88 · hicrî-yıl 45 · gün 39 · ay 19. `harita_degisimi`: EVET 138 · HAYIR 53.
🔴 **Toplanan 191 maddeden 1'i ÇIKARILDI → teslim 190 madde / 50 künye, 190'ı da TDV.** Çıkan:
`damagaram` 1899 (Fransız işgali) — kaynağı "Britannica 'Zinder' (WebSearch özeti; sayfa okunamadı)";
doğrudan GET **403** ⇒ kaynak OKUNMADI, arama özeti kaynak değildir. damagaram'ın doğuşu da yıkılışı da
bu turda `bulunamadı/doğrulanmadı`. Aynı sınıftan bir ek: `rabih` 1900-04-22 satırı TDV'ye dayandığı için
KALDI, ama içindeki "Britannica: Kousseri" yer iddiası (yine okunamamış arama özeti) SÖKÜLDÜ. (Aşağıdaki tur/kesinlik sayıları çıkarmadan ÖNCEKİ 191 içindir.)
Biçim denetimi (`birlestir.py`: tarih biçimi · kesinlik↔tarih
tutarlılığı · polity künyede ve 228'de mi · harita_degisimi · boş kaynak · Vikipedi-tek): **kusur 0**.
Elle örneklem (TDV gövdesine karşı): `buhara` 6 Ekim 1920 ✓ · `kuveyt` 29 Temmuz 1913 ✓ ·
`zendler` Cemâziyelâhir 1209/Aralık 1794 ✓.

**Doğuş bulunamadı (13):** saruhan · teke · ahiler · cemisgezek-beyligi · kerayit · nayman · nebhani ·
sabah-emirligi · harfusogullari · tunciler · damagaram · kuba-hanligi · dacu (+ sani-emirligi: emirlik
"1860'lı yıllar", yalnız 1871 tâbiiyeti yazıldı).
**Yıkılış bulunamadı (6):** gozleroglu · cemisgezek-beyligi · darul-kuti · dukagin · dacu · damagaram (çıkarıldı, yukarı).
**Madde 0 olan künye (2):** dacu · damagaram.
Gerekçeleri künye başına §4'te. Künye f/t ile kaynak farkı: G1 16 · G2 7 · G3 11 · G4 12 uç · G5 9.

## 3. 🔴 ÇAPRAZ BULGU — iki bağımsız araştırma, 46 ortak künye
A = öteki oturum (`denetim/KAMP-EKSIK-KRONOLOJI-KRONOLOJI.csv`, 211 madde, 57 künye) · B = bu oturum.

| yıl düzeyinde | sayı |
|---|---|
| aynı yılda TAM AYNI tarih | **109** |
| aynı yıl, FARKLI gün | 25 |
| yalnız A'da olan yıl | 17 |
| yalnız B'de olan yıl | 35 |

**25 gün farkının 15'i TEK SEBEPTEN: A'nın hicrî çevirisi sistematik olarak 1 GÜN ERKEN** (B = A + 1 gün
çifti 16, biri — zend 1779-03-01 ay ↔ 03-02 gün — hicrî değil; `say.py` ölçtü).
Örnek: 1 Muharrem 581 → A 1185-04-03 · B 1185-04-04; 1 Muharrem 718 → A 1318-03-04 · B 1318-03-05;
aynı kayma eyyubi-meyyafarikin · galzay · idrisi · magrave-sicilmase · sacogullari (3) · yezd-atabegligi (2) ·
zend (3) · kumuk-samhalligi'de.
Bağımsız çeviriciyle ölçüldü (`hicri_capa.py`, tablo takvimi): A = **astronomik epok** (15 Temmuz 622),
B = **sivil epok** (16 Temmuz 622). Hakem TDV'nin KENDİ çift tarihi: `zendler` "1 Zilhicce 1207 / 10 Temmuz
1793" → sivil **1793-07-10 ✓** · astronomik 1793-07-09 ✗. ⇒ **B doğru, A'nın hicrî günleri bir gün
geri.** (Tablo takvimi gözleme göre ±1-2 gün oynayabilir; ama TDV'nin kullandığı sözleşmeyle tutarlı olan sivil epoktur.)
⚠️ İki ayrı kesinlik sözlüğü de var: A `yil-hicri`, B `hicri-yil` — yazıcı tek otoriteye bağlamalı.
Kalan gün farkları gerçek içerik farkıdır (biri günü bulmuş, öteki yıl yazmış — ör. galzay İsfahan
1722-11-10 A · 1722 B; ramazanoglu Mercidâbık 1516-08-24 A · 1516 B; konstantin-beyligi 1830-07-05 B · 1830 A;
rif-cumhuriyeti farklı olaylar). Hepsi `-B-CAPRAZ.csv`de satır satır.
Yalnız B'de olan künye: damagaram (çıkarıldı) · darul-kuti · rabih · suve-emirligi · tunciler.
⚠️ **Takvim sözleşmesi açık soru (G5):** 1582 öncesi hicrî tarihler JÜLYEN'e çevrildi (A da aynı — 1578
kumuk kaymasının tam 1 gün olması bunu gösterir). Atlasın Jülyen/Gregoryen sözleşmesi yazılı olarak
BULUNAMADI — yazıcıdan önce koordinatör hükmü gerekir.

## 4. Künye başına gerekçe (alt-grup raporları, olduğu gibi)


---
### G1

G1 — Anadolu beylikleri · kronoloji önerisi notları (10 Ekim 2026)

Hicrî → mîlâdî: tablo usulü (`G1tmp/hicri.py`), 1582 öncesi Jülyen, sonrası Gregoryen; tablo usulü ±1-2 gün oynar.
TDV gövdeleri `G1tmp/<slug>.txt` olarak saklandı (hepsi bu oturumda çekildi, 10.10.2026).

## saruhan
- Kaynak: TDV `saruhanogullari` (HTTP 200, Feridun Emecen, 2009). `torlak-kemal` 302.
- **Doğuş BULUNAMADI:** TDV "1290'lı yıllardan itibaren faaliyet" (yıl değil); Manisa "710'dan (1310) sonra" alındı; "fetih tarihinin 713 (1313) olarak gösterilmesi doğrudan çağdaş bir kaynağa dayanmamaktadır" — TDV 1313'ü kendisi reddediyor ⇒ madde yazılmadı.
- Künye farkları: ① `f:1313-01-01` TDV'ce çağdaş kaynaksız · ② `t:1416-09-01` ↔ TDV 819 h. (1416) Torlak Kemal idamı = kesin Osmanlı idaresi ⇒ hicrî sözleşmeyle `1416-03-01` · ③ kronoloji `1402-07-28` ↔ TDV **17 Ağustos 1402** · ④ kronoloji `1410 son` ↔ TDV "1411'den sonra ve 1415'ten önce" Manisa kolu bitti (yıl yok), 1416 kesin Osmanlı.
- Yazılmayanlar: Hızır Şah'ın kaldırılışı "808 (1405-1406) civarında" (yaklaşık) · Demirci kolu 1413-1426 (yerel kol, harita sahibi değil).
- 1390 maddesi: TDV "791-792 (1389-1390) kışında" — kış iki yılı kapsıyor; `1390-01-01 yil` kesişimin içinde, ama `1389-12` de mümkün. Koordinatöre BEYAN.

## ramazanoglu
- Kaynak: TDV `ramazanogullari` (HTTP 200).
- Künye farkları: ① `f:1352-01-01` ↔ 753 h. ∩ 1352 = `1352-02-18` (hicrî sözleşme) · ② `t:1608-01-01` ↔ 1017 h. ∩ 1608 = `1608-04-17`; TDV bunu yalnız RİVAYET diye aktarır · ③ kronoloji `1517-01-22` "Osmanlı tâbiliğine geçti" ↔ TDV: beylik **Mercidâbık (24.08.1516) sonrası** tevcihle Mahmud Bey'e verildi; 22 Ocak 1517 Ridâniye'de Mahmud Bey'in ÖLDÜĞÜ gündür.
- 1516 tevcih maddesi `kesinlik=yil` (gün yok); `1516-01-01` Mercidâbık'tan önceye düşer — sıralamada dikkat.
- 1485 Osmanlı'nın Adana'yı alışı geçici (Memlük-Osmanlı savaşı); harita etkisi koordinatörün hükmü.

## teke
- Kaynak: TDV `tekeogullari` (HTTP 200, Sait Kofoğlu, 2011).
- **Doğuş ÖLÇÜLEMEDİ (kaynak kendiyle çelişir):** başlık "(1321-1423)" der; gövde ise başlangıcın "1308 ile ... 719 (1319) yılları arasında olması gerektiği"ni yazar; 721 (1321) Ebü'l-Fidâ'nın Hamîdoğulları'nın bölgedeki varlığına dair rivayetinin tarihidir, kuruluşun değil. Künye `f:1321-01-01` bu çelişkinin içinde.
- Künye farkı: kronoloji `1373-01-01` ↔ TDV **14 Mayıs 1373**. `t:1423-01-01` TDV "Ocak 1423" ile uyumlu (ay).
- Yazılmayan çelişki: ilk Osmanlı fethi — Hoca Sâdeddin 793 (1391), "bazı araştırmalar" 1390-1392, Flemming 1397-1399 ⇒ ÖLÇÜLEMEDİ, madde yazılmadı (künyede de yok; künye özeti "kısa Osmanlı kesintisi" diyor ama başlangıç ölçülemez).

## alaiye
- Kaynak: TDV `alaiye-beyligi` (HTTP 200, Erdoğan Merçil, 1989); `alaiye` (şehir) de 200.
- Künye f 1293 / t 1471 / 1427 TDV ile birebir. Fark yok.
- Ek: 1361 Kıbrıs'a geçici bağlılık (tabiiyet, harita HAYIR). 1366 Kıbrıs kuşatması başarısız — yazılmadı.

## ahiler
- Kaynak: TDV `ankara` §3 (HTTP 200, Rıfat Özdemir), `ahilik` (200). Arama "ahiler" sonuç vermedi.
- **Doğuş BULUNAMADI:** `ahilik` maddesinde Ankara'da Ahi yönetiminin başlangıç yılı yok; 1290 künyede kaynaksız.
- 🔴 OLGU ÇELİŞKİSİ: TDV `ankara` "Alâeddin Eretna 1341'de ... bağımsızlığını ilân etti ve **Ankara Osmanlı hâkimiyetine kadar Eretnaoğulları'nın idaresinde kaldı**" der — Ahi yönetimini adıyla anmaz. Künye 1341'i "nominal Eretna, fiilî Ahi" diye yorumluyor; bu TDV'de yok.
- Akademik iz: Ç. İsmail Çiftçioğlu (AKÜ Sosyal Bilimler Dergisi) — arama özetine göre Ahiler 1354 sonrası Ankara'yı geri alıp 1362'ye kadar tuttu; **PDF erişilemedi (DNS ENOTFOUND), doğrulanmadı ⇒ madde yazılmadı.** TDV `ankara`: Alâeddin Camii'ndeki 764/1362-63 I. Murad tamir kitâbesi "Osmanlı hâkimiyetinin başlangıcına ışık tutmaktadır" — 1362 sonunu destekleyebilir ama cümle bir kitâbeyi tarihler, fethi değil.

## mutahharten
- Kaynak: TDV `erzincan`, `kemah`, `akkoyunlular`, `bayburt`, `eretnaogullari` (hepsi 200). Arama "mutahharten" müstakil madde vermedi.
- Künye f 1378 / t 1410 TDV ile uyumlu.
- Künye kronoloji farkları: ① `1401-01-01 antlasma "Timur'a itaat ederek şehrini tahripten korudu"` ↔ TDV: 1401 Yıldırım'ın Erzincan-Kemah'ı alışıdır; Timur'a bağlılık 1387 ve 1394'te · ② `1403-01-01 son "ölümüyle Akkoyunlu nüfuzuna girdi"` ↔ TDV `erzincan`: 1410'da Karakoyunlu hâkimiyeti.
- İç çelişki (iki madde): `kemah` "Osmanlı ülkesine kattı, muhafız yerleştirdi"; `erzincan` "önce Kara Yûsuf'a verdi, sonra hâkimiyetini kabul şartıyla Mutahharten'e bıraktı". Dar kapsam ilkesiyle Kemah için `kemah`, Erzincan için `erzincan` esas.
- Yazılmayan: Pulur zaferiyle Kemah'ın geri alınışı — "bir yıl sonra" (796/1394'ten) türetilmiş ⇒ yazılmadı. Timur'un Kemah'ı geri verişi — yıl yok.

## gozleroglu
- Kaynak: TDV `sebinkarahisar` (200, Fatma Acun). Arama "gozleroglu" müstakil madde vermedi.
- Künye farkı: `f:1408-01-01` ↔ 811 h. ∩ 1408 = `1408-05-27` (hicrî sözleşme).
- **Yıkılış BULUNAMADI:** TDV "on yıl sonra Karakoyunlu Türkmenleri'nin" eline geçti — yıl basmıyor; künye `t:1418` türetilmiş (künyede beyanlı).

## sutayogullari
- Kaynak: TDV `diyarbakir` (200). `sutayogullari`, `sutay` 302; arama "Sutay" yalnız `sutaybi` (ilgisiz) verdi.
- Maddeler TDV aralığının uçları (1343, 1353) — polity ömrü değil, Diyarbekir hâkimiyet penceresi (künye de böyle beyanlı). Fark yok.
- Bulunamadı: hanedanın asıl başlangıcı (Emîr Sutay'ın valiliği) — TDV'de yok. Vikipedi (Sutayids) Sutay ölümü 1332, İbrâhimşah ölümü 1350, son 1352 der — **tek dayanak olamaz**, Iranica'da madde bulunamadı. TDV 1353 ile 1350/1352 arasında çelişki ⇒ akademik tur gerekirse ayrı iş.

## cemisgezek-beyligi
- Kaynak: TDV `cemisgezek` 302; arama "Çemişgezek" → `tunceli`, `zazalar`, `kurtler`, `akkoyunlular`, `uzun-hasan` (hepsi 200) — hiçbirinde beyliğin kuruluş/bitiş yılı yok.
- **Doğuş BULUNAMADI** (TDV'de yıl yok; künye f 1281 de künyenin kendi beyanıyla pencere başı, kuruluş değil).
- **Yıkılış BULUNAMADI:** TDV `zazalar`: "Osmanlılar'ın 1515 yılından itibaren Doğu Anadolu'da hâkimiyet kurmasıyla" Zazalar Osmanlı yönetimine girdi; Çemişgezek yurtluk-ocaklık statüsünde — **bölge hükmü, Çemişgezek'e tarih vermez** ⇒ madde yazılmadı. Vikipedi 1515 ocaklık / 1663 son diyor — tek dayanak olamaz.
- 🔴 Künye farkı: `t:1420` (Karabulut: Kara Yülük Osman Çemişgezek'i Şeyh Hasan'dan aldı) ↔ TDV `akkoyunlular` ve `uzun-hasan`: **Eylül 1452'de "Çemişgezek hâkimi Şeyh Hasan"** hâlâ yerinde, Uzun Hasan onu tâbi kılmaya çalışıyor ⇒ beylik 1420'den sonra da sürüyor; künye penceresi (ve Şeyh Hasan'ın 1420 tarihi) sorgulanmalı.


---
### G2

G2 — KAMP-EKSIK-KRONOLOJI (İran / Orta Asya / erken İslâm)

10 künye · 37 madde (`G2.csv`) · 10 Ekim 2026. Hicrî → mîlâdî çevrim tablo (sivil) hesabıyla yapıldı
(`g2_hicri.py`; 1582 öncesi Jülyen). Hesap ±1-2 gün oynayabilir, bu yüzden kesinlik=`hicri-yil` ve aralık metinde.
Doğrulama: 1 Zilhicce 1207 → 1793-07-10 ve 13 Safer 1193 → 1779-03-02 TDV'nin verdiği günlerle birebir tuttu.
Encyclopaedia Iranica kullanılamadı: makale yolları 404/403 döndü. Bu yüzden bütün maddeler TDV'ye dayanıyor.

## zend
- Slug: `zendler` 200 (Rıza Kurtuluş, 2013) · `kerim-han-zend` 200 · `lutf-ali-han` 200 (gövde boş) · `zend` / `kerim-han` 302.
- 🔴 **Künyenin `kaynak:` alanı yanlış:** künye "TDV'de müstakil maddesi yok" diyor, oysa `zendler` maddesi VAR ve başlığı (1751-1794).
- Başlangıç (f): künye 1751-01-01. TDV `kerim-han-zend`: "1751 yılının Ocak ayında" → gün aynı, ama hassasiyet `ay`. Fark yok.
- Bitiş (t): künye 1794-01-01. TDV: Lutf Ali Han'ın öldürülmesi "Cemâziyelâhir 1209 / Aralık 1794" → 1794-12-24 → **FARK (~12 ay)**.
- Şîraz'ın başkent oluşunda TDV kendi içinde çelişiyor: `zendler` 1180 (1766-67) diyor, `kerim-han-zend` "1765'te Şîraz'a yerleşen". Künyenin iç kronolojisi 1765'i kullanıyor. Polity maddesi (zendler) esas alındı.
- Basra'nın Osmanlı'ya dönüşü için kaynak yalnız yıl (1779) veriyor, olay ise Mart 1779'dan sonra. Varsayılan gün (1779-01-01) Kerim Han'ın ölümünden (1779-03-02) önceye düşüyor. Koordinatör karar versin.

## galzay
- Slug: `kandehar` 200 · `afganistan` 200 · `isfahan` 200 · `galzaylar` / `galzay` / `hotakiler` / `mahmud-hotaki` / `mir-veys` 302. Arama "galzay" sonucunda müstakil madde çıkmadı.
- Başlangıç (f): künye 1709-04-21. TDV yalnız "1121'e (1709)" veriyor; hicrî sözleşmeyle 1709-03-13 çıkıyor → **FARK**. 21 Nisan günü TDV'de yok, kaynağı belirsiz ("standart akademik").
- Bitiş (t): künye 1738-01-01. TDV 1150 (1738) ∩ 1738 → 1738-01-01. Fark yok. Kuşatmanın Mart 1738'de bittiği yalnız Vikipedi'de geçiyor, kullanılmadı.
- İsfahan'ın Afganlarca alınma yılı (1722) TDV cümlesinde Safevî yenilgisini tarihliyor. Şehrin düşüş günü bulunamadı.
- Bulunamadı: Mahmud ile Eşref Hotakî'nin tahta çıkış yılları (TDV'de madde yok).

## yezd-atabegligi
- Slug: `yezd` 200 · `kakuyiler` 200 (Ahmet Güner) · `yezd-atabegleri` 302.
- Başlangıç (f): künye 1141-01-01. kakuyiler'de geçiş Katvân'a (536/1141) bağlanıyor, ama 536'yı taşıyan cümle Ferâmurz'un ölümünü tarihliyor, atabeg tayinini değil. Hicrî sözleşmeyle 1141-08-06 çıkıyor → hassasiyet farkı.
- 🔴 **TDV iç çelişkisi:** `yezd` maddesi Arslanşah döneminde (1161-1177) Yezd'i hâlâ kızların yönettiğini, Sâm'ın "daha sonra" atandığını yazıyor ⇒ kuruluş 1161'den sonra. Künye zaten bunu not etmiş.
- Bitiş (t): künye 1318-01-01. 718 ∩ 1318 → 1318-03-05 → **FARK (hicrî sözleşme)**.
- Bulunamadı: Salgurşah'ın Hülâgû'ya itaati (yılsız).

## tahiri-horasan
- Slug: `tahiriler--horasan` 200 (Hasan Kurt, 2010) · `tahir-b-huseyin` 200.
- Başlangıç (f): künye 821-01-01. TDV 205/821 ∩ 821 → 821-01-01. Fark yok.
- Bitiş (t): künye 0873-01-01. TDV "Şevval 259 (Ağustos 873)" → 873-08-01 → **FARK (ay biliniyor)**.
- Bulunamadı: idare merkezinin Merv'den Nîşâbur'a taşınma yılı. TDV bunu Abdullah b. Tâhir'e bağlıyor (830-844), yıl vermiyor.

## sacogullari
- Slug: `sacogullari` 200 (Ali İpek, 2008).
- Başlangıç (f): künye 0889-01-01. TDV 276 (889) ∩ 889 → 889-05-06 → **FARK (hicrî sözleşme)**.
- Bitiş (t): künye 0929-01-01, künye notu "gövdede son cümle ölçülmedi" diyor. TDV gövdesi: "Şâban 317 (Eylül 929)" → 929-09-09 → **FARK (ay biliniyor)**.
- Erdebil'in merkez oluşunun yılı bulunamadı (künyede "Merâga → Erdebîl" yazıyor). TDV Yûsuf'un "Erdebil'e döndü"ğünü yazıyor ama yıl vermiyor.

## eyyubi-meyyafarikin
- Slug: `meyyafarikin` 200 · `eyyubiler` 200 (hükümdar listesinde "4. Meyyâfârikīn, Cebel ve Sincar Kolu").
- Başlangıç (f): künye 1185-01-01. 581 ∩ 1185 → 1185-04-04 → **FARK (hicrî sözleşme)**.
- Bitiş (t): künye 1260-01-01. 658 ∩ 1260 → 1260-01-01. Fark yok.
- 🔴 **Kaynak çelişkisi:** `meyyafarikin` maddesi "658 (1260) yılına kadar" tutuldu, teslim "Hülâgû'nun Suriye seferinden sonra" diyor. `eyyubiler` maddesi ise Hülâgû'nun Meyyâfârikîn'i 1258'in "ertesi yıl"ı, yani **1259**'da aldığını söylüyor. Yer olgusu olduğu için yer maddesi (meyyafarikin) esas alındı.
- 1191 Artuklu arası: kaynak "kısa bir müddet" diyor, Eyyûbîlerin şehri geri alış tarihi bulunamadı.

## kerayit
- Slug: `cengiz-han` 200 (ilk denemede DNS hatası verdi, yeniden çekilince 200) · `kerayit` 302. Arama "kereyit" yalnız `tatarlar` maddesinde bir listede geçiyor.
- 🔴 **Doğuş: BULUNAMADI.** TDV'de kuruluş yılı yok. Künyenin f'si (1199) bir tanıklık yılı, kuruluş değil.
- Bitiş (t): 1203 TDV ile uyuşuyor. Fark yok.

## nayman
- Slug: `cengiz-han` 200 · `karahitaylar` 200 · `nayman` 302.
- 🔴 **Doğuş: BULUNAMADI.** Kuruluş yılı yok. f (1199) bir tanıklık yılı.
- Bitiş (t): 1204 TDV ile uyuşuyor. Fark yok. Ek maddeler: 1208 Güçlüg'ün kaçışı, 1211 Küçlüg'ün Karahıtay'a son vermesi (harita etkisi Karahıtay künyesinde).

## koco-uygur
- Slug: `uygurlar` 200 · `turfan` 200.
- Başlangıç (f): 911, TDV ile uyuşuyor. Bitiş (t): 1209, bağımsızlığın sonu olarak uyuşuyor.
- Devamın kaynakları çelişiyor: `uygurlar` "1368 yılına kadar Moğol idaresinde", `turfan` "1550'lere kadar bir şekilde". `turfan`daki 1353 rakamı Sangga'nın İdikut oluşunu tarihliyor, sülâlenin sonunu değil ⇒ İdikut sülâlesinin bitiş yılı bulunamadı.
- "850 dolaylarında" ve "XII. yy Karahıtay tâbiiyeti" ifadeleri yıl değil, yazılmadı.

## uygur-kaganligi
- Slug: `uygurlar` 200.
- 745 / 840 TDV ile uyuşuyor. Fark yok.
- Bulunamadı: Ordu-Balık'ın kuruluş yılı (TDV uygurlar'da yok).

## Özet sayılar
- 10 künye, 37 madde.
- Doğuşu bulunamayan: 2 (kerayit, nayman). Yıkılışı bulunamayan: 0.
- Künye ile kaynak arasındaki fark: 7 (zend t · galzay f · yezd t · tahiri t · sac f · sac t · eyyubi-meyyafarikin f). Ek olarak zend künyesinin `kaynak:` alanı yanlış ("TDV'de yok" diyor).


---
### G3

G3: Arabistan ve Levant (11 künye, 54 madde öneri)

Bütün gövdeler `tdv.py` ile 10 Ekim 2026'da çekildi, ham metin `g3/<slug>.txt` dosyalarında.
Hicrî yıl başları tabular takvimle hesaplandı (`g3_hicri.py`). 1582 öncesinde Jülyen gün kullanıldı.

## cebri
- Kaynak: TDV `cebriler` (200, Abdülkerim Özaydın).
- FARK f: künyede 1417-01-01, kaynakta 820/1417. 820'nin ilk günü 18.02.1417 (Jülyen), öneri bu gün.
- FARK t: künyede 1524-01-01, kaynakta 931/1524-25. 931'in ilk günü 29.10.1524 (Jülyen), öneri bu gün. Künyedeki 1524-01-01, 931 yılının dışına düşüyor.
- 1521-07-27: TDV günü veriyor (Mukrin'in ölümü ve Portekiz işgali).

## nebhani
- Kaynaklar: TDV `uman` (200) · TDV `yarubiler` (200). Ölü slug'lar (302): `nebhaniler`, `nebhani`, `bahla`, `yaariba`, `yariba`. TDV aramasında "nebhânî" ile hânedan maddesi çıkmadı, yalnız kişiler çıktı.
- DOĞUŞ BULUNAMADI. TDV `uman` "Bir süre Nebhânîler'in hâkimiyetinde kalan Uman" diyor ama tarih vermiyor. 1154 yılı yalnız Vikipedi ve popüler sitelerde geçiyor, akademik kaynakta bulunamadı. Künyedeki f:1281 zaten pencere başı.
- 🔴 FARK t, 100 YIL: künyede 1515-04-01 (Portekiz). TDV `yarubiler` Ya'rubîler'in "Nebhânîler'den sonra" 1024/1615'te (rivayete göre 1034/1624) kurulduğunu yazıyor. Yani Nebhânîler Portekiz kıyı işgalinden sonra içeride sürmüş olabilir.
- ÇELİŞKİ: TDV `uman` 1230'dan Portekiz işgaline kadar "Salgurlular"ın yönettiğini söylüyor. Bu, `yarubiler`in verdiği ardışıklıkla çelişiyor (künye özetinde de açık soru olarak duruyor).
- 1615 maddesi bir ardıl kanıtıdır. TDV Nebhânî sonunu bu yılla açıkça tarihlemiyor; harita kararı koordinatörde.

## benihalid
- Kaynaklar: TDV `halid-beni-halid` (200, Zekeriya Kurşun) · TDV `lahsa` (200). Ölü slug'lar: `benu-halid`, `beni-halid`.
- Künyedeki f 1670 ve t 1830 kaynakla yıl düzeyinde uyuşuyor, fark yok.
- ÇELİŞKİ: `halid-beni-halid` ilk tasfiyeyi 1795'e koyuyor. `lahsa` ise "bölge doğrudan Dir'iye'ye bağlandı (1796)" diyor. Polity maddesi daha dar kapsamlı olduğu için 1795 önerildi.
- Not: künyenin `kaynak:` alanında "lahsa" yazıyor, özetinde ise halid-beni-halid deniyor. Asıl kaynak halid-beni-halid.

## suud-ikinci
- Kaynaklar: TDV `suudiler` (200) · `necid` (200) · `suudi-arabistan` (200). Ölü slug: `suud-ailesi`.
- FARK f: künyede 1824-06-01; TDV yalnız 1824 veriyor, ay kaynaksız.
- FARK t: künyede 1891-01-24 (Müleyde); TDV yalnız 1891 veriyor, Müleyde savaşı TDV'de geçmiyor. Gün kaynaksız.
- Ek maddeler: 1834, 1837 (Mısır), 1843, 1871 (Lahsâ seferi, harita EVET).

## sani-emirligi
- Kaynak: TDV `katar` (200).
- DOĞUŞ (emirlik olarak) BULUNAMADI: TDV Âl-i Sânî'nin "1860'lı yıllardan itibaren" etkili olduğunu söylüyor, bu bir yıl değil. Künyenin başı olan 1871 Osmanlı kazası maddesi `tabiiyet` olarak yazıldı.
- FARK f: künyede 1871-09-20; TDV "1871 sonbaharında" diyor, gün kaynaksız. Kurala göre yıl verildi (1871-01-01).
- t 1913-07-29: TDV günü doğruluyor. Ancak antlaşma "yürürlüğe girmeyen" bir antlaşma; Osmanlı varlığı TDV'ye göre I. Dünya Savaşı ile fiilen bitiyor. Ek madde: 1916-11-03 İngiliz himayesi.

## sabah-emirligi
- Kaynak: TDV `kuveyt` (200; 2. bölüm Cevdet Küçük ve Mustafa L. Bilge).
- DOĞUŞ BULUNAMADI: TDV "XVIII. yüzyılın sonlarından itibaren kaymakamlar bu kabilenin şeyhlerinden" diyor, yıl yok. Künyedeki f 1795-04-01 kaynaksız (FARK).
- t 1914-11-22: TDV doğruluyor. Ancak bu gün Basra'nın ele geçirilmesini tarihliyor; himaye ilanı "Basra'yı ele geçirince" diye geçiyor (§4 ⑧).
- 1871 maddesinde yıl TDV `katar`dan alındı (aynı olay, Midhat Paşa'nın Lahsâ seferi). `kuveyt` maddesi bu olayı tarihlemiyor. 1871'de kaza kurulduğunu TDV `kuveyt` yazmıyor; künyedeki 1871 dönem kırılması kaynaksız.

## kuayti-sultanligi
- Kaynaklar: TDV `hadramut` (200) · TDV `yemen` (200). Ölü slug'lar: `kuaytiler`, `mukella`, `mukalla`, `sihr`.
- f 1881 kaynakla uyuşuyor (TDV "1881 sonunda").
- YIKILIŞ ZAYIF: TDV `yemen` yalnız "Güney Yemen ile Aden'in 1967'de bağımsızlığı" diyor ve Kuaytî'yi adıyla anmıyor. Bu yüzden 1967-01-01 yıl düzeyinde.
- FARK t: künyede 1967-11-30, gün akademik kaynakta doğrulanmadı. Britannica erişimi 403 verdi. Vikipedi'de sultan 17 Eylül 1967'de NLF tarafından devrilmiş görünüyor (tek dayanak olamaz). Yani künyedeki 30 Kasım günü sultanlığın değil Güney Yemen'in bağımsızlık günü olabilir; ölçülemedi.
- 1915 maddesi: TDV "Şibâm ile Şihr 1919'a kadar Osmanlı hâkimiyetinde kaldı" diyor. Bu, künyedeki kesintisiz İngiliz himayesiyle çelişiyor; harita HAYIR yazıldı, karar koordinatörde.

## lubnan-emirligi
- Kaynak: TDV `lubnan` (200; 4. bölüm "Osmanlı Dönemi", Ş. Tufan Buzpınar). Ölü slug'lar: `maniogullari`, `sihabiler`, `sihabi-ailesi`.
- Künyedeki f 1516-10 ve t 1842-01 kaynakla uyuşuyor (ay düzeyinde), fark yok.
- 1612-1613 seferi bir yıl değil (iki yıl), madde yazılmadı.
- Ek: 1832-1840 Mısır idaresi, künyedeki `tabi` alanında görünmüyor (yalnız Osmanlı yazıyor). Olası tabiiyet kırılması.

## cebel-i-lubnan-mutasarrifligi
- Kaynak: TDV `lubnan` (200). Künyedeki üç gün (1861-06-09, 1864-09-06, 1915-07-11) TDV'de birebir var.
- SINIFLANDIRMA FARKI: 1915'te protokol ilga edildi, ama TDV mutasarrıflığın Osmanlı tayinleriyle Eylül 1918'e kadar sürdüğünü (Ali Münif, İsmâil Hakkı, Mümtaz Bey) ve Lübnan'ın Ekim 1918 başında işgal edildiğini yazıyor. Künyedeki t 1915 özerk statünün sonu; polity olarak devam 1918'e kadar. Karar koordinatörde.

## harfusogullari
- Kaynaklar: TDV `harfus` (200; hânedan alt bölümü) · `balebek` (200) · `canbirdi-gazali` (200).
- DOĞUŞ BULUNAMADI: TDV "Canbirdi'nin isyanı esnasında Ba'lebek bölgesine yerleştiler" diyor. İsyan Kasım 1520'den 27 Ocak 1521'e kadar sürüyor (`canbirdi-gazali`), yani iki yıla yayılıyor ve tek yıl verilemez. Künyedeki 1521 bir çıkarım.
- ÇELİŞKİ: TDV `balebek` "1516'da Osmanlı hâkimiyetine geçti. Bu tarihten itibaren ... özellikle Harfûş ailesinin elinde kaldı" diyor. `harfus` ise yerleşmeyi 1520-21'e koyuyor.
- YIKILIŞ ZAYIF: `harfus` yalnız "XIX. yüzyılın ortalarına kadar" diyor. 1850 yılı `balebek`teki kaza düzenlemesinden geliyor; bu bir yer olgusu, Harfûş'un sonunu açıkça tarihlemiyor (künyenin kendi notu da bunu kabul ediyor).

## suriye-arap-kralligi
- Kaynaklar: TDV `sam--suriye` (200) · `suriye` (200) · `faysal-i` (200, Mustafa L. Bilge). `meysulun` ve `faysal-b-huseyin` slug'ları künye notuna göre ölü, yeniden denenmedi.
- Künyedeki f 1918-10-01 ve t 1920-07-25 TDV ile uyuşuyor, fark yok.
- ÇELİŞKİ: TDV `faysal-i` "Fransız birlikleri 14 Temmuz 1920'de Şam'ı işgal edip" diyor. `sam--suriye` 25 Temmuz 1920 veriyor. Daha dar kapsamlı olduğu için yer maddesi (`sam--suriye`) esas alındı.
- Meysülun: TDV `suriye` yalnız "Temmuz 1920" veriyor. 24 Temmuz günü yalnız künyedeki Lawson atfında var; bu oturumda yeniden doğrulanmadı ve ayrı madde olarak yazılmadı.


---
### G4

G4 — KAMP-EKSIK-KRONOLOJI (11 künye, 33 madde)

Hicrî günler: tablo usulü (aritmetik) takvimle hesaplandı, 1582 öncesi Julyen; ±1-2 gün kayabilir. Kural: hicrî aralık ∩ kaynağın mîlâdî yılı, ilk gün.

- **idrisi** · TDV `idrisiler` (200) · 6 madde (789 · 922 · 925 · 935 · 974 · 985). FARK: künye `t:0985-01-01` ↔ hicrî 375 kuralı **0985-05-24** (375 hicrî yılı 985-05-24'te başlıyor; 01-01 kaynağın dışladığı gün). `f:0789-01-01` kurala uyuyor. Ara kesinti 925-935 (Fas Fâtımî elinde, merkez Hacerünnesr) ve 974-984 (II. Hasan Endülüs'te) künyede kesintisiz — BEYAN edilmeli. II. İdrîs'in Fas'ı başşehir yapması: yıl yok → bulunamadı.
- **magrave-sicilmase** · TDV `magrave` (200, "Sicilmâse Mağrâveleri" bölümü — künyenin "Benî Hazrûn maddesi yok" notu artık geçersiz) + `sicilmase` (200) · 5 madde. FARK: `f:0976-01-01` ↔ hicrî 366 → **0976-08-30**; `t:1053-01-01` ↔ hicrî 445 → **1053-04-23**. Öncül `midrari` `t`'si ile zincir BİRLİKTE kaydırılmalı. Boşluk: 979 (Hazrûn'un ölümü, Vânüdîn şehri terk etti — terk yılı yok) → 1000 (geri alma); künye bu arayı kesintisiz sayıyor. `magraveler`, `hazrunogullari` 302.
- **ammarogullari** · TDV `ammarogullari--trablusgarp` (200) · 6 madde. f/t kaynakla uyumlu. FARK künyenin iç kronolojisinde: Cerbe `1347` ↔ TDV 747/1346-47 → **1346-04-24**; Ebû Bekir'in dönüşü `1371` ↔ TDV 772/1370-71 → **1370-07-26**. 1355-1370 arası Trablus Ceneviz / Mekkî elinde (künye kesintisiz). "(1394)" Ebû Fâris'in tahta çıkış yılıdır, Trablus'un alınışı değil — madde yazılmadı.
- **konstantin-beyligi** · TDV `kostantine` (200) + `cezayir` (200) · 4 madde. `ahmed-bey` (200) TUNUS Hüseynî beyidir, başka kişi (tuzak ②); `ahmed-bey-kostantine` 302. FARK: `t:1844-03-04` kaynaksız ↔ TDV şehrin düşüşü **1837-10-13**, Ahmed Bey'in teslimi **1848** (TDV cezayir). Kuruluş: TDV yalnız "1830'da" diyor; gün (07-05) Cezayir'in işgal günüdür (TDV cezayir) — beyliğin kendi günü değil, metinde beyan edildi. 1836 saldırısının ayı (Kasım) TDV'de yok → yıl.
- **rabih** · TDV `cad` · `bornu` · `bagirmi` · `orta-afrika-cumhuriyeti` (hepsi 200); `rabih`, `rabih-b-zubeyr` 302 · 4 madde. ÇELİŞKİ ①: Bornu'nun alınışı TDV bornu **1893** ↔ TDV orta-afrika Kûka **1894** (daha dar kapsamlı yer maddesi bornu esas alındı, iki taraf metinde). ÇELİŞKİ ②: ölüm yeri TDV cad **Dikoa** ↔ Britannica **Kousseri**; gün 22 Nisan 1900 TDV orta-afrika'dan. TDV orta-afrika Râbih'in Dikeo'yu "1885 yılına kadar" başşehir edindiğini söylüyor — yaklaşık, yazılmadı. Künye f/t TDV ile uyumlu.
- **darul-kuti** · TDV `orta-afrika-cumhuriyeti` (200); `dar-el-kuti`, `darulkuti`, `dar-kuti`, `senusi`, `muhammed-es-senusi` 302 · 1 madde (1890 kuruluş — künye "TDV'de yok" diyordu, TDV VAR). **Yıkılış BULUNAMADI:** Senûsî'nin ölümü için yalnız Vikipedi, rulers.org/worldstatesmen (kaynaksız derleme) ve yerel haber sitesi bulundu (11 ya da 12 Ocak 1911); Cordell 1985 kitabı okunamadı, UNESCO/Britannica 403. FARK: künye `t:1911-04-12` hiçbir kaynakla eşleşmiyor (bulunan adaylar Ocak 1911). 1900 sonrası Fransızlarla anlaşmanın yılı TDV'de yok.
- **damagaram** · TDV'de madde yok (`zinder` 302; arama 6 aday, hiçbiri hânedan tarihi vermiyor) · Britannica `Zinder` (WebSearch özeti) · 1 madde (1899 Fransız işgali). **Doğuş BULUNAMADI:** Britannica yalnız "18. yüzyılda kurulan hânedan"; 1731/1736 yalnız Vikipedi + popüler sitelerde. FARK: künye `f:1731-01-01` kaynaksız. 13 Eylül 1899 günü kabul edilebilir kaynakta doğrulanamadı.
- **suve-emirligi** · TDV `etiyopya` + `evfat` (200) · 2 madde. FARK: `t:1285-01-01` ↔ hicrî 684 → **1285-03-09**; ardıl `evfat` künyesi `f:` ile BİRLİKTE kaydırılmalı. TDV etiyopya "1280-1285 arasında" (aralık), evfat 684/1285 (daha dar) esas.
- **rif-cumhuriyeti** · TDV `abdulkerim-el-hattabi` (200, Ercüment Kuran) + `fas` (200) · 2 madde. FARK: `t:1926-05-27` ↔ TDV fas esir alınma **1926-05-21** (Britannica'da 26/27 Mayıs rivayeti var). `f:1921-09-19` TDV ile uyumlu. Not: TDV Annual'ı "22 Haziran 1921" yazıyor (yaygın tarih 22 Temmuz) — Rif künyesinden önce, madde yazılmadı; TDV iç tutarlılığı ÖLÇÜLEMEDİ.
- **tunciler** · TDV `darfur` · `veday` · `sudan` (200); `tuncur`, `tuncurlar` 302 · 2 madde (1635 Vedây kaybı — 1611 rivayeti de var; 1695 Solonc'un saltanat başı). **Doğuş BULUNAMADI:** TDV yalnız "XV. yüzyılda" (darfur) / "XV. yüzyılın sonlarında" (sudan) — yıl değil. FARK: künye `f:1400-01-01` kaynaksız; iç kronolojideki `1690-01-01` maddesi TDV'nin "XVII. yüzyıl sonları"ndan YAKLAŞIK yerleştirilmiş (kural ihlali, düşürülmeli).
- **dacu** · TDV `darfur` + `sudan` (200); `daju`, `dacu` 302 · 0 madde. **Doğuş ve yıkılış BULUNAMADI:** TDV yalnız "XIII ve XIV. yüzyıllar boyunca"; iktidarın Tuncûrlar'a geçişi darfur'da "XV. yüzyılda", sudan'da "XV. yüzyılın sonlarında" (iki TDV maddesi kendi aralarında çelişiyor). FARK: künye `f:1200-01-01` / `t:1400-01-01` ikisi de kaynaksız (yüzyıl uzlaşımı).


---
### G5

G5 — KAMP-EKSIK-KRONOLOJI (Balkan · Kafkas · Orta Asya · fetret)

11 künye · 43 madde (`G5.csv`). TDV metinleri `tdv.py` ile çekildi (HTTP kodları aşağıda), önbellek `G5_cache/`.
Hicrî → mîlâdî çevrimi tablo usulü; 1582 öncesi **Jülyen** verildi (atlasın hicrî çevirme sözleşmesinde Jülyen/Gregoryen seçimi yazılı bulunamadı — koordinatör kontrol etsin).

## fetret-isa
- Kaynak: TDV `isa-celebi` (Nezihi Aykut) HTTP 200.
- Künye f 1403-01-01 ↔ kaynak: hâkimiyet **Kasım 1402** (ay), "Türkler'in hükümdarı" tanınması Ocak 1403 (ay). **FARK:** kuruluş Kasım 1402'ye çekilebilir.
- Künye t 1403-09-01 ↔ kaynak: ölüm günü YOK; Clavijo Eylül 1403'te "artık hayatta değil" der → t bir **üst sınırdır**, ölüm tarihi değil (künyede bu beyan edilmeli).
- Bulunamadı: Ulubat yenilgisi ve Bursa'nın ikinci kez alınması ("1403 baharı" ay değil) için tarih. Timur'a bağlılık 16 Aralık 1402'den "hemen sonra" → gün değil, yazılmadı.

## sarki-rumeli
- Kaynak: TDV `berlin-antlasmasi` (Gencer) 200 · `bulgaristan` 200 · `abdulhamid-ii` 200 · `filibe` 200. Ölü slug: `sarki-rumeli`, `dogu-rumeli`, `rumeli-i-sarki`, `tophane-antlasmasi` (302).
- f 1878-07-13 TDV ile birebir. t 1885-09-18: TDV yalnız **YIL** (1885) verir; gün BTA'dan (Bulgaristan resmî ajansı, Birleşme Günü 6 Eylül, Jülyen → 18 Eylül Gregoryen; çevrim benim). Künye kaynak alanı "yetersiz" diyor, artık TDV berlin-antlasmasi dayanak olabilir.
- Bulunamadı: Tophane Antlaşması (5 Nisan 1886) için akademik dayanak (yalnız Vikipedi) → madde yazılmadı.

## garbi-trakya
- Kaynak: TDV `bati-trakya` (Halaçoğlu, Eren) 200.
- **FARK (anlam):** TDV'ye göre 31 Ağustos 1913 = Gümülcine merkezli **Hükûmet-i Muvakkate** ilanı; "Müstakille" adıyla bağımsızlık Dedeağaç alındıktan SONRA ve günü YOK. Künye kronolojisi bağımsızlık ilanını 31 Ağustos'a yazıyor → metin düzeltilmeli. t 1913-10-25 = teslim için şart koşulan tarih (TDV), fiilî teslim günü değil.

## kibris-krallik
- Kaynak: TDV `kibris` (Demirkent tarih bölümü; Karakaya mimari bölümü) 200. Ölü: `kibris-krallik`, `lusignan`.
- f 1192: Demirkent yıl vermez (satın almayı anlatır), Karakaya "Lüzinyanlar dönemi (1192-1489)" der → yıl yalnız bu parantezden. Kral unvanı 1197 (Amaury).
- **FARK:** künye kronolojisi Hirokitia için **1426-07-07** gün yazıyor; TDV yalnız **1426** yılını verir (gün TDV'de yok, künye de "doğrulanmalı" diyor).
- t 1489-02-26 TDV ile birebir. Ek: Memlük Sultanı Kayıtbay devri Şubat 1490'da kabul etti (Venedik'e ait, polity dışı).

## kumuk-samhalligi
- Kaynak: TDV `kumuklar` (Kurtuluş) 200 · `lekler` (Mustafa Aydın) 200 · `kafkasya` 200 · `osman-pasa-ozdemiroglu` 200 (tarih yok). Ölü: `samhal`, `ozdemiroglu-osman-pasa`.
- f 1578-11-01 ↔ TDV lekler "1578'de Osmanlı hâkimiyetine girdiler" (**YIL**) → künye **gün 11-01 kaynaksız**; YIL destekleniyor.
- t 1607-01-01: Osmanlı tâbiiyetinin sonu **bulunamadı** (kumuklar, lekler, dagistan, kafkasya maddelerinde yok).
- **ÇELİŞKİ:** şemhalliğin Ruslarca kaldırılması — `kumuklar` **1725** · `lekler` Âdil Giray'ın 1722'den "bir yıl sonra" yakalanmasının "hemen arkasından" (≈1723, açık yıl yok). Daha dar kapsamlı madde `kumuklar` (polity maddesi) → 1725 yazıldı.
- Hicrî: 986 = 10 Mart 1578 – 27 Şubat 1579 (Jülyen); kesişim ilk günü 1578-03-10.

## kuba-hanligi
- Kaynak: TDV `kuba--azerbaycan` (Aliev) 200. Gün: Azerbaycan Dışişleri Bakanlığı Gülistan metni (PDF okundu) — "29 Shavval 1228" (tablo çevrimi 25 Ekim 1813, ±1) ve "2nd of October" (Jülyen 12 Ekim'in eksik yazımı gibi görünüyor — **metin kendiyle çelişiyor**); Iranica 403. 24 Ekim künyedeki değer, hicrî gün onu ±1 içinde destekliyor.
- **Kuruluş bulunamadı:** TDV "XVII. yüzyılın sonlarına doğru" der → yıl değil. f 1735 kuruluş DEĞİL, merkez taşınması (künye zaten beyan ediyor).
- Mayıs 1796: Kuba'nın işgali "az sonra" → madde Derbend işgalinin ayıyla yazıldı.

## harezm-halk-cumhuriyeti
- Kaynak: TDV `hive-hanligi` (Saray) 200 · `harizm` (Özaydın) 200.
- f 1920-04-26 birebir. t 1924-01-01 = kaynak YIL (1924); gün bulunamadı. Ek: 5 Eylül 1921 ad değişikliği (Hârizm SSC).

## buhara-halk-cumhuriyeti
- Kaynak: TDV `buhara` (Şeşen) 200 · `ozbekistan` (Muhammedcanov) 200.
- **FARK f:** künye 1920-10-08 (Vikipedi) ↔ TDV hanlığın ilgası **6 Ekim 1920**; cumhuriyetin ilan günü TDV'de yok. Kuruluş maddesi 6 Ekim'e yazıldı.
- **FARK (özet):** künye özeti işgali "2 Eylül 1920" diyor ↔ TDV "1920 Ağustos sonu".
- **FARK t:** künye 1924-10-27 ↔ TDV "Ekim 1924" (**AY**); gün kaynaksız.

## hatay-devleti
- Kaynak: TDV `antakya` (Sahillioğlu) 200 · `hatay` 200 (yalnız "bk. ANTAKYA" yönlendirmesi).
- f/t (1938-09-02 · 1939-06-23) TDV ile birebir. Ek: 29 Mayıs 1937 anayasa, 5 Temmuz 1938 Türk birlikleri.

## topia
- Kaynak: TDV `kruya` (Machiel Kiel) 200 · `arnavutluk` (Bilge) 200 (Thopia geçmiyor).
- f 1363 · t 1415 TDV ile birebir (YIL). 1402 geri alma: yıl Balšić'in ölümüne ait, geri alma "bunun üzerine" diye bağlanıyor (metinde beyan edildi).
- Künye kronolojisi 1394 maddesini "toprak-kayip" sayıyor; 1393 Barbadigo'nun Osmanlı'ya tâbiiyeti künyede YOK → eklendi.

## dukagin
- Kaynak: TDV `les` (Machiel Kiel) 200 (ilk denemede DNS hatası `getaddrinfo`, ikincide 200) · `iskender-bey` 200 · `dukakinzade-ahmed-pasa` 200 (prenslik bilgisi yok). Ölü: `dukakin`, `dukakinoglu`, `dukakin-sancagi`.
- f 1387 birebir. **Yıkılış bulunamadı:** TDV prensliğin sonu için tarih vermiyor; künye t 1479-01-25 bir hizalamadır (künye bunu beyan ediyor). 1468'den "sonra" ailenin bir kısmı Osmanlı hizmetine girdi → yıl değil.
- **FARK:** künye kronolojisi Leş toplantısını 1444-03-02 diye yazıyor ↔ TDV `iskender-bey` "**1 Mart 1444**", TDV `les` "1444 Martında". Dukagin'in katıldığı TDV'de adıyla geçmiyor → madde yazılmadı.

## Özet
- Doğuş bulunamadı: **1** (kuba-hanligi). Yıkılış bulunamadı: **1** (dukagin) + kumuk-samhalligi'nin Osmanlı tâbiiyet sonu (künye t 1607) bulunamadı; kumukta yıkılış olarak 1725 yazıldı.
- Künye-kaynak fark sayısı: **9** — fetret-isa f · fetret-isa t (üst sınır) · garbi-trakya bağımsızlık ilanının günü · kibris Hirokitia günü · kumuk f günü · buhara f · buhara özetteki 2 Eylül · buhara t günü · dukagin Leş 1/2 Mart.


---
---

# TUR 2 — N–Z YARISI (11 Ekim 2026, koordinatörün iş bölümü)

Koordinatör (send_message, 11 Ekim): 228'in **alfabetik ikinci yarısı (N–Z)** bende, ilk yarı
`KAMP-EKSIK-KRONOLOJI`de. Taban: `main` dd86575c (geride 0); liste yeniden ölçüldü — **yine 228**, id kümesi aynı.

## T2.1 Dikiş — HARF bölümü
Sıralama ölçütü künye `id`si (ASCII; Türkçe harf id'de yok — "Şavni" id=`savni` ⇒ N–Z). İlk harfe göre:
**a–m 132 · n–z 96.** Dikiş: `…mikmak · mohave · mutahharten | nahua-sehir-devletleri · nama-orlam · natchez…`
⚠️ "Yarı" SAYIYLA (114/114) okunursa sınır `kutai | liptako` olur ⇒ `liptako`→`mutahharten` arasındaki
**18 künye** iki okumanın arasında kalır. HARF bölümü uygulandı; teyit istendi (tahta M-5933 · M-5934).

## T2.2 N–Z evreni
| | künye |
|---|---|
| N–Z toplam | 96 |
| öteki oturumun (A) KRONOLOJI.csv'sinde zaten var | 21 |
| benim TUR 1'imde zaten var | 21 |
| **TUR 2 yeni iş** | **72** |

## T2.3 Sonuç — 218 madde · 69 künye
6 alt-grup (H1 K.Amerika-A 14 · H2 K.Amerika-B + Mezoamerika + Ranquel 13 · H3 Güney/Doğu Afrika 13 ·
H4 Batı/Orta/K. Afrika + Madagaskar 14 · H5 Habeşistan + Endonezya + Sri Lanka + Okinawa 9 ·
H6 Çin + Tuva + Okyanusya + Avrupa 9). Toplanan **225** madde; biçim denetimi (`birlestir2.py`) **kusur 0**.
**7 satır ŞERHLİ kovaya alındı** (aşağıda) ⇒ teslim **218 madde · 69 künye**.
**Madde 0 olan künye (3):** toltek · zerma · tui-tonga-imparatorlugu (tek maddesi şerhli kovaya gitti — aşağıda) ⇒ 72 − 3 = 69.
Dağılım (225 üzerinden): kesinlik gün 126 · yıl 81 · ay 18 · hicrî 0 · `harita_degisimi` EVET 138 / HAYIR 87.
Kaynak: TDV 30 satır (İslâm dünyasına girenlerde birincil); kalanlar antlaşma metinleri (Kappler/OSU,
GPO 1912 Executive Orders, Bloemfontein/Vereeniging metinleri), eyalet/kurumsal ansiklopediler (Oklahoma,
Virginia, NCpedia, MNopedia, Mississippi, 64 Parishes), NPS idari tarihleri, Library of Congress, Dictionary of
Canadian Biography, UVic Colonial Despatches, INAH/UNAM, Encyclopédie berbère/Journal des africanistes
(OpenEdition), Treccani, Store norske leksikon/Stortinget, NDB/ADB, SAHO, hakemli dergiler.
**Vikipedi ve Britannica hiçbir satırda dayanak değil** (Britannica ve Canadian Encyclopedia bu makineden 403 — okunamayan
kaynak yazılmadı). Elle örneklem: Encyclopedia Virginia "March 22, 1622" ✓ · LoC In Custodia Legis "August 10, 1680" ✓.

### ŞERHLİ — ana CSV'den ÇIKARILAN 7 satır (kaynakları yalnız derleme site / hobi aktarımı / 3. el özet)
| polity | tarih | olay | sebep |
|---|---|---|---|
| oranj | 1854-04-10 | anayasa kabulü | yalnız Archontology.org (derleme; dayandığı Volksraad Notulen okunmadı) — SAHO 7 Nisan der: ÇELİŞKİ açık |
| oranj | 1900-05-28 | Oranj Irmağı Kolonisi ilhakı | yalnız Archontology.org |
| transvaal | 1880-12-16 | Paardenkraal'da cumhuriyetin yeniden ilanı | yalnız Archontology.org |
| transvaal | 1884-02-27 | Londra Konvansiyonu | Archontology + angloboerwar.com (hobi sitesi aktarımı) |
| transvaal | 1900-06-05 | Pretoria'nın işgali | yalnız Archontology.org |
| transvaal | 1900-09-01 | ilhak | yalnız Archontology.org (dayanağı Gazette No.15 okunmadı) |
| tui-tonga-imparatorlugu | 1865-01-01 | son Tuʻi Tonga'nın ölümü | Yale eHRAF'ın Collocott 1924 ÖZETİ (HRAF metni, Collocott'un kendisi okunmadı) |
⇒ Hüküm koordinatörde: Archontology kabul edilirse 6 satır geri girer; dayandığı gazeteler okunursa kesinleşir.
Satırlar scratchpad'de `TUR2_SERH.csv` (istenirse denetim/'e alınır).
Tutulan satırlarda bilinçli kabul: Wikisource'taki ANTLAŞMA METNİ aktarımları (MacFadyen 1898 derlemesi —
birincil metin) ve `npshistory.com` (NPS idari tarihlerinin arşiv kopyası; resmî belge) — ikisi de şerhli değil.

### Uçlar (tur alanına göre, tutulan 218 satırda)
- **Kuruluş maddesi YOK — 48 künye:** nahua-sehir-devletleri nama-orlam natchez ngoni ojibwe ovimbundu pavni payut
  pedi ponka powhatan purepecha-imparatorlugu ranquel rapa-nui sahaptin sakalava-boina sanzan sauk savni secwepemc
  sidamo-kralliklari solima-yalunka svazi tidore-sultanligi tiv tlingit toltek tsvana tuareg-accer tuareg-adag
  tuareg-ahaggar tubu-tibesti tui-tonga-imparatorlugu tungning tututepec-krallik ute venda vendat vollayta-kralligi
  xhosa yafna yao yavapai yeke yupik zapotek-krallik zende zerma.
  📌 Bu bir kusur değil ÇOĞUNLUKLA BİR SINIFTIR: künyelerin büyük kısmında `f:1281-01-01` pencere başıdır,
  kuruluş değil; bir halkın kaynaklı "kuruluş günü" yoktur ve uydurulmadı (`§4` ①). İlk yazılı anılış / ilk temas
  bulunanlarda `diger` ya da `kurulus` dışı tur olarak yazıldı.
- **Yıkılış maddesi YOK — 13 künye:** nuu-cah-nulth (künyenin olayı YANLIŞ: 1858 BC Yasası Vancouver Adası'nı
  dışlar) · piombino (künyenin 1548'i yanlış; Appiani 1634'e dek) · pontianak · rozvi (Beach: hânedan 1873'e dek) ·
  solima-yalunka (kimlik doğrulanmadı) · tidore-sultanligi · toltek · tonga-kralligi (devlet sürüyor — uygulanamaz) ·
  tsvana · tui-tonga-imparatorlugu (tek yıkılış adayı şerhli) · yogyakarta · zapotek-krallik · zerma.
  ⚠️ Alt-grup raporlarının "yıkılış bulunamadı" sayıları (toplam 8) bu listeden küçük: bazı künyelerde son madde
  `tabiiyet`/`diger` turuyla yazılmış (ör. tsvana 1885 himaye). Fark ADIYLA burada; hangisinin "yıkılış" sayılacağı
  yazıcının/koordinatörün sınıflandırmasıdır.

### En ağır künye bulguları (künye düzeltme sevki için — ayrıntı alt-grup raporlarında)
- **piombino** `t:1548` yanlış (geçici Medici işgali; iade 1557, Appiani 1634'e dek) · `f` 13 Şubat 1399 (künye 19 Şubat).
- **nuu-cah-nulth** `t:1858-08-02` yanlış olaya bağlı (BC Yasası VI. bölüm Vancouver Adası'nı dışlar; doğru olay 1849).
- **rozvi** `t:1834` — Beach (JAH 1974) Changamire hânedanını 1873'e dek gösterir.
- **nama-orlam** `t:1904-10-03` "Witbooi'nin ölümü" diye geçiyor — o gün savaş ilânıdır; ölüm 29 Ekim 1905.
- **ranquel** `t:1883` — iki hakemli makale 1879.
- **yao** `t:1899` — TDV: direniş 1912'de biter. **toro** `f:1830` — TDV 1822.
- **tannu-tuva** künyesi "TDV kapsam dışı" diyor — TDV `tuva` maddesi VAR (200) ve günleri veriyor.
- **nahua-sehir-devletleri** künye-içi 1428 maddesi **History.com**'a dayanıyor — kırmızı çizgi ihlali, düşürülmeli.
- **transvaal** künyesi 1877-1881 İngiliz ilhakı aralığını göstermiyor.
- Kaynak çelişkileri (iki taraf yazılı): Angola bağımsızlığı TDV 11.09.1975 ↔ akademik 11 Kasım · tuareg-accer
  TDV 1911 ↔ 1918-10-28 · natchez 1730/1731 · navaho ilk anılış 1626/1629 · yavapai 1871 ↔ 1873 ·
  pontianak 23 Ekim ↔ 23 Kasım 1771 · oranj anayasa 7 ↔ 10 Nisan 1854.

## T2.4 Alt-grup raporları (olduğu gibi)


---
### H1

H1 — Kuzey Amerika yerli halkları (TUR 2) · 14 künye · 51 madde

Ölçüm: 11 Ekim 2026, bu makine. TDV evreni dışında, hiçbiri İslâm dünyasına girmiyor ⇒ TDV aranmadı.
Erişim: treaties.okstate.edu (Kappler) 200 · okhistory.org 200 · biographi.ca (DCB) 200 · bcgenesis.uvic.ca 200 ·
ncpedia.org 200 · encyclopediavirginia.org 200 · mississippiencyclopedia.org 200 · mnopedia.org 200 ·
rcaanc-cirnac.gc.ca 200 · presidency.ucsb.edu 200 · npshistory.com 200 · nps.gov/manz 200 ·
nps.gov/parkhistory/online_books → bugün genel sayfaya yönleniyor; aynı sayfaların web.archive.org (2019) kopyası okundu.
❌ OKUNAMAYAN (kaynak gösterilmedi): oregonencyclopedia.org 403 (Cloudflare) · loc.gov katalog kaydı 403 ·
newmexicohistory.org DNS hatası · ubcic PDF 403 · Vikipedi hiçbir satırda dayanak değil.

## natchez
- Kaynak: Mississippi Encyclopedia 'Natchez Indians' (James F. Barnett Jr.) 200 · 64 Parishes 'Natchez Revolt of 1729' (Kelby Ouchley) WebFetch ok · OHS 'Natchez (tribe)' (Sheldon Yeakley) 200.
- Künye t:1731-01-01 — 64 Parishes "in the fall of 1731" esir alınma/köle satışı ⇒ YIL tutuyor (ay yok).
- 🔴 ÇELİŞKİ: OHS esir alınmayı **1730, Natchitoches yakını** diye verir; 64 Parishes **1731 sonbahar**. Künye kaynak alanı da "1730" diyor. Tercih yapılmadı, CSV satırında iki taraf yazılı. (LOC harita kaydının "20-25 Ocak 1731" bilgisi yalnız arama özetinde görüldü, sayfa 403 ⇒ KULLANILMADI.)
- Doğuş **bulunamadı**: Mississippi Ency. La Salle seferini YILSIZ anar ("less than 150 years later"); ilk Avrupa temasının yılı okunan kaynakta yok. 1716 Fort Rosalie `diger` olarak yazıldı.
- 1729-11-28 künye kronolojisindeki günle birebir; 1730-02 (Choctaw kuvveti) künyedeki 1730-02-01 ile ay düzeyinde örtüşür.

## navaho
- Kappler 1849 (200) ve 1868 (200) · NPS Canyon de Chelly Adm. History Ek 5 (npshistory 200) · Luomala (npshistory 200).
- Künye t:1868-06-01 ✓ Kappler "on the first day of June, 1868" (Fort Sumner).
- Doğuş 1626 ("Apaches de Nabaju", Zárate Salmerón). 🔴 ÇELİŞKİ: Luomala aynı anılışı **1629**'a koyar. NPS kronolojisi esas alındı, iki taraf satırda.
- Ek: 1849-09-09 antlaşmasıyla Navaho ABD yargı yetkisini TANIDI (tabiiyet) — künyede yok. 1864-01 Carson Canyon de Chelly harekâtı (ay); künyedeki "1864-01-01 Uzun Yürüyüş" yıl kodlu, kaynak ay veriyor.

## nez-perce
- NPS L&C Survey site5 (web.archive 200) · Kappler 1855 & 1863 (200) · OHS 'Nez Perce' (Westmoreland) 200 · NPS NEPE Adm. History prologue 200.
- Doğuş 1805-09-20 Weippe Prairie (ilk belgeli temas).
- 🟡 FARK: künye t:**1877-10-05** — okunan iki kaynak (OHS, NPS) yalnız **Ekim 1877** diyor ⇒ CSV'de 1877-10-01 `ay`. 5 Ekim günü bu turda DOĞRULANAMADI (künye günü kaynak değildir).
- 1855-06-11 ✓ künye kronolojisiyle birebir. Ek: 1863-06-09 daraltma antlaşması, 1878 Oklahoma sürgünü.

## nuu-cah-nulth
- DCB 'Pérez Hernández' (Warren L. Cook) 200 · DCB 'Muquinna' (Robin A. Fisher) 200 · bcgenesis Nootka Sound / Friendly Cove / Muquinna 200.
- Doğuş 1774-08-09: Pérez Nootka Sound'u 8 Ağustos'ta görür, ertesi gün Nootka'larla ticaret (ilk belgeli temas).
- 🔴 KÜNYE HATASI (ölçüldü): künye t:1858-08-02 "Britanya Kolumbiyası Kolonisi" — 1858 Yasası **§VI açıkça "No Part of the Colony of Vancouver's Island … shall be comprised within British Columbia"** der (primarydocuments.ca metni). Nuu-chah-nulth Vancouver Adası batı kıyısındadır ⇒ o tarih bu halkın egemenlik kaybı DEĞİLDİR. Doğru olay Vancouver Adası Kolonisi'nin kuruluşu (HBC'ye Kraliyet bağışı, 1849) olmalı; ama bağışın GÜNÜNÜ veren metni okuyamadım (bcgenesis'te yalnız 6 Şubat 1849 Avam Kamarası talebi var ⇒ bağış o günden önce) ⇒ **yıkılış bulunamadı**.
- Künyedeki "1789-05-05 İspanyollar Yuquot'a yerleşti" ve "1790-10-28 Nootka Sözleşmesi" bu turda doğrulanmadı; DCB yalnız 1795 İspanyol çekilişini veriyor (eklendi).

## nuxalk
- DCB 'Mackenzie, Sir Alexander' 200 (yazar adı sayfada okunmadı) · bcgenesis Bella Coola / British Columbia 200 · primarydocuments.ca 1858 Yasası metni.
- Doğuş 1793-07-17 Friendly Village (künyedeki 1793-07-22 Dean Channel yazıtının günüdür — o Nuxalk teması değil, kayaya yazılan yazıt; DCB ikisini de verir).
- Künye t:1858-08-02 ✓ Yasanın başlığı "[2d August 1858]"; Bella Coola ana karada ⇒ kapsamda. Not: koloni Fort Langley'de **19 Kasım 1858**'de ilan edildi (bcgenesis) — hangisinin "son" sayılacağı koordinatör hükmüdür; ikisi de CSV'de.

## occaneechi
- NCpedia 'Occaneechi Indians' (R. P. Stephen Davis Jr.) 200 · Encyclopedia Virginia 'Bacon's Rebellion' 200 (ncpedia/occaneechi ve ev/occaneechi-indians 404).
- Doğuş 1650 (Edward Bland'a anlatılan ilk kayıt). Künye t:1676 ✓ yıl (gün yok).
- 🟡 FARK: künye `baskent:"Occaneechi (Hillsborough)"` — kaynak Hillsborough/Eno köyünü **1676 SONRASI** göç yeri olarak verir; 1676 öncesi merkez Roanoke adasıdır (Clarksville, Va.). Ayrıca halk 1712'ye dek Eno'da, 1728'e dek kayıtta yaşar ⇒ t:1676 "dağıtıldılar" değil "adayı kaybettiler"dir. Künye kronolojisindeki "1670 aracı konum" maddesi kaynağın "1660s and 1670s" ifadesine dayanıyor — YIL değil.

## ojibwe
- Kappler 1837 & 1854 (200) · MNopedia 'Treaty of La Pointe, 1854' 200 · CIRNAC Robinson-Superior metni 200 · DCB 'Daumont de Saint-Lusson' (Léopold Lamontagne) 200.
- Künye t:1850-09-07 ✓ ("seventh day of September … 1850, at Sault Ste. Marie").
- Doğuş **bulunamadı**: ilk Avrupa temasının yılı okunan kaynakta yok. 1671-06-04 Sault Ste. Marie egemenlik töreni `diger` olarak yazıldı (Ojibwe'nin merkezi; DCB katılan 14 ulusu adıyla saymaz).

## pavni
- Kappler 1833 & 1857 (200) · OHS 'Pawnee (tribe)' (Douglas R. Parks) 200.
- Künye t:1857-09-24 ✓ (Table Creek). Künye kronolojisindeki "1833-01-01" → kaynakta GÜN var: **1833-10-09** (Grand Pawnee köyü).
- Doğuş **bulunamadı** (OHS ilk temas yılı vermiyor; 1831 misyoner gelişi var, doğuş sayılmadı).

## payut
- NPS Manzanar 'Owens Valley Paiute' 200 · American Presidency Project (Kappler c.1 s.888 kaynaklı) 200. Oregon Encyclopedia 403.
- 🟡 FARK: künye t:**1872-01-01** → kararname günü **1872-09-12** (Malheur Rezervasyonu, "Snake or Piute Indians").
- 1863 Fort Tejon sürgünü ✓ yıl (künyeyle aynı). Doğuş **bulunamadı**.

## ponka
- Kappler 1817 & 1858 (200) · OHS 'Ponca' (Mark van de Logt) 200.
- 🟡 FARK: künye t:**1858-01-01** → antlaşma günü **1858-03-12** (Washington).
- Doğuş **bulunamadı**: OHS "In the 1700s … separated from the Omaha" — YIL değil. 1877 sürgünü ✓ yıl. Künyedeki 1879-05-12 Standing Bear davası bu turda doğrulanmadı (OHS yalnız "(1879)").

## powhatan
- Encyclopedia Virginia 'Tsenacomoco (Powhatan Paramount Chiefdom)' 200 (yazar adı sayfadan çıkarılamadı).
- Künye t:1646-10-01 ✓ — kaynak "In October 1646 … Necotowance concluded a peace treaty" ⇒ AY düzeyinde DOĞRULANDI (künyenin "doğrulayamadım" itirafı kapanabilir; gün yine yok). Ayrıca "With Opechancanough's death in 1646 came the end of Tsenacomoco".
- Doğuş **bulunamadı**: "mid- to late 1500s" — yıl değil; künye f:1501 `yuzyil` kaynakla uyumlu ama madde yazılmaz.
- Künyedeki "1607-01-01 Jamestown" → kaynakta gün: 1607-04-26 körfeze giriş. 1614-04-05 Pocahontas evliliği: kaynak yalnız "April 1614" diyor.

## pueblo-bagimsizligi
- LOC In Custodia Legis (Margaret Wood) WebFetch ok · NPS/BLM Land of Contrast böl.2 + A Forgotten Kingdom böl.2 (web.archive 200).
- Künye f:1680-08-10 ✓.
- 🟡 FARK: künye t:**1692-08-01** dayanaksız → Vargas El Paso'dan **21 Ağustos**'ta çıktı, Santa Fe'ye **12 Eylül**'de vardı, başkenti **14 Eylül 1692**'de geri aldı. Künye kronolojisindeki "1692-09-12 resmen ilan etti" — kaynak 12 Eylül'ü VARIŞ, 14 Eylül'ü GERİ ALIŞ diye verir.
- Yazılmayan: Santa Fe'nin terki — LOC "held out until September 21, 1680" diyor, başka bir kaynak (arama özeti, okunmadı) 21 Ağustos; çelişki çözülemedi ⇒ madde yazılmadı.

## sahaptin
- Kappler Yakima 1855, Wallawalla-Cayuse-Umatilla 1855, Middle Oregon 1855 (üçü 200) · NPS NEPE prologue.
- 🟡 FARK: künye t:**1855-01-01** → Wayám = "Wyam or Lower De Chutes band of Walla-Wallas" Orta Oregon Antlaşması'nın imzacısı ⇒ **1855-06-25** (Wasco, The Dalles yakını). Kuzey yakası (Wish-ham) 1855-06-09 Yakama antlaşmasında.
- Doğuş **bulunamadı** (Lewis-Clark'ın Celilo geçişini veren kurumsal sayfa okunamadı; NPS site sayfalarında "Celilo" geçmiyor). Künyedeki 1847-11-29 Whitman: NPS yalnız yıl veriyor.

## sauk
- Kappler 1804 & 1832 (200) · OHS 'Sac and Fox' (Timothy James McCollum) 200.
- Künye t:1832-09-21 ✓ ("Done at Fort Armstrong, Rock Island … twenty-first day of September … 1832").
- Doğuş **bulunamadı**. 1764 Illinois'e yerleşme (OHS "Illinois (1764 to 1830)") ve 1804-11-03 ABD koruması (tabiiyet) eklendi. Künyedeki 1832-08-02 Bad Axe bu turda doğrulanmadı.

## Özet sayılar
- 14 künye · 51 madde (gun 29 · ay 6 · yil 16; hicri-yil 0).
- Doğuş bulunamadı: 8 (natchez, ojibwe, pavni, payut, ponka, powhatan, sahaptin, sauk) · yıkılış bulunamadı: 1 (nuu-cah-nulth — künye t'si yanlış olay).
- Künye f/t ↔ kaynak farkı: 7 (nez-perce gün, nuu-cah-nulth olay, occaneechi başkent/son, payut gün, ponka gün, pueblo-bagimsizligi gün, sahaptin gün). Ayrıca künye İÇİ kronoloji gün düzeltmeleri: pavni 1833, powhatan 1607, nuxalk 1793 (bilgi).
- Kaynak çelişkisi (iki taraf yazılı): natchez 1730↔1731 · navaho 1626↔1629 · pueblo Santa Fe terki (madde yazılmadı).


---
### H2

H2 — TUR 2 · Kuzey Amerika yerlileri + Mezoamerika + Ranquel (13 künye, 29 madde)

Çıktı: `H2.csv` (üretici `h2_yaz.py`; ham indirmeler `h2c/`). TDV kapsamı dışı (13'ü de İslâm dünyası değil) → TDV aranmadı.
Britannica / Canadian Encyclopedia KULLANILMADI (403). Vikipedi ve arama özeti hiçbir satırda dayanak değil; her kaynak sayfası/PDF'i indirilip ilgili cümle okundu.
Kaynak aileleri: Kappler/OSU Tribal Treaties Database (antlaşma metni, birincil) · GPO 1912 *Executive Orders Relating to Indian Reservations* (birincil, archive.org sayfa görüntüsü) · NPS · ABD Dışişleri Office of the Historian · Arizona State Parks · ITCA · Dictionary of Canadian Biography (Toronto/Laval) · UVic Colonial Despatches + 1858 BK Kanunu metni · Univ. of Alaska Anthropological Papers · INAH (lugares, Boletín, Cuicuilco) · INPI · Arqueología Mexicana (Joyce & Levine) · Wiley Encyclopedia of Empire (Joyce 2016) · UNAM Noticonquista · História Unisinos / Quinto Sol (hakemli).

## savni — 3 madde
- Kaynak: treaties.okstate.edu (HTTP 200) — 1786 Fort Finney, 1795 Greenville, 1831 Wapaghkonnetta antlaşma metinleri.
- **Künye t `1795-08-03` = Greenville imza günü — KAYNAKLA ÖRTÜŞÜYOR** (metin: "third day of August, 1795"; ilân 2 Aralık 1795).
- Doğuş **bulunamadı**: f 1281-01-01 atlas ufku; ilk Avrupa teması/belgeli kayıt için okunabilir kaynak bulunmadı.
- Not: 1795 madde metni kaynağın sınır maddesine (III) dayanır; "Ohio'nun büyük kısmı" ifadesi kaynakta okunmadığından YAZILMADI. 1831 maddesi künye penceresi dışında (harita HAYIR); OSU sayfasının "original signatories" listesinde Shawnee/Wyandot görünmüyor ama metin ve imza listesi Şavni imzacılarını ("Shawanees: … Red Pole … Black Hoof") içeriyor — veri tabanı etiket kusuru.

## secwepemc — 1 madde
- Kaynak: 21 & 22 Vict. c.99 metni (primarydocuments.ca, 200) "[2d August 1858.]" + UVic Colonial Despatches V587207 (Lytton→Douglas, 14 Ağu 1858: kanun "had received Her Majesty's assent").
- **Künye t `1858-08-02` KANUNUN BAŞLIK TARİHİYLE ÖRTÜŞÜYOR.** ⚠️ Kraliyet onayının günü ayrıca okunmadı (yalnız "14 Ağustos'tan önce"); kolonide ilânı Douglas'ın 19 Kasım 1858 Fort Langley bildirisidir (arama özetinde görüldü, sayfa açılamadı ⇒ yazılmadı).
- ⚠️ Kanun Secwépemc'i ADIYLA anmaz; Fraser-Thompson havzasının sınırlar içinde kaldığı kanunun coğrafî tarifinden çıkarımdır.
- Doğuş **bulunamadı**. "Fraser altına hücumu" için okunmuş kaynak yok.

## tlingit — 3 madde
- NPS Sitka NHP "The Battle of 1804" (200; dayanak Dauenhauer et al. 2008, Black 2004) · history.state.gov Alaska Purchase (200).
- **Künye t `1867-10-18` KAYNAKLA ÖRTÜŞÜYOR** (state.gov "formally transferred … October 18, 1867"); kaynak Tlingit'i anmaz, idarî devir.
- **Künye kronolojisiyle fark:** künye `1802-06-01` diyor, NPS yalnız YIL (1802) veriyor → CSV `1802-01-01 yil`; künye `1804-10-01` NPS ile örtüşüyor (çıkarma günü). Novoarkhangelsk'in kuruluş günü kaynakta yok ("over the next few days") → 1804-10-01 maddesine metin olarak eklendi.
- Doğuş **bulunamadı**.

## ute — 5 madde
- Kappler/OSU: 1863 Tabeguache (Conejos), 1868 Ute, 1873 Brunot, 1880 Ute anlaşma+kanun (hepsi 200).
- **FARK:** künye t `1880-01-01` (yıl, "gün doğrulanmadı") → kaynak: anlaşma imzası **1880-03-06**, kanun onayı **1880-06-15** (21 Stat. 199). Öneri: t = 1880-06-15.
- **FARK (künye kronolojisi):** künyedeki Conejos maddesi `1863-10-01` (ay) → antlaşma metni **7 Ekim 1863** gününü veriyor.
- Doğuş **bulunamadı**.

## vendat — 5 madde
- Dictionary of Canadian Biography: Champlain, Daniel, Brébeuf, Ragueneau (hepsi 200).
- **Künye t `1649-03-16` KAYNAKLA ÖRTÜŞÜYOR** (Brébeuf: "On 16 March … 1649 more than 1,000 Iroquois attacked Saint-Ignace").
- **FARK (künye kronolojisi):** künye Champlain'i `1615-08-01` (ay gibi) yazmış; DCB 1 Ağustos 1615'i GÜN olarak veriyor (Otouacha). Künyedeki `1642-01-01` abluka maddesinin kaynağı ("Beaver Wars", çevrimiçi ikincil) bu turda doğrulanmadı.
- 1650 maddesi: DCB "A year later" (14 Haziran 1649'dan) + 1650 Relation'ı → yıl düzeyi.
- Doğuş **bulunamadı**.

## yavapai — 5 madde
- GPO 1912 *Executive Orders Relating to Indian Reservations* (archive.org cu31924097621753; djvu OCR + sayfa görüntüleri n15/n16/n19 OKUNDU): Colyer ilânı **3 Ekim 1871**, Grant onayı **9 Kasım 1871**, ilga **23 Nisan 1875** (OCR "28" yanlış, görüntü "23"). Arizona State Parks (200): Prescott 1864, rezervasyon "1873", Şubat sonu 1875 sürgünü. ITCA (200): rezervasyon 1871, 1875'te ilga.
- 🔴 **ÇELİŞKİ + FARK:** künye t `1873-01-01` (Rio Verde kuruluşu). GPO birincil metni ve ITCA **1871** diyor; yalnız Arizona State Parks 1873 diyor. Birincil belge esas → öneri: tasarrufun bitişi **1871-10-03** (ya da Grant onayı 1871-11-09); 1873 muhtemelen fiilî yerleştirmenin başladığı yıl (AZSP: "Between 1873 and 1875 … placed").
- ⚠️ GPO metni halkı "Apache Mohave" diye anar (dönemin ABD adlandırması); Yavapai+Tonto Apaçi eşleşmesi ITCA'dan.
- Doğuş **bulunamadı**.

## yupik — 2 madde
- Sarafian & VanStone 1972 (UAF PDF, 200): Aleksandrovski Redut "Constructed in 1818" — künyedeki 1818 ile ÖRTÜŞÜYOR. state.gov: 1867-10-18 devir — künye t ile ÖRTÜŞÜYOR (Yupik adıyla anılmıyor).
- Doğuş **bulunamadı**. Künyedeki 1885 Bethel maddesinin kaynağı bu turda doğrulanmadı.

## nahua-sehir-devletleri — 1 madde
- INPI kitapçığı (gob.mx PDF, 200): "la caída definitiva de Tenochtitlan que se culminó un 13 de agosto de 1521" · INAH Boletín 391 (200): Tlatelolco 1521'de 93 günlük kuşatmadan sonra düştü.
- **Künye t `1521-08-13` ÖRTÜŞÜYOR.** ⚠️ INPI metni halka yönelik (çocuk/genel okur) bir kurumsal kitapçık; gün için daha akademik bir kaynak bulunmadı (INAH yalnız yıl veriyor).
- Doğuş **bulunamadı** (toplu künye; tek kuruluş günü olamaz). Künyedeki 1428 maddesinin kaynağı **History.com = KIRMIZI ÇİZGİ** (popüler tarih sitesi) — düşürülmeli; bu turda yerine kaynak bulunamadı.

## purepecha-imparatorlugu — 2 madde
- INAH lugares, Zona Arqueológica de Tzintzuntzan (es/en, 200): Tzitzispandácuare (1454-1479); Tzintzicha Tangánxoan II (1510-1530) Olid ile teslimi pazarlık etti, Nuño de Guzmán'ın elinde öldü. Martínez Baracs (UNAM Noticonquista, 200) Tariácuri'yi tarihsiz anlatıyor.
- **FARK:** künye f `1300-01-01` — hiçbir okunan kaynak 1300'ü vermiyor; Tariácuri birleşmesi tarihsiz ⇒ doğuş **bulunamadı**. Künye t `1530-02-14` GÜNÜ bulunamadı (INAH yalnız yıl; künyenin kendi notu da aynı).
- Olid'in Michoacán'a gelişi (1522) için okunabilir akademik kaynak bulunamadı (SEP ders metni ve Vikipedi dışı yok) ⇒ yazılmadı.

## tututepec-krallik — 1 madde
- Joyce & Levine 2008 (Arqueología Mexicana dosyası, colorado.edu PDF, 200): "A principios de marzo [1522], Tututepec fue conquistada y su gobernante fue apresado" → `1522-03-01 ay`. Joyce 2016 (Wiley Encyclopedia of Empire): Geç Postklasik "1100-1522 CE"; kuruluş "about 1100 CE" (YAKLAŞIK ⇒ yazılmadı).
- **Künye t `1522-01-01` (yıl) → kaynak AY veriyor: Mart 1522.** Öneri: t = 1522-03-01 (kesinlik ay). Hükümdarın 22 Mart 1522 ölüm günü yalnız Vikipedi/popüler sitede ⇒ yazılmadı.
- Doğuş **bulunamadı** (11. yy sonu, 8 Geyik — yaklaşık).

## zapotek-krallik — 1 madde
- Cuicuilco 88 (2023, INAH, Ramón Celis et al., Oudijk'e dayanarak; PDF 200): "Una segunda ola migratoria sucedió en 1450, cuando la hegemonía de Zaachila en los Valles Centrales desapareció" → Tehuantepec başkent. "alrededor del año 1350" (Cocijoeza seferleri) YAKLAŞIK ⇒ yazılmadı.
- 🔴 **ÇELİŞKİ:** künye kronolojisindeki Cambridge/Ancient Mesoamerica maddesi aynı taşınmayı "in the 1440s" diye veriyor (künyede `1440-01-01`); Cuicuilco **1450**. İki taraf da Guiengola araştırma grubundan (Ramón Celis). Hüküm koordinatörde.
- Yıkılış **bulunamadı**: Cosijopí'nin Cortés'e boyun eğişi Martín Gabaldón'da (UNAM) TARİHSİZ; künye t `1523-01-01` ve künye kronolojisindeki `1521-01-01` (Encyclopedia.com) için yıl veren akademik kaynak okunamadı. Doğuş **bulunamadı**.

## toltek — 0 madde
- Talimat gereği: f/t (900/1150) INAH'ın Tollan **evre** sınırlarıdır, olay değil; "yaklaşık" arkeolojik faz ⇒ doğuş/yıkılış **bulunamadı**. Ek kaynak aranmadı (Britannica 403).

## ranquel — 1 madde
- Tamagnini 2017 (História Unisinos 21/3, redalyc PDF 200): Ranqueller "hasta 1879" Mamil Mapú'da; beş kacikazgo "hasta el fin de la frontera con los indígenas en 1879". Tamagnini 2019 (Quinto Sol 23/3, PDF 200): "derrota militar … Campaña al desierto … Roca en 1878-1879".
- **FARK:** künye t `1883-01-01` (Cooper/HSAI, seferlerin bitişi 1879-83) ↔ okunan iki hakemli kaynak **1879**. Künyenin kendi kronoloji notu da 1879 diyor. Öneri: t = 1879-01-01 (yıl).
- 1872 barış antlaşması (künyede `1872-01-01`): Ratto 2011 (Memoria Americana) PDF'i indirilemedi (dialnet zaman aşımı) — gün **bulunamadı**. Not: künyedeki kaynak satırı makaleyi "Quinto Sol" diye anıyor; arama sonucu makalenin **Memoria Americana 19(1), 2011** (Silvia Ratto) olduğunu gösteriyor — atıf düzeltilmeli (sayfa okunmadı).
- Doğuş **bulunamadı**.

## Özet sayılar
- 13 künye · 29 madde (gün 21 · ay 2 · yıl 6).
- Doğuş bulunamadı: 13/13 (hepsinde f atlas ufku ya da yaklaşık/faz). Yıkılış bulunamadı: 2 (zapotek-krallik, toltek).
- Künye t ↔ kaynak farkı (ADIYLA): ute (1880-01-01→06-15) · yavapai (1873→1871) · tututepec (1522 yıl→Mart 1522) · ranquel (1883→1879) · purepecha (f 1300 dayanaksız; t günü 02-14 doğrulanmadı) = **5 künye**. Örtüşen: savni, secwepemc, tlingit, vendat, yupik, nahua.
- Künye-içi kronoloji kusurları (bilgi): ute Conejos ay→gün (07) · vendat Champlain ay→gün · tlingit 1802 gün dayanaksız · nahua 1428 History.com (kırmızı çizgi) · zapotek 1440s↔1450 çelişkisi · ranquel Ratto atfı yanlış dergi.


---
### H3

H3 — Güney ve Doğu Afrika (TUR 2) · 13 künye · 44 madde

Ölçüm: 11 Ekim 2026, bu makine. Hiçbir C:/atlas dosyasına yazılmadı. Britannica (403) kullanılmadı.
Arama özeti kaynak gösterilmedi; her satırdaki kaynağın sayfası/metni AÇILIP okundu (WebFetch, curl+pypdf
ya da sayfa görüntüsü). Hicrî tarih yok (hiçbir kaynak hicrî yıl vermedi).

## nama-orlam (4 madde)
- Kaynak: SAHO, Herero-Nama savaşı kronolojisi (200) · T. E. Sole, Military History Journal 1/3, 1968 (200).
- 🔴 **Künye farkı:** `t:1904-10-03` künyede "Vitbooi'nin ölümü" diye anılıyor; o gün Witbooi'nin **savaş ilânıdır**.
  Witbooi **29 Ekim 1905**'te Vaalgras'ta ölümcül yaralandı. Egemenlik kaybı adayı: **8 Mayıs 1907** fermanı (Berseba ve
  Bondelswarts hariç Nama toprakları Alman toprağı) — yıkılış maddesi o güne yazıldı. Savaşın resmî sonu 31 Mart 1907.
- Doğuş **bulunamadı** (künye `f:1281` pencere başı; Orlam göçü için yıl veren okunabilir kaynak yok).
- Not: Sole Witbooi'nin antlaşmasını "15th September 1884" diye verir; bu tarih kullanılmadı (ikinci kaynakla doğrulanmadı,
  yaygın tarih 1894'tür — ölçülemedi).

## oranj (4 madde)
- Kaynak: Bloemfontein Konvansiyonu metni (Wikisource; MacFadyen 1898 resmî derlemesi) — imza 23 Şubat 1854 ·
  Vereeniging metni (Wikisource; 3 Haziran 1902 Transvaal idaresi bildirisi) — Pretoria, 31 Mayıs 1902 · Archontology
  (Volksraad Notulen ve Orange River Colony Proclamations'a atıfla).
- 🔴 **ÇELİŞKİ — anayasa günü:** künye ve SAHO **7 Nisan 1854**; Archontology (Volksraad Notulen 1854-55 s. 47, 194-201'e
  dayanarak) **10 Nisan 1854**. Satır 10 Nisan ile yazıldı, ÇELİŞKİ metinde beyanlı; hükmü koordinatör verir.
- Fark: fiilî/hukukî ilhak **28 Mayıs 1900** (bildiri 24 Mayıs, yayımla yürürlük) — künye `t:1902-05-31` (Vereeniging)
  ile 2 yıl fark; ikisi de satır olarak var.

## pedi (4 madde)
- Kaynak: SAHO 'King Sekhukhune' biyografisi (200) + SAHO dated-event (200).
- `t:1879-12-02` (Sekhukhune'nin esir alınışı) kaynakla **BİREBİR**. Merkez 28 Kasım 1879'da düştü.
- Doğuş **bulunamadı**: künye `f:1650` için yıl veren kaynak okunamadı (Maroteng/Thulare için yalnız yaklaşık ifade).
- Tahta çıkış günü (21 Eylül 1861) kaynakta Mampuru'nun iddiası bağlamında geçiyor; Sekwati'nin ölüm günü olarak yazıldı.

## rozvi (1 madde)
- Kaynak: Mudenge, JAH 15 (1974) dipnot 3: "Dombo's wars" **1684-95** → 1684 yıl maddesi. Parsons (Botsvana
  Üniv.) Butua'nın Rozvi'ye geçişini "about 1685" verir (yaklaşık → kullanılmadı). TDV zimbabve (İbrahim Güner/Rıza
  Kurtuluş): Rozvi yükselişi "XVII. yüzyılın sonları", Ngoni göçü "1830'lar" — yıl değil.
- Yıkılış **bulunamadı**: Ndebele fethi Parsons'ta "1838-40" aralığı. 🔴 **Künye farkı (sorulmalı):** Beach, JAH 15/4
  (1974) özeti Changamire Rozvi hânedanının 1873'e kadar Ndebele'ye karşı bir tehdit olarak sürdüğünü söyler — künye
  `t:1834` bir "son" değil olabilir. Mudenge tezi (SOAS 1972, 121 MB PDF) indirilmedi.

## svazi (3 madde)
- Kaynak: F. J. Mashasha, "The Swazi and land partition (1902-1910)", SAS-Space PDF (okundu, pypdf).
- 🔴 **Künye farkı:** `t:1903-01-01` → kaynakta **25 Haziran 1903** Order in Council. Uygulama bildirisi 1 Ekim 1904.
- SAHO 'eSwatini' sayfası okundu ama KULLANILMADI: "1877'de İngilizler krallığı ilhak etti" ve "1894'te Transvaal
  Kolonisi'nin himayesi" gibi açık hatalar taşıyor.
- Doğuş **bulunamadı** (`f:1815` Sobhuza I için yıl veren okunabilir kaynak yok).

## transvaal (8 madde)
- Kaynak: Sand River ve Londra Konvansiyonu metinleri (Reitz, A Century of Wrong 1900, Ek E — angloboerwar.com aktarımı;
  site hobi sitesidir, ama metin antlaşmanın kendisidir ve SAHO dated-event 17 Ocak 1852'yi bağımsız doğruluyor) ·
  Vereeniging metni (Wikisource) · Archontology (Transvaal Government Gazette atıflı).
- 🔴 **Künye farkı:** `f:1852-01-01` (yıl beyanı) → antlaşma metninde gün VAR: **17 Ocak 1852** ("done and signed at Sand
  River ... this 17th day of January, 1852"; toplantı tutanağı 16 Ocak). Künyedeki "gün kaynakta yok" notu düzeltilebilir.
- **Kesinti dönemi:** 12 Nisan 1877 İngiliz ilhakı → 16 Aralık 1880 Paardenkraal'da yeniden ilân → 3 Ağustos 1881 Pretoria
  (metbuluk) → 27 Şubat 1884 Londra. Künye bunu tek pencere sayıyor; haritada 1877-1880 arası İngiliz olmalı mı sorusu
  koordinatörün.
- İlhak bildirisi **1 Eylül 1900**; Vereeniging `t:1902-05-31` BİREBİR.

## tsvana (2 madde)
- Kaynak: Neil Parsons, Botswana History Pages 1 (thuto.org, Botsvana Üniv.) — 1885 ve 1890 yalnız YIL.
- 🔴 **Künye farkı (hassasiyet):** `t:1885-03-31` gün düzeyinde; okunan kaynak yalnız yıl verir. Aramada 27 Ocak 1885
  (Order in Council), Mart 1885 (Warren ilânı), 30 Eylül 1885 (resmî himaye) adayları çıktı ama hiçbirinin sayfası
  akademik kaynakta okunamadı → yazılmadı.
- Doğuş **bulunamadı**: Parsons "Ngwaketse ... by 1700" der (yıl değil, "-e kadar"); künye `f:1700` bunun yuvarlanmışı olabilir.

## venda (2 madde)
- Kaynak: Nemudzivhadi, Unisa M.A. tezi 1977 — depo özeti (200). Luatame 16 Kasım 1898 yakıldı, Mphephu 21 Aralık 1898
  Rodezya'ya geçti.
- 🔴 **Künye farkı:** `t:1898-01-01` → **21 Aralık 1898**. (Aramada çıkan "31 Aralık 1898 teslim" müzayede sitesindendir, kullanılmadı.)
- Doğuş **bulunamadı** (tez özeti yalnız "XIII. yüzyıl sonu" yerleşimi der).

## xhosa (5 madde)
- Kaynak: Philip Gon, "The Last Frontier War", Military History Journal 5/6 (1982).
- 🔴 **Künye farkı:** `t:1878-01-01` → savaş 1878'de sürüyordu (Centane 7 Şubat 1878); Gcalekaland **Ağustos 1878**'de
  yatıştırıldı (ay). Transkei'nin Kap'a ilhak günü kaynakta YOK (aramada çıkan 1885 doğrulanmadı).
- Doğuş **bulunamadı** (`f:1281` pencere başı). Sandile'nin ölüm günü kaynakta yok.

## ngoni (3 madde) — yalnız Mpeseni kolu
- Kaynak: T. W. Baxter, "The Angoni Rebellion and Mpeseni", Northern Rhodesia Journal I/2 (1950) — nrzam.org.uk sayfa
  görüntüleri (s. 14, 16, 19-21, 23) OKUNDU. TDV zambiya (Meral Avcı/Ahmet Kavas): Ngoni "1850-1870 arasında" doğuya yerleşti (aralık, yıl değil).
- 🔴 **Künye farkı:** `t:1898-01-01` → Mpeseni **9 Şubat 1898**'de teslim oldu (Singu 5 Şubat'ta kurşuna dizildi; merkez 24
  Ocak'ta yakıldı). Bu yalnız Mpeseni krallığıdır; künye "Ngoni Devletleri" çoğul — Maseko/Mbelwa kolları için gün yok.
- Doğuş **bulunamadı**: Zambezi geçişi (19/20 Kasım 1835, güneş tutulması) için birincil makale Lane Poole, JRAS 29/115
  (1930); JSTOR açılamadı, yalnız bir blog aktarımı var (kırmızı çizgi) → yazılmadı.

## yao (3 madde) — TDV birincil
- Kaynak: TDV `malavi` (Ahmet Kavas, 200) · TDV `mozambik` 2. bölüm (Ahmet Kavas, 200). TDV `yao` → 302 (ölü slug).
- 🔴 **Künye farkı:** `t:1899-01-01` → TDV: Yao reislerinin (V. Mataka Cisonga) sömürgeciliğe karşı mücadelesi **1912**'ye
  kadar sürdü ve "ülke tamamen sömürgeleşti". Nyasaland nüfuz bölgesi ilânı 1891.
- Doğuş **bulunamadı** (`f:1800` için TDV yıl vermez). 1870 Makanjila maddesi künyenin kendi kronolojisinde de var.
- Not: TDV'deki 1840 "jumbe" (Sâlim b. Abdullah, Nkhotakota) ve 1895 Mwingi Kheiri sürgünü Yao değil, Zengibarlı jumbe
  idaresine ait → yao polity'sine yazılmadı.

## yeke (2 madde)
- Kaynak: Biographie Coloniale Belge II (ARSOM, kaowarsom.be) — Msiri, Moloney, Stairs maddeleri (PDF, okundu; Fransızca).
- `t:1891-12-20` → Moloney maddesi "le 20 décembre" BİREBİR; Stairs maddesi "19 Aralık bayrak olayı, ertesi gün" ile tutarlı.
  ⚠️ Kaynak kendiyle çelişir: Msiri maddesinin başlığı ölümü "Bunkeya, 19.12.1892" verir (yıl açıkça hatalı — Stairs 9
  Haziran 1892'de ölmüştü). Gövde esas alındı.
- 18 Nisan 1891 Le Marinel antlaşması (himaye) eklendi. Doğuş **bulunamadı** (Msiri "vers 1835" doğumlu; kuruluş yılı yok).

## toro (3 madde)
- Kaynak: TDV `uganda` 2. bölüm (Ahmet Kavas, 200) · Mugambwa, J. Legal Pluralism 1987 özeti (Murdoch Üniv. deposu).
- 🔴 **Künye farkı:** `f:1830-01-01` → TDV: Kaboyo Toro'yu **1822**'de kurdu. `t:1900-06-26` → okunan kaynak yalnız YIL
  (1900 Toro Antlaşması); gün doğrulanamadı.
- 1891 Lugard/Kasagama restorasyonu için okunabilir kaynak **bulunamadı** — 1876-1900 arası Toro'nun sahibi açık soru.

## Özet sayılar
- 13 künye · 44 madde (gün 32 · ay 3 · yıl 9 · hicri-yıl 0).
- Doğuşu bulunamayan: 9 (nama-orlam, pedi, svazi, tsvana, venda, xhosa, ngoni, yao, yeke) · yıkılışı bulunamayan: 1 (rozvi)
  ⇒ en az birinden yoksun 10 künye.
- Künye-kaynak farkı: 11 (nama-orlam, oranj, rozvi, svazi, transvaal, tsvana, venda, xhosa, ngoni, yao, toro);
  BİREBİR tutan uçlar: pedi `t`, transvaal `t`, oranj `t`, yeke `t`, rozvi `f`.


---
### H4

H4 — KAMP-EKSIK-KRONOLOJI TUR 2 (Batı/Orta/Kuzey Afrika + Madagaskar)

14 künye · 45 madde (13 künyede; zerma 0) · ölçüm 11 Ekim 2026, bu makine.
TDV metni `tdv.py` ile çekildi (HTTP kodu yanında). OpenEdition/Cambridge/Persée sayfaları WebFetch ile AÇILIP OKUNDU;
yalnız arama özetinde görülen hiçbir şey kaynak yazılmadı.
⚠️ Persée: makale sayfası WebFetch'le yalnız İLK SAYFAYI veriyor; PDF `altcha` bot korumasıyla 403 (aşılmadı — CAPTCHA kuralı).
Bu yüzden Persée'den yalnız ilk sayfası okunabilen makaleler kullanıldı (Zimmermann 1916, Randles 1969).

TDV slug durumu: 200 → tevarik · nijer · mali · gane · tinbuktu · madagaskar · gine-bissau · samori-ture · futa-calon ·
nijerya · fizan · cezayir · portekiz · sierra-leone · gine · afrika · orta-afrika-cumhuriyeti · kongo-demokratik-cumhuriyeti · cad.
302 (ölü) → tuaregler · tibesti · tubu · tebu · sosso · susu · angola · hoggar · ahaggar · gat · canet · zande · azande · zerma ·
cerma · samori · kidal · menaka · luanda · bie · benguela · agades · kavar · bilma · dosso · zinder · menabe · majunga ·
mahajanga · boina · sakalava · kankan · falaba · bangassu. (`say` 200 ama "sa'y" fıkıh maddesi — yanlış madde, TDV tuzağı ②.)

## ovimbundu
- Kaynak: Neto, Ler História 59 (2010), openedition lerhistoria/1391 (okundu): 1902 Bailundo isyanı. TDV `angola`/`bie` 302.
- Künye t `1902-01-01` ↔ kaynak 1902 (yıl) — UYUŞUYOR. f `1700-01-01` — **doğuş bulunamadı** (kaynakta yıl yok).
- Künyedeki 1890 Bié işgali (DÜŞÜK GÜVEN) bu turda akademik kaynakta BULUNAMADI.

## portekiz-angola
- Randles, Annales ESC 1969 s.289 (Persée, ilk sayfa okundu): 1575 Paulo Dias de Novais'e fetih bağışı (Luanda'nın kuruluşu o sayfada yok).
- Mabeko-Tali, Socialismes en Afrique (MSH 2021, okundu): 11 Kasım 1975 MPLA bağımsızlık ilânı.
- Künye f 1575 / t 1975-11-11 — UYUŞUYOR. ⚠️ ÇELİŞKİ: TDV `afrika` bağımsız devletler tablosu Angola için "11.09.1975" yazıyor
  (gövde metni yalnız "1975"); akademik kaynak 11 Kasım ⇒ tablo büyük olasılıkla dizgi hatası; künye korunmalı.

## portekiz-gine
- TDV `gine-bissau` (200): 1879 · 1886 · 20 Ocak 1973 · 24 Eylül 1973 · 10 Eylül 1974. Künye f/t UYUŞUYOR.
- ⚠️ TDV `afrika` gövdesi Gine Bissau'nun bağımsızlığını Angola ile "aynı tarihte" (1975) gösteriyor; daha dar kapsamlı madde
  (`gine-bissau`, 1974) esas alındı.

## solima-yalunka
- TDV `futa-calon` (200): Solima'nın hükümran olduğu Calonke (Dialonke) krallığı; Kral Jan Iero 1727'de başa geçti.
  🔴 KİMLİK ŞÜPHELİ: TDV'deki "Solima" bir kişi adı gibi geçiyor; Falaba merkezli Solimana (Solima Yalunka) ile aynı yapı olduğu
  DOĞRULANMADI — madde HAYIR/diger, koordinatör kararı.
- TDV `sierra-leone` (200): 1884 Samori Sierra Leone'nin büyük kısmını zaptetti — Falaba'yı ADIYLA ANMIYOR (bölgeden şehre taşıma riski beyan).
- TDV `samori-ture` (200) Falaba/Solima geçmiyor. Persée'de Person'un makaleleri (Samori et la Sierra Leone 1967) yalnız künye; okunamadı.
- **Doğuş bulunamadı** (künye f 1720 kaynaksız). Künye t 1884 ↔ TDV 1884 — uyuşuyor (dolaylı).

## susu-kralligi
- TDV `gane` (200): 1076 bağımsızlık; "XIII. yüzyıl başlarında Gāne başşehrini ele geçirdi" (yıl yok → madde yazılmadı).
- TDV `mali` (200): 1235 Kirina; 1240 Gāne topraklarının tamamı Mali'ye geçti. Künye f/t UYUŞUYOR.

## tiv
- Fardon, Africa 85/4 (2015) (Cambridge core-reader, okundu): Ocak 1900 Birinci Munshi Seferi; 1904 "unsettled district";
  1905 Katsina Ala; 1906 Abinsi + Hasler seferi; 1907-1910 tedrici yayılma.
- Bergsma, Africa 2015 "Prologue" (okundu): yalnız 1909 Katsina Ala asistan resident — madde yazılmadı.
- Künye t 1900 ↔ kaynak Ocak 1900 (sefer) — uyuşuyor; ancak fiilî idare 1905-1910'a yayılır (not). **Doğuş bulunamadı** (f 1281 = pencere).

## tuareg-accer
- TDV `tevarik` (200, Ahmet Kavas): Nahnûhen 1875-1886 Canet müdürü/kaymakamı · 1905 Osmanlı Canet'i toprağı ilân etti ·
  1906 Temmuz Abdülkadir Câmi müfrezesi · 1909 bayrak · 1910 ortası boşaltma · "3 Mayıs 1911'de Canet Osmanlı nahiyesi olarak kayıtlıydı" ·
  "1911 yılında Fransızlar'ın burayı işgal etmesi" · "Fransızlar 28 Ekim 1918'de bölgeye yerleştiler".
- EB 'Ghât' (okundu): 1875 Gât'a Türk garnizonu; Bardaï ve Djanet kazaları; Ağustos–Ekim 1914 İtalyan Gât işgali.
- Künye t `1911-01-01` ↔ TDV 1911 (yıl) — uyuşuyor. ⚠️ TDV İKİ uç veriyor: 1911 işgal ve 28 Ekim 1918 kalıcı yerleşme
  (arada 1916 Senûsî/Ajjer isyanı). Hangisinin yıkılış sayılacağı koordinatörde. Charlet'nin 27 Kasım 1911 günü yalnız
  arama özetinde görüldü (Persée PDF'leri altcha korumalı) — GÜN YAZILMADI. **Doğuş bulunamadı.**

## tuareg-adag
- EB 'Adrar des Iforas' (Camps & Claudot-Hawad 1985, okundu): 1903 İwellemmeden ve Ifoghas silah bıraktı · 1907 Ifoghas bağımsız ilân ·
  1905 Cezayir–AOF sınırı · Temmuz 1916 isyancıların teslimi. Ifoghas'ın gelişi için yıl yok ("1655 olaylarından sonra").
- Boilley, Les Touaregs Kel Adagh (Karthala) Cairn'de 403 — okunamadı (arama özetindeki 1904/1908 kullanılmadı).
- 🔴 FARK: künye t `1899-01-01` ↔ kaynak 1903. **Doğuş bulunamadı.**

## tuareg-ahaggar
- JdA 77-1 (2007), M. Gast (okundu): Tit 7 Mayıs 1902 · Musa ag Amestane Ocak 1904 In Salah'ta kabul; Dinaux'nun amenûkal
  burnusu tevcihi YILSIZ (madde yazılmadı).
- EB 'Ahitarel' (Gast 1986, okundu): amenûkal 1877-1900 · 1878 barış · Flatters 16 Şubat 1881 · Ekim 1900 ölüm.
- TDV `tevarik`: "XVIII. yüzyılın ortalarında Haggarlar müstakil bir yönetim kurdular" — yıl değil ⇒ **doğuş bulunamadı**.
- Künye t `1902-05-07` ↔ kaynak 7 Mayıs 1902 — UYUŞUYOR.

## tuareg-ivellemmedan
- EB 'Iwellemmeden Kel Ataram' (Claudot-Hawad 2003, okundu): 1647 Tinbüktü'ye saldırı (ilk tarihli kayıt) · "vers 1653" (yazılmadı) ·
  1800 başkaldırı · 1894 Tinbüktü Fransız işgali · 1896 Hourst–Madidou · 1898 nehir işgali başladı · 1902 Gao görüşmeleri ·
  23 Ocak 1903 Firhun teslimiyeti · 1908 doğrudan idare · Kasım 1914 Firhun tutuklandı · 9 Mayıs 1916 Anderamboukan · 1 Eylül 1916 Akorakor.
- Kel Ataram–Kel Denneg ayrılığı "XVIII. yy ya da XIX. yy başı" — yıl değil.
- 🔴 FARK: künye t `1899-01-01` ↔ kaynak 23 Ocak 1903 (teslimiyet). Künyedeki 1893 Shurkin maddesi bu turda doğrulanmadı.
- Doğuş: 1647 ilk yazılı kayıt (Fark 3 kapsamında), kuruluş değil.

## tubu-tibesti
- Zimmermann, Annales de Géographie 1916 s.235 (Persée, okundu): Aralık 1913 Zouar (gün OCR'de düşmüş → ay) · 11 Haziran 1914 su bölümü ·
  23 Haziran 1914 "principale localité" (adı verilmiyor; Bardaî denmedi) · 1 Eylül 1914 fethin sonu · Zouar ve Bardaî karakolları.
- TDV `tevarik`: merkezi Barday olan Tîbû Reşâde kazası "1900'lü yılların başında" — yıl değil. TDV `cad`: 1913 Senûsîler Borku-Ennedi'den çıkarıldı (Tibesti değil).
- 🔴 FARK: künye t `1914-01-01` ↔ kaynak 1 Eylül 1914 (gün mevcut). **Doğuş bulunamadı.**
- Lanne 1993 (Persée outre) yalnız arama özetinde görüldü — kullanılmadı.

## zende
- Durosay, 'L'énigme de Zémio' (PU Lyon 1994, okundu): Zémio 1872-1912, Rafaï 1875-1900, Bangassou 1878-1907; Zémio 1909'da Fransız tarafına geçti.
  ⚠️ Kaynak edebiyat incelemesi (Gide), akademik yayınevi; tarihçi teyidi istenebilir. Bangassou (Nzakara/Bandia) Zande değil
  (Dampierre başlığı, Persée) — künyenin "Bangassu" sayımı tartışmalı.
- TDV `orta-afrika-cumhuriyeti`: Fransa 1891-1895 arası Ubangi kuzeyindeki küçük devletleri himayeye aldı (aralık, madde yazılmadı).
- Künye t 1912 ↔ Zémio saltanatının sonu 1912 — uyuşuyor. **Doğuş bulunamadı** (f 1750 kaynaksız).
- Künyedeki 1894 maddesi Britannica + WebSearch özetine dayanıyor — TUR 2 kuralına göre geçersiz kaynak.

## zerma
- **Doğuş ve yıkılış BULUNAMADI.** Okunan: Bornand, JdA 'Entre ciel et terre' (Mounkaïla'ya atfen "vers 1400", "XVIe siècle" — yıl değil);
  'Histoire et mémoire au Niger' bölüm V (PUMI, iki parça okundu: Aouta adı geçiyor, yıl yok). TDV `nijer`: Zarmalar anılıyor, tarih yok.
  Rothiot'nun Zarmakoy Aouta tezi (1898-1913) çevrimiçi okunamadı. Künye t 1898 ve 1700 "birleşme" maddesi DESTEKSİZ.

## sakalava-boina
- Ballarin, J. des anthropologues 2006 (okundu): 1822 Merina Majunga'yı aldı · 1824 Andriantsoly Mayotte'a kaçtı · 1883 ilk Fransız seferi ·
  1895 bombardıman · 1896 Fransız kolonizasyonu · 1902'ye kadar emanetler.
- Ballarin, PU Rennes 2006 (okundu): 15 Ocak 1895 Majunga işgali · 21 Şubat 1902 emanet iadesi.
- TDV `madagaskar` (200): "Aynı yıl" (1883 bağlamı) Majunga işgali · 27 Ocak 1897 III. Ranavalona'nın yönetimden uzaklaştırılması (MERİNA).
- 🔴 FARK: künye t `1897-02-28` Merina monarşisinin sonuna bağlı; Boina kaynakta 1822/1824'te Merina'ya düşmüş, Fransız işgali 15 Ocak 1895.
  Ayrıca TDV Ranavalona için 27 Ocak 1897 diyor (künye 28 Şubat). **Doğuş bulunamadı** (EB/JdA yalnız "XVII-XVIII. yy").

## Özet
- Doğuşu bulunamayan: 10 (ovimbundu, solima-yalunka, tiv, tuareg-accer, tuareg-adag, tuareg-ahaggar, tubu-tibesti, zende, zerma, sakalava-boina).
- Yıkılışı bulunamayan: 1 (zerma).
- Künye–kaynak farkı (t): 4 (tuareg-adag, tuareg-ivellemmedan, tubu-tibesti, sakalava-boina) + çelişki beyanı: accer 1911/1918, Angola TDV tablosu.


---
### H5

H5 — KAMP-EKSIK-KRONOLOJI TUR 2 (9 künye · 19 madde)

Ölçüm: 11 Ekim 2026, bu makine. TDV metni `tdv.py` ile çekildi (HTTP kodu yanında). Dış kaynakların
hepsi AÇILIP OKUNDU (PDF'ler indirildi, metni çıkarıldı); arama özeti kaynak gösterilmedi.
Ham metinler: `tur2/h5/*.txt`, PDF'ler `tur2/h5/dl/`.

TDV slug durumu: `etiyopya` 200 · `habesistan` 200 (yalnız yönlendirme sayfası, 2.317 bayt) · `cava` 200 ·
`endonezya` 200 · `borneo` 200 · `sri-lanka` 200 · `seylan` 200 (yönlendirme) · `hollanda-dogu-hindistan-sirketi` 200 ·
ÖLÜ (302): `zagve` `pontianak` `surakarta` `yogyakarta` `mataram` `tidore` `moluk-adalari` `maluku` `ternate`
`caffna` `yafna` `ryukyu` `okinava`. TDV araması (`?q=mataram`) `hollanda-dogu-hindistan-sirketi`ni aday verdi, GET doğruladı.

## sidamo-kralliklari
- Kaynak: Mebrete Gergiso Demie, AAU *Journal of Indigenous Knowledge and Development Studies* 1/2 (2019), PDF 200. TDV `etiyopya`da Sidâme yalnız etnik grup olarak geçiyor, fetih yılı YOK.
- Künye farkı: **t:1897-01-01 ↔ kaynak 1890** ("Sidama in 1890"). Kaynak 31 Temmuz 1897'de Habte Giyorgis'in "Sidamo ülkesinden geçerek" Borana'ya vardığını da yazıyor — künyenin 1897'si büyük olasılıkla bu Borana seferidir, Sidama'nın fethi değil. Öneri: t 1890'a çekilmeli (kesinlik yıl). Addis Standard "1891" diyor (gazete, kullanılmadı) ⇒ ikinci akademik kaynakla teyit iyi olur.
- `bulunamadı`: DOĞUŞ — gevşek klan konfederasyonu, okunan hiçbir kaynakta kuruluş yılı yok (f:1281 pencere başıdır).
- Lindahl NAI "She–Snoch" cildinde Sidamo maddeleri yer adları, fetih tarihi yok.

## vollayta-kralligi
- Kaynak: B. Lindahl, *Local History of Ethiopia* (Nordic Africa Institute, 2008), "Wel–White" cildi, PDF 200: "Welayita was incorporated into imperial Ethiopia in November 1894" + "finally conquered by Menilek in 1894". Yıl teyidi AAU 2019 ("Wolaita in 1894").
- Künye farkı: **t:1894-01-17 ↔ kaynak KASIM 1894** (ay). 17 Ocak gününün dayanağı bulunamadı; öneri t → 1894-11-01 (kesinlik ay). Künyedeki eski kronoloji maddesi "1894/1896" ikilemini de taşıyor; okunan iki kaynak da 1894 diyor.
- `bulunamadı`: DOĞUŞ — Lindahl "Founded as a state c.1250; Tigray dynasty c.1600" diyor: "c." = YIL DEĞİL ⇒ madde yazılmadı. (Künye kronolojisindeki 1252 Motolomi maddesi bu kaynakla doğrulanamaz.)

## zagve
- Kaynak: TDV `etiyopya` (200), II. TARİH bölümü, müellif Levent Öztürk: "1137'den 1270'e kadar Zague, bu tarihten XVI. yüzyıla kadar da Şüve'de hüküm süren Süleyman sülâlesi" — iki uç da YIL.
- Künye f:1137-01-01 / t:1270-01-01 kaynakla UYUMLU; fark yok. `zagve`, `lalibela` slug'ları ölü (künyenin ic_not'u da aynı şeyi söylüyor).

## pontianak
- Kaynaklar: TDV `borneo` (200, M. Abdul Jabbar Beg): "1772'de ... Pontianak Sultanlığı'nı kurdu" (YIL) · Hasanuddin & Kristanto, *Humaniora* (UGM) XIII/1 2001, PDF 200 — Veth 1854 ve ANRI Borneo-West 16/26 dayanaklı.
- Doğuş GÜNÜ: "7 Januari 1772" yerleşim açılışı (Veth'ten). Künye f:1772-01-01 ⇒ gün 1772-01-07'ye inceltilebilir (TDV yılıyla çelişmez).
- 🔴 ÇELİŞKİ (künye kronolojisi): künyedeki "1771-10-23" maddesi (Kapuas-Landak'a varış) — UGM makalesi Mempawah'tan ÇIKIŞI "23 November 1771" diye veriyor. İki gün (23 Ekim/23 Kasım) aynı olayı mı anlatıyor, okunan kaynaklar karar vermiyor ⇒ `ÖLÇÜLEMEDİ`, künye maddesi kaynağıyla yeniden doğrulanmalı.
- Tâbiiyet: 5 Temmuz 1779 VOC sözleşmesi (gün, ANRI arşiv numarasıyla). harita_degisimi HAYIR yazdım (sultanlık sürdü); VOC'ye toprak tahsisi (Duizen Vierkanten Paal) okunmadığı için yazılmadı — koordinatör tâbi boyası kararını verir.
- Künye farkı: **t:1855-01-01 "Lange Contract" dayanağı BULUNAMADI.** Okunan kaynakta 1855 için tek olgu: 12 Nisan 1855 Sultan Şerif Osman'ın ölümü / Şerif Hâmid'in cülusu (madde olarak yazıldı, HAYIR). `bulunamadı`: YIKILIŞ (sultanlık 1855'ten sonra da sürüyor; egemenlik kaybının günü okunan kaynaklarda yok).

## surakarta
- Kaynaklar: Sutarwinarmo-Supriyono-Puguh, *Indonesian Historical Studies* (Undip) 1/2 2017, PDF 200 — "Giyanti Agreement on 13 February 1755 ... dividing the territory of Mataram into two" (ANRI Arsip Keresidenan Surakarta No. 48) · TDV `hollanda-dogu-hindistan-sirketi` (İ. H. Göksoy): "Mataram Devleti'ni 1755'te biri Surakarta, diğeri Yogyakarta olmak üzere iki prensliğe ayırarak" (YIL — gün UNDIP'ten) · Ni'matul Huda, *IUS QUIA IUSTUM* (UII) 20/3 2013, PDF 200.
- Künye f:1755-02-13 UYUMLU.
- Künye farkı: **t:1945-09-02 ↔ kaynakta 1 Eylül 1945 maklumat (Cumhuriyet'e bağlılık) ve 15 Temmuz 1946 PP 16/SD (Kasunanan siyasî gücünü yitirdi, residenlik oldu).** 2 Eylül için dayanak yok. Öneri: egemenlik kaybı = 1946-07-15 (yıkılış), 1945-09-01 tâbiiyet. (Her ikisi de 1923 penceresinin dışında.)
- TDV `endonezya`/`cava`: Cava Savaşı 1825-1830, "Hollanda bu savaş bahanesiyle Yogyakarta ve Surakarta'ya bağlı kenar bölgeleri de ... ilhak" — rakamı taşıyan cümle SAVAŞIN süresini tarihliyor, ilhakın kendi yılı yok ⇒ ilhak maddesi YAZILMADI (künyedeki 1830-03-28 maddesi bu TDV cümlesiyle günlenemez).

## yogyakarta
- Kaynaklar: UNDIP 2017 (13 Şubat 1755, Mangkubumi = Hamengku Buwana I) · TDV hollanda-dogu-hindistan-sirketi (1755 yıl) · TDV `cava` (Mustafa L. Bilge): Diponegoro "1825 yılında ... baş kaldırdı", savaş 1825-1830 · Huda 2013: 5 Eylül 1945 Amanat (HB IX + Paku Alam VIII).
- Künye f:1755-02-13 UYUMLU. t:1923-10-29 pencere ucudur (sınır işareti), fark sayılmadı.
- `bulunamadı`: YIKILIŞ — sultanlık sona ermedi; 1945 amanatı Cumhuriyet'e katılım (tâbiiyet) olarak yazıldı, yıkılış değil.
- Not: TDV `endonezya` Diponegoro'yu "II. Hamengkubuvana'nın büyük oğlu" diyor; künye kronolojisi (Carey) onu III. Hamengkubuwono'nun büyük oğlu olarak anıyor — maddeye yazılmadı, iki tarafı bildiriyorum.

## tidore-sultanligi
- Kaynaklar: TDV `hollanda-dogu-hindistan-sirketi` (Göksoy): "İspanyollar'ın 1663'te Tidore'yi boşaltmalarından sonra bu adaların tamamını hâkimiyeti altına aldı" · Atlas of Mutual Heritage (Nationaal Archief + RCE + Rijksmuseum + KB) "Tidore" (200): "In 1605 the VOC conquered the island of Tidore" ve İspanyolların 1663'e kadar kaldığı · AMH "Tahula, fort": İspanyollar Tidore'yi 1606-1607'de aldı (ARALIK ⇒ madde yazılmadı).
- 1605 "fetih" maddesi harita HAYIR yazıldı: kaynak "adayı fethetti" diyor ama sultanlığın sona erdiğini söylemiyor; hemen ardından İspanyollar adaya yerleşiyor. Haritaya yansıtılmadan önce ikinci kaynak gerekir.
- `bulunamadı`: DOĞUŞ (TDV `endonezya`: Tidor prensi "XV. yüzyılın son çeyreğinde" müslüman oldu — yıl değil) · YIKILIŞ (t:1923-10-29 pencere ucu; okunan kaynaklarda egemenlik kaybı günü yok). Künye f/t pencere uçları ⇒ fark sayılmadı. Tidore, Ternate, Moluk slug'ları TDV'de ölü.

## yafna
- Kaynaklar: Z. Biedermann, "Ceylon", *Portuguese Empire / EVE* (CHAM, NOVA FCSH), sayfa 200: 1560 Dom Constantino de Bragança seferi; Filipe de Oliveira "managed to seize the kingdom of Jaffna for the Portuguese India in 1619" · TDV `sri-lanka` (İ. H. Göksoy): Jaffna'daki Hindu Tamil krallığı "XIII. yüzyılda" — yıl değil.
- Künye farkı: **t:1619-02-01 ↔ kaynak yalnız YIL 1619.** 1 Şubat gününün dayanağı bulunamadı; öneri 1619-01-01 (kesinlik yıl) ya da günü veren kaynak bulunana kadar beyan.
- `bulunamadı`: DOĞUŞ (TDV "XIII. yüzyıl"; künye kronolojisindeki 1215 Kalinga Magha maddesi okunan kaynaklarda yok). Biedermann'ın "throne of Jaffa, Ethirimanna Cinkam (1591-1616)" ibaresi yazım bakımından belirsiz, kullanılmadı.

## sanzan
- Kaynak: 文化庁 文化遺産オンライン "佐敷城跡" (200), 『中山世譜』『球陽』 dayanaklı: "1416年に北山を滅ぼし、さらに南山を平定して、1429年に琉球で最初の統一王朝を樹立した".
- Künye t:1429-01-01 UYUMLU (yıl). 1416 künye kronolojisiyle uyumlu.
- Künye farkı: **f:1322-01-01 dayanaksız** — okunan kaynakların hiçbiri Sanzan bölünmesine yıl vermiyor; 1322 yalnız ansiklopedi aynası sitelerde (kullanılmadı) görüldü ⇒ `bulunamadı` (DOĞUŞ).
- ÇELİŞKİ (okunmadı, yalnız işaret): arama sonuçlarında Hokuzan'ın düşüşü için 1419 ve 1422 (Mypedia) de geçiyor; resmî kurum 1416 diyor — okunan kaynak bu.

## Özet sayılar
- 9 künye · 19 madde (kuruluş 4 · yıkılış 6 · fetih 2 · tâbiiyet 4 · diğer 3 — `tur` sütunu).
- Doğuşu bulunamayan: sidamo, vollayta, tidore, yafna, sanzan (5) · yıkılışı bulunamayan: pontianak, yogyakarta, tidore (3) ⇒ en az birinde eksik: 7 künye.
- Künye-kaynak farkı: 6 künye (sidamo t · vollayta t · pontianak f-gün + t · surakarta t · yafna t-gün · sanzan f) + 1 künye-içi kronoloji çelişkisi (pontianak 23 Ekim/23 Kasım 1771).


---
### H6

H6 — TUR 2 kronoloji önerisi (9 künye · 37 madde)

Ölçüm: 11 Ekim 2026, EMRELIC. Her kaynak sayfası curl/WebFetch ile AÇILIP okundu (HTTP kodu yanında); arama özeti kaynak gösterilmedi.
Okunamayan (yazılmadı): UNESCO whc.unesco.org 403 · api.parliament.uk 500 · Britannica (talimat: 403).

## taiping
- Kaynak: Hong Kong SAR Hükümeti basın bülteni 19.05.2011 (Tarih Müzesi sergisi) **200** · EB1911 «Nanking» (Wikisource) **200**. TDV `taiping` **302** (ölü).
- Doğuş 1851-01-11 GÜN ✓ künyeyle aynı. Yıkılış 1864-07-19 GÜN ✓ künyeyle aynı (EB1911 yıl teyidi).
- **FARK:** künye maddesi Nanjing 1853-03-19 GÜN; okunan kaynak yalnız **Mart 1853** (ay) diyor → `1853-03-01 ay` önerildi; 19 Mart günü bulunamadı.
- Eklenen: 1861 Anqing (yıl), Aralık 1863 Suzhou (ay), 1864-06-01 Hong'un ölümü (gün).

## tungning
- Kaynak: USC US-China Institute — 1662 Koxinga-Hollanda antlaşmasının metni (BİRİNCİL) **200** · World Historical Gazetteer essay **200** · W. Campbell 1896 (Utrecht Üniv. Kütüphanesi tam metin) **200** · Berkshire Encyclopedia of China «Qing Government Unifying Taiwan» **200** (anlatı var, mîlâdî YIL vermiyor; kullanılmadı).
- **Doğuş BULUNAMADI:** künye f 1650-01-01 (Amoy üssü) okunan hiçbir kaynakta yıl olarak yok; WHG yalnız "1646'dan sonra Xiamen'e çekildi" diyor. Yazılmadı.
- **FARK 1:** künye 1661-04-30 (sefer başlangıcı) ↔ antlaşma metni kuşatmayı "since 1st May 1661" ile başlatıyor (Hollanda/Gregoryen tarih). İki farklı olay olabilir (çıkarma ↔ kuşatma); `1661-05-01` önerildi.
- 1662-02-01 GÜN ✓ künyeyle aynı (antlaşma metni).
- **FARK 2:** künye t 1683-10-05 GÜN ↔ okunan kaynak yalnız **1683 yıl**. Gün için dolaşan değerler (5 Eylül teklif / 3 Ekim / 8 Ekim) yalnız Vikipedi'de; hiçbiri 5 Ekim değil → künye günü kaynaksız.

## tannu-tuva
- Kaynak: **TDV `tuva` (Ahmet Taşağıl, 2019) 200** — künyenin "TDV kapsam dışı" beyanı YANLIŞ; madde var ve gün veriyor. Künyenin dayandığı Britannica bu makineden okunamıyor (403) → künye kaynağı TDV ile değiştirilmeli.
- Doğuş 1921-08-14 GÜN ✓ künyeyle aynı. Yıkılış: TDV «11 Ekim 1944 tarihinde alınan bir kararla ... Sovyetler Birliği Muhtar Bölgesi» (künye t 1923-10-29 pencere ucu, fark değil).
- Öncül olgular (künye f'sinden ÖNCE, CSV'ye konmadı): 1911 bağımsızlık teşebbüsü, "üç yıl sonra" (1914) Rus himayesi, 18 Temmuz 1918 ilk kurultay — hepsi TDV'de.

## rapa-nui
- Kaynak: Armada de Chile «Policarpo Toro Hurtado» **200** · EB1911 «Easter Island» **200**.
- **Doğuş BULUNAMADI (kural gereği):** künye f 1200 = Hunt & Lipo "about 1200" — radyokarbon YAKLAŞIK; talimat "yaklaşık yıl değildir" der → yazılmadı. **FARK:** künye f'si yaklaşık bir değerdir.
- 1722-04-05: EB1911 "Easter day 1722" der; gün Gregoryen Paskalya hesabıdır (5 Nisan 1722), türetilmiş — istenirse `1722-01-01 yil`e indirilebilir.
- Yıkılış 1888-09-09 GÜN ✓ künyeyle aynı. Eklenen: 1863 nüfus kaçırılması (yıl), 1887-10-19 Toro'nun gelişi (gün).

## tonga-kralligi
- Kaynak: ABD Dışişleri Office of the Historian «Tonga» **200** · EB1911 «Tonga» **200** · Tonga Anayasası 1875 önsözü (constituteproject.org PDF) **200** + WIPO Lex **200** · Yeni Zelanda MFAT antlaşma veritabanı **200**.
- **FARK:** künye f 1845-12-04 GÜN ↔ okunan kaynaklar yalnız **1845 yıl**. 4 Aralık günü yalnız Vikipedi/haber/soy sitelerinde (Matangi Tonga sayfası tatili yılsız anıyor) → gün kaynaksız.
- 1875-11-04 ✓ (önsöz: "fourth day of November ... 1875"; Refworld 1 Kasım diyor — okunmadı, çelişki not). 1900-05-18 ✓ (MFAT: "Treaty of Friendship of 18 May 1900").
- **Yıkılış: YOK (uygulanamaz)** — devlet sürüyor; t 1945-09-02 pencere ucu. Himayenin sonu 4 Haziran 1970 (State Dept) pencere dışı.

## tui-tonga-imparatorlugu
- Kaynak: Yale eHRAF — Collocott 1924 (JPS 33) belge özeti **200** (yalnız HRAF özeti okundu, makale tam metni değil). UNESCO tentative list **403 → künye kaynağı bu makineden DOĞRULANAMADI**; 1220 Muʻa maddesi teyitsiz.
- **Doğuş BULUNAMADI:** kaynak "ca. 950 AD" (yaklaşık) → yazılmadı (talimat: MS 1000 yıl vermiyorsa YAZMA). **FARK:** künye f 1000 kaynaksız.
- **FARK (büyük):** künye t 1845-12-04 = tonga-kralligi ile HİZALAMA; kaynak son Tuʻi Tonga Laufilitonga'nın **1865**'te öldüğünü söylüyor → hükümdar çizgisi 1865'e kadar sürüyor. Öneri: t'yi 1865'e çekmek ya da 1845'i "siyasî üstünlüğün devri" olarak ayrı beyan etmek (koordinatör kararı). 9 Aralık 1865 günü yalnız Vikipedi/worldstatesmen'de → yazılmadı.

## norvec-isvec-birligi
- Kaynak: Store norske leksikon (novembergrunnloven/Gisle, Mossekonvensjonen/Sejersted, Riksakten/Mardal-Giørtz, Unionsoppløsningen i 1905/Sejersted-Dørum) hepsi **200** · Stortinget Undervisning PDF **200**. (`Mosskonvensjonen`, `4._november-grunnloven` slug'ları 404.)
- Doğuş 1814-11-04 ✓ ve yıkılış 1905-06-07 ✓ künyeyle aynı; fark yok. Künyenin "BULUNAMADI" dediği Moss Konvansiyonu günü bulundu: **14 Ağustos 1814** (SNL; imza Fredrikstad 15 Ağustos) — künye f'sinden önce, CSV'ye konmadı. İsveç'in tanıması: 16 Ekim Riksdag kararı, 26 Ekim feragat (SNL) — künye notundaki "26 Ekim" teyit.
- Küçük kaynak çelişkisi: evet oyu Stortinget 368 208 ↔ SNL 368 392 (sayı metne yazılmadı).

## piombino
- Kaynak: Treccani DBI «APPIANI, Gherardo Leonardo» (O. Banti, 1961) **200** · Enciclopedia Italiana «PIOMBINO» (Mori/Scaramella, 1935) **200**.
- **FARK 1:** künye f 1399-02-19 ↔ DBI: anlaşma **13 Şubat 1399**; Pisa'nın Visconti temsilcisine resmî teslimi "il iq successivo" (OCR; büyük olasılıkla 19'u). Senyörlüğün ayrılması 13 Şubat anlaşmasıdır; 19 Şubat Pisa teslimidir. 13 Şubat önerildi.
- **FARK 2 (künye bitişi ve metni yanlış):** EI: 1548'de Cosimo I Piombino'yu GEÇİCİ işgal etti, **1557**'de Iacopo VI'ya iade etti; 1594 prenslik; Appiani hâkimiyeti **1634**'te Ludovisi'ye geçişle bitti. Künyenin 1548 maddesi ("V. Karl iade etti") iade ile işgali karıştırıyor. Öneri: t 1634'e uzatılsın, 1548-1557 Medici işgali ayrı dilim olsun (koordinatör kararı). 1557/1594/1634 maddeleri bu yüzden künye t'sinden sonra olsa da CSV'de.

## prusya-dukaligi
- Kaynak: NDB «Albrecht der Ältere» (W. Hubatsch, 1953) **200** · ADB «Friedrich Wilhelm» (Erdmannsdörffer, 1878, Wikisource) **200** · ZfO kitap tanıtımı (Wehlau 1657 yıl teyidi) **200** · TDV `prusya` (Kemal Beydilli) **200**.
- Doğuş 1525-04-08 ✓ (NDB «am 8.4.1525 ... Frieden zu Krakau»), yıkılış 1701-01-18 ✓ (TDV) — künyeyle aynı, fark yok.
- Künyenin "1618 şahsî birlik ÖLÇÜLMEDİ" notu: NDB — Albrecht Friedrich (ö. 18.8.1618) ölünce Prusya veraset antlaşmasıyla kurfürst koluna geçti (madde eklendi). Labiau 20.11.1656 (ADB) eklendi.

## Özet
- 9 künye · 37 madde. Doğuşu bulunamayan: 3 (tungning, rapa-nui, tui-tonga). Yıkılışı bulunamayan: 0 (tonga-kralligi uygulanamaz: devlet sürüyor).
- Künye-kaynak tarih farkı: 10 (taiping 1853 · tungning f, 1661, t · rapa-nui f · tonga f · tui-tonga f, t · piombino f, t). Ek kaynak kusuru: tannu-tuva "TDV kapsam dışı" beyanı yanlış.
