import json, sys
B = "https://www.britannica.com/place/"
def kay(slug, ad, atlas_ad, lat, lon, adlar, nic, yil, kaynak_ad, url, tanik, ob, ic, olaylar=(), sahip=()):
    kaynak = "Encyclopaedia Britannica, «%s» (Britannica editörleri), %s%s (tarayıcı sayfa okuma, 17 Kasım 2026)" % (kaynak_ad, B, url)
    ev = [{"t": "%s-01-01" % yil, "gun": str(yil), "k": "fetih" if "fethed" in ob or "işgal" in ob or "ele geçir" in ob else "diger", "b": ob,
           "kesinlik": "yil", "kaynak": kaynak, "tanik": tanik}]
    for (y, k, b, t) in olaylar:
        ev.append({"t": y if "-" in str(y) else "%s-01-01" % y, "gun": str(y)[:4], "k": k, "b": b, "kesinlik": "yil", "kaynak": kaynak, "tanik": t})
    return {"id": slug + "-af-p9", "ad": ad, "atlas_ad": atlas_ad, "lat": lat, "lon": lon, "kat1900": None, "adlar": adlar,
            "ilk": {"t": "%s-01-01" % yil, "gun": str(yil), "nicelik": nic, "kesinlik": "yil", "kaynak": kaynak, "tanik": tanik},
            "kur": None, "ark": None, "bit": None, "sahip": list(sahip), "olay": ev, "ic_not": ic}
TEK = "TEK KAYNAK (Britannica); çift teyit yok (TDV sitesi 17 Kasım 2026'da 503 verdi, okunamadı). Gün yok, yıl hassasiyeti. "
R = []
GH = "Ghana", "place/Ghana-historical-West-African-empire"
R.append(kay("awdaghust", "Awdaghust", "Awdaghust (Aoudaghost)", 17.4167, -10.4167, ["Audaghost", "Awdaghust"], "ilk_anilis", 1054,
  "Ghana (tarihî Batı Afrika imparatorluğu)", "Ghana-historical-West-African-empire",
  "Abū Bakr, the leader of this movement’s southern wing, took Audaghost in 1054",
  "Murâbıtların güney kanadının lideri Ebû Bekir Awdaghust'u (Audaghost) fethetti",
  TEK + "Britannica 'Audaghost' maddesi aynı olayı 'about 1054–55' (yaklaşık, aralık) verir; ana Ghana maddesinin tek yıllı cümlesi (1054) alındı. Nicelik ilk_anilis: 1054 yıllı en erken tanıktır; kasaba 9.-11. yy'da var (fl.), kuruluş günü kaynakta yok. Sahip zinciri yazılmadı (kaynak 'şu yer şu devletin' dönemi vermiyor).",
  []))
R.append(kay("kumbi-salih", "Kumbî Sâlih", "Kumbî Sâlih (Gāne)", 15.7657, -7.9687, ["Kumbi", "Koumbi Saleh", "Kumbî Sâlih"], "ilk_anilis", 1076,
  "Ghana (tarihî Batı Afrika imparatorluğu)", "Ghana-historical-West-African-empire",
  "after many battles, seized Kumbi in 1076",
  "Murâbıt lideri Ebû Bekir uzun savaşlardan sonra Kumbi'yi (Kumbî Sâlih) ele geçirdi",
  TEK + "Cümlenin öznesi bir önceki cümle parçasında Abū Bakr'dır (Ghana md.: 'Abū Bakr ... took Audaghost in 1054 and, after many battles, seized Kumbi in 1076'). Britannica 'Kumbi' maddesi 'Ghana'nın son başkenti, 1240 öncesi 15.000+ nüfus' der (yıl=1240 yalnız zirve sınırı, olay değil). Ghana md.: 11. yy başkenti Kumbi ile 'geçici olarak özdeşleştirilmiştir' (arkeologlarca). TDV Gâne özdeşliği 'kesin değil' (önceki parti). Zincir yazılmadı. ATLAS: atlas noktası 701'de başlıyor; bu kaynaklarla 701 doğrulanamaz.",
  []))
R.append(kay("valata", "Valata", "Valata (Oualata)", 17.3, -7.033, ["Walata", "Oualata", "Valata"], "ilk_anilis", 1433,
  "Mali (tarihî imparatorluk)", "Mali-historical-empire-Africa",
  "the Tuareg seized Walata and Timbuktu (1433)",
  "Tuaregler Valata'yı (Walata) ve Timbuktu'yu ele geçirdi",
  TEK + "Aynı maddede Sundiata'nın Walata'yı Mali'ye kattığı ve Mansa Mûsâ'nın Walata'ya uğradığı cümleler yıl taşımıyor (yazılmadı); 1433 yıllı en erken tanıktır, şehrin ilk anılışı değildir. UNESCO WHC 750: 11.-12. yy'da kuruldu (yüzyıl, ayrıca borç).",
  []))
R = [r for r in R if r["ad"] != "Awdaghust"]
FR = "Encyclopaedia Britannica, «%s» (Britannica editörleri), https://www.britannica.com/place/%s (tarayıcı sayfa okuma, 17 Kasım 2026)"
SON = {"Konakri": sys.argv[1] if len(sys.argv) > 1 else "1958-01-01", "Ndjamena": sys.argv[2] if len(sys.argv) > 2 else "1960-01-01"}
k = FR % ("Conakry", "Conakry")
R.append(kay("konakri", "Konakri", "Konakri (Conakry)", 9.5111, -13.7109, ["Conakry", "Konakri"], "kurulus", 1884, "Conakry", "Conakry",
  "Founded by the French in 1884, it derived its name from a local village",
  "Konakri Fransızlarca kuruldu; adını yerel Susu köyünden aldı",
  TEK + "Sahip: 'Founded by the French' ⇒ fransa-cumhuriyet 1884-01-01 → 1885-01-01 (atlas noktasının başlangıcı; dikiş — atlas aynı sahiple sürer, sahip değişimi yok). Kuruluş yılı 1884 kaynaklı; 1885 bitişi yalnız atlas başlangıcıdır (kaynak değil).",
  [(1891, "diger", "Konakri Rivières du Sud himayesinin başkenti oldu", "Subsequently it became capital of the protectorate of Rivières du Sud (1891)")],
  [{"f": "1884-01-01", "t": "1885-01-01", "d": "fransa-cumhuriyet", "kesinlik": "yil", "kaynak": k}]))
DK = " Sahip: yalnız yıl (1857/1888) kaynaklıdır; atlas noktası aynı yılın ayrıntılı gününden (%s) başlar, zincir bu güne kadar uzatıldı (dikiş, atlas aynı sahiple sürer); gün kaynakta yok."
k = FR % ("Dakar", "Dakar")
R.append(kay("dakar", "Dakar", "Dakar", 14.69, -17.45, ["Dakar"], "kurulus", 1857, "Dakar", "Dakar",
  "Dakar was founded in 1857 when the French built a fort",
  "Dakar, Fransızların bir kale inşa etmesiyle kuruldu",
  TEK + "Adın dakhar (Wolof, demirhindi) köyünden geldiği ve Lebu köyü anılır; yıllı tanık yok." + DK % "1857-05-25",
  [], [{"f": "1857-01-01", "t": "1857-05-25", "d": "fransa-cumhuriyet", "kesinlik": "yil", "kaynak": k}]))
k = FR % ("Yaoundé", "Yaounde")
R.append(kay("yaunde", "Yaunde", "Yaunde", 3.87, 11.52, ["Yaoundé", "Yaunde"], "kurulus", 1888, "Yaoundé", "Yaounde",
  "Founded in 1888 during the period of the German protectorate, Yaoundé",
  "Yaoundé Alman himayesi döneminde kuruldu",
  TEK + "Britannica ayrıca 1915 Belçika işgali, 1922 Fransız Kamerun başkenti, 1960 hükümet merkezi der; atlas noktası bu sonrası kendi zincirinde taşır, bu dosya karışmaz." + DK % "1888-11-30",
  [], [{"f": "1888-01-01", "t": "1888-11-30", "d": "alman-kamerun", "kesinlik": "yil", "kaynak": k}]))
k = FR % ("Bouaké", "Bouake")
R.append(kay("buake", "Buake", "Buake (Bouaké)", 7.69, -5.03, ["Bouaké", "Buake"], "kurulus", 1899, "Bouaké", "Bouake",
  "Bouaké was established as a French military post in 1899",
  "Bouaké Fransız askerî karakolu olarak kuruldu",
  TEK + "Atlas noktası 1281'de başlar; 1899 şehrin yıllı kuruluşudur (atlas 1898'de fransa-cumhuriyet'e geçirir, bu kaynakla ±1 yıl uyuşmazlık: atlas başlangıcı düzeltilmeli/1898 doğrulanamaz).",
  [], []))
k = FR % ("N’Djamena", "NDjamena")
R.append(kay("ndjamena", "Ndjamena", "Ndjamena", 12.107, 15.045, ["Fort-Lamy", "N’Djamena"], "kurulus", 1900, "N’Djamena", "NDjamena",
  "The city was founded in 1900 across the Chari River from Fort-Fureau",
  "Şehir (Fort-Lamy) Fransız sömürge birliklerinin Rābiḥ'i yendiği yerin karşısında kuruldu",
  TEK + "Sahip: Fransız sömürge birlikleri adına Fort-Lamy adıyla kuruldu; Fransız egemenliğinin sonu Britannica'da 'Chad'in 1960 bağımsızlığı' (aynı maddede 'it remained a small Kotoko settlement until after Chad’s independence in 1960'). Atlas başlangıç günü zincir sonu (dikiş); olay.t atlas gününe eşitlendi.",
  [], []))
json.dump(R, open(r"C:\atlas\.claude\worktrees\sehir-afrika-1116\denetim\SEHIR-DUNYA-1116\F2-1117\W2.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(len(R))
