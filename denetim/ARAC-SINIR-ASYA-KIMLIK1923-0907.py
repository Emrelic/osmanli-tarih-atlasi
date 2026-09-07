# -*- coding: utf-8 -*-
"""
SINIR-ASYA-0907 · 1923 KIMLIGI — atlasin KENDI verisinden, hafizadan DEGIL
Sartname: oturumlar/SINIR-HUKUKI-ORTAK-0907.md  (VII: kimlik_1923 MEKANIK
DOLDURULAMAZ)

SORU: NE'nin bugunku her ulke poligonunun icinde kalan toprak,
      1923-10-28'de atlasa gore KIMIN'di?

NICIN VEKIL (proxy) ve nicin bu vekil:
  Atlas sahipligi YERLESIM NOKTASINDA tutuluyor (petek motoru, CLAUDE.md §2).
  Bir poligonun "sahibi" diye bir alan YOK. En yakin olculebilir sey:
  o poligonun icine dusen atlas noktalarinin o gunku sahipleri.
  ⚠️ Bu bir VEKILDIR. Nokta yogunlugu dusukse kimlik OLCULEMEZ cikar ve
     oyle damgalanir - "bilinmiyor" ile "bakilmadi" AYRI kovalardir.

NICIN 1923-10-28 ve 1923-10-29 DEGIL:
  Atlas donemleri [f, t) yarim acik: `p.f <= g < p.t` (CLAUDE.md §3
  Degismez 1 komutunun kendi olcutu). `t:"1923-10-29"` tasiyan bir donem
  29 Ekim'de KAPSAMAZ. 29'unda olcmek, pencere ucunda biten butun
  donemleri SAHIPSIZ gosterirdi. Cipa gunu 29'dur; olcum gunu 28.
  Ikisi de basiliyor, fark GORUNUR olsun diye.
"""
import json, sys, io, os, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi                                            # noqa: E402

from shapely.geometry import shape, Point               # noqa: E402
from shapely.prepared import prep                       # noqa: E402

NE = os.path.join(KOK, "veri-kaynak", "ne_10m_admin_0_countries.geojson")
KENAR = os.path.join(KOK, "denetim", "OLCUM-SINIR-ASYA-KENAR-0907.json")
GUN = "1923-10-28"


def sahip(y, g):
    """CLAUDE.md §3 / denetle.py degismez3.durum sirasi: d -> v -> s."""
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
    return None                                          # sahipsiz


def isgal(y, g):
    for p in (y.get("isg") or []):
        if p.get("f", "") <= g < p.get("t", ""):
            return p.get("kid") or p.get("k") or p.get("d") or "ADSIZ"
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

    Y = girdi.yukle(sessiz=True)
    print("atlas noktasi:", len(Y), "· NE ucu:", len(pol), "· gun:", GUN)

    # nokta -> hangi ulkenin icinde (ilk eslesen; poligonlar ortusmuyor -
    # KADEME-MODEL olctu: ALAN olarak ortusen cift 0)
    icinde = collections.defaultdict(list)
    disarida = 0
    for y in Y:
        lat, lon = y.get("lat"), y.get("lon")
        if lat is None or lon is None:
            continue
        if y.get("kur") and y["kur"] > GUN:
            continue                                     # o gun HENUZ YOK
        pt = Point(lon, lat)
        bulundu = None
        for ad, (g, pg, b) in pol.items():
            if not (b[0] <= lon <= b[2] and b[1] <= lat <= b[3]):
                continue
            if pg.covers(pt):
                bulundu = ad
                break
        if bulundu:
            icinde[bulundu].append(y)
        else:
            disarida += 1

    ozet = {}
    for ad in sorted(pol):
        ys = icinde.get(ad, [])
        say = collections.Counter()
        isg = collections.Counter()
        for y in ys:
            s = sahip(y, GUN)
            say[s if s else "__SAHIPSIZ__"] += 1
            i = isgal(y, GUN)
            if i:
                isg[i] += 1
        top = say.most_common()
        baskin = top[0][0] if top else None
        ozet[ad] = {
            "nokta": len(ys),
            "kimlik": [[k, v] for k, v in top],
            "baskin": baskin,
            "baskin_pay": round(top[0][1] / len(ys), 3) if ys else None,
            "isgal": [[k, v] for k, v in isg.most_common()],
            "hal": ("olculdu" if len(ys) >= 3 else
                    ("zayif" if ys else "olculemedi-nokta-yok")),
        }

    # kenar bazinda karsilastirma
    kenar_hal = []
    for k in kn["kenarlar"]:
        a, b = ozet[k["ne_a"]], ozet[k["ne_b"]]
        if a["hal"].startswith("olculemedi") or b["hal"].startswith("olculemedi"):
            h = "olculemedi"
        elif a["baskin"] == b["baskin"]:
            h = "AYNI-KIMLIK"          # 1923'te bu cizgi ULUSLARARASI SINIR DEGIL
        else:
            h = "FARKLI-KIMLIK"        # 1923'te gercek bir sinirdi (aday)
        kenar_hal.append({
            "ne_a": k["ne_a"], "ne_b": k["ne_b"],
            "uzunluk_derece": k["uzunluk_derece"],
            "a_1923": a["baskin"], "a_nokta": a["nokta"], "a_pay": a["baskin_pay"],
            "b_1923": b["baskin"], "b_nokta": b["nokta"], "b_pay": b["baskin_pay"],
            "cinsi": h,
            "a_zayif": a["hal"] == "zayif", "b_zayif": b["hal"] == "zayif",
        })

    r = {"_NOT": ("SINIR-ASYA-0907 · NE poligonu icindeki atlas noktalarinin "
                  "1923-10-28 sahipleri. VEKIL olcum - poligonun kendi "
                  "sahiplik alani YOK."),
         "gun": GUN, "atlas_nokta": len(Y),
         "poligon_disinda_kalan_nokta": disarida,
         "ulke": ozet, "kenar": kenar_hal}
    cikti = os.path.join(KOK, "denetim", "OLCUM-SINIR-ASYA-KIMLIK1923-0907.json")
    json.dump(r, io.open(cikti, "w", encoding="utf-8"),
              ensure_ascii=False, indent=1)

    print()
    print("=== ULKE — 1923-10-28 baskin kimligi ===")
    for ad in sorted(ozet, key=lambda x: -ozet[x]["nokta"]):
        o = ozet[ad]
        ek = ""
        if o["isgal"]:
            ek = "  isg:" + ",".join("%s(%d)" % (a, b) for a, b in o["isgal"][:2])
        print("  %-26s n=%4d  %-26s pay=%s  [%s]%s"
              % (ad, o["nokta"], str(o["baskin"])[:26],
                 o["baskin_pay"], o["hal"], ek))
    print()
    c = collections.Counter(k["cinsi"] for k in kenar_hal)
    print("=== KENAR CINSI ===", dict(c))
    for h in ("AYNI-KIMLIK", "FARKLI-KIMLIK", "olculemedi"):
        print("--- %s (%d)" % (h, c[h]))
        for k in kenar_hal:
            if k["cinsi"] == h:
                z = ""
                if k["a_zayif"] or k["b_zayif"]:
                    z = "  ZAYIF-ORNEKLEM"
                print("    %-24s %-24s | %-22s %-22s%s"
                      % (k["ne_a"], k["ne_b"], str(k["a_1923"])[:22],
                         str(k["b_1923"])[:22], z))
    print()
    print("cikti:", os.path.getsize(cikti), "bayt")


if __name__ == "__main__":
    main()
