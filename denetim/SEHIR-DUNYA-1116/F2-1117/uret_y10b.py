import json
def B(ad, slug):
    return "Encyclopaedia Britannica, «%s» (Britannica editörleri), https://www.britannica.com/place/%s (tarayıcı sayfa okuma, 17 Kasım 2026)" % (ad, slug)
TEK = "TEK KAYNAK (Britannica); çift teyit yok (Encyclopedia.com Ibadan sayfasında yıllı cümle okunamadı; UNESCO/Persée/Cambridge bu şehir için bulunmadı). Gün yok, yıl hassasiyeti. "
ZAM = "Tanık cümlesinde özne zamir/ad-gösterme = madde konusu; başlık şehir (koordinatör kararı, parti 9 ile aynı). "
def ev(yil, k, b, kay, tanik):
    return {"t": "%s-01-01" % yil, "gun": str(yil), "k": k, "b": b, "kesinlik": "yil", "kaynak": kay, "tanik": tanik}
R = []
k = B("Ibadan", "Ibadan")
a = "Recorded history begins in 1829"
a2 = "The British colonial government assumed control of the city in 1893"
R.append({"id": "ibadan-p10", "ad": "Ibadan", "atlas_ad": None, "lat": 7.37756, "lon": 3.90591, "kat1900": None, "adlar": ["Ibadan"],
  "ilk": {"t": "1829-01-01", "gun": "1829", "nicelik": "ilk_anilis", "kesinlik": "yil", "kaynak": k, "tanik": a},
  "kur": None, "ark": None, "bit": None,
  "sahip": [{"f": "1829-01-01", "t": "1893-01-01", "d": "ibadan", "kesinlik": "yil", "kaynak": k},
            {"f": "1893-01-01", "t": "1900-01-01", "d": "ingiliz-nijerya", "kesinlik": "yil", "kaynak": k}],
  "olay": [ev(1829, "diger", "Ibadan'ın kayıtlı tarihi başlar (savaşlarla sarsılan bölgede)", k, a),
           ev(1893, "diger", "İngiliz sömürge hükümeti Ibadan'ın denetimini üstlendi", k, a2)],
  "ic_not": TEK + ZAM + "Tanık 1: 'Recorded history begins in 1829' (şehir adı cümlede yok; madde başlığı Ibadan). 1829 'kayıtlı tarihin başlangıcı'dır, kuruluş günü değil: nicelik ilk_anilis. Tanık 2 (1893): 'The British colonial government assumed control of the city in 1893' (özne 'the city'). SAHİP ZİNCİRİ BEYANLI: 1829→1893 'ibadan' ve 1893→1900 'ingiliz-nijerya' kaynak cümlesinde devlet adı yoktur; yalnız iki YIL kaynaklıdır (1829 başlangıç, 1893 İngiliz denetimi); 'ibadan' id'si atlas künyesidir (devletler.js: f 1829-01-01, t 1893-08-15), dayanak sayılmaz. 1900-01-01 yalnız atlas yokluğu bağıdır (kaynak değil). Britannica ayrıca 1901 Lagos demiryolu, 1912 Kano hattı, 1948 üniversite der (zincirde değil)."})
k = B("Ogbomosho", "Ogbomosho")
o = "Following Ibadan\u2019s victory in 1840 over the Fulani at Oshogbo"
R.append({"id": "ogbomosho-p10", "ad": "Ogbomosho", "atlas_ad": None, "lat": 8.13373, "lon": 4.24014, "kat1900": None, "adlar": ["Ogbomosho"],
  "ilk": {"t": "1840-01-01", "gun": "1840", "nicelik": "ilk_anilis", "kesinlik": "yil", "kaynak": k, "tanik": o},
  "kur": None, "ark": None, "bit": None, "sahip": [],
  "olay": [ev(1840, "diger", "Ibadan'ın Oşogbo'da Fulanilere karşı zaferinin ardından kasaba bağlılığını Oyo'dan Ibadan'a kaydırdı (en erken 1840)", k, o)],
  "ic_not": TEK + ZAM + "Tam cümle: 'Following Ibadan’s victory in 1840 over the Fulani at Oshogbo, 32 miles (51 km) southeast, the town shifted its allegiance from Oyo to Ibadan.' 1840 ZAFERİN yılıdır; bağlılık değişimi 'following' (ardından) = EN ERKEN 1840, gün/yıl kesin değil. Aynı madde 'Founded in the mid-17th century' der (yüzyıl, kayıt yazılmadı). Sahip zinciri yazılmadı (1840→1900 arası Ibadan'dan İngiliz denetimine geçiş kaynakta yok)."})
k = B("Laayoune", "Laayoune")
l = "was developed by the Spaniards in 1938 as the administrative, military, and European population centre"
R.append({"id": "laayoune-p10", "ad": "Laayoune", "atlas_ad": None, "lat": 27.1418, "lon": -13.18797, "kat1900": None, "adlar": ["Laayoune", "El-Ayûn"],
  "ilk": {"t": "1938-01-01", "gun": "1938", "nicelik": "kurulus", "kesinlik": "yil", "kaynak": k, "tanik": l},
  "kur": None, "ark": None, "bit": None, "sahip": [],
  "olay": [ev(1938, "kurulus", "Kasaba İspanyollarca eski eyaletin idarî, askerî ve Avrupalı nüfus merkezi olarak geliştirildi", k, l)],
  "ic_not": TEK + ZAM + "Tam cümle: 'The town, whose Arabic name means “water sources,” was developed by the Spaniards in 1938 as the administrative, military, and European population centre of the former province.' 'Developed' kuruluş/geliştirme (kuruluş sözcüğü yok): nicelik kurulus kaynağın 'developed' ifadesine dayanır, kesin kuruluş günü bilinmiyor. Britannica ayrıca 1976 (İspanya çekilişi, Fas-Sahravi savaşı) anar (şehir olgusu değil). Sahip zinciri yazılmadı (kaynak 'İspanyollar' der, devlet/dönem vermez; 1938 > 1900)."})
R = [r for r in R if r["id"] != "ogbomosho-p10"]
json.dump(R, open(r"C:\atlas\.claude\worktrees\sehir-afrika-1116\denetim\SEHIR-DUNYA-1116\F2-1117\Y10b.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(len(R))
