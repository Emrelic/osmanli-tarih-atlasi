# -*- coding: utf-8 -*-
import sys, os, json
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _v3 import *

D = os.path.dirname(os.path.abspath(__file__))

KUNYE = [{
 'id': 'da-changhe', 'ad': 'Da Changhe (大長和) Krallığı', 'tur': 'krallik', 'bolge': 'dogu-asya',
 'f': '0902-01-01', 't': '0928-01-01', 'baskent': 'Yangjumie / Taihe (Dali yöresi)',
 'ozet': 'Zheng Maisi’nin Meng hanedanını devirmesiyle (902) kurulan, Zheng ailesinin yönettiği (903–927) Nanzhao ardılı; Zhao Shanzheng’in Da Tianxing’i kurmasıyla (928) sona erdi.',
 'kaynak': 'Ulrich Theobald, «Nanzhao 南詔», chinaknowledge.de/History/Altera/nanzhao.html (açıldı, okundu): «In 902 Zheng Maisi 鄭買嗣, a descendant of Zheng Hui, usurped the throne and ended the rule of the Meng family of Nanzhao. He founded the second dynasty of Nanzhao and changed the name of the country to Da Changhe 大長和. The Zheng family ruled until 927 and was then replaced by 趙善政 (r. 928-929), ruler of Da Tianxing 大天興»; kral tablosu: «Kingdom of Da Changhe 大長和 (903-927) Zheng Maisi 鄭買嗣 (r. 903-909) … Zheng Renmin 鄭仁旻 (r. 909-926) … Zheng Longtan 鄭隆亶 (r. 926-927)»; kaynakça: Bryson 2015, Cahiers d’Extrême-Asie 24:59-76. Xin Tang shu 222 zhong yalnız Meng Shunhua’nın «建元中興…不復通» son anışını verir.',
 'kesinlik': {'f': 'yil', 't': 'yil'}, 'boya_gerekli': True,
 'ic_not': 'KAYNAK ZAYIFLIĞI: Da Changhe için birincil Çin kaynağı bu oturumda bulunamadı (Xin Tang shu 222, ZZTJ 262–265, Song shi 488, Xin Wudai 74, Nanzhao yeshi tarandı: Zheng Maisi geçmiyor); yalnız chinaknowledge.de (ansiklopedik, akademik kaynakçalı) açıldı. İkinci bir hakemli kaynak (Backus 1981 «The Nan-chao Kingdom and T’ang China’s Southwestern Frontier»; Yang Bin) aranmalı. ÇELİŞKİ: aynı kaynak başka yerde «903–927» verir; başka derlemeler 927/928 farkını verir — künye t=0928-01-01 (girdi) korundu.',
 'kronoloji': [
  {'t': '0902-01-01', 'tur': 'kurulus', 'b': 'Zheng Maisi Meng hanedanını devirdi: Da Changhe kuruldu', 'kaynak': EV['EDC902']['kaynak']},
  {'t': '0928-01-01', 'tur': 'son', 'b': 'Zheng ailesi yıkıldı: Zhao Shanzheng Da Tianxing’i kurdu; Da Changhe sona erdi', 'kaynak': EV['EDC928']['kaynak']}]}]

# --- yeni yerlesimler (Pleiades Asya'yi kapsamaz; cift tanik = Wikidata + OSM Nominatim, <5 km) ---
def yer(ad, tur, lat, lon, g, k, kur, kes, s_list, not_, kaynak):
    s = []
    for x in s_list:
        s.append({'f': x['f'], 't': x['t'], 'd': x['d'], 'kesinlik': x['kesinlik'], 'kaynak': x['kaynak']})
    return {'ad': ad, 'tur': tur, 'lat': lat, 'lon': lon, 'g': g, 'k': k, 'kur': kur, 'kesinlik': kes, 's': s, 'not': not_, 'kaynak': kaynak}

YER = [
 yer('Sanggyeong (Longquanfu)', 'sehir', 44.131, 129.142, 1, 2, '0755-01-01', 'yil',
     sehir_zincir('Sanggyeong (Longquanfu)', 'balhae', hepsi=True),
     'kur: KURULUŞ DEĞİL, Üst Başkent’e taşınma yılı («天寶末», yaklaşık) — görünme için ALT SINIR; ilk Balhae başkenti Dongmozu ayrı yerleşim (koordinat çift tanıksız, yazılmadı). Şehir 929’da terk (Dongdan halkının Dongping’e taşınması, BEYANLI); sonrası yerleşim yok. İsimler: Hulhan (忽汗城), Shangjing Longquanfu (上京龍泉府), Tianfu (天福, Dongdan adı).',
     'koordinat: Wikidata Q709753 «Shangjing Longquanfu» (44.13056, 129.14167) + OSM Nominatim way 680739966 «渤海国上京龙泉府遗址» (44.13248, 129.14281) — 0,2 km (Pleiades Doğu Asya’yı kapsamaz, GeoNames cities1000 25 km içinde kayıt vermez: çift tanık = Wikidata + OSM).'),
 yer('Xiazhou (Tongwancheng)', 'sehir', 37.999, 108.849, 1, 3, None, None,
     sehir_zincir('Xiazhou (Tongwancheng)', None, hepsi=True),
     'kur YAZILMADI: Tongwan Şehri (Helian Bobo, 413) kuruluşu bu kümenin penceresinde değil; 500–880 Sui/Tang dilimi cin1 kümesi tarafından bu kaydın önüne eklenmeli (s: ilk dilim 0881-01-01). Xiazhou kenti 994’te yıkıldı (Song Taizong); sonrası yerleşim yok (BEYANLI, kaynak açılmadı). Kimlik kanıtı: Xin Wudai 40 «夏州城壁素堅，故老傳言赫連勃勃蒸土築之». Aynı kent adı: Tongwan 統萬城 (Baichengzi, Jingbian, Shaanxi).',
     'koordinat: Wikidata Q897898 «Tongwan» (37.99876, 108.84722) + OSM Nominatim way 470729772 «统万城遗址» (38.00054, 108.85149) — 0,4 km (Pleiades/GeoNames bölgeyi kapsamaz; çift tanık = Wikidata + OSM).'),
]
for y in YER:
    if y['kur'] is None: del y['kur']
    if y['kesinlik'] is None: del y['kesinlik']

SINIR = sinir_uret()
YAMA = yama_uret()
KR.sort(key=lambda m: (m['t'], m['b']))

def js(isim, data, ad):
    with open(os.path.join(D, isim), 'w', encoding='utf-8', newline='\n') as f:
        f.write('// -*- coding: utf-8 -*-\n// cin2 (Çin kümesi 2. parça) — DOĞU 500-1281 işçi çıktısı; üretici: denetim/dogu/cin2/_uret.py (git\'e girmez, ortak dosyaya yazılmaz)\n')
        f.write('window.%s = [\n' % ad)
        for i, x in enumerate(data):
            f.write(json.dumps(x, ensure_ascii=False) + (',' if i < len(data) - 1 else '') + '\n')
        f.write('];\n')

if __name__ == '__main__':
    os.makedirs(os.path.join(D, ''), exist_ok=True)
    js('kunye_yeni.js', KUNYE, 'DOGU_KUNYE_CIN2')
    js('kronoloji_cok_dogu_cin2.js', KR, 'KRONOLOJI_COK_DOGU_CIN2')
    js('kronoloji_sinir_dogu_cin2.js', SINIR, 'KRONOLOJI_SINIR_DOGU_CIN2')
    js('yerlesimler_dogu_cin2.js', YER, 'YERLESIMLER_DOGU_CIN2')
    with open(os.path.join(D, 'yama_cin2.json'), 'w', encoding='utf-8') as f:
        json.dump(YAMA, f, ensure_ascii=False, indent=1)
    print('kunye', len(KUNYE), 'kron', len(KR), 'sinir', len(SINIR), 'yer', len(YER), 'yama sehir', len(YAMA),
          'yama dilim', sum(len(y['s']) for y in YAMA), 'yer dilim', sum(len(y['s']) for y in YER))
