# -*- coding: utf-8 -*-
"""
ARAC-SINIR-ANADOLU-URET-0907 — SINIR-ANADOLU-0907 · 7 Eylul 2026

19 kenarin HUKMUNU (elle, kaynakla) geometriyle birlestirip
denetim/SINIR-HUKUKI-ANADOLU-0907.json uretir.

🔴 SEMA ICAT EDILMEDI: denetim/ONERI-KADEME-C-MODEL-0907.md §②c.
🔴 HUKUMLER BU DOSYADA ELLE DURUYOR — cunku her biri bir KAYNAK OKUMASIDIR,
   mekanik degil. Her hukmun yaninda ALINTI ve slug var.
🟡 `hal_oneri` ALANI: uc kova (hukuki|bulunamadi|olculemedi) benim bolgemde
   YETMIYOR. IKI yeni kova ONERIYORUM (acmiyorum — bicim ORTAK, §ortak①):
      "ic-idari"  1923'te iki uc da AYNI devletin ICINDEYDI ⇒ ULUSLARARASI
                  sinir DEGILDI. "bulunamadi" demek YANLIS DAMGA olurdu:
                  arandi-ve-yok degil, ARANMASI GEREKEN SEY BASKA.
      "tanimsiz"  taraflar 1923'te sinirin YERINI HENUZ BELIRLEMEMISTI
                  (Lozan md.3/2 Musul'u ERTELEDI) — bu bir SONUCTUR.
   Bugun `hal` alanina uc kovadan en dogrusu yaziliyor + `hal_oneri` tasiniyor;
   koordinator onaylarsa MEKANIK olarak tasinir.
"""
import json, io, sys, os

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KENAR = os.path.join(KOK, "denetim", "OLCUM-KENAR-ANADOLU-0907.json")
CIKTI = os.path.join(KOK, "denetim", "SINIR-HUKUKI-ANADOLU-0907.json")

CIPA = "1923-10-29"

# NE adi -> (kimlik_bugun, kimlik_1923, kimlik_1923_damga)
KIMLIK = {
    "Turkey":       ("turkiye",      "tbmm-turkiye",          "olctum"),
    "Greece":       ("yunanistan",   "yunanistan",            "olctum"),
    "Bulgaria":     ("bulgaristan",  "bulgaristan-kralligi",  "olctum"),
    "Syria":        ("suriye",       "suriye-lubnan-mandasi", "olctum"),
    "Iraq":         ("irak",         "irak-kralligi",         "olctum"),
    "Iran":         ("iran",         "kacar",                 "olctum"),
    "Georgia":      ("gurcistan",    "sovyet-rusya",          "olctum"),
    "Armenia":      ("ermenistan",   "sovyet-rusya",          "olctum"),
    "Azerbaijan":   ("azerbaycan",   "sovyet-rusya",          "olctum"),
    "Russia":       ("rusya",        "sovyet-rusya",          "olctum"),
    "Turkmenistan": ("turkmenistan", "sovyet-rusya",          "devraldim"),
    "Afghanistan":  ("afganistan",   "afganistan",            "olctum"),
    "Pakistan":     ("pakistan",     "ingiliz-hindistani",    "olctum"),
}
# ⚠️ Turkmenistan 'devraldim': Turkmenistan SSC 1924'te kuruldu; 1923-10-29'da
#    Iran siniri boyunca Turkistan ASSC/SSCB idi. Kunye taramasi bu tarihte
#    `buhara-halk-cumhuriyeti`yi de canli buldu ama o Ceyhun'un OTE yakasi.
#    `sovyet-rusya` EN YAKIN kimlik; AYRICA DOGRULANMADI.

L = "lozan-antlasmasi"

HUKUM = {
 ("Greece", "Turkey"): dict(
    hal="hukuki", degisti=False,
    dayanak="Lozan Antlasmasi", dayanak_t="1923-07-24", madde="md. 2/2 (Sinirlar)",
    kaynak=L, kesinlik=1,
    alinti="Trakya'daki Turkiye-Yunanistan siniri Karaagac Turkiye'de kalmak uzere "
           "Meric irmaginin 'talvek'i olarak tesbit edilmisti.",
    not_="Meric talvegi + Karaagac. TDV govdesi Karaagac'in tazminat yerine birakildigini "
         "ayrica yaziyor. 1923'ten bugune degisim BULUNAMADI ⇒ NE'nin bugunku cizgisi "
         "1923 icin KULLANILABILIR."),

 ("Syria", "Turkey"): dict(
    hal="hukuki", degisti=True,
    dayanak="Ankara Itilafnamesi (Fransa)", dayanak_t="1921-10-20",
    madde="Lozan md. 3/1 ile TEYIT", kaynak=L, kesinlik=1,
    alinti="Turkiye-Suriye siniri, Fransa ile imzalanmis olan 20 Ekim 1921 Ankara "
           "Antlasmasi ile belirlenen sinir olarak kabul edilmisti.",
    degisim_t="1939", degisim_t_hassasiyet="yil",
    degisim_kaynak="iskenderun + suriye (IKI BAGIMSIZ TDV maddesi)",
    degisim_alinti="1939'da Hatay Devleti'nin Turkiye'ye baglanmasi uzerine Iskenderun ... "
                   "Hatay vilayetine bagli bir kazanin merkezi oldu. [iskenderun] || "
                   "1939'da ... Fransa ve Turkiye Cumhuriyeti arasinda yapilan bir antlasma ile "
                   "Hatay Turkiye sinirlarina dahil edildi. [suriye]",
    not_="🔴 KOORDINATORUN 🟡 DEVRALDIGI 'Hatay 1939' ONCULU DOGRULANDI — iki ayri TDV "
         "maddesinden, YIL hassasiyetinde. GUN TDV'de YOK ve UYDURULMADI (§4: alan kaynagin "
         "destekledigi EN KABA GUVENLI duzeyi tasir). "
         "⇒ NE'nin bugunku cizgisi Hatay'i ICERIYOR, 1923'te ICERMIYORDU: bu kenarin "
         "geometrisi 1923 icin KULLANILAMAZ; 1921 Ankara Itilafnamesi'nin cizgisi ARANMALI."),

 ("Iraq", "Turkey"): dict(
    hal="bulunamadi", hal_oneri="tanimsiz", degisti=True,
    dayanak="Lozan md. 3/2 — SINIR TESBITI ERTELENDI", dayanak_t="1923-07-24",
    madde="md. 3/2", kaynak=L, kesinlik=1,
    alinti="Antlasmada cozumu ileriye birakilan Musul meselesi Turk-Irak sinirinin tesbit "
           "edilmesi olarak anilmis ve bunun dokuz ay icinde Turkiye ile Buyuk Britanya "
           "arasinda dostca belirlenecegi hukmune yer verilmisti (md. 3).",
    degisim_t="1926-06-05", degisim_t_hassasiyet="gun",
    degisim_kaynak="kerkuk",
    degisim_alinti="Kerkuk, Misak-i Milli sinirlarina dahil olmasina ragmen 5 Haziran 1926'da "
                   "Ankara'da Ingiltere, Irak, Turkiye arasinda imzalanan 'sinir ve iyi "
                   "komsuluk iliskileri' antlasmasiyla Ingiliz mandasindaki Irak Devleti'ne birakildi.",
    not_="🔴 KOORDINATORUN 🟡 'Musul 1926' ONCULU DOGRULANDI — ve GUNUYLE: 5 Haziran 1926. "
         "🔴 AMA ASIL SONUC BU DEGIL: cipa gununde (1923-10-29) BU KENAR HENUZ YOKTU. "
         "Lozan onu 'dokuz ay icinde belirlenecek' diye ERTELEDI ve dokuz ay 1924-04-24'te doldu. "
         "'bulunamadi' damgasi burada YANILTICI: aranan metin YOK DEGIL, HENUZ YAZILMAMISTI. "
         "⇒ `tanimsiz` kovasi ONERILIYOR (ortak sartname: 'gerekiyorsa ONER, kendi basina ACMA')."),

 ("Armenia", "Turkey"): dict(
    hal="hukuki", degisti=False,
    dayanak="Moskova Antlasmasi + Kars Antlasmasi", dayanak_t="1921-10-13",
    madde="bulunamadi (TDV madde no vermiyor)", kaynak="agri", kesinlik=1,
    alinti="16 Mart 1921 Moskova ve 13 Ekim 1921 Kars antlasmalariyla da BUGUNKU "
           "Turk-Sovyet siniri tesbit edilmistir.",
    not_="TDV'nin kendi ifadesi 'BUGUNKU' diyor ⇒ 1921'de cizilen cizgi bugunkuyle AYNI. "
         "Ikinci bagimsiz teyit `kars` maddesi: 'Moskova (16 Mart 1921) ve Kars (13 Ekim 1921) "
         "antlasmalariyla yapilan son sinir tashihleri sayesinde Kars yeni Turk devletinin "
         "sinirlari dahilinde kaldi.' "
         "🔴 KIMLIK UYARISI: 1923'te karsi uc ERMENISTAN DEGIL SSCB. Kunye taramasi "
         "`ermenistan-demokratik-cumhuriyeti`nin 1920-12-02'de BITTIGINI olctu."),

 ("Georgia", "Turkey"): dict(
    hal="hukuki", degisti=False,
    dayanak="Moskova Antlasmasi + Kars Antlasmasi", dayanak_t="1921-10-13",
    madde="bulunamadi", kaynak="agri", kesinlik=1,
    alinti="16 Mart 1921 Moskova ve 13 Ekim 1921 Kars antlasmalariyla da BUGUNKU "
           "Turk-Sovyet siniri tesbit edilmistir.",
    not_="Ayni dayanak. ⚠️ Batum 1921 Moskova ile Gurcistan'a birakildi — yani cizgi "
         "1921'de OTURDU, 1923'ten sonra DEGISMEDI. `batum` govdesi cekildi (8.863 kar) "
         "ama madde no ARANMADI ⇒ `madde` alani 'bulunamadi'."),

 ("Azerbaijan", "Turkey"): dict(
    hal="hukuki", degisti=False,
    dayanak="Moskova Antlasmasi + Kars Antlasmasi", dayanak_t="1921-10-13",
    madde="bulunamadi", kaynak="agri", kesinlik=1,
    alinti="16 Mart 1921 Moskova ve 13 Ekim 1921 Kars antlasmalariyla da BUGUNKU "
           "Turk-Sovyet siniri tesbit edilmistir.",
    not_="🔴 BU KENAR 8 KM — Nahcivan'in Turkiye ile temas noktasi (Dilucu). Nahcivan'in "
         "statusu Kars Antlasmasi'nin konusu; `nahcivan` govdesi cekildi (25.468 kar) ama "
         "madde no ARANMADI. ⚠️ 1923'te karsi uc AZERBAYCAN DEGIL SSCB, ve Nahcivan "
         "Azerbaycan'a bagli OZERK bir birimdi."),

 ("Bulgaria", "Turkey"): dict(
    hal="bulunamadi", degisti=None,
    dayanak="bulunamadi", dayanak_t=None, madde="bulunamadi",
    kaynak="bulunamadi", kesinlik=0,
    not_="🔴 ARANDI, YOK — ve nerede arandigi yazili: `lozan-antlasmasi` govdesi (19.059 kar, "
         "TAM okundu) Turkiye-Bulgaristan sinirini HIC ANMIYOR; `bulgaristan` govdesi "
         "(124.918 kar) 'Lozan' kelimesini SIFIR kez tasiyor. `misak-i-milli` yalnizca Bati "
         "Trakya'nin Turkiye disinda kaldigini soyluyor, SINIR HATTINI vermiyor. "
         "⇒ §4 TANECIKLIK bosluğu: TDV bolgeyi goruyor, bu sinir hattini KONUSMUYOR. "
         "Akademik kaynak MESRU ama BU TURDA ARANMADI ⇒ kalem ACIK."),

 ("Iran", "Turkey"): dict(
    hal="bulunamadi", degisti=None,
    dayanak="bulunamadi", dayanak_t=None, madde="bulunamadi",
    kaynak="bulunamadi", kesinlik=0,
    not_="🔴 ARANDI, YOK. Uc govde okundu: `iran` (308.849 kar) · `agri` (9.653) · "
         "`dogubayazit` (14.385). Ucu de 1923 sonrasi Turk-Iran sinir duzenlemesi VERMIYOR "
         "('Turk-Iran' dizgisi `iran` govdesinde 0 kez; '1932'nin 5 gecisi de EDEBIYAT "
         "baglaminda — roman ve hikaye yillari). "
         "⚪ OLCEMEDIM: 1932 Turkiye-Iran sinir duzeltmesi (Kucuk Agri) — bu bilgi BENIM "
         "HAFIZAMDAN ve TDV onu DOGRULAMADI; VERIYE YAZILMADI (§4: tarih uydurma). "
         "Akademik kaynak aranmali ⇒ kalem ACIK. Bu kenar icin 'degisti mi' sorusu "
         "CEVAPSIZ: `degisti` alani None."),

 ("Iran", "Iraq"): dict(
    hal="hukuki", degisti=True,
    dayanak="Kasrisirin (Zuhab) Antlasmasi — TEMEL", dayanak_t="1639-05-17",
    madde="bulunamadi", kaynak="iran", kesinlik=1,
    alinti="1639'da Zuhab'da (Kasrisirin) akdedilen baris antlasmasi Irak-i Arab'i Osmanli "
           "idaresine geri verdi ve guneyde siniri Sattularap nehri teskil etti.",
    degisim_t="1975", degisim_t_hassasiyet="yil",
    degisim_kaynak="iran",
    degisim_alinti="Aralarindaki bir sinir meselesi bahanesiyle Irak, 1975 Sattularap "
                   "Antlasmasi'ni ihlal ederek 22 Eylul 1980'de Iran topraklarina girdi.",
    not_="🔴 1923'ten SONRA DEGISTI: 1975 Sattularap Antlasmasi. TDV onu ADIYLA ve YILIYLA "
         "aniyor, ama iceriğini (talveg hattina gecis) VERMIYOR ⇒ degisimin BOYUTU olculemedi. "
         "⇒ NE'nin bugunku cizgisi 1923 icin GUVENLI DEGIL; en azindan Sattularap kesiminde. "
         "⚠️ 1923 dayanagi olarak 1639 Kasrisirin YAZILDI ama bu bir ZINCIRIN ilk halkasi: "
         "1847 Erzurum ve 1913-14 Istanbul protokolleri ARANMADI (`erzurum-antlasmasi` slug'i "
         "302 OLU). ⇒ `dayanak` alani EKSIK, kalem ACIK."),

 ("Armenia", "Azerbaijan"): dict(
    hal="bulunamadi", hal_oneri="ic-idari", degisti=None,
    dayanak="YOK — 1923'te ULUSLARARASI SINIR DEGILDI", dayanak_t=None,
    madde=None, kaynak="karabag", kesinlik=1,
    alinti="Bu heyetin verdigi raporlar dogrultusunda 30 Haziran'da Daglik Karabag Ozerk "
           "Bolgesi'nin tesisine karar verildi ve bu karar 24 Temmuz 1923'te ilan edildi. "
           "Azerbaycan'in idaresi altinda olusturulan bu bolge 4200 km2 olup Cevansir, Susa, "
           "Cebrail, Zengezur ve Kubatli'nin bir kismini kapsiyordu.",
    not_="🔴🔴 1923-10-29'da IKI UC DA SSCB ICINDEYDI ⇒ bu bir ULUSLARARASI SINIR DEGIL, bir "
         "IC IDARI cizgidir; hukumet ANTLASMASI ARANMASI YANLIS SORUDUR. "
         "🔴 Ve TDV cipadan UC AY ONCE (24 Temmuz 1923) bu cizginin HALA YENIDEN CIZILDIGINI "
         "gosteriyor. ⇒ NE'nin bugunku cizgisi 1923 icin KULLANILAMAZ, ve 1923 icin bir "
         "'cizgi' ARAMAK da anlamsiz olabilir. "
         "⚠️ 5 PARCALI kenar (Nahcivan eksklavi + Karki/Artsvasen enklavlari)."),

 ("Armenia", "Georgia"): dict(
    hal="bulunamadi", hal_oneri="ic-idari", degisti=None,
    dayanak="YOK — 1923'te ULUSLARARASI SINIR DEGILDI", dayanak_t=None,
    madde=None, kaynak="bulunamadi", kesinlik=1,
    not_="1923-10-29'da iki uc da SSCB icinde (kunye taramasi: `ermenistan-demokratik-cumhuriyeti` "
         "1920-12-02'de, `gurcistan-demokratik-cumhuriyeti` 1921-03-16'da BITTI). "
         "⇒ IC IDARI cizgi. `ic-idari` kovasi ONERILIYOR."),

 ("Azerbaijan", "Georgia"): dict(
    hal="bulunamadi", hal_oneri="ic-idari", degisti=None,
    dayanak="YOK — 1923'te ULUSLARARASI SINIR DEGILDI", dayanak_t=None,
    madde=None, kaynak="bulunamadi", kesinlik=1,
    not_="1923-10-29'da iki uc da SSCB icinde. ⇒ IC IDARI cizgi."),

 ("Georgia", "Russia"): dict(
    hal="bulunamadi", hal_oneri="ic-idari", degisti=None,
    dayanak="YOK — 1923'te ULUSLARARASI SINIR DEGILDI", dayanak_t=None,
    madde=None, kaynak="bulunamadi", kesinlik=1,
    not_="1923-10-29'da iki uc da SSCB icinde. ⇒ IC IDARI cizgi. "
         "⚠️ AYRICA: NE'nin bugunku cizgisi Abhazya ve Guney Osetya'yi Gurcistan ICINDE "
         "gosteriyor — bu bir 2020'ler siyasi tercihi; 1923 icin ONEMSIZ ama C katmani "
         "cizilirken BILINMELI. Bu ⚪ OLCMEDIM: NE'nin bu tercihini DOGRULAMADIM."),

 ("Azerbaijan", "Russia"): dict(
    hal="bulunamadi", hal_oneri="ic-idari", degisti=None,
    dayanak="YOK — 1923'te ULUSLARARASI SINIR DEGILDI", dayanak_t=None,
    madde=None, kaynak="bulunamadi", kesinlik=1,
    not_="1923-10-29'da iki uc da SSCB icinde. ⇒ IC IDARI cizgi."),

 ("Azerbaijan", "Iran"): dict(
    hal="bulunamadi", degisti=None,
    dayanak="bulunamadi", dayanak_t=None, madde="bulunamadi",
    kaynak="bulunamadi", kesinlik=0,
    not_="🔴 ARANDI, YOK — `iran` (308.849 kar) ve `azerbaycan` (49.344 kar) govdeleri cekildi; "
         "bu kenarin hukuki dayanagi (1828 Turkmencay zinciri) ARANDI ama HEDEFLI OKUMA "
         "YAPILMADI ⇒ dogrusu 'okumadim'a yakin. DURUST DAMGA: kalem ACIK. "
         "⚠️ 1923'te karsi uc AZERBAYCAN DEGIL SSCB ⇒ bu kenar 1923'te SSCB-Iran siniriydi; "
         "CIZGI muhtemelen ayni, KIMLIK farkli."),

 ("Armenia", "Iran"): dict(
    hal="bulunamadi", degisti=None,
    dayanak="bulunamadi", dayanak_t=None, madde="bulunamadi",
    kaynak="bulunamadi", kesinlik=0,
    not_="44 km — bolgemin EN KISA ikinci kenari (Aras). Ayni durum: 1923'te SSCB-Iran siniri. "
         "Hedefli kaynak okumasi YAPILMADI ⇒ kalem ACIK."),

 ("Iran", "Turkmenistan"): dict(
    hal="bulunamadi", degisti=None,
    dayanak="bulunamadi", dayanak_t=None, madde="bulunamadi",
    kaynak="turkmenistan", kesinlik=0,
    not_="🔴 ARANDI, YOK. `turkmenistan` govdesi (61.490 kar) Iran sinirini yalniz COGRAFI "
         "olarak aniyor ('guneybatida Iran siniri boyunca uzanan Kopet daglari'); HUKUKI "
         "dayanak VERMIYOR. 1881 gecisleri Gokdepe'nin RUS FETHI ile ilgili, sinir antlasmasi "
         "degil. ⇒ §4 TANECIKLIK boslugu. "
         "⚠️ 1923'te karsi uc TURKMENISTAN DEGIL SSCB (Turkmenistan SSC 1924'te kuruldu)."),

 ("Afghanistan", "Iran"): dict(
    hal="bulunamadi", degisti=None,
    dayanak="bulunamadi", dayanak_t=None, madde="bulunamadi",
    kaynak="afganistan", kesinlik=0,
    not_="🔴 ARANDI, YOK. `afganistan` govdesi (61.301 kar) Iran sinirini yalniz COGRAFI ve "
         "ETNIK olarak aniyor; hukuki dayanak (1872 Goldsmid tahkimi ve ardillari) HIC "
         "GECMIYOR ('1872' 0 kez, 'hakem' 0 kez). ⇒ §4 TANECIKLIK boslugu."),

 ("Iran", "Pakistan"): dict(
    hal="bulunamadi", degisti=None,
    dayanak="bulunamadi", dayanak_t=None, madde="bulunamadi",
    kaynak="pakistan", kesinlik=0,
    not_="🔴 ARANDI, YOK. `pakistan` govdesi (50.397 kar) 'Iran sinir' 0 kez, '1893' 0 kez, "
         "'Durand' 0 kez. ⇒ §4 TANECIKLIK boslugu. "
         "🔴 KIMLIK: 1923'te PAKISTAN YOKTU — karsi uc `ingiliz-hindistani` (1947'de dogdu). "
         "Bu kenarin UCLARI degisti, cizgisi (Goldsmid hatti) muhtemelen ayni ⇒ ama "
         "OLCULMEDI."),
}


def main():
    ham = json.load(open(KENAR, encoding="utf-8"))
    kayitlar = []
    for k in ham["kenarlar"]:
        a, b = k["ne_a"], k["ne_b"]
        h = HUKUM.get((a, b))
        if h is None:
            print("🔴 HUKUM YOK:", a, b); continue
        ka, k1a, da = KIMLIK[a]
        kb, k1b, db = KIMLIK[b]
        # a/b ALFABETIK atlas kimligi (kararli anahtar)
        çift = sorted([(k1a, a, ka, da), (k1b, b, kb, db)])
        kayit = {
            "a": çift[0][0], "b": çift[1][0],
            "f": h.get("dayanak_t") or None,
            "t": CIPA,
            "t_cinsi": "pencere",
            "hal": h["hal"],
            "dayanak": h.get("dayanak"),
            "dayanak_t": h.get("dayanak_t"),
            "madde": h.get("madde"),
            "kaynak": h.get("kaynak"),
            "kesinlik": h.get("kesinlik", 0),
            "gc": k["gc"],
            "ne_a": a, "ne_b": b,
            "ne_surum": ham["ne_surum"],
            "ne_degisti": h.get("degisti"),
            "kimlik_bugun": {a: ka, b: kb},
            "kimlik_1923": {a: k1a, b: k1b},
            "kimlik_1923_damga": {a: da, b: db},
            "uzunluk_km_yaklasik": k["uzunluk_km_yaklasik"],
            "parca": k["parca"], "tepe": k["tepe"],
            "not": h.get("not_", ""),
        }
        for ek in ("hal_oneri", "alinti", "degisim_t", "degisim_t_hassasiyet",
                   "degisim_kaynak", "degisim_alinti"):
            if h.get(ek) is not None:
                kayit[ek] = h[ek]
        kayitlar.append(kayit)

    kayitlar.sort(key=lambda r: -r["uzunluk_km_yaklasik"])
    sayim = {}
    for r in kayitlar:
        anahtar = r.get("hal_oneri") or r["hal"]
        sayim[anahtar] = sayim.get(anahtar, 0) + 1

    cikti = {
        "_NOT": "SINIR-HUKUKI-ANADOLU-0907 — kademe C (hukuki sinir) kenar kayitlari. "
                "Sema: denetim/ONERI-KADEME-C-MODEL-0907.md §②c. "
                "AD ALANI: data/sinir_hukuki_anadolu.js -> window.SINIR_HUKUKI_ANADOLU",
        "_CIPA": CIPA,
        "_BOLGE": "cekirdek {Turkey, Georgia, Armenia, Azerbaijan, Iran}; "
                  "kenar = en az bir ucu cekirdekte olan",
        "_KOVA_SAYIMI": sayim,
        "_HAL_ONERISI": {
            "ic-idari": "1923'te iki uc da AYNI devletin icindeydi ⇒ ULUSLARARASI sinir "
                        "DEGILDI. 'bulunamadi' YANLIS DAMGA olur.",
            "tanimsiz": "taraflar 1923'te sinirin yerini HENUZ BELIRLEMEMISTI (Lozan md.3/2).",
            "_DURUM": "ONERILDI, ACILMADI — bicim ORTAK, karar koordinatorde. Bugun `hal` "
                      "alaninda uc kovadan en dogrusu duruyor; onay gelirse `hal_oneri` "
                      "MEKANIK olarak `hal`e tasinir.",
        },
        "kenarlar": kayitlar,
    }
    json.dump(cikti, open(CIKTI, "w", encoding="utf-8"), ensure_ascii=False)
    print("kenar:", len(kayitlar), "| kova:", sayim)
    print("%-26s %-13s %-11s %-9s %s" % ("KENAR", "hal", "oneri", "degisti", "dayanak"))
    for r in kayitlar:
        print("%-26s %-13s %-11s %-9s %s" % (
            r["ne_a"] + "|" + r["ne_b"], r["hal"], r.get("hal_oneri", "-"),
            str(r["ne_degisti"]), (r.get("dayanak") or "-")[:44]))
    print("\nyazildi:", CIKTI, os.path.getsize(CIKTI), "bayt")


if __name__ == "__main__":
    main()
