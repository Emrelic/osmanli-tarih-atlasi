# -*- coding: utf-8 -*-
# koja1 Kore yarisi VERI: olaylar (s: kirilma gunleri), zincirler, kronoloji_cok maddeleri
from _kr_lib import q, kaynak, etiket, DISP
DISP['南齊書'] = 'Xiao Zixian, Nan Qi shu'

SS04 = 'zh_三國史記_卷04.txt'; SS05 = 'zh_三國史記_卷05.txt'; SS06 = 'zh_三國史記_卷06.txt'; SS07 = 'zh_三國史記_卷07.txt'
SS08 = 'zh_三國史記_卷08.txt'; SS18 = 'zh_三國史記_卷18.txt'; SS19 = 'zh_三國史記_卷19.txt'; SS26 = 'zh_三國史記_卷26.txt'
SS35 = 'zh_三國史記_卷35.txt'; SS36 = 'zh_三國史記_卷36.txt'; SS50 = 'zh_三國史記_卷50.txt'
G1 = 'zh_高麗史_卷一.txt'; G2 = 'zh_高麗史_卷二.txt'; G56 = 'zh_高麗史_卷五十六.txt'; G57 = 'zh_高麗史_卷五十七.txt'; G58 = 'zh_高麗史_卷五十八.txt'
G5 = 'zh_高麗史_卷五.txt'
NS19 = 'zh_日本書紀_卷第十九.txt'
JT4 = 'zh_舊唐書_卷4.txt'; JT5 = 'zh_舊唐書_卷5.txt'; JT199 = 'zh_舊唐書_卷199上.txt'
Z201 = 'zh_資治通鑑_卷201.txt'; Z202 = 'zh_資治通鑑_卷202.txt'
LS2 = 'zh_遼史_卷2.txt'; LS3 = 'zh_遼史_卷3.txt'; LS17 = 'zh_遼史_卷17.txt'
XT219 = 'zh_新唐書_卷219.txt'; YUSA = 'zh_三國遺事_卷第二.txt'; NQ58 = 'zh_南齊書_卷58.txt'

AD = {'goguryeo': 'Goguryeo', 'baekje': 'Baekje', 'silla': 'Silla', 'tang': 'Tang', 'taebong': 'Taebong', 'goryeo': 'Goryeo',
      'hubaekje': 'Sonraki Baekje (Hubaekje)', 'gaya-konfederasyonu': 'Gaya Konfederasyonu', 'dongdan': 'Dongdan',
      'balhae': 'Balhae', 'liao-hanedani': 'Liao', 'heungyo-guk': 'Heungyo', '__BOSLUK__': 'sahipsiz (boşluk)'}

TK_GUN = 'Jülyen; sexagenary gün işareti + ortalama yeniay hesabı (±1 gün), KOJA_RAPOR2.md ile aynı sonuç'

# ---- olaylar: t, kes, ozet(TR cümle), kaynak specs, ic_not, ic_not_takvim ----
EV = {}
def ev(k, t, kes, ozet, specs, ic_not='', takvim=''):
    EV[k] = dict(t=t, kes=kes, ozet=ozet, specs=specs, ic_not=ic_not, takvim=takvim)

ev('E551', '0551-01-01', 'yil', "Baekje Kralı Seong (Seongmyeong), Silla ve Mimana ile birlikte Goguryeo'dan Han Nehri aşağı havzasını (Hanseong) geri aldı.",
   [(NS19, '百濟聖明王親率衆及二國兵', '遂復故地。')],
   "Nihon Shoki Kinmei 12 (551); Samguk sagi bu geri alışı yazmaz. Aynı kaynak 13. yıl (552): «百濟棄漢城與平壤。新羅因此入居漢城。» [Nihon Shoki'nin 'Hanseong' = Seul çevresi Han havzası; kaynak yer adını yalnız böyle verir]. Gün yok: yıl.")
ev('E553', '0553-01-01', 'yil', "Silla, Baekje'nin kuzeydoğu uç bölgesini (Han Nehri havzası) alıp Sinju (Yeni Eyalet) kurdu.",
   [(SS04, '秋七月，取百濟東北鄙，置新州，以阿飡武力爲軍主。'), (SS26, '新羅取東北鄙，置新州。'), (NS19, '百濟棄漢城與平壤。新羅因此入居漢城。')],
   "Samguk sagi 553 (Jinheung 14 = Seong 31) 7. ay (ay-güneş); Nihon Shoki aynı olayı 552'ye koyar (çelişki: 553 SS esas alındı). Gün yok: yıl.")
ev('E551C', '0551-01-01', 'yil', "Silla, Goguryeo'nun on kalesini (Jukryeong kuzeyi) aldı; Gukwon-seong (Chungju) Silla küçük başkenti oldu.",
   [(SS04, '王命居柒夫等，侵高句麗，乘勝取十郡。'), (G56, '忠州牧本高句麗國原城'), (G56, '新羅取之，眞興王，置小京，景德王，改爲中原京。'), (SS04, '十八年，以國原爲小京。')],
   "BEYANLI YAKLAŞIKLIK: Samguk sagi 551 (Jinheung 12) 'on kale'yi alır, Gukwon-seong'un adını açıkça yazmaz; Goryeosa 'Silla aldı, Jinheung küçük başkent yaptı' der; Samguk sagi Jinheung 18 (557) 'Gukwon küçük başkent' yazar. Alma günü kaynakta yok; 551 alt-üst sınır olarak seçildi (en geç 557). Gün yok: yıl.")
ev('E901', '0901-01-01', 'yil', "Gung Ye krallığını (Taebong) ilan etti; Hanbuk (Han Nehri kuzeyi) bölgesi onun idaresine geçti.",
   [(SS50, '光化元年戊午春二月，葺松岳城。以我太祖為精騎大監，伐楊州、見州。'), (SS50, '天復元年辛酉，善宗自稱王', '吾必報其讎。」')],
   "BEYANLI YAKLAŞIKLIK: Gung Ye bölgeyi 896-900 arasında fiilen aldı (SS50: 896 Songak/Sungryeong/Imgang, 897 Songak başkent, 898 Yangju-Gyeon, 900 Gwangju-Chungju); Taebong künye f = 901 (天復元年 自稱王) olduğu için dilim 901'de başlatıldı. Gün yok: yıl.")
ev('E918', '0918-07-25', 'gun', "Wang Geon Taebong'u devirip Goryeo'yu kurdu; Gung Ye'nin toprakları Goryeo'ya geçti.",
   [(G1, '至六月乙卯，騎將洪儒', '尋爲斧壤民所害。'), (G1, '元年夏六月丙辰，卽位于布政殿，國號高麗，改元天授。')],
   "Goryeosa j.1: 6. ay 乙卯 gecesi (918-07-24) Gung Ye kaçtı, 丙辰 (918-07-25) Wang Geon tahta çıktı.",
   "Jülyen: 丙辰 = 918-07-25 (乙卯 = 918-07-24); " + TK_GUN)
ev('E936J', '0936-01-08', 'gun', "Silla Kralı Gyeongsun Goryeo'ya teslim oldu; Silla ülkesi kaldırılıp Gyeongju adıyla Wang Geon'a tımar verildi.",
   [(G2, '十二月辛酉，群臣奏曰', '仍賜爲食邑。'), (G57, '太祖十八年，敬順王金傅來降', '國除爲慶州。')],
   "Goryeosa j.2 Taejo 18 (935) 12. ay 壬申: Taejo Silla Kralı'nın teslimini kabul etti ve Silla ülkesi Gyeongju oldu.",
   "Jülyen: 935 (Taejo 18) 12. ay 壬申 = 936-01-08; " + TK_GUN)
ev('E900', '0900-01-01', 'yil', "Gyeon Hwon Wansan'da (Jeonju) 'Sonraki Baekje Kralı' ilan etti ve başkent yaptı.",
   [(SS50, '遂自稱後百濟王，設官分職。是唐光化三年，新羅孝恭王四年也。'), (SS50, '今予敢不立都於完山，以雪義慈宿憤乎！'), (G57, '後甄萱，立都於州，太祖滅之，改安南都護府。')],
   "Samguk sagi j.50: 892'de Mujin'e girdi ama krallık ilan etmedi; 光化三年 (900) Wansan'da 後百濟王. Künye f 900 (KOJA_REF).")
ev('E936S', '0936-09-01', 'ay', "Goryeo, Iljecheon Savaşı'nda Sonraki Baekje'yi yendi; Wansan (Jeonju) dahil Baekje toprakları Goryeo'ya geçti.",
   [(G2, '秋九月，王率三軍，至天安府合兵，進次一善郡，神劒以兵逆之。甲午，隔一利川而陣'), (G57, '後甄萱，立都於州，太祖滅之，改安南都護府。')],
   "Künye t = 0936-09-01 (ay hassasiyeti; KOJA_REF). Goryeosa Taejo 19 9. ay 甲午 = 936-09-26 (Iljecheon). Dilim sınırı künye t'si olan ay başına konuldu (en çok 25 gün erken).",
   "Jülyen: 936 (Taejo 19) 9. ay 甲午 = 936-09-26; " + TK_GUN)
ev('E904', '0904-01-01', 'yil', "Gongju (Ungjin) komutanı Hong Gi Gung Ye'ye (Majin/Taebong) teslim oldu.",
   [(SS50, '天祐元年甲子，立國號為摩震', '公州將軍弘竒來降。')],
   "BEYANLI YAKLAŞIKLIK: Samguk sagi j.50 olayı 天祐元年 (904) yılına koyar; Gung Ye'nin ülke adı Majin 904 (künyede Taebong). Hubaekje'nin sonraki Gongju hâkimiyeti dilim olarak yazılmadı (bkz. Gongju BOŞLUK dilimi).")
ev('E660', '0660-08-01', 'ay', "Sabi ve Ungjin düştü; Kral Uija teslim oldu, Baekje sona erdi; Tang eski Baekje'yi beş dudufuya böldü.",
   [(SS05, '十三日，義慈率左右，夜遁走，保熊津城', '自熊津城來降。'), (JT4, '八月庚辰，蘇定方等討平百濟，面縛其王扶餘義慈', '以其地分置熊津等五都督府。')],
   "Samguk sagi Taejong 7 (660) 7. ay 13-18 (ay-güneş; 7. ay başı ≈ 660-08-11): Uija 13'ünde Ungjin'e kaçtı, 18'inde teslim oldu; Jiu Tangshu 4 haberi 八月庚辰 (= 660-09-21) tarihler. Künye t = 0660-08-01 (ay).",
   "Ay hassasiyeti: 660 Ağustos (7/18 ≈ 660-08-28 ±1; gün seçilmedi)")
ev('E676', '0676-02-24', 'gun', "Tang, Andong Genel Valiliğini Pyongyang'dan Liaodong'a, Ungjin Valiliğini Jian'a çekti; Tang yarımadadan çekildi.",
   [(JT5, '二月甲戌，移安東都護府於遼東。'), (Z202, '二月，甲戌，徙安東都護府於遼東故城'), (Z202, '徙熊津都督府於建安故城')],
   "Jiu Tangshu 5 Gaozong, Yifeng 1 (676) 2. ay 甲戌; Zizhi tongjian 202 aynı gün (iki kaynak). 676'da artık ay 3. aydan sonra (閏三月己巳朔, Jiu Tangshu 5): 1-2. ay numaralaması etkilenmez.",
   "Jülyen: 儀鳳元年 2. ay 甲戌 = 676-02-24 (2. ay başı ≈ 676-02-19, ortalama yeniay ±1); " + TK_GUN)
ev('E668', '0668-10-22', 'gun', "Tang-Silla orduları Pyongyang'ı aldı, Kral Bojang esir edildi; Goguryeo sona erdi, toprağı Andong Genel Valiliğine bağlandı.",
   [(JT5, '九月癸巳，司空、英國公勣破高麗，拔平壤城', '分置四十二州。'), (Z201, '九月，癸巳，李勣拔平壤。'), (Z201, '置安東都護府於平壤以統之。')],
   "Jiu Tangshu 5 Zongzhang 1 9. ay 癸巳 ve Zizhi tongjian 201 aynı gün; Samguk sagi Silla kayıtlarında 9/21 (KOJA_RAPOR2).",
   "Jülyen: 總章元年 9. ay 癸巳 = 668-10-22; " + TK_GUN)
ev('E671', '0671-01-01', 'yil', "Silla Sabi'yi (Soburi) alıp Soburi-ju'yu kurdu.",
   [(SS07, '置所夫里州，以阿飡眞王爲都督。'), (SS36, '扶餘郡，本百濟所夫里郡，唐將蘇定方與庾信平之，文武王十二年置摠管'), (G56, '百濟聖王，自熊川，來都之，號南扶餘。')],
   "Samguk sagi Munmu 11 (671); Soburi = Sabi (Samguk sagi j.36 ve Goryeosa 'Buyeo-gun'). Gün yok: yıl.")
ev('E694', '0694-01-01', 'yil', "Silla Songak (Kaesong) kalesini inşa etti.",
   [(SS08, '冬，築松岳、牛岑二城。'), (SS35, '松岳郡，本高句麗扶蘇岬，孝昭王三年築城')],
   "BEYANLI YAKLAŞIKLIK: Samguk sagi Hyoso 3 (694) 'Songak ve Ugeum kalelerini inşa etti' der; mülkiyeti açıkça 'ilhak' diye yazmaz. Silla'nın 676-694 arası fiilî denetimi kaynakta yok. Gün yok: yıl.")
ev('E532', '0532-01-01', 'yil', "Geumgwan Gaya kralı Gu-hyeong Silla'ya teslim oldu; Gimhae Gaya'dan Silla'ya geçti.",
   [(SS04, '十九年，金官國主金仇亥，與妃及三子', '以本國爲食邑。'), (G57, '新羅法興王，旣受降，待以客禮，以其國爲食邑，號金官郡。')],
   "Samguk sagi Beopheung 19 (532). Samguk yusa farklı tarih verir (562 civarı; «兩存之»). Gün yok: yıl.")
ev('E562', '0562-01-01', 'yil', "Silla Daegaya'yı (Goryeong) yıktı; Gaya Konfederasyonu sona erdi.",
   [(SS04, '九月，加耶叛，王命異斯夫討之，斯多含副之。', '一時盡降。'), (NS19, '廿三年春正月。新羅打滅任那官家。'), (G57, '新羅眞興王滅之', '爲大伽倻郡。')],
   "ÇELİŞKİ: Samguk sagi Jinheung 23 (562) 9. ay (ay-güneş); Nihon Shoki Kinmei 23 (562) 1. ay. Samguk yusa: «保定二年壬午九月。新羅第二十四君真興王。興兵薄伐。» (562). Yıl 562'de üç kaynak uyuşur; gün/ay çelişkisi nedeniyle yıl hassasiyeti.")

# ---- zincirler: yer adi (atlasta AYNEN) -> [(f_olay, d, ek_specs, beyan)] ; ilk dilim UFUK ----
UFUK = '0500-01-01'
UF = {  # ufuk dayanagi (spec listesi)
    'seul': [(SS18, '九月，王帥兵三萬，侵百濟，陷王所都漢城，殺其王扶餘慶，虜男女八千而歸。')],
    'incheon': [(G56, '仁州本高句麗買召忽縣')],
    'ganghwa': [(G56, '江華縣本高句麗穴口郡')],
    'chungju': [(G56, '忠州牧本高句麗國原城')],
    'gongju': [(SS26, '冬十月，移', '都於熊津。')],
    'jeonju': [(G57, '全州牧本百濟完山')],
    'daegu': [(G57, '大丘縣本新羅達句火縣。景德王，改今名，爲壽昌郡領縣。')],
    'busan': [(G57, '東萊縣本新羅居柒山郡，景德王，改爲東萊郡。')],
    'gyeongju': [(SS04, "'''智證麻立干'''立，姓金氏，諱智大路，奈勿王之曾孫"), (G57, '東京留守官慶州本新羅古都。')],
    'kaesong': [(G56, '王京開城府本高句麗扶蘇岬。新羅改松嶽郡。')],
    'pyongyang': [(G58, '高句麗長壽王十五年，自國內城，徙都之。'), (SS18, '十五年，移都平壤。')],
    'gimhae': [(G57, '金州本駕洛國。'), (SS04, '十九年，金官國主金仇亥，與妃及三子', '以本國爲食邑。')],
    'goryeong': [(G57, '高靈郡本大伽倻國，自始祖伊珍阿鼓王，至道設智王，凡十六世，五百二十年。')],
    'sabi': [(G56, '扶餘郡本百濟所夫里郡，百濟聖王，自熊川，來都之，號南扶餘。')],
    'sanggyeong': [(XT219, '天寶末，欽茂徙上京，直舊國三百里忽汗河之東。')],
}
