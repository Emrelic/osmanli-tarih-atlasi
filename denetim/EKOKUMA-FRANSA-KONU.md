# Ek okuma: FRANSA konu listesi taslağı (envanter, boşluklar, 80 aday)

Tarih: 25-26 Kasım 2026 · Kademe 2 · Aşama 1 (yalnız konu listesi, kart YAZILMADI) · HAVVA, salt-okur
Ölçüm ağacı: `origin/main` (git grep / git show, yazma yok). Kronoloji dökümü: scratchpad `kr_short.txt` (7.587 benzersiz gün|başlık satırı, `kronoloji*.js` + `olaylar*.js`).

## Dürüstlük notları (önce okuyun)
- **İlgi sinyali sütunu ölçülmedi.** Forum/sözlük taraması yapılmadı; "varsayım" = müfredat/kamuoyunda tartışılan bilinen mesele. "arama özetinde görüldü" = bu oturumda web aramasında akademik tartışma izi çıktı.
- **Kaynak künyeleri hafızadandır, açılıp doğrulanmadı** (aşağıda "K" listesi). Açıkça "okundu" diyebileceğim eser YOK. Etiketler: "yalnız özet" = bu oturumda sayfa/arama özetini gördüm (tam metin değil); "okunmadı" = hiç açılmadı.
- Hiçbir olgu popüler siteden alınmadı. "Yaygın yanlış → akademik durum" sütunu bilinen akademik literatürün genel çizgisidir; emin olmadığım yerde "doğrulanmadı".

## 1. Envanter

### Künyeler (`data/devletler.js`, origin/main)
| id | ad | not |
|---|---|---|
| `fransa` | Fransa Krallığı | f 0987-07-03 → t 1792-09-22 |
| `fransa-cumhuriyet` | Fransa (1792 sonrası: Cumhuriyet/İmparatorluk/Restorasyon/III. Cumh.) | harita kimliği; Napolyon 1804, Restorasyon 1814, Tunus 1881 olayları künye içinde |
| `vichy-fransasi` | Fransız Devleti (Vichy) | |
| `fransiz-misir-seferi` | Napolyon'un Mısır Seferi | 1798-07-01 → 1801-10-02 |
| `cezayir-fransiz` (harita: fransa-cumhuriyet) | Fransız Cezayir İşgali | 1830-07-05 → |
| `tunus-beyligi-fransiz`, `fas-fransiz-himayesi` | Tunus/Fas himayeleri | |
| `suriye-lubnan-mandasi`, `buyuk-lubnan-devleti`, `suriye-cumhuriyeti-1946`, `suriye-arap-kralligi` (Faysal) | Levant mandası zinciri | |
| `kilikya-fransiz` | Kilikya Fransız İşgal Bölgesi | |
| `hatay-devleti` | Hatay Devleti | |
| `yeni-fransa` | Yeni Fransa (Nouvelle-France) | |
| `burgonya` | Burgonya (Fransa kronolojisine bağlı) | |
| Öteki Fransız sömürge/manda künyeleri | `fransiz-cinhindi`, `fransiz-guyanasi`, `fransiz-kamerun-mandasi`, `fransiz-bati-afrika`, `fransiz-ekvator-afrikasi`, `fransiz-togo`, `fransiz-hindistani`, `fransiz-somali`, `afar-issa-fransiz-bolgesi`, `madagaskar-fransiz`, `fransiz-komorlari`, `fransiz-birligi`, `libya-fransiz-fizan`, `malta-fransiz`, `italya-napolyon` | |
| İlişkili Osmanlı-yanı künyeler | `cezayir-ocagi`, `tunus-ocagi`, `tunus-krallik`, `cezayir-gpra`, `cebel-i-lubnan-mutasarrifligi`, `lubnan-emirligi`, `misir-suriye-idaresi` | |

**Künye sorunu (listelenir, düzeltilmez):** ayrı "Napolyon İmparatorluğu", "Restorasyon", "II. İmparatorluk", "III. Cumhuriyet", "IV./V. Cumhuriyet" künyesi YOK; hepsi `fransa-cumhuriyet` içinde olay olarak duruyor. Vichy tek künye olarak var. (Künye bölme kararı kronoloji/koşu işidir; bu liste önermez, yalnız bildirir.)

### Kronoloji sayıları
- `data/kronoloji_fransa.js`: **187** madde (1285 → 1923; ağırlık Yüzyıl Savaşları, Din Savaşları, Devrim/Napolyon, III. Cumhuriyet).
- `data/kronoloji_cok_fransa.js`: **27** madde (Burgonya ağırlıklı 1369-1477 ve Cezayir fetihleri 1833-1852 ile 1569, 1798, 1804, 1809, 1860, 1918).
- Öteki dosyalarda "Fransa/Fransız/Napolyon" geçen benzersiz gün|başlık satırı: yaklaşık **190** (ölçüm: `kr_short.txt`'te "frans" araması = 191; içinde Napolyon İtalya/Mısır, Cezayir/Tunus/Fas, Kırım, Kanuni–François maddeleri var).
- `data/olaylar_fransa_kontrol_1027.js`, `olaylar_napolyon_italya_1028.js`, `olaylar_misir1801.js`, `olaylar_ebukir_0919.js`, `olaylar_cinhindi_1115b.js`, `data/yer_yama_fransa.js` (yerleşim yaması) ayrıca var.
- Osmanlı–Fransa ilişkisinde bulunan gerçek maddeler: 1525-12-06 Frangipani · 1536-02-18 Kapitülasyonlar · 1543-01-01 Toulon · 1553-02-01 ittifak · 1569-10-18 "ilk tasdikli genel kapitülasyon" · 1629-03-21 Marsilya Antl. (Cezayir) · 1720-10-07/08 Yirmisekiz Mehmed · 1740-05-30 Kapitülasyonlar sürekli · 1798-07-01 Mısır Seferi · 1798-09-09 Osmanlı'nın Fransa'ya savaş ilanı · 1799-05-20 Akka · 1801-10-09 tahliye · 1802-06-25 Paris Antl. · 1827-04-29 Yelpaze · 1830-06-14/07-05 Cezayir · 1837-05-30 Tafna · 1847-12-23 Abdülkadir teslim · 1854-03-27 Fransa Rusya'ya savaş · 1856-03-30 Paris Antl. · 1860-05-30 Lübnan · 1881-05-12 Bardo · 1915-03-18 / 04-25 Çanakkale · 1916-05-16 Sykes-Picot · 1918-10-07 Beyrut çıkarması · 1918-10-30 Mondros · 1920-04-25 San Remo · 1920-07-24 Meysalun · 1921-10-20 Ankara Antlaşması.

### Kronoloji BOŞLUKLARI (yalnız liste; madde yazılmadı)
Ölçüt: kr_short.txt'te anahtar sözcükle sıfır/yetersiz sonuç.
1. **Maraş** (1920 savunması / Fransız çekilişi), **Antep** (Şubat 1920 – 1921 kuşatma/direniş; Fransız işgali 1921-1922), **Urfa** (1920): Maraş/Antep/Urfa için 1900 sonrası madde **0** (Maraş'ta yalnız 1501-1522 Dulkadir maddeleri).
2. **Kilikya/Adana işgali 1918-1921** (Fransız-Ermeni Lejyonu, Adana'nın işgali): madde **0**.
3. **Hatay/İskenderun Sancağı** (1936-1939, Hatay Cumhuriyeti, 1939 ilhak): madde **0**.
4. **Vichy Fransası, 1940 yenilgisi, De Gaulle, Özgür Fransa, Paris'in kurtuluşu 1944**: kronolojide **0** (yalnız `fransa-cumhuriyet` künyesinde 1940-07-10 ve 1944-08-25 "milestone" satırları var; kronoloji maddesi değil).
5. **1923-1962 Fransa genel** (Suriye-Lübnan mandası dönemi, 1925 Büyük Suriye İsyanı, Şam bombardımanı, 1936 Fransa-Suriye antlaşması, 1941 Suriye-Lübnan harekâtı, 1943/1946 Lübnan-Suriye bağımsızlığı, Dien Bien Phu 1954, Süveyş 1956, Cezayir bağımsızlığı 1962): kronolojide **0** (kronoloji_fransa 1923'te bitiyor).
6. **Napolyon Mısır'ı ayrıntıları:** Piramit Savaşı (1798-07), Kahire isyanı (1798-10), Rosetta Taşı keşfi (1799-07), Ebûkîr karadan savaşı (1799-07) madde **0**; Mısır Seferi başlangıç/Akka/tahliye maddeleri var.
7. **Jön Türkler'in Paris faaliyeti** (1902 Paris Kongresi, Ahmed Rıza, "Mechveret"): madde **0** (yalnız 1889 İttihâd-ı Osmânî Cemiyeti kuruluşu var).
8. **Fransız Devrimi'nin Osmanlı'ya doğrudan yansıması:** Seyyid Ali Efendi'nin Paris elçiliği (1797), Fransız Devrimi'ne Osmanlı tepkisi: madde **0**; Nizâm-ı Cedîd (1792) ve Fransa'ya savaş ilanı (1798) var.
9. **Nice kuşatması 1543** (Barbaros–Fransız ortak harekât): madde **0**; Toulon maddesi `1543-01-01` ile var ama gün büyük olasılıkla yanlış (TDV Fransa maddesi 1543'te Nice'e karşı ortak harekâtı anar; Barbaros'un Toulon'a varış/kışlama günü ayrıca doğrulanmalı — bkz. borç).
10. **Çanakkale 1915 Fransız payı** (18 Mart'ta Bouvet kaybı, Kumkale çıkarması 25 Nisan, Fransız Doğu Seferi Kolordusu): ortak "Çanakkale Zaferi" ve "Arıburnu ve Seddülbahir" maddeleri var; Fransızlara özgü madde **0**.
11. **Haiti Devrimi 1791-1804, Louisiana'nın satışı 1803, Faşoda 1898, Fransız sömürge imparatorluğu (Çinhindi 1884-85 vb.)**: madde **0** (Saygon Antlaşması 1862 ve San Ildefonso 1800 var).
12. **Fransız Devrimi/Napolyon çevresi:** giyotin icadı/ilk kullanımı (1792-04), Paris Komünü'nün ardıllarından Panama skandalı, Fashoda yok. (Kısmen zaten var: 1793-01-21 idam, 1793-09-05 Terör.)
13. **Tarih sorunları (tespit; düzeltme önerisi değil):** `1543-01-01` Toulon (yalnız yıl hassasiyetinde mi?); `1569-10-18` "ilk tasdikli genel kapitülasyon" ifadesi 1536 maddesiyle birlikte okunmalı (aşağıda konu 1).

## 2. İlk 40 (önem/ilgi sırasıyla)
Sütunlar: sıra · başlık · tür · ilgi sinyali · bağ (`gün|başlık parçası`) · kaynak adayı (kısa kod, "K" listesine bakın) · etiket · yaygın yanlış → akademik durum.

| # | başlık | tür | ilgi | bağ | kaynak | etiket | yanlış → durum |
|---|---|---|---|---|---|---|---|
| 1 | Kapitülasyonlar 1536'da mı verildi, ve gerçekten "imtiyaz mı"? | tartisma | arama özetinde görüldü (Veinstein 2008; Arıkan–Matuz) | `1536-02-18\|Osmanlı-Fransız Kapitülasyonları` | TDV Fransa (islamansiklopedisi.org.tr/fransa); Isom-Verhaaren 2011; Veinstein 2008; İnalcık EI2 "Imtiyāzāt"; van den Boogert 2005 | TDV Fransa: yalnız özet; Veinstein/Arıkan: yalnız özet (arama); öteki okunmadı | "Kanuni Fransa'ya kapitülasyon verdi, çöküş böyle başladı" → metin taslak olarak ulaşmış, imza/bağlayıcılık tarihçilerce tartışmalı; önceki imtiyazlar vardı; TDV 18 Şubat 1536 imzayı verir (ayrışma ic_not'ta beyan gerekir) |
| 2 | Haçlı kral, Müslüman sultandan yardım isterken: François–Süleyman | sebep-sonuc | varsayım (müfredat) | `1525-12-06\|Kanûnî Sultan Süleyman'ın Fransız elçisi Frangipani` | TDV Fransa; Isom-Verhaaren 2011 | TDV Fransa: yalnız özet; Isom-V.: okunmadı | "Ahlaksız ittifak" Habsburg anlatısı → Fransız ve Osmanlı kaynaklarında karşılıklı çıkar ittifakı (Isom-V., arama özetine göre eski yaklaşımı eleştiriyor) |
| 3 | Toulon'da ezan: Osmanlı filosu Fransız limanında kışladı | savas-hikayesi | varsayım | `1543-01-01\|Toulon'un Osmanlı donanmasına` (gün sorunu, boşluk 9) | Isom-Verhaaren 2011; TDV Fransa | okunmadı; TDV: yalnız özet | "şehir camiye çevrildi/halk sürüldü" tekrarları → ayrıntı doğrulanmadı |
| 4 | Yirmisekiz Mehmed Çelebi gerçekten "Batı'yı öğrenmeye" mi gönderildi? | tartisma | arama özetinde görüldü | `1720-10-07\|Yirmisekiz Mehmed Çelebi Paris elçiliğine` | Gezer, Belleten 88/311 (2024) 147-183; Erimtan 2008; Göçek 1987; Veinstein (ed.) 1981 | Gezer: yalnız özet (arama); öteki okunmadı | "İbrahim Paşa Batı'yı taklit için gönderdi (malum talimat)" → Gezer'e göre talimatın dayanağı yok, Erimtan izini Ali Suavi önsözüne götürür |
| 5 | Çırağan/Sadabad Versay'ın kopyası mı? | tartisma/dis-yankilar | varsayım | `1720-10-07\|Yirmisekiz Mehmed` | Erimtan 2008; Gezer 2024 | okunmadı; Gezer yalnız özet | "Sadabad = Versay taklidi" → doğrulanmadı (Erimtan/Emecen–Yıldız tartışması; özet düzeyi) |
| 6 | Napolyon neden Mısır'a gitti? | sebep-sonuc | varsayım | `1798-07-01\|Napolyon'un Mısır Seferi'nin başlaması` | Cole 2007; Laurens 1989; Karal 1938 | okunmadı | "Hindistan yolunu kesmek tek sebep" → çok katmanlı (Direktuvar, Talleyrand, Doğu planı); doğrulanmadı |
| 7 | Akka: Napolyon'u durduran şehir | savas-hikayesi | varsayım | `1799-05-20\|Akkâ Savunması` | Cole 2007; TDV (Cezzar Ahmed Paşa) | okunmadı | "Cezzar tek başına yendi" → Sidney Smith donanma desteği ve veba; doğrulanmadı |
| 8 | Napolyon Müslüman mı olmuştu? | karsi-anlati | varsayım | `1798-07-01\|Napolyon'un Mısır'ı işgali` | Cole 2007; el-Cebertî (birincil, neşir künyesi doğrulanmadı) | okunmadı | "Müslüman oldu" → propaganda/şeyhlerle diyalog; Cole'a göre ciddi bir din değişimi yok (doğrulanmadı) |
| 9 | Yelpaze vuruşu mu, 1830 işgalinin sebebi mi? | sebep-sonuc | varsayım | `1827-04-29\|Yelpaze hadisesi` | Sessions 2011; Julien 1964; TDV Cezayir | okunmadı | "Yelpaze yüzünden" → bahane; iç siyaset, borç, ticaret (Sessions); doğrulanmadı |
| 10 | Cezayir 1830: Osmanlı neden kıpırdamadı? | tartisma | varsayım | `1830-07-05\|Cezayir'in Fransız işgali` | TDV Cezayir; Julien 1964 | okunmadı | "Osmanlı hiçbir şey yapmadı" → diplomatik girişim ve güç dengesi; doğrulanmadı |
| 11 | Emîr Abdülkâdir: Fransa'ya meydan okuyan alim-komutan | kimdir | varsayım | `1847-12-23\|Emîr Abdülkādir Fransızlara teslim oldu` | TDV Abdülkādir el-Cezâirî; Étienne 1994 (künye doğrulanmadı) | okunmadı | doğrulanmadı |
| 12 | Kırım'da Fransız–Türk ittifakı: neden Fransa Osmanlı'nın yanında? | sebep-sonuc | varsayım | `1854-03-27\|Fransa Rusya'ya savaş ilan etti` | Baumgart 1999; Lambert 1990 | okunmadı | "Kutsal yerler yüzünden" tek sebep → Avrupa dengesi; Napolyon III'ün prestij arayışı (doğrulanmadı) |
| 13 | Paris Kongresi 1856: Osmanlı Avrupa'ya "kabul" mü edildi? | antlasma | varsayım | `1856-03-30\|Paris Antlaşması: Kırım Savaşı'nın sonu` | Davison 1963; Baumgart 1999 | okunmadı | "Avrupa Konseri'ne tam üye" → sınırlı, güvence karşılığı reform baskısı (doğrulanmadı) |
| 14 | Tunus 1881: Bardo'ya giden yol | sebep-sonuc | varsayım | `1881-05-12\|Bardo Antlaşması` | Ganiage 1959; TDV Tunus | okunmadı | "Hudutlu kabile baskını bahanesiydi" → Kroumir olayı bahane; İngiliz-İtalyan rekabeti (doğrulanmadı) |
| 15 | Maraş: Ağustos'un şehri mi, şubat mı? Direniş ve Fransız çekilişi | savas-hikayesi | arama özetinde görüldü (Pekdoğan 2021) | **MADDE YOK — kronoloji boşluğu** | Pekdoğan, Ermeni Araştırmaları 69 (2021) 71-102 | yalnız özet (arama) | doğrulanmadı |
| 16 | Antep: 1920-21 kuşatması ve Fransız işgali | savas-hikayesi | arama özetinde görüldü (Ankuayd 2025) | **MADDE YOK — kronoloji boşluğu** | DergiPark 2025 makalesi ("Fransa'nın Gaziantep'i işgalinin yeni belgelerle değerlendirilmesi"; yazar doğrulanmadı) | yalnız özet (arama) | işgal tarihleri arama özetinde 9 Şubat 1921 – 5 Ocak 1922 olarak geçiyor |
| 17 | Urfa 1920: işgal ve direniş | savas-hikayesi | varsayım | **MADDE YOK — kronoloji boşluğu** | okunmadı; aday: Ünalp 2018, Akademik Bakış 11/22 (arama özetinde) | yalnız özet | doğrulanmadı |
| 18 | Ankara Antlaşması: Fransa neden savaşı bıraktı? | antlasma | arama özetinde görüldü (imza günü kaynaklarda 20/21 Ekim ayrışıyor) | `1921-10-20\|Ankara Antlaşması` | Belleten makalesi (başlık/yazar doğrulanmadı); Ankuayd 2025; Güçlü 2001 | yalnız özet (arama) | imza günü: 20 Ekim mi 21 mi? kaynaklar ayrışıyor |
| 19 | Kilikya'da Fransız–Ermeni Lejyonu ve Adana | karsi-anlati | varsayım | **MADDE YOK — kronoloji boşluğu** | Tachjian 2004 | okunmadı | doğrulanmadı (ulusal hassasiyet: ölçülü dil) |
| 20 | Hatay: 1939'da gerçekte ne oldu? | tartisma | varsayım | **MADDE YOK — kronoloji boşluğu** | Shields 2011; Güçlü 2001 | okunmadı | "oy sayımı sorunsuz" / "hile" iki uçtan anlatılır → iki görüş de adıyla verilecek (doğrulanmadı) |
| 21 | Sykes-Picot: Fransa'nın payı ve Türk okurun bilmedikleri | antlasma | varsayım | `1916-05-16\|Sykes-Picot Antlaşması` | Rogan 2015; Khoury 1987 | okunmadı | "cetvelle çizilen sınır" → pazarlıklı, sonradan değişti; doğrulanmadı |
| 22 | Suriye mandası: Meysalun ve Şam | savas-hikayesi | varsayım | `1920-07-24\|Meysalun Savaşı` | Khoury 1987; Provence 2005 | okunmadı | doğrulanmadı |
| 23 | Çanakkale'de Fransızlar | savas-hikayesi | varsayım | `1915-04-25\|Kara çıkarması — Arıburnu ve Seddülbahir` (Fransızlara özgü madde yok, boşluk 10) | Erickson 2010 | okunmadı | "Çanakkale yalnız İngiliz-ANZAC" → Fransız kolordusu Kumkale/Seddülbahir; doğrulanmadı |
| 24 | Jön Türkler Paris'te | kimdir/tartisma | varsayım | `1889-06-02\|İttihâd-ı Osmânî Cemiyeti` (Paris kısmı yok, boşluk 7) | Hanioğlu 1995 | okunmadı | doğrulanmadı |
| 25 | Fransız Devrimi Osmanlı'ya nasıl yansıdı? | dis-yankilar | varsayım | `1789-07-14\|Bastille'in düşüşü` (Osmanlı kısmı yok, boşluk 8) | Shaw 1971; Lewis 1961; Karal 1938 | okunmadı | "Osmanlı Devrim'den habersizdi" → doğrulanmadı |
| 26 | 1860 Lübnan: Fransız çıkarması | sebep-sonuc | varsayım | `1860-05-30\|Cebel-i Lübnan'da Dürzî-Mârûnî iç savaşı` (çıkarma günü yok) | Fawaz 1994; Makdisi 2000 | okunmadı | "dinler arası kadim düşmanlık" → modern siyasî-iktisadî çatışma (Makdisi), doğrulanmadı |
| 27 | Süveyş Kanalı: Fransız mühendis, Mısır'ın borcu | teknik-bilimsel | varsayım | `1859-04-25\|Süveyş Kanalı kazısının başlaması` | Karabell 2003; Piquet 2009 | okunmadı | doğrulanmadı |
| 28 | Bastille'de kaç mahkûm vardı? | karsi-anlati | varsayım | `1789-07-14\|Bastille'in düşüşü` | Doyle 1989; Tackett 2015 | okunmadı | "binlerce mahkûm" → çok az; doğrulanmadı |
| 29 | "Ekmek yoksa pasta yesinler" Marie Antoinette'in mi? | karsi-anlati | varsayım | `1793-10-16\|Marie Antoinette'in idamı` | Rousseau, *Confessions* (birincil, VI. kitap); Doyle 1989 | okunmadı | "Marie Antoinette söyledi" → Rousseau'da isimsiz "büyük prenses"; doğrulanmadı |
| 30 | Terör dönemi kaç can aldı? | tartisma | varsayım | `1793-09-05\|Terör Dönemi'nin resmen ilanı` | Tackett 2015; Doyle 1989 | okunmadı | rakamlar kaynağa göre değişir → doğrulanmadı |
| 31 | Napolyon gerçekten kısa mıydı? | magazin/karsi-anlati | varsayım | `1804-12-02\|Napolyon Notre-Dame'da taç giydi` | Dwyer 2008/2013 | okunmadı | "çok kısa" → ölçü birimi (Fransız parmağı) karışıklığı; doğrulanmadı |
| 32 | Waterloo'yu kim kazandı? | savas-hikayesi | varsayım | `1815-06-18\|Waterloo Savaşı` | Roberts 2005 (popüler tarih sınırında, künye doğrulanmadı) | okunmadı | doğrulanmadı |
| 33 | Jeanne d'Arc: aziz mi, siyasî araç mı? | kimdir/tartisma | varsayım | `1431-05-30\|Jeanne d'Arc'ın Rouen'de yakılması` | Pernoud-Clin 1986; Beaune (künye doğrulanmadı) | okunmadı | "kurtulup yaşadı" iddiası → akademik destek yok (Pernoud), doğrulanmadı |
| 34 | Saint-Barthélemy: planlı mı, kontrolden çıkmış mı? | tartisma | varsayım | `1572-08-24\|Aziz Bartelmi Katliamı` | Crouzet 1994; Diefendorf 1991 | okunmadı | "baştan planlı" → Crouzet-Diefendorf yorumları ayrışır; iki görüş adıyla verilecek |
| 35 | "L'État, c'est moi" ve XIV. Louis'nin imajı | karsi-anlati | varsayım | `1661-03-09\|Mazarin'in ölümü ve XIV. Louis'nin şahsi saltanatının başlaması` | Burke 1992 | okunmadı | söz muhtemelen sonradan atfedilmiş; doğrulanmadı |
| 36 | Versay'ı neden kurdu? | mimari | varsayım | `1682-05-06\|Sarayın Versay'a taşınması` | Spawforth 2008 | okunmadı | "asilleri kontrol için" tek-neden tezi sorgulanır; doğrulanmadı |
| 37 | Nantes Fermanı'nın iptali ve Hugenot göçü | sebep-sonuc | varsayım | `1685-10-18\|Nantes Fermanı'nın İlgası` | Labrousse 1985 | okunmadı | doğrulanmadı |
| 38 | Paris Komünü'nde Kanlı Hafta: kaç ölü? | tartisma | varsayım | `1871-05-21\|'Kanlı Hafta'` | Tombs 1999; Tombs, Historical Journal 55/3 (2012) | okunmadı | eski 20-30 bin tahminleri → Tombs daha düşük aralık önerir (doğrulanmadı) |
| 39 | Dreyfus Olayı: kim, ne zaman, neden? | sebep-sonuc | varsayım | `1894-12-22\|Alfred Dreyfus'un vatana ihanetten mahkûm edilmesi` | Bredin 1983; Harris 2010 | okunmadı | doğrulanmadı |
| 40 | Vichy: "kalkan mı, kılıç mı"? | tartisma | varsayım | **MADDE YOK — kronoloji boşluğu** | Paxton 1972; Rousso 1987 | okunmadı | "Vichy direnişe zemin" → Paxton: aktif işbirliği; doğrulanmadı |

## 3. Yedekler (41-80)

| # | başlık | tür | ilgi | bağ | kaynak | etiket | yanlış → durum |
|---|---|---|---|---|---|---|---|
| 41 | Nice 1543: Barbaros ve Fransız donanması | savas-hikayesi | varsayım | **MADDE YOK — kronoloji boşluğu** (TDV Fransa'da anılıyor) | TDV Fransa; Isom-V. 2011 | TDV yalnız özet | — |
| 42 | 1553 ittifakı: Kızıl sakallı Fransız donanması | sebep-sonuc | varsayım | `1553-02-01\|Osmanlı-Fransız ittifakı` | TDV Fransa; Isom-V. | TDV yalnız özet | TDV: 1 Şubat 1553 |
| 43 | 1569 "ilk tasdikli" kapitülasyon: 1536'dan ne farkı? | tartisma | varsayım | `1569-10-18\|Fransa'ya ilk tasdikli genel kapitülasyon` | van den Boogert 2005; İnalcık EI2; Eldem 2006 | okunmadı | kayıt ifadesi 1536 maddesiyle çelişebilir (boşluk 13) |
| 44 | 1740 kapitülasyonu "ebedî" mi oldu? | antlasma | varsayım | `1740-05-30\|Kapitülasyonlar sürekli hâle getirildi` | Eldem 2006; İnalcık EI2 | okunmadı | doğrulanmadı |
| 45 | Marsilya Antlaşması 1629: Fransa–Cezayir ilişkisi | antlasma | düşük | `1629-03-21\|Fransa ile Cezayir arasında Marsilya Antlaşması` | TDV Cezayir; Julien 1964 | okunmadı | — |
| 46 | Osmanlı'nın Fransa'ya savaş ilanı 1798 | antlasma | varsayım | `1798-09-09\|Osmanlı'nın Fransa'ya savaş ilanı` | Karal 1938; Shaw 1971 | okunmadı | — |
| 47 | Rosetta Taşı kimin eserdir? | teknik-bilimsel | varsayım | **MADDE YOK — kronoloji boşluğu** | Parkinson 1999 | okunmadı | "İngilizlerin bulduğu taş" → Fransızlar buldu, İngilizler teslim aldı; doğrulanmadı |
| 48 | Piramit Savaşı ve Mısır'ın ilk Fransız günleri | savas-hikayesi | varsayım | **MADDE YOK — kronoloji boşluğu** | Cole 2007 | okunmadı | — |
| 49 | Kahire İsyanı 1798 | savas-hikayesi | düşük | **MADDE YOK — kronoloji boşluğu** | Cole 2007; el-Cebertî | okunmadı | — |
| 50 | Mehmed Ali Paşa ve Fransız subaylar | kimdir | varsayım | `1831-10-31\|İbrâhim Paşa Suriye'ye girdi` | Fahmy 1997 | okunmadı | doğrulanmadı |
| 51 | 1840 Londra Antlaşması: Fransa dışarıda kaldı | antlasma | varsayım | `1840-07-15\|Londra Antlaşması` | Shaw/Lewis (genel); künye doğrulanmadı | okunmadı | — |
| 52 | 1807: Fransız elçi Sébastiani ve Duckworth | savas-hikayesi | düşük | `1807-02-20\|İngiliz donanmasının İstanbul önlerine gelmesi` | Shaw 1971; Karal 1938 | okunmadı | — |
| 53 | Navarin 1827: Fransız filosu Osmanlı'ya karşı | savas-hikayesi | varsayım | `1827-10-20\|Navarin Deniz Savaşı` | TDV Navarin (madde doğrulanmadı) | okunmadı | — |
| 54 | Islahat Fermanı'nın arkasındaki Paris | sebep-sonuc | varsayım | `1856-02-18\|Islahat Fermanı'nın ilanı` | Davison 1963 | okunmadı | — |
| 55 | Fas 1912 ve Agadir | sebep-sonuc | düşük | `1912-03-30\|Fas Antlaşması` | doğrulanmadı | okunmadı | — |
| 56 | Çinhindi: Saygon 1862 | sebep-sonuc | düşük | `1862-06-05\|Saigon Antlaşması` | doğrulanmadı | okunmadı | — |
| 57 | Azincourt: İngiliz okçuları mı, çamur mu? | savas-hikayesi | varsayım | `1415-10-25\|Azincourt Savaşı` | Curry 2005; Sumption 1990 | okunmadı | "10'a bir sayı" iddiası → Curry sayıları tartışır; doğrulanmadı |
| 58 | Tapınak Şövalyeleri'nin sonu | sebep-sonuc | varsayım | `1307-10-13\|Tapınak Şövalyeleri'nin tutuklanması` | Barber 1978 | okunmadı | "13 Cuma uğursuzluğu" mitleri; doğrulanmadı |
| 59 | Anagni: Papayı tokatlayan Fransız? | magazin | düşük | `1303-09-07\|Anagni Baskını` | doğrulanmadı | okunmadı | — |
| 60 | Pavia 1525 ve esir kralın mektubu | savas-hikayesi | varsayım | `1525-02-24\|Pavia Savaşı` | Isom-V. 2011; TDV Fransa | TDV yalnız özet | — |
| 61 | Mississippi Balonu: ilk borsa çöküşü | teknik-bilimsel | düşük | `1720-01-01\|Mississippi Balonu` | Murphy 1997 | okunmadı | — |
| 62 | Ansiklopedi: Diderot'nun projesi | kimdir | düşük | `1751-06-28\|Ansiklopedi'nin ilk cildinin yayımlanması` | doğrulanmadı | okunmadı | — |
| 63 | Montgolfier'lerin balonu | teknik-bilimsel | düşük | `1783-11-21\|Montgolfier Kardeşler` | doğrulanmadı | okunmadı | — |
| 64 | Haiti Devrimi (Fransa'nın en değerli sömürgesi) | sebep-sonuc | düşük | **MADDE YOK — kronoloji boşluğu** | Dubois 2004 | okunmadı | — |
| 65 | Louisiana'nın satışı | sebep-sonuc | düşük | `1800-01-01\|San Ildefonso` (1803 satışı yok) | doğrulanmadı | okunmadı | — |
| 66 | Giyotin: insani idam makinesi mi? | teknik-bilimsel | varsayım | `1793-01-21\|XVI. Louis'nin idamı` | Arasse 1987 | okunmadı | "Guillotin icat etti" → icat değil, öneri/tasarım; doğrulanmadı |
| 67 | Metrik sistem: saniyenin kaçta kaçı? | teknik-bilimsel | düşük | `1793-08-01\|Metrik sistemin kabulü` | doğrulanmadı | okunmadı | — |
| 68 | Louvre müzesi | mimari | düşük | `1793-08-10\|Louvre'un halka açık müze olarak açılması` | doğrulanmadı | okunmadı | — |
| 69 | Code civil: dünyayı kaç ülke kopyaladı? | teknik-bilimsel | varsayım | `1804-03-21\|Napolyon Kanunu` | Dwyer 2013 | okunmadı | — |
| 70 | Austerlitz: Güneşin zaferi | savas-hikayesi | düşük | `1805-12-02\|Austerlitz Savaşı` | doğrulanmadı | okunmadı | — |
| 71 | Rusya seferi: soğuk mu, lojistik mi? | sebep-sonuc | varsayım | `1812-06-24\|Napolyon'un Rusya Seferi` | Dwyer 2013 | okunmadı | "General Kış" → lojistik; doğrulanmadı |
| 72 | Yüz Gün | savas-hikayesi | düşük | `1815-03-20\|Napolyon'un Elba'dan dönüşü` | doğrulanmadı | okunmadı | — |
| 73 | Sedan ve III. Napolyon'un çöküşü | sebep-sonuc | düşük | `1870-09-02\|Sedan Savaşı` | doğrulanmadı | okunmadı | — |
| 74 | Eyfel Kulesi: "geçici" yapı | mimari | varsayım | `1889-05-06\|Eyfel Kulesi'nin açılışı` | doğrulanmadı | okunmadı | "geçici" mitleri; doğrulanmadı |
| 75 | Pasteur'ün kuduz aşısı | teknik-bilimsel | düşük | `1885-07-06\|Pasteur'ün ilk kuduz aşısı` | doğrulanmadı | okunmadı | — |
| 76 | Zola'nın "İtham Ediyorum"u | kimdir | varsayım | `1898-01-13\|Zola'nın 'İtham Ediyorum'` | Bredin 1983 | okunmadı | — |
| 77 | Laiklik 1905: Türkiye'nin "Fransız modeli" miti | karsi-anlati | varsayım | `1905-12-09\|Kilise ve Devletin Ayrılması Yasası` | doğrulanmadı | okunmadı | "Atatürk laikliği Fransa'dan aldı" → doğrulanmadı |
| 78 | Verdun | savas-hikayesi | düşük | `1916-02-21\|Verdun Savaşı` | doğrulanmadı | okunmadı | — |
| 79 | Paris'in kurtuluşu 1944 ve De Gaulle | kimdir | düşük | **MADDE YOK — kronoloji boşluğu** | doğrulanmadı | okunmadı | — |
| 80 | Süveyş 1956 ve Cezayir 1962 (Fransa'nın çıkış yılları) | sebep-sonuc | düşük | **MADDE YOK — kronoloji boşluğu** | Horne 1977 | okunmadı | — |

## 4. Kaynak künyeleri ("K" listesi; HEPSİ hafızadan, açılıp teyit edilmedi)
Isom-Verhaaren, *Allies with the Infidel* (I.B. Tauris, 2011) · Veinstein, "Les capitulations franco-ottomanes de 1536 sont-elles encore controversées?" (Faroqhi armağanı, 2008; arama özetinden, ayrıntı doğrulanmadı) · İnalcık, "Imtiyāzāt", *EI²* · van den Boogert, *The Capitulations and the Ottoman Legal System* (Brill, 2005) · Eldem, "Capitulations and Western Trade", *Cambridge History of Turkey* III (2006) · Gezer, "Yirmisekiz Çelebi Mehmed Efendi'nin Fransa Elçiliği", *Belleten* 88/311 (2024) 147-183 (arama sonucundan) · Erimtan, *Ottomans Looking West?* (I.B. Tauris, 2008) · Göçek, *East Encounters West* (Oxford UP, 1987) · Veinstein (ed.), *Mehmed Efendi: Le paradis des infidèles* (Maspero, 1981) · Cole, *Napoleon's Egypt* (Palgrave, 2007) · Laurens, *L'expédition d'Égypte* (Armand Colin, 1989) · Karal, *Fransa-Mısır ve Osmanlı İmparatorluğu 1797-1802* (1938; yayınevi doğrulanmadı) · Shaw, *Between Old and New* (Harvard UP, 1971) · Lewis, *The Emergence of Modern Turkey* (Oxford UP, 1961) · Sessions, *By Sword and Plow* (Cornell UP, 2011) · Julien, *Histoire de l'Algérie contemporaine* I (PUF, 1964) · Étienne, *Abdelkader* (1994; yayınevi doğrulanmadı) · Baumgart, *The Crimean War 1853-1856* (Arnold, 1999) · Lambert, *The Crimean War* (Manchester UP, 1990) · Davison, *Reform in the Ottoman Empire 1856-1876* (Princeton UP, 1963) · Ganiage, *Les origines du protectorat français en Tunisie* (PUF, 1959) · Hanioğlu, *The Young Turks in Opposition* (Oxford UP, 1995) · Erickson, *Gallipoli: The Ottoman Campaign* (Pen & Sword, 2010) · Khoury, *Syria and the French Mandate* (Princeton UP, 1987) · Provence, *The Great Syrian Revolt* (Texas UP, 2005) · Shields, *Fezzes in the River* (Oxford UP, 2011) · Güçlü, *The Question of the Sanjak of Alexandretta* (TTK, 2001) · Tachjian, *La France en Cilicie et en Haute-Mésopotamie* (Karthala, 2004) · Rogan, *The Fall of the Ottomans* (Basic Books, 2015) · Fawaz, *An Occasion for War* (UC Press, 1994) · Makdisi, *The Culture of Sectarianism* (UC Press, 2000) · Karabell, *Parting the Desert* (Knopf, 2003) · Piquet, *Histoire du canal de Suez* (Perrin, 2009) · Fahmy, *All the Pasha's Men* (Cambridge UP, 1997) · Doyle, *The Oxford History of the French Revolution* (1989) · Tackett, *The Coming of the Terror* (Harvard UP, 2015) · Arasse, *La guillotine et l'imaginaire de la terreur* (Flammarion, 1987) · Burke, *The Fabrication of Louis XIV* (Yale UP, 1992) · Spawforth, *Versailles* (2008; yayınevi doğrulanmadı) · Crouzet, *La nuit de la Saint-Barthélemy* (Fayard, 1994) · Diefendorf, *Beneath the Cross* (Oxford UP, 1991) · Labrousse, *Une foi, une loi, un roi?* (1985; yayınevi doğrulanmadı) · Pernoud-Clin, *Jeanne d'Arc* (Fayard, 1986) · Dwyer, *Napoleon: The Path to Power* (Yale UP, 2008) ve *Citizen Emperor* (2013) · Roberts, *Waterloo* (2005; popüler tarih sınırında, akademik sayılıp sayılmayacağı kararı Emre'nin) · Tombs, *The Paris Commune 1871* (Longman, 1999) ve *Historical Journal* 55/3 (2012) · Bredin, *L'Affaire* (Julliard, 1983) · Harris, *The Man on Devil's Island* (2010) · Paxton, *Vichy France* (Knopf, 1972) · Rousso, *Le syndrome de Vichy* (Seuil, 1987) · Curry, *Agincourt: A New History* (Tempus, 2005) · Sumption, *Trial by Battle* (Faber, 1990) · Barber, *The Trial of the Templars* (Cambridge UP, 1978) · Murphy, *John Law* (Oxford UP, 1997) · Parkinson, *Cracking Codes* (British Museum, 1999) · Dubois, *Avengers of the New World* (Harvard UP, 2004) · Horne, *A Savage War of Peace* (1977; yayınevi doğrulanmadı).
Arama özetinde adı geçen, tam künyesi doğrulanmayan makaleler: Pekdoğan (2021, *Ermeni Araştırmaları* 69, 71-102) · Ünalp (2018, *Akademik Bakış* 11/22) · DergiPark 2025 Gaziantep işgali makalesi · Belleten'de Ankara Antlaşması/sınır makalesi · DergiPark'ta Zeki Arıkan'ın 1536 kapitülasyonu makalesi.

## 5. Sayılar
- Aday: **80** (ilk 40 + 40 yedek).
- Gerçek maddeye bağlanan: **67** (grep ile sayıldı; bunların 6'sında bağ kısmi: Osmanlı/Paris/Fransız payı kronolojide yok, bölüm 1'de boşluk olarak da listeli). MADDE YOK: **13**.
- Etiket dağılımı: "tam metin okundu" **0**; satırında "yalnız özet" geçen **12** (WebFetch/WebSearch özeti); "okunmadı" **68 satır** (yalnız özet geçenler dışında).
- Kronoloji boşluğu başlığı: 13 (bölüm 1).

## 6. Açık borçlar
**Bulunamadı (arandı, sonuç çıkmadı):**
- Hatay 1939'u doğrudan konu alan hakemli makale/tez: arama özetinde çıkmadı (YÖK Ulusal Tez Merkezi'nde ayrıca aranmadı).
- TDV `kapitulasyonlar` aramasında 1536 Fransa kapitülasyonunu işleyen madde ilk sayfada görünmedi (53 sonuçtan 10'u görüldü; öteki sayfalar okunmadı).
**Denenmedi / okunmadı (borç):**
- Listedeki tüm kitap ve makalelerin tam metni (hiçbiri açılmadı); künyeler hafızadan.
- TDV: Fransa maddesinin yalnız ilk 100.000 karakteri özetlendi, son 30.629 karakter okunmadı. Yirmisekiz Mehmed (TDV), Napolyon, Cezayir, Tunus, Abdülkâdir el-Cezâirî, Navarin vb. maddelerin hiçbiri açılmadı.
- Forum/sözlük "ilgi sinyali" taraması yapılmadı.
- Emre'ye soru: Roberts 2005 gibi popüler-akademik sınır eserler kaynak sayılsın mı? Napolyon'un "Müslümanlığı" vb. ulusal hassasiyetli maddelerde dil tonu.
- Kronoloji tarih sorunları (bölüm 1, madde 9 ve 13): `1543-01-01` Toulon, `1569-10-18` ifadesi.
- Ek okuma yükleyici, HUKUMDAR_FRANSA, KISI_FRANSA (yabancı kişiler KISILER'e eklenmez) altyapı bağımlılığı: şartnamedeki açık altyapı işi bekliyor.
