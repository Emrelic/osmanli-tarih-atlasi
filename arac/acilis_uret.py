# ACILIS-PERDESI-1117 — açılış perdesinin verisini üretir (Emre, 17 Kasım 2026).
#   py arac/acilis_uret.py            → data/acilis_siluet.js VERİ bloğu + img/acilis/portreler.jpg
#   py arac/acilis_uret.py --galeri <yol.html>   → bütün silüetleri gözle denetim sayfası
# Kurucu kod (data/acilis_siluet.js içindeki IIFE) elle yazılmıştır; bu betik ona DOKUNMAZ.
#
# Kaynaklar (künye: img/acilis/KAYNAK.md):
#   · bugünkü devletler: veri-kaynak/ne_10m_admin_0_countries.geojson (Natural Earth, kamu malı)
#   · tarihî devletler: A. Ourednik, *historical-basemaps* (GPL-3.0),
#     github.com/aourednik/historical-basemaps — yıl dilimleri veri-kaynak/historical-basemaps/
#     altına İNDİRİLİR (depoda taşınmaz, .gitignore). Atlasın KENDİ gövdeleri kullanılmaz:
#     29 Eyl perdesinde atlastan alınan imparatorluklar kırık/eksik çıktı (Emre, 17 Kas).
#   · portreler: Wikimedia Commons (kamu malı + CC BY-SA), veri-kaynak/acilis-portre/ önbelleği.
# Silüetler SÜS'tür, ölçü değildir: etiketteki yıl = kullanılan veri diliminin yılı.
import sys, os, json, math, re, time, urllib.request, html
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
from shapely.geometry import shape, Polygon, box
from shapely.ops import unary_union

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CIKTI = os.path.join(KOK, "data", "acilis_siluet.js")
HB = os.path.join(KOK, "veri-kaynak", "historical-basemaps")
PR = os.path.join(KOK, "veri-kaynak", "acilis-portre")
SPRITE = os.path.join(KOK, "img", "acilis", "portreler.jpg")
HB_URL = "https://raw.githubusercontent.com/aourednik/historical-basemaps/master/geojson/world_%s.geojson"
UA = {"User-Agent": "tarih-atlasi-acilis/1.0 (egitim amacli statik site)"}

# ── PORTRELER ────────────────────────────────────────────────────────────────
# (anahtar, ekranda ad, Commons dosyası, lisans, eser sahibi (CC için), kırpma)
# kırpma = (yüz merkezi x 0-10 · y 0-10 [görüntü ızgarası], kare kenarı / genişlik)
PORTRE = [
    ("ataturk",   "Atatürk",            "Ataturk1930s.jpg", "Kamu malı", "", (5.5, 2.5, .45)),
    ("fatih",     "Fatih Sultan Mehmed", "Bellini,_Gentile_-_Sultan_Mehmet_II.jpg", "Kamu malı", "Gentile Bellini", (4.5, 3.5, .42)),
    ("kanuni",    "Kanunî Sultan Süleyman", "EmperorSuleiman.jpg", "Kamu malı", "Tiziano çevresi", (4.4, 3.7, .45)),
    ("victoria",  "Kraliçe Victoria",   "Queen_Victoria_by_Bassano.jpg", "Kamu malı", "Alexander Bassano", (5.3, 3.6, .5)),
    ("elizabeth", "I. Elizabeth",       "Darnley_stage_3.jpg", "Kamu malı", "", (4.6, 1.7, .33)),
    ("napolyon",  "Napolyon",           "Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg", "Kamu malı", "Jacques-Louis David", (5.05, 1.6, .22)),
    ("louis14",   "XIV. Louis",         "Louis_XIV_of_France.jpg", "Kamu malı", "Hyacinthe Rigaud", (4.6, 2.65, .16)),
    ("felipe2",   "II. Felipe",         "Portrait_of_Philip_II_of_Spain_by_Sofonisba_Anguissola_-_002b.jpg", "Kamu malı", "Sofonisba Anguissola", (5.2, 2.5, .4)),
    ("isabel",    "I. Isabel",          "IsabellaofCastile03.jpg", "Kamu malı", "", (5.0, 2.8, .45)),
    ("bismarck",  "Bismarck",           "Otto_von_Bismarck_1885_(cropped).jpg", "Kamu malı", "", (4.8, 2.2, .45)),
    ("friedrich", "Büyük Friedrich",    "Friedrich_der_Große_-_Johann_Georg_Ziesenis_-_Google_Cultural_Institute_(cropped_2).jpg", "Kamu malı", "Johann Georg Ziesenis", (5.0, 2.0, .3)),
    ("garibaldi", "Garibaldi",          "Giuseppe_Garibaldi_1861.jpg", "Kamu malı", "", (4.5, 1.7, .35)),
    ("leonardo",  "Leonardo da Vinci",  "Francesco_Melzi_-_Portrait_of_Leonardo_(colour_correction).png", "Kamu malı", "Francesco Melzi", (2.8, 3.3, .6)),
    ("petro",     "I. Petro",           "Inconnu_d'après_J.-M._Nattier,_Portrait_de_Pierre_Ier_(musée_de_l’Ermitage).jpg", "Kamu malı", "J.-M. Nattier ardılı", (5.3, 1.8, .3)),
    ("katerina",  "II. Katerina",       "Catherine_II_after_Roslin,_Rokotov_(1780s,_Kunsthistorisches_Museum).jpg", "Kamu malı", "Roslin ardılı", (5.0, 2.3, .4)),
    ("qin",       "Qin Shi Huang",      "QinShiHuang19century.jpg", "Kamu malı", "", (4.5, 4.4, .5)),
    ("ekber",     "Ekber Şah",          "Govardhan._Akbar_With_Lion_and_Calf_ca._1630,_Metmuseum_(cropped).jpg", "Kamu malı", "Govardhan", (5.0, 1.3, .25)),
    ("gandi",     "Gandi",              "Mahatma-Gandhi,_studio,_1931.jpg", "Kamu malı", "Elliott & Fry", (5.0, 1.5, .4)),
    ("ramses",    "II. Ramses",         "Ramses_II_British_Museum.jpg", "CC BY-SA 3.0", "Pbuergler", (5.0, 3.0, .45)),
    ("kleopatra", "Kleopatra",          "Kleopatra-VII.-Altes-Museum-Berlin1.jpg", "Kamu malı", "Louis le Grand", (6.0, 4.2, .6)),
    ("washington", "Washington",        "Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg", "Kamu malı", "Gilbert Stuart", (4.7, 2.8, .4)),
    ("lincoln",   "Lincoln",            "Abraham_Lincoln_O-77_matte_collodion_print.jpg", "Kamu malı", "Alexander Gardner", (5.0, 2.3, .45)),
    ("juarez",    "Benito Juárez",      "Photograph_of_Benito_Juarez.jpg", "Kamu malı", "", (4.8, 2.3, .45)),
    ("zapata",    "Emiliano Zapata",    "Emiliano_Zapata4.jpg", "Kamu malı", "", (5.0, 2.6, .55)),
    ("ieyasu",    "Tokugawa Ieyasu",    "Tokugawa_Ieyasu2.JPG", "Kamu malı", "", (4.6, 4.2, .25)),
    ("nobunaga",  "Oda Nobunaga",       "Odanobunaga.jpg", "Kamu malı", "Kanō Sōshū", (5.0, 2.2, .25)),
    ("pedro2",    "II. Pedro",          "Pedro_II_of_Brazil_-_Brady-Handy.jpg", "Kamu malı", "", (4.8, 2.2, .4)),
    ("sezar",     "Jül Sezar",          "Retrato_de_Julio_César_(26724093101)_(cropped).jpg", "Kamu malı", "", (5.0, 3.8, .6)),
    ("augustus",  "Augustus",           "Augustus_of_Prima_Porta.jpg", "CC BY-SA 4.0", "Justin Benttinen", (5.6, 1.4, .2)),
    ("traianus",  "Traianus",           "Traianus_Glyptothek_Munich_72.jpg", "Kamu malı", "", (4.8, 2.2, .5)),
    ("hadrianus", "Hadrianus",          "München_SMAEK_2019-03-23n.jpg", "CC BY-SA 4.0", "Djehouty", (4.8, 2.6, .55)),
    ("marcus",    "Marcus Aurelius",    "MSR-ra-61-b-1-DM.jpg", "CC BY-SA 4.0", "Daniel Martin", (5.0, 1.8, .45)),
    ("konstantin", "Büyük Konstantin",  "Statua_di_Costantino_ai_musei_capitolini.jpg", "CC BY-SA 4.0", "Merulana", (5.0, 2.6, .55)),
    ("justinianus", "Justinianus",      "Mosaic_of_Justinianus_I_-_Basilica_San_Vitale_(Ravenna).jpg", "CC BY-SA 4.0", "Petar Milošević", (4.5, 3.2, .5)),
    ("theodora",  "Theodora",           "Theodora_mosaic_-_Basilica_San_Vitale_(Ravenna)_v2.jpg", "CC BY-SA 4.0", "Petar Milošević", (4.5, 2.8, .45)),
    ("iskender",  "Büyük İskender",     "Alexander_Mosaic_detail_of_Alexander_the_Great_(3x4_cropped).jpg", "Kamu malı", "", (4.6, 2.6, .55)),
    ("cengiz",    "Cengiz Han",         "YuanEmperorAlbumGenghisPortrait.jpg", "Kamu malı", "", (4.8, 4.0, .45)),
    ("kubilay",   "Kubilay Han",        "YuanEmperorAlbumKhubilaiPortrait.jpg", "Kamu malı", "", (4.8, 4.3, .45)),
]
HUCRE, SUTUN = 112, 8

# ── HARİTALAR ────────────────────────────────────────────────────────────────
# Dalga 1: bugünkü devletler (Natural Earth ADM0_A3). Dalga 2: her milletin en bilinen /
# en parlak devrindeki devlet (Emre, 17 Kas: "en şaşalı dönemine ait birer harita").
# SIRA = ÖNEM SIRASI: perde erken kalkarsa kuyruk kesilir. Kurucu, sırayı küreye göre
# yerel olarak (en çok 6 öğe ileriye) karıştırır: o an öne dönen ülke fırlar.
BUGUN = [  # (anahtar, ADM0_A3, ad, renk, kişiler)
    ("TUR", "TUR", "Türkiye",          "#c0392b", ["ataturk"]),
    ("GBR", "GBR", "Birleşik Krallık", "#7e3d8f", ["elizabeth"]),
    ("FRA", "FRA", "Fransa",           "#2e5aa8", ["napolyon"]),
    ("ESP", "ESP", "İspanya",          "#d4a017", ["isabel"]),
    ("DEU", "DEU", "Almanya",          "#5d6d7e", ["friedrich"]),
    ("ITA", "ITA", "İtalya",           "#2e8b57", ["garibaldi", "leonardo"]),
    ("RUS", "RUS", "Rusya",            "#4f7d4f", ["katerina"]),
    ("CHN", "CHN", "Çin",              "#c8553d", ["qin"]),
    ("IND", "IND", "Hindistan",        "#e07b24", ["gandi"]),
    ("EGY", "EGY", "Mısır",            "#c2a14d", ["kleopatra"]),
    ("USA", "USA", "ABD",              "#3a64b8", ["washington", "lincoln"]),
    ("MEX", "MEX", "Meksika",          "#1f8a70", ["juarez", "zapata"]),
    ("JPN", "JPN", "Japonya",          "#b03a48", ["ieyasu", "nobunaga"]),
    ("BRA", "BRA", "Brezilya",         "#2e8b57", ["pedro2"]),
]
# (anahtar, ad, dilimler, eşleşme deseni (NAME/SUBJECTO/PARTOF tam eşleşme regex'i),
#  renk, kişiler, dünya zemini mi, fırlama noktası (boylam, enlem) — dünya öğesinde ana yurt)
# Birden çok dilim verilirse EN GENİŞ olanı seçilir.
TARIH = [
    ("osm", "Osmanlı İmparatorluğu", ["1650", "1700"], r"Ottoman Empire", "#8e0b22", ["fatih", "kanuni"], 0, None),
    ("rom", "Roma İmparatorluğu", ["100", "200"], r"Roman Empire", "#a3263a", ["sezar", "augustus", "traianus", "hadrianus", "marcus", "konstantin"], 0, None),
    ("isk", "İskender İmparatorluğu", ["bc323"], r"Empire of Alexander", "#c9a227", ["iskender"], 0, None),
    ("mog", "Moğol İmparatorluğu", ["1279"], r"Mongol Empire", "#6d4c9f", ["cengiz", "kubilay"], 0, None),
    ("biz", "Bizans İmparatorluğu", ["500", "600"], r"Eastern Roman Empire|Byzantine Empire", "#7b2d8e", ["justinianus", "theodora"], 0, None),
    # 1920 diliminde Britanya'nın Afrika sömürgeleri ayrı özne; 1914 dilimi hepsini UK'ye bağlar.
    # Dominyonlar (Kanada, Avustralya, Y. Zelanda, G. Afrika) imparatorluğun parçası sayılır.
    ("ing", "Britanya İmparatorluğu", ["1914"], r"United Kingdom.*|British .*|Canada|Australia|New Zealand|Union of South Africa", "#c0392b", ["victoria"], 1, (-1.5, 52.5)),
    ("per", "Ahameniş (Pers) İmp.", ["bc500"], r"Achaemenid Empire", "#1f8a70", [], 0, None),
    ("rus", "Rus İmparatorluğu", ["1914"], r"Russian Empire|Russia", "#4f7d4f", ["petro"], 0, None),
    ("isp", "İspanyol İmparatorluğu", ["1783"], r"Spain|.*\(Spain\)|Vice-?[Rr]oyalty of .*", "#d4a017", ["felipe2"], 1, (-3.7, 40.4)),
    # 1920 diliminde Cezayir/Tunus/Fas ayrı özne olarak durur; o yıl Fransız idaresinde.
    ("fra", "Fransız Sömürge İmp.", ["1920"], r"France|.*\(France\)|French .*|Algeria|Tunisia|Morocco", "#2e5aa8", ["louis14"], 1, (2.3, 47.0)),
    ("eme", "Emevîler", ["700"], r"Umayyad Caliphate", "#2f6b3a", [], 0, None),
    ("abb", "Abbâsîler", ["800"], r"Abbasid Caliphate", "#1d1d1d", [], 0, None),
    ("sel", "Büyük Selçuklu", ["1100"], r"Seljuk Empire", "#3e7cb1", [], 0, None),
    ("gok", "Göktürk Kağanlığı", ["600"], r"Göktürks", "#2c8fbf", [], 0, None),
    ("bab", "Babür İmparatorluğu", ["1700"], r"Mughal Empire", "#d4a017", ["ekber"], 0, None),
    ("qng", "Qing İmparatorluğu", ["1783", "1800"], r"Qing Empire", "#c9a227", [], 0, None),
    ("han", "Han Hanedanı", ["100"], r"Han", "#c8553d", [], 0, None),
    ("mis", "Eski Mısır (Yeni Krallık)", ["bc1500"], r"Egypt", "#c2a14d", ["ramses"], 0, None),
    ("alm", "Alman İmparatorluğu", ["1914"], r"German .*", "#262626", ["bismarck"], 1, (10.4, 51.2)),
    ("avm", "Avusturya-Macaristan", ["1900"], r"Austria Hungary", "#a8864a", [], 0, None),
    ("kar", "Kartaca", ["bc300", "bc323"], r"Carthaginian Empire", "#7e3d8f", [], 0, None),
    ("ink", "İnka İmparatorluğu", ["1530", "1500"], r"Inca Empire", "#d35400", [], 0, None),
    ("azt", "Aztek İmparatorluğu", ["1500"], r"Aztec Empire", "#16a085", [], 0, None),
    ("tim", "Timurlular", ["1400"], r"Timurid Empire", "#6d4c9f", [], 0, None),
    ("saf", "Safevîler", ["1600", "1530"], r"Safavid Empire", "#1f8a70", [], 0, None),
    ("alt", "Altın Orda", ["1300"], r"Khanate of the Golden Horde", "#c9a227", [], 0, None),
    ("hun", "Hun İmparatorluğu (Attila)", ["400"], r"Hunnic Empire", "#8b5a2b", [], 0, None),
    ("krl", "Karolenj İmparatorluğu", ["800"], r"Carolingian Empire", "#2e5aa8", [], 0, None),
    ("sas", "Sâsânîler", ["600", "500"], r"Sasanian Empire", "#a3263a", [], 0, None),
    ("mau", "Maurya İmparatorluğu", ["bc300", "bc200"], r"Mauryan Empire", "#e07b24", [], 0, None),
    ("mal", "Mali İmparatorluğu", ["1300"], r"Mali", "#b5651d", [], 0, None),
    ("leh", "Lehistan-Litvanya", ["1600"], r"Poland-Lithuania", "#b03a48", [], 0, None),
    ("isv", "İsveç İmparatorluğu", ["1650"], r"Sweden", "#2e6fb5", [], 0, None),
    ("por", "Portekiz İmparatorluğu", ["1650"], r"Portug.*|.*\(Portugal\)", "#2e8b57", [], 1, (-8.0, 39.6)),
    ("hol", "Hollanda Sömürge İmp.", ["1700"], r"Dutch .*|.*\(Dutch\)|Netherlands", "#e67e22", [], 1, (5.3, 52.1)),
    ("kie", "Kiev Rus", ["1100"], r"Kievan Rus", "#4f7d4f", [], 0, None),
    ("khm", "Khmer İmparatorluğu", ["1100"], r"Khmer Empire", "#16a085", [], 0, None),
    ("tng", "Tang Hanedanı", ["800"], r"Tang Empire", "#c0392b", [], 0, None),
    ("son", "Songhay İmparatorluğu", ["1530"], r"Songhai", "#b5651d", [], 0, None),
]
# Antimeridyeni aşan gövdeler silüeti ikiye böler: kırpma kutusu
KIRP = {"RUS": (19, 40, 180, 82), "rus": (19, 35, 180, 82), "USA": (-126, 24, -66, 50),
        "FRA": (-6, 41, 10, 52)}


def hb_dilim(d):
    os.makedirs(HB, exist_ok=True)
    p = os.path.join(HB, "world_%s.geojson" % d)
    if not os.path.exists(p):
        print("indiriliyor:", HB_URL % d)
        urllib.request.urlretrieve(HB_URL % d, p)
    return json.load(open(p, encoding="utf-8"))


def halkalar(g):
    """Polygon / MultiPolygon / iç içe GeometryCollection → düz Polygon listesi.
    (Birleşim ve kesişim koleksiyon döndürebilir; düz okununca Osmanlı 1650 ve
    Britanya 1920 parçalarının çoğu sessizce düşüyordu — galeri ölçümü, 17 Kas.)"""
    if isinstance(g, Polygon):
        return [] if g.is_empty else [g]
    out = []
    for p in getattr(g, "geoms", []):
        out.extend(halkalar(p))
    return out


def yaklasik_alan(g):
    c = math.cos(math.radians(g.centroid.y)) if not g.is_empty else 1
    return g.area * c


def yil_etiket(d):
    return ("MÖ " + d[2:]) if d.startswith("bc") else d


def _yol(g, f):
    return "".join("M" + "L".join("%.1f %.1f" % f(x, y) for x, y in p.exterior.coords) + "Z" for p in halkalar(g))


def yol_uret(g, anakara_esik, zemin=None):
    """100x100 kutuya, küçük adacıklar atılır (ARAYUZ-0077 yöntemi).
    zemin verilirse (tarihî devletler): şekil kare bir çerçevede ORTALANIR ve çerçeveye
    düşen kara sönük zemin olarak ayrıca döner — çok parçalı imparatorluk (Osmanlı,
    Bizans, Roma) yalnız silüetken tanınmıyordu; Akdeniz'i görünce tanınıyor."""
    ps = halkalar(g)
    en = max(p.area for p in ps)
    g = unary_union([p for p in ps if p.area >= en * anakara_esik])
    x0, y0, x1, y1 = g.bounds
    k = math.cos(math.radians((y0 + y1) / 2))
    w, h = (x1 - x0) * k, (y1 - y0)
    tol = max(w, h) * 0.008 / max(k, 0.2)
    if zemin is None:
        s = 96.0 / max(w, h)
        ox, oy = (100 - w * s) / 2, 99 - h * s
        return _yol(g.simplify(tol, preserve_topology=True),
                    lambda x, y: (ox + (x - x0) * k * s, oy + (y1 - y) * s)), ""
    kenar = max(w, h) * 1.18                      # projeksiyonlu birimde kare çerçeve
    mx, my = (x0 + x1) / 2, (y0 + y1) / 2
    bx0, bx1 = mx - kenar / 2 / k, mx + kenar / 2 / k
    by0, by1 = my - kenar / 2, my + kenar / 2
    s = 100.0 / kenar
    f = lambda x, y: ((x - bx0) * k * s, (by1 - y) * s)
    z = zemin.intersection(box(bx0, by0, bx1, by1)).simplify(tol * 1.5, preserve_topology=True)
    z = unary_union([p for p in halkalar(z) if p.area * k * s * s > 0.6])   # < ~0,6 birim² ada atılır
    return _yol(g.simplify(tol, preserve_topology=True), f), _yol(z, f)


def dunya_yolu(g, esik=0.3):
    """Eşdikdörtgen 360x180 — dünya zemini üstüne biner."""
    g = g.simplify(0.4, preserve_topology=True)
    return "".join("M" + "L".join("%.0f %.0f" % (x + 180, 90 - y) for x, y in p.exterior.coords) + "Z"
                   for p in halkalar(g) if p.area >= esik)


def kure_yolu(g):
    """Küre dokusu: boylam doğrusal, enlem sin(φ) — kürede kutuplar doğal sıkışır."""
    d = []
    for p in halkalar(g):
        if p.area < 4:
            continue
        d.append("M" + "L".join("%.1f %.1f" % (x + 180, 90 - 90 * math.sin(math.radians(y)))
                                for x, y in p.exterior.coords) + "Z")
    return "".join(d)


def tarih_govde(desen, dilimler):
    rx = re.compile(r"^(?:%s)$" % desen)
    en, sec = None, None
    for d in dilimler:
        G = hb_dilim(d)
        ps = []
        for f in G["features"]:
            p = f["properties"]
            if any(p.get(k) and rx.match(str(p[k]).strip()) for k in ("NAME", "SUBJECTO", "PARTOF")):
                if f.get("geometry"):
                    g = shape(f["geometry"]).buffer(0)
                    if not g.is_empty:
                        ps.append(g)
        if not ps:
            print("  !! %s diliminde eşleşme yok: %s" % (d, desen))
            continue
        g = unary_union(ps)
        if en is None or yaklasik_alan(g) > yaklasik_alan(en):
            en, sec = g, d
    if en is None:
        raise SystemExit("gövde bulunamadı: %s %s" % (desen, dilimler))
    return en, sec


def firlama_noktasi(g):
    ps = halkalar(g)
    p = max(ps, key=lambda q: q.area)
    r = p.representative_point()
    return round(r.x, 1), round(r.y, 1)


def portreler():
    """Commons'tan indirir (önbellek), yüzü kırpar, tek JPEG tabakası yazar."""
    from PIL import Image
    import urllib.parse
    os.makedirs(PR, exist_ok=True)
    os.makedirs(os.path.dirname(SPRITE), exist_ok=True)
    n = len(PORTRE)
    tab = Image.new("RGB", (SUTUN * HUCRE, ((n + SUTUN - 1) // SUTUN) * HUCRE), (24, 24, 24))
    for i, (k, ad, dosya, lis, eser, (cx, cy, s)) in enumerate(PORTRE):
        p = os.path.join(PR, k + ".jpg")
        if not os.path.exists(p):
            q = urllib.parse.urlencode({"action": "query", "format": "json", "prop": "imageinfo",
                                        "iiprop": "url", "iiurlwidth": 500, "titles": "File:" + dosya})
            r = json.load(urllib.request.urlopen(urllib.request.Request(
                "https://commons.wikimedia.org/w/api.php?" + q, headers=UA), timeout=60))
            u = list(r["query"]["pages"].values())[0]["imageinfo"][0]["thumburl"]
            open(p, "wb").write(urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=60).read())
            time.sleep(2)   # Commons art arda istekte 429 veriyor (17 Kas, ölçüldü)
        im = Image.open(p).convert("RGB")
        W, H = im.size
        a = s * W
        x, y = cx / 10 * W, cy / 10 * H
        c = im.crop((int(x - a / 2), int(y - a / 2), int(x + a / 2), int(y + a / 2))).resize((HUCRE, HUCRE), Image.LANCZOS)
        tab.paste(c, ((i % SUTUN) * HUCRE, (i // SUTUN) * HUCRE))
    tab.save(SPRITE, quality=80, optimize=True, progressive=True)
    print("portre tabakası: %d yüz, %d B" % (n, os.path.getsize(SPRITE)))


def js(x):
    return json.dumps(x, ensure_ascii=False, separators=(",", ":"))


def main():
    galeri = sys.argv[sys.argv.index("--galeri") + 1] if "--galeri" in sys.argv else None
    PI = {p[0]: i for i, p in enumerate(PORTRE)}
    C = json.load(open(os.path.join(KOK, "veri-kaynak", "ne_10m_admin_0_countries.geojson"), encoding="utf-8"))
    NE = {f["properties"]["ADM0_A3"]: f for f in C["features"]}
    L = json.load(open(os.path.join(KOK, "veri-kaynak", "ne_10m_land.geojson"), encoding="utf-8"))
    kara_tam = unary_union([shape(f["geometry"]) for f in L["features"]])
    kara_zemin = kara_tam.simplify(0.05, preserve_topology=True)   # tarihî öğe zemini
    kara = kara_tam.simplify(0.9, preserve_topology=True)
    ogeler = []
    for k, iso, ad, renk, kis in BUGUN:
        g = shape(NE[iso]["geometry"])
        if k in KIRP:
            g = g.intersection(box(*KIRP[k]))
        lon, lat = firlama_noktasi(g)
        ogeler.append({"k": k, "ad": ad, "yil": "", "renk": renk, "yol": yol_uret(g, 0.02)[0], "lon": lon, "lat": lat,
                       "dalga": 1, "kisi": [PI[x] for x in kis], "kaynak": "Natural Earth admin_0 " + iso})
    for k, ad, dilim, desen, renk, kis, dunya, nokta in TARIH:
        g, d = tarih_govde(desen, dilim)
        if k in KIRP:
            g = g.intersection(box(*KIRP[k]))
        lon, lat = nokta or firlama_noktasi(g)
        o = {"k": k, "ad": ad, "yil": yil_etiket(d), "renk": renk, "lon": lon, "lat": lat, "dalga": 2,
             "kisi": [PI[x] for x in kis], "kaynak": "historical-basemaps world_%s" % d}
        if dunya:
            o["dunya"] = 1
            o["yol"] = dunya_yolu(g)
        else:
            o["yol"], o["zemin"] = yol_uret(g, 0.01, kara_zemin)
        ogeler.append(o)
        print("%-4s %-28s %-7s %6d B zemin %5d B %s" % (k, ad, o["yil"], len(o["yol"]), len(o.get("zemin", "")), "DÜNYA" if dunya else ""))

    kara_duz = dunya_yolu(kara, 4)       # dünya öğelerinin zemini (eşdikdörtgen)
    kara_kure = kure_yolu(kara)           # küre dokusu (sin φ)
    tur = next(o for o in ogeler if o["k"] == "TUR")
    final = dict(tur, k="final")

    if galeri:
        hucre = []
        for o in ogeler:
            if o.get("dunya"):
                svg = "<svg viewBox='0 0 360 180' width='300'><path d='%s' fill='#3d5163'/><path d='%s' fill='%s' stroke='#fff' stroke-width='.6'/></svg>" % (kara_duz, o["yol"], o["renk"])
            elif o.get("zemin"):
                svg = "<svg viewBox='0 0 100 100' width='170'><rect width='100' height='100' rx='8' fill='#1b3550'/><path d='%s' fill='#3d5163'/><path d='%s' fill='%s' stroke='#fff' stroke-width='.7'/></svg>" % (o["zemin"], o["yol"], o["renk"])
            else:
                svg = "<svg viewBox='0 0 100 100' width='170'><path d='%s' fill='%s' stroke='#fff' stroke-width='1'/></svg>" % (o["yol"], o["renk"])
            hucre.append("<div class=k>%s<b>%s %s</b><br><small>%s</small></div>" % (svg, html.escape(o["ad"]), o["yil"], o["kaynak"]))
        open(galeri, "w", encoding="utf-8").write(
            "<!doctype html><meta charset=utf-8><style>body{background:#14202b;color:#fff;font:11px sans-serif;"
            "display:flex;flex-wrap:wrap;gap:6px;margin:6px}.k{background:#1d2d3b;padding:3px}</style>"
            "<svg viewBox='0 0 360 180' width='600'><rect width='360' height='180' fill='#1d4f7a'/><path d='%s' fill='#8fbf6a'/></svg>" % kara_kure
            + "".join(hucre))
        print("galeri:", galeri)
        return

    portreler()
    kisiler = [{"ad": p[1]} for p in PORTRE]
    blok = ("/* >>> VERI (uretildi: arac/acilis_uret.py) — ELLE DUZENLEME */\n"
            "window.ACILIS_SILUET = {\n"
            "  kure: " + js(kara_kure) + ",\n"
            "  kara: " + js(kara_duz) + ",\n"
            "  portre: " + js({"url": "img/acilis/portreler.jpg", "hucre": HUCRE, "sutun": SUTUN}) + ",\n"
            "  kisiler: " + js(kisiler) + ",\n"
            "  final: " + js(final) + ",\n"
            "  ogeler: [\n" + ",\n".join("    " + js(o) for o in ogeler) + "\n  ]\n};\n"
            "/* <<< VERI */")
    s = open(CIKTI, encoding="utf-8").read()
    desen = re.compile(r"/\* >>> VERI .*?/\* <<< VERI \*/", re.S)
    if not desen.search(s):
        raise SystemExit("data/acilis_siluet.js'te VERI işaretleri yok")
    s = desen.sub(lambda m: blok, s)
    open(CIKTI, "w", encoding="utf-8", newline="\n").write(s)
    print("%s yazıldı · %d öğe · %d kişi · %d B" % (CIKTI, len(ogeler), len(kisiler), len(s.encode("utf-8"))))


main()
