# -*- coding: utf-8 -*-
"""KASA-YER: YER-1104'ün bütün çıktılarını KASA için tek dosyada toplar.

Girdi: siniflar.json (YAZIM) · eksik_aday.json (parti 1-4, elle YAZIM'a geçenler, Pleiades koordinatlılar) · konum.json (parti 1-3
koordinatsızların sınıfı) · pleiades_tur.json (antik tur) · konum4.json (parti 4 koordinatsızların sınıfı).
Çıktı: KASA-YER.md — ① YAZIM eşlemeleri ② eklenecek noktalar (ad, koordinat, ilk sahip + tarih + kaynak) ③ olay yerleri / yapılar.
Sahip kimlikleri devletler.js'te aranır, tarih künyenin f/t'si içinde mi ölçülür (aşağıda 'künye' sütunu).
"""
import os, re, sys, json, collections

KOK = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import girdi

BURA = os.path.dirname(os.path.abspath(__file__))


def yukle(ad):
    yol = os.path.join(BURA, ad)
    return json.load(open(yol, encoding="utf-8")) if os.path.exists(yol) else []


SIN = yukle("siniflar.json")
EA = yukle("eksik_aday.json")
KON = yukle("konum.json")
PT = yukle("pleiades_tur.json")
K4 = yukle("konum4.json")
K5 = yukle("konum5.json")
MADDE = {k["ad"]: k["ornek"] for k in SIN}
DEV = {d["id"]: d for d in girdi.oku_devletler() if d.get("id")}

# EMRELİC düzeltmesi (4 Kasım 2026): Stonehenge anıttır; Amada ve Semna için "yerleşim mi, kale mi" — Pleiades placeTypes okundu.
DUZELT = {
    "Stonehenge": ("OLAY YERİ/YAPI", "anıt — Pleiades 509089189 placeTypes: cultural-landscape, archaeological-site, monument. Petek değil."),
    "Amada": ("OLAY YERİ/YAPI", "tapınak — Pleiades 683591498 'Temple of Amada', placeTypes: temple-2 (III. Thutmose'un Amon-Re tapınağı). "
              "Yerleşim değil: maddenin (II. Amenhotep steli) toprağını Napata/Elefantin taşır. Petek değil."),
    "Semne": ("YERLEŞİM (beyanlı)", "Mısır sınır kalesi — Pleiades 795856 'Semna', placeTypes: fort. Orta Krallık garnizon kalesi "
              "(III. Sesostris steli kalenin kendisinde): EMRELİC kuralıyla yerleşim sayılır, BEYAN: 'kale-yerleşim (garnizon), sivil "
              "kasaba değil'. Pleiades konumu DARMC kaynaklı, hassasiyet 'unknown' — KASA haritada II. Şelale batı yakasıyla doğrular."),
}

# Eklenecek noktaların ilk sahibi: (devlet id ya da OSMANLI, tarih, sahip zinciri / gerekçe, kaynak, güven)
# Tarih maddeninkidir; kaynak yalnız yıl/ay veriyorsa öyle yazılır (gün uydurulmaz). KAYNAK-GEREK = aday sahip, kaynakla teyit edilmedi.
SAHIP = {
    "Karlofça": ("OSMANLI", "1521-08", "Macar kalesi → Osmanlı (927 Ramazan / Ağustos 1521, Belgrad'ın fethi sırasında Sirem kaleleriyle) → "
                 "Avusturya 1687 (yıl) → 1699-01-26 antlaşmayla resmen Avusturya'ya", "TDV «Karlofça» (DİA 24, s. 504)", "KAYNAKLI (ay/yıl)"),
    "Arad": ("macaristan-habsburg", "1849-08-13", "1848-49'da Macaristan Krallığı (Habsburg tacı); kale 1849 yazında Macar ihtilâlcilerinin "
             "eline geçti — gün KAYNAK-GEREK", "madde kaynağı (honvedelem.hu); TDV'de madde yok", "KAYNAK-GEREK"),
    "Nukuʻalofa": ("tonga-kralligi", "1893-02-18", "Tonga Krallığı başkenti", "madde kaynağı (Britannica; Wood-Ellem 1999)", "KAYNAKLI (madde)"),
    "Otrar": ("harizmsah", "1218-01-01", "Hârizmşahlar → Moğol (mogol-imparatorlugu) 1219 sonu (TDV: 'Otrar, Sığnak ve Hucend… düştü')",
              "TDV «Hârizmşahlar»", "KAYNAKLI (yıl)"),
    "Çayeli": ("OSMANLI", "1916-03-08", "Osmanlı (Rize sancağı) → Rus işgali 1916-03-08 → Osmanlı 1918-03-02; ABİ MERKEZ: Rize — madde "
               "kaynağı Çaykıran 2021 (Askerî Tarih Araştırmaları Dergisi) Rize'yi tarihler", "Çaykıran 2021 (madde) + ABİ MERKEZ beyanı",
               "BEYANLI YAKLAŞIKLIK"),
    "Bucaş": ("lehistan", "1672-10-18", "Lehistan palankası; Osmanlı 3 Ekim 1672'de kuşattı, antlaşmada 'Podolya ülkesi dışında' olduğu için "
              "Lehistan'a iade edildi, yeniçeriler kaleden çıktı", "TDV «Bucaş Antlaşması»", "KAYNAKLI"),
    "Küçük Kaynarca": ("OSMANLI", "1774-07-21", "Silistre yöresi köyü; ABİ MERKEZ: Silistre", "TDV «Küçük Kaynarca Antlaşması» (madde)",
                       "BEYANLI YAKLAŞIKLIK (köyün zinciri Silistre'den)"),
    "Sevr": ("fransa-cumhuriyet", "1920-08-10", "Fransa (III. Cumhuriyet); antlaşma günü TDV «Sevr Antlaşması» — madde t 1920-04 ay "
             "hassasiyetinde, KASA gününü düzeltmeli", "TDV «Sevr Antlaşması»", "KAYNAKLI (ülke dışı nokta)"),
    "Tepedelen": ("OSMANLI", "1820-03-01", "Osmanlı Yanya paşalığı (Tepedelenli Ali Paşa'nın memleketi)", "TDV «Tepedelenli Ali Paşa» "
                  "(K. Beydilli)", "KAYNAKLI (madde)"),
    "Karánşebeş (Caransebeş)": ("OSMANLI", "1552-08-01", "1552 Temeşvar seferinde fethedildi (öncesi Macar/Habsburg — KAYNAK-GEREK)",
                                "TDV «Tımışvar» (madde)", "KAYNAKLI (ay; öncül sahip KAYNAK-GEREK)"),
    "Kalhu (Nimrud)": ("orta-asur", "-1259-01-01", "I. Şalmaneser kurdu (Livius'a göre önceden küçük kasaba) → -878 II. Aşşurnasirpal başkenti "
                       "(yeni-asur)", "Livius.org (Lendering) — akademik teyit gerek", "KAYNAK-GEREK (Livius tek dayanak)"),
    "Nikopolis (Doğu Pontus)": ("roma-cumhuriyeti", "-0065-01-01", "Pompeius'un Mithridates'e zaferinin yerinde kurduğu şehir",
                                "Plutarkhos, Pompeius 32-36; Appianos, Mithridatika 97-100 (madde)", "KAYNAKLI (yıl)"),
    "Sikyon": ("akhaia-birligi", "-0250-01-01", "Sikyon tiranlığı → Aratos Akhaia Birliği'ne kattı", "Polybios 2.43; Plutarkhos, Aratos 4-9",
               "KAYNAKLI (yıl; öncül tiranlık künyesi yok)"),
    "Argos": (None, "-0271-01-01", "Pyrrhos Argos'ta öldü; Argos bağımsız polis/Antigonos etkisi — sahip KAYNAK-GEREK",
              "Plutarkhos, Pyrrhos 30-34 (madde sahip vermiyor)", "KAYNAK-GEREK"),
    "Ithome (Messene)": (None, "-0369-01-01", "Messene kuruldu, bağımsız Messenia (Teb himayesi) — devletler.js'te Messenia künyesi yok",
                         "Diodoros 15.66; Pausanias 4.26-27; Cartledge 2002", "KAYNAKLI, KÜNYE YOK"),
    "Eleusis (Attika)": ("atina-demokrasisi", "-0504-01-01", "Attika demi", "Herodotos 5.74-76", "KAYNAKLI (yıl)"),
    "Philae": ("roma-cumhuriyeti", "-0028-01-01", "Ptolemaios sonrası Roma Mısır'ı (prefekt Gallus); roma-imp künyesi -0026'da başlar",
               "Cassius Dio 51.17; Strabon (madde)", "KAYNAKLI (yıl)"),
    "Beth-Shean": ("misir-yeni-krallik", "-1293-01-01", "I. Seti'nin Kenan seferi; Mısır garnizon şehri", "Breasted, ARE c.3 §§ 80-156 (madde)",
                   "KAYNAKLI (yıl)"),
    "Akhetaton": ("misir-yeni-krallik", "-1347-01-01", "IV. Amenhotep'in yeni başkenti (kur); terk tarihi KAYNAK-GEREK (bit:)",
                  "Shaw 2000; Murnane-Van Siclen (madde)", "KAYNAKLI (kur yılı)"),
    "Semne": ("misir-orta-krallik", "-1866-01-01", "III. Sesostris'in II. Şelale sınır kalesi", "Breasted, ARE c.1 § 652 (madde)",
              "KAYNAKLI (yıl) · BEYAN: kale-yerleşim (garnizon), sivil kasaba değil"),
    "Lakiş": ("yahuda", "-0700-01-01", "Yahuda şehri → Sennacherib aldı (yeni-asur)", "Livius «Assyria»; Luckenbill (madde)", "KAYNAKLI (yıl)"),
}
# Parti 1-3'ün Pleiades koordinatlı 29 adayı (EKSIK-ADAY.md): parti 4'te referanssız Pleiades sonuçlarının çoğu yanlış çıktığı için
# hepsi elle denetlendi ve atlasın en yakın noktası yeniden ölçüldü (girdi.km). Karar: YAZIM (≤ 3 km) · RED (yanlış yer) · OLAY · OLAY+KASABA
# · YERLEŞİM (beyan notuyla).
KARAR13 = {
    "Marakanda": ("YAZIM", "Semerkant (2,5 km)"), "Emesa": ("YAZIM", "Humus (1,2 km)"), "Hippo Regius (Numidia)": ("YAZIM", "Annaba (2,4 km)"),
    "Tell Tweini (Gibala)": ("YAZIM", "Cebele (Jablah) (1,5 km)"),
    "Philae (Birinci Şelale)": ("YAZIM", "Philae — ② eklenecek noktayla aynı yer (Pleiades 786089), tek nokta"),
    "Suda": ("RED", "Pleiades 'Meta Sudans'ı (Roma'da çeşme) verdi; madde Girit'teki Suda kalesi — koordinat yok"),
    "Herakleia": ("RED", "Pleiades Hvar'daki Herakleia'yı verdi; madde Pyrrhos'un Lucania Herakleia'sı — koordinat yok"),
    "Leukopetra": ("RED", "Pleiades Reggio yakınındaki Leucopetra'yı verdi; madde -146 Korint Isthmos'u savaşı — OLAY YERİ, koordinat yok"),
    "Nemrut": ("OLAY", "Nemrut Dağı hierothesionu (I. Antiokhos'un anıt mezarı) — Pleiades 658544, anıt; petek değil"),
    "Thermopylai": ("OLAY", "geçit (-480 savaşı) — Pleiades 541140"),
    "Thapsus (Tunus kıyısı)": ("OLAY+KASABA", ""), "Pharsalus (Tesalya)": ("OLAY+KASABA", ""), "Alesia (Burgonya)": ("OLAY+KASABA", "oppidum"),
    "Bibracte (Galya)": ("OLAY+KASABA", "oppidum"), "Opis": ("OLAY+KASABA", ""), "İpsos (Frigya)": ("OLAY+KASABA", ""),
    "Utica": ("YERLEŞİM", "BEYAN: Pleiades kaydı Utica tiyatrosu (907258690) — şehrin içinde, nokta şehir için yeterli"),
    "Nola (Kampanya)": ("YERLEŞİM", "BEYAN: Pleiades kaydı Divus Augustus tapınağı (961707395) — Nola'nın içinde"),
    "Viminacium": ("YERLEŞİM", "BEYAN: Pleiades kaydı Viminacium amfitiyatrosu (227495941) — şehrin içinde"),
}
SAHIP.update({
    "Kaneş (Kültepe)": (None, "-1899-01-01", "Kaneş şehir devleti (Aşşur karumu -1899) → -1749 Kuşşara kralı Anitta'nın başkenti — künye yok "
                        "(hitit künyesi sonra)", "Veenhof & Eidem 2008 (OBO 160/5); Bryce 2005 s. 55-57", "KAYNAKLI, KÜNYE YOK"),
    "Plataia": (None, "-0478-01-01", "Boiotia'da Atina müttefiki polis — künye yok", "Herodotos 9.58-70; Thukydides 2.1-2", "KAYNAKLI, KÜNYE YOK"),
    "Thapsus (Tunus kıyısı)": ("roma-cumhuriyeti", "-0045-01-01", "Caesar-Juba savaşı; şehrin -46 sahibi KAYNAK-GEREK", "Bellum Africum 79-86",
                               "KAYNAK-GEREK"),
    "Pharsalus (Tesalya)": ("roma-cumhuriyeti", "-0047-01-01", "Tesalya (Roma Makedonya eyaleti) — eyalet bağı KAYNAK-GEREK",
                            "Caesar, Bellum Civile 3.82-99", "KAYNAK-GEREK"),
    "Alesia (Burgonya)": (None, "-0051-01-01", "Mandubii oppidumu (Galya) → Roma (Caesar) — künye yok", "Caesar, Bellum Gallicum 7.68-89",
                          "KAYNAKLI, KÜNYE YOK"),
    "Bibracte (Galya)": (None, "-0057-01-01", "Aedui oppidumu — künye yok", "Caesar, Bellum Gallicum 1.23", "KAYNAKLI, KÜNYE YOK"),
    "Opis": ("yeni-babil", "-0538-01-01", "Babil (Nabonid) → Pers (Kyros)", "Nabonid Kroniği (ABC 7) iii.12-14, Grayson 1975", "KAYNAKLI (yıl)"),
    "İpsos (Frigya)": (None, "-0300-01-01", "Frigya kasabası; -301 savaşı — sahip (Antigonos) KAYNAK-GEREK", "Diodoros 20.107-113", "KAYNAK-GEREK"),
    "Utica": ("kartaca", "-0148-01-01", "Kartaca müttefik şehri → -149 Roma'ya teslim oldu", "Appianos, Punika 75 (madde)", "KAYNAKLI (yıl)"),
    "Kimiata": ("pontus", "-0301-01-01", "Mithridates Ktistes'in Paphlagonia'daki üssü", "Strabon 12.3.41 (madde)",
                "KAYNAKLI (yıl) — KÜNYE AŞIMI: pontus -0280'de başlıyor; aynı polity (Ktistes) → kural: künyeyi GENİŞLET, KASA kaynakla"),
    "Tiryns": ("miken", "-1199-01-01", "Miken saray merkezi → -1199 yıkım, saray sonrası yerel topluluk", "Cline 2014; Dickinson 1994", "KAYNAKLI (yıl)"),
    "Nola (Kampanya)": ("roma-imp", "0014-08-19", "Augustus'un öldüğü şehir", "Suetonius, Divus Augustus 100; Tacitus, Annales 1.5", "KAYNAKLI"),
    "Viminacium": ("bizans", "0441-01-01", "Moesia (Doğu Roma) → 441 Hun (hun-avrupa)", "Priskos fr. 2, 5 (Blockley)", "KAYNAKLI (yıl)"),
    "Pselkis": ("kush-krallik", "-0022-01-01", "Kush → Roma (Petronius aldı)", "Strabon 17.1.53-54", "KAYNAKLI (yıl)"),
    "Naukratis": ("ptolemai", "-0168-01-01", "Ptolemaios Mısır'ı (Yunan ticaret şehri)", "Polybios 28.20", "KAYNAKLI (yıl)"),
    "Mareia": ("ahamenis-misir", "-0459-01-01", "Ahameniş Mısır'ı sınır kalesi (İnaros isyanı)", "Thukydides 1.104", "KAYNAKLI (yıl)"),
    "Momemphis": ("sait-26-hanedan", "-0569-01-01", "Apries-Amasis savaşı", "Herodotos 2.161-169", "KAYNAKLI (yıl)"),
    "Musasir": ("urartu", "-0713-01-01", "Urartu tapınak şehri (Haldi) → II. Sargon yağmaladı", "Livius «Urartu» — akademik teyit gerek",
                "KAYNAK-GEREK (Livius tek dayanak)"),
    "Klimonas": (None, "-9149-01-01", "Kıbrıs Erken Aseramik Neolitik köyü — devlet öncesi, künye yok", "Vigne vd. 2012, PNAS 109(22)",
                 "KAYNAKLI (14C), KÜNYE YOK"),
})
SAHIP4 = yukle("sahip4.json")  # parti 4: konum4_yaz.py yazar — {ad: [id, tarih, zincir, kaynak, güven]}
SAHIP.update({k: tuple(v) for k, v in (SAHIP4 or {}).items()})
SAHIP.update({k: tuple(v) for k, v in (yukle("sahip5.json") or {}).items()})  # parti 5: konum5_yaz.py

# yer7 turu (4 Kasım 2026): kalan KAYNAK-GEREK satırları. Antik 6'nın Oxford Reference okuması EMRELİC'indir (yalnız arama alıntıları;
# oturum düştüğü için tam madde okunmadı) — kaynak sütununda "Oxford (EMRELİC okuması)" yazılı. MKL = Magyar Katolikus Lexikon
# (lexikon.katolikus.hu, Pálos Könyvtár 1980-2013).
SAHIP.update({
    "Arad": ("macaristan-habsburg", "1849-08-13", "vár 1177'de ilk anılır → 1551-1688 Osmanlı ('a törökök kezén volt') → Habsburg → 1849'da "
             "honvéd ordusu altı aylık kuşatmadan sonra kaleyi aldı → Világos teslimi (13.8.1849) sonrası Habsburg; 6.10.1849 Arad şehitleri. "
             "1848-49 Macar ihtilâl hükûmetinin künyesi devletler.js'te YOK", "MKL «Arad»", "KAYNAKLI (yıl) — ihtilâl dönemi KÜNYE GEREK"),
    "Szászsebes (Sebeş)": ("dogu-macar-kralligi", "1540-07-22", "Erdel Sakson şehri (1203'te var) — Szapolyai 'Osmanlı himayesine girince "
                           "Osmanlı desteğiyle Macar ve Erdel kralı oldu'; 1540 ölümünden sonra 1541'de Erdel haraçgüzâr voyvodalık. Sahip bölge "
                           "düzeyinden (Erdel)", "MKL «Szászsebes»; TDV «Erdel»", "BEYANLI YAKLAŞIKLIK (zincir Erdel'den)"),
    "Sen Gotar": ("macaristan-habsburg", "1664-08-01", "1184 III. Béla'nın Sistersiyen manastırı → 1532 ya da önce boşaldı → 1605 bir Avusturya "
                  "başkomutanı Bocskai hayduklarından korkup kiliseyi havaya uçurdu (Habsburg tarafı sınır yeri) → 1734 manastır yeniden. "
                  "1664'te yerleşimin nüfusu MKL'de yok", "MKL «Szentgotthárd»", "KAYNAKLI (Habsburg tarafı) — 1664 nüfus teyitsiz"),
    "Barcs": ("macaristan-naiplik", "1921-08-20", "Sırp (SHS) işgali → 17.8.1921 Sırp çekilişi başladı → 20.8.1921 öğle Macar jandarması girdi, "
              "saat 17'de askerî devir teslim", "Ernyes M., Magyar Rendészet 2021/1, 141-154, DOI 10.32577/mr.2021.1.10 (madde kaynağı)",
              "KAYNAKLI (gün)"),
    "Thânesâr": (None, "1014-07-02", "'Onuncu seferini Thânesâr şehrine yapan Mahmud … tapınak ve putu tahrip ettirdi (405/1014-15)' — akın, "
                 "fetih değil; sonra Gazneli elinde → 'Hânsî, Thânesâr, Nagarkot … geri aldılar' (435/1043-44, Hint racaları). 1014'teki "
                 "Hindu sahibi TDV'de yok", "TDV «Mahmûd-ı Gaznevî», «Mevdûd b. Mes‘ûd-i Gaznevî»", "KAYNAK-GEREK (1014 sahibi; zincir kısmen TDV)"),
    "Nazilli": ("OSMANLI", "1920-06-22", "1919'da Aydın-Nazilli cephesinde Kuva-yı Milliye'nin sivil direniş merkezi (3 kongre: Ağustos, Eylül, "
                "6 Ekim 1919) — 1920 işgaline girip girmediği bu kaynakta yok", "TDV «Aydın»; BELGİ Dergisi 2019, DOI 10.33431/belgi.559464",
                "KAYNAK-GEREK (1920 işgali) — DergiPark araması insan doğrulaması istedi (aşılmadı); TR Dizin API'sinde 6 sorgu sonuçsuz"),
    "Gediz": ("OSMANLI", "1920-08-29", "Kütahya sancağının kazası (1520'den) — 1920 işgali TDV'de ve TR Dizin'de bulunamadı", "TDV «Kütahya»",
              "KAYNAK-GEREK (1920 işgali) — TR Dizin API 3 sorgu sonuçsuz"),
    "Kalhu (Nimrud)": ("orta-asur", "-1259-01-01", "I. Şalmaneser kurdu (13. yy ortası) → 'In 883 bc, under Ashurnasirpal II, it became the "
                       "Assyrian capital' (yeni-asur) → yıkım 'In 614–612 bce, Nimrud,…' (bit: -0611 = MÖ 612, BEYAN: kaynak 614-612 aralığı, "
                       "tek yıl teyit edilmedi)", "Concise Oxford Dictionary of Archaeology, 3. bs. 2021, «Nimrud»; Oxford Encyclopedia of "
                       "Archaeology in the Near East, 2011 (yıkım) (Oxford, EMRELİC okuması — yalnız alıntı); Livius", "KAYNAKLI (bit: aralık beyanlı)"),
    "Argos": ("antigonid-makedonya", "-0271-01-01", "bağımsız polis; 323 sonrası Makedon (Antigonos Gonatas) denetimi → 'In 229 bce Argos "
              "entered the Achaean League' (akhaia-birligi). Denetim ilhak değil: KASA v: düşünmeli", "Oxford Encyclopedia of Ancient Greece "
              "and Rome; OCD4 «Aratus (2)» (Oxford, EMRELİC okuması — çift)", "KAYNAKLI (aralık) — denetim/ilhak ayrımı beyanlı"),
    "Thapsus (Tunus kıyısı)": ("roma-cumhuriyeti", "-0045-01-01", "savaş MÖ 46 (Oxford Companion to Classical Literature); şehrin sahiplik "
                               "zinciri okunmadı (Oxford tam metni abonelikte kilitli)", "Bellum Africum 79-86; Oxford (EMRELİC okuması)",
                               "KAYNAKLI (savaş yılı); sahip zinciri BEYANLI"),
    "Pharsalus (Tesalya)": ("roma-cumhuriyeti", "-0047-01-01", "Tesalya kenti, MÖ 6. yy'dan Phthiotis'te baskın (OCD4, Helly); savaş MÖ 48 — "
                            "Makedon/Roma yılları okunmadı (Oxford tam metni kilitli)", "OCD4 «Pharsalus» (Oxford, EMRELİC okuması)",
                            "KAYNAKLI (ilk sahip polis, savaş yılı); Roma bağı BEYANLI"),
    "İpsos (Frigya)": ("antigonos-krallik", "-0300-01-01", "Antigonos'un Frigya'sı; 'Antigonus the One-eyed was defeated and killed by "
                       "Lysimachus and Seleucus I in 301 bc' (OCD «Ipsus», Lazenby) → ardıl: Frigya Lysimakhos'a (beyanlı, açıkça okunmadı), "
                       "'Later Seleucus gained Asia Minor' (Oxford Bible Atlas; MÖ 281 Kurupedion beyanlı)",
                       "OCD «Ipsus» (J. F. Lazenby); Oxford Bible Atlas (Oxford, EMRELİC okuması — yalnız alıntı); Diodoros 20.107-113",
                       "KAYNAKLI (ilk sahip, savaş yılı); ardıl BEYANLI"),
    "Musasir": ("urartu", "-0713-01-01", "Hasanlu'nun batısında Urartu yerleşimi; II. Sargon yağması (madde -714) Oxford'da doğrulanmadı",
                "Oxford Encyclopedia of Archaeology in the Near East (EMRELİC okuması); Livius «Urartu»", "KAYNAKLI (aidiyet); yıl Livius"),
})
# Kronoloji düzeltme önerileri (KASA uygular; kronoloji dosyasına bu dalda yazılmadı)
DUZELTME = [
    ("data/olaylar_p0055.js — 1369-01-01 'Timurtaş Bey … Kızılcaağaç Yenicesi (Elhova) ve Yanbolu'yu aldı'",
     "EMRELİC kararı: Yanbolu'nun Osmanlı fethi TDV «Yanbolu» esas → **1373** (eski görüş 766/1365). 1369 maddesi TDV «Murad I» ('herhalde 1369 "
     "bahar ve yazı') ve «Timurtaş Paşa» (1367-1369) ile Elhova için kalır; 'Yanbolu' maddenin `b`/`yer` alanından çıkarılır ve 1373-01-01 "
     "kesinlik:yil ayrı madde yazılır (ic_not: TDV yanbolu 1373 / 1365 + TDV murad-i 1369 — çelişki beyanı). Yanbolu noktasının Osmanlı "
     "kırılması 1373-01-01 (Değişmez 2 bu maddeyle kapanır)."),
    ("Kalhu (Nimrud) -0878-01-01 'II. Aşşurnasirpal Kalhu'yu başkent yaptı'",
     "Oxford (Concise Oxford Dict. of Archaeology 2021): 'In 883 bc … Assyrian capital' → madde -0882-01-01 olmalı (astronomik yıl). "
     "EMRELİC okuması arama alıntısıdır; KASA tam maddeyi okuyabilirse çift teyit."),
]


def kunye(sid, t):
    """Sahip kimliği devletler.js'te var mı, tarih f/t içinde mi."""
    if not sid:
        return "—"
    if sid == "OSMANLI":
        return "d: OSMANLI"
    d = DEV.get(sid)
    if not d:
        return "**KÜNYE YOK**"
    f, tt = d.get("f") or "", d.get("t") or ""

    def yil(s):  # negatif yıllar dize olarak sıralanmaz — yıl sayısıyla karşılaştır
        m = re.match(r"(-?\d+)", s or "")
        return int(m.group(1)) if m else None
    yt, yf, ytt = yil(t), yil(f), yil(tt)
    if yt is not None and ((yf is not None and yt < yf) or (ytt is not None and yt > ytt)):
        return "**künye dışı** (%s → %s)" % (f, tt)
    return "künye içinde (%s → %s)" % (f, tt)


# ① YAZIM
YZ = []
for k in SIN:
    if k["sinif"] == "YAZIM":
        YZ.append((k["ad"], k["sayi"], k["hedef"], k.get("guven") or "—", "yer_sinifla (eş-ad / yazım oranı)"))
for r in EA:
    e = r.get("elle") or ""
    if e.startswith("YAZIM"):
        YZ.append((r["ad"], r["sayi"], e.split("→", 1)[1].strip(), "DOĞRULA" if "KASA karar" in e else "YÜKSEK",
                   "eksik_aday (Pleiades ≤ 1 km ya da elle)"))
for s in PT:
    if s["sonuc"] == "YAZIM":
        YZ.append((s["ad"], len(MADDE.get(s["ad"], [])), s["atlas"], "YÜKSEK", "pleiades_tur (Pleiades ≤ 3 km)"))
P13 = [r for r in EA if r["sira"] <= 150 and r["koordinat"] and not (r.get("elle") or "").startswith("YAZIM")]
for r in P13:
    k = KARAR13.get(r["ad"], ("YERLEŞİM", ""))
    if k[0] == "YAZIM":
        YZ.append((r["ad"], r["sayi"], k[1], "DOĞRULA", "eksik_aday Pleiades noktası ≤ 3 km (yeniden ölçüldü)"))
for kk, ad_ in ((K4, "konum4"), (K5, "konum5")):
    for x in kk:
        if x.get("yazim"):
            YZ.append((x["ad"], x["sayi"], x["yazim"], x.get("yazim_guven", "DOĞRULA"), "%s (elle / ≤ 3 km)" % ad_))

# ② eklenecek noktalar
EK = []
for x in KON:
    if x["sinif"] == "YERLEŞİM" and x["koordinat"]:
        EK.append((x["ad"], x["koordinat"], x["konum"], "parti 1-3 (TDV-KONUM)"))
for s in PT:
    if s["sonuc"] == "EKSİK" and s["koordinat"] and DUZELT.get(s["ad"], ("YERLEŞİM",))[0].startswith("YERLEŞİM"):
        EK.append((s["ad"], s["koordinat"], "Pleiades " + s["kaynak"], "antik tur (PLEIADES)"))
for r in P13:
    k = KARAR13.get(r["ad"], ("YERLEŞİM", ""))
    if k[0] in ("YERLEŞİM", "OLAY+KASABA"):  # OLAY+KASABA: EMRELİC kararıyla o yılda var olan kasaba → YERLEŞİM
        EK.append((r["ad"], r["koordinat"], r["osm"] + ((" · " + k[1]) if k[1] else ""),
                   "parti 1-3 (Pleiades%s)" % (" — olay maddesindeki kasaba" if k[0] == "OLAY+KASABA" else "")))
for kk, p in ((K4, "parti 4"), (K5, "parti 5")):  # koordinat yalnız konum4/5_yaz.py'den (referanssız Pleiades sonuçları elle denetlendi)
    for x in kk:
        if x.get("sinif") == "YERLEŞİM" and x.get("koordinat"):
            EK.append((x["ad"], x["koordinat"], x["konum"], "%s (%s%s)" % (p, x.get("tur"),
                                                                          " — olay maddesindeki kasaba" if "EMRELİC kararı" in x["not_"] else "")))
KSZ = [x for kk in (K4, K5) for x in kk if x.get("sinif") in ("YERLEŞİM", "ANTİK YERLEŞİM") and not x.get("koordinat")]

# ③ olay yerleri ve yapılar
OL = []
for x in KON:
    if x["sinif"] in ("OLAY YERİ", "KALE/YAPI"):
        OL.append((x["ad"], x["sinif"], x["not_"], "%s — %s" % (x["madde_t"], x["madde"][:70])))
for r in P13:
    k = KARAR13.get(r["ad"], ("",))
    if k[0] in ("OLAY", "RED"):
        OL.append((r["ad"], "OLAY YERİ/YAPI" if k[0] == "OLAY" else "KOORDİNAT REDDEDİLDİ", k[1], "%s — %s" % (r["madde_t"], r["madde"][:70])))
for ad, (sinif, not_) in DUZELT.items():
    if not sinif.startswith("YERLEŞİM"):
        o = MADDE.get(ad, [{}])[0]
        OL.append((ad, sinif, not_, "%s — %s" % (o.get("t"), (o.get("b") or "")[:70])))
for x in K4 + K5:
    if x.get("sinif") in ("OLAY YERİ", "KALE/YAPI", "SEMT/YAPI"):
        OL.append((x["ad"], x["sinif"], x["not_"], "%s — %s" % (x["madde_t"], x["madde"][:70])))


def h(s):
    return str(s).replace("|", "/").replace("\n", " ")


c4 = collections.Counter(x.get("sinif") for x in K4)
M = ["# KASA-YER — YER-1104'ün KASA'ya teslim özeti\n",
     "Ölçen: LAB SALI · 4 Kasım 2026 · `kasa_yer.py` (dal lab-1104-yer7; yer7 turu: kalan 13 KAYNAK-GEREK — Macar 3 MKL + TDV Erdel, "
     "Barcs Magyar Rendészet 2021, Thânesâr TDV kısmen, antik 6 Oxford (EMRELİC okuması), Nazilli/Gediz bulunamadı; ⑤ düzeltme önerileri. "
     "yer6 turu: 26 KAYNAK-GEREK sahipten 13'ü TDV ve bölge "
     "ansiklopedileriyle kaynaklandı — Hrvatska enciklopedija: Bileća, Slankamen; kalan 13 satırda denenen kaynak yazılı; Rumkale "
     "TDV tarifi + GeoNames ile konumlandı, İtil 'konum bilinmiyor'). Evren: kronolojinin `yer` alanında geçen, atlas yerleşimiyle "
     "eşleşmeyen 1.247 ad (`yer_sinifla.py`). EKSİK sınıfının **421 adının tamamı** işlendi (anılma sırasıyla, DUR listesi hariç; parti "
     "1-3: 1-150, parti 4: 151-300, parti 5: 301-421).\n",
     "**EMRELİC kararı (4 Kasım 2026):** olay maddesinde geçen ad o yılda var olan gerçek bir kasabaysa YERLEŞİM'dir ve ②'ye eklenir "
     "(Yanbolu, Nizip, Kumanova, Zenta, Thapsus, Pharsalus…); yalnız ova, geçit, tepe, ırmak, ordugâh gibi olay yerleri petek olmaz (③).\n",
     "Zincir: mükerrer (normalleştirilmiş ad + 3 km) → Pleiades (antik) / TDV tarifi + GeoNames (İslâm dünyası) / CHGIS (Çin) / GeoNames "
     "beyanlı (öteki) → olay yeri ayrımı. **OSM dayanak değildir; yanlış nokta eksik noktadan kötüdür** — doğrulanmayan aday koordinatsız "
     "kalır. Yerleşim dosyalarına yazılmadı; uygulama KASA'nındır.\n",
     "**Sayılar:** YAZIM eşlemesi %d · eklenecek nokta %d · olay yeri / yapı %d. Ayrıntı dosyaları: YAZIM.md, EKSIK-ADAY.md, "
     "TDV-KONUM.md, PLEIADES.md, KONUM4.md, KONUM5.md. Konumu doğrulanamayan yerleşim %d (④).\n" % (len(YZ), len(EK), len(OL), len(KSZ)),
     "## EMRELİC düzeltmesi: Stonehenge · Amada · Semna\n"]
M += ["- **%s → %s:** %s" % (ad, s, n) for ad, (s, n) in DUZELT.items()]
M += ["\n## ① YAZIM eşlemeleri — atlasta başka adla var (yeni nokta DEĞİL)\n",
      "KASA: kronoloji maddesine hedefin `yer_id`'sini yazar ya da hedef kayda eş ad ekler. DOĞRULA satırları gözle onay ister.\n",
      "| kronolojideki ad | anılma | atlas kaydı | güven | ölçüt |", "|---|---|---|---|---|"]
M += ["| %s | %s | %s | %s | %s |" % tuple(map(h, r)) for r in YZ]
M += ["\n## ② Eklenecek noktalar — atlasta 3 km içinde nokta yok\n",
      "İlk sahip = maddenin tarihindeki sahip, maddenin ya da TDV'nin kaynağıyla. 'künye' sütunu: sahip kimliği devletler.js'te var mı, "
      "tarih künyenin f/t'si içinde mi (ölçüldü). KAYNAK-GEREK satırlarında sahip bir adaydır — KASA kaynakla teyit etmeden `s:` yazmamalı.\n",
      "| ad | koordinat (lat, lon) | koordinat dayanağı | ilk sahip | tarih | sahip zinciri | sahip kaynağı | güven | künye | parti |",
      "|---|---|---|---|---|---|---|---|---|---|"]
eksik_sahip = []
for ad, ko, dayanak, parti in EK:
    s = SAHIP.get(ad)
    if not s:
        eksik_sahip.append(ad)
        o = MADDE.get(ad, [{}])[0]
        s = (None, o.get("t") or "—", "madde: %s" % (o.get("b") or "")[:60], (o.get("kaynak") or "")[:60], "KAYNAK-GEREK (sahip okunmadı)")
    sid, t, zin, kay, gv = s
    M.append("| %s | %.5f, %.5f | %s | %s | %s | %s | %s | %s | %s | %s |" % (
        h(ad), ko[0], ko[1], h(dayanak)[:140], sid or "—", t, h(zin), h(kay), gv, kunye(sid, t), parti))
M += ["\n## ③ Olay yerleri ve yapılar — petek DEĞİL (kronoloji odağı olarak kalır)\n",
      "Savaş alanı, ova, geçit, anıt, tapınak ve ada kalesi petek noktası olursa çevresindeki toprağı yanlış sahibe dağıtır.\n",
      "| ad | sınıf | not | madde |", "|---|---|---|---|"]
M += ["| %s | %s | %s | %s |" % tuple(map(h, r)) for r in OL]
M += ["\n## ④ Konumu doğrulanamayan yerleşimler — koordinat yok (yanlış nokta eksik noktadan kötü)\n",
      "Parti 1-3'ün koordinatsız antik adayları PLEIADES.md ve TDV-KONUM.md'dedir; burada parti 4-5.\n",
      "| ad | neden | madde |", "|---|---|---|"]
M += ["| %s | %s | %s — %s |" % (h(x["ad"]), h(x["not_"]), x["madde_t"], h(x["madde"][:70])) for x in KSZ]
M += ["\n## ⑤ Kronoloji düzeltme önerileri (KASA uygular)\n", "| madde | öneri |", "|---|---|"]
M += ["| %s | %s |" % (h(a), h(b)) for a, b in DUZELTME]
open(os.path.join(BURA, "KASA-YER.md"), "w", encoding="utf-8", newline="\n").write("\n".join(M) + "\n")
print("YAZIM", len(YZ), "EKLE", len(EK), "OLAY", len(OL), "sahipsiz", len(eksik_sahip), eksik_sahip[:20])
print("parti4 sınıf", dict(c4))
