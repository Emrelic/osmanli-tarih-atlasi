# -*- coding: utf-8 -*-
"""TR-1923-SINIR — 29 Ekim 1923 Türkiye kara sınırları için SINIR ÇİFTİ seçici.

Emre (14 Eylül 2026): "sınırın iki yanındaki Türk ve komşu ülke yerleşimlerini
koordinatına göre diz ve sınırı bu iki yerleşimin arasından geçir."

HEDEF ÇİZGİ (kaynaklar denetim/SINIR-HUKUKI-ANADOLU-0907.json + bu turun okuması):
  GRC  Lozan md. 2/2 (Meriç mecrası + Karaağaç/Bosnaköy dirseği)  → NE bugünkü çizgi
  BGR  Lozan md. 2/1 ("Bulgaristan'ın elyevm tahdit edilmiş cenup hududu") → NE
  GEO/ARM/AZE  Moskova 16.3.1921 + Kars 13.10.1921 (TDV `agri`: "BUGÜNKÜ") → NE
  IRQ  Lozan md. 3/2 ERTELEDİ ⇒ FİİLÎ STATÜKO (Emre kararı). IBS No.27 (ABD
       Dışişleri, 1964) s.4: statüko = Musul vilayetinin kuzey sınırı; s.4-7:
       Brüksel hattı (29.10.1924) "almost exactly" o sınır; 1926 çizgisi Brüksel
       hattı + Aluman/Aşuta güneyinde küçük düzeltme ⇒ NE bugünkü çizgi ≈ 1923.
  SYR  Ankara İtilafnamesi md. 8 (20.10.1921) — M. Budak, Atatürk Araştırma
       Merkezi Dergisi XIII/38 (1997) s.405-406: Payas'ın hemen güneyinde körfezde
       bir noktadan "yaklaşık olarak" Meydan-ı Ekbez'e (istasyon Suriye'de) ⇒
       BATI KESİM DÜZ HAT; Meydan-ı Ekbez doğusu NE bugünkü çizgi (Hatay HARİÇ).

YÖNTEM: çizgi 2 km'de örneklenir; her örnekte sapma = |d_TR − d_komşu| / 2
(Voronoi bisektörünün çizgiden kayması). Aday = GeoNames P sınıfı yerleşim,
çizgiye 1-12 km, 1923'teki doğru yakada, mevcut noktalara ≥3 km (§11 D002).
Açgözlü: toplam sapmayı en çok düşüren aday eklenir; p90 ≤ HEDEF olunca durur.

Kullanım: py denetim/ARAC-TR1923-SINIR-0914.py [--yaz <json>]
"""
import sys, io, os, json, math, contextlib, argparse
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
sys.path.insert(0, "arac")
import girdi
import numpy as np
from shapely.geometry import shape, Point, LineString, Polygon
from shapely.ops import unary_union, linemerge
from shapely.prepared import prep

GEONAMES = r"C:\Users\emrem\GEONAMES\allCountries.txt"
GUN = "1923-10-28"
ORNEK_KM = 2.0
ADAY_MIN_KM, ADAY_MAX_KM = 1.0, 12.0
MUKERRER_KM = 3.0
HEDEF_P90 = 5.0
AZAMI_EK = 60
KOMSU = {"GRC": "yunanistan", "BGR": "bulgaristan-kralligi", "GEO": "sovyet-rusya",
         "ARM": "sovyet-rusya", "AZE": "sovyet-rusya", "IRQ": "irak-kralligi",
         "SYR": "suriye-lubnan-mandasi"}
ULKE = {"TR": "TUR", "GR": "GRC", "BG": "BGR", "GE": "GEO", "AM": "ARM", "AZ": "AZE",
        "IQ": "IRQ", "SY": "SYR"}
KOD_RED = {"PPLQ", "PPLW", "PPLX", "PPLH", "PPLCH", "STLMT"}
# 1923-10-29'da HENÜZ YOKTU — GeoNames id → gerekçe. Sınır çizgisinin ÜRÜNÜ olan
# şehirler (ör. Nusaybin istasyonunun karşısında kurulan Kamışlı) çizgiyi 1923'e
# geri taşımak için kullanılamaz: bu anakronizmdir.
HARIC = {"173377": ("Kamışlı (Al Qāmishlī) — çağdaş literatürde yaygın beyan: 1926'da Nusaybin "
                    "istasyonunun karşısında Fransız karakolu çevresinde kuruldu. 🔴 TDV `kamisli` "
                    "ÖLÜ (302), `nusaybin` gövdesinde Kamışlı 0 kez; Britannica 403 ⇒ akademik "
                    "kaynak bu turda OKUNAMADI. Eklememek bir iddia değil İHTİYAT: 1923 varlığı şüpheli.")}
# Nahçıvan teması (AZE, 8 km): bu kesimin 1923'te var olup olmadığı 1932 Türk-İran
# takasına (Ağrı ⇄ Kotur) bağlı ve ÖLÇÜLMEDİ ⇒ seçim yapılmaz, rapora yazılır.
ATLA = {"AZE"}


def km(a, b, c, d):
    r = math.pi / 180
    return 6371 * math.hypot((d - b) * r * math.cos((a + c) / 2 * r), (c - a) * r)


def sahip(y, g):
    for k in ("d", "v"):
        for p in y.get(k) or []:
            if p["f"] <= g < p["t"]:
                return "OSMANLI" if k == "d" else "tabi"
    for p in y.get("s") or []:
        if p["f"] <= g < p["t"]:
            return p.get("d")
    return None


def geonames_oku():
    sat = []
    with open(GEONAMES, encoding="utf-8") as f:
        for l in f:
            c = l.split("\t")
            if c[8] not in ULKE or c[6] != "P" or c[7] in KOD_RED or c[0] in HARIC:
                continue
            la, lo = float(c[4]), float(c[5])
            if not (34.0 <= la <= 43.0 and 25.5 <= lo <= 45.5):
                continue
            sat.append({"id": c[0], "ad": c[1], "alt": c[3], "lat": la, "lon": lo,
                        "kod": c[7], "ulke": c[8], "nufus": int(c[14] or 0)})
    return sat


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--yaz")
    a = ap.parse_args()
    with contextlib.redirect_stdout(io.StringIO()), contextlib.redirect_stderr(io.StringIO()):
        Y = girdi.yukle(sessiz=True)
    C = json.load(open("veri-kaynak/ne_10m_admin_0_countries.geojson", encoding="utf8"))
    G = {f["properties"]["ADM0_A3"]: shape(f["geometry"]).buffer(0) for f in C["features"]
         if f["properties"]["ADM0_A3"] in set(ULKE.values()) | {"IRN"}}
    GN = geonames_oku()
    print(f"GeoNames P adayı (kutu): {len(GN)}")

    def gn_bul(ulke, *adlar):
        for y in GN:
            if y["ulke"] != ulke:
                continue
            ad = [y["ad"].lower()] + [x.lower() for x in y["alt"].split(",")]
            if any(n.lower() in ad for n in adlar):
                return y
        return None

    payas = gn_bul("TR", "payas")
    mek = gn_bul("SY", "meydan ekbez", "maydan ikbis", "maydān ikbis", "meydan-ı ekbez", "midan ekbez", "mīdān ikbis")
    print("Payas:", payas and (payas["lat"], payas["lon"]), "· Meydan-ı Ekbez:", mek and (mek["ad"], mek["lat"], mek["lon"], mek["kod"]))
    if not payas or not mek:
        print("🔴 çıpa bulunamadı — DURUYORUM"); return 1

    tr = G["TUR"]
    # Payas'ın hemen güneyindeki kıyı noktası: Payas enleminin 2 km güneyinde
    # TUR poligonunun batı kıyısı.
    kiyi_lat = payas["lat"] - 2.0 / 111.0
    kes = tr.intersection(LineString([(35.8, kiyi_lat), (payas["lon"] + 0.2, kiyi_lat)]))
    kiyi_lon = min(x for g in getattr(kes, "geoms", [kes]) for x, _ in g.coords)
    bati = LineString([(kiyi_lon, kiyi_lat), (mek["lon"], mek["lat"])])
    hatay = tr.intersection(Polygon([(35.5, kiyi_lat), (kiyi_lon, kiyi_lat), (mek["lon"], mek["lat"]),
                                     (mek["lon"] + 0.03, 35.5), (35.5, 35.5)]))
    tr1923 = tr.difference(hatay)
    sy1923 = G["SYR"].union(hatay)

    hat = {}
    for k in ("GRC", "BGR", "GEO", "ARM", "AZE", "IRQ"):
        _h = tr.boundary.intersection(G[k].buffer(0.02))
        hat[k] = linemerge(_h) if _h.geom_type == "MultiLineString" else _h
    syr_modern = tr.boundary.intersection(G["SYR"].buffer(0.02))
    parca = [g for g in getattr(syr_modern, "geoms", [syr_modern])]
    dogu = []
    for g in parca:
        cs = [c for c in g.coords if c[0] >= mek["lon"] - 0.01 or c[1] >= mek["lat"] + 0.05]
        if len(cs) >= 2:
            dogu.append(LineString(cs))
    hat["SYR"] = unary_union([bati] + dogu)

    # bu aletin önceki turda yazdığı kayıtlar TABAN sayılmaz — seçim her turda sıfırdan
    Y = [y for y in Y if not str(y.get("neden", "")).startswith("TR-1923-SINIR")]
    pts = [(y["lat"], y["lon"], sahip(y, GUN), y["ad"]) for y in Y if 33 <= y["lat"] <= 44 and 24 <= y["lon"] <= 48]
    rapor = {"_cipa": {"payas": [payas["lat"], payas["lon"]], "kiyi": [kiyi_lat, kiyi_lon],
                       "meydan_ekbez": [mek["lat"], mek["lon"], mek["ad"], mek["id"]]},
             "hat": {k: [list(map(list, g.coords)) for g in getattr(v, "geoms", [v])] for k, v in hat.items()},
             "secim": {}}
    secilen_tum = []
    for k, line in hat.items():
        if k in ATLA:
            print(f"\n{k} → ATLANDI (1932 Ağrı⇄Kotur takasına bağlı, 1923 varlığı ÖLÇÜLMEDİ)")
            rapor["secim"][k] = {"atlandi": True, "secilen": []}
            continue
        n = max(2, int(line.length * 111 / ORNEK_KM))
        S = np.array([(q.y, q.x) for q in (line.interpolate(i / n, normalized=True) for i in range(n + 1))])
        tr_p = [(la, lo, ad) for la, lo, o, ad in pts if o == "tbmm-turkiye"]
        yb_p = [(la, lo, ad) for la, lo, o, ad in pts if o not in ("tbmm-turkiye", None)]

        def dmin(P):
            P = np.array([(p[0], p[1]) for p in P])
            r = math.pi / 180
            dx = (S[:, None, 1] - P[None, :, 1]) * r * np.cos(S[:, None, 0] * r)
            dy = (S[:, None, 0] - P[None, :, 0]) * r
            return 6371 * np.sqrt(dx * dx + dy * dy)
        dTR = dmin(tr_p).min(1)
        dYB = dmin(yb_p).min(1)

        def ozet(dt, dy):
            s = np.abs(dt - dy) / 2
            return float(np.median(s)), float(np.percentile(s, 90)), float(s.max()), float((s <= 5).mean() * 100)
        once = ozet(dTR, dYB)
        # adaylar
        tum_p = [(p[0], p[1]) for p in pts] + [(s["lat"], s["lon"]) for s in secilen_tum]
        aday = []
        tampon = prep(line.buffer(ADAY_MAX_KM / 80.0))   # hızlı ön eleme (derece; enlemde bol tutuldu)
        for y in GN:
            p = Point(y["lon"], y["lat"])
            if not tampon.contains(p):
                continue
            dl = line.distance(p) * 111 * math.cos(math.radians(y["lat"])) ** 0.5
            if not (ADAY_MIN_KM <= dl <= ADAY_MAX_KM):
                continue
            if tr1923.contains(p):
                yaka = "TR"
            elif (sy1923 if k == "SYR" else G[k]).contains(p):
                yaka = "YB"
            else:
                continue
            if yaka == "TR" and y["ulke"] != "TR":
                continue
            if yaka == "YB" and not (y["ulke"] == {"TUR": "TR"}.get(k, "") or ULKE.get(y["ulke"]) == k or (k == "SYR" and y["ulke"] == "TR")):
                continue
            if min(km(y["lat"], y["lon"], a2, b2) for a2, b2 in tum_p) < MUKERRER_KM:
                continue
            aday.append(dict(y, yaka=yaka, hat_km=round(dl, 1)))
        D = dmin([(c["lat"], c["lon"]) for c in aday]) if aday else np.zeros((len(S), 0))
        secilen = []
        dt, dy = dTR.copy(), dYB.copy()
        kalan = list(range(len(aday)))
        while len(secilen) < AZAMI_EK and kalan:
            s_simdi = np.abs(dt - dy) / 2
            if np.percentile(s_simdi, 90) <= HEDEF_P90 and np.median(s_simdi) <= 2.5:
                break
            en, en_j = 0.0, None
            for j in kalan:
                c = aday[j]
                if c["yaka"] == "TR":
                    s2 = np.abs(np.minimum(dt, D[:, j]) - dy) / 2
                else:
                    s2 = np.abs(dt - np.minimum(dy, D[:, j])) / 2
                kazanc = s_simdi.sum() - s2.sum()
                if kazanc > en:
                    en, en_j = kazanc, j
            if en_j is None or en < ORNEK_KM:          # bir örnek başına < 1 km kazanç ⇒ dur
                break
            c = aday[en_j]
            if c["yaka"] == "TR":
                dt = np.minimum(dt, D[:, en_j])
            else:
                dy = np.minimum(dy, D[:, en_j])
            c["kazanc_km"] = round(float(en), 1)
            secilen.append(c)
            kalan = [j for j in kalan if j != en_j and km(aday[j]["lat"], aday[j]["lon"], c["lat"], c["lon"]) >= MUKERRER_KM * 2]
        sonra = ozet(dt, dy)
        secilen_tum += secilen
        print(f"\n{k} → {KOMSU[k]} · örnek {len(S)} · aday {len(aday)} · seçilen {len(secilen)} "
              f"(TR {sum(1 for c in secilen if c['yaka']=='TR')} / karşı {sum(1 for c in secilen if c['yaka']=='YB')})")
        print(f"   ÖNCE  ortanca {once[0]:.1f} · p90 {once[1]:.1f} · en kötü {once[2]:.1f} · ≤5km %{once[3]:.0f}")
        print(f"   SONRA ortanca {sonra[0]:.1f} · p90 {sonra[1]:.1f} · en kötü {sonra[2]:.1f} · ≤5km %{sonra[3]:.0f}")
        for c in secilen:
            print(f"     {c['yaka']:2} {c['ad'][:30]:30} {c['ulke']} {c['kod']:6} {c['lat']:.4f} {c['lon']:.4f} hat {c['hat_km']}km  +{c['kazanc_km']}")
        rapor["secim"][k] = {"once": once, "sonra": sonra, "ornek": len(S), "aday": len(aday), "secilen": secilen}
    if a.yaz:
        json.dump(rapor, open(a.yaz, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
        print("\nyazıldı:", a.yaz)
    return 0


if __name__ == "__main__":
    sys.exit(main())
