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
    "Turkmenistan": ("turkmenistan", "sovyet-rusya",          "olctum"),
    "Afghanistan":  ("afganistan",   "afganistan",            "olctum"),
    "Pakistan":     ("pakistan",     "ingiliz-hindistani",    "olctum"),
}
# 🟢 Turkmenistan damgasi 'devraldim' → 'olctum' YUKSELTILDI (M-3191 turu):
#    `KIMLIK-1923-0907-ADIM1.json` (girdi.yukle — YETKILI yukleyici) olctu.
#    1923-10-28'de `buhara-halk-cumhuriyeti` ve `harezm-halk-cumhuriyeti`
#    VERIDE 0 NOKTA tasiyor; o bolgede canli kimlik `sovyet-rusya` (392 nokta).
#    ⚠️ KUNYE canli, VERI kullanmiyor — "kunye var, veride yok" sessiz borcu.
#    BENIM KALEMIM DEGIL; kayit olarak burada duruyor.
#
# 🟢 VE BUTUN BU SUTUN ADIM1 ILE CAPRAZ DOGRULANDI (nokta sayilari, 1923-10-28):
#    tbmm-turkiye 238 · kacar 108 · irak-kralligi 31 · suriye-lubnan-mandasi 17
#    sovyet-rusya 392 · bulgaristan-kralligi 22 · yunanistan 97 · afganistan 5
#    ingiliz-hindistani 114   ⇒ dokuzunun dokuzu da VERIDE MEVCUT.
#    🔴 Ve AYRI Kafkas kimligi (ermeni/gurc/azerb/transkaf) veride YOK
#       ⇒ `ic-idari` hukmu ikinci bir kaynaktan DOGRULANDI.

L = "lozan-antlasmasi"

HUKUM = {
 ("Greece", "Turkey"): dict(
    # 🔴 `degisti` False → None DUZELTILDI (kendi kusurum, ayni turda bulundu):
    #    ilk yazimda "1923'ten bugune degisim BULUNAMADI ⇒ kullanilabilir" demistim.
    #    Bu bir CIKARIMDI, bir KAYNAK DEGIL — ve tam da ⓑ ongorumun curudugu yer.
    #    Kafkas ucusunde `False` KALIYOR, cunku orada TDV'nin KENDI ifadesi
    #    "BUGUNKU Turk-Sovyet siniri" diyor; burada boyle bir cumle YOK.
    hal="hukuki", degisti=None,
    dayanak="Lozan Antlasmasi", dayanak_t="1923-07-24",
    madde="md. 2/2 (Saniyen — Yunanistan ile)",
    kaynak="TTK — Lozan tam metin + TDV lozan-antlasmasi (IKI KAYNAK)", kesinlik=1,
    alinti="BIRINCIL (TTK): «Saniyen — Yunanistan ile: Oradan Arda ve Meric nehirlerinin "
           "birlestigi noktaya kadar: MERIC MECRASI; Oradan Arda membaina dogru … Corek "
           "Koy koyu civarinda … ARDA MECRASI; oradan … Bosna Koy'un 1 km asagisinda bir "
           "noktaya … Bosna Koy'u Turkiye'de birakan takriben duz bir hat; oradan "
           "Adalardenizine kadar MERIC MECRASI.» || IKINCIL (TDV): «Karaagac Turkiye'de "
           "kalmak uzere Meric irmaginin 'talvek'i olarak tesbit edilmisti.»",
    not_="🟢 IKI KAYNAK AYNI YERE CIKTI ve birbirini TAMAMLADI: TDV 'talvek' ve Karaagac'i "
         "veriyor, TTK metni hattin GEOMETRISINI (Arda mecrasi, Corek Koy, Bosna Koy) "
         "veriyor. ⚠️ 'Karaagac' TTK metninde 3 kez geciyor ama MADDE 2'de DEGIL — "
         "tazminat duzenlemesinde. TDV'nin ifadesi bir OZETLEME; celiski DEGIL. "
         "⚪ 1923→bugun degisim ARANDI, bulunamadi ⇒ `degisti` False YAZILMADI, None."),

 ("Syria", "Turkey"): dict(
    hal="hukuki", degisti=True,
    dayanak="Ankara Itilafnamesi (Fransa) md. 8 — Lozan md. 3/1 ile TEYIT",
    dayanak_t="1921-10-20",
    madde="Ankara Itilafnamesi md. 8  ·  Lozan md. 3/1",
    kaynak="TTK — Lozan tam metin + TDV lozan-antlasmasi (IKI KAYNAK)", kesinlik=1,
    alinti="BIRINCIL (TTK): «MADDE 3 — Bahrisefitten Iran hududuna kadar Turkiyenin hududu "
           "bervechi zir tesbit edilmistir: Evvela — Suriye ile: 20 tesrinievvel 1921 "
           "tarihinde akdolunan Fransa—Turkiye Itilafnamesinin 8 INCI MADDESINDE musarrah "
           "ve muayyen hudut.» || IKINCIL (TDV): «Turkiye-Suriye siniri, Fransa ile "
           "imzalanmis olan 20 Ekim 1921 Ankara Antlasmasi ile belirlenen sinir olarak "
           "kabul edilmisti.»",
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
    madde="md. 3/2 (Saniyen — Irak ile)",
    kaynak="TTK — Lozan tam metin + TDV lozan-antlasmasi (IKI KAYNAK)", kesinlik=1,
    alinti="BIRINCIL (TTK): «Saniyen — Irak ile: Turkiye ile Irak arasindaki hudut DOKUZ AY "
           "ZARFINDA Turkiye ile Buyuk Britanya arasinda [dostane bir surette tayin "
           "edilecektir].» || IKINCIL (TDV): «Antlasmada cozumu ileriye birakilan Musul "
           "meselesi Turk-Irak sinirinin tesbit edilmesi olarak anilmis ve bunun dokuz ay "
           "icinde … dostca belirlenecegi hukmune yer verilmisti (md. 3).»",
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
    hal="hukuki", degisti=None,
    dayanak="Lozan Antlasmasi", dayanak_t="1923-07-24",
    madde="md. 2/1 (Evvela — Bulgaristan ile)",
    kaynak="TTK — Lozan tam metin (ttk.gov.tr/wp-content/uploads/2016/11/3-Lozan13-357.pdf)",
    kesinlik=1,
    alinti="MADDE 2 — Bahrisiyahtan Adalardenizine kadar Turkiyenin hududu bervechi zir "
           "tesbit edilmistir. Evvela — Bulgaristan ile: Rezvaya munsabindan Turkiyeye, "
           "Bulgaristan ve Yunanistana ait uc hududun Meric uzerinde kain noktai "
           "iltisakina kadar; BULGARISTANIN ELYEVM TAHDIT EDILMIS OLDUGU SEKILDE cenup hududu.",
    not_="🟢 TDV TUKENMISTI, BIRINCIL METIN ACTI. `lozan-antlasmasi` govdesi (19.059 kar) bu "
         "siniri HIC anmiyor, `bulgaristan` govdesi (124.918 kar) 'Lozan' 0 kez. TTK'nin "
         "resmi tam metni (346 sayfa, 630.931 karakter) maddeyi ADIYLA verdi. "
         "🔴 VE BIRINCIL METIN IKINCIL KAYNAGI CURUTTU: hakemli bir makale (M. Yamac, CTTAD "
         "23/47, 2023, s.699-732) ve genel anlati «Turkiye-Bulgaristan siniri 29 Eylul 1913 "
         "Istanbul Antlasmasi'ndaki sinir olarak kabul edildi» diyor. LOZAN METNI 1913'E "
         "HIC ATIF YAPMIYOR — «ELYEVM tahdit edilmis olduğu sekilde» diyor, yani 1923'teki "
         "FIILI durumu esas aliyor. Fransizca sutun da ayni: «la frontiere Sud de la "
         "Bulgarie, TELLE QU'[elle est actuellement delimitee]». "
         "Tarihen tutarli: 1913 Istanbul Antlasmasi Osmanli-Bulgar sinirini cizdi, ama 1919 "
         "NEUILLY ile Bulgaristan Bati Trakya'yi kaybetti ⇒ 1923'te Bulgaristan'in guney "
         "siniri artik 1913'unki DEGILDI. ⇒ Ikincil kaynak bir ARA HALKAYI atliyor. "
         "⚪ `degisti` HALA None: dayanak bulundu ama 1923→bugun cizginin AYNI kaldigi "
         "AYRI bir iddiadir ve OLCULMEDI. `hal` ile `ne_degisti` AYRI sorular."),

 ("Iran", "Turkey"): dict(
    hal="hukuki", degisti=True,
    dayanak="Istanbul Protokolu (1913) — 1848 statukosu",
    dayanak_t="1913-11-17", madde="bulunamadi",
    kaynak="H. Efe – M. Kizil, «Sinir Kavrami ve Tarihsel Surec Icinde Turkiye-Iran "
           "Sinirinin Olusumu ve Onemi», Erzincan Univ. Sosyal Bilimler Enstitusu Dergisi "
           "(ERZSOSDE) X-I (2017), s. 77-90",
    kesinlik=1,
    alinti="«17 kasim 1913'de Sadrazam Sait Halim Pasa, Britanya elcisi Sir Louis Mallet, "
           "Iran buyukelcisi Mirza Mahmut Han ve Rusya buyukelcisi M. de Giers arasinda "
           "Turk-Iran sinirinin tahdidine iliskin bir protokol imzalandi. Bu protokolle "
           "1848 yili statukosu … uzerinde anlasildi.» (zincirin oncesi: 1 Haziran 1847 "
           "II. Erzurum Antlasmasi)",
    degisim_t="1932-01-23", degisim_t_hassasiyet="gun",
    degisim_kaynak="ayni makale",
    degisim_alinti="«23 Ocak 1932 tarihinde Turk-Iran Sinir Antlasmasi imzalanmistir … "
                   "Soz konusu antlasmanin BIRINCI MADDESINE gore, Agri Dagi'nin tamami "
                   "Turkiye sinirlari icine alinmis, Van civarindaki KOTUR arazisi de "
                   "Iran'a birakilmistir.» || IKINCI DEGISIM: «27 Mayis 1937'de … 1932 "
                   "Anlasmasi'ni DUZENLEYEN bir anlasma imzalanmistir. Soz konusu anlasma, "
                   "17 Haziran 1938'de Meclis'te onaylanmistir. Boylece … Iran sinirimiz "
                   "SON SEKLINI ALMISTIR.»",
    not_="🔴🔴 BENIM 🟡 HAFIZAMDAKI IDDIA DOGRULANDI — AMA EKSIKTI, ve eksigi ancak "
         "KAYNAGA ININCE gordum: bu kenar 1923'ten sonra BIR DEGIL IKI KEZ degisti. "
         "1932-01-23 (Agri Dagi ⇄ Kotur takasi) VE 1937-05-27 (Mazbiso · Paki · Eli "
         "bolgelerinde 1932 hukumleri HARITAYLA uyusmuyordu; TBMM onayi 1938-06-17). "
         "⇒ ***Devralinan bir onculu dogrulamak, onu TAMAMLAMAK da demektir.*** Yalniz "
         "1932'yi yazsaydim kayit 'kaynakli' gorunecek ve BES YILLIK ikinci bir degisim "
         "sessizce kaybolacakti. "
         "🟢 TDV BU TANECIKTE TUKENMISTI (uc govde: `iran` 308.849 · `agri` 9.653 · "
         "`dogubayazit` 14.385 — 'Turk-Iran' 0 kez, '1932'nin bes gecisi EDEBIYAT). "
         "§4 geregi akademik kaynak MESRU ve ADIYLA yazildi. "
         "🔴 §4⑦ UCUNCU KEZ: `WebFetch` bu makalenin PDF'i icin de 'binary/encoded, "
         "okuyamiyorum' dedi; `pypdf` 48.838 karakter okudu. "
         "⇒ NE'nin bugunku cizgisi 1923 icin KULLANILAMAZ: iki degisim var. "
         "⚪ 1923 gunundeki cizginin GEOMETRISI olculmedi — 1913 protokolunun hatti "
         "aranmali. Kaynagin kendi ifadesi 1938 sonrasi icin 'gunumuzde halen "
         "gecerliligini koruyan' diyor ⇒ 1938→bugun DEGISMEDI, 1923→1938 DEGISTI."),

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
        "_CIPA_TUZAGI": {
            "uyari": "1.MURAT M-3191: donemler YARI ACIK (f <= g < t) ve UFUK sonu "
                     "1923-10-29 ⇒ o gun sorulunca canli kimlik 1, sahipsiz 3804.",
            "bana_ateşledi_mi": "HAYIR — OLCULDU, devralinmadi "
                                "(denetim/ARAC-SINIR-ANADOLU-CIPA-0907.py)",
            "gerekce": "Bu tarama `girdi.yukle()` DEGIL `devletler.js` KUNYE tablosunu "
                       "okuyor ve karsilastirma KAPALI: f <= CIPA <= t.",
            "kanit_gun_ekseni": "10-29 ile 10-28 taramalari BIREBIR AYNI (fark 0 eksen).",
            "kanit_aralik_ekseni": "Ayni gun YARI ACIK denendi: 13 ucun 10'u BOS cikiyor "
                                   "⇒ tuzak GERCEK, yalniz bu alete ateşlemiyor.",
            "capraz_teyit": "KIMLIK-1923-0907-ADIM1.json (girdi.yukle, 1923-10-28) "
                            "dokuz kimligin dokuzunu da veride DOGRULADI.",
            "kid_uyarisi": "36 `v:` donemi `kid:` tasimiyor ⇒ BU KAYITLARA UYGULANMAZ: "
                           "kenar kayitlari `v:` donemi KULLANMIYOR.",
        },
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
