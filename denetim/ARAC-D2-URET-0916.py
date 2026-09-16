# -*- coding: utf-8 -*-
"""D2-KOMSU — 29 Ekim 1923 komşu sınırlarının (Türkiye HARİÇ) D kayıtlarını ÜRETİR.

Çıktı : data/d_sinirlar_komsu.js (window.D_SINIRLAR_KOMSU)
Şema  : denetim/SEMA-D-0916.md (D1-TURKIYE)   · Envanter: denetim/D2-KOMSU-0916.md
Okur  : veri-kaynak/d_bugunku_sinirlar.geojson (D-GEOARAC: bugünkü ülke çifti çizgileri) ·
        veri-kaynak/ne_10m_admin_0_countries.geojson (yalnız sol_taraf testi) · GeoNames (çıpalar)

KURAL (şema md.1 + şartname md.3): bugünkü geometri bir VEKİLDİR ve yalnız kaynak "değişmedi"
diyorsa kullanılır. Değişen ya da bilinmeyen (degisti:null) parçalar D-YOK kutusu olur — 1923
koordinatı ELDE YOK, uydurulmaz. İÇ parçalar (aynı atlas kimliği) YAZILMAZ (envanter §4).
Kıyas (koşu çıktısıyla sapma) YAPILMADI.
"""
import sys, io, os, json, math
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
from shapely.geometry import shape, Point, LineString, box
from shapely.ops import linemerge, substring

GEONAMES = r"C:\Users\emrem\GEONAMES\allCountries.txt"
SADE = 0.002
T = "1923-10-29"
IBS = "https://library.law.fsu.edu/Digital-Collections/LimitsinSeas/pdf/ibs%03d.pdf"
NE = "Natural Earth 10m admin-0 (bugünkü sınır, D-GEOARAC çıktısı) — kullanılabilirliği 'değişmedi' dayanağına bağlı"
KES_NE = "NE 1:10m ölçek; konum hatası ÖLÇÜLMEDİ (ölçek gereği ~1-2 km beklenir)"
YOK_NOT = ("1923 hattının koordinatı ELDE YOK ⇒ bu kutuda D ÇİZİLMEZ, A/B (ya da C) geçerli. "
           "Bugünkü çizgi 1923'ü GÖSTERMEZ ya da gösterdiği ölçülmedi.")


def km(a, b):
    r = math.pi / 180
    return 6371 * math.hypot((b[0] - a[0]) * r * math.cos((a[1] + b[1]) / 2 * r), (b[1] - a[1]) * r)


def uzunluk(ls):
    c = list(ls.coords)
    return sum(km(c[i], c[i + 1]) for i in range(len(c) - 1))


# ---- GeoNames çıpaları: TEK geçiş ----
ARANAN = {("MK", "gevgelija"): None, ("BG", "tutrakan"): None}
KUTU = {("MK", "gevgelija"): (22.3, 41.0, 22.7, 41.3), ("BG", "tutrakan"): (26.4, 43.9, 26.8, 44.2)}  # adaşları eler
with open(GEONAMES, encoding="utf-8") as f:
    for l in f:
        c = l.split("\t")
        if c[6] != "P":
            continue
        k = (c[8], c[2].lower())
        if k in ARANAN and ARANAN[k] is None:
            x0, y0, x1, y1 = KUTU[k]
            if not (x0 <= float(c[5]) <= x1 and y0 <= float(c[4]) <= y1):
                continue
            ARANAN[k] = (float(c[5]), float(c[4]), c[0], c[1])   # lon, lat, id, ad
        if all(ARANAN.values()):
            break
eksik = [k for k, v in ARANAN.items() if v is None]
if eksik:
    raise SystemExit(f"çıpa yok: {eksik}")
GEV, TUT = ARANAN[("MK", "gevgelija")], ARANAN[("BG", "tutrakan")]
print("çıpalar:", GEV, TUT)

# ---- bugünkü çift çizgileri ----
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


ADM = json.load(open("veri-kaynak/ne_10m_admin_0_countries.geojson", encoding="utf8"))
POLY = {f["properties"]["ADM0_A3"]: shape(f["geometry"]).buffer(0) for f in ADM["features"]
        if f["properties"]["ADM0_A3"] in ("GRC", "BGR", "SRB", "MKD", "ALB", "ROU", "IRN", "AFG", "IRQ", "ISR", "LBN")}
ISO = {"yunanistan": ["GRC"], "bulgaristan-kralligi": ["BGR"], "yugoslavya": ["SRB", "MKD"],
       "arnavutluk-bagimsiz": ["ALB"], "romanya-kralligi": ["ROU"], "kacar": ["IRN"], "afganistan": ["AFG"],
       "irak-kralligi": ["IRQ"], "filistin-mandasi": ["ISR"], "suriye-lubnan-mandasi": ["LBN"],
       "sirbistan-kralligi": ["MKD"], "osmanli": ["IRQ"]}     # yalnız sol_taraf testi: o yakanın BUGÜNKÜ ülkesi


def sol_taraf(ls, a, b):
    m = ls.interpolate(0.5, normalized=True)
    p0 = ls.interpolate(max(0, ls.project(m) - 0.005))
    p1 = ls.interpolate(min(ls.length, ls.project(m) + 0.005))
    dx, dy = p1.x - p0.x, p1.y - p0.y
    n = math.hypot(dx, dy) or 1
    sol = Point(m.x - dy / n * 0.03, m.y + dx / n * 0.03)
    return a if any(POLY[k].contains(sol) for k in ISO[a]) else b


def dizi(g):
    g = g.simplify(SADE, preserve_topology=False)
    return [[round(x, 4), round(y, 4)] for x, y in g.coords]


def parcala(parcalar, kosul):
    """koşulu sağlayan ardışık nokta dizilerini LineString olarak döndürür."""
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


def uc_kes(ls, km_, uc):
    """ls'nin `uc` ('bas'|'son') tarafından km_ uzunluğundaki parçayı ve kalanı döndürür."""
    L = uzunluk(ls)
    oran = min(1.0, km_ / L)
    if uc == "son":
        return substring(ls, 1 - oran, 1, normalized=True), substring(ls, 0, 1 - oran, normalized=True)
    return substring(ls, 0, oran, normalized=True), substring(ls, oran, 1, normalized=True)


KAYIT = []


# A–F KADEMESİ (GORUNUM-ABCD-0916 en üst bölüm, 16 Eylül akşamı): kategori → sinif
#   D → E (F kanıtı TANINMA-1923 tablosu gelince) · fiili → D (koordinat kesinse) · C → C · D-YOK → YOK
SINIF = {"D": "E", "C": "C", "fiili": "D", "D-YOK": "YOK"}
F_BEKLER = "F değil E: tanınma kanıtı (denetim/TANINMA-1923-0916.json) henüz yok"


def ekle(id_, a, b, f, kategori, parcalar, dayanak, degisti, tahdit, kesinlik, kesinlik_not, not_="",
         t=T, sinif=None, sinif_not=None):
    s = sinif or SINIF[kategori]
    for i, ls in enumerate(parcalar):
        KAYIT.append({
            "id": id_ + (f"-{i+1}" if len(parcalar) > 1 else ""),
            "taraflar": [a, b], "f": f, "t": t, "kategori": kategori,
            "sinif": s, "sinif_not": sinif_not or (F_BEKLER if s == "E" else None),
            "sol_taraf": sol_taraf(ls, a, b), "hat": dizi(ls),
            "uzunluk_km": round(uzunluk(ls), 1), "geometri_kaynagi": NE,
            "degisti": degisti, "tahdit": tahdit,
            "kesinlik_km": kesinlik, "kesinlik_not": kesinlik_not,
            "dayanak": dayanak, "not": not_,
        })


def yok(id_, a, b, f, kutu, degisti, dayanak, not_="", t=T):
    KAYIT.append({"id": id_, "taraflar": [a, b], "f": f, "t": t, "kategori": "D-YOK", "sinif": "YOK",
                  "sinif_not": "FİİLİ, kaba/koordinatsız (hukukî hat yok)" if "FİİLİ" in not_ else None,
                  "hat": None,
                  "kutu": [round(v, 3) for v in kutu], "degisti": degisti, "dayanak": dayanak,
                  "not": (not_ + " · " if not_ else "") + YOK_NOT})


def bbox(parcalar, pay=0.05):
    xs = [x for g in parcalar for x, _ in g.coords]
    ys = [y for g in parcalar for _, y in g.coords]
    return (min(xs) - pay, min(ys) - pay, max(xs) + pay, max(ys) + pay)


GR, BG, YU, AL, RO = "yunanistan", "bulgaristan-kralligi", "yugoslavya", "arnavutluk-bagimsiz", "romanya-kralligi"
IR, AF, IQ, FI, SL = "kacar", "afganistan", "irak-kralligi", "filistin-mandasi", "suriye-lubnan-mandasi"
IHND, JO, SA, KW, SV = "ingiliz-hindistani", "urdun-emirligi", "suud-ucuncu", "kuveyt", "sovyet-rusya"

# ================= BALKAN =================
# B2 Yunanistan–SHS: Gevgeli kesimi (taş 69 → Vardar doğusu, ~9 mil) 1927'ye kadar çözülmedi
gev_kutu = box(GEV[0] - 0.20, GEV[1] - 0.09, GEV[0] + 0.12, GEV[1] + 0.06)
b2 = cizgi("GRC-MKD")
b2_dis = parcala(b2, lambda c: not gev_kutu.contains(Point(c)))
ekle("d1923-gr-shs", GR, YU, "1918-12-01", "D", b2_dis,
     [{"ad": "Bükreş Antlaşması", "tarih": "1913-08-10", "tur": "antlaşma", "madde": "bulunamadı (madde no okunmadı)"},
      {"ad": "Sırp-Yunan Sınır Komisyonu (Selanik)", "tarih": "1913-12-07", "tur": "komisyon"},
      {"ad": "IBS No. 79 Greece–Yugoslavia", "tur": "resmî sınır çalışması", "url": IBS % 79,
       "alinti": "with few exceptions the present day"}],
     {"deger": False, "kaynak": "IBS 79", "not": "Tek bilinen istisna Gevgeli kesimi (1927) — ayrı D-YOK kaydı"},
     {"t": "1913-08/1913-12", "not": "komisyon 10 Ağu–27 Ara 1913 işaretledi; 29 Ekim 1923'te işaretliydi"},
     1.5, KES_NE, "Taraf SHS: Bükreş 1913 Sırbistan hattını SHS (1 Ara 1918) devraldı; bugün Yunanistan–K. Makedonya")
yok("d1923-gr-shs-DEGISTI-gevgeli", GR, YU, "1918-12-01", gev_kutu.bounds,
    {"deger": True, "kaynak": "IBS 79", "not": "'Sechewo köyünün hemen kuzeyi' anlaşmazlığı; kesim 1927'de çözüldü"},
    [{"ad": "IBS No. 79 Greece–Yugoslavia", "tur": "resmî sınır çalışması", "url": IBS % 79,
      "alinti": "was not settled until 1927"}],
    "kutu GeoNames Gevgelija çıpası etrafında TAHMİNİ (±5 km); taş 69'un koordinatı okunmadı")
# G1 (1918-11-11 → 1918-12-01): aynı Bükreş 1913 hattı, taraf henüz Sırbistan Krallığı
SRB = "sirbistan-kralligi"
TDV_YU = {"ad": "TDV yugoslavya", "tur": "TDV", "kaynak": "islamansiklopedisi.org.tr/yugoslavya",
          "alinti": "1 Aralık 1918'de anayasa ile yönetilen Sırp, Hırvat ve Sloven Krallığı"}
G2F = "1914-07-28"   # GERİYE SARMA G2 dalga sınırı (hat daha eskiyse öncesi G3'ün işi)
ekle("g1-gr-srb", GR, SRB, G2F, "D", b2_dis,
     [{"ad": "Bükreş Antlaşması", "tarih": "1913-08-10", "tur": "antlaşma", "madde": "bulunamadı (madde no okunmadı)"},
      {"ad": "Sırp-Yunan Sınır Komisyonu (Selanik)", "tarih": "1913-12-07", "tur": "komisyon"},
      {"ad": "IBS No. 79 Greece–Yugoslavia", "tur": "resmî sınır çalışması", "url": IBS % 79}, TDV_YU],
     {"deger": False, "kaynak": "IBS 79"},
     {"t": "1913-08/1913-12", "not": "1913 komisyonu işaretledi"},
     1.5, KES_NE,
     "GERİYE SARMA G1+G2: hat 1913'ten beri; f=1914-07-28 G2 dalga sınırıdır, öncesi G3'ün işi. t=SHS'nin kuruluşu (TDV). "
     "G2: 1915-18'de Sırbistan'ın Makedonya'sı Bulgar işgalindeydi ve Selanik cephesi bu hattın çevresinde uzanıyordu — "
     "hukukî hat DEĞİŞMEDİ; işgal/cephe hatları (D) koordinatsız olduğu için YAZILMADI",
     t="1918-12-01")
yok("g1-gr-srb-DEGISTI-gevgeli", GR, SRB, G2F, gev_kutu.bounds,
    {"deger": True, "kaynak": "IBS 79", "not": "Gevgeli anlaşmazlığı 1913'ten 1927'ye açık"},
    [{"ad": "IBS No. 79 Greece–Yugoslavia", "tur": "resmî sınır çalışması", "url": IBS % 79}],
    "GERİYE SARMA G1", t="1918-12-01")

# B3 Yunanistan–Bulgaristan (IBS 56 s.11-12): Tumba → Debikli (taş 233) 155,7 km = BÜKREŞ 1913 hattı ·
# Debikli → Küçük Derbent kuzeyi 246,3 km = NEUILLY yeni hattı · 1913 Bulgar-Türk hattı kuzeye 76,7 km ·
# Meriç 15,3 km. NE çizgisinde oranla bölünür (IBS toplam 494,0 km, NE 405,7 km).
b3 = [linemerge(cizgi("BGR-GRC"))] if len(cizgi("BGR-GRC")) > 1 else cizgi("BGR-GRC")
b3l = b3[0]
uc = "son" if b3l.coords[-1][0] > b3l.coords[0][0] else "bas"      # Türkiye üçlü noktası DOĞU uçta
meric, kara = uc_kes(b3l, 15.3, uc)
NEU = {"ad": "Neuilly Antlaşması", "madde": "md. 27(2)-(3), 42, 43", "tarih": "1919-11-27", "tur": "antlaşma metni",
       "kaynak": "wwi.lib.byu.edu/index.php/Treaty_of_Neuilly"}
BATI_TRAKYA = ("⚠️ Batı Trakya: Neuilly md. 48 bölgeyi Başlıca Müttefik Devletlere bıraktı; Sevr 10 Ağu 1920 Trakya "
               "Antlaşması'nın yürürlüğü Lozan XVI. Protokolü'yle Lozan onaylarına bağlandı ⇒ 29 Ekim 1923'te Yunan "
               "egemenliğinin antlaşma dayanağı YÜRÜRLÜKTE DEĞİLDİ (fiilen Yunan idaresi). Yürürlük günü doğrulanmadı.")
IBS56 = {"ad": "IBS No. 56 Bulgaria–Greece", "tur": "resmî sınır çalışması", "url": IBS % 56, "sayfa": "s.11-12",
         "alinti": "essentially that formed by the Treaty of Bucharest, August 10, 1913, eastward to point 1587"}
bati_oran = 155.7 / (494.0 - 15.3)
uc_bati = "son" if uc == "bas" else "bas"                           # Tumba BATI uçta
bg_bati, bg_dogu = uc_kes(kara, bati_oran * uzunluk(kara), uc_bati)
ekle("d1923-gr-bg-bati", GR, BG, G2F, "D", [bg_bati],
     [{"ad": "Bükreş Antlaşması", "madde": "md. V + ek protokol", "tarih": "1913-08-10", "tur": "antlaşma metni",
       "kaynak": "IBS 56 s.11 aktarımı"}, NEU, IBS56],
     {"deger": False, "kaynak": "IBS 56", "not": "1947 Paris 1 Ocak 1941 sınırlarını teyit etti; 1941-44 işgali geri alındı"},
     {"t": "1921", "not": "Yunan-Bulgar komisyonu (B2 kesimi, taş 1-233 arası) — hat 1913'ten beri METİNLE belirli"},
     1.5, KES_NE + " · Debikli (taş 233) ayrımı IBS uzunluk ORANIYLA (155,7/478,7) — ayrım noktası (~24,13°D) ±30 km BELİRSİZ, Debikli'nin koordinatı okunmadı",
     "GERİYE SARMA G1: Tumba→Debikli kesimi Bükreş 1913 hattıdır, Neuilly onu korudu ⇒ 1918-11-11'de de aynı iki "
     "taraf arasında geçerli. G2: 1914-1918 arasında hukukî hat DEĞİŞMEDİ (1916-18 Doğu Makedonya'nın Bulgar işgali "
     "koordinatsız ⇒ D yazılmadı). f=1914-07-28 G2 dalga sınırı; 1913-1914 G3'ün işi. ⚠️ 1913 hattının Debikli'den "
     "Ege'ye inen kolu (1913-1919 arası Yunan-Bulgar sınırı) koordinatsız ⇒ YAZILMADI")
ekle("d1923-gr-bg-dogu", GR, BG, "1921-01-01", "D", [bg_dogu],
     [NEU, IBS56,
      {"ad": "Trakya Antlaşması (Müttefikler–Yunanistan)", "tarih": "1920-08-10", "tur": "antlaşma",
       "kaynak": "treaties.fcdo.gov.uk/data/Library2/pdf/1921-TS0013.pdf"},
      {"ad": "TDV bati-trakya", "tur": "TDV", "kaynak": "islamansiklopedisi.org.tr/bati-trakya",
       "alinti": "Batı Trakya'nın Yunanlılar tarafından işgali günlerinde de (22 Mayıs 1920)"}],
     {"deger": False, "kaynak": "IBS 56", "not": "1947 Paris 1 Ocak 1941 sınırlarını teyit etti"},
     {"t": "1921", "not": "Yunan-Bulgar komisyonu 1921; Neuilly yeni hattı (246,3 km) + 1913 Bulgar-Türk hattının kuzey kolu (76,7 km)"},
     1.5, KES_NE + " · Debikli ayrımı IBS uzunluk oranıyla — ±30 km BELİRSİZ",
     "f: yalnız YIL (1921 işaretlemesi). Batı Trakya 1918-11-11'de Bulgar'dı; Fransız işgali 15 Eki 1919, Yunan işgali "
     "22 May 1920 (TDV bati-trakya) ⇒ bu hat 1921'den önce KOORDİNATLI değildi, G1'de öncesi YAZILMADI. " + BATI_TRAKYA,
     sinif="D",
     sinif_not="FİİLÎ: hat Bulgaristan için Neuilly'de kararlaştırıldı (E), ama öbür yakadaki Yunan egemenliğinin dayanağı "
               "(Trakya Antl. 1920) 1923-10-29'da yürürlükte DEĞİLDİ ⇒ Yunanistan–Bulgaristan hattı olarak D")
ekle("d1923-gr-bg-meric", GR, BG, "1923-07-24", "C", [meric],
     [{"ad": "Lozan Antlaşması", "madde": "md. 2", "tarih": "1923-07-24", "tur": "antlaşma"},
      {"ad": "IBS No. 56 Bulgaria–Greece", "tur": "resmî sınır çalışması", "url": IBS % 56,
       "alinti": "finally fixed in the Maritsa River by a demarcation commission in 1926"}],
     {"deger": False, "kaynak": "IBS 56", "not": "HUKUKÎ hüküm; nehir talvegi kayabilir (ölçülmedi)"},
     {"t": "1926", "not": "29 Ekim 1923'te yerinde sabitlenmemişti"},
     2.0, KES_NE + " · kesim sınırı IBS'in 9,5 mil (15,3 km) uzunluğuyla DOĞU uçtan kesildi (NE çizgisi üzerinde)",
     "Meriç kesimi: Lozan 24 Tem 1923'te imzalandı, yürürlüğü 1923-10-29'dan SONRA (f: imza günü, D1 ile aynı gelenek)")

# B4 Bulgaristan–SHS: D (1920-22), değişmedi
ekle("d1923-bg-shs", BG, YU, "1920-01-01", "D", cizgi("BGR-SRB", "BGR-MKD"),
     [dict(NEU, madde="md. 27(1), 28, 29, 34, 35, 37, 38"),
      {"ad": "IBS No. 130 Bulgaria–Yugoslavia", "tur": "resmî sınır çalışması", "url": IBS % 130,
       "alinti": "as it is today, was defined by the Treaty"}],
     {"deger": False, "kaynak": "IBS 130", "not": "1941-44 işgalinden sonra 1947 Paris 1919 sınırını geri getirdi"},
     {"t": "1920-1922", "not": "uluslararası komisyon, 1:25.000 29 pafta; son protokol günü bulunamadı"},
     1.5, KES_NE, "f: Neuilly yılı (yürürlük günü doğrulanmadı). Bugün Sırbistan + K. Makedonya çizgileri")

# B1 Yunanistan–Arnavutluk: C (işaretleme 1922-25 sürüyordu), hat bugünküyle aynı
ekle("d1923-gr-al", GR, AL, "1921-11-09", "C", cizgi("ALB-GRC"),
     [{"ad": "Büyükelçiler Konferansı kararı", "tarih": "1921-11-09", "tur": "karar", "madde": "yok (antlaşma değil)"},
      {"ad": "Floransa Protokolü", "tarih": "1913-12-17", "tur": "protokol", "kaynak": "ime.gr"},
      {"ad": "IBS No. 113 Albania–Greece", "tur": "resmî sınır çalışması", "url": IBS % 113,
       "alinti": "confirmed, with certain modifications, the boundary"}],
     {"deger": False, "kaynak": "IBS 113", "not": "1971'de 178 taş; ihtilaf hatla ilgili değil. 1971 sonrası bulunamadı"},
     {"t": "1922-1925", "not": "29 Ekim 1923'te işaretleme YARIMDI (Tellini 27 Ağu 1923 — tarih yalnız arama özetinden); nihai senet Paris 30 Tem 1926"},
     3.0, KES_NE + " · 1923'te yerinde işaretsiz kesimler vardı",
     "C: metin/karar belirli, yerinde tahdit bitmemişti. Prespa üçlü noktası 1926'ya kadar açık (IBS 79)")

# B5 Bulgaristan–Romanya: Tuna (Timok→Turtukaya) C; Dobruca DEĞİŞTİ (Craiova 1940)
b5 = cizgi("BGR-ROU")
tuna = parcala(b5, lambda c: c[0] < TUT[0] - 0.05)
dob_kutu = box(TUT[0] - 0.05, 43.25, 28.70, 44.20)
ekle("d1923-bg-ro-tuna", BG, RO, G2F, "C", tuna,
     [dict(NEU, madde="md. 27(5)", alinti="the principal channel of navigation of the Danube"),
      {"ad": "IBS No. 53 Bulgaria–Romania", "tur": "resmî sınır çalışması", "url": IBS % 53}],
     {"deger": False, "kaynak": "IBS 53", "not": "HUKUKÎ hüküm (ana seyir kanalı); talveg konumu kesin tarif edilemez"},
     {"t": None, "not": "nehir sınırı, işaretlenmedi"},
     2.0, KES_NE + " · 1923 Tuna kesimi Turtukaya'da (GeoNames Tutrakan) bitiyordu; doğusu 1923'te Romanya İÇİ",
     "Turtukaya–Silistre arası Tuna 1923'te iki devlet arasında DEĞİLDİ (Güney Dobruca Romanya'daydı) ⇒ kesilip çıkarıldı. "
     "GERİYE SARMA G1: f=1918-11-11 — 8 May 1918 Bükreş Antl. (IBS 53) yalnız Dobruca'yı değiştirmişti ve 'ultimate defeat of "
     "the Central Powers soon invalidated this treaty' (IBS 53 s.7; iptal GÜNÜ okunmadı). Tuna'nın Timok–Turtukaya kolu "
     "Neuilly'den önce de aynı iki devlet arasındaydı. G2: 1916-18 savaşında (Dobruca ve Eflak işgali) Tuna kolu "
     "hukuken değişmedi ⇒ f=1914-07-28 dalga sınırı; öncesi G3")
# G2 (1914-07-28 → 1920): Dobruca hattı 1913 Bükreş hattıydı (1923'le AYNI hat, ama bugünkü çizgi onu göstermez).
# 8 May 1918 Bükreş Antl. Güney + Kuzey Dobruca'nın bir kısmını Bulgaristan'a bıraktı; yürürlüğü ve 1918-1920 fiilî
# durumu ölçülemedi ⇒ YOK (koordinatsız).
yok("g2-bg-ro-DEGISTI-dobruca", BG, RO, G2F, dob_kutu.bounds,
    {"deger": True, "kaynak": "IBS 53", "not": "1913 hattı; Craiova 1940 ile değişti. 1918 Bükreş Antl. 'soon invalidated'"},
    [{"ad": "Bükreş Antlaşması", "madde": "md. II + ek protokol", "tarih": "1913-08-10", "tur": "antlaşma metni"},
     {"ad": "IBS No. 53 Bulgaria–Romania", "tur": "resmî sınır çalışması", "url": IBS % 53, "sayfa": "s.7",
      "alinti": "The Treaty of Bucharest (May 8, 1918) ceded to Bulgaria"}],
    "GERİYE SARMA G2", t="1920-01-01")
yok("d1923-bg-ro-DEGISTI-dobruca", BG, RO, "1920-01-01", dob_kutu.bounds,
    {"deger": True, "kaynak": "IBS 53", "not": "Craiova 7 Eyl 1940 md. I: Güney Dobruca Bulgaristan'a; 1947 Paris teyit"},
    [dict(NEU, madde="md. 27(5)", alinti="the frontier existing on August 1, 1914"),
     {"ad": "Bükreş Antlaşması", "madde": "md. II + ek protokol", "tarih": "1913-08-10", "tur": "antlaşma metni",
      "kaynak": "mcca.org.au (Israel 1967 / CTS 218 esaslı)", "alinti": "begin at the Danube above Turtukaia"}],
    "1923 hattı (Turtukaya üstü → Ekrene güneyi) METİN + 1:200.000 harita + köy listesiyle tarifli; yerinde işaretleme bitişi ÖLÇÜLEMEDİ ⇒ envanterde C (D adayı). Kutu Güney Dobruca'yı kaba kapsar")

# ================= İRAN · KAFKASYA =================
yok("d1923-sscb-ir-DEGISTI-aras-talis", SV, IR, "1921-02-26", (44.75, 38.35, 48.95, 39.75),
    {"deger": True, "kaynak": "IBS 25", "not": "2 Ara 1954 Tahran anl. (Mugan · Dyman · Yedi Evlar ↔ Namin; Aras'ta talveg); 11 Nis 1957 işaret; 7 May 1970 baraj gölleri"},
    [{"ad": "Türkmençay Antlaşması", "madde": "md. IV", "tarih": "1828-02-10", "tur": "antlaşma"},
     {"ad": "IBS No. 25 Iran–U.S.S.R.", "tur": "resmî sınır çalışması", "url": IBS % 25,
      "alinti": "By 1957, the boundary west of the Caspian had been demarcated"}],
    "Envanter K6 · sınıf C (1828 metni var, yerinde işaret yok). f: 1921 Sovyet-İran antlaşması (sınır hükmü getirmedi). Kutu TAHMİNİ")
yok("d1923-sscb-ir-DEGISTI-hazar-serahs", SV, IR, "1921-02-26", (53.85, 35.55, 61.30, 38.40),
    {"deger": True, "kaynak": "IBS 25", "not": "1954: Atrek deltası uzlaşma hattı, Serahs'ta küçük değişiklik; Firuze Sovyet'te kaldı"},
    [{"ad": "Ahal–Horasan Sözleşmesi", "madde": "md. I", "tarih": "1881-12-21", "tur": "sözleşme"},
     {"ad": "Tahran Sözleşmesi", "madde": "md. I–V", "tarih": "1893-06-08", "tur": "sözleşme"},
     {"ad": "Sovyet-İran Dostluk Antlaşması", "madde": "md. III", "tarih": "1921-02-26", "tur": "antlaşma",
      "not": "Firuze iadesi — UYGULANMADI (IBS 25 aktarımı; antlaşma metni okunamadı)"},
     {"ad": "IBS No. 25 Iran–U.S.S.R.", "tur": "resmî sınır çalışması", "url": IBS % 25,
      "alinti": "although actually this exchange never took place"}],
    "Envanter K7 · sınıf C. Kutu TAHMİNİ")

af = cizgi("AFG-IRN")
P39 = 34 + 20 / 60
# Güney (McMahon) kesimi: IBS 6 "182-mile southern segment", Malik Siyah → Siah Koh (Nar-i Ahu, taş 90).
# Siah Koh'un koordinatı okunmadı; Bandan köyü enlemi YANLIŞ vekil çıktı (209 km ≠ 293 km) ⇒ UZUNLUKLA kes.
afl = af[0] if len(af) == 1 else linemerge(af)
afl_uc = "bas" if afl.coords[0][1] < afl.coords[-1][1] else "son"
af_guney, af_kalan = uc_kes(afl, 182 * 1.609, afl_uc)
ekle("d1923-ir-af-kuzey", IR, AF, "1891-01-01", "D", parcala([af_kalan], lambda c: c[1] >= P39),
     [{"ad": "MacLean hakem kararı ve işaretlemesi", "tarih": "1891-01-01", "tur": "hakem kararı", "madde": "yok"},
      {"ad": "IBS No. 6 Afghanistan–Iran", "tur": "resmî sınır çalışması", "url": IBS % 6,
       "alinti": "terminate at Pillar 39 (c. 34°20' North"}],
     {"deger": False, "kaynak": "IBS 6", "not": "kuzey kesim 1935 hakem kararının dışında"},
     {"t": "1888-1891", "not": "39 sınır direği; f yalnız YIL"},
     1.5, KES_NE + " · güney ucu IBS'in 'c. 34°20′' enlemiyle kesildi (yaklaşık)")
ekle("d1923-ir-af-guney", IR, AF, "1905-05-15", "D", [af_guney],
     [{"ad": "Paris Antlaşması", "madde": "md. VI", "tarih": "1857-03-04", "tur": "antlaşma"},
      {"ad": "McMahon hakem kararı (Kasım 1903)", "tarih": "1903-01-01", "tur": "hakem kararı",
       "alinti": "thence in a straight line to Siah Koh, Bandan"},
      {"ad": "IBS No. 6 Afghanistan–Iran", "tur": "resmî sınır çalışması", "url": IBS % 6,
       "alinti": "By May 15, 1905, the McMahon Commission had placed 90 markers"}],
     {"deger": False, "kaynak": "IBS 6"},
     {"t": "1903-02/1905-05-15", "not": "90 işaret, Malik Siyah üçlü noktasından Kuh Siah'a"},
     2.0, KES_NE + " · kuzey ucu IBS'in 182 mil uzunluğuyla GÜNEY uçtan kesildi (Siah Koh koordinatı okunmadı; NE ile IBS uzunlukları farklı olabilir) · Hilmend yatağı kayabilir",
     "McMahon kararı Kasım 1903 (gün okunmadı → tarih alanı YYYY-01-01, ay metinde; §4)")
orta = parcala([af_kalan], lambda c: c[1] < P39)
yok("d1923-ir-af-FIILI-orta", IR, AF, "1905-05-15", bbox(orta, 0.08),
    {"deger": True, "kaynak": "IBS 6", "not": "Fahrettin Altay hakem heyeti Eki 1934–May 1935, karar 15 May 1935; direk 40–87"},
    [{"ad": "IBS No. 6 Afghanistan–Iran", "tur": "resmî sınır çalışması", "url": IBS % 6}],
    "Envanter I1-O · sınıf FİİLİ: 1923'te ~250 mil tanımsız ve işaretsiz (Haştadan ovası, Musa Abad)")

yok("d1923-ir-hind-BILINMIYOR", IR, IHND, "1896-03-26", bbox(cizgi("IRN-PAK"), 0.08),
    {"deger": None, "kaynak": "IBS 167",
     "not": "6 Şub 1958 Tahran anl. hattı AYNI belgelerle yeniden tanımlayıp işaretledi (direk 1–256, son protokol 8 Ara 1959); toprak aktarımı IBS'te BULUNAMADI ⇒ 'değişmedi' diyen kaynak yok"},
    [{"ad": "Holdich zaptı (İran–Kalat)", "tarih": "1896-03-26", "tur": "protokol"},
     {"ad": "IBS No. 167 Iran–Pakistan", "tur": "resmî sınır çalışması", "url": IBS % 167,
      "alinti": "did not demarcate it by pillars"}],
    "Envanter I2: direk 1–11 (Kuhak–Gorani) 1896'da işaretli = D; güney (1871) ve kuzey (direk 11 → Malik Siyah) C. Bugünkü çizgi vekil OLAMAZ çünkü degisti bilinmiyor")

# ================= IRAK · LEVANT =================
iq = cizgi("IRN-IRQ")
iql = iq[0] if len(iq) == 1 else linemerge(iq)
ucq = "bas" if iql.coords[0][1] < iql.coords[-1][1] else "son"    # Şattülarap GÜNEY uçta
SATT_KM = 105 * uzunluk(iql) / 1458                                # IBS 164 oranı NE çizgisine
satt, iqkara = uc_kes(iql, SATT_KM, ucq)
PROT = {"ad": "İstanbul Protokolü (Türk-İran tahdidi)", "tarih": "1913-11-17", "tur": "protokol",
        "not": "IBS 164 metni 17 Kas 1913, antlaşma listesi 4 Kas 1913 — ÇELİŞKİ çözülmedi (LN OJ 1935 Ek 1528 okunmadı)"}
ekle("d1923-iq-ir", IQ, IR, "1921-08-23", "D", [iqkara],
     [PROT, {"ad": "IBS No. 164 Iran–Iraq", "tur": "resmî sınır çalışması",
             "kaynak": "parstimes.com/history/iran_iraq_boundary.pdf (üçüncü taraf aynası); FSU ibs164.pdf",
             "alinti": "The boundary is demarcated throughout by pillars or rivers"}],
     {"deger": False, "kaynak": "IBS 164", "not": "1975 Cezayir/Bağdat kara hattını 1913/14 esasıyla yeniden işaretledi"},
     {"t": "1914-10", "not": "1913-14 komisyonu, direkler, 1:73.050 paftalar"},
     2.0, KES_NE + " · Şattülarap ayrımı IBS'in 105/1458 km oranıyla GÜNEY uçtan kesildi (yaklaşık)",
     "⚠️ HUKUKÎ İTİRAZ: İran Irak'ı Nisan 1929'da tanıdı (yalnız arama özeti) ve 1934-35'te protokolün geçerliliğine itiraz etti (IBS 164). "
     "f: Faysal'ın tahta çıkışı 23 Ağu 1921 (TDV irak--ulke, faysal-i)",
     sinif_not="E (F DEĞİL): hat 1913/14 protokolüyle kararlaştırıldı; Irak devri Lozan md.16 ile (yürürlük 1923-10-29'dan sonra), "
               "İran'ın Irak'ı tanıması 1929 (doğrulanmadı) ⇒ tanınma kanıtı yok")
# G1 (1918-11-11 → 1921-08-23): aynı 1913/14 hattı, hukukî taraf hâlâ Osmanlı. İngiliz işgal idaresi için künye
# YOK ⇒ fiilî (D) kaydı yazılamadı (D-KUNYE'ye bildirildi). `osmanli` C katmanının (hukuki_sinirlar.js) kullandığı kimlik.
ekle("g1-osm-ir", "osmanli", IR, G2F, "D", [iqkara],
     [PROT, {"ad": "IBS No. 164 Iran–Iraq", "tur": "resmî sınır çalışması",
             "alinti": "The boundary is demarcated throughout by pillars or rivers"},
      {"ad": "TDV irak--ulke", "tur": "TDV", "kaynak": "islamansiklopedisi.org.tr/irak--ulke",
       "alinti": "Faysal kral seçildi ve 23 Ağustos 1921'de tahta çıktı"}],
     {"deger": False, "kaynak": "IBS 164"},
     {"t": "1914-10", "not": "1913-14 komisyonu"},
     2.0, KES_NE + " · Şattülarap ayrımı IBS oranıyla (yaklaşık)",
     "GERİYE SARMA G1+G2: hukukî taraf 1921'e kadar Osmanlı'ydı. İngiliz işgali (Basra 1914'ten, Bağdat 1917'den, "
     "Mondros sonrası tümü) ve savaş yıllarındaki Rus/Osmanlı birliklerinin İran'daki hareketi hukukî hattı DEĞİŞTİRMEDİ; "
     "işgal hattı (D) künye ve koordinat olmadığı için YAZILMADI. f=1914-07-28 G2 dalga sınırı — 1913 protokolü "
     "(17 Kas 1913) ile 1914 işaretlemesi (Eki 1914'te bitti) arası G3'ün işi. t=Irak Krallığı",
     t="1921-08-23")
yok("g1-osm-ir-DEGISTI-sattularap", "osmanli", IR, G2F, bbox([satt], 0.06),
    {"deger": True, "kaynak": "IBS 164", "not": "1913 sol kıyı sınırı; 1937 ve 1975'te değişti"},
    [PROT], "GERİYE SARMA G1", t="1921-08-23")
yok("d1923-iq-ir-DEGISTI-sattularap", IQ, IR, "1921-08-23", bbox([satt], 0.06),
    {"deger": True, "kaynak": "IBS 164", "not": "1913: sol kıyı (düşük su) sınırı; 1937 Abadan önünde talveg; 1975 tamamı talveg"},
    [PROT, {"ad": "IBS No. 164 Iran–Iraq", "tur": "resmî sınır çalışması",
            "alinti": "follows the thalweg of the Shatt al Arab downstream for 105"}])

ekle("d1923-fi-lb", FI, SL, "1923-03-07", "D", cizgi("ISR-LBN"),
     [{"ad": "Fransız-İngiliz Sözleşmesi", "madde": "md. 1–2", "tarih": "1920-12-23", "tur": "antlaşma", "kaynak": "22 LNTS 353"},
      {"ad": "Paulet–Newcombe nihai komisyon raporu", "tarih": "1923-03-07", "tur": "komisyon", "kaynak": "Cmd. 1910; 22 LNTS 364"},
      {"ad": "IBS No. 75 Israel–Lebanon", "tur": "resmî sınır çalışması", "url": IBS % 75,
       "alinti": "erected in 1922 by a mixed Anglo-French commission"}],
     {"deger": False, "kaynak": "IBS 75",
      "not": "1949 mütareke hattı uluslararası sınırı izler; PalQuest ~16 km² fark bildiriyor (yeri ölçülmedi)"},
     {"t": "1922", "not": "38 kalıcı direk (Lübnan kesimi)"},
     1.5, KES_NE,
     "Bugünkü İsrail–Lübnan çizgisi vekil. f: Paris imzası 7 Mar 1923; yürürlük/toprak devri günü BULUNAMADI ('1924'te tam yürürlük' iddiası yalnız arama özeti)")
yok("d1923-fi-sy-DEGISTI", FI, SL, "1923-03-07", bbox(cizgi("ISR-SYR"), 0.10),
    {"deger": True, "kaynak": "IBS 94 + IBS 75", "not": "1949 mütareke hattı 1923 hattının biraz batısında (arama özeti); 1967'den beri Golan işgali"},
    [{"ad": "Paulet–Newcombe nihai komisyon raporu", "tarih": "1923-03-07", "tur": "komisyon", "kaynak": "Cmd. 1910"}],
    "Envanter L7 Suriye kesimi: 1923'te D (işaretli) ama bugünkü çizgi o hattı göstermez")
yok("d1923-iq-sy-DEGISTI", IQ, SL, "1921-08-23", bbox(cizgi("IRQ-SYR"), 0.10),
    {"deger": True, "kaynak": "IBS 100", "not": "bugünkü hat Milletler Cemiyeti komisyonu raporu, Cenevre 10 Eyl 1932 (Sincar)"},
    [{"ad": "Fransız-İngiliz Sözleşmesi", "tarih": "1920-12-23", "tur": "antlaşma", "kaynak": "Cmd. 1195", "madde": "bulunamadı"},
     {"ad": "IBS No. 100 Iraq–Syria", "tur": "resmî sınır çalışması", "url": IBS % 100,
      "alinti": "delimited the boundary only in general terms"}],
    "Envanter L2 · sınıf C")
yok("d1923-iq-jo-FIILI", IQ, JO, "1921-08-23", bbox(cizgi("IRQ-JOR"), 0.10),
    {"deger": True, "kaynak": "IBS 98", "not": "ilk anlaşma 31 Tem–16 Ağu 1932 mektupları"},
    [{"ad": "IBS No. 98 Iraq–Jordan", "tur": "resmî sınır çalışması", "url": IBS % 98,
      "alinti": "No specific mention was made regarding a boundary"}],
    "Envanter L3 · sınıf FİİLİ: 1923'te hukukî hat YOK")
yok("d1923-iq-necd-BILINMIYOR", IQ, SA, "1922-12-02", bbox(cizgi("IRQ-SAU"), 0.10),
    {"deger": None, "kaynak": "IBS 111", "not": "hat izi büyük ölçüde aynı (kolun özeti); Tarafsız Bölge sonradan bölündü (1975/1981 — doğrulanmadı)"},
    [{"ad": "Muhammere Antlaşması", "madde": "md. 1(b)", "tarih": "1922-05-05", "tur": "antlaşma"},
     {"ad": "Ukayr Protokolü", "madde": "md. 1(a)–(d)", "tarih": "1922-12-02", "tur": "protokol"},
     {"ad": "IBS No. 111 Iraq–Saudi Arabia", "tur": "resmî sınır çalışması", "url": IBS % 111,
      "alinti": "has not been accomplished"}],
    "Envanter L4 · sınıf C (ayrıntılı metin, işaretsiz) + Tarafsız Bölge")
yok("d1923-iq-kw-DEGISTI", IQ, KW, "1923-04-19", bbox(cizgi("IRQ-KWT"), 0.10),
    {"deger": True, "kaynak": "DoS Guidance Bulletin 13 (1994)", "not": "tarif aynı; fiziksel hat 1993 BM işaretlemesi (162 nokta)"},
    [{"ad": "Irak Yüksek Komiseri notası", "tarih": "1923-04-19", "tur": "mektup", "kaynak": "CRS 91-34 F (Prados)"},
     {"ad": "İngiliz-Osmanlı taslak sözleşmesi", "tarih": "1913-07-29", "tur": "sözleşme (onaylanmadı)"}],
    "Envanter L5 · sınıf C. Irak–Kuveyt IBS'i BULUNAMADI")
yok("d1923-sy-jo-DEGISTI", SL, JO, "1921-02-01", bbox(cizgi("JOR-SYR"), 0.10),
    {"deger": True, "kaynak": "IBS 94", "not": "bugünkü hat Paris Protokolü 31 Eki 1931"},
    [{"ad": "Fransız-İngiliz Sözleşmesi", "madde": "md. 8 (Yermük suları)", "tarih": "1920-12-23", "tur": "antlaşma"},
     {"ad": "IBS No. 94 Jordan–Syria", "tur": "resmî sınır çalışması", "url": IBS % 94,
      "alinti": "No evidence has been uncovered on demarcation"}],
    "Envanter L8 · sınıf C. f: Şarkî Ürdün Emirliği künyesinin başı")

# ---- yaz ----
ids = [k["id"] for k in KAYIT]
assert len(ids) == len(set(ids)), "mükerrer id"
for k in KAYIT:
    assert k["kategori"] == "D-YOK" or (k["hat"] and len(k["hat"]) >= 2), k["id"]
BAS = """// -*- coding: utf-8 -*-
// data/d_sinirlar_komsu.js — D KATEGORİSİ SINIRLAR · D2-KOMSU (Türkiye dışındaki komşu sınırları, 29 Ekim 1923)
// Şema denetim/SEMA-D-0916.md · envanter denetim/D2-KOMSU-0916.md
// Üretici: denetim/ARAC-D2-URET-0916.py — 🔴 ELLE DÜZENLEME, yeniden üret.
// kategori: D · C · fiili · D-YOK (bugünkü çizgi 1923'ü göstermez ya da bilinmiyor; kutuda D çizilmez)
// İÇ parçalar (Kafkas SSC'leri arası, Suriye–Lübnan) YAZILMADI: aynı atlas kimliği içinde.

window.D_SINIRLAR_KOMSU = [
"""
with io.open("data/d_sinirlar_komsu.js", "w", encoding="utf-8", newline="\n") as f:
    f.write(BAS + ",\n".join(json.dumps(k, ensure_ascii=False, separators=(",", ":")) for k in KAYIT) + "\n];\n")
from collections import Counter
print("kayıt:", len(KAYIT), "sinif:", dict(Counter(k["sinif"] for k in KAYIT)),
      "· f=G2 sınırı (1914-07-28):", sum(1 for k in KAYIT if k["f"] == G2F),
      "· g1-/g2- önekli:", sum(1 for k in KAYIT if k["id"][:3] in ("g1-", "g2-")))
for k in KAYIT:
    print(f"  {k['id']:36} {k['sinif']:4} {k['f']}→{k['t']} {k.get('uzunluk_km', '')!s:>7} {k.get('sol_taraf', '')} {k.get('kutu', '')}")
