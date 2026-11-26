# -*- coding: utf-8 -*-
"""
ARAC-SINIR-ANADOLU-KENAR-0907 — SINIR-ANADOLU-0907 · 7 Eylul 2026

NE ne_10m_admin_0_countries.geojson icinden BENIM BOLGEMIN kenarlarini cikarir.

BOLGE = en az bir ucu {Turkey, Georgia, Armenia, Azerbaijan, Iran} olan her kenar.

🔴 DEVRALDIGIM TABAN, VE NICIN YENIDEN OLCUYORUM:
   KADEME-MODEL-0907 "kenar cikarimi MEKANIK, 342/342 birebir" olctu ve
   koordinator kabul etti. Devraldim — ama kendi bolgemde YENIDEN olcuyorum:
   devralinan bir tabani dogrulamadan ustune insa etmek, bu projede
   olculmus bir zarar (CLAUDE.md §1.5 · §11).

🔴 IKI TUZAK, IKISI DE KADEME-MODEL'in raporundan alindi ve BURADA UYGULANDI:
   ① `intersects` KOMSULUK DEGILDIR — iki ulke tek NOKTADA da kesisir
      (Kazungula). Olcut: kesisimin UZUNLUGU > 0, varligi degil.
   ② shapely `boundary.intersection` kenari SUREKLI cizgi olarak degil
      IKI NOKTALI PARCALARIN yigini olarak verir; `linemerge` sart,
      yoksa tepe sayisi TAM 2 KAT cikar.

CIKTI: denetim/OLCUM-KENAR-ANADOLU-0907.json
"""
import json, io, sys, os
from shapely.geometry import shape, mapping
from shapely.ops import linemerge

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NE = os.path.join(KOK, "veri-kaynak", "ne_10m_admin_0_countries.geojson")
CIKTI = os.path.join(KOK, "denetim", "OLCUM-KENAR-ANADOLU-0907.json")

CEKIRDEK = {"Turkey", "Georgia", "Armenia", "Azerbaijan", "Iran"}
ONDALIK = 3


def ad(ozn):
    for k in ("ADMIN", "NAME_EN", "NAME", "SOVEREIGNT"):
        if ozn.get(k):
            return ozn[k]
    return "?"


def yuvarla(cizgi):
    """3 ondalik + ardisik tekrar temizligi. KADEME-MODEL olctu: birebirligi BOZMAZ
    (iki ulke ayni float'i tasiyorsa ayni yuvarlanmisi da tasir)."""
    out = []
    for x, y in cizgi:
        p = [round(x, ONDALIK), round(y, ONDALIK)]
        if not out or out[-1] != p:
            out.append(p)
    return out


def parcalar(g):
    """Kesisim geometrisini SUREKLI cizgi dizisine cevirir. Nokta/bos ise []."""
    if g.is_empty:
        return []
    g = linemerge(g) if g.geom_type in ("MultiLineString", "GeometryCollection") else g
    ham = []
    if g.geom_type == "LineString":
        ham = [list(g.coords)]
    elif g.geom_type == "MultiLineString":
        ham = [list(p.coords) for p in g.geoms]
    elif g.geom_type == "GeometryCollection":
        for p in g.geoms:
            if p.geom_type == "LineString":
                ham.append(list(p.coords))
            elif p.geom_type == "MultiLineString":
                ham += [list(q.coords) for q in p.geoms]
    return [yuvarla(c) for c in ham if len(c) >= 2]


def main():
    veri = json.load(open(NE, encoding="utf-8"))
    ozn = {}
    geo = {}
    gecersiz = []
    for f in veri["features"]:
        a = ad(f["properties"])
        g = shape(f["geometry"])
        ozn[a] = f["properties"]
        geo[a] = g
        if not g.is_valid:
            gecersiz.append(a)

    print("NE girdi:", len(geo), "| gecersiz geometri:", len(gecersiz), gecersiz[:5])
    eksik = [c for c in CEKIRDEK if c not in geo]
    if eksik:
        print("🔴 CEKIRDEK ULKE BULUNAMADI:", eksik)
        sys.exit(1)

    adlar = sorted(geo)
    kenarlar = []
    nokta_degen = []
    yakin = []          # yanlis negatif kontrolu: degmiyor ama YAKIN
    aday = 0

    for c in sorted(CEKIRDEK):
        gc_ = geo[c]
        for o in adlar:
            if o == c:
                continue
            # ayni cift iki kez gelmesin: ikisi de cekirdekse alfabetik olan tarar
            if o in CEKIRDEK and o < c:
                continue
            if not gc_.bounds or not geo[o].bounds:
                continue
            # kutu on elemesi
            b1, b2 = gc_.bounds, geo[o].bounds
            if b1[2] < b2[0] - 0.2 or b2[2] < b1[0] - 0.2 or b1[3] < b2[1] - 0.2 or b2[3] < b1[1] - 0.2:
                continue
            aday += 1
            kes = gc_.boundary.intersection(geo[o].boundary)
            if kes.is_empty:
                d = gc_.distance(geo[o])
                if d < 0.5:
                    yakin.append({"a": c, "b": o, "uzaklik_derece": round(d, 5)})
                continue
            if kes.geom_type in ("Point", "MultiPoint"):
                nokta_degen.append({"a": c, "b": o})          # 🔴 KENAR DEGIL (Kazungula dersi)
                continue
            pl = parcalar(kes)
            if not pl:
                nokta_degen.append({"a": c, "b": o})
                continue
            uz = kes.length
            if uz <= 0:
                nokta_degen.append({"a": c, "b": o})
                continue
            a_, b_ = sorted([c, o])                            # KARARLI ANAHTAR: alfabetik
            kenarlar.append({
                "ne_a": a_, "ne_b": b_,
                "cekirdek": sorted(set([c]) | (set([o]) & CEKIRDEK)),
                "uzunluk_derece": round(uz, 5),
                "uzunluk_km_yaklasik": round(uz * 111.0, 1),
                "parca": len(pl),
                "tepe": sum(len(p) for p in pl),
                "gc": pl,
            })

    # ── BIREBIRLIK SINAVI: kenarin tepeleri IKI TARAFTA da var mi?
    #    (KADEME-MODEL'in ikinci aleti: "ortak tepesi var" ≠ "kenari birebir ayni")
    birebir = {"tam": 0, "kismi": 0, "eksik_tepe": 0, "toplam_tepe": 0, "ayrinti": []}
    for k in kenarlar:
        ta = set()
        tb = set()
        for tar, kume in ((k["ne_a"], ta), (k["ne_b"], tb)):
            g = geo[tar]
            gl = g.geoms if g.geom_type.startswith("Multi") else [g]
            for poly in gl:
                for ring in [poly.exterior] + list(poly.interiors):
                    for x, y in ring.coords:
                        kume.add((round(x, ONDALIK), round(y, ONDALIK)))
        eksik = 0
        top = 0
        for p in k["gc"]:
            for x, y in p:
                top += 1
                t = (x, y)
                if t not in ta or t not in tb:
                    eksik += 1
        birebir["toplam_tepe"] += top
        birebir["eksik_tepe"] += eksik
        if eksik == 0:
            birebir["tam"] += 1
        else:
            birebir["kismi"] += 1
            birebir["ayrinti"].append({"a": k["ne_a"], "b": k["ne_b"],
                                       "eksik": eksik, "toplam": top})

    kenarlar.sort(key=lambda k: -k["uzunluk_km_yaklasik"])
    rapor = {
        "_NOT": "SINIR-ANADOLU-0907 kenar cikarimi. CEKIRDEK = " + ", ".join(sorted(CEKIRDEK)),
        "ne_surum": "ne_10m_admin_0_countries",
        "olcut": "boundary kesisiminin UZUNLUGU > 0 (varligi DEGIL) + linemerge",
        "ondalik": ONDALIK,
        "aday_cift": aday,
        "kenar": len(kenarlar),
        "yalniz_noktada_degen": nokta_degen,
        "degmiyor_ama_yakin_0_5_derece": sorted(yakin, key=lambda r: r["uzaklik_derece"]),
        "birebirlik": {k: v for k, v in birebir.items() if k != "ayrinti"},
        "birebirlik_ayrinti": birebir["ayrinti"],
        "kenarlar": kenarlar,
    }
    with open(CIKTI, "w", encoding="utf-8") as f:
        json.dump(rapor, f, ensure_ascii=False)

    print("aday cift:", aday, "| KENAR:", len(kenarlar))
    print("yalniz noktada degen:", len(nokta_degen), nokta_degen)
    print("degmiyor ama <0.5 derece:", [(r["a"], r["b"], r["uzaklik_derece"]) for r in rapor["degmiyor_ama_yakin_0_5_derece"]])
    print("BIREBIRLIK: tam", birebir["tam"], "| kismi", birebir["kismi"],
          "| eksik tepe", birebir["eksik_tepe"], "/", birebir["toplam_tepe"])
    print()
    print("%-28s %10s %6s %6s" % ("KENAR", "km~", "parca", "tepe"))
    for k in kenarlar:
        print("%-28s %10.1f %6d %6d" % (k["ne_a"] + " | " + k["ne_b"],
                                        k["uzunluk_km_yaklasik"], k["parca"], k["tepe"]))
    print("\nyazildi:", CIKTI, os.path.getsize(CIKTI), "bayt")


if __name__ == "__main__":
    main()
