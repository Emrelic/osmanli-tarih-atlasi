# -*- coding: utf-8 -*-
"""Devir tablosu: her satir bir yerlesimin sahip degisimi (s: kirilmasi) = kronoloji_sinir maddesi + yama s: donemi."""
from _veri_kaynak import *
from _gzlib import takvim

# (yer_id, t, yeni_sahip, onceki_sahip|None, b, d, kaynak, gun, kesinlik, ic_not, ganzhi)
T = []
def X(yer_id, t, yeni, eski, b, d, kaynak, gun, kes, ic_not=None, gz=None, yer=None):
    T.append(dict(yer_id=yer_id, yer=yer or yer_id, t=t, yeni=yeni, eski=eski, b=b, d=d, kaynak=kaynak, gun=gun, kes=kes, ic_not=ic_not, gz=gz))

# ---------------- Kaifeng ----------------
X('Kaifeng', '0937-01-11', 'sonraki-jin-5hanedan', 'sonraki-tang-5hanedan',
  'Sonraki Tang son imparatoru Luoyang\'da öldü; Kaifeng Sonraki Jin\'in eline geçti',
  'Sonraki Tang\'ın son imparatoru Luoyang\'da kendini yaktığı gün Shi Jingtang Tang\'ın iki başkentinin (Luoyang, Kaifeng) sahibi oldu.',
  XW7 + ' · ' + XW8_LY, 'Qingtai 3. yıl 閏11. ay 辛巳 günü', 'gun',
  'BEYANLI YAKLAŞIKLIK: Kaifeng\'in kendi teslim günü kaynakta ayrı verilmedi; Tang imparatorunun ölüm günü (hükümdarın çökmesi) devir günü sayıldı (ABİ MERKEZ: Luoyang — aynı gün).', '辛巳')
X('Kaifeng', '0947-01-10', 'liao-hanedani', 'sonraki-jin-5hanedan',
  'Kitan, Zhang Yanze aracılığıyla Kaifeng\'i aldı; Sonraki Jin yok oldu',
  'Jin\'den dönen general Zhang Yanze Kaifeng\'e girip vali Sang Weihan\'ı öldürdü ve Xin Wudai shi «Kitan Jin\'i yok etti» diye kaydeder; Liao imparatorunun şehre girişi ZZ\'ye göre 947-01-25.',
  XW9 + ' · ' + ZZ286_KF, 'Kaiyun 3. yıl 12. ay 壬申 günü', 'gun',
  'İKİ GÜN beyan: Xin Wudai 9 壬申 = 947-01-10 (devir günü olarak seçildi); Zizhi tongjian 286: 開運四年 正月丁亥朔 = 947-01-25 (Liao imparatorunun şehre girişi). Kitan Kaifeng\'i Song-dışı «Xuanwu jiedu»ya çevirdi ve Dongjing unvanını kaldırdı (ZZ 287).', '壬申')
X('Kaifeng', '0947-07-01', 'sonraki-han-5hanedan', 'liao-hanedani',
  'Liu Zhiyuan Kaifeng\'e girdi; Kitan yönetimi sona erdi',
  'Kitan\'ın atadığı vali Xiao Han Kaifeng\'den çekildi, Kitan\'ın bıraktığı kukla Li Congyi öldürüldü ve Liu Zhiyuan Kaifeng\'e girerek şehri Sonraki Han\'a bağladı.',
  ZZ287_KF + ' · ' + XW10, 'Tianfu 12. yıl 6. ay 甲子 günü', 'gun',
  'Kitan\'ın atadığı vali Xiao Han, kukla Li Congyi\'yi bırakıp çekildi (ZZ 287); Xin Wudai 10: 「六月丙辰，次河陽，殺李從益及其母于京師」. Şehrin Han\'a geçişi Han imparatorunun şehre girdiği gün (甲子) sayıldı; Xiao Han\'ın ayrılış günü ayrıca verilmedi.', '甲子')
X('Kaifeng', '0951-02-13', 'sonraki-zhou-5hanedan', 'sonraki-han-5hanedan',
  'Guo Wei Kaifeng\'de Zhou\'yu kurdu; şehir Sonraki Zhou\'ya geçti',
  'Ordunun desteğiyle Guo Wei tahta çıkıp ülke adını Zhou koydu; Kaifeng Sonraki Han\'dan Sonraki Zhou\'ya geçti.',
  XW11, 'Guangshun 1. yıl 1. ay 丁卯 günü', 'gun', None, '丁卯')
X('Kaifeng', '0960-02-04', 'song', 'sonraki-zhou-5hanedan',
  'Zhao Kuangyin Song\'u ilan etti; Kaifeng Song başkenti oldu',
  'Zhou imparatorunun tahttan çekilmesinin ertesi günü Zhao Kuangyin genel af çıkarıp ülke adını Song koydu; başkent Kaifeng Song\'un oldu.',
  SS1 + ' · ' + XW12_960, 'Jianlong 1. yıl 1. ay 乙巳 günü', 'gun', 'Zhou çocuk imparatorunun feragati 960-02-03 (甲辰).', '乙巳')
# 1127-1138 (başka kümelerin zincirine birleştirilecek ek parçalar; yama dosyasında ayrı yer alır)
X('Kaifeng', '1127-04-20', 'da-chu-zhang-bangchang', 'song',
  'Jin, Zhang Bangchang\'ı Kaifeng\'de Chu imparatoru yaptı; şehir Da Chu\'ya geçti',
  'Jin ordusunun Kaifeng\'i almasından sonra şehir, Jin\'in atadığı kukla imparator Zhang Bangchang\'ın Chu devletinin başkenti oldu.',
  SS475_BC + ' · ' + SS23, 'Jingkang 2. yıl 3. ay 丁酉 günü', 'gun', 'BEYANLI YAKLAŞIKLIK: Song\'un Kaifeng\'deki son günü 1127-01-01 (yıl) künye değeri; gerçek Song hâkimiyeti Jin ordusunun şehre girişine dek sürdü (kaynakta tek gün yok).', '丁酉')
X('Kaifeng', '1127-05-16', 'song', 'da-chu-zhang-bangchang',
  'Zhang Bangchang Chu\'yu bıraktı; Kaifeng Song İmparatoriçe Anası\'nın naipliğine geçti',
  'Zhang Bangchang Yuanyou İmparatoriçesi\'ni Song İmparatoriçe Anası ilan edip ona naiplik verdi; Kaifeng Song adına yönetildi.',
  SS24 + ' · ' + SS475_BC, 'Jingkang 2. yıl 4. ay 癸亥 günü', 'gun', 'Song\'un Kaifeng\'deki bu dönemi kısadır (Zong Ze 1128\'de öldü; Jin Kaifeng\'i yeniden aldı) — sonraki devir günleri kaynakta bu işçinin elinde YOK.', '癸亥')
X('Kaifeng', '1130-10-12', 'da-qi-liu-yu', None,
  'Liu Yu Qi imparatoru oldu; Kaifeng valiliği Qi\'ye verildi',
  'Liu Yu tahta oturduğu gün Wang Qiong\'u Kaifeng valisi yaptı; Kaifeng Qi\'nin kontrolüne girdi (başkent 1132\'de Kaifeng oldu).',
  SS475_LY, 'Jianyan 4. yıl 9. ay 戊申 günü', 'gun',
  'BEYANLI YAKLAŞIKLIK: Kaifeng\'in 1127-1130 arası sahibi (Jin/Song) ve Qi\'ye geçiş günü kaynakta ayrı değil; Liu Yu tahta oturduğu gün alındı.', '戊申')
X('Kaifeng', '1138-01-02', 'jin-hanedani', 'da-qi-liu-yu',
  'Jin Qi\'yi kaldırdı; Kaifeng Jin\'e bağlandı',
  'Jin generalleri Kaifeng\'e girip Liu Yu\'yu tutukladı ve şehre Jin\'in yüksek yönetim bürosu (行臺尚書省) kuruldu.',
  SS28 + ' · ' + JS77, 'Shaoxing 7. yıl 11. ay 丁未 günü', 'gun', 'Song shi 475 丙午 = 1138-01-01 (bir gün fark).', '丁未')

# ---------------- Luoyang ----------------
X('Luoyang', '0937-01-11', 'sonraki-jin-5hanedan', 'sonraki-tang-5hanedan',
  'Sonraki Tang son imparatoru Luoyang\'da kendini yaktı; Luoyang Sonraki Jin\'in eline geçti',
  'Luoyang Tang\'ın batı başkentiydi; imparatorun ölümüyle şehir Sonraki Jin\'e geçti.',
  XW7 + ' · ' + XW8_LY, 'Qingtai 3. yıl 閏11. ay 辛巳 günü', 'gun', None, '辛巳')
X('Luoyang', '0947-01-10', 'liao-hanedani', 'sonraki-jin-5hanedan',
  'Jin\'in yıkılışıyla Luoyang Kitan\'ın eline geçti',
  'Jin\'in yıkılması üzerine Kitan, eski başmühürdar Liu Xi\'yi Luoyang valisi atadı ve şehre Kitan, Xi ve Balhae birlikleri yerleşti.',
  ZZ286_LY + ' · ' + XW9, 'Kaiyun 3. yıl 12. ay 壬申 günü (Kaifeng ile aynı gün)', 'gun',
  'BEYANLI YAKLAŞIKLIK + ABİ MERKEZ: Kaifeng — ZZ 286 Luoyang\'a Kitan garnizonunun geliş gününü vermez; Kaifeng\'in düştüğü gün alındı.', '壬申')
X('Luoyang', '0947-06-23', 'sonraki-han-5hanedan', 'liao-hanedani',
  'Liu Zhiyuan Luoyang\'a girdi; Luoyang Sonraki Han\'a geçti',
  'Liu Zhiyuan Xin\'an\'dan geçip Luoyang\'a gelerek saraya yerleşti; Kitan\'ın atadığı vali Liu Xi şehri daha önce terk etmişti.',
  ZZ287_LY, 'Tianfu 12. yıl 6. ay 丙辰 günü', 'gun', 'ZZ 287: 「是日，劉晞棄洛陽，奔大梁」 (6. ay, Liu Xi\'nin ayrılış günü ayrıca belirtilmedi).', '丙辰')
X('Luoyang', '0951-02-13', 'sonraki-zhou-5hanedan', 'sonraki-han-5hanedan',
  'Guo Wei Zhou\'yu kurdu; Luoyang Sonraki Zhou\'ya geçti',
  'Sonraki Zhou\'nun kuruluşuyla Luoyang de Zhou\'ya bağlandı.',
  XW11, 'Guangshun 1. yıl 1. ay 丁卯 günü', 'gun', 'BEYANLI YAKLAŞIKLIK (ABİ MERKEZ: Kaifeng): Luoyang\'ın kendi teslim günü kaynakta ayrı değil.', '丁卯')
X('Luoyang', '0960-02-04', 'song', 'sonraki-zhou-5hanedan',
  'Song kuruldu; Luoyang Song\'a geçti',
  'Zhao Kuangyin Song\'u ilan ettiğinde Luoyang (Batı Başkent) Zhou\'dan Song\'a geçti.',
  SS1, 'Jianlong 1. yıl 1. ay 乙巳 günü', 'gun', 'BEYANLI YAKLAŞIKLIK (ABİ MERKEZ: Kaifeng).', '乙巳')

# ---------------- Chengdu ----------------
X('Çengdu (Chengdu)', '0934-03-16', 'sonraki-shu', 'sonraki-tang-5hanedan',
  'Meng Zhixiang Chengdu\'da imparator oldu; şehir Sonraki Shu\'ya geçti',
  'Sonraki Tang\'ın Sichuan valisi Meng Zhixiang Chengdu\'da imparatorluk ilan edip Shu\'yu kurdu; şehir fiilen 926\'dan beri onun yönetimindeydi.',
  ZZ278 + ' · ' + XW64, 'Yingshun 1. yıl 閏1. ay 己巳 günü', 'gun',
  'BEYANLI YAKLAŞIKLIK: Meng Zhixiang Chengdu\'a 926-02 (同光四年正月戊辰) vali olarak girdi (Xin Wudai 64) ve 933\'te «Shu Kralı» olarak atandı (四年二月癸亥); imparatorluk ilanı resmi bağımsızlık günü sayıldı.', '己巳')
X('Çengdu (Chengdu)', '0965-02-17', 'song', 'sonraki-shu',
  'Meng Chang teslim oldu; Chengdu Song\'a geçti',
  'Song ordusu 66 günlük seferin sonunda Chengdu\'yu aldı; Meng Chang teslim yazısını gönderdi ve Sichuan Song\'a bağlandı.',
  SS2, 'Qiande 3. yıl 1. ay 乙酉 günü', 'gun', None, '乙酉')

# ---------------- Taiyuan ----------------
X('Taiyuan', '0936-11-28', 'sonraki-jin-5hanedan', 'sonraki-tang-5hanedan',
  'Shi Jingtang Taiyuan\'da imparator oldu; şehir Sonraki Jin\'in başkent bölgesi oldu',
  'Hedong valisi Shi Jingtang Kitan desteğiyle Taiyuan\'da imparatorluğunu ilan etti; kendi üssü olan şehir Sonraki Jin\'e geçti.',
  XW8_16 + ' · ' + XW7, 'Tianfu 1. yıl 11. ay 丁酉 günü', 'gun',
  'BEYANLI YAKLAŞIKLIK: Taiyuan Shi Jingtang\'ın valilik merkeziydi; Tang\'dan kopuş günü olarak imparator ilan günü alındı.', '丁酉')
X('Taiyuan', '0947-03-10', 'sonraki-han-5hanedan', 'sonraki-jin-5hanedan',
  'Liu Zhiyuan Taiyuan\'da imparator oldu; şehir Sonraki Han\'a geçti',
  'Hedong valisi Liu Zhiyuan Kitan\'ın Kaifeng\'i almasından sonra Taiyuan\'da imparatorluğunu ilan etti.',
  XW10, 'Tianfu 12. yıl 2. ay 辛未 günü', 'gun', 'Taiyuan Liu Zhiyuan\'ın valilik merkeziydi (Jin\'e bağlı vali).', '辛未')
X('Taiyuan', '0951-02-24', 'kuzey-han-10krallik', 'sonraki-han-5hanedan',
  'Liu Chong Taiyuan\'da Kuzey Han\'ı ilan etti',
  'Sonraki Han\'ın Guo Wei tarafından yıkılması üzerine Han hanedanından Liu Chong Taiyuan\'da bağımsızlığını ilan etti.',
  XW11, 'Guangshun 1. yıl 1. ay 戊寅 günü', 'gun', 'Künye f=0951-02-24 ile örtüşür.', '戊寅')
X('Taiyuan', '0979-06-03', 'song', 'kuzey-han-10krallik',
  'Liu Jiyuan teslim oldu; Taiyuan Song\'a geçti',
  'Song Taizong\'un Taiyuan kuşatması sonunda Kuzey Han teslim oldu.',
  SS4_BH, 'Taiping Xingguo 4. yıl 5. ay 甲申 günü', 'gun', 'Eski şehir 979-06-15\'te yakıldı; atlas noktası bugünkü Taiyuan (Yangqu yakını).', '甲申')
X('Taiyuan', '1126-09-21', 'jin-hanedani', 'song',
  'Jin ordusu Taiyuan\'ı aldı',
  'Jin ordusu aylarca süren kuşatma sonunda Taiyuan\'ı aldı; Song\'un Taiyuan valisi Zhang Xiaochun tutsak edildi, başkomutan yardımcısı Wang Bing öldü.',
  SS23_TY, 'Jingkang 1. yıl 9. ay 丙寅 günü', 'gun', 'Zhang Xiaochun sonradan Qi\'nin başvezirliğine geçti (Song shi 475).', '丙寅')

# ---------------- Nanjing ----------------
X('Nanking (Nanjing)', '0937-11-10', 'guney-tang', 'yang-wu',
  'Xu Gao Jinling\'de imparator oldu; Yang Wu\'dan Güney Tang\'a geçildi',
  'Wu hükümdarının tahtı bırakmasının ardından Xu Gao (Li Bian) Jinling\'de imparator ilan edilip ülke adını Tang koydu; Jinling Güney Tang başkenti oldu.',
  'Sima Guang, Zizhi tongjian, juan 281 (%s資治通鑒_(胡三省音注)/卷281, okundu): 「丙寅，吳主命江夏王璘奉璽綬于齊。……冬，十月，甲申，齊王誥卽皇帝位于金陵，大赦，改元昇元，國號唐。」' % WS,
  'Tianfu 2. yıl 10. ay 甲申 günü', 'gun',
  'Mevcut künye iskeleti 0937-11-11 (kurulus) verir; ganzhi 甲申 = 937-11-10 (正月甲寅朔 = 937-02-13 hizası). Bir gün fark; atlas künyesi düzeltmesi önerilir.', '甲申')
X('Nanking (Nanjing)', '0976-01-01', 'song', 'guney-tang',
  'Cao Bin Jinling\'i aldı; Güney Tang Song\'a geçti',
  'Song generali Cao Bin Shengzhou\'yu (Jinling/Nanjing) aldı ve Güney Tang hükümdarı Li Yu\'yu esir etti.',
  SS3, 'Kaibao 8. yıl 11. ay 乙未 günü', 'gun', 'Künye t=975-01-01 bir yıl erken (bkz. kronoloji maddesi).', '乙未')

# ---------------- Hangzhou ----------------
X('Hangzhou', '0978-06-09', 'song', 'wuyue',
  'Qian Chu Zhejiang\'ı Song\'a bıraktı; Hangzhou Song\'a geçti',
  'Wuyue kralı Qian Chu 13 vilayeti Song\'a sundu; Wuyue başkenti Hangzhou Song\'a geçti.',
  SS4_WY, 'Taiping Xingguo 3. yıl 5. ay 乙酉 günü', 'gun', 'wuyue künyesinin t değeri (978?) bu kümenin dışındadır.', '乙酉')

# ---------------- Dali ----------------
X('Dali', '0928-01-01', 'da-tianxing', None,
  'Zhao Shanzheng Da Tianxing\'i kurdu; Dali Da Tianxing başkenti oldu',
  'Dali (Yangjümie) Dachanghe\'den Zhao Shanzheng\'in Da Tianxing devletine geçti.',
  DIAN1 + ' · ' + DIAN2, 'Tiancheng 3. yıl (928); gün yok', 'yil',
  'Önceki sahip (da-changhe, 902-928) bu kümenin dışında; Dali\'nin 902-928 dilimi başka kümede.', None)
X('Dali', '0929-01-01', 'da-yining', 'da-tianxing',
  'Yang Ganzhen Da Yining\'i kurdu; Dali Da Yining\'e geçti',
  'Yang Ganzhen Zhao Shanzheng\'i devirdi, Dali Da Yining başkenti oldu.',
  DIAN1 + ' · ' + DIAN3, 'Tiancheng 4. yıl (929); gün yok', 'yil', None, None)
X('Dali', '0937-01-01', 'dali-kralligi', 'da-yining',
  'Duan Siping Dali Krallığı\'nı kurdu; Dali yeni krallığın başkenti oldu',
  'Duan Siping Yang Ganzhen\'i yenip Dali\'de krallığını ilan etti.',
  DIAN2 + ' · ' + DIAN4, 'Tianfu 2. yıl (937); gün yok', 'yil', 'Üç ayrı kaynak yılı 937 verir (滇略, 讀史方輿紀要); süre çelişkisi künyede.', None)
X('Dali', '1254-01-02', 'mogol-imparatorlugu', 'dali-kralligi',
  'Moğollar Dali\'yi aldı; Dali Moğol İmparatorluğu\'na geçti',
  'Kubilay\'ın orduları Dali şehrine girip Duan hanedanını Moğol hâkimiyetine soktu; Uriyangkadai şehirde bırakıldı.',
  YS4 + ' · ' + SS43, '12. ay 丙辰 günü (癸丑 yılı)', 'gun',
  'Duan hanedanı yerel yönetici olarak görevde kaldı (Yuan shi 4: 「與段氏同安輯大理」); sahiplik Moğol İmparatorluğu\'na yazıldı. Dali Krallığı künyesi t=1253-01-01 → 1254-01-02 düzeltmesi önerilir. Zincir 1281-01-01\'e kadar mogol-imparatorlugu olarak yazıldı (Yuan 1271\'de ilan edildi; devir günü ±30 gün maddesi olmadığı için ayrı dilim açılmadı).', '丙辰')

# ---------------- Xining (Qingtang) ----------------
X('Xining', '1104-05-08', 'song', 'tsongkha',
  'Song Qingtang\'ı (Shanzhou) yeniden aldı; Xining Song\'a geçti',
  'Wang Hou Qingtang\'ı Tsongkha\'dan alıp Longyou Genel Valiliği yaptı; Qingtang sonradan Xining adını aldı.',
  SS19 + ' · ' + SS492, 'Chongning 3. yıl 4. ay 乙卯 günü', 'gun',
  '1099-10-06\'daki kısa Song işgali (Longza\'nın teslimi; Wang Zhan\'ın ayrılışı) sahiplik değişimi olarak yazılmadı: Song, Longza\'yı vali olarak bıraktı (kalıcı değişim yok).', '乙卯')

# ---------------- Yinchuan ----------------
X('Yinchuan (Ningxia)', '1227-01-01', 'mogol-imparatorlugu', 'bati-xia',
  'Moğollar Zhongxing\'i (Xingqing) aldı; Batı Xia sona erdi',
  'Cengiz Han\'ın son seferinde Batı Xia hükümdarı Li Xian altıncı ayda teslim oldu; başkent Zhongxing/Xingqing Moğol İmparatorluğu\'na geçti.',
  YS1, 'Bingxu/Dinghai yılı (1227) 6. ay; gün yok', 'yil',
  'Çin ay-güneş 6. ayının Jülyen karşılığı kaynakta yok → YYYY-01-01 + yıl (BEYANLI). Zincir 1281-01-01\'e kadar mogol-imparatorlugu (Yuan 1271 devri için ayrı dilim açılmadı).', None)
