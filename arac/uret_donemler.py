# -*- coding: utf-8 -*-
"""
☠️☠️ ÖLÜ BETİK — ÇALIŞTIRILMIYOR, ÇIKTISI YAYINDA YOK ☠️☠️
==========================================================
Bu dosya `data/donemler.js`i ARTIK ÜRETMİYOR. Canlı motor `arac/uret_petek.py`.

🔴 ÖZELLİKLE: aşağıdaki `SEHZ_*` şehzade payı poligonları (Fetret Devri)
   ÜRETİLMİYOR. Ölçüldü (31 Temmuz): `data/donemler.js` içinde `z` alanı
   taşıyan dönem sayısı **SIFIR**. `js/app.js` hâlâ `sehzade-dolgu` katmanını
   kuruyor ama besleyen veri hiç gelmiyor — o da ölü kod.
   ⇒ Fetret'te şehzade payları BURADAN değil, `yerlesimler.js`'in `s:`
     alanından NORMAL DEVLET KİMLİĞİ olarak çiziliyor:
     `suleyman-celebi` · `mehmed-celebi` · `musa-celebi` · `isa-celebi`.

⚠️ BU DAMGA NEDEN VAR: 31 Temmuz'da koordinatör, kullanıcının Fetret
   şikâyetini bu dosyadaki `SEHZ_*` poligonlarının üst üste binmesine bağladı
   ve hipotezi üzerine ölçüm ısmarladı. Dosya canlı sanıldı. Ölçüm yapılsaydı
   ÖLÜ KOD ölçülmüş, gerçek sebep (kırmızı ailesinin ΔE 6,0-11,2 ile ayırt
   edilememesi) bulunamamış olacaktı.
   📌 Kusur ÜRETMEYEN ölü kod, kusur üretenden daha sinsi olabiliyor: hata
     vermiyor, yalnız YANLIŞ TEŞHİSE götürüyor.

📌 SİLİNMEDİ, çünkü içinde elle çizilmiş tarihî sınır poligonları var
   (`SEHZ_*`, `KAFKAS`, `SURIYE_D`…) ve bir gün gerekebilir. Ama damgasız
   duran kod CANLI SANILIR — bugün sanıldı.

──────────────────────────────────────────────────────────────────────────
Aşağısı tarihî kayıt; çalıştırmayın.

Osmanlı Tarih Atlası — dönem üretim betiği (ESKİ)
==========================================
Girdi : historical-basemaps yıl kesitleri (world_XXXX.geojson) — BASEMAPS klasöründe
Çıktı : ../data/donemler.js  →  window.DONEMLER = [{f,t,ad,b,o,v}, ...]

Her dönem kaydı:
  f/t : geçerlilik aralığı (YYYY-AA-GG), b: bbox [batı,güney,doğu,kuzey]
  o   : doğrudan Osmanlı toprağı (tek MultiPolygon'a DISSOLVE edilmiş — keskin sınır)
  v   : bağlı/özerk topraklar (o'dan ÇIKARILMIŞ — üst üste binme yok)

İlkeler:
  • Elle çizilen tüm halkalar KARA MASKESİ ile kesilir → sınırlar denize taşmaz
  • Kesit hataları tarihe göre düzeltilir (Girit/Kıbrıs/Rodos/Macaristan/K.Afrika vb.)
  • Aynı andaki tüm parçalar birleştirilir; aralar kapatılır (closing buffer) → tek keskin şekil

Çalıştırma:  py uret_donemler.py   (shapely gerekir: py -m pip install shapely)
"""
import json, os, sys, io, math
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
from shapely.geometry import shape, box, Polygon, MultiPolygon, Point
from shapely.ops import unary_union

# ☠️ BU MOTOR KULLANILMIYOR (bkz. MIMARI.md §8). Okuduğu historical-basemaps
# yıl kesitleri (world_*.geojson) ve ne_10m_countries.geojson depoda YOK;
# canlı motorun (uret_petek.py) ihtiyacı olanlar veri-kaynak/ altındadır.
BASEMAPS = r"C:\Users\emrem\AppData\Local\Temp\claude\C--Users-emrem-OneDrive-Belgeler-Projeler-Ranking\2ad1685f-dd0a-4c8c-8b9d-a89c216d56e6\scratchpad\basemaps"
CIKTI = os.path.join(os.path.dirname(__file__), "..", "data", "donemler.js")
BOLGE = box(-10, 10, 55, 52)          # çalışma penceresi

def yukle(yil):
    return json.load(open(os.path.join(BASEMAPS, f"world_{yil}.geojson"), encoding="utf-8"))

def osmanli(yil):
    d = yukle(yil)
    gs = [shape(f["geometry"]).buffer(0) for f in d["features"]
          if "ottoman" in (f["properties"].get("NAME") or "").lower()]
    return unary_union(gs)

def adli(yil, ad):
    for f in yukle(yil)["features"]:
        if (f["properties"].get("NAME") or "") == ad:
            return shape(f["geometry"]).buffer(0)
    raise KeyError(ad)

def icinde_adi(yil, parca):
    for f in yukle(yil)["features"]:
        n = (f["properties"].get("NAME") or "").lower()
        if parca in n: return shape(f["geometry"]).buffer(0)
    raise KeyError(parca)

print("Kara maskesi hazırlanıyor (Natural Earth 10m kıyı çizgisi)...")
ne = json.load(open(os.path.join(BASEMAPS, "ne_10m_land.geojson"), encoding="utf-8"))
kara_parcalari = []
for f in ne["features"]:
    g = shape(f["geometry"])
    if g.envelope.intersects(BOLGE):
        kara_parcalari.append(g.buffer(0).intersection(BOLGE))
# 10m veri ~0.4 km hassasiyetinde sadeleştirilir: kıyılar keskin kalır, dosya şişmez
KARA = unary_union(kara_parcalari).buffer(0).simplify(0.004, preserve_topology=True).buffer(0)
# Kıyı şeridi: karanın kıyıdan ~20 km içeri kadar olan bandı (kıyıya yapıştırma için)
KIYI_SERIDI = KARA.difference(KARA.buffer(-0.18))
print("  kara maskesi tamam")

print("Nehir yatakları yükleniyor (sınırların doğal hatlara yaslanması için)...")
# Tarihî sınırların yaslandığı başlıca akarsular
BUYUK_NEHIRLER = {
    "Danube", "Duna", "Dunav", "Sava", "Drava", "Tisza", "Tisa", "Morava",
    "Dniester", "Dnipro", "Dnieper", "Prut", "Southern Bug", "Don", "Kuban",
    "Firat", "Al Furat", "Euphrates", "Dijlah", "Tigris", "Murat", "Kura",
    "Aras", "Araks", "Nile", "Bahr el Nil", "Maritsa", "Meric", "Vardar",
    "Struma", "Sakarya", "Kizilirmak", "Yesilirmak", "Seyhan", "Ceyhan",
    "Jordan", "Orontes", "Asi", "Buyuk Menderes", "Gediz"
}
NEHIRLER, NEHIR_AGACI = [], None
try:
    from shapely.strtree import STRtree
    _rv = json.load(open(os.path.join(BASEMAPS, "ne_10m_rivers.geojson"), encoding="utf-8"))
    for f in _rv["features"]:
        pr = f["properties"]
        ad = (pr.get("name") or pr.get("name_en") or "")
        if ad not in BUYUK_NEHIRLER: continue
        g = shape(f["geometry"])
        if not g.envelope.intersects(BOLGE): continue
        NEHIRLER.append(g.intersection(BOLGE.buffer(2)))
    NEHIRLER = [n for n in NEHIRLER if not n.is_empty]
    if NEHIRLER: NEHIR_AGACI = STRtree(NEHIRLER)
    print(f"  {len(NEHIRLER)} nehir parçası yüklendi")
except Exception as e:
    print("  nehir verisi yüklenemedi, yaslama atlanacak:", e)

# Kullanıcının KML referansı: 1590 en geniş sınırlar (5,27 milyon km²).
# Zirve dönemi doğrudan bu poligonla temsil edilir; diğer dönemler ondan türetilir.
KML_1590 = None
try:
    _kj = json.load(open(os.path.join(BASEMAPS, "kml_1590.geojson"), encoding="utf-8"))
    KML_1590 = shape(_kj["geometry"]).buffer(0)
    print(f"  KML referans sınırı yüklendi ({len(KML_1590.geoms)} parça)")
except Exception as e:
    print("  KML referansı yok:", e)

def ulke_geo(ad):
    """Natural Earth 10m ülke sınırı (modern) — 1918 sonrası dönemler için."""
    d = json.load(open(os.path.join(BASEMAPS, "ne_10m_countries.geojson"), encoding="utf-8"))
    for f in d["features"]:
        if (f["properties"].get("NAME") or "") == ad:
            return shape(f["geometry"]).buffer(0)
    raise KeyError(ad)

def kiyiya_yapistir(g):
    """Dönem geometrisini gerçek kıyıya oturt:
    1) çokgenin ZATEN önemli ölçüde örttüğü kıyı şeridi parçalarını ekle
       (kıyıya uzat) — yalnızca dokunmak yetmez; aksi hâlde komşu kıyılara
       ince 'dal' artıkları oluşur
    2) denize taşan kısımları kes"""
    if g.is_empty: return g
    g = delikleri_temizle(g)
    ek = KIYI_SERIDI.intersection(g.buffer(0.15)).buffer(0)
    parcalar = ek.geoms if isinstance(ek, MultiPolygon) else ([ek] if not ek.is_empty else [])
    dokunan = []
    for p in parcalar:
        if not p.intersects(g): continue
        oran = p.intersection(g).area / p.area
        # Büyük bantlar ancak iyi örtüşürse eklenir (yoksa komşu kıyıya 'dal'
        # uzar); küçük kıyı çentikleri daha düşük eşikle doldurulur.
        if oran > 0.25 or (p.area < 0.35 and oran > 0.05):
            dokunan.append(p)
    if dokunan:
        g = unary_union([g] + dokunan)
    g = g.buffer(0).intersection(KARA).buffer(0)
    return delikleri_temizle(g)

def chaikin_halka(cs, tur=2):
    """Chaikin köşe kesme: köşeli çokgeni organik hatta dönüştürür."""
    cs = list(cs)
    if len(cs) < 4: return cs
    for _ in range(tur):
        yeni = []
        n = len(cs) - 1                      # son nokta ilkin tekrarı
        for i in range(n):
            p, q = cs[i], cs[i+1]
            yeni.append((0.75*p[0] + 0.25*q[0], 0.75*p[1] + 0.25*q[1]))
            yeni.append((0.25*p[0] + 0.75*q[0], 0.25*p[1] + 0.75*q[1]))
        yeni.append(yeni[0])
        cs = yeni
    return cs

def sikla(cs, adim=0.25):
    """Uzun düz kenarları ara noktalarla böler (nehre yaslama için gerekli)."""
    yeni = []
    for i in range(len(cs) - 1):
        (x1, y1), (x2, y2) = cs[i], cs[i+1]
        yeni.append((x1, y1))
        d = math.hypot(x2-x1, y2-y1)
        n = int(d / adim)
        for k in range(1, n):
            t = k / n
            yeni.append((x1 + (x2-x1)*t, y1 + (y2-y1)*t))
    yeni.append(cs[-1])
    return yeni

def nehre_yasla(cs, mesafe=0.32):
    """Sınır noktalarını yakınlarındaki büyük nehir yatağına çeker.
    Tarihî sınırlar çoğunlukla nehirleri takip eder; bu işlem cetvel gibi duran
    hatları gerçek akarsu yataklarına oturtur (NEHIR_AGACI, Natural Earth 10m)."""
    if NEHIR_AGACI is None: return cs
    yeni = []
    for x, y in cs:
        p = Point(x, y)
        yakin = NEHIR_AGACI.query(p.buffer(mesafe))
        en_iyi, en_yakin = None, mesafe
        for i in yakin:
            hat = NEHIRLER[i]
            d = hat.distance(p)
            if d < en_yakin:
                en_yakin, en_iyi = d, hat
        if en_iyi is not None:
            q = en_iyi.interpolate(en_iyi.project(p))
            yeni.append((q.x, q.y))
        else:
            yeni.append((x, y))
    return yeni

def yumusat(g, tur=2, yasla=True):
    """Sınırları coğrafi gerçekliğe yaklaştırır: uzun düz hatlar sıklaştırılır,
    yakındaki nehir yataklarına yaslanır, ardından Chaikin ile köşeler kırılır.
    Kıyılar sonradan kara maskesiyle kesildiği için keskin kalır."""
    if g.is_empty: return g
    parcalar = g.geoms if isinstance(g, MultiPolygon) else [g]
    yeni = []
    for p in parcalar:
        dis = list(p.exterior.coords)
        if yasla: dis = nehre_yasla(sikla(dis))
        dis = chaikin_halka(dis, tur)
        icler = []
        for h in p.interiors:
            if Polygon(h).area <= 0.02: continue   # (delikler zaten dolduruldu)
            hc = list(h.coords)
            if yasla: hc = nehre_yasla(sikla(hc))
            icler.append(chaikin_halka(hc, tur))
        try:
            yeni.append(Polygon(dis, icler).buffer(0))
        except Exception:
            yeni.append(p)
    return unary_union(yeni).buffer(0)

def delikleri_temizle(g, esik=1e6):
    """Geometrideki İÇ BOŞLUKLARI kapatır.
    İlke: çevresi tamamen ele geçmiş bir alan (dağ bloğu, ova, göl çevresi) o
    dönemde fiilen hâkimiyet altındadır — kuşatılmış bir boşluk bırakmak yapay
    enklav üretir. Bu yüzden varsayılan olarak tüm iç halkalar doldurulur;
    gerçek tarihî enklavlar gerekirse ayrı 'kesici' maskelerle tanımlanır."""
    if g.is_empty: return g
    parcalar = g.geoms if isinstance(g, MultiPolygon) else [g]
    yeni = []
    for p in parcalar:
        delikler = [h for h in p.interiors if Polygon(h).area >= esik]
        yeni.append(Polygon(p.exterior, delikler) if len(delikler) != len(list(p.interiors)) else p)
    return unary_union(yeni).buffer(0)

def H(halka):
    """Elle çizilmiş halka → kara maskesiyle kesilmiş geometri (denize taşmaz)."""
    return Polygon(halka).buffer(0).intersection(KARA)

# ---------------- Kesiciler ----------------
IST     = box(27.9, 40.8, 29.25, 41.35)
KIBRIS  = box(31.8, 34.2, 35.3, 36.1)
GIRIT   = box(22.8, 34.4, 26.8, 36.0)
RODOSK  = box(27.5, 35.9, 28.45, 36.6)
MACARK  = box(16.0, 44.9, 23.2, 48.6)
CEZK    = box(-5.0, 27.0, 8.6, 38.2)
TRBK    = box(10.8, 27.0, 24.8, 33.5)
TUNK    = box(8.6, 29.5, 10.8, 38.2)
MORAK   = Polygon([(20.9,36.2),(23.5,36.2),(23.5,37.5),(23.08,37.92),(22.95,38.2),(22.2,38.45),(20.9,38.5)])
SELANIK_KES = box(22.7, 40.35, 23.15, 40.8)      # Selanik çevresi (1403-1430 Bizans/Venedik)

# ---- Kutsal İttifak Savaşları (1683-1699) aşamalı kayıp maskeleri ----
K_ESTERGON  = box(17.4, 47.4, 21.5, 49.3)        # Estergon-Yukarı Macaristan (1683)
K_UYVAR     = box(17.4, 47.7, 19.5, 48.6)        # Uyvar ve çevresi (1685)
K_MACAR1686 = box(16.0, 46.2, 21.6, 49.3)        # Budin ve Orta Macaristan (1686)
K_MACAR1687 = box(16.0, 45.3, 23.3, 49.3)        # + Erdel ve Güney Macaristan (1687)
K_MORA87    = Polygon([(20.9,36.2),(23.5,36.2),(23.5,37.5),(23.08,37.92),
                       (22.95,38.2),(22.2,38.45),(20.9,38.5)])   # Mora (Venedik, 1687)
K_SIRBISTAN = box(19.3, 43.0, 23.2, 45.3)        # Belgrad-Niş-Vidin (1688-1690)
K_BANAT     = box(20.3, 45.0, 22.6, 46.5)        # Banat/Tisa boyu (Zenta sonrası, 1697)
YUN1832 = Polygon([(20.0,39.15),(23.35,39.4),(24.75,39.1),(24.75,36.0),(20.0,36.0)])

# ---------------- Ana kesitler ----------------
print("Kesitler çıkarılıyor...")
OSM1600 = osmanli("1600"); OSM1650 = osmanli("1650")
MISIR_V = adli("1715", "Egypt")
# 1517 fethinde Osmanlı yönetimi Nil vadisinde 1. çağlayan (Asvan / İbrim)
# çevresinde durdu; Nûbe-Sudan ancak Kavalalı Mehmed Ali'nin 1820-21 seferleriyle
# katıldı. Bu yüzden 1517-1821 arası güney kesilir, 1821'de Sudan eklenir.
MISIR_GUNEY = box(20.0, 4.0, 39.0, 23.6)   # Afrika yakası; Hicaz etkilenmez
SUDAN_G = Polygon([(24.0,21.9),(31.5,21.9),(33.5,22.0),(36.9,22.0),(37.2,20.0),
                   (36.0,18.0),(34.5,16.0),(33.9,14.0),(33.0,13.5),(31.5,14.5),
                   (30.0,16.0),(28.0,18.0),(25.0,20.0),(24.0,20.8)]).buffer(0)
MISIR_V = MISIR_V.difference(MISIR_GUNEY)
MISIR_SUDAN = unary_union([MISIR_V, SUDAN_G])

S = {}
S["Y1400"]  = osmanli("1400").difference(IST)
S["Y1500"]  = osmanli("1500")
S["Y1530k"] = osmanli("1530").difference(KIBRIS).difference(GIRIT).difference(RODOSK) \
                             .difference(MACARK).difference(CEZK).difference(TRBK).difference(TUNK)
S["Y1600k"] = OSM1600.difference(GIRIT).difference(TUNK)
S["Y1650"]  = OSM1650
S["Y1700k"] = osmanli("1700").difference(MORAK)
S["Y1715"]  = osmanli("1715")
S["Y1783"]  = osmanli("1783")
S["Y1800"]  = osmanli("1800")
S["Y1815"]  = osmanli("1815").difference(MISIR_V).difference(MISIR_GUNEY)
S["Y1815y"] = S["Y1815"].difference(YUN1832)
S["Y1900k"] = osmanli("1900").difference(KIBRIS).difference(MISIR_SUDAN)
S["Y1914"]  = osmanli("1914")
# 1918-1923 (Mütareke → Cumhuriyet): Lozan sınırları ≈ bugünkü Türkiye eksi Hatay
# (Hatay 1939'da katıldı). Modern ülke geometrisi kullanılır → kıyılar tam oturur.
HATAY = box(35.75, 35.80, 36.75, 36.95)
S["TURKIYE"] = ulke_geo("Turkey").difference(HATAY)

# Bölgesel parçalar — kutu kesişimi yerine gerçek ülke/eyalet geometrileri
# (kutu kesişimi Macaristan'da ve Libya çölünde yapay dikdörtgen artıklar bırakıyordu)
KIRIM_V = adli("1500", "Crimean Khanate")
CEZ_V   = adli("1800", "Algiers");  TUN_V = adli("1800", "Tunis")
TRB_V   = adli("1800", "Tripolitania"); BIN_V = adli("1800", "Cyrenaica")
CEZ_G   = CEZ_V
TUN_G   = TUN_V
TRB_G   = unary_union([TRB_V, BIN_V])
# Macaristan: Tuna-Drava havzası, doğal hatlara yakın (kutu değil)
MACAR_G = H([[16.4,46.1],[17.6,45.8],[19.0,45.3],[20.4,45.4],[21.6,45.7],[22.4,46.6],
             [22.0,47.6],[21.0,48.4],[19.5,48.7],[18.0,48.4],[16.9,47.6],[16.3,46.9]])

# ---------------- Elle çizili halkalar (hepsi kara maskesinden geçer) ----------------
print("El halkaları kesiliyor...")
SOGUT    = H([[29.2,40.35],[30.2,40.5],[31.0,40.2],[31.1,39.7],[30.3,39.3],[29.5,39.4],[29.1,39.9]])
D1302    = H([[28.9,40.75],[30.3,40.85],[31.0,40.5],[30.4,40.1],[29.4,40.1],[28.9,40.4]])
D1326    = H([[28.2,40.5],[29.6,40.5],[29.7,39.9],[29.0,39.7],[28.2,39.95]])
D1331    = H([[29.2,40.65],[30.0,40.65],[30.0,40.25],[29.2,40.3]])
D1337    = H([[29.5,41.2],[30.7,41.1],[30.6,40.6],[29.5,40.6]])
D1345    = H([[26.35,40.02],[26.8,40.32],[27.4,40.44],[28.3,40.45],[28.3,39.4],[27.2,39.1],[26.5,39.4]])
D1354A   = H([[30.9,40.5],[33.0,40.5],[33.3,39.8],[32.5,39.2],[31.3,39.3],[30.9,39.9]])
GELIBOLU = H([[26.0,40.65],[26.9,40.75],[27.0,40.35],[26.3,39.9],[25.9,40.2]])
D1362T   = H([[26.7,41.5],[28.3,41.4],[28.2,40.9],[27.0,40.6],[26.4,40.6],[26.5,41.2]])
D1369E   = H([[25.9,42.0],[27.1,42.1],[27.3,41.3],[26.3,41.1],[25.8,41.4]])
D1372F   = H([[24.3,42.5],[26.7,42.6],[26.5,41.5],[25.0,41.4],[24.2,41.8]])
D1383S   = H([[23.2,41.5],[26.0,41.6],[25.7,40.8],[24.3,40.8],[23.3,40.7]])
D1385SF  = H([[22.3,43.2],[24.6,43.1],[24.5,42.2],[22.5,42.1],[22.3,42.7]])
D1386N   = H([[21.2,43.7],[23.0,43.6],[23.0,42.7],[21.5,42.8],[21.2,43.2]])
D1387SL  = H([[22.1,41.4],[23.6,41.3],[23.3,40.3],[22.4,40.3],[22.1,40.8]])
D1392U   = H([[20.4,42.7],[22.4,42.7],[22.4,41.1],[21.0,40.7],[20.4,41.4]])
D1394T   = H([[21.2,40.1],[22.8,40.0],[22.7,39.1],[21.6,39.2],[21.2,39.6]])
D1393TR  = H([[22.9,44.0],[27.1,44.2],[27.7,43.7],[27.0,42.8],[25.0,42.5],[23.4,42.9],[22.9,43.5]])
D1393D   = H([[27.3,44.4],[28.8,44.5],[28.7,43.3],[27.7,43.3],[27.3,43.9]])
D1396V   = H([[22.2,44.3],[23.4,44.2],[23.5,43.4],[22.3,43.5]])
D1381G   = H([[29.2,39.7],[30.6,39.7],[30.5,38.8],[29.4,38.8],[29.2,39.2]])
D1381H   = H([[30.0,39.0],[31.9,38.8],[31.7,37.5],[30.3,37.4],[30.0,38.2]])
D1390B   = H([[26.3,39.5],[27.5,39.6],[28.6,39.9],[29.5,39.3],[29.4,37.7],[28.7,36.8],[27.2,36.6],[26.7,37.0],[26.4,38.0],[26.1,38.7]])
D1392TK  = H([[29.4,37.7],[31.6,37.4],[31.5,36.3],[29.9,36.3],[29.3,36.8]])
D1392C   = H([[30.9,41.5],[34.0,42.1],[34.7,41.8],[34.3,40.9],[33.0,40.4],[31.4,40.3],[30.9,41.0]])
KARAMANH = H([[31.4,38.7],[34.4,38.6],[34.4,37.1],[33.4,36.3],[32.1,36.4],[31.4,37.2]])
D1398CN  = H([[33.1,41.0],[34.4,41.8],[36.6,41.4],[37.5,41.2],[37.9,40.3],[37.3,39.5],[36.6,38.5],[35.2,38.3],[34.1,38.8],[33.1,39.1]])
D1399M   = H([[37.1,39.1],[38.9,39.0],[38.9,37.9],[37.4,37.8],[37.1,38.4]])
RUMELI_F = H([[28.75,44.35],[27.5,44.1],[26.0,43.75],[24.0,43.7],[22.9,43.85],[22.35,43.1],[21.7,42.5],[21.0,42.1],[20.7,41.5],[20.55,40.9],[20.9,40.1],[21.4,39.6],[22.1,39.3],[22.55,39.1],[23.1,39.4],[22.65,40.0],[22.6,40.5],[23.4,40.75],[24.4,40.85],[25.6,40.9],[26.1,40.7],[26.75,40.75],[27.5,40.97],[28.2,41.05],[28.5,41.35],[28.15,41.7],[28.0,42.05],[27.9,42.7],[27.95,43.2],[28.2,43.75]])
ANAD_F   = H([[26.7,40.45],[27.9,40.4],[28.8,40.45],[29.3,40.9],[30.3,41.1],[31.4,41.25],[32.6,41.7],[34.0,41.9],[35.2,41.7],[36.0,41.2],[36.3,40.5],[36.0,39.6],[35.3,38.9],[34.5,38.3],[33.5,37.9],[32.5,37.6],[31.5,37.2],[30.5,36.9],[29.3,36.7],[28.2,36.9],[27.4,37.15],[27.0,37.7],[26.9,38.4],[26.5,39.0],[26.3,39.55]])

# ---- Fetret Devri (1402-1413) şehzade payları ----
# Rumeli: önce Emîr Süleyman, 1411'den sonra Musa Çelebi
SEHZ_RUMELI = RUMELI_F
# İsa Çelebi: Bursa-Balıkesir, Marmara'nın güneyi (1402-1406)
SEHZ_ISA    = H([[26.6,40.5],[28.4,40.5],[29.6,40.75],[30.2,40.3],[30.0,39.5],[29.1,39.1],[27.8,39.1],[26.6,39.6]])
# Çelebi Mehmed: Amasya-Tokat-Sivas ve orta Anadolu (1402-)
SEHZ_MEHMED = H([[33.6,41.6],[35.2,41.7],[36.3,41.3],[37.6,41.1],[38.2,40.2],[37.9,39.2],[37.0,38.6],[35.6,38.4],[34.3,38.6],[33.4,39.3],[33.2,40.5]])
# Mehmed'in 1406 sonrası genişlemesi (İsa'nın payı + Ankara-Konya hattı)
SEHZ_MEHMED_GENIS = unary_union([SEHZ_MEHMED, SEHZ_ISA,
    H([[30.0,40.4],[33.6,41.0],[33.8,39.6],[33.0,38.4],[31.4,38.0],[29.9,38.4],[29.5,39.6]])])
# Süleyman Çelebi'nin Anadolu yakasındaki payı (1404-1410 arası, Marmara kıyıları)
SEHZ_SULEYMAN_ANADOLU = H([[28.9,40.9],[30.4,41.0],[30.6,40.4],[29.6,40.2],[28.9,40.4]])
D1430Y   = H([[20.1,40.3],[21.4,40.2],[21.3,39.1],[20.4,39.1],[20.0,39.7]])
D1453I   = H([[27.9,41.35],[29.25,41.35],[29.25,40.8],[27.9,40.8]])
D1456A   = H([[23.1,38.5],[24.2,38.5],[24.2,37.8],[23.3,37.8],[23.1,38.1]])
D1459S   = H([[19.7,44.9],[22.7,44.9],[22.5,43.4],[21.3,43.5],[20.2,43.4],[19.5,43.9]])
MORA     = H([[21.1,38.4],[22.3,38.2],[23.0,38.1],[23.3,37.4],[22.8,36.6],[21.9,36.7],[21.6,36.9],[21.1,37.6]])
D1461K   = H([[31.9,42.0],[35.2,42.2],[38.0,41.4],[39.8,41.35],[40.9,41.1],[40.7,40.5],[39.0,40.4],[36.8,40.9],[34.5,41.5],[32.1,41.6]])
D1463B   = H([[16.1,45.2],[19.1,45.1],[19.6,43.9],[18.7,42.8],[17.3,43.1],[16.2,44.2]])
D1470E   = H([[22.8,39.0],[23.7,39.0],[24.4,38.4],[24.7,38.0],[24.1,37.9],[23.4,38.4],[22.8,38.8]])
D1479A   = H([[19.1,42.5],[20.2,42.5],[20.4,41.3],[19.9,40.5],[19.3,40.6],[19.1,41.6]])
KEFE     = H([[33.3,45.2],[35.0,45.3],[36.5,45.25],[36.7,45.0],[35.5,44.6],[34.3,44.3],[33.5,44.4]])
D1484KL  = H([[28.1,45.7],[29.8,46.0],[30.9,46.3],[30.4,45.4],[29.0,45.1],[28.1,45.2]])
D1515D   = H([[38.4,40.6],[41.6,40.4],[42.4,39.4],[42.1,38.1],[41.4,37.1],[40.0,36.9],[38.6,37.7],[38.1,38.8],[38.3,39.9]])
RODOS    = Polygon([(27.85,36.5),(28.25,36.45),(28.1,36.05),(27.7,36.2)]).buffer(0)
# Mercidabık (1516) sonrası Suriye-Filistin; Mısır seferinden önceki ara aşama
SURIYE_D = H([[36.1,36.7],[37.6,36.9],[39.5,36.5],[41.0,36.6],[43.6,36.8],[43.4,35.4],
              [41.2,34.6],[39.6,34.0],[38.3,33.2],[37.2,32.4],[36.4,31.6],[35.5,30.9],
              [34.9,29.6],[34.3,31.3],[34.7,32.0],[35.3,33.2],[35.8,34.7],[35.9,35.9]])
# Kıbrıs (Lefkoşa Eylül 1570, Magosa Ağustos 1571)
KIBRIS_G = Polygon([(32.25,35.15),(33.5,35.4),(34.6,35.7),(33.9,34.95),
                    (33.0,34.6),(32.3,34.7)]).buffer(0)
# 1578-1590 doğu savaşı kazanımları: Gürcistan, Şirvan (Bakü), Karabağ, Tebriz, Revan
KAFKAS_RING = [[42.6,41.9],[45.0,41.9],[46.6,41.9],[48.3,41.6],[50.4,40.6],[50.2,40.0],[49.3,39.1],[48.6,38.6],[47.8,38.0],[46.9,37.7],[45.9,38.0],[44.8,38.6],[44.0,39.3],[43.6,40.1],[42.7,40.9]]
KAFKAS   = H(KAFKAS_RING)
# Aşamalar: 1578 Gürcistan (Tiflis) ve Revan yönü · 1583 Şirvan-Bakü
KAFKAS_BATI   = H([[42.6,41.9],[45.4,41.9],[46.4,41.3],[46.2,40.3],[45.3,39.6],[44.6,39.2],
                   [43.9,39.5],[43.5,40.2],[42.7,40.9]])
KAFKAS_SIRVAN = H([[46.2,41.6],[48.3,41.7],[50.0,40.9],[50.4,40.5],[50.0,39.9],
                   [49.0,39.4],[47.6,39.6],[46.4,40.4]])
# 1600 kesiti bu bölgeyi zaten içeriyor (o yıl gerçekten Osmanlı'ydı); 1650
# kesiti ise hatalı biçimde içeriyor (Kasr-ı Şirin 1639 sonrası Safevî'de).
# Tabanlardan kesilir ki bölge yalnızca 1585-1603 delta aralığında görünsün.
# ---- Hiçbir dönemde doğrudan Osmanlı toprağı sayılmayacak bölgeler ----
# Fizan (Libya iç çölü): 16-19. yy'da yerel Evlâd-ı Muhammed hanedanının elinde,
# ancak nominal bağlılık vardı; doğrudan yönetim yok.
FIZAN     = Polygon([(10.5,28.5),(17.5,28.5),(18.5,26.0),(17.0,23.0),(13.5,22.5),
                     (10.5,24.5)]).buffer(0)
# Körfez kıyısı (Lahsa/Katif ve güneyi): Osmanlı 1550'lerde yerleşti, 1670'te
# Benî Hâlid'e kaptırdı; Katar-Umman kıyıları hiçbir zaman doğrudan yönetilmedi.
KORFEZ_GUNEY = Polygon([(48.0,27.5),(52.5,26.5),(56.5,24.5),(56.0,22.0),(52.0,22.5),
                        (48.5,24.5)]).buffer(0)
LAHSA     = Polygon([(47.5,29.5),(50.5,28.0),(50.8,25.5),(48.5,24.5),(46.5,26.5)]).buffer(0)
# 1623-1638: Bağdat ve orta Irak Safevîlerin elinde (IV. Murad geri alacak)
IRAK_KES  = Polygon([(43.2,35.6),(45.6,35.4),(46.5,33.5),(47.8,31.5),(48.4,30.3),
                     (47.4,29.9),(45.6,31.2),(43.8,32.6),(42.6,34.2)]).buffer(0)

# ---- Yemen ve Kızıldeniz'in Afrika yakası ----
# Yemen: 1538'de kıyı (Zebîd/Aden), 1547'de dağlık iç bölge; Zeydî direnişiyle
# 1635'te tamamen kaybedildi. 1849'da Tihâme kıyısı, 1872'de Sana'ya dönüldü.
YEMEN_KIYI = Polygon([(42.6,17.6),(43.3,17.2),(43.6,15.8),(44.3,14.2),(45.4,13.0),
                      (44.6,12.5),(43.6,12.6),(43.0,13.4),(42.9,14.6),(42.5,16.3)]).buffer(0)
YEMEN_TAM  = Polygon([(42.6,17.8),(44.2,17.4),(45.4,16.4),(46.6,15.4),(47.4,14.6),
                      (46.8,13.4),(45.6,12.6),(44.6,12.5),(43.6,12.6),(43.0,13.4),(42.8,14.8),
                      (42.5,16.4)]).buffer(0)
# Habeş Eyaleti (1557): Sevâkin, Masavva ve Kızıldeniz'in Afrika kıyı şeridi —
# iç Habeşistan'a hiçbir zaman girilmedi, hâkimiyet liman kuşağıyla sınırlıdır.
HABES_KIYI = Polygon([(37.2,22.0),(38.6,19.5),(39.6,17.5),(40.6,15.6),(41.8,14.6),
                      (43.3,12.7),(43.6,12.4),(42.6,12.6),(41.2,14.2),(39.9,15.4),
                      (38.9,17.2),(37.9,19.4),(36.6,21.9)]).buffer(0)

KAFKAS_KES = Polygon(KAFKAS_RING).buffer(0)
for _k in ("Y1530k", "Y1600k", "Y1650", "Y1700k", "Y1715"):
    S[_k] = S[_k].difference(KAFKAS_KES)
# Sudan/Nûbe 1821 öncesinde Osmanlı-Mısır yönetiminde değildi;
# Fizan ve Körfez'in güneyi hiçbir dönemde doğrudan toprak değildi.
for _k in ("Y1530k", "Y1600k", "Y1650", "Y1700k", "Y1715", "Y1783", "Y1800"):
    S[_k] = S[_k].difference(MISIR_GUNEY).difference(FIZAN).difference(KORFEZ_GUNEY)
YEMEN_HABES = unary_union([YEMEN_TAM, HABES_KIYI]).buffer(0.35)
# Hicaz (Mekke-Medine) 1517'den itibaren Osmanlı'dadır; Yemen kesmesinden korunur
YEMEN_HABES = YEMEN_HABES.difference(box(38.5, 20.0, 42.0, 25.5))
for _k in ("Y1530k", "Y1600k", "Y1650", "Y1700k", "Y1715", "Y1783", "Y1800"):
    S[_k] = S[_k].difference(YEMEN_HABES)
for _k in ("Y1815", "Y1815y", "Y1900k", "Y1914"):
    S[_k] = S[_k].difference(FIZAN).difference(KORFEZ_GUNEY).difference(YEMEN_HABES)
if KML_1590 is not None:
    KML_1590 = (KML_1590.difference(MISIR_GUNEY).difference(FIZAN)
                        .difference(KORFEZ_GUNEY).difference(YEMEN_HABES))
PODOLYA  = H([[25.6,49.3],[27.1,49.4],[28.0,49.0],[27.7,48.3],[26.1,48.4]])
TRAKYA13 = H([[26.3,41.8],[27.1,42.1],[27.6,42.05],[28.0,42.0],[28.2,41.55],[29.05,41.25],[28.5,41.0],[27.5,40.95],[26.9,40.55],[26.1,40.0],[26.0,40.5],[26.3,40.8],[26.25,41.2]])

# ---------------- Parça tablosu ----------------
# (katman, ad/etiket, from, to, geometri)  — tarihler YYYY-AA-GG
# D: doğrudan Osmanlı toprağı · V: bağlı/özerk · Z: şehzade payı (Fetret Devri)
# Z katmanında etiket "Ad|#renk" biçimindedir.
D = "d"; V = "v"; Z = "z"
PARCALAR = [
 (D,"Kuruluş: Söğüt ve Domaniç çevresi",        "1299-01-01","1402-07-28",SOGUT),
 (D,"Koyunhisar sonrası: İznik-İzmit yönünde genişleme","1302-07-27","1402-07-28",D1302),
 (D,"Bursa'nın fethi",                          "1326-04-06","1402-07-28",D1326),
 (D,"İznik'in fethi",                           "1331-03-02","1402-07-28",D1331),
 (D,"İzmit'in fethi",                           "1337-01-01","1402-07-28",D1337),
 (D,"Karesi Beyliği'nin ilhakı",                "1345-01-01","1402-07-28",D1345),
 (D,"Ankara'nın alınışı",                       "1354-08-01","1402-07-28",D1354A),
 (D,"Rumeli'ye geçiş: Gelibolu köprübaşı",      "1354-03-02","1366-08-01",GELIBOLU),
 # 1366-1376: Gelibolu, Savoylu Amadeo'nun Haçlı seferiyle Bizans'a geçti
 (D,"Gelibolu'nun geri alınışı",                "1376-09-01","1402-07-28",GELIBOLU),
 (D,"Doğu Trakya'da ilerleyiş",                 "1362-06-01","1402-07-28",D1362T),
 (D,"Edirne'nin fethi",                         "1369-05-01","1402-07-28",D1369E),
 (D,"Filibe ve Zagra'nın fethi",                "1372-06-01","1402-07-28",D1372F),
 (D,"Serez ve Batı Trakya'nın fethi",           "1383-09-19","1402-07-28",D1383S),
 (D,"Sofya'nın fethi",                          "1385-09-01","1402-07-28",D1385SF),
 (D,"Niş'in fethi",                             "1386-01-01","1402-07-28",D1386N),
 (D,"Selanik'in ilk teslimi",                   "1387-04-09","1402-07-28",D1387SL),
 (D,"Germiyan çeyizi ve Hamid'in satın alınışı","1381-01-01","1402-07-28",D1381G),
 (D,"Hamid ili: Isparta-Eğirdir",               "1381-06-01","1402-07-28",D1381H),
 (D,"Batı Anadolu beyliklerinin ilhakı",        "1390-01-01","1402-07-28",D1390B),
 (D,"Teke ilinin ilhakı",                       "1392-01-01","1402-07-28",D1392TK),
 (D,"Kastamonu'nun (Candar) ilhakı",            "1392-11-01","1402-07-28",D1392C),
 (D,"Üsküp'ün fethi",                           "1392-01-15","1402-07-28",D1392U),
 (D,"Tırnova'nın düşüşü: Bulgaristan ilhakı",   "1393-07-17","1402-07-28",D1393TR),
 (D,"Dobruca'nın katılışı",                     "1393-09-01","1402-07-28",D1393D),
 (D,"Teselya'ya iniş",                          "1394-01-01","1402-07-28",D1394T),
 (D,"Vidin'in ilhakı",                          "1396-10-01","1402-07-28",D1396V),
 (D,"Karaman'ın ilk ilhakı",                    "1397-07-01","1402-07-28",KARAMANH),
 (D,"Canik ve Sivas'ın katılışı",               "1398-07-01","1402-07-28",D1398CN),
 (D,"Malatya'nın alınışı",                      "1399-09-01","1402-07-28",D1399M),
 # --- Fetret Devri: şehzade payları ayrı katmanda (Z), ana katman boş kalır ---
 (Z,"Emîr Süleyman Çelebi|#1f6fb5",             "1402-07-28","1403-06-01",SEHZ_RUMELI),
 (Z,"Emîr Süleyman Çelebi|#1f6fb5",             "1403-06-01","1411-02-17",SEHZ_RUMELI.difference(SELANIK_KES)),
 (Z,"Emîr Süleyman Çelebi|#1f6fb5",             "1404-01-01","1410-06-15",SEHZ_SULEYMAN_ANADOLU),
 (Z,"Musa Çelebi|#7b3fa0",                      "1411-02-17","1413-07-05",SEHZ_RUMELI.difference(SELANIK_KES)),
 (Z,"İsa Çelebi|#1f8a4c",                       "1402-07-28","1406-06-01",SEHZ_ISA),
 (Z,"Çelebi Mehmed|#b3122f",                    "1402-07-28","1406-06-01",SEHZ_MEHMED),
 (Z,"Çelebi Mehmed|#b3122f",                    "1406-06-01","1413-07-05",SEHZ_MEHMED_GENIS),
 # 1413'te Mehmed birliği sağlayınca ana katman geri döner
 # Birleşme: Rumeli + Fetret Anadolusu + Çelebi Mehmed'in Amasya-Sivas payı
 (D,"Devletin yeniden birleşmesi",              "1413-07-05","1425-06-01",
    unary_union([RUMELI_F.difference(SELANIK_KES), ANAD_F, SEHZ_MEHMED_GENIS])),
 (D,"Beyliklerin yeniden ilhakı ve toparlanış", "1425-06-01","1430-03-29",S["Y1400"].difference(SELANIK_KES)),
 (D,"Selanik'in kesin fethi",                   "1430-03-29","1481-05-03",S["Y1400"]),
 # Sırbistan'ın ilk ilhakı (1444 Edirne-Segedin ile iade edildi)
 (D,"Semendire'nin ilk alınışı",                "1439-08-27","1444-08-01",D1459S),
 (D,"Yanya'nın teslimi",                        "1430-10-09","1481-05-03",D1430Y),
 (D,"İstanbul'un Fethi — başkent İstanbul",     "1453-05-29","1481-05-03",D1453I),
 (D,"Atina'nın fethi",                          "1456-06-04","1481-05-03",D1456A),
 (D,"Sırbistan'ın ilhakı (Semendire)",          "1459-06-20","1481-05-03",D1459S),
 (D,"Mora'nın fethi",                           "1460-05-29","1699-01-26",MORA),
 (D,"Amasra, Sinop ve Trabzon'un katılışı",     "1461-06-01","1481-05-03",D1461K),
 (D,"Bosna'nın fethi",                          "1463-06-01","1481-05-03",D1463B),
 (D,"Karaman'ın kesin ilhakı",                  "1468-01-01","1481-05-03",KARAMANH),
 (D,"Eğriboz'un fethi",                         "1470-07-12","1481-05-03",D1470E),
 (D,"Kefe: Kırım kıyıları Osmanlı sancağı",     "1475-06-06","1650-01-01",KEFE),
 (D,"Arnavutluk ve İşkodra'nın katılışı",       "1479-01-25","1481-05-03",D1479A),
 (D,"II. Bayezid dönemi",                       "1481-05-03","1517-01-22",S["Y1500"]),
 (D,"Kili ve Akkirman'ın fethi",                "1484-08-03","1517-01-22",D1484KL),
 (D,"Çaldıran sonrası: Doğu Anadolu'nun katılışı","1515-09-15","1517-01-22",D1515D),
 # Mercidabık (Ağustos 1516) sonrası Suriye-Filistin; Mısır ve Hicaz 1517 Ocak'ta
 (D,"Mercidabık sonrası: Suriye ve Filistin",   "1516-08-24","1517-01-22",SURIYE_D),
 (D,"Mısır'ın fethi: Suriye, Mısır, Hicaz",     "1517-01-22","1571-08-01",S["Y1530k"]),
 (D,"Lefkoşa'nın düşüşü: Kıbrıs'ın fethi",      "1570-09-09","1650-01-01",KIBRIS_G),
 (D,"Rodos'un fethi",                           "1522-12-21","1571-08-01",RODOS),
 (D,"Cezayir'in katılışı (Barbaros)",           "1529-08-01","1571-08-01",CEZ_G),
 (D,"Budin'in ilhakı: Macaristan eyaleti",      "1541-08-29","1571-08-01",MACAR_G),
 (D,"Trablusgarp'ın fethi",                     "1551-08-15","1571-08-01",TRB_G),
 # Yemen ve Kızıldeniz'in Afrika yakası — aşamalı
 (D,"Yemen kıyılarının katılışı (Zebîd, Aden)", "1538-08-03","1547-01-01",YEMEN_KIYI),
 (D,"Yemen'in tamamının fethi (Sana)",          "1547-01-01","1635-01-01",YEMEN_TAM),
 (D,"Habeş Eyaleti: Sevâkin ve Masavva",        "1557-01-01","1885-02-05",HABES_KIYI),
 (D,"Yemen'e dönüş: Tihâme kıyısı",             "1849-05-01","1872-04-01",YEMEN_KIYI),
 (D,"Yemen'in yeniden fethi (Sana)",            "1872-04-01","1918-10-30",YEMEN_TAM),
 # Doğu cephesi el değiştirmeleri: 1578-90 kazanım, 1603-12 kayıp,
 # 1623-38 Bağdat Safevî'de, 1639 Kasr-ı Şirin ile kalıcı sınır.
 (D,"Kıbrıs'ın fethi — zirveye doğru",          "1571-08-01","1590-03-21",S["Y1600k"]),
 # Kanije 1600'de alındı; KML 1590 referansında yok, ayrı parça olarak eklenir
 (D,"Kanije'nin fethi",                         "1600-10-22","1690-04-13",
    H([[16.5,46.9],[17.9,46.8],[18.2,46.1],[17.3,45.7],[16.4,46.2]])),
 (D,"Nasuh Paşa sonrası: 1555 sınırına dönüş",  "1603-10-21","1623-01-14",S["Y1600k"]),
 (D,"Bağdat'ın Safevîlere kaybı",               "1623-01-14","1638-12-25",
    S["Y1600k"].difference(IRAK_KES)),
 (D,"Bağdat'ın geri alınışı — Kasr-ı Şirin",    "1638-12-25","1650-01-01",S["Y1600k"]),
 (D,"Tunus'un kesin fethi",                     "1574-08-25","1650-01-01",TUN_G),
 # 1590 Ferhad Paşa (İstanbul) Antlaşması'yla tescillenen doğu kazanımları;
 # Şah Abbas'ın karşı taarruzuyla 1603'ten itibaren kaybedildi
 # Doğu savaşı aşamalı: Gürcistan 1578, Şirvan-Bakü 1583, Tebriz 1585
 (D,"Çıldır sonrası: Gürcistan'ın katılışı",    "1578-08-24","1590-03-21",KAFKAS_BATI),
 (D,"Şirvan ve Bakü'nün katılışı",              "1583-05-11","1590-03-21",KAFKAS_SIRVAN),
 (D,"Tebriz ve Kafkasya'nın fethi",             "1585-09-25","1590-03-21",KAFKAS),
 # 1590 Ferhad Paşa Antlaşması: doğuda en geniş sınırlar (KML referansı, 5,27 milyon km²)
 (D,"Ferhad Paşa Antlaşması: en geniş sınırlar","1590-03-21","1603-10-21",
    KML_1590 if KML_1590 is not None else S["Y1600k"]),
 (D,"Girit'in katılışı: en geniş sınırlar",     "1650-01-01","1683-10-27",S["Y1650"]),
 (D,"Podolya'nın katılışı (Bucaş)",             "1672-10-18","1699-01-26",PODOLYA),
 # --- Kutsal İttifak Savaşları (1683-1699): yıl yıl çözülme ---
 # 1650 kesitinden aşamalı kesmelerle; her adım o yılın kayıplarını yansıtır
 (D,"Estergon ve Yukarı Macaristan'ın kaybı",   "1683-10-27","1685-08-19",
    S["Y1650"].difference(K_ESTERGON)),
 (D,"Uyvar'ın kaybı",                           "1685-08-19","1686-09-02",
    S["Y1650"].difference(K_ESTERGON).difference(K_UYVAR)),
 (D,"Budin'in kaybı — Macaristan çözülüyor",    "1686-09-02","1687-08-12",
    S["Y1650"].difference(K_MACAR1686)),
 (D,"II. Mohaç sonrası: Erdel ve Mora kaybı",   "1687-08-12","1688-09-06",
    S["Y1650"].difference(K_MACAR1687).difference(K_MORA87)),
 (D,"Belgrad'ın kaybı",                         "1688-09-06","1690-10-08",
    S["Y1650"].difference(K_MACAR1687).difference(K_MORA87).difference(K_SIRBISTAN)),
 (D,"Belgrad ve Sırbistan geri alındı",         "1690-10-08","1697-09-11",
    S["Y1650"].difference(K_MACAR1687).difference(K_MORA87)),
 (D,"Zenta bozgunu sonrası",                    "1697-09-11","1699-01-26",
    S["Y1650"].difference(K_MACAR1687).difference(K_MORA87).difference(K_BANAT)),
 (D,"Karlofça: Macaristan ve Mora'nın kaybı",   "1699-01-26","1715-07-01",S["Y1700k"]),
 (D,"Mora'nın geri alınışı",                    "1715-07-01","1774-07-21",S["Y1715"]),
 (D,"Küçük Kaynarca sonrası",                   "1774-07-21","1800-01-01",S["Y1783"]),
 (D,"19. yüzyıl başı",                          "1800-01-01","1815-06-09",S["Y1800"]),
 (D,"II. Mahmud dönemi: Mısır özerk",           "1815-06-09","1830-02-03",S["Y1815"]),
 (D,"Yunanistan'ın ayrılışı",                   "1830-02-03","1878-07-13",S["Y1815y"]),
 (D,"Berlin sonrası: Balkanlar'da son dönem",   "1878-07-13","1913-05-30",S["Y1900k"]),
 (D,"Balkan Savaşları sonrası",                 "1913-05-30","1918-10-30",S["Y1914"]),
 (D,"Doğu Trakya (Edirne geri alındı)",         "1913-05-30","1918-10-30",TRAKYA13),
 (D,"Mütareke ve Millî Mücadele",               "1918-10-30","1923-11-01",S["TURKIYE"]),
 (D,"Doğu Trakya (Mütareke dönemi)",            "1918-10-30","1923-11-01",TRAKYA13),
 # ---- Bağlı / özerk topraklar ----
 # Nominal bağlı bölgeler: hutbe-sikke düzeyinde bağlılık, doğrudan yönetim yok.
 # (Yaygın "5,2 milyon km²" hesapları bu alanları da kapsar.)
 (V,"Fizan (nominal bağlılık)",                 "1577-01-01","1912-10-18",FIZAN),
 (V,"Lahsa ve Körfez kıyıları (nominal)",       "1555-01-01","1670-01-01",
    unary_union([LAHSA, KORFEZ_GUNEY])),
 (V,"Kırım Hanlığı Osmanlı'ya bağlandı",        "1475-06-06","1650-01-01",KIRIM_V),
 (V,"Macaristan Osmanlı himayesinde",           "1526-09-01","1541-08-29",MACAR_G),
 (V,"Mısır eyaleti özerkleşti",                 "1715-07-01","1774-07-21",MISIR_V),
 (V,"Mısır (Kavalalı yönetimi)",                 "1815-06-09","1821-06-01",MISIR_V),
 (V,"Mısır ve Sudan (Kavalalı; 1882'den sonra işgal altında nominal)",
                                                 "1821-06-01","1914-11-05",MISIR_SUDAN),
 (V,"Cezayir Ocağı (özerk)",                    "1715-07-01","1830-07-05",CEZ_V),
 (V,"Tunus Ocağı (özerk)",                      "1715-07-01","1881-05-12",TUN_V),
 (V,"Trablusgarp (özerk dönem)",                "1715-07-01","1878-07-13",TRB_V),
 (V,"Bingazi (özerk dönem)",                    "1715-07-01","1878-07-13",BIN_V),
]

# ---------------- Dönem aralıklarını hesapla ----------------
print("Dönemler birleştiriliyor...")
tarihler = sorted({p[2] for p in PARCALAR} | {p[3] for p in PARCALAR})

def mp_koord(g):
    if g.is_empty: return []
    if isinstance(g, Polygon): g = MultiPolygon([g])
    cikti = []
    for p in g.geoms:
        if p.area < 0.012: continue
        halkalar = []
        for ring in [p.exterior] + list(p.interiors):
            cs = [[round(x,3), round(y,3)] for x,y in ring.coords]
            if len(cs) >= 4: halkalar.append(cs)
        if halkalar: cikti.append(halkalar)
    return cikti

import math
R_DUNYA = 6371.0088     # km

def alan_km2(g):
    """Küresel (jeodezik) poligon alanı — km².
    Doğrulama: bu formülle Natural Earth verisinden Türkiye 779 bin,
    Yunanistan 131 bin, Mısır 1,00 milyon km² çıkar (gerçek değerlerle uyumlu)."""
    if g.is_empty: return 0
    parcalar = g.geoms if isinstance(g, MultiPolygon) else [g]
    toplam = 0.0
    for p in parcalar:
        for ring, isaret in [(p.exterior, 1)] + [(h, -1) for h in p.interiors]:
            cs = list(ring.coords)
            s = 0.0
            for i in range(len(cs) - 1):
                lon1, lat1 = math.radians(cs[i][0]), math.radians(cs[i][1])
                lon2, lat2 = math.radians(cs[i+1][0]), math.radians(cs[i+1][1])
                s += (lon2 - lon1) * (2 + math.sin(lat1) + math.sin(lat2))
            toplam += isaret * abs(s * R_DUNYA * R_DUNYA / 2.0)
    return int(round(toplam, -3))          # en yakın 1000 km²'ye yuvarla

donemler = []
onceki_ad = ""
for i in range(len(tarihler)-1):
    a, b = tarihler[i], tarihler[i+1]
    aktif_d = [p for p in PARCALAR if p[0]==D and p[2] <= a < p[3]]
    aktif_v = [p for p in PARCALAR if p[0]==V and p[2] <= a < p[3]]
    aktif_z = [p for p in PARCALAR if p[0]==Z and p[2] <= a < p[3]]
    if not aktif_d and not aktif_v and not aktif_z: continue
    o = unary_union([p[4] for p in aktif_d]) if aktif_d else Polygon()
    # aralıkları kapat (closing) → tek keskin gövde; sadeleştir; kıyıya yapıştır
    # 1) Komşu parçalar arasındaki yapay boşlukları kapat (closing, yuvarlak uç)
    # 2) Chaikin ile köşeleri organikleştir
    # 3) Kara maskesine yapıştır (kıyılar burada keskinleşir)
    # 4) Kalan yapay enklavları temizle, hafifçe sadeleştir
    o = o.buffer(0.14, join_style=1).buffer(-0.14, join_style=1).buffer(0)
    o = yumusat(o, 2)
    o = kiyiya_yapistir(o)
    o = delikleri_temizle(o).simplify(0.003, preserve_topology=True).buffer(0)
    v = unary_union([p[4] for p in aktif_v]) if aktif_v else Polygon()
    v = yumusat(v.buffer(0.1, join_style=1).buffer(-0.1, join_style=1).buffer(0), 1)
    v = kiyiya_yapistir(v)
    v = delikleri_temizle(v).simplify(0.0025, preserve_topology=True) \
        .difference(o.buffer(0.01))
    # Şehzade payları: aynı şehzadenin parçaları birleştirilir, ayrı kayıt olur
    sehzadeler = {}
    for p in aktif_z:
        sehzadeler.setdefault(p[1], []).append(p[4])
    z_kayit = []
    for etiket, parcalar in sehzadeler.items():
        gz = unary_union(parcalar).buffer(0.12, join_style=1).buffer(-0.12, join_style=1).buffer(0)
        g = kiyiya_yapistir(yumusat(gz, 2))
        g = delikleri_temizle(g).simplify(0.003, preserve_topology=True).buffer(0)
        ad_z, _, renk = etiket.partition("|")
        z_kayit.append({"a": ad_z, "r": renk or "#8d6e63",
                        "km": alan_km2(g), "g": mp_koord(g)})
    z_kayit.sort(key=lambda x: -x["km"])

    # dönem etiketi: bu tarihte başlayan parçanın adı (önce doğrudan katman)
    ad = onceki_ad
    for p in aktif_d + aktif_v + aktif_z:
        if p[2] == a:
            ad = p[1].split("|")[0]
            if p[0] == Z: ad = "Fetret Devri — " + ad
            break
    onceki_ad = ad
    z_geo = [shape({"type": "MultiPolygon", "coordinates": k["g"]}) for k in z_kayit if k["g"]]
    hepsi = unary_union([o, v] + z_geo)
    if hepsi.is_empty: continue
    x0, y0, x1, y1 = hepsi.bounds
    kayit = {"f": a, "t": b, "ad": ad,
             "b": [round(x0,2), round(y0,2), round(x1,2), round(y1,2)],
             "ao": alan_km2(o), "av": alan_km2(v),
             "o": mp_koord(o), "v": mp_koord(v)}
    if z_kayit: kayit["z"] = z_kayit
    donemler.append(kayit)

js  = "// Otomatik üretildi — elle düzenlemeyin. Betik: arac/uret_donemler.py\n"
js += "// Kaynak: historical-basemaps (github.com/aourednik/historical-basemaps) + el çizimi ara parçalar\n"
js += "window.DONEMLER = " + json.dumps(donemler, separators=(",",":")) + ";\n"
open(CIKTI, "w", encoding="utf-8").write(js)

print(f"Dönem sayısı: {len(donemler)}")
print(f"Dosya boyutu: {os.path.getsize(CIKTI)//1024} KB")

# ---------------- Doğrulama: şehirler sınır içinde mi? ----------------
# data/sehirler.js'teki her şehir, Osmanlı elinde olduğu tarihlerde dönem
# geometrisinin içinde kalmalı. Kalmıyorsa sınır o şehri dışarıda bırakıyordur.
try:
    import re
    sj = open(os.path.join(os.path.dirname(__file__), "..", "data", "sehirler.js"),
              encoding="utf-8").read()
    kayitlar = re.findall(r'ad:"([^"]+)".*?lat:([\d.]+),\s*lon:([\d.-]+),\s*k:\[(.*?)\]\s*\}', sj)
    hatalar = []
    for ad, lat, lon, kstr in kayitlar:
        nokta = Point(float(lon), float(lat))
        for f, t in re.findall(r'f:"([\d-]+)",t:"([\d-]+)"', kstr):
            orta = f                              # dönem başlangıcından hemen sonra
            for d in donemler:
                if not (d["f"] <= orta < d["t"]): continue
                geo = shape({"type": "MultiPolygon", "coordinates": d["o"]})
                if d.get("z"):
                    geo = unary_union([geo] + [shape({"type": "MultiPolygon",
                                      "coordinates": k["g"]}) for k in d["z"] if k["g"]])
                if not geo.buffer(0.05).contains(nokta):
                    hatalar.append(f"{ad} ({f})")
                break
    if hatalar:
        print(f"UYARI — sınır dışında kalan şehir/tarih ({len(hatalar)}):")
        for h in hatalar[:25]: print("   ", h)
    else:
        print("Doğrulama: tüm şehirler ilgili dönemlerde sınır içinde ✓")
except Exception as e:
    print("Şehir doğrulaması atlandı:", e)
for d in donemler[:8] + donemler[-4:]:
    n = sum(len(r) for poly in d["o"] for r in poly)
    print(f"  {d['f']} → {d['t']}  {n:5d} nokta  {d['ad']}")
