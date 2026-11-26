"""KASA-ONCE1281-1003 — "1281 öncesi kronoloji şehirleri zaten atlasta mı?" ölçümü.

py -X utf8 denetim/ARAC-KASA-ONCE1281-1003.py [--json çıktı.json]

A) Evren: data/kronoloji_cok_once1281_*.js (dosya listesi diskten okunur).
   Her madde için ad adayları SIRAYLA: yer_id → odak_yer → yer.
   Havuz: girdi.yukle() (kendi ayrıştırıcı YOK — D240/D244).
   Kova:
     VAR       ilk dolu alanın değeri havuzda BİREBİR bir `ad` (D256)
     ŞÜPHELİ   birebir yok; yalnız parantez-çekirdeği ya da sgNorm eşitliğiyle
               (app.js:712'nin kabul ettiği gevşek eşleşme) bulunuyor
     YOK       yer_id/odak_yer yazılmış ama havuzda hiçbir biçimde yok
     ÇÖZÜLEMEDİ yalnız `yer` serbest metni var ve havuzda yok (bölge/ülke/süreç
               ya da noktası olmayan şehir — ayrımı elle örneklemle yapılır)
   VAR/ŞÜPHELİ için ek soru: noktanın EN ERKEN dönemi (s/d/v/isg f, kur) maddenin
   tarihinden SONRA mı? ⇒ "geriye uzatma gerekir".
B) devletler.js künyeleri: f < 1281 olanlar (t<1281 = tamamen önce · t≥1281 = kesişen);
   anahtar = harita: varsa o, yoksa id; BOYALAR'da mı?
"""
import sys, os, io, json, re, subprocess, contextlib, collections, unicodedata
sys.stdout.reconfigure(encoding='utf-8')
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK); sys.path.insert(0, 'arac')
import girdi, renkler

NODE = 'node'
for aday in (r'C:\Program Files\nodejs\node.exe',):
    if os.path.exists(aday): NODE = aday

def js_oku(yol, degisken):
    kod = ("global.window={};eval(require('fs').readFileSync(process.argv[1],'utf8'));"
           "process.stdout.write(JSON.stringify(window[process.argv[2]]||null))")
    o = subprocess.run([NODE, '-e', kod, yol, degisken], capture_output=True, text=True, encoding='utf-8')
    if o.returncode: raise RuntimeError(f'{yol}: {o.stderr[:300]}')
    return json.loads(o.stdout)

TR = str.maketrans({'İ': 'i', 'I': 'i', 'ı': 'i', 'Ş': 's', 'ş': 's', 'Ğ': 'g', 'ğ': 'g', 'Ü': 'u', 'ü': 'u',
                    'Ö': 'o', 'ö': 'o', 'Ç': 'c', 'ç': 'c', 'Â': 'a', 'â': 'a', 'Î': 'i', 'î': 'i', 'Û': 'u', 'û': 'u'})
def sg_norm(s):  # js/suzgec.js:455 sgNorm'un birebiri
    s = str(s or '').translate(TR)
    s = ''.join(c for c in unicodedata.normalize('NFD', s) if not unicodedata.combining(c))
    return re.sub(r'\s+', ' ', re.sub(r"['\u2018\u2019`\u02bc]", '', s.lower())).strip()

with contextlib.redirect_stdout(io.StringIO()):
    Y = girdi.yukle(sessiz=True)
AD = {y['ad']: y for y in Y}
CEK = collections.defaultdict(list); NRM = collections.defaultdict(list)
for y in Y:
    CEK[y['ad'].split(' (')[0]].append(y['ad'])
    NRM[sg_norm(y['ad'].split(' (')[0])].append(y['ad'])

def pad(g):  # D205: üç haneli yıl dizgi karşılaştırmasında pad() şart ('981-01-01' > '1281-…' yanlış)
    m = re.match(r'^(-?)(\d+)(.*)$', str(g)); return f"{m.group(1)}{int(m.group(2)):05d}{m.group(3)}" if m else str(g)

def en_erken(y):
    f = [pad(p.get('f')) for k in ('s', 'd', 'v', 'isg') for p in (y.get(k) or []) if p.get('f')]
    if y.get('kur'): f.append(pad(y['kur']))
    return min(f) if f else None

def esle(deger):
    """(kova, havuz adları)"""
    d = str(deger).strip()
    if d in AD: return 'VAR', [d]
    c = d.split(' (')[0]
    if c in CEK: return 'ŞÜPHELİ', CEK[c]
    if sg_norm(c) in NRM: return 'ŞÜPHELİ', NRM[sg_norm(c)]
    return None, []

DOSYALAR = sorted(f for f in os.listdir('data') if f.startswith('kronoloji_cok_once1281_') and f.endswith('.js'))
sonuc, tablo = [], collections.OrderedDict()
for f in DOSYALAR:
    deg = 'KRONOLOJI_COK_ONCE1281_' + f[len('kronoloji_cok_once1281_'):-3].upper()
    M = js_oku('data/' + f, deg)
    say = collections.Counter()
    for i, o in enumerate(M):
        alan = next((a for a in ('yer_id', 'odak_yer', 'yer') if o.get(a)), None)
        kova, adlar, deger = None, [], None
        if alan:
            deger = o[alan]
            if isinstance(deger, list): deger = deger[0] if deger else ''
            kova, adlar = esle(deger)
            if not kova:
                # ilk alan tutmadıysa sonraki alanlar (aynı maddenin başka ad yazımı)
                for a2 in ('yer_id', 'odak_yer', 'yer'):
                    if a2 != alan and o.get(a2):
                        k2, ad2 = esle(o[a2] if not isinstance(o[a2], list) else (o[a2] or [''])[0])
                        if k2: kova, adlar = 'ŞÜPHELİ', ad2; break
            if not kova:
                kova = 'YOK' if alan in ('yer_id', 'odak_yer') else 'ÇÖZÜLEMEDİ'
        else:
            kova = 'ÇÖZÜLEMEDİ'
        uzat = None
        if kova in ('VAR', 'ŞÜPHELİ') and len(adlar) == 1:
            ee = en_erken(AD[adlar[0]])
            uzat = (ee is None) or (ee > pad(o['t']))
        say[kova] += 1
        if kova in ('VAR', 'ŞÜPHELİ'): say[kova + (' · UZATILMALI' if uzat else ' · tarihte VAR' if uzat is False else ' · çok aday')] += 1
        sonuc.append({'dosya': f, 'i': i, 't': o.get('t'), 'b': o.get('b', '')[:90], 'alan': alan, 'deger': deger,
                      'kova': kova, 'havuz': adlar[:3], 'uzatilmali': uzat,
                      'en_erken': en_erken(AD[adlar[0]]) if len(adlar) == 1 else None})
    tablo[f] = (len(M), say)

T = collections.Counter(); N = 0
print(f'A · havuz {len(Y)} yerleşim · {len(DOSYALAR)} dosya\n')
print(f"{'dosya':<42}{'N':>5}{'VAR':>6}{'ŞÜPH':>6}{'YOK':>6}{'ÇÖZ':>6}{'VAR-uzat':>10}{'ŞÜP-uzat':>10}")
for f, (n, s) in tablo.items():
    N += n; T.update(s)
    print(f"{f:<42}{n:>5}{s['VAR']:>6}{s['ŞÜPHELİ']:>6}{s['YOK']:>6}{s['ÇÖZÜLEMEDİ']:>6}{s['VAR · UZATILMALI']:>10}{s['ŞÜPHELİ · UZATILMALI']:>10}")
print(f"{'TOPLAM':<42}{N:>5}{T['VAR']:>6}{T['ŞÜPHELİ']:>6}{T['YOK']:>6}{T['ÇÖZÜLEMEDİ']:>6}{T['VAR · UZATILMALI']:>10}{T['ŞÜPHELİ · UZATILMALI']:>10}")
print('ayrıntı:', dict(T))
# farklı yer sayısı (madde değil YER birimi)
yer_birim = collections.defaultdict(set)
for r in sonuc:
    if r['kova'] in ('VAR', 'ŞÜPHELİ') and len(r['havuz']) == 1: yer_birim[r['kova'] + ('-uzat' if r['uzatilmali'] else '-hazır')].add(r['havuz'][0])
    elif r['kova'] in ('YOK', 'ÇÖZÜLEMEDİ'): yer_birim[r['kova']].add(str(r['deger']))
print('farklı YER sayısı:', {k: len(v) for k, v in sorted(yer_birim.items())})

# ---- B ----
D = js_oku('data/devletler.js', 'DEVLETLER')
B = collections.Counter(); Bl = []
for d in D:
    f, t = str(d.get('f') or ''), str(d.get('t') or '9999')
    if not f: continue
    def yil(s):
        m = re.match(r'^(-?\d+)', s); return int(m.group(1)) if m else None
    fy, ty = yil(f), yil(t)
    if fy is None or fy >= 1281: continue
    grup = 'tamamen önce' if (ty is not None and ty < 1281) else 'kesişen'
    anahtar = d.get('harita') or d['id']
    boyali = anahtar in renkler.BOYALAR
    B[(grup, boyali)] += 1
    Bl.append({'id': d['id'], 'harita': d.get('harita'), 'f': f, 't': t, 'grup': grup, 'boyali': boyali})
print(f"\nB · BOYALAR {len(renkler.BOYALAR)} anahtar · devletler.js {len(D)} künye")
for g in ('tamamen önce', 'kesişen'):
    print(f"  {g:<14} toplam {B[(g,True)]+B[(g,False)]:>4} · BOYALI {B[(g,True)]:>4} · BOYASIZ {B[(g,False)]:>4}")
print(f"  TOPLAM         {sum(B.values()):>4} · BOYALI {B[('tamamen önce',True)]+B[('kesişen',True)]:>4} · BOYASIZ {B[('tamamen önce',False)]+B[('kesişen',False)]:>4}")

if '--json' in sys.argv:
    json.dump({'A': sonuc, 'A_tablo': {f: [n, dict(s)] for f, (n, s) in tablo.items()}, 'B': Bl},
              open(sys.argv[sys.argv.index('--json') + 1], 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
