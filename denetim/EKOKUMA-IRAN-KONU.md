# EKOKUMA — İRAN: envanter ve konu listesi (AŞAMA 1)

Tarih: 25 Kasım 2026 · makine: UMIT (worktree umit21-osm5, salt okur; depoya yazılmadı) ·
şartname: `origin/ekokuma-sartname-1125:denetim/EKOKUMA-DEVLETLER-SARTNAME-1125.md`.
Girdi: aynı klasördeki `iran_kunyeler.txt`, `iran_kunye_ici.txt`, `iran_ana_maddeler.txt`,
`iran_mevcut_kartlar.txt`, `ornek_kartlar.json.txt` (dökümler başka oturumca alındı; ben yeniden ölçmedim).

**Okuma etiketi:** OKUNDU = sayfa çekildi, içerik okundu (WebFetch özetleyici üzerinden; sayfa
numarası yok, madde URL'si var) · YALNIZ ÖZET = yalnız abstract / arama sonucu / katalog kaydı ·
OKUNMADI = denenmedi ya da 403. **Encyclopaedia Iranica (iranicaonline.org) bu oturumda 403 verdi**
(cyrus-cylinder, turkmanchai-treaty, coup-d-etat-1332-1953, tobacco-protest, mazdak denendi) → bütün
Iranica atıfları OKUNMADI; BORÇ. İlgi sinyalleri genel gözlemdir, sayıyla ölçülmedi.

---

## 1. Envanter özeti

### 1.1 Sayılar (dökümden sayıldı)
| Döküm | Sayı |
|---|---|
| İran'la ilgili künye (`iran_kunyeler.txt`) | **69** satır (bkz. 1.3 yanlış eşleşmeler) |
| Künye içi kronoloji maddesi (`iran_kunye_ici.txt`) | **503** satır |
| Ana kronoloji maddesi (`iran_ana_maddeler.txt`) | **146** satır |
| Mevcut İran'a değen ek okuma kartı | **25** (antlaşma 2, sebep-sonuç 5, karşı-anlatı 3, tartışma 8, savaş-hikâyesi 7; `antlasma-kasrisirin-1639-sinir` başlığı BOŞ) |

### 1.2 Dönem dağılımı (satır sırasından; yaklaşık)
| Dönem | Künye içi | Ana madde |
|---|---|---|
| Tarihöncesi–Elam–Med–Ahameniş–İskender (MÖ) | ~75 | 2 |
| Part + Sâsânî (MÖ 247–651) | ~25 | 9 |
| İslâm fethi → Moğol öncesi (651–1256) | ~200 | 40 |
| İlhanlı → Akkoyunlu sonu (1256–1501) | ~115 | 36 |
| Safevî → Afşar → Zend (1501–1796) | ~60 | 59 |
| Kaçar (1796–1925) | **4** (1821, 1823-07-28, 1847-05-31, 1925) | **0** |
| Pehlevî + İslâm Cumhuriyeti (1925–) | **6** + Gîlân/Azerbaycan cumhuriyetleri 12 | **0** |

Sonuç: ortaçağ yoğun, **Kaçar ve 20. yüzyıl neredeyse boş**; ilgi en çok burada (1828, 1906, 1953, 1979,
1980–88). Ana kronolojide İran'ın son maddesi `1796-01-01|Kaçar hânedanının İran'a hâkim oluşu`.

### 1.3 Envanter uyarıları
- `zende` (Zende/Azande Sultanlıkları, Afrika) İran dökümüne **yanlış eşleşmeyle** girmiş ("zend" süzgeci). Aday üretiminde dışarıda bırakıldı.
- `ahamenis-misir`, `ahamenis-misir-2` Mısır'daki Pers egemenliğidir; Mısır kademesiyle (2. kademe) ortak.
- `kacar` künyesi 1789-03-21'de başlıyor; TDV Kaçarlar taç giyme/kuruluşu 1796 verir — künye/kronoloji kendi içinde iki başlangıç taşıyor (1789 tahta çıkış, 1796 taç). Bilinçli olabilir; ölçülmedi.
- `kacar` 1925 bitişi "günü tartışmalı" notlu `1925-01-01`; `iran` künyesi `1925-10-31` başlıyor; künye içinde Rıza Han'ın şehinşah ilânı `1925-12-12`. Üç gün uyumu denetlenmeli (bu iş kapsamında değil).
- `1514-08-23|Çaldıran` künye içinde var (`safevi`); mevcut kartlarda ikinci bağ olarak eski biçim `1514-08|Çaldıran` duruyor (CLAUDE.md "gün yaz" kuralı) — altyapı işi.
- Mevcut kartlardaki `1622-04-23|Hürmüz`, `1639-05-17|Kasr-ı Şirin`, `1612-11-20|Nasuh`, `1555`… gibi bağlar İran dökümünde değil Osmanlı kronolojisinde; `1639-05-17|Kasr-ı Şirin` künye içinde de var.

### 1.4 Kronoloji boşlukları (madde YOK; ek okuma dalında yazılmaz — kronoloji işine listelenir)
Antik: Bîsütûn yazıtı (I. Dareios, MÖ ~520) · Persepolis'in kuruluşu · Termopylai/Salamis (MÖ 480) · Kral Yolu/satraplık düzeni · Part başkenti Ktesiphon · Edessa'da Valerianus'un esir alınışı (260; TDV Sâsânîler anıyor) · Mani'nin idamı (~274/277) · Mazdek hareketi ve I. Kubâd (~528) · Hatra/Dura dışında Şapur yazıtı (Nakş-ı Rüstem).
İslâmî ilk dönem: Ebû Müslim ve Abbâsî ihtilâli (747–750) · Bâbek/Hürremî ayaklanması (816–838) · Firdevsî'nin Şehnâme'yi bitirişi (~1010) · Tuğrul Bey'in Bağdat'a girişi (1055) · Nizâmülmülk suikastı (1092) · Moğol istilasında Nişâbur/Merv (1220–21) · Hülâgû'nun Bağdat'ı alışı (1258; dökümde yalnız `1258-01-01|Vâsıt`) · Timur'un İsfahan katliamı (1387; `1387-11-01|İran` mevcut kart bağı var ama İran dökümünde madde görünmüyor).
Safevî–Afşar: İsfahan'ın başkent oluşu (1598) · Culfa Ermenilerinin sürgünü (1604–05) · Hürmüz'ün Portekiz'den alınışı (1622; İran dökümünde yok) · Nâdir Şah'ın Karnal zaferi ve Delhi yağması (1739) · Necef kurultayı / Caferî mezhebi teklifi (1743) · Kerden'de mezhep şartının düşüşü (`1746-09-04|Kerden` var).
Kaçar (en büyük boşluk): Gülistan Antlaşması (1813) · Türkmençay Antlaşması (TDV arama özeti: 10 Şubat 1828) · Griboyedov'un öldürülmesi (1829) · Herat kuşatmaları (1838, 1856–57) · Bâb'ın daveti (1844) ve idamı (Tebriz 1850) · Emîr Kebîr ve Dârülfünûn (1851) · Paris Antlaşması (1857) · Reuter imtiyazı (1872) · Tütün imtiyazı ve boykotu (1890–92) · Nâsırüddin Şah suikastı (1896) · D'Arcy petrol imtiyazı (1901) · Meşrutiyet fermanı (1906; gün çelişkili, bkz. aday 13) · İngiliz-Rus paylaşım sözleşmesi (1907) · Meclisin topa tutulması (1908) · Mescid-i Süleyman petrolü (1908) · Shuster ve Rus ültimatomu (1911) · İngiliz-İran Antlaşması (1919).
Pehlevî ve sonrası: "Persia" yerine "İran" adı (1935) · Keşf-i hicab (1936) · Ağustos 1941 İngiliz-Sovyet işgali (künyede yalnız `1941-09-16` tahttan çekilme) · Tahran Konferansı (1943) · Petrolün millileştirilmesi (1951) · 1953 darbesi (19 Ağustos 1953; Gasiorowski 1987 özeti) · Beyaz Devrim ve 15 Hordad (1963) · Humeynî'nin sürgünü (1964; TDV Humeynî) · Persepolis 2500. yıl şenliği (1971) · Cezayir Antlaşması (1975) · Kara Cuma (1978) · Amerikan elçiliği rehine krizi (1979–81) · İran-Irak Savaşı (1980–88) · 1988 infazları · Humeynî'nin ölümü (3 Haziran 1989; TDV Humeynî) · 2009 seçim protestoları · Nükleer anlaşma (2015).

---

## 2. Konu adayları (72) — ilk 40 sıralı

Biçim: **başlık** — tür · bağ · ilgi sinyali · kaynak [durum] · yaygın yanlış / akademik durum. ⚑ = mevcut kartla çakışır/örtüşür.

### 2.1 Sıralı ilk 40

1. **Çaldıran'ı İran nasıl hatırlar: yenilgi mi, kimlik doğumu mu?** — karsi-anlati · bağ `1514-08-23|Çaldıran` · ilgi: Türk-İran-Azerî sosyal medyasında en çok tartışılan Osmanlı-İran olayı · kaynak: TDV "Şah İsmâil" (Tufan Gündüz) https://islamansiklopedisi.org.tr/sah-ismail [OKUNDU]; TDV "Safevîler" (Gündüz) https://islamansiklopedisi.org.tr/safeviler [OKUNDU] · yanlış: "Şah İsmail Çaldıran'dan sonra bir daha savaşmadı, içkiye verdi" — TDV son yıllarda işleri emîrlere bırakıp avla meşgul olduğunu yazar ama bunu doğrudan Çaldıran'a bağlamaz. ⚑ **ÇAKIŞIR**: `karsi-caldiran-1514`, `bakis-iran`, `bakis-azeri` — yeni kart yazılmaz, ancak Safevî tarafının hükümdar kaydına aktarılır.
2. **Şah İsmail Türk müydü? Hatâyî'nin dili** — tartisma · bağ `1501-07-01|Şah İsmail'in Tebriz'i alması` · ilgi: Türkiye/Azerbaycan/İran milliyetçi tartışmalarının merkezi · kaynak: TDV "Şah İsmâil" (Gündüz; edebiyat: Adile Yılmaz Anıl) [OKUNDU: Türkçe ve az Farsça şiir, annesi Uzun Hasan'ın kızı Âlemşah Halime Begüm, divanı 1535'te derlendi]; TDV "Safevîler": Şeyh Safiyyüddin'in etnik kökeni "belirsiz" [OKUNDU]; Iranica "Esmāʿil I Ṣafawi" [OKUNMADI, 403] · akademik durum: dil (Türkçe şiir) ile soy (Kürt/İranî kökenli şeyh ailesi iddiaları) ayrı sorulardır; TDV kökeni belirsiz bırakır.
3. **Kiros Silindiri "ilk insan hakları beyannamesi" mi?** — karsi-anlati · bağ `-0538-01-01|II. Kyros Babil'i aldı` · ilgi: İran diasporası, internet "alıntıları", 1971 Şah şenliği · kaynak: Kuhrt, "The Cyrus Cylinder and Achaemenid Imperial Policy", JSOT 25 (1983) 83–97 [YALNIZ ÖZET: katalog kaydı]; British Museum nesne sayfası [OKUNMADI, 403]; Iranica "Cyrus Cylinder" [OKUNMADI, 403] · yanlış: internette dolaşan "insan hakları" çevirisi metinde yok; metin Babil geleneğinde bir kral yazıtıdır (Nabonid'i kötüleyen meşruiyet propagandası). Akademik ana akım bu yönde; Kuhrt'un tezi bizzat okunmalı.
4. **1953: Musaddık'ı CIA mı devirdi, din adamları mı?** — tartisma · bağ: MADDE YOK (1953 darbesi) · ilgi: ABD-İran ilişkilerinin "ilk günahı" anlatısı; 2013'te CIA belge açıklaması · kaynak: Gasiorowski, "The 1953 Coup d'Etat in Iran", IJMES 19/3 (1987) 261–286 [YALNIZ ÖZET]; Gasiorowski, "The Causes of Iran's 1953 Coup: A Critique of Darioush Bayandor's Iran and the CIA", Iranian Studies 45/5 (2012) 669–678 [YALNIZ ÖZET] · akademik durum: **iki görüş** — Bayandor: asıl aktör bazı Şiî din adamları ve sokak; Gasiorowski: yeni belge yok, CIA'nın örgütlediği askerî birlikler ve İngiliz-ABD hazırlığı belirleyici.
5. **Nâdir Şah İran'ı Sünnîliğe mi döndürmek istedi? "Caferî mezhebi" teklifi** — tartisma · bağ `1746-09-04|Kerden Antlaşması` (yedek `1736-03-08|Nadir Şah tahta çıktı`) · ilgi: Sünnî-Şiî yakınlaşma tartışmalarında güncel örnek · kaynak: Ernest Tucker, "Nadir Shah and the Ja'fari Madhhab Reconsidered", Iranian Studies 27/1-4 (1994) 163–179 [YALNIZ ÖZET: teklif = Caferîliği beşinci mezhep sayma, karşılığında sebbin bırakılması, Kâbe'de rükün, hac emîri]; DergiPark Necef kurultayı makalesi https://dergipark.org.tr/en/download/article-file/1153841 [OKUNMADI] · yanlış: "Nâdir Sünnî oldu" — Tucker'a göre amaç Safevî sonrası meşruiyet arayışıdır.
6. **Türkmençay (1828): İran Kafkasya'yı nasıl kaybetti?** — antlasma · bağ: MADDE YOK (1828-02-10) · ilgi: Azerbaycan'ın "bölünmesi" anlatısı, İran'da "aşağılayıcı antlaşma" deyimi · kaynak: TDV arama özetleri (10 Şubat 1828, Revan ve Nahçıvan kaybı, kapitülasyon hükümleri) [YALNIZ ÖZET]; TDV "Kaçarlar" (Gülistan 1813 + Türkmençay) https://islamansiklopedisi.org.tr/kacarlar [OKUNDU]; Iranica "Torkmānčāy treaty" [OKUNMADI, 403] · yanlış: "Azerbaycan Aras'ta Rusya ile İran arasında 1828'de ikiye bölündü" — sınır büyük ölçüde 1813 Gülistan'la çizildi; ikisi birlikte okunmalı.
7. **Hasan Sabbâh ve "haşhaşîler": esrar ve cennet bahçesi efsanesi** — karsi-anlati · bağ `1090-09-04|Hasan Sabbâh Alamut Kalesi'ni ele geçirip` · ilgi: popüler roman/oyun (Assassin's Creed), "Alamut" dizileri · kaynak: TDV "Hasan Sabbâh" https://islamansiklopedisi.org.tr/hasan-sabbah [OKUNDU: haşhaş iddiası efsanedir notu]; F. Daftary, *The Assassin Legends* (1994) [OKUNMADI] · yanlış: fedâîlerin esrarla uyuşturulup sahte cennete sokulduğu (Marco Polo) — akademide efsane; Hasan Sabbâh–Nizâmülmülk–Hayyam okul arkadaşlığı da geç bir rivayet (TDV okunan özetinde yer almadı → teyit gerek).
8. **Kâdisiye: Sâsânî'yi bitiren savaş hangi yıl oldu?** — savas-hikayesi · bağ `0636-01-01|Kādisiye Savaşı` · ilgi: İran milliyetçiliğinde "Arap istilası" anlatısı; Saddam'ın 1980'lerde "Kâdisiye" propagandası · kaynak: TDV "Kādisiye Savaşı" (Hayrettin Yücesoy, 2001) https://islamansiklopedisi.org.tr/kadisiye-savasi [OKUNDU: 15/636; 14/635 ve 16 rivayetleri; Sa'd çardaktan yönetti; Rüstem'i Hilâl b. Ullefe öldürdü; Dirafş-ı Kâviyân ganimet] · akademik: yıl üç rivayetli; kart "kesinlik" alanı bunu taşımalı.
9. **Sâsânî İran'ı neden bu kadar çabuk çöktü?** — sebep-sonuc · bağ `0651-01-01|Son Sâsânî hükümdarı III. Yezdicerd Merv'de öldürüldü` · ilgi: "Araplar İran'ı yıktı" ↔ "İran içten çökmüştü" tartışması · kaynak: TDV "Sâsânîler" https://islamansiklopedisi.org.tr/sasaniler [OKUNDU: 627 Ninova yenilgisi, 628 II. Hüsrev'in öldürülüşü ve ardından uzun istikrarsızlık]; Pourshariati, *Decline and Fall of the Sasanian Empire* (2008) [OKUNMADI] · akademik: **iki görüş** — Bizans savaşlarının bitkinliği/taht kavgası (TDV) ve Pourshariati'nin Part soylu aileleriyle "konfederasyon" çözülmesi tezi (okunmadı; tartışmalı).
10. **Şah Abbas: Osmanlı'dan kopyalanan kul ordusu** — sebep-sonuc · bağ `1587-10-01|I. Şah Abbas tahta çıktı` · ilgi: "Büyük Şah Abbas" İran'da en sevilen hükümdar; Türk tarafında Kızılbaş'ın tasfiyesi · kaynak: TDV "Abbas I" (Faruk Sümer, 1988) https://islamansiklopedisi.org.tr/abbas-i [OKUNDU: Kapıkulu örneğiyle Gürcü-Çerkez-Ermeni "kul" ocağı, kullar ağası, Kızılbaş tüfenkçileri] · yanlış: "Kızılbaşlar bütünüyle tasfiye edildi" — TDV Safevîler: etkileri azaldı ama ordu sonuna dek sürdü.
11. **Şiîliği resmî mezhep yapmak: İran bir günde Şiî mi oldu?** — tartisma · bağ `1501-07-01|Şah İsmâil Tebriz'i aldı, On İki İmam Şiîliğini resmî mezhep ilan etti` · ilgi: Sünnî-Şiî tarih tartışmaları · kaynak: TDV "Safevîler" (Gündüz) [OKUNDU: ilk üç halifeye hutbede lânet, zorla mezhep değiştirme, bazen katliam; öncesinde Şiîlik yalnız küçük yerel beyliklerde]; TDV "Şah İsmâil" [OKUNDU: İran henüz tamamen Şiî değildi] · akademik: dönüşüm yüzyıllara yayıldı; Lübnan'dan (Cebel Âmil) ulema getirilmesi (Abisaab, *Converting Persia*, 2004) [OKUNMADI].
12. **Humeynî ve velâyet-i fakih: Türkiye'de geçen bir sürgün** — kimdir · bağ `1979-02-01|Ayetullah Humeyni sürgünden Tahran'a döndü` · ilgi: Bursa sürgünü Türk okuru için çarpıcı · kaynak: TDV "Humeynî" https://islamansiklopedisi.org.tr/humeyni [OKUNDU: 1963 tutuklanma, 1964 Türkiye (Bursa) sonra Necef, 1970 velâyet-i fakih dersleri, 1978 Paris, ölüm 3 Haziran 1989] · akademik: velâyet-i fakih Şiî ulema arasında da tartışmalı (Hoî vb.) — ikinci kaynak gerek.
13. **İran Meşrutiyeti (1906): Osmanlı'dan iki yıl önce** — sebep-sonuc · bağ: MADDE YOK · ilgi: "İran Osmanlı'dan önce meclis açtı" karşıtlığı · kaynak: DergiPark Alkaç (2024, Hitit Sosyal Bilimler Dergisi, Behbehânî ve Tabâtabâî) [YALNIZ ÖZET: ferman 8 Ağustos 1906]; Güncü & Kırkpınar (2021) [YALNIZ ÖZET: 5 Ağustos 1906]; Marmara Ü. tezi "1906-1911 İran meşrutiyet hareketinde Osmanlı etkisi" [YALNIZ ÖZET]; TDV "Kaçarlar" [OKUNDU: 1906 meşrutiyet, Meclis] · **TARİH ÇELİŞKİSİ**: 5 ve 8 Ağustos — hakemli karar gerekir (Jülyen değil; hicrî 14 Cemâziyelâhir 1324 karşılığı kontrol edilmeli).
14. **Tütün boykotu: bir fetva şahı nasıl geri adım attırdı?** — sebep-sonuc · bağ: MADDE YOK (1890–92) · ilgi: "ilk modern İran halk hareketi" · kaynak: TDV "Kaçarlar" [OKUNDU: imtiyazlar ve dış borç genel çerçeve]; Keddie, *Religion and Politics in Iran: The Tobacco Protest of 1891–1892* (1966) [OKUNMADI]; Iranica "Tobacco protest" [OKUNMADI, 403] · akademik: Mirzâ Şîrâzî fetvasının sahihliği tartışılır — iki görüş kaynakla yazılmalı (okunmadı).
15. **Nâdir Şah Delhi'yi neden yağmaladı? Tavus Tahtı ve Kûh-i Nûr** — savas-hikayesi · bağ: MADDE YOK (Karnal 1739) · ilgi: Kûh-i Nûr elmasının iadesi tartışması (Hindistan-Pakistan-Afganistan-İngiltere) · kaynak: TDV Nâdir Şah [YALNIZ ÖZET: arama sayfası, saltanat 1736–1747]; Tucker, *Nadir Shah's Quest for Legitimacy* (2006) [OKUNMADI]; Axworthy, *The Sword of Persia* (2006) [OKUNMADI].
16. **İran-Irak Savaşı: sekiz yıl, sıfır sınır değişikliği** — savas-hikayesi · bağ: MADDE YOK (1980-09-22) · ilgi: kimyasal silah, çocuk askerler tartışmaları · kaynak: TDV "Humeynî" [OKUNDU: 1980–88, 1988 BM ateşkesi]; Murray & Woods, *The Iran-Iraq War: A Military and Strategic History* (2014) [OKUNMADI] · not: haritada sınır 1975 Cezayir hattına döndü — "değişmeyen sınır" kartı.
17. **Maraton: Persler gerçekten "yenilmez ordu" muydu?** — karsi-anlati · bağ `-0489-01-01|Maraton'da Yunan hoplitleri` · ilgi: "300" filmi, Batı medeniyeti anlatısı · kaynak: Briant, *From Cyrus to Alexander* (2002) [OKUNMADI]; Herodotos çevirisi [OKUNMADI] · yanlış: Herodotos'un ordu sayıları; Pers'in bu seferi sınırlı cezalandırma seferi olarak görmesi.
18. **Persepolis'i İskender neden yaktı?** — tartisma · bağ `-0329-01-01|Persepolis yakılıp yağmalandı` · ilgi: İran'da "Gücestek İskender" anlatısı ↔ Batı'da "Büyük İskender" · kaynak: Briant (2002) [OKUNMADI]; Iranica "Persepolis" [OKUNMADI] · akademik: **iki görüş** — kasıtlı intikam/politik mesaj (Arrianos) ↔ sarhoş ziyafette Thais'in kışkırtması (Diodoros/Plutarkhos).
19. **Gaugamela: İmparatorluğu bitiren bir öğleden sonra** — savas-hikayesi · bağ `-0330-10-01|Gaugamela'da İskender III. Darius'u yendi` · kaynak: Babil Astronomik Günlükleri (ay tutulması ile tarihleme) [OKUNMADI]; Briant [OKUNMADI].
20. **Carrhae: Roma'nın lejyonlarını eriten Part okçuları** — savas-hikayesi · bağ `-0052-01-01|Carrhae'de Partlar Crassus'u yenip öldürdü` · ilgi: "Part okçusu" deyimi, kayıp kartal sancakları · kaynak: Sampson, *The Defeat of Rome: Crassus, Carrhae* (2008) [OKUNMADI]; Iranica "Carrhae" [OKUNMADI] · yanlış: Crassus'un ağzına erimiş altın dökülmesi — geç rivayet.
21. **Valerianus: Roma imparatoru esir düştüğünde** — savas-hikayesi · bağ: MADDE YOK (260 Edessa) — yedek `0256-01-01|Dura-Europos Sasaniler tarafından alındı` · kaynak: TDV "Sâsânîler" [OKUNDU: Şapur Valerianus'u Edessa'da yendi]; Nakş-ı Rüstem Şapur yazıtı neşri (Huyse 1999) [OKUNMADI] · yanlış: Valerianus'un derisinin yüzülüp doldurulması (Lactantius) — Hristiyan polemiği.
22. **Mazdek: "komünist peygamber" mi, düşman kaynakların icadı mı?** — tartisma · bağ: MADDE YOK (~528) · kaynak: Iranica "Mazdak" [OKUNMADI, 403]; Crone, "Kavād's Heresy and Mazdak's Revolt", *Iran* 29 (1991) [OKUNMADI] · akademik: kaynakların hepsi düşman (Zerdüşt ruhban, İslâmî tarihler); "kadın ortaklığı" iddiası polemik olabilir — iki görüş adıyla yazılmalı (okunduktan sonra).
23. **I. Hüsrev Enûşirvân: "Âdil" lakabı nereden geldi?** — kimdir · bağ `0531-01-01|I. Hüsrev (Enûşirvân) tahta çıktı` · kaynak: TDV "Sâsânîler" [OKUNDU: askerî-idarî reform] · yanlış: İslâmî edebiyatta ideal âdil hükümdar; Mazdekîlerin kıyımı aynı hükümdarın eseri.
24. **Kudüs'ün haçı Medâin'de: II. Hüsrev'in son büyük savaşı** — savas-hikayesi · bağ `0614-01-01|Sâsânîler Kudüs'ü alıp kutsal haçı Medâin'e götürdü` · kaynak: TDV "Sâsânîler" [OKUNDU]; Howard-Johnston, *Witnesses to a World Crisis* (2010) [OKUNMADI] · bağlantı: Rûm sûresi bağlamı (TDV "Rûm sûresi" OKUNMADI).
25. **Ninova 627: Herakleios'un İran'ın kalbine yürüyüşü** — savas-hikayesi · bağ `0627-01-01|Ninevâ'da Sâsânî ana ordusu Herakleios'a yenildi` · kaynak: TDV "Sâsânîler" [OKUNDU].
26. **Sâmânîler ve Farsçanın yeniden doğuşu** — sebep-sonuc · bağ `0892-04-03|Nasr b. Ahmed'in ölümüyle hâkimiyet İsmâil b. Ahmed'e geçti; Buhara Sâmânî başşehri oldu` · ilgi: Tacikistan-İran-Özbekistan miras tartışması · kaynak: TDV "Sâmânîler" [OKUNMADI]; Frye (ed.), *Cambridge History of Iran* c.4 (1975) [OKUNMADI].
27. **Ya'kūb b. Leys: bakırcı çırağından halifeye meydan okuyan emîr** — kimdir · bağ `0876-04-04|Ya'kūb b. Leys Bağdat yakınındaki Deyrülâkūl'de` · kaynak: TDV "Ya'kūb b. Leys" / "Saffârîler" [OKUNMADI]; Bosworth, *The History of the Saffarids of Sistan* (1994) [OKUNMADI] · yanlış: "Arapçayı reddeden ilk İran milliyetçisi" — modern okuma, tartışmalı.
28. **Büveyhîler Bağdat'ta: Şiî emîrler Sünnî halifeyi neden devirmedi?** — tartisma · bağ `0945-12-19|Büveyhî Ahmed (Muizzüddevle) Bağdat'a girdi` · kaynak: TDV "Büveyhîler" [OKUNMADI]; Donohue, *The Buwayhid Dynasty in Iraq* (2003) [OKUNMADI].
29. **Dandanakan: üç günlük bir savaş İran'ın bin yılını nasıl değiştirdi?** — savas-hikayesi · bağ `1040-05-23|Dandanakan zaferiyle Gazneliler Horasan'dan atıldı` · ilgi: Türk tarih anlatısında "kuruluş" · kaynak: TDV "Dandanakan Savaşı" [OKUNMADI]; Beyhakî *Târîh* neşri [OKUNMADI] · not: Osmanlı kartlarıyla çakışma olabilir — kontrol edilmedi.
30. **Alamut'un düşüşü: Hülâgû ve kütüphane** — sebep-sonuc · bağ `1256-11-19|Alamut Hülâgû'nun ordusuna teslim oldu` · kaynak: TDV "Hasan Sabbâh" [OKUNDU: Sergüzeşt-i Seyyidinâ Moğol fethinde büyük ölçüde kayboldu]; Cüveynî, *Târîh-i Cihângüşâ* (Boyle çev.) [OKUNMADI] · not: kütüphaneyi bizzat Cüveynî'nin taradığı — teyit gerek.
31. **Gazan Han'ın ihtidası: Moğol İran'ı Müslüman olunca ne değişti?** — sebep-sonuc · bağ `1295-01-01|Gazan Han tahta çıktı, İslam'ı resmî din ilan etti` · kaynak: TDV "Gazan Han" [OKUNMADI]; Melville, "Pādshāh-i Islām", *Pembroke Papers* 1 (1990) [OKUNMADI].
32. **Sultâniye: dünyanın en büyük tuğla kubbelerinden biri ve Olcaytu'nun Şiîliği** — mimari · bağ `1305-01-01|Olcaytu Sultâniye'yi büyütüp başkent yaptı` · kaynak: TDV "Olcaytu" / "Sultâniye" [OKUNMADI]; Blair, "The Mongol Capital of Sultaniyya", *Iran* 24 (1986) [OKUNMADI] · yanlış: kubbe ölçüleri internette abartılı/çelişkili — ölçü akademik kaynaktan.
33. **Serbedârîler: "darağacındaki baş" adını taşıyan cumhuriyet mi?** — tartisma · bağ `1337-09-09|Serbedârîler Sebzevâr'ı aldı` · kaynak: TDV "Serbedârîler" [OKUNMADI]; Smith, *The History of the Sarbadar Dynasty* (1970) [OKUNMADI] · yanlış: "ilk halk cumhuriyeti" — Sovyet tarih yazımının okuması; Smith dervış-emîr ikili iktidarı vurgular (okunmadı, teyit gerek).
34. **Uzun Hasan, Venedik ve top: Otlukbeli'ye giden ittifak** — sebep-sonuc · bağ `1464-01-01|Venedik ile Osmanlı'ya karşı ittifak kurdu` · kaynak: TDV "Uzun Hasan" [OKUNMADI]; Woods, *The Aqquyunlu* (1999) [OKUNMADI] · ⚑ Osmanlı Otlukbeli kartlarıyla örtüşme olasılığı (kontrol edilmedi); Venedik kademesiyle ortak.
35. **Afgan istilası: 1722'de İsfahan nasıl düştü?** — savas-hikayesi · bağ `1722-11-10|Afgan (Gilzai) istilası, İsfahan düştü` · ilgi: "Safevî çöküşü" tartışması · kaynak: Matthee, *Persia in Crisis* (2012) [OKUNMADI]; TDV "Safevîler" [OKUNDU: genel çerçeve] · akademik: **iki görüş** — klasik "çöküş/dekadans" (Lockhart 1958) ↔ Matthee'nin kriz-yönetim ve tesadüf vurgusu (okunmadı).
36. **Gülnâbâd: küçük bir ordunun büyük zaferi** — savas-hikayesi · bağ `1722-03-08|Mahmud'un Galzay ordusu Gülnâbâd'da` · kaynak: Lockhart, *The Fall of the Safavi Dynasty* (1958) [OKUNMADI] · ⚑ 35 ile birleştirilebilir.
37. **Ağa Muhammed Han: hadım bir şahın İran'ı birleştirmesi** — kimdir / hükümdar kaydı · bağ `1789-03-21|Ağa Muhammed Han Kaçar tahta çıktı` · kaynak: TDV "Ağa Muhammed Han" [OKUNMADI]; TDV "Kaçarlar" [OKUNDU: 17 yıllık mücadele, 1796 Tahran'da taç] · yanlış: Kirman'daki göz yığını rivayetinin sayıları (kaynaklar abartılı) — temkinli dil.
38. **Kerim Han Zend: "şah" değil "vekîl" olan hükümdar** — kimdir · bağ `1751-01-01|Kerim Han Zend İsfahan'a hâkim oldu` · kaynak: Perry, *Karim Khan Zand* (1979) [OKUNMADI]; TDV "Kerîm Han Zend" [OKUNMADI] · ⚑ `dunya6-iran-turk-hanedanlari-afsar-zend-ayrimi` ile kısmen örtüşür (Zend'in Türk olmayışı).
39. **Rıza Şah: Atatürk'ü örnek alan şah mı?** — tartisma · bağ `1925-12-12|Rızâ Han meclis tarafından şehinşah ilan edildi` · ilgi: Türk okuru için doğrudan çekici; 1934 Türkiye ziyareti · kaynak: Atabaki & Zürcher (ed.), *Men of Order* (2004) [OKUNMADI] · ⚑ `tartisma-kacar-sonrasi-iran-pehlevi` ile örtüşür (farklı soru: neden cumhuriyet olmadı?).
40. **1941: İran'ı kim işgal etti, şah neden tahttan indirildi?** — sebep-sonuc · bağ `1941-09-16|Rızâ Şah tahttan çekilmek zorunda bırakıldı` · kaynak: Abrahamian, *A History of Modern Iran* (2008) [OKUNMADI]; TDV "Pehlevîler" [OKUNMADI].

### 2.2 Öteki adaylar (sırasız, 41–72)

41. **Pişeverî ve 1946 Azerbaycan Millî Hükûmeti: Soğuk Savaş'ın ilk krizi** — sebep-sonuc · bağ `1945-12-12|Azerbaycan Millî Meclisi açıldı` · kaynak: Fawcett, *Iran and the Cold War* (1992) [OKUNMADI].
42. **Mirzâ Kûçek Han ve Gîlân Sovyet Cumhuriyeti** — kimdir · bağ `1920-06-05|Mirza Küçük Han Reşt'te İran Sosyalist Sovyet Cumhuriyeti'ni` · kaynak: Iranica "Jangali movement" [OKUNMADI].
43. **1979 devrimi: "Şah'ı halk mı devirdi, Carter mı?"** — tartisma · bağ `1979-01-16|Muhammed Rızâ Şah ülkeyi terk etti` · kaynak: Kurzman, *The Unthinkable Revolution in Iran* (2004) [OKUNMADI]; TDV "Humeynî" [OKUNDU].
44. **İslâm Cumhuriyeti referandumu: %98'in hikâyesi** — sebep-sonuc · bağ `1979-03-31|Referandumla İran İslam Cumhuriyeti ilan edildi` · kaynak: Abrahamian (2008) [OKUNMADI].
45. **Kasr-ı Şîrîn: bugünkü sınır 1639'dan mı?** — antlasma · bağ `1639-05-17|Kasr-ı Şirin Antlaşması` · ⚑ **ÇAKIŞIR** `antlasma-kasrisirin-1639-sinir` (başlık boş — onarım önerisi) ve `dunya-iran-topraklari-tartisma`.
46. **Amasya Barışı (1555): ilk Osmanlı-Safevî barışı** — antlasma · bağ `1555-05-29|Amasya Barışı` · ⚑ Osmanlı antlaşma kartlarında muhtemelen var (kontrol edilmedi).
47. **Ferhad Paşa Antlaşması (1590): Şah Abbas'ın neden "kötü barış" imzaladığı** — sebep-sonuc · bağ `1590-03-21|Ferhad Paşa Antlaşması` · kaynak: TDV "Abbas I" [OKUNDU: genel bağlam] · ⚑ Osmanlı tarafında kontrol edilmedi.
48. **Bağdat 1623: Şah Abbas'ın en büyük kazancı** — ⚑ **ÇAKIŞIR** `tartisma-bagdat-1623-savas-ilani-mi`; yeni kart yazılmaz.
49. **Hürmüz 1622: İngiliz gemileriyle Portekiz'e karşı** — savas-hikayesi · bağ: İran dökümünde MADDE YOK (mevcut kart bağı `1622-04-23|Hürmüz` Osmanlı/dünya kronolojisinde) · ⚑ **ÇAKIŞIR** `tartisma-bolge0073-hurmuz-bogazi-el-degistirme`.
50. **Albuquerque ve Hürmüz Sultanlığı (1507)** — savas-hikayesi · bağ `1507-10-10|Albuquerque'nin Cerûn önünde topçuyla` · kaynak: Portekiz kademesiyle ortak; Aubin, "Le royaume d'Ormuz" [OKUNMADI] · ⚑ `dunya-hurmuz-bogazi-onemi`.
51. **Bahreyn 1602: İran'ın Körfez iddiasının tarihî kökü** — tartisma · bağ `1602-01-01|Safevîler'in Bahreyn'i Portekiz'den alması` · ilgi: bugünkü Bahreyn-İran gerginliği · kaynak: Floor, *The Persian Gulf* (2006) [OKUNMADI].
52. **Bîsütûn: bir kral yalanı kayaya mı yazdırdı?** (Gaumata/Bardiya) — tartisma · bağ `-0521-01-01|I. Dareios tahta çıktı` · kaynak: Briant (2002) [OKUNMADI]; Kuhrt, *The Persian Empire: A Corpus of Sources* (2007) [OKUNMADI] · akademik: **iki görüş** — Dareios'un anlatısı doğru ↔ gerçek Bardiya'yı öldürüp gaspı örttü (Briant ve başkaları ihtimal verir).
53. **Kserkses: "300"ün tanrı-kralı kimdi?** — karsi-anlati · bağ `-0485-01-01|I. Kserkses tahta çıktı` · kaynak: Stoneman, *Xerxes: A Persian Life* (2015) [OKUNMADI].
54. **Medler Ninova'yı yıktığında: Asur'u kim bitirdi?** — sebep-sonuc · bağ `-0611-01-01|Medler ve Babilliler üç aylık kuşatmanın ardından Ninova'yı alır` · kaynak: Iranica "Media" [OKUNMADI; künye kaydında anılıyor].
55. **Güneş tutulması bir savaşı durdurdu: MÖ 585 Med-Lidya barışı** — magazin · bağ `-0584-05-29|Lidya savaşı (MÖ 590-585) 29 Mayıs 585 güneş tutulması` · ilgi: Thales kehaneti · kaynak: Herodotos I.74 [OKUNMADI] · akademik: Thales'in kehanetinin mümkünlüğü tartışmalı.
56. **Elamlılar Ur'u yıktı: İran'ın Mezopotamya'ya ilk darbesi (MÖ 2004)** — savas-hikayesi · bağ `-2003-01-01|Kindattu (Simaški'nin altıncı kralı) önderliğinde` · kaynak: Potts, *The Archaeology of Elam* (1999/2016) [OKUNMADI].
57. **Hammurabi'nin kanun dikilitaşı neden Susa'da bulundu?** — magazin · bağ `-1183-01-01|I. Şutruk-Nahhunte tahta çıkar` · kaynak: Potts [OKUNMADI] · not: dikilitaşın Susa'ya ganimet olarak taşınması I. Şutruk-Nahhunte'ye bağlanır.
58. **Hatra'nın düşüşü ve Roma-Sâsânî yüzyılı** — savas-hikayesi · bağ `0240-01-01|Hatra Sasani'nin eline geçti` · kaynak: Dodgeon & Lieu, *The Roman Eastern Frontier and the Persian Wars* (1991) [OKUNMADI].
59. **Iulianus'un ölümü ve Nusaybin'in teslimi (363)** — antlasma · bağ `0363-01-01|Jovianus Antlaşması: Nisibis ve beş Dicle ötesi bölge` · kaynak: Ammianus Marcellinus XXV [OKUNMADI].
60. **Ermenistan'ın 387 paylaşımı: iki imparatorluk arasında bir ülke** — antlasma · bağ `0387-01-01|Roma-Sasani Ermenistan'ı paylaşma antlaşması` · ilgi: Ermeni tarih yazımı · kaynak: Garsoïan, *Cambridge/Hovannisian (ed.) Armenian People* c.1 (1997) [OKUNMADI].
61. **Akhunlara esir düşen şah: Fîrûz'un iki yenilgisi** — savas-hikayesi · bağ `0484-01-01|I. Peroz Eftalitlerle savaşta öldü` · kaynak: TDV "Akhunlar" [OKUNMADI].
62. **Merdâvîc: Sâsânî tacını geri getirmek isteyen Deylemli** — kimdir · bağ `0935-01-01|Merdâvîc İsfahan'da Türk askerlerince öldürülür` · kaynak: TDV "Merdâvîc" / "Ziyârîler" [OKUNMADI].
63. **Kâbûs b. Veşmgîr: şair emîr** — kimdir · bağ `0998-08-01|Sâmânî sürgününden dönen Kābûs` · kaynak: TDV "Kābûs b. Veşmgîr" [OKUNMADI] · not: Gonbad-ı Kâbûs (UNESCO) mimari kartı da olur.
64. **Katvan 1141: Sencer'in yenilgisi ve "Prester John" efsanesi** — dis-yankilar · bağ `1141-09-09|Katvan Savaşı (5 Safer 536)` · ilgi: Haçlı Avrupa'sında doğulu Hristiyan kral efsanesi · kaynak: TDV "Katvan Savaşı" [OKUNMADI]; Biran, *The Empire of the Qara Khitai* (2005) [OKUNMADI].
65. **Celâleddin Hârizmşah Tebriz'de** — kimdir · bağ `1225-07-25|Celâleddin Hârizmşah Tebriz'e girdi` · kaynak: TDV "Celâleddin Hârizmşah" [OKUNMADI].
66. **Timur'un "üç yıllık seferi"** — ⚑ **ÇAKIŞIR** `savas-timur-iran-1386-1388`.
67. **Kara Yûsuf ve Serdrûd** — ⚑ **ÇAKIŞIR** `savas-aras-serdrud-1406-1408`.
68. **Cihan Şah'ın sonu** — ⚑ **ÇAKIŞIR** `savas-karakoyunlu-sonu-1467-1469`.
69. **Kastilya elçisi Clavijo Tebriz'de (1404)** — dis-yankilar · bağ `1404-06-11|Kastilya elçileri Tebriz'e girip` · kaynak: Clavijo, *Embajada a Tamorlán* (Le Strange çev. 1928) [OKUNMADI] · İspanya kademesiyle ortak.
70. **Nâsır-ı Hüsrev: İsmâilî bir gezginin yedi yılı** — kimdir · bağ `1052-10-24|Nâsır-ı Husrev Basra-İsfahan yoluyla` · kaynak: TDV "Nâsır-ı Hüsrev" [OKUNMADI].
71. **Petro'nun Hazar seferi ve 1724 paylaşımı** — ⚑ **ÇAKIŞIR** `savas-hazar-gilan-1722`, `rusiran-iran-paylasimi-1724-neden`, `antlasma4-iran-mukasemenamesi-1724`.
72. **Erzurum Antlaşmaları (1823, 1847): Şattülarap meselesinin kökü** — antlasma · bağ `1847-05-31|II. Erzurum Antlaşması — Şattülarap` · ilgi: 1975 Cezayir ve 1980 savaşına uzanan zincir · kaynak: Ateş, *The Ottoman-Iranian Borderlands* (2013) [OKUNMADI] · ⚑ `savas-osmanli-iran-1820-1823` ile kısmen.

### 2.3 Kronoloji maddesi bekleyen yüksek ilgili konular (MADDE YOK — bağ için önce kronoloji)
Türkmençay 1828 (aday 6) · 1953 darbesi (4) · Meşrutiyet 1906 (13) · Tütün 1891 (14) · Delhi 1739 (15) · İran-Irak 1980 (16) · Valerianus 260 (21) · Mazdek (22) · ayrıca: Babek (816–838), Ebû Müslim (750), Firdevsî/Şehnâme (~1010), Bâb ve Bâbîlik (1844/1850; TDV "Bâbîlik" kısa madde YALNIZ ÖZET), Persepolis 2500. yıl şenliği (1971), rehine krizi (1979).

---

## 3. Çakışma özeti (mevcut 25 kart)
Doğrudan çakışan adaylar: 1 (Çaldıran ×3 kart), 45 (Kasr-ı Şîrîn), 48 (Bağdat 1623), 49–50 (Hürmüz ×2), 66, 67, 68, 71 (×3), kısmen 38, 39, 72. Bu adaylar yeni kart yerine **hükümdar/kişi kaydına** ya da İran-merkezli bakış açısına dönüştürülür. Bakım bulgusu: `antlasma-kasrisirin-1639-sinir` başlığı boş; birçok kartta `1514-08|…` ay hassasiyetli bağ.

## 4. Okunan / okunamayan kaynaklar
OKUNDU (8, hepsi TDV, WebFetch özetiyle; sayfa numarası yok): Safevîler (Gündüz, Beksaç) · Şah İsmâil (Gündüz; Anıl) · Abbas I (F. Sümer 1988) · Sâsânîler · Kādisiye Savaşı (Yücesoy 2001) · Hasan Sabbâh · Kaçarlar · Humeynî. (Sâsânîler, Hasan Sabbâh, Kaçarlar, Humeynî maddelerinin yazar adı alınmadı → 2. aşamada yeniden okunacak.)
YALNIZ ÖZET (7): Tucker 1994 · Gasiorowski 1987 · Gasiorowski 2012 · Kuhrt 1983 (katalog) · TDV Türkmençay arama özetleri · TDV Bâbîlik kısa madde · DergiPark Meşrutiyet makaleleri (Alkaç 2024; Güncü & Kırkpınar 2021) + Marmara tezi.
OKUNMADI: Encyclopaedia Iranica (403, 5 madde denendi) · British Museum (403) · listede [OKUNMADI] yazan bütün monografiler.

## 5. BORÇ (deftere)
- Iranica 403: bütün İran kartlarının ana yabancı akademik ansiklopedisi okunamıyor — başka erişim yolu (kütüphane/arşiv kopyası) gerekli. *Denenmedi ≠ bulunamadı*: 5 madde denendi, 403.
- Meşrutiyet fermanı günü çelişkisi (5 / 8 Ağustos 1906) hakemli karar bekliyor.
- Kaçar ve 20. yüzyıl kronoloji boşlukları (1.4) kronoloji işine devredilmeli; ek okuma dalında yazılmaz.
- Zaman sınırı (23:05) nedeniyle 41–72 arası adayların kaynakları okunmadı; ilk 40'ta da çoğu monografi okunmadı.
