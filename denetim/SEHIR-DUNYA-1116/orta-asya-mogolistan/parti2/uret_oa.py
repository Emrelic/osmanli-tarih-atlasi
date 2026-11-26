import json, os, sys
sys.stdout.reconfigure(encoding="utf-8")
TAR = "16 Kasım 2026"

def K(madde, yazar, cilt, yil, sayfa, slug):
    return (f"TDV İslâm Ansiklopedisi, «{madde}» md. ({yazar}), c. {cilt}, {yil}, s. {sayfa}, "
            f"https://islamansiklopedisi.org.tr/{slug} (TDV tam metin (tarayıcı), {TAR})")

def O(t, gun, k, b, kay, kes="yil", tanik=None):
    d = {"t": t, "gun": gun, "k": k, "b": b, "kesinlik": kes, "kaynak": kay}
    if tanik:
        d["tanik"] = tanik
    return d

H = K("Hucend", "Rıza Kurtuluş", 18, 1998, "272-273", "hucend")
E = K("Endican", "Enver Konukçu", 11, 1995, "190-192", "endican")
T = K("Tirmiz", "Abdullah Muhammedcanov", 41, 2012, "200-202", "tirmiz")
A = K("Aşkābâd", "Sargon Erdem", 4, 1991, "21-22", "askabad")
C = K("Çimkent", "Mehmet Saray", 8, 1993, "318", "cimkent")
M = K("Alma Ata", "Mustafa L. Bilge", 2, 1989, "505-506", "alma-ata")

out = []

# ---------------- HUCEND ----------------
q_sefer = "Hucend üzerine müslümanların ilk seferi Emevîler zamanında Yezîd b. Muâviye’nin halifeliği sırasında (680-683) vuku buldu"
out.append({
 "id": "hucend-tj", "ad": "Hucend", "atlas_ad": "Hucend", "lat": 40.284, "lon": 69.622, "kat1900": None,
 "adlar": ["Hucende", "Hu-ch’an / Hu-jan (Çin kaynakları)", "Hucend", "Leninâbâd (1936-1991)", "Hucend"],
 "ilk": {"t": "0683-01-01", "gun": "680-683", "nicelik": "ilk_anilis", "kesinlik": "yil",
         "kaynak": H, "tanik": q_sefer},
 "kur": None, "ark": None, "bit": None,
 "sahip": [
  {"f": "0683-01-01", "t": "1024-01-01", "d": "__BOSLUK__", "kesinlik": "yil",
   "kaynak": H + " — dilim için kaynaklı sahip zinciri bulunamadı",
   "ic_not": "683'ten Karahanlı fethine (en geç 1024) kadar TDV Hucend'in sahip zincirini tarihli vermez: 680-683 sefer yenilgiyle biter (şehir Emevî'ye geçmedi), 722 'kesin fetih' Horasan valisi Saîd b. Amr el-Haraşî'nindir ama TDV maddede hâkim devlet adı yazmaz; Mühelleb'in hâkimiyeti ('99/717-18') hicrî-milâdî çeviri TDV'de kendi içinde tuhaftır (Mühelleb 702'de ölmüştür) — YAZILMADI. Emevî→Abbâsî→Sâmânî dizisi çıkarımdır, atlas kaydı dayanak olamaz; beyansız yaklaşıklık yazılmadı. Boşluk merdiveni: TDV okundu; Bosworth EI² 'Khudjand' (TDV bibliyografyasında) açılamadı."},
  {"f": "1024-01-01", "t": "1137-01-01", "d": "karahanli", "kesinlik": "onyil",
   "kaynak": H, "tanik": "Hucend, Karahanlı Hükümdarı Arslan İlig (1015-1024) tarafından ele geçirildiğinde önemli bir şehirdi",
   "ic_not": "f 'en geç' tanıktan: Arslan İlig'in hükümdarlık aralığı 1015-1024, ele geçirme günü/yılı TDV'de yok; güvenli uç 1024 alındı (daha erken olabilir; o zaman önceki BOŞLUK kısalır). t: TDV 1137'de Karahanlı Mahmûd b. Muhammed'i Hucend yakınında Karahıtayların yendiğini söyler; Karahıtay hâkimiyetinin şehre ne zaman geldiği YAZILMAZ. Karahanlı künyesi 1041'de biter (devletler.js); Batı Karahanlı (XI. yy ortası ayrılma, TDV: Hucend Doğu-Batı Karahanlı arasında sınırdır) aynı polity sürer → künye GENİŞLETME önerisi, hayalet uyarısı beklenen davranıştır."},
  {"f": "1137-01-01", "t": "1219-01-01", "d": "__BOSLUK__", "kesinlik": "yil",
   "kaynak": H + " — dilim için kaynaklı sahip bulunamadı",
   "ic_not": "1137 Karahıtay zaferinden 1219 Moğol fethine kadar TDV şehrin hâkimini tarihli vermez ('Hucend Emîri Timur Melik' 1219'da anılır, hangi devletin emîri olduğu TDV'de yazılmaz: Hârizmşahlı olduğu çıkarımdır, yazılmadı)."},
 ],
 "olay": [
  O("0683-01-01", "680-683", "sefer", "Müslümanların Hucend'e ilk seferi: Horasan valisi Selm b. Ziyâd'ın ordusu kalenin önünde yenildi (Yezîd b. Muâviye dönemi, güvenli uç 683)", H,
    tanik="Selm b. Ziyâd buraya bir ordu gönderdiyse de bu ordu kalenin önünde yapılan savaşta yenildi"),
  O("0722-01-01", "722", "fetih", "Horasan Valisi Saîd b. Amr el-Haraşî Hucend'i muhasara ile kesin olarak fethetti; asker ve asilzadeler kılıçtan geçirildi", H,
    tanik="Hucend’in kesin fethi ise Horasan Valisi Saîd b. Amr el-Haraşî tarafından muhasara sonucu gerçekleştirildi"),
  O("1024-01-01", "1015-1024", "fetih", "Karahanlı Hükümdarı Arslan İlig Hucend'i ele geçirdi (en geç 1024; aralık hükümdarlık yılları)", H, kes="onyil",
    tanik="Hucend, Karahanlı Hükümdarı Arslan İlig (1015-1024) tarafından ele geçirildiğinde önemli bir şehirdi"),
  O("1137-01-01", "531 (1137)", "savas", "Karahıtaylar Karahanlı Mahmûd b. Muhammed'i Hucend yakınında yendi", H,
    tanik="Karahıtaylar, Karahanlı Mahmûd b. Muhammed’i Hucend yakınında mağlûp ettiler (531/1137)"),
  O("1219-01-01", "1219", "fetih", "Cengiz Han'ın 75.000 kişilik ordusu karşısında Hucend Emîri Timur Melik kaçtı; şehir Moğolların eline geçti", H,
    tanik="Hucend Emîri Timur Melik’in kaçması üzerine şehir Moğollar’ın eline geçti (1219)"),
  O("1376-01-01", "1376", "diger", "Celâyirliler bir isyan sebebiyle Timur tarafından Hucend'den çıkarıldı (şehir o sırada Çağatay ulusunun idaresindeydi)", H,
    tanik="Celâyirliler bir isyan sebebiyle Timur tarafından şehirden çıkarıldılar (1376)"),
  O("1497-01-01", "1497", "diger", "Bâbür Hucend'i, otoritesini tehdit eden akrabalarına karşı üs olarak kullandı", H,
    tanik="1497’de Bâbür şehri otoritesini tehdit eden akrabalarına karşı bir üs olarak kullandı"),
  O("1842-01-01", "1842", "fetih", "Mangıt hanedanından Buhara Hanı Nasrullah Han Hucend'i ele geçirdi (Hokand Hanlığı sınırlarındayken)", H,
    tanik="1842 yılında Mangıtlar’dan Buhara Hanı Nasrullah Han"),
  O("1866-01-01", "1866", "fetih", "Ruslar kanlı çarpışmalar sonucunda Hucend'i ele geçirdi", H,
    tanik="1866’da da kanlı çarpışmalar sonucunda Ruslar tarafından ele geçirildi"),
 ],
 "ic_not": "Kaynak: TDV 'Hucend' TAM METİN (maddenin gövdesi okundu; 4.800 karakter). Çift teyit YOK: bibliyografyadaki Bosworth EI² 'Khudjand' ve Belâzürî/İbn Hurdâzbih/İstahrî açılamadı. ilk.t: 680-683 aralığı Yezîd b. Muâviye'nin halifelik yılları (TDV parantezi); ilk anılış için aralığın SON ucu 683 alındı. Hâkim zincirinin 1024 öncesi, 1137-1219 arası dilimleri kaynaksız → __BOSLUK__ (beyanlı). Atlas Hucend'i 1219-01-01'de mogol-imparatorlugu ile başlatır; 1219 olayı dikişi karşılar. TDV: 'Mühelleb b. Ebû Sufre ... (99/717-18)' ve 1875 Hokand direnişçilerinin kuşatması, 1886 Semerkant oblastı, 1929 Tacik SSC, 1936 Leninâbâd, 1991 adın geri alınması tarihli olgulardır, zincire bağlanmadı (1866 sonrası Rusya sahipliği atlasın zinciridir)."
})

# ---------------- ENDICAN ----------------
out.append({
 "id": "andican-uz", "ad": "Andican", "atlas_ad": "Andican", "lat": 40.783, "lon": 72.35, "kat1900": None,
 "adlar": ["Endigân (İbn Havkal)", "Endügân (Yâkūt)", "Andugân (Ebü’l-Fidâ)", "Endican"],
 "ilk": {"t": "0999-01-01", "gun": "10. yüzyıl sonu", "nicelik": "ilk_anilis", "kesinlik": "yuzyil",
         "kaynak": E, "tanik": "X. yüzyılın sonlarına doğru Endican’a Karahanlılar sahip oldular"},
 "kur": None, "ark": None, "bit": None, "sahip": [],
 "olay": [
  O("0999-01-01", "10. yüzyıl sonu", "fetih", "Karahanlılar Endican'a sahip oldu ve onu Özkent'e bağladı", E, kes="yuzyil",
    tanik="X. yüzyılın sonlarına doğru Endican’a Karahanlılar sahip oldular"),
  O("1090-01-01", "1090", "fetih", "Melikşah Endican'ı Selçuklu hâkimiyeti altına aldı", E,
    tanik="1090 yılında Melikşah tarafından Selçuklu hâkimiyeti altına alınan şehir"),
  O("1141-01-01", "1141", "fetih", "Endican Mâverâünnehir'in diğer bölgeleriyle birlikte Karahıtayların eline geçti", E,
    tanik="1141’de Mâverâünnehir’in diğer bölgeleriyle birlikte Karahıtaylar’ın eline geçti"),
  O("1210-01-01", "1210", "fetih", "Hârizmşahlar İlâmış sahrasında Karahıtayları yenip Endican ve çevresine hâkim oldu; kısa süre sonra Moğol işgali (tarihsiz)", E,
    tanik="1210 yılında Hârizmşahlar İlâmış sahrasında Karahıtaylar’ı yenilgiye uğratarak Endican ve çevresine hâkim oldular"),
  O("1503-01-01", "1503", "fetih", "Bâbür'ün Şeybânî Han'a yenilip Taşkent'e çekilmesinden sonra Özbekler Endican'ı ele geçirdi", E,
    tanik="şehri Özbekler ele geçirdiler (1503)"),
  O("1876-01-01", "1876", "fetih", "Rusya Endican'ı ele geçirdi (nüfus yaklaşık 30.000)", E,
    tanik="1876 yılında Rusya Endican’ı ele geçirdiğinde nüfusu 30.000 civarında idi"),
 ],
 "ic_not": "Kaynak: TDV 'Endican' TAM METİN. Çift teyit YOK (İSAM/Barthold/Bosworth açılamadı). TDV: 'Tarihi IX. yüzyıla kadar giden bölgenin ismini İbn Havkal Endigân ... yazmış' — yüzyıl-düzeyi ve eser tarihi TDV'de verilmediğinden ilk.t olarak yalnız tarihlendirilebilen X. yy sonu Karahanlı sahipliği alındı (güvenli uç: 10. yüzyılın son yılı, t=0999). Atlas Endican'ı 0500'de fergana-dayuan ile başlatır; şehir tanığı X. yy sonudur → sahip:[] ve 'atlas başlangıcı düzeltilmeli' uyarısı beklenir. 1090, 1141, 1210, 1503, 1876 olayları atlas zincirinin kontrol tanığıdır (atlas zinciri esastır, burada zincir yok). TDV: 1375-76 Timur-Kamerüddin savaşında yağmalandı (hicrî 777), Kaydu Han'ın yeniden inşası (tarihsiz, ö. 1301) yazılmadı."
})

# ---------------- TERMEZ (modern) ----------------
q_term = "Rus askerleri 1894 yılında eski Tirmiz harabelerinden 8 km. uzaklıkta bir sınır kalesi (Toprakkorgan) kurdular"
out.append({
 "id": "termez-uz", "ad": "Termez", "atlas_ad": "Termez", "lat": 37.224, "lon": 67.278, "kat1900": None,
 "adlar": ["Toprakkorgan (Rus sınır kalesi)", "Tirmiz / Termez"],
 "ilk": {"t": "1894-01-01", "gun": "1894", "nicelik": "kurulus", "kesinlik": "yil", "kaynak": T, "tanik": q_term},
 "kur": {"t": "1894-01-01", "gun": "1894", "kesinlik": "yil", "kaynak": T, "tanik": q_term},
 "ark": None, "bit": None, "sahip": [],
 "olay": [
  O("1894-01-01", "1894", "kurulus", "Çarlık Rusyası eski Tirmiz harabelerinden 8 km uzakta Toprakkorgan sınır kalesini kurdu; şimdiki Tirmiz bu kale çevresinde gelişti", T, tanik=q_term),
  O("1916-01-01", "1916", "diger", "Buhara-Tirmiz demiryolunun yapılmasıyla şehir gelişti ve nüfusu arttı", T,
    tanik="1916’da Buhara-Tirmiz demiryolunun yapılmasıyla şehir gelişti ve nüfusu arttı"),
 ],
 "ic_not": "Kaynak: TDV 'Tirmiz' TAM METİN (Abdullah Muhammedcanov). ANTİK/ESKİ YER KURALI: TDV eski Tirmiz'i (Emevî fethi 56/676, 704, Tirmizşahlar, 1220 Moğol tahribi, 1407 Halil Sultan tahkimi, XVI. yy Şeybânîler, 1646 Bâbürlüler, 1758 Mangıt) 'harabeler' olarak yeni şehirden 8 km uzakta anlatır; modern Termez Toprakkorgan çevresinde 1894'te doğdu. 8 km > 3 km → eski olgular BURADA YAZILMADI; ayrı kayıt (Eski Termez / Tirmiz harabeleri) önerilir (koordinatı ÖLÇÜLMEDİ). Atlas noktası (37.224, 67.278) modern şehirdir; TDV 8 km tarifini koordinatla ÖLÇMEDİM. Atlas Termez'i 1000-01-01'de __BOSLUK__ ile başlatır; modern şehir 1894'te kurulduğundan atlas başlangıcı düzeltilmeli/eski-yer kaydına devredilmeli (KASA'ya). Çift teyit YOK."
})

# ---------------- AŞKABAT ----------------
q_ask = "bölgenin 1881’de Ruslar tarafından ele geçirilmesinden sonra şehir haline getirilmiştir"
out.append({
 "id": "askabat-tm", "ad": "Aşkabat", "atlas_ad": "Aşkabad", "lat": 37.95, "lon": 58.38, "kat1900": None,
 "adlar": ["Aşkābâd", "Poltoratsk (1919-1927)", "Aşkābâd", "Aşkabat"],
 "ilk": {"t": "1881-01-01", "gun": "1881", "nicelik": "ilk_anilis", "kesinlik": "yil", "kaynak": A, "tanik": q_ask},
 "kur": None, "ark": None, "bit": None,
 "sahip": [
  {"f": "1881-01-01", "t": "1881-01-30", "d": "__BOSLUK__", "kesinlik": "yil",
   "kaynak": A + " — Rus ele geçirmesinden önceki sahip kaynakta yok",
   "ic_not": "TDV Aşkābâd'ı 1881'e kadar Ahal Teke Türkmenlerinin '500 çadırlık en önemli obası (avul)' olarak anlatır; hâkim devlet künyesi/sahip tanığı yoktur (Teke Türkmen topluluğunun devletleşmiş künyesi atlasta bulunamadı). Dilim, TDV'nin yıl hassasiyeti (1881) ile atlasın gün hassasiyeti (1881-01-30 Rusya) arasındaki 29 günü kapatır; sahibi uydurulmadı."},
 ],
 "olay": [
  O("1881-01-01", "1881", "fetih", "Ahal vahası bölgesi Ruslar tarafından ele geçirildi; sonra Ruslar kale inşa edip yeni Zakarpiskaya (Transkaspia) eyaletinin başşehri yaptı", A, tanik=q_ask),
  O("1924-01-01", "1924", "idari", "Şehir yeni kurulan Türkmen Sovyet Sosyalist Cumhuriyeti'nin başşehri yapıldı", A,
    tanik="Şehir 1924 yılında, Sovyetler’in yapılaşma hareketi sırasında yeni kurulan"),
  O("1948-01-01", "1948", "yikim", "Büyük deprem şehri tamamen yıktı; daha geniş alanda yeniden inşa edildi", A,
    tanik="Aşkābâd, 1948’de geçirdiği çok büyük bir deprem sonucu tamamen yıkılmış"),
 ],
 "ic_not": "Kaynak: TDV 'Aşkābâd' TAM METİN (Sargon Erdem). Çift teyit YOK. ilk.t: TDV obanın daha eski varlığını belirtir ama tarih vermez; ilk TARİHLİ olgu 1881 (Rus ele geçirmesi ve şehirleştirme). Atlas Aşkabad'ı 1881-01-30 rusya ile başlatır; TDV yalnız yıl der → dilim BOŞLUK ve 1881 olayı ±30 gün içinde. Atlas Nesâ (17 km batı) ile ayrı kayıttır. TDV: Aralık 1917 Bolşevik yönetim, Temmuz 1918 karşı-devrimcilerin eline geçiş (Beyaz Rus-Türkmen), Kızıl Ordu'nun geri alışı (tarihsiz), 1919 Poltoratsk adı (TDV 'Poltoratsk'ın adıyla değiştirildi', yıl yazılmaz; 1927'de ad geri döndü) zincire bağlanmadı."
})

# ---------------- ÇİMKENT ----------------
q_cim = "XVI ve XVII. yüzyıllarda kaynaklarda yine büyük bir köy ve kale olarak geçen Çimkent"
out.append({
 "id": "cimkent-kz", "ad": "Çimkent", "atlas_ad": "Çimkent", "lat": 42.317, "lon": 69.596, "kat1900": None,
 "adlar": ["Çîkend (Şâmî)", "Çimkent"],
 "ilk": {"t": "1699-01-01", "gun": "16-17. yüzyıl", "nicelik": "ilk_anilis", "kesinlik": "yuzyil", "kaynak": C, "tanik": q_cim},
 "kur": None, "ark": None, "bit": None, "sahip": [],
 "olay": [
  O("1864-07-07", "7 Temmuz 1864", "savas", "Ruslar Çimkent'e hücum etti; bir hafta süren mücadeleden sonra geri püskürtüldü (Âlim Kul'un tahkimli Hokand garnizonu)", C, kes="gun",
    tanik="7 Temmuz 1864’te Ruslar buraya karşı hücuma geçtilerse de bir hafta süren mücadeleden"),
 ],
 "ic_not": "Kaynak: TDV 'Çimkent' TAM METİN (Mehmet Saray). Çift teyit YOK. ilk.t: TDV 'ne zaman kurulduğu bilinmemektedir' der; Nizâmüddin Şâmî'nin Zafernâme'sinde adı Çîkend, Sayram yakınında küçük köy (s. 57) — Zafernâme'nin yılı TDV'de verilmediğinden YAZILMADI. 'XVI ve XVII. yüzyıllarda büyük köy ve kale' → yüzyıl aralığının SON ucu (17. yy sonu, t=1699). TDV: 1700'lerde Hokand Hanlığı'nın kurulmasıyla gelişti (yüzyıl düzeyi), sonra Buhara emîrinin Hokand'a saldırısı üzerine 'şehri teslim etmek zorunda kaldılar' — Rus işgal yılı/günü TDV metninde YAZILMIYOR (7 Temmuz 1864 hücum günüdür; teslim günü uydurulmadı). Atlas 1281 cagatay ile başlar → sahip:[], 'atlas başlangıcı düzeltilmeli' uyarısı beklenir."
})

# ---------------- ALMATI ----------------
q_alm = "1854’te Verniy adıyla bir Rus askerî kalesi olarak inşa edildi"
out.append({
 "id": "almati-kz", "ad": "Almatı", "atlas_ad": "Almatı (Vernıy)", "lat": 43.238, "lon": 76.889, "kat1900": None,
 "adlar": ["Almatı (eski Kazak yerleşimi)", "Verniy", "Alma Ata (1927)", "Almatı"],
 "ilk": {"t": "1854-01-01", "gun": "1854", "nicelik": "kurulus", "kesinlik": "yil", "kaynak": M, "tanik": q_alm},
 "kur": {"t": "1854-01-01", "gun": "1854", "kesinlik": "yil", "kaynak": M, "tanik": q_alm},
 "ark": None, "bit": None, "sahip": [],
 "olay": [
  O("1854-01-01", "1854", "kurulus", "Verniy adıyla Rus askerî kalesi olarak inşa edildi", M, tanik=q_alm),
  O("1867-01-01", "1867", "idari", "Yeniden teşekkül eden Semireh askerî bölgesinin idare merkezi oldu", M,
    tanik="1867’de bölgede yeniden teşekkül eden Semireh askerî bölgesinin idare merkezi oldu"),
  O("1927-01-01", "1927", "diger", "Şehir resmen Alma Ata adını aldı", M,
    tanik="1927’de resmen Alma Ata adını alan şehir"),
  O("1929-05-01", "Mayıs 1929", "idari", "Alma Ata Kazakistan'ın başşehri oldu", M, kes="ay",
    tanik="Mayıs 1929’da Kazakistan’ın başşehri oldu"),
 ],
 "ic_not": "Kaynak: TDV 'Alma Ata' TAM METİN (Mustafa L. Bilge). Çift teyit YOK. TDV: 'Şimdiki yerleşim merkezi, Almatı denilen eski Kazak yerleşim yeri üzerinde bulunmaktadır' — bu eski yerleşimin tarihi TDV'de YOK; ilk.t kuruluş (Verniy kalesi 1854). Atlas 'Almatı (Vernıy)'ı 1281 cagatay ile başlatır; şehir 1854 → sahip:[], 'atlas başlangıcı düzeltilmeli'. TDV: 1887 ve 1911 depremleri (günsüz), 1930 Türkistan-Sibirya demiryolu istasyonu, 1934/1945 kurumlar zincire bağlanmadı."
})

os.makedirs(os.path.dirname(__file__), exist_ok=True)
json.dump(out, open(os.path.join(os.path.dirname(__file__), "yeni.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
# tanik listesi (tarayıcıda doğrulanacak)
q = []
def topla(x, slug):
    for v in x:
        if isinstance(v, dict):
            if "tanik" in v: q.append([slug, v["tanik"]])
for k in out:
    sl = {"hucend-tj": "hucend", "andican-uz": "endican", "termez-uz": "tirmiz", "askabat-tm": "askabad", "cimkent-kz": "cimkent", "almati-kz": "alma-ata"}[k["id"]]
    for a in ("ilk", "kur"):
        if k.get(a): topla([k[a]], sl)
    topla(k["sahip"], sl); topla(k["olay"], sl)
json.dump(q, open(os.path.join(os.path.dirname(__file__), "tanik_oa.json"), "w", encoding="utf-8"), ensure_ascii=False)
print(len(out), len(q), "kelime>15:", [x for x in q if len(x[1].split()) > 15])
