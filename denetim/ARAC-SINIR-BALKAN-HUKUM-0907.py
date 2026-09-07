# -*- coding: utf-8 -*-
"""
SINIR-BALKAN-0907 · HUKUM birlestirici
Girdi : denetim/OLCUM-SINIR-BALKAN-KENAR-0907.json  (geometri, OLCULDU)
Cikti : denetim/SINIR-HUKUKI-BALKAN-0907.json       (kayit)
Sema  : denetim/ONERI-KADEME-C-MODEL-0907.md §②c

HUKUM tablosu ASAGIDA ve her satirin yaninda DAMGA var:
  O = OLCTUM (kaynak adiyla, govdeden okundu)
  D = DEVRALDIM, DOGRULANMADI
  X = OLCMEDIM
"""
import json, os, io, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# ── 1923-10-29'daki ATLAS kimligi. devletler.js TARANDI (ARAC-...-KIMLIK-0907.js),
#    TAHMIN EDILMEDI. Bos deger = o gun o toprak baska bir kimlikte.
K23 = {
    "Albania": "arnavutluk-bagimsiz",
    "Austria": "avusturya-cumhuriyet",
    "Bosnia and Herzegovina": "yugoslavya",
    "Bulgaria": "bulgaristan-kralligi",
    "Croatia": "yugoslavya",
    "Czechia": "cekoslovakya",
    "Estonia": "estonya",
    "Germany": "almanya",
    "Greece": "yunanistan",
    "Hungary": "macaristan-naiplik",
    "Italy": "italya",
    "Kosovo": "yugoslavya",
    "Latvia": "letonya",
    "Lithuania": "litvanya",
    "Montenegro": "yugoslavya",
    "North Macedonia": "yugoslavya",
    "Poland": "polonya",
    "Republic of Serbia": "yugoslavya",
    "Romania": "romanya-kralligi",
    "Russia": "sovyet-rusya",
    "Slovakia": "cekoslovakya",
    "Slovenia": "yugoslavya",
    "Switzerland": "isvicre",
    "Turkey": "tbmm-turkiye",
    # KENARA GORE DEGISENLER asagida ayrica eziliyor:
    "Moldova": "romanya-kralligi",   # Besarabya 1918-1940 Romanya
    "Belarus": "sovyet-rusya",       # ama BATI Belarus 1923'te POLONYA
    "Ukraine": "sovyet-rusya",       # ama Zakarpatya 1923'te CEKOSLOVAKYA
}

# ── HUKUM TABLOSU ────────────────────────────────────────────────────────────
# anahtar: (ne_a, ne_b) alfabetik
# deger  : dict(sinif, hal, dayanak, dayanak_t, kaynak, damga, not, k23_a, k23_b)
#
# sinif:
#   degismedi        cizgi 1923-10-29'dan bugune AYNI  -> NE cizgisi KULLANILABILIR
#   ic-sinir-1923    1923'te IKI TARAF DA AYNI DEVLET  -> cizgi o gun YOKTU
#   cizgi-kaydi      toprak el degistirdi              -> NE cizgisi 1923 icin YANLIS
#   olculemedi       soru cevaplanamadi                -> kalem ACIK
TDV = "TDV Islam Ansiklopedisi"
H = {}


def k(a, b, **kw):
    # ANAHTAR ALFABETIK NORMALLESTIRILIR. Ilk surumde edilmemisti ve
    # ("Hungary","Croatia") kaydi ("Croatia","Hungary") kenariyla ESLESMEDI:
    # bir kenar hukumsuz kaldi. Alet onu "hukum YAZILMAYAN" diye BASTI,
    # sessizce atlamadi -> §11: sessiz atlama yanlis sonuctan pahalidir.
    if a > b:
        a, b = b, a
        if "k23_a" in kw or "k23_b" in kw:
            kw["k23_a"], kw["k23_b"] = kw.get("k23_b"), kw.get("k23_a")
    H[(a, b)] = kw


# ═══ ① 1923'TE IC SINIR — o gun iki taraf da AYNI devletti ═══════════════════
SHS = dict(
    sinif="ic-sinir-1923", hal="bulunamadi",
    dayanak="Sirp-Hirvat-Sloven Kralligi (SHS) — 1 Aralik 1918'de kuruldu",
    dayanak_t="1918-12-01", kaynak="yugoslavya", damga="O",
    aciklama=("1923-10-29'da iki taraf da SHS Kralligi'nin ICINDEYDI. TDV "
              "`yugoslavya`: «Bu birlesme neticesinde 1 Aralik 1918'de anayasa ile "
              "yonetilen Sirp, Hirvat ve Sloven Kralligi olarak gorulen devlet kuruldu "
              "(1918-1929)». Bu cizgi o gun bir DEVLET SINIRI DEGILDI ⇒ 1923 icin "
              "hukuki bir metin ARANAMAZ, cunku YOKTUR. `bulunamadi` bir BASARISIZLIK "
              "DEGIL, bir SONUCTUR."))
for a, b in [("Bosnia and Herzegovina", "Croatia"),
             ("Bosnia and Herzegovina", "Montenegro"),
             ("Bosnia and Herzegovina", "Republic of Serbia"),
             ("Croatia", "Montenegro"), ("Croatia", "Republic of Serbia"),
             ("Croatia", "Slovenia"), ("Kosovo", "Montenegro"),
             ("Kosovo", "North Macedonia"), ("Kosovo", "Republic of Serbia"),
             ("Montenegro", "Republic of Serbia"),
             ("North Macedonia", "Republic of Serbia")]:
    k(a, b, **SHS)

k("Czechia", "Slovakia", sinif="ic-sinir-1923", hal="bulunamadi",
  dayanak="Cekoslovakya Cumhuriyeti — 28 Ekim 1918 · 1 Ocak 1993'te ikiye ayrildi",
  dayanak_t="1918-10-28", kaynak="cekoslovakya", damga="O",
  aciklama=("TDV `cekoslovakya`: «Milli Konsey 28 Ekim 1918 tarihinde Cekoslovakya'nin "
            "bagimsizligini ilan etti» ve «Cekoslovakya'nin bolunmesi, 1 Ocak 1993 "
            "tarihinde tamamlandi». 1923-10-29'da IC SINIR."))

k("Slovakia", "Ukraine", sinif="ic-sinir-1923", hal="bulunamadi",
  dayanak="Cekoslovakya Cumhuriyeti (Slovakya + Podkarpatska Rus)",
  dayanak_t="1918-10-28", kaynak="cekoslovakya", damga="O",
  aciklama=("1923'te bugunku Zakarpatya Cekoslovakya'nin parcasiydi (Podkarpatska "
            "Rus). TDV `cekoslovakya` bunu 1939 uzerinden dolayli veriyor: «Macarlar "
            "Rutenya'ya girerek burayi ulkelerine kattilar» — yani o tarihe kadar "
            "Cekoslovak'ti. 🟡 DOGRUDAN bir 1923 ifadesi OKUNMADI."),
  k23_b="cekoslovakya")

k("Belarus", "Ukraine", sinif="ic-sinir-1923", hal="bulunamadi",
  dayanak="Sovyet Rusya / SSCB — iki taraf da ayni kimlik",
  dayanak_t="1922-12-30", kaynak="devletler.js `sovyet-rusya`", damga="O",
  aciklama=("Atlasin kendi kimlik kutugunde iki ucun 1923 kimligi de `sovyet-rusya` "
            "(1917-11-07 → pencere sonu). Byelorus SSC ile Ukrayna SSC arasindaki "
            "cizgi 1923'te bir DEVLET SINIRI degil, IC sinirdi."))

k("Moldova", "Romania", sinif="ic-sinir-1923", hal="bulunamadi",
  dayanak="Buyuk Romanya — Besarabya 1 Aralik 1918'de Romanya'ya katildi",
  dayanak_t="1918-12-01", kaynak="romanya", damga="O",
  aciklama=("TDV `romanya`: «1812'de Rusya'nin eline gecen Prut ile Dinyester "
            "arasindaki bolge yani Besarabya … Romanya Kralligi bayragi altinda "
            "birlesti. Boylece Buyuk Romanya … olustu (1 Aralik 1918)». ⇒ Bugunku "
            "Romanya-Moldova sinirini olusturan PRUT, 1923-10-29'da ROMANYA'NIN "
            "ICINDEYDI. Bir devlet siniri DEGILDI."))

# ═══ ② CIZGI KAYDI — toprak el degistirdi, NE cizgisi 1923 icin YANLIS ═══════
k("Bulgaria", "Romania", sinif="cizgi-kaydi", hal="bulunamadi",
  dayanak="Bukres Antlasmasi 1913 (1923'te yururlukte) → Kraiova Antlasmasi 1940",
  dayanak_t="1913-08-10", kaynak="dobruca", damga="O",
  aciklama=("TDV `dobruca`: «Balkan Savasi'nin ardindan imzalanan Bukres Antlasmasi "
            "ile (1913) Bulgaristan Dobruca'nin guneyini de Romanya'ya terketmis, "
            "fakat Almanya'nin baskisiyla 1940'ta imzalanan Kraiova Antlasmasi ile "
            "Guney Dobruca tekrar Bulgaristan'a verilmistir.» ⇒ 1923-10-29'da GUNEY "
            "DOBRUCA ROMANYA'DAYDI; bugunku cizgi ~1940 cizgisidir. NE cizgisi 1923 "
            "icin KULLANILAMAZ. 🟡 TDV YIL veriyor (1940), GUN vermiyor — §4: kaba "
            "guvenli duzey."))

PL45 = ("TDV `polonya`: «Savas sonrasi Polonya … cografi konumu degismis (178.842 "
        "km²'lik bolgeyi Rusya'ya terketmek zorunda kaldi, karsiliginda Oder-Neisse "
        "hattinin dogusunda kalan 102.400 km²'lik Alman topraklarini aldi)». "
        "⇒ Polonya'nin HEM dogu HEM bati siniri 1945'te kaydi; NE cizgisi 1923 icin "
        "KULLANILAMAZ.")
for a, b, ek in [("Belarus", "Poland", ""), ("Poland", "Ukraine", ""),
                 ("Germany", "Poland", " Bati ucu: Oder-Neisse.")]:
    k(a, b, sinif="cizgi-kaydi", hal="bulunamadi",
      dayanak="II. Dunya Savasi sonrasi sinir kaymasi (Oder-Neisse / dogu terki)",
      dayanak_t="1945-01-01", kaynak="polonya", damga="O", aciklama=PL45 + ek)

k("Poland", "Russia", sinif="cizgi-kaydi", hal="bulunamadi",
  dayanak="II. Dunya Savasi sonrasi sinir kaymasi — 1923'te bu komsu DOGU PRUSYA'ydi",
  dayanak_t="1945-01-01", kaynak="polonya", damga="O",
  aciklama=(PL45 + " Ayrica bugunku komsu Kaliningrad'dir; 1923-10-29'da orasi "
            "ALMANYA (Dogu Prusya) idi ⇒ ucun KIMLIGI de degisti."),
  k23_b="almanya")

k("Lithuania", "Poland", sinif="cizgi-kaydi", hal="bulunamadi",
  dayanak="Buyukelciler Konferansi 15 Mart 1923 (Foch hatti) → 1945 kaymasi",
  dayanak_t="1923-03-15", kaynak="polonya", damga="D",
  aciklama=("1923-10-29'da Polonya-Litvanya siniri VARDI ama BASKA BIR YERDEYDI: "
            "Vilnius bolgesi Polonya'nin elindeydi ve Buyukelciler Konferansi 15 Mart "
            "1923'te Foch hatti boyunca sinirlari onaylamisti. Bugunku kisa Suwalki "
            "kesimi 1945 sonrasidir. "
            "🟡 DEVRALDIM, DOGRULANMADI: bu ifade bir ARAMA SONUCU OZETINDEN geldi — "
            "yani yapay zeka uretimi bir digest, §4'e gore TEK BASINA KAYNAK DEGIL. "
            "Adreslenebilir kaynak VAR ve okunmadi: «The Vilna Dispute», American "
            "Journal of International Law (Cambridge), JSTOR 2189032. "
            "TDV `polonya` bu taneciği KAPSAMIYOR (arandi: `vilna`/`vilnius` 0 eslesme)."))

k("Lithuania", "Russia", sinif="cizgi-kaydi", hal="bulunamadi",
  dayanak="1923'te bu komsu DOGU PRUSYA (Almanya) idi; Kaliningrad 1945 sonrasi",
  dayanak_t="1945-01-01", kaynak="polonya", damga="D",
  aciklama=("1923-10-29'da Litvanya'nin guneybati komsusu Almanya'ydi (Dogu Prusya); "
            "Memel/Klaipeda Ocak 1923'te Litvanya'ya gecmisti. Bugunku komsu Rusya "
            "(Kaliningrad). 🟡 DEVRALDIM: bu, Polonya kaymasiyla ayni 1945 duzenlemesi; "
            "TDV govdesinde Kaliningrad/Dogu Prusya AYRICA OKUNMADI."),
  k23_b="almanya")

RO40 = ("TDV `moldova`: «Stalin … Besarabya'yi 26 Haziran 1940'ta Romen hukumetine "
        "verdigi ultimatomla idaresi altina aldi» · «kuzey kismi (Kuzey Bukovina ve "
        "Herta kazasi) ve guney topraklari (eski Bucak) Ukrayna Sovyet Sosyalist "
        "Cumhuriyeti'ne verildi» · «Geri kalan Besarabya topraklari ise 2 Agustos "
        "1940'ta … Moldova Sovyet Sosyalist Cumhuriyeti teskil edildi». "
        "TDV `romanya` ayni olayi dogruluyor. ⇒ 1923-10-29'da bu topraklar ROMANYA'ydi.")
k("Romania", "Ukraine", sinif="cizgi-kaydi", hal="bulunamadi",
  dayanak="1940 Sovyet ilhaki (Kuzey Bukovina + Bucak → Ukrayna SSC)",
  dayanak_t="1940-06-26", kaynak="moldova", damga="O", aciklama=RO40)
k("Moldova", "Ukraine", sinif="cizgi-kaydi", hal="bulunamadi",
  dayanak="1940 Sovyet ilhaki + Moldova SSC'nin 2 Agustos 1940'ta kurulmasi",
  dayanak_t="1940-08-02", kaynak="moldova", damga="O",
  aciklama=(RO40 + " Bu cizginin PARCALI bir 1923 karsiligi var: Dinyester'in SAGI "
            "Romanya, SOLU (Transnistriya) Sovyet Rusya. Yani cizginin bir kismi 1923'te "
            "ULUSLARARASI sinirdi ama BASKA BIR YERDEYDI, kalani IC sinirdi. "
            "⇒ Tek bir `sinif` bu kenari tam anlatmiyor; parcali."))

# ═══ ③ DEGISMEDI — NE cizgisi 1923 icin KULLANILABILIR ═══════════════════════
k("Estonia", "Latvia", sinif="degismedi", hal="hukuki",
  dayanak="Tallents hakemligi (3 Temmuz 1920) · Riga sinir antlasmasi 19 Ekim 1920",
  dayanak_t="1920-10-19", kaynak="Estonya Disisleri Bakanligi, Riga Buyukelciligi — "
            "«Timeline of Estonian-Latvian relations» (riga.mfa.ee)", damga="O",
  aciklama=("«The course of the Estonian-Latvian border was established by a decision "
            "of Stephen Tallents, chairman of the border commission» (3 Temmuz 1920) · "
            "«Still, with minor changes, the Tallents' line has remained the basis of "
            "the Estonian-Latvian border to this day.» "
            "⚠️ Kaynagin KENDI ifadesi «with minor changes» — yani BIREBIR AYNI DEGIL, "
            "ESASI AYNI. NE cizgisi 1923 icin kullanilabilir, ama «degismedi» degil "
            "«esasi degismedi» diye okunmali."))

NEU = ("TDV `bulgaristan`: «Savasi sona erdiren Neully Antlasmasi'yla (27 Kasim 1919) "
       "Bulgaristan Sirplar lehine belirli bir stratejik toprak kaybina ugramis, Bati "
       "Trakya'nin tamamini kaybetmis, Ege denizi kiyisini Yunanistan'a birakmak "
       "durumunda kalmis ve Guney Dobruca'yi Romanya'ya veren Bukres Baris Antlasmasi "
       "hukumlerini de onaylamistir.» (TDV yazimi «Neully».)")
k("Bulgaria", "Greece", sinif="degismedi", hal="hukuki",
  dayanak="Neuilly Antlasmasi", dayanak_t="1919-11-27", kaynak="bulgaristan", damga="O",
  aciklama=NEU + " ⇒ Bulgaristan-Yunanistan cizgisi 1923-10-29'da Neuilly cizgisiydi. "
                 "🟡 «Bugune kadar degismedigi» AYRICA olculmedi — 1941-44 Bulgar isgali "
                 "gecici, sonrasi geri alindi; kalici bir kayma OKUNMADI.")
for b in ["North Macedonia", "Republic of Serbia"]:
    k("Bulgaria", b, sinif="degismedi", hal="hukuki",
      dayanak="Neuilly Antlasmasi", dayanak_t="1919-11-27", kaynak="bulgaristan", damga="O",
      aciklama=(NEU + " ⇒ 1923-10-29'da bu cizgi BULGARISTAN ↔ SHS KRALLIGI siniriydi; "
                "bugun iki ayri kenar (Sirbistan · Kuzey Makedonya) olarak gorunmesi "
                "1991 AYRILMASININ sonucu. CIZGI ayni, KIMLIK bolundu."))

TRI = ("TDV `macaristan`: «4 Haziran gunu imzalanan Trianon Antlasmasi geregince "
       "Macaristan toprak ve insan kaybina ugradi.» (1920)")
k("Hungary", "Romania", sinif="degismedi", hal="hukuki",
  dayanak="Trianon Antlasmasi", dayanak_t="1920-06-04", kaynak="macaristan", damga="O",
  aciklama=TRI + " 🟡 1940 Ikinci Viyana Karari ve 1947 geri alinisi OKUNMADI — bugunku "
                 "cizginin Trianon cizgisiyle AYNI oldugu AYRICA olculmedi.")
for b in ["Croatia", "Republic of Serbia", "Slovenia"]:
    k("Hungary", b, sinif="degismedi", hal="hukuki",
      dayanak="Trianon Antlasmasi", dayanak_t="1920-06-04", kaynak="macaristan", damga="O",
      aciklama=(TRI + " 1923-10-29'da bu cizgi MACARISTAN ↔ SHS KRALLIGI siniriydi; "
                "bugun uc ayri kenar gorunmesi 1991 ayrilmasinin sonucu. "
                "🟡 Bugune kadar degismedigi AYRICA olculmedi."))
k("Hungary", "Ukraine", sinif="degismedi", hal="hukuki",
  dayanak="Trianon Antlasmasi", dayanak_t="1920-06-04", kaynak="macaristan", damga="O",
  aciklama=(TRI + " 1923-10-29'da bu cizgi MACARISTAN ↔ CEKOSLOVAKYA (Podkarpatska Rus) "
            "siniriydi; ucun KIMLIGI 1945'te degisti, CIZGI degil. "
            "🟡 Cizginin degismedigi AYRICA olculmedi."),
  k23_b="cekoslovakya")
k("Hungary", "Slovakia", sinif="olculemedi", hal="olculemedi",
  dayanak="Trianon Antlasmasi", dayanak_t="1920-06-04", kaynak="macaristan", damga="D",
  aciklama=(TRI + " 1923'te MACARISTAN ↔ CEKOSLOVAKYA. 🔴 AMA bu kenarda bilinen bir "
            "KUCUK degisim var (1947 Paris: Bratislava kopru basindaki uc koy) ve "
            "OLCULMEDI ⇒ `degismedi` diye DAMGALAMIYORUM. Yanlis damga hatayi "
            "KALICILASTIRIR."))

SG = ("TDV `avusturya`: «Savastan sonra Avusturya muttefiklerle Saint-Germain Baris "
      "Antlasmasi'ni imzaladi (10 Eylul 1919).»")
for b, ek in [("Czechia", " 1923'te AVUSTURYA ↔ CEKOSLOVAKYA."),
              ("Slovakia", " 1923'te AVUSTURYA ↔ CEKOSLOVAKYA."),
              ("Slovenia", " 1923'te AVUSTURYA ↔ SHS KRALLIGI (Karintiya plebisiti 1920)."),
              ("Germany", ""), ("Italy", ""), ("Switzerland", "")]:
    k("Austria", b, sinif="degismedi", hal="hukuki",
      dayanak="Saint-Germain Antlasmasi", dayanak_t="1919-09-10", kaynak="avusturya",
      damga="O",
      aciklama=(SG + ek + " 🟡 Antlasma OLCULDU; «bugune kadar degismedigi» AYRICA "
                "OLCULMEDI. 1938-1945 Anschluss donemi gecici."))
k("Austria", "Hungary", sinif="degismedi", hal="hukuki",
  dayanak="Saint-Germain (1919) + Trianon (1920) — Burgenland",
  dayanak_t="1920-06-04", kaynak="avusturya · macaristan", damga="O",
  aciklama=(SG + " " + TRI + " 🔴 Bu kenarin OZEL bir kalemi var: Sopron plebisiti "
            "(Aralik 1921) ve sinir komisyonunun 1922-23'teki calismasi — yani cizgi "
            "TAM CIPA GUNUNE YAKIN kesinlesti. O ayrinti OKUNMADI (TDV `avusturya` "
            "govdesinde `plebisit` yalniz 1938 Anschluss icin geciyor). ⇒ `f:` gunu "
            "ACIK KALEM."))

k("Greece", "North Macedonia", sinif="degismedi", hal="hukuki",
  dayanak="Bukres Antlasmasi (1913), Versailles ile onaylandi (1919)",
  dayanak_t="1913-08-10", kaynak="makedonya", damga="O",
  aciklama=("TDV `makedonya`: «10 Agustos 1913 tarihli Bukres Antlasmasi ile sona eren "
            "savasta Makedonya'nin buyuk bir kismi Yunanistan ve Sirbistan'in eline "
            "gecti» · «Savas sonunda yapilan Versailles Antlasmasi'nda (28 Haziran 1919) "
            "Bukres Antlasmasi'nin Makedonya icin getirdigi sartlar onaylandi.» "
            "⇒ 1923-10-29'da bu cizgi YUNANISTAN ↔ SHS KRALLIGI siniriydi."))

# ═══ ④ OLCULEMEDI — kalem ACIK ══════════════════════════════════════════════
def olc(a, b, aciklama, dayanak="", dayanak_t="", kaynak="", damga="X"):
    k(a, b, sinif="olculemedi", hal="olculemedi", dayanak=dayanak,
      dayanak_t=dayanak_t, kaynak=kaynak, damga=damga, aciklama=aciklama)

olc("Latvia", "Lithuania",
    ("1921-03-30 Letonya-Litvanya sinir antlasmasi (James Young Simpson hakemligi) "
     "KAYNAKLI: Charlotte Alston, «James Young Simpson and the Latvian-Lithuanian "
     "border settlement 1920-1921», Scottish Geographical Journal 118/2 (2002), HAKEMLI. "
     "🔴 AMA o cizginin BUGUNE KADAR degismedigi OLCULEMEDI: makalenin ozeti bunu "
     "SOYLEMIYOR, ve 1993 «yeniden tesis» antlasmasini yalniz VIKIPEDI'de gordum — "
     "§4: tek dayanak DEGIL. ⇒ dayanak VAR, SUREKLILIK YOK."),
    dayanak="Letonya-Litvanya sinir antlasmasi (Simpson hakemligi)",
    dayanak_t="1921-03-30", kaynak="Alston 2002, Scottish Geographical Journal 118/2",
    damga="O")

olc("Belarus", "Latvia",
    ("1923-10-29'da Letonya'nin guneydogu siniri Letonya-Sovyet Riga Baris Antlasmasi "
     "(1920) cizgisiydi. 🔴 Bugunku Belarus kesiminin o cizgiyle ayni olup olmadigi "
     "OLCULMEDI. TDV'de `letonya` ve `beyaz-rusya` sluglari 302 (OLU) — arandi. "
     "Kapsayici madde denenmedi ⇒ `bulunamadi` DEGIL, `olculemedi`."))
olc("Belarus", "Lithuania",
    ("1923-10-29'da bu cizgi YOKTU: Vilnius bolgesi POLONYA'nin elindeydi ve bugunku "
     "Belarus-Litvanya hatti Sovyet donemi (1939-1945) duzenlemesidir. "
     "🟡 DEVRALDIM, DOGRULANMADI — arama sonucu ozeti (yapay zeka digesti, §4'e gore "
     "kaynak DEGIL). Adreslenebilir kaynak: «The Vilna Dispute», AJIL, JSTOR 2189032. "
     "TDV `polonya` bu taneciği kapsamiyor (arandi)."))
olc("Belarus", "Russia",
    "1923'te iki taraf da `sovyet-rusya` ⇒ IC SINIR olmasi kuvvetle muhtemel, ama "
    "Byelorus SSC ile RSFSC arasindaki hattin bugunkuyle iliskisi OLCULMEDI.")
for a, b in [("Estonia", "Russia"), ("Latvia", "Russia")]:
    olc(a, b,
        "1920 baris antlasmalari (Tartu · Riga) ile cizildi; 1944'te Petseri/Abrene "
        "kesimleri RSFSC'ye gecti diye BILINIYOR ama OLCULMEDI. TDV'de `estonya`/"
        "`letonya` sluglari 302 (OLU) — arandi, kapsayici madde denenmedi.")
olc("Czechia", "Poland",
    "1923'te CEKOSLOVAKYA ↔ POLONYA; Tesin/Cieszyn bolusumu 1920 Spa Konferansi. "
    "🔴 Kaynak OKUNMADI: TDV `cekoslovakya` 1938 Tesin isgalini aniyor ama 1920 "
    "bolusumunu ve bugunku cizginin durumunu vermiyor.")
olc("Czechia", "Germany",
    "1923'te CEKOSLOVAKYA ↔ ALMANYA (Versailles/Saint-Germain). Sudet 1938'de "
    "Almanya'ya birakildi (TDV `cekoslovakya`: «29 Eylul 1938'de toplanan Munih "
    "Konferansi'nda alinan karara gore dort merhalede Almanya'ya terkedildi») ve "
    "1945'te geri alindi ⇒ cizginin BUGUN 1923'teki gibi oldugu MUHTEMEL ama OLCULMEDI.")
olc("Poland", "Slovakia",
    "1923'te POLONYA ↔ CEKOSLOVAKYA. 1938 ve 1945 degisimleri ile 1958 sinir "
    "antlasmasi OKUNMADI.")
olc("Republic of Serbia", "Romania",
    "1923'te SHS KRALLIGI ↔ ROMANYA (Banat bolusumu, Paris 1919-20). Kaynak OKUNMADI.")
olc("Italy", "Slovenia",
    "1923'te ITALYA ↔ SHS KRALLIGI ve cizgi RAPALLO (1920) hattiydi — Istria "
    "Italya'daydi. Bugunku cizgi 1947 Paris + 1954 Londra Mutabakati + 1975 Osimo "
    "sonrasidir ⇒ CIZGI KAYDI olmasi kuvvetle muhtemel. 🔴 TDV `slovenya` govdesinde "
    "`rapallo`/`osimo`/`triyeste` 0 eslesme (arandi) ⇒ kaynak BULUNAMADI, ve baska "
    "kapi denenmedi ⇒ `olculemedi`.")
for b in ["Kosovo", "Montenegro", "North Macedonia"]:
    olc("Albania", b,
        "1923-10-29'da bu cizgi ARNAVUTLUK ↔ SHS KRALLIGI siniriydi (bugun uc ayri "
        "kenar). 1913 Londra Konferansi Arnavutluk'u kurdu (TDV `arnavutluk`: «Londra "
        "Konferansi, Arnavutluk'un mustakil prenslik olusunu alti devletin "
        "garantorlugu altinda benimsedi ise de (29 Temmuz 1913)»), ama SINIR "
        "DELIMITASYONU (1921 Buyukelciler Konferansi · 1926 protokolu) TDV govdesinde "
        "OKUNMADI ⇒ dayanak yazilamaz.",
        dayanak="Londra Konferansi (Arnavutluk'un kurulusu)", dayanak_t="1913-07-29",
        kaynak="arnavutluk", damga="O")
olc("Albania", "Greece",
    "1923-10-29'da ARNAVUTLUK ↔ YUNANISTAN. Cizginin dayanagi 1913 Floransa Protokolu "
    "ve 1921 Buyukelciler Konferansi olarak BILINIR ama TDV `arnavutluk` govdesinde "
    "`floransa` 0 eslesme, sinir delimitasyonu YOK ⇒ OKUNMADI. "
    "⚠️ Ayrica 1923 Tellini olayi ve delimitasyonun 1925'e sarkmasi kalemi ACIK tutuyor.")
olc("Bulgaria", "Turkey",
    "1923'te BULGARISTAN ↔ TBMM TURKIYE. Dayanak Lozan (1923-07-24) ve/veya 1915 "
    "Osmanli-Bulgar sinir sozlesmesi. 🔴 OKUNMADI. ⚠️ Bu kenar ANADOLU kolunun da "
    "kenari — mukerrer kayit riski, koordinatore soruldu.")
olc("Greece", "Turkey",
    "1923'te YUNANISTAN ↔ TBMM TURKIYE, Meric hatti. TDV `yunanistan` Lozan'i "
    "aniyor ama SINIR MADDESI OKUNMADI. ⚠️ Bu kenar ANADOLU kolunun da kenari.",
    dayanak="Lozan Baris Antlasmasi", dayanak_t="1923-07-24", kaynak="yunanistan",
    damga="D")
olc("Russia", "Ukraine",
    "1923'te iki taraf da `sovyet-rusya` ⇒ IC SINIR olmasi kuvvetle muhtemel. "
    "⚠️ AYRICA bu kenarin BUGUNKU hali tartismalidir (Kirim · dogu Ukrayna) ve NE'nin "
    "cizdigi hat bir SIYASI SECIMDIR. Kalem ACIK, ve bu kenar bolgemin DISINDAKI bir "
    "ucla (Russia) — koordinatore soruldu.")


# ── BIRLESTIR ────────────────────────────────────────────────────────────────
def uret():
    src = os.path.join(KOK, "denetim", "OLCUM-SINIR-BALKAN-KENAR-0907.json")
    with open(src, encoding="utf-8") as f:
        olcum = json.load(f)

    kayitlar, eksik = [], []
    sayac = {}
    for e in olcum["kenarlar"]:
        a, b = e["ne_a"], e["ne_b"]
        h = H.get((a, b))
        if not h:
            eksik.append((a, b))
            continue
        ka = h.get("k23_a") or K23.get(a)
        kb = h.get("k23_b") or K23.get(b)
        ic = h["sinif"] == "ic-sinir-1923"
        kayitlar.append({
            "a": a, "b": b,                       # NE adlari (alfabetik)
            "kimlik_bugun_a": None, "kimlik_bugun_b": None,
            "kimlik_1923_a": ka, "kimlik_1923_b": kb,
            "f": h.get("dayanak_t") or None,
            "t": "1923-10-29", "t_cinsi": "pencere",
            "hal": h["hal"],
            "degisim_sinifi": h["sinif"],
            "ne_degisti": (None if h["sinif"] == "olculemedi"
                           else (False if h["sinif"] == "degismedi" else True)),
            "ic_sinir_1923": ic,
            "dayanak": h.get("dayanak") or "bulunamadi",
            "dayanak_t": h.get("dayanak_t") or "bulunamadi",
            "madde": "bulunamadi",
            "kaynak": h.get("kaynak") or "bulunamadi",
            "oncul_damgasi": h.get("damga", "X"),
            "not": h["aciklama"],
            "ne_a": a, "ne_b": b,
            "ne_surum": "ne_10m_admin_0_countries",
            "bolge_disi_uc": not (e["a_bolgede"] and e["b_bolgede"]),
            "parca": e["parca"], "tepe": e["tepe_3ond"],
            "gc": e["gc"],
        })
        sayac[h["sinif"]] = sayac.get(h["sinif"], 0) + 1

    return kayitlar, eksik, sayac, olcum


if __name__ == "__main__":
    kayitlar, eksik, sayac, olcum = uret()
    cikti = {
        "_NOT": (
            "SINIR-BALKAN-0907 · kademe C (hukuki sinir) · Balkanlar + Orta/Dogu Avrupa. "
            "Sartname: oturumlar/SINIR-HUKUKI-ORTAK-0907.md. "
            "GEOMETRI OLCULDU (mekanik, tolerans yok). HUKUM kaynaga soruldu; her kaydin "
            "`oncul_damgasi` alani O=olctum / D=devraldim-dogrulanmadi / X=olcmedim."),
        "_YENI_ALAN_ONERISI": (
            "`degisim_sinifi` ve `ic_sinir_1923` semada YOK — SINIR-BALKAN-0907 oneriyor. "
            "Gerekce: sartnamenin uc kovasi (hukuki/bulunamadi/olculemedi) bu bolgede en "
            "kalabalik vakayi ADLANDIRAMIYOR: 1923-10-29'da IKI TARAFIN DA AYNI DEVLET "
            "oldugu kenarlar. Onlar icin `bulunamadi` DOGRU ama YETERSIZ — metin "
            "aranabilir degil, cunku o gun o cizgi bir devlet siniri DEGILDI. "
            "Bir `if` ile sorulabilmesi icin ayri bir alan gerekiyor."),
        "_KOVALAR": sayac,
        "_KAPSAM": {
            "kenar_toplam": len(olcum["kenarlar"]),
            "kayit": len(kayitlar),
            "hukum_yazilmayan": [list(x) for x in eksik],
            "bolge_disi_uclu_kenar": sum(1 for k in kayitlar if k["bolge_disi_uc"]),
        },
        "_KIMLIK_NOTU": (
            "`kimlik_bugun_*` alanlarinin HEPSI null — ve bu bir eksiklik DEGIL bir "
            "OLCUM: atlasin penceresi 1923-10-29'da bitiyor, yani BUGUNKU devletlerin "
            "kunyesi YOK. devletler.js tarandi (denetim/ARAC-SINIR-BALKAN-KIMLIK-0907.js): "
            "Kosovo 0 · North Macedonia 0 · Ukraine 0 (bes ayri kokle arandi). "
            "`polonya` VARDI ama ilk taramam `leh` kokuyle aradigi icin bulamamisti — "
            "§4 Turkce yazim ekseni, `ingiliz-hindistani` tuzagi."),
        "kenarlar": kayitlar,
    }
    yol = os.path.join(KOK, "denetim", "SINIR-HUKUKI-BALKAN-0907.json")
    with open(yol, "w", encoding="utf-8") as f:
        json.dump(cikti, f, ensure_ascii=False, separators=(",", ":"))

    print("kenar (olculen) :", len(olcum["kenarlar"]))
    print("kayit (hukumlu) :", len(kayitlar))
    print("hukum YAZILMAYAN:", eksik if eksik else "yok")
    print()
    for s in ["degismedi", "ic-sinir-1923", "cizgi-kaydi", "olculemedi"]:
        print("  %-16s %d" % (s, sayac.get(s, 0)))
    print()
    hal = {}
    for kk in kayitlar:
        hal[kk["hal"]] = hal.get(kk["hal"], 0) + 1
    print("  hal:", hal)
    dmg = {}
    for kk in kayitlar:
        dmg[kk["oncul_damgasi"]] = dmg.get(kk["oncul_damgasi"], 0) + 1
    print("  damga:", dmg)
    print()
    print("dosya:", os.path.getsize(yol), "bayt")
