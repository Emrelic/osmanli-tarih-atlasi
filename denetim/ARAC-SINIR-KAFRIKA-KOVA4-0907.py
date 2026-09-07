# -*- coding: utf-8 -*-
"""DÖRDÜNCÜ KOVA UYGULAMASI — SINIR-KAFRIKA-0907

Ortak şartname `§②` 7 Eylül 14:53'te değişti: `hal:"ayni-kimlik"` eklendi
ve sınavı MEKANİK — *"1923'te kenarın iki ucu AYNI atlas kimliğini mi
taşıyor?"*

🔴 Ve kimlik artık BENİM ölçümümden değil, YETKİLİ ortak tablodan gelir:
   `denetim/KIMLIK-1923-0907.json` (KIMLIK-1923-0907 üretti, M-3205).
   Kendi ölçümüm KIYAS olarak tutulur ve AYRIŞMA BASILIR — iki bağımsız
   ölçüm, tek ölçümden değerlidir.

🔴 SORGU GÜNÜ: yetkili tablo `1923-10-28` kullanıyor. Ben `1923-10-01`
   kullanmıştım; ikisi de `1923-10-29` tuzağından kaçıyor ama AYNI DEĞİL —
   fark ölçülür ve basılır.
"""
import io
import json
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def main():
    K = json.load(io.open(os.path.join(KOK, "denetim", "KIMLIK-1923-0907.json"),
                          encoding="utf-8"))
    tablo = K["kisa_tablo"]["tablo"]
    print("yetkili tablo sorgu gunu: %s  ·  cipa: %s"
          % (K.get("sorgu_gunu"), K.get("cipa")))

    gj = json.load(io.open(os.path.join(KOK, "veri-kaynak",
                   "ne_10m_admin_0_countries.geojson"), encoding="utf-8"))
    a3 = {}
    tr = {}
    for ft in gj["features"]:
        p = ft["properties"]
        a3[p.get("ADMIN")] = p.get("ADM0_A3")
        tr[p.get("ADMIN")] = p.get("NAME_TR")

    S = json.load(io.open(os.path.join(KOK, "denetim",
                  "SINIR-HUKUKI-KAFRIKA-0907.json"), encoding="utf-8"))
    benim = json.load(io.open(os.path.join(KOK, "denetim",
                      "OLCUM-SINIR-KAFRIKA-KIMLIK1923-0907.json"),
                      encoding="utf-8"))["ulkeler"]

    print("")
    print("%-26s %-5s %-12s %-28s %-3s | BENIM OLCUMUM" % (
        "NE ADMIN", "A3", "kova", "kimlik_1923 (YETKILI)", "n"))
    print("-" * 118)
    uc = sorted(set([k["a"] for k in S["kenarlar"]] + [k["b"] for k in S["kenarlar"]]))
    kim = {}
    ayrisma = []
    for u in uc:
        kod = a3.get(u)
        sat = tablo.get(kod)
        if sat:
            kova, kml, adet, nokta = sat[0], sat[1], sat[2], sat[3]
        else:
            kova, kml, adet, nokta = "TABLODA-YOK", None, 0, 0
        kim[u] = {"kova": kova, "kimlik": kml, "kimlik_adedi": adet,
                  "nokta": nokta, "a3": kod, "name_tr": tr.get(u)}
        b = benim.get(u, {})
        bd = b.get("dagilim") or {}
        ben = max(bd, key=bd.get) if bd else None
        uy = ""
        if kova == "DOGRUDAN" and ben and ben != kml:
            uy = "  🔴 AYRISMA"
            ayrisma.append((u, kml, ben))
        print("%-26s %-5s %-12s %-28s %-3s | %s%s"
              % (u, kod, kova, str(kml), nokta, str(ben), uy))

    # --- DORDUNCU KOVA SINAVI ---
    print("")
    print("=== DORDUNCU KOVA SINAVI — iki uc AYNI kimlik mi? ===")
    degisen = []
    for k in S["kenarlar"]:
        ka, kb = kim[k["a"]], kim[k["b"]]
        olculdu = (ka["kova"] == "DOGRUDAN" and kb["kova"] == "DOGRUDAN")
        k["kimlik_1923_a_yetkili"] = ka["kimlik"]
        k["kimlik_1923_b_yetkili"] = kb["kimlik"]
        k["kimlik_1923_kova_a"] = ka["kova"]
        k["kimlik_1923_kova_b"] = kb["kova"]
        k["kimlik_bugun_a"] = ka["name_tr"] or k["a"]
        k["kimlik_bugun_b"] = kb["name_tr"] or k["b"]
        if not olculdu:
            k["ayni_kimlik_sinavi"] = "OLCULEMEDI — bir uc DOGRUDAN degil"
            continue
        ayni = (ka["kimlik"] == kb["kimlik"])
        k["ayni_kimlik_sinavi"] = "AYNI" if ayni else "FARKLI"
        if ayni and k["hal"] != "ayni-kimlik":
            eski = k["hal"]
            k["hal"] = "ayni-kimlik"
            k["_hal_onceki"] = eski
            degisen.append((k["a"], k["b"], eski, ka["kimlik"]))

    for d in degisen:
        print("   %-26s %-26s  %s -> ayni-kimlik  (%s)" % d)
    if not degisen:
        print("   (kova degistiren kenar yok)")

    # --- ozet ---
    sayac = {}
    for k in S["kenarlar"]:
        sayac[k["hal"]] = sayac.get(k["hal"], 0) + 1
    print("")
    print("=== KOVA (guncel) ===")
    for a, b in sorted(sayac.items()):
        print("   %-13s %d" % (a, b))
    print("")
    if ayrisma:
        print("🔴 KIMLIK AYRISMASI — yetkili tablo vs benim olcumum: %d" % len(ayrisma))
        for u, y, b in ayrisma:
            print("   %-26s yetkili=%-24s benim=%s" % (u, y, b))
    else:
        print("🟢 kimlik ayrismasi YOK — iki bagimsiz olcum ortusuyor")

    S["_KOVA4"] = ("hal:'ayni-kimlik' ortak sartnameye 7 Eyl 14:53'te "
                   "eklendi (M-3183). Sinav MEKANIK: 1923'te iki ucun atlas "
                   "kimligi ayni mi. Kimlik YETKILI tablodan "
                   "(denetim/KIMLIK-1923-0907.json, sorgu gunu %s)."
                   % K.get("sorgu_gunu"))
    S["kova"] = sayac
    with io.open(os.path.join(KOK, "denetim", "SINIR-HUKUKI-KAFRIKA-0907.json"),
                 "w", encoding="utf-8") as f:
        f.write(json.dumps(S, ensure_ascii=False, indent=1))
    print("guncellendi: denetim/SINIR-HUKUKI-KAFRIKA-0907.json")


if __name__ == "__main__":
    main()
