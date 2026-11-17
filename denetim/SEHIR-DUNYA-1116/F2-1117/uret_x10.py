import json, sys
FR = "Encyclopaedia Britannica, «%s» (Britannica editörleri), https://www.britannica.com/place/%s (tarayıcı sayfa okuma, 17 Kasım 2026)"
TEK = "TEK KAYNAK (Britannica); çift teyit yok. Gün yok, yıl hassasiyeti. "
R = []
def ev(y, k, b, t, kay):
    return {"t": "%s-01-01" % y, "gun": str(y), "k": k, "b": b, "kesinlik": "yil", "kaynak": kay, "tanik": t}
def kayit(slug, ad, atlas_ad, lat, lon, adlar, nic, yil, madde, url, tanik, ob, ic, olaylar=(), sahip=()):
    kay = FR % (madde, url)
    ol = [ev(yil, "diger", ob, tanik, kay)] + [ev(y, k, b, t, kay) for (y, k, b, t) in olaylar]
    return {"id": slug + "-p10", "ad": ad, "atlas_ad": atlas_ad, "lat": lat, "lon": lon, "kat1900": None, "adlar": adlar,
            "ilk": {"t": "%s-01-01" % yil, "gun": str(yil), "nicelik": nic, "kesinlik": "yil", "kaynak": kay, "tanik": tanik},
            "kur": None, "ark": None, "bit": None, "sahip": [dict(s, kaynak=kay) for s in sahip], "olay": ol,
            "ic_not": ic + ((" SAHİP/DİKİŞ: %s %s → %s (atlas başlangıcı): gün kaynakta yok, atlas başlangıcına ≤1 yıl uzatıldı; kaynak yılı esas, 'f'/'t' kaynağın yıl ucudur, atlas başlangıcı kaynak değildir." % (sahip[0]["d"], sahip[0]["f"], sahip[0]["t"])) if sahip else "")}

SAH = json.load(open(sys.argv[1], encoding="utf8")) if len(sys.argv) > 1 else {}
def S(ad): return SAH.get(ad, [])

R.append(kayit("freetown", "Freetown", "Freetown", 8.4871, -13.2356, ["Freetown"], "kurulus", 1787, "Sierra Leone", "Sierra-Leone",
  "In 1787, Freetown was selected as a haven for freed African slaves",
  "Freetown yeri İngiliz kölelik karşıtı Granville Sharp tarafından özgürleşmiş Afrikalı köleler için sığınak olarak seçildi",
  TEK + "Kuruluş = yer seçimi/ilk iskân girişimi yılı (Britannica Freetown md. aynı yılı verir: 'Granville Sharp, selected the site ... in 1787'; aynı yayıncı, bağımsız teyit sayılmaz). 1462 Portekiz adlandırması dağa aittir, şehre değil. Sahip zinciri: bkz. dikiş notu varsa aşağıda.",
  [(1821, "diger", "Freetown Büyük Britanya'nın bütün Batı Afrika sahiplerinin hükûmet merkezi oldu (1874'e dek)", "In 1821 Freetown became the seat of government for all of Great Britain’s"),
   (1893, "diger", "Freetown belediye olarak tüzel kişilik kazandı", "Freetown, incorporated as a municipality in 1893")], S("Freetown")))
R.append(kayit("libreville", "Libreville", "Librevil (Libreville)", 0.3924, 9.4536, ["Libreville"], "kurulus", 1849, "Libreville", "Libreville",
  "In 1849 a settlement of formerly enslaved people from the ship Elizia",
  "Elizia gemisinden özgürleştirilmiş kölelerin yerleşimi ve Pongoue köyleri 'Libreville' (özgür kent) adını aldı",
  TEK + "Tanık cümlesi 15 kelimeye kısaltıldı; devamı: '... and a group of Pongoue villages were given the name Libreville (meaning “free town”)'. Aynı maddede Fort-d'Aumale 1843 (kale; şehir adı verilmiyor, yazılmadı). 1888-1904 Fransız Ekvator Afrikası başkenti.",
  [(1888, "diger", "Libreville Fransız Ekvator Afrikası'nın başkenti oldu (1904'e dek)", "which from 1888 to 1904 was the capital of French Equatorial Africa")], S("Libreville")))
R.append(kayit("banjul", "Banjul (Bathurst)", "Bathurst (Banjul)", 13.4527, -16.578, ["Bathurst", "Banjul"], "kurulus", 1816, "Banjul", "Banjul",
  "It was founded in 1816, when the British Colonial Office ordered Captain Alexander Grant",
  "Bathurst (Banjul), İngiliz Sömürge Ofisi'nin Yüzbaşı Alexander Grant'e askerî karakol kurdurmasıyla kuruldu",
  TEK + "Özne 'It' = Banjul maddesinin konusu (Bathurst). Devam: 'to establish a military post on the river to suppress the slave trade'. Britannica: 1965'te şehir statüsü, adı 1973'te Banjul oldu.",
  [(1973, "diger", "Bathurst'ün adı Banjul olarak değiştirildi", "The name was changed to Banjul in 1973")], S("Banjul")))
R.append(kayit("bissau", "Bissav (Bissau)", "Bissav (Bissau)", 11.86, -15.6, ["Bissau", "Bissav"], "kurulus", 1687, "Bissau", "Bissau",
  "It originated in 1687 as a Portuguese fortified post and slave-trading centre",
  "Bissau 1687'de Portekiz tahkimli karakolu ve köle ticareti merkezi olarak doğdu",
  TEK + "Özne 'It' = Bissau. Atlas noktası 1974'te başlıyor; 1687-1974 sahip zinciri kaynaklanamadı (sahip[] boş, borç değil beyan).",
  [(1941, "diger", "Bissau Bolama'nın yerine başkent oldu", "In 1941 it replaced Bolama as the capital")], S("Bissav")))
R.append(kayit("harare", "Harare (Salisbury)", "Salisbury (Harare)", -17.8277, 31.0534, ["Salisbury", "Harare"], "kurulus", 1890, "Harare", "Harare",
  "The city was founded in 1890 at the spot where the British South Africa Company’s Pioneer Column halted",
  "Salisbury (Harare), İngiliz Güney Afrika Şirketi'nin Öncü Kolu'nun durduğu yerde kuruldu; adını Lord Salisbury'den aldı",
  TEK + "Tanık 'The city was founded in 1890 ... halted' (ilk 18 kelime; kısaltıldı).",
  [(1897, "diger", "Salisbury belediye ilan edildi", "The city was created a municipality in 1897"),
   (1935, "diger", "Salisbury şehir statüsü kazandı", "It was chartered as a city in 1935")], S("Harare")))
R.append(kayit("mutare", "Mutare (Umtali)", "Umtali (Mutare)", -18.9707, 32.6709, ["Fort Umtali", "Umtali", "Mutare"], "kurulus", 1890, "Mutare", "Mutare",
  "It originated as Fort Umtali and was built by prospectors in 1890",
  "Mutare, madenciler tarafından 1890'da Fort Umtali olarak inşa edildi",
  TEK + "Özne 'It' = Mutare. Yerleşim sonradan iki kez taşındı (Britannica) — koordinat bugünkü kenti gösterir.",
  [(1914, "diger", "Umtali belediye ilan edildi", "It was declared a municipality in 1914")], S("Mutare")))
R.append(kayit("gcuwa", "Gcuwa (Butterworth)", "Gcuva (Butterworth)", -32.3308, 28.1498, ["Butterworth", "Gcuwa"], "kurulus", 1827, "Butterworth", "Butterworth-South-Africa",
  "it grew from a Wesleyan mission station founded in 1827",
  "Butterworth 1827'de kurulan bir Wesleyan misyon istasyonundan büyüdü",
  TEK + "Kuruluş = misyon istasyonunun kuruluşu (şehir ondan büyüdü). Kasaba statüsü 1904 (olay).",
  [(1904, "diger", "Butterworth kasaba statüsü kazandı", "acquired town status in 1904")], S("Gcuwa")))
R.append(kayit("lome", "Lomé", "Lomé", 6.1287, 1.2215, ["Lomé", "Lome"], "ilk_anilis", 1897, "Lomé", "Lome",
  "Selected as the colonial capital of German Togoland in 1897",
  "Lomé Alman Togolandı'nın sömürge başkenti olarak seçildi",
  TEK + "Britannica Togo md. aynı olguyu verir ('Lomé was selected as the colonial capital of German Togoland in 1897'; aynı yayıncı). Kuruluş yılı verilmiyor; nicelik ilk_anilis.", [], S("Lomé")))
R.append(kayit("douala", "Douala", "Duala", 4.0483, 9.7043, ["Douala"], "ilk_anilis", 1884, "Douala", "Douala",
  "Douala served as the capital of the German Kamerun protectorate from 1884 to 1902",
  "Douala Alman Kamerun himayesinin başkenti oldu (1902'ye dek)",
  TEK + "1884 = başkentlik başlangıcı (en erken yıllı tanık), kuruluş yılı değil.",
  [(1940, "diger", "Douala yeniden Kamerun'un başkenti oldu (1946'ya dek)", "It again served as the capital of Cameroon in 1940–46")], S("Douala")))
R.append(kayit("bangui", "Bangi (Bangui)", "Bangi (Bangui)", 4.37, 18.56, ["Bangui", "Bangi"], "kurulus", 1889, "Central African Republic", "Central-African-Republic",
  "Founded as a French trading post in 1889, Bangui has grown into a city",
  "Bangui 1889'da Fransız ticaret karakolu olarak kuruldu",
  TEK + "Britannica CAR md.: 'The capital city of Bangui, founded as a French trading post in 1889'.", [], S("Bangi")))
R.append(kayit("timbo", "Timbo", "Timbo", 10.6333, -11.8333, ["Timbo"], "ilk_anilis", 1896, "Fouta Djallon", "Fouta-Djallon",
  "seat of the Fulani emirs until its occupation by French troops in 1896",
  "Timbo, Fulani emirlerinin merkeziyken 1896'da Fransız birlikleri tarafından işgal edildi",
  TEK + "Cümlenin öznesi Timbo ('Timbo, 26 miles (42 km) northeast of Mamou, was the seat ...'); tanık 15 kelimeye kısaltıldı. 1896 = en erken yıllı tanık (işgal yılı); kuruluş/emirlik merkezi olma başlangıcı kaynakta yok.", [], S("Timbo")))
R = [r for r in R if r["ad"] != "Freetown"]
json.dump(R, open(sys.argv[2] if len(sys.argv) > 2 else "X10.json", "w", encoding="utf8"), ensure_ascii=False, indent=1)
print(len(R))
