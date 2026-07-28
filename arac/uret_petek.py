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

BASEMAPS = r"C:\Users\emrem\AppData\Local\Temp\claude\C--Users-emrem-OneDrive-Belgeler-Projeler-Ranking\2ad1685f-dd0a-4c8c-8b9d-a89c216d56e6\scratchpad\basemaps"
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CIKTI = os.path.join(KOK, "data", "donemler.js")
BOLGE = box(-12, 8, 60, 53)
R_DUNYA = 6371.0088

# ---------------- Kara maskesi ----------------
print("Kara maskesi (Natural Earth 10m)...")
_ne = json.load(open(os.path.join(BASEMAPS, "ne_10m_land.geojson"), encoding="utf-8"))
KARA = unary_union([shape(f["geometry"]).buffer(0).intersection(BOLGE)
                    for f in _ne["features"] if shape(f["geometry"]).envelope.intersects(BOLGE)])
KARA = KARA.buffer(0).simplify(0.004, preserve_topology=True).buffer(0)
print("  tamam")

# ---------------- Nehir yatakları ----------------
print("Nehir yatakları...")
BUYUK = {"Danube","Duna","Dunav","Sava","Drava","Tisza","Tisa","Morava","Dniester",
         "Dnipro","Dnieper","Prut","Southern Bug","Don","Kuban","Firat","Al Furat",
         "Euphrates","Dijlah","Tigris","Murat","Kura","Aras","Nile","Bahr el Nil",
         "Maritsa","Meric","Vardar","Struma","Sakarya","Kizilirmak","Yesilirmak",
         "Seyhan","Ceyhan","Jordan","Orontes","Buyuk Menderes","Gediz"}
NEHIRLER = []
try:
    _rv = json.load(open(os.path.join(BASEMAPS, "ne_10m_rivers.geojson"), encoding="utf-8"))
    for f in _rv["features"]:
        pr = f["properties"]
        if (pr.get("name") or pr.get("name_en") or "") not in BUYUK: continue
        g = shape(f["geometry"])
        if g.envelope.intersects(BOLGE): NEHIRLER.append(g.intersection(BOLGE))
    NEHIRLER = [n for n in NEHIRLER if not n.is_empty]
except Exception as e:
    print("  nehir verisi yok:", e)
NEHIR_HAT = unary_union(NEHIRLER) if NEHIRLER else None
print(f"  {len(NEHIRLER)} nehir")

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
print(f"  {len(YERLER)} yerleşim ({sum(1 for y in YERLER if y['d'] or y['v'])} Osmanlı, "
      f"{sum(1 for y in YERLER if not (y['d'] or y['v']))} komşu, "
      f"{sum(1 for y in YERLER if y['v'])} tâbi dönemi olan)")

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
            yeni.append(Polygon(dis).buffer(0))
        except Exception:
            yeni.append(p)
    return unary_union(yeni).buffer(0)

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
        osmanli = bool(YERLER[i]["d"] or YERLER[i]["v"])
        yeni = dogallastir(ham, yasla=osmanli).intersection(KARA).buffer(0)
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
tarihler = sorted(t for t in tarihler if "1299-01-01" <= t <= "1923-11-01")
if tarihler[0] != "1299-01-01": tarihler.insert(0, "1299-01-01")
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
        gt = delikleri_doldur(gt).intersection(KARA).buffer(0)
    g = unary_union([PETEK_D[j] for j in dogrudan]).buffer(0)
    g = delikleri_doldur(g).intersection(KARA).buffer(0)
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
