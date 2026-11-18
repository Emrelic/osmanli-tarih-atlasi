# YAZILAMADI — LISTE 2 (UMIT, 18 Kasım 2026)

aday4.tsv: 82 satır (kat 1-3, tarihçesiz sanılan). Mevcut kayıtla çakışan 5 ATLANDI (ad + takma ad + koordinat taraması, 2167 kayıt): Bucuresci (Bükreş, k12), Athenai (athens), Panamá (karayip_2), Chalkida (Eğriboz, k3 chalkis-egriboz-yunanistan), Patra (Balyabadra, k3). 77 aday işlendi: **10 kayıt yazıldı** (data/sehir_tarihce_liste_2.js: Antananarivo, Rijeka, Bârlad, Focșani, Lugoj, Amfissa, Flores (GT), Bor, Adwa, Livadya — 7 tarihsiz tanık + olay, 3 tarihli: Bor 1840, Adwa 1896-03-01, Livadya 1204; Adwa ve Livadya ilk.t atlas başlangıcından sonra, denetle uyarısı "atlas başlangıcı düzeltilmeli"). **67 yazılamadı.**
Yöntem: Britannica /place/ aynı-köken fetch+DOMParser (≥400 ms, görünür p, YZ-SSS hariç; 80 slug, çoğu varyant denemesi); TDV curl (egriboz, livadya, inebahti, koron dışında slug yok/302; arama sayfası JS ister).

## Britannica sayfası yok (slug varyantları 404)
Dzaoudzi, Saint-Pierre (Réunion), Caracal, Dej, Fălticeni, Huși, Odorheiu Secuiesc, Râmnicu Sărat, Sighetu Marmației, Tecuci, Turnu Măgurele, Dorohoi, Dumbrăveni, Negotin, Zaječar, Ćuprija, Gytheio, Karditsa, Karpenisi, Kyparissia, Livadeia (Britannica yok → TDV'den yazıldı), Mahébourg, Debre Markos, Wete, Chake-Chake, Torit, Yambio, Yei, Ambohimanga, Saint-Paul (Réunion), Amatitlán, Livingston, La Unión, Leikanger, Vänersborg

## Sayfa var, tarihçe cümlesi yok / yıl yok (yalnız nüfus, ekonomi, coğrafya)
Wau (yalnız 1965 olayı, ilk anılış sayılmadı), Rumbek, Hadibu (yalnız Sokotra maddesinde ad), Aiud (yalnız "…century bc … Aiud" kesik ilgili-makale parçası; tanık olarak kullanılmadı), Miercurea Ciuc, Sfântu Gheorghe, Slatina (RO), Turda, Zalău, Mesolongi (yalnız bir kişi biyografisi cümlesi), Masaya (1978-79 çatışma; tarihçe yok), Port of Spain, Road Town (en eski bina 1840), Liberia (CR), Zacatecoluca (yalnız 1932 deprem), Barahona, San Pedro de Macorís, Usulután, Cuilapa, Huehuetenango, Jalapa, Jutiapa, Mazatenango, Retalhuleu, Salamá, San Marcos, Zacapa, Juigalpa, Ocotal, Ahuachapán

## Başka engel
- Korinthos (Gördüs/Korint): Britannica 'Corinth' antik şehir; modern Korinthos (1858 deprem sonrası Yeni Korint) antik yerden ~7 km → "antik > 3 km burada yazılmaz" kuralı; ayrı antik kayıt önerisi.
- Nagyenyed/Aiud, Erzsébetváros/Dumbrăveni, Máramarossziget, Csíkszereda, Székelyudvarhely, Sepsiszentgyörgy, Torda, Zilah, Dés: Macar/Romen ulusal kaynaklar (Hrvatska/Romanya/Macar ansiklopedileri) bu turda denenmedi — sıradaki yol: Magyar Katolikus Lexikon / Erdélyi Magyar Lexikon, Romanya DEX/Enciclopedia României.
- Gernik: yer belirsiz ("bulunamadı", Genç/Bingöl yöresi), koordinat yok → yazılmadı.
- Orta Amerika/Karayip (Guatemala, El Salvador, Nikaragua, Kosta Rika, Dominik, BVI, Trinidad): LISTE-1'de denenen Britannica yolu aynı sonucu verdi; sıradaki yol: ELAHC/SciELO/Redalyc, ulusal diccionario geográfico, Columbia/encyclopedia.com (bu makineden 301 → erişilemedi).
- TDV (Osmanlı bölgesi Balkan): Lugos, Zaječar, Negotin, Ćuprija, Karpenisi, Gytheio, Kyparissia, Mesolongi için tahmini slug 302; TDV arama sayfası JS ile yüklendiğinden aday üretemedi (tarayıcı içi arama denenmedi).
- Livadya: TDV'deki en erken yıllı cümle 1204 (Latin fethi); antik Lebadeia daha eskidir, zincir boş (atlas başlangıcı -0026). İkinci kaynak aranmadı.
