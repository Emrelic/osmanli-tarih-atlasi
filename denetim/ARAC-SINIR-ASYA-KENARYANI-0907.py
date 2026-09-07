# -*- coding: utf-8 -*-
"""
SINIR-ASYA-0907 · KENAR YANI 1923 kimligi — BASKIN kimlik YETMIYOR
Sartname: oturumlar/SINIR-HUKUKI-ORTAK-0907.md

NICIN BU IKINCI ALET VAR (ve birincisi nicin yetmedi):
  Birinci alet (ARAC-SINIR-ASYA-KIMLIK1923-0907.py) her NE poligonunun
  BASKIN kimligini olctu ve Orta Asya'nin besini de `sovyet-rusya` buldu
  ⇒ "bu kenarlar 1923'te ic idari hat" dedi.
  Sonra `devletler.js` tarandi ve iki kunye CANLI cikti:
      buhara-halk-cumhuriyeti  1920-10-08 .. 1923-10-29
      harezm-halk-cumhuriyeti  1920-04-26 .. 1923-10-29
      tannu-tuva               1921-08-14 .. 1923-10-29
  ⇒ BASKIN kimlik, KENARDAKI kimligi gizleyebilir. Bir poligonun %93'u
    Sovyet olabilir ve sinir hatti boyunca BASKA bir polity durabilir.

⇒ SORU DEGISIYOR: "bu ulkenin baskin sahibi kim" DEGIL,
                  "BU CIZGININ IKI YANINDA kim vardi".

YONTEM: kenar geometrisini tampon icine al, iki poligonun icinde kalan
        atlas noktalarini AYRI AYRI topla, EN YAKIN ucu de bildir.
        Tampon derece cinsinden (enlem/boylam), km DEGIL - ve bu bilincli:
        kenar coklu parcali olabiliyor, km'ye cevirmek enlemle degisir.
        Tampon SABIT degil, kenarin uzunluguna gore DEGISIYOR mu diye
        iki tamponla da olculuyor (1.0 ve 2.5 derece) - tek tampon bir
        SECIMDIR, ve secimin sonucu degistirip degistirmedigi OLCULUR.
"""
import json, sys, io, os, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi                                            # noqa: E402

from shapely.geometry import shape, Point, LineString, MultiLineString  # noqa: E402
from shapely.prepared import prep                       # noqa: E402

NE = os.path.join(KOK, "veri-kaynak", "ne_10m_admin_0_countries.geojson")
KENAR = os.path.join(KOK, "denetim", "OLCUM-SINIR-ASYA-KENAR-0907.json")
GUN = "1923-10-28"
TAMPONLAR = (1.0, 2.5)


def sahip(y, g):
    for p in (y.get("d") or []):
        if p.get("f", "") <= g < p.get("t", ""):
            return "OSMANLI"
    for p in (y.get("v") or []):
        if p.get("f", "") <= g < p.get("t", ""):
            k = p.get("kid") or p.get("k")
            return "tabi:" + (k if k else "ADSIZ")
    for p in (y.get("s") or []):
        if p.get("f", "") <= g < p.get("t", ""):
            return p.get("d") or "ADSIZ"
    return None


def main():
    kn = json.load(io.open(KENAR, encoding="utf-8"))
    uclar = set()
    for k in kn["kenarlar"]:
        uclar.add(k["ne_a"])
        uclar.add(k["ne_b"])

    gj = json.load(io.open(NE, encoding="utf-8"))
    pol = {}
    for ft in gj["features"]:
        ad = ft["properties"].get("ADMIN")
        if ad in uclar:
            g = shape(ft["geometry"])
            pol[ad] = (g, prep(g), g.bounds)

    Y = [y for y in girdi.yukle(sessiz=True)
         if y.get("lat") is not None and y.get("lon") is not None
         and not (y.get("kur") and y["kur"] > GUN)]
    # nokta -> ulke (bir kez, tekrar tekrar hesaplamamak icin)
    yerli = []
    for y in Y:
        pt = Point(y["lon"], y["lat"])
        ad = None
        for a, (g, pg, b) in pol.items():
            if b[0] <= y["lon"] <= b[2] and b[1] <= y["lat"] <= b[3] and pg.covers(pt):
                ad = a
                break
        yerli.append((y, pt, ad, sahip(y, GUN)))

    cikti = []
    for k in kn["kenarlar"]:
        a, b = k["ne_a"], k["ne_b"]
        hat = MultiLineString([LineString(p) for p in k["gc"]]) \
            if len(k["gc"]) > 1 else LineString(k["gc"][0])
        kayit = {"ne_a": a, "ne_b": b, "uzunluk_derece": k["uzunluk_derece"],
                 "tampon": {}}
        for T in TAMPONLAR:
            alan = hat.buffer(T)
            pa = prep(alan)
            sa, sb = collections.Counter(), collections.Counter()
            for (y, pt, ad, s) in yerli:
                if ad != a and ad != b:
                    continue
                if not pa.covers(pt):
                    continue
                (sa if ad == a else sb)[s if s else "__SAHIPSIZ__"] += 1
            kayit["tampon"]["%.1f" % T] = {
                "a": [[x, n] for x, n in sa.most_common()],
                "b": [[x, n] for x, n in sb.most_common()],
                "a_n": sum(sa.values()), "b_n": sum(sb.values()),
            }
        # en yakin nokta (tampon secimi hicbir sey bulamazsa)
        ea = min(((pt.distance(hat), y["ad"], s) for (y, pt, ad, s) in yerli
                  if ad == a), default=None)
        eb = min(((pt.distance(hat), y["ad"], s) for (y, pt, ad, s) in yerli
                  if ad == b), default=None)
        kayit["en_yakin_a"] = ([round(ea[0], 3), ea[1], ea[2]] if ea else None)
        kayit["en_yakin_b"] = ([round(eb[0], 3), eb[1], eb[2]] if eb else None)
        cikti.append(kayit)

    r = {"_NOT": ("SINIR-ASYA-0907 · kenarin IKI YANINDAKI atlas kimligi, "
                  "1923-10-28. BASKIN kimlik degil KENAR YANI."),
         "gun": GUN, "tamponlar": list(TAMPONLAR), "kenar": cikti}
    yol = os.path.join(KOK, "denetim", "OLCUM-SINIR-ASYA-KENARYANI-0907.json")
    json.dump(r, io.open(yol, "w", encoding="utf-8"), ensure_ascii=False, indent=1)

    # ---- rapor: tampon SECIMI sonucu degistiriyor mu?
    degisen = []
    print("=== KENAR YANI 1923 KIMLIGI (gun %s) ===" % GUN)
    for c in cikti:
        t1, t2 = c["tampon"]["1.0"], c["tampon"]["2.5"]

        def bas(t):
            return (t["a"][0][0] if t["a"] else None,
                    t["b"][0][0] if t["b"] else None)
        b1, b2 = bas(t1), bas(t2)
        if b1 != b2 and t1["a_n"] and t1["b_n"]:
            degisen.append((c["ne_a"], c["ne_b"], b1, b2))
        t = t2 if (t2["a_n"] and t2["b_n"]) else t1
        ayni = (bas(t)[0] is not None and bas(t)[0] == bas(t)[1])
        im = "AYNI " if ayni else ("?    " if None in bas(t) else "FARKLI")
        print("  %s %-22s %-22s | %-30s %-30s"
              % (im, c["ne_a"][:22], c["ne_b"][:22],
                 ",".join("%s(%d)" % (x, n) for x, n in t["a"][:3])[:30],
                 ",".join("%s(%d)" % (x, n) for x, n in t["b"][:3])[:30]))
    print()
    print("TAMPON SECIMI SONUCU DEGISTIREN KENAR:", len(degisen))
    for d in degisen:
        print("   %s / %s : 1.0 -> %s | 2.5 -> %s" % d)
    print("cikti:", os.path.getsize(yol), "bayt")


if __name__ == "__main__":
    main()
