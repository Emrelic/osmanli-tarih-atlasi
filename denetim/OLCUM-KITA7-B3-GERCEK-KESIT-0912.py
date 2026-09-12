# -*- coding: utf-8 -*-
"""
KITA 7 -- B3 KORIDOR, GERCEK VERI olcumu (İş②, oturumlar/KITA-7-B3-KORIDOR.md).

`arac/uret_petek.py`yi KOSTURMAZ, IMPORT ETMEZ (o zaten import KILIDIYLE
engellenmis, satir 38-44). Bunun yerine motorun GERCEK, YAYINLANMIS
ciktisini (data/donemler.js, kosu 9) `dump_real_kesit.js` ile disari
cikardigim 99 gercek kesitin (52 tarih x dogrudan/tabi) UZERINDE, motorun
KENDI `kapat()`/`temiz()` fonksiyonlarini (arac/uret_petek.py:1264-1277,
86-91) BIREBIR kopyalayarak ve GERCEK B3_KAPAMA_DER=0.45/B3_SADELIK=0.02
sabitleriyle, `_b3_koridor_kirp`in agiz/w_der/d_der olcum zincirini
calistirir.

KAPSAM DAMGASI (D021, D107): bu olcum yalniz "SIG/yasakli" (B3'un
DOLDURMADIGI, dolayisiyla final ciktida hala GORUNUR olan) notch'lari
bulabilir -- kosu 9'da GERCEKTEN DOLDURULMUS notch'lar final geometriden
kaybolmus, onlari bu yontemle GERI GETIREMEM. Yani bu, ONGORU-KITA7-
B3-KORIDOR-0912.json'daki sentetik ölçümün TAMAMLAYICISI: sentetik test
"derin/DOLDUR" tarafini, bu GERCEK veri testi "sig/BIRAK" tarafini
(ozellikle "agiz DAR, govde GENIS -- BULUNAMADI" sorusunu GERCEK
cografyada) sinar.
"""
import json
import math
import sys
from shapely.geometry import Polygon, MultiPolygon, box
from shapely.ops import unary_union
from shapely.validation import make_valid

B3_KAPAMA_DER = 0.45
B3_SADELIK = 0.02
KM_PER_DEG = 111.32

def temiz(q):
    if not q.is_valid:
        q = make_valid(q)
    if q.geom_type == "GeometryCollection":
        polys = [p for p in q.geoms if p.geom_type in ("Polygon", "MultiPolygon")]
        if not polys:
            return Polygon()
        q = unary_union(polys)
    return q.buffer(0)

def kapat(g, yaricap=0.15):
    if g.is_empty:
        return g
    k = temiz(g.buffer(yaricap, join_style=2, mitre_limit=2.0)).buffer(-yaricap, join_style=2, mitre_limit=2.0)
    return unary_union([temiz(k), g])

def alan_km2(g):
    # motorun kendi alan_km2'si enlem duzeltmesi yapiyor (uret_petek.py:2936
    # civari); burada kaba bir derece-kare -> km2 (enlem ~40 civarinda cos
    # duzeltmesi) kullaniliyor -- YALNIZ RAPORLAMA icin, karar esigine
    # GIRMIYOR (motorun kendisi de esikte km2 kullanmiyor, derece kullaniyor).
    try:
        c = g.centroid
        lat = c.y
    except Exception:
        lat = 40.0
    return g.area * KM_PER_DEG * KM_PER_DEG * math.cos(math.radians(lat))

def poligon_kur(parca):
    ext = parca["ext"]
    holes = parca.get("holes") or []
    try:
        return Polygon(ext, holes)
    except Exception:
        return None

def olc_kesit(parcalar):
    """Bir (tarih, alan) kesitinin GERCEK govdesini kurar, B3'un
    aday/agiz/w_der/d_der zincirini calistirir, kalan (SIG/yasakli
    degil ama burada 'yasakli' bilgisi YOK, yalniz SIG testi var --
    _yasakli_mi() YERLESIMLER'e/coğrafi kb-yasak listesine bagli,
    o veri bu script'te YOK) notch'lari doner."""
    polys = [poligon_kur(p) for p in parcalar]
    polys = [p for p in polys if p is not None and not p.is_empty]
    if not polys:
        return []
    g = temiz(unary_union(polys))
    if g.is_empty:
        return []
    gs = g.simplify(B3_SADELIK, preserve_topology=True)
    k = kapat(gs, B3_KAPAMA_DER)
    aday = temiz(k.difference(g))
    if aday.is_empty:
        return []
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
            continue  # b3_kapali -- disariya degmiyor (kapali delik, B1'in isi)
        w_der = 2.0 * c.area / c.length
        try:
            d_der = c.hausdorff_distance(agiz)
        except Exception:
            continue
        try:
            agiz_genislik = agiz.length / 2.0
        except Exception:
            agiz_genislik = None
        sig_kod = d_der <= w_der          # kod: SIG (birakilir)
        sig_emre = (agiz_genislik is not None) and (d_der <= agiz_genislik)
        sonuclar.append({
            "alan_km2": round(alan_km2(c), 1),
            "derinlik_km": round(d_der * KM_PER_DEG, 1),
            "govde_genislik_km": round(w_der * KM_PER_DEG, 1),
            "agiz_genislik_km": round(agiz_genislik * KM_PER_DEG, 1) if agiz_genislik else None,
            "kod_sig_mi": sig_kod,
            "emre_sig_mi": sig_emre,
            "ayrisiyor": (sig_kod != sig_emre) if agiz_genislik else None,
        })
    return sonuclar

def main():
    kesit_dosya = sys.argv[1]
    with open(kesit_dosya, "r", encoding="utf-8") as f:
        kesitler = json.load(f)
    tum_kayit = []
    hata = 0
    for kesit in kesitler:
        try:
            kayitlar = olc_kesit(kesit["parcalar"])
        except Exception as e:
            hata += 1
            continue
        for k in kayitlar:
            k["tarih"] = kesit["tarih"]
            k["alan"] = kesit["alan"]
            tum_kayit.append(k)

    toplam = len(tum_kayit)
    olculebilen = [k for k in tum_kayit if k["agiz_genislik_km"] is not None]
    ayrisan = [k for k in olculebilen if k["ayrisiyor"]]
    # yon: kac tanesi "agiz dar govde genis, kod YANLISLIKLA SIG dedi ama
    # aslinda DERIN (Emre'ye gore doldurulmali)" -- BULUNAMADI denen yon
    yon_A = [k for k in ayrisan if k["kod_sig_mi"] and not k["emre_sig_mi"]]
    # yon: "agiz genis govde dar, kod YANLISLIKLA DERIN dedi" -- bu SIG
    # testinde GORULMEZ (kod zaten SIG dedigi icin final ciktida durur);
    # yalniz kayit icin still hesapliyoruz (kod_sig_mi False olanlar zaten
    # DOLDURULMUS olmali, final veride GORUNMEMELI -- kontrol amacli)
    yon_B = [k for k in ayrisan if not k["kod_sig_mi"] and k["emre_sig_mi"]]

    print(f"kesit sayisi: {len(kesitler)} (hata/atlandi: {hata})")
    print(f"toplam notch/aday bileseni (final ciktida hala GORUNUR): {toplam}")
    print(f"agiz olculebilen: {len(olculebilen)}")
    print(f"AYRISAN (kod vs Emre farkli karar): {len(ayrisan)}"
          + (f"  (%{100*len(ayrisan)/len(olculebilen):.1f})" if olculebilen else ""))
    print(f"  YÖN A (agiz DAR, kod yanlislikla SIG dedi -- gercekte DERIN olmali): {len(yon_A)}")
    print(f"  YÖN B (agiz GENIS, kod yanlislikla DERIN -- final veride gorunmemeli): {len(yon_B)}")

    if ayrisan:
        sapmalar = sorted(
            ((abs(k["derinlik_km"] - (k["agiz_genislik_km"] or 0)), i), k)
            for i, k in enumerate(ayrisan)
        )
        print("\nEN BUYUK 10 SAPMA (derinlik - agiz_genislik, km):")
        for (fark, _), k in sapmalar[-10:][::-1]:
            print(f"  {k['tarih']} [{k['alan']}] alan={k['alan_km2']:,.0f}km² "
                  f"derinlik={k['derinlik_km']:.0f}km govde_gen={k['govde_genislik_km']:.0f}km "
                  f"agiz_gen={k['agiz_genislik_km']:.0f}km  fark={fark:.0f}km  "
                  f"kod={'SIG' if k['kod_sig_mi'] else 'DOLDUR'} "
                  f"emre={'SIG' if k['emre_sig_mi'] else 'DOLDUR'}")

    if olculebilen:
        farklar = sorted(k["govde_genislik_km"] - (k["agiz_genislik_km"] or 0) for k in olculebilen)
        medyan = farklar[len(farklar)//2]
        print(f"\nMEDYAN (govde_genislik - agiz_genislik), km: {medyan:.1f}")

    with open(sys.argv[2], "w", encoding="utf-8") as f:
        json.dump(tum_kayit, f, ensure_ascii=False, indent=1)
    print(f"\ntam kayit -> {sys.argv[2]}")

if __name__ == "__main__":
    main()
