# YAZILAMADI — BALKAN 8 (UMIT, 18 Kasım 2026)

Girdi: `ADAY-BALKAN-DOGUAVRUPA-1118.tsv`, 1. sütun `balkanlar`, 35 satır. Çıktı: `data/sehir_tarihce_balkan_8.js` (16 kayıt, `denetle` ihlal 0, uyarı 9).
Mevcut kayıtla çakışıp ATLANAN 3 (id + ad + takma ad taraması, 2225 kayıt): Chalkis/Chalkida (`balkanlar_r5a` chalkida), Kerkyra (`balkanlar_r5a` kerkyra), Patrai/Patra (`balkanlar_r5a` patra).
Yazılan 16: Larisa, Karditsa, Mesolongi, Karpenisi, Kozani, Čačak, Montana, Murska Sobota, Caracal, Fălticeni, Huși, Miercurea Ciuc (Csíkszereda), Râmnicu Sărat, Turnu Măgurele, Dorohoi, Sighetu Marmației (Máramarossziget).
Yazılamayan 16 (aşağıda).

Yöntem/kaynak: TDV (curl; arama sayfası curl ile çalışıyor ama 429 hız sınırı verdi, yavaşlatıldı), Britannica (tarayıcı içi aynı-köken fetch, ≥450 ms), Hrvatska enciklopedija (tarayıcı içi), Magyar Katolikus Lexikon (tarayıcı içi), Enciclopedia României (curl; wiki altyapısı, yalnız 'Atestare' kutusu — tek kaynak olarak işaretli).

## Kaynak bulunamadı / yıl yok (varlık dahi kaynakla kurulamadı)
- **Slatina (RO)**: Britannica 404; HE 'slatina' Hırvat Slatina'sı; TDV slug yok; ER sayfası sunucu hatası (Fatal error). Atlas noktası var (1281 macaristan), ek kaynak yok.
- **Slobozia (RO)**: Britannica 404, HE yok, ER sayfası yok/hata.
- **Negotin (RS)**: Britannica/HE'de tarihçe cümlesi yok (HE: 1874 kilise, 1934 müze); TDV 'Tikveş' maddesindeki Negotin Makedonya'nın Negotino'sudur (Kavadarcı yöresi) — Sırbistan Negotin'i DEĞİL, kullanılmadı.
- **Zaječar (RS)**: HE yalnız XX. yy sanayi, 1834 kilisesi; Gamzigrad/Romuliana 11 km uzakta (ayrı yer). TDV/Britannica yok.
- **Smolyan (BG)**: Britannica sayfası var ama yalnız coğrafya/nüfus; HE 'smoljan' yok; TDV 'Paşmaklı' yalnız 1912 ilçe listesi.
- **Široki Brijeg (BA)**: HE: 19. yy ikinci yarısı manastır; Mokro (komşu köy) bazilikası V. yy ayrı yerleşim. Şehrin kendi anılışı yok.
- **Orašje (BA)**: HE yalnız nüfus/sanayi; Britannica 404. Atlas noktası var (1863 osmanli), tanık yok.
- **Istočno Sarajevo (BA)**: Britannica/HE yok; 1990'larda kurulan idari birim.
- **Fier, Peshkopi, Kukës (AL)**: Britannica ve HE sayfası yok (slug varyantları 404/'-'); TDV 'fier' arama sonucu ilgisiz.
- **Bijelo Polje (ME)**: Britannica ve HE yok; TDV 'Akova' arama sonucu ilgisiz.
- **Trbovlje (SI)**: HE yalnız "ilk kömür ocağı 1805" (maden, yerleşimin anılışı değil) + 1849 demiryolu; yerleşim anılışı yok.
- **Ferizaj (XK)**: HE yalnız nüfus/sanayi; TDV 'Ferizovik' yok.

## Başka engel
- **Tecuci (RO)**: ER 'Atestare 20 mai 1134' diyor (tek kaynak, belge türü yok, Moldavya künyesi 1359'da başlar); 1134-1359 arası sahip ve 1359 geçişi için kaynaklı olay kurulamadı, kaynaksız bir başlangıç yazılmadı. Sonraki yol: Romen akademik kaynak (Ghinea 2000 / Tecuci monografileri) ile ilk anılış ve ortaçağ sahip zinciri.
- **Gjilan / Gnjilane (XK)**: HE "Stara džamija iz 1772." (cami yılı, anılış değil); atlas noktası 'Gilan (Gjilan)' 1991-09-22'de başlıyor — tarihli kayıt için 1772→1991 zinciri (Osmanlı → 1912 Sırbistan/Yugoslavya → 1991) Balkan Savaşları/Yugoslavya kaynaklarıyla ayrıca kurulmalı; kurulmadı.

## Notlar
- ER (enciclopediaromaniei.ro) 'Atestare' kutuları (Caracal 17 Kas 1538, Dorohoi 6 Eki 1407, Fălticeni 1440, Râmnicu Sărat 8 Eyl 1439, Miercurea Ciuc 1558, Turnu Măgurele 1387) tek kaynaktır, belge türü yok; sonraki turda Ghinea 2000 ya da Romen tarih dergileriyle teyit edilmeli.
- Huși: ER 'Istorie' cümlesi ("Prima atestare documentară a Huşiului datează din 1441") alındı.
- Atlas başlangıcından (1281-01-01) SONRA ilk.t çıkan 5 şehir (atlas başlangıcı düzeltilmeli uyarısı): Dorohoi 1407-10-06, Karditsa 1570, Mesolongi 1642, Râmnicu Sărat 1439-09-08, Turnu Măgurele 1387.
- Larisa/Karpenisi/Kozani/Čačak/Montana/Murska Sobota tarihsiz tanık olarak yazıldı (sahip:[]).


## KASA 17 karari (18 Kasim 2026): wiki-tabanli tek kaynak, dalindan cikarildi

Caracal, Dorohoi (ilk 1407-10-06), Falticeni, Ramnicu Sarat (1439-09-08), Miercurea Ciuc, Turnu Magurele (1387): tek dayanak Enciclopedia Romaniei 'Atestare' kutusu (wiki tabanli; CLAUDE.md: Vikipedi tek dayanak olamaz). Tek kaynak wiki, akademik kaynak aranacak (Romen tarih dergileri, Istoria Romaniei, DergiPark, TIB). Karditsa 1570 ve Mesolongi 1642 atlas-baslangic adaylari ayri degerlendirilir.


## KASA 17 karari (18 Kasim 2026): wiki-tabanli tek kaynak, dalindan cikarildi

Husi (ayni kaynakin Istorie cumlesi), Caracal, Dorohoi (ilk 1407-10-06), Falticeni, Ramnicu Sarat (1439-09-08), Miercurea Ciuc, Turnu Magurele (1387): tek dayanak Enciclopedia Romaniei 'Atestare' kutusu (wiki tabanli; CLAUDE.md: Vikipedi tek dayanak olamaz). Tek kaynak wiki, akademik kaynak aranacak (Romen tarih dergileri, Istoria Romaniei, DergiPark, TIB). Karditsa 1570 ve Mesolongi 1642 atlas-baslangic adaylari ayri degerlendirilir.
