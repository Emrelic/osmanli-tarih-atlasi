import json
BR = "Encyclopaedia Britannica (çevrimiçi), '%s', britannica.com/place/%s (tarayıcıda okundu)"
BRN = " Britannica gövdesinden (YZ özeti bloğu dışı; sayfada YZ bloğu yok, alıntı makale gövdesinde includes() ile doğrulandı)."
BOS = "__BOSLUK__"
def kayit(id_, ad, atlas_ad, lat, lon, adlar, yil, gun, kaynak, tanik, ilknot, sahip, olay, ic):
    return {"id": id_, "ad": ad, "atlas_ad": None, "lat": lat, "lon": lon, "kat1900": 2, "adlar": adlar,
            "ilk": {"t": yil + "-01-01" if len(yil) == 4 else yil, "gun": gun, "nicelik": "kurulus", "kesinlik": "yil",
                    "kaynak": kaynak, "tanik": tanik, "ic_not": ilknot},
            "kur": None, "ark": None, "bit": None, "sahip": sahip, "olay": olay,
            "ic_not": ic}
def bosluk(y, kaynak, neden):
    return [{"f": y + "-01-01", "t": "1900-01-01", "d": BOS, "kesinlik": "yil", "kaynak": kaynak,
             "ic_not": "BOŞLUK (şehir var, sahibi kaynakta bulunamadı): " + neden}]
N = "TEK KAYNAK: "
R = []
k = BR % ("Pietermaritzburg", "Pietermaritzburg")
R.append(kayit("pietermaritzburg-za-p3", "Pietermaritzburg", None, -29.6168, 30.3928, ["Pietermaritzburg"], "1838", "1838", k,
  "Boers from the Cape Colony founded it in 1838 after a victory over the Zulus",
  "Özne 'Boers'; 'it' nesne zamiri = madde konusu (başlık şehir); şehir adı cümlede yok, beyan edildi." + BRN,
  [{"f": "1838-01-01", "t": "1843-01-01", "d": BOS, "kesinlik": "yil", "kaynak": k,
    "ic_not": "BOŞLUK: Britannica kuruluşu Boer göçmenlere bağlar; devletler.js'te Natalia Boer Cumhuriyeti künyesi yok, sahip bu kaynakta devlet olarak adlandırılmadı."},
   {"f": "1843-01-01", "t": "1900-01-01", "d": "ingiltere", "kesinlik": "yil", "kaynak": k,
    "ic_not": "Britannica: 'The British took control in 1843'; gün yok, yıl. Bu tarihten 1900'e Britannica el değişimi vermiyor; ingiltere (Natal Kolonisi) olarak sürer."}],
  [{"t": "1843-01-01", "gun": "1843", "k": "diger", "b": "İngilizler şehrin denetimini alır (Fort Napier)", "kaynak": k}],
  N + "tek ansiklopedi cümlesi (Britannica Editors). Atlas noktası yok (atlas_en_yakin boş)."))
k = BR % ("Potchefstroom", "Potchefstroom")
R.append(kayit("potchefstroom-za-p3", "Potchefstroom", None, -26.7167, 27.1, ["Potchefstroom"], "1838", "1838", k,
  "It was founded in 1838 as the first capital of the Transvaal",
  "Özne zamir 'It' = madde konusu; başlık şehir." + BRN,
  bosluk("1838", k, "Britannica 'first capital of the Transvaal' der ama 1838'de Transvaal devleti (devletler.js transvaal) henüz yoktu; 1838-1900 arası tarihli sahip tanığı yok."),
  [], N + "tek ansiklopedi cümlesi. Atlas noktası yok."))
k = BR % ("Quelimane", "Quelimane")
R.append(kayit("quelimane-mz-p3", "Quelimane", None, -17.8786, 36.8883, ["Quelimane"], "1544", "1544", k,
  "it was founded by the Portuguese as a trading station in 1544",
  "Özne zamir 'it' = madde konusu (cümle 'One of the oldest settlements in the area, it was founded...')." + BRN,
  [{"f": "1544-01-01", "t": "1900-01-01", "d": "portekiz", "kesinlik": "yil", "kaynak": k,
    "ic_not": "Britannica kuruluşu Portekizlilere bağlar ('founded by the Portuguese'; 1761'de 'Portuguese colonial town'); portekiz id'si 1544-1900 boyunca sürer; kesintisiz el değişimi tanığı bulunmadı."}],
  [], N + "tek ansiklopedi cümlesi. Atlas noktası yok."))
k = BR % ("Saint-Louis", "Saint-Louis-Senegal")
R.append(kayit("saint-louis-sn-p3", "Saint-Louis", None, 16.0179, -16.4896, ["Saint-Louis"], "1659", "1659", k,
  "Saint-Louis, founded in 1659, is the oldest colonial city on the western African coast",
  "Şehir adı ve yıl aynı cümlede." + BRN,
  bosluk("1659", k, "Britannica kurucu devleti bu cümlede adlandırmaz; 1659-1900 arası tarihli sahip tanığı alınmadı."),
  [], N + "tek ansiklopedi cümlesi. Atlas noktası yok."))
k = BR % ("Polokwane", "Polokwane")
R.append(kayit("polokwane-za-p3", "Polokwane", None, -23.9045, 29.4688, ["Pietersburg", "Polokwane"], "1886", "1886", k,
  "in 1886 on land purchased in 1884 from a local farmer and named Pietersburg",
  "Cümlenin öznesi zamir 'It' (It was founded by Voortrekkers ... in 1886) = madde konusu; başlık şehir. Alıntı cümlenin devamıdır, 'Pietersburg' ad olarak cümlede." + BRN,
  bosluk("1886", k, "Britannica kurucuyu Voortrekkers olarak verir, devlet vermez; 1886-1900 arası tarihli sahip tanığı alınmadı."),
  [], N + "tek ansiklopedi cümlesi; 1884 arazi satın alma kuruluş değil. Atlas noktası yok."))
k = BR % ("Qonce", "Qonce")
R.append(kayit("qonce-za-p3", "Qonce", None, -32.8808, 27.3938, ["King William's Town", "Qonce"], "1826", "1826", k,
  "Founded as a missionary station in 1826",
  "Cümle başı 'Founded ...' öznesi madde konusu (başlık şehir) ve 'it' ile sürer." + BRN,
  bosluk("1826", k, "Britannica 1835 sonrası British Kaffraria askerî merkezi der (devletler.js'te ayrı künye yok); 1826-1900 arası kesintisiz sahip tanığı alınmadı."),
  [], N + "tek ansiklopedi cümlesi. Atlas noktası yok."))
k = BR % ("Rustenburg", "Rustenburg")
R.append(kayit("rustenburg-za-p3", "Rustenburg", None, -25.6676, 27.2421, ["Rustenburg"], "1850", "1850", k,
  "Founded in 1850, its name was allegedly derived from the rust",
  "Özne madde konusu şehir ('its name')." + BRN,
  bosluk("1850", k, "Britannica devlet vermez; 1850-1900 arası tarihli sahip tanığı alınmadı."),
  [], N + "tek ansiklopedi cümlesi. Atlas noktası yok."))
k = "South African History Online, 'Robertson, Route 62', sahistory.org.za/place/robertson-route-62 (tarayıcıda okundu)"
R.append(kayit("robertson-za-p3", "Robertson", None, -33.8034, 19.8854, ["Robertson"], "1853", "1853", k,
  "the first Plots, went on sale on 4 May 1853",
  "Özne zamir 'It' = madde konusu (başlık şehir). Aynı sayfa: 1853'teki plot satışı ve DRC temel taşı 'the birth date of the Town' sayılır; gün (4 Mayıs) yalnız plot satışı, kuruluş günü değil, bu yüzden YYYY-01-01 + yıl.",
  bosluk("1853", k, "SAHO devlet/kolonî sahibini bu sayfada belirtmez; 1853-1900 sahip tanığı alınmadı."),
  [], N + "SAHO tek sayfa; ek kaynak bulunamadı. Atlas noktası yok."))
k = "South African History Online, 'Piketberg', sahistory.org.za/place/piketberg (tarayıcıda okundu)"
R.append(kayit("piketberg-za-p3", "Piketberg", None, -32.9032, 18.757, ["Piquetberg", "Piketberg"], "1836", "1836", k,
  "Piketberg is an Historic town, established in 1836",
  "Şehir adı ve yıl aynı cümlede.",
  bosluk("1836", k, "SAHO sahibi belirtmez; 1836-1900 sahip tanığı alınmadı."),
  [], N + "Aynı sayfa 1833 DRC cemaati, 1841 ilk plot satışı verir; kuruluş cümlesi 1836 alındı (çelişki iç tutarsızlık, hakem kaynak yok)."))
k = "South African History Online, 'Prince Albert', sahistory.org.za/place/prince-albert (tarayıcıda okundu)"
R.append(kayit("prince-albert-za-p3", "Prince Albert", None, -33.2248, 22.0267, ["Albertsburg", "Prince Albert"], "1845", "1845", k,
  "in 1845, the tiny village was proclaimed Prince Albert",
  "Şehir adı ve yıl aynı cümlede; 1845 köy ilanı (kuruluş) alındı.",
  bosluk("1845", k, "SAHO sahibi belirtmez; 1845-1900 sahip tanığı alınmadı."),
  [], N + "Aynı sayfa 'Founded in 1762' der ama bu Kweekvallei çiftliğinin tarihidir (köy 1845'te ilan); 1762 kuruluş sayılmadı."))
json.dump(R, open("denetim/SEHIR-DUNYA-1116/P3/B08.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(len(R))
