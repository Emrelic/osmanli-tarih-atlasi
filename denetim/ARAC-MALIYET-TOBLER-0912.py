# -*- coding: utf-8 -*-
"""MALIYET FONKSIYONU Oa1/Oa2 -- Tobler yuruyus fonksiyonu ve yon duyarliligi.
Prototip -- arac/uret_petek.py'ye YAZILMADI, yalniz KARSILASTIRMA icin.

Bugunku model (uret_petek.py:2205,2244):
    surt = 1 + EGIM_CARPANI * |grad_z|      EGIM_CARPANI = 0.005
    maliyet(a->b) = dist_km(a,b) * surt[b]  -- surt YALNIZ hedef hucreden,
                                                YONE (tirmanma/inis) BAKMAZ

Tobler (1993) yuruyus hizi:
    W = 6 * exp(-3.5 * |S + 0.05|)   km/saat, S = isaretli egim (dh/dx)
    maliyet_saat(a->b) = dist_km(a,b) / W(S_ab)
    S_ab = (z[b]-z[a]) / (dist_km(a,b) * 1000)   -- m/m, YONE BAKAR
"""
import math

EGIM_CARPANI = 0.005
KV_ADIM_M = 5566.0  # brifingteki hucre boyu (5.566 m)


def eski_surtunme(egim_m_hucre):
    return 1.0 + EGIM_CARPANI * egim_m_hucre


def tobler_hiz(S):
    return 6.0 * math.exp(-3.5 * abs(S + 0.05))


def tobler_carpan_dogru_yon(egim_m_hucre, dist_km=KV_ADIM_M / 1000.0):
    """Dikkat: brifingin tablosundaki 'GERCEK' sutunu YOKUS (S>0) icin
    hesaplanmis -- karsilastirma AYNI yonde (tirmanma) yapilmali."""
    S = egim_m_hucre / (dist_km * 1000.0)
    duz_hiz = tobler_hiz(0.0)
    return duz_hiz / tobler_hiz(S)  # duz hizina gore normalize CARPAN


print("=" * 78)
print("① TABLO DOGRULAMASI -- brifingteki sayilarla birebir mi")
print("=" * 78)
print(f"{'dz(m/hucre)':>12} {'egim':>8} {'ESKI(x)':>9} {'TOBLER(x)':>10} {'fark':>8}")
for dz in (100, 500, 1000, 3000):
    egim_derece = math.degrees(math.atan(dz / KV_ADIM_M))
    eski = eski_surtunme(dz)
    tob = tobler_carpan_dogru_yon(dz)
    fark = (eski - tob) / tob * 100
    print(f"{dz:>12} {egim_derece:>7.1f}° {eski:>8.2f}x {tob:>9.2f}x {fark:>+7.0f}%")

print()
print("=" * 78)
print("② YON DUYARLILIGI -- ayni |egim|, TIRMANMA vs INIS (bugun AYIRT EDILEMEZ)")
print("=" * 78)
for dz in (100, 500, 1000, 3000):
    S = dz / KV_ADIM_M / 1000.0 * 1000  # m/m (dz metre, KV_ADIM_M metre -> S = dz/KV_ADIM_M)
    S = dz / KV_ADIM_M
    yokus_hiz = tobler_hiz(S)
    inis_hiz = tobler_hiz(-S)
    yokus_carpan = tobler_hiz(0) / yokus_hiz
    inis_carpan = tobler_hiz(0) / inis_hiz
    print(f"  dz={dz:>5}m  YOKUS W={yokus_hiz:5.2f} km/h (carpan {yokus_carpan:5.2f}x)   "
          f"INIS W={inis_hiz:5.2f} km/h (carpan {inis_carpan:5.2f}x)   "
          f"ORAN yokus/inis = {yokus_carpan/inis_carpan:.2f}")
print()
print("  BUGUNKU MODEL: surt[hedef] YALNIZ hedef hucrenin |grad_z|'sine bakar --")
print("  ayni kenarin a->b ve b->a maliyeti farkli olabilir AMA bu YON'den degil,")
print("  KOMSU HUCRELERIN TESADUFEN farkli egiminden kaynaklanir. Duz bir yamacta")
print("  (a ve b AYNI egim buyuklugunu paylasirsa) surt[a]==surt[b] olur ve")
print("  YOKUS/INIS AYNI FIYATLANIR -- Tobler'da ise HER ZAMAN farkli (S isaretli).")
