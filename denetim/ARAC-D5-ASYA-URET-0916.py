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

# ---- künye pencereleri (f, bir kaydın taraf künyelerinden ÖNCE başlayamaz) ----
import subprocess
_KJ = subprocess.run(["node", "-e",
    "global.window={};eval(require('fs').readFileSync('data/devletler.js','utf8'));"
    "const D=Object.values(window).find(v=>Array.isArray(v)&&v.length>500&&v[0].id);"
    "const o={};for(const d of D)o[d.id]=[d.f||'',d.t||''];process.stdout.write(JSON.stringify(o))"],
    capture_output=True, text=True, encoding="utf-8", check=True).stdout
KUNYE = json.loads(_KJ)


def pad(s):
    """üç haneli yıl tuzağı (CLAUDE.md §3.5): '918-01-01' → '0918-01-01'"""
    if not s:
        return s
    y, _, r = s.partition("-")
    return y.zfill(4) + ("-" + r if r else "")


def kirp(id_, a, b, f, t):
    for x in (a, b):
        if x not in KUNYE:
            raise SystemExit(f"{id_}: künye yok: {x}")
    kf = max(pad(KUNYE[a][0]), pad(KUNYE[b][0]))
    kt = min(pad(KUNYE[a][1]) or "9999", pad(KUNYE[b][1]) or "9999")
    notu = ""
    if pad(f) < kf:
        notu = f"f {f} → {kf} (taraf künyesi o tarihte başlıyor; hattın kendisi daha eski — öncesi G2/G3'ün işi)"
        f = kf
    if pad(t) > kt:
        raise SystemExit(f"{id_}: t {t} künye sonunu ({kt}) aşıyor")
    return f, notu


SINIF = {"D": "E", "C": "C", "D-YOK": "YOK", "fiili": "D"}
SINIF_NOT = {"E": "eski kategori D → E. F için kanıt D-KUNYE tanınma tablosunu (denetim/TANINMA-1923-0916.json) bekliyor"}


def ekle(id_, a, b, f, kategori, parcalar, dayanak, degisti, tahdit, kesinlik, kesinlik_not, not_="", geo=NE, sol=None, t=T, sinif=None):
    parcalar = [p for p in parcalar if uzunluk(p) >= 1.0]
    if not parcalar:
        raise SystemExit(f"{id_}: parça kalmadı")
    f0 = f
    f, kn = kirp(id_, a, b, f, t)
    for i, ls in enumerate(parcalar):
        KAYIT.append({
            "id": id_ + (f"-{i+1}" if len(parcalar) > 1 else ""),
            "taraflar": [a, b], "f": f, "t": t, "kategori": kategori,
            "sinif": sinif or SINIF[kategori], "sinif_not": SINIF_NOT.get(sinif or SINIF[kategori], ""),
            "sol_taraf": sol or sol_taraf(ls, a, b), "hat": dizi(ls),
            "uzunluk_km": round(uzunluk(ls), 1), "geometri_kaynagi": geo,
            "degisti": degisti, "tahdit": tahdit,
            "kesinlik_km": kesinlik, "kesinlik_not": kesinlik_not,
            "dayanak": dayanak, "not": " · ".join(x for x in (not_, kn) if x), "_f0": f0,
        })


def yok(id_, a, b, f, kutu, degisti, dayanak, not_="", t=T):
    f0 = f
    f, kn = kirp(id_, a, b, f, t)
    KAYIT.append({"id": id_, "taraflar": [a, b], "f": f, "t": t, "kategori": "D-YOK", "sinif": "YOK", "hat": None,
                  "kutu": [round(v, 3) for v in kutu], "degisti": degisti, "dayanak": dayanak,
                  "not": " · ".join(x for x in (not_, kn, YOK_NOT) if x), "_f0": f0})


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
ekle("d1923-jp-sscb-sahalin", JP, SV, "1905-09-05", "D", [sah_ls],
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
     "Hukukî hat 50°K'dir; renderer işgali ayrıca göstermeli. f: Portsmouth İMZA günü (yürürlük günü okunmadı; IBS 17 OCR'ında 15 Eki 1905 geçiyor, doğrulanmadı). "
     "Taraf SSCB (atlasta Uzakdoğu Cumhuriyeti künyesi YOK). "
     "⚠️ ŞEMA BOŞLUĞU: FİİLÎ görünümde (D>F>E) işgal süresince bu E hattı fiilî sınır DEĞİLDİ (iki yakası da Japon elinde) — "
     "'burada fiilî hat YOK' ifadesi şemada yok; D-KATMAN'a bildirildi.",
     geo="antlaşma tarifi (50°K paraleli) × Natural Earth 10m kara kıyısı", sol=SV)

# SSCB–Çin (bütün kesimler): IBS 64 1978'e kadar; sonrası (1991/1994/2004 ve Orta Asya devir anlaşmaları) ÖLÇÜLMEDİ
yok("d1923-sscb-cn-BILINMIYOR-dogu", SV, CN, "1860-11-14", bbox([max(cizgi("CHN-RUS"), key=uzunluk)], 0.10),
    {"deger": None, "kaynak": "IBS 64 (1978)", "not": "1978'de Argun/Amur/Ussuri nehir içi hat ve adalar tanımsız, Mançuli ve Amur–Ussuri kavşağı tartışmalı; sonraki anlaşmalar okunmadı"},
    [{"ad": "Aigun Antlaşması", "tarih": "1858-05-28", "tur": "antlaşma", "madde": "yok (nehir içi hat tanımsız)"},
     {"ad": "Pekin Ek Antlaşması", "madde": "md. I, III", "tarih": "1860-11-14", "tur": "antlaşma"},
     {"ad": "Bur Antlaşması + Abagatuy protokolü", "tarih": "1727-10-12", "tur": "protokol"},
     ibs(64, "China–U.S.S.R.", "Argun, Amur, and Ussuri has never been precisely delimited.")],
    "Envanter §2.1: Sungaça–Tumen kara kesimi 1923'te D (1861 20 direk); nehirler C; Mançuli · 64 köy · kavşak adaları FİİLİ. "
    "Uzakdoğu Cumhuriyeti (1920–22) için atlasta ayrı künye YOK — Sovyet tarafı baştan `sovyet-rusya`")
yok("d1923-sscb-cn-BILINMIYOR-batialtay", SV, CN, "1881-08-19", bbox([min(cizgi("CHN-RUS"), key=uzunluk)], 0.10),
    {"deger": None, "kaynak": "IBS 64 (1978)"},
    [{"ad": "St. Petersburg (İli) Antlaşması", "tarih": "1881-02-24", "tur": "antlaşma"}, ibs(64, "China–U.S.S.R.")],
    "Altay'daki kısa kesim (Moğolistan üçlü noktası civarı)")
yok("d1923-sscb-cn-BILINMIYOR-kazak", SV, CN, "1893-12-20", bbox(cizgi("CHN-KAZ"), 0.10),
    {"deger": None, "kaynak": "IBS 64 (1978)", "not": "1978'e kadar değişiklik bildirilmemiş; bağımsızlık sonrası Kazakistan–Çin anlaşmaları OKUNMADI"},
    [{"ad": "Tarbagatay (Çuguçak) Protokolü", "tarih": "1864-10-07", "tur": "protokol"},
     {"ad": "St. Petersburg (İli) Antlaşması", "tarih": "1881-02-24", "tur": "antlaşma"},
     ibs(64, "China–U.S.S.R.", "This part has been demarcated and about 12 markers are shown")],
    "Envanter §2.1: 1923'te D (Tekes–İli ~12 işaret; Jungar Alatau–Tarbagatay 1883/1893) · Horgos C")
yok("d1923-sscb-cn-BILINMIYOR-kirgiz", SV, CN, "1884-05-22", bbox(cizgi("CHN-KGZ"), 0.10),
    {"deger": None, "kaynak": "IBS 64 (1978)", "not": "Kırgızistan–Çin sonraki anlaşmaları OKUNMADI"},
    [{"ad": "Tarbagatay (Çuguçak) Protokolü", "tarih": "1864-10-07", "tur": "protokol"},
     {"ad": "Kaşgar protokolü", "tarih": "1882-11-25", "tur": "protokol"},
     {"ad": "Novi-Margelan protokolü", "tarih": "1884-05-22", "tur": "protokol"},
     ibs(64, "China–U.S.S.R.", "The 1864 delimitation of Tarbagatay is applicable from the Kizil Jik Dawan")],
    "Envanter §2.1: 1923'te D; protokol haritaları IBS'te yok")
yok("d1923-sscb-cn-FIILI-pamir", SV, CN, "1895-03-11", bbox(cizgi("CHN-TJK"), 0.10),
    {"deger": None, "kaynak": "IBS 64 (1978)", "not": "1978'de hâlâ tartışmalı; Tacikistan–Çin sonraki anlaşmaları OKUNMADI"},
    [{"ad": "İngiliz–Rus Pamir anlaşması", "tarih": "1895-03-11", "tur": "nota teatisi", "not": "Çin'e danışılmadan"},
     ibs(64, "China–U.S.S.R.", "no treaty delimits the boundary in the Pamirs south of the pass")],
    "Envanter §2.1 · sınıf FİİLİ: Kizil Jik Dawan güneyinde antlaşma yok")

yok("d1923-sscb-mn-BILINMIYOR", SV, MN, "1727-10-12", bbox(cizgi("MNG-RUS"), 0.10),
    {"deger": None, "kaynak": "IBS 64 (1978)", "not": "Tuva 1944'te SSCB'ye katıldı; 1958 SSCB–Moğolistan antlaşması DOĞRULANMADI"},
    [{"ad": "Bur Antlaşması", "tarih": "1727-08-20", "tur": "antlaşma"},
     {"ad": "Abagatuy protokolü", "tarih": "1727-10-12", "tur": "protokol", "not": "Kiahta doğusu 63 işaret"},
     {"ad": "Bur protokolü", "tarih": "1727-10-27", "tur": "protokol", "not": "Kiahta batısı 24 nokta"},
     ibs(64, "China–U.S.S.R.", "defined the limits of the two states from the Argun westward")],
    "Envanter §2.1/§3.5: 1923'te hukuken Rus–Çin hattı (Dış Moğolistan Çin metbuluğunda), fiilen Sovyet–Moğol. "
    "Kiahta doğusu D, batısı/Sayan C. ⚠️ Kutunun batı kesimi 1923'te TUVA–MOĞOLİSTAN hattıdır (fiilî, belge bulunamadı) — "
    "taraflar orada tannu-tuva/mogolistan; kesim yeri ÖLÇÜLMEDİ. Temmuz 1921 Sovyet destekli Moğol yönetimi (IBS 173; gün yok) hattı değiştirmedi")
yok("d1923-cn-mn-FIILI", CN, MN, "1915-06-07", bbox(cizgi("CHN-MNG"), 0.10),
    {"deger": True, "kaynak": "IBS 173", "not": "Dariganga 1924'te Moğolistan'a; 1932 işgali; 26 Ara 1962 antlaşması + 30 Haz 1964 protokolü (639 direk)"},
    [{"ad": "Kiahta Üçlü Anlaşması", "madde": "md. XI", "tarih": "1915-06-07", "tur": "anlaşma", "not": "yalnız sancak sınırlarına atıf"},
     ibs(173, "China–Mongolia", "But no commission was ever created, and no boundary delimitation or demarcation documents")],
    "Envanter §2.2 · sınıf FİİLİ: 1923'te hukuken Çin içi özerklik sınırı, fiilen iki yönetim arası")

yok("d1923-jp-cn-BILINMIYOR-yalu-tumen", JP, CN, "1909-09-04", bbox(cizgi("CHN-PRK"), 0.10),
    {"deger": None, "kaynak": "IBS 17 (1962)", "not": "1962'de Paektu kesiminde ~600 mil² tartışma; sonraki ÇHC–KDHC antlaşması OKUNMADI"},
    [{"ad": "Çin–Japon Tumen (Gando) Anlaşması", "madde": "md. I", "tarih": "1909-09-04", "tur": "anlaşma"},
     ibs(17, "China–Korea", "For the 20 miles between the headwaters, the boundary is considered to be in dispute.")],
    "Envanter §2.4: Yalu C · Tumen C · Paektu FİİLİ. Kore ilhakı 1910 (IBS 17 OCR'ında imza 22 Ağu 1910; ilan günü okunamıyor)")
yok("d1923-jp-sscb-BILINMIYOR-tumen", JP, SV, "1888-08-20", bbox(cizgi("PRK-RUS"), 0.05),
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
yok("d1923-ih-tb-FIILI-batihimalaya", IH, TB, "1816-03-04", bbox(parcala([hk_bati], lambda c: not LADAKH(c)), 0.10),
    {"deger": None, "kaynak": "bulunamadı"},
    [{"ad": "Tibet ile sınır antlaşması bulunamadı", "tur": "yok"},
     {"ad": "Sugauli (Segowlee) Antlaşması", "madde": "md. 5", "tarih": "1815-12-02", "tur": "antlaşma",
      "kaynak": "Aitchison c. II (1909), Nepal No. XXV", "alinti": "all claim to or connexion with the countries lying to the west"}],
    "Envanter §3.6 · Spiti/Kinnaur/Kumaon–Tibet · sınıf FİİLİ. 32,5°K güneyi — ayrım TAHMİNİ. f: Sugauli'nin yürürlüğü (Nepal md. 5 ile Kali'nin batısından vazgeçti; Kumaon'un İngiliz idaresine geçişi). Spiti'nin 1846 geçişi ARAŞTIRILMADI — o kesim 1846'ya kadar bu kayda ait değil")
yok("d1923-ck-cn-FIILI-aksaicin", CK, CN, "1842-09-17", bbox(parcala([hk_bati], LADAKH) + cizgi("CHN-KAS"), 0.10),
    {"deger": None, "kaynak": "IBS 85"},
    [{"ad": "Ladakh–Tibet mektubu", "tarih": "1842-09-17", "tur": "mektup", "alinti": "ancient boundaries"},
     {"ad": "Macdonald hattı notası (İngiltere→Çin)", "tarih": "1899-03-14", "tur": "nota (Çin kabul etmedi)"},
     ibs(85, "China–Pakistan", "the first formal, international treaty to delimit the boundary")],
    "Envanter §2.5/§3.6 · sınıf FİİLİ. Taraf Cammu-Keşmir (atlas 1923'te Leh'i bu kimliğe yazıyor); Aksai Çin'in doğusu Tibet'e değer. "
    "hukukî başlangıç YOK — f 1842 Ladakh–Tibet mektubu (künyeyle kırpılır)")
yok("d1923-ck-cn-FIILI-karakurum", CK, CN, "1899-03-14", bbox(cizgi("CHN-PAK"), 0.10),
    {"deger": True, "kaynak": "IBS 85", "not": "2 Mar 1963 Pekin anlaşması md. II–III; 26 Mar 1965 protokolü (40 direk)"},
    [{"ad": "Macdonald hattı notası", "tarih": "1899-03-14", "tur": "nota (Çin kabul etmedi)"},
     ibs(85, "China–Pakistan", "situated a considerable distance to the east of the Macdonald line")],
    "Envanter §2.5 · sınıf FİİLİ. Hunza/Gilgit tarafı; hukukî başlangıç YOK — f 1899 Macdonald notası (künyeyle kırpılır)")
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
ekle("d1923-af-sscb-bati", AF, SV, "1888-01-26", "D", cizgi("AFG-TKM"),
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
ekle("d1923-af-sscb-pamir", AF, SV, "1895-03-11", "D", pamir,
     [{"ad": "İngiliz–Rus Pamir notaları", "tarih": "1895-03-11", "tur": "nota teatisi"},
      {"ad": "Pamir Komisyonu protokolleri + Gerard / Povalo-Şveykovski haritası", "tarih": "1895", "tur": "protokol",
       "not": "12 direğin enlem-boylamı Aitchison c. XIII Ek V'te (boylam Pulkovo'ya göre)"},
      AIT13, ibs(26, "Afghanistan–U.S.S.R.", "The Commission demarcated the boundary at 12 points.")],
     {"deger": False, "kaynak": "IBS 26 (1983)", "not": "1981 antlaşması 'Zorkul batı kıyısından Pik Povalo'ya' teyit (IBS 26, Radio Moscow aktarımı). " + IBS_TARIH},
     {"t": "1895", "not": "12 direk, 1895 yazı"},
     1.5, KES_NE + " · batı ucu IBS 26'nın 1. direk boylamıyla (73°49'D) kesildi; Zorkul gölü içi kesim DIŞARIDA",
     "Envanter §3.11 · ⚠️ 1. direk koordinatı IBS 26 (73°49'00,6\") ile Aitchison Ek V (≈73°46'30\") arasında ÇELİŞKİLİ")
yok("d1923-af-sscb-DEGISTI-amuderya", AF, SV, "1895-03-11",
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
# --- G1 geriye sarma (1923 → 1918-11-11): Durand hattının iki önceki hukukî hâli ---
DUR_KUTU = bbox(cizgi("AFG-PAK"), 0.05)
yok("g1-af-ih-BILINMIYOR-durand-1919", AF, IH, "1919-08-08", DUR_KUTU,
    {"deger": None, "kaynak": "Aitchison c. XIII", "not": "22 Kas 1921 Kabil Antlaşması md. II + Ek I (onay 6 Şub 1922) Torham'da hattı ~700 yard ilerletti"},
    [{"ad": "Ravalpindi Antlaşması", "madde": "md. 5", "tarih": "1919-08-08", "tur": "antlaşma",
      "not": "Afganistan merhum Emir'in kabul ettiği sınırı kabul eder; Hayber batısındaki işaretsiz kesimi İngiliz komisyonu çizecek"},
     {"ad": "İngiliz sınır komisyonu (Hayber)", "tarih": "1919-09-02", "tur": "komisyon", "not": "23 Ağu – 2 Eyl 1919 (Aitchison c. XIII B taraması)"},
     AIT13, BAL],
    "G1 · 1919–1922 hâli: Durand hattı Ravalpindi md. 5 ile kabul; Torham düzeltmesi henüz yok. Sınıf YOK (bugünkü çizgi vekil değil)",
    t="1922-02-06")
yok("g1-af-ih-BILINMIYOR-durand-1893", AF, IH, "1893-11-12", DUR_KUTU,
    {"deger": None, "kaynak": "Balland (Iranica)"},
    [{"ad": "Durand anlaşması No. XII", "madde": "md. 1 (ekli harita)", "tarih": "1893-11-12", "tur": "anlaşma",
      "not": "Balland: 1893 metni 'spheres of influence' der; 'Indo-Afghan frontier' ifadesi ilk kez 1919/1921'de"},
     AIT13, BAL],
    "G1 · 1918-11-11'de yürürlükteki hâl (Durand 1893 + 1894–96 işaretlemeleri). 1919 İngiliz–Afgan savaşının fiilî hatları ÖLÇÜLMEDİ ⇒ D kaydı YAZILMADI. "
    "Kayıt 1893'ten başlıyor: G2/G3 aynı kaydı kullanabilir",
    t="1919-08-08")
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

# ================= G2 GERİYE SARMA (1918-11-11 → 1914-07-28) =================
# (a) Çin–Moğolistan: Kiahta 1915'ten önceki hâl — 1913 Pekin Deklarasyonu (IBS 173)
yok("g2-cn-mn-FIILI-1913", CN, MN, "1913-11-05", bbox(cizgi("CHN-MNG"), 0.10),
    {"deger": True, "kaynak": "IBS 173"},
    [{"ad": "Rus–Çin Pekin Deklarasyonu", "tarih": "1913-11-05", "tur": "deklarasyon",
      "not": "Dış Moğolistan'ın sınırlarını açıkça belirsiz bırakıp konferansa havale eder"},
     ibs(173, "China–Mongolia", "there are no detailed maps of Mongolia")],
    "G2 · 1913–1915 hâli, sınıf FİİLİ (hukukî hat yok). 1913 öncesi (Bogd Hanlık ilanı) G3'ün işi",
    t="1915-06-07")

# (b) Borneo: 1915 Londra Anlaşması'ndan önceki 1891 hâli
ekle("g2-hd-en-sebatik-1891", HD, EN, "1891-06-20", "D", parcala(ib, SEB),
     [dict(B91, madde="md. IV"), ibs(45, "Indonesia–Malaysia (Borneo)", "an additional two (on the parallel of 4° 10' N.)")],
     {"deger": False, "kaynak": "IBS 45 (1965)", "not": "hat 1891'den beri 4°10'K paraleli; 1915 yalnız işaretledi. " + IBS_TARIH},
     {"t": None, "not": "1915'e kadar işaretsiz"}, 1.0, KES_NE,
     "G2 · 1891–1915 hâli: Sebatik 1891 md. IV ile paralel üzerinden bölünmüş (koordinat tarifi), işaret 1915. Taraf `ingiltere` vekil",
     t="1915-09-28")
ekle("g2-hd-en-4-20-1891", HD, EN, "1891-06-20", "C", parcala(ib, PAR),
     [dict(B91, madde="md. II (nehirler için 5 millik sapma şeridi)"), ibs(45, "Indonesia–Malaysia (Borneo)")],
     {"deger": False, "kaynak": "IBS 45 (1965)", "not": IBS_TARIH},
     {"t": None, "not": "1915'e kadar işaretsiz"}, 3.0, KES_NE + " · 1891'de nehir geçişlerindeki sapmalar tanımsızdı; çizgi 1915 hâlidir",
     "G2 · 1891–1915 hâli: paralel tarif var ama nehir sapmaları 1915'e kadar tespit edilmemişti ⇒ C. Taraf `ingiltere` vekil",
     t="1915-09-28")

# (c) Timor: 1916 değişim protokolünden önceki hâl — Maucatar/Noimuti henüz devredilmemiş (1904 md. 4)
ekle("g2-hd-pt-orta-1908", HD, PT, "1908-08-29", "D", ana, TIM,
     {"deger": False, "kaynak": "IBRU 2001"},
     {"t": "1915-04", "not": "karma komisyon Nisan 1915'te bu aralıkta işaretledi"},
     1.5, KES_NE,
     "G2 · 1908–1916 hâli: 1904 md. 5 hattı yürürlükte (onay 29 Ağu 1908, IBRU) AMA md. 4 gereği Maucatar hâlâ HOLLANDA enklavı — "
     "enklav sınırının koordinatı yok ⇒ çizilmedi (o bölgede bu hat yanıltır)",
     t=TIM_F)
ekle("g2-hd-pt-oecussi-1914", HD, PT, "1914-06-25", "D", oek,
     TIM + [{"ad": "Timor sınırı hakem kararı (Hollanda–Portekiz)", "tarih": "1914-06-25", "tur": "hakem kararı",
             "kaynak": "UN RIAA vol. XI (Paris, 25 Haziran 1914)"}],
     {"deger": False, "kaynak": "IBRU 2001"},
     {"t": None, "not": "kararın emrettiği arazi tespiti BULUNAMADI"},
     1.5, KES_NE,
     "G2 · 1914–1916 hâli: doğu kesim hakem kararıyla belirlendi; Noimuti hâlâ PORTEKİZ enklavı (1904 md. 4) — çizilmedi. "
     "1914 kararından önceki hâl (doğu kesim tartışmalı) G3'ün işi",
     t=TIM_F)

# (d) Rus tarafı: sovyet-rusya kaydının iki öncülü (hat aynı, taraf değişti)
RUS_ZINCIR = [("rusya-gecici-hukumet", "gecici"), ("rusya", "rusya")]
# Kore 1910'a kadar `joseon` (künye sonu) — Japonya o hatta ilhakla taraf oldu; öncesi G3'ün işi
ALT_F = {"d1923-jp-sscb-BILINMIYOR-tumen": pad(KUNYE["joseon"][1])}
yeni = []
for k in KAYIT:
    if SV not in k["taraflar"] or k["id"].startswith("g"):
        continue
    for rid, ek in RUS_ZINCIR:
        kf, kt = pad(KUNYE[rid][0]), pad(KUNYE[rid][1])
        if pad(k["_f0"]) >= kt:
            continue
        diger = [x for x in k["taraflar"] if x != SV][0]
        f = max(pad(k["_f0"]), kf, pad(KUNYE[diger][0]), ALT_F.get(k["id"], ""))
        if f >= kt:
            continue
        c = json.loads(json.dumps(k))
        c["id"] = "g2-" + k["id"][len("d1923-"):] + "-" + ek
        c["taraflar"] = [rid if x == SV else x for x in k["taraflar"]]
        if c.get("sol_taraf") == SV:
            c["sol_taraf"] = rid
        c["f"], c["t"] = f, kt
        c["not"] = (f"G2 · aynı hat, Rus tarafı `{rid}` (künye {KUNYE[rid][0]} → {KUNYE[rid][1]}); "
                    "taraf geçişi bir SINIR olayı değildir, kronolojiye yazılmadı · ") + k["not"]
        yeni.append(c)
KAYIT += yeni
print("G2 Rus öncülü:", len(yeni))

# ================= G3 GERİYE SARMA (1914-07-28 → 1878-07-13) =================
QG, JS, RU = "qing-hanedani", "joseon", "rusya"
QING_KES = pad(KUNYE[CN][0])                     # 1911-10-10 — Çin tarafı bu günden önce Qing

# (a) Çin tarafı öncülleri: cin-cumhuriyeti künyesine kırpılmış bütün kayıtlar (d1923 + g2 Rus kopyaları)
ATLA = {"d1923-jp-cn-BILINMIYOR-yalu-tumen"}      # Kore tarafı da değişiyor → elle (c)
qy = []
for k in KAYIT:
    if CN not in k["taraflar"] or pad(k["f"]) != QING_KES or pad(k["_f0"]) >= QING_KES or k["id"] in ATLA:
        continue
    diger = [x for x in k["taraflar"] if x != CN][0]
    f = max(pad(k["_f0"]), pad(KUNYE[QG][0]), pad(KUNYE[diger][0]))
    if f >= QING_KES:
        continue
    c = json.loads(json.dumps(k))
    c["id"] = "g3-" + k["id"].split("-", 1)[1] + "-qing"
    c["taraflar"] = [QG if x == CN else x for x in k["taraflar"]]
    if c.get("sol_taraf") == CN:
        c["sol_taraf"] = QG
    c["f"], c["t"] = f, QING_KES
    c["not"] = ("G3 · aynı hat, Çin tarafı `qing-hanedani` (cin-cumhuriyeti künyesi 1911-10-10'da başlıyor); "
                "hanedan geçişi bir SINIR olayı değildir · ") + k["not"]
    qy.append(c)
KAYIT += qy
print("G3 Qing öncülü:", len(qy))

# (b) Moğolistan 1911-12-29'dan önce Qing'in parçası: Rus–Moğol hattı = Rus–Qing hattı
MNG_KUTU = bbox(cizgi("MNG-RUS"), 0.10)
yok("g3-sscb-mn-BILINMIYOR-rusya-qing", RU, QG, "1727-10-12", MNG_KUTU,
    {"deger": None, "kaynak": "IBS 64 (1978)"},
    [{"ad": "Bur Antlaşması", "tarih": "1727-08-20", "tur": "antlaşma"},
     {"ad": "Abagatuy protokolü", "tarih": "1727-10-12", "tur": "protokol"},
     ibs(64, "China–U.S.S.R.", "defined the limits of the two states from the Argun westward")],
    "G3 · Dış Moğolistan 1911-12-29'a kadar Qing'e bağlı (künye sınırı) — hat 1727 Rus–Çin hattı. Kiahta doğusu 1727'de işaretli (E), batısı C",
    t=pad(KUNYE[MN][0]))

# (c) Kore: 1910 ilhakından önce Joseon
YT_KUTU = bbox(cizgi("CHN-PRK"), 0.10)
GANDO = {"ad": "Çin–Japon Tumen (Gando) Anlaşması", "madde": "md. I", "tarih": "1909-09-04", "tur": "anlaşma",
         "not": "Japonya Kore'nin koruyucusu sıfatıyla imzaladı"}
yok("g3-jp-cn-BILINMIYOR-yalu-tumen-qing", JP, QG, "1910-08-29", YT_KUTU,
    {"deger": None, "kaynak": "IBS 17 (1962)"},
    [GANDO, ibs(17, "China–Korea")],
    "G3 · ilhak (Joseon künyesi 1910-08-29'da bitiyor) ile Çin Cumhuriyeti arası; Çin tarafı Qing", t=QING_KES)
yok("g3-joseon-cn-BILINMIYOR-yalu-tumen-qing", JS, QG, "1909-09-04", YT_KUTU,
    {"deger": None, "kaynak": "IBS 17 (1962)"},
    [GANDO, ibs(17, "China–Korea", "the River Tumen Is recognized as forming the boundary between China and Korea")],
    "G3 · 1909 anlaşmasından ilhaka kadar. 1909'dan önceki Yalu hattı ('en az 1875'ten beri kabul') ve Paektu anlaşmazlığı "
    "tarihli bir belgeye bağlanamadı ⇒ kayıt YAZILMADI", t=pad(KUNYE[JS][1]))
yok("g3-joseon-rusya-BILINMIYOR-tumen", JS, RU, "1888-08-20", bbox(cizgi("PRK-RUS"), 0.05),
    {"deger": None, "kaynak": "IBS 59 (1965)"},
    [{"ad": "Seul Tumen Ticaret Nizamnamesi", "tarih": "1888-08-20", "tur": "nizamname", "not": "hattı yalnız anar"},
     ibs(59, "Korea–U.S.S.R.")],
    "G3 · Kore–Rusya Tumen kesimi ilhaka kadar. 1860 Pekin Antlaşması'ndan 1888'e kadarki hâl yazılmadı (Kore o metnin tarafı değil)",
    t=pad(KUNYE[JS][1]))

# (d) Burma–Çin: 1897'den önce 1894 Londra Konvansiyonu hattı (1897 onu değiştirdi; koordinat yok)
yok("g3-ih-cn-BILINMIYOR-guney-1894", IH, QG, "1894-08-23", bbox(parcala(mm_cn, lambda c: c[1] <= K1), 0.08),
    {"deger": True, "kaynak": "IBS 42", "not": "4 Şub 1897 Peking Anlaşması (onay 5 Haz 1897) 1894 hattını değiştirdi"},
    [{"ad": "Londra Konvansiyonu (İngiltere–Çin)", "tarih": "1894-03-01", "tur": "konvansiyon", "not": "onay 23 Ağu 1894"},
     ibs(42, "Burma–China")],
    "G3 · 1894–1897 hâli; High Conical Peak (25°35'K) güneyi. Kuzeyi 1894'te de 'to be settled ulteriorly'", t="1897-06-05")

# (e) Çin–Tonkin: 1895 Tamamlayıcı Sözleşme'den önce 1887 hattı
yok("g3-qing-fc-BILINMIYOR-tonkin-1887", QG, FC, "1887-06-26", bbox(cizgi("CHN-VNM"), 0.08),
    {"deger": True, "kaynak": "IBS 38", "not": "20 Haz 1895 Tamamlayıcı Sözleşme (onay 7 Ağu 1896) Yünnan R–S kesimini ve Long-po-tchai – Kara Irmak kesimini değiştirdi"},
    [{"ad": "Pekin Sözleşmesi (Fransa–Çin)", "tarih": "1887-06-26", "tur": "sözleşme", "not": "onay günü bulunamadı"},
     ibs(38, "China–Viet-Nam")],
    "G3 · 1887–1896 hâli; Laos kesimi 1887'de belirlenmemişti (IBS 34)", t="1896-08-07")

# (f) Siyam–Fransız Çinhindi
SI_LAOS_KUTU = bbox(lt, 0.05)
ekle("g3-si-fc-kara-1904", SI, FC, "1904-02-13", "C", lt_kara,
     [{"ad": "Fransız–Siyam Sözleşmesi", "madde": "md. I–II", "tarih": "1904-02-13", "tur": "sözleşme",
       "not": "onay alışverişi 7 Ara 1904 (IBS 32) / 9 Ara 1904 (IBS 40) — ÇELİŞKİLİ"},
      {"ad": "Fransız–Siyam Anlaşması", "madde": "md. II (Nam Kop batısındaki sırt · Nam Heung Nga)", "tarih": "1904-06-29", "tur": "anlaşma"},
      ibs(20, "Laos–Thailand", "the boundary joined the ridge line to the west of the Nam-Kop system")],
     {"deger": False, "kaynak": "IBS 20 (1962)", "not": "1907 teyit etti. " + IBS_TARIH},
     {"t": "1907", "not": "komisyon haritası [1907]"}, 3.0, KES_NE,
     "G3 · 1904–1907 hâli; kara kesimleri 1904'te kuruldu, 1907 aynen teyit etti. f imza günü; 29 Haz 1904 anlaşması kuzey ucu değiştirdi",
     t="1907-03-23")
yok("g3-si-fc-DEGISTI-laos-1893", SI, FC, "1893-10-03", SI_LAOS_KUTU,
    {"deger": True, "kaynak": "IBS 20", "not": "1904'te Mekong'un sağ yakasındaki Luang Prabang ve Bassac toprakları Fransa'ya geçti"},
    [{"ad": "Fransız–Siyam Barış Antlaşması", "madde": "md. I", "tarih": "1893-10-03", "tur": "antlaşma", "not": "onay 2/3 Şub 1894 (IBS 20/40 çelişkili)"},
     ibs(20, "Laos–Thailand", "Siam renounced all rights to the territories on the left bank of the Mekong")],
    "G3 · 1893–1904 hâli: hat bütünüyle Mekong'un SİYAM KIYISI (koordinat yok). 1893 öncesi Laos Siyam'a bağlı — kayıt yok",
    t="1904-02-13")
yok("g3-si-fc-DEGISTI-kambocya-1904", SI, FC, "1904-02-13", bbox(cizgi("KHM-THA"), 0.05),
    {"deger": True, "kaynak": "IBS 40", "not": "23 Mar 1907 Antlaşması hattı yeniden çizdi; 1904 çizgisinin Büyük Göl'ün batısı/kuzeybatısı geçersiz kaldı"},
    [{"ad": "Fransız–Siyam Sözleşmesi", "madde": "md. I", "tarih": "1904-02-13", "tur": "sözleşme"}, ibs(40, "Cambodia–Thailand")],
    "G3 · 1904–1907 hâli (Dangrek kesimi bugünküyle aynı, batısı farklı; ayrılmadı). 1904 öncesi (1867 Fransız–Siyam) ARAŞTIRILMADI",
    t="1907-03-23")

# (g) Siyam–Burma: 1894 harita teatisinden önce
yok("g3-si-ih-BILINMIYOR-1868", SI, IH, "1868-07-03", bbox(mt, 0.05),
    {"deger": True, "kaynak": "IBS 63"},
    [{"ad": "İngiliz–Siyam Sözleşmesi", "tarih": "1868-01-01", "tur": "sözleşme", "not": "gün çelişkili (8 Şub / 8 Eyl 1868); onay 3 Tem 1868"},
     ibs(63, "Burma–Thailand")],
    "G3 · 1868–1894 hâli: güney (Tenasserim) 1868 hattı vardı; kuzey (Şan beylikleri, 1886 sonrası İngiliz) 1889–94 komisyonuna kadar tanımsız. "
    "Parçalar ayrılmadı", t="1894-10-17")

# (h) Timor: 1904 sözleşmesinin yürürlüğünden önce 1859 hattı (enklavlarla)
yok("g3-hd-pt-BILINMIYOR-timor-1860", HD, PT, "1860-08-13", bbox(it, 0.08),
    {"deger": True, "kaynak": "IBRU 2001", "not": "1904 sözleşmesi Maucatar/Noimuti enklavlarını kaldırıp hattı yeniden tarif etti"},
    [{"ad": "Lizbon Antlaşması (Hollanda–Portekiz)", "tarih": "1859-04-20", "tur": "antlaşma", "not": "onay 13 Ağu 1860 (IBRU)"},
     {"ad": "Lizbon Sözleşmesi", "tarih": "1893-06-10", "tur": "sözleşme", "not": "enklavların kaldırılmasını öngördü, hattı değiştirmedi (IBRU)"}],
    "G3 · 1860–1908 hâli; 1899 karma komisyon ölçümü bu dönemde. Koordinat yok", t="1908-08-29")
yok("g3-hd-pt-FIILI-oecussi-1908", HD, PT, "1908-08-29", bbox(oek, 0.05),
    {"deger": True, "kaynak": "UN RIAA XI", "not": "25 Haz 1914 hakem kararı doğu kesimi (A – Noèl Meto) belirledi"},
    [dict(TIM[0])],
    "G3 · 1908–1914 hâli: batı/güney 1904 md. 3 §1–9 ile E, doğu kesim (§10) TARTIŞMALI — parçalar ayrılmadı", t="1914-06-25")

# (i) Afganistan–Rusya: 1888 son protokolünden ve 1895 notalarından önce
yok("g3-af-rusya-BILINMIYOR-bati-1885", AF, RU, "1885-09-10", bbox(cizgi("AFG-TKM"), 0.05),
    {"deger": None, "kaynak": "Balland (Iranica)"},
    [{"ad": "Londra protokolü (İngiltere–Rusya)", "tarih": "1885-09-10", "tur": "protokol"}, BAL],
    "G3 · 1885–1888 hâli: hat protokolle tarif edildi, işaretleme 12 Kas 1885'te başladı; Kham Ab ucu 1888'e kadar açık", t="1888-01-26")
yok("g3-af-rusya-DEGISTI-amuderya-1873", AF, RU, "1873-01-31", bbox(cizgi("AFG-UZB") + cizgi("AFG-TJK"), 0.05),
    {"deger": True, "kaynak": "Aitchison c. XIII", "not": "1895 notaları + Durand–Emir 1893: Emir Şugnan/Roşan'dan (1894), Buhara Darvaz'dan (Eki 1896) çekildi"},
    [{"ad": "Granville–Gorçakov yazışması", "tarih": "1873-01-31", "tur": "nota teatisi", "not": "Balland 17.10.1872 / 31.01.1873"}, BAL, AIT13],
    "G3 · 1873–1895 hâli: Amuderya çizgisi; Pence/Pamir kesimi farklı. Kuzey kıyı büyük ölçüde BUHARA EMİRLİĞİ (Rus himayesi) — ayrılmadı",
    t="1895-03-11")

print("G3 elle: bitti")

# ================= G4 GERİYE SARMA (1878-07-13 → 1815-06-09) =================
SH = "sih-imparatorlugu"
TARB = {"ad": "Tarbagatay (Çuguçak) Protokolü", "tarih": "1864-10-07", "tur": "protokol", "not": "25 Eylül (7 Ekim) 1864"}
# (a) Rus–Qing: 1881 / 1884 / 1893 öncesi Tarbagatay hâli · 1860 öncesi Aigun hâli
HOKAND_SINIRI = 40 + 15 / 60        # IBS 64: Tarbagatay hattı "approximately 40°15' North and 74°40' East, the limits of Kokand"
kg = cizgi("CHN-KGZ")
kg_kuzey = parcala(kg, lambda c: c[1] >= HOKAND_SINIRI)
kg_guney = parcala(kg, lambda c: c[1] < HOKAND_SINIRI)
yok("g4-rusya-qing-FIILI-kirgiz-guney-1876", RU, QG, pad(KUNYE["hokand"][1]), bbox(kg_guney, 0.10),
    {"deger": True, "kaynak": "IBS 64", "not": "Kaşgar (25 Kas 1882) ve Novi-Margelan (22 May 1884) protokolleri bu kesimi çizdi"},
    [ibs(64, "China–U.S.S.R.", "the limits of the State of Kokand (not conquered by Russia until 1876)")],
    "G4 · 40°15'K güneyi: 1876'ya kadar Hokand–Qing sınırıydı (Hokand–Qing hattının belgesi BULUNAMADI, kayıt yazılmadı). "
    "Hokand'ın Rusya'ya katılmasından (künye sonu; IBS yalnız yılı verir) protokollere kadar Rus–Qing hattı tanımsız — FİİLİ",
    t="1884-05-22")
for ad, cift_, t_ in [("batialtay", [min(cizgi("CHN-RUS"), key=uzunluk)], "1881-08-19"),
                      ("kazak", cizgi("CHN-KAZ"), "1893-12-20"),
                      ("kirgiz", kg_kuzey, "1884-05-22")]:
    yok(f"g4-rusya-qing-BILINMIYOR-{ad}-1864", RU, QG, "1864-10-07", bbox(cift_, 0.10),
        {"deger": True, "kaynak": "IBS 64", "not": "1881 İli Antlaşması ve 1882–1893 protokolleri hattı değiştirip ayrıntılandırdı"},
        [TARB, ibs(64, "China–U.S.S.R.")],
        "G4 · 1864 Tarbagatay hâli; sonraki antlaşmaya kadar. 1864 öncesi Orta Asya'da antlaşma hattı yok (IBS 64) — kayıt yazılmadı",
        t=t_)
yok("g4-rusya-qing-BILINMIYOR-dogu-1858", RU, QG, "1858-05-28", bbox([max(cizgi("CHN-RUS"), key=uzunluk)], 0.10),
    {"deger": True, "kaynak": "IBS 64", "not": "2 (14) Kasım 1860 Pekin Ek Antlaşması Ussuri–Tumen kesimini Rusya'ya bağladı"},
    [{"ad": "Aigun Antlaşması", "tarih": "1858-05-28", "tur": "antlaşma", "not": "16 (28) Mayıs 1858; nehir içi hat tanımsız"},
     ibs(64, "China–U.S.S.R.", "The Aigun Treaty did not delimit a precise position for the boundary in the Amur.")],
    "G4 · 1858–1860 hâli: Amur hattı Aigun'la kuruldu, Ussuri ile deniz arası ortak kullanımdaydı (IBS 64). "
    "1858 öncesi doğu hattı 1689 Nerçinsk hattıdır — başka bir coğrafyada (G7), bu kutuda değil",
    t="1860-11-14")

# (b) Hindistan–Nepal: 1875 Dhundwa düzeltmesinden ve 1860 Terai iadesinden önceki hâller
NP_KUTU = bbox(cizgi("IND-NPL"), 0.10)
yok("g4-ih-np-BILINMIYOR-1860", IH, NP, "1860-11-01", NP_KUTU,
    {"deger": True, "kaynak": "Aitchison c. II (1909)", "not": "7 Oca 1875 anlaşması Dhundwa tepeleri kesimini düzeltti"},
    [{"ad": "Katmandu Antlaşması", "madde": "md. 3", "tarih": "1860-11-01", "tur": "antlaşma", "not": "GV onayı 15 Kas 1860", "alinti": "marked by pillars"}],
    "G4 · 1860–1875 hâli: batı Terai Nepal'e iade edilmiş, kâgir direklerle işaretli", t="1875-01-07")
yok("g4-ih-np-BILINMIYOR-1816", IH, NP, "1816-03-04", NP_KUTU,
    {"deger": True, "kaynak": "Aitchison c. II (1909)", "not": "1 Kas 1860 antlaşması Kali–Gorakhpur ovalarını Nepal'e iade etti"},
    [{"ad": "Sugauli (Segowlee) Antlaşması", "madde": "md. III", "tarih": "1815-12-02", "tur": "antlaşma", "not": "onaylı nüsha 4 Mar 1816'da Nepal temsilcisine teslim"},
     {"ad": "Gandak–Rapti Terai'sinin iadesine dair muhtıra", "tarih": "1816-12-08", "tur": "muhtıra", "not": "sınırı ortak komiserler belirleyecek"}],
    "G4 · 1816–1860 hâli: Sugauli ile ovalar Şirket'e geçti; 8 Ara 1816 muhtırasıyla Gandak–Rapti Terai'si iade edildi (kayıt bölünmedi)",
    t="1860-11-01")

# (c) Hong Kong: 1898 kirasından önce Kowloon (Boundary Street) hattı
yok("g4-en-qing-BILINMIYOR-kowloon-1860", EN, QG, "1860-10-24", bbox(cizgi("CHN-HKG"), 0.10),
    {"deger": True, "kaynak": "IBS 13", "not": "9 Haz 1898 Peking Konvansiyonu Yeni Toprakları kiraladı; kara sınırı kuzeye, Sham Chun'a taşındı"},
    [{"ad": "Peking Konvansiyonu", "madde": "md. VI (Kowloon terki)", "tarih": "1860-10-24", "tur": "konvansiyon"},
     ibs(13, "China–Hong Kong", "Kowloon Peninsula south of present-day Boundary Street")],
    "G4 · 1860–1899 hâli: İngiliz–Çin kara sınırı Kowloon'da bugünkü Boundary Street hattıydı; o hattın koordinatı ELDE YOK. "
    "Kutu 1923 hattınınkidir — bu yıllarda o kutuda İngiliz–Çin sınırı YOKTU. 1860 öncesi (1842 Nanking) yalnız ada, kara sınırı yok",
    t="1899-03-19")

# (d) Keşmir–Çin: Cammu-Keşmir künyesinden (1846) önce Sih İmparatorluğu dönemi
yok("g4-sih-tb-FIILI-ladakh-1842", SH, TB, "1842-09-17", bbox(parcala([hk_bati], LADAKH) + cizgi("CHN-KAS"), 0.10),
    {"deger": None, "kaynak": "bulunamadı"},
    [{"ad": "Ladakh–Tibet mektubu", "tarih": "1842-09-17", "tur": "mektup",
      "kaynak": "tibetjustice.org/materials/treaties/treaties3.html", "alinti": "ancient boundaries"}],
    "G4 · 1842–1846 hâli, sınıf FİİLİ: mektup koordinat vermez. Ladakh o yıllarda Sih İmparatorluğu'na bağlı Dogra idaresindeydi "
    "(künye `sih-imparatorlugu`); 1846'dan sonra `cammu-kesmir` (devlet geçişi, sınır olayı sayılmadı). 1842 öncesi yazılmadı",
    t=pad(KUNYE[CK][0]))
print("G4 elle: bitti")

# ================= G5 GERİYE SARMA (1815-06-09 → 1774-07-21) =================
yok("g5-np-tb-FIILI-1792", NP, TB, "1792-01-01", bbox(cizgi("CHN-NPL"), 0.10),
    {"deger": True, "kaynak": "IBS 50", "not": "24 Mar 1856 Nepal–Tibet barışı; 1960–63 anlaşmaları"},
    [{"ad": "Çin–Nepal antlaşması", "tarih": "1792-01-01", "tur": "antlaşma", "not": "yalnız YIL biliniyor; hükümleri belirsiz"},
     ibs(50, "China–Nepal", "appears to give territories south of the Himalaya to Tibet")],
    "G5 · 1792–1856 hâli, sınıf FİİLİ: IBS'e göre antlaşma Himalaya'nın güneyindeki bazı toprakları Tibet'e bırakıyor görünür, "
    "hükümleri belirsizdir. Antlaşmanın imzacısı Çin (Qing); sınırın karşı yakası Tibet — f yalnız yıl",
    t="1856-03-24")
print("G5 elle: bitti")

# ================= G7 GERİYE SARMA (1699-01-26 → 1606-11-11) =================
yok("g7-rusya-qing-BILINMIYOR-nercinsk-1689", RU, QG, "1689-08-27", bbox([max(cizgi("CHN-RUS"), key=uzunluk)], 0.10),
    {"deger": True, "kaynak": "IBS 64", "not": "1858 Aigun ve 1860 Pekin antlaşmaları hattı Amur ve Ussuri'ye indirdi"},
    [{"ad": "Nerçinsk Barış ve Sınır Antlaşması", "tarih": "1689-08-27", "tur": "antlaşma",
      "not": "IBS yalnız '27 Ağustos 1689' der; takvimi (Jülyen/Gregoryen) belirtmez", "kaynak": "Hertslet's China Treaties I:437 (IBS 64 aktarımı)"},
     ibs(64, "China–U.S.S.R.", "the first boundary was created between the Russian and the Manchu Empire")],
    "G7 · 1689–1858 hâli: hat Argun'u Şilka'ya kadar izleyip kuzeye, Yablonovıy ve Stanovoy sırtlarının su ayrımıyla Pasifik'e gidiyordu. "
    "Kutu 1923 hattınındır: yalnız Argun kesimi bu kutuda; Amur ve Ussuri o yıllarda tamamen Mançu tarafındaydı, "
    "hattın asıl kısmı kutunun çok kuzeyindedir ve koordinatı ELDE YOK. Uda ırmağı ile dağlar arasındaki bölgenin aidiyeti açık bırakıldı",
    t="1858-05-28")
print("G7 elle: bitti")
for k in KAYIT:
    k.pop("_f0", None)

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
