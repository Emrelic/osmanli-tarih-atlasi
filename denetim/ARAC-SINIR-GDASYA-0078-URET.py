# -*- coding: utf-8 -*-
"""SINIR-GDASYA-0078 — Güneydoğu Asya 1923 sınır kayıtlarını ÜRETİR.

Çıktı : data/d_sinirlar_gdasya.js (window.D_SINIRLAR_GDASYA)
Şema  : denetim/SEMA-D-0916.md  · şartname oturumlar/BITIR-1923-0078.md
Okur  : veri-kaynak/d_bugunku_sinirlar.geojson · ne_10m_admin_0_countries (sol_taraf testi)
Desen : denetim/ARAC-D5-ASYA-URET-0916.py (aynı yardımcılar, aynı kırpma/ayrım ölçütleri — ardıl
        kayıtlar D5-ASYA'nın D-YOK kutularıyla BİREBİR aynı parçayı keser).

İş bölümü (SINIR-D-ASYA-0077 ile, tahta M-5138/M-5139):
  · D5-ASYA'nın D-YOK kutusunu C'ye yükselten ARDIL kayıtlar burada, `gdasya-` önekiyle.
  · D5-ASYA'nın ÇİZİLİ kayıtlarına (si-fc-kara, si-ih, si-ma, hd-en, hd-sw, hd-pt) dokunulmaz.
  · Yeni çiftler (Sarawak–Brunei, Sarawak–K.Borneo, Malaya–Johor, Vorstenlanden) burada.

KURAL: C = belgeye dayanan ama milimetrik olmayan hat. Bugünkü çizgi yalnız VEKİLDİR; C'ye ancak
1923 hattı ile bugünkü hat arasındaki fark C'nin kabalığı içinde kalıyorsa (kesinlik_km) alınır ve
fark `degisti` + `kesinlik_not`ta söylenir. Fark ölçülemiyorsa kutu D-YOK kalır (burada yazılmaz).
"""
import sys, io, os, json, math, subprocess
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
from shapely.geometry import shape, Point, LineString
from shapely.ops import linemerge, unary_union

SADE = 0.002
T = "1923-10-29"
IBS = "https://library.law.fsu.edu/Digital-Collections/LimitsinSeas/pdf/ibs%03d.pdf"
NE = "Natural Earth 10m admin-0 (bugünkü sınır, D-GEOARAC çıktısı) — 1923 hattının VEKİLİ, fark kesinlik_not'ta"
KES_NE = "NE 1:10m ölçek; konum hatası ÖLÇÜLMEDİ (ölçek gereği ~1-2 km beklenir)"


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


ISO = {"ingiliz-hindistani": ["MMR"], "fransiz-cinhindi": ["LAO", "KHM", "VNM"], "siyam-chakri": ["THA"],
       "brunei-sultanligi": ["BRN"], "sarawak-brooke": ["MYS"]}
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


_KJ = subprocess.run(["node", "-e",
    "global.window={};eval(require('fs').readFileSync('data/devletler.js','utf8'));"
    "const D=Object.values(window).find(v=>Array.isArray(v)&&v.length>500&&v[0].id);"
    "const o={};for(const d of D)o[d.id]=[d.f||'',d.t||''];process.stdout.write(JSON.stringify(o))"],
    capture_output=True, text=True, encoding="utf-8", check=True).stdout
KUNYE = json.loads(_KJ)


def pad(s):
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
        notu = f"f {f} → {kf} (taraf künyesi o tarihte başlıyor)"
        f = kf
    if pad(t) > kt:
        raise SystemExit(f"{id_}: t {t} künye sonunu ({kt}) aşıyor")
    return f, notu


KAYIT = []


def ekle(id_, a, b, f, sinif, parcalar, dayanak, degisti, tahdit, kesinlik, kesinlik_not, not_="",
         geo=NE, t=T, ardil_of=None, min_km=1.0):
    parcalar = [p for p in parcalar if uzunluk(p) >= min_km]
    if not parcalar:
        raise SystemExit(f"{id_}: parça kalmadı")
    f, kn = kirp(id_, a, b, f, t)
    for i, ls in enumerate(parcalar):
        k = {
            "id": id_ + (f"-{i+1}" if len(parcalar) > 1 else ""),
            "taraflar": [a, b], "f": f, "t": t, "kategori": sinif, "sinif": sinif,
            "sol_taraf": sol_taraf(ls, a, b), "hat": dizi(ls),
            "uzunluk_km": round(uzunluk(ls), 1), "geometri_kaynagi": geo,
            "degisti": degisti, "tahdit": tahdit,
            "kesinlik_km": kesinlik, "kesinlik_not": kesinlik_not,
            "dayanak": dayanak, "not": " · ".join(x for x in (not_, kn) if x),
        }
        if ardil_of:
            k["ardili_oldugu"] = ardil_of[i] if isinstance(ardil_of, list) else ardil_of
        KAYIT.append(k)


def ibs(n, ad, alinti=None):
    d = {"ad": f"IBS No. {n} {ad}", "tur": "resmî sınır çalışması", "url": IBS % n}
    if alinti:
        d["alinti"] = alinti
    return d


SI, FC, IH = "siyam-chakri", "fransiz-cinhindi", "ingiliz-hindistani"

# ═══ 1. D5-ASYA D-YOK → C ARDILLARI ══════════════════════════════════════════════════════════════
# 1a. Siyam–Laos Mekong (1893 md. I → 1926). Ayrım D5-ASYA üreticisiyle BİREBİR (satır 381-391).
R = json.load(open("veri-kaynak/ne_10m_rivers.geojson", encoding="utf-8"))
MEK = unary_union([shape(f_["geometry"]) for f_ in R["features"] if f_["properties"].get("name") == "Mekong"])
MEK_TAMP = MEK.buffer(0.03)
lt = cizgi("LAO-THA")
KMEK = lambda c: c[1] > 20 + 10.5 / 60
MEKG = lambda c: KMEK(c) or MEK_TAMP.contains(Point(c))
lt_mek = sorted([p for p in parcala(lt, MEKG) if uzunluk(p) >= 5], key=lambda g: -g.centroid.y)
ekle("gdasya-si-fc-mekong-1893", SI, FC, "1893-10-03", "C", lt_mek,
     [{"ad": "Fransız–Siyam Barış Antlaşması", "madde": "md. I", "tarih": "1893-10-03", "tur": "antlaşma",
       "not": "onay 2 Şub 1894 (IBS 20)"},
      ibs(20, "Laos–Thailand", "the left bank of the Mekong as well as to all islands in the river"),
      {"ad": "Fransız–Siyam Sözleşmesi", "madde": "md. I", "tarih": "1904-02-13", "tur": "sözleşme",
       "not": "IBS 20: 'The boundary in the Mekong, established in 1893, was reaffirmed.'"}],
     {"deger": True, "kaynak": "IBS 20",
      "not": "25 Ağu 1926 Bangkok Sözleşmesi hattı Siyam kıyısına en yakın kolun TALVEGİNE taşıdı (adalar yine Laos'un; "
             "birkaç ada Siyam'a). 1923 hattı ≠ bugünkü hat."},
     {"t": None, "not": "nehir hattı; 1923 öncesi işaretleme anılmıyor"},
     1.5,
     "Vekil: bugünkü talveg (Siyam kıyısına en yakın kol). 1893 md. I bütün adaları Fransa'ya verdiği için 1923 hattı "
     "Siyam (sağ) kıyısıdır — bu bir ÇIKARIMDIR (IBS 20 'Siamese shore' ifadesini 1926 için kullanır). Kıyı ile en yakın kolun "
     "talvegi arasındaki fark yarım kol genişliği mertebesindedir (ÖLÇÜLMEDİ, ≤~1 km beklenir) + NE ölçek hatası ~1-2 km",
     "Kuzey parça: Nam Kok ağzı → ~20°10'K (IBS 20: ~59 mil); orta parça: Nam Heung ağzı → Bassac su ayrımı (IBS 20: ~541 mil). "
     "Parça ayrımı D5-ASYA üreticisiyle aynı (NE 10m Mekong ±3 km + 20°10,5'K enlemi). Taraf: Laos (Fransız Çinhindi)",
     ardil_of=["d1923-si-fc-DEGISTI-mekong-1", "d1923-si-fc-DEGISTI-mekong-2"])

# 1b. Siyam–Burma Mae Sai / Nam Kok (1894 haritaları → 1931/32 ve 1940 notaları)
mt = cizgi("MMR-THA")
MAESAI = lambda c: c[1] >= 20.25 and c[0] >= 99.75
PAKCHAN = lambda c: c[1] <= 10.95
ekle("gdasya-si-ih-maesai-1894", SI, IH, "1894-10-17", "C", parcala(mt, MAESAI),
     [{"ad": "İngiliz–Siyam haritaları teatisi (3 pafta, imzalı-mühürlü)", "tarih": "1894-10-17", "tur": "harita",
       "not": "karma komisyon işaretlemesi Ocak 1893'te başladı (IBS 63)"},
      ibs(63, "Burma–Thailand", "The 1891 – 4 boundary in the mid -stream of the Mae Sai")],
     {"deger": True, "kaynak": "IBS 63",
      "not": "27 Ağu 1931 + 14 Mar 1932 notaları: orta akıştan 1929 talvegine; 1 Eki + 10 Ara 1940 notaları: yeni yatak + Nam Kok'a talveg"},
     {"t": "1893-1894", "not": "komisyon 1892-93 mevsiminde; harita teatisi 17 Eki 1894"},
     1.5,
     "Vekil: bugünkü talveg. 1923 hattı Mae Sai'nin 1891-94 ORTA AKIŞI; dere yatağı 1929 ve 1940'ta kaydı — "
     "kayma miktarı ÖLÇÜLMEDİ (vadi tabanı ölçeğinde, ≤~1 km beklenir) + NE ölçek hatası",
     "Burma tarafı Kengtung Şan beyliği (atlas A katmanında `san-devletleri` — taraf D5-ASYA kaydıyla tutarlı olsun diye "
     "`ingiliz-hindistani`; künye sorusu koordinatörde, SINIR-D-ASYA-0077 §5.2). Kutu kesimi D5-ASYA ile aynı (20,25°K kuzeyi, 99,75°D doğusu)",
     ardil_of="d1923-si-ih-DEGISTI-maesai")

# 1c. Siyam–Burma Pakchan (1868 → 1934 notaları)
ekle("gdasya-si-ih-pakchan-1868", SI, IH, "1868-07-03", "C", parcala(mt, PAKCHAN),
     [{"ad": "İngiliz–Siyam Sözleşmesi (Tenasserim sınırı)", "tarih": "1868-01-01", "tur": "sözleşme",
       "not": "gün ÇELİŞKİLİ: gövde 8 Şub 1868, BFSP ve İngiliz atıfları 8 Eyl 1868; onay teatisi 3 Tem 1868 (IBS 63). f onay günü"},
      ibs(63, "Burma–Thailand", "thence down the Pakchan River to its mouth")],
     {"deger": True, "kaynak": "IBS 63",
      "not": "1 Haz 1934 notaları: Pakchan'da talveg ('deep water channel'); Klong Wan + Wang Tow (40 akre) Burma'ya. 1923 hattı nehrin kendisi, kanal tanımsız"},
     {"t": "1892", "not": "IBS 63: 1892'de işaretlendi (kapsamı belirsiz); 1868 teatisinde 2 harita"},
     2.5,
     "Vekil: bugünkü talveg. 1868 metni 'Pakchan ırmağı boyunca ağzına' der, ırmak içindeki hattı tanımlamaz; aşağı Pakchan "
     "haliçtir (genişliği ÖLÇÜLMEDİ, birkaç km olabilir) — bu yüzden kesinlik 2,5 km. 1934 parsel değişimleri (40 akre) C ölçeğinin altında",
     "Kutu kesimi D5-ASYA ile aynı (10,95°K güneyi — Kra-Mathe kavşağının enlemi okunmadı, TAHMİNİ)",
     ardil_of="d1923-si-ih-DEGISTI-pakchan", min_km=2.0)

# ═══ 2. YENİ ÇİFTLER — D-YOK KUTULARI (1923'te C düzeyinde hukukî hat VAR, ama bugünkü çizginin onu
#        gösterdiği ÖLÇÜLMEDİ ⇒ D5-ASYA geleneği: degisti null/true → kutu, çizgi yok) ════════════════
# Kutu geometrisi: NE 10m admin-1 (bugünkü eyalet sınırı) — yalnız KUTUYU verir, hat yazılmaz.
# Dosya depoda YOK (Emre 24 Eyl 2026 indirme onayı; scratchpad'e indirildi) — yol ortam değişkeniyle:
#   GDASYA_ADM1=<yol>/ne_10m_admin_1_states_provinces.geojson
YOK_NOT = ("1923 hattının koordinatı ELDE YOK ⇒ bu kutuda E/D ÇİZİLMEZ, A/B geçerli. Bugünkü çizgi 1923'ü "
           "GÖSTERMEZ ya da gösterdiği ölçülmedi. 1923'te hukukî dayanak VAR (C düzeyi) — `sinif_aday`.")
ADM1_YOL = os.environ.get("GDASYA_ADM1")
if not ADM1_YOL or not os.path.exists(ADM1_YOL):
    raise SystemExit("GDASYA_ADM1 ortam değişkeni NE admin-1 geojson'unu göstermeli")
A1 = {}
for f_ in json.load(open(ADM1_YOL, encoding="utf-8"))["features"]:
    k_ = f_["properties"].get("iso_3166_2")
    if k_ in {"MY-01", "MY-04", "MY-05", "MY-06", "MY-12", "MY-13", "ID-YO", "ID-JT"}:
        A1[k_] = shape(f_["geometry"]).buffer(0)


def ortak(a, b):
    x = A1[a].boundary.intersection(A1[b].boundary)
    parts = [p for p in getattr(x, "geoms", [x]) if p.geom_type in ("LineString", "MultiLineString")]
    ls = []
    for p in parts:
        ls += list(getattr(p, "geoms", [p]))
    m = linemerge(ls)
    return [p for p in getattr(m, "geoms", [m]) if uzunluk(p) >= 1.0]


def bbox(parcalar, pay=0.05):
    xs = [x for g in parcalar for x, _ in g.coords]
    ys = [y for g in parcalar for _, y in g.coords]
    return [round(min(xs) - pay, 3), round(min(ys) - pay, 3), round(max(xs) + pay, 3), round(max(ys) + pay, 3)]


def yok(id_, a, b, f, parcalar, degisti, dayanak, not_, geo, t=T):
    f, kn = kirp(id_, a, b, f, t)
    KAYIT.append({"id": id_, "taraflar": [a, b], "f": f, "t": t, "kategori": "D-YOK", "sinif": "YOK",
                  "sinif_aday": "C", "hat": None, "kutu": bbox(parcalar),
                  "uzunluk_km_bugun": round(sum(uzunluk(p) for p in parcalar), 1), "kutu_kaynagi": geo,
                  "degisti": degisti, "dayanak": dayanak, "not": " · ".join(x for x in (not_, kn, YOK_NOT) if x)})


NE1 = "Natural Earth 10m admin-1 (bugünkü eyalet sınırı) — yalnız kutu"
NE0 = "Natural Earth 10m admin-0 (bugünkü devlet sınırı, D-GEOARAC) — yalnız kutu"
IBRU11 = {"ad": "Haller-Trost, IBRU Maritime Briefing 1/1 (Durham 1993)", "tur": "akademik",
          "url": "https://www.dur.ac.uk/media/durham-university/research-/research-centres/ibru-centre-for-borders-research/maps-and-databases/publications-database/Maritime-Briefings-(Vol.-1-no.-1).pdf",
          "sayfa": "17-18", "not": "Maxwell & Gibson 1924 s. 127, 209, 211'e atıf"}
ICJ87 = {"ad": "Johore Boundaries Commission raporu (ICJ Pedra Branca, Malezya Memorial ek MM 87)", "tarih": "1898-02-18",
         "tur": "komisyon raporu / hakem kararı",
         "url": "https://icj-web.leman.un-icc.cloud/sites/default/files/case-related/130/130-20040325-WRI-01-02-EN.pdf",
         "not": "4 komiser (Clementi Smith, Swettenham, Herbert, Dato Abdul Rahman); md. 2 nehirde orta hat; md. 5 harita "
                "yalnız niyeti gösterir, metin bağlar; md. 8 işaretleme giderleri (1898'de işaretsiz); md. 9 SS Gazette "
                "yayınından 6 ay sonra yürürlük — Gazette günü BULUNAMADI (Straits Times 16 Tem 1898 haberi)"}
CO, MA = "cohor-sultanligi", "ingiliz-malaya"
JOHOR_DEG = {"deger": None, "kaynak": "bulunamadı",
             "not": "1898 hattı ile bugünkü Johor eyalet sınırının aynılığını söyleyen akademik kaynak BULUNAMADI (yalnız ansiklopedik ipucu)"}

yok("gdasya-co-ma-pahang", CO, MA, "1898-02-18", ortak("MY-01", "MY-06"), JOHOR_DEG,
    [{"ad": "Temenggong Ebubekir – Bendahara Tun Korais antlaşması", "tarih": "1862-06-17", "tur": "antlaşma", "not": "Endau hattı"},
     {"ad": "Vali Ord hakem kararı", "tarih": "1868-09-01", "tur": "hakem kararı", "kaynak": "ICJ Malezya Memorial ek MM 86",
      "alinti": "the River Indow shall be the boundary on the Mainland"},
     ICJ87, IBRU11],
    "Johor–Pahang: aşağı Endau orta hattı; yukarıda Sembrong kavşağından doruk noktaları zinciri (Bukit Ulu Perloh … "
    "Gunong Kendok — OCR adları belirsiz). 1923 öncesi işaretleme BULUNAMADI. Pahang 1923'te FMS (`ingiliz-malaya`)", NE1)
yok("gdasya-co-ma-negerisembilan", CO, MA, "1898-02-18", ortak("MY-01", "MY-05"), JOHOR_DEG,
    [ICJ87, IBRU11],
    "Johor–Negeri Sembilan (Johol): düz hat → Lubok Kemondong → Gemas ırmağı orta hattı → Kuala Gemas → Kuala Chandoi "
    "(OCR) → doruk zinciri. Batin Gemala ülkesi komisyon dışı bırakıldı (md. 9). 1898 öncesi belge BULUNAMADI", NE1)
yok("gdasya-co-ma-malaka", CO, MA, "1898-02-18", ortak("MY-01", "MY-04"), JOHOR_DEG,
    [{"ad": "Sultan Ali – Temenggong İbrahim antlaşması", "tarih": "1855-01-01", "tur": "antlaşma",
      "not": "gün ÇELİŞKİLİ: 10 Mar 1855 (Maxwell & Gibson / ICJ MM 7) · 10 Şub 1855 (IBRU) — Kesang kuzey sınırı"},
     ICJ87, IBRU11],
    "Johor–Malaka (Boğaz Yerleşimleri): Kuala Kesang'dan Kesang ve Chohong orta hattı ('her iki kıyıya eşit uzaklıkta'); "
    "Bukit Asahan (OCR) yakınında yolun 30 yarda güneyi; Kampong Relau'da nokta 'belirlenecek' (1898'de işaretsiz)", NE1)

# Sarawak–K.Borneo (K.Borneo taraf kimliği `ingiltere` — D5-ASYA hd-en kayıtlarıyla aynı; ayrı künye YOK)
HT13 = {"ad": "Haller-Trost, The Brunei-Malaysia Dispute…, IBRU Maritime Briefing 1/3 (Durham 1994)", "tur": "akademik",
        "url": "https://www.durham.ac.uk/media/durham-university/research-/research-centres/ibru-centre-for-borders-research/maps-and-databases/publications-database/Maritime-Briefings-(Vol.-1-no.-3).pdf"}
yok("gdasya-sw-en-kuzeyborneo", "sarawak-brooke", "ingiltere", "1910-07-28", ortak("MY-12", "MY-13"),
    {"deger": True, "kaynak": "SI 1962/402 (Sabah Başsavcılığı metni)",
     "not": "1962 Kraliyet Kararnamesi Bengkulit ağzı → Bukit Kawang kesiminde 'küçük değişiklik' + taş/beton işaretler; "
            "iç kesimin 1910 hattından farkı ÖLÇÜLMEDİ"},
    [{"ad": "Sarawak–Kuzey Borneo Anlaşması", "tarih": "1910-07-28", "tur": "anlaşma",
      "not": "metin Allen–Stockwell–Wright derlemesi s. 653 — GÖRÜLMEDİ (ırmak/su ayrımı/taş bilinmiyor)"},
     dict(HT13, sayfa="18-19, 36"),
     {"ad": "BNBC – Brooke antlaşması (Lawas devri)", "tarih": "1904-12-12", "tur": "antlaşma", "not": "HT s. 18; ek belge 20 Ara 1904"}],
    "Kıyı ucu Bengkulit ağzı (SI 1958/1517 md. 2(1)(i): ~4°59'10\"K 115°26'48\"D); NE admin-1 kıyı ucu bundan ~4 km sapıyor (ölçüldü). "
    "⚠️ A katmanında 1923'te K.Borneo gövdesi YOK (SINIR-D-ASYA-0077 M-5074/M-5139)", NE1)

# Sarawak–Brunei (bugünkü BRN-MYS: parça 1 batı, parça 2 Temburong)
BR, SW = "brunei-sultanligi", "sarawak-brooke"
brn = sorted(cizgi("BRN-MYS"), key=lambda g: g.centroid.x)
MY09 = {"ad": "Malezya–Brunei mektup teatisi açıklaması (Başbakan Abdullah Badawi)", "tarih": "2009-03-16", "tur": "resmî açıklama",
        "url": "https://chinaus-icas.org/wp-content/uploads/2019/10/Statement-on-Exchange-of-Letters-Between-Malaysia-and-Brunei.pdf",
        "not": "beş kesim 1920, 1931, 1933 (iki), 1939 anlaşmalarıyla; kalanı su bölümü — 1923 için yalnız 1920 geçerli"}
yok("gdasya-br-sw-bati", BR, SW, "1890-03-17", [brn[0]],
    {"deger": True, "kaynak": "2009 açıklaması + HT s. 26-27",
     "not": "Belait–Baram ve Brunei-Muara–Limbang kesimleri 1923'ten SONRA (1931/1933/1939) tanımlandı; 1923'te yalnız devir belgeleri (havza tarifi)"},
    [{"ad": "Baram devri", "tarih": "1882-01-01", "tur": "devir", "not": "gün BULUNAMADI (kaynaklar 1881/1882/1884 arasında çelişkili)"},
     {"ad": "Limbang ilhak bildirisi (Sarawak Gazette 1 Nis 1890)", "tarih": "1890-03-17", "tur": "bildiri",
      "not": "toprağı tanımlamıyor (HT s. 26); İngiltere 1891'de tazminat şartıyla onayladı, Sultan Haşim kabul etmedi"},
     dict(HT13, sayfa="13, 26-27"), MY09],
    "Batı parça (Belait/Tutong/Brunei-Muara ↔ Baram/Limbang). f: Limbang ilhakı (bu kutunun doğu yarısını oluşturan son değişiklik). "
    "⚠️ Limbang 1923'te İngiltere'ce tanınmış, Sultan'ca rıza gösterilmemiş (HT; Hussainmiya 2006 s. 47-48)", NE0)
yok("gdasya-br-sw-temburong", BR, SW, "1920-02-04", [brn[1]],
    {"deger": None, "kaynak": "HT dn. 78 + 2009 açıklaması",
     "not": "Pandaruan kesimi bugün de 1920 anlaşmasına göre (HT dn. 78) ⇒ o kesim C'ye aday; ama Pandaruan kesiminin UZUNLUĞU/UÇLARI "
            "ÖLÇÜLMEDİ (NE'de Pandaruan ırmağı yok). Trusan tarafı 1931'de tanımlandı"},
    [{"ad": "Pandaruan Irmağı ve Bölgesi Anlaşması", "tarih": "1920-02-04", "tur": "anlaşma",
      "not": "21 May 1912 anlaşmasını kaldırır; batı (Limbang) kıyısı Sarawak'ın, doğu (Temburong) kıyısı Brunei'nin; talveg yok"},
     {"ad": "Trusan devri", "tarih": "1884-12-12", "tur": "devir", "not": "Trusan'ın bütün kolları (havza)"},
     dict(HT13, sayfa="15-17, dn. 76-78"), MY09],
    "Temburong parçası (batısı Limbang, doğusu Trusan). f: Pandaruan anlaşması (kutudaki son değişiklik)", NE0)

# Vorstenlanden — Yogyakarta'nın bugünkü sınırı, Merapi doruğunda ikiye ayrılır (1830 tarifi: Opak · Merapi · Gunungkidul eteği)
MERAPI = Point(110.446, -7.54)   # Smithsonian GVP 263250 (doruk)
yo = ortak("ID-YO", "ID-JT")[0]
d_ = yo.project(MERAPI)
from shapely.ops import substring
yo_a, yo_b = substring(yo, 0, d_), substring(yo, d_, yo.length)
yo_bati, yo_dogu = (yo_a, yo_b) if yo_a.centroid.x < yo_b.centroid.x else (yo_b, yo_a)
ENI = {"ad": "Encyclopaedie van Nederlandsch-Indië, 2. baskı", "tur": "ansiklopedi (resmî yarı-akademik)",
       "url": "https://archive.org/details/encyclopaedievan0000sdeg", "sayfa": "c. 2 (1918) 'Java' s. 207-208"}
UNY = {"ad": "Ade Luqman Hakim, Penyatuan Wilayah Enclave … ke dalam DIY 1948-1960 (UNY öğrenci dergisi)", "tur": "akademik (ikincil)",
       "url": "https://journal.student.uny.ac.id/ilmu-sejarah/article/viewFile/14710/14273",
       "not": "Nurhajarini vd. 2012 (BPSNT Yogyakarta) ve Ramadhan 2015 tezine atıf"}
yok("gdasya-yo-su", "yogyakarta", "surakarta", "1830-09-27", [yo_dogu],
    {"deger": None, "kaynak": "UNY (ikincil)",
     "not": "kaynak hattın 1830'dan DIY'ye dek sürdüğünü söyler ama ilk hat Opak yatağıydı, sonra yola çekildi — geçiş günü BULUNAMADI. "
            "Surakarta anklavları (Kota Gede, Imogiri) ve Mangkunegaran'ın Ngawen'i 1923'te Yogya içinde; 17 Mar 1958'de DIY'ye geçti (UU 14/1958)"},
    [{"ad": "Solo–Djokja (Klaten) Antlaşması", "madde": "md. 1, md. 5", "tarih": "1830-09-27", "tur": "antlaşma",
      "not": "ortak sınır 'Ekim 1830 başında' kesin düzenlendi (ENI) — belgenin adı ve günü BULUNAMADI; ikincil kaynakta 23 Eyl 1830 da geçiyor (ÇELİŞKİ)"},
     ENI, UNY],
    "Yogyakarta ↔ Surakarta (+ Mangkunegaran, atlasta ayrı künye yok): Merapi doruğundan güney kıyısına. 1923 öncesi sınır taşı "
    "BULUNAMADI; tek ölçüm 1861-66 topografik alımları. Ayrım noktası Merapi doruğu (Smithsonian GVP) — bugünkü eyalet hattına izdüşüm", NE1)
yok("gdasya-yo-hd", "yogyakarta", "hollanda-dogu-hint", "1830-11-03", [yo_bati],
    {"deger": None, "kaynak": "bulunamadı",
     "not": "batı sınırın (Kelir/Menoreh dağları; 1901'e dek Bagelen, sonra Kedu) bugünküyle aynılığı ölçülmedi"},
    [{"ad": "Djokja sözleşmesi", "tarih": "1830-11-03", "tur": "sözleşme", "not": "toprak Solo'dakiyle aynı biçimde daraltıldı (ENI)"},
     ENI],
    "Yogyakarta ↔ Hollanda idaresi (Kedu/Bagelen): Merapi doruğundan batı kıyısına. Sınır taşı ya da resmî tarif BULUNAMADI", NE1)

# ═══ ÇIKTI ═══════════════════════════════════════════════════════════════════════════════════════
BASLIK = """// -*- coding: utf-8 -*-
// data/d_sinirlar_gdasya.js — GÜNEYDOĞU ASYA 1923 SINIRLARI · SINIR-GDASYA-0078 (BİTİR-1923-0078 Faz 1)
// Şema denetim/SEMA-D-0916.md · rapor denetim/SINIR-GDASYA-0078.md
// Üretici: denetim/ARAC-SINIR-GDASYA-0078-URET.py — 🔴 ELLE DÜZENLEME, yeniden üret.
// İçerik: (1) D5-ASYA'nın (d_sinirlar_asya.js) D-YOK kutularının C ARDILLARI — `ardili_oldugu` alanı eski id'yi verir;
//         (2) d_sinirlar_asya.js'te hiç kaydı olmayan yeni çiftler.
// d_sinirlar_asya.js'teki ÇİZİLİ kayıtlar burada TEKRARLANMAZ (SINIR-D-ASYA-0077 ile M-5138/M-5139).
"""


def yaz():
    satirlar = [json.dumps(k, ensure_ascii=False, separators=(",", ":")) for k in KAYIT]
    with open("data/d_sinirlar_gdasya.js", "w", encoding="utf-8", newline="\n") as fh:
        fh.write(BASLIK + "\nwindow.D_SINIRLAR_GDASYA = [\n" + ",\n".join(satirlar) + "\n];\n")
    toplam = 0
    for k in KAYIT:
        toplam += k.get("uzunluk_km") or 0
        print(f"  {k['id']:36} {k['sinif']:3} {k.get('uzunluk_km', '')!s:>7} km  {k['f']}→{k['t']}  sol={k.get('sol_taraf')}  ← {k.get('ardili_oldugu', '')}")
    print(f"toplam {len(KAYIT)} kayıt · {toplam:.1f} km")


if __name__ == "__main__":
    yaz()
