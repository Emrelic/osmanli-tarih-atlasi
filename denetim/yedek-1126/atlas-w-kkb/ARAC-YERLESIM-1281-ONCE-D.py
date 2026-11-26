# YERLESIM-1281-ONCE · adım D — öneri JSON'una EKSİK NOKTA ve YOĞUNLUK bölümlerini ekler. data/'ya yazmaz.
import sys, json, collections
sys.stdout.reconfigure(encoding='utf-8')
P = 'denetim/YERLESIM-1281-ONCE-ONERI.json'
o = json.load(open(P, encoding='utf-8'))
src = json.load(open('denetim/ONCE1281-YERLESIM-0930.json', encoding='utf-8'))
YK = 'YAKLAŞIK — ONCE1281-YERLESIM-0930 önerisi; akademik gazeteer BULUNAMADI, koordinat KAYNAK DEĞİL (§4 D207)'
o['eksik_nokta'] = [
 {'ad': 'Fîrûzkûh', 'koordinat_yaklasik': [34.40, 64.52], 'koordinat_kaynak': YK, 'kur': 'yıl yazılmaz — TDV “Seyfeddin Sûrî zamanında (1146-1149) … kuruldu”',
  'donem_onerisi': 'gurlu (künye 1000-1215) — f yılı belirsiz; bitiş (Moğol yıkımı) bulunamadı', 'kaynak': 'TDV: gurlular (firuzkuh slug 302; kapsayıcı madde)', 'yakin_mukerrer': 'en yakın Herat 213 km — 3 km/ad temiz (0930 ölçümü)'},
 {'ad': 'Ani', 'koordinat_yaklasik': [40.51, 43.57], 'koordinat_kaynak': YK, 'kur': '< 962 (TDV kars: “962’de beyliğinin merkezini Ani’ye taşıdı”)',
  'donem_onerisi': 'seddadiler-ani (künye 1064-1175) — TDV kars: “Ani emîrleri olan Şeddâdîler”; 1064 Alparslan seferi; gün/yıl sınırları bulunamadı', 'kaynak': 'TDV: kars (ani slug 302)', 'yakin_mukerrer': 'Kliçatak (Suser) 14,7 km — ad farklı; 3 km eşiği aşılmıyor, insan bakmalı'},
 {'ad': 'Otrar', 'koordinat_yaklasik': [42.85, 68.30], 'koordinat_kaynak': YK, 'kur': 'bulunamadı', 'donem_onerisi': 'bulunamadı — otrar 302, otrar--sehir 302, arama isabetsiz, farab 302',
  'kaynak': 'bulunamadı', 'yakin_mukerrer': 'Türkistan (Yesi) 50 km'},
 {'ad': 'Rey', 'koordinat_yaklasik': [35.59, 51.44], 'koordinat_kaynak': YK, 'kur': 'TDV rey 200 (önbellekte) — antik', 'donem_onerisi': 'ayrı nokta açılırsa bit: Moğol yıkımı (1220) kaynaktan; Tahran peteğini böler',
  'kaynak': 'TDV: rey', 'yakin_mukerrer': 'Tahran 12,0 km — ayrı nokta ≠ mükerrer ama petek bölünür; KARAR koordinatörün'},
 {'ad': 'Fustat', 'koordinat_yaklasik': [30.00, 31.23], 'koordinat_kaynak': YK, 'kur': 'TDV fustat 200', 'donem_onerisi': 'Kahire 5,4 km — ayrı nokta ÖNERİLMEZ; Kahire noktasının geriye uzatılması yeter',
  'kaynak': 'TDV: fustat', 'yakin_mukerrer': 'Kahire 5,4 km'},
 {'ad': 'Polonnaruva', 'koordinat_yaklasik': [7.94, 81.00], 'koordinat_kaynak': YK, 'donem_onerisi': 'seylan-sinhala (künye 1070-1518)', 'kaynak': 'TDV kapsamı dışı · akademik kaynak BULUNAMADI (bu oturumda aranmadı)', 'yakin_mukerrer': 'Kandy 83 km'},
 {'ad': 'Kumbi Salih', 'koordinat_yaklasik': [15.77, -7.97], 'koordinat_kaynak': YK, 'donem_onerisi': 'gane (künye 1000-1076) → susu-kralligi (1076-1235)?', 'kaynak': 'TDV: gane maddesi denenmedi · bulunamadı', 'yakin_mukerrer': 'Nema 121 km'},
 {'ad': 'Tula (Tollan)', 'koordinat_yaklasik': [20.06, -99.34], 'koordinat_kaynak': YK, 'donem_onerisi': 'toltek (künye 900-1150)', 'kaynak': 'bulunamadı (TDV kapsamı dışı)', 'yakin_mukerrer': 'Tlacopan 69 km'},
 {'ad': 'Chaco Kanyonu', 'koordinat_yaklasik': [36.06, -107.96], 'koordinat_kaynak': YK, 'donem_onerisi': 'ata-pueblo (künye 850-1300)', 'kaynak': 'bulunamadı (TDV kapsamı dışı)', 'yakin_mukerrer': 'Acoma Pueblo 124 km'},
]
# yoğunluk: kanıtlı küme artık B(163) değil — 15 red düşer
kova = collections.Counter(); kov_red = collections.Counter(); kov_a = collections.Counter()
L = {x['ad']: x for x in src['s3_liste'] if x['once1281_varlik'] == 'var-aday'}
red = {r['nokta'] for r in o['red']}; a = {r['nokta'] for r in o['donem_ekle']}
for ad, x in L.items():
    kova[x['kova']] += 1
    if ad in red: kov_red[x['kova']] += 1
    if ad in a: kov_a[x['kova']] += 1
o['yogunluk'] = {'kova': {k: {'var_aday': kova[k], 'red': kov_red[k], 'kanitli_kalan': kova[k] - kov_red[k], 'temiz_donem_onerisi': kov_a[k]} for k in kova},
  'hukum': 'ONCE1281-YERLESIM-0930 §5 tablosu geçerli; kanıtlı küme 163 → 148 (15 red). B-yoğunluğu (Mısır %87 · Mâverâünnehir %82 · İran %70 · Levant+Irak %52 · Anadolu %31 eşik dışı) YALNIZ KÖTÜLEŞİR, yeniden koşulmadı.'}
for k, v in o['yogunluk']['kova'].items(): print(k, v)
json.dump(o, open(P, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('eksik_nokta', len(o['eksik_nokta']))
