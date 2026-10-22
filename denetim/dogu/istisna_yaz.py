"""mukerrer_olc.js --istisna çıktısını (denetim/dogu/_log/istisna.json) arac/denetle.py BILINEN_AYRI bloğuna yazar (idempotent).

Her çift TEK TEK okundu (22 Ekim 2026, DOGU-500-1281): ortak olan yalnız şablon ('X: sahip Song → Jin', 'egemenliği başladı',
'Cumhuriyet ilan edildi'...) ya da aynı büyük olayın AYRI YERE düşen kaydı; yerler ve/veya günler farklı. Değişmez 2 her yere
ayrı madde ister ⇒ birleştirilemez (aynı gün + aynı taraf olanlar birlestir.js'te zaten TEK madde yapıldı).
"""
import io, json, os, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
KOK = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
yol = os.path.join(KOK, 'arac', 'denetle.py')
s = open(yol, encoding='utf-8', newline='').read()
nl = '\r\n' if '\r\n' in s else '\n'
BAS = '    # ==== DOGU-500-1281 BILINEN_AYRI BAŞI (denetim/dogu/istisna_yaz.py üretir; elle düzenleme) ====' + nl
SON = '    # ==== DOGU-500-1281 BILINEN_AYRI SONU ====' + nl
a, b = s.find(BAS), s.find(SON)
if a >= 0 and b > a:
    s = s[:a] + s[b + len(SON):]
cift = json.load(open(os.path.join(KOK, 'denetim', 'dogu', '_log', 'istisna.json'), encoding='utf-8'))
gor, satir = set(), []
for b1, b2, t1, t2, olcut in cift:
    k = tuple(sorted((b1, b2)))
    if k in gor:
        continue
    gor.add(k)
    satir.append('    (%r, %r),%s' % (b1, b2, nl))
blok = BAS + ('    # %d çift: DOĞU 500-1281 — aynı şablon/olay, AYRI yer ve/veya AYRI gün (her çift okundu; istisna_yaz.py docstring).%s' % (len(satir), nl)) + ''.join(satir) + SON
hedef = 'BILINEN_AYRI = {' + nl
i = s.find(hedef)
if i < 0:
    print('BILINEN_AYRI = { bulunamadı'); sys.exit(2)
s = s[:i + len(hedef)] + blok + s[i + len(hedef):]
open(yol, 'w', encoding='utf-8', newline='').write(s)
print('istisna yazıldı:', len(satir))
