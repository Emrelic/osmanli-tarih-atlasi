# HARITA-ON-YUZ-1010 — bant katmanı + B anahtarı ön yüz sınavı, İKİ YÖNDE.
#   py denetim/ARAC-BANT-ON-YUZ-SINAV-1010.py        çıkış 0 = hepsi doğru yönde
# İleri yön: bugünkü js/app.js'te T1-T6 GEÇMELİ.
# Ters yön : app.js'in bilerek BOZULMUŞ kopyalarında ilgili sınav KALMALI
#            (ötmeyen sınav sınav değildir).
# Gerileme : A (5 gün) yolu — `git diff HEAD -- js/app.js` yalnız bant bloklarına
#            ve acikTon bloğuna dokunmuş olmalı (A'yı çizen hiçbir satır değil).
import json, os, re, subprocess, sys, tempfile
try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP = os.path.join(KOK, 'js', 'app.js')
JS = os.path.join(KOK, 'denetim', 'ARAC-BANT-ON-YUZ-SINAV-1010.js')
src = open(APP, encoding='utf-8').read()

def kos(yol):
    p = subprocess.run(['node', JS, yol], capture_output=True, text=True, encoding='utf-8')
    if p.returncode != 0:
        return {'_COKTU': {'ok': False, 'hata': p.stderr[-400:]}}
    return json.loads(p.stdout)

sonuc, kotu = [], 0
def yaz(ok, metin):
    global kotu
    sonuc.append(('✓' if ok else '✗') + ' ' + metin)
    if not ok:
        kotu += 1

# ① İLERİ
S = kos(APP)
for ad, r in S.items():
    yaz(r['ok'], 'İLERİ %s %s' % (ad, json.dumps({k: v for k, v in r.items() if k != 'ok'}, ensure_ascii=False)))

# ② TERS — her bozulma, adıyla beklenen sınavı düşürmeli
BOZ = [
    ('ACIK_TON_KAT=0 (renk açılmaz)', r'^var ACIK_TON_KAT = .*$', 'var ACIK_TON_KAT = 0;', ['T2_7_yalniz_secili_bant_acik_renk']),
    ('eski seçim: <=7 ve <=10 birlikte', r'if \(k !== secili\) continue;', 'if (b.gun <= 5 || b.gun > ufukGun) continue;', ['T3_10_yalniz_secili_bant_acik_renk']),
    ('A kısayolu kalktı (5te de bant dosyası iner)', r'if \(istenen <= 5\) \{ uygula\(true\); return; \}', '', ['T1_A_cizilmez_indirilmez']),
    ('dosya yok sessiz (hata yazılmaz)', r'ufukHata = "yok";', '', ['T4_bant_dosyasi_yok_beyanli']),
    ('B kapısı sessiz', r'dk\.disabled = true;', '', ['T5_dolgu_yok_B_beyanli']),
]
for ad, desen, yeni, beklenen in BOZ:
    b, n = re.subn(desen, yeni, src, count=1, flags=re.M)
    if n != 1:
        yaz(False, 'TERS [%s] desen bulunamadı — bozulma UYGULANAMADI' % ad)
        continue
    with tempfile.NamedTemporaryFile('w', suffix='.js', delete=False, encoding='utf-8') as f:
        f.write(b); yol = f.name
    R = kos(yol); os.unlink(yol)
    dusen = sorted(k for k, v in R.items() if not v['ok'])
    yaz(all(k in dusen for k in beklenen), 'TERS [%s] düşen: %s (beklenen %s)' % (ad, dusen, beklenen))

# ③ GERİLEME — A yolu: değişen satırlar yalnız izinli bloklarda mı?
d = subprocess.run(['git', '-C', KOK, 'diff', '-U0', 'HEAD', '--', 'js/app.js'],
                   capture_output=True, text=True, encoding='utf-8').stdout
eski = subprocess.run(['git', '-C', KOK, 'show', 'HEAD:js/app.js'], capture_output=True, text=True,
                      encoding='utf-8').stdout
def blok(metin, bas_desen, son_desen):
    i = metin.find(bas_desen); j = metin.find(son_desen, i + 1)
    return metin[i:j] if i >= 0 and j > i else ''
# İzinli bölge (HEAD'de): ufukGuncelle gövdesi + ufuk-bant-alan katmanının boyası
IZINLI = blok(eski, 'function ufukGuncelle(', 'function ufukSecimEsitle(') + \
         blok(eski, 'harita.addSource("ufuk-bant"', 'harita.addLayer({ id: "devlet-cizgi"')
govde = [l[1:] for l in d.splitlines() if l[:1] in '+-' and not l.startswith(('+++', '---'))]
# A'yı çizen katmanların boyası DEĞİŞMEMİŞ olmalı
A_KATMAN = ['"devlet-dolgu", type', '"osmanli-dolgu"', '"vassal-dolgu"', '"himaye-dolgu"', '"devlet-cizgi"']
dokunan = [l for l in govde if any(k in l for k in A_KATMAN)]
yaz(not dokunan, 'GERİLEME A katman boyası dokunulmamış (%d satır)' % len(dokunan))
silinen = [l for l in d.splitlines() if l.startswith('-') and not l.startswith('---')]
yabanci = [l for l in silinen if not IZINLI or l[1:].strip() not in IZINLI]
yaz(not yabanci, 'GERİLEME silinen satırların hepsi bant/renk bloğunda (%d silinen, yabancı %d)%s'
    % (len(silinen), len(yabanci), (' — ' + ' | '.join(x.strip()[:60] for x in yabanci[:3])) if yabanci else ''))

print('\n'.join(sonuc))
print('SONUÇ: %s · %d sınav, %d kusur' % ('GEÇTİ' if not kotu else 'KALDI', len(sonuc), kotu))
sys.exit(1 if kotu else 0)
