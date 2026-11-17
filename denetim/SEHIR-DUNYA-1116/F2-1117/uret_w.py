import json
B = "https://www.britannica.com/place/"
def kay(slug, ad, lat, lon, adlar, nic, yil, kaynak_ad, url, tanik, ob, ic, olaylar=()):
    kaynak = "Encyclopaedia Britannica, «%s» (Britannica editörleri), %s%s (tarayıcı sayfa okuma, 17 Kasım 2026)" % (kaynak_ad, B, url)
    ev = [{"t": "%s-01-01" % yil, "gun": str(yil), "k": "fetih" if "işgal" in ob else "diger", "b": ob,
           "kesinlik": "yil", "kaynak": kaynak, "tanik": tanik}]
    for (y, k, b, t) in olaylar:
        ev.append({"t": "%s-01-01" % y, "gun": str(y), "k": k, "b": b, "kesinlik": "yil", "kaynak": kaynak, "tanik": t})
    return {"id": slug + "-af-p9", "ad": ad, "atlas_ad": ad, "lat": lat, "lon": lon, "kat1900": None, "adlar": adlar,
            "ilk": {"t": "%s-01-01" % yil, "gun": str(yil), "nicelik": nic, "kesinlik": "yil", "kaynak": kaynak, "tanik": tanik},
            "kur": None, "ark": None, "bit": None, "sahip": [], "olay": ev, "ic_not": ic}
TEK = "TEK KAYNAK (Britannica); çift teyit yok. Gün yok, yıl hassasiyeti. Zincir (sahip) YAZILMADI: kaynak 'şu yer şu devletin' biçiminde sahip/dönem günü vermiyor. "
R = []
R.append(kay("zinder", "Zinder", 13.803, 8.988, ["Zinder (Damagaram)"], "ilk_anilis", 1899, "Zinder", "Zinder",
  "The city was occupied by French troops in 1899",
  "Fransız birlikleri Zinder'i işgal etti (Damagaram hanedanlığının başkentiydi)",
  TEK + "Britannica 'XVIII. yüzyılda kurulan Müslüman hanedanın başkenti' der (yüzyıl; kayıt açılmadı); yıllı ilk tanık 1899 işgalidir, bu yüzden nicelik ilk_anilis ve 1899 YALNIZ yıllı en erken tanıktır, şehrin gerçek ilk anılışı daha eskidir. ATLAS: kronoloji maddesi 1960 — başlangıç iddiası bu kaynakta doğrulanamadı."))
R.append(kay("bouake", "Bouaké", 7.69, -5.03, ["Bouaké"], "kurulus", 1899, "Bouaké", "Bouake",
  "Bouaké was established as a French military post in 1899",
  "Bouaké Fransız askerî karakolu olarak kuruldu",
  TEK))
R.append(kay("bamako", "Bamako", 12.65, -8.0, ["Bamako"], "ilk_anilis", 1880, "Bamako", "Bamako",
  "When occupied for the French in 1880 by Captain Joseph-Simon Gallieni, Bamako was a settlement",
  "Yüzbaşı Gallieni Bamako'yu Fransa adına işgal etti; o gün birkaç yüz kişilik köyler topluluğuydu",
  TEK + "Nicelik ilk_anilis: 1880 yıllı en erken tanıktır, şehrin kuruluşu değildir (Britannica 'a settlement of a few hundred inhabitants' der).",
  [(1908, "diger", "Bamako Fransız Sudan kolonisinin başkenti oldu", "It became the capital of the former colony of French Sudan in 1908")]))
R.append(kay("dakar", "Dakar", 14.69, -17.44, ["Dakar"], "kurulus", 1857, "Dakar", "Dakar",
  "Dakar was founded in 1857 when the French built a fort",
  "Dakar, Fransızların bir kale inşa etmesiyle kuruldu",
  TEK + "Britannica adın dakhar (Wolof, demirhindi ağacı) köyünden geldiğini ve yakında Lebu köyü bulunduğunu söyler; yıllı tanık yok."))
R.append(kay("ndjamena", "N’Djamena", 12.11, 15.04, ["Fort-Lamy", "N’Djamena"], "kurulus", 1900, "N’Djamena", "NDjamena",
  "The city was founded in 1900 across the Chari River from Fort-Fureau",
  "Şehir (Fort-Lamy adıyla) Fransız sömürge birliklerinin Rābiḥ'i yendiği yerin karşısında kuruldu",
  TEK + "Atlasta Ndjamena adıyla yer alır; Britannica adın 1973'te değiştiğini yazar (aynı cümlede özel ad tipografisi nedeniyle olay yazılmadı)."))
R.append(kay("conakry", "Konakri", 9.54, -13.68, ["Conakry", "Konakri"], "kurulus", 1884, "Conakry", "Conakry",
  "Founded by the French in 1884, it derived its name from a local village",
  "Konakri Fransızlarca kuruldu; adını yerel Susu köyünden aldı",
  TEK + "Atlas adı: Konakri. Madde başlığı şehirdir, tanık cümlesi 'it' zamiriyle şehre döner.",
  [(1891, "diger", "Konakri Rivières du Sud himayesinin başkenti oldu", "Subsequently it became capital of the protectorate of Rivières du Sud (1891)"),
   (1893, "diger", "Konakri Fransız Gine kolonisinin başkenti oldu", "of the colony of French Guinea (1893)")]))
R.append(kay("yaounde", "Yaunde", 3.87, 11.52, ["Yaoundé", "Yaunde"], "kurulus", 1888, "Yaoundé", "Yaounde",
  "Founded in 1888 during the period of the German protectorate, Yaoundé",
  "Yaoundé Alman himayesi döneminde kuruldu",
  TEK + "Atlas adı: Yaunde.",
  [(1915, "fetih", "Belçika birlikleri Yaoundé'yi işgal etti", "Yaoundé was occupied by Belgian troops in 1915"),
   (1922, "diger", "Yaoundé Fransız Kamerun'un başkenti ilan edildi", "was declared the capital of French Cameroun in 1922")]))
R.append(kay("dikwa", "Dikva", 12.04, 13.917, ["Dikwa", "Dikoa"], "ilk_anilis", 1902, "Dikwa", "Dikwa",
  "Dikwa remained the shehu’s seat until 1902",
  "Dikwa 1902'ye kadar Bornu şehusunun makamı olarak kaldı",
  TEK + "Britannica: kuruluş ve surların tarihi 'bilinmiyor'; şehir 1850'lerde 'Bornu krallığının önemli merkezi' (onyıl; yıl değil, yazılmadı). 1893'te Rābiḥ Dikwa'yı yeni Bornu başkenti seçti (cümle tek yıl+şehir tanığı 15 kelimeyi aşıyor, o yüzden olay yazılmadı); 1900'de Rābiḥ'in öldürülmesi, 1902'de şehrin şehu makamı olmaktan çıkması aşağıda. ATLAS: Dikva kat 3 'kanem-bornu'; sahip zincirinde tarih yok.",
  [(1922, "diger", "Dikwa emirliği Milletler Cemiyeti Britanya Kamerunu mandasına katıldı", "and in 1922 Dikwa emirate became part of the League of Nations mandate"),
   (1942, "diger", "Emirlik merkezi Dikwa'dan Bama'ya taşındı", "In 1942 the emirate headquarters was moved from Dikwa town to Bama")]))
R = [r for r in R if r["ad"] in ("Zinder", "Bamako", "Dikva")]
for r in R:
    if r["ad"] == "Dikva":
        r["atlas_ad"] = "Dikva (Dikeo)"
json.dump(R, open(r"C:\atlas\.claude\worktrees\sehir-afrika-1116\denetim\SEHIR-DUNYA-1116\F2-1117\W.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(len(R))
