#!/usr/bin/env python3
"""ARAC-BAYAT-KOPYA-1008 — NOT↔DEĞER, KOPYA ZİNCİR ve TOPLU-İNİŞ GERİLEMESİ (PROTOTİP)

Oturum BAYAT-KOPYA-TARAMA-1008 · 9 Ekim 2026 · denetle.py'ye YAZILMADI (öneri).
Rapor: denetim/BAYAT-KOPYA-TARAMA-1008.md

Üç soru, hiçbiri bugün bir kapıda sorulmuyor:
  A  NOT↔DEĞER  not/neden/kaynak "`X` KALDIRILDI / çıkarıldı / silindi" der, s:/v:/isg: hâlâ X taşır
                (aynı cümlede yıl aralığı varsa yalnız o aralıkla örtüşen dönem sayılır; "s:X" yazılmışsa
                yalnız s:). Vaka: Çemişgezek "`artuklu` TAMAMEN KALDIRILDI", s: artuklu 1281→1465.
  A2 TARİH İDDİASI  "<eski>'den <yeni>'ye çekildi/alındı/…" der, kayıtta <yeni> sınırı YOK.
                Vaka: Karahisâr-ı Sâhib "1341'den 1327'ye çekildi", değer 1341 (OSC-2 geri aldı).
  B  KOPYA ATFI (BİLGİ)  "gün komşudan: Y" (dönem) → dönemin ucu Y'nin bugünkü sınırlarında mı ·
                "zincir komşudan: Y / Y'nin zinciri / ankraj Y / zincir Y'den alındı" (kayıt) →
                Y'nin bugünkü sahipleriyle kaç sınır gününde ayrılıyor. ÇIKIŞ KODUNU ETKİLEMEZ:
                serbest metin pencere söylemez ("1281→~1508" kopyası tam zincirle kıyaslanınca sahte
                fark verir). Kapı yeri `denetle.py` `zincir_kaynagi:` alanıdır (ZINCIR-KAYNAGI-VERI diff'leri);
                bu kol yalnız "beyansız serbest-metin kopya" SAYACIDIR.
  C  GERİLEME (--git)  yerlesimler*.js'te bir commit'in eklediği dönem, DAHA ÖNCE başka bir commit'in
                KALDIRDIĞI dönemse → aday; bugün hâlâ duruyorsa CANLI. + yama katlama kaybı: data/'dan
                silinen yer_yama dosyasının zinciri aynı commit'te tabana geçmiş mi.
                Vaka: a760c8b6 Harput/Çemişgezek/Palu'yu d041a080'in düzeltmesinden ESKİ hâline döndürdü.
                ⚠️ C kendi başına HÜKÜM VERMEZ: bilerek geri alınan (kaynaklı) dönem de aynı görünür.
                Bu yüzden C'nin kapısı LİSTEDİR (BILINEN_C), sayı değil.

Çıkış: 0 yeni yok · 1 BİLİNEN listesinde olmayan A/A2/(C) bulgusu YA DA ölü istisna · 2 ölçülemedi (girdi.py yüklenemedi,
git yok, …). Ölü istisna (listede ama bulguda yok) ayrıca basılır — §3.4.5.

Kullanım (depo kökünden):
  py denetim/ARAC-BAYAT-KOPYA-1008.py                 A + A2 + B
  py denetim/ARAC-BAYAT-KOPYA-1008.py --git tum       + C (bütün geçmiş, ~1 dk)
  py denetim/ARAC-BAYAT-KOPYA-1008.py --git A..B      + C (aralık)
  py denetim/ARAC-BAYAT-KOPYA-1008.py --json yol      ham bulgu dökümü
  py denetim/ARAC-BAYAT-KOPYA-1008.py --sinav         iki yönlü sınav (sentetik + GERÇEK veri)
"""
import sys, os, re, io, json, argparse, subprocess, collections, copy

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, 'arac'))

# ── BİLİNEN BULGULAR — 9 Ekim 2026 ölçümü (LİSTE, sayı değil; §3.4.5) ─────────────────────────
# Her girdi bir DİFF'in sahasındadır; diff inince girdi ÖLÜ istisna olur ve araç bunu söyler.
BILINEN_A = {("Çemişgezek", "artuklu")}                         # ARTUKLU-IKI-PARCA-1008-KOORD.diff
BILINEN_A2 = {("Karahisâr-ı Sâhib (Afyon)", "1327")}            # BAYAT-KOPYA-1008-KOORD.diff
BILINEN_C = {                                                    # canlı gerçek gerilemeler
    ("Harput (Elazığ)", "a760c8b6"), ("Çemişgezek", "a760c8b6"), ("Palu", "a760c8b6"),  # ARTUKLU
    ("Sohum", "aaadabf5"), ("Sohum", "d041a080"),                                       # HAYALET-KUNYE
}
# C'nin elle ELENMİŞ adayları (bilerek geri alma / sonradan düzeltilmiş) — rapor §4.2 tablosu.
ELENEN_C = {
    ("Belgrad", "974c4ea0"), ("Konya", "1dd0ad7b"), ("Karaman", "1dd0ad7b"), ("Niğde", "1dd0ad7b"),
    ("Aden", "b16f3f3e"), ("Lagos (Algarve)", "b16f3f3e"), ("Setúbal", "b16f3f3e"),
    ("Aveiro", "b16f3f3e"), ("Coimbra", "b16f3f3e"), ("Braga", "b16f3f3e"), ("Évora", "b16f3f3e"),
    ("Faro", "b16f3f3e"), ("Bragança", "b16f3f3e"), ("Helsinki", "94bc222d"), ("Estergon", "073df094"),
    ("Revan", "aaadabf5"), ("Kars", "a7bdd08c"), ("Ardahan", "a7bdd08c"), ("Revan", "a7bdd08c"),
    ("Gence", "a7bdd08c"), ("Kutaisi", "a7bdd08c"), ("Kars", "a760c8b6"), ("Ardahan", "a760c8b6"),
    ("İsmail", "415d18ac"), ("Trablus", "9b92117f"), ("Diyarbakır", "24fd1534"),
    ("Karahisâr-ı Sâhib (Afyon)", "17cd2f98"), ("Soçi (Sâşe)", "52222fa3"), ("Tuapse", "52222fa3"),
    ("Maykop (Çerkezya)", "52222fa3"), ("Derbend", "52222fa3"),
}

# ── ortak ───────────────────────────────────────────────────────────────────────────────────
def nrm(t):
    t = t.replace('İ', 'i').replace('I', 'ı').lower().replace('\u0307', '')
    for a, b in zip('âîûçğışöüéèáíóú’', "aiucgisoueeaiou'"):
        t = t.replace(a, b)
    return t

def metinler(y):
    for a in ('not', 'neden', 'kaynak'):
        if isinstance(y.get(a), str):
            yield a, None, y[a]
    for kat in ('s', 'd', 'v', 'isg'):
        for i, p in enumerate(y.get(kat) or []):
            for a in ('kaynak', 'not'):
                if isinstance(p.get(a), str):
                    yield f'{kat}[{i}].{a}', p, p[a]

def sinirlar(y):
    g = set()
    for k in ('s', 'd', 'v', 'isg'):
        for p in y.get(k) or []:
            g.add(p.get('f')); g.add(p.get('t'))
    g.discard(None)
    return g

def sahip(y, gun):
    """de jure sahip (v → d → s, VERI-YAPISI sırası) + isg örtüsü."""
    ic = lambda p: (p.get('f') or '0000') <= gun < (p.get('t') or '9999')
    taban = None
    for p in y.get('v') or []:
        if ic(p): taban = 'tabi:' + str(p.get('kid')); break
    if taban is None and any(ic(p) for p in y.get('d') or []):
        taban = 'OSM'
    if taban is None:
        for p in y.get('s') or []:
            if ic(p): taban = p.get('d'); break
    isg = ','.join(sorted(p.get('d') for p in y.get('isg') or [] if ic(p)))
    return taban if not isg else f'{taban}+isg:{isg}'

# ── A: kimlik iddiası ──────────────────────────────────────────────────────────────────────
A_FIIL = r"(kald[ıi]r[ıi]ld[ıi]|kald[ıi]r[ıi]lm[ıi][şs]|[çc][ıi]kar[ıi]ld[ıi]|silindi|d[üu][şs][üu]r[üu]ld[üu])"
A_KIMLIK = re.compile(r"(s:)?`([a-z0-9-]+)`|(s:)?(?<![\w`-])([a-z][a-z0-9]*(?:-[a-z0-9]+)*)(?![\w-])")
YIL_ARALIK = re.compile(r"(?<!\d)(1[0-9]{3})(?:-\d\d-\d\d)?\s*(?:-|–|→|ile)\s*(1[0-9]{3})(?:-\d\d-\d\d)?(?!\d)")
YIL_YON = re.compile(r"(?<!\d)(1[0-9]{3})(?:-\d\d-\d\d)?['’]?\s*(?:(?:den|dan|ten|tan)\s+)?(öncesi|oncesi|önce|once|sonrası|sonrasi|sonra)")
ORTUSME_GUN = 366   # yıl hassasiyetli aralığın ucuna değen < 1 yıllık temas çelişki SAYILMAZ

def _gun(a, b):
    from datetime import date
    return (date.fromisoformat(b) - date.fromisoformat(a)).days

def a_tara(Y, kimlik):
    bulgu, ham = [], 0
    for y in Y:
        for alan, _, t in metinler(y):
            tn = nrm(t)
            for m in A_KIMLIK.finditer(tn):
                x = m.group(2) or m.group(4)
                yalniz_s = bool(m.group(1) or m.group(3))
                if x not in kimlik:
                    continue
                sonra = re.split(r'[.;·|\n]|—', tn[m.end():m.end() + 45])[0]
                if not re.search(A_FIIL, sonra):
                    continue
                ham += 1
                # cümle: nokta/noktalı virgülden nokta/noktalı virgüle ('—' ve '·' cümle içi ayraçtır:
                # "1395 öncesi … — hayalet milanoduka SİLİNDİ" tek iddiadır)
                bas = max(tn.rfind(c, 0, m.start()) for c in '.;|\n') + 1
                son = min([i for i in (tn.find(c, m.end()) for c in '.;|\n') if i >= 0] or [len(tn)])
                cumle = tn[bas:son]
                araliklar = [(a + '-01-01', b + '-01-01') for a, b in YIL_ARALIK.findall(cumle)]
                for yil, yon in YIL_YON.findall(cumle):
                    araliklar.append(('0000-01-01', yil + '-01-01') if yon.startswith(('ön', 'on'))
                                     else (yil + '-01-01', '9999-01-01'))
                tasiyan = []
                for kat in (('s',) if yalniz_s else ('s', 'isg', 'v')):
                    for p in y.get(kat) or []:
                        if (p.get('kid') if kat == 'v' else p.get('d')) != x:
                            continue
                        if araliklar and not any(
                                _gun(max(p['f'], a), min(p['t'], b)) > ORTUSME_GUN
                                for a, b in araliklar if max(p['f'], a) < min(p['t'], b)):
                            continue
                        tasiyan.append(f"{kat}:{p['f']}→{p['t']}")
                if tasiyan:
                    bulgu.append(dict(sinif='A', ad=y['ad'], dosya=y['_kaynak'], alan=alan, anahtar=x,
                                      tasiyan=tasiyan, baglam=t[bas:son].strip()[:220]))
    return bulgu, ham

# ── A2: tarih iddiası ──────────────────────────────────────────────────────────────────────
TAR = r"(\d{4}(?:-\d\d(?:-\d\d)?)?)"
A2_D = re.compile(TAR + r"['’]?(?:den|dan|ten|tan)\s+" + TAR + r"['’]?(?:e|a|ye|ya)\s+"
                  r"(çekildi|cekildi|alındı|alindi|kaydırıldı|kaydirildi|taşındı|tasindi|düzeltildi|duzeltildi|"
                  r"uzatıldı|uzatildi|kısaltıldı|kisaltildi|indirildi|ilerletildi)", re.I)

def a2_tara(Y):
    bulgu, ham = [], 0
    for y in Y:
        S = sinirlar(y)
        var = lambda u: (u in S) if len(u) == 10 else any(x.startswith(u) for x in S)
        for alan, _, t in metinler(y):
            for m in A2_D.finditer(t):
                eski, yeni = m.group(1), m.group(2)
                if eski == yeni:
                    continue
                ham += 1
                if not var(yeni):
                    bulgu.append(dict(sinif='A2', ad=y['ad'], dosya=y['_kaynak'], alan=alan, anahtar=yeni,
                                      eski_hala_var=var(eski),
                                      baglam=t[max(0, m.start() - 80):m.end() + 30].strip()))
    return bulgu, ham

# ── B: kopya atfı (bilgi) ──────────────────────────────────────────────────────────────────
AD = (r"([A-ZÇĞİÖŞÜÂÎÛ][\wçğıöşüâîûÇĞİÖŞÜ\-]+(?:['’][a-zıüöç]+)?"
      r"(?:\s[A-ZÇĞİÖŞÜÂÎÛ][\wçğıöşüâîû\-]+(?:['’][a-zıüöç]+)?){0,2}(?:\s\([^)]{1,30}\))?)")
B_GUN = re.compile(r"(biti[şs]\w*[:\s]+|ba[şs]lang[ıi][çc]\w*[:\s]+)?g[üu]n[üu]? (?:komşudan|komsudan)\s*:?\s*" + AD)
B_KAYIT = [
    ('zincir-komsudan', re.compile(r"zincir\w*\s+(?:komşudan|komsudan)\s*[:—-]?\s*" + AD, re.I)),
    ('Y-nin-zinciri', re.compile(AD + r"['’](?:n[ıiuü]n|[ıiuü]n) zinciri")),
    ('zincir-Y-den-alindi', re.compile(r"zincir\w*\s+" + AD + r"['’](?:den|dan|ten|tan) al[ıi]nd[ıi]")),
    ('ankraj-Y', re.compile(r"ankraj[ıi]?\s*:?\s*" + AD)),
    ('Y-kaydindan-kopya', re.compile(AD + r" kayd[ıi]n?(?:dan|ın|in)? (?:kopya|aynen)", re.I)),
]
B_OLUMSUZ = re.compile(r"(de[ğg]il|tuzak|kopyalanmad|al[ıi]nmad|ta[şs][ıi]nmad|devral[ıi]nmad|yerine)", re.I)
B_YORUM = re.compile(r"//\s*(.+?)\s*(?:→|->)\s*([^\s'’]+)['’](?:n[ıiuü]n|[ıiuü]n) zinciri", re.I)

def b_tara(Y, dosyalar_yolu):
    H = {y['ad']: y for y in Y}
    TAM = {nrm(a): a for a in H}
    DIZ = collections.defaultdict(set)
    for a in H:
        DIZ[nrm(a)].add(a)
        m = re.match(r'^(.*?)\s*\((.*)\)\s*$', a)
        if m:
            DIZ[nrm(m.group(1))].add(a)
            for parca in re.split(r'[,/]', m.group(2)):
                DIZ[nrm(parca.strip())].add(a)

    def _coz(s):
        k = re.sub(r"'.*$", '', nrm(s.strip(" '\"`.,:;")))
        if k in TAM: return TAM[k]
        c = DIZ.get(k)
        return next(iter(c)) if c and len(c) == 1 else None

    def coz(s):
        s = re.sub(r'\s*\(\d+\s*km\)\s*$', '', s)
        kel = s.split()
        for n in range(min(4, len(kel)), 1, -1):
            r = _coz(' '.join(kel[:n]))
            if r: return r
        return _coz(s)

    def fark(y, z):
        gun = sorted(g for g in (sinirlar(y) | sinirlar(z)) if '1281-01-01' <= g < '1920-04-23')
        return len(gun), [(g, sahip(y, g), sahip(z, g)) for g in gun if sahip(y, g) != sahip(z, g)]

    gun_ref, kayit_ref, cozulemeyen = [], [], collections.Counter()
    for y in Y:
        for alan, p, t in metinler(y):
            for m in B_GUN.finditer(t):
                hedef = coz(m.group(2))
                if not hedef:
                    cozulemeyen[m.group(2)] += 1; continue
                if hedef == y['ad'] or p is None:
                    continue
                uc = 't' if (m.group(1) or '').lower().startswith('bit') else ('f' if m.group(1) else 'ft')
                gunler = [p[u] for u in uc if p.get(u) and p[u] not in ('1281-01-01', '1923-10-29')]
                if not gunler: continue
                S = sinirlar(H[hedef])
                gun_ref.append(dict(ad=y['ad'], alan=alan, hedef=hedef, gunler=gunler,
                                    tutuyor=any(g in S for g in gunler)))
            if p is not None:
                continue
            for tur, D in B_KAYIT:
                for m in D.finditer(t):
                    if B_OLUMSUZ.search(t[max(0, m.start() - 40):m.end() + 25]):
                        continue
                    hedef = coz(m.group(1))
                    if not hedef or hedef == y['ad']:
                        if not hedef: cozulemeyen[m.group(1)] += 1
                        continue
                    n, fk = fark(y, H[hedef])
                    kayit_ref.append(dict(ad=y['ad'], dosya=y['_kaynak'], alan=alan, tur=tur, hedef=hedef,
                                          sinir_gunu=n, farkli=len(fk), fark_ornek=fk[:4]))
    import girdi
    for dosya in girdi.GIRDI_DOSYALARI:
        for i, L in enumerate(io.open(os.path.join(dosyalar_yolu, dosya), encoding='utf-8').read().splitlines()):
            m = B_YORUM.search(L) if L.lstrip().startswith('//') else None
            if not m:
                continue
            hedef = coz(m.group(2).title() if m.group(2).isupper() else m.group(2))
            for a in re.split(r'\s*[·,]\s*', re.sub(r'^//\s*', '', m.group(1))):
                a = coz(a)
                if a and hedef and a != hedef:
                    n, fk = fark(H[a], H[hedef])
                    kayit_ref.append(dict(ad=a, dosya=dosya, alan=f'yorum:{i + 1}', tur='yorum-liste',
                                          hedef=hedef, sinir_gunu=n, farkli=len(fk), fark_ornek=fk[:4]))
    tek = {}
    for k in kayit_ref:
        tek.setdefault((k['ad'], k['hedef']), k)
    return gun_ref, list(tek.values()), cozulemeyen

# ── C: git gerilemesi ──────────────────────────────────────────────────────────────────────
def _git(*a):
    r = subprocess.run(['git', '-C', KOK, *a], capture_output=True, text=True, encoding='utf-8', errors='replace')
    if r.returncode:
        raise RuntimeError(f"git {' '.join(a[:2])}: {r.stderr.strip()[:200]}")
    return r.stdout

_AD = re.compile(r'\bad:\s*"([^"]+)"')

def _donemler(line):
    out = set()
    for kat in ('s', 'd', 'v', 'isg'):
        m = re.search(r'(?<![\w"])' + kat + r'\s*:\s*\[', line)
        if not m:
            continue
        i = j = m.end(); dep = 1
        while j < len(line) and dep:
            c = line[j]
            if c == '[': dep += 1
            elif c == ']': dep -= 1
            elif c == '"':
                j += 1
                while j < len(line) and line[j] != '"':
                    if line[j] == '\\': j += 1
                    j += 1
            j += 1
        for blok in re.findall(r'\{[^{}]*\}', line[i:j - 1]):
            g = lambda k: (re.search(r'(?<![\w])"?' + k + r'"?\s*:\s*"([^"]*)"', blok) or [None, None])[1]
            out.add((kat, g('f'), g('t'), g('d'), g('kid')))
    return out

def c_tara(Y, aralik):
    H = {y['ad']: y for y in Y}
    bugun = {a: {(k, p.get('f'), p.get('t'), p.get('d'), p.get('kid'))
                 for k in ('s', 'd', 'v', 'isg') for p in (y.get(k) or [])} for a, y in H.items()}
    arg = ['log', '--reverse', '--format=%H|%ad|%s', '--date=short']
    if aralik != 'tum':
        arg.append(aralik)
    commits = _git(*arg, '--', 'data/yerlesimler*.js').strip().splitlines()
    kaldirilan, bulgu = {}, []
    for satir in commits:
        h, tarih, msj = satir.split('|', 2)
        eksi, arti = {}, {}
        for L in _git('show', '--format=', '-U0', '--no-color', h, '--', 'data/yerlesimler*.js').splitlines():
            if L[:1] in '+-' and L[:3] not in ('+++', '---'):
                m = _AD.search(L)
                if m:
                    (eksi if L[0] == '-' else arti)[m.group(1)] = _donemler(L[1:])
        for ad, zy in arti.items():
            ze = eksi.get(ad)
            if ze is None or ze == zy:
                continue
            geri = [(p, kaldirilan[(ad, p)]) for p in zy - ze if (ad, p) in kaldirilan and kaldirilan[(ad, p)][0] != h]
            if geri:
                canli = [p for p, _ in geri if p in bugun.get(ad, ())]
                bulgu.append(dict(sinif='C', ad=ad, anahtar=h[:8], tarih=tarih, msj=msj[:70],
                                  ezilen=sorted({k[0][:8] for _, k in geri}),
                                  geri_donem=len(geri), canli=len(canli),
                                  canli_ornek=[list(p[:4]) for p in canli[:3]]))
        for ad, ze in eksi.items():
            zy = arti.get(ad)
            if zy is not None and zy != ze:
                for p in ze - zy:
                    kaldirilan[(ad, p)] = (h, tarih, msj)
    return bulgu, len(commits)

# ── çalıştırma ─────────────────────────────────────────────────────────────────────────────
def olc(Y, git_aralik=None, data_yolu=None):
    import girdi
    kimlik = set()
    for y in Y:
        for k in ('s', 'isg'):
            for p in y.get(k) or []:
                if p.get('d'): kimlik.add(p['d'])
        for p in y.get('v') or []:
            if p.get('kid'): kimlik.add(p['kid'])
    R = {}
    R['A'], R['A_ham'] = a_tara(Y, kimlik)
    R['A2'], R['A2_ham'] = a2_tara(Y)
    R['B_gun'], R['B_kayit'], R['B_cozulemeyen'] = b_tara(Y, data_yolu or girdi.DATA)
    R['C'], R['C_commit'] = (c_tara(Y, git_aralik) if git_aralik else (None, 0))
    return R

def hukum(R, yaz=True):
    p = print if yaz else (lambda *a, **k: None)
    yeni, olu, olculemedi = [], [], list(R.get('olculemedi', []))
    a_k = {(b['ad'], b['anahtar']) for b in R['A']}
    a2_k = {(b['ad'], b['anahtar']) for b in R['A2']}
    p(f"A   NOT↔DEĞER (kimlik)  ham iddia {R['A_ham']} · hâlâ taşıyan {len(R['A'])}")
    for b in R['A']:
        isaret = 'bilinen' if (b['ad'], b['anahtar']) in BILINEN_A else 'YENİ'
        p(f"    {'·' if isaret == 'bilinen' else '✗'} [{isaret}] {b['ad']} ({b['dosya']} · {b['alan']}): "
          f"`{b['anahtar']}` → {', '.join(b['tasiyan'][:3])}")
        if isaret == 'YENİ': yeni.append(('A',) + (b['ad'], b['anahtar']))
    olu += [('A',) + k for k in BILINEN_A - a_k]
    p(f"A2  NOT↔DEĞER (tarih)   ham iddia {R['A2_ham']} · yeni sınırı TAŞIMAYAN {len(R['A2'])}")
    for b in R['A2']:
        isaret = 'bilinen' if (b['ad'], b['anahtar']) in BILINEN_A2 else 'YENİ'
        p(f"    {'·' if isaret == 'bilinen' else '✗'} [{isaret}] {b['ad']} ({b['alan']}): '{b['anahtar']}' yok"
          f"{' · eski sınır HÂLÂ VAR' if b['eski_hala_var'] else ''}")
        if isaret == 'YENİ': yeni.append(('A2', b['ad'], b['anahtar']))
    olu += [('A2',) + k for k in BILINEN_A2 - a2_k]
    tutmayan = [g for g in R['B_gun'] if not g['tutuyor']]
    farkli = [k for k in R['B_kayit'] if k['farkli']]
    p(f"B   KOPYA ATFI (bilgi)  'gün komşudan' {len(R['B_gun'])} · kaynağında YOK {len(tutmayan)} · "
      f"kayıt/yorum atfı {len(R['B_kayit'])} · sahip farkı olan {len(farkli)} · çözülemeyen ad "
      f"{sum(R['B_cozulemeyen'].values())}")
    for g in tutmayan:
        p(f"    i {g['ad']} ({g['alan']}) ← {g['hedef']}: {g['gunler']}")
    for k in sorted(farkli, key=lambda k: -k['farkli']):
        p(f"    i {k['ad']} ← {k['hedef']} [{k['tur']}] {k['farkli']}/{k['sinir_gunu']} gün · ör. {k['fark_ornek'][:2]}")
    if R['C'] is not None:
        canli = [b for b in R['C'] if b['canli']]
        p(f"C   GERİLEME            {R['C_commit']} commit · aday {len(R['C'])} · bugün CANLI {len(canli)}")
        c_k = set()
        for b in canli:
            k = (b['ad'], b['anahtar']); c_k.add(k)
            if k in BILINEN_C: isaret = 'bilinen'
            elif k in ELENEN_C: isaret = 'elendi'
            else: isaret = 'YENİ'
            p(f"    {'✗' if isaret == 'YENİ' else '·'} [{isaret}] {b['ad']}: {b['anahtar']} ({b['tarih']}) "
              f"← ezilen {','.join(b['ezilen'])} · {b['canli']} canlı dönem")
            if isaret == 'YENİ': yeni.append(('C',) + k)
        olu += [('C',) + k for k in BILINEN_C - c_k]
    else:
        p("C   GERİLEME            SORULMADI (--git verilmedi) — 'sorulmadı' ≠ 'temiz'")
    for o in sorted(olu):
        p(f"    ⚠️ ÖLÜ İSTİSNA {o} — listede ama bulguda YOK (diff indi mi? listeden SİL, §3.4.5)")
    for o in olculemedi:
        p(f"    🔴 ÖLÇÜLEMEDİ: {o}")
    # ölü istisna da 1'dir: liste, düzeltmeyle AYNI commit'te güncellenir (CLAUDE.md §3.4.2 · §3.4.5)
    kod = 2 if olculemedi else (1 if (yeni or olu) else 0)
    bilinen = len(BILINEN_A & a_k) + len(BILINEN_A2 & a2_k)
    p(f"SONUÇ: {'YENİ yok (bilinen ' + str(bilinen) + ' A/A2 bulgusu listede — temiz DEĞİL, BEYANLI)' if kod == 0 else ('YENİ BULGU ' + str(len(yeni)) if kod == 1 else 'ÖLÇÜLEMEDİ')} · çıkış {kod}")
    return kod, yeni, olu

# ── sınav ──────────────────────────────────────────────────────────────────────────────────
def sinav(Y):
    """İki yön × üç sınıf, sentetik + GERÇEK. Her soru: (ad, beklenen, ölçülen)."""
    sonuc = []
    def kontrol(ad, beklenen, olculen):
        sonuc.append((ad, beklenen, olculen, beklenen == olculen))
    kimlik = {'artuklu', 'akkoyunlu', 'safevi', 'rusya', 'ilhanli'}
    taban = lambda **k: dict(ad='SINAV', _kaynak='sinav', tur='sehir', lat=0, lon=0, **k)
    # A — ötmeli: not "`artuklu` TAMAMEN KALDIRILDI", s: artuklu
    y1 = taban(not_='', s=[dict(f='1281-01-01', t='1465-01-01', d='artuklu')]); y1['not'] = "— `artuklu` TAMAMEN KALDIRILDI: kayıt yok."
    kontrol('A+ sentetik: kaldırıldı + hâlâ taşıyor', 1, len(a_tara([y1], kimlik)[0]))
    # A — ötmemeli: aynı not, s: ilhanli
    y2 = copy.deepcopy(y1); y2['s'] = [dict(f='1281-01-01', t='1353-01-01', d='ilhanli')]
    kontrol('A- sentetik: kaldırıldı + taşımıyor', 0, len(a_tara([y2], kimlik)[0]))
    # A — ötmemeli: aralık kapsamlı ("s:rusya 1771-1774 kaldırıldı", rusya 1783'ten)
    y3 = taban(s=[dict(f='1783-04-19', t='1917-03-15', d='rusya')]); y3['kaynak'] = "v: uzatıldı, s:rusya 1771-1774 kaldırıldı; kıyı modeli"
    kontrol('A- sentetik: yıl aralığı dışındaki dönem', 0, len(a_tara([y3], kimlik)[0]))
    # A2 — ötmeli / ötmemeli
    y4 = taban(s=[dict(f='1281-01-01', t='1341-01-01', d='safevi')]); y4['neden'] = "Kirilma 1341'den 1327'ye cekildi (14 yil)."
    kontrol('A2+ sentetik: 1327 iddiası, sınır 1341', 1, len(a2_tara([y4])[0]))
    y5 = copy.deepcopy(y4); y5['s'][0]['t'] = '1327-01-01'
    kontrol('A2- sentetik: 1327 iddiası, sınır 1327', 0, len(a2_tara([y5])[0]))
    # GERÇEK — bugünkü veri
    gercek_a = {(b['ad'], b['anahtar']) for b in a_tara(Y, {p.get('d') for y in Y for p in y.get('s') or []})[0]}
    kontrol('A+ GERÇEK: Çemişgezek/artuklu bulunur', True, ('Çemişgezek', 'artuklu') in gercek_a)
    kontrol("A- GERÇEK: Verona '1395 öncesi … milanoduka SİLİNDİ' susar", False, ('Verona', 'milanoduka') in gercek_a)
    kontrol("A- GERÇEK: Çaldıran '1548-1639 safevi kaldırıldı' susar", False, ('Çaldıran', 'safevi') in gercek_a)
    gercek_a2 = {(b['ad'], b['anahtar']) for b in a2_tara(Y)[0]}
    kontrol('A2+ GERÇEK: Karahisâr/1327 bulunur', True, ('Karahisâr-ı Sâhib (Afyon)', '1327') in gercek_a2)
    # GERÇEK ters yön: Çemişgezek'e ARTUKLU diff'inin s:'si bellekte uygulanınca A susmalı
    Y2 = copy.deepcopy(Y)
    for y in Y2:
        if y['ad'] == 'Çemişgezek':
            y['s'] = [dict(f='1281-01-01', t='1420-01-01', d='cemisgezek-beyligi'),
                      dict(f='1420-01-01', t='1507-01-01', d='akkoyunlu'),
                      dict(f='1507-01-01', t='1516-05-01', d='safevi'),
                      dict(f='1920-04-23', t='1923-10-29', d='tbmm-turkiye')]
    gercek_a_sonra = {(b['ad'], b['anahtar']) for b in a_tara(Y2, {p.get('d') for y in Y2 for p in y.get('s') or []})[0]}
    kontrol('A- GERÇEK: yama s: bellekte uygulanınca Çemişgezek susar', False, ('Çemişgezek', 'artuklu') in gercek_a_sonra)
    # B — GERÇEK: DIVRIGI dörtlüsü yorum bloğundan (FIRAT KAVSİ) farklı bulunmalı; Çemişgezek→Harput aynı
    import girdi
    _, bk, _ = b_tara(Y, girdi.DATA)
    bk = {(k['ad'], k['hedef']): k['farkli'] for k in bk}
    kontrol('B+ GERÇEK: Kâhta ← Malatya ayrışmış (yorum listesi)', True, bk.get(('Kâhta', 'Malatya'), 0) > 0)
    kontrol('B- GERÇEK: Palu ← Harput ayrışmamış', 0, bk.get(('Palu', 'Harput (Elazığ)'), -1))
    # C — GERÇEK git: düzeltme (d041a080) + ezme (a760c8b6) birlikte görülünce Harput bulunur;
    # yalnız ezme commit'i görülünce BULUNMAZ (kapı düzeltmeyi görmediği ezmeyi göremez — aralık şart)
    c_iki = {(b['ad'], b['anahtar']) for b in c_tara(Y, 'd041a080^..a760c8b6')[0] if b['canli']}
    kontrol('C+ GERÇEK: d041a080^..a760c8b6 → Harput/a760c8b6 canlı', True, ('Harput (Elazığ)', 'a760c8b6') in c_iki)
    c_tek = {(b['ad'], b['anahtar']) for b in c_tara(Y, 'a760c8b6^..a760c8b6')[0]}
    kontrol('C- GERÇEK: yalnız a760c8b6 → Harput görünmez', False, ('Harput (Elazığ)', 'a760c8b6') in c_tek)
    return sonuc

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--git', metavar='ARALIK', help="'tum' ya da A..B — C kolunu açar")
    ap.add_argument('--json', metavar='YOL')
    ap.add_argument('--sinav', action='store_true')
    a = ap.parse_args()
    try:
        import girdi
        Y = girdi.yukle(sessiz=True)
    except Exception as e:
        print(f"🔴 ÖLÇÜLEMEDİ — girdi.yukle: {e!r}"); return 2
    if a.sinav:
        s = sinav(Y)
        for ad, b, o, ok in s:
            print(f"  {'✓' if ok else '✗'} {ad}  (beklenen {b!r} · ölçülen {o!r})")
        n = sum(ok for *_, ok in s)
        print(f"SINAV {n}/{len(s)}")
        return 0 if n == len(s) else 1
    R = {'olculemedi': []}
    try:
        R.update(olc(Y, a.git))
    except RuntimeError as e:
        R.update(olc(Y, None)); R['olculemedi'] = [f'C kolu — {e}']
    kod, _, _ = hukum(R)
    if a.json:
        R['B_cozulemeyen'] = R['B_cozulemeyen'].most_common()
        io.open(a.json, 'w', encoding='utf-8').write(json.dumps(R, ensure_ascii=False, indent=1, default=list))
    return kod

if __name__ == '__main__':
    sys.exit(main())
