# -*- coding: utf-8 -*-
"""PAKET-TEMIZ — düzenleme tablosu üreticisi → denetim/TEMIZ-DUZENLE-0914.json

py denetim/ARAC-TEMIZ-HAZIRLA-0914.py            (tabloyu yazar; uygulamaz)

Her kayıt bir SINIF taşır:
  a  SERT geliştirici notu      metinden çıkar, içerik ic_not_<alan>'a taşınır
  b  okura belirsizlik bildirimi ama geliştirici diliyle → okur diliyle yeniden yazılır (eski ifade ic_not'ta)
Kayıtların bir kısmı ELLE (aşağıdaki E(...) çağrıları), bir kısmı KURALLA üretilir (devletler.js
kronoloji başlıklarındaki kaynak parantezleri · ekokuma `kaynak` alanlarındaki süreç notları ·
"Aynı tarihte haritaya katılan diğer yerleşimler" üretim cümlesi · Altın Orda 🔴 önekleri · padişah
kartvizitindeki "bulunamadı" dizileri). Kural çıktısı ELLE gözden geçirildi; kuralın yanlış kestiği
yerler `DV_ELLE` / `KAYNAK_ELLE` sözlüklerinde tek tek yazılıdır.
"""
import io, json, os, re, sys, importlib.util
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
spec = importlib.util.spec_from_file_location("u", os.path.join(KOK, "denetim", "ARAC-TEMIZ-UYGULA-0914.py"))
U = importlib.util.module_from_spec(spec); spec.loader.exec_module(U)

K = []


def E(dosya, kayit, yol, sinif, desen, **kw):
    r = {"dosya": dosya, "kayit": kayit, "yol": yol, "sinif": sinif, "desen": desen}
    r.update(kw)
    K.append(r)


def kok_oku(dosya):
    m = io.open(os.path.join(KOK, "data", dosya), encoding="utf-8", newline="").read()
    koks, h = U.kokler(m)
    if h:
        raise SystemExit("ayrıştırılamadı %s: %s" % (dosya, h))
    return koks


def dizge_alan(o, ad):
    a = U.alan(o, ad)
    return a[3]["deger"] if a and a[3]["tur"] == "str" else None


# ═══════════════════════════ OLAYLAR (b · gun · d) ═══════════════════════════
E("olaylar_7a4170.js", {"t": "1863-04-03", "b^": "Sultan Abdülaziz'in Mısır ziyareti"}, "d", "a", "tdv-tartisma",
  eski=" TDV şehrin kuruluşunu 1863'e koyar, gününü vermez; bu madde bu yüzden gününü kaynağın verdiği ziyaret tarihine bağlamıştır.",
  yeni=" Şehrin kuruluşu 1863 yılına tarihlenir; kesin günü bilinmez.",
  **{"not": "eski: TDV şehrin kuruluşunu 1863'e koyar, gününü vermez; bu madde bu yüzden gününü kaynağın verdiği ziyaret tarihine bağlamıştır."})
E("olaylar_7a4170.js", {"t": "1869-01-01", "b^": "Midhat Paşa'nın Bağdat valiliği"}, "d", "a", "tdv-tartisma",
  eski=" TDV'nin Midhat Paşa ve Bağdat maddeleri bu siyaseti anlatır, iki kasabayı adıyla anmaz.", yeni="",
  **{"not": "TDV'nin Midhat Paşa ve Bağdat maddeleri bu siyaseti anlatır, iki kasabayı adıyla anmaz."})
E("olaylar_ek13.js", {"t": "1417-01-01", "b^": "Bahreyn adalarının Cebrîler"}, "gun", "a", "tdv-tartisma,gun-bilinmiyor",
  deger="1417 dolayı (Cebrî hânedanının kuruluşu XV. yüzyıl başına tarihlenir)",
  **{"not": "eski gun: 1417 (TDV hanedan sırasını verir, TARİH VERMEZ; yıl komşu Katîf ve Lahsa kayıtlarının deseninden alındı — literatür Cebrî hanedanının kuruluşunu XV. yüzyıl başına koyar)"})
E("olaylar_ek14.js", {"t": "1357-06-01", "b^": "Kırkpınar"}, "gun", "b", "tdv-tartisma",
  deger="1357 dolayı (rivayete göre)", **{"not": "eski gun: 1357 dolayı (rivayete göre, TDV kesin tarih vermiyor)"})
E("olaylar_ek14.js", {"t": "1281-01-01", "b^": "Ahî Evran"}, "gun", "b", "tdv-tartisma,kesinlik",
  deger="1262 dolayı (farklı rivayetler vardır)", **{"not": "eski gun: 1262 dolayı (TDV birden çok rivayet aktarır, kesinlik iddia etmez)"})
E("olaylar_ek14.js", {"t": "1362-06-01", "b^": "Yeniçeri Ocağı"}, "gun", "b", "tdv-tartisma",
  deger="1362 dolayı (kuruluş kademeli bir süreçtir)", **{"not": "eski gun: 1362 dolayı (TDV kesin bir tarih vermiyor, kademeli bir süreç olarak tarifliyor)"})
E("olaylar_ek14.js", {"t": "1326-01-01", "b^": "Şeyh Edebâli"}, "gun", "b", "tdv-tartisma",
  eski="evlilik/rüya olayının tam tarihi TDV'de belirtilmiyor", yeni="evlilik ve rüya olayının tarihi bilinmez",
  **{"not": "eski gun soneki: evlilik/rüya olayının tam tarihi TDV'de belirtilmiyor"})
E("olaylar_ek17.js", {"t": "1606-10-11", "b^": "Sedefkâr Mehmed Ağa"}, "d", "b", "isaret,bulunamadi",
  eski="⚠️ TDV bu maddede altı minarenin Mekke'deki Kâbe ile 'eşitlik' iddiasına yol açtığına dair yaygın popüler anlatıyı DOĞRULAMIYOR — yalnız 'o zamana kadar denenmemiş bir düzenleme' olduğunu kaydediyor; rivayet TDV'de bulunamadı.",
  yeni="Altı minarenin Mekke'deki Kâbe ile 'eşitlik' tartışmasına yol açtığı yaygın bir halk anlatısıdır; ansiklopedik kaynaklar bunu doğrulamaz, düzenlemeyi yalnız 'o zamana kadar denenmemiş' diye niteler.",
  **{"not": "eski: ⚠️ TDV bu maddede altı minarenin … yaygın popüler anlatıyı DOĞRULAMIYOR — yalnız 'o zamana kadar denenmemiş bir düzenleme' olduğunu kaydediyor; rivayet TDV'de bulunamadı."})
E("olaylar_ek17.js", {"t": "1639-01-20", "b^": "I. Mustafa on beş yıllık"}, "b", "a", "dogrulanamadi",
  deger="I. Mustafa on beş yıllık unutuluşun ardından öldü",
  **{"not": "eski b soneki: — kızlarağası rivayeti doğrulanamadı (H-0003)"})
E("olaylar_ek17.js", {"t": "1639-01-20", "b^": "I. Mustafa on beş yıllık"}, "d", "b", "dogrulanamadi,isaret,tdv-tartisma",
  cift=[["TDV İslâm Ansiklopedisi bu döneme dair 'herhangi bir bilgi bulunmamaktadır' diyerek sessizliği açıkça kaydeder.",
         "bu yıllara dair kaynaklarda hiçbir bilgi yoktur."],
        ["⚠️ RİVAYET DOĞRULANAMADI: kızlarağasının onu bir odaya kilitlediğine dair halk arasında anlatılan hikâye TDV maddesinde yer almıyor; madde yalnızca ilk hal' kararında Kızlar Ağası Mustafa Ağa'nın etkili olduğunu belirtiyor.",
         "Halk arasında kızlarağasının onu bir odaya kilitlediği anlatılır; ancak bu rivayet kaynaklarca desteklenmez. Kaynaklar yalnızca ilk hal' kararında Kızlar Ağası Mustafa Ağa'nın etkili olduğunu belirtir."]],
  **{"not": "eski ifadeler (H-0003): «TDV İslâm Ansiklopedisi bu döneme dair 'herhangi bir bilgi bulunmamaktadır' diyerek sessizliği açıkça kaydeder.» · «⚠️ RİVAYET DOĞRULANAMADI: kızlarağasının … hikâye TDV maddesinde yer almıyor; madde yalnızca ilk hal' kararında Kızlar Ağası Mustafa Ağa'nın etkili olduğunu belirtiyor.»"})
E("olaylar_ek17.js", {"t": "1644-01-01", "b^": "'Deli İbrahim' mi"}, "b", "a", "tdv-tartisma",
  eski="? TDV etiketi reddediyor", yeni="?", **{"not": "eski b soneki: TDV etiketi reddediyor"})
E("olaylar_ek17.js", {"t": "1711-07-21", "b^": "Baltacı Mehmed Paşa ve Çariçe Katerina"}, "b", "a", "tdv-tartisma",
  eski=" — TDV'nin kendi uyarısı", yeni="", **{"not": "eski b soneki: — TDV'nin kendi uyarısı"})
E("olaylar_ek17.js", {"t": "1361-01-01", "b^": "I. Murad döneminde kuzeydoğu Trakya"}, "gun", "a", "tdv-tartisma",
  deger="763 (1361-62)", **{"not": "eski gun: 763 (1361-62) — TDV Edirne için gün verir (5 Mayıs 1361), çevre için vermez"})
E("olaylar_ek17.js", {"t": "1552-01-01", "b^": "Cezayir Ocaklığı'nın Sahra'ya"}, "d", "b", "isaret",
  eski="⚠️ Mustagānim'in kendi büyük olayı bu tarihte DEĞİL: Hasan Paşa'nın İspanyol Kontu Alcaudete'yi yenip Kuzey Afrika'daki İspanyol taarruzlarını bitirdiği asıl muharebe 1558'dedir.",
  yeni="Mustagānim önündeki büyük muharebe ise bu yıl değil, 1558'de oldu: Hasan Paşa orada İspanyol Kontu Alcaudete'yi yenerek Kuzey Afrika'daki İspanyol taarruzlarını bitirdi.",
  **{"not": "eski: ⚠️ Mustagānim'in kendi büyük olayı bu tarihte DEĞİL: … asıl muharebe 1558'dedir."})
E("olaylar_ek5.js", {"t": "1323-09-01", "b^": "Adranos (Orhaneli) seferi"}, "d", "b", "tdv-tartisma",
  eski="TDV kalenin kesin fetih gününü vermez; harekât", yeni="Kalenin kesin fetih günü bilinmez; harekât",
  **{"not": "eski: TDV kalenin kesin fetih gününü vermez"})
E("olaylar_ek6.js", {"t": "1325-01-01", "b^": "Konuralp'in Bolu"}, "d", "b", "tdv-tartisma",
  eski="TDV'nin Bolu maddesi fethin kesin tarihini vermez, Âşıkpaşazâde'nin bu rivayetini aktarır.",
  yeni="Fethin kesin tarihi bilinmez; anlatı Âşıkpaşazâde'nin rivayetine dayanır.",
  **{"not": "eski: TDV'nin Bolu maddesi fethin kesin tarihini vermez, Âşıkpaşazâde'nin bu rivayetini aktarır."})
OK109 = [
    ("1918-10-28", "Çekoslovakya'nın bağımsızlık", [["Atlasta Çekoslovakya'nın on iki yerleşimi 1918-11-11'de haritaya girer; ilan bu tarihten iki hafta öncedir.",
                                                  "Haritada Çekoslovakya 11 Kasım 1918'de belirir; bağımsızlık ilanı bundan iki hafta öncedir."]]),
    ("1918-11-03", "Villa Giusti", [["Atlasta Trento ve Trieste", "Haritada Trento ve Trieste"]]),
    ("1918-11-11", "Avusturya-Macaristan mirasının", [
        ["Bu gün atlasta imparatorluk mirasının toplu devrini gösterir: seksen dokuz yerleşim Avusturya kimliğinden çıkar;",
         "Harita bu gün imparatorluk mirasının toplu devrini gösterir: Avusturya-Macaristan toprakları dağılır;"],
        ["atlas bu ilanların toprak üzerindeki karşılığını tek güne toplar", "harita bu ilanların toprak üzerindeki karşılığını tek güne toplar"]]),
    ("1918-11-18", "İmparator Karl'ın çekilişi", [["— atlas ikincisini boyar, birincisini anlatır.", "— haritada görünen, bu egemenlik devridir."]]),
    ("1918-12-01", "Sırp-Hırvat-Sloven Krallığı", [["Atlasta otuz yerleşim Sırbistan Krallığı'ndan Yugoslavya'ya geçer.",
                                                   "Haritada Sırbistan Krallığı toprakları Yugoslavya'ya geçer."]]),
    ("1920-06-04", "Trianon Antlaşması", [["Atlasta Macaristan Naipliği'nin yirmi yerleşimi bu küçülmüş devleti gösterir;",
                                          "Haritada Macaristan Naipliği bu küçülmüş sınırlarla görünür;"]]),
    ("1919-06-28", "Versailles Antlaşması", [["Atlasta bu gün", "Haritada bu gün"]]),
    ("1919-11-27", "Neuilly Antlaşması", [["Atlasta bu devrin karşılığı", "Haritada bu devrin karşılığı"]]),
]
for t, bb, cift in OK109:
    E("olaylar_ok109.js", {"t": t, "b^": bb}, "d", "b", "atlas,yerlesim-kimlik", cift=cift,
      **{"not": "eski ifade: " + " · ".join(c[0] for c in cift)})
E("olaylar.js", {"t": "1361-03-01", "gun^": "1361 (TDV"}, "gun", "b", "tdv-tartisma",
  eski="(TDV'nin ağırlık verdiği görüş; 1362/1367/1369 de öne sürülmüştür)", yeni="(ağırlık kazanan görüş; 1362, 1367 ve 1369 da öne sürülmüştür)",
  **{"not": "eski gun: (TDV'nin ağırlık verdiği görüş; 1362/1367/1369 de öne sürülmüştür)"})
E("olaylar_ek2.js", {"t": "1842-01-01", "gun^": "Ocak 1842"}, "gun", "a", "gun-bilinmiyor", eski=" (gün TDV'de yok)", yeni="",
  **{"not": "eski gun soneki: (gün TDV'de yok)"})
E("olaylar_ek2.js", {"t": "1850-01-01", "gun^": "1850 (gün"}, "gun", "a", "gun-bilinmiyor", eski=" (gün TDV'de yok)", yeni="",
  **{"not": "eski gun soneki: (gün TDV'de yok)"})
E("olaylar_ek5.js", {"t": "1648-03-31", "gun^": "31 Mart 1648"}, "gun", "b", "tdv-tartisma",
  eski=" — TDV yalnız 1645-1648 aralığını veriyor", yeni="; kaynaklarda 1645-1648 arası", **{"not": "eski gun soneki: — TDV yalnız 1645-1648 aralığını veriyor"})
E("olaylar_ek5.js", {"t": "1803-08-06", "gun^": "Ağustos 1803"}, "gun", "a", "tdv-tartisma",
  deger="Ağustos 1803 başı (12 Temmuz'da başlayan yirmi beş günlük kuşatmanın sonunda)",
  **{"not": "eski gun: Ağustos 1803 başı — TDV yalnız kuşatmanın başlangıcını (12 Temmuz) ve süresini (25 gün) veriyor, gün türetilmiştir"})
E("olaylar_ek5.js", {"t": "1878-01-04", "gun^": "3 Ocak 1878"}, "gun", "a", "tdv-tartisma",
  deger="3 Ocak 1878", **{"not": "eski gun: 3 Ocak 1878 (TDV) — kayıttaki tarih 4 Ocak, bir gün fark"})
E("olaylar_ek11.js", {"t": "1503-01-01", "b^": "Murad Bey'in Hemedan"}, "d", "b", "yerlesim-kimlik",
  eski="haritada otuz yedi yerleşim aynı anda el değiştirir.", yeni="haritada bu bölgeler aynı anda el değiştirir.",
  **{"not": "eski: haritada otuz yedi yerleşim aynı anda el değiştirir."})
E("olaylar_ek11.js", {"t": "1508-01-01", "b^": "Bağdat'ın Safevî'ye geçişi"}, "d", "b", "yerlesim-kimlik",
  eski="Haritada kırk altı yerleşim aynı gün el değiştirir;", yeni="Haritada Irâk-ı Arab aynı gün el değiştirir;",
  **{"not": "eski: Haritada kırk altı yerleşim aynı gün el değiştirir;"})
E("olaylar_ek9.js", {"t": "1911-11-05", "b^": "İtalya'nın tek taraflı ilhak"}, "d", "b", "harita-teknik",
  eski="Kararnâme bu yüzden haritada TABAN RENGİNİ değiştirmez — de jure sahiplik 1912'ye kadar Osmanlı'dadır, İtalyan denetimi işgal örtüsüdür.",
  yeni="Kararnâme bu yüzden haritada Osmanlı rengini değiştirmez — hukukî sahiplik 1912'ye kadar Osmanlı'dadır, İtalyan denetimi taralı işgal olarak gösterilir.",
  **{"not": "eski: Kararnâme bu yüzden haritada TABAN RENGİNİ değiştirmez — de jure sahiplik 1912'ye kadar Osmanlı'dadır, İtalyan denetimi işgal örtüsüdür."})
E("olaylar_ek4.js", {"t": "1813-01-23", "b^": "Mekke geri alındı"}, "d", "b", "yerlesim-kimlik",
  eski="Aynı tarihte tâbi katmana geçen diğer yerleşimler: Cidde.", yeni="Aynı tarihte tâbi idareye geçen öteki yer: Cidde.",
  **{"not": "eski: Aynı tarihte tâbi katmana geçen diğer yerleşimler: Cidde."})

# KURAL — "Aynı tarihte haritaya katılan diğer yerleşimler:" (Değişmez 2 senkron üretim cümlesi)
URETIM = "Aynı tarihte haritaya katılan diğer yerleşimler:"
for f in sorted(os.listdir(os.path.join(KOK, "data"))):
    if not re.match(r"^olaylar.*\.js$", f) or f in ("olaylar_ek16.js", "olaylar_ek20.js", "olaylar_ek22.js", "olaylar_p0051.js", "olaylar_p0052.js"):
        continue
    for _, kok in kok_oku(f):
        def c(o, f=f):
            d, t, b = dizge_alan(o, "d"), dizge_alan(o, "t"), dizge_alan(o, "b")
            if not d or not t or not b or URETIM not in d:
                return
            i = d.index(URETIM)
            # 🔴 cümle sonu = ardından boşluk ya da metin sonu gelen nokta. İlk sürüm ilk "."da kesiyordu ve
            # 1413 Çamurlu listesindeki "Kirmasti (M.Kemalpaşa)" kısaltmasında durup okur metninde bir kuyruk
            # BIRAKTI (TEMIZ-DUZENLE-0914-EK.json onardı). node --check ve SINAV bunu göremezdi: sözdizimi ve
            # alan yapısı sağlamdı, bozuk olan METİNDİ — yakalayan, uygulama sonrası metnin gözle okunmasıydı.
            mj = re.search(r"\.(?=\s|$)", d[i + len(URETIM):])
            j = i + len(URETIM) + mj.start() if mj else -1
            cumle = d[i:(j + 1 if j >= 0 else len(d))]
            adlar = cumle[len(URETIM):].strip().rstrip(".")
            if adlar.count(",") >= 10:   # 1413 Çamurlu: 90 ad — okura liste değil gürültü; cümle ÇIKAR
                E(f, {"t": t, "b": b}, "d", "a", "yerlesim-kimlik", eski=" " + cumle, yeni="",
                  **{"not": "çıkarılan üretim cümlesi: " + cumle})
            else:
                E(f, {"t": t, "b": b}, "d", "b", "yerlesim-kimlik", eski=URETIM, yeni="Aynı tarihte katılan öteki yerler:",
                  **{"not": "eski ifade: " + URETIM})
        U.gez(kok, c)

# ═══════════════════════════ KRONOLOJI_* (yalnız b çiziliyor) ═══════════════════════════
for _, kok in kok_oku("kronoloji_altinorda.js"):
    def c(o):
        b, t = dizge_alan(o, "b"), dizge_alan(o, "t")
        if b and t and b.startswith("🔴 "):
            E("kronoloji_altinorda.js", {"t": t, "b": b}, "b", "a", "isaret", deger=b[2:], **{"not": "eski b öneki: 🔴"})
    U.gez(kok, c)
# bağ onarımı — data/etiket_yama.js {dosya,t,b} ile BİREBİR eşler (ARAC-TEMIZ-BAG-0914 ②④ yakaladı)
E("etiket_yama.js", {"dosya": "kronoloji_altinorda.js", "t": "1346-01-01", "b": "🔴 Kara Ölüm Kefe kuşatmasından Akdeniz'e yayıldı — Avrupa nüfusunun üçte biri öldü"},
  "b", "bag", "bag-onarimi", deger="Kara Ölüm Kefe kuşatmasından Akdeniz'e yayıldı — Avrupa nüfusunun üçte biri öldü")
KR_B = [
    ("kronoloji_italya.js", "1281-01-01", "Papalık — atlas açılışında Orta İtalya'daki durum", "Papalık — XIII. yüzyıl sonunda Orta İtalya'daki durum"),
    ("kronoloji_italya_sehir.js", "1281-01-01", "Atlasın açılışında Cenova — Batı Akdeniz'in ve Karadeniz'in efendisi", "XIII. yüzyıl sonunda Cenova — Batı Akdeniz'in ve Karadeniz'in efendisi"),
    ("kronoloji_italya_sehir.js", "1281-01-02", "Atlasın açılışında Este Devleti — Po ovasının efendisi", "XIII. yüzyıl sonunda Este Devleti — Po ovasının efendisi"),
    ("kronoloji_italya_sehir.js", "1281-01-03", "Atlasın açılışında Siena — Dokuzlar rejiminin arifesinde bir banker cumhuriyeti", "XIII. yüzyıl sonunda Siena — Dokuzlar rejiminin arifesinde bir banker cumhuriyeti"),
    ("kronoloji_portekiz.js", "1281-01-01", "Atlasın açılışında Portekiz — Burgonya hanedanı ve Reconquista'nın mirası", "XIII. yüzyıl sonunda Portekiz — Burgonya hanedanı ve Reconquista'nın mirası"),
    ("kronoloji_portekiz.js", "1923-10-29", "Atlas penceresinin kapanışında Portekiz — istikrarsız Birinci Cumhuriyet", "1923'te Portekiz — istikrarsız Birinci Cumhuriyet"),
    ("kronoloji_venedik.js", "1281-01-01", "Levant imparatorluğu — atlasın açılışında Venedik'in elindekiler", "Levant imparatorluğu — XIII. yüzyıl sonunda Venedik'in elindekiler"),
]
for f, t, eskib, yenib in KR_B:
    E(f, {"t": t, "b": eskib}, "b", "a", "atlas", deger=yenib, **{"not": "eski b: " + eskib})
# bağ onarımı (arac/yama_uygula.js [dosya,t,b] BİREBİR eşler)
E("yer_yama.js", {"dosya": "kronoloji_venedik.js", "t": "1281-01-01", "b": "Levant imparatorluğu — atlasın açılışında Venedik'in elindekiler"},
  "b", "bag", "bag-onarimi", deger="Levant imparatorluğu — XIII. yüzyıl sonunda Venedik'in elindekiler")

# ═══════════════════════════ DEVLETLER.kronoloji[].b + 1 başkent ═══════════════════════════
KAYNAK_IS = re.compile(r"TDV|akademik|Britannica|Banglapedia|Encyclopedia|Cœdès|Wyatt|Vickery|Caiani|ANRI|TAWARIKH|Pigafetta|Majul|"
                       r"kaynak:|kaynaktan|kaynağı|standart kaynak|ikincil kaynak|birincil kaynak|maddesi|madde\b|Celal Metin|taneciklik|doğrudan$|"
                       r"tam gün|gün birebir|beyanı|ayrıntı|doğrulanamad|hakemli|güven|arşiv|dayanak|tanıklığı|dergisi|Yale|atlas|saptanamad|gün yok", re.I)
# kaynak parantezinden geriye kalan parça bir KÜNYE mi (yazar-yıl · tırnaklı eser adı · yayınevi) → o da düşer
KUNYE_IS = re.compile(r"['\"‘’]|\b[A-ZÇĞİÖŞÜ][a-zçğıöşü]+ \d{4}\b|\bvd\.|&|\bUP\b|Journal|Research|Museum|Üniversitesi|\bGale\b|Kitabesi|"
                      r"Torre do Tombo|de Silva|Nilakanta|Maung|Aung|Ahyat|Andaya|Fadli|Zahorka|Tucker|Baranî|EBSCO|s\.\d", re.I)
DV_ELLE = {
    "Kaçar hânedanı sona erdi (gün belirsiz — bkz. ozet'teki çelişki: kacarlar 1925 diyor, riza-sah-pehlevi 31 Ocak 1924 diyor)":
        "Kaçar hânedanı sona erdi (günü kaynaklarda tartışmalı)",
    "Nâsır b. Mürşid, iç karışıklıklar sürecinde bölge ileri gelenlerinin biatıyla imam seçilip Ya'rubî hânedanını kurdu (TDV yarubiler maddesi; kuruluş için 1615/1624 iki tarih veriyor, atlasın f: alanıyla uyumlu 1624 kullanıldı)":
        "Nâsır b. Mürşid, iç karışıklıklar sürecinde bölge ileri gelenlerinin biatıyla imam seçilip Ya'rubî hânedanını kurdu (kaynaklarda 1615 ya da 1624)",
    "Hicaz Krallığı ilan edildi (künyenin kendi adı buradan geliyor: 'Necid ve Hicaz Sultanlığı')": "Hicaz Krallığı ilan edildi",
    "Merkez Cetine'ye (Cetinje) taşındı — bu tarih TDV'nin karadag maddesinde doğrulanamadı, yerlesimler.js'teki Cetinje kuruluş tarihiyle (kur:1482) hizalandı":
        "Merkez Cetine'ye (Cetinje) taşındı",
    "Kral Aleksandar'ın kişisel yönetimi ilanının ardından devletin resmî adı 'Yugoslavya Krallığı' oldu (TDV yugoslavya maddesi; ⚠️ atlasın 1923-10-29 ufkunun DIŞINDA, dizin amaçlı bırakıldı)":
        "Kral Aleksandar'ın kişisel yönetimi ilanının ardından devletin resmî adı 'Yugoslavya Krallığı' oldu",
    "Banjarmasin Sultanlığı ile VOC arasında ilk resmî antlaşma imzalandı (ANRI arşiv koleksiyonu; TAWARIKH dergisi, Ahyat 2012; gün bilinmiyor)":
        "Banjarmasin Sultanlığı ile VOC arasında ilk resmî antlaşma imzalandı (günü bilinmiyor)",
    "Papa II. Pius, İstanbul'un fethi sonrası alevlenen Haçlı çağrısına katılmayan Fransa'yı tehdit eden bir bildiri yayımladı (TDV fransa maddesi, gün birebir verilmiş)":
        "Papa II. Pius, İstanbul'un fethi sonrası alevlenen Haçlı çağrısına katılmayan Fransa'yı tehdit eden bir bildiri yayımladı",
    "Napolyon, Papalık topraklarını Fransız İmparatorluğu'na ilhak etti; Papa VII. Pius'u aforoz etmesi üzerine Fransız kuvvetleri Papa'yı tutuklayıp 1814'e kadar hapsetti (TDV kapsamıyor — akademik kaynak: Ambrogio Caiani, 'To Kidnap a Pope', Yale UP 2021)":
        "Napolyon, Papalık topraklarını Fransız İmparatorluğu'na ilhak etti; Papa VII. Pius'u aforoz etmesi üzerine Fransız kuvvetleri Papa'yı tutuklayıp 1814'e kadar hapsetti",
    "Rusya ile bir birlik/himaye anlaşması imzalandı (TDV: \"birleşti\", ayrıntı yok)": "Rusya ile bir birlik/himaye anlaşması imzalandı",
    "Nasrî-Merînî müttefik kuvvetleri Río Salado'da Kastilya-Aragon-Portekiz ittifakına ağır yenildi; Cezîretülhadrâ ve Tarîf kaybedildi, 1344'te barış yapıldı (TDV nasriler, olayı isimsiz anlatıyor; tam gün Britannica 'Battle of Río Salado' — taneciklik boşluğu)":
        "Nasrî-Merînî müttefik kuvvetleri Río Salado'da Kastilya-Aragon-Portekiz ittifakına ağır yenildi; Cezîretülhadrâ ve Tarîf kaybedildi, 1344'te barış yapıldı",
    "Animist/hıristiyan olan kurucu sultan Amâre, Müslüman lider Abdullah Cemmâ'nın baskısıyla İslâmiyet'i kabul etti (TDV func maddesi: 'tahminen 1523'ten sonra', gün/ay TDV'de yok)":
        "Animist/hıristiyan olan kurucu sultan Amâre, Müslüman lider Abdullah Cemmâ'nın baskısıyla İslâmiyet'i kabul etti (tahminen 1523'ten sonra)",
    "Bûmû el-Kasîr'in istilâsıyla gelen karışıklığın ardından Tunciler'in hâkimiyeti Süleyman Solonc önderliğindeki Kîrâ (Fûr) sülâlesince ele geçirildi (TDV darfur maddesi: 'XVII. yüzyılın sonları', gün/yıl yok, mevcut t:1695 ile tutarlı olsun diye yaklaşık yerleştirildi)":
        "Bûmû el-Kasîr'in istilâsıyla gelen karışıklığın ardından Tunciler'in hâkimiyeti Süleyman Solonc önderliğindeki Kîrâ (Fûr) sülâlesince ele geçirildi (XVII. yüzyılın sonları)",
    "Rai Sahra, Belûcî Lengâh kabilesinden Multan'a hâkim oldu (muhtemelen tarih, TDV)": "Rai Sahra, Belûcî Lengâh kabilesinden Multan'a hâkim oldu (tarih kesin değil)",
    # KURAL YANLIŞ KESİYORDU — içerik parantezi, kaynak değil (DOKUNMA)
    "Altın Orda hanı Uluğ Muhammed, Kazan'da hanlığını kurdu (bazı kaynaklara göre 1445)": "Altın Orda hanı Uluğ Muhammed, Kazan'da hanlığını kurdu (bazı kaynaklara göre 1445)",
    "1200'den sonra Cahokia, nedeni tam bilinmeyen bir gerilemeye girdi (aşırı nüfus, kaynak tükenmesi ve olası çatışma teorileri var)":
        "1200'den sonra Cahokia, nedeni tam bilinmeyen bir gerilemeye girdi (aşırı nüfus, kaynak tükenmesi ve olası çatışma teorileri var)",
    "Minatogawa Muharebesi'nde Takauji, Nitta Yoshisada'yı yenip Kusunoki Masashige'yi öldürdü ve Kyoto'yu ele geçirdi (Cambridge History of Japan temelli literatür; takvim dönüşümü nedeniyle bazı kaynaklar 25 Mayıs 1336 da verir)":
        "Minatogawa Muharebesi'nde Takauji, Nitta Yoshisada'yı yenip Kusunoki Masashige'yi öldürdü ve Kyoto'yu ele geçirdi (takvim dönüşümü nedeniyle bazı kaynaklar 25 Mayıs 1336 da verir)",
    "Toungoo Hanedanı (Tabinshwehti) Mon Krallığı'nı ilhak etti; Peygu 1599'a (ve 1613-1634 arası tekrar) birleşik Toungoo krallığının başkenti oldu — bkz. yukarıdaki YAPISAL ÇELİŞKİ notu (Britannica 'Pegu')":
        "Toungoo Hanedanı (Tabinshwehti) Mon Krallığı'nı ilhak etti; Peygu 1599'a (ve 1613-1634 arası tekrar) birleşik Toungoo krallığının başkenti oldu",
}
DV_ONEK_ELLE = {  # uzun başlıklar — önekle eşlenir
    "Kral Ramkhamhaeng döneminde Tay alfabesi icat edildi":
        "Kral Ramkhamhaeng döneminde Tay alfabesi icat edildi; olay ünlü Ram Khamhaeng Taş Yazıtı'na kaydedildi (yazıtın özgünlüğü tartışmalıdır)",
    "Rusya, Kırım'ı ilhak etti (II. Katerina'nın ilhak manifestosu":
        "Rusya, Kırım'ı ilhak etti (II. Katerina'nın ilhak manifestosu; kaynaklarda eski takvimle 8 Nisan 1783 olarak da geçer)",
    "Uccialli (Wuchale) Antlaşması imzalandı":
        "Uccialli (Wuchale) Antlaşması imzalandı — Bogos, Hamasien ve Akkele Guzay İtalya'ya bırakıldı",
    "Baroda İngiliz mukimi Albay Alexander Walker":
        "Baroda İngiliz mukimi Albay Alexander Walker öncülüğündeki kuvvetler Kathiawar'a girdi; 'Walker Settlement' düzenlemesiyle Cunagadh dahil bölge şeflikleri haraç ödemeyi ve İngiliz üstünlüğünü kabul edip iç işlerinde özerkliğini korudu",
    "Kral Norodom, Fransa ile antlaşma imzalayıp":
        "Kral Norodom, Fransa ile antlaşma imzalayıp Kamboçya'yı Fransız himayesine soktu; rakip Siyam'a karşı Fransız korumasını tercih etti",
}


def dv_kural(b):
    y = re.sub(r"\s*\(atlas ufku\)$", "", b)
    y = y.replace("— TDV'ye göre ", "— ")
    y = re.sub(r"\(TDV:\s*", "(", y)
    y = re.sub(r"\s*\(bkz\. \[\[[^\]]+\]\]\)", "", y)
    for _ in range(3):
        m = re.search(r"\s*\(((?:[^()]|\([^()]*\))*)\)\s*$", y)
        if not m or not KAYNAK_IS.search(m.group(1)):
            break
        tut = []
        for p in re.split(r"[;,]\s*|\s+—\s+|\s+\+\s+", m.group(1)):
            p = re.sub(r"^TDV(?: [\w-]+(?: maddesi)?)?:\s*", "", p).strip()
            if not p or KAYNAK_IS.search(p) or re.search(r"yok$|ayrıntılı değil", p):
                continue
            tut.append(p)
        # geriye kalan her parça bir künye parçasıysa (yazar-yıl · tırnaklı eser · yayınevi) parantez BÜTÜNÜYLE düşer
        if tut and all(KUNYE_IS.search(p) or re.fullmatch(r"\d{4}", p) for p in tut):
            tut = []
        if re.search(r"Britannica|Encyclopedia|akademik kaynak:", m.group(1)):
            tut = []   # künye adı " — " içerdiğinde bölme tırnağı kırıyordu ('Indonesia — Kertanagara, …')
        y = y[:m.start()] + (" (" + ", ".join(tut) + ")" if tut else "")
    return y


for _, kok in kok_oku("devletler.js"):
    if kok["tur"] != "arr":
        continue
    for kun in kok["ogeler"]:
        if kun["tur"] != "obj":
            continue
        kron = U.alan(kun, "kronoloji")
        if kron and kron[3]["tur"] == "arr":
            for m in kron[3]["ogeler"]:
                if m["tur"] != "obj":
                    continue
                b, t = dizge_alan(m, "b"), dizge_alan(m, "t")
                if not b or not t:
                    continue
                yeni = DV_ELLE.get(b)
                if yeni is None:
                    for onek, y2 in DV_ONEK_ELLE.items():
                        if b.startswith(onek):
                            yeni = y2
                if yeni is None:
                    yeni = dv_kural(b)
                if yeni != b:
                    sinif = "a" if ("atlas ufku" in b or "TDV" in b or "kaynak" in b or "⚠" in b) else "b"
                    E("devletler.js", {"t": t, "b": b}, "b", sinif, "kaynak-parantez", deger=yeni, **{"not": "eski b: " + b})
E("devletler.js", {"id": "cebel-i-lubnan-mutasarrifligi"}, "baskent", "a", "bulunamadi",
  eski=" (1888'de Ba'abda'ya taşındığı iddiası bulunamadı, standart kaynaktan)", yeni="",
  **{"not": "eski baskent soneki: (1888'de Ba'abda'ya taşındığı iddiası bulunamadı, standart kaynaktan)"})

# ═══════════════════════════ EKOKUMA / MERAK ═══════════════════════════
def EK(dosya, kid, yol, sinif, desen, **kw):
    E(dosya, {"id": kid}, yol, sinif, desen, **kw)


def nt(s):
    return {"not": s}


EK("ekokuma.js", "antlasma-karlofca-1699", "metin", "b", "isaret", eski="🔴 Ve bir talep REDDEDİLDİ:", yeni="Bir talep ise reddedildi:", **nt("eski: 🔴 Ve bir talep REDDEDİLDİ:"))
EK("ekokuma.js", "hukum-alani-mesafe", "kaynak", "a", "atlas", eski=" Atlasın kendi menzil ağı ölçümü: 121 kenar, ortanca 85 km.", yeni="",
   **nt("çıkarılan: Atlasın kendi menzil ağı ölçümü: 121 kenar, ortanca 85 km."))
EK("ekokuma_antlasma2.js", "antlasma-zitvatorok-1606", "metin", "b", "isaret", eski="⚠️ Tarafların", yeni="Tarafların", **nt("eski önek: ⚠️"))
EK("ekokuma_antlasma2.js", "antlasma-belgrad-1739", "metin", "a", "bulunamadi,http-slug",
   eski="TDV'de bu antlaşmanın müstakil maddesi bulunamadı (belgrad-antlasmasi adresi ölü); hükümler Avusturya, Rusya, Sırbistan ve Belgrad maddelerinden toplandı.",
   yeni="Hükümler, TDV İslâm Ansiklopedisi'nin Avusturya, Rusya, Sırbistan ve Belgrad maddelerinden derlenmiştir.",
   **nt("eski: TDV'de bu antlaşmanın müstakil maddesi bulunamadı (belgrad-antlasmasi adresi ölü); hükümler … maddelerinden toplandı."))
EK("ekokuma_antlasma2.js", "antlasma-bukres-1812", "metin", "a", "bulunamadi,http-slug",
   eski="TDV'de bu antlaşmanın müstakil maddesi bulunamadı (bukres-antlasmasi adresi ölü); hükümler Boğdan, Rusya ve Sırbistan maddelerinden toplandı.",
   yeni="Hükümler, TDV İslâm Ansiklopedisi'nin Boğdan, Rusya ve Sırbistan maddelerinden derlenmiştir.",
   **nt("eski: TDV'de bu antlaşmanın müstakil maddesi bulunamadı (bukres-antlasmasi adresi ölü); hükümler … maddelerinden toplandı."))
EK("ekokuma_antlasma2.js", "antlasma-yas-1792", "metin", "b", "isaret", eski="🔴 Ve bir talep düştü:", yeni="Bir talep ise düştü:", **nt("eski: 🔴 Ve bir talep düştü:"))
EK("ekokuma_antlasma2.js", "antlasma-paris-1856", "metin", "b", "isaret", eski="⚠️ Âlî Paşa'nın", yeni="Âlî Paşa'nın", **nt("eski önek: ⚠️"))
EK("ekokuma_antlasma2.js", "antlasma-ferhad-pasa-istanbul-1590", "metin", "a", "bulunamadi,kart-madde-meta",
   eski=" Bağlı maddelerin taşıdığı 21 Mart 1590 günü okunan TDV maddelerinde bulunamadı; TDV yalnız yılı (998/1590) verir.",
   yeni=" Antlaşmanın kesin günü bilinmez; kaynaklar yalnız yılı (998/1590) verir.",
   **nt("eski: Bağlı maddelerin taşıdığı 21 Mart 1590 günü okunan TDV maddelerinde bulunamadı; TDV yalnız yılı (998/1590) verir."))
EK("ekokuma_dalga2.js", "tartisma-osman-gazi-olum-yili", "not", "b", "okunmadi,http-slug",
   deger="Fetih haberinin ölüm döşeğindeki Osman'a ulaştırıldığı ayrıntısı TDV'nin Osman I, Orhan ve Bursa maddelerinde geçmez; bu maddeler yalnız \"öldüğünde Orhan Bursa'yı kuşatıyordu\" rivayetini aktarır.",
   **nt("eski not: Bursa maddesindeki \"fetih haberi ölüm döşeğindeki Osman'a ulaştırıldı\" ayrıntısı okunan TDV gövdelerinde (osman-i · orhan · bursa) geçmiyor; TDV yalnız \"öldüğünde Orhan Bursa'yı kuşatıyordu\" rivayetini aktarıyor."))
EK("ekokuma_dalga2.js", "tartisma-osman-gazi-olum-yili", "bag", "b", "atlas",
   eski="Atlastaki iki madde bu ayrımı yan yana taşıyor: vefat maddesi 1324'ü, Bursa maddesi ise rivayeti veriyor.",
   yeni="Kronolojideki iki kayıt bu ayrımı yan yana taşır: vefat kaydı 1324'ü, Bursa'nın fethi kaydı ise rivayeti verir.",
   **nt("eski: Atlastaki iki madde bu ayrımı yan yana taşıyor: vefat maddesi 1324'ü, Bursa maddesi ise rivayeti veriyor."))
EK("ekokuma_dalga2.js", "savas-bursa-1326", "taraflar[1].komutan", "b", "okunmadi", eski="(adı okunan kaynaklarda geçmiyor)", yeni="(adı kaynaklarda geçmez)",
   **nt("eski: (adı okunan kaynaklarda geçmiyor)"))
EK("ekokuma_dalga2.js", "kimdir-orhan-gazi", "not", "a", "http-slug,atlas",
   eski=" Atlastaki 1362 vefat maddesi \"TDV'de Orhan Gazi'nin müstakil maddesi yok\" notunu taşıyor; oysa `orhan` slugu HTTP 200 veriyor ve gövdesi Orhan Gazi'yi anlatıyor.", yeni="",
   **nt("çıkarılan: Atlastaki 1362 vefat maddesi \"TDV'de Orhan Gazi'nin müstakil maddesi yok\" notunu taşıyor; oysa `orhan` slugu HTTP 200 veriyor ve gövdesi Orhan Gazi'yi anlatıyor."))
EK("ekokuma_dalga2.js", "mora-despot-kardesler-1460", "metin", "a", "atlas,okunmadi",
   eski="; atlastaki 29 Mayıs günü okunan gövdelerde geçmiyor.", yeni=".", **nt("çıkarılan: atlastaki 29 Mayıs günü okunan gövdelerde geçmiyor"))
EK("ekokuma_dalga2.js", "savas-trabzon-1461", "tartisma", "a", "atlas,okunmadi,kart-madde-meta",
   eski=" Atlastaki 15 Ağustos günü okunan TDV gövdelerinde geçmiyor. Ayrıca kuyruk kronolojide aynı güne yazılmış Amasra'nın düşüşünü",
   yeni=" Amasra'nın düşüşünü ise", **nt("çıkarılan: Atlastaki 15 Ağustos günü okunan TDV gövdelerinde geçmiyor. Ayrıca kuyruk kronolojide aynı güne yazılmış …"))
EK("ekokuma_dalga2.js", "cezayir-oruc-reis-olumu-1519", "metin", "a", "atlas",
   eski="; atlastaki maddenin eylül başı tarihi bu belgeden önceye düşüyor.", yeni=".", **nt("çıkarılan: atlastaki maddenin eylül başı tarihi bu belgeden önceye düşüyor"))
EK("ekokuma_dalga2.js", "savas-rodos-1522", "akis", "b", "tdv-tartisma",
   eski="TDV çarpışmaları \"zorlu ve kanlı\" diye niteler ama hücumların ayrıntısını vermez.", yeni="Kaynaklar çarpışmaları \"zorlu ve kanlı\" diye niteler; hücumların ayrıntısı bilinmez.",
   **nt("eski: TDV çarpışmaları \"zorlu ve kanlı\" diye niteler ama hücumların ayrıntısını vermez."))
EK("ekokuma_dalga2.js", "savas-rodos-1522", "tartisma", "a", "atlas", eski="; atlastaki madde 21 Aralık'ı taşıyor.", yeni=".", **nt("çıkarılan: atlastaki madde 21 Aralık'ı taşıyor"))
EK("ekokuma_ekonomi.js", "1585-tagsis-fiyat-devrimi", "bag", "a", "dogrulanamadi,atlas",
   eski=" — bu satır atlasın 1585-01-01 kaydının kendi metnine (\"uzun savaşların ve Amerikan gümüşünün baskısıyla\") ve Osmanlı iktisat tarihindeki yaygın 'fiyat devrimi' yorumuna dayanıyor, ikinci bağımsız bir TDV sayfasıyla ayrıca doğrulanmadı.",
   yeni=" — bu bağlantı Osmanlı iktisat tarihindeki yaygın 'fiyat devrimi' yorumuna dayanır.",
   **nt("eski: bu satır atlasın 1585-01-01 kaydının kendi metnine (…) ve … 'fiyat devrimi' yorumuna dayanıyor, ikinci bağımsız bir TDV sayfasıyla ayrıca doğrulanmadı."))
EK("ekokuma_ekonomi.js", "1585-tagsis-fiyat-devrimi", "kaynak", "a", "atlas,dogrulanamadi", deger="TDV: akce · abdulkadir-seyhi-efendi",
   **nt("eski kaynak: TDV: akce · abdulkadir-seyhi-efendi · atlasın 1585-01-01 kaydının kendi metni (kaynak: akce) — Amerikan gümüşü bağlantısı ikinci bir TDV sayfasıyla ayrıca doğrulanmadı"))
EK("ekokuma_ekonomi.js", "kapitulasyon-diplomatik-araçtan-mali-bagimliliga", "bag", "a", "atlas,kaynak-parantez",
   cift=[["Atlasın kendi 1536-02-18 kaydı (kaynak: fransa) bu dönüşümü tek cümlede özetliyor:", "Kronolojinin 18 Şubat 1536 kaydı bu dönüşümü tek cümlede özetler:"],
         ["Atlasın 1740-05-30 kaydı ise dönüm noktasını taşıyor:", "30 Mayıs 1740 kaydı ise dönüm noktasını taşır:"],
         [" TDV'nin kapitülasyon maddesinin kendisi kısa bir tanım sayfası ve bu geniş tarihsel çerçeveyi ayrıca doğrulamadı; zincirin dayanağı bu yüzden atlasın kendi 1536/1740/1914 kayıtlarına ve `ahidname` maddesine dayanıyor.", ""]],
   **nt("eski ifadeler: «Atlasın kendi 1536-02-18 kaydı (kaynak: fransa) …» · «Atlasın 1740-05-30 kaydı ise …» · «TDV'nin kapitülasyon maddesinin kendisi kısa bir tanım sayfası ve bu geniş tarihsel çerçeveyi ayrıca doğrulamadı; zincirin dayanağı bu yüzden atlasın kendi 1536/1740/1914 kayıtlarına ve `ahidname` maddesine dayanıyor.»"))
EK("ekokuma_ekonomi.js", "kapitulasyon-diplomatik-araçtan-mali-bagimliliga", "kaynak", "a", "atlas", deger="TDV: fransa · kapitulasyon · ahidname · baltalimani-muahedesi",
   **nt("eski kaynak: TDV: fransa · kapitulasyon (kısa tanım sayfası, tam madde çekilemedi) · ahidname · baltalimani-muahedesi · atlasın 1536-02-18 ve 1740-05-30 kayıtlarının kendi metni"))
EK("ekokuma_mimari.js", "mimari-mostar-koprusu", "metin", "a", "isaret",
   cift=[["⚠️ TARİHÇE NOTU (kaynak dışı, genel bilgi): köprü 1993'te", "Sonraki tarihçe: köprü 1993'te"],
         ["Bugün ayakta olan yapı bir REKONSTRÜKSİYONdur;", "Bugün ayakta olan yapı bir yeniden inşadır;"],
         [" Görsel seçilirken bu ayrım (özgün dönem mi, 2004 rekonstrüksiyonu mu) açıkça belirtilmelidir.", ""]],
   **nt("eski ifadeler: «⚠️ TARİHÇE NOTU (kaynak dışı, genel bilgi):» · «REKONSTRÜKSİYONdur» · «Görsel seçilirken bu ayrım (özgün dönem mi, 2004 rekonstrüksiyonu mu) açıkça belirtilmelidir.»"))
EK("ekokuma_mimari.js", "mimari-topkapi-sarayi", "metin", "b", "kart-madde-meta",
   eski="NOT: TDV'nin Topkapı Sarayı maddesi, saraya sonradan yapılan eklemeler için barok ya da ampir gibi bir üslup adı kullanmaz. Bu karttaki üslup değerlendirmesi yalnızca Çinili Köşk maddesine dayanır.",
   yeni="Not: Saraya sonradan yapılan eklemeler için kaynaklar barok ya da ampir gibi bir üslup adı kullanmaz; yukarıdaki üslup değerlendirmesi yalnız Çinili Köşk'e aittir.",
   **nt("eski: NOT: TDV'nin Topkapı Sarayı maddesi … Bu karttaki üslup değerlendirmesi yalnızca Çinili Köşk maddesine dayanır."))
EK("ekokuma_mimari.js", "tartisma-topkapi-sarayi", "not", "a", "atlas,okunmadi,bulunamadi,dosya-adi", deger="",
   **nt("eski not (bütünüyle üretim notu): ① Atlasın 1478-01-01 maddesinin (olaylar_ek7.js) d metninde 'Fâtih'in emriyle 1459'da başlayan inşaat' yazıyor. TDV topkapi-sarayi gövdesinde 1459 tarihi hiç geçmiyor; madde 'muhtemelen 1465' diyor ve kaynakların ayrıştığını belirtiyor. Madde metninin kaynağa göre düzeltilmesi önerilir (bu kart onu değiştirmez, yalnızca bildirir). ② Abaza Paşa'nın idam yeri bilgisi Naîmâ'dan, Eyice aracılığıyla aktarılmıştır; Naîmâ'nın metni okunmadı. ③ Topkapı Sarayı'nın müzeye dönüştürülme tarihi topkapi-sarayi gövdesinde yok: bulunamadı, karta yazılmadı. ④ ⑨. husus Dolmabahçe maddesine dayanır; topkapi-sarayi gövdesi 1856 ayrılışını anmaz."))
EK("ekokuma_mimari.js", "mimari-beyazit-camii", "metin", "a", "atlas",
   eski=" (Atlasın 1505 maddesi mimar olarak Hayreddin'i verir; TDV'nin kendi Beyazıt maddesi bu konuyu açık bırakır.)", yeni="",
   **nt("çıkarılan: (Atlasın 1505 maddesi mimar olarak Hayreddin'i verir; TDV'nin kendi Beyazıt maddesi bu konuyu açık bırakır.)"))
EK("ekokuma_savas.js", "savas-otranto-1480-1481", "taraflar[0].kuvvet", "b", "bulunamadi,okunmadi",
   eski="; çıkarma ordusunun toplam büyüklüğü okunan kaynaklarda bulunamadı", yeni="; çıkarma ordusunun toplam büyüklüğü bilinmiyor", **nt("eski: okunan kaynaklarda bulunamadı"))
EK("ekokuma_savas.js", "savas-cerbe-1560", "taraflar[1].komutan", "a", "bulunamadi", deger="", **nt("eski komutan: bulunamadı — okunan iki TDV maddesi komutanın adını vermiyor"))
for i in (0, 1, 2):
    EK("ekokuma_savas.js", "savas-budin-1541", "taraflar[%d].kuvvet" % i, "a", "bulunamadi", eski="bulunamadı" if i else "bulunamadı — okunan TDV gövdeleri sayı vermiyor",
       yeni="", **nt("eski kuvvet: " + ("bulunamadı" if i else "bulunamadı — okunan TDV gövdeleri sayı vermiyor")))
EK("ekokuma_savas.js", "savas-budin-1541", "taraflar[1].komutan", "a", "okunmadi", eski="; sahadaki komutanın adı okunan gövdelerde geçmiyor", yeni="",
   **nt("çıkarılan: sahadaki komutanın adı okunan gövdelerde geçmiyor"))
EK("ekokuma_savas.js", "savas-budin-1541", "akis", "b", "okunmadi",
   eski="okunan TDV gövdelerinde anlatılmıyor.", yeni="kaynaklarda anlatılmaz.", **nt("eski: okunan TDV gövdelerinde anlatılmıyor."))
EK("ekokuma_savas.js", "savas-budin-1541", "tartisma", "a", "atlas,okunmadi,olculemedi",
   cift=[["TDV `suleyman-i`", "TDV'nin I. Süleyman maddesi"],
         ["; atlasın bağlı maddelerindeki 29 Ağustos 1541 günü okunan TDV gövdelerinde (`budin`, `suleyman-i`) geçmiyor — o günün kaynağı ayrıca sınanmalı.", "; yaygın olarak anılan 29 Ağustos 1541 günü bu maddelerde geçmez."],
         ["② `budin` maddesi", "② TDV'nin Budin maddesi"],
         ["okunan gövdelerde yok.", "kaynaklarda verilmez."]],
   **nt("eski ifadeler: «atlasın bağlı maddelerindeki 29 Ağustos 1541 günü okunan TDV gövdelerinde (`budin`, `suleyman-i`) geçmiyor — o günün kaynağı ayrıca sınanmalı» · «okunan gövdelerde yok»"))
EK("ekokuma_savas.js", "savas-prut-1711", "taraflar[0].kuvvet", "b", "bulunamadi", eski="toplam: bulunamadı · ", yeni="toplam bilinmiyor; ", **nt("eski: toplam: bulunamadı"))
EK("ekokuma_savas.js", "savas-prut-1711", "taraflar[1].kuvvet", "b", "bulunamadi", deger="bilinmiyor; Osmanlı karargâhına Rus ordusu hakkında abartılı haberler ulaşıyordu",
   **nt("eski kuvvet: bulunamadı — TDV sayı vermiyor; Osmanlı karargâhına Rus ordusu hakkında abartılı haberler geldiğini belirtiyor"))
EK("ekokuma_savas.js", "savas-cesme-1770", "taraflar[0].kuvvet", "b", "bulunamadi", eski="toplam: bulunamadı · ", yeni="toplam bilinmiyor; ", **nt("eski: toplam: bulunamadı"))
EK("ekokuma_savas.js", "savas-cesme-1770", "taraflar[1].kuvvet", "b", "bulunamadi", deger="bilinmiyor; filo İngiliz desteğiyle Akdeniz'e çıkmıştı",
   **nt("eski kuvvet: bulunamadı — TDV sayı vermiyor; filonun İngiliz desteğiyle Akdeniz'e çıktığını belirtiyor"))
EK("ekokuma_savas.js", "savas-cesme-1770", "tartisma", "a", "kart-madde-meta",
   cift=[["TDV iki filonun gemi ve asker mevcudunu vermiyor; bu kart sayı yazmadı.", "Kaynaklar iki filonun gemi ve asker mevcudunu vermez."],
         ["TDV `cesme-vakasi`", "TDV'nin Çeşme Vak'ası maddesi"], ["TDV `mustafa-iii`", "III. Mustafa maddesi"],
         ["; Hasan Paşa'nın kendi TDV maddesinin gövdesi çekilemediği için bu, ikinci bir kaynakla karşılaştırılamadı.", "."]],
   **nt("eski ifadeler: «bu kart sayı yazmadı» · «Hasan Paşa'nın kendi TDV maddesinin gövdesi çekilemediği için bu, ikinci bir kaynakla karşılaştırılamadı»"))
EK("ekokuma_savas.js", "savas-kanije-1601", "taraflar[1].kuvvet", "b", "bulunamadi", deger="bilinmiyor; kaynaklar yalnız 'kalabalık' der",
   **nt("eski kuvvet: bulunamadı — okunan kaynaklar yalnız 'kalabalık' diyor"))
EK("ekokuma_savas.js", "savas-plevne-1877", "tartisma", "a", "olculemedi,okunmadi",
   cift=[["① Takvim — DOĞRULANMALI:", "① Takvim:"],
         [" TDV'nin bütün günleri aynı takvimle verip vermediği bu kartta akademik bir kaynakla sınanmadı. Bağlı '1877-07-19' maddesinin günü okunan TDV gövdelerinde geçmiyor.", ""],
         ["TDV `gazi-osman-pasa` 13 Eylül diyor; `plevne-muharebeleri` gün vermiyor.", "TDV'nin Gazi Osman Paşa maddesi 13 Eylül der; Plevne Muharebeleri maddesi gün vermez."],
         ["TDV `plevne` Rus-Romen", "TDV'nin Plevne maddesi Rus-Romen"], ["; `plevne-muharebeleri` harekâtı", "; Plevne Muharebeleri maddesi harekâtı"]],
   **nt("eski ifadeler: «DOĞRULANMALI» · «TDV'nin bütün günleri aynı takvimle verip vermediği bu kartta akademik bir kaynakla sınanmadı. Bağlı '1877-07-19' maddesinin günü okunan TDV gövdelerinde geçmiyor.»"))
EK("ekokuma_statu.js", "statu-terim-eyalet-sancak-ocaklik", "not", "a", "koordinator,okunmadi",
   deger="'Ocaklık/yurtluk' statüsüne örnek olarak Anadolu'nun doğusundaki aşiret beylerine verilen sancaklar akla gelir; hangi sancakların hangi yıllarda bu statüde olduğunu kaynaklar toplu bir liste hâlinde vermez.",
   **nt("eski not: Emre'nin sorusundaki 'ocaklık/yurtluk' örneği için … ancak bu kartta hangi sancakların hangi yıllarda bu statüde olduğu listelenmedi — okunan TDV maddeleri toplu bir liste vermiyor."))
EK("ekokuma_statu.js", "statu-iki-tarihyazimi", "not", "a", "veri",
   eski=" Haritada bu dönemin nasıl renklendirileceği ayrı bir veri kararıdır ve bu kartın konusu değildir.", yeni="",
   **nt("çıkarılan: Haritada bu dönemin nasıl renklendirileceği ayrı bir veri kararıdır ve bu kartın konusu değildir."))
EK("ekokuma_tartisma.js", "ingiltere-kapitulasyon-1580-tartisma", "bag", "a", "dosya-adi", eski=" (`data/ekokuma_ekonomi.js`)", yeni="", **nt("çıkarılan: (`data/ekokuma_ekonomi.js`)"))
EK("ekokuma_tartisma.js", "tartisma-otranto-1480-idamlar", "metin", "a", "atlas",
   eski=" Atlasın kendi çıkarma maddesi de 800 rakamını anıyor; yani aynı olayın iki okuması bu kronolojinin içinde de yan yana duruyor.", yeni="",
   **nt("çıkarılan (ve PAKET-KRON2 1480-08-11 maddesini düzelttiğinden beri bayat): Atlasın kendi çıkarma maddesi de 800 rakamını anıyor; yani aynı olayın iki okuması bu kronolojinin içinde de yan yana duruyor."))
EK("ekokuma_tartisma.js", "tartisma-otranto-1480-idamlar", "not", "a", "isaret,okunmadi",
   deger="Tahliye (10 Eylül 1481) sırasında bir katliam anlatısı TDV'nin ilgili maddelerinde yer almaz: garnizon altı aylık kuşatmada yiyecek ve su bitince teslim oldu; İbn Kemal ve Angiolello'ya göre esirler sonradan Napoli ordusuna alındı. Kan dökülen an 1480'deki alınıştır. İdamların günü kaynaklarda verilmez.",
   **nt("eski not: 🔴 Tahliye (10 Eylül 1481) sırasında bir katliam anlatısı, okunan TDV maddelerinde (otranto-seferi · gedik-ahmed-pasa · bayezid-ii) YOK: … — kart bu yüzden iki maddeye de bağlandı. İdamların GÜNÜ okunan iki kaynakta verilmiyor (Vatikan metni yalnız '1480' diyor); günü uydurmamak için yazılmadı. Kilise anlatısının tarihî doğruluğunu inceleyen akademik bir çalışma bu kart için OKUNMADI."))
EK("ekokuma_tartisma.js", "dis-yankilar-otranto-1480", "not", "b", "okunmadi",
   eski=" Bu kart onları OKUMADI, yalnız TDV'nin aktardığına dayanıyor.", yeni=" Bu kart söz konusu çalışmaları TDV'nin aktarımı üzerinden kullanır.",
   **nt("eski: Bu kart onları OKUMADI, yalnız TDV'nin aktardığına dayanıyor."))
EK("merak.js", "canakkale-hisar-ve-zincir", "goruşler[2].dayanak", "b", "isaret,bulunamadi",
   eski="⚠️ Osmanlı'nın boğazlara zincir germeyi düşünüp düşünmediğine dair bir kayıt taranan TDV maddelerinde BULUNAMADI; bu görüş bir kayıt değil, zincirin ölçülmüş siciline dayanan bir çıkarımdır.",
   yeni="Osmanlı'nın boğazlara zincir germeyi düşünüp düşünmediğine dair bir kayıt bilinmiyor; bu görüş bir belgeye değil, zincirin geçmişteki sicilinden çıkan bir yoruma dayanır.",
   **nt("eski: ⚠️ … bir kayıt taranan TDV maddelerinde BULUNAMADI; bu görüş bir kayıt değil, zincirin ölçülmüş siciline dayanan bir çıkarımdır."))
EK("merak.js", "galata-nicin-alinmadi", "goruşler[2].dayanak", "b", "isaret,bulunamadi",
   eski="⚠️ Galata'nın teslim GÜNÜNE dair açık bir kayıt TDV Galata maddesinde BULUNAMADI.", yeni="Galata'nın teslim gününe dair açık bir kayıt bilinmiyor.",
   **nt("eski: ⚠️ Galata'nın teslim GÜNÜNE dair açık bir kayıt TDV Galata maddesinde BULUNAMADI."))

# KURAL — ekokuma/merak `kaynak` alanındaki süreç notları (gövde okundu · HTTP · 302 · ölü · Denenen · data/ · okundu)
KAYNAK_ELLE = {}
SUREC = re.compile(r"gövde okundu|HTTP \d|\(302\)|\bölü\s*:|ÖLÜ|Denenen|data/|okundu|çekilemedi|tuzak\s*:|: bulunamadı|OKUNMADI|ölçmedim|hizalandı", re.I)


def parantez_temizle(ic):
    parcalar = [p.strip() for p in re.split(r";\s*|,\s*(?=gövde|HTTP|müellif|slug|tek denemede|madde gövdesi|⑦|⑨|1590 hükmü|okundu)", ic)]
    tut = []
    for p in parcalar:
        p = re.sub(r"^(gövde okundu|HTTP \d+)(,\s*HTTP \d+)?\s*(—\s*)?", "", p).strip()
        p = re.sub(r"^HTTP \d+\s*—\s*", "", p).strip()
        if not p or re.match(r"^(gövde okundu|HTTP \d+|slug arama sayfasından bulundu|tek denemede canlı|ayrıntılı okunmadı|bağlanan maddenin kendi kaynağı|okundu\b|müstakil madde bulunamadı)", p):
            continue
        if re.search(r"gövdesi gelmedi|YANLIŞ MADDE|hükmü gövdede yok", p):
            return None   # bu segment okunmamış/yanlış bir adresi anıyor → segmentin tamamı düşer
        if re.search(r"302|ÖLÜ|⚠|doğru madde adı", p):
            continue      # ölü adres notu — yalnız bu parça düşer, okunan madde künyede kalır
        p = re.sub(r"^müellif\s+", "", p)
        tut.append(p)
    return tut


def kaynak_temizle(s):
    cumleler = re.split(r"(?<=\))\.\s+|(?<=[a-zçğıöşü\d])\.\s+(?=[A-ZÇĞİÖŞÜ⚠])", s)
    tut_c = []
    for c in cumleler:
        if re.match(r"^\s*(Denenen|Tarih: data/|⚠️|\d{4}/\d{4} rekonstrüksiyon|Saraydaki geç eklemelerin|Maliyet ve dış borç|Dâvud Ağa'nın başlangıç)", c):
            continue
        tut_c.append(c)
    s2 = ". ".join(tut_c)
    segler = []
    for seg in s2.split(" · "):
        seg = seg.strip()
        if re.match(r"^(ölü|tuzak)\s*:", seg) or re.search(r":\s*bulunamadı", seg) or seg.startswith("⚠️"):
            continue
        bozuk = False
        def rp(m):
            nonlocal bozuk
            t = parantez_temizle(m.group(1))
            if t is None:
                bozuk = True
                return ""
            return (" (" + "; ".join(t) + ")") if t else ""
        yeni = re.sub(r"\s*\(([^()]*)\)", rp, seg)
        if bozuk:
            continue
        segler.append(yeni.strip())
    out = " · ".join(x for x in segler if x)
    out = re.sub(r"\s+\.", ".", out).strip()
    return out


EK_DOSYA = ["ekokuma.js", "ekokuma_antlasma2.js", "ekokuma_celali.js", "ekokuma_dalga2.js", "ekokuma_edebiyat.js", "ekokuma_mimari.js",
            "ekokuma_savas.js", "ekokuma_sh104.js", "ekokuma_statu.js", "ekokuma_tartisma.js", "merak.js", "merak_sh104.js"]
for f in EK_DOSYA:
    for _, kok in kok_oku(f):
        if kok["tur"] != "arr":
            continue
        for o in kok["ogeler"]:
            if o["tur"] != "obj":
                continue
            kid, kay = dizge_alan(o, "id"), dizge_alan(o, "kaynak")
            if not kid or not kay or not SUREC.search(kay) or f == "ekokuma_ekonomi.js":
                continue
            yeni = KAYNAK_ELLE.get(kid) or kaynak_temizle(kay)
            if yeni != kay:
                E(f, {"id": kid}, "kaynak", "a", "http-slug,okunmadi", deger=yeni, **nt("eski kaynak: " + kay))

# ═══════════════════════════ PADİŞAH KARTVİZİTİ ═══════════════════════════
def P(pid, ad, yol, sinif, desen, **kw):
    E("padisahlar.js", {"id": pid, "ad": ad}, yol, sinif, desen, **kw)


P("osman1", "Osman Gazi (I. Osman)", "yergi", "b", "bulunamadi",
  cift=[["Bulunamadı — kaynak azlığı yüzünden", "Kaynak azlığı yüzünden"], ["; TDV maddesi de bir değerlendirme sunmuyor.", "."]], **nt("eski: «Bulunamadı — …» · «TDV maddesi de bir değerlendirme sunmuyor»"))
P("orhan", "Orhan Gazi", "dogum", "a", "kaynaksiz", eski=" (TDV'de müstakil madde yok, tarih akademik icmâ)", yeni="", **nt("çıkarılan: (TDV'de müstakil madde yok, tarih akademik icmâ)"))
P("orhan", "Orhan Gazi", "olum_sebep", "b", "bulunamadi", deger="kaynaklarda yaşlılıkla vefat dışında ayrıntı yok", **nt("eski: bulunamadı — kaynaklarda yaşlılıkla vefat dışında ayrıntı yok"))
P("orhan", "Orhan Gazi", "skandal", "a", "bulunamadi", deger="", **nt("eski skandal: bulunamadı — kaynaklar bu denli erken dönem için kişisel skandal değil kurumsal genişleme kaydediyor."))
P("orhan", "Orhan Gazi", "yergi", "b", "bulunamadi", deger="Dönem kaynaklarının azlığı yüzünden eleştirel bir değerlendirme aktarılmaz.",
  **nt("eski yergi: bulunamadı — TDV'nin türbe/câmi maddelerinde eleştirel bir değerlendirme yok, dönem kaynaklarının azlığı bunu zaten sınırlıyor."))
P("orhan", "Orhan Gazi", "tartisma", "a", "kaynaksiz", eski=" (TDV'de müstakil madde bulunmadığı için akademik icmâya dayanıyor)", yeni="",
  **nt("çıkarılan (ve bayat — `orhan` maddesi canlı): (TDV'de müstakil madde bulunmadığı için akademik icmâya dayanıyor)"))
P("murad1", "I. Murad (Hüdavendigâr)", "yergi", "b", "bulunamadi", eski="Bulunamadı — TDV maddesinde olumsuz bir değerlendirmeye rastlanmadı;", yeni="Kaynaklarda olumsuz bir değerlendirme aktarılmaz;",
  **nt("eski: Bulunamadı — TDV maddesinde olumsuz bir değerlendirmeye rastlanmadı;"))
P("bayezid1", "I. Bayezid (Yıldırım)", "tartisma", "b", "tdv-tartisma", eski=", ama halk arasında yaygın zehirlenme/intihar rivayeti maddede YOK — ikisi karıştırılmamalı.",
  yeni="; halk arasında yaygın zehirlenme ya da intihar rivayeti ise kaynaklarca desteklenmez.", **nt("eski: ama halk arasında yaygın zehirlenme/intihar rivayeti maddede YOK — ikisi karıştırılmamalı."))
P("mehmed1", "I. Mehmed (Çelebi)", "dogum", "b", "tdv-tartisma", eski=" — TDV iki rivayeti de veriyor", yeni=" (iki rivayet)", **nt("eski: — TDV iki rivayeti de veriyor"))
P("mehmed1", "I. Mehmed (Çelebi)", "dogum_yer", "a", "bulunamadi", deger="", **nt("eski dogum_yer: bulunamadı — TDV maddesi doğum yeri belirtmiyor"))
P("mehmed1", "I. Mehmed (Çelebi)", "yergi", "b", "tdv-tartisma", eski=" — TDV bunu doğrudan kaydeder.", yeni=".", **nt("çıkarılan: — TDV bunu doğrudan kaydeder."))
for pid, ad in (("mehmed2", "II. Mehmed (1. saltanatı)"), ("mehmed2", "II. Mehmed (Fatih)")):
    P(pid, ad, "olum_sebep", "b", "dogrulanamadi", eski="; zehirlenme iddiası TDV'de doğrulanmadı)", yeni="; zehirlenme iddiası belgeyle desteklenmez)",
      **nt("eski: zehirlenme iddiası TDV'de doğrulanmadı"))
P("mehmed2", "II. Mehmed (1. saltanatı)", "lakap[0]", "b", "bulunamadi", deger="henüz yok ('Fâtih' lakabını 1453 fethinden sonra kazandı)",
  **nt("eski lakap: bulunamadı — 'Fâtih' lakabını 1453 fetihten SONRA kazandı, bu dönemde henüz kullanılmıyordu"))
P("selim1", "I. Selim (Yavuz)", "dogum", "b", "tdv-tartisma", deger="1470 dolayı (rivayetler 1467-68 ya da 1470 der)", **nt("eski dogum: 1470 (dolayı — TDV iki rivayet verir: 1467-68 ya da 1470)"))
P("selim1", "I. Selim (Yavuz)", "tartisma", "b", "tdv-tartisma", eski="da TDV'de güvenilir belgeye dayanmıyor", yeni="da güvenilir bir belgeye dayanmaz",
  **nt("eski: TDV'de güvenilir belgeye dayanmıyor"))
P("selim2", "II. Selim", "lakap[0]", "b", "bulunamadi", deger="resmî lakabı yok (popüler 'Sarı Selim' ve 'Sarhoş Selim' adlandırmaları resmî lakap değildir)",
  **nt("eski lakap: bulunamadı — popüler 'Sarı Selim' (saç rengi) ve 'Sarhoş Selim' adlandırmaları TDV maddesinde resmî bir lakap olarak geçmiyor (bkz. tartışma)"))
for pid, ad in (("mustafa1", "I. Mustafa (1. saltanatı)"), ("mustafa1", "I. Mustafa (2. saltanatı)")):
    P(pid, ad, "olum_sebep", "b", "tdv-tartisma", eski="ama TDV bunu doğrulamaz, yalnız aktarır.", yeni="ancak bu rivayet belgeyle desteklenmez.",
      **nt("eski: ama TDV bunu doğrulamaz, yalnız aktarır."))
    P(pid, ad, "lakap[0]", "b", "bulunamadi",
      deger="resmî lakabı yok (halk ve tekke çevreleri onu 'pâdişâh-ı velî' diye anıyordu; bu, aklî durumuna yüklenen dinî-mânevî bir yakıştırmaydı)",
      **nt("eski lakap: bulunamadı — …"))
P("mustafa1", "I. Mustafa (1. saltanatı)", "esler[0]", "b", "bulunamadi", deger="adları bilinmiyor; bazı Batı kaynaklarına göre kadınlara hiç yaklaşmadı",
  **nt("eski esler: bulunamadı — TDV'de eş adı geçmiyor; bazı Batı kaynaklarına göre kadınları yatağına hiç yaklaştırmadı."))
P("ibrahim", "Sultan İbrahim", "lakap[0]", "b", "bulunamadi", deger="resmî lakabı yok (popüler 'Deli İbrahim' adlandırması kişisel yazışmalarıyla örtüşmediği için sorgulanır)",
  **nt("eski lakap: bulunamadı — popüler 'Deli İbrahim' adlandırması TDV maddesinde resmî bir lakap olarak geçmiyor, tam tersine TDV bu nitelemeyi kişisel yazışmalarıyla örtüşmediği için sorguluyor (bkz. tartışma)"))
P("murad4", "IV. Murad", "skandal", "b", "tdv-tartisma", eski=" — TDV bu çelişkiyi doğrudan kaydeder.", yeni=".", **nt("çıkarılan: — TDV bu çelişkiyi doğrudan kaydeder."))
P("murad4", "IV. Murad", "tartisma", "b", "tdv-tartisma", eski=" — TDV ikisini de kaydeder, taraf tutmaz.", yeni=".", **nt("çıkarılan: — TDV ikisini de kaydeder, taraf tutmaz."))
P("suleyman2", "II. Süleyman", "esler[0]", "b", "tdv-tartisma", eski=", TDV isim vermiyor", yeni="; adları bilinmiyor", **nt("eski: TDV isim vermiyor"))
P("ahmed2", "II. Ahmed", "dogum_yer", "a", "bulunamadi", deger="", **nt("eski dogum_yer: bulunamadı — TDV maddesi doğum yeri belirtmiyor"))
P("mustafa2", "II. Mustafa", "olum", "b", "tdv-tartisma", eski=" (muhtemelen — TDV kesin tarihte 'muhtemelen' der)", yeni=" (muhtemelen)", **nt("eski: (muhtemelen — TDV kesin tarihte 'muhtemelen' der)"))
P("ahmed3", "III. Ahmed", "lakap[0]", "b", "bulunamadi", deger="resmî lakabı yok (dönemi 'Lâle Devri' diye anılır; bu kişisel bir lakap değil, dönem adıdır)", **nt("eski lakap: bulunamadı — …"))
P("osman3", "III. Osman", "lakap[0]", "b", "bulunamadi", deger="resmî lakabı yok (hutbelerde yalnız 'sultânü'l-berreyn ve'l-bahreyn' unvanı okundu)", **nt("eski lakap: bulunamadı — …"))
P("selim3", "III. Selim", "tartisma", "b", "isaret",
  cift=[["⚠️ SIK KARIŞTIRILAN İKİ TARİH:", "Sık karıştırılan iki tarih:"], ["ÖLDÜRÜLMESİ", "öldürülmesi"], ["İKİ AYRI OLAYDIR", "iki ayrı olaydır"]], **nt("eski: ⚠️ ve büyük harfli vurgular"))
P("mahmud2", "II. Mahmud", "olum_sebep", "b", "bulunamadi", deger="kaynaklarda belirtilmez (yaygın anlatıya göre verem)", **nt("eski: bulunamadı — TDV özeti sebep belirtmiyor (yaygın anlatı verem der, doğrulanmamış)"))
P("mahmud2", "II. Mahmud", "lakap[0]", "b", "bulunamadi", deger="resmî lakabı yok (muhalif çevrelerce reformları yüzünden 'Gâvur Padişah' diye anıldığı rivayet edilir)", **nt("eski lakap: bulunamadı — …"))
P("abdulhamid2", "II. Abdülhamid", "olum_sebep", "a", "bulunamadi", deger="", **nt("eski: bulunamadı — TDV maddesi sebep belirtmiyor"))
P("mehmed5", "V. Mehmed (Reşad)", "skandal", "a", "bulunamadi", deger="", **nt("eski skandal: bulunamadı — meşrutiyet sisteminde yürütme yetkisi büyük ölçüde İttihat ve Terakki'deydi, kendisi kişisel iktidar iddiasında bulunmadı."))
P("mehmed5", "V. Mehmed (Reşad)", "lakap[0]", "b", "bulunamadi", deger="resmî lakabı yok ('Reşad' doğum adının parçasıdır; 'Sultan Reşad' diye anılır)", **nt("eski lakap: bulunamadı — …"))
P("mehmed6", "VI. Mehmed (Vahideddin)", "lakap[0]", "b", "bulunamadi", deger="resmî lakabı yok ('Vahideddin' doğum adının parçasıdır; 'Sultan Vahdeddin' diye anılır)", **nt("eski lakap: bulunamadı — …"))
# KURAL — yalnız "bulunamadı…" taşıyan lakap/esler dizileri: kartvizitte "Lakap: bulunamadı — TDV…" satırı yerine satır HİÇ çizilmez
for _, kok in kok_oku("padisahlar.js"):
    for o in kok["ogeler"]:
        pid, ad = dizge_alan(o, "id"), dizge_alan(o, "ad")
        for dizi in ("lakap", "esler"):
            a = U.alan(o, dizi)
            if not a or a[3]["tur"] != "arr" or len(a[3]["ogeler"]) != 1 or a[3]["ogeler"][0]["tur"] != "str":
                continue
            v = a[3]["ogeler"][0]["deger"]
            elle = any(r["dosya"] == "padisahlar.js" and r["kayit"] == {"id": pid, "ad": ad} and r["yol"] == dizi + "[0]" for r in K)
            if v.lower().startswith("bulunamad") and not elle:
                E("padisahlar.js", {"id": pid, "ad": ad}, dizi, "a", "bulunamadi", bosalt=True, **nt("eski %s: %s" % (dizi, v)))

# ═══════════════════════════ KİŞİLER ═══════════════════════════
E("kisiler.js", {"id": "ivazzade-halil-pasa"}, "tartisma", "a", "atlas,koordinator",
  eski="; atlasın kronolojisi aynı olayı 1 Ağustos 1770'te 'Kartal (Kagul) Ovası Bozgunu' adıyla tutuyor. Ad ve gün farkı koordinatöre bildirildi — kronoloji dosyası bu kaydı yazan oturumun yetkisinde değil.", yeni=".",
  **nt("çıkarılan: atlasın kronolojisi aynı olayı 1 Ağustos 1770'te 'Kartal (Kagul) Ovası Bozgunu' adıyla tutuyor. Ad ve gün farkı koordinatöre bildirildi — kronoloji dosyası bu kaydı yazan oturumun yetkisinde değil."))
E("kisiler.js", {"id": "cerkes-hasan-bey"}, "not", "a", "dogrulanamadi,koordinator,dosya-adi",
  eski=" (TDV'de müstakil maddesi yok, huseyin-avni-pasa maddesindeki geçişten; doğum yılı ve idam günü doğrulanamadı — bkz. OTURUM-5-ILERLEME.md)", yeni="",
  **nt("çıkarılan: (TDV'de müstakil maddesi yok, huseyin-avni-pasa maddesindeki geçişten; doğum yılı ve idam günü doğrulanamadı — bkz. OTURUM-5-ILERLEME.md)"))
E("kisiler.js", {"id": "yedisekiz-hasan-pasa"}, "not", "a", "dogrulanamadi,koordinator,dosya-adi",
  eski=" (TDV'nin ciragan-vakasi maddesinde olay anındaki rütbesiyle \"Hasan Ağa\" olarak geçiyor, müstakil maddesi yok; doğum-ölüm yılları TDV'de doğrulanamadı — bkz. OTURUM-5-ILERLEME.md)",
  yeni=" (olay anındaki rütbesiyle \"Hasan Ağa\" olarak da anılır)",
  **nt("eski: (TDV'nin ciragan-vakasi maddesinde … müstakil maddesi yok; doğum-ölüm yılları TDV'de doğrulanamadı — bkz. OTURUM-5-ILERLEME.md)"))

# ═══════════════════════════ GÖRSEL ALTYAZISI ═══════════════════════════
G = [
    ("1566-09-07-sokullu-mehmed-pasa-portresi", "sanatci", "Nakkaş Osman'a atfedilir (kesin değil)"),
    ("1538-09-27-barbaros-hayreddin-pasa-portresi", "sanatci", "Anonim (Floransa Okulu'na atfen)"),
    ("1676-11-05-merzifonlu-kara-mustafa-pasa-portresi", "sanatci", "Ressamı bilinmiyor"),
    ("1683-09-12-ikinci-viyana-kusatmasi", "sanatci", "Gravürcüsü bilinmiyor"),
    ("1451-02-18-mehmed2-albumu", "gorseller[2].sanatci", "Bilinmeyen nişancı"),
    ("1512-04-24-selim1-albumu", "gorseller[0].eser", ""), ("1512-04-24-selim1-albumu", "gorseller[0].yil", ""),
    ("1512-04-24-selim1-albumu", "gorseller[1].sanatci", ""), ("1512-04-24-selim1-albumu", "gorseller[2].sanatci", ""),
    ("1512-04-24-selim1-albumu", "gorseller[4].yil", ""),
    ("1520-09-30-suleyman1-albumu", "gorseller[0].eser", ""), ("1520-09-30-suleyman1-albumu", "gorseller[1].sanatci", ""),
    ("1520-09-30-suleyman1-albumu", "gorseller[2].sanatci", ""), ("1520-09-30-suleyman1-albumu", "gorseller[3].sanatci", ""),
    ("1623-09-10-murad4-albumu", "gorseller[0].sanatci", ""), ("1623-09-10-murad4-albumu", "gorseller[1].eser", ""),
    ("1623-09-10-murad4-albumu", "gorseller[1].sanatci", "Osmanlı minyatür ressamı (adı bilinmiyor)"),
    ("1876-08-31-abdulhamid2-albumu", "gorseller[0].eser", ""), ("1876-08-31-abdulhamid2-albumu", "gorseller[0].sanatci", ""),
    ("1876-08-31-abdulhamid2-albumu", "gorseller[1].eser", ""), ("1876-08-31-abdulhamid2-albumu", "gorseller[2].sanatci", ""),
    ("1550-06-01-suleymaniye-camii", "sanatci", ""),
    ("1566-01-01-mostar-koprusu-1900", "sanatci", "Photoglob / Detroit Publishing baskısı"),
    ("1566-09-30-baki-divani-yazmasi-met", "sanatci", ""),
    ("1526-01-01-kitab-i-bahriye-kibris", "sanatci", "Pîrî Reis (eserin yazarı)"),
    ("1478-01-01-topkapi-babihumayun-photochrom", "sanatci", ""),
    ("1522-12-21-rodos-kusatmasi-suleymanname", "sanatci", "Atıf tartışmalı: Nakkaş Osman ya da Ârifî, Matrakçı Nasuh ve saray nakkaşları"),
    ("1526-08-29-mohac-bamberg-1526", "sanatci", "Anonim"),
]
gm = {}
for _, kok in kok_oku("gorsel_madde.js"):
    for o in kok["ogeler"]:
        if o["tur"] == "obj" and dizge_alan(o, "id"):
            gm[dizge_alan(o, "id")] = o
for gid, yol, yeni in G:
    o = gm[gid]
    node = o
    for p in U.yol_coz(yol):
        node = node["ogeler"][p] if isinstance(p, int) else U.alan(node, p)[3]
    E("gorsel_madde.js", {"id": gid}, yol, "a" if yeni == "" else "b", "bulunamadi", deger=yeni, **nt("eski %s: %s" % (yol.split(".")[-1], node["deger"])))

cikti = {"uretim": "denetim/ARAC-TEMIZ-HAZIRLA-0914.py", "kayitlar": K}
io.open(os.path.join(KOK, "denetim", "TEMIZ-DUZENLE-0914.json"), "w", encoding="utf-8").write(json.dumps(cikti, ensure_ascii=False, indent=1))
from collections import Counter
print("kayıt", len(K), dict(Counter(r["dosya"] for r in K)), dict(Counter(r["sinif"] for r in K)))
