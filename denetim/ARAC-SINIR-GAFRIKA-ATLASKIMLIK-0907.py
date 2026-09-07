# -*- coding: utf-8 -*-
"""ARAC-SINIR-GAFRIKA-ATLASKIMLIK-0907 — `kimlik_1923`i ATLASTAN olcer.

NICIN   TUR 1'de `kimlik_1923`i TARIHTEN kurdum (TDV + genel tarih).
        1.MURAT'in M-3191'i baska bir seyi soruyor: ATLAS o gun orayi
        HANGI KIMLIKLE boyuyor? Ikisi AYNI SEY DEGIL:
          tarih  : "Nijerya Kolonisi" ≠ "Altin Sahili Kolonisi"
          atlas  : ikisi de `ingiltere`  ⇒ ARADA SINIR YOK
        Kademe C bir ATLAS ortusu oldugu icin baglayici olan IKINCISIDIR.

🔴 CIPA GUNU: kayitlara yazilan cipa `1923-10-29`, ama atlasa SORULAN
   gun `1923-10-28`. Sebep OLCULDU (ARAC-...-CIPA-0907):
   donemler yari acik ve UFUK sonu 1923-10-29 ⇒ o gun sorulunca
   3636 donemin hepsi kapali, sahipsiz 3804 cikiyor. SESSIZ bir tuzak.

YONTEM  her NE ulke poligonunun ICINDEKI atlas yerlesimlerinin o gunku
        kimlikleri sayilir. Cogunluk kimlik `kimlik_1923_atlas` olur;
        HEPSI ayrica yazilir — cogunluga indirgemek bir KAYIP olurdu.
⚠️ SINIRI: bir NE poligonunda HIC yerlesim yoksa kimlik OLCULEMEZ.
   O zaman `olculemedi` yazilir — `bulunamadi` DEGIL.
"""
import io
import json
import os
import sys
from collections import Counter

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

import girdi                                                       # noqa: E402

CIPA = "1923-10-29"          # kayitlara YAZILAN — degismez
SORGU = "1923-10-28"         # atlasa SORULAN   — yari acik aralik yuzunden
NE = os.path.join(KOK, "veri-kaynak", "ne_10m_admin_0_countries.geojson")
KENAR = os.path.join(KOK, "denetim", "_gafrika_kenarlar.json")
CIKTI = os.path.join(KOK, "denetim", "SINIR-HUKUKI-GAFRIKA-0907.json")


def sahip(y, g):
    for p in (y.get("d") or []):
        if p.get("f", "") <= g < p.get("t", "9999"):
            return "osmanli"
    for p in (y.get("v") or []):
        if p.get("f", "") <= g < p.get("t", "9999"):
            return p.get("kid") or ("?kid-yok:" + str(p.get("k")))
    for p in (y.get("s") or []):
        if p.get("f", "") <= g < p.get("t", "9999"):
            return p.get("d")
    return None


def main():
    from shapely.geometry import shape, Point
    from shapely.strtree import STRtree

    Y = girdi.yukle()
    if isinstance(Y, tuple):
        Y = Y[0]
    with io.open(NE, encoding="utf-8") as f:
        ozl = json.load(f)["features"]
    with io.open(KENAR, encoding="utf-8") as f:
        kenarlar = json.load(f)["bende"]

    ilgi = set()
    for k in kenarlar:
        ilgi.add(k["a"])
        ilgi.add(k["b"])
    poli = {}
    for f in ozl:
        ad = f["properties"]["NAME"]
        if ad in ilgi:
            g = shape(f["geometry"])
            poli[ad] = g if g.is_valid else g.buffer(0)
    print("bolgedeki NE poligonu: %d / %d" % (len(poli), len(ilgi)))

    adlar = list(poli)
    agac = STRtree([poli[a] for a in adlar])
    dagilim = {a: Counter() for a in adlar}
    disarida = 0
    for y in Y:
        la, lo = y.get("lat"), y.get("lon")
        if la is None or lo is None:
            continue
        p = Point(lo, la)
        vuruldu = False
        for j in agac.query(p):
            a = adlar[int(j)]
            if poli[a].covers(p):
                k = sahip(y, SORGU)
                dagilim[a][k if k else "SAHIPSIZ"] += 1
                vuruldu = True
                break
        if not vuruldu:
            disarida += 1
    print("bolge disinda kalan yerlesim: %d" % disarida)

    # 🔴 COGUNLUK KURALI SESSIZCE BERABERLIK BOZUYORDU — ilk surumde
    # `most_common(1)` `Sierra Leone`da 1-1 beraberligi keyfi cozdu ve
    # INGILIZ bir koloniyi `fransa-cumhuriyet` yazdi; `Cameroon`da 6-6
    # beraberlik `Nigeria↔Cameroon`u "ayni-kimlik" gosterdi. Ikisi de
    # `ayni-kimlik` sayisini SISIRIYORDU. Kural artik KATI:
    #   · `SAHIPSIZ` bir KIMLIK DEGIL — paydadan cikarilir
    #   · tepe ile ikinci ESITSE  -> belirsiz (olculemedi), SECIM YAPILMAZ
    #   · nokta < 3               -> `zayif` damgasi (hukum verilir ama
    #                                dayanagin gucu YAZILIR)
    kimlik, noktasiz, beraberlik, zayif = {}, [], [], []
    for a in adlar:
        c = Counter({k: v for k, v in dagilim[a].items() if k != "SAHIPSIZ"})
        if not c:
            noktasiz.append(a)
            kimlik[a] = (None, dict(dagilim[a]), "noktasiz")
            continue
        sirali = c.most_common()
        if len(sirali) > 1 and sirali[0][1] == sirali[1][1]:
            beraberlik.append((a, sirali[0], sirali[1]))
            kimlik[a] = (None, dict(dagilim[a]), "beraberlik")
            continue
        guc = "zayif" if sum(c.values()) < 3 else "saglam"
        if guc == "zayif":
            zayif.append((a, sirali[0][0], sum(c.values())))
        kimlik[a] = (sirali[0][0], dict(dagilim[a]), guc)
    print("\n🔴 BERABERLIK (kimlik SECILMEDI): %d" % len(beraberlik))
    for a, t1, t2 in beraberlik:
        print("     %-22s %s:%d = %s:%d" % (a, t1[0], t1[1], t2[0], t2[1]))
    print("🟡 ZAYIF DAYANAK (nokta < 3): %d" % len(zayif))
    for a, k, n in zayif:
        print("     %-22s %-22s n=%d" % (a, k, n))
    print("\nNE poligonu icinde HIC yerlesim olmayan (kimlik OLCULEMEDI): %d %s"
          % (len(noktasiz), ", ".join(sorted(noktasiz)) or ""))

    print("\n=== NE ulkesi -> 1923-10-28 ATLAS kimligi ===")
    for a in sorted(adlar):
        b, c, guc = kimlik[a]
        ek = "" if len(c) <= 1 else "   (+%d kimlik daha)" % (len(c) - 1)
        print("   %-24s %-24s n=%-4d %-11s%s"
              % (a, b or "OLCULEMEDI", sum(c.values()), guc, ek))

    # ---- KENAR SINIFLAMASI: iki yaka AYNI atlas kimliginde mi? -----------
    sayac = Counter()
    ayni, farkli, olcusuz = [], [], []
    for k in kenarlar:
        ka, ga = kimlik.get(k["a"], (None, {}, "yok"))[0], kimlik.get(k["a"], (None, {}, "yok"))[2]
        kb, gb = kimlik.get(k["b"], (None, {}, "yok"))[0], kimlik.get(k["b"], (None, {}, "yok"))[2]
        zay = "zayif" in (ga, gb)
        if ka is None or kb is None or str(ka).startswith("?") or str(kb).startswith("?"):
            sayac["olculemedi"] += 1
            olcusuz.append((k["a"], k["b"], ka or ga, kb or gb))
        elif ka == kb:
            sayac["ayni-kimlik"] += 1
            ayni.append((k["a"], k["b"], ka, zay))
        else:
            sayac["farkli-kimlik"] += 1
            farkli.append((k["a"], k["b"], ka, kb))
        if zay and (ka and kb):
            sayac["(bunlarin zayif dayanakli olani)"] += 1

    print("\n=== 89 KENAR · ATLAS KIMLIGINE GORE (%s) ===" % SORGU)
    for s, n in sayac.most_common():
        print("   %-16s %3d  (%%%.0f)" % (s, n, 100.0 * n / len(kenarlar)))

    print("\n--- AYNI KIMLIK (atlasta arada SINIR YOK) ---")
    for a, b, k in sorted(ayni):
        print("   %-22s ↔ %-22s  %s" % (a, b, k))
    print("\n--- OLCULEMEDI ---")
    for a, b, ka, kb in sorted(olcusuz):
        print("   %-22s ↔ %-22s  %s / %s" % (a, b, ka, kb))

    # ---- MEVCUT CIKTIYI ZENGINLESTIR (uzerine YAZMAZ, ALAN EKLER) --------
    with io.open(CIKTI, encoding="utf-8") as f:
        d = json.load(f)
    ix = {(r["a"], r["b"]): r for r in d["kayitlar"]}
    for k in kenarlar:
        r = ix[(k["a"], k["b"])]
        ka, kb = kimlik.get(k["a"], (None, {})), kimlik.get(k["b"], (None, {}))
        r["kimlik_1923_atlas"] = [ka[0], kb[0]]
        r["kimlik_1923_atlas_dagilim"] = [ka[1], kb[1]]
        r["sorgu_gunu"] = SORGU
        r["cipa"] = CIPA
        if ka[0] and kb[0] and ka[0] == kb[0] and not str(ka[0]).startswith("?"):
            r["hal_atlas"] = "ayni-kimlik"
        elif ka[0] is None or kb[0] is None or str(ka[0]).startswith("?") \
                or str(kb[0]).startswith("?"):
            r["hal_atlas"] = "olculemedi"
        else:
            r["hal_atlas"] = "farkli-kimlik"
    d["_SAYAC_ATLAS"] = dict(sayac)
    d["_SORGU_GUNU_NOTU"] = (
        "cipa 1923-10-29 kayitlarda DEGISMEDI; atlas sorgusu 1923-10-28 ile "
        "yapildi. Sebep OLCULDU: donemler yari acik (f<=g<t) ve girdi.UFUK "
        "sonu 1923-10-29 ⇒ o gun sorulunca 3636 donem kapali, sahipsiz 3804.")
    with io.open(CIKTI, "w", encoding="utf-8") as f:
        json.dump(d, f, ensure_ascii=False)
    print("\nguncellendi: %s" % CIKTI)
    return 0


if __name__ == "__main__":
    sys.exit(main())
