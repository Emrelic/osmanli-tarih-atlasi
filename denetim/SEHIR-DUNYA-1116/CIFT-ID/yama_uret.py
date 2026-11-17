# -*- coding: utf-8 -*-
"""12 aynı-id çift için öneri TSV + yama JSON (KASA uygular). Kalan kayıt: tanık kalitesi + kapsam; diğerinin eksik olayları/sahip dönemleri kalana taşınır.
Yama simülasyonu: taşınmış kayıt arac/sehir_tarihce.denetle_kayitlar ile sınanır (ihlal 0 şartı)."""
import copy, csv, io, json, os, re, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
sys.path.insert(0, 'arac')
import sehir_tarihce as st
D = 'denetim/SEHIR-DUNYA-1116/CIFT-ID/'
T = json.load(open(D + 'cift_tam.json', encoding='utf-8'))
def g(t):
    try: return st.gun_no(t)
    except Exception: return None
def kel(s): return {w for w in re.findall(r'\w{5,}', (s or '').lower())}
def ayni(o, p):
    ta, tb = g(o.get('t')), g(p.get('t'))
    if ta is None or tb is None: return False
    d = abs(ta - tb)
    return d <= 30 or (d <= 400 and len(kel(o.get('b')) & kel(p.get('b'))) >= 2)
# karar: id -> (kalan 'a'|'b', neden, elle çıkarılacak olay tarihleri [kopya: farklı hassasiyet])
KARAR = {
 'aleppo': ('a', 'iki kayıt özdeş (47 dönem/52 olay); k3_g1 30 olayda birebir tanık taşır, osm 0. Yalnız fark: Zengî ölümü 1146-09-14 (k3_g1, tanıklı; tarihte 14 Eylül 1146) vs 1146-06-13 (osm) → k3_g1 değeri kalır', []),
 'alexandria': ('a', 'k3_g1 16 olayda tanıklı; osm 3 olay + 2 sahip dönemi (Eyyûbî 1171-1250, Memlûk 1250-1281) fazla → kalana taşınır', []),
 'ankara': ('a', 'olaylar özdeş; k3_g1 10 tanıklı olay; osm 1 ek sahip dönemi (Danişmendli 1127-1134) → taşınır', []),
 'cairo': ('b', 'k3_g1 yalnız 1 olay/0 sahip; osm 3 dönem + 8 olay (k3_g1 olayı osm\'de var) → osm kalır, k3_g1 düşer', []),
 'damascus': ('a', 'k3_g1 16 tanıklı olay; osm 14 olay + 8 sahip dönemi (Atsız…Eyyûbî-Halep 1075-1260) fazla → taşınır', []),
 'istanbul': ('a', 'iki kayıt özdeş; k3_g1 tanıklı olay 2, osm 0 → k3_g1 kalır', []),
 'jerusalem': ('a', 'k3_g1 19 tanıklı olay; osm 2 olay + 3 sahip dönemi (Memlûk/Eyyûbî-Halep 1253-1281) fazla → taşınır', []),
 'konya': ('a', 'iki kayıt özdeş; k3_g1 5 tanıklı olay, osm 0 → k3_g1 kalır', []),
 'thessaloniki': ('a', 'k3_g1 tanıklı; osm 2 olay + 2 sahip dönemi (İznik 1246-1261, Bizans 1261-1281) fazla → taşınır', []),
 'rabat-ma': ('b', 'k3: ilk 1150-04-30 (gün) + 2 tanıklı olay; magrip: ilk 1150 yıl, tanıkta şehir adı yok (UMIT beyanı), olaylar TDV tabanlı → k3 kalır, magrip\'in 7 TDV olayı taşınır', []),
 'tanca-ma': ('b', 'k3: 13 sahip dönemi + 16 tanıklı olay, ilk MÖ 814 (TDV Fenike kuruluşu); magrip: sahip yok, olaylar TDV tabanlı, ilk 0079 Plinius (yıl yok) → k3 kalır, magrip\'in yalnız-ona-ait olayları taşınır', ['1147-01-01']),
 'susa': (None, 'AYNI id AYNI YER DEĞİL: arkeoloji d2-iran-orta-asya "Susa" (Elam, MÖ 3999) ≠ k12 "Şuşa" (Karabağ, 1750). Birleştirme YOK; k12 kaydı id\'si "susa" → "susa-karabag" yeniden adlandırılır', []),
}
yamalar = []; tsv = []
for id, v in T.items():
    kal, neden, haric = KARAR[id]
    fa, fb = v['dosyalar']
    if kal is None:
        yamalar.append({'id': id, 'islem': 'id_yeniden_adlandir', 'dosya': 'sehir_tarihce_k12.js', 'eski_id': 'susa', 'yeni_id': 'susa-karabag', 'neden': neden})
        tsv.append([id, fa + ' ↔ ' + fb, 'İKİSİ DE KALIR (id çakışması)', neden, 0, 0, 'k12: id→susa-karabag'])
        continue
    A, B = (v['a'], v['b']) if kal == 'a' else (v['b'], v['a'])
    fk, fd = (fa, fb) if kal == 'a' else (fb, fa)
    olay_k, olay_d = A.get('olay') or [], B.get('olay') or []
    tasi = [o for o in olay_d if not any(ayni(o, p) for p in olay_k) and not any(str(o.get('t')) == h for h in haric)]
    sk, sd = A.get('sahip') or [], B.get('sahip') or []
    # ATLAS SINIRI: kalan kaydın zinciri atlas dikişinde biter ("o günden sonrasına bu dosya KARIŞMAZ", VERI-YAPISI 990); sınırdan sonrası taşınmaz
    son_t = sk[-1]['t'] if sk else None
    atlas_sonrasi = [o for o in tasi if son_t and g(o['t']) is not None and g(o['t']) > g(son_t)]
    tasi = [o for o in tasi if o not in atlas_sonrasi]
    k = 0
    while k < min(len(sk), len(sd)) and (sk[k]['f'], sk[k]['d']) == (sd[k]['f'], sd[k]['d']): k += 1
    sahip_tasi = []   # sahip dönemleri TAŞINMAZ: atlas dikişi esastır; öteki kaydın sınır-sonrası dönemleri 'atlas_sonrasi' olarak raporlanır
    sahip_atlas_sonrasi = sd[k:] if (k == len(sk) and k < len(sd) and sk) else []
    # simülasyon
    X = copy.deepcopy(A)
    X['olay'] = sorted((X.get('olay') or []) + copy.deepcopy(tasi), key=lambda o: g(o.get('t')) or 0)
    if not sk and sd:                       # kalanın zinciri boşsa (Cairo-k3_g1 değil osm kalır; k3/magrip boş-boş) öteki zincir olduğu gibi gelir
        X['sahip'] = copy.deepcopy(sd)
    tmp = os.environ.get('TEMP', '.'); import subprocess
    json.dump([X], open(os.path.join(tmp, 'cift_sim.json'), 'w', encoding='utf-8'), ensure_ascii=False)
    if os.path.exists(os.path.join(tmp, 'cift_sim.js')): os.remove(os.path.join(tmp, 'cift_sim.js'))
    ry = subprocess.run(['py', 'arac/sehir_tarihce.py', 'yaz', os.path.join(tmp, 'cift_sim.json'), os.path.join(tmp, 'cift_sim.js'), 'SIM'], capture_output=True, text=True, encoding='utf-8')
    ihlal = [l.strip() for l in (ry.stdout or '').splitlines() if 'İHLAL' in l]
    if os.path.exists(os.path.join(tmp, 'cift_sim.js')):
        r = subprocess.run(['py', 'arac/sehir_tarihce.py', 'denetle', os.path.join(tmp, 'cift_sim.js')], capture_output=True, text=True, encoding='utf-8')
        sonuc = (r.stdout.strip().splitlines() or [''])[-1]
    else:
        # yerel ağaç origin/main'in atlas verisinin gerisinde: DEĞİŞTİRİLMEMİŞ kalan kayıt bile aynı atlas-başlangıç ihlallerini verir → simülasyon GEÇERSİZ (ölçülemedi ≠ temiz)
        sonuc = 'ÖLÇÜLEMEDİ (yerel atlas main\'in gerisinde; kalan kayıt değişmeden de aynı ihlali veriyor; KASA main ağacında denetle ile ölç)'
        ihlal = []
    yamalar.append({'id': id, 'islem': 'birlestir', 'kalan_dosya': fk, 'dusen_dosya': fd, 'neden': neden, 'tasinan_olay': tasi, 'tasinan_sahip': [], 'atlas_sonrasi_olay_tasinmadi': atlas_sonrasi, 'atlas_sonrasi_sahip_tasinmadi': sahip_atlas_sonrasi, 'simulasyon': sonuc, 'simulasyon_ihlal': ihlal})
    tsv.append([id, fa + ' ↔ ' + fb, 'KALAN: ' + fk + ' · DÜŞEN: ' + fd, neden, len(tasi), len(sahip_atlas_sonrasi), 'sim: ' + sonuc + ' | atlas-sonrası taşınmayan olay ' + str(len(atlas_sonrasi)) + ' sahip ' + str(len(sahip_atlas_sonrasi)) + (' | ' + '; '.join(ihlal)[:200] if ihlal else '')])
json.dump(yamalar, open(D + 'yama_cift_id.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
with open(D + 'CIFT-ID-ONERI.tsv', 'w', encoding='utf-8', newline='') as f:
    w = csv.writer(f, delimiter='\t'); w.writerow(['id', 'cift', 'karar', 'neden', 'tasinan_olay', 'tasinan_sahip_donemi', 'simulasyon']); w.writerows(tsv)
for r in tsv: print(r[0], '|', r[2], '| olay', r[4], 'sahip', r[5], '|', r[6])
