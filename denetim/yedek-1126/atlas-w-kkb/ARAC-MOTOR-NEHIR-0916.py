# -*- coding: utf-8 -*-
"""ARAC-MOTOR-NEHIR-0916 — nehir geçiş bedelinin IZGARA etkisi (koşusuz ölçüm).

MOTOR · DALGA-0052 · 16 Eylül 2026.

NE ÖLÇER
  ① aynı ızgarada nehirli / nehirsiz sahiplik farkı (hücre ve km², %)
     — eğim İKİ tarafta da açık; tek fark nehir kenar bedeli
  ② farkın bölgelere ve yerleşimlere dağılımı
  ③ H-0105/106: "40 saat / 5 gün sürtünmeli yürüme" erişimi ile 200 km'lik
     düz erişimin farkı (tavan Dijkstra'ya bağlansaydı ne değişirdi)

🔴 AYNI KOD KURALI — bu betik motorun mantığını KOPYALAMAZ.
   `arac/uret_petek.py` kaynağından METİN İŞARETLERİYLE üç dilim kesilir ve
   aynen `exec` edilir: eğim DEM seçimi + kara maskesi + göller · nehir
   yatakları (sınıf + geçit okuma dahil) · ızgara + tohum + eğim yüzeyi +
   nehir kenarları + `_kv_dijkstra`. İşaret bulunamazsa betik ÖLÜR —
   sessizce eski bir kopyayla ölçmek, hiç ölçmemekten kötüdür.

🔴 KOŞU DEĞİLDİR: hiçbir çıktı dosyası (data/, veri-kaynak/) yazılmaz.
   Tek çıktı: denetim/ARAC-MOTOR-NEHIR-0916.json
   Süreç önceliği BELOW_NORMAL'a indirilir (koşu 12 aynı makinede).

Kullanım:  py denetim/ARAC-MOTOR-NEHIR-0916.py
"""
import io, json, math, os, re, sys, time

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", line_buffering=True)

try:  # koşu 12'yi yavaşlatmamak için
    import ctypes
    ctypes.windll.kernel32.SetPriorityClass(ctypes.windll.kernel32.GetCurrentProcess(), 0x4000)
    print("öncelik: BELOW_NORMAL")
except Exception as _e:
    print("öncelik ayarlanamadı:", _e)

import numpy as np
import shapely
from shapely.geometry import (shape, box, Polygon, MultiPolygon, Point, MultiPoint,
                              LineString, MultiLineString, GeometryCollection)
from shapely.ops import unary_union
from shapely.strtree import STRtree
from shapely.prepared import prep
import girdi

T0 = time.time()


def asama(ad=None):
    if ad:
        print(f"[{time.time() - T0:7.1f} sn] {ad}")


KAYNAK = io.open(os.path.join(KOK, "arac", "uret_petek.py"), encoding="utf-8").read()


def dilim(bas, son):
    i = KAYNAK.find(bas)
    j = KAYNAK.find(son, i + 1)
    if i < 0 or j < 0:
        raise SystemExit(f"İŞARET BULUNAMADI: {bas[:40]!r} / {son[:40]!r} — "
                         "motor değişmiş, betik GÜNCELLENMEDEN ölçüm yapılmaz")
    return KAYNAK[i:j]


NS = dict(json=json, os=os, sys=sys, io=io, math=math, re=re, time=time,
          shapely=shapely, shape=shape, box=box, Polygon=Polygon,
          MultiPolygon=MultiPolygon, Point=Point, MultiPoint=MultiPoint,
          LineString=LineString, MultiLineString=MultiLineString,
          GeometryCollection=GeometryCollection, unary_union=unary_union,
          STRtree=STRtree, prep=prep, girdi=girdi, asama=asama, KOK=KOK,
          BASEMAPS=os.path.join(KOK, "veri-kaynak"),
          __name__="uret_petek_dilim")
# BOLGE motorun kendi satırından okunur (tek satır) — ya da --kutu ile daraltılır.
# 🔴 NİÇİN DARALTMA VAR (16 Eylül ölçüldü): makine 11,9 GB, koşu 12 çalışırken
#    boş bellek 1,6 GB · CPU %98. Tam dünya ızgarası 20,9 M hücre × üç Dijkstra
#    birkaç GB ister ve KOŞU 12'Yİ sayfa dosyasına iter. Bölgesel kutu bu
#    riski kaldırır; bedeli: pencere DIŞINDAKİ tohumlar yarışmaz ⇒ kutu
#    kenarında sahiplik tam dünyadakinden farklı olabilir. Oran ölçümü için
#    kabul edilebilir, mutlak sayı için DEĞİL — raporda ayrı yazılır.
import argparse
_ap = argparse.ArgumentParser()
_ap.add_argument("--kutu", help="lon0,lat0,lon1,lat1 (verilmezse motorun BOLGE'si)")
_ap.add_argument("--ad", default="tam", help="JSON'daki bölüm adı")
_ap.add_argument("--ornek", default="gauhati,guwahati,sibsagar,sivasagar,camdo,chamdo",
                 help="erişimi ayrıca raporlanacak yerleşim ad parçaları (sadeleştirilmiş)")
ARG = _ap.parse_args()
ORNEK_ADLAR = tuple(a.strip() for a in ARG.ornek.split(",") if a.strip())
if ARG.kutu:
    NS["BOLGE"] = box(*[float(v) for v in ARG.kutu.split(",")])
else:
    _m = re.search(r"^BOLGE = (box\([^)]*\))", KAYNAK, re.M)
    NS["BOLGE"] = eval(_m.group(1), NS)
print("BOLGE", NS["BOLGE"].bounds, "·", ARG.ad)

exec(dilim("EGIM_CARPANI = 0.005\n", "# ---------------- Nehir yatakları"), NS)
exec(dilim("# ---------------- Nehir yatakları", "# ---------------- Dağ sırtları"), NS)
asama("Yerleşimler")
NS["YERLER"] = girdi.yukle(sessiz=True)
print(f"  {len(NS['YERLER'])} yerleşim")
exec(dilim("KV_ADIM = 0.05 ", "_kvuzak, _kvsahip = _kv_dijkstra(_kvsurt, _KVNEHIR)"), NS)

dijk = NS["_kv_dijkstra"]
nx, ny, KV = NS["_kvnx"], NS["_kvny"], NS["KV_ADIM"]
x0, y0 = NS["_kvx0"], NS["_kvy0"]
YER = NS["YERLER"]
kara = np.frombuffer(bytes(NS["_kvkara"]), dtype=np.uint8).reshape(ny, nx) > 0
lat_sat = y0 + (np.arange(ny) + 0.5) * KV
hucre_km2 = ((KV * 111.32) ** 2 * np.cos(np.radians(lat_sat)))[:, None] * np.ones((1, nx))


def kos(ad, surt, nehir):
    asama(f"Dijkstra: {ad}")
    t = time.time()
    u, s = dijk(surt, nehir)
    u = np.array(u, dtype=np.float32).reshape(ny, nx)
    s = np.array(s, dtype=np.int32).reshape(ny, nx)
    print(f"  {ad}: {time.time() - t:,.0f} sn · erişilen {int((s >= 0).sum()):,}")
    return u, s, round(time.time() - t, 1)


uN, sN, tN = kos("eğim + NEHİR (üretim)", NS["_kvsurt"], NS["_KVNEHIR"])
u0, s0, t0 = kos("eğim, nehirsiz", NS["_kvsurt"], None)

er = sN >= 0
fark = er & (sN != s0)
SON = {"meta": {"tarih": "2026-09-16", "oturum": "MOTOR · DALGA-0052",
                "motor_sha_ilk12": __import__("hashlib").sha256(KAYNAK.encode("utf-8")).hexdigest()[:12],
                "gecit_izi_ilk12": NS["GECIT_IZI"][:12],
                "izgara": [nx, ny], "kv_adim": KV,
                "dijkstra_sure_sn": {"nehirli": tN, "nehirsiz": t0},
                "ozne": NS["NEHIR_OZNE"], "tablo_saat": NS["NEHIR_BEDEL_SAAT"][NS["NEHIR_OZNE"]],
                "km_saat": NS["NEHIR_KM_SAAT"]},
       "kenar": NS["_nb_olcum"],
       "sinif_parca": {"1": NS["NEHIR_SINIFI"].count(1), "2": NS["NEHIR_SINIFI"].count(2)}}
SON["izgara_farki"] = {
    "erisilen_hucre": int(er.sum()),
    "erisilen_nehirsizle_ayni": bool(int(er.sum()) == int((s0 >= 0).sum())),
    "sahibi_degisen_hucre": int(fark.sum()),
    "sahibi_degisen_yuzde": round(100.0 * fark.sum() / max(1, er.sum()), 3),
    "sahibi_degisen_km2": round(float(hucre_km2[fark].sum())),
    "erisilen_km2": round(float(hucre_km2[er].sum())),
}
print("IZGARA FARKI:", SON["izgara_farki"])

BOLGELER = {
    "Tuna havzası 8-30D 42-50K": (8, 42, 30, 50),
    "Balkanlar 18-30D 39-45K": (18, 39, 30, 45),
    "Anadolu 26-45D 36-42K": (26, 36, 45, 42),
    "Mezopotamya 38-49D 29-38K": (38, 29, 49, 38),
    "Mısır-Nil 28-35D 21-32K": (28, 21, 35, 32),
    "Kafkasya 38-50D 38-44K": (38, 38, 50, 44),
    "Karadeniz kuzeyi 28-50D 44-56K": (28, 44, 50, 56),
    "Assam 88-97D 23-29K": (88, 23, 97, 29),
}
bol = {}
lon_sut = x0 + (np.arange(nx) + 0.5) * KV
for ad, (a, b, c, d) in BOLGELER.items():
    ms = ((lon_sut >= a) & (lon_sut < c))[None, :] & ((lat_sat >= b) & (lat_sat < d))[:, None]
    e = er & ms
    f = fark & ms
    bol[ad] = {"erisilen_hucre": int(e.sum()), "degisen_hucre": int(f.sum()),
               "degisen_yuzde": round(100.0 * f.sum() / max(1, e.sum()), 2),
               "degisen_km2": round(float(hucre_km2[f].sum()))}
    print(f"  {ad:<32} {bol[ad]}")
SON["bolge"] = bol

# yerleşim başına kazanç / kayıp (km²)
_fk = fark & (s0 >= 0)
kaz = np.bincount(sN[_fk], weights=hucre_km2[_fk], minlength=len(YER))
kay = np.bincount(s0[_fk], weights=hucre_km2[_fk], minlength=len(YER))
net = kaz - kay
sira = np.argsort(net)
SON["en_cok_kaybeden"] = [{"ad": YER[i]["ad"], "net_km2": round(float(net[i]))}
                          for i in sira[:15] if net[i] < 0]
SON["en_cok_kazanan"] = [{"ad": YER[i]["ad"], "net_km2": round(float(net[i]))}
                         for i in sira[::-1][:15] if net[i] > 0]
print("kaybeden:", SON["en_cok_kaybeden"][:6])
print("kazanan :", SON["en_cok_kazanan"][:6])

# ③ H-0105/106 — 40 saatlik bütçe mi, 200 km'lik düz erişim mi?
del u0, s0
uE, sE, tE = kos("DÜZ (eğimsiz, nehirsiz) — 200 km tavanının ızgara vekili", None, None)
SON["meta"]["dijkstra_sure_sn"]["duz"] = tE
BUTCE = 40.0 * NS["NEHIR_KM_SAAT"]
icN = er & (uN <= BUTCE)
icE = (sE >= 0) & (uE <= 200.0)
SON["butce"] = {
    "butce_km_esdeger": BUTCE,
    "not": "DÜZ taraf 0,05° ızgarada 8 komşulu mesafedir; gerçek daireden ~%8'e kadar sapar",
    "duz_200km_ic_km2": round(float(hucre_km2[icE].sum())),
    "surtunmeli_40saat_ic_km2": round(float(hucre_km2[icN].sum())),
    "duzde_ic_surtunmede_dis_km2": round(float(hucre_km2[icE & ~icN].sum())),
    "surtunmede_ic_duzde_dis_km2": round(float(hucre_km2[icN & ~icE].sum())),
}
print("BÜTÇE:", SON["butce"])


def _sade(s):
    # NFKD + birleşik işaret atma — "Sibsâgar"daki â düz aramayı kaçırıyordu
    # (ilk koşuda ölçüldü: Gauhâtî bulundu, Sibsâgar BULUNAMADI). CLAUDE.md §4:
    # `lower()` Türkçe/aksanlı adı sessizce kaçırır.
    import unicodedata
    s = s.translate(str.maketrans("İIıŞĞÜÖÇ", "iiisguoc"))
    s = "".join(c for c in unicodedata.normalize("NFKD", s) if not unicodedata.combining(c))
    return "".join(c for c in s.lower() if c.isalpha())


ornek = {}
for i, y in enumerate(YER):
    sa = _sade(y["ad"])
    if any(k in sa for k in ORNEK_ADLAR):
        mN = (sN == i)
        mE = (sE == i)
        ornek[y["ad"]] = {
            "lat": y["lat"], "lon": y["lon"],
            "duz_200km_kendi_km2": round(float(hucre_km2[mE & (uE <= 200.0)].sum())),
            "surtunmeli_40saat_kendi_km2": round(float(hucre_km2[mN & (uN <= BUTCE)].sum())),
            "surtunmeli_sahip_toplam_km2": round(float(hucre_km2[mN].sum())),
            "surtunmeli_en_uzak_hucre_saat": round(float(uN[mN].max()) / NS["NEHIR_KM_SAAT"], 1) if mN.any() else None,
        }
        print("  örnek", y["ad"], ornek[y["ad"]])
SON["h0106_ornek"] = ornek

SON["meta"]["kutu"] = list(NS["BOLGE"].bounds)
SON["meta"]["pencere_disi_tohum"] = len(NS["_kvpencere_disi"])
cikti = os.path.join(KOK, "denetim", "ARAC-MOTOR-NEHIR-0916.json")
_hepsi = {}
if os.path.exists(cikti):
    _hepsi = json.load(io.open(cikti, encoding="utf-8"))
_hepsi[ARG.ad] = SON
with io.open(cikti, "w", encoding="utf-8") as f:
    json.dump(_hepsi, f, ensure_ascii=False, indent=1)
print(f"YAZILDI {cikti} · toplam {time.time() - T0:,.0f} sn")
