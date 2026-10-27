"""DOĞU entegrasyon döngüsü — baştan, tekrarlanabilir.

  py denetim/dogu/dongu.py <küme> [<küme> ...] [--paketle]

Adımlar: git checkout (data/ index.html girdi_listesi) → birlestir --yaz → baglama --yaz → yama_uygula --yaz →
kunye_olc → kunye_duzelt --yaz → mukerrer_olc → (--paketle: paketle yenile + surum_damgala).
UYARI: tracked data/ dosyalarındaki ELLE değişiklikleri siler (git checkout --). Yalnız bu döngünün ürettiği değişiklik beklenir.
"""
import os, subprocess, sys, io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
KOK = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
D = os.path.join(KOK, 'denetim', 'dogu')
args = [a for a in sys.argv[1:] if not a.startswith('--')]
paketle = '--paketle' in sys.argv
if not args:
    print(__doc__); sys.exit(2)


def kos(komut, cikti=None, ok=(0,)):
    print('>>', ' '.join(komut))
    if cikti:
        with open(cikti, 'w', encoding='utf-8', errors='replace') as f:
            r = subprocess.run(komut, cwd=KOK, stdout=f, stderr=subprocess.PIPE, text=True, encoding='utf-8', errors='replace')
        if r.stderr.strip():
            print(r.stderr.strip()[-600:])
    else:
        r = subprocess.run(komut, cwd=KOK, capture_output=True, text=True, encoding='utf-8', errors='replace')
        print((r.stdout or '').strip()[-1500:])
        if r.stderr.strip():
            print(r.stderr.strip()[-600:])
    if r.returncode not in ok:
        print('!! çıkış', r.returncode); sys.exit(r.returncode)
    return r


os.makedirs(os.path.join(D, '_log'), exist_ok=True)
# TABAN = origin/main (kendi commit'imizdeki yamalı hâl DEĞİL): yamalar her döngüde temiz tabana uygulanır
kos(['git', 'fetch', 'origin', '--quiet'])
kos(['git', 'checkout', 'origin/main', '--', 'data', 'index.html', 'arac/girdi_listesi.py'])
kos(['py', '-I', 'denetim/dogu/girdi_yaz.py'])
kos(['node', 'denetim/dogu/yerindeks.js', '.', 'denetim/dogu/_log/yer_indeks_taban.json'])
kos(['node', 'denetim/dogu/birlestir.js', '--yaz'] + args)
kos(['py', '-I', 'denetim/dogu/baglama.py', '--yaz'])
kos(['py', '-I', 'denetim/dogu/girdi_yaz.py'])
kos(['py', '-I', 'denetim/dogu/yama_uygula.py', '--bosluk', os.path.join(D, '_log', 'bosluk_ilk.json')], cikti=os.path.join(D, '_log', 'yama_kuru.txt'), ok=(0, 1))
kos(['py', '-I', 'denetim/dogu/yama_uygula.py', '--yaz'], cikti=os.path.join(D, '_log', 'yama_son.txt'), ok=(0, 1))
print(''.join(l for l in open(os.path.join(D, '_log', 'yama_son.txt'), encoding='utf-8', errors='replace') if l.startswith('yama grubu')))
kos(['node', 'denetim/dogu/kunye_olc.js'], cikti=os.path.join(D, '_log', 'kunye_asim.json'))
kos(['node', 'denetim/dogu/kunye_duzelt.js', '--yaz'])
kos(['node', 'denetim/dogu/mukerrer_olc.js', '--istisna'])
if paketle:
    kos(['py', 'arac/paketle.py', 'yenile'])
    kos(['py', 'arac/surum_damgala.py'])
