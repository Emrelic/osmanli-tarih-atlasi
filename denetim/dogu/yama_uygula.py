"""DOĞU yamalarını mevcut yerleşimlerin s: zincirine ÖNEK olarak uygular.

  py denetim/dogu/yama_uygula.py            KURU KOŞU (yazmaz) — rapor
  py denetim/dogu/yama_uygula.py --yaz      yazar (yalnız SÜREKLİ olanları)

Girdi: denetim/dogu/*/yama_*.js (node yama_yukle.js ile JSON'a dökülür). Aynı yerleşimin birden çok kümeden gelen
parçaları f'e göre birleştirilir. Uygulama koşulu: birleşik önekin son t'si, mevcut zincirin İLK döneminin f'ine EŞİT
(boşluk = delik, çakışma = ihlal ⇒ UYGULANMAZ, adıyla basılır). Yerleşim ada göre TAM bir kez bulunmalı.
Çıkış: 0 temiz · 1 uygulanamayan var (kuru koşuda da) · 2 ölçülemedi.
"""
import json, os, re, subprocess, sys, io, tempfile

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
KOK = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
YAZ = '--yaz' in sys.argv

# BOYA SÜZGECİ: boyası olmayan sahip kimliği (BOYALAR'da / harita: takma adıyla boyalı künyede yok) dilimde __BOSLUK__ + BOŞLUK BEYANI olur
# (proje kuralı; yayın kapısı 'harita deliği' tavanı 0). Gerçek kimlik kaynak metninde kalır; boya eklenince geri yazılır.
_BOYALI = set(json.load(open(os.path.join(KOK, 'denetim', 'dogu', '_log', 'boyalar.json'), encoding='utf-8')))


def boya_suz(z):
    if z['d'] == '__BOSLUK__' or z['d'] in _BOYALI:
        return z
    y = dict(z)
    y['kaynak'] = ("BOŞLUK BEYANI: sahip %s (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"%s\" geri yazılır) · " % (z['d'], z['d'])) + z['kaynak']
    y['d'] = '__BOSLUK__'
    return y


def gun_sayisi(s):
    m = re.match(r'^([+-]?)(\d{1,6})-(\d{2})-(\d{2})$', s)
    if not m:
        raise ValueError('tarih biçimi: ' + s)
    y = int(m.group(2)) * (-1 if m.group(1) == '-' else 1)
    a, g = int(m.group(3)), int(m.group(4))
    y -= 1 if a <= 2 else 0
    era = y // 400
    yoe = y - era * 400
    doy = (153 * (a + (-3 if a > 2 else 9)) + 2) // 5 + g - 1
    doe = yoe * 365 + yoe // 4 - yoe // 100 + doy
    return era * 146097 + doe - 719468


def girdi_dosyalari():
    p = os.path.join(KOK, 'arac', 'girdi_listesi.py')
    ns = {}
    exec(open(p, encoding='utf-8').read(), ns)
    return ['yerlesimler.js'] + [f for f in ns['GIRDI_DOSYALARI'] if f != 'yerlesimler.js']


def tarama(text):
    """Dizgi/yorum durumunu izleyerek (derinlik, konum) üreten yardımcı: nesne sonu bulma ve derinlik-1 'x:' anahtarı."""
    i, n = 0, len(text)
    while i < n:
        c = text[i]
        if c in '"\'`':
            q = c
            j = i + 1
            while j < n and text[j] != q:
                j += 2 if text[j] == '\\' else 1
            yield i, c, j
            i = j + 1
            continue
        if c == '/' and i + 1 < n and text[i + 1] == '/':
            j = text.find('\n', i)
            i = n if j < 0 else j
            continue
        if c == '/' and i + 1 < n and text[i + 1] == '*':
            j = text.find('*/', i)
            i = n if j < 0 else j + 2
            continue
        yield i, c, i
        i += 1


def nesne_sonu(text, bas):
    d = 0
    for i, c, j in tarama(text[bas:]):
        if c in '{[':
            d += 1
        elif c in '}]':
            d -= 1
            if d == 0:
                return bas + i
    return None


def s_konumu(obj):
    """obj (nesne metni) içinde derinlik-1 `s:[` anahtarının '[' sonrası konumu ve ilk elemanın f'i."""
    d = 0
    toks = list(tarama(obj))
    for k, (i, c, j) in enumerate(toks):
        if c in '{[':
            d += 1
        elif c in '}]':
            d -= 1
        elif d == 1 and c == 's' and (i == 0 or not (obj[i - 1].isalnum() or obj[i - 1] == '_')):
            m = re.match(r's\s*:\s*\[', obj[i:])
            if m:
                bas = i + m.end()
                mf = re.match(r'\s*\{\s*"?f"?\s*:\s*"([^"]+)"', obj[bas:])
                return bas, (mf.group(1) if mf else None)
        elif d == 1 and c in '"\'' and obj[i + 1:j] == 's':
            m = re.match(r'.s.\s*:\s*\[', obj[i:j + 1 + 20])
            if m:
                bas = i + m.end()
                mf = re.match(r'\s*\{\s*"?f"?\s*:\s*"([^"]+)"', obj[bas:])
                return bas, (mf.group(1) if mf else None)
    return None, None

def kur_konumu(obj):
    """obj içinde derinlik-1 `kur:"..."` değerinin (açılış tırnağı sonrası başlangıç, bitiş, değer) göreli konumu; yoksa None."""
    d = 0
    for i, c, j in tarama(obj):
        if c in '{[':
            d += 1
        elif c in '}]':
            d -= 1
        elif d == 1 and c == 'k' and (i == 0 or not (obj[i - 1].isalnum() or obj[i - 1] == '_')):
            m = re.match(r'kur"?\s*:\s*"([^"]*)"', obj[i:])
            if m:
                bas = i + m.start(1)
                return bas, bas + len(m.group(1)), m.group(1)
        elif d == 1 and c in '"\'' and obj[i + 1:j] == 'kur':
            m = re.match(r'.kur.\s*:\s*"([^"]*)"', obj[i:j + 1 + 30])
            if m:
                bas = i + m.start(1)
                return bas, bas + len(m.group(1)), m.group(1)
    return None


def main():
    tmp = os.path.join(tempfile.gettempdir(), 'dogu_yama.json')
    r = subprocess.run(['node', os.path.join(KOK, 'denetim', 'dogu', 'yama_yukle.js'), tmp], capture_output=True, text=True)
    sys.stdout.write(r.stdout)
    if r.returncode:
        sys.stdout.write(r.stderr)
        sys.exit(2)
    yamalar = json.load(open(tmp, encoding='utf-8'))
    grup = {}
    for y in yamalar:
        grup.setdefault(y['ad'], []).append(y)
    # birleşik (kuyruk) yama varsa o şehir için YALNIZ onu kullan (cin1/2/3 parçalarının yerini alır)
    for ad, L in grup.items():
        k = [y for y in L if y['kume'].startswith('kuyruk')]
        if k:
            grup[ad] = k
    dosyalar = girdi_dosyalari()
    metin = {}
    for f in dosyalar:
        p = os.path.join(KOK, 'data', f)
        if os.path.exists(p):
            metin[f] = open(p, encoding='utf-8', newline='').read()
    sorun, uygulanacak = [], []
    for ad, L in sorted(grup.items()):
        s = []
        for y in L:
            s += y['s']
        s.sort(key=lambda z: gun_sayisi(z['f']))
        # birebir aynı (f,t,d) dilimler (iki işçi aynı devri yazdıysa) tek kalır
        gor, s2 = set(), []
        for z in s:
            a = (z['f'], z['t'], z['d'])
            if a in gor:
                continue
            gor.add(a); s2.append(z)
        s = s2
        # önek içi süreklilik
        hata = None
        for a, b in zip(s, s[1:]):
            if gun_sayisi(a['t']) != gun_sayisi(b['f']):
                hata = 'önek içi süreksiz: %s→%s ile %s→%s' % (a['f'], a['t'], b['f'], b['t'])
                break
        bul = []
        pat = re.compile(r'\bad"?\s*:\s*"' + re.escape(ad) + r'"')
        for f, t in metin.items():
            for m in pat.finditer(t):
                bul.append((f, m.start()))
        if hata:
            sorun.append((ad, hata)); continue
        if len(bul) != 1:
            sorun.append((ad, 'yerleşim bulunma sayısı %d (1 olmalı): %s' % (len(bul), [b[0] for b in bul]))); continue
        f, pos = bul[0]
        t = metin[f]
        bas = t.rfind('{', 0, pos)
        son = nesne_sonu(t, bas)
        obj = t[bas:son + 1]
        sb, ilk_f = s_konumu(obj)
        if sb is None or ilk_f is None:
            sorun.append((ad, 's: zinciri/ilk f okunamadı (%s)' % f)); continue
        if gun_sayisi(s[-1]['t']) > gun_sayisi(ilk_f):
            # ÖRTÜŞME (ör. VERI-MS1-1281 aynı yerleşime 1000→1281 öneki yazdı): mevcut zincir YETKİLİDİR, önek ilk f'te kırpılır
            gi = gun_sayisi(ilk_f)
            kes = []
            for z in s:
                if gun_sayisi(z['f']) >= gi:
                    break
                kes.append(dict(z, t=ilk_f) if gun_sayisi(z['t']) > gi else z)
            kirpilan = len(s) - len(kes)
            if not kes:
                sorun.append((ad, 'KAPSANMIŞ: mevcut zincir (ilk f %s) önekin tamamını kapsıyor — yazılmadı' % ilk_f)); continue
            print('  kırpıldı    ', ad, '— önek %s→%s mevcut ilk f %s ile örtüşüyordu (%d dilim atıldı)' % (s[0]['f'], s[-1]['t'], ilk_f, kirpilan))
            s = kes
        if gun_sayisi(s[-1]['t']) != gun_sayisi(ilk_f):
            sorun.append((ad, 'süreksiz: önek sonu %s ≠ mevcut ilk f %s (%s)' % (s[-1]['t'], ilk_f, [y['kume'] for y in L]))); continue
        kd = kur_konumu(obj)
        kur_edit = None
        if kd and kd[2] and gun_sayisi(s[0]['f']) < gun_sayisi(kd[2] if len(kd[2]) >= 10 else (kd[2] + '-01-01')[:10]):
            kur_edit = (bas + kd[0], bas + kd[1], s[0]['f'], kd[2])
        uygulanacak.append((f, bas + sb, ad, s, kur_edit))
    # boşluk listesi (zincir tamamlama işçisi için): --bosluk <json>
    if '--bosluk' in sys.argv:
        hedef = sys.argv[sys.argv.index('--bosluk') + 1]
        out = []
        for ad, L in sorted(grup.items()):
            s = sorted([z for y in L for z in y['s']], key=lambda z: gun_sayisi(z['f']))
            bul = []
            pat = re.compile(r'\bad"?\s*:\s*"' + re.escape(ad) + r'"')
            for f, t in metin.items():
                for m in pat.finditer(t):
                    bul.append((f, m.start()))
            ilk_f, lat, lon = None, None, None
            if len(bul) == 1:
                f, pos = bul[0]
                t = metin[f]
                bas = t.rfind('{', 0, pos)
                obj = t[bas:nesne_sonu(t, bas) + 1]
                _, ilk_f = s_konumu(obj)
                ml = re.search(r'\blat\s*:\s*(-?[\d.]+)', obj)
                mo = re.search(r'\blon\s*:\s*(-?[\d.]+)', obj)
                lat = float(ml.group(1)) if ml else None
                lon = float(mo.group(1)) if mo else None
            gaps = []
            for a, b in zip(s, s[1:]):
                if gun_sayisi(a['t']) != gun_sayisi(b['f']):
                    gaps.append([a['t'], b['f']])
            if s and ilk_f and gun_sayisi(s[-1]['t']) != gun_sayisi(ilk_f):
                gaps.append([s[-1]['t'], ilk_f])
            out.append({'ad': ad, 'lat': lat, 'lon': lon, 'mevcut_ilk_f': ilk_f, 'yazilan_dilimler': [[z['f'], z['t'], z['d']] for z in s], 'bosluklar': gaps})
        json.dump(out, open(hedef, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
        print('bosluk listesi:', hedef, len(out))
    # yaz: dosya başına sondan başa
    n_yazildi = 0
    if YAZ:
        by = {}
        for f, pos, ad, s, ke in uygulanacak:
            by.setdefault(f, []).append((pos, ad, s, ke))
        for f, L in by.items():
            t = metin[f]
            edits = []
            for pos, ad, s, ke in L:
                ek = ''.join('{f:%s,t:%s,d:%s,kesinlik:%s,kaynak:%s},' % (
                    json.dumps(z['f']), json.dumps(z['t']), json.dumps(z['d']),
                    json.dumps(z.get('kesinlik', 'yil'), ensure_ascii=False),
                    json.dumps(z['kaynak'] + ' · DOGU-500-1281', ensure_ascii=False)) for z in [boya_suz(q) for q in s])
                edits.append((pos, pos, ek))
                if ke:
                    edits.append((ke[0], ke[1], ke[2]))
                n_yazildi += 1
            for a, b, yeni in sorted(edits, key=lambda e: (e[0], e[1]), reverse=True):
                t = t[:a] + yeni + t[b:]
            open(os.path.join(KOK, 'data', f), 'w', encoding='utf-8', newline='').write(t)
    print('yama grubu %d · uygulanabilir %d · uygulanamayan %d%s' % (len(grup), len(uygulanacak), len(sorun), ' · yazıldı %d' % n_yazildi if YAZ else ' (kuru)'))
    for ad, h in sorun:
        print('  UYGULANMADI', ad, '—', h)
    for f, pos, ad, s, ke in uygulanacak:
        print('  uygulanır   ', ad, '—', f, '·', len(s), 'dilim', s[0]['f'], '→', s[-1]['t'], ('· kur %s→%s' % (ke[3], ke[2])) if ke else '')
    sys.exit(1 if sorun else 0)


main()
