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
import shapely
from shapely.geometry import (shape, box, Polygon, MultiPolygon, Point, MultiPoint,
                              LineString, MultiLineString)
from shapely.ops import unary_union, voronoi_diagram, nearest_points, linemerge, polygonize
from shapely.strtree import STRtree
from shapely.validation import make_valid

def temiz(q):
    """Geçersiz halkaları onarır; make_valid'in döndürebileceği çizgi artıklarını atar."""
    if not q.is_valid: q = make_valid(q)
    if q.geom_type == "GeometryCollection":
        q = unary_union([p for p in q.geoms if p.geom_type in ("Polygon", "MultiPolygon")])
    return q.buffer(0)

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# ⚠️ Bu yol bir dönem geçici klasöre (%TEMP%\claude\…\scratchpad\basemaps) bakıyordu.
# Temp temizlense harita motoru tamamen çalışmaz hâle gelirdi: 567 yerleşimlik veri
# elde kalır ama haritaya dönüştürülemezdi. Girdi verisi artık depoda; bkz.
# veri-kaynak/README.md. Yol betiğin konumundan türetilir, makineye bağlı değildir.
BASEMAPS = os.path.join(KOK, "veri-kaynak")
CIKTI = os.path.join(KOK, "data", "donemler.js")
# Kapsam: Batı Avrupa'dan Ural batısına, İskandinav güneyinden Afrika boynuzuna
BOLGE = box(-12, 1.5, 62, 62)

# ---------------- Devlet boya tablosu ----------------
# Yerleşimlerin s alanındaki kimlikler; her devlet haritada kendi renginde
# ayrı gövde olarak boyanır (Osmanlı d/v aktifken s bastırılır).
# Devlet renkleri ayrı modülde: arac/renkler.py
# (renk çalışması ile geometri çalışması aynı dosyaya yazmasın diye ayrıldı)
from renkler import BOYALAR
# Yerleşim girdisinin tek okuma noktası — dosya listesi girdi.py'de.
import girdi
R_DUNYA = 6371.0088

# ---------------- Kara maskesi ----------------
# KARA_TOL: kıyı çizgisinin sadeleştirme toleransı (derece). Bütün gövdeler
# kıyıyı EN SON ve bu tek maskeden aldığı için kıyı hassasiyetini tek başına
# bu sayı belirler. 0.004 ≈ 440 m Çanakkale gibi dar boğazları genişletiyordu
# (B-12); 0.002 ≈ 220 m ile maske köşe sayısı yalnız %33 artar (36,2k → 48,3k)
# ve parça havuzu sayesinde dosya bütçesine sığar — ölçüm: denetim/OTURUM-8 raporu.
KARA_TOL = 0.002
print(f"Kara maskesi (Natural Earth 10m, tolerans {KARA_TOL})...")
_ne = json.load(open(os.path.join(BASEMAPS, "ne_10m_land.geojson"), encoding="utf-8"))
KARA = unary_union([shape(f["geometry"]).buffer(0).intersection(BOLGE)
                    for f in _ne["features"] if shape(f["geometry"]).envelope.intersects(BOLGE)])
KARA = KARA.buffer(0).simplify(KARA_TOL, preserve_topology=True).buffer(0)
print("  tamam")

# ---------------- Göller ----------------
# Kural: iki yerleşim arasında göl varsa sınır göldür. Büyük göller kara
# maskesinden çıkarılır → petekler göl kıyısında biter, göl doğal sınır olur
# (Van, Urmiye, Tuz, Beyşehir, Ohri, İşkodra, Balaton...). delikleri_doldur
# sonrası .intersection(KARA) gölleri yeniden oyduğu için deliğe dönüşmezler.
# ⚠️ MODERN BARAJ GÖLLERİ ÇIKARILMAZ — hatalar 5.docx madde 1
# Kullanıcı: "Antalya İçel çukurovadaki boşluklar eğer gerçek değil ise
# düzeltilmeli... Aynı şey tuz gölünde de var." Ölçüldü: 1595'te Anadolu
# güneyinde Osmanlı olmayan TEK kara hücresi yok; oradaki üç boşluk Eğirdir,
# Beyşehir ve Tuz gölleridir — üçü de gerçek, kasıtlı. AMA aynı ölçüm, gerçek
# OLMAYAN dokuz boşluk ortaya çıkardı: Natural Earth'ün göl katmanı 20. yüzyıl
# BARAJ göllerini de taşıyor ve bunlar 1281-1923 atlasında delik açıyordu:
#   Nâsır gölü (Asvan 1970) Nûbe'de · Keban 1974 · Karakaya 1987 · Atatürk 1992
#   Esed gölü (Tabka 1974) · Tharthâr 1956 · Habbâniye 1956 · Mingeçevir 1953
#   Dinyeper zinciri (Kiev 1964, Kahovka 1956, Kremençug 1959, Dniprodzerjinsk)
# Bunlar artık maskeden çıkarılmıyor; yerleri kara sayılıyor.
# featurecla=="Reservoir" tek başına yetmiyor: NE, Mjøsa · Ilmen · Kubenskoye
# gibi DOĞAL gölleri de üzerlerindeki regülatör yüzünden "Reservoir" etiketler.
# Ölçüt: Reservoir + (yıl ≥ 1900 ya da baraj adı var) → çıkarılmaz;
# aşağıdaki DOGAL_GOL kümesi bu ölçütün yanlış yakaladığı doğal gölleri kurtarır.
DOGAL_GOL = {"Lake Il'Men'", "Ozero Kubenskoye", "Mjøsa", "Kostroma Reservoir"}
print("Göller...")
GOLLER = None
try:
    _gl = json.load(open(os.path.join(BASEMAPS, "ne_10m_lakes.geojson"), encoding="utf-8"))
    _gs, _baraj = [], []
    for f in _gl["features"]:
        p = f["properties"]
        g = shape(f["geometry"]).buffer(0)
        if not (g.envelope.intersects(BOLGE) and g.area > 0.02):
            continue
        _ad = p.get("name") or "(adsız)"
        _yil = p.get("year") or -99
        if (p.get("featurecla") == "Reservoir" and _ad not in DOGAL_GOL
                and (_yil >= 1900 or p.get("dam_name"))):
            _baraj.append(f"{_ad} ({_yil if _yil > 0 else 'yıl?'})")
            continue
        g = g.intersection(BOLGE)
        if not g.is_empty: _gs.append(g)
    GOLLER = unary_union(_gs).buffer(0).simplify(0.01, preserve_topology=True).buffer(0)
    KARA = KARA.difference(GOLLER).buffer(0)
    print(f"  {len(_gs)} büyük göl kara maskesinden çıkarıldı")
    print(f"  {len(_baraj)} MODERN BARAJ GÖLÜ çıkarılmadı (anakronik delik açıyordu):")
    for _b in sorted(_baraj): print(f"      {_b}")
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
# ⚠️ ÇOK DOSYALI GİRDİ (YAPILACAKLAR.md — paralel oturumların ön koşulu).
# Okuma mantığı ve dosya listesi artık `arac/girdi.py`'de; motor ile denetle.py
# aynı modülü kullanıyor. Sebep tarihî: iki araç aynı veriyi farklı katılıkta
# okuduğu için bir kez DENETİM TEMİZ DERKEN ÜRETİM ÇÖKTÜ (sondaki virgül
# toleransı motorda yoktu). Tek okuma noktası bunu yapısal olarak imkânsız kılar.
# Bir parti canlıya alınacaksa değişecek tek şey girdi.py'deki GIRDI_DOSYALARI.
print("Yerleşimler okunuyor...")
YERLER = girdi.yukle()
_cakisan = girdi.yakin_ciftler(YERLER)
if _cakisan:
    print(f"  UYARI: {len(_cakisan)} nokta çifti {girdi.YAKINLIK_ESIK_KM} km'den yakın")
    for _d, _a, _b in _cakisan[:10]:
        print(f"      {_d:.2f} km  {_a} <-> {_b}")
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
# ⚠️ TOPOLOJİ KURALI (Oturum 8): yumuşatma ve sadeleştirme petek petek DEĞİL,
# örtünün ORTAK KENAR AĞI üzerinde bir kez yapılır. Aynı kenar iki komşu hücrede
# ayrı ayrı işlenirse iki farklı sonuç çıkar → haritada kılcal boşluk/bindirme.
def chaikin_acik(cs, tur=2):
    """Açık hat için Chaikin: uç noktalar (düğümler) sabit kalır."""
    if len(cs) < 3: return cs
    for _ in range(tur):
        yeni = [cs[0]]
        for i in range(len(cs) - 1):
            p, q = cs[i], cs[i+1]
            yeni.append((0.75*p[0]+0.25*q[0], 0.75*p[1]+0.25*q[1]))
            yeni.append((0.25*p[0]+0.75*q[0], 0.25*p[1]+0.75*q[1]))
        yeni.append(cs[-1]); cs = yeni
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

# Atlasın başlangıç tarihi. TDV'ye göre Ertuğrul Gazi 680 (1281-82) yılında
# vefat etti ve Osman Bey beyliğe geçti; ilk askerî harekât 1285 Kulacahisar,
# ilk şehir fethi 1288 Karacahisar. Bu yüzden epok 1299 değil 1281.
EPOK = "1281-01-01"

# Örtü sadeleştirme toleransı (derece). coverage_simplify ile örtünün TAMAMINA
# bir kez uygulanır; ortak kenarların iki yanı birebir aynı kalır. Gövde başına
# ayrı simplify + dışa taşırma hilesi kaldırıldı — gerek kalmadı.
SADE_TOL = 0.012

def kapat(g, yaricap=0.15):
    """Morfolojik kapama: aralarında yaricap*2'den (≈33 km) daha az boşluk olan
    ayrı parçaları birleştirir. Aynı çekirdek beyliğin parçası olan komşu
    petekler, aralarına giren ince 'henüz o an aktif olmayan komşu' şeridi
    yüzünden kopuk görünebiliyordu (ör. 1299'da İnegöl'ün Söğüt-Bilecik'ten
    ayrı bir 'ada' gibi çizilmesi). Deniz/kıta arası gerçek boşluklar bu
    yarıçaptan büyük olduğu için etkilenmez; kapamadan sonra KARA ile
    kesişim alınacağından geçici deniz taşkını da temizlenir.
    Topoloji notu: mitre birleşim, buffer'ın yay örneklemesiyle kenara nokta
    eklemesini önler; sonuç orijinalle BİRLEŞTİRİLİR ki gidip-gelen buffer'ın
    sayısal aşındırması ortak kenarı bir mikron bile oynatamasın (boşluk kaynağı)."""
    if g.is_empty: return g
    k = temiz(g.buffer(yaricap, join_style=2, mitre_limit=2.0)).buffer(-yaricap, join_style=2, mitre_limit=2.0)
    return unary_union([temiz(k), g])

def poligonal(g):
    """intersection/difference çıktısı geçerli ama karışık bir GeometryCollection
    olabilir (kıyıda çizgi artığı); poligonal olmayan parçaları süz."""
    if g.geom_type == "GeometryCollection" or not g.is_valid: return temiz(g)
    return g

def delikleri_doldur(g):
    """Kuşatılmış boşluk bırakmaz: çevresi ele geçmiş alan (dağ bloğu, ova) da
    hâkimiyet altındadır."""
    if g.is_empty: return g
    ps = g.geoms if isinstance(g, MultiPolygon) else [g]
    return unary_union([Polygon(p.exterior) for p in ps]).buffer(0)

# ---------------- Örtü boru hattı ----------------
# Petekler tek bir ÖRTÜ (coverage) olarak işlenir:
#   1) Voronoi hücrelerinin ortak kenar ağı çıkarılır (her kenar TEK kopya)
#   2) Yaslama + Chaikin bu ağ üzerinde bir kez yapılır (düğümler sabit)
#   3) polygonize ile hücreler geri kurulur → boşluksuz/bindirmesiz örtü
#   4) set_precision ortak ızgara, coverage_simplify topoloji korumalı sadeleştirme
#   5) Kıyı kesimi (KARA) EN SON — sonrasında hiçbir geometri işlemi yok
print("Ortak kenar ağı çıkarılıyor...")
_bx0, _by0, _bx1, _by1 = BOLGE.bounds
def _kutuda(x, y, e=1e-9):
    return (abs(x-_bx0) < e or abs(x-_bx1) < e or
            abs(y-_by0) < e or abs(y-_by1) < e)

_ag = linemerge(unary_union([h.exterior for h in PETEK]))
_kenarlar = list(_ag.geoms) if _ag.geom_type == "MultiLineString" else [_ag]
print(f"  {len(_kenarlar)} kenar")

print("Kenarlar doğal hatlara yaslanıp yumuşatılıyor (örtü üzerinde bir kez)...")
_puruzsuz = []
for ln in _kenarlar:
    cs = list(ln.coords)
    if all(_kutuda(x, y) for x, y in cs):        # BOLGE çerçevesi düz kalır
        _puruzsuz.append(ln); continue
    bas, son = cs[0], cs[-1]
    cs = dogal_hatta_yasla(sikla(cs))
    cs[0], cs[-1] = bas, son                     # düğümler sabit: komşu kenarlar aynı noktada buluşur
    _puruzsuz.append(LineString(chaikin_acik(cs, 2)))

print("Hücreler geri kuruluyor (polygonize)...")
# ⚠️ ULP kuralı: bütün yüzler TEK bir polygonize'dan çıkmalı ve hücreler
# coverage_union_all ile (yeniden düğümleme YAPMADAN) birleştirilmeli. Yüz yüz
# unary_union ya da yerel intersection(f) kırpması, ortak köşeleri son bitte
# (ULP) kaydırıp örtüde bozuk kenar bırakıyordu (Hvar/Vis/Dir'iye vakaları).
_nokta_agaci = STRtree(noktalar)
def _cizgiler(g):
    """Geometrinin çizgi bileşenlerini döker (polygonize girdisi için)."""
    if g.is_empty: return []
    if g.geom_type in ("LineString", "LinearRing"): return [g]
    if hasattr(g, "geoms"): return [p for q in g.geoms for p in _cizgiler(q)]
    return []
def _yuzler_kur(hatlar):
    return [f for f in polygonize(unary_union(hatlar)) if not f.is_empty]

_yuzler = _yuzler_kur(_puruzsuz)
# Çok noktalı yüzler (yaslama bir kenarı noktaların üzerinden geçirmiş): yüzün
# içine mini-Voronoi bölme çizgileri eklenir ve HER ŞEY birlikte yeniden
# polygonize edilir — böylece bölme kenarları da ortak düğümlemeden geçer.
_ek_hat = []
for f in _yuzler:
    ic = [int(i) for i in _nokta_agaci.query(f, predicate="contains_properly")]
    if len(ic) > 1:
        alt = voronoi_diagram(MultiPoint([noktalar[i] for i in ic]), envelope=f)
        _ek_hat += _cizgiler(unary_union([c.boundary for c in alt.geoms]).intersection(f))
if _ek_hat:
    _yuzler = _yuzler_kur(_puruzsuz + _ek_hat)
print(f"  {len(_yuzler)} yüz ({len(_ek_hat)} mini-Voronoi bölme çizgisi)")

_kume = [[] for _ in YERLER]                     # hücre başına yüz listesi
_yetim = []
for f in _yuzler:
    ic = [int(i) for i in _nokta_agaci.query(f, predicate="contains_properly")]
    if not ic:
        _yetim.append(f)
    else:
        if len(ic) > 1:                          # bölme sonrası hâlâ çoksa (nadir): en yakını alır
            print(f"  UYARI örtü: yüz {len(ic)} nokta içeriyor, en yakını seçildi")
            ic = [min(ic, key=lambda i: f.centroid.distance(noktalar[i]))]
        _kume[ic[0]].append(f)
# Nokta içermeyen yüzler: en uzun ortak kenarı paylaştığı sahipli yüzün
# hücresine katılır (birkaç tur: yetim zinciri olabilir); komşusuz kalan
# en yakın noktaya verilir.
_sahipli = [(f, i) for i, fs in enumerate(_kume) for f in fs]
_kalan = _yetim
for _tur in range(4):
    if not _kalan: break
    _agacY = STRtree([f for f, _ in _sahipli])
    _sonra = []
    for f in _kalan:
        en, enuz = None, -1.0
        for k in _agacY.query(f, predicate="intersects"):
            ort = f.boundary.intersection(_sahipli[int(k)][0].boundary).length
            if ort > enuz: enuz, en = ort, _sahipli[int(k)][1]
        if en is None or enuz <= 0:
            _sonra.append(f)
        else:
            _kume[en].append(f); _sahipli.append((f, en))
    _kalan = _sonra
for f in _kalan:
    i = min(range(len(noktalar)), key=lambda i: f.distance(noktalar[i]))
    _kume[i].append(f)

PETEK_TAM = []
for i, fs in enumerate(_kume):
    if not fs:
        print(f"  UYARI örtü: {YERLER[i]['ad']} hücresiz kaldı")
        PETEK_TAM.append(Polygon())
    else:
        PETEK_TAM.append(shapely.coverage_union_all(fs) if len(fs) > 1 else fs[0])
print(f"  {len(_yetim)} yetim yüz sahipli komşulara katıldı")

print("Örtü topoloji korunarak sadeleştiriliyor (coverage_simplify)...")
# NOT: set_precision KULLANILMIYOR — ortak köşeler zaten bit düzeyinde aynı;
# ızgaraya oturtma, üçlü kavşaklarda hücre başına farklı çökme yapıp bozuk
# kenar üretiyordu (Maraş/Adana/Antakya kavşağında görüldü).
def _bozuk_dok(hucreler, etiket):
    idx = [i for i, g in enumerate(hucreler) if g is not None and not g.is_empty]
    b = shapely.coverage_invalid_edges([hucreler[i] for i in idx])
    kot = [(idx[k], x) for k, x in enumerate(b) if x is not None and not x.is_empty]
    for i, x in kot:
        print(f"    BOZUK KENAR [{etiket}] {YERLER[i]['ad']}: {x.wkt[:90]}")
    return len(kot)
_n0 = _bozuk_dok(PETEK_TAM, "ham")
PETEK_TAM = list(shapely.coverage_simplify(PETEK_TAM, SADE_TOL))
_n1 = _bozuk_dok(PETEK_TAM, "sade")
print(f"  örtü geçerliliği: sadeleştirme öncesi {_n0}, sonrası {_n1} bozuk kenar "
      + ("✓" if _n0 == 0 and _n1 == 0 else "✗ BOŞLUK/BİNDİRME VAR"))

# Kıyı kesimi EN SON: bütün gövdelerin deniz sınırı doğrudan KARA maskesinden
# gelir; kesimden sonra hiçbir sadeleştirme/yumuşatma yapılmaz.
PETEK_D = [poligonal(g.intersection(KARA)) for g in PETEK_TAM]

# ---------------- ADA KURALI ----------------
# Bir yerleşimin peteği KENDİ kara parçasının dışına taşamaz.
# Voronoi noktalar üzerinden hesaplanıp hücreler sonra karaya kırpıldığı için,
# deniz atılıyor ama hücrenin KARŞI KIYIDAKİ parçası kalıyordu: Midilli
# Ayvalık'ı, Marmara Adası Kapıdağ'ı, İskiathos Eğriboz'un kuzeyini boyuyordu.
# Artık kara maskesinin her bağlantılı parçası yalnız kendi içindeki
# yerleşimler arasında paylaşılıyor.
print("Ada kuralı: petekler kendi kara parçalarına hapsediliyor...")
_komp = list(KARA.geoms) if KARA.geom_type == "MultiPolygon" else [KARA]
_ptl = [Point(y["lon"], y["lat"]) for y in YERLER]
_pagac = STRtree(_ptl)
_tasan, _yalitilan = 0, 0
for _k in _komp:
    if _k.is_empty or _k.area < 1e-7:
        continue
    _ic = [int(i) for i in _pagac.query(_k) if _k.intersects(_ptl[int(i)])]
    if not _ic:
        continue                       # noktasız kara parçası: eski davranış
    _icset = set(_ic)
    # dışarıdaki yerleşimlerin bu parçadaki payını kes
    for _j in [int(i) for i in range(len(PETEK_D)) if i not in _icset]:
        if PETEK_D[_j].is_empty or not PETEK_D[_j].intersects(_k):
            continue
        _yeni = poligonal(PETEK_D[_j].difference(_k))
        if not _yeni.equals(PETEK_D[_j]):
            PETEK_D[_j] = _yeni
            _tasan += 1
    # boşta kalan payı, parçanın İÇİNDEKİ en yakın yerleşime ver
    _dolu = unary_union([PETEK_D[i] for i in _ic]) if _ic else None
    _bos = poligonal(_k.difference(_dolu)) if _dolu is not None else _k
    if not _bos.is_empty and _bos.area > 1e-9:
        for _pp in (_bos.geoms if _bos.geom_type == "MultiPolygon" else [_bos]):
            if _pp.is_empty:
                continue
            _en = min(_ic, key=lambda i: _ptl[i].distance(_pp))
            PETEK_D[_en] = poligonal(unary_union([PETEK_D[_en], _pp]))
            _yalitilan += 1
print(f"  {_tasan} taşma kesildi, {_yalitilan} boşta kalan parça içerideki yerleşime verildi")

_nk = _bozuk_dok(PETEK_D, "kıyı")
print(f"  kıyı kesimi sonrası örtü: {_nk} bozuk kenar " + ("✓" if _nk == 0 else "✗"))

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

# ---------------- Parça havuzu ----------------
# Aynı gövde parçası (ada, değişmeyen ana halka…) yüzlerce dönemde birebir
# tekrarlanıyordu; ölçüm: donemler.js noktalarının yalnız %40'ı eşsizdi.
# Parçalar dosya başına TEK havuza yazılır, dönem kayıtları havuz indeksi taşır.
# js/app.js yüklerken indeksleri geometriye çevirir (aynı parça bellekte de
# tek nesne olur). Kazanç: kıyı 0.004 çözünürlükte kalırken dosya ~%60 küçülür.
def havuza(mp, havuz, ix):
    out = []
    for parca in mp:
        k = json.dumps(parca, separators=(",", ":"))
        j = ix.get(k)
        if j is None:
            j = len(havuz); havuz.append(parca); ix[k] = j
        out.append(j)
    return out

def mp_koord(g):
    if g.is_empty: return []
    if isinstance(g, Polygon): g = MultiPolygon([g])
    out = []
    for p in g.geoms:
        # ⚠️ Eşik 0.008'di (~79 km²) ve GERÇEK ADALARI atıyordu: Patmos 34 km²,
        # Herke 28, Folegandros 32, Sömbeki 58, Kaşot 66… Emilmeyi önlemek için
        # eklenen ada noktalarının peteği üretiliyor ama çıktıya yazılmıyordu:
        # veri doğru, harita boş. Filtrenin amacı buffer(0)/intersection'dan
        # kalan sayısal kırıntıları atmak; onlar 1e-5 mertebesindedir.
        if p.area < 0.0002: continue      # ~2 km²
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
    bg = unary_union([PETEK_D[j] for j in _uyeler[ad]])
    bg = poligonal(delikleri_doldur(kapat(bg)).intersection(KARA))
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
DEV_HAVUZ, DEV_IX = [], {}
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
        g = unary_union([PETEK_D[j] for j in aktif])
        g = delikleri_doldur(kapat(g))
        # Sadeleştirme örtü üzerinde ÖNCEDEN yapıldı (coverage_simplify); gövde
        # başına simplify ve "tolerans/2 dışa taşırma" hilesi kaldırıldı — komşu
        # devletlerin paylaştığı kenar artık birebir aynı koordinatlardan geçer,
        # kılcal boşluk da bindirme de üretilmez. Kıyı EN SON kesilir: deniz
        # sınırı doğrudan KARA maskesinden gelir, girinti-çıkıntıya birebir oturur.
        g = poligonal(g.intersection(KARA))
        if g.is_empty: continue
        rp = g.representative_point()
        dnm.append({"f": a, "t": b, "g": havuza(mp_koord(g), DEV_HAVUZ, DEV_IX),
                    "c": [round(rp.x, 2), round(rp.y, 2)]})
    if dnm: DEVLET_KAYIT.append({"id": did, "ad": dad, "renk": renk, "dnm": dnm})
_dyol = os.path.join(KOK, "data", "devletler_harita.js")
_dj  = "// Otomatik üretildi — elle düzenlemeyin. Betik: arac/uret_petek.py\n"
_dj += "// Yabancı devletlerin dönem gövdeleri (yerlesimler.js s alanından).\n"
_dj += "// dnm[].g, DEVLET_PARCALAR havuzuna indekstir (js/app.js çözer).\n"
_dj += "window.DEVLET_PARCALAR = " + json.dumps(DEV_HAVUZ, separators=(",",":")) + ";\n"
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
OSM_HAVUZ, OSM_IX = [], {}   # o + v parçaları tek havuzda
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

    gt = None
    if tabi:
        gt = poligonal(delikleri_doldur(kapat(unary_union([PETEK_D[j] for j in tabi]))).intersection(KARA))
    g = poligonal(delikleri_doldur(kapat(unary_union([PETEK_D[j] for j in dogrudan]))).intersection(KARA))
    # Tâbi bölge doğrudan gövdenin içinden çıkarılır; yoksa delik doldurma
    # Suriye'yi/Mısır'ı yutar ve iki katman üst üste biner.
    if gt is not None and not gt.is_empty:
        g = poligonal(g.difference(gt))
    kaplam = unary_union([g, gt]) if gt is not None else g
    x0, y0, x1, y1 = kaplam.bounds
    # Geometri gönderilmez; yalnızca aktif petek indeksleri (delta) ve özetler.
    ekle = sorted(aktif - onceki_aktif) if onceki_aktif else sorted(aktif)
    cik  = sorted(onceki_aktif - aktif) if onceki_aktif else []
    # Birleşik dış hat: petekler tek gövde olarak çizilir, aradaki petek
    # sınırları görünmez. Kesim sonrası simplify YOK — hem kıyı oturması hem
    # yabancı komşularla ortak kenar bozulurdu (eski 0.022/0.03 buradaydı).
    kayit = {"f": a, "t": b, "ad": ad,
             "b": [round(x0,2), round(y0,2), round(x1,2), round(y1,2)],
             "ao": alan_km2(g), "e": ekle, "c": cik,
             "o": havuza(mp_koord(g), OSM_HAVUZ, OSM_IX)}
    if gt is not None and not gt.is_empty:
        kayit["av"] = alan_km2(gt)
        kayit["v"]  = havuza(mp_koord(gt), OSM_HAVUZ, OSM_IX)
    donemler.append(kayit)
    onceki_aktif = aktif
    onceki_anahtar = anahtar

# Petek geometrileri bir kez yazılır; dönemler yalnızca indeks tutar (21 MB → ~4 MB)
# Petek geometrileri artık gönderilmiyor; birleşik dış gövde yeterli (boyut)
petekler = [{"a": YERLER[j]["ad"]} for j in range(len(YERLER))]

js  = "// Otomatik üretildi — elle düzenlemeyin. Betik: arac/uret_petek.py\n"
js += "// PETEK (Voronoi) tabanlı: her yerleşimin bölgesi kıyı ve nehir yataklarına yaslı.\n"
js += "// PETEKLER bir kez tanımlanır; DONEMLER yalnızca eklenen/çıkan petek indekslerini tutar.\n"
js += "// DONEMLER'in o/v alanları PARCALAR havuzuna indekstir (js/app.js çözer).\n"
js += "window.PETEKLER = " + json.dumps(petekler, separators=(",",":")) + ";\n"
js += "window.PARCALAR = " + json.dumps(OSM_HAVUZ, separators=(",",":")) + ";\n"
js += "window.DONEMLER = " + json.dumps(donemler, separators=(",",":")) + ";\n"
open(CIKTI, "w", encoding="utf-8").write(js)

print(f"Dönem sayısı: {len(donemler)}")
print(f"Parça havuzu: donemler {len(OSM_HAVUZ)}, devletler {len(DEV_HAVUZ)} eşsiz parça")
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
