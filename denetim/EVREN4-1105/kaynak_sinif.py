import sys, os, collections, re, csv
kok = sys.argv[1]; cik = sys.argv[2]
sys.path.insert(0, kok + '/arac')
os.chdir(kok)
import girdi
Y = girdi.yukle(sessiz=True)
KURAL = [
    ('ZAYIF_VIKI', re.compile(r'wikipedia|vikipedi|wiki\b|wikisource(?!.*juan)', re.I)),
    ('ZAYIF_ATLAS', re.compile(r'zincir .* devral|atlas kayd|komşu kay|abi merkez|BEYANLI|yaklaşık|tahmin', re.I)),
    ('TDV', re.compile(r'TDV|islamansiklopedisi|İslâm Ansiklopedisi|DİA', re.I)),
    ('AKADEMIK', re.compile(r'Iranica|Treccani|NDB|ADB|Britannica|Cambridge|Oxford|Brill|EI2|Encyclopaedia of Islam|Belleten|TTK|İSAM|DergiPark|dergi|journal|univ|press|tez|Persée|JSTOR|doi|Hrvatska|enciklopedi|Larousse|BnF|Archiv', re.I)),
]
say = collections.Counter(); kovalar = collections.defaultdict(list)
for t in Y:
    for k in ('s', 'd', 'v', 'isg'):
        for p in (t.get(k) or []):
            kn = (p.get('kaynak') or '').strip()
            if not kn:
                sinif = 'BOS'
            else:
                sinif = 'DIGER'
                for ad, rx in KURAL:
                    if rx.search(kn):
                        sinif = ad
                        break
            say[sinif] += 1
            kovalar[sinif].append((t.get('_dosya', ''), t['ad'], k, p.get('d') or p.get('id') or '', p.get('f'), p.get('t'), kn[:160]))
print('toplam', sum(say.values()))
for s, n in say.most_common():
    print(s, n)
with open(cik + '/donem_kaynak_sinif.tsv', 'w', encoding='utf-8', newline='') as fh:
    w = csv.writer(fh, delimiter='\t')
    w.writerow(['sinif', 'dosya', 'ad', 'kat', 'sahip', 'f', 't', 'kaynak'])
    for s in ('ZAYIF_VIKI', 'ZAYIF_ATLAS', 'DIGER', 'BOS'):
        for r in kovalar[s]:
            w.writerow([s] + list(r))
