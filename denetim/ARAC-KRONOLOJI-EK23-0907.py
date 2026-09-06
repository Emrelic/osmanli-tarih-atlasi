# -*- coding: utf-8 -*-
"""CEKIRDEK KRONOLOJI BORCU — TOPLA · MUKERRER OLC · HAZIR METIN URET.
   ⑪ KOL · BALKAN-DOGU AVRUPA (CEKIRDEK KRONOLOJI) · 7 Eylul 2026

   OLCUT (13 beyanli dosyayla capraz dogrulandi):
     yolu `kunyeler` iceriyorsa  → KUNYE kronolojisi (devletler.js) · ATLA
     otekiler                    → CEKIRDEK adayi (olaylar*.js)

   MUKERRER IKI YONDE olculur:
     ① CEKIRDEGE karsi  (data/olaylar*.js · girdi._cevir ile, REGEX DEGIL)
     ② ADAYLARIN kendi aralarinda
   Olcut `denetle.py`nin kendi esiginden alinir: MUKERRER_GUN=400,
   MUKERRER_ESIK=0.34 (taklit eden olcum ESIGI de tasir — `§11`).
"""
import json, io, glob, os, re, sys, datetime, difflib
sys.dont_write_bytecode = True
sys.path.insert(0, 'arac')
import girdi

MUKERRER_GUN = 400
MUKERRER_ESIK = 0.34
ALAN_IZI = ('t', 'b')


def madde_mi(o):
    return isinstance(o, dict) and all(k in o for k in ALAN_IZI) \
        and isinstance(o.get('t'), str) and re.match(r'^\d{3,4}-', o['t'])


def gez(x, yol=''):
    if madde_mi(x):
        yield yol, x
        return
    if isinstance(x, dict):
        for k, v in x.items():
            yield from gez(v, yol + '/' + str(k))
    elif isinstance(x, list):
        for i, v in enumerate(x):
            yield from gez(v, yol + '[%d]' % i)


def gun(s):
    s = s if len(s) == 10 else (s + '-01' if len(s) == 7 else s + '-01-01')
    y, m, d = s.split('-')
    return datetime.date(int(y), int(m), int(d)).toordinal()


def benzer(a, b):
    return difflib.SequenceMatcher(None, a or '', b or '').ratio()


# ---------- ① ADAYLARI TOPLA ----------
aday, atlanan = [], []
for f in sorted(glob.glob('denetim/KRONOLOJI-*.json')):
    ad = os.path.basename(f)
    try:
        d = json.load(io.open(f, encoding='utf-8'))
    except Exception as e:
        print('⚠️ %s okunamadi: %s' % (ad, str(e)[:40])); continue
    for yol, o in gez(d):
        if 'kunyeler' in yol:
            atlanan.append((ad, o.get('t')))
            continue
        aday.append({'dosya': ad, 'yol': yol, 'madde': o})

# JS dosyasi — kendi basligi `data/olaylar_ek23.js`i hedefliyor
jsf = 'denetim/KRONOLOJI-ISG-FAZ2-cukurova.js'
js_madde = []
if os.path.exists(jsf):
    js = io.open(jsf, encoding='utf-8', errors='replace').read()
    for mm in re.finditer(r'window\.([A-Z0-9_]+)\s*=', js):
        try:
            v = girdi._cevir(js, mm.group(1))
        except Exception as e:
            print('⚠️ %s cevrilemedi: %s' % (os.path.basename(jsf), str(e)[:50]))
            v = []
        for o in (v if isinstance(v, list) else []):
            if madde_mi(o):
                js_madde.append(o)
                aday.append({'dosya': os.path.basename(jsf), 'yol': '/[]',
                             'madde': o})

print('=== ① TOPLAMA ===')
print('   CEKIRDEK adayi : %d' % len(aday))
print('   ATLANAN (kunye): %d' % len(atlanan))
print('   dosya dagilimi:')
dd = {}
for a in aday:
    dd[a['dosya']] = dd.get(a['dosya'], 0) + 1
for k in sorted(dd, key=lambda z: -dd[z]):
    print('      %-44s %3d' % (k, dd[k]))

# ---------- ② CEKIRDEGI OKU ----------
cek = []
for f in sorted(glob.glob('data/olaylar*.js')):
    src = io.open(f, encoding='utf-8', errors='replace').read()
    for mm in re.finditer(r'window\.([A-Z0-9_]+)\s*=', src):
        try:
            v = girdi._cevir(src, mm.group(1))
        except Exception as e:
            print('⚠️ %s / %s cevrilemedi: %s'
                  % (os.path.basename(f), mm.group(1), str(e)[:40]))
            continue
        for o in (v if isinstance(v, list) else []):
            if isinstance(o, dict) and o.get('t'):
                cek.append((o['t'], o.get('b', ''), os.path.basename(f)))
print()
print('=== ② CEKIRDEK: %d madde · %d dosya ==='
      % (len(cek), len(glob.glob('data/olaylar*.js'))))

# ---------- ③ MUKERRER ----------
print()
print('=== ③ MUKERRER OLCUMU (esik: %d gun · %.2f benzerlik) ==='
      % (MUKERRER_GUN, MUKERRER_ESIK))
cek_mk, aday_mk = [], []
for a in aday:
    m = a['madde']
    ga = gun(m['t'])
    for t, b, dosya in cek:
        try:
            if abs(gun(t) - ga) > MUKERRER_GUN:
                continue
        except Exception:
            continue
        r = benzer(m.get('b'), b)
        if r >= MUKERRER_ESIK:
            cek_mk.append((a, t, b, dosya, r))
for i in range(len(aday)):
    for j in range(i + 1, len(aday)):
        x, y = aday[i]['madde'], aday[j]['madde']
        if abs(gun(x['t']) - gun(y['t'])) > MUKERRER_GUN:
            continue
        r = benzer(x.get('b'), y.get('b'))
        if r >= MUKERRER_ESIK:
            aday_mk.append((aday[i], aday[j], r))

print('   🔴 CEKIRDEKLE mukerrer: %d' % len(cek_mk))
for a, t, b, dosya, r in sorted(cek_mk, key=lambda z: -z[4])[:20]:
    print('      %.2f  %s %-46s' % (r, a['madde']['t'], a['madde']['b'][:46]))
    print('            %s %-46s [%s]' % (t, b[:46], dosya))
print('   🟡 ADAYLAR ARASI mukerrer: %d' % len(aday_mk))
for x, y, r in sorted(aday_mk, key=lambda z: -z[2])[:20]:
    print('      %.2f  %s %-40s [%s]' % (r, x['madde']['t'],
                                          x['madde']['b'][:40], x['dosya'][:22]))
    print('            %s %-40s [%s]' % (y['madde']['t'], y['madde']['b'][:40],
                                          y['dosya'][:22]))

# ---------- ④ GUN HASSASIYETI ----------
print()
print('=== ④ GUN HASSASIYETI (sartname: GUN yaz) ===')
kaba = [a for a in aday if not re.match(r'^\d{4}-\d{2}-\d{2}$', a['madde']['t'])]
ay01 = [a for a in aday if re.match(r'^\d{4}-\d{2}-01$', a['madde']['t'])]
print('   GUN olmayan (YYYY ya da YYYY-MM): %d  %s'
      % (len(kaba), [a['madde']['t'] for a in kaba]))
print('   `YYYY-MM-01` bicimli            : %d  %s'
      % (len(ay01), [a['madde']['t'] for a in ay01]))

json.dump({'aday': aday, 'cekirdek_mukerrer': [
    {'aday': a['madde'], 'dosya': a['dosya'], 'cekirdek_t': t,
     'cekirdek_b': b, 'cekirdek_dosya': dosya, 'benzerlik': round(r, 3)}
    for a, t, b, dosya, r in cek_mk],
    'adaylar_arasi_mukerrer': [
    {'a': x['madde'], 'a_dosya': x['dosya'], 'b': y['madde'],
     'b_dosya': y['dosya'], 'benzerlik': round(r, 3)}
    for x, y, r in aday_mk]},
    io.open('denetim/_ek23_olcum.json', 'w', encoding='utf-8'),
    ensure_ascii=False, indent=1)
print()
print('olcum yazildi: denetim/_ek23_olcum.json')
