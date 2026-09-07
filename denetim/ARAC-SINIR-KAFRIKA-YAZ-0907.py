# -*- coding: utf-8 -*-
"""KAYIT ÜRETİCİ — SINIR-KAFRIKA-0907

`denetim/SINIR-HUKUKI-KAFRIKA-0907.json` dosyasini uretir.
Hukumler ELLE yazilir (asagidaki HUKUM sozlugu); geometri MEKANIK cikarilir.

🔴 `hal` yalniz ortak sartnamenin uc kovasini kullanir (hukuki ¦ bulunamadi
   ¦ olculemedi). Dorduncu kova sorusu 1.MURAT'a soruldu (M-3180), cevap
   gelmedi ⇒ semayi TEK BASIMA GENISLETMIYORUM. Onun yerine AYRI bir alan:
      nitelik_1923 : "uluslararasi" ¦ "ic-idari" ¦ "yok"
   Boylece bilgi bir `if` ile sorulabilir olur ve sema bozulmaz; kova
   acilirsa mekanik olarak esleseninir.
"""
import io
import json
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

from shapely.geometry import shape, MultiLineString
from shapely.ops import linemerge
from shapely.validation import make_valid

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CAPA = "1923-10-29"

IBS = ("U.S. Department of State, Bureau of Intelligence and Research, "
       "Office of the Geographer, 'International Boundary Study' No. %s "
       "(nusha: Florida State University College of Law Research Center)")

# --------------------------------------------------------------------------
# HUKUMLER — her biri okunmus bir kaynaga dayanir; alintilar VERBATIM.
# --------------------------------------------------------------------------
HUKUM = {
 ("Libya", "Tunisia"): dict(
   hal="hukuki", nitelik_1923="uluslararasi",
   dayanak="Fransiz-Turk sozlesmesi, 'Convention Relative to the Frontier "
           "between the Regency of Tunis and the Vilayet of Tripoli' "
           "(Trablus'ta imzalandi); 1910-11'de sutunlarla demarke edildi",
   dayanak_t="1910-05-19", kaynak=IBS % "121",
   alinti="On May 19, 1910, a Franco-Turkish convention delimited the "
          "present-day Libya-Tunisia boundary which was demarcated with "
          "pillars by a joint commission in 1910-11.",
   kimlik_1923_a="italya", kimlik_1923_b="tunus (adsiz tabiiyet — olculdu)",
   not_="🔴 KAYNAK CELISKISI: ibs001 ayni sozlesmeye bes kez '12 May 1910' "
        "der. ibs121 dort kez '19 May' der VE belgenin BASLIGINI, imza "
        "YERINI verip Madde 1'i alintilar ⇒ agirlik ibs121'de. "
        "'12 May' SILINMEDI, kayda gecti."),

 ("Libya", "Niger"): dict(
   hal="hukuki", nitelik_1923="uluslararasi",
   dayanak="Fransiz-Italyan 1919 duzenlemesi (Cezayir uclu noktasi–Tummo) "
           "ve 1898/1899/1902 akitlerine gore olusan hat (Tummo–Cad uclu "
           "noktasi); 1955 Fransiz-Libya Antlasmasi Madde 3 ile TEYIT",
   dayanak_t="1919-09-08", kaynak=IBS % "2",
   alinti="Since the Franco-Italian Agreement of 1935 was never ratified, "
          "the alignment of the present Libya-Niger boundary is determined "
          "by the accord of 1919 and the conventional boundary as approved "
          "by the Franco-Libya Treaty of 1955.",
   kimlik_1923_a="italya", kimlik_1923_b="fransa-cumhuriyet",
   not_="1935 Fransiz-Italyan anlasmasi hatti degistirecekti ama HIC "
        "ONAYLANMADI ⇒ 1923'teki hat bugunku hattir."),

 ("Chad", "Libya"): dict(
   hal="hukuki", nitelik_1923="uluslararasi",
   dayanak="Ingiliz-Fransiz Beyani (21 Mart 1899) ve Ingiliz-Fransiz "
           "Sozlesmesi (8 Eylul 1919); 1955 Fransiz-Libya Antlasmasi "
           "Madde 3 ile teyit; UAD 3 Subat 1994 kararyla dogrulandi",
   dayanak_t="1919-09-08", kaynak=IBS % "3 (Revised)",
   alinti="In accordance with Article 3 of the Franco-Libyan Treaty of "
          "August 10, 1955 ... (1) Anglo-French Convention of June 14, "
          "1898; ... Anglo-French Declaration of March 21, 1899; ... and "
          "(4) Anglo-French Convention of September 8, 1919.",
   kimlik_1923_a="fransa-cumhuriyet", kimlik_1923_b="italya",
   not_="🔴 DEVRALINAN ONCUL CURUDU. Sevkim 'Aouzou 1994 — NE bugunku "
        "cizgiyi tasiyor' diyordu ve bunu bir DEGISIM adayi olarak "
        "isaretlemisti. Olcum tersini gosterdi: 1935 Fransiz-Italyan "
        "anlasmasi (Aouzou'yu Italya'ya verecek olan) HIC ONAYLANMADI, "
        "ve UAD 1994'te 1955 antlasmasini — yani 1899/1919 hattini — "
        "teyit etti. ⇒ 1994 hatti DEGISTIRMEDI, GERI GETIRDI. "
        "Bugunku cizgi 1923'te de yururlukteydi."),

 ("Algeria", "Mauritania"): dict(
   hal="hukuki", nitelik_1923="ic-idari",
   dayanak="Niamey Sozlesmesi (Fransiz ic idari sinir: Cezayir ile Fransiz "
           "Bati Afrikasi arasinda); 7 Haziran 1905 anlasmasini tamamlar",
   dayanak_t="1909-06-20", kaynak=IBS % "88 (Revised)",
   alinti="The Niamey convention of June 20, 1909, delimits the "
          "Algeria-Mauritania boundary by a straight line.",
   kimlik_1923_a="fransa-cumhuriyet", kimlik_1923_b="fransa-cumhuriyet",
   not_="1923'te ULUSLARARASI SINIR DEGIL: iki taraf da Fransa. Cizgi bir "
        "antlasmayla degil bir Fransiz idari sozlesmesiyle cizilmis."),

 ("Algeria", "Mali"): dict(
   hal="hukuki", nitelik_1923="ic-idari",
   dayanak="Niamey Sozlesmesi (Fransiz ic idari sinir); 7 Haziran 1905 "
           "anlasmasini tamamlar, 16 Agustos 1911'de onaylandi",
   dayanak_t="1909-06-20", kaynak=IBS % "96",
   alinti="In principle the boundary agreement of 1905 was completed by "
          "the Niamey Convention of June 20, 1909, which was approved by a "
          "decision of the French President du Conseil on August 16, 1911.",
   kimlik_1923_a="fransa-cumhuriyet", kimlik_1923_b="fransa-cumhuriyet",
   not_="🔴 ibs096 AYNI BELGEDE hem 'June 20' hem 'June 30, 1909' yazar. "
        "ibs084 · ibs088 · ibs099 ucu de 'June 20' ⇒ '30' dizgi hatasi. "
        "1923'te ULUSLARARASI SINIR DEGIL — iki taraf da Fransa."),

 ("Algeria", "Niger"): dict(
   hal="hukuki", nitelik_1923="ic-idari",
   dayanak="Niamey Sozlesmesi (Fransiz ic idari sinir)",
   dayanak_t="1909-06-20", kaynak=IBS % "99",
   alinti="The Niamey Convention of June 20, 1909 provides a general "
          "orientation only of the boundary between Algeria and Niger.",
   kimlik_1923_a="fransa-cumhuriyet", kimlik_1923_b="fransa-cumhuriyet",
   not_="⚠️ ibs099 ikinci Niamey sozlesmesini 'August 16, 1909' der; "
        "ibs084 ve ibs088 'August 26, 1909' der. BU COZULMEDI — ikinci "
        "sozlesmenin gunu `olculemedi`. Ana sozlesme (20 Haziran) "
        "dort belgede de ayni. 1923'te iki taraf da Fransa."),

 ("Algeria", "Western Sahara"): dict(
   hal="hukuki", nitelik_1923="uluslararasi",
   dayanak="Fransiz-Ispanyol sozlesmesi (Paris); 8°40' B meridyenini "
           "Fransiz ve Ispanyol nufuz alanlari arasinda sinir yapar",
   dayanak_t="1904-10-03", kaynak=IBS % "84 (Revised)",
   alinti="The meridian was established by the Franco-Spanish convention "
          "of 1904 as a line separating French and Spanish spheres of "
          "influence.",
   kimlik_1923_a="fransa-cumhuriyet", kimlik_1923_b="ispanya",
   not_="🟢 KAYNAGIN KENDI ICINDEKI CELISKI COZULDU: ibs088 govdesi "
        "'October 4, 1904' der, ama AYNI BELGENIN kaynakcasi 'Convention "
        "between France and Spain respecting Morocco. Paris, October 3, "
        "1904' der. ibs084 ve ibs009 da '3 Ekim'. ⇒ '4' bir dizgi hatasi."),

 ("Egypt", "Israel"): dict(
   hal="hukuki", nitelik_1923="uluslararasi",
   dayanak="Turk-Misir anlasmasi (Refah'ta imzalanip teati edildi); "
           "1912-14 arasinda sutunlarla demarke edildi",
   dayanak_t="1906-10-01", kaynak=IBS % "46",
   alinti="Agreement signed and exchanged at Rafah on October 1, 1906 ... "
          "and demarcated by pillars between 1912-14.",
   kimlik_1923_a="misir-kralligi", kimlik_1923_b="filistin-mandasi",
   not_="CIZGI 1906'dan beri ayni. DEGISEN sey cizgi degil KENARIN "
        "BOLUNMESI: 1923'te tek bir Misir–Filistin siniriydi; bugun NE "
        "onu Misir–Israil (204,1 km) ve Misir–Filistin/Gazze (12,4 km) "
        "diye IKIYE bolüyor, ve o bolunme 24 Subat 1949 Mutareke "
        "Anlasmasindan geliyor. ⇒ CIZGI 🟢, BOLUNME post-1923."),

 ("Egypt", "Palestine"): dict(
   hal="hukuki", nitelik_1923="uluslararasi",
   dayanak="Turk-Misir anlasmasi (Refah) — Misir–Israil ile AYNI cizgi; "
           "Gazze seridi ayrimi 1949 Genel Mutareke Anlasmasi",
   dayanak_t="1906-10-01", kaynak=IBS % "46",
   alinti="the boundary between the Gaza Strip was established on "
          "February 24, 1949 ... the Egypt-Palestine boundary delimited "
          "in 1906.",
   kimlik_1923_a="misir-kralligi", kimlik_1923_b="filistin-mandasi",
   not_="Bu 12,4 km, 1923'te ayri bir kenar DEGILDI — Misir–Filistin "
        "sinirinin bir parcasiydi."),

 ("Algeria", "Libya"): dict(
   hal="hukuki", nitelik_1923="uluslararasi", degisti=True,
   dayanak="1923'TE: Fransiz-Italyan 1919 duzenlemesi. BUGUN: Fransiz-Libya "
           "Antlasmasi (10 Agustos 1955) ve 26 Aralik 1956 Anlasmasi",
   dayanak_t="1956-12-26", kaynak=IBS % "1",
   alinti="Franco-Italian Arrangement of 1919 prevailed until the "
          "Franco-Libyan Agreement of ... changes are the result of the "
          "Franco-Libyan Agreement of 26 December 1956.",
   kimlik_1923_a="fransa-cumhuriyet", kimlik_1923_b="italya",
   not_="🟡 DEGISTI. Capa gununde yururlukte olan 1919 hattiydi; NE'nin "
        "cizdigi 1956 hattidir. 1923 icin ANTLASMA METNI ARANMALI "
        "(1919 Fransiz-Italyan duzenlemesi) — ben ARAMADIM."),

 ("Libya", "Sudan"): dict(
   hal="hukuki", nitelik_1923="uluslararasi", degisti=True,
   dayanak="1923'TE: 1899 Ingiliz-Fransiz Beyani + 1919 Sozlesmesi hatti. "
           "BUGUN: Italyan-Ingiliz-Misir Anlasmasi (Roma'da nota teatisiyle "
           "tamamlandi) — Sarra ucgeni Italya'ya gecti",
   dayanak_t="1934-07-20", kaynak=IBS % "10",
   alinti="The present boundary was established by the "
          "Italo-British-Egyptian Agreement of 1934. This agreement was "
          "completed at Rome on July 20, 1934, by means of an exchange of "
          "notes.",
   kimlik_1923_a="italya", kimlik_1923_b="ingiliz-sudani",
   not_="🟡 DEGISTI, ve capadan 10 yil 9 ay SONRA."),

 ("Chad", "Sudan"): dict(
   hal="hukuki", nitelik_1923="uluslararasi", degisti=True,
   dayanak="Ingiltere ile Fransa arasinda nota teatisi (Londra Protokolu, "
           "21 Ocak 1924'un onaylanmasi)",
   dayanak_t="1924-01-24", kaynak=IBS % "15",
   alinti="The present alignment of the Chad-Sudan boundary was determined "
          "by an exchange of notes between the United Kingdom and France on "
          "January 24, 1924.",
   kimlik_1923_a="fransa-cumhuriyet", kimlik_1923_b="ingiliz-sudani",
   not_="🟡 DEGISTI — ve capadan yalniz 87 GUN SONRA. Capa gununde "
        "yururlukte olan sey 1899 Beyani'nin GENEL hizasiydi; kesin hat "
        "henuz cizilmemisti. Bu kenar, capanin ne kadar keskin bir soru "
        "oldugunun olculmus ornegi."),

 ("Central African Republic", "Sudan"): dict(
   hal="hukuki", nitelik_1923="uluslararasi", degisti=True,
   dayanak="Ingiltere ile Fransa arasinda nota teatisi (Londra Protokolu, "
           "21 Ocak 1924)",
   dayanak_t="1924-01-24", kaynak=IBS % "16",
   alinti="The Central African Republic-Sudan boundary as presently "
          "constituted was determined by an exchange of notes between the "
          "United Kingdom and France on January 24, 1924.",
   kimlik_1923_a="fransa-cumhuriyet", kimlik_1923_b="ingiliz-sudani",
   not_="🟡 DEGISTI — Cad–Sudan ile AYNI belge, ayni gun, capadan 87 gun "
        "sonra."),

 ("Egypt", "Libya"): dict(
   hal="hukuki", nitelik_1923="uluslararasi", degisti=True,
   dayanak="Misir-Italyan Akdi ('Cagbub Antlasmasi'), 6 Aralik 1925; "
           "9 Kasim 1926 anlasmasiyla arazide netlestirildi; Misir "
           "hukumeti 7 Temmuz 1932'de onayladi",
   dayanak_t="1925-12-06", kaynak=IBS % "61",
   alinti="an accord was reached on December 6, 1925, delimiting the "
          "entire Egypt-Libya boundary ... The Egypto-Italian accord of "
          "1925, known as the Treaty of Jaghbub, and the Egypto-Italian "
          "agreement of 1926 ... determine the alignment.",
   kimlik_1923_a="misir-kralligi", kimlik_1923_b="italya",
   not_="🟡 DEGISTI — ve en keskin hali: capa gununde bu sinir HENUZ "
        "DELIMITE EDILMEMISTI. Kaynak bunu adiyla soyluyor: bati ucu "
        "'not determined until 26 years later by the Egypto-Italian "
        "accord of 1925'. ⇒ 1923 icin CIZGI YOK, bir NUFUZ BELIRSIZLIGI "
        "var. C'ye GIRMEZ."),

 ("Egypt", "Sudan"): dict(
   hal="hukuki", nitelik_1923="uluslararasi",
   dayanak="Ingiliz-Misir Anlasmasi (Sudan'in idaresine dair) — 22° Kuzey "
           "paraleli. Madde 1: \"The word 'Soudan' in this Agreement means "
           "all the territories south of the 22nd parallel of latitude\"",
   dayanak_t="1899-01-19", kaynak=IBS % "18",
   alinti="The Anglo-Egyptian Agreement of January 19, 1899, relative to "
          "the Administration of the Sudan established the boundary between "
          "Egypt and the Sudan initially as the parallel of 22 North.",
   kimlik_1923_a="misir-kralligi", kimlik_1923_b="ingiliz-sudani",
   not_="🟢 22°K siyasi hatti 1899'dan beri ayni. AMA IKI CEKINCE: "
        "① BATI UCU (25°D) ancak 1925 Misir-Italyan akdiyle belirlendi ⇒ "
        "capa gununde hattin bati ucu ACIKTI. "
        "② NE'nin cizdigi sey 22°K siyasi hat DEGIL: idari hat (1902) "
        "Bir Tawil'i ayirdigi icin bu kenar 2 PARCA cikiyor. "
        "TDV teyidi: `sudan` govdesi ayni gunu veriyor — «19 Ocak "
        "1899'da ... condominium ... yeni bir idare baslatti»."),

 ("Bir Tawil", "Egypt"): dict(
   hal="hukuki", nitelik_1923="ic-idari",
   dayanak="Misir Icisleri Bakani'nin arretesi (25 Temmuz 1902) ve "
           "kararnamesi (4 Kasim 1902) — SIYASI degil IDARI hat",
   dayanak_t="1902-07-25", kaynak=IBS % "18",
   alinti="The administrative boundary was first created by an arrete on "
          "July 25, 1902, and activated by a decree on November 4, 1902, "
          "both by the Egyptian Minister of the Interior.",
   kimlik_1923_a="KIMLIK-DEGIL (terra nullius)", kimlik_1923_b="misir-kralligi",
   not_="🔴 KIMLIK-DEGIL KOVASI. NE'de TYPE=Indeterminate, ISO=-99, "
        "SOVEREIGNT kendisi. 1923'te ayri bir siyasi varlik DEGILDI — "
        "1902 idari duzenlemesinin urunu bir artik alan. Atlas kimligi "
        "YOK ve OLMAMALI."),

 ("Bir Tawil", "Sudan"): dict(
   hal="hukuki", nitelik_1923="ic-idari",
   dayanak="Misir Icisleri Bakani'nin arretesi (25 Temmuz 1902) ve "
           "kararnamesi (4 Kasim 1902)",
   dayanak_t="1902-07-25", kaynak=IBS % "18",
   alinti="The administrative boundary departs from the eastern part of "
          "the international boundary in two places.",
   kimlik_1923_a="KIMLIK-DEGIL (terra nullius)", kimlik_1923_b="ingiliz-sudani",
   not_="🔴 KIMLIK-DEGIL KOVASI — yukaridakiyle ayni gerekce."),

 ("Morocco", "Western Sahara"): dict(
   hal="hukuki", nitelik_1923="ic-idari",
   dayanak="Fransiz-Ispanyol Antlasmasi (3 Ekim 1904) Madde VI ve "
           "Fransiz-Ispanyol Antlasmasi (27 Kasim 1912) Madde I-II — "
           "27°40' K paraleli",
   dayanak_t="1912-11-27", kaynak=IBS % "9",
   alinti="The Kingdom of Morocco and Spanish Sahara as presently "
          "constituted have shared a common boundary only since April 17, "
          "1958. On this date Spain in fulfillment of an agreement reached "
          "with Morocco on April 1, 1958, transferred to Morocco the "
          "Spanish Southern Zone.",
   kimlik_1923_a="ispanya (Guney Bolgesi — Tarfaya/Cape Juby)",
   kimlik_1923_b="ispanya (Ispanyol Sahrasi)",
   not_="🟡 CIZGI ayni (27°40'K, 1912), AMA 1923'te bir ULUSLARARASI "
        "SINIR DEGILDI: iki tarafi da Ispanya idi — kuzeyde Ispanyol "
        "Guney Himaye Bolgesi (nominal olarak Fas Sultani'nin), guneyde "
        "Ispanyol Sahrasi somurgesi. Bugunku Fas–Bati Sahra kenari "
        "17 Nisan 1958'de dogdu. ⇒ ic-idari (Ispanya–Ispanya)."),

 ("Mauritania", "Western Sahara"): dict(
   hal="hukuki", nitelik_1923="uluslararasi",
   dayanak="Fransiz-Ispanyol sozlesmesi (27 Haziran 1900) Cap Blanc'tan "
           "26°K,12°B'ya; 3 Ekim 1904 sozlesmesi kuzeye dogru",
   dayanak_t="1900-06-27", kaynak=IBS % "149",
   alinti="Northward from Cap Blanc, the line follows successively short "
          "segments utilizing midpoints between the coasts of the "
          "peninsula, the parallel of 21 20' N. ... the meridian of 12 W., "
          "the parallel of 26 N., and the meridian of 8 40' W.",
   kimlik_1923_a="fransa-cumhuriyet", kimlik_1923_b="ispanya",
   not_="Cizgi 1900/1904 sozlesmeleriyle capadan ONCE belirlenmis."),

 ("South Sudan", "Sudan"): dict(
   hal="bulunamadi", nitelik_1923="yok",
   dayanak=None, dayanak_t=None,
   kaynak="olcum: atlas verisi — NE'nin Guney Sudan poligonu icindeki "
          "26 atlas noktasinin 26'si 1923-10-01'de `ingiliz-sudani`",
   alinti=None,
   kimlik_1923_a="ingiliz-sudani", kimlik_1923_b="ingiliz-sudani",
   not_="🔴 BU KENAR 1923'TE YOKTU. Iki tarafi da ayni varliktir "
        "(Anglo-Misir Kondominyumu). Guney Sudan 9 Temmuz 2011'de "
        "bagimsiz oldu. C'ye GIRMEZ ve girmemeli: girerse atlas 1923'e "
        "var olmayan bir sinir cizer. `bulunamadi` DEGIL bir YOKLUK — "
        "ama semada o kova olmadigi icin `bulunamadi` + nitelik_1923 "
        "'yok' ile kodlandi. 🔴 1.MURAT: bu, dorduncu kova sorumun "
        "IKINCI vakasi ve birincisinden farkli — orada cizgi VARDI ama "
        "uluslararasi degildi, burada cizgi HIC YOKTU."),
}

# Kaynagi bu turda ARANMAMIS ya da seride BULUNMAMIS kenarlar
ACIK = {
 ("Algeria", "Morocco"): "IBS serisinde 1-160 arasi tarandi, BU SINIR ICIN "
    "CALISMA YOK. Baska kaynak aranacak (Brownlie, African Boundaries). "
    "⚪ 1923 niteligi de olculmedi — iki taraf da Fransa'ydi (Cezayir "
    "somurge, Fas himaye) ama bunu KAYNAKLA gostermedim.",
 ("Algeria", "Tunisia"): "IBS serisinde calisma YOK. ⚪ olculmedi.",
 ("Ethiopia", "Sudan"): "IBS serisinde calisma YOK (152 Etiyopya-Kenya, "
    "153 Etiyopya-Somali, 154 Cibuti-Etiyopya var; Sudan yok). ⚪ olculmedi.",
 ("Eritrea", "Sudan"): "IBS serisinde calisma YOK. ⚪ olculmedi.",
 ("Morocco", "Spain"): "Ceuta ve Melilla — IBS serisinde calisma YOK. "
    "⚠️ Ve 1923 kimligi ozellikle karisik: atlasta `rif-cumhuriyeti` "
    "kunyesi VAR (1921-09-18 → 1923-10-29) ve tam bu cevrede. "
    "⚪ olculmedi — tahmin YAZMIYORUM.",
}


def cizgi(A, B, geo):
    a, b = geo[A], geo[B]
    if not a.is_valid:
        a = make_valid(a)
    if not b.is_valid:
        b = make_valid(b)
    kes = a.boundary.intersection(b.boundary)
    gg = [kes] if kes.geom_type != "GeometryCollection" else list(kes.geoms)
    ciz = []
    for g in gg:
        if g.geom_type == "LineString" and len(g.coords) > 1:
            ciz.append(g)
        elif g.geom_type == "MultiLineString":
            ciz.extend([x for x in g.geoms if len(x.coords) > 1])
    if not ciz:
        return None
    m = linemerge(MultiLineString(ciz)) if len(ciz) > 1 else ciz[0]
    par = [m] if m.geom_type == "LineString" else list(m.geoms)
    out = []
    for p in par:
        d = [[round(x, 3), round(y, 3)] for x, y in p.coords]
        t = [d[0]]
        for c in d[1:]:
            if c != t[-1]:
                t.append(c)
        out.append(t)
    return out


def main():
    payda = json.load(io.open(os.path.join(KOK, "denetim",
                      "OLCUM-SINIR-KAFRIKA-PAYDA-0907.json"), encoding="utf-8"))
    gj = json.load(io.open(os.path.join(KOK, "veri-kaynak",
                   "ne_10m_admin_0_countries.geojson"), encoding="utf-8"))
    geo = {ft["properties"].get("ADMIN"): shape(ft["geometry"])
           for ft in gj["features"]}

    kayitlar = []
    sayac = {"hukuki": 0, "bulunamadi": 0, "olculemedi": 0}
    for k in payda["kenarlar"]:
        anah = (k["a"], k["b"])
        h = HUKUM.get(anah)
        kay = {
            "a": k["a"], "b": k["b"],
            "f": "1281-01-01", "t": CAPA, "t_cinsi": "pencere",
            "km": k["km"], "tepe": k["tepe"],
        }
        if h:
            # 🔴 DUZELTME: ortak sartname §② — cizgi DEGISTIYSE bugunku NE
            # geometrisi 1923 icin KULLANILAMAZ. Ilk yazimda bu bes kenari
            # `hukuki` isaretlemistim; yanlisti. 1923'un DAYANAGINI adiyla
            # biliyorum ama 1923'un GEOMETRISI elimde yok ⇒ C'ye GIRMEZ.
            hal = "bulunamadi" if h.get("degisti") else h["hal"]
            kay.update({
                "hal": hal,
                "nitelik_1923": h["nitelik_1923"],
                "degisti_1923_sonrasi": bool(h.get("degisti")),
                "dayanak": h.get("dayanak"),
                "dayanak_t": h.get("dayanak_t"),
                "kaynak": h.get("kaynak"),
                "alinti": h.get("alinti"),
                "kimlik_bugun_a": k["a"], "kimlik_bugun_b": k["b"],
                "kimlik_1923_a": h.get("kimlik_1923_a"),
                "kimlik_1923_b": h.get("kimlik_1923_b"),
                "not": h.get("not_"),
            })
        else:
            kay.update({
                "hal": "olculemedi",
                "nitelik_1923": None,
                "degisti_1923_sonrasi": None,
                "dayanak": None, "dayanak_t": None,
                "kaynak": None, "alinti": None,
                "kimlik_bugun_a": k["a"], "kimlik_bugun_b": k["b"],
                "kimlik_1923_a": None, "kimlik_1923_b": None,
                "not": ACIK.get(anah, "⚪ bu turda ARANMADI — `okumadim`."),
            })
        sayac[kay["hal"]] += 1
        g = cizgi(k["a"], k["b"], geo)
        kay["gc"] = g
        kay["gc_parca"] = len(g) if g else 0
        kayitlar.append(kay)

    cikti = {
        "_NOT": "KADEME C — hukuki sinir ortusu. Bolge: Kuzey Afrika + Sahra. "
                "Capa 1923-10-29. Birim KENAR. Uretim: SINIR-KAFRIKA-0907.",
        "_SEMA_SAPMASI": "`nitelik_1923` ortak sartnamede YOK. Sema "
                "bozulmasin diye `hal` uc kovada birakildi ve bu AYRI alan "
                "eklendi: uluslararasi | ic-idari | yok. Gerekce: bolgemin "
                "kenarlarinin bir kismi 1923'te AYNI GUCUN ic idari cizgisiydi "
                "(Fransa-Fransa, Ispanya-Ispanya) ve uc kova bunu ifade "
                "edemiyor. 1.MURAT'a soruldu (M-3180), cevap beklemede.",
        "_CAPA_NOTU": "kimlik_1923 olcumleri 1923-10-01'de yapildi; "
                "1923-10-29 atlasin PENCERE UCUDUR ve o gun donemler kapandigi "
                "icin her sey sahipsiz gorunur.",
        "capa": CAPA,
        "payda": len(kayitlar),
        "kova": sayac,
        "kenarlar": kayitlar,
    }
    yol = os.path.join(KOK, "denetim", "SINIR-HUKUKI-KAFRIKA-0907.json")
    with io.open(yol, "w", encoding="utf-8") as f:
        f.write(json.dumps(cikti, ensure_ascii=False, indent=1))

    print("payda %d" % len(kayitlar))
    for k, v in sayac.items():
        print("  %-12s %d" % (k, v))
    nit = {}
    for k in kayitlar:
        nit[k["nitelik_1923"]] = nit.get(k["nitelik_1923"], 0) + 1
    print("nitelik_1923:", nit)
    deg = [k for k in kayitlar if k.get("degisti_1923_sonrasi")]
    print("1923 SONRASI DEGISEN: %d" % len(deg))
    for k in deg:
        print("   %-26s %-26s -> %s" % (k["a"], k["b"], k["dayanak_t"]))
    bos = [k for k in kayitlar if not k["gc"]]
    print("geometrisi CIKARILAMAYAN: %d %s" % (len(bos), [x["a"] + "/" + x["b"] for x in bos]))
    print("yazildi: %s (%.1f KB)" % (yol, os.path.getsize(yol) / 1024.0))


if __name__ == "__main__":
    main()
