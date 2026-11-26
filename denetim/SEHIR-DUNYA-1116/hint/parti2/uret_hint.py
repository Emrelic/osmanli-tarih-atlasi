import json, os, sys
sys.stdout.reconfigure(encoding="utf-8")
TAR = "16 Kasım 2026"
BU = os.path.dirname(os.path.abspath(__file__))

def K(madde, yazar, cilt, yil, sayfa, slug):
    return (f"TDV İslâm Ansiklopedisi, «{madde}» md. ({yazar}), {cilt}, {yil}, s. {sayfa}, "
            f"https://islamansiklopedisi.org.tr/{slug} (TDV tam metin (tarayıcı), {TAR})")

def O(t, gun, k, b, kay, kes="yil", tanik=None):
    d = {"t": t, "gun": gun, "k": k, "b": b, "kesinlik": kes, "kaynak": kay}
    if tanik:
        d["tanik"] = tanik
    return d

GV = K("Gevâliyâr", "Khaliq Ahmad Nizami", "c. 14", 1996, "38-39", "gevaliyar")
LKN = K("Leknevtî", "Azmi Özcan", "EK-2. c.", 2019, "154-155", "leknevti")
LK = K("Leknev", "Azmi Özcan", "c. 27", 2003, "133", "leknev")
PT = K("Patna", "Azmi Özcan", "c. 34", 2007, "187-188", "patna")
BC = K("Bîcâpûr", "Arif Naim", "c. 6", 1992, "127-128", "bicapur")
AD = K("Âdilşâhîler", "Erdoğan Merçil", "c. 1", 1988, "384-386", "adilsahiler")
GK = K("Gûlkünde (Golkonda)", "Seyyid Athar Abbas Rizvî", "c. 14", 1996, "190", "gulkunde")
KB = K("Kutubşâhîler", "Enver Konukçu", "c. 26", 2002, "500", "kutubsahiler")
MH = K("Muhammedâbâd (= Bîder)", "Azmi Özcan", "c. 30", 2020, "582-583", "muhammedabad")
BP = K("Bopal (şehir)", "Enver Konukçu", "c. 6", 1992, "283-284", "bopal--sehir")

# koordinatlar gorev.tsv'den
koor = {}
for f in ("kuzey_gorev.tsv", "guney_gorev.tsv"):
    for ln in open(os.path.join(BU, "..", "parti1", f), encoding="utf-8").read().splitlines()[1:]:
        c = ln.split("\t")
        koor[c[2]] = (float(c[3]), float(c[4]))

out = []
def kayit(i, ad, atlas_ad, adlar, ilk, sahip, olay, ic_not, kur=None, dikis=None):
    la, lo = koor[atlas_ad]
    d = {"id": i, "ad": ad, "atlas_ad": atlas_ad, "lat": la, "lon": lo, "kat1900": None, "adlar": adlar,
         "ilk": ilk, "kur": kur, "ark": None, "bit": None, "sahip": sahip, "olay": olay, "ic_not": ic_not}
    if dikis:
        d["dikis_beyan"] = dikis
    out.append(d)

# ---------- GVALYAR ----------
q = "1022 yılında Gazneli Mahmud XV. Hint Seferi’ne çıkıp"
kay_gv22 = GV + " — aynı cümle: «...önce ona bağlı olan Gevâliyâr (Gwalior) Kalesi’ni kuşattı»"
kayit("gvalyar-in", "Gvalyar", "Gvalyar (Gwalior)", ["Gevâliyâr", "Gwalior"],
 {"t": "1022-01-01", "gun": "1022", "nicelik": "ilk_anilis", "kesinlik": "yil", "kaynak": kay_gv22, "tanik": q},
 [],
 [O("1022-01-01", "1022", "kusatma", "Gazneli Mahmud Kālincâr Racası Ganda'ya bağlı Gevâliyâr (Gwalior) Kalesi'ni kuşattı", kay_gv22, tanik=q),
  O("1196-01-01", "1196", "fetih", "Delhi Sultanı Kutbüddin Aybeg Gevâliyâr Kalesi'ni fethetti", GV,
    tanik="Kalenin fethi, Delhi Sultanı Kutbüddin Aybeg tarafından 1196 yılında gerçekleştirildi"),
  O("1231-01-01", "629 (1231)", "fetih", "İltutmış Gevâliyâr'ı yeniden fethedip kadı, kûtvâl ve emîr-i dâd tayin etti (Türkler önce burayı kaybetmişti)", GV,
    tanik="629’da (1231) İltutmış tekrar fethettiği Gevâliyâr’a kadı, kûtvâl ve emîr-i dâd tayin etmiştir"),
  O("1398-01-01", "1398", "fetih", "Timur'un istilâsı sırasındaki karışıklıkta Tûnvâr (Tonwar) Racpûtları Gevâliyâr'ı ele geçirdi", GV,
    tanik="Timur’un istilâsı sırasında (1398) bölgede çıkan karışıklıklardan faydalanan Tûnvâr (Tonwar) Racpûtları Gevâliyâr’ı ele geçirdiler"),
  O("1488-01-01", "1488", "diger", "Sultan Behlûl-i Lûdî kaleye yürüyüp Raca Mân Singh'i teslim olmaya zorladı (TDV: Tûnvâr Racpûtları kaleyi yine de 1518'e kadar elinde tuttu)", GV,
    tanik="1488 yılında Sultan Behlûl-i Lûdî kaleye yürüdü ve Raca Mân Singh’i teslim olmaya zorladı"),
  O("1542-01-01", "1542", "fetih", "Gevâliyâr Şîr Şah Sûr'un idaresine girdi", GV,
    tanik="1542’de Gevâliyâr’ın Şîr Şah Sûr’un idaresine girdiği"),
  O("1558-01-01", "1558", "fetih", "Gevâliyâr Ekber Şah'ın idaresine geçti", GV,
    tanik="1558 yılında Gevâliyâr Ekber Şah’ın idaresine geçti"),
  O("1777-01-01", "1777", "fetih", "Gevâliyâr Marata Sindhia hânedanından Mihrace Mahadaji'nin eline geçti", GV,
    tanik="Maratalar’ın Sindhia hânedanından Mihrace Mahadaji’nin eline geçti (1777)"),
  O("1886-01-01", "1886", "idari", "Gevâliyâr Sindhia Mihraceliği'nin başşehri oldu", GV,
    tanik="1886 yılından itibaren Gevâliyâr Sindhia Mihraceliği’nin başşehri oldu")],
 "Kaynak: TDV 'Gevâliyâr' TAM METİN. Çift teyit YOK (Nizami'nin atıfları, Cambridge History of India vb. açılamadı). ilk.t: TDV 'bölgenin ilk hâkimleri VI. yüzyılda Toramana ve oğlu Mihirkula' der (BÖLGE düzeyi, yüzyıl; kale/şehre bağlanmadı) — maddenin şehre/kaleye özgü EN ESKİ TARİHLİ olgusu 1022 kuşatmasıdır; Gevâliyâr'ın daha eski varlığı TDV'de tarihsiz (Gupta sonrası). Atlas Gvalyar'ı 0500'de alkhon ile başlatır; Toramana/Mihirkula (Alkhon) atlas iddiasıyla uyumludur ama TDV bunu şehre bağlamaz → sahip:[], 'atlas başlangıcı düzeltilmeli' uyarısı beklenir. TDV 1236-1240 Radıyye Begüm'ün gönderdiği ordu üzerine kalenin Cehâr Devâ'ya 'terkedilmesi' (yılı yazılmaz, aralık) ve 1251 Balaban hücumu, 'en az 1259'a kadar zaman zaman bağımsız' (sikkelerden) yazılmadı. 1518 Lûdî kuşatması ve Mân Singh'in elinden çıkışı kaynakta belirsiz anlatılır — zincire bağlanmadı.")

# ---------- GAUR (Lakhnautî) ----------
q_gaur = "Senâ hânedanına mensup Ballâl Sen (1108-1119) tarafından kurulan şehre Gavr (Gur) ve Cennetâbâd da denilir"
kayit("gaur-bd", "Gaur", "Gaur (Lakhnautî)", ["Gavr (Gur)", "Cennetâbâd", "Leknevtî (Lakhnautî)"],
 {"t": "1119-01-01", "gun": "1108-1119", "nicelik": "kurulus", "kesinlik": "onyil", "kaynak": LKN, "tanik": q_gaur},
 [{"f": "1119-01-01", "t": "1150-01-01", "d": "sena", "kesinlik": "onyil", "kaynak": LKN, "tanik": q_gaur,
   "ic_not": "Şehir Senâ hânedanından Ballâl Sen (1108-1119) tarafından kuruldu → sahip sena; f = kuruluş güvenli ucu (1119). TDV bu dilim için başka hâkim tanığı vermez; atlas 1150'de de sena ile başlar (aynı sahip, dikiş olay gerektirmez)."}],
 [O("1198-01-01", "594 (1198)", "fetih", "Gurlu kumandanı Muhammed Bahtiyâr Halacî Bengal bölgesini fethetti; Leknevtî adı tarihte ilk defa anılmaya başlandı", LKN,
    tanik="Bengal bölgesini fethetmesiyle (594/1198) tarihte ilk defa anılmaya başlandı"),
  O("1202-01-01", "598 (1202)", "diger", "Muhammed Bahtiyâr Halacî, Senâ hânedanının başşehri ve o dönemde küçük bir yerleşim yeri olan Gavr'ı kendisine merkez seçti", LKN,
    tanik="Gavr’ı kendisine merkez olarak seçti (598/1202)"),
  O("1227-01-01", "1227", "fetih", "İltutmış döneminde Şehzade Muhammed ve Melik İzzeddin şehri ele geçirdi; Leknevtî Halacîleri sona erdi, şehir Delhi Sultanlığı'na bağlandı", LKN,
    tanik="Leknevtî Delhi Sultanlığı’nın hâkimiyetine girdi (1227"),
  O("1538-01-01", "1538", "fetih", "Bâbürlü Hümâyun Afgan Şîr Şah'ı yenip Leknevtî'yi ele geçirdi ve adını Cennetâbâd koydu", LKN,
    tanik="Hümâyun 1538’de Afgan Şîr Şah’ı mağlûp ederek Leknevtî’yi ele geçirdi"),
  O("1575-01-01", "1575", "idari", "Bâbürlüler şehri tekrar eyalet merkezi yaptı (aynı yıl sel ve salgınla büyük tahribat)", LKN,
    tanik="1575’te Bâbürlüler tarafından tekrar eyalet merkezi haline getirilen şehir")],
 "Kaynak: TDV 'Leknevtî' TAM METİN (madde başlığı Leknevtî; 'Gavr (Gur) ve Cennetâbâd da denilir' — Gaur ile aynı şehir, TDV eşitlemesi açık). Çift teyit YOK (Eaton, Banglapedia açılmadı). kur/ilk: Ballâl Sen'in hükümdarlık aralığı 1108-1119 (TDV parantezi) — kuruluş günü/yılı TDV'de yok; 'güvenli uç' 1119 alındı (daha erken olabilir). ÇELİŞKİ-benzeri: TDV ayrıca 'Leknevtî 594/1198 Bahtiyâr fethiyle tarihte ilk defa anılmaya başladı' der; bu AD (Leknevtî) için ilk anılıştır, Gavr kuruluşu (1108-1119) kuruluş olarak esas alındı; Gavr 1202'de 'küçük bir yerleşim yeri'. Atlas Gaur'u 1150'de sena ile başlatır; ilk.t 1119 < 1150 → atlas başlangıcı 1119'a çekilebilir (KASA). Sena künyesi 1095-1260. TDV: İlyasşâhîler (1345-1487) hâkimiyeti, merkezin Pandua'ya taşınması, 1704 Mürşidâbâd'a eyalet merkezi taşıması tarihleri zincire bağlanmadı (atlas zinciri esastır).",
 kur={"t": "1119-01-01", "gun": "1108-1119", "kesinlik": "onyil", "kaynak": LKN, "tanik": q_gaur})

# ---------- LEKNEV ----------
q_lk = "Leknev’in (Lucknow, Lakhnau) bilinen tarihi XIII. yüzyılın başlarına kadar gider"
kayit("leknev-in", "Leknev", "Leknev (Lucknow)", ["Lakhnau", "Lucknow", "Leknev"],
 {"t": "1233-01-01", "gun": "13. yüzyıl başı", "nicelik": "ilk_anilis", "kesinlik": "yuzyil", "kaynak": LK, "tanik": q_lk},
 [{"f": "1233-01-01", "t": "1281-01-01", "d": "__BOSLUK__", "kesinlik": "yuzyil", "kaynak": LK + " — dilim için sahip tanığı yok",
   "ic_not": "TDV 1233 (XIII. yy başı) ile 1281 arası Leknev'in sahibini vermez; Delhi Sultanlığı'nın eline geçişi yalnız 1394-1478 Şarkî hâkimiyetinden SONRA anlatılır (tarihsiz)."}],
 [O("1394-01-01", "1394", "fetih", "Leknev Şarkî Sultanlığı'nın hâkimiyetine girdi (1394-1478)", LK,
    tanik="1394-1478 yılları arasında Şarkî Sultanlığı’nın hâkimiyetinde kalan şehir"),
  O("1478-01-01", "1478", "kayip", "Şarkî hâkimiyeti sona erdi; şehir daha sonra Delhi Sultanlığı'nın, Hümâyun Şah zamanında Bâbürlüler'in eline geçti (Ekber Şah Ayodha eyaletine bağladı; bu geçişlerin yılı TDV'de yok)", LK,
    tanik="1394-1478 yılları arasında Şarkî Sultanlığı’nın hâkimiyetinde kalan şehir"),
  O("1775-01-01", "1775", "idari", "Eved Nevvâb hânedanının kurucusu Âsafüddevle Leknev'i kendisine merkez yaptı", LK,
    tanik="Âsafüddevle Leknev’i kendisine merkez yaptı (1775)"),
  O("1819-01-01", "1819", "idari", "İngilizler son Eved Nevvâbı Gāzîüddin Haydar'ı kral ilân edince Leknev kraliyet başşehri oldu", LK,
    tanik="İngilizler 1819’da son Eved Nevvâbı Gāzîüddin Haydar’ı kral ilân edince"),
  O("1856-01-01", "1856", "ilhak", "Bölge İngiliz idaresine girdi (1857 ayaklanmasında Leknev'de şiddetli çarpışmalar, İngilizlerin muhasarası)", LK,
    tanik="Bölgenin 1856’da İngiliz idaresine girmesi üzerine"),
  O("1916-12-01", "Aralık 1916", "antlasma", "Hindistan Kongre Partisi ile Hindistan Müslümanları Birliği arasındaki ittifak (Leknev Paktı) Leknev'de imzalandı", LK, kes="ay",
    tanik="Aralık 1916’da burada imzalandı")],
 "Kaynak: TDV 'Leknev' TAM METİN. Çift teyit YOK. ilk.t: 'bilinen tarihi XIII. yüzyılın başlarına kadar gider' — 'başlarına' için yüzyıl hassasiyeti, aralığın güvenli ucu (1233) alındı (1201-1233). Atlas Leknev'i 1281'de delhi-sultanligi ile başlatır; TDV Delhi Sultanlığı hâkimiyetini yalnız Şarkî döneminden (1394-1478) SONRA anlatır → atlasın 1281 iddiası TDV'de dayanaksızdır (dikis_beyan). TDV: 1784 Bârâ İmambârâ, 1479 tarihli Şeyh Muhammed Türbesi mimari tanıktır, zincire bağlanmadı.",
 dikis="Atlas Leknev'i 1281-01-01'de delhi-sultanligi ile başlatır; TDV 'Leknev' maddesi 1233-1281 arasını ve Delhi Sultanlığı'nın XIII. yy hâkimiyetini tarihli vermez (Delhi Sultanlığı'na geçiş Şarkî dönemi 1394-1478'den 'sonra'); kaynak bulunamadı, yer tutucu olay yazılmadı.")

# ---------- PATNA ----------
q_pt = "şehrin tarihi milâttan önce V. yüzyıla kadar gitmektedir"
kayit("patna-in", "Patna", "Patna (Azîmâbâd)", ["Pataliputra", "Palibothra", "Kusumpur", "Pushpapura", "Azîmâbâd", "Patna"],
 {"t": "-0400-01-01", "gun": "MÖ 5. yüzyıl", "nicelik": "ilk_anilis", "kesinlik": "yuzyil", "kaynak": PT, "tanik": q_pt},
 [{"f": "-0400-01-01", "t": "-0363-01-01", "d": "__BOSLUK__", "kesinlik": "yuzyil", "kaynak": PT + " — dilim için sahip tanığı yok",
   "ic_not": "TDV Pataliputra'nın MÖ V. yy'a giden tarihini söyler ama hâkim hânedanı (Haryanka/Şişunaga) adını vermez; Nanda künyesi atlas başlangıcı -0363'te başlar."}],
 [O("1541-01-01", "1541", "idari", "Afgan Şîr Şah Sûr Patna'yı Bihâr eyaletinin merkezi yaptı, kale ile tahkim etti", PT,
    tanik="Afgan Şîr Şah Sûr, 1541’de burayı Bihâr eyaletinin merkezi haline getirerek"),
  O("1574-01-01", "1574", "ilhak", "Patna Ekber Şah tarafından Bâbürlü topraklarına katıldı", PT,
    tanik="1574’te Ekber Şah tarafından Bâbürlü topraklarına katılan Patna daha da gelişti"),
  O("1620-01-01", "1620", "diger", "İngilizler Patna'da temsilcilik açtı", PT, tanik="İngilizler 1620’de burada bir temsilcilik açtı"),
  O("1704-01-01", "1704", "diger", "Bihâr Valisi Azîmüşşân şehrin adını Azîmâbâd yaptı", PT,
    tanik="Azîmüşşân şehrin adını 1704 yılında Azîmâbâd olarak değiştirdi"),
  O("1921-01-01", "1921", "diger", "İngilizler şehrin adını yeniden Patna'ya çevirdi", PT,
    tanik="1921’de İngilizler tarafından şehrin adı tekrar Patna’ya çevrildi")],
 "Kaynak: TDV 'Patna' TAM METİN. Çift teyit YOK. ilk.t: TDV 'şehrin tarihi milâttan önce V. yüzyıla kadar gitmektedir' (ilk adı Pataliputra) — yüzyıl düzeyinde ikincil TDV beyanı, birincil tanık (Megasthenes vb.) yazılmadı; MÖ 5. yy için güvenli uç MÖ 401 (-0400). Eşitleme (Pataliputra = Patna) TDV'de açık. Antik Pataliputra kalıntılarının (Kumrahar) modern noktadan uzaklığı ÖLÇÜLMEDİ (>3 km ise antik kayıt ayrılmalı). Atlas başlangıcı -0363 nanda: TDV'de dayanak yok (dikis_beyan). TDV: Buddha'nın MÖ IV. yy ziyareti, MS IV. yy Gupta dönemi önemi (yüzyıl, tarihsiz sahiplik), 1739 Nâdir Şah sonrası göç, 1857 ayaklanma zincire bağlanmadı.",
 dikis="Atlas Patna'yı -0363-01-01'de nanda ile başlatır; TDV 'Patna' maddesi MÖ V. yy'dan sonra Gupta (MS IV. yy) dönemine atlar, Nanda hâkimiyetini tarihlemez; kaynak bulunamadı, yer tutucu olay yazılmadı.")

# ---------- BÎCÂPÛR ----------
q_bc = "Yûsuf Âdil, 1489’da adına hutbe okutarak Bîcâpûr’da bağımsızlığını ilân etti"
kayit("bicapur-in", "Bîcâpûr", "Bîcâpur (Bijapur)", ["Vicayapura", "Bîcâpûr", "Bijapur"],
 {"t": "1489-01-01", "gun": "1489", "nicelik": "ilk_anilis", "kesinlik": "yil", "kaynak": AD, "tanik": q_bc},
 [],
 [O("1489-01-01", "1489", "kurulus", "Behmenî valisi Yûsuf Âdil Bîcâpûr'da adına hutbe okutarak bağımsızlığını ilân etti; Âdilşâhîler Devleti'ni kurdu, Bîcâpûr'a kale yaptırıp başşehri yaptı", AD, tanik=q_bc),
  O("1636-01-01", "1636", "vassal", "Âdilşâhîler Bâbürlü hâkimiyetini tanıyan bir barışa zorlandı (1631'den beri Bâbürlü istilâsı)", AD,
    tanik="1636’da Âdilşâhîler Bâbürlü hâkimiyetini tanıyan bir barışa zorlandılar"),
  O("1686-09-22", "4 Zilkade 1097 / 22 Eylül 1686", "fetih", "Bir yıldan fazla süren kuşatmadan sonra Bîcâpûr Bâbürlülere teslim oldu; Sikender Âdilşah esir düştü", AD, kes="gun",
    tanik="şehir Bâbürlüler’e teslim oldu; bu arada hükümdar da esir düştü (4 Zilkade 1097/22 Eylül 1686)"),
  O("1724-01-01", "1724", "ilhak", "Bîcâpûr Haydarâbâd Nizamı'nın hâkimiyet bölgesine katıldı", BC,
    tanik="1724’te Haydarâbâd nizamının hâkimiyet bölgesine katılan Bîcâpûr"),
  O("1760-01-01", "1760", "diger", "Bîcâpûr 6 milyon rupi karşılığında Maratalara bırakıldı (sonra İngilizlere geçti)", BC,
    tanik="1760’ta 6 milyon rupi karşılığında Maratalar’a bırakıldı")],
 "Kaynak: TDV 'Bîcâpûr' + 'Âdilşâhîler' TAM METİN (1489, 1636 ve 22 Eylül 1686 Âdilşâhîler maddesinden; 1724 ve 1760 Bîcâpûr maddesinden; Bîcâpûr maddesi 1489 ve 1686 yıllarını da verir, iki madde ve iki yazar tutarlı; ikisi de TDV olduğundan bağımsız çift teyit sayılmadı). Çift teyit YOK. Bîcâpûr maddesi: '1190 yılından itibaren bir asır Yadava Krallığı yönetimi altında kalan BÖLGE, 1294'te Alâeddin Halacî tarafından Delhi sultanı amcası adına fethedildi' — BÖLGE düzeyi; şehir/kale tarihlenmediği için ilk.t olarak alınmadı, atlasın 1281 yadava başlangıcıyla TDV bölge düzeyinde yaklaşık uyumludur (Yadava künyesi 1187-1318) → atlas başlangıcı şehir için TDV'de dayanaksız ('düzeltilmeli' uyarısı beklenir). ilk.t: şehre özgü ilk TARİHLİ olgu (1489). 1656-57 Evrengzîb muhasarası (1067), 1537 barış, 1514 savaş, 1688 veba, 1864 zincire bağlanmadı.")

# ---------- GOLKONDA ----------
q_gk = "1363 yılında Behmenî Sultanı I. Muhammed Şah’ın önünden kaçan raca Kanhayya tarafından müslümanlara bırakıldı"
kayit("golkonda-in", "Golkonda", "Golkonda", ["Gûlkünde", "Golkonda"],
 {"t": "1363-01-01", "gun": "1363", "nicelik": "ilk_anilis", "kesinlik": "yil", "kaynak": GK, "tanik": q_gk},
 [],
 [O("1363-01-01", "1363", "fetih", "Varangal Racalığı'nın merkezi olan Hindu kalesi Gûlkünde, Behmenî Sultanı I. Muhammed Şah'ın önünden kaçan raca Kanhayya tarafından müslümanlara bırakıldı", GK, tanik=q_gk),
  O("1496-01-01", "1496", "idari", "Sultan Kulı (Kutbülmülk) Gûlkünde'ye (Golkonda) sahip oldu; Batı Tilangāna valiliğine tayin edildi", KB,
    tanik="Hindistan’ın en meşhur şehirlerinden olan Gûlkünde’ye (Golkonda) sahip oldu (1496)"),
  O("1512-01-01", "1512", "kurulus", "Kulı Kutbülmülk bağımsızlığını ilân etti; Gûlkünde Kutubşâhîler'in başşehri oldu", GK,
    tanik="Kulı Kutbülmülk’ün 1512’de bağımsızlığını ilân etmesinden sonra da Kutubşâhîler’in başşehri oldu"),
  O("1591-01-01", "1590-1591", "idari", "Muhammed Kulı Kutubşah Haydarâbâd'ı kurup devletin merkezini 8 km uzağa taşıdı (Gûlkünde başşehirlikten çıktı)", GK,
    tanik="Haydarâbâd’ı kurup devletin merkezini buraya taşımasına (1590-1591)"),
  O("1687-09-21", "14 Zilkade 1098 / 21 Eylül 1687", "fetih", "Bâbürlü Hükümdarı Evrengzîb sekiz ay süren kuşatmanın sonunda Gûlkünde'yi ele geçirdi", GK, kes="gun",
    tanik="14 Zilkade 1098’de (21 Eylül 1687) Bâbürlü Hükümdarı Evrengzîb tarafından")],
 "Kaynak: TDV 'Gûlkünde' (Golkonda md. 'bk. Gûlkünde' yönlendirmesidir; ALIAS çözüldü) + 'Kutubşâhîler' TAM METİN. 1687-09-21 iki TDV maddesinde aynıdır (Gûlkünde ve Kutubşâhîler: 14 Zilkade 1098/21 Eylül 1687) — aynı yayının iç tutarlılığı, bağımsız çift teyit sayılmadı. Çift teyit YOK. ilk.t: TDV 'eski bir Hindu kalesi ... Varangal Racalığı'nın merkezi iken' der (tarihsiz); kaleye özgü EN ESKİ TARİHLİ olgu 1363. TDV 'Kutubşâhîler' 1496'da Sultan Kulı'nın Golkonda'ya sahip olduğunu, 'Gûlkünde' ise 1512 bağımsızlığını anlatır — iki ayrı olgu (valilik ve bağımsızlık), çelişki sayılmadı. Atlas Golkonda'yı 1281'de kakatiya (künye 1163-1323) ile başlatır: TDV Varangal=Kakatiya merkezini tarihsiz verir; 1363 öncesi için dayanak yok → atlas başlangıcı ('düzeltilmeli' uyarısı beklenir, KASA). Kutubşâhî tanıkları (Talikota 5 Ocak 1565 vb.) bölge olayıdır, yazılmadı.")

# ---------- BÎDAR ----------
q_bd = "Bîder 722’de (1322) Muhammed b. Tuğluk tarafından fethedildi"
kayit("bidar-in", "Bîdar", "Bîdar", ["Bîder", "Muhammedâbâd (1424-)", "Bîdar"],
 {"t": "1322-01-01", "gun": "722 (1322)", "nicelik": "ilk_anilis", "kesinlik": "yil", "kaynak": MH, "tanik": q_bd},
 [],
 [O("1322-01-01", "722 (1322)", "fetih", "Bîder Muhammed b. Tuğluk tarafından fethedildi", MH, tanik=q_bd),
  O("1424-01-01", "827 (1424)", "idari", "Behmenî Sultanı I. Ahmed yönetim merkezini Ahsenâbâd'dan (Gülberge) Bîder'e taşıdı ve adını Muhammedâbâd yaptı", MH,
    tanik="827 (1424) yılında Behmenî Sultanı I. Ahmed yönetim merkezini Ahsenâbâd’dan (Gülberge) buraya taşıdı"),
  O("1492-01-01", "897 (1492)", "fetih", "Şehir Berîdşâhîler'in eline geçti", MH, tanik="897’de (1492) Berîdşâhîler’in"),
  O("1619-01-01", "1028 (1619)", "fetih", "Şehir Âdilşâhîler'in eline geçti", MH, tanik="1028’de (1619) Âdilşâhîler’in"),
  O("1657-01-01", "1067 (1657)", "fetih", "Şehir Bâbürlüler'in eline geçti; XVIII. yy başında Haydarâbâd Nizamlığı'na bağlandı (yıl yok)", MH,
    tanik="1067’de (1657) Bâbürlüler’in eline geçen şehir")],
 "Kaynak: TDV 'Muhammedâbâd' TAM METİN (madde 'Bîder bk. Muhammedâbâd' ALIAS'ıdır; maddenin Dekken/Karnataka bölümü Bîder'i anlatır). Çift teyit YOK. Hicrî-milâdî eşlemeleri TDV'nin kendi parantezleridir (722=1322, 827=1424, 897=1492, 1028=1619, 1067=1657) — çeviri yapılmadı. ilk.t: şehre özgü EN ESKİ TARİHLİ olgu 1322 (fetih); önceki varlığı TDV'de yok. Atlas Bîdar'ı 1281'de kakatiya (künye 1163-1323) ile başlatır; 1322 fethi Muhammed b. Tuğluk (Delhi) tarafından, Kakatiya künyesinin 1323 bitişiyle uyumlu görünür ama TDV Bîder'in Kakatiya'ya ait olduğunu söylemez → atlas başlangıcı TDV'de dayanaksız ('düzeltilmeli' uyarısı beklenir). TDV: 1429 kale, 1472 Mahmûd-ı Gâvân medresesi, 1699 yıldırım, 1956 Meysûr eyaletine katılım zincire bağlanmadı.")

# ---------- BHOPÂL ----------
q_bp = "Bopal şehri 1728’de, devletin de bânisi olan Dost Muhammed Han tarafından kurulmuştur"
kayit("bhopal-in", "Bhopâl", "Bhopâl", ["Bopal", "Bhopal"],
 {"t": "1728-01-01", "gun": "1728", "nicelik": "kurulus", "kesinlik": "yil", "kaynak": BP, "tanik": q_bp},
 [],
 [O("1728-01-01", "1728", "kurulus", "Bopal şehri devletin de bânisi olan Dost Muhammed Han tarafından kuruldu", BP, tanik=q_bp)],
 "Kaynak: TDV 'Bopal (şehir)' TAM METİN (Enver Konukçu; 'Bopal (devlet)' maddesi ayrı, okunup bu kayda bağlanmadı). Çift teyit YOK. Atlas Bhopâl noktasını 1707'de 'bhopal' ile başlatır (künye 1708-1949); şehir 1728'de kurulduğundan atlas başlangıcı şehir için 21 yıl erkendir (KASA: bhopal devleti 1708 künyesi ile şehir kuruluşu ayrı tutulmalı). TDV: 1816-1820 Nezir Muhammed Han imarı (Pindârî yıkımından sonra), 1956 Medya Pradeş merkezi, 3 Aralık 1984 gaz kazası zincire bağlanmadı.")

kamu = {}
json.dump(out, open(os.path.join(BU, "yeni.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
q = []
SL = {"gvalyar-in": "gevaliyar", "gaur-bd": "leknevti", "leknev-in": "leknev", "patna-in": "patna", "bhopal-in": "bopal--sehir"}
# tanik listesi: (id, tanik, kaynak-slug) — kaynak alanında geçen slug'dan türet
import re
def slug_of(kay):
    m = re.search(r"org\.tr/([a-z0-9_-]+)", kay or "")
    return m.group(1) if m else None
for k in out:
    for a in ("ilk", "kur"):
        v = k.get(a)
        if v and v.get("tanik"): q.append([slug_of(v["kaynak"]), v["tanik"]])
    for v in k["sahip"] + k["olay"]:
        if v.get("tanik"): q.append([slug_of(v["kaynak"]), v["tanik"]])
json.dump(q, open(os.path.join(BU, "tanik_hint.json"), "w", encoding="utf-8"), ensure_ascii=False)
print(len(out), len(q), "kelime>15:", [x for x in q if len(x[1].split()) > 15])
