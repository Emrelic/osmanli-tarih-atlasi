"""Mükerrer künye çiftlerinin data/ içindeki referans sayısı (kimliğin geçtiği yer), dosya bazında. Hafif."""
import re, glob, io, sys, collections, json
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
ID = ('tikal-mutal tikal-mutul monte-alban-zapotek zapotek-monte-alban tiwanaku tiwanaku-devleti chimu chimu-krallik '
      'tibet-imparatorlugu tubo-tibet-imparatorlugu teuton-sovalyeleri teuton-devleti kirgiz-yenisey yenisey-kirgiz '
      'verona-scaliger della-scala').split()
sayac = {i: collections.Counter() for i in ID}
for yol in glob.glob('data/*.js') + glob.glob('js/*.js') + ['index.html']:
    ad = yol.replace(chr(92), '/')
    if 'paket_' in ad or ad.endswith('.yedek'):
        continue
    try:
        js = open(yol, encoding='utf-8').read()
    except Exception:
        continue
    for i in ID:
        n = len(re.findall(r'(?<![\w-])' + re.escape(i) + r'(?![\w-])', js))
        if n:
            sayac[i][ad] = n
for i in ID:
    print(i, sum(sayac[i].values()), dict(sayac[i].most_common(6)))
json.dump({i: dict(c) for i, c in sayac.items()}, open('denetim/once1281/MUKERRER-REFERANS.json', 'w', encoding='utf-8'),
          ensure_ascii=False, indent=1)
