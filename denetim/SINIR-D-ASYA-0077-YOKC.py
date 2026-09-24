# -*- coding: utf-8 -*-
"""SINIR-D-ASYA-0077 — Çin–Rusya: YOK → C (koordinatör hükmü, tahta 24 Eyl 2026, İKİ ŞARTLA).

Şart 1: kaynakta "sonradan değişti" diye geçen her kesim YOK'ta KALIR.
Şart 2: kayıt kabalığını beyan eder (geometri = bugünkü çizginin KABA VEKİLİ, sapma ölçülmedi,
        degisti:null korunur).

Kaynak ayakları:
  1923 ↔ 1978 : IBS 64 (1978) — hattı 1727/1858/1860/1864/1881–1893 belgelerine bağlar.
  1978 → 2004 : Fravel 2005 (International Security 30/2) Tablo 1 —
      batı kesimi (Altay, 55 km): 1994 "affirmed the line of actual control" ⇒ DEĞİŞMEDİ
      doğu kesimi: 1991 "China received 52% of the river islands; other areas were divided evenly"
                   2004 "Control of Abagaitu and Hexiazi islands was divided evenly"
      Kazakistan (2.420 km² ihtilaf, %22 Çin'e) · Kırgızistan (3.656 km², %32) ⇒ DEĞİŞTİ, yeri
      makalede YOK ⇒ ikisi de YOK'ta kalır (bu betik onlara dokunmaz).
Doğu kesiminde C'ye alınan yalnız Argun–Amur ve Ussuri NEHİR kesimleridir (1991'de nehirde
değişen yalnız ADALARIN aidiyeti; hat nehir içinde kalır). YOK'ta kalan:
  - Moğolistan üçlü noktası → Argun kara kesimi (1911 Tsitsihar + 1991 "other areas")
  - Argun'un ilk 30 km'si (Abagaitu, 2004; Mançuli karşısı) — pay ölçülmedi, cömert
  - Heixiazi / Bolşoy Ussuriyski (2004): bugünkü hattın ada üstündeki kara geçişi ±30 km
  - Sungaça, Hanka gölü ve Tumen'e kadar kara (1991 "other areas" — yeri belirtilmemiş)
Nehir/göl etiketi NE 10m rivers/lakes'ten (en yakın özellik ≤ 3 km) — betik aynı ölçümü basar.

Kullanım: py denetim/SINIR-D-ASYA-0077-YOKC.py [--yaz]   (yazmadan önce kuru koşu)
"""
import sys, io, os, json, math
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
from shapely.geometry import shape, Point, LineString
from shapely.strtree import STRtree

YAZ = "--yaz" in sys.argv
DOSYA = "data/d_sinirlar_asya.js"
SADE = 0.002
ESIK_NEHIR_KM = 3.0
ABAGAITU_PAY_KM = 30.0
HEIXIAZI_PAY_KM = 30.0
IBS64 = "https://library.law.fsu.edu/Digital-Collections/LimitsinSeas/pdf/ibs064.pdf"
FRAVEL = "https://www.taylorfravel.com/documents/research/fravel.2005.IS.regime.insecurity.pdf"


def km(a, b):
    r = math.pi / 180
    return 6371 * math.hypot((b[0] - a[0]) * r * math.cos((a[1] + b[1]) / 2 * r), (b[1] - a[1]) * r)


def uzunluk(c):
    return sum(km(c[i], c[i + 1]) for i in range(len(c) - 1))


GJ = json.load(open("veri-kaynak/d_bugunku_sinirlar.geojson", encoding="utf-8"))
RUS = [shape(f["geometry"]) for f in GJ["features"] if f["properties"]["cift"] == "CHN-RUS"]
DOGU = max(RUS, key=lambda s: s.length)
BATI = min(RUS, key=lambda s: s.length)

# ---- nehir etiketi ----
R = json.load(open("veri-kaynak/ne_10m_rivers.geojson", encoding="utf-8"))
L = json.load(open("veri-kaynak/ne_10m_lakes.geojson", encoding="utf-8"))
G, AD = [], []
for f in R["features"]:
    G.append(shape(f["geometry"])); AD.append(f["properties"].get("name_en") or f["properties"].get("name") or "?")
for f in L["features"]:
    s = shape(f["geometry"])
    if s.bounds[0] > 110 and s.bounds[2] < 140 and s.bounds[1] > 40:
        G.append(s.boundary); AD.append("göl:" + (f["properties"].get("name_en") or f["properties"].get("name") or "?"))
TREE = STRtree(G)


def etiket(x, y):
    p = Point(x, y)
    j = TREE.nearest(p)
    q = G[j].interpolate(G[j].project(p))
    return AD[j] if km((x, y), (q.x, q.y)) <= ESIK_NEHIR_KM else "KARA"


c = list(DOGU.coords)
et = [etiket(x, y) for x, y in c]
NEHIR = {"Ergun", "Amur", "Wusuli"}   # NE adları: Argun = "Ergun", Ussuri = "Wusuli"
# Heixiazi: Amur ile Ussuri arasındaki kara geçişi (bugünkü hat adayı keser)
amur_son = max(i for i, e in enumerate(et) if e == "Amur")
ussuri_ilk = min(i for i, e in enumerate(et) if e == "Wusuli")
gecis = c[amur_son + 1: ussuri_ilk] or [c[amur_son]]
argun_ilk = min(i for i, e in enumerate(et) if e == "Ergun")
print(f"Heixiazi kara geçişi: nokta {amur_son + 1}–{ussuri_ilk - 1}, {tuple(round(v, 3) for v in gecis[0])} → {tuple(round(v, 3) for v in gecis[-1])}")
print(f"Argun başı: nokta {argun_ilk} {tuple(round(v, 3) for v in c[argun_ilk])}")


def disari(i):
    x, y = c[i]
    if et[i] not in NEHIR:
        return True
    if et[i] == "Ergun" and km(c[argun_ilk], (x, y)) <= ABAGAITU_PAY_KM:
        return True
    if min(km(g, (x, y)) for g in gecis) <= HEIXIAZI_PAY_KM:
        return True
    return False


parcalar, cur = [], []
for i in range(len(c)):
    if disari(i):
        if len(cur) >= 2:
            parcalar.append(cur)
        cur = []
    else:
        cur.append(i)
if len(cur) >= 2:
    parcalar.append(cur)
ADLAR = []
for p in parcalar:
    adlar = sorted({et[i] for i in p})
    ADLAR.append(adlar)
    print(f"C parçası: nokta {p[0]}–{p[-1]} · {uzunluk([c[i] for i in p]):.1f} km · {adlar} · {tuple(round(v,3) for v in c[p[0]])} → {tuple(round(v,3) for v in c[p[-1]])}")
print(f"doğu toplam {uzunluk(c):.1f} km · C'ye alınan {sum(uzunluk([c[i] for i in p]) for p in parcalar):.1f} km")

# ---- sol taraf (üretecinin yöntemi: orta noktadan 0,03° sola, NE admin-0'a sor) ----
ADM = json.load(open("veri-kaynak/ne_10m_admin_0_countries.geojson", encoding="utf-8"))
POLY = {f["properties"]["ADM0_A3"]: shape(f["geometry"]).buffer(0) for f in ADM["features"]
        if f["properties"]["ADM0_A3"] in ("RUS", "CHN")}


def sol_ulke(ls):
    m = ls.interpolate(0.5, normalized=True)
    p0 = ls.interpolate(max(0, ls.project(m) - 0.005))
    p1 = ls.interpolate(min(ls.length, ls.project(m) + 0.005))
    dx, dy = p1.x - p0.x, p1.y - p0.y
    n = math.hypot(dx, dy) or 1
    sol = Point(m.x - dy / n * 0.03, m.y + dx / n * 0.03)
    for k, pl in POLY.items():
        if pl.contains(sol):
            return k
    return None


def dizi(ls):
    g = ls.simplify(SADE, preserve_topology=False)
    return [[round(x, 4), round(y, 4)] for x, y in g.coords]


RUS_IDS = {"sovyet-rusya", "rusya", "rusya-gecici-hukumet"}


def sol_taraf(ls, taraflar):
    u = sol_ulke(ls)
    if u is None:
        raise SystemExit("sol taraf ölçülemedi")
    for t in taraflar:
        if (t in RUS_IDS) == (u == "RUS"):
            return t
    raise SystemExit("taraf eşleşmedi")


KESIN_NOT = ("geometri BUGÜNKÜ çizgi (Natural Earth 10m), 1923 hattının KABA VEKİLİDİR; sapma ÖLÇÜLMEDİ. "
             "Antlaşmalar hattı nehrin ADIYLA verir, nehir içindeki yeri tanımsızdır (IBS 64); bugünkü hat 1991 "
             "sonrası talveg hattıdır. Adası değişen yerler (Abagaitu, Heixiazi) bu kaydın DIŞINDA bırakıldı.")
GEO = "Natural Earth 10m admin-0 bugünkü sınır (D-GEOARAC, çift CHN-RUS) — VEKÂLET: C kaba hat, 1923 koordinatı DEĞİL"
DEGISTI = {"deger": None, "kaynak": "IBS 64 (1978) + Fravel 2005 Tablo 1",
           "not": "1923↔1978 KAPALI (IBS 64 hattı 1727–1911 belgelerine bağlar). 1978→bugün: 1991 doğu kesimi "
                  "antlaşmasında nehir ADALARI bölüşüldü (%52 Çin), 'öteki alanlar' eşit bölündü (yeri belirtilmemiş); "
                  "2004'te Abagaitu ve Heixiazi bölündü. Hattın nehirden çıktığı değişim BİLDİRİLMEDİ ama "
                  "ÖLÇÜLMEDİ ⇒ null."}
DAY_DOGU = [
    {"ad": "Aigun Antlaşması", "tarih": "1858-05-28", "tur": "antlaşma", "madde": "Amur sol kıyısı Rusya, sağ kıyısı Çin; nehir içi hat tanımsız"},
    {"ad": "Pekin Ek Antlaşması", "madde": "md. I", "tarih": "1860-11-14", "tur": "antlaşma", "not": "Ussuri ve Sungaça hattı"},
    {"ad": "IBS No. 64 China–U.S.S.R. (Revised)", "tarih": "1978-02-13", "tur": "resmî sınır çalışması", "url": IBS64, "sayfa": "10",
     "alinti": "The boundary then follows first the Argun and then the Amur."},
    {"ad": "M. Taylor Fravel, 'Regime Insecurity and International Cooperation', International Security 30/2 (2005)",
     "tarih": "2005", "tur": "akademik", "url": FRAVEL, "sayfa": "Tablo 1",
     "alinti": "China received 52% of the river islands; other areas were divided evenly."}]
DAY_BATI = [
    {"ad": "St. Petersburg (İli) Antlaşması", "tarih": "1881-02-24", "tur": "antlaşma"},
    {"ad": "IBS No. 64 China–U.S.S.R. (Revised)", "tarih": "1978-02-13", "tur": "resmî sınır çalışması", "url": IBS64, "sayfa": "10",
     "alinti": "The remaining segments stem from the 1881 Treaty of St. Petersburg."},
    {"ad": "M. Taylor Fravel, 'Regime Insecurity and International Cooperation', International Security 30/2 (2005)",
     "tarih": "2005", "tur": "akademik", "url": FRAVEL, "sayfa": "Tablo 1",
     "alinti": "Agreement affirmed the line of actual control."}]
DEGISTI_BATI = {"deger": None, "kaynak": "IBS 64 (1978) + Fravel 2005 Tablo 1",
                "not": "1923↔1978 KAPALI (IBS 64: 1881 antlaşması + protokoller). 1994 batı kesimi antlaşması "
                       "'fiilî kontrol hattını teyit etti' (Fravel) ⇒ 1978→1994 değişim bildirilmedi. Bugünkü NE çizgisinin "
                       "o hatla örtüşmesi ÖLÇÜLMEDİ ⇒ null korunur (Şart 2)."}

# ---- dosyayı satır satır işle ----
satirlar = open(DOSYA, encoding="utf-8").read().split("\n")
DOGU_IDS = ["d1923-sscb-cn-BILINMIYOR-dogu", "g2-sscb-cn-BILINMIYOR-dogu-gecici",
            "g2-sscb-cn-BILINMIYOR-dogu-rusya", "g3-sscb-cn-BILINMIYOR-dogu-rusya-qing"]
BATI_IDS = ["d1923-sscb-cn-BILINMIYOR-batialtay", "g2-sscb-cn-BILINMIYOR-batialtay-gecici",
            "g2-sscb-cn-BILINMIYOR-batialtay-rusya", "g3-sscb-cn-BILINMIYOR-batialtay-rusya-qing"]
DAMGA = "SINIR-D-ASYA-0077 (24 Eyl 2026, koordinatör hükmü)"
yeni, bulunan, eklenen = [], set(), []


def dok(o):
    return json.dumps(o, ensure_ascii=False, separators=(",", ":"))


for s in satirlar:
    t = s.strip()
    if not t.startswith('{"id":"'):
        yeni.append(s); continue
    virgul = t.endswith(",")
    k = json.loads(t.rstrip(","))
    if k["id"] in BATI_IDS:
        bulunan.add(k["id"])
        if k["sinif"] != "YOK":
            raise SystemExit(f"{k['id']}: beklenen YOK, bulunan {k['sinif']}")
        ls = LineString(BATI.coords)
        h = dizi(ls)
        k2 = {}
        for a, v in k.items():
            if a == "kutu":
                continue
            k2[a] = v
            if a == "sinif":
                k2["sinif_not"] = f"{DAMGA}: YOK → C. Belge 1881 İli antlaşması + protokoller; geometri bugünkü çizginin KABA VEKİLİ."
                k2["sol_taraf"] = sol_taraf(ls, k["taraflar"])
                k2["hat"] = h
                k2["uzunluk_km"] = round(uzunluk(h), 1)
                k2["geometri_kaynagi"] = GEO
        # YOK kaydında "hat":null ve "uzunluk_km" anahtarları sinif'ten SONRA gelir ve döngüde
        # yeni değeri ezer (ilk koşuda ölçüldü: hat null kaldı) ⇒ döngüden sonra yeniden yazılır.
        k2["hat"] = h
        k2["uzunluk_km"] = round(uzunluk(h), 1)
        k2["geometri_kaynagi"] = GEO
        k2["kategori"] = "C"; k2["sinif"] = "C"
        k2["degisti"] = DEGISTI_BATI
        k2["kesinlik_km"] = None
        k2["kesinlik_not"] = "ölçülemedi — " + KESIN_NOT.split(" Antlaşmalar")[0]
        k2["dayanak"] = k["dayanak"] + [d for d in DAY_BATI if d["ad"] not in {x.get("ad") for x in k["dayanak"]}]
        k2["not"] = (k.get("not", "") + " · " if k.get("not") else "") + f"{DAMGA}: Şart 1 sağlandı — kaynak bu kesimde sonradan değişim bildirmiyor (Fravel: 1994 fiilî hat teyidi)."
        yeni.append(dok(k2) + ("," if virgul else ""))
        continue
    if k["id"] in DOGU_IDS:
        bulunan.add(k["id"])
        if k["sinif"] != "YOK":
            raise SystemExit(f"{k['id']}: beklenen YOK, bulunan {k['sinif']}")
        c_idler = []
        yeni_kayitlar = []
        for n, p in enumerate(parcalar):
            ls = LineString([c[i] for i in p])
            h = dizi(ls)
            ad = "argun-amur" if "Wusuli" not in ADLAR[n] else "ussuri"
            kid = k["id"].replace("BILINMIYOR-dogu", "dogu-" + ad)
            c_idler.append(kid)
            yeni_kayitlar.append({
                "id": kid, "taraflar": k["taraflar"], "f": k["f"], "t": k["t"], "kategori": "C", "sinif": "C",
                "sinif_not": f"{DAMGA}: {k['id']} kutusunun NEHİR kesimi YOK → C. Belge nehri ADIYLA verir (kaba).",
                "sol_taraf": sol_taraf(ls, k["taraflar"]), "hat": h, "uzunluk_km": round(uzunluk(h), 1),
                "geometri_kaynagi": GEO, "degisti": DEGISTI, "tahdit": None,
                "kesinlik_km": None, "kesinlik_not": "ölçülemedi — " + KESIN_NOT,
                "dayanak": k["dayanak"] + [d for d in DAY_DOGU[2:] if d["ad"] not in {x.get("ad") for x in k["dayanak"]}],
                "not": f"{DAMGA}. Nehir etiketi NE 10m rivers (≤{ESIK_NEHIR_KM:g} km): {', '.join(ADLAR[n])}. "
                       f"Dışarıda (YOK kutusunda) kalan: Moğolistan–Argun kara kesimi, Argun'un ilk {ABAGAITU_PAY_KM:g} km'si "
                       f"(Abagaitu), Heixiazi ±{HEIXIAZI_PAY_KM:g} km, Sungaça–Hanka–Tumen."})
        k["not"] = (k.get("not", "") + " · " if k.get("not") else "") + (
            f"{DAMGA}: bu kutunun NEHİR kesimleri C olarak ayrı kayıtlarda: {', '.join(c_idler)}. "
            "YOK'ta kalan: Moğolistan–Argun kara kesimi (1911 Tsitsihar + 1991 'öteki alanlar'), Abagaitu ve Heixiazi "
            "(2004 bölüşümü), Sungaça–Hanka–Tumen (1991 'öteki alanlar', yeri belirtilmemiş) — Şart 1.")
        yeni.append(dok(k) + ",")
        for j, yk in enumerate(yeni_kayitlar):
            son = (j == len(yeni_kayitlar) - 1)
            yeni.append(dok(yk) + ("," if (virgul or not son) else ""))
            eklenen.append(yk["id"])
        continue
    yeni.append(s)

eksik = set(DOGU_IDS + BATI_IDS) - bulunan
if eksik:
    raise SystemExit(f"bulunamayan kayıt: {eksik}")
print(f"değişen: {len(BATI_IDS)} batı Altay kaydı YOK→C yerinde · {len(DOGU_IDS)} doğu YOK kaydına not · {len(eklenen)} yeni C kaydı")
for e in eklenen:
    print("  +", e)
if YAZ:
    open(DOSYA, "w", encoding="utf-8", newline="\n").write("\n".join(yeni))
    print("YAZILDI:", DOSYA)
else:
    print("kuru koşu — yazmak için --yaz")
