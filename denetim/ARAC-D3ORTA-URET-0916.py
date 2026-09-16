"""D3-AVRUPA-ORTA — data/d_sinirlar_avrupa_orta.js üreticisi (window.D_SINIRLAR_AVRUPA_ORTA).

Şema: denetim/SEMA-D-0916.md. Envanter ve gerekçeler: denetim/D3-AVRUPA-ORTA-0916.md.

KURAL (D-1923-0916 md.3): bugünkü geometri (veri-kaynak/d_bugunku_sinirlar.geojson,
Natural Earth 10m) YALNIZ kaynak "değişmedi" diyorsa `hat` olur. Değişen ya da
değişip değişmediği bilinmeyen (degisti:null) parça D-YOK kutusudur.
Atlas referans DEĞİLDİR (CLAUDE.md §4): hiçbir koordinat yerleşim/dönem verisinden alınmaz.

Kullanım: py denetim/ARAC-D3ORTA-URET-0916.py
"""
import io
import json
import sys
from math import asin, cos, radians, sin, sqrt

from shapely.geometry import LineString, Point, shape

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOK = "C:/Users/emrem/OneDrive/Desktop/TARİH COĞRAFYA SİTESİ/"
CIKTI = KOK + "data/d_sinirlar_avrupa_orta.js"
T = "1923-10-29"

BUGUN = json.load(open(KOK + "veri-kaynak/d_bugunku_sinirlar.geojson", encoding="utf-8"))
ULKE = json.load(open(KOK + "veri-kaynak/ne_10m_admin_0_countries.geojson", encoding="utf-8"))
NEHIR = json.load(open(KOK + "veri-kaynak/ne_10m_rivers.geojson", encoding="utf-8"))

POLI = {}
for f in ULKE["features"]:
    p = f["properties"]
    for k in ("ISO_A3", "ISO_A3_EH", "ADM0_A3"):
        if p.get(k) and p[k] != "-99":
            POLI.setdefault(p[k], shape(f["geometry"]).buffer(0))
            break
POLI.setdefault("KOS", POLI.get("XKX"))

# ---------------------------------------------------------------- geometri
def hav(a, b):
    d = (sin(radians(b[1] - a[1]) / 2) ** 2
         + cos(radians(a[1])) * cos(radians(b[1])) * sin(radians(b[0] - a[0]) / 2) ** 2)
    return 2 * 6371.0088 * asin(sqrt(d))


def uzunluk(c):
    return sum(hav(c[i], c[i + 1]) for i in range(len(c) - 1))


def bugun(cift, parca=1):
    for f in BUGUN["features"]:
        p = f["properties"]
        if p["cift"] == cift and p["parca_no"] == parca:
            return [tuple(x[:2]) for x in f["geometry"]["coordinates"]]
    raise SystemExit(f"🔴 bugünkü çizgi yok: {cift} parça {parca}")  # sessiz geçme (D026)


def kes(c, a_km, b_km):
    """Çizgiyi baştan ölçülen [a_km, b_km] aralığında keser (doğrusal ara değer)."""
    out, s = [], 0.0
    for i in range(len(c) - 1):
        p, q = c[i], c[i + 1]
        L = hav(p, q)
        for km in (a_km, b_km):
            if s < km <= s + L and L > 0:
                r = (km - s) / L
                x = (p[0] + r * (q[0] - p[0]), p[1] + r * (q[1] - p[1]))
                out.append(x)
        if a_km <= s + L <= b_km:
            out.append(q)
        s += L
    if a_km <= 0:
        out.insert(0, c[0])
    # yinelenenleri at, sıra zaten ilerleme yönünde
    tem = []
    for x in out:
        if not tem or hav(tem[-1], x) > 1e-6:
            tem.append(x)
    return tem


def kutu_disi(c, kutular):
    """Kutuların İÇİNDE kalan noktaları atıp çizgiyi parçalara böler."""
    def icinde(x):
        return any(k[0] <= x[0] <= k[2] and k[1] <= x[1] <= k[3] for k in kutular)
    parcalar, cur = [], []
    for x in c:
        if icinde(x):
            if len(cur) > 1:
                parcalar.append(cur)
            cur = []
        else:
            cur.append(x)
    if len(cur) > 1:
        parcalar.append(cur)
    return parcalar


def kutu_of(c, pay=0.02):
    xs, ys = [x[0] for x in c], [x[1] for x in c]
    return [round(min(xs) - pay, 3), round(min(ys) - pay, 3), round(max(xs) + pay, 3), round(max(ys) + pay, 3)]


def sol(c, iso_kunye):
    """Orta segmentin ortasından 3 km sola bakıp bugünkü ülke poligonuna sorar."""
    toplam, s = uzunluk(c), 0.0
    for i in range(len(c) - 1):
        L = hav(c[i], c[i + 1])
        if s + L >= toplam / 2 and L > 0:
            p, q = c[i], c[i + 1]
            break
        s += L
    mx, my = (p[0] + q[0]) / 2, (p[1] + q[1]) / 2
    dx, dy = (q[0] - p[0]) * cos(radians(my)), q[1] - p[1]
    n = sqrt(dx * dx + dy * dy)
    lx, ly = -dy / n, dx / n                      # sola dik (doğu-kuzey düzleminde)
    d = 3 / 111.0
    nokta = Point(mx + lx * d / cos(radians(my)), my + ly * d)
    for iso, kunye in iso_kunye.items():
        if POLI.get(iso) is not None and POLI[iso].contains(nokta):
            return kunye
    return None


def nehir(ad):
    for f in NEHIR["features"]:
        if f["properties"].get("name") == ad and len(f["geometry"]["coordinates"]) == 2:
            return [tuple(x[:2]) for x in f["geometry"]["coordinates"][0]]
    raise SystemExit(f"🔴 nehir yok: {ad}")


def yuvarla(c):
    return [[round(x[0], 4), round(x[1], 4)] for x in c]


# ---------------------------------------------------------------- kaynaklar
FSU = "https://library.law.fsu.edu/Digital-Collections/LimitsinSeas/pdf/ibs{:03d}.pdf"
FRUS13 = "https://history.state.gov/historicaldocuments/frus1919Parisv13/"
K = {
    "versay27": dict(ad="Versay Antlaşması", madde="md. 27", tarih="1919-06-28 (yürürlük 1920-01-10)", tur="antlasma",
                     url="https://avalon.law.yale.edu/imt/partii.asp"),
    "versay28": dict(ad="Versay Antlaşması", madde="md. 28 (Doğu Prusya), md. 99 (Memel)", tarih="1919-06-28", tur="antlasma",
                     url="https://avalon.law.yale.edu/imt/partii.asp"),
    "versay87": dict(ad="Versay Antlaşması + FRUS 1919 c. XIII notları", madde="md. 87-98", tarih="1919-06-28", tur="antlasma",
                     url=FRUS13 + "ch12subch8", not_="Yukarı Silezya: Büyükelçiler Konf. 1921-10-19/20 (FRUS 19; ikinci kaynak gerekli) · Cenevre Sözleşmesi 1922-05-15, yürürlük 1922-06-03 · Doğu Prusya hattı 1922-12-19 kesinleşti · Tahdit Komisyonu nihai protokolü 1924-10-18"),
    "versay100": dict(ad="Versay Antlaşması + FRUS 1919 c. XIII notları", madde="md. 100-102", tarih="1919-06-28; Serbest Şehir 1920-11-15", tur="antlasma",
                      url=FRUS13 + "ch12subch11"),
    "memel": dict(ad="FRUS 1919 c. XIII notları (md. 99)", madde="Büyükelçiler Konf. 1921-07-18 mektubu; 1923-02-16 kararı; Memel Sözleşmesi 1924-05-08 (29 LNTS 83)", tarih="1923-02-16", tur="ikincil-resmi",
                  url=FRUS13 + "ch12subch10"),
    "versay83": dict(ad="FRUS 1919 c. XIII notları (md. 81-86)", madde="md. 27(6), md. 83; Büyükelçiler Konf. 1923-01-13 ve 1923-01-24; komisyon sonu 1924-04-15", tarih="1919-06-28", tur="ikincil-resmi",
                     url=FRUS13 + "ch12subch7"),
    "saar": dict(ad="FRUS 1919 c. XIII notları (md. 45-50)", madde="md. 48; notalar 1920-12-16/17 (12 LNTS 40)", tarih="1920-12-17", tur="ikincil-resmi",
                 url=FRUS13 + "ch12subch4"),
    "at1955": dict(ad="Avusturya Devlet Antlaşması", madde="md. 5", tarih="1955-05-15", tur="antlasma",
                   url="https://www.cvce.eu/content/publication/1999/3/2/5c586461-7528-4a74-92c3-d3eba73c2d7d/publishable_en.pdf",
                   alinti="shall be those existing on 1st January, 1938"),
    "hu1947": dict(ad="Macaristan ile Barış Antlaşması (FRUS 1946 c. II taslak metni)", madde="md. 1(1)", tarih="1947-02-10 (yürürlük 1947-09-15)", tur="antlasma",
                   url="https://history.state.gov/historicaldocuments/frus1946v02/d114",
                   alinti="shall be those which existed on January 1, 1938",
                   not_="nihai metin (UNTS 41:135) OKUNMADI — taslak metin okundu"),
    "ibs66": dict(ad="IBS 66 Çekoslovakya–Macaristan (ABD Dışişleri, 1966)", madde="Trianon md. 27(4); 1947 md. 1(4)", tarih="1966", tur="IBS", url=FSU.format(66),
                  alinti="restored the Trianon boundaries of Hungary, with two exceptions"),
    "ibs76": dict(ad="IBS 76 Macaristan–SSCB (ABD Dışişleri, 1967)", madde="Trianon md. 27; 1947 md. 1(3)", tarih="1967", tur="IBS", url=FSU.format(76),
                  alinti="Hungary returned to its pre-1938 boundary with Czechoslovakia"),
    "ibs47": dict(ad="IBS 47 Macaristan–Romanya (ABD Dışişleri, 1965)", madde="Trianon md. 27(3); 1947 md. 1(2)", tarih="1965", tur="IBS", url=FSU.format(47),
                  alinti="exists today essentially as created by the treaties ending World War I"),
    "ibs43": dict(ad="IBS 43 Romanya–SSCB (ABD Dışişleri, 1964)", madde="Büyükelçiler Konf. kararı No. 204-XVIII (1923-02-07); LNTS 164:3793; LNTS 173:4027", tarih="1964", tur="IBS", url=FSU.format(43),
                  alinti="(214 km.) of the prewar Czechoslovakia – Rumania frontier"),
    "ibs74": dict(ad="IBS 74 Finlandiya–SSCB (ABD Dışişleri, 1967)", madde="Dorpat/Tartu 1920 md. 2, md. 4, md. 5 (LNTS 3:65-79)", tarih="1920-10-14", tur="IBS", url=FSU.format(74),
                  alinti="The remaining 313 miles (504 kilometers) derive from the treaties",
                  not_="onay teatisi: IBS 74 'Helsinki 1921-02-14'; histdoc.net 'Moskova 1920-12-31' — ÇELİŞKİ, çözülmedi"),
    "ibs116": dict(ad="IBS 116 Arnavutluk–Yugoslavya (ABD Dışişleri, 1971)", madde="Büyükelçiler Konf. 1921-11-09; Nihai Akt Paris 1926-07-30", tarih="1971", tur="IBS", url=FSU.format(116),
                   alinti="the pre-war frontier between Yugoslavia and Albania was restored"),
    "pcij9": dict(ad="UDAD Danışma Görüşü No. 9 (Saint-Naoum) — BM özeti", madde="1924-09-04", tarih="1924-09-04", tur="yargi",
                  url="https://legal.un.org/PCIJsummaries/documents/english/PCIJ_FinalText.pdf"),
    "pcij8": dict(ad="UDAD Danışma Görüşü No. 8 (Jaworzina) — BM özeti", madde="1923-12-06", tarih="1923-12-06", tur="yargi",
                  url="https://legal.un.org/PCIJsummaries/documents/english/PCIJ_FinalText.pdf"),
    "sevres1920": dict(ad="Belirli Sınırlara Dair Sèvres Antlaşması (UK Treaty Series 1921 No. 20)", madde="md. 2-4", tarih="1920-08-10", tur="antlasma",
                       url="https://treaties.fcdo.gov.uk/data/Library2/pdf/1921-TS0020.pdf",
                       not_="yürürlük durumu ÇELİŞKİLİ (UKTS onay kaydı ↔ FRUS 'yürürlüğe girmedi')"),
    "timar": dict(ad="Timár & Varga, e-Perimetron 17(3), 2022", madde="Belgrad Protokolü 1923-11-24 (köy takası)", tarih="2022", tur="hakemli",
                  url="http://e-perimetron.org/Vol_17_3/Timar_Varga.pdf"),
    "riga1921": dict(ad="Riga Antlaşması (LNTS 6:123-169) + Żurawski, Przegląd Historyczno-Wojskowy 2011", madde="md. 2; işaretleme 1922-11-23; nihai protokol 1924-07-31", tarih="1921-03-18 (onay 1921-04-30)", tur="antlasma",
                     url="http://www.forost.ungarisches-institut.de/pdf/19210318-1.pdf"),
    "kb1923": dict(ad="Büyükelçiler Konferansı kararı (LNTS 15:261-265)", madde="I(2)", tarih="1923-03-15", tur="karar",
                   url="http://www.forost.ungarisches-institut.de/pdf/19230315-1.pdf",
                   not_="Litvanya tanımadı; ortak işaretleme yok (Mankevich, Baltic Region 2012)"),
    "jekabsons": dict(ad="Jēkabsons, Zeszyt Naukowy Muzeum Wojska 15 (2002)", madde="1923'te yalnız ayırma hattı; sözleşme Riga 1938-01-14", tarih="2002", tur="hakemli",
                      url="https://pcr.uwb.edu.pl/ZNMW/files/ZNMW_2002_15_012.pdf"),
    "tartu_ee": dict(ad="Tartu Barışı Estonya–RSFSC (LNTS 11:51-71)", madde="md. 3(1)", tarih="1920-02-02", tur="antlasma",
                     url="http://www.forost.ungarisches-institut.de/pdf/19200202-1.pdf",
                     not_="1944-08-23 Petseri, 1944-11-24 Narva ötesi ayrıldı (CyberLeninka makalesi)"),
    "riga1920": dict(ad="Letonya–RSFSC Barışı, Riga", madde="bulunamadı (sınır maddesi no'su okunmadı)", tarih="1920-08-11", tur="antlasma",
                     url="https://militaryheritagetourism.info/en/military/topics/view/58",
                     not_="madde no · LNTS künyesi · yürürlük günü BULUNAMADI; Abrene/Pıtalovo 1944'te RSFSC'ye geçti"),
    "lv_lt_1993": dict(ad="Letonya–Litvanya Devlet Sınırının Yeniden Kurulması Antlaşması (likumi.lv)", madde="md. 1", tarih="1993-06-29", tur="antlasma",
                       url="https://likumi.lv/ta/id/209433-ligums-par-valsts-robezas-atjaunosanu-starp-latvijas-republiku-un-lietuvas-republiku",
                       alinti="Atjaunot līdz 1940.gada 15.jūnijam pastāvējušo valsts robežu",
                       not_="dayanak 1921-05-14 Konvansiyonu + 1930-06-30 Deklarasyonu; antlaşmaların susmadığı yerde 1991-09-17 idarî sınırı"),
    "nekrasas": dict(ad="Nekrašas, Lietuvos istorijos studijos 44 (2019)", madde="Simpson hakem kararı 1921-03-20", tarih="2019", tur="hakemli",
                     url="https://www.journals.vu.lt/lietuvos-istorijos-studijos/en/article/download/15929/15018"),
    "lv_ee_1992": dict(ad="Letonya–Estonya Devlet Sınırının Yeniden Kurulması Antlaşması (Latvijas Vēstnesis)", madde="md. I, md. VII", tarih="1992-03-20", tur="antlasma",
                       url="https://www.vestnesis.lv/ta/id/241332-ligums-par-valsts-robezas-atjaunosanu-starp-latvijas-republiku-un-igaunijas-republiku",
                       alinti="Atjaunot līdz 1940. g. 16.jūnijam pastāvējušo valsts robežu",
                       not_="dayanak 1920-10-19 sözleşmesi + 1920'ler-30'lar belgeleri; md. VII arazi kullanımı düzeltmeleri"),
    "ee_mfa": dict(ad="Estonya Dışişleri — Estonya-Letonya ilişkileri kronolojisi", madde="Tallents hakem kararı 1920-07-03; sözleşme 1920-10-19", tarih="1920-10-19", tur="resmi",
                   url="https://riga.mfa.ee/timeline-of-estonian-latvian-relations/"),
    "ibs43_bes": dict(ad="IBS 43 Romanya–SSCB (ABD Dışişleri, 1964) + Paris Antlaşması 1920-10-28", madde="Paris Antl. md. I (Dinyester)", tarih="1920-10-28", tur="IBS", url=FSU.format(43),
                      alinti="The Soviet Government maintained that the action was illegal",
                      not_="Japonya onaylamadı ⇒ antlaşma yürürlüğe girmedi (aosr.ro); 1923 Kasım'da Dinyester ötesi ilişkiler için geçici düzenleme"),
    "zbruc": dict(ad="Zbruç ağzı koordinatı (Vikipedi/Wikidata — YALNIZ coğrafî çapa, tarihî dayanak DEĞİL)", madde="48.5391 K, 26.4427 D", tarih="—", tur="cografi",
                  url="https://en.wikipedia.org/wiki/Zbruch"),
    "stoh": dict(ad="IBS 43", madde="'Stoh (1655 m)' ÇS-PL-RO üçlü noktası — koordinatı BULUNAMADI, uzunluktan kestirildi", tarih="1964", tur="IBS", url=FSU.format(43)),
    "rubicon": dict(ad="Rubicon — 'From the Treaty of Trianon to the Boundary Stones'", madde="1923 Nisan Somoskő; 1952 takasları", tarih="—", tur="dergi",
                    url="https://rubicon.hu/en/cikkek/from-the-treaty-of-trianon-to-the-boundary-stones",
                    not_="🟡 tarih dergisi (popüler-akademik); ikinci kaynak gerekli"),
    "megginson": dict(ad="Megginson, Austrian History Yearbook 56 (2025)", madde="Gmünd komisyonu 1920-09-23", tarih="2025", tur="hakemli",
                      url="https://doi.org/10.1017/S0067237825000177"),
    "grandits": dict(ad="Grandits vd. (ed.), The Disputed Austro-Hungarian Border (Berghahn), giriş", madde="Venedik Protokolü 1921-10-13; Sopron plebisiti 1921-12", tarih="—", tur="kitap",
                     url="https://www.berghahnbooks.com/downloads/intros/GranditsDisputed_intro.pdf"),
    "saint_germain": dict(ad="Saint-Germain Antlaşması (Wikisource dizini; md. 27-35)", madde="md. 27", tarih="1919-09-10 (yürürlük 1920-07-16, IBS 43)", tur="antlasma",
                          url="https://en.wikisource.org/wiki/Treaty_of_Peace_between_the_Allied_and_Associated_Powers_and_Austria"),
    "trianon": dict(ad="Trianon Antlaşması (BYU / Carnegie baskısı)", madde="md. 27", tarih="1920-06-04 (yürürlük 1921-07-26, IBS 66)", tur="antlasma",
                    url="https://wwi.lib.byu.edu/index.php/Treaty_of_Trianon"),
    "pl_cs_1958": dict(ad="Polonya–Çekoslovakya Anlaşması (forost)", madde="kesin tahdit", tarih="1958-06-13", tur="antlasma",
                       url="http://www.forost.ungarisches-institut.de/pdf/19580613-1.pdf"),
}


def dy(*anahtar):
    out = []
    for a in anahtar:
        d = dict(K[a])
        if "not_" in d:
            d["not"] = d.pop("not_")
        out.append(d)
    return out


NE_NOT = ("Natural Earth 10m admin-0 (bugünkü sınır) → veri-kaynak/d_bugunku_sinirlar.geojson "
          "(D-GEOARAC); tepe aralığı medyan 2,06 km")
KES_NOT = "ÖLÇÜLMEDİ — NE 10m genelleştirmesi (medyan tepe aralığı 2,06 km, D-GEOARAC); resmî sınır haritasıyla kıyaslanmadı"

KAYIT = []
UYARI = []


def d_kaydi(id_, taraflar, f, cift, iso_kunye, degisti, dayanak, tahdit=None, parca=1,
            km=None, disari=(), not_=""):
    c = bugun(cift, parca)
    if km:
        c = kes(c, *km)
    parcalar = kutu_disi(c, disari) if disari else [c]
    for i, p in enumerate(parcalar, 1):
        sid = id_ if len(parcalar) == 1 else f"{id_}-{i}"
        s = sol(p, iso_kunye)
        if s is None:
            UYARI.append(f"{sid}: sol_taraf ölçülemedi")
        KAYIT.append(dict(
            id=sid, taraflar=taraflar, f=f, t=T, kategori="D", sol_taraf=s, hat=yuvarla(p),
            uzunluk_km=round(uzunluk(p), 1),
            geometri_kaynagi=NE_NOT + (f" · kesim {km[0]}-{km[1]} km (uzunluktan)" if km else ""),
            degisti=degisti, tahdit=tahdit, kesinlik_km=None, kesinlik_not=KES_NOT,
            dayanak=dayanak, not_=not_))


def dyok(id_, taraflar, f, kutu, degisti, dayanak, tahdit=None, not_="", kategori_1923="D"):
    KAYIT.append(dict(
        id=id_, taraflar=taraflar, f=f, t=T, kategori="D-YOK", sol_taraf=None, hat=None,
        kutu=kutu, geometri_kaynagi=None, degisti=degisti, tahdit=tahdit,
        kesinlik_km=None, kesinlik_not="kutu TAHMİNİ (±10-20 km); hat 1923 haritasından okunmadı",
        dayanak=dayanak, not_=f"29 Ekim 1923 hukukî sınıfı: {kategori_1923}. " + not_))


def degis(deger, kaynak, not_):
    return {"deger": deger, "kaynak": kaynak, "not": not_}


A, PL, LT, LV, EE, FI, SU = "almanya", "polonya", "litvanya", "letonya", "estonya", "finlandiya", "sovyet-rusya"
CS, AT, HU, YU, RO, AL = "cekoslovakya", "avusturya-cumhuriyet", "macaristan-naiplik", "yugoslavya", "romanya-kralligi", "arnavutluk-bagimsiz"
DZ, SAAR = "danzig-serbest-sehri", "saar-havzasi-mandasi"   # 🔴 devletler.js'te YOK — D-KUNYE taslağında

# ================================================================ ALMANYA
dyok("d1923-de-pl-1", [A, PL], "1920-01-10", [14.9, 51.0, 18.4, 54.6],
     degis(True, "UNTS 29542 (1990)", "1945 Oder-Neisse; 1950 Görlitz, 1990 AFC-Polonya antlaşması"),
     dy("versay27", "versay87"), {"t": "1924-10-18", "not": "Tahdit Komisyonu nihai protokolü"},
     "Pomeranya-Poznan-Aşağı Silezya kesimi. Hat Versay md. 27(7) + komisyon; 1923 geometrisi açık veride YOK.")
dyok("d1923-de-pl-2", [A, PL], "1922-06-03", [17.9, 49.9, 19.3, 51.0],
     degis(True, "UNTS 29542 (1990)", "sınır 1945'te ortadan kalktı (bugün Polonya içi)"),
     dy("versay87"), {"t": "1924-10-18", "not": "Tahdit Komisyonu nihai protokolü"},
     "Yukarı Silezya: MC Konseyi raporu 1921-10-12 → Büyükelçiler Konf. 1921-10-19/20 → Cenevre Sözleşmesi yürürlük 1922-06-03.")
dyok("d1923-de-pl-3", [A, PL], "1920-08-31", [18.8, 52.9, 22.9, 54.4],
     degis(True, "UNTS 29542 (1990)", "Doğu Prusya güney sınırı 1945'te ortadan kalktı"),
     dy("versay28", "versay87"), {"t": "1924-10-18", "not": "Tahdit Komisyonu nihai protokolü"},
     "Doğu Prusya–Polonya (Allenstein/Marienwerder plebisitleri 1920-07-11; Konf. 1920-08-12; hat 1922-12-19 kesin).")
dyok("d1923-dz-de", [DZ, A], "1920-11-15", [18.9, 53.9, 19.7, 54.45],
     degis(True, None, "1939 ilhak; 1945'ten beri Polonya içi"), dy("versay28", "versay100"), None,
     "Danzig–Doğu Prusya (Vistül/Nogat, Frische Nehrung). Komisyon (md. 101) bitiş günü BULUNAMADI. 🔴 taraf kimliği devletler.js'te yok.")
dyok("d1923-dz-pl", [DZ, PL], "1920-11-15", [18.2, 54.0, 19.0, 54.8],
     degis(True, None, "1939 ilhak; 1945'ten beri Polonya içi"), dy("versay100"), None,
     "Komisyon bitiş günü BULUNAMADI. 🔴 taraf kimliği devletler.js'te yok.")
dyok("d1923-de-lt-memel", [A, LT], "1923-02-16", [20.9, 54.95, 22.9, 55.35],
     degis(None, None, "bugünkü Litvanya-Rusya (1997 antlaşması, OKUNMADI) hattının md. 28 ile aynılığı BULUNAMADI"),
     dy("versay28", "memel"), None,
     "Hat Versay md. 28 + 1921-07-18 mektubu. 29 Ekim 1923'te Memel egemenliği Müttefiklerde, Litvanya'ya 'tahsisli' (Sözleşme 1924-05-08, yürürlük 1925-08-25).")
dyok("d1923-de-cs-1", [A, CS], "1920-01-10", [12.0, 49.3, 13.9, 50.4],
     degis(None, None, "1981 DAC-ÇSSC 'tarihî oluşmuş sınır'; 1994 AFC-Çek antl. — 1923 hattıyla aynı DİYEN kaynak BULUNAMADI"),
     dy("versay83"), None, "Bohemya-Bavyera batı kesimi (1914 hattı).")
dyok("d1923-de-cs-2", [A, CS], "1920-01-10", [12.0, 50.2, 15.1, 51.1],
     degis(None, None, "aynı gerekçe (Bohemya-Saksonya)"), dy("versay83"), None, "Bohemya-Saksonya kuzey kesimi (1914 hattı).")
dyok("d1923-de-cs-3", [A, CS], "1920-01-10", [12.8, 48.78, 13.83, 49.3],
     degis(None, None, "aynı gerekçe (Bohemya-Bavyera güney)"), dy("versay83"), None, "Üçlü nokta (AT-CS-DE) 13,84 D'ye kadar.")
dyok("d1923-de-cs-4", [A, CS], "1923-01-24", [14.8, 49.9, 18.2, 51.1],
     degis(True, None, "Prusya Silezyası kesimi 1945'ten sonra Çek-Polonya sınırı"),
     dy("versay83"), {"t": "1924-04-15", "not": "Çek-Alman komisyonu sonu"},
     "Silezya + Hlučín (md. 83); Haatsch 1923-01-24'te ÇS'ye.")
d_kaydi("d1923-de-at", [A, AT], "1920-01-10", "AUT-DEU", {"AUT": AT, "DEU": A},
        degis(False, "Avusturya Devlet Antl. 1955 md. 5", "1938-01-01 hattı geri geldi; 1914 hattı 1919'da değişmedi (FRUS). 🟡 1955 sonrası küçük düzeltme antlaşmaları ARANMADI"),
        dy("versay27", "at1955"), {"t": "1914 öncesi", "not": "eski işaretli hat; yeni komisyon gerekmedi"})
dyok("d1923-saar-de", [SAAR, A], "1920-12-17", [6.35, 49.3, 7.45, 49.7],
     degis(True, None, "1935 plebisiti ile uluslararası sınır kalktı; bugünkü Saarland sınırı farklı (1946-47 genişlemesi DOĞRULANMADI)"),
     dy("saar"), None,
     "Saar–Fransa kesimi D3-AVRUPA-BATI'nin (M-4056). Kutu yalnız kuzey/doğu kenar. 🔴 taraf kimliği devletler.js'te yok.")

# ================================================================ BALTIK · FİNLANDİYA · SSCB
dyok("d1923-pl-su-1", [PL, SU], "1921-04-30", [26.5, 53.3, 28.6, 55.95],
     degis(True, None, "1939/1945 (1945 Polonya-SSCB antl. OKUNMADI)"), dy("riga1921"),
     {"t": "1922-11-23", "not": "işaretleme bitti; nihai protokol 1924-07-31"}, "Dvina–Polesya kuzey kesimi.")
dyok("d1923-pl-su-2", [PL, SU], "1921-04-30", [25.9, 51.3, 28.0, 53.4],
     degis(True, None, "1939/1945"), dy("riga1921"), {"t": "1922-11-23", "not": "işaretleme bitti"}, "Polesya kesimi.")
dyok("d1923-pl-su-3", [PL, SU], "1921-04-30", [25.7, 48.56, 26.42, 51.4],
     degis(True, None, "1939/1945"), dy("riga1921"), {"t": "1922-11-23", "not": "işaretleme bitti"},
     "Volhynya-Zbruç kesimi (Zbruç ağzına kadar).")
dyok("d1923-pl-lt", [PL, LT], "1923-03-15", [22.8, 53.9, 26.7, 55.65],
     degis(True, None, "1939'da ortadan kalktı; bugünkü Litvanya-Polonya hattı başka"),
     dy("kb1923"), None, "Vilnius sorunu: Müttefik kararı var, Litvanya TANIMADI, ortak işaretleme yok.",
     kategori_1923="fiili")
dyok("d1923-pl-lv", [PL, LV], "1918-11-18", [26.2, 55.55, 28.2, 56.05],
     degis(True, None, "1939'da ortadan kalktı"), dy("jekabsons"), None,
     "1923'te yalnız ayırma hattı; sözleşme 1938-01-14. f: hat başlangıç günü BULUNAMADI — iki künyenin geç başlangıcı. "
     "Kutu bugünkü LT-LV doğu ucunu da örter (1923 LT-PL-LV üçlü noktası konumu BULUNAMADI).",
     kategori_1923="fiili")
d_kaydi("d1923-lt-lv", [LT, LV], "1921-05-14", "LTU-LVA", {"LTU": LT, "LVA": LV},
        degis(False, "Letonya-Litvanya antl. 1993 md. 1", "1940-06-15 hattı, 1921 Konvansiyonu + 1930 Deklarasyonu dayanaklı; değişiklik ANILMIYOR. 1930 Deklarasyonu 1923 SONRASI kesinleştirme — tahdit sayıldı"),
        dy("lv_lt_1993", "nekrasas"), {"t": "1930", "not": "işaretleme 1929-30 (ikincil); 1930-06-30 Deklarasyonu"},
        disari=[[26.2, 55.55, 28.2, 56.05]],
        not_="Palanga Litvanya'ya, İlukste Letonya'ya (Simpson hakem kararı 1921-03-20).")
dyok("d1923-ee-lv", [EE, LV], "1920-10-19", [21.8, 57.45, 27.6, 58.1],
     degis(True, "Letonya-Estonya antl. 1992 md. I, VII", "1920'ler-30'lar belgeleri + 1992 md. VII düzeltmeleri — büyüklüğü ÖLÇÜLMEDİ"),
     dy("ee_mfa", "lv_ee_1992"), {"t": "1923-11", "not": "nihai sınır anlaşması Tallinn konferansı 1923-10-25/11-01 — imza günü BULUNAMADI"},
     "Hukuken D (Tallents hakem kararı). Bugünkü çizgi küçük farklarla vekil OLABİLİR — koordinatör kararı bekliyor.")
dyok("d1923-ee-su", [EE, SU], "1920-03-30", [27.3, 57.5, 28.6, 59.5],
     degis(True, None, "1944-08-23 Petseri, 1944-11-24 Narva ötesi"), dy("tartu_ee"), None,
     "f: onay teatisi 1920-03-30 (Estonya DB, arama özeti ◐). İşaretleme bitiş günü BULUNAMADI.")
dyok("d1923-lv-su", [LV, SU], "1920-08-11", [27.2, 56.0, 28.3, 57.6],
     degis(True, None, "Abrene/Pıtalovo RSFSC'ye (1944 ◐)"), dy("riga1920"), {"t": "1923", "not": "ikincil (◐)"},
     "f: imza günü (yürürlük günü BULUNAMADI).")

# Finlandiya–RSFSC: IBS 74 — 1323 km'nin 504'ü 1920 sonrası antlaşmalardan (değişmedi).
# NE çizgisi kuzeyden başlar (1222 km). Karelya 1940 kesimi 404 km (NE ≈373) güneyde,
# Petsamo+Janiskoski 164 km (NE ≈151) kuzeyde, Salla 249 km (NE ≈230) arada.
# D: yalnız Kuhmo-Suomussalmi orta kesimi, iki uçta ~40 km pay bırakılarak.
FI_KM = (480, 805)
_fi = kes(bugun("FIN-RUS"), *FI_KM)
d_kaydi("d1923-fi-su", [FI, SU], "1921-02-14", "FIN-RUS", {"FIN": FI, "RUS": SU},
        degis(False, "IBS 74", "orta kesim 1920 sonrası antlaşmalardan (Dorpat = eski Büyük Dükalık hattı); uç kestirmesi UZUNLUKTAN, ±40 km"),
        dy("ibs74"), {"t": "1938", "not": "Dorpat hattı nihai protokolü 1938 (IBS 74); Karelya kıstağı işaretlemesi 1925'te başladı"},
        km=FI_KM, not_="Petsamo kesimi 1921-23 işaretlendi (harita 1923-03-01).")
dyok("d1923-fi-su-kuzey", [FI, SU], "1921-02-14", [28.2, round(_fi[0][1] + 0.02, 3), 30.4, 69.1],
     degis(True, "IBS 74", "Salla-Kuusamo 1940, Petsamo 1944, Janiskoski 1947"), dy("ibs74"), None,
     "Petsamo koridoru (md. 4) ve Salla kesimi.")
dyok("d1923-fi-su-guney", [FI, SU], "1921-02-14", [27.7, 60.5, 32.0, round(_fi[-1][1] - 0.02, 3)],
     degis(True, "IBS 74", "Karelya 1940 Moskova Barışı"), dy("ibs74"), {"t": "1925-", "not": "kıstak işaretlemesi 1925'te başladı"},
     "Karelya kıstağı (Sestra) ve Ladoga Karelyası.")

# Romanya–SSCB (Besarabya): hukukî hat YOK → fiili, Dinyester vekil
_dn = nehir("Dniester")
_zb = min(range(len(_dn)), key=lambda i: hav(_dn[i], (26.4427, 48.5391)))
_dn_hat = _dn[_zb:]
_zb_km = hav(_dn[_zb], (26.4427, 48.5391))
KAYIT.append(dict(
    id="d1923-ro-su", taraflar=[RO, SU], f="1918-04-08", t=T, kategori="fiili",
    sol_taraf=None, hat=yuvarla(_dn_hat),
    uzunluk_km=round(uzunluk(_dn_hat), 1),
    geometri_kaynagi=f"Natural Earth 10m nehirler — Dniester orta çizgisi (Zbruç ağzına en yakın tepeden: {_zb_km:.1f} km sapma)",
    degisti=degis(True, "IBS 43", "1940-06-28 SSCB ilhakı; 1947 barışı"),
    tahdit=None, kesinlik_km=None,
    kesinlik_not="hukukî hat YOK; Dinyester orta çizgisi fiilî vekil. NE 10m nehir genelleştirmesi ÖLÇÜLMEDİ",
    dayanak=dy("ibs43_bes", "zbruc"),
    not_="Paris Antlaşması (1920-10-28) yürürlüğe girmedi, SSCB tanımadı ⇒ hukuken çizilmemiş (şartname md.4). "
         "Dinyester'in batısı Romanya, doğusu Ukrayna SSC. f: Besarabya birliği 1918-04-08 (IBS 43)."))
# Dinyester kuzeyden güneye akar: sol = doğu kıyısı = SSCB (ölçülmedi, akış yönünden)
KAYIT[-1]["sol_taraf"] = SU

# ================================================================ TUNA · KARPAT · BALKAN
RAJKA = [16.95, 47.95, 17.30, 48.12]           # 1947 md. 1(4) Bratislava köprübaşı
SOMOSKO = [19.72, 48.10, 19.92, 48.22]         # 1952 takası (🟡 Rubicon)
SATORAL = [21.58, 48.34, 21.78, 48.46]         # 1952 takası (🟡 Rubicon)
BANAT_UC = [20.10, 45.95, 20.60, 46.25]        # HU-RO-YU üçlü noktası 1923-24'te ~13 km kaydı (Timár–Varga)

d_kaydi("d1923-at-cs", [AT, CS], "1920-07-16", "AUT-CZE", {"AUT": AT, "CZE": CS},
        degis(False, "Avusturya Devlet Antl. 1955 md. 5", "1938-01-01 hattı. 🟡 1955 sonrası düzeltmeler ARANMADI"),
        dy("saint_germain", "at1955", "megginson"), {"t": "1923-05-31", "not": "komisyon işi bitti (FRUS, araç özeti 🟡)"})
d_kaydi("d1923-at-cs-morava", [AT, CS], "1920-07-16", "AUT-SVK", {"AUT": AT, "SVK": CS},
        degis(False, "Avusturya Devlet Antl. 1955 md. 5 + IBS 66", "Morava kesimi 1938 hattı; güney ucu 1947'de AT-HU'dan AT-CS'ye geçti (kutu dışı)"),
        dy("saint_germain", "at1955", "ibs66"), {"t": "1923-05-31", "not": "🟡"}, disari=[RAJKA])
d_kaydi("d1923-at-hu", [AT, HU], "1921-07-26", "AUT-HUN", {"AUT": AT, "HUN": HU},
        degis(False, "Macaristan Barışı 1947 md. 1(1)", "1938-01-01 hattı; kuzey ucu 1947 Rajka değişikliği (kutu dışı). 🟡 1947 sonrası ARANMADI"),
        dy("trianon", "hu1947", "grandits"), {"t": "1924-08-02", "not": "komisyon dağıldı (🔴 ikincil); Pinka köyleri 1922-09, Szentpéterfa/Ólmod 1923-01-27 onay"},
        disari=[RAJKA], not_="Sopron plebisiti 1921-12; köy takaslarının 29 Ekim 1923'ten ÖNCE bittiği görünüyor (🔴 birincil kaynak yok).")
d_kaydi("d1923-at-yu", [AT, YU], "1920-07-16", "AUT-SVN", {"AUT": AT, "SVN": YU},
        degis(False, "Avusturya Devlet Antl. 1955 md. 5", "1938-01-01 hattı. 🟡 1955 sonrası ARANMADI"),
        dy("saint_germain", "at1955"), {"t": None, "not": "komisyon bitiş günü BULUNAMADI"},
        not_="Karintiya plebisiti 1920-10-10.")
d_kaydi("d1923-hu-cs", [HU, CS], "1921-07-26", "HUN-SVK", {"HUN": HU, "SVK": CS},
        degis(False, "IBS 66", "Trianon hattı 1947'de geri geldi — Rajka köprübaşı ve 1952 takas bölgeleri kutu dışı"),
        dy("trianon", "ibs66", "rubicon"), {"t": "1925", "not": "komisyon 1921-25 (IBS 66); Somoskő köyleri 1923-04 MC kararıyla Macaristan'a"},
        disari=[RAJKA, SOMOSKO, SATORAL])
d_kaydi("d1923-hu-cs-rutenya", [HU, CS], "1921-07-26", "HUN-UKR", {"HUN": HU, "UKR": CS},
        degis(False, "IBS 76", "1947 md. 1(3): HU-SSCB hattı = 1938-01-01 HU-ÇS hattı"),
        dy("trianon", "ibs76"), {"t": "1925", "not": "komisyon 1921-25 (IBS 66/76)"},
        disari=[[22.80, 47.90, 22.95, 48.00]], not_="Rutenya kesimi; HU-CS-RO üçlü noktası çevresi kutu dışı.")
d_kaydi("d1923-hu-yu-slovenya", [HU, YU], "1921-07-26", "HUN-SVN", {"HUN": HU, "SVN": YU},
        degis(False, "Macaristan Barışı 1947 md. 1(1)", "1938-01-01 hattı. 🟡 1947 sonrası ARANMADI"),
        dy("trianon", "hu1947"), {"t": "1924-07-10", "not": "komisyon (🔴 ikincil); Lendva itirazı 1922-11 karara bağlandı"})
d_kaydi("d1923-hu-yu-hirvatistan", [HU, YU], "1921-07-26", "HRV-HUN", {"HUN": HU, "HRV": YU},
        degis(False, "Macaristan Barışı 1947 md. 1(1)", "1938-01-01 hattı. 🟡 1947 sonrası ARANMADI"),
        dy("trianon", "hu1947"), {"t": "1924-07-10", "not": "🔴 ikincil"},
        not_="Baranya 1921-08 boşaltıldı.")
d_kaydi("d1923-hu-yu-sirbistan", [HU, YU], "1921-07-26", "HUN-SRB", {"HUN": HU, "SRB": YU},
        degis(False, "Macaristan Barışı 1947 md. 1(1)", "1938-01-01 hattı; üçlü nokta çevresi 1923-24'te kaydı (kutu dışı)"),
        dy("trianon", "hu1947", "timar"), {"t": "1924-07-10", "not": "🔴 ikincil"}, disari=[BANAT_UC])
d_kaydi("d1923-hu-ro", [HU, RO], "1921-07-26", "HUN-ROU", {"HUN": HU, "ROU": RO},
        degis(False, "IBS 47 + 1947 md. 1(2)", "komisyon 11 kesimin 5'inde küçük düzeltme (antlaşma yetkisiyle — tahdit); üçlü nokta çevresi kutu dışı"),
        dy("trianon", "ibs47", "hu1947", "timar"), {"t": "1925", "not": "komisyon 1921-08-01'de başladı; bitiş BULUNAMADI (genel 1921-25)"},
        disari=[BANAT_UC, [22.80, 47.90, 22.95, 48.00]])

# Romanya–Ukrayna bugünkü çizgisi = 214 km eski ÇS-RO + 53 km eski PL-RO (IBS 43).
# NE 347,7 km ↔ resmî 421 km ⇒ ölçek 0,826 → ÇS-RO ≈ 0-177, PL-RO ≈ 177-221 NE km.
d_kaydi("d1923-cs-ro", [CS, RO], "1923-02-07", "ROU-UKR", {"ROU": RO, "UKR": CS},
        degis(False, "IBS 43", "bugünkü RO-UA hattının 214 km'si 1938 öncesi ÇS-RO hattı"),
        dy("ibs43", "sevres1920", "stoh"), {"t": "1926-11-10", "not": "komisyon (FRUS 🟡); sözleşme 1930-07-15"},
        km=(0, 165), disari=[[22.80, 47.90, 22.95, 48.00]],
        not_="Karar No. 204-XVIII 1923-02-07; Stoh ucu uzunluktan kestirildi (±15 km).")
_st = kes(bugun("ROU-UKR"), 165, 192)
dyok("d1923-cs-pl-ro-stoh", [CS, RO], "1923-02-07", kutu_of(_st),
     degis(None, "IBS 43", "Stoh üçlü noktası konumu BULUNAMADI"), dy("stoh"), None,
     "ÇS-RO / PL-RO geçişi — kesim belirsizliği.")
d_kaydi("d1923-pl-ro", [PL, RO], "1923-03-15", "ROU-UKR", {"ROU": RO, "UKR": PL},
        degis(False, "IBS 43", "bugünkü RO-UA hattının 53 km'si 1939 öncesi PL-RO hattı"),
        dy("ibs43", "kb1923", "sevres1920"), {"t": "1935-05-17", "not": "nihai protokol (LNTS 173:4027); 1923'te işaretsiz"},
        km=(192, 212), not_="Eski Galiçya–Macaristan kadastro hattı. Uçlar uzunluktan kestirildi (±15 km).")
_pr = kes(bugun("ROU-UKR"), 212, 240)
dyok("d1923-pl-ro-1940", [PL, RO], "1923-03-15", kutu_of(_pr),
     degis(True, "IBS 43", "1940 Kuzey Bukovina hattı buradan ayrılıyor — geçiş belirsizliği"), dy("ibs43"), None, "")
dyok("d1923-pl-ro-2", [PL, RO], "1923-03-15", [25.1, 47.85, 26.42, 48.75],
     degis(True, "IBS 43", "1940'tan beri Ukrayna içi"), dy("ibs43", "kb1923"), {"t": "1935-05-17", "not": "nihai protokol"},
     "Çeremoş–Dinyester kesimi (Zbruç ağzına kadar).")
dyok("d1923-cs-pl-1", [CS, PL], "1920-07-28", [17.5, 49.0, 22.9, 50.0],
     degis(True, "Polonya–ÇS Anlaşması 1958-06-13", "1958 kesin tahdit/takaslar; Silezya-Tatra kesimi"),
     dy("pcij8", "pl_cs_1958"), {"t": "1927-10-16", "not": "komisyon sonu (FRUS 🟡)"},
     "Cieszyn/Orava/Spiş: Büyükelçiler Konf. 1920-07-28. 🔴 JAVORİNA (20,14 D · 49,26 K) 29 Ekim 1923'te UDAD önündeydi (Görüş No. 8, 1923-12-06) — o kesim C/fiili.",
     kategori_1923="D (Javorina kesimi C)")
dyok("d1923-cs-pl-2", [CS, PL], "1920-07-28", [22.9, 48.25, 24.5, 49.2],
     degis(True, "IBS 77", "1945'te Rutenya SSCB'ye; bugün Ukrayna içi"), dy("pcij8"), None, "Rutenya–Galiçya Karpat sırtı.")
dyok("d1923-ro-yu-banat", [RO, YU], "1920-08-10", [20.2, 44.75, 21.55, 46.1],
     degis(True, "Timár & Varga 2022", "Belgrad Protokolü 1923-11-24 köy takası; üçlü nokta ~13 km GB'ye kaydı; üçlü nokta protokolü 1927-06-04"),
     dy("sevres1920", "timar", "ibs47"), None,
     "29 Ekim 1923'te kesinleşmemişti (takas SONRA imzalandı).", kategori_1923="C")
dyok("d1923-ro-yu-tuna", [RO, YU], "1920-08-10", [21.3, 44.3, 22.6, 44.9],
     degis(None, None, "Tuna kesimi için 'değişmedi' diyen kaynak BULUNAMADI (Demir Kapı barajı nehri değiştirdi)"),
     dy("sevres1920"), None, "", kategori_1923="C")

VERMOS = [19.50, 42.48, 19.85, 42.72]
NAUM = [20.68, 40.84, 20.88, 40.98]
d_kaydi("d1923-al-yu-karadag", [AL, YU], "1921-11-09", "ALB-MNE", {"ALB": AL, "MNE": YU},
        degis(False, "IBS 116", "savaş sonrası 1926 hattı geri geldi; Vermoş 1925'te değişti (kutu dışı)"),
        dy("ibs116"), {"t": "1926-07-30", "not": "komisyon 1922-25; Nihai Akt Paris"}, disari=[VERMOS],
        not_="🟡 IBS 116 dipnotu ile sınır tarifi Vermoş'ta çelişiyor — kutu bu yüzden geniş.")
d_kaydi("d1923-al-yu-kosova", [AL, YU], "1921-11-09", "ALB-KOS", {"ALB": AL, "KOS": YU, "XKX": YU},
        degis(False, "IBS 116", "savaş sonrası 1926 hattı geri geldi"),
        dy("ibs116"), {"t": "1926-07-30", "not": "Nihai Akt"})
d_kaydi("d1923-al-yu-makedonya", [AL, YU], "1921-11-09", "ALB-MKD", {"ALB": AL, "MKD": YU},
        degis(False, "IBS 116", "savaş sonrası 1926 hattı; Sveti Naum 1925'te Yugoslavya'ya (kutu dışı)"),
        dy("ibs116"), {"t": "1926-07-30", "not": "Nihai Akt"}, disari=[NAUM])
dyok("d1923-al-yu-naum", [AL, YU], "1921-11-09", NAUM,
     degis(True, "IBS 116", "1925'te Yugoslavya'ya"), dy("ibs116", "pcij9"), None,
     "1922-12-06 Arnavutluk'a verildi; 29 Ekim 1923'te Yugoslavya revizyon istiyordu (UDAD Görüşü No. 9, 1924-09-04).",
     kategori_1923="C")
dyok("d1923-al-yu-vermos", [AL, YU], "1921-11-09", VERMOS,
     degis(True, "IBS 116", "1925'te değişti (dipnot; kapsamı ÇELİŞKİLİ)"), dy("ibs116"), None, "", kategori_1923="C")

# ---------------------------------------------------------------- denetim + yazım
idler = [k["id"] for k in KAYIT]
assert len(idler) == len(set(idler)), "🔴 mükerrer id"
for k in KAYIT:
    assert k["dayanak"], k["id"]
    if k["kategori"] in ("D", "C", "fiili"):
        assert k["hat"] and len(k["hat"]) >= 2, k["id"]
    else:
        assert k["kutu"], k["id"]
    if k["kategori"] == "D":
        # bugünkü geometri yalnız degisti:false ile (şartname md.3)
        assert k["degisti"]["deger"] is False, k["id"]
    for a in k["dayanak"]:
        if a.get("alinti"):
            assert len(a["alinti"].split()) <= 15, (k["id"], a["alinti"])
    k["not"] = k.pop("not_")

kunye = set()
import re
txt = open(KOK + "data/devletler.js", encoding="utf-8").read()
for m in re.finditer(r'id:\s*"([^"]+)"|"id"\s*:\s*"([^"]+)"', txt):
    kunye.add(m.group(1) or m.group(2))
eksik = sorted({t for k in KAYIT for t in k["taraflar"]} - kunye)

bas = f"""// -*- coding: utf-8 -*-
// data/d_sinirlar_avrupa_orta.js — D KATEGORİSİ SINIRLAR · ORTA/DOĞU AVRUPA · 29 Ekim 1923
// D3-AVRUPA-ORTA · 16 Eylül 2026 · şema denetim/SEMA-D-0916.md · rapor denetim/D3-AVRUPA-ORTA-0916.md
// Üretici: denetim/ARAC-D3ORTA-URET-0916.py — 🔴 ELLE DÜZENLEME, yeniden üret.
// kategori: D · C · fiili · D-YOK (bugünkü çizgi 1923'ü göstermez ya da bilinmiyor; kutuda D çizilmez)
// Bugünkü geometri YALNIZ degisti.deger===false kayıtlarda kullanıldı (D-1923-0916 md.3).
// 🔴 devletler.js'te OLMAYAN taraf kimlikleri: {', '.join(eksik) or 'yok'} (D-KUNYE taslağında)
"""
with open(CIKTI, "w", encoding="utf-8", newline="\n") as f:
    f.write(bas + "\nwindow.D_SINIRLAR_AVRUPA_ORTA = [\n")
    for k in KAYIT:
        f.write(json.dumps(k, ensure_ascii=False, separators=(",", ":")) + ",\n")
    f.write("];\n")

say = {}
for k in KAYIT:
    say[k["kategori"]] = say.get(k["kategori"], 0) + 1
km_d = sum(k.get("uzunluk_km") or 0 for k in KAYIT if k["kategori"] == "D")
print("kayıt:", len(KAYIT), say, f"D toplam {km_d:.0f} km (NE)")
print("eksik künye:", eksik)
for k in KAYIT:
    print(f"  {k['id']:28s} {k['kategori']:6s} {str(k.get('uzunluk_km') or ''):>7s} sol={k.get('sol_taraf')}")
for u in UYARI:
    print("⚠️", u)
