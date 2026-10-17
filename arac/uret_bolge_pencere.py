"""Bölge (k1/k2 merkez) sınırlarını ZAMANA bağlar → data/bolge_pencere.js

🔴 NİÇİN VAR (Emre, 17 Ekim 2026 — "bölge sınırı her gün o günkü Osmanlı
gövdesiyle kırpılsın, iniş adımı, motora dokunmadan"):
   `uret_petek.py` her bölgeyi, ona bağlı BÜTÜN yerleşimlerin peteklerinin
   ZAMANSIZ birleşimi olarak yazar (`data/bolgeler.js` `g`) ve site bu tek
   çizgiyi merkezin bütün Osmanlı aralığında çizer. Bağlı yerleşimler ise
   farklı günlerde gelir/gider ⇒ çizgi o gün YABANCI olan toprağı da kuşatır.
   Ölçüldü (KOŞU 27, Değişmez 8b): 85 (bölge, gün) birimin hepsi bölgenin
   ilk günü (46) ya da son günü (39); en az 70'inde yabancı pay, o gün veride
   de yabancı olan BAĞLI YERLEŞİMLERDEN geliyordu (Bursa 1326 → Karesi,
   Erzurum 1920 → Kars/Batum). Harita boyaması doğruydu, çizgi yanlıştı.

ÇARE: her bölge için, merkezin aralığı Osmanlı gövdesi dönemlerine (donemler.js
`DONEMLER`, `o` = OSMANLI · `v` = OSM-TABI) bölünür; her dönemde
   pencere geometrisi = bölge poligonu ∩ (o gün OSMANLI ∪ OSM-TABI gövdesi)
Kesişen gövde parçası KÜMESİ aynı kalan ardışık dönemler TEK pencereye
birleşir (parça kimliği aynı ⇒ geometri aynı; birebir, yaklaşım değil).

⚠️ MOTOR DEĞİL, İNİŞ ADIMI: `uret_petek.py`ye ve motor tuzuna dokunulmaz;
   `bolgeler.js` olduğu gibi kalır (motor_esitlik onu kıyaslar). Bu araç
   `coz-c data data/donemler.js donem`den SONRA, `denetle`den ÖNCE koşar.
   Gövde kimliği `denetle._D8Govde` ile sınanır: yerel donemler.js sitenin
   yüklediği kodlanmış gövdeyle aynı değilse araç DURUR (yanlış gövdeyi kırpmak
   yayında olmayan bir haritaya göre çizgi üretirdi).

Çıktı: window.BOLGE_PENCERE = {g:[geometri...], b:[{ad, p:[[f, t, gi], ...]}]} —
`gi` g[] indeksi; geometri bolgeler.js ile aynı biçim (MultiPolygon koordinatları, 3 ondalık). `t` hariç uçtur.
Çıkış: 0 tamam · 1 arıza · 2 ölçülemedi (gövde yok/uyuşmuyor).
"""
import json
import os
import sys
import time

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
DATA = os.path.join(KOK, "data")
CIKTI = os.path.join(DATA, "bolge_pencere.js")
ALAN_ESIK = 0.0002          # uret_petek.v_parcalar ile aynı parça süzgeci (derece²)
SADELE = 0.003              # derece (~300 m) — çizgi kalınlığının altında
TOL_KM2 = 10.0              # ardışık pencere birleştirme eşiği; 8b eşiği 50 km²


def mp_koord(g):
    """uret_petek.mp_koord'un eşi: MultiPolygon → [[halka...]...], 3 ondalık."""
    from shapely.geometry import MultiPolygon, Polygon
    if g.is_empty:
        return []
    if isinstance(g, Polygon):
        g = MultiPolygon([g])
    elif not isinstance(g, MultiPolygon):
        g = MultiPolygon([p for p in getattr(g, "geoms", []) if isinstance(p, Polygon)])
    out = []
    for p in g.geoms:
        if p.area < ALAN_ESIK:
            continue
        halkalar = []
        for ring in [p.exterior] + list(p.interiors):
            cs = []
            for x, y in ring.coords:
                q = [round(x, 3), round(y, 3)]
                if not cs or q != cs[-1]:
                    cs.append(q)
            if len(cs) >= 3 and cs[0] != cs[-1]:
                cs.append(list(cs[0]))
            if len(cs) >= 4:
                halkalar.append(cs)
        if halkalar:
            out.append(halkalar)
    return out


def main():
    t0 = time.time()
    import denetle
    from shapely import STRtree
    from shapely.ops import unary_union
    from shapely.geometry import Polygon
    from shapely.affinity import affine_transform
    try:
        gv = denetle._D8Govde()
    except Exception as e:
        print(f"ÖLÇÜLEMEDİ — gövde okunamadı: {type(e).__name__}: {e}")
        return 2
    DON = denetle._d8_js(os.path.join(DATA, "donemler.js"))["DONEMLER"]
    donem = sorted(((d.get("f") or "0000", d.get("t") or "9999",
                     [("o", p) for p in d.get("o") or []] + [("v", p) for p in d.get("v") or []])
                    for d in DON), key=lambda x: x[0])
    pad = denetle.pad

    sonuc = []
    sozluk, geolar = {}, []
    toplam_p = 0
    for B in gv.bolgeler:
        pol = []
        for pg in B.get("g") or []:
            try:
                g = Polygon(pg[0], pg[1:])
                pol.append(g if g.is_valid else g.buffer(0))
            except Exception:
                pass
        if not pol:
            continue
        BG = unary_union(pol)
        bf, bt = pad(B.get("f") or "0000"), pad(B.get("t") or "9999")
        x0, y0, x1, y1 = BG.bounds
        M = denetle._d8_izdusum(B["lon"], B["lat"])
        pencere = []          # [f, t, shapely]
        anahtar_onb = {}
        for f, t, parcalar in donem:
            if t <= bf or f >= bt:
                continue
            gs, ids = [], []
            for _, p in parcalar:
                r = gv._parca(1, p)
                if r is None:
                    continue
                k = r[0]
                if k[2] < x0 or k[0] > x1 or k[3] < y0 or k[1] > y1:
                    continue
                g = gv._geo(1, p)
                if g is not None and not g.is_empty and g.intersects(BG):
                    gs.append(g)
                    ids.append(str(p if isinstance(p, int) else id(p)))
            anahtar = tuple(sorted(ids))
            if anahtar not in anahtar_onb:
                kes = BG.intersection(unary_union(gs)) if gs else Polygon()
                anahtar_onb[anahtar] = kes.simplify(SADELE, preserve_topology=True)
            kes = anahtar_onb[anahtar]
            pf, pt = max(f, bf), min(t, bt)
            # Ardışık pencere: geometri farkı TOL_KM2'nin altındaysa uzat. Fark
            # 8b eşiğinin (≥50 km²) çok altında kalır ⇒ kırpma 8b'yi sıfırlar.
            if pencere and pencere[-1][1] == pf:
                onceki = pencere[-1][2]
                fark = onceki.symmetric_difference(kes)
                if fark.is_empty or affine_transform(fark, M).area < TOL_KM2:
                    pencere[-1][1] = pt
                    continue
            pencere.append([pf, pt, kes])
        cikis = []
        for pf, pt, kes in pencere:
            g = mp_koord(kes)
            if not g:
                continue
            s = json.dumps(g, separators=(",", ":"))
            if s not in sozluk:
                sozluk[s] = len(geolar)
                geolar.append(g)
            cikis.append([pf, pt, sozluk[s]])
        toplam_p += len(cikis)
        sonuc.append({"ad": B["ad"], "p": cikis})
    metin = ("// Otomatik üretildi — elle düzenlemeyin. Betik: arac/uret_bolge_pencere.py\n"
             "// Bölge sınırı × o günün Osmanlı gövdesi (OSMANLI ∪ OSM-TABI) — zaman pencereli.\n"
             "// p: [f, t (hariç), MultiPolygon]. Kaynak gövde: " + gv.damga + "\n"
             "window.BOLGE_PENCERE = " + json.dumps({"g": geolar, "b": sonuc}, ensure_ascii=False, separators=(",", ":")) + ";\n")
    # Üretim izi bolgeler.js'inkiyle AYNI (aynı koşunun girdi/motor sha256'ları):
    # bu dosya o koşunun türevidir, kendi girdisi yoktur.
    import re
    with open(os.path.join(DATA, "bolgeler.js"), encoding="utf-8") as f:
        iz = re.search(r"^window\.URETIM_IZI = .*;$", f.read(), re.M)
    if iz:
        metin += iz.group(0) + "\n"
    with open(CIKTI, "w", encoding="utf-8", newline="\n") as f:
        f.write(metin)
    print(f"{len(sonuc)} bölge · {toplam_p} pencere · {len(geolar)} ayrı geometri → data/bolge_pencere.js "
          f"({os.path.getsize(CIKTI) // 1024} KB) · {time.time() - t0:.0f} sn")
    return 0


if __name__ == "__main__":
    sys.exit(main())
