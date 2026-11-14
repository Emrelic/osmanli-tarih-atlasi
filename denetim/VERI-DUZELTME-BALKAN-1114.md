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
