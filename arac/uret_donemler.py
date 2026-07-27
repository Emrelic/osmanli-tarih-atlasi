# -*- coding: utf-8 -*-
"""
Osmanlı Tarih Atlası — dönem üretim betiği
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
import json, os, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
from shapely.geometry import shape, box, Polygon, MultiPolygon, Point
from shapely.ops import unary_union

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

print("Kara maskesi hazırlanıyor (world_1914 tüm ülkeler)...")
kara_parcalari = []
for f in yukle("1914")["features"]:
    g = shape(f["geometry"])
    if g.envelope.intersects(BOLGE):
        kara_parcalari.append(g.buffer(0).intersection(BOLGE))
KARA = unary_union(kara_parcalari).buffer(0)
print("  kara maskesi tamam")

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
YUN1832 = Polygon([(20.0,39.15),(23.35,39.4),(24.75,39.1),(24.75,36.0),(20.0,36.0)])

# ---------------- Ana kesitler ----------------
print("Kesitler çıkarılıyor...")
OSM1600 = osmanli("1600"); OSM1650 = osmanli("1650")
MISIR_V = adli("1715", "Egypt")

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
S["Y1815"]  = osmanli("1815").difference(MISIR_V)
S["Y1815y"] = S["Y1815"].difference(YUN1832)
S["Y1900k"] = osmanli("1900").difference(KIBRIS).difference(MISIR_V)
S["Y1914"]  = osmanli("1914")
# 1918-1923: 1914 kesitinin Anadolu kısmı (gerçek kıyılar) ∩ Misak-ı Millî benzeri iç hat
MISAK = Polygon([(25.5,42.2),(45.2,42.2),(45.2,38.6),(44.5,37.4),(43.6,37.0),(42.6,37.0),
                 (41.5,37.05),(40.5,36.85),(39.5,36.65),(38.5,36.6),(37.5,36.55),
                 (36.6,36.15),(36.2,35.8),(35.6,35.9),(25.5,35.9)])
S["TURKIYE"] = S["Y1914"].intersection(MISAK)

# Bölgesel çıkarımlar (ara parçalar ve vassallar için)
MACAR_G = OSM1600.intersection(MACARK)
CEZ_G   = OSM1600.intersection(CEZK)
TRB_G   = OSM1600.intersection(TRBK)
TUN_G   = OSM1650.intersection(TUNK)
KIRIM_V = adli("1500", "Crimean Khanate")
CEZ_V   = adli("1800", "Algiers");  TUN_V = adli("1800", "Tunis")
TRB_V   = adli("1800", "Tripolitania"); BIN_V = adli("1800", "Cyrenaica")

# ---------------- Elle çizili halkalar (hepsi kara maskesinden geçer) ----------------
print("El halkaları kesiliyor...")
SOGUT    = H([[29.2,40.35],[30.2,40.5],[31.0,40.2],[31.1,39.7],[30.3,39.3],[29.5,39.4],[29.1,39.9]])
D1302    = H([[28.9,40.75],[30.3,40.85],[31.0,40.5],[30.4,40.1],[29.4,40.1],[28.9,40.4]])
D1326    = H([[28.2,40.5],[29.6,40.5],[29.7,39.9],[29.0,39.7],[28.2,39.95]])
D1331    = H([[29.2,40.65],[30.0,40.65],[30.0,40.25],[29.2,40.3]])
D1337    = H([[29.5,41.2],[30.7,41.1],[30.6,40.6],[29.5,40.6]])
D1345    = H([[26.1,40.4],[28.3,40.45],[28.3,39.4],[27.2,39.1],[26.5,39.4]])
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
PODOLYA  = H([[25.6,49.3],[27.1,49.4],[28.0,49.0],[27.7,48.3],[26.1,48.4]])
TRAKYA13 = H([[26.3,41.8],[27.1,42.1],[27.6,42.05],[28.0,42.0],[28.2,41.55],[29.05,41.25],[28.5,41.0],[27.5,40.95],[26.9,40.55],[26.1,40.0],[26.0,40.5],[26.3,40.8],[26.25,41.2]])

# ---------------- Parça tablosu ----------------
# (katman, ad/etiket, from, to, geometri)  — tarihler YYYY-AA-GG
D = "d"; V = "v"
PARCALAR = [
 (D,"Kuruluş: Söğüt ve Domaniç çevresi",        "1299-01-01","1402-07-28",SOGUT),
 (D,"Koyunhisar sonrası: İznik-İzmit yönünde genişleme","1302-07-27","1402-07-28",D1302),
 (D,"Bursa'nın fethi",                          "1326-04-06","1402-07-28",D1326),
 (D,"İznik'in fethi",                           "1331-03-02","1402-07-28",D1331),
 (D,"İzmit'in fethi",                           "1337-01-01","1402-07-28",D1337),
 (D,"Karesi Beyliği'nin ilhakı",                "1345-01-01","1402-07-28",D1345),
 (D,"Ankara'nın alınışı",                       "1354-08-01","1402-07-28",D1354A),
 (D,"Rumeli'ye geçiş: Gelibolu köprübaşı",      "1354-03-02","1402-07-28",GELIBOLU),
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
 (D,"Fetret Devri: Rumeli",                     "1402-07-28","1425-06-01",RUMELI_F),
 (D,"Fetret Devri: Anadolu'da daralma",         "1402-07-28","1425-06-01",ANAD_F),
 (D,"Beyliklerin yeniden ilhakı ve toparlanış", "1425-06-01","1481-05-03",S["Y1400"]),
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
 (D,"Mısır'ın fethi: Suriye, Mısır, Hicaz",     "1517-01-22","1571-08-01",S["Y1530k"]),
 (D,"Rodos'un fethi",                           "1522-12-21","1571-08-01",RODOS),
 (D,"Cezayir'in katılışı (Barbaros)",           "1529-08-01","1571-08-01",CEZ_G),
 (D,"Budin'in ilhakı: Macaristan eyaleti",      "1541-08-29","1571-08-01",MACAR_G),
 (D,"Trablusgarp'ın fethi",                     "1551-08-15","1571-08-01",TRB_G),
 (D,"Kıbrıs'ın fethi — zirveye doğru",          "1571-08-01","1650-01-01",S["Y1600k"]),
 (D,"Tunus'un kesin fethi",                     "1574-08-25","1650-01-01",TUN_G),
 (D,"Girit'in katılışı: en geniş sınırlar",     "1650-01-01","1699-01-26",S["Y1650"]),
 (D,"Podolya'nın katılışı (Bucaş)",             "1672-10-18","1699-01-26",PODOLYA),
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
 (V,"Kırım Hanlığı Osmanlı'ya bağlandı",        "1475-06-06","1650-01-01",KIRIM_V),
 (V,"Macaristan Osmanlı himayesinde",           "1526-09-01","1541-08-29",MACAR_G),
 (V,"Mısır eyaleti özerkleşti",                 "1715-07-01","1774-07-21",MISIR_V),
 (V,"Mısır (Kavalalı; 1882 sonrası işgal altında nominal)","1815-06-09","1914-11-05",MISIR_V),
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
def alan_km2(g):
    """Yaklaşık alan: derece² × (111.32 km)² × cos(orta enlem), çokgen bazında."""
    if g.is_empty: return 0
    parcalar = g.geoms if isinstance(g, MultiPolygon) else [g]
    toplam = 0.0
    for p in parcalar:
        enlem = p.centroid.y
        toplam += p.area * (111.32**2) * math.cos(math.radians(enlem))
    return int(round(toplam, -3))          # en yakın 1000 km²'ye yuvarla

donemler = []
onceki_ad = ""
for i in range(len(tarihler)-1):
    a, b = tarihler[i], tarihler[i+1]
    aktif_d = [p for p in PARCALAR if p[0]==D and p[2] <= a < p[3]]
    aktif_v = [p for p in PARCALAR if p[0]==V and p[2] <= a < p[3]]
    if not aktif_d and not aktif_v: continue
    o = unary_union([p[4] for p in aktif_d]) if aktif_d else Polygon()
    # aralıkları kapat (closing) → tek keskin gövde; sonra sadeleştir
    o = o.buffer(0.03).buffer(-0.03).simplify(0.015, preserve_topology=True).buffer(0)
    v = unary_union([p[4] for p in aktif_v]) if aktif_v else Polygon()
    v = v.buffer(0).difference(o.buffer(0.01)).simplify(0.015, preserve_topology=True)
    # dönem etiketi: bu tarihte başlayan parçanın adı (önce doğrudan katman)
    ad = onceki_ad
    for p in aktif_d + aktif_v:
        if p[2] == a: ad = p[1]; break
    onceki_ad = ad
    hepsi = unary_union([o, v])
    x0, y0, x1, y1 = hepsi.bounds
    donemler.append({"f": a, "t": b, "ad": ad,
                     "b": [round(x0,2), round(y0,2), round(x1,2), round(y1,2)],
                     "ao": alan_km2(o), "av": alan_km2(v),
                     "o": mp_koord(o), "v": mp_koord(v)})

js  = "// Otomatik üretildi — elle düzenlemeyin. Betik: arac/uret_donemler.py\n"
js += "// Kaynak: historical-basemaps (github.com/aourednik/historical-basemaps) + el çizimi ara parçalar\n"
js += "window.DONEMLER = " + json.dumps(donemler, separators=(",",":")) + ";\n"
open(CIKTI, "w", encoding="utf-8").write(js)

print(f"Dönem sayısı: {len(donemler)}")
print(f"Dosya boyutu: {os.path.getsize(CIKTI)//1024} KB")
for d in donemler[:8] + donemler[-4:]:
    n = sum(len(r) for poly in d["o"] for r in poly)
    print(f"  {d['f']} → {d['t']}  {n:5d} nokta  {d['ad']}")
