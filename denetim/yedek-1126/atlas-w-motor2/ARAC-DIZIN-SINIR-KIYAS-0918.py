"""
ARAC-DIZIN-SINIR-KIYAS-0918 — `data/sinir_sinif_dizini.js` ile kaynağı KAYIT KAYIT kıyaslar.

Kaynak : bütün `data/d_sinirlar*.js` dosyaları (glob — dosya listesi elle tutulmaz)
Dizin  : `data/sinir_sinif_dizini.js` (üretici: `denetim/ARAC-SINIF-DIZINI-0916.py --yaz`)

Sorduğu üç soru:
  ① Kimlik kümesi aynı mı?   (yalnız kaynakta / yalnız dizinde / mükerrer id → İHLAL)
  ② Sınıf aynı mı?            (kaynağın KENDİ `sinif` alanı ↔ dizinin `sinif` alanı)
  ③ A-F sayımı tutuyor mu?    (iki taraf ayrı ayrı sayılır, yan yana basılır)

Tek meşru fark: üreticinin `sinif_kaynak:"turetildi"` damgasıyla E → F yaptığı kayıtlar
(kural: kaydın KENDİ f tarihinde iki taraf da Milletler Cemiyeti üyesi). Bunlar SAYILIR ve
listelenir ama ihlal sayılmaz. Başka her fark ihlaldir.

Neden var (18 Eylül 2026, ISGAL-1787, tahta M-4493): dizin 448 kayıtta BAYAT kalmıştı,
kaynak 723'tü. Üretici glob ile doğru dosyaları okuyordu — bayatlık ALETTE değil,
alet yeniden KOŞTURULMADIĞI içindi. Bu betik o durumu bir sonraki sefer SAYIYLA söyler.

Kullanım:
    py denetim/ARAC-DIZIN-SINIR-KIYAS-0918.py          # rapor; ihlal varsa çıkış kodu 1
"""
import collections
import json
import subprocess
import sys

sys.stdout.reconfigure(encoding='utf-8')

JS_OKU = r"""
const fs = require('fs');
const kaynak = [], dizin = [];
for (const f of fs.readdirSync('data').filter(f => /^d_sinirlar.*\.js$/.test(f)).sort()) {
  global.window = {};
  eval(fs.readFileSync('data/' + f, 'utf8'));
  for (const k of Object.keys(window))
    if (Array.isArray(window[k]))
      for (const r of window[k]) if (r && typeof r === 'object') kaynak.push({ id: r.id, sinif: r.sinif, dosya: f });
}
global.window = {};
eval(fs.readFileSync('data/sinir_sinif_dizini.js', 'utf8'));
for (const r of (window.SINIR_SINIF_DIZINI || []))
  dizin.push({ id: r.id, sinif: r.sinif, sinif_kaynak: r.sinif_kaynak });
process.stdout.write(JSON.stringify({ kaynak, dizin }));
"""


def main():
    cikti = subprocess.run(['node', '-e', JS_OKU], capture_output=True, text=True, encoding='utf-8')
    if cikti.returncode != 0:
        # Çökmek, yanlış bir "temiz" basmaktan iyidir.
        print('✗ node okuyamadı:', cikti.stderr[-400:])
        return 2
    veri = json.loads(cikti.stdout)
    kaynak, dizin = veri['kaynak'], veri['dizin']
    ihlal = 0

    # ① kimlik kümesi
    k_id = collections.Counter(r['id'] for r in kaynak)
    d_id = collections.Counter(r['id'] for r in dizin)
    mukerrer_k = [i for i, n in k_id.items() if n > 1]
    mukerrer_d = [i for i, n in d_id.items() if n > 1]
    yalniz_k = sorted(set(k_id) - set(d_id))
    yalniz_d = sorted(set(d_id) - set(k_id))
    print(f'① kayıt   kaynak {len(kaynak)} · dizin {len(dizin)} · '
          f'yalnız kaynakta {len(yalniz_k)} · yalnız dizinde {len(yalniz_d)} · '
          f'mükerrer id kaynak {len(mukerrer_k)} / dizin {len(mukerrer_d)}')
    for etiket, liste in (('yalnız kaynakta', yalniz_k), ('yalnız dizinde', yalniz_d),
                          ('mükerrer (kaynak)', mukerrer_k), ('mükerrer (dizin)', mukerrer_d)):
        if liste:
            ihlal += len(liste)
            print(f'   ✗ {etiket}: {", ".join(liste[:10])}{" …" if len(liste) > 10 else ""}')

    # ② kayıt kayıt sınıf
    K = {r['id']: r for r in kaynak}
    turetilen, farkli = [], []
    for r in dizin:
        k = K.get(r['id'])
        if not k or k['sinif'] == r['sinif']:
            continue
        if k['sinif'] == 'E' and r['sinif'] == 'F' and r.get('sinif_kaynak') == 'turetildi':
            turetilen.append(r['id'])
        else:
            farkli.append((r['id'], k['sinif'], r['sinif'], r.get('sinif_kaynak')))
    print(f'② sınıf   aynı {len(dizin) - len(turetilen) - len(farkli)} · '
          f'meşru E→F türetme {len(turetilen)} · İHLAL {len(farkli)}')
    for i in turetilen:
        print(f'   i E→F (türetildi): {i}')
    for f in farkli[:20]:
        print(f'   ✗ {f[0]}: kaynak {f[1]} ↔ dizin {f[2]} ({f[3]})')
    ihlal += len(farkli)

    # ③ A-F sayımı yan yana
    ks = collections.Counter(r['sinif'] for r in kaynak)
    ds = collections.Counter(r['sinif'] for r in dizin)
    print('③ sayım   sınıf  kaynak  dizin')
    sirali = ['A', 'B', 'C', 'D', 'E', 'F', 'YOK']
    # Parantez şart: `-`, `|`'den önce bağlanır; yoksa bilinen sınıflar iki kez basılır.
    for s in sirali + sorted((set(ks) | set(ds)) - set(sirali), key=str):
        if ks.get(s) or ds.get(s):
            not_ = ''
            if s in ('E', 'F') and ks.get('E', 0) == ds.get('E', 0) + ds.get('F', 0) - ks.get('F', 0):
                not_ = '  (E+F toplamı tutuyor)'
            print(f'          {s:5s} {ks.get(s, 0):6d} {ds.get(s, 0):6d}{not_}')

    print('\nSONUÇ:', 'temiz' if ihlal == 0 else f'{ihlal} İHLAL — dizini yeniden üret: '
          'py denetim/ARAC-SINIF-DIZINI-0916.py --yaz')
    return 0 if ihlal == 0 else 1


if __name__ == '__main__':
    sys.exit(main())
