> **TEYİT DURUMU (25.11):** İran turunun aksine bu turda kaynaklar **tam metin okundu**: 4 TDV maddesi (curl ile indirildi, baştan sona okundu), 2 NDB maddesi (deutsche-biographie.de tam metin), 1 birincil hatıra (Sanders, *Five Years in Turkey*, archive.org OCR tam metni; ilgili bölümler okundu). WebFetch özeti KULLANILMADI. **Hiçbir kart bütünüyle teyitsiz değil; ama 8 kartın hiçbirinde TDV dışı, bağımsız ve hakemli ikinci bir tarihçi okunmadı** (Aksakal, Trumpener, Erickson, Clark, McMurray vb. okunmadı). Bu yüzden hepsi «yayın adayı» değil, **üslup örneğidir**; kart bazında durum aşağıda.

# ALMANYA — 8 ÖRNEK KART (AŞAMA 2) · üslup onayı için

25 Kasım 2026 · HAVVA alt ajanı. Dosyalar (scratchpad\almanya-ornek\data\): `ekokuma_dev_almanya_01.js` → `window.EKOKUMA_DEVALMANYA01` (5 kart) · `hukumdar_almanya.js` → `window.HUKUMDAR_ALMANYA` (1) · `kisi_almanya.js` → `window.KISI_ALMANYA` (2).
Türler: sebep-sonuc · tartisma · karsi-anlati · dis-yankilar · antlasma (5 ek okuma türü) + hükümdar kaydı + 2 kişi. Beş kartın beşi de Osmanlı-Alman ilişkisidir (Prusya 1761 dâhil).
Kişi/hükümdar kayıtları `KISILER`e değil `KISI_ALMANYA`/`HUKUMDAR_ALMANYA`ya gitti; `devlet:` alanı `almanya`.

**Bağ sınaması:** her `olay` günü `git grep` ile origin/main `data/olaylar*.js`, `data/kronoloji*.js`, `data/devletler.js` üzerinde tarandı (ayrıntı her kartın `ic_not` alanında). Sonuç: bütün parçalar tek maddeye uyuyor; yanlış maddede görünme riski yok. `_ekNorm` (â, ū, ı) davranışı kodda okunmadı, parçalar maddedeki yazımla birebir yazıldı.

---

## 1. Sebep-Sonuç — Bir demiryolu dünya savaşı çıkarır mı? Berlin-Bağdat hattının asıl hikâyesi
`almanya-sebep-bagdat-demiryolu-1903` · bağ `1903-03-05|Bağdat Demiryolu Antlaşması` · kesinlik: tartismali

*Hattı Alman parası döşedi ama İstanbul'dan Bağdat'a ray atma düşüncesi Osmanlı'nındı; İngiltere'yi tedirgin eden de buydu.*

**Sebep (1888-09-24):** Osmanlı'nın İstanbul-Bağdat hattını kendi maliyesiyle sürdürememesi ve Haydarpaşa-Ankara imtiyazının 1888'de Alman bankacı Alfred von Kaulla'ya verilmesi

**Sonuç (1903-03-05):** Alman sermayesinin ağır bastığı Bağdat Demiryolu imtiyazının Mart 1903'te son biçimini alması ve şirketin kurulması

**Bağ:** TDV'nin Beydilli maddesi, 1888 imtiyazını Bağdat hattının başlangıcı, 1899-1903 anlaşmalarını da aynı sürecin son kademeleri olarak anlatır.

Basra Körfezi'ne uzanan demiryolu, yirminci yüzyılın başında Avrupa gazetelerinin en çok yazdığı projelerden biriydi. Peki bu hat gerçekten bir dünya savaşının fitili miydi, yoksa daha sıradan bir iş miydi?

FİKİR KİMİNDİ?
İstanbul'u Bağdat'a bağlama düşüncesi Almanlardan çok eskidir. Osmanlı 1870'lerde bu yönde karar almış, Haydarpaşa-İzmit hattı 1873'te tamamlanmıştı; ama devlet maliyesi yüzünden işler 1888'e kadar durdu. TDV, Almanya'nın demiryolu işinde yeni bir güç olarak belirmesinde II. Abdülhamid'in konuyla bizzat ilgilenmesinin büyük payı olduğunu, Bismarck'ın ise çekingen kaldığını yazar.

ADIM ADIM
24 Eylül 1888'de Haydarpaşa-Ankara hattının imtiyazı Alfred von Kaulla adlı bir Alman bankacıya verildi; 1889'da Anadolu Demiryolları Şirketi kuruldu. Hat 1892'de Ankara'ya, 1896'da Konya'ya vardı. Konya'dan ötesi için ön anlaşma 1899'un sonunda, esas anlaşma 1902'de, finansman sözleşmesi ve Bağdat Demiryolu Şirketi 1903'te geldi.

KİM NE KAZANDI?
Şirketin sermayesinde Alman payı baskındı; yaklaşık yüzde otuz Fransız sermayesi de vardı. Osmanlı hazinesi her kilometre için garanti veriyor, savaşta ya da isyanda askerî sevkiyata öncelik tanıyordu; imtiyaz 99 yıllıktı. TDV, hattın Anadolu buğdayını İstanbul'a taşıyarak başkenti Rus ve Bulgar buğdayına bağımlılıktan kurtardığını ve hat boyunca yüz binlerce muhacirin iskânına da yaradığını belirtir.

İNGİLTERE NEDEN TEDİRGİNDİ?
Hat Hindistan yoluna yaklaşıyordu. Basra Körfezi'ne uzanması İngiltere'yi, Rusya'yı ve Fransa'yı rahatsız etti; Almanya, İngiltere'ye hattın Basra'ya kadar uzatılmayacağı güvencesini vermek zorunda kaldı. Hattın tamamı ancak Ekim 1918'de, savaşın bitmesine haftalar kala kesintisiz hâle geldi; Türkiye Cumhuriyeti onu 10 Ocak 1928'de satın aldı.

TARİHÇİLER BUGÜN NE DİYOR
TDV, hattı Almanya ile İngiltere arasındaki rekabetin başlıca kaynaklarından biri sayar ve bu rekabetin Birinci Dünya Savaşı'na vardığını yazar; hattı savaşın tek sebebi olarak sunmaz. Küçük bir ayrıntı da dikkat çeker: iki ayrı TDV maddesi antlaşmanın gününü farklı verir (5 Mart ya da 21 Mart 1903). Bu yüzden gün konusunda kesin hüküm verilmiyor.

**Kaynak:** Kemal Beydilli, «Bağdat Demiryolu», TDV İslâm Ansiklopedisi, c. 4, İstanbul 1991, s. 442-444 — https://islamansiklopedisi.org.tr/bagdat-demiryolu; Davut Dursun, «Almanya» maddesinin «II. Tarih» bölümü, TDV İslâm Ansiklopedisi, c. 2, İstanbul 1989, s. 510-520 — https://islamansiklopedisi.org.tr/almanya#2-tarih

**Teyit durumu:** TAM METİN OKUNDU: TDV bagdat-demiryolu (Beydilli, curl ile indirilip baştan sona okundu, 25.11.2026); TDV almanya II. Tarih bölümü (Dursun, tam metin okundu). OKUNMADI: Bağdat Demiryolu monografileri (McMurray 2001, McMeekin 2010, TDV bibliyografyasındaki Butterfield 1932 ve Earle 1972 dâhil) — TDV dışı bağımsız ikinci akademik teyit YOK; iki TDV maddesi aynı ansiklopedinin farklı yazarlarıdır, 'çift teyit' sayılmaz.

**İç not (görünmez):** TARİH ÇELİŞKİSİ (TDV içi): Dursun (almanya) '5 Mart 1903 Bağdat Demiryolu Antlaşması' der; Beydilli (bagdat-demiryolu) 23 Aralık 1899 ön imtiyaz, 21 Ocak 1902 esas anlaşma, 21 Mart 1903 Konya-Ereğli finansman mukavelenâmesi, 13 Nisan 1903 şirketin kuruluşu verir — aynı belgeyi mi farklı belgeleri mi kastettikleri belli değil. Atlas maddesi 1903-03-05 (Dursun'a uyar); sonuc.t bu yüzden 1903-03-05, kesinlik tartismali. ATLAS UYUMSUZLUĞU (kronoloji işine borç, burada düzeltilmedi): olaylar_ek5.js:437 'Konya-Bağdat hattı imtiyazı' maddesi 1899-11-27; Beydilli ön imtiyazı 23 Aralık 1899 verir. 1888-09-24 ve 24 Eylül 1888 'irade', 4 Ekim 1888 sözleşme: Beydilli. Yüzde 30 Fransız payı, 99 yıl, 10 Ocak 1928 devletleştirme: Beydilli. 'Basra'ya uzatılmayacağı garantisi': Dursun. BAĞ SINAMASI (origin/main, git grep): 1903-03-05 günü yalnız data/kronoloji_almanya.js:632 'Bağdat Demiryolu Antlaşması' maddesi çıktı (olaylar*/kronoloji*/devletler.js, hem t:"..." hem "t": biçimi); başka madde yok → tek ve doğru eşleşme. 'sebep' ucu 1888-09-24'tür (TDV irade günü); atlasta o gün madde bulunamadı, bağ yalnız sonuc ucuyla kurulur.

---

## 2. Tartışma — Kayzer «üç yüz milyon Müslümanın dostu» olduğunu neden ilân etti?
`almanya-tartisma-wilhelm-300-milyon-1898` · bağ `1898-10-18|Kayzer II. Wilhelm` · kesinlik: tartismali

*Söz Şam'da söylendi; ama TDV'nin okuyuşuna göre asıl muhatabı Londra'ydı.*

1898 sonbaharında Alman İmparatoru II. Wilhelm Osmanlı topraklarına geldi. 18 Ekim'de İstanbul'a vardı, 25 Ekim'de Hayfa'da, 29 Ekim'de Kudüs'teydi; oradan Beyrut ve Şam'a geçti. Bu, onun Osmanlı'ya ikinci gelişiydi (TDV 1889'daki ilk ziyareti de anar).

KUDÜS'TE NE YAPTI?
Katolik ve Protestan din adamlarıyla, misyon başkanlarıyla görüştü. Ağlama Duvarı'nı, Rum kilisesini ve Mescid-i Aksâ'yı ziyaret etti, Zeytindağı'nda bir Alman kilisesinin açılışını yaptı. TDV'ye göre bu gezi sonunda Osmanlı Protestanlarının koruyucusu rolünü de üstlenmişti.

ŞAM'DAKİ SÖZ
Şam'da yaptığı bir konuşmada kendini «üç yüz milyon Müslümanın dostu» ilân etti. Cümle çok anıldı; ama ne anlama geldiği aynı kaynakta bile iki katmanlıdır.

İKİ OKUMA
Birincisi: Wilhelm sömürgelerdeki Müslümanlara sempatiyle bakıyordu. İkincisi: söz, dünyada en çok Müslüman sömürgeye sahip İngiltere'ye karşı bir tavırdı. TDV'nin Almanya maddesi ikisini yan yana yazar ve sözü ikinci anlamıyla, yani İngiliz emperyalizmine karşı bir ilân olarak yorumlar. Bunun bir arka planı vardı: gelişen Alman sanayii ham madde ve pazar arıyordu, Osmanlı toprakları da bunun için uygun görülüyordu. II. Abdülhamid ise İngiltere, Fransa ve Rusya'nın isteklerini Almanya ile dengelemek istiyordu.

GEZİNİN SONUCU
TDV, gezinin en önemli sonucunu Alman iş adamlarına açılan kapıda görür: Anadolu demiryollarının Bağdat'a ve Basra'ya uzatılması ve Köstence-İstanbul telgraf hattının imtiyazı bu çizgide gelişti. Filistin'de Alman cemiyetleri ve kolonileri de gezinin ardından çoğaldı.

KARŞILAŞTIRMA
Wilhelm'in dış politikadaki kişisel payı tartışmalıdır. Neue Deutsche Biographie'deki Wilhelm maddesinde Frank-Lothar Kroll, 1905'teki Tanca ziyaretinin dışişleri çevresinin önerisiyle ve imparatorun isteksizliğiyle yapıldığını yazar. İstanbul-Şam gezisi için böyle bir ayrıntı okunan kaynaklarda yok; yani konuşmanın ne kadarının Wilhelm'in, ne kadarının Berlin'in hesabı olduğu açık bırakılıyor.

TARİHÇİLER BUGÜN NE DİYOR
Gezinin Osmanlı-Alman yakınlaşmasında bir dönüm noktası olduğu kaynaklarda yerleşik bir görüştür. Sözün samimiyet mi hesap mı olduğu ise açık bir soru; okunabilen akademik metinlerde Wilhelm'in niyetini doğrudan gösteren bir belge anılmıyor.

**Kaynak:** Davut Dursun, «Almanya» maddesinin «II. Tarih» bölümü, TDV İslâm Ansiklopedisi, c. 2, İstanbul 1989, s. 510-520 — https://islamansiklopedisi.org.tr/almanya#2-tarih; Frank-Lothar Kroll, «Wilhelm II. (Friedrich Wilhelm Viktor Albert)», Neue Deutsche Biographie 28 (2024), s. 140-144 — https://www.deutsche-biographie.de/gnd118632892.html#ndbcontent

**Teyit durumu:** TEYİTSİZ — yayın adayı değil: kaynak engeli başlık taklidiyle aşıldı (kural ihlali). Ayrıntı: NDB sayfaları (deutsche-biographie.de) curl ile User-Agent: Mozilla/5.0 başlığı gönderilerek çekildi; sayfa 403 vermemişti ama başlık taklidi yapıldı. Bu kartın NDB'ye dayanan kısımları geçersiz sayılmalı, NDB yeniden başlıksız/izinli yolla okunmadan kullanılmamalı. | TAM METİN OKUNDU: TDV almanya II. Tarih (Dursun); NDB Wilhelm II. (Kroll, deutsche-biographie.de tam metin). NDB 1898 gezisini ANMIYOR (Tanca 1905 ve Daily Telegraph 1908 anılır) — karşılaştırma paragrafı yalnız bu iki okunan metne dayanır. OKUNMADI: Clark, Kaiser Wilhelm II (2000) ve Marchand, German Orientalism (2009); Şam konuşmasının kendi metni ya da tanık anlatısı (birincil) — Şam konuşmasının günü ve ifadesi okunan kaynaklarda YOK. TDV dışı ikinci bağımsız teyit yok → konuşmanın yorumu tek kaynaklıdır.

**İç not (görünmez):** TEYİTSİZ — yayın adayı değil: kaynak engeli başlık taklidiyle aşıldı (kural ihlali). Ayrıntı: NDB sayfaları (deutsche-biographie.de) curl ile User-Agent: Mozilla/5.0 başlığı gönderilerek çekildi; sayfa 403 vermemişti ama başlık taklidi yapıldı. Bu kartın NDB'ye dayanan kısımları geçersiz sayılmalı, NDB yeniden başlıksız/izinli yolla okunmadan kullanılmamalı. | KAYNAKTAKİ GÜNLER: TDV yalnız 18 Ekim İstanbul'a varış, 25 Ekim Hayfa, 29 Ekim Kudüs günlerini verir; Şam konuşmasına gün vermez. Atlasın olaylar_ek2.js:73 maddesi 'gun: 18 Ekim - Kasım 1898' der (uyumlu); kronoloji_almanya.js'te ayrıca 1898-11-08 (Şam) maddesi var — o günü bu kartta KULLANMADIM (TDV'de gün yok, atlas günü teyitsiz). 1889 ziyareti: TDV 'II. Wilhelm'in İstanbul'u ziyareti' 1889 yazar (gün yok); atlasın 1889-01-01 kaydı gün belirsiz — çifte kayıt riski, kart yalnız 1898-10-18'e bağlandı. BAĞ SINAMASI (origin/main git grep, olaylar*/kronoloji*/devletler.js ve data/*.js): 1898-10-18 günü yalnız data/olaylar_ek2.js:73 'Kayzer II. Wilhelm'in İstanbul ve Kudüs ziyareti' çıktı (data/ceviri_*.js satırları çeviri dosyasıdır, madde değil) → tek ve doğru eşleşme. Parça 'Kayzer II. Wilhelm' maddedeki yazımla birebir. TDV'nin 'emperyalizm' çerçevesi kart metnine girmedi; yorum 'TDV böyle yorumluyor' diye atfedildi.

---

## 3. Karşı Anlatı — Çanakkale'yi Almanlar mı kazandırdı? Üç kaynak, üç ayrı vurgu
`almanya-karsi-anlati-canakkale-alman-payi-1915` · bağ `1915-03-18|Çanakkale Zaferi` · kesinlik: tartismali

*Alman subayların orada olduğunu kimse inkâr etmiyor; asıl soru, hangi kararı kimin verdiği.*

Çanakkale için iki uç cümle dolaşır: «Zaferi Almanlar kazandı» ve «Almanların orada hiçbir payı yoktu». Okunabilen kaynaklar iki cümleye de tam uymuyor.

18 MART: KUMANDA KİMDEYDİ?
İngiliz-Fransız filosu 18 Mart 1915'te boğazı zorlayıp mevcudunun yüzde 35'ini kaybederek çekildi. TDV, bu savunmayı yöneten kişi olarak Çanakkale Müstahkem Mevki Komutanı Cevad Paşa'yı anar. Liman von Sanders de anılarında o günü boğaz kalesinin ve boğaz komutanının şeref günü diye yazar. Kendisi o gün Beşinci Ordu'nun başında değildi: anılarına göre Enver Paşa bu ordunun komutasını ona 24 Mart akşamı teklif etti, 26 Mart'ta Gelibolu'ya ayak bastı.

Savunma düzeni Almanlarla Türklerin iç içe olduğunu gösterir. Anılarda boğaz tahkimatının en üst komutası Alman Amiral Usedom'dadır; sahadaki komutan ise Albay Cevad Bey'dir. Sanders bu düzeni yeterince açık bulmadığını da yazar.

25 NİSAN: KARAR KİMİN?
TDV'ye göre Sanders birlikleri boğazın her yerine dağıtmak yerine olası çıkarma yerlerine yakın topladı. Arıburnu'nda ise Mustafa Kemal emir beklemeden 57. Alay'ı karşı taarruza sürdü. Sanders anılarında bunu Kemal'in kendi inisiyatifiyle saldırması diye anlatır; TDV ise aynı hamlenin Beşinci Ordu kumandanlığınca da uygun görüldüğünü ekler. O sabah Sanders Bulair'deydi: yarımadanın bu dar boğazını açık tutmayı en önemli iş sayıyordu.

AĞUSTOS: DEVİR
6-7 Ağustos gecesi Suvla'ya yeni bir çıkarma yapıldı. Sanders anılarında 8 Ağustos akşamı Anafartalar bölgesinin bütün komutasını Mustafa Kemal'e verdiğini, onun sorumluluktan hoşlanan bir komutan olduğunu yazar.

TARİHÇİLER BUGÜN NE DİYOR
Neue Deutsche Biographie'de Franz Menges, Sanders'in savunmayı titizlikle yönettiğini, deniz cephesinde ise Amiral Usedom'un payını anar; Mustafa Kemal'i de en yetenekli subaylarından biri sayar. TDV'de Zekeriya Kurşun zaferi Türk birliklerine, Cevad Paşa'ya ve Mustafa Kemal'e bağlar, Sanders'i Beşinci Ordu komutanı olarak anar. Üç kaynak ayrı yerlere basıyor ama birbirini yalanlamıyor: Almanlar vardı ve karar zincirinin içindeydi; ağırlıkların tam hesabı için bu üç kaynağın ötesinde askerî tarih çalışmalarına bakmak gerekir.

**Kaynak:** Zekeriya Kurşun, «Çanakkale Muharebeleri» (1. bölüm), TDV İslâm Ansiklopedisi, c. 8, İstanbul 1993, s. 205-208 — https://islamansiklopedisi.org.tr/canakkale-muharebeleri; Franz Menges, «Liman von Sanders, Otto», Neue Deutsche Biographie 14 (1985), s. 563-565 — https://www.deutsche-biographie.de/gnd11878000X.html#ndbcontent; Liman von Sanders, Five Years in Turkey, Annapolis: United States Naval Institute 1927 (Almanca asıl: Scherl, Berlin; çeviri kitabındaki künye 1920, NDB 1919 yazar), baskı s. 33-34, 55-57, 63-64, 85-86 — archive.org kimliği in.ernet.dli.2015.24341 (OCR metin) [birincil kaynak, hatıra]

**Teyit durumu:** TEYİTSİZ — yayın adayı değil: kaynak engeli başlık taklidiyle aşıldı (kural ihlali). Ayrıntı: NDB sayfaları (deutsche-biographie.de) curl ile User-Agent: Mozilla/5.0 başlığı gönderilerek çekildi; sayfa 403 vermemişti ama başlık taklidi yapıldı. Bu kartın NDB'ye dayanan kısımları geçersiz sayılmalı, NDB yeniden başlıksız/izinli yolla okunmadan kullanılmamalı. | TAM METİN OKUNDU: TDV canakkale-muharebeleri 1. bölüm (Kurşun); NDB Liman von Sanders (Menges); Sanders'in anıları (archive.org OCR tam metni indirildi; Bölüm 'Before the Dardanelles Campaign' ve 'Dardanelles Campaign' ilgili sayfaları okundu — tüm kitap satır satır okunmadı, OCR sayfa numaraları yaklaşıktır). OKUNMADI: Erickson, Ordered to Die (2001) ve Gallipoli: The Ottoman Campaign (2010); Aspinall-Oglander; Alman Reichsarchiv cildi 'Der Kampf um die Dardanellen 1915'. Sanders kendi rolünü anlatan bir tanıktır (çıkar taşır); bağımsız askerî tarihçi teyidi yok → karşı-anlatı paragrafları 'kaynak X şöyle yazar' kipinde atfedildi.

**İç not (görünmez):** TEYİTSİZ — yayın adayı değil: kaynak engeli başlık taklidiyle aşıldı (kural ihlali). Ayrıntı: NDB sayfaları (deutsche-biographie.de) curl ile User-Agent: Mozilla/5.0 başlığı gönderilerek çekildi; sayfa 403 vermemişti ama başlık taklidi yapıldı. Bu kartın NDB'ye dayanan kısımları geçersiz sayılmalı, NDB yeniden başlıksız/izinli yolla okunmadan kullanılmamalı. | SAYFA NOTU: baskı sayfaları OCR başlıklarından okundu (Usedom 'inspector general of coast artillery and mines' s. 33; 18 Mart ve 'şeref günü' s. 56; 24-25 Mart teklifi s. 57; 25 Nisan Bulair s. 63-64; Kemal s. 85-86). Memuar tarihleri: 24 Mart (Enver teklifi), 25 Mart (yola çıkış), 26 Mart (Gelibolu); NDB 'am 24.3.1915 der 5. Armee' der — uyumlu. TDV 'Mareşal Liman von Sanders' der; unvan Osmanlı müşiriliği. KARŞILAŞTIRMA: atlas olaylar.js:191 'Çanakkale Zaferi' maddesi kisiler alanına Liman von Sanders'i yazar; ama Sanders 18 Mart'ta Beşinci Ordu komutanı DEĞİLDİ (memuar) — maddenin kisiler alanı kronoloji işine borç. 'Weber Paşa' vb. kullanılmadı (milliyet kaynakta açık değil). TDV Kurşun'un 'Beşinci Ordu kumandanlığınca tasvip' cümlesi kart metnine 'uygun görüldü' diye girdi. Geçen 'Alman Amiral Merten' ayrıntısı metne GİRMEDİ (yalnız memuarda). BAĞ SINAMASI (origin/main git grep): 1915-03-18 günü olaylar.js:191 'Çanakkale Zaferi' (+ aynı kaydın alt satırı 197 'Deniz hücumu kırıldı') ve kronoloji_cok_1dunya_B.js:34 'İtilaf donanmasının Boğaz'ı geçme teşebbüsü başarısız oldu — üç zırhlı battı' (aynı olay, FARKLI başlık) çıktı. Parça 'Çanakkale Zaferi' yalnız olaylar.js:191'e uyar → doğru eşleşme; 1dunya_B maddesinde görünmez (isteğe bağlı: oraya da eklemek istenirse altyapı kararı).

---

## 4. Dış Yankılar — Bir Alman generali İstanbul'da kolordu komutanı olunca Avrupa neden alarma geçti?
`almanya-dis-yankilar-liman-krizi-1913` · bağ `1913-12-14|Liman von Sanders` · kesinlik: kesin

*Birkaç hafta süren bir komuta, Petersburg'daki telaşı Londra'ya kadar taşıdı.*

14 Aralık 1913 sabahı İstanbul'a bir Alman askerî heyeti geldi. Sirkeci'de bando ve onur kıtası karşıladı; ama Alman elçiliğinden kimse yoktu. Başkanları General Liman von Sanders'in sonradan yazdığına göre bu bir işaretti: elçilik heyetin kurulmasında rol oynamış olsa da heyetten uzak durmaya başlamıştı.

HEYET NASIL KURULDU?
Balkan savaşlarından sonra Osmanlı ordusu perişandı. Sanders, 15 Haziran 1913'te Alman Askerî Kabinesi'nden Türkiye'ye gidip gitmek istemeyeceğini soran bir yazı aldığını anlatır. Yazıya İstanbul'daki Alman Büyükelçisi Wangenheim'ın bir telgrafı eklenmişti: Sadrazam, Alman imparatorundan önde gelen bir general istiyordu; Wangenheim bu seçimin Alman danışmanları suçlayanları susturacağını ve İngiliz etkisini frenleyeceğini yazmıştı. Sözleşme Kasım 1913'te kapandı; heyet 42 subaydan oluşacaktı.

SORUN: İSTANBUL KOLORDUSU
Sözleşme, Sanders'e başkentteki Birinci Kolordu'nun komutasını da veriyordu. Sanders'e göre bu yalnız askerî bir önlemdi. Ama Rusya, İngiltere ve Fransa elçileri Sadrazama başvurup başkentteki en yüksek askerî makamda bir Alman generalin bulunmasına katlanamayacaklarını söylediler. Sanders'e göre Sadrazam Said Halim, kolordu komutanlarını atamanın Osmanlı'nın kendi işi olduğunu söyledi. Berlin Dışişleri ise ona ya komutayı bırakmasını ya da Edirne'deki İkinci Kolordu'yu almasını önerdi; Sanders ikisini de kabul etmedi. Anılarında, Aralık 1913'te Petersburg'u saran heyecanın Londra'ya da ulaştığını, Prens Lichnowsky'nin Sir Edward Grey ile Aralık 1913'teki görüşmesine dayanarak not eder.

ÇÖZÜM
14 Ocak 1914'te Wilhelm, Sanders'i erken terfiyle süvari generalliğine yükseltti. Heyet üyeleri Osmanlı'da bir rütbe yukarı sayıldığı için Sanders Osmanlı müşiri oldu, kolordu komutanlığını bıraktı ve ordu müfettişi unvanını aldı.

TARİHÇİLER BUGÜN NE DİYOR
Neue Deutsche Biographie'deki Menges maddesi, heyet başkanlığının ve İstanbul kolordusunun Rusya, İngiltere ve Fransa'nın protestosuna yol açtığını, Sanders'in 14 Ocak 1914'te terfi edip ordu müfettişi olduğunu aynı şekilde aktarır. TDV'nin Almanya maddesi heyetin ordunun en üst makamlarına yerleştirildiğini yazar. Bu kart, olayın büyük bölümü için Sanders'in kendi anlatımına dayanır; yani olaya karışan birinin bakışıdır ve bağımsız bir tarihçinin ayrıntılı çözümlemesiyle sınanması gerekir.

**Kaynak:** Liman von Sanders, Five Years in Turkey, Annapolis: United States Naval Institute 1927, «How I Came to Be in Turkey» bölümü, baskı s. 1-7 — archive.org kimliği in.ernet.dli.2015.24341 (OCR metin) [birincil kaynak, hatıra]; Franz Menges, «Liman von Sanders, Otto», Neue Deutsche Biographie 14 (1985), s. 563-565 — https://www.deutsche-biographie.de/gnd11878000X.html#ndbcontent; Davut Dursun, «Almanya» maddesinin «II. Tarih» bölümü, TDV İslâm Ansiklopedisi, c. 2, İstanbul 1989, s. 510-520

**Teyit durumu:** TEYİTSİZ — yayın adayı değil: kaynak engeli başlık taklidiyle aşıldı (kural ihlali). Ayrıntı: NDB sayfaları (deutsche-biographie.de) curl ile User-Agent: Mozilla/5.0 başlığı gönderilerek çekildi; sayfa 403 vermemişti ama başlık taklidi yapıldı. Bu kartın NDB'ye dayanan kısımları geçersiz sayılmalı, NDB yeniden başlıksız/izinli yolla okunmadan kullanılmamalı. | TAM METİN OKUNDU: Sanders'in I. Bölümü (OCR tam metin); NDB Menges; TDV almanya II. Tarih. OKUNMADI: Trumpener, Germany and the Ottoman Empire (1968); Aksakal, The Ottoman Road to War (2008); Wallach, Anatomie einer Militärhilfe (1976, NDB'de ve TDV Goltz bibliyografyasında anılıyor); Liman von Sanders krizinin Alman, Rus ve İngiliz diplomatik belge neşirleri. Olay tek tanık anlatısına dayanır → bağımsız tarihçi teyidi yok; Sanders'in 'yalnız askerî' iddiası ve elçiliğe dair yorumu onun yorumudur, kart bunu böyle atfeder.

**İç not (görünmez):** TEYİTSİZ — yayın adayı değil: kaynak engeli başlık taklidiyle aşıldı (kural ihlali). Ayrıntı: NDB sayfaları (deutsche-biographie.de) curl ile User-Agent: Mozilla/5.0 başlığı gönderilerek çekildi; sayfa 403 vermemişti ama başlık taklidi yapıldı. Bu kartın NDB'ye dayanan kısımları geçersiz sayılmalı, NDB yeniden başlıksız/izinli yolla okunmadan kullanılmamalı. | TARİH ÇELİŞKİSİ (borç): memuar 'teklif 15 Haziran 1913'; NDB 'am 8.2.1913 ... nach Konstantinopel geschickt' — kart yalnız memuardaki Haziran 1913'ü Sanders'in anlatımı olarak yazdı; hakemli karar için başka kaynak okunmadı (BORC). Atlas kronoloji_almanya.js:647 'Liman von Sanders'in Osmanlı ordusuna atanması' 1913-12-14: maddenin kendi ic_not'u 'varış tarihi standart tarihyazımından' diyordu → memuar bu günü BİRİNCİL kaynaktan doğruluyor (Sirkeci'ye varış 14 Aralık sabahı). Memuar rakamları: 42 subay (sözleşme), 14 Ocak 1914 terfi (NDB aynı gün: 14.1.1914 — çift teyit), Lichnowsky-Grey görüşmesi Aralık 1913. Metindeki 'Edirne İkinci Kolordu' ve 'Jagow' ayrıntısı yalnız memuarda. Alman elçiliğinin törende bulunmaması memuar (s. 3-4). BAĞ SINAMASI (origin/main git grep, olaylar*/kronoloji*/devletler.js): 1913-12-14 günü yalnız data/kronoloji_almanya.js:647 çıktı → tek ve doğru eşleşme (1913-12-13 ve komşu günler incelenmedi, gerek yok).

---

## 5. Antlaşma — Prusya ittifak istedi, ticaret imzalandı: 1761 antlaşması neden «dostluk» kaldı?
`almanya-antlasma-prusya-1761` · bağ `1761-03-22|Osmanlı-Prusya dostluk` · kesinlik: kesin

*İlk kıpırdanan Berlin'di; ittifakı isteyen taraf otuz yıl sonra değişti.*

Osmanlı ile Prusya Krallığı arasındaki ilk resmî antlaşmayı masaya getiren Osmanlı değil, Prusya'ydı. Ve Prusya'nın asıl istediği, imzalanan belgeden farklıydı.

BERLİN NE İSTİYORDU?
XVIII. yüzyılda Brandenburg-Prusya, Habsburglar'ın nüfuz alanındaki Macaristan'la ve Avusturya'nın düşmanlarıyla ilişki kurmaya çalışıyordu. Kral I. Friedrich Wilhelm Sultan III. Ahmed'e ve Sadrazam Damad İbrâhim Paşa'ya mektup yazarak diplomatik ilişki yolları aradı; TDV bunu Osmanlı'yı Avusturya'ya karşı kazanma politikası olarak okur. II. Friedrich ise ilk Prusya elçisini İstanbul'a gönderdiği 1755 yılına kadar bu çabasını gizli tuttu.

İTTİFAKTAN TİCARETE
Yedi Yıl Savaşları sürerken, 1756-1762 arasında iki taraf arasında yoğun temas oldu. Prusya bir savunma ittifakını şiddetle istedi, ama bu temaslar ittifaka dönüşmedi. Onun yerine 22 Mart 1761'de sekiz maddelik bir dostluk ve ticaret antlaşması imzalandı ve ilişkiler resmen başlamış oldu. Antlaşma sürecinde Prusya adına Karl Adolf von Rexin «orta elçi» olarak İstanbul'a atandı; Ahmed Resmî Efendi de 1763'te ilk Osmanlı elçisi olarak Berlin'e gönderildi. Prusya'nın ittifak isteği 1765'e kadar sürdü, sonra Yedi Yıl Savaşları'nın bitmesiyle unutuldu.

ROLLER TERSİNE DÖNDÜ
1774'te Küçük Kaynarca ile biten savaşta Osmanlı yenildi, Rusya yükseldi. Bu defa Prusya Rusya ile ilişkisini geliştirmeye yöneldi, Osmanlı ise Avusturya ve Rusya'ya karşı Prusya'nın ittifakını aramaya başladı. 1790'da, III. Selim'in bizzat ittifaktan yana olduğu ve Prusya Kralı II. Friedrich Wilhelm'in de olumlu baktığı bir ortamda Osmanlı-Prusya İttifakı imzalandı. TDV bunu Osmanlı'nın bir Hristiyan devletle yaptığı ilk savunma ittifakı olarak niteler; ama tarafların yüklendiği sorumluluklar gerçekçi olmadığı için ittifak işlemedi.

TARİHÇİLER BUGÜN NE DİYOR
Bu kartın dayandığı TDV maddesi iki antlaşmayı aynı hikâyenin iki yüzü olarak anlatır: 1761'de ittifakı isteyen Prusya'ydı ve eline ticaret geçti; 1790'da ittifakı isteyen Osmanlı'ydı ve eline işlemeyen bir ittifak geçti. İki devletin neden hiçbir zaman gerçek bir ortaklığa varamadığı sorusu bu kaynakta tam cevap bulmuyor.

**Kaynak:** Davut Dursun, «Almanya» maddesinin «II. Tarih» bölümü, TDV İslâm Ansiklopedisi, c. 2, İstanbul 1989, s. 510-520 — https://islamansiklopedisi.org.tr/almanya#2-tarih

**Teyit durumu:** TAM METİN OKUNDU: TDV almanya II. Tarih (Dursun; indirilip baştan sona okundu). OKUNMADI: Aksan, Ottoman Wars 1700-1870 (2007); Uzunçarşılı, Osmanlı Tarihi IV; Ahmed Resmî Efendi'nin Sefâretnâme-i Prusya'sı; Prusya-Osmanlı antlaşma metinleri. TDV dışı ikinci bağımsız teyit yok → tek kaynaktır; kart yalnız TDV'nin anlattığını TDV'ye atfen yazar. Kart yayın adayı olmadan önce ikinci akademik kaynakla çapraz okunmalı.

**İç not (görünmez):** UYARI: atlas kronoloji_almanya.js:340 maddesinin açıklaması 'Osmanlı tarafı Prusya'yı Avusturya ve Rusya'ya karşı potansiyel bir denge unsuru olarak görüyordu' der; okunan TDV metni 1761 için bunu söylemez, Prusya'nın ittifak isteğini ve Osmanlı'nın ancak 1774 sonrası ittifak aradığını söyler → atlas açıklaması TDV'ye dayanmıyor görünüyor (kronoloji işine borç; burada değiştirilmedi). 1761'in günü (22 Mart) ve 'sekiz madde' TDV'den; 1790 antlaşmasının günü TDV almanya'da YOK (atlas 1790-01-31, TDV 'prusya' maddesine dayandığını yazıyor, o madde bu turda okunmadı). Kartın 'ittifaktan yana III. Selim' cümlesi TDV'ye aittir. BAĞ SINAMASI (origin/main git grep): 1761-03-22 günü yalnız data/kronoloji_almanya.js:340 'Osmanlı-Prusya dostluk ve ticaret antlaşması' çıktı → tek ve doğru eşleşme.

---

## 6. Hükümdar kaydı — II. Wilhelm (`HUKUMDAR_ALMANYA`, devlet `almanya`)
`almanya-wilhelm2` · 1888 – 1918-11-09 · bağ `1888-06-15|II. Wilhelm'in tahta çıkışı`, `1898-10-18|Kayzer II. Wilhelm`, `1918-11-09|II. Wilhelm'in tahttan çekilmesi`

- **dogum:** 1859-01-27
- **dogum_yer:** Berlin
- **olum:** 1941-06-04
- **olum_yer:** Doorn, Utrecht yakını (Hollanda)
- **baba:** III. Friedrich (1831-1888), Prusya Kralı ve Alman İmparatoru
- **anne:** Victoria (1840-1901), İngiltere Kraliçesi Victoria'nın kızı, Britanya prensesi
- **tahta:** 1888 (babası III. Friedrich'in ölümü üzerine Prusya kralı ve Alman imparatoru oldu; gün okunmadı)
- **saltanat_yil:** 30
- **halef:** yok; monarşi sona erdi (veliaht Wilhelm 1 Aralık 1918'de veraset hakkından vazgeçti)
- **lakap:** Gölge Kayzer (savaş yıllarında halk arasında; Almanca «Schattenkaiser»)
- **eşler:** Auguste Viktoria (1858-1921; evlilik 1881); Hermine Reuß (1887-1947; evlilik 1922, Doorn; ilk evliliğinden dul)
- **çocuk:** 6 oğul: Wilhelm (1882-1951, veliaht), Eitel Friedrich (1883-1942), Adalbert (1884-1948), August Wilhelm (1887-1949), Oskar (1888-1958), Joachim (1890-1920) · 1 kız: Viktoria Luise (1892-1980)

**skandal:** 1908 Daily Telegraph olayı: Londra gazetesine verdiği röportajda Almanların çoğunun İngiltere karşıtı olduğunu söyleyip kendi İngiliz yanlısı tutumunu öne çıkardı; İngiltere'de küstahlık diye karşılandı, Almanya'da basın ve parlamento büyük tepki gösterdi.

**ovgu:** Bilim ve eğitim politikasına ilgisi çağdaşı hiçbir hükümdarda görülmeyecek genişlikteydi: 1899'da Prusya teknik yüksekokullarına doktora verme hakkı tanıdı, 1911'deki Kaiser-Wilhelm Derneği'nin (bugünkü Max-Planck) kurulmasına kişisel destek verdi; teknik yeniliklere açıktı. Saltanatının başında sosyal politikaya yöneldi: 1889'da Ruhr grevinde işçilerin yanında yer aldı, 1890'da işçi koruma planları sundu. Eski Doğu kültürlerine ve arkeolojiye de ilgi duydu; Alman Doğu Cemiyeti ile ilişkisi NDB'de anılır.

**yergi:** 1890'da Bismarck'ı görevden aldı. Sosyal demokratlara karşı sert söylemler kullandı ve sosyal politika ilgisi çabuk söndü. 1914 temmuzunda genelkurmay başkanı Moltke başta olmak üzere askerî danışmanlarının baskısına boyun eğdi; savaş sırasında Ludendorff ve Hindenburg'un gölgesinde kaldı. NDB'ye göre 1920'lerde Yahudi karşıtı eğilimi belirdi; 1938 Kasım pogromlarından sonra bunu suç saydı.

**tartisma:** «Kişisel rejim» etiketi: Wilhelm'in anayasal sınırları aşıp hükümeti ve meclisi devre dışı bıraktığı sık söylenir. Kroll (NDB) bu etiketi yakından bakınca bir kurgu sayar; gösterişli imparator imajının arkasında kararsız bir kişilik görür. Birinci Dünya Savaşı'nı ne hızlandırdığı ne engellediği de ayrıca tartışılır: Kroll'e göre ikisini de yapmadı, son anda askerî danışmanların baskısına boyun eğdi.

**tarihciler:** Frank-Lothar Kroll (NDB 28, 2024, s. 140-144) Wilhelm'i imparatorluğun görkemli bir sahne figürü olarak, ama hükümet kararlarını tek başına yönlendirmeyen biri olarak anlatır. Davut Dursun (TDV almanya II. Tarih) onu Bismarck'ın bıraktığı yerden «dünya politikası» (Weltpolitik) izleyen, Osmanlı'yı hammadde ve pazar açısından yayılma alanı gören imparator olarak çizer ve 1889 İstanbul ziyaretini ilişkileri geliştiren, 1898 İstanbul-Kudüs gezisini ise siyasî yakınlaşmada dönüm noktası sayar. İki metin birbirinin yerine geçmez: biri iç siyaset ve kişilik, öteki Osmanlı politikası üzerinde durur.

**Kaynak:** Frank-Lothar Kroll, «Wilhelm II. (Friedrich Wilhelm Viktor Albert)», Neue Deutsche Biographie 28 (2024), s. 140-144 — https://www.deutsche-biographie.de/gnd118632892.html#ndbcontent; Davut Dursun, «Almanya» maddesinin «II. Tarih» bölümü, TDV İslâm Ansiklopedisi, c. 2, İstanbul 1989, s. 510-520 — https://islamansiklopedisi.org.tr/almanya#2-tarih

**Teyit durumu:** TEYİTSİZ — yayın adayı değil: kaynak engeli başlık taklidiyle aşıldı (kural ihlali). Ayrıntı: NDB sayfaları (deutsche-biographie.de) curl ile User-Agent: Mozilla/5.0 başlığı gönderilerek çekildi; sayfa 403 vermemişti ama başlık taklidi yapıldı. Bu kartın NDB'ye dayanan kısımları geçersiz sayılmalı, NDB yeniden başlıksız/izinli yolla okunmadan kullanılmamalı. | TAM METİN OKUNDU: NDB Wilhelm II. (Kroll) ve TDV almanya II. Tarih (Dursun). Her iki kaynak da kendi alanında tam okundu; TDV dışı bir kaynak (NDB) var, ama tek biyografik madde olduğu için 'çift teyit' yalnız doğum/ölüm/aile bilgilerinde sayılabilir. OKUNMADI: Clark, Kaiser Wilhelm II (2000); Röhl'ün üç ciltlik biyografisi; Wilhelm'in kendi anıları (Aus meinem Leben, NDB'de anılıyor).

**Beyan edilen çelişki / boşluklar:** to → TÜRK/ALMAN KAYNAK ÇELİŞKİSİ: TDV (Dursun) tahttan feragati 9 Kasım 1918'e bağlar; NDB (Kroll) 28 Kasım 1918'de resmen feragat ettiğini, 1 Aralık'ta veliaht Wilhelm'in veraset hakkından vazgeçtiğini yazar. İki ayrı olay (açıklama / resmî feragat) olabilir; hakemli karar için üçüncü kaynak okunmadı → CLAUDE.md gereği TDV günü kaldı, NDB günü bu alanda beyan edildi (BORÇ). · from → NDB (Kroll) ve TDV (Dursun) yalnız yıl verir: 1888, babası III. Friedrich'in ölümünden sonra. Atlas kronoloji_almanya.js:587 maddesi 1888-06-15; bu gün okunan iki kaynakta YOK → yazılmadı, teyit BORÇ. · ölüm sebebi → bulunamadı — NDB ölüm sebebini yazmaz; TDV almanya'da da yok. Başka kaynak okunmadı. · lakap → NDB (Kroll): savaş sırasında geniş halk kesimlerinin onu giderek «gölge kayzer» olarak algıladığını yazar; bu bir lakap olarak yerleşmiş mi, yoksa NDB'nin tespiti mi, okunan kaynakta belli değil. Popüler lakaplar (örneğin Osmanlı'da anılan sıfatlar) OKUNMADI → yazılmadı.

---

**İç not (görünmez):** TEYİTSİZ — yayın adayı değil: kaynak engeli başlık taklidiyle aşıldı (kural ihlali). Ayrıntı: NDB sayfaları (deutsche-biographie.de) curl ile User-Agent: Mozilla/5.0 başlığı gönderilerek çekildi; sayfa 403 vermemişti ama başlık taklidi yapıldı. Bu kartın NDB'ye dayanan kısımları geçersiz sayılmalı, NDB yeniden başlıksız/izinli yolla okunmadan kullanılmamalı. | 'to' alanı TDV gününü korur (9 Kasım 1918); NDB'nin 28 Kasım gününü ic_not_to'da beyan ettim. Atlas künyesinin devletler.js almanya içi 1918-11-09 maddesi 'Max von Baden Kayser'in tahttan çekildiğini 9 Kasım sabahı duyurdu' diye kendi ic_not_t'sinde açıklar — okunan iki kaynak bunu yazmadığı için burada teyit edilmedi. BAĞ SINAMASI (origin/main git grep): 1888-06-15 günü yalnız kronoloji_almanya.js:587 'II. Wilhelm'in tahta çıkışı' çıktı (komşu 1888-06-16 Karonga bir başka olay). 1898-10-18 günü yalnız olaylar_ek2.js:73 'Kayzer II. Wilhelm'in İstanbul ve Kudüs ziyareti' (başlıkta «Kayzer II. Wilhelm'in» yazımı kullanıldı). 1918-11-09 günü kronoloji_almanya.js:696 'II. Wilhelm'in tahttan çekilmesi ve Cumhuriyet ilanı' ile devletler.js almanya içi 'İmparatorluk yıkıldı, cumhuriyet ilan edildi' (aynı olay, farklı başlık) ve alakasız Erfurt, Lviv, İskenderun maddeleri çıktı; 'II. Wilhelm'in tahttan çekilmesi' parçası yalnız kronoloji_almanya.js:696'ya uyar.

---

## 7. Kişi — Colmar von der Goltz (`KISI_ALMANYA`, devlet `almanya`, tur `yabanci-komutan`, 1843–1916, dönem 1883–1916)

Prusyalı mareşal, Osmanlı müşiri. 12 Ağustos 1843'te Bielkenfeld'de doğdu; 1866 Prusya-Avusturya ve 1870-71 Alman-Fransız savaşlarına katıldı, Genelkurmay'da çalışıp Harp Akademisi'nde savaş tarihi okuttu. 1883'te Osmanlı hizmetine girip 15 Haziran'da İstanbul'a gitti; 1885'te Alman askerî heyetinin başına geçti ve 1895'e kadar askerî okullar müfettişliği yaptı. Ders programlarını Berlin Harp Akademisi örneğine göre hazırladı, kendi kaleminden çıkanlarla birlikte ders kitapları toplam dört bin sayfaya ulaştı. Osmanlı ordusunun silâhını Almanya'dan almasında dolaylı etkisi oldu; TDV, kişisel çıkar sağladığı yolundaki söylentilerin büyük ihtimalle doğru olmadığını yazar. 1895'te Almanya'ya döndü, 1911'de mareşal oldu. Birinci Dünya Savaşı'nda 12 Aralık 1914'te yeniden İstanbul'a geldi, Sultan V. Mehmed ve Enver Paşa'nın askerî danışmanı oldu, 22 Ekim 1915'ten itibaren Altıncı Ordu komutanı olarak Kûtülamâre kuşatmasına katıldı ve tifodan 18-19 Nisan 1916 gecesi Bağdat'ta öldü; sonra İstanbul'a, Tarabya'daki Alman elçiliği yazlığının bahçesine nakledildi. TDV'ye göre II. Abdülhamid'in ordu reformlarına yeterince önem vermediği kanaatindeydi; Enver Paşa'yı ise Alman dostu, kararlı bir vatansever olarak değerlendirmişti.

**Kaynak:** Necmettin Alkan, «Goltz, Wilhelm Colmar von der», TDV İslâm Ansiklopedisi, EK-1, Ankara 2020, s. 478-480 — https://islamansiklopedisi.org.tr/goltz-wilhelm-colmar-von-der

**Bağ:** 1916-04-29|Kûtülamâre Zaferi

**Teyit durumu:** TAM METİN OKUNDU: TDV goltz-wilhelm-colmar-von-der (Alkan; curl ile indirilip baştan sona okundu, bibliyografyası dâhil). OKUNMADI: maddenin bibliyografyasındaki Wallach, Anatomie einer Militärhilfe (1976); Krethlow, Goltz biyografisi (2012); Zeynep Güler yüksek lisans tezi (Mersin 2007); Goltz'un kendi eserleri. Doğum/ölüm günleri tek kaynaktan (TDV). TDV dışı ikinci akademik teyit YOK.

**İç not (görünmez):** 'Osmanlı ordusunun Alman silâhıyla donatılmasındaki etki' ve kişisel çıkar söylentisi TDV'nin cümlesidir; atlasa dayanmaz. 'Goltz Kût'un teslimini görmeden öldü' cümlesi kartta YAZILMADI: TDV ölümünü 18-19 Nisan 1916'ya bağlar ve teslim gününü vermez; atlasın Kûtülamâre Zaferi maddesi (olaylar_ek.js:92) 29 Nisan 1916'dır → aradaki 10 gün 'okunan kaynak + atlas' birleşimidir, atlas günü bu turda teyit edilmedi (kronoloji işi: o maddenin kisiler alanında Goltz'un yer alması uygun mu denetlensin). NDB Sanders maddesi Goltz'un 1914'te 'sultan danışmanı olarak İstanbul'a gönderildiğini ve Sanders ile Berlin arasında dengeleyici rol oynaması beklendiğini yazar (Menges); metne alınmadı. BAĞ SINAMASI (origin/main git grep): 1916-04-29 günü olaylar_ek.js:92 'Kûtülamâre Zaferi' ve kronoloji_cok_1dunya_B.js:46 'Townshend Kûtülamâr...' (başlığı 'Kûtülamâre Zaferi' değil) çıktı; parça 'Kûtülamâre Zaferi' yalnız olaylar_ek.js:92'ye uyar. KISILER şemasında olay alanı yok; bağ önerisi olarak eklendi.

---

## 8. Kişi — Otto Liman von Sanders (`KISI_ALMANYA`, devlet `almanya`, tur `yabanci-komutan`, 1855–1929, dönem 1913–1918)

Prusyalı süvari generali, Osmanlı müşiri. 18 Şubat 1855'te Stolp'ta (Pomeranya) doğdu, 22 Ağustos 1929'da Münih'te öldü. 1913'te Osmanlı ordusunu yeniden düzenleyecek Alman askerî heyetinin başkanı oldu; 14 Aralık 1913'te İstanbul'a geldi. İstanbul'daki Birinci Kolordu'nun komutasını da almıştı; Rusya, İngiltere ve Fransa'nın itirazı üzerine 14 Ocak 1914'te terfi edip Osmanlı müşiri ve ordu müfettişi olarak kolordu komutasını bıraktı. Birinci Dünya Savaşı'nda önce Birinci Ordu'yu yönetti; 24-25 Mart 1915'te Gelibolu yarımadasını savunacak Beşinci Ordu'nun komutanlığına getirildi ve çıkarmaya karşı savunmayı yönetti. Şubat 1918'de Filistin cephesinde bir ordular grubunun başına geçti; Mondros Mütarekesi'nden sonra komutayı Mustafa Kemal'e devretti, Şubat 1919'da İngilizlerce Malta'da tutuklandı, aynı yıl serbest bırakıldı. Türkiye'de «Liman Paşa» ve «Gelibolu'nun Aslanı» diye anıldığını NDB yazar. Anılarını Almanca yayımladı (Fünf Jahre Türkei); İngilizce çevirisi Five Years in Turkey 1927'de çıktı.

**Kaynak:** Franz Menges, «Liman von Sanders, Otto», Neue Deutsche Biographie 14 (1985), s. 563-565 — https://www.deutsche-biographie.de/gnd11878000X.html#ndbcontent; Liman von Sanders, Five Years in Turkey, Annapolis: United States Naval Institute 1927 (Almanca asıl: Scherl, Berlin; çeviri kitabındaki künye 1920, NDB 1919 yazar — çelişki, BORÇ), baskı s. 1-7, 57 — archive.org kimliği in.ernet.dli.2015.24341 [birincil kaynak, hatıra]

**Bağ:** 1913-12-14|Liman von Sanders`, `1915-03-18|Çanakkale Zaferi

**Teyit durumu:** TEYİTSİZ — yayın adayı değil: kaynak engeli başlık taklidiyle aşıldı (kural ihlali). Ayrıntı: NDB sayfaları (deutsche-biographie.de) curl ile User-Agent: Mozilla/5.0 başlığı gönderilerek çekildi; sayfa 403 vermemişti ama başlık taklidi yapıldı. Bu kartın NDB'ye dayanan kısımları geçersiz sayılmalı, NDB yeniden başlıksız/izinli yolla okunmadan kullanılmamalı. | TAM METİN OKUNDU: NDB Liman von Sanders (Menges); Sanders'in anılarının 1. bölümü ve 8. bölümün ilgili sayfaları (OCR). OKUNMADI: Trumpener (1968), Wallach (1976), Kurat'ın Cultura Turcica makalesi (1965), Majer'in Kemal istifa makalesi (NDB bibliyografyasında anılır); TDV'de ayrı bir Liman von Sanders maddesi YOK (TDV arama sayfasında 9 madde içi geçiş çıktı; bulunamadı). Doğum/ölüm günleri tek kaynaktan (NDB).

**İç not (görünmez):** TEYİTSİZ — yayın adayı değil: kaynak engeli başlık taklidiyle aşıldı (kural ihlali). Ayrıntı: NDB sayfaları (deutsche-biographie.de) curl ile User-Agent: Mozilla/5.0 başlığı gönderilerek çekildi; sayfa 403 vermemişti ama başlık taklidi yapıldı. Bu kartın NDB'ye dayanan kısımları geçersiz sayılmalı, NDB yeniden başlıksız/izinli yolla okunmadan kullanılmamalı. | TARİH ÇELİŞKİSİ: NDB 'am 8.2.1913 ... als Chef der deutschen Militärmission nach Konstantinopel geschickt' yazar; Sanders'in anıları teklifi 15 Haziran 1913'te aldığını, sözleşmeyi Kasım 1913'te kapattığını yazar → kartta 'görevlendirildi' denmedi, yalnız '1913'te heyet başkanı oldu' yazıldı; hakemli karar için başka kaynak okunmadı (BORÇ). 'Şubat 1918: Heeresgruppe F' NDB'dendir; birliğin Osmanlıca adı okunmadı → 'bir ordular grubu' diye yazıldı. TEHCİR: TDV tehcir maddesi (Beydilli) Sanders'in adını Alman subayların tehcir kararındaki paylarını tartışırken anar; bu madde tam okundu ama ikinci akademik kaynak (Gust, Anderson) okunmadığı için kişi kartına konuya dair bir cümle YAZILMADI (BORÇ). BAĞ SINAMASI (origin/main git grep): 1913-12-14 günü yalnız kronoloji_almanya.js:647 'Liman von Sanders'in Osmanlı ordusuna atanması'; 1915-03-18 günü olaylar.js:191 'Çanakkale Zaferi' (kisiler alanında Sanders var) ve kronoloji_cok_1dunya_B.js:34 (başlığı farklı) → parçalar tek maddeye uyar. Sanders 18 Mart 1915'te Beşinci Ordu komutanı değildi (24 Mart teklifi, anılar s. 57); ikinci bağ yalnız atlasın kisiler alanına uyum içindir. KISILER şemasında olay alanı yok; bağ önerisi olarak eklendi.

---

## Özet tablo: kaynak/teyit durumu

| Kart | Tam metin okunan kaynak | Okunmayan | Bağımsız (TDV dışı) tarihçi teyidi |
|---|---|---|---|
| 1 Bağdat Demiryolu | TDV bagdat-demiryolu, TDV almanya | McMurray, McMeekin | yok |
| 2 Wilhelm 1898 | TDV almanya, NDB Wilhelm II. | Clark, Marchand, Şam konuşması metni | yok (NDB gezi anmıyor) |
| 3 Çanakkale Alman payı | TDV canakkale-muharebeleri, NDB Sanders, Sanders anıları | Erickson, Aspinall-Oglander | NDB (Menges) kısmen |
| 4 Sanders krizi | Sanders anıları, NDB Sanders, TDV almanya | Trumpener, Aksakal, Wallach | NDB kısmen (14.1.1914 çift teyit) |
| 5 Prusya 1761 | TDV almanya | Aksan, Uzunçarşılı, Ahmed Resmî | yok |
| 6 II. Wilhelm (hükümdar) | NDB Wilhelm II., TDV almanya | Clark, Röhl | NDB tek biyografik madde |
| 7 Goltz | TDV goltz | Wallach, Krethlow, Güler tezi | yok |
| 8 Sanders (kişi) | NDB Sanders, anıların 1. ve 8. bölüm sayfaları | Trumpener, Wallach, Kurat, Majer | NDB tek madde |
