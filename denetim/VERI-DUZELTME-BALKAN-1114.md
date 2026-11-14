# VERI-DUZELTME-BALKAN-1114 (UMIT, 14 Kasım 2026)

Ölçüm yeri: UMIT worktree `umit-1113-bizans`, taban `origin/umit-1113-kaynak` (2c15a5411). denetle/antlaşma_doğrula koşturulmadı (görev kuralı).

## Kaynak erişimi (dürüst beyan)
- Fine, *The Late Medieval Balkans* (archive.org `latemedievalbalk00fine`): tam metin 401 (ödünç kitap) — YALNIZ arama parçacıkları (FTS) okunabildi; kesin tarihli cümle çıkmadı. `medievalbalkans` kimliği aslında erken dönem cildi (MS 1180'e dek): 13.-15. yy yok.
- Ćirković, *The Serbs* (archive.org `sima-cirkovic-the-serbs`): tam metin kısıtlı (459 karakter döndü) — OKUNAMADI.
- Bağımsız çift: **Hrvatska enciklopedija (LZMK)** ⟂ **Treccani, Enciclopedia Italiana** (iki ayrı yayıncı; Treccani'de Sebenico/Cattaro/Spalato maddeleri okundu). LZMK içi maddeler (zadarski mir, dalmacija…) tek kaynak sayıldı.

## Satırlar
Biçim: kayıt · mevcut zincir · kaynak dönemi · kaynak (okunan cümle) · iki uç ölçümü · öneri · durum

### 1. Şibenik (Sebenico) — data/yerlesimler_ek.js:155 — **UYGULANDI (Bosna 1390-91 + Venedik 1322-58, KASA kararı 14.11)**
- **BALKAN-1114b (KASA kararı 14.11):** Venedik dönemi eklendi, yeni madde `data/olaylar_2s_0918.js` sonunda (1322-03-01; + `data/olay_taraf.js`). Zincir (eski → yeni): macaristan 1281→1390-06-01 | bosna 1390-06-01→1391-01-01 | macaristan →1412-10-30 | venedik 1412→ ⇒ macaristan (Bribirski, BEYANLI YAKLAŞIKLIK: devlet kimliği yok) 1281→1322-03-01 | venedik (eksklav) 1322-03-01→1358-02-18 | macaristan 1358-02-18→1390-06-01 | bosna 1390-06-01→1391-01-01 | macaristan →1412-10-30 | venedik. 1322-03-01: Treccani «si dà il 1° marzo 1322» = Šibenik'in Venedik'e kendini verişi (gün). Bitiş: Treccani Venedik'ten ayrılışı 14 Aralık 1357, atlas 1358-02-18 (Zadar Antlaşması, kronoloji_venedik.js:122 + olaylar_2s_0918.js:164; fark 66 gün, kayıtta beyanlı). Bosna uç günleri: «gün komşudan: kronoloji_balkan.js:693/698 (kendi kaynağı)» kayda yazıldı.
- **ÖLÇÜLMEDİ:** Değişmez 2 eşleşmesi 1358-02-18 ucunda (Zadar maddeleri Zadar/Dubrovnik yer_id'li; Šibenik için ayrı madde yok) ve kronoloji_balkan.js'in Değişmez 2 evreninde olmadığı (denetle yalnız olaylar*/kronoloji_sinir*) — denetle koşturulmadı.
- Önce: macaristan 1281-01-01→1412-10-30; venedik 1412-10-30→1797.
- Kaynak: HE «Od 1390. … priznavao je vlast bosanskoga kralja Tvrtka I.»; HE «knezova Bribirskih (do 1322)»; HE «1412. ponovno … Mletačke Republike»; Treccani «di Tvarco re di Bosnia (1390-91)», «di Sigismondo d'Ungheria (1391-1402)», «Venezia, alla quale si dà il 1° marzo 1322, e sotto la quale rimane sino al 1357», «non tornò durevolmente a Venezia il 30 ottobre 1412».
- UYGULANAN: macaristan →1390-06-01 | bosna 1390-06-01→1391-01-01 (kesinlik yil) | macaristan 1391-01-01→1412-10-30. 
- Uç ölçümü: 1390-06-01 → data/kronoloji_balkan.js:693 «Kral unvanının genişlemesi — Dalmaçya kıyı şehirlerinin alınışı» (odak_yer Şibenik; tam gün) VAR. 1391-01-01 → kronoloji_balkan.js:698 «Tvrtko I'in ölümü» (1391-01-01) VAR. 1412-10-30 ucu değişmedi (Treccani günü ile aynı).
- UYGULANMAYAN: **Venedik 1322-03-01→1357/58** (iki kaynak da söylüyor). Neden: 1322-03-01 ucunda kronoloji maddesi YOK (taranan: olaylar*, kronoloji*; yalnız 1358-02-18 Zadar Antlaşması [kronoloji_venedik.js:122, olaylar_2s_0918.js:164] var). Yeni madde (+çeviri/olay_taraf) gerekir → KASA/EMRELIC. Bitiş ucu: Treccani «14 dicembre» (1357) ↔ HE «mira u Zadru (1358)»: öneri 1358-02-18 (hukukî devir; Zadar maddesi ±0 gün).
- Önerilen ek zincir: macaristan(Bribirski, BEYANLI)→1322-03-01 | venedik 1322-03-01→1358-02-18 | macaristan →1390-06-01 …

### 2. Split (Spalato) — yerlesimler_ek.js:166 — **UYGULANDI (BALKAN-1114b, KASA kararı 14.11)**
- **Uygulama:** macaristan 1281→1420 ⇒ macaristan 1281→1327-09-18 | venedik (eksklav) 1327-09-18→1358-02-18 | macaristan 1358-02-18→1420-01-01 (kesinlik yil) | venedik 1420. Yeni madde: `data/olaylar_2s_0918.js` «Split'te Macar egemenliği sona erdi — Venedik idaresi başladı» (1327-09-18; + olay_taraf.js).
- **Treccani cümlesinin tarihlediği (tam metinden okundu 14.11):** «…sovranità ungherese… fino al 18 settembre 1327» = **Macar egemenliğinin SONA ERDİĞİ gün**; Venedik'e teslim aktının günü değil, hemen ardından gelen «Segue un trentennio di amministrazione veneziana» Venedik'in başladığını söyler. «dal 1357 al 1420… nuovamente… ungherese»: bitiş yılı 1357, gün yok; HE «1327–57» yıl. Atlas bitişi 1358-02-18 (Zadar) beyanlıdır. Bosna 1390/Hrvoje 1403 yalnız HE ⇒ uygulanmadı. Aşağıdaki «Mevcut/Uç ölçümü» satırları UYGULAMA ÖNCESİ ölçümdür:
- Mevcut: macaristan 1281→1420-01-01; venedik 1420→.
- Kaynak: Treccani «fino al 18 settembre 1327» Macar; «Segue un trentennio di amministrazione veneziana»; «dal 1357 al 1420, nuovamente la diretta sovranità ungherese»; «Nel 1420 si afferma la piena signoria di Venezia». HE «Godine 1327–57. grad se nalazio pod mletačkom vlašću»; «Od 1420. do 1797. … mletačkom vlašću»; HE ayrıca Bosna 1390 (Tvrtko, Dabiša), Ladislas 1402, Hrvoje herceg 1403, Sigismund 1413 (Treccani Hrvoje 1403-1411 duca; Bosna/Napoli'yi vermez → tek kaynak, uygulanmaz).
- Uç ölçümü: 1327-09-18 civarında madde YOK (taranan: «1327» + Dalmaçya/Split/Venedik: sonuç yok) → yeni madde şart. 1357/58 ucu: 1358-02-18 Zadar maddesi VAR. 1420 ucu: kd/madde mevcut (kronoloji_venedik.js 1409-07-09 satın alma ayrı; 1420 için Split madde taranmadı — ölçülmedi).
- (Eski öneri uygulandı: 1327 maddesi yazıldı; Durum yukarıda.)

### 3. Klis — yerlesimler_ek.js:224 — **LİSTEDE (1 kaynak) — KASA kararı 14.11: 3. bağımsız kaynak olmadan uygulama yok**
- Mevcut: macaristan 1281→1527; macaristan-habsburg 1527→1537-03-12.
- HE: XIII. yy. Split kneza Domald; XIV. yy. Bribirski ve Tvrtko I.; XV. yy. ilk yarı Nelipčić, Frankapan, Talovci; «God. 1466. došao je pod vlast hrvatsko-ugarskih kraljeva»; «God. 1537. bio je osvojen». Atlasta macaristan 1281'den = HE'ye göre 1466'dan öncesi yerel/Bosna. Treccani «Clissa» okunamadı (arama sayfası döndü). 2. kaynak aranacak. 1466 ucu kronoloji ölçülmedi.
- Not: yerel hâkim için devlet kimliği (Bribirski/Nelipčić) devletler.js'te yok → 'devlet kimliği yok'; kayıt BEYANLI YAKLAŞIKLIK olarak macaristan kalır.

### 4. Kotor — yerlesimler_ek.js:177 — **LİSTEDE (çelişki + devlet kimliği yok) — KASA kararı 14.11: 3. kaynak olmadan uygulama yok**
- Mevcut: sirbistan-nemanjic 1189→1371; macaristan 1371→1420; venedik 1420→.
- HE: «Punu autonomiju … pod Nemanjićima (1186–1371)»; 1371-84 hrvatsko-ugarski krallar; 1384-91 Bosna; «neovisnosti (1391–1420)». Treccani: Nemanja soyu «estinti (1366)»; «nel 1385 fu ceduta al re di Bosnia»; «nel 1392 era indipendente»; «25 luglio 1420» Venedik. ÇELİŞKİ: Macar 1371-84 yalnız HE'de (Treccani yok) → hakemli karar için 3. kaynak aranacak. İKİ KAYNAĞIN AYNI DEDİĞİ: 1385(±1) Bosna, ~1391-92 sonrası bağımsız, 1420-07-25 Venedik — atlasta macaristan 1371-1420 bu iki kaynakla çelişir.
- Uygulanmadı: bağımsız şehir devleti için `devletler.js` kimliği yok; 1420 gün ucu (Treccani 25 Temmuz) için madde ölçülmedi. Öneri: 1384/85–1391/92 bosna, sonra beyanlı boşluk/komşu zinciri kuralı.

### 5. Alba Iulia (Erdel Belgradı) ve Braşov — yerlesimler_ek29.js:75, :91 — **UYGULANMADI (Emre onaylı tasarım kararı) — KASA kararı 14.11: DOKUNMA; soru denetim/EMRE-SORULARI-1114.md'de**
- Mevcut: erdel 1556-03-12→1711-04-29, habsburg 1711-04-29→1867-06-20.
- Kaynak: HE «Alba Iulia»: «s kojom je 1699. došao pod habsburšku vlast»; TDV Erdel (Karpat, c.11): «1699 Karlofça ile Avusturya'ya terk» (erdel_oneri.md'de OKUNDU). İki bağımsız kaynak 1699 der.
- Uç ölçümü: 1699-01-26 → olaylar.js:120 «Karlofça Antlaşması» VAR; 1711-04-29 → «Szatmár» maddesi VAR (erdel_oneri.md).
- Neden uygulanmadı: kayıtların kendi kaynak:'ı «TASARIM KARARI … atlasta zincir 1711-04-29'dan» (Emre onayı 12 Kasım 2026) der ve künye erdel t=1711; tek-tek iki şehri 1699'a çekmek Erdel zincirinde tutarsızlık yaratır. Karar Emre/KASA'nın: tüm Erdel zinciri (Kolozsvár, Szeben… + künye) 1699-01-26'ya çekilsin mi?

### 6. Herceg Novi (Herseknovi) — yerlesimler_ek.js:245 — **LİSTEDE (çelişki) — KASA kararı 14.11: 3. kaynak olmadan uygulama yok**
- Mevcut: hersek →1482-01-01; osmanlı d 1482-01-01→1687-09-30; isg ispanya 1538-01-01→1539-08-10.
- HE: «Godine 1483. zaposjeli su ga … Osmanlije, a 1538. zauzeli su ga Mlečani … Od 1539. ponovno … osmanskom vlašću». Atlas: 1482 (TDV bosna-hersek «1482 başları»; TDV mostar 888/1483). 1 yıl fark TDV içinde de var. Hakemli karar için 3. akademik kaynak aranacak (Fine Late: okunamadı).
- 1538-39: HE «Mlečani» ↔ atlas isg «ispanya» (Kutsal Birlik/İspanyol garnizonu); kaynak çelişkisi, çözülmeden değişmez.
- Uç: 1482-01-01 → olaylar_ek5.js:145 «Hersek'in ilhakı» VAR (gün «1482 başları»).

### 7. Trebinje (Trebinye), Konjic (Koniçe), Visoko, Bihać — **Avusturya 1878 vs 1908: ÇÖZÜK (değişiklik yok)**
- **KASA onayı 14.11: Trebinje / Konjic / Bihać — hata yok (onay).** (Visoko'nun 1878 isg'si de çözük; Visoko 1448/1463 sorusu madde 8'de ayrı.)
- Kayıtlarda `isg:[{f:1878-07-29 (Bihać 1878-09-18), t:1908-10-05, d:avusturya}]` zaten var; s: avusturya 1908-10-05 hukukî devir (ilhak). HE Bihać/Visoko/Konjic/Trebinje «1878 … austrougarsku vlast» ile uyumlu. Hata yok.
- Bihać: HE «19 Haziran 1592» = atlas d f 1592-06-19 (eşleşir); 1527-1592 Habsburg/Macar: HE «Frankapan (1412–1527)» uyumlu.
- Konjic: HE «Između 1463. i 1469. Konjic su osvojili Osmanlije» ↔ atlas 1463-06-01 (üst sınır ile uyumlu; gün teyitsiz, önceki turda beyan edildi).
- Trebinje: HE «Kosače (1438–66)» ↔ atlas hersek 1448→1466 (1438/1448 farkı: atlas 1448 Stjepan'ın dük unvanı; TDV 'XV. yüzyıl ortası' — 2. kaynak yok, dokunulmadı).

### 8. Visoko 1448 / 1463 — yerlesimler_ek2.js:51 — **LİSTEDE (1 kaynak, 2. aranacak) — KASA kararı 14.11: 3. kaynak olmadan uygulama yok**
- Mevcut: bosna →1448-01-01; osmanlı d 1448-01-01→1908-10-05.
- HE: «Pod osmansku vlast mirnim putem došlo je 1463.»; Visoko 1420'den Klešić. TDV'de Visoko maddesi yok (arama: yalnız ek geçişler). 1448 ucu `olaylar_ek10.js:569`ın yer kolu (Saray ovasının ilhakı, TDV saraybosna) — Saraybosna ovası ≠ Visoko'nun fethi kanıtı. Atlasın 1448'i yerleşim tanıklığı değil, olayın kaynağı (kayıtta BEYANLI). Önerilen: 1463-06-01 (olaylar_ek.js:55 «Bosna Krallığı'nın yıkılışı» VAR). 2. kaynak (Fine Late/Ćirković/TDV bosna) okunamadı → UYGULANMADI.

### 9. Belgrad 1355 — data/yerlesimler.js:562 (yerlesimler.js = dokunulmaz) — **KUYRUKTA**
- Bkz. denetim/YERLESIMLER-JS-KUYRUK-1114.md «BALKAN» bölümü.

## Özet
Uygulanan: 2 kayıt (Şibenik: Bosna 1390-91 + Venedik 1322-58; Split: Venedik 1327-58; 2 yeni madde olaylar_2s_0918.js). Listede (3. kaynak olmadan uygulama yok): Klis, Kotor, Herceg Novi, Visoko; Emre kararı: Alba Iulia/Braşov; çözük: Trebinje/Konjic/Visoko 1878; yerlesimler.js kuyruğu: Belgrad.
Ölçülmedi: Split 1420 gün ucu madde taraması; Klis 1466 ucu; Kotor 1385/1420 uçları; Fine/Ćirković tam metni.

## PARTİ 1 (BALKAN-1114d, UMIT, 14 Kasım 2026) — Adriyatik/Dalmaçya tarama
Ölçüm yeri: UMIT worktree `umit-1113-bizans`. denetle/antlasma_dogrula/paketle/surum_damgala KOŞTURULMADI (görev kuralı); yalnız `node --check`.

### 9. Zadar (Zara) — data/yerlesimler_ek.js:152 — **DÜZELTİLDİ (1 uç: Venedik 1409 başlangıcı gün hassasiyetine)**
- Önce: ... venedik 1202-11-15→1281 | venedik(eksklav) 1281→1358-02-18 | macaristan 1358-02-18→1409-01-01 | venedik(eksklav) 1409-01-01→1797-10-17 | avusturya →1806-02-01 | ...
- Kaynaklar (okundu 14.11): Treccani «Zara» (treccani.it/enciclopedia/zara_(Enciclopedia-Italiana)/): «Nel 1358 il dominio veneziano s'interrompe»; «Nel 1409 Venezia ottiene da Ladislao la cessione della Dalmazia»; «Il 31 luglio, giorno che fu poi santificato…» provveditori şehre girer, signoria «durerà fino al 12 maggio 1797» (31 Temmuz = Zara'nın teslimi/idarenin başlangıcı, satış aktı DEĞİL); «nel 1202 … Dandolo». HE «Zadar» (önceki tur, tam metin): Zadar Barışı (1358), Ladislav satışı 1409 (yalnız yıl), 1797.
- Uç ölçümü: 1202-11-15 uyumlu (TDV Haçlılar) · 1358-02-18 uyumlu (iki kaynak yıl 1358; Zadar Antlaşması günü madde olaylar_2s_0918.js:164) · **1409: atlas 1409-01-01, Treccani 1409-07-31 (fark +211 gün); HE yalnız yıl** ⇒ yıl iki bağımsız kaynakta uyumlu, gün tek kaynak (Treccani) · 1797: Treccani «12 maggio 1797» (Venedik Cumhuriyeti'nin düşüşü; atlas 1797-10-17 Campo Formio hukukî devir) — Zadar'a Avusturya askeri girişi Treccani'de 30 Haziran 1797: HUKUKÎ/FİİLÎ AYRIM, DEĞİŞTİRİLMEDİ (atlas ucu Campo Formio, olaylar_ek16.js:137 madde var) · 1806-02-01 Fransız (zaten LZMK).
- UYGULANAN: macaristan 1358-02-18→**1409-07-31** | venedik 1409-**07-31**→1797-10-17. Yeni madde `data/olaylar_2s_0918.js` sonu «Zadar Venedik idaresine girdi — Santa Intrada» (1409-07-31, gün hassasiyeti, `ic_not_d`'de «gün tek kaynak» beyanı; satın alma aktı 1409-07-09 kronoloji_venedik.js:166 ayrı olay, Değişmez 2 evreni dışı, çoğaltma yok) + `data/olay_taraf.js` ["macaristan","venedik"].
- Açık/beyanlı: 1358-1409 aralığında Treccani Macar kraliçeleri, Sigismund, Napolili Ladislas (1403 Zadar'da taç) sayar; atlasta tek `macaristan` (BEYANLI YAKLAŞIKLIK, ardıl hâkim ayrımı için devlet kimliği yok). `kd:[{f:1409-01-01...}]` alanına DOKUNULMADI (kd'nin anlamı bu işte ölçülmedi). Değişmez 2: kırılma 1409-07-31, madde aynı gün ⇒ ±30 gün sağlanıyor (ölçülmedi: denetle koşturulmadı). Eski 1409-01-01 ucunda madde yoktu.

### 10. Trogir (Trau) — data/yerlesimler_once1281_yt_avrupa.js:560 — **LİSTEDE (kayıt 1281'de bitiyor; 1281 sonrası zincir YOK — çelişki değil eksik)**
- Mevcut: roma-imp → bati-roma → __BOSLUK__ 476→1281-01-01; `bit:"1281-01-01"`. 1281 sonrası bu adla başka kayıt YOK (grep: Trogir/Trau/Traù data/*.js, paket hariç).
- İki bağımsız kaynak (okundu 14.11): HE «Trogir» (enciklopedija.hr/clanak/trogir): «prelaska obaju gradova pod mletačku vlast» (1322); «vratio u sastav Hrvatsko-Ugarskoga Kraljevstva» (1358); Bosna krallarını tanıdı (1390–94); Napoli'li Ladislas (1402–08); «naposljetku 1420., kao posljednji od dalmatinskih gradova, prihvatio mletačku vlast»; «Padom Mletačke Republike 1797. … Habsburške Monarhije»; 1805–13 Fransız. ⟂ Treccani «Traù» (treccani.it/enciclopedia/trau_(Enciclopedia-Italiana)/): «17 aprile 1322» Venedik koruması, «9 luglio 1357»'ye kadar; 1357-1420 sırayla Lodovico (1382), Maria/Elisabetta/Carlo Durazzo (1386), Sigismondo (1390), Bosna kralları (1393), Sigismondo (1402), Ladislao (1409), Sigismondo (1420); «22 giugno 1420» Venedik, «il gonfalone marciano… fino alla caduta della Repubblica (1797)»; Avusturya (1806'ya), Napolyon İtalya Krallığı (1809), İllirya (1813), Avusturya (1918).
- ÖNERİLEN zincir (UYGULANMADI): macaristan(Bribirski, BEYANLI) 1281→1322-04-17 | venedik(eksklav) 1322-04-17→1357-07-09 | macaristan →1390 | bosna-kralligi 1390→1393/94 | macaristan→1420-06-22 | venedik 1420-06-22→1797 | avusturya→1806 | fransa/ilirya →1813 | avusturya →1918. Uç çelişkisi: HE Venedik 1358'e kadar, Treccani 9 Temmuz 1357'ye kadar (Šibenik 14.12.1357 ile aynı örüntü) ⇒ hakemli karar gerek; Bosna ucu HE 1390–94 ↔ Treccani 1393.
- Neden uygulanmadı: kayıt eksik (bit:1281 kaldırılıp 8-9 dönem + ~8 madde eklenmesi yapısal iş; bu parti kapsamı çelişki düzeltmesi). KASA kararı: Trogir 1281+ zinciri yazılsın mı?

### 11. Nin (Aenona/Nona) — yerlesimler_once1281_yt_avrupa.js:288 — **LİSTEDE (1281'de bitiyor; 1281+ zincir yok; tek kaynak)**
- Mevcut: aynı Roma/__BOSLUK__ kalıbı, bit 1281.
- HE «Nin» (enciklopedija.hr/clanak/nin-grad; okundu): «Od 1329. bio je pod vrhovnom vlašću Mletačke Republike»; 1358–1409 Macar-Hırvat; 1409→1797 Venedik; 1571 terk/yakıldı, 1646 yeniden yakıldı; 1797 Avusturya; 1806–13 Fransız. Treccani «Nona» okunmadı (ikinci kaynak yok) ⇒ **1 kaynak, 2. aranacak**; uygulama yok. HE'ye göre 1281-1329 sahibi Bribirski/yerel (devlet kimliği yok). 1646'da Osmanlı değil, Venedik-Osmanlı savaşı yıkımı (Osmanlı egemenliği yok).

### 12. Biograd — yerlesimler_once1281_yt_avrupa.js:263 — **LİSTEDE (s:[] bos:veri-yok, bit 1281; tek kaynak)**
- HE «Biograd na Moru» (okundu): 1125 Venedik yıktı, piskoposluk Skradin'e; 1202 Zadarlı mülteciler yeniden kurdu; XIII-XIV yy Šubići Bribirski, Nelipići; «1409–1797» Venedik; XVI-XVII yy Venedik-Türk savaşlarında yıkıldı (1646 Kandiye). 2. kaynak okunmadı ⇒ uygulama yok. Atlasta sıfır dönem: `bos:"veri-yok"`.

### 13-15. Skradin, Makarska, Omiš, Senj — **ATLASTA KAYIT YOK (data/yerlesimler*.js ad: taraması, paket_*.js hariç; Skradin/Scardona/Makarska/Omiš/Senj/Zengg bulunmadı)**
Karşılaştırılacak zincir olmadığı için çelişki yok; "yeni yerleşim" önerisi (mükerrer taraması: ad + 3 km gerekir) KASA/yazıcı makineye. Okunan HE özetleri (okundu 14.11, 1 kaynak, ikinci kaynak okunmadı):
- Skradin (enciklopedija.hr/clanak/skradin): «Od druge polovice XIII. st. … knezovi Bribirski»; 1356 Venedik; 1358 Zadar barışı Macar-Hırvat; Tvrtko I./Dabiša, Ladislas; 1407 Sandalj Hranić'e devir; 1411 Venedik; 1522 Osmanlı (1683'e dek aralıklı); 1683 sonrası Venedik→1797.
- Makarska (…/makarska): 1324–1452 Kotromanić/Bosna; 1452 Venedik; XV. yy son on yıl Osmanlı («najvjerojatnije»); 1572–73 Venedik; 1646 Venedik; 1671–84 Osmanlı; 1699–1797 Venedik (Karlofça); 1797–1806 Avusturya; 1806–13 Fransız; 1813–1918 Avusturya.
- Omiš (…/omis): XIII. yy sonu Bribirski; Bosna/Radivojević/Hrvoje/Nelipčić/Kosača; «Do uspostave mletačke vlasti (1444)»; Osmanlı yönetimi YOK (yalnız 1498/1509/1542/1544 saldırıları).
- Senj (…/senj): 1271–1302 Frankapani; 1380 Venedik yaktı; 1469 Matija Korvin («slobodni kraljevski grad»); 1537 sonrası uskoklar; 1617 Madrid antlaşması; 1776 Askeri Sınır; 1809–13 Fransız. Habsburg şehir kontrolü 1469'da değil (Korvin) — Habsburg sonrası dönem.
- Treccani'den Omiš/Makarska/Senj/Skradin okunmadı (denenmedi; Zara/Traù üzerinden zaman bütçesi).

### PARTİ 1 özeti
Düzeltildi: Zadar (1 uç, 1 madde). Listede: Trogir (1281+ zincir eksik, 2 kaynak tam), Nin, Biograd (1 kaynak). Atlasta yok: Skradin, Makarska, Omiš, Senj. yerlesimler.js kuyruğuna eklenen yok (hiçbiri o dosyada değil). Ölçülmedi: denetle/Değişmez 2 koşturulmadı; Zadar `kd` anlamı; Treccani Nona/Scardona/Macarsca/Almissa/Segna maddeleri.
