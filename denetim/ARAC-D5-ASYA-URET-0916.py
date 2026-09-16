# -*- coding: utf-8 -*-
"""D5-ASYA — 29 Ekim 1923 Asya sınırlarının D kayıtlarını ÜRETİR.

Çıktı : data/d_sinirlar_asya.js (window.D_SINIRLAR_ASYA)
Şema  : denetim/SEMA-D-0916.md (D1-TURKIYE)   · Envanter: denetim/D5-ASYA-0916.md
Okur  : veri-kaynak/d_bugunku_sinirlar.geojson (D-GEOARAC) · ne_10m_admin_0_countries (sol_taraf testi) ·
        ne_10m_rivers (Mekong ayrımı) · ne_10m_land (Sahalin 50°K kesişimi)
Desen : denetim/ARAC-D2-URET-0916.py (D2-KOMSU) — aynı yardımcılar, aynı D-YOK geleneği.

KURAL (şema md.1 + şartname md.3): bugünkü geometri bir VEKİLDİR ve yalnız kaynak "değişmedi"
diyorsa kullanılır. "değişmedi" IBS'nin KENDİ TARİHİNE kadar ölçülüdür (1962–1984) — not alanında yazar.
Değişen ya da bilinmeyen (degisti:null) parçalar D-YOK kutusu olur; 1923 koordinatı uydurulmaz.
1923'te fiilî (hukukî hat yok) parçalar da D-YOK kutusudur (D2 geleneği) — not alanı FİİLİ der.
İÇ parçalar (Fransız Çinhindi içi, Burma–Hindistan) YAZILMAZ.
Künyesi olmayan taraflar (Bhutan · Sikkim · Kuzey Borneo) YAZILMAZ — D-KUNYE'ye bildirildi.
Taraf id'leri atlasın 1923'te kullandığı id'lerdir (ölçüm: denetim/ARAC-D5-ASYA-KIMLIK-0916.js) — bu
bir DAYANAK değil, yalnız ad eşleştirmesidir (CLAUDE.md §4).
Kıyas (koşu çıktısıyla sapma) YAPILMADI.
"""
import sys, io, os, json, math
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
from shapely.geometry import shape, Point, LineString, box
from shapely.ops import linemerge, unary_union

SADE = 0.002
T = "1923-10-29"
IBS = "https://library.law.fsu.edu/Digital-Collections/LimitsinSeas/pdf/ibs%03d.pdf"
NE = "Natural Earth 10m admin-0 (bugünkü sınır, D-GEOARAC çıktısı) — kullanılabilirliği 'değişmedi' dayanağına bağlı"
KES_NE = "NE 1:10m ölçek; konum hatası ÖLÇÜLMEDİ (ölçek gereği ~1-2 km beklenir)"
YOK_NOT = ("1923 hattının koordinatı ELDE YOK ⇒ bu kutuda D ÇİZİLMEZ, A/B (ya da C) geçerli. "
           "Bugünkü çizgi 1923'ü GÖSTERMEZ ya da gösterdiği ölçülmedi.")
IBS_TARIH = "'değişmedi' IBS'nin kendi tarihine kadar ölçülü; sonrası ÖLÇÜLMEDİ"


def km(a, b):
    r = math.pi / 180
    return 6371 * math.hypot((b[0] - a[0]) * r * math.cos((a[1] + b[1]) / 2 * r), (b[1] - a[1]) * r)


def uzunluk(ls):
    c = list(ls.coords)
    return sum(km(c[i], c[i + 1]) for i in range(len(c) - 1))


GJ = json.load(open("veri-kaynak/d_bugunku_sinirlar.geojson", encoding="utf-8"))
CIFT = {}
for ft in GJ["features"]:
    CIFT.setdefault(ft["properties"]["cift"], []).append(shape(ft["geometry"]))


def cizgi(*ciftler):
    out = []
    for c in ciftler:
        if c not in CIFT:
            raise SystemExit(f"çift yok: {c}")
        for g in CIFT[c]:
            m = linemerge(g) if g.geom_type == "MultiLineString" else g
            out += list(getattr(m, "geoms", [m]))
    return out


ISO = {"ingiliz-hindistani": ["MMR", "IND", "PAK", "BGD"], "cin-cumhuriyeti": ["CHN"], "fransiz-cinhindi": ["LAO", "KHM", "VNM"],
       "siyam-chakri": ["THA"], "ingiliz-malaya": ["MYS"], "hollanda-dogu-hint": ["IDN"], "sarawak-brooke": ["MYS"],
       "portekiz": ["TLS"], "meiji-japonya": ["PRK"], "sovyet-rusya": ["RUS"], "afganistan": ["AFG"]}
ADM = json.load(open("veri-kaynak/ne_10m_admin_0_countries.geojson", encoding="utf8"))
GEREK = {k for v in ISO.values() for k in v}
POLY = {f["properties"]["ADM0_A3"]: shape(f["geometry"]).buffer(0) for f in ADM["features"]
        if f["properties"]["ADM0_A3"] in GEREK}


def sol_taraf(ls, a, b):
    m = ls.interpolate(0.5, normalized=True)
    p0 = ls.interpolate(max(0, ls.project(m) - 0.005))
    p1 = ls.interpolate(min(ls.length, ls.project(m) + 0.005))
    dx, dy = p1.x - p0.x, p1.y - p0.y
    n = math.hypot(dx, dy) or 1
    sol = Point(m.x - dy / n * 0.03, m.y + dx / n * 0.03)
    return a if any(POLY[k].contains(sol) for k in ISO.get(a, []) if k in POLY) else b


def dizi(g):
    g = g.simplify(SADE, preserve_topology=False)
    return [[round(x, 4), round(y, 4)] for x, y in g.coords]


def parcala(parcalar, kosul):
    out = []
    for g in parcalar:
        cur = []
        for c in g.coords:
            if kosul(c):
                cur.append(c)
            else:
                if len(cur) >= 2:
                    out.append(LineString(cur))
                cur = []
        if len(cur) >= 2:
            out.append(LineString(cur))
    return out


def bbox(parcalar, pay=0.05):
    xs = [x for g in parcalar for x, _ in g.coords]
    ys = [y for g in parcalar for _, y in g.coords]
    return (min(xs) - pay, min(ys) - pay, max(xs) + pay, max(ys) + pay)


KAYIT = []


def ekle(id_, a, b, f, kategori, parcalar, dayanak, degisti, tahdit, kesinlik, kesinlik_not, not_="", geo=NE, sol=None):
    parcalar = [p for p in parcalar if uzunluk(p) >= 1.0]
    if not parcalar:
        raise SystemExit(f"{id_}: parça kalmadı")
    for i, ls in enumerate(parcalar):
        KAYIT.append({
            "id": id_ + (f"-{i+1}" if len(parcalar) > 1 else ""),
            "taraflar": [a, b], "f": f, "t": T, "kategori": kategori,
            "sol_taraf": sol or sol_taraf(ls, a, b), "hat": dizi(ls),
            "uzunluk_km": round(uzunluk(ls), 1), "geometri_kaynagi": geo,
            "degisti": degisti, "tahdit": tahdit,
            "kesinlik_km": kesinlik, "kesinlik_not": kesinlik_not,
            "dayanak": dayanak, "not": not_,
        })


def yok(id_, a, b, f, kutu, degisti, dayanak, not_=""):
    KAYIT.append({"id": id_, "taraflar": [a, b], "f": f, "t": T, "kategori": "D-YOK", "hat": None,
                  "kutu": [round(v, 3) for v in kutu], "degisti": degisti, "dayanak": dayanak,
                  "not": (not_ + " · " if not_ else "") + YOK_NOT})


def ibs(n, ad, alinti=None):
    d = {"ad": f"IBS No. {n} {ad}", "tur": "resmî sınır çalışması", "url": IBS % n}
    if alinti:
        d["alinti"] = alinti
    return d


SV, CN, MN, TU, JP = "sovyet-rusya", "cin-cumhuriyeti", "mogolistan", "tannu-tuva", "meiji-japonya"
IH, TB, NP, CK, SAN = "ingiliz-hindistani", "tibet-ganden-phodrang", "nepal", "cammu-kesmir", "san-devletleri"
FC, SI, MA, HD, SW = "fransiz-cinhindi", "siyam-chakri", "ingiliz-malaya", "hollanda-dogu-hint", "sarawak-brooke"
PT, EN, AF = "portekiz", "ingiltere", "afganistan"

# ================= KUZEY: SSCB · MOĞOLİSTAN · ÇİN · KORE · SAHALİN =================
# Sahalin 50°K — antlaşma tarifinden kurulan hat (bugün sınır YOK, ada tamamı Rusya'da)
L = json.load(open("veri-kaynak/ne_10m_land.geojson", encoding="utf-8"))
p50 = LineString([(141.0, 50.0), (145.0, 50.0)])
sah = []
for f_ in L["features"]:
    g = shape(f_["geometry"])
    if g.intersects(p50):
        i = g.intersection(p50)
        sah += [s for s in getattr(i, "geoms", [i]) if s.geom_type == "LineString"]
if len(sah) != 1:
    raise SystemExit(f"Sahalin kesişimi tek parça değil: {len(sah)}")
sah_ls = LineString([(round(x, 4), 50.0) for x, _ in sah[0].coords] if len(sah[0].coords) > 2 else
                    [(sah[0].coords[0][0], 50.0), (sah[0].coords[-1][0], 50.0)])
# ara noktalar: düz paralel, 0,25° aralıkla (render için)
x0, x1 = sah_ls.coords[0][0], sah_ls.coords[-1][0]
nx = max(2, int((x1 - x0) / 0.25) + 1)
sah_ls = LineString([(x0 + (x1 - x0) * k / (nx - 1), 50.0) for k in range(nx)])
ekle("d1923-jp-sscb-sahalin", JP, SV, "1905-10-15", "D", [sah_ls],
     [{"ad": "Portsmouth Antlaşması", "madde": "md. IX (+ Ek md. II karma komisyon)", "tarih": "1905-09-05", "tur": "antlaşma metni",
       "kaynak": "worldjpn.net/documents/texts/pw/19050905.T1E.html (Tokyo Üniv.)",
       "alinti": "The fiftieth degree of north latitude is adopted as the northern boundary"},
      {"ad": "Nakagiri, NAOJ Arşiv Odası Bülteni no. 288 (Ōshima 1908 konferansı)", "tarih": "2010", "tur": "akademik",
       "url": "https://prc.nao.ac.jp/museum/arc_news/arc_news288.pdf", "not": "4 astronomik + 17 ara taş; 10 m orman açıklığı"},
      {"ad": "Pekin Temel Sözleşmesi (Japonya–SSCB)", "madde": "md. II; Protokol A md. III", "tarih": "1925-01-20",
       "tur": "antlaşma metni", "kaynak": "LNTS vol. 34 s. 31 vd.", "alinti": "completely withdrawn from the said region by May 15, 1925"}],
     {"deger": True, "kaynak": "NE admin-0 ölçümü", "not": "bugün 50°K'de ülke sınırı YOK (ada tamamı Rusya); 1945 değişimi BİLGİ düzeyinde, kaynağı okunmadı"},
     {"t": "1906-07/1907-08", "not": "iki arazi mevsimi (1906 Tem–Eyl, 1907 May–Ağu); kapanış protokolü günü bulunamadı"},
     1.0, "hat antlaşmanın paraleli (tam 50°00'K); uçlar NE 10m kıyı kesişimi — taşların gerçek konumu ÖLÇÜLMEDİ",
     "⚠️ FİİLÎ DURUM: kuzey Sahalin 1923'te JAPON İŞGALİNDE (Temmuz 1920 → 15 May 1925; başlangıç günü yalnız ay düzeyinde, FRUS 1921 II d698). "
     "Hukukî hat 50°K'dir; renderer işgali ayrıca göstermeli. f: Portsmouth yürürlük günü BULUNAMADI — 1905-10-15 IBS 17 (OCR) okumasıdır, doğrulanmadı. "
     "Taraf SSCB: kuzey yarı 1922'de Uzakdoğu Cumhuriyeti'nden devralındı.",
     geo="antlaşma tarifi (50°K paraleli) × Natural Earth 10m kara kıyısı", sol=SV)

# SSCB–Çin (bütün kesimler): IBS 64 1978'e kadar; sonrası (1991/1994/2004 ve Orta Asya devir anlaşmaları) ÖLÇÜLMEDİ
yok("d1923-sscb-cn-BILINMIYOR-dogu", SV, CN, "1922-11-15", bbox([max(cizgi("CHN-RUS"), key=uzunluk)], 0.10),
    {"deger": None, "kaynak": "IBS 64 (1978)", "not": "1978'de Argun/Amur/Ussuri nehir içi hat ve adalar tanımsız, Mançuli ve Amur–Ussuri kavşağı tartışmalı; sonraki anlaşmalar okunmadı"},
    [{"ad": "Aigun Antlaşması", "tarih": "1858-05-28", "tur": "antlaşma", "madde": "yok (nehir içi hat tanımsız)"},
     {"ad": "Pekin Ek Antlaşması", "madde": "md. I, III", "tarih": "1860-11-14", "tur": "antlaşma"},
     {"ad": "Bur Antlaşması + Abagatuy protokolü", "tarih": "1727-10-12", "tur": "protokol"},
     ibs(64, "China–U.S.S.R.", "Argun, Amur, and Ussuri has never been precisely delimited.")],
    "Envanter §2.1: Sungaça–Tumen kara kesimi 1923'te D (1861 20 direk); nehirler C; Mançuli · 64 köy · kavşak adaları FİİLİ. "
    "f: Uzakdoğu Cumhuriyeti'nin RSFSC'ye katılışı (15 Kas 1922 — BİLGİ, doğrulanmadı)")
yok("d1923-sscb-cn-BILINMIYOR-batialtay", SV, CN, "1917-11-07", bbox([min(cizgi("CHN-RUS"), key=uzunluk)], 0.10),
    {"deger": None, "kaynak": "IBS 64 (1978)"},
    [{"ad": "St. Petersburg (İli) Antlaşması", "tarih": "1881-02-24", "tur": "antlaşma"}, ibs(64, "China–U.S.S.R.")],
    "Altay'daki kısa kesim (Moğolistan üçlü noktası civarı)")
yok("d1923-sscb-cn-BILINMIYOR-kazak", SV, CN, "1917-11-07", bbox(cizgi("CHN-KAZ"), 0.10),
    {"deger": None, "kaynak": "IBS 64 (1978)", "not": "1978'e kadar değişiklik bildirilmemiş; bağımsızlık sonrası Kazakistan–Çin anlaşmaları OKUNMADI"},
    [{"ad": "Tarbagatay (Çuguçak) Protokolü", "tarih": "1864-10-07", "tur": "protokol"},
     {"ad": "St. Petersburg (İli) Antlaşması", "tarih": "1881-02-24", "tur": "antlaşma"},
     ibs(64, "China–U.S.S.R.", "This part has been demarcated and about 12 markers are shown")],
    "Envanter §2.1: 1923'te D (Tekes–İli ~12 işaret; Jungar Alatau–Tarbagatay 1883/1893) · Horgos C")
yok("d1923-sscb-cn-BILINMIYOR-kirgiz", SV, CN, "1917-11-07", bbox(cizgi("CHN-KGZ"), 0.10),
    {"deger": None, "kaynak": "IBS 64 (1978)", "not": "Kırgızistan–Çin sonraki anlaşmaları OKUNMADI"},
    [{"ad": "Tarbagatay (Çuguçak) Protokolü", "tarih": "1864-10-07", "tur": "protokol"},
     {"ad": "Kaşgar protokolü", "tarih": "1882-11-25", "tur": "protokol"},
     {"ad": "Novi-Margelan protokolü", "tarih": "1884-05-22", "tur": "protokol"},
     ibs(64, "China–U.S.S.R.", "The 1864 delimitation of Tarbagatay is applicable from the Kizil Jik Dawan")],
    "Envanter §2.1: 1923'te D; protokol haritaları IBS'te yok")
yok("d1923-sscb-cn-FIILI-pamir", SV, CN, "1917-11-07", bbox(cizgi("CHN-TJK"), 0.10),
    {"deger": None, "kaynak": "IBS 64 (1978)", "not": "1978'de hâlâ tartışmalı; Tacikistan–Çin sonraki anlaşmaları OKUNMADI"},
    [{"ad": "İngiliz–Rus Pamir anlaşması", "tarih": "1895-03-11", "tur": "nota teatisi", "not": "Çin'e danışılmadan"},
     ibs(64, "China–U.S.S.R.", "no treaty delimits the boundary in the Pamirs south of the pass")],
    "Envanter §2.1 · sınıf FİİLİ: Kizil Jik Dawan güneyinde antlaşma yok")

yok("d1923-sscb-mn-BILINMIYOR", SV, MN, "1921-07-11", bbox(cizgi("MNG-RUS"), 0.10),
    {"deger": None, "kaynak": "IBS 64 (1978)", "not": "Tuva 1944'te SSCB'ye katıldı; 1958 SSCB–Moğolistan antlaşması DOĞRULANMADI"},
    [{"ad": "Bur Antlaşması", "tarih": "1727-08-20", "tur": "antlaşma"},
     {"ad": "Abagatuy protokolü", "tarih": "1727-10-12", "tur": "protokol", "not": "Kiahta doğusu 63 işaret"},
     {"ad": "Bur protokolü", "tarih": "1727-10-27", "tur": "protokol", "not": "Kiahta batısı 24 nokta"},
     ibs(64, "China–U.S.S.R.", "defined the limits of the two states from the Argun westward")],
    "Envanter §2.1/§3.5: 1923'te hukuken Rus–Çin hattı (Dış Moğolistan Çin metbuluğunda), fiilen Sovyet–Moğol. "
    "Kiahta doğusu D, batısı/Sayan C. ⚠️ Kutunun batı kesimi 1923'te TUVA–MOĞOLİSTAN hattıdır (fiilî, belge bulunamadı) — "
    "taraflar orada tannu-tuva/mogolistan; kesim yeri ÖLÇÜLMEDİ. f: Moğol–Sovyet gücünün Urga'ya girişi (11 Tem 1921 — BİLGİ, doğrulanmadı; kaynak yalnız 'Temmuz 1921')")
yok("d1923-cn-mn-FIILI", CN, MN, "1915-06-07", bbox(cizgi("CHN-MNG"), 0.10),
    {"deger": True, "kaynak": "IBS 173", "not": "Dariganga 1924'te Moğolistan'a; 1932 işgali; 26 Ara 1962 antlaşması + 30 Haz 1964 protokolü (639 direk)"},
    [{"ad": "Kiahta Üçlü Anlaşması", "madde": "md. XI", "tarih": "1915-06-07", "tur": "anlaşma", "not": "yalnız sancak sınırlarına atıf"},
     ibs(173, "China–Mongolia", "But no commission was ever created, and no boundary delimitation or demarcation documents")],
    "Envanter §2.2 · sınıf FİİLİ: 1923'te hukuken Çin içi özerklik sınırı, fiilen iki yönetim arası")

yok("d1923-jp-cn-BILINMIYOR-yalu-tumen", JP, CN, "1910-08-29", bbox(cizgi("CHN-PRK"), 0.10),
    {"deger": None, "kaynak": "IBS 17 (1962)", "not": "1962'de Paektu kesiminde ~600 mil² tartışma; sonraki ÇHC–KDHC antlaşması OKUNMADI"},
    [{"ad": "Çin–Japon Tumen (Gando) Anlaşması", "madde": "md. I", "tarih": "1909-09-04", "tur": "anlaşma"},
     ibs(17, "China–Korea", "For the 20 miles between the headwaters, the boundary is considered to be in dispute.")],
    "Envanter §2.4: Yalu C · Tumen C · Paektu FİİLİ. f: Kore ilhakı ilanı (29 Ağu 1910 — IBS 17 OCR'ında yalnız '29, 1910' okunuyor)")
yok("d1923-jp-sscb-BILINMIYOR-tumen", JP, SV, "1922-11-15", bbox(cizgi("PRK-RUS"), 0.05),
    {"deger": None, "kaynak": "IBS 59 (1965)", "not": "1965'e kadar değişmedi; 1985/1990 SSCB–KDHC anlaşmaları OKUNMADI"},
    [{"ad": "Pekin Ek Antlaşması", "tarih": "1860-11-14", "tur": "antlaşma"},
     {"ad": "Seul Tumen Ticaret Nizamnamesi", "tarih": "1888-08-20", "tur": "nizamname", "not": "hattı yalnız anar"},
     ibs(59, "Korea–U.S.S.R.", "notified Japan that the status of their common boundary was not clear")],
    "Envanter §2.3 · sınıf C (tanımlayan antlaşma yok)")

# ================= GÜNEY ASYA · TİBET =================
hk = cizgi("CHN-IND")
yok("d1923-ih-tb-FIILI-mcmahon", IH, TB, "1914-07-03", bbox([max(hk, key=lambda g: g.centroid.x)], 0.10),
    {"deger": None, "kaynak": "Aitchison 1929 c. XIV", "not": "hat 1923'te yayımlanmış/işleyen bir sınır değildi; bugünkü çizgi (Arunaçal) tartışmalı"},
    [{"ad": "Simla Sözleşmesi", "madde": "md. 9 (harita kırmızı/mavi hat)", "tarih": "1914-07-03", "tur": "sözleşme (Çin imzalamadı)",
      "kaynak": "tibetjustice.org/materials/treaties/treaties16.html (van Walt van Praag derlemesi; FO 535/17 no. 231)"},
     {"ad": "Aitchison, Treaties, Engagements and Sanads, c. XIV (1929)", "tur": "resmî derleme",
      "url": "https://archive.org/details/in.ernet.dli.2015.122313", "alinti": "drawn up and initialled in 1914"}],
    "Envanter §3.6 · sınıf FİİLİ. ⚠️ Nota günleri çelişkili (IBS 42: 01.02/25.03.1914 · ikincil: 24–25.03.1914) — çözülmedi")
hk_orta = sorted(hk, key=lambda g: g.centroid.x)[1]            # 88–89°D: bugünkü Sikkim–Tibet (ölçüldü)
hk_bati = min(hk, key=lambda g: g.centroid.x)
LADAKH = lambda c: c[1] >= 32.5                                  # Keşmir/Ladakh ↔ Himaçal/Kumaon ayrımı — TAHMİNİ
yok("d1923-ih-tb-BILINMIYOR-sikkim", IH, TB, "1890-08-27", bbox([hk_orta], 0.05),
    {"deger": None, "kaynak": "bulunamadı", "not": "1923 sonrası okunmadı"},
    [{"ad": "Kalküta Sözleşmesi (İngiltere–Çin)", "madde": "md. I (su ayrımı, Gipmochi'den)", "tarih": "1890-03-17", "tur": "sözleşme",
      "not": "onay Londra 27 Ağu 1890", "kaynak": "tibetjustice.org/materials/treaties/treaties9.html (BFSP 82 s. 9–11)",
      "alinti": "the crest of the mountain range separating the waters flowing into the Sikkim Teesta"},
     {"ad": "Lhasa Sözleşmesi", "madde": "md. I", "tarih": "1904-01-01", "tur": "sözleşme", "not": "yalnız YIL okundu; Tibet hattı tanıdı; direk dikme yükümlülüğü — dikildiği BULUNAMADI"}],
    "Envanter §3.6 · 1923'te sınıf C. Taraf SİKKİM (İngiliz himayesi, 1890 md. II) — künyesi YOK, `ingiliz-hindistani` vekil (D-KUNYE'ye soruldu). "
    "f: 1890 sözleşmesinin onay günü")
yok("d1923-ih-tb-FIILI-batihimalaya", IH, TB, "1917-01-01", bbox(parcala([hk_bati], lambda c: not LADAKH(c)), 0.10),
    {"deger": None, "kaynak": "bulunamadı"},
    [{"ad": "antlaşma bulunamadı", "tur": "yok"}],
    "Envanter §3.6 · Spiti/Kinnaur/Kumaon–Tibet · sınıf FİİLİ. 32,5°K güneyi — ayrım TAHMİNİ. f: künye penceresi içinde, hukukî başlangıç YOK")
yok("d1923-ck-cn-FIILI-aksaicin", CK, CN, "1917-01-01", bbox(parcala([hk_bati], LADAKH) + cizgi("CHN-KAS"), 0.10),
    {"deger": None, "kaynak": "IBS 85"},
    [{"ad": "Ladakh–Tibet mektubu", "tarih": "1842-09-17", "tur": "mektup", "alinti": "ancient boundaries"},
     {"ad": "Macdonald hattı notası (İngiltere→Çin)", "tarih": "1899-03-14", "tur": "nota (Çin kabul etmedi)"},
     ibs(85, "China–Pakistan", "the first formal, international treaty to delimit the boundary")],
    "Envanter §2.5/§3.6 · sınıf FİİLİ. Taraf Cammu-Keşmir (atlas 1923'te Leh'i bu kimliğe yazıyor); Aksai Çin'in doğusu Tibet'e değer. "
    "f: yalnız künye penceresi içinde bir başlangıç — hukukî başlangıç YOK")
yok("d1923-ck-cn-FIILI-karakurum", CK, CN, "1917-01-01", bbox(cizgi("CHN-PAK"), 0.10),
    {"deger": True, "kaynak": "IBS 85", "not": "2 Mar 1963 Pekin anlaşması md. II–III; 26 Mar 1965 protokolü (40 direk)"},
    [{"ad": "Macdonald hattı notası", "tarih": "1899-03-14", "tur": "nota (Çin kabul etmedi)"},
     ibs(85, "China–Pakistan", "situated a considerable distance to the east of the Macdonald line")],
    "Envanter §2.5 · sınıf FİİLİ. Hunza/Gilgit tarafı; f künye penceresi içinde, hukukî başlangıç YOK")
yok("d1923-np-tb-FIILI", NP, TB, "1856-03-24", bbox(cizgi("CHN-NPL"), 0.10),
    {"deger": True, "kaynak": "IBS 50", "not": "21 Mar 1960 anl. · 5 Eki 1961 ant. · 23 Oca 1963 protokol"},
    [{"ad": "Nepal–Tibet barışı", "tarih": "1856-03-24", "tur": "antlaşma", "not": "çizgi vermez"},
     ibs(50, "China–Nepal", "limits were most often vague or contradictory")],
    "Envanter §2.6 · sınıf FİİLİ (tamamı)")
yok("d1923-ih-np-BILINMIYOR", IH, NP, "1875-01-07", bbox(cizgi("IND-NPL"), 0.10),
    {"deger": None, "kaynak": "Aitchison 1929 c. XIV", "not": "21 Ara 1923 antlaşması (onay 8 Nis 1925) sınırı teyit etti; 1925 sonrası OKUNMADI"},
    [{"ad": "Sugauli Antlaşması", "madde": "md. III", "tarih": "1815-12-02", "tur": "antlaşma", "not": "onaylı nüsha 4 Mar 1816'da teslim"},
     {"ad": "Katmandu Antlaşması", "madde": "md. 3", "tarih": "1860-11-01", "tur": "antlaşma", "alinti": "marked by pillars"},
     {"ad": "Dhundwa tepeleri anlaşması", "tarih": "1875-01-07", "tur": "anlaşma"},
     {"ad": "Aitchison, Treaties, Engagements and Sanads, c. II (1909)", "tur": "resmî derleme",
      "url": "https://archive.org/details/india.history.resource.84886"}],
    "Envanter §3.7 · 1923'te sınıf D (1860 kâgir direkler) — ama 1925 sonrası değişim ölçülmediği için bugünkü çizgi vekil OLAMAZ")

# ================= GÜNEYDOĞU ASYA =================
mm_cn = cizgi("CHN-MMR")
K1, K2, K3 = 25 + 35 / 60, 23.5, 22 + 10 / 60
GB = "Peking Anlaşması (İngiltere–Çin, 1894 Londra Konv.'u değiştirir)"
ekle("d1923-ih-cn-guney1", IH, CN, "1897-06-05", "D", parcala(mm_cn, lambda c: K2 <= c[1] <= K1),
     [{"ad": GB, "madde": "md. I–III", "tarih": "1897-02-04", "tur": "antlaşma", "not": "onay 5 Haz 1897"},
      ibs(42, "Burma–China", "essentially created the southern border as it existed for the next 63 years")],
     {"deger": False, "kaynak": "IBS 42 (1964)", "not": "1 Eki 1960 ant. md. VI 'değişiklik gerekmez'; ⚠️ NAMWAN kira toprağı 1960 md. II ile Burma'ya geçti — yeri ÖLÇÜLMEDİ, bu kayıt onu AYIRMIYOR. " + IBS_TARIH},
     {"t": "1897-11/1900-05", "not": "karma komisyon işaretlemesi"},
     1.5, KES_NE + " · uçlar IBS'in 25°35'K ve 23°30'K enlemleriyle kesildi (yaklaşık)",
     "Envanter §2.8 Güney-1. ⚠️ Namwan Assigned Tract (85 mil²) 1923'te ÇİN egemenliğinde, İngiliz daimî kirası (1897 md. II) — "
     "bugünkü çizgi o kesimde 1923 egemenlik hattını GÖSTERMEZ. Burma tarafının bir kısmı Şan beylikleridir (atlas `san-devletleri`)")
yok("d1923-ih-cn-FIILI-wa", IH, CN, "1897-06-05", bbox(parcala(mm_cn, lambda c: K3 < c[1] < K2), 0.08),
    {"deger": True, "kaynak": "IBS 42", "not": "18 Haz 1941 Chungking notaları; 1960 md. II (Panhung–Panlao Çin'e) ve md. III"},
    [ibs(42, "Burma–China", "No agreement could be reached on the intervening Wa states' segment")],
    "Envanter §2.8 Güney-2 · sınıf FİİLİ")
ekle("d1923-ih-cn-guney3", IH, CN, "1897-06-05", "D", parcala(mm_cn, lambda c: c[1] <= K3),
     [{"ad": GB, "madde": "md. I–III", "tarih": "1897-02-04", "tur": "antlaşma"},
      ibs(42, "Burma–China", "from the Nam Hka (22°10' N.) to the Mekong")],
     {"deger": False, "kaynak": "IBS 42 (1964)", "not": "1960 md. VI; Nam Lo/Nam Nga'da 'işaretleme zamanındaki yatak'. " + IBS_TARIH},
     {"t": "1897/1900", "not": "karma komisyon"},
     1.5, KES_NE + " · kuzey ucu 22°10'K enlemiyle kesildi",
     "Envanter §2.8 Güney-3. Burma tarafı Şan beylikleri (atlas `san-devletleri`)")
yok("d1923-ih-cn-FIILI-kuzey", IH, CN, "1897-06-05", bbox(parcala(mm_cn, lambda c: c[1] > K1), 0.08),
    {"deger": True, "kaynak": "IBS 42", "not": "1960 md. V ve VII (Hpimaw–Gawlum–Kangfang Çin'e); protokol 13 Eki 1961"},
    [ibs(42, "Burma–China", "no alignment north of the high conical peak could be agreed upon")],
    "Envanter §2.8 Kuzey-1/2/3 · sınıf FİİLİ. En kuzeyi McMahon (İngiltere–Tibet, Çin tanımadı)")

yok("d1923-cn-fc-BILINMIYOR-tonkin", CN, FC, "1896-08-07", bbox(cizgi("CHN-VNM"), 0.08),
    {"deger": None, "kaynak": "IBS 38 (1964)", "not": "1964'e kadar değişmedi; 30 Ara 1999 Çin–Vietnam kara sınırı antlaşması OKUNMADI"},
    [{"ad": "Pekin Sözleşmesi (Fransa–Çin)", "tarih": "1887-06-26", "tur": "sözleşme"},
     {"ad": "Tamamlayıcı Sözleşme", "madde": "md. 1–3", "tarih": "1895-06-20", "tur": "sözleşme", "not": "onay 7 Ağu 1896"},
     ibs(38, "China–Viet-Nam", "The mutual boundary between Tonkin and China was delimited by treaties in 1887 and 1895.")],
    "Envanter §2.10 · 1923'te sınıf D (en az 285 sütun)")
yok("d1923-cn-fc-BILINMIYOR-laos", CN, FC, "1896-08-07", bbox(cizgi("CHN-LAO"), 0.08),
    {"deger": None, "kaynak": "IBS 34 (1964)", "not": "1964'e kadar değişmedi; 1991 Çin–Laos antlaşması OKUNMADI"},
    [{"ad": "Tamamlayıcı Sözleşme", "madde": "md. 3", "tarih": "1895-06-20", "tur": "sözleşme"},
     ibs(34, "China–Laos", "the Laos boundary was delimited by watersheds and the territory of Muong-mang")],
    "Envanter §2.11 · 1923'te sınıf D. ⚠️ üçlü nokta enlemi IBS 34 ile IBS 38 arasında çelişkili (22°24' / 22°34')")
ekle("d1923-ih-fc-mekong", IH, FC, "1896-01-15", "D", cizgi("LAO-MMR"),
     [{"ad": "İngiliz–Fransız Deklarasyonu", "madde": "md. 3", "tarih": "1896-01-15", "tur": "deklarasyon"},
      ibs(33, "Burma–Laos", "le thalweg du Mekong formera la limite des possessions ou spheres d'influence")],
     {"deger": False, "kaynak": "IBS 33 (1964)", "not": "HUKUKÎ hüküm (talveg); nehir yatağı kayabilir. " + IBS_TARIH},
     {"t": None, "not": "sütun yok; IBS 'considered demarcated' (adalar iki tarafın haritalarında aynı)"},
     2.0, KES_NE, "Envanter §2.14. Burma tarafı Kengtung (atlas `san-devletleri`)")

# Siyam–Laos: Mekong kesimleri 1923'te SİYAM KIYISI (1893 md. I) — bugünkü talveg (1926) onu göstermez
R = json.load(open("veri-kaynak/ne_10m_rivers.geojson", encoding="utf-8"))
MEK = unary_union([shape(f_["geometry"]) for f_ in R["features"] if f_["properties"].get("name") == "Mekong"])
MEK_TAMP = MEK.buffer(0.03)                                            # ≈3 km
lt = cizgi("LAO-THA")
# kuzey Mekong (Nam Kok ağzı → ~20°10'K 100°36'D, IBS 20) NE nehir çizgisiyle yakalanmıyor (ölçüldü) ⇒ enlemle
KMEK = lambda c: c[1] > 20 + 10.5 / 60
MEKG = lambda c: KMEK(c) or MEK_TAMP.contains(Point(c))
lt_mek = parcala(lt, MEKG)
lt_kara = parcala(lt, lambda c: not MEKG(c))
lt_mek = [p for p in lt_mek if uzunluk(p) >= 5]
for i, p in enumerate(sorted(lt_mek, key=lambda g: -g.centroid.y)):
    yok(f"d1923-si-fc-DEGISTI-mekong-{i+1}", SI, FC, "1893-10-03", bbox([p], 0.05),
        {"deger": True, "kaynak": "IBS 20", "not": "25 Ağu 1926 Sözleşmesi: Siyam kıyısına en yakın kolun talvegi; bazı adalar Siyam'a"},
        [{"ad": "Fransız–Siyam Barış Antlaşması", "madde": "md. I", "tarih": "1893-10-03", "tur": "antlaşma"},
         ibs(20, "Laos–Thailand", "Siam renounced all rights to the territories on the left bank of the Mekong")],
        "Envanter §2.15: 1923 hattı Mekong'un SİYAM KIYISI, bütün adalar Laos'un. Mekong ayrımı NE 10m nehir çizgisine ≤~3 km yakınlıkla, "
        "kuzey kesim 20°10,5'K enlemiyle yapıldı (yaklaşık)")
ekle("d1923-si-fc-kara", SI, FC, "1907-03-23", "C", lt_kara,
     [{"ad": "Fransız–Siyam Sözleşmesi", "madde": "md. I–II", "tarih": "1904-02-13", "tur": "sözleşme"},
      {"ad": "Fransız–Siyam Anlaşması", "madde": "md. II", "tarih": "1904-06-29", "tur": "anlaşma"},
      {"ad": "Fransız–Siyam Antlaşması + protokol", "tarih": "1907-03-23", "tur": "antlaşma"},
      ibs(20, "Laos–Thailand", "the boundary joined the ridge line to the west of the Nam-Kop system")],
     {"deger": False, "kaynak": "IBS 20 (1962)", "not": "1941 Tokyo değişikliği 17 Kas 1946'da geri alındı. " + IBS_TARIH},
     {"t": "1907", "not": "komisyon haritası 1:200.000, 11 pafta; sütun işaretlemesinden söz edilmiyor"},
     3.0, KES_NE + " · Mekong dışı kesimler (Nam Kop sırtı · Nam Heung · Bassac su ayrımı); ayrım yaklaşık",
     "Envanter §2.15: su ayrımı ve Nam Heung talvegi — C (sütunsuz)")
ekle("d1923-si-fc-kambocya", SI, FC, "1907-03-23", "C", cizgi("KHM-THA"),
     [{"ad": "Fransız–Siyam Antlaşması + protokol", "madde": "md. I–II", "tarih": "1907-03-23", "tur": "antlaşma"},
      {"ad": "Fransız–Siyam Sözleşmesi", "madde": "md. I (Dangrek su ayrımı)", "tarih": "1904-02-13", "tur": "sözleşme"},
      ibs(40, "Cambodia–Thailand", "the watershed of the Dangrek became the boundary")],
     {"deger": False, "kaynak": "IBS 40 (1966)", "not": "1925/1926/1937 teyit; 1941–46 geçici. 1962 UAD Preah Vihear kararı Dangrek'te komisyon haritasını esas aldı (yorum). " + IBS_TARIH},
     {"t": "1907-1909", "not": "ahşap sütunlar; kalıcılar 'I. Dünya Savaşı'ndan sonra' (1923 öncesi olduğu DOĞRULANMADI); ~75 sütun"},
     3.0, KES_NE, "Envanter §2.16 · Pailin–Poipet kesimi D olabilir (sütun 52), güvenli taraf C seçildi")

mt = cizgi("MMR-THA")
MAESAI = lambda c: c[1] >= 20.25 and c[0] >= 99.75      # Mae Sai + Nam Kok (1931/32 + 1940 notaları)
PAKCHAN = lambda c: c[1] <= 10.95                          # Kra-Mathe/Pakchan (1934 notaları)
yok("d1923-si-ih-DEGISTI-maesai", SI, IH, "1894-10-17", bbox(parcala(mt, MAESAI), 0.04),
    {"deger": True, "kaynak": "IBS 63", "not": "27 Ağu 1931 + 14 Mar 1932 notaları (1929 talvegi); 1 Eki + 10 Ara 1940 notaları (Nam Kok'a da talveg)"},
    [{"ad": "İngiliz–Siyam haritaları teatisi", "tarih": "1894-10-17", "tur": "harita"},
     ibs(63, "Burma–Thailand", "The 1891 – 4 boundary in the mid -stream of the Mae Sai was modified")],
    "Envanter §2.17 · kutu 20,25°K kuzeyi ve 99,75°D doğusu — TAHMİNİ. Burma tarafı Kengtung (atlas `san-devletleri`)")
yok("d1923-si-ih-DEGISTI-pakchan", SI, IH, "1868-07-03", bbox(parcala(mt, PAKCHAN), 0.04),
    {"deger": True, "kaynak": "IBS 63", "not": "1 Haz 1934 notaları (talveg; Klong Wan, Wang Tow Burma'ya · Had Lan Kwai, See Sok Siyam'a); 31 Mar/1 Nis 1937 teyit"},
    [{"ad": "İngiliz–Siyam Sözleşmesi", "tarih": "1868-01-01", "tur": "sözleşme", "not": "gün çelişkili: 8 Şubat / 8 Eylül 1868; onay 3 Tem 1868"},
     ibs(63, "Burma–Thailand", "the deep water channel of the River Pakchan, wherever it may be")],
    "Envanter §2.17 · kutu 10,95°K güneyi — TAHMİNİ (Kra-Mathe kavşağının enlemi okunmadı)")
ekle("d1923-si-ih", SI, IH, "1894-10-17", "C", parcala(mt, lambda c: not MAESAI(c) and not PAKCHAN(c)),
     [{"ad": "İngiliz–Siyam haritaları teatisi (1889–94 komisyonu)", "tarih": "1894-10-17", "tur": "harita"},
      {"ad": "İngiliz–Siyam Sözleşmesi", "tarih": "1868-01-01", "tur": "sözleşme", "not": "gün çelişkili (8 Şub / 8 Eyl 1868)"},
      ibs(63, "Burma–Thailand", "exchanged maps in 3 sheets signed and sealed showing the boundary line")],
     {"deger": False, "kaynak": "IBS 63 (1966)", "not": "Mae Sai ve Pakchan ayrı D-YOK; 1941 Tokyo/1946 geri alındı. " + IBS_TARIH},
     {"t": "1892/1893-1894", "not": "kuzey su ayrımları 1893–94 işaretli; 1868 düz çizgileri 1892'de (kapsamı belirsiz)"},
     3.0, KES_NE, "Envanter §2.17: kuzey su ayrımları ve Pa-wan düz çizgileri D, Salween/Moei talvegleri C — ayrılmadı, güvenli taraf C. "
     "f: kuzey kesimin harita teatisi; güney (1868) daha eski. Burma tarafının kuzeyi Şan/Karenni")
ekle("d1923-si-ma", SI, MA, "1909-07-09", "C", cizgi("MYS-THA"),
     [{"ad": "Bangkok Antlaşması (İngiltere–Siyam)", "madde": "Ek 1", "tarih": "1909-03-10", "tur": "antlaşma", "not": "onay 9 Tem 1909"},
      ibs(57, "Malaysia–Thailand", "following this main watershed so as to pass the sources of the Sungei Patani")],
     {"deger": False, "kaynak": "IBS 57 (1965)", "not": "14 Tem 1925 Londra md. 5 yürürlükte tuttu. " + IBS_TARIH},
     {"t": None, "not": "IBS 'demarcated' der, tarih yok — 1923'te işaretli olduğu DOĞRULANMADI"},
     3.0, KES_NE, "Envanter §2.18")

# Borneo: Hollanda – İngiliz Borneosu
ib = [g for g in cizgi("IDN-MYS") if g.centroid.x > 108]
SEB = lambda c: c[0] >= 117.65 and abs(c[1] - (4 + 10 / 60)) < 0.02
PAR = lambda c: 116.1 <= c[0] <= 117.05 and abs(c[1] - (4 + 20 / 60)) < 0.02
API = lambda c: 109.93 <= c[0] <= 110.07
SABAH = lambda c: c[0] >= 115 + 40 / 60
B91 = {"ad": "Londra Sözleşmesi (İngiltere–Hollanda)", "tarih": "1891-06-20", "tur": "sözleşme"}
B15 = {"ad": "Londra Anlaşması (Tawao komisyon raporu 17 Şub 1913)", "tarih": "1915-09-28", "tur": "anlaşma"}
ekle("d1923-hd-en-sebatik", HD, EN, "1915-09-28", "D", parcala(ib, SEB),
     [dict(B91, madde="md. IV"), B15, ibs(45, "Indonesia–Malaysia (Borneo)", "an additional two (on the parallel of 4° 10' N.)")],
     {"deger": False, "kaynak": "IBS 45 (1965)", "not": IBS_TARIH},
     {"t": "1915", "not": "2 sütun"}, 1.0, KES_NE + " · 4°10'K ±0,02° süzgeciyle ayrıldı",
     "Envanter §2.19. Taraf: Kuzey Borneo (İngiliz himayesi, şirket yönetimi) — künyesi YOK, `ingiltere` vekil (D-KUNYE'ye soruldu)")
ekle("d1923-hd-en-4-20", HD, EN, "1915-09-28", "D", parcala(ib, PAR),
     [dict(B91, madde="md. II"), B15, ibs(45, "Indonesia–Malaysia (Borneo)", "Four boundary pillars were erected (all on the parallel of 4° 20' N.)")],
     {"deger": False, "kaynak": "IBS 45 (1965)", "not": IBS_TARIH},
     {"t": "1915", "not": "paralel üzerinde 4 sütun"}, 1.0, KES_NE + " · 4°20'K ±0,02° süzgeciyle ayrıldı",
     "Envanter §2.19. Taraf `ingiltere` vekil (Kuzey Borneo)")
ekle("d1923-hd-en-suayrimi", HD, EN, "1891-06-20", "C",
     parcala(ib, lambda c: SABAH(c) and not SEB(c) and not PAR(c)),
     [dict(B91, madde="md. II–III"), B15, ibs(45, "Indonesia–Malaysia (Borneo)", "knowledge of the precise location of the divide is rather scanty")],
     {"deger": False, "kaynak": "IBS 45 (1965)", "not": "ilke gereği su ayrımı yeniden haritalanırsa çizgi onu izler. " + IBS_TARIH},
     {"t": None, "not": "işaretsiz"}, 5.0, KES_NE + " · su ayrımının yeri 1965'te bile az biliniyordu",
     "Envanter §2.19 · 115°40'D doğusu (Kuzey Borneo kesimi). Taraf `ingiltere` vekil")
ekle("d1923-hd-sw-suayrimi", HD, SW, "1891-06-20", "C", parcala(ib, lambda c: not SABAH(c) and not API(c)),
     [dict(B91, madde="md. III"), ibs(45, "Indonesia–Malaysia (Borneo)", "the boundary followed the main watershed of the principal rivers as far as Tandjong-Datoe")],
     {"deger": False, "kaynak": "IBS 45 (1965)", "not": "Api–Raja kesimi ayrı D-YOK. " + IBS_TARIH},
     {"t": None, "not": "1923'te işaretsiz"}, 5.0, KES_NE, "Envanter §2.19 · Sarawak kesimi (115°40'D batısı)")
yok("d1923-hd-sw-DEGISTI-api-raja", HD, SW, "1891-06-20", bbox(parcala(ib, API), 0.03),
    {"deger": True, "kaynak": "IBS 45", "not": "26 Mar 1928 Lahey Sözleşmesi: dereler/patikalar/düz çizgiler, 1:50.000 harita, 20 işaret"},
    [ibs(45, "Indonesia–Malaysia (Borneo)", "A minor alteration in the water divide principle is made between the peaks")],
    "Envanter §2.19 · kutu IBS'in Api 110°04'D ve Raja 109°56'D boylamlarıyla")

# Timor
TIM = [{"ad": "La Haye Sözleşmesi (Hollanda–Portekiz)", "madde": "md. 3–6", "tarih": "1904-10-01", "tur": "sözleşme metni",
        "kaynak": "UN RIAA vol. XI s. 481–517", "url": "https://legal.un.org/riaa/cases/vol_xi/481-517.pdf",
        "not": "onay alışverişi 29 Ağu 1908 (IBRU)"},
       {"ad": "Deeley, The International Boundaries of East Timor, IBRU B&T Briefing 3/5", "tarih": "2001", "tur": "akademik",
        "alinti": "The land boundary delimitation is indisputable in international law."}]
TIM_DEG = {"deger": False, "kaynak": "IBRU 2001", "not": "hukukî hat 1904/1914'ten beri aynı (2001'e kadar); 2005 Endonezya–Timor-Leste anlaşması OKUNMADI"}
TIM_F = "1916-08-17"
TIM_FNOT = ("f: IBRU kronolojisinde 17 Ağu 1916 'sınırları düzenleyen protokol' satırı (tablo düzeni bozuk okundu — 🟡). "
            "1904 md. 4: Maucatar/Noimuti egemenliği tespit belgeleri imzalanınca geçer.")
it = cizgi("IDN-TLS")
oek = [g for g in it if g.centroid.x < 124.6]
ana = [g for g in it if g.centroid.x >= 124.6]
ekle("d1923-hd-pt-orta", HD, PT, TIM_F, "D", ana,
     TIM + [{"ad": "IBRU (Deeley 2001) §5", "tur": "akademik", "alinti": "Boundary posts were sited on both banks of the northern and southern termini rivers"}],
     TIM_DEG, {"t": "1915-04", "not": "karma komisyon: A–D + 29 direk, 5 astronomik istasyon; koordinatlar yazara ulaşmamış"},
     1.5, KES_NE, "Envanter §3.1 · 1904 md. 5. " + TIM_FNOT)
ekle("d1923-hd-pt-oecussi", HD, PT, TIM_F, "D", oek,
     TIM + [{"ad": "Timor sınırı hakem kararı (Hollanda–Portekiz)", "tarih": "1914-06-25", "tur": "hakem kararı",
             "kaynak": "UN RIAA vol. XI (Paris, 25 Haziran 1914)",
             "alinti": "il sera procédé à l'arpentage de cette partie de la frontière"}],
     TIM_DEG, {"t": "1899", "not": "A noktasına kadar 1899 karma komisyon tespiti; A–Noèl Meto kesiminin (1914 kararı) arazi tespiti BULUNAMADI"},
     1.5, KES_NE, "Envanter §3.1 · 1904 md. 3 §1–10 + 1914 kararı (1:50.000 harita). ⚠️ karar günü IBRU gövdesinde 26 Haz (RIAA 25 esas). " + TIM_FNOT)

# ================= AFGANİSTAN (D4-ORTADOGU M-4077: alfabetik kuralla D5-ASYA'nın) =================
BAL = {"ad": "D. Balland, 'Boundaries iii. Boundaries of Afghanistan', Encyclopaedia Iranica IV/4 s. 406–415",
       "tur": "akademik", "url": "https://www.iranicaonline.org/articles/boundaries-iii"}
AIT13 = {"ad": "Aitchison, Treaties, Engagements and Sanads, c. XIII (1933)", "tur": "resmî derleme",
         "url": "https://archive.org/details/in.ernet.dli.2015.206818"}
ekle("d1923-af-sscb-bati", AF, SV, "1917-11-07", "D", cizgi("AFG-TKM"),
     [{"ad": "Londra protokolü (İngiltere–Rusya)", "tarih": "1885-09-10", "tur": "protokol"},
      {"ad": "Petersburg uzlaşması (son protokol No. IX)", "tarih": "1887-07-22", "tur": "protokol"},
      {"ad": "Kham Ab son protokolü", "tarih": "1888-01-26", "tur": "protokol"},
      BAL, ibs(26, "Afghanistan–U.S.S.R.", "the Russians agreed on the town of Kham Ab as the boundary point")],
     {"deger": False, "kaynak": "IBS 26 (1983)", "not": "1946 protokolü 1921 md. 9'u (Pencdeh plebisiti — uygulanmadı) geçersiz saydı; 1947–48 yeniden işaretleme, hat aynı. " + IBS_TARIH},
     {"t": "1885-11-12/1888", "not": "79 direk (ilki 12 Kas 1885); 1903–04 onarım"},
     1.5, KES_NE, "Envanter §3.11 · Zülfikar–Kham Ab. Sovyet tarafı Türkistan ÖSSC (iç birim okunan kaynakta yok)")
at = cizgi("AFG-UZB") + cizgi("AFG-TJK")
PIL1 = 73 + 49 / 60                                         # IBS 26: 1. direk 37°26'32" / 73°49'00" (1895 sütunu)
pamir = parcala(cizgi("AFG-TJK"), lambda c: c[0] >= PIL1)
ekle("d1923-af-sscb-pamir", AF, SV, "1917-11-07", "D", pamir,
     [{"ad": "İngiliz–Rus Pamir notaları", "tarih": "1895-03-11", "tur": "nota teatisi"},
      {"ad": "Pamir Komisyonu protokolleri + Gerard / Povalo-Şveykovski haritası", "tarih": "1895", "tur": "protokol",
       "not": "12 direğin enlem-boylamı Aitchison c. XIII Ek V'te (boylam Pulkovo'ya göre)"},
      AIT13, ibs(26, "Afghanistan–U.S.S.R.", "The Commission demarcated the boundary at 12 points.")],
     {"deger": False, "kaynak": "IBS 26 (1983)", "not": "1981 antlaşması 'Zorkul batı kıyısından Pik Povalo'ya' teyit (IBS 26, Radio Moscow aktarımı). " + IBS_TARIH},
     {"t": "1895", "not": "12 direk, 1895 yazı"},
     1.5, KES_NE + " · batı ucu IBS 26'nın 1. direk boylamıyla (73°49'D) kesildi; Zorkul gölü içi kesim DIŞARIDA",
     "Envanter §3.11 · ⚠️ 1. direk koordinatı IBS 26 (73°49'00,6\") ile Aitchison Ek V (≈73°46'30\") arasında ÇELİŞKİLİ")
yok("d1923-af-sscb-DEGISTI-amuderya", AF, SV, "1917-11-07",
    bbox(cizgi("AFG-UZB") + parcala(cizgi("AFG-TJK"), lambda c: c[0] < PIL1), 0.05),
    {"deger": True, "kaynak": "IBS 26", "not": "1946 protokolü talveg/orta hat kuralı; 1947–48'de 1.192 ada paylaştırıldı; Darkad adası 26 Şub 1926'da Afganistan'a"},
    [{"ad": "Granville–Gorçakov yazışması", "tarih": "1873-01-31", "tur": "nota teatisi"},
     {"ad": "Durand–Emir anlaşması No. XI", "tarih": "1893-11-12", "tur": "anlaşma"},
     {"ad": "Sovyet–Afgan Antlaşması", "madde": "md. 8", "tarih": "1921-02-28", "tur": "antlaşma", "not": "onay 14 Ağu 1921 (Aitchison)",
      "alinti": "accept the actual independence and freedom of Bokhara and Khiva"},
     BAL, AIT13, ibs(26, "Afghanistan–U.S.S.R.")],
    "Envanter §3.11 · sınıf C (nehir içi hat 1923'te tanımsız). ⚠️ Kuzey kıyının bir kısmı 1923'te hukuken BUHARA HALK SOVYET CUMHURİYETİ'dir "
    "(künye `buhara-halk-cumhuriyeti`); hangi kesim olduğu BULUNAMADI — atlas Termez'i `sovyet-rusya`ya yazıyor")
yok("d1923-af-ih-BILINMIYOR-durand", AF, IH, "1922-02-06", bbox(cizgi("AFG-PAK"), 0.05),
    {"deger": None, "kaynak": "Balland (Iranica)", "not": "1932 Kunar kesimi işaretlendi; 26 Tem 1949 Afganistan anlaşmaları tek taraflı feshetti; Pakistan dönemi hattı OKUNMADI"},
    [{"ad": "Durand anlaşması No. XII", "madde": "md. 1 (ekli harita — Aitchison'da basılmamış)", "tarih": "1893-11-12", "tur": "anlaşma"},
     {"ad": "Ravalpindi Antlaşması", "madde": "md. 5", "tarih": "1919-08-08", "tur": "antlaşma"},
     {"ad": "Kabil Antlaşması", "madde": "md. II + Ek I", "tarih": "1921-11-22", "tur": "antlaşma", "not": "onaylar Kabil'de 6 Şub 1922",
      "alinti": "include within the boundaries of Afghanistan the place known as Tor Kham"},
     BAL, AIT13],
    "Envanter §3.11 · 1923 sınıfları: Vahan–Dorah C · Dorah–Nawa C (Dokalim tartışmalı) · Mohmand FİİLİ · Hayber/Torham D (1919, 13 direk) · "
    "Kurram D (1894, 76 direk) · Veziristan D (1895) · Belucistan D (1895–96; Soru ötesi işaretsiz). Bölümlere ayrılmadı: bugünkü çizgi vekil değil")
yok("d1923-af-cn-FIILI-vahan", AF, CN, "1895-03-11", bbox(cizgi("AFG-CHN"), 0.05),
    {"deger": True, "kaynak": "IBS 89", "not": "22 Kas 1963 Pekin antlaşması; 24 Mar 1965 Kabil protokolü"},
    [ibs(89, "Afghanistan–China", "remained an undelimited, 'conventional' line on maps")],
    "Envanter §3.11 · sınıf FİİLİ; Çin 20. yy başında Pamir'in çoğunu talep ediyordu")

# Hong Kong · Makao
yok("d1923-en-cn-BILINMIYOR-hongkong", EN, CN, "1899-03-19", bbox(cizgi("CHN-HKG"), 0.03),
    {"deger": None, "kaynak": "IBS 13 (1962)", "not": "1962'ye kadar değişmedi; 1997 devri ve sonrası Sham Chun nehri düzenlemesi OKUNMADI"},
    [{"ad": "Peking Konvansiyonu (Yeni Topraklar kirası)", "tarih": "1898-06-09", "tur": "konvansiyon", "not": "onay 6 Ağu 1898"},
     ibs(13, "China–Hong Kong", "the right or northern bank of the river generally known as the Sham Chun")],
    "Envanter §2.9 · 1923'te sınıf D (kıyı + kazıklar). f: 1899 tespiti — GÜN ÇELİŞKİLİ (IBS 13 başlık 14 Mart, Ek I 19 Mart); Ek I metni esas alındı")

# ---- yaz ----
ids = [k["id"] for k in KAYIT]
assert len(ids) == len(set(ids)), "mükerrer id"
for k in KAYIT:
    assert k["kategori"] == "D-YOK" or (k["hat"] and len(k["hat"]) >= 2), k["id"]
    assert k["dayanak"], k["id"]
    for d in k["dayanak"]:
        if d.get("alinti"):
            assert len(d["alinti"].split()) <= 15, (k["id"], d["alinti"])
BAS = """// -*- coding: utf-8 -*-
// data/d_sinirlar_asya.js — D KATEGORİSİ SINIRLAR · D5-ASYA (29 Ekim 1923)
// Şema denetim/SEMA-D-0916.md · envanter denetim/D5-ASYA-0916.md
// Üretici: denetim/ARAC-D5-ASYA-URET-0916.py — 🔴 ELLE DÜZENLEME, yeniden üret.
// kategori: D · C · D-YOK (bugünkü çizgi 1923'ü göstermez, bilinmiyor ya da 1923'te hukukî hat yoktu; kutuda D çizilmez)
// YAZILMAYANLAR: İÇ çizgiler (Çinhindi içi, Burma–Hindistan) · künyesiz taraflar (Bhutan, Sikkim) · Makao (NE çifti yok)
//               · Tuva–SSCB (bugün iç sınır) · kiralık topraklar (Kwantung, Kwangchowan, Weihaiwei) · Portekiz/Fransız Hindistanı

window.D_SINIRLAR_ASYA = [
"""
with io.open("data/d_sinirlar_asya.js", "w", encoding="utf-8", newline="\n") as f:
    f.write(BAS + ",\n".join(json.dumps(k, ensure_ascii=False, separators=(",", ":")) for k in KAYIT) + "\n];\n")
from collections import Counter
print("kayıt:", len(KAYIT), dict(Counter(k["kategori"] for k in KAYIT)))
for k in KAYIT:
    print(f"  {k['id']:40} {k['kategori']:6} {k.get('uzunluk_km', '')!s:>7} {k.get('sol_taraf', '')} {k.get('kutu', '')}")
