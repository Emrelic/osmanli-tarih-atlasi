# -*- coding: utf-8 -*-
from _v1c import *
import json

MINE = {'balhae', 'nanzhao', 'an-lushan-yan', 'guiyi-jun-dunhuang', 'xiazhou-dangxiang', 'ganzhou-uygur', 'qi-li-maozhen',
        'da-changhe', 'tang-jin-shatuo-prensligi', 'yang-wu', 'onceki-shu', 'sonraki-liang-5hanedan', 'wuyue', 'zhao-wang-rong',
        'min-krallik', 'yan-liu-shouguang', 'liao-hanedani', 'guney-han-10krallik', 'sonraki-tang-5hanedan', 'nan-ping-jingnan',
        'dongdan', 'chu-ma'}

# TR disi baslangic dilimleri (devir maddesi yazilamayan basi; BEYANLI)
Q_NZ738 = ('Theobald, chinaknowledge.de «Nanzhao» (okundu): «In 738 Piluoge was officially given the title of prince or king (wang) of Yunnan 雲南 by the Tang court…»; '
           'Xin Tang shu, juan 222 zhong «Nanzhao» (' + ZH + '新唐書/卷222中; okundu): «子舜化立，建元中興。遣使款黎州修好，昭宗不答。後中國亂，不復通。»')
Q_GU894 = ('Song shi, juan 490 «Huihu» (' + ZH + '宋史/卷490; okundu): «太平興國二年冬，遣殿直張璨齎詔諭甘、沙州回鶻可汗外甥，…五年，甘、沙州回鶻可汗夜落紇密禮遏遣使裴溢的等四人，…來獻。» '
           '‖ BAŞLANGIÇ 0894-01-01 künye f’sinden alındı: kaynakta okunmadı (BEYANLI); ilk kaynaklı tanık 977/980; atlas künyesi referans değildir.')
Q_BH755 = ('Xin Tang shu, juan 219 «Beidi: Bohai» (' + ZH + '新唐書/卷219; açıldı, okundu): «天寶末，欽茂徙上京，直舊國三百里忽汗河之東。…以肅慎故地爲上京，曰龍泉府»')
EXTRA = {
 ('Dali', 'nanzhao'): ('0738-01-01', '0902-01-01', 'yil', Q_NZ738 + ' ‖ BAŞLANGIÇ 738 = Tang tanıması (Yangjumie/Taihe, Dali yöresi başkenti); yerin ilk Nanzhao sahipliği tarihi kaynakta açık değil (BEYANLI); devir maddesi yazılamadı.'),
 ('Zhangye (Ganzhou)', 'ganzhou-uygur'): ('0894-01-01', '1028-01-01', 'yil', Q_GU894),
 ('Sanggyeong (Longquanfu)', 'balhae'): ('0755-01-01', '0926-02-28', 'yil', Q_BH755 + ' ‖ bitiş: ' + EV['EBH926']['kaynak']),
}
END = {
 ('Çengdu (Chengdu)', 'sonraki-tang-5hanedan'): ('0934-01-01', 'Sonraki Shu künyesi f=0934-01-01 (cin3): Meng Zhixiang’ın Sonraki Shu’su; devir maddesi cin3’e ait (bu kümede kaynak okunmadı) — BEYANLI sınır.'),
 ('Dali', 'da-changhe'): ('0928-01-01', EV['EDC928']['kaynak']),
 ('Sanggyeong (Longquanfu)', 'dongdan'): ('0929-01-01', 'Liao shi, juan 3 «Taizong shang» (' + ZH + '遼史/卷3; okundu): «時人皇王在皇都，詔遣耶律羽之遷東丹民以實東平。…升東平郡為南京。» (Tianxian 3 = 928; ay yok; BEYANLI: Dongdan halkı Dongping/Liaoyang’a taşındı, Hulhan terk; 929-01-01 = DEVLET_LISTESI dongdan t ile uyumlu 928 sonu varsayımı).'),
 ('Xiazhou (Tongwancheng)', 'xiazhou-dangxiang'): ('0994-01-01', 'Xiazhou kentinin yıkımı (Chunhua 5 = 994, Song Taizong’un surların yıkılıp halkın Sui-Yin’e taşınması emri): atıf; açılmadı (Song shi Taizong ben ji; web özetleri Baidu Baike — dayanak değil). BEYANLI: yerleşim 994’te terk (idarî ad kâğıt üstünde sürdü).'),
}

def bol(yer, tr_rows):
    """tr_rows: sirali (t, k, win). Donus: liste dilim (f,t,d,kes,kaynak,k0)"""
    out = []
    for i, (t, k, win) in enumerate(tr_rows):
        nxt = tr_rows[i + 1] if i + 1 < len(tr_rows) else None
        if nxt:
            tend = nxt[0]; kend = EV[nxt[1]]['kaynak']
        else:
            if (yer, win) not in END:
                continue
            tend, kend = END[(yer, win)]
        out.append(dict(f=t, t=tend, d=win, kesinlik=EV[k]['kes'], kaynak=EV[k]['kaynak'] + ' ‖ bitiş: ' + kend, gun=EV[k]['gun']))
    return out

def sehir_zincir(yer, extra_first=None, hepsi=False):
    rows = sorted([(EV[k]['t'], k, win) for (y, k, win, lose, tur) in TR if y == yer])
    dil = []
    if extra_first:
        f, t, kes, kay = EXTRA[(yer, extra_first)]
        dil.append(dict(f=f, t=t, d=extra_first, kesinlik=kes, kaynak=kay, gun=''))
    ds = bol(yer, rows)
    for x in ds:
        if hepsi or x['d'] in MINE:
            dil.append(x)
    # extra_first, ilk TR'den once bitiyorsa sirala
    dil.sort(key=lambda z: z['f'])
    # extra_first ile ilk TR ayni f? (Dali: nanzhao 738-902 ve da-changhe 902) sorun yok
    return dil

YAMA_SEHIRLER = ['Kaifeng', 'Luoyang', 'Taiyuan', 'Zhengding', 'Pekin (Hanbalık)', 'Çengdu (Chengdu)', 'Hangzhou', 'Yangzhou', 'Fuzhou',
                 'Kanton (Guangzhou)', 'Changsha', 'Jingzhou', 'Dali', 'Zhangye (Ganzhou)', 'Dunhuang', 'Liaoyang']
EXTRA_FIRST = {'Dali': 'nanzhao', 'Zhangye (Ganzhou)': 'ganzhou-uygur'}

def yama_uret():
    out = []
    for y in YAMA_SEHIRLER:
        d = sehir_zincir(y, EXTRA_FIRST.get(y))
        out.append(dict(ad=y, s=d))
    return out
