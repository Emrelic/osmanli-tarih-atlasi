# -*- coding: utf-8 -*-
"""
D-GEOARAC — bugunku ulke siniri geometrisinden ulke-cifti sinir cizgilerini
parca parca cikaran alet. Girdi: veri-kaynak/ne_10m_admin_0_countries.geojson
(Natural Earth 1:10m admin-0 ulkeler). Cikti: veri-kaynak/d_bugunku_sinirlar.geojson
(cift anahtarli ISO3-ISO3 cizgi koleksiyonu) + denetim/D-GEOARAC-0916.md raporu.

Kullanim:
    py denetim/ARAC-D-SINIRCIZGI-0916.py

Kural (D-1923-0916.md, D-GEOARAC satiri): bu alet yalniz BUGUNKU sinir
geometrisini cikarir. "1923'ten bu yana degismedi" hukmunu VERMEZ — o hukmu
bolge oturumlari kendi kaynaklarina bakarak verir (D1 SS3). Bu alet yalniz
ham malzemeyi (parca parca cizgi + kalite olcumu) saglar.
"""
import json
import os
import sys
import time

import psutil
from shapely.geometry import shape, mapping
from shapely.ops import linemerge, unary_union
from shapely.strtree import STRtree

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GIRDI = os.path.join(KOK, "veri-kaynak", "ne_10m_admin_0_countries.geojson")
CIKTI_GEOJSON = os.path.join(KOK, "veri-kaynak", "d_bugunku_sinirlar.geojson")
RAPOR = os.path.join(KOK, "denetim", "D-GEOARAC-0916.md")

PROC = psutil.Process(os.getpid())


def bellek_mb():
    return PROC.memory_info().rss / 1e6


def log(msg):
    print("[%6.1fs][%6.1f MB] %s" % (time.time() - T0, bellek_mb(), msg))


T0 = time.time()


def kod_bul(props):
    """ISO_A3 -> ISO_A3_EH -> ADM0_A3 sirasiyla ilk gecerli kodu don."""
    for anahtar in ("ISO_A3", "ISO_A3_EH"):
        v = props.get(anahtar)
        if v and v != "-99":
            return v
    return props.get("ADM0_A3")


def haversine_km(lon1, lat1, lon2, lat2):
    from math import radians, sin, cos, asin, sqrt

    r = 6371.0088
    dlon = radians(lon2 - lon1)
    dlat = radians(lat2 - lat1)
    a = sin(dlat / 2) ** 2 + cos(radians(lat1)) * cos(radians(lat2)) * sin(dlon / 2) ** 2
    return 2 * r * asin(sqrt(a))


def cizgi_uzunluk_km(coords):
    return sum(
        haversine_km(coords[i][0], coords[i][1], coords[i + 1][0], coords[i + 1][1])
        for i in range(len(coords) - 1)
    )


def parcala(geom):
    """Bir intersection sonucundan yalniz CIZGI parcalarini (LineString) cikar.
    Point/MultiPoint (yalniz nokta temasi) ATILIR — bunlar gercek bir sinir
    parcasi degil, tek noktada dokunan komsuluktur (or. dort-koseli temas)."""
    if geom.is_empty:
        return []
    t = geom.geom_type
    if t == "LineString":
        return [geom]
    if t == "MultiLineString":
        return list(geom.geoms)
    if t == "GeometryCollection":
        cikti = []
        for alt in geom.geoms:
            cikti.extend(parcala(alt))
        return cikti
    # Point / MultiPoint / Polygon(dejenere) -> cizgi degil, atla
    return []


def main():
    log("basliyor, girdi okunuyor: %s" % GIRDI)
    with open(GIRDI, "r", encoding="utf-8") as f:
        veri = json.load(f)
    feats = veri["features"]
    log("okundu: %d ozellik" % len(feats))

    # --- 1) kod -> [geom, ...] grupla (ayni kodu tasiyan parcalari birlestir) ---
    kod_gruplari = {}
    kod_isim = {}
    gecersiz_once = 0
    for f in feats:
        props = f["properties"]
        kod = kod_bul(props)
        if not kod or kod == "-99":
            continue
        g = shape(f["geometry"])
        if not g.is_valid:
            gecersiz_once += 1
            g = g.buffer(0)
        kod_gruplari.setdefault(kod, []).append(g)
        if kod not in kod_isim:
            kod_isim[kod] = props.get("ADMIN") or props.get("NAME") or kod

    log("kod sayisi: %d (dejenere/gecersiz duzeltilen: %d)" % (len(kod_gruplari), gecersiz_once))

    # --- 2) her kod icin tek geometriye birlestir (coklu parcali ulkeler icin) ---
    kodlar = sorted(kod_gruplari.keys())
    geomlar = []
    for kod in kodlar:
        parcalar = kod_gruplari[kod]
        g = parcalar[0] if len(parcalar) == 1 else unary_union(parcalar)
        geomlar.append(g)
    log("birlestirme bitti, bellek olculuyor")
    log("birlestirilmis geometri sayisi: %d" % len(geomlar))

    # --- 3) STRtree ile aday komsu ciftlerini bul (bbox on-suzgeci) ---
    agac = STRtree(geomlar)
    log("STRtree kuruldu")

    aday_ciftler = set()
    for i, g in enumerate(geomlar):
        adaylar = agac.query(g)  # indeks dizisi don (shapely 2.x)
        for j in adaylar:
            j = int(j)
            if j <= i:
                continue
            aday_ciftler.add((i, j))
    log("aday cift sayisi (bbox kesisen): %d" % len(aday_ciftler))

    # --- 4) her aday cift icin gercek sinir kesisimini hesapla ---
    sonuc_ozellikler = []
    sadece_nokta_temas = 0
    kesisim_bos = 0
    cift_sayisi = 0
    parca_sayisi = 0
    toplam_uzunluk_km = 0.0
    tum_nokta_araliklari_km = []

    for say, (i, j) in enumerate(sorted(aday_ciftler)):
        if say % 2000 == 0 and say > 0:
            log("islenen aday cift: %d / %d" % (say, len(aday_ciftler)))
        ga, gb = geomlar[i], geomlar[j]
        try:
            kesisim = ga.boundary.intersection(gb.boundary)
        except Exception:
            # topoloji hatasi -- buffer(0) ile bir kez daha dene
            try:
                kesisim = ga.buffer(0).boundary.intersection(gb.buffer(0).boundary)
            except Exception:
                kesisim_bos += 1
                continue

        parcalar = parcala(kesisim)
        if not parcalar:
            if kesisim.is_empty:
                kesisim_bos += 1
            else:
                sadece_nokta_temas += 1
            continue

        birlesmis = linemerge(parcalar) if len(parcalar) > 1 else parcalar[0]
        nihai_parcalar = (
            list(birlesmis.geoms) if birlesmis.geom_type == "MultiLineString" else [birlesmis]
        )

        kod_a, kod_b = kodlar[i], kodlar[j]
        # alfabetik anahtar -- kime once kime sonra yazildigindan bagimsiz
        if kod_b < kod_a:
            kod_a, kod_b = kod_b, kod_a
        cift_anahtari = "%s-%s" % (kod_a, kod_b)

        cift_sayisi += 1
        for pno, parca in enumerate(nihai_parcalar, start=1):
            coords = list(parca.coords)
            if len(coords) < 2:
                continue
            uzunluk = cizgi_uzunluk_km(coords)
            toplam_uzunluk_km += uzunluk
            parca_sayisi += 1
            for k in range(len(coords) - 1):
                tum_nokta_araliklari_km.append(
                    haversine_km(coords[k][0], coords[k][1], coords[k + 1][0], coords[k + 1][1])
                )
            sonuc_ozellikler.append(
                {
                    "type": "Feature",
                    "properties": {
                        "cift": cift_anahtari,
                        "taraf_a": kod_a,
                        "taraf_b": kod_b,
                        "isim_a": kod_isim[kod_a],
                        "isim_b": kod_isim[kod_b],
                        "parca_no": pno,
                        "parca_sayisi": len(nihai_parcalar),
                        "nokta_sayisi": len(coords),
                        "uzunluk_km": round(uzunluk, 3),
                    },
                    "geometry": mapping(parca),
                }
            )

    log(
        "kesisim bitti: %d cift / %d cizgi parcasi / %.0f km toplam"
        % (cift_sayisi, parca_sayisi, toplam_uzunluk_km)
    )
    log(
        "aday olup cizgi VERMEYEN: %d bos-kesisim + %d yalniz-nokta-temas"
        % (kesisim_bos, sadece_nokta_temas)
    )

    # --- 5) cikti geojson'u yaz ---
    cikti = {
        "type": "FeatureCollection",
        "properties": {
            "kaynak": "veri-kaynak/ne_10m_admin_0_countries.geojson (Natural Earth 1:10m admin-0)",
            "uretim_araci": "denetim/ARAC-D-SINIRCIZGI-0916.py",
            "not": (
                "Bu dosya BUGUNKU (2020'ler) ulke siniri geometrisidir. "
                "1923'ten bu yana 'degismedi' hukmu bolge oturumlarina aittir "
                "(D-1923-0916.md SS D1 madde 3). Cizgiler ulke ciftine gore "
                "parca parca tutulur (linemerge sonrasi, ada/eksklav siniri "
                "ayri parcadir)."
            ),
        },
        "features": sonuc_ozellikler,
    }
    with open(CIKTI_GEOJSON, "w", encoding="utf-8") as f:
        json.dump(cikti, f, ensure_ascii=False)
    log("yazildi: %s (%d ozellik)" % (CIKTI_GEOJSON, len(sonuc_ozellikler)))

    # --- 6) kalite olcumu (rapor icin) ---
    tum_nokta_araliklari_km.sort()
    n = len(tum_nokta_araliklari_km)

    def yuzdelik(p):
        if n == 0:
            return 0.0
        idx = min(n - 1, int(p * n))
        return tum_nokta_araliklari_km[idx]

    ortalama_aralik_km = (sum(tum_nokta_araliklari_km) / n) if n else 0.0
    medyan_aralik_km = yuzdelik(0.5)
    p10 = yuzdelik(0.10)
    p90 = yuzdelik(0.90)
    en_kisa = tum_nokta_araliklari_km[0] if n else 0.0
    en_uzun = tum_nokta_araliklari_km[-1] if n else 0.0

    kalite = {
        "vertex_araligi_km": {
            "ortalama": ortalama_aralik_km,
            "medyan": medyan_aralik_km,
            "p10": p10,
            "p90": p90,
            "en_kisa": en_kisa,
            "en_uzun": en_uzun,
            "n_segment": n,
        },
        "cift_sayisi": cift_sayisi,
        "parca_sayisi": parca_sayisi,
        "toplam_uzunluk_km": toplam_uzunluk_km,
        "bos_kesisim": kesisim_bos,
        "yalniz_nokta_temas": sadece_nokta_temas,
        "gecersiz_geom_duzeltilen": gecersiz_once,
        "kod_sayisi": len(kodlar),
        "sure_sn": time.time() - T0,
        "bellek_mb_zirve": bellek_mb(),
    }
    with open(
        os.path.join(KOK, "denetim", "_D-GEOARAC-OLCUM-0916.json"), "w", encoding="utf-8"
    ) as f:
        json.dump(kalite, f, ensure_ascii=False, indent=2)
    log("kalite olcumu yazildi: denetim/_D-GEOARAC-OLCUM-0916.json")
    log("bitti")
    return kalite


if __name__ == "__main__":
    main()
