# -*- coding: utf-8 -*-
"""
PETEK MOTORU — yerleşim tabanlı harita üretimi
==============================================
Yaklaşım (kullanıcı önerisi):
  Her şehir/kale/bölge bir PETEK'tir; çevresindeki toprağı temsil eder.
  Petek sınırları komşu yerleşimlerin tam ortasından geçer (Voronoi), ardından
  gerçek kıyı çizgisine ve nehir yataklarına yaslanır. Bir yerleşim el
  değiştirdiğinde peteği bütün olarak el değiştirir → cetvelle çizilmiş köşeli
  sınır, yapay enklav ve "yarım kalmış bölge" sorunu ortadan kalkar.

Girdi : ../data/yerlesimler.js  (ad, koordinat, hâkimiyet dönemleri)
        Natural Earth 10m kara + nehir verisi
Çıktı : ../data/donemler.js     (window.DONEMLER — sitenin okuduğu dosya)

Çalıştırma:  py uret_petek.py
"""
import json, os, sys, io, math, re
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
from shapely.geometry import shape, box, Polygon, MultiPolygon, Point, MultiPoint
from shapely.ops import unary_union, voronoi_diagram, nearest_points
from shapely.validation import make_valid

def temiz(q):
    """Geçersiz halkaları onarır; make_valid'in döndürebileceği çizgi artıklarını atar."""
    if not q.is_valid: q = make_valid(q)
    if q.geom_type == "GeometryCollection":
        q = unary_union([p for p in q.geoms if p.geom_type in ("Polygon", "MultiPolygon")])
    return q.buffer(0)

BASEMAPS = r"C:\Users\emrem\AppData\Local\Temp\claude\C--Users-emrem-OneDrive-Belgeler-Projeler-Ranking\2ad1685f-dd0a-4c8c-8b9d-a89c216d56e6\scratchpad\basemaps"
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CIKTI = os.path.join(KOK, "data", "donemler.js")
# Kapsam: Batı Avrupa'dan Ural batısına, İskandinav güneyinden Afrika boynuzuna
BOLGE = box(-12, 1.5, 62, 62)

# ---------------- Devlet boya tablosu ----------------
# Yerleşimlerin s alanındaki kimlikler; her devlet haritada kendi renginde
# ayrı gövde olarak boyanır (Osmanlı d/v aktifken s bastırılır).
BOYALAR = {
    "bizans":     ("Bizans",                 "#8877b8"),
    "memluk":     ("Memlûk",                 "#c9a15b"),
    "iran":       ("İran",                   "#b5885b"),
    "karakoyunlu":("Karakoyunlular",         "#4a5b6b"),
    "akkoyunlu":  ("Akkoyunlular",           "#b5bcc9"),
    "safevi":     ("Safevî İran",            "#6b4a7d"),
    "gurcistan":  ("Gürcistan",              "#6b7da0"),
    "macaristan": ("Macaristan",             "#4e7d46"),
    "avusturya":  ("Avusturya (Habsburg)",   "#d9c76a"),
    "almanya":    ("Kutsal Roma / Almanya",  "#9a9a9a"),
    "lehistan":   ("Lehistan-Litvanya",      "#b56ba0"),
    "rusya":      ("Rusya",                  "#4f7d4f"),
    "altinorda":  ("Altın Orda ve ardılları","#9e7d9e"),
    "kazan":      ("Kazan Hanlığı",          "#c98f6b"),
    "kirim":      ("Kırım Hanlığı bozkırı",  "#c9825b"),
    "isvec":      ("İsveç",                  "#7bb5c9"),
    "danimarka":  ("Danimarka-Norveç",       "#8f8fb5"),
    "ingiltere":  ("Britanya",               "#b55b6b"),
    "fransa":     ("Fransa",                 "#5b74c9"),
    "ispanya":    ("İspanya",                "#c98f4a"),
    "portekiz":   ("Portekiz",               "#6b8ac9"),
    "granada":    ("Gırnata Emirliği",       "#7ba05b"),
    "hollanda":   ("Hollanda",               "#d98f5b"),
    "venedik":    ("Venedik",                "#4a8a8f"),
    "ceneviz":    ("Ceneviz",                "#8a6b4a"),
    "napoli":     ("Napoli / İki Sicilya",   "#a67ba0"),
    "papalik":    ("Papalık",                "#c9c1a3"),
    "italya":     ("İtalya",                 "#74a074"),
    "sovalye":    ("St. Jean Şövalyeleri",   "#b0a08a"),
    "bulgaristan":("Bulgaristan",            "#7aa06a"),
    "sirbistan":  ("Sırbistan",              "#6a8fa0"),
    "bosna":      ("Bosna Krallığı",         "#8f7d5b"),
    "arnavutluk": ("Arnavutluk",             "#8f5b7d"),
    "yunanistan": ("Yunanistan",             "#6b9ec9"),
    "romanya":    ("Romanya",                "#c9b56b"),
    "karadag":    ("Karadağ",                "#9e8f6b"),
    "yemen":      ("Yemen İmamlığı",         "#b5a05b"),
    "umman":      ("Umman",                  "#5b9e8f"),
    "suud":       ("Suûdî / Vehhâbî",        "#8f9e5b"),
    "sammar":     ("Şammar (Hâil)",          "#a0885b"),
    "hicaz":      ("Hicaz Krallığı",         "#9e8a5b"),
    "funj":       ("Func (Sennâr) Sultanlığı","#7d6b4a"),
    "habesistan": ("Habeşistan",             "#7d5b3a"),
    "adal":       ("Adal / Harar",           "#a08f5b"),
    "somali":     ("Somali sultanlıkları",   "#b5a06b"),
    "fas":        ("Fas",                    "#9e6b5b"),
    # --- Anadolu beylikleri (Osmanlı kuruluş coğrafyasının fetih öncesi sahipleri) ---
    "karaman":    ("Karamanoğulları",         "#4527a0"),
    "germiyan":   ("Germiyanoğulları",        "#8f6b3a"),
    "aydin":      ("Aydınoğulları",           "#4a8f7d"),
    "saruhan":    ("Saruhanoğulları",         "#6b8f4a"),
    "mentese":    ("Menteşeoğulları",         "#3a7d8f"),
    "hamid":      ("Hamîdoğulları",           "#8f7d3a"),
    # TDV TEKEOĞULLARI: Hamîdoğulları'ndan ayrılan kol; Dündar Bey'in fethinden
    # sonra Antalya kardeşi Yûnus Bey'e verildi (~1321) ve ayrı beylik doğdu.
    # Antalya bu tarihten sonra Hamîd değil TEKE toprağıdır.
    "teke":       ("Tekeoğulları",            "#b58f2d"),
    "candar":     ("Candaroğulları",          "#5b6b9e"),
    "dulkadir":   ("Dulkadiroğulları",        "#00838f"),
    "ramazanoglu":("Ramazanoğulları",         "#33691e"),
    "karesi":     ("Karesioğulları",          "#6b9e5b"),
    "katalan":    ("Katalan Dukalığı (Atina-Neopatras)", "#9e8f3a"),
    # --- Fetret Devri (1402-1413): şehzade payları ---
    # Ankara Savaşı'ndan sonra tek bir Osmanlı gövdesi kalmadı; ülke şehzadeler
    # arasında bölündü. Bu dönemde yerleşimler "Osmanlı" (d) yerine ilgili
    # şehzadenin kimliğiyle (s) boyanır ki paylar haritada ayrı ayrı görünsün.
    # Renkler, aynı anda sahnede olan Anadolu beyliklerinin tonlarından
    # kasten uzak seçildi.
    "timurlu":         ("Timurlu idaresi",               "#8d6e63"),
    "suleyman-celebi": ("Emîr Süleyman Çelebi (Rumeli)", "#b71c1c"),
    "isa-celebi":      ("İsa Çelebi (Bursa)",            "#e04b2a"),
    "mehmed-celebi":   ("Çelebi Mehmed (Amasya)",        "#7f1734"),
    "musa-celebi":     ("Musa Çelebi (Rumeli)",          "#d81b60"),
    "eflak":      ("Eflak Voyvodalığı",      "#7a9e6b"),
    "bogdan":     ("Boğdan Voyvodalığı",     "#6b9e8a"),
    "lusignan":   ("Kıbrıs Krallığı (Lüzinyan)", "#8a6ba0"),
    # ⚠️ Orta Anadolu renkleri kasten doygun seçildi: önceki toprak tonları
    # (#a08a6b / #9e8a6b) arazi kabartma katmanının beji ile karışıyor ve
    # "Ankara civarında kimse yok" görüntüsü veriyordu.
    "ilhanli":    ("İlhanlı Devleti",         "#7a5ba0"),
    "eretna":     ("Eretna Beyliği",          "#3f8f6b"),
    "burhaneddin":("Kadı Burhâneddin Devleti","#455a64"),
    "artuklu":    ("Artukoğulları",           "#6b8a9e"),
    "ahiler":     ("Ahi Birliği (Ankara)",    "#8f7d5b"),
    # --- kullanıcının sorduğu, haritada temsili olmayan beylikler ---
    "cobanogullari":  ("Çobanoğulları",        "#4a8f8f"),
    "pervane":        ("Pervâneoğulları",      "#3a6b9e"),
    "esrefogullari":  ("Eşrefoğulları",        "#b5548f"),
    "inancogullari":  ("İnançoğulları",        "#5b4ab5"),
    "sahibata":       ("Sâhib Ataoğulları",    "#8f9e2d"),
    "taceddin":       ("Tâceddinoğulları",     "#2d8f4a"),
    "mutahharten":    ("Erzincan Beyliği (Mutahharten)", "#827717"),
    "hafsi":      ("Hafsîler (Tunus)",        "#7d8f3a"),
    "zeyyani":    ("Zeyyânîler (Tilimsan)",   "#6ba0a0"),
    "atinadukaligi": ("Atina Dukalığı",       "#8a9e8a"),
}
R_DUNYA = 6371.0088

# ---------------- Kara maskesi ----------------
print("Kara maskesi (Natural Earth 10m)...")
_ne = json.load(open(os.path.join(BASEMAPS, "ne_10m_land.geojson"), encoding="utf-8"))
KARA = unary_union([shape(f["geometry"]).buffer(0).intersection(BOLGE)
                    for f in _ne["features"] if shape(f["geometry"]).envelope.intersects(BOLGE)])
KARA = KARA.buffer(0).simplify(0.004, preserve_topology=True).buffer(0)
print("  tamam")

# ---------------- Göller ----------------
# Kural: iki yerleşim arasında göl varsa sınır göldür. Büyük göller kara
# maskesinden çıkarılır → petekler göl kıyısında biter, göl doğal sınır olur
# (Van, Urmiye, Tuz, Beyşehir, Ohri, İşkodra, Balaton...). delikleri_doldur
# sonrası .intersection(KARA) gölleri yeniden oyduğu için deliğe dönüşmezler.
print("Göller...")
GOLLER = None
try:
    _gl = json.load(open(os.path.join(BASEMAPS, "ne_10m_lakes.geojson"), encoding="utf-8"))
    _gs = []
    for f in _gl["features"]:
        g = shape(f["geometry"]).buffer(0)
        if g.envelope.intersects(BOLGE) and g.area > 0.02:
            g = g.intersection(BOLGE)
            if not g.is_empty: _gs.append(g)
    GOLLER = unary_union(_gs).buffer(0).simplify(0.01, preserve_topology=True).buffer(0)
    KARA = KARA.difference(GOLLER).buffer(0)
    print(f"  {len(_gs)} büyük göl kara maskesinden çıkarıldı")
except Exception as e:
    print("  göl verisi yok:", e)

# ---------------- Nehir yatakları ----------------
print("Nehir yatakları...")
BUYUK = {"Danube","Duna","Dunav","Sava","Drava","Tisza","Tisa","Morava","Dniester",
         "Dnipro","Dnieper","Prut","Southern Bug","Don","Kuban","Firat","Al Furat",
         "Euphrates","Dijlah","Tigris","Murat","Kura","Aras","Nile","Bahr el Nil",
         "Maritsa","Meric","Vardar","Struma","Sakarya","Kizilirmak","Yesilirmak",
         "Seyhan","Ceyhan","Jordan","Orontes","Buyuk Menderes","Gediz",
         # --- Anadolu beylik sınırlarını taşıyan akarsular (kullanıcı talebi:
         # sınırlar cetvelle değil coğrafyayla çizilsin). Natural Earth'te adı
         # geçmeyenler sessizce atlanır, fazladan isim zarar vermez. ---
         "Kucuk Menderes","Kücük Menderes","Menderes","Maeander","Meander",
         "Bakircay","Caicus","Susurluk","Simav","Kocacay",
         "Porsuk","Aksu","Kopru","Koprucay","Dalaman","Esen","Xanthos",
         "Goksu","Calycadnus","Coruh","Kelkit","Devrez","Filyos","Yenice",
         "Buyuk Zap","Great Zab","Kucuk Zab","Little Zab","Habur","Khabur",
         "Balikh","Asi","Berdan","Tarsus","Manavgat","Bartin","Gonen","Granicus"}
def _ad_sadelestir(s):
    """Nehir adlarını karşılaştırılabilir hâle getirir. Natural Earth dosyasındaki
    Türkçe adlar bozuk kodlanmış ('Byk Menderes', 'Kiz?lirmak'); harfi harfine
    karşılaştırma yüzünden Büyük Menderes ve Kızılırmak gibi iki büyük sınır
    nehri sessizce devre dışı kalıyordu. Alfabe dışı her şey atılıp küçük harfe
    indirilerek eşleşme sağlanır."""
    return "".join(c for c in s.lower() if c.isalpha())

BUYUK_SADE = {_ad_sadelestir(b) for b in BUYUK}
# Bozuk kodlanmış hâlleri de tanı (ü/ı düşmüş varyantlar)
BUYUK_SADE |= {"bykmenderes", "kizlirmak", "kiziirmak", "kckmenderes",
               "yesiirmak", "bakiray", "kprüay", "kopruay", "gksu"}

NEHIRLER = []
_bulunan = set()
try:
    _rv = json.load(open(os.path.join(BASEMAPS, "ne_10m_rivers.geojson"), encoding="utf-8"))
    for f in _rv["features"]:
        pr = f["properties"]
        _ad = pr.get("name") or pr.get("name_en") or ""
        if _ad_sadelestir(_ad) not in BUYUK_SADE: continue
        g = shape(f["geometry"])
        if g.envelope.intersects(BOLGE):
            NEHIRLER.append(g.intersection(BOLGE)); _bulunan.add(_ad)
    NEHIRLER = [n for n in NEHIRLER if not n.is_empty]
except Exception as e:
    print("  nehir verisi yok:", e)
NEHIR_HAT = unary_union(NEHIRLER) if NEHIRLER else None
print(f"  {len(NEHIRLER)} nehir parçası — {len(_bulunan)} adlı akarsu: "
      + ", ".join(sorted(_bulunan)))

# ---------------- Dağ sırtları ----------------
# İki şehir arasında dağ varsa sınır dağın sırtından geçer. Natural Earth dağ
# sırası poligonlarının orta ekseni (skeleton yerine merkez hattı yaklaşımı:
# poligonun içine doğru daraltılmış hattı) sırt kabul edilir.
print("Dağ sırtları...")
SIRTLAR = []
try:
    _dg = json.load(open(os.path.join(BASEMAPS, "ne_10m_geography_regions_polys.geojson"),
                         encoding="utf-8"))
    for f in _dg["features"]:
        p = f["properties"]
        if "Range" not in (p.get("FEATURECLA") or ""): continue
        g = shape(f["geometry"]).buffer(0)
        if not g.envelope.intersects(BOLGE): continue
        g = g.intersection(BOLGE)
        if g.is_empty or g.area < 0.05: continue
        # sırt hattı: poligonu içeriye daraltıp kalan çekirdeğin sınırı
        cekirdek = g.buffer(-0.12)
        SIRTLAR.append(cekirdek.boundary if not cekirdek.is_empty else g.boundary)
except Exception as e:
    print("  dağ verisi yok:", e)
SIRT_HAT = unary_union(SIRTLAR) if SIRTLAR else None
print(f"  {len(SIRTLAR)} dağ sırası")

# ---------------- Yerleşim verisi ----------------
print("Yerleşimler okunuyor...")
_js = open(os.path.join(KOK, "data", "yerlesimler.js"), encoding="utf-8").read()
# Yorum satırlarını at, diziyi çıkar
_js = "\n".join(l for l in _js.split("\n") if not l.strip().startswith("//"))
_gövde = _js[_js.index("window.YERLESIMLER = ") + len("window.YERLESIMLER = "):]
_gövde = _gövde[:_gövde.rindex("]") + 1]
# JS nesne gösterimini JSON'a çevir: anahtarları tırnakla (dizgi içindekilere dokunma)
_j = re.sub(r'([{,]\s*)([A-Za-zçğıöşüÇĞİÖŞÜ_]\w*)\s*:', r'\1"\2":', _gövde)
YERLER = json.loads(_j)
for y in YERLER:
    y.setdefault("v", [])          # tâbi/dolaylı idare dönemleri (bkz. aşağıda)
    y.setdefault("k", 0)           # idari kademe (1 payitaht ... 4 küçük birim)
    y.setdefault("m", None)        # bağlı olunan k1/k2 merkezin adı
    y.setdefault("s", [])          # yabancı sahiplik çizelgesi [{f,t,d:boya-id}]
    for sp in y["s"]:
        if sp["d"] not in BOYALAR:
            print(f"  UYARI boya: {y['ad']} bilinmeyen devlet kimliği '{sp['d']}'")
print(f"  {len(YERLER)} yerleşim ({sum(1 for y in YERLER if y['d'] or y['v'])} Osmanlı, "
      f"{sum(1 for y in YERLER if not (y['d'] or y['v']))} komşu, "
      f"{sum(1 for y in YERLER if y['v'])} tâbi dönemi olan)")

# Kademe doğrulaması: her Osmanlı k3/k4 yerleşimi geçerli bir k1/k2 merkeze bağlı olmalı
AD2IDX = {y["ad"]: i for i, y in enumerate(YERLER)}
for y in YERLER:
    if (y["d"] or y["v"]) and y["k"] in (3, 4):
        if not y["m"] or y["m"] not in AD2IDX or YERLER[AD2IDX[y["m"]]]["k"] not in (1, 2):
            print(f"  UYARI kademe: {y['ad']} (k:{y['k']}) geçerli bir k1/k2 merkeze bağlı değil")

def gun(s):
    y, a, g = s.split("-")
    return int(y) * 10000 + int(a) * 100 + int(g)

# ---------------- Petekler (Voronoi) ----------------
print("Petekler üretiliyor (Voronoi)...")
noktalar = [Point(y["lon"], y["lat"]) for y in YERLER]
vd = voronoi_diagram(MultiPoint(noktalar), envelope=BOLGE, tolerance=0.0)
hucreler = list(vd.geoms)
# her hücreyi içindeki noktayla eşle
PETEK = [None] * len(YERLER)
for h in hucreler:
    for i, p in enumerate(noktalar):
        if PETEK[i] is None and h.contains(p):
            PETEK[i] = h.intersection(BOLGE)
            break
eksik = [i for i, p in enumerate(PETEK) if p is None]
for i in eksik:                              # nadiren eşleşmezse en yakın hücre
    PETEK[i] = min(hucreler, key=lambda h: h.distance(noktalar[i])).intersection(BOLGE)
print(f"  {len(PETEK)} petek ({len(eksik)} yedek eşleşme)")

# ---------------- Petek sınırlarını doğal hatlara yasla ----------------
def chaikin(cs, tur=2):
    cs = list(cs)
    if len(cs) < 4: return cs
    for _ in range(tur):
        yeni = []
        for i in range(len(cs) - 1):
            p, q = cs[i], cs[i+1]
            yeni.append((0.75*p[0]+0.25*q[0], 0.75*p[1]+0.25*q[1]))
            yeni.append((0.25*p[0]+0.75*q[0], 0.25*p[1]+0.75*q[1]))
        yeni.append(yeni[0]); cs = yeni
    return cs

def sikla(cs, adim=0.22):
    yeni = []
    for i in range(len(cs) - 1):
        (x1,y1),(x2,y2) = cs[i], cs[i+1]
        yeni.append((x1,y1))
        n = int(math.hypot(x2-x1, y2-y1) / adim)
        for k in range(1, n):
            t = k/n; yeni.append((x1+(x2-x1)*t, y1+(y2-y1)*t))
    yeni.append(cs[-1]); return yeni

def dogal_hatta_yasla(cs, nehir_mes=0.30, sirt_mes=0.35):
    """Petek sınırını en yakın doğal engele çeker:
       1) yakında nehir varsa nehir yatağına (sınır nehri takip eder)
       2) yoksa dağ sırtına (sınır sırttan geçer)
       3) ikisi de yoksa Voronoi hattı kalır (iki şehrin tam ortası).
    NOT: MultiLineString üzerinde project/interpolate parçalar arasında kayar ve
    sınırı kıtanın öbür ucuna fırlatır; bu yüzden nearest_points kullanılır."""
    yeni = []
    for x, y in cs:
        p = Point(x, y)
        dn = NEHIR_HAT.distance(p) if NEHIR_HAT is not None else 9e9
        ds = SIRT_HAT.distance(p) if SIRT_HAT is not None else 9e9
        if dn < nehir_mes and dn <= ds:
            q = nearest_points(NEHIR_HAT, p)[0]; yeni.append((q.x, q.y))
        elif ds < sirt_mes:
            q = nearest_points(SIRT_HAT, p)[0]; yeni.append((q.x, q.y))
        else:
            yeni.append((x, y))
    return yeni

def dogallastir(g, yasla=True, tur=2):
    """Petek/bölge sınırını doğal hatlara yaklaştırır: nehir yataklarına yaslar,
    köşeleri Chaikin ile kırar. Kıyılar sonra kara maskesiyle kesilerek keskinleşir."""
    if g.is_empty: return g
    parcalar = g.geoms if isinstance(g, MultiPolygon) else [g]
    yeni = []
    for p in parcalar:
        dis = list(p.exterior.coords)
        if yasla: dis = dogal_hatta_yasla(sikla(dis))
        dis = chaikin(dis, tur)
        try:
            yeni.append(temiz(Polygon(dis)))
        except Exception:
            yeni.append(temiz(p))
    try:
        return unary_union(yeni).buffer(0)
    except Exception:
        return unary_union([temiz(q) for q in yeni]).buffer(0)

# Yabancı devlet gövdelerinin sadeleştirme toleransı (derece). Dosya boyutunu
# dengeler; kıyı çizgisine DOKUNMAZ çünkü sadeleştirme kara maskesiyle
# kesişimden ÖNCE uygulanır ve komşularla boşluk kalmaması için tolerans/2
# kadar dışa taşırma yapılır.
# Atlasın başlangıç tarihi. TDV'ye göre Ertuğrul Gazi 680 (1281-82) yılında
# vefat etti ve Osman Bey beyliğe geçti; ilk askerî harekât 1285 Kulacahisar,
# ilk şehir fethi 1288 Karacahisar. Bu yüzden epok 1299 değil 1281.
EPOK = "1281-01-01"

SADE_TOL = 0.012

def kapat(g, yaricap=0.15):
    """Morfolojik kapama: aralarında yaricap*2'den (≈33 km) daha az boşluk olan
    ayrı parçaları birleştirir. Aynı çekirdek beyliğin parçası olan komşu
    petekler, aralarına giren ince 'henüz o an aktif olmayan komşu' şeridi
    yüzünden kopuk görünebiliyordu (ör. 1299'da İnegöl'ün Söğüt-Bilecik'ten
    ayrı bir 'ada' gibi çizilmesi). Deniz/kıta arası gerçek boşluklar bu
    yarıçaptan büyük olduğu için etkilenmez; kapamadan sonra KARA ile
    kesişim alınacağından geçici deniz taşkını da temizlenir."""
    if g.is_empty: return g
    return temiz(g.buffer(yaricap)).buffer(-yaricap)

def delikleri_doldur(g):
    """Kuşatılmış boşluk bırakmaz: çevresi ele geçmiş alan (dağ bloğu, ova) da
    hâkimiyet altındadır."""
    if g.is_empty: return g
    ps = g.geoms if isinstance(g, MultiPolygon) else [g]
    return unary_union([Polygon(p.exterior) for p in ps]).buffer(0)

print("Petek sınırları doğal hatlara yaslanıyor...")
# Petek yarıçap sınırı: bir yerleşimin etki alanı sınırsız değildir. Yoğun
# bölgelerde Voronoi zaten küçük hücre verir; çöl/bozkırda ise hücre devasa
# büyür ve fiilen yönetilmeyen alanları toprak sayardı. Bu yüzden her petek
# merkezinden en çok ~330 km (3°) uzağa kadar geçerlidir.
# Yarıçap sınırı YOK: daire şeklinde "baloncuk" petek üretiyordu ve peteklerin
# denize/çöle kadar uzanmasını engelliyordu. Bunun yerine çöl-bozkır bölgelerine
# konmuş "sahipsiz bölge" noktaları peteklerin doğal olarak nerede biteceğini
# belirler; kalan sınırlar kıyıya ve nehir/dağ hatlarına yaslanır.
PETEK_D = []
for i, h in enumerate(PETEK):
    ham = h.intersection(KARA).buffer(0)
    yeni = ham
    if not ham.is_empty:
        boyali = bool(YERLER[i]["d"] or YERLER[i]["v"] or YERLER[i]["s"])
        yeni = dogallastir(ham, yasla=boyali).intersection(KARA).buffer(0)
        # Doğallaştırma yerleşimi kendi peteğinin dışında bırakmamalı:
        # bırakıyorsa ham petekle birleştirilir (nehir yaslaması kenarı çekmiş olur).
        nk = Point(YERLER[i]["lon"], YERLER[i]["lat"])
        if yeni.is_empty or not yeni.buffer(0.05).contains(nk):
            yeni = unary_union([yeni, ham]).buffer(0)
    PETEK_D.append(yeni)
print("  tamam")

# ---------------- Zaman çizelgesi: kırılma tarihleri ----------------
tarihler = set()
for y in YERLER:
    for dn in y["d"] + y["v"]:
        tarihler.add(dn["f"]); tarihler.add(dn["t"])
tarihler = sorted(t for t in tarihler if EPOK <= t <= "1923-11-01")
if tarihler[0] != EPOK: tarihler.insert(0, EPOK)
if tarihler[-1] != "1923-11-01": tarihler.append("1923-11-01")
print(f"Kırılma tarihi: {len(tarihler)}")

def alan_km2(g):
    if g.is_empty: return 0
    ps = g.geoms if isinstance(g, MultiPolygon) else [g]
    T = 0.0
    for p in ps:
        for ring, sg in [(p.exterior, 1)] + [(h, -1) for h in p.interiors]:
            cs = list(ring.coords); s = 0.0
            for i in range(len(cs)-1):
                lo1, la1 = math.radians(cs[i][0]), math.radians(cs[i][1])
                lo2, la2 = math.radians(cs[i+1][0]), math.radians(cs[i+1][1])
                s += (lo2-lo1) * (2 + math.sin(la1) + math.sin(la2))
            T += sg * abs(s * R_DUNYA * R_DUNYA / 2)
    return int(round(T, -3))

def mp_koord(g):
    if g.is_empty: return []
    if isinstance(g, Polygon): g = MultiPolygon([g])
    out = []
    for p in g.geoms:
        if p.area < 0.008: continue
        halkalar = []
        for ring in [p.exterior] + list(p.interiors):
            cs = [[round(x,3), round(y,3)] for x,y in ring.coords]
            if len(cs) >= 4: halkalar.append(cs)
        if halkalar: out.append(halkalar)
    return out

# ---------------- Bölge (2. kademe merkez) toplu sınırları ----------------
# Kural 6: her k3/k4 yerleşim en yakın k1/k2 merkeze bağlıdır; merkez, üyelerinin
# peteklerini toplayan daha büyük bir bölge sınırına sahiptir → data/bolgeler.js
print("Bölge sınırları (k1/k2 merkezleri)...")
_uyeler = {}
for j, y in enumerate(YERLER):
    if not (y["d"] or y["v"]) or not y["k"]: continue
    hedef = y["m"] if y["m"] else (y["ad"] if y["k"] <= 2 else None)
    if hedef is None: continue
    _uyeler.setdefault(hedef, []).append(j)
BOLGELER = []
for ad in sorted(_uyeler):
    mi = AD2IDX[ad]; my = YERLER[mi]
    bg = unary_union([PETEK_D[j] for j in _uyeler[ad]]).buffer(0)
    bg = delikleri_doldur(kapat(bg)).intersection(KARA).buffer(0)
    bg = bg.simplify(0.03, preserve_topology=True).buffer(0)
    ara = my["d"] + my["v"]
    if not ara or bg.is_empty: continue
    BOLGELER.append({
        "ad": ad, "k": my["k"], "lat": my["lat"], "lon": my["lon"],
        "f": min(dn["f"] for dn in ara), "t": max(dn["t"] for dn in ara),
        "uy": [YERLER[j]["ad"] for j in _uyeler[ad] if j != mi],
        "g": mp_koord(bg)})
_byol = os.path.join(KOK, "data", "bolgeler.js")
_bj  = "// Otomatik üretildi — elle düzenlemeyin. Betik: arac/uret_petek.py\n"
_bj += "// k1/k2 merkezlerin toplu bölge sınırları (üye peteklerinin birleşimi).\n"
_bj += "// f/t: merkezin Osmanlı aralığı — çizgi haritada yalnız bu aralıkta görünür.\n"
_bj += "window.BOLGELER = " + json.dumps(BOLGELER, ensure_ascii=False, separators=(",",":")) + ";\n"
open(_byol, "w", encoding="utf-8").write(_bj)
print(f"  {len(BOLGELER)} bölge → data/bolgeler.js ({os.path.getsize(_byol)//1024} KB)")

# ---------------- Yabancı devlet gövdeleri ----------------
# Her boya kimliği için: o kimliğe s dönemi olan hücrelerden, Osmanlı d/v'nin
# AKTİF OLMADIĞI aralıklarda birleşik gövde üretilir → data/devletler_harita.js
print("Yabancı devlet gövdeleri...")
def _osm_aktif(y, a):
    return (any(dn["f"] <= a < dn["t"] for dn in y["d"]) or
            any(dn["f"] <= a < dn["t"] for dn in y["v"]))
DEVLET_KAYIT = []
for did, (dad, renk) in BOYALAR.items():
    hj = [j for j, y in enumerate(YERLER) if any(sp["d"] == did for sp in y["s"])]
    if not hj: continue
    ts = set()
    for j in hj:
        for sp in YERLER[j]["s"]:
            if sp["d"] == did: ts.add(sp["f"]); ts.add(sp["t"])
        for dn in YERLER[j]["d"] + YERLER[j]["v"]:
            ts.add(dn["f"]); ts.add(dn["t"])
    ts = sorted(t for t in ts if EPOK <= t <= "1923-11-01")
    if not ts: continue
    if ts[0] != EPOK: ts.insert(0, EPOK)
    if ts[-1] != "1923-11-01": ts.append("1923-11-01")
    dnm = []; onceki = None
    for i in range(len(ts) - 1):
        a, b = ts[i], ts[i+1]
        aktif = frozenset(j for j in hj
                          if any(sp["d"] == did and sp["f"] <= a < sp["t"]
                                 for sp in YERLER[j]["s"])
                          and not _osm_aktif(YERLER[j], a))
        if aktif == onceki and dnm and aktif:
            dnm[-1]["t"] = b; continue
        onceki = aktif
        if not aktif: continue
        g = unary_union([PETEK_D[j] for j in aktif]).buffer(0)
        g = delikleri_doldur(kapat(g))
        # --- SIRALAMA KRİTİK (kullanıcı tespiti) ---
        # 1) Sadeleştirme KIYI KESİMİNDEN ÖNCE yapılır. Önceden tam tersiydi:
        #    KARA ile kesişim alındıktan sonra sadeleştirilince körfezler,
        #    yarımadalar ve koylar düzleşiyor, sınır kıyı çizgisiyle örtüşmüyordu.
        g = g.simplify(SADE_TOL, preserve_topology=True).buffer(0)
        # 2) Her devlet kendi sınırını bağımsız sadeleştirdiği için komşu iki
        #    devletin PAYLAŞTIĞI hat birbirinden en çok tolerans kadar sapabilir
        #    ve arada beyaz kılcal boşluk kalırdı. Toleransın yarısı kadar dışa
        #    taşırarak komşuların boşluk yerine hafifçe ÖRTÜŞMESİNİ sağlıyoruz;
        #    örtüşme görünmez, boşluk görünürdü.
        # join_style=2 (mitre) + resolution=1: yuvarlatılmış köşe yerine keskin
        # köşe üretir. Varsayılan yuvarlak birleştirme her köşeyi onlarca
        # parçalı yaya çeviriyor ve dosyayı iki katına çıkarıyordu (7 → 14 MB).
        g = g.buffer(SADE_TOL / 2, resolution=1, join_style=2, mitre_limit=2.0).buffer(0)
        # 3) Kıyı en son kesilir: deniz sınırı artık doğrudan KARA maskesinden
        #    gelir, yani gerçek girinti-çıkıntıya birebir oturur.
        g = g.intersection(KARA).buffer(0)
        if g.is_empty: continue
        rp = g.representative_point()
        dnm.append({"f": a, "t": b, "g": mp_koord(g),
                    "c": [round(rp.x, 2), round(rp.y, 2)]})
    if dnm: DEVLET_KAYIT.append({"id": did, "ad": dad, "renk": renk, "dnm": dnm})
_dyol = os.path.join(KOK, "data", "devletler_harita.js")
_dj  = "// Otomatik üretildi — elle düzenlemeyin. Betik: arac/uret_petek.py\n"
_dj += "// Yabancı devletlerin dönem gövdeleri (yerlesimler.js s alanından).\n"
_dj += "window.DEVLET_HARITA = " + json.dumps(DEVLET_KAYIT, ensure_ascii=False, separators=(",",":")) + ";\n"
open(_dyol, "w", encoding="utf-8").write(_dj)
print(f"  {len(DEVLET_KAYIT)} devlet, {sum(len(d['dnm']) for d in DEVLET_KAYIT)} dönem → "
      f"data/devletler_harita.js ({os.path.getsize(_dyol)//1024} KB)")

# ---------------- Dönemleri kur ----------------
print("Dönemler kuruluyor (delta yapısı)...")
# İki katman:
#   DOĞRUDAN (o)  : merkezden yönetilen toprak — koyu kırmızı
#   TÂBİ     (v)  : hâkimiyetin dolaylı olduğu toprak (muhtar valilik, tâbi
#                   beylik, fiilî işgal) — bir ton açık. Bir yerleşim aynı anda
#                   iki listede de görünüyorsa TÂBİ kazanır; çünkü "v" doğrudan
#                   idarenin askıya alındığı aralığı bildirir (ör. Suriye
#                   1832-1841 Kavalalı İbrâhim Paşa'nın elinde).
donemler = []
onceki_aktif = None      # işaret/marker için: doğrudan + tâbi hepsi
onceki_anahtar = None    # geometri için: (doğrudan, tâbi) ikilisi
for i in range(len(tarihler) - 1):
    a, b = tarihler[i], tarihler[i+1]
    tabi = frozenset(j for j, y in enumerate(YERLER)
                     if any(dn["f"] <= a < dn["t"] for dn in y["v"]))
    dogrudan = frozenset(j for j, y in enumerate(YERLER)
                         if any(dn["f"] <= a < dn["t"] for dn in y["d"])) - tabi
    aktif = dogrudan | tabi
    if not aktif:
        continue
    anahtar = (dogrudan, tabi)
    if anahtar == onceki_anahtar and donemler:  # hiçbir şey değişmediyse dönemi uzat
        donemler[-1]["t"] = b
        continue

    giren = [YERLER[j]["ad"] for j, y in enumerate(YERLER)
             if any(dn["f"] == a for dn in y["d"] + y["v"])]
    cikan = [YERLER[j]["ad"] for j, y in enumerate(YERLER)
             if any(dn["t"] == a for dn in y["d"] + y["v"])]
    if giren:   ad = "Katılım: " + ", ".join(giren[:3]) + ("…" if len(giren) > 3 else "")
    elif cikan: ad = "Kayıp: " + ", ".join(cikan[:3]) + ("…" if len(cikan) > 3 else "")
    else:       ad = donemler[-1]["ad"] if donemler else "—"

    gt = unary_union([PETEK_D[j] for j in tabi]).buffer(0) if tabi else None
    if gt is not None:
        gt = delikleri_doldur(kapat(gt)).intersection(KARA).buffer(0)
    g = unary_union([PETEK_D[j] for j in dogrudan]).buffer(0)
    g = delikleri_doldur(kapat(g)).intersection(KARA).buffer(0)
    # Tâbi bölge doğrudan gövdenin içinden çıkarılır; yoksa delik doldurma
    # Suriye'yi/Mısır'ı yutar ve iki katman üst üste biner.
    if gt is not None and not gt.is_empty:
        g = g.difference(gt).buffer(0)
    kaplam = unary_union([g, gt]) if gt is not None else g
    x0, y0, x1, y1 = kaplam.bounds
    # Geometri gönderilmez; yalnızca aktif petek indeksleri (delta) ve özetler.
    ekle = sorted(aktif - onceki_aktif) if onceki_aktif else sorted(aktif)
    cik  = sorted(onceki_aktif - aktif) if onceki_aktif else []
    # Birleşik dış hat: petekler tek gövde olarak çizilir, aradaki petek
    # sınırları görünmez. Sadeleştirme ile dosya boyutu dengelenir.
    dis = g.simplify(0.022, preserve_topology=True).buffer(0)
    kayit = {"f": a, "t": b, "ad": ad,
             "b": [round(x0,2), round(y0,2), round(x1,2), round(y1,2)],
             "ao": alan_km2(g), "e": ekle, "c": cik,
             "o": mp_koord(dis)}
    if gt is not None and not gt.is_empty:
        kayit["av"] = alan_km2(gt)
        kayit["v"]  = mp_koord(gt.simplify(0.03, preserve_topology=True).buffer(0))
    donemler.append(kayit)
    onceki_aktif = aktif
    onceki_anahtar = anahtar

# Petek geometrileri bir kez yazılır; dönemler yalnızca indeks tutar (21 MB → ~4 MB)
# Petek geometrileri artık gönderilmiyor; birleşik dış gövde yeterli (boyut)
petekler = [{"a": YERLER[j]["ad"]} for j in range(len(YERLER))]

js  = "// Otomatik üretildi — elle düzenlemeyin. Betik: arac/uret_petek.py\n"
js += "// PETEK (Voronoi) tabanlı: her yerleşimin bölgesi kıyı ve nehir yataklarına yaslı.\n"
js += "// PETEKLER bir kez tanımlanır; DONEMLER yalnızca eklenen/çıkan petek indekslerini tutar.\n"
js += "window.PETEKLER = " + json.dumps(petekler, separators=(",",":")) + ";\n"
js += "window.DONEMLER = " + json.dumps(donemler, separators=(",",":")) + ";\n"
open(CIKTI, "w", encoding="utf-8").write(js)

print(f"Dönem sayısı: {len(donemler)}")
print(f"Dosya boyutu: {os.path.getsize(CIKTI)//1024} KB")

# ---------------- Doğrulama ----------------
hata = 0
for j, y in enumerate(YERLER):
    if not (y["d"] or y["v"]): continue
    if PETEK_D[j].is_empty:
        print(f"  BOŞ PETEK: {y['ad']}"); hata += 1; continue
    if not PETEK_D[j].buffer(0.08).contains(Point(y["lon"], y["lat"])):
        print(f"  NOKTA PETEK DIŞINDA: {y['ad']}"); hata += 1
print("Doğrulama:", "tüm yerleşimlerin peteği geçerli ✓" if not hata else f"{hata} uyumsuzluk")
for d in donemler[:3] + donemler[-3:]:
    print(f"  {d['f']} → {d['t']}  {d['ao']/1e6:5.2f} mn km²  {d['ad'][:44]}")
print("Tâbi katmanlı dönem:", sum(1 for d in donemler if d.get("v")))
for d in donemler:
    if "1830-01-01" <= d["f"] <= "1842-12-31":
        print(f"  {d['f']} → {d['t']}  doğrudan {d['ao']/1e6:4.2f} + tâbi "
              f"{d.get('av',0)/1e6:4.2f} mn km²  {d['ad'][:46]}")
