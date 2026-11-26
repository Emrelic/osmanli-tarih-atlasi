# -*- coding: utf-8 -*-
"""
KITA 7 -- B3 KORIDOR, PILOT v2 (12 Eylul 2026).

v1 (pilot_b3_kirp.py) GUVENILMEZ bulundu: "agiz" i bir dikey CIZGI ile
yaklasik olcuyordu, gercek `disari`/`disari_kenar`/`kapat()` zincirini
TASIMIYORDU. Bu surum, arac/uret_petek.py'nin GERCEK `kapat()` ve `temiz()`
fonksiyonlarini (satir 1264-1277 ve 86-91) BIREBIR KOPYALAR -- motoru
IMPORT ETMEDEN (YERLESIMLER yuklemek bu test icin gereksiz agir), yalniz
bu iki yardimci + `_b3_koridor_kirp`in agiz/genislik/derinlik olcum
matematigini tasir. B3_KAPAMA_DER=0.45 VE B3_SADELIK=0.02 GERCEK motor
sabitleridir (satir 1436-1437).

Yontem: gercek bir "koridor" B3'un gordugu haliyle bir NOTCH'tur --
`aday = kapat(gövde).difference(gövde)` -- yani gövdenin disina cikan
degil, gövdenin İCİNE giren, kapamayla doldurulacak bir cukur/kanal.
Bu, gercek üretimdeki senaryoyla (bir yarimadanin ince bir sunun
kesilmesi / bir korfezin agzinin kapanmasi) ayni sinif.
"""
import math
import random
from shapely.geometry import Point, Polygon, box
from shapely.ops import unary_union
from shapely.validation import make_valid

random.seed(20260912)

B3_KAPAMA_DER = 0.45   # GERCEK motor sabiti (~50 km)
B3_SADELIK = 0.02      # GERCEK motor sabiti (~2 km) -- bu pilotta atlaniyor
                       # (kucuk sentetik sekillerde simplify etkisi ihmal
                       # edilebilir, ve NOKTA sayisi zaten az)

def temiz(q):
    """arac/uret_petek.py:86-91 BIREBIR KOPYA."""
    if not q.is_valid:
        q = make_valid(q)
    if q.geom_type == "GeometryCollection":
        q = unary_union([p for p in q.geoms if p.geom_type in ("Polygon", "MultiPolygon")])
    return q.buffer(0)

def kapat(g, yaricap=0.15):
    """arac/uret_petek.py:1264-1277 BIREBIR KOPYA."""
    if g.is_empty:
        return g
    k = temiz(g.buffer(yaricap, join_style=2, mitre_limit=2.0)).buffer(-yaricap, join_style=2, mitre_limit=2.0)
    return unary_union([temiz(k), g])

def notch_govde(disi_kenar, agiz_genislik, derinlik, govde_genislik):
    """Buyuk bir kara blogunun kenarindan icine giren bir CUKUR/KANAL kesen
    govde uretir -- B3'un gordugu 'aday' (doldurulacak notch) sinifi.
    `agiz_genislik` = kanalin disariya actigi yerdeki genislik (mouth)
    `govde_genislik` = kanalin en ic (dip) noktasindaki genislik (dogbone)
    `derinlik` = kanalin kara icine ne kadar girdigi
    """
    kara = box(0, 0, disi_kenar, disi_kenar)
    # Kanal: sol kenardan (x=0) ice giren, agizda `agiz_genislik`,
    # dipte `govde_genislik` olan bir yamuk (trapez) -- dogbone testi icin
    cy = disi_kenar / 2.0
    kanal = Polygon([
        (-1, cy - agiz_genislik / 2.0),
        (derinlik, cy - govde_genislik / 2.0),
        (derinlik, cy + govde_genislik / 2.0),
        (-1, cy + agiz_genislik / 2.0),
    ])
    return temiz(kara.difference(kanal))

def olc_gercek_zincir(g):
    """_b3_koridor_kirp() GERCEK zincirinin agiz/w_der/d_der/agiz_genislik
    kismi -- satir 1624-1660 BIREBIR (simplify atlandi, kucuk sekillerde
    etkisi ihmal edilebilir)."""
    k = kapat(g, B3_KAPAMA_DER)
    aday = temiz(k.difference(g))
    if aday.is_empty:
        return None  # kanal kapanmadi (KAPAMA_DER kucuk kaldi) -- test disi
    x0, y0, x1, y1 = g.bounds
    m = B3_KAPAMA_DER * 4
    kutu = box(x0 - m, y0 - m, x1 + m, y1 + m)
    disari = temiz(kutu.difference(k))
    disari_kenar = disari.buffer(0.01)
    sonuclar = []
    comps = list(aday.geoms) if aday.geom_type == "MultiPolygon" else [aday]
    for c in comps:
        if c.is_empty or c.length <= 0:
            continue
        agiz = temiz(c.intersection(disari_kenar))
        if agiz.is_empty:
            continue  # b3_kapali sinifi -- disariya degmiyor
        w_der = 2.0 * c.area / c.length
        try:
            d_der = c.hausdorff_distance(agiz)
        except Exception:
            continue
        try:
            agiz_genislik_olcum = agiz.length / 2.0
        except Exception:
            agiz_genislik_olcum = None
        sonuclar.append((c.area, w_der, d_der, agiz_genislik_olcum))
    return sonuclar

print("=== PILOT v2 -- GERCEK kapat()/temiz() zinciriyle notch testi ===")
print(f"B3_KAPAMA_DER={B3_KAPAMA_DER} (gercek motor sabiti)")
print()

toplam, ayrisan, sig_ikiside, derin_ikiside = 0, 0, 0, 0
kapanmadi = 0
ornekler_ayrisan = []

# Genis tarama: hem huni (agiz dar, govde genis) hem ters-huni (agiz genis,
# govde dar) hem duz (agiz==govde) -- 300 rastgele sentetik kanal, olcek
# B3_KAPAMA_DER (~0.45 derece, ~50km) ETRAFINDA (gercek koridor olcegi).
N = 300
for i in range(N):
    agiz_g = random.uniform(0.02, 1.2)     # ~2-130 km
    govde_g = random.uniform(0.02, 1.2)
    derinlik = random.uniform(0.3, 2.0)    # ~33-220 km -- kapama yaricapindan BUYUK
                                            # olmali ki kanal TAMAMEN kapanmasin/ada
                                            # olusmasin (kismi kapanma == gercekci)
    disi_kenar = derinlik * 3 + 2
    g = notch_govde(disi_kenar, agiz_g, derinlik, govde_g)
    if g.is_empty:
        continue
    sonuc = olc_gercek_zincir(g)
    if sonuc is None:
        kapanmadi += 1
        continue
    for area, w_der, d_der, agiz_olcum in sonuc:
        if agiz_olcum is None:
            continue
        toplam += 1
        karar_govde = d_der > w_der       # kod: DERIN mi (dolduruluyor)
        karar_agiz = d_der > agiz_olcum   # Emre: DERIN mi (dolduruluyor)
        if karar_govde != karar_agiz:
            ayrisan += 1
            if len(ornekler_ayrisan) < 8:
                ornekler_ayrisan.append((agiz_g, govde_g, derinlik, w_der, d_der, agiz_olcum, karar_govde, karar_agiz))
        elif karar_govde:
            derin_ikiside += 1
        else:
            sig_ikiside += 1

print(f"denenen sentetik kanal: {N} · kapanmayan (B3_KAPAMA_DER yetersiz): {kapanmadi}")
print(f"olculebilen bilesen (agiz bulundu): {toplam}")
print(f"AYRISAN (kod vs Emre farkli karar verir): {ayrisan}  (%{100*ayrisan/toplam:.1f})" if toplam else "olculebilen bilesen YOK")
print(f"ikisi de DERIN (doldur) dedi: {derin_ikiside}   ikisi de SIG (birak) dedi: {sig_ikiside}")
print()
print("=== AYRISAN ORNEKLER (agiz_genislik_girdi, govde_genislik_girdi, derinlik_girdi, w_der, d_der, agiz_olcum_gercek, kod_karari, emre_karari) ===")
for row in ornekler_ayrisan:
    ag, gg, der, w, d, a, kg, ke = row
    print(f"  agiz_girdi={ag:.2f} govde_girdi={gg:.2f} derinlik_girdi={der:.2f}  "
          f"-> w_der={w:.3f} d_der={d:.3f} agiz_olcum={a:.3f}  "
          f"kod={'DOLDUR' if kg else 'BIRAK'}  emre={'DOLDUR' if ke else 'BIRAK'}")

print()
print("=== KONTROL VAKASI: belirgin TERS HUNI (agiz COK genis, govde COK dar) ===")
g = notch_govde(disi_kenar=5.0, agiz_genislik=2.0, derinlik=1.0, govde_genislik=0.2)
sonuc = olc_gercek_zincir(g)
if sonuc:
    for area, w_der, d_der, agiz_olcum in sonuc:
        print(f"  alan={area:.3f}  w_der={w_der:.3f}  d_der={d_der:.3f}  agiz_olcum={agiz_olcum:.3f}")
        print(f"  kod karari (d>w_der): {'DOLDUR' if d_der>w_der else 'BIRAK'}")
        print(f"  emre karari (d>agiz): {'DOLDUR' if d_der>agiz_olcum else 'BIRAK'}")
else:
    print("  kanal kapanmadi -- KAPAMA_DER yetersiz bu ölçekte")
