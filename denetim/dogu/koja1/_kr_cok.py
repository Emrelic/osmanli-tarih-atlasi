# -*- coding: utf-8 -*-
# koja1 Kore: kronoloji_cok maddeleri (toprak-kazanc/kayip YOK: o turdekiler sinir dosyasindadir)
from _kr_data2 import *

ev('EH0', '1029-09-13', 'gun', '', [(LS17, '八月己丑，東京舍利軍詳穩大延琳囚留守', '號其國為興遼，年為天慶。')])
ev('EH1', '1029-09-13', 'gun', "Dae Yeon-rim Liao'ya isyan edip Dongjing'de (Liaoyang) Heungyo (Xingliao) devletini kurdu; Liaoyang Liao'dan Heungyo'ya geçti.",
   [(LS17, '八月己丑，東京舍利軍詳穩大延琳囚留守', '號其國為興遼，年為天慶。')],
   "Liao shi 17 Taiping 9 8. ay 己丑 (ms1 künyesi ile aynı gün).",
   "Jülyen: 太平九年 8. ay 己丑 = 1029-09-13 (1029'da 8. aydan önce artık ay varsayımı: Goryeosa'daki 9. ay 戊午 = 1029-10-12 ile tutarlı); " + TK_GUN)
ev('EH2', '1030-09-25', 'gun', "Liao ordusu Dongjing'i (Liaoyang) geri aldı; Dae Yeon-rim yakalandı, Heungyo sona erdi.",
   [(LS17, '八月丙午，東京賊將楊詳世密送款，夜開南門納遼軍。擒延琳，渤海平。')],
   "Liao shi 17 Taiping 10 8. ay 丙午 (ms1 künyesi ile aynı gün).",
   "Jülyen: 太平十年 8. ay 丙午 = 1030-09-25; " + TK_GUN)
ev('E919', '0919-01-01', 'yil', "Liao hükümdarı Taizu Liaoyang eski kalesini onarıp Han ve Balhae halkıyla doldurdu, Dongping komutanlığı yaptı.",
   [(LS2, '二月丙寅，修遼陽故城，以漢民、渤海戶實之，改為東平郡，置防禦使。')],
   "Liao shi 2 Shence 4 (919) 2. ay; gün yok (ay-güneş ay): yıl. Liaoyang'ın 500-919 arası sahibi bu kümede yazılmadı (Goguryeo/Tang/Balhae dilimleri ayrı iş).")
CH['Liaoyang'] = ('liaoyang', 'yama', None, 'yuan-hanedani 1281-01-01 (mevcut ilk dilim; araya Jin/Doğu Xia dilimleri başka işte)', [
    ('E919', 'liao-hanedani', [], ''), ('EH1', 'heungyo-guk', [], '')])
CH_SON = {'Liaoyang': ('EH2', 'liao-hanedani')}   # son dilim yok: Liao'ya donus yalniz sinir maddesi

C = []
def cok(t, b, tur, taraflar, d, specs, gun, kes, ic_not='', yer='', onem=3, dunya=1, tak='', konu='konu-siyasi'):
    C.append(dict(t=t, b=b, tur=tur, taraflar=taraflar, d=d, specs=specs, gun=gun, kes=kes, ic_not=ic_not, yer=yer, onem=onem, dunya=dunya, tak=tak, konu=konu))

# --- Silla ---
cok('0554-01-01', "Silla Gwansanseong'da Baekje'yi yendi; Kral Seong öldürüldü", 'savas', ['silla', 'baekje'],
    "Baekje Kralı Seong Gwansanseong'u (Okcheon) kuşattı; Silla Sinju komutanı Kim Mu-ryeok ve komutan Gogan Dodo saldırıyı kırıp Baekje kralını öldürdü, 29.600 kişi (kaynak sayısı) kesildi. Böylece Han havzası Silla'da kaldı.",
    [(SS04, '秋七月，修築明活城', '匹馬無反者。'), (SS26, '三十二年，秋七月，王欲襲新羅', '諡曰聖。')],
    'Jinheung 15 / Seong 32, 7. ay (ay-güneş)', 'yil', "Gün yok (7. ay): yıl. Samguk sagi iki yerde (Silla ve Baekje bon-gi) aynı olayı verir.", 'Gwansanseong (Okcheon)', 3, 1, '', 'konu-askeri')
cok('0557-01-01', "Silla Gukwon-seong'u (Chungju) küçük başkent yaptı, Sinju'yu kaldırıp Bukhansan eyaletini kurdu", 'siyaset', ['silla'],
    "Jinheung 18. yılda Silla Gukwon-seong'u (bugünkü Chungju) küçük başkent (sogyeong) ilan etti; Han havzasındaki Sinju kaldırılıp yerine Bukhansan-ju kuruldu.",
    [(SS04, '十八年，以國原爲小京。廢沙伐州，置甘文州，以沙飡起宗爲軍主。廢新州，置北漢山州。')], 'Jinheung 18', 'yil', 'Gün yok: yıl.', 'Chungju')
cok('0562-01-01', "Silla Gaya isyanını bastırdı; Daegaya düştü", 'savas', ['silla', 'gaya-konfederasyonu'],
    "Jinheung 23. yılda Gaya isyan edince Yi Sabu ve Sadaham Gaya'nın başkentine girip kalenin tümünü teslim aldı; Gaya Konfederasyonu böylece sona erdi.",
    [(SS04, '九月，加耶叛，王命異斯夫討之，斯多含副之。', '一時盡降。'), (NS19, '廿三年春正月。新羅打滅任那官家。'), (YUSA, '保定二年壬午九月。新羅第二十四君真興王。興兵薄伐。')],
    'Jinheung 23 (562); SS 9. ay, NS 1. ay', 'yil', "ÇELİŞKİ: Samguk sagi 9. ay, Nihon Shoki 1. ay (aynı yıl 562); gün/ay seçilmedi.", 'Goryeong (Daegaya)', 3, 1, '', 'konu-askeri')
cok('0735-01-01', "Tang, Silla'nın Paegang güneyi üzerindeki hâkimiyetini resmen tanıdı", 'antlasma', ['silla', 'tang'],
    "Silla elçisi Kim Ui-chung'un Tang'dan dönüşüyle Tang imparatoru Paegang'ın (Taedong) güneyindeki toprağı Silla'ya bağışladı; Silla bir yıl sonra teşekkür yazısı gönderdi.",
    [(SS08, '三十四年，春正月，熒惑犯月。', '勅賜浿江以南地。'), (SS08, '伏奉恩勅，賜浿江以南地境。')], 'Seongdeok 34 (735)', 'yil',
    "Gün yok: yıl. 'Paegang' kimliği tartışmalıdır (Taedong/Yesong); kaynak 浿江以南 der, nehir adı verilmez.", '')
cok('0936-01-08', "Silla Kralı Gyeongsun Goryeo'ya teslim oldu; Silla sona erdi", 'son', ['goryeo', 'silla'],
    "935 sonunda Gyeongsun halkıyla birlikte Kaesong'a gelip Wang Geon'a bağlılık sundu; Wang Geon 12. ay 壬申 günü teslimi kabul etti, Silla ülkesi kaldırılıp Gyeongju adıyla ona tımar verildi.",
    [(G2, '十二月辛酉，群臣奏曰', '仍賜爲食邑。'), (G57, '太祖十八年，敬順王金傅來降', '國除爲慶州。')],
    'Taejo 18 (935) 12. ay 壬申', 'gun', "Künye t = 0936-01-08 (KOJA_REF). Samguk sagi Silla'yı MÖ 57-MS 935 tek devlet olarak verir; Gyeongsun'un 935-11'deki Kaesong yolculuğu Goryeosa'da 11. ay 甲午/癸卯 günleridir.", 'Kyongcu (Gyeongju)', 4, 1,
    "Jülyen: 935 (Taejo 18) 12. ay 壬申 = 936-01-08; " + TK_GUN)
# --- Goguryeo ---
cok('0475-01-01', "Goguryeo Kralı Jangsu Baekje başkenti Hanseong'u aldı; Kral Gaeru öldürüldü", 'savas', ['goguryeo', 'baekje'],
    "Jangsu 63. yılda 30.000 kişilik ordusuyla Baekje'nin başkenti Hanseong'u (Seul çevresi) alıp kral Gaeru'yu (Buyeo Gyeong) öldürdü ve 8.000 esir aldı; Baekje başkenti güneye Ungjin'e taşıdı.",
    [(SS18, '九月，王帥兵三萬，侵百濟，陷王所都漢城，殺其王扶餘慶，虜男女八千而歸。'), (G56, '南京留守官楊州本高句麗北漢山郡', '爲麗兵所害。')],
    'Jangsu 63 (475) 9. ay', 'yil', "Pencere öncesi (475) ama pencere başının sahibini kanıtlar. Gün yok (9. ay): yıl.", 'Seul (Hanyang)', 4, 1, '', 'konu-askeri')
cok('0586-01-01', "Goguryeo başkenti Jangan-seong'a taşıdı", 'baskent', ['goguryeo'],
    "Pyeongwon 8. yılda inşa edilen Jangan-seong'a 28. yılda saray taşındı.",
    [(SS19, '八年，築長安城。'), (SS19, '二十八年，移都長安城。')], 'Pyeongwon 28 (586)', 'yil',
    "BEYANLI YAKLAŞIKLIK: Jangan-seong'un Pyongyang'la özdeşliği bu kaynakta açık değil (Pyongyang 427'de başkent: Jangsu 15 «移都平壤»); Pyongyang bölgesi içinde yeni şehir kabul edildi. Gün yok: yıl.", 'Pyongyang')
cok('0668-10-22', "Pyongyang düştü, Kral Bojang esir edildi; Goguryeo sona erdi", 'son', ['tang', 'goguryeo', 'silla'],
    "Tang generali Li Ji (Li Shiji) Pyongyang'ı aldı, Kral Bojang ve Nam-geon esir edildi; Goguryeo toprağı 170 kale ve 69 bin 700 haneyle Andong Genel Valiliğine bağlandı.",
    EV['E668']['specs'], 'Zongzhang 1 (668) 9. ay 癸巳', 'gun', EV['E668']['ic_not'], 'Pyongyang', 5, 2, EV['E668']['takvim'], 'konu-askeri')
# --- Baekje ---
cok('0475-01-01', "Baekje başkenti Hanseong'dan Ungjin'e (Gongju) taşıdı", 'baskent', ['baekje', 'goguryeo'],
    "Gaeru Hanseong'da kuşatılıp öldürülünce oğlu Munju tahta çıktı ve başkenti Ungjin'e taşıdı; Baekje'nin başkent evi Han havzasından kopup güneye çekildi.",
    [(SS26, '蓋鹵在位二十一年，高句麗來侵，圍漢城。', '冬十月，移原本缺刻都於熊津。')], 'Munju 1 (475) 10. ay', 'yil', "Pencere öncesi (475) ama pencere başının sahibini kanıtlar. Gün yok: yıl.", 'Kongcu (Gongju)', 3, 1)
cok('0538-01-01', "Baekje başkenti Sabi'ye (Buyeo) taşıdı, adını Nambuyeo yaptı", 'baskent', ['baekje'],
    "Kral Seong 16. yılda başkenti Ungjin'den Sabi'ye taşıyıp ülke adını Nambuyeo yaptı.",
    EV['E538']['specs'], 'Seong 16 (538)', 'yil', EV['E538']['ic_not'], 'Sabi (Buyeo)')
cok('0660-08-01', "Sabi ve Ungjin düştü, Kral Uija teslim oldu; Baekje sona erdi", 'son', ['tang', 'silla', 'baekje'],
    "Silla ordusu Hwangsanbeol'de Gyebaek'i yendi, Tang-Silla orduları Sabi'yi kuşattı; Uija Ungjin'e kaçtı ve ertesi günlerde teslim oldu. Tang eski Baekje'yi beş dudufuya böldü.",
    EV['E660']['specs'], 'Taejong 7 (660) 7. ay 13-18 (ay-güneş)', 'ay', EV['E660']['ic_not'], 'Sabi (Buyeo)', 5, 2, EV['E660']['takvim'], 'konu-askeri')
# --- Baekje Restorasyon ---
cok('0661-01-01', "Boksin ve Dochim Baekje restorasyonunu başlattı; Prens Buyeo Pung Yamato'dan getirilip kral yapıldı", 'isyan', ['baekje-restorasyon', 'tang'],
    "Baekje keşişi Dochim ve eski komutan Boksin Churyu-seong'da Tang'a karşı ayaklanıp Yamato'daki prens Buyeo Pung'u kral ilan etti; Ungjin'deki Tang garnizonunu kuşattılar.",
    [(JT199, '百濟僧道琛、舊將福信率衆據周留城以叛。', '時龍朔元年三月也。')], 'Longshuo 1 (661) 3. ay', 'yil',
    "Samguk sagi aynı olayı Munmu 3'ün (663) altında toplu anlatır; Jiu Tangshu yılı 661 verir. Gün yok: yıl.", 'Churyu-seong', 3, 1, '', 'konu-askeri')
cok('0664-01-01', "Baekje artıkları Sabi dağ kalesinde ayaklandı; Ungjin valisi bastırdı", 'isyan', ['baekje-restorasyon', 'tang'],
    "Munmu 4. yılda Baekje artıkları Sabi dağ kalesinde isyan etti; Ungjin valiliği ordu gönderip kaleyi aldı.",
    [(SS06, '三月，百濟殘衆，據泗沘山城叛', '攻破之。')], 'Munmu 4 (664) 3. ay', 'yil', "Gün yok: yıl. Restorasyon hareketi 663'te sona erdi (künye t 0663-01-01 hatalı olabilir: bkz. RAPOR).", 'Sabi (Buyeo)', 2, 1, '', 'konu-askeri')
# --- Bodeok ---
cok('0674-01-01', "Silla Goguryeo isyancılarını (Anseung) kabul etti ve Baekje'nin eski topraklarını işgal etti; Tang savaş açtı", 'siyaset', ['silla', 'bodeok-goguryeo', 'tang'],
    "Munmu 14. yılda Silla Goguryeo'dan ayrılan kalıntı topluluğu kabul edip Baekje'nin eski topraklarını da ele geçirince Tang imparatoru Munmu'nun unvanlarını geri aldı ve Gyerim yolu ordusu gönderdi.",
    [(SS07, '王納高句麗叛衆。又據百濟故地，使人守之。')], 'Munmu 14 (674)', 'yil', "Gün yok: yıl. Bodeok'un kuruluşu (670-08-21) ms1 künyesinde.", 'Geumma-jeo (Iksan)', 3, 1, '', 'konu-askeri')
cok('0684-01-01', "Anseung'un yeğeni Daemun Geumma-jeo'da isyan etti; Silla bölgeyi Geumma-gun yaptı", 'isyan', ['silla', 'bodeok-goguryeo'],
    "Sinmun 4. yılda Anseung'un yeğeni general Daemun Geumma-jeo'da isyan edince ayaklanma bastırıldı, halkı Silla'nın güneyine sürüldü ve toprağı Geumma-gun yapıldı; Bodeok'un ayrı varlığı bitti.",
    [(SS08, '十一月，安勝族子將軍大文，在金馬渚謀叛，事發伏誅。', '以其地爲金馬郡。')], 'Sinmun 4 (684) 10-11. ay', 'yil',
    "Künye t = 0683-10-01 (ay, ms1). Bu kayıt 684'ü gösterir: künye t'si yaklaşık bir yıl erken olabilir (RAPOR). Gün yok: yıl.", 'Geumma-jeo (Iksan)', 3, 1, '', 'konu-askeri')
# --- Dongdan ---
cok('0926-04-04', "Balhae'nin yerine Dongdan Krallığı kuruldu; Hulhan-seong Tianfu oldu", 'kurulus', ['dongdan', 'liao-hanedani', 'balhae'],
    "Abaoji (Liao Taizu) Balhae kralı Dae Inseon'un teslimini kabul edip ülkeyi Dongdan adıyla büyük oğlu Yelü Bei'ye (İnhuang Wang) verdi; başkent Hulhan-seong Tianfu adını aldı.",
    EV['E926']['specs'], 'Tianxian 1 (926) 2. ay 丙午', 'gun', EV['E926']['ic_not'], 'Sanggyeong (Longquanfu)', 4, 2, EV['E926']['takvim'], 'konu-askeri')
cok('0930-01-01', "Dongdan'ın hükümdarı Yelü Bei Tang'a (Sonraki Tang) kaçtı", 'siyaset', ['dongdan', 'liao-hanedani'],
    "Tianxian 5. yılın 11. ayında Dongdan makamları 'İnhuang Wang denizden Tang'a (Sonraki Tang) gitti' diye bildirdi; böylece Dongdan'ın başındaki Khitan prensi ülkeyi terk etti.",
    [(LS3, '十一月戊寅，東丹奏人皇王浮海適唐。')], 'Tianxian 5 (930) 11. ay', 'yil', "Gün çevrilmedi (artık ay belirsiz): yıl hassasiyeti.", '')
# --- Heungyo ---
cok('1030-01-12', "Heungyo Goryeo'dan yardım istedi; Goryeo reddetti, Liao ile yolu kesti", 'siyaset', ['heungyo-guk', 'goryeo'],
    "Heungyo'nun başvezir-benzeri Taesa'sı Dae Yeon-jeong doğu Jurchenleri çekip Khitan'la çarpışırken Goryeo'dan yardım istedi; Kral Hyeonjong reddetti, kuzeybatı komutanını Heungyo karşısında sınıra gönderdi.",
    [(G5, '十二月庚寅，雷震。興遼國太師大延定引東北女眞，與契丹相攻，遣使乞援，王不許。', '以備興遼。')], 'Hyeonjong 20 (1029) 12. ay 庚寅', 'gun',
    "Goryeosa Hyeonjong 20 yılı 12. ay; gün çevirisi artık ay varsayımına bağlı (aşağıya bak).", '', 2, 1,
    "Jülyen: 顯宗二十年 12. ay 庚寅 = 1030-01-12 (1029'da 8. aydan önce artık ay varsayımıyla; Liao shi 8. ay 己丑 = 1029-09-13 ve Goryeosa 9. ay 戊午 = 1029-10-12 ile tutarlı); " + TK_GUN)
cok('1029-10-12', "Heungyo elçisi Goryeo'ya yeni devletin kurulduğunu bildirip yardım istedi", 'siyaset', ['heungyo-guk', 'goryeo'],
    "Liao'nun Dongjing generali Dae Yeon-rim Goryeo'ya Daebu-seung Go Gil-deok'u gönderip devlet kurduğunu bildirdi ve yardım istedi; kendisini Balhae kurucusu Dae Jo-yeong'un yedinci kuşak torunu olarak tanıttı.",
    [(G5, '九月戊午，契丹東京將軍大延琳遣大府丞高吉德，告建國，兼求援。', '建元天興。')], 'Hyeonjong 20 (1029) 9. ay 戊午', 'gun',
    "Liao shi yılı 年號 'tianqing' (天慶), Goryeosa 'tianxing' (天興) yazar: çelişki ic_not'ta.", '', 2, 1,
    "Jülyen: 顯宗二十年 9. ay 戊午 = 1029-10-12 (9. ay başı ≈ 1029-10-10; 8. ay 己丑 = 1029-09-13 Liao kaydıyla tutarlı); " + TK_GUN)
# --- Taebong ---
cok('0905-01-01', "Gung Ye başkenti Cheorwon'a (Pungcheonwon) taşıdı", 'baskent', ['taebong'],
    "Gung Ye 905'te Songak'tan Cheorwon'a dönüp yeni başkente girdi; saraylar kurdu.",
    [(SS50, '天祐二年乙丑，入新京，修葺觀闕、樓臺，窮奢極侈。'), (G1, '天祐二年乙丑，裔還都鐵圓。')], 'Cheonu 2 (905)', 'yil',
    "Gün yok: yıl. Cheorwon yerleşimi koordinat tanığı yetersizliğinden yazılamadı (RAPOR).", 'Kaesong')
cok('0905-01-01', "Pyongyang kale komutanı Geom Yong Gung Ye'ye teslim oldu; Paeseo on üç kalesi kuruldu", 'siyaset', ['taebong'],
    "Gung Ye Paeseo bölgesini on üç karakola ayırdı; Pyongyang kale komutanı general Geom Yong teslim oldu.",
    [(SS50, '分定浿西十三鎮。平壤城主將軍黔用降，甑城赤衣、黃衣賊明貴等歸服。')], 'Cheonu 2 (905)', 'yil',
    "Gün yok: yıl. Pyongyang'ın kırpılan dönemiyle (676-918) çelişmez: kale komutanı var, şehir kaynakta 'otlarla kaplı' (901).", 'Pyongyang')
cok('0918-07-24', "Wang Geon'un generalleri Gung Ye'yi devirdi; Taebong sona erdi", 'son', ['goryeo', 'taebong'],
    "6. ayın 乙卯 gecesi generaller Hong Yu, Bae Hyeon-gyeong, Sin Sung-gyeom ve Bok Ji-gyeom Wang Geon'un evine gelip onu tahta çıkmaya zorladı; Gung Ye kaçıp köylüler tarafından öldürüldü.",
    EV['E918']['specs'], 'Taejo 1 (918) 6. ay 乙卯', 'gun', EV['E918']['ic_not'], 'Kaesong', 4, 1,
    "Jülyen: 乙卯 = 918-07-24 (丙辰 = 918-07-25); " + TK_GUN, 'konu-askeri')
# --- Goryeo ---
cok('0919-01-01', "Wang Geon başkenti Songak'a (Kaesong) kurdu", 'baskent', ['goryeo'],
    "Taejo 2. yılın baharında Songak'ın güneyinde başkent kurdu: saraylar, üç şube, altı bakanlık, dokuz daire, çarşı ve beş mahalle.",
    [(G1, '二年春正月，定都于松嶽之陽，創宮闕，置三省、六尙書、官九寺。')], 'Taejo 2 (919) 1. ay', 'yil', "Gün yok: yıl.", 'Kaesong', 4, 1)
cok('0919-01-01', "Wang Geon Pyongyang'ı yeniden iskân etti ve surlarını yaptırdı", 'siyaset', ['goryeo'],
    "Taejo 1. yılda harap Pyongyang'a beş eyaletten halk taşınıp Büyük Koruyucu Valilik (Seogyeong) yapıldı; 2. yılın 10. ayında şehir surlarla çevrildi.",
    [(G58, '太祖元年，以平壤荒廢，量徙鹽、白、黃、海、鳳諸州民，以實之，爲大都護府。'), (G1, '冬十月，城平壤。')], 'Taejo 1-2 (918-919)', 'yil', "Gün yok: yıl.", 'Pyongyang', 3, 1)
cok('0936-09-26', "Iljecheon Savaşı: Goryeo Sonraki Baekje'yi yendi, Kore'yi birleştirdi", 'birlesme', ['goryeo', 'hubaekje'],
    "Taejo 19. yılın 9. ayında Gyeon Hwon'la birlikte Iljecheon'da Sin-geom'un ordusuyla karşılaştı; Baekje sol generalleri teslim olunca ordu dağıldı ve Goryeo Geç Üç Krallık dönemini bitirdi.",
    [(G2, '秋九月，王率三軍，至天安府合兵，進次一善郡，神劒以兵逆之。甲午，隔一利川而陣'), (G2, '三軍齊進奮擊，賊兵大潰。')],
    'Taejo 19 (936) 9. ay 甲午', 'gun', EV['E936S']['ic_not'], 'Concu (Jeonju)', 5, 2, EV['E936S']['takvim'], 'konu-askeri')
# --- Hubaekje ---
cok('0901-01-01', "Gyeon Hwon Daeya-seong'u kuşattı, alamadı", 'savas', ['hubaekje', 'silla'],
    "Sonraki Baekje'nin kurucusu Gyeon Hwon Silla'nın Daeya (Hapcheon) kalesine saldırdı, alamadı.",
    [(SS50, '天復元年，萱攻大耶城，不下。')], 'Cheonbok 1 (901)', 'yil', "Gün yok: yıl.", '', 2, 1, '', 'konu-askeri')
cok('0935-01-01', "Gyeon Hwon'un oğlu Sin-geom babasını Geumsansa'ya hapsetti, kardeşi Geum-gang'ı öldürdü", 'siyaset', ['hubaekje'],
    "Taejo 18. yılın 3. ayında Gyeon Hwon'un oğlu Sin-geom, babasının veliaht yapmak istediği kardeşi Geum-gang'ı öldürüp babasını Geumsan Budist tapınağına kapattı; Gyeon Hwon 6. ayda Naju'ya kaçtı.",
    [(G2, '十八年春三月，甄萱子神劒，幽其父於金山佛宇，殺其弟金剛。')], 'Taejo 18 (935) 3. ay', 'yil', "Gün yok: yıl (3. ay ay-güneş).", 'Concu (Jeonju)', 3, 1)

# --- Gaya (kunye kronolojisi: kurulus + son; burada diger maddeler) ---
cok('0479-01-01', "Gaya (Garak) Kralı Hajji Güney Qi sarayına elçi gönderdi; 'Gaya Kralı' unvanı aldı", 'siyaset', ['gaya-konfederasyonu'],
    "Jianyuan 1. yılda Gaya kralı Hajji Çin'e elçi gönderdi; Güney Qi imparatoru ona 'Yardımcı Ülke Generali, ülke kralı' unvanını verdi.",
    [(NQ58, '加羅國，三韓種也。建元元年，國王荷知使來獻。', '可授輔國將軍、本國王。')], 'Jianyuan 1 (479)', 'yil',
    "Pencere öncesi (479) ama konfederasyonun Daegaya ağırlıklı varlığını kanıtlar. Hajji (荷知) = Daegaya kralı özdeşliği bu kaynakta açık değil (Nan Qi shu yalnız 加羅國 der). Gün yok: yıl.", 'Goryeong (Daegaya)', 3, 1)
cok('0522-01-01', "Gaya Kralı Silla'dan evlilik talep etti; Silla prensesi Gaya'ya gönderildi", 'ittifak', ['silla', 'gaya-konfederasyonu'],
    "Beopheung 9. yılda Gaya kralı elçi gönderip evlilik istedi; Silla kralı Bijobu'nun kız kardeşini gönderdi.",
    [(SS04, '九年，春三月，加耶國王遣使請婚，王以伊飡比助夫之妹送之。')], 'Beopheung 9 (522) 3. ay', 'yil', "Gün yok: yıl.", '')
cok('0524-01-01', "Silla Kralı Beopheung güney sınırında Gaya kralıyla buluştu", 'siyaset', ['silla', 'gaya-konfederasyonu'],
    "Beopheung 11. yılın 9. ayında kral güney sınırında yeni toprak ayırmaya çıktı; Gaya kralı onunla buluştu.",
    [(SS04, '十一年，秋九月，王出巡南境拓地，加耶國王來會。')], 'Beopheung 11 (524) 9. ay', 'yil', "Gün yok: yıl.", '')
cok('0551-01-01', "Gaya müzisyeni Ureuk Silla'ya sığındı (Gaya karışıklığı)", 'siyaset', ['silla', 'gaya-konfederasyonu'],
    "Jinheung 12. yılda Gaya kralı Gasil'in on iki telli kanyagum'u yaptırdığı ve ülkesinin karışınca müzik aletiyle Silla'ya sığınan Ureuk anılır; Gaya'nın sonuna giden iç çalkantıya işaret eder.",
    [(SS04, '先是，加耶國嘉悉王，製十二弦琴，以象十二月之律，乃命于勒製其曲，及其國亂，操樂器投我，其樂名加耶琴。')], 'Jinheung 12 (551)', 'yil',
    "Ureuk'un geliş yılı kaynakta ayrı yazılmaz; kayıt 12. yıl (551) altında geriye bakışla verilir: yıl hassasiyeti BEYANLI.", '', 2, 1, '', 'konu-kultur')
