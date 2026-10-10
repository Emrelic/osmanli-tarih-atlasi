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
