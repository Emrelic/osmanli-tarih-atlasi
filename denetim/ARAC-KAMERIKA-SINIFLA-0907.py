# -*- coding: utf-8 -*-
"""KUZEY-AMERIKA-DEVIR-0907 ① — 37 noktayı SAY ve SINIFLANDIR.

SORU: modern ABD/Kanada/Meksika poligonunun içinde duran bir atlas noktası,
1923-10-28'de KOMŞU ülkenin kimliğini mi taşıyor?

🔴 BU BETİK BİR HÜKÜM VERMEZ, BİR ADAY LİSTESİ ÜRETİR.
   Modern poligon 1923 sınırı DEĞİLDİR — çoğu yerde aynıdır ama her yerde
   değil, ve bu betik farkı bilmez. Bir noktanın *"yanlış kimlikte"* olduğu
   ancak KAYNAK okunarak söylenir (`§4`). Burada üretilen şey **nereye
   bakılacağıdır**, ne bulunacağı değil.

🔴 İKİ YÖNE DE BAKILIR (`§3.5.1`): yalnız *"ABD içinde meksika/kanada var mı"*
   değil, *"Meksika/Kanada içinde abd var mı"* da sorulur. Tek yönlü arama
   yarısını kaçırır — ve hangi yöne kaçırdığı komşunun kimliğine bağlıdır.

🔴 SORGU GÜNÜ 1923-10-28 (çıpa 1923-10-29 — yarı açık aralık, tahta M-3189).
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
GUN = "1923-10-28"
# Modern ülke -> o ülkede 1923'te BEKLENEN atlas kimliği.
# ⚠️ "Beklenen" bir HÜKÜM DEĞİL, bir SÜZGEÇTİR: bu eşleşmeyen kayıt
#    incelenecekler listesine girer, "yanlış" ilan edilmez.
BEKLENEN = {"United States of America": "abd",
            "Canada": "kanada",
            "Mexico": "meksika"}


def sahiplik(y, g):
    for p in y.get("d") or []:
        if p.get("f", "") <= g < p.get("t", "9999"):
            return "osmanli", p
    for p in y.get("v") or []:
        if p.get("f", "") <= g < p.get("t", "9999"):
            return (p.get("kid") or "__KIDSIZ__"), p
    for p in y.get("s") or []:
        if p.get("f", "") <= g < p.get("t", "9999"):
            return p.get("d"), p
    return None, None


def main():
    Y = girdi.yukle(sessiz=True)
    ne = json.load(io.open(
        os.path.join(KOK, "veri-kaynak", "ne_10m_admin_0_countries.geojson"),
        encoding="utf-8"))["features"]
    geos, adlar = [], []
    for f in ne:
        if f["properties"].get("NAME") not in BEKLENEN:
            continue
        g = shape(f["geometry"])
        if not g.is_valid:
            g = g.buffer(0)
        geos.append(g)
        adlar.append(f["properties"]["NAME"])
    agac = STRtree(geos)
    print("poligon: %s" % adlar)

    uyan, sapan = {a: 0 for a in adlar}, []
    for y in Y:
        if y.get("lat") is None:
            continue
        pt = Point(y["lon"], y["lat"])
        hit = agac.query(pt, predicate="intersects")
        if len(hit) == 0:
            continue
        ulke = adlar[int(hit[0])]
        kim, don = sahiplik(y, GUN)
        if kim is None:
            continue
        if kim == BEKLENEN[ulke]:
            uyan[ulke] += 1
            continue
        zincir = [{"kat": kat, "f": p.get("f"), "t": p.get("t"),
                   "kimlik": p.get("d") or p.get("kid") or p.get("k")}
                  for kat in ("s", "d", "v", "isg")
                  for p in (y.get(kat) or [])]
        zincir.sort(key=lambda z: (z["f"] or ""))
        sapan.append({
            "ad": y["ad"], "lat": y["lat"], "lon": y["lon"],
            "dosya": y.get("_kaynak"),
            "modern_ulke": ulke, "beklenen": BEKLENEN[ulke],
            "kimlik_1923": kim,
            "son_donem": {"f": don.get("f"), "t": don.get("t")},
            "ufka_kadar": (don.get("t") == "1923-10-29"),
            "kaynak_alani": y.get("kaynak"),
            "zincir": zincir,
        })

    # ── coğrafî kümeleme: hangi devir antlaşmasının menzilinde? ─────────
    # ⚠️ Bu kutular KABA BİR YÖNLENDİRMEDİR, bir tapu değil. Amaç
    #    "hangi kaynağa bakayım" sorusunu daraltmak (§4'ün "dar slug tutmazsa
    #    kapsayıcıyı dene" mantığının coğrafî hâli). Kutu sınırında duran bir
    #    nokta İKİ adaya da girebilir; hüküm kaynağındır.
    def oner(r):
        la, lo = r["lat"], r["lon"]
        if r["modern_ulke"] != "United States of America":
            return "TERS YON — ayrica incelenecek"
        if lo < -130 and la > 54:
            return "Alaska (Rusya'dan devir) — ayri zincir"
        if la >= 42 and -125 <= lo <= -111:
            return "Oregon Country (Pasifik kuzeybatisi)"
        if la < 42 and lo <= -94:
            return "Meksika devri (Guadalupe Hidalgo / Gadsden / Teksas)"
        if lo > -94:
            return "Dogu ABD — Louisiana/Florida disinda, AYRI bakilmali"
        return "SINIFLANMADI — elle bakilacak"

    for r in sapan:
        r["cografi_oneri"] = oner(r)

    from collections import Counter
    ck = Counter(r["cografi_oneri"] for r in sapan)
    ckim = Counter("%s icinde %s" % (r["modern_ulke"], r["kimlik_1923"])
                   for r in sapan)

    rapor = {
        "_NOT": "KUZEY-AMERIKA-DEVIR-0907 adim (1). ADAY LISTESIDIR, HUKUM "
                "DEGIL: modern poligon 1923 sinirini TEMSIL ETMEZ. Sorgu "
                "gunu %s." % GUN,
        "sorgu_gunu": GUN,
        "uyan_nokta": uyan,
        "sapan_toplam": len(sapan),
        "sapma_dagilimi": dict(ckim),
        "cografi_dagilim": dict(ck),
        "ufka_kadar_suren": sum(1 for r in sapan if r["ufka_kadar"]),
        "sapanlar": sorted(sapan, key=lambda r: (r["cografi_oneri"],
                                                 r["ad"])),
    }
    yol = os.path.join(KOK, "denetim", "KUZEY-AMERIKA-DEVIR-0907-ADIM1.json")
    with io.open(yol, "w", encoding="utf-8") as f:
        json.dump(rapor, f, ensure_ascii=False, indent=1)

    print("\nuyan: %s" % uyan)
    print("SAPAN toplam: %d  (ufka kadar suren: %d)"
          % (len(sapan), rapor["ufka_kadar_suren"]))
    print("\n-- sapma dagilimi --")
    for k, v in ckim.most_common():
        print("  %-42s %d" % (k, v))
    print("\n-- cografi oneri --")
    for k, v in ck.most_common():
        print("  %-52s %d" % (k, v))
    print("\nyazildi: %s" % yol)


if __name__ == "__main__":
    main()
