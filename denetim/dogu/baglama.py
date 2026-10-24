"""DOĞU dosyalarını index.html ve arac/girdi_listesi.py'ye bağlar (idempotent).

  py denetim/dogu/baglama.py          # kuru: ne yapılacağını söyler
  py denetim/dogu/baglama.py --yaz
"""
import os, re, sys, io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
KOK = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
YAZ = '--yaz' in sys.argv

IDX = os.path.join(KOK, 'index.html')
GL = os.path.join(KOK, 'arac', 'girdi_listesi.py')

# (eklenecek dosya, hangi satırdan SONRA — o satırı içeren alt dize)
ETIKETLER = [
    ('kronoloji_sinir_dogu_500_1281.js', 'kronoloji_sinir_once1281_geriye.js'),
    ('yerlesimler_dogu_500_1281.js', 'yerlesimler_once1281_avrupa.js'),
    ('kronoloji_cok_dogu_500_1281.js', 'kronoloji_cok_once1281_amerika2.js'),
]


def main():
    idx = open(IDX, encoding='utf-8', newline='').read()
    degisti = False
    for dosya, sonra in ETIKETLER:
        if 'data/' + dosya in idx:
            print('index.html: zaten var:', dosya)
            continue
        nl = '\r\n' if '\r\n' in idx else '\n'
        m = re.search(r'<script src="data/' + re.escape(sonra) + r'[^"]*"></script>' + nl, idx)
        if not m:
            print('index.html: ÇAPA YOK:', sonra); sys.exit(2)
        ek = '<script src="data/%s?v=r1"></script>%s' % (dosya, nl)
        idx = idx[:m.end()] + ek + idx[m.end():]
        degisti = True
        print('index.html: eklenecek:', dosya, 'sonrasına', sonra)
    if YAZ and degisti:
        open(IDX, 'w', encoding='utf-8', newline='').write(idx)
    gl = open(GL, encoding='utf-8', newline='').read()
    ad = 'yerlesimler_dogu_500_1281.js'
    if ad in gl:
        print('girdi_listesi.py: zaten var')
    else:
        son = gl.rstrip().rfind(']')
        nl2 = '\r\n' if '\r\n' in gl else '\n'
        ek = '    # DOGU-500-1281 (22 Ekim 2026) - doğu yarıküre 500-1281 yeni yerleşimler' + nl2 + '    "%s",' % ad + nl2
        gl2 = gl[:son] + ek + gl[son:]
        print('girdi_listesi.py: eklenecek')
        if YAZ:
            open(GL, 'w', encoding='utf-8', newline='').write(gl2)


main()
