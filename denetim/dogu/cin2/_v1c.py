# -*- coding: utf-8 -*-
from _v1b import *

ev('EAL1', '0756-01-18', '755 (Tianbao 14), 12. ay, ganzhi 丁酉 (Jülyen 756-01-18)', 'gun',
   'An Lushan Luoyang’ı (Doğu Başkent) aldı',
   'Fanyang’da ayaklanan An Lushan’ın ordusu Tang’ın Doğu Başkenti Luoyang’a girdi, Tang’ın yerel yetkililerini öldürdü; An Lushan bölgeyi eline geçirip yeni rejimini (Yan) kurmak üzere Luoyang’ı kendine merkez yaptı.',
   'Liu Xu vd., Jiu Tang shu, juan 9 «Xuanzong ji xia» (' + ZH + '舊唐書/卷9; açıldı, okundu): «丁酉，祿山陷東京，殺留守李憕、中丞盧奕、判官蔣清。»',
   'ÇELİŞKİ: aynı eserin juan 10’u «十二月丁未，陷東京» der (丁酉 = 756-01-18, 丁未 = 756-01-28); juan 9 seçildi. ' + TAK + '755 12. ay (Jülyen 756 Ocak). Yan’ın resmî ilanı (756 1. ay) bu günden sonradır: künye f=0756-01-01 Luoyang’ın düşüşünden önce başlar — Luoyang dilimi An Lushan’ın askerî egemenliğini (devlet adı sonradan) "an-lushan-yan" olarak yazar (BEYANLI).')
ev('EAL2', '0757-01-01', '757 (Zhide 2) — ay/gün yok (Jiu Tang shu 10: 壬戌, ay bu çalışmada tabloya oturmadı)', 'yil',
   'Tang ordusu (Guangping Prensi) Luoyang’ı geri aldı',
   'Guangping Prensi Li Chu komutasındaki Tang–Uygur ordusu Shaanxian’da (Shaanzhou) isyancıları yenip Luoyang’a girdi; An Qingxu Hebei’ye kaçtı. Luoyang geçici olarak Tang’a döndü.',
   'Jiu Tang shu, juan 10 «Suzong ji» (' + ZH + '舊唐書/卷10; okundu): «庚申，安慶緒與其黨奔河北。壬戌，廣平王入東京，…»',
   'Yıl 757 (Zhide 2); ay/gün: 壬戌 günü Jülyen 757-10-04 ya da 757-12-03’e düşer (hesap ay numaralandırması Tang takvimiyle ±1 ay uyuşmadı); YYYY-01-01 kuralı (yil hassasiyeti).')
ev('EAL3', '0759-09-26', '759 (Qianyuan 2), 9. ay (ay ilk günü; Jülyen 759-09-26)', 'ay',
   'Shi Siming Luoyang’ı aldı',
   'Shi Siming 759’da büyük Yan hükümdarlığını (Büyük Yan; Fanyang = Yanjing) ilan edip Bian ve Luoyang’a saldırdı; Luoyang’ı alarak Tang’ın Li Guangbi ordusuyla karşı karşıya geldi.',
   'Jiu Tang shu, juan 200 shang «Shi Siming» (' + ZH + '舊唐書/卷200上; okundu): «四月，僭稱大號，以周贄為相，以范陽為燕京。九月，寇汴州，節度使許叔冀合于思明，思明益振。又陷洛陽，與太尉光弼相拒。»',
   'Qianyuan 2 (759) 9. ay: ay ilk günü (' + TAK + '759-09-26); gün yok.')
ev('EAL4', '0762-11-20', '762 (Baoying 1), 10. ay, ganzhi 乙亥 (Jülyen 762-11-20)', 'gun',
   'Tang–Uygur ordusu Luoyang’ı geri aldı; Shi Chaoyi Jizhou’ya kaçtı',
   'Yong Prensi Li Kuo komutasındaki Tang ordusu Luoyang’ın kuzeyinde Hengshui’de (Heng-su) isyancıları ağır yenilgiye uğrattı; Shi Chaoyi Jizhou’ya kaçtı, Luoyang, Hebei (Heyang), Bian, Zheng, Hua, Xiang, Wei vb. Tang’a döndü.',
   'Jiu Tang shu, juan 11 «Daizong ji» (' + ZH + '舊唐書/卷11; açıldı, okundu): «壬申，王師次洛陽北郊。甲戌，戰於橫水，賊大敗，俘斬六萬計。史朝義奔冀州。乙亥，雍王奏收東京、河陽、汴、鄭、滑、相、魏等州。»',
   TAK + 'Baoying 1 10. ay (Julyen 762 Kasım; 7. ay 己卯朔 çapası): 乙亥 = 762-11-20 (Gregoryen 762-11-24); Luoyang’a girişi bildiren rapor günü olabilir (BEYANLI).')

# ---- devir (gecis) tablosu: (yer_id, olay, kazanan, kaybeden, tur) ----
TR = [
 ('Kaifeng', 'E907', 'sonraki-liang-5hanedan', 'tang', 'toprak-kazanc'),
 ('Kaifeng', 'E923b', 'sonraki-tang-5hanedan', 'sonraki-liang-5hanedan', 'toprak-kazanc'),
 ('Kaifeng', 'E937', 'sonraki-jin-5hanedan', 'sonraki-tang-5hanedan', 'toprak-kayip'),
 ('Luoyang', 'EAL1', 'an-lushan-yan', 'tang', 'toprak-kazanc'),
 ('Luoyang', 'EAL2', 'tang', 'an-lushan-yan', 'toprak-kayip'),
 ('Luoyang', 'EAL3', 'an-lushan-yan', 'tang', 'toprak-kazanc'),
 ('Luoyang', 'EAL4', 'tang', 'an-lushan-yan', 'toprak-kayip'),
 ('Luoyang', 'E907', 'sonraki-liang-5hanedan', 'tang', 'toprak-kazanc'),
 ('Luoyang', 'E923b', 'sonraki-tang-5hanedan', 'sonraki-liang-5hanedan', 'toprak-kazanc'),
 ('Luoyang', 'E937', 'sonraki-jin-5hanedan', 'sonraki-tang-5hanedan', 'toprak-kayip'),
 ('Taiyuan', 'ETJ895', 'tang-jin-shatuo-prensligi', 'tang', 'toprak-kazanc'),
 ('Taiyuan', 'E923a', 'sonraki-tang-5hanedan', 'tang-jin-shatuo-prensligi', 'toprak-kazanc'),
 ('Taiyuan', 'E936', 'sonraki-jin-5hanedan', 'sonraki-tang-5hanedan', 'toprak-kayip'),
 ('Zhengding', 'EZ907', 'zhao-wang-rong', 'tang', 'toprak-kazanc'),
 ('Zhengding', 'EZ921', 'tang-jin-shatuo-prensligi', 'zhao-wang-rong', 'toprak-kazanc'),
 ('Zhengding', 'E923a', 'sonraki-tang-5hanedan', 'tang-jin-shatuo-prensligi', 'toprak-kazanc'),
 ('Zhengding', 'E937', 'sonraki-jin-5hanedan', 'sonraki-tang-5hanedan', 'toprak-kayip'),
 ('Pekin (Hanbalık)', 'EY907', 'sonraki-liang-5hanedan', 'tang', 'toprak-kazanc'),
 ('Pekin (Hanbalık)', 'EY911', 'yan-liu-shouguang', 'sonraki-liang-5hanedan', 'toprak-kazanc'),
 ('Pekin (Hanbalık)', 'EY913', 'tang-jin-shatuo-prensligi', 'yan-liu-shouguang', 'toprak-kazanc'),
 ('Pekin (Hanbalık)', 'E923a', 'sonraki-tang-5hanedan', 'tang-jin-shatuo-prensligi', 'toprak-kazanc'),
 ('Pekin (Hanbalık)', 'E936LI', 'liao-hanedani', 'sonraki-tang-5hanedan', 'toprak-kazanc'),
 ('Pekin (Hanbalık)', 'EY1123', 'jin-hanedani', 'liao-hanedani', 'toprak-kayip'),
 ('Çengdu (Chengdu)', 'ESH907', 'onceki-shu', 'tang', 'toprak-kazanc'),
 ('Çengdu (Chengdu)', 'ESH925', 'sonraki-tang-5hanedan', 'onceki-shu', 'toprak-kazanc'),
 ('Hangzhou', 'EWY907', 'wuyue', 'tang', 'toprak-kazanc'),
 ('Hangzhou', 'EWY978', 'song', 'wuyue', 'toprak-kayip'),
 ('Yangzhou', 'EYW902', 'yang-wu', 'tang', 'toprak-kazanc'),
 ('Yangzhou', 'EYW937', 'guney-tang', 'yang-wu', 'toprak-kayip'),
 ('Fuzhou', 'EMN907', 'min-krallik', 'tang', 'toprak-kazanc'),
 ('Fuzhou', 'EMN945', 'guney-tang', 'min-krallik', 'toprak-kayip'),
 ('Kanton (Guangzhou)', 'EGZ907', 'sonraki-liang-5hanedan', 'tang', 'toprak-kazanc'),
 ('Kanton (Guangzhou)', 'EGZ917', 'guney-han-10krallik', 'sonraki-liang-5hanedan', 'toprak-kazanc'),
 ('Kanton (Guangzhou)', 'EGZ971', 'song', 'guney-han-10krallik', 'toprak-kayip'),
 ('Changsha', 'ECM907', 'chu-ma', 'tang', 'toprak-kazanc'),
 ('Changsha', 'ECM951', 'guney-tang', 'chu-ma', 'toprak-kayip'),
 ('Jingzhou', 'ENP907', 'sonraki-liang-5hanedan', 'tang', 'toprak-kazanc'),
 ('Jingzhou', 'E923b', 'sonraki-tang-5hanedan', 'sonraki-liang-5hanedan', 'toprak-kazanc'),
 ('Jingzhou', 'ENP924', 'nan-ping-jingnan', 'sonraki-tang-5hanedan', 'toprak-kazanc'),
 ('Jingzhou', 'ENP963', 'song', 'nan-ping-jingnan', 'toprak-kayip'),
 ('Dali', 'EDC902', 'da-changhe', 'nanzhao', 'toprak-kazanc'),
 ('Zhangye (Ganzhou)', 'EXD1028', 'xiazhou-dangxiang', 'ganzhou-uygur', 'toprak-kazanc'),
 ('Zhangye (Ganzhou)', 'EXD1038', 'bati-xia', 'xiazhou-dangxiang', 'toprak-kazanc'),
 ('Dunhuang', 'EG851', 'guiyi-jun-dunhuang', 'tubo-tibet-imparatorlugu', 'toprak-kazanc'),
 ('Dunhuang', 'EG1036', 'xiazhou-dangxiang', 'guiyi-jun-dunhuang', 'toprak-kazanc'),
 ('Dunhuang', 'EXD1038', 'bati-xia', 'xiazhou-dangxiang', 'toprak-kazanc'),
 ('Liaoyang', 'ELY919', 'liao-hanedani', 'balhae', 'toprak-kazanc'),
 ('Liaoyang', 'ELY1116', 'jin-hanedani', 'liao-hanedani', 'toprak-kayip'),
 ('Sanggyeong (Longquanfu)', 'EBH926', 'liao-hanedani', 'balhae', 'toprak-kazanc'),
 ('Sanggyeong (Longquanfu)', 'EDD926', 'dongdan', 'liao-hanedani', 'toprak-kazanc'),
 ('Xiazhou (Tongwancheng)', 'EXD881', 'xiazhou-dangxiang', 'tang', 'toprak-kazanc'),
 ('Xiazhou (Tongwancheng)', 'EXZ982', 'song', 'xiazhou-dangxiang', 'toprak-kayip'),
 ('Xiazhou (Tongwancheng)', 'EXZ988', 'xiazhou-dangxiang', 'song', 'toprak-kazanc'),
]

def sinir_uret():
    out = []
    for (yer, k, win, lose, tur) in TR:
        e = EV[k]
        devlet = win if tur == 'toprak-kazanc' else lose
        out.append({
            't': e['t'], 'devlet': devlet, 'taraflar': [win, lose],
            'b': yer + ': ' + e['b'], 'tur': tur, 'onem': 2, 'dunya': 1, 'kapsam': 'dis',
            'yer': yer, 'yer_id': yer,
            'etiket': ['toprak-degisimi', 'konu-askeri', 'dogu-500-1281'],
            'd': e['d'] + ' (' + yer + ' sahibi ' + lose + ' → ' + win + ')',
            'kaynak': e['kaynak'], 'gun': e['gun'], 'kesinlik': e['kes'],
            'ic_not': e['ic'] or '', 'sinir_id': []})
    out.sort(key=lambda x: (x['t'], x['yer']))
    return out
