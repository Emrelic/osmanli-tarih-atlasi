// -*- coding: utf-8 -*-
// SEFERLER_P0064 — D1-TURKIYE oturumu, 17 Eylül 2026 · DALGA-0064 · paket 0064 H-0006 · H-0016
//
// OKUYUCU: js/app.js seferKayitlariniTopla() — /^SEFERLER(_[A-Za-z0-9_]+)?$/ desenine uyan her
//   window anahtarını kendiliğinden toplar. ⚠️ Ama dosya index.html'de <script> satırı ister;
//   o satır UI'nindir (bu dosya onu YAZMAZ).
// ŞEMA: data/savaslar.js SEFERLER ile aynı (ad · tur · sonuc · taraf · renk · f · t · yol) +
//   PAKET-RUS geleneği: id · tarih_hassasiyet · kaynak · kesinlik.
//   sonuc Osmanlı gözünden (dosya geleneği). renk #0d7d8a: SEFERLER'deki öteki Rus ve Afşar
//   kayıtlarıyla aynı — "devlet renginin parlak tonu" kuralı henüz ÖNERİ, burada uygulanmadı.
// TARİHLER GREGORYEN. ESBE/ВЭ Jülyen günleri +11 ile çevrildi (18. yy · D110).
//   "AY" damgalı günler ayın 1'ine KODLANMIŞTIR — gün kaynakta YOK (§4 üçüncü hassasiyet ekseni).
// İSTASYONLAR yalnız kaynakta ADI GEÇEN yerler; aradaki yol çizilmedi (iki istasyon arası düz hat).
// KOORDİNAT: GeoNames allCountries (yerel kopya) — atlas yerleşim noktası KULLANILMADI. Kimlikler:
//   Çariçanka 691155 · Orkapı/Perekop 697729 · Bahçesaray 712969 · İzyum 707292 · Azak 580054 ·
//   Kremençuk 704147 · Özi/Oçakiv 698770 · Geniçesk 708878 · Arabat oku 713236 · Salgır ağzı 694895 ·
//   Karasubazar/Bilohirsk 712587 · Kerkük 94787 · Erbil 95446 · Musul 99072
//
// KAYNAKLAR (ikisi Rus ansiklopedisi, TDV ile karşılıklı okundu):
//   [ESBE-TVR] ЭСБЕ «Турецкие войны России», «Ход военных действий отдельных кампаний» 1) —
//              ru.wikisource.org/wiki/ЭСБЕ/Турецкие_войны_России (vikiteks ham metni okundu)
//   [VE]       Военная энциклопедия (Сытин), «Миних, Бурхард-Христофор, граф» —
//              ru.wikisource.org/wiki/ВЭ/ВТ/Миних,_Бурхард-Христофор,_граф
//   [ESBE-ST]  ЭСБЕ «Ставчаны» (XXXI) — ru.wikisource.org/wiki/ЭСБЕ/Ставчаны
//   TDV: mahmud-i--osmanli · kirim · bahcesaray · karasubazar · azak · ozu · kerkuk · musul--irak
//
// YAZILMAYANLAR (bulunamadı / kaynak adsız):
//   · 1736 Leontyev müfrezesinin Orkapı → Kılburun yürüyüşü — Kılburun GeoNames'te bulunamadı
//   · 1736 dönüş Orkapı → "Самара" — ad iki yere gidebiliyor (Samara nehri tahkimatı / şehir); çözülmedi
//   · 1737 Lacy'nin başlangıcı "с Дона" — nokta adı yok; ok Arabat okunun kuzey ucundan başlar
//   · 1737 dönüş (Orkapı üzerinden Ukrayna) · 1738 Münnich'in Dinyester'e yürüyüşü (varış noktası adsız)
//     · 1738 Lacy Kırım seferi (güzergâh yok)
//   · 1739 Münnich — data/savaslar.js'te "rus-munih-hotin-yas-1739" ZATEN VAR; mükerrer ok olmasın diye
//     burada YAZILMADI. O kaydın ilk noktası YANLIŞ Stavçani (GeoNames 692684 · Hotin'e ~60 km);
//     ESBE-ST "в 14 верстах от уездного города" (≈14,9 km) ⇒ doğru nokta GeoNames 692686
//     48.39008/26.40319 (Hotin 706244'e 14,3 km). Düzeltme savaslar.js sahibine bildirildi.
//   · 1743 Nâdir'in Musul'dan çekilişi — TDV çekiliş yönünü VERMİYOR.
window.SEFERLER_P0064 = [
{ id:"p0064-munih-kirim-1736", ad:"Münnich'in Kırım seferi — Çariçanka'dan Bahçesaray'a (1736)", tur:"sefer", sonuc:"yenilgi", taraf:"dusman", renk:"#0d7d8a",
  f:"1736-04-29", t:"1736-07-08",
  tarih_hassasiyet:"f: GÜN (Münnich'in Çariçanka'ya varışı, 18 Nisan Jülyen; ESBE-TVR 'немедленно выступить') · t: GÜN (Bahçesaray'a giriş, 27 Haziran Jülyen — yalnız VE)",
  kaynak:"ESBE-TVR: \"по прибытии Миниха в Царицынку (18 апреля)\" · \"русские 28 мая дошли до Перекопа и 1 июня взяли его штурмом\" · \"вступил в Крым и дошел до Бахчисарая\" · VE: \"27 июня М. вступил в Бахчисарай\" · mahmud-i--osmanli (TDV): \"Kırım istikametine, Orkapı'ya yürüdüler\" · bahcesaray (TDV): \"1736'da General Münnich kumandasındaki Rus ordusu tarafından işgal edildi\"",
  kesinlik:"istasyonlar şehir noktası; Çariçanka→Orkapı arası (≈330 km) kaynakta ara durak yok",
  yol:[[34.48601,48.94186],[33.69283,46.16056],[33.85782,44.75525]] },
{ id:"p0064-munih-kirim-donus-1736", ad:"Münnich'in Bahçesaray'dan Orkapı'ya dönüşü (1736)", tur:"cekilme", sonuc:"belirsiz", taraf:"dusman", renk:"#0d7d8a",
  f:"1736-07-08", t:"1736-07-28",
  tarih_hassasiyet:"f: BAĞLI UÇ (Bahçesaray'a giriş; çıkış günü bulunamadı) · t: GÜN (Orkapı'ya dönüş, 17 Temmuz Jülyen)",
  kaynak:"ESBE-TVR: \"заставило его уже 17 июля вернуться в Перекоп\" · VE: \"28 июля б. отдан приказ двинуться обратно на Украйну\" (Jülyen; Orkapı'dan sonraki dönüş YAZILMADI)",
  yol:[[33.85782,44.75525],[33.69283,46.16056]] },
{ id:"p0064-izyum-azak-1736", ad:"Rus kolunun İzyum'dan Azak'a yürüyüşü (1736)", tur:"sefer", sonuc:"yenilgi", taraf:"dusman", renk:"#0d7d8a",
  f:"1736-03-01", t:"1736-07-13",
  tarih_hassasiyet:"f: AY (TDV 'Zilkade 1148 (Mart 1736)' Azak'a saldırı — gün yok) · t: GÜN (TDV; ⚠️ aynı cümle Azak · Gözleve · Orkapı · Kılburun'u TEK günde topluyor)",
  kaynak:"ESBE-TVR: \"другой же части — идти от Изюма к Азову. При последней сначала находился сам Миних\" · \"фельдмаршал Ласси … успел овладеть этой крепостью\" · mahmud-i--osmanli (TDV): \"1148 Zilkadesinde (Mart 1736) Azak Kalesi'ne saldırdılar\" · \"Ruslar'ın 13 Temmuz 1736'da Azak Kalesi, Gözleve, Orkapı ve Kılburun'u zaptetmelerine\" · azak (TDV): \"1736'da tekrar Rus idaresine girdi\"",
  yol:[[37.27679,49.20697],[39.41486,47.1069]] },
{ id:"p0064-munih-ozi-1737", ad:"Münnich'in Dinyeper'den Özi'ye yürüyüşü (1737)", tur:"sefer", sonuc:"yenilgi", taraf:"dusman", renk:"#0d7d8a",
  f:"1737-05-01", t:"1737-07-11",
  tarih_hassasiyet:"f: AY (Dinyeper geçişi: ESBE-TVR 'в исходе апреля', VE 'в начале мая' Jülyen ⇒ Gregoryen Mayıs başı — gün yok) · t: GÜN (TDV Özi'nin düşüşü)",
  kaynak:"VE: \"в начале мая М. с 70-тыс. войском переправился через Днепр между Переволочной и Кременчугом, 10 июля подошел к Очакову и 12-го штурмовал его\" · ESBE-TVR: \"в исходе апреля переправился через Днепр и двинулся к Очакову. 2 июля крепость эта была взята\" · ozu (TDV): \"Özü Ruslar'ın eline geçti (11 Temmuz 1737)\" · mahmud-i--osmanli (TDV): \"11 Temmuz 1737'de Ruslar Özü'yü işgal ederken\" — ÇELİŞKİ: ESBE-TVR 2 Temmuz Jülyen = 13 Temmuz Gregoryen, VE yaklaşma 10 / hücum 12 (Jülyen) — TDV esas alındı",
  kesinlik:"başlangıç Kremençuk: kaynak geçişi Perevoloçna–Kremençuk ARALIĞINA koyuyor; Perevoloçna'nın tarihî yeri GeoNames'te bulunamadı (iki 'Perevolochna' kaydı başka bölgelerde), ok aralığın batı ucundan başlar",
  yol:[[33.40484,49.06253],[31.54505,46.61472]] },
{ id:"p0064-lacy-kirim-1737", ad:"Lacy'nin Arabat okundan Karasubazar'a seferi (1737)", tur:"sefer", sonuc:"yenilgi", taraf:"dusman", renk:"#0d7d8a",
  f:"1737-01-01", t:"1737-08-01",
  tarih_hassasiyet:"f: YIL (ESBE-TVR yalnız 'весной 1737 г.' — bu kolun çıkış ayı ve günü bulunamadı) · t: AY (TDV 'Ağustos 1737'; ESBE-TVR 'в конце июля' Jülyen ile uyumlu)",
  kaynak:"ESBE-TVR: \"Ласси, двинулась с Дона к Азовскому морю; затем, наступая по Арабатской косе, переправилась через Сиваш против устья р. Салгир и вторгнулась в Крым\" · \"В конце июля Ласси дошел до Карасубазара и овладел им\" · karasubazar (TDV): \"Rus birlikleri Ağustos 1737'de Karasubazar'a hücum ederek büyük tahribata sebep olmuşlardır\" (TDV komutanı General Douglas diyor) · kirim (TDV): \"Ruslar, Lascy idaresinde 1737 ve 1738 yıllarında da gelerek\"",
  kesinlik:"Geniçesk = Arabat okunun kuzey girişi (kaynak 'с Дона' diyor, Don'daki çıkış noktası adsız); Arabat oku noktası GeoNames 713236, Salgır ağzının ≈5 km karşısında",
  yol:[[34.80861,46.16824],[35.00992,45.69587],[35.00606,45.64778],[34.60386,45.05679]] },
{ id:"p0064-nadir-musul-1743", ad:"Nâdir Şah'ın Kerkük ve Erbil üzerinden Musul'a yürüyüşü (1743)", tur:"kusatma", sonuc:"zafer", taraf:"dusman", renk:"#0d7d8a",
  f:"1743-01-01", t:"1743-10-05",
  tarih_hassasiyet:"f: YIL (TDV kerkuk '1156'da (1743)'; musul--irak saldırıyı 'Şâban 1156 (Ekim 1743)' diye aylıyor, Kerkük'ün günü bulunamadı) · t: GÜN (4 Ekim 1743 hücumunun 'ertesi günü' kuşatma kalktı)",
  kaynak:"musul--irak (TDV): \"Şâban 1156'da (Ekim 1743) Nâdir Şah ansızın Irak topraklarına saldırdı. Kerkük ve Erbil'i işgal edip\" · \"en şiddetlisi 15 Şâban'da (4 Ekim 1743) oldu … ertesi gün kuşatmayı kaldırdı\" · kerkuk (TDV): \"1156'da (1743) 10.000 civarındaki ordusuyla Kerkük Kalesi önüne gelip\" — ÇELİŞKİ: savaslar.js SEFERLER 'Musul kuşatması' kaydı t:1743-10-23 ve Kerkük'ten önce iki kaynaksız istasyon taşıyor; Erbil'i göstermiyor",
  yol:[[44.39222,35.46806],[44.00943,36.19117],[43.11889,36.335]] }
];
