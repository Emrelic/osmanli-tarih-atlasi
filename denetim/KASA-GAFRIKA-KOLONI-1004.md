# KASA-GAFRIKA-KOLONI-1004 — doğru soru: kasaba ∈ KOLONİ (YALNIZ ÖLÇÜM)

KASA · 4 Ekim 2026 · koordinatörün sorusu: EB1911 'Cape Colony' ve 'Transvaal' maddeleri kolonilerin **sınırlarını** tarif ediyor mu? Ediyorsa zincir şöyle kurulur: GeoNames koordinatı + koloni sınırı = **iki kaynak, tek geometrik adım**.
Yalnız web okuması yapıldı (Wikisource EB1911, GeoNames arama sayfaları). Ağır betik koşturulmadı. `data/`'ya dokunulmadı.

## ÖNGÖRÜ (ölçmeden önce)
- **Sayı:** 4'ün 4'ü çözülür (Pofadder, Kenhardt, Calvinia → Cape; Louis Trichardt → Transvaal). Dzata ve Tjate ⚪ kalır.
- **Mekanizma:** Ansiklopedi koloni maddeleri "Boundaries" bölümüyle açılır. Cape için Orange nehri kuzey sınırdır, Transvaal için enlem/boylam kutusu verilir. Zayıf nokta: kutu "roughly" diye verilmişse halka sayıdan çok **komşu eleme** ile kapanır.

## HÜKÜM (ölçtüm)
- **Evet, iki madde de sınır tarif ediyor.** Cape sınırı adlı komşular ve nehirle veriliyor, Transvaal sınırı sayısal kutu ve adlı komşularla veriliyor.
- **Öngörü tuttu: 4 / 4 çözülüyor.** Halkanın türü noktaya göre değişiyor; her biri aşağıda ayrı yazıldı.
- **Toplam:** 30 (adlı EB1911) + Springbok (ZINCIR2) + 4 (bu tur) = **35 içeride**. **2 ⚪:** Dzata (koordinat kusuru, ayrı kalem) ve Tjate (bağımsız koordinat yok).

## KAYNAK CÜMLELERİ (EB1911, Wikisource)
- **'Cape Colony' — Boundaries and Area:** "The coast-line extends from the mouth of the Orange (28° 38′ S. 16° 27′ E.) on the W. to the mouth of the Umtamvuna river (31° 4′ S. 30° 12′ E.) on the E. … Inland the Cape is bounded E. and N.E. by Natal, Basutoland, Orange Free State and the Transvaal; N. by the Bechuanaland Protectorate and N.W. by Great Namaqualand (German S.W. Africa)."
- **'Cape Colony' — Orange nehri:** "For a considerable distance, both in its upper and lower courses, the river forms the northern frontier of Cape Colony. In the middle section, where both banks are in the colony…" · "Northward the Orange river, marking the frontier of the colony, cuts its way through the hills to the Atlantic."
- **'German South-West Africa':** "On the east the frontier between British and German territory is in its northern half the 21st degree of E. longitude, in its southern half the 20th degree… The southern frontier is the Orange river from its mouth to the 20° E."
- **'Orange Free State':** "between 26° 30′ and 30° 40′ S. and 24° 20′ and 29° 40′ E."
- **'Transvaal':** "It lies, roughly, between 22½° and 27½° S. and 25° and 32° E., and is bounded S. by the Orange Free State and Natal, W. by the Cape province and the Bechuanaland Protectorate, N. by Rhodesia, E. by Portuguese East Africa and Swaziland."
- **Koloni → Birlik:** London Gazette 28314: "…the Colonies of the Cape of Good Hope, Natal, the Transvaal, and the Orange River Colony, shall be united…"

## SATIR SATIR (her geometrik adım "hesap" diye işaretli)
| nokta | GeoNames | geometrik adım (hesap) | sonuç |
|---|---|---|---|
| **Pofadder** | 3362755, S 29°7′41″ / E 19°23′41″ | 20° D'nin batısında Orange, Cape ile Alman GB Afrika arasındaki sınırdır (EB1911 GSWA + Cape). Nehrin bu boylamdaki noktası: **Onseepkans**, GeoNames 3363309, S 28°44′56″ / E 19°18′7″. Pofadder bu noktanın ~0,38° (~42 km) **güneyinde** ⇒ nehrin Cape yakasında | 🟢 Cape |
| **Kenhardt** | 991396, S 29°20′44″ / E 21°9′28″ | 21,16° D, nehrin "both banks are in the colony" denen orta kesiminde. Orange'ın bu boylamdaki noktası: **Upington**, GeoNames 945945, S 28°26′51″ / E 21°15′22″. Kenhardt bunun ~0,9° (~100 km) **güneyinde**. OFS'in batı sınırı 24°20′ D, Kenhardt ondan ~3,2° batıda ⇒ ne OFS'te ne Bechuanaland'de (o ikisi nehrin kuzeyinde/doğusunda) | 🟢 Cape |
| **Calvinia** | 3369174, S 31°28′14″ / E 19°46′33″ | **Eleme:** Orange'ın güneyinde (~2,7°), 24°20′ D'nin batısında (OFS, Basutoland ve Natal daha doğuda), kıyıya ~1,5° mesafede. EB1911'in Cape'e saydığı komşuların hiçbiri (Natal, Basutoland, OFS, Transvaal, Bechuanaland Prot., Alman GBA) bu kesimde değil ⇒ Cape. Ayrıca dolaylı tanık: "Calvinia Flogging case" (Supreme Court of the Cape Colony, 1904) | 🟢 Cape (eleme ile) |
| **Louis Trichardt** | 981827, S 23°2′37″ / E 29°54′11″ | Transvaal kutusunun (22½–27½ G, 25–32 D) **içinde**. Kutu "roughly" verildiği için kuzey kenara (22½°) ~0,54° yakınlık ayrıca kontrol edildi: Limpopo'daki Rhodesia sınır kapısı **Beitbridge**, GeoNames 895269, S 22°13′0″ / E 30°0′0″. Louis Trichardt bunun ~0,83° (~92 km) güneyinde ⇒ Limpopo'nun Transvaal yakasında. Batı komşusu (Bechuanaland Prot., ~27–28° D'nin batısı) ve doğu komşusu (Port. Doğu Afrika, ~31,3° D) uzakta | 🟢 Transvaal |
| **Dzata (Venda)** | aday iki: Dzata tepesi 1007054 (S 22°55′11″ / E 30°33′42″) · Dzana Ruins 1007056 (S 22°52′11″ / E 30°8′34″) | Atlas (−22.96 / 30.15) iki adaydan birine de oturmuyor: tepeye ~42 km, harabeye ~10 km. Hangisinin kastedildiği belli değil. İkisi de Transvaal kutusunda ve Limpopo'nun güneyinde, yani **sonuç değişmez**, ama koordinatın kendisi kusurlu | ⚪ **ayrı kalem:** koordinat kusuru (D207: atlas koordinatı dayanak olamaz, bağımsız koordinat iki anlamlı) |
| **Tjate (Pedi)** | "We have found no places with the name 'Tjate'" | Bağımsız koordinat yok ⇒ geometrik adım kurulamaz | ⚪ aynı sınıfın ağır hâli |

## UYARILAR (beyan)
1. **Ek koordinatlar:** Onseepkans, Upington ve Beitbridge sınırın **yerini** göstermek için kullanıldı. Üçü de GeoNames'ten alındı, hiçbiri atlastan değil. Nehrin bu noktalardan geçtiği bilgisi kaynak cümlesi değil, nehir kıyısı kasabası/sınır kapısı oldukları içindir. Bunu ayrıca istersen GeoNames'in nehir (stream) kayıtlarıyla bağlarım.
2. **Calvinia sayıyla değil elemeyle kapanıyor.** EB1911 Cape'in güney ve batı sınırı olarak denizi veriyor; iç bölgede Cape dışında kalan bir toprak tanımlamıyor. Bu, Pofadder/Kenhardt'tan bir derece zayıf bir halkadır.
3. **Transvaal kutusu "roughly".** Louis Trichardt kutunun ~0,5° içinde, bu yüzden Limpopo kontrolü eklendi. Sınır payı ~90 km.
4. **Bushmanland sorusu (ZINCIR2) artık gereksiz.** Koloni düzeyinde soru, bölge düzeyindeki belirsizliği atlıyor. Koordinatörün "doğru soru" tespiti bu yüzden tuttu.

## SPRINGBOKFONTEIN — denendi (tekrar beyan)
Önceki turda denendi, ZINCIR2 EK bölümünde yazılı (commit 1ec77d05). Wikisource `Page:EB1911` tam metin: "Springbokfontein" **0** · "Springbok Fontein" **0** · "Ookiep" 0. "O'okiep" 2 kez geçiyor ('Cape Colony', bakır madenleri), Springbok anılmıyor. Sonuç değişmez: Springbok geometrik zincirle içeride.

## ① NE ÖLÇTÜM · ② NE BULAMADIM · ③ NE İSTİYORUM
- ① EB1911 'Cape Colony' ve 'Transvaal' koloni sınırlarını tarif ediyor. GeoNames koordinatıyla Pofadder, Kenhardt ve Calvinia Cape'e, Louis Trichardt Transvaal'a bağlanıyor ⇒ **35 içeride, 2 ⚪**. Springbokfontein denendi, 0 sonuç.
- ② Bulamadıklarım: Tjate'nin bağımsız koordinatı · Dzata'da atlasın hangi yeri kastettiği · Calvinia için sayısal (elemesiz) bir halka.
- ③ İstediklerim: (a) Calvinia'nın eleme halkası kabul mü? · (b) Onseepkans/Upington/Beitbridge'in "sınır yeri" diye kullanılması kabul mü? · (c) Dzata ayrı kalemi: koordinat düzeltmesi senin işin (veri), hangi aday?

Kaynaklar: *Encyclopædia Britannica* 1911 (Wikisource): 'Cape Colony', 'Transvaal', 'German South-West Africa', 'Orange Free State' · GeoNames 3362755, 991396, 3369174, 981827, 3363309, 945945, 895269, 1007054, 1007056 · London Gazette 28314.
