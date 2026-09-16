# -*- coding: utf-8 -*-
"""D4-AFRIKA — data/d_sinirlar_afrika.js ureticisi. 16 Eylul 2026.

Sema: denetim/SEMA-D-0916.md + oturumlar/GORUNUM-ABCD-0916.md ust bolum (A-F).
Kaynak envanteri: denetim/D4-AFRIKA-0916.md (bu betigin dayanaklari oradan).
Geometri: veri-kaynak/d_bugunku_sinirlar.geojson (D-GEOARAC), yalniz
"degisti:false" dedigim parcalar icin bugunku hat VEKIL olarak kullanilir.

ELLE DUZENLEME - yeniden uret.
"""
import json
import os

from shapely.geometry import shape, Point

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BUGUNKU = os.path.join(KOK, "veri-kaynak", "d_bugunku_sinirlar.geojson")
ULKELER = os.path.join(KOK, "veri-kaynak", "ne_10m_admin_0_countries.geojson")
CIKTI = os.path.join(KOK, "data", "d_sinirlar_afrika.js")

IBS = "https://library.law.fsu.edu/Digital-Collections/LimitsinSeas/pdf/{}.pdf"


def yukle_bugunku():
    d = json.load(open(BUGUNKU, encoding="utf-8"))
    idx = {}
    for f in d["features"]:
        idx.setdefault(f["properties"]["cift"], []).append(f)
    return idx


def kod(props):
    for k in ("ISO_A3", "ISO_A3_EH", "ADM0_A3"):
        v = props.get(k)
        if v and v != "-99":
            return v
    return None


def yukle_ulke_poligonlari():
    d = json.load(open(ULKELER, encoding="utf-8"))
    poly = {}
    for f in d["features"]:
        c = kod(f["properties"])
        if not c:
            continue
        g = shape(f["geometry"])
        if not g.is_valid:
            g = g.buffer(0)
        if c in poly:
            poly[c] = poly[c].union(g)
        else:
            poly[c] = g
    return poly


def parca_birlestir(feats):
    """Ayni cift icin birden fazla parca varsa, en uzun parcayi al (kopuk ada/enklav
    parcalari D kaydina KARISTIRILMAZ; ayri bir -N kaydi gerekirse elle eklenir)."""
    feats = sorted(feats, key=lambda f: -f["properties"]["uzunluk_km"])
    return feats[0]


def sol_taraf_bul(coords, taraf_a, taraf_b, poly):
    """Cizginin orta noktasindan, hatta dik yonde kisa bir adim atip hangi
    ulkenin poligonuna dustugunu sorar. `taraf_a`/`taraf_b` ISO3 kodu."""
    n = len(coords)
    i = n // 2
    (x0, y0), (x1, y1) = coords[max(0, i - 1)], coords[min(n - 1, i + 1)]
    dx, dy = x1 - x0, y1 - y0
    norm = (dx ** 2 + dy ** 2) ** 0.5
    if norm == 0:
        return None
    # sola dik (90 derece saat yonu tersi)
    lx, ly = -dy / norm, dx / norm
    mx, my = coords[i]
    adim = 0.02
    p_sol = Point(mx + lx * adim, my + ly * adim)
    pa = poly.get(taraf_a)
    pb = poly.get(taraf_b)
    if pa is not None and pa.contains(p_sol):
        return taraf_a
    if pb is not None and pb.contains(p_sol):
        return taraf_b
    return None


ISO_KUNYE = {
    # ISO3 (d_bugunku_sinirlar.geojson) -> devletler.js kimligi (bir kismi TASLAK, D-KUNYE onayi bekliyor)
    "GMB": "ingiltere",                    # TASLAK YOK — Gambiya icin ayri kunye onerilmedi, gecici
    "SEN": "fransiz-bati-afrika",
    "GIN": "fransiz-bati-afrika",
    "GNB": "portekiz-gine",
    "SLE": "ingiliz-siyera-leon",
    "LBR": "liberya",
    "CIV": "fransiz-bati-afrika",
    "GHA": "ingiliz-altin-kiyisi",
    "TGO": "fransiz-togo-mandasi",         # GHA-TGO kesiminde İngiliz Togoland (ingiliz-altin-kiyisi'ne bagli) icin ayrica not
    "BEN": "fransiz-bati-afrika",
    "NGA": "ingiliz-nijerya",
    "NER": "fransiz-bati-afrika",
    "CMR": "fransiz-kamerun-mandasi",
    "COG": "fransiz-ekvator-afrikasi",
    "COD": "belcika-kongo",
    "CAF": "fransiz-ekvator-afrikasi",
    "AGO": "portekiz-angola",
    "ZMB": "ingiliz-kuzey-rodezya",
    "MOZ": "portekiz-mozambik",
    "MWI": "ingiliz-nyasaland",
    "ZWE": "ingiliz-guney-rodezya",
    "KEN": "ingiliz-kenya-kolonisi",
    "TZA": "ingiliz-tanganika-mandasi",
    "BWA": "ingiliz-becuanaland",
    "NAM": "guneybati-afrika-mandasi",
    "SDN": "ingiliz-sudani",
    "TCD": "fransiz-ekvator-afrikasi",
    "LBY": "italya",                        # ORTADOGU konvansiyonu (D4-ORTADOGU d_sinirlar_ortadogu.js)
    "EGY": "misir-kralligi",
    "RWA": "ruanda-urundi-mandasi",
    "BDI": "ruanda-urundi-mandasi",
}

# -----------------------------------------------------------------------
# KURATE EDILMIS KAYITLAR — her biri denetim/D4-AFRIKA-0916.md'deki
# arastirmaya dayanir. `cift` d_bugunku_sinirlar.geojson anahtaridir.
# -----------------------------------------------------------------------
KAYITLAR = [
    dict(id="d1923-senegal-gambiya", cift="GMB-SEN", f="1895-06-16", t="1923-10-29",
         sinif="E",
         dayanak=[dict(ad="Anglo-French Convention of 1889", tarih="1889-08-10",
                       tur="antlaşma", url="https://en.wikipedia.org/wiki/Anglo-French_Convention_of_1889",
                       alinti="ten kilometres north and south of the river as far inland as Yarbutenda")],
         degisti=dict(deger=False, kaynak="Wikipedia Anglo-French Convention of 1889 + IBS 85",
                      not_="1889 hattı temelde bugüne kadar değişmeden kaldı"),
         tahdit=dict(t=None, not_="1889'da yaklaşık ölçüm; sahada tam demarkasyon tarihi bu turda bulunamadı"),
         kesinlik_km=5.0, kesinlik_not="D-GEOARAC bugünkü hat vekil alındı (10km nehir kuralı karmaşık, gerçek 1889 hattı ile bugünküyle sapma ölçülmedi)",
         not_="Gambiya için devletler.js'te ayrı künye YOK (D-KUNYE taslağında da yok) — geçici `ingiltere`. f=1895-06-16: hat 1889'da çizildi ama `fransiz-bati-afrika` (AOF) taslak künyesi ancak 1895-06-16'da kuruldu — f BU kayıttaki taraf ADINA göre, hattın ilk çizildiği tarihe göre DEĞİL (D4-ORTADOGU `d1923-libya-tunus` emsali)."),

    dict(id="d1923-fransiz-gine-portekiz-gine", cift="GIN-GNB", f="1895-06-16", t="1923-10-29",
         sinif="E",
         dayanak=[dict(ad="Franco-Portekiz Sözleşmesi", tarih="1886-05-12", tur="antlaşma",
                       url="https://library.law.fsu.edu/Digital-Collections/LimitsinSeas/pdf/ibs142.pdf",
                       alinti="boundary between Portuguese Guinea and adjacent French territories")],
         degisti=dict(deger=False, kaynak="IBS No. 142 (Guinea-Bissau boundary)",
                      not_="1900-05 ortak komisyon 184 sütunla arazide sabitledi, 1905-06 nota teatisiyle onaylandı"),
         tahdit=dict(t="1905", not_="1900-1905 ortak komisyon demarkasyonu"),
         kesinlik_km=3.0, kesinlik_not="D-GEOARAC bugünkü hat vekil",
         not_="f=1895-06-16: hat 1886'da çizildi, `fransiz-bati-afrika` (AOF) 1895-06-16'da kuruldu — bkz. d1923-senegal-gambiya notu."),

    dict(id="d1923-fransiz-gine-sierra-leone", cift="GIN-SLE", f="1896-08-31", t="1923-10-29",
         sinif="E",
         dayanak=[dict(ad="IBS No. 136 Guinea–Sierra Leone", tur="resmî sınır çalışması",
                       url="https://library.law.fsu.edu/Digital-Collections/LimitsinSeas/pdf/ibs136.pdf",
                       alinti="bulunamadı — IBS 136 içeriği bu turda okunmadı")],
         degisti=dict(deger=None, kaynak="", not_="IBS 136 içeriği okunmadı, kesin tarih doğrulanmadı"),
         tahdit=dict(t=None, not_="bulunamadı"),
         kesinlik_km=8.0, kesinlik_not="tam antlaşma tarihi doğrulanmadı — IBS 136 ikinci turda okunmalı",
         not_="🟡 dayanak tarihi (1895 civarı) YAKLAŞIK — IBS 136 ile doğrulanmadı. f=1896-08-31: `ingiliz-siyera-leon` taslak künyesi bu tarihte kuruldu (AOF'un 1895-06-16'sından da geç) — f taraf künyesine göre."),

    dict(id="d1923-liberya-sierra-leone", cift="LBR-SLE", f="1911-01-01", t="1923-10-29",
         sinif="E",
         dayanak=[dict(ad="Anglo-Liberian Convention", tarih="1885-11-11", tur="antlaşma",
                       url="https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Liberia",
                       alinti="Mano river as the boundary"),
                  dict(ad="1911 Sierra Leone-Liberia düzeltmesi", tarih="1911-01-01", tur="antlaşma",
                       url="https://library.law.fsu.edu/Digital-Collections/LimitsinSeas/pdf/ibs129.pdf")],
         degisti=dict(deger=False, kaynak="IBS No. 129 (Liberia-Sierra Leone)",
                      not_="1911 düzeltmesi (Morro-Magowi ormanı takası) sonrası hat bugünküyle aynı"),
         tahdit=dict(t="1903", not_="1903 Sierra Leone-Liberia demarkasyonu, 1911'de düzeltildi"),
         kesinlik_km=3.0, kesinlik_not="D-GEOARAC bugünkü hat vekil",
         not_=""),

    dict(id="d1923-liberya-fildisi-sahili", cift="CIV-LBR", f="1911-01-01", t="1923-10-29",
         sinif="E",
         dayanak=[dict(ad="Franco-Liberian Agreement", tarih="1907-09-18", tur="antlaşma",
                       url="https://history.state.gov/historicaldocuments/frus1911/ch78",
                       alinti="physically impossible to apply the theoretical lines of the 1892 convention"),
                  dict(ad="1911 teyidi", tarih="1911-01-01", tur="antlaşma",
                       url="https://library.law.fsu.edu/Digital-Collections/LimitsinSeas/pdf/ibs132.pdf")],
         degisti=dict(deger=False, kaynak="IBS No. 132 (Côte d'Ivoire-Liberia)",
                      not_="1911 hattı bugünküyle aynı kabul edilir"),
         tahdit=dict(t="1907", not_="1907 topografik düzeltme, 1911 teyit"),
         kesinlik_km=3.0, kesinlik_not="D-GEOARAC bugünkü hat vekil",
         not_="1892 Cavalla nehri hattı arazide UYGULANAMAZ bulunmuştu, 1907/1911 ile değiştirildi — 1892 hattı AYRI bir önceki-dönem kaydı olabilir (geriye sarma G ADIM 2'de)."),

    dict(id="d1923-altinkiyisi-fildisi-sahili", cift="CIV-GHA", f="1895-06-16", t="1923-10-29",
         sinif="E",
         dayanak=[dict(ad="Anglo-French Arrangement", tarih="1893-07-12", tur="antlaşma",
                       url="https://library.law.fsu.edu/Digital-Collections/LimitsinSeas/pdf/ibs138.pdf",
                       alinti="delimiting the boundary between the Gulf of Guinea and the 9th parallel")],
         degisti=dict(deger=None, kaynak="", not_="bugünle karşılaştırma bu turda yapılmadı, IBS 138 içeriği okunmadı"),
         tahdit=dict(t="1906", not_="arazi tahdidi 1901-03, kabul 1906"),
         kesinlik_km=6.0, kesinlik_not="D-GEOARAC bugünkü hat 2 parça veriyor — hangi parçanın 1923 hattına karşılık geldiği doğrulanmadı",
         not_="🟡 degisti ölçülemedi ama bugünkü hat yine de VEKİL olarak kondu (D-GEOARAC 2 parça buluyor, en uzunu — 602,6 km — alındı; ~2 km'lik ikinci parça muhtemelen kıyı/nehir kıvrımı, atlandı). f=1895-06-16: hat 1893'te çizildi, AOF 1895-06-16'da kuruldu."),

    dict(id="d1923-nijerya-kamerun-milner-simon", cift="CMR-NGA", f="1922-07-20", t="1923-10-29",
         sinif="E",
         dayanak=[dict(ad="Milner-Simon Deklarasyonu", tarih="1919-07-10", tur="antlaşma (Paris)",
                       url="https://en.wikipedia.org/wiki/Neukamerun",
                       alinti="Sanaga nehri ağzından kuzeye çizilen hat")],
         degisti=dict(deger=False, kaynak="ICJ Cameroon v. Nigeria (2002)",
                      not_="2002 UAD kararı büyük ölçüde eski sömürge hattını teyit etti (Bakassi dahil)"),
         tahdit=dict(t=None, not_="1919-1930 arası kademeli demarkasyon, tam tarih bulunamadı"),
         kesinlik_km=5.0, kesinlik_not="D-GEOARAC bugünkü hat vekil — 2002 ICJ kararı sonrası (Bakassi netleşmesi) hattı, 1919-1923 arası TAM aynı olmayabilir",
         not_="F adayı: Milletler Cemiyeti B-mandası onayı (1922) uluslararası tanıma sayılabilir — TANINMA-1923-0916.json gelene kadar E. f=1922-07-20: hat 1919 Milner-Simon'la çizildi ama `fransiz-kamerun-mandasi` taslak künyesi ancak B-mandası tüzüğünün onaylandığı 1922-07-20'de kuruldu — GERİYE SARMA G1 ADAYI: 1919-07-10→1922-07-20 arası aynı hat, muhtemelen sinif D (Milletler Cemiyeti onayından ÖNCE fiilî Fransız-İngiliz idaresi), taraf künyesi eksik (bkz. rapor)."),

    dict(id="d1923-kongo-fransiz-belcika", cift="COD-COG", f="1910-01-15", t="1923-10-29",
         sinif="E",
         dayanak=[dict(ad="Brüksel Protokolü", tarih="1887-04-29", tur="antlaşma",
                       url="https://en.wikipedia.org/wiki/Ubangi-Shari",
                       alinti="thalweg of that river to its intersection with the 4th parallel"),
                  dict(ad="1894 sözleşmeleri", tarih="1894-01-01", tur="antlaşma")],
         degisti=dict(deger=None, kaynak="", not_="bugünle karşılaştırma bu turda ayrıntılı yapılmadı"),
         tahdit=dict(t=None, not_="bulunamadı"),
         kesinlik_km=6.0, kesinlik_not="D-GEOARAC bugünkü hat vekil — Ubangi-Bomu 1892-95 ihtilafı sonrası hattın kesinliği ölçülmedi",
         not_="f=1910-01-15: hat 1887/1894'te çizildi, `fransiz-ekvator-afrikasi` (AEF) ancak 1910-01-15'te kuruldu (AEF, belcika-kongo'nun 1908-11-15'inden de geç) — f taraf künyesine göre."),

    dict(id="d1923-orta-afrika-cumhuriyeti-belcika-kongo", cift="CAF-COD", f="1910-01-15", t="1923-10-29",
         sinif="E",
         dayanak=[dict(ad="Brüksel Protokolü + 1894 sözleşmeleri", tarih="1894-01-01", tur="antlaşma")],
         degisti=dict(deger=None, kaynak="", not_="bugünle karşılaştırma bu turda ayrıntılı yapılmadı"),
         tahdit=dict(t=None, not_="bulunamadı"),
         kesinlik_km=6.0, kesinlik_not="D-GEOARAC bugünkü hat vekil",
         not_="Aynı 1887/1894 sözleşme ailesinin devamı (bkz. d1923-kongo-fransiz-belcika). f=1910-01-15 (AEF kuruluşu)."),

    dict(id="d1923-angola-kuzey-rodezya-barotseland", cift="AGO-ZMB", f="1911-05-17", t="1923-10-29",
         sinif="E",
         dayanak=[dict(ad="Anglo-Portekiz Antlaşması", tarih="1891-06-11", tur="antlaşma",
                       url="https://en.wikipedia.org/wiki/Anglo-Portuguese_Treaty_of_1891"),
                  dict(ad="İtalya Kralı Hakemliği (Barotseland)", tarih="1905-05-30", tur="hakem kararı",
                       url="https://legal.un.org/riaa/cases/vol_XI/59-69.pdf",
                       alinti="award shifted the Angola–Northern Rhodesia boundary westward")],
         degisti=dict(deger=False, kaynak="IBS No. 119 (Angola-Zambia)",
                      not_="1905 hakem kararı bugünkü Angola-Zambiya sınırının temel hizasını belirledi"),
         tahdit=dict(t="1905", not_="hakem kararıyla eşzamanlı kabul edildi"),
         kesinlik_km=4.0, kesinlik_not="D-GEOARAC bugünkü hat vekil",
         not_="f=1911-05-17: hat 1905 hakem kararıyla çizildi, `ingiliz-kuzey-rodezya` (Kuzey-Batı + Kuzey-Doğu Rodezya'nın BİRLEŞMESİ) ancak 1911-05-17'de kuruldu — GERİYE SARMA G1 ADAYI: 1905-1911 arası aynı hat, taraf 'Kuzey-Batı Rodezya' (ayrı künye YOK)."),

    dict(id="d1923-angola-belcika-kongo", cift="AGO-COD", f="1908-11-15", t="1923-10-29",
         sinif="E",
         dayanak=[dict(ad="bulunamadı — tam sözleşme tarihi bu turda doğrulanmadı", tur="bulunamadı")],
         degisti=dict(deger=None, kaynak="", not_="ölçülemedi"),
         tahdit=dict(t=None, not_="bulunamadı"),
         kesinlik_km=10.0, kesinlik_not="dayanak zayıf — ikinci araştırma turu gerekli",
         not_="🟡 tarih Berlin Senedi çerçevesinin genel dönemine dayanan YAKLAŞIK bir varsayım; kesin antlaşma bulunamadı. f=1908-11-15: `belcika-kongo` taslak künyesi bu tarihte kuruldu (Kongo Serbest Devleti'nin Belçika'ya devri) — hattın kendisi muhtemelen 1891 civarı Portekiz-Kongo Serbest Devleti sözleşmesine dayanır (doğrulanmadı)."),

    dict(id="d1923-malavi-mozambik", cift="MOZ-MWI", f="1907-01-01", t="1923-10-29",
         sinif="E",
         dayanak=[dict(ad="Anglo-Portekiz Antlaşması", tarih="1891-06-11", tur="antlaşma",
                       url="https://en.wikipedia.org/wiki/Anglo-Portuguese_Treaty_of_1891",
                       alinti="boundaries between the British Central Africa Protectorate ... and Portuguese Mozambique")],
         degisti=dict(deger=False, kaynak="IBS No. 112 (Malawi-Mozambique)", not_=""),
         tahdit=dict(t="1891", not_="antlaşmayla eşzamanlı"),
         kesinlik_km=4.0, kesinlik_not="D-GEOARAC bugünkü hat vekil — Malavi Gölü kıyı parçaları ayrı ölçülmedi (3 parça birden verimiş, en uzunu alındı)",
         not_="f=1907-01-01: hat 1891'de çizildi, `ingiliz-nyasaland` adı ancak 1907'de (eski 'Britanya Orta Afrika Protektorası'nın yeniden adlandırılması) kondu — G1 ADAYI: 1891-1907 arası aynı hat, taraf 'Britanya Orta Afrika Protektorası' (ayrı künye YOK, muhtemelen sadece isim değişikliği, hat SÜREKLİ)."),

    dict(id="d1923-guney-rodezya-mozambik", cift="MOZ-ZWE", f="1923-10-01", t="1923-10-29",
         sinif="E",
         dayanak=[dict(ad="Anglo-Portekiz Antlaşması", tarih="1891-06-11", tur="antlaşma",
                       url="https://en.wikipedia.org/wiki/Anglo-Portuguese_Treaty_of_1891",
                       alinti="16th parallel ... 31st degree of longitude")],
         degisti=dict(deger=False, kaynak="IBS No. 118 (Mozambique-Zimbabwe)", not_=""),
         tahdit=dict(t="1891", not_="antlaşmayla eşzamanlı"),
         kesinlik_km=4.0, kesinlik_not="D-GEOARAC bugünkü hat vekil",
         not_="🔴 f=1923-10-01: `ingiliz-guney-rodezya` (öz-yönetimli koloni) TAM OLARAK bu tarihte kuruldu — BSAC (Britanya Güney Afrika Şirketi) yönetimi 1923-09-12'de ilhak ile sona erdi. 29 Ekim 1923 ufkuna YALNIZ 28 GÜN kala bir taraf değişikliği (D-KUNYE taslağının kendi uyarısı). Hattın kendisi 1891'den beri aynı; G1 ADAYI: 1891-1923-10-01 arası taraf 'BSAC yönetimindeki Güney Rodezya' (ayrı künye YOK)."),

    dict(id="d1923-kenya-tanganyika", cift="KEN-TZA", f="1922-07-20", t="1923-10-29",
         sinif="E",
         dayanak=[dict(ad="Heligoland-Zanzibar Antlaşması", tarih="1890-07-01", tur="antlaşma",
                       url="https://germanhistorydocs.org/en/wilhelmine-germany-and-the-first-world-war-1890-1918/anglo-german-treaty-heligoland-zanzibar-treaty-july-1-1890")],
         degisti=dict(deger=False, kaynak="Britannica Zanzibar Treaty + genel tarihyazımı",
                      not_="1890 hattı Versay sonrası manda değişikliğine rağmen ÇİZGİ olarak korundu"),
         tahdit=dict(t=None, not_="bulunamadı"),
         kesinlik_km=5.0, kesinlik_not="D-GEOARAC bugünkü hat vekil",
         not_="F adayı: Tanganyika B-mandası Milletler Cemiyeti onayı (1922) — TANINMA tablosu gelene kadar E. f=1922-07-20: hat 1890'da çizildi ve HİÇ değişmedi, ama `ingiliz-tanganika-mandasi` (1922-07-20) ve `ingiliz-kenya-kolonisi` (1920-07-23, eski adı 'Doğu Afrika Protektorası') taraf künyeleri bu tarihlerden sonra kuruldu — G1 ADAYI: 1890-1922 arası AYNI GEOMETRİ, taraflar 'İngiliz Doğu Afrika Protektorası' + 'Alman Doğu Afrikası'(1918'e kadar)/'İngiliz askerî işgali'(1918-22) — ayrı künyeler YOK."),

    dict(id="d1923-ruanda-tanganyika", cift="RWA-TZA", f="1922-07-20", t="1923-10-29",
         sinif="D",
         dayanak=[dict(ad="Orts-Milner Anlaşması (1919) + Milletler Cemiyeti mandası onayı", tarih="1922-07-20",
                       tur="idarî anlaşma (nihai değil)",
                       url="https://encyclopedia.1914-1918-online.net/article/ruanda-and-urundi/",
                       alinti="Kisaka territory west of the Kagera ... included in the United Kingdom mandate of Tanganyika")],
         degisti=dict(deger=True, kaynak="Anglo-Belçika Kigoma Protokolü, 1924-08-05",
                      not_="29 Ekim 1923'te hat HENÜZ NİHAİ DEĞİLDİ — 1919 Orts + 22 Mart 1921 devirleri geçerliydi, kesin demarkasyon ancak 1924 Kigoma Protokolü'yle tamamlandı"),
         tahdit=dict(t="1924-08-05", not_="1923'ten SONRA"),
         kesinlik_km=15.0, kesinlik_not="D-GEOARAC bugünkü hat VEKİL — 1923'teki fiilî hat ile bugünkü (1924 sonrası nihai) hat arasındaki fark ÖLÇÜLMEDİ, muhtemelen küçük ama doğrulanmadı",
         not_="sinif D seçildi (fiilî): 1923 anında hukuken NİHAİ bir sınır yoktu. f=1922-07-20 (mandate tüzüğü onayı, `ruanda-urundi-mandasi`+`ingiliz-tanganika-mandasi` taraf künyelerinin kuruluşu) — G1 ADAYI: 1916(Tabora seferi, Belçika işgali)-1922 arası AYNI/BENZER hat, taraflar 'Belçika askerî işgali' + 'Britanya askerî işgali' (ayrı künye YOK, geçici `belcika`+`ingiltere` kullanılabilir), sinif D. Kesin geometri farkı ÖLÇÜLMEDİ — bu ikinci G1 kaydı bu turda YAZILMADI (kesin değilse kayıt yazılmaz kuralı)."),

    dict(id="d1923-burundi-tanganyika", cift="BDI-TZA", f="1922-07-20", t="1923-10-29",
         sinif="D",
         dayanak=[dict(ad="Orts-Milner Anlaşması (1919) + 22 Mart 1921 devri (Buguki) + mandate onayı", tarih="1922-07-20",
                       tur="idarî anlaşma (nihai değil)",
                       url="https://encyclopedia.1914-1918-online.net/article/ruanda-and-urundi/")],
         degisti=dict(deger=True, kaynak="Anglo-Belçika Kigoma Protokolü, 1924-08-05",
                      not_="aynı süreç, bkz. d1923-ruanda-tanganyika"),
         tahdit=dict(t="1924-08-05", not_="1923'ten SONRA"),
         kesinlik_km=15.0, kesinlik_not="D-GEOARAC bugünkü hat VEKİL, fark ölçülmedi",
         not_="sinif D — bkz. d1923-ruanda-tanganyika notu. f=1922-07-20 aynı gerekçeyle."),

    dict(id="d1923-becuanaland-guneybati-afrika-caprivi", cift="BWA-NAM", f="1920-12-17", t="1923-10-29",
         sinif="E",
         dayanak=[dict(ad="Anglo-Alman Antlaşması (Heligoland-Zanzibar, madde III/2)", tarih="1890-07-01",
                       tur="antlaşma", url="https://en.wikipedia.org/wiki/Caprivi_Strip",
                       alinti="southern boundary adjacent to British Bechuanaland, running eastward along the 18th parallel")],
         degisti=dict(deger=False, kaynak="Wikipedia Caprivi Strip (genel tarihyazımı) — bağımsız ikinci kaynakla doğrulanmadı",
                      not_="hat çizgisi değişmedi; EGEMENLİK 1920'de Almanya'dan Güney Afrika Birliği mandasına geçti"),
         tahdit=dict(t=None, not_="1890'da genel hat, sahada tam demarkasyon tarihi bulunamadı"),
         kesinlik_km=5.0, kesinlik_not="D-GEOARAC bugünkü hat vekil",
         not_="18. paralel + Chobe nehri — Chobe'nin 'ana kanalın ortası' tanımı 1890'da MUĞLAK bırakıldı (Kazungula dörtlü nokta tartışması bugüne kadar sürüyor). f=1920-12-17: hat 1890'da çizildi, `guneybati-afrika-mandasi` ancak bu tarihte (Milletler Cemiyeti C-mandası onayı) kuruldu — G1 ADAYI: 1890-1915 arası taraf 'Alman Güneybatı Afrikası' (künye YOK), 1915-1920 arası 'Güney Afrika Birliği askerî işgali' (künye YOK, geçici `guney-afrika-birligi` kullanılabilir; Almanya 9 Temmuz 1915'te teslim oldu)."),

    dict(id="d1923-angola-guneybati-afrika", cift="AGO-NAM", f="1920-12-17", t="1923-10-29",
         sinif="E",
         dayanak=[dict(ad="Alman-Portekiz sözleşmesi (Kunene/Kubango hattı)", tarih="1886-01-01", tur="antlaşma",
                       url="https://kolonialmarken.de/en/german-south-west-africa/")],
         degisti=dict(deger=None, kaynak="", not_="1923'teki hat kısmen provizyonel; nihaî demarkasyon 1926'ya kadar sürdü — 'değişmedi' hükmü VERİLEMEZ"),
         tahdit=dict(t="1926", not_="nihaî demarkasyon 1923'ten SONRA"),
         kesinlik_km=10.0, kesinlik_not="1923 anındaki hattın kesinliği düşük — nehir hattı genel olarak doğru ama uçlar 1926'da netleşti",
         not_="🟡 degisti:null bilinçli — 1926 demarkasyonundan ÖNCEKİ 1923 hâli için D-GEOARAC bugünkü hattı VEKİL kullanmak riskli; yine de en iyi elimizdeki kaynak. f=1920-12-17 (guneybati-afrika-mandasi kuruluşu) — bkz. d1923-becuanaland-guneybati-afrika-caprivi G1 notu."),

    dict(id="d1923-guneybati-afrika-kuzey-rodezya-caprivi-dogu", cift="NAM-ZMB", f="1920-12-17", t="1923-10-29",
         sinif="E",
         dayanak=[dict(ad="Anglo-Alman Antlaşması 1890 (Caprivi Şeridi doğu ucu)", tarih="1890-07-01", tur="antlaşma",
                       url="https://www.chalochatu.org/Kazungula_quadripoint")],
         degisti=dict(deger=False, kaynak="chalochatu.org Kazungula quadripoint (genel tarihyazımı)",
                      not_="dört-ülke kavşağı tartışmalı ama 1923 hattı bugünküyle aynı kabul edilir"),
         tahdit=dict(t=None, not_="1890'da genel hat, MUĞLAK ('ana kanalın ortası')"),
         kesinlik_km=6.0, kesinlik_not="D-GEOARAC bugünkü hat vekil",
         not_="f=1920-12-17 (guneybati-afrika-mandasi kuruluşu) — bkz. d1923-becuanaland-guneybati-afrika-caprivi G1 notu."),

    dict(id="d1923-cad-anglo-misir-sudani-darfur", cift="SDN-TCD", f="1919-09-08", t="1923-10-29",
         sinif="E",
         dayanak=[dict(ad="Anglo-French Convention (Darfur batı sınırı)", tarih="1919-09-08", tur="antlaşma",
                       url="https://omniatlas.com/maps/northern-africa/18990321/",
                       alinti="northern limit of French territory ... at the point of 19º30' North and 24º East")],
         degisti=dict(deger=False, kaynak="genel tarihyazımı (Wikipedia Anglo-Egyptian Darfur Expedition + IBS 15/3rev)",
                      not_="1919 hattı bugünkü Çad-Sudan sınırının temelidir"),
         tahdit=dict(t="1919-09-08", not_="antlaşmayla eşzamanlı kabul edildi (sahada tam demarkasyon ayrıca doğrulanmadı)"),
         kesinlik_km=6.0, kesinlik_not="D-GEOARAC bugünkü hat vekil",
         not_="Darfur Sultanlığı 1916'da Anglo-Mısır kuvvetlerince ilhak edildi; batı sınırı 1899-1919 arası TANIMSIZDI — bu kayıt yalnız 1919 SONRASI nihai hattır."),

    dict(id="d1923-cad-libya", cift="LBY-TCD", f="1919-09-08", t="1923-10-29",
         sinif="E",
         dayanak=[dict(ad="Anglo-French Convention", tarih="1919-09-08", tur="antlaşma",
                       url="https://library.law.fsu.edu/Digital-Collections/LimitsinSeas/pdf/ibs003.pdf")],
         degisti=dict(deger=None, kaynak="", not_="IBS 3(Rev) içeriği bu turda okunmadı"),
         tahdit=dict(t="1919-09-08", not_=""),
         kesinlik_km=8.0, kesinlik_not="D-GEOARAC bugünkü hat vekil, doğrulanmadı",
         not_="🔴 Libya tarafı D4-ORTADOGU'nun `italya` kimliğiyle tutarlı yazıldı — alfabetik kural (AFRIKA<ORTADOGU) gereği bu parça buraya alındı."),

    dict(id="d1923-sudan-libya", cift="LBY-SDN", f="1899-03-21", t="1923-10-29",
         sinif="C",
         dayanak=[dict(ad="Anglo-French Convention on Sudan", tarih="1899-03-21", tur="antlaşma (genel çerçeve, kaba)",
                       url="https://omniatlas.com/maps/northern-africa/18990321/")],
         degisti=dict(deger=None, kaynak="", not_="1899 çerçevesi kaba; kesin koordinatlı demarkasyon bu turda doğrulanmadı"),
         tahdit=dict(t=None, not_="bulunamadı"),
         kesinlik_km=20.0, kesinlik_not="kaba antlaşma hattı — D için yeterli kesinlik yok, C olarak işaretlendi",
         not_="🔴 Libya tarafı `italya` — alfabetik kural gereği buraya alındı."),

    dict(id="d1923-sudan-misir-kondominyum", cift="EGY-SDN", f="1922-03-15", t="1923-10-29",
         sinif="C",
         dayanak=[dict(ad="Anglo-Mısır Kondominyum Antlaşması + 1902 idarî düzeltme", tarih="1899-01-19",
                       tur="antlaşma (kondominyum — İKİ TARAF DA aynı egemenlik çatısı)")],
         degisti=dict(deger=None, kaynak="", not_="1899/1902 sonrası bugünkü Mısır-Sudan sınırı hâlâ İHTİLAFLI (Halayib Üçgeni) — 'değişmedi' hükmü verilemez"),
         tahdit=dict(t="1902", not_="1902 idarî düzeltme (Vadi Halfa/Bahâriye bölgesi Sudan idaresine)"),
         kesinlik_km=20.0, kesinlik_not="22. paralel + 1902 idarî sınır ayrımı net değil, kondominyum niteliği yüzünden 'uluslararası sınır' sayılıp sayılmayacağı TARTIŞMALI",
         not_="🔴 AÇIK SORU (koordinatöre tahtadan soruldu): kondominyum İÇ hattı D kategorisine girer mi? Halayib Üçgeni bugün de İHTİLAFLI — bu segment tarihsel olarak da netameli. f=1922-03-15: `misir-kralligi` (gerçek künye) bu tarihte kuruldu (Sultan Fuad kral unvanını aldı); 1899-1922 arası taraf `misir-sultanligi` (gerçek künye, f:1914-12-18) ya da daha önce `misir-eyaleti`/`misir-kavalali` — G1 ADAYI, hat AYNI kalır, yalnız Mısır tarafının künyesi değişir."),
]


def uret():
    bugunku = yukle_bugunku()
    poly = yukle_ulke_poligonlari()
    cikan = []
    atlanan = []
    for k in KAYITLAR:
        cift = k["cift"]
        feats = bugunku.get(cift)
        kayit = {
            "id": k["id"],
            "taraflar": [ISO_KUNYE.get(cift.split("-")[0], cift.split("-")[0]),
                         ISO_KUNYE.get(cift.split("-")[1], cift.split("-")[1])],
            "f": k["f"], "t": k["t"],
            "sinif": k["sinif"],
        }
        if feats:
            f = parca_birlestir(feats)
            coords = f["geometry"]["coordinates"]
            a, b = cift.split("-")
            st = sol_taraf_bul(coords, a, b, poly)
            kayit["sol_taraf"] = ISO_KUNYE.get(st, st) if st else None
            kayit["hat"] = [[round(x, 4), round(y, 4)] for x, y in coords]
            kayit["uzunluk_km"] = round(f["properties"]["uzunluk_km"], 1)
            kayit["geometri_kaynagi"] = "Natural Earth 10m admin-0 (bugünkü sınır, D-GEOARAC) — kullanılabilirliği 'degisti' alanına bağlı VEKİL"
        else:
            kayit["hat"] = None
            kayit["uzunluk_km"] = None
            kayit["geometri_kaynagi"] = "bulunamadı — d_bugunku_sinirlar.geojson'da bu çift yok"
            atlanan.append(k["id"])
        kayit["degisti"] = {"deger": k["degisti"]["deger"], "kaynak": k["degisti"]["kaynak"], "not": k["degisti"]["not_"]}
        kayit["tahdit"] = {"t": k["tahdit"]["t"], "not": k["tahdit"]["not_"]}
        kayit["kesinlik_km"] = k["kesinlik_km"]
        kayit["kesinlik_not"] = k["kesinlik_not"]
        kayit["dayanak"] = k["dayanak"]
        kayit["not"] = k["not_"]
        cikan.append(kayit)

    with open(CIKTI, "w", encoding="utf-8", newline="\n") as out:
        out.write("// -*- coding: utf-8 -*-\n")
        out.write("// data/d_sinirlar_afrika.js — D/E/C KATEGORİSİ SINIRLAR · Sahra altı Afrika · 29 Ekim 1923\n")
        out.write("// D4-AFRIKA · 16 Eylül 2026 · şema denetim/SEMA-D-0916.md + oturumlar/GORUNUM-ABCD-0916.md (A-F)\n")
        out.write("// envanter+rapor denetim/D4-AFRIKA-0916.md · üretici denetim/ARAC-D4-AFRIKA-URET-0916.py\n")
        out.write("// 🔴 ELLE DÜZENLEME — yeniden üret. `sinif` alanı YENİ taksonomi: F>E>D>C>YOK (GORUNUM-ABCD-0916.md üst bölüm)\n")
        out.write("// ADIM 0 (ilk tur): yalnız değerlendirdiğim ~%40'lık kesinlik yüksek/orta parçalar. Kalan kalemler\n")
        out.write("// denetim/D4-AFRIKA-0916.md §5'te 'bulunamadı/ölçülemedi' diye kayıtlı, ikinci tur bekliyor.\n")
        out.write("\nwindow.D_SINIRLAR_AFRIKA = ")
        out.write(json.dumps(cikan, ensure_ascii=False, indent=None, separators=(",", ":")))
        out.write(";\n")

    print("yazildi:", CIKTI)
    print("kayit sayisi:", len(cikan))
    print("geometrisiz (cift bulunamadi):", atlanan)
    sinif_sayim = {}
    for k in cikan:
        sinif_sayim[k["sinif"]] = sinif_sayim.get(k["sinif"], 0) + 1
    print("sinif dagilimi:", sinif_sayim)


if __name__ == "__main__":
    uret()
