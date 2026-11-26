# -*- coding: utf-8 -*-
# parti3 B grubu: TDV tam govde tanikli sehir tarihcesi — JSON ureticisi (quote'lar tarayicida includes() ile dogrulandi)
import json, io, os

SON = "TDV tam metin (tarayıcı), 16 Kasım 2026"
M = {
    "anapa": ("ANAPA", "Cengiz Fedakar", 2020),
    "akmescid": ("AKMESCİD", "Muzaffer Üreklî", 1989),
    "karasubazar": ("KARASUBAZAR", "Hakan Kırımlı", 2001),
    "babadagi": ("BABADAĞI", "M. Münir Aktepe", 1991),
    "kes": ("KEŞ", "Ahmet Taşağıl", 2022),
    "hoten": ("HOTEN", "Ahmet Taşağıl", 1998),
    "turfan": ("TURFAN", "Ahmet Taşağıl", 2012),
    "kulca": ("KULCA", "Ahmet Taşağıl", 2002),
    "bogdan": ("BOĞDAN", "Abdülkadir Özcan", 1992),
    "kirim": ("KIRIM", "DİA", 2022),
    "yakub-beg": ("YÂKUB BEG", "Muallâ Uydu Yücel", 2013),
    "ozbek-han-camii": ("ÖZBEK HAN CAMİİ", "Nicole Kançal-Ferrari", 2007),
    "ahmed-yesevi-kulliyesi": ("AHMED YESEVÎ KÜLLİYESİ", "Emel Esin", 1989),
}


def kay(slug):
    ad, yz, yil = M[slug]
    return ("TDV İslâm Ansiklopedisi, «%s» md. (%s), Baskı Tarihi %d (cilt/sayfa tam metinde yok), "
            "https://islamansiklopedisi.org.tr/%s (%s)" % (ad, yz, yil, slug, SON))


def tan(slug, q, gun, t, kes="yil"):
    return {"t": t, "gun": gun, "kesinlik": kes, "kaynak": kay(slug), "tanik": q}


def ilk(slug, q, t, gun, kes, nic="ilk_anilis"):
    d = tan(slug, q, gun, t, kes)
    d["nicelik"] = nic
    return {"t": d["t"], "gun": d["gun"], "nicelik": nic, "kesinlik": kes, "kaynak": d["kaynak"], "tanik": q}


def olay(slug, q, t, gun, k, b, kes="yil"):
    return {"t": t, "gun": gun, "k": k, "b": b, "kesinlik": kes, "kaynak": kay(slug), "tanik": q}


def sehir(id_, ad, atlas_ad, lat, lon, adlar, ilk_, olaylar, ic_not):
    return {"id": id_, "ad": ad, "atlas_ad": atlas_ad, "lat": lat, "lon": lon, "kat1900": None,
            "adlar": adlar, "ilk": ilk_, "kur": None, "ark": None, "bit": None, "sahip": [],
            "olay": olaylar, "ic_not": ic_not}


GEN = ("Kaynak: TDV tam gövde (tarayıcı), çift teyit YOK (ikinci akademik kaynak açılmadı). "
       "Tüm tanık alıntıları gövdede includes() ile birebir doğrulandı. ")
ATL = (" Atlas bu noktayı %s'de başlatır; ilk.t sonra olduğundan sahip:[] (atlas zinciri esas), "
       "'atlas başlangıcı düzeltilmeli' uyarısı beklenen davranıştır — TDV'de daha erken TARİHLİ tanık bulunamadı.")

K = []

# 1 ANAPA
K.append(sehir("anapa-ru", "Anapa", "Anapa", 44.894, 37.316, ["Gorkipaya (TDV)", "Napa", "Anapa"],
    ilk("anapa", "XIII ve XIV. yüzyıllarda önce Gorkipaya adlı Bizans kolonisi iken", "1400-01-01", "14. yüzyıl", "yuzyil"),
    [olay("anapa", "26 Temmuz 1791’de işgal edildi", "1791-07-26", "26 Temmuz 1791", "fetih",
          "Üç kuşatmanın sonunda Anapa Kalesi Ruslar tarafından işgal edildi", "gun"),
     olay("anapa", "Yaş Antlaşması ile (10 Ocak 1792) Kafkasya’da eski sınırlar kabul edildiğinden", "1792-01-10", "10 Ocak 1792", "antlasma",
          "Yaş Antlaşması ile Kafkasya'da eski sınırlar kabul edildiğinden Anapa Osmanlı Devleti'ne geri verildi", "gun"),
     olay("anapa", "Osman Paşa 24 Haziran 1828’de Ruslar’a teslim oldu", "1828-06-24", "24 Haziran 1828", "fetih",
          "Kale komutanı Osman Paşa Anapa'yı Ruslar'a teslim etti", "gun"),
     olay("anapa", "1829 Edirne Antlaşması ile de Anapa ve Kafkasya Osmanlı hâkimiyetinden çıktı", "1829-01-01", "1829", "kayip",
          "Edirne Antlaşması ile Anapa ve Kafkasya Osmanlı hâkimiyetinden çıktı")],
    GEN + "ilk.t: TDV'nin tek erken dayanağı yüzyıl düzeyindedir ('XIII ve XIV. yüzyıllarda ... Gorkipaya adlı Bizans kolonisi, sonra Ceneviz ticaret iskelesi ve kalesi'); güvenli uç (XIV. yy sonu) 1400-01-01 alındı. Anapa'nın yerinde antik Gorgippia vardır; TDV'nin 'Bizans kolonisi' ifadesi olduğu gibi aktarıldı, antik/ortaçağ ayrımı ve 3 km sınaması yapılmadı. TDV: Fâtih dönemi Gedik Ahmed Paşa seferiyle Osmanlı ilgisi başladı (yıl yok → yazılmadı); Anapa Kalesi Ferah Ali Paşa eliyle Soğucak'a benzer inşa edildi (1783-1786'da tamamlandı, aralık → yazılmadı); 1809 sonbaharında Rus saldırısı ve Bükreş Antlaşması (16 Mayıs 1812) ile Kuban hududu → şehre özgü teslim günü verilmediğinden olay yazılmadı. TDV 1853-56 Kırım Savaşı'nda kalenin müttefikler tarafından yıkıldığını söyler (gün yok). Atlas Anapa'yı 1281'de altinorda ile başlatır; TDV bunu desteklemez, çürütmez." + (ATL % "1281-01-01")))

# 2 AKMESCID
K.append(sehir("akmescid-ua", "Akmescid (Simferopol)", "Akmescid", 44.9521, 34.1024, ["Neapolis (antik, TDV)", "Kirmencik", "Akmescid", "Simferopol"],
    ilk("akmescid", "XV. yüzyılda Kırım Türkleri tarafından da Kirmencik (küçük kale) adlı bir kale inşa edildi", "1500-01-01", "15. yüzyıl", "yuzyil"),
    [olay("akmescid", "İlk defa 1736’da büyük bir Rus tahribatına uğrayan şehir", "1736-01-01", "1736", "yikim",
          "Akmescid ilk defa büyük bir Rus tahribatına uğradı"),
     olay("akmescid", "1784’te Kırım’ın Tavrida bölgesinin başşehri oldu", "1784-01-01", "1784", "idari",
          "Rus yönetiminde Kırım'ın Tavrida bölgesinin başşehri oldu")],
    GEN + "ilk.t: TDV 'XV. yüzyılda Kırım Türkleri Kirmencik kalesini inşa etti ve bölge iskâna açıldı; şehir muhtemelen bu sıralarda kuruldu' der — 'muhtemelen' olduğundan kur yazılmadı, ilk_anilis (güvenli uç 1500-01-01). TDV Strabon'a dayanarak İskit Kralı Skiluros'un burada Neapolis kalesini kurduğunu söyler (MÖ, tarihsiz, antik; yazılmadı). Mengli Giray (ö. 1514) adına cami ve oğlu Mehmed Giray'ın kalgay sultan/merkez yapılması (hanlığının son yılları, gün yok) yazılmadı. Atlas Akmescid'i 1281'de altinorda ile başlatır; TDV ilk iskânı XV. yy'a koyar — atlas başlangıcı düzeltme adayı." + (ATL % "1281-01-01")))

# 3 KARASUBAZAR
K.append(sehir("karasubazar-ua", "Karasubazar (Belogorsk)", "Karasubazar", 45.0556, 34.6, ["Karasubazar"],
    ilk("karasubazar", "Karasubazar adıyla en geç XIII. yüzyıldan itibaren bir yerleşim yeri olarak mevcut olduğu bilinmektedir", "1300-01-01", "13. yüzyıl", "yuzyil"),
    [olay("karasubazar", "hanın başağası Sefer Gazi Ağa tarafından 1065 (1655) yılında yaptırılmıştı", "1655-01-01", "1655", "diger",
          "Hanın başağası Sefer Gazi Ağa Büyük Taşhan'ı yaptırdı (kitâbede hicrî 1065)"),
     olay("karasubazar", "tekkeyi ise 1727’de II. Mengli Giray Han inşa ettirmişti", "1727-01-01", "1727", "diger",
          "II. Mengli Giray Han Han Camii'ni ve bitişiğindeki tekkeyi inşa ettirdi"),
     olay("karasubazar", "Feth Giray Han geçici olarak başşehrini Karasubazar’a taşımış", "1736-01-01", "1736", "idari",
          "Bahçesaray'ın Rus ordusunca istilâ ve tahribi üzerine Feth Giray Han başşehrini geçici olarak Karasubazar'a taşıdı (yıl aynı cümlede: 1736)"),
     olay("karasubazar", "General Douglas’ın idaresindeki Rus birlikleri Ağustos 1737’de Karasubazar’a hücum ederek", "1737-08-01", "Ağustos 1737", "savas",
          "Douglas komutasındaki Rus birlikleri Karasubazar'a hücum edip büyük tahribata sebep oldu", "ay"),
     olay("karasubazar", "1783 tarihli fermanının (Karasubazar Beyannâmesi) General Potemkin tarafından ilân edildiği yer", "1783-01-01", "1783", "ilhak",
          "Katerina'nın Kırım'ın Rusya'ya ilhakına dair 1783 tarihli fermanı (Karasubazar Beyannâmesi) burada ilân edildi")],
    GEN + "ilk.t: TDV 'en geç XIII. yüzyıldan itibaren' der (yüzyıl düzeyi; güvenli uç 1300-01-01). 1736 olayının yılı TDV cümlesinin başındadır ('1736’da Bahçesaray’ın ... istilâ ... üzerine Feth Giray Han ...'), tanık 15 kelimeyi aşmamak için cümlenin ikinci yarısıyla sınırlandı. 1783 ferman günü TDV'de yok (yıl). Atlas Karasubazar'ı 1281'de kirim değil altinorda ile başlatır olarak ölçüldü; TDV Kırım Hanlığı devrini şehrin asıl yükselişi sayar. 1624-1675 Zaporog baskınları (aralık) ve 1944 sürgün (bölgesel) yazılmadı." + (ATL % "1281-01-01")))

# 4 ESKI KIRIM
K.append(sehir("eski-kirim-solhat-ua", "Eski Kırım (Solhat)", "Eski Kırım (Solhat)", 45.0281, 35.1078, ["Solhat", "Eski Kırım"],
    ilk("ozbek-han-camii", "Eski Kırım (Solhat) şehrinde Altın Orda hükümdarı Özbek Han döneminde (1313-1340) inşa edilmiştir", "1340-12-31", "1313-1340 (Özbek Han dönemi)", "yil"),
    [olay("ozbek-han-camii", "Eski Kırım (Solhat) şehrinde Altın Orda hükümdarı Özbek Han döneminde (1313-1340) inşa edilmiştir", "1340-12-31", "1313-1340 (Özbek Han dönemi)", "diger",
          "Altın Orda hükümdarı Özbek Han döneminde (1313-1340) Solhat'ta Özbek Han Camii inşa edildi (güvenli uç: dönem sonu)")],
    GEN + "ilk.t: 'Özbek Han döneminde (1313-1340)' aralığıdır; güvenli uç (dönemin son yılı) 1340-12-31 alındı (inşa gününün daha erken olabileceği beyan edilir). TDV «Kırım» md.: Memlük tüccarlarının Solhat'ta Sultan Baybars Camii yaptırdığı (tarihsiz), İbn Battûta'nın Solhat'ı anması (yıl yok) ve Evliya Çelebi'nin açıklamaları yazılmadı. Atlas Eski Kırım'ı 1281'de altinorda ile başlatır (ilk.t sonra)." + (ATL % "1281-01-01")))

# 5 SUDAK
K.append(sehir("sudak-ua", "Sudak (Suğdak)", "Sudak (Suğdak)", 44.8494, 34.9747, ["Suğdak", "Sudak"],
    ilk("kirim", "Alâeddin Keykubad zamanında (1220-1237) Hüsâmeddin Çoban idaresindeki kuvvetler Kırım’ın en önemli ticaret şehri olan Suğdak’ı ele geçirdi", "1237-12-31", "1220-1237", "yil"),
    [olay("kirim", "Alâeddin Keykubad zamanında (1220-1237) Hüsâmeddin Çoban idaresindeki kuvvetler Kırım’ın en önemli ticaret şehri olan Suğdak’ı ele geçirdi", "1237-12-31", "1220-1237", "fetih",
          "Anadolu Selçuklu Sultanı Alâeddin Keykubad zamanında (1220-1237) Hüsâmeddin Çoban komutasındaki kuvvetler Suğdak'ı ele geçirdi (güvenli uç: saltanat sonu)"),
     olay("kirim", "Suğdak 1365’te Ceneviz kontrolüne girmişti", "1365-01-01", "1365", "fetih",
          "Suğdak Ceneviz kontrolüne girdi")],
    GEN + "ilk.t: Selçuklu ele geçirmesi Keykubad'ın saltanat aralığına (1220-1237) bağlıdır, güne değil; güvenli uç 1237-12-31. TDV Suğdak'ı Kıpçak limanı olarak (1253 Rubruk gezisi: Suğdak pazar yeri) da anar (tarihli ama sahiplik/varlık dışı, yazılmadı). 1380 Ceneviz-Altın Orda anlaşmasında Balıklava-Suğdak aralığının Ceneviz'e bağlı sayılması TDV'de vardır (tek tanık, şehre özgü değil; yazılmadı). Atlas Sudak'ı 1000-01-01'de __BOSLUK__ ile başlatır; Selçuklu (1237 öncesi, aralık) ve Ceneviz (1365) tanıkları atlas zincirine öneridir: 'Sudak 1220-1237 selcuklu, 1365 ceneviz' ve zincir 1281 sonrası kaynakla gözden geçirilmeli." + (ATL % "1000-01-01")))

# 6 MANKUP
K.append(sehir("mankup-ua", "Mankup (Mangub)", "Mankup", 44.5942, 33.8044, ["Mangub", "Mankup"],
    ilk("kirim", "1629’da Karasubazar, Mangub yağmalandı ve yakıldı", "1629-01-01", "1629", "yil"),
    [olay("kirim", "1629’da Karasubazar, Mangub yağmalandı ve yakıldı", "1629-01-01", "1629", "yikim",
          "Mangub (Mankup), Karasubazar ile birlikte yağmalandı ve yakıldı")],
    GEN + "Ad eşitlemesi: TDV «Kırım» md.'nin 'Mangub' kaydı atlasın Mankup (Mangup) noktasıyla aynı yer sayıldı (TDV 'Mangub'u Kırım güney kıyı/dağ yerleşmesi olarak anar; ayrı koordinat TDV'de yok) — kesin olmayan eşitleme olarak beyan edilir. ilk.t TDV'nin bu maddedeki ilk TARİHLİ tanığıdır (Evliya Çelebi'nin XVII. yy açıklamaları ve 'kıyı boyunca Mangub ... Osmanlı bölgesinde kaldı' tarihsiz, yazılmadı). Mankup'un Hristiyan/Gotia dönemi TDV'de yok. Atlas 1281'de altinorda ile başlatır." + (ATL % "1281-01-01")))

# 7 HOTAN
K.append(sehir("hotan-cn", "Hotan (Hoten)", "Hotan", 37.117, 79.928, ["Yotkan (TDV: ilk ad)", "Hoten", "Hotan"],
    ilk("hoten", "Gerdîzî ise Hoten’in Çin sınırında büyük bir şehir olan Kücâ’ya on beş günlük mesafede olduğunu", "1100-01-01", "11. yüzyıl", "yuzyil"),
    [olay("hoten", "Bölgeye ilk defa 1128 yılında hücum eden Karahıtaylar Hoten ile birlikte İmil, Balasagun ve Kâşgar’a da saldırdılar", "1128-01-01", "1128", "savas",
          "Karahıtaylar bölgeye ilk defa hücum edip Hoten'e de saldırdı"),
     olay("hoten", "Kubilay ile Çağatay Hükümdarı Barak Han arasındaki mücadeleler sırasında Hoten Çağatay kuvvetlerince yağmalandı (1266)", "1266-01-01", "1266", "savas",
          "Kubilay ile Barak Han mücadeleleri sırasında Hoten Çağatay kuvvetlerince yağmalandı"),
     olay("hoten", "1270 yıllarında Hoten Kubilay Han’a, Yârkend ise Çağatay Hükümdarı Kaydu Han’a bağlı idi", "1270-01-01", "1270 yılları", "diger",
          "Hoten Kubilay Han'a bağlıydı (Yârkend Çağatay Hükümdarı Kaydu Han'a)", "onyil"),
     olay("hoten", "18 Mayıs 1422’de Hoten’e, 13 Haziran’da da Kâşgar’a ulaşmıştı", "1422-05-18", "18 Mayıs 1422", "diger",
          "Şâhruh'un Çin'e gönderdiği elçi Gıyâseddin Nakkaş dönüşünde Hoten'e ulaştı", "gun"),
     olay("yakub-beg", "Yenihisar’ı, Kâşgar Yenişehiri’ni, Yârkend ve Hoten’i ele geçirdi (1866)", "1866-01-01", "1866", "fetih",
          "Yâkub Beg Hoten'i ele geçirdi"),
     olay("hoten", "Hoten Çin hâkimiyetinden tekrar kurtulma imkânı bulduysa da 1848’de yeniden Çinliler’in eline düştü", "1848-01-01", "1848", "kayip",
          "Hoten yeniden Çinliler'in eline düştü"),
     olay("hoten", "1877’de Yâkub Beg’in ölümü üzerine Hoten Valisi Niyaz Beg bağımsızlığını ilân etti", "1877-01-01", "1877", "isyan",
          "Yâkub Beg'in ölümü üzerine Hoten Valisi Niyaz Beg bağımsızlığını ilân etti")],
    GEN + "ilk.t: TDV 'Gerdîzî (XI. yy) Hoten'in Çin sınırında büyük bir şehir olduğunu ... anlatır' — yüzyıl düzeyi, güvenli uç 1100-01-01. TDV ayrıca Hoten'in eski adının Yotkan olduğunu, MÖ II. yy Çin etkisini ve 8,5 km batıdaki harabelerde (modern Hoten'in 8,5 km batısı → >3 km; antik yer BU kayda alınmadı, ayrı kayıt önerilir) Budist kalıntıları söyler (tarihsiz). Yâkub Beg tarihinde TDV 1866 (Yâkub Beg md.) ve 1866-1867 (Hoten md.) der; 1866 alındı. 1877 olayı kısa süreli bağımsızlık ve Ekim 1877 geri alınış (zincir açmadı). Atlas Hotan'ı 500-01-01'de khotan ile başlatır (khotan künyesi 1006'ya kadar); TDV'nin 1100'deki tanığı atlas başlangıcından sonradır." + (ATL % "500-01-01")))

# 8 KUCA
K.append(sehir("kuca-cn", "Kuça (Kuqa)", "Kuça (Kuqa)", 41.717, 82.962, ["Kücâ", "Kuça"],
    ilk("hoten", "Gerdîzî ise Hoten’in Çin sınırında büyük bir şehir olan Kücâ’ya on beş günlük mesafede olduğunu", "1100-01-01", "11. yüzyıl", "yuzyil"),
    [olay("turfan", "1866’da Hoten’i, 1867’de Kuça’yı ele geçirdikten sonra 1868’de Turfan ve Kumul’u kendine bağladı", "1867-01-01", "1867", "fetih",
          "Yâkub Beg Kuça'yı ele geçirdi")],
    GEN + "ilk.t: TDV «Hoten» md. Gerdîzî'nin (XI. yy müellifi) Hoten'in 'Çin sınırında büyük bir şehir olan Kücâ'ya' 15 günlük mesafede olduğunu yazdığını aktarır — yüzyıl düzeyi (güvenli uç 1100-01-01); alıntı Hoten'in mesafesi cümlesinden, Kücâ'nın 'büyük şehir' tanığıdır. TDV «Turfan» md.: Yâkub Beg 1867'de Kuça'yı ele geçirdi; «Yâkub Beg» md. Aksu-Kuça-Karaşehir alımını 1867 hükümdarlık ilanıyla birlikte verir. TDV'de 'Kuça' ayrı madde bulunamadı (arama noktaları: Kuça sorgusu alakasız). Atlas Kuça'yı 500-01-01'de kuca künyesiyle başlatır (kuca 649'da biter)." + (ATL % "500-01-01")))

# 9 HAMI (KUMUL)
K.append(sehir("hami-kumul-cn", "Hâmi (Kumul)", "Hâmi (Kumul)", 42.828, 93.515, ["Igu (TDV: ipek yolu ilk adı)", "Hami", "Komul", "Kumul"],
    ilk("turfan", "1866’da Hoten’i, 1867’de Kuça’yı ele geçirdikten sonra 1868’de Turfan ve Kumul’u kendine bağladı", "1868-01-01", "1868", "yil"),
    [olay("turfan", "1866’da Hoten’i, 1867’de Kuça’yı ele geçirdikten sonra 1868’de Turfan ve Kumul’u kendine bağladı", "1868-01-01", "1868", "fetih",
          "Yâkub Beg Turfan ile birlikte Kumul'u kendine bağladı"),
     olay("yakub-beg", "Kumul ve Urumçi’yi işgal edip Kâşgar’a doğru ilerlemeye başlayınca", "1877-01-01", "1877 (bahar)", "fetih",
          "Çin ordusu (General Zuo Zontang ve Liu Cintang, 1877 baharı) Kumul ve Urumçi'yi işgal etti"),
     olay("hoten", "1931’de Kumul’da (Hami) bir direniş başlattılar", "1931-01-01", "1931", "isyan",
          "Doğu Türkistan Türkleri Kumul'da (Hami) direniş başlattı")],
    GEN + "ilk.t: TDV'de Hami'ye özgü en erken TARİHLİ tanık 1868'dir (Turfan md.); 'Timur'un elçilerinin Hami taraflarında Budist manastır yanında cami' ve 'Çin'den ilk meskûn nokta Igu/Hami (Komul)' (İpek Yolu md.) tarihsizdir ve yazılmadı. 1877 olayında 'baharında' gün vermediğinden yıl düzeyi (1877-01-01) alındı; tanık cümlesi 1877 baharını önceki cümleden (Çin'in Mançu hükümetinin 1877 baharında ... yolladığı ordu) devralır. Atlas Hâmi'yi 1281-01-01'de yuan-hanedani ile başlatır; TDV'nin Hami'ye özgü Yuan/Çağatay tanığı yok." + (ATL % "1281-01-01")))

# 10 URUMCI
K.append(sehir("urumci-cn", "Ürümçi (Dihua)", "Ürümçi (Dihua)", 43.826, 87.616, ["Urumçi", "Tihua (TDV)", "Dihua", "Ürümçi"],
    ilk("yakub-beg", "onları Urumçi’den uzaklaştırdı (1870)", "1870-01-01", "1870", "yil"),
    [olay("yakub-beg", "onları Urumçi’den uzaklaştırdı (1870)", "1870-01-01", "1870", "fetih",
          "Yâkub Beg Çinliler ve Dunganlar'ı Urumçi'den uzaklaştırdı"),
     olay("yakub-beg", "Kumul ve Urumçi’yi işgal edip Kâşgar’a doğru ilerlemeye başlayınca", "1877-01-01", "1877 (bahar)", "fetih",
          "Çin ordusu 1877 baharında Kumul ve Urumçi'yi işgal etti"),
     olay("kulca", "1882 yılından başlayarak Sinkiang (Sincan: “yeni dominyon”) adı altında merkezi Urumçi", "1882-01-01", "1882", "idari",
          "Doğu Türkistan 1882'den itibaren merkezi Urumçi olan Sinkiang eyaleti yapıldı")],
    GEN + "ilk.t: Urumçi'ye özgü en erken TARİHLİ tanık TDV «Yâkub Beg» md.'dir (1870); Cungarya Devleti'nin Urumçi'yi kapsaması (XVII. yy sonu, 'ikinci yarısında') yıl düzeyi yüzyıl-yarı olup şehre özgü olmadığından yazılmadı. Atlas Ürümçi'yi 1763-01-01'de qing-hanedani ile başlatır; ilk.t sonra olduğu için sahip:[] ve uyarı beklenir (TDV'de 1763 öncesi tanık yok)." + (ATL % "1763-01-01")))

# 11 SEHRISEBZ
K.append(sehir("sehrisebz-kes-uz", "Şehrisebz (Keş)", "Şehrisebz (Kiş)", 39.058, 66.833, ["Keş", "Kiş", "Şehrisebz"],
    ilk("kes", "Yapılan binaların en dikkat çekicisi 1380 tarihli Ak Saray’dır", "1380-01-01", "1380", "yil"),
    [olay("kes", "Yapılan binaların en dikkat çekicisi 1380 tarihli Ak Saray’dır", "1380-01-01", "1380", "diger",
          "Timur döneminde şehirde Ak Saray yapıldı (1380 tarihli)"),
     olay("kes", "1387’de şehir Altın Orda Hanı Toktamış tarafından yağma edildi", "1387-01-01", "1387", "savas",
          "Şehir Altın Orda Hanı Toktamış tarafından yağma edildi"),
     olay("kes", "1437’de Uluğ Bey’in yaptırdığı Kök-Gumbaz Camii", "1437-01-01", "1437", "diger",
          "Uluğ Bey Kök-Gumbaz Camii'ni yaptırdı")],
    GEN + "ilk.t: TDV Keş'in Orta Çağ başı tarihi (Mühelleb b. Ebû Sufre karargâhı, 780'li yıllarda Türgiş/Karluk gelişi, 617/1220 Moğol teslimi) tarihsiz-onyıl-çıkarımdır ('herhalde teslim olmasıdır' — tanık sayılmadı); TDV 1220'yi bir sebep olarak çıkarımla verir, olgu değildir. 1865 Rus ele geçirmesi ve 1860 Buhara Hanı Nasrullah Han ifadeleri TDV'de vardır ancak literatürde Rus ele geçirmesi 1870 olarak anıldığından (ikinci TDV/akademik kaynak sınanmadı) YAZILMADI. 1404 'tekrar buraya gelerek' cümlesinin öznesi (Timur) cümlede açık olmadığından yazılmadı. Atlas Şehrisebz'i 1281-01-01'de cagatay ile başlatır; TDV'nin 1281-1380 arası Çağatay hanlarına kışlak vazi... ifadesi tarihsizdir." + (ATL % "1281-01-01")))

# 12 TURKISTAN (YESI)
K.append(sehir("turkistan-yesi-kz", "Türkistan (Yesi / Yassı)", "Türkistan (Yesi)", 43.302, 68.253, ["Yassı", "Yesi", "Türkistan (Hazret-i Türkistan)"],
    ilk("ahmed-yesevi-kulliyesi", "Ubeydullah (bazı kaynaklarda ise Abdullah) Sadr tarafından 1396 yılında çalışmalara başlanmış", "1396-01-01", "1396", "yil"),
    [olay("ahmed-yesevi-kulliyesi", "Ubeydullah (bazı kaynaklarda ise Abdullah) Sadr tarafından 1396 yılında çalışmalara başlanmış", "1396-01-01", "1396", "diger",
          "Timur'un emriyle Yassı'daki Ahmed Yesevî Külliyesi'nin yeniden inşasına başlandı")],
    GEN + "ilk.t: Yassı/Türkistan şehrine özgü en erken TARİHLİ tanık külliye inşasıdır (1396); aynı madde şehrin XIV. yüzyılda Çağatay, Cucioğulları ve Timur arasında el değiştirdiğini söyler (yüzyıl düzeyi; sahip tarihi vermez, yazılmadı), Yâkût'tan (XIII. yy) bahseder. 1557-1583 Abdullah Kazan Han imarı (aralık), 1510 Şah İsmâil istilâsı (bölgesel) ve 1864 'Türkistan'ın Rusya'ya ilhakı' (şehir mi bölge mi belirsiz) yazılmadı. Atlas 1281'de cagatay ile başlatır." + (ATL % "1281-01-01")))

# 13 BABADAGI
K.append(sehir("babadagi-ro", "Babadağı (Babadag)", "Babadağı (Babadag)", 44.8917, 28.7169, ["Babadağı"],
    ilk("babadagi", "Osmanlı hâkimiyetine girdi (819/1416)", "1416-01-01", "1416", "yil"),
    [olay("babadagi", "Osmanlı hâkimiyetine girdi (819/1416)", "1416-01-01", "1416 (hicrî 819)", "ilhak",
          "Çelebi Sultan Mehmed'in Eflak Voyvodası Mircea'yı mağlûp etmesinden sonra Babadağı ve çevresi Osmanlı hâkimiyetine girdi"),
     olay("babadagi", "Boğdan seferi sırasında (1538) burada birkaç gün kalmış", "1538-01-01", "1538", "diger",
          "Kanûnî Sultan Süleyman Boğdan seferi sırasında Babadağı'nda birkaç gün kaldı"),
     olay("babadagi", "ilk defa Kasım 1771’de Babadağı’nı geçici bir zaman için işgal ettiler", "1771-11-01", "Kasım 1771", "fetih",
          "Ruslar Babadağı'nı geçici bir zaman için işgal etti", "ay"),
     olay("babadagi", "1774 Küçük Kaynarca Antlaşması’yla tekrar Osmanlılar’ın eline geçen Babadağı", "1774-01-01", "1774", "antlasma",
          "Küçük Kaynarca Antlaşması'yla Babadağı yeniden Osmanlılar'ın eline geçti"),
     olay("babadagi", "1809 Osmanlı-Rus savaşları sırasında yine Ruslar’ın eline düşen Babadağı 1812’de geri alındı", "1809-01-01", "1809", "fetih",
          "1809 Osmanlı-Rus savaşı sırasında Babadağı yine Ruslar'ın eline düştü"),
     olay("babadagi", "1809 Osmanlı-Rus savaşları sırasında yine Ruslar’ın eline düşen Babadağı 1812’de geri alındı", "1812-01-01", "1812", "fetih",
          "Babadağı 1812'de Rusların elinden geri alındı"),
     olay("babadagi", "1878 Berlin Antlaşması ile Dobruca bölgesinin Romanya’ya terkedilmesi üzerine Osmanlı Devleti’nden ayrıldı", "1878-01-01", "1878", "kayip",
          "Berlin Antlaşması ile Dobruca Romanya'ya terkedilince Babadağı Osmanlı Devleti'nden ayrıldı")],
    GEN + "ilk.t: TDV Babadağı'nın XIV. yy başlarında Sarı Saltuk Türkmenleri'nin göçü bağlamında Türkmenlerce yurt edinildiğini 'anlaşılır' diye çıkarım olarak verir (tanık sayılmadı); ilk TARİHLİ tanık 819/1416 Osmanlı hâkimiyeti (TDV mîlâdî karşılığı 1416 verir; hicrî 819'un kesişim ilk günü gerekmedi, yıl düzeyi 1416-01-01). Atlas Babadağı'nı 1281'de altinorda ile başlatır; TDV'nin 1416 öncesi sahip tanığı yok, zincir atlasa bırakıldı (öneri: 1416 Osmanlı geçişi atlas dönemine kaynaklı eklenebilir: Çelebi Mehmed). 1594-1596 Mihai Viteazul yağması, 1773 yazı yakıp yıkma ve IV. Murad/Evliya Çelebi bilgileri aralık/tarihsiz olduğundan yazılmadı." + (ATL % "1281-01-01")))

# 14 SUCEAVA
K.append(sehir("sucava-ro", "Suçava (Suceava)", "Suçava (Suceava)", 47.633, 26.25, ["Suceava", "Suçava"],
    ilk("bogdan", "padişah Boğdan seferine çıkmak zorunda kalmış (1538) ve bu sefer sırasında Suceava zaptedilerek", "1538-01-01", "1538", "yil"),
    [olay("bogdan", "padişah Boğdan seferine çıkmak zorunda kalmış (1538) ve bu sefer sırasında Suceava zaptedilerek", "1538-01-01", "1538", "fetih",
          "Kanûnî'nin Boğdan seferi sırasında Suceava zaptedildi")],
    GEN + "ilk.t: TDV «Boğdan» md. Fâtih'in Boğdan seferinde (Vaslui'den 'ertesi yıl') Suceava'ya girdiğini ama kalesini alamadığını anlatır; yıl cümlede yoktur (yalnız 'ertesi yıl') → yazılmadı, 1538 en erken TARİHLİ tanık. Beyliğin merkezi olduğu TDV'de geçer. Atlas Suçava'yı 1281'de altinorda ile başlatır; Boğdan beyliği künyesi (bogdan 1359-1859) ile atlas zinciri karşılaştırılmalıdır." + (ATL % "1281-01-01")))

# 15 UC TURFAN
K.append(sehir("uc-turfan-cn", "Uçturfan (Uç Turfan)", "Uçturfan (Uç Turfan)", 41.21, 79.05, ["Uc (TDV)", "Uç Turfan"],
    ilk("turfan", "1756’da Aksu’nun batısındaki Uc şehrinin halkı isyan ettiği gerekçesiyle Çinliler tarafından öldürüldü", "1756-01-01", "1756", "yil"),
    [olay("turfan", "1756’da Aksu’nun batısındaki Uc şehrinin halkı isyan ettiği gerekçesiyle Çinliler tarafından öldürüldü", "1756-01-01", "1756", "diger",
          "İsyan ettiği gerekçesiyle Uc şehrinin halkı Çinliler tarafından öldürüldü")],
    GEN + "Ad eşitlemesi (kabul edilir, kesin değil): TDV «Turfan» md. 'Aksu'nun batısındaki Uc şehri' der; atlasın Uç Turfan (41.21, 79.05) noktası Aksu'nun yaklaşık 60-70 km batısındadır — TDV'de ek koordinat/ad yok, eşitleme beyan edilir. Atlas Uç Turfan'ı 1281-01-01'de cagatay ile başlatır; sahip_devlet sütununda qing-hanedani göründü (atlasın ilk sahip ölçümü ayrı); ilk.t sonradır → sahip:[]." + (ATL % "1281-01-01")))

p = os.path.join(os.path.dirname(os.path.abspath(__file__)), "B.json")
io.open(p, "w", encoding="utf-8").write(json.dumps(K, ensure_ascii=False, indent=1))
print(len(K), "sehir ->", p)
