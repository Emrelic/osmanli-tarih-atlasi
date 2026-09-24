# -*- coding: utf-8 -*-
"""SINIR-D-KOMSU-0077 — YOK kayıtlarını merdivende yukarı çıkarır (yalnız data/d_sinirlar_komsu.js).

Kural (SINIR-DUNYA-0077 §1): D(=şema E) varsa E · yoksa C · o da yoksa YOK (A/B'ye kalır).
Burada yalnız KAYNAĞI OKUNMUŞ ve bugünkü çizginin 1923 (ya da kaydın penceresindeki) hattan
farkı SAYIYLA sınırlanabilmiş kayıtlara hat yazılır; farkı ölçülemeyenler YOK kalır.

  Şattülarap (IBS 164): 1913 İstanbul Protokolü + 1914 komisyon zabıtları hattı ayrıntılı
    tarif etti ve işaretledi (hukukî, koordinatlı) ⇒ E. Bugünkü çizgi TALVEG, 1913 hattı sol
    (İran) kıyısının düşük su çizgisi — fark nehrin yarı genişliği, NE 1:10m hatasının içinde.
  Aras/Talış + Hazar–Serahs (IBS 25): envanter zaten C diyor (K6/K7); eksik olan yalnız hattı.
    Bugünkü çizgi 1954/57/70 düzeltmelerini taşır (Aras'ta sağ kıyı→talveg, Mugan, Dyman ~6 mil,
    Atrek deltası, Harirud 2 mil) ⇒ kaba ⇒ C; kesinlik bu düzeltmelerin büyüklüğüyle yazılır.

Koşu:  py denetim/SINIR-D-KOMSU-0077-yok.py          (kuru: yalnız sayar)
       py denetim/SINIR-D-KOMSU-0077-yok.py --yaz    (dosyayı günceller)
"""
import io, json, math, sys
from shapely.geometry import shape, LineString, Point
from shapely.ops import linemerge, substring

sys.stdout.reconfigure(encoding="utf-8")
DOSYA = "data/d_sinirlar_komsu.js"
SADE = 0.002          # ARAC-D2-URET-0916 ile aynı
IBS = "https://library.law.fsu.edu/Digital-Collections/LimitsinSeas/pdf/ibs%03d.pdf"
NE = ("Natural Earth 10m admin-0 (bugünkü sınır, veri-kaynak/d_bugunku_sinirlar.geojson) — "
      "1923 hattından farkı kaydın kesinlik_not'unda sayıyla")


def km(a, b):
    r = math.pi / 180
    return 6371 * math.hypot((b[0] - a[0]) * r * math.cos((a[1] + b[1]) / 2 * r), (b[1] - a[1]) * r)


def uzunluk(ls):
    c = list(ls.coords)
    return sum(km(c[i], c[i + 1]) for i in range(len(c) - 1))


GJ = json.load(io.open("veri-kaynak/d_bugunku_sinirlar.geojson", encoding="utf-8"))
CIFT = {}
for ft in GJ["features"]:
    CIFT.setdefault(ft["properties"]["cift"], []).append(shape(ft["geometry"]))
ADM = json.load(io.open("veri-kaynak/ne_10m_admin_0_countries.geojson", encoding="utf8"))
IRN = [shape(f["geometry"]).buffer(0) for f in ADM["features"] if f["properties"]["ADM0_A3"] == "IRN"][0]


def parcalar(*ciftler):
    out = []
    for c in ciftler:
        for g in CIFT[c]:
            out += list(getattr(g, "geoms", [g]))
    m = linemerge(out)
    return list(getattr(m, "geoms", [m]))


def sol_iran_mi(ls):
    m = ls.interpolate(0.5, normalized=True)
    p0 = ls.interpolate(max(0, ls.project(m) - 0.005))
    p1 = ls.interpolate(min(ls.length, ls.project(m) + 0.005))
    dx, dy = p1.x - p0.x, p1.y - p0.y
    n = math.hypot(dx, dy) or 1
    return IRN.contains(Point(m.x - dy / n * 0.03, m.y + dx / n * 0.03))


def dizi(g):
    g = g.simplify(SADE, preserve_topology=False)
    return [[round(x, 4), round(y, 4)] for x, y in g.coords]


# ---- hatlar ----
aras = parcalar("AZE-IRN", "ARM-IRN")
hazar = parcalar("IRN-TKM")
iq = parcalar("IRN-IRQ")
assert len(iq) == 1, len(iq)
iql = iq[0]
ucq = "bas" if iql.coords[0][1] < iql.coords[-1][1] else "son"       # Şattülarap GÜNEY uçta
oran = min(1.0, (105 * uzunluk(iql) / 1458) / uzunluk(iql))           # ARAC-D2-URET-0916 ile AYNI kesim
satt = substring(iql, 1 - oran, 1, normalized=True) if ucq == "son" else substring(iql, 0, oran, normalized=True)
print("aras parça:", len(aras), [round(uzunluk(x), 1) for x in aras])
print("hazar parça:", len(hazar), [round(uzunluk(x), 1) for x in hazar])
print("şatt:", round(uzunluk(satt), 1), "km")

KES_ARAS = ("C = kaba: bugünkü çizgi (NE) 1954 Tahran + 1957 işaret + 1970 baraj protokolünü taşır — Aras'ta sınır sağ "
            "kıyıdan TALVEGE alındı (fark ≤ nehrin genişliği), Mugan bozkırında 30 millik kesim 1957'de kaydırıldı, "
            "Dyman'da ~6 mil (≈10 km) yeni hat, baraj kesiminde 41 mil geodezik doğrular (IBS 25 s.4-6). "
            "En büyük belgelenmiş sapma ≈10 km ⇒ kesinlik 10 km; boya bu hatta OTURTULMAZ")
KES_ARAS_1828 = KES_ARAS + " · 1893'e kadar Abbasabad karşısındaki Rus köprübaşı (Aras'ın sağ kıyısı) bu çizgide YOK"
KES_HAZAR = ("C = kaba: bugünkü çizgi 1954 düzeltmelerini taşır — Atrek deltasında uzlaşma hattı (kıyıdan 18+13 mil "
             "yeni kesim; eski hat Atrek'in eski yatağıydı), Harirud'da 2 mil uzatma; Firuze 1893'ten beri Rus/Sovyet "
             "tarafında (1921 iadesi uygulanmadı) — IBS 25 s.4, 7-8. Delta kesiminde sapma ≈20 km ⇒ kesinlik 20 km")
KES_SATT = ("NE 1:10m ölçek (~1-2 km) · bugünkü çizgi TALVEG; 1913/14 hattı sol (İran) kıyısının düşük su çizgisi, "
            "Muhammara (Hürremşehr) önünde talveg (IBS 164 s.3-4) — fark nehrin yarı genişliği (<1 km), ölçek "
            "hatasının içinde · 105 km IBS oranıyla güney uçtan kesildi (d1923-iq-ir ile aynı kesim)")
SATT_DAYANAK_EK = {"ad": "IBS No. 164 Iran–Iraq", "tur": "resmî sınır çalışması", "url": IBS % 164,
                   "alinti": "followed the low-water mark on the left (Iranian) bank"}
IBS25 = {"ad": "IBS No. 25 Iran–U.S.S.R.", "tur": "resmî sınır çalışması", "url": IBS % 25,
         "alinti": "little change in the Russo-Iranian boundary west of the Caspian"}

# id → (hat parçası, sınıf, kesinlik km, kesinlik notu, sınıf notu, eklenecek dayanak)
PLAN = {}
for id_ in ("d1923-sscb-ir-DEGISTI-aras-talis", "g1-sscb-ir-DEGISTI-aras-talis", "g2-rus-ir-DEGISTI-aras-talis",
            "g3-rus-ir-DEGISTI-aras-talis-1893"):
    PLAN[id_] = ("aras", "C", 10.0, KES_ARAS, "C: Türkmençay md. IV metni hattı nehir/dağ adıyla tarif eder; 1923'te "
                 "yerinde işaret yok (envanter K6). Bugünkü çizgi ile fark ≤10 km", IBS25)
PLAN["g4-rus-ir-DEGISTI-aras-talis"] = ("aras", "C", 10.0, KES_ARAS_1828, "C: Türkmençay md. IV (envanter K6)", IBS25)
for id_ in ("d1923-sscb-ir-DEGISTI-hazar-serahs", "g1-sscb-ir-DEGISTI-hazar-serahs", "g2-rus-ir-DEGISTI-hazar-serahs",
            "g3-rus-ir-DEGISTI-hazar-serahs-1893"):
    PLAN[id_] = ("hazar", "C", 20.0, KES_HAZAR, "C: 1881 Ahal–Horasan + 1893 Tahran sözleşmeleri hattı nokta nokta "
                 "tarif eder; bugünkü çizgi 1954 düzeltmelerini taşır (envanter K7)", IBS25)
for id_ in ("d1923-iq-ir-DEGISTI-sattularap", "g1-osm-ir-DEGISTI-sattularap"):
    PLAN[id_] = ("satt", "E", 1.5, KES_SATT, "YOK→E (SINIR-D-KOMSU-0077): 1913 İstanbul Protokolü hattı ayrıntılı "
                 "tarif etti, 1914 komisyonu işaretledi ve paftaladı (IBS 164) ⇒ hukukî ve koordinatlı; F değil E: "
                 "tanınma tablosu yok", SATT_DAYANAK_EK)
# Bilerek YOK bırakılanlar (sebep teslimde): g4-rus-ir-DEGISTI-hazar-serahs (1881–1893 hat yalnız Babadurmaz'a
# kadar; kesim noktasının koordinatı okunmadı) · g4-rus-ir-DEGISTI-atrek · g5 Gülistan · g6 Safevî ·
# Gevgeli ×2 · Dobruca ×3 · d1923-ir-af-FIILI-orta · ORTADOGU'nun devir istediği altı Levant/Irak kaydı.

GEO = {"aras": aras, "hazar": hazar, "satt": [satt]}

satirlar = io.open(DOSYA, encoding="utf-8").read().split("\n")
yaz = "--yaz" in sys.argv
degisen = 0
for i, s in enumerate(satirlar):
    if not s.startswith('{"id":"'):
        continue
    kid = s[7:s.index('"', 7)]
    if kid not in PLAN:
        continue
    virgul = s.endswith(",")
    k = json.loads(s[:-1] if virgul else s)
    assert k["sinif"] == "YOK", kid
    geo, sinif, kes, kes_not, s_not, ek = PLAN[kid]
    ls = GEO[geo]
    assert len(ls) == 1, (kid, len(ls))       # tek parça değilse kayıt bölünmeli — burada DUR
    ls = ls[0]
    kacar_solda = sol_iran_mi(ls)
    diger = [t for t in k["taraflar"] if t != "kacar"][0]
    yeni = {}
    for a, v in k.items():
        if a == "kategori":
            v = "D" if sinif == "E" else "C"
        elif a == "sinif":
            v = sinif
        elif a == "sinif_not":
            v = s_not
        elif a == "hat":
            yeni["sol_taraf"] = "kacar" if kacar_solda else diger
            v = dizi(ls)
            yeni[a] = v
            yeni["uzunluk_km"] = round(uzunluk(ls), 1)
            yeni["geometri_kaynagi"] = NE
            continue
        elif a == "kutu":
            continue                          # kutu YOK'un çizilemeyen alanıydı; hat varken anlamsız
        elif a == "dayanak":
            v = v + ([ek] if not any(d.get("url") == ek.get("url") and d.get("alinti") == ek.get("alinti") for d in v) else [])
            yeni["kesinlik_km"] = kes
            yeni["kesinlik_not"] = kes_not
        elif a == "not":
            v = v.replace(" · 1923 hattının koordinatı ELDE YOK ⇒ bu kutuda D ÇİZİLMEZ, A/B (ya da C) geçerli. "
                          "Bugünkü çizgi 1923'ü GÖSTERMEZ ya da gösterdiği ölçülmedi.", "")
            v = v.replace("1923 hattının koordinatı ELDE YOK ⇒ bu kutuda D ÇİZİLMEZ, A/B (ya da C) geçerli. "
                          "Bugünkü çizgi 1923'ü GÖSTERMEZ ya da gösterdiği ölçülmedi.", "").strip(" ·")
            v = (v + " · " if v else "") + "YOK→" + sinif + " (SINIR-D-KOMSU-0077, 24 Eyl 2026): hat bugünkü çizgiden, farkı kesinlik_not'ta"
        yeni[a] = v
    satirlar[i] = json.dumps(yeni, ensure_ascii=False, separators=(",", ":")) + ("," if virgul else "")
    degisen += 1
    print("%-42s YOK→%s  %6.1f km  sol=%s  nokta=%d" % (kid, sinif, yeni["uzunluk_km"], yeni["sol_taraf"], len(yeni["hat"])))

print("değişen kayıt:", degisen, "/ plan", len(PLAN))
assert degisen == len(PLAN)
if yaz:
    io.open(DOSYA, "w", encoding="utf-8", newline="\n").write("\n".join(satirlar))
    print("yazıldı:", DOSYA)
