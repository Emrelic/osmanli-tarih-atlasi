# -*- coding: utf-8 -*-
"""KIMLIK-1923-0907 ②③ — NE'nin 258 ülkesini atlas kimlikleriyle COĞRAFÎ EŞLE.

🔴 AD EŞLEMESİ DENENDİ VE TIKANDI (SINIR-ARAP-0907 ölçtü: `NAME_EN` 6/258,
   `NAME_TR` 52/258). Sebep yazım değil ANLAM: `NAME_TR` **modern** ad verir,
   1923-10-29'da o toprak başka bir kimlikteydi. *"Suriye"* Fransız mandası,
   *"Türkiye"* `tbmm-turkiye`, *"Suudi Arabistan"* Necid/`suud-ucuncu`.
   ⇒ Bu betik ADA HİÇ BAKMAZ. Ölçüt: **nokta-poligon içindelik.**

🔴 SORGU GÜNÜ 1923-10-28, ÇIPA 1923-10-29 — ikisi ayrı şeydir.
   Dönemler yarı açık (`f <= g < t`) ve `UFUK[1] == "1923-10-29"`; çıpa
   gününün kendisi sorulursa 3805 noktanın 3804'ü sahipsiz görünür (ölçüldü,
   tahta M-3189). Çıpa YAZILAN gün, sorgu günü OKUNAN gün.

ÜÇ KOVA — ve üçüncüsü ikincisinden farklı bir ŞEY söyler:
  ① DOGRUDAN   NE poligonunun İÇİNDE en az bir atlas noktası var
               ⇒ ölçüm. O toprakta 1923'te fiilen şu kimlik(ler) vardı.
  ② EMILME     içinde HİÇ nokta yok ⇒ `CLAUDE.md §2`: noktasız bölge EN
               YAKIN peteğe emilir ve O PETEĞİN SAHİBİYLE boyanır.
               ⇒ Bu bir TARİH İDDİASI DEĞİL, HARİTANIN NE GÖSTERDİĞİ
               tahminidir. Ayrı kovada, mesafesiyle birlikte durur.
               ⚠️ Yaklaşıktır: motor kıyıya/nehre yaslar, biz düz mesafe
               ölçüyoruz. Yön doğru, sınır kesin değil.
  ③ OLCULEMEDI kimlik `__KIDSIZ__` — `v:` dönemi `kid:` taşımıyor, yani
               kimlik SERBEST METİN ve makine soramıyor (girdi.py:920).
               "Boş" değil, "ölçülemez". `§11`: ölçülemedi ≠ temiz.
"""
import io
import json
import math
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "arac"))
import girdi  # noqa: E402

from shapely.geometry import shape, Point  # noqa: E402
from shapely.strtree import STRtree  # noqa: E402

KOK = os.path.join(os.path.dirname(__file__), "..")
GUN = "1923-10-28"          # SORGU günü
CIPA = "1923-10-29"         # kayıtlara yazılan gün


def kimlik(y, g):
    for p in y.get("d") or []:
        if p.get("f", "") <= g < p.get("t", "9999"):
            return "osmanli"
    for p in y.get("v") or []:
        if p.get("f", "") <= g < p.get("t", "9999"):
            return p.get("kid") or "__KIDSIZ__"
    for p in y.get("s") or []:
        if p.get("f", "") <= g < p.get("t", "9999"):
            return p.get("d")
    return None


def km(a_lat, a_lon, b_lat, b_lon):
    return girdi.km(a_lat, a_lon, b_lat, b_lon)


def main():
    Y = girdi.yukle(sessiz=True)
    noktalar = []
    for y in Y:
        k = kimlik(y, GUN)
        if k is None or y.get("lat") is None:
            continue
        noktalar.append((y["ad"], y["lat"], y["lon"], k))
    print("canli nokta (%s): %d / %d" % (GUN, len(noktalar), len(Y)))

    ne = json.load(io.open(
        os.path.join(KOK, "veri-kaynak", "ne_10m_admin_0_countries.geojson"),
        encoding="utf-8"))["features"]
    print("NE girdi: %d" % len(ne))

    geos, meta = [], []
    for f in ne:
        g = shape(f["geometry"])
        if not g.is_valid:
            g = g.buffer(0)
        geos.append(g)
        p = f["properties"]
        meta.append({"NAME": p.get("NAME"), "NAME_EN": p.get("NAME_EN"),
                     "NAME_TR": p.get("NAME_TR"), "ISO_A3": p.get("ISO_A3"),
                     "ADM0_A3": p.get("ADM0_A3"), "TYPE": p.get("TYPE"),
                     "SOVEREIGNT": p.get("SOVEREIGNT")})

    agac = STRtree(geos)
    icinde = [{} for _ in geos]     # ülke indeksi -> {kimlik: sayı}
    ornek = [{} for _ in geos]
    disarida = []                   # hiçbir poligona düşmeyen nokta

    for ad, lat, lon, k in noktalar:
        pt = Point(lon, lat)
        aday = agac.query(pt, predicate="intersects")
        if len(aday) == 0:
            disarida.append((ad, lat, lon, k))
            continue
        for i in aday:
            i = int(i)
            icinde[i][k] = icinde[i].get(k, 0) + 1
            ornek[i].setdefault(k, []).append(ad)

    # ── kovalar ────────────────────────────────────────────────────────
    sonuc, ist = [], {"dogrudan": 0, "cok_kimlikli": 0, "tek_kimlikli": 0,
                      "emilme": 0, "olculemedi_iceren": 0}
    for i, m in enumerate(meta):
        kim = icinde[i]
        kayit = dict(m)
        if kim:
            sirali = sorted(kim.items(), key=lambda kv: -kv[1])
            kayit["kova"] = "DOGRUDAN"
            kayit["nokta"] = sum(kim.values())
            kayit["kimlikler"] = [
                {"kimlik": k, "nokta": n,
                 "pay": round(100.0 * n / sum(kim.values()), 1),
                 "ornek": sorted(ornek[i][k])[:4]}
                for k, n in sirali]
            kayit["baskin"] = sirali[0][0]
            gercek = [k for k in kim if k != "__KIDSIZ__"]
            kayit["kimlik_adedi"] = len(gercek)
            ist["dogrudan"] += 1
            if "__KIDSIZ__" in kim:
                ist["olculemedi_iceren"] += 1
            if len(gercek) >= 2:
                ist["cok_kimlikli"] += 1
            elif len(gercek) == 1:
                ist["tek_kimlikli"] += 1
        else:
            # nokta YOK → §2 emilme: en yakın noktanın kimliği
            c = geos[i].representative_point()
            en = min(noktalar,
                     key=lambda n: km(c.y, c.x, n[1], n[2]))
            kayit["kova"] = "EMILME"
            kayit["nokta"] = 0
            kayit["kimlik_adedi"] = 0
            kayit["emilme"] = {
                "_NOT": "NE poligonu icinde HIC atlas noktasi yok. CLAUDE.md "
                        "§2: noktasiz bolge en yakin petege emilir ve O "
                        "PETEGIN SAHIBIYLE boyanir. Bu bir TARIH iddiasi "
                        "DEGIL, haritanin ne gosterdiginin YAKLASIK "
                        "tahminidir (motor kiyiya/nehre yaslar).",
                "en_yakin_nokta": en[0],
                "km": round(km(c.y, c.x, en[1], en[2]), 1),
                "kimligi": en[3],
            }
            ist["emilme"] += 1
        sonuc.append(kayit)

    ist["NE_toplam"] = len(meta)
    ist["poligon_disi_nokta"] = len(disarida)

    # ── ad eşlemesi KIYASI — coğrafyanın niçin gerektiğinin ölçüsü ──────
    # (ad eşlemesi burada YENİDEN üretilmiyor; SINIR-ARAP'ın sayısı
    #  DEVRALINDI ve kıyas olarak duruyor — bkz. rapor `_kiyas`.)

    rapor = {
        "_NOT": "KIMLIK-1923-0907 adim (2)+(3). Her NE ulkesi -> "
                "1923-10-29 CIPASINDAKI atlas kimligi. Olcut: NOKTA-POLIGON "
                "ICINDELIK (ad DEGIL). Sorgu gunu %s, cipa %s — ikisi ayri "
                "sey (tahta M-3189)." % (GUN, CIPA),
        "sorgu_gunu": GUN,
        "cipa": CIPA,
        "istatistik": ist,
        "_kiyas": {
            "_NOT": "DEVRALDIM, kendim olcmedim — SINIR-ARAP-0907'nin ad "
                    "eslemesi sayisi. Cografi eslemenin kiyasi olarak durur.",
            "ad_eslemesi_NAME_EN": 6,
            "ad_eslemesi_NAME_TR": 52,
            "cografi_eslesme": ist["dogrudan"],
        },
        "poligon_disi_nokta_ornek": [
            {"ad": a, "lat": la, "lon": lo, "kimlik": k}
            for a, la, lo, k in disarida[:25]],
        "ulkeler": sorted(sonuc, key=lambda r: (-r["nokta"], r["NAME"] or "")),
    }

    yol = os.path.join(KOK, "denetim", "KIMLIK-1923-0907.json")
    with io.open(yol, "w", encoding="utf-8") as f:
        json.dump(rapor, f, ensure_ascii=False, indent=1)

    print("\n=== KOVALAR ===")
    for k in ("NE_toplam", "dogrudan", "tek_kimlikli", "cok_kimlikli",
              "emilme", "olculemedi_iceren", "poligon_disi_nokta"):
        print("  %-22s %d" % (k, ist[k]))
    print("\n  ad eslemesi (devralindi)  NAME_EN 6 · NAME_TR 52")
    print("  COGRAFI eslesme           %d" % ist["dogrudan"])
    print("\nyazildi: %s" % yol)


if __name__ == "__main__":
    main()
