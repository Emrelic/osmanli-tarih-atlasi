# -*- coding: utf-8 -*-
"""KUNYE-1945-0930 — künye kararları (uygulayıcı: ARAC-KUNYE-1945-0930-UYGULA.py).

UFUK = yeni pencere ucu işareti. 🔴 ÖLÇÜM DEĞİL, SINIR İŞARETİDİR (D210):
"bugün de süren" ya da "1945'ten sonra bitti ama günü ölçülemedi" demektir;
her birinde ic_not_t bunu açıkça söyler. Koordinatör başka gün derse TEK
sabit değişir.

Kaynak kısaltmaları (hepsi bu oturumda sayfası AÇILARAK okundu):
  USHMM-KD  = https://encyclopedia.ushmm.org/content/en/article/world-war-ii-key-dates
  OH        = https://history.state.gov/countries/<ülke>
  AVALON    = https://avalon.law.yale.edu/...
  BRIT      = https://www.britannica.com/... (tarayıcıyla okundu; WebFetch 403)
  TDV       = https://islamansiklopedisi.org.tr/<slug>
⚠️ TDV satırlarının bir kısmı WebFetch özetleyicisinden geldi — "özet" diye
işaretlenenler KELİMESİ KELİMESİNE alıntı DEĞİLDİR.
"""

UFUK = "1945-09-02"
SURER = "pencere ucu, ölçüm değil (D210): devlet 1945 ufkundan sonra da sürdü — bugün de mevcut"


def s(kid, not_=SURER, ozet_ek="(1945 ufkundan sonra da sürdü — t: pencere ucu.)", kron=None):
    return {"id": kid, "t": UFUK, "ic_not_t": not_, "ozet_ek": ozet_ek, "kron": kron or []}


def sonra(kid, bitis_notu, kron=None):
    """1945'ten SONRA bitti ama gün ölçülemedi / ölçüldü ama ufkun dışında."""
    return {"id": kid, "t": UFUK,
            "ic_not_t": "pencere ucu, ölçüm değil (D210): 1945 ufkundan sonra bitti — " + bitis_notu,
            "ozet_ek": "(1945 ufkundan sonra da sürdü — t: pencere ucu.)", "kron": kron or []}


def gercek(kid, t, not_, ozet_ek, kron=None):
    return {"id": kid, "t": t, "ic_not_t": not_, "ozet_ek": ozet_ek, "kron": kron or []}


UZAT = [
    # ── ① BUGÜN DE SÜREN DEVLETLER — t: UFUK ────────────────────────────────
    s("fransa-cumhuriyet", kron=[
        ("1940-07-10", "siyaset", "Vichy'de toplanan Parlamento Mareşal Pétain'e olağanüstü tam yetki verdi (III. Cumhuriyet fiilen sona erdi)", "OH france: 'On July 10, 1940, the French Parliament met in Vichy and granted full and extraordinary powers to Marshal Pétain'"),
        ("1944-08-25", "toprak-kazanc", "Özgür Fransız kuvvetleri Paris'e girdi", "USHMM-KD (25 Ağustos 1944)")]),
    s("ingiltere"), s("isvec"), s("fas"),
    s("yunanistan", ozet_ek="(1945 ufkundan sonra da sürdü — t: pencere ucu. Künye ÜLKE sürekliliğidir: 25 Mart 1924 cumhuriyet, 1935 krallığın iadesi — TDV yunanistan.)", kron=[
        ("1924-03-25", "siyaset", "Cumhuriyet ilan edildi (II. Yunan Cumhuriyeti)", "TDV yunanistan (özet, alıntı değil): 25 Mart 1924"),
        ("1935-01-01", "siyaset", "Kral II. Georg Atina'ya çağrıldı, krallık rejimine dönüldü", "TDV yunanistan (özet) — YIL verir, gün yok")]),
    s("ispanya", ozet_ek="(1945 ufkundan sonra da sürdü — t: pencere ucu. 1936-1939 iç savaşında milliyetçi bölge ayrı künyede: [[ispanya-milliyetci]].)", kron=[
        ("1936-07-17", "ic-savas", "Garnizonlarda askerî ayaklanma başladı: İspanya İç Savaşı", "BRIT Spanish-Civil-War: 'A well-planned military uprising began on July 17, 1936'"),
        ("1939-04-01", "son", "Franco iç savaşı kesin ve koşulsuz zaferle bitirdi", "BRIT Francisco-Franco: 'Franco won a complete and unconditional victory on April 1, 1939'")]),
    s("portekiz"),
    s("hollanda", kron=[("1940-05-14", "isgal", "Almanya karşısında teslim oldu", "USHMM-KD: 'the Netherlands surrenders on May 14'")]),
    s("danimarka", kron=[("1940-04-09", "isgal", "Alman saldırısı günü teslim oldu", "USHMM-KD: 'Denmark surrenders on the day of the attack' (9 Nisan 1940)")]),
    s("umman"), s("liberya"), s("kanada"), s("finlandiya"),
    s("norvec", kron=[("1940-06-09", "isgal", "Alman işgaline karşı direniş sona erdi", "USHMM-KD: 'Norway holds out until June 9'")]),
    s("kuveyt"), s("bahreyn"), s("katar"), s("siyam-chakri"), s("brunei-sultanligi"),
    s("abd"), s("meksika"), s("haiti"), s("tonga-kralligi"), s("yeni-zelanda"), s("avustralya"),
    s("isvicre"),
    s("belcika", kron=[("1940-05-28", "isgal", "Alman işgali karşısında teslim oldu", "USHMM-KD: 'Belgium surrenders on May 28'")]),
    s("luksemburg", kron=[("1940-05-10", "isgal", "Almanya tarafından işgal edildi", "USHMM-KD: 'Luxembourg is occupied on May 10'")]),
    s("cin-cumhuriyeti", ozet_ek="(1945 ufkundan sonra da sürdü — t: pencere ucu. İşgal altı yapılar: [[mancukuo]] · [[nanjing-wang-jingwei]].)", kron=[
        ("1931-09-18", "isgal", "Japonya Mançurya'yı işgal etti", "USHMM-KD: 'September 18, 1931 Japan invades Manchuria.'")]),
    s("izlanda", ozet_ek="(1945 ufkundan sonra da sürdü — t: pencere ucu. 17 Haziran 1944'te cumhuriyet oldu; künye ülke sürekliliğidir.)", kron=[
        ("1944-06-17", "siyaset", "Halk oylamasının ardından bağımsız cumhuriyet ilan edildi", "OH iceland: 'Iceland formally became an independent republic on June 17, 1944.'")]),
    s("arjantin-cumhuriyeti"), s("bolivya-cumhuriyeti"), s("sili-cumhuriyeti"), s("paraguay-cumhuriyeti"),
    s("peru-cumhuriyeti"), s("uruguay-cumhuriyeti"), s("ekvador-cumhuriyeti"), s("venezuela-cumhuriyeti"),
    s("kolombiya-cumhuriyeti"), s("brezilya-cumhuriyeti"), s("dominik-cumhuriyeti"), s("kuba-cumhuriyeti"),
    s("guatemala"), s("panama-cumhuriyeti"), s("kosta-rika-cumhuriyeti"), s("honduras-cumhuriyeti"),
    s("nikaragua-cumhuriyeti"), s("el-salvador-cumhuriyeti"),
    s("fransiz-guyanasi", not_="pencere ucu, ölçüm değil (D210): Fransız idaresi 1945'ten sonra da sürdü (bugün Fransız denizaşırı bölgesi — künyenin kendi ozet'i); 1946 departman statüsü günü ölçülemedi"),
    s("irlanda-serbest-devlet", ozet_ek="(1945 ufkundan sonra da sürdü — t: pencere ucu. 1937 anayasasıyla adı Éire oldu, künye ülke sürekliliğidir — BRIT Ireland: 'In 1937 the southern state passed a new constitution'.)"),

    # ── ② 1945'TEN SONRA BİTTİ — gün ölçüldüyse gerçek gün, değilse UFUK ───
    gercek("yemen-zeydi", "1962-09-26", "TDV yemen: 26 Eylül 1962 ihtilali Zeydî imamlığına son verdi (ajan WebFetch'i 'DOĞRULANDI' dedi)",
           "(26 Eylül 1962 ihtilaliyle sona erdi — TDV yemen.)",
           [("1962-09-26", "son", "Mısır destekli ihtilal Zeydî imamlığına son verdi", "TDV yemen: '26 Eylül 1962'de Mısır destekli bir ihtilal gerçekleşti ve Zeydî imamlığına son verildi'")]),
    gercek("cammu-kesmir", "1947-10-26", "TDV kesmir: katılım antlaşması 26 Ekim 1947",
           "(26 Ekim 1947'de Hindistan'a katılım antlaşmasını imzaladı — TDV kesmir.)",
           [("1947-10-26", "son", "Mihrace Hindistan'a katılım antlaşmasını imzaladı", "TDV kesmir: '26 Ekim 1947'de katılım antlaşmasını imzaladı'")]),
    gercek("bulgaristan-kralligi", "1946-09-15", "OH bulgaria: 15 Eylül 1946 Halk Cumhuriyeti ilanı · TDV bulgaristan: 8 Eylül 1946 halk oylaması (ÇELİŞKİ DEĞİL: oylama 8, ilan 15)",
           "(15 Eylül 1946'da Halk Cumhuriyeti ilanıyla monarşi sona erdi — OH bulgaria; halk oylaması 8 Eylül — TDV bulgaristan.)",
           [("1946-09-08", "siyaset", "Halk oylamasıyla monarşinin kaldırılmasına karar verildi", "TDV bulgaristan: '8 Eylül 1946'da yapılan halk oylamasıyla cumhuriyet ilân edildi'"),
            ("1946-09-15", "son", "Halk Cumhuriyeti ilan edildi, krallık sona erdi", "OH bulgaria: 'the country being proclaimed a People's Republic on September 15, 1946'")]),
    gercek("sovyet-rusya", "1991-12-25", "OH milestones/1989-1992/collapse-soviet-union: 25 Aralık 1991 bayrak son kez indi · ⚠️ Britannica arama özeti 31 Aralık 1991 'resmî son' der, sayfa açılamadı — ÇELİŞKİ bildirildi, açılan kaynak esas alındı",
           "(25 Aralık 1991'de dağıldı — OH; 1940'ta Baltık devletlerini ilhak etti.)",
           [("1940-08-06", "toprak-kazanc", "Estonya, Letonya ve Litvanya Sovyet cumhuriyetleri olarak ilhak edildi (3-6 Ağustos)", "USHMM-KD: 'annexes them as Soviet Republics on August 3–6'"),
            ("1991-12-25", "son", "Kremlin'de Sovyet bayrağı son kez indirildi, SSCB dağıldı", "OH: 'On December 25, 1991, the Soviet hammer and sickle flag lowered for the last time over the Kremlin'")]),
    sonra("meiji-japonya", "1947 anayasası (OH milestones/1945-1952/japan-reconstruction: 'In 1947 ... new constitution' — YIL verir, gün yok)"),
    sonra("italya", "cumhuriyet 1946 (OH italy: 'after 1946, its successor, the Republic of Italy' — gün ölçülemedi)", kron=[
        ("1943-09-08", "antlasma", "Badoglio hükûmeti Müttefiklere koşulsuz teslim oldu; Almanlar Roma'yı ve kuzeyi ele geçirdi", "USHMM-KD (8 Eylül 1943)")]),
    sonra("macaristan-naiplik", "1946 cumhuriyeti ölçülemedi (OH hungary vermiyor)", kron=[
        ("1944-03-19", "isgal", "Almanya Macaristan'ı işgal etti", "USHMM-KD (19 Mart 1944)"),
        ("1944-10-15", "siyaset", "Ok-Haç hareketi Alman desteğiyle darbe yaptı", "USHMM-KD (15 Ekim 1944)")]),
    sonra("romanya-kralligi", "monarşinin sonu 1947 (TDV romanya: 'Ruslar, Romanya'da monarşi idaresine son verdiler (1947)' — YIL, gün yok)", kron=[
        ("1940-06-28", "toprak-kayip", "SSCB baskısıyla Besarabya ve Kuzey Bukovina'yı bıraktı", "USHMM-KD (28 Haziran 1940)"),
        ("1940-08-30", "toprak-kayip", "II. Viyana Hakemliği: Kuzey Erdel Macaristan'a bırakıldı", "USHMM-KD (30 Ağustos 1940)"),
        ("1944-08-23", "siyaset", "Antonescu rejimi devrildi, Romanya taraf değiştirdi", "USHMM-KD (23 Ağustos 1944)")]),
    sonra("habesistan", "monarşinin sonu 1974 (TDV etiyopya / BRIT Haile-Selassie-I: 'His rule in Ethiopia continued until 1974' — gün yok). 1936-1941 İtalyan ilhakı ARADA: o yıllar [[italyan-dogu-afrikasi]]",
          kron=[("1936-05-09", "toprak-kayip", "İtalya Habeşistan'ı ilhak etti", "BRIT Italian-East-Africa: 'Ethiopia (annexed by Italy on May 9, 1936 ...'"),
                ("1941-05-05", "toprak-kazanc", "Haile Selassie tahtına geri döndü", "TDV etiyopya (özet): 1941'de 5 Mayıs'ta tekrar tahtına oturdu")]),
    sonra("afganistan", "monarşinin sonu 1973 (TDV afganistan: 'Sovyetler, Dâvud Han'ı destekleyerek 1973'te Zâhir Şah'ı kansız bir darbe ile devirmeyi başardılar' — gün yok)"),
    sonra("umman-zengibar", "sultanlığın sonu 1964 (TDV zengibar — ajan özetinde 12 Ocak 1964, kelimesi kelimesine teyit EDİLEMEDİ)"),
    sonra("tibet-ganden-phodrang", "17 Madde Antlaşması 23 Mayıs 1951 (Ohio State Univ. origins.osu.edu) — Lhasa hükûmetinin feshi 1959, gün ölçülemedi"),
    sonra("kamboc-kralligi", "monarşinin kaldırılması (1970) ölçülemedi"),
    sonra("nepal", "Şah hânedanının sonu ölçülemedi (OH nepal cümlesi belirsiz: '...in 2006')"),
    sonra("oniki-ada-italyan", "10 Şubat 1947 Paris Barış Antlaşması ile Yunanistan'a devredildi (TDV oniki-ada, özet). Lozan'dan (24 Temmuz 1923) sonra işgal İTALYAN EGEMENLİĞİNE dönüştü — künye 'aynı yönetim sürüyor' sınıfıdır (② GENİŞLET)"),
    sonra("suriye-lubnan-mandasi", "Fransızlar Suriye'den 1946 baharında, Lübnan'dan 1946 sonunda çekildi (TDV suriye / lubnan, özet — gün yok)"),
    sonra("cekoslovakya", "1 Ocak 1993'te ikiye ayrıldı (BRIT Czechoslovakia: 'On January 1, 1993, Czechoslovakia separated peacefully'). 1939-03-15 → 1945 ARASI İŞGAL/BÖLÜNME: o yıllar [[slovakya-cumhuriyeti]] ve [[bohemya-moravya-protektorasi]]; künye ülke sürekliliğidir (② GENİŞLET)",
          kron=[("1938-09-29", "antlasma", "Münih Antlaşması: Südet bölgesi Almanya'ya bırakıldı", "AVALON imt/munich1: 'Munich, September 29, 1938.'"),
                ("1939-03-15", "isgal", "Alman kuvvetleri Bohemya ve Moravya'yı işgal etti", "AVALON imt/judseize: 'On the 15th March German troops occupied Bohemia and Moravia'")]),
    sonra("yugoslavya", "krallığa son: TDV yugoslavya '29 Kasım 1943' (AVNOJ) — 1945 değil, kaynak ÇELİŞKİSİ bildirildi. 1941-04-17 teslim ve bölünme ARADA: [[hirvatistan-bagimsiz]] vb. Künye ülke sürekliliğidir (② GENİŞLET)",
          kron=[("1929-10-03", "siyaset", "Devletin adı Yugoslavya Krallığı oldu", "TDV yugoslavya: '3 Ekim 1929'da devletin adı Krallık Yugoslavyası ... oldu'"),
                ("1941-04-06", "isgal", "Mihver devletleri Yugoslavya'yı işgale başladı", "USHMM axis-invasion-of-yugoslavia: 'The Axis powers invaded Yugoslavia on April 6, 1941.'"),
                ("1941-04-17", "isgal", "Yugoslavya teslim oldu ve bölündü", "USHMM-KD: 'Yugoslavia surrenders on April 17.'")]),

    # ── ③ 1923-1945 ARASINDA BİTTİ — gerçek bitiş ──────────────────────────
    gercek("almanya", "1945-06-05", "AVALON wwii/ger01 (Berlin Deklarasyonu): Müttefikler 'hereby assume supreme authority with respect to Germany' — 'BERLIN, GERMANY, June 5, 1945' · koşulsuz teslimin yürürlüğü 8 Mayıs 1945 (AVALON wwii/gs11). 'Nazi Almanyası' AYRI KÜNYE AÇILMADI: aynı polity (Reich) — §3.5 ② sınıfı, kronolojiyle işaretlendi",
           "(8 Mayıs 1945 koşulsuz teslim; 5 Haziran 1945'te Müttefikler yüce otoriteyi üstlendi — ardılı [[almanya-muttefik-isgali]]. 1933-1945 Nasyonal Sosyalist rejim bu künyenin içindedir.)",
           [("1933-01-30", "siyaset", "Hindenburg, Nazi Partisi lideri Hitler'i şansölye atadı", "USHMM hitler-appointed-chancellor: 'German President Paul von Hindenburg appoints Nazi Party leader Adolf Hitler as chancellor of Germany.'"),
            ("1938-03-13", "toprak-kazanc", "Anschluss: Avusturya Reich'a katıldı", "AVALON imt/judaus"),
            ("1939-03-16", "toprak-kazanc", "Bohemya ve Moravya protektora olarak Reich'a katıldı", "AVALON imt/judseize"),
            ("1939-09-01", "savas", "Polonya'ya saldırı: II. Dünya Savaşı başladı", "AVALON imt/judpolan"),
            ("1945-05-08", "antlasma", "Koşulsuz teslim yürürlüğe girdi (23.01 Orta Avrupa saati)", "AVALON wwii/gs11: 'cease active operations at 2301 hours Central European time on 8th May 1945'"),
            ("1945-06-05", "son", "Berlin Deklarasyonu: Müttefikler Almanya'da yüce otoriteyi üstlendi", "AVALON wwii/ger01")]),
    gercek("tbmm-turkiye", "1923-10-29", "GERÇEK BİTİŞ, pencere ucu DEĞİL: 29 Ekim 1923 Cumhuriyet ilanı (TDV turkiye) — ardılı [[turkiye-cumhuriyeti]]",
           "Ardılı: [[turkiye-cumhuriyeti]]."),
    gercek("hicaz-kralligi", "1925-12-31", "ÜST SINIR, gün değil: BRIT Hussein-ibn-Ali 'Ali succeeded his father in 1924 as second king of the Hejaz, but he abdicated the following year' — yalnız YIL (1925); t yılın son günü seçildi ki künye gerçek bitişten ÖNCE kesilmesin (hayalet riski). TDV hicaz 1925-26'yı içermiyor",
           "(1925'te II. kral Ali'nin tahttan çekilmesiyle sona erdi — BRIT; toprağı [[suud-ucuncu]]ya geçti.)"),
    gercek("cimma-sultanligi", "1933-01-01", "YIL hassasiyeti: TDV cimma 'Etiyopya (Habeşistan) kralı 1933'ten sonra Cimmâ bölgesini tayin ettiği valilerle idare etmiştir'",
           "(1933'ten itibaren Habeşistan valilerince yönetildi — TDV cimma.)"),
    gercek("senusi", "1931-01-01", "YIL hassasiyeti (TDV ay verir: 'Ocak 1931'): TDV senusiyye — İtalyanlar Kufra'yı 1931 Ocak'ında aldı; Ömer Muhtar Eylül 1931'de idam edildi",
           "(Kufra'nın Ocak 1931'de İtalyanlarca alınmasıyla siyasî yapı çöktü — TDV senusiyye.)"),
    gercek("somali", "1927-01-01", "YIL hassasiyeti: TDV somali 'Mâcerteyn ve Obbia emirliklerine ait topraklar ise 1927'de İtalyanlar tarafından işgal edildi' (özet)",
           "(Mecertin ve Hobyo 1927'de İtalya'ca işgal edildi — TDV somali.)"),
    gercek("avusturya-cumhuriyet", "1938-03-13", "AVALON imt/judaus: 'On the 13th March, 1938, a law was passed for the reunion of Austria in the German Reich.' · USHMM 1938-key-dates aynı gün",
           "(13 Mart 1938 Anschluss ile Almanya'ya katıldı; ardılı [[avusturya-ikinci-cumhuriyet]].)",
           [("1938-03-13", "son", "Anschluss: Avusturya Alman Reich'ına katıldı", "AVALON imt/judaus")]),
    gercek("polonya", "1939-10-06", "USHMM invasion-of-poland-fall-1939: 'The last resistance of Polish units ended on October 6.' — Varşova 28 Eylül 1939'da teslim oldu",
           "(Alman-Sovyet işgaliyle 1939'da bölündü; son direniş 6 Ekim 1939.)",
           [("1939-09-01", "isgal", "Almanya Polonya'ya saldırdı", "AVALON imt/judpolan: 'the war initiated by Germany against Poland on the 1st September, 1939'"),
            ("1939-09-17", "isgal", "SSCB doğudan Polonya'ya girdi", "USHMM-KD (17 Eylül 1939)"),
            ("1939-09-28", "isgal", "Varşova teslim oldu; Almanya ile SSCB Polonya'yı paylaştı", "USHMM invasion-of-poland: 'Polish forces in Warsaw officially surrendered to the Germans on September 28, 1939.'"),
            ("1939-10-06", "son", "Son Polonya birliklerinin direnişi sona erdi", "USHMM invasion-of-poland-fall-1939")]),
    gercek("arnavutluk-bagimsiz", "1939-04-07", "USHMM-KD: 'April 7–15, 1939 Fascist Italy invades and annexes Albania.' · ⚠️ TDV arnavutluk (özet) 6 Nisan der — ÇELİŞKİ bildirildi",
           "(1939'da İtalya'ca işgal ve ilhak edildi — USHMM; 1925 cumhuriyet, 1928 krallık aynı künyede. Ardılı [[arnavutluk-halk-cumhuriyeti]].)",
           [("1939-04-07", "son", "İtalya Arnavutluk'u işgal etti ve ilhak etti (7-15 Nisan)", "USHMM-KD")]),
    gercek("litvanya", "1940-08-06", "ARALIĞIN ÜST UCU: USHMM-KD 'annexes them as Soviet Republics on August 3–6' — Litvanya'nın kendi günü (3 Ağustos) yalnız LOC arama özetinde, sayfadan alıntılanamadı",
           "(Ağustos 1940'ta SSCB'ye ilhak edildi — USHMM.)"),
    gercek("letonya", "1940-08-06", "ARALIĞIN ÜST UCU: USHMM-KD 'August 3–6' — Letonya'nın kendi günü (5 Ağustos) yalnız LOC arama özetinde",
           "(Ağustos 1940'ta SSCB'ye ilhak edildi — USHMM.)"),
    gercek("estonya", "1940-08-06", "LOC Estonia country study: 'In Moscow, the Supreme Soviet granted the request on August 6, 1940.' · USHMM-KD 3-6 Ağustos",
           "(6 Ağustos 1940'ta SSCB'ye ilhak edildi — LOC.)"),
]

# ── ÖLÇÜLEMEDİ — DOKUNULMADI (t: 1923-10-29 KALDI) ───────────────────────
OLCULEMEDI = {
    "ingiliz-kuzey-amerika": "kanada künyesiyle (1867) ÇAKIŞIYOR — mükerrer mi ardıl mı, koordinatör hükmü",
    "tannu-tuva": "1944 SSCB'ye katılış — kaynak açılamadı (BRIT Tuva 'Error')",
    "buganda": "İngiliz himayesinde sürdü mü / 1966-67 sonu — kaynak yok",
    "cohor-sultanligi": "1946 Malaya Birliği — kaynak açılamadı",
    "tidore-sultanligi": "Endonezya'ya katılış — kaynak yok",
    "surakarta": "1946 özel statünün kaldırılması — kaynak yok",
    "yogyakarta": "sultanlık bugün sürüyor mu / devlet olarak sonu — kaynak yok",
    "agadez-sultanligi": "Fransız yönetimi 1917 — devlet olarak sonu kaynaksız",
    "san-devletleri": "1959 sawbwaların yetki devri — kaynak açılamadı",
    "bhopal": "TDV arama sonucu '1952'ye kadar' der ama madde gövdesi okunamadı",
}

H = "anadolu"
YENI = [
    {"id": "turkiye-cumhuriyeti", "ad": "Türkiye Cumhuriyeti", "tur": "cumhuriyet", "bolge": "anadolu",
     "f": "1923-10-29", "t": UFUK, "baskent": "Ankara", "ic_not_t": SURER,
     "ozet": "29 Ekim 1923'te Cumhuriyet'in ilanıyla Türkiye Büyük Millet Meclisi Hükûmeti'nin (bkz. [[tbmm-turkiye]]) yerini alan devlet; 1939'da Hatay'ı kattı. (1945 ufkundan sonra da sürdü — t: pencere ucu.)",
     "kaynak": "TDV turkiye — 'yönetim şekli cumhuriyet olan yeni devlet ilân edildi (29 Ekim 1923)'",
     "kron": [("1923-10-29", "kurulus", "Cumhuriyet ilan edildi", "TDV turkiye"),
              ("1939-06-23", "toprak-kazanc", "İmzalanan antlaşmayla Hatay'ın Türkiye'ye katılması kesinleşti", "TDV antakya: '23 Haziran 1939'da imzalanan antlaşma ile Hatay'ın Türkiye'ye katılması kesinleşti'")]},
    {"id": "hatay-devleti", "ad": "Hatay Devleti", "tur": "cumhuriyet", "bolge": "suriye-filistin",
     "f": "1938-09-02", "t": "1939-06-23", "baskent": "Antakya",
     "ozet": "Fransız mandası altındaki İskenderun Sancağı'nda 2 Eylül 1938'de Millet Meclisi'nin açılmasıyla kurulan, 1939'da Türkiye'ye katılan devlet.",
     "kaynak": "TDV antakya — '2 Eylül 1938'de Hatay Cumhuriyeti Millet Meclisi açılarak devlet başkanlığına Tayfur Sökmen seçildi. 23 Haziran 1939'da imzalanan antlaşma ile Hatay'ın Türkiye'ye katılması kesinleşti'",
     "kron": [("1938-09-02", "kurulus", "Hatay Millet Meclisi açıldı, Tayfur Sökmen devlet başkanı seçildi", "TDV antakya"),
              ("1939-06-23", "son", "Antlaşmayla Türkiye'ye katılması kesinleşti", "TDV antakya")]},
    {"id": "suudi-arabistan", "ad": "Suudi Arabistan Krallığı", "tur": "krallik", "bolge": "arabistan",
     "f": "1932-09-18", "t": UFUK, "baskent": "Riyad", "harita": "suud", "ic_not_t": SURER,
     "ozet": "Necid ve Hicaz Krallığı'nın (bkz. [[suud-ucuncu]]) 18 Eylül 1932 kararnamesiyle aldığı ad. (1945 ufkundan sonra da sürdü — t: pencere ucu.)",
     "kaynak": "OH saudi-arabia — 'The name of the state was changed to the Kingdom of Saudi Arabia by a decree of September 18, 1932.' · TDV suudi-arabistan (gün vermiyor)",
     "kron": [("1932-09-18", "kurulus", "Kararnameyle devletin adı Suudi Arabistan Krallığı oldu", "OH saudi-arabia")]},
    {"id": "mogolistan-halk-cumhuriyeti", "ad": "Moğolistan Halk Cumhuriyeti", "tur": "cumhuriyet", "bolge": "dogu-asya",
     "f": "1924-11-26", "t": UFUK, "baskent": "Ulan Batur", "harita": "mogolistan", "ic_not_t": SURER,
     "ozet": "Bogd Han'ın ölümünden sonra 26 Kasım 1924'te ilan edilen, Sovyet desteğindeki cumhuriyet; ardılı olduğu yapı [[mogolistan]]. (1945 ufkundan sonra da sürdü — t: pencere ucu.)",
     "kaynak": "TDV mogolistan — '...26 Kasım 1924'te Moğolistan Halk Cumhuriyeti ilân edildi'",
     "kron": [("1924-11-26", "kurulus", "Moğolistan Halk Cumhuriyeti ilan edildi", "TDV mogolistan")]},
    {"id": "avusturya-ikinci-cumhuriyet", "ad": "Avusturya Cumhuriyeti (II. Cumhuriyet)", "tur": "cumhuriyet", "bolge": "orta-avrupa",
     "f": "1945-04-01", "t": UFUK, "baskent": "Viyana", "harita": "avusturya-cumhuriyet", "ic_not_t": SURER,
     "ozet": "Almanya'nın çöküşü ve Sovyet işgali sırasında Karl Renner'in kurduğu geçici hükûmetle yeniden doğan Avusturya; öncülü [[avusturya-cumhuriyet]]. f: AY hassasiyeti (Nisan 1945). (1945 ufkundan sonra da sürdü — t: pencere ucu.)",
     "kaynak": "BRIT Karl-Renner — 'became the first chancellor of the reborn Austria in April 1945' · ⚠️ gün ÇELİŞKİLİ: OH austria (ajan özeti) geçici hükûmet 25 Nisan / Demokratik Cumhuriyet ilanı 14 Mayıs; parlament.gv.at arama özeti 27 Nisan (sayfa 404) — f: bu yüzden ayın başı, hassasiyet AY",
     "kron": [("1945-04-01", "kurulus", "Renner geçici hükûmetiyle Avusturya yeniden kuruldu (Nisan 1945; gün kaynaklarda çelişkili)", "BRIT Karl-Renner")]},
    {"id": "vichy-fransasi", "ad": "Fransız Devleti (Vichy)", "tur": "devlet", "bolge": "bati-avrupa",
     "f": "1940-07-10", "t": "1944-08-25", "baskent": "Vichy",
     "ozet": "22 Haziran 1940 mütarekesinden sonra Mareşal Pétain'in 'Fransız Devleti' (État Français); Kasım 1942'den itibaren bütün Fransa Alman işgalinde. Ülke künyesi [[fransa-cumhuriyet]] kesintisiz sürer.",
     "kaynak": "BRIT Vichy-France — '(July 1940–September 1944)' · 'on July 10, 1940, persuaded the National Assembly ... to grant Pétain authority' · t: USHMM-KD Paris'e giriş 25 Ağustos 1944 (Britannica yalnız 'September 1944' der — ÇELİŞKİ bildirildi)",
     "kron": [("1940-07-10", "kurulus", "Ulusal Meclis Pétain'e tam yetki verdi, Fransız Devleti kuruldu", "BRIT Vichy-France · OH france"),
              ("1942-11-11", "isgal", "Almanya bütün Fransa'yı işgal etti, ateşkes ordusunu dağıttı", "BRIT Vichy-France: 'on November 11, 1942, Germany occupied the whole of France'"),
              ("1944-08-25", "son", "Paris kurtarıldı", "USHMM-KD")]},
    {"id": "slovakya-cumhuriyeti", "ad": "Slovak Cumhuriyeti (1939-1945)", "tur": "cumhuriyet", "bolge": "orta-avrupa",
     "f": "1939-03-14", "t": "1945-04-04", "baskent": "Bratislava",
     "ozet": "Alman baskısıyla Çekoslovakya'dan ayrılan, Jozef Tiso'nun yönettiği Alman güdümlü devlet; 1944 Slovak Millî Ayaklanması'na sahne oldu. Ülke künyesi [[cekoslovakya]].",
     "kaynak": "USHMM-KD — 'March 14–15, 1939 Under German pressure, the Slovaks declare their independence and form a Slovak Republic.' · 'April 4, 1945 The capture of Bratislava forces Slovakia to surrender.' · BRIT Jozef-Tiso",
     "kron": [("1939-03-14", "kurulus", "Slovaklar Alman baskısıyla bağımsızlık ilan etti", "USHMM-KD (14-15 Mart 1939)"),
              ("1944-08-29", "isyan", "Slovak Millî Ayaklanması başladı", "USHMM-KD (29 Ağustos – 28 Ekim 1944)"),
              ("1945-04-04", "son", "Bratislava'nın düşmesiyle Slovakya teslim oldu", "USHMM-KD")]},
    {"id": "bohemya-moravya-protektorasi", "ad": "Bohemya ve Moravya Protektorası", "tur": "gecici-isgal", "bolge": "orta-avrupa",
     "f": "1939-03-16", "t": "1945-05-08", "baskent": "Prag",
     "ozet": "Alman işgalinden bir gün sonra kararnameyle Reich'a katılan Çek toprakları. t: Almanya'nın koşulsuz tesliminin yürürlüğü (Prag'ın kurtuluş günü ölçülemedi). Ülke künyesi [[cekoslovakya]].",
     "kaynak": "AVALON imt/judseize — 'on the 16th March the German decree was issued incorporating Bohemia and Moravia in the Reich as a protectorate' · t: AVALON wwii/gs11 '2301 hours Central European time on 8th May 1945'",
     "kron": [("1939-03-16", "kurulus", "Alman kararnamesiyle Protektora kuruldu", "AVALON imt/judseize"),
              ("1945-05-08", "son", "Almanya'nın koşulsuz teslimi yürürlüğe girdi", "AVALON wwii/gs11")]},
    {"id": "hirvatistan-bagimsiz", "ad": "Bağımsız Hırvat Devleti (NDH)", "tur": "devlet", "bolge": "balkanlar",
     "f": "1941-04-10", "t": "1945-05-31", "baskent": "Zagreb", "ic_not_t": "ÜST SINIR, gün değil: BRIT Ustasa 'remained in control of Croatia until May 1945' — yalnız AY; t ayın son günü seçildi ki künye gerçek bitişten önce kesilmesin",
     "ozet": "Ustaşa hareketinin Mihver işgali sırasında ilan ettiği, Bosna-Hersek'i de içine alan Alman-İtalyan güdümlü devlet; Mayıs 1945'te çöktü. Ülke künyesi [[yugoslavya]].",
     "kaynak": "USHMM-KD — 'April 10, 1941 The leaders of the terrorist Ustaša movement proclaim the so-called Independent State of Croatia.' · BRIT Ustasa 'until May 1945'",
     "kron": [("1941-04-10", "kurulus", "Ustaşa Bağımsız Hırvat Devleti'ni ilan etti", "USHMM-KD"),
              ("1941-06-15", "ittifak", "Mihver'e resmen katıldı", "USHMM-KD: 'Croatia joins the Axis powers formally on June 15, 1941.'")]},
    {"id": "mancukuo", "ad": "Mançukuo", "tur": "devlet", "bolge": "dogu-asya",
     "f": "1932-03-09", "t": "1945-08-31", "baskent": "Hsinking (Changchun)",
     "ic_not_t": "ÜST SINIR, gün değil: BRIT Puyi 'taken prisoner by the Russians (August 1945)' — yalnız AY",
     "ozet": "Japonya'nın Mançurya'nın üç eyaletinden kurduğu kukla devlet; son Qing imparatoru Puyi önce devlet başkanı, 1934'ten imparator. f: Puyi'nin başkanlığa getirildiği gün (devletin ilan günü ayrıca ölçülemedi). Ülke künyesi [[cin-cumhuriyeti]].",
     "kaynak": "BRIT Manchukuo — 'puppet state created in 1932 by Japan' · BRIT Puyi — 'On March 9, 1932, he was installed as president, and from 1934 to 1945 he was emperor'",
     "kron": [("1932-03-09", "kurulus", "Puyi Mançukuo devlet başkanı yapıldı", "BRIT Puyi"),
              ("1934-01-01", "hukumdar", "Puyi imparator ilan edildi (Kangde)", "BRIT Puyi — YIL verir"),
              ("1945-08-31", "son", "Sovyet işgali, Puyi esir alındı (Ağustos 1945)", "BRIT Puyi — AY verir, gün üst sınır")]},
    {"id": "nanjing-wang-jingwei", "ad": "Çin Cumhuriyeti Yeniden Düzenlenmiş Millî Hükûmeti (Wang Jingwei, Nanjing)", "tur": "devlet", "bolge": "dogu-asya",
     "f": "1940-03-30", "t": UFUK, "baskent": "Nanjing",
     "ic_not_t": "pencere ucu, ölçüm değil (D210): Japon teslimiyle 1945'te sona erdi — bitiş GÜNÜ ölçülemedi; UFUK üst sınırdır",
     "ozet": "Japonların işgal ettiği Çin topraklarını yönetmek için Wang Jingwei başkanlığında Nanjing'de kurulan hükûmet. Ülke künyesi [[cin-cumhuriyeti]].",
     "kaynak": "BRIT Wang-Ching-wei — 'On March 30, 1940, in cooperation with the Japanese, he became the head of a new regime ... centred in the former Nationalist capital of Nanjing.' · bitiş: bulunamadı",
     "kron": [("1940-03-30", "kurulus", "Wang Jingwei Japon desteğiyle Nanjing'de hükûmet kurdu", "BRIT Wang-Ching-wei"),
              ("1944-11-10", "hukumdar", "Wang Jingwei Japonya'da öldü", "BRIT Wang-Ching-wei (doğum-ölüm satırı)")]},
    {"id": "italyan-dogu-afrikasi", "ad": "İtalyan Doğu Afrikası", "tur": "gecici-isgal", "bolge": "dogu-afrika",
     "f": "1936-06-01", "t": "1941-11-30", "baskent": "Addis Ababa",
     "ic_not_t": "ÜST SINIR, gün değil: BRIT 'British forces overran the area between January and November 1941' — yalnız AY",
     "ozet": "İtalya'nın 9 Mayıs 1936'da ilhak ettiği Habeşistan ile Eritre ve İtalyan Somalisi'nden oluşan sömürge bütünü; 1941'de İngiliz kuvvetlerince ele geçirildi. Bkz. [[habesistan]].",
     "kaynak": "BRIT Italian-East-Africa — 'Ethiopia (annexed by Italy on May 9, 1936, and proclaimed a part of Italian East Africa June 1)' · 'British forces overran the area between January and November 1941'",
     "kron": [("1936-06-01", "kurulus", "Habeşistan İtalyan Doğu Afrikası'nın parçası ilan edildi", "BRIT Italian-East-Africa"),
              ("1941-11-30", "son", "İngiliz kuvvetleri bölgenin tamamını ele geçirdi (Ocak-Kasım 1941)", "BRIT Italian-East-Africa — AY verir, gün üst sınır")]},
    {"id": "ispanya-milliyetci", "ad": "Milliyetçi İspanya (Franco, Burgos)", "tur": "devlet", "bolge": "iberya",
     "f": "1936-10-01", "t": "1939-04-01", "baskent": "Burgos",
     "ozet": "İç savaşta ayaklanan generallerin bölgesi; Franco 1 Ekim 1936'da devlet başkanı adıyla Burgos'ta hükûmet kurdu, 1 Nisan 1939 zaferiyle bütün İspanya'ya hâkim oldu. Ülke künyesi [[ispanya]] kesintisiz sürer.",
     "kaynak": "BRIT Spanish-Civil-War — 'On October 1, 1936, he was named head of state and set up a government in Burgos.' · BRIT Francisco-Franco — 'Franco won a complete and unconditional victory on April 1, 1939.'",
     "kron": [("1936-10-01", "kurulus", "Franco devlet başkanı ilan edildi, Burgos'ta hükûmet kurdu", "BRIT Spanish-Civil-War"),
              ("1939-04-01", "birlesme", "Franco'nun zaferiyle bütün İspanya milliyetçi yönetime geçti", "BRIT Francisco-Franco")]},
    {"id": "arnavutluk-halk-cumhuriyeti", "ad": "Arnavutluk (Komünist Yönetim → Halk Cumhuriyeti)", "tur": "cumhuriyet", "bolge": "balkanlar",
     "f": "1944-11-29", "t": UFUK, "baskent": "Tiran", "harita": "arnavutluk", "ic_not_t": SURER,
     "ozet": "Alman çekilmesiyle 29 Kasım 1944'te kurtuluşu tamamlanan ve komünist yönetime geçen Arnavutluk; Halk Cumhuriyeti ilanı 1946. Öncülü [[arnavutluk-bagimsiz]]. (1945 ufkundan sonra da sürdü — t: pencere ucu.)",
     "kaynak": "TDV arnavutluk (ÖZET, kelimesi kelimesine DEĞİL): 29 Kasım 1944 kurtuluş; Mart 1946 anayasa ve Halk Cumhuriyeti",
     "kron": [("1944-11-29", "kurulus", "Kurtuluş tamamlandı, komünist yönetim kuruldu", "TDV arnavutluk (özet)")]},
    {"id": "almanya-muttefik-isgali", "ad": "Almanya — Müttefik İşgal İdaresi", "tur": "gecici-isgal", "bolge": "orta-avrupa",
     "f": "1945-06-05", "t": UFUK, "baskent": "Berlin (Müttefik Kontrol Konseyi)",
     "ic_not_t": "pencere ucu, ölçüm değil (D210): işgal idaresi 1945 ufkundan sonra da sürdü (1949 iki Alman devleti — bu oturumda ölçülmedi)",
     "ozet": "Berlin Deklarasyonu'yla dört Müttefik devletin Almanya'da yüce otoriteyi üstlendiği işgal idaresi. Öncülü [[almanya]]. (1945 ufkundan sonra da sürdü — t: pencere ucu.)",
     "kaynak": "AVALON wwii/ger01 — 'Declaration Regarding the Defeat of Germany and the Assumption of Supreme Authority by Allied Powers; June 5, 1945'",
     "kron": [("1945-06-05", "kurulus", "Müttefikler Almanya'da yüce otoriteyi üstlendi", "AVALON wwii/ger01")]},
    {"id": "endonezya-cumhuriyeti", "ad": "Endonezya Cumhuriyeti", "tur": "cumhuriyet", "bolge": "guneydogu-asya",
     "f": "1945-08-17", "t": UFUK, "baskent": "Cakarta", "ic_not_t": SURER,
     "ozet": "Japon işgalinin sonunda Sukarno'nun Hollanda'dan bağımsızlığını ilan ettiği cumhuriyet; Hollanda ancak 1949'da tanıdı (bkz. [[hollanda-dogu-hint]]). (1945 ufkundan sonra da sürdü — t: pencere ucu.)",
     "kaynak": "BRIT Sukarno — 'he declared Indonesia's independence (August 17, 1945)'",
     "kron": [("1945-08-17", "kurulus", "Sukarno Endonezya'nın bağımsızlığını ilan etti", "BRIT Sukarno")]},
    {"id": "filipin-commonwealth", "ad": "Filipinler Milletler Topluluğu (Commonwealth)", "tur": "devlet", "bolge": "guneydogu-asya",
     "f": "1935-01-01", "t": "1946-07-04", "baskent": "Manila",
     "ic_not_t": "f: YIL hassasiyeti (OH yalnız '1935' verir; 15 Kasım günü ölçülemedi) · t: OH gün verir",
     "ozet": "ABD yönetimindeki Filipinler'in 1935'te kurulan özerk yönetimi; 1942-1945 Japon işgali, 4 Temmuz 1946'da bağımsızlık.",
     "kaynak": "OH philippines — 'autonomous commonwealth in 1935' (ajan özeti) · 'The United States recognized the Republic of the Philippines as an independent state on July 4, 1946'",
     "kron": [("1935-01-01", "kurulus", "Özerk Commonwealth yönetimi kuruldu (gün ölçülemedi)", "OH philippines — YIL"),
              ("1946-07-04", "son", "Filipinler Cumhuriyeti bağımsız oldu", "OH philippines")]},
]
