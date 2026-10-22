# -*- coding: utf-8 -*-
# koja1 Kore: zincirler (yama + yeni yerlesim) ve kronoloji_cok maddeleri
from _kr_data import *

HAN_ABI = "BEYANLI YAKLAŞIKLIK (ABİ MERKEZ: Hanseong/Han havzası): bu yerin kendi adı kaynakta ayrı geçmez; Han Nehri havzası olayı (Hanseong) bölge sahibini belirler."
GUN_ABI = "BEYANLI YAKLAŞIKLIK (ABİ MERKEZ: Gyeongju): Silla'nın çöküşünde (936-01-08) Silla ülkesinin tamamı Goryeo'ya geçti (Goryeosa: «除新羅國爲慶州»); bu yerin kendi adı o günkü kayıtta geçmez."

# yer: (anahtar, mevcut_mu, son_t, mevcut_zincir_basi, [(olay, d, ek_specs, beyan)])
CH = {}
CH['Seul (Hanyang)'] = ('seul', 'yama', '1281-01-01', 'goryeo 1281-01-01', [
    ('UFUK', 'goguryeo', [], "Seul Goguryeo'da: Hanseong'un 475'te Goguryeo'ya düşüşü (SS18); ufuk işareti: 500 pencere başı."),
    ('E551', 'baekje', [(G56, '南京留守官楊州本高句麗北漢山郡', '爲麗兵所害。')], HAN_ABI),
    ('E553', 'silla', [(SS35, '漢陽郡，本高句麗北漢山郡（一云平壤），眞興王爲州，置軍主')], HAN_ABI),
    ('E901', 'taebong', [], HAN_ABI),
    ('E918', 'goryeo', [], '')])
CH['İnçon (Incheon)'] = ('incheon', 'yama', '1281-01-01', 'goryeo 1281-01-01', [
    ('UFUK', 'goguryeo', [], "İnçon (Michuhol) Goguryeo kökenli (Goryeosa); ufuk işareti 500."),
    ('E551', 'baekje', [], HAN_ABI), ('E553', 'silla', [(SS35, '邵城縣，本高句麗買召忽縣，景德王改名')], HAN_ABI),
    ('E901', 'taebong', [(SS50, '擊破孔巖、黔浦、穴口等城。')], HAN_ABI), ('E918', 'goryeo', [], '')])
CH['Ganghwa'] = ('ganghwa', 'yama', '1281-01-01', 'goryeo 1281-01-01', [
    ('UFUK', 'goguryeo', [], "Ganghwa (Hyeolgu-gun) Goguryeo kökenli; ufuk işareti 500."),
    ('E551', 'baekje', [], HAN_ABI), ('E553', 'silla', [(SS35, '海口郡，本高句麗穴口郡，在海中，景德王改名，今江華縣')], HAN_ABI),
    ('E901', 'taebong', [(SS50, '擊破孔巖、黔浦、穴口等城。')], HAN_ABI), ('E918', 'goryeo', [], '')])
CH['Çungcu (Chungju)'] = ('chungju', 'yama', '1281-01-01', 'goryeo 1281-01-01', [
    ('UFUK', 'goguryeo', [], "Chungju (Gukwon-seong) Goguryeo kökenli; ufuk işareti 500."),
    ('E551C', 'silla', [], ''),
    ('E901', 'taebong', [(SS50, '又命太祖伐廣州、忠州、唐城、青州、槐壤等，皆平之。')],
     "BEYANLI YAKLAŞIKLIK: Chungju 900'de Wang Geon (Gung Ye adına) tarafından alındı; 892'den beri Yang Gil/Buk-won komutanlığı bölgede etkindi (SS50: «取國原等三十餘城有之»): 'taebong' künye f 901 olduğundan dilim 901'de başlatıldı."),
    ('E918', 'goryeo', [], '')])
CH['Taegu (Daegu)'] = ('daegu', 'yama', '1281-01-01', 'goryeo 1281-01-01', [
    ('UFUK', 'silla', [], "Daegu (Dalgubeol) Silla kökenli; ufuk işareti 500."),
    ('E936J', 'goryeo', [], GUN_ABI)])
CH['Pusan'] = ('busan', 'yama', '1281-01-01', 'goryeo 1281-01-01', [
    ('UFUK', 'silla', [], "Pusan (Geochilsan-gun/Dongnae) Silla kökenli; ufuk işareti 500."),
    ('E936J', 'goryeo', [], GUN_ABI)])
CH['Kyongcu (Gyeongju)'] = ('gyeongju', 'yama', '1281-01-01', 'goryeo 1281-01-01', [
    ('UFUK', 'silla', [], "Gyeongju Silla başkenti; ufuk işareti 500 (Jijeung 500'de tahta çıktı)."),
    ('E936J', 'goryeo', [], '')])
CH['Kongcu (Gongju)'] = ('gongju', 'yama', '1281-01-01', 'goryeo 1281-01-01', [
    ('UFUK', 'baekje', [], "Gongju (Ungjin) Baekje başkenti 475-538; ufuk işareti 500."),
    ('E660', 'tang', [(SS36, '熊州，本百濟舊都，唐高宗遣蘇定方平之，置熊津都督府')], ''),
    ('E676', 'silla', [(SS36, '新羅文武王取其地有之，神文王改爲熊川州')], ''),
    ('E904', 'taebong', [], ''),
    ('E918', '__BOSLUK__', [], "BOŞLUK BEYANI: arandı, bulunamadı: Gongju'nun 918-07-25 ile 936-09 arasındaki sahibi (Goryeosa j.1-2 ve Samguk sagi j.50'de 'Gongju' yalnız 904 teslimi ve Goryeosa j.56 'Taejo 23 (940) yeniden adlandırdı' kayıtlarında geçer; Hubaekje/Goryeo hâkimiyeti dönemi okunmadı)."),
    ('E936S', 'goryeo', [(G56, '公州本百濟熊川', '新羅盡有其地。')], "BEYANLI YAKLAŞIKLIK: Hubaekje'nin 936'da Goryeo'ya geçişi ülke çapındaydı; Goryeosa j.56: Gongju Taejo 23'te (940) Goryeo adıyla yeniden adlandırıldı (kayıt 940 Goryeo hâkimiyetini gösterir).")])
CH['Concu (Jeonju)'] = ('jeonju', 'yama', '1281-01-01', 'goryeo 1281-01-01', [
    ('UFUK', 'baekje', [], "Jeonju (Wansan) Baekje kökenli; ufuk işareti 500."),
    ('E660', 'tang', [], "BEYANLI YAKLAŞIKLIK (ABİ MERKEZ: Ungjin/Sabi): Tang beş dudufu kurdu (Jiu Tangshu 4: «以其地分置熊津等五都督府»); Wansan'ın hangi dudufuya bağlandığı okunan kaynakta ayrı yazılı değil."),
    ('E676', 'silla', [(SS36, '全州，本百濟完山，眞興王十六年爲州，二十六年州廢，神文王五年復置完山州，景德王十六年改名')],
     "BEYANLI YAKLAŞIKLIK (ABİ MERKEZ: Ungjin): Wansan'ın Silla'ya geçiş günü kaynakta ayrı yok; Tang'ın Ungjin'den çekildiği gün (676-02-24) alındı; Wansan-ju 685'te (Sinmun 5) Silla eyaleti olarak yeniden kuruldu (SS36)."),
    ('E900', 'hubaekje', [], ''), ('E936S', 'goryeo', [], '')])
CH['Kaesong'] = ('kaesong', 'yama', '1000-01-01', 'goryeo 1000-01-01', [
    ('UFUK', 'goguryeo', [], "Kaesong (Bubuyeo-gap/Songak) Goguryeo kökenli; ufuk işareti 500."),
    ('E668', 'tang', [], "BEYANLI YAKLAŞIKLIK (ABİ MERKEZ: Pyongyang): Jiu Tangshu «以其地為安東都護府»: Goguryeo'nun bütün toprağı (170 kale) Andong Genel Valiliğine bağlandı; Songak'ın adı geçmez."),
    ('E676', '__BOSLUK__', [], "BOŞLUK BEYANI: arandı, bulunamadı: Songak'ın 676-02-24 (Tang'ın Andong'dan çekilişi) ile 694 (Silla'nın Songak kalesini inşası) arası sahibi (Samguk sagi j.5-8 ve Goryeosa j.56'da bu aralık için Songak'a atıf yok)."),
    ('E694', 'silla', [], ''),
    ('E901', 'taebong', [(G1, '世祖時爲松嶽郡沙粲，乾寧三年丙辰，以郡歸于裔，裔大喜，以爲金城太守。'), (SS50, '善宗謂松岳郡，漢北名郡，山水竒秀，遂定以為都。')],
     "BEYANLI YAKLAŞIKLIK: Songak 896'da Gung Ye'ye katıldı, 897/898'de başkent oldu (SS50, G1); Taebong künye f 901 olduğundan dilim 901'de başlatıldı."),
    ('E918', 'goryeo', [], '')])
CH['Pyongyang'] = ('pyongyang', 'yama', '1281-01-01', 'goryeo 1281-01-01', [
    ('UFUK', 'goguryeo', [], "Pyongyang Goguryeo başkenti 427'den; ufuk işareti 500."),
    ('E668', 'tang', [], ''),
    ('E918', 'goryeo', [(SS50, '徃者新羅請兵於唐，以破高勾麗，故平壤舊都，鞠為茂草。'), (G58, '太祖元年，以平壤荒廢，量徙鹽、白、黃、海、鳳諸州民，以實之，爲大都護府。')],
     "DÖNEM KIRPILDI (676-02-24 → 918-07-25): şehir terk edilmişti (SS50: Gung Ye, 901: «平壤舊都，鞠為茂草»; Goryeosa j.58: «太祖元年，以平壤荒廢»); Goryeo 918'de nüfus yerleştirip yeniden kurdu. Dilim, Taejo'nun tahta çıkış gününden başlatıldı (yeniden kuruluş günü yok: Taejo 1)")])
CH['Gimhae'] = ('gimhae', 'yeni', '1281-01-01', None, [
    ('UFUK', 'gaya-konfederasyonu', [], "Gimhae (Geumgwan Gaya) Gaya'da; ufuk işareti 500."),
    ('E532', 'silla', [], ''), ('E936J', 'goryeo', [(G57, '金州本駕洛國。')], GUN_ABI)])
CH['Goryeong (Daegaya)'] = ('goryeong', 'yeni', '1281-01-01', None, [
    ('UFUK', 'gaya-konfederasyonu', [], "Goryeong (Daegaya) Gaya'da; ufuk işareti 500."),
    ('E562', 'silla', [], ''), ('E936J', 'goryeo', [], GUN_ABI)])
CH['Sabi (Buyeo)'] = ('sabi', 'yeni', '1281-01-01', None, [
    ('E538', 'baekje', [], ''), ('E660', 'tang', [], ''), ('E671', 'silla', [], ''),
    ('E936S', 'goryeo', [(G56, '唐師旣去，新羅盡得百濟舊地。')], "BEYANLI YAKLAŞIKLIK (ABİ MERKEZ: Jeonju/Wansan): Sabi (Buyeo) 900-936 arasında Hubaekje'ye bağlı sayılmadı (kaynakta Sabi için Hubaekje kaydı yok); Silla'dan Goryeo'ya geçiş Hubaekje'nin çöküşü (936-09) alındı. Hubaekje dilimi yazılamadı: Sabi'nin 892-936 arası sahibi kaynakta açık değil.")])
ev('E538', '0538-01-01', 'yil', "Kral Seong başkenti Ungjin'den Sabi'ye taşıdı, ülke adını Nambuyeo yaptı.",
   [(SS26, '十六年，春，移都於泗沘，國號南扶餘。'), (G56, '百濟聖王，自熊川，來都之，號南扶餘。')], 'Samguk sagi Seong 16 (538). Gün yok: yıl.')
CH['Sanggyeong (Longquanfu)'] = ('sanggyeong', 'yeni', '0929-01-01', None, [
    ('E755', 'balhae', [], ''), ('E926', 'dongdan', [], '')])
ev('E755', '0755-01-01', 'yil', "Balhae Kralı Dae Hum-mu (Qinmao) başkenti Sanggyeong (Longquanfu, Hulhan-seong yakını) bölgesine taşıdı.",
   [(XT219, '天寶末，欽茂徙上京，直舊國三百里忽汗河之東。'), (XT219, '故地爲上京，曰龍泉府')],
   "BEYANLI YAKLAŞIKLIK: Xin Tangshu «天寶末» der (755-756); alt sınır 755 alındı. Hulhan-seong (Balhae başkenti) ile Longquanfu'nun özdeşliği Liao shi 2 (忽汗城 = 渤海國都) ile birlikte okunur.")
ev('E926', '0926-04-04', 'gun', "Liao, Balhae'yi Dongdan adıyla bir Khitan vasal krallığına çevirdi; Hulhan-seong 'Tianfu' adını aldı.",
   [(LS2, '辛未，諲譔素服，稿索牽羊，率僚屬三百餘人出降。', '上優禮而釋之。'), (LS2, '丙午，改渤海國為東丹，忽汗城為天福。冊皇太子倍為人皇王')],
   "Liao shi 2 Tianxian 1 (926): 1. ay 辛未 (926-02-28) Dae Inseon teslim oldu; 2. ay 丙午 (926-04-04) ülke Dongdan, Hulhan-seong Tianfu oldu. Künye t = 0926-04-03 / Dongdan f = 0926-04-04 (KOJA_RAPOR2). KOJA_RAPOR2 ve KOJA_REF 'teslim günü mü, ad değişikliği mi' kararını Emre'ye bırakır.",
   "Jülyen: 天顯元年 2. ay 丙午 = 926-04-04 (925-12'den sonra artık ay: Liao shi 2 «閏月壬辰»; 1. ay başı ≈ 926-02-15); " + TK_GUN)
ev('E929', '0929-01-01', 'yil', "Liao Dongdan halkını Liaoyang'a (Dongping) nakletti; Hulhan/Tianfu şehri boşaldı.",
   [(LS3, '時人皇王在皇都，詔遣耶律羽之遷東丹民以實東平。')],
   "Liao shi 3 Tianxian 3 (928) 12. ay: Dongdan halkının Dongping'e nakli emri; 12. ay ≈ Ocak 929 → künye t 0929-01-01. Şehrin sonraki varlığı (Liao Longquanfu) aranmadı: dilim kırpıldı.")
