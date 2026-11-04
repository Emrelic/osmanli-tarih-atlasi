# -*- coding: utf-8 -*-
"""J kovası (0 noktalı kopuk parça) → HAVVA motor sorusu ölçümü (LAB PAZAR, 4 Kasım 2026).

EVREN (sayının içine ne girer):
  · Parça: KOVALAR.md J kovasının satırları = adaylar.json + ENKLAV-1104/aday2..9.json içinde
    `yerlesimler` boş olan kayıtlar (koşu 32 çıktısından LAB SALI'nın ölçtüğü kopuk parçalar).
    Parça geometrisi BU BETİKTE YOK: elde yalnız `nokta` (representative_point), `alan_max`,
    `komsular`, `koridor` var. Koşu 32 çözülmeden (coz-c) parça poligonu okunmadı.
  · Emen hücre: parçanın `buyuk_gun` kesitinde epoku içindeki (kur/bit) bütün noktalar arasında
    `nokta`ya EN YAKIN nokta = düz Voronoi yaklaşığı. Motor karada ızgara Dijkstra sahipliği
    kullanır (uret_petek.py ~1213-1306), yani bu bir YAKLAŞIKTIR, koşu çıktısıyla teyit değildir.
    Ayrıca parçanın kendi devletine ait en yakın nokta (parçayı boyatan hücrenin adayı) ölçülür.
  · Doğal sınır: Natural Earth 10m kıyı (land sınırı), nehir, göl çizgisine `nokta`dan uzaklık.
    Sırt (yükseklik) ölçülmedi.
  · Tanık adayı: denetim/YER-1104 listelerinde (eksik_aday, konum, konum4, konum5, pleiades_tur)
    koordinatlı aday parça yarıçapı içinde mi; koordinatsız adayda madde yılı parça aralığında ve
    madde/taraflar parçanın devlet adını anıyor mu.
GİRMEYEN: parça poligonu, sırt, motorun gerçek hücre ataması.

Kullanım: py denetim/ENKLAV-1103/j_motor_olc.py   (worktree kökünden) → j_motor.json
"""
import os, sys, json, math, collections

KOK = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import girdi, gun
from shapely.geometry import shape, Point
from shapely.strtree import STRtree
from shapely.ops import nearest_points

BURA = os.path.join(KOK, "denetim", "ENKLAV-1103")
ADAY_DOSYA = ["ENKLAV-1103/adaylar.json"] + ["ENKLAV-1104/aday%d.json" % i for i in range(2, 10)]


def g(s):
    return gun.gun(s)


def hav(a_lat, a_lon, b_lat, b_lon):
    p = math.pi / 180
    x = math.sin((b_lat - a_lat) * p / 2) ** 2 + math.cos(a_lat * p) * math.cos(b_lat * p) * math.sin((b_lon - a_lon) * p / 2) ** 2
    return 12742 * math.asin(math.sqrt(x))


def sahip(y, gn):
    """(sahip, donem) — kovalar_olc.sahip ile aynı kural; dönem bayrağı için dönemi de döner."""
    if (y.get("kur") and g(y["kur"]) > gn) or (y.get("bit") and g(y["bit"]) <= gn):
        return "YOK(epok)", None
    for kat in ("d", "v"):
        for p in y.get(kat) or []:
            if g(p["f"]) <= gn < g(p["t"]):
                return ("OSMANLI" if kat == "d" else "TABI"), p
    for p in y.get("s") or []:
        if g(p["f"]) <= gn < g(p["t"]):
            return p.get("d"), p
    return None, None


# --- parçalar ----------------------------------------------------------------------------------
PARCA = []
for dosya in ADAY_DOSYA:
    yol = os.path.join(KOK, "denetim", dosya)
    if not os.path.exists(yol):
        continue
    for a in json.load(open(yol, encoding="utf-8")):
        if not a.get("yerlesimler"):
            a["_dosya"] = dosya
            PARCA.append(a)
print("J parça:", len(PARCA), file=sys.stderr)

Y = girdi.yukle(sessiz=True)
DEV = {d["id"]: d for d in girdi.oku_devletler()}
KONUM = {y["ad"]: (y["lon"], y["lat"]) for y in Y}


def boya(i):
    """devletler.js `harita:` boya anahtarı — gövde bu anahtarla boyanır (portekiz-mozambik → portekiz)."""
    return (DEV.get(i) or {}).get("harita") or i

# --- doğal sınır katmanları --------------------------------------------------------------------
def katman(ad, sinir=False):
    js = json.load(open(os.path.join(KOK, "veri-kaynak", ad), encoding="utf-8"))
    geo, isim = [], []
    for f in js["features"]:
        s = shape(f["geometry"])
        geo.append(s.boundary if sinir else s)
        pr = f.get("properties") or {}
        isim.append(pr.get("name") or pr.get("NAME") or "")
    return geo, isim, STRtree(geo)


KARA_POLY, _, KARA_T = katman("ne_10m_land.geojson")
KIYI, _, KIYI_T = (lambda gl: (gl, None, STRtree(gl)))([p.boundary for p in KARA_POLY])
NEHIR, NEHIR_AD, NEHIR_T = katman("ne_10m_rivers.geojson")
GOL, GOL_AD, GOL_T = katman("ne_10m_lakes.geojson")


def en_yakin(tree, geo, pt, adlar=None):
    i = tree.nearest(pt)
    q = nearest_points(pt, geo[i])[1]
    return hav(pt.y, pt.x, q.y, q.x), (adlar[i] if adlar else None)


def kara_adasi(pt):
    """nokta hangi kara poligonunda; poligon alanı km² (yaklaşık)."""
    for i in KARA_T.query(pt):
        if KARA_POLY[i].contains(pt):
            p = KARA_POLY[i]
            lat = p.centroid.y
            return p.area * 111.32 ** 2 * math.cos(math.radians(lat)), p
    return None, None


# --- tanık adayları ----------------------------------------------------------------------------
ADAY = []
for f in ("eksik_aday", "konum", "konum4", "konum5", "pleiades_tur"):
    yol = os.path.join(KOK, "denetim", "YER-1104", f + ".json")
    for x in json.load(open(yol, encoding="utf-8")):
        k = x.get("koordinat")
        ADAY.append(dict(ad=x.get("ad"), liste=f, lat=k[0] if k else None, lon=k[1] if k else None,
                         madde_t=x.get("madde_t") or "", madde=json.dumps([x.get("madde"), x.get("taraflar")], ensure_ascii=False),
                         guven=x.get("koordinat_guven") or x.get("konum") or ""))


def yil(s):
    try:
        return int(s[:5]) if s.startswith("-") else int(s[:4])
    except (ValueError, TypeError):
        return None


def ad_parcalari(devlet_id):
    d = DEV.get(devlet_id) or {}
    ad = (d.get("ad") or devlet_id).lower()
    kel = [w for w in ad.replace("-", " ").replace("(", " ").replace(")", " ").split()
           if len(w) >= 5 and not any(w.startswith(s) for s in GENEL)]
    return kel or [ad]


# devlet adındaki genel kelimeler ad eşleşmesinde sayılmaz (her maddede geçer)
GENEL = ("imparator", "cumhuriyet", "krallı", "kralli", "devlet", "hanlı", "beyli", "sultanlı", "prensli",
         "valili", "demokratik", "halk", "birliği", "konfeder", "federasyon", "dükalı", "dükali", "kontluğ",
         "başpiskopos", "baspiskopos", "piskopos", "emirli", "hanedan", "naipli", "sömürge", "somurge", "büyük", "kuzey",
         "güney", "doğu", "batı")


# --- ölçüm -------------------------------------------------------------------------------------
OUT = []
for a in PARCA:
    gn = g(a["buyuk_gun"])
    lat, lon = a["nokta"]
    pt = Point(lon, lat)
    yakin, kendi = [], []
    for y in Y:
        sh, p = sahip(y, gn)
        if sh == "YOK(epok)":
            continue
        dk = hav(lat, lon, y["lat"], y["lon"])
        yakin.append((dk, y["ad"], sh, bool(p and (p.get("enklav") or p.get("eksklav")))))
        if sh == a["devlet"] or boya(sh) == boya(a["devlet"]):
            kendi.append((dk, y["ad"], bool(p and (p.get("enklav") or p.get("eksklav")))))
    yakin.sort()
    kendi.sort()
    kiyi_km, _ = en_yakin(KIYI_T, KIYI, pt)
    nehir_km, nehir_ad = en_yakin(NEHIR_T, NEHIR, pt, NEHIR_AD)
    gol_km, gol_ad = en_yakin(GOL_T, GOL, pt, GOL_AD)
    ada_km2, ada_p = kara_adasi(pt)
    ada_nokta = None
    if ada_km2 is not None and ada_km2 < 20000:
        ada_nokta = sum(1 for d, n, s, b in yakin if d < 400 and ada_p.contains(Point(*KONUM[n])))
    r_km = max(30.0, 1.5 * math.sqrt(a["alan_max"] / math.pi))
    f_y, t_y = yil(a["f"]), yil(a["t"])
    kel = ad_parcalari(a["devlet"])
    tanik, ad_eslesme = [], set()
    for c in ADAY:
        if c["lat"] is not None:
            dk = hav(lat, lon, c["lat"], c["lon"])
            if dk <= r_km:
                tanik.append(dict(ad=c["ad"], tur="KOORDİNATLI", km=round(dk, 1), liste=c["liste"], madde_t=c["madde_t"]))
        else:
            # ad eşleşmesi yalnız SAYILIR, tanık sayılmaz: ilk denemede (4 Kas) 64 eşleşmenin çoğu antlaşma
            # yeri ya da uzak yerdi (Versailles, Meksiko, Saint-Germain) — yeri bilinmeyen aday parçayı tanıklayamaz
            my = yil(c["madde_t"])
            if my is not None and f_y is not None and f_y - 1 <= my <= t_y + 1 and any(w in c["madde"].lower() for w in kel):
                ad_eslesme.add(c["ad"])
    tanik = list({t["ad"]: t for t in tanik}.values())
    OUT.append(dict(
        no=a["no"], dosya=a["_dosya"], devlet=a["devlet"], devlet_ad=a.get("devlet_ad"), f=a["f"], t=a["t"],
        buyuk_gun=a["buyuk_gun"], alan=a["alan_max"], kesit=a.get("kesit"), nokta=a["nokta"],
        komsular=a.get("komsular"), koridor=a.get("koridor"), koridor_km=a.get("koridor_km"), sinif=a.get("sinif"),
        en_yakin=[dict(ad=n, km=round(d, 1), sahip=s, bayrak=b) for d, n, s, b in yakin[:3]],
        kendi=[dict(ad=n, km=round(d, 1), bayrak=b, sahip=sahip(next(yy for yy in Y if yy["ad"] == n), gn)[0])
               for d, n, b in kendi[:2]],
        kiyi_km=round(kiyi_km, 1), nehir_km=round(nehir_km, 1), nehir=nehir_ad, gol_km=round(gol_km, 1), gol=gol_ad,
        kara_alani_km2=round(ada_km2) if ada_km2 else None, ada_nokta=ada_nokta, tanik=tanik[:4], tanik_say=len(tanik), ad_eslesme=sorted(ad_eslesme), r_km=round(r_km)))


# --- kök sebep (sezgisel; MD'de kural yazılı) --------------------------------------------------
def sebep(o):
    k = o["kendi"][0] if o["kendi"] else None
    if not k:
        return "SAHİPSİZ-BOYA"
    if k["km"] > 300:
        return "UZAK-SAHİP"
    if k["bayrak"]:
        return "KALE-ENKLAV"
    if o["kara_alani_km2"] is None:
        return "KIYI" if o["kiyi_km"] <= 5 else "DENİZ-NOKTASI"
    if o["ada_nokta"] == 0:
        return "ADA"
    if o["en_yakin"] and o["en_yakin"][0]["km"] > 75:
        return "EKSİK-NOKTA"
    if o["kiyi_km"] <= 10:
        return "KIYI"
    if o["nehir_km"] <= max(15, min(o["r_km"], 40)) or o["gol_km"] <= 10:
        return "NEHİR/GÖL"
    if o["alan"] < 300:
        return "SINIR-ARTIĞI"
    return "BELİRSİZ"


for o in OUT:
    o["sebep"] = sebep(o)
json.dump(OUT, open(os.path.join(BURA, "j_motor.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(collections.Counter(o["sebep"] for o in OUT), file=sys.stderr)

# --- J-MOTOR-SORU.md ---------------------------------------------------------------------------
GRUP = [
    ("KALE-ENKLAV", "Kale/liman noktası (`enklav:`/`eksklav:` bayraklı) hücresi karaya taşıyor",
     "Parçayı boyatan en yakın kendi noktası bayraklı kale. MOTOR-SORU.md'deki Oran/Bâdis ailesinin genişlemiş hâli: "
     "`enklav:true` hücresi kırpılmıyor. **Soru:** bayraklı noktanın hücresi kale çevresiyle (R km / kıyı tamponu) sınırlansın mı?"),
    ("UZAK-SAHİP", "Parçayı boyatan devletin en yakın noktası > 300 km",
     "Parça X'e boyalı ama X'in en yakın noktası 300 km'den uzakta; Voronoi hücresi bu kadar uzanamaz (200 km tavan). "
     "**Soru:** boya nereden geliyor — izleme/ızgara (Dijkstra) sahibinin karar dışı yüzü mü, `bolgeler.js` kaynaklı bölge mi, "
     "yoksa başka bir devletin noktası X'e devrediliyor mu (tâbi/çatı eşlemesi)?"),
    ("EKSİK-NOKTA", "En yakın herhangi bir nokta > 75 km — bölgede nokta yok",
     "Parça boş bir alanda; en yakın noktanın hücresi uzaktan emiyor. **Soru:** motor tarafı değil, veri: tanık nokta "
     "(merdiven ①-⑤) gerekir. Motor için tek soru: parçanın emildiği hücre en yakın nokta mı (Voronoi) yoksa ızgara mı?"),
    ("ADA", "Noktasız ada", "Parçanın oturduğu kara poligonunda (NE 10m, < 20.000 km²) hiç etkin nokta yok."),
    ("KIYI", "Kıyı artığı (nokta kıyıya ≤ 10 km)",
     "Kıyı maskesi hücreyi kesip kıyı şeridinde kopuk parça bırakıyor. **Soru:** kara maskesiyle kırpma sonrası "
     "küçük kıyı parçaları komşuya mı bırakılmalı, ana gövdeye mi birleşmeli?"),
    ("NEHİR/GÖL", "Nehir/göl yaslanması artığı (nehir ≤ 15-40 km ya da göl ≤ 10 km)",
     "Nehir bedeli (ızgara) hücreyi nehir boyunca ikiye bölüyor, karşı yakada noktasız parça kalıyor. **Soru:** nehir "
     "yaslanması karşı yakada sahibin noktası yokken parça bırakmasın mı (karşı yakayı oradaki komşu almalı)?"),
    ("SINIR-ARTIĞI", "Sınır çizgisi artığı (< 300 km², başka doğal sınır yakın değil)",
     "Küçük şerit/köşe; sınır yaslanması ya da yuvarlama artığı. **Soru:** belli eşik altı kopuk parça komşuya devredilsin mi?"),
    ("BELİRSİZ", "Sınıflanamadı", "Kural dizisine uymadı; parça geometrisi okunmadan karar verilemez."),
    ("SAHİPSİZ-BOYA", "Devletin o gün hiç noktası yok", "Parça bir devlete boyalı ama devletin o kesitte tek noktası yok."),
    ("DENİZ-NOKTASI", "Temsil noktası denizde", "NE 10m kara dışında, kıyıya > 5 km."),
]


def dogal(o):
    s = [("kıyı", o["kiyi_km"], ""), ("nehir", o["nehir_km"], o["nehir"] or ""), ("göl", o["gol_km"], o["gol"] or "")]
    s.sort(key=lambda x: x[1])
    return " · ".join("%s%s %s km" % (t, (" " + a) if a else "", km) for t, km, a in s[:2])


def hucre(o):
    e = o["en_yakin"][0] if o["en_yakin"] else None
    return "%s (%s km, %s%s)" % (e["ad"], e["km"], e["sahip"], ", bayraklı" if e["bayrak"] else "") if e else "—"


def kendi_s(o):
    k = o["kendi"][0] if o["kendi"] else None
    if not k:
        return "**yok**"
    return "%s (%s km%s%s)" % (k["ad"], k["km"], "" if k["sahip"] == o["devlet"] else ", " + k["sahip"],
                               ", bayraklı" if k["bayrak"] else "")


def tanik_s(o):
    if not o["tanik"]:
        return "—"
    return "; ".join("%s %s km (%s)" % (t["ad"], t["km"], t["liste"]) for t in o["tanik"])


L = []
L.append("# J-MOTOR-SORU — 0 noktalı kopuk parçalar (KOVALAR J, 202 satır) HAVVA için motor sorusu\n")
L.append("Yazan: LAB PAZAR · 4 Kasım 2026 · dal `lab-1104-jkova` (taban `origin/lab-1104-kaynak5` 87741821c) · "
         "alet `j_motor_olc.py` → `j_motor.json` · yerleşim %d · istek: EMRELİC 1 KASIM.\n" % len(Y))
L.append("## ⚠️ Evren ve sınır — önce bunu okuyun\n")
L.append("- **Parça geometrisi okunmadı.** Koşu 32 çıktısı bu makinede çözülmüş değil; `coz-c` bellek ister (LAB 7,9 GB, "
         "ölçüm anında 1 GB boş, LAB SALI çeviri koşuyordu). Elde J satırlarının kendisi var: temsil noktası "
         "(`representative_point`), en büyük kesit alanı, komşu payları, koridor — LAB SALI'nın koşu 32 ölçümünden (`adaylar*.json`).")
L.append("- **\"Emen hücre\" = düz Voronoi yaklaşığı:** temsil noktasına en yakın, o gün epoku içindeki nokta. Motor karada "
         "ızgara Dijkstra sahipliği kullanır (`uret_petek.py` ~1213-1306), nehir bedeli vb. ile sonuç farklı olabilir. "
         "Ayrıca parçayı boyatan devletin **kendi** en yakın noktası verildi (aynı `harita:` boya anahtarı sayılır: "
         "`portekiz-mozambik` noktası `portekiz` parçasını boyatabilir; sahibi farklıysa parantezde yazılı) — "
         "parçanın gerçek kaynağı büyük ihtimalle odur.")
L.append("- **Doğal sınır:** temsil noktasından Natural Earth 10m kıyı / nehir / göl çizgisine uzaklık (en yakın ikisi). Sırt ölçülmedi.")
L.append("- **Tanık adayı:** `denetim/YER-1104` listelerinde (eksik_aday, konum, konum4, konum5, pleiades_tur) koordinatlı "
         "aday, temsil noktasına max(30 km, 1,5·√(alan/π)) içinde. Koordinatsız adaylarda ad eşleşmesi denendi; çoğu antlaşma "
         "yeri / uzak yer çıktı (Versailles, Meksiko), tanık sayılmadı — sayısı `j_motor.json` `ad_eslesme`de.")
L.append("- **Kök sebep sezgiseldir** (kural sırası: sahipsiz → uzak sahip > 300 km → bayraklı kale → deniz → ada → "
         "eksik nokta > 75 km → kıyı ≤ 10 km → nehir ≤ 15-40 km / göl ≤ 10 km → < 300 km² sınır artığı → belirsiz). "
         "Geometri okununca gruplar kayabilir.\n")
say = collections.Counter(o["sebep"] for o in OUT)
alan = collections.defaultdict(float)
for o in OUT:
    alan[o["sebep"]] += o["alan"]
ayni = collections.Counter(tuple(o["nokta"]) for o in OUT)
L.append("## Özet\n")
L.append("| kök sebep | parça | Σ en büyük kesit km² | tanık adaylı |")
L.append("|---|---|---|---|")
for kod, ad, _ in GRUP:
    if say[kod]:
        L.append("| %s — %s | %d | %s | %d |" % (kod, ad, say[kod], format(round(alan[kod]), ",").replace(",", "."),
                                                 sum(1 for o in OUT if o["sebep"] == kod and o["tanik"])))
L.append("| **toplam** | **%d** | | **%d** |\n" % (len(OUT), sum(1 for o in OUT if o["tanik"])))
L.append("Aynı temsil noktasını paylaşan satırlar (aynı parça, farklı devlet/dönem): %d nokta %d satır taşıyor — "
         "tek geometri sorusu birden çok satırı kapatır (ör. Harkov güneyi 49,82K 35,85D: 6 satır, 1918-1943 arası 4 devlet).\n"
         % (sum(1 for v in ayni.values() if v > 1), sum(v for v in ayni.values() if v > 1)))
L.append("## HAVVA'ya sorular (gruba göre)\n")
for kod, ad, ac in GRUP:
    if say[kod]:
        L.append("- **%s (%d):** %s" % (kod, say[kod], ac))
L.append("")
for kod, ad, ac in GRUP:
    S = sorted((o for o in OUT if o["sebep"] == kod), key=lambda o: -o["alan"])
    if not S:
        continue
    L.append("## %s — %s (%d)\n" % (kod, ad, len(S)))
    L.append("| parça | devlet | yıl aralığı | alan km² | temsil noktası | emen hücre (en yakın nokta) | boyatan kendi noktası | doğal sınır | tanık adayı |")
    L.append("|---|---|---|---|---|---|---|---|---|")
    for o in S:
        L.append("| %s | %s | %s → %s | %s | %.3f, %.3f | %s | %s | %s | %s |" % (
            o["no"], o["devlet"], o["f"][:10], o["t"][:10], format(round(o["alan"]), ",").replace(",", "."),
            o["nokta"][0], o["nokta"][1], hucre(o), kendi_s(o), dogal(o), tanik_s(o)))
    L.append("")
L.append("## Ölçülmedi\n")
L.append("- Parça poligonu, gerçek motor hücre ataması (koşu 32 `coz-c` gerekir) — LAB SALI'nın işi bitince ya da HAVVA'da.")
L.append("- Sırt/yükseklik yaslanması. Tanık adaylarının o devirde varlığı ve sahibi (KAYNAK-GEREK, merdiven ①-⑤).")
open(os.path.join(BURA, "J-MOTOR-SORU.md"), "w", encoding="utf-8").write("\n".join(L) + "\n")
print("yazıldı J-MOTOR-SORU.md", file=sys.stderr)
