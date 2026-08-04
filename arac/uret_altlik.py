# -*- coding: utf-8 -*-
"""
ALTLIK KATMANLARI ÜRETİCİSİ  →  data/altlik.js

Şartname: `oturumlar/COGRAFYA-HATLAR.md` (COĞRAFYA oturumu)
Kullanıcı kararı (31 Temmuz): altlık kademeli geçişle bize taşınacak.
  1. Esri altlığı şimdilik kalır
  2. Üstüne bizim vektör katmanımız açılır-kapanır eklenir
  3. Katman yeterince iyi görününce Esri kaldırılır

═══ İKİ GRUP — ayrım şartnamenin özü ═══
  Grup A (COĞRAFYA)    kara · gol · nehir · dag_alan      → Kademe 3'te ALTLIK
  Grup B (MOTOR HATLARI) nehir_motorun · sirt_motorun     → hata ayıklama

🔴 Aradaki fark bir kusur değil, TEŞHİS ARACIDIR. `nehir` pencere içindeki
BÜTÜN akarsuları çizer; `nehir_motorun` yalnız motorun `BUYUK` listesiyle
eşleştirdiklerini. İkisi üst üste çizilince kırık ad eşleştirmesi gözle
görünür — Dicle'nin bir parçası yaslanıyor, bitişik parçası yaslanmıyor.
Aynı şekilde `sirt_motorun` bir KAPALI HALKA (dağın etrafı, sırtı değil);
`dag_alan` ile birlikte bakılınca "sınır dağın tepesinden geçmeli" kuralının
neden henüz karşılanmadığı görünür.

═══ ⚠️ SABİTLER KOPYALANMAZ, `uret_petek.py`'DEN OKUNUR ═══
Bu betik motorun sabitlerini (BOLGE · KARA_TOL · SADE_TOL · BUYUK · sırt
buffer'ı) kendi içine YAZMAZ; kaynak dosyadan ayrıştırır. Sebebi bugün beş
kez ölçüldü: **kopya bayatlar ve bayat kopya "yanlış" değil "güvenli"
görünür.** Altlığın kıyısı ile sınırların kıyısı aynı toleranstan çıkmazsa
çizilen kıyı ile ona yaslanmış sınır gözle ayrışır.
`import uret_petek` YAPILMAZ — o modül içe aktarıldığı anda 44 dakikalık
üretimi başlatır.
"""
import io, json, os, re, sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

from shapely.geometry import shape, box, mapping
from shapely.ops import unary_union

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASEMAPS = os.path.join(KOK, "veri-kaynak")
MOTOR = os.path.join(KOK, "arac", "uret_petek.py")
CIKTI = os.path.join(KOK, "data", "altlik.js")

_src = io.open(MOTOR, encoding="utf-8").read()


def _sabit(ad, tip=float):
    """`uret_petek.py`'den tek satırlık sabiti oku — kopyalama."""
    m = re.search(r"^%s\s*=\s*([0-9.]+)" % re.escape(ad), _src, re.M)
    if not m:
        raise SystemExit("!! uret_petek.py'de %s bulunamadi — bicim degismis" % ad)
    return tip(m.group(1))


KARA_TOL = _sabit("KARA_TOL")
SADE_TOL = _sabit("SADE_TOL")

# 🔴 BÖLGE ARTIK L ŞEKLİNDE (koşu 9):
#   BOLGE = unary_union([box(-12,-11,146,82), box(-25,60,-12,82)])
# Tek `box(...)` bekleyen desen kırıldı. Aynı yama `denetle.py`ye de uygulandı.
# ⚠️ Sınırlayıcı dikdörtgene indirgemek YASAK: çentik (lon<-12 · lat<60) Batı
# Afrika'yı kapsar ve altlık orada kıyı çizerdi — pencerede olmayan bir kara
# için. Birleşim kullanılıyor; tek kutu varsa davranış eskisiyle birebir aynı.
m = re.search(r"^BOLGE\s*=.*$", _src, re.M)
if not m:
    raise SystemExit("!! BOLGE satiri bulunamadi")
_kutular = re.findall(
    r"box\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\)",
    m.group(0))
if not _kutular:
    raise SystemExit("!! BOLGE satirinda box(...) yok")
BOLGE = unary_union([box(*[float(x) for x in k]) for k in _kutular])

# sırt hattının daraltma payı — motorun kendi satırından
m = re.search(r"cekirdek\s*=\s*g\.buffer\((-?[0-9.]+)\)", _src)
SIRT_BUFFER = float(m.group(1)) if m else -0.12

# BUYUK kümesi: `BUYUK = {` ile başlayıp dengeli süslü parantezle biten blok
i = _src.index("BUYUK = {")
d, j = 0, _src.index("{", i)
while True:
    if _src[j] == "{":
        d += 1
    elif _src[j] == "}":
        d -= 1
        if d == 0:
            break
    j += 1
BUYUK = set(re.findall(r'"([^"]+)"', _src[i:j + 1]))

# ad sadeleştirici — motorunkiyle aynı davranış
m = re.search(r"def _ad_sadelestir\(.*?\n(?=\n[A-Za-z_])", _src, re.S)
_ns = {}
exec(m.group(0), _ns)
_ad_sadelestir = _ns["_ad_sadelestir"]
BUYUK_SADE = {_ad_sadelestir(b) for b in BUYUK}
BUYUK_SADE |= {"bykmenderes", "kizlirmak", "kiziirmak", "kckmenderes",
               "yesiirmak", "bakiray", "kprüay", "kopruay", "gksu"}

print("uret_petek.py'den okunan sabitler:")
print("   BOLGE %s · KARA_TOL %s · SADE_TOL %s · SIRT_BUFFER %s · BUYUK %d ad"
      % (list(BOLGE.bounds), KARA_TOL, SADE_TOL, SIRT_BUFFER, len(BUYUK)))


def _yukle(ad):
    return json.load(io.open(os.path.join(BASEMAPS, ad), encoding="utf-8"))


def _fc(geoms):
    """Şekil listesini FeatureCollection'a çevir; boşları at."""
    ozellikler = []
    for g in geoms:
        if g is None or g.is_empty:
            continue
        ozellikler.append({"type": "Feature", "properties": {},
                           "geometry": mapping(g)})
    return {"type": "FeatureCollection", "features": ozellikler}


KATMAN = {}

# ---------------- Grup A ----------------
print("gol (motorun olcutuyle)...")
# 🔴 GÖL ÖLÇÜTÜ MOTORDAN ALINIR — ilk sürümde yalnız `area > 0.02` kullanmıştım
# ve 117 göl çizdim. YANLIŞTI: aradaki 28 kaydın tamamı 20. yüzyıl BARAJ GÖLÜ
# (Atatürk 1992 · Nâsır 1970 · Keban 1974 · Tabka 1974 · Rybinsk 1941 …).
# İki hata birden olurdu ve ikisi de sessizdi:
#   1) 1453 haritasında Atatürk Barajı görünürdü — atlasın bütün iddiası gün
#      hassasiyetinde doğruluk; 1992'de dolan gölü Fâtih devrinde çizmek onu
#      doğrudan çürütür.
#   2) Göl KARANIN ÜSTÜNDE asılı kalırdı: motor barajı maskeden çıkarmıyor,
#      yani orası KARA; altlık SU çizerdi. İki katman aynı noktada birbirini
#      yalanlar ve kimse bakmazsa görünmez.
# ⇒ Genel kural (COĞRAFYA §8.2): **altlık, motorun GÖRDÜĞÜ dünyayı çizer;
#   Natural Earth'ün ham hâlini değil.** Aksi hâlde iki dosya ayrı ayrı
#   geçerli görünür ve ayrışma denetimden geçer.
_dogal = set(re.findall(r'"([^"]+)"',
                        re.search(r"^DOGAL_GOL\s*=\s*\{([^}]*)\}", _src, re.M).group(1)))
_gl = _yukle("ne_10m_lakes.geojson")
_goller, _baraj = [], []
for f in _gl["features"]:
    p = f["properties"]
    g = shape(f["geometry"]).buffer(0)
    if not (g.envelope.intersects(BOLGE) and g.area > 0.02):
        continue
    _ad = p.get("name") or "(adsız)"
    _yil = p.get("year") or -99
    if (p.get("featurecla") == "Reservoir" and _ad not in _dogal
            and (_yil >= 1900 or p.get("dam_name"))):
        _baraj.append(_ad)
        continue
    k = g.intersection(BOLGE)
    if not k.is_empty:
        _goller.append(k)
# Tarihî göl düzeltmeleri (Aral) — motor bunları da maskeden çıkarıyor
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi as _girdi
for _eg in _girdi.oku_goller():
    _g = shape(_eg["geometry"]).buffer(0).intersection(BOLGE)
    if not _g.is_empty:
        _goller.append(_g)
GOL_BIRLIK = unary_union(_goller).buffer(0)
KATMAN["gol"] = _fc([GOL_BIRLIK.simplify(SADE_TOL, preserve_topology=True)])
print("   %d gol cizildi · %d MODERN BARAJ elendi" % (len(_goller), len(_baraj)))

print("kara...")
_ne = _yukle("ne_10m_land.geojson")
_kara = unary_union([shape(f["geometry"]).buffer(0).intersection(BOLGE)
                     for f in _ne["features"]
                     if shape(f["geometry"]).envelope.intersects(BOLGE)])
# ⚠️ Motor da gölleri karadan ÇIKARIYOR (`KARA = KARA.difference(GOLLER)`).
# Çıkarmazsak kara poligonu gölün üstünü örter ve göl katmanı görünmez.
_kara = _kara.difference(GOL_BIRLIK).buffer(0)
# ⚠️ TOLERANS SEÇİMİ ÖLÇÜLDÜ, İKİ KEZ.
# İlk denememde kıyıyı KARA_TOL (0.002) ile sadeleştirdim: "motor maskeyi bu
# toleransla alıyor, kıyı da öyle olmalı" diye. YANLIŞTI ve ölçüm gösterdi:
# motor maskeyi 0.002'de alıyor AMA petekleri sonra SADE_TOL (0.012) ile
# `coverage_simplify` ediyor — yani kullanıcının GÖRDÜĞÜ sınır 0.012'de.
# Altlığı 0.002'de çizersem kıyı ile ona yaslanmış devlet sınırı gözle ayrışır;
# tam kaçınmak istediğimiz şey. Ayrıca dosya 1,67 MB'den 0,74 MB'ye iniyor.
# 📌 Kural: altlık toleransı SADE_TOL'den OKUNUR, ayrıca yazılmaz.
#
# 🔴 VE BU KURAL YETMİYOR — COĞRAFYA ölçtü (31 Temmuz), sayılar aşağıda.
# Sabiti paylaşmak çakışmayı GARANTİ ETMİYOR, çünkü iki hat aynı toleranstan
# geçse de aynı ALGORİTMADAN geçmiyor:
#     altlık : _kara.simplify(SADE_TOL)                    ← burası
#     motor  : KARA.simplify(KARA_TOL) → coverage_simplify(SADE_TOL)
# Douglas-Peucker böyle bileşilmez. Ölçülen sapma (16.249 kıyı köşesi):
#     medyan 0,26 km · %75 0,62 · %90 0,94 · %99 1,29 km
#     köşelerin %54'ü 0,2 km'den, %8,1'i 1 km'den fazla sapıyor
# %99 dilimi teorik üst sınıra (0,012° = 1,34 km) yapışık — yani sapma
# tesadüf değil, sadeleştirme farkının kendisi. z5'te görünmez (0,4 px) ama
# z8'de 3,3 px, z10'da 13 px: `kara`nın minzoom'u yok, Kademe 3'te altlığın
# kendisi olacağı için her yakınlaştırmada açık.
#
# ⇒ ÇÖZÜM SADELEŞTİRME AYARI DEĞİL, KAYNAK: motorun nihai örtüsünün birleşimi
# ZATEN "motorun çizdiği kara"dır (hücreler BOLGE'yi döşer, KARA'ya kırpılır).
# Onu dışa aktarıp burada TÜKETİRSEK çakışma inşa gereği tam olur.
# 📌 Genel kural: "tek sayı iki yerde durmasın"ın geometri hâli —
#    TEK GEOMETRİ İKİ YERDE ÜRETİLMESİN. Sabiti paylaşmak yetmiyor,
#    ÇIKTIYI paylaşmak gerekiyor.
#
# ⚠️ Geçiş GERİYE UYUMLU yazıldı ve bilerek: dışa aktarım MOTOR'un işi ve
# henüz yok. Üretimi şimdi kaldırsaydım `kara` katmanı boş kalır, Kademe 3'ün
# TEMELİ (kara/deniz ayrımı) yerine hiçbir şey gelmezdi. Dosya varsa tüketilir,
# yoksa eski yol sürer — MOTOR dışa aktarımı bağımsız indirebilir, kilit
# gerekmez.
_MOTOR_KARA = os.path.join(KOK, "veri-kaynak", "motor_kara.geojson")
if os.path.exists(_MOTOR_KARA):
    with io.open(_MOTOR_KARA, encoding="utf-8") as _f:
        _mk = json.load(_f)
    KATMAN["kara"] = _mk if _mk.get("type") == "FeatureCollection" else _fc(
        [shape(_mk)])
    print("   kara: MOTORUN ORTUSUNDEN alindi (sapma insa geregi 0)")
else:
    KATMAN["kara"] = _fc([_kara.buffer(0).simplify(SADE_TOL,
                                                   preserve_topology=True)])
    print("   kara: yerel uretim (motor_kara.geojson YOK) "
          "— kiyi sapmasi %99 dilimde 1,29 km")

print("nehir (pencere ici HEPSI)...")
_rv = _yukle("ne_10m_rivers.geojson")
_nehir_hepsi, _nehir_motorun = [], []
for f in _rv["features"]:
    pr = f["properties"]
    g = shape(f["geometry"])
    if not g.envelope.intersects(BOLGE):
        continue
    k = g.intersection(BOLGE)
    if k.is_empty:
        continue
    k = k.simplify(SADE_TOL, preserve_topology=True)
    _nehir_hepsi.append(k)
    adlar = [pr.get("name"), pr.get("name_en"), pr.get("name_alt")]
    if any(a and _ad_sadelestir(a) in BUYUK_SADE for a in adlar):
        _nehir_motorun.append(k)
KATMAN["nehir"] = _fc(_nehir_hepsi)

print("dag_alan + sirt_motorun...")
_dg = _yukle("ne_10m_geography_regions_polys.geojson")
_dag, _sirt = [], []
for f in _dg["features"]:
    p = f["properties"]
    if "Range" not in (p.get("FEATURECLA") or ""):
        continue
    g = shape(f["geometry"]).buffer(0)
    if not g.envelope.intersects(BOLGE):
        continue
    g = g.intersection(BOLGE)
    if g.is_empty or g.area < 0.05:
        continue
    _dag.append(g.simplify(SADE_TOL, preserve_topology=True))
    cekirdek = g.buffer(SIRT_BUFFER)
    h = cekirdek.boundary if not cekirdek.is_empty else g.boundary
    _sirt.append(h.simplify(SADE_TOL, preserve_topology=True))
KATMAN["dag_alan"] = _fc(_dag)

# ---------------- Grup B ----------------
KATMAN["nehir_motorun"] = _fc(_nehir_motorun)
KATMAN["sirt_motorun"] = _fc(_sirt)

# ---------------- yaz ----------------
parcalar = []
for ad in ("kara", "gol", "nehir", "dag_alan", "nehir_motorun", "sirt_motorun"):
    parcalar.append('"%s":%s' % (ad, json.dumps(KATMAN[ad], separators=(",", ":"))))
metin = ("// 🤖 ÜRETİLMİŞ — arac/uret_altlik.py. ELLE DÜZENLEME.\n"
         "// Şartname: oturumlar/COGRAFYA-HATLAR.md\n"
         "window.ALTLIK = {" + ",".join(parcalar) + "};\n")
# Üretim izi (İş G): bu çıktının bayatlığı artık ölçülebilir. Girdi kümesi
# betiğin GERÇEKTEN okuduklarıdır; goller.js ve motor_kara.geojson isteğe
# bağlı girdiler, varsa ize girer (yokken üretim de onlarsız koşuyor).
# uret_petek.py girdide: sabitler (BOLGE·KARA_TOL·SADE_TOL·BUYUK) oradan
# ayrıştırılıyor — motor penceresi değişince altlık da bayatlar.
_iz_girdi = ["veri-kaynak/ne_10m_land.geojson",
             "veri-kaynak/ne_10m_lakes.geojson",
             "veri-kaynak/ne_10m_rivers.geojson",
             "veri-kaynak/ne_10m_geography_regions_polys.geojson",
             "arac/uret_petek.py"]
for _ops in ("data/goller.js", "veri-kaynak/motor_kara.geojson"):
    if os.path.exists(os.path.join(KOK, _ops)):
        _iz_girdi.append(_ops)
metin += _girdi.uretim_izi_js(_iz_girdi, ["uret_altlik.py"])
io.open(CIKTI, "w", encoding="utf-8", newline="\n").write(metin)

print()
print("%-16s %6s  %10s" % ("katman", "parca", "bayt"))
print("-" * 36)
toplam = 0
for ad in ("kara", "gol", "nehir", "dag_alan", "nehir_motorun", "sirt_motorun"):
    b = len(json.dumps(KATMAN[ad], separators=(",", ":")).encode("utf-8"))
    toplam += b
    print("%-16s %6d  %8.2f KB" % (ad, len(KATMAN[ad]["features"]), b / 1024.0))
print("-" * 36)
print("%-16s %6s  %8.2f MB" % ("TOPLAM", "", toplam / 1048576.0))
print("\ndata/altlik.js yazildi — %.2f MB" % (os.path.getsize(CIKTI) / 1048576.0))
