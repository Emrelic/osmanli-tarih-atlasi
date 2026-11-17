import json, os

BP = "Banglapedia: National Encyclopedia of Bangladesh (Asiatic Society of Bangladesh, 2. baskı 2012), https://en.banglapedia.org/index.php/"
OKU = "tarayıcı dışı sayfa okuması, 17 Kasım 2026, tam sayfa metni okundu ve tanık includes() ile doğrulandı"


def k(id_, ad, atlas_ad, lat, lon, adlar, ilk, olay, ic_not):
    return dict(id=id_, ad=ad, atlas_ad=atlas_ad, lat=lat, lon=lon, kat1900=3, adlar=adlar, ilk=ilk,
                kur=None, ark=None, bit=None, sahip=[], olay=olay, ic_not=ic_not)


def ilkd(t, gun, nic, kes, kaynak, tanik):
    return dict(t=t, gun=gun, nicelik=nic, kesinlik=kes, kaynak=kaynak, tanik=tanik)


def olay(t, gun, kk, b, kes, kaynak):
    return dict(t=t, gun=gun, k=kk, b=b, kesinlik=kes, kaynak=kaynak)


K = []

# ---- Sonargaon
ks = BP + "Sonargaon (yazar: Muazzam Hussain Khan; kaynakça: M. H. Khan, Thousand Years of Sonargaon, Dhaka 2009), " + OKU
K.append(k("sonargaon-in-p8b", "Sonargaon", "Sonârgâon", 23.646, 90.599, ["Sonargaon", "Svarnagrama", "Suvarnagrama"],
  ilkd("1270-01-01", "1270 (probably)", "ilk_anilis", "yil", ks, "who came to Sonargaon probably in 1270 AD"),
  [olay("1338-01-01", "1338", "diger", "Sonargaon, Fahreddin Mübârek Şah'ın kurduğu Bengal'in ilk bağımsız sultanlığının başkenti oldu", "yil", ks),
   olay("1352-01-01", "1352", "fetih", "Fahreddin hanedanı Şemseddin İlyas Şah'ın eline düştü; Sonargaon bu tarihten sonra taşra metropolü oldu", "yil", ks),
   olay("1611-01-01", "1611", "fetih", "Musa Han'ın Babürlülerce yenilmesiyle Sonargaon siyasî önemini yitirdi; Bengal subesinin bir sarkarının merkezi olarak kaldı", "yil", ks)],
  "TEK KAYNAK (Banglapedia; imzalı madde, akademik ansiklopedi; DSAL Imperial Gazetteer 1296 cümlesinin OCR'sız karşılığı bulunamadı, o yüzden 1296 yazılmadı). ilk.t=1270: Banglapedia 'Maulana Şerefeddin Ebû Tevvâme Buhârî Sonargaon'a muhtemelen (probably) 1270'te geldi, hankâh ve medrese kurdu' der; 'probably' belirsizliği ic_not'ta beyan edilir, kesinlik yıl. Bu, şehrin o yıl VAR olduğu ve Müslüman ilim merkezi taşıdığı tanığıdır (kuruluş değil). Aynı maddede Sonargaon'un Vanga krallığı başkenti oluşu 'presumably 1260'lar' (varsayım, yıl yok) ve 'Hindu yönetiminin sonu (1302)' verilir; yazılmadı. Madde ayrıca ilk Müslüman valiyi Bahâdur Şah'ın bağımsızlığı (tarihsiz) ve 1338 öncesi 'bir on yıl' Tuğluk doğu eyaleti merkezi der; tarihsiz oldukları için yazılmadı. Çift teyit YOK. Aynı şehir için parti 4'te Majumdar VI'dan 1328 (728 H.) kaydı vardır (sonargaon-in-p4/A.json); bu kayıt çelişmez, daha geç bir anılıştır; birleştirmede en erken ilk=1270 alınır (probably beyanıyla), 1328 olaydır. 1338: 'The most glorious period of Sonargaon began in 1338 AD' cümlesi; 1352: 'fall of the house of Fakhruddin in the hands of shamsuddin iliyas shah in 1352 AD' (Sonargaon adı önceki cümlelerde); 1611: 'After the fall of musa khan (1611) in the hands of the Mughals, Sonargaon lost its political pre-eminence'. sahip[] yazılmadı (devlet kimlikleri için ayrı doğrulama gerekir)."))

# ---- Hugli
kh = BP + "Hughli,_City (yazar: Md Akhtaruzzaman; kaynakça: J. J. A. Campos, History of the Portuguese in Bengal, Calcutta 1919; J. N. Sarkar (ed.), History of Bengal II, Dhaka 1976), " + OKU
K.append(k("hugli-in-p8b", "Hooghly", "Hûglî (Hooghly)", 22.897, 88.39, ["Hugli", "Hooghly", "Hughli"],
  ilkd("1579-01-01", "1579", "kurulus", "yil", kh, "official establishment of a Portuguese colony at Hughli (in 1579 AD)"),
  [olay("1632-09-15", "1632-09-15", "fetih", "Kâsım Han Cüveynî Hugli'yi 20 Haziran 1632'de kuşattı, 15 Eylül'de Portekizlilerden aldı", "gun", kh),
   olay("1651-01-01", "1651", "diger", "İngiliz Doğu Hindistan Şirketi Hugli'de fabrika kurdu", "yil", kh),
   olay("1757-01-10", "1757-01-10", "fetih", "Hugli şehri İngilizlerce basıldı, yağmalandı ve yakıldı", "gun", kh)],
  "TEK KAYNAK (Banglapedia; imzalı madde, kaynakça Campos 1919 ve Sarkar). ÇELİŞKİ: Imperial Gazetteer (DSAL, OCR) c.13 s.173/176 Hooghly'nin 1537'de Portekizlilerce kurulduğunu yazar; DSAL c.8 s.39 OCR'ı '1637' okur (rakam bozulması). Banglapedia ise 1565 öncesi Hugli'de (Bhagirathi kıyısı) Portekiz yerleşimi bulunmadığını, Mayıs 1578'de Pedro Tavares'in Ekber'den şehir kurma izni aldığını ve resmî kuruluşun 1579 olduğunu yazar. İki tarihin neden ayrıştığı (örn. 1537 = Satgaon çevresindeki erken Portekiz varlığı) bu oturumda kaynakla doğrulanmadı. Hakemli karar için üçüncü bir bağımsız akademik kaynak okunamadı (Britannica 1911 'Hugli' sayfası Wikisource'ta yok, studylight Cloudflare engelli); bu yüzden 1579 (resmî kuruluş, Banglapedia) yazıldı, 1537 çelişkisi burada beyan edilir ve ikinci bir kaynakla kesinleştirilmelidir. Kesinlik yıl; 1579 içinde ay/gün yok. Olaylar aynı maddedeki 'Qasim Khan laid siege on Hughli on 20 June 1632 and captured it on 15 September' (yıl 1632 aynı cümlede), 'English east india company established their factory at Hughli in 1651', 'port city of Hughli was stormed, sacked, plundered and burnt by the English on 10 January 1757' cümleleridir. sahip[] yazılmadı."))

# ---- Jalandhar
kj = ("The Sikh Encyclopedia (thesikhencyclopedia.com), 'Hoshiarpur' ilçe maddesi (https://thesikhencyclopedia.com/hoshiarpur): ilçe gazetteer anlatısının İngilizce metni; "
      "ayrıca Imperial Gazetteer of India (1908-09) c.13 s.194 'Hoshiarpur District' (DSAL OCR 'io88'), 17 Kasım 2026 okundu")
K.append(k("calandhar-in-p8b", "Jalandhar", "Câlandhar (Jalandhar)", 31.326, 75.576, ["Jalandhara", "Jullundur", "Jalandhar"],
  ilkd("1088-01-01", "1088", "ilk_anilis", "yil", kj, "on the fall of Jalandhar in 1088 AD"),
  [olay("1088-01-01", "1088", "fetih", "Jalandhar'ın düşüşü; ova muhtemelen (probably) Müslüman hâkimiyetine girdi, tepeler Hindu reislerde kaldı", "yil", kj)],
  "TEK KÖKEN: Imperial Gazetteer c.13 s.194 OCR'ı 'io88' idi; OCR olmayan metin (Sikh Encyclopedia Hoshiarpur maddesi, ilçe gazetteer'ine dayanır) 'plain probably came under the Muhammadan rule on the fall of Jalandhar in 1088 AD' yazar: rakam 1088 olarak OCR'sız doğrulandı (rakam bozulması sorunu çözüldü) ama BAĞIMSIZ ikinci kaynak DEĞİL (aynı gazetteer anlatısı; şair Lalman'a atfeder: İbrahim (Gazneli) 1059-1099). Yazı bir akademik hakemli kaynak değildir; 'probably' beyanı korundu; Gazneli İbrahim'in Jalandhar'ı 1088'de alması bağımsız akademik kaynakla (Majumdar VI / Bosworth, The Later Ghaznavids) teyit edilmeden kesin sayılmamalı. Cavac benzeri sayfalardaki '1070 civarı' iddiası güvenilmez site, kullanılmadı. Aynı sitenin Jalandhar maddesindeki 1297 (Dua'nın Jalandhar yakınında yenilgisi) yazılmadı: yazarı/dayanağı belirsiz. sahip[] yazılmadı (1088 ile atlas başlangıcı arasında kaynaklı zincir yok; atlas ilk günü ayrıca denetlenmeli)."))

# ---- Ludhiana
kl = ("Encyclopaedia Britannica, 11. baskı (1911), cilt 17, s.112, 'Ludhiana' maddesi (Wikisource temiz transkripsiyonu: "
      "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Ludhiana); kaynakça: Ludhiana District Gazetteer (Lahore 1907); " + OKU)
K.append(k("ludhiyana-in-p8b", "Ludhiana", "Ludhiyana", 30.901, 75.857, ["Lodiana", "Ludhiana"],
  ilkd("1480-01-01", "1480", "kurulus", "yil", kl, "The town of Ludhiana was founded in 1480 by two of the Lodi race"),
  [],
  "TEK KAYNAK (Britannica 1911, Ludhiana District Gazetteer 1907'ye dayanır). Önceki parti: Imperial Gazetteer OCR'ı 'founded in \"481' (ilk hane kayıp) idi ve 1481 olarak tahmin edilmişti; OCR'sız temiz metin 1480 verir, 1480 yazıldı (1481 tahmini düşer). Aynı maddede 'Sayyid dynasty about 1445' ilçenin Raikot Raisleri'ne fief verilişi (şehir olgusu değil, 'about'), yazılmadı. İki Lodi kurucunun adı bu metinde yok. Çift teyit YOK (Gazetteer ve Britannica aynı anlatı çizgisi); Majumdar VI Yusuf/Nihang Han ~1480 anısı bu oturumda okunmadı. Atlas Ludhiyana'yı 1526 sonrası başlatıyorsa ilk.t (1480) onun öncesidir: atlas başlangıcı Lodi (Delhi Sultanlığı) künyesiyle ayrıca denetlenmeli. sahip[] yazılmadı."))

for x in K:
    if x["id"] == "calandhar-in-p8b":
        x["sahip"] = [dict(f="1088-01-01", t="1281-01-01", d="__BOSLUK__", kesinlik="yil", kaynak="bulunamadı",
                           ic_not="1088 (Jalandhar'ın düşüşü) ile atlas başlangıcı (1281-01-01, delhi-sultanligi) arasındaki sahip zinciri bu oturumda kaynakla bağlanamadı (Gazneli/Gurlu/Delhi dönemi Jalandhar'a özgü tarihli sahip cümlesi yok); beyanlı boşluk.")]
        x["dikis_beyan"] = x["sahip"][0]["ic_not"]

yol = os.path.join(os.path.dirname(os.path.abspath(__file__)), "B.json")
with open(yol, "w", encoding="utf-8") as f:
    json.dump(K, f, ensure_ascii=False, indent=1)
print(len(K), "->", yol)
