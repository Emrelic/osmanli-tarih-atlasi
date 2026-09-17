# -*- coding: utf-8 -*-
"""ARAC-MOTOR-YURUYUS-ONGORU-0917 — "kara-kara sınırını yürüyüş süresi çizsin"
değişikliğinin KOŞUDAN ÖNCE öngörüsü (koşusuz ölçüm, SALT OKUMA).

MOTOR-YURUYUS · 17 Eylül 2026 · şartname oturumlar/MOTOR-YURUYUS-0917.md §2-1.

NE KARŞILAŞTIRIR (aynı 0,05° ızgarada, aynı tohumlar):
  A  BUGÜN   sahip = düz (derece-planar) en yakın tohum = motorun Voronoi'si,
             ve hücre o tohumun A1 tavanının (TAVAN_DAIRE, 200 km, 16 sektör,
             alan koruyan) İÇİNDE ise; değilse SAHİPSİZ.
  B  YARIN   sahip = motorun üretim Dijkstra'sı (eğim + nehir kenarı),
             ve yürüyüş bedeli ≤ 40 saat × 5,04 km/saat ise; değilse SAHİPSİZ.

🔴 AYNI KOD KURALI (ARAC-MOTOR-NEHIR-0916 deseni): motorun mantığı KOPYALANMAZ.
   `arac/uret_petek.py` kaynağından METİN İŞARETLERİYLE dilimler kesilir ve aynen
   `exec` edilir: eğim DEM + kara maskesi + göller · nehirler (+geçitler) ·
   Voronoi + A1 tavanı · ızgara + tohum + eğim yüzeyi + nehir kenarı + Dijkstra.
   İşaret bulunamazsa betik ÖLÜR.

⚠️ A'NIN SINIRLARI (öngörünün mazeret olabilecek kalemleri — rapora yazılır):
   · ada kuralı, kara-kısıtlı devir (deniz aşırı parçalar), çöl tavanı, puan
     kapısı, varlık epokları, B1-B3 rötuşları A'da da B'de de YOK. İkisi de
     "ham sahiplik"tir; fark bu aşamaların ÖNCESİNDEKİ farktır.
   · ızgara sahipliği hücre MERKEZİNE sorulur; Voronoi kenarında ±1 hücre.

🔴 KOŞU DEĞİLDİR: data/ ve veri-kaynak/ yazılmaz. Tek çıktı:
   denetim/ARAC-MOTOR-YURUYUS-ONGORU-0917.json  (kutu başına bir bölüm)
   Süreç önceliği BELOW_NORMAL (koşu 12 aynı makinede, boş bellek ~1,3 GB —
   bu yüzden dünya tek ızgarada DEĞİL, kutularla ölçülür).

Kullanım:  py denetim/ARAC-MOTOR-YURUYUS-ONGORU-0917.py --karo lon0,lat0,lon1,lat1 --ad ADI [--pay 3]
           (dünya: ARAC-MOTOR-YURUYUS-KAROLAR-0917.py 18 karoyu SIRAYLA koşturur)
"""
import io, json, math, os, re, sys, time, argparse, hashlib

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", line_buffering=True)

try:
    import ctypes
    ctypes.windll.kernel32.SetPriorityClass(ctypes.windll.kernel32.GetCurrentProcess(), 0x4000)
    print("öncelik: BELOW_NORMAL")
except Exception as _e:
    print("öncelik ayarlanamadı:", _e)

import numpy as np
import shapely
from scipy import ndimage
from scipy.spatial import cKDTree
from shapely.geometry import (shape, box, Polygon, MultiPolygon, Point, MultiPoint,
                              LineString, MultiLineString, GeometryCollection)
from shapely.ops import unary_union, voronoi_diagram
from shapely.affinity import scale as _scale
from shapely.strtree import STRtree
from shapely.prepared import prep
import girdi

T0 = time.time()


def asama(ad=None):
    if ad:
        print(f"[{time.time() - T0:7.1f} sn] {ad}")


_ap = argparse.ArgumentParser()
_ap.add_argument("--karo", required=True,
                 help="lon0,lat0,lon1,lat1 — istatistiğin sayıldığı KARO (dünya karoları örtüşmez)")
_ap.add_argument("--ad", required=True)
_ap.add_argument("--pay", type=float, default=3.0,
                 help="karo her yöne bu kadar (derece) genişletilip ızgara ORADA kurulur; "
                      "40 saatlik yol ≤ ~1,8° olduğu için 3° kenar etkisini karonun dışında tutar")
_ap.add_argument("--saat", type=float, default=40.0)
_ap.add_argument("--motor", default=os.path.join(KOK, "arac", "uret_petek.py"),
                 help="dilimlerin alınacağı motor (vars. ana klasör)")
_ap.add_argument("--yon16", action="store_true",
                 help="B tarafı 16 komşulu Dijkstra (yalnız motor-yuruyus dalının motorunda var)")
_ap.add_argument("--cikti", default="ARAC-MOTOR-YURUYUS-ONGORU-0917.json",
                 help="denetim/ altındaki ham çıktı dosyası")
ARG = _ap.parse_args()

KAYNAK_YOL = ARG.motor
KAYNAK = io.open(KAYNAK_YOL, encoding="utf-8").read().replace("\r\n", "\n")
if ARG.yon16 and "YURUYUS_16" not in KAYNAK:
    raise SystemExit("--yon16 istendi ama motor 16 komşuyu tanımıyor — dal motorunu verin")


def dilim(bas, son):
    i = KAYNAK.find(bas)
    j = KAYNAK.find(son, i + 1)
    if i < 0 or j < 0:
        raise SystemExit(f"İŞARET BULUNAMADI: {bas[:40]!r} / {son[:40]!r} — "
                         "motor değişmiş, betik GÜNCELLENMEDEN ölçüm yapılmaz")
    return KAYNAK[i:j]


IC = tuple(float(v) for v in ARG.karo.split(","))
K = [max(-180.0, IC[0] - ARG.pay), max(-60.0, IC[1] - ARG.pay),
     min(180.0, IC[2] + ARG.pay), min(85.0, IC[3] + ARG.pay)]

NS = dict(json=json, os=os, sys=sys, io=io, math=math, re=re, time=time,
          shapely=shapely, shape=shape, box=box, Polygon=Polygon,
          MultiPolygon=MultiPolygon, Point=Point, MultiPoint=MultiPoint,
          LineString=LineString, MultiLineString=MultiLineString,
          GeometryCollection=GeometryCollection, unary_union=unary_union,
          voronoi_diagram=voronoi_diagram, _scale=_scale,
          STRtree=STRtree, prep=prep, girdi=girdi, asama=asama, KOK=KOK,
          BASEMAPS=os.path.join(KOK, "veri-kaynak"), __name__="uret_petek_dilim")
NS["BOLGE"] = box(*K)
# Dal motorunun dilimleri bayrak adlarını okur; A tarafı (Voronoi + A1) bayraksız
# hâlidir, B tarafının tek farkı 16 komşudur. MOTOR_YURUYUS'un petek değişimi
# burada KOŞMAZ — ölçülen şey hâlâ ızgara düzeyinde ham sahiplik.
NS["MOTOR_YURUYUS"] = False
NS["YURUYUS_16"] = bool(ARG.yon16)
print("BOLGE", K, "· iç", IC, "·", ARG.ad)

exec(dilim("EGIM_CARPANI = 0.005\n", "# ---------------- Nehir yatakları"), NS)
exec(dilim("# ---------------- Nehir yatakları", "# ---------------- Dağ sırtları"), NS)
asama("Yerleşimler")
NS["YERLER"] = YER = girdi.yukle(sessiz=True)
print(f"  {len(YER)} yerleşim")
exec(dilim("# ---------------- Petekler (Voronoi)",
           "# ---------------- Petek sınırlarını doğal hatlara yasla"), NS)
exec(dilim("KV_ADIM = 0.05 ", "_kvuzak, _kvsahip = _kv_dijkstra(_kvsurt, _KVNEHIR)"), NS)

nx, ny, KV = NS["_kvnx"], NS["_kvny"], NS["KV_ADIM"]
x0, y0 = NS["_kvx0"], NS["_kvy0"]
kara = np.frombuffer(bytes(NS["_kvkara"]), dtype=np.uint8).reshape(ny, nx) > 0
lon_sut = x0 + (np.arange(nx) + 0.5) * KV
lat_sat = y0 + (np.arange(ny) + 0.5) * KV
hkm2 = ((KV * 111.32) ** 2 * np.cos(np.radians(lat_sat)))[:, None] * np.ones((1, nx))
ic = (((lon_sut >= IC[0]) & (lon_sut < IC[2]))[None, :]
      & ((lat_sat >= IC[1]) & (lat_sat < IC[3]))[:, None])
KM_SAAT = NS["NEHIR_KM_SAAT"]
BUTCE = ARG.saat * KM_SAAT

# ---------------- B: üretim Dijkstra'sı + bütçe ----------------
asama("Dijkstra (eğim + nehir, üretim)")
_t = time.time()
u, s = NS["_kv_dijkstra"](NS["_kvsurt"], NS["_KVNEHIR"])
t_dijk = round(time.time() - _t, 1)
u = np.array(u, dtype=np.float32).reshape(ny, nx)
s = np.array(s, dtype=np.int32).reshape(ny, nx)
B = np.where((s >= 0) & (u <= BUTCE), s, -1)
print(f"  {t_dijk} sn · erişilen {int((s >= 0).sum()):,} · bütçe içi {int((B >= 0).sum()):,}")
# ⚠️ Izgaranın ERİŞMEDİĞİ kara hücresi (tohumsuz ada / tohumu başka hücreye
#    kaydırılmış küçük ada) tasarımda ESKİ kurala kalır: Voronoi + A1 tavanı.
#    Bu yüzden B, o hücrelerde A'nın cevabını devralır (aşağıda, A kurulunca).
ERISILMEZ = kara & (s < 0)

# ---------------- A: Voronoi (derece-planar en yakın) + A1 tavanı ----------------
asama("A: Voronoi sahibi + A1 tavanı (ızgarada)")
pts = np.array([[y["lon"], y["lat"]] for y in YER])
agac = cKDTree(pts)
jj, ii = np.nonzero(kara)
_, en = agac.query(np.column_stack([lon_sut[ii], lat_sat[jj]]))
A = np.full((ny, nx), -1, dtype=np.int32)
TD = NS["TAVAN_DAIRE"]
PET = NS["PETEK"]
sira = np.argsort(en, kind="stable")
en_s = en[sira]
sinir = np.flatnonzero(np.diff(en_s)) + 1
for grp in np.split(sira, sinir):
    o = int(en[grp[0]])
    if PET[o] is None or PET[o].is_empty:
        continue                              # hücresi kutuda yok (pencere dışı)
    xs, ys = lon_sut[ii[grp]], lat_sat[jj[grp]]
    ok = shapely.contains_xy(TD[o], xs, ys)
    A[jj[grp][ok], ii[grp][ok]] = o
print(f"  A sahipli {int((A >= 0).sum()):,} kara hücresi")
B = np.where(ERISILMEZ, A, B)
print(f"  ızgaranın erişmediği kara hücresi {int(ERISILMEZ.sum()):,} (B'de eski kurala kaldı)")

# ---------------- istatistik (yalnız iç kutu, yalnız kara) ----------------
m = kara & ic
kA, kB = m & (A >= 0), m & (B >= 0)
degisen = kA & kB & (A != B)
yeni_bos = kA & ~kB
yeni_dolu = ~kA & kB
km = lambda msk: round(float(hkm2[msk].sum()))
SON = {"meta": {"tarih": "2026-09-17", "oturum": "MOTOR-YURUYUS",
                "motor_sha_ilk12": hashlib.sha256(KAYNAK.encode("utf-8")).hexdigest()[:12],
                "motor": KAYNAK_YOL, "yon16": bool(ARG.yon16),
                "kutu": K, "ic_kutu": IC, "izgara": [nx, ny], "saat": ARG.saat,
                "butce_km_esdeger": BUTCE, "dijkstra_sn": t_dijk,
                "erisilmez_kara_hucre_karo": int((ERISILMEZ & ic).sum()),
                "yerlesim": len(YER),
                "pencere_disi_tohum": len(NS["_kvpencere_disi"]),
                "ayni_hucreyi_paylasan_tohum": int(sum(len(v) - 1 for v in NS["_kvtohum"].values())),
                "sure_sn": None}}
SON["alan"] = {
    "kara_ic_km2": km(m),
    "A_sahipli_km2": km(kA), "B_sahipli_km2": km(kB),
    "sahibi_degisen_km2": km(degisen),
    "yeni_sahipsiz_km2": km(yeni_bos),
    "yeni_sahipli_km2": km(yeni_dolu),
    "A_sahipsiz_km2": km(m & ~kA), "B_sahipsiz_km2": km(m & ~kB),
}
print("ALAN:", SON["alan"])

# ① aynı hücreyi paylaşan tohumlar — B'de hücresi OLMAYAN yerleşim (Değişmez 1 riski)
hucresiz = []
for h, idxs in NS["_kvtohum"].items():
    j, i = divmod(h, nx)
    if len(idxs) > 1 and ic[j, i]:
        for k in idxs[1:]:
            if not (s == k).any():
                hucresiz.append({"ad": YER[k]["ad"], "hucreyi_alan": YER[idxs[0]]["ad"]})
SON["B_hucresiz_tohum"] = {"sayi": len(hucresiz), "ornek": hucresiz[:25]}
print("B'de ızgara hücresi olmayan tohum (iç kutu):", len(hucresiz))

# ② yeni sahipsiz kümeler — en büyük 10 + NOKTASIZLIK sınıflaması (≥ KUME_MIN km²)
# 🔴 SINIF EŞİKLERİ ÖLÇÜMDEN ÖNCE YAZILDI (17 Eylül, 1.MURAT M-4332 sevki):
#    DAĞ        kümenin medyan sürtünmesi > 1,5 — yürüyüş gerçekten yavaş;
#               sahipsizlik ARAZİNİN sonucu, nokta eklemek ancak kısmen çözer
#    NOKTASIZ   medyan sürtünme ≤ 1,5 — arazi düz sayılır (kara medyanı 1,204);
#               40 saatin aşılmasının asıl sebebi YAKINDA NOKTA OLMAMASI
#               (ya da nehir bedeli) ⇒ NOKTA oturumlarına aday
#    Ek ölçüt (yalnız bilgi): kümenin medyan DÜZ mesafesi en yakın tohuma (km).
KUME_MIN = 10000.0
SURT_ESIK = 1.5
_surt = (np.frombuffer(NS["_kvsurt"], dtype=np.float32).reshape(ny, nx)
         if NS["_kvsurt"] is not None else np.ones((ny, nx), np.float32))
_xyz = lambda la, lo: np.column_stack([np.cos(np.radians(la)) * np.cos(np.radians(lo)),
                                       np.cos(np.radians(la)) * np.sin(np.radians(lo)),
                                       np.sin(np.radians(la))])
_tagac = cKDTree(_xyz(np.array([y["lat"] for y in YER]), np.array([y["lon"] for y in YER])))
lab, n = ndimage.label(yeni_bos, structure=np.ones((3, 3)))
kume, siniflanan = [], []
if n:
    alan_k = ndimage.sum(hkm2, lab, index=np.arange(1, n + 1))
    buyuk = [k for k in np.argsort(alan_k)[::-1] if alan_k[k] >= KUME_MIN]
    nesne = ndimage.find_objects(lab)
    for k in buyuk:
        sl = nesne[k]
        msk = lab[sl] == (k + 1)
        jj2, ii2 = np.nonzero(msk)
        jj2 = jj2 + sl[0].start
        ii2 = ii2 + sl[1].start
        la2, lo2 = lat_sat[jj2], lon_sut[ii2]
        sah = np.bincount(A[jj2, ii2], minlength=len(YER))
        es = [YER[int(o)]["ad"] for o in np.argsort(sah)[::-1][:3] if sah[o] > 0]
        d_ch, _ = _tagac.query(_xyz(la2, lo2))
        d_km = 2 * 6371.0088 * np.arcsin(np.clip(d_ch / 2, 0, 1))
        ms = float(np.median(_surt[jj2, ii2]))
        kayit = {"km2": round(float(alan_k[k])),
                 "merkez_lat": round(float(la2.mean()), 2),
                 "merkez_lon": round(float(lo2.mean()), 2),
                 "A_sahipleri": es,
                 "surtunme_medyan": round(ms, 3),
                 "en_yakin_tohum_km_medyan": round(float(np.median(d_km)), 1),
                 "yuruyus_saat_medyan": round(float(np.median(u[jj2, ii2])) / KM_SAAT, 1),
                 "sinif": "DAG" if ms > SURT_ESIK else "NOKTASIZ"}
        siniflanan.append(kayit)
    kume = siniflanan[:10]
SON["yeni_sahipsiz_kume"] = {"kume_sayisi": int(n), "en_buyuk_10": kume,
                             "siniflanan_min_km2": KUME_MIN, "surt_esik": SURT_ESIK,
                             "siniflanan": siniflanan}
for kk in kume:
    print("  kume", kk)

# ③ yerleşim başına net değişim
wA = np.bincount(A[m & (A >= 0)], weights=hkm2[m & (A >= 0)], minlength=len(YER))
wB = np.bincount(B[m & (B >= 0)], weights=hkm2[m & (B >= 0)], minlength=len(YER))
net = wB - wA
ets = np.argsort(np.abs(net))[::-1][:20]
SON["en_cok_etkilenen_20"] = [{"ad": YER[int(i)]["ad"], "A_km2": round(float(wA[i])),
                               "B_km2": round(float(wB[i])), "net_km2": round(float(net[i]))}
                              for i in ets if abs(net[i]) > 0]
for r in SON["en_cok_etkilenen_20"][:8]:
    print("  ", r)

# ④ Osmanlı doğrudan toprağı
osm = {}
for g in ("1520-06-15", "1683-06-15", "1800-06-15"):
    dog = np.array([any(p["f"] <= g < p["t"] for p in (y.get("d") or [])) for y in YER])
    a = km(m & (A >= 0) & dog[np.maximum(A, 0)])
    b = km(m & (B >= 0) & dog[np.maximum(B, 0)])
    osm[g] = {"A_km2": a, "B_km2": b, "fark_km2": b - a,
              "fark_yuzde": round(100.0 * (b - a) / a, 2) if a else None}
    print("  Osmanlı doğrudan", g, osm[g])
SON["osmanli_dogrudan"] = osm

# ⑤ B'de en uzak sahipli hücrenin saati (bütçe dışı kalan pay)
dis = m & (s >= 0) & (u > BUTCE)
SON["butce_disi_erisilen_km2"] = km(dis)

SON["meta"]["sure_sn"] = round(time.time() - T0)
cikti = os.path.join(KOK, "denetim", ARG.cikti)
hepsi = json.load(io.open(cikti, encoding="utf-8")) if os.path.exists(cikti) else {}
hepsi[ARG.ad] = SON
with io.open(cikti, "w", encoding="utf-8") as f:
    json.dump(hepsi, f, ensure_ascii=False, indent=1)
print(f"YAZILDI {cikti} · {ARG.ad} · toplam {time.time() - T0:,.0f} sn")
