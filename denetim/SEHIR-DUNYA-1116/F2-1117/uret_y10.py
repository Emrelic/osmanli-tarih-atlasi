import json
def B(ad, slug):
    return "Encyclopaedia Britannica, «%s» (Britannica editörleri), https://www.britannica.com/place/%s (tarayıcı sayfa okuma, 17 Kasım 2026)" % (ad, slug)
TEK = "TEK KAYNAK (Britannica); çift teyit yok. TDV sitesi 17 Kasım 2026'da açıldı ama bu şehir için madde yok/okunmadı. Gün yok, yıl hassasiyeti. "
def ev(yil, k, b, kay, tanik):
    return {"t": "%s-01-01" % yil, "gun": str(yil), "k": k, "b": b, "kesinlik": "yil", "kaynak": kay, "tanik": tanik}
def kayit(id_, ad, lat, lon, adlar, nic, yil, kay, tanik, olaylar, ic, sahip=(), kur=None):
    return {"id": id_ + "-p10", "ad": ad, "atlas_ad": None, "lat": lat, "lon": lon, "kat1900": None, "adlar": adlar,
            "ilk": {"t": "%s-01-01" % yil, "gun": str(yil), "nicelik": nic, "kesinlik": "yil", "kaynak": kay, "tanik": tanik},
            "kur": kur, "ark": None, "bit": None, "sahip": list(sahip), "olay": olaylar, "ic_not": ic}
R = []
k = B("Likasi", "Likasi")
t1 = "Likasi was founded in 1917 and was designated an urban district in 1943"
t0 = "In 1892 Belgians discovered copper deposits at Likasi and at Kambove"
R.append(kayit("likasi", "Likasi", -10.98303, 26.7384, ["Likasi", "Jadotville"], "kurulus", 1917, k, t1,
  [ev(1892, "diger", "Belçikalılar Likasi'de ve Kambove'de bakır yatakları keşfetti", k, t0),
   ev(1917, "kurulus", "Likasi kuruldu", k, t1),
   ev(1943, "diger", "Likasi kentsel bölge (urban district) ilân edildi", k, t1)],
  TEK + "Kuruluş 1917 kaynaklı; 1892 yalnız bakır keşfi (yerleşim olgusu değil, olay olarak yazıldı). 'Jadotville' adı bu kaynakta yok: adlar alanında Britannica dışı bilgidir, doğrulanmadı. Atlas noktası yok; sahip zinciri yazılmadı (kaynak 'şu devletin' demiyor; 1917 zaten 1900 sonrası)."))
k = B("eMalahleni (Witbank)", "Emalahleni")
k = "Encyclopaedia Britannica, «eMalahleni» (Britannica editörleri), https://www.britannica.com/event/eMalahleni (tarayıcı sayfa okuma, 17 Kasım 2026)"
w0 = "Established in 1890 as Witbank, it is at the centre of a coal-mining area"
w1 = "Witbank attained town status in 1910 and city status in 1994"
R.append(kayit("witbank", "Witbank (Emalahleni)", -25.87133, 29.23323, ["Witbank", "eMalahleni"], "kurulus", 1890, k, w0,
  [ev(1890, "kurulus", "Witbank kuruldu", k, w0), ev(1910, "diger", "Witbank kasaba statüsü kazandı", k, w1), ev(1994, "diger", "Witbank şehir statüsü kazandı", k, w1)],
  TEK + "Cümle 'Established in 1890 as Witbank' kuruluş tanığıdır (özne eMalahleni maddesidir). Atlas noktası yok; sahip zinciri yazılmadı (kaynak devlet adı vermiyor)."))
k = B("Mindelo", "Mindelo")
m = "Mindelo port has been a submarine cable station since 1875"
R.append(kayit("mindelo", "Mindelo", 16.89014, -24.98042, ["Mindelo"], "ilk_anilis", 1875, k, m,
  [ev(1875, "diger", "Mindelo limanı denizaltı kablo istasyonu oldu", k, m)],
  TEK + "1875 şehrin ilk anılışı/kuruluşu DEĞİL, yıllı en erken tanıktır (liman kablo istasyonu; 'since 1875'); kuruluş yılı kaynakta yok. Atlas noktası yok; sahip zinciri yazılmadı."))
k = B("Okrika", "Okrika")
o = "By 1912 Okrika had been completely eclipsed by Port Harcourt"
o2 = "it was not revived as a commercial port until 1965"
R.append(kayit("okrika", "Okrika", 4.74215, 7.08368, ["Okrika"], "ilk_anilis", 1912, k, o,
  [ev(1912, "diger", "Okrika, Port Harcourt tarafından tamamen gölgede bırakılmış durumdaydı (en geç 1912)", k, o)],
  TEK + "'By 1912' EN GEÇ tarihtir (olayın günü/yılı değil); en erken yıllı tanıktır, şehrin ilk anılışı değildir. Aynı maddede 'early 17th century' (Okrika krallığı başkenti) ve '1830s' yalnız yüzyıl/on yıl: yazılmadı. 1965 (Okrika'nın ticarî liman olarak yeniden canlanması, rafineri) ayrı cümle parçası: " + "'" + o2 + "' dahil edilmedi, çünkü olay parçası tanıkta aynı cümlede ve adsız özne ('it'). Atlas noktası yok; sahip zinciri yazılmadı."))
k = B("Lobito", "Lobito")
l = "the completion in 1928 of the important Benguela Railway, which connected Lobito"
R.append(kayit("lobito", "Lobito", -12.3644, 13.53601, ["Lobito"], "ilk_anilis", 1928, k, l,
  [ev(1928, "diger", "Benguela Demiryolu'nun tamamlanması Lobito'yu Belçika Kongosu'na bağladı", k, l)],
  TEK + "1928 şehrin kuruluşu değil, demiryolunun tamamlanma yılıdır (yıllı en erken tanık); Britannica'da Lobito kuruluş yılı okunmadı. Atlas noktası yok; sahip zinciri yazılmadı."))
kB = B("Mazār-e Sharīf", "Mazar-e-Sharif")
kT = "TDV İslâm Ansiklopedisi, «Mezârışerif», https://islamansiklopedisi.org.tr/mezariserif (tarayıcı sayfa okuma, 17 Kasım 2026)"
kc = kB + " + " + kT
z = "Mazār-e Sharīf came under Afghan rule in 1852"
R.append(kayit("mezarisserif", "Mezârışerif (Mazar-ı Şerif)", 36.70904, 67.11087, ["Mazar-e Sharif", "Mezârışerif"], "ilk_anilis", 1852, kc, z,
  [ev(1852, "fetih", "Mezârışerif Afgan hâkimiyetine girdi", kc, z)],
  "ÇİFT TEYİT: Britannica (cümle tanığı, 'Mazār-e Sharīf came under Afghan rule in 1852') + TDV Mezârışerif ('1852 yılında Afgan hâkimiyetine giren şehir 1869’da Afgan Türkistanı’nın siyasî merkezi haline getirildi'; TDV cümlesinde özne adı yok, madde konusudur). 1852 şehrin ilk anılışı DEĞİL: TDV iki Hz. Ali türbesi keşfini 530 (1136, Sencer) ve 885 (1480, Hüseyin Baykara) olarak verir; ancak TDV cümlesi şehir adını taşımaz, Britannica 1480 cümlesinde 'settlement' Belh'tir (belirsiz) ⇒ bu erken yıllar tanık olarak alınmadı, ayrı borç. 1869 olayı Britannica'da şehir adlı cümlede 15 kelimeyi aşar; TDV'de adsızdır: yazılmadı. Sahip zinciri 1852→1900 (Afganistan Bârekzâyî Emirliği, 'afganistan'): 1900 yalnız bu dosyanın atlas yokluğu dikişidir (kaynak değil); 1852'den sonra Afgan idaresi TDV'ye göre sürer (1869 siyasî merkez, 1873/1889 Afgan valileri). Atlas noktası yok.",
  [{"f": "1852-01-01", "t": "1900-01-01", "d": "afganistan", "kesinlik": "yil", "kaynak": kc}]))
R = [r for r in R if r["ad"] not in ("Witbank (Emalahleni)", "Mindelo")]
json.dump(R, open(r"C:\atlas\.claude\worktrees\sehir-afrika-1116\denetim\SEHIR-DUNYA-1116\F2-1117\Y10.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(len(R))
