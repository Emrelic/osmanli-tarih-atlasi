# -*- coding: utf-8 -*-
"""SINIR-D-AFRIKA-0077 — data/d_sinirlar_afrika.js'e IBS dayanaklı yeni kayıt ekler.

24 Eylül 2026. Şartname oturumlar/SINIR-DUNYA-0077.md.
D4-AFRIKA'nın üreticisine (denetim/ARAC-D4-AFRIKA-URET-0916.py) DOKUNMAZ: onun
geometri/sol_taraf fonksiyonlarını içe aktarır, mevcut dosyayı okur, EK listesindeki
kayıtları aynı id varsa değiştirir yoksa sona ekler. Mevcut 41 kayda dokunmaz.

Geometri: veri-kaynak/d_bugunku_sinirlar.geojson (bugünkü hat, VEKİL) — yalnız IBS
metni hattın 1923'ten bu yana değişmediğini söylüyorsa (degisti.deger=False) E yazılır.

Kullanım:  py denetim/SINIR-D-AFRIKA-0077-ek.py [--kuru]
"""
import json
import os
import re
import sys
import importlib.util

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
VERI = os.path.join(KOK, "data", "d_sinirlar_afrika.js")

_spec = importlib.util.spec_from_file_location(
    "d4uret", os.path.join(KOK, "denetim", "ARAC-D4-AFRIKA-URET-0916.py"))
d4 = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(d4)

IBS = "https://library.law.fsu.edu/Digital-Collections/LimitsinSeas/pdf/{}.pdf"
GEO_NOT = ("Natural Earth 10m admin-0 (bugünkü sınır, D-GEOARAC) — IBS 'değişmedi' "
           "beyanına dayanan VEKİL (SINIR-D-AFRIKA-0077)")

# Her kayıt: cift (d_bugunku anahtarı "A-B"), iso_kunye {ISO: künye id}.
# parca: None = en uzun parça; sayı = o parca_no.
# Metin kaynağı: IBS PDF'leri (FSU), pdftotext ile okundu — tarama raporu
# denetim/SINIR-D-AFRIKA-0077-ibs.md; alıntılar IBS metninden kelimesi kelimesine.
# `f` kuralı D4-AFRIKA'nınkiyle aynı: hattın hukukî dayanağı ile taraf künyesinin
# kuruluşunun GEÇ olanı. `t` = 1923-10-29 pencere sonu (sınırın sonu DEĞİL).
# Taraf künyesi olmayan sömürge (Uganda, İngiliz/Fransız Somalisi, Eritre, Svaziland):
# D4-AFRIKA'nın beyanlı geçici konvansiyonu — metropol künyesi, `not`a yazılır.
T_SON = "1923-10-29"
FR, IT, GB = "fransa-cumhuriyet", "italya", "ingiltere"
METROPOL_NOT = ("Taraf künyesi yok: {kol} için devletler.js'te künye bulunmadı — D4-AFRIKA'nın "
                "beyanlı geçici konvansiyonuyla metropol künyesi ({met}) yazıldı.")


def ibs(no, baslik, yil):
    return "IBS No. %s %s (ABD Dışişleri Bakanlığı, Office of the Geographer, %s)" % (no, baslik, yil)


def dyk(ad, tarih, no, baslik, yil, alinti, tur="antlaşma"):
    return {"ad": ad, "tarih": tarih, "tur": tur, "kaynak": ibs(no, baslik, yil),
            "url": IBS.format("ibs%03d" % int(str(no).split()[0])), "alinti": alinti}


def degismedi(no, gerekce):
    return {"deger": False, "kaynak": "IBS No. %s" % no, "not": gerekce}


def degisti(no, gerekce):
    return {"deger": True, "kaynak": "IBS No. %s" % no, "not": gerekce}


EK = [
    # ---- Afrika Boynuzu: Habeşistan (bağımsız, kendi gövdesi var) ----------------
    dict(id="d1923-habesistan-fransiz-somalisi", cift="DJI-ETH",
         iso_kunye={"DJI": FR, "ETH": "habesistan"}, f="1897-03-20", t=T_SON, sinif="E",
         dayanak=[dyk("Habeşistan–Fransa sözleşmesi (Addis Ababa)", "1897-03-20", 154,
                      "Djibouti – Ethiopia Boundary", 1976,
                      "A convention of March 20, 1897, between the Empire of Ethiopia and France delimited")],
         degisti=degismedi(154, "1945–55 komisyonu hattı 'in conformity with the convention of March 20, 1897' "
                                "demarke etti — demarkasyon, toprak değişimi değil."),
         tahdit={"t": "1955-01-01", "not": "demarkasyon 1945–1955 (IBS 154); gün bulunamadı"},
         kesinlik_km=5.0, kesinlik_not="bugünkü hat vekil; 1923'te sahada işaretli değildi",
         not_=METROPOL_NOT.format(kol="Fransız Somalisi", met=FR)),
    dict(id="d1923-habesistan-ingiliz-somalisi", cift="ETH-SOL",
         iso_kunye={"ETH": "habesistan", "SOL": GB}, f="1897-05-14", t=T_SON, sinif="E",
         dayanak=[dyk("İngiltere–Habeşistan antlaşması, Ek 3", "1897-05-14", 153,
                      "Ethiopia – Somalia Boundary", 1978,
                      "presently in effect as the delimitation of a sector of the Ethiopia-Somalia boundary")],
         degisti=degismedi(153, "Ek 3 bugün de bu kesimin delimitasyonu (IBS 153). IBS metninde tarih "
                                "'May 14, 1987' diye dizgi hatası var; 1897 kastediliyor (aynı metinde 1897 antlaşması)."),
         tahdit={"t": "1934-01-01", "not": "demarkasyon 1931–34 (IBS 153)"},
         kesinlik_km=5.0, kesinlik_not="bugünkü hat vekil",
         not_=METROPOL_NOT.format(kol="İngiliz Somalisi", met=GB)),
    dict(id="d1923-eritre-habesistan", cift="ERI-ETH",
         iso_kunye={"ERI": IT, "ETH": "habesistan"}, f="1908-05-16", t=T_SON, sinif="E",
         dayanak=[dyk("İtalya–Habeşistan sözleşmesi (doğu kesim, kıyıdan 60 km paralel)", "1908-05-16", 154,
                      "Djibouti – Ethiopia Boundary", 1976,
                      "On May 16, 1908, an Ethio-Italian convention stated that"),
                  dyk("İtalya–Habeşistan antlaşması (batı kesim)", "1900-07-10", 154,
                      "Djibouti – Ethiopia Boundary", 1976,
                      "On July 10, 1900, an Ethio-Italian treaty delimited a boundary between Eritrea and")],
         degisti=degismedi(154, "IBS 154 1923 sonrası değişiklik yazmıyor; Eritre'ye ayrı IBS yok (dizi 1985'te bitiyor). "
                                "Bugünkü hat vekil — 1998–2002 ihtilaf bölgelerinde (Badme) sapma ÖLÇÜLMEDİ."),
         tahdit={"t": None, "not": "1923'te sahada demarke değil; bulunamadı"},
         kesinlik_km=10.0, kesinlik_not="bugünkü hat vekil; ihtilaflı kesimlerde sapma ölçülmedi",
         not_=METROPOL_NOT.format(kol="İtalyan Eritresi", met=IT)),
    dict(id="d1923-eritre-fransiz-somalisi", cift="DJI-ERI",
         iso_kunye={"DJI": FR, "ERI": IT}, f="1901-07-10", t=T_SON, sinif="E",
         dayanak=[dyk("Fransa–İtalya protokolü (Ras Doumeira–Daddato)", "1901-07-10", 154,
                      "Djibouti – Ethiopia Boundary", 1976,
                      "A Franco-Italian protocol of July 10, 1901, delimited the Eritrea-French Somaliland boundary")],
         degisti=degismedi(154, "1935/7 Ocak 1937 devir antlaşması Fransız Senatosu'nca onaylanmadı (IBS 154)."),
         tahdit={"t": None, "not": "bulunamadı"},
         kesinlik_km=5.0, kesinlik_not="bugünkü hat vekil",
         not_=METROPOL_NOT.format(kol="Eritre ve Fransız Somalisi", met=IT + " / " + FR)),
    dict(id="d1923-fransiz-ingiliz-somalisi", cift="DJI-SOL",
         iso_kunye={"DJI": FR, "SOL": GB}, f="1888-02-09", t=T_SON, sinif="E",
         dayanak=[dyk("İngiltere–Fransa anlaşması (2–9 Şubat 1888)", "1888-02-09", "87 (Revised)",
                      "Djibouti – Somalia Boundary", 1979,
                      "The Anglo-French agreement of 1888 determines the alignment of the present")],
         degisti=degismedi("87 (Revised)", "IBS: 1888 anlaşması bugünkü hizayı belirler."),
         tahdit={"t": None, "not": "bulunamadı"},
         kesinlik_km=3.0, kesinlik_not="bugünkü hat vekil; IBS hizayı 1888'e bağlıyor",
         not_=METROPOL_NOT.format(kol="Fransız ve İngiliz Somalisi", met=FR + " / " + GB)),
    dict(id="d1923-ingiliz-italyan-somalisi", cift="SOL-SOM",
         iso_kunye={"SOL": GB, "SOM": IT}, f="1894-05-05", t=T_SON, sinif="E",
         dayanak=[dyk("İngiltere–İtalya antlaşması (8°K paraleli–48°D)", "1894-05-05", 153,
                      "Ethiopia – Somalia Boundary", 1978,
                      "on reaching the 8th degree of north latitude the line follows that parallel")],
         degisti=degismedi(153, "1929–30 dikmelerle demarke edildi; 1960'ta iç sınır oldu (IBS 153)."),
         tahdit={"t": "1930-01-01", "not": "demarkasyon 1929–30 (IBS 153)"},
         kesinlik_km=5.0, kesinlik_not="bugünkü (Somaliland–Somali) hat vekil",
         not_=METROPOL_NOT.format(kol="İngiliz ve İtalyan Somalisi", met=GB + " / " + IT)),
    # Kenya–Habeşistan: 1907 hattı 1970 antlaşmasıyla değişti ⇒ bugünkü geometri 1923'ü vermez ⇒ C
    dict(id="d1923-kenya-habesistan", cift="ETH-KEN",
         iso_kunye={"ETH": "habesistan", "KEN": "ingiliz-kenya-kolonisi"}, f="1907-12-06", t=T_SON, sinif="C",
         dayanak=[dyk("İngiltere–Habeşistan anlaşması", "1907-12-06", 152,
                      "Ethiopia – Kenya Boundary", 1975,
                      "An Anglo-Ethiopian agreement of December 6, 1907, delimited a boundary")],
         degisti=degisti(152, "9 Haziran 1970 antlaşması önceki bütün antlaşmaları kaldırıp bugünkü hattı belirledi; "
                              "1923 hattı (1907) bugünkünden farklı — sapma ÖLÇÜLMEDİ."),
         tahdit={"t": None, "not": "1923'te demarke değil"},
         kesinlik_km=30.0, kesinlik_not="C: bugünkü hat yalnız kaba vekil; 1907 hattının koordinatı elde yok",
         not_="C sınıfı: belge var (1907) ama koordinat kaba. Kenya'nın 1923 kuzeyi (Turkana) Uganda'daydı (IBS 139) — o kesim de bugünkü geometride Kenya görünür."),
    # Sudan–Habeşistan: yalnız IBS 152 dipnotu — C
    dict(id="d1923-sudan-habesistan", cift="ETH-SDN",
         iso_kunye={"ETH": "habesistan", "SDN": "ingiliz-sudani"}, f="1902-05-15", t=T_SON, sinif="C",
         dayanak=[dyk("İngiltere–Habeşistan antlaşması (Sudan sınırı)", "1902-05-15", 152,
                      "Ethiopia – Kenya Boundary", 1975,
                      "An Anglo-Ethiopian treaty of May 15, 1902, had delimited the Ethiopian-Sudan boundary")],
         degisti={"deger": None, "kaynak": "bulunamadı",
                  "not": "Sudan–Etiyopya için ayrı IBS yok; 1902 hattının bugünküyle ilişkisi ölçülemedi."},
         tahdit={"t": None, "not": "bulunamadı"},
         kesinlik_km=25.0, kesinlik_not="C: bugünkü hat kaba vekil",
         not_="C sınıfı: tek dayanak IBS 152'nin dipnotu (antlaşma adı + günü)."),
    dict(id="d1923-sudan-habesistan-guney", cift="ETH-SSD",
         iso_kunye={"ETH": "habesistan", "SSD": "ingiliz-sudani"}, f="1902-05-15", t=T_SON, sinif="C",
         dayanak=[dyk("İngiltere–Habeşistan antlaşması (Sudan sınırı, 6°K 35°D'ye kadar)", "1902-05-15", 152,
                      "Ethiopia – Kenya Boundary", 1975,
                      "southward to the point of 6° N. and 35° E.")],
         degisti={"deger": None, "kaynak": "bulunamadı",
                  "not": "Sudan–Etiyopya için ayrı IBS yok; 1902 hattının bugünküyle ilişkisi ölçülemedi. Bugünkü "
                         "hattın 6°K'nin güneyi (Ilemi yöresi) 1902 antlaşmasının kapsamı dışında."},
         tahdit={"t": None, "not": "bulunamadı"},
         kesinlik_km=25.0, kesinlik_not="C: bugünkü (Güney Sudan–Etiyopya) hat kaba vekil",
         not_="C sınıfı: tek dayanak IBS 152'nin dipnotu."),
    # ---- Orta Afrika ------------------------------------------------------------
    dict(id="d1923-sudan-belcika-kongo", cift="COD-SSD",
         iso_kunye={"COD": "belcika-kongo", "SSD": "ingiliz-sudani"}, f="1910-06-16", t=T_SON, sinif="E",
         dayanak=[dyk("İngiltere–Kral Leopold anlaşması (Kongo–Nil su bölümü çizgisi)", "1894-05-12", 106,
                      "Sudan – Zaire Boundary", 1978,
                      "The Sudan-Zaire boundary follows the drainage divide or watershed between the Congo"),
                  dyk("Lado Enklavı'nın Anglo-Mısır Sudanı'na devri (14 Mayıs 1910 anlaşması)", "1910-06-16", 106,
                      "Sudan – Zaire Boundary", 1978,
                      "transferred to the Anglo-Egyptian Sudan on June 16, 1910.", tur="devir")],
         degisti=degismedi(106, "IBS 106 1910 sonrası değişiklik yazmıyor; hat su bölümü çizgisi."),
         tahdit={"t": None, "not": "bulunamadı"},
         kesinlik_km=5.0, kesinlik_not="bugünkü (Güney Sudan–KDC) hat vekil; su bölümü çizgisi",
         not_="f = Lado devri (1910-06-16): öncesinde Lado Enklavı Kongo kiralığındaydı, hat farklıydı."),
    dict(id="d1923-uganda-belcika-kongo", cift="COD-UGA",
         iso_kunye={"COD": "belcika-kongo", "UGA": GB}, f="1915-02-03", t=T_SON, sinif="E",
         dayanak=[dyk("İngiltere–Belçika anlaşması", "1915-02-03", 108, "Uganda – Zaire Boundary", 1970,
                      "The Anglo-Belgian agreement of February 3, 1915, affords the alignment")],
         degisti=degismedi(108, "1915 anlaşması bugünkü hizayı verir (IBS 108)."),
         tahdit={"t": None, "not": "bulunamadı"},
         kesinlik_km=3.0, kesinlik_not="bugünkü hat vekil",
         not_=METROPOL_NOT.format(kol="Uganda", met=GB)),
    dict(id="d1923-tanganika-belcika-kongo", cift="COD-TZA",
         iso_kunye={"COD": "belcika-kongo", "TZA": "ingiliz-tanganika-mandasi"}, f="1922-07-20", t=T_SON, sinif="E",
         dayanak=[dyk("Kongo Serbest Devleti deklarasyonu (Tanganika gölü orta hattı)", "1885-08-01", 51,
                      "Congo (Leopoldville) – Tanzania Boundary", 1965,
                      "The Congo (Leopoldville) - Tanzania boundary is the median line of Lake Tanganyika.")],
         degisti=degismedi(51, "Hat baştan beri göl orta hattı; IBS 51 değişiklik yazmıyor."),
         tahdit={"t": None, "not": "göl içi; demarkasyon yok"},
         kesinlik_km=3.0, kesinlik_not="göl orta hattı, bugünkü hat vekil",
         not_="f = ingiliz-tanganika-mandasi künyesinin kuruluşu (D4-AFRIKA kuralı); o gün bir IBS kaynağına "
              "dayanmıyor, künyenin kendi kaynağına dayanıyor. Hat 1885'ten beri aynı."),
    dict(id="d1923-tanganika-mozambik", cift="MOZ-TZA",
         iso_kunye={"MOZ": "portekiz-mozambik", "TZA": "ingiliz-tanganika-mandasi"}, f="1922-07-20", t=T_SON, sinif="E",
         dayanak=[dyk("Almanya–Portekiz deklarasyonu (Lizbon, Rovuma)", "1886-12-30", 39,
                      "Mozambique – Tanzania Boundary", 1964,
                      "Declaration signed at Lisbon on December 30, 1886, a boundary was established"),
                  dyk("Kionga üçgeninin Portekiz'e iadesi (Yüksek Konsey)", "1919-05-06", 39,
                      "Mozambique – Tanzania Boundary", 1964,
                      "restored the Kionga triangle to Portugal, and the Ruvuma again", tur="karar")],
         degisti=degismedi(39, "1919'dan beri Rovuma ağzına kadar sınır; 1936–37 notaları yalnız nehir adaları."),
         tahdit={"t": "1907-01-01", "not": "1907 ortak demarkasyon (IBS 39); gün bulunamadı"},
         kesinlik_km=3.0, kesinlik_not="bugünkü hat vekil (Rovuma)",
         not_="f = ingiliz-tanganika-mandasi künyesinin kuruluşu (D4-AFRIKA kuralı)."),
    # ---- Güney Afrika Birliği ---------------------------------------------------
    dict(id="d1923-mozambik-guney-afrika", cift="MOZ-ZAF",
         iso_kunye={"MOZ": "portekiz-mozambik", "ZAF": "guney-afrika-birligi"}, f="1910-05-31", t=T_SON, sinif="E",
         dayanak=[dyk("Portekiz–Güney Afrika Cumhuriyeti antlaşması (kuzey kesim)", "1869-07-29", 133,
                      "Mozambique – South Africa Boundary", 1973,
                      "established the northern part of the present Mozambique-South Africa boundary"),
                  dyk("İngiltere–Portekiz antlaşması (güney kesim)", "1891-06-11", 133,
                      "Mozambique – South Africa Boundary", 1973,
                      "In Article III of an Anglo-Portuguese treaty of June 11, 1891")],
         degisti=degismedi(133, "6 Ekim 1927 notaları demarkasyon ve üçlü nokta — toprak değişimi yazmıyor."),
         tahdit={"t": "1927-10-06", "not": "Groot-Shingwidzi–Limpopo kesimi demarkasyonu (IBS 133)"},
         kesinlik_km=3.0, kesinlik_not="bugünkü hat vekil",
         not_="f = guney-afrika-birligi künyesinin kuruluşu. ⚠ Bu künye 1923'te haritada GÖVDE DEĞİL (bölge ingiltere boyalı) — yaslama için harita: eşlemesi gerekir."),
    dict(id="d1923-guneyrodezya-guney-afrika", cift="ZAF-ZWE",
         iso_kunye={"ZAF": "guney-afrika-birligi", "ZWE": "ingiliz-guney-rodezya"}, f="1910-05-31", t=T_SON, sinif="E",
         dayanak=[dyk("Pretoria sözleşmesi (Limpopo)", "1881-08-03", 117,
                      "Rhodesia – South Africa Boundary", 1971,
                      "The Limpopo river as the present-day South Africa-Southern Rhodesia boundary was")],
         degisti=degismedi(117, "IBS: bugünkü sınır 1881 sözleşmesiyle kuruldu."),
         tahdit={"t": None, "not": "nehir orta hattı"},
         kesinlik_km=3.0, kesinlik_not="bugünkü hat vekil (Limpopo)",
         not_="f = guney-afrika-birligi künyesinin kuruluşu. Aynı metropol boyası (ingiltere/ingiltere) — renk ayırmaz."),
    dict(id="d1923-becuanaland-guney-afrika", cift="BWA-ZAF",
         iso_kunye={"BWA": "ingiliz-becuanaland", "ZAF": "guney-afrika-birligi"}, f="1910-05-31", t=T_SON, sinif="E",
         dayanak=[dyk("Pretoria sözleşmesi (doğu kesim)", "1881-08-03", 122,
                      "Botswana – South Africa Boundary", 1972,
                      "the Pretoria convention established"),
                  dyk("Order in Council (batı kesim: Nossob–Molopo)", "1895-10-03", 122,
                      "Botswana – South Africa Boundary", 1972,
                      "established by a British Order in Council of October 3, 1895", tur="idari karar")],
         degisti=degismedi(122, "IBS 122 1895 sonrası değişiklik yazmıyor."),
         tahdit={"t": None, "not": "bulunamadı"},
         kesinlik_km=3.0, kesinlik_not="bugünkü hat vekil",
         not_="f = guney-afrika-birligi künyesinin kuruluşu. Aynı metropol boyası — renk ayırmaz."),
    dict(id="d1923-mozambik-svaziland", cift="MOZ-SWZ",
         iso_kunye={"MOZ": "portekiz-mozambik", "SWZ": GB}, f="1903-01-01", t=T_SON, sinif="C",
         dayanak=[dyk("1888 dörtlü karma komisyonu (Lebombo doruğu)", "1888-01-01", 135,
                      "Mozambique – Swaziland Boundary", 1973,
                      "In 1888 a joint commission, including representatives of the United Kingdom, Portugal")],
         degisti=degisti(135, "1923'te Krogh–Mpundweni kesimi ihtilaflıydı; 1925 yeniden demarkasyon, 6 Ekim 1927 notaları."),
         tahdit={"t": "1927-10-06", "not": "ihtilaflı kesim 1927'de çözüldü (IBS 135)"},
         kesinlik_km=10.0, kesinlik_not="C: 1923'te bir kesim ihtilaflı",
         not_=METROPOL_NOT.format(kol="Svaziland", met=GB) + " f = svazi künyesinin bitişi (1903-01-01, İngiliz idaresi); "
              "komisyon günü bilinmiyor → 1888-01-01 (yıl)."),
    # ---- Batı Afrika ------------------------------------------------------------
    dict(id="d1923-dahomey-nijerya", cift="BEN-NGA",
         iso_kunye={"BEN": "fransiz-bati-afrika", "NGA": "ingiliz-nijerya"}, f="1906-10-19", t=T_SON, sinif="E",
         dayanak=[dyk("İngiltere–Fransa anlaşması", "1906-10-19", 91, "Dahomey – Nigeria Boundary", 1969,
                      "An Anglo - French agreement of October 19, 1906 established the present Dahomey")],
         degisti=degismedi(91, "1906 + 20 Temmuz 1912 demarkasyon protokolü bugünkü hattı verir."),
         tahdit={"t": "1912-07-20", "not": "demarkasyon protokolü (IBS 91)"},
         kesinlik_km=3.0, kesinlik_not="bugünkü hat vekil", not_=""),
    dict(id="d1923-nijer-nijerya", cift="NER-NGA",
         iso_kunye={"NER": "fransiz-bati-afrika", "NGA": "ingiliz-nijerya"}, f="1910-02-19", t=T_SON, sinif="E",
         dayanak=[dyk("İngiltere–Fransa demarkasyon anlaşması", "1910-02-19", 93, "Niger – Nigeria Boundary", 1969,
                      "The Anglo - French demarcation agreement of February 19, 1910 affords the present")],
         degisti=degismedi(93, "1910 anlaşması bugünkü hizayı verir."),
         tahdit={"t": "1910-02-19", "not": "demarkasyon anlaşması"},
         kesinlik_km=3.0, kesinlik_not="bugünkü hat vekil",
         not_="1906 delimitasyonundan 1910'a kadar hat bugünkünden kısmen farklıydı; o pencere yazılmadı (A/B'ye kalır)."),
    dict(id="d1923-portekiz-gine-senegal", cift="GNB-SEN",
         iso_kunye={"GNB": "portekiz-gine", "SEN": "fransiz-bati-afrika"}, f="1906-07-12", t=T_SON, sinif="E",
         dayanak=[dyk("Paris notaları (1904 ve 6–12 Temmuz 1906)", "1906-07-12", 141,
                      "Guinea-Bissau (Portuguese Guinea) – Senegal Boundary", 1974,
                      "it affords the present alignment of the Portuguese-Senegal boundary"),
                  dyk("Fransa–Portekiz sözleşmesi (Paris)", "1886-05-12", 141,
                      "Guinea-Bissau (Portuguese Guinea) – Senegal Boundary", 1974, "")],
         degisti=degismedi(141, "1886 sözleşmesi + 1904/1906 notaları bugünkü hizayı verir."),
         tahdit={"t": "1906-07-12", "not": "1900–1905 demarkasyon, 1906 notaları"},
         kesinlik_km=3.0, kesinlik_not="bugünkü hat vekil", not_=""),
    # Sudan–Uganda: 1926 değişikliği ⇒ C
    dict(id="d1923-sudan-uganda", cift="SSD-UGA",
         iso_kunye={"SSD": "ingiliz-sudani", "UGA": GB}, f="1914-01-01", t=T_SON, sinif="C",
         dayanak=[dyk("1913 komisyon hattı, 1 Ocak 1914'te yürürlük (21 Nisan 1914 ilan)", "1914-01-01", 104,
                      "Sudan – Uganda Boundary", 1970,
                      "On January 1, 1914, sizable transfers of territory were made", tur="idari karar")],
         degisti=degisti(104, "1926'da Madi Opei kuzeyi Sudan'a geçti; doğu ucu Kenya–Sudan oldu ⇒ bugünkü hat 1923'ü vermez."),
         tahdit={"t": None, "not": "bulunamadı"},
         kesinlik_km=25.0, kesinlik_not="C: bugünkü hat kaba vekil (1926 değişikliği)",
         not_=METROPOL_NOT.format(kol="Uganda", met=GB)),
]

# Mevcut kayıtlarda alan düzeltmesi (id → alanlar). Geometriye dokunulmaz.
DUZELT = {
    "d1923-angola-belcika-kongo": dict(
        dayanak=[dyk("Portekiz–Uluslararası Kongo Derneği sözleşmesi", "1885-02-14", 144,
                     "Angola – Zaire Boundary", 1974, ""),
                 dyk("Brüksel ve Lizbon sözleşmeleri", "1891-05-25", 144, "Angola – Zaire Boundary", 1974, ""),
                 dyk("Brüksel protokolü (Kabinda ve Noqui–Kwango)", "1913-07-05", 144,
                     "Angola – Zaire Boundary", 1974, "1913, which affords the present alignment")],
        degisti=degisti(144, "22 Temmuz 1927 toprak takası: Noqui doğusunda küçük alan Portekiz'den Belçika'ya, "
                             "Luao batısında 'relatively large area' Belçika'dan Portekiz'e ⇒ 1923 hattı Dilolo/Luao "
                             "ve Noqui'de bugünkünden farklı; sapma ÖLÇÜLMEDİ."),
        kesinlik_km=30.0,
        kesinlik_not="bugünkü hat vekil; Luao ve Noqui kesimlerinde 1927 takasından önceki hat farklı (IBS 144)",
    ),
}


def oku():
    metin = open(VERI, encoding="utf-8").read()
    bas = metin.index("window.D_SINIRLAR_AFRIKA = ")
    govde = metin[bas + len("window.D_SINIRLAR_AFRIKA = "):].rstrip().rstrip(";")
    return metin[:bas], json.loads(govde)


def parca_sec(feats, parca):
    if parca is None:
        return d4.parca_birlestir(feats)
    for f in feats:
        if f["properties"]["parca_no"] == parca:
            return f
    raise SystemExit("parça yok: %s" % parca)


def kur(k, bugunku, poly):
    a, b = k["cift"].split("-")
    feats = bugunku.get(k["cift"])
    if not feats:
        raise SystemExit("çift yok: " + k["cift"])
    f = parca_sec(feats, k.get("parca"))
    coords = f["geometry"]["coordinates"]
    st = d4.sol_taraf_bul(coords, a, b, poly)
    if st is None:
        raise SystemExit("sol_taraf bulunamadı: " + k["id"])
    iso = k["iso_kunye"]
    kayit = {
        "id": k["id"],
        "taraflar": [iso[a], iso[b]],
        "f": k["f"], "t": k["t"], "sinif": k["sinif"],
        "sol_taraf": iso[st],
        "hat": [[round(x, 4), round(y, 4)] for x, y in coords],
        "uzunluk_km": round(f["properties"]["uzunluk_km"], 1),
        "geometri_kaynagi": GEO_NOT,
        "degisti": k["degisti"],
        "tahdit": k.get("tahdit", {"t": None, "not": "bulunamadı"}),
        "kesinlik_km": k["kesinlik_km"],
        "kesinlik_not": k.get("kesinlik_not", ""),
        "dayanak": k["dayanak"],
        "not": k.get("not_", ""),
    }
    return kayit


def main():
    kuru = "--kuru" in sys.argv
    ust, kayitlar = oku()
    bugunku = d4.yukle_bugunku()
    poly = d4.yukle_ulke_poligonlari()
    idx = {r["id"]: i for i, r in enumerate(kayitlar)}
    yeni = degisen = 0
    for k in EK:
        r = kur(k, bugunku, poly)
        if r["id"] in idx:
            kayitlar[idx[r["id"]]] = r
            degisen += 1
        else:
            kayitlar.append(r)
            yeni += 1
        print("  %-48s %s  sol=%s  %s km" % (r["id"], r["sinif"], r["sol_taraf"], r["uzunluk_km"]))
    for kid, alanlar in DUZELT.items():
        if kid not in idx:
            raise SystemExit("düzeltilecek kayıt yok: " + kid)
        kayitlar[idx[kid]].update(alanlar)
        degisen += 1
        print("  %-48s düzeltildi: %s" % (kid, ", ".join(sorted(alanlar))))
    ust = re.sub(r"// SINIR-D-AFRIKA-0077 .*\n", "", ust)
    ek_satir = ("// SINIR-D-AFRIKA-0077 · 24 Eylül 2026 · IBS dayanaklı ek kayıtlar "
                "denetim/SINIR-D-AFRIKA-0077-ek.py ile eklendi (bu betik yeniden koşulabilir)\n")
    ust = ust.rstrip("\n") + "\n" + ek_satir + "\n"
    print("yeni %d · değişen %d · toplam %d" % (yeni, degisen, len(kayitlar)))
    if kuru:
        return
    with open(VERI, "w", encoding="utf-8", newline="\n") as o:
        o.write(ust)
        o.write("window.D_SINIRLAR_AFRIKA = ")
        o.write(json.dumps(kayitlar, ensure_ascii=False, separators=(",", ":")))
        o.write(";\n")


if __name__ == "__main__":
    main()
