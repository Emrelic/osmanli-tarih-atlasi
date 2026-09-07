# -*- coding: utf-8 -*-
"""
SINIR-BALKAN-0907 · kenar cikarimi
Sartname: oturumlar/SINIR-HUKUKI-ORTAK-0907.md

NE 10m admin-0 poligonlarindan, BALKANLAR + ORTA/DOGU AVRUPA bolgesindeki
ulkelerin PAYLASTIGI KENARLARI cikarir.

C13 gerekce: kenar cikarimi MEKANIK oldugu olçüldü (KADEME-MODEL-0907):
342 ciftin 342'si birebir ortak tepe tasiyor. Tolerans YOK.
Ama o olcumu DEVRALMIYORUM - kendi bolgem icin YENIDEN olcuyorum (sartname III).

linemerge SART: shapely boundary.intersection kenari iki noktali parcalarin
yigini olarak dondurur; her ic tepe IKI KEZ sayilir (KADEME-MODEL olctu).
"""
import json, sys, io, os
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

from shapely.geometry import shape
from shapely.ops import linemerge

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NE = os.path.join(KOK, "veri-kaynak", "ne_10m_admin_0_countries.geojson")

# Bolge tanimi: NE ADMIN adlariyla. ACIKCA yazildi, kutu ile turetilmedi -
# bir kutu Almanya'yi ve Italya'yi da yakalar, onlar baska kollarin.
BOLGE = {
    # Balkanlar
    "Albania", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Greece",
    "Kosovo", "Montenegro", "North Macedonia", "Republic of Serbia", "Slovenia",
    # Orta Avrupa
    "Austria", "Czechia", "Hungary", "Poland", "Slovakia",
    # Dogu Avrupa
    "Belarus", "Moldova", "Romania", "Ukraine",
    # Baltik
    "Estonia", "Latvia", "Lithuania",
}
# Bolge ile komsu olan ama bolgeye AIT OLMAYAN uclar da kenar uretir.
# Onlari da cikariyorum ama AYRI isaretliyorum: kenar iki tarafli, ve
# "hangi kol yazacak" karari koordinatorun.
KOMSU = {"Germany", "Italy", "Russia", "Turkey", "Switzerland", "Finland"}


def cikar():
    with open(NE, "r", encoding="utf-8") as f:
        gj = json.load(f)

    ilgi = BOLGE | KOMSU
    gov = {}
    for ft in gj["features"]:
        ad = ft["properties"].get("ADMIN")
        if ad in ilgi:
            g = shape(ft["geometry"])
            gov[ad] = {"g": g, "p": ft["properties"], "gecerli": g.is_valid}

    eksik = sorted(ilgi - set(gov))
    adlar = sorted(gov)

    kenarlar = []
    nokta_degen = []
    for i in range(len(adlar)):
        for j in range(i + 1, len(adlar)):
            a, b = adlar[i], adlar[j]
            if a in KOMSU and b in KOMSU:
                continue  # ikisi de bolge disi -> benim kenarim degil
            ga, gb = gov[a]["g"], gov[b]["g"]
            if not ga.bounds or not gb.bounds:
                continue
            if ga.distance(gb) > 0:
                continue
            ort = ga.boundary.intersection(gb.boundary)
            if ort.is_empty:
                continue
            if ort.length <= 0:
                nokta_degen.append([a, b])
                continue
            hat = linemerge(ort) if ort.geom_type != "LineString" else ort
            parcalar = []
            if hat.geom_type == "LineString":
                parcalar = [list(hat.coords)]
            elif hat.geom_type in ("MultiLineString", "GeometryCollection"):
                for gg in hat.geoms:
                    if gg.geom_type == "LineString" and len(gg.coords) >= 2:
                        parcalar.append(list(gg.coords))
            if not parcalar:
                nokta_degen.append([a, b])
                continue

            # birebirlik sinavi: paylasilan cizginin tepelerinin kaci
            # IKI TARAFTA DA var? (KADEME-MODEL'in IKINCI aleti)
            def tepeler(geom):
                s = set()
                gs = geom.geoms if hasattr(geom, "geoms") else [geom]
                for pol in gs:
                    for ring in [pol.exterior] + list(pol.interiors):
                        for c in ring.coords:
                            s.add((round(c[0], 9), round(c[1], 9)))
                return s

            ta, tb = tepeler(ga), tepeler(gb)
            hep = [(round(c[0], 9), round(c[1], 9)) for p in parcalar for c in p]
            benzersiz = set(hep)
            eksik_tepe = [t for t in benzersiz if t not in ta or t not in tb]

            # 3 ondalik, ardisik tekrarsiz (proje hassasiyeti)
            gc = []
            for p in parcalar:
                yeni = []
                for x, y in p:
                    nx, ny = round(x, 3), round(y, 3)
                    if not yeni or yeni[-1] != [nx, ny]:
                        yeni.append([nx, ny])
                if len(yeni) >= 2:
                    gc.append(yeni)

            kenarlar.append({
                "ne_a": a, "ne_b": b,
                "a_bolgede": a in BOLGE, "b_bolgede": b in BOLGE,
                "uzunluk_derece": round(hat.length, 5),
                "parca": len(gc),
                "tepe_ham": len(benzersiz),
                "tepe_3ond": sum(len(p) for p in gc),
                "birebir_eksik": len(eksik_tepe),
                "gc": gc,
            })

    kenarlar.sort(key=lambda k: (k["ne_a"], k["ne_b"]))
    return {
        "_NOT": "SINIR-BALKAN-0907 kenar cikarimi. NE 10m admin-0, 2020'ler sinirlari.",
        "eksik_ulke_adi": eksik,
        "gecersiz_geometri": [a for a in adlar if not gov[a]["gecerli"]],
        "nokta_degen": nokta_degen,
        "kenar_sayisi": len(kenarlar),
        "kenarlar": kenarlar,
    }


if __name__ == "__main__":
    r = cikar()
    cikti = os.path.join(KOK, "denetim", "OLCUM-SINIR-BALKAN-KENAR-0907.json")
    with open(cikti, "w", encoding="utf-8") as f:
        json.dump(r, f, ensure_ascii=False, separators=(",", ":"))
    print("eksik ulke adi   :", r["eksik_ulke_adi"])
    print("gecersiz geometri:", r["gecersiz_geometri"])
    print("yalniz noktada degen:", r["nokta_degen"])
    print("KENAR            :", r["kenar_sayisi"])
    tb = sum(k["birebir_eksik"] for k in r["kenarlar"])
    print("birebir EKSIK tepe (toplam):", tb)
    print("tepe ham/3ond    :",
          sum(k["tepe_ham"] for k in r["kenarlar"]),
          "/", sum(k["tepe_3ond"] for k in r["kenarlar"]))
    print("gecerli JSON     :", os.path.getsize(cikti), "bayt")
    print()
    for k in r["kenarlar"]:
        d = "" if (k["a_bolgede"] and k["b_bolgede"]) else "  [BOLGE DISI UC]"
        print("  %-28s %-28s parca=%d tepe=%5d uzn=%8.3f%s"
              % (k["ne_a"], k["ne_b"], k["parca"], k["tepe_3ond"],
                 k["uzunluk_derece"], d))
