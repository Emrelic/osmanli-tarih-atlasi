// ============================================================================
// KİŞİ DİZİNİ — olaylarda geçen tarihî şahsiyetlerin sınıflandırılmış tablosu
// tur: padisah | sadrazam | vezir-pasa | komutan | denizci | alim | hanedan |
//      yabanci-hukumdar | yabanci-komutan | siyasi | mimar | edebiyatci
//      (son iki değer Oturum 5'in 2. faz eklerinde tanıtıldı — 5. boyut)
// Not: padişahların tam listesi data/padisahlar.js'tedir; buradaki tablo
// olay akışında adı geçen DİĞER figürleri ve seçme padişah-dışı kadroyu tutar.
// Satırlar başlık düzeyindedir; biyografi detayları sonraki fazlarda doldurulacak.
//
// id: (Oturum 5) benzersiz kişi kimliği — üretim kuralı
//   oturumlar/OTURUM-5-KIMLIK-KURALI.md'de. ETIKETLEME.md §5-6'daki kişi
//   ekseni bu alana dayanır.
// devlet: (Oturum 5) yabancı hükümdarlarda, data/devletler.js'teki ilgili
//   kaydın `id` alanıyla eşleşen serbest metin — ileride iki dizin bağlanacak.
//   Hanedan/devlet birden fazla ise en belirleyici olanı yazılır.
// f / t: (Oturum 5, 2. faz) doğum / ölüm yılı — YALNIZ yıl hassasiyetinde
//   (gün/ay uydurulmaz). Yalnız `donem` alanı KESİN YAŞAM ARALIĞI olduğu
//   ölçülmüş/bilinen kayıtlara eklendi; sadrazam/vezir gibi `donem`'i GÖREV
//   SÜRESİ olan kayıtlarda f/t ayrı araştırmayla dolduruldu ya da boş
//   bırakıldı — `donem`'i mekanik kopyalamak görev süresini yaşam sanma
//   hatasına düşerdi (bkz. OGRENILENLER.md §8, "uydurulmuş kesinlik").
// dogum_yer / dogum_lat / dogum_lon / olum_yer: (Oturum 5, 2. faz) yalnız
//   yüksek güvenle bilinen kayıtlarda dolduruldu; emin olunmayan hiçbir yer
//   uydurulmadı — çoğu kayıtta bu alanlar hâlâ BOŞ (bkz. OTURUM-5-ILERLEME.md).
// eser: (Oturum 5, 2. faz) bilim/sanat/mimarlık figürlerinde başlıca eser(ler),
//   dizi.
// ============================================================================
window.KISILER = [
// --- Sadrazamlar ---
{ id:"candarli-hayreddin-pasa", tur:"sadrazam", ad:"Çandarlı Hayreddin Paşa (Kara Halil)", t:"1387", donem:"1364–1387", not:"İlk büyük sadrazam ailesinin kurucusu; Rumeli fetihlerinin örgütleyicisi. Asıl adı Kara Halil'dir; oğlu Çandarlı Ali Paşa ve soyundan gelen Çandarlı Halil Paşa (İstanbul'un fethi sonrası azledilen) ile karıştırılmamalı" },
{ id:"candarli-halil-pasa", tur:"sadrazam", ad:"Çandarlı Halil Paşa", t:"1453", donem:"II. Murad'ın sonu – II. Mehmed'in ikinci cülûsu", not:"İstanbul kuşatmasına şüpheyle yaklaştığı için II. Mehmed tarafından fetihten hemen sonra, 30 Mayıs 1453'te azledildi, kırk gün sonra idam edildi" },
{ id:"mahmud-pasa", tur:"sadrazam", ad:"Mahmud Paşa (Velî)",             donem:"1456–1466, 1472–1474", not:"Fatih'in fetih kadrosunun başı" },
{ id:"pargali-ibrahim-pasa", tur:"sadrazam", ad:"Pargalı İbrahim Paşa", t:"1536", donem:"1523–1536", not:"Kanunî'nin makbul ve maktul veziri; Irakeyn seferinin yöneticisi" },
{ id:"sokullu-mehmed-pasa", tur:"sadrazam", ad:"Sokullu Mehmed Paşa", f:"1505", t:"1579", donem:"1565–1579", not:"Üç padişah devrinin kudretli sadrazamı" },
{ id:"koprulu-mehmed-pasa", tur:"sadrazam", ad:"Köprülü Mehmed Paşa", t:"1661", donem:"1656–1661", not:"Köprülüler devrinin kurucusu" },
{ id:"kopruluzade-fazil-ahmed-pasa", tur:"sadrazam", ad:"Köprülüzâde Fâzıl Ahmed Paşa", f:"1635", t:"1676", donem:"1661–1676", not:"Uyvar ve Kandiye fatihi" },
{ id:"merzifonlu-kara-mustafa-pasa", tur:"sadrazam", ad:"Merzifonlu Kara Mustafa Paşa", t:"1683", donem:"1676–1683", not:"II. Viyana kuşatmasının komutanı" },
{ id:"amcazade-huseyin-pasa", tur:"sadrazam", ad:"Amcazâde Hüseyin Paşa", t:"1702", donem:"1697–1702", not:"Karlofça sonrası toparlanmanın mimarı" },
{ id:"baltaci-mehmed-pasa", tur:"sadrazam", ad:"Baltacı Mehmed Paşa",            donem:"1704–1706, 1710–1711", not:"Prut zaferinin komutanı" },
{ id:"nevsehirli-damad-ibrahim-pasa", tur:"sadrazam", ad:"Nevşehirli Damad İbrahim Paşa", f:"1666", t:"1730", donem:"1718–1730", not:"Lâle Devri'nin yöneticisi" },
{ id:"damad-ali-pasa", tur:"sadrazam", ad:"Damad Ali Paşa (Şehid)", t:"1716", donem:"1713–1716", not:"Mora'yı geri alan sadrazam; Petrovaradin'de şehit" },
{ id:"alemdar-mustafa-pasa", tur:"sadrazam", ad:"Alemdar Mustafa Paşa",           donem:"1808", not:"II. Mahmud'u tahta çıkaran Rusçuk âyanı; Sened-i İttifak'ın mimarı" },
{ id:"mustafa-resid-pasa", tur:"sadrazam", ad:"Mustafa Reşid Paşa", f:"1800", t:"1858",            donem:"1800–1858 (sadrazamlık: 1846–1858 arası 6 kez)", not:"Tanzimat Fermanı'nın mimarı; İngiltere desteğinin sağlayıcısı" },
{ id:"ali-pasa", tur:"sadrazam", ad:"Âlî Paşa", f:"1814", t:"1871", dogum_yer:"İstanbul", olum_yer:"İstanbul",         donem:"1814–1871 (sadrazamlık: 1852–1871 arası 5 kez)", not:"Islahat Fermanı ve Tanzimat diplomasisinin yürütücüsü; 7 Eylül 1871'de öldü, Süleymaniye haziresine defnedildi" },
{ id:"midhat-pasa", tur:"sadrazam", ad:"Midhat Paşa",                    donem:"1872, 1876–1877", not:"Kanûn-ı Esâsî'nin mimarı" },
{ id:"huseyin-avni-pasa", tur:"sadrazam", ad:"Hüseyin Avni Paşa", f:"1820", t:"1876", donem:"1820–1876", not:"30 Mayıs 1876'da Abdülaziz'in tahttan indirilişini örgütleyen serasker; 16 Haziran 1876'da Midhat Paşa'nın konağında Çerkes Hasan Bey tarafından öldürüldü, Süleymaniye Camii haziresine defnedildi" },
{ id:"mutercim-rusdu-pasa", tur:"sadrazam", ad:"Mütercim Rüşdü Paşa", f:"1811", t:"1882", dogum_yer:"Ayandon (Sinop)", olum_yer:"Manisa", donem:"1811–1882", not:"30 Mayıs 1876'da Abdülaziz'i tahttan indiren kadronun sadrazamı; sonradan kararı benimsemediğini, padişahı uyarmaya çalıştığını ileri sürdü" },
// --- Vezirler ve paşalar ---
{ id:"lala-sahin-pasa", tur:"vezir-pasa", ad:"Lala Şâhin Paşa",              donem:"14. yy", not:"İlk Rumeli beylerbeyi; Edirne ve Filibe fetihleri" },
{ id:"gedik-ahmed-pasa", tur:"vezir-pasa", ad:"Gedik Ahmed Paşa",             donem:"15. yy", not:"Kefe ve Otranto seferlerinin komutanı" },
{ id:"lala-mustafa-pasa", tur:"vezir-pasa", ad:"Lala Mustafa Paşa",            donem:"16. yy", not:"Kıbrıs'ın fatihi" },
{ id:"biyikli-mehmed-pasa", tur:"vezir-pasa", ad:"Bıyıklı Mehmed Paşa",          donem:"16. yy", not:"Doğu Anadolu'nun katılmasını yöneten ilk Diyarbekir beylerbeyi" },
{ id:"sinan-pasa", tur:"vezir-pasa", ad:"Sinan Paşa (Koca)",            donem:"16. yy", not:"Tunus'un kesin fethi" },
{ id:"tiryaki-hasan-pasa", tur:"vezir-pasa", ad:"Tiryâki Hasan Paşa",           donem:"17. yy", not:"Kanije savunmasının kahramanı" },
{ id:"kemankes-kara-mustafa-pasa", tur:"vezir-pasa", ad:"Kemankeş Kara Mustafa Paşa",   donem:"17. yy", not:"Kasr-ı Şirin barışının yapıcısı" },
// --- Komutanlar ---
{ id:"suleyman-pasa", tur:"komutan", ad:"Süleyman Paşa (Orhan oğlu)",      donem:"14. yy", not:"Rumeli'ye geçişin öncüsü" },
{ id:"evrenos-bey", tur:"komutan", ad:"Evrenos Bey",                     donem:"14.-15. yy", not:"Rumeli uç beyi; Teselya fetihleri" },
{ id:"pasa-yigit-bey", tur:"komutan", ad:"Paşa Yiğit Bey",                  donem:"14.-15. yy", not:"Üsküp'ün fatihi" },
{ id:"turahanoglu-omer-bey", tur:"komutan", ad:"Turahanoğlu Ömer Bey",            donem:"15. yy", not:"Atina'nın fatihi" },
{ id:"gazi-osman-pasa", tur:"komutan", ad:"Gazi Osman Paşa",                 f:"1832", t:"1900", donem:"1832–1900", not:"Plevne savunması" },
{ id:"gazi-ahmed-muhtar-pasa", tur:"komutan", ad:"Gazi Ahmed Muhtar Paşa",          f:"1839", t:"1919", donem:"1839–1919", not:"93 Harbi Kafkas cephesi" },
{ id:"edhem-pasa", tur:"komutan", ad:"Edhem Paşa",                      donem:"19. yy", not:"1897 Dömeke zaferi" },
{ id:"halil-pasa", tur:"komutan", ad:"Halil Paşa (Kut)",                f:"1882", t:"1957", donem:"1882–1957", not:"Kûtülamâre zaferi" },
{ id:"fahreddin-pasa", tur:"komutan", ad:"Fahreddin Paşa (Çöl Kaplanı)",    f:"1868", t:"1948", donem:"1868–1948", not:"Medine müdafaası" },
{ id:"kazim-karabekir-pasa", tur:"komutan", ad:"Kâzım Karabekir Paşa",            f:"1882", t:"1948", donem:"1882–1948", not:"Doğu cephesi; Kars Antlaşması" },
{ id:"fevzi-pasa", tur:"komutan", ad:"Fevzi Paşa (Çakmak)",             f:"1876", t:"1950", donem:"1876–1950", not:"Millî Mücadele Genelkurmay Başkanı" },
{ id:"ismet-pasa", tur:"komutan", ad:"İsmet Paşa (İnönü)",              f:"1884", t:"1973", donem:"1884–1973", not:"Batı cephesi komutanı; Lozan başmurahhası" },
{ id:"enver-pasa", tur:"komutan", ad:"Enver Paşa",                      f:"1881", t:"1922", donem:"1881–1922", not:"Harbiye nâzırı; Edirne'nin geri alınışı" },
{ id:"mustafa-kemal-pasa", tur:"komutan", ad:"Mustafa Kemal Paşa (Atatürk)",    f:"1881", t:"1938", donem:"1881–1938", not:"Çanakkale, Millî Mücadele önderi, ilk cumhurbaşkanı" },
// --- Denizciler ---
{ id:"barbaros-hayreddin-pasa", tur:"denizci", ad:"Barbaros Hayreddin Paşa",         f:"1478", t:"1546", donem:"1478–1546", not:"Kaptan-ı deryâ; Preveze zaferi" },
{ id:"turgut-reis", tur:"denizci", ad:"Turgut Reis",                     f:"1485", t:"1565", donem:"1485–1565", not:"Trablusgarp'ın fatihi" },
{ id:"kilic-ali-pasa", tur:"denizci", ad:"Kılıç Ali Paşa (Uluç)",           f:"1500", t:"1587", donem:"1500–1587", not:"İnebahtı'dan filoyu kurtaran, Tunus'u geri alan kaptan-ı deryâ" },
{ id:"muezzinzade-ali-pasa", tur:"denizci", ad:"Müezzinzâde Ali Paşa",            t:"1571", donem:"ö. 1571", not:"İnebahtı'da şehit düşen kaptan-ı deryâ" },
// --- Âlimler ve mutasavvıflar ---
{ id:"seyh-edebali", tur:"alim", ad:"Şeyh Edebâli",                       t:"1326", donem:"ö. 1326", not:"Kuruluş devrinin manevi önderi" },
{ id:"davud-i-kayseri", tur:"alim", ad:"Dâvûd-i Kayserî",                    t:"1350", donem:"ö. 1350", not:"İlk Osmanlı medresesinin başmüderrisi" },
{ id:"seyh-bedreddin", tur:"alim", ad:"Şeyh Bedreddin",                     f:"1359", t:"1416", donem:"1359–1416", not:"Fakih-mutasavvıf; 1416 ayaklanması" },
{ id:"idris-i-bitlisi", tur:"alim", ad:"İdrîs-i Bitlisî",                    t:"1520", donem:"ö. 1520", not:"Doğu Anadolu'nun Osmanlı'ya bağlanmasının mimarı" },
{ id:"hoca-sadeddin-efendi", tur:"alim", ad:"Hoca Sâdeddin Efendi",               f:"1536", t:"1599", donem:"1536–1599", not:"Haçova'da orduyu toparlayan hoca; tarihçi" },
// --- Hanedan üyeleri ---
{ id:"cem-sultan", tur:"hanedan", ad:"Cem Sultan",                      f:"1459", t:"1495", donem:"1459–1495", not:"II. Bayezid'in taht rakibi; Avrupa'da rehin şehzade" },
{ id:"turhan-hatice-sultan", tur:"hanedan", ad:"Turhan Hatice Sultan",            f:"1627", t:"1683", donem:"1627–1683", not:"IV. Mehmed'in annesi; Köprülü'yü iktidara getiren vâlide" },
{ id:"abdulmecid-efendi", tur:"hanedan", ad:"Abdülmecid Efendi",               f:"1868", t:"1944", donem:"1868–1944", not:"Son halife (1922–1924)" },
// --- Yabancı hükümdarlar ---
{ id:"konstantinos11", tur:"yabanci-hukumdar", ad:"XI. Konstantinos", devlet:"bizans",       t:"1453", donem:"ö. 1453", not:"Son Bizans imparatoru" },
{ id:"timur", tur:"yabanci-hukumdar", ad:"Timur", devlet:"timurlu",                  f:"1336", t:"1405", donem:"1336–1405", not:"Ankara Savaşı'nın galibi" },
{ id:"uzun-hasan", tur:"yabanci-hukumdar", ad:"Uzun Hasan", devlet:"akkoyunlu",             f:"1423", t:"1478", donem:"1423–1478", not:"Akkoyunlu hükümdarı; Otlukbeli" },
{ id:"ismail", tur:"yabanci-hukumdar", ad:"Şah İsmail", devlet:"safevi",             f:"1487", t:"1524", donem:"1487–1524", not:"Safevî kurucusu; Çaldıran" },
{ id:"kansu-gavri", tur:"yabanci-hukumdar", ad:"Kansu Gavri", devlet:"memluk",            t:"1516", donem:"ö. 1516", not:"Mercidabık'ta ölen Memlûk sultanı" },
{ id:"tahmasb", tur:"yabanci-hukumdar", ad:"Şah Tahmasb", devlet:"safevi",            f:"1514", t:"1576", donem:"1514–1576", not:"Amasya barışının tarafı" },
{ id:"layos2", tur:"yabanci-hukumdar", ad:"Kral II. Layoş", devlet:"macaristan",         f:"1506", t:"1526", donem:"1506–1526", not:"Mohaç'ta ölen Macar kralı" },
{ id:"janos-zapolya", tur:"yabanci-hukumdar", ad:"János Zápolya",          f:"1487", t:"1540", donem:"1487–1540", not:"Osmanlı himayesindeki Macar kralı" },
{ id:"jan-sobieski", tur:"yabanci-hukumdar", ad:"Jan Sobieski", devlet:"lehistan",           f:"1629", t:"1696", donem:"1629–1696", not:"Viyana bozgununu getiren Leh kralı" },
{ id:"petro1", tur:"yabanci-hukumdar", ad:"Çar I. Petro", devlet:"rusya",           f:"1672", t:"1725", donem:"1672–1725", not:"Prut'ta kuşatılan Rus çarı" },
{ id:"katerina2", tur:"yabanci-hukumdar", ad:"II. Katerina", devlet:"rusya",           f:"1729", t:"1796", donem:"1729–1796", not:"Kırım'ı ilhak eden Rus çariçesi" },
{ id:"napolyon-bonapart", tur:"yabanci-hukumdar", ad:"Napolyon Bonapart",      f:"1769", t:"1821", donem:"1769–1821", not:"Mısır seferinin komutanı" },
{ id:"serif-huseyin", tur:"yabanci-hukumdar", ad:"Şerif Hüseyin", devlet:"hicaz-kralligi",          f:"1854", t:"1931", donem:"1854–1931", not:"1916 Hicaz isyanının önderi" },
// --- Mısır meselesi kadrosu (1801-1849) ---
{ id:"kavalali-mehmed-ali-pasa", tur:"vezir-pasa", ad:"Kavalalı Mehmed Ali Paşa",     f:"1769", t:"1849", donem:"1769–1849", not:"Mısır valisi (1805-1848); devlete iki kez savaş açan, Kahire'de hanedan kuran vali" },
{ id:"ibrahim-pasa", tur:"komutan",    ad:"İbrâhim Paşa (Kavalalı)",      f:"1789", t:"1848", donem:"1789–1848", not:"Mehmed Ali'nin oğlu; Necid, Mora ve Suriye harekâtlarının komutanı" },
{ id:"tosun-pasa", tur:"komutan",    ad:"Tosun Paşa",                   f:"1794", t:"1816", donem:"1794–1816", not:"Hicaz seferinde Medine ve Mekke'yi geri alan Mısır kumandanı" },
{ id:"ismail-kamil-pasa", tur:"komutan",    ad:"İsmâil Kâmil Paşa",            f:"1795", t:"1822", donem:"1795–1822", not:"Sudan'ı fetheden Mısır kumandanı; Şendî'de öldürüldü" },
{ id:"resid-mehmed-pasa", tur:"sadrazam",   ad:"Reşid Mehmed Paşa",            f:"1780", t:"1836", donem:"1780–1836", not:"Missolonghi'nin fatihi; Konya'da esir düşen sadrazam" },
{ id:"koca-husrev-pasa", tur:"sadrazam",   ad:"Koca Hüsrev Paşa",             f:"1769", t:"1855", donem:"1769–1855", not:"Devrik Mısır valisi, sonra sadrazam; Mehmed Ali'nin baş hasmı" },
{ id:"hafiz-mehmed-pasa", tur:"vezir-pasa", ad:"Hafız Mehmed Paşa",            donem:"?–1845",    not:"Nizip'te orduyu kaybeden serasker" },
{ id:"ahmed-fevzi-pasa", tur:"denizci",    ad:"Ahmed Fevzi Paşa (Firârî)",    donem:"?–1858",    not:"1839'da donanmayı İskenderiye'ye götürüp teslim eden kaptan-ı derya" },
{ id:"omer-mekrem", tur:"alim",       ad:"Ömer Mekrem",                  f:"1755", t:"1822", donem:"1755–1822", not:"Kahire nakîbüleşrafı; 1805'te Mehmed Ali'yi valiliğe getiren halk hareketinin önderi" },
// --- Yabancı komutanlar ---
{ id:"abdullah-b-suud", tur:"yabanci-komutan", ad:"Abdullah b. Suûd",        donem:"?–1818",    not:"Son Dir'iye emîri; kale düşünce İstanbul'a gönderildi" },
{ id:"codrington", tur:"yabanci-komutan", ad:"Amiral Codrington",       f:"1770", t:"1851", donem:"1770–1851", not:"Navarin baskınının ve 1828 İskenderiye Sözleşmesi'nin İngiliz amirali" },
{ id:"napier", tur:"yabanci-komutan", ad:"Commodore Napier",        f:"1786", t:"1860", donem:"1786–1860", not:"Akkâ bombardımanı ve İskenderiye Konvansiyonu" },
{ id:"helmuth-von-moltke", tur:"yabanci-komutan", ad:"Helmuth von Moltke",      f:"1800", t:"1891", donem:"1800–1891", not:"Nizip'te Osmanlı ordusunda müşavir Prusyalı subay" },
{ id:"palmerston", tur:"siyasi",     ad:"Lord Palmerston",              f:"1784", t:"1865", donem:"1784–1865", not:"Mısır meselesinde Osmanlı'yı destekleyen İngiliz dışişleri bakanı" },
{ id:"hunyadi-yanos", tur:"yabanci-komutan", ad:"Hunyadi Yanoş",           f:"1406", t:"1456", donem:"1406–1456", not:"Varna ve II. Kosova'nın Macar komutanı" },
{ id:"andrea-doria", tur:"yabanci-komutan", ad:"Andrea Doria",            f:"1466", t:"1560", donem:"1466–1560", not:"Preveze'de yenilen amiral" },
{ id:"don-juan", tur:"yabanci-komutan", ad:"Don Juan",                f:"1547", t:"1578", donem:"1547–1578", not:"İnebahtı'nın galip amirali" },
{ id:"francesco-morosini", tur:"yabanci-komutan", ad:"Francesco Morosini",      f:"1619", t:"1694", donem:"1619–1694", not:"Kandiye'yi teslim eden Venedik komutanı" },
{ id:"eugen", tur:"yabanci-komutan", ad:"Prens Eugen",             f:"1663", t:"1736", donem:"1663–1736", not:"1717 Belgrad'ın fatihi" },
{ id:"nelson", tur:"yabanci-komutan", ad:"Amiral Nelson",           f:"1758", t:"1805", donem:"1758–1805", not:"Ebûkır baskını" },
{ id:"allenby", tur:"yabanci-komutan", ad:"General Allenby",         f:"1861", t:"1936", donem:"1861–1936", not:"Kudüs ve Filistin harekâtı" },
{ id:"townshend", tur:"yabanci-komutan", ad:"General Townshend",       f:"1861", t:"1924", donem:"1861–1924", not:"Kût'ta teslim olan İngiliz komutan" },
// --- Siyasi figürler ---
{ id:"patrona-halil", tur:"siyasi", ad:"Patrona Halil",                    t:"1730", donem:"ö. 1730", not:"1730 ayaklanmasının önderi" },
{ id:"kabakci-mustafa", tur:"siyasi", ad:"Kabakçı Mustafa",                  t:"1808", donem:"ö. 1808", not:"1807 ayaklanmasının önderi" },
{ id:"milos-obrenovic", tur:"siyasi", ad:"Miloš Obrenović",                  f:"1780", t:"1860", donem:"1780–1860", not:"Özerk Sırbistan'ın ilk prensi" },
{ id:"urabi-pasa", tur:"siyasi", ad:"Urâbî Paşa",                       f:"1841", t:"1911", donem:"1841–1911", not:"Mısır millî hareketinin önderi" },
{ id:"t-e-lawrence", tur:"siyasi", ad:"T. E. Lawrence",                   f:"1888", t:"1935", donem:"1888–1935", not:"Arap isyanındaki İngiliz ajanı" },
{ id:"hasan-tahsin", tur:"siyasi", ad:"Hasan Tahsin",                     f:"1888", t:"1919", donem:"1888–1919", not:"İzmir'de ilk kurşun" },

// ============================================================================
// OTURUM 5 — DÜNYA HÜKÜMDARLARI (data/devletler.js kronolojisinden çıkarıldı)
// ============================================================================

// --- Parti 1: Safevî / Akkoyunlu / Karakoyunlu / Memlûk ---
{ id:"abbas1", tur:"yabanci-hukumdar", ad:"Şah I. Abbas",            devlet:"safevi",      f:"1571", t:"1629", donem:"1571–1629 (saltanat 1587–1629)", not:"Safevî Devleti'ni ordu ve idare reformlarıyla zirveye taşıdı; başkenti İsfahan'a taşıdı, 1590'da Tebriz-Şirvan'ı Osmanlı'ya bıraktı, 1603'te geri aldı" },
{ id:"abbas2", tur:"yabanci-hukumdar", ad:"Şah II. Abbas",           devlet:"safevi",      f:"1633", t:"1666", donem:"1633–1666 (saltanat 1642–1666)", not:"1638'de Bağdat'ı Osmanlı'dan geri alan seferin ardından tahta çıktı, Kasr-ı Şirin barışını (1639) yönetti" },
{ id:"suleyman", tur:"yabanci-hukumdar", ad:"Şah Süleyman (Safî II)",  devlet:"safevi",      f:"1647", t:"1694", donem:"1647–1694 (saltanat 1666–1694)", not:"Safevî gerilemesinin belirginleştiği, dış siyasette pasif dönemin hükümdarı" },
{ id:"sultan-huseyin", tur:"yabanci-hukumdar", ad:"Şah Sultan Hüseyin",      devlet:"safevi",      f:"1668", t:"1726", donem:"1668–1726 (saltanat 1694–1722)", not:"Son fiilî hüküm süren Safevî şahı; 1722 Afgan (Gilzai) istilasında İsfahan'ın düşüşüyle tahttan indirildi" },
{ id:"kara-yuluk-osman-bey", tur:"yabanci-hukumdar", ad:"Kara Yülük Osman Bey",    devlet:"akkoyunlu",   t:"1435", donem:"ö. 1435", not:"Akkoyunlu Devleti'nin kurucusu; Diyarbekir merkezli beyliği bölgesel güç hâline getirdi" },
{ id:"yakub-bey", tur:"yabanci-hukumdar", ad:"Yakub Bey (Akkoyunlu)",   devlet:"akkoyunlu",   donem:"saltanat 1478–1490", not:"Uzun Hasan'ın oğlu ve halefi; babasının Otlukbeli sonrası topraklarını bir süre daha ayakta tuttu" },
{ id:"kara-yusuf", tur:"yabanci-hukumdar", ad:"Kara Yusuf",              devlet:"karakoyunlu", t:"1420", donem:"ö. 1420", not:"Timur'a karşı direnen, 1410'da Bağdat'ı alan Karakoyunlu hükümdarı" },
{ id:"cihan-sah", tur:"yabanci-hukumdar", ad:"Cihan Şah",               devlet:"karakoyunlu", donem:"saltanat 1438–1467", not:"Karakoyunlu Devleti'ni İran'ın büyük bölümüne yayan en güçlü hükümdarı; Uzun Hasan'a yenilip öldürüldü" },
{ id:"baybars1", tur:"yabanci-hukumdar", ad:"I. Baybars (Zâhir Baybars)", devlet:"memluk",   f:"1223", t:"1277", donem:"1223–1277 (saltanat 1260–1277)", not:"Ayn Câlût'ta Moğolları durduran, Haçlılara karşı sistemli seferler düzenleyen Memlûk sultanlarının en güçlüsü" },
{ id:"zahir-berkuk", tur:"yabanci-hukumdar", ad:"Zâhir Berkuk",            devlet:"memluk",     t:"1399", donem:"ö. 1399 (saltanat 1382–1399)", not:"Burci (Çerkes) Memlûk hanedanının kurucusu sultanı" },
{ id:"barsbay", tur:"yabanci-hukumdar", ad:"Sultan Barsbay",          devlet:"memluk",     donem:"saltanat 1422–1438", not:"Kıbrıs Krallığı'nı vasal hâline getiren, Kızıldeniz ticaretini tekelleştiren Memlûk sultanı" },
{ id:"kayitbay", tur:"yabanci-hukumdar", ad:"Sultan Kayıtbay",         devlet:"memluk",     donem:"saltanat 1468–1496", not:"Fâtih ve II. Bayezid dönemi Osmanlı-Memlûk Çukurova savaşlarının (1485-1491) muhatabı" },
{ id:"tomanbay", tur:"yabanci-hukumdar", ad:"Tomanbay (II. Tomanbay)", devlet:"memluk",     t:"1517", donem:"ö. 1517", not:"Son Memlûk sultanı; Ridâniye'de Yavuz'a yenilip Kahire'de asıldı" },

// --- Parti 2: Habsburg / Macaristan / Lehistan / Venedik ---
{ id:"ferdinand1", tur:"yabanci-hukumdar", ad:"I. Ferdinand (Habsburg)", devlet:"habsburg",  f:"1503", t:"1564", donem:"1503–1564 (saltanat 1526–1564)", not:"Mohaç sonrası Bohemya-Macaristan tacını alan, I. Viyana Kuşatması'nı (1529) savunan Habsburg hükümdarı; 1556'da Kutsal Roma imparatoru oldu" },
{ id:"karl5", tur:"yabanci-hukumdar", ad:"V. Karl (Şarlken)",       devlet:"habsburg",  f:"1500", t:"1558", donem:"1500–1558 (saltanat 1519–1556)", not:"Kutsal Roma imparatoru ve İspanya kralı; Kanunî'nin Akdeniz ve Orta Avrupa'daki başlıca rakibi, 1535'te Tunus'u aldı" },
{ id:"rudolf2", tur:"yabanci-hukumdar", ad:"II. Rudolf",               devlet:"habsburg",  f:"1552", t:"1612", donem:"1552–1612 (saltanat 1576–1612)", not:"1606 Zitvatorok Antlaşması'nı imzalayan Kutsal Roma imparatoru; Osmanlı'ya protokolde ilk kez eşit statü tanındı" },
{ id:"leopold1", tur:"yabanci-hukumdar", ad:"I. Leopold",               devlet:"habsburg",  f:"1640", t:"1705", donem:"1640–1705 (saltanat 1658–1705)", not:"II. Viyana Kuşatması'nı (1683) atlatan, Kutsal İttifak savaşlarını ve Karlofça'ya (1699) giden süreci yöneten imparator" },
{ id:"maria-theresia", tur:"yabanci-hukumdar", ad:"Maria Theresia",           devlet:"habsburg",  f:"1717", t:"1780", donem:"1717–1780 (saltanat 1740–1780)", not:"Habsburg topraklarının tek kadın hükümdarı; döneminde Osmanlı sınırında görece durgunluk yaşandı" },
{ id:"josef2", tur:"yabanci-hukumdar", ad:"II. Josef",                devlet:"habsburg",  f:"1741", t:"1790", donem:"1741–1790 (saltanat 1780–1790)", not:"1787-1791 Osmanlı-Avusturya Savaşı'nı başlatan reformcu imparator" },
{ id:"franz2", tur:"yabanci-hukumdar", ad:"II. Franz (I. Franz)",     devlet:"habsburg",  f:"1768", t:"1835", donem:"1768–1835 (saltanat 1792–1835)", not:"Son Kutsal Roma imparatoru; 1804'te ayrı Avusturya İmparatorluğu'nu ilan etti" },
{ id:"matyas-corvinus", tur:"yabanci-hukumdar", ad:"Mátyás Corvinus",          devlet:"macaristan", f:"1443", t:"1490", donem:"1443–1490 (saltanat 1458–1490)", not:"Hunyadi Yanoş'un oğlu; Macaristan'ı Orta Avrupa'nın en güçlü krallığına dönüştüren hükümdar" },
{ id:"zygmunt3", tur:"yabanci-hukumdar", ad:"III. (Vasa) Zygmunt",      devlet:"lehistan",  f:"1566", t:"1632", donem:"1566–1632 (saltanat 1587–1632)", not:"1620-21 Hotin/Ţuţora savaşları döneminin Leh-Litvanya kralı" },
{ id:"michal-korybut-wisniowiecki", tur:"yabanci-hukumdar", ad:"Michał Korybut Wiśniowiecki", devlet:"lehistan", f:"1640", t:"1673", donem:"1640–1673 (saltanat 1669–1673)", not:"1672 Bucaş Antlaşması'yla Podolya'yı Osmanlı'ya bırakan kral" },
{ id:"vladislav2", tur:"yabanci-hukumdar", ad:"II. Vladislav (Jagellon)", devlet:"bohemya",   t:"1516", donem:"ö. 1516 (saltanat 1471–1516)", not:"Bohemya ve Macaristan tahtlarını birleştiren Jagellon kralı; oğlu II. Layoş Mohaç'ta öldü" },
{ id:"enrico-dandolo", tur:"yabanci-hukumdar", ad:"Enrico Dandolo",           devlet:"venedik",   t:"1205", donem:"ö. 1205 (doçluk 1192–1205)", not:"IV. Haçlı Seferi'ni İstanbul'a yönlendirip Bizans'ın yağmalanmasını örgütleyen Venedik doçu" },

// --- Parti 3: Rusya / Kırım / Altın Orda ardılları ---
{ id:"ivan4", tur:"yabanci-hukumdar", ad:"IV. İvan (Korkunç)",       devlet:"rusya",     f:"1530", t:"1584", donem:"1530–1584 (saltanat 1547–1584)", not:"1547'de \"Çar\" unvanını alan, Kazan ve Astarhan'ı ilhak eden, Osmanlı ile ilk çatışmaları (1568-69 Astarhan seferi) yaşayan hükümdar" },
{ id:"mihail-fyodorovic", tur:"yabanci-hukumdar", ad:"Mihail Fyodoroviç",        devlet:"rusya",     f:"1596", t:"1645", donem:"1596–1645 (saltanat 1613–1645)", not:"Romanov hanedanının kurucusu çarı; Fetret (Smuta) döneminin ardından tahta çıktı" },
{ id:"aleksandr1", tur:"yabanci-hukumdar", ad:"I. Aleksandr",             devlet:"rusya",     f:"1777", t:"1825", donem:"1777–1825 (saltanat 1801–1825)", not:"Napolyon savaşlarını yöneten, 1812 Bükreş Antlaşması'yla Besarabya'yı alan çar" },
{ id:"nikolay1", tur:"yabanci-hukumdar", ad:"I. Nikolay",               devlet:"rusya",     f:"1796", t:"1855", donem:"1796–1855 (saltanat 1825–1855)", not:"Kırım Savaşı'nı (1853) başlatan, savaş sürerken ölen çar" },
{ id:"nikolay2", tur:"yabanci-hukumdar", ad:"II. Nikolay",              devlet:"rusya",     f:"1868", t:"1918", donem:"1868–1918 (saltanat 1894–1917)", not:"Son Rus çarı; 93 Harbi sonrası dönemde I. Dünya Savaşı'na girdi, 1917'de tahttan çekildi" },
{ id:"haci-giray", tur:"yabanci-hukumdar", ad:"Hacı Giray",               devlet:"kirim",     t:"1466", donem:"ö. 1466 (saltanat 1441–1466)", not:"Kırım Hanlığı'nın kurucusu; Altın Orda'dan bağımsızlığını ilan etti" },
{ id:"mengli-giray1", tur:"yabanci-hukumdar", ad:"I. Mengli Giray",          devlet:"kirim",     t:"1515", donem:"ö. 1515 (saltanat 1478–1515, aralıklı)", not:"1475 Kefe'nin fethinden sonra Osmanlı himayesini kabul eden, hanlığı Osmanlı'nın en sadık vasalı hâline getiren han" },
{ id:"devlet-giray", tur:"yabanci-hukumdar", ad:"Devlet Giray",             devlet:"kirim",     t:"1577", donem:"ö. 1577 (saltanat 1551–1577)", not:"1571'de Moskova'yı yakan Kırım hanı" },
{ id:"batu-han", tur:"yabanci-hukumdar", ad:"Batu Han",                 devlet:"altinorda", t:"1255", donem:"ö. 1255", not:"Cengiz Han'ın torunu; Altın Orda'nın kurucusu" },
{ id:"ulug-muhammed", tur:"yabanci-hukumdar", ad:"Uluğ Muhammed",            devlet:"kazan",     t:"1445", donem:"ö. yak. 1445", not:"Altın Orda hanı iken Kazan Hanlığı'nı kurdu" },
{ id:"kucum-han", tur:"yabanci-hukumdar", ad:"Küçüm Han",                devlet:"sibir",     t:"1598", donem:"ö. yak. 1598", not:"Sibir Hanlığı'nın son hükümdarı; Rus (Yermak) ilerleyişine karşı uzun süre direndi" },
{ id:"edigu", tur:"yabanci-hukumdar", ad:"Edigü",                    devlet:"nogay",     t:"1420", donem:"ö. 1420", not:"Nogay Ordası'nın çekirdeğini oluşturan Mangıt beyi" },

// --- Parti 4: Batı Avrupa — Fransa, İspanya, İngiltere, Papalık ---
{ id:"francois1", tur:"yabanci-hukumdar", ad:"I. François",              devlet:"fransa",    f:"1494", t:"1547", donem:"1494–1547 (saltanat 1515–1547)", not:"1536'da Kanunî ile Kapitülasyonlar'ı imzalayan, Habsburg'a karşı Osmanlı ile fiilî ittifak arayan Fransız kralı" },
{ id:"louis14", tur:"yabanci-hukumdar", ad:"XIV. Louis",               devlet:"fransa",    f:"1638", t:"1715", donem:"1638–1715 (saltanat 1643–1715)", not:"\"Güneş Kral\"; uzun saltanatında Fransa-Osmanlı ticarî ve diplomatik ilişkileri sürekli işledi" },
{ id:"louis16", tur:"yabanci-hukumdar", ad:"XVI. Louis",               devlet:"fransa",    f:"1754", t:"1793", donem:"1754–1793 (saltanat 1774–1792)", not:"Fransız Devrimi'nde tahttan indirilen, krallığın ilgasıyla (1792) hükümdarlığı sona eren son eski rejim kralı" },
{ id:"felipe2", tur:"yabanci-hukumdar", ad:"II. Felipe",               devlet:"ispanya",   f:"1527", t:"1598", donem:"1527–1598 (saltanat 1556–1598)", not:"1571 İnebahtı'da Kutsal İttifak donanmasını finanse eden ve yöneten İspanya kralı; Akdeniz'de Osmanlı'nın başlıca deniz rakibi" },
{ id:"elizabeth1", tur:"yabanci-hukumdar", ad:"I. Elizabeth",             devlet:"ingiltere", f:"1533", t:"1603", donem:"1533–1603 (saltanat 1558–1603)", not:"1581'de Levant Company'nin kuruluşuyla Osmanlı ile ticarî kapitülasyon ilişkisini başlatan İngiltere kraliçesi" },
{ id:"victoria", tur:"yabanci-hukumdar", ad:"Kraliçe Victoria",         devlet:"ingiltere", f:"1819", t:"1901", donem:"1819–1901 (saltanat 1837–1901)", not:"1878'de Kıbrıs'ın idaresini devralan, 1877'de \"Hindistan İmparatoriçesi\" unvanını alan İngiltere kraliçesi" },
{ id:"george5", tur:"yabanci-hukumdar", ad:"V. George",                devlet:"ingiltere", f:"1865", t:"1936", donem:"1865–1936 (saltanat 1910–1936)", not:"I. Dünya Savaşı'nda Osmanlı'ya karşı savaşan İngiltere kralı" },
{ id:"pius5", tur:"yabanci-hukumdar", ad:"Papa V. Pius",             devlet:"papalik",   f:"1504", t:"1572", donem:"1504–1572 (papalık 1566–1572)", not:"1571'de Kutsal İttifak'ı kurup İnebahtı zaferini örgütleyen papa" },

// --- Parti 5: Balkan devletleri — Sırp, Bulgar, Bosna, Eflak, Boğdan, Yunanistan ---
{ id:"stefan-lazarevic", tur:"yabanci-hukumdar", ad:"Stefan Lazarević",         devlet:"sirp-despotlugu", t:"1427", donem:"ö. 1427", not:"Sırp Despotluğu'nun kurucusu; Ankara Savaşı'nda Yıldırım Bayezid'in yanında savaştı, sonra Osmanlı vasalı despot oldu" },
{ id:"djuradj-brankovic", tur:"yabanci-hukumdar", ad:"Đurađ Branković",          devlet:"sirp-despotlugu", t:"1456", donem:"ö. 1456 (despotluk 1427–1456)", not:"Semendire'yi başkent yapan, II. Murad döneminde Osmanlı ile Macaristan arasında denge siyaseti izleyen Sırp despotu" },
{ id:"kara-yorgi", tur:"yabanci-hukumdar", ad:"Kara Yorgi (Đorđe Petrović)", devlet:"sirbistan-prensligi", f:"1768", t:"1817", donem:"1768–1817", not:"1804 Birinci Sırp İsyanı'nın önderi" },
{ id:"ivan-sisman", tur:"yabanci-hukumdar", ad:"İvan Şişman",              devlet:"bulgar-carligi", t:"1395", donem:"ö. 1395", not:"İkinci Bulgar İmparatorluğu'nun son çarı; Niğbolu Haçlı Seferi arifesinde Osmanlı'ya karşı direndi" },
{ id:"tvrtko1", tur:"yabanci-hukumdar", ad:"Tvrtko I",                 devlet:"bosna-kralligi", t:"1391", donem:"ö. 1391 (krallık 1377–1391)", not:"Bosna Krallığı'nı ilan eden ilk Bosna kralı" },
{ id:"basarab1", tur:"yabanci-hukumdar", ad:"Basarab I",                devlet:"eflak",     t:"1352", donem:"ö. yak. 1352", not:"Eflak Voyvodalığı'nın Macar tâbiliğinden bağımsızlığını kazanan kurucu voyvodası" },
{ id:"mircea", tur:"yabanci-hukumdar", ad:"Mircea (cel Bătrân)",      devlet:"eflak",     t:"1418", donem:"ö. 1418 (voyvodalık 1386–1418)", not:"1395 Rovine Savaşı'nda Yıldırım Bayezid'e karşı direnen, sonra Osmanlı'ya haraca bağlanan Eflak voyvodası" },
{ id:"vlad3", tur:"yabanci-hukumdar", ad:"III. Vlad (Kazıklı Voyvoda / Drakula)", devlet:"eflak", donem:"1431–1476/77", not:"1462'de Fatih'e karşı gece baskını düzenleyen, haraç ve elçi katliyle vassallığı reddeden Eflak voyvodası; aynı yıl Fatih'in seferiyle tahttan indirildi" },
{ id:"bogdan1", tur:"yabanci-hukumdar", ad:"Bogdan I",                 devlet:"bogdan",    t:"1367", donem:"ö. 1367", not:"Boğdan Voyvodalığı'nın kurucusu" },
{ id:"stefan-cel-mare", tur:"yabanci-hukumdar", ad:"Ştefan cel Mare",          devlet:"bogdan",    f:"1433", t:"1504", donem:"1433–1504 (voyvodalık 1457–1504)", not:"1475'te Vaslui'de Osmanlı ordusunu yenen, kısa süre sonra Valea Albă'da yenilen Boğdan voyvodası" },
{ id:"othon1", tur:"yabanci-hukumdar", ad:"I. Othon (Otto)",          devlet:"yunanistan", f:"1815", t:"1867", donem:"1815–1867 (saltanat 1832–1862)", not:"Bağımsız Yunanistan'ın Bavyeralı ilk kralı" },

// --- Parti 6: Arap ve İran dünyası — Suûdî, Şammar, Yemen, Umman, Kaçar, Afşar ---
{ id:"nadir-sah", tur:"yabanci-hukumdar", ad:"Nadir Şah",                devlet:"afsar",     f:"1688", t:"1747", donem:"1688–1747 (saltanat 1736–1747)", not:"Safevî hanedanına resmen son veren, Hindistan'a kadar sefer düzenleyen İran hükümdarı; 1746 Kerden Antlaşması'yla Osmanlı sınırını 1639 hattına döndürdü" },
{ id:"aga-muhammed-han-kacar", tur:"yabanci-hukumdar", ad:"Ağa Muhammed Han Kaçar",   devlet:"kacar",     t:"1797", donem:"ö. 1797 (saltanat 1789–1797)", not:"Kaçar hanedanının kurucusu; Zend hanedanına son verip İran'ı yeniden birleştirdi" },
{ id:"feth-ali-sah", tur:"yabanci-hukumdar", ad:"Feth Ali Şah",             devlet:"kacar",     f:"1772", t:"1834", donem:"1772–1834 (saltanat 1797–1834)", not:"1821-23 son Osmanlı-İran savaşını ve 1823 Erzurum Antlaşması'nı yöneten Kaçar şahı" },
{ id:"muhammed-sah-kacar", tur:"yabanci-hukumdar", ad:"Muhammed Şah Kaçar",       devlet:"kacar",     f:"1808", t:"1848", donem:"1808–1848 (saltanat 1834–1848)", not:"1847 İkinci Erzurum Antlaşması'nı (Şattülarap sınır anlaşmazlığının çözümü) imzalayan şah" },
{ id:"nasiruddin-sah", tur:"yabanci-hukumdar", ad:"Nâsırüddin Şah",           devlet:"kacar",     f:"1831", t:"1896", donem:"1831–1896 (saltanat 1848–1896)", not:"Kaçar Devleti'nin en uzun saltanat süren şahı" },
{ id:"muhammed-bin-suud", tur:"yabanci-hukumdar", ad:"Muhammed bin Suûd",        devlet:"suud-birinci", t:"1765", donem:"ö. 1765", not:"1744'te Muhammed b. Abdülvehhâb ile kurduğu ittifakla I. Suûdî Devleti'ni kuran Dir'iye emiri" },
{ id:"muhammed-bin-abdulvehhab", tur:"alim", ad:"Muhammed bin Abdülvehhâb",             devlet:"suud-birinci", f:"1703", t:"1792", donem:"1703–1792", not:"Vehhâbî hareketinin kurucusu dinî önder; Muhammed bin Suûd ile ittifakı I. Suûdî Devleti'nin temelini attı" },
{ id:"suud-bin-abdulaziz", tur:"yabanci-hukumdar", ad:"Suûd bin Abdülazîz",       devlet:"suud-birinci", t:"1814", donem:"ö. 1814 (emirlik 1803–1814)", not:"Mekke ve Medine'yi ele geçirip I. Suûdî Devleti'ni en geniş sınırlarına ulaştıran emir" },
{ id:"turki-bin-abdullah", tur:"yabanci-hukumdar", ad:"Türkî bin Abdullah",       devlet:"suud-ikinci", t:"1834", donem:"ö. 1834", not:"II. Suûdî Devleti'ni kurup Riyad'ı geri alan emir" },
{ id:"abdulaziz-bin-suud", tur:"yabanci-hukumdar", ad:"Abdülazîz bin Suûd (İbn Suûd)", devlet:"suud-ikinci", f:"1876", t:"1953", donem:"1876–1953", not:"1902'de Riyad'ı alarak üçüncü Suûdî devletini kuran, 1920'de Asîr'i, 1921'de Şammar'ı (Hâil) topraklarına katan emir; site ufkunun (1923) dışında 1932'de Suûdî Arabistan Krallığı'nı ilan etti" },
{ id:"muhammed-bin-resid", tur:"yabanci-hukumdar", ad:"Muhammed bin Reşid",       devlet:"sammar",    t:"1897", donem:"ö. 1897", not:"1891 Müleyde zaferiyle Necid'i ele geçiren Şammar (Hâil) emiri" },
{ id:"yahya-hamiduddin", tur:"yabanci-hukumdar", ad:"İmam Yahyâ Hamîdüddin",    devlet:"yemen-zeydi", f:"1869", t:"1948", donem:"1869–1948", not:"1911 Da'an Antlaşması'yla imamlığına geniş özerklik tanınan Zeydî imamı" },
{ id:"ahmed-bin-said", tur:"yabanci-hukumdar", ad:"Ahmed bin Said (Âl Bû Saîd)", devlet:"umman",  t:"1783", donem:"ö. 1783", not:"Portekizlileri Maskat'tan kesin olarak atan, Bû Saîd hanedanını kuran Umman imamı/sultanı" },
{ id:"said-bin-sultan", tur:"yabanci-hukumdar", ad:"Said bin Sultan",          devlet:"umman-zengibar", f:"1791", t:"1856", donem:"1791–1856", not:"Başkentini Zengibar'a taşıyan, Umman-Zengibar sultanlığını Doğu Afrika kıyısına yayan hükümdar; ölümünde devlet iki ayrı sultanlığa bölündü" },

// --- Parti 7: Kuzey Afrika ocakları, Fas, Sudan, Habeşistan ---
{ id:"huseyin-bin-ali", tur:"yabanci-hukumdar", ad:"Hüseyin bin Ali",          devlet:"tunus-ocagi", t:"1740", donem:"ö. 1740 (beylik 1705–1735)", not:"Tunus Ocağı'nda kalıcı bey hanedanını (Hüseynîler) kuran, Osmanlı'ya bağlı özerkliği pekiştiren bey" },
{ id:"ahmed-karamanli", tur:"yabanci-hukumdar", ad:"Ahmed Karamanlı",          devlet:"trablusgarp-ocagi", t:"1745", donem:"ö. 1745 (beylik 1711–1745)", not:"Trablusgarp'ta özerk Karamanlı hanedanlığını kuran ocak beyi" },
{ id:"ahmed-el-mansur", tur:"yabanci-hukumdar", ad:"Ahmed el-Mansûr",          devlet:"fas",       f:"1549", t:"1603", donem:"1549–1603 (saltanat 1578–1603)", not:"1578 Üç Kral Savaşı'nda Osmanlı destekli tahta çıkan, 1591'de Songhay İmparatorluğu'nu yıkan Sâdî sultanı" },
{ id:"muhammed-ahmed", tur:"yabanci-hukumdar", ad:"Muhammed Ahmed (Mehdî)",   devlet:"mehdi",     f:"1844", t:"1885", donem:"1844–1885", not:"Kendini Mehdî ilan edip Sudan'da Mısır-İngiliz idaresine son veren dinî-siyasi önder" },
{ id:"abdullah-et-teayisi", tur:"yabanci-hukumdar", ad:"Halife Abdullah et-Teâyişî", devlet:"mehdi",   t:"1899", donem:"ö. 1899 (saltanat 1885–1898)", not:"Muhammed Ahmed'in halefi; Kitchener'in Ömdürman zaferiyle Mehdî Devleti onun döneminde yıkıldı" },
{ id:"amara-dunkas", tur:"yabanci-hukumdar", ad:"Amara Dunkas",             devlet:"funj",      donem:"16. yy başı", not:"Func (Sennâr) Sultanlığı'nın kurucusu" },
{ id:"ahmed-gran", tur:"yabanci-hukumdar", ad:"Ahmed Gran (Ahmed b. İbrâhim el-Gâzî)", devlet:"adal", t:"1543", donem:"ö. 1543", not:"Osmanlı'dan top-tüfek desteği alarak Habeşistan'ı istila eden Adal komutanı-imamı; Wayna Daga'da öldü, istila çöktü" },
{ id:"gelawdewos", tur:"yabanci-hukumdar", ad:"Gelawdewos",               devlet:"habesistan", t:"1559", donem:"ö. 1559 (saltanat 1540–1559)", not:"1543 Wayna Daga'da Ahmed Gran'ı yenip Habeş bağımsızlığını kurtaran imparator" },
{ id:"menelik2", tur:"yabanci-hukumdar", ad:"II. Menelik",              devlet:"habesistan", f:"1844", t:"1913", donem:"1844–1913 (saltanat 1889–1913)", not:"1896 Adva'da İtalya'yı yenip bağımsızlığını koruyan Habeşistan imparatoru" },
{ id:"mevlay-muhammed", tur:"yabanci-hukumdar", ad:"Mevlây Muhammed",          devlet:"hafsi",     donem:"16. yy", not:"Son Hafsî hükümdarı; 1574'te Sinan Paşa'nın Tunus'u kesin fethi sonrası İstanbul'a gönderildi" },

// --- Parti 8: Uzak dünya — yalnız data/devletler.js kronolojisinde adı geçenler ---
// Orta Asya
{ id:"tarmasirin-han", tur:"yabanci-hukumdar", ad:"Tarmaşirin Han",           devlet:"cagatay",   donem:"saltanat yak. 1326–1334", not:"Çağatay Hanlığı'nda İslâmiyet'i kabul edip Alâeddin adını alan han" },
{ id:"seybani-han", tur:"yabanci-hukumdar", ad:"Şeybânî Han",              devlet:"buhara",    f:"1451", t:"1510", donem:"1451–1510", not:"Timurlu hâkimiyetine Orta Asya'da son verip Buhara Hanlığı'nı kuran Özbek hanı" },
{ id:"ilbars-han", tur:"yabanci-hukumdar", ad:"İlbars Han",               devlet:"hive",      donem:"16. yy başı", not:"Özbek-Türkmen güçleriyle Harzem'i ele geçirip Hive Hanlığı'nı kuranlardan" },
{ id:"kerey-han", tur:"yabanci-hukumdar", ad:"Kerey Han",                devlet:"kazak-hanligi", donem:"15. yy", not:"Kazak Hanlığı'nın kurucularından" },
{ id:"kenesari-han", tur:"yabanci-hukumdar", ad:"Kenesarı Han",             devlet:"kazak-hanligi", t:"1847", donem:"ö. 1847", not:"Rus ilerleyişine karşı direnen son bağımsız Kazak hanı" },
{ id:"erdeni-batur", tur:"yabanci-hukumdar", ad:"Erdeni Batur",             devlet:"cungar",    t:"1653", donem:"ö. 1653", not:"Oyrat boylarını birleştirip Cungar Hanlığı'nı kuran han" },
{ id:"tsevang-rabtan", tur:"yabanci-hukumdar", ad:"Tsevang Rabtan",           devlet:"cungar",    t:"1727", donem:"ö. 1727", not:"Cungar Hanlığı'nı Taşkent'e kadar genişletip zirveye taşıyan han" },
{ id:"yakub-bey-kasgar", tur:"yabanci-hukumdar", ad:"Yâkub Bey (Kaşgar)",       devlet:"yakub-beg", t:"1877", donem:"ö. 1877", not:"Hokand'dan gelen kuvvetlerle Kaşgar'a hâkim olup Doğu Türkistan'da bağımsız emirlik kuran komutan" },
// Güney Asya
{ id:"kutbuddin-aybek", tur:"yabanci-hukumdar", ad:"Kutbüddin Aybek",          devlet:"delhi-sultanligi", t:"1210", donem:"ö. 1210", not:"Delhi Sultanlığı'nı (Memlûk/Köle hanedanı) kuran ilk sultan" },
{ id:"ibrahim-ludi", tur:"yabanci-hukumdar", ad:"İbrâhim Lûdî",             devlet:"delhi-sultanligi", t:"1526", donem:"ö. 1526", not:"Birinci Panipat Savaşı'nda Bâbür'e yenilip öldürülen son Delhi sultanı" },
{ id:"babur", tur:"yabanci-hukumdar", ad:"Bâbür (Zahîrüddin Muhammed)", devlet:"babur-imparatorlugu", f:"1483", t:"1530", donem:"1483–1530", not:"Timur soyundan; 1526 Panipat zaferiyle Bâbürlü (Timurlu-Hint) İmparatorluğu'nu kurdu" },
{ id:"ekber", tur:"yabanci-hukumdar", ad:"Ekber",                    devlet:"babur-imparatorlugu", f:"1542", t:"1605", donem:"1542–1605 (saltanat 1556–1605)", not:"Bâbürlü İmparatorluğu'nu Hindistan'ın büyük bölümüne yayan hükümdar" },
{ id:"evrengzib", tur:"yabanci-hukumdar", ad:"Evrengzîb",                devlet:"babur-imparatorlugu", f:"1618", t:"1707", donem:"1618–1707 (saltanat 1658–1707)", not:"İmparatorluğu en geniş sınırlarına ulaştıran, ölümünden sonra gerileme başlayan hükümdar" },
{ id:"bahadir-sah2", tur:"yabanci-hukumdar", ad:"II. Bahadır Şah",          devlet:"babur-imparatorlugu", f:"1775", t:"1862", donem:"1775–1862", not:"1857 Büyük Ayaklanması bastırıldıktan sonra tahttan indirilip sürgüne gönderilen son Bâbürlü imparatoru" },
{ id:"alaeddin-hasan-behmen-sah", tur:"yabanci-hukumdar", ad:"Alâeddin Hasan Behmen Şah", devlet:"behmeni",  t:"1358", donem:"ö. 1358", not:"Delhi'ye isyan edip Dekken'de Behmenî Sultanlığı'nı kuran hükümdar" },
{ id:"harihara1", tur:"yabanci-hukumdar", ad:"Harihara I",               devlet:"vijayanagara", donem:"14. yy", not:"Kardeşi Bukka ile birlikte Vijayanagara İmparatorluğu'nu kuran hükümdar" },
{ id:"krisnadevaraya", tur:"yabanci-hukumdar", ad:"Krişnadevaraya",           devlet:"vijayanagara", donem:"saltanat 1509–1529", not:"Vijayanagara İmparatorluğu'nu zirveye taşıyan hükümdar" },
{ id:"sivaci", tur:"yabanci-hukumdar", ad:"Şivâcî",                   devlet:"maratha",   f:"1630", t:"1680", donem:"1630–1680", not:"Reygad'da taç giyerek Maratha Konfederasyonu'nun temelini atan hükümdar" },
{ id:"rancit-singh", tur:"yabanci-hukumdar", ad:"Rançit Singh",             devlet:"sih-imparatorlugu", f:"1780", t:"1839", donem:"1780–1839", not:"Lahor'da taç giyip Pencap'ta Sih İmparatorluğu'nu kuran Maharaca" },
{ id:"haydar-ali", tur:"yabanci-hukumdar", ad:"Haydar Ali",               devlet:"meysur",    t:"1782", donem:"ö. 1782", not:"Meysûr'da Vodeyar racasından fiilî iktidarı ele geçiren komutan-hükümdar" },
{ id:"tipu-sultan", tur:"yabanci-hukumdar", ad:"Tipu Sultan",              devlet:"meysur",    f:"1750", t:"1799", donem:"1750–1799", not:"Babası Haydar Ali'nin halefi; Dördüncü Anglo-Mysore Savaşı'nda Seringapatam'ı savunurken öldü" },
// Doğu Asya
{ id:"zhao-kuangyin", tur:"yabanci-hukumdar", ad:"Zhao Kuangyin (Song Taizu)", devlet:"song",    f:"927", t:"976", donem:"927–976", not:"Çin'i yeniden birleştirip Song Hanedanı'nı kuran general-imparator" },
{ id:"wanyan-aguda", tur:"yabanci-hukumdar", ad:"Wanyan Aguda",             devlet:"jin-hanedani", f:"1068", t:"1123", donem:"1068–1123", not:"Jurchen boylarını birleştirip Jin Hanedanı'nı kuran hükümdar" },
{ id:"cengiz-han", tur:"yabanci-hukumdar", ad:"Cengiz Han",               devlet:"mogol-imparatorlugu", f:"1162", t:"1227", donem:"yak. 1162–1227", not:"Moğol boylarını birleştirip tarihin en geniş kara imparatorluğunun temelini atan büyük han" },
{ id:"kubilay-han", tur:"yabanci-hukumdar", ad:"Kubilay Han",              devlet:"yuan-hanedani", f:"1215", t:"1294", donem:"1215–1294", not:"Çin'i fethedip Yuan Hanedanı'nı ilan eden Moğol hakanı" },
{ id:"zhu-yuanzhang", tur:"yabanci-hukumdar", ad:"Zhu Yuanzhang (Hongwu)",   devlet:"ming-hanedani", f:"1328", t:"1398", donem:"1328–1398", not:"Yuan (Moğol) hâkimiyetine son verip Ming Hanedanı'nı kuran köylü kökenli imparator" },
{ id:"sejong", tur:"yabanci-hukumdar", ad:"Kral Sejong",              devlet:"joseon",    f:"1397", t:"1450", donem:"1397–1450 (saltanat 1418–1450)", not:"Kore alfabesi hangıl'ı icat ettiren Joseon kralı" },
{ id:"gojong", tur:"yabanci-hukumdar", ad:"Kral Gojong",              devlet:"joseon",    f:"1852", t:"1919", donem:"1852–1919 (saltanat 1863–1907)", not:"1897'de kendini imparator ilan edip \"Kore İmparatorluğu\"nu kuran hükümdar" },
{ id:"minamoto-no-yoritomo", tur:"yabanci-hukumdar", ad:"Minamoto no Yoritomo",     devlet:"kamakura",  f:"1147", t:"1199", donem:"1147–1199", not:"Genpei Savaşı'nı kazanıp Kamakura Şogunluğu'nu kuran ilk şogun" },
{ id:"tokugawa-ieyasu", tur:"yabanci-hukumdar", ad:"Tokugawa Ieyasu",          devlet:"edo-bakufu", f:"1543", t:"1616", donem:"1543–1616", not:"Edo (Tokugawa) Şogunluğu'nu kurup Japonya'yı iki buçuk asır sürecek istikrara kavuşturan şogun" },
{ id:"meiji-imparatoru", tur:"yabanci-hukumdar", ad:"Meiji İmparatoru",         devlet:"meiji-japonya", f:"1852", t:"1912", donem:"1852–1912", not:"Meiji Restorasyonu'yla fiilî iktidara dönen, Japonya'yı hızla modernleştiren imparator" },
{ id:"dalai-lama5", tur:"yabanci-hukumdar", ad:"5. Dalai Lama",            devlet:"tibet-ganden-phodrang", f:"1617", t:"1682", donem:"1617–1682", not:"Güşi Han'ın askerî desteğiyle Tibet'i dinî-siyasi tek çatı altında birleştiren lider" },
// Güneydoğu Asya
{ id:"raden-wijaya", tur:"yabanci-hukumdar", ad:"Raden Wijaya",             devlet:"majapahit", donem:"13.-14. yy", not:"Moğol istila kuvvetini püskürtüp Majapahit İmparatorluğu'nu kuran hükümdar" },
{ id:"hayam-wuruk", tur:"yabanci-hukumdar", ad:"Hayam Wuruk",              devlet:"majapahit", donem:"saltanat 1350–1389", not:"Veziri Gajah Mada ile birlikte Majapahit'i zirveye taşıyan hükümdar" },
{ id:"parameswara", tur:"yabanci-hukumdar", ad:"Parameswara",              devlet:"malaka-sultanligi", donem:"14.-15. yy", not:"Malaka'yı kurup önemli bir ticaret limanı hâline getiren hükümdar" },
{ id:"u-thong", tur:"yabanci-hukumdar", ad:"U Thong (I. Ramathibodi)", devlet:"ayutthaya", donem:"14. yy", not:"Ayutthaya Krallığı'nı (Siyam) kuran hükümdar" },
{ id:"rama1", tur:"yabanci-hukumdar", ad:"I. Rama (General Chakri)", devlet:"siyam-chakri", f:"1737", t:"1809", donem:"1737–1809", not:"Bangkok'u başkent yapıp Chakri hanedanını kuran Siyam kralı" },
{ id:"rama5", tur:"yabanci-hukumdar", ad:"V. Rama (Chulalongkorn)",  devlet:"siyam-chakri", f:"1853", t:"1910", donem:"1853–1910", not:"Siyam'ı modernleştirip sömürgeleşmeden kurtaran reformcu kral" },
{ id:"le-loi", tur:"yabanci-hukumdar", ad:"Lê Lợi",                   devlet:"le-hanedani", t:"1433", donem:"ö. 1433", not:"Ming işgaline son verip Lê Hanedanı'nı (Đại Việt) kuran hükümdar" },
{ id:"nguyen-anh", tur:"yabanci-hukumdar", ad:"Nguyễn Ánh (Gia Long)",    devlet:"nguyen-hanedani", f:"1762", t:"1820", donem:"1762–1820", not:"Tây Sơn'ı yenip Vietnam'ı birleştiren Nguyễn hanedanının kurucusu" },
{ id:"alaungpaya", tur:"yabanci-hukumdar", ad:"Alaungpaya",               devlet:"konbaung",  f:"1714", t:"1760", donem:"1714–1760", not:"Mon isyanını bastırıp Konbaung Hanedanı'nı kuran Birmanya kralı" },
{ id:"thibaw", tur:"yabanci-hukumdar", ad:"Kral Thibaw",              devlet:"konbaung",  f:"1859", t:"1916", donem:"1859–1916", not:"Üçüncü Anglo-Birman Savaşı sonunda tahttan indirilip sürgüne gönderilen son Birmanya kralı" },
{ id:"agung", tur:"yabanci-hukumdar", ad:"Sultan Agung",             devlet:"mataram-sultanligi", donem:"saltanat 1613–1645", not:"Mataram Sultanlığı'nı Cava'nın büyük bölümüne hâkim kılan hükümdar" },
// Afrika (batı, orta, doğu, güney)
{ id:"sundiata-keita", tur:"yabanci-hukumdar", ad:"Sundiata Keita",           devlet:"mali-imparatorlugu", donem:"13. yy", not:"Kirina Savaşı'nda zafer kazanıp Mali İmparatorluğu'nu kuran hükümdar" },
{ id:"sunni-ali", tur:"yabanci-hukumdar", ad:"Sünnî Ali",                devlet:"songhay-imparatorlugu", t:"1492", donem:"ö. 1492", not:"Songhay'ı büyük bir imparatorluğa dönüştürmeye başlayan hükümdar" },
{ id:"askiya-muhammed", tur:"yabanci-hukumdar", ad:"Askiya Muhammed",          devlet:"songhay-imparatorlugu", donem:"saltanat 1493–1528", not:"Timbuktu'yu İslâm dünyasının önemli bir ilim merkezi yapan Songhay hükümdarı" },
{ id:"idris-alooma", tur:"yabanci-hukumdar", ad:"İdris Alooma",             devlet:"kanem-bornu", donem:"saltanat yak. 1564–1596", not:"Kanem-Bornu İmparatorluğu'nu zirveye taşıyan, başkenti Ngazargamu'ya taşıyan hükümdar" },
{ id:"osman-dan-fodio", tur:"yabanci-hukumdar", ad:"Osman dan Fodio",          devlet:"sokoto",    f:"1754", t:"1817", donem:"1754–1817", not:"Hausa şehir devletlerini fethedip Sokoto Halifeliği'ni kuran cihad önderi" },
{ id:"muhammed-bello", tur:"yabanci-hukumdar", ad:"Muhammed Bello",           devlet:"sokoto",    f:"1781", t:"1837", donem:"1781–1837", not:"Babası Osman dan Fodio'nun halefi; Sokoto Halifeliği'ni zirveye taşıyan hükümdar" },
{ id:"oba-ewuare", tur:"yabanci-hukumdar", ad:"Oba Ewuare",               devlet:"benin-kralligi", donem:"15. yy", not:"Benin Krallığı'nı genişletip merkezîleştiren Oba (kral)" },
{ id:"joao1", tur:"yabanci-hukumdar", ad:"I. João (Nzinga a Nkuwu)", devlet:"kongo-kralligi", t:"1509", donem:"ö. 1509", not:"Portekizlilerin etkisiyle Hristiyanlığı kabul eden Kongo kralı" },
{ id:"nzinga", tur:"yabanci-hukumdar", ad:"Kraliçe Nzinga",           devlet:"ndongo",    f:"1583", t:"1663", donem:"1583–1663", not:"Ndongo Krallığı'nda tahta çıkıp Portekiz'e karşı onlarca yıl süren direnişi yöneten kraliçe" },
{ id:"shaka", tur:"yabanci-hukumdar", ad:"Shaka",                    devlet:"zulu-kralligi", f:"1787", t:"1828", donem:"yak. 1787–1828", not:"Zulu klanını askerî reformlarla büyük bir krallığa dönüştüren kral" },
// Amerika
{ id:"moctezuma2", tur:"yabanci-hukumdar", ad:"II. Moctezuma",            devlet:"aztek-imparatorlugu", donem:"saltanat 1502–1520", not:"Aztek İmparatorluğu'nu en geniş sınırlarına ulaştıran, İspanyol istilası sırasında ölen hükümdar" },
{ id:"cuauhtemoc", tur:"yabanci-hukumdar", ad:"Cuauhtémoc",               devlet:"aztek-imparatorlugu", t:"1525", donem:"ö. 1525", not:"Tenochtitlan kuşatmasında esir alınan son bağımsız Aztek imparatoru" },
{ id:"pachacuti", tur:"yabanci-hukumdar", ad:"Pachacuti",                devlet:"inka-imparatorlugu", donem:"15. yy", not:"Cusco krallığını büyük bir imparatorluğa (Tahuantinsuyu) dönüştürmeye başlayan İnka hükümdarı" },
{ id:"atahualpa", tur:"yabanci-hukumdar", ad:"Atahualpa",                devlet:"inka-imparatorlugu", t:"1533", donem:"ö. 1533", not:"İspanyollarca esir alınıp idam edilen son bağımsız İnka imparatoru" },
{ id:"simon-bolivar", tur:"yabanci-hukumdar", ad:"Simón Bolívar",            devlet:"gran-kolombiya", f:"1783", t:"1830", donem:"1783–1830", not:"Angostura Kongresi'nde Büyük Kolombiya'yı ilan eden bağımsızlık önderi" },
// Okyanusya
{ id:"kamehameha1", tur:"yabanci-hukumdar", ad:"Kamehameha I",             devlet:"hawaii-kralligi", t:"1819", donem:"ö. 1819", not:"Hawaii adalarını savaşla birleştirip krallığı kuran hükümdar" },
{ id:"george-tupou1", tur:"yabanci-hukumdar", ad:"I. George Tupou",          devlet:"tonga-kralligi", f:"1797", t:"1893", donem:"1797–1893", not:"Tonga adalarını birleştiren kral" },

// --- Parti 9 (ek): 1918 sonrası yeni devletler ve atlanan hükümdarlar ---
{ id:"miklos-horthy", tur:"siyasi", ad:"Miklós Horthy",                      devlet:"macaristan-naiplik", f:"1868", t:"1957", donem:"1868–1957", not:"1920'de \"kralsız krallığın\" naibi seçilen, Macaristan'ı yöneten devlet başkanı" },
{ id:"jozef-pilsudski", tur:"siyasi", ad:"Józef Piłsudski",                     devlet:"polonya",   f:"1867", t:"1935", donem:"1867–1935", not:"Polonya'nın 1918 bağımsızlığını ilan edip devlet başkanı olan önder" },
{ id:"tomas-masaryk", tur:"siyasi", ad:"Tomáš Masaryk",                       devlet:"cekoslovakya", f:"1850", t:"1937", donem:"1850–1937", not:"Çekoslovakya Cumhuriyeti'nin kurucu cumhurbaşkanı" },
{ id:"alexandru-ioan-cuza", tur:"yabanci-hukumdar", ad:"Alexandru Ioan Cuza",       devlet:"romanya",   f:"1820", t:"1873", donem:"1820–1873", not:"Eflak ve Boğdan'ı kişisel birlikte birleştirip Romanya'nın çekirdeğini kuran ilk prens" },
{ id:"dom-pedro1", tur:"yabanci-hukumdar", ad:"I. Dom Pedro",              devlet:"brezilya-imparatorlugu", f:"1798", t:"1834", donem:"1798–1834", not:"\"Ipiranga Çığlığı\" ile Brezilya'nın bağımsızlığını ilan edip ilk imparator olan hükümdar" },
{ id:"dom-pedro2", tur:"yabanci-hukumdar", ad:"II. Dom Pedro",             devlet:"brezilya-imparatorlugu", f:"1825", t:"1891", donem:"1825–1891", not:"Askerî darbeyle tahttan indirilen son Brezilya imparatoru" },
{ id:"jean-jacques-dessalines", tur:"yabanci-hukumdar", ad:"Jean-Jacques Dessalines",   devlet:"haiti",     t:"1806", donem:"ö. 1806", not:"Haiti'nin bağımsızlığını ilan eden lider" },
{ id:"liliuokalani", tur:"yabanci-hukumdar", ad:"Kraliçe Liliuokalani",      devlet:"hawaii-kralligi", f:"1838", t:"1917", donem:"1838–1917", not:"ABD'li yerleşimcilerce 1893'te devrilen son Hawaii kraliçesi" },
{ id:"muhammed-davud-sah", tur:"yabanci-hukumdar", ad:"Muhammed Davud Şah",        devlet:"ace-sultanligi", donem:"ö. 20. yy başı", not:"1903'te Hollanda'ya resmen teslim olan son Açe sultanı" },
{ id:"serif-ul-hasim", tur:"yabanci-hukumdar", ad:"Şerif ül-Hâşim",            devlet:"sulu-sultanligi", donem:"15. yy", not:"Sulu Sultanlığı'nın kurucusu" },
{ id:"andrianampoinimerina", tur:"yabanci-hukumdar", ad:"Andrianampoinimerina",      devlet:"merina",    t:"1810", donem:"ö. 1810", not:"Madagaskar'da İmerina platosunu birleştiren Merina kralı" },
{ id:"ranavalona3", tur:"yabanci-hukumdar", ad:"III. Ranavalona",           devlet:"merina",    f:"1861", t:"1917", donem:"1861–1917", not:"Krallığın ilgasıyla sürgüne gönderilen son Merina kraliçesi" },
{ id:"sho-hashi", tur:"yabanci-hukumdar", ad:"Shō Hashi",                 devlet:"ryukyu",    donem:"15. yy", not:"Üç Okinawa krallığını birleştirip Ryukyu Krallığı'nı kuran kral" },
{ id:"yagmurasen-b-zeyyan", tur:"yabanci-hukumdar", ad:"Yağmurasen b. Zeyyân",      devlet:"zeyyani",   donem:"13. yy", not:"Tilimsan'da Zeyyânî hanedanını kuran hükümdar" },
{ id:"ebu-zekeriyya-yahya", tur:"yabanci-hukumdar", ad:"Ebû Zekeriyyâ Yahyâ",       devlet:"hafsi",     donem:"13. yy", not:"Muvahhidler'den ayrılıp İfrîkıye'de Hafsî hanedanını kuran hükümdar" },
{ id:"guy-de-lusignan", tur:"yabanci-hukumdar", ad:"Guy de Lusignan",           devlet:"kibris-krallik", t:"1194", donem:"ö. 1194", not:"Kıbrıs Krallığı'nı kuran Haçlı kökenli şövalye-kral" },
{ id:"caterina-cornaro", tur:"yabanci-hukumdar", ad:"Caterina Cornaro",          devlet:"kibris-krallik", f:"1454", t:"1510", donem:"1454–1510", not:"Tacını Venedik'e devrederek Kıbrıs Krallığı'nı sona erdiren son kraliçe" },

// ============================================================================
// OTURUM 5, 2. FAZ — 5. BOYUT: BİLİM / MİMARLIK / EDEBİYAT
// Yöntem: data/olaylar*.js'te bilim/kultur-sanat etiketli veya kategorili
// maddelerin `kisiler` alanından çıkarıldı — hiçbiri "hayalden" eklenmedi,
// hepsi en az bir kronoloji maddesinde adı geçiyor (bkz. OTURUM-5-ILERLEME.md).
// ============================================================================

// --- Mimarlık ---
{ id:"mimar-sinan", tur:"mimar", ad:"Mimar Sinan", f:"1488", t:"1588", dogum_yer:"Ağırnas (Kayseri)", dogum_lat:38.556, dogum_lon:35.417, olum_yer:"İstanbul", donem:"1488–1588", eser:["Süleymaniye Camii (İstanbul)","Selimiye Camii (Edirne)","Şehzade Camii (İstanbul)"], not:"Osmanlı'nın baş mimarı; yarım asra yakın hassa mimarbaşılığında yüzlerce yapı inşa etti" },
{ id:"sedefkar-mehmed-aga", tur:"mimar", ad:"Sedefkâr Mehmed Ağa", t:"1617", donem:"ö. 1617", eser:["Sultan Ahmed Camii (İstanbul)"], not:"Mimar Sinan'ın öğrencilerinden; I. Ahmed'in emriyle Sultanahmet Camii'ni inşa etti" },
{ id:"garabet-balyan", tur:"mimar", ad:"Garabet Balyan", f:"1800", t:"1866", dogum_yer:"İstanbul", eser:["Dolmabahçe Sarayı (oğlu Nikoğos ile)"], not:"Balyan mimarlık ailesinin önde gelen üyesi; 19. yüzyıl saray mimarîsinin başlıca ismi" },
{ id:"nikogos-balyan", tur:"mimar", ad:"Nikoğos Balyan", f:"1826", t:"1858", dogum_yer:"İstanbul", eser:["Dolmabahçe Sarayı (babası Garabet ile)"], not:"Garabet Balyan'ın oğlu; Dolmabahçe Sarayı'nın ortak mimarı, genç yaşta öldü" },

// --- Bilim ---
{ id:"ali-kuscu", tur:"alim", ad:"Ali Kuşçu", f:"1403", t:"1474", dogum_yer:"Semerkant", olum_yer:"İstanbul", donem:"1403–1474", eser:["Fethiye (astronomi risalesi)"], not:"Uluğ Bey rasathanesinden yetişen astronom-matematikçi; Fatih'in daveti üzerine 1472'de İstanbul'a yerleşip Sahn-ı Semân medresesinde ders verdi" },
{ id:"piri-reis", tur:"alim", ad:"Pîrî Reis", dogum_yer:"Gelibolu", t:"1554", donem:"ö. 1554", eser:["Kitâb-ı Bahriye","1513 Dünya Haritası"], not:"Osmanlı'nın en tanınmış deniz kartografı ve denizcisi; kaptan-ı deryâlık sonrası bir Hint Okyanusu seferindeki başarısızlık gerekçesiyle idam edildi" },
{ id:"takiyyuddin-er-rasid", tur:"alim", ad:"Takıyyüddin er-Râsıd", f:"1526", t:"1585", dogum_yer:"Şam", olum_yer:"İstanbul", donem:"1526–1585", not:"1577'de İstanbul Rasathanesi'ni kuran astronom; rasathane 1580'de hattı hümâyunla yıktırıldı" },
{ id:"seydi-ali-reis", tur:"alim", ad:"Seydi Ali Reis", f:"1498", t:"1563", dogum_yer:"İstanbul", donem:"1498–1563", eser:["Mir'âtü'l-Memâlik"], not:"Hint Okyanusu'ndaki başarısız seferinden kara yoluyla dönüşünü anlatan seyahatnamesiyle tanınan denizci-yazar" },
{ id:"hezarfen-ahmed-celebi", tur:"alim", ad:"Hezârfen Ahmed Çelebi", donem:"17. yy", not:"IV. Murad döneminde Galata Kulesi'nden Üsküdar'a kanatlarla uçtuğu rivayet edilen (kesin belgeyle doğrulanmamış) deneyci" },
{ id:"katib-celebi", tur:"alim", ad:"Kâtib Çelebi", f:"1609", t:"1657", dogum_yer:"İstanbul", olum_yer:"İstanbul", donem:"1609–1657", eser:["Keşfü'z-Zünûn","Cihannümâ","Fezleke"], not:"Osmanlı'nın en üretken bibliyografı ve coğrafyacısı; bürokrat kökenli çok yönlü âlim" },
{ id:"evliya-celebi", tur:"alim", ad:"Evliya Çelebi", f:"1611", dogum_yer:"İstanbul", donem:"1611–yak. 1685", eser:["Seyahatnâme (10 cilt)"], not:"Kırk yılı aşkın gezdiği Osmanlı ve komşu topraklarını anlatan dev seyahatnamenin yazarı; kesin ölüm tarihi belirsiz" },
{ id:"ibrahim-muteferrika", tur:"alim", ad:"İbrahim Müteferrika", f:"1674", t:"1745", dogum_yer:"Kolozsvár (bugünkü Cluj-Napoca, Romanya)", olum_yer:"İstanbul", donem:"1674–1745", eser:["İlk Osmanlı Türkçe matbaası (1727)","Vankulu Lügati baskısı (1729)"], not:"Macaristan doğumlu, İslâm'a girip Osmanlı hizmetine giren; ilk Osmanlı Türkçe matbaasını kuran âlim-diplomat" },
{ id:"said-efendi", tur:"alim", ad:"Said Efendi (Yirmisekiz Çelebizâde)", t:"1761", donem:"ö. 1761", not:"İbrahim Müteferrika ile ilk Osmanlı matbaasını kuran ortak; Yirmisekiz Çelebi Mehmed Efendi'nin oğlu, sonradan kısa süreli sadrazamlık da yaptı" },
{ id:"huseyin-rifki-tamani", tur:"alim", ad:"Hüseyin Rıfkı Tamânî", t:"1817", donem:"ö. 1817", not:"Mühendishâne-i Berrî-i Hümâyun'un kuruluş dönemi hocalarından matematikçi" },
{ id:"mustafa-behcet-efendi", tur:"alim", ad:"Mustafa Behçet Efendi", f:"1774", t:"1834", dogum_yer:"İstanbul", donem:"1774–1834", not:"Tıphâne-i Âmire'nin kurulmasında rol oynayan hekimbaşı; modern tıp eğitiminin öncülerinden" },
{ id:"ahmed-cevdet-pasa", tur:"alim", ad:"Ahmed Cevdet Paşa", f:"1822", t:"1895", dogum_yer:"Lofça (bugünkü Lovech, Bulgaristan)", donem:"1822–1895", eser:["Tarih-i Cevdet","Mecelle (heyet başkanı)"], not:"Tanzimat döneminin en önemli tarihçi-hukukçusu; Encümen-i Dâniş üyesi, Mecelle'nin hazırlanmasını yönetti" },
{ id:"hoca-tahsin-efendi", tur:"alim", ad:"Hoca Tahsin Efendi", donem:"19. yy", not:"İstanbul Darülfünunu'nun ilk hocalarından/müdürlerinden" },

// --- Tasavvuf / fikir ---
{ id:"ebussuud-efendi", tur:"alim", ad:"Ebüssuûd Efendi", f:"1490", t:"1574", dogum_yer:"İskilip (Çorum)", donem:"1490–1574", not:"Kanunî ve II. Selim dönemlerinin uzun süre görev yapan şeyhülislâmı; Osmanlı hukuk-fıkıh sisteminin en etkili isimlerinden" },
{ id:"vani-mehmed-efendi", tur:"alim", ad:"Vânî Mehmed Efendi", t:"1685", donem:"ö. 1685", not:"IV. Mehmed'in hocası ve Kadızâdeli hareketinin önde gelen vâizi; Yeni Cami vâizliğine atandı, sonradan Bursa'ya sürgün edildi" },
{ id:"hayrullah-efendi", tur:"alim", ad:"Hayrullah Efendi (İmâm-ı Sultânî)", f:"1834", t:"1898", donem:"1834–1898", not:"12 Mayıs 1876'da ikinci kez şeyhülislâm oldu; Abdülaziz'in 30 Mayıs 1876'da tahttan indirilmesi için gereken fetvayı hazırlayan kadronun içindeydi" },

// --- Edebiyat / basın (Tanzimat-Yeni Osmanlılar kadrosu) ---
{ id:"agah-efendi", tur:"edebiyatci", ad:"Agâh Efendi", f:"1832", t:"1885", donem:"1832–1885", eser:["Tercümân-ı Ahvâl (ilk özel Türkçe gazete, 1860)"], not:"İbrâhim Şinâsi ile birlikte ilk özel Türkçe gazeteyi çıkardı" },
{ id:"sinasi", tur:"edebiyatci", ad:"İbrâhim Şinâsi", f:"1826", t:"1871", dogum_yer:"İstanbul", donem:"1826–1871", eser:["Şair Evlenmesi (ilk Türkçe tiyatro oyunlarından)","Tasvîr-i Efkâr (gazete)"], not:"Tanzimat edebiyatının kurucularından; Batılı türlerde (tiyatro, gazete makalesi) ilk örnekleri verdi" },
{ id:"ziya-pasa", tur:"edebiyatci", ad:"Ziya Paşa", f:"1825", t:"1880", dogum_yer:"İstanbul", donem:"1825–1880", not:"Yeni Osmanlılar hareketinin edebiyatçı-devlet adamı kanadından; Nâmık Kemal ile Tasvîr-i Efkâr'ı çıkardı" },
{ id:"namik-kemal", tur:"edebiyatci", ad:"Nâmık Kemal", f:"1840", t:"1888", dogum_yer:"Tekirdağ (Rodosçuk)", olum_yer:"Sakız Adası", donem:"1840–1888", eser:["Vatan yahut Silistre (1873)"], not:"Yeni Osmanlılar hareketinin en etkili kalemi; \"Vatan yahut Silistre\" oyunu sahnelenince sürgüne gönderildi" },
{ id:"ali-suavi", tur:"siyasi", ad:"Ali Suâvi", f:"1839", t:"1878", dogum_yer:"İstanbul", donem:"1839–1878", not:"Yeni Osmanlılar kadrosundan gazeteci; 1878 Çırağan Baskını'nı örgütleyip baskın sırasında öldürüldü" },

// --- 1876 hanedan krizi (Abdülaziz'in hal'i / V. Murad / Çırağan Vak'ası) ---
{ id:"cerkes-hasan-bey", tur:"siyasi", ad:"Çerkes Hasan Bey", t:"1876", donem:"ö. 1876", not:"Kolağası; 16 Haziran 1876'da Midhat Paşa'nın konağını basıp Hüseyin Avni Paşa'yı öldürdü, olay yerinde yakalanıp idam edildi (TDV'de müstakil maddesi yok, huseyin-avni-pasa maddesindeki geçişten; doğum yılı ve idam günü doğrulanamadı — bkz. OTURUM-5-ILERLEME.md)" },
{ id:"yedisekiz-hasan-pasa", tur:"komutan", ad:"Hasan Paşa (Yedi Sekiz)", donem:"19. yy", not:"Beşiktaş muhafızı; 20 Mayıs 1878 Çırağan Vak'ası sırasında sarayı basan Ali Suâvi'yi vurarak öldürdü (TDV'nin ciragan-vakasi maddesinde olay anındaki rütbesiyle \"Hasan Ağa\" olarak geçiyor, müstakil maddesi yok; doğum-ölüm yılları TDV'de doğrulanamadı — bkz. OTURUM-5-ILERLEME.md)" },

// --- Askerî teknoloji reformcuları ---
{ id:"humbaraci-ahmed-pasa", tur:"komutan", ad:"Humbaracı Ahmed Paşa (Comte de Bonneval)", f:"1675", t:"1747", dogum_yer:"Coussac-Bonneval (Fransa)", olum_yer:"İstanbul", donem:"1675–1747", not:"Fransız asıllı; İslâm'a girip Osmanlı ordusunda Humbaracı Ocağı'nı Avrupa usulünde ıslah etti" },
{ id:"baron-de-tott", tur:"yabanci-komutan", ad:"Baron de Tott", f:"1733", t:"1793", dogum_yer:"Fransa", donem:"1733–1793", not:"III. Mustafa döneminde Osmanlı topçuluğunun ıslahına danışmanlık eden Macar asıllı Fransız subay" },
{ id:"mehmed-namik-pasa", tur:"komutan", ad:"Mehmed Nâmık Paşa", f:"1804", t:"1892", donem:"1804–1892", not:"Mekteb-i Harbiye'nin Maçka Kışlası'ndaki kuruluşunda rol oynayan asker-devlet adamı" },
{ id:"gercek-davud", tur:"alim", ad:"Gerçek Dâvud", donem:"18. yy", not:"1720'de kurulan Tulumbacı Ocağı'nın (Osmanlı itfaiye teşkilatının ilk örneği) kurucusu" },
{ id:"yirmisekiz-celebi-mehmed-efendi", tur:"siyasi", ad:"Yirmisekiz Çelebi Mehmed Efendi", t:"1732", donem:"ö. 1732", eser:["Sefâretnâme (Fransa)"], not:"1720-21'de Fransa'ya gönderilen, dönüşte gözlemlerini ünlü sefâretnâmesinde anlatan elçi" },
];
