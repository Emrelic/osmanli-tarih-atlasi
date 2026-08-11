# -*- coding: utf-8 -*-
"""MOTOR ENKLAV olcum takiminin ORTAK PARCALARI.

🔴 NICIN AYRI BIR MODUL: `hizalama_sinavi()` yuzunden. O nobetci bu takimin
en onemli parcasi ve HER betikte ayni olmali. Alti kopya olsaydi biri
guncellenir otekiler bayatlardi — bu depoda ucuncu kez ogrenilen ders
("bir bilgi iki yerde duruyorsa, biri guncellenince oteki bayatlar").
"""
import os
import sys
import io
import json
import re
import math

# Turkce cikti Windows konsolunda bozulmasin
if hasattr(sys.stdout, "buffer"):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8",
                                  errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)

R_DUNYA = 6371.0088


# ═════════════════════════════════════════════════════════════════════════
# 🔴 HIZALAMA NOBETCISI — BU TAKIMIN EN ONEMLI PARCASI
# ═════════════════════════════════════════════════════════════════════════
def hizalama_sinavi(YERLER, GOV, zorunlu=True):
    """`data/petek_govde.js` ile `girdi.yukle()` INDEKSTEN eslesebilir mi?

    ⚠️ DOGURAN VAKA — 11 Agustos 2026, MOTOR ENKLAV.
    `petek_govde.js` basligi "Sira PETEKLER (donemler.js) ile AYNIDIR" diyor.
    Bu bir KOSU ICI garantidir, KOSULAR ARASI DEGIL. O gun NOKTA HALKA-1
    `yerlesimler_ek23.js`i bagladi:
        nokta   2308 -> 2312
        dosya     36 -> 37
        VE dosya listenin SONUNA degil 26. SIRASINA girdi
        ⇒ ek23'ten sonraki BUTUN indeksler kaydi
    Testim `IndexError` ile dustu — ve GURULTULU dusmesi TESADUFTU:
    sayilar farkli oldugu icin patladi. SAYI AYNI KALIP SIRA DEGISSEYDI
    SESSIZCE YANLIS ESLESIRDI ve hicbir sey uyarmazdi.

    ⇒ Sayi esitligi GEREK ama YETER DEGIL. Yeter sart, yayindaki
      `URETIM_IZI.girdi` parmak izinin bugunku `girdi.parmak_izi()` ile
      ayni olmasidir. Ikisi de sinaniyor.
    """
    import girdi
    tamam = True
    if len(GOV) != len(YERLER):
        print(f"  🔴 SAYI AYRISMASI: petek_govde {len(GOV)} != veri {len(YERLER)}")
        print(f"     Yayindaki geometri bugunku veriden ESKI. Indeks eslemesi")
        print(f"     GECERSIZ — bu betigin sonucu ANLAMSIZ olur.")
        tamam = False
    else:
        print(f"  ✓ sayi ayni ({len(GOV)}) — ama sayi esitligi YETER SART DEGIL")

    try:
        src = open(os.path.join(KOK, "data", "petek_govde.js"),
                   encoding="utf-8").read()
        m = re.search(r"window\.URETIM_IZI\s*=\s*(\{.*?\});", src, re.S)
        yayin_iz = json.loads(m.group(1)).get("girdi", {}) if m else {}
    except Exception as e:
        print(f"  ⚠️ URETIM_IZI okunamadi: {e}")
        yayin_iz = {}
    bugun_iz = girdi.parmak_izi()
    if yayin_iz and bugun_iz:
        farkli = sorted(set(yayin_iz) ^ set(bugun_iz)) + \
            sorted(k for k in set(yayin_iz) & set(bugun_iz)
                   if yayin_iz[k] != bugun_iz[k])
        if farkli:
            print(f"  🔴 PARMAK IZI AYRISMASI: {len(farkli)} dosya farkli")
            for k in farkli[:8]:
                print(f"       {k}")
            print(f"     ⇒ Yayindaki geometri bu veriyle URETILMEDI.")
            print(f"       Sayilar tutsa BILE indeks eslemesi YANLIS OLABILIR.")
            tamam = False
        else:
            print(f"  ✓ parmak izi birebir ({len(bugun_iz)} dosya) — "
                  f"indeks eslemesi GUVENLI")

    if not tamam:
        print()
        print("  " + "=" * 66)
        print("  Ne yapilir:")
        print("   (a) yeni bir kosu bekleyip petek_govde.js tazelenince kos, YA DA")
        print("   (b) INDEKSE HIC GUVENMEYEN bir olcume gec — motorun kendi")
        print("       yazdigi KAPALI govdeler (donemler.js · devletler_harita.js)")
        print("       kendi kendine yeten poligonlardir, esleme gerektirmezler.")
        print("       Ornek: olc_delik_yayin.py ve c13_delikleri_doldur.py")
        print("  " + "=" * 66)
        if zorunlu:
            sys.exit(2)
    return tamam


# ═════════════════════════════════════════════════════════════════════════
def _poligonlar(g):
    """Her turlu geometriden POLIGONLARI cikarir — GeometryCollection DAHIL,
    ic ice olsa bile."""
    if g is None or g.is_empty:
        return []
    t = g.geom_type
    if t == "Polygon":
        return [g]
    if t in ("MultiPolygon", "GeometryCollection"):
        out = []
        for p in g.geoms:
            out += _poligonlar(p)
        return out
    return []            # Point · LineString · bos — alani YOK, 0 dogru cevap


def km2(g):
    """Kure uzerinde alan, km². Delikler (interior ring) CIKARILIR.

    🔴 12 AGUSTOS 2026 — BU FONKSIYON SESSIZCE 0.0 DONUYORDU (MOTOR TAVAN-YON).
    Eski hali:
        ps = g.geoms if isinstance(g, MultiPolygon) else [g]
        for p in ps:
            if p.is_empty or p.geom_type != "Polygon": continue
    Bir GeometryCollection `MultiPolygon` DEGILDIR ⇒ `[g]` olur ⇒ tek eleman
    `Polygon` de degildir ⇒ `continue` ⇒ **butun koleksiyon atilir, 0.0 doner.**
    Ve shapely kesisimleri (`.intersection`) bir kenar/nokta degdiginde
    GeometryCollection DONDURUR — yani tam da olcum sirasinda.

    ⚠️ BEDELI OLCULDU: yone duyarli tavan denenirken cokgen BUYUDUKCE daha sik
    GC ciktI ve toplam alan **%30 KUCULMUS** gorundu. Alan buyurken kuculemez;
    sonuc IMKANSIZ oldugu icin yakalandi. **Makul bir sapma uretseydi
    yakalanmazdi** — bu yuzden burada duruyor.

    📌 `CLAUDE.md §11` "ALETIN GOSTERDIGI ≠ OLCTUGU" ailesinin uyesi: alet
    calisiyordu, hata vermiyordu, sayi basiyordu — ve sayi yalandi.
    """
    T = 0.0
    for p in _poligonlar(g):
        for ring, sg in [(p.exterior, 1)] + [(h, -1) for h in p.interiors]:
            T += sg * halka_km2(list(ring.coords))
    return T


def halka_km2(cs):
    """Tek bir halkanin cevreledigi alan, km²."""
    s = 0.0
    for i in range(len(cs) - 1):
        lo1, la1 = math.radians(cs[i][0]), math.radians(cs[i][1])
        lo2, la2 = math.radians(cs[i + 1][0]), math.radians(cs[i + 1][1])
        s += (lo2 - lo1) * (2 + math.sin(la1) + math.sin(la2))
    return abs(s * R_DUNYA * R_DUNYA / 2)


def sahip(y, g):
    """y yerlesiminin g gunundeki BOYAMA KIMLIGI.
    ⚠️ 'OSMANLI' ile 'tabi' AYRI dondurulur — haritada ayri tonda cizilirler
    (koyu / acik). Denetimde muaf olmalari (CLAUDE.md §3) BOYAMA icin gecerli
    degil."""
    for p in y.get("d") or []:
        if p["f"] <= g < p["t"]:
            return "OSMANLI"
    for p in y.get("v") or []:
        if p["f"] <= g < p["t"]:
            return "tabi"
    for p in y.get("s") or []:
        if p["f"] <= g < p["t"]:
            return p.get("d") or "?"
    return None


def sahipli(y, g):
    return sahip(y, g) is not None


def epok_ici(y, g):
    """y, g gununde VARLIK EPOKU icinde mi (kurulmus ve henuz yok olmamis)."""
    return not ((y.get("kur") and y["kur"] > g)
                or (y.get("bit") and y["bit"] <= g))


# ═════════════════════════════════════════════════════════════════════════
def oku_petek_govde():
    """Yayindaki ZAMANSIZ taban petek geometrisi -> hucre listesi.
    ⚠️ EVREN UYARISI: bu, motorun ARA URUNUDUR. Motor govdeyi kurarken
    `delikleri_doldur` + `kapat` uyguluyor; buradan kurulan birlesim
    EKRANDA GORULEN SEY DEGILDIR. Ekrani olcmek istiyorsan
    `oku_yayin_govdeleri()` kullan."""
    from shapely.geometry import Polygon
    from shapely.ops import unary_union
    src = open(os.path.join(KOK, "data", "petek_govde.js"),
               encoding="utf-8").read()
    PARCA = json.loads(re.search(
        r"window\.PETEK_GOVDE_PARCA\s*=\s*(\[.*?\]);", src, re.S).group(1))
    GOV = json.loads(re.search(
        r"window\.PETEK_GOVDE\s*=\s*(\[.*?\]);", src, re.S).group(1))
    PG = [Polygon(p[0], p[1:]) if len(p) > 1 else Polygon(p[0]) for p in PARCA]
    PG = [g if g.is_valid else g.buffer(0) for g in PG]
    HUCRE = []
    for ix in GOV:
        ps = [PG[j] for j in ix]
        HUCRE.append(unary_union(ps) if len(ps) != 1 else ps[0])
    return GOV, HUCRE


def oku_kara():
    """🔴 ADI YANILTICI — BU BIR GIRDI MASKESI DEGIL, MOTORUN CIKTISIDIR.

    Okudugu `veri-kaynak/motor_kara.geojson`, `uret_petek.py:1720`de
    `unary_union(PETEK_D)` ile yazilir — yani BUTUN PETEKLERIN BIRLESIMI,
    **A1 tavani ve col tavani UYGULANDIKTAN SONRA.** Tavanin sahipsiz
    biraktigi cok, bu dosyada KARA DEGILDIR.

    🟢 NE ICIN DOGRU: "yayindaki haritada burasi kara mi" sorusu.
       `olc_delik_yayin.py` ve `olc_delik_kendi.py` tam bunu soruyor —
       onlar icin BU dogru evrendir, degistirilmedi.
    🔴 NE ICIN YANLIS: "tavan ne kadar kesiyor" sorusu. Tavanin kestigini
       tavanla olcmek DAIRESELDIR.

    ⚠️ 12 Agustos 2026'da bu tuzaga dusuldu (MOTOR TAVAN-YON): bu maskeyle
    olculunce A1 tavani "karanin %0,2'sini kesiyor" cikti; GERCEK GIRDI
    maskesiyle **%22,9**, ve motorun kendi logu (`MIMARI §2.9`, kosu 4b)
    **%23,0** diyor. Yani sapma yuz kattan fazlaydi.
    📌 Ve `km2` kusurundan SINSIYDI: o IMKANSIZ bir sayi uretti (alan
    buyurken kuculdu, hemen goruldu), bu **MAKUL** bir sayi uretti.

    ⇒ Girdi maskesi lazimsa `oku_girdi_karasi()` kullan.

    🔴 VE SU AYRI BIR TUZAK, GECERLILIGINI KORUYOR: govde KARA'ya kirpili
    oldugu icin her GOL bir interior ring gibi gorunur. 11 Agustos'ta bu
    atlandi ve Van Golu 'Osmanli deligi' sanildi — doldurulsaydi motor golu
    boyardi."""
    from shapely.geometry import shape
    gj = json.load(open(os.path.join(KOK, "veri-kaynak", "motor_kara.geojson"),
                        encoding="utf-8"))
    ps = []
    for f in gj["features"]:
        g = shape(f["geometry"])
        ps += list(g.geoms) if g.geom_type == "MultiPolygon" else [g]
    return ps


# ═════════════════════════════════════════════════════════════════════════
_GIRDI_KARA = None


def oku_girdi_karasi(bolge=None):
    """🟢 MOTORUN GORDUGU GIRDI MASKESI — `uret_petek.py:274-333` zinciri.

    `ne_10m_land` ∩ BOLGE, `KARA_TOL` ile sadelestirilmis, sonra GOLLER
    cikarilmis (modern baraj golleri HARIC — motorun kendi olcutuyle).
    Sabitler motordan CANLI okunur, kopyalanmaz.

    ⚠️ `oku_kara()` ile KARISTIRMA — o motorun CIKTISI, bu motorun GIRDISI.
    Aradaki fark tam olarak tavanlarin sahipsiz biraktigi alandir
    (12 Agustos olcumu: ~17,2 M km², karanin %22,9'u).

    Yavastir (~40 sn, ~10 MB GeoJSON) ⇒ surec icinde ONBELLEKLENIR.
    """
    global _GIRDI_KARA
    if _GIRDI_KARA is not None and bolge is None:
        return _GIRDI_KARA
    import re as _re
    from shapely.geometry import shape, box
    from shapely.ops import unary_union
    import girdi as _girdi
    BM = os.path.join(KOK, "veri-kaynak")
    _src = open(os.path.join(KOK, "arac", "uret_petek.py"), encoding="utf-8").read()
    KARA_TOL = float(_re.search(r"^KARA_TOL\s*=\s*([\d.]+)", _src, _re.M).group(1))
    DOGAL_GOL = eval(_re.search(r"^DOGAL_GOL\s*=\s*(\{[^}]*\})", _src, _re.M).group(1))
    B = bolge if bolge is not None else unary_union(
        [box(-12, -11, 146, 82), box(-25, 60, -12, 82)])
    _ne = json.load(open(os.path.join(BM, "ne_10m_land.geojson"), encoding="utf-8"))
    K = unary_union([shape(f["geometry"]).buffer(0).intersection(B)
                     for f in _ne["features"]
                     if shape(f["geometry"]).envelope.intersects(B)])
    K = K.buffer(0).simplify(KARA_TOL, preserve_topology=True).buffer(0)
    gs = []
    for f in json.load(open(os.path.join(BM, "ne_10m_lakes.geojson"),
                            encoding="utf-8"))["features"]:
        p = f["properties"]
        g = shape(f["geometry"]).buffer(0)
        if not (g.envelope.intersects(B) and g.area > 0.02):
            continue
        if (p.get("featurecla") == "Reservoir"
                and (p.get("name") or "(adsız)") not in DOGAL_GOL
                and ((p.get("year") or -99) >= 1900 or p.get("dam_name"))):
            continue                      # modern baraj golu — anakronik delik
        g = g.intersection(B)
        if not g.is_empty:
            gs.append(g)
    for eg in _girdi.oku_goller():         # tarihi gol duzeltmeleri (Aral)
        g = shape(eg["geometry"]).buffer(0).intersection(B)
        if not g.is_empty:
            gs.append(g)
    if gs:
        K = K.difference(unary_union(gs).buffer(0)
                         .simplify(0.01, preserve_topology=True).buffer(0)).buffer(0)
    if bolge is None:
        _GIRDI_KARA = K
    return K


def _oku_js(dosya, adlar):
    s = open(os.path.join(KOK, dosya), encoding="utf-8").read()
    return {a: json.loads(re.search(
        r"window\." + a + r"\s*=\s*(\[.*?\]);\s*\n", s, re.S).group(1))
        for a in adlar}


def oku_yayin_govdeleri():
    """EKRANDA GORULEN govdeler — indeks eslemesi GEREKTIRMEZ.

    ⚠️ HAVUZ SIRASI TERSTIR VE BU BIR TUZAK (uret_petek.py:2703-2704):
        window.PARCALAR    = HALKA havuzu
        window.PARCA_HALKA = parca -> halka indeks listesi
    Ilk yazimda ters aldim, `TypeError` verdi. Ters almak SESSIZ de
    olabilirdi; olmadigi icin sansliyim.

    Doner: [(kaynak, poligon), ...]  kaynak = "OSMANLI" | "tabi" | devlet id
    """
    from shapely.geometry import Polygon
    D = _oku_js("data/donemler.js", ["DONEMLER", "PARCALAR", "PARCA_HALKA"])
    V = _oku_js("data/devletler_harita.js",
                ["DEVLET_HARITA", "DEVLET_PARCALAR", "DEVLET_PARCA_HALKA"])

    def coz(parca_ix, halka_hav, parca_hav):
        out = []
        for pi in parca_ix or []:
            ks = parca_hav[pi]
            try:
                p = Polygon(halka_hav[ks[0]], [halka_hav[j] for j in ks[1:]])
                out.append(p if p.is_valid else p.buffer(0))
            except Exception:
                pass
        return out

    return D, V, coz
