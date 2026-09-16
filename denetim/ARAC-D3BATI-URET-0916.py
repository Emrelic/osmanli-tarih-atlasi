# -*- coding: utf-8 -*-
"""D3-AVRUPA-BATI — 29 Ekim 1923 Batı Avrupa kara sınırlarının hat kayıtlarını ÜRETİR.

Çıktı : data/d_sinirlar_avrupa_bati.js (window.D_SINIRLAR_AVRUPA_BATI)
Şema  : denetim/SEMA-D-0916.md + oturumlar/GORUNUM-ABCD-0916.md en üst bölüm (A–F, `sinif` alanı)
Envanter: denetim/D3-AVRUPA-BATI-0916.md (§ numaraları kayıtların `not` alanında)
Okur  : veri-kaynak/d_bugunku_sinirlar.geojson (D-GEOARAC) · veri-kaynak/ne_10m_admin_0_countries.geojson
        (yalnız sol_taraf testi). Çıpalar GeoNames'ten ELLE okundu (geonameid'leri aşağıda).

KURAL: bugünkü geometri bir VEKİLDİR; yalnız kaynak "değişmedi" diyorsa ya da değişiklikler
küçük ve kaynakta sayılmışsa (degisti:true + not) kullanılır. Değişikliği büyük ya da bilinmeyen
(degisti:null) parçalar D-YOK kutusu olur (sinif YOK). Künyesi olmayan tarafın (Saar, Lihtenştayn,
Fiume, San Marino, Monako, Andorra) parçası YAZILMAZ. Kıyas (koşu çıktısıyla sapma) YAPILMADI.
Sınıf eşlemesi (GORUNUM en üst): D→E (F kanıtı TANINMA-1923 gelene kadar yok) · fiili→D · C→C · D-YOK→YOK.
"""
import sys, io, os, json, math
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
           "Bugünkü çizgi 1923'ü GÖSTERMEZ ya da gösterdiği ölçülmedi.")
F_NOT = "F adayı: tanınma kanıtı (denetim/TANINMA-1923-0916.json) gelene kadar E yazıldı"
KUCUK = "bugünkü çizgi 1923 hattından yalnız kaynakta sayılan küçük düzeltmeler kadar sapar"


def km(a, b):
    r = math.pi / 180
    return 6371 * math.hypot((b[0] - a[0]) * r * math.cos((a[1] + b[1]) / 2 * r), (b[1] - a[1]) * r)


def uzunluk(ls):
    c = list(ls.coords)
    return sum(km(c[i], c[i + 1]) for i in range(len(c) - 1))


# ---- bugünkü çift çizgileri ----
GJ = json.load(open("veri-kaynak/d_bugunku_sinirlar.geojson", encoding="utf-8"))
CIFT = {}
for ft in GJ["features"]:
    CIFT.setdefault(ft["properties"]["cift"], []).append((ft["properties"]["parca_no"], shape(ft["geometry"])))


def cizgi(c, parca=None):
    if c not in CIFT:
        raise SystemExit(f"çift yok: {c}")
    out = []
    for no, g in sorted(CIFT[c], key=lambda x: x[0]):
        if parca is not None and no != parca:
            continue
        m = linemerge(g) if g.geom_type == "MultiLineString" else g
        out += list(getattr(m, "geoms", [m]))
    if not out:
        raise SystemExit(f"parça yok: {c} {parca}")
    return out


ADM = json.load(open("veri-kaynak/ne_10m_admin_0_countries.geojson", encoding="utf8"))
KODLAR = {"FRA", "DEU", "BEL", "NLD", "LUX", "CHE", "AUT", "ITA", "DNK", "NOR", "SWE", "FIN", "RUS",
          "GBR", "IRL", "ESP", "PRT", "MAR", "SAU"}
POLY = {}
for f in ADM["features"]:
    k = f["properties"]["ADM0_A3"]
    if k in KODLAR:
        POLY[k] = shape(f["geometry"]).buffer(0)
FR, DE, BE, NL, LU, CH, AT = "fransa-cumhuriyet", "almanya", "belcika", "hollanda", "luksemburg", "isvicre", "avusturya-cumhuriyet"
IT, YU, DK, NO, SE, FI = "italya", "yugoslavya", "danimarka", "norvec", "isvec", "finlandiya"
GB, IE, ES, PT, MA = "ingiltere", "irlanda-serbest-devlet", "ispanya", "portekiz", "fas"
ISO = {FR: ["FRA"], DE: ["DEU"], BE: ["BEL"], NL: ["NLD"], LU: ["LUX"], CH: ["CHE"], AT: ["AUT"], IT: ["ITA"],
       DK: ["DNK"], NO: ["NOR"], SE: ["SWE"], FI: ["FIN"], GB: ["GBR"], IE: ["IRL"], ES: ["ESP"], PT: ["PRT"],
       MA: ["MAR"]}


def sol_taraf(ls, a, b, iso=None):
    iso = iso or ISO
    m = ls.interpolate(0.5, normalized=True)
    p0 = ls.interpolate(max(0, ls.project(m) - 0.005))
    p1 = ls.interpolate(min(ls.length, ls.project(m) + 0.005))
    dx, dy = p1.x - p0.x, p1.y - p0.y
    n = math.hypot(dx, dy) or 1
    for d in (0.03, 0.01, 0.003):
        sol = Point(m.x - dy / n * d, m.y + dx / n * d)
        sag = Point(m.x + dy / n * d, m.y - dx / n * d)
        if any(POLY[k].contains(sol) for k in iso[a]):
            return a
        if any(POLY[k].contains(sol) for k in iso[b]):
            return b
        if any(POLY[k].contains(sag) for k in iso[a]):
            return b
        if any(POLY[k].contains(sag) for k in iso[b]):
            return a
    raise SystemExit(f"sol_taraf bulunamadı: {a}/{b} @ {m.x:.3f},{m.y:.3f}")


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


SINIF = {"D": ("E", F_NOT), "C": ("C", ""), "fiili": ("D", "fiilî hat, koordinatı kesin (bugünkü çizgi vekil)")}
KAYIT = []


def ekle(id_, a, b, f, kategori, parcalar, dayanak, degisti, tahdit, kesinlik, kesinlik_not, not_="", iso=None):
    if not parcalar:
        raise SystemExit(f"boş parça: {id_}")
    s, sn = SINIF[kategori]
    for i, ls in enumerate(parcalar):
        KAYIT.append({
            "id": id_ + (f"-{i+1}" if len(parcalar) > 1 else ""),
            "taraflar": [a, b], "f": f, "t": T, "kategori": kategori,
            "sinif": s, "sinif_not": sn,
            "sol_taraf": sol_taraf(ls, a, b, iso), "hat": dizi(ls),
            "uzunluk_km": round(uzunluk(ls), 1), "geometri_kaynagi": NE,
            "degisti": degisti, "tahdit": tahdit,
            "kesinlik_km": kesinlik, "kesinlik_not": kesinlik_not,
            "dayanak": dayanak, "not": not_,
        })


def yok(id_, a, b, f, kutu, degisti, dayanak, sinif_1923, not_=""):
    KAYIT.append({"id": id_, "taraflar": [a, b], "f": f, "t": T, "kategori": "D-YOK",
                  "sinif": "YOK", "sinif_not": f"1923 koordinatı yok; 29 Ekim 1923 hukukî sınıfı: {sinif_1923}",
                  "sol_taraf": None, "hat": None, "kutu": [round(v, 3) for v in kutu],
                  "geometri_kaynagi": None, "degisti": degisti, "dayanak": dayanak,
                  "kesinlik_km": None, "kesinlik_not": "kutu TAHMİNİ (±5-10 km); hat 1923 haritasından okunmadı",
                  "not": (not_ + " · " if not_ else "") + YOK_NOT})


def icinde(kutular):
    return lambda c: any(k.contains(Point(c)) for k in kutular)


def disinda(kutular):
    return lambda c: not any(k.contains(Point(c)) for k in kutular)


# ---------------- ortak dayanaklar ----------------
VERSAY = {"ad": "Versay Antlaşması", "tarih": "1919-06-28 (yürürlük 1920-01-10)", "tur": "antlaşma metni",
          "url": "https://avalon.law.yale.edu/imt/partii.asp"}
VERSAY_YUR = {"ad": "FRUS 1919 Paris Peace Conference c. XIII", "tur": "resmî yayın",
              "url": "https://history.state.gov/historicaldocuments/frus1919Parisv13/ch1",
              "alinti": "procès-verbal for the first deposit of ratifications was executed"}
SG = {"ad": "Saint-Germain Antlaşması", "madde": "md. 27(2)", "tarih": "1919-09-10",
      "tur": "antlaşma", "not": "yürürlük günü 1920-07-16 birincil kaynakta DOĞRULANMADI (RIS 503, AustLII 403)"}
SG_F = "1920-07-16"
SG_F_NOT = "f: Saint-Germain yürürlüğü 1920-07-16 — birincil kaynakta doğrulanamadı (bulunamadı)"

# ================= 1. FRANSA · BENELÜKS · İSVİÇRE · DANİMARKA =================
# 1.1 Fransa–Almanya (Saar kesimi HARİÇ — 1923'te orada komşu Saar Havzası, künyesi YOK)
SAAR = box(6.30, 48.95, 7.40, 49.60)
ekle("d1923-fr-de", FR, DE, "1920-01-10", "D", parcala(cizgi("DEU-FRA"), disinda([SAAR])),
     [dict(VERSAY, madde="md. 27(3), 51"), VERSAY_YUR,
      {"ad": "Fransız Senatosu raporu l01-276", "tur": "resmî rapor", "url": "https://www.senat.fr/rap/l01-276/l01-2760.html"}],
     {"deger": True, "kaynak": "Senat rap. l01-276", "not": "küçük: 1925 Ren talvegi · 1956 Basel–Kembs orta hat · "
      "2000-04-13 düzenlenmiş Ren'de sabit orta hat. Mundat ormanı 1949-1984/86 Fransız yönetimi (egemenlik değişmedi; çözüm tarihi bulunamadı). " + KUCUK},
     {"t": "1925-08-14", "not": "ayrıntılı delimitasyon antlaşması 1923'ten SONRA"},
     1.5, KES_NE, "§1.1 · D sınıfı ÖNERİMDİR (hat Versay md. 27/51 ile hukuken belli). Saar kesimi (lon 6,30-7,40) "
     "YAZILMADI: 1920-35 Saar Havzası MC idaresi, künyesi yok (D-KUNYE M-4059); kesimin uçları ÖLÇÜLMEDİ")

# 1.3 Belçika–Almanya
ekle("d1923-be-de", BE, DE, "1920-01-10", "D", cizgi("BEL-DEU"),
     [dict(VERSAY, madde="md. 32-35", url="https://avalon.law.yale.edu/imt/partiii.asp"), VERSAY_YUR,
      {"ad": "IBS No. 7 Belgium–Germany", "tur": "resmî sınır çalışması", "url": IBS % 7}],
     {"deger": True, "kaynak": "IBS 7", "not": "1935-05-10 takası (~1,7 km²) · 1949 geçici devirler · 1956-09-24 antlaşması "
      "(yürürlük 1958-09-10; Losheim üçgeni, Elsenborn, Fringshaus yolu). " + KUCUK},
     {"t": "1922-11-06", "not": "Belçika-Alman Sınır Komisyonu raporu (Aachen)"},
     3.0, KES_NE + "; 1956 düzeltmeleri birkaç km² — kesinlik buna göre 3 km",
     "§1.3 · Vennbahn yatağının yarattığı Alman eksklavları NE 10m'de YOK (adları kaynakta bulunamadı). "
     "f Versay yürürlüğü; Eupen-Malmedy'nin kesin devri (MC kararı 1920-09-20) yalnız ikincil kaynakta")

# 1.4 Hollanda–Almanya
ekle("d1923-nl-de", NL, DE, "1824-07-02", "D", cizgi("DEU-NLD"),
     [{"ad": "Aachen Sınır Antlaşması (Hollanda–Prusya)", "tarih": "1816-06-26", "tur": "antlaşma"},
      {"ad": "Meppen Sınır Antlaşması (Hollanda–Hannover)", "tarih": "1824-07-02", "tur": "antlaşma"},
      {"ad": "IBS No. 31 Germany–Netherlands", "tur": "resmî sınır çalışması", "url": IBS % 31}],
     {"deger": True, "kaynak": "IBS 31", "not": "1949 geçici devirler (Elten, Selfkant) · 1960-04-08 antlaşması "
      "(yürürlük 1963; 43 düzeltme, devirlerin çoğu geri döndü) · 1980-10-30 düzeltmeleri. " + KUCUK},
     {"t": "1816/1824", "not": "antlaşmaların kendi delimitasyonu"},
     2.0, KES_NE, "§1.4 · Versay bu hattı değiştirmedi. Ems-Dollart haliç hattı ihtilaflı (deniz, kapsam dışı). "
     "f: son kesimin (Hannover) antlaşması; 'almanya' künyesi atlasta süreklidir")

# 1.5 Lüksemburg–Almanya — sınır suları ortak (kondominyum) ⇒ C
ekle("d1923-lu-de", LU, DE, "1890-11-23", "C", cizgi("DEU-LUX"),
     [dict(VERSAY, madde="md. 27(2)"),
      {"ad": "Aachen Sınır Antlaşması", "tarih": "1816-06-26", "tur": "antlaşma"},
      {"ad": "Bundestag Drucksache 11/477 (1984 LU–DE sınır antlaşması)", "tur": "resmî belge",
       "url": "https://dserver.bundestag.de/btd/11/004/1100477.pdf"}],
     {"deger": True, "kaynak": "BT Drs. 11/477", "not": "1984-12-19 antlaşması: kondominyum teyidi, 3,96 ha ↔ 4,69 ha takas. "
      "1949 yönetimi/1959 iadesi bulunamadı (yalnız Vikipedi). " + KUCUK},
     {"t": "1816", "not": "Aachen antlaşması"},
     1.5, KES_NE, "§1.5 · Mosel-Sauer-Our sınır suları iki devletin ORTAK egemenliğinde (1816); çizgi nehir, egemenlik "
     "bölünmemiş ⇒ C. f lüksemburg künyesine hizalandı (hat 1816'dan)")

# 1.6 Belçika–Hollanda
ekle("d1923-be-nl", BE, NL, "1839-04-19", "D", cizgi("BEL-NLD"),
     [{"ad": "Londra Antlaşması", "tarih": "1839-04-19", "tur": "antlaşma"},
      {"ad": "Maastricht Sınır Sözleşmesi", "tarih": "1843-08-08", "tur": "antlaşma"},
      {"ad": "UAD, Belirli Sınır Parselleri Davası (Belçika/Hollanda)", "tarih": "1959-06-20", "tur": "yargı kararı",
       "url": "https://www.icj-cij.org/case/38"},
      {"ad": "Tractatenblad 2016/196", "tur": "resmî yayın", "url": "https://zoek.officielebekendmakingen.nl/trb-2016-196.html"}],
     {"deger": True, "kaynak": "UAD 1959 · Trb. 2016/196", "not": "1959 Baarle'nin iki parseli Belçika'ya · "
      "2016-11-28 Maas antlaşması (Eijsden–Wezet, yürürlük 2018-01-01). " + KUCUK},
     {"t": "1843", "not": "tasvirî tutanak + harita"},
     1.5, KES_NE, "§1.6 · Baarle eksklavları NE 10m'de YOK; iki parselin 1923 durumu belgeler arası çelişkiyle İHTİLAFLI (C)")

# 1.7 Belçika–Fransa
ekle("d1923-be-fr", BE, FR, "1839-04-19", "D", cizgi("BEL-FRA"),
     [{"ad": "Kortrijk Sınır Antlaşması", "tarih": "1820-03-28", "tur": "antlaşma"},
      {"ad": "L. Milis, 'Een verdrag met sporen in het landschap', De Lage Landen", "tur": "akademik yazar",
       "url": "https://www.de-lage-landen.com/article/een-verdrag-met-sporen-in-het-landschap",
       "alinti": "Op enkele kleinere correcties na is er sindsdien niet aan het grensverloop gemorreld"}],
     {"deger": False, "kaynak": "Milis (De Lage Landen)", "not": "tarihsiz 'küçük düzeltmeler' dışında değişmedi; "
      "düzeltmelerin tarihi/yeri kaynakta YOK"},
     {"t": "1820", "not": "antlaşmanın kendi delimitasyonu"},
     1.5, KES_NE, "§1.7 · hat Fransa–Birleşik Hollanda arasında 1820'de çizildi, Belçika 1839'da devraldı; f Londra Antlaşması")

# 1.8 Belçika–Lüksemburg — değişiklik belgesi arandı, bulunamadı ⇒ YOK
g = cizgi("BEL-LUX")
xs = [x for l in g for x, _ in l.coords]; ys = [y for l in g for _, y in l.coords]
yok("d1923-be-lu", BE, LU, "1890-11-23", (min(xs) - .03, min(ys) - .03, max(xs) + .03, max(ys) + .03),
    {"deger": None, "kaynak": "ACT Lüksemburg (sessiz)", "not": "değişiklik kaydı bulunamadı; kaynağın sessizliği kanıt sayılmadı "
     "(aynı sayfa FR–LU'nun belgeli düzeltmelerini de anmıyor)"},
    [{"ad": "Londra Antlaşması", "tarih": "1839-04-19", "tur": "antlaşma"},
     {"ad": "Maastricht Sınır Sözleşmesi", "tarih": "1843-08-07", "tur": "antlaşma"},
     {"ad": "ACT Lüksemburg — Limites d'État", "tur": "resmî", "url": "https://act.public.lu/fr/parcelles-residences/mensuration-officielle/limites-etat.html"}],
    "E", "§1.8 · f lüksemburg künyesine hizalandı (hat 1843'ten)")

# 1.9 Fransa–Lüksemburg
ekle("d1923-fr-lu", FR, LU, "1890-11-23", "D", cizgi("FRA-LUX"),
     [{"ad": "Kortrijk Sınır Antlaşması", "tarih": "1820-03-28", "tur": "antlaşma"},
      {"ad": "Fransız Senatosu raporu l06-232", "tur": "resmî rapor", "url": "https://www.senat.fr/rap/l06-232/l06-232_mono.html"},
      {"ad": "Légifrance, Kararname 2002-1188", "tur": "resmî yayın"}],
     {"deger": True, "kaynak": "Senat l06-232 · Kararname 2002-1188", "not": "küçük: 1963 · 1989 · 2000-03-15 · "
      "2006-01-20 Belval takası (~8,8-9 ha; iki kaynak farklı sayı veriyor). " + KUCUK},
     {"t": "1820", "not": ""}, 1.5, KES_NE, "§1.9 · f lüksemburg künyesine hizalandı (hat 1820'den)")

# 1.10 Fransa–İsviçre (Leman Gölü kesimi C: göl hattı 1953'te çizildi)
LEMAN = box(6.25, 46.30, 6.79, 46.53)   # Hermance (gn 2660364, 6.243) ile Saint-Gingolph (gn 2979660, 6.796) arası
FRCH = [{"ad": "Viyana Kongresi Bildirisi", "tarih": "1815-03-20", "tur": "antlaşma"},
        {"ad": "Dappes Antlaşması", "tarih": "1862-12-08", "tur": "antlaşma"},
        {"ad": "IBS No. 11 France–Switzerland", "tur": "resmî sınır çalışması", "url": IBS % 11}]
FRCH_DEG = {"deger": True, "kaynak": "IBS 11 · Légifrance 2000-227/228", "not": "1953-02-25 sözleşmeleri (yürürlük 1957; "
            "14 küçük düzeltme + Leman Gölü hattı) · 1996-09-18 iki sözleşme · Senat: 1959-2002 arası 7 değişiklik. " + KUCUK}
ekle("d1923-fr-ch", FR, CH, "1862-12-08", "D", parcala(cizgi("CHE-FRA"), disinda([LEMAN])), FRCH, FRCH_DEG,
     {"t": "1818/1824", "not": "Bern ve Neuchâtel belgeleri"}, 1.5, KES_NE,
     "§1.10 · f son 1923 öncesi değişiklik (Dappes). Basel-Mulhouse havalimanı egemenliği değiştirmedi")
ekle("d1923-fr-ch-leman", FR, CH, "1862-12-08", "C", parcala(cizgi("CHE-FRA"), icinde([LEMAN])), FRCH,
     dict(FRCH_DEG, not_="göl hattı ilk kez 1953 sözleşmesiyle çizildi"),
     {"t": "1953-02-25", "not": "göl hattı 1923'ten SONRA"}, 2.0, KES_NE,
     "§1.10 · Leman Gölü: 1923'te göl üzerinde çizilmiş hat yoktu (IBS 11) ⇒ C; çizgi bugünkü göl hattı")

# 1.11 İsviçre–Almanya (Bodensee Obersee kesimi C: hiç çizilmedi)
OBERSEE = box(9.20, 47.45, 9.75, 47.72)   # Konstanz (gn 2885679, 9.176) doğusu
CHDE = [dict(VERSAY, madde="md. 27(4)"),
        {"ad": "İsviçre–Almanya sınır antlaşması (Untersee/Konstanz)", "tarih": "1879-06-24", "tur": "antlaşma"},
        {"ad": "fedlex SR 0.132.136.3 (1964 antlaşması)", "tur": "resmî metin",
         "url": "https://fedlex.data.admin.ch/filestore/fedlex.data.admin.ch/eli/cc/1967/1195_1235_1229/19671004/de/pdf-a/fedlex-data-admin-ch-eli-cc-1967-1195_1235_1229-19671004-de-pdf-a-1.pdf"}]
CHDE_DEG = {"deger": True, "kaynak": "fedlex SR 0.132.136.3", "not": "1964-11-23 antlaşması (yürürlük 1967-10-04): eşit alanlı "
            "takas, her yön 529.912 m² (Verenahof dahil). Büsingen hâlâ eksklav. " + KUCUK}
ekle("d1923-ch-de", CH, DE, "1879-06-24", "D", parcala(cizgi("CHE-DEU"), disinda([OBERSEE])), CHDE, CHDE_DEG,
     {"t": "bulunamadı", "not": "kara kesimlerinin 19. yy temel antlaşma listesi bulunamadı"}, 1.5, KES_NE,
     "§1.11 · f son listelenen antlaşma; Büsingen eksklavı NE 10m'de YOK")
obs = parcala(cizgi("CHE-DEU"), icinde([OBERSEE]))
if obs:
    ekle("d1923-ch-de-obersee", CH, DE, "1879-06-24", "C", obs, CHDE,
         {"deger": False, "kaynak": "Kramsch 2015", "not": "Obersee'de sınır bugün de ÇİZİLMEMİŞ"},
         {"t": "yok", "not": "göl sınırı hiç çizilmedi"}, None,
         "NE göl çizgisi bir kartografik UZLAŞIDIR, hukukî hat değil",
         "§1.11 · Bodensee Obersee: İsviçre orta hat, Avusturya kondominyum der ⇒ C")

# 1.12 İsviçre–Avusturya
CHAT = [{"ad": "Ren düzenlemesi antlaşması (Avusturya-Macaristan–İsviçre)", "tarih": "1892-12-30", "tur": "antlaşma"},
        {"ad": "BMEIA — Österreich in der Schweiz, Verträge", "tur": "resmî liste",
         "url": "https://www.bmeia.gv.at/oeb-bern/oesterreich-in-der-schweiz/vertraege"}]
CHAT_DEG = {"deger": True, "kaynak": "BMEIA listesi", "not": "1924-11-19 ve 1954-04-10 Ren antlaşmaları · 1970-07-20 sınır "
            "antlaşması (yürürlük 1972-09-16); Diepoldsau takası (9,7 ha) bulunamadı. " + KUCUK}
chat = cizgi("AUT-CHE")
ekle("d1923-ch-at", CH, AT, "1918-11-12", "D", parcala(chat, lambda c: c[1] < 47.49), CHAT, CHAT_DEG,
     {"t": "bulunamadı", "not": ""}, 1.5, KES_NE,
     "§1.12 · f avusturya-cumhuriyet künyesine hizalandı (hat 1892'den). Diepoldsau kanalı 1923'te bitmişti, sınırın kanala uyarlanması sonra")
ekle("d1923-ch-at-bodensee", CH, AT, "1918-11-12", "C", parcala(chat, lambda c: c[1] >= 47.49), CHAT,
     {"deger": False, "kaynak": "Kramsch 2015", "not": "göl kesimi bugün de çizilmemiş"},
     {"t": "yok", "not": ""}, None, "NE göl/ağız çizgisi kartografik uzlaşı",
     "§1.12 · Eski Ren ağzından göle uzanan kesim (lat ≥ 47,49) — Bodensee statüsü ihtilaflı ⇒ C")

# 1.15 Danimarka–Almanya
ekle("d1923-dk-de", DK, DE, "1920-07-05", "D", cizgi("DEU-DNK"),
     [dict(VERSAY, madde="md. 109-114", url="https://avalon.law.yale.edu/imt/partiii.asp"),
      {"ad": "Başlıca Müttefik Devletler–Danimarka Schleswig Antlaşması", "tarih": "1920-07-05", "tur": "antlaşma",
       "kaynak": "British Treaty Series 1922 No. 17 (Cmd. 1585)"},
      {"ad": "IBS No. 81 Denmark–Germany", "tur": "resmî sınır çalışması", "url": IBS % 81}],
     {"deger": False, "kaynak": "IBS 81", "not": "IBS 81 (1968) anlaşmazlık ya da değişiklik kaydetmiyor"},
     {"t": "1921-09-03", "not": "Versay md. 111 komisyonunun tasviri; 1:5.000 18 pafta (Tem 1920–May 1921)"},
     1.5, KES_NE, "§1.15 · f Paris Schleswig antlaşmasının imzası; fiilî devir günü kaynakta bulunamadı")

# ================= 2. İRLANDA · İSKANDİNAVYA =================
ekle("d1923-ie-gb", IE, GB, "1922-12-06", "D", cizgi("GBR-IRL"),
     [{"ad": "Government of Ireland Act 1920", "madde": "s.1(2)", "tarih": "1920-12-23", "tur": "yasa",
       "url": "https://www.legislation.gov.uk/ukpga/1920/67/section/1/enacted"},
      {"ad": "Constitution of the Irish Free State (Saorstát Eireann) Act 1922 — Antlaşma eki md. 11-12", "tur": "yasa",
       "url": "https://www.irishstatutebook.ie/eli/1922/act/1/enacted/en/print.html"},
      {"ad": "Treaty (Confirmation of Amending Agreement) Act 1925 (No. 40)", "tarih": "1925-12-17", "tur": "yasa",
       "url": "https://www.irishstatutebook.ie/eli/1925/act/40/enacted/en/print.html"}],
     {"deger": False, "kaynak": "Act 1925 No. 40", "not": "1925 anlaşması hattı s.1(2) olarak sabitledi; açık meseleler yalnız denizde"},
     {"t": "yok", "not": "hat kontluk sınırları; ayrı işaretleme yok"},
     1.5, KES_NE, "§2.1 · D (E) sınıfı ÖNERİMDİR: Antlaşma md. 12 komisyonu 29 Ekim 1923'te KURULMAMIŞTI "
     "(ilk toplantı 1924-11-06), 1925'te kaldırıldı; C/fiili de savunulabilir. f irlanda-serbest-devlet künyesine "
     "hizalandı — kuruluş günü birincil kaynaktan DOĞRULANMADI")

ekle("d1923-no-se", NO, SE, "1905-06-07", "D", cizgi("NOR-SWE"),
     [{"ad": "Strömstad Antlaşması + Lapp ek maddesi", "tarih": "1751-10-02", "tur": "antlaşma"},
      {"ad": "Karlstad sözleşmeleri", "tarih": "1905-10-26", "tur": "antlaşma"},
      {"ad": "Store norske leksikon, 'riksgrensen'", "tur": "akademik ansiklopedi", "url": "https://snl.no/riksgrensen",
       "alinti": "gjelder fortsatt"}],
     {"deger": False, "kaynak": "SNL", "not": "1751 antlaşması hâlâ yürürlükte; 25 yılda bir ortak denetim"},
     {"t": "1752-1766", "not": "yerinde işaretleme"},
     1.5, KES_NE, "§2.2 · f norvec künyesine hizalandı (hat 1751'den; birlik döneminde de iki krallığın sınırı)")

ekle("d1923-fi-no-bati", FI, NO, "1917-12-06", "D", cizgi("FIN-NOR"),
     [{"ad": "Strömstad Antlaşması", "tarih": "1751-10-02", "tur": "antlaşma"},
      {"ad": "Rusya–Norveç sınır sözleşmesi", "tarih": "1826", "tur": "antlaşma"},
      {"ad": "Maanmittauslaitos — State boundaries", "tur": "resmî", "url": "https://www.maanmittauslaitos.fi/en/stateboundaries"}],
     {"deger": False, "kaynak": "SNL · MML", "not": "bu kesim bugün de Finlandiya–Norveç sınırı"},
     {"t": "1897", "not": "Treriksröset üçlü nokta taşı"},
     1.5, KES_NE, "§2.3 · Treriksröset → Mutkavaara; f finlandiya künyesine hizalandı")

ISO_PETS = dict(ISO); ISO_PETS[FI] = ["RUS"]
ekle("d1923-fi-no-petsamo", FI, NO, "1920-12-31", "D", cizgi("NOR-RUS"),
     [{"ad": "Tartu (Dorpat) Barışı", "madde": "md. 4", "tarih": "1920-10-14", "tur": "antlaşma metni",
       "url": "https://treaties.un.org/doc/Publication/UNTS/LON/Volume%203/v3.pdf",
       "alinti": "the former frontier between Russia and Norway"},
      {"ad": "Norveç–Finlandiya sözleşmesi (Christiania)", "tarih": "1924-04-28", "tur": "antlaşma",
       "url": "https://treaties.un.org/doc/Publication/UNTS/LON/Volume%2030/v30.pdf"},
      {"ad": "IBS No. 24 Norway–USSR", "tur": "resmî sınır çalışması", "url": IBS % 24}],
     {"deger": True, "kaynak": "IBS 24", "not": "HAT aynı, TARAF değişti: 1944/1947 Petsamo SSCB'ye; 1947 protokolü (yürürlük "
      "1949) orta hat yerine talveg — küçük fark. Boris Gleb çıkıntısı 1826'dan beri Rus tarafında"},
     {"t": "1896", "not": "1826 hattının işaretlemesi; 1924 sözleşmesi md. I bunu korur"},
     1.5, KES_NE, "§2.4 · Mutkavaara → Jakobselv. 🔴 bugünkü ülke çifti NOR–RUS; 1923'te Finlandiya tarafı. "
     "f LNTS c.3'e göre onay teatisi/yürürlük 1920-12-31 (IBS 74 1921-02-14 diyor — ÇELİŞKİ, envanter §4)",
     iso=ISO_PETS)

ekle("d1923-fi-se", FI, SE, "1917-12-06", "D", cizgi("FIN-SWE"),
     [{"ad": "Fredrikshamn Barışı", "madde": "md. V", "tarih": "1809-09-17", "tur": "antlaşma"},
      {"ad": "Sınır düzenleme sözleşmesi", "tarih": "1810-11-20", "tur": "antlaşma"},
      {"ad": "MML — Suomen–Ruotsin rajankäynti 2006, §2.1-2.2", "tur": "resmî",
       "url": "https://www.maanmittauslaitos.fi/sites/maanmittauslaitos.fi/files/Suomen_valtakunnanrajat/FIN-SWE_Valtakunnanraja_Riksgr%C3%A4nsen_2006/FIN-SWE_Raja_Asiakirjat.pdf"}],
     {"deger": False, "kaynak": "MML 2006", "not": "kara/ırmak hattı aynı; küçük: 1926-29 takımada düz çizgileri, 1985 Märket, "
      "2006 denetimi. Irmak adaları talvegle kayabilir"},
     {"t": "1810/1823/1888", "not": ""}, 1.5, KES_NE,
     "§2.6 · Torne–Muonio; f finlandiya künyesine hizalandı")

# ================= 3. İTALYA · İBERYA · FAS =================
# 3.1 Fransa–İtalya — 1947'de değişen beş alan D-YOK
KUT_FRIT = {
    "tende": box(6.85, 43.85, 7.75, 44.35),        # Tende gn 2973180 · La Brigue gn 3010789 · Tinée/Vésubie yukarı vadileri
    "chaberton": box(6.68, 44.90, 6.82, 45.00),    # Mont Chaberton gn 3027710
    "thabor": box(6.50, 45.03, 6.72, 45.16),       # Mont Thabor gn 2973023 · Col de la Vallée Étroite gn 2970954
    "cenis": box(6.82, 45.15, 7.05, 45.33),        # Lac du Mont Cenis gn 2992850 · Moncenisio gn 6535408
    "pstbernard": box(6.78, 45.61, 6.96, 45.75),   # çıpa GeoNames'te BULUNAMADI — genel bilgiyle ±5 km
}
IBS4 = {"ad": "IBS No. 4 France–Italy", "tur": "resmî sınır çalışması", "url": IBS % 4,
        "alinti": "Since 1948 there have been no changes"}
P47 = {"ad": "İtalya ile Barış Antlaşması (Paris)", "madde": "md. 2", "tarih": "1947-02-10", "tur": "antlaşma metni",
       "url": "https://treaties.fcdo.gov.uk/data/Library2/pdf/1948-TS0050.pdf"}
TORINO = [{"ad": "Torino Antlaşması", "tarih": "1860-03-24", "tur": "antlaşma"},
          {"ad": "Torino sınır sözleşmesi", "tarih": "1861-03-07", "tur": "antlaşma"}, IBS4]
ekle("d1923-fr-it", FR, IT, "1861-03-17", "D", parcala(cizgi("FRA-ITA"), disinda(KUT_FRIT.values())), TORINO + [P47],
     {"deger": False, "kaynak": "IBS 4", "not": "1947 değişiklikleri (5 alan, 693,2 km²) ve 1930 Coni–Vintimille düzeltmesi "
      "D-YOK kutularında; kutu dışı kesimler IBS 4'e göre değişmedi"},
     {"t": "1861", "not": "1874 Mont-Cenis tüneli düzeltmesi 1923 öncesi"}, 1.5, KES_NE,
     "§3.1 · f italya künyesine hizalandı (hat 1861'den)")
ALAN = {"tende": "Tende-Brigue + Tinée/Vésubie/Roya yukarı vadileri, 543,6 km² (ve 1930 Coni–Vintimille düzeltmesi)",
        "chaberton": "Chaberton, 17,1 km²", "thabor": "Mont Thabor + güneydoğusundaki küçük vadi (alan verilmemiş)",
        "cenis": "Mont Cenis platosu, 82,4 km²", "pstbernard": "Petit-Saint-Bernard, 31 km² (+1948'de ~200 m kayma)"}
for k, kutu in KUT_FRIT.items():
    yok(f"d1923-fr-it-DEGISTI-{k}", FR, IT, "1861-03-17", kutu.bounds,
        {"deger": True, "kaynak": "IBS 4 · Paris 1947 md. 2", "not": ALAN[k] + " İtalya'dan Fransa'ya geçti"},
        TORINO + [P47], "E", "§3.1 · kutu çıpalar etrafında TAHMİNİ")

# 3.2-3.3 İtalya–İsviçre: eski kesim + Saint-Germain'le eklenen kesim (Dreisprachenspitze → Piz Lad)
GARIBALDI, PIZLAD = (10.45271, 46.53077), (10.46885, 46.84777)   # gn 2660662 · gn 6937373
_chit = cizgi("CHE-ITA")
assert len(_chit) == 1
_cc = list(_chit[0].coords)
_i = min(range(len(_cc)), key=lambda i: km(_cc[i], GARIBALDI))
assert km(_cc[_i], GARIBALDI) < 3, km(_cc[_i], GARIBALDI)
if km(_cc[-1], PIZLAD) < km(_cc[0], PIZLAD):
    CHIT_ESKI, CHIT_YENI = [LineString(_cc[:_i + 1])], [LineString(_cc[_i:])]
else:
    CHIT_ESKI, CHIT_YENI = [LineString(_cc[_i:])], [LineString(_cc[:_i + 1])]
assert min(km(c, PIZLAD) for c in CHIT_YENI[0].coords) < 3
IBS12 = {"ad": "IBS No. 12 Italy–Switzerland", "tur": "resmî sınır çalışması", "url": IBS % 12}
ekle("d1923-it-ch", IT, CH, "1861-03-17", "D", CHIT_ESKI,
     [{"ad": "Varese Antlaşması", "tarih": "1752-08-02", "tur": "antlaşma"},
      {"ad": "Lugano Sözleşmesi", "tarih": "1861-10-05", "tur": "antlaşma"},
      {"ad": "Bern sınır sözleşmesi", "tarih": "1895-11-25", "tur": "antlaşma"}, IBS12],
     {"deger": True, "kaynak": "IBS 12", "not": "küçük: 1929-03-22 Bildirisi · 1941-07-24 Bern · Val di Lei 1949/52 (~1 km²) · "
      "Roggia Molinara 1951 · Kriegalp 1952 · 2023-24 buzul düzeltmeleri. " + KUCUK},
     {"t": "1863-68 / 1891-95", "not": "demarkasyonlar"}, 1.5, KES_NE,
     "§3.2 · Dolent → Cima Garibaldi. Üç su-bölümü anlaşmazlığı 1929'a kadar açıktı. Campione eksklavı NE 10m'de YOK "
     "(1927'de yeniden işaretlendi, sonraki değişiklik bulunamadı). f italya künyesine hizalandı")
ekle("d1923-it-ch-saintgermain", IT, CH, SG_F, "D", CHIT_YENI,
     [SG, IBS12], {"deger": False, "kaynak": "IBS 12", "not": "1941 sözleşmesi bu kesimi kapsamıyor"},
     {"t": "1920-1927", "not": "yeniden demarkasyon; 1927-10-03 ve 1928-08-22 notalarıyla kabul"}, 1.5,
     KES_NE + "; eski/yeni kesim, NE çizgisinin Cima Garibaldi'ye (GeoNames 2660662) en yakın noktasında bölündü",
     "§3.3 · eski Avusturya–İsviçre hattı (Cima Garibaldi → Piz Lad, gn 6937373), Güney Tirol'le İtalya'ya geçti. " + SG_F_NOT)

# 3.5 İtalya–Avusturya: üç alt kesim C ('to be fixed on the ground'), kalanı D
KUT_ATIT = [box(10.45, 46.78, 10.58, 46.90),   # Passo di Resia gn 3169476
            box(12.30, 46.69, 12.46, 46.80),   # Arnbach gn 2782422 (Winnbach–Arnbach, Drava geçişi)
            box(13.58, 46.49, 13.72, 46.59)]   # Thörl-Maglern gn 2763668 / Maglern gn 2772124
IBS58 = {"ad": "IBS No. 58 (Revised) Austria–Italy", "tur": "resmî sınır çalışması", "url": IBS % 58}
ATIT_DEG = {"deger": False, "kaynak": "IBS 58", "not": "1947 Paris md. 1 ve 1955 Avusturya Devlet Antlaşması md. 5 hattı teyit etti"}
ekle("d1923-it-at", IT, AT, SG_F, "D", parcala(cizgi("AUT-ITA"), disinda(KUT_ATIT)), [SG, IBS58], ATIT_DEG,
     {"t": "1924", "not": "demarkasyon 1924'te bitti; üçlü nokta procès-verbal 1922-06-22"}, 1.5, KES_NE,
     "§3.5 · su-bölümü kesimleri. " + SG_F_NOT)
ekle("d1923-it-at-yerde", IT, AT, SG_F, "C", parcala(cizgi("AUT-ITA"), icinde(KUT_ATIT)), [SG, IBS58], ATIT_DEG,
     {"t": "1924", "not": "29 Ekim 1923'te bu kesimlerde demarkasyon sürüyordu"}, 2.0,
     KES_NE + "; alt kesim kutuları çıpalar etrafında TAHMİNİ (±5 km)",
     "§3.5 · md. 27(2)'nin 'a line to be fixed on the ground' dediği üç alt kesim: Reschen–Nauders · Winnbach–Arnbach · "
     "Gailitz/Thörl ⇒ C. " + SG_F_NOT)

# 3.6-3.7 İtalya–SHS: 1923 hattı bugünkü hiçbir çizgi değil ⇒ D-YOK
RAPALLO = {"ad": "Rapallo Antlaşması", "madde": "md. 1-5", "tarih": "1920-11-12", "tur": "antlaşma metni",
           "url": "http://www.forost.ungarisches-institut.de/pdf/19201112-1.pdf", "kaynak": "LNTS c.18 s.397-403"}
yok("d1923-it-shs", IT, YU, "1920-11-12", (13.35, 45.30, 14.45, 46.53),
    {"deger": True, "kaynak": "Paris 1947 md. 3 · Osimo 1975", "not": "hat neredeyse tamamen kalktı; yalnız Peč ucundan kısa bir "
     "kesim bugünkü İtalya–Slovenya sınırında (uzunluğu ölçülmedi)"},
    [RAPALLO, {"ad": "İtalya ile Barış Antlaşması (Paris)", "madde": "md. 3", "tarih": "1947-02-10", "tur": "antlaşma",
               "url": "https://treaties.fcdo.gov.uk/data/Library2/pdf/1948-TS0050.pdf"}],
    "su-bölümü kesimi (Jalovec–Triglav–Možic) E, kalanı C (karma komisyon 1921-26 işaretliyordu)",
    "§3.6 · Peč (gn 6934913 Dreiländereck) → Castua. Fiume çevresi de bu kutuda (künye yok). "
    "f Rapallo imzası — yürürlük günü BULUNAMADI")
yok("d1923-it-shs-zara", IT, YU, "1920-11-12", (15.15, 44.07, 15.32, 44.17),
    {"deger": True, "kaynak": "Paris 1947 md. 11", "not": "Zara Yugoslavya'ya geçti, sınır kalktı"},
    [RAPALLO, {"ad": "Roma Anlaşması (Santa Margherita)", "madde": "Bölüm I", "tarih": "1922-10-23", "tur": "antlaşma",
               "url": "http://www.forost.ungarisches-institut.de/pdf/19221023-1.pdf"}],
    "C (demarkasyon tarihi bulunamadı)", "§3.7 · Zara anklavı (Zadar gn 3186952). f Rapallo imzası")

# 3.13-3.17 Fransa–İspanya (1: Bidasoa→Andorra · 2: Andorra→Akdeniz · 3: Llívia)
CAPDEVILA = {"ad": "J. Capdevila i Subirana, Historia del deslinde de la frontera hispano-francesa (IGN)",
             "tur": "akademik/resmî yayın", "url": "https://www.ign.es/resources/acercaDe/libDigPub/FronterasPirineosbaja.pdf",
             "alinti": "el trazado fronterizo en el Pirineo ha sufrido muy pocas variaciones"}
BAYONNE = [{"ad": "Bayonne Antlaşması", "tarih": "1856-12-02", "tur": "antlaşma metni",
            "url": "https://treaties.un.org/doc/publication/unts/volume%201142/volume-1142-ii-838-french.pdf"},
           {"ad": "Bayonne Antlaşması", "tarih": "1862-04-14", "tur": "antlaşma"},
           {"ad": "Bayonne Antlaşması + Nihaî Akit", "tarih": "1866-05-26 / 1868-07-11", "tur": "antlaşma metni",
            "url": "https://treaties.un.org/doc/publication/unts/volume%201288/volume-1288-ii-907-french.pdf"},
           CAPDEVILA]
FRES_DEG = {"deger": True, "kaynak": "Capdevila (IGN) · BOE-A-1984-22512", "not": "küçük: 1982-12-04 Arette–Isaba "
            "düzeltmesi (karşılıklı 2.710 m², yürürlük 1984-10-01); öteki kayıtlar (1928 Somport · 1980 Bielsa tünelleri · "
            "1973/1985/1999 taşlar) hattı değiştirmiyor. " + KUCUK}
ekle("d1923-fr-es-bati", FR, ES, "1868-07-11", "D", cizgi("ESP-FRA", 1), BAYONNE, FRES_DEG,
     {"t": "1856-1868", "not": "antlaşma ekleri; taş dikme tutanağı 1863-02-27"}, 1.5, KES_NE,
     "§3.13-3.15 · Bidasoa → Andorra. Sülün Adası (Bayonne 1856 md. 27) ortak egemenlik — NE 10m'de YOK. "
     "f son Bayonne akdi (hat parça parça 1856-1868)")
ekle("d1923-fr-es-dogu", FR, ES, "1868-07-11", "D", cizgi("ESP-FRA", 2), BAYONNE, FRES_DEG,
     {"t": "1868", "not": "Nihaî Akit (427 numaralı taştan itibaren)"}, 1.5, KES_NE, "§3.16 · Andorra → Akdeniz")
ekle("d1923-fr-es-llivia", FR, ES, "1868-07-11", "D", cizgi("ESP-FRA", 3), BAYONNE, FRES_DEG,
     {"t": "1866", "not": "Bayonne 1866 md. XVI çevre tarifi"}, 1.0, KES_NE, "§3.17 · Llívia anklavı (Llívia Sözleşmesi 1660)")

# 3.20-3.22 İspanya–Portekiz: Caia (lat 38,87) ve Cuncos (lat 38,43) ile üçe bölünür
CAIA_LAT, CUNCOS_LAT = 38.87, 38.43   # Caia gn 2270459/7646651 · Ribeira de Cuncos gn 2518939 (38,433)
BAGE = {"ad": "Santos Sánchez, Boletín de la Asociación de Geógrafos Españoles 104 (2025)", "tur": "hakemli makale",
        "url": "https://doi.org/10.21138/bage.3636"}
MNE = {"ad": "Portekiz Dışişleri — 150 anos do Tratado de Limites", "tur": "resmî",
       "url": "https://idi.mne.gov.pt/pt/arquivo-e-biblioteca/documentos-e-efemerides/150-anos-do-tratado-de-limites"}
LIZBON = {"ad": "Lizbon Sınır Antlaşması + Ekler", "tarih": "1864-09-29 / 1866-11-04", "tur": "antlaşma metni",
          "url": "https://www.amn.pt/DGAM/Capitanias/Caminha/Lists/Documentos_AMN/Tratado%20limites%2029%20setembro%201864%20e%20Anexo.pdf",
          "kaynak": "UNTS c.1288 No. 906"}
espt = cizgi("ESP-PRT")
ekle("d1923-es-pt-kuzey", ES, PT, "1866-11-04", "D", parcala(espt, lambda c: c[1] >= CAIA_LAT), [LIZBON, MNE, BAGE],
     {"deger": False, "kaynak": "MNE · BAGE", "not": "kaynaklar 1864 antlaşmasını hâlâ temel çerçeve sayıyor; sonraki hat "
      "değişikliği anmıyor (açık 'değişmedi' cümlesi YOK — teslimde bildirildi)"},
     {"t": "1906", "not": "genel işaretleme belgesi (BAGE)"}, 1.5,
     KES_NE + "; Caia ayrımı lat 38,87 ile — ağız noktası ÖLÇÜLMEDİ",
     "§3.20 · Minho ağzı → Caia/Guadiana birleşimi. Couto Misto İspanya'ya (md. VII)")
ekle("d1923-es-pt-olivenza", ES, PT, "1801-01-01", "fiili",
     parcala(espt, lambda c: CUNCOS_LAT <= c[1] < CAIA_LAT), [BAGE, MNE],
     {"deger": False, "kaynak": "BAGE", "not": "hukukî hat bugün de YOK; fiilî hat 1801'den beri Guadiana"},
     {"t": "yok", "not": "hiç sınırlandırılmadı"}, 1.5,
     KES_NE + "; Caia/Cuncos ayrımı enlemle — ağız noktaları ÖLÇÜLMEDİ",
     "§3.21 · Caia → Cuncos: Olivenza anlaşmazlığı, Portekiz hattı tanımıyor ⇒ fiilî (D). "
     "f: BAGE 'Guadiana 1801 Badajoz Antlaşması'ndan beri sınır' diyor; gün kaynakta YOK ⇒ hassasiyet YIL")
g = parcala(espt, lambda c: c[1] < CUNCOS_LAT)
xs = [x for l in g for x, _ in l.coords]; ys = [y for l in g for _, y in l.coords]
yok("d1923-es-pt-guney", ES, PT, "1801-01-01", (min(xs) - .05, min(ys) - .05, max(xs) + .05, CUNCOS_LAT),
    {"deger": True, "kaynak": "BAGE", "not": "1926-06-29 Lizbon sözleşmesi (onay 1927); tartışmalı alanlar (Contienda, "
     "Villanueva del Fresno, Valencia de Mombuey, Galiana) 1922-26'da bölündü"},
    [BAGE, MNE], "fiili — 1923'te bu kesimde hukukî hat yoktu",
    "§3.22 · Cuncos → Guadiana ağzı. f hassasiyeti YIL (1801)")

# 3.23 Cebelitarık kıstağı — fiilî çit 1908-09; değişiklik kaydı bulunamadı ⇒ YOK
g = cizgi("ESP-GIB")
xs = [x for l in g for x, _ in l.coords]; ys = [y for l in g for _, y in l.coords]
yok("d1923-es-gib", ES, GB, "1909-01-01", (min(xs) - .02, min(ys) - .02, max(xs) + .02, max(ys) + .02),
    {"deger": None, "kaynak": "bulunamadı", "not": "çitin 1923'ten sonra kayıp kaymadığına dair kaynak yok"},
    [{"ad": "Utrecht Antlaşması", "madde": "md. X", "tarih": "1713-07-13", "tur": "antlaşma"},
     {"ad": "İspanya Dışişleri — Gibraltar", "tur": "taraf beyanı", "url": "https://www.exteriores.gob.es/es/PoliticaExterior/Paginas/Gibraltar.aspx"},
     {"ad": "M. Peñalba-Sotorrío, The Conversation", "tur": "akademik yazar",
      "url": "https://theconversation.com/gibraltar-a-history-of-ill-will-over-the-rock-75753",
      "alinti": "As early as 1908-1909, the UK had unilaterally established a border"}],
    "fiili (kıstak devredilmedi; İspanya çiti sınır saymıyor)",
    "§3.23 · f: çit '1908-1909' — gün yok, 1909-01-01 hassasiyeti YIL. Cebelitarık'ın ayrı künyesi yok; taraf ingiltere")

# 3.24-3.25 İspanya–Fas
ekle("d1923-es-ma-ceuta", ES, MA, "1860-11-17", "D", cizgi("ESP-MAR", 1),
     [{"ad": "Wad-Ras Antlaşması", "tarih": "1860-04-26", "tur": "antlaşma"},
      {"ad": "Bermejo García vd., Ceuta y Melilla, frontera terrestre… (Observatorio de Ceuta y Melilla, 2020)",
       "tur": "akademik yazarlı rapor",
       "url": "https://www.observatorioceutaymelilla.org/wp-content/uploads/2020/12/Ceuta-y-Melilla-frontera-terrestre-de-Espan%CC%83a-y-de-la-Unio%CC%81n-Europea-en-A%CC%81frica.pdf",
       "alinti": "la zona de la plaza de Ceuta sigue con los límites establecidos"}],
     {"deger": False, "kaynak": "Bermejo García vd. 2020", "not": "sınırlar 1860 sözleşmelerindeki gibi"},
     {"t": "1860-11-17", "not": "sınır işaretleme belgesi (tarafsız bölgenin iki çizgisi dahil)"}, 1.0, KES_NE,
     "§3.25 · 1923'te art bölge İspanyol koruma bölgesi (egemen Sultan). Tarafsız bölge ayrıca çizilmedi. Kaynak hakemli değil (düşünce kuruluşu raporu)")
ekle("d1923-es-ma-melilla", ES, MA, "1894-03-05", "D", cizgi("ESP-MAR", 2),
     [{"ad": "Tetuan Sözleşmesi", "tarih": "1859-08-24", "tur": "antlaşma"},
      {"ad": "Tanca Demarkasyon Akdi", "tarih": "1862-06-21", "tur": "antlaşma", "not": "basında 1862-06-26 — ÇELİŞKİ"},
      {"ad": "Merakeş Sözleşmesi", "tarih": "1894-03-05", "tur": "antlaşma"},
      {"ad": "İspanya hükümetinin meclise yazılı cevabı (2022-11-18)", "tur": "resmî",
       "url": "https://www.congreso.es/entradap/l14p/e24/e_0244503_n_000.pdf"}],
     {"deger": False, "kaynak": "İspanya hükümeti cevabı 2022", "not": "hükümet bugünkü sınırı bu belgelere dayandırıyor"},
     {"t": "1862 / 1891", "not": "demarkasyon ve yeniden aplikasyon akitleri"}, 1.0, KES_NE,
     "§3.24 · 1921-23 Rif Savaşı art bölgeyi fiilen etkiliyordu. f son sözleşme (Merakeş)")

# ---------------- yaz ----------------
ids = [k["id"] for k in KAYIT]
assert len(ids) == len(set(ids)), "mükerrer id"
for k in KAYIT:
    for alan in ("id", "taraflar", "f", "t", "kategori", "sinif", "dayanak"):
        assert k.get(alan) not in (None, "", []), (k["id"], alan)
    if k["kategori"] != "D-YOK":
        assert k["hat"] and len(k["hat"]) >= 2, k["id"]
    else:
        assert k["kutu"], k["id"]
    # 'not' anahtarını sözlükte çakışmadan taşımak için
    if "not_" in k["degisti"]:
        k["degisti"]["not"] = k["degisti"].pop("not_")
BAS = """// -*- coding: utf-8 -*-
// data/d_sinirlar_avrupa_bati.js — 29 Ekim 1923 BATI AVRUPA kara sınırları · D3-AVRUPA-BATI
// Şema denetim/SEMA-D-0916.md + oturumlar/GORUNUM-ABCD-0916.md (A–F, `sinif`) · envanter denetim/D3-AVRUPA-BATI-0916.md
// Üretici: denetim/ARAC-D3BATI-URET-0916.py — 🔴 ELLE DÜZENLEME, yeniden üret.
// sinif: E (hukukî) · D (fiilî) · C (kaba/ihtilaflı) · YOK (bugünkü çizgi 1923'ü göstermez ya da bilinmiyor)
// YAZILMAYANLAR: künyesi olmayan tarafların parçaları (Saar · Lihtenştayn · Fiume · San Marino · Monako · Andorra);
// ortak kara sınırı olmayanlar (Norveç–SSCB 1923 · Svalbard terra nullius · Vatikan 1929 öncesi yok).

window.D_SINIRLAR_AVRUPA_BATI = [
"""
with open("data/d_sinirlar_avrupa_bati.js", "w", encoding="utf-8", newline="\n") as f:
    f.write(BAS + ",\n".join(json.dumps(k, ensure_ascii=False, separators=(",", ":")) for k in KAYIT) + "\n];\n")
from collections import Counter
print("kayıt", len(KAYIT), dict(Counter(k["sinif"] for k in KAYIT)))
print("uzunluk km", {s: round(sum(k.get("uzunluk_km") or 0 for k in KAYIT if k["sinif"] == s)) for s in ("E", "D", "C")})
for k in KAYIT:
    print(f"  {k['id']:34} {k['sinif']:3} {k['f']}  {k.get('uzunluk_km') or '-':>7}  sol={k.get('sol_taraf')}")
