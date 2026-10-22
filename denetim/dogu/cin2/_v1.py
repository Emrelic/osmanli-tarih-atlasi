# -*- coding: utf-8 -*-
# cin2 — olay (devir) tanimlari ve sinir maddesi uretimi. Gun hesabi: _cal.py (astronomik ay-gunes, Julyen, +-1 gun)

TAK = 'Çin ay-güneş takvimi → Jülyen (1582 öncesi Jülyen kalır): '

# ---- kaynak parcalari (yalniz bu oturumda ACILIP okunan sayfalar; alinti birebir) ----
ZH = 'zh.wikisource.org/wiki/'
Q_WD2 = ('Ouyang Xiu vd., Xin Wudai shi, juan 2 «Liang benji er» (' + ZH + '新五代史/卷02; açıldı, okundu): «夏四月壬戌，更名晃。甲子，皇帝即位。…改元，國號梁。封唐主為濟陰王。升汴州為開封府，建為東都，以唐東都為西都。»')
Q_WD3 = ('Xin Wudai shi, juan 3 «Liang benji san» (' + ZH + '新五代史/卷03; okundu): «戊寅，皇帝崩。梁亡。»; juan 5 «Tang benji» (' + ZH + '新五代史/卷05; okundu): «冬十月壬申，如鄆州以襲梁。甲戌，取中都。丁丑，取曹州。己卯，滅梁。»')
Q_WD5T = ('Xin Wudai shi, juan 5 «Tang benji» (' + ZH + '新五代史/卷05; okundu): «同光元年…夏四月己巳，皇帝即位，大赦，改元，國號唐。…以魏州為東京，太原為西京，鎮州為北都。»')
Q_WD8 = ('Xin Wudai shi, juan 8 «Jin benji» (' + ZH + '新五代史/卷08; okundu): «十一月丁酉，皇帝即位，…國號晉。以幽、涿、薊、檀、順、瀛、莫、蔚、朔、雲、應、新、媯、儒、武、寰州入于契丹。»')
Q_WD7 = ('Xin Wudai shi, juan 7 «Tang Fei Di benji» (' + ZH + '新五代史/卷07; okundu): «甲戌，契丹及晉人至于潞州。丁丑，至自河陽。辛巳，皇帝崩。〈年五十一，帝自焚死，晉高祖命葬其燼骨於徽陵域中。〉»')

# ---- olay sozlugu: anahtar -> (t, gun, kesinlik, b, d, kaynak, ic_not) ----
EV = {}

def ev(k, t, gun, kes, b, d, kaynak, ic=None):
    EV[k] = dict(t=t, gun=gun, kes=kes, b=b, d=d, kaynak=kaynak, ic=ic)

ev('E907', '0907-06-01', '907, 4. ay, ganzhi 甲子 (Jülyen 907-06-01)', 'gun',
   'Zhu Wen imparatorluğunu ilan etti; Tang sona erdi, Sonraki Liang kuruldu',
   'Zhu Wen (Liang Taizu) Kaifeng (Bianzhou) merkezli yönetimiyle imparator ilan edildi; Tang hükümdarı Jiyin Prensi’ne indirildi. Bianzhou Kaifeng Prefektörlüğü ve Doğu Başkent, Tang’ın Doğu Başkenti Luoyang ise Batı Başkent yapıldı.',
   Q_WD2, TAK + '4. ay 甲子 = 907-06-01 (Gregoryen 907-06-06); 4. ayın öteki gün adları (壬戌, 戊辰) ile aynı ayda tutarlı.')
ev('E923a', '0923-05-13', '923 (Tongguang 1), 4. ay, ganzhi 己巳 (Jülyen 923-05-13)', 'gun',
   'Li Cunxu imparator ilan edip Sonraki Tang’ı kurdu',
   'Jin Kralı Li Cunxu Weizhou’da imparator ilan etti, devlet adını Tang koydu; Weizhou Doğu Başkent, Taiyuan Batı Başkent (sonra Kuzey Başkent), Zhenzhou Kuzey Başkent oldu.',
   Q_WD5T, TAK + '4. ay 己巳 = 923-05-13 (Gregoryen 923-05-18).')
ev('E923b', '0923-11-19', '923 (Longde 3 / Tongguang 1), 10. ay, ganzhi 己卯 (Jülyen 923-11-19)', 'gun',
   'Sonraki Tang, Sonraki Liang’ı yıktı; Kaifeng ve Liang toprakları Tang’a geçti',
   'Li Cunxu’nun Yunzhou’ya baskını, Zhongdu ve Caozhou’nun alınması ve Kaifeng’in düşmesiyle Sonraki Liang yıkıldı; son imparator Zhu Zhen bir gün önce (戊寅, 923-11-18) ölmüştü. Liang’ın Kaifeng, Luoyang ve Henan’daki toprakları Sonraki Tang’a geçti.',
   Q_WD3, TAK + '10. ay 己卯 = 923-11-19, 戊寅 = 923-11-18 (Gregoryen 923-11-24). Luoyang’a imparator girişi (11. ay 甲子) 924-01-03; Luoyang devri düşüşün ilk günü sayıldı (BEYANLI YAKLAŞIKLIK).')
ev('E936', '0936-11-28', '936, 11. ay, ganzhi 丁酉 (Jülyen 936-11-28)', 'gun',
   'Shi Jingtang Taiyuan’da Sonraki Jin’i kurdu; On Altı Vilayet Kitanlara bırakıldı',
   'Taiyuan (Hedong) valisi Shi Jingtang, Kitan desteğiyle imparator ilan edip devlet adını Jin koydu; kuruluş bildirisinde Youzhou (Pekin), Yunzhou (Datong) dahil On Altı Vilayet Kitan’a bırakıldı.',
   Q_WD8, TAK + '11. ay 丁酉 = 936-11-28 (Gregoryen 936-12-03). Kitan tarafında On Altı Vilayet’in harita-belge teslimi Liao shi 4’e göre 938-11 (bkz. kronoloji).')
ev('E937', '0937-01-11', '936 (Qingtai 3), artık 11. ay, ganzhi 辛巳 (Jülyen 937-01-11)', 'gun',
   'Sonraki Tang imparatoru Li Congke kendini yaktı; Luoyang, Kaifeng ve Tang toprakları Sonraki Jin’e geçti',
   'Kitan ve Jin ordularının Luoyang’a yaklaşması üzerine son Tang imparatoru kendini yaktı; Sonraki Tang sona erdi, başkent bölgesi ve Henan Sonraki Jin’in eline geçti.',
   Q_WD7, TAK + 'Qingtai 3 artık 11. ay 辛巳 = 937-01-11 (Gregoryen 937-01-16). Astronomik tablo artık ayı bir ay kaydırır: hesap 17 Aralık 936’da başlayan ayı (artık 11. ay) esas aldı; CIN_RAPOR2 (bağımsız ganzhi çevrimi) de 937-01-11 verir.')
