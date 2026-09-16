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


def ekle(id_, a, b, f, kategori, parcalar, dayanak, degisti, tahdit, kesinlik, kesinlik_not, not_="", iso=None, t=T,
         sinif_not=None):
    if not parcalar:
        raise SystemExit(f"boş parça: {id_}")
    s, sn = SINIF[kategori]
    if sinif_not is not None:
        sn = sinif_not
    for i, ls in enumerate(parcalar):
        KAYIT.append({
            "id": id_ + (f"-{i+1}" if len(parcalar) > 1 else ""),
            "taraflar": [a, b], "f": f, "t": t, "kategori": kategori,
            "sinif": s, "sinif_not": sn,
            "sol_taraf": sol_taraf(ls, a, b, iso), "hat": dizi(ls),
            "uzunluk_km": round(uzunluk(ls), 1), "geometri_kaynagi": NE,
            "degisti": degisti, "tahdit": tahdit,
            "kesinlik_km": kesinlik, "kesinlik_not": kesinlik_not,
            "dayanak": dayanak, "not": not_,
        })


def yok(id_, a, b, f, kutu, degisti, dayanak, sinif_1923, not_="", t=T):
    KAYIT.append({"id": id_, "taraflar": [a, b], "f": f, "t": t, "kategori": "D-YOK",
                  "sinif": "YOK", "sinif_not": f"koordinat yok; dönemin ({f} → {t}) hukukî sınıfı: {sinif_1923}",
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
      "tur": "antlaşma", "not": "yürürlük günü birincil/akademik kaynakta BULUNAMADI (RIS 503, AustLII 403)"}
# G4-G7 tarihleri — doğrulama: envanter ve teslim mesajları (kaynağı her kaydın dayanak alanında)
T_VIYANA1815 = "1815-06-09"    # Viyana Kongresi Nihaî Senedi (IBS 11, IBS 12)
T_PARIS1814 = "1814-05-30"     # Paris Antlaşması (IBS 11 bir yerde 30, bir yerde 20 Mayıs — ÇELİŞKİ)
T_TORINO1860 = "1860-03-24"    # Torino Antlaşması (IBS 4); Savoy'un fiilî devir günü ayrıca doğrulanacak
SG_F = "1920-01-01"
SG_F_NOT = ("f hassasiyeti YIL: Saint-Germain'in yürürlük GÜNÜ (yaygın olarak 16 Temmuz 1920) okunabilir bir birincil/akademik "
            "kaynakta BULUNAMADI (RIS 503 · AustLII 403 · UK TS 1919/11 metin katmanı yok); yıl IBS 58'den (Büyükelçiler "
            "Konferansı 22 Temmuz 1920'de demarkasyon talimatı verdi)")

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

# 1.9 Fransa–Lüksemburg — Lorraine kesimi (Moselle, 1871-1918 Alman) ayrı kayıt
LOR_LON = 5.944   # Villerupt (gn 2968316, dept 54, Fransız kaldı) ile Audun-le-Tiche (gn 3036226, dept 57, ilhak) arası
LORRAINE = lambda c: c[0] > LOR_LON
ALSAS_LON = 7.14  # Réchésy (gn 2984252, dept 90, Fransız kaldı) ile Pfetterhouse (gn 2987428, dept 68, ilhak) arası
ALSAS = lambda c: c[0] > ALSAS_LON and c[1] < 47.62
BOL_NOT = ("1871 hattı ayrımı bugünkü departman sınırıyla (54/57 · 90/68) yapıldı — departman sınırının 1871 hattını "
           "izlediği bir VARSAYIMDIR, kaynakta doğrulanmadı (±2 km)")
FRLU_DAY = [{"ad": "Kortrijk Sınır Antlaşması", "tarih": "1820-03-28", "tur": "antlaşma"},
            {"ad": "Fransız Senatosu raporu l06-232", "tur": "resmî rapor", "url": "https://www.senat.fr/rap/l06-232/l06-232_mono.html"},
            {"ad": "Légifrance, Kararname 2002-1188", "tur": "resmî yayın"}]
FRLU_DEG = {"deger": True, "kaynak": "Senat l06-232 · Kararname 2002-1188", "not": "küçük: 1963 · 1989 · 2000-03-15 · "
            "2006-01-20 Belval takası (~8,8-9 ha; iki kaynak farklı sayı veriyor). " + KUCUK}
ekle("d1923-fr-lu-lorraine", FR, LU, "1920-01-10", "D", parcala(cizgi("FRA-LUX"), LORRAINE),
     FRLU_DAY + [dict(VERSAY, madde="md. 27, 51", url="https://avalon.law.yale.edu/imt/partiii.asp")], FRLU_DEG,
     {"t": "1820", "not": ""}, 2.0, KES_NE + "; " + BOL_NOT,
     "§1.9 · Moselle kesimi: 1871-1918 Almanya–Lüksemburg sınırıydı; Versay md. 51 1871 öncesi delimitasyonu geri getirdi")
ekle("d1923-fr-lu", FR, LU, "1890-11-23", "D", parcala(cizgi("FRA-LUX"), lambda c: not LORRAINE(c)),
     [{"ad": "Kortrijk Sınır Antlaşması", "tarih": "1820-03-28", "tur": "antlaşma"},
      {"ad": "Fransız Senatosu raporu l06-232", "tur": "resmî rapor", "url": "https://www.senat.fr/rap/l06-232/l06-232_mono.html"},
      {"ad": "Légifrance, Kararname 2002-1188", "tur": "resmî yayın"}],
     {"deger": True, "kaynak": "Senat l06-232 · Kararname 2002-1188", "not": "küçük: 1963 · 1989 · 2000-03-15 · "
      "2006-01-20 Belval takası (~8,8-9 ha; iki kaynak farklı sayı veriyor). " + KUCUK},
     {"t": "1820", "not": ""}, 1.5, KES_NE, "§1.9 · Meurthe-et-Moselle kesimi (1871'de Fransız kaldı); "
     "f lüksemburg künyesine hizalandı (hat 1820'den)")

# 1.10 Fransa–İsviçre (Leman Gölü kesimi C: göl hattı 1953'te çizildi)
LEMAN = box(6.25, 46.30, 6.79, 46.53)   # Hermance (gn 2660364, 6.243) ile Saint-Gingolph (gn 2979660, 6.796) arası
FRCH = [{"ad": "Viyana Kongresi Bildirisi", "tarih": "1815-03-20", "tur": "antlaşma"},
        {"ad": "Dappes Antlaşması", "tarih": "1862-12-08", "tur": "antlaşma"},
        {"ad": "IBS No. 11 France–Switzerland", "tur": "resmî sınır çalışması", "url": IBS % 11}]
FRCH_DEG = {"deger": True, "kaynak": "IBS 11 · Légifrance 2000-227/228", "not": "1953-02-25 sözleşmeleri (yürürlük 1957; "
            "14 küçük düzeltme + Leman Gölü hattı) · 1996-09-18 iki sözleşme · Senat: 1959-2002 arası 7 değişiklik. " + KUCUK}
_leman_dis = lambda c: not LEMAN.contains(Point(c))
# Savoy kesimleri (1860'a kadar Sardinya): her köşe en yakın Fransız yerleşiminin departmanına göre (GeoNames, 74 = Haute-Savoie)
_FRK = json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "D3BATI-FR-KOMUN-0917.json"), encoding="utf-8"))
from shapely.strtree import STRtree
_FRK_P = [Point(r[2], r[3]) for r in _FRK]
_FRK_T = STRtree(_FRK_P)
def dept(c):
    i = _FRK_T.nearest(Point(c))
    return _FRK[int(i)][4] if km(c, (_FRK[int(i)][2], _FRK[int(i)][3])) < 15 else None
SAVOY = lambda c: dept(c) == "74"
SAVOY_NOT = ("Savoy kesimi, köşenin en yakın Fransız yerleşiminin departmanıyla (GeoNames admin2 = 74 Haute-Savoie) "
             "ayrıldı — departman sınırının 1860 hattını izlediği bir VARSAYIMDIR (±2 km)")
DAPPES = box(5.98, 46.40, 6.16, 46.56)   # Vallée des Dappes (Les Rousses/La Cure çevresi) — kutu TAHMİNİ
JURA = lambda c: _leman_dis(c) and not ALSAS(c) and not SAVOY(c)
ekle("d1923-fr-ch", FR, CH, T_PARIS1814, "D", parcala(cizgi("CHE-FRA"), lambda c: JURA(c) and not DAPPES.contains(Point(c))),
     FRCH, FRCH_DEG, {"t": "1818/1824", "not": "Bern ve Neuchâtel belgeleri"}, 1.5, KES_NE,
     "§1.10 · Jura kesimi (Alsas, Savoy, Leman ve Dappes HARİÇ). IBS 11: 1814 hattı Dappes dışında ~140 yıl geçerli kaldı")
ekle("d1923-fr-ch-dappes", FR, CH, "1862-12-08", "D", parcala(cizgi("CHE-FRA"), lambda c: JURA(c) and DAPPES.contains(Point(c))),
     FRCH, FRCH_DEG, {"t": "1862", "not": ""}, 2.0, KES_NE + "; Dappes kutusu TAHMİNİ",
     "§1.10 · Vallée des Dappes: 1862 Bern antlaşmasıyla takas (746,5 ha, IBS 11)")
ekle("d1923-fr-ch-savoy", FR, CH, T_TORINO1860, "D", parcala(cizgi("CHE-FRA"), lambda c: _leman_dis(c) and SAVOY(c)),
     FRCH + [{"ad": "Torino Antlaşması (Savoy ve Nice Fransa'ya)", "tarih": "1860-03-24", "tur": "antlaşma", "url": IBS % 4}],
     FRCH_DEG, {"t": "1816 / 1818", "not": "Cenevre–Savoy: Torino 1816"}, 2.0, KES_NE + "; " + SAVOY_NOT,
     "§1.10 · Savoy kesimi (Cenevre güneyi ve Valais–Chablais): 1860'a kadar Sardinya–İsviçre sınırıydı")
ekle("d1923-fr-ch-alsas", FR, CH, "1920-01-10", "D", parcala(cizgi("CHE-FRA"), ALSAS),
     FRCH + [dict(VERSAY, madde="md. 27, 51", url="https://avalon.law.yale.edu/imt/partiii.asp")], FRCH_DEG,
     {"t": "1815-1816", "not": "Alsas–İsviçre (Basel) kesimi"}, 2.0, KES_NE + "; " + BOL_NOT,
     "§1.10 · Haut-Rhin kesimi: 1871-1918 Almanya–İsviçre sınırıydı; Versay md. 51 1871 öncesi delimitasyonu geri getirdi. "
     "Basel-Mulhouse havalimanı egemenliği değiştirmedi")
ekle("d1923-fr-ch-leman", FR, CH, T_TORINO1860, "C", parcala(cizgi("CHE-FRA"), icinde([LEMAN])), FRCH,
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
     "(ilk toplantı 1924-11-06), 1925'te kaldırıldı; C/fiili de savunulabilir. f: 1922 Anayasası md. 83 ilanı "
     "'not later than the sixth day of December' 1922 şart koşar — ilanın kendi günü kaynakta yok (künye günüyle aynı)")

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
ekle("d1923-es-pt-olivenza", ES, PT, "1801-06-06", "fiili",
     parcala(espt, lambda c: CUNCOS_LAT <= c[1] < CAIA_LAT), [BAGE, MNE],
     {"deger": False, "kaynak": "BAGE", "not": "hukukî hat bugün de YOK; fiilî hat 1801'den beri Guadiana"},
     {"t": "yok", "not": "hiç sınırlandırılmadı"}, 1.5,
     KES_NE + "; Caia/Cuncos ayrımı enlemle — ağız noktaları ÖLÇÜLMEDİ",
     "§3.21 · Caia → Cuncos: Olivenza anlaşmazlığı, Portekiz hattı tanımıyor ⇒ fiilî (D). "
     "f: BAGE 'Guadiana 1801 Badajoz Antlaşması'ndan beri sınır' diyor; gün Diputación de Badajoz Olivenza tarihçesinden (6 Haziran 1801)")
g = parcala(espt, lambda c: c[1] < CUNCOS_LAT)
xs = [x for l in g for x, _ in l.coords]; ys = [y for l in g for _, y in l.coords]
yok("d1923-es-pt-guney", ES, PT, "1801-06-06", (min(xs) - .05, min(ys) - .05, max(xs) + .05, CUNCOS_LAT),
    {"deger": True, "kaynak": "BAGE", "not": "1926-06-29 Lizbon sözleşmesi (onay 1927); tartışmalı alanlar (Contienda, "
     "Villanueva del Fresno, Valencia de Mombuey, Galiana) 1922-26'da bölündü"},
    [BAGE, MNE], "fiili — 1923'te bu kesimde hukukî hat yoktu",
    "§3.22 · Cuncos → Guadiana ağzı. f Badajoz Antlaşması 1801-06-06")

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

# =====================================================================
# GERİYE SARMA G1 — 1923-10-29 → 1918-11-11 (oturumlar/GERIYE-SARMA-0916.md ADIM 2)
# Yalnız 1923 hattı bu pencerede BAŞLAYAN parçalar geriye sarıldı; öncesi yeni kayıttır.
# Ateşkes/işgal hattı → sinif D yalnız koordinat kesinse; değilse kayıt YAZILMADI.
# =====================================================================
FRUS18 = "https://history.state.gov/historicaldocuments/frus1918Supp01v01/d%d"
COMPIEGNE = {"ad": "Almanya ile Ateşkes (Compiègne)", "madde": "A.2 (Alsas-Loren'in tahliyesi ve işgali)",
             "tarih": "1918-11-11", "tur": "ateşkes metni", "url": FRUS18 % 420,
             "not": "şartlar: FRUS 1918 Supp. 1 c.1 d384; imzalı metindeki değişiklikler d420",
             "alinti": "This armistice has been signed the 11th of November, 1918"}
VGIUSTI = {"ad": "Avusturya-Macaristan ile Ateşkes (Villa Giusti)", "madde": "I.3 (tahliye hattı)", "tarih": "1918-11-03",
           "tur": "ateşkes metni", "url": FRUS18 % 362,
           "not": "imza bildirimi FRUS d373 ('Austrian armistice signed'); yürürlük saati kaynakta yok",
           "alinti": "passing thence by Mounts Reschen and Brenner"}
G1_T_FRDE = "1920-01-10"

# G1-1 Fransa–Almanya: ateşkesten Versay yürürlüğüne fiilî Fransız idaresi (aynı 1870 hattı)
ekle("d1918-fr-de-isgal", FR, DE, "1918-11-11", "fiili", parcala(cizgi("DEU-FRA"), disinda([SAAR])),
     [COMPIEGNE, dict(VERSAY, madde="md. 51 (egemenliği ateşkes gününden itibaren iade eder)")],
     {"deger": True, "kaynak": "Senat rap. l01-276", "not": "E kaydıyla (d1923-fr-de) aynı geometri ve aynı küçük sapmalar"},
     {"t": "1870", "not": "18 Temmuz 1870 sınırı (Versay md. 27/3)"},
     1.5, KES_NE, "G1 · Alsas-Loren tahliye edilip Müttefiklerce işgal edildi (ateşkes A.2; tahliye süresi 14-15 gün, "
     "f ateşkes İMZASI — işgalin fiilen tamamlandığı gün kaynakta yok); hat 1870 hattı. "
     "Versay md. 51 egemenliği geriye yürür biçimde 1918-11-11'den iade etti ama antlaşma 1920-01-10'da yürürlüğe girdi "
     "⇒ bu aralık FİİLÎ (D). Saar kesimi E kaydındaki gibi YAZILMADI. Öncesi (1871 Frankfurt hattı) G2'nin işi",
     t=G1_T_FRDE, sinif_not="fiilî: işgal hattı = 1870 hattı (koordinatı E kaydıyla aynı vekil)")

# G1-2 Belçika–Almanya: Versay öncesi hat (Eupen-Malmedy Almanya'da, Moresnet tarafsız) — koordinat yok
yok("d1839-be-de-eski", BE, DE, "1839-04-19", (5.95, 50.12, 6.45, 50.80),
    {"deger": True, "kaynak": "IBS 7", "not": "Versay md. 32-34 ile Moresnet ve Eupen-Malmedy Belçika'ya geçti"},
    [{"ad": "Londra Antlaşması", "tarih": "1839-04-19", "tur": "antlaşma"},
     dict(VERSAY, madde="md. 32-34", url="https://avalon.law.yale.edu/imt/partiii.asp"),
     {"ad": "IBS No. 7 Belgium–Germany", "tur": "resmî sınır çalışması", "url": IBS % 7}],
    "E (Tarafsız Moresnet 1816'dan beri ortak yönetim — ayrıca C)",
    "G1 · f Belçika'nın bağımsızlığı; 1839-1918 arası G2/G3'te AYRICA denetlenecek", t="1920-01-10")

# G1-3 Danimarka–Almanya: 1864 Viyana hattı (Kongeå) — koordinat yok
yok("d1864-dk-de-kongea", DK, DE, "1864-10-30", (8.55, 55.30, 9.60, 55.62),
    {"deger": True, "kaynak": "IBS 81", "not": "Versay md. 109-114 + 1920 halk oylamaları; hat 1920'de güneye taşındı"},
    [{"ad": "Viyana Antlaşması", "tarih": "1864-10-30", "tur": "antlaşma", "kaynak": "BFSP c.54 s.522-530"},
     {"ad": "Kopenhag Sınır Sözleşmesi (iki küçük düzeltme)", "tarih": "1900-02-12", "tur": "antlaşma"},
     {"ad": "IBS No. 81 Denmark–Germany", "tur": "resmî sınır çalışması", "url": IBS % 81,
      "alinti": "moving the Dano - German boundary from the Elbe northward to the Konge Aa"}],
    "E", "G1 · Kongeå hattı; kutu Ribe–Kolding arası TAHMİNİ. 1920-01-10 → 1920-07-05 arası halk oylaması bölgesi "
    "uluslararası komisyon idaresindeydi — künyesi yok, kayıt YAZILMADI. 1864-1918 G2/G3'te denetlenecek", t="1920-01-10")

# G1-4 İtalya–İsviçre (Cima Garibaldi → Piz Lad): Villa Giusti tahliye hattının içinde kalan Vinschgau İtalyan işgalinde
ekle("d1918-it-ch-isgal", IT, CH, "1918-11-03", "fiili", CHIT_YENI,
     [VGIUSTI, IBS12],
     {"deger": False, "kaynak": "IBS 12", "not": "hat aynı (eski Avusturya–İsviçre sınırı)"},
     {"t": "1920-1927", "not": ""}, 1.5, KES_NE,
     "G1 · ateşkes tahliye hattı Stelvio'nun kuzeyinden Adige kaynaklarına ve Reschen'e uzanır ⇒ İsviçre sınırına "
     "komşu Vinschgau İtalyan işgalinde; sınırın kendisi değişmedi. f ateşkes İMZASI (yürürlük saati kaynakta yok). "
     "1918-11-03 → 1918-11-12 arası karşı taraf hukuken Habsburg'du; 1918 öncesi (Habsburg–İsviçre) G2'nin işi",
     t=SG_F, sinif_not="fiilî: ateşkes işgali; hat İsviçre sınırı (koordinat kesin)")

# G1-5 İtalya–Avusturya: ateşkes tahliye hattı su bölümünü izler; Toblach ve Tarvis çevresinde nihai hattan AYRILIR
KUT_ATESKES = KUT_ATIT + [box(12.10, 46.60, 12.50, 46.96),   # Toblach (Dobbiaco) → Karnik Alpler kavşağı
                          box(13.20, 46.40, 13.75, 46.62)]   # Pontebba → Tarvis → Predil
ekle("d1918-it-at-ateskes", IT, AT, "1918-11-12", "fiili", parcala(cizgi("AUT-ITA"), disinda(KUT_ATESKES)),
     [VGIUSTI, IBS58],
     {"deger": False, "kaynak": "IBS 58", "not": "su bölümü kesimleri Saint-Germain hattıyla aynı"},
     {"t": "yok", "not": "ateşkes hattı yerinde işaretlenmedi"}, 3.0,
     KES_NE + "; ateşkes metni hattı dağ adlarıyla tarif eder, su bölümü = nihai hat varsayımı (±3 km)",
     "G1 · Villa Giusti tahliye hattı (Reschen–Brenner–Ötz/Ziller tepeleri); Toblach geçişi ve Tarvis çevresi nihai "
     "hattan farklı ⇒ o kutular YAZILMADI. İtalyan birliklerinin hattın ötesine geçtiği dönemler kaynakta tarihli değil. "
     "f Avusturya Cumhuriyeti künyesi (1918-11-03 → 11-12 Habsburg dönemi G2'nin işi)",
     t=SG_F, sinif_not="fiilî: ateşkes tahliye hattı (koordinat su bölümünden)")

# G1-6 Petsamo kesimi Tartu'dan önce Rusya–Norveç sınırıydı (aynı 1826 hattı)
ISO_SOV = dict(ISO); ISO_SOV["sovyet-rusya"] = ["RUS"]
ekle("d1917-no-sov-petsamo", NO, "sovyet-rusya", "1917-11-07", "D", cizgi("NOR-RUS"),
     [{"ad": "Rusya–Norveç sınır sözleşmesi", "tarih": "1826", "tur": "antlaşma"},
      {"ad": "Tartu (Dorpat) Barışı", "madde": "md. 4", "tarih": "1920-10-14", "tur": "antlaşma metni",
       "url": "https://treaties.un.org/doc/Publication/UNTS/LON/Volume%203/v3.pdf",
       "alinti": "the former frontier between Russia and Norway"},
      {"ad": "IBS No. 24 Norway–USSR", "tur": "resmî sınır çalışması", "url": IBS % 24}],
     {"deger": True, "kaynak": "IBS 24", "not": "hat 1826 hattı; 1947 protokolü talveg farkı küçük"},
     {"t": "1896", "not": "1826 hattının işaretlemesi"}, 1.5, KES_NE,
     "G1 · Petsamo 1920-12-31'e kadar Rusya'nındı (Tartu md. 4). f sovyet-rusya künyesi; 1917 öncesi (Rusya "
     "İmparatorluğu / Geçici Hükûmet) G2'nin işi",
     iso=ISO_SOV, t="1920-12-31",
     sinif_not="E (1826 hattı, devlet halefiyeti); F kanıtı (tanınma) aranmadı — TANINMA-1923 bekleniyor")

# G1 DÜZELTMESİ (G2 sırasında bulundu): Alsas–İsviçre ve Lorraine–Lüksemburg kesimleri 1871-1918 Alman'dı
ekle("d1918-fr-ch-alsas-isgal", FR, CH, "1918-11-11", "fiili", parcala(cizgi("CHE-FRA"), ALSAS),
     [COMPIEGNE, dict(VERSAY, madde="md. 51")], FRCH_DEG, {"t": "1815-1816", "not": ""}, 2.0, KES_NE + "; " + BOL_NOT,
     "G1 · ateşkesle tahliye edilen Alsas'ın İsviçre sınırı fiilen Fransız idaresinde (Versay yürürlüğüne kadar)",
     t=G1_T_FRDE, sinif_not="fiilî: işgal; hat eski Fransa–İsviçre hattı")
ekle("d1918-fr-lu-lorraine-isgal", FR, LU, "1918-11-11", "fiili", parcala(cizgi("FRA-LUX"), LORRAINE),
     [COMPIEGNE, dict(VERSAY, madde="md. 51")], FRLU_DEG, {"t": "1820", "not": ""}, 2.0, KES_NE + "; " + BOL_NOT,
     "G1 · ateşkesle tahliye edilen Lorraine'in Lüksemburg sınırı fiilen Fransız idaresinde (Versay yürürlüğüne kadar)",
     t=G1_T_FRDE, sinif_not="fiilî: işgal; hat 1820 Kortrijk hattı")

# =====================================================================
# GERİYE SARMA G2 — 1918-11-11 → 1914-07-28
# 1914-18 cephe/işgal hatları (Batı cephesi, Belçika ve Lüksemburg'un Alman işgali, İtalya cephesi)
# koordinatı kesin olmadığı için YAZILMADI (şartname: kesin değilse kayıt yok, A/B geçerli).
# f < 1914-07-28 olan öncül kayıtlarda f 'bilinen son hat belgesi'dir; G3'te ayrıca denetlenecek.
# =====================================================================
G2_NOT = "G2 · f bilinen son hat belgesi/künye başlangıcı; öncesi G3'te denetlenecek"
FRANKFURT = dict(VERSAY, madde="Kısım III Kesim V girişi ve md. 51 (1871 Frankfurt Antlaşması'na atıf)",
                 url="https://avalon.law.yale.edu/imt/partiii.asp", alinti="Treaty of Frankfort of May 10, 1871")

# G2-1 Almanya–İsviçre (Alsas kesimi) ve Almanya–Lüksemburg (Lorraine kesimi) 1871-1918
ekle("d1871-de-ch-alsas", DE, CH, "1871-05-10", "D", parcala(cizgi("CHE-FRA"), ALSAS),
     [FRANKFURT] + FRCH[:1], FRCH_DEG, {"t": "1815-1816", "not": "eski Fransa–İsviçre hattı devralındı"},
     2.0, KES_NE + "; " + BOL_NOT, G2_NOT + ". Alsas'ın İsviçre sınırı 1871'de Almanya'ya geçti",
     t="1918-11-11", iso={DE: ["FRA"], CH: ["CHE"]})
ekle("d1890-de-lu-lorraine", DE, LU, "1890-11-23", "D", parcala(cizgi("FRA-LUX"), LORRAINE),
     [FRANKFURT] + FRLU_DAY, FRLU_DEG, {"t": "1820", "not": "Kortrijk hattı 1871'de Almanya'ya geçti"},
     2.0, KES_NE + "; " + BOL_NOT, G2_NOT + " (f lüksemburg künyesi; hat 1820'den, taraf 1871'den)",
     t="1918-11-11", iso={DE: ["FRA"], LU: ["LUX"]})

# G2-2 Fransa–Almanya 1871 Frankfurt hattı — koordinat yok
yok("d1871-fr-de-frankfurt", FR, DE, "1871-05-10", (5.90, 47.45, 7.20, 49.56),
    {"deger": True, "kaynak": "Versay md. 51", "not": "1918/1920'de 1870 hattı geri geldi; Frankfurt hattı kalktı"},
    [FRANKFURT, dict(COMPIEGNE)], "E",
    G2_NOT + ". Kutu Longwy–Avricourt–Vosges–Belfort hattını kaba kapsar (TAHMİNİ)", t="1918-11-11")

# G2-3 Habsburg–İsviçre (bugünkü AT–CH + Cima Garibaldi–Piz Lad kesimi)
ISO_HAB = dict(ISO); ISO_HAB["habsburg"] = ["AUT", "ITA"]   # Vinschgau bugün İtalya'da; `a` önce sorulur
HABCH = [{"ad": "Ren düzenlemesi antlaşması (Avusturya-Macaristan–İsviçre)", "tarih": "1892-12-30", "tur": "antlaşma",
          "not": "yürürlük 1893-07-21 (BMEIA listesi)"},
         {"ad": "BMEIA — Österreich in der Schweiz, Verträge", "tur": "resmî liste",
          "url": "https://www.bmeia.gv.at/oeb-bern/oesterreich-in-der-schweiz/vertraege"}]
ekle("d1893-hab-ch", "habsburg", CH, "1893-07-21", "D", parcala(chat, lambda c: c[1] < 47.49), HABCH, CHAT_DEG,
     {"t": "bulunamadı", "not": ""}, 1.5, KES_NE, G2_NOT, t="1918-11-11", iso=ISO_HAB)
ekle("d1893-hab-ch-bodensee", "habsburg", CH, "1893-07-21", "C", parcala(chat, lambda c: c[1] >= 47.49), HABCH,
     {"deger": False, "kaynak": "Kramsch 2015", "not": "göl kesimi bugün de çizilmemiş"},
     {"t": "yok", "not": ""}, None, "NE göl/ağız çizgisi kartografik uzlaşı", G2_NOT + ". Bodensee statüsü ihtilaflı ⇒ C",
     t="1918-11-11", iso=ISO_HAB)
ekle("d1893-hab-ch-vinschgau", "habsburg", CH, "1893-07-21", "D", CHIT_YENI, HABCH + [IBS12],
     {"deger": False, "kaynak": "IBS 12", "not": "hat 1919'da İtalya'ya devredildi, değişmedi"},
     {"t": "bulunamadı", "not": ""}, 1.5, KES_NE,
     G2_NOT + ". Cima Garibaldi → Piz Lad: Villa Giusti işgaliyle (1918-11-03) İtalya'nın fiilî sınırı oldu",
     t="1918-11-03", iso=ISO_HAB)

# G2-4 İtalya–Habsburg: Villa Giusti ile Habsburg'un sonu arası (8 gün) + 1866 Viyana hattı
ekle("d1918-it-hab-ateskes", IT, "habsburg", "1918-11-03", "fiili", parcala(cizgi("AUT-ITA"), disinda(KUT_ATESKES)),
     [VGIUSTI, IBS58], ATIT_DEG, {"t": "yok", "not": ""}, 3.0,
     KES_NE + "; ateşkes hattı su bölümünden (±3 km)",
     "G2 · d1918-it-at-ateskes kaydının Habsburg dönemi (1918-11-03 → 11-11)", t="1918-11-11", iso=ISO_HAB,
     sinif_not="fiilî: ateşkes tahliye hattı")
KARN = lambda c: 12.50 <= c[0] <= 13.20
VIYANA66 = {"ad": "Viyana Barış Antlaşması (Avusturya–İtalya)", "tarih": "1866-10-03", "tur": "antlaşma"}
IBS58_66 = dict(IBS58, alinti="one in 1866 for the section east of a point near the Dobbiaco")
ekle("d1866-it-hab-karn", IT, "habsburg", "1866-10-03", "D", parcala(cizgi("AUT-ITA"), KARN), [VIYANA66, IBS58_66],
     {"deger": False, "kaynak": "IBS 58", "not": "Karn Alpleri kesimi 1866 hattıdır; 1919'da korundu"},
     {"t": "1911-1912", "not": "uluslararası komisyon İsviçre'den Adriyatik'e bütün hattı yeniden işaretledi"},
     1.5, KES_NE + "; kesim lon 12,50-13,20 ile sınırlandı (Toblach ve Pontebba uçları dışarıda)",
     "G2 · savaş öncesi hattın bugünkü sınırla çakışan tek kesimi. 1915-05'ten itibaren cephe hattı YAZILMADI",
     t="1918-11-03", iso=ISO_HAB)
yok("d1866-it-hab-trentino", IT, "habsburg", "1866-10-03", (10.40, 45.60, 12.50, 46.70),
    {"deger": True, "kaynak": "IBS 58", "not": "Saint-Germain ile hat Brenner'e taşındı"},
    [VIYANA66, IBS58_66], "E", "G2 · Stelvio → Garda → Cadore → Toblach yakını; kutu TAHMİNİ", t="1918-11-03")
yok("d1866-it-hab-dogu", IT, "habsburg", "1866-10-03", (13.15, 45.60, 13.85, 46.55),
    {"deger": True, "kaynak": "IBS 58 · Rapallo 1920", "not": "Pontebba → Isonzo → Adriyatik kesimi kalktı"},
    [VIYANA66, IBS58_66], "E", "G2 · kutu TAHMİNİ", t="1918-11-03")

# G2-5 Rusya (Finlandiya Büyük Dükalığı) ile İsveç ve Norveç — aynı hatlar, üç Rus künyesi
RUS = [("rusya", None, "1917-03-15"), ("rusya-gecici-hukumet", "1917-03-15", "1917-11-07"),
       ("sovyet-rusya", "1917-11-07", "1917-12-06")]
FISE_DAY = [{"ad": "Fredrikshamn Barışı", "madde": "md. V", "tarih": "1809-09-17", "tur": "antlaşma"},
            {"ad": "Sınır düzenleme sözleşmesi", "tarih": "1810-11-20", "tur": "antlaşma"},
            {"ad": "MML — Suomen–Ruotsin rajankäynti 2006, §2.1 (1809-1917)", "tur": "resmî",
             "url": "https://www.maanmittauslaitos.fi/sites/maanmittauslaitos.fi/files/Suomen_valtakunnanrajat/FIN-SWE_Valtakunnanraja_Riksgr%C3%A4nsen_2006/FIN-SWE_Raja_Asiakirjat.pdf"}]
FINO_DAY = [{"ad": "Strömstad Antlaşması", "tarih": "1751-10-02", "tur": "antlaşma"},
            {"ad": "Rusya–Norveç sınır sözleşmesi", "tarih": "1826", "tur": "antlaşma"},
            {"ad": "IBS No. 24 Norway–USSR", "tur": "resmî sınır çalışması", "url": IBS % 24}]
for rid, f0, t0 in RUS:
    iso = dict(ISO); iso[rid] = ["FIN"]
    kisa = rid.split("-")[0] if rid != "rusya-gecici-hukumet" else "gecici"
    ekle(f"dg2-{kisa}-se", rid, SE, f0 or "1809-09-17", "D", cizgi("FIN-SWE"), FISE_DAY,
         {"deger": False, "kaynak": "MML 2006", "not": "kara/ırmak hattı aynı"}, {"t": "1810/1823/1888", "not": ""},
         1.5, KES_NE, G2_NOT + ". Finlandiya Büyük Dükalığı Rusya'ya bağlıydı", t=t0, iso=iso)
    ekle(f"dg2-{kisa}-no-bati", rid, NO, f0 or "1905-06-07", "D", cizgi("FIN-NOR"), FINO_DAY,
         {"deger": False, "kaynak": "SNL · MML", "not": ""}, {"t": "1897", "not": "Treriksröset"},
         1.5, KES_NE, G2_NOT + " (norvec künyesi 1905'ten)", t=t0, iso=iso)
    if rid != "sovyet-rusya":   # sovyet dönemi d1917-no-sov-petsamo'da
        iso2 = dict(ISO); iso2[rid] = ["RUS"]
        ekle(f"dg2-{kisa}-no-petsamo", rid, NO, f0 or "1905-06-07", "D", cizgi("NOR-RUS"), FINO_DAY,
             {"deger": True, "kaynak": "IBS 24", "not": "hat 1826 hattı; 1947 protokolü talveg farkı küçük"},
             {"t": "1896", "not": "1826 hattının işaretlemesi"}, 1.5, KES_NE,
             G2_NOT + " (norvec künyesi 1905'ten). Petsamo 1920'ye kadar Rusya'nındı (Tartu md. 4)",
             t=t0, iso=iso2)

# =====================================================================
# GERİYE SARMA G3 — 1914-07-28 → 1878-07-13 (Berlin) · 1.MURAT M-4153
# Bölgede bu pencerede HAT GEOMETRİSİNİ değiştiren kaynaklı bir olay bulunamadı; pencereye düşen
# 'bilinen son hat belgesi' başlangıçlarının (1879 · 1893 · 1894) öncesi YOK kutusudur.
# PENCERE_BASI: öncülün kendi başlangıcı kaynakta YOK ⇒ f pencere başı; bu bir DEĞİŞİKLİK tarihi değildir.
# Künye boşlukları: Norveç 1814-1905 ve Lüksemburg 1815-1890 künyesi yok ⇒ norvec/luksemburg kayıtları
# 1905/1890 öncesine SARILAMADI (D-KUNYE'ye bildirilecek).
# =====================================================================
PENCERE_BASI = T_VIYANA1815   # G4'te 1878-07-13'ten Viyana 1815'e uzatıldı (öncül başlangıcı hâlâ kaynakta yok)
PB_NOT = ("f Viyana 1815 (G4 pencere başı): öncülün kendi başlangıcı kaynakta yok — değişiklik tarihi DEĞİL; "
          "1815 öncesi G5'te")
g = cizgi("CHE-DEU")
xs = [x for l in g for x, _ in l.coords]; ys = [y for l in g for _, y in l.coords]
yok("dg3-ch-de-1879-oncesi", CH, DE, PENCERE_BASI, (min(xs) - .03, min(ys) - .03, max(xs) + .03, max(ys) + .03),
    {"deger": None, "kaynak": "bulunamadı", "not": "1879 antlaşması Untersee/Konstanz kesimini düzenledi; öncesiyle farkı ölçülmedi"},
    [{"ad": "Baden–İsviçre sınır antlaşması (Untersee)", "tarih": "1854-10-31", "tur": "antlaşma"},
     {"ad": "Baden–İsviçre antlaşması", "tarih": "1878-04-28", "tur": "antlaşma"},
     {"ad": "İsviçre–Almanya sınır antlaşması (Untersee/Konstanz)", "tarih": "1879-06-24", "tur": "antlaşma"}],
    "E (kara ve Untersee) · Obersee C", "G3 · " + PB_NOT, t="1879-06-24")
g = cizgi("AUT-CHE") + CHIT_YENI
xs = [x for l in g for x, _ in l.coords]; ys = [y for l in g for _, y in l.coords]
yok("dg3-hab-ch-1893-oncesi", "habsburg", CH, PENCERE_BASI, (min(xs) - .03, min(ys) - .03, max(xs) + .03, max(ys) + .03),
    {"deger": None, "kaynak": "bulunamadı", "not": "1892 Ren antlaşması sınırı Eski Ren'in ortasına bağladı; öncesiyle farkı ölçülmedi"},
    HABCH, "E", "G3 · Ren ve dağ kesimleri + Cima Garibaldi–Piz Lad. " + PB_NOT, t="1893-07-21")
g = cizgi("ESP-MAR", 2)
xs = [x for l in g for x, _ in l.coords]; ys = [y for l in g for _, y in l.coords]
yok("dg3-es-ma-melilla-1894-oncesi", ES, MA, "1862-06-21", (min(xs) - .02, min(ys) - .02, max(xs) + .02, max(ys) + .02),
    {"deger": None, "kaynak": "bulunamadı", "not": "1891 yeniden aplikasyon ve 1894 Merakeş sözleşmesinin hattı değiştirip değiştirmediği ölçülmedi"},
    [{"ad": "Tanca Demarkasyon Akdi", "tarih": "1862-06-21", "tur": "antlaşma", "not": "basında 1862-06-26 — ÇELİŞKİ"},
     {"ad": "Yeniden Aplikasyon Akdi", "tarih": "1891-05-01", "tur": "antlaşma", "not": "bir özette 1891-04-29 — ÇELİŞKİ"},
     {"ad": "İspanya hükümetinin meclise yazılı cevabı (2022-11-18)", "tur": "resmî",
      "url": "https://www.congreso.es/entradap/l14p/e24/e_0244503_n_000.pdf"}],
    "E", "G3 · Melilla 1862 demarkasyonu → 1894 Merakeş", t="1894-03-05")

# =====================================================================
# GERİYE SARMA G4 — 1878-07-13 → 1815-06-09 (Viyana) · 1.MURAT zincir sevki
# Alman Konfederasyonu devletleri (Prusya, Hannover, Baden, Bavyera) 'almanya' künyesiyle yazıldı
# (künye 962-1923 süreklidir; 'prusya' künyesi harita anahtarsız). İtalya'nın birleşme öncesi iç
# sınırları (Parma, Modena, Papalık, Toskana, Napoli) YAZILMADI — koordinat yok ve 1923 zincirimde değiller.
# Norveç (1814-1905) ve Lüksemburg (1815-1890) künyesi olmadığından o zincirler SARILAMADI.
# =====================================================================
T_PARIS1815 = "1815-11-20"; T_TORINO1816 = "1816-03-16"; T_AACHEN1816 = "1816-06-26"; T_KORTRIJK = "1820-03-28"
T_MEPPEN = "1824-07-02"; T_BELCIKA = "1830-10-04"; T_LONDRA1839 = "1839-04-19"; T_ZURIH = "1859-11-10"
T_TORINO1861 = "1861-03-07"; T_ITALYA = "1861-03-17"; T_VIYANA1866 = "1866-10-03"; T_VIYANA1864 = "1864-10-30"
SA = "sardinya-piyemonte"
G4_NOT = "G4"
def bb(parcalar, pay=0.03):
    xs = [x for l in parcalar for x, _ in l.coords]; ys = [y for l in parcalar for _, y in l.coords]
    return (min(xs) - pay, min(ys) - pay, max(xs) + pay, max(ys) + pay)
PARIS1815 = {"ad": "İkinci Paris Antlaşması", "tarih": T_PARIS1815, "tur": "antlaşma"}
PARIS1814 = {"ad": "Birinci Paris Antlaşması", "tarih": T_PARIS1814, "tur": "antlaşma",
             "not": "IBS 11 aynı antlaşmayı hem 30 hem 20 Mayıs 1814 diye veriyor — ÇELİŞKİ"}
VIYANA15 = {"ad": "Viyana Kongresi Nihaî Senedi", "tarih": T_VIYANA1815, "tur": "antlaşma", "url": IBS % 12,
            "alinti": "Article LXXX of the Congress of Vienna on June 9, 1815"}
KORTRIJK = {"ad": "Kortrijk Sınır Antlaşması (Fransa–Birleşik Hollanda)", "tarih": T_KORTRIJK, "tur": "antlaşma",
            "url": "https://www.de-lage-landen.com/article/een-verdrag-met-sporen-in-het-landschap"}

# G4-A Belçika hattı: 1830'a kadar Birleşik Hollanda Krallığı'nın, 1830-39 fiilî Belçika'nın
ISO_NLBE = {NL: ["BEL"], FR: ["FRA"], BE: ["BEL"], DE: ["DEU"]}
ekle("dg4-nl-fr-kortrijk", NL, FR, T_KORTRIJK, "D", cizgi("BEL-FRA"), [KORTRIJK],
     {"deger": False, "kaynak": "Milis (De Lage Landen)", "not": "tarihsiz küçük düzeltmeler dışında değişmedi"},
     {"t": "1820", "not": ""}, 1.5, KES_NE,
     "G4 · bugünkü Belçika–Fransa hattı 1820'de Fransa ile Birleşik Hollanda Krallığı arasında çizildi", t=T_BELCIKA, iso=ISO_NLBE)
yok("dg4-nl-fr-1820-oncesi", NL, FR, T_VIYANA1815, bb(cizgi("BEL-FRA")),
    {"deger": None, "kaynak": "bulunamadı", "not": "1815 Paris hattı ile Kortrijk delimitasyonu arasındaki fark ölçülmedi"},
    [PARIS1815, KORTRIJK], "E", "G4 · f Viyana 1815 (pencere başı); İkinci Paris Antlaşması'na kadar 1814 hattı", t=T_KORTRIJK)
ekle("dg4-be-fr-fiili", BE, FR, T_BELCIKA, "fiili", cizgi("BEL-FRA"), [KORTRIJK,
     {"ad": "Londra Antlaşması", "tarih": T_LONDRA1839, "tur": "antlaşma"}],
     {"deger": False, "kaynak": "Milis (De Lage Landen)", "not": ""}, {"t": "1820", "not": ""}, 1.5, KES_NE,
     "G4 · Belçika 1830'da fiilen ayrıldı, uluslararası tanınma ve hukukî sınır 1839 Londra Antlaşması'yla geldi. "
     "f belcika künyesine hizalandı (bağımsızlık ilanı; gün kaynakta doğrulanacak)", t=T_LONDRA1839, iso=ISO_NLBE,
     sinif_not="fiilî: tanınmamış devlet; hat Kortrijk hattı (koordinat kesin)")
yok("dg4-nl-de-belcika-dogu", NL, DE, T_AACHEN1816, (5.95, 50.12, 6.45, 50.80),
    {"deger": True, "kaynak": "IBS 7", "not": "1839'da Belçika'ya geçti; 1920'de Eupen-Malmedy ile yeniden değişti"},
    [{"ad": "Aachen Sınır Antlaşması (Hollanda–Prusya)", "tarih": T_AACHEN1816, "tur": "antlaşma"},
     {"ad": "IBS No. 7 Belgium–Germany", "tur": "resmî sınır çalışması", "url": IBS % 7}],
    "E (Tarafsız Moresnet 1816'dan ortak yönetim — C)", "G4 · 1830-39 arası fiilen Belçika tarafı; ayrıca yazılmadı. "
    "Aachen günü: IBS 31/IBS 7 26 Haziran, Kleve antlaşmasının birincil metni 25 Haziran diyor — ÇELİŞKİ",
    t=T_LONDRA1839)
yok("dg4-nl-de-1824-oncesi", NL, DE, T_VIYANA1815, bb(cizgi("DEU-NLD")),
    {"deger": None, "kaynak": "IBS 31", "not": "Hannover kesimi 1824 Meppen antlaşmasına kadar delimite edilmemişti"},
    [VIYANA15, {"ad": "Aachen Sınır Antlaşması (Hollanda–Prusya)", "tarih": T_AACHEN1816, "tur": "antlaşma"},
     {"ad": "Meppen Sınır Antlaşması (Hollanda–Hannover)", "tarih": T_MEPPEN, "tur": "antlaşma"},
     {"ad": "IBS No. 31 Germany–Netherlands", "tur": "resmî sınır çalışması", "url": IBS % 31}],
    "E (Prusya kesimi 1816'dan) · Hannover kesimi C", "G4 · f Viyana 1815", t=T_MEPPEN)

# G4-B Fransa–Almanya 1815-1871 (1870 hattı) ve Alsas–İsviçre
yok("dg4-fr-de-1815", FR, DE, T_PARIS1815, (5.90, 47.55, 8.30, 49.60),
    {"deger": None, "kaynak": "bulunamadı", "not": "1815 hattının 1870'e kadar (Versay'ın '18 Temmuz 1870 sınırı') aynı kaldığını "
     "söyleyen kaynak BULUNAMADI — bugünkü çizgi vekil olarak kullanılamadı"},
    [PARIS1815, dict(VERSAY, madde="md. 27(3) '18 Temmuz 1870 sınırı', md. 51")], "E",
    "G4 · İkinci Paris Antlaşması'ndan Frankfurt'a kadar. Kutu TAHMİNİ", t="1871-05-10")
yok("dg4-fr-de-1814", FR, DE, T_PARIS1814, (5.90, 48.60, 8.30, 49.60),
    {"deger": True, "kaynak": "HLS 'Pariser Frieden'", "not": "1814 Birinci Paris hattı 1815 İkinci Paris Antlaşması'yla yeniden düzenlendi"},
    [PARIS1814, PARIS1815], "E", "G4 · 1814 Birinci Paris hattı; koordinat yok. Kutu TAHMİNİ (Saar–Pfalz)", t=T_PARIS1815)
ekle("dg4-fr-ch-alsas", FR, CH, T_PARIS1814, "D", parcala(cizgi("CHE-FRA"), ALSAS), [PARIS1814] + FRCH,
     {"deger": True, "kaynak": "IBS 11", "not": "1814 hattı; 1953 kuzey düzeltmeleri küçük"}, {"t": "1818", "not": "Bern sözleşmesi"},
     2.0, KES_NE + "; " + BOL_NOT, "G4 · Alsas–İsviçre (Basel) kesimi 1871'e kadar Fransız", t="1871-05-10")

# G4-C Fransa–İsviçre: Dappes öncesi ve Savoy'un Sardinya dönemi
yok("dg4-fr-ch-dappes-oncesi", FR, CH, T_PARIS1814, DAPPES.bounds,
    {"deger": True, "kaynak": "IBS 11", "not": "Dappes vadisi 1815 bildirisiyle İsviçre'ye verildi, 1862'de takas edildi"},
    FRCH, "E", "G4 · kutu TAHMİNİ", t="1862-12-08")
ISO_SA = dict(ISO); ISO_SA[SA] = ["FRA", "ITA"]
_sv = parcala(cizgi("CHE-FRA"), lambda c: _leman_dis(c) and SAVOY(c))
SAV_CEN = [l for l in _sv if l.centroid.x < 6.5]
SAV_VAL = [l for l in _sv if l.centroid.x >= 6.5]
TORINO16 = {"ad": "Torino Antlaşması (Sardinya–İsviçre/Cenevre)", "tarih": T_TORINO1816, "tur": "antlaşma",
            "not": "Viyana md. LXXX'in Savoy komünlerini Cenevre'ye devrini uyguladı"}
ekle("dg4-sa-ch-cenevre", SA, CH, T_TORINO1816, "D", SAV_CEN, [VIYANA15, TORINO16] + FRCH[:1],
     FRCH_DEG, {"t": "1816", "not": ""}, 2.0, KES_NE + "; " + SAVOY_NOT,
     "G4 · Cenevre güneyi: 1860'a kadar Sardinya–İsviçre", t=T_TORINO1860, iso=ISO_SA)
yok("dg4-sa-ch-cenevre-1816-oncesi", SA, CH, T_VIYANA1815, bb(SAV_CEN),
    {"deger": True, "kaynak": "IBS 12", "not": "Viyana md. LXXX devri 1816'da uygulandı"}, [VIYANA15, TORINO16], "E",
    "G4 · f Viyana 1815", t=T_TORINO1816)
ekle("dg4-sa-ch-valais", SA, CH, T_VIYANA1815, "D", SAV_VAL, [VIYANA15] + FRCH[:1], FRCH_DEG,
     {"t": "bulunamadı", "not": ""}, 2.0, KES_NE + "; " + SAVOY_NOT,
     "G4 · Valais–Chablais/Faucigny: 1860'a kadar Sardinya–İsviçre. f Viyana 1815 (Valais İsviçre'ye katıldı)",
     t=T_TORINO1860, iso=ISO_SA)
ekle("dg4-sa-ch-leman", SA, CH, T_VIYANA1815, "C", parcala(cizgi("CHE-FRA"), icinde([LEMAN])), [VIYANA15] + FRCH,
     {"deger": True, "kaynak": "IBS 11", "not": "göl hattı orta hat ilkesiyle; 1953'te düz çizgilere çevrildi"},
     {"t": "yok", "not": ""}, 2.0, KES_NE, "G4 · Leman'ın Savoy kıyısı 1860'a kadar Sardinya'nın", t=T_TORINO1860, iso=ISO_SA)

# G4-D Fransa–Sardinya/İtalya
IBS4_TOR = dict(IBS4, alinti="Under the terms of the Treaty of Turin (March 24, 1860)")
yok("dg4-sa-fr-var", SA, FR, T_PARIS1815, (5.60, 43.50, 7.80, 46.50),
    {"deger": True, "kaynak": "IBS 4", "not": "1860'ta Savoy ve Nice Fransa'ya geçti; Var ve Savoy hatları kalktı"},
    [PARIS1815, IBS4_TOR], "E", "G4 · Var nehri ve Savoy–Dauphiné/Bresse hattı; koordinat yok, kutu TAHMİNİ", t=T_TORINO1860)
yok("dg4-sa-fr-1860-komisyon", SA, FR, T_TORINO1860, (6.60, 43.75, 7.80, 45.95),
    {"deger": True, "kaynak": "IBS 4", "not": "karma komisyonun hattı 1861 sözleşmesiyle kesinleşti"},
    [IBS4_TOR], "C (antlaşma hattı karma komisyona bıraktı)", "G4", t=T_TORINO1861)
ISO_SAI = dict(ISO); ISO_SAI[SA] = ["ITA"]
TORINO61 = {"ad": "Torino sınır sözleşmesi", "tarih": T_TORINO1861, "tur": "antlaşma", "url": IBS % 4}
ekle("dg4-sa-fr-1861", SA, FR, T_TORINO1861, "D", parcala(cizgi("FRA-ITA"), disinda(KUT_FRIT.values())), [TORINO61, IBS4],
     {"deger": False, "kaynak": "IBS 4", "not": "kutu dışı kesimler 1947'de değişmedi"}, {"t": "1861", "not": ""}, 1.5, KES_NE,
     "G4 · İtalya Krallığı'nın ilanına kadar 10 gün Sardinya'nın", t=T_ITALYA, iso=ISO_SAI)
for k, kutu in KUT_FRIT.items():
    yok(f"dg4-sa-fr-1861-{k}", SA, FR, T_TORINO1861, kutu.bounds,
        {"deger": True, "kaynak": "IBS 4", "not": ALAN[k] + " 1947'de değişti"}, [TORINO61, IBS4], "E", "G4", t=T_ITALYA)

# G4-E İtalya–İsviçre eski kesimi: Piyemonte (batı) ve Lombardiya (doğu); ayrım Lago Maggiore
MAGGIORE = 8.76
IT_BATI = [l for l in parcala(CHIT_ESKI, lambda c: c[0] < MAGGIORE)]
IT_DOGU = [l for l in parcala(CHIT_ESKI, lambda c: c[0] >= MAGGIORE)]
IBS12_61 = dict(IBS12, alinti="resolved eleven disputes on the Ticino boundary on the basis of")
ITCH_DEG = {"deger": True, "kaynak": "IBS 12", "not": "1861 Lugano ve 1863 sözleşmeleri anlaşmazlıkları Varese esasına göre çözdü; "
            "'little territorial transfer' · sonraki küçük düzeltmeler d1923-it-ch'de. " + KUCUK}
ekle("dg4-sa-ch-piyemonte", SA, CH, T_VIYANA1815, "D", IT_BATI, [VIYANA15, IBS12_61], ITCH_DEG, {"t": "bulunamadı", "not": ""},
     2.0, KES_NE + "; Piyemonte/Lombardiya ayrımı Lago Maggiore (lon 8,76) ile", "G4 · f Viyana 1815", t=T_ITALYA, iso=ISO_SAI)
ISO_HABI = dict(ISO); ISO_HABI["habsburg"] = ["ITA"]
ekle("dg4-hab-ch-lombardiya", "habsburg", CH, T_VIYANA1815, "D", IT_DOGU,
     [VIYANA15, {"ad": "Varese Antlaşması", "tarih": "1752-08-02", "tur": "antlaşma", "url": IBS % 12}, IBS12_61], ITCH_DEG,
     {"t": "1754-1755", "not": "Varese sonrası karma komisyonlar"}, 2.0, KES_NE + "; ayrım lon 8,76",
     "G4 · Lombardiya-Venedik Krallığı (Avusturya) — atlas künyesi 'milano-dukaligi' 1859'a kadar sürer; taraf Habsburg yazıldı",
     t=T_ZURIH, iso=ISO_HABI)
ekle("dg4-sa-ch-lombardiya", SA, CH, T_ZURIH, "D", IT_DOGU, [IBS12_61], ITCH_DEG, {"t": "bulunamadı", "not": ""},
     2.0, KES_NE + "; ayrım lon 8,76", "G4 · Zürih'ten İtalya'nın ilanına kadar", t=T_ITALYA, iso=ISO_SAI)

# G4-F İtalya/Sardinya–Habsburg iç hatları (koordinat yok)
LOMVEN = (10.30, 44.90, 11.40, 46.60)
yok("dg4-it-hab-venedik", IT, "habsburg", T_ITALYA, LOMVEN,
    {"deger": True, "kaynak": "IBS 58", "not": "1866'da Venedik İtalya'ya geçti"},
    [dict(IBS58_66), {"ad": "Viyana Barış Antlaşması (Avusturya–İtalya)", "tarih": T_VIYANA1866, "tur": "antlaşma"}], "E",
    "G4 · Lombardiya–Venedik hattı (Mincio/Garda) ve Lombardiya–Tirol; kutu TAHMİNİ", t=T_VIYANA1866)
yok("dg4-sa-hab-venedik", SA, "habsburg", T_ZURIH, LOMVEN,
    {"deger": True, "kaynak": "IBS 58", "not": ""}, [dict(IBS58_66)], "E", "G4 · kutu TAHMİNİ", t=T_ITALYA)
yok("dg4-sa-hab-ticino", SA, "habsburg", T_VIYANA1815, (8.50, 44.90, 9.30, 46.20),
    {"deger": True, "kaynak": "bulunamadı", "not": "1859'da Lombardiya Sardinya'ya geçti; Ticino nehri hattı kalktı"},
    [VIYANA15], "E", "G4 · Piyemonte–Lombardiya (Ticino nehri, Lago Maggiore doğu kıyısı); kutu TAHMİNİ", t=T_ZURIH)

# G4-G İberya ve Fas: ayrıntılı delimitasyondan önceki hatlar (koordinat yok)
PIRENE = {"ad": "Pireneler Antlaşması", "tarih": "1659-11-07", "tur": "antlaşma"}
for no, isim in ((1, "bati"), (2, "dogu"), (3, "llivia")):
    yok(f"dg4-fr-es-{isim}-1868-oncesi", FR, ES, T_VIYANA1815, bb(cizgi("ESP-FRA", no)),
        {"deger": True, "kaynak": "Capdevila (IGN)", "not": "Bayonne antlaşmaları (1856-1868) hattı ayrıntılı çizdi"},
        [PIRENE, CAPDEVILA] + BAYONNE[:1], "C (1659 hattı, ayrıntılı delimitasyon yok)",
        "G4 · f Viyana 1815 (pencere başı). Batı kesiminin 1856 bölümü 1859'dan itibaren delimiteydi — bölünmedi "
        "(Navarra–Aragon kavşak çıpası yok)", t="1868-07-11")
yok("dg4-es-pt-kuzey-1866-oncesi", ES, PT, T_VIYANA1815, bb(parcala(espt, lambda c: c[1] >= CAIA_LAT)),
    {"deger": True, "kaynak": "BAGE", "not": "1864 Lizbon antlaşması ve 1866 ekleri hattı ayrıntılı çizdi; Couto Misto İspanya'ya"},
    [LIZBON, BAGE], "C (ayrıntılı delimitasyon yok; Couto Misto tarafsız)", "G4 · f Viyana 1815", t="1866-11-04")
WADRAS = {"ad": "Wad-Ras Antlaşması", "tarih": "1860-04-26", "tur": "antlaşma",
          "url": "https://ejercito.defensa.gob.es", "not": "gün yalnız Museo del Ejército sayfasında (metni Vikipedi'yle aynı) — ZAYIF"}
yok("dg4-es-ma-ceuta-1860-oncesi", ES, MA, T_VIYANA1815, bb(cizgi("ESP-MAR", 1), 0.04),
    {"deger": True, "kaynak": "Bermejo García vd. 2020", "not": "Wad-Ras Ceuta'yı genişletti"}, [WADRAS], "E (dar eski sınır)",
    "G4 · f Viyana 1815", t="1860-11-17")
yok("dg4-es-ma-melilla-1862-oncesi", ES, MA, T_VIYANA1815, bb(cizgi("ESP-MAR", 2), 0.04),
    {"deger": True, "kaynak": "İspanya hükümeti cevabı 2022", "not": "1859-1862 sözleşmeleriyle genişledi"},
    [{"ad": "Tetuan Sözleşmesi", "tarih": "1859-08-24", "tur": "antlaşma"}], "E (dar eski sınır)",
    "G4 · f Viyana 1815", t="1862-06-21")

# G4-H Danimarka–Alman Konfederasyonu (Eider/Elbe)
yok("dg4-dk-de-eider", DK, DE, T_VIYANA1815, (8.50, 53.30, 11.00, 54.50),
    {"deger": True, "kaynak": "IBS 81", "not": "1864 Viyana Antlaşması'yla sınır Kongeå'ya taşındı"},
    [VIYANA15, {"ad": "Viyana Antlaşması", "tarih": T_VIYANA1864, "tur": "antlaşma", "kaynak": "BFSP c.54 s.522-530"},
     {"ad": "IBS No. 81 Denmark–Germany", "tur": "resmî sınır çalışması", "url": IBS % 81,
      "alinti": "moving the Dano - German boundary from the Elbe northward to the Konge Aa"}],
    "E (düklükler üzerinden karmaşık nitelikli sınır — ayrıntısı ölçülmedi)",
    "G4 · Eider ve Elbe; kutu TAHMİNİ. 1848-51 ve 1864 savaş hatları yazılmadı", t=T_VIYANA1864)

# =====================================================================
# GERİYE SARMA G5 — 1815-06-09 → 1774-07-21 · G6 → 1699-01-26 · G7 → 1606-11-11
# Bu dönemlerde bölgenin hatları Devrim/Napolyon savaşları ve 17-18. yy barışlarıyla defalarca
# değişti ve bugünkü açık geometride KARŞILIKLARI YOK. Bu yüzden kayıtların çoğu YOK kutusudur:
# 'bu kutuda E/D çizilmez, A/B geçerli'. Kutu, zincirin 1815 sonrası hattını kaba kapsar (TAHMİNİ).
# İstisna: Strömstad 1751 hattı (SNL: bugün de yürürlükte) — Danimarka-Norveç ile İsveç arasında E.
# Dalga sınırında (DB) değişiklik yoksa YOK kaydının f'si bir sonraki dalga başına uzatılır; bu bir
# değişiklik tarihi DEĞİLDİR (not alanında yazılı). Künye sınırları (fransa → fransa-cumhuriyet
# 1792-09-22 · savoya → sardinya-piyemonte 1720-08-02 · navarra 1620-10-19) kayıtları böler.
# =====================================================================
T_G5, T_G6, T_G7 = "1774-07-21", "1699-01-26", "1606-11-11"
T_FRANSA = "1792-09-22"; T_SAVOYA = "1720-08-02"; T_NAVARRA = "1620-10-19"
T_KIEL = "1814-01-14"; T_STROMSTAD = "1751-10-02"
DB_NOT = "f dalga başıdır (öncülün başlangıcı ölçülmedi) — değişiklik tarihi DEĞİL"
def yok_zincir(id_, taraflar_donem, kutu, dayanak, sinif_1923, not_):
    """taraflar_donem: [(a, b, f, t, ek_not), ...] — her dönem için bir YOK kaydı."""
    for i, (a, b, f, t, ek) in enumerate(taraflar_donem):
        yok(f"{id_}-{i+1}" if len(taraflar_donem) > 1 else id_, a, b, f, kutu,
            {"deger": True, "kaynak": "bulunamadı", "not": "hat sonraki antlaşmalarla değişti; koordinat yok"},
            dayanak, sinif_1923, not_ + (" · " + ek if ek else ""), t=t)

FRCH_BB = bb(parcala(cizgi("CHE-FRA"), lambda c: not SAVOY(c)))
SAVCH_BB = bb(parcala(cizgi("CHE-FRA"), SAVOY))
FRCH_G5 = [PARIS1814, {"ad": "IBS No. 11 France–Switzerland", "tur": "resmî sınır çalışması", "url": IBS % 11,
                       "alinti": "the 1814 boundary remained valid for almost 140 years"}]
# Fransa–İsviçre (Jura + Alsas): 1814 öncesi
yok_zincir("dg5-fr-ch-jura", [
    ("fransa", CH, T_G7, T_FRANSA, "Franş-Konte 1678'e kadar İspanyol; Basel Prens-Piskoposluğu ve Neuchâtel ayrı yapılar"),
    (FR, CH, T_FRANSA, T_PARIS1814, "Devrim/Napolyon ilhakları (Mont-Terrible, Cenevre, Valais) hattı defalarca değiştirdi")],
    FRCH_BB, FRCH_G5, "E/C (dönem içinde değişken)", "G5-G7 · f dalga başı " + T_G7 + " (" + DB_NOT + ")")
# Savoy–İsviçre: Sardinya/Savoya ve Fransız dönemi
yok_zincir("dg5-sa-ch", [
    ("savoya", CH, T_G7, T_SAVOYA, "Cenevre Cumhuriyeti ayrı devletti (künye yok)"),
    (SA, CH, T_SAVOYA, "1792-11-27", "Cenevre Cumhuriyeti ayrı devletti (künye yok)"),
    (FR, CH, "1792-11-27", T_VIYANA1815, "Savoy 1792-11-27'de Fransa'ya katıldı; Cenevre 1798-04-26, Valais 1810-11-12 "
     "Fransa'ya katıldı (HLS)")],
    SAVCH_BB, [VIYANA15, dict(IBS12, alinti="parts of Sardinia (Savoy) to Switzerland (Geneva)")],
    "E (dönem içinde değişken)", "G5-G7 · " + DB_NOT + " (ilk dönem)")
# Fransa–Savoya/Sardinya (Alpler, Var)
yok_zincir("dg5-sa-fr", [
    ("savoya", "fransa", T_G7, T_SAVOYA, ""),
    (SA, "fransa", T_SAVOYA, T_FRANSA, "1760 Torino sınır antlaşması hattı düzenledi"),
    (SA, FR, T_FRANSA, "1792-11-27", ""),
    (SA, FR, T_PARIS1814, T_PARIS1815, "1814 hattı: Savoy'un bir kısmı Fransa'da")],
    (5.60, 43.50, 7.80, 46.50), [IBS4_TOR, PARIS1814, PARIS1815], "E",
    "G5-G7 · 1792-1814 arası Savoy ve Nice Fransız ilhakında — o dönem için Sardinya–Fransa kaydı yok. " + DB_NOT)
# İtalya–İsviçre eski kesimi: 1815 öncesi (Valtellina 1797'ye kadar Graubünden'in)
yok_zincir("dg5-it-ch", [
    ("milano-dukaligi", CH, T_G7, "1797-10-10", "Ticino–Milano: 1752 Varese Antlaşması; Valtellina 1797-10-10'da Cisalpin'e "
     "katılana kadar Graubünden'e tâbiydi (HLS 'Veltlin')"),
    ("savoya", CH, T_G7, T_SAVOYA, "Piyemonte/Ossola–Valais/Ticino"),
    (SA, CH, T_SAVOYA, "1802-09-11", "Piyemonte 1802-09-11'de Fransa'ya ilhak edildi (Cavicchioli, Italies 6)")],
    bb(CHIT_ESKI), [VIYANA15, {"ad": "Varese Antlaşması", "tarih": "1752-08-02", "tur": "antlaşma", "url": IBS % 12,
                                "alinti": "the first serious attempt at methodical and systematic border delimitation"}],
    "E/C (dönem içinde değişken)", "G5-G7 · 1797-1815 Cisalpin/İtalya Cumhuriyeti ve Krallığı ile 1802-1815 Fransız "
    "Piyemontesi künyesiz/ayrı — yazılmadı. " + DB_NOT)
# Güney Hollanda (Belçika) – Fransa
yok_zincir("dg5-guneyhol-fr", [
    ("ispanya", "fransa", T_G7, "1714-03-07", "İspanyol Hollandası; 1659/1668/1678/1697 barışları hattı değiştirdi"),
    ("habsburg", "fransa", "1714-03-07", T_FRANSA, "Avusturya Hollandası (Rastatt)"),
    ("habsburg", FR, T_FRANSA, "1795-10-01", "1795-10-01'de Fransa'ya ilhak (MJP d1795belgique)")],
    bb(cizgi("BEL-FRA")), [KORTRIJK], "E (dönem içinde değişken)",
    "G5-G7 · 1795-1815 Belçika Fransız ilhakında — sınır yok. " + DB_NOT)
# Hollanda Cumhuriyeti – Alman devletleri; Hollanda – İspanyol/Avusturya Hollandası
yok_zincir("dg5-nl-de", [("hollanda", DE, T_G7, "1810-07-09", "Holland 1810-07-09'da Fransa'ya ilhak edildi (parlement.com)")],
    bb(cizgi("DEU-NLD")), [{"ad": "IBS No. 31 Germany–Netherlands", "tur": "resmî sınır çalışması", "url": IBS % 31}],
    "E/C (dönem içinde değişken)", "G5-G7 · 1810 ilhakından 1815'e kadarki dönem ayrıca yazılmadı. " + DB_NOT)
yok_zincir("dg5-nl-guneyhol", [
    ("hollanda", "ispanya", T_G7, "1714-03-07", "1609-04-09 On İki Yıl Ateşkesi (Nationaal Archief)"),
    ("hollanda", "habsburg", "1714-03-07", "1795-10-01", "")],
    (3.30, 50.70, 6.10, 51.55), [{"ad": "Londra Antlaşması", "tarih": T_LONDRA1839, "tur": "antlaşma"}],
    "E (dönem içinde değişken)", "G5-G7 · bugünkü Belçika–Hollanda hattının tarihî öncülü; kutu TAHMİNİ. " + DB_NOT)
# Fransa–Almanya (Alman devletleri)
yok_zincir("dg5-fr-de", [
    ("fransa", DE, T_G7, T_FRANSA, "Lorraine 1766-02-23'te Fransa'ya geçti (Musée Lorrain); dönemin öteki değişiklikleri ölçülmedi"),
    (FR, DE, T_FRANSA, T_PARIS1814, "1801-02-09 Lunéville Antlaşması (MJP)")],
    (5.80, 47.40, 8.40, 49.70), [PARIS1814, dict(VERSAY, madde="md. 51")], "E (dönem içinde değişken)",
    "G5-G7 · kutu TAHMİNİ. " + DB_NOT)
# Fransa–İspanya ve Navarra
yok_zincir("dg5-fr-es", [
    ("fransa", "ispanya", "1659-11-07", T_FRANSA, "Pireneler Antlaşması hattı"),
    (FR, "ispanya", T_FRANSA, T_VIYANA1815, "savaş dönemi işgal hatları yazılmadı")],
    bb(cizgi("ESP-FRA", 1) + cizgi("ESP-FRA", 2)), [PIRENE, CAPDEVILA], "C (ayrıntılı delimitasyon yok)", "G5-G7")
yok("dg7-fr-es-1659-oncesi", "fransa", "ispanya", T_G7, (-1.90, 42.30, 3.30, 43.45),
    {"deger": True, "kaynak": "bulunamadı", "not": "Rusiyon ve Cerdanya 1659'da Fransa'ya geçti"},
    [PIRENE], "C", "G7 · Rusiyon/Cerdanya İspanyol; Aşağı Navarra 1620'ye kadar ayrı krallık (navarra künyesi). " + DB_NOT,
    t="1659-11-07")
# İspanya–Portekiz: 1866 öncesi zincir ve Olivenza öncesi
yok_zincir("dg5-es-pt-kuzey", [(ES, PT, T_G7, T_VIYANA1815, "")],
    bb(parcala(espt, lambda c: c[1] >= CAIA_LAT)), [LIZBON, BAGE], "C", "G5-G7 · " + DB_NOT)
yok("dg5-es-pt-olivenza-oncesi", ES, PT, T_G7, (-7.60, 38.20, -6.90, 38.95),
    {"deger": True, "kaynak": "BAGE", "not": "Olivenza 1801'e kadar Portekiz'indi; Guadiana sınır değildi"},
    [BAGE], "C", "G5-G7 · kutu TAHMİNİ. " + DB_NOT, t="1801-06-06")
# İspanya–Fas
for isim, no, t_son in (("ceuta", 1, T_VIYANA1815), ("melilla", 2, T_VIYANA1815)):
    yok(f"dg5-es-ma-{isim}", ES, MA, T_G7, bb(cizgi("ESP-MAR", no), 0.04),
        {"deger": True, "kaynak": "bulunamadı", "not": "sonraki sözleşmelerle genişledi"}, [WADRAS], "E/C (dar eski sınır)",
        "G5-G7 · Ceuta 1668-02-13 Lizbon Antlaşması'yla İspanya'da kaldı (ANTT) — öncesi ayrıca yazılmadı. " + DB_NOT,
        t=t_son)
# Danimarka–Alman devletleri (Eider/Elbe)
yok("dg5-dk-de-eider", DK, DE, T_G7, (8.50, 53.30, 11.00, 54.50),
    {"deger": True, "kaynak": "IBS 81", "not": "1864'e kadar Elbe hattı (IBS 81); dönem içi değişiklikler ölçülmedi"},
    [{"ad": "IBS No. 81 Denmark–Germany", "tur": "resmî sınır çalışması", "url": IBS % 81}], "E/C (karmaşık)",
    "G5-G7 · kutu TAHMİNİ. " + DB_NOT, t=T_VIYANA1815)
# Danimarka-Norveç – İsveç: Strömstad 1751 hattı (bugünkü Norveç–İsveç çizgisi)
SNL = {"ad": "Store norske leksikon, 'riksgrensen'", "tur": "akademik ansiklopedi", "url": "https://snl.no/riksgrensen",
       "alinti": "gjelder fortsatt"}
STROM = {"ad": "Strömstad Antlaşması + Lapp ek maddesi", "tarih": T_STROMSTAD, "tur": "antlaşma"}
ekle("dg6-dk-se-stromstad", DK, SE, T_STROMSTAD, "D", cizgi("NOR-SWE"), [STROM, SNL],
     {"deger": False, "kaynak": "SNL", "not": "1751 antlaşması bugün de yürürlükte"}, {"t": "1752-1766", "not": "yerinde işaretleme"},
     1.5, KES_NE, "G6 · Danimarka-Norveç ile İsveç arasındaki hat; 1814 Kiel'le Norveç İsveç'e bağlandı (1814-1905 Norveç künyesi yok)",
     t=T_KIEL, iso={DK: ["NOR"], SE: ["SWE"]})
yok("dg6-dk-se-1751-oncesi", DK, SE, T_G7, bb(cizgi("NOR-SWE")),
    {"deger": True, "kaynak": "SNL", "not": "1751'e kadar hat ayrıntılı çizilmemişti; 1645 ve 1658 barışları illeri değiştirdi"},
    [STROM, SNL], "C (il sınırları; ayrıntılı delimitasyon yok)",
    "G6-G7 · Jämtland/Härjedalen 1645, Bohuslän 1658 İsveç'e geçti — ayrıca bölünmedi. " + DB_NOT, t=T_STROMSTAD)
yok("dg6-dk-se-finnmark", DK, SE, T_G7, bb(cizgi("FIN-NOR")),
    {"deger": None, "kaynak": "bulunamadı", "not": "1751 hattının bugünkü Finlandiya–Norveç kesimindeki ucu ölçülmedi"},
    [STROM, SNL], "E/C", "G5-G7 · Finlandiya 1809'a kadar İsveç'in; 1809-1814 Rusya–Danimarka-Norveç — ayrıca yazılmadı. " + DB_NOT,
    t="1809-09-17")

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
