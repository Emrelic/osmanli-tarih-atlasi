# -*- coding: utf-8 -*-
from _v2 import *

KR = []
def K(t, b, tur, taraflar, yer, d, kaynak, gun, kes, ic=None, onem=2, dunya=1, etiket=None, tak=None):
    m = dict(t=t, b=b, tur=tur, onem=onem, dunya=dunya, kapsam='ic', etiket=etiket or ['konu-siyasi'], yer=yer, taraflar=taraflar,
             d=d, kaynak=kaynak, gun=gun, kesinlik=kes)
    if ic: m['ic_not'] = ic
    if tak: m['ic_not_takvim'] = tak
    KR.append(m)

TAKS = lambda x: 'Çin ay-güneş takvimi → Jülyen: ' + x

# ---------------- BALHAE ----------------
K('0755-01-01', 'Balhae kralı Dae Hŭmmu başkenti Shangjing’e (Longquanfu) taşıdı', 'baskent', ['balhae'], 'Sanggyeong (Longquanfu)',
  'Tang kaynaklarına göre Tianbao döneminin sonunda kral Dae Hŭmmu (Qinmao), başkenti eski başkentin 300 li ötesinde, Hūhan Irmağı’nın doğusundaki Shangjing’e taşıdı. Burası sonradan Balhae’nin beş başkentli düzeninde "Üst Başkent" (Longquan Prefektörlüğü) oldu.',
  Q_BH755, 'Tianbao sonu (742–756 döneminin sonu)', 'yil',
  ic='Yıl yaklaşık: «天寶末» Tianbao’nun sonu (755–756); kaynak yıl vermiyor, YYYY-01-01 kuralı. Dae Hŭmmu = Çince Da Qinmao. İlk başkent Dongmozu (Dongmo Dağı) bu kümede yerleşim olarak yazılamadı (koordinat çift tanıksız).', onem=3)
K('0762-01-01', 'Tang Balhae’yi krallık olarak tanıdı; Dae Hŭmmu "Balhae Kralı" ve Jiaoyou Taiwei oldu', 'siyaset', ['balhae', 'tang'], 'Sanggyeong (Longquanfu)',
  'Tang imparatorluk fermanıyla Balhae "Komutanlık" (Prens düzeyi) yerine "krallık" (國) sayıldı; Dae Hŭmmu kral unvanı ve Taiwei payesi aldı. Balhae Tang’la vassal-düzeyinde ilişkilerini sürdürdü.',
  'Ouyang Xiu vd., Xin Tang shu, juan 219 (' + ZH + '新唐書/卷219; açıldı, okundu): «寶應元年，詔以渤海爲國，欽茂王之，進檢校太尉。»', 'Baoying 1 (762)', 'yil',
  ic='Baoying 1 = 762 (yıl kaynakta var; ay/gün yok).')
K('0926-02-17', 'Liao ordusu Balhae’nin Fuyu kalesini aldı', 'savas', ['liao-hanedani', 'balhae'], 'Fuyu (Fuyu Fu)',
  'Abaoji’nin Balhae seferinde Liao ordusu Balhae’nin kuzeybatı garnizon kenti Fuyu’yu (Fuyu Fu) ele geçirip komutanını öldürdü; ardından Hulhan kuşatması başladı.',
  'Tuotuo vd., Liao shi, juan 2 (' + ZH + '遼史/卷2; okundu): «天顯元年春正月己未，白氣貫日。庚申，拔扶餘城，誅其守將。丙寅，命惕隱安端、前北府宰相蕭阿古只等將萬騎為先鋒，遇諲譔老相兵，破之。»',
  '926 (Tianxian 1), 1. ay, ganzhi 庚申', 'gun', tak=TAKS('Tianxian 1 1. ay 庚申 = 926-02-17 (Gregoryen 926-02-22); Liao 4. ay 丁亥朔 = 926-05-15 çapasıyla ay doğrulandı.'), onem=3)
K('0926-02-26', 'Hulhan kuşatması: Balhae kralı Da Yinzhuan teslim istedi', 'savas', ['liao-hanedani', 'balhae'], 'Sanggyeong (Longquanfu)',
  'Liao ordusu Balhae başkenti Hulhan’ı (Shangjing) gece kuşattı; Balhae kralı Da Yinzhuan (Kor. Dae Inseon) ertesi gün teslim olmak istedi; kent 辛未’de (02-28) teslim edildi.',
  'Liao shi, juan 2 (okundu): «夜圍忽汗城。己巳，諲譔請降。庚午，駐軍於忽汗城南。辛未，諲譔素服，稿索牽羊，率僚屬三百餘人出降。上優禮而釋之。»',
  '926 (Tianxian 1), 1. ay, ganzhi 己巳', 'gun', tak=TAKS('Tianxian 1 1. ay 己巳 = 926-02-26 (Gregoryen 926-03-03). Astronomik tabloda 1. ay "artık ay" görünür; Liao shi’nin 丁亥朔 çapası kullanıldı.'), onem=4, dunya=2)

# ---------------- NANZHAO ----------------
K('0897-01-01', 'Nanzhao kralı Longshun suikastla öldürüldü; Meng Shunhua tahta çıktı', 'hukumdar', ['nanzhao'], 'Yangjumie (Dali)',
  'Nanzhao kralı Longshun (Meng Dafengmin, hüküm 877–897) 897’de Yang Deng tarafından öldürüldü; yerine Shunhua Zhen (Meng Shunhua) geçti. Meng hanedanının son dönemi başladı.',
  'Ulrich Theobald, «Nanzhao 南詔», chinaknowledge.de/History/Altera/nanzhao.html (açıldı, okundu): «King Longshun was in 897 assassinated by Yang Deng 楊登.»; kral tablosu: «Meng Shun-hua-zhen 蒙舜化貞 (r. 897-902) Zhongxing 中興 (898-902)».',
  '897', 'yil', ic='Ay/gün kaynakta yok. Kaynak ansiklopedik (Bryson 2015 vb. kaynakça gösterir); birincil Çin kaynağı (Xin Tang shu 222) yalnız Shunhua’nın "Zhongxing" dönem adını verir.')
K('0898-01-01', 'Nanzhao Shunhua "Zhongxing" dönemini başlattı, Tang’a barış elçisi gönderdi', 'siyaset', ['nanzhao', 'tang'], 'Lizhou (Hanyuan, Sichuan)',
  'Shunhua tahta çıkınca "Zhongxing" (Yeniden Doğuş) dönem adını açtı ve Tang’ın Lizhou sınır valiliğine barış elçisi gönderdi; Tang imparatoru Zhaozong cevap vermedi, Tang’ın çöküşüyle ilişkiler tamamen koptu.',
  'Xin Tang shu, juan 222 zhong «Nanzhao» (' + ZH + '新唐書/卷222中; açıldı, okundu): «子舜化立，建元中興。遣使款黎州修好，昭宗不答。後中國亂，不復通。»', 'Zhongxing 1 (898) — Theobald’a göre 898–902', 'yil',
  ic='Yıl 898: dönem adı yılı (Theobald tablosu); Xin Tang shu yıl vermez.')

# ---------------- AN LUSHAN / SHI SIMING (Yan) ----------------
K('0755-12-08', 'An Lushan Fanyang’da Tang’a karşı ayaklandı', 'isyan', ['an-lushan-yan', 'tang'], 'Youzhou (Fanyang)',
  'Fanyang, Pinglu ve Hedong valisi An Lushan "Yang Guozhong’u cezalandırmak" bahanesiyle 150 bin kişilik ordusuyla Fanyang’dan yola çıktı; Tang’ın kuzeydoğu orduları karşılaşmada yenildi. İsyan Luoyang’ın düşüşüne ve Yan rejiminin kurulmasına gitti.',
  'Liu Xu vd., Jiu Tang shu, juan 200 shang «An Lushan» (' + ZH + '舊唐書/卷200上; okundu): «十四載，玄宗又召之，托疾不至。…十一月，反于范陽，矯稱奉恩命以兵討逆賊楊國忠。以諸蕃馬步十五萬，夜半行，平明食，日六十里。»',
  '755 (Tianbao 14), 11. ay (ay ilk günü)', 'ay', tak=TAKS('Tianbao 14 11. ay ilk günü = 755-12-08 (Gregoryen 755-12-12); isyan 11. ayın 9’unda başladı (kaynak: tarihçilik geleneği, bu sayfada yok).'), onem=4, dunya=2)
K('0759-02-02', 'Shi Siming Weizhou’da "Büyük Yan Kralı" (Da Sheng Yan Wang) oldu', 'siyaset', ['an-lushan-yan', 'tang'], 'Weizhou (Daming)',
  'Shi Siming Tang’a teslim olduktan sonra yeniden isyan edip Weizhou’yu aldı, kentte 30 bin kişiyi öldürdü ve kentin kuzeyinde altar kurup "Büyük Yan Kralı" oldu; Zhou Zhi’yi baş komutan atadı.',
  'Jiu Tang shu, juan 200 shang «Shi Siming» (' + ZH + '舊唐書/卷200上; okundu): «思明擊而拔其城，光遠脫身南渡。思明于魏州殺三萬人，平地流血數日，既乾元二年正月一日也。思明于魏州北設壇，僭稱為大聖燕王，以周贄為行軍司馬。»',
  '759 (Qianyuan 2), 1. ay 1. gün', 'gun', tak=TAKS('Qianyuan 2 1. ay 1. gün = 759-02-02 (Gregoryen 759-02-06); Tang takvimi hesabı ±1 gün.'))
K('0759-05-01', 'Shi Siming imparatorluk ilan etti; Fanyang "Yanjing" (Yan Başkenti) oldu', 'siyaset', ['an-lushan-yan', 'tang'], 'Youzhou (Fanyang)',
  'Shi Siming, Anyang (Xiangzhou) yenilgisinin ardından An Qingxu’yu öldürüp ordusunu devraldı, 759’da imparatorluk unvanını aldı, Zhou Zhi’yi başbakan, Fanyang’ı Yan Başkenti (Yanjing) yaptı.',
  'Jiu Tang shu, juan 200 shang (okundu): «三月，引眾救相州，官軍敗而引退。思明召慶緒等殺之，並有其眾。四月，僭稱大號，以周贄為相，以范陽為燕京。»; «思明乾元二年僭號，至朝義寶應元年滅，凡四年。»',
  '759 (Qianyuan 2), 4. ay (ay ilk günü)', 'ay', tak=TAKS('Qianyuan 2 4. ay ilk günü = 759-05-01 (Gregoryen 759-05-05).'),
  ic='Künye (ms1) t=0763-01-01; aynı kaynak «朝義寶應元年滅» (762) der: künye t 762 (Luoyang kaybı 762-11-20) ya da 763 başı (Shi Chaoyi’nin ölümü) arasında seçilmeli — öneri: t=0763-01-01 (Li Huaixian’ın Shi Chaoyi’yi öldürmesi, Jiu Tang shu 11; ay/gün okunmadı).')

# ---------------- GUIYI ----------------
K('0955-01-01', 'Sonraki Zhou Cao Yuanzhong’a Guiyi Jun valiliği ve unvanlar verdi', 'siyaset', ['guiyi-jun-dunhuang', 'sonraki-zhou-5hanedan'], 'Dunhuang',
  'Shazhou (Dunhuang) Guiyi Jun valisi Cao Yuanzhong (Cao Yijin’in oğlu) Sonraki Zhou’ya haraç gönderdi; Sonraki Zhou ona "Guiyi Jun valisi", "Jiaoxiao Taiwei" ve "Tongzhongshu Menxia Pingzhangshi" unvanlarını verip mühür bastırdı.',
  'Tuotuo vd., Song shi, juan 490 «Waiguo 6: Shazhou» (' + ZH + '宋史/卷490; okundu): «至朱梁時，張氏之後絕，州人推長史曹義金為帥。義金卒，子元忠嗣。周顯德二年來貢，授本軍節度、檢校太尉、同中書門下平章事，鑄印賜之。»',
  'Xiande 2 (955)', 'yil', ic='Xiande 2 = 955; ay/gün yok. Aynı kaynak Zhang hanedanının sonunu ve Cao Yijin’in başa geçişini «朱梁時» (907–923) diye yaylı verir (devir yılı belirsiz, atlas künyesi 914).')

# ---------------- GANZHOU UYGUR ----------------
K('0977-01-01', 'Song, Ganzhou ve Shazhou Uygur kağanına elçi gönderdi', 'siyaset', ['ganzhou-uygur', 'song'], 'Zhangye (Ganzhou)',
  'Song imparatoru Taizong, Ganzhou ve Shazhou Uygurlarının kağanının yeğenine elçi (Zhang Can) gönderip hediye yollayarak atları ve yeşimi Song’a getirtmek istedi; Ganzhou Uygur Kağanlığı Song’la ilişkiye girdi.',
  'Song shi, juan 490 «Huihu» (' + ZH + '宋史/卷490; okundu): «太平興國二年冬，遣殿直張璨齎詔諭甘、沙州回鶻可汗外甥，賜以器幣，招致名馬美玉，以備車騎琮璜之用。»', 'Taiping Xingguo 2 (977), kış', 'yil',
  ic='Taiping Xingguo 2 = 977; ay/gün kaynakta yok (kış; bu yılın 12. ayı olabilir).')
K('0980-01-01', 'Ganzhou ve Shazhou Uygur kağanı Yeluo Hemi Liye Song’a elçi gönderdi', 'siyaset', ['ganzhou-uygur', 'song'], 'Zhangye (Ganzhou)',
  'Kağan Yeluo Hemi Lieye (夜落紇密禮遏) Song’a dört elçi yollayıp deve, at, mercan ve kehribar hediye etti.',
  'Song shi, juan 490 (okundu): «五年，甘、沙州回鶻可汗夜落紇密禮遏遣使裴溢的等四人，以橐駝、名馬、珊瑚、琥珀來獻。»', 'Taiping Xingguo 5 (980)', 'yil',
  ic='Taiping Xingguo 5 = 980; ay/gün yok.')
K('1001-01-01', 'Ganzhou Uygur kağanı Lusheng Song’a Li Jiqian’a karşı ittifak önerdi', 'ittifak', ['ganzhou-uygur', 'song', 'xiazhou-dangxiang'], 'Zhangye (Ganzhou)',
  'Kağan Lusheng elçisi Cao Wantong’u (kendi "Büyük Sır Katibi") Song’a gönderip Dangxiang reisi Li Jiqian’ı yakalayıp getirmek için Song’un komutan göndermesini önerdi; devletinin sınırlarını "doğuda Sarı Irmak, batıda Karlı Dağlar, yüzlerce küçük komutanlık" diye tanımladı.',
  'Song shi, juan 490 (okundu): «咸平四年，可汗王祿勝遣使曹萬通以玉勒名馬、…來貢。萬通自言任本國樞密使，本國東至黃河，西至雪山，有小郡數百，甲馬甚精習，願朝廷命使統領，使得縛繼遷以獻。»', 'Xianping 4 (1001)', 'yil',
  ic='Xianping 4 = 1001; ay/gün yok. «小郡數百» abartılı olabilir (kağanın kendi beyanı).')
K('1023-06-21', 'Song Ganzhou Uygur kağanı Yeluoge Tongshun’a "Guizhong Baoshun Kağan Wang" unvanı verdi', 'siyaset', ['ganzhou-uygur', 'song'], 'Zhangye (Ganzhou)',
  'Tiansheng 1’de Ganzhou kağanı Yeluoge Tongshun elçiler yolladı; Song imparatorluk fermanıyla ona "Guizhong Baoshun Kağan Wang" (Sadık-İtaatkâr Kağan Kral) unvanı verildi. Beş yıl sonra Li Yuanhao Ganzhou’yu aldı.',
  'Song shi, juan 490 (okundu): «天聖元年五月，甘州夜落隔通順遣使阿葛之、王文貴來貢方物。六月，詔甘州回紇外甥可汗王夜落隔通順特封歸忠保順可汗王。»', 'Tiansheng 1 (1023), 6. ay (ay ilk günü)', 'ay',
  tak=TAKS('Tiansheng 1 6. ay ilk günü = 1023-06-21 (Gregoryen 1023-06-27).'))

# ---------------- XIAZHOU (Dingnan Jun) ----------------
K('0909-04-23', 'Dingnan Jun: Li Yichang öldürüldü, Li Renfu Xiazhou valisi oldu', 'hukumdar', ['xiazhou-dangxiang', 'sonraki-liang-5hanedan'], 'Xiazhou (Tongwancheng)',
  'Dingnan Jun valisi Li Sijian’ın ölümünden sonra oğlu Li Yichang vali oldu; ertesi yıl komutanı Gao Zongyi onu öldürdü. Asker, Dangxiang kabile komutanı Li Renfu’yu başa getirdi; Liang onu aynı yıl 4. ay Dingnan Jun valisi atadı.',
  'Ouyang Xiu, Xin Wudai shi, juan 40 «Li Renfu» (' + ZH + '新五代史/卷40; açıldı, okundu): «梁開平二年，思諫卒，軍中立其子彝昌為留後，即拜彝昌節度使。明年，其將高宗益作亂，殺彝昌。是時，仁福為蕃部指揮使，戍兵于外，軍中乃迎仁福立之，不知其於思諫為親疎也。是歲四月，拜仁福檢校司空、定難軍節度使。終梁之世，奉正朔而已。»',
  '909 (Kaiping 3), 4. ay (ay ilk günü)', 'ay', tak=TAKS('Kaiping 3 4. ay ilk günü = 909-04-23 (Gregoryen 909-04-28).'))
K('0934-04-16', 'Li Renfu öldü; Tang oğlu Li Yichao’yu başka yere atamaya kalktı, Yichao Xiazhou’yu savunup görevi korudu', 'savas', ['xiazhou-dangxiang', 'sonraki-tang-5hanedan'], 'Xiazhou (Tongwancheng)',
  'Li Renfu 934’te ölünce oğlu Li Yichao kendini vekil vali ilan etti; Sonraki Tang imparatoru Mingzong onu Yanzhou valiliğine kaydırıp yerine Anyuan’dan An Congjin’i atadı, 50 bin kişilik orduyla yolladı. Yichao devri kabul etmedi; Xiazhou’nun (Tongwan) bir asır kadar kuşatılması başarısız oldu, Mingzong kuşatmayı bırakıp Yichao’yu Dingnan valisi olarak onayladı.',
  'Xin Wudai shi, juan 40 (okundu): «長興四年三月卒，其子彝超自立為留後。…明宗因其卒，乃以彝超為延州刺史、彰武軍節度使，而徙彰武安從進代之。…彝超果不受代，從進與彥稠以兵圍之，百餘日不克。夏州城壁素堅，故老傳言赫連勃勃蒸土築之，…明宗遂釋不攻，以彝超為定難軍節度使。清泰二年卒。»',
  '934 (Changxing 4), 3. ay (ay ilk günü)', 'ay', tak=TAKS('Changxing 4 3. ay ilk günü = 934-04-16 (Gregoryen 934-04-21).'),
  ic='Metin Xiazhou’yu "Helian Bobo’nun ördürdüğü toprakla yapılmış surlu kent" (Tongwan Şehri) diye tanımlar: Xiazhou = Tongwancheng kimliği için kaynak.', onem=3)
K('0985-02-22', 'Li Jiqian Yinzhou’yu aldı: Dangxiang ayaklanması', 'isyan', ['xiazhou-dangxiang', 'song'], 'Yinzhou (Yulin yöresi)',
  'Song’a bağlanan Li Jipeng’in kardeşi Li Jiqian önce teslim olmuş gibi davranıp Song komutanı Cao Guangshi’yi Jialu Irmağı’nda pusuya düşürdü, Yinzhou’yu aldı; ertesi ay Huizhou’yu alıp yakarak çekildi. Dingnan Jun’un 988’e kadar Song’la mücadelesi başladı.',
  'Song shi, juan 485 (' + ZH + '宋史/卷485; okundu): «乃詐降，誘殺曹光實于葭蘆川，遂襲銀州據之，時雍熙二年二月也。三月，破會州，焚毀城郭而去。»', 'Yongxi 2 (985), 2. ay (ay ilk günü)', 'ay',
  tak=TAKS('Yongxi 2 2. ay ilk günü = 985-02-22 (Gregoryen 985-02-27).'))

# ---------------- QI (Li Maozhen) ----------------
K('0907-06-01', 'Li Maozhen Liang kurulunca imparatorluk ilan etmedi, "Qi Kralı" kaldı', 'siyaset', ['qi-li-maozhen', 'sonraki-liang-5hanedan'], 'Fengxiang',
  'Liang kurulunca güçlü valilerin çoğu imparator ilan etti; Li Maozhen bunu yapamadı ve "Qi Kralı" unvanıyla yetindi; Fengxiang’da kendi saray teşkilatı kurup karısını imparatoriçe, kendisini tahtta oturur gösterdi. Fengxiang Qi’nin merkezi, Liang ile ilişkileri çatışmalıydı.',
  'Ouyang Xiu, Xin Wudai shi, juan 40 «Li Maozhen» (' + ZH + '新五代史/卷40; okundu): «及梁太祖即位，諸侯之彊者皆相次稱帝，獨茂貞不能，但稱岐王，開府置官屬，以妻為皇后，鳴梢羽扇視朝，出入擬天子而已。»',
  '907 (Kaiping 1), Liang’ın kuruluşu (Jülyen 907-06-01)', 'gun', ic='Qi’nin kuruluş yılı (künye f=0901-01-01): «封岐王» günü/yılı Xin Wudai 40’ta okunmadı; Fengxiang yerleşimi bu kümede yazılamadı (aşağıda rapor).')
K('0924-01-01', 'Li Maozhen Sonraki Tang’a bağlandı, Qin Kralı oldu', 'siyaset', ['qi-li-maozhen', 'sonraki-tang-5hanedan'], 'Fengxiang',
  'Zhuangzong Liang’ı yıkınca Li Maozhen önce amcalık sıfatıyla mektup yazdı, Luoyang’a girişin duyulmasıyla vasal bildirisi gönderip oğlu Li Congyan’ı sarayda hizmete yolladı; Zhuangzong ona Qin Kralı unvanı verdi, adıyla çağırmama ayrıcalığı tanıdı.',
  'Xin Wudai shi, juan 40 (okundu): «莊宗已破梁，茂貞稱岐王，上牋以季父行自處。及聞入洛，乃上表稱臣，遣其子從曮來朝。莊宗以其耆老，甚尊禮之，改封秦王，詔書不名。»', 'Tongguang 2 (924) — Luoyang’a giriş (924-01-03) sonrası', 'yil',
  ic='Tongguang 2 = 924; ay/gün yok. Künye t=0924-01-01 ile uyumlu (yıl sonu olabilir).')
K('0924-01-01', 'Li Maozhen öldü; Qi devleti sona erdi', 'son', ['qi-li-maozhen', 'sonraki-tang-5hanedan'], 'Fengxiang',
  'Li Maozhen 69 yaşında hastalıktan öldü ("Zhongjing" lakabı); Qi yönetimi Sonraki Tang’a bağlı Fengxiang valiliğine döndü.',
  'Xin Wudai shi, juan 40 (okundu): «同光二年，以疾卒，年六十九，謚曰忠敬。»', 'Tongguang 2 (924)', 'yil', ic='Tongguang 2 = 924; ay/gün yok.')

# ---------------- TANG-JIN (Shatuo) ----------------
K('0895-01-01', 'Tang Li Keyong’u "Jin Wang" (Jin Prensi) yaptı', 'siyaset', ['tang-jin-shatuo-prensligi', 'tang'], 'Taiyuan',
  'Wang Xingyu’nun yenilgisinin ardından Tang sarayı Hedong valisi Li Keyong’un unvanını "Jin Prensi"ne yükseltti; Taiyuan (Jinyang) Shatuo prensliğinin merkezi oldu.',
  EV['ETJ895']['kaynak'], '895 (Qianning 2)', 'yil', ic='Künye (ms1) f=0902-01-01 gösterir; bu kaynak 895’i verir. ' + EV['ETJ895']['ic'])
K('0908-02-05', 'Li Cunxu Taiyuan’da "Jin Kralı" oldu (Li Keyong’un ölümü)', 'hukumdar', ['tang-jin-shatuo-prensligi', 'sonraki-liang-5hanedan'], 'Taiyuan',
  'Li Keyong’un ölümünün ardından oğlu Li Cunxu Taiyuan’da kral oldu; amcası Li Kening’i öldürdü, Liang’ın kuşattığı Shangdang’daki ordusunu Sandui Tepesi’nde dalga dalga bastırıp Liang’ın kuşatmasını kaldırdı.',
  'Xin Wudai shi, juan 5 «Tang benji» (' + ZH + '新五代史/卷05; okundu): «天祐五年正月，即王位于太原。…二月，執而戕之，…乃出兵趨上黨，行至三垂崗，…攻其夾城，破之，梁軍大敗，凱旋告廟。»',
  '908 (Tianyou 5), 1. ay (ay ilk günü)', 'ay', tak=TAKS('Tianyou 5 1. ay ilk günü = 908-02-05 (Gregoryen 908-02-10).'))
K('0911-02-02', 'Baixiang Savaşı: Jin ve Zhao Liang ordusunu yendi', 'savas', ['tang-jin-shatuo-prensligi', 'zhao-wang-rong', 'sonraki-liang-5hanedan'], 'Baixiang (Hebei)',
  'Liang’ın Wang Jingren komutasındaki ordusu Zhao’ya saldırınca Zhao Prensi Wang Rong Jin’den yardım istedi; Li Cunxu ordusuyla gelip Baixiang’da Liang ordusunu ezdi (20 bin kesik baş).',
  'Xin Wudai shi, juan 5 (okundu): «七年冬，梁遣王景仁攻趙，趙王王鎔來乞師，諸將皆疑鎔詐，未可出兵，王不聽，乃救趙。八年正月，敗梁軍于柏鄉，斬首二萬級，獲其將校三百人，馬三千匹。»',
  '911 (Tianyou 8), 1. ay (ay ilk günü)', 'ay', tak=TAKS('Tianyou 8 1. ay ilk günü = 911-02-02 (Gregoryen 911-02-07).'), onem=3)
K('0915-01-01', 'Weibo (Weizhou–Bozhou) Liang’dan Jin’e geçti; Li Cunxu Weizhou’ya girdi', 'siyaset', ['tang-jin-shatuo-prensligi', 'sonraki-liang-5hanedan'], 'Weizhou (Daming)',
  'Weizhou ordusunun isyanı üzerine Liang’ın Weibo valisi He Delun Wei ve Bo eyaletleriyle Jin’e geçti; Li Cunxu Weizhou’ya girip Zhang Yan’ı cezalandırdı, kendi "Yinqiang" muhafız birliğini kurdu. Jin Hebei’ye kalıcı yerleşti.',
  'Xin Wudai shi, juan 5 (okundu): «十二年，魏州軍亂，賀德倫以魏、博二州叛于梁來附。王入魏州，行至永濟，誅其亂首張彥，以其兵五百自衞，號帳前銀槍軍。»', 'Tianyou 12 (915)', 'yil', ic='Tianyou 12 = 915; ay yok (aynı yılın 6. ayında Li Cunxu Weibo valiliğini üstlendi).')

# ---------------- ZHAO ----------------
K('0910-01-01', 'Zhao Prensi Wang Rong Liang’a karşı Jin’den yardım istedi', 'ittifak', ['zhao-wang-rong', 'tang-jin-shatuo-prensligi', 'sonraki-liang-5hanedan'], 'Zhengding',
  'Liang ordusu Zhao’ya saldırınca Wang Rong Jin’in yardımına başvurdu; Jin komutanlarının "hile olabilir" kuşkusuna rağmen Li Cunxu ordusuyla yardıma gitti. Zhao–Jin ittifakı kuruldu, Zhao’nun Liang’a bağlılığı bitti.',
  'Xin Wudai shi, juan 5 (okundu): «七年冬，梁遣王景仁攻趙，趙王王鎔來乞師，諸將皆疑鎔詐，未可出兵，王不聽，乃救趙。»', 'Tianyou 7 (910), kış', 'yil', ic='Tianyou 7 = 910; ay yok (kış).')
K('0921-02-11', 'Zhang Wenli Zhao Prensi Wang Rong’u öldürüp Zhenzhou’yu ele geçirdi', 'isyan', ['zhao-wang-rong', 'tang-jin-shatuo-prensligi'], 'Zhengding',
  'Zhao ordusunda komutan Zhang Wenli (Wang Deming) Wang Rong’u saray ormanında gece öldürüp Wang ailesini kırdı, kendini Zhenzhou vekil valisi ilan etti ve Jin’e "yetki ver" diye başvurdu. Jin ona önce vali payesi verdi. Zhao Prensliği sona erdi.',
  EV['EZ921']['kaynak'] + ' ‖ Zizhi tongjian 271 (okundu): «趙王方焚香受菉，二人斷其首而出，因焚府第。軍校張友順帥眾詣德明第，請為留後，德明複姓名曰張文禮，盡滅王氏之族»',
  '921 (Tianyou 18), 1. ay (ay ilk günü)', 'ay', tak=TAKS('Tianyou 18 1. ay ilk günü = 921-02-11 (Gregoryen 921-02-16).'), ic=EV['EZ921']['ic'], onem=3)
K('0922-10-23', 'Jin Zhenzhou’yu (Zhang Wenli rejimini) ele geçirdi', 'savas', ['tang-jin-shatuo-prensligi', 'zhao-wang-rong'], 'Zhengding',
  'Zhang Wenli’nin ölümü ve oğlu Zhang Chujin’in direnişinin ardından Jin komutanı Li Cunshen Zhenzhou’yu aldı; Li Cunxu Chengde valiliğini de üstlendi. Eski Zhao toprakları doğrudan Jin’e katıldı.',
  'Xin Wudai shi, juan 5 (okundu): «十九年…十月，李存審克鎮州。王兼領成德軍節度使。»', '922 (Tianyou 19), 10. ay (ay ilk günü)', 'ay', tak=TAKS('Tianyou 19 10. ay ilk günü = 922-10-23 (Gregoryen 922-10-28).'),
  ic='Zhengding zincirinde 921-02-11’den itibaren Jin nominal egemen yazıldı; fiilî Jin kontrolü bu tarihte (BEYANLI YAKLAŞIKLIK).')

# ---------------- YAN (Liu Shouguang) ----------------
K('0907-01-01', 'Liu Shouguang babasını hapsedip Lulong (Youzhou) valiliğini ele geçirdi', 'isyan', ['yan-liu-shouguang', 'sonraki-liang-5hanedan'], 'Pekin (Hanbalık)',
  'Liang’ın kuruluş yılında Liu Shouguang Liang ordusunu püskürtüp "Lulong valisi" unvanını kendi aldı, babası Liu Rengong’u Daan Dağı’nda hapsetti; ağabeyi Liu Shouwen’i ertesi yıl yenip yakaladı. Youzhou Yan’ın çekirdeği oldu.',
  'Xin Wudai shi, juan 39 «Liu Shouguang» (' + ZH + '新五代史/卷39; okundu): «梁開平元年，遣李思安攻仁恭，仁恭在大安，守光自外將兵以入，擊走思安，乃自稱盧龍節度使，遣李小喜、元行欽以兵攻大安山，執仁恭而幽之。»', 'Kaiping 1 (907)', 'yil', ic='Kaiping 1 = 907; ay yok.')
K('0911-09-08', 'Liu Shouguang imparator ilan etti: Büyük Yan (Da Yan), Yingtian dönemi', 'kurulus', ['yan-liu-shouguang', 'sonraki-liang-5hanedan', 'tang-jin-shatuo-prensligi'], 'Pekin (Hanbalık)',
  'Jin ve Zhao’nun "Shangfu" payesi sunmasını aşağılayıp Youzhou’da imparator ilan etti; muhalif danışmanı Sun He’yi diri diri dilimlettirdi; Jin elçisi Li Chengxun’u öldürttü. Yan imparatorluğu Hebei’nin kuzeyinde kısa süreli bağımsızdı.',
  EV['EY911']['kaynak'], '911 (Qianhua 1), 8. ay, ganzhi 甲子', 'gun', tak=EV['EY911']['ic'], onem=3)
K('0913-11-01', 'Jin ordusu Youzhou’yu aldı; Liu Shouguang kaçarken yakalandı, Yan sona erdi', 'son', ['yan-liu-shouguang', 'tang-jin-shatuo-prensligi'], 'Pekin (Hanbalık)',
  'Zhou Dewei komutasındaki Jin ordusu Youzhou’yu kuşatıp aldı; Liu Shouguang karısı ve oğullarıyla Cangzhou’ya kaçarken yolunu şaşırıp açlıktan köylülerce tanınıp yakalandı, Youzhou’ya getirildi; sonra Taiyuan’da öldürüldü (914). Yan devleti sona erdi.',
  EV['EY913']['kaynak'] + ' ‖ Xin Wudai shi, juan 39 (okundu): «守光與其妻李氏、祝氏，子繼珣、繼方、繼祚等，南走滄州，迷失道，至燕樂界中，數日不得食，…乃被擒送幽州。»',
  '913 (Tianyou 10), 10. ay (ay ilk günü)', 'ay', tak=TAKS('Tianyou 10 10. ay ilk günü = 913-11-01 (Gregoryen 913-11-06).'), ic=EV['EY913']['ic'], onem=3)

# ---------------- YANG WU ----------------
K('0902-01-01', 'Tang Yang Xingmi’ye "Wu Kralı" unvanı verdi', 'siyaset', ['yang-wu', 'tang'], 'Yangzhou', EV['EYW902']['d'], EV['EYW902']['kaynak'], '902 (Tianfu 2)', 'yil', ic=EV['EYW902']['ic'])
K('0919-05-03', 'Yang Longyan Wu Kralı oldu; Wu devleti resmî kuruldu (Wuyi 1)', 'kurulus', ['yang-wu'], 'Yangzhou',
  'Wu’nun fiilî yöneticisi Xu Wen, Yang Longyan’ı "Wu Kralı" yapıp saray teşkilatını imparatorluk düzeninde kurdu; dönem adı "Wuyi" açıldı (Tang takvimi 919’a kadar sürdürüldü). Xu Wen "Büyük Başbakan" oldu.',
  'Xin Wudai shi, juan 61 (' + ZH + '新五代史/卷61; okundu): «十六年，…夏四月，溫奉玉冊、寶綬尊隆演即吳王位。建宗廟、社稷，設百官如天子之制，改天祐十六年為武義元年，大赦境內，…拜溫大丞相、都督中外諸軍事，封東海郡王»',
  '919 (Tianyou 16 = Wuyi 1), 4. ay (ay ilk günü)', 'ay', tak=TAKS('Wuyi 1 4. ay ilk günü = 919-05-03 (Gregoryen 919-05-08).'))
K('0927-11-29', 'Yang Pu imparator ilan edildi: Qianzhen dönemi', 'hukumdar', ['yang-wu'], 'Yangzhou',
  'Xu Wen’in ölümüyle sonuçlanan bir yıl sonra Wu’nun soyluları Yang Pu’yu imparator yapmaya çağırdı; Yang Pu Wenming Salonu’nda imparator ilan edildi, "Qianzhen" dönemini açtı; Xu Zhigao Taiwei oldu. Xu ailesi fiilî iktidarı elinde tuttu.',
  'Xin Wudai shi, juan 61 (okundu): «七年，大丞相徐溫率吳文、武上表勸溥即皇帝位，溥未許而溫病卒。十一月庚戌，溥御文明殿即皇帝位，改元曰乾貞，大赦境內，…以徐知誥為太尉兼侍中»',
  '927 (Shunyi 7), 11. ay, ganzhi 庚戌', 'gun', tak=TAKS('Shunyi 7 11. ay 庚戌 = 927-11-29 (Gregoryen 927-12-04).'))
K('0937-11-06', 'Yang Pu tahtı Xu Zhigao’ya devretti; Qi (sonra Güney Tang) kuruldu', 'son', ['yang-wu', 'guney-tang'], 'Yangzhou', EV['EYW937']['d'], EV['EYW937']['kaynak'], '937 (Tianzuo 3), 10. ay (ay ilk günü)', 'ay',
  tak=EV['EYW937']['ic'], ic=EV['EYW937']['ic'], onem=3)

# ---------------- ONCEKI SHU ----------------
K('0897-01-01', 'Wang Jian Zizhou’yu alıp Doğu ve Batı Sichuan’ı birleştirdi', 'savas', ['onceki-shu', 'tang'], 'Zizhou (Santai)',
  'Wang Jian 897’de Dongchuan merkezi Zizhou’yu (Santai) yeniden kuşatıp aldı; Dongchuan valisi Gu Yanhui intihar etti. Wang Jian Batı ve Doğu Sichuan’ı ("iki Chuan") elinde topladı; Tang Wang Jian’ın yeğeni Wang Zongdi’yi Dongchuan valisi atamak zorunda kaldı.',
  'Xin Wudai shi, juan 63 «Qian Shu shijia» (' + ZH + '新五代史/卷63; okundu): «四年，宗滌復攻東川，…冬十月，建攻破梓州，彥暉自殺。…於是并有兩川之地。»', 'Qianning 4 (897), 10. ay', 'yil', ic='Qianning 4 = 897; 10. ay gün adı yok (YYYY-01-01 kuralı).')
K('0901-01-01', 'Wang Jian Hanzhong’u (Shannan Xidao) aldı', 'savas', ['onceki-shu', 'qi-li-maozhen'], 'Hanzhong (Xingyuan)',
  'Zhaozong’un Fengxiang’a kaçırıldığı sırada Wang Jian "imparatoru karşılama" bahanesiyle Wang Zongdi’yi gönderip Xingyuan’ı (Hanzhong) alıp Qi’nin valisini yakalattı; Wuding valisi Tuoba Sijing yerini Wang Jian’a bıraktı. Wang Jian Shannan Xidao’yu (Hanzhong yöresi) da eline geçirdi.',
  'Xin Wudai shi, juan 63 (okundu): «遣王宗滌將兵五萬，聲言迎駕，以攻興元，執其節度使李繼業，而武定節度使拓拔思敬遂以其地降于建，於是并有山南西道。»', 'Tianfu 1 (901)', 'yil', ic='Tianfu 1 = 901; ay yok.')
K('0903-08-25', 'Tang Wang Jian’a "Shu Kralı" unvanı verdi', 'siyaset', ['onceki-shu', 'tang'], 'Çengdu (Chengdu)',
  'Tang sarayı Wang Jian’ı Shu Kralı (蜀王) yaptı; Chengdu merkezli Sichuan Tang’ın son yıllarında fiilen bağımsızdı.',
  'Xin Wudai shi, juan 63 (okundu): «三年八月，唐封建蜀王。»', 'Tianfu 3 (903), 8. ay (ay ilk günü)', 'ay', tak=TAKS('Tianfu 3 8. ay ilk günü = 903-08-25 (Gregoryen 903-08-30).'))
K('0907-11-03', 'Wang Jian Chengdu’da imparator ilan etti: Önceki Shu', 'kurulus', ['onceki-shu'], 'Çengdu (Chengdu)',
  'Liang Tang’ı yıkıp elçi yollayınca Wang Jian reddetti; müttefik aramak için bildiri yayımladı ama kimse katılmadı; sonbaharda imparator ilan edildi (ertesi yıl Wucheng dönem adı).',
  'Xin Wudai shi, juan 63 (okundu): «七年，梁滅唐，遣使者諭建，建拒而不納。建因馳檄四方，會兵討梁，四方知其非誠實，皆不應。…秋九月己亥，建乃即皇帝位。»  ‖ «據前蜀書、運曆圖、九國志皆云建以唐大順二年入成都為西川節度使，天復七年九月建號»',
  '907 (Tianyou 4 / «天復七年»), 9. ay, ganzhi 己亥', 'gun', tak=TAKS('907 9. ay 己亥 = 907-11-03 (Gregoryen 907-11-08).'),
  ic='Künye f=0907-01-01: gerçek imparatorluk ilanı 907-11-03; ama Shu Tang’ın düşüşünden (907-06-01) beri bağımsızdı. Kaynak notu: Jiu Wudai shi «龍紀元年入成都, 天祐五年建號» der — Ouyang «繆» (yanlış) diyerek reddeder.', onem=3)
K('0925-12-08', 'Sonraki Tang Sichuan’ı fethetti; Wang Yan Chengdu’da teslim oldu, Önceki Shu sona erdi', 'son', ['onceki-shu', 'sonraki-tang-5hanedan'], 'Çengdu (Chengdu)',
  EV['ESH925']['d'], EV['ESH925']['kaynak'], '925 (Tongguang 3), 11. ay, ganzhi 己酉', 'gun', tak=EV['ESH925']['ic'], ic=EV['ESH925']['ic'], onem=4, dunya=2)
K('0926-05-15', 'Wang Yan ve ailesi Luoyang yolunda Qinchuan’da öldürüldü', 'hukumdar', ['onceki-shu', 'sonraki-tang-5hanedan'], 'Çengdu (Chengdu)',
  'Zhuangzong teslim olan Wang Yan’ı Luoyang’a çağırıp ailesiyle birlikte yola çıkarttı; yolda, Zhuangzong’un oyuncu Jing Jin’in tavsiyesiyle Wang Yan’ın ailesini katlettirdi. Wang Yan’ın annesi "oğlum ülkesini teslim edince katledilmek hakkı mı?" diye feryat etti.',
  'Xin Wudai shi, juan 63 (okundu): «同光四年四月，行至秦川驛，莊宗用伶人景進計，遣宦者向延嗣誅其族。衍母徐氏臨刑呼曰：「吾兒以一國迎降，反以為戮，信義俱棄，吾知其禍不旋踵矣！」»',
  '926 (Tongguang 4), 4. ay (ay ilk günü; Liao shi 丁亥朔 çapası)', 'ay', tak=TAKS('Tongguang 4 4. ay ilk günü 丁亥朔 = 926-05-15 (Gregoryen 926-05-20); Xin Wudai 5 de «夏四月丁亥朔，皇帝崩».'))

# ---------------- WUYUE ----------------
K('0895-01-01', 'Qian Liu Zhenhai–Zhendong valisi olarak iki Zhejiang’ı topladı', 'siyaset', ['wuyue', 'tang'], 'Hangzhou',
  'Qian Liu Qianning 2’de Zhenhai ve Zhendong askerî valiliklerini elde ederek Hangzhou ve Yuezhou merkezli iki Zhejiang’ı (Liangzhe) tek elde topladı; Wuyue Krallığı’nın çekirdeği.',
  'Xin Wudai shi, juan 67 «Wuyue shijia» (' + ZH + '新五代史/卷67; okundu): «〈鏐世興滅，諸書皆同，蓋自唐乾寧二年為鎮海、鎮東軍節度使兼有兩浙，至皇朝太平興國三年國除，凡八十四年。〉»', 'Qianning 2 (895)', 'yil', ic='Künye f=0907-01-01 (Wuyue Kralı unvanı yılı); fiilî egemenlik 895’ten. Öneri: künye ic_not’a bu 895 beyanı.')
K('0898-01-01', 'Qian Liu Zhenhai karargâhını Hangzhou’ya taşıdı', 'baskent', ['wuyue', 'tang'], 'Hangzhou',
  'Zhaozong Qian Liu’yu Lingyan Köşkü’ne resim yaptırarak onurlandırdı; Zhenhai askerî valiliği merkezi Hangzhou’ya taşındı, Qian Liu’nun köyü "Yijin Kalesi" oldu.',
  'Xin Wudai shi, juan 67 (okundu): «光化元年，移鎮海軍於杭州，加鏐檢校太師，改鏐鄉里曰廣義鄉勳貴里，鏐素所居營曰衣錦營。…昭宗詔鏐圖形凌煙閣，升衣錦營為衣錦城»', 'Guanghua 1 (898)', 'yil', ic='Guanghua 1 = 898; ay yok.')
K('0907-06-01', 'Liang Qian Liu’ya Wuyue Kralı unvanı verdi', 'siyaset', ['wuyue', 'sonraki-liang-5hanedan'], 'Hangzhou', EV['EWY907']['d'], EV['EWY907']['kaynak'], '907 (Kaiping 1), Liang’ın kuruluşu (Jülyen 907-06-01)', 'gun', ic=EV['EWY907']['ic'])

# ---------------- MIN ----------------
K('0897-01-01', 'Wang Shenzhi Fuzhou’da Weiwu Jun valisi oldu', 'hukumdar', ['min-krallik', 'tang'], 'Fuzhou',
  'Weiwu Jun valisi Wang Chao’nun ölümü üzerine kardeşi Wang Shenzhi onun yerine geçti; Tang Fuzhou’yu Weiwu Jun yapıp Shenzhi’yi vali atadı. Shenzhi Fujian’ı Min krallığının temeline dönüştürdü.',
  'Xin Wudai shi, juan 68 «Min shijia» (' + ZH + '新五代史/卷68; okundu): «乾寧四年，潮卒，審知代立。唐以福州為威武軍，拜審知節度使，累遷同中書門下平章事，封琅琊王。»', 'Qianning 4 (897)', 'yil', ic='Qianning 4 = 897; ay yok. Aynı kaynak sonda Fuzhou’nun fiilî Wang egemenliğini «景福元年» (892) diye de sayar (ayrı sayım).')
K('0907-06-01', 'Liang Wang Shenzhi’ye Min Kralı unvanı verdi', 'siyaset', ['min-krallik', 'sonraki-liang-5hanedan'], 'Fuzhou', EV['EMN907']['d'], EV['EMN907']['kaynak'], '907 (Kaiping 1), Liang’ın kuruluşu (Jülyen 907-06-01)', 'gun', ic=EV['EMN907']['ic'])
K('0933-01-01', 'Wang Lin (Wang Yanjun) imparator ilan etti: Büyük Min (Longqi dönemi)', 'kurulus', ['min-krallik'], 'Fuzhou',
  'Wang Shenzhi’nin oğlu Wang Lin (Yanjun), Baohuang adlı büyücü Chen Shouyuan’ın "altmış yıl hüküm süreceksin" kehanetiyle imparator ilan etti; devlet adı Min, dönem adı Longqi; Fuzhou "Changle Fu" (Uzun Neşe Başkenti) yapıldı.',
  'Xin Wudai shi, juan 68 (okundu): «鏻乃即皇帝位，受冊於寶皇，以黃龍見真封宅，改元為龍啟，國號閩。追謚審知為昭武孝皇帝，廟號太祖，立五廟，置百官，以福州為長樂府。»', 'Longqi 1 (933)', 'yil',
  ic='Yıl 933: Longqi 1 dönem tablosundan (kaynak sayfa yıl vermiyor; ZZTJ 278 okunmadı). Ay/gün yok.', onem=3)
K('0946-01-01', 'Güney Tang Min’i yıktı (Xin Wudai 946, künye 945)', 'son', ['min-krallik', 'guney-tang'], 'Fuzhou', EV['EMN945']['d'], EV['EMN945']['kaynak'], '945/946 — çelişki', 'yil', ic=EV['EMN945']['ic'], onem=3)

# ---------------- CHU (Ma) ----------------
K('0894-01-01', 'Liu Jianfeng Tanzhou’yu (Changsha) alıp Hunan’a girdi', 'isgal', ['chu-ma'], 'Changsha',
  'Sun Ru’nun ordu kalıntısının komutanı Liu Jianfeng ve Ma Yin Hunan’a girdi; Tanzhou’yu (Changsha) ardıllık kuşatması yoluyla alıp valisi Deng Chuna’yı öldürdü, Liu Jianfeng vekil vali oldu. Chu’nun kökeni.',
  'Xin Wudai shi, juan 66 «Chu shijia» (' + ZH + '新五代史/卷66; okundu): «乾寧元年，入湖南，次醴陵。…遂殺處訥，建峯自稱留後。»', 'Qianning 1 (894)', 'yil', ic='Qianning 1 = 894; ay yok. Kaynak notunda «僖宗授建峯» (Xizong) yazılı; Xin Tang/ZZTJ’ye göre «昭宗» olmalıdır (derleme notu).')
K('0896-01-01', 'Ma Yin Tanzhou’yu devraldı (Hunan valisi)', 'hukumdar', ['chu-ma'], 'Changsha',
  'Liu Jianfeng’in öldürülmesinin ardından Zhang Ji vali olmayı reddedip Ma Yin’i çağırdı; Ma Yin Tanzhou’ya girip yönetimi devraldı. Tang ona Tanzhou prefekti unvanı verdi.',
  'Xin Wudai shi, juan 66 (okundu): «殷至，佶乘肩輿入府，殷拜謁於廷中，佶召殷上，乃率將吏下，北面再拜，以位與之，時乾寧三年也。唐拜殷潭州刺史。»', 'Qianning 3 (896)', 'yil', ic='Qianning 3 = 896; ay yok.')
K('0897-01-01', 'Tang Ma Yin’i Wu’an Jun valisi yaptı', 'siyaset', ['chu-ma', 'tang'], 'Changsha',
  'Ma Yin Guiguan’da Liu Shizheng’i yenip vilayetlerini aldı; Tang ona Wu’an Jun valisi payesi verdi. Tanzhou Wu’an Jun’un merkezi olarak Hunan’ın başkenti oldu.',
  'Xin Wudai shi, juan 66 (okundu): «殷遣瓊等以兵七千攻之，…虜士政，盡取其屬州。殷表瓊桂管觀察使。四年，拜殷武安軍節度使。»', 'Qianning 4 (897)', 'yil', ic='Qianning 4 = 897; ay yok.')
K('0907-06-01', 'Liang Ma Yin’e Chu Kralı unvanı verdi', 'siyaset', ['chu-ma', 'sonraki-liang-5hanedan'], 'Changsha', EV['ECM907']['d'], EV['ECM907']['kaynak'], '907 (Kaiping 1), Liang’ın kuruluşu (Jülyen 907-06-01)', 'gun', ic=EV['ECM907']['ic'])
K('0927-01-01', 'Sonraki Tang Ma Yin’e "Chu Guowang" unvanı verdi; Tanzhou Changsha Fu oldu', 'siyaset', ['chu-ma', 'sonraki-tang-5hanedan'], 'Changsha',
  'Ma Yin Tang’dan bir hükümet merkezi (xingtai) talep etti; Mingzong ona Chu Kralı (Guowang) unvanı verdi. Ma Yin Tanzhou’yu Changsha Fu yapıp kendi bakan teşkilatını kurdu, atalarını Changsha’da tapınaklarda andı.',
  'Xin Wudai shi, juan 66 (okundu): «天成二年，請建行臺。明宗封殷楚國王，…殷以潭州為長沙府，建國承制，自置官屬»', 'Tiancheng 2 (927)', 'yil', ic='Tiancheng 2 = 927; ay yok. Künye f=0927 bu "Guowang" unvanını esas alır; Chu’nun egemenliği 907’den (Liang’ın Chu Kralı unvanı) olduğundan künye f düzeltilmelidir.')

# ---------------- NAN PING ----------------
K('0907-06-01', 'Gao Jixing Jingnan valisi atandı: Jiangling yalnız tek kent', 'siyaset', ['nan-ping-jingnan', 'sonraki-liang-5hanedan'], 'Jingzhou', EV['ENP907']['d'], EV['ENP907']['kaynak'], '907 (Kaiping 1), Liang’ın kuruluşu (Jülyen 907-06-01)', 'gun', ic=EV['ENP907']['ic'])
K('0925-01-01', 'Sonraki Tang Gao Jixing’e "Nanping Kralı" unvanı verdi', 'siyaset', ['nan-ping-jingnan', 'sonraki-tang-5hanedan'], 'Jingzhou',
  'Zhuangzong’a Luoyang’da kendi gelip bağlılık bildiren Gao Jixing’e (Gao Jichang) Tongguang 3’te "Nanping Kralı" (南平王) unvanı verildi. Zhuangzong’un ölümü üzerine Gao Jixing Sichuan’dan dönen servetin bir kısmını el koydu.',
  'Xin Wudai shi, juan 69 (okundu): «同光三年，封南平王。魏王繼岌已破蜀，得蜀金帛四十餘萬，自峽而下，而莊宗之難作。季興聞京師有變，乃悉邀留蜀物，而殺其使者韓珙等十餘人。»', 'Tongguang 3 (925)', 'yil', ic='Tongguang 3 = 925; ay yok. Künye f=0924-01-01 (girdi) bu unvandan önce başlar.')

# ---------------- GUNEY HAN ----------------
K('0905-01-01', 'Liu Yin Guangzhou (Qinghai Jun) valisi oldu', 'hukumdar', ['guney-han-10krallik', 'tang'], 'Kanton (Guangzhou)',
  'Qinghai (Guangzhou) komutanlığında Liu Yin 905’te Tang’dan vali unvanını aldı; Liu hanedanı Lingnan’da iktidara yerleşti. Aynı kaynak Güney Han’ın süresini "905’ten 971’e 67 yıl" sayar.',
  'Xin Wudai shi, juan 65 «Nan Han shijia» (' + ZH + '新五代史/卷65; okundu): «軍中推隱為留後。天祐二年，拜隱節度使。»; «〈隱興滅年世，諸書皆同。蓋自唐天祐二年隱為廣州節度使，至皇朝開寶四年國滅，凡六十七年。舊五代史以梁貞明三年龑僭號為始，故曰五十五年爾。〉»', 'Tianyou 2 (905)', 'yil',
  ic='Künye f=0917-01-01 (Jiu Wudai shi sayımı); Xin Wudai 905’ten sayar — künye ic_not’a eklenmeli (öneri).')
K('0909-01-01', 'Liang Liu Yin’e "Nanping Kralı" unvanı verdi', 'siyaset', ['guney-han-10krallik', 'sonraki-liang-5hanedan'], 'Kanton (Guangzhou)',
  EV['EGZ907']['d'], EV['EGZ907']['kaynak'], 'Kaiping 3 (909)', 'yil', ic='Kaiping 3 = 909; ay yok.')
K('0911-01-01', 'Liu Yin "Nanhai Wang" (Güney Deniz Kralı) oldu ve öldü; kardeşi Liu Yan geçti', 'hukumdar', ['guney-han-10krallik', 'sonraki-liang-5hanedan'], 'Kanton (Guangzhou)',
  'Qianhua 1’de Liu Yin Nanhai Wang unvanını aldı ve aynı yıl öldü; kardeşi Liu Yan (Liu Yan = sonra Liu Yan, Güney Han kurucusu) yerine geçti.',
  'Xin Wudai shi, juan 65 (okundu): «乾化元年，進封隱南海王。是歲卒，年三十八。弟龑立。»; «乾化二年，除清海節度使，…末帝即位，悉以隱官爵授龑，龑封南海王。»', 'Qianhua 1 (911)', 'yil', ic='Qianhua 1 = 911; ay yok.')
K('0917-01-01', 'Liu Yan imparator ilan etti: Büyük Yue, sonra Han (Güney Han)', 'kurulus', ['guney-han-10krallik'], 'Kanton (Guangzhou)', EV['EGZ917']['d'], EV['EGZ917']['kaynak'], 'Zhenming 3 (917)', 'yil', ic=EV['EGZ917']['ic'], onem=3)
K('0971-02-28', 'Song Güney Han’ı yıktı; Liu Chang teslim oldu', 'son', ['guney-han-10krallik', 'song'], 'Kanton (Guangzhou)', EV['EGZ971']['d'], EV['EGZ971']['kaynak'], '971 (Kaibao 4), 2. ay (ay ilk günü)', 'ay', tak=TAKS('Kaibao 4 2. ay ilk günü = 971-02-28 (Gregoryen 971-03-06).'), ic=EV['EGZ971']['ic'], onem=3)

# ---------------- SONRAKI LIANG ----------------
K('0907-06-01', 'Zhu Wen imparator ilan etti; Kaifeng Doğu Başkent, Luoyang Batı Başkent', 'kurulus', ['sonraki-liang-5hanedan', 'tang'], 'Kaifeng', EV['E907']['d'], EV['E907']['kaynak'], EV['E907']['gun'], 'gun', tak=EV['E907']['ic'], onem=4, dunya=2)
K('0923-11-18', 'Son Liang imparatoru Zhu Zhen öldü; Sonraki Liang sona erdi', 'son', ['sonraki-liang-5hanedan', 'sonraki-tang-5hanedan'], 'Kaifeng',
  'Tang ordusunun Zhongdu ve Caozhou’yu alıp Kaifeng’e yaklaşması üzerine son Liang imparatoru Zhu Zhen (Mo Di) 36 yaşında öldü ("Liang yok oldu"); Tang’ın ordusu bir gün sonra (己卯) Kaifeng’e girdi.',
  Q_WD3, 'Longde 3 (923), 10. ay, ganzhi 戊寅', 'gun', tak=EV['E923b']['ic'], ic='Künye t=0923-01-01 (devletler.js) / 0923-10-01 (DEVLET_LISTESI): gerçek son 0923-11-18 (ya da şehrin düşüşü 11-19); künye t düzeltilmeli (öneri).', onem=4)

# ---------------- SONRAKI TANG ----------------
K('0923-05-13', 'Li Cunxu imparator ilan etti: Sonraki Tang kuruldu', 'kurulus', ['sonraki-tang-5hanedan', 'tang-jin-shatuo-prensligi'], 'Weizhou (Daming)', EV['E923a']['d'], EV['E923a']['kaynak'], EV['E923a']['gun'], 'gun', tak=EV['E923a']['ic'], onem=4, dunya=2)
K('0924-01-03', 'Zhuangzong Luoyang’a girdi; Tang başkenti Luoyang oldu', 'baskent', ['sonraki-tang-5hanedan'], 'Luoyang',
  'Liang’ın yıkılışından sonra Li Cunxu Kaifeng’den Luoyang’a geçti; "Luoyang Başkenti" (洛京) Sonraki Tang’ın başkenti oldu. Kaifeng yeniden Xuanwu Jun’a düşürüldü.',
  'Xin Wudai shi, juan 5 (okundu): «十一月乙巳，復北都為鎮州，太原為北都。丙辰，復汴州為宣武軍。…甲子，如洛京。〈洛京，從當時語。〉十二月庚午朔，至自汴州。»',
  '923 (Tongguang 1), 11. ay, ganzhi 甲子', 'gun', tak=TAKS('Tongguang 1 11. ay 甲子 = 924-01-03 (Gregoryen 924-01-08). Ayın 庚午朔 12. ay çapası: 924-01-09 hesapla ±2 gün sapma (Tang takvimi).'))
K('0925-12-08', 'Tang Sichuan’ı fethetti: Wei Prensi Li Jiji ve Guo Chongtao Chengdu’ya girdi', 'savas', ['sonraki-tang-5hanedan', 'onceki-shu'], 'Çengdu (Chengdu)',
  'Tongguang 3 sonbaharında Wei Prensi Li Jiji "Batı Chuan dört cephe başkomutanı", Guo Chongtao tuzak komutanı olarak Sichuan seferine çıktı; Wang Yan teslim oldu, Chengdu alındı.',
  'Xin Wudai shi, juan 5 (okundu): «九月庚子，魏王繼岌為西川四面行營都統，郭崇韜為招討使以伐蜀。…己酉，王衍降。»', '925 (Tongguang 3), 11. ay, ganzhi 己酉', 'gun', tak=EV['ESH925']['ic'])
K('0926-05-15', 'Zhuangzong Guo Congqian’ın isyanında öldü; Mingzong tahta çıktı', 'hukumdar', ['sonraki-tang-5hanedan'], 'Luoyang',
  'Zhao Zaili’nin Wei’de isyanı ve Li Siyuan’ın isyana katılmasıyla Kaifeng’e giden Zhuangzong, muhafız Guo Congqian’ın darbesinde öldü (cesedi oyuncularca yakıldı); Li Siyuan Luoyang’a girip imparator oldu (Mingzong).',
  'Xin Wudai shi, juan 5 (okundu): «夏四月丁亥朔，皇帝崩。〈年四十三。帝尸為伶人焚之，明宗入洛，得其骨燼。〉»', '926 (Tongguang 4), 4. ay 朔 (ganzhi 丁亥)', 'gun', tak=TAKS('Tongguang 4 4. ay 丁亥朔 = 926-05-15 (Gregoryen 926-05-20).'))
K('0936-05-23', 'Taiyuan valisi Shi Jingtang Sonraki Tang’a isyan etti', 'isyan', ['sonraki-tang-5hanedan', 'sonraki-jin-5hanedan'], 'Taiyuan',
  'Hedong (Taiyuan) valisi Shi Jingtang Tang imparatorunun kendisini başka yere atama emrine karşı isyan etti; Tang komutanı Zhang Jingda Taiyuan’ı dört yönden kuşattı; Shi Jingtang Kitan’dan yardım istedi (Kitan 9. ayda Yanmen’den girdi).',
  'Xin Wudai shi, juan 7 (okundu): «河東節度使石敬瑭反。夏五月乙卯，建雄軍節度使張敬達為太原四面都招討使，義武軍節度使楊光遠為副。»; juan 8: «九月，契丹耶律德光入自鴈門，與唐兵戰，敬達大敗。»',
  '936 (Qingtai 3), 5. ay (ay ilk günü)', 'ay', tak=TAKS('Qingtai 3 5. ay ilk günü = 936-05-23 (Gregoryen 936-05-28).'), onem=3)
K('0937-01-11', 'Son Tang imparatoru kendini yaktı; Sonraki Tang sona erdi', 'son', ['sonraki-tang-5hanedan', 'sonraki-jin-5hanedan'], 'Luoyang', EV['E937']['d'], EV['E937']['kaynak'], EV['E937']['gun'], 'gun', tak=EV['E937']['ic'], ic='Künye t=0937-01-11 ile uyumlu (devletler.js t=0936-01-01 yanlış).', onem=4, dunya=2)

# ---------------- LIAO (ek) ----------------
K('0918-04-03', 'Abaoji Huangdu’yu (Linhuang, Üst Başkent) inşa ettirdi', 'baskent', ['liao-hanedani'], 'Linhuang (Shangjing)',
  'Liao’nun kurucusu Abaoji Shence 3’te Huangdu şehrini kurdurdu, Libu Bakanı Kang Moji’yi "ahşap kalıp (banzhu) yapım görevlisi" atadı. Huangdu sonradan Shangjing (Linhuang) adıyla Liao’nun başkenti oldu.',
  'Tuotuo vd., Liao shi, juan 1 «Taizu shang» (' + ZH + '遼史/卷1; açıldı, okundu): «二月，達旦國來聘。癸亥，城皇都，以禮部尚書康默記充版築使。»', '918 (Shence 3), 2. ay, ganzhi 癸亥', 'gun',
  tak=TAKS('Shence 3 2. ay 癸亥 = 918-04-03 (Gregoryen 918-04-08).'), ic='Yıl: kaynak parçası "Shence 3" bölümüne ait (başlıkta); Linhuang yerleşimi bu kümede yazılamadı (Jin–Moğol dönemi zinciri gerekir).')
K('0936-11-28', 'Shi Jingtang Kitan’a On Altı Vilayet’i bıraktı (Yanyun)', 'antlasma', ['liao-hanedani', 'sonraki-jin-5hanedan'], 'Pekin (Hanbalık)', EV['E936LI']['d'], EV['E936LI']['kaynak'], EV['E936LI']['gun'], 'gun', tak=EV['E936LI']['ic'], onem=4, dunya=2)
K('0938-11-25', 'Jin On Altı Vilayet’in harita-belgelerini sundu; Youzhou "Nanjing" oldu', 'antlasma', ['liao-hanedani', 'sonraki-jin-5hanedan'], 'Pekin (Hanbalık)',
  'Taizong’a "Huitong" dönem adı ve unvanlar sunulduktan sonra Jin elçisi Zhao Ying On Altı Vilayet’in harita-belgelerini teslim etti. Taizong Huangdu’yu "Shangjing" (Linhuang Fu), Youzhou’yu "Nanjing", eski Nanjing’i (Liaoyang) "Dongjing" yaptı; Xinzhou Fengshengzhou, Wuzhou Guihuazhou oldu.',
  'Liao shi, juan 4 «Taizong shang» (' + ZH + '遼史/卷4; açıldı, okundu): «十一月甲辰朔，…丙寅，皇帝御宣政殿，…大赦，改元會同。是月，晉復遣趙瑩奉表來賀，以幽、薊、瀛、莫、涿、檀、順、媯、儒、新、武、雲、應、朔、寰、蔚十六州並圖籍來獻。於是詔以皇都為上京，府曰臨潢。升幽州為南京，南京為東京。»',
  '938 (Huitong 1), 11. ay (ay ilk günü; 甲辰朔)', 'ay', tak=TAKS('Huitong 1 11. ay 甲辰朔 = 938-11-25 (Gregoryen 938-11-30); 丙寅 (改元) = 938-12-17.'), ic='Devir bildirisi 936-11-28 (Xin Wudai 8); resmî teslim/şehir adlandırma bu tarihte (Liao shi 4). Zincirde 936-11-28 esas alındı.', onem=3)
K('1116-01-01', 'Gao Yongchang Liao’nun Doğu Başkenti Liaoyang’da ayaklandı', 'isyan', ['liao-hanedani', 'jin-hanedani'], 'Liaoyang',
  'Liao’nun Dongjing (Liaoyang) garnizonunda Gao Yongchang ayaklanıp kenti ele geçirdi ve Jin’den yardım istedi; Jin Wolu’yu komutan atayıp bastırdı.',
  'Tuotuo vd., Jin shi, juan 2 (okundu): «閏月，高永昌據東京，使撻不野來求援。高麗遣使來賀捷，且求保州。詔許自取之。…四月乙丑，以斡魯統內外諸軍，…會咸州路都統斡魯古討高永昌。»', 'Shouguo 2 (1116), artık ay', 'yil', ic='Ay/gün yok (artık ay: Jin takvimi); YYYY-01-01 kuralı. Sonuç 5. ay (bkz. sınır maddesi 1116-06-12).')

# ---------------- DONGDAN ----------------
K('0926-04-04', 'Liao Balhae’yi Dongdan adıyla vasal krallığa çevirdi', 'kurulus', ['dongdan', 'balhae', 'liao-hanedani'], 'Sanggyeong (Longquanfu)', EV['EDD926']['d'], EV['EDD926']['kaynak'], EV['EDD926']['gun'], 'gun', tak=EV['EDD926']['ic'], onem=3)
K('0928-01-01', 'Dongdan halkı Dongping’e (Liaoyang) taşındı; Hulhan (Tianfu) terk edildi', 'siyaset', ['dongdan', 'liao-hanedani'], 'Sanggyeong (Longquanfu)',
  'Liao imparatoru Taizong, Dongdan halkını Dongping’e (Liaoyang) taşıtmak üzere Yelü Yuzhi’yi görevlendirdi; bazıları Silla ve Jurchen’e kaçtı, taşınamayan yoksullar Liao’nun zengin ailelerine bağlandı. Dongping Komutanlığı "Nanjing" (Liao’nun Güney Başkenti) yapıldı. Hulhan/Tianfu terk edildi, Yelü Bei 930’da Sonraki Tang’a kaçtı.',
  'Liao shi, juan 3 «Taizong shang» (okundu): «時人皇王在皇都，詔遣耶律羽之遷東丹民以實東平。其民或亡入新羅、女直，因詔困乏不能遷者，許上國富民給贍而隸屬之。升東平郡為南京。»', 'Tianxian 3 (928)', 'yil',
  ic='Metin Tianxian 3 bölümünde (ay yok); DEVLET_LISTESI dongdan künyesi t=0929-01-01 (928 sonu). 928-01-01 (yil) yazıldı ama yerleşim zincirinde bitiş 929-01-01 (kesişim beyanı).')

# ---------------- DA CHANGHE ----------------
K('0902-01-01', 'Zheng Maisi Meng hanedanını devirdi: Büyük Changhe (Da Changhe) kuruldu', 'kurulus', ['da-changhe', 'nanzhao'], 'Dali', EV['EDC902']['d'], EV['EDC902']['kaynak'], '902', 'yil', ic=EV['EDC902']['ic'], onem=4)
K('0909-01-01', 'Zheng Renmin tahta çıktı ("Taishang Di", Shiyuan dönemi)', 'hukumdar', ['da-changhe'], 'Dali',
  'Kurucu Zheng Maisi’nin ölümünden sonra Zheng Renmin (Taishang Di) hüküm sürdü (909–926); "Shiyuan" ve sonraki dönem adları kullanıldı.',
  'Theobald, chinaknowledge.de «Nanzhao» (okundu), tablo: «Zheng Maisi 鄭買嗣 (Emperor Huan 桓帝) (r. 903-909) Anguo 安國 (903-909) Zheng Renmin 鄭仁旻 (Emperor Taishang 太上帝) (r. 909-926) Shiyuan 始元 (910-912?)»', 'r. 909–926', 'yil', ic='Yıl 909 tablo (reign başı); kaynak ansiklopedik, birincil kaynak bulunamadı.')
K('0926-01-01', 'Zheng Longtan (Gonghui Di) tahta çıktı; Tianying dönemi (927)', 'hukumdar', ['da-changhe'], 'Dali',
  'Zheng Renmin’in ardından oğlu Zheng Longtan (Gonghui Di) 926’da tahta çıktı ve 927’de "Tianying" dönem adını kullandı; hanedan 927’de yıkıldı.',
  'Theobald, chinaknowledge.de «Nanzhao» (okundu), tablo: «Zheng Longtan 鄭隆亶 (Emperor Gonghui 恭惠帝) (r. 926-927) Tianying 天應 (927)»', 'r. 926–927', 'yil', ic='Yıl 926 tablo (reign başı); birincil kaynak bulunamadı.')
K('0928-01-01', 'Zheng ailesi yıkıldı: Zhao Shanzheng Da Tianxing’i kurdu', 'bolunme', ['da-changhe', 'nanzhao'], 'Dali', EV['EDC928']['d'], EV['EDC928']['kaynak'], '927/928', 'yil', ic=EV['EDC928']['ic'])
