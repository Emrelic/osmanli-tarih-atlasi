# -*- coding: utf-8 -*-
"""KIMLIK-1923-0907 ②③ — NE'nin 258 ülkesini atlas kimlikleriyle COĞRAFÎ EŞLE.

🔴 AD EŞLEMESİ DENENDİ VE TIKANDI (SINIR-ARAP-0907 ölçtü: `NAME_EN` 6/258,
   `NAME_TR` 52/258). Sebep yazım değil ANLAM: `NAME_TR` **modern** ad verir,
   1923-10-29'da o toprak başka bir kimlikteydi. *"Suriye"* Fransız mandası,
   *"Türkiye"* `tbmm-turkiye`, *"Suudi Arabistan"* Necid+Hicaz.
   ⇒ Bu betik ADA HİÇ BAKMAZ. Ölçüt: **nokta-poligon içindelik.**

🔴 SORGU GÜNÜ 1923-10-28, ÇIPA 1923-10-29 — İKİSİ AYRI ŞEYDİR.
   Dönemler yarı açık (`f <= g < t`) ve `girdi.UFUK[1] == "1923-10-29"`; çıpa
   gününün kendisi sorulursa 3805 noktanın 3804'ü sahipsiz görünür (ölçüldü,
   tahta M-3189). Çıpa YAZILAN gün, sorgu günü OKUNAN gün.

🔴 SAHİPLİK ile ÖRTÜ AYRI SÜTUNDUR — ve karıştıran taraf Tunus'u kaybeder.
   `girdi.py`: *"isg: MOTOR TARAFINDAN KASTEN OKUNMAZ."* Yani harita
   sahipliği `d:`/`v:`/`s:`ten boyar, `isg:` yalnız app.js'in çizdiği bir
   taralı örtüdür. Tunus 1923'te `v:` (tâbi) + `isg: fransa-cumhuriyet`:
   *hukuken* Osmanlı tâbii, *fiilen* Fransız himayesi. Bir hukukî sınır
   katmanı için hangisinin alınacağı bir KAPSAM KARARIDIR — bu betik
   ikisini de ayrı sütunda verir, SEÇMEZ.

DÖRT KOVA — ve üçüncü ile dördüncü FARKLI ŞEY söyler:
  ① DOGRUDAN     NE poligonunun içinde en az bir atlas noktası var ⇒ ÖLÇÜM.
  ② EMILME       içinde nokta yok, en yakın nokta ≤ TAVAN_KM (200) ⇒
                 `CLAUDE.md §2`: noktasız bölge en yakın peteğe emilir ve O
                 PETEĞİN SAHİBİYLE boyanır. Bir TARİH iddiası DEĞİL,
                 haritanın ne gösterdiğinin YAKLAŞIK tahmini (motor kıyıya
                 ve nehre yaslar; yön doğru, sınır kesin değil).
  ③ BOYANMIYOR   en yakın nokta > 200 km. `uret_petek.py:900`
                 `TAVAN_KM = {0..4: 200}` ⇒ hiçbir petek noktasından ~200 km
                 öteye UZANMAZ. Orası emilmiyor, **hiç boyanmıyor.**
                 (`CLAUDE.md §5`: motor Çang Tang'ı *"yanlış boyamıyor, HİÇ
                 boyamıyor"* — Emre'nin hükmü: "devasa boşluklar olsun.")
  ④ OLCULEMEDI   kimlik `__KIDSIZ__`: `v:` dönemi `kid:` taşımıyor ⇒ kimlik
                 makine tarafından SORULAMIYOR (girdi.py:920). "Boş" değil,
                 "ölçülemez". `§11`: ölçülemedi ≠ temiz.

⚠️ KIYI HASSASİYETİ: NE 10m poligonu ile atlas noktası kıl payı ayrışabilir
   (Halifax limanda, Vardø fiyortta). ≤ KIYI_ESIK_KM içindeki nokta EN YAKIN
   ülkeye YASLANIR ve kayıtta `yaslandi: True` damgası taşır — sessizce
   değil. Eşiğin dışında kalan nokta `poligon_disi` kovasında durur.
"""
import io
import json
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "arac"))
import girdi  # noqa: E402

from shapely.geometry import shape, Point  # noqa: E402
from shapely.strtree import STRtree  # noqa: E402

KOK = os.path.join(os.path.dirname(__file__), "..")
GUN = "1923-10-28"          # SORGU günü  (yarı açık aralık yüzünden)
CIPA = "1923-10-29"         # kayıtlara YAZILAN gün
TAVAN_KM = 200.0            # uret_petek.py:900 — petek yarıçap tavanı
KIYI_ESIK_KM = 25.0         # NE 10m kıyı hassasiyeti payı


def sahiplik(y, g):
    """(kova, kimlik) — motorun boyadığı sahiplik. `isg:` DÂHİL DEĞİL."""
    for p in y.get("d") or []:
        if p.get("f", "") <= g < p.get("t", "9999"):
            return "d", "osmanli"
    for p in y.get("v") or []:
        if p.get("f", "") <= g < p.get("t", "9999"):
            return "v", (p.get("kid") or "__KIDSIZ__")
    for p in y.get("s") or []:
        if p.get("f", "") <= g < p.get("t", "9999"):
            return "s", p.get("d")
    return None, None


def ortu(y, g):
    for p in y.get("isg") or []:
        if p.get("f", "") <= g < p.get("t", "9999"):
            return p.get("d")
    return None


def main():
    Y = girdi.yukle(sessiz=True)
    noktalar = []
    for y in Y:
        kv, k = sahiplik(y, GUN)
        if k is None or y.get("lat") is None:
            continue
        noktalar.append({"ad": y["ad"], "lat": y["lat"], "lon": y["lon"],
                         "kova": kv, "kimlik": k, "isg": ortu(y, GUN)})
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
    icinde = [{} for _ in geos]
    ortuler = [{} for _ in geos]
    ornek = [{} for _ in geos]
    yaslanan, poligon_disi = [], []

    def ekle(i, n, yaslandi=False):
        icinde[i][n["kimlik"]] = icinde[i].get(n["kimlik"], 0) + 1
        ornek[i].setdefault(n["kimlik"], []).append(n["ad"])
        if n["isg"]:
            ortuler[i][n["isg"]] = ortuler[i].get(n["isg"], 0) + 1
        if yaslandi:
            yaslanan.append({"ad": n["ad"], "ulke": meta[i]["NAME"],
                             "kimlik": n["kimlik"]})

    for n in noktalar:
        pt = Point(n["lon"], n["lat"])
        aday = agac.query(pt, predicate="intersects")
        if len(aday):
            for i in aday:
                ekle(int(i), n)
            continue
        # ── kıyı hassasiyeti: en yakın ülkeye YASLA, ama DAMGALA ──────
        j = int(agac.nearest(pt))
        c = geos[j].exterior.interpolate(0) if geos[j].geom_type == "Polygon" \
            else None
        yak = geos[j].distance(pt)               # derece
        # dereceyi kabaca km'ye çevir: enlem 1° ≈ 111 km (üst sınır tahmini)
        yak_km = yak * 111.0
        if yak_km <= KIYI_ESIK_KM:
            ekle(j, n, yaslandi=True)
        else:
            poligon_disi.append({"ad": n["ad"], "lat": n["lat"],
                                 "lon": n["lon"], "kimlik": n["kimlik"],
                                 "en_yakin_ulke": meta[j]["NAME"],
                                 "km": round(yak_km, 1)})
        del c

    sonuc = []
    ist = {"NE_toplam": len(meta), "DOGRUDAN": 0, "EMILME": 0,
           "BOYANMIYOR": 0, "tek_kimlikli": 0, "cok_kimlikli": 0,
           "olculemedi_iceren": 0, "ortu_tasiyan": 0,
           "kiyiya_yaslanan_nokta": len(yaslanan),
           "poligon_disi_nokta": len(poligon_disi)}

    for i, m in enumerate(meta):
        kim = icinde[i]
        r = dict(m)
        if kim:
            sir = sorted(kim.items(), key=lambda kv: -kv[1])
            top = sum(kim.values())
            gercek = [k for k in kim if k != "__KIDSIZ__"]
            r.update({
                "kova": "DOGRUDAN", "nokta": top, "kimlik_adedi": len(gercek),
                "baskin": sir[0][0],
                "kimlikler": [{"kimlik": k, "nokta": n,
                               "pay": round(100.0 * n / top, 1),
                               "ornek": sorted(ornek[i][k])[:4]}
                              for k, n in sir],
            })
            if ortuler[i]:
                r["isgal_ortusu"] = dict(sorted(ortuler[i].items(),
                                                key=lambda kv: -kv[1]))
                r["_ORTU_NOT"] = ("isg: SAHIPLIK DEGIL ORTUDUR ve motor onu "
                                  "KASTEN OKUMAZ; harita sahipligi yukaridaki "
                                  "kimliklerden boyar. Hukuki sinir katmani "
                                  "icin hangisinin alinacagi KAPSAM KARARI.")
                ist["ortu_tasiyan"] += 1
            ist["DOGRUDAN"] += 1
            if "__KIDSIZ__" in kim:
                ist["olculemedi_iceren"] += 1
            if len(gercek) >= 2:
                ist["cok_kimlikli"] += 1
            elif len(gercek) == 1:
                ist["tek_kimlikli"] += 1
        else:
            c = geos[i].representative_point()
            en = min(noktalar,
                     key=lambda n: girdi.km(c.y, c.x, n["lat"], n["lon"]))
            d = round(girdi.km(c.y, c.x, en["lat"], en["lon"]), 1)
            r.update({"nokta": 0, "kimlik_adedi": 0,
                      "en_yakin": {"nokta": en["ad"], "km": d,
                                   "kimligi": en["kimlik"]}})
            if d <= TAVAN_KM:
                r["kova"] = "EMILME"
                r["_NOT"] = ("Poligon icinde atlas noktasi YOK. §2: noktasiz "
                             "bolge en yakin petege emilir ve O PETEGIN "
                             "SAHIBIYLE boyanir. TAHMIN, tarih iddiasi degil.")
                ist["EMILME"] += 1
            else:
                r["kova"] = "BOYANMIYOR"
                r["_NOT"] = ("En yakin nokta %.0f km > TAVAN_KM 200 "
                             "(uret_petek.py:900). Petek o kadar uzaga "
                             "UZANMAZ ⇒ orasi emilmiyor, HIC BOYANMIYOR. "
                             "Kimlik atamak veri degil UYDURMA olur." % d)
                ist["BOYANMIYOR"] += 1
        sonuc.append(r)

    bos_egemen = sorted(r["NAME"] for r in sonuc
                        if r["kova"] != "DOGRUDAN"
                        and r["TYPE"] in ("Sovereign country", "Country"))

    rapor = {
        "_NOT": "KIMLIK-1923-0907 adim (2)+(3). Her NE ulkesi -> %s "
                "CIPASINDAKI atlas kimligi. Olcut NOKTA-POLIGON ICINDELIK "
                "(ad DEGIL). Sorgu gunu %s (tahta M-3189)." % (CIPA, GUN),
        "sorgu_gunu": GUN, "cipa": CIPA,
        "esikler": {"TAVAN_KM": TAVAN_KM, "KIYI_ESIK_KM": KIYI_ESIK_KM,
                    "_kaynak": "TAVAN_KM uret_petek.py:900'den ALINDI, "
                               "secilmedi."},
        "istatistik": ist,
        "_kiyas": {"_NOT": "DEVRALDIM, kendim olcmedim — SINIR-ARAP-0907'nin "
                           "ad eslemesi. Cografi eslemenin kiyasi.",
                   "ad_NAME_EN": 6, "ad_NAME_TR": 52,
                   "COGRAFI": ist["DOGRUDAN"]},
        "bos_kalan_egemen_ulkeler": bos_egemen,
        "kiyiya_yaslanan": yaslanan,
        "poligon_disi": poligon_disi,
        "ulkeler": sorted(sonuc, key=lambda r: (-r["nokta"], r["NAME"] or "")),
    }

    yol = os.path.join(KOK, "denetim", "KIMLIK-1923-0907.json")
    with io.open(yol, "w", encoding="utf-8") as f:
        json.dump(rapor, f, ensure_ascii=False, indent=1)

    print("\n=== KOVALAR ===")
    for k in ("NE_toplam", "DOGRUDAN", "tek_kimlikli", "cok_kimlikli",
              "EMILME", "BOYANMIYOR", "olculemedi_iceren", "ortu_tasiyan",
              "kiyiya_yaslanan_nokta", "poligon_disi_nokta"):
        print("  %-24s %d" % (k, ist[k]))
    print("\n  ad eslemesi (DEVRALINDI)   NAME_EN 6 · NAME_TR 52")
    print("  COGRAFI eslesme            %d" % ist["DOGRUDAN"])
    print("\n  bos kalan EGEMEN ulke (%d): %s"
          % (len(bos_egemen), ", ".join(bos_egemen)))
    print("\nyazildi: %s" % yol)


if __name__ == "__main__":
    main()
