# -*- coding: utf-8 -*-
# bozkir4 uretici: kunye_yeni.js, kronoloji_cok_dogu_bozkir4.js, kronoloji_sinir_dogu_bozkir4.js, yama_bozkir4.js
import json, os, io
D = os.path.dirname(os.path.abspath(__file__))

CG = "TDV İslâm Ansiklopedisi, «Cengiz Han» md. (Mustafa Kafalı, 1993), https://islamansiklopedisi.org.tr/cengiz-han (bu oturumda okundu): "
TT = "TDV İslâm Ansiklopedisi, «Tatarlar» md. (Faruk Sümer, 2011), https://islamansiklopedisi.org.tr/tatarlar (bu oturumda okundu): "
KH = "TDV İslâm Ansiklopedisi, «Karahıtaylar» md., https://islamansiklopedisi.org.tr/karahitaylar (bu oturumda okundu): "
OG = "TDV İslâm Ansiklopedisi, «Oğuzlar» md., https://islamansiklopedisi.org.tr/oguzlar (bu oturumda okundu): "
US = "TDV İslâm Ansiklopedisi, «Üsrûşene» md. (Aydın Usta, 2012), https://islamansiklopedisi.org.tr/usrusene (bu oturumda okundu): "
BU = "TDV İslâm Ansiklopedisi, «Bulgar» md. (Nuri Yüce, 1992), https://islamansiklopedisi.org.tr/bulgar (bu oturumda okundu): "
HZ = "TDV İslâm Ansiklopedisi, «Hazarlar» md., https://islamansiklopedisi.org.tr/hazarlar (bu oturumda okundu): "
PR1 = "Procopius, History of the Wars, çev. H. B. Dewing, Loeb Classical Library, c. I (Kitap I-II), archive.org/details/procopiuswithen01proc (bu oturumda okundu): "
PR5 = "Procopius, History of the Wars, çev. H. B. Dewing, Loeb Classical Library, c. V (Kitap VII.36-VIII), archive.org/details/procopiuswitheng05procuoft (bu oturumda okundu): "
PZ = "Pseudo-Zacharias Rhetor (Mitilene’li Zacharias), Chronicle XII.7, çev. F. J. Hamilton – E. W. Brooks, The Syriac Chronicle known as that of Zachariah of Mitylene, Londra 1899, s. 328, archive.org/details/syriacchroniclek00zachiala (bu oturumda okundu): "
JT198 = "Jiu Tang shu juan 198 «Xirong» (Wikisource 舊唐書/卷198, bu oturumda okundu), https://zh.wikisource.org/wiki/舊唐書/卷198: "
JT3 = "Jiu Tang shu juan 3 «Taizong ji xia» (Wikisource 舊唐書/卷3, bu oturumda okundu), https://zh.wikisource.org/wiki/舊唐書/卷3: "
WS102 = "Wei shu juan 102 «Xiyu» (Wikisource 魏書/卷102; Beishi’den tamamlanmış, bu oturumda okundu), https://zh.wikisource.org/wiki/魏書/卷102: "
HS96 = "Han shu juan 96 «Xiyu zhuan» (Wikisource 漢書/卷96下, bu oturumda okundu): "

def M(t, b, tur, taraflar, d, kaynak, gun, kes, yer=None, ic=None, onem=2, kapsam="dis", ict=None):
    m = {"t": t, "b": b, "tur": tur, "onem": onem, "dunya": 1, "kapsam": kapsam,
         "etiket": ["konu-siyasi" if tur in ("siyaset", "kurulus", "son", "hukumdar") else "konu-askeri", "dogu-500-1281"],
         "taraflar": taraflar, "d": d, "kaynak": kaynak, "gun": gun, "kesinlik": kes}
    if yer: m["yer"] = yer
    if ic: m["ic_not"] = ic
    if ict: m["ic_not_takvim"] = ict
    return m

MOG = "mogol-imparatorlugu"
MOGNOT = "taraflar: 1206 öncesi Timuçin’in Moğol birliği için atlasta ayrı kimlik yok; ardıl «mogol-imparatorlugu» kimliği kullanıldı (1206 künye başlangıcıdır, madde ondan önce)."

# ---------------------------------------------------------------- KRONOLOJI (anlati)
K = []
# --- Merkit
K += [
 M("1197-01-01", "Timuçin Merkitler üzerine yürüyüp beyleri Tokta-Beki’yi öldürttü", "savas", ["merkit", MOG],
   "Timuçin (sonradan Cengiz Han) 1197’de Merkitler’i mağlûp etti; TDV’ye göre Merkit beyi Tokta-Beki bu seferde öldürüldü. Bu, Merkitler’in kaynakta tarihli ilk görünüşüdür.",
   CG + "«1197’de Merkitler üzerine yürüyerek onları mağlûp etti ve Merkitler’in beyi Tokta-Beki’yi öldürttü.»",
   "1197", "yil", ic=MOGNOT + " TDV Tokta-Beki’nin ölümünü 1197’ye koyar; öteki kaynaklarda (Moğolların Gizli Tarihi) Tokta’nın 1208’de öldüğü anlatılır — çelişki ayrıca beyan: TDV esas alındı, Gizli Tarih okunmadı (atıf; açılmadı).", onem=2),
 M("1204-01-01", "Naiman Tayang Han ile Merkit Kutuku’nun ittifakı Timuçin’ce yurtlarında basılıp dağıtıldı", "savas", ["naiman", "merkit", MOG],
   "Öngüt hükümdarı Alakuş Tigin’in haberi üzerine Timuçin, Nayman hükümdarı Tayang Han ile Merkit hükümdarı Kutuku’nun ittifakını ve onlara katılan Katagin, Salciyut gibi kavimleri yurtlarında basıp dağıttı.",
   CG + "«1204 yılında Ongut Hükümdarı Alakuş Tigin, Timuçin’e haber göndererek Nayman Hükümdarı Tayang Han’ın Merkit Hükümdarı Kutuku ile anlaşma yaptığını … haber verdi. Timuçin süratle hazırlıklarını tamamlayarak müttefik kuvvetleri yurtlarında bastı ve hepsini dağıttı.»",
   "1204", "yil", ic=MOGNOT, onem=3),
 M("1209-01-01", "Moğollar Merkit hükümdarını öldürdü; kardeşleri ve çocukları Uygur ülkesine kaçtı", "son", ["merkit", MOG],
   "Nayman Güçlüg’ün Merkitler’le ittifak yapması üzerine Cengiz Han harekete geçip onları mağlûp etti; TDV’ye göre Merkit hükümdarı öldü, kardeşleri ve çocukları Uygur ülkesine kaçtı. Merkit siyasî varlığı bu darbeyle çöktü.",
   CG + "«1208 yılının kış mevsiminde Nayman Hükümdarı Tayang Han’ın oğlu Güçlüg’ün Merkitler’le ittifak yapması üzerine Cengiz Han harekete geçerek onları mağlûp etti; Merkit hükümdarı öldü, kardeşleri ve çocukları Uygur ülkesine kaçtılar.»",
   "1208 kışı", "yil", ic="TDV «1208 yılının kış mevsiminde» der; kış Aralık 1208–Şubat 1209’a düşebildiğinden gün tek gün olarak 1209-01-01 seçildi (yıl hassasiyeti). " + MOGNOT, onem=3),
 M("1217-01-01", "Cengiz Han Subutay ve Toğaçar’ı Merkit kalıntılarına gönderdi", "savas", ["mogol-imparatorlugu", "merkit"],
   "Cengiz Han 1217’de kumandanı Subutay Noyan’ı Toğaçar Noyan ile birlikte Merkitler üzerine gönderdi; bu sefer 1208’den sonra kalan Merkit gruplarına yöneliktir.",
   CG + "«1217 yılında kumandanlarından Subitay Noyan’ı Togaçar Noyan ile birlikte Merkitler üzerine, Buragul Noyan ile Dörmen Bahadır’ı Tumatlar’a karşı yolladı.»",
   "1217", "yil", ic="Madde künye ömrü (t=1209) dışındadır: 1208 sonrası Merkit kalıntısı; siyasî birlik olarak tarihlenmedi.", onem=2),
]
# --- Naiman
K += [
 M("1199-01-01", "Timuçin ile Ong Han Kişil-Baş’ta Nayman hakanı Buyruk Han’ı bozguna uğrattı", "savas", ["naiman", "kerayit", MOG],
   "1199’da Kerayit hükümdarı Ong Han’la birlikte hareket eden Timuçin, Kişil-Baş mevkiinde Nayman hakanı Buyruk Han’ı bozguna uğrattı. Bu, TDV’de Naymanlar’ın tarihli ilk görünüşüdür.",
   CG + "«1199’da Ong Han’la beraber Kişil-Baş mevkiinde Nayman Hakanı Buyruk Han’ı bozguna uğrattı.»",
   "1199", "yil", ic=MOGNOT, onem=3),
 M("1202-01-01", "Naymanlar toparlanınca Timuçin ve Ong Han yeniden üzerlerine yürüdü", "savas", ["naiman", "kerayit", MOG],
   "Timuçin 1202’de Tatar ili üzerine büyük sefer yaptıktan sonra Naymanlar’ın yeniden toparlandığını görerek Ong Han ile birlikte onların üzerine yürüdü.",
   CG + "«Aynı yıl içinde Naymanlar’ın tekrar toparlandığını görerek Ong Han ile birlikte onların üzerine yürüdü.»",
   "1202", "yil", ic=MOGNOT, onem=2),
 M("1204-01-01", "Tayang Han’ın Nayman müttefik gücü Timuçin’ce yurdunda dağıtıldı", "savas", ["naiman", "merkit", MOG],
   "Tayang Han, Merkit Kutuku ile anlaşıp Katagin ve Salciyut gibi kavimlerle birleşmişti; Timuçin bu müttefik güçleri yurtlarında basıp dağıttı. Nayman devleti bu yenilgiyle ortadan kalktı.",
   CG + "«Timuçin süratle hazırlıklarını tamamlayarak müttefik kuvvetleri yurtlarında bastı ve hepsini dağıttı.»",
   "1204", "yil", ic=MOGNOT + " TDV 1206 maddesinde Tayang Han’ı hâlâ anar (aynı md.: «1206 yılında, Nayman Tayang Han, Ong Han ve Kutuku-Beki başta olmak üzere bütün bozkır hükümdarlarını hâkimiyeti altında toplamıştı») — Tayang’ın 1204’te mi 1206’ya kadar mı ayakta kaldığı TDV’de iç çelişkidir; künye t=1204 (savaş yılı) seçildi.", onem=3),
 M("1208-01-01", "Nayman Güçlüg Merkitler’le ittifak yaptı, yenilince Karahıtay’a sığındı", "siyaset", ["naiman", "karahitay", MOG],
   "Tayang Han’ın oğlu Güçlüg Merkitler’le ittifak etti; Cengiz Han’ın mağlûp etmesi üzerine daha batıdaki Karahıtay hükümdarı Gür Han’a sığındı. Güçlüg orada Gür Han’ı alt edip hâkimiyeti ele geçirdi.",
   CG + "«Nayman Güçlüg ise daha batıdaki Karahıtay Hükümdarı Gür Han’a sığındı. Fakat Güçlüg burada da rahat durmayarak Gür Han’ı öldürdü ve ülkesine hâkim oldu.»",
   "1208 kışı", "yil", ic="Naiman künyesi (t=1204) bitmiştir; Güçlüg’ün 1211 sonrası Karahıtay’daki rejimi ayrı polity (kuclug-karahitay, bozkir2 önerisi). " + MOGNOT, onem=2),
 M("1211-01-01", "Nayman Küçlüg Karahıtay Gürhan’ını esir alıp devlete son verdi", "siyaset", ["karahitay", "naiman"],
   "Hârizmşah Muhammed b. Tekiş ile anlaşarak ayrı yönlerden saldıran Moğol Nayman hükümdarı Küçlüg, kayınpederi Gürhan Ch’e-lu-ku’yu esir ederek Karahıtay Devleti’ne son verdi.",
   KH + "«Böylece Karahıtaylar’a son darbeyi vuran Küçlüğ kayınpederi Ch’e-lu-ku’yu esir ederek bu devlete son verdi (1211).»",
   "1211", "yil", ic="Karahıtay künyesi t=1211 ile uyumlu (atlas künyesi referans sayılmadı; TDV esas). Madde Naiman künye ömrü (t=1204) dışındaki Nayman kalıntısı hakkındadır.", onem=3),
]
# --- Tatar
K += [
 M("0716-01-01", "Bilge Kağan Agu’da Oğuzlar ve Tokuz Tatarlar’ı yendi", "savas", ["dogu-gokturk-2", "tatar"],
   "Bilge Kağan beş sefer sonunda Oğuzlar’ın üzerine yeniden yürüdü; Oğuzlar, Tokuz Tatarlar’la birlikte 716 yazında Agu’da onun karşısına çıktı ve iki şiddetli savaşta bozguna uğradı. Tokuz Tatarlar bu sırada Tula ırmağının doğusunda yaşıyordu.",
   TT + "«Oğuzlar, Tokuz Tatarlar’la birlikte 716 yazında Agu’da onun karşısına çıkmışlarsa da vuku bulan iki şiddetli savaşta bozguna uğramışlardı.»",
   "716 yazı", "yil", ic="Yaz mevsimi; gün/ay verilmediğinden yıl hassasiyeti. Tatar künyesi f=0716 bu maddedir (ilk TARİHLİ tanık); aynı md. Orhon yazıtlarında Bumın’ın cenazesine heyet gönderen «Otuz Tatar»ı da anar fakat tarihlemez.", onem=2),
 M("0747-01-01", "Oğuzlar ve Tokuz Tatarlar Uygur kağanına isyan etti, yenildi", "isyan", ["uygur-kaganligi", "tatar"],
   "Uygurlar’ın ikinci hükümdarı Bilge Kağan zamanında (747-759) Oğuzlar bazan tek başlarına, bazan Tokuz Tatarlar’la birlikte isyan çıkardı; yenildiler ve Uygur hükümdarına yeniden itaat ettiler.",
   TT + "«Uygurlar’ın ikinci hükümdarı Teñride Bolmış İl İtmiş Bilge Kağan zamanında (747-759) Oğuzlar bazan tek başlarına, bazan Tokuz Tatarlar’la birlikte isyan çıkarmışlarsa da yenilmişler ve sonunda Uygur hükümdarına yeniden itaat etmişlerdi.»",
   "747-759", "onyil", ic="TDV iki ucu verir (747-759); 747 = aralığın başı (ilk gün), asıl isyan yılı bilinmiyor.", onem=1),
 M("1202-01-01", "Cengiz Han Tatarları Dalan Nemürges’te ağır yenilgiye uğrattı", "savas", ["tatar", MOG],
   "Cengiz Han köpek yılında (1202) Tatarlar’ı Dalan Nemürges’te ağır bir yenilgiye uğrattı; TDV’nin ayrı anlatımına göre aynı yıl Tatar ili üzerine büyük bir sefer yaptı. Tatarlar Moğol-Tatar düşmanlığının tarafıydı.",
   TT + "«Ardından Cengiz Han it yılında (1202) Tatarlar’ı Dalan Nemürges’te ağır bir yenilgiye uğrattı.» | " + CG + "«Timuçin 1202 yılında Tatar ili üzerine büyük bir sefer yaparak düşmanlarına ağır bir darbe vurdu.»",
   "1202 (it yılı)", "yil", ic=MOGNOT + " Künye t=1202 bu yenilgiye bağlandı; Tatarlar’ın tamamen ortadan kalktığı TDV’de söylenmez.", onem=2),
]
# --- Ongut
K += [
 M("1204-01-01", "Öngüt hükümdarı Alakuş Tigin Timuçin’e Nayman-Merkit ittifakını haber verdi", "ittifak", ["ongut", MOG],
   "Öngüt hükümdarı Alakuş Tigin 1204’te Timuçin’e haber göndererek Tayang Han ile Kutuku’nun anlaşmasını bildirdi; Öngütler Timuçin’in müttefiki olarak anılır. Bu, TDV’de Öngütler’in tarihli ilk görünüşüdür.",
   CG + "«1204 yılında Ongut Hükümdarı Alakuş Tigin, Timuçin’e haber göndererek Nayman Hükümdarı Tayang Han’ın Merkit Hükümdarı Kutuku ile anlaşma yaptığını … haber verdi.» | " + TT + "«Bunların arasındaki Öngütler’in başında Cengiz Han zamanında Alakuş Tegin vardı.»",
   "1204", "yil", ic=MOGNOT, onem=2),
]
# --- Oguz Yabgu
K += [
 M("0775-01-01", "Oğuzlar Aşağı Seyhun boylarına ve Mâverâünnehir’e geldi", "siyaset", ["oguz-yabgu", "abbasi"],
   "Batı Göktürk kağanlığı Karluklar’ca ortadan kaldırılınca (766) Batı Göktürkleri’ni temsil eden Oğuzlar, TDV’ye göre muhtemelen Halife Mehdî zamanında (775-785) Mâverâünnehir’e, Aşağı Seyhun boylarına geldi ve burada Peçenekler’i sürdü. Seyhun boylarındaki Oğuz elinin hükümdarları yabgu unvanı taşırdı.",
   OG + "«Oğuzlar bu olayın ardından muhtemelen Halife Mehdî-Billâh zamanında (775-785) Mâverâünnehir’e, Aşağı Seyhun boylarına geldiler.» | «Seyhun boylarındaki Oğuz elinin hükümdarları da yabgu unvanına sahipti.»",
   "775-785 (muhtemelen)", "onyil", ic="TDV «muhtemelen» der ve aralık verir; 775 aralığın ilk günü. Oğuz Yabgu Devleti’nin kuruluş günü kaynakta YOK; f=0775 kuruluş değil, yabgu elinin Seyhun’da yerleşmesidir. Önceki ağırlık merkezi: bk. 766 Karluk-Batı Göktürk olayı (TDV).", onem=2),
 M("0820-01-01", "Dokuz Oğuzlar Üsrûşene’ye akın yaptı (Taberî)", "savas", ["oguz-yabgu", "usrusana-afsin"],
   "TDV’ye göre Taberî, Dokuz Oğuzlar’ın 205’te (820-21) Üsrûşene’ye bir akın yaptığını yazar; 207’de (822-23) Me’mûn ordu gönderdiğinde bölgenin hâkimi Kâvus’un Oğuzlar’dan yardım istemesi, Oğuzlar’ın bu tarihlerde Aşağı Seyhun’da güçlü olduğunu gösterir.",
   OG + "«Taberî de 205 (820-21) yılında Üsrûşene’ye bir akın yaptıklarını yazar.» | «Abbâsî Halifesi Me’mûn’un 207’de (822-23) Üsrûşene’ye ordu gönderdiğinde bölgenin hâkimi Kâvus’un Oğuzlar’dan yardım istemesi bu tarihlerde Oğuzlar’ın Aşağı …»",
   "205 h. (820-21)", "yil", ic="Hicrî 205 = 820-21 (TDV mîlâdî karşılığını verir; gün/ay yok). İlgili grup «Dokuz Oğuzlar» (Ya‘kūbî’nin Toguz Guz’u); Oğuz Yabgu Devleti ile özdeşliği TDV’de açıkça söylenmez — beyan.", onem=1),
 M("0985-01-01", "Subaşı Selçuk Oğuz yabgusundan ayrılıp Cend’e gitti (Oğuz ülkesinde parçalanma)", "bolunme", ["oguz-yabgu"],
   "Meliknâme’ye göre Oğuz Yabgu Devleti’nin subaşısı Dukak ölünce yerine geçen oğlu Selçuk, yabgunun karısının kışkırtmasıyla yabgunun kendisini öldürebileceğini öğrenip tâbileriyle Cend şehrine gitti (375/985-86). TDV bunu Oğuz ülkesinde iç çekişme ve parçalanmanın başlangıcı sayar.",
   OG + "«Yabgunun karısının, ileride büyük bir tehlike teşkil edeceğini söyleyerek kocasını kendisini öldürmeye teşvik ettiğini duyan Selçuk kendisine tâbi olanlarla Cend şehrine gitmişti (375/985-86).»",
   "375 h. (985-86)", "yil", ic="Hicrî 375 = 985-86; yıl iki mîlâdî yıla yayılır, ilk yıl alındı.", onem=3),
 M("1002-01-01", "Son Sâmânî emîri İsmâil b. Nûh Oğuz yabgusuyla ittifak etti, yabgu Müslüman oldu", "ittifak", ["oguz-yabgu", "samani"],
   "Sâmânî devletini diriltmek isteyen İsmâil b. Nûh, Oğuz yabgusunun yanına gidip onunla ittifak yaptı ve dünürlük kurdu; yabgunun daha sonra Müslüman olduğu kaydedilir (392/1002). TDV bu Oğuzlar’ın Selçuklu Oğuzları olduğunu da düşünür.",
   OG + "«Son Sâmânî emîri İsmâil b. Nûh’un, Mâverâünnehir’i Karahanlılar’ın elinden geri almak için giriştiği faaliyetler sırasında Oğuz yabgusunun yanına giderek onunla ittifak yaptığı, dünürlük kurduğu ve yabgunun daha sonra müslüman olduğu kaydedilmektedir (392/1002).»",
   "392 h. (1002)", "yil", ic="TDV kendi içinde çelişir: aynı md. 393’te (1003) yardım istenen Oğuzlar’ın «Selçuklu Oğuzları» olduğunu ve Oğuz Yabgu Devleti’nin 1003’ten önce yıkılmış olması gerektiğini söyler. Künye t=1003 bu «en geç» sınırdır; hicrî 392 = 1001-02.", onem=2),
 M("1003-01-01", "Oğuz Yabgu Devleti’nin en geç bu tarihten önce yıkılmış olduğu anlaşılıyor", "son", ["oguz-yabgu"],
   "TDV, Oğuz Yabgu Devleti’nin yıkılışı hakkında kaynaklarda bilgi bulunmadığını; 393’te (1003) İsmâil b. Nûh’un yardım istediği Oğuzlar’ın Selçuklu Oğuzları olduğundan devletin 1003’ten önce yıkılmış olması gerektiğini söyler. İç çekişme ve Kıpçak baskısı ileri sürülen sebeplerdir.",
   OG + "«Bu da Oğuz Yabgu Devleti’nin 1003 yılından önce yıkılmış olduğunu göstermektedir.» | «Oğuz Yabgu Devleti’nin yıkılışı hakkında kaynaklarda bilgi bulunmamakta, ancak bazı görüşler ileri sürülmektedir.»",
   "1003’ten önce (üst sınır)", "onyil", ic="t bir ÜST SINIRDIR (en geç), gerçek yıkılış günü bilinmiyor. Mangışlak’taki ayrı Oğuz Yabgu kolu (Atsız’ın 1128’den önce yıkması, TDV) bu künyenin dışındadır.", onem=3),
]
# --- Usrusana
K += [
 M("0680-01-01", "Araplar Üsrûşene’ye ilk seferlerini yaptı; bölge Türk soylu Afşin ailesinin elindeydi", "siyaset", ["usrusana-afsin", "emevi"],
   "TDV’ye göre İslâm fetihlerinin başladığı dönemde Üsrûşene’nin yönetimi Afşin unvanı taşıyan, Türk soyundan gelen bir ailenin elindeydi; Arapların ilgisi Selm b. Ziyâd’ın 61’deki (680-81) ve Kuteybe b. Müslim’in 93’teki (711-12) seferleriyle başladı.",
   US + "«İslâm fetihlerinin başladığı dönemde Üsrûşene’nin yönetimi Afşin unvanı taşıyan ( Ya‘kūbî, Târîḫ , II, 397) ve Türk soyundan gelen bir ailenin elindeydi.» | «Müslüman Araplar’ın Üsrûşene’ye ilgileri Selm b. Ziyâd (61/680-81) ve Kuteybe b. Müslim’in (93/711-12) gerçekleştirdiği seferlerle başladı.»",
   "61 h. (680-81)", "yil", ic="Afşin ailesinin başlangıcı kaynakta TARİHLENMEMİŞ; f=0680 yalnız ilk TARİHLİ Arap teması (Selm b. Ziyâd 680-81), kuruluş değildir. Hicrî 61 = 680-81, ilk yıl alındı.", onem=2),
 M("0739-01-01", "Nasr b. Seyyâr Üsrûşene’yi kısmen itaat altına aldı; Afşin ailesi bağlılık yemini etti", "siyaset", ["emevi", "usrusana-afsin"],
   "Emevîler’in son Horasan ve Mâverâünnehir valisi Nasr b. Seyyâr 121’de (739) bölgeyi kısmen itaat altına aldı ve Afşin ailesi ona bağlılık yemini etti.",
   US + "«Emevîler döneminin son Horasan ve Mâverâünnehir Valisi Nasr b. Seyyâr 121 (739) yılında bölgeyi kısmen itaat altına aldı, Afşin ailesi de kendisine bağlılık yemini etti.»",
   "121 h. (739)", "yil", ic="«Kısmen itaat»: yerleşim sahipliği bu maddeyle değişmiş sayılmadı; Cizzah yamasında 0680-0893 arası Afşin yönetimi tek dilim olarak yazıldı (beyan). Hicrî 121 = 738-39.", onem=2),
 M("0819-01-01", "Abbâsîler Üsrûşene’ye vali olarak Yahyâ b. Esed’i gönderdi", "isgal", ["abbasi", "usrusana-afsin"],
   "Horasan valisi Gassân b. Abbâd, Halife Me’mûn’un emriyle Yahyâ b. Esed’i 204’te (819) Üsrûşene valiliğine gönderdi.",
   US + "«Abbâsîler devrinde Horasan Valisi Gassân b. Abbâd, Halife Me’mûn’un emriyle Yahyâ b. Esed’i 204’te (819) Üsrûşene valiliğine gönderdi.»",
   "204 h. (819)", "yil", ic="Hicrî 204 = 819-20; gün yok.", onem=2),
 M("0822-01-01", "Üsrûşene tamamen İslâm hâkimiyetine girdi; Afşinler Abbâsîler’e bağlı yönetmeyi sürdürdü", "siyaset", ["abbasi", "usrusana-afsin"],
   "Me’mûn’un 207’de (822) gönderdiği ordudan sonra bölge tamamen İslâm hâkimiyetine girdi; Afşin hânedanı Abbâsîler’e bağlı olarak yönetmeye devam etti. Bu nedenle Afşin emirliği Abbâsî vasalı olarak 893’e kadar sürdü.",
   US + "«Ancak bölgenin tamamen İslâm hâkimiyetine girmesi 207’de (822) gerçekleşti. Afşinler, Abbâsîler’e bağlı olarak bölgeyi yönetmeye devam ettiler.»",
   "207 h. (822)", "yil", ic="Hicrî 207 = 822-23. Cizzah yamasında 0680-0893 tek dilim Afşin (vasal) olarak yazıldı.", onem=3),
 M("0893-01-01", "Üsrûşene Sâmânî topraklarına katıldı; Afşin emirliği sona erdi", "son", ["samani", "usrusana-afsin"],
   "280’de (893) Üsrûşene Sâmânî topraklarına katıldı; Üsrûşene hâkimleri Sâmânîler’e sembolik olarak yıllık 4 akçe gönderirdi. Daha sonra bölge Karahanlılar’ın hâkimiyetine girdi.",
   US + "«280 (893) yılında Sâmânî topraklarına katılan Üsrûşene daha sonra Karahanlılar’ın hâkimiyeti altına girerek …» | «Sâmânîler devrinde Üsrûşene hâkimleri Sâmânîler’e sembolik olarak yıllık 4 akçe gönderirlerdi.»",
   "280 h. (893)", "yil", ic="Hicrî 280 = 893-94; ay/gün yok.", onem=3),
]
# --- Utigur
K += [
 M("0482-01-01", "Kutrigurlar Utigurlar’a yenildi; 2000 aile Bizans’a sığındı", "savas", ["utigur", "bizans"],
   "TDV’ye göre Bizans imparatoru Zenon (476-491) Kutrigur Bulgarları’nı doğudaki Utigurlar’a karşı kışkırttı; yenilen Kutrigurlar’dan 2000 kadar aile 482’de Bizans’ın hizmetine girip Trakya’ya yerleşti. Utigurlar bu sırada Kuban yörelerinde hâkimdi.",
   BU + "«Bulgar kabilelerinden Utigurlar doğuda Kuban ırmağı yörelerinde, Kutrigurlar da batıda Tuna’nın kolları ile Besarabya yörelerinde hâkimiyet kurdular. Ancak … Zenon (476-491), komşusu olan Kutrigur Bulgarları’nı Utigurlar’a karşı savaşa sürükledi. Yenilen Kutrigurlar’dan 2000 kadar aile savaş sonrasında (482) Bizans’ın hizmetine girerek Trakya’ya yerleştiler»",
   "482", "yil", ic="Künye f=0482 ilk TARİHLİ tanıktır (kuruluş değil; TDV Hunlar’ın 453’te dağılmasından sonra birliklerin kurulduğunu söyler, gün/yıl yok). Pencere 500-1281: Utigur ömrünün 500-559 kısmı pencerededir.", onem=2),
 M("0548-01-01", "Abasg elçileri Utigur Hunları’ndan korktukları için Justinianus’a gizlice başvurdu", "siyaset", ["utigur", "bizans"],
   "Procopius, Abasgi elçilerinin «Utigur Hunları’ndan korktukları» için isteklerini gizlice sunduğunu yazar; Dewing bu olayı Justinianus’un 21. yılına, 548’e koyar. Utigurlar Tanais–Maiotis (Azak) yöresindeki Kimmerler’in yurdunu tutan Hunlar olarak anlatılır.",
   PR5 + "«Now these envoys were moved by fear of the Utigur Huns in making the public declaration of the object of their coming» | «now they are called Utigurs» (VIII.iii-iv; dipnot: «548 A.D.»)",
   "Justinianus’un 21. yılı (548 A.D., Dewing dipnotu)", "yil", ic="Yıl çevirmenin dipnotundan (Dewing: «548 A.D.»); Procopius metni yıl yazmaz.", onem=1),
 M("0550-01-01", "Utigur kralı Sandil Justinianus’un kışkırtmasıyla kuzenleri Kutrigurlar’a saldırdı", "savas", ["utigur", "bizans"],
   "Justinianus, Kutrigurlar’ın Bizans’a akınları sürerken Utigurlar’a para göndererek onları Kutrigurlar’ın geride kalanlarına saldırmaya ikna etti; Utigur kralı Sandil Kutrigurlar’ı atalarının yurdundan sürdü. Kutrigur kalıntıları Bizans’a sığınınca Sandil öfkelendi.",
   PR5 + "«Thus the Emperor Justinian … persuaded them immediately to make an attack upon those of the Cutrigurs who had been left behind.» | «Sandil, the king of the Utigurs … had driven them from their ancestral abode» (VIII.xviii)",
   "Procopius VIII.xviii (yıl verilmez)", "onyil", ic="Procopius yıl yazmaz; aynı kitaptaki bağlam 548-553; onyıl hassasiyeti, 0550-01-01 yaklaşıktır (beyan).", onem=2),
 M("0559-01-01", "Bulgarlar (Utigurlar dahil) Avarlar’ın idaresine girdi", "son", ["avar", "utigur"],
   "TDV’ye göre Bulgarlar VI. yüzyılda Orta Asya’dan batıya göç eden Avarlar’ın idaresine girdi (559). Utigur siyasî birliği bu tarihten sonra kaynakta bağımsız anılmaz.",
   BU + "«Bulgarlar VI. yüzyılda Orta Asya’dan batıya göç eden Avarlar’ın idaresine girdiler (559).»",
   "559", "yil", ic="TDV «Bulgarlar» der, Utigur adını anmaz; Utigur künye t=0559 bu genel ifadeden alındı (beyanlı çıkarım).", onem=2),
]
# --- Sabir
K += [
 M("0530-01-01", "Sabir Hunları’ndan 3000 savaşçı Pers ordusuyla Roma Ermenistan’ına yürüdü", "savas", ["sabir", "sasani"],
   "Procopius’a göre Kavad, Roma’nın elindeki Ermenistan’a Mermeroes komutasında Persarmenyalılar ve Sunitler’den oluşan bir ordu gönderdi; yanlarında «Sabiri denilen kökten» 3000 Hun vardı. Bu, Sabirler’in 500 sonrası tarihlenebilir ilk görünüşüdür.",
   PR1 + "«There were also Huns with them, of the stock called Sabiri, to the number of three thousand, a most warlike race. And Mermeroes, a Persian, had been made general of the whole force.» (Wars I.xv)",
   "Procopius I.xv (yıl verilmez)", "onyil", ic="Procopius yıl yazmaz; olay Dara savaşı sonrası Pers-Roma savaşında (I.xii-xv, 530 yılı sıralaması) yer alır — onyıl hassasiyeti; 0530-01-01 yaklaşıktır. Sabir künyesi f=0530 bu maddedir (ilk TARİHLİ tanık; kuruluş değil).", onem=1),
 M("0550-01-01", "Sabeiri Hunları Lazlar ve Alanlar’la birlikte Bizans tarafında ittifak yaptı", "ittifak", ["sabir", "bizans"],
   "Procopius’a göre Kolhis (Laz) komutanı Gubazes uzun süre önce Alanlar ve Sabeiri Hunları’nı üç centenarium karşılığında ittifaka ikna etmişti; imparator Justinianus Sabeiri’ye anlaşılan parayı gönderdi. Hunlar İberya’yı Perslere kapalı tutacaktı.",
   PR1 + "«Now it happened that long before he had persuaded the Alani and Sabeiri to form an alliance with him» | «The Emperor Justinian at this time sent to the nation of the Sabeiri the money which had been agreed upon» (Wars II.xxix)",
   "Procopius II.xxix (Petra kuşatması bağlamı; yıl verilmez)", "onyil", ic="Yıl metinde yok; Petra kuşatması bağlamı (2. Pers savaşı, Laz cephesi) 540’ların sonu-550 — onyıl hassasiyeti.", onem=1),
 M("0555-01-01", "Pseudo-Zacharias Kafkas ötesinde çadırlarda yaşayan on üç halk arasında Sabirleri sayar", "siyaset", ["sabir"],
   "Pseudo-Zacharias’ın XII. kitabındaki coğrafî bölüm (Hamilton-Brooks’a göre 555’te yazılmış) Hazar Kapıları’nın ötesinde Hun ülkesinde çadırda yaşayan on üç halk içinde Unnogur, Ogor, Sabir, Bulgar, Kutrigur, Avar, Hazar ve Eftalit’i sayar.",
   PZ + "«the Unnogur, a people living in tents, the Ogor, the Sabir, the Bulgarian, the Khorthrigor, the Avar, the Khasar, the Dirmar (?), the Sarurgur (?), the Bagarsik (?), the Khulas (?), the Abdel, the Ephthalite, these thirteen peoples dwelling in tents»",
   "555 (kitabın XII. 7 bölümünün yazım yılı; Hamilton-Brooks giriş)", "yil", ic="Tarih bölümün YAZIM yılıdır (editör girişi: «12. 7 in 555»), olay yılı değil. Sabir künyesi t=0555 son TARİHLİ tanıktır; Sabirler’in sonraki kaderi (Hazar/Avar içinde erime) kaynaklanamadı.", onem=1),
]
# --- Onogur
K += [
 M("0555-01-01", "Pseudo-Zacharias Hun ülkesinde çadırlarda yaşayan halklar arasında Unnogur’u (Onogur) anar", "siyaset", ["onogur"],
   "Pseudo-Zacharias’ın XII.7’deki listesi (555’te yazılmış) Hazar Kapıları’nın ötesinde «çadırda yaşayan» Unnogur halkını (Onogur) ilk sırada anar. Bu, Onogur adının pencere içinde tarihlenebilir ilk görünüşüdür.",
   PZ + "«the Unnogur, a people living in tents, the Ogor, the Sabir, the Bulgarian, the Khorthrigor, the Avar, the Khasar … these thirteen peoples dwelling in tents»",
   "555 (kitabın XII. 7 bölümünün yazım yılı)", "yil", ic="Tarih bölümün yazım yılıdır, olay yılı değil. Onogur künyesi f=0555 bu ilk tarihli tanıktır; kuruluş değil. Girdideki t=0679/Phanagoria doğrulanamadı.", onem=1),
 M("0635-01-01", "Büyük Bulgar (Magna Bulgaria) devleti kuruldu; Onogur birliği ona bağlandı", "kurulus", ["buyuk-bulgaristan", "onogur"],
   "TDV’ye göre Batı Göktürk devleti yıkılınca Hazarlar 630’da bağımsızlıklarını ilân etti; Karadeniz’in kuzeyinde Hazarlar’dan başka bir de Büyük Bulgar (Magna Bulgaria) Türk devleti 635’te kuruldu ve 665’ten sonra Hazarlar’ca yıkıldı. Onogur halkı bu devletin çekirdeği olarak değerlendirilir ama TDV bu özdeşliği açıkça söylemez.",
   HZ + "«Bu dönemde Karadeniz’in kuzeyinde Hazarlar’dan başka bir de Büyük Bulgar (Magna Bulgaria) Türk Devleti kuruldu (635).» | TDV «İdil Bulgar Hanlığı» md. «Patria Onoguria (On-Ogur yurdu)» adını anar (atıf; ayrıntı açılmadı)",
   "635", "yil", ic="Onogur→Büyük Bulgaristan özdeşliği BEYANLI ÇIKARIMDIR (TDV açıkça söylemez); Onogur künyesi t=0635 buna bağlıdır. Atlasta `buyuk-bulgaristan` 0635-0680 var; Onogur MÜKERRER olabilir — birleştirme önerisi RAPOR’da.", onem=2),
]
# --- Yanqi
K += [
 M("0632-01-01", "Yanqi kralı Tuqizhi Tang’a elçi gönderdi, yol açılmasını istedi; Gaochang Yanqi’yi yağmaladı", "savas", ["gaochang", "yanqi-karashahr", "tang"],
   "Jiu Tang shu’ya göre Zhenguan 6’da (632) Yanqi kralı Tuqizhi Tang’a elçi gönderip büyük kum yolunun açılmasını istedi; imparator izin verince Gaochang öfkelenip Yanqi’yi yağmaladı.",
   JT198 + "«貞觀六年，突騎支遣使貢方物，復請開大磧路以便行李，太宗許之。… 及是，高昌大怒，遂與焉耆結怨，遣兵襲焉耆，大掠而去。»",
   "貞觀六年", "yil", yer="Karaşar (Yanqi)", ic="Zhenguan 1 = 627 ⇒ Zhenguan 6 = 632 (yıl hassasiyeti; ay/gün yok). Yanqi Çin kaynaklarında Gaochang ve Batı Göktürkler’e komşu, Batı Göktürk’e bağlı küçük krallıktır (JT198: «常役屬於西突厥»).", ict="貞觀 yıl adı → Jülyen: 627+5 = 632; ay/gün çevrilmedi.", onem=2),
 M("0638-01-01", "Chuyue, Chumi ve Gaochang Yanqi’nin beş kalesini alıp 1500 kişiyi esir etti", "savas", ["gaochang", "yanqi-karashahr"],
   "Zhenguan 12’de (638) Chuyue ve Chumi, Gaochang’la birlikte Yanqi’nin beş kentini zaptedip erkek ve kadın 1500 kişiyi esir aldı ve evleri yaktı.",
   JT198 + "«十二年，處月、處密與高昌攻陷焉耆五城，掠男女一千五百人，焚其廬舍而去。»",
   "貞觀十二年", "yil", yer="Karaşar (Yanqi)", ic="Zhenguan 12 = 638. Aynı kaynağın Gaochang bölümü (JT198 «Gaochang») bu olayı «Batı Göktürk Yibi Shad’la Yanqi’nin üç kentini yıktı» diye anlatır — kent sayısı (üç/beş) farklı; Yanqi bölümü esas alındı.", ict="貞觀 yıl adı → Jülyen: 627+11 = 638.", onem=2),
 M("0640-01-01", "Yanqi kralı Hou Junji’nin Gaochang seferine katıldı, Tang’a bağlandı", "ittifak", ["tang", "yanqi-karashahr", "gaochang"],
   "Zhenguan 14’te (640) Hou Junji Gaochang’ı ele geçirince Yanqi kralı elçi gönderip sefere destek olmak istedi; Gaochang kraliyet ordusuna gelip saygı sundu ve Gaochang’ın esir ettiği Yanqililer geri verildi. Yanqi bundan sonra Tang’a haraç ve elçi gönderdi.",
   JT198 + "«十四年，侯君集討高昌，遣使與之相結，焉耆王大喜，請為聲援。及破高昌，其王詣軍門稱謁。焉耆人先為高昌所虜者，悉歸之。»",
   "貞觀十四年", "yil", yer="Karaşar (Yanqi)", ic="Zhenguan 14 = 640. Gaochang’ın düşüş günü 0640-09-19 (bozkir1 yerleşim zinciri) ile uyumlu.", ict="貞觀 yıl adı → Jülyen: 627+13 = 640.", onem=2),
]
# --- sinir maddeleri (Degismez 2)
S = [
 {"t": "0644-11-05", "devlet": "tang", "taraflar": ["tang", "yanqi-karashahr"],
  "b": "Tang Anxi koruyucusu Guo Xiaoke Yanqi’yi yıkıp kralı Tuqizhi’yi esir aldı",
  "tur": "toprak-kazanc", "onem": 3, "dunya": 1, "kapsam": "dis", "yer": "Karaşar (Yanqi)", "yer_id": "Karaşar (Yanqi)",
  "etiket": ["toprak-degisimi", "konu-askeri", "dogu-500-1281"],
  "d": "Karaşar (Yanqi) (atlas yerleşimi «Karaşar (Yanqi)») 0644-11-05 civarında Tang egemenliğine geçti: Anxi koruyucusu Guo Xiaoke Yanqi kentini baskınla alıp kral Tuqizhi’yi esir etti ve Tang sarayına gönderdi; Yanqi bağımsız krallık olarak sona erdi.",
  "kaynak": JT3 + "«貞觀十八年 … 冬十月辛丑朔，日有蝕之。甲辰，初置太子司議郎官員。甲寅，幸洛陽宮。安西都護郭孝恪帥師滅焉耆，執其王突騎支送行在所。十一月壬寅，車駕至洛陽宮。» | " + JT198 + "«孝恪倍道兼行，夜至城下，潛遣將士浮水而渡。至曉，一時攀堞，鼓角齊震，城中大擾。孝恪縱兵擊之，虜其王突騎支»  | BEYANLI YAKLAŞIKLIK: atlasın «Karaşar (Yanqi)» noktası (42.06 K, 86.57 D) Yanqi’nin başkenti Yuanqu’yu (Han shu 96: «焉耆國，王治員渠城»; Wei shu 102: «都員渠城，白山南七十里») temsil eder; ikinci koordinat tanığı alınmadı, özdeşlik beyanlı.",
  "ic_not": "Gün YOK: Jiu Tang 3 olayı Zhenguan 18’in 10. ayı (辛丑朔) girdisinde, 甲寅’den sonra ve 11. aydan önce anar; ay hassasiyeti, ayın ilk günü alındı. Jülyen çevirisi: 貞觀十八年十月辛丑朔 = Jülyen 0644-11-05 (Gregoryen 0644-11-08; 日有蝕之 kaydı o günkü 644 Kasım tutulmasıyla uyumludur); 甲寅 = Jülyen 0644-11-18 — olay girdisi 甲寅’den sonra olduğundan gerçek gün 11-18’den sonra olabilir, ±30 gün içinde kalır. Girdi (bozkir raporu) t=0648 idi; kaynak (JT3) 644 verir — atlas düzelir.",
  "ic_not_takvim": "Çin ay-güneş takvimi → Jülyen: 貞觀十八年(644) 十月 ayı başı (辛丑朔) → Jülyen 0644-11-05 (Gregoryen 0644-11-08); astronomik ay/zhongqi hesabı (denetim/dogu/cin2/_cal.py: `ay 644 10` ve `644 10 辛丑`), ±1 gün; Jülyen kalır (1582 öncesi).",
  "sinir_id": [], "kesinlik": "ay"},
 {"t": "0893-01-01", "devlet": "samani", "taraflar": ["samani", "usrusana-afsin"],
  "b": "Üsrûşene (Cizzah/Dîzek dahil) Sâmânî topraklarına katıldı, Afşin emirliği bitti",
  "tur": "toprak-kazanc", "onem": 3, "dunya": 1, "kapsam": "dis", "yer": "Cizzah", "yer_id": "Cizzah",
  "etiket": ["toprak-degisimi", "konu-askeri", "dogu-500-1281"],
  "d": "Cizzah (atlas yerleşimi «Cizzah») 0893-01-01 gününde samani egemenliğine geçti: Üsrûşene eyaleti 280’de (893) Sâmânî topraklarına katıldı ve Afşin emirliği sona erdi.",
  "kaynak": US + "«280 (893) yılında Sâmânî topraklarına katılan Üsrûşene daha sonra Karahanlılar’ın hâkimiyeti altına girerek …» | «Dîzek şehrinin verimli tarım arazileri vardı.» (Dîzek = Cizzah/Jizzakh özdeşliği TDV’de açıkça kurulmaz; md. Ura-Tepe ile birlikte «Cîzek» şehrini de bölgenin başlıca merkezi sayar) | BEYANLI YAKLAŞIKLIK: atlasın «Cizzah» noktası (40.115 K, 67.842 D) Üsrûşene eyaletinin batı ucundaki Dîzek/Cîzek’i temsil eder; Cizzah’ın tam 893’te mi katıldığı TDV’de ayrı söylenmez, eyalet düzeyinde alındı.",
  "ic_not": "Hicrî 280 = 893-94; gün yok → 0893-01-01 (yıl hassasiyeti). Sâmânî ardılı için Cizzah zinciri bu işçide 893’te biter (devam_gerekli: 0893-01-01 → 1281-01-01); Sâmânî sonrası Karahanlı/Karahıtay dilimleri başka işin.",
  "sinir_id": [], "kesinlik": "yil"},
]

# ---------------------------------------------------------------- KUNYE
def kk(t, tur, b, kaynak, kes):
    return {"t": t, "tur": tur, "b": b, "kaynak": kaynak, "kesinlik": kes}

KN = [
 {"id": "merkit", "ad": "Merkitler", "tur": "konfederasyon", "bolge": "sibirya-bozkir", "f": "1197-01-01", "t": "1209-01-01", "baskent": "yok (göçebe; Selenga-Baykal bozkırı)",
  "ozet": "Moğol öncesi Selenga yöresi boy birliği; beyi Tokta-Beki Timuçin’in karısı Börte’yi kaçırmakla anılır. 1197’de Timuçin’ce yenildi, 1208 kışında hükümdarı ölünce dağıldı.",
  "kaynak": CG + "«1197’de Merkitler üzerine yürüyerek onları mağlûp etti ve Merkitler’in beyi Tokta-Beki’yi öldürttü.» | «Merkit hükümdarı öldü, kardeşleri ve çocukları Uygur ülkesine kaçtılar.»",
  "kesinlik": {"f": "yil", "t": "yil"}, "boya_gerekli": True,
  "ic_not": "f=1197 KURULUŞ DEĞİL, ilk TARİHLİ tanıktır (kuruluş kaynakta yok; TDV’de Merkit maddesi yok — «Merkit/Merkitler» arandı: yalnız Cengiz Han md. içinde geçiyor). t=1209-01-01: TDV 1208 kışı (tek gün seçimi; bkz. kronoloji). 1217 Subutay seferi kalıntıya yöneliktir. Girdi f=null idi. Moğolların Gizli Tarihi’ndeki ayrıntılar (Üdüyit/Uvas/Kodoi Merkitleri, Selenga) açılmadı. Bu polity bir boy birliğidir, merkezi şehir yoktur; haritada boyanmaz (yerleşim noktası yok).",
  "kronoloji": [kk("1197-01-01", "kurulus", "Merkitler kaynakta tarihli ilk görünüş: Timuçin Tokta-Beki’yi yendi", CG + "«1197’de Merkitler üzerine yürüyerek …»", "yil"),
                kk("1209-01-01", "son", "Merkit hükümdarı öldü, hanedan Uygur ülkesine kaçtı", CG + "«Merkit hükümdarı öldü, kardeşleri ve çocukları Uygur ülkesine kaçtılar.»", "yil")]},
 {"id": "naiman", "ad": "Naymanlar", "tur": "hanlik", "bolge": "orta-asya", "f": "1199-01-01", "t": "1204-01-01", "baskent": "yok (Altay-Kara İrtiş bozkırı; merkez TDV’de verilmiyor)",
  "ozet": "Moğolistan’ın batısında Altay dağları yöresinde yaşayan, Hıristiyanlık etkili Moğol/Türk soylu han (Buyruk Han, Tayang Han). 1199 ve 1204’te Timuçin’e yenildi; Küçlüg Karahıtay’a kaçıp orada hâkimiyeti ele geçirdi.",
  "kaynak": CG + "«1199’da Ong Han’la beraber Kişil-Baş mevkiinde Nayman Hakanı Buyruk Han’ı bozguna uğrattı.» | " + KH + "«kuzeyde Altay dağlarındaki Nayman ülkesine, batıda … dayanıyordu» (Karahıtay’ın en geniş sınırları)",
  "kesinlik": {"f": "yil", "t": "yil"}, "boya_gerekli": True,
  "ic_not": "f=1199 KURULUŞ DEĞİL, ilk TARİHLİ tanık (TDV’de Nayman/Naymanlar maddesi yok: arandı; yalnız Cengiz Han, Karahıtaylar, Karluklar, Tatarlar, Gürhan, İnak md. içinde geçer). t=1204: Tayang Han’ın müttefik gücü dağıtıldı (TDV Cengiz Han md.). TDV iç çelişkisi: aynı md. 1206’da hâlâ Tayang Han’dan söz eder. Küçlüg’ün 1211 sonrası Karahıtay hâkimiyeti ayrı polity (bozkir2’nin önerdiği kuclug-karahitay); Naiman künyesine dahil edilmedi. Girdi f=null idi. Merkez şehri bilinmiyor → haritada boyanmaz.",
  "kronoloji": [kk("1199-01-01", "kurulus", "Naymanlar kaynakta tarihli ilk görünüş: Kişil-Baş yenilgisi", CG + "«1199’da Ong Han’la beraber Kişil-Baş mevkiinde Nayman Hakanı Buyruk Han’ı bozguna uğrattı.»", "yil"),
                kk("1204-01-01", "son", "Tayang Han’ın Nayman müttefik gücü dağıtıldı", CG + "«Timuçin süratle hazırlıklarını tamamlayarak müttefik kuvvetleri yurtlarında bastı ve hepsini dağıttı.»", "yil")]},
 {"id": "tatar", "ad": "Tatar Konfederasyonu (Otuz/Dokuz Tatar)", "tur": "konfederasyon", "bolge": "orta-asya", "f": "0716-01-01", "t": "1202-01-01", "baskent": "yok (Tula ırmağı doğusu, Buyur Gölü çevresi)",
  "ozet": "Orhon yazıtlarında Otuz/Tokuz Tatar olarak anılan, XII. yüzyılda Buyur Gölü çevresinde yaşayan Moğolca konuşan boy birliği; Timuçin’in babası Yesügey’i zehirlediği için Moğollar’la düşmandı. 1202’de Cengiz Han’ca ağır yenilgiye uğratıldı.",
  "kaynak": TT + "«Oğuzlar, Tokuz Tatarlar’la birlikte 716 yazında Agu’da onun karşısına çıkmışlarsa da … bozguna uğramışlardı.» | «Ardından Cengiz Han it yılında (1202) Tatarlar’ı Dalan Nemürges’te ağır bir yenilgiye uğrattı.»",
  "kesinlik": {"f": "yil", "t": "yil"}, "boya_gerekli": True,
  "ic_not": "f=0716 KURULUŞ DEĞİL, TDV Tatarlar md.’deki ilk TARİHLİ tanık (Bumın’ın cenazesine heyet gönderen «Otuz Tatar» Orhon yazıtlarında geçer ama TDV tarih vermez). 716–1202 arası kesintisiz tek polity olup olmadığı kaynakta yok: TDV 747-759 Uygur dönemi isyanını ve XII. yy.’ı ayrı anlatır; aradaki boşluk beyanlıdır. t=1202: Dalan Nemürges yenilgisi; Tatarlar’ın tamamen yok olduğu söylenmez. «Tatar» adının sonradan Moğollar’a ve Kazan/Kırım Türkleri’ne genelleştiği TDV’de açıklanır; bu künye yalnız Moğolistan Tatarları’dır. Girdi f=null idi. Merkez şehri yok → boyanmaz.",
  "kronoloji": [kk("0716-01-01", "kurulus", "Tokuz Tatarlar kaynakta tarihli ilk görünüş: Agu savaşı", TT + "«716 yazında Agu’da»", "yil"),
                kk("1202-01-01", "son", "Cengiz Han Tatarları Dalan Nemürges’te ağır yenilgiye uğrattı", TT + "«Cengiz Han it yılında (1202) Tatarlar’ı Dalan Nemürges’te ağır bir yenilgiye uğrattı.»", "yil")]},
 {"id": "ongut", "ad": "Öngütler (Ongut)", "tur": "hanlik", "bolge": "dogu-asya", "f": "1204-01-01", "t": "1206-01-01", "baskent": "yok (Çin Seddi yakını, İç Moğolistan)",
  "ozet": "Çin Seddi yakınında, İç Moğolistan’da yaşayan Türk boyu («Ak Tatarlar»ın en kalabalığı); başbuğu Alakuş Tigin Timuçin’in müttefiki oldu. 1206’da Moğol İmparatorluğu kurulunca Moğol egemenliğine girdi.",
  "kaynak": CG + "«1204 yılında Ongut Hükümdarı Alakuş Tigin, Timuçin’e haber göndererek Nayman Hükümdarı Tayang Han’ın Merkit Hükümdarı Kutuku ile anlaşma yaptığını … haber verdi.» | " + TT + "«Bunların arasındaki Öngütler’in başında Cengiz Han zamanında Alakuş Tegin vardı.»",
  "kesinlik": {"f": "yil", "t": "yil"}, "boya_gerekli": True,
  "ic_not": "f=1204 KURULUŞ DEĞİL, ilk TARİHLİ tanık. t=1206-01-01: Moğol İmparatorluğu’nun ilânı (TDV Cengiz Han md., kurultay 1206) — Öngüt siyasî özerkliğinin bu tarihte bittiği kaynakta AÇIKÇA yok (beyanlı çıkarım: Alakuş Tigin bundan sonra Moğol vasalıdır). Girdideki t=1211 için kaynak bulunamadı. TDV’de ayrı Öngüt/Ongut maddesi yok (arandı; yalnız Cengiz Han, Tatarlar, Türk, Elifbâ md.’lerinde geçer). Merkez şehri yok → boyanmaz.",
  "kronoloji": [kk("1204-01-01", "kurulus", "Öngütler kaynakta tarihli ilk görünüş: Alakuş Tigin Timuçin’le iş birliği yaptı", CG + "«1204 yılında Ongut Hükümdarı Alakuş Tigin, Timuçin’e haber göndererek …»", "yil"),
                kk("1206-01-01", "son", "Moğol İmparatorluğu ilân edildi; Öngütler Moğol egemenliğinde", CG + "«kurultay sonunda “Cengiz” … unvanıyla kağan ilân edildi»", "yil")]},
 {"id": "oguz-yabgu", "ad": "Oğuz Yabgu Devleti", "tur": "devlet", "bolge": "orta-asya", "f": "0775-01-01", "t": "1003-01-01", "baskent": "Yenikent (Seyhun ağzı yakını)",
  "ozet": "Batı Göktürk yabgu ailesine mensup Oğuz yabgularının Aşağı Seyhun (Sırderya) boylarında kurduğu, başkenti Yenikent olan devlet; X. yüzyılın ilk yarısında bağımsız ve güçlü idi. Kıpçak baskısı ve iç çekişmeyle dağıldı; Selçuklular bu Oğuzlar’dan çıktı.",
  "kaynak": OG + "«Oğuz Yabgu Devleti X. yüzyılın birinci yarısında bağımsız ve güçlü bir devletti.» | «X. yüzyılda Oğuz Devleti’nin başşehri Seyhun ağzının yakınlarındaki Yenikent’ti.» | «Bu da Oğuz Yabgu Devleti’nin 1003 yılından önce yıkılmış olduğunu göstermektedir.»",
  "kesinlik": {"f": "onyil", "t": "onyil"}, "boya_gerekli": True,
  "ic_not": "f=0775-01-01: TDV Oğuzlar «muhtemelen 775-785» Oğuzlar’ın Seyhun boylarına gelişini söyler; DEVLETİN kuruluş günü kaynakta yok (TDV ayrıca Batı Göktürk’ün 766’da Karluklar’ca bitirilmesi ve Oğuzlar’ın onu temsil etmesini anlatır) — beyanlı alt sınır. t=1003: TDV ‘yıkılış hakkında kaynak yok; 1003’ten önce yıkılmış olmalı’ der (üst sınır) ama aynı md. 1002’de Oğuz yabgusunun Sâmânî emîriyle ittifak ettiğini de anar (iç çelişki, kronolojide beyan). Mangışlak’taki ayrı Oğuz Yabgu kolu (Kafşut, 1128’den önce Atsız’ca yıkıldı) bu künyenin dışında. Başkent Yenikent’in koordinatı çift tanıkla DOĞRULANAMADI (Nominatim «Yangikent» yalnız modern Özbek köylerini verdi; antik kent özdeşliği kurulmadı) → yerleşim YAZILMADI. Girdide f/t null idi.",
  "kronoloji": [kk("0775-01-01", "kurulus", "Oğuzlar Aşağı Seyhun boylarına geldi (yabgu eli)", OG + "«Oğuzlar … muhtemelen Halife Mehdî-Billâh zamanında (775-785) Mâverâünnehir’e, Aşağı Seyhun boylarına geldiler.»", "onyil"),
                kk("1003-01-01", "son", "Oğuz Yabgu Devleti’nin en geç bu tarihten önce yıkılmış olduğu anlaşılıyor", OG + "«Bu da Oğuz Yabgu Devleti’nin 1003 yılından önce yıkılmış olduğunu göstermektedir.»", "onyil")]},
 {"id": "usrusana-afsin", "ad": "Üsrûşana Afşinleri", "tur": "beylik", "bolge": "orta-asya", "f": "0680-01-01", "t": "0893-01-01", "baskent": "Bunjikat (Bencikes/Bûncikes)",
  "ozet": "Soğd–Fergana arasındaki Üsrûşene eyaletini «Afşin» unvanıyla yöneten Türk soylu yerli hânedan; Emevî ve Abbâsî egemenliğini tanıyıp 893’te Sâmânî topraklarına katılana dek yönetimini sürdürdü.",
  "kaynak": US + "«İslâm fetihlerinin başladığı dönemde Üsrûşene’nin yönetimi Afşin unvanı taşıyan … ve Türk soyundan gelen bir ailenin elindeydi.» | «280 (893) yılında Sâmânî topraklarına katılan Üsrûşene daha sonra Karahanlılar’ın hâkimiyeti altına girerek …» | «Ortaçağ’da bölgenin merkezi 10.000 nüfusa sahip Üsrûşene (Bencikes, Bûncikes) şehriydi (Strange, s. 474)»",
  "kesinlik": {"f": "yil", "t": "yil"}, "boya_gerekli": True,
  "ic_not": "f=0680 KURULUŞ DEĞİL: Afşin ailesinin başlangıcı kaynakta TARİHLENMEMİŞ; 680-81 ilk TARİHLİ Arap teması (Selm b. Ziyâd). TDV’de Afşin ailesi için ayrı md. «AFŞİN, Haydar b. Kâvûs» var (Abbâsî kumandanı, 840 civarı); TDV «Afşin» (Faruk Sümer) md. başka kişiyi (XI. yy. Selçuklu beyi) anlatır — karıştırılmadı. Başkent Bunjikat’ın (Bencikes) koordinatı çift tanıklı doğrulanamadı → yeni yerleşim YAZILMADI; bunun yerine bölgenin batı ucundaki Cizzah (Dîzek) mevcut yerleşimine YAMA yazıldı (beyanlı yaklaşıklık). Girdi t=0893 TDV ile uyumlu.",
  "kronoloji": [kk("0680-01-01", "kurulus", "Afşin ailesi Üsrûşene’yi yönetirken Araplar ilk seferlerini yaptı", US + "«Müslüman Araplar’ın Üsrûşene’ye ilgileri Selm b. Ziyâd (61/680-81) … seferleriyle başladı.»", "yil"),
                kk("0893-01-01", "son", "Üsrûşene Sâmânî topraklarına katıldı", US + "«280 (893) yılında Sâmânî topraklarına katılan Üsrûşene»", "yil")]},
 {"id": "utigur", "ad": "Utigurlar (Utigur Hun-Bulgar Birliği)", "tur": "konfederasyon", "bolge": "dogu-avrupa", "f": "0482-01-01", "t": "0559-01-01", "baskent": "yok (Kuban–Azak/Tanais yöresi)",
  "ozet": "Hunlar’ın dağılmasından sonra Kuban ırmağı yörelerinde hâkimiyet kuran Bulgar kabilesi; kuzenleri Kutrigurlar’la rakipti, Bizans’ın para göndererek kullandığı güç oldu. VI. yüzyılın ortasında Avarlar’ın egemenliğine girdi.",
  "kaynak": BU + "«Bulgar kabilelerinden Utigurlar doğuda Kuban ırmağı yörelerinde, Kutrigurlar da batıda Tuna’nın kolları ile Besarabya yörelerinde hâkimiyet kurdular.» | «Bulgarlar VI. yüzyılda Orta Asya’dan batıya göç eden Avarlar’ın idaresine girdiler (559).» | " + PR5 + "«the one group has been called Utigurs and the other Cutrigurs even to my time» (VIII.v)",
  "kesinlik": {"f": "yil", "t": "yil"}, "boya_gerekli": True,
  "ic_not": "f=0482 KURULUŞ DEĞİL: TDV’nin 482 savaşı ilk tarihli tanıktır (Hunlar’ın dağılması 453 sonrası, yıl yok). t=0559 TDV’nin genel «Bulgarlar Avarlar’ın idaresine girdi» ifadesinden alındı; Utigur adı anılmaz — beyanlı çıkarım (Menander Protector’daki Sandilch/Utigur-Avar ilişkisi bu oturumda okunmadı: Blockley 1985 çevirisi OCR olmadan alınamadı). Atlasta ORTAAV_D `utigur` kaydı varsa mükerrer olabilir (BOZKIR_RAPOR2). Merkez şehri yok → boyanmaz.",
  "kronoloji": [kk("0482-01-01", "kurulus", "Utigurlar Kutrigurlar’ı yendi (ilk tarihli tanık)", BU + "«Yenilen Kutrigurlar’dan 2000 kadar aile savaş sonrasında (482) Bizans’ın hizmetine girerek»", "yil"),
                kk("0559-01-01", "son", "Bulgarlar Avarlar’ın idaresine girdi", BU + "«Bulgarlar VI. yüzyılda … Avarlar’ın idaresine girdiler (559).»", "yil")]},
 {"id": "sabir", "ad": "Sabirler (Sabir Hun Birliği)", "tur": "konfederasyon", "bolge": "dogu-avrupa", "f": "0530-01-01", "t": "0555-01-01", "baskent": "yok (Kafkasya, Hazar Kapıları ötesi)",
  "ozet": "Kafkaslar’ın kuzeyinde, Hazar Kapıları ötesinde yaşayan Hun kökenli göçebe boy birliği; VI. yüzyılda Pers ve Bizans arasında paralı asker olarak anılır.",
  "kaynak": PR1 + "«There were also Huns with them, of the stock called Sabiri, to the number of three thousand, a most warlike race.» (I.xv) | " + PZ + "«the Unnogur … the Ogor, the Sabir, the Bulgarian, the Khorthrigor, the Avar, the Khasar …»",
  "kesinlik": {"f": "onyil", "t": "yil"}, "boya_gerekli": True,
  "ic_not": "f=0530 KURULUŞ DEĞİL: Procopius I.xv’in yıl yazmayan Pers-Roma savaşı bağlamı; onyıl hassasiyeti, ilk tarihlenebilir tanık. t=0555 SON TARİHLİ TANIK (Pseudo-Zacharias XII.7, yazım yılı 555): Sabirler’in sonraki kaderi (578-581 Pers-Bizans savaşında anıldıkları Vikipedi özetinden öğrenildi, birincil kaynak açılmadı → yazılmadı). Girdi f/t null idi. Atlasta ORTAAV’da Sabir yok; HINT/CIN’de yok. Merkez şehri yok → boyanmaz. BOŞLUK: polity’nin gerçek sonu doğrulanamadı.",
  "kronoloji": [kk("0530-01-01", "kurulus", "Sabir Hunları Pers ordusunda Roma Ermenistan’ına yürüdü (ilk tarihlenebilir tanık)", PR1 + "«Huns with them, of the stock called Sabiri, to the number of three thousand»", "onyil"),
                kk("0555-01-01", "son", "Pseudo-Zacharias’ın listesi: son tarihli tanık", PZ + "«the Sabir»", "yil")]},
 {"id": "onogur", "ad": "Onogur Konfederasyonu", "tur": "konfederasyon", "bolge": "dogu-avrupa", "f": "0555-01-01", "t": "0635-01-01", "baskent": "yok (Kuzey Kafkasya–Azak; girdideki Phanagoria doğrulanamadı)",
  "ozet": "Kuzey Kafkasya–Azak yöresinde «On-Ogur» (on boy) adıyla anılan Bulgar-Hun boy birliği; VII. yüzyılın ilk yarısında Kuvrat’ın Büyük Bulgaristan’ına dönüştü.",
  "kaynak": PZ + "«the Unnogur, a people living in tents, the Ogor, the Sabir, the Bulgarian …» | " + HZ + "«Bu dönemde Karadeniz’in kuzeyinde Hazarlar’dan başka bir de Büyük Bulgar (Magna Bulgaria) Türk Devleti kuruldu (635).»",
  "kesinlik": {"f": "yil", "t": "yil"}, "boya_gerekli": True,
  "ic_not": "f=0555 KURULUŞ DEĞİL: Pseudo-Zacharias XII.7’nin yazım yılı (555) — Unnogur adının pencere içinde tarihlenebilir ilk tanığı (Priscus’ta 463 Saragur/Ogur/Onogur kaydı bu oturumda açılmadı). t=0635: Büyük Bulgaristan’ın TDV’deki kuruluş yılı; Onogur→Bulgar özdeşliği BEYANLI ÇIKARIM. MÜKERRER RİSKİ: atlasta `buyuk-bulgaristan` (0635-0680) var; Onogur ayrı polity mi yoksa öncül mü — Emre karar versin. Girdide t=0679/baskent Phanagoria taslak idi; kaynak bulunamadı. Merkez şehri yok → boyanmaz.",
  "kronoloji": [kk("0555-01-01", "kurulus", "Unnogur adı Pseudo-Zacharias’ta anıldı (ilk tarihlenebilir tanık)", PZ + "«the Unnogur, a people living in tents»", "yil"),
                kk("0635-01-01", "son", "Büyük Bulgar devleti kuruldu; Onogur birliği ona dönüştü (beyanlı)", HZ + "«Büyük Bulgar (Magna Bulgaria) Türk Devleti kuruldu (635).»", "yil")]},
 {"id": "yanqi-karashahr", "ad": "Yanqi (Agni, Karaşar) Krallığı", "tur": "krallik", "bolge": "orta-asya", "f": "0500-01-01", "t": "0644-11-05", "baskent": "Yuanqu (Yanqi, Karaşar)",
  "ozet": "Tanrı Dağları’nın güneyinde, Tarım havzasının kuzeydoğusundaki Yanqi (Agni, Karaşar) vaha krallığı; Batı Göktürkler’e bağlıydı, Gaochang’la çekişti, 644’te Tang Anxi koruyucusu Guo Xiaoke’ce yıkıldı.",
  "kaynak": JT198 + "«焉耆國，在京師西四千三百里，東接高昌，西鄰龜茲，即漢時故地。其王姓龍氏，名突騎支。勝兵二千餘人，常役屬於西突厥。» | " + JT3 + "«安西都護郭孝恪帥師滅焉耆，執其王突騎支送行在所。» (貞觀十八年十月)",
  "kesinlik": {"f": "onyil", "t": "ay"}, "boya_gerekli": True,
  "ic_not": "f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı), kuruluş değil: Yanqi Han çağından beri bilinen eski krallıktır (Han shu 96 «焉耆國，王治員渠城»; Wei shu 102 «漢時舊國», Wan Dugui’nin 5. yy. ortası seferi) — kuruluş günü kaynakta yok. t=0644-11-05: Jiu Tang 3, Zhenguan 18 10. ay (辛丑朔 = Jülyen 0644-11-05); gün verilmez, ay hassasiyeti. Girdi t=0648’di; kaynak 644 verir — atlas düzelir. Yanqi’nin Tang’a bağlı vasal olarak sonradan yeniden anılması (栗婆準 «留攝國事») künye dışındadır. TDV’de ayrı Yanqi/Karaşar md. yok (arandı; İpek Yolu, Karahıtaylar, Talas Savaşı, Uygurlar md.’lerinde yalnız geçer).",
  "kronoloji": [kk("0500-01-01", "kurulus", "UFUK SINIR İŞARETİ: Yanqi Han çağından beri var olan krallık", WS102 + "«焉耆國，在車師南，都員渠城，白山南七十里，漢時舊國也。»", "onyil"),
                kk("0644-11-05", "son", "Guo Xiaoke Yanqi’yi yıkıp kral Tuqizhi’yi esir aldı", JT3 + "«安西都護郭孝恪帥師滅焉耆，執其王突騎支送行在所。»", "ay")]},
]

# ---------------------------------------------------------------- YAMA
YM = [
 {"ad": "Karaşar (Yanqi)", "mevcut_zincir_basi": "cagatay 1281-01-01",
  "aciklama": "YAMA GEREKLİ: s: önekini ekle (ilk dilim f 0500-01-01 UFUK SINIR İŞARETİ); devam_gerekli: 0644-11-05 → 1281-01-01 (Tang/Tibet/Uygur-Koço/Karahıtay dilimleri başka işin)",
  "s_onek": [
   {"f": "0500-01-01", "t": "0644-11-05", "d": "yanqi-karashahr", "kesinlik": "ay",
    "kaynak": WS102 + "«焉耆國，在車師南，都員渠城，白山南七十里，漢時舊國也。» | " + JT198 + "«焉耆國 … 其王姓龍氏，名突騎支。勝兵二千餘人，常役屬於西突厥。» | t: " + JT3 + "«貞觀十八年 … 十月 … 安西都護郭孝恪帥師滅焉耆，執其王突騎支送行在所。» (ay hassasiyeti; Jülyen 0644-11-05 = 十月 ayı başı) | f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı; önceki sahiplik bu kümenin işi değil; Yanqi’nin Gaochang-Batı Göktürk arası konumu için bk. kronoloji) | BEYANLI YAKLAŞIKLIK: atlasın «Karaşar (Yanqi)» noktası Yanqi başkenti Yuanqu’yu temsil eder (Han shu 96 «王治員渠城», Wei shu 102 «都員渠城，白山南七十里»); Yuanqu’nun tam koordinatı ikinci bir bağımsız tanıkla doğrulanmadı"}
  ],
  "devam_gerekli": "0644-11-05 → 1281-01-01"},
 {"ad": "Cizzah", "mevcut_zincir_basi": "cagatay 1281-01-01",
  "aciklama": "YAMA GEREKLİ: s: önekini ekle (ilk dilim f 0680-01-01 = ilk tarihli tanık, kuruluş değil; 0500→0680 başka işin); devam_gerekli: 0893-01-01 → 1281-01-01 (Sâmânî-Karahanlı-Karahıtay-Hârizmşah-Moğol dilimleri başka işin)",
  "s_onek": [
   {"f": "0680-01-01", "t": "0893-01-01", "d": "usrusana-afsin", "kesinlik": "yil",
    "kaynak": US + "«İslâm fetihlerinin başladığı dönemde Üsrûşene’nin yönetimi Afşin unvanı taşıyan … ve Türk soyundan gelen bir ailenin elindeydi.» | «Afşinler, Abbâsîler’e bağlı olarak bölgeyi yönetmeye devam ettiler.» | «280 (893) yılında Sâmânî topraklarına katılan Üsrûşene» | «Dîzek şehrinin verimli tarım arazileri vardı.» | f=0680-01-01 KURULUŞ DEĞİL, ilk TARİHLİ Arap teması (Selm b. Ziyâd 680-81); BEYAN: Emevî ve Abbâsî dönemlerinde Afşin ailesi vasal olarak yönettiği için tek dilim (739 Nasr b. Seyyâr «kısmen itaat», 822 «Abbâsîler’e bağlı») | BEYANLI YAKLAŞIKLIK: atlasın «Cizzah» noktası (40.115 K, 67.842 D, Jizzakh) Üsrûşene’nin batı ucundaki Dîzek/Cîzek’i temsil eder; TDV Dîzek ile Cîzek’i açıkça özdeşleştirmez, md. her iki adı da bölge şehri olarak sayar (Dîzek Fergana–Hucend yolu üzerindeki Zâmîn ile birlikte anılır)"}
  ],
  "devam_gerekli": "0893-01-01 → 1281-01-01"},
]

def js(name, var, obj, head):
    p = os.path.join(D, name)
    with io.open(p, "w", encoding="utf-8") as f:
        f.write("// " + head + "\nwindow." + var + " = " + json.dumps(obj, ensure_ascii=False, indent=1) + ";\n")
    print(name, len(obj))

js("kunye_yeni.js", "DOGU_KUNYE_BOZKIR4", KN, "kunye_yeni.js — DOGU BOZKIR-4 yeni künyeler (merkit, naiman, tatar, ongut, oguz-yabgu, usrusana-afsin, utigur, sabir, onogur, yanqi-karashahr)")
js("kronoloji_cok_dogu_bozkir4.js", "KRONOLOJI_COK_DOGU_BOZKIR4", K, "kronoloji_cok_dogu_bozkir4.js — DOGU 500-1281 / BOZKIR-4 anlatı maddeleri")
js("kronoloji_sinir_dogu_bozkir4.js", "KRONOLOJI_SINIR_DOGU_BOZKIR4", S, "kronoloji_sinir_dogu_bozkir4.js — DOGU BOZKIR-4 yerleşim sahip değişimi maddeleri (Değişmez 2)")
js("yama_bozkir4.js", "YAMA_DOGU_BOZKIR4", YM, "yama_bozkir4.js — MEVCUT yerleşimlere eklenecek s: önekleri")
with io.open(os.path.join(D, "yerlesimler_dogu_bozkir4.js"), "w", encoding="utf-8") as f:
    f.write("// yerlesimler_dogu_bozkir4.js — BOZKIR-4: yeni yerleşim YOK (çift tanıklı koordinat bulunamadı); mevcut yerleşimler için yama_bozkir4.js\nwindow.YERLESIMLER_DOGU_BOZKIR4 = [];\n")
