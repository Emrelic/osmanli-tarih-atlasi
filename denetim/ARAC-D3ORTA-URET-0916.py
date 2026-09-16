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
    # ---- G1 (1918-11-11 → hukukî başlangıç) kaynakları
    "tartu_fi": dict(ad="Tartu Barışı Finlandiya–RSFSC, onay tutanağı (LNTS 3:65-79)", madde="md. 39 + onay tutanağı; md. 4, 10 (45 gün tahliye)", tarih="1920-10-14 (yürürlük 1920-12-31)", tur="antlasma",
                     url="http://www.forost.ungarisches-institut.de/pdf/19201014-1.pdf",
                     alinti="Done at Moscow, on December thirty-first, nineteen hundred and twenty",
                     not_="IBS 74'ün 'Helsinki 1921-02-14'ü muhtemelen 45 günlük tahliye sonu (çıkarım ◐)"),
    "fedinec": dict(ad="Fedinec, Kárpátaljai magyarság kronológiája (MTA)", madde="1919-01-12 Ung; 1919-04-16 Rumen işgali; 1919-07-25 tarafsız bölge; 1920-02-24→03-30 Tisza ötesi tahliye; 1920-08-30 Rutenya tahliyesi", tarih="—", tur="akademik",
                    url="https://real.mtak.hu/13002/1/fedinec_kron191844.pdf"),
    "perczel": dict(ad="Perczel — archivnet (Macar Ulusal Arşivi yayını)", madde="Rumen ordusu Tisza gerisine 1919-11-23; Gyula/Békéscsaba 1920-03-31 (◐)", tarih="—", tur="arsiv",
                    url="https://www.archivnet.hu/atrocitasok-bekes-es-csongrad-megyeben-a-roman-megszallas-idejen-1919-1920"),
    "gyanti": dict(ad="Macar Ulusal Arşivi (MNL BaML) — Pécs işgalinin sonu", madde="Macar ordusu Pécs'e 1921-08-22", tarih="1921-08-22", tur="arsiv",
                   url="https://mnl.gov.hu/mnl/baml/hirek/szaz_eve_1921_augusztus_22_en_ert_veget_pecs_es_baranya_megye_szerb_megszallasa"),
    "suppan": dict(ad="Suppan, Hitler–Beneš–Tito, bl. 5 (Avusturya Bilimler Akademisi)", madde="Belgrad mütarekesi 1918-11-13; Radkersburg 1918-12-01 → 1920-07-26; Karintiya plebisiti 1920-10-10", tarih="—", tur="akademik",
                   url="https://www.austriaca.at/0xc1aa500d_0x002f0ea0"),
    "sg50": dict(ad="Saint-Germain Antlaşması (forost metni)", madde="md. 27(3), md. 49-50 (Karintiya plebisiti)", tarih="1919-09-10", tur="antlasma",
                 url="http://www.forost.ungarisches-institut.de/pdf/19190910-1.pdf",
                 not_="1. bölgede Avusturya oyu ⇒ bütün alan kesin olarak Avusturya egemenliğinde (md. 50); bölge 1920-11-18'de Avusturya'ya devredildi"),
    "jedlicka": dict(ad="Jedlicka, Burgenländische Heimatblätter 23", madde="Avusturya ordusu 1921-11-13/17 (kuzey), 11-25/30 (güney); devir 1921-12-03", tarih="—", tur="hakemli",
                     url="https://www.zobodat.at/pdf/Burgenlaendische-Heimatblaetter_23_0117-0123.pdf",
                     not_="devir günü habsburger.net'te 1921-12-05 — ÇELİŞKİ"),
    "mnl_sopron": dict(ad="Macar Ulusal Arşivi (MNL OL) — Sopron plebisiti", madde="oylama 1921-12-14/15/16; devir tutanağı 1922-01-01", tarih="1922-01-01", tur="arsiv",
                       url="https://mnl.gov.hu/mnl/ol/hirek/magyarok_maradtunk_nepszavazas_sopronban_es_kornyeken_1921"),
    "kadria": dict(ad="Kadria, Istorija 20. veka 2022/1", madde="1921 Ekim sonu SHS birlikleri Lura-Oroshi-Shëngjin'de; Vermoş 1922 Temmuz'dan itibaren işgalde", tarih="2022", tur="hakemli",
                   url="https://istorija20veka.rs/wp-content/uploads/2022/01/2022_1_2_kad_17-38.pdf"),
    "pokutya": dict(ad="Europe Centenary — Pokutya'da Rumen ordusu 1919 (Stănescu 1999'a dayanıyor)", madde="giriş 1919-05-24; tahliye 1919-08-17→27", tarih="1919-08-27", tur="ikincil",
                    url="https://europecentenary.eu/the-intervention-of-the-romanian-army-in-pokuttia-1919/",
                    not_="◐ ikincil; Polonya'nın devralma günü BULUNAMADI"),
    "cs_isgal": dict(ad="velenice.cz · zamek-valtice.cz (belediye/müze sayfaları — ◐)", madde="Valtice ve Gmünd istasyon bölgesi 1920-07-31'de ÇS'ye", tarih="1920-07-31", tur="ikincil",
                     url="https://www.velenice.cz/mesto/informace-o-meste/zacatky-mesta/",
                     not_="◐ Alman Bohemyası'nın işgali 1918-12 → 1919-01 (Znojmo 18/27 Aralık ÇELİŞKİLİ)"),
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
            km=None, disari=(), not_="", t=T, kategori="D", yalniz=None):
    c = bugun(cift, parca)
    if km:
        c = kes(c, *km)
    if yalniz:                                   # yalnız kutunun İÇİNDEKİ parça(lar)
        b = yalniz
        dis = [[-180, -90, b[0], 90], [b[2], -90, 180, 90], [b[0], -90, b[2], b[1]], [b[0], b[3], b[2], 90]]
        parcalar = []
        for p in kutu_disi(c, dis):
            parcalar += kutu_disi(p, disari) if disari else [p]
    else:
        parcalar = kutu_disi(c, disari) if disari else [c]
    for i, p in enumerate(parcalar, 1):
        sid = id_ if len(parcalar) == 1 else f"{id_}-{i}"
        s = sol(p, iso_kunye)
        if s is None:
            UYARI.append(f"{sid}: sol_taraf ölçülemedi")
        KAYIT.append(dict(
            id=sid, taraflar=taraflar, f=f, t=t, kategori=kategori, sol_taraf=s, hat=yuvarla(p),
            uzunluk_km=round(uzunluk(p), 1),
            geometri_kaynagi=NE_NOT + (f" · kesim {km[0]}-{km[1]} km (uzunluktan)" if km else ""),
            degisti=degisti, tahdit=tahdit, kesinlik_km=None, kesinlik_not=KES_NOT,
            dayanak=dayanak, not_=not_))


def dyok(id_, taraflar, f, kutu, degisti, dayanak, tahdit=None, not_="", kategori_1923="D", t=T):
    ek = "29 Ekim 1923 sınıfı" if t == T else f"{f} → {t} aralığındaki sınıf"
    KAYIT.append(dict(
        id=id_, taraflar=taraflar, f=f, t=t, kategori="D-YOK", sol_taraf=None, hat=None,
        kutu=kutu, geometri_kaynagi=None, degisti=degisti, tahdit=tahdit,
        kesinlik_km=None, kesinlik_not="kutu TAHMİNİ (±10-20 km); hat 1923 haritasından okunmadı",
        dayanak=dayanak,
        not_=f"{ek} (A–F kademesi): {YENI_SINIF.get(kategori_1923, kategori_1923)}. " + not_))


YENI_SINIF = {"D": "E", "fiili": "D (fiilî, koordinatsız)", "C": "C",
              "D (Javorina kesimi C)": "E (Javorina kesimi C)"}


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
d_kaydi("d1923-de-at", [A, AT], "1918-11-12", "AUT-DEU", {"AUT": AT, "DEU": A},
        degis(False, "Avusturya Devlet Antl. 1955 md. 5 + Avusturya Parlamentosu", "1938-01-01 hattı geri geldi; 1914 hattı 1919'da değişmedi (FRUS). 🟡 sonraki küçük düzeltmeler: 1972 antlaşması (içeriği OKUNMADI) ve 2001 antlaşması (Innwinkel'de karşılıklı 2.031 m² takas)"),
        dy("versay27", "sg50", "at1955"), {"t": "1914 öncesi", "not": "eski işaretli hat; yeni komisyon gerekmedi"},
        not_="G1: f = Avusturya Cumhuriyeti'nin günü (1918-11-12). Versay md. 27(5) ve Saint-Germain md. 27(7) '3 Ağustos 1914 sınırı' diyor; "
             "1918-11 sonrası işgal/değişiklik HİÇBİR kaynakta çıkmadı — ama 'doğrudan sürdü' diyen cümle de BULUNAMADI (◐). "
             "Taraf 1918 öncesi `habsburg` (G2).")
dyok("d1923-saar-de", [SAAR, A], "1920-12-17", [6.55, 49.3, 7.45, 49.7],
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
REPOLA = [30.15, 63.50, 31.20, 64.10]           # Fin denetimi 1918 sonbaharı → 1920-12-31/1921-02-14 (◐)
d_kaydi("d1923-fi-su", [FI, SU], "1920-12-31", "FIN-RUS", {"FIN": FI, "RUS": SU},
        degis(False, "IBS 74", "orta kesim 1920 sonrası antlaşmalardan (Dorpat = eski Büyük Dükalık hattı); uç kestirmesi UZUNLUKTAN, ±40 km"),
        dy("tartu_fi", "ibs74"), {"t": "1938", "not": "Dorpat hattı nihai protokolü 1938 (IBS 74); Karelya kıstağı işaretlemesi 1925'te başladı"},
        km=FI_KM, not_="Petsamo kesimi 1921-23 işaretlendi (harita 1923-03-01). f: LNTS onay tutanağı 1920-12-31 (IBS 74'ün 1921-02-14'ü 45 gün tahliye sonu). "
                       "Repola 1921-02-14'e kadar Fin denetiminde kalmış olabilir (◐) — fiilî görünümde o kesim 45 gün yanlış.")
# G1: 1918-11-11 → 1920-12-31 — hukukî hat yok (tanıma 1918-01-04 sınır antlaşması değil); fiilî hat Büyük Dükalık sınırı (◐), Repola hariç
d_kaydi("d1918-fi-su-fiili", [FI, SU], "1918-11-11", "FIN-RUS", {"FIN": FI, "RUS": SU},
        degis(False, "IBS 74", "aynı Büyük Dükalık hattı"),
        dy("tartu_fi", "ibs74"), None, km=FI_KM, disari=[REPOLA], t="1920-12-31", kategori="fiili",
        not_="G1. Tartu önsözü Rusya'nın Finlandiya'yı 'Büyük Dükalık sınırları içinde' tanıdığını söylüyor; IBS 74 antlaşmanın 'mevcut sınırı TEYİT ettiğini' yazıyor ⇒ "
             "1918-20'de fiilî hat bu çizgi (◐ — gün düzeyinde kaynak yok, geçici Fin seferleri hariç). Repola (Fin denetimi 1918 sonbaharı→) kutu dışı. "
             "f = G1 alt sınırı; gerçek başlangıç daha eski (G2'de geriye uzatılacak).")
dyok("d1923-fi-su-kuzey", [FI, SU], "1920-12-31", [28.2, round(_fi[0][1] + 0.02, 3), 30.4, 68.98],
     degis(True, "IBS 74", "Salla-Kuusamo 1940, Janiskoski 1947"), dy("tartu_fi", "ibs74"), None,
     "Salla kesimi. Kutu 68,98 K'de kesildi: üstünde D3-AVRUPA-BATI'nin FI-NO hatları var.")
dyok("d1923-fi-su-petsamo", [FI, SU], "1920-12-31", [30.95, 68.9, 32.2, 70.0],
     degis(True, "IBS 74", "Petsamo 1944'te SSCB'ye"), dy("tartu_fi", "ibs74"), None,
     "Petsamo koridorunun doğu kenarı (md. 4; Fin idaresi 1921-02-14'ten ◐). 28,9-30,85 D arası BATI'nın FI-NO hattı — kutu dışı.")
dyok("d1923-fi-su-guney", [FI, SU], "1920-12-31", [27.7, 60.5, 32.0, round(_fi[-1][1] - 0.02, 3)],
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
        dy("saint_germain", "at1955", "megginson"), {"t": "1923-05-31", "not": "komisyon işi bitti (FRUS, araç özeti 🟡)"},
        not_="Valtice ve Gmünd istasyon bölgesi fiilen 1920-07-31'de ÇS'ye geçti (◐) — fiilî görünümde o iki noktada 15 gün fark.")
# G1: ÇS denetimi 1918-12 → 1919-01 eski taç toprağı hattına ulaştı; Saint-Germain md. 27(6) = eski idarî hat, Valtice ve Gmünd HARİÇ
VALTICE = [16.60, 48.66, 16.98, 48.82]
GMUND = [14.88, 48.70, 15.06, 48.85]
d_kaydi("d1919-at-cs-fiili", [AT, CS], "1919-01-01", "AUT-CZE", {"AUT": AT, "CZE": CS},
        degis(False, "Saint-Germain md. 27(6) + 1955 md. 5", "eski Bohemya/Moravya–Aşağı/Yukarı Avusturya idarî hattı"),
        dy("sg50", "cs_isgal"), None, disari=[VALTICE, GMUND], t="1920-07-16", kategori="fiili",
        not_="G1. f: 'Ocak 1919' (◐, gün BULUNAMADI — Liberec 1918-12-16, Opava 1918-12-18, Znojmo 18/27 Aralık çelişkili, uç cepler Ocak 1919). "
             "Valtice ve Gmünd kutu dışı: o iki yer 1920-07-31'e kadar Avusturya'daydı, hat farklıydı.")
d_kaydi("d1923-at-cs-morava", [AT, CS], "1920-07-16", "AUT-SVK", {"AUT": AT, "SVK": CS},
        degis(False, "Avusturya Devlet Antl. 1955 md. 5 + IBS 66", "Morava kesimi 1938 hattı; güney ucu 1947'de AT-HU'dan AT-CS'ye geçti (kutu dışı)"),
        dy("saint_germain", "at1955", "ibs66"), {"t": "1923-05-31", "not": "🟡"}, disari=[RAJKA])
SOPRON = [16.38, 47.57, 16.80, 47.80]          # plebisit bölgesi — Trianon hattı onu Avusturya'ya veriyordu
PINKA = [16.38, 46.98, 16.62, 47.16]           # Pinka vadisi köyleri 1922-09 (🟡) · Szentpéterfa (🔴)
OLMOD = [16.52, 47.37, 16.68, 47.46]           # Ólmod 1923 başı (🔴)
_AH_DAY = dy("trianon", "hu1947", "grandits", "jedlicka")
_AH_DEG = degis(False, "Macaristan Barışı 1947 md. 1(1)", "1938-01-01 hattı; kuzey ucu 1947 Rajka değişikliği (kutu dışı). 🟡 1947 sonrası ARANMADI")
d_kaydi("d1923-at-hu", [AT, HU], "1921-07-26", "AUT-HUN", {"AUT": AT, "HUN": HU}, _AH_DEG, _AH_DAY,
        {"t": "1924-08-02", "not": "komisyon dağıldı (🔴 ikincil)"},
        disari=[RAJKA, SOPRON, PINKA, OLMOD],
        not_="🔴 FİİLÎ görünüm: Burgenland Macar denetiminde kaldı — Avusturya ordusu 1921-11-13/30, devir 1921-12-03 (Jedlicka; habsburger.net 12-05). "
             "1921-07-26 → 12-03 arası fiilî hat eski 1867 hattıydı ve koordinatı YOK ⇒ D kaydı yazılmadı, bu E çizgisi o aralıkta fiilen yanlış.")
d_kaydi("d1922-at-hu-sopron", [AT, HU], "1922-01-01", "AUT-HUN", {"AUT": AT, "HUN": HU}, _AH_DEG,
        dy("mnl_sopron", "hu1947", "grandits"), None, disari=[RAJKA], yalniz=SOPRON,
        not_="Sopron plebisiti 1921-12-14/15/16 → devir tutanağı 1922-01-01 (MNL). Öncesinde Trianon hattı Sopron'u Avusturya'ya veriyordu — o hat bu kutuda ÇİZİLMEDİ (koordinatı yok).")
dyok("d1923-at-hu-pinka", [AT, HU], "1921-07-26", PINKA,
     degis(False, "1947 md. 1(1)", "1923 hattı bugünkü; DEĞİŞME günü kaynaksız"), dy("grandits", "rubicon"), None,
     "Pinka vadisi köyleri 1922-09 MC kararı (🟡), Szentpéterfa takası (🔴). 1923-10-29'da hat bugünküyle aynı olabilir ama başlangıç günü kaynaksız ⇒ çizilmedi.")
dyok("d1923-at-hu-olmod", [AT, HU], "1921-07-26", OLMOD,
     degis(False, "1947 md. 1(1)", "aynı gerekçe"), dy("grandits"), None, "Ólmod devri 1923 başı (🔴 birincil kaynak yok).")
_AY_DEG = degis(False, "Avusturya Devlet Antl. 1955 md. 5", "1938-01-01 hattı. 🟡 1955 sonrası ARANMADI")
KARINTIYA_DOGU = [15.0, 45.0, 17.5, 48.0]
KARINTIYA_BATI = [12.0, 45.0, 15.0, 48.0]
d_kaydi("d1923-at-yu-stiriya", [AT, YU], "1920-07-16", "AUT-SVN", {"AUT": AT, "SVN": YU}, _AY_DEG,
        dy("saint_germain", "at1955", "suppan"), {"t": None, "not": "komisyon bitiş günü BULUNAMADI"},
        disari=[KARINTIYA_BATI],
        not_="Steiermark kesimi (15° D doğusu — ayrım boylamdan, ±5 km). Radkersburg SHS'de 1918-12-01 → 1920-07-26 (Suppan): fiilî görünümde 10 gün fark.")
d_kaydi("d1923-at-yu-karintiya", [AT, YU], "1920-10-10", "AUT-SVN", {"AUT": AT, "SVN": YU}, _AY_DEG,
        dy("sg50", "suppan", "at1955"), {"t": None, "not": "komisyon bitiş günü BULUNAMADI"},
        disari=[KARINTIYA_DOGU],
        not_="Karintiya: md. 27(3) hattı plebisite 'bağlı'; 1920-10-10 oylamasında %59,04 Avusturya (Suppan) ⇒ hat kesinleşti. "
             "Sonucun resmî ilan günü BULUNAMADI; 1. bölge 1920-11-18'de Avusturya'ya devredildi (fiilî görünüm 39 gün fark). "
             "🟡 Plebisit bölgesi dışındaki batı Karavanke kesimi 1920-07-16'dan beri kesin olabilir — ayrılmadı, erken başlatmamak için hepsi 10-10.")
d_kaydi("d1923-hu-cs", [HU, CS], "1921-07-26", "HUN-SVK", {"HUN": HU, "SVK": CS},
        degis(False, "IBS 66", "Trianon hattı 1947'de geri geldi — Rajka köprübaşı ve 1952 takas bölgeleri kutu dışı"),
        dy("trianon", "ibs66", "rubicon"), {"t": "1925", "not": "komisyon 1921-25 (IBS 66); Somoskő köyleri 1923-04 MC kararıyla Macaristan'a"},
        disari=[RAJKA, SOMOSKO, SATORAL])
TRI_HCR = [22.80, 47.90, 22.95, 48.00]
# G1: Paris hattı (1919-06-12/13) = sonraki Trianon hattı (IBS 76: "followed in the clauses"); ÇS ordusu tarafsız bölgeyi 1919-07-25'te aldı
d_kaydi("d1919-hu-cs-fiili", [HU, CS], "1919-07-25", "HUN-SVK", {"HUN": HU, "SVK": CS},
        degis(False, "IBS 66", "aynı Trianon hattı"), dy("ibs76", "fedinec"), None,
        disari=[RAJKA, SOMOSKO, SATORAL], t="1921-07-26", kategori="fiili",
        not_="G1 — Slovakya kesimi. 1919-06-13 Clemenceau notası hattı Trianon'daki hatla aynı (IBS 76, Fedinec); Macar Kızıl Ordusu 1919-06-30'dan çekildi (◐), "
             "ÇS ordusu 1919-07-01 Pozsony mütarekesinin tarafsız bölgesini 1919-07-25'te aldı (Fedinec ✓). "
             "Komisyon düzeltmeleri (1921-25) ve Somoskő (1923) kutu dışı/tahdit. Öncesi (1918-12-06 Bartha-Hodža hattı) koordinatsız ⇒ yazılmadı.")
d_kaydi("d1923-hu-cs-rutenya", [HU, CS], "1921-07-26", "HUN-UKR", {"HUN": HU, "UKR": CS},
        degis(False, "IBS 76", "1947 md. 1(3): HU-SSCB hattı = 1938-01-01 HU-ÇS hattı"),
        dy("trianon", "ibs76"), {"t": "1925", "not": "komisyon 1921-25 (IBS 66/76)"},
        disari=[TRI_HCR], not_="Rutenya kesimi; HU-CS-RO üçlü noktası çevresi kutu dışı.")
d_kaydi("d1920-hu-cs-rutenya-fiili", [HU, CS], "1920-08-30", "HUN-UKR", {"HUN": HU, "UKR": CS},
        degis(False, "IBS 76", "aynı hat"), dy("ibs76", "fedinec"), None,
        disari=[TRI_HCR], t="1921-07-26", kategori="fiili",
        not_="G1 — Rumen ordusu 1919-04-16'dan Rutenya'nın ~%65'ini (Çop–Berehove hattı dahil) tuttu; Berehove 1919-07-23, Vinohradiv 1920-05, "
             "son olarak Yasinya 1920-08-30'da boşaltıldı (Fedinec ✓). Bu kesimde ÇS-HU fiilî teması ancak o günden kesin ⇒ f muhafazakâr.")
d_kaydi("d1923-hu-yu-slovenya", [HU, YU], "1921-07-26", "HUN-SVN", {"HUN": HU, "SVN": YU},
        degis(False, "Macaristan Barışı 1947 md. 1(1)", "1938-01-01 hattı. 🟡 1947 sonrası ARANMADI"),
        dy("trianon", "hu1947"), {"t": "1924-07-10", "not": "komisyon (🔴 ikincil); Lendva itirazı 1922-11 karara bağlandı"})
d_kaydi("d1923-hu-yu-hirvatistan", [HU, YU], "1921-07-26", "HRV-HUN", {"HUN": HU, "HRV": YU},
        degis(False, "Macaristan Barışı 1947 md. 1(1)", "1938-01-01 hattı. 🟡 1947 sonrası ARANMADI"),
        dy("trianon", "hu1947", "gyanti", "suppan"), {"t": "1924-07-10", "not": "🔴 ikincil"},
        not_="🔴 FİİLÎ görünüm: SHS, Belgrad mütarekesi (1918-11-13) hattıyla Pécs-Baja-Barcs'ı tuttu; Pécs 1921-08-22'de boşaltıldı (MNL ✓, Baja günü BULUNAMADI). "
             "1921-07-26 → 08-22 arası fiilî hat farklı ve koordinatsız ⇒ D kaydı yazılmadı.")
d_kaydi("d1923-hu-yu-sirbistan", [HU, YU], "1921-07-26", "HUN-SRB", {"HUN": HU, "SRB": YU},
        degis(False, "Macaristan Barışı 1947 md. 1(1)", "1938-01-01 hattı; üçlü nokta çevresi 1923-24'te kaydı (kutu dışı)"),
        dy("trianon", "hu1947", "timar"), {"t": "1924-07-10", "not": "🔴 ikincil"}, disari=[BANAT_UC])
d_kaydi("d1923-hu-ro", [HU, RO], "1921-07-26", "HUN-ROU", {"HUN": HU, "ROU": RO},
        degis(False, "IBS 47 + 1947 md. 1(2)", "komisyon 11 kesimin 5'inde küçük düzeltme (antlaşma yetkisiyle — tahdit); üçlü nokta çevresi kutu dışı"),
        dy("trianon", "ibs47", "hu1947", "timar"), {"t": "1925", "not": "komisyon 1921-08-01'de başladı; bitiş BULUNAMADI (genel 1921-25)"},
        disari=[BANAT_UC, TRI_HCR])
# G1: Rumen ordusu Tisza ötesini 1920-02-24 → 03-30 boşalttı (Fedinec ✓); Gyula/Békéscsaba 03-31 (◐) ⇒ muhafazakâr f
d_kaydi("d1920-hu-ro-fiili", [HU, RO], "1920-03-31", "HUN-ROU", {"HUN": HU, "ROU": RO},
        degis(False, "IBS 47", "aynı Paris/Trianon hattı"), dy("ibs47", "fedinec", "perczel"), None,
        disari=[BANAT_UC, TRI_HCR], t="1921-07-26", kategori="fiili",
        not_="G1. 1919-06-13 telgrafındaki hat Trianon md. 27(3) ile esasen aynı (IBS 47). 1919-04-16 → 1920-03 Rumen işgali hattın ötesindeydi (Budapeşte 1919-08-04; "
             "Tisza gerisine 1919-11-23) ⇒ o dönem koordinatsız, yazılmadı.")

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
d_kaydi("d1919-pl-ro-fiili", [PL, RO], "1919-08-27", "ROU-UKR", {"ROU": RO, "UKR": PL},
        degis(False, "IBS 43", "aynı eski kadastro hattı"), dy("ibs43", "pokutya"), None,
        km=(192, 212), t="1923-03-15", kategori="fiili",
        not_="G1. Rumen ordusu Pokutya'ya 1919-05-24'te girdi, 1919-08-17→27 boşalttı (◐ ikincil) ⇒ iki denetim eski hatta buluştu. "
             "Polonya'nın devralma günü BULUNAMADI. Hukukî tanıma (Doğu Galiçya) 1923-03-15.")
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
# ================================================================ G1 TAMAMLAMA — Arnavutluk-SHS 1918-12-01 → 1921-11-09
dyok("d1918-al-yu-1913", [AL, YU], "1918-12-01", [19.2, 40.8, 20.9, 42.75],
     degis(True, "IBS 116", "1921 onayı 'bazı değişikliklerle'; 1925 Sveti Naum/Vermoş"), dy("ibs116", "kadria"), None,
     "G1 tamamlama: SHS kuruluşundan Büyükelçiler Konferansı kararına kadar hukukî hat 1913 Londra hattı — 'prensipte' kabul edilmiş, "
     "savaş yüzünden kesinleşmemiş (IBS 116 ✓). SHS birlikleri 1921 sonbaharında hattın ötesindeydi (Kadria ✓) ⇒ fiilî hat da farklı. Koordinat yok.",
     kategori_1923="C", t="1921-11-09")

# ================================================================ G2 — 1914-07-28 → 1918-11-11
G2 = "1914-07-28"
G3 = "1878-07-13"   # 🆕 G3 alt sınırı (Berlin)
HA, HM, RU, RG, SR, MN = "habsburg", "macaristan-habsburg", "rusya", "rusya-gecici-hukumet", "sirbistan-kralligi", "karadag"
RP, SP, BI = "romanya", "sirbistan-prensligi", "bosna-isgal"
# künye pencereleri (devletler.js'ten; taraf kimliği bu pencerelere göre bölünür)
RUS_W = [(RU, "1547-01-16", "1917-03-15"), (RG, "1917-03-15", "1917-11-07"), (SU, "1917-11-07", "9999")]
ROM_W = [(RP, "1859-01-24", "1881-03-26"), (RO, "1881-03-26", "9999")]
SRB_W = [(SP, "1804-02-14", "1882-03-06"), (SR, "1882-03-06", "1918-12-01")]
BOS_W = [(BI, "1878-07-13", "1908-10-06"), (HA, "1908-10-06", "1918-11-11")]
KISA = {RU: "rus", RG: "gecici", SU: "sovyet", RP: "rp", RO: "rk", SP: "sp", SR: "sk", BI: "bosna", HA: "ah"}


def bol(pencereler, f, t):
    """Her taraf için künye pencerelerinin kesişimi: [((kim1, kim2, ...), f, t)]."""
    out = [((), f, t)]
    for W in pencereler:
        yeni = []
        for kimler, a, b in out:
            for kim, wf, wt in W:
                ff, tt = max(a, wf), min(b, wt)
                if ff < tt:
                    yeni.append((kimler + (kim,), ff, tt))
        out = yeni
    return out


def rus_bol(t_son, f_bas=G3):
    return [(k[0], f, t) for k, f, t in bol([RUS_W], f_bas, t_son)]


BER45 = dict(ad="Berlin Antlaşması 1878 (AJIL Supplement metni, archive.org/JSTOR)", madde="md. 45", tarih="1878-07-13 (onay 1878-08-03, IBS 43)",
             tur="antlasma", url="https://archive.org/stream/jstor-2212670/2212670_djvu.txt",
             alinti="bounded on the West by the mid-channel of the Pruth",
             not_="güney: Kilya kolunun orta kanalı ve Eski İstanbul ağzı. IBS 43: 1878'den 1918'e kuzey sınırında değişiklik YOK")
K["ber45"] = BER45
VS27 = "Versay md. 27(5) + Saint-Germain md. 27(7): '3 Ağustos 1914 sınırı'"

K["berlin"] = dict(ad="Berlin Antlaşması 1878 (AJIL Supplement metni, archive.org/JSTOR)", madde="md. 25 (Bosna-Hersek işgali, Yenipazar garnizonları), 26 (Karadağ), 29 (Spiça), 34 (Sırbistan), 43 (Romanya), 64 (onay)",
                   tarih="1878-07-13 (teati 1878-08-03, IBS 43)", tur="antlasma", url="https://archive.org/stream/jstor-2212670/2212670_djvu.txt",
                   alinti="shall be occupied and administered by Austria-Hungary")
K["londra1913"] = dict(ad="IBS 116 — Londra Antlaşması ve Büyükelçiler Konferansı 1913", madde="Londra Antl. 1913-05-30 (Arnavutluk sınırları büyük devletlere); konferans 1913 yazı", tarih="1913",
                       tur="IBS", url=FSU.format(116),
                       alinti="Agreement, in principle, on the Albanian frontiers was reached",
                       not_="kuzey sınır komisyonu 1914 Haziran'da bitti; kesinleşme savaşla ertelendi")

d_kaydi("d1878-de-ah", [A, HA], G3, "AUT-DEU", {"AUT": HA, "DEU": A},
        degis(False, "Avusturya Devlet Antl. 1955 md. 5 + Avusturya Parlamentosu", "1914 hattı 1919'da değişmedi (Versay/Saint-Germain), 1955'te 1938 hattı geri geldi; 🟡 1972 ve 2001 küçük düzeltmeleri (2001: 2.031 m² takas)"),
        dy("versay27", "sg50"), {"t": "1914 öncesi", "not": "eski işaretli hat"}, t="1918-11-11",
        not_=f"G2+G3. {VS27} ⇒ bu çizgi 1914'te Almanya–Avusturya-Macaristan sınırıydı; 1878-1914 arasında değiştiğine dair kayıt yok (◐ — 'değişmedi' diyen kaynak da yok). "
             "f = G3 alt sınırı (hat daha eski). Habsburg künyesi 1918-11-11'de bitiyor, Avusturya Cumhuriyeti 1918-11-12'de başlıyor: 1 günlük künye boşluğu.")

# Prut: Berlin md. 45 tarifi (Prut orta kanalı + Kilya + Eski İstanbul) = bugünkü RO-MD/RO-UA tarifi (IBS 43) ⇒ hukukî kimlik; yatak kayması ölçülmedi
# f = Berlin teatisi 1878-08-03 (IBS 43). Taraflar: Rusya 3 rejim × Romanya prensliği/krallığı
for (kr, kro), f, t in bol([RUS_W, ROM_W], "1878-08-03", "1918-04-08"):
    son = f"{KISA[kr]}-{KISA[kro]}"
    for cift, parca, iso in (("MDA-ROU", 1, {"MDA": kr, "ROU": kro}), ("ROU-UKR", 2, {"ROU": kro, "UKR": kr})):
        d_kaydi(f"d1878-ru-ro-{'prut' if cift == 'MDA-ROU' else 'tuna'}-{son}", [kr, kro], f, cift, iso,
                degis(False, "IBS 43 + Berlin md. 45", "aynı nehir tarifi (Prut talvegi; Tuna-Kilya-Eski İstanbul); 1948-49 yeniden işaretlendi. 🟡 nehir yatağı kayması ÖLÇÜLMEDİ"),
                dy("ber45", "ibs43"),
                None, parca=parca, t=t,
                not_="G2+G3. Rusya-Romanya hattı: Berlin md. 45 ile Güney Besarabya Rusya'ya döndü; f = teati 1878-08-03 (IBS 43), t = Besarabya birliği (1918-04-08). "
                     "1878-07-13 → 08-03 arası güneyde 1856 hattı geçerliydi (koordinatsız, yazılmadı). "
                     + ("🔴 Moldova Demokratik Cumhuriyeti (1917-12/1918-02) künyesi YOK; Rumen ordusu 1918 başında Prut'u geçti — fiilî görünüm bu aralıkta yanlış. " if kr == SU else "")
                     + ("Bugünkü RO-UA kuzey ucundaki ~20 km'lik Prut parçası (Novoselitsa yakını) kesim belirsizliği yüzünden ALINMADI." if cift == "MDA-ROU" else ""))


def yok_rus(id_, diger, kutu, t_son, dayanak, not_):
    for kim, f, t in rus_bol(t_son):
        dyok(f"{id_}-{ {RU: 'rusya', RG: 'gecici', SU: 'sovyet'}[kim] }", [diger, kim], f, kutu,
             degis(True, None, "1918-1921 arasında ortadan kalktı"), dayanak, None, not_, kategori_1923="E", t=t)


BREST_T = "1918-03-29"      # Almanya–Rusya onay teatisi (BYU / ABD GPO 1918 ✓)
BREST_AH_T = "1918-07-04"   # Merkez Devletleri–Rusya teatisi (Avusturya Devlet Arşivi ◐)
K["brest"] = dict(ad="Brest-Litovsk Barışı (ABD GPO 1918 metni, BYU arşivi)", madde="md. III (hat antlaşma haritasında), md. XIV (onay)", tarih="1918-03-03 (teati Berlin 1918-03-29)",
                  tur="antlasma", url="https://wwi.lib.byu.edu/index.php/The_Peace_Treaty_of_Brest-Litovsk",
                  alinti="Ratifications exchanged at Berlin, 29 March, 1918",
                  not_="A-M teatisi 1918-07-04 (HHStA ◐); ek antlaşma 1918-08-27 (metin OKUNMADI); Sovyet iptali 1918-11-13 (◐)")
K["melno"] = dict(ad="VLE / MLE — Melno barışı (Litvanya ansiklopedileri)", madde="1422-09-27 hattı", tarih="1422-09-27", tur="ansiklopedi",
                  url="https://www.vle.lt/straipsnis/melno-taika/", not_="hat Versay'a kadar korundu (VLE ✓); bugünkü LT-RU ile aynılığı söyleyen akademik cümle BULUNAMADI")
K["spahic"] = dict(ad="Spahić, Acta geographica BiH 8 (2017) 5-21", madde="Berlin 1878 Drina hattı; AVNOJ 1943 '1918 sınırları'; küçük düzeltmeler ve anlaşmazlıklar", tarih="2017",
                   tur="hakemli", url="http://geoubih.ba/V2/publications/Actavol4no8/3.%20Spahic%20-%20SOME%20BiH.pdf")
K["canu"] = dict(ad="CANU Leksikon (Karadağ Bilimler ve Sanatlar Akademisi) — 'Granice Crne Gore'", madde="Sancak 1913 sınırlarına göre bölünür", tarih="—",
                 tur="akademi", url="https://leks.canu.ac.me/web/ldcg.php?OID=4096",
                 alinti="Sandžak dijeli između Srbije i Crne Gore po granicama iz 1913")
K["sr_mn_1913"] = dict(ad="Sırbistan–Karadağ sınır anlaşması, Belgrad (Borilović, Montenegrina — ◐)", madde="md. I-IV", tarih="1913-11-12 (30 Ekim E.T.)",
                       tur="antlasma", url="https://www.montenegrina.net/pages/pages1/istorija/dokumenti/razgranicenje_cg_i_srbije1913.html",
                       not_="◐ ikincil yayın; hat Hersek sınırından Beyaz Drin üçlü noktasına")
K["bukres1918"] = dict(ad="Bükreş Barışı 1918 (Macar Enstitüsü metni)", madde="md. 11 (Karpat düzeltmesi), md. 31 (onayla yürürlük)", tarih="1918-05-07",
                       tur="antlasma", url="http://ungarisches-institut.de/dokumente/pdf/19180507-1.pdf",
                       not_="Kral I. Ferdinand onaylamadı ⇒ teati yok ⇒ YÜRÜRLÜĞE GİRMEDİ (◐ ikincil); hukukî hat 1914 hattı kaldı")
K["dobrincu"] = dict(ad="Dobrincu (Iaşi Üniv.), Europa Liberă yazıları", madde="Rumen ordusu Prut'u 1918-01-21/23 geçti; Dinyester sağ kıyısı Şubat 1918 sonunda (◐)", tarih="—",
                     tur="ikincil", url="https://www.europalibera.md/a/blog-centenarul-unirii-dorin-dobrincu/28989457.html")
K["fi_tanima"] = dict(ad="histdoc.net — Sovyet tanıma belgeleri (çeviri)", madde="Sovnarkom 1917-12-31, VTsİK 1918-01-04", tarih="1918-01-04", tur="belge-cevirisi",
                      url="https://histdoc.net/history/itsen2.html", not_="◐; tanıma belgesinde sınır tarifi YOK")
for i, kutu in enumerate([[20.9, 54.3, 22.95, 55.9], [18.6, 53.0, 22.95, 54.35], [17.3, 50.2, 19.25, 53.05]], 1):
    yok_rus(f"d1878-de-ru-{i}", A, kutu, BREST_T, dy("versay28", "versay87", "brest", "melno"),
            "G2+G3. Almanya-Rusya sınırı (Doğu Prusya / Poznan / Silezya – Kongre Polonyası-Litvanya); 1878-1918 arasında değişmedi (◐). Koordinat YOK. "
            "Doğu Prusya-Litvanya kesimi 1422 Melno hattı, Versay'a kadar korundu (VLE ✓); bugünkü Kaliningrad-Litvanya hattının "
            "güney kısmıyla aynı olduğunu söyleyen akademik cümle BULUNAMADI ⇒ çizilmedi. "
            "t: Brest-Litovsk teatisi 1918-03-29 (Rusya Polonya ve Litvanya'dan vazgeçti, md. III). f = G3 alt sınırı.")
for i, kutu in enumerate([[18.9, 49.95, 24.2, 51.05], [23.9, 48.55, 26.45, 51.05], [25.9, 48.15, 26.4, 48.5]], 1):
    yok_rus(f"d1878-ah-ru-{i}", HA, kutu, BREST_AH_T, dy("riga1921", "ibs43", "brest"),
            "G2+G3. Avusturya-Macaristan (Galiçya/Bukovina) – Rusya sınırı; Zbruç kesimi 1921'de Polonya-SSCB hattı oldu (Riga md. 2). Koordinat YOK. "
            "t: Merkez Devletleri–Rusya teatisi 1918-07-04 (◐). f = G3 alt sınırı.")
dyok("d1918-brest", [A, SU], BREST_T, [21.0, 51.5, 28.5, 59.6],
     degis(True, "Brest md. III", "Sovyet Rusya 1918-11-13'te iptal etti (◐)"), dy("brest"), None,
     "G2. Brest-Litovsk md. III hattı: batısı Rus egemenliğinden çıktı; hat antlaşma HARİTASINDA — koordinat YOK. "
     "Karşı taraf Almanya'nın işgalindeki eski Rus toprakları (Polonya, Litvanya, Kurland; ek antlaşma 1918-08-27 ile Estonya-Livonya — metin OKUNMADI). "
     "Ukrayna Halk Cumhuriyeti ile Brest (1918-02-09, md. II Holm hattı) — yürürlüğü BULUNAMADI, künyesi YOK ⇒ yazılmadı.",
     kategori_1923="E", t="1918-11-13")
dyok("d1878-de-ah-bohemya-1", [A, HA], G3, [12.0, 49.3, 13.9, 50.4],
     degis(None, None, "Bohemya-Bavyera — 1923 kaydıyla aynı gerekçe"), dy("versay83"), None, "G2+G3.", t="1918-11-11")
dyok("d1878-de-ah-bohemya-2", [A, HA], G3, [12.0, 50.2, 15.1, 51.1],
     degis(None, None, "Bohemya-Saksonya"), dy("versay83"), None, "G2+G3.", t="1918-11-11")
dyok("d1878-de-ah-bohemya-3", [A, HA], G3, [12.8, 48.78, 13.83, 49.3],
     degis(None, None, "Bohemya-Bavyera güney"), dy("versay83"), None, "G2+G3.", t="1918-11-11")
dyok("d1878-de-ah-silezya", [A, HA], G3, [14.8, 49.9, 19.4, 51.1],
     degis(True, None, "Prusya Silezyası – Avusturya Silezyası/Moravya/Galiçya; 1920-45 değişti"), dy("versay83"), None, "G2+G3.", t="1918-11-11")
BUKRES_NOT = ("Bükreş Barışı (1918-05-07) md. 11 Karpat hattını A-M lehine düzeltiyordu ama kral onaylamadı, teati olmadı ⇒ "
              "yürürlüğe GİRMEDİ (◐) — hukukî hat 1914 hattı kaldı. Berlin 1878 bu hattı değiştirmedi (md. 43 yalnız bağımsızlık). ")
for (kro,), f, t in bol([ROM_W], G3, "1918-11-16"):
    dyok(f"d1878-hm-ro-1-{KISA[kro]}", [HM, kro], f, [22.0, 44.6, 26.0, 45.9],
         degis(True, None, "1920'den beri Romanya içi"), dy("berlin", "ibs43", "bukres1918"), None,
         "G2+G3. Macar tacı (Banat/Transilvanya) – Romanya Karpat sınırı. " + BUKRES_NOT +
         "Rumen ordusu 1916-08-27'de Transilvanya'ya girdi, 1916 sonbaharında geri atıldı (cephe hatları koordinatsız).", t=t)
    dyok(f"d1878-hm-ro-2-{KISA[kro]}", [HM, kro], f, [25.3, 45.4, 26.6, 47.3],
         degis(True, None, "1920'den beri Romanya içi"), dy("berlin", "ibs43", "bukres1918"), None, "G2+G3. Doğu Karpat kesimi. " + BUKRES_NOT, t=t)
for (kro,), f, t in bol([ROM_W], G3, "1918-11-11"):
    dyok(f"d1878-ah-ro-bukovina-{KISA[kro]}", [HA, kro], f, [25.2, 47.2, 26.6, 48.3],
         degis(True, "IBS 43", "1918 birlik; 1940 Kuzey Bukovina hattı"), dy("berlin", "ibs43", "bukres1918"), None,
         "G2+G3. Bukovina (Avusturya) – Romanya. IBS 43: kuzey sınırında 1918'e kadar değişiklik yok. " + BUKRES_NOT, t=t)
# Bosna – Sırbistan: 1878-1908 Bosna A-M işgalinde (Osmanlı egemenliği, künye `bosna-isgal`), 1908-10-06 ilhak
for (kb, ks), f, t in bol([BOS_W, SRB_W], G3, "1918-11-11"):
    dyok(f"d1878-bs-sr-drina-{KISA[kb]}-{KISA[ks]}", [kb, ks], f, [18.9, 43.55, 19.75, 44.9],
         degis(True, "Spahić 2017", "Drina hattı Berlin 1878'den; AVNOJ 1943 '1918 sınırları' — ama küçük düzeltmeler (Foça, Zvornik adaları), "
                                    "onaylanmamış Drina kesimi ve anlaşmazlıklar (Sjeverin, Međurječje, Štrbci, barajlar)"),
         dy("berlin", "spahic"), None,
         "G2+G3. Bosna-Hersek – Sırbistan (Drina; güneyde Rudo-Priboj eski Bosna/Sancak ayrımı). Bugünkü BİH-SRB büyük ölçüde bu hat "
         "ama kaynak küçük farklar sayıyor ⇒ çizilmedi. 1878-1908 Bosna, Berlin md. 25 ile A-M işgal ve idaresinde (egemenlik Osmanlı'da — "
         "o dönemin Osmanlı yüzü D1-TURKIYE'nin); ilhak 1908-10-06 (künye günü). Sırbistan 1915 sonbaharında işgal edildi.", t=t)
for (ks,), f, t in bol([SRB_W], G3, "1918-11-16"):
    dyok(f"d1878-hm-sr-tuna-{KISA[ks]}", [HM, ks], f, [19.1, 44.4, 22.7, 45.2],
         degis(True, None, "Srem/Banat 1918'den beri Sırbistan içi"), dy("berlin"), None,
         "G2+G3. Macar tacı (Hırvatistan-Slavonya/Banat) – Sırbistan: Sava ve Tuna.", t=t)
for (ks, kro), f, t in bol([SRB_W, ROM_W], G3, "1918-12-01"):
    dyok(f"d1878-sr-ro-tuna-{KISA[ks]}-{KISA[kro]}", [ks, kro], f, [21.3, 44.3, 22.6, 44.9],
         degis(None, None, "Tuna kesimi için 'değişmedi' diyen kaynak BULUNAMADI (Demir Kapı barajı)"), dy("berlin"), None,
         "G3. Sırbistan–Romanya Tuna sınırı (iki devlet de Berlin md. 34 / 43 ile bağımsız). Timok ağzı–Demir Kapı. 1923 `d1923-ro-yu-tuna` ile aynı kutu.",
         kategori_1923="E", t=t)
for (kb,), f, t in bol([BOS_W], G3, "1918-11-11"):
    dyok(f"d1878-bs-mn-{KISA[kb]}", [kb, MN], f, [18.4, 42.3, 19.15, 43.6],
         degis(True, "Spahić 2017 + CANU", "Sutorina 1929'da Zeta'ya, 1945'te Karadağ'a ⇒ bugünkü sınır 1914 hattı DEĞİL; "
                                           "BİH-MNE'nin 1878 hattıyla aynılığı BULUNAMADI"),
         dy("berlin", "spahic", "canu"), None,
         "G2+G3. Hersek – Karadağ (Berlin md. 26-29 hattı). 1878-1908 Hersek A-M işgalinde. Karadağ 1916 Ocak'ta işgal edildi.", t=t)
dyok("d1878-ah-mn-dalmacya", [HA, MN], G3, [18.4, 42.0, 19.15, 42.55],
     degis(True, "CANU", "Boka 1918'e kadar Avusturya Dalmaçyası, 1945'te Karadağ'a ⇒ bugünkü HRV-MNE 1914 hattı DEĞİL"),
     dy("berlin", "canu"), None,
     "G2+G3. Dalmaçya (Boka/Spiça) – Karadağ. Berlin md. 29: Spiça Dalmaçya'ya katıldı, Bar (Antivari) Karadağ'a.", t="1918-11-11")
d_kaydi("d1913-sr-mn", [SR, MN], "1913-11-12", "MNE-SRB", {"MNE": MN, "SRB": SR},
        degis(False, "CANU Leksikon", "Sancak bugün 1913 sınırlarına göre bölünmüş (✓)"),
        dy("sr_mn_1913", "canu"), None, t="1918-11-26",
        not_="G2+G3. f = 1913-11-12 (30 Ekim E.T.) Belgrad sınır anlaşması (◐ ikincil yayın). Öncesi: Sancak 1912 Ekim'de iki ordunun işgaline girdi "
             "(fiilî ayrım hattı koordinatsız, yazılmadı); 1878-1912 arasında iki devletin ortak sınırı YOKTU (arada Osmanlı Yenipazar sancağı). "
             "t = Karadağ künyesinin sonu (Podgorica meclisi) ⇒ hat SHS içinde iç sınır oldu. 1913 hattı doğuda bugünkü Kosova'nın içinden "
             "(İpek-Yakova Karadağ'daydı) Beyaz Drin üçlü noktasına gidiyordu — o kısım alınmadı. 1915-18 iki taraf da işgal altında.")
dyok("d1913-sr-mn-kosova", [SR, MN], "1913-11-12", [19.9, 42.2, 20.9, 42.82],
     degis(True, "sr_mn_1913", "1913 hattının Metohija kesimi bugün Kosova içi"), dy("sr_mn_1913", "canu"), None,
     "G2+G3. Karadağ'ın İpek-Yakova kesimi ile Sırbistan arası.", t="1918-11-26")
ARN_NOT = ("1913 Londra hattı: Londra Antlaşması (1913-05-30) sınırları büyük devletlere bıraktı, Büyükelçiler Konferansı 1913 YAZINDA prensipte anlaştı "
           "(gün BULUNAMADI — f = Londra Antlaşması, yani hattın doğabileceği en erken gün), kuzey komisyonu 1914 Haziran'da bitti, "
           "kesinleşme savaşla ertelendi (IBS 116 ✓). 1912-11-28 → 1913-05-30 arası Arnavutluk sınırsız (Balkan Savaşı işgalleri koordinatsız). "
           "Arnavutluk 1914-18 boyunca işgal altında (Karadağ, Sırbistan, İtalya, A-M).")
dyok("d1913-mn-al", [MN, AL], "1913-05-30", [19.2, 41.8, 20.1, 42.75],
     degis(True, "IBS 116", "1913 hattı 1921'de 'bazı değişikliklerle' onaylandı"), dy("londra1913", "ibs116"), None,
     "G2+G3. " + ARN_NOT, kategori_1923="C", t="1918-11-26")
dyok("d1913-sr-al", [SR, AL], "1913-05-30", [20.0, 40.8, 20.9, 42.6],
     degis(True, "IBS 116", "aynı gerekçe"), dy("londra1913", "ibs116"), None, "G2+G3. " + ARN_NOT, kategori_1923="C", t="1918-12-01")

# ================================================================ G4-G7 — 1878-07-13 → 1606-11-11 (zincirli)
# Kural (GERIYE-SARMA ADIM 2): E yalnız barış antlaşması/protokol; işgal/ateşkes D ama koordinatsızsa YAZILMAZ.
# Bu dönemde koordinatla çizilebilen hatlar: Prut (1812, Bükreş md. 4) ve Avusturya–Bavyera (1816, Münih).
# Öteki bütün hatlar YOK kutusu (hukukî dayanaklı envanter; harita orada A/B'ye düşer).
HT = "https://archive.org/details/MapOfEuropeByTreatyV"
K.update({
    "hertslet1": dict(ad="Hertslet, The Map of Europe by Treaty, c. 1 (1875)", madde="No. 12-14 (3 Mayıs 1815), 27 (Viyana Nihai Senedi), 53 (Münih 1816), 77 (Prusya-Rusya 1817), 81 (Salzburg 1818)", tarih="1815-1818", tur="antlasma-derlemesi", url=HT + "1"),
    "hertslet2": dict(ad="Hertslet, The Map of Europe by Treaty, c. 2", madde="No. 143 (Radziwiłłów, A-R sınırı), 175 (1835), 180 (Tarnowitz 1836), 197 (Münih 1844), 201-202 (Kraków 1846), 209 (Dresden 1848), 228 (1850), 264 (Paris 1856), 277, 280 (Kişinev 1857), 282, 299, 334", tarih="1829-1861", tur="antlasma-derlemesi", url=HT + "2"),
    "hertslet3": dict(ad="Hertslet, The Map of Europe by Treaty, c. 3", madde="No. 388 (Prag 1866), 444 (1871 anayasası)", tarih="1866-1871", tur="antlasma-derlemesi", url=HT + "3"),
    "noradounghian": dict(ad="Noradounghian, Recueil d'actes internationaux de l'Empire ottoman (1897-1903)", madde="c. I no. 369-371 (Bukovina 1775-1776); c. II (Yaş 1792 md. 3; Bükreş 1812 md. 4; Edirne 1829 md. 3)", tarih="—", tur="antlasma-derlemesi",
                          url="https://archive.org/details/recueildactesin03turkgoog"),
    "stauber": dict(ad="Stauber, Zeitschrift für bayerische Landesgeschichte 2015 (İng. sürüm, bavarian-studies.org)", madde="Paris 1814-06-03 (Tirol iadesi); Münih 1816-04-14, Salzburg devri 1816-05-01", tarih="2015", tur="hakemli",
                    url="https://www.bavarian-studies.org/the-reorganization-of-europe-north-and-south-of-the-alps/"),
    "parl_at": dict(ad="Avusturya Parlamentosu — Avusturya-Almanya sınır antlaşması belgeleri", madde="1972-02-29 antlaşması; 2001-07-02 antlaşması (Innwinkel'de 2.031 m² takas; 1844 ve 1850 antlaşmalarını kaldırır)", tarih="2001", tur="resmi",
                    url="https://www.parlament.gv.at/dokument/XXI/I/741/fnameorig_602882.html"),
    "eb_partitions": dict(ad="Britannica — Partitions of Poland", madde="1772-08-05 sözleşme, Sejm onayı 1773-09-30; 1793-01-23; 1795-10-24 → 1797-01-26", tarih="—", tur="ansiklopedi",
                          url="https://www.britannica.com/event/Partitions-of-Poland", not_="'Britannica Editors' — imzasız kurumsal madde (§4 ara bölge)"),
    "eb_napoleon": dict(ad="Britannica — Treaties of Tilsit · Treaty of Schönbrunn · Treaty of Pressburg (1805) · Duchy of Warsaw", madde="Tilsit 1807-07-07/09; Schönbrunn 1809-10-14; Pressburg 1805-12-26", tarih="—", tur="ansiklopedi",
                        url="https://www.britannica.com/event/Treaty-of-Schonbrunn"),
    "eb_teschen": dict(ad="Britannica — Treaty of Teschen", madde="Mayıs 1779; Inn'in doğusu Yukarı Avusturya'ya", tarih="1779", tur="ansiklopedi",
                       url="https://www.britannica.com/topic/Treaty-of-Teschen"),
    "eb_silesia": dict(ad="Britannica — Silesian Wars", madde="Breslau 1742-06-11; Troppau, Teschen, Jägerndorf Avusturya'da", tarih="—", tur="ansiklopedi",
                       url="https://www.britannica.com/event/Silesian-Wars"),
    "ddb_1742": dict(ad="Berlin Barışı basılı metni (Deutsches Historisches Museum, DDB)", madde="'Am 28. Julii 1742. zu Berlin gezeichnet'", tarih="1742-07-28", tur="antlasma",
                     url="https://www.deutsche-digitale-bibliothek.de/item/EFSSM4D5KHXJZ4AWHMDGLERKZLZWTUMP"),
    "ieg_1763": dict(ad="IEG Mainz — Europäische Friedensverträge: Hubertusburg", madde="1763-02-15, status quo ante", tarih="1763-02-15", tur="akademik",
                     url="https://www.ieg-friedensvertraege.de/---_site.popup..html_dir._treaty.3_comment.378_notrans.1_likecms.html"),
    "kreuter": dict(ad="Kreuter, Grazer Jahrbuch (2019), DOI 10.25364/22.2:2019.10", madde="Pasarofça 1718-07-21: Olt'un sağ yakasındaki beş ilçe Avusturya'ya", tarih="2019", tur="hakemli",
                    url="https://unipub.uni-graz.at/download/pdf/4672086.pdf"),
    "tdv_pasarofca": dict(ad="TDV — pasarofca-antlasmasi", madde="Küçük Eflak 'Oltu ırmağına kadar'; ilk yedi madde sınır", tarih="1718-07-21", tur="TDV",
                          url="https://islamansiklopedisi.org.tr/pasarofca-antlasmasi"),
    "eb_belgrad": dict(ad="Britannica — Treaty of Belgrade (1739)", madde="Kuzey Sırbistan ve Küçük Eflak Osmanlı'ya", tarih="Eylül 1739", tur="ansiklopedi",
                       url="https://www.britannica.com/event/Treaty-of-Belgrade-1739", not_="gün 18 Eylül yalnız arama özetinde (◐)"),
    "tdv_erdel": dict(ad="TDV — erdel", madde="'1699 Karlofça Antlaşması ile Erdel Avusturya'ya terkedildi'", tarih="1699", tur="TDV",
                      url="https://islamansiklopedisi.org.tr/erdel", not_="🔴 atlas künyesi `erdel` 1711-04-30'a kadar sürüyor — TDV ile çelişki, D-KUNYE'ye"),
    "eb_hungary": dict(ad="Britannica — History of Hungary: The period of partition; Gábor Bethlen; György Rákóczi I", madde="Nikolsburg 1621-12-31 (yedi kontluk); Pozsony 1626; Linz 1645-12-16", tarih="—", tur="ansiklopedi",
                       url="https://www.britannica.com/topic/history-of-Hungary/The-period-of-partition",
                       not_="yedi kontluğun geri dönüş günleri BULUNAMADI"),
    "ieu_eternal": dict(ad="Encyclopedia of Ukraine (CIUS) — Eternal Peace of 1686", madde="Moskova 1686-05-16; sol yaka ve Kiev Rusya'ya", tarih="1686-05-16", tur="ansiklopedi-akademik",
                        url="https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CE%5CT%5CEternalPeaceof1686.htm",
                        not_="Sejm Kançılaryası 1 Mayıs 1686 diyor — ÇELİŞKİ; onay Varşova Genel Konseyi 1710"),
    "sejm_1710": dict(ad="Dzieje Sejmu (Sejm Kançılaryası) — General Council of Warsaw 1710", madde="Ebedî Barış'ın onayı", tarih="1710", tur="resmi",
                      url="https://www.dziejesejmu.pl/en/general-council-of-warsaw-1710-confirmation-kingdom-of-poland-gives-up-the-central-and-east-ukraine,p1858802479"),
    "eb_deulino": dict(ad="Britannica — Truce of Deulino (R. Limbach) · Truce of Andrusovo", madde="Deulino Aralık 1618 (mütareke); Andrusovo 30 Ocak E.T. / 9 Şubat 1667 (mütareke)", tarih="—", tur="ansiklopedi",
                       url="https://www.britannica.com/event/Truce-of-Deulino"),
    "eb_polyanov": dict(ad="Britannica — Władysław IV (Polyanov barışı)", madde="1634: Moskova önceki toprak devirlerini teyit etti", tarih="1634", tur="ansiklopedi",
                        url="https://www.britannica.com/topic/Treaty-of-Polyanov", not_="gün BULUNAMADI (14 Haziran yalnız atlasın kendi kaydında)"),
    "eb_wehlau": dict(ad="Britannica — Treaty of Wehlau · Treaty of Oliva", madde="Wehlau 1657-09-19 (Dukalık Prusya üzerindeki Leh metbuluğu kalktı); Oliva 1660-05-03 teyit", tarih="—", tur="ansiklopedi",
                      url="https://www.britannica.com/event/Treaty-of-Wehlau"),
    "polishhistory": dict(ad="Wasiucionek — Across the Dniester (Muzeum Historii Polski portalı)", madde="Leh-Boğdan sınırı Beyaz Çeremoş, Kolaçin, Dinyester; 1699 sonrası büyük ölçüde aynı", tarih="—", tur="akademik",
                          url="https://polishhistory.pl/across-the-dniester-the-texture-of-contact-in-the-seventeenth-century-polish-moldavian-borderland/"),
    "tdv_hotin": dict(ad="TDV — hotin · kamanice · bogdan", madde="Hotin 1711'den sonra doğrudan Osmanlı; Kamaniçe 1699'da tahliye", tarih="—", tur="TDV",
                      url="https://islamansiklopedisi.org.tr/hotin"),
    "ieu_podilia": dict(ad="Encyclopedia of Ukraine — Podilia · Bukovyna · Bucharest Peace Treaty of 1812", madde="1793'te doğu Podolya Rusya'ya, batı sınırı Zbruç, güneybatısı Dinyester", tarih="—", tur="ansiklopedi-akademik",
                        url="https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CP%5CO%5CPodilia.htm"),
    "dz_1793": dict(ad="dzieje.pl (PAP) — İkinci paylaşma", madde="Rusya-Polonya imza 1793-07-22, onay 1793-08-17; Prusya-Polonya onayı 1793-09-23", tarih="1793", tur="gazetecilik",
                    url="https://dzieje.pl/", not_="◐ gazetecilik kaynağı — günler ikincil"),
    "canu_mn_at": dict(ad="CANU Leksikon — Avusturya-Karadağ sınırı", madde="1820-11-23 sınır antlaşması; 1841-07-18 sınır belirleme antlaşması", tarih="—", tur="akademi",
                       url="https://leks.canu.ac.me/web/ldcg.php?OID=2761"),
    "tdv_sirbistan": dict(ad="TDV — sirbistan", madde="özerklik fermanı 17 Ekim 1830", tarih="1830-10-17", tur="TDV",
                          url="https://islamansiklopedisi.org.tr/sirbistan", not_="🔴 atlas maddesi 1830-11-08 — ÇELİŞKİ, HARİTA-VERI'ye"),
    "hertslet_cuza": dict(ad="Hertslet c. 2 s. 1335 notu; No. 299, 334", madde="Cuza Boğdan'da 1859-01-17, Eflak'ta 1859-02-05 seçildi; güçlerin protokolü 1859-09-06; ferman 1861-12-06", tarih="1859", tur="antlasma-derlemesi",
                          url=HT + "2", not_="TDV `bogdan` 5 ve 24 Şubat diyor — ÇELİŞKİ; atlas künyesi `romanya` 1859-01-24'te başlıyor"),
})

# Taraf pencereleri (künye kimlikleri; devletler.js)
BG, EF, ER, LH, PR, VR, KP, ZP = "bogdan", "eflak", "erdel", "lehistan", "prusya", "varsova-dukaligi", "kongre-polonyasi", "zaporojye"
BOG_W = [(BG, "1359-01-01", "1859-01-24"), (RP, "1859-01-24", "1881-03-26"), (RO, "1881-03-26", "9999")]
EFL_W = [(EF, "1330-01-01", "1859-01-24"), (RP, "1859-01-24", "1881-03-26"), (RO, "1881-03-26", "9999")]
TRA_W = [(ER, "1570-01-01", "1699-01-26"), (HM, "1699-01-26", "1918-11-16")]   # TDV: Karlofça 1699
GER_W = [(A, "0962-02-02", "1701-01-18"), (PR, "1701-01-18", "1871-01-18"), (A, "1871-01-18", "9999")]
KISA.update({BG: "bg", EF: "ef", ER: "er", HM: "hm", LH: "lh", PR: "pr", A: "de", VR: "vr", KP: "kp"})
G4, G5, G6, G7 = "1815-06-09", "1774-07-21", "1699-01-26", "1606-11-11"


def yokp(id_, pencereler, sabit, kutu, f, t, dayanak, not_, tahdit=None, kat="D", degisti=None, onde=True):
    """Künye pencerelerine bölünmüş YOK kayıtları. sabit: değişmeyen taraf (None olabilir)."""
    for kimler, ff, tt in bol(pencereler, f, t):
        taraf = list(kimler) if sabit is None else ([sabit] + list(kimler) if onde else list(kimler) + [sabit])
        dyok(id_ + "".join("-" + KISA.get(k, k) for k in kimler), taraf, ff, kutu,
             degisti or degis(True, None, "koordinatsız eski hat"), dayanak, tahdit, not_, kategori_1923=kat, t=tt)


# ---------- Polonya-Litvanya ↔ Moskova/Rusya (G7-G6)
dyok("d1634-lh-ru", [LH, RU], "1634-01-01", [23.0, 49.5, 36.5, 56.5],
     degis(True, None, "1667/1686'da değişti"), dy("eb_polyanov", "eb_deulino"), None,
     "G7. Polyanovka barışı Deulino mütarekesinin (Aralık 1618) toprak devirlerini teyit etti (Britannica). f: yıl kaynaklı, GÜN BULUNAMADI (YYYY-01-01). "
     "1606-1634 arası: Karışıklık Dönemi işgalleri ve Deulino MÜTAREKESİ — koordinatsız fiilî hat, yazılmadı. "
     "Andrusovo (1667) de bir MÜTAREKEdir: sol yaka, Kiev, Smolensk fiilen Rusya'ya geçti ama hukukî E hattı 1686'ya kadar Polyanovka hattı kaldı "
     "(fiilî görünüm 1667-1686 arası yanlış, koordinatsız).", t="1686-05-16")
dyok("d1686-lh-ru", [LH, RU], "1686-05-16", [23.0, 49.5, 36.5, 56.5],
     degis(True, None, "1772-1795 paylaşmaları"), dy("ieu_eternal", "sejm_1710"), None,
     "G7-G6. Ebedî Barış (Grzymułtowski): sol yaka Ukrayna ve Kiev Rusya'ya, Bratslav tarafsız kuşak (IEU). Gün ÇELİŞKİLİ (16 Mayıs IEU / 1 Mayıs Sejm Kançılaryası); "
     "Polonya onayı 1710. 1699-1772 arasında değiştiğine dair kaynak yok (◐ — 'değişmedi' diyen akademik cümle de yok).", t="1773-09-30")
# ---------- Polonya ↔ Brandenburg-Prusya / Almanya
yokp("d1606-lh-alm", [GER_W], LH, [14.5, 51.5, 22.9, 55.0], G7, "1773-09-30", dy("eb_wehlau", "eb_partitions"),
     "G7-G6. Polonya'nın batı ve kuzey sınırı: Brandenburg, Pomeranya, Dukalık Prusya (1657 Wehlau'ya kadar Leh fiefi — o dönem bu kesim iç sınır; "
     "1657'den sonra egemen, künyesi YOK → `almanya` ile yazıldı), 1701'den Prusya Krallığı. 1742'den sonra Silezya-Polonya kesimi de Prusya'nın.")
# ---------- Polonya ↔ Habsburg (Silezya + Macar Karpatları)
dyok("d1606-lh-ah", [LH, HA], G7, [17.0, 48.8, 24.5, 50.5],
     degis(True, None, "1742 Silezya Prusya'ya; 1772 Galiçya"), dy("eb_silesia", "eb_partitions"), None,
     "G7-G6. Habsburg Silezyası ve Macar tacının Karpat kesimi – Polonya. Spiş kasabaları 1769'da Avusturya işgaline girdi (gün BULUNAMADI, koordinatsız), 1772-73 paylaşmasıyla resmîleşti.",
     t="1742-07-28")
dyok("d1742-lh-ah", [LH, HA], "1742-07-28", [18.8, 48.8, 24.5, 49.7],
     degis(True, None, "1772 Galiçya"), dy("ddb_1742", "eb_partitions"), None, "G6. Yalnız Macar Karpat kesimi (Silezya artık Prusya'nın).", t="1773-09-30")
# ---------- Macar tacı ↔ Erdel, Erdel/Habsburg ↔ Eflak/Boğdan
dyok("d1606-hm-er", [HM, ER], G7, [20.5, 45.5, 24.0, 48.5],
     degis(True, None, "1699'da Erdel Habsburg'a geçti"), dy("eb_hungary", "tdv_erdel"), None,
     "G7. Habsburg Macaristan'ı ile Erdel prensliği (Osmanlı'ya tâbi) arası. Nikolsburg (1621-12-31) Bethlen'e yedi kuzeydoğu kontluğunu verdi; Pozsony (1626); "
     "Linz (1645-12-16) yine yedi kontluk. Kontlukların geri dönüş günleri BULUNAMADI ⇒ hat dilimlere ayrılamadı, tek kutu.", t=G6)
yokp("d1606-tra-ef", [TRA_W, EFL_W], None, [22.0, 44.6, 26.0, 45.9], G7, G3, dy("tdv_erdel", "hertslet_cuza", "ibs43"),
     "G7→G4. Erdel/Macar tacı – Eflak Karpat sınırı. 1718-1739 arasında Küçük Eflak (Oltenya) Avusturya'daydı: batı kesimi o dönem iç sınır (ayrı Olt kaydı). "
     "Karlofça sonrası Erdel ayrı bir Habsburg prensliğiydi; taraf `macaristan-habsburg` ile yazıldı (künye yok). Habsburg-Eflak Karpat sınırının tahdidi BULUNAMADI.")
yokp("d1606-tra-bg", [TRA_W, BOG_W], None, [25.3, 45.4, 26.6, 47.3], G7, G3, dy("tdv_erdel", "hertslet_cuza"),
     "G7→G4. Erdel/Macar tacı – Boğdan Doğu Karpat sınırı.")
dyok("d1718-ah-ef-olt", [HA, EF], "1718-07-21", [23.8, 43.7, 24.6, 45.6],
     degis(True, None, "1739'da kalktı"), dy("tdv_pasarofca", "kreuter", "eb_belgrad"), None,
     "G6. Pasarofça: Küçük Eflak Olt'a kadar Avusturya'ya (TDV; Kreuter 2019: 'Olt'un sağ yakasındaki beş ilçe'). Hat Olt nehri — ama 1718 nehir yatağı "
     "ve Olt'un Tuna'ya kadar tam güzergâhı ölçülmedi ⇒ çizilmedi. t: Belgrad Barışı 1739-09-18 (gün ◐; Britannica 'Eylül 1739').", t="1739-09-18")
# ---------- Polonya ↔ Boğdan, Avusturya ↔ Boğdan (Bukovina)
dyok("d1606-lh-bg", [LH, BG], G7, [24.5, 47.9, 27.5, 48.8],
     degis(True, None, "1772'de Galiçya Avusturya'ya"), dy("polishhistory", "tdv_hotin"), None,
     "G7-G6. Beyaz Çeremoş, Kolaçin, Dinyester (Wasiucionek). 1672-1699 Podolya Osmanlı'daydı (Leh-Osmanlı yüzü D1'in); "
     "Hotin 1711'den sonra doğrudan Osmanlı (D1). 1699 sonrası hat büyük ölçüde aynı (Wasiucionek).", t="1773-09-30")
dyok("d1773-ah-bg", [HA, BG], "1773-09-30", [24.5, 47.7, 26.5, 48.8],
     degis(True, None, "1775 Bukovina"), dy("eb_partitions", "noradounghian"), None,
     "G6-G5. Galiçya Avusturya'ya geçince eski Leh-Boğdan hattı Avusturya-Boğdan hattı oldu; Bukovina'nın devriyle (1775) değişti.", t="1775-05-07")
yokp("d1775-ah-bukovina", [BOG_W], HA, [25.2, 47.2, 26.6, 48.3], "1775-05-07", G3, dy("noradounghian", "ieu_podilia", "hertslet_cuza"),
     "G5-G4. Bukovina'nın devri: İstanbul sözleşmesi 1775-05-07, açıklayıcı sözleşme 1776-05-12, Palamutka tahdit senedi 1776-07-04 (gün ◐). "
     "Avusturya işgali 1774 (gün BULUNAMADI). IBS 43: kuzey sınırı 1918'e kadar değişmedi — ama hat 1940'ta ortadan kalktı, koordinat YOK.",
     tahdit={"t": "1776-07-04", "not": "Palamutka tahdit senedi (◐ gün)"})
# ---------- Rusya ↔ Boğdan: yukarı Dinyester (1793-1812) ve Prut (1812-1878)
dyok("d1793-ru-bg-dinyester", [RU, BG], "1793-08-17", [26.4, 48.0, 29.5, 48.8],
     degis(True, None, "1812'de Prut hattı"), dy("ieu_podilia", "tdv_hotin", "dz_1793"), None,
     "G5. İkinci paylaşmayla doğu Podolya Rusya'ya geçti; güneybatı sınırı Dinyester (IEU). Aşağısı Yaş (1792) ile Rusya-Osmanlı (D1), Hotin raya'sı Osmanlı (D1). "
     "f: Rusya-Polonya onayı 1793-08-17 (◐ gazetecilik). Dinyester kesiminin kaynaklı uçları yok ⇒ çizilmedi.", t="1812-06-23")
# Prut: Bükreş 1812 md. 4 — "Prut ... Tuna'ya dökülüşüne kadar"; Rusya nehrin yarısını aldı (talveg)
PRUT_KUZEY = [26.0, 47.1, 28.5, 48.6]            # 1856 hattının Prut'a vardığı Katamori'nin KUZEYİ (muhafazakâr)
PRUT_GUNEY = [27.5, 45.3, 29.0, 47.1]
d_kaydi("d1812-ru-bg-prut", [RU, BG], "1812-06-23", "MDA-ROU", {"MDA": RU, "ROU": BG},
        degis(False, "IBS 43 + Bükreş md. 4 + Berlin md. 45", "Prut orta çizgisi 1812'den beri aynı tarif; 🟡 yatak kayması ÖLÇÜLMEDİ"),
        dy("noradounghian", "ibs43"), None, t="1856-04-27",
        not_="G5-G4. Bükreş 1812 md. 4: Prut, Boğdan'a girdiği yerden Tuna'ya dökülüşüne kadar sınır; Rusya nehrin yarısını aldı. Teati 1812-06-23 (IBS 43). "
             "Prut ağzından sonraki Tuna kesimi Rusya-Osmanlı'dır (D1) — bugünkü RO-UA Tuna parçası bu yüzden ALINMADI. Edirne 1829 md. 3 Prut'u değiştirmedi.")
d_kaydi("d1856-ru-bg-prut-kuzey", [RU, BG], "1856-04-27", "MDA-ROU", {"MDA": RU, "ROU": BG},
        degis(False, "IBS 43 + Paris md. 20", "kuzey Prut 1856'da değişmedi"), dy("hertslet2", "ibs43"), None, t="1859-01-24",
        yalniz=PRUT_KUZEY,
        not_="G4. Paris 1856 md. 20: Güney Besarabya Boğdan'a; yeni hat 'Katamori'de Prut'a' varıyor. Katamori'nin koordinatı BULUNAMADI (Cotul Morii ~46,9 K olabilir — DOĞRULANMADI) "
             "⇒ yalnız 47,1 K'nin kuzeyi çizildi. Paris'in yürürlüğü 1856-04-27 (teati, IBS 43); arazide tahdit Kişinev 1857-04-11 (Hertslet No. 280).")
d_kaydi("d1859-ru-rp-prut-kuzey", [RU, RP], "1859-01-24", "MDA-ROU", {"MDA": RU, "ROU": RP},
        degis(False, "IBS 43", "kuzey Prut"), dy("hertslet_cuza", "ibs43"), None, t="1878-08-03", yalniz=PRUT_KUZEY,
        not_="G4. Taraf Romanya (künye 1859-01-24; Hertslet Cuza'nın seçimini 17 Ocak/5 Şubat 1859, TDV 5/24 Şubat verir — ÇELİŞKİ).")
yokp("d1856-bes-guney", [BOG_W], RU, [27.5, 45.3, 29.0, 47.1], "1856-04-27", "1878-08-03", dy("hertslet2", "ibs43"),
     "G4. Paris 1856 md. 20 hattı: Burnas gölü – Akkerman yolu – Trajan duvarı – Bolgrad'ın güneyi – Yalpuğ – Saratsika – Katamori (Prut). "
     "Kişinev nihai senedi 1857-04-11: toprak konilerle işaretlendi (Hertslet No. 280). Koordinat YOK ⇒ çizilmedi; güney Prut bu dönemde iki ülke arası değildi.",
     tahdit={"t": "1857-04-11", "not": "Kişinev nihai senedi"})
# ---------- Avusturya ↔ Bavyera/Almanya (AUT-DEU)
SPIEL = [10.18, 47.26, 10.45, 47.44]     # Spielmannsau ve çevresi (1844 md. 13)
PFRON = [10.38, 47.52, 10.66, 47.66]     # Pfronten talebi, Jungholz (1844 md. 13-16)
_ADDEG = degis(False, "Avusturya Devlet Antl. 1955 md. 5 + Avusturya Parlamentosu", "1938 hattı; 🟡 1972 antlaşması (içeriği OKUNMADI) ve 2001 antlaşması (Innwinkel'de 2.031 m² takas) küçük düzeltmeler")
dyok("d1606-alm-ah-bavyera", [A, HA], G7, [9.75, 47.2, 13.9, 48.8],
     degis(True, None, "1779, 1805, 1809-10, 1814, 1816 değişiklikleri"), dy("eb_teschen", "eb_napoleon", "stauber"), None,
     "G7-G5. Avusturya–Bavyera/Salzburg kesimi: Teschen (Mayıs 1779) Innviertel'i Avusturya'ya verdi; Salzburg 1803'e kadar ayrı başpiskoposluk; "
     "Pressburg (1805-12-26) Tirol ve Vorarlberg'i Bavyera'ya, Schönbrunn (1809-10-14) Salzburg ve Innviertel'i Bavyera'ya verdi; "
     "Paris (1814-06-03) Tirol'ü geri verdi; Münih (1816) bugünkü hattı kurdu. Ara hatların koordinatı YOK.", t="1816-05-01")
d_kaydi("d1816-alm-ah", [A, HA], "1816-05-01", "AUT-DEU", {"AUT": HA, "DEU": A}, _ADDEG, dy("hertslet1", "stauber", "parl_at"),
        {"t": "1818-09-30", "not": "Salzburg sınır sözleşmesi (Hertslet No. 81)"}, disari=[SPIEL, PFRON], t="1844-01-30",
        not_="G4. Münih 1816-04-14; karşılıklı teslim 1816-05-01 (md. XVI). Bavyera 1806-1871 egemen krallık — künyesi yok, `almanya` ile yazıldı. "
             "Spielmannsau ve Pfronten/Jungholz çevresi 1844'e kadar çekişmeli (kutu dışı).")
dyok("d1816-alm-ah-cekisme", [A, HA], "1816-05-01", SPIEL, degis(True, "Hertslet No. 197", "1844'te çözüldü"), dy("hertslet2"), None,
     "G4. Spielmannsau: 1844 md. 13 ile Avusturya vazgeçti.", kategori_1923="C", t="1844-01-30")
dyok("d1816-alm-ah-pfronten", [A, HA], "1816-05-01", PFRON, degis(True, "Hertslet No. 197/228", "1844/1850"), dy("hertslet2"), None,
     "G4. Pfronten talebi ve Jungholz: 1844 md. 13-16; 1850 ek antlaşması Jungholz takasını iptal etti.", kategori_1923="C", t="1844-01-30")
d_kaydi("d1844-alm-ah", [A, HA], "1844-01-30", "AUT-DEU", {"AUT": HA, "DEU": A}, _ADDEG, dy("hertslet2", "parl_at"), None, t="1878-07-13",
        not_="G4. Münih Tirol-Vorarlberg antlaşması (1844-01-30, imza günü; yürürlük BULUNAMADI) ve 1850-12-16 ek antlaşması. "
             "1866 Prag barışı bu hattı değiştirmedi (Hertslet No. 388). 2001 antlaşması 1844 ve 1850 antlaşmalarını kaldırdı.")
# ---------- Almanya/Prusya ↔ Bohemya, Silezya
for i, kutu in enumerate([[12.0, 49.3, 13.9, 50.4], [12.0, 50.2, 15.1, 51.1], [12.8, 48.78, 13.83, 49.3]], 1):
    dyok(f"d1606-alm-ah-bohemya-{i}", [A, HA], G7, kutu, degis(None, None, "1923 kaydıyla aynı gerekçe"), dy("hertslet2", "hertslet3"), None,
         "G7-G4. Bohemya-Saksonya/Bavyera eski hattı. " + ("Dresden 1848-03-05: Avusturya Rumburg'un dört bölgesini ve Schirgiswalde'yi Saksonya'ya bıraktı (Hertslet No. 209). "
                                                          "1635 Lusatya değişimi ARAŞTIRILMADI." if i == 2 else ""), t=G3)
yokp("d1742-alm-ah-silezya", [GER_W], HA, [14.8, 49.9, 19.4, 51.1], "1742-07-28", G3, dy("eb_silesia", "ddb_1742", "ieg_1763"),
     "G6-G4. Berlin 1742-07-28: Silezya ve Glatz Prusya'ya; Troppau, Teschen, Jägerndorf'un güneyi Avusturya'da (Britannica; Glatz ve Opava hattı ◐). "
     "Dresden 1745-12-25 ve Hubertusburg 1763-02-15 teyit etti. 1742 öncesi Silezya Habsburg içiydi.")
# ---------- Polonya paylaşmaları (G5)
yokp("d1773-lh-alm", [GER_W], LH, [14.5, 51.5, 22.9, 55.0], "1773-09-30", "1795-10-24", dy("eb_partitions", "dz_1793"),
     "G5. Birinci paylaşma: Kraliyet Prusyası (Danzig ve Thorn hariç) ve kuzey Büyük Polonya Prusya'ya. İkinci paylaşma (Prusya-Polonya onayı 1793-09-23 ◐) hattı yeniden çizdi — dilimlenmedi.")
dyok("d1773-lh-ru", [LH, RU], "1773-09-30", [23.0, 49.0, 32.5, 57.0], degis(True, None, "paylaşmalar"), dy("eb_partitions", "dz_1793"), None,
     "G5. Birinci paylaşma: Dvina-Dinyeper hattının doğusu Rusya'ya. İkinci paylaşma (onay 1793-08-17 ◐) Belarus, batı Ukrayna, Podolya, Volhinya'nın bir kısmı.", t="1795-10-24")
dyok("d1773-lh-ah", [LH, HA], "1773-09-30", [18.9, 49.4, 26.5, 51.2], degis(True, None, "1795"), dy("eb_partitions"), None,
     "G5. Galiçya: doğuda Zbruç (IEU), Vistül'ün güneyi; San-Vistül arası. 1774-1776 sınır sözleşmeleri (Zbruç/Podgórze) BULUNAMADI.", t="1795-10-24")
dyok("d1795-pr-ru", [PR, RU], "1795-10-24", [21.5, 52.5, 24.5, 56.0], degis(True, None, "1807 Tilsit"), dy("eb_partitions"), None,
     "G5. Üçüncü paylaşma: Neman hattı (Prusya batısını, Rusya doğusunu aldı). Kesinleşme 1797-01-26.", t="1807-07-09")
dyok("d1795-ah-ru", [HA, RU], "1795-10-24", [22.5, 50.3, 24.5, 52.5], degis(True, None, "1809 Schönbrunn"), dy("eb_partitions"), None,
     "G5. Üçüncü paylaşma: Kraków'dan kuzeydoğuya Bug kavsine — Avusturya-Rusya hattı Bug.", t="1809-10-14")
dyok("d1795-pr-ah", [PR, HA], "1795-10-24", [19.5, 50.0, 23.5, 52.5], degis(True, None, "1807 Tilsit"), dy("eb_partitions"), None,
     "G5. Üçüncü paylaşma: Batı Galiçya-Yeni Doğu Prusya hattı (Pilica adı kaynakta BULUNAMADI).", t="1807-07-09")
# ---------- Varşova Büyük Dukalığı (1807-1815)
dyok("d1807-pr-vr", [PR, VR], "1807-07-22", [15.5, 51.0, 22.0, 54.5], degis(True, None, "1815"), dy("eb_napoleon"), None,
     "G5. Tilsit: Dukalık Prusya'nın 1793/1795 kazançlarından kuruldu; Danzig serbest şehir (künye YOK).", t=G4)
dyok("d1807-ru-vr", [RU, VR], "1807-07-22", [21.5, 51.5, 24.5, 55.0], degis(True, None, "1815"), dy("eb_napoleon"), None,
     "G5. Tilsit: Białystok bölgesi Rusya'ya.", t=G4)
dyok("d1807-ah-vr", [HA, VR], "1807-07-22", [19.5, 49.8, 24.5, 51.5], degis(True, None, "1809"), dy("eb_napoleon"), None,
     "G5. Dukalık-Batı Galiçya hattı.", t="1809-10-14")
dyok("d1809-ah-vr", [HA, VR], "1809-10-14", [19.0, 49.3, 24.5, 51.3], degis(True, None, "1815"), dy("eb_napoleon", "hertslet1"), None,
     "G5. Schönbrunn: Kraków ve Lublin dahil Batı Galiçya Dukalığa; Viyana 1815 md. IV Galiçya-Rus Polonyası hattında 1809 hattını esas aldı (Zawichost-Bug).", t=G4)
dyok("d1809-ah-ru-tarnopol", [HA, RU], "1809-10-14", [25.0, 49.0, 26.5, 50.2], degis(True, None, "1815'te geri döndü"), dy("eb_napoleon", "hertslet1"), None,
     "G5. Schönbrunn: Tarnopol bölgesi Rusya'ya; Viyana 1815 md. V ile Avusturya'ya döndü.", t=G4)
# ---------- G4: Viyana düzeni (1815-1878)
for i, kutu in enumerate([[20.9, 54.3, 22.95, 55.9]], 1):
    yokp("d1815-alm-ru", [GER_W], RU, kutu, G4, G3, dy("hertslet1", "melno"),
         "G4. Doğu Prusya-Litvanya (Melno hattı, VLE). 1871'e kadar Prusya, sonra Almanya.")
yokp("d1815-alm-kp", [GER_W], KP, [16.5, 50.1, 22.95, 54.35], G4, G3, dy("hertslet1", "hertslet2"),
     "G4. Poznan Büyük Dukalığı ve Silezya – Kongre Polonyası (Viyana md. I-II). Prusya-Rusya sınır antlaşması 1817-11-11 (Hertslet No. 77; Jemelin, Kirchdorf maddeleri), "
     "kesin antlaşma 1835-03-04 ve Tarnowitz tahdit senedi 1836-12 (215 taş). 🟡 1878 sonrası G3 kayıtları taraf olarak `rusya` kullanıyor — Kongre Polonyası künyesi 1917'ye kadar sürüyor (D-KUNYE'ye soru).",
     tahdit={"t": "1836-12-13", "not": "Tarnowitz tahdit senedi (Hertslet dizininde 13 Aralık)"})
dyok("d1815-ah-kp", [HA, KP], G4, [18.9, 49.95, 24.2, 51.05], degis(True, None, "1918"), dy("hertslet1", "hertslet2"), None,
     "G4. Galiçya-Kongre Polonyası (Viyana md. IV: Zawichost-Bug 1809 hattı). Kraków Serbest Şehri (1815-1846) bu kutuda — künyesi YOK; "
     "Avusturya-Prusya-Rusya sözleşmesi 1846-11-06, Avusturya ilhak beyannamesi 1846-11-11 (Hertslet No. 201-202). Radziwiłłów sınır antlaşması (Hertslet No. 143, tarih okunamadı).",
     t=G3)
dyok("d1815-ah-ru", [HA, RU], G4, [23.9, 48.55, 26.45, 51.05], degis(True, None, "1918"), dy("hertslet1", "hertslet2"), None,
     "G4. Galiçya-Volhinya/Podolya (Bug-Zbruç-Dinyester); Tarnopol 1815'te Avusturya'ya döndü (md. V).", t=G3)
dyok("d1812-ah-ru-bukovina", [HA, RU], "1812-06-23", [25.9, 48.15, 26.4, 48.5], degis(True, None, "1918"), dy("noradounghian", "hertslet2"), None,
     "G5-G4. Besarabya 1812'de Rusya'ya geçince Bukovina-Besarabya hattı doğdu (Dinyester-Prut arası; Radziwiłłów antlaşması, Hertslet No. 143).", t=G3)
yokp("d1830-hm-sr-tuna", [SRB_W], HM, [19.1, 44.4, 22.7, 45.2], "1830-10-17", G3, dy("tdv_sirbistan", "hertslet2"),
     "G4. Sırbistan'ın özerkliği (TDV: ferman 1830-10-17; atlas maddesi 1830-11-08 — ÇELİŞKİ). Öncesi Avusturya-Osmanlı (D1). "
     "1815-1878 arasında Avusturya-Sırbistan hattının değiştiğine dair belge bulunamadı (Hertslet dizininde yok — kanıt yokluğu).")
dyok("d1820-ah-mn-dalmacya", [HA, MN], "1820-11-23", [18.4, 42.0, 19.15, 42.55], degis(True, "CANU", "1878 Spiça; 1945 Boka Karadağ'a"), dy("canu_mn_at"),
     {"t": "1841-07-18", "not": "Krivošije, Boka, Paštrovići kesimleri"},
     "G4. Avusturya-Karadağ sınır antlaşması 1820-11-23; Maine (1837) ve Stanjevići (1839) manastırları Avusturya'ya satıldı; sınır belirleme antlaşması 1841-07-18 (CANU). "
     "1815-1820 arası hattın durumu BULUNAMADI. Hersek-Karadağ kesimi 1878'e kadar Osmanlı-Karadağ (D1).", t=G3)


# Finlandiya fiilî hattı G2'ye uzar: Sovyet tanıması 1918-01-04 (◐; belgede sınır tarifi YOK)
for k in KAYIT:
    if k["id"].startswith("d1918-fi-su-fiili"):
        k["f"] = "1918-01-04"
        k["dayanak"] += dy("fi_tanima")
        k["not_"] = (k["not_"].replace("f = G1 alt sınırı; gerçek başlangıç daha eski (G2'de geriye uzatılacak).", "")
                     + "G2: f = Sovyet tanıması (VTsİK 1918-01-04 ◐). 1917-12-06 → 1918-01-04 arası kayıt YOK. "
                       "İç savaş (1918 Ocak-Mayıs) ve Viena seferi (1918 Mart'tan, ◐) sırasında hat çekişmeliydi; "
                       "Repola 1918-10 ortasında Fin işgaline girdi (kutu dışı).")
# Besarabya: Rumen ordusu Prut'u 1918-01-21/23 geçti, Dinyester'e Şubat sonu ulaştı (◐) — fiilî hat koordinatla yazılamaz (kuzeyde Hotin A-M işgalinde)
for k in KAYIT:
    if k["id"] == "d1923-ro-su":
        k["dayanak"] += dy("dobrincu")
        k["not_"] += (" G2: Rumen ordusu Prut'u 1918-01-21/23 geçti, Dinyester sağ kıyısını (Soroca kuzeyinden ağza) Şubat 1918 sonunda tuttu (◐); "
                      "kuzey (Hotin) A-M işgalindeydi ⇒ 1918-04-08 öncesi fiilî Dinyester hattı YAZILMADI.")

# ---------------------------------------------------------------- ADIM 1: sinif (GORUNUM-ABCD-0916 en üst bölüm)
# D→E (F kanıtı TANINMA-1923 tablosu gelene kadar yok) · fiili→D (koordinat kesin) · C→C · D-YOK→YOK
TANINMA_YOK = "F kanıtı bekliyor: denetim/TANINMA-1923-0916.json (D-KUNYE) gelene kadar E"
for k in KAYIT:
    kat = k["kategori"]
    if kat == "D":
        k["sinif"], k["sinif_not"] = "E", TANINMA_YOK
    elif kat == "fiili":
        k["sinif"] = "D"
        k["sinif_not"] = ("fiilî hat — hukuken geçersiz; koordinat: "
                          + ("nehir orta çizgisi (Dinyester)" if k["id"] == "d1923-ro-su"
                             else "sonraki hukukî hatla çakıştığı aralık (bugünkü çizgi, kaynak 'değişmedi' diyor)"))
    elif kat == "C":
        k["sinif"] = "C"
    elif kat == "D-YOK":
        k["sinif"] = "YOK"
        k["sinif_not"] = "1923 koordinatı yok; hukukî sınıfı notta (29 Ekim 1923 hukukî sınıfı: …)"
    else:
        raise SystemExit(f"🔴 bilinmeyen kategori {kat} ({k['id']})")

idler = [k["id"] for k in KAYIT]
assert len(idler) == len(set(idler)), "🔴 mükerrer id"
for k in KAYIT:
    assert k["dayanak"], k["id"]
    if k["kategori"] in ("D", "C", "fiili"):
        assert k["hat"] and len(k["hat"]) >= 2, k["id"]
    else:
        assert k["kutu"], k["id"]
    if (k.get("geometri_kaynagi") or "").startswith("Natural Earth 10m admin"):
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
// 🔴 BAĞLAYICI ALAN `sinif` (GORUNUM-ABCD-0916 en üst: D fiilî · E hukukî · F E+tanınma · C kaba · YOK).
// `kategori` eski adlandırmadır (D=hukukî) — geçiş dönemi için duruyor, OKUMA.
// Bugünkü geometri YALNIZ degisti.deger===false kayıtlarda kullanıldı (D-1923-0916 md.3).
// 🔴 devletler.js'te OLMAYAN taraf kimlikleri: {', '.join(eksik) or 'yok'} (D-KUNYE taslağında)
"""
with open(CIKTI, "w", encoding="utf-8", newline="\n") as f:
    f.write(bas + "\nwindow.D_SINIRLAR_AVRUPA_ORTA = [\n")
    for k in KAYIT:
        f.write(json.dumps(k, ensure_ascii=False, separators=(",", ":")) + ",\n")
    f.write("];\n")

# ================================================================ ADIM 3: KRONOLOJİ
# Her E/F/D değişikliği için madde → data/kronoloji_sinir_avrupa_orta.js (window.KRONOLOJI_SINIR_AVRUPA_ORTA)
# Şema: oturumlar/KRONOLOJI-SARTNAME.md §3 + `taraflar` (ilgili iki/üç devlet) + `sinif` + `sinir_id` (kayıt öneki).
KRON_CIKTI = KOK + "data/kronoloji_sinir_avrupa_orta.js"


def kaynak_metni(*anahtar):
    return " · ".join(f"{K[a]['ad']} — {K[a]['madde']}" for a in anahtar)


def m(t, devlet, taraflar, b, tur, onem, dunya, yer, d, kaynaklar, sinif, sinir_id):
    out = dict(t=t, devlet=devlet, taraflar=taraflar, b=b, tur=tur, onem=onem, dunya=dunya, kapsam="dis",
               etiket=["sinir", "1918-1923", f"sinif-{sinif.lower()}", "konu-siyasi"] + taraflar)
    if isinstance(yer, str):
        out["yer_id"] = yer
    else:
        out["yer_id"], out["yer_kon"] = "", yer
    out.update(d=d, kaynak=kaynak_metni(*kaynaklar), sinif=sinif, sinir_id=sinir_id)
    return out


KRON = [
    m("1919-01-01", CS, [CS, AT], "Çekoslovakya Alman Bohemyası ve Güney Moravya'yı denetime aldı", "toprak-kazanc", 4, 2,
      [48.855, 16.049],
      "Aralık 1918 – Ocak 1919 arasında Çekoslovak birlikleri Liberec, Opava ve Znojmo başta olmak üzere Almanca konuşulan bölgeleri aldı; uç cepler Ocak 1919'da düştü. "
      "Avusturya ile fiilî hat böylece eski Bohemya-Moravya idarî sınırına oturdu; yalnız Valtice ve Gmünd istasyon bölgesi 1920 yazına kadar Avusturya'da kaldı. "
      "Gün kesin değildir (Ocak 1919; Znojmo için 18 ve 27 Aralık tarihleri çelişiyor).",
      ["cs_isgal", "sg50"], "D", "d1919-at-cs-fiili"),
    m("1919-07-25", CS, [CS, HU], "Çekoslovak ordusu Slovakya'da Paris hattına ulaştı", "toprak-kazanc", 4, 2, "Bratislava",
      "Paris Barış Konferansı'nın 13 Haziran 1919 notasıyla bildirdiği Çekoslovak-Macar hattı, Macar Kızıl Ordusu'nun Slovakya'dan çekilmesi ve "
      "1 Temmuz Pozsony mütarekesiyle kurulan tarafsız bölgenin 25 Temmuz'da Çekoslovak ordusunca alınmasıyla fiilî sınır oldu. Bu hat Trianon Antlaşması'na esasen aynen girdi.",
      ["fedinec", "ibs76"], "D", "d1919-hu-cs-fiili"),
    m("1919-08-27", RO, [RO, PL], "Romanya Pokutya'yı boşalttı: Polonya ile temas eski Galiçya–Bukovina hattında", "toprak-kayip", 3, 1, [48.531, 25.037],
      "Mayıs 1919'da Pokutya'ya giren Rumen birlikleri 17-27 Ağustos 1919'da bölgeyi boşalttı; böylece Polonya ve Romanya denetimi eski Avusturya kadastro hattında buluştu. "
      "Polonya'nın bölgeyi devraldığı gün kaynakta bulunamadı; tarih ikincil kaynağa dayanır.",
      ["pokutya", "ibs43"], "D", "d1919-pl-ro-fiili"),
    m("1920-01-10", PL, [PL, A], "Versay Antlaşması yürürlüğe girdi: Almanya–Polonya sınırı", "antlasma", 5, 5, [52.408, 16.934],
      "Versay Antlaşması'nın yürürlüğe girmesiyle 27. ve 87. maddelerde tarif edilen Almanya-Polonya sınırı (Pomeranya, Poznan, Aşağı Silezya kesimi) hukuken geçerli oldu. "
      "Doğu Prusya ve Yukarı Silezya kesimleri plebisitlere bırakıldı; sınır tahdit komisyonu işini 18 Ekim 1924'te bitirdi.",
      ["versay27", "versay87"], "E", "d1923-de-pl-1"),
    m("1920-01-10", CS, [CS, A], "Versay Antlaşması: Almanya–Çekoslovakya sınırı ve Hlučín", "antlasma", 4, 5, [49.897, 18.190],
      "Versay md. 27(6) Almanya ile Çekoslovakya arasında 3 Ağustos 1914'teki Almanya-Avusturya sınırını esas aldı; md. 83 ile Prusya Silezyası'ndaki Hlučín bölgesi Çekoslovakya'ya bırakıldı. "
      "Hlučín hattının son pürüzleri Ocak 1923'te giderildi.",
      ["versay83"], "E", "d1923-de-cs"),
    m("1920-03-31", RO, [RO, HU], "Rumen ordusu Tisza ötesini boşalttı; fiilî hat Paris hattına çekildi", "toprak-kayip", 4, 2, "Debrecen",
      "1919 baharında Macaristan içlerine ilerleyen ve Ağustos'ta Budapeşte'ye giren Rumen ordusu, Kasım 1919'da Tisza gerisine, 24 Şubat – 30 Mart 1920 arasında da "
      "Paris Konferansı'nın çizdiği hattın gerisine çekildi. Böylece fiilî Macar-Rumen sınırı sonradan Trianon'a giren hatla çakıştı; Gyula ve Békéscsaba'nın 31 Mart'ta boşaltıldığı ikincil kaynakta geçer.",
      ["fedinec", "perczel", "ibs47"], "D", "d1920-hu-ro-fiili"),
    m("1920-07-16", AT, [AT, CS], "Saint-Germain Antlaşması yürürlüğe girdi: Avusturya–Çekoslovakya sınırı", "antlasma", 5, 4, [48.770, 14.980],
      "Saint-Germain md. 27(6) Avusturya ile Çekoslovakya arasına eski idarî sınırı koydu; Feldsberg (Valtice) demiryolu bölgesi ile Gmünd istasyonu Çekoslovakya'ya bırakıldı. "
      "Bu iki yer 31 Temmuz 1920'de fiilen devredildi (ikincil kaynak).",
      ["saint_germain", "sg50", "cs_isgal"], "E", "d1923-at-cs"),
    m("1920-07-16", AT, [AT, YU], "Saint-Germain: Avusturya–SHS sınırı (Steiermark kesimi)", "antlasma", 4, 4, [46.688, 15.988],
      "Saint-Germain Antlaşması'nın yürürlüğe girmesiyle Avusturya ile Sırp-Hırvat-Sloven Krallığı arasındaki Steiermark sınırı hukuken kesinleşti. "
      "1 Aralık 1918'den beri SHS birliklerinin elindeki Radkersburg, müttefik tahliye komisyonunca 26 Temmuz 1920'de Avusturya'ya verildi.",
      ["saint_germain", "suppan"], "E", "d1923-at-yu-stiriya"),
    m("1920-07-28", CS, [CS, PL], "Büyükelçiler Konferansı Cieszyn, Spiş ve Orava'yı paylaştırdı", "diplomasi", 4, 3, [49.750, 18.632],
      "Müttefik Büyükelçiler Konferansı'nın 28 Temmuz 1920 kararıyla Cieszyn Silezyası, Spiş ve Orava Çekoslovakya ile Polonya arasında bölündü ve iki devlet kararı kabul etti. "
      "Javorina kesimindeki anlaşmazlık 1923 sonunda Uluslararası Daimî Adalet Divanı'na taşındı; bu yüzden o kesim 29 Ekim 1923'te hâlâ açıktı.",
      ["pcij8"], "E", "d1923-cs-pl"),
    m("1920-08-30", CS, [CS, HU], "Rumen ordusu Karpat Ötesi Rutenya'yı tamamen boşalttı", "toprak-kazanc", 3, 1, "Ungvár (Uzhhorod)",
      "Nisan 1919'dan beri Rutenya'nın büyük bölümünü tutan Rumen ordusu, Şubat 1920'den itibaren kademeli çekildi ve 30 Ağustos 1920'de Yasinya'yı da boşalttı. "
      "Böylece Macaristan ile Rutenya arasındaki bütün kesimde Çekoslovak denetimi Paris hattına dayandı.",
      ["fedinec"], "D", "d1920-hu-cs-rutenya-fiili"),
    m("1920-08-31", PL, [PL, A], "Doğu Prusya plebisitleri sonrası sınır: köyler Polonya'ya", "toprak-kazanc", 3, 2, [53.778, 20.480],
      "11 Temmuz 1920'de Allenstein ve Marienwerder bölgelerinde yapılan plebisitlerde büyük çoğunluk Doğu Prusya'da kalmayı seçti. "
      "Büyükelçiler Konferansı yine de Allenstein'dan üç, Marienwerder'den beş köyü Polonya'ya bıraktı; Allenstein köyleri 31 Ağustos 1920'de devredildi.",
      ["versay28", "versay87"], "E", "d1923-de-pl-3"),
    m("1920-10-10", AT, [AT, YU], "Karintiya plebisiti: 1. bölge Avusturya'da kaldı", "toprak-kazanc", 4, 3, [46.624, 14.308],
      "Saint-Germain md. 49-50 uyarınca yapılan oylamada Klagenfurt havzasının güneyindeki 1. bölgede oyların %59,04'ü Avusturya'dan yana çıktı ve Karintiya sınırı Karavankeler üzerinde kesinleşti. "
      "Bölge 18 Kasım 1920'de plebisit komisyonunca Avusturya'ya devredildi; sonucun resmî ilan günü bulunamadı.",
      ["sg50", "suppan"], "E", "d1923-at-yu-karintiya"),
    m("1920-10-19", EE, [EE, LV], "Estonya–Letonya sınır sözleşmesi: Valga ikiye bölündü", "antlasma", 4, 1, [57.777, 26.047],
      "İngiliz hakem Tallents'in 3 Temmuz 1920 kararına dayanan sözleşmeyle Estonya-Letonya sınırı belirlendi ve Valga/Valka şehri iki devlet arasında bölündü. "
      "Nihai sınır anlaşması Kasım 1923'te Tallinn'de imzalandı (gün bulunamadı).",
      ["ee_mfa", "lv_ee_1992"], "E", "d1923-ee-lv"),
    m("1920-03-30", EE, [EE, SU], "Tartu Barışı yürürlüğe girdi: Estonya–Sovyet Rusya sınırı", "antlasma", 5, 3, "Tartu (Dorpat)",
      "2 Şubat 1920'de imzalanan Tartu Barışı'nın 3. maddesi Estonya ile Sovyet Rusya arasındaki sınırı çizdi; Narva'nın doğusu ve Petseri bölgesi Estonya'da kaldı. "
      "Onay belgelerinin 30 Mart 1920'de değişildiği bilgisi ikincil kaynağa dayanır.",
      ["tartu_ee"], "E", "d1923-ee-su"),
    m("1920-08-11", LV, [LV, SU], "Riga Barışı: Letonya–Sovyet Rusya sınırı", "antlasma", 5, 3, "Riga",
      "Letonya ile Sovyet Rusya arasında Riga'da imzalanan barış antlaşması iki devlet arasındaki sınırı belirledi ve Abrene (Pıtalovo) bölgesini Letonya'ya bıraktı. "
      "Antlaşmanın sınır maddesinin numarası ve yürürlük günü bu çalışmada bulunamadı; tarih imza günüdür.",
      ["riga1920"], "E", "d1923-lv-su"),
    m("1920-11-15", DZ, [DZ, A, PL], "Danzig Serbest Şehri kuruldu", "kurulus", 5, 3, "Gdansk",
      "Versay md. 100-102 uyarınca Almanya'dan ayrılan Danzig, Büyükelçiler Konferansı kararının yürürlüğe girmesiyle Milletler Cemiyeti korumasında serbest şehir oldu. "
      "Şehrin Doğu Prusya ve Polonya ile sınırları antlaşmada tarif edilmişti; tahdit komisyonunun bitiş günü bulunamadı.",
      ["versay100"], "E", "d1923-dz"),
    m("1920-12-17", SAAR, [SAAR, A], "Saar Havzası'nın Almanya ile sınırı notalarla tespit edildi", "diplomasi", 2, 1, [49.234, 6.997],
      "Versay md. 48'e göre Milletler Cemiyeti idaresine bırakılan Saar Havzası'nın sınırları, Büyükelçiler Konferansı ile Almanya arasında 16-17 Aralık 1920'de değişilen notalarla kesinleşti.",
      ["saar"], "E", "d1923-saar"),
    m("1920-12-31", FI, [FI, SU], "Tartu Barışı (Finlandiya) yürürlüğe girdi: Petsamo Finlandiya'ya", "antlasma", 5, 3, "Petsamo (Peçenga)",
      "14 Ekim 1920'de imzalanan Tartu Barışı, onay belgelerinin 31 Aralık 1920'de Moskova'da değişilmesiyle yürürlüğe girdi. "
      "Antlaşma eski Büyük Dükalık sınırını teyit etti, Petsamo'yu Finlandiya'ya verdi, Repola ve Porajärvi'yi Rusya'ya bıraktı; tahliye için 45 gün tanındı.",
      ["tartu_fi", "ibs74"], "E", "d1923-fi-su"),
    m("1921-04-30", PL, [PL, SU], "Riga Antlaşması yürürlüğe girdi: Polonya–Sovyet sınırı", "antlasma", 5, 4, "Minsk",
      "18 Mart 1921'de imzalanan Riga Antlaşması'nın onay belgeleri 30 Nisan 1921'de Minsk'te değişildi. "
      "2. madde Polonya'nın doğu sınırını Dvina'dan Zbruç'un Dinyester'e karıştığı yere kadar çizdi; hat Kasım 1922'de arazide işaretlendi.",
      ["riga1921"], "E", "d1923-pl-su"),
    m("1921-05-14", LV, [LV, LT], "Letonya–Litvanya sınır sözleşmesi: Palanga Litvanya'ya", "antlasma", 4, 1, [55.918, 21.068],
      "İngiliz hakem Simpson'ın Mart 1921 kararıyla Palanga Litvanya'ya, İlukste bölgesi Letonya'ya bırakıldı; Riga'da imzalanan 14 Mayıs 1921 sözleşmesi hattın arazide kurulmasını düzenledi. "
      "Hakem kararının günü kaynaklarda 20 ve 21 Mart olarak farklı geçer.",
      ["nekrasas", "lv_lt_1993"], "E", "d1923-lt-lv"),
    m("1921-07-26", HU, [HU, CS], "Trianon Antlaşması yürürlüğe girdi: Macaristan–Çekoslovakya sınırı", "antlasma", 5, 4, "Bratislava",
      "Trianon md. 27(4) ile çizilen Macar-Çekoslovak sınırı hukuken geçerli oldu; hat 1919'dan beri fiilî sınırdı. Karma komisyon sınırı 1921-1925 arasında işaretledi.",
      ["trianon", "ibs66"], "E", "d1923-hu-cs"),
    m("1921-07-26", HU, [HU, RO], "Trianon Antlaşması: Macaristan–Romanya sınırı", "antlasma", 5, 4, "Varad (Oradea)",
      "Trianon md. 27(3) Macaristan ile Romanya arasındaki sınırı çizdi; hat, Rumen ordusunun Mart 1920'de çekildiği Paris hattıyla esasen aynıdır. "
      "Sınır komisyonu 1 Ağustos 1921'de işe başladı ve 11 kesimin beşinde küçük düzeltme yaptı.",
      ["trianon", "ibs47"], "E", "d1923-hu-ro"),
    m("1921-07-26", HU, [HU, YU], "Trianon Antlaşması: Macaristan–SHS sınırı", "antlasma", 5, 4, "Segedin (Szeged)",
      "Trianon md. 27(2) Macaristan ile Sırp-Hırvat-Sloven Krallığı arasındaki sınırı çizdi. "
      "Ancak SHS birlikleri Belgrad mütarekesi hattının gerisindeki Pécs ve Baranya'yı Ağustos 1921'e kadar tuttu; Macar ordusu Pécs'e 22 Ağustos 1921'de girdi.",
      ["trianon", "gyanti", "suppan"], "E", "d1923-hu-yu"),
    m("1921-07-26", AT, [AT, HU], "Trianon Antlaşması: Burgenland Avusturya'ya", "antlasma", 5, 4, [47.846, 16.527],
      "Trianon ve Saint-Germain antlaşmalarıyla Batı Macaristan (Burgenland) Avusturya'ya bırakıldı. "
      "Macar düzensiz birlikleri Ağustos 1921'de Avusturya jandarmasını geri püskürttü; Venedik Protokolü'nün (13 Ekim 1921) ardından Avusturya ordusu Kasım 1921'de bölgeye girdi ve devir 3 Aralık'ta tamamlandı.",
      ["trianon", "jedlicka", "grandits"], "E", "d1923-at-hu"),
    m("1921-11-09", AL, [AL, YU], "Büyükelçiler Konferansı Arnavutluk sınırlarını onayladı", "diplomasi", 5, 3, "Debre (Dibra)",
      "Büyükelçiler Konferansı 1913 Londra Konferansı'nın çizdiği Arnavutluk-Sırbistan hattını bazı değişikliklerle onayladı; o sırada SHS birlikleri Lura, Oroshi ve Shëngjin çevresinde bulunuyordu. "
      "Sınır 1922-1925 arasında işaretlendi, Sveti Naum ve Vermoş anlaşmazlıkları 1925'te çözüldü, nihai akit 30 Temmuz 1926'da imzalandı.",
      ["ibs116", "kadria"], "E", "d1923-al-yu"),
    m("1922-01-01", HU, [HU, AT], "Sopron plebisit bölgesi Macaristan'a devredildi", "toprak-kazanc", 4, 2, "Sopron",
      "Venedik Protokolü uyarınca 14-16 Aralık 1921'de Sopron ve çevresindeki sekiz köyde yapılan plebisit Macaristan lehine sonuçlandı. "
      "Bölge 1 Ocak 1922'de düzenlenen devir tutanağıyla Macaristan'a geçti ve sınır bu kesimde Trianon hattından ayrıldı.",
      ["mnl_sopron", "jedlicka"], "E", "d1922-at-hu-sopron"),
    m("1922-06-03", PL, [PL, A], "Yukarı Silezya Sözleşmesi yürürlüğe girdi: bölge paylaşıldı", "antlasma", 5, 3, [50.259, 19.022],
      "20 Mart 1921 plebisitinin ardından Milletler Cemiyeti Konseyi'nin önerisini Büyükelçiler Konferansı Ekim 1921'de kabul etti (19 ve 20 Ekim günleri kaynaklarda çelişir). "
      "15 Mayıs 1922'de imzalanan Cenevre Sözleşmesi 3 Haziran 1922'de yürürlüğe girdi ve Yukarı Silezya Almanya ile Polonya arasında bölündü.",
      ["versay87"], "E", "d1923-de-pl-2"),
    m("1923-01-24", CS, [CS, A], "Hlučín kesiminde son karar: Haatsch Çekoslovakya'ya", "diplomasi", 2, 1, [49.945, 18.241],
      "Büyükelçiler Konferansı 13 Ocak 1923'te Ratibor ve Leobschütz sınırını belirledi, 24 Ocak'ta Haatsch köyünü Çekoslovakya'ya verdi. "
      "Çek-Alman sınır komisyonu işini 15 Nisan 1924'te bitirdi.",
      ["versay83"], "E", "d1923-de-cs-4"),
    m("1923-02-07", RO, [RO, CS], "Büyükelçiler Konferansı Çekoslovakya–Romanya sınırını karara bağladı", "diplomasi", 3, 1, [47.928, 23.886],
      "Büyükelçiler Konferansı'nın 7 Şubat 1923 tarihli 204-XVIII sayılı kararı, Karpat Ötesi Rutenya ile Romanya arasındaki sınırı belirledi. "
      "Sınır komisyonu işaretlemeyi 1926'da bitirdi; bu hattın büyük bölümü bugün Romanya-Ukrayna sınırıdır.",
      ["ibs43"], "E", "d1923-cs-ro"),
    m("1923-02-16", LT, [LT, A], "Büyükelçiler Konferansı Memel bölgesini Litvanya'ya bıraktı", "toprak-kazanc", 4, 2, "Klaipėda (Memel)",
      "Versay md. 99 ile Almanya'nın Müttefiklere bıraktığı Memel bölgesi, Büyükelçiler Konferansı'nın 16 Şubat 1923 kararıyla şartlı olarak Litvanya'ya tahsis edildi. "
      "Devir sözleşmesi 8 Mayıs 1924'te imzalandı ve 25 Ağustos 1925'te yürürlüğe girdi; Almanya ile sınır Versay md. 28 hattıdır.",
      ["memel"], "E", "d1923-de-lt-memel"),
    m("1923-03-15", PL, [PL, RO], "Büyükelçiler Konferansı Polonya'nın doğu sınırlarını tanıdı: Romanya sınırı", "diplomasi", 4, 3, [48.531, 25.037],
      "Büyükelçiler Konferansı'nın 15 Mart 1923 kararı Polonya'nın Doğu Galiçya üzerindeki egemenliğini tanıdı; böylece 1919'dan beri fiilî olan Polonya-Romanya sınırı hukuken de kesinleşti. "
      "Nihai tahdit protokolü 17 Mayıs 1935'te imzalandı.",
      ["kb1923", "ibs43"], "E", "d1923-pl-ro"),
    m("1923-03-15", PL, [PL, LT], "Büyükelçiler Konferansı Vilnius'u Polonya'ya bıraktı; Litvanya tanımadı", "diplomasi", 5, 3, "Vilnius",
      "Aynı karar, Milletler Cemiyeti Konseyi'nin 3 Şubat 1923'te tarafsız bölgeyi paylaştırmasıyla oluşan fiilî durumu esas alarak Polonya-Litvanya hattını Letonya sınırına kadar çizdi. "
      "Litvanya kararı tanımadı ve iki devlet ortak işaretleme yapmadı; hat fiilî sınır olarak kaldı.",
      ["kb1923"], "D", "d1923-pl-lt"),
]
# ---- G2 maddeleri (1914-07-28 → 1918-11-11; iki tanesi pencere sonrası biter)
KRON += [
    m("1918-01-04", FI, [FI, SU], "Sovyet Rusya Finlandiya'nın bağımsızlığını tanıdı", "diplomasi", 5, 3, "Helsinki",
      "6 Aralık 1917'de bağımsızlığını ilan eden Finlandiya'yı Halk Komiserleri Sovyeti 31 Aralık 1917'de, Merkez Yürütme Komitesi 4 Ocak 1918'de tanıdı. "
      "Tanıma belgesi sınır tarif etmiyordu; fiilî sınır eski Büyük Dükalık hattıydı ve 1918'deki iç savaş ile Doğu Karelya seferleri boyunca çekişmeli kaldı. "
      "Günler belge çevirisine dayanır.",
      ["fi_tanima", "ibs74"], "D", "d1918-fi-su-fiili"),
    m("1918-03-29", SU, [SU, A], "Brest-Litovsk Barışı yürürlüğe girdi: Rusya batı topraklarından vazgeçti", "antlasma", 5, 5, "Brest-Litovsk",
      "3 Mart 1918'de imzalanan barışın onay belgeleri 29 Mart 1918'de Berlin'de değişildi. "
      "III. madde antlaşma haritasında çizilen hattın batısındaki toprakları (Polonya, Litvanya, Kurland) Rus egemenliğinden çıkardı; böylece 1914 Almanya-Rusya sınırı hukuken ortadan kalktı. "
      "Avusturya-Macaristan'ın onay teatisi 4 Temmuz 1918'de yapıldı (ikincil kaynak).",
      ["brest"], "E", "d1918-brest"),
    m("1918-04-08", RO, [RO, SU], "Besarabya Romanya ile birleşti: fiilî sınır Dinyester'e taşındı", "toprak-kazanc", 5, 3, "Bender",
      "Ocak 1918'de Prut'u geçen Rumen ordusu Şubat sonunda Dinyester'in sağ kıyısını tuttu; Moldova Demokratik Cumhuriyeti meclisi 27 Mart (Eski Takvim) / 9 Nisan 1918'de Romanya ile birleşme kararı aldı. "
      "IBS 43 birliği 8 Nisan 1918 tarihiyle verir. Sovyet Rusya birliği tanımadı; 1878 Prut hattı hukuken çekişmeli, Dinyester fiilî sınır oldu.",
      ["ibs43_bes", "dobrincu"], "D", "d1923-ro-su"),
    m("1918-11-13", SU, [SU, A], "Sovyet Rusya Brest-Litovsk Barışı'nı iptal etti", "antlasma", 5, 4, "Moskova",
      "Almanya'nın mütareke imzalamasının ardından Sovyet Merkez Yürütme Komitesi 13 Kasım 1918'de Brest-Litovsk Barışı'nı ve ek antlaşmaları hükümsüz ilan etti; mütareke de antlaşmanın feshini şart koşuyordu. "
      "Böylece Brest hattı hukuken düştü. Gün ikincil kaynağa dayanır.",
      ["brest"], "E", "d1918-brest"),
    m("1918-11-26", MN, [MN, SR], "Karadağ Sırbistan'la birleşti: 1913 sınırı devletlerarası olmaktan çıktı", "son", 4, 2, "Podgorica",
      "Podgorica meclisinin birleşme kararıyla Karadağ Krallığı sona erdi ve Sancak'ı 1913'te bölen Sırbistan-Karadağ sınırı iç sınır oldu. "
      "Karadağ Bilimler Akademisi'nin sözlüğüne göre Sancak bugün de 1913 sınırlarına göre bölünmüş durumdadır.",
      ["sr_mn_1913", "canu"], "E", "d1913-sr-mn"),
]
# ---- G3 maddeleri (1878-07-13 → 1914-07-28)
KRON += [
    m("1878-07-13", BI, [BI, SP, MN], "Berlin Antlaşması: Bosna-Hersek A-M işgaline, Sırbistan ve Karadağ bağımsız", "antlasma", 5, 5, "Saraybosna",
      "Berlin Kongresi'nin antlaşması 25. maddeyle Bosna-Hersek'i Avusturya-Macaristan'ın işgal ve idaresine bıraktı ve Yenipazar sancağında A-M garnizonlarına izin verdi. "
      "26. ve 34. maddeler Karadağ ile Sırbistan'ın bağımsızlığını tanıdı; 29. madde Spiça'yı Dalmaçya'ya kattı. "
      "Böylece Bosna'nın Sırbistan ve Karadağ ile sınırları A-M idaresinde bir hat oldu; egemenlik Osmanlı'da kaldı.",
      ["berlin", "spahic"], "E", "d1878-bs-sr-drina"),
    m("1878-08-03", RU, [RU, RP], "Berlin Antlaşması yürürlüğe girdi: Güney Besarabya Rusya'ya döndü", "antlasma", 4, 3, "İsmail",
      "Berlin Antlaşması'nın 45. maddesi, 1856'da Rusya'dan alınan Güney Besarabya'yı Romanya'dan Rusya'ya geri verdi; yeni sınır batıda Prut'un orta kanalı, "
      "güneyde Kilya kolu ve Eski İstanbul ağzı oldu. Onay belgeleri 3 Ağustos 1878'de değişildi. Romanya karşılığında Kuzey Dobruca'yı aldı.",
      ["ber45", "ibs43"], "E", "d1878-ru-ro-prut"),
    m("1908-10-06", HA, [HA, SR, MN], "Avusturya-Macaristan Bosna-Hersek'i ilhak etti", "toprak-kazanc", 5, 4, "Saraybosna",
      "Avusturya-Macaristan, 1878'den beri işgal ve idaresinde tuttuğu Bosna-Hersek'i Ekim 1908'de ilhak etti; Bosna'nın Sırbistan ve Karadağ ile sınırları "
      "böylece doğrudan Avusturya-Macaristan'ın devletlerarası sınırı oldu. Gün atlasın künye kaydından alınmıştır (5-6 Ekim olarak da verilir); "
      "Osmanlı ile tanıma protokolü D1-TURKIYE'nin kapsamındadır.",
      ["spahic"], "E", "d1878-bs-sr-drina"),
    m("1913-05-30", AL, [AL, SR, MN], "Londra Antlaşması: Arnavutluk'un sınırları büyük devletlere bırakıldı", "antlasma", 5, 4, "İşkodra",
      "Birinci Balkan Savaşı'nı bitiren Londra Antlaşması, yeni Arnavutluk devletinin statüsünü ve sınırlarını büyük devletlerin kararına bıraktı. "
      "Londra Büyükelçiler Konferansı 1913 yazında kuzey sınırında prensipte anlaştı (gün bulunamadı); kuzey sınır komisyonu işini Haziran 1914'te bitirdi, "
      "ancak kesinleşme savaş yüzünden ertelendi.",
      ["londra1913", "ibs116"], "C", "d1913-mn-al"),
    m("1913-11-12", SR, [SR, MN], "Sırbistan–Karadağ sınır anlaşması: Yenipazar sancağı bölündü", "antlasma", 4, 2, "Yenipazar (Novi Pazar)",
      "Balkan Savaşları'nda Osmanlı'dan alınan Yenipazar sancağını Sırbistan ile Karadağ, Belgrad'da imzalanan sınır anlaşmasıyla paylaştı; "
      "hat Hersek sınırından Beyaz Drin'deki Arnavutluk üçlü noktasına uzanıyordu. Gün ikincil yayına dayanır (30 Ekim eski takvim).",
      ["sr_mn_1913", "canu"], "E", "d1913-sr-mn"),
]
# ---- G4-G7 maddeleri — YALNIZ atlasta EKSİK olanlar (denetim/ARAC-D3ORTA-KRON-VAR/YIL-0917.js ile tarandı)
# Var olduğu için YAZILMAYANLAR: Viyana 1815-06-09 (6 madde) · Paris 1856-03-30 · Bükreş 1812-05-28 · Cuza 1859-01-24 · 1871-01-18 ·
# Bukovina 1775 · 2. paylaşma 1793-01-23 · 3. paylaşma 1795-10-24 · Yaş 1792 · Tilsit 1807 · Pasarofça · Belgrad 1739 · Berlin 1742 ·
# Dresden 1745 · Hubertusburg · 1. paylaşma 1772-08-05 · Szatmár 1711 · Prusya 1701 · Deulino · Polanów 1634 · Andrusovo · Pereyaslav ·
# Wehlau · Oliwa · Nikolsburg · Sırbistan özerkliği 1830.
KRON += [
    m("1645-12-16", ER, [ER, HM], "Linz Barışı: I. Rákóczi György yedi Macar kontluğunu aldı", "antlasma", 3, 2, [48.306, 14.286],
      "Otuz Yıl Savaşları sırasında Habsburglara karşı savaşan Erdel prensi I. György Rákóczi, Linz Barışı ile Macaristan'ın kuzeydoğusundaki yedi kontluğu kendi idaresine aldı. "
      "Aynı kontluklar 1621 Nikolsburg Barışı'nda da Gábor Bethlen'e verilmişti. Kontlukların Habsburg'a geri dönüş günleri bu çalışmada bulunamadı.",
      ["eb_hungary"], "E", "d1606-hm-er"),
    m("1686-05-16", LH, [LH, RU], "Ebedî Barış: Polonya Kiev'i ve sol yaka Ukrayna'yı Rusya'ya bıraktı", "antlasma", 5, 4, "Moskova",
      "Moskova'da imzalanan Ebedî Barış (Grzymułtowski Barışı), Andrusovo mütarekesinin geçici düzenini kalıcılaştırdı: sol yaka Ukrayna, Kiev ve Zaporojye Rusya'ya bırakıldı, "
      "Bratslav bölgesi ıssız bir tarafsız kuşak sayıldı. Polonya ayrıca Osmanlı'ya karşı Kutsal İttifak'a katılan Rusya'dan tazminat aldı. İmza günü kaynaklarda 16 Mayıs "
      "(Encyclopedia of Ukraine) ve 1 Mayıs (Sejm Kançılaryası) olarak farklı geçer; Polonya meclisi barışı ancak 1710'da onayladı.",
      ["ieu_eternal", "sejm_1710"], "E", "d1686-lh-ru"),
    m("1742-06-11", PR, [PR, HA], "Breslau ön barışı: Silezya Prusya'ya bırakıldı", "antlasma", 4, 3, "Berlin",
      "Birinci Silezya Savaşı'nda Avusturya, Breslau ön barışıyla Troppau, Teschen ve Jägerndorf bölgeleri dışında Silezya'nın tamamını Prusya'ya bıraktı. "
      "Kesin antlaşma 28 Temmuz 1742'de Berlin'de imzalandı.",
      ["eb_silesia", "ddb_1742"], "E", "d1742-alm-ah-silezya"),
    m("1773-09-30", LH, [LH, RU, PR, HA], "Polonya meclisi birinci paylaşmayı onayladı", "antlasma", 5, 4, "Varşova",
      "Rusya, Prusya ve Avusturya'nın 5 Ağustos 1772'de anlaştığı birinci paylaşma, Varşova'da toplanan olağanüstü meclisin 30 Eylül 1773 onayıyla hukuken tamamlandı. "
      "Rusya Dvina-Dinyeper hattının doğusunu, Prusya Kraliyet Prusyası'nı (Danzig ve Thorn hariç), Avusturya Galiçya'yı aldı. "
      "Devir antlaşmalarının 18 Eylül 1773'te imzalandığı bilgisi ikincil kaynaklıdır.",
      ["eb_partitions"], "E", "d1773-lh-ru"),
    m("1776-07-04", HA, [HA, BG], "Bukovina sınır senedi imzalandı", "diplomasi", 3, 1, "Çernovitz (Çernivtsi)",
      "1775 İstanbul sözleşmesiyle Avusturya'ya bırakılan Bukovina'nın Boğdan ile sınırı, 12 Mayıs 1776 açıklayıcı sözleşmesinin ardından Palamutka'da imzalanan tahdit senediyle işaretlendi. "
      "Senedin günü Noradounghian'ın derlemesinin dizininden alınmıştır; bazı kaynaklar 2 Temmuz der.",
      ["noradounghian"], "E", "d1775-ah-bukovina"),
    m("1779-01-01", HA, [HA, A], "Teschen Barışı: Innviertel Avusturya'ya geçti", "antlasma", 3, 3, "Münih",
      "Bavyera Veraset Savaşı'nı bitiren Teschen Barışı ile Bavyera'nın Inn nehrinin doğusundaki toprakları (Innviertel) Yukarı Avusturya'ya katıldı. "
      "Barış Mayıs 1779'da imzalandı; gün bu çalışmada kabul edilebilir bir kaynakta doğrulanamadı.",
      ["eb_teschen"], "E", "d1606-alm-ah-bavyera"),
    m("1797-01-26", RU, [RU, PR, HA], "Üçüncü paylaşmanın kesin düzenlemesi", "antlasma", 4, 3, "Varşova",
      "1795 Ekim'inde anlaşılan üçüncü paylaşma 26 Ocak 1797'de kesinleşti ve Polonya-Litvanya devleti haritadan tamamen silindi. "
      "Rusya Kurland'ı ve Neman'ın doğusunu, Prusya Varşova dahil Mazovya'yı ve Neman'ın batısını, Avusturya Kraków'dan Bug'a uzanan bölgeyi aldı.",
      ["eb_partitions"], "E", "d1795-pr-ru"),
    m("1805-12-26", A, [A, HA], "Pressburg Barışı: Tirol ve Vorarlberg Bavyera'ya", "antlasma", 4, 4, "Bratislava",
      "Austerlitz yenilgisinin ardından Avusturya, Pressburg Barışı ile Tirol ve Vorarlberg'i Napolyon'un müttefiki Bavyera'ya bıraktı.",
      ["eb_napoleon"], "E", "d1606-alm-ah-bavyera"),
    m("1809-10-14", HA, [HA, VR, RU], "Schönbrunn Barışı: Batı Galiçya Varşova Dukalığı'na, Tarnopol Rusya'ya", "antlasma", 4, 4, "Viyana",
      "Wagram yenilgisinden sonra Avusturya, Kraków ve Lublin dahil Batı Galiçya'yı Varşova Büyük Dukalığı'na, Doğu Galiçya'nın Tarnopol kesimini Rusya'ya bıraktı. "
      "Salzburg, Berchtesgaden ve Innviertel ise Bavyera'ya geçti.",
      ["eb_napoleon"], "E", "d1809-ah-vr"),
    m("1814-06-03", HA, [HA, A], "Paris antlaşması: Tirol Avusturya'ya döndü", "antlasma", 3, 2, "Paris",
      "Napolyon'un yenilgisinin ardından Avusturya ile Bavyera arasında imzalanan antlaşmayla Tirol (Vils ve Kufstein hariç) ve Vorarlberg iki hafta içinde Avusturya'ya iade edildi; "
      "devir Haziran 1814 sonunda tamamlandı.",
      ["stauber"], "E", "d1606-alm-ah-bavyera"),
    m("1816-04-14", HA, [HA, A], "Münih Antlaşması: Salzburg Avusturya'ya döndü", "antlasma", 4, 3, "Münih",
      "Bavyera, Münih Antlaşması ile Innviertel'i, Hausruckviertel'in bir kısmını ve Salzburg'u Avusturya'ya iade etti; Salzach ve Saalach'ın sol yakasındaki Rupertiwinkel Bavyera'da kaldı. "
      "Karşılıklı teslim 1 Mayıs 1816'da yapıldı. Bugünkü Avusturya-Almanya sınırının Salzburg kesimi bu antlaşmaya dayanır.",
      ["hertslet1", "stauber"], "E", "d1816-alm-ah"),
    m("1817-11-11", PR, [PR, KP], "Prusya-Rusya sınır antlaşması: Poznan-Kongre Polonyası hattı", "antlasma", 3, 1, "Varşova",
      "Berlin'de imzalanan sınır antlaşması, Viyana Nihai Senedi'nin Poznan Büyük Dukalığı hattını uygularken çıkan güçlükleri giderdi ve bir icra komisyonu kurdu. "
      "Silezya kesimi 1835 kesin antlaşması ve 1836 Tarnowitz tahdit senediyle tamamlandı.",
      ["hertslet1", "hertslet2"], "E", "d1815-alm-kp"),
    m("1820-11-23", MN, [MN, HA], "Avusturya-Karadağ sınır antlaşması", "antlasma", 3, 1, "Cetinje",
      "Karadağ ile Avusturya Dalmaçyası arasındaki sınır ilk kez bir antlaşmayla belirlendi. Sınırın Krivošije, Boka ve Paštrovići kesimleri 18 Temmuz 1841 antlaşmasıyla ayrıntılı olarak çizildi.",
      ["canu_mn_at"], "E", "d1820-ah-mn-dalmacya"),
    m("1844-01-30", HA, [HA, A], "Avusturya-Bavyera Tirol-Vorarlberg sınır antlaşması", "antlasma", 2, 1, "Münih",
      "Münih'te imzalanan antlaşmayla Avusturya Spielmannsau ve çevresindeki mezralardan, Bavyera Pfronten üzerindeki taleplerinden vazgeçti; Jungholz Avusturya'da kaldı. "
      "Bu antlaşma ve 1850 ek antlaşması 2001'de yerini yeni bir sınır antlaşmasına bıraktı.",
      ["hertslet2", "parl_at"], "E", "d1844-alm-ah"),
    m("1846-11-11", HA, [HA, KP, PR], "Avusturya Kraków Serbest Şehri'ni ilhak etti", "toprak-kazanc", 4, 3, "Krakov",
      "1815'te kurulan Kraków Serbest Şehri'nin statüsü, Avusturya, Prusya ve Rusya'nın 6 Kasım 1846 sözleşmesiyle kaldırıldı; Avusturya 11 Kasım'da ilhakı ilan etti. "
      "İngiltere ve Fransa ilhakı protesto etti. Fiilî teslim gününe dair kabul edilebilir bir kaynak bulunamadı.",
      ["hertslet2"], "E", "d1815-ah-kp"),
    m("1848-03-05", HA, [HA, A], "Avusturya-Saksonya sınır antlaşması: Rumburg bölgeleri", "antlasma", 2, 1, "Dresden",
      "Dresden'de imzalanan antlaşmayla Avusturya, Rumburg'a bağlı dört bölgeyi ve Schirgiswalde yerleşim adacığını Saksonya'ya bıraktı; devir altı hafta içinde yapılacaktı.",
      ["hertslet2"], "E", "d1606-alm-ah-bohemya-2"),
    m("1857-04-11", RU, [RU, BG], "Kişinev nihai senedi: Güney Besarabya sınırı işaretlendi", "diplomasi", 3, 2, "Bender",
      "1856 Paris Antlaşması'nın Güney Besarabya'yı Boğdan'a bırakan 20. maddesi uyarınca kurulan komisyon, yeni hattı toprak konilerle işaretleyip Kişinev'de nihai senedi imzaladı. "
      "Bolgrad Boğdan'a, Komrat Rusya'ya kaldı. Senet 19 Haziran 1857 Paris antlaşmasıyla teyit edildi.",
      ["hertslet2", "ibs43"], "E", "d1856-bes-guney"),
]

ids = [k["id"] for k in KAYIT]
for x in KRON:
    assert any(i == x["sinir_id"] or i.startswith(x["sinir_id"] + "-") or i.startswith(x["sinir_id"]) for i in ids), x["sinir_id"]
    assert len(x["d"]) > 60, x["b"]
KRON.sort(key=lambda x: (x["t"], x["b"]))
with open(KRON_CIKTI, "w", encoding="utf-8", newline="\n") as f:
    f.write("""// -*- coding: utf-8 -*-
// data/kronoloji_sinir_avrupa_orta.js — SINIR KRONOLOJİSİ · ORTA/DOĞU AVRUPA · 1606-11-11 → 1923-10-29 (G1-G7)
// window.KRONOLOJI_SINIR_AVRUPA_ORTA — D3-AVRUPA-ORTA · 16 Eylül 2026 · 🔴 ELLE DÜZENLEME
// Üretici: denetim/ARAC-D3ORTA-URET-0916.py (hat kayıtlarıyla AYNI betik — `sinir_id` data/d_sinirlar_avrupa_orta.js'e bağlanır)
// Şema: oturumlar/KRONOLOJI-SARTNAME.md §3 + `taraflar` (ilgili devletler) · `sinif` (E hukukî / D fiilî) · `sinir_id` (kayıt öneki)
// index.html'e BAĞLANMADI (koordinatör ekler). Kaynak: her maddede; ◐ işaretli günler ikincil kaynaklıdır.
// yer_id boş olanlarda yer_kon var: o yerleşim (Poznan, Klagenfurt, Katowice…) atlasta YOK.
""")
    f.write("\nwindow.KRONOLOJI_SINIR_AVRUPA_ORTA = [\n")
    for x in KRON:
        f.write(json.dumps(x, ensure_ascii=False, separators=(",", ":")) + ",\n")
    f.write("];\n")
print("kronoloji:", len(KRON), "madde ·", sum(x["sinif"] == "E" for x in KRON), "E ·", sum(x["sinif"] == "D" for x in KRON), "D ·",
      sum(1 for x in KRON if x["yer_id"]), "yer_id dolu")

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
