# -*- coding: utf-8 -*-
"""
SINIR-ASYA-0907 · kenar cikarimi
Sartname: oturumlar/SINIR-HUKUKI-ORTAK-0907.md

BOLGE: Asya (Arap/Anadolu/Kafkas kollari HARIC) + Okyanusya + Amerika.
Yani "otekilerin disinda kalan her yer".

C13 gerekce: kenar cikariminin MEKANIK oldugu KADEME-MODEL-0907 tarafindan
olculdu (342 ciftin 342'si birebir ortak tepe). O olcumu DEVRALMIYORUM -
kendi bolgem icin YENIDEN olcuyorum; alet birebirlik sinavini kendi kosar.

linemerge SART: shapely boundary.intersection kenari iki noktali parcalarin
yigini olarak dondurur; her ic tepe IKI KEZ sayilir (KADEME-MODEL olctu).

BOLGE KUTU ILE TURETILMEDI, ADIYLA YAZILDI: bir enlem/boylam kutusu
Iran'i, Turkiye'yi, Rusya'nin Avrupa yakasini da yakalar - onlar baska
kollarin. NE'nin CONTINENT/SUBREGION alanlari EKRANA BASILARAK okundu
(258 girdi), liste oradan cikarildi.
"""
import json, sys, io, os
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

from shapely.geometry import shape
from shapely.ops import linemerge

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NE = os.path.join(KOK, "veri-kaynak", "ne_10m_admin_0_countries.geojson")

# ---------------------------------------------------------------- BOLGE
BOLGE = {
    # Asya / Orta Asya
    "Kazakhstan", "Kyrgyzstan", "Tajikistan", "Turkmenistan", "Uzbekistan",
    "Baykonur Cosmodrome",
    # Asya / Dogu Asya
    "China", "Hong Kong S.A.R.", "Japan", "Macao S.A.R", "Mongolia",
    "North Korea", "South Korea", "Taiwan",
    # Asya / Guneydogu Asya
    "Brunei", "Cambodia", "East Timor", "Indonesia", "Laos", "Malaysia",
    "Myanmar", "Philippines", "Singapore", "Thailand", "Vietnam",
    "Scarborough Reef", "Spratly Islands",
    # Asya / Guney Asya
    "Afghanistan", "Bangladesh", "Bhutan", "India", "Nepal", "Pakistan",
    "Sri Lanka", "Siachen Glacier", "Maldives", "Indian Ocean Territories",
    "British Indian Ocean Territory",
    # Okyanusya
    "Australia", "New Zealand", "Papua New Guinea", "Fiji", "Solomon Islands",
    "Vanuatu", "New Caledonia", "Norfolk Island", "Ashmore and Cartier Islands",
    "Coral Sea Islands", "Federated States of Micronesia", "Guam", "Kiribati",
    "Marshall Islands", "Nauru", "Northern Mariana Islands", "Palau",
    "American Samoa", "Cook Islands", "French Polynesia", "Niue",
    "Pitcairn Islands", "Samoa", "Tonga", "Tuvalu", "Wallis and Futuna",
    # Kuzey Amerika
    "Canada", "United States of America", "Mexico", "Greenland", "Bermuda",
    "Saint Pierre and Miquelon", "United States Minor Outlying Islands",
    "Belize", "Costa Rica", "El Salvador", "Guatemala", "Honduras",
    "Nicaragua", "Panama", "Clipperton Island",
    # Karayipler
    "Anguilla", "Antigua and Barbuda", "Aruba", "Bajo Nuevo Bank (Petrel Is.)",
    "Barbados", "British Virgin Islands", "Cayman Islands", "Cuba",
    "Curaçao", "Dominica", "Dominican Republic", "Grenada", "Haiti",
    "Jamaica", "Montserrat", "Puerto Rico", "Saint Barthelemy",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin",
    "Saint Vincent and the Grenadines", "Serranilla Bank", "Sint Maarten",
    "The Bahamas", "Trinidad and Tobago", "Turks and Caicos Islands",
    "US Naval Base Guantanamo Bay", "United States Virgin Islands",
    # Guney Amerika
    "Argentina", "Bolivia", "Brazil", "Brazilian Island", "Chile", "Colombia",
    "Ecuador", "Falkland Islands", "Guyana", "Paraguay", "Peru",
    "Southern Patagonian Ice Field", "Suriname", "Uruguay", "Venezuela",
}

# Bolgemle kenar PAYLASAN ama bolgeme AIT OLMAYAN uclar.
# Bunlar da kenar uretir; cikariyorum ama AYRI isaretliyorum -
# "hangi kol yazacak" karari koordinatorun (ORTAK sartname VII).
KOMSU = {"Russia", "Iran"}

# NE'de girdi olan ama DEVLET OLMAYAN kayitlar (ORTAK sartname III):
# `kimlik-degil` kovasi. Yoksa Baykonur'a `bulunamadi` yazilir ve o
# YANLIS DAMGA olur.
KIMLIK_DEGIL = {
    "Baykonur Cosmodrome",            # Lease  — Rusya'ya kirali
    "US Naval Base Guantanamo Bay",   # Lease  — ABD'ye kirali
    "Siachen Glacier",                # Indeterminate — Hindistan/Pakistan
    "Spratly Islands", "Scarborough Reef", "Bajo Nuevo Bank (Petrel Is.)",
    "Serranilla Bank", "Brazilian Island", "Southern Patagonian Ice Field",
    "Indian Ocean Territories", "Coral Sea Islands",
    "Ashmore and Cartier Islands", "Clipperton Island",
    "United States Minor Outlying Islands",
}


def tepeler(geom):
    s = set()
    gs = geom.geoms if hasattr(geom, "geoms") else [geom]
    for pol in gs:
        for ring in [pol.exterior] + list(pol.interiors):
            for c in ring.coords:
                s.add((round(c[0], 9), round(c[1], 9)))
    return s


def cikar():
    with open(NE, "r", encoding="utf-8") as f:
        gj = json.load(f)

    ilgi = BOLGE | KOMSU
    gov = {}
    for ft in gj["features"]:
        ad = ft["properties"].get("ADMIN")
        if ad in ilgi:
            g = shape(ft["geometry"])
            gov[ad] = {"g": g, "b": g.bounds, "p": ft["properties"],
                       "gecerli": g.is_valid}

    eksik = sorted(ilgi - set(gov))
    adlar = sorted(gov)

    kenarlar, nokta_degen, aday = [], [], 0
    for i in range(len(adlar)):
        for j in range(i + 1, len(adlar)):
            a, b = adlar[i], adlar[j]
            if a in KOMSU and b in KOMSU:
                continue                      # ikisi de bolge disi
            ba, bb = gov[a]["b"], gov[b]["b"]
            # kutu on-suzgeci: 258 poligonda pairwise distance pahali
            if ba[2] < bb[0] or bb[2] < ba[0] or ba[3] < bb[1] or bb[3] < ba[1]:
                continue
            aday += 1
            ga, gb = gov[a]["g"], gov[b]["g"]
            if ga.distance(gb) > 0:
                continue
            ort = ga.boundary.intersection(gb.boundary)
            if ort.is_empty or ort.length <= 0:
                if not ort.is_empty:
                    nokta_degen.append([a, b])   # yalniz NOKTADA degiyor
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

            # BIREBIRLIK SINAVI (KADEME-MODEL'in IKINCI aleti):
            # paylasilan cizginin tepelerinin kaci IKI TARAFTA DA var?
            ta, tb = tepeler(ga), tepeler(gb)
            benzersiz = set((round(c[0], 9), round(c[1], 9))
                            for p in parcalar for c in p)
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
                "a_kimlik_degil": a in KIMLIK_DEGIL,
                "b_kimlik_degil": b in KIMLIK_DEGIL,
                "uzunluk_derece": round(hat.length, 5),
                "parca": len(gc),
                "tepe_ham": len(benzersiz),
                "tepe_3ond": sum(len(p) for p in gc),
                "birebir_eksik": len(eksik_tepe),
                "gc": gc,
            })

    kenarlar.sort(key=lambda k: (-k["uzunluk_derece"], k["ne_a"], k["ne_b"]))
    return {
        "_NOT": ("SINIR-ASYA-0907 kenar cikarimi. NE 10m admin-0, "
                 "2020'ler sinirlari. Bolge ADIYLA tanimlandi, kutu ile DEGIL."),
        "bolge_girdi": len(BOLGE), "komsu_girdi": len(KOMSU),
        "eksik_ulke_adi": eksik,
        "gecersiz_geometri": [a for a in adlar if not gov[a]["gecerli"]],
        "kutu_aday_cift": aday,
        "nokta_degen": nokta_degen,
        "kenar_sayisi": len(kenarlar),
        "kenarlar": kenarlar,
    }


if __name__ == "__main__":
    r = cikar()
    cikti = os.path.join(KOK, "denetim", "OLCUM-SINIR-ASYA-KENAR-0907.json")
    with open(cikti, "w", encoding="utf-8") as f:
        json.dump(r, f, ensure_ascii=False, separators=(",", ":"))
    print("bolge / komsu girdi :", r["bolge_girdi"], "/", r["komsu_girdi"])
    print("NE'de BULUNAMAYAN ad:", r["eksik_ulke_adi"])
    print("gecersiz geometri   :", r["gecersiz_geometri"])
    print("kutu aday cift      :", r["kutu_aday_cift"])
    print("yalniz noktada degen:", r["nokta_degen"])
    print("KENAR               :", r["kenar_sayisi"])
    print("birebir EKSIK tepe  :", sum(k["birebir_eksik"] for k in r["kenarlar"]))
    print("tepe ham / 3ond     :",
          sum(k["tepe_ham"] for k in r["kenarlar"]), "/",
          sum(k["tepe_3ond"] for k in r["kenarlar"]))
    print("cikti               :", os.path.getsize(cikti), "bayt")
    print()
    for k in r["kenarlar"]:
        d = ""
        if not (k["a_bolgede"] and k["b_bolgede"]):
            d += "  [BOLGE DISI UC]"
        if k["a_kimlik_degil"] or k["b_kimlik_degil"]:
            d += "  [KIMLIK-DEGIL]"
        print("  %-26s %-26s parca=%d tepe=%5d uzn=%8.3f%s"
              % (k["ne_a"], k["ne_b"], k["parca"], k["tepe_3ond"],
                 k["uzunluk_derece"], d))
