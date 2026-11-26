# -*- coding: utf-8 -*-
"""KRONO-AMERIKA-K-0929 — üretici. Tek kaynak bu dosyadır; iki veri dosyası ondan üretilir.

    py denetim/ARAC-KRONO-AMERIKA-K-0929-URET.py          kuru koşu: doğrular, sayar, YAZMAZ
    py denetim/ARAC-KRONO-AMERIKA-K-0929-URET.py --yaz    data/kronoloji_cok_kuzey_amerika.js
                                                          data/kronoloji_cok_orta_amerika.js yazar

Şema: oturumlar/KRONO-DUNYA-0929-ORTAK.md §2 (on zorunlu alan) + `devlet`/`devletler`
(çok künyeli yol, app.js cokTarafliKronolojiEkle). `yer_id` YALNIZ olayın gerçekten
geçtiği, atlasta var olan yerleşim adıdır; emin değilsek "" bırakılır.
Künye id'leri devletler.js'ten OKUNDU (678 künye); künyesi olmayanlar `_ONERI`
sözlüğündedir ve denetim/KRONO-AMERIKA-K-0929-KUNYE.md'de gerekçelidir.
"""
import io
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# ---- künyesi OLMAYAN, önerilen id'ler (M-5416 ③: madde yazılır, künyeyi koordinatör açar)
_ONERI = {
    "yeni-ispanya-ilk-donem": "Yeni İspanya — fetih dönemi / Audiencia (1521-1535)",
    "orta-amerika-federasyonu": "Orta Amerika Birleşik Eyaletleri (1823-1841)",
}

# ---- kaynak kısaltmaları (URL = tarih doğrulamasının yapıldığı sayfa)
W = "Weber, David J., The Spanish Frontier in North America (Yale University Press, 1992)"
BANNON = "Bannon, John Francis, The Spanish Borderlands Frontier, 1513-1821 (1970)"
GERHARD = "Gerhard, Peter, A Guide to the Historical Geography of New Spain (rev. ed., University of Oklahoma Press, 1993)"
LOVELL = "Lovell, W. George & Lutz, Christopher H., Conquest and Survival in Colonial Guatemala (McGill-Queen's University Press, 1992)"
IKINCIL = " · gün: ikincil web taramasında tutarlı, birincil belge sayfası açılmadı"


def K(t, b, tur, onem, dunya, devletler, d, kaynak, yer="", etiket=(), gun=None, ic=None,
      kapsam="ic", dosya="k", odak=()):
    m = {"t": t, "devlet": devletler[0], "devletler": list(devletler), "b": b, "tur": tur,
         "onem": onem, "dunya": dunya, "kapsam": kapsam, "yer_id": yer,
         "etiket": [tur] + list(etiket), "d": d, "kaynak": kaynak}
    if odak:
        # `odak_yer` = "kamera buraya bakacak" (KUTU); olayın BURADA geçtiğini söylemez (`yer_id` onu söyler).
        # Antlaşma/bildirge gibi tek noktası olmayan maddelerde odaksızlığı (kamera durur) önlemek için.
        m["odak_yer"] = list(odak)
    if gun:
        m["gun"] = gun
    if ic:
        m["ic_not_d"] = ic
    m["_dosya"] = dosya
    return m


ITEMS = []
A = ITEMS.append

# =========================================================== KUZEY AMERİKA (ABD · Kanada · İspanyol Güneybatı)
A(K("1610-01-01", "Santa Fe kuruldu — Yeni Meksika'nın yeni başkenti", "kurulus", 3, 2, ["yeni-ispanya"],
    "Vali Pedro de Peralta, İspanyol Yeni Meksika eyaletinin merkezini 1609-10 arasında bugünkü Santa Fe'ye taşıdı ve şehri "
    "ızgara planlı bir ana meydan çevresinde kurdu (La Villa Real de la Santa Fe de San Francisco de Asís). Şehir 1680 Pueblo "
    "İsyanı'nda terk edilene ve 1692'de geri alınana kadar İspanyol yönetiminin Rio Grande vadisindeki dayanağı oldu; bugün "
    "ABD'nin en eski eyalet başkentidir.",
    "Britannica, «Santa Fe» — britannica.com/place/Santa-Fe-New-Mexico · " + W,
    yer="Santa Fe", etiket=["konu-idari", "yeni-meksika"],
    gun="1610 (kaynaklar kuruluş gününü vermez; tören yılı 1610 sayılır)"))

A(K("1692-09-14", "Diego de Vargas Santa Fe'yi geri aldı — İspanyol yönetimi Yeni Meksika'ya döndü", "toprak-kazanc", 4, 2,
    ["yeni-ispanya", "pueblo-bagimsizligi"],
    "1680 Pueblo İsyanı'yla sürülen İspanyollar, Vali Diego de Vargas komutasında 13 Eylül 1692'de Santa Fe önüne geldi; 14 Eylül'de "
    "toplanan yaklaşık bin Pueblo'lu ilk aşamada çatışma çıkmadan krala yeniden bağlılık yemini etti ve resmî mülk edinme belgesi "
    "düzenlendi. Bu 'kansız' geri dönüş sonradan 1693-96 arasında uzun bir savaşa ve müzakereye dönüştü.",
    "Santa Fe Şehri, «History of Diego de Vargas» — santafenm.gov/History-of-Diego-de-Vargas.pdf · " + W,
    yer="Santa Fe", etiket=["konu-askeri", "pueblo-isyani", "yeniden-fetih"],
    ic="Künye pueblo-bagimsizligi'nin bitiş günü 1692-08-01 bir ölçüm işaretidir; olayın günü 13-14 Eylül 1692'dir "
       "(atlas penceresi ~44 gün erken kapanıyor)."))

A(K("1706-04-23", "Albuquerque kuruldu — Rio Grande vadisinde yeni İspanyol villa'sı", "kurulus", 2, 1, ["yeni-ispanya"],
    "Yeni Meksika valisi Francisco Cuervo y Valdés, 23 Nisan 1706 tarihli raporunda Rio del Norte vadisinde bir villa kurduğunu ve "
    "koruyucu aziz olarak San Francisco Xavier'i seçtiğini yazdı. Yerleşim, Yeni İspanya genel valisi Albuquerque Dükü'nün adını aldı; "
    "1709 tarihli bir kraliyet kararıyla adı, Kral V. Felipe'nin koruyucu azizine atfen San Felipe de Alburquerque'ye çevrildi.",
    "«The Founding of Albuquerque, 1706: An Historical-Legal Analysis», New Mexico Historical Review — digitalrepository.unm.edu "
    "(Cuervo y Valdés'in 23 Nisan 1706 raporuna dayanır) · " + W,
    yer="Albuquerque", etiket=["konu-idari", "yeni-meksika"]))

A(K("1764-02-14", "St. Louis kuruldu — Missouri-Mississippi kavşağında kürk ticareti üssü", "kurulus", 2, 2, ["yeni-ispanya"],
    "Pierre Laclède'in ticaret şirketi adına Auguste Chouteau 14 Şubat 1764'te bir grupla ırmak kıyısına çıktı ve ertesi gün ağaç "
    "kesimini başlattı (bazı anlatılar kuruluşu 15 Şubat sayar). Louisiana, 1762 Fontainebleau Antlaşması'yla gizlice İspanya'ya "
    "bırakılmıştı; bölgede İspanyol yönetimi ancak 1770'te fiilen kuruldu.",
    "St. Louis Post-Dispatch/STLtoday, «St. Louis founded in a winter wilderness on Feb. 14, 1764. Or maybe it was the next day» · "
    "St. Louis Kenti, «City of St. Louis turns 260 years old» (stlouis-mo.gov) · " + W,
    yer="St. Louis", etiket=["konu-idari", "louisiana", "kurk-ticareti"],
    ic="Atlas sahipliği Yeni İspanya'ya bağlar (1762 gizli devri); kuruluşu Fransız tüccarlar yaptı ve bölge 1770'e kadar fiilen "
       "Fransız yönetimindeydi."))

A(K("1769-07-16", "San Diego de Alcalá Misyonu kuruldu — Yukarı Kaliforniya'nın ilk misyonu", "kurulus", 3, 2, ["yeni-ispanya"],
    "Fransisken rahip Junípero Serra, 16 Temmuz 1769'da bugünkü Presidio Tepesi'nde fırça ve otla örtülü bir barınakla Alta "
    "California kıyısındaki yirmi bir misyonluk zincirin ilkini açtı. Misyon 1774'te ırmağın yukarısındaki bugünkü yerine taşındı.",
    "California Missions Foundation, «Mission San Diego de Alcalá» — californiamissionsfoundation.org · " + W,
    yer="San Diego (Misyon San Diego de Alcalá)", etiket=["konu-idari", "alta-california", "misyon"]))

A(K("1770-06-03", "Monterey Presidio'su ve San Carlos Borromeo Misyonu kuruldu", "kurulus", 3, 2, ["yeni-ispanya"],
    "Serra ve Gaspar de Portolá, 3 Haziran 1770'te Monterey Körfezi'nde bir presidio ile misyon kurdu. Misyon 1771'de Carmel "
    "Vadisi'ne taşındı; Monterey ise sonradan Alta California'nın başkenti oldu.",
    "Monterey County Historical Society, «The Founding of Monterey» — mchsmuseum.com/local-history/spanish-colonization/"
    "the-founding-of-monterey · " + W,
    yer="Monterey (Alta California)", etiket=["konu-idari", "alta-california", "presidio"]))

A(K("1775-08-20", "San Agustín del Tucson Presidio'su kuruldu", "kurulus", 2, 1, ["yeni-ispanya"],
    "Yarbay Hugo O'Conor, 20 Ağustos 1775'te Santa Cruz Irmağı vadisinde Apaçi baskınlarına karşı bir presidio yerini belirledi; "
    "inşaatın asıl kısmı ekimde başladı. Tucson, Sonora hattının kuzeydeki en ileri İspanyol askerî noktalarından biri oldu.",
    "Sharlot Hall Museum Archives, «Irishman Hugo O'Conor: Tucson's Founding Father» — archives.sharlothallmuseum.org · " + W,
    yer="Tucson (San Agustín del Tucsón)", etiket=["konu-askeri", "presidio", "sonora"]))

A(K("1776-06-29", "San Francisco de Asís Misyonu (Mission Dolores) kuruldu", "kurulus", 2, 2, ["yeni-ispanya"],
    "Rahip Francisco Palóu, Anza seferinin ardından José Joaquín Moraga'nın birliğiyle 29 Haziran 1776'da körfez kıyısında ilk "
    "ayini yaptı ve misyon yerini kutsadı; presidio aynı yılın eylülünde kuruldu.",
    "Britannica, «Francisco Palóu» — britannica.com/biography/Francisco-Palou · " + W,
    yer="San Francisco (Misyon San Francisco de Asís)", etiket=["konu-idari", "alta-california", "misyon"]))

A(K("1777-11-29", "San José de Guadalupe kuruldu — Yukarı Kaliforniya'nın ilk sivil kasabası", "kurulus", 2, 1, ["yeni-ispanya"],
    "José Joaquín Moraga, Anza'nın getirdiği yerleşimcilerle 29 Kasım 1777'de Guadalupe Nehri kıyısında misyona ya da askerî üsse "
    "bağlı olmayan ilk Alta California kasabasını kurdu; amaç San Francisco ve Monterey presidiolarını besleyecek çiftlikler "
    "oluşturmaktı.",
    "San José Halk Kütüphanesi, «Looking Back: The Founding of Our City, el Pueblo de San José de Guadalupe» — sjpl.org · " + W,
    yer="San José de Guadalupe", etiket=["konu-idari", "alta-california", "pueblo"]))

A(K("1781-09-04", "Los Ángeles pueblo'su kuruldu", "kurulus", 2, 2, ["yeni-ispanya"],
    "Vali Felipe de Neve'nin emriyle Sonora ve Sinaloa'dan getirilen 44 yerleşimci (11 aile) 4 Eylül 1781'de El Pueblo de Nuestra "
    "Señora la Reina de los Ángeles'i kurdu; San Gabriel Misyonu'ndan yola çıkan heyette askerler ve rahipler de vardı. Yerleşim, "
    "Alta California'daki üç sivil pueblo'dan biri olarak tarımla presidioları besleyecekti.",
    "EBSCO Research Starters, «Founding of Los Angeles» — ebsco.com/research-starters/history/founding-los-angeles · " + W,
    yer="Los Ángeles (El Pueblo)", etiket=["konu-idari", "alta-california", "pueblo"]))

A(K("1782-04-21", "Santa Bárbara Presidio'su kuruldu — Alta California'nın son presidiosu", "kurulus", 2, 1, ["yeni-ispanya"],
    "Vali Neve, Serra ve Teğmen José Francisco Ortega 21 Nisan 1782'de haç ve bayrak dikerek Santa Bárbara Presidio'sunu kurdu; "
    "kaynaklar onu Alta California sahilindeki dört İspanyol kalesinin sonuncusu sayar.",
    "Santa Barbara Trust for Historic Preservation, «El Presidio de Santa Bárbara» — sbthp.org/presidio-history · " + W,
    yer="Santa Bárbara", etiket=["konu-askeri", "alta-california", "presidio"]))

A(K("1778-05-27", "Corn Island'da yerleşim başladı — Louisville'in çekirdeği", "kurulus", 2, 1, ["abd"],
    "George Rogers Clark'ın Illinois seferi için Ohio Irmağı şelalelerindeki Corn Island'a bıraktığı yaklaşık 60 sivil yerleşimci "
    "ve milis 27 Mayıs 1778'de burada bir tarım yerleşimi kurdu. 1780'de Virginia meclisi kasabaya belge (town charter) verdi ve adını "
    "Fransa Kralı XVI. Louis'den aldı.",
    "Kleber, John E. (ed.), The Kentucky Encyclopedia (University Press of Kentucky, 1992), «Louisville»" + IKINCIL,
    yer="Louisville", etiket=["konu-idari", "bati-iskani", "kentucky"]))

A(K("1788-12-28", "Losantiville kuruldu — bugünkü Cincinnati'nin çekirdeği", "kurulus", 2, 1, ["abd"],
    "Israel Ludlow ve Robert Patterson'ın önderliğinde 11 aile ve 24 erkek 28 Aralık 1788'de Licking Irmağı'nın karşısındaki alana "
    "yerleşti ve yerleşimi Losantiville diye adlandırdı. Kuzeybatı Bölgesi valisi Arthur St. Clair adı 4 Ocak 1790'da Cincinnati'ye "
    "çevirdi.",
    "Cincinnati Museum Center Library, «Cincinnati FAQs» — library.cincymuseum.org/cincifaq.htm",
    yer="Cincinnati (Losantiville)", etiket=["konu-idari", "bati-iskani", "ohio"]))

A(K("1803-04-30", "Louisiana Satın Alma Antlaşması — Fransa Mississippi'nin batısını ABD'ye sattı", "antlasma", 5, 4, ["abd"],
    "Paris'te 30 Nisan 1803 tarihiyle anılan antlaşmayla Napolyon Fransası, Louisiana'yı (Mississippi Havzası'nın batısındaki geniş "
    "iç toprak) 80 milyon frank (yaklaşık 15 milyon dolar) karşılığında ABD'ye sattı; belge 2 Mayıs'ta imzalandı ve ABD topraklarını çok büyük ölçüde genişletti. "
    "Fiilî devir aynı yılın 20 Aralık'ında New Orleans'ta yapıldı.",
    "Kongre Kütüphanesi, «Louisiana Purchase: A Legislative Timeline» — guides.loc.gov/louisiana-purchase-legislative-timeline · "
    "TDV İslâm Ansiklopedisi, «Amerika Birleşik Devletleri» — islamansiklopedisi.org.tr/amerika-birlesik-devletleri "
    "(«1803'te Louisiana 80 milyon frank karşılığında Fransa'dan»)",
    etiket=["konu-siyasi", "louisiana", "toprak-satin-alma"], kapsam="dis",
    odak=["New Orleans", "St. Louis", "Natchitoches"]))

A(K("1803-12-20", "New Orleans'ta Louisiana'nın devri — Fransız bayrağı indi, ABD bayrağı çekildi", "toprak-kazanc", 5, 3,
    ["abd", "yeni-ispanya"],
    "20 Aralık 1803'te New Orleans'taki Cabildo'da Fransız temsilci Pierre Laussat, William C. C. Claiborne ve James Wilkinson'a "
    "şehrin anahtarlarını teslim etti; Louisiana'nın New Orleans dahil kalan kısmı ABD egemenliğine geçti. İspanya bölgeyi "
    "Napolyon'a 30 Kasım'da devretmişti (Üçüncü San Ildefonso Antlaşması'ndan üç yıl sonra); Yukarı Louisiana'daki devir ancak "
    "Mart 1804'te St. Louis'te yapıldı.",
    "ABD Millî Park Servisi, «U.S. Takes Possession of Louisiana» — nps.gov/articles/u-s-takes-possession-of-louisiana.htm · "
    "Louisiana State Museum, «Louisiana History — The Louisiana Purchase» — louisianastatemuseum.org",
    yer="New Orleans", etiket=["konu-siyasi", "louisiana", "devir"], kapsam="dis",
    ic="Atlas Biloxi, Mobile, Natchitoches, Spiro, St. Louis noktalarını bu güne bağlıyor; yalnız Natchitoches Louisiana'dır. "
       "Biloxi/Mobile Batı Florida'dır (1812-13), St. Louis 10 Mart 1804'te geçti — bkz. -YERLESIM-ONERI.md."))

A(K("1804-03-10", "St. Louis'te Yukarı Louisiana'nın devri — Üç Bayrak Günü", "toprak-kazanc", 4, 2, ["abd", "yeni-ispanya"],
    "9 Mart 1804'te Yukarı Louisiana İspanya'dan Fransa'ya, ertesi gün 10 Mart'ta Fransa'dan ABD'ye törenle devredildi; St. Louis iki "
    "günde üç bayrak gördü. İspanya bölgeyi Fransa'ya 1800 San Ildefonso'ya rağmen bu tarihe kadar fiilen bırakmamıştı.",
    "Missouri Encyclopedia, «Louisiana Purchase and Missouri» — missouriencyclopedia.org/events/louisiana-purchase-and-missouri · "
    "ABD Millî Park Servisi, «U.S. Takes Possession of Louisiana»",
    yer="St. Louis", etiket=["konu-siyasi", "louisiana", "devir"], kapsam="dis"))

A(K("1811-04-12", "Fort Astoria kuruldu — Pasifik kıyısında ilk Amerikan ticaret karakolu", "kurulus", 2, 2,
    ["abd", "ingiliz-kuzey-amerika"],
    "John Jacob Astor'un Pacific Fur Company'sinin 33 adamı 12 Nisan 1811'de Columbia Irmağı ağzına çıktı ve mayısa kadar Astoria'yı "
    "inşa etti. 1812 Savaşı sırasında karakol 1813'te Kanadalı North West Company'ye satıldı ve Fort George adını aldı; Oregon Ülkesi "
    "bu yıllarda ABD ile Britanya'nın ortak iddiası altındaydı.",
    "Oregon Historical Society, Oregon History Project, «Fort Astoria, 1813» — oregonhistoryproject.org · "
    "EBSCO Research Starters, «Fort Astoria»",
    yer="Fort Astoria", etiket=["konu-ekonomi", "kurk-ticareti", "oregon-ulkesi"], kapsam="dis"))

A(K("1821-02-22", "Adams–Onís Antlaşması yürürlüğe girdi — Florida ABD'ye, Teksas hattı Sabine'e", "antlasma", 4, 3,
    ["abd", "yeni-ispanya"],
    "22 Şubat 1819'da imzalanan antlaşma, onayların 22 Şubat 1821'de karşılıklı verilmesiyle yürürlüğe girdi. İspanya Doğu ve Batı "
    "Florida'yı ABD'ye bıraktı; Sabine Irmağı Louisiana ile İspanyol Teksas arasındaki sınır oldu; ABD Teksas üzerindeki iddiasından, "
    "İspanya ise 42° kuzeyinin ötesindeki Oregon haklarından vazgeçti.",
    "Oklahoma Historical Society, Encyclopedia of Oklahoma History and Culture, «Adams-Onís Treaty» — okhistory.org · "
    "Florida Historical Society, «Treaty signed ceding the Floridas from Spain to the United States» — myfloridahistory.org · "
    "TDV İslâm Ansiklopedisi, «Amerika Birleşik Devletleri» («1819'da Florida 5 milyon dolar karşılığında İspanyollar'dan»)",
    etiket=["konu-siyasi", "florida", "sinir"], kapsam="dis", odak=["Pensacola", "Natchitoches"],
    ic="Atlas Los Adaes noktasını bu güne bağlıyor; Los Adaes 1773'te terk edilmişti ve olay orada geçmedi (yer_id bu yüzden boş)."))

A(K("1823-12-02", "Monroe Doktrini ilan edildi", "diplomasi", 4, 4, ["abd"],
    "Başkan James Monroe, 2 Aralık 1823 tarihli yıllık Kongre mesajında Avrupa devletlerinin Yeni Dünya'da yeni sömürge kurmasının "
    "ve bağımsız Amerikan devletlerine müdahalesinin ABD'ce düşmanca sayılacağını bildirdi. Bu ilke, Latin Amerika'daki bağımsızlık "
    "hareketlerinin ardından ABD dış politikasının Batı Yarımküre çizgisi oldu.",
    "Britannica, «Monroe Doctrine» — britannica.com/event/Monroe-Doctrine" + IKINCIL,
    etiket=["konu-siyasi", "diplomasi"], kapsam="dis"))

A(K("1825-03-19", "Fort Vancouver açıldı — Hudson's Bay Company'nin Columbia Bölgesi merkezi", "kurulus", 3, 2,
    ["ingiliz-kuzey-amerika"],
    "Hudson's Bay Company, Columbia Irmağı'nın kuzey yakasındaki yüksek kıyıda Fort Vancouver'ı 19 Mart 1825'te açtı (yapı 1824 "
    "sonunda başlamıştı). John McLoughlin'in yönettiği karakol Columbia Bölgesi'nin ticaret merkezi ve Oregon Ülkesi'nde İngiliz "
    "varlığının dayanağı oldu.",
    "HistoryLink.org, «Hudson's Bay Company opens Fort Vancouver on March 19, 1825» — historylink.org/file/5251",
    yer="Fort Vancouver", etiket=["konu-ekonomi", "kurk-ticareti", "oregon-ulkesi"], kapsam="dis"))

A(K("1836-08-30", "Houston kuruldu — Buffalo Bayou kıyısında yeni Teksas kasabası", "kurulus", 2, 1, ["teksas-cumhuriyeti"],
    "Augustus ve John Kirby Allen kardeşler 30 Ağustos 1836'da Telegraph and Texas Register'da 'Houston Kasabası'nın ilanını yayımladı; "
    "Buffalo Bayou boyunca satın aldıkları 6.600 acre'lık (~2.670 hektar) arazide ticaret merkezi kurmayı vaat ediyorlardı. Kasaba 1837'de Teksas "
    "Cumhuriyeti'nin başkenti seçildi.",
    "Texas State Historical Association, Handbook of Texas, «Houston, TX» — tshaonline.org/handbook/entries/houston-tx",
    yer="Houston", etiket=["konu-idari", "teksas"],
    ic="Atlas Houston'ı 1836-01-01'den itibaren 'abd' sahipliğinde gösteriyor; oysa 1845-12-29'a kadar Teksas Cumhuriyeti'ydi."))

A(K("1843-06-10", "Fort Victoria adını aldı — HBC'nin Vancouver Adası'ndaki yeni merkezi", "kurulus", 3, 2,
    ["ingiliz-kuzey-amerika"],
    "James Douglas, ABD'nin Columbia bölgesindeki nüfuzundan endişe eden HBC valisi Simpson'ın talimatıyla 1843 martında Camosack "
    "limanında inşaata başladı; karakol 10 Haziran 1843'te resmen Kraliçe Victoria'nın adını aldı ve 1849'da şirketin ana Pasifik "
    "deposu oldu.",
    "Legislative Assembly of British Columbia, «1843 - Fort Victoria is Established» — leg.bc.ca · "
    "The Canadian Encyclopedia, «Fort Victoria» — thecanadianencyclopedia.ca/en/article/fort-victoria",
    yer="Victoria (Fort Victoria)", etiket=["konu-ekonomi", "kurk-ticareti", "vancouver-adasi"], kapsam="dis"))

A(K("1846-05-13", "ABD Meksika'ya savaş ilan etti", "savas", 4, 3, ["abd", "meksika"],
    "Kongre, Rio Grande sınırında çıkan çatışmanın ardından 13 Mayıs 1846'da Meksika'ya savaş ilan etti. Savaş, 2 Şubat 1848'de "
    "imzalanan Guadalupe Hidalgo Antlaşması'yla bitti.",
    "Britannica, «Mexican-American War» — britannica.com/event/Mexican-American-War" + IKINCIL,
    etiket=["konu-askeri", "meksika-savasi"], kapsam="dis", odak=["Matamoros (Refugio)"]))

A(K("1846-06-15", "Oregon Antlaşması imzalandı — 49. paralel Pasifik'e kadar uzatıldı", "antlasma", 4, 3,
    ["abd", "ingiliz-kuzey-amerika"],
    "ABD ile Britanya, 15 Haziran 1846'da Washington'da imzaladıkları antlaşmayla Oregon Ülkesi anlaşmazlığını kapattı: sınır "
    "Kayalık Dağlar'dan Pasifik'e kadar 49. paralel oldu, Vancouver Adası'nın tamamı Britanya'da kaldı.",
    "Britannica, «Oregon Treaty» — britannica.com/event/Oregon-Treaty" + IKINCIL + " · TDV İslâm Ansiklopedisi, «Amerika Birleşik "
    "Devletleri» (1846'da 49° kuzey paralelinin sınır olması konusunda İngiltere ile anlaşma; TDV gün vermez)",
    etiket=["konu-siyasi", "oregon-ulkesi", "sinir"], kapsam="dis",
    odak=["Fort Vancouver", "Victoria (Fort Victoria)"],
    ic="kronoloji_sinir_amerika.js'teki 1846-01-01 tarihi kesin gün değildir; imza günü 15 Haziran 1846'dır."))

A(K("1847-07-24", "Mormon öncüler Büyük Tuz Gölü vadisine girdi — Salt Lake City'nin başlangıcı", "kurulus", 3, 2, ["meksika"],
    "Brigham Young'ın önderliğindeki Mormon öncüler 24 Temmuz 1847'de Wasatch dağlarından Büyük Tuz Gölü vadisine indi ve şehri "
    "kurmaya girişti. Vadi o gün hukuken Meksika'nın Alta California sınırındaydı ve Ute ile Şoşoni halklarının yurduydu; bölge "
    "Guadalupe Hidalgo Antlaşması'yla 1848'de ABD'ye geçti.",
    "Utah Devlet Tarih Kurumu, «Mormon Pioneers in the Great Salt Lake Valley» (Utah Division of State History) " + IKINCIL +
    " · Britannica, «Salt Lake City»",
    yer="Salt Lake City", etiket=["konu-idari", "mormonlar", "bati-iskani"],
    ic="Atlas noktayı 1847-07-24'ten itibaren 'abd' gösteriyor; hukuken Meksika toprağıydı (bkz. -YERLESIM-ONERI.md)."))

A(K("1848-02-02", "Guadalupe Hidalgo Antlaşması imzalandı — Meksika Kaliforniya ve Yeni Meksika'yı bıraktı", "antlasma", 5, 3,
    ["meksika", "abd"],
    "2 Şubat 1848'de imzalanan antlaşma ABD-Meksika Savaşı'nı bitirdi: Meksika, Alta California'yı, Yeni Meksika'yı ve bugünkü "
    "Utah-Nevada-Arizona-Colorado'nun büyük bölümünü ABD'ye bıraktı; Rio Grande sınır oldu ve ABD 15 milyon dolar ödedi. Yürürlük "
    "tarihi, onayların değişildiği 30 Mayıs 1848'dir.",
    "ABD Millî Arşivleri, «Treaty of Guadalupe Hidalgo (1848)» — archives.gov/milestone-documents/treaty-of-guadalupe-hidalgo",
    etiket=["konu-siyasi", "meksika-savasi", "sinir"], kapsam="dis"))

A(K("1851-11-13", "Denny grubu Alki Burnu'na çıktı — Seattle'ın başlangıcı", "kurulus", 2, 1, ["abd"],
    "Arthur Denny önderliğindeki grup (on yetişkin ve on iki çocuk) 13 Kasım 1851'de 'Exact' şonuyla Alki Burnu'na çıktı; "
    "yerleşimciler ertesi ilkbaharda bugünkü Pioneer Square'e taşındı. Bölge Duwamish ve Suquamish halklarının yurduydu.",
    "HistoryLink.org, «Denny Party lands at Alki Point near future Seattle on November 13, 1851» — historylink.org/file/5392",
    yer="Seattle (Duwamish)", etiket=["konu-idari", "bati-iskani", "washington"]))

A(K("1858-11-22", "Denver City kuruldu — Kolorado altın hücumunun kasabası", "kurulus", 2, 1, ["abd"],
    "Kasım 1858'de William Larimer ve ortakları, Cherry Creek'in doğu yakasında St. Charles Town Company'nin arazisini satın alarak "
    "'Denver City'yi kurdu ve adını Kansas Bölgesi valisi James W. Denver'a atfetti; Denver Town Company anayasasını 22 Kasım 1858'de "
    "kabul etti.",
    "Colorado Encyclopedia, «Auraria (West Denver)» — coloradoencyclopedia.org/article/auraria-west-denver",
    yer="Denver", etiket=["konu-idari", "bati-iskani", "altin-hucumu"]))

A(K("1867-07-04", "Cheyenne kuruldu — Union Pacific hattının uç istasyonu", "kurulus", 2, 1, ["abd"],
    "Union Pacific'in baş mühendisi Grenville Dodge, Crow Creek ile demiryolu güzergâhının kesiştiği yeri 4 Temmuz 1867'de kasaba "
    "alanı olarak belirledi; demiryolu kasımda ulaştığında nüfus 4.000'i geçmişti.",
    "Wyoming State Historical Society, WyoHistory.org, «Cheyenne, Magic City of the Plains» — wyohistory.org",
    yer="Cheyenne (Wyoming)", etiket=["konu-idari", "bati-iskani", "demiryolu"]))

A(K("1870-05-12", "Manitoba Yasası kabul edildi — Kızıl Irmak Métis'lerinin talepleriyle yeni eyalet", "idari", 4, 2,
    ["kanada", "metis"],
    "Kanada Parlamentosu, Louis Riel'in geçici hükûmetinin 1869-70 kışında ileri sürdüğü hak listelerinin ardından 12 Mayıs 1870'te "
    "Manitoba Yasası'nı onayladı; yasa Kanada'nın beşinci eyaletini kurdu, iki dilli okulları ve Métis çocuklarına 1,4 milyon acre "
    "arazi tahsisini güvence altına aldı. Yasa, Rupert's Land'in devredildiği 15 Temmuz 1870'te yürürlüğe girdi.",
    "The Canadian Encyclopedia, «Manitoba Act» — thecanadianencyclopedia.ca/en/article/manitoba-act",
    etiket=["konu-idari", "metis", "kanada-konfederasyonu"], kapsam="ic",
    odak=["Fort Garry (Kızıl Irmak Kolonisi)"]))

A(K("1882-01-01", "Regina kuruldu — Kanada Pasifik Demiryolu hattında 'Pile of Bones'", "kurulus", 2, 1, ["kanada"],
    "Kanada Pasifik Demiryolu 1882'de ovalardan geçerken Wascana (Pile O' Bones) Deresi yakınında doğan yerleşim aynı yıl Prenses "
    "Louise'in önerisiyle Regina ('Kraliçe') adını aldı; 1883'te Kuzeybatı Toprakları'nın başkenti oldu.",
    "The Canadian Encyclopedia, «Regina» — thecanadianencyclopedia.ca/en/article/regina",
    yer="Regina", etiket=["konu-idari", "demiryolu", "kuzeybati-topraklari"],
    gun="1882 (kaynak kuruluş gününü vermez; yıl 1882)"))

A(K("1896-08-16", "Bonanza Creek'te altın bulundu — Klondike Altın Hücumu başladı", "kurulus", 3, 3, ["kanada"],
    "Shaaw Tláa (Kate Carmack), Keish (Skookum Jim Mason), Káa Goox (Dawson Charlie) ve George Carmack 16 Ağustos 1896'da Bonanza "
    "(eski adıyla Rabbit) Creek'te altın buldu; George Carmack resmî keşifçi olarak kayda geçti. Ardından gelen hücumda 100 binden "
    "fazla kişi bölgeye yöneldi ve Dawson City doğdu.",
    "The Canadian Encyclopedia, «Klondike Gold Rush» — thecanadianencyclopedia.ca/en/article/klondike-gold-rush" + IKINCIL,
    yer="Dawson City", etiket=["konu-ekonomi", "altin-hucumu", "yukon"]))

A(K("1900-04-17", "Tutuila ve Aunu'u ABD'ye devredildi — Pago Pago donanma istasyonu", "toprak-kazanc", 3, 2, ["abd"],
    "Tutuila ve Aunu'u şeflerinin imzaladığı devir belgesi 17 Nisan 1900'de Pago Pago'daki ABD Donanma İstasyonu'nda bayrağın "
    "çekilmesinden hemen önce imzalandı; belge ABD Kongresi'nce ancak 1929'da onaylandı.",
    "American Samoa Bar Association, «Cession of Tutuila and Aunu'u» — asbar.org/cession-of-tutuila-and-aunuu",
    yer="Pago Pago", etiket=["konu-siyasi", "samoa", "donanma-istasyonu"], kapsam="dis",
    ic="Pago Pago atlasta Kuzey Amerika kovasında sayılıyor; coğrafya Okyanusya'dır (KRONO-ASYA-UZAK ile çakışma riski)."))

A(K("1774-06-22", "Quebec Yasası — Fransız hukuku ve Katolik Kilisesi güvence altına alındı, sınırlar Ohio'ya uzatıldı",
    "idari", 4, 3, ["ingiliz-kuzey-amerika"],
    "İngiliz Parlamentosu 22 Haziran 1774 tarihli yasayla, 1763'te Fransa'dan alınan Quebec eyaletinde Fransız medeni hukukunu ve "
    "Katolik Kilisesi'nin haklarını tanıdı, eyalet sınırlarını Ohio Irmağı'na ve Büyük Göller'e doğru genişletti. On Üç Koloni bu "
    "yasayı Dayanılmaz Yasalar arasında saydı.",
    "The Canadian Encyclopedia, «Quebec Act» — thecanadianencyclopedia.ca/en/article/quebec-act" + IKINCIL,
    etiket=["konu-idari", "quebec", "amerikan-devrimi"], kapsam="dis",
    odak=["Quebec", "Montreal (Ville-Marie)"]))

A(K("1608-07-03", "Québec kuruldu — Yeni Fransa'nın merkezi", "kurulus", 4, 3, ["yeni-fransa", "fransa"],
    "Samuel de Champlain, 3 Temmuz 1608'de St. Lawrence Irmağı'nın daraldığı yerde ahşap bir yerleşim ('habitation') kurdu; "
    "Québec, Yeni Fransa'nın merkezi oldu ve 1759'da İngilizlere düşene kadar öyle kaldı.",
    "The Canadian Encyclopedia, «Québec City» — thecanadianencyclopedia.ca/en/article/quebec-city" + IKINCIL,
    yer="Quebec", etiket=["konu-idari", "yeni-fransa"], kapsam="dis"))

A(K("1642-05-17", "Ville-Marie (Montréal) kuruldu", "kurulus", 3, 2, ["fransa"],
    "Paul de Chomedey de Maisonneuve öncülüğünde 17 Mayıs 1642'de St. Lawrence Irmağı'ndaki adada dinî bir misyon yerleşimi olarak "
    "kuruldu; Montréal sonradan kürk ticaretinin ve iç keşiflerin başlıca üssü oldu.",
    "The Canadian Encyclopedia, «Montreal» — thecanadianencyclopedia.ca/en/article/montreal" + IKINCIL,
    yer="Montreal (Ville-Marie)", etiket=["konu-idari", "yeni-fransa", "misyon"], kapsam="dis"))

A(K("1682-04-09", "La Salle Mississippi havzasını Fransa adına aldı — Louisiana adı verildi", "toprak-kazanc", 4, 3,
    ["yeni-fransa", "fransa"],
    "Robert Cavelier de La Salle, 9 Nisan 1682'de Mississippi'nin ağzında haç ve Fransız armalı bir direk dikerek ırmağın bütün "
    "havzasını Kral XIV. Louis adına ilan etti ve bölgeye Louisiana adını verdi.",
    "Britannica, «René-Robert Cavelier, sieur de La Salle» — britannica.com/biography/Rene-Robert-Cavelier-sieur-de-La-Salle" + IKINCIL,
    etiket=["konu-siyasi", "louisiana", "yeni-fransa"], kapsam="dis"))

A(K("1713-04-11", "Utrecht Antlaşması — Fransa Newfoundland, Akadya ve Hudson Körfezi'ni İngiltere'ye bıraktı", "antlasma", 4, 3,
    ["ingiltere", "fransa"],
    "İspanya Veraset Savaşı'nı bitiren antlaşma dizisinin Britanya-Fransa ayağı 11 Nisan 1713'te Utrecht'te imzalandı: Fransa "
    "Newfoundland'ın İngiliz olduğunu kabul etti (kıyıda balıkçılık hakkını korudu), anakara Akadya'yı (bugünkü Nova Scotia ve "
    "New Brunswick; Cape Breton hariç) ve Hudson Körfezi havzasını Britanya'ya bıraktı.",
    "The Canadian Encyclopedia, «Treaty of Utrecht» — thecanadianencyclopedia.ca/en/article/treaty-of-utrecht · "
    "Heritage Newfoundland & Labrador, «The Treaty of Utrecht, 1713» — heritage.nf.ca",
    etiket=["konu-siyasi", "yeni-fransa", "akadya"], kapsam="dis"))

A(K("1755-05-15", "Laredo kuruldu — Rio Grande'nin kuzey yakasında Villa de San Agustín", "kurulus", 2, 1, ["yeni-ispanya"],
    "Tomás Sánchez, José de Escandón'dan aldığı izinle 15 Mayıs 1755'te ailesi ve birkaç yerleşimciyle Rio Grande'nin kuzey yakasında "
    "Villa de San Agustín de Laredo'yu kurdu; adı Escandón'un memleketi Laredo'dan (Cantabria) gelir.",
    "Texas State Historical Association, Handbook of Texas, «Laredo, TX» — tshaonline.org/handbook/entries/laredo-tx",
    yer="Laredo", etiket=["konu-idari", "nuevo-santander", "teksas"]))

# =========================================================== ORTA AMERİKA (Meksika · Orta Amerika · Karayip)
A(K("1524-03-07", "Q'umarkaj (Utatlán) yakıldı — K'iche' krallığının direnişi kırıldı", "isgal", 4, 2, ["maya-sehir-devletleri"],
    "Pedro de Alvarado, Kaqchikel müttefikleri ve Meksikalı yardımcılarla yürüdüğü K'iche' ülkesinde 7 Mart 1524'te başkent "
    "Q'umarkaj'da esir aldığı iki K'iche' hükümdarını (Ahpop ve Ahpop Qamahay) yaktırdı ve şehri ateşe verdi; bu, Guatemala "
    "yaylalarındaki en güçlü Maya krallığının çöküşüydü.",
    LOVELL + IKINCIL, yer="Utatlán (Q'umarkaj)", etiket=["konu-askeri", "maya", "guatemala-fetihi"], dosya="o"))

A(K("1525-01-01", "Zaculeu düştü — Mam krallığının başkenti teslim oldu", "isgal", 3, 2, ["maya-sehir-devletleri"],
    "Gonzalo de Alvarado'nun aylarca kuşattığı Mam başkenti Zaculeu'nun hükümdarı Kayb'il B'alam, açlık yüzünden 1525 ekiminin "
    "ortalarında şehri teslim etti. Bu teslimle Huehuetenango yaylasındaki son büyük Maya krallığı İspanyol egemenliğine girdi.",
    LOVELL + IKINCIL, yer="Zaculeu", etiket=["konu-askeri", "maya", "guatemala-fetihi"],
    gun="Ekim 1525 ortası (kaynaklar kesin günü vermez; atlas noktası 1525-01-01 yıl işaretiyle duruyor)", dosya="o"))

A(K("1528-03-31", "Villa Real de Chiapa kuruldu — bugünkü San Cristóbal de las Casas", "kurulus", 3, 2,
    ["yeni-ispanya-ilk-donem"],
    "Diego de Mazariegos 31 Mart 1528'de Jovel Vadisi'nde Chiapas'ın fethine üs olacak Villa Real de Chiapa'yı kurdu; yerleşim 1536'da "
    "şehir statüsü aldı ve adı 1829'da San Cristóbal de las Casas oldu.",
    "INAH (Instituto Nacional de Antropología e Historia), Lugares INAH, «San Cristóbal de las Casas» — lugares.inah.gob.mx/en/node/4787",
    yer="San Cristóbal de las Casas (Ciudad Real)", etiket=["konu-idari", "chiapas"], dosya="o",
    ic="Yeni İspanya Genel Valiliği künyesi 1535-04-17'de başlar; geriye dönük bağlama yasak (M-5416) olduğundan 1528 ve 1531 için öncül künye 'yeni-ispanya-ilk-donem' önerildi."))

A(K("1531-04-16", "Puebla de los Ángeles kuruldu (geleneksel kuruluş günü)", "kurulus", 3, 2, ["yeni-ispanya-ilk-donem"],
    "Rahip Toribio de Benavente (Motolinía) 16 Nisan 1531'de Cuetlaxcoapan'da ilk ayini yaptı; şehir bu günle anılır, kraliyet "
    "fermanı ise 28-29 Eylül 1531 tarihlidir. Puebla, Yeni İspanya'da yalnız İspanyol çiftçilere ayrılmış bir 'cumhuriyet' olarak "
    "tasarlandı.",
    "INAH, Lugares INAH, «Puebla de Zaragoza» — lugares.inah.gob.mx/en/node/4810",
    yer="Puebla de los Ángeles", etiket=["konu-idari", "yeni-ispanya"], dosya="o",
    gun="16 Nisan 1531 geleneksel gün (ilk ayin); resmî belge Eylül 1531"))

A(K("1542-02-14", "Guadalajara kuruldu — Atemajac Vadisi'ndeki dördüncü ve kalıcı yer", "kurulus", 3, 1, ["yeni-ispanya"],
    "Cristóbal de Oñate önderliğindeki 63 İspanyol ailesi 14 Şubat 1542'de Atemajac Vadisi'nde Guadalajara'yı üç başarısız "
    "denemeden sonra kalıcı olarak kurdu; ilk belediye meclisi bu tarihte toplandı ve Miguel de Ibarra ilk alcalde seçildi.",
    "Universidad de Guadalajara, «14 de febrero de 1542 — Aniversario de la Fundación de Guadalajara» — ww1.udg.mx/es/efemerides/2017/14-feb",
    yer="Guadalajara", etiket=["konu-idari", "nueva-galicia"], dosya="o"))

A(K("1543-03-10", "Santiago de los Caballeros Panchoy Vadisi'ne taşındı — bugünkü Antigua Guatemala", "kurulus", 3, 2,
    ["yeni-ispanya"],
    "11 Eylül 1541'de Volcán de Agua'dan inen çamur seli Almolonga Vadisi'ndeki (Ciudad Vieja) ikinci başkenti yok etti; İspanyollar "
    "şehri 10 Mart 1543'te sekiz kilometre kuzeydeki Panchoy Vadisi'nde yeniden kurdu.",
    "Britannica, «Antigua Guatemala» — britannica.com/place/Antigua-Guatemala" + IKINCIL,
    yer="Antigua Guatemala (Santiago de los Caballeros)", etiket=["konu-idari", "guatemala"], dosya="o"))

A(K("1546-09-08", "Zacatecas'ta gümüş damarları bulundu — maden kasabasının doğuşu", "kurulus", 3, 2, ["yeni-ispanya"],
    "Baskça asilzade Juan de Tolosa, 8 Eylül 1546'da Guadalajara'dan kuzeye ilerlerken Zacatecas dağlarında zengin gümüş damarlarına "
    "rastladı; yerleşimin resmî kuruluşu, Cristóbal de Oñate, Diego de Ibarra ve Baltasar Temiño de Bañuelos'un katılmasıyla 1548'de "
    "yapıldı. Zacatecas sonradan Yeni İspanya'nın ikinci önemli şehri ve dünya gümüşünün başlıca kaynaklarından biri oldu.",
    GERHARD + IKINCIL, yer="Zacatecas", etiket=["konu-ekonomi", "gumus", "maden"], dosya="o",
    gun="8 Eylül 1546 gümüşün bulunduğu gün; kuruluş 1548"))

A(K("1563-07-08", "Durango kuruldu — Nueva Vizcaya'nın merkezi", "kurulus", 3, 1, ["yeni-ispanya"],
    "Francisco de Ibarra 8 Temmuz 1563'te Guadiana Vadisi'nde, doğduğu Biskay'daki Durango'nun adını vererek Villa de Durango'yu "
    "kurdu; şehir, bugünkü Durango ve Chihuahua'nın büyük kısmını kapsayan Nueva Vizcaya eyaletinin başkenti oldu.",
    "INAH, Lugares INAH, «Durango» — lugares.inah.gob.mx/en/node/4790",
    yer="Durango (Victoria de Durango)", etiket=["konu-idari", "nueva-vizcaya"], dosya="o"))

A(K("1577-07-25", "Villa de Santiago del Saltillo kuruldu", "kurulus", 2, 1, ["yeni-ispanya"],
    "Kaptan Alberto del Canto, Coahuila'da Villa de Santiago del Saltillo'yu 1577'de kurdu; kuruluş belgesi gün vermez, kutlanan "
    "gün olan 25 Temmuz Aziz Yakup gününe denk düşer.",
    GERHARD + " · gün: kuruluş belgesinde (Parral Belgesi) yalnız yıl var; 25 Temmuz Aziz Yakup günü kabulüdür",
    yer="Saltillo", etiket=["konu-idari", "coahuila"], dosya="o",
    gun="25 Temmuz (Aziz Yakup günü) kabulü; belgede yalnız 1577"))

A(K("1659-12-08", "Nuestra Señora de Guadalupe del Paso Misyonu kuruldu — El Paso del Norte'nin çekirdeği", "kurulus", 3, 2,
    ["yeni-ispanya"],
    "Fransisken rahip García de San Francisco 8 Aralık 1659'da Rio Grande geçidinde Manso halkı arasında bir misyon kurdu; 1680 Pueblo "
    "İsyanı'nda Yeni Meksika'dan kaçan 2.500'den fazla İspanyol ve Yerli buraya sığındı. Yerleşim Mexico City-Santa Fe Camino Real "
    "hattının güney ucundaki dayanaktı.",
    "Texas State Historical Association, Handbook of Texas, «El Paso del Norte» — tshaonline.org/handbook/entries/el-paso-del-norte",
    yer="El Paso del Norte", etiket=["konu-idari", "misyon", "camino-real"], dosya="o"))

A(K("1697-10-25", "Nuestra Señora de Loreto Misyonu kuruldu — Baja California'nın ilk kalıcı yerleşimi", "kurulus", 3, 1,
    ["yeni-ispanya"],
    "Cizvit rahip Juan María de Salvatierra 25 Ekim 1697'de Monqui halkının Conchó yerleşiminde ilk başarılı Baja California "
    "misyonunu kurdu; Loreto, yarımadada Cizvitlerin kurduğu 27 misyonun 'anası' sayıldı.",
    BANNON + IKINCIL, yer="Loreto (Baja California)", etiket=["konu-idari", "misyon", "baja-california"], dosya="o"))

A(K("1709-10-12", "Chihuahua'da San Francisco de Cuéllar maden kampı kuruldu", "kurulus", 2, 1, ["yeni-ispanya"],
    "Blas Cano de los Ríos ve Antonio Deza y Ulloa 12 Ekim 1709'da Chuvíscar ve Sacramento nehirlerinin birleştiği yerde El Real de "
    "Minas de San Francisco de Cuéllar'ı kurdu; yerleşim 1718'de San Felipe el Real de Chihuahua adını aldı.",
    GERHARD + IKINCIL, yer="Chihuahua (San Felipe el Real)", etiket=["konu-ekonomi", "maden", "nueva-vizcaya"], dosya="o"))

A(K("1749-03-05", "Camargo kuruldu — Nuevo Santander'in ilk yerleşimi", "kurulus", 2, 1, ["yeni-ispanya"],
    "José de Escandón'un Nuevo Santander iskân seferinde 5 Mart 1749'da San Juan Nehri'nin güneyinde Nuestra Señora de Santa Ana "
    "de Camargo kuruldu; 85 aile (531 kişi) ile başlayan kasaba kısa sürede Escandón'un en büyük yerleşimi oldu.",
    "Texas State Historical Association, Handbook of Texas, «Camargo, Nuevo Santander» — tshaonline.org/handbook/entries/camargo-nuevo-santander",
    yer="Camargo", etiket=["konu-idari", "nuevo-santander"], dosya="o"))

A(K("1750-10-06", "Villa de Santa María de Aguayo kuruldu — bugünkü Ciudad Victoria", "kurulus", 2, 1, ["yeni-ispanya"],
    "Escandón'un ikinci iskân seferinde 6 Ekim 1750'de kurulan yerleşim, 1825'te Tamaulipas'ın yeni başkenti olarak şehir statüsü "
    "aldı ve Meksika'nın ilk cumhurbaşkanı Guadalupe Victoria'nın adını taşıdı.",
    "Ciudad Victoria Belediyesi, «Historia» — ciudadvictoria.gob.mx/historia · "
    "Texas State Historical Association, Handbook of Texas, «Nuevo Santander» — tshaonline.org/handbook/entries/nuevo-santander",
    yer="Ciudad Victoria", etiket=["konu-idari", "nuevo-santander"], dosya="o"))

A(K("1804-01-01", "Haiti'nin bağımsızlığı ilan edildi — Gonaïves", "kurulus", 5, 4, ["haiti"],
    "Jean-Jacques Dessalines ve Haitili generaller 1 Ocak 1804'te Gonaïves'te Louis Boisrond-Tonnerre'in kaleme aldığı Bağımsızlık "
    "Belgesi'ni okuttu ve on üç yıllık savaşın ardından Saint-Domingue'in yerine bağımsız Haiti'yi ilan etti; köleliği ilga eden bu "
    "cumhuriyet, ABD'den sonra Amerika'da bağımsızlığını ilan eden ikinci devlet oldu.",
    "Encyclopedia Virginia (Virginia Humanities), «The Haitian Declaration of Independence (January 1, 1804)» — "
    "encyclopediavirginia.org/primary-documents/the-haitian-declaration-of-independence-january-1-1804",
    yer="Gonaïves", etiket=["konu-siyasi", "haiti-devrimi"], kapsam="dis", dosya="o"))

A(K("1810-09-16", "Dolores Çığlığı — Miguel Hidalgo Meksika bağımsızlık ayaklanmasını başlattı", "isyan", 5, 3, ["yeni-ispanya"],
    "Rahip Miguel Hidalgo y Costilla 16 Eylül 1810 sabahı Guanajuato'daki Dolores kasabasında çanları çaldırıp halkı İspanyol "
    "yönetimine karşı silaha çağırdı; on bir yıl sürecek Meksika Bağımsızlık Savaşı bu çağrıyla başladı ve 1821'de Trigarante "
    "Ordusu'nun Mexico City'ye girişiyle sona erdi.",
    "Britannica, «Miguel Hidalgo y Costilla» — britannica.com/biography/Miguel-Hidalgo-y-Costilla" + IKINCIL,
    etiket=["konu-siyasi", "meksika-bagimsizlik-savasi"], kapsam="dis", dosya="o"))

A(K("1823-07-01", "Orta Amerika Birleşik Eyaletleri bağımsızlığını ilan etti", "kurulus", 4, 2,
    ["guatemala", "orta-amerika-federasyonu"],
    "Guatemala City'de toplanan Ulusal Kurucu Meclis 1 Temmuz 1823'te Orta Amerika'yı İspanya'dan, Meksika'dan ve her yabancı "
    "devletten bağımsız ilan etti; Guatemala, El Salvador, Honduras, Nikaragua ve Kosta Rika'dan oluşan federal cumhuriyet "
    "Orta Amerika Birleşik Eyaletleri adını aldı.",
    "Britannica, «United Provinces of Central America» — britannica.com/place/United-Provinces-of-Central-America",
    etiket=["konu-siyasi", "orta-amerika-federasyonu"], kapsam="dis", dosya="o",
    odak=["Antigua Guatemala (Santiago de los Caballeros)"],
    ic="guatemala künyesindeki 1823-01-01 maddesi yıl işaretidir; bağımsızlık kararının günü 1 Temmuz 1823'tür."))

A(K("1824-10-04", "1824 Anayasası kabul edildi — Meksika federal cumhuriyet oldu", "anayasa", 4, 2, ["meksika"],
    "Meksika Kurucu Kongresi, 4 Ekim 1824'te Meksika Birleşik Devletleri'ni federal cumhuriyet olarak kuran anayasayı kabul etti; "
    "Iturbide imparatorluğunun (1822-23) düşüşünden sonra federalistler ile merkeziyetçiler arasındaki kavganın ilk anayasal "
    "ürünüydü.",
    "Britannica, «Mexico: Independence and the early republic» — britannica.com/place/Mexico" + IKINCIL,
    etiket=["konu-siyasi", "anayasa"], kapsam="ic", dosya="o"))

A(K("1914-08-15", "Panama Kanalı açıldı", "kurulus", 4, 4, ["panama-cumhuriyeti", "abd"],
    "Atlas ve Pasifik'i birleştiren kanaldan ilk resmî geçiş 15 Ağustos 1914'te yapıldı. Kanal, ABD'nin 1903 Hay–Bunau-Varilla "
    "Antlaşması'yla Panama'dan kazandığı kanal şeridi üzerinde inşa edilmişti.",
    "Britannica, «Panama Canal» — britannica.com/topic/Panama-Canal" + IKINCIL,
    yer="", etiket=["konu-ekonomi", "kanal"], kapsam="dis", dosya="o", odak=["Panamá (Panama City)"]))

A(K("1655-01-01", "İngiliz seferi Jamaika'yı İspanya'dan aldı", "toprak-kazanc", 4, 3, ["ingiltere", "ispanya"],
    "Cromwell'in 'Batı Tasarısı' seferi Hispaniola'da bozguna uğrayınca Amiral William Penn ve General Robert Venables 1655 mayısında "
    "Jamaika'ya yöneldi; Santiago de la Vega direnişsiz ele geçirildi ve ada İngiliz Karayipleri'nin merkezine dönüştü.",
    "Britannica, «Jamaica: History» — britannica.com/place/Jamaica/History" + IKINCIL,
    etiket=["konu-askeri", "karayipler"], kapsam="dis", dosya="o", odak=["Santo Domingo", "Havana (La Habana)"],
    gun="Mayıs 1655 (kaynaklar iniş, teslim ve ilhak günlerini 10-25 Mayıs arasında farklı verir; gün kesinleştirilemedi)"))

A(K("1697-09-20", "Ryswick Antlaşması — Hispaniola'nın batısı Fransa'ya kaldı", "antlasma", 4, 3, ["ispanya", "fransa"],
    "Dokuz Yıl Savaşları'nı bitiren Ryswick barışı 20 Eylül 1697'de Fransa, İngiltere, İspanya ve Hollanda arasında imzalandı; "
    "İspanya, Hispaniola'nın batı üçte birini ve Tortuga'yı Fransa'ya bıraktı. Burada doğan Saint-Domingue, 1804'te Haiti olacaktı.",
    "Britannica, «Treaty of Rijswijk» — britannica.com/topic/Treaty-of-Rijswijk",
    etiket=["konu-siyasi", "karayipler", "saint-domingue"], kapsam="dis", dosya="o", odak=["Santo Domingo"]))

A(K("1762-08-13", "İngiltere Havana'yı ele geçirdi", "isgal", 4, 3, ["ispanya", "ingiltere"],
    "Yedi Yıl Savaşları'nda İngiliz kuvvetleri, 6 Haziran'dan beri süren kuşatmanın ardından 13 Ağustos 1762'de Havana'nın teslimini "
    "sağladı; şehir on bir ay İngiliz elinde kaldı ve 1763 Paris Antlaşması'yla Florida karşılığında İspanya'ya geri verildi.",
    "Kongre Kütüphanesi, In Custodia Legis, «How Havana Became British … For Eleven Months» — blogs.loc.gov/law/2022/01/"
    "how-havana-became-british-for-eleven-months",
    yer="", etiket=["konu-askeri", "karayipler", "yedi-yil-savaslari"], kapsam="dis", dosya="o"))

# ---------------------------------------------------------------------------------------------- mükerrer eleme
# Yazıldıktan sonra mukerrer.js taraması (t ±3 gün, tüm kronoloji/olay dosyaları + künye içi kronoloji) bunların
# ZATEN var olduğunu gösterdi; ikinci kez yazmak aynı olayı iki başlıkla göstermek olurdu (yasak §5.1).
MEVCUT = {
    "1608-07-03": "kronoloji_fransa.js: «Samuel de Champlain'in Québec'i kurması»",
    "1713-04-11": "kronoloji_fransa.js: «Utrecht Antlaşması»",
    "1762-08-13": "kronoloji_ispanya.js: «Havana'nın İngilizler tarafından ele geçirilmesi»",
    "1848-02-02": "devletler.js meksika künyesi: «Guadalupe Hidalgo Antlaşması Mexico City'de imzalandı…»",
    "1810-09-16": "devletler.js yeni-ispanya künyesi: «Rahip Hidalgo'nun Grito de Dolores çağrısıyla…»",
    "1824-10-04": "devletler.js meksika künyesi: «Federal cumhuriyet anayasası kabul edildi»",
    "1804-01-01": "devletler.js haiti künyesi: «Jean-Jacques Dessalines bağımsızlığı ilan etti»",
    "1692-09-14": "devletler.js pueblo-bagimsizligi künyesi: 1692-09-12 «Vargas … yeniden geçti» (aynı olay)",
}
# Yazılmaya değmez bulunanlar (mükerrer değil): kamera odağı verilemeyen ya da toprak değişimi olmayan maddeler
# ODAKSIZ tavanını (485, dondurulmuş) şişirir; odak_olc.py bunu ölçtü.
ELENEN = {
    "1682-04-09": "La Salle'ın Louisiana ilanı — 1682'de atlasta Mississippi havzasında hiçbir yerleşim yok; odak_yer/yer_id verilemedi",
    "1823-12-02": "Monroe Doktrini — toprak değişimi değil, atlasta Washington noktası yok; odak verilemedi",
}
ATILAN = [m for m in ITEMS if m["t"] in MEVCUT]
ITEMS[:] = [m for m in ITEMS if m["t"] not in MEVCUT and m["t"] not in ELENEN]

ZORUNLU = ["t", "b", "tur", "onem", "dunya", "kapsam", "etiket", "yer_id", "d", "kaynak"]
DOSYA = {"k": ("kronoloji_cok_kuzey_amerika.js", "KRONOLOJI_COK_KUZEY_AMERIKA",
               "KUZEY AMERİKA — ABD · Kanada · İspanyol Güneybatı · Yeni Fransa"),
         "o": ("kronoloji_cok_orta_amerika.js", "KRONOLOJI_COK_ORTA_AMERIKA",
               "ORTA AMERİKA — Meksika · Orta Amerika · Karayipler")}


def kunye_idleri():
    s = io.open(os.path.join(KOK, "data", "devletler.js"), encoding="utf-8").read()
    return set(re.findall(r'\bid\s*:\s*"([^"]+)"', s))


def dogrula():
    hata = []
    idler = kunye_idleri()
    gorulen = set()
    for m in ITEMS:
        for a in ZORUNLU:
            if a not in m:
                hata.append("%s %s: %s yok" % (m["t"], m["b"][:30], a))
        if not re.match(r"^\d{4}-\d\d-\d\d$", m["t"]):
            hata.append("%s: t biçimi" % m["t"])
        if not (1 <= m["onem"] <= 5 and 1 <= m["dunya"] <= 5):
            hata.append("%s: onem/dunya" % m["t"])
        for i in m["devletler"]:
            if i not in idler and i not in _ONERI:
                hata.append("%s: künye id yok ve önerilmemiş: %s" % (m["t"], i))
        k = (m["t"], m["b"])
        if k in gorulen:
            hata.append("mükerrer %s" % (k,))
        gorulen.add(k)
        if len(m["d"]) < 80:
            hata.append("%s: d çok kısa" % m["t"])
    return hata, idler


def js_yaz(kod):
    ad, glob, baslik = DOSYA[kod]
    L = [m for m in ITEMS if m["_dosya"] == kod]
    L.sort(key=lambda m: m["t"])
    out = ["// =====================================================================",
           "// %s · çok künyeli kronoloji (KRONO-AMERIKA-K-0929)" % baslik,
           "// =====================================================================",
           "// 🔴 ÜRETİLMİŞ DOSYA — elle düzenleme; üretici denetim/ARAC-KRONO-AMERIKA-K-0929-URET.py",
           "// window.%s — app.js cokTarafliKronolojiEkle: madde `devletler[]`deki HER künyeye EKLENİR" % glob,
           "// (ezmez; aynı t+b ikinci kez eklenmez). Künyesi olmayan id'ler (yeni-ispanya-ilk-donem ·",
           "// orta-amerika-federasyonu) önerilmiştir: denetim/KRONO-AMERIKA-K-0929-KUNYE.md — künye inince KENDİLİĞİNDEN bağlanır.",
           "", "window.%s = [" % glob]
    for i, m in enumerate(L):
        x = {k: v for k, v in m.items() if k != "_dosya"}
        out.append(json.dumps(x, ensure_ascii=False) + ("," if i < len(L) - 1 else ""))
    out.append("];")
    return ad, "\n".join(out) + "\n", len(L)


def main(argv):
    hata, idler = dogrula()
    sayim = {"k": 0, "o": 0}
    for m in ITEMS:
        sayim[m["_dosya"]] += 1
    print("madde: %d (kuzey %d · orta %d) · künye idleri okundu: %d · mükerrer olduğu için ATILAN: %d · elenen: %d"
          % (len(ITEMS), sayim["k"], sayim["o"], len(idler), len(ATILAN), len(ELENEN)))
    kunyesiz = sorted({i for m in ITEMS for i in m["devletler"] if i not in idler})
    print("önerilen (künyesi olmayan) id'ler: %s" % ", ".join(kunyesiz))
    if hata:
        print("🔴 %d HATA" % len(hata))
        for h in hata:
            print("  ", h)
        return 1
    print("✓ doğrulama temiz")
    if "--yaz" in argv:
        for kod in DOSYA:
            ad, metin, n = js_yaz(kod)
            yol = os.path.join(KOK, "data", ad)
            with io.open(yol, "w", encoding="utf-8", newline="\n") as f:
                f.write(metin)
            print("yazıldı: data/%s (%d madde, %d bayt)" % (ad, n, len(metin.encode("utf-8"))))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
