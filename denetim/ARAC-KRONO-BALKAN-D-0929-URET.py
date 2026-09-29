# KRONO-BALKAN-D-0929 — Yunanistan ve Bulgaristan çok künyeli kronoloji dosyalarının ÜRETİCİSİ.
# Kullanım: py denetim/ARAC-KRONO-BALKAN-D-0929-URET.py
# Çıktı:   data/kronoloji_cok_yunanistan.js  → window.KRONOLOJI_COK_YUNANISTAN
#          data/kronoloji_cok_bulgaristan.js → window.KRONOLOJI_COK_BULGARISTAN
# Ad kuralı: oturumlar/KRONO-DUNYA-0929-ORTAK.md §4.1 (M-5396). Her maddede
# devlet/taraflar/devletler = GERÇEK künye id'si (data/devletler.js'ten okundu).
#
# 🔴 MÜKERRER DİSİPLİNİ — bu dosyalara YALNIZ başka hiçbir kayıtta olmayan olay
# girer. Taranan evren (29 Eylül 2026): künye kronolojileri + bütün
# KRONOLOJI_COK_/SINIR_ dosyaları + kronoloji_balkan.js (KRONO-BAGLAMA-0929
# bağlayacak; ~49 Yunan + ~52 Bulgar maddesi orada) + olaylar*.js çekirdeği.
# Oralarda duran olay burada YENİDEN YAZILMADI; kusurları
# denetim/KRONO-BALKAN-D-0929-DUZELTME.md'de.
import json, os, sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def T(slug, yazar, yil, bolum=""):
    b = f"#{bolum}" if bolum else ""
    ad = {"vidin": "Vidin", "yanya": "Yanya", "mora": "Mora",
          "yunanistan": "Yunanistan", "girit": "Girit", "limni": "Limni", "tasoz": "Taşoz",
          "semadirek": "Semadirek", "makedonya": "Makedonya", "bulgaristan": "Bulgaristan",
          "sofya": "Sofya", "tirnova--bulgaristan": "Tırnova"}[slug]
    return f"TDV İslâm Ansiklopedisi, «{ad}» ({yazar}, {yil}) — islamansiklopedisi.org.tr/{slug}{b}"

TDV_YUN2 = T("yunanistan", "Mehmet Hacısalihoğlu", 2013, "2")
TDV_GIRIT = T("girit", "Cemal Tukin", 1996)
TDV_BG_OSM = T("bulgaristan", "Yusuf Halaçoğlu", 1992, "2-osmanli-donemi")
TDV_BG_BAG = T("bulgaristan", "Nazif Kuyucuklu", 1992, "3-bagimsizlik-donemi")

def M(t, devletler, b, tur, onem, dunya, kapsam, yer_id, etiket, d, kaynak, **ek):
    m = {"t": t, "devlet": devletler[0], "taraflar": devletler, "devletler": devletler,
         "b": b, "tur": tur, "onem": onem, "dunya": dunya, "kapsam": kapsam,
         "yer_id": yer_id, "etiket": etiket, "d": d, "kaynak": kaynak}
    m.update(ek)
    return m

YUNANISTAN = [
M("1826-04-04", ["yunanistan"], "Petersburg Protokolü — İngiltere ve Rusya bir Yunan beyliğinde anlaştı",
  "diplomasi", 4, 3, "dis", "St. Petersburg",
  ["diplomasi", "bagimsizlik-sureci", "konu-siyasi"],
  "İngiltere ile Rusya 4 Nisan 1826'da imzaladıkları protokolle, Osmanlı Devleti'ne yıllık vergi "
  "verecek bir Yunan beyliğinin kurulması üzerinde anlaştı. Protokolün ilk maddesi Müslümanların bu "
  "beylikten çıkarılmasını öngörüyordu; aynı ilke ertesi yılın Londra Protokolü'ne de girdi ve "
  "1829-1832 görüşmeleriyle uygulandı.",
  TDV_YUN2),
M("1828-01-01", ["yunanistan"], "Kapodistrias yeni Yunan devletinin başına geçti",
  "siyaset", 4, 2, "ic", "",
  ["hukumet", "bagimsizlik-sureci", "konu-siyasi"],
  "Korfulu olan ve uzun yıllar Rus çarının hizmetinde diplomatlık yapan Ioannes Kapodistrias, "
  "Yunanistan'ın fiilen bağımsızlaştığı 1828'de yeni devletin başına çağrıldı. Rusya'ya yakın bir "
  "siyaset izledi ve baskıcı bir yönetime yöneldi; 1831'de bir suikastla öldürüldü.",
  TDV_YUN2, gun="1828 (TDV yıl verir, ay ve gün vermez)", odak_kimlik=["yunanistan"]),
M("1895-01-01", ["yunanistan"], "Trikupis mâlî kriz yüzünden hükümetten çekildi",
  "siyaset", 3, 1, "ic", "Atina",
  ["hukumet", "maliye", "konu-siyasi"],
  "Yüzyılın son çeyreğinde siyasal partilerin güçlendiği ve 'krallık demokrasisi' denen dönemin en "
  "etkili siyasetçisi Harilaos Trikupis, finans krizlerinin etkisiyle 1895'te hükümetten çekilmek "
  "zorunda kaldı.",
  TDV_YUN2, gun="1895 (TDV yıl verir)"),
M("1897-02-10", ["yunanistan"], "Yunan filosu Girit'e gönderildi — Vassos adayı kral adına zaptettiğini ilan etti",
  "kriz", 4, 2, "dis", "",
  ["girit-meselesi", "enosis", "konu-askeri"],
  "Atina'daki ihtilal komitelerince desteklenen Giritli milliyetçilerin talebiyle Yunan hükümeti "
  "10 Şubat 1897'de Prens Georgios "
  "kumandasında bir filoyu Girit sularına gönderdi. Karaya çıkan birliklerin kumandanı Vassos 16 "
  "Şubat'ta adayı Yunan kralı adına zaptettiğini bildiren bir beyanname yayımladı. Büyük devletler 2 "
  "Mart'ta Atina'ya ortak nota verdi ve 21 Mart'tan itibaren adayı abluka altına aldı; bunalım Nisan'da "
  "Osmanlı-Yunan Savaşı'na dönüştü.",
  TDV_GIRIT + " · " + TDV_YUN2, odak_yer=["Kandiye (Girit)", "Hanya"]),
M("1904-01-01", ["yunanistan"], "Yunanistan Makedonya'da Rum çete hareketini başlattı",
  "siyaset", 4, 2, "dis", "Selanik",
  ["makedonya-meselesi", "cete", "konu-siyasi"],
  "Makedonya'yı topraklarına katmak isteyen Yunanistan, Selânik başkonsolosluğu ve konsolosluk memuru "
  "görünümünde gönderilen subaylar aracılığıyla 1904'te bölgede sistemli bir Rum çete hareketi "
  "başlattı. Bulgar-Makedon örgütü VMRO'nun silahlı faaliyetleriyle bölgedeki Rum etkisi "
  "bastırılmaya çalışılınca Yunanistan, Rum Makedonya Komitesi'ni örgütleyip güçlendirdi.",
  T("makedonya", "Mehmet Hacısalihoğlu", 2003) + " · " + TDV_YUN2, gun="1904 (TDV yıl verir)"),
M("1908-05-11", ["girit-devleti"], "Hâmî devletler Girit'ten askerlerini çekme kararını bildirdi",
  "diplomasi", 3, 1, "dis", "Hanya",
  ["girit-meselesi", "himaye", "konu-siyasi"],
  "Girit yüksek komiseri Zaimis Mart 1908'de dört hâmî devlete, 23 Temmuz 1906 tarihli ortak notanın "
  "şartlarının yerine geldiğini — adada milis teşkilatının tamamlandığını ve Müslümanların can ve mal "
  "güvenliğinin sağlandığını — bildirdi. Bunun üzerine hâmî devletler askerlerini adadan çekmeye karar "
  "verdi ve kararı 11 Mayıs 1908 tarihli notayla Zaimis'e iletti.",
  TDV_GIRIT),
M("1912-10-10", ["yunanistan", "girit-devleti"], "Yunan hükümeti Girit ile meclislerin birleşmesini kabul etti",
  "birlesme", 4, 2, "dis", "Atina",
  ["girit-meselesi", "enosis", "balkan-savasi", "konu-siyasi"],
  "Hâmî devletler Girit'in Yunanistan'la birleşmesine yıllarca izin vermemişti. Balkan Harbi'nin "
  "başlangıcında Yunan hükümeti 10 Ekim 1912'de iki meclisin birleşmesine muvafakat ederek Girit'i "
  "topraklarına kattı. Osmanlı açısından ada ancak 1913 Londra ve Bükreş antlaşmalarıyla elden çıktı.",
  TDV_GIRIT + " · " + TDV_YUN2),
M("1912-10-21", ["yunanistan"], "Yunan donanması Limni'yi işgal etti",
  "isgal", 3, 2, "dis", "Limni",
  ["balkan-savasi", "ege-adalari", "konu-askeri"],
  "I. Balkan Savaşı'nda Yunan donanması Kuzey Ege adalarına yöneldi ve Limni 21 Ekim 1912'de işgal "
  "edildi.",
  T("limni", "Feridun Emecen", 2003),
  ic_not_d="Haritada Limni ve Bozbaba işgal penceresi 1912-10-08'de açılıyor: 8 Ekim Jülyen = 21 Ekim "
           "Gregoryen, yani aynı gün iki takvimle yazılmış. Öneri: denetim/KRONO-BALKAN-D-0929-YERLESIM-ONERI.md"),
M("1912-10-30", ["yunanistan"], "Yunan donanması Taşoz'u işgal etti",
  "isgal", 3, 2, "dis", "Taşoz",
  ["balkan-savasi", "ege-adalari", "konu-askeri"],
  "Balkan Savaşı'nın başında Yunanistan 30 Ekim 1912'de Taşoz'u işgal etti. Taşoz maddesi aynı gün "
  "Semadirek'in de işgal edildiğini söyler; Semadirek maddesi ise bu adanın işgalini 1 Kasım 1912'ye "
  "koyar.",
  T("tasoz", "Süleyman Kızıltoprak", 2011),
  ic_not_d="TDV kendi içinde çelişiyor: Taşoz maddesi Semadirek'i de 30 Ekim'de sayıyor, Semadirek "
           "maddesi 1 Kasım diyor. Haritada Taşoz 1912-10-18 (Jülyen 18 Ekim = Gregoryen 31 Ekim; TDV'den 1 gün farklı)."),
M("1912-11-01", ["yunanistan"], "Semadirek Yunan işgaline girdi",
  "isgal", 2, 1, "dis", "Semadirek",
  ["balkan-savasi", "ege-adalari", "konu-askeri"],
  "8 Ekim 1912'de başlayan I. Balkan Harbi sırasında Semadirek 1 Kasım 1912'de Yunanistan tarafından "
  "işgal edildi. Sevr Antlaşması (1920) adayı Yunanistan'a bırakıyordu; adadaki Türk egemenliği "
  "hukuken 24 Temmuz 1923'te Lozan Antlaşması'yla sona erdi.",
  T("semadirek", "İlhan Şahin", 2009),
  ic_not_d="Haritada Semadirek işgal penceresi 1912-10-19'da açılıyor (Jülyen 19 Ekim = Gregoryen 1 Kasım)."),
]

# Osmanlı öncesi Yunan coğrafyasının polity'leri (1281-1430). `epir-despotlugu` KÜNYESİ YOK —
# M-5416 kuralı (3): önerilen id ile yazıldı, künyeyi koordinatör açar (KUNYE-DUNYA-0929 eksik
# listesinde öncelik 1). `mora-despotlugu` künyesi VAR.
TDV_YANYA = T("yanya", "Machiel Kiel", 2013)
TDV_MORA = T("mora", "John Alexander", 2020)
ORTACAG = [
M("1318-01-01", ["epir-despotlugu", "bizans"], "Yanya yeniden Bizans'a bağlandı, özerkliğini korudu",
  "idari", 3, 1, "dis", "Yanya",
  ["epir", "bizans", "konu-siyasi"],
  "1204'ten sonra Mikael Angelos'un kurduğu bağımsız Epir Despotluğu'nun merkezi olan Yanya, 1318'de "
  "tekrar Bizans İmparatorluğu'na katıldı; ancak şehir bir dereceye kadar özerkliğini korudu.",
  TDV_YANYA, gun="1318 (TDV yıl verir)"),
M("1366-01-01", ["epir-despotlugu"], "Tomas Preljubović Yanya'ya hâkim oldu",
  "hukumdar", 3, 1, "ic", "Yanya",
  ["epir", "sirp-hakimiyeti", "konu-siyasi"],
  "Stefan Duşan'ın 1355'te ölümünden sonra Epir ve Tesalya'nın idaresi üvey kardeşi Symeon Uroş'a geçti. "
  "1366-1367'de Yanya, sert yönetimiyle tanınan Sırp despotu Tomas Preljubović'in idaresine girdi.",
  TDV_YANYA, gun="1366-1367 (TDV iki yıl verir)"),
M("1380-01-01", ["epir-despotlugu"], "Yanya despotu Tomas Arnavutlara karşı Osmanlılardan yardım istedi",
  "ittifak", 4, 2, "dis", "Yanya",
  ["epir", "osmanli-ile-ilk-temas", "arnavut", "konu-askeri"],
  "1379'da Malakasi Arnavutları, Bulgarlar ve Ulahlardan oluşan bir birliğin saldırısını püskürten "
  "Tomas, 1380'deki yeni saldırıda Osmanlılardan yardım istedi. Lala Şâhin Mayıs 1382'de Tomas'a yardım "
  "için yeniden geldi; 1384 yazında Timurtaş Paşa büyük bir orduyla Epir'e döndü. Böylece Osmanlılar "
  "Epir'in iç çatışmalarına çağrılan bir güç olarak bölgeye girdi.",
  TDV_YANYA, gun="1380 (TDV yıl verir)"),
M("1411-01-01", ["epir-despotlugu"], "Yanya, Kefalonya lordu Carlo Tocco'nun yönetimine geçti",
  "hanedan", 4, 1, "ic", "Yanya",
  ["epir", "tocco", "konu-siyasi"],
  "Despot Esau Şubat 1411'de ölünce Yanyalılar, Kefalonya, Ayamavra ve Vonitsa'nın hâkimi İtalyan lordu "
  "Carlo Tocco'yu şehri teslim almaya davet etti. Carlo sonradan Arta'yı da topraklarına kattı ve Temmuz "
  "1429'daki ölümüne kadar bu yerleri elinde tuttu; Yanya ertesi yıl Osmanlılara teslim oldu.",
  TDV_YANYA, gun="Şubat 1411 (TDV ay verir, gün vermez)"),
M("1383-01-01", ["mora-despotlugu"], "Theodoros Palaiologos Mora despotu oldu — Arnavut iskânı",
  "hukumdar", 3, 1, "ic", "Mora",
  ["mora", "iskan", "arnavut", "konu-siyasi"],
  "Kantakuzenos kolundan Manuel'in 1380'e dek süren yönetiminden sonra despotluk Palaiologos kolundan "
  "Theodoros'a geçti (1383-1407). Theodoros savaşlarla boşalan topraklara binlerce Arnavut aileyi "
  "yerleştirdi; bu iskân Mora'nın nüfus yapısını kalıcı olarak değiştirdi.",
  TDV_MORA + " · " + TDV_YUN2, gun="1383 (TDV yıl verir)"),
M("1395-01-01", ["mora-despotlugu"], "Osmanlılar Carlo Tocco'nun davetiyle Mora'ya girdi",
  "savas", 3, 1, "dis", "Mora",
  ["mora", "osmanli-ile-temas", "konu-askeri"],
  "Despot Theodoros, Aka Prensliği'ni ele geçiren Navarre paralı bölüğünü çıkarmak için Tesalya'daki "
  "Gazi Evrenos Bey'i yardıma çağırmış, ama Evrenos kısa sürede taraf değiştirmişti. Theodoros'un "
  "kuşattığı Korint'i elinde tutan İtalyan lordu Carlo Tocco'nun daveti üzerine Osmanlılar 1395'te "
  "yarımadaya yeniden girdi; Niğbolu'dan sonra Yıldırım Bayezid Mora'yı doğrudan hedef aldı.",
  TDV_MORA, gun="1395 (TDV yıl verir)"),
]

BULGARISTAN = [
M("1365-01-01", ["vidin-carligi", "bulgar-carligi"], "Macar Kralı Layoş Vidin'i ele geçirdi",
  "toprak-kayip", 4, 2, "dis", "Vidin",
  ["vidin-carligi", "macaristan", "konu-siyasi"],
  "İvan Aleksandır 1360'tan kısa bir süre önce Vidin ile çevresini oğlu İvan Stratsimir'e vererek "
  "yarı bağımsız bir prenslik hâline getirmişti. Macarlar 1365'te Vidin'i ve bütün bölgeyi ele geçirdi; "
  "Kral Layoş şehri bir Macar vilayeti (Banat) yaptı, Stratsimir'i ailesiyle birlikte Hırvatistan'a "
  "sürdü ve bölgede Bulgarları zorla Katolikleştirmeye girişti.",
  T("vidin", "Machiel Kiel", 2013) + " · " + TDV_BG_OSM, gun="1365 (TDV yıl verir)",
  ic_not_d="devlet: 'vidin-carligi' KÜNYESİ YOK — önerildi (KUNYE-DUNYA-0929 eksik listesinde de var; "
           "denetim/KRONO-BALKAN-D-0929-KUNYE.md). Künye açılana dek bulgar-carligi üzerinden görünür. "
           "TDV Bulgaristan (1992) İvan Aleksandır'ın ölümünü de 1365'e koyuyor; TDV Vidin (2013) onu 1369'da "
           "hayatta gösteriyor; atlas 1371 kullanıyor — DUZELTME'de."),
M("1369-01-01", ["vidin-carligi", "bulgar-carligi"], "Vidin Macarlardan geri alındı — Osmanlı'nın Vidin'le ilk teması",
  "toprak-kazanc", 3, 1, "dis", "Vidin",
  ["vidin-carligi", "macaristan", "eflak", "konu-siyasi"],
  "Macarlar 1369'da Vidin'den atıldı ve şehir Stratsimir'e döndü. İvan Aleksandır Macarları Tuna'nın "
  "ötesine atmak için Türklerden yardım almıştı; Osmanlıların Vidin'le ilk teması böyle gerçekleşti.",
  T("vidin", "Machiel Kiel", 2013) + " · " + TDV_BG_OSM, gun="1369 (TDV yıl verir)",
  ic_not_d="TDV'nin iki maddesi kurtarıcıyı farklı veriyor: Vidin (Kiel 2013) İvan Aleksandır + Türk "
           "yardımı; Bulgaristan (Halaçoğlu 1992) Batı Bulgarlarının davet ettiği Şişman + Eflak prensi "
           "Vladislav, ve Layoş'un bir yıl sonra şehre yeniden girdiğini ekler. d: metni yeni ve daha "
           "ayrıntılı Vidin maddesini izler; hüküm koordinatörde (DUZELTME)."),
M("1392-01-01", ["bulgar-carligi"], "Şişman'ın Macar Kralı Sigismund ile gizli yazışması ortaya çıktı",
  "diplomasi", 3, 1, "dis", "Tırnova",
  ["tabiiyet", "macaristan", "konu-siyasi"],
  "1388 seferinden sonra vergiye bağlanarak Tırnova'da bırakılan Kral Şişman, 1392'de Macar Kralı "
  "Sigismund'la gizlice haberleşip Osmanlılar'a karşı tavır aldı. Bu durum Yıldırım Bayezid'e "
  "ulaşınca krallığın tamamen kaldırılmasına karar verildi; karar ertesi yıl Tırnova'nın düşüşüyle "
  "uygulandı.",
  TDV_BG_OSM, gun="1392 (TDV yıl verir)"),
M("1879-01-01", ["bulgaristan-prensligi"], "Sofya Bulgaristan Prensliği'nin başşehri oldu",
  "idari", 4, 1, "ic", "Sofya",
  ["baskent", "prenslik", "konu-idari"],
  "Türk nüfusunun ayrılmasından sonra 3 Ocak 1878'de Rus kuvvetlerinin işgaline uğrayan Sofya, 1879'da "
  "Bulgar Prensliği'nin, 1908'de de Bulgar Krallığı'nın başşehri oldu.",
  T("sofya", "İlhan Şahin", 2009), gun="1879 (TDV yıl verir)"),
M("1895-01-01", ["bulgaristan-prensligi"], "Bulgar hükümetinin desteğiyle Yüksek Makedonya Komitesi kuruldu",
  "siyaset", 3, 1, "dis", "Sofya",
  ["makedonya-meselesi", "cete", "konu-siyasi"],
  "Makedonya'nın özerkliğini elde etmek amacıyla 1893'te kurulan İç Makedon İhtilâl Örgütü'nün "
  "(VMRO) ardından, 1895'te Bulgar hükümetinin desteğiyle Yüksek Makedonya Komitesi oluşturuldu. "
  "Böylece Bulgar devleti, Osmanlı idaresindeki Makedonya üzerindeki mücadeleye örgüt eliyle girdi.",
  T("makedonya", "Mehmet Hacısalihoğlu", 2003), gun="1895 (TDV yıl verir)",
  ic_not_d="TDV Makedonya VMRO'nun Sofya'da kurulduğunu söyler; yaygın akademik anlatım Selanik der. "
           "Kuruluş yeri bu maddenin konusu olmadığı için d: metnine alınmadı (DUZELTME)."),
M("1923-09-23", ["bulgaristan-kralligi"], "Komünistlerin Eylül Ayaklanması bastırıldı",
  "isyan", 3, 1, "ic", "",
  ["ic-savas", "komunizm", "konu-siyasi"],
  "9 Haziran darbesi sırasında tarafsızlık ilan eden komünistler 23 Eylül 1923'te yeni rejime karşı "
  "silahlı ayaklanma başlattı, ancak ağır bir yenilgiye uğradılar. Yıl sonuna doğru hükümet, Komünist "
  "Parti'yi ve bağlı kuruluşlarını kapatan Devleti Koruma Kanunu'nu meclisten geçirdi.",
  TDV_BG_BAG, odak_kimlik=["bulgaristan-kralligi"]),
]

def yaz(ad, glob, baslik, maddeler):
    maddeler = sorted(maddeler, key=lambda m: m["t"])
    govde = ",\n".join(json.dumps(m, ensure_ascii=False) for m in maddeler)
    metin = (
        "// =====================================================================\n"
        f"// {baslik} · çok künyeli kronoloji (KRONO-BALKAN-D-0929)\n"
        "// =====================================================================\n"
        "// 🔴 ÜRETİLMİŞ DOSYA — elle düzenleme; üretici denetim/ARAC-KRONO-BALKAN-D-0929-URET.py\n"
        f"// window.{glob} — şartname oturumlar/KRONO-BALKAN-D-0929.md + KRONO-DUNYA-0929-ORTAK.md §4.1\n"
        "// app.js cokTarafliKronolojiEkle: madde `taraflar[]`daki HER künyeye EKLENİR (ezmez).\n"
        "// Yalnız başka HİÇBİR kayıtta olmayan olaylar; mükerrer taraması ve kusurlar:\n"
        "// denetim/KRONO-BALKAN-D-0929.md · -DUZELTME.md · -YERLESIM-ONERI.md\n\n"
        f"window.{glob} = [\n{govde}\n];\n")
    with open(os.path.join(KOK, "data", ad), "w", encoding="utf-8", newline="\n") as f:
        f.write(metin)
    print(f"data/{ad}: {len(maddeler)} madde")

yaz("kronoloji_cok_yunanistan.js", "KRONOLOJI_COK_YUNANISTAN", "YUNANİSTAN", YUNANISTAN + ORTACAG)
yaz("kronoloji_cok_bulgaristan.js", "KRONOLOJI_COK_BULGARISTAN", "BULGARİSTAN", BULGARISTAN)
