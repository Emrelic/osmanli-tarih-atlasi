# -*- coding: utf-8 -*-
"""D4-ORTADOGU — 29 Ekim 1923 Orta Doğu / Mağrip kara sınırlarının D kayıtlarını ÜRETİR + koşu 12 ile KIYASLAR.

Çıktı : data/d_sinirlar_ortadogu.js (window.D_SINIRLAR_ORTADOGU) · denetim/OLCUM-D4-ORTADOGU-KIYAS-0916.json
Şema  : denetim/SEMA-D-0916.md (D1-TURKIYE) · envanter: denetim/D4-ORTADOGU-0916.md
Okur  : veri-kaynak/ne_10m_admin_0_countries.geojson · veri-kaynak/ne_10m_land.geojson ·
        GeoNames (çıpalar) · C:/atlas-kosu12/data (YALNIZ OKUMA — kıyas)

Yalnız geometrisi KAYNAKTAN kurulabilen parçalar yazılır. Envanterdeki C/fiili çiftlerin çoğu
(Arabistan içi · Mısır–Libya · Cezayir–Fas · İspanyol Fas · Tanca) YAZILMAZ: hat üretmek uydurma olur.

  KWT–SAU  IBS 103: Ukayr 2.12.1922. Batı düz hat (dörtlü nokta → nokta 2, 29°K) DEĞİŞMEDİ → D
           Kuveyt yarım dairesi (1913 md.5, 40 mil, Küveyt kasabası merkezli) → nokta 2'den kıyıya → D (hesap)
           Tarafsız Bölge batısı Vadi eş-Şak (nokta 2 → H) — IBS dipnot 8 "formerly part of the
           Neutral Zone–Saudi Arabia boundary" → D
           Tarafsız Bölge güneyi (eş-Şak → Ayn el-Abd → Ras Mişab'ın kuzeyi) koordinatsız → D-YOK kutu
  EGY–PSE/ISR  1906 Refah hattı; IBS 46 + RIAA XX (Taba): bugünkü hat = 1906 hattı → D
  JOR–ISR/PSE  16.9.1922 memorandumu; iç idarî hat, 1994'te yeniden sınırlandı → C (vekil)
  LBY–TUN  IBS 121: 19.5.1910 + 1910-11 dikim, taş 31-220; IBS 001: 1911 Caillaux ve 1923 Harbiye
           hatlarının İKİSİNDE de Tunus–Libya taş 220'de biter → D
  DZA–LBY  IBS 001: taş 220-233 (Fort Saint → Garet Hamel, ~14 km GB Gadames) 1956'da DEĞİŞMEDİ → D
"""
import sys, io, os, json, math
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
from shapely.geometry import shape, Point, LineString, Polygon
from shapely.ops import unary_union, linemerge, substring

K12 = r"C:\atlas-kosu12\data"
GUN = "1923-10-28"
SADE = 0.002
IBS = "https://library.law.fsu.edu/Digital-Collections/LimitsinSeas/pdf/ibs%03d.pdf"
RIAA = "https://legal.un.org/riaa/cases/vol_xx/1-118.pdf"
NE = "Natural Earth 10m admin-0 (bugünkü sınır) — kullanılabilirliği 'değişmedi' dayanağına bağlı"
KES_NE = "NE 1:10m ölçek; konum hatası ÖLÇÜLMEDİ (D-GEOARAC: ardışık nokta medyanı 2 km, çölde 50 km'ye kadar düz)"


def km(p, q):
    r = math.pi / 180
    return 6371 * math.hypot((q[0] - p[0]) * r * math.cos((p[1] + q[1]) / 2 * r), (q[1] - p[1]) * r)


def dms(d, m, s):
    return d + m / 60 + s / 3600


C = json.load(open("veri-kaynak/ne_10m_admin_0_countries.geojson", encoding="utf8"))
G = {f["properties"]["ADM0_A3"]: shape(f["geometry"]).buffer(0) for f in C["features"]
     if f["properties"]["ADM0_A3"] in ("KWT", "SAU", "EGY", "ISR", "PSX", "PSE", "GAZ", "JOR", "LBY", "TUN", "DZA")}
print("NE kodları:", sorted(G))


def hat(a, b):
    h = G[a].boundary.intersection(G[b].buffer(0.02))
    if h.geom_type == "MultiLineString":
        h = linemerge(h)
    return [g for g in getattr(h, "geoms", [h]) if g.geom_type == "LineString" and g.length > 0.01]


def tek(parcalar):
    """Parçaları uç uca birleştir; tek LineString bekler."""
    u = unary_union(parcalar)
    m = linemerge(u) if u.geom_type == "MultiLineString" else u
    gs = [g for g in getattr(m, "geoms", [m])]
    return max(gs, key=lambda g: g.length), gs


def yonle(ls, bas):
    """Çizgiyi `bas` noktasına yakın uçtan başlat."""
    c = list(ls.coords)
    return ls if km(c[0], bas) <= km(c[-1], bas) else LineString(c[::-1])


def sol_nokta(ls):
    m = ls.interpolate(0.5, normalized=True)
    p0 = ls.interpolate(max(0, ls.project(m) - 0.005))
    p1 = ls.interpolate(min(ls.length, ls.project(m) + 0.005))
    dx, dy = p1.x - p0.x, p1.y - p0.y
    n = math.hypot(dx, dy) or 1
    return Point(m.x - dy / n * 0.03, m.y + dx / n * 0.03)


def dizi(g):
    g = g.simplify(SADE, preserve_topology=False)
    return [[round(x, 4), round(y, 4)] for x, y in g.coords]


def uzun(ls):
    c = list(ls.coords)
    return round(sum(km(c[i], c[i + 1]) for i in range(len(c) - 1)), 1)


KAYIT = []


def ekle(id_, taraflar, f, t, kategori, ls, sol, dayanak, degisti, tahdit, kes, kes_not, geo, not_="", **ek):
    r = {"id": id_, "taraflar": taraflar, "f": f, "t": t, "kategori": kategori, "sol_taraf": sol,
         "hat": dizi(ls), "uzunluk_km": uzun(ls), "geometri_kaynagi": geo, "degisti": degisti,
         "tahdit": tahdit, "kesinlik_km": kes, "kesinlik_not": kes_not, "dayanak": dayanak, "not": not_}
    r.update(ek)
    KAYIT.append(r)


# ─────────────────────────── A1 · NECİD–KÜVEYT (Ukayr 1922) ───────────────────────────
KUV, SUUD = "kuveyt", "suud-ucuncu"
N2 = (dms(47, 28, 5.683), 29.0)               # IBS 103: nokta 2
NH = (dms(47, 42, 25.153), dms(28, 31, 26.526))  # IBS 103: nokta H
MERKEZ = (47.97429, 29.367)                   # GeoNames 285787 Kuwait City (PPLC) — "town of Kuwait" vekili
R_KM = 40 * 1.609344                          # 1913 md.5: 40 mil
RAS_KALIA = (48.29167, 28.875)                # GeoNames Ra's al Qulay'ah (CAPE)
DAYANAK_UKAYR = [
    {"ad": "Ukayr Protokolü (Uqair Convention)", "tarih": "1922-12-02", "tur": "antlaşma metni (İngilizce çevirisi IBS 103'te)",
     "url": IBS % 103, "sayfa": "s.4", "alinti": "begins in the west from the junction of the Wadi al 'Awja' with Wadi al Batin"},
    {"ad": "IBS No. 103 Kuwait–Saudi Arabia (1970)", "sayfa": "s.2-8", "tur": "resmî sınır çalışması", "url": IBS % 103},
    {"ad": "TDV kuveyt", "tur": "TDV", "alinti": "Suudi Arabistan ile antlaşma imzalayarak (2 Aralık 1922) sınır meselelerini halletti"},
]
ks, _ = tek(hat("KWT", "SAU"))
ks = yonle(ks, (46.55, 29.1))                  # batı ucu (dörtlü nokta) başa
d2 = ks.project(Point(N2))
dH = ks.project(Point(NH))
DORTLU = ks.coords[0]                          # NE batı ucu = KWT–IRQ–SAU(–Irak Tarafsız B.) dörtlü noktası vekili
# IBS 103 s.2: "a straight line east-southeast … to the intersection of 29° 00' North" ⇒ düz, uç IBS koordinatı
bati = LineString([DORTLU, N2])
# nokta 2 → H: "south-southeastward in straight line segments" — ara köşeler NE'den, uçlar IBS koordinatı
ara = [c for c in substring(ks, d2, dH).coords][1:-1]
sak = LineString([N2] + ara + [NH])
print(f"KWT-SAU: NE toplam {uzun(ks)} km · NE'nin nokta 2'ye sapması {ks.distance(Point(N2))*111:.2f} km · H'ye {ks.distance(Point(NH))*111:.2f} km"
      f" · batı düz hat {uzun(bati)} km (IBS 39,5 mil = 63,6 km) · eş-Şak {uzun(sak)} km (IBS ~28 mil = 45 km)")
ekle("d1923-necid-kuveyt-bati", [SUUD, KUV], "1922-12-02", "1923-10-29", "D", bati, KUV, DAYANAK_UKAYR,
     {"deger": False, "kaynak": "IBS 103 s.4-5",
      "not": "dörtlü nokta → nokta 2 (29°K) düz hattı 1969 bölüşmesinin DIŞINDA; nokta 2 1969'da 29°00'00\"K 47°28'05.683\"D olarak sabitlendi"},
     {"t": "1969-12-18", "not": "1922'de yerinde işaret YOK; IBS 103 'demarcated' diyor, işaretleme 1965-69 komisyonu"},
     2.0, "iki uçlu DÜZ hat: doğu ucu IBS 103 nokta 2 (kesin); batı ucu NE dörtlü noktası — Avca × Bâtın kavşağının gerçek yeri ÖLÇÜLMEDİ",
     "IBS 103 metninden düz hat (NE batı ucu → IBS nokta 2)")

# Kuveyt yarım dairesi: nokta 2'den kıyıya (Ras el-Kalia'nın güneyi)
kara = unary_union([shape(f["geometry"]) for f in json.load(open("veri-kaynak/ne_10m_land.geojson", encoding="utf8"))["features"]
                    if shape(f["geometry"]).intersects(Point(MERKEZ).buffer(2))])
cosm = math.cos(math.radians(MERKEZ[1]))


def daire(aci):  # aci: doğudan saat yönü tersine radyan
    return (MERKEZ[0] + R_KM * math.cos(aci) / (111.32 * cosm), MERKEZ[1] + R_KM * math.sin(aci) / 110.57)


a0 = math.atan2((N2[1] - MERKEZ[1]) * 110.57, (N2[0] - MERKEZ[0]) * 111.32 * cosm)
yay = []
a = a0
while True:
    p = daire(a)
    if yay and not kara.contains(Point(p)):
        break
    yay.append(p)
    a += math.radians(0.25)                   # saat yönü tersi: güneybatıdan güneydoğuya
    if a > a0 + math.pi:
        raise SystemExit("yay kıyıya ulaşmadı")
yay_ls = LineString(yay)
kiyi_uc = yay[-1]
print(f"yay: merkez→nokta2 {km(MERKEZ, N2):.2f} km (40 mil = {R_KM:.2f}) · kıyı ucu {kiyi_uc[1]:.4f}K {kiyi_uc[0]:.4f}D · "
      f"Ras el-Kalia'ya {km(kiyi_uc, RAS_KALIA):.1f} km · uç kalianın {'GÜNEYİNDE' if kiyi_uc[1] < RAS_KALIA[1] else 'KUZEYİNDE'}")
ekle("d1923-necid-kuveyt-yay", [KUV, SUUD], "1922-12-02", "1923-10-29", "D", yay_ls,
     KUV if Point(MERKEZ).distance(sol_nokta(yay_ls)) < Point(MERKEZ).distance(yay_ls) else SUUD, DAYANAK_UKAYR + [
         {"ad": "İngiliz-Osmanlı Sözleşmesi", "madde": "md. 5 (kırmızı yarım daire)", "tarih": "1913-07-29", "tur": "antlaşma (ONAYLANMADI — geometrisi Ukayr'ın atfıyla bağlayıcı)",
          "kaynak": "IBS 103 s.3", "alinti": "a semi-circle, 40 miles in radius, with the town of Kuwait"}],
     {"deger": True, "kaynak": "IBS 103 s.5",
      "not": "yay 1969'da uluslararası sınır olmaktan çıktı (Tarafsız Bölge'nin kuzey yarısı Kuveyt'e katıldı); bugün iç hat"},
     {"t": None, "not": "1922'de işaretsiz; yay hiç işaretlenmedi (IBS'te iz yok)"},
     3.0, "HESAP: merkez GeoNames Kuwait City (PPLC) — 1913'teki 'town of Kuwait' ile farkı ölçülmedi; yarıçap merkez→nokta 2 ölçümüyle 0,5 km tutarlı",
     "hesap: 1913 md.5 yarım dairesi (40 mil) · nokta 2'den (IBS 103) NE kara maskesinin kıyısına",
     "Güney yakası Necid DEĞİL, Tarafsız Bölge (iki tarafın eşit hakkı) — `ortak_alan` alanına bakın",
     cins="ortak_alan_siniri", ortak_alan="necid-kuveyt-tarafsiz-bolge")
ekle("d1923-necid-kuveyt-tarafsiz-bati", [SUUD, KUV], "1922-12-02", "1923-10-29", "D", sak, None, DAYANAK_UKAYR + [
         {"ad": "Ukayr Protokolü", "madde": "Tarafsız Bölge tarifi", "tarih": "1922-12-02", "tur": "antlaşma metni", "url": IBS % 103,
          "sayfa": "s.4", "alinti": "bounded on the west by a low mountainous ridge called Ash Shaq"}],
     {"deger": False, "kaynak": "IBS 103 s.5 dipnot 8",
      "not": "nokta 2 → H kesimi Vadi eş-Şak üzerinde: 'Formerly part of the Neutral Zone - Saudi Arabia boundary'; H 1969'da sabitlendi"},
     {"t": "1969-12-18", "not": "1922'de işaretsiz"},
     3.0, KES_NE + " · uçlar IBS 103 koordinatına oturtuldu (NE sapması çıktıda) · IBS eş-Şak'ın sırt değil çöküntü olduğunu not ediyor",
     NE + " — nokta 2 → H ara köşeleri; uçlar IBS 103",
     "Doğu yakası Tarafsız Bölge (ortak hak), batı yakası Necid. sol_taraf null: yakalardan biri tek devlet değil.",
     cins="ortak_alan_siniri", ortak_alan="necid-kuveyt-tarafsiz-bolge", sag_taraf=SUUD)
KAYIT.append({"id": "d1923-necid-kuveyt-tarafsiz-guney", "taraflar": [SUUD, KUV], "f": "1922-12-02", "t": "1923-10-29",
              "kategori": "D-YOK", "hat": None, "kutu": [47.40, 27.90, 48.70, 28.56],
              "degisti": {"deger": True, "kaynak": "IBS 103 s.5", "not": "Tarafsız Bölge 1969'da bölündü; güney hattı bugün Suudi Arabistan'ın İÇİNDE"},
              "kesinlik_km": None,
              "kesinlik_not": "kutu GeoNames çıpalı (Vadi eş-Şak 27.976K/47.885D · Mînâ Ras Mişab 28.109K/48.625D · H) ama köşeleri TAHMİNİ",
              "dayanak": [{"ad": "Ukayr Protokolü", "madde": "Tarafsız Bölge tarifi", "tarih": "1922-12-02", "tur": "antlaşma metni",
                           "url": IBS % 103, "sayfa": "s.4", "alinti": "from Ash Shaq to 'Ayn al 'Abd and thence to the coast"}],
              "not": "1922 metni güney hattını ADLI NOKTALARLA veriyor (eş-Şak → Ayn el-Abd → Ras Mişab'ın kuzeyi) ama Ayn el-Abd'in koordinatı BULUNAMADI (GeoNames'te yok) ⇒ bu kutuda D ÇİZİLMEZ. Kutu, Tarafsız Bölge'nin H güneyindeki yarısını kaplar.",
              "cins": "ortak_alan_siniri", "ortak_alan": "necid-kuveyt-tarafsiz-bolge"})

# ─────────────────────────── L1 · FİLİSTİN–MISIR (1906) ───────────────────────────
FIL, MIS = "filistin-mandasi", "misir-kralligi"
pal = [k for k in ("ISR", "PSX", "PSE", "GAZ") if k in G]
em, _ = tek([p for k in pal for p in hat("EGY", k)])
em = yonle(em, (34.90, 29.49))                 # Taba ucu başa
ekle("d1923-filistin-misir", [MIS, FIL], "1922-03-15", "1923-10-29", "D", em,
     MIS if G["EGY"].contains(sol_nokta(em)) else FIL,
     [{"ad": "Refah (Osmanlı–Mısır) Anlaşması", "madde": "md. 1", "tarih": "1906-10-01", "tur": "antlaşma metni",
       "url": RIAA, "sayfa": "Ek B s.114-116", "alinti": "administrative separating line"},
      {"ad": "Taba hakem kararı (Mısır–İsrail)", "tarih": "1988-09-29", "tur": "uluslararası hakem kararı", "url": RIAA,
       "sayfa": "§54-59, §172, §245", "alinti": "no boundaries had been established"},
      {"ad": "IBS No. 46 Israel–Egypt (1965)", "tur": "resmî sınır çalışması", "url": IBS % 46}],
     {"deger": False, "kaynak": "RIAA XX (1988) + IBS 46",
      "not": "1979 barış antlaşması md.II hattı 1906 hattı olarak tanıdı; 1988 kararı ihtilaflı 14 sütunu (Taba = BP 91 Mısır'ın gösterdiği yer) kesinleştirdi; Gazze kesimi aynı hat"},
     {"t": "1906-12-31/1907-02-09", "not": "91 kâgir sütun karşılıklı dikildi (RIAA §54-58); 1909 ve 1911'de ortak tamir. 29 Ekim 1923'te ZATEN işaretliydi"},
     1.5, KES_NE + " · Taba ucu 1988 kararına göre (NE'nin Taba noktası ölçülmedi)", NE + " — EGY ile İsrail+Gazze birleşik",
     "Saha hattı kesin ve 1923'te ihtilafsız; ama Mısır Krallığı ile manda devleti arasında hukukî teyit YOK — 'uluslararası sınır' statüsü 1926 İngiliz–Mısır mektuplarıyla geldi (RIAA §76) ⇒ sinif D (fiilî kesin). f = Mısır Krallığı künyesi; Filistin mandası 29.09.1923'te yürürlüğe girdi (RIAA §172).")
# G1 (1918-11-11 → 1922-03-15): aynı 1906 hattı, taraflar farklı — sinif D (fiilî kesin, hukukî teyit yok)
DAY_FIL_G1 = [KAYIT[-1]["dayanak"][0],
              {"ad": "TDV filistin", "tur": "TDV", "url": "https://islamansiklopedisi.org.tr/filistin",
               "alinti": "1917'den itibaren Filistin'de askerî bir idare kuruldu"}]
ekle("d1917-filistin-misir-askeri-idare", ["misir-sultanligi", "ingiltere"], "1917-10-31", "1920-07-01", "D", em,
     "misir-sultanligi" if G["EGY"].contains(sol_nokta(em)) else "ingiltere",
     DAY_FIL_G1 + [{"ad": "TDV filistin", "tur": "TDV", "url": "https://islamansiklopedisi.org.tr/filistin",
                    "alinti": "31 Ekim 1917'de Mareşal Allenby kumandasındaki İngiliz ordusu … Bi'rüssebi' yöresini ele geçirdi"},
                   {"ad": "TDV gazze", "tur": "TDV", "url": "https://islamansiklopedisi.org.tr/gazze",
                    "alinti": "1917'de General Allenby Gazze'yi aldı"}],
     {"deger": False, "kaynak": "RIAA XX + IBS 46", "not": "hat 1906'dan bugüne aynı"},
     {"t": "1906-12-31/1907-02-09", "not": "91 sütun"},
     1.5, KES_NE, NE + " — EGY ile İsrail+Gazze birleşik",
     "Filistin yakası İngiliz askerî idaresi (OETA; ayrı künye YOK → `ingiltere`). Hukuken hâlâ Osmanlı toprağı (Lozan 1924'te yürürlüğe girdi) ⇒ D. "
     "🔴 f günü: Birüssebi'nin alınışı (TDV, gün var) — hattın doğu yakasındaki Osmanlı savunmasının çöktüğü gün; Gazze'nin günü TDV'de YOK ('1917'), "
     "Akabe Temmuz 1917'den beri Hicaz elinde (RIAA §66). Başlangıç ±1 hafta. Öncesi (1914-12-18 → 1917-10-31) CEPHE: kesin hat yok → kayıt yok (A/B).")
ekle("d1906-filistin-misir-hidivlik", ["misir-kavalali", "osmanli"], "1906-10-01", "1914-12-18", "E", em,
     "misir-kavalali" if G["EGY"].contains(sol_nokta(em)) else "osmanli",
     DAY_FIL_G1[:1] + [{"ad": "TDV misir", "tur": "TDV", "url": "https://islamansiklopedisi.org.tr/misir",
                        "alinti": "18 Aralık 1914'te tek taraflı olarak Osmanlı hükümranlık haklarını kaldırıp"}],
     {"deger": False, "kaynak": "RIAA XX + IBS 46", "not": "hat 1906'dan bugüne aynı"},
     {"t": "1906-12-31/1907-02-09", "not": "91 sütun; 1909 ve 1911 ortak Osmanlı–Mısır tamiri (RIAA §59)"},
     1.5, KES_NE, NE + " — EGY ile İsrail+Gazze birleşik",
     "Osmanlı hükümeti ile Hidiv hükümeti arasında 1906'da kararlaştırılıp birlikte işaretlenmiş hat ⇒ E. Ama Mısır hukuken Osmanlı'nın İMTİYAZLI EYALETİ "
     "(ve 1882'den beri İngiliz işgalinde) ⇒ hat bir 'idarî ayırma hattı'dır (anlaşmanın kendi adı), iki bağımsız devlet arasında değil. "
     "f = Refah Anlaşması günü (RIAA XX Ek B); sütunlar 31.12.1906-9.2.1907 dikildi, hat o güne kadar METİNLE belirliydi. "
     "Öncesi (1892 fermanı / 1906 Akabe-Taba bunalımı) kaba ya da ihtilaflı → kayıt yok. t = İngiliz himayesinin ilânı (TDV).",
     cins="idari_ic_hat")
ekle("d1920-filistin-misir-manda", ["misir-sultanligi", FIL], "1920-07-01", "1922-03-15", "D", em,
     "misir-sultanligi" if G["EGY"].contains(sol_nokta(em)) else FIL,
     DAY_FIL_G1[:1] + [{"ad": "TDV filistin", "tur": "TDV", "url": "https://islamansiklopedisi.org.tr/filistin",
                        "alinti": "Temmuz 1920 tarihinden itibaren Filistin'de bir sivil manda yönetimi kurdu"},
                       {"ad": "TDV misir", "tur": "TDV", "url": "https://islamansiklopedisi.org.tr/misir",
                        "alinti": "Sultan Ahmed Fuâd 15 Mart 1922'de kral (melik) unvanını aldı"}],
     {"deger": False, "kaynak": "RIAA XX + IBS 46", "not": "hat 1906'dan bugüne aynı"},
     {"t": "1906-12-31/1907-02-09", "not": "91 sütun"},
     1.5, KES_NE, NE + " — EGY ile İsrail+Gazze birleşik",
     "🔴 f günü: TDV yalnız 'Temmuz 1920' diyor; ayın 1'i filistin-mandasi künyesinden DEVRALINDI (CLAUDE.md §4 künye penceresi kuralı) ve künyenin günü de kaynaksız. "
     "Manda henüz yürürlükte değil (29.09.1923), Mısır İngiliz himayesinde ⇒ D.")

# ─────────────────────────── A–F SINIF (GORUNUM-ABCD-0916 en üst bölüm) ───────────────────────────
# eşleme: D→E (F kanıtı gelene kadar; denetim/TANINMA-1923-0916.json YOK) · fiili→D · C→C · D-YOK→YOK
# istisna: Filistin–Mısır ailesi D (koordinat kesin, hukukî teyit 1926)
SINIF_OZEL = {"d1923-filistin-misir": "D", "d1917-filistin-misir-askeri-idare": "D", "d1920-filistin-misir-manda": "D",
              "d1906-filistin-misir-hidivlik": "E"}
ESLEME = {"D": "E", "fiili": "D", "C": "C", "D-YOK": "YOK", "E": "E"}

# ─────────────────────────── L2 · FİLİSTİN–ŞARKÎ ÜRDÜN (1922) ───────────────────────────
URD = "urdun-emirligi"
ju, jparca = tek([p for k in pal for p in hat("JOR", k)])
ju = yonle(ju, (34.98, 29.5))                  # Akabe ucu başa
print(f"JOR–Filistin: {len(jparca)} parça, en uzunu {uzun(ju)} km alındı")
ekle("d1923-filistin-urdun", [FIL, URD], "1922-09-16", "1923-10-29", "C", ju,
     URD if G["JOR"].contains(sol_nokta(ju)) else FIL,
     [{"ad": "Şarkî Ürdün memorandumu (Filistin mandası md.25)", "tarih": "1922-09-16", "tur": "Milletler Cemiyeti Konseyi kararı",
       "kaynak": "League of Nations, Mandate for Palestine and Memorandum (1922) — palquest.org/en/historictext/37961",
       "alinti": "a point two miles west of the town of Akaba"},
      {"ad": "İsrail–Ürdün Barış Antlaşması", "madde": "md. 3 + Ek I", "tarih": "1994-10-26", "tur": "antlaşma metni",
       "url": "https://avalon.law.yale.edu/20th_century/jordan_treaty.asp"}],
     {"deger": True, "kaynak": "1994 antlaşması md.3/1",
      "not": "1994'te manda tanımına ATIFLA koordinatlarla yeniden sınırlandırıldı (Batı Şeria kesiminde 1967 statüsü saklı); geometri 1922 tarifinin VEKİLİ"},
     {"t": None, "not": "Manda döneminde sahada işaret YOK; Vadi Arabe'nin 'ortası' tanımsızdı"},
     5.0, "iç idarî hat · 1994 çizgisi ile 1922 tarifi (Arabe/Lut/Şeria/Yermük ortası) arasındaki sapma ÖLÇÜLMEDİ · Yermük ucu Suriye sınırında kesilmedi",
     NE + " — JOR ile İsrail+Batı Şeria birleşik; en uzun parça",
     "AYNI mandanın iç idarî hattı — uluslararası sınır değil. Ümmürreşraş (Eilat) kâğıt üzerinde Filistin tarafında (1906 Ras Taba ile 1922 'Akabe'nin 2 mil batısı' arası — ÇIKARIM).",
     cins="idari_ic_hat")

# ─────────────────────────── M1 · LİBYA–TUNUS / M2a · LİBYA–CEZAYİR (1910) ───────────────────────────
ITA, TUN, CEZ = "italya", "tunus-beyligi-fransiz", "cezayir-fransiz"
DAY_1910 = [
    {"ad": "Trablus Sözleşmesi (Fransız–Osmanlı)", "madde": "md. 1-2", "tarih": "1910-05-19", "tur": "antlaşma metni",
     "kaynak": "Martens, Nouveau Recueil Général, 3. seri c.VII s.91-93 (IBS 121 aktarımı)", "url": IBS % 121,
     "alinti": "shall start at Ras Adjedir, on the Mediterranean"},
    {"ad": "IBS No. 121 Libya–Tunisia (1972)", "sayfa": "s.2-5", "tur": "resmî sınır çalışması", "url": IBS % 121,
     "alinti": "consists primarily of short-line segments between pillars"},
    {"ad": "IBS No. 001 Algeria–Libya (1961)", "sayfa": "s.2, s.6", "tur": "resmî sınır çalışması", "url": IBS % 1,
     "alinti": "terminating the Tunisia - Libya boundary at Marker 220 rather than number 233"},
]
lt, _ = tek(hat("LBY", "TUN"))
lt = yonle(lt, (11.57, 33.17))                 # Ras Ecdir başa
ekle("d1923-libya-tunus", [ITA, TUN], "1912-10-18", "1923-10-29", "D", lt,
     TUN if G["TUN"].contains(sol_nokta(lt)) else ITA, DAY_1910,
     {"deger": False, "kaynak": "IBS 121 s.4", "not": "'delimits the present Libya-Tunisia boundary'; üçlü nokta bugün taş 220-221 arası (~30°13,5'K 9°33,5'D)"},
     {"t": "1910-1911", "not": "karma komisyon taş 31-233; 81 no. muhtemelen dikilmedi. 29 Ekim 1923'te ZATEN işaretliydi"},
     2.0, KES_NE, NE,
     "🔴 Libya kimliği: devletler.js'te İtalyan Libyası künyesi YOK (D-KUNYE M-4074) — geçici olarak `italya`. f = Uşi Antlaşması 18 Ekim 1912 (TDV trablusgarp-savasi: '18 Ekim'de … Uşi (Ouchy) kasabasında … nihaî bir barış antlaşması'; IBS 121 '12 Ekim' yazıyor — TDV esas). ⚠️ Sözleşme günü: IBS 121 '19 May 1910', IBS 001 '12 May 1910'. Tunus–Libya'nın taş 220'de bittiği 1911 Caillaux ve 1923 Harbiye hatlarının İKİSİNDE de geçerli (IBS 001 s.6).")
dl, _ = tek(hat("DZA", "LBY"))
GAD = (9.50072, 30.13366)                      # GeoNames 2217440 Ghadames
dl = yonle(dl, (9.55, 30.23))                  # kuzey (üçlü nokta) başa
# taş 233: "approximately fourteen kilometres south-west of Ghadames" (UNTS c.300 aktarımı, IBS 001 s.4)
#   ⇒ NE çizgisi Gadames'ten GÜNEYBATIYA (225°) çıkan ışınla kesilir
cosg = math.cos(math.radians(GAD[1]))
isin = LineString([GAD, (GAD[0] - 40 / math.sqrt(2) / (111.32 * cosg), GAD[1] - 40 / math.sqrt(2) / 110.57)])
kx = dl.intersection(isin)
kx = min(getattr(kx, "geoms", [kx]), key=lambda g: dl.project(g))
d233 = substring(dl, 0, dl.project(kx))
uc = d233.coords[-1]
print(f"DZA-LBY taş 220→233: {uzun(d233)} km · uç {uc[1]:.4f}K {uc[0]:.4f}D · Gadames'e {km(uc, GAD):.1f} km (IBS 001: 'yaklaşık 20 mil yarım daire')")
ekle("d1923-libya-cezayir-gadames", [ITA, CEZ], "1912-10-18", "1923-10-29", "D", d233,
     CEZ if G["DZA"].contains(sol_nokta(d233)) else ITA,
     DAY_1910 + [{"ad": "Fransız–Libya Anlaşması (A–T noktaları)", "tarih": "1956-12-26", "tur": "antlaşma (UNTS c.300 s.288-291, IBS 001 aktarımı)",
                  "url": IBS % 1, "sayfa": "s.4", "alinti": "the frontier mark situated at Garet Hamel, approximately fourteen kilometres south-west of Ghadames"}],
     {"deger": False, "kaynak": "IBS 001 s.2, s.6", "not": "'The status of the boundary between Fort Saint and Ghudamis is unchanged' — 1956 değişikliği taş 233'ÜN GÜNEYİNDE"},
     {"t": "1910-1911", "not": "taş 220-233; yerleri UNTS c.300 s.290-291'de (AÇILMADI)"},
     5.0, KES_NE + " · NE yarım dairesi IBS'ninkinden geniş (uç Gadames'e ~18 km, IBS ~13-14 km; kesim ~41 km, IBS ~20 mil=32 km) · güney ucu (taş 233) NE çizgisinin Gadames'ten 225° ışınıyla kesiştiği yerde kesildi ('yaklaşık 14 km güneybatı') — gerçek taş koordinatı okunmadı",
     NE + " — kuzey uçtan taş 233'e kadar",
     "Libya kimliği geçici `italya` (bkz. d1923-libya-tunus). 1923'te bu kesim Tunus'un değil Cezayir'in (1911 Caillaux + 1923 Harbiye hattı, IBS 001 s.6); Tunus 1959'dan beri itiraz ediyor.")
# G3: aynı iki kesim, Uşi'den (1912-10-18) önce Osmanlı Trablusgarp'ı ile
DAY_USI = {"ad": "TDV trablusgarp-savasi", "tur": "TDV", "url": "https://islamansiklopedisi.org.tr/trablusgarp-savasi",
           "alinti": "18 Ekim'de Lozan yakınlarındaki Uşi (Ouchy) kasabasında … nihaî bir barış antlaşması"}
ekle("d1910-libya-tunus-osmanli", ["osmanli", TUN], "1910-05-19", "1912-10-18", "D", lt,
     TUN if G["TUN"].contains(sol_nokta(lt)) else "osmanli", DAY_1910 + [DAY_USI],
     {"deger": False, "kaynak": "IBS 121 s.4", "not": "1910 hattı bugünkü Libya–Tunus sınırı"},
     {"t": "1910-1911", "not": "karma komisyon taş 31-233; sözleşme günü hat METİNLE belirliydi"},
     2.0, KES_NE, NE,
     "Fransız–Osmanlı sözleşmesi ('Regency of Tunis' – 'Vilayet of Tripoli') ⇒ E. ⚠️ Gün: IBS 121 + Martens '19 May 1910', IBS 001 '12 May 1910' — 19 esas. "
     "⚠️ Fransa içi ihtilaf: 1910'da Zar'ın güneyi Cezayir sayılıyordu; Tunus'un taş 220'ye kadar koridoru 1911 Caillaux kararıyla (gün BULUNAMADI) — "
     "sözleşmenin kendi başlığı Tunus dediği için kesim Tunus'a yazıldı. Eylül 1911'den itibaren İtalyan işgali kıyıda; hukukî taraf Uşi'ye kadar Osmanlı.",
     sinif_zorla="E")
ekle("d1910-libya-cezayir-gadames-osmanli", ["osmanli", CEZ], "1910-05-19", "1912-10-18", "D", d233,
     CEZ if G["DZA"].contains(sol_nokta(d233)) else "osmanli", DAY_1910 + [DAY_USI],
     {"deger": False, "kaynak": "IBS 001 s.2, s.6", "not": "taş 220-233 kesimi 1956'da değişmedi"},
     {"t": "1910-1911", "not": "taş 220-233; yerleri UNTS c.300 s.290-291 (AÇILMADI)"},
     5.0, KES_NE + " · güney ucu Gadames'in 225° ışını (taş 233 vekili)", NE + " — kuzey uçtan taş 233'e kadar",
     "Fransız–Osmanlı 1910 sözleşmesi ⇒ E. IBS 001: Fransız delegeler Tunus ve Cezayir ADINA birlikte hareket etti; bu kesim Cezayir'in.",
     sinif_zorla="E")

for r in KAYIT:
    r["sinif"] = r.pop("sinif_zorla", None) or SINIF_OZEL.get(r["id"], ESLEME[r["kategori"]])
    if r["sinif"] == "E":
        r["sinif_not"] = "F adayı değerlendirilmedi: D-KUNYE tanınma tablosu (denetim/TANINMA-1923-0916.json) henüz yok — E yazıldı"
    elif r["id"] in SINIF_OZEL:
        r["sinif_not"] = "koordinat kesin, iki taraf arasında hukukî teyit yok (1926 İngiliz–Mısır mektupları öncesi) ⇒ D"
    r["kategori_tarihi"] = True   # `kategori` ESKİ anlamıyla duruyor; bağlayıcı alan `sinif`

# ─────────────────────────── KRONOLOJİ (G1 dalgası: 1918-11-11 → 1923-10-29) ───────────────────────────
KRON = [
    {"t": "1920-07-01", "devlet": FIL, "taraflar": [FIL, "misir-sultanligi"],
     "b": "Filistin'de sivil manda yönetimi — Refah (1906) hattının Filistin yakası askerî idareden çıkıyor",
     "tur": "idari", "onem": 3, "dunya": 2, "kapsam": "dis", "yer_id": "",
     "etiket": ["idari", "sinir", FIL, "misir-sultanligi", "konu-siyasi", "konu-idari"],
     "d": "İngiltere, 1917'den beri askerî idare altında tuttuğu Filistin'de Temmuz 1920'de bir yüksek komiser eliyle sivil manda yönetimi kurdu. "
          "Mısır ile arasındaki sınır, 1906'da Osmanlı ve Mısır komiserlerinin sütunlarla işaretlediği Refah–Taba hattı olarak kaldı; "
          "hat fiilen kesin ama Mısır ile manda devleti arasında henüz hukuken teyit edilmiş değildi. "
          "Kaynak yalnız ayı veriyor; ayın 1'i manda künyesinden alınmıştır.",
     "kaynak": "TDV filistin ('Temmuz 1920 tarihinden itibaren … sivil manda yönetimi') · Taba hakem kararı RIAA XX §54-59",
     "sinir_id": ["d1917-filistin-misir-askeri-idare", "d1920-filistin-misir-manda"], "sinif": "D"},
    # ── G2 (1914-07-28 → 1918-11-11) ──
    {"t": "1914-12-18", "devlet": "misir-sultanligi", "taraflar": ["misir-sultanligi", "osmanli"],
     "b": "İngiltere Mısır'da Osmanlı hükümranlığını kaldırdı — Refah (1906) hattının Osmanlı–Mısır hukukî dayanağı düştü",
     "tur": "siyaset", "onem": 4, "dunya": 3, "kapsam": "dis", "yer_id": "",
     "etiket": ["siyaset", "sinir", "misir-sultanligi", "osmanli", "misir-kavalali", "konu-siyasi"],
     "d": "Osmanlı Devleti'nin savaşa girmesinin ardından İngiltere, 18 Aralık 1914'te Mısır üzerindeki Osmanlı hükümranlık haklarını tek taraflı olarak kaldırıp "
          "ülkeyi himayesine aldı. Osmanlı ile Hidiv hükümetinin 1906'da birlikte çizip işaretlediği Refah–Taba hattı artık iki tarafın ortak kabulüne dayanmıyordu; "
          "sonraki üç yıl bu hat bir cephe hattına dönüştü ve Osmanlı kuvvetleri Sina'ya ilerleyip iki kez Süveyş Kanalı'nı geçmeye çalıştı.",
     "kaynak": "TDV misir ('18 Aralık 1914'te tek taraflı olarak Osmanlı hükümranlık haklarını kaldırıp' · Cemal Paşa'nın iki kanal harekâtı) · RIAA XX §54-59",
     "sinir_id": ["d1906-filistin-misir-hidivlik"], "sinif": "E→YOK"},
    # ── G8 (1606-11-11 → 1526-08-29) — sayım: 22 adayın 19'u atlasta VAR (denetim/ARAC-D4-G8G10-SAYIM-0917.js); EKSİK: Nahçıvan seferi ──
    {"t": "1553-08-28", "devlet": "osmanli", "taraflar": ["osmanli", "safevi"],
     "b": "Kanunî'nin üçüncü İran (Nahçıvan) seferine çıkışı",
     "tur": "sefer", "onem": 3, "dunya": 1, "kapsam": "dis", "yer_id": "",
     "etiket": ["askeri", "sefer", "osmanli", "safevi", "konu-askeri"],
     "d": "Safevîlerin Doğu Anadolu'daki akınlarının öcünü almak ve Şah Tahmasb'ı barışa zorlamak için Kanunî Sultan Süleyman İstanbul'dan ayrıldı. "
          "Halep'te kışlayan ordu Nisan 1554'te yeniden yola çıktı ve Nahçıvan'a kadar ilerledi; şehir alınıp tahrip edildi. "
          "Tahmasb meydan savaşına girmedi, yolları yakıp suları kirleterek ordunun ikmalini kesti. Osmanlı kaynaklarında bu harekât 'Nahcıvan seferi' diye anılır.",
     "kaynak": "TDV suleyman-i ('18 Ramazan 960'ta (28 Ağustos 1553) İstanbul'dan ayrılan' · Halep'ten 9 Nisan 1554'te hareket) · TDV nahcivan ('Nahcıvan seferi … şehir ele geçirildi ve yağmalanıp tahrip edildi') · TDV amasya-antlasmasi (pasif direniş)",
     "sinir_id": [], "sinif": None, "not": "sınır değişikliği değil — Amasya 1555'in öncülü; hat kaydı yok"},
    {"t": "1554-09-26", "devlet": "osmanli", "taraflar": ["osmanli", "safevi"],
     "b": "Osmanlı–Safevî mütarekesi — Kanunî, Tahmasb'ın ateşkes isteğini Erzurum'da kabul etti",
     "tur": "diplomasi", "onem": 3, "dunya": 1, "kapsam": "dis", "yer_id": "Erzurum",
     "etiket": ["diplomasi", "osmanli", "safevi", "konu-diplomasi"],
     "d": "Yiyecek sıkıntısı ve yaklaşan kış yüzünden Nahçıvan'dan çekilen Osmanlı ordusu Erzurum'dayken Safevî elçisi Kaçar Şahkulu geldi ve Şah Tahmasb'ın mütareke isteğini iletti; "
          "padişah isteği kabul etti. Kanunî kışı Amasya'da geçirdi; buradaki görüşmeler ertesi yıl Amasya Antlaşması'yla sonuçlandı.",
     "kaynak": "TDV amasya-antlasmasi ('Kanûnî Erzurum'da iken Safevî elçisi Kaçar Şahkulu … Bu istek Kanûnî tarafından kabul edildi (26 Eylül 1554)') · TDV suleyman-i (Amasya'ya dönüş 30 Ekim 1554)",
     "sinir_id": [], "sinif": None, "not": "ateşkes; kesin hat yok ⇒ D kaydı yok"},
    # ── G3 EKİ (G3 teslimi M-4161'de KAÇMIŞTI): 1886 ve 1892 — hukukî (E) ama hat geometrisi yok ⇒ yalnız madde ──
    {"t": "1886-01-01", "devlet": "osmanli", "taraflar": ["osmanli", TUN],
     "b": "Fransız–Osmanlı düzenlemesi — Tunus ile Trablusgarp arasındaki sınırın kıyı kesimi çizildi",
     "tur": "antlasma", "onem": 2, "dunya": 1, "kapsam": "dis", "yer_id": "",
     "etiket": ["antlasma", "sinir", "osmanli", TUN, "konu-diplomasi"],
     "d": "Tunus'un 1881'de Fransız himayesine girmesinden beş yıl sonra Fransa ile Osmanlı Devleti, Tunus ile Trablusgarp vilayeti arasındaki sınırı "
          "Akdeniz kıyısından başlayarak iç kesimde kısa bir mesafe boyunca belirledi. Kaynak yalnız yılı veriyor; hattın koordinatları bilinmediği için haritada çizilmedi.",
     "kaynak": "IBS 121 (1972) s.2 ('An agreement in 1886 between France and Turkey delimited a boundary … for a limited distance')",
     "sinir_id": [], "sinif": "E", "not": "hat kaydı YOK — geometri kaynakta yok"},
    {"t": "1892-01-01", "devlet": "osmanli", "taraflar": ["osmanli", TUN],
     "b": "Fransız–Osmanlı düzenlemesi — Tunus–Trablusgarp sınırı Gadames'e kadar uzatıldı",
     "tur": "antlasma", "onem": 2, "dunya": 1, "kapsam": "dis", "yer_id": "",
     "etiket": ["antlasma", "sinir", "osmanli", TUN, "konu-diplomasi"],
     "d": "İkinci bir Fransız–Osmanlı düzenlemesi Tunus ile Trablusgarp arasındaki sınırı öncekinden daha ayrıntılı biçimde ve iç kesimde Gadames'e kadar belirledi. "
          "Bugünkü sınırı çizen asıl belge 1910 Trablus Sözleşmesi'dir. Kaynak yalnız yılı veriyor; 1892 hattının koordinatları bilinmediği için haritada çizilmedi.",
     "kaynak": "IBS 121 (1972) s.2 ('A second agreement in 1892 delimited the boundary with greater accuracy … as far as Ghudamis')",
     "sinir_id": [], "sinif": "E", "not": "hat kaydı YOK — geometri kaynakta yok"},
    # ── G3 (1878-07-13 → 1914-07-28) ──
    {"t": "1906-10-01", "devlet": "osmanli", "taraflar": ["osmanli", "misir-kavalali"],
     "b": "Refah Anlaşması — Osmanlı ile Mısır Hidivliği arasındaki Refah–Taba hattı tarif edildi",
     "tur": "antlasma", "onem": 4, "dunya": 2, "kapsam": "dis", "yer_id": "",
     "etiket": ["antlasma", "sinir", "osmanli", "misir-kavalali", "ingiltere", "konu-siyasi", "konu-diplomasi"],
     "d": "1906 Akabe–Taba bunalımının ardından Osmanlı ve Hidiv komiserleri Refah'ta bir 'idarî ayırma hattı' üzerinde anlaştı: "
          "hat Akabe Körfezi'ndeki Ras Taba'dan kuzeybatıya adlı tepeler üzerinden Refah'taki iki sütunun ortasına ve oradan Akdeniz'e uzanıyordu. "
          "Karma heyet 31 Aralık 1906 ile 9 Şubat 1907 arasında hat boyunca 91 kâgir sütun dikti. Bu hat bugünkü Mısır–İsrail ve Mısır–Gazze sınırıdır.",
     "kaynak": "Taba hakem kararı, RIAA XX (1988) Ek B s.114-116 (anlaşma metni) ve §54-59 (dikim) · IBS 46",
     "sinir_id": ["d1906-filistin-misir-hidivlik"], "sinif": "E"},
    {"t": "1910-05-19", "devlet": "osmanli", "taraflar": ["osmanli", TUN],
     "b": "Trablus Sözleşmesi — Tunus ile Trablusgarp vilayeti arasındaki sınır Ras Ecdir'den Gadames'e çizildi",
     "tur": "antlasma", "onem": 3, "dunya": 2, "kapsam": "dis", "yer_id": "",
     "etiket": ["antlasma", "sinir", "osmanli", TUN, CEZ, "konu-siyasi", "konu-diplomasi"],
     "d": "Fransa ile Osmanlı Devleti arasında Trablus'ta imzalanan sözleşme, Tunus ile Trablusgarp vilayeti arasındaki sınırı Akdeniz'deki Ras Ecdir'den "
          "vadiler, sırtlar ve kuyular boyunca Gadames'in güneyine kadar tarif etti; Gadames'in batısındaki son kesim Cezayir sınırı oldu. "
          "Karma komisyon 1910-1911'de hattı 31'den 233'e kadar numaralı taşlarla işaretledi. Hat bugün de Libya–Tunus sınırıdır. "
          "Sözleşmenin günü kaynaklarda 12 ve 19 Mayıs olarak iki türlü geçer; iki kaynağın verdiği 19 Mayıs esas alındı.",
     "kaynak": "IBS 121 (1972) s.2-5 · Martens, Nouveau Recueil Général 3. seri c.VII s.91-93 · IBS 001 (1961) s.2, s.6 ('12 May 1910')",
     "sinir_id": ["d1910-libya-tunus-osmanli", "d1910-libya-cezayir-gadames-osmanli"], "sinif": "E"},
    {"t": "1912-10-18", "devlet": "italya", "taraflar": ["italya", "osmanli"],
     "b": "Uşi Antlaşması — Libya'nın Tunus ve Cezayir sınırları Osmanlı'dan İtalya'ya geçti",
     "tur": "antlasma", "onem": 4, "dunya": 3, "kapsam": "dis", "yer_id": "",
     "etiket": ["antlasma", "sinir", "italya", "osmanli", TUN, CEZ, "konu-siyasi", "konu-diplomasi"],
     "d": "Trablusgarp Savaşı'nı bitiren nihaî barış antlaşması 18 Ekim 1912'de Lozan yakınlarındaki Uşi'de imzalandı ve Trablusgarp ile Bingazi'deki Osmanlı idaresi sona erdi. "
          "Aynı süreçte, Müslüman kamuoyuna yönelik olarak 15 Ekim tarihiyle düzenlenen ayrı bir padişah fermanı iki vilâyete muhtariyet verip bir saltanat nâibi ve kadı tayin etti; "
          "bu yüzden kaynaklarda iki gün birlikte geçer. "
          "1910 sözleşmesiyle çizilip taşlarla işaretlenen Tunus ve Cezayir sınırları aynı hat üzerinde kaldı; hattın doğu yakasındaki taraf artık İtalya'ydı.",
     "kaynak": "TDV trablusgarp-savasi ('18 Ekim'de … Uşi (Ouchy) kasabasında … nihaî bir barış antlaşması imzalandı' · '15 Ekim tarihli olarak düzenlenen diğer bir belgeyle … muhtariyet veren … padişah emri') · IBS 121 s.2 ('October 12, 1912' — TDV esas)",
     "sinir_id": ["d1910-libya-tunus-osmanli", "d1910-libya-cezayir-gadames-osmanli", "d1923-libya-tunus", "d1923-libya-cezayir-gadames"],
     "sinif": "E"},
    {"t": "1917-10-31", "devlet": "ingiltere", "taraflar": ["ingiltere", "misir-sultanligi"],
     "b": "Birüssebi'nin düşüşü — Refah hattının iki yakası İngiliz elinde, hat fiilî sınır olarak yeniden",
     "tur": "savas", "onem": 3, "dunya": 3, "kapsam": "dis", "yer_id": "",
     "etiket": ["savas", "sinir", "ingiltere", "misir-sultanligi", "osmanli", "konu-siyasi", "konu-askeri"],
     "d": "Allenby kumandasındaki İngiliz ordusu 31 Ekim 1917'de Birüssebi yöresini ele geçirdi; Gazze de aynı yıl düştü ve Filistin'de İngiliz askerî idaresi kuruldu. "
          "Böylece 1906 Refah–Taba hattının iki yakası da İngiliz denetimine girdi ve hat, hukuken Osmanlı toprağı sayılan Filistin ile İngiliz himayesindeki Mısır "
          "arasında fiilî bir sınır olarak yeniden işledi. Gazze'nin alınış günü kaynakta yoktur.",
     "kaynak": "TDV filistin ('31 Ekim 1917'de … Bi'rüssebi' yöresini ele geçirdi' · '1917'den itibaren … askerî bir idare') · TDV gazze ('1917'de General Allenby Gazze'yi aldı')",
     "sinir_id": ["d1917-filistin-misir-askeri-idare"], "sinif": "D"},
    {"t": "1922-03-15", "devlet": "misir-kralligi", "taraflar": ["misir-kralligi", FIL],
     "b": "Mısır Krallığı ilân edildi — Refah–Taba hattının Mısır yakası krallığa geçiyor",
     "tur": "siyaset", "onem": 3, "dunya": 2, "kapsam": "dis", "yer_id": "",
     "etiket": ["siyaset", "sinir", "misir-kralligi", FIL, "konu-siyasi"],
     "d": "İngiltere'nin 28 Şubat 1922'de Mısır'ı tek taraflı olarak bağımsız ilân etmesinin ardından Sultan Ahmed Fuâd 15 Mart 1922'de kral unvanını aldı. "
          "Filistin ile sınır 1906 Refah hattı olarak sürdü; bu hattın iki devlet arasında uluslararası sınır sayılması 1926 mektuplaşmasına kaldı.",
     "kaynak": "TDV misir ('28 Şubat 1922' · 'Sultan Ahmed Fuâd 15 Mart 1922'de kral (melik) unvanını aldı') · RIAA XX §76",
     "sinir_id": ["d1920-filistin-misir-manda", "d1923-filistin-misir"], "sinif": "D"},
    {"t": "1922-12-02", "devlet": "kuveyt", "taraflar": ["kuveyt", SUUD],
     "b": "Ukayr Protokolü — Necid–Küveyt sınırı ve Tarafsız Bölge çizildi",
     "tur": "antlasma", "onem": 4, "dunya": 2, "kapsam": "dis", "yer_id": "",
     "etiket": ["antlasma", "sinir", "kuveyt", SUUD, "konu-siyasi", "konu-diplomasi"],
     "d": "İngiliz aracılığıyla Ukayr'da imzalanan protokol, Necid ile Küveyt arasındaki sınırı Vadi el-Avca ile Vadi el-Bâtın'ın kavşağından "
          "29. paralele düz bir hat ve oradan kıyıya uzanan, Küveyt kasabası merkezli 40 millik yarım daire olarak tarif etti. "
          "Bu hattın güneyinde, batıda eş-Şak çöküntüsü ve güneyde Ayn el-Abd hattıyla çevrili bir bölge iki tarafın eşit hakkına bırakıldı (Tarafsız Bölge; 1969'da bölündü).",
     "kaynak": "TDV kuveyt ('Suudi Arabistan ile antlaşma imzalayarak (2 Aralık 1922)') · IBS 103 s.4 (protokol metni)",
     "sinir_id": ["d1923-necid-kuveyt-bati", "d1923-necid-kuveyt-yay", "d1923-necid-kuveyt-tarafsiz-bati", "d1923-necid-kuveyt-tarafsiz-guney"],
     "sinif": "E"},
]

# ─────────────────────────── KIYAS: koşu 12 (yalnız okuma) ───────────────────────────
kiyas = {"kaynak": K12, "gun": GUN}
try:
    def jsv(yol, ad):
        s = io.open(yol, encoding="utf-8").read()
        i = s.find(f"window.{ad} = ")
        v, _ = json.JSONDecoder().raw_decode(s, i + len(f"window.{ad} = "))
        return v
    DH = jsv(os.path.join(K12, "devletler_harita.js"), "DEVLET_HARITA")
    DP = jsv(os.path.join(K12, "devletler_harita.js"), "DEVLET_PARCALAR")
    DPH = jsv(os.path.join(K12, "devletler_harita.js"), "DEVLET_PARCA_HALKA")
    UI = jsv(os.path.join(K12, "donemler.js"), "URETIM_IZI")
    kiyas["taban"] = ("koşu 12 ÇIKTISI" if "yerlesimler_sinir_kuzey.js" in UI.get("girdi", {})
                      else "YAYINDAKİ KOŞU 11 — koşu 12 henüz yazmadı")
    govde = {}
    for dv in DH:
        for p in dv["dnm"]:
            if p["f"] <= GUN < p["t"]:
                ps = []
                for q in p["g"]:
                    halka = [DP[h] for h in DPH[q]]
                    ps.append(Polygon(halka[0], halka[1:]).buffer(0))
                govde[dv["id"]] = unary_union(ps)
    # atlas gövdesi HARİTA ANAHTARIYLA tutulur (devletler.js `harita:`); Fransız sömürgeleri ayrı gövde değil
    HARITA = {"suud-ucuncu": "suud", "tunus-beyligi-fransiz": "fransa-cumhuriyet", "cezayir-fransiz": "fransa-cumhuriyet"}
    kiyas["harita_eslemesi"] = HARITA
    kiyas["govdesi_olan"] = {k: (HARITA.get(k, k) in govde) for k in sorted({t for r in KAYIT for t in r["taraflar"]})}
    for r in KAYIT:
        if not r.get("hat") or not (r["f"] <= GUN < r["t"]):
            continue          # kıyas yalnız 1923-10-28 kesiti için; G1 kayıtları kendi günlerinde ölçülmedi
        a, b = (HARITA.get(x, x) for x in r["taraflar"])
        if a not in govde or b not in govde:
            r["kiyas_atlas"] = {"durum": "ÖLÇÜLEMEDİ — atlasta 1923-10-28 gövdesi yok: " + ", ".join(x for x in (a, b) if x not in govde)}
            continue
        ls = LineString(r["hat"])
        # yalnız bu hattın çevresi (1,5°) — aynı iki gövdenin başka kıtadaki teması (İtalya–Fransa Alpleri) sayılmaz
        sinir = govde[a].boundary.intersection(govde[b].buffer(0.05)).intersection(ls.buffer(1.5))
        if sinir.is_empty:
            r["kiyas_atlas"] = {"durum": f"atlasta {a} ile {b} bu hattın 1,5° çevresinde KOMŞU DEĞİL (0,05° tampon)"}
            continue
        n = max(2, int(uzun(ls) / 2))
        d = sorted(sinir.distance(ls.interpolate(i / n, normalized=True)) * 111 for i in range(n + 1))
        r["kiyas_atlas"] = {"ornek": len(d), "ortanca_km": round(d[len(d) // 2], 1), "p90_km": round(d[int(len(d) * .9)], 1),
                            "enkotu_km": round(d[-1], 1), "le5_yuzde": round(100 * sum(1 for x in d if x <= 5) / len(d))}
    kiyas["durum"] = "ölçüldü"
except Exception as e:
    kiyas["durum"] = f"ÖLÇÜLEMEDİ: {e!r}"

# ─────────────────────────── yaz ───────────────────────────
bas = ["// -*- coding: utf-8 -*-",
       "// data/d_sinirlar_ortadogu.js — D KATEGORİSİ SINIRLAR · Orta Doğu + Mağrip · 29 Ekim 1923",
       "// D4-ORTADOGU · 16 Eylül 2026 · şema denetim/SEMA-D-0916.md · envanter+rapor denetim/D4-ORTADOGU-0916.md",
       "// Üretici: denetim/ARAC-D4-URET-0916.py — 🔴 ELLE DÜZENLEME, yeniden üret.",
       "// 🔴 BAĞLAYICI ALAN `sinif` (A–F kademesi, oturumlar/GORUNUM-ABCD-0916.md en üst): F | E | D (fiilî kesin) | C | YOK",
       "//    `kategori` ESKİ anlamıyla tarihî duruyor (kategori_tarihi:true) — ona geri düşülmez.",
       "// f_dalga_siniri:true → f bir olay değil, geriye sarma dalgasının sınırı (G2: 1914-07-28)",
       "// Şemaya EK alanlar: cins ('ortak_alan_siniri' | 'idari_ic_hat') · ortak_alan (kimlik) · sag_taraf",
       "//   ortak_alan_siniri: yakalardan biri Necid–Küveyt Tarafsız Bölgesi (iki tarafın eşit hakkı, 1922-1969)",
       "//   idari_ic_hat: aynı egemen altındaki hat (Filistin–Şarkî Ürdün) — uluslararası D ile karıştırılmamalı",
       "", "window.D_SINIRLAR_ORTADOGU = ["]
satir = [json.dumps(r, ensure_ascii=False, separators=(",", ":")) + "," for r in KAYIT]
io.open("data/d_sinirlar_ortadogu.js", "w", encoding="utf-8").write("\n".join(bas + satir + ["];", ""]))
kb = ["// -*- coding: utf-8 -*-",
      "// data/kronoloji_sinir_ortadogu.js — SINIR KRONOLOJİSİ · Orta Doğu + Mağrip · D4-ORTADOGU",
      "// window.KRONOLOJI_SINIR_ORTADOGU — oturumlar/GERIYE-SARMA-0916.md ADIM 3. Biçim data/kronoloji_almanya.js ile aynı;",
      "// EK: taraflar (iki devlet kimliği) · sinir_id (data/d_sinirlar_ortadogu.js kayıtları) · sinif.",
      "// Üretici: denetim/ARAC-D4-URET-0916.py — 🔴 ELLE DÜZENLEME. index.html satırını koordinatör ekler.",
      "// Kapsam: G1 (1918-11-11 → 1923-10-29) · G2 (1914-07-28 → 1918-11-11) · G3 (1878-07-13 → 1914-07-28) dalgalarındaki E/F/D değişiklikleri.",
      "", "window.KRONOLOJI_SINIR_ORTADOGU = ["]
io.open("data/kronoloji_sinir_ortadogu.js", "w", encoding="utf-8").write(
    "\n".join(kb + [json.dumps(k, ensure_ascii=False, separators=(",", ":")) + "," for k in sorted(KRON, key=lambda k: k["t"])] + ["];", ""]))
json.dump({"kiyas": kiyas,
           "parcalar": [{k: r.get(k) for k in ("id", "kategori", "sol_taraf", "uzunluk_km", "kesinlik_km", "kiyas_atlas")} for r in KAYIT],
           "cipalar": {"nokta2": N2, "H": NH, "kuveyt_merkez": MERKEZ, "yay_kiyi_ucu": kiyi_uc, "ras_kalia": RAS_KALIA,
                       "gadames": GAD, "tas233_tahmini": list(uc)}},
          io.open("denetim/OLCUM-D4-ORTADOGU-KIYAS-0916.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("kayıt", len(KAYIT), "· kıyas", kiyas["durum"], "·", kiyas.get("taban"), "·", kiyas.get("govdesi_olan"))
for r in KAYIT:
    k = r.get("kiyas_atlas") or {}
    print(f"  {r['id']:36} {r['kategori']:5} {str(r.get('uzunluk_km','-')):>6} km  sol={str(r.get('sol_taraf')):22} "
          f"kıyas {k.get('durum') or ('ortanca %s p90 %s en kötü %s ≤5km %%%s' % (k.get('ortanca_km'), k.get('p90_km'), k.get('enkotu_km'), k.get('le5_yuzde')))}")
