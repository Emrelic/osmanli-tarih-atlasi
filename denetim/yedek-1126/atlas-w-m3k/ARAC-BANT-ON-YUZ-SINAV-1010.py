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

# ②b TÂBİ RENGİ TEK OTORİTE (Emre onayı, 11 Ekim 2026: "tabi rengi açıktona bağlansın")
def kod_satirlari(metin):
    return [l for l in metin.splitlines() if not l.lstrip().startswith('//')]
def tabi_tek_otorite(metin):
    kod = kod_satirlari(metin)
    sabit = [l.strip()[:70] for l in kod if '#b2384a' in l.lower()]
    tanim = any(re.match(r'\s*var TABI_RENK = acikTon\("#8e0b22"\);', l) for l in kod)
    kullanim = sum(l.count('TABI_RENK') for l in kod) - (1 if tanim else 0)
    return (not sabit and tanim and kullanim >= 6), sabit, tanim, kullanim
ok, sabit, tanim, kul = tabi_tek_otorite(src)
yaz(ok, 'İLERİ T7_tabi_tek_otorite {"sabit #b2384a kod satırı": %d, "TABI_RENK=acikTon tanımı": %s, "kullanım": %d}'
    % (len(sabit), tanim, kul))
bozuk = src.replace('renk: TABI_RENK };', 'renk: "#b2384a" };', 1)
ok2, sabit2, _, _ = tabi_tek_otorite(bozuk)
yaz(bozuk != src and not ok2, 'TERS [tâbi sabiti bir yerde geri geldi] T7 düştü (sabit %d satır)' % len(sabit2))

# ③ GERİLEME — A yolu, SABİT TABANA göre: 5c45d2c0 = bant işinden ÖNCEKİ son app.js.
#    HEAD'e göre ölçmek commit'ten sonra BOŞ diff verir ve her şeyi geçirir — bu yüzden taban sabit.
#    Satır SATIR değil KATMAN BLOĞU sorulur: ilk sürüm yalnız katman kimliğini taşıyan satıra
#    bakıyordu, `paint:` bir alt satırda olduğu için `osmanli-dolgu`nun RENGİ değişse görmezdi
#    (aşağıdaki TERS sınavı tam bunu sınar).
import difflib
TABAN = '5c45d2c0'
eski = subprocess.run(['git', '-C', KOK, 'show', TABAN + ':js/app.js'], capture_output=True, text=True,
                      encoding='utf-8').stdout
# 🔴 BEYANLI MUAFİYET — tâbi dolgu/şerit rengi HARİÇ (Emre onayı 11 Ekim 2026). A BİLEREK
#    değişiyor: #b2384a → TABI_RENK (#a53c4e). Muaf satır = #b2384a ya da TABI_RENK taşıyan
#    satır; SAYILIR ve basılır (sessiz muafiyet perdedir, §3.4 ⑥).
def tabi_muaf(l):
    return '#b2384a' in l.lower() or 'TABI_RENK' in l
def blok(metin, bas_desen, son_desen):
    i = metin.find(bas_desen); j = metin.find(son_desen, i + 1)
    return metin[i:j] if i >= 0 and j > i else ''
# İzinli bölge (tabanda): ufukGuncelle gövdesi + ufuk-bant-alan katmanının boyası
IZINLI = blok(eski, 'function ufukGuncelle(', 'function ufukSecimEsitle(') + \
         blok(eski, 'harita.addSource("ufuk-bant"', 'harita.addLayer({ id: "devlet-cizgi"')
A_KATMAN = ['devlet-dolgu', 'osmanli-dolgu', 'vassal-dolgu', 'vassal-serit-dis', 'himaye-dolgu', 'devlet-cizgi',
            'osmanli-cizgi']
def katman_araliklari(satirlar):
    # her A katmanı için `harita.addLayer({ id: "<ad>"` satırından `});` ile biten satıra kadar
    ar = {}
    for i, l in enumerate(satirlar):
        m = re.search(r'addLayer\(\{ id: "([a-z-]+)"', l)
        if m and m.group(1) in A_KATMAN:
            j = i
            while j < len(satirlar) and '});' not in satirlar[j]:
                j += 1
            ar[m.group(1)] = (i, j)
    return ar
def gerileme(yeni):
    a, b = eski.splitlines(), yeni.splitlines()
    ar = katman_araliklari(a)
    degisen_eski = []   # (eski satır no, metin) — silinen/değişen
    for op, i1, i2, j1, j2 in difflib.SequenceMatcher(None, a, b, autojunk=False).get_opcodes():
        if op in ('replace', 'delete'):
            degisen_eski += [(k, a[k]) for k in range(i1, i2)]
    katmanda = [(k, t) for k, t in degisen_eski if any(s <= k <= e for s, e in ar.values())]
    muaf_k = [x for x in katmanda if tabi_muaf(x[1])]
    ihlal_k = [x for x in katmanda if not tabi_muaf(x[1])]
    muaf_s = [x for x in degisen_eski if tabi_muaf(x[1])]
    yabanci = [x for x in degisen_eski if not tabi_muaf(x[1]) and x[1].strip() not in IZINLI]
    return ar, ihlal_k, muaf_k, degisen_eski, muaf_s, yabanci
ar, ihlal_k, muaf_k, degisen, muaf_s, yabanci = gerileme(src)
yaz(len(ar) == len(A_KATMAN), 'GERİLEME A katman blokları tabanda bulundu: %d/%d %s' % (len(ar), len(A_KATMAN), sorted(ar)))
yaz(not ihlal_k, 'GERİLEME A katman bloklarında değişen satır %d · tâbi rengi HARİÇ — Emre onayı 11 Ekim 2026: muaf %d satır%s'
    % (len(ihlal_k), len(muaf_k), (' — ' + ' | '.join(t.strip()[:60] for _, t in ihlal_k[:3])) if ihlal_k else ''))
sonuc.append('ℹ MUAF (tâbi rengi, beyanlı) tabana göre değişen %d satır: %s'
             % (len(muaf_s), ' | '.join(t.strip()[:48] for _, t in muaf_s)))
yaz(not yabanci, 'GERİLEME tabana göre değişen %d satırın hepsi bant/renk bloğunda ya da tâbi muafiyetinde (yabancı %d)%s'
    % (len(degisen), len(yabanci), (' — ' + ' | '.join(t.strip()[:60] for _, t in yabanci[:3])) if yabanci else ''))
# TERS — muafiyet ÖTEKİ A değişikliklerini yutmamalı
b1 = src.replace('paint: { "fill-color": "#8e0b22", "fill-opacity": 1 } });\n  // Petek modunda',
                 'paint: { "fill-color": "#8e0b23", "fill-opacity": 1 } });\n  // Petek modunda', 1)
_, ih1, _, _, _, _ = gerileme(b1)
yaz(b1 != src and len(ih1) > 0, 'TERS [osmanli-dolgu rengi değişti] A katman maddesi düştü (%d satır)' % len(ih1))
b2 = src.replace('function aktifAralik(', 'function aktifAralik_(', 1)
_, _, _, _, _, yb2 = gerileme(b2)
yaz(b2 != src and len(yb2) > 0, 'TERS [bant dışı bir satır değişti] "yabancı satır" maddesi düştü (%d satır)' % len(yb2))

sinav = [s for s in sonuc if s[:1] in '✓✗']
print('\n'.join(sonuc))
print('SONUÇ: %s · %d sınav, %d kusur' % ('GEÇTİ' if not kotu else 'KALDI', len(sinav), kotu))
sys.exit(1 if kotu else 0)
