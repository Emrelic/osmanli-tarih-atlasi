# -*- coding: utf-8 -*-
"""D5-AMERIKA — 29 Ekim 1923 Amerika sınır kayıtlarını ÜRETİR (ADIM 0 + ADIM 1 `sinif` + ADIM 2 G1).

Çıktı : data/d_sinirlar_amerika.js (window.D_SINIRLAR_AMERIKA)
Şema  : denetim/SEMA-D-0916.md · sınıflar oturumlar/GORUNUM-ABCD-0916.md en üst bölüm (A–F)
Envanter: denetim/D5-AMERIKA-0916.md (78 parça, kaynaklar orada)
Okur  : veri-kaynak/d_bugunku_sinirlar.geojson (D-GEOARAC) · veri-kaynak/ne_10m_admin_0_countries.geojson
        (yalnız sol_taraf testi) · data/devletler.js + denetim/TASLAK-KUNYE-D-0916.json (künye günleri)

KURAL (D2-KOMSU üreticisiyle aynı): bugünkü geometri bir VEKİLDİR; yalnız kaynak "değişmedi" diyorsa
(ya da değişiklik ölçek altı küçükse ve notta yazılıysa) kullanılır. Değişen/bilinmeyen parça YOK kutusu olur.
Envanterde bir çiftin alt kesimleri ayrı sınıftaysa ve kesim noktasının koordinatı elde yoksa, çift TEK
kayıt olarak EN DÜŞÜK sınıfla yazılır (not alanında hangi kesimin daha yüksek olduğu söylenir).
Kesim noktaları GeoNames konumlarıdır (antlaşmanın adını verdiği yer) — sınır dayanağı DEĞİL, konum vekili.
G1 (1918-11-11 → 1923-10-29): Amerika'da bu pencerede E/F/D hattı DEĞİŞMEDİ (envanter §3) ⇒ ayrı g1 kaydı yok;
her kaydın `f`'i hattın gerçek başlangıcıdır (kaynak günü ile iki tarafın künye `f`'inin BÜYÜĞÜ).
"""
import sys, io, os, re, json, math
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
from shapely.geometry import shape, Point, LineString, box
from shapely.ops import linemerge

SADE = 0.002
T = "1923-10-29"
IBS = "https://library.law.fsu.edu/Digital-Collections/LimitsinSeas/pdf/ibs%03d.pdf"
NE = "Natural Earth 10m admin-0 (bugünkü sınır, D-GEOARAC çıktısı) — kullanılabilirliği 'değişmedi' dayanağına bağlı"
KES_NE = "NE 1:10m ölçek; konum hatası ÖLÇÜLMEDİ (ölçek gereği ~1-2 km beklenir)"
YOK_NOT = ("1923 hattının koordinatı ELDE YOK ⇒ bu kutuda E/D ÇİZİLMEZ, A/B (ya da C) geçerli. "
           "Kutu bugünkü çizginin çevresidir (konum vekili), 1923 hattı DEĞİLDİR.")
SINIF = {"D": "E", "C": "C", "fiili": "D", "D-YOK": "YOK"}
F_BEKLER = "F değil E: tanınma kanıtı (denetim/TANINMA-1923-0916.json) henüz yok"
TASLAK = ("ingiliz-honduras", "newfoundland-dominyonu", "honduras-cumhuriyeti", "el-salvador-cumhuriyeti",
          "nikaragua-cumhuriyeti", "kosta-rika-cumhuriyeti")
IRELAND = ("Gordon Ireland, Boundaries, Possessions, and Conflicts in South America (Harvard UP, 1938) — "
           "archive.org McGillLibrary-law_boundaries-possessions-conflicts_F2236I741938-22073")


def km(a, b):
    r = math.pi / 180
    return 6371 * math.hypot((b[0] - a[0]) * r * math.cos((a[1] + b[1]) / 2 * r), (b[1] - a[1]) * r)


def uzunluk(ls):
    c = list(ls.coords)
    return sum(km(c[i], c[i + 1]) for i in range(len(c) - 1))


# ---- künye günleri (f = max(kaynak günü, iki tarafın künye f'i)) ----
import subprocess
KF = json.loads(subprocess.run(
    ["node", "-e", "global.window={};eval(require('fs').readFileSync('data/devletler.js','utf8'));"
     "const D=Object.values(window).find(v=>Array.isArray(v)&&v[0]&&v[0].id);"
     "const o={};for(const d of D)if(d.f)o[d.id]=d.f;process.stdout.write(JSON.stringify(o));"],
    capture_output=True, text=True, encoding="utf-8", check=True).stdout)
TJ = json.load(open("denetim/TASLAK-KUNYE-D-0916.json", encoding="utf-8"))
for k in TJ["taslak_kunyeler"]:
    if isinstance(k, dict) and k.get("id") in TASLAK:
        KF[k["id"]] = k["f"]


def pad(s):
    y, rest = s.split("-", 1)
    return y.zfill(4) + "-" + rest


def bas(f, a, b):
    for x in (a, b):
        if x not in KF:
            raise SystemExit(f"künye günü yok: {x}")
    return max((f, KF[a], KF[b]), key=pad)


# ---- bugünkü çift çizgileri ----
GJ = json.load(open("veri-kaynak/d_bugunku_sinirlar.geojson", encoding="utf-8"))
CIFT = {}
for ft in GJ["features"]:
    CIFT.setdefault(ft["properties"]["cift"], []).append(shape(ft["geometry"]))


def cizgi(c):
    if c not in CIFT:
        raise SystemExit(f"çift yok: {c}")
    out = []
    for g in CIFT[c]:
        m = linemerge(g) if g.geom_type == "MultiLineString" else g
        out += list(getattr(m, "geoms", [m]))
    return out


ISO = {"kanada": ["CAN"], "abd": ["USA", "USG"], "meksika": ["MEX"], "guatemala": ["GTM"],
       "ingiliz-honduras": ["BLZ"], "el-salvador-cumhuriyeti": ["SLV"], "honduras-cumhuriyeti": ["HND"],
       "nikaragua-cumhuriyeti": ["NIC"], "kosta-rika-cumhuriyeti": ["CRI"], "panama-cumhuriyeti": ["PAN"],
       "kolombiya-cumhuriyeti": ["COL"], "venezuela-cumhuriyeti": ["VEN"], "ekvador-cumhuriyeti": ["ECU"],
       "peru-cumhuriyeti": ["PER"], "bolivya-cumhuriyeti": ["BOL"], "sili-cumhuriyeti": ["CHL"],
       "arjantin-cumhuriyeti": ["ARG"], "paraguay-cumhuriyeti": ["PRY"], "uruguay-cumhuriyeti": ["URY"],
       "brezilya-cumhuriyeti": ["BRA"], "ingiliz-guyanasi": ["GUY"], "hollanda-guyanasi": ["SUR"],
       "fransiz-guyanasi": ["FRA"], "kuba-cumhuriyeti": ["CUB"], "haiti": ["HTI"],
       "dominik-cumhuriyeti": ["DOM"], "newfoundland-dominyonu": ["CAN"], "fransa-cumhuriyet": ["MAF"],
       "hollanda": ["SXM"], "brezilya-imparatorlugu": ["BRA"]}
KODLAR = {k for v in ISO.values() for k in v}
ADM = json.load(open("veri-kaynak/ne_10m_admin_0_countries.geojson", encoding="utf8"))
POLY = {}
for f_ in ADM["features"]:
    k = f_["properties"]["ADM0_A3"]
    if k in KODLAR:
        g = shape(f_["geometry"]).buffer(0)
        POLY[k] = POLY[k].union(g) if k in POLY else g


def sol_taraf(ls, a, b, iso=None):
    iso = iso or ISO
    m =ls.interpolate(0.5, normalized=True)
    p0 = ls.interpolate(max(0, ls.project(m) - 0.005))
    p1 = ls.interpolate(min(ls.length, ls.project(m) + 0.005))
    dx, dy = p1.x - p0.x, p1.y - p0.y
    n = math.hypot(dx, dy) or 1
    sol = Point(m.x - dy / n * 0.03, m.y + dx / n * 0.03)
    ina = any(POLY[k].contains(sol) for k in iso[a] if k in POLY)
    inb = any(POLY[k].contains(sol) for k in iso[b] if k in POLY)
    if ina == inb:
        SOLSUZ.append((a, b))
        return None
    return a if ina else b


SOLSUZ = []


def dizi(g):
    g = g.simplify(SADE, preserve_topology=False)
    return [[round(x, 4), round(y, 4)] for x, y in g.coords]


def parcala(parcalar, kosul):
    out = []
    for g in parcalar:
        cur = []
        for c in g.coords:
            if kosul(c):
                cur.append(c)
            else:
                if len(cur) >= 2:
                    out.append(LineString(cur))
                cur = []
        if len(cur) >= 2:
            out.append(LineString(cur))
    return out


def bbox(parcalar, pay=0.05):
    xs = [x for g in parcalar for x, _ in g.coords]
    ys = [y for g in parcalar for _, y in g.coords]
    return (min(xs) - pay, min(ys) - pay, max(xs) + pay, max(ys) + pay)


KAYIT = []


def taslak_not(a, b):
    t = [x for x in (a, b) if x in TASLAK]
    return (" · TASLAK KÜNYE: " + ", ".join(t) + " devletler.js'te YOK (denetim/TASLAK-KUNYE-D-0916.json; UYGULA bekliyor)") if t else ""


def ekle(id_, a, b, f, kategori, parcalar, dayanak, degisti, tahdit, kesinlik, kesinlik_not, not_="",
         t=T, sinif_not=None, geometri=NE, sol_iso=None):
    s = SINIF[kategori]
    parcalar = [p for p in parcalar if uzunluk(p) >= 0.5]
    if not parcalar:
        raise SystemExit(f"{id_}: parça yok")
    for i, ls in enumerate(parcalar):
        KAYIT.append({
            "id": id_ + (f"-{i+1}" if len(parcalar) > 1 else ""),
            "taraflar": [a, b], "f": bas(f, a, b), "t": t, "kategori": kategori,
            "sinif": s, "sinif_not": sinif_not or (F_BEKLER if s == "E" else None),
            "sol_taraf": sol_taraf(ls, a, b, sol_iso), "hat": dizi(ls),
            "uzunluk_km": round(uzunluk(ls), 1), "geometri_kaynagi": geometri,
            "degisti": degisti, "tahdit": tahdit,
            "kesinlik_km": kesinlik, "kesinlik_not": kesinlik_not,
            "dayanak": dayanak, "not": (not_ + taslak_not(a, b)).lstrip(" ·"),
        })


def yok(id_, a, b, f, kutu, degisti, dayanak, not_="", t=T, hukuki=None):
    KAYIT.append({"id": id_, "taraflar": [a, b], "f": bas(f, a, b), "t": t, "kategori": "D-YOK", "sinif": "YOK",
                  "sinif_not": hukuki, "hat": None,
                  "kutu": [round(v, 3) for v in kutu], "degisti": degisti, "dayanak": dayanak,
                  "not": (not_ + " · " if not_ else "") + YOK_NOT + taslak_not(a, b)})


def ibs(n, ad, alinti=None, sayfa=None):
    d = {"ad": f"IBS No. {n} {ad}", "tur": "resmî sınır çalışması", "url": IBS % n}
    if sayfa:
        d["sayfa"] = sayfa
    if alinti:
        d["alinti"] = alinti
    return d


def ire(sayfa, alinti=None):
    d = {"ad": "Ireland 1938", "tur": "akademik (Harvard UP)", "kaynak": IRELAND, "sayfa": sayfa}
    if alinti:
        d["alinti"] = alinti
    return d


CA, US, MX, GT, BH = "kanada", "abd", "meksika", "guatemala", "ingiliz-honduras"
SV, HN, NI, CR, PA = "el-salvador-cumhuriyeti", "honduras-cumhuriyeti", "nikaragua-cumhuriyeti", "kosta-rika-cumhuriyeti", "panama-cumhuriyeti"
CO, VE, EC, PE, BO = "kolombiya-cumhuriyeti", "venezuela-cumhuriyeti", "ekvador-cumhuriyeti", "peru-cumhuriyeti", "bolivya-cumhuriyeti"
CL, AR, PY, UY, BR = "sili-cumhuriyeti", "arjantin-cumhuriyeti", "paraguay-cumhuriyeti", "uruguay-cumhuriyeti", "brezilya-cumhuriyeti"
GY, SR, GF, CU, HT = "ingiliz-guyanasi", "hollanda-guyanasi", "fransiz-guyanasi", "kuba-cumhuriyeti", "haiti"
DO, NF, FR, NL = "dominik-cumhuriyeti", "newfoundland-dominyonu", "fransa-cumhuriyet", "hollanda"
TAH_YOK = {"t": None, "not": "bulunamadı"}

# GeoNames çıpaları (allCountries, 16 Eyl 2026 taraması; denetim/D5-AMERIKA-0916.md §G)
TEOTECACINTE = (-86.13333, 14.05)      # HN PASS "Portillo de Teotecacinte" (geonames)
APAPORIS = (-69.42927, -1.38996)       # BR STM "Río Apaporis" (ağız noktası)
APA = (-57.99364, -22.09384)           # BR STM "Rio Apa" (ağız noktası)
PILCO = (-57.66664, -25.354)           # AR STM "Río Pilcomayo" (ağız noktası)
OLCA, PAROMA, CHIPAPA = (-68.47964, -20.9466), (-68.40804, -20.93549), (-68.3, -21.1)
PATALANI, IRPA, SILLAJ = (-68.52693, -19.8429), (-68.63333, -19.83333), (-68.69063, -19.74226)
TOLACOLLO = (-69.55595, -17.23407)     # BO PPL "Tolacollo" (1904 hattının 96. noktası Cerro Chipe/Tolacollo)
MASOLLER = (-56.0041, -31.08339)       # UY PPL

# ======================= KUZEY AMERİKA =======================
cu = cizgi("CAN-USA")
alaska = [g for g in cu if min(x for x, _ in g.coords) < -129.5]
ana = [g for g in cu if g not in alaska]
B_LOW = box(-95.20, 48.83, -94.60, 49.40)
ekle("d1923-ca-us-ana", CA, US, "1846-06-15", "D", parcala(ana, lambda c: not B_LOW.contains(Point(c))),
     [{"ad": "Paris Antlaşması", "tarih": "1783-09-03", "tur": "antlaşma"},
      {"ad": "1818 Sözleşmesi", "madde": "md. II", "tarih": "1818-10-20", "tur": "sözleşme"},
      {"ad": "Webster–Ashburton Antlaşması", "tarih": "1842-08-09", "tur": "antlaşma"},
      {"ad": "Oregon Antlaşması", "tarih": "1846-06-15", "tur": "antlaşma"},
      {"ad": "1908 Antlaşması (yeniden ölçüm ve işaretleme)", "madde": "md. V–VI", "tarih": "1908-04-11", "tur": "antlaşma"},
      {"ad": "International Boundary Commission — History", "tur": "resmî komisyon",
       "url": "https://www.internationalboundarycommission.org/en/about/history.php"},
      {"ad": "ABD–Britanya Antlaşması 24 Şub 1925 (44 Stat. 2102)", "tur": "antlaşma", "madde": "md. II",
       "url": "https://www.govinfo.gov/content/pkg/STATUTE-44/pdf/STATUTE-44-Pg2102.pdf"}],
     {"deger": True, "kaynak": "44 Stat. 2102 (1925)",
      "not": "KÜÇÜK: 1925 md. II 49. paraleli anıtlar arası DÜZ çizgi saydı (1923'te eğri paralel) — ölçek altı; "
             "md. III Grand Manan kanalı denizde. Lake of the Woods kesimi ayrı kayıt"},
     {"t": "1872-1876", "not": "49. paralel 1872 karma komisyonu (son protokol 29 May 1876); 1908 sonrası yeniden işaretleme"},
     1.5, KES_NE + " · Lake of the Woods kutusu (TAHMİNİ) dışarıda bırakıldı",
     "Oregon Antlaşması günü (15 Haz 1846) ajan raporunda yok — genel bilgi; f yine Kanada künyesine (1867-07-01) çekilir")
yok("d1923-ca-us-DEGISTI-lake-of-the-woods", CA, US, "1846-06-15", B_LOW.bounds,
    {"deger": True, "kaynak": "44 Stat. 2102 (1925) md. I", "not": "1925: Northwest Angle bitim noktası 49°23'04.49\"K 95°09'11.61\"B"},
    [{"ad": "ABD–Britanya Antlaşması 24 Şub 1925", "madde": "md. I", "tur": "antlaşma",
      "url": "https://www.govinfo.gov/content/pkg/STATUTE-44/pdf/STATUTE-44-Pg2102.pdf",
      "alinti": "there are two small areas of United States waters in Lake of the Woods"}],
    "1923'te hat 5 noktada kendini kesiyordu (hukuken tanımlı ama kusurlu) · kutu TAHMİNİ",
    hukuki="hukuken C (kusurlu tanım)")
mer = [c for g in alaska for c in g.coords if abs(c[0] + 141) < 0.01]
if len(mer) < 2:
    raise SystemExit("141. meridyen noktası yok")
la = [c[1] for c in mer]
ekle("d1923-ca-us-141", CA, US, "1867-06-20", "D", [LineString([(-141.0, max(la)), (-141.0, min(la))])],
     [{"ad": "İngiliz–Rus Sözleşmesi", "madde": "md. III (141. meridyen)", "tarih": "1825-02-28", "tur": "sözleşme"},
      {"ad": "ABD–Rusya Alaska Antlaşması", "tarih": "1867-03-30", "tur": "antlaşma"},
      {"ad": "International Boundary Commission — History", "tur": "resmî komisyon",
       "url": "https://www.internationalboundarycommission.org/en/about/history.php",
       "alinti": "141. meridyen saha işi 1913'te tamamlandı (özet, alıntı değil)"}],
     {"deger": None, "kaynak": "—", "not": "değişiklik bulunmadı; 'değişmedi' diyen kaynak da okunmadı. Hat antlaşmanın kendi meridyeni"},
     {"t": "1913", "not": "saha işi 1913'te bitti (IBC)"},
     0.5, "geometri METİNDEN: 141°B meridyeni, uçları NE çizgisinin meridyen üzerindeki en kuzey/en güney noktası",
     "1867 günleri ajan raporunda yok (imza 30 Mar 1867 genel bilgi); f Kanada künyesine çekilir",
     geometri="antlaşma metni (141°B meridyeni) · uçlar NE 10m")
yok("d1923-ca-us-alaska-guneydogu", CA, US, "1905-03-25",
    bbox(parcala(alaska, lambda c: c[0] > -140.99), 0.05),
    {"deger": None, "kaynak": "RIAA XV 481–540", "not": "hat 1903 kararı + 1905 notaları; işaretleme yılı ve sonraki değişiklik BULUNAMADI"},
    [{"ad": "Alaska Sınır Mahkemesi kararı", "tarih": "1903-10-20", "tur": "hakem kararı",
      "url": "https://legal.un.org/riaa/cases/vol_XV/481-540.pdf", "sayfa": "492–493",
      "alinti": "in the absence of further survey, the evidence is not sufficient"},
     {"ad": "Nota teatisi (komisyon raporunun kabulü)", "tarih": "1905-03-25", "tur": "nota"}],
    "Envanter d1923-ca-us-4 · hukuken C (işaretleme bilinmiyor) · degisti bilinmediği için çizilmedi",
    hukuki="hukuken C")
yok("d1923-ca-nf-labrador", CA, NF, "1907-09-26", (-67.8, 51.4, -57.0, 60.4),
    {"deger": True, "kaynak": "JCPC 1927", "not": "Privy Council 1 Mar 1927 kararı hattı çizdi"},
    [{"ad": "Privy Council, Labrador Boundary, [1927] UKPC 25", "tarih": "1927-03-01", "tur": "yargı kararı",
      "url": "https://www.solon.org/Constitutions/Canada/English/Misc/jcpc_19270301_nl.html",
      "alinti": "at a distance from high-water mark on the seacoast ... of one mile"}],
    "TARTIŞMALI: Kanada kıyıdan 1 millik şerit, Newfoundland Atlantik su ayrımını iddia ediyordu · kutu TAHMİNİ")

mu = cizgi("MEX-USA")
EP_LON = -106.53
B_COL = box(-114.84, 32.48, -114.70, 32.73)
IBWC_T = {"ad": "IBWC — Treaties", "tur": "resmî komisyon", "url": "https://www.ibwc.gov/treaties-minutes/treaties/"}
IBWC_H = {"ad": "IBWC — History", "tur": "resmî komisyon", "url": "https://www.ibwc.gov/about-us/history/",
          "alinti": "increased the number of boundary monuments from 52 to 258"}
ekle("d1923-us-mx-kara", US, MX, "1853-12-30", "D",
     parcala(mu, lambda c: c[0] <= EP_LON and not B_COL.contains(Point(c))),
     [{"ad": "Guadalupe Hidalgo Antlaşması", "tarih": "1848-02-02", "tur": "antlaşma"},
      {"ad": "Gadsden Antlaşması", "tarih": "1853-12-30", "tur": "antlaşma"},
      {"ad": "Sınır Sözleşmeleri", "tarih": "1882-07-29", "tur": "sözleşme", "not": "ve 1 Mar 1889"},
      IBWC_T, IBWC_H],
     {"deger": False, "kaynak": "IBWC History",
      "not": "1894 sonrası yalnız 18 ek anıt (toplam 276); 1933 ve 1970 belgelerinin kapsamı NEHİR kesimi. "
             "'Kara hattı değişmedi' cümlesi kaynakta AÇIKÇA yok — değişiklik anılmıyor"},
     {"t": "1891-1894", "not": "Barlow–Blanco yeniden ölçümü, 258 anıt"},
     1.5, KES_NE + " · El Paso ayrımı lon −106.53 (TAHMİNİ, 1 numaralı anıt çevresi) · Colorado kutusu TAHMİNİ",
     "Gadsden: imza günü; yürürlük günü okunmadı")
rg = parcala(mu, lambda c: c[0] > EP_LON)
yok("d1923-us-mx-DEGISTI-rio-grande", US, MX, "1848-02-02", bbox(rg, 0.05),
    {"deger": True, "kaynak": "IBWC", "not": "1933 El Paso–Juárez düzeltmesi (155 mil) · 1970 antlaşması 1.255 millik nehir kesimini yeniden kurdu"},
    [IBWC_T, {"ad": "Banco Sözleşmesi", "tarih": "1905-03-20", "tur": "sözleşme"}],
    "hukuken C: hareketli nehir hattı (1884/1905 banco kuralları)", hukuki="hukuken C")
yok("d1923-us-mx-DEGISTI-colorado", US, MX, "1848-02-02", B_COL.bounds,
    {"deger": True, "kaynak": "IBWC", "not": "Colorado nehir kesimi; 1970 antlaşması"},
    [IBWC_T], "hukuken C · kutu TAHMİNİ", hukuki="hukuken C")
yok("d1923-us-mx-chamizal", US, MX, "1911-06-15", (-106.47, 31.74, -106.42, 31.78),
    {"deger": True, "kaynak": "RIAA XI 309–347", "not": "29 Ağu 1963 sözleşmesiyle çözüldü"},
    [{"ad": "Chamizal hakem kararı", "tarih": "1911-06-15", "tur": "hakem kararı",
      "url": "https://legal.un.org/riaa/cases/vol_XI/309-347.pdf", "sayfa": "342",
      "alinti": "The American commissioner is of opinion that this award is void"}],
    "TARTIŞMALI: ABD 1911 kararını reddetti · 1923 fiilî idare BULUNAMADI · kutu TAHMİNİ")
yok("d1923-us-pa-kanal-bolgesi", US, PA, "1915-02-11", (-80.05, 8.85, -79.45, 9.42),
    {"deger": True, "kaynak": "history.state.gov Milestones 1977-1980", "not": "Kanal Bölgesi 1 Eki 1979'da sona erdi — bugünkü haritada YOK"},
    [{"ad": "Hay–Bunau-Varilla Antlaşması", "madde": "md. II–III", "tarih": "1903-11-18", "tur": "antlaşma"},
     {"ad": "Sınır Sözleşmesi (onay 11 Şub 1915)", "tarih": "1914-09-02", "tur": "sözleşme",
      "url": "https://history.state.gov/historicaldocuments/frus1915/d1732", "sayfa": "1126–1129",
      "alinti": "all coordinates are in accordance with the Panama-Colon Datum"}],
    "Envanter d1923-us-pa-1 · 1914 metni KOORDİNATLI ⇒ çizilebilir; bu turda ÇİZİLMEDİ (borç) · kutu TAHMİNİ",
    hukuki="hukuken E (1914 sözleşmesi, koordinatlı) — çizim yapılmadı")

# ======================= ORTA AMERİKA =======================
ekle("d1923-mx-gt", MX, GT, "1882-09-27", "D", cizgi("GTM-MEX"),
     [{"ad": "Meksika–Guatemala Sınır Antlaşması", "madde": "md. 1, md. 3", "tarih": "1882-09-27", "tur": "antlaşma"},
      {"ad": "Sınır komisyonu protokolü", "madde": "md. 4", "tarih": "1883-09-14", "tur": "protokol"},
      {"ad": "Açıklayıcı sözleşme (Salinas/Chixoy)", "tarih": "1895-04-01", "tur": "sözleşme"},
      ibs(159, "Guatemala–Mexico", "By May 1899, the demarcation of the boundary with pillars or monuments was completed.", "3")],
     {"deger": False, "kaynak": "IBS 159", "not": "IBS (1976) 1882 md. 3'ü bugünkü tahdit olarak verir; 1961 sonrası Suchiate kanalı ÖLÇÜLMEDİ"},
     {"t": "1899-05", "not": "sütun ve anıtlarla tamam"}, 1.5, KES_NE, "f: imza günü (onay günü bulunamadı)")
ekle("d1923-mx-bh", MX, BH, "1897-07-21", "C", cizgi("BLZ-MEX"),
     [{"ad": "İngiltere–Meksika Sınır Antlaşması", "madde": "md. I", "tarih": "1893-07-08", "tur": "antlaşma"},
      ibs(161, "Belize–Mexico", "Signed at Mexico, July 8, 1893 [Ratifications exchanged at Mexico, July 21, 1897]", "4")],
     {"deger": False, "kaynak": "IBS 161"}, TAH_YOK, 1.5, KES_NE,
     "C: arazide işaretleme bilgisi yok · f: onay teatisi 21 Tem 1897")
ekle("d1923-gt-bh", GT, BH, "1859-04-30", "C", cizgi("BLZ-GTM"),
     [{"ad": "Guatemala–Büyük Britanya Sınır Antlaşması", "madde": "md. 1, md. 6", "tarih": "1859-04-30", "tur": "antlaşma"},
      ibs(8, "Belize–Guatemala", "A joint commission met in 1861 and demarcated the southern sector.", "4")],
     {"deger": False, "kaynak": "IBS 8"},
     {"t": "1861", "not": "güney (Sarstún) kesimi 1861; düz hattın 29 piramidi sonradan kayboldu, 1929'da uçlar yeniden"},
     1.5, KES_NE,
     "Tek kayıt, en düşük sınıf: Sarstún nehri kesimi envanterde E, iki düz hat C (kesim noktası koordinatı elde yok) · "
     "Guatemala'nın antlaşmayı geçersiz sayma tezinin başlangıç yılı BULUNAMADI · f: İng. Honduras künyesine çekilir")
gs = cizgi("GTM-SLV")
yok("d1923-gt-sv", GT, SV, "1841-02-18", bbox(gs, 0.05),
    {"deger": True, "kaynak": "IBS 82", "not": "9 Nis 1938 antlaşması (onay 24 May 1938), işaretleme Eyl 1940"},
    [ibs(82, "El Salvador–Guatemala", "agreed to fix and establish definitely their common boundary", "3")],
    "FİİLİ: 1923'te belge yok; 1938 md. I(a) 'mevcut sınır'dan söz eder ama 1923 koordinatı yok",
    hukuki="FİİLİ (D adayı), koordinat yok")
yok("d1923-gt-hn", GT, HN, "1838-11-05", bbox(cizgi("GTM-HND"), 0.05),
    {"deger": True, "kaynak": "IBS 157", "not": "23 Oca 1933 Özel Sınır Mahkemesi kararı; işaretleme 1933–36"},
    [ibs(157, "Guatemala–Honduras", "Unsuccessful attempts were made to resolve the controversies by treaties in 1845, 1895, and 1914.", "3")],
    "TARTIŞMALI (Honduras Motagua–Belize kıyısını istiyordu) · kutu bugünkü çizgi çevresi; tartışmalı alan daha geniş")
yok("d1923-hn-sv", HN, SV, "1841-02-18", bbox(cizgi("HND-SLV"), 0.05),
    {"deger": None, "kaynak": "—", "not": "ÖLÇÜLEMEDİ — kaynak okunmadı"},
    [{"ad": "bulunamadı — IBS yok, bu turda akademik kaynak okunmadı", "tur": "bulunamadı"}],
    "Envanter d1923-hn-sv-1: ölçülemedi")
hn = cizgi("HND-NIC")
ekle("d1923-hn-ni-bati", HN, NI, "1896-12-24", "D", parcala(hn, lambda c: c[0] <= TEOTECACINTE[0]),
     [{"ad": "Tegucigalpa Sınır Antlaşması (onay 24 Ara 1896)", "tarih": "1894-10-07", "tur": "antlaşma"},
      ibs(36, "Honduras–Nicaragua", "From 1900 to 1904, the commission demarcated the western portion of the boundary", "5")],
     {"deger": False, "kaynak": "IBS 36", "not": "1961 sonrası 'redemarcated' — yeni hat yalnız Teotecacinte doğusunda"},
     {"t": "1900-1904", "not": "karma komisyon; IBS bir yerde 1900-01 diyor"},
     1.5, KES_NE + " · doğu ucu GeoNames 'Portillo de Teotecacinte' boylamında kesildi",
     "Fonseca Körfezi içindeki hat bu kayıtta yok (kara çizgisi)")
yok("d1923-hn-ni-DEGISTI-dogu", HN, NI, "1906-12-23",
    bbox(parcala(hn, lambda c: c[0] > TEOTECACINTE[0]), 0.05),
    {"deger": True, "kaynak": "IBS 36", "not": "UAD 18 Kas 1960 · Sánchez Gavito kararı 5 Ağu 1961 (Teotecacinte düz hatları, Coco ağzı)"},
    [{"ad": "İspanya Kralı hakem kararı", "tarih": "1906-12-23", "tur": "hakem kararı"},
     ibs(36, "Honduras–Nicaragua", "Nicaragua later maintained that the award was rejected in toto and the dispute continued.", "5")],
    "TARTIŞMALI: Nikaragua 1906 kararını reddetti")
ekle("d1923-ni-cr", NI, CR, "1858-04-15", "D", cizgi("CRI-NIC"),
     [{"ad": "Cañas–Jerez Antlaşması", "madde": "md. 2", "tarih": "1858-04-15", "tur": "antlaşma"},
      {"ad": "Cleveland hakem kararı", "tarih": "1888-03-22", "tur": "hakem kararı", "not": "gün genel bilgi; IBS 'Mart 1888'"},
      {"ad": "Alexander kararları (1–5)", "tarih": "1897-09-30", "tur": "hakem kararı", "not": "5. karar 10 Mar 1900"},
      ibs(158, "Costa Rica–Nicaragua", "an arbitral award upholding the treaty of 1858", "4")],
     {"deger": False, "kaynak": "IBS 158", "not": "IBS (1976) aynı hattı anlatır. ⚠️ UAD 2015/2018 kararları Karayip ucunu (Isla Portillos) ele aldı — NE bu kararlardan ÖNCE; ölçülmedi"},
     {"t": "1897-1900", "not": "2–20 numaralı dikmeler; dikim yılı BULUNAMADI"},
     1.5, KES_NE, "Cleveland kararı günü kaynakta yok ⇒ 'Mart 1888'")
yok("d1923-cr-pa", CR, PA, "1903-11-03", bbox(cizgi("CRI-PAN"), 0.05),
    {"deger": True, "kaynak": "IBS 156", "not": "San José Antlaşması 1 May 1941; işaretleme 1944"},
    [{"ad": "Loubet hakem kararı", "tarih": "1900-09-11", "tur": "hakem kararı"},
     {"ad": "White hakem kararı", "tarih": "1914-09-12", "tur": "hakem kararı"},
     ibs(156, "Costa Rica–Panama", "The award given on September 12, 1914, proved unacceptable to Panama.", "3")],
    "TARTIŞMALI")
yok("d1923-pa-co", PA, CO, "1903-11-03", bbox(cizgi("COL-PAN"), 0.05),
    {"deger": None, "kaynak": "IBS 62", "not": "1924 antlaşması aynı 1855 kanununa dayanır; 1936–38 işaretleme; kayma ölçülmedi"},
    [{"ad": "Thomson–Urrutia Antlaşması (onay 1 Mar 1922)", "tarih": "1914-04-06", "tur": "antlaşma"},
     {"ad": "Kolombiya Kanunu (Panamá eyaleti sınırı)", "madde": "md. 7", "tarih": "1855-06-09", "tur": "kanun"},
     ibs(62, "Colombia–Panama", "Ratifications exchanged at Bogota, March 1, 1922", "7")],
    "1903–1922 Kolombiya Panama'yı tanımıyordu; 1 Mar 1922'den sonra hat KABA (C) ve işaretsiz; Panama antlaşmanın tarafı değil",
    hukuki="1922-03-01'den sonra hukuken C (kaba)")

# ======================= KARAYİPLER =======================
yok("d1923-ht-do", HT, DO, "1844-02-27", bbox(cizgi("DOM-HTI"), 0.05),
    {"deger": True, "kaynak": "IBS 5", "not": "21 Oca 1929 antlaşması · 27 Şub 1935 · 9 Mar 1936 protokolü"},
    [ibs(5, "Dominican Republic–Haiti", "not until 1929 were there any effective documents drawn up", "4"),
     {"ad": "FRUS 1929 v.I d783", "tur": "resmî belge", "url": "https://history.state.gov/historicaldocuments/frus1929v01/d783"}],
    "TARTIŞMALI: etkili belge yok (1777 hattı belirsiz)")
ekle("d1923-us-cu-guantanamo", US, CU, "1903-07-02", "C", cizgi("CUB-USG"),
     [{"ad": "ABD–Küba kömür/deniz üssü anlaşması", "madde": "md. I", "tarih": "1903-02-23", "tur": "anlaşma",
       "url": "https://avalon.law.yale.edu/20th_century/dip_cuba002.asp",
       "alinti": "a line running north (true) a distance of 4.25 nautical miles"},
      {"ad": "Kira sözleşmesi", "madde": "md. II", "tarih": "1903-07-02", "tur": "sözleşme",
       "url": "https://avalon.law.yale.edu/20th_century/dip_cuba003.asp"},
      {"ad": "ABD–Küba Antlaşması", "madde": "md. III", "tarih": "1934-05-29", "tur": "antlaşma",
       "url": "https://avalon.law.yale.edu/20th_century/dip_cuba001.asp"}],
     {"deger": False, "kaynak": "1934 Antlaşması md. III", "not": "1934 limitleri o günkü hâliyle dondurdu; 1912 genişleme anlaşması onaylanmadı (yalnız arama özeti)"},
     {"t": None, "not": "kira 'permanent fences' ister; yapım yılı BULUNAMADI"},
     1.0, KES_NE, "Limitler kerteriz + mesafe ⇒ koordinata çevrilebilir, E'ye yükseltilebilir · Bahía Honda 1923 durumu BULUNAMADI",
     sinif_not="C: metin koordinat değil kerteriz/mesafe veriyor; işaretleme yılı bilinmiyor")
yok("d1923-fr-nl-saint-martin", FR, NL, "1792-09-22", bbox(cizgi("MAF-SXM"), 0.03),
    {"deger": True, "kaynak": "NL WGK015054", "not": "26 May 2023 sınır antlaşması (Ek A koordinatlı)"},
    [{"ad": "Concordia Antlaşması", "tarih": "1648-03-23", "tur": "antlaşma"},
     {"ad": "Hollanda onay yasası gerekçesi (WGK015054)", "tur": "resmî belge",
      "url": "https://wetgevingskalender.overheid.nl/Regeling/WGK015054/Download/699f92de-b96d-4adc-b70f-82fa8c0d5382_1.pdf",
      "sayfa": "1", "alinti": "werd echter geen duidelijke afbakening van de grens vastgelegd"}],
    "Hat tanımsız (1648) · f Fransa künyesine çekildi")

# ======================= GÜNEY AMERİKA — KUZEY =======================
PARIS1899 = {"ad": "Paris Hakem Kararı", "tarih": "1899-10-03", "tur": "hakem kararı"}
ekle("d1923-gy-ve", GY, VE, "1899-10-03", "C", cizgi("GUY-VEN"),
     [{"ad": "Washington Tahkim Antlaşması", "madde": "md. 13", "tarih": "1897-02-02", "tur": "antlaşma"}, PARIS1899,
      ibs(21, "Guyana–Venezuela", "demarcation by clearing and monumenting took place only along the short, 21-mile", "5")],
     {"deger": False, "kaynak": "IBS 21", "not": "Venezuela 1962'de kararı tartışmaya açtı — hat değişmedi; Roraima noktası 1932"},
     {"t": "1900-1905", "not": "karma komisyon; yalnız Punta Playa–Barima (21 mil) açma+dikme, gerisi 25 beton gözlem direği"},
     1.5, KES_NE, "Tek kayıt, en düşük sınıf: Punta Playa–Barima kesimi envanterde E (kesim noktası koordinatı elde yok)")
ekle("d1923-ve-br", VE, BR, "1859-01-01", "C", cizgi("BRA-VEN"),
     [{"ad": "Sınır ve Nehir Ulaşımı Antlaşması (Caracas)", "madde": "md. 2", "tarih": "1859-01-01", "tur": "antlaşma",
       "not": "IBS yalnız YIL veriyor (1859); gün BULUNAMADI"},
      ibs(175, "Brazil–Venezuela", "the boundary definition was not disputed in the period after the 1859 treaty", "6")],
     {"deger": True, "kaynak": "IBS 175",
      "not": "KÜÇÜK: 1905/1912/1928 protokolleri 'esaslı değişiklik yapmadı'; 1928 sonrası koordinat düzeltmeleri, batı ucu Kolombiya üçlü noktasına uzatıldı"},
     {"t": "1880 · 1912-1915", "not": "yalnız Cucuy–Hua kesimi; Parima–Pacaraima 1970'lerde"},
     2.0, KES_NE, "Tek kayıt, en düşük sınıf: Cucuy–Hua kesimi envanterde E · f: Brezilya Cumhuriyeti künyesi")
yok("d1923-co-ve", CO, VE, "1891-03-16", bbox(cizgi("COL-VEN"), 0.05),
    {"deger": True, "kaynak": "RIAA I 223–298 · Ireland 1938", "not": "İsviçreli uzman kararları 30 Tem 1924; 1941 antlaşması (yalnız arama özeti)"},
    [{"ad": "İspanya Kraliçesi hakem kararı", "tarih": "1891-03-16", "tur": "hakem kararı"},
     {"ad": "İsviçre Federal Konseyi kararı", "tarih": "1922-03-24", "tur": "hakem kararı",
      "url": "https://legal.un.org/riaa/cases/vol_I/223-298.pdf"},
     ire("217–219", "They returned to Switzerland at the end of 1923")],
    "PARÇALI: tartışmasız kesimler (Goajira, Táchira) E; dört kesim uygulama bekliyordu. Kesimlerin koordinatı elde yok ⇒ bütün çift YOK",
    hukuki="parçalı E / tartışmalı")
bc = cizgi("BRA-COL")
yok("d1923-co-br-kuzey", CO, BR, "1907-04-24", bbox(parcala(bc, lambda c: c[1] > APAPORIS[1]), 0.05),
    {"deger": True, "kaynak": "IBS 174", "not": "1928 antlaşması yetkisiyle 1930–36 düzeltmeleri (Taraira meridyeni, San José adası)"},
    [{"ad": "Sınır, Transit ve İç Ulaşım Antlaşması", "madde": "md. I", "tarih": "1907-04-24", "tur": "antlaşma"},
     ibs(174, "Brazil–Colombia", "The commission, however, never met.", "8")],
    "hukuken C (işaretsiz)", hukuki="hukuken C")
ekle("d1923-br-pe-tabatinga-apaporis", BR, PE, "1852-10-18", "D", parcala(bc, lambda c: c[1] <= APAPORIS[1]),
     [{"ad": "Brezilya–Peru Sözleşmesi (onay 18 Eki 1852)", "tarih": "1851-10-23", "tur": "sözleşme"},
      ire("125–130", "the work of demarcation"),
      ibs(174, "Brazil–Colombia", "Brazil considered the agreement prejudicial to its interests and protested", "6")],
     {"deger": True, "kaynak": "IBS 174 · LNTS 74",
      "not": "YALNIZ TARAF değişti: Salomón–Lozano (yürürlük 19 Mar 1928) ve 1928 Brezilya–Kolombiya antlaşmasıyla hat Brezilya–Kolombiya sınırı oldu; "
             "IBS 174: hat 1851 hattıyla AYNI (Apaporis ağzı–Tabatinga düz çizgisi)"},
     {"t": "1866-1874", "not": "karma komisyon 28 Tem 1866 – 14 Mar 1874"},
     1.5, KES_NE + " · kuzey ucu GeoNames 'Río Apaporis' ağız noktasının enleminde kesildi",
     "1923'te Brezilya–Peru hattı; Kolombiya haklarını saklı tutuyordu · f Brezilya Cumhuriyeti künyesine çekilir",
     sol_iso=dict(ISO, **{PE: ["COL"]}))
yok("d1923-co-pe", CO, PE, "1831-01-01", bbox(cizgi("COL-PER"), 0.10),
    {"deger": True, "kaynak": "LNTS 74 · Ireland 1938", "not": "Salomón–Lozano yürürlük 19 Mar 1928; Leticia teslimi 17 Ağu 1930"},
    [{"ad": "Bogotá statüko sözleşmesi", "tarih": "1911-07-19", "tur": "sözleşme"},
     {"ad": "Salomón–Lozano Antlaşması (1923'te YÜRÜRLÜKTE DEĞİL)", "tarih": "1922-03-24", "tur": "antlaşma",
      "url": "https://treaties.un.org/doc/Publication/UNTS/LON/Volume%2074/v74.pdf", "sayfa": "9–17"},
     ire("194–198", "The exchange of ratifications took place at Bogota, March 19, 1928.")],
    "FİİLİ: 1911 statükosu (Kolombiya La Pedrera'da, Peru Putumayo'da); çizimi BULUNAMADI · tartışmalı alan kutudan geniş",
    hukuki="FİİLİ (D adayı), koordinat yok")
ekle("d1923-co-ec", CO, EC, "1917-01-26", "D", cizgi("COL-ECU"),
     [{"ad": "Muñoz Vernaza–Suárez Antlaşması (onay 26 Oca 1917)", "tarih": "1916-07-15", "tur": "antlaşma"},
      ire("183–185", "met at Quito, July 16, 1917, and finished its work in Cartagena, July 9, 1919"),
      {"ad": "Cancillería de Colombia — Frontera terrestre Colombia–Ecuador", "tur": "resmî",
       "url": "https://www.cancilleria.gov.co/politica-exterior/asuntos-bilaterales/frontera-terrestre-colombia-ecuador"}],
     {"deger": False, "kaynak": "Cancillería de Colombia",
      "not": "bugünkü çift çizgisi 1916 hattının batı parçası; doğu parçası (Güepí ötesi) Salomón–Lozano ile Peru'ya geçti — ayrı YOK kaydı"},
     {"t": "1917-1919", "not": "karma komisyon 16 Tem 1917 – 9 Tem 1919"},
     1.5, KES_NE, "Doğu uçtaki Putumayo kesiminin 1923'te işaretli olup olmadığı BULUNAMADI")
yok("d1923-co-ec-DEGISTI-dogu", CO, EC, "1917-01-26", (-75.3, -3.5, -71.8, -0.1),
    {"deger": True, "kaynak": "LNTS 74", "not": "1928 sonrası Peru toprağı; Kolombiya–Ekvador sınırı Güepí'de biter"},
    [{"ad": "Muñoz Vernaza–Suárez Antlaşması", "tarih": "1916-07-15", "tur": "antlaşma"}, ire("183–185")],
    "Putumayo–Napo–Ambiyacu: hukuken C, fiilen Peru iddiasında · kutu TAHMİNİ", hukuki="hukuken C")
yok("d1923-ec-pe", EC, PE, "1830-05-13", bbox(cizgi("ECU-PER"), 0.10),
    {"deger": True, "kaynak": "IBS 172", "not": "Rio Protokolü 29 Oca 1942"},
    [ibs(172, "Ecuador–Peru", "the King of Spain withdrew as arbiter without issuing an award", "6")],
    "TARTIŞMALI: 1923'te hat yok · tartışmalı alan kutudan çok geniş")
ekle("d1923-br-gy", BR, GY, "1904-06-06", "C", cizgi("BRA-GUY"),
     [{"ad": "Tahkim Antlaşması (onay 28 Oca 1902)", "tarih": "1901-11-06", "tur": "antlaşma"},
      {"ad": "İtalya Kralı hakem kararı", "tarih": "1904-06-06", "tur": "hakem kararı",
       "url": "https://legal.un.org/riaa/cases/vol_XI/11-23.pdf"},
      ire("152–157", "the demarcation has since been carried out")],
     {"deger": True, "kaynak": "Ireland 1938 · CPDOC",
      "not": "KÜÇÜK: 22 Nis 1926 Genel Sınır Antlaşması (onay 1929) Tacutu kaynağını düzeltti, Roraima–Yakontipu kesimini ekledi"},
     {"t": None, "not": "1923'te işaretleme yok (talimat protokolü 1930)"}, 2.0, KES_NE)
ekle("d1923-br-sr", BR, SR, "1908-09-15", "C", cizgi("BRA-SUR"),
     [{"ad": "Brezilya–Hollanda Antlaşması (onay 15 Eyl 1908)", "tarih": "1906-05-05", "tur": "antlaşma"},
      ire("158–159", "the demarcation is understood to be nearly or quite completed")],
     {"deger": False, "kaynak": "Ireland 1938", "not": "iki ucu komşu anlaşmazlıklara bağlı"},
     {"t": None, "not": "1923'te işaretleme yok (talimat protokolü 1931)"}, 2.0, KES_NE)
yok("d1923-br-gf", BR, GF, "1900-12-01", bbox(cizgi("BRA-FRA"), 0.05),
    {"deger": None, "kaynak": "AFDI 1956 · Ireland 1938",
     "not": "1956'ya kadar değişiklik yok; sonrası ölçülmedi. İşaretlemede ÇELİŞKİ: AFDI 'yapılmadı' ↔ Ireland 'kısmen'"},
    [{"ad": "İsviçre Federal Konseyi kararı", "tarih": "1900-12-01", "tur": "hakem kararı",
      "url": "https://legal.un.org/riaa/cases/vol_XXVIII/349-378.pdf"},
     {"ad": "AFDI 2 (1956) s. 255–256", "tur": "akademik", "url": "https://www.persee.fr/doc/afdi_0066-3085_1956_num_2_1_1234",
      "alinti": "n'eurent pas lieu ... et n'ont toujours pas eu lieu"}],
    "hukuken C (Oyapock talvegi + Tumuc-Humac su ayrımı)", hukuki="hukuken C")
yok("d1923-gy-sr", GY, SR, "1831-01-01", bbox(cizgi("GUY-SUR"), 0.05),
    {"deger": None, "kaynak": "Ireland 1938", "not": "1938'de hâlâ açık"},
    [ire("245", "There would appear to be open still between Great Britain and the Netherlands")],
    "PARÇALI: Corentyne alt kesimi FİİLİ (1831'den beri zımni mutabakat, antlaşma yok); üst kesim (New River) TARTIŞMALI")
yok("d1923-sr-gf", SR, GF, "1817-01-01", bbox(cizgi("FRA-SUR"), 0.05),
    {"deger": None, "kaynak": "Ireland 1938", "not": "Itany/Marouini anlaşmazlığı 1938'de açık; bugünkü durum ölçülmedi"},
    [{"ad": "Çar III. Aleksandr hakem kararı", "tarih": "1891-05-25", "tur": "hakem kararı",
      "url": "https://legal.un.org/riaa/cases/vol_XXVIII/249-254.pdf",
      "alinti": "Nous déclarons que l'Awa doit être considéré comme fleuve limitrophe"},
     {"ad": "Paris Sözleşmesi (onay 16 Eyl 1916)", "tarih": "1915-09-30", "tur": "sözleşme"}, ire("243–245")],
    "PARÇALI: Maroni+Awa C · Stoelman–Portal adaları E (1915) · Awa yukarısı TARTIŞMALI · Çar kararı 13/25 May 1891 (Jülyen/Gregoryen)")

# ======================= GÜNEY AMERİKA — MERKEZ / AND =======================
ekle("d1923-br-pe", BR, PE, "1910-04-30", "C", cizgi("BRA-PER"),
     [{"ad": "Brezilya–Peru Sözleşmesi (onay 18 Eki 1852)", "tarih": "1851-10-23", "tur": "sözleşme"},
      {"ad": "Velarde–Rio Branco Antlaşması (onay 30 Nis 1910)", "tarih": "1909-09-08", "tur": "antlaşma"},
      ire("125–130"),
      {"ad": "Perú Cancillería, karma komisyon kapanış tutanağı B-3285", "tur": "resmî",
       "url": "https://apps.rree.gob.pe/portal/webtratados.nsf/xsp/.ibmmodres/domino/OpenAttachment/VICUS/MREPERU!!portal/tratados.nsf/9E07F310E455C6E10525720D006003B2/$FILE/B-3285.pdf",
       "sayfa": "3, 7", "alinti": "los trabajos realizados en los años 1925, 1926 y 1927"}],
     {"deger": False, "kaynak": "Ireland 1938 · Perú B-3285", "not": "hat yeri değişmedi; 1923 sonrası yalnız işaretleme tamamlandı"},
     {"t": "1874 · 1913-1927", "not": "Javari 1874 (1897 düzeltme); 1909 hattı 1913'ten sonra, bir kesim 1925–27"},
     1.5, KES_NE, "Tek kayıt, en düşük sınıf: Javari kesimi envanterde E (kesim noktası = Javari kaynağı, koordinat elde yok)")
yok("d1923-bo-br", BO, BR, "1904-03-10", bbox(cizgi("BOL-BRA"), 0.05),
    {"deger": True, "kaynak": "Ireland 1938 · CPDOC", "not": "3 Eyl 1925 protokolleri; Natal Antlaşması 25 Ara 1928 (onay 27 Haz 1929)"},
    [{"ad": "Petrópolis Antlaşması (onay 10 Mar 1904)", "tarih": "1903-11-17", "tur": "antlaşma"},
     ire("40–53", "according to the maps drawn up in 1914 by the Brazil-Bolivia mixed commission")],
    "PARÇALI: 1914 haritalı kesimler E; Rapirran–Bahia · Cuatro Hermanos–Verde · Madeira adaları C ve 1928'de değişti. Kesim koordinatları elde yok ⇒ bütün çift YOK",
    hukuki="parçalı E / C")
bp = cizgi("BOL-PER")
ekle("d1923-bo-pe", BO, PE, "1909-11-09", "C", parcala(bp, lambda c: c[1] >= TOLACOLLO[1]),
     [{"ad": "Tahkim antlaşmaları", "tarih": "1902-12-30", "tur": "antlaşma"},
      {"ad": "Arjantin Devlet Başkanı hakem kararı", "tarih": "1909-07-09", "tur": "hakem kararı"},
      {"ad": "Polo–Bustamante protokolleri (onay 9 Kas 1909)", "tarih": "1909-09-17", "tur": "protokol"},
      ire("95–109", "joint records of operations ran from June 2, 1911, to December 15, 1913")],
     {"deger": False, "kaynak": "Ireland 1938", "not": "yer değişmedi; güney kesim 1925 protokolüyle işaretlendi · 1932 protokolü DOĞRULANMADI"},
     {"t": "1911-1913", "not": "Amazon kesimi; Manuripi–Acre 1917 yeniden; Suches–Titicaca 1925 sonrası"},
     1.5, KES_NE + " · güney ucu GeoNames 'Tolacollo' (1904 hattının 96. noktası) enleminde kesildi",
     "Tek kayıt, en düşük sınıf: Amazon kesimi envanterde E")
yok("d1923-bo-cl-tacna", BO, CL, "1905-03-10", bbox(parcala(bp, lambda c: c[1] < TOLACOLLO[1]), 0.05),
    {"deger": True, "kaynak": "IBS 65 · IBS 67", "not": "Lima 1929 sonrası bu kesim Bolivya–PERU sınırı (Tacna Peru'ya döndü)"},
    [{"ad": "Barış, Dostluk ve Ticaret Antlaşması (onay 10 Mar 1905)", "tarih": "1904-10-20", "tur": "antlaşma"},
     ibs(65, "Chile–Peru", "Chile remained in possession of Tacna and Arica despite the 10-year stipulation", "4")],
    "Visviri–Santuario–Chipe: 1904 hattı, karşı taraf Şili idaresindeki Tacna · hukuken C · geometrinin 1929 sonrası aynı kaldığı ÖLÇÜLMEDİ",
    hukuki="hukuken C")
B_OLCA = box(-68.55, -21.15, -68.20, -20.88)
B_IRPA = box(-68.80, -19.90, -68.45, -19.55)
BC = cizgi("BOL-CHL")
ekle("d1923-bo-cl", BO, CL, "1905-03-10", "C",
     parcala(BC, lambda c: not (B_OLCA.contains(Point(c)) or B_IRPA.contains(Point(c)))),
     [{"ad": "Barış, Dostluk ve Ticaret Antlaşması (onay 10 Mar 1905)", "tarih": "1904-10-20", "tur": "antlaşma"},
      ibs(67, "Bolivia–Chile", "ratifications of the protocol were not exchanged until 31 years later", "4")],
     {"deger": False, "kaynak": "IBS 67", "not": "değişen iki kesim (1907 protokolü, yürürlük 1938) kutu olarak DIŞARIDA"},
     {"t": None, "not": "direkler 'shortly thereafter' — yıl BULUNAMADI"},
     1.5, KES_NE + " · iki kutu GeoNames (Olca/Paroma/Chipapa · Patalani/Irpa/Sillajhuay) çevresinde TAHMİNİ")
yok("d1923-bo-cl-DEGISTI-chipapa-olca", BO, CL, "1905-03-10", B_OLCA.bounds,
    {"deger": True, "kaynak": "IBS 67", "not": "1938: Cerro Paroma üzerinden düz hat, Collaguasi demiryolu Şili'de"},
    [ibs(67, "Bolivia–Chile", None, "4")], "hukuken C · kutu TAHMİNİ", hukuki="hukuken C")
yok("d1923-bo-cl-DEGISTI-patalani-panantalla", BO, CL, "1905-03-10", B_IRPA.bounds,
    {"deger": True, "kaynak": "IBS 67", "not": "1938: Irpa Pueblo · Sillajhuay · Armasaya üzerinden"},
    [ibs(67, "Bolivia–Chile", None, "4")],
    "hukuken C · kutu TAHMİNİ; Panantalla GeoNames'te BULUNAMADI, kuzey sınır genişletildi", hukuki="hukuken C")
yok("d1923-cl-pe-tacna-arica", CL, PE, "1884-03-28", (-71.0, -18.5, -69.4, -17.0),
    {"deger": True, "kaynak": "IBS 65", "not": "Tarata 1 Eyl 1925 Peru'ya; Lima Antlaşması 3 Haz 1929 md. 2; işaretleme 1930"},
    [{"ad": "Ancón Antlaşması (onay 28 Mar 1884)", "tarih": "1883-10-20", "tur": "antlaşma"},
     {"ad": "Washington Protokolü", "tarih": "1922-07-20", "tur": "protokol"},
     ibs(65, "Chile–Peru", "Chile remained in possession of Tacna and Arica despite the 10-year stipulation", "4")],
    "FİİLİ: Şili idaresinin kuzey sınırı Sama nehri (Şili yorumu: Chaspaya kolu, Tarata dahil); koordinat yok · kutu TAHMİNİ",
    hukuki="FİİLİ (D adayı), koordinat yok")
yok("d1923-bo-py-chaco", BO, PY, "1825-08-06", bbox(cizgi("BOL-PRY"), 0.10),
    {"deger": True, "kaynak": "IBS 165", "not": "Buenos Aires Antlaşması 21 Tem 1938 · hakem kararı 10 Eki 1938"},
    [ibs(165, "Bolivia–Paraguay", "Finally prorogued indefinitely on June 17, 1918.", "8")],
    "TARTIŞMALI: Chaco Boreal · 1923 kale hattı BULUNAMADI · tartışmalı alan kutudan çok geniş")
bpy = cizgi("BRA-PRY")
ekle("d1923-br-py", BR, PY, "1872-03-26", "D", parcala(bpy, lambda c: c[1] <= APA[1] + 0.005),
     [{"ad": "Loizaga–Cotegipe Antlaşması (onay 26 Mar 1872)", "tarih": "1872-01-09", "tur": "antlaşma"},
      ire("121–123", "the work of demarcation was finished November 14, 1874")],
     {"deger": False, "kaynak": "Ireland 1938", "not": "1927 antlaşması yalnız nehir kesimini ekledi · Itaipu (1973) etkisi ÖLÇÜLMEDİ"},
     {"t": "1874-11-14", "not": "karma komisyon"},
     1.5, KES_NE + " · kuzey ucu GeoNames 'Rio Apa' ağız noktasının enleminde kesildi",
     "f Brezilya Cumhuriyeti künyesine çekilir")
yok("d1923-br-py-DEGISTI-paraguay-nehri", BR, PY, "1872-03-26", bbox(parcala(bpy, lambda c: c[1] > APA[1] + 0.005), 0.05),
    {"deger": True, "kaynak": "Ireland 1938", "not": "21 May 1927 tamamlayıcı antlaşma (onay 25 Kas 1929)"},
    [ire("121–123")], "Apa ağzı–Bahía Negra: antlaşmayla TANIMSIZ, batı kıyıyı Bolivya da istiyordu")

# ======================= GÜNEY KONİSİ =======================
ap = cizgi("ARG-PRY")
ekle("d1923-ar-py-nehirler", AR, PY, "1876-09-13", "D", parcala(ap, lambda c: c[1] <= PILCO[1]),
     [{"ad": "Arjantin–Paraguay Sınır Antlaşması (onay 13 Eyl 1876)", "madde": "md. 1–3", "tarih": "1876-02-03", "tur": "antlaşma"},
      ibs(166, "Argentina–Paraguay", "by the mid-channel of the main stream of the Parana", "5")],
     {"deger": False, "kaynak": "IBS 166", "not": "IBS: 1876 antlaşması 'affords the present delimitation' · Yacyretá barajı etkisi ÖLÇÜLMEDİ"},
     {"t": None, "not": "nehir hattı antlaşmayla tanımlı; işaretleme metinde yok"},
     1.5, KES_NE + " · Pilcomayo ayrımı GeoNames 'Río Pilcomayo' ağız noktasının enleminde")
yok("d1923-ar-py-DEGISTI-pilcomayo", AR, PY, "1876-09-13", bbox(parcala(ap, lambda c: c[1] > PILCO[1]), 0.05),
    {"deger": True, "kaynak": "IBS 166", "not": "5 Tem 1939 tamamlayıcı antlaşma; bataklık kesimi 1 Haz 1945"},
    [{"ad": "Hayes hakem kararı", "tarih": "1878-11-12", "tur": "hakem kararı"},
     ibs(166, "Argentina–Paraguay", "no further action was taken on the delimitation of the sector until 1939", "4")],
    "Pilcomayo: hukuken C (ağız–Salto Palmar, Horqueta–Esmeralda); Salto Palmar–Horqueta bataklığı TANIMSIZ",
    hukuki="hukuken C / tanımsız")
yok("d1923-ar-bo", AR, BO, "1893-03-10", bbox(cizgi("ARG-BOL"), 0.05),
    {"deger": True, "kaynak": "IBS 162", "not": "9 Tem 1925 antlaşması (onay 11 Eki 1938); Pilcomayo 1941 protokolü"},
    [{"ad": "Arjantin–Bolivya Antlaşması + 1891 değişikliği (onay 10 Mar 1893)", "madde": "md. I", "tarih": "1889-05-10", "tur": "antlaşma"},
     ibs(162, "Argentina–Bolivia", "settle the questions of interpretation which had arisen in the application", "5")],
    "PARÇALI: dağ, nehir ve 22. paralel kesimleri hukuken C; Pilcomayo kesimi tanımsız", hukuki="hukuken C")
yok("d1923-ar-cl", AR, CL, "1881-01-01", bbox(cizgi("ARG-CHL"), 0.05),
    {"deger": None, "kaynak": "IBS 101", "not": "IBS 101 yalnız Palena'yı (1966 kararı) anlatır; öteki kesimlerin bugünkü durumu ÖLÇÜLMEDİ"},
    [{"ad": "İngiliz hakem kararı", "tarih": "1902-11-20", "tur": "hakem kararı"},
     ibs(101, "Argentina–Chile", "Demarcation pillars were established along the frontier; spaced, however, rather far apart.", "4")],
    "hukuken C (seyrek direkler) · Palena–California 1966'da değişti · Laguna del Desierto (1994) ve buzul sahası kaynaksız · 1881 antlaşma günü BULUNAMADI",
    hukuki="hukuken C")
yok("d1923-ar-uy", AR, UY, "1828-08-27", bbox(cizgi("ARG-URY"), 0.05),
    {"deger": True, "kaynak": "IBS 68", "not": "7 Nis 1961 antlaşması (yürürlük 19 Oca 1966) · 19 Kas 1973 Río de la Plata"},
    [ibs(68, "Argentina–Uruguay", "no treaties were made in the remainder of the 19th century", "3")],
    "Uruguay nehri: yürürlükte antlaşma YOK (1916 ada antlaşması onaylanmadı)")
ab = cizgi("ARG-BRA")
bu = cizgi("BRA-URY")
uclar = [Point(c) for g in ab for c in (g.coords[0], g.coords[-1])]
bu_birlesik = linemerge(bu) if len(bu) > 1 else bu[0]
TP = min(uclar, key=lambda p: p.distance(bu_birlesik))
B_BRAS = box(TP.x - 0.08, TP.y - 0.08, TP.x + 0.08, TP.y + 0.08)
ekle("d1923-ar-br", AR, BR, "1900-05-26", "D", parcala(ab, lambda c: not B_BRAS.contains(Point(c))),
     [{"ad": "Cleveland hakem kararı", "tarih": "1895-02-05", "tur": "hakem kararı"},
      {"ad": "Arjantin–Brezilya Antlaşması (onay 26 May 1900)", "madde": "md. I–IV", "tarih": "1898-10-06", "tur": "antlaşma"},
      ibs(168, "Argentina–Brazil", "the demarcation carried out throughout the whole extent of the frontier is accepted", "7")],
     {"deger": False, "kaynak": "IBS 168", "not": "Brasilera kesimi hariç (ayrı kayıt)"},
     {"t": "1900-11-03/1904-10-06", "not": "karma komisyon"},
     1.5, KES_NE + " · Brasilera kutusu NE üçlü noktası (ARG-BRA-URY) çevresinde ±0,08° TAHMİNİ")
yok("d1923-ar-br-DEGISTI-brasilera", AR, BR, "1900-05-26", B_BRAS.bounds,
    {"deger": True, "kaynak": "IBS 168", "not": "27 Ara 1927 sözleşmesi (onay 9 Tem 1941): hat ada ile sağ kıyı arasına"},
    [ibs(168, "Argentina–Brazil", "The convention was not ratified by Argentina.", "5")],
    "1923'te hukuken E (1898 md. I talveg, 1901 işaretleri) ama bugünkü çizgi farklı", hukuki="hukuken E — çizim yapılmadı")
B_INV = box(MASOLLER[0] - 0.15, MASOLLER[1] - 0.15, MASOLLER[0] + 0.15, MASOLLER[1] + 0.15)
ekle("d1923-br-uy", BR, UY, "1909-10-30", "C",
     parcala(bu, lambda c: not (B_INV.contains(Point(c)) or B_BRAS.contains(Point(c)))),
     [{"ad": "Brezilya–Uruguay Antlaşması", "tarih": "1851-10-12", "tur": "antlaşma"},
      {"ad": "Protokol", "tarih": "1853-04-22", "tur": "protokol"},
      {"ad": "Merín Gölü Antlaşması", "madde": "md. III–IV", "tarih": "1909-10-30", "tur": "antlaşma"},
      ibs(170, "Brazil–Uruguay", "Between 1920 and 1935, the land segments ... were demarcated by pillars.", "4")],
     {"deger": False, "kaynak": "IBS 170", "not": "Chuy ağzı 1972 notalarıyla sabitlendi (küçük) · 1913 São Miguel sözleşmesinin onayı BULUNAMADI"},
     {"t": "1853 · 1920-1935", "not": "kara kesimleri 29 Eki 1923'te YARIM"},
     1.5, KES_NE + " · Invernada kutusu GeoNames 'Masoller' ±0,15° TAHMİNİ",
     "Tek kayıt, en düşük sınıf: Chuy–San Miguel kesimi envanterde E · f: 1909 antlaşma imza günü (onay günü BULUNAMADI)")
yok("d1923-br-uy-invernada", BR, UY, "1889-11-15", B_INV.bounds,
    {"deger": None, "kaynak": "IBS 170", "not": "1979'da da çözülmemişti; bugünkü durum ölçülmedi"},
    [ibs(170, "Brazil–Uruguay", "a boundary commission in 1852 was unable to resolve the dispute", "6")],
    "TARTIŞMALI: Arroyo de la Invernada (Rincón de Artigas) · kutu TAHMİNİ")
yok("d1923-br-uy-brasilera", BR, UY, "1889-11-15", B_BRAS.bounds,
    {"deger": None, "kaynak": "IBS 170", "not": "1979'da hâlâ iki taraf iddiasında"},
    [ibs(170, "Brazil–Uruguay", "Brasilera Island is claimed by both Brazil and Uruguay", "7")],
    "hukuken C, belirsiz (1851: ağızdaki adalar Brezilya'nın); Uruguay itirazı 1940 tarihli", hukuki="hukuken C")

# ======================= G3 (1914-07-28 → 1878-07-13) =======================
# E/F/D başlangıcı pencerede olan kayıtlar: mx-gt 1882 · br-py 1889 · br-pe-tabatinga 1889 · hn-ni-bati 1896 · ar-br 1900.
# Öncülleri: mx-gt / hn-ni / ar-br öncesinde hukukî KESİN hat yok (tartışma ya da geçici/kaba hat) ⇒ YAZILMADI (A/B).
# br-py ve br-pe-tabatinga: hat 1889'da DEĞİŞMEDİ, yalnız taraf Brezilya İmparatorluğu → Cumhuriyet ⇒ öncül E kaydı.
BR_IMP = "brezilya-imparatorlugu"
LOC_BR = {"ad": "Library of Congress, Brazil–U.S. Relations: First Republic (1889–1930)", "tur": "resmî araştırma rehberi",
          "url": "https://guides.loc.gov/brazil-us-relations/first-republic",
          "alinti": "On November 15, 1889, a coup d'état overthrew the monarchy"}
ekle("g3-br-imp-py", BR_IMP, PY, "1872-03-26", "D", parcala(bpy, lambda c: c[1] <= APA[1] + 0.005),
     [{"ad": "Loizaga–Cotegipe Antlaşması (onay 26 Mar 1872)", "tarih": "1872-01-09", "tur": "antlaşma"},
      ire("121–123", "the work of demarcation was finished November 14, 1874"), LOC_BR],
     {"deger": False, "kaynak": "Ireland 1938", "not": "aynı hat 1889'dan sonra d1923-br-py"},
     {"t": "1874-11-14", "not": "karma komisyon (1872–1874 arası hat hukuken tanımlı, işaretsiz)"},
     1.5, KES_NE + " · kuzey ucu GeoNames 'Rio Apa' ağız noktasının enleminde",
     "GERİYE SARMA G3: taraf Brezilya İmparatorluğu; t = cumhuriyetin ilanı (LoC)", t="1889-11-15")
ekle("g3-br-imp-pe-tabatinga-apaporis", BR_IMP, PE, "1852-10-18", "D", parcala(bc, lambda c: c[1] <= APAPORIS[1]),
     [{"ad": "Brezilya–Peru Sözleşmesi (onay 18 Eki 1852)", "tarih": "1851-10-23", "tur": "sözleşme"},
      ire("125–130"), LOC_BR],
     {"deger": True, "kaynak": "IBS 174 · LNTS 74", "not": "yalnız TARAF değişti (1889 cumhuriyet · 1928 Kolombiya); hat aynı"},
     {"t": "1866-1874", "not": "karma komisyon 28 Tem 1866 – 14 Mar 1874"},
     1.5, KES_NE + " · kuzey ucu GeoNames 'Río Apaporis' ağız noktasının enleminde",
     "GERİYE SARMA G3: taraf Brezilya İmparatorluğu; t = cumhuriyetin ilanı (LoC) · Kolombiya haklarını saklı tutuyordu",
     t="1889-11-15", sol_iso=dict(ISO, **{PE: ["COL"]}))
ekle("g3-ve-br-imp", VE, BR_IMP, "1859-01-01", "C", cizgi("BRA-VEN"),
     [{"ad": "Sınır ve Nehir Ulaşımı Antlaşması (Caracas)", "madde": "md. 2", "tarih": "1859-01-01", "tur": "antlaşma",
       "not": "IBS yalnız YIL veriyor (1859); gün ve onay tarihi BULUNAMADI"},
      ibs(175, "Brazil–Venezuela", "the boundary definition was not disputed in the period after the 1859 treaty", "6"), LOC_BR],
     {"deger": True, "kaynak": "IBS 175", "not": "KÜÇÜK (bkz. d1923-ve-br)"},
     {"t": "1880", "not": "yalnız Cucuy–Hua kesimi ortak işaretleme"},
     2.0, KES_NE, "GERİYE SARMA G3: taraf Brezilya İmparatorluğu; f yalnız YIL (1859) · t = cumhuriyetin ilanı", t="1889-11-15")

# ======================= YAZ =======================
ids = [k["id"] for k in KAYIT]
if len(ids) != len(set(ids)):
    raise SystemExit("mükerrer id")
for k in KAYIT:
    for x in k["taraflar"]:
        if x not in ISO:
            raise SystemExit(f"ISO eşlemesi yok: {x}")
    if k["t"] < k["f"]:
        raise SystemExit(f"ters pencere: {k['id']} {k['f']} {k['t']}")

BAS = """// -*- coding: utf-8 -*-
// data/d_sinirlar_amerika.js — SINIR HATLARI · D5-AMERIKA (29 Ekim 1923; Kuzey · Orta · Güney Amerika · Karayipler)
// Şema denetim/SEMA-D-0916.md · sınıf oturumlar/GORUNUM-ABCD-0916.md (A–F) · envanter denetim/D5-AMERIKA-0916.md
// Üretici: denetim/ARAC-D5AM-URET-0916.py — 🔴 ELLE DÜZENLEME, yeniden üret.
// sinif: E (hukukî kesin; F kanıtı TANINMA tablosunu bekliyor) · C (kaba) · D (fiilî kesin — bu dosyada YOK) · YOK (kutu, hat yok)
// Taslak künyeler (devletler.js'te henüz yok): ingiliz-honduras · newfoundland-dominyonu · honduras-cumhuriyeti ·
//   el-salvador-cumhuriyeti · nikaragua-cumhuriyeti · kosta-rika-cumhuriyeti
// G1 (1918-11-11 → 1923-10-29): bu pencerede E/F/D hattı değişmedi ⇒ her kaydın f'i hattın gerçek başlangıcı.
// G2 (1914-07-28 → 1918-11-11): tek E başlangıcı d1923-co-ec (1917-01-26); öncesinde hukukî hat yok ⇒ öncül kayıt
//   YAZILMADI (A/B'ye düşer). Kronoloji: data/kronoloji_sinir_amerika.js
// G3 (1878-07-13 → 1914-07-28): 3 öncül kayıt (g3-*), taraf Brezilya İmparatorluğu (t 1889-11-15); mx-gt 1882 ·
//   hn-ni 1896 · ar-br 1900 öncesinde hukukî kesin hat yok ⇒ öncül yazılmadı.

window.D_SINIRLAR_AMERIKA = [
"""
with io.open("data/d_sinirlar_amerika.js", "w", encoding="utf-8", newline="\n") as f:
    f.write(BAS + ",\n".join(json.dumps(k, ensure_ascii=False, separators=(",", ":")) for k in KAYIT) + "\n];\n")

from collections import Counter
print("kayıt:", len(KAYIT), dict(Counter(k["sinif"] for k in KAYIT)))
print("hat km:", round(sum(k.get("uzunluk_km") or 0 for k in KAYIT)), "· sol_taraf bulunamayan:", len(SOLSUZ), SOLSUZ[:5])
print("degisti:", dict(Counter(str(k["degisti"]["deger"]) for k in KAYIT)))
print("TP brasilera:", round(TP.x, 4), round(TP.y, 4))
