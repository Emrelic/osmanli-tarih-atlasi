# -*- coding: utf-8 -*-
"""D1-TURKIYE — 29 Ekim 1923 Türkiye kara sınırının D kayıtlarını ÜRETİR + koşu 12 ile KIYASLAR.

Çıktı : data/d_sinirlar.js (window.D_SINIRLAR) · denetim/OLCUM-D1-KIYAS-0916.json
Şema  : denetim/SEMA-D-0916.md
Okur  : veri-kaynak/ne_10m_admin_0_countries.geojson · GeoNames (çıpalar) ·
        C:/atlas-kosu12/data (YALNIZ OKUMA — koşu 12 çıktısı; oraya hiçbir şey yazılmaz)

Parça kararları kaynağa dayanır (IBS = International Boundary Study, ABD Dışişleri):
  BGR  IBS 49: 1921'de tahdit+işaret (Neuilly komisyonu), Lozan teyit; üçlü nokta 1926  → D
  GRC  IBS 41: Lozan md.2/2, işaret 1925-26 (Atina Protokolü 3.11.1926); ihtilaf yok    → D
  SSCB IBS 29: Moskova+Kars 1921 tahdit, işaret 1925-26; "since 1921 unchanged"         → D
       (Aras kesimi "Türk-İran sınırına" kadar ⇒ Nahçıvan teması 1921'den beri)
  IRN  IBS 28: 1913 İstanbul Protokolü, işaret Ekim 1914 (Kotur ~40 mil HARİÇ);
       1932 üç takas (Küçük Ağrı · Kotur · Bacirge) + 1937 güney düzeltmesi              → D,
       DEĞİŞEN dört kesim D DIŞI (bugünkü geometri 1923'ü göstermez)
  IRQ  Lozan md.3/2 ERTELEDİ ⇒ şartname md.4: D OLAMAZ → "fiili" (IBS 27 statüko)
  SYR  Ankara İtilafnamesi md.8 (IBS 163 s.3-4): doğu (Meydan-ı Ekbez→Cizre) 1926/1929/1930
       protokolleriyle tahdit (1939 değişiklikleri yalnız Hatay kesiminde) → D (sonraki tahdit);
       batı (Payas güneyi→Meydan-ı Ekbez) metin "yaklaşık" → C
"""
import sys, io, os, json, math
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
from shapely.geometry import shape, Point, LineString, Polygon, box, MultiLineString
from shapely.ops import unary_union, linemerge, substring

K12 = r"C:\atlas-kosu12\data"
GEONAMES = r"C:\Users\emrem\GEONAMES\allCountries.txt"
GUN = "1923-10-28"
SADE = 0.002          # derece (~200 m) — çizim için
IBS = "https://library.law.fsu.edu/Digital-Collections/LimitsinSeas/pdf/ibs%03d.pdf"


def km(a, b, c, d):
    r = math.pi / 180
    return 6371 * math.hypot((d - b) * r * math.cos((a + c) / 2 * r), (c - a) * r)


def gn(ulke, *adlar):
    ad = {a.lower() for a in adlar}
    with open(GEONAMES, encoding="utf-8") as f:
        for l in f:
            c = l.split("\t")
            if c[8] == ulke and c[6] == "P" and (c[1].lower() in ad or ad & {x.lower() for x in c[3].split(",")}):
                return float(c[4]), float(c[5]), c[0], c[1]
    raise SystemExit(f"çıpa yok: {ulke} {adlar}")


C = json.load(open("veri-kaynak/ne_10m_admin_0_countries.geojson", encoding="utf8"))
G = {f["properties"]["ADM0_A3"]: shape(f["geometry"]).buffer(0) for f in C["features"]
     if f["properties"]["ADM0_A3"] in ("TUR", "GRC", "BGR", "GEO", "ARM", "AZE", "IRN", "IRQ", "SYR")}
tr = G["TUR"]

payas = gn("TR", "Payas")
mek = gn("SY", "Maydān Ikbis")
kiyi_lat = payas[0] - 2.0 / 111.0
kes = tr.intersection(LineString([(35.8, kiyi_lat), (payas[1] + 0.2, kiyi_lat)]))
kiyi_lon = min(x for g in getattr(kes, "geoms", [kes]) for x, _ in g.coords)
hatay = tr.intersection(Polygon([(35.5, kiyi_lat), (kiyi_lon, kiyi_lat), (mek[1], mek[0]),
                                 (mek[1] + 0.03, 35.5), (35.5, 35.5)]))
tr1923 = tr.difference(hatay)


def hat(k):
    h = tr.boundary.intersection(G[k].buffer(0.02))
    h = linemerge(h) if h.geom_type == "MultiLineString" else h
    return list(getattr(h, "geoms", [h]))


def kirp(parcalar, kutu, disari):
    """kutu içini (disari=False) ya da dışını (True) döndürür."""
    out = []
    for p in parcalar:
        q = p.difference(kutu) if disari else p.intersection(kutu)
        for g in getattr(q, "geoms", [q]):
            if g.geom_type == "LineString" and g.length > 0.005:
                out.append(g)
    return out


def sol_taraf(ls, a, b):
    """Çizginin SOLUNDA kalan taraf (ilerleme yönüne göre) — orta noktadan 3 km sola bak."""
    m = ls.interpolate(0.5, normalized=True)
    p0 = ls.interpolate(max(0, ls.project(m) - 0.005))
    p1 = ls.interpolate(min(ls.length, ls.project(m) + 0.005))
    dx, dy = p1.x - p0.x, p1.y - p0.y
    n = math.hypot(dx, dy) or 1
    sol = Point(m.x - dy / n * 0.03, m.y + dx / n * 0.03)
    return a if tr1923.contains(sol) else b


def dizi(g):
    g = g.simplify(SADE, preserve_topology=False)
    return [[round(x, 4), round(y, 4)] for x, y in g.coords]


# İran'da 1923'ten SONRA değişen kesimler (IBS 28 s.5-6) — kutular DAYANAKLI ÇIPALARLA
kucuk_agri = gn("TR", "Doğubayazıt")        # yalnız enlem bandı için referans
kotur = gn("IR", "Qoţūr", "Qotur", "Kotur")
bacirge = (37.7114, 44.6010)                 # data/yerlesimler_sinir_dogu.js, GeoNames 'Bajirge'
IRN_DEGISEN = [
    ("kucuk-agri-1932", box(44.25, 39.50, 44.85, 39.78),
     "IBS 28 s.6: Küçük Ağrı'nın doğu yamacı 1932'de Türkiye lehine değişti (Tahran 23.1.1932 md.I)"),
    ("kotur-1932", box(44.05, kotur[0] - 0.30, 44.75, kotur[0] + 0.30),
     "IBS 28 s.5-6: Kotur kesimi 1914'te İŞARETLENMEMİŞTİ (~40 mil) ve 1932'de İran lehine değişti"),
    ("bacirge-1932-1937", box(44.35, 37.35, 44.95, bacirge[0] + 0.15),
     "IBS 28 s.5-6: Bacirge (Nazlu Çayı kolları) 1932'de İran lehine; 1937 düzeltmesi güney ucun ~25 mil kuzeyinde (Tahran 26.5.1937)"),
]

KAYIT = []


def ekle(id_, a, b, f, t, kategori, parcalar, dayanak, degisti, tahdit, kesinlik, kesinlik_not, geo_kaynak, not_="",
         sinif=None, tarih_kesinlik=None):
    for i, ls in enumerate(parcalar):
        KAYIT.append({
            "id": f"{id_}" + (f"-{i+1}" if len(parcalar) > 1 else ""),
            "taraflar": [a, b], "f": f, "t": t, "kategori": kategori,
            **({"sinif": sinif} if sinif else {}),
            **({"tarih_kesinlik": tarih_kesinlik} if tarih_kesinlik else {}),
            "sol_taraf": sol_taraf(ls, a, b),
            "hat": dizi(ls),
            "uzunluk_km": round(ls.length * 111 * 0.8, 1),
            "geometri_kaynagi": geo_kaynak,
            "degisti": degisti, "tahdit": tahdit,
            "kesinlik_km": kesinlik, "kesinlik_not": kesinlik_not,
            "dayanak": dayanak, "not": not_,
        })


TT = "tbmm-turkiye"
NE = "Natural Earth 10m admin-0 (bugünkü sınır) — kullanılabilirliği 'değişmedi' dayanağına bağlı"
KES_NE = "NE 1:10m ölçek; konum hatası ÖLÇÜLMEDİ (ölçek gereği ~1-2 km beklenir)"

ekle("d1923-tr-bg", TT, "bulgaristan-kralligi", "1923-07-24", "1923-10-29", "D", hat("BGR"),
     [{"ad": "Lozan Antlaşması", "madde": "md. 2/1", "tarih": "1923-07-24", "tur": "antlaşma metni",
       "kaynak": "TTK tam metin (ttk.gov.tr/wp-content/uploads/2016/11/3-Lozan13-357.pdf)",
       "alinti": "Bulgaristanın elyevm tahdit edilmiş olduğu şekilde cenup hududu"},
      {"ad": "IBS No. 49 Bulgaria–Turkey (1965)", "sayfa": "s.4-5", "tur": "resmî sınır çalışması", "url": IBS % 49,
       "alinti": "as demarcated in 1921 by La Commission de Delimitation"}],
     {"deger": False, "kaynak": "IBS 49", "not": "Lozan 1921 işaretini teyit etti; yalnız Yunan üçlü noktası 1926'da sabitlendi"},
     {"t": "1921", "not": "Neuilly komisyonu 320 baba; 29 Ekim 1923'te ZATEN işaretliydi"},
     1.5, KES_NE, NE)

ekle("d1923-tr-gr", TT, "yunanistan", "1923-07-24", "1923-10-29", "D", hat("GRC"),
     [{"ad": "Lozan Antlaşması", "madde": "md. 2/2", "tarih": "1923-07-24", "tur": "antlaşma metni",
       "kaynak": "TTK tam metin", "alinti": "Meriç mecrası … Arda mecrası … Bosna Köy'ü Türkiye'de bırakan … hat"},
      {"ad": "IBS No. 41 Greece–Turkey (1964)", "sayfa": "s.2, s.8", "tur": "resmî sınır çalışması", "url": IBS % 41,
       "alinti": "There are no parts of the boundary in dispute"},
      {"ad": "TDV lozan-antlasmasi", "tur": "TDV", "alinti": "Karaağaç Türkiye'de kalmak üzere Meriç ırmağının talvegi"}],
     {"deger": False, "kaynak": "IBS 41", "not": "Lozan tahdidi; ihtilaflı parça yok. ⚠️ Meriç talvegi yatak değiştikçe kayar — ölçülmedi"},
     {"t": "1925-1926", "not": "Karma komisyon; Atina Protokolü 3 Kasım 1926. 29 Ekim 1923'te hat METİNLE belirliydi, yerinde İŞARETSİZDİ"},
     1.5, KES_NE + " · nehir talvegi değişkenliği ayrıca", NE)

for kod, ad in (("GEO", "gurcistan"), ("ARM", "ermenistan"), ("AZE", "nahcivan")):
    # G1 (16 Eylül): başlangıç Kars (13.10.1921) değil MOSKOVA (16.3.1921) — IBS 29: "The Treaty of
    # Moscow (1921) delimited the boundary as it exists today"; TDV `kars`: "Moskova (16 Mart 1921)
    # ve Kars (13 Ekim 1921) antlaşmalarıyla yapılan son sınır tashihleri".
    ekle(f"d1923-tr-sscb-{ad}", TT, "sovyet-rusya", "1921-03-16", "1923-10-29", "D", hat(kod),
         [{"ad": "Moskova Antlaşması", "tarih": "1921-03-16", "tur": "antlaşma", "madde": "bulunamadı (madde no okunmadı)"},
          {"ad": "Kars Antlaşması", "tarih": "1921-10-13", "tur": "antlaşma", "madde": "bulunamadı"},
          {"ad": "IBS No. 29 Turkey–U.S.S.R. (1964)", "sayfa": "s.4-6", "tur": "resmî sınır çalışması", "url": IBS % 29,
           "alinti": "Since 1921 the boundary has remained unchanged"},
          {"ad": "TDV agri", "tur": "TDV", "alinti": "BUGÜNKÜ Türk-Sovyet sınırı tesbit edilmiştir"}],
         {"deger": False, "kaynak": "IBS 29 + TDV agri"},
         {"t": "1925-1926", "not": "Karma Sovyet-Türk komisyonu (1:25.000, 49 pafta, 1926)"},
         1.5, KES_NE, NE,
         "Nahçıvan kesimi: IBS 29 Aras kesimini 'Türk-İran sınırına katıldığı yere' kadar veriyor ve 1921'den beri değişmedi diyor ⇒ temas 1921'den beri VAR" if kod == "AZE" else "")

irn = hat("IRN")
degisen_kutu = unary_union([k for _, k, _ in IRN_DEGISEN])
ekle("d1923-tr-ir", TT, "kacar", "1920-04-23", "1923-10-29", "D", kirp(irn, degisen_kutu, True),
     [{"ad": "İstanbul Protokolü (Türk-İran tahdidi)", "tarih": "1913-11-17", "tur": "protokol",
       "kaynak": "IBS 28 s.7 · H. Efe–M. Kızıl, ERZSOSDE X-I (2017) s.77-90"},
      {"ad": "IBS No. 28 Iran–Turkey (1964)", "sayfa": "s.5-7", "tur": "resmî sınır çalışması", "url": IBS % 28,
       "alinti": "by October 1914, had demarcated the entire boundary except for about 40 miles"}],
     {"deger": False, "kaynak": "IBS 28", "not": "Bu parçalar 1932/1937 değişikliklerinin DIŞINDA kalan kesimler; 'değişmedi' bir ÇIKARIM: IBS değişenleri adıyla sayıyor, kalanları saymıyor"},
     {"t": "1914-10", "not": "1913 protokolünün komisyonu işaretledi (Kotur hariç)"},
     2.0, KES_NE + " · değişen kesimlerin kutu sınırı TAHMİNİ (±10 km)", NE)
for (onek, taraf, ff, tt) in (("d1923", TT, "1920-04-23", "1923-10-29"), ("d1913", "osmanli", "1913-11-17", "1920-04-23")):
  for kid, kutu, gerekce in IRN_DEGISEN:
    KAYIT.append({"id": f"{onek}-tr-ir-DEGISTI-{kid}", "taraflar": [taraf, "kacar"], "f": ff, "t": tt, "sinif": "YOK",
                  "kategori": "D-YOK", "hat": None, "kutu": [round(v, 3) for v in kutu.bounds],
                  "degisti": {"deger": True, "kaynak": "IBS 28", "not": gerekce},
                  "not": "1923 hattının koordinatı ELDE YOK (1913 protokol metni/haritası okunmadı) ⇒ bu kutuda D ÇİZİLMEZ, A/B geçerli. Bugünkü çizgi 1923'ü GÖSTERMEZ."})

ekle("d1923-tr-iq-fiili", TT, "irak-kralligi", "1923-07-24", "1923-10-29", "fiili", hat("IRQ"),
     [{"ad": "Lozan Antlaşması", "madde": "md. 3/2", "tarih": "1923-07-24", "tur": "antlaşma metni",
       "alinti": "hudut dokuz ay zarfında … tayin edilecektir"},
      {"ad": "IBS No. 27 Iraq–Turkey (1964)", "sayfa": "s.4-7", "tur": "resmî sınır çalışması", "url": IBS % 27,
       "alinti": "Brussels Line (following almost exactly the northern border of Mosul vilayet)"}],
     {"deger": True, "kaynak": "IBS 27 s.5",
      "not": "1923'te HUKUKÎ HAT YOKTU. Statüko = Musul vilayetinin kuzey sınırı; 1924 Brüksel hattı ≈ o; 1926 = Brüksel + Aluman/Aşuta güneyinde küçük düzeltme (yeri ÖLÇÜLMEDİ)"},
     {"t": "1927-09", "not": "1926 Ankara Antlaşması sonrası işaretlendi"},
     5.0, "fiilî hat; bugünkü çizgiyle vekâlet — Aluman/Aşuta düzeltmesi DAHİL (yeri bilinmiyor)",
     NE + " — FİİLÎ STATÜKONUN VEKİLİ (Emre kararı 14.9.2026)",
     "Şartname md.4: 1923'te hukuken belirlenmemiş parça D OLAMAZ ⇒ kategori 'fiili'")

syr = hat("SYR")
dogu = []
for g in syr:
    cs = [c for c in g.coords if c[0] >= mek[1] - 0.01 or c[1] >= mek[0] + 0.05]
    if len(cs) >= 2:
        dogu.append(LineString(cs))
ekle("d1923-tr-sy-dogu", TT, "suriye-lubnan-mandasi", "1921-10-20", "1923-10-29", "D", dogu,
     [{"ad": "Ankara İtilafnamesi", "madde": "md. 8", "tarih": "1921-10-20", "tur": "antlaşma metni",
       "kaynak": "LNTS 54 No.1284 (IBS 163 s.3-4 aktarımı) · M. Budak, Atatürk Araştırma Merkezi Dergisi XIII/38 (1997) s.405-406",
       "alinti": "join the railway at the station of Choban-bey"},
      {"ad": "Lozan Antlaşması", "madde": "md. 3/1", "tarih": "1923-07-24", "tur": "antlaşma metni"},
      {"ad": "IBS No. 163 Syria–Turkey (1978)", "sayfa": "s.4-13", "tur": "resmî sınır çalışması", "url": IBS % 163,
       "alinti": "Annexed Protocol No. I … May 30, 1926, delimited … three sectors"}],
     {"deger": False, "kaynak": "IBS 163 s.13",
      "not": "1939 değişiklikleri (baba 230 ve 419'dan itibaren) YALNIZ Hatay kesiminde; Meydan-ı Ekbez doğusu 1926/1929/1930 protokolleriyle aynı"},
     {"t": "1926-05-30 / 1929-06-22 / 1930-05-03",
      "not": "🔴 29 Ekim 1923'te hat YALNIZ METİNLE (demiryolu · Nusaybin-Cizre eski yolu) belirliydi; koordinatlı tahdit SONRA. D bu SONRAKİ tahdidin 1921 metnine uygulanmasıdır"},
     2.0, KES_NE + " · 1926 tahdidinin 1921 metninden sapması ÖLÇÜLMEDİ", NE)

bati = LineString([(kiyi_lon, kiyi_lat), (mek[1], mek[0])])
ekle("d1923-tr-sy-bati", TT, "suriye-lubnan-mandasi", "1921-10-20", "1923-10-29", "C", [bati],
     [{"ad": "Ankara İtilafnamesi", "madde": "md. 8", "tarih": "1921-10-20", "tur": "antlaşma metni",
       "kaynak": "IBS 163 s.3 · Budak 1997 s.405",
       "alinti": "immediately to the south of the locality of Payas and will proceed generally towards Meidan-Ekbes"}],
     {"deger": True, "kaynak": "IBS 163 s.12-13; TDV iskenderun + suriye",
      "not": "Hatay 1939'da Türkiye'ye katıldı; bu hat bugün İÇ sınır"},
     {"t": "1926-05-30 (1. kesim)", "not": "1926 tahdidinin bu kesimdeki ayrıntısı OKUNMADI (LNTS 54 metni çekilmedi)"},
     10.0, "metin 'yaklaşık olarak' diyor; iki uç GeoNames çıpası (Payas 2 km güneyi kıyı · Maydān Ikbis), arası DÜZ — Hassa'nın yakası belirsiz",
     "antlaşma metninden cetvel (2 nokta)")

# ════════════════ GERİYE SARMA G1 (1923 → 1918-11-11) · oturumlar/GERIYE-SARMA-0916.md ════════════════
# Kural: E/F değişikliği YALNIZ antlaşma/protokolle; önceki işgal = D (koordinat KESİNSE), değilse YAZILMAZ.
# YAZILMAYANLAR (koordinat kesin değil ⇒ A/B): Kars-Ardahan-Gümrü 1918-1921 cephe/işgal hatları
# (TDV `kars`: 12.4.1919 İngiliz işgali, 30.10.1920 Karabekir, 3.12.1920 Gümrü) · Kilikya'da Fransız-TBMM
# cephesi ve 1921-10-20 sonrası tahliye · Mondros sonrası Musul'un İngiliz işgali · 1878-1914 Osmanlı-Rus hattı.
TDV_MUD = {"ad": "TDV mudanya-mutarekesi (Cezmi Eraslan)", "tur": "TDV",
           "alinti": "Yunan kuvvetleri … Meriç'in sol kıyısına çekilecektir"}
IBS49 = {"ad": "IBS No. 49 Bulgaria–Turkey (1965)", "sayfa": "s.10-12", "tur": "resmî sınır çalışması", "url": IBS % 49,
         "alinti": "defined the boundary according to the Treaty of Constantinople of 1913"}
IBS49_SOFYA = {"ad": "Bulgar-Türk Sınır Düzeltme Sözleşmesi (Sofya)", "tarih": "1915-09-06", "tur": "sınır sözleşmesi",
               "kaynak": "IBS 49 s.10: 'signed at Sofia, August 24 (September 6), 1915'"}
KES_BG_ESKI = ("1915 metninin geometrisi 1921 İŞARETİYLE vekâleten çizildi; IBS 49 1921 komisyonunun 1913+1915 hattını "
               "işaretlediğini söylüyor, Meriç ucundaki 1915 düzeltmesinin bu parçaya etkisi ÖLÇÜLMEDİ")

ekle("d1915-osm-bg", "osmanli", "bulgaristan-kralligi", "1915-09-06", "1920-04-23", "D", hat("BGR"),
     [IBS49_SOFYA, IBS49],
     {"deger": None, "kaynak": "IBS 49", "not": "Neuilly (1919) bu hattı Bulgaristan için teyit etti; 1921 komisyonu işaretledi"},
     {"t": "1921", "not": "1915-1921 arası hat metinle belirliydi"},
     3.0, KES_BG_ESKI, NE, "G1: hukukî Osmanlı-Bulgar hattı. 1920-04-23'te taraf TBMM'ye geçer (atlas kimlik geçişi — SINIR DEĞİŞİMİ DEĞİL)",
     sinif="E")
ekle("d1920-tbmm-bg", TT, "bulgaristan-kralligi", "1920-04-23", "1923-07-24", "D", hat("BGR"),
     [IBS49_SOFYA, IBS49],
     {"deger": None, "kaynak": "IBS 49"}, {"t": "1921", "not": "Neuilly komisyonu"},
     3.0, KES_BG_ESKI, NE,
     "G1: aynı hukukî hat, taraf halef TBMM (Lozan 2/1 1923-07-24'te 'elyevm' hattı teyit etti). "
     "Fiilen 1920-07 → 1922-10 Doğu Trakya Yunan işgalindeydi ⇒ ayrıca D kaydı (d1920-yunan-isgal-bg)",
     sinif="E")
ekle("d1920-yunan-isgal-bg", "yunanistan", "bulgaristan-kralligi", "1920-07-01", "1922-10-14", "fiili", hat("BGR"),
     [{"ad": "TDV edirne (M. Tayyib Gökbilgin)", "tur": "TDV", "alinti": "Temmuz 1920'de Yunan işgaline uğradı. 1922'de kurtarıldı"},
      TDV_MUD,
      {"ad": "IBS No. 41 Greece–Turkey (1964)", "sayfa": "s.4", "tur": "resmî sınır çalışması", "url": IBS % 41,
       "alinti": "signed the Mudania Armistice three days later on October 14, 1922"}],
     {"deger": None, "kaynak": "—", "not": "fiilî hat; hukukî hat d1920-tbmm-bg"},
     {"t": "1921", "not": "hat 1921'de işaretlendi"},
     3.0, KES_BG_ESKI, NE,
     "G1 FİİLÎ: Doğu Trakya'daki Yunan işgali (Sevr 10.8.1920 hiç yürürlüğe girmedi ⇒ hukuken E DEĞİL). "
     "🔴 f AY hassasiyetinde (TDV 'Temmuz 1920', gün YOK). t Mudanya'nın yürürlüğü; Yunan tahliyesi md.5 gereği "
     "15 gün daha sürdü, müttefik ara idaresi ≤30 gün — o ara dönem ayrıca YAZILMADI (taraf ve gün belirsiz)",
     sinif="D", tarih_kesinlik={"f": "ay", "t": "gun"})

_nehir = json.load(open("veri-kaynak/ne_10m_rivers.geojson", encoding="utf8"))
evros = unary_union([shape(f["geometry"]) for f in _nehir["features"] if f["properties"].get("name") == "Evros"])
_m = evros.intersection(unary_union(hat("GRC")).buffer(0.08))
meric = linemerge(_m) if _m.geom_type == "MultiLineString" else _m
ekle("d1922-mudanya-meric", TT, "yunanistan", "1922-10-14", "1923-07-24", "fiili", list(getattr(meric, "geoms", [meric])),
     [{"ad": "Mudanya Mütarekesi", "madde": "md. 2 · md. 3 · md. 5", "tarih": "1922-10-11", "tur": "ateşkes",
       "kaynak": "TDV mudanya-mutarekesi", "alinti": "Karaağaç dahil Meriç'in sağ kıyısı müttefiklerce işgal edilecektir"},
      {"ad": "IBS No. 41 Greece–Turkey (1964)", "sayfa": "s.4-5", "tur": "resmî sınır çalışması", "url": IBS % 41,
       "alinti": "To restore Thrace as far as the Maritsa River to Turkey"}],
     {"deger": None, "kaynak": "—", "not": "ateşkes hattı; Lozan (1923-07-24) aynı nehri hukukî hat yaptı + Karaağaç dirseği"},
     {"t": "—", "not": "işaretlenmedi (ateşkes)"},
     2.0, "Natural Earth 10m nehirler 'Evros' (ölçek 7) — talveg değil, nehir çizgisi; konum hatası ÖLÇÜLMEDİ",
     "Natural Earth 10m rivers 'Evros'",
     "G1 FİİLÎ: ateşkes hattı = Meriç, denizden Bulgar üçlü noktasına (md.2). Karaağaç dahil sağ kıyı barışa kadar "
     "MÜTTEFİK işgalinde (md.3) — o şerit ayrı taraf, koordinatı yok, YAZILMADI. f: IBS 41 Yunan imzası 14 Ekim; "
     "TDV 'üç gün içinde yürürlüğe girecek' (imza 11 Ekim)",
     sinif="D")

ekle("d1913-osm-ir", "osmanli", "kacar", "1913-11-17", "1920-04-23", "D", kirp(irn, degisen_kutu, True),
     [{"ad": "İstanbul Protokolü (Türk-İran tahdidi)", "tarih": "1913-11-17", "tur": "protokol",
       "kaynak": "IBS 28 s.7 · H. Efe–M. Kızıl, ERZSOSDE X-I (2017) s.77-90"},
      {"ad": "IBS No. 28 Iran–Turkey (1964)", "sayfa": "s.5-7", "tur": "resmî sınır çalışması", "url": IBS % 28,
       "alinti": "by October 1914, had demarcated the entire boundary except for about 40 miles"}],
     {"deger": False, "kaynak": "IBS 28", "not": "1932/1937 değişikliklerinin DIŞINDAKİ kesimler (çıkarım, bkz. d1923-tr-ir)"},
     {"t": "1914-10", "not": "Kotur hariç işaretlendi"},
     2.0, KES_NE, NE, "G1: 1920-04-23'te taraf TBMM'ye geçer (kimlik geçişi — SINIR DEĞİŞİMİ DEĞİL). "
     "1914-1918 Rus ve Osmanlı işgalleri G2'nin işi", sinif="E")

# ════════════════ GERİYE SARMA G2 (1918-11-11 → 1914-07-28) ════════════════
# IBS 49 s.9-10: bugünkü hat, 1913 İstanbul Antlaşması hattını "exactly follows" — Tunca'yı
# Radovets'in GÜNEYİNDE kestiği noktaya kadar. O noktadan Meriç'e kadarki kesim 1915 Sofya
# Sözleşmesi'nin (baba 279-320). ⇒ 1913-09-29 → 1915-09-06 arası YALNIZ doğu kesim E yazılabilir.
# YAZILMAYANLAR (koordinat yok): 1913 hattının Tunca batısı · 1915-1919 aşağı Meriç kesimi (IBS 49
# yalnız "about one mile east of the Maritsa" diyor — Edirne'yi keserdi, ayrıntı BİLİNMİYOR) ·
# Brest-Litovsk (3.3.1918, TDV kars) ve Batum (4.6.1918) hatları · 1914-1918 Kafkas, İran, Irak,
# Suriye cepheleri · Mondros sonrası tahliye hatları.
radovets = gn("BG", "Radovets")
_bg = max(hat("BGR"), key=lambda g: g.length)
_bg = _bg if _bg.geom_type == "LineString" else max(_bg.geoms, key=lambda g: g.length)
_kes = _bg.project(Point(radovets[1], radovets[0]))
_uclar = [Point(_bg.coords[0]), Point(_bg.coords[-1])]
if _uclar[0].x > _uclar[1].x:            # Rezve (Karadeniz) ucu doğudadır
    _dogu1913 = substring(_bg, 0, _kes)
else:
    _dogu1913 = substring(_bg, _kes, _bg.length)
ekle("d1913-osm-bg-dogu", "osmanli", "bulgaristan-kralligi", "1913-09-29", "1915-09-06", "D", [_dogu1913],
     [{"ad": "Bulgar-Osmanlı Barış Antlaşması (İstanbul)", "madde": "md. I", "tarih": "1913-09-29", "tur": "antlaşma",
       "kaynak": "IBS 49 s.10: 'signed at Constantinople, September 16/29, 1913. Article I, defines the … frontier'"},
      {"ad": "IBS No. 49 Bulgaria–Turkey (1965)", "sayfa": "s.9-10", "tur": "resmî sınır çalışması", "url": IBS % 49,
       "alinti": "it exactly follows the former Turco-Bulgarian frontier"}],
     {"deger": False, "kaynak": "IBS 49 s.9-10", "not": "bu doğu kesim 1913'ten bugüne AYNI; batı ucu 1915'te değişti"},
     {"t": "1921", "not": "Neuilly komisyonu işaretledi; 1913-1921 arası hat metinle belirliydi"},
     3.0, KES_NE + " · kesim noktası: GeoNames Radovets'in (" + f"{radovets[0]:.3f}/{radovets[1]:.3f}" +
     ") bugünkü hat üzerindeki izdüşümü — IBS 'Tunca'yı Radovets'in güneyinde kestiği yer' diyor, ±5 km",
     NE, "G2: 1913 hattının DOĞU kesimi. Tunca batısındaki 1913 kesimi koordinatsız ⇒ YAZILMADI (A/B)",
     sinif="E")

# ════════════════ GERİYE SARMA G3 (1914-07-28 → 1878-07-13, Berlin) ════════════════
# IBS 49 s.9: 1913 hattı Rezve'den gelip "old Turco-Bulgarian frontier"e katılır — birleşme noktası
# "Türk-Alatlı'nın 4 km doğusu, eski sınırın KUZEYE açı yaptığı yer"; oradan Tunca'ya kadar ESKİ SINIR.
# Birleşme noktası = bugünkü hattın EN KUZEY noktası (27.238/42.098). Sınav: GeoNames Ahlatlı (Kofçaz,
# 42.077/27.227) bu noktanın 2,6 km BATISINDA; Ahlatlı = eski Alatlı özdeşliği yalnız web kaynaklarında
# (akademik DEĞİL) ⇒ BELGELENEMEDİ, kesinlik 4 km.
# 1878-1908: eski sınır Osmanlı ile Doğu Rumeli (özerk Osmanlı vilâyeti) / tâbi Bulgaristan arasındaydı
# ⇒ DEVLETLER ARASI HAT DEĞİL, yazılmadı. Tunca batısı (1913 öncesi) ve 1912-13 Balkan cepheleri koordinatsız.
_kuzey = max(_bg.coords, key=lambda c: c[1])
_a, _b = sorted([_bg.project(Point(_kuzey)), _kes])
_eski = substring(_bg, _a, _b)
TDV_BG = {"ad": "TDV bulgaristan (Nazif Kuyucuklu)", "tur": "TDV",
          "alinti": "Bulgaristan 5 Ekim 1908 tarihinde bağımsızlığını ilân ettikten sonra"}
DOGAN = {"ad": "Türk-Bulgar Protokolü (İstanbul)", "tarih": "1909-04-19", "tur": "protokol",
         "kaynak": "Ş. Doğan, 'Rus Kaynakları Işığında Bulgaristan'ın Bağımsızlık İlanı', Balkan Araştırma Enstitüsü Dergisi 9/2 (2020) s.322",
         "alinti": "Bu anlaşmalar neticesinde Osmanlı Devleti Bulgaristan'ın bağımsızlığını tanıdı"}
KES_ESKI = ("birleşme noktası bugünkü hattın en kuzey noktası (IBS 49 tarifi); Türk-Alatlı özdeşliği "
            "BELGELENEMEDİ ±4 km · Tunca ucu Radovets izdüşümü ±5 km · " + KES_NE)
ekle("d1908-bg-bagimsiz-eski", "osmanli", "bulgaristan-kralligi", "1908-10-05", "1909-04-19", "fiili", [_eski],
     [TDV_BG, IBS49], {"deger": False, "kaynak": "IBS 49 s.9 'exactly follows the former Turco-Bulgarian frontier'"},
     {"t": "1921", "not": "Neuilly komisyonu işaretledi"}, 5.0, KES_ESKI, NE,
     "G3 FİİLÎ: bağımsızlık ilanı ile Osmanlı tanıması arası — hat aynı, taraf fiilen bağımsız devlet oldu",
     sinif="D")
ekle("d1909-osm-bg-eski", "osmanli", "bulgaristan-kralligi", "1909-04-19", "1913-05-30", "D", [_eski],
     [DOGAN, IBS49], {"deger": False, "kaynak": "IBS 49 s.9"},
     {"t": "1921", "not": "1909-1921 arası hat eski (Berlin sonrası) işaretleriyle"}, 5.0, KES_ESKI, NE,
     "G3: Osmanlı'nın tanımasıyla eski sınırın bu kesimi devletler arası hat oldu. 1912-10'dan itibaren Bulgar "
     "işgali (Balkan Savaşı) cephe hatları koordinatsız ⇒ D YAZILMADI; E Londra'ya kadar sürer",
     sinif="E")
def gn_id(gid):
    """Ad çakışmasına karşı kimlikle çıpa (Kıyıköy adı Muğla'da da var — ilk sürüm onu aldı, hat 405 km çıktı)."""
    with open(GEONAMES, encoding="utf-8") as f:
        for l in f:
            if l.startswith(gid + "\t"):
                c = l.split("\t")
                return float(c[4]), float(c[5]), c[0], c[1]
    raise SystemExit(f"GeoNames id yok: {gid}")


enez = gn_id("747503")
midye = gn_id("743093")
ekle("d1913-londra-enez-midye", "osmanli", "bulgaristan-kralligi", "1913-05-30", "1913-09-29", "C",
     [LineString([(enez[1], enez[0]), (midye[1], midye[0])])],
     [{"ad": "Londra Antlaşması", "madde": "md. II", "tarih": "1913-05-30", "tur": "antlaşma metni",
       "kaynak": "Wikisource neşri (data/hukuki_sinirlar.js midye-enez-1913 kaydıyla aynı metin)",
       "alinti": "a line drawn from Enos on the Aegean Sea to Midia on the Black Sea"},
      {"ad": "TDV bulgaristan", "tur": "TDV", "alinti": "30 Mayıs 1913 tarihinde imzalanan Londra Antlaşması"}],
     {"deger": True, "kaynak": "IBS 49", "not": "1913-09-29 İstanbul Antlaşması'yla Osmanlı Edirne'yi geri aldı"},
     {"t": "—", "not": "işaretlenmedi"}, 10.0,
     "antlaşma metni cetvel çizgisi: GeoNames Enez (747503) ↔ Kıyıköy/Midye (743093); kıyı uçları metinde tarifsiz",
     "antlaşma metninden cetvel (2 nokta)",
     "G3: taraf_b Balkan müttefikleri adına; C kaydının (hukuki_sinirlar midye-enez-1913) bulgaristan-kralligi seçimi korundu. "
     "t: 1913-09-29 İstanbul Antlaşması (IBS 49)",
     sinif="C")
# 🔴 sol_taraf 1923 poligonuna bakar; 1913'te Enez→Midye çizgisinin SOLU (kuzeybatı, Edirne yakası)
#    müttefiklere bırakılmıştı ⇒ elle düzeltme (ilk sürüm 'osmanli' basıyordu).
KAYIT[-1]["sol_taraf"] = "bulgaristan-kralligi"

# ════════════════ GERİYE SARMA G4 → G7 (1878-07-13 → 1606-11-11) ════════════════
# Türkiye'nin 1923 kesimlerinden 1878 öncesinde DEVLETLER ARASI olanlar yalnız ikisi:
#   ① Rus kesimi, Kanlı Dağı → Arpaçay → Aras kavşağı. IBS 29 s.4-7: 1829 Edirne md.IV hattı
#     "Batum, Ardahan ve Kars sancaklarının kuzey idarî sınırı"; 1920'de sınır "1878 öncesi hâline"
#     döndü — İSTİSNA Batum kesimi (Sarp→Kanlı Dağı) ve Aras/Sürmeli kesimi. ⇒ E.
#   ② İran kesimi — IBS 28 s.4: 1639 hattı "located much as it exists today"; 1847 "vaguely defined",
#     1869 Carte Identique 25 millik kuşak ⇒ C (kaba), kesinlik 40 km.
# Trakya · Meriç · Suriye · Irak 1912'ye kadar Osmanlı İÇ hattı ⇒ kayıt yok.
# YAZILMAYANLAR: 1728-1746 İran hattı (Hemedan 1728 · 8.1.1732 barışı · 1736 zemini — koordinatsız) ·
# 1606-1639 (Nasuh Paşa 1612 / Serav 1618 "1555 sınırı"; IBS 1555≈bugün DEMİYOR) · 1823 I. Erzurum
# (kaynağı bu turda OKUNMADI) · 1853-56 ve 1877-78 Rus işgalleri (koordinatsız) · 1828 öncesi Arpaçay
# (Osmanlı-İran; IBS 29 söylemiyor) · Ayastefanos 3.3.1878 hattı (Beyazıt dahil, koordinatsız).
kanli = gn_id("553116")          # Kanli Dağı (GE, MT) — IBS 29: Artvin/Kars idarî sınırının üçlü noktası
arpa_agiz = gn_id("10007052")    # Arpa Çay (TR, STM) — Aras kavşağı
_geo = max(hat("GEO"), key=lambda g: g.length)
_arm = max(hat("ARM"), key=lambda g: g.length)
_ku = _geo.project(Point(kanli[1], kanli[0]))
_geo_dogu = substring(_geo, _ku, _geo.length) if Point(_geo.coords[-1]).x > Point(_geo.coords[0]).x else substring(_geo, 0, _ku)
_ak = _arm.project(Point(arpa_agiz[1], arpa_agiz[0]))
_arm_kuzey = substring(_arm, 0, _ak) if Point(_arm.coords[0]).y > Point(_arm.coords[-1]).y else substring(_arm, _ak, _arm.length)
ekle("d1829-osm-rus", "osmanli", "rusya", "1829-09-14", "1878-07-13", "D", [_geo_dogu, _arm_kuzey],
     [{"ad": "Edirne Antlaşması", "madde": "md. 2-4", "tarih": "1829-09-14", "tur": "antlaşma",
       "kaynak": "TDV edirne-antlasmasi", "alinti": "Böylece Ahıska ve Ahılkelek Ruslar'da kalıyordu"},
      {"ad": "IBS No. 29 Turkey–U.S.S.R. (1964)", "sayfa": "s.4-7", "tur": "resmî sınır çalışması", "url": IBS % 29,
       "alinti": "re-established as it had been prior to the 1878 Treaty"},
      {"ad": "Berlin Antlaşması", "madde": "md. LVIII", "tarih": "1878-07-13", "tur": "antlaşma",
       "kaynak": "IBS 29 s.7: 'transfer of Batumi, Ardahan, and Kars from Turkey to Russia'"}],
     {"deger": False, "kaynak": "IBS 29", "not": "1921 hattı bu kesimde 1878 öncesi hattın geri gelişidir"},
     {"t": "1925-1926", "not": "bugünkü işaretler; 1829 hattının kendi işareti OKUNMADI"},
     5.0, "kesim uçları GeoNames Kanlı Dağı (553116) ve Arpa Çay ağzı (10007052) izdüşümleri · " + KES_NE, NE,
     "G4: t Berlin (IBS 29 çerçevesi: Ayastefanos askerî işgal öngördü, devri Berlin yaptı). "
     "Kronoloji: çekirdekte 1829-09-14 Edirne ve 1878-07-13 Berlin maddeleri VAR, yeni madde yazılmadı",
     sinif="E")

_irn_tum = unary_union(irn)
_irn_tum = linemerge(_irn_tum) if _irn_tum.geom_type == "MultiLineString" else _irn_tum
_irn_tum = list(getattr(_irn_tum, "geoms", [_irn_tum]))
KES_IR_C = ("C KABA: IBS 28 1869 'Carte Identique' sınırı 25 millik kuşakta gösteriyor ⇒ 40 km; geometri "
            "bugünkü hattın vekili (1932/37 değişen kesimler DAHİL)")
IBS28 = {"ad": "IBS No. 28 Iran–Turkey (1964)", "sayfa": "s.4-7", "tur": "resmî sınır çalışması", "url": IBS % 28,
         "alinti": "located much as it exists today, was laid down in 1639"}
ekle("d1847-osm-kacar-erzurum", "osmanli", "kacar", "1847-05-31", "1913-11-17", "C", _irn_tum,
     [{"ad": "II. Erzurum Antlaşması", "tarih": "1847-05-31", "tur": "antlaşma", "kaynak": "IBS 28 s.6",
       "alinti": "the limits of the two empires were vaguely defined"}, IBS28],
     {"deger": True, "kaynak": "IBS 28", "not": "1913 protokolüyle tahdit, 1932/1937 değişiklikleri"},
     {"t": "—", "not": "1848-52 komisyonu harita yaptı ama hat işaretlenmedi"},
     40.0, KES_IR_C, NE + " — C vekili",
     "G4 (G3'e uzanır). Berlin md.LX Kotur'u İran'a verdi, uygulanması yıllar sürdü (IBS 28) — ayrı kayıt yok. "
     "Kronoloji: çekirdekte 1847-05-31 maddesi VAR", sinif="C")
ekle("d1746-osm-afsar-kerden", "osmanli", "afsar", "1746-09-04", "1847-05-31", "C", _irn_tum,
     [{"ad": "Kerden Antlaşması", "tarih": "1746-09-04", "tur": "antlaşma", "kaynak": "TDV mahmud-i--osmanli (Abdülkadir Özcan)",
       "alinti": "Kasrışîrin Antlaşması esasları dahilinde anlaşma sağlandı (17 Şâban 1159 / 4 Eylül 1746)"}, IBS28],
     {"deger": True, "kaynak": "IBS 28"}, {"t": "—", "not": "işaretlenmedi"},
     40.0, KES_IR_C, NE + " — C vekili",
     "G4-G5-G6: taraf Nâdir Şah'ın Afşar devleti; HALEFLERİ (Zend, Kaçar) aynı hattı devraldı — kimlik geçişi sınır "
     "değişimi değil, künye günleri kaynak sayılmadığı için bölünmedi. 1823 I. Erzurum OKUNMADI. "
     "Kronoloji: çekirdekte 1746-09-04 maddesi VAR", sinif="C")
ekle("d1639-osm-safevi-kasrisirin", "osmanli", "safevi", "1639-05-17", "1728-09-22", "C", _irn_tum,
     [{"ad": "Kasr-ı Şirin (Zühâb) Antlaşması", "tarih": "1639-05-17", "tur": "antlaşma", "kaynak": "TDV murad-iv",
       "alinti": "Kasrışîrin Antlaşması imzalanmıştı (14 Muharrem 1049 / 17 Mayıs 1639)"}, IBS28,
      {"ad": "Hemedan Barış Antlaşması", "tarih": "1728-09-22", "tur": "antlaşma", "kaynak": "TDV hemedan",
       "alinti": "17 Safer 1141'de (22 Eylül 1728) imzalanan Hemedan Barış Antlaşması"}],
     {"deger": True, "kaynak": "IBS 28"}, {"t": "—", "not": "işaretlenmedi"},
     40.0, KES_IR_C, NE + " — C vekili",
     "G6-G7: t Hemedan Antlaşması (Osmanlı fetihlerini tanıdı). 🔴 KAYNAK ÇELİŞKİSİ: çekirdek madde 1727-10-04, "
     "TDV hemedan 22 Eylül 1728 (hicrî ile) — TDV esas alındı (§4). 1723-1728 Osmanlı işgali koordinatsız. "
     "Kronoloji: çekirdekte 1639-05-17 maddesi VAR", sinif="C")

# ---------------- SINIF (GORUNUM-ABCD-0916 en üst bölüm) ----------------
# D→E (F kanıtı gelene kadar: denetim/TANINMA-1923-0916.json YOK, 16 Eylül'de ölçüldü) · fiili→D ya da YOK ·
# C→C · D-YOK→YOK.  Irak fiilî hattı KESİN DEĞİL (bugünkü çizgi statükonun VEKİLİ) ⇒ YOK.
_ESLE = {"D": "E", "C": "C", "D-YOK": "YOK", "fiili": "YOK"}
for r in KAYIT:
    if "sinif" not in r:
        r["sinif"] = _ESLE[r["kategori"]]
    if r["sinif"] == "E":
        r["sinif_not"] = "F için tanınma kanıtı (denetim/TANINMA-1923-0916.json) henüz yok — E yazıldı"
    if r["kategori"] == "fiili" and r["sinif"] == "YOK":
        r["sinif_not"] = ("fiilî statüko hattının koordinatı KESİN DEĞİL (bugünkü çizgi vekil) ⇒ YOK; "
                          "hat bilgi amaçlı duruyor, çizilmemeli")

# ---------------- KIYAS: koşu 12 ----------------
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
    kiyas["girdi_sinir_dosyalari"] = sorted(f for f in UI.get("girdi", {}) if "sinir" in f)
    # 🔴 16 Eylül ölçümü: C:/atlas-kosu12/data/donemler.js o klasörün GIT KOPYASIDIR (mtime = checkout);
    #    koşu 12 bitene kadar içindeki çıktı YAYINDAKİ koşu 11'inkidir. İz bunu söyler: sinir_kuzey yoksa
    #    çıktı 28 sınır köyünden ÖNCEKİ taban.
    kiyas["taban"] = ("koşu 12 ÇIKTISI" if "yerlesimler_sinir_kuzey.js" in UI.get("girdi", {})
                      else "YAYINDAKİ KOŞU 11 (sınır köyleri ÖNCESİ) — koşu 12 henüz yazmadı")
    govde = None
    for dv in DH:
        if dv["id"] == TT:
            for p in dv["dnm"]:
                if p["f"] <= GUN < p["t"]:
                    ps = []
                    for q in p["g"]:
                        halka = [DP[h] for h in DPH[q]]
                        ps.append(Polygon(halka[0], halka[1:]).buffer(0))
                    govde = unary_union(ps)
    if govde is None:
        raise RuntimeError("koşu 12'de tbmm-turkiye 1923-10-28 dönemi yok")
    sinir = govde.boundary
    for r in KAYIT:
        if not r.get("hat") or r["t"] != "1923-10-29":   # yalnız 29 Ekim 1923 hâli kıyaslanır
            continue
        ls = LineString(r["hat"])
        n = max(2, int(ls.length * 111 / 2))
        d = []
        for i in range(n + 1):
            q = ls.interpolate(i / n, normalized=True)
            d.append(sinir.distance(q) * 111 * math.cos(math.radians(q.y)) ** 0.5)
        d.sort()
        r["kiyas_atlas"] = {"ornek": len(d), "ortanca_km": round(d[len(d) // 2], 1),
                             "p90_km": round(d[int(len(d) * .9)], 1), "enkotu_km": round(d[-1], 1),
                             "le5_yuzde": round(100 * sum(1 for x in d if x <= 5) / len(d))}
    kiyas["durum"] = "ölçüldü"
except Exception as e:
    kiyas["durum"] = f"ÖLÇÜLEMEDİ: {e}"

# ---------------- yaz ----------------
bas = ["// -*- coding: utf-8 -*-",
       "// data/d_sinirlar.js — D KATEGORİSİ SINIRLAR (koordinatlı, parça parça kaynaklı)",
       "// D1-TURKIYE · 16 Eylül 2026 · şema denetim/SEMA-D-0916.md · rapor denetim/D1-TURKIYE-0916.md",
       "// Üretici: denetim/ARAC-D1-URET-0916.py — 🔴 ELLE DÜZENLEME, yeniden üret.",
       "// 🔴 BAĞLAYICI ALAN `sinif` (oturumlar/GORUNUM-ABCD-0916.md en üst bölüm, Emre 16 Eylül akşamı):",
       "//    F = E + tanınma · E = hukukî kesin · D = FİİLÎ kesin · C = belge kaba · YOK = çizilmez (A/B geçerli)",
       "//    Tanınma kanıtı (denetim/TANINMA-1923-0916.json) gelene kadar F yerine E yazıldı.",
       "// `kategori` ESKİ alan (geçiş dönemi): D (koordinatlı hukukî) · C · fiili · D-YOK.",
       "// G1 geriye sarma (1923 → 1918-11-11) kayıtları da bu dosyada (d1913/d1915/d1920/d1922 önekleri).",
       "// sol_taraf: `hat` ilerleme yönüne göre SOLDA kalan devlet (render tarafı için).",
       "", "window.D_SINIRLAR = ["]
satir = [json.dumps(r, ensure_ascii=False, separators=(",", ":")) + "," for r in KAYIT]
io.open("data/d_sinirlar.js", "w", encoding="utf-8").write("\n".join(bas + satir + ["];", ""]))
json.dump({"kiyas": kiyas, "parcalar": [{k: r.get(k) for k in ("id", "kategori", "uzunluk_km", "kesinlik_km", "kiyas_atlas")} for r in KAYIT],
           "cipalar": {"payas": payas, "meydan_ekbez": mek, "kiyi": [kiyi_lat, kiyi_lon], "kotur": kotur},
           "karaagac_ne_icinde": tr.contains(Point(26.53, 41.655))},
          io.open("denetim/OLCUM-D1-KIYAS-0916.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("kayıt", len(KAYIT), "· kıyas", kiyas["durum"], "· taban:", kiyas.get("taban"), "·", kiyas.get("girdi_sinir_dosyalari"))
print("Karaağaç (41.655/26.53) NE Türkiye içinde:", tr.contains(Point(26.53, 41.655)))
for r in KAYIT:
    k = r.get("kiyas_atlas") or {}
    print(f"  {r['id']:38} {r['sinif']:3} {r['f']}→{r['t']} {r.get('uzunluk_km','-'):>6} km  sol={r.get('sol_taraf','-'):22} "
          f"kıyas ortanca {k.get('ortanca_km','-')} p90 {k.get('p90_km','-')} en kötü {k.get('enkotu_km','-')} ≤5km %{k.get('le5_yuzde','-')}")
