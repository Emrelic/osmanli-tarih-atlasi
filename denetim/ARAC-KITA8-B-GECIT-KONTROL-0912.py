# -*- coding: utf-8 -*-
"""GEÇİT SINAVINA KONTROL DEĞİŞKENİ — %60 bir SONUÇ mu, yoksa TABAN mı?

Sınav "kesişin eğimi bileşenin dağılımında %60. yüzdelikte" dedi ve ben
`🔴 GEÇİT ETKİSİ YOK` bastım. Ama %60'ın ANLAMLI olması için ENGELSİZ
hâlin kaç olduğunu bilmek gerekir: engelsiz hâl de %60 ise sayı engel
hakkında HİÇBİR ŞEY söylemiyor demektir (D132 — kontrol değişkeni).
"""
import os
import sys
import numpy as np

BURA = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, BURA)
sys.stdout.reconfigure(encoding="utf-8")
import tasma_prototip as P                                          # noqa: E402
import tasma_engel2 as E                                            # noqa: E402

d = np.load(os.path.join(BURA, "_tasma.npz"), allow_pickle=True)
nx, ny = int(d["nx"]), int(d["ny"])
kara, surt, z, pts = d["kara"], d["surt"], d["z"], d["pts"]
s_egim, s_duz, vor = d["s_egim"], d["s_duz"], d["vor"]
egim = (surt - 1.0) / 0.005
kl = kara > 0
tohum = P.tohumlari_otur(nx, ny, kara, [tuple(p) for p in pts])
neh, *_ = E.nehir_maskesi(nx, ny, True)
esik85 = float(np.percentile(egim[kl], 85))
bant = (egim > esik85) & kl

ceza = np.zeros(nx * ny)
ceza[bant] += E.CEZA_SIRT
ceza[(neh > 0) & kl] += E.CEZA_NEHIR
_u, s_en = E.dijkstra(nx, ny, kara, tohum, surt, ceza, P.D8)

print("KESİŞİN EĞİMİ — bileşenin kendi dağılımında hangi yüzdelikte?")
for ad, s in (("① düz Voronoi (bugün)", vor),
              ("② sürtünmesiz ızgara", s_duz),
              ("③ eğimli ızgara  (ENGELSİZ — KONTROL)", s_egim),
              ("④ ENGELLİ (sırt p85 + nehir)", s_en)):
    r = E.gecit_sinavi(s, s, bant, egim, nx, ny, ad)
    if r is None:
        print("   %-38s ⚪ ölçülemedi" % ad)
        continue
    yuz, agir, _n = r
    print("   %-38s medyan %%%.1f · ortalama %%%.1f · bileşen %d · "
          "%%50 altı %d"
          % (ad, np.median(yuz), yuz.mean(), agir, int((yuz < 50).sum())))
print()
print("📌 OKUMA: dört hâl de aynı bantta ölçülüyor (p85). Aralarındaki FARK")
print("   engelin etkisidir; MUTLAK değer değil.")
