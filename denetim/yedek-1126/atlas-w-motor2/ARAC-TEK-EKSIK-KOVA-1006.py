# -*- coding: utf-8 -*-
"""TEK-EKSIK-KOVA-1006 — 2sk gün-hassas TEK-EKSİK kovaları listeler. SALT OKUR.

denetle.degismez2'yi ana akıştaki 2s çağrısıyla AYNI biçimde çağırır
(Y_cekirdek, O, ("s",), yer_sarti=True) ve `eksik` uzunluğu 1 olan,
YYYY-01-01 OLMAYAN kovaları basar. Hiçbir dosyaya yazmaz.
"""
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import denetle as D  # noqa: E402

Y = D.yerlesimleri_yukle()
O = D.olaylari_yukle()
Yc = [y for y in Y if y.get("_kaynak") not in D.KUYRUK_DOSYALARI]
kir, acik = D.degismez2(Yc, O, ("s",), yer_sarti=True)
acik_gun = {a[0] for a in acik}
satir = 0
for d in sorted(kir):
    k = kir[d]
    eks = k.get("eksik") or []
    if len(eks) != 1 or d[4:] == "-01-01":
        continue
    ad = eks[0]
    s = k["sahip"].get(ad, {})
    yk = next((y for y in Yc if y["ad"] == ad), {})
    satir += 1
    print(f"{d}  kova={len(k['ad'])}  eksik={ad}  {s.get('eski')}->{s.get('yeni')}  "
          f"dosya={yk.get('_kaynak')}  lat={yk.get('lat')} lon={yk.get('lon')}  "
          f"acik_listede={d in acik_gun}")
print("TOPLAM gün-hassas tek-eksik kova:", satir)
