# -*- coding: utf-8 -*-
"""koja2 ciktilarini uretir (kunye_yeni.js, kronoloji_cok_dogu_koja2.js, kronoloji_sinir_dogu_koja2.js,
yerlesimler_dogu_koja2.js, yama_koja2.js). Elle yazilan veri bu dosyadadir; tarihler ganzhi ile dogrulanir."""
import json, sys, os
sys.path.insert(0, r'C:\atlas\.claude\worktrees\dogu\denetim\dogu\cin3')
from _gzlib import gunadi, greg
OUT = r'C:\atlas\.claude\worktrees\dogu\denetim\dogu\koja2'

def tk(t, g):
    assert gunadi(t) == g, (t, g, gunadi(t))
    return 'Ay-günes takvimi gün adı (ganzhi) %s -> Jülyen %s (JDN hesabı, sınama: 乙巳 = 960-02-04; 戊申 = 1135-01-19 KOJA_REF ile uyumlu); Gregoryen karsiligi %s' % (g, t, greg(t))

def w(name, var, data, head):
    with open(os.path.join(OUT, name), 'w', encoding='utf-8') as f:
        f.write('// -*- coding: utf-8 -*-\n' + head + '\nwindow.' + var + ' = ' + json.dumps(data, ensure_ascii=False, indent=1) + ';\n')

# ---------------- kaynak metinleri ----------------
AK1 = "Azuma Kagami j.1 — ja.wikisource.org/wiki/吾妻鏡/第一 (okundu): «治承四年「庚子」十月小十五日甲午。武衛始入御鎌倉御亭。此間為景義奉行所令修理也。»"
AK5_12 = "Azuma Kagami j.5 — zh.wikisource.org/wiki/吾妻鏡/卷005 (okundu): «文治元年(1185)十一月大十二日辛夘。…因幡前司廣元申云。…毎國衙庄園。被補守護地頭者。強不可有所怖。早可令申請給云々。二品殊甘心。以此儀治定。»"
AK5_28 = "Azuma Kagami j.5 — zh.wikisource.org/wiki/吾妻鏡/卷005 (okundu): «文治元年(1185)十一月大廿八日丁未。補任諸國平均守護地頭。不論權門勢家庄公。可宛課兵粮米段別五升之由。今夜。北條殿謁申藤中納言經房卿云々。»"
AK5_29 = "Azuma Kagami j.5 — zh.wikisource.org/wiki/吾妻鏡/卷005 (okundu): «文治元年(1185)十一月大廿九日戊申。北條殿所被申之諸國守護地頭兵粮米事。早任申請可有御沙汰之由被仰下之間。師中納言被傳勅於北條殿云々。»"
AK1_YOSHI = "Azuma Kagami j.1 — zh.wikisource.org/wiki/吾妻鏡/卷001 (okundu): «此主者…恃秀衡之猛勢。下向于奥州。歴多年也。而今傳聞武衛被遂宿望之由。欲進發之處。秀衡強抑留之間。密々遁出彼舘首途。秀衡失恪惜之術。追而奉付繼信忠信兄弟之勇士云々。» (aynı girişin sonunda: «治承四年十月廿一日 源朝臣» Mishima bağış belgesi)"
AK2_HID = "Azuma Kagami j.2 — zh.wikisource.org/wiki/吾妻鏡/卷002 (okundu): «養和元年八月小十三日丁巳。藤原秀衡可令追討武衛也。平資長可追討木曾次郎義仲之由宣下。是平氏之依申行也。»"
HYK_HID = "Hyakurenshō j.9 — zh.wikisource.org/wiki/百錬抄/第九 (okundu): «○十四日。被下北陸道追討宣旨。○十五日。以藤原秀衡任陸奧守。以平助職任越後守。爲追討賴朝也。»"
AK3_ICHI4 = "Azuma Kagami j.3 — zh.wikisource.org/wiki/吾妻鏡/卷003 (okundu): «壽永三年二月大四日癸亥。平家日來相從西海山陰兩道軍士數万騎。搆城郭於攝津与播磨之境一谷。»"
AK3_ICHI7 = "Azuma Kagami j.3 — zh.wikisource.org/wiki/吾妻鏡/卷003 (okundu): «壽永三年二月大七日丙寅。…源九郎主先引分殊勇士七十餘騎。着于一谷後山号鵯越…» ve «二月大十五日甲戌。…前内府宗盛已下浮海上赴四國方。»"
GR16 = "Goryeosa j.16 Injong 13-14 — zh.wikisource.org/wiki/高麗史/卷十六 (okundu): "
GR_DW_A = GR16 + "«十三年春正月乙巳朔…辛亥，以金富軾爲元帥，討之。»"
GR_DW_B = GR16 + "«乙丑，詔曰：…致有西都之亂…。西人斬妙淸及柳旵，遣分司大附卿尹瞻，請降。辛未，西京趙匡，復叛。»"
GR_DW_C = GR16 + "«十四年…夏四月己亥朔，…庚子，金富軾凱還，王謁景靈殿，告平西賊。五月甲戌，…己卯，以西京平赦。»"
SSG_M = "Samguk sagi j.26 Baekje bongi 4 (Munju-wang) — zh.wikisource.org/wiki/三國史記/卷26 (okundu): «二年，…夏四月，耽羅國獻方物，王喜，拜使者為恩率。» (zh.wikisource notu: metinde «躭羅» yazımı)"
SSG_D = "Samguk sagi j.26 Baekje bongi 4 (Dongseong-wang) — zh.wikisource.org/wiki/三國史記/卷26 (okundu): «二十年，…八月，王以耽羅不修貢賦，親征，至武珍州。耽羅聞之，遣使乞罪，乃止。»"
SSG_S = "Samguk sagi j.6 Silla bongi 6 (Munmu-wang 2. yıl) — zh.wikisource.org/wiki/三國史記/卷06 (okundu): «耽羅國主佐平徒冬音律來降。耽羅自武德以來，臣屬百濟，故以佐平爲官號，至是，降爲屬國。»"
GR_T938 = "Goryeosa j.2 Taejo 21 — zh.wikisource.org/wiki/高麗史/卷二 (okundu): «(戊戌)二十一年…冬十二月，耽羅國太子末老來朝，賜星主王子爵。»"
GR57 = "Goryeosa j.57 Jiri-ji 2, Tamna-hyeon — zh.wikisource.org/wiki/高麗史/卷五十七 (okundu): «太祖二十一年，耽羅國太子末老來朝，賜星主、王子爵。肅宗十年，改乇羅，爲耽羅郡。毅宗時，爲縣令官。…元宗十一年，逆賊金通精，領三別抄，入據作亂，越四年，王命金方慶，討平之。忠烈王三年，元爲牧馬場。二十年，王朝元，請還耽羅，…以耽羅，還隷于我。翊年。乙未，改爲濟州»"
GR26 = "Goryeosa j.26 Wonjong 11 — zh.wikisource.org/wiki/高麗史/卷二十六 (okundu): "
GR_SB_1 = GR26 + "«六月己巳朔，將軍裴仲孫，指諭盧永禧等領三別抄叛，逼承化侯溫爲王，署置官府，以大將軍劉存奕，尙書左丞李信孫爲左右承宣。»"
GR_SB_2 = GR26 + "«八月戊辰朔，…丙戌，三別抄入據珍島，侵掠州郡。»"
GR_SB_3 = GR26 + "«冬十月…十一月己亥，賊陷濟州。閏月乙酉，…»"
GR27 = "Goryeosa j.27 Wonjong 12-14 — zh.wikisource.org/wiki/高麗史/卷二十七 (okundu): "
GR_SB_4 = GR27 + "«(辛未)十二年…五月癸亥朔，…丁丑，金方慶、忻都、茶丘、熙、雍等率三軍，討珍島，大破之，斬僞王承化侯溫。賊將金通精，率餘衆，竄入耽羅。»"
GR_SB_5 = GR27 + "«(癸酉)十四年…夏四月癸未朔，…庚戌，金方慶與忻都、茶丘等，以全羅道一百六十艘、水陸兵一萬餘人至耽羅，與賊戰，殺獲甚衆，賊衆大潰。斬金元允等六人，…於是賊悉平，使將軍宋甫演等，留鎭而還。»"
GR_YU = GR27 + "«(癸酉)十四年…六月壬午朔，…閏月丙辰，耽羅留鎭將軍宋甫演，得賊魁金通精屍，以聞。又搜捕賊將金革正、李奇等七十餘人，送于茶丘，皆殺之。元置達魯花赤于耽羅。己未，…»"
CSK = "Haneji Chōshū, Ryūkyū-koku Chūzan seikan (1650) — ja.wikisource.org/wiki/琉球國中山世鑑/"
CS2 = CSK + "卷二 (okundu): "
CS1 = CSK + "卷一 (okundu): "

K = []   # kron_cok
S = []   # sinir

def m(t, b, tur, onem, yer, taraflar, d, kaynak, gun, kes, etiket, ic_not=None, takv=None, kapsam='dis', dunya=1):
    x = {"t": t, "b": b, "tur": tur, "onem": onem, "dunya": dunya, "kapsam": kapsam, "etiket": etiket, "yer": yer,
         "taraflar": taraflar, "d": d, "kaynak": kaynak, "gun": gun, "kesinlik": kes}
    if ic_not: x["ic_not"] = ic_not
    if takv: x["ic_not_takvim"] = takv
    return x

# ---------------- DAEWI ----------------
K += [
 m("1135-01-22", "Goryeo, Kim Bu-sik'i başkomutan atayıp Seogyeong isyanının üzerine gönderdi", "savas", 3, "Seogyeong (Pyongyang)",
   ["goryeo", "daewi-myocheong"], "İnjong'un hükümeti Myocheong'un Seogyeong'de Daewi'yi ilan etmesinden üç gün sonra Kim Bu-sik'i (金富軾) isyan ordusunun başına atadı.",
   GR_DW_A, "Injong 13. yıl 1. ay 7. gün (辛亥)", "gun", ["konu-askeri", "dogu-500-1281"], takv=tk("1135-01-22", "辛亥")),
 m("1135-02-05", "Seogyeong halkı Myocheong ve Yu Cham'ı öldürüp teslim olmak istedi", "isyan", 3, "Seogyeong (Pyongyang)",
   ["daewi-myocheong", "goryeo"], "Goryeosa'ya göre Seogyeong'dekiler Myocheong'u ve Yu Cham'ı öldürüp bölge görevlisi Yun Cheom'u teslim talebiyle gönderdi; ancak Jo Gwang kısa süre sonra yeniden isyan etti.",
   GR_DW_B, "Injong 13. yıl 1. ay, 21. (乙丑) ile 27. (辛未) günleri arası; cümle günsüz", "ay", ["konu-siyasi", "dogu-500-1281"],
   ic_not="Cümle 乙丑 (1135-02-05) ve 辛未 (1135-02-11) girişleri arasında yer alır ve kendi günü yoktur; tarih ilk sınır olan 02-05'e konmuştur (kesinlik ay). Bu olaydan sonra 辛未'de Jo Gwang'ın yeniden isyanı yazılıdır: Daewi/Seogyeong isyan rejimi kesintisiz sürmüş sayılmıştır.",
   takv=tk("1135-02-05", "乙丑")),
 m("1135-02-11", "Jo Gwang Seogyeong'de yeniden isyan etti", "isyan", 3, "Seogyeong (Pyongyang)", ["daewi-myocheong", "goryeo"],
   "Myocheong'un ölümünden sonra teslim olma girişimi sürmezken Jo Gwang (趙匡) yeniden isyan edip Seogyeong'i elinde tuttu; kuşatma 1136'ya dek sürdü.",
   GR_DW_B, "Injong 13. yıl 1. ay 27. gün (辛未)", "gun", ["konu-askeri", "dogu-500-1281"], takv=tk("1135-02-11", "辛未")),
 m("1136-05-05", "Kim Bu-sik Seogyeong'i aldıktan sonra Kaesong'a zaferle döndü", "savas", 2, "Kaesong", ["goryeo"],
   "Seogyeong'in düşüşünden sonra Kim Bu-sik başkente döndü; kral atalar tapınağına zaferi bildirdi.",
   GR_DW_C, "Injong 14. yıl 4. ay 2. gün (庚子)", "gun", ["konu-askeri", "dogu-500-1281"], takv=tk("1136-05-05", "庚子")),
 m("1136-06-13", "Goryeo Seogyeong'in yatıştırılması üzerine genel af ilan etti", "siyaset", 2, "Seogyeong (Pyongyang)", ["goryeo"],
   "Kral Injong, Seogyeong'in sakinleşmesi nedeniyle af fermanı yayımladı; Daewi sonrası bölge Goryeo idaresine döndü.",
   GR_DW_C, "Injong 14. yıl 5. ay (己卯 günü)", "gun", ["konu-siyasi", "dogu-500-1281"], takv=tk("1136-06-13", "己卯"),
   ic_not="Ay başlığı «五月甲戌», giriş günü 己卯; ay içi sıra günü hesaplanmadı, tarih ganzhi ile Jülyen'e çevrildi (yaklaşık aralık 29 gün içinde tek eşleşme)."),
]
# ---------------- TAIRA ----------------
K += [
 m("1184-03-17", "Taira güçleri Ichi-no-Tani'de surlar kurup toplandı", "siyaset", 2, "Ichi-no-Tani (Settsu-Harima sınırı)", ["taira-rejimi"],
   "Batı Denizi (Saikai) ve San'in yolu askerleri Settsu ile Harima sınırındaki Ichi-no-Tani'de kale kurdu; Taira rejimi Kiyomori'nin ölüm yıldönümünü orada andı.",
   AK3_ICHI4, "Juei 3. yıl 2. ay 4. gün (癸亥)", "gun", ["konu-askeri", "dogu-500-1281"], takv=tk("1184-03-17", "癸亥")),
 m("1184-03-20", "Ichi-no-Tani Savaşı: Minamoto kuvvetleri Taira kalesini aldı", "savas", 4, "Ichi-no-Tani", ["kamakura", "taira-rejimi"],
   "Minamoto no Yoshitsune Hiyodorigoe geçidinden kaleyi arkadan vurdu; Taira Munemori ve ailesi denizden Shikoku yönüne çekildi, çok sayıda Taira komutanı öldü.",
   AK3_ICHI7, "Juei 3. yıl 2. ay 7. gün (丙寅)", "gun", ["konu-askeri", "dogu-500-1281"], takv=tk("1184-03-20", "丙寅"),
   ic_not="Taraf kimliği «kamakura»: Azuma Kagami'de Minamoto cephesi Yoritomo adına savaşır; Kamakura künye f (1185-12-22) kurumsal tarihtir, fiilî iktidar 1180'den (KOJA_REF.json)."),
]
# ---------------- OSHU FUJIWARA ----------------
K += [
 m("1180-11-10", "Minamoto no Yoshitsune Hidehira'nın himayesinden ayrılıp Yoritomo'ya katıldı", "siyaset", 3, "Hiraizumi", ["oshu-fujiwara", "kamakura"],
   "Yoshitsune yıllarca Fujiwara no Hidehira'nın korumasında Mutsu'da kalmıştı; Yoritomo'nun ayaklandığını duyunca Hidehira'nın alıkoyma çabasına rağmen gizlice ayrılıp Kisegawa'da ağabeyiyle buluştu. Hidehira ona Tsugunobu ve Tadanobu kardeşleri eşlik ettirdi.",
   AK1_YOSHI, "Jishō 4. yıl 10. ay 21. gün (giriş tarihi bağış belgesinden)", "gun", ["konu-siyasi", "dogu-500-1281"],
   ic_not="Giriş gün işareti bu okumada ayrıca doğrulanmadı: aynı kitapta 10. ay (küçük) 15. gün = 甲午 (= 1180-11-04), 21. gün = +6 gün = 庚子 = 1180-11-10 (Jülyen). Yoshitsune'nin Yoritomo ile buluşma günü olarak 10/21 giriş metninden okundu (kayıt aynı gün Mishima bağış belgesini içerir); tek kaynak, çift teyit yok.",
   takv=tk("1180-11-10", "庚子")),
 m("1181-09-23", "Taira sarayı Fujiwara no Hidehira'ya Yoritomo'yu yok etme görevi verdi", "siyaset", 3, "Hiraizumi", ["oshu-fujiwara", "taira-rejimi"],
   "Heike'nin başvurusuyla çıkarılan emirle Hidehira'ya Minamoto no Yoritomo'yu, Taira no Sukenaga'ya Kiso Yoshinaka'yı tenkil etme görevi verildi.",
   AK2_HID, "Yōwa 1. yıl 8. ay (küçük) 13. gün (丁巳)", "gun", ["konu-siyasi", "dogu-500-1281"], takv=tk("1181-09-23", "丁巳")),
 m("1181-09-25", "Hidehira Mutsu-no-kami (Mutsu valisi) ünvanını aldı", "siyaset", 3, "Hiraizumi", ["oshu-fujiwara", "taira-rejimi"],
   "Kyoto sarayı Hidehira'yı Mutsu valisi atadı; amaç Yoritomo'ya karşı onu kullanmaktı (Hokurikudō tenkil fermanı bir gün önce çıkmıştı).",
   HYK_HID, "Yōwa 1. yıl 8. ay 15. gün (gün işareti yok)", "gun", ["konu-siyasi", "dogu-500-1281"],
   ic_not="Hyakurenshō ay-gün verir, ganzhi vermez. Yıl başlığı Yōwa 1; ay, Azuma Kagami j.2'deki 8. ay (13. gün 丁巳 = 1181-09-23) ile aynı kabul edilerek 15. gün = 1181-09-25 hesaplandı (2 gün sapma payı; AK 13., Hyakurenshō 14-15. günler arasında 1-2 günlük kaynak farkı vardır). Çift teyit değil."),
]
# ---------------- KAMAKURA ----------------
K += [
 m("1180-11-04", "Minamoto no Yoritomo Kamakura'daki konutuna girdi", "baskent", 4, "Kamakura", ["kamakura"],
   "Yoritomo Kamakura'ya girip burada onarılan konutuna yerleşti; bölge bakufunun fiilî merkezi oldu.",
   AK1, "Jishō 4. yıl 10. ay (küçük) 15. gün (甲午)", "gun", ["konu-siyasi", "dogu-500-1281"], takv=tk("1180-11-04", "甲午"),
   ic_not="KOJA_REF.json: Kamakura'nın fiilî başlangıcı 1180-11-04, kurumsal başlangıcı 1185-12-22. Künye f=1185-12-22; bu madde fiilî erken tarihi kaydeder."),
 m("1185-12-05", "Ōe no Hirotomo Yoritomo'ya her eyalete shugo ve jitō atamayı önerdi", "siyaset", 4, "Kamakura", ["kamakura"],
   "Kamakura'nın hukuk danışmanı Hirotomo, Yoshitsune ve Yukiie'nin isyanı üzerine Doğu Yolu dışındaki bölgeler için her eyalet makamı ve malikâneye shugo ve jitō atanmasını önerdi; Yoritomo kabul etti.",
   AK5_12, "Bunji 1. yıl 11. ay (büyük) 12. gün (辛卯)", "gun", ["konu-siyasi", "dogu-500-1281"], takv=tk("1185-12-05", "辛卯")),
 m("1185-12-21", "Hōjō Tokimasa Kyoto'da ülke çapında shugo-jitō atanması için dilekçe verdi", "siyaset", 4, "Kyoto", ["kamakura", "heian-japonya"],
   "Hōjō Tokimasa gece Fujiwara no Tsunefusa'ya başvurarak bütün eyaletlere shugo ve jitō atanmasını, malikâneler dahil her tan için 5 shō asker pirinci toplanmasını istedi.",
   AK5_28, "Bunji 1. yıl 11. ay 28. gün (丁未)", "gun", ["konu-siyasi", "dogu-500-1281"], takv=tk("1185-12-21", "丁未")),
 m("1185-12-22", "Saray, Kamakura'nın ülke çapında shugo ve jitō atama talebini kabul etti", "siyaset", 5, "Kyoto", ["kamakura", "heian-japonya"],
   "İmparatorluk sarayı (Kyoto), Tokimasa'nın istediği shugo-jitō ve asker pirinci düzenini onayladı; Kamakura bakufusu böylece bütün ülkede askerî-mali yetki kazandı (KOJA_REF.json: kurumsal başlangıç).",
   AK5_29, "Bunji 1. yıl 11. ay 29. gün (戊申)", "gun", ["konu-siyasi", "dogu-500-1281"], takv=tk("1185-12-22", "戊申"),
   ic_not="Saray (Heian) egemenliği Kyoto'da sürer; Kamakura-Heian çift iktidar yapısı beyan edilmiştir. Bu madde sinir_dogu_koja2 dosyasındaki 4 yerleşim kırılmasının (Kamakura, Kyoto, Nara, Hakata) ortak dayanağıdır."),
]
# ---------------- TAMNA ----------------
K += [
 m("0498-01-01", "Baekje Kralı Dongseong Tamna'ya sefer çıkardı; Tamna özür dileyip haracı sürdürdü", "savas", 2, "Tamna (Jeju)", ["tamna"],
   "Tamna haraçlarını ödemediği için Dongseong Wuhjin'e (Muju) kadar ordusuyla geldi; Tamna elçi gönderip af dileyince sefer durdu.",
   SSG_D, "Dongseong 20. yıl 8. ay (498)", "yil", ["konu-askeri", "dogu-500-1281"],
   ic_not="Metin yalnız hükümdar yılı verir (Dongseong 20 = 498); gün çevrilemez."),
 m("0662-01-01", "Tamna hükümdarı Silla'ya bağlanıp haraçlı devlete indi", "siyaset", 3, "Tamna (Jeju)", ["tamna", "silla"],
   "Baekje'nin yıkılmasının ardından Tamna kralı Doldong'eum-ryul Silla'ya gelip teslim oldu; Tamna daha önce Baekje'ye tâbi olduğu için Baekje'nin saygın ünvanı «jwapyeong»'i kullanıyordu, bundan sonra Silla'nın bağımlı devleti sayıldı.",
   SSG_S, "Munmu 2. yıl (662)", "yil", ["konu-siyasi", "dogu-500-1281"],
   ic_not="ÇELİŞKİ: Goryeosa j.57 aynı olayı «新羅文武王元年» (661) verir: «百濟旣滅，新羅文武王元年，耽羅國主佐平徒冬音律，來降.» Samguk sagi j.6 ise olayı Munmu-wang 2. yıl bölümünde (662) anlatır. İki kaynak da yıl düzeyindedir; Silla'nın kendi kroniği olan Samguk sagi tercih edildi (662). TDV bu oturumda bakılmadı (Kore tarihi dışı ilk başvuru kaynağı)."),
 m("0938-01-01", "Tamna veliahdı Malno Goryeo sarayına geldi; Goryeo ona «Seongju» ve «Wangja» unvanlarını verdi", "siyaset", 3, "Kaesong", ["tamna", "goryeo"],
   "Tamna kralı yerine gelen veliaht Malno Goryeo Kralı Taejo'ya haraç sundu; Taejo Tamna yöneticisine «Seongju» (yıldız efendisi) ve «Wangja» (prens) ünvanlarını verdi. Tamna iç yönetimini sürdürdü.",
   GR_T938 + " | " + GR57, "Taejo 21. yıl 12. ay (938)", "yil", ["konu-siyasi", "dogu-500-1281"],
   ic_not="12. ay Jülyen'de 938 sonu/939 başına düşebilir; ay-gün çevrilemedi, yıl düzeyinde (938-01-01, kesinlik yil)."),
 m("1105-01-01", "Goryeo Tamna'yı kaldırıp Tamna-gun (Tamna kazası) yaptı", "toprak-kazanc", 4, "Ceccu (Jeju)", ["goryeo", "tamna"],
   "Kral Sukjong'un 10. yılında Tamna krallığı «Tamna-gun» adıyla Goryeo'nun doğrudan idaresine katıldı; sonra Uijong döneminde kaza memuru (hyeollyeong) yönetimine indi.",
   GR57, "Sukjong 10. yıl (1105)", "yil", ["konu-siyasi", "dogu-500-1281"],
   ic_not="Goryeosa sejong-ga (j.11-12) Sukjong 10'da bu olayı okuduğumuz kısımlarda içermiyor; yalnız jiri-ji (j.57) verir. Ay-gün yok."),
]
# ---------------- SAMBYELCHO ----------------
K += [
 m("1270-09-05", "Samseongbyeolcho isyancıları Jindo'ya yerleşip bölgeyi yağmalamaya başladı", "isgal", 3, "Jindo", ["sambyeolcho-rejimi", "goryeo"],
   "Ganghwa'dan güneye inen isyancılar Jindo adasını üs yaptı, Jeolla kıyı illerini basıp halkı adalara göçmeye zorladı; Moğol-Goryeo orduları 1271'e dek buraya sefer çıkardı.",
   GR_SB_2, "Wonjong 11. yıl 8. ay 19. gün (丙戌)", "gun", ["konu-askeri", "dogu-500-1281"], takv=tk("1270-09-05", "丙戌")),
 m("1271-06-23", "Kim Bang-gyeong ve Moğol orduları Jindo'yu aldı; sahte kral Seunghwa-hu On öldürüldü", "savas", 4, "Jindo", ["goryeo", "sambyeolcho-rejimi"],
   "Moğol komutanlar Hindu, Hong Da-gu ve Goryeo'lu Kim Bang-gyeong üç koldan Jindo'ya saldırıp Samseongbyeolcho'nun sahte kralı Seunghwa-hu On'u öldürdü; komutan Kim Tong-jeong artıklarla Tamna'ya (Jeju) kaçtı.",
   GR_SB_4, "Wonjong 12. yıl 5. ay 15. gün (丁丑)", "gun", ["konu-askeri", "dogu-500-1281"], takv=tk("1271-06-23", "丁丑")),
 m("1270-11-17", "Samseongbyeolcho Jeju'yu (Tamna) ele geçirdi", "isgal", 3, "Ceccu (Jeju)", ["sambyeolcho-rejimi", "goryeo"],
   "Goryeosa 1270'in 11. ayında «eşkıyanın Jeju'yu aldığını» kaydeder; Jiri-ji aynı olayı Kim Tong-jeong'un Samseongbyeolcho ile Tamna'ya girip yönetimi ele geçirmesi olarak anlatır.",
   GR_SB_3 + " | " + GR57, "Wonjong 11. yıl 11. ay (己亥 günü)", "gun", ["konu-askeri", "dogu-500-1281"], takv=tk("1270-11-17", "己亥"),
   ic_not="Giriş «十一月己亥»: 己亥 günü ay içinde 11. ayın ilk günlerine düşer (ay başı yaklaşık 1270-11-14); ganzhi ile 1270-11-17. Kaynak «賊» der, Kim Tong-jeong adını Jiri-ji verir; iki kayıt birleştirilmiştir (1270 yılı Jiri-ji'de «元宗十一年»)."),
 m("1273-05-16", "Kim Bang-gyeong, Hindu ve Hong Da-gu Jeju'da Samseongbyeolcho'yu bozguna uğrattı", "savas", 4, "Ceccu (Jeju)", ["goryeo", "sambyeolcho-rejimi"],
   "160 gemi ve on bin kadar askerle Jeju'ya çıkan Moğol-Goryeo orduları isyancıları dağıttı; Kim Won-yun ve diğer liderler öldürüldü, Jeju yerlileri yurtlarında bırakıldı, birkaç subay adada nöbette kaldı.",
   GR_SB_5, "Wonjong 14. yıl 4. ay 28. gün (庚戌)", "gun", ["konu-askeri", "dogu-500-1281"], takv=tk("1273-05-16", "庚戌")),
 m("1273-07-21", "Yuan, Jeju'ya darugachi (Mongol valisi) atadı", "siyaset", 3, "Ceccu (Jeju)", ["yuan-hanedani", "goryeo"],
   "Samseongbyeolcho'nun çökmesinden sonra Yuan hanedanı Tamna (Jeju) adasına kendi darugachi'sini koydu; ada daha sonra Moğol at yetiştirme alanı oldu (1277).",
   GR_YU, "Wonjong 14. yıl artık 6. ay (丙辰 – 己未 girişleri arası)", "ay", ["konu-siyasi", "dogu-500-1281"], takv=tk("1273-07-21", "丙辰"),
   ic_not="«元置達魯花赤于耽羅» cümlesi 閏月丙辰 ve 己未 girişleri arasındaki kayıtta günsüz geçer; tarih ilk sınır olan 丙辰 (1273-07-21) günüdür, gerçek gün 己未 (3 gün sonrası) ile arasında olabilir (kesinlik ay). Jiri-ji'ye göre Chungnyeol 20'de (1294) Tamna Goryeo'ya iade edilmiştir; mevcut atlas zinciri (yuan 1281-1356) bununla çelişir: ÖNERİ bkz. RAPOR.md."),
]
# ---------------- RYUKYU ----------------
K += [
 m("1238-01-01", "Shunbajunki Ryukyu tahtına çıktı", "hukumdar", 2, "Urasoe Gusuku (Chuzan merkezi)", ["ryukyu-shunten-eiso"],
   "Chuzan Seikan'a göre Shunten'in oğlu Shunbajunki 1238'de Urasoe'de tahta geçti.",
   CS1 + "«南宋嘉熈二年戊戌舜馬順熈御即位»", "Kaxi 2. yıl (戊戌) = 1238; gün yok", "yil", ["konu-siyasi", "dogu-500-1281"],
   ic_not="Tek kaynak 1650'de yazılmış resmî Ryukyu kroniğidir; çağdaş doğrulama yok. Chūzan Seikan hükümdar sürelerini ve yılları sonradan hesaplamıştır."),
 m("1249-01-01", "Gihon (Giben) Ryukyu tahtına çıktı", "hukumdar", 2, "Urasoe Gusuku (Chuzan merkezi)", ["ryukyu-shunten-eiso"],
   "Gihon, Shunbajunki'nin ardından tahta çıktı; Chuzan Seikan'a göre kıtlık ve salgın yüzünden halkın yarısı ölmüş, kral yönetimi bırakmak istemiştir.",
   CS1 + "«淳祐九年己酉義本王御即位…其明年天下大ニ飢饉次ノ年ヨリ打續疾疫有テ人民半ハ失ニケル»", "Chunyou 9. yıl (己酉) = 1249; gün yok", "yil", ["konu-siyasi", "dogu-500-1281"],
   ic_not="Tek kaynak Chūzan Seikan (1650)."),
 m("1260-01-01", "Eiso Ryukyu tahtına çıktı (Chūzan hanedanı)", "hukumdar", 3, "Urasoe Gusuku (Chuzan merkezi)", ["ryukyu-shunten-eiso"],
   "Eiso, Gihon'un ardından Urasoe merkezli yönetimi devraldı; modern araştırmanın tarihsel saydığı Chūzan hanedanının ilk kralıdır. Kronik, 40 yıl hükümdarlık ve 1299'daki ölümünü verir.",
   CS2 + "«南宋景定元年庚申英祖王御即位…英祖王在位四十年壽七十一ニシテ大元大徳三年己亥八月五日薨給ケレハ世子大成王立給»", "Jingding 1. yıl (庚申) = 1260; gün yok", "yil", ["konu-siyasi", "dogu-500-1281"],
   ic_not="Tek kaynak Chūzan Seikan (1650); Eiso'nun tarihselliği akademik literatürde (Smits 1999; Kerr 1958) kabul görür ancak bu oturumda açılmadı."),
 m("1300-01-01", "Taisei Ryukyu tahtına çıktı", "hukumdar", 2, "Urasoe Gusuku (Chuzan merkezi)", ["ryukyu-shunten-eiso"],
   "Eiso'nun 1299'da ölümüyle oğlu Taisei 1300'de tahta geçti; kronik 9 yıl hükümdarlık verir.",
   CS2 + "«大元大徳四年庚子大成王御即位…在位九年壽六十ニシテ大元至大元年戊申十二月八日ニ薨給»", "Dade 4. yıl (庚子) = 1300", "yil", ["konu-siyasi", "dogu-500-1281"],
   ic_not="Kroniğin yılları Çin yıl adlarıyla verilir; Jülyen yıla karşılık yıl düzeyinde. Tek kaynak."),
 m("1309-01-01", "Eiji Ryukyu tahtına çıktı", "hukumdar", 2, "Urasoe Gusuku (Chuzan merkezi)", ["ryukyu-shunten-eiso"],
   "Taisei'nin ölümünden (1308 sonu) sonra Eiji tahta geçti; kronik 5 yıl hükümdarlık, 1313 ölüm verir; ardından Tamagusuku (1314) gelir.",
   CS2 + "«大元至大二年己酉英慈王御即位…在位五年壽四十六ニシテ大元皇慶二年癸丑九月二十日ニ薨給ケル間第四ノ御子玉城王子立給»", "Zhida 2. yıl (己酉) = 1309", "yil", ["konu-siyasi", "dogu-500-1281"],
   ic_not="Tek kaynak. Taisei'nin ölümü «至大元年戊申十二月八日» = 1308 sonu ya da 1309 başı (ay-güneş 12. ay); tahta çıkış yılı kroniğe göre 1309."),
]
K = [x for x in K if not (x['t'] == '1105-01-01' and x['tur'] == 'toprak-kazanc')]  # S'de var, künye son maddesi de var
# ---------------- SINIR ----------------
def sn(t, devlet, taraflar, b, tur, onem, yer, d, kaynak, gun, kes, ic_not=None, takv=None, sid=None):
    x = {"t": t, "devlet": devlet, "taraflar": taraflar, "b": b, "tur": tur, "onem": onem, "dunya": 1, "kapsam": "dis",
         "yer": yer, "yer_id": yer, "etiket": ["toprak-degisimi", "konu-askeri", "dogu-500-1281"], "d": d, "kaynak": kaynak,
         "gun": gun, "kesinlik": kes, "sinir_id": []}
    if ic_not: x["ic_not"] = ic_not
    if takv: x["ic_not_takvim"] = takv
    return x

KAM_NOT = "BEYANLI YAKLAŞIKLIK: Kamakura–Heian çift iktidarı. Saray egemenliği Kyoto'da sürer; Bunji 1/11/29'da kazanılan şey ülke çapı shugo-jitō yetkisidir. Atlas zinciri (kamakura 1281'den) bu devri 1185'ten itibaren kabul eder; sahip olarak «kamakura» yazılmıştır."
for yer in ("Kamakura", "Kyoto", "Nara", "Hakata (Fukuoka)"):
    S.append(sn("1185-12-22", "kamakura", ["kamakura", "heian-japonya"],
                "%s: shugo-jitō düzeniyle Kamakura bakufusunun yetki alanına girdi" % yer, "toprak-kazanc", 3, yer,
                "Bunji 1/11/29'da saray Kamakura'nın ülke çapında shugo ve jitō atama talebini onayladı; %s bu düzenle bakufunun yetki alanına girdi." % yer,
                AK5_29 + " | " + AK5_28, "Bunji 1. yıl 11. ay 29. gün (戊申)", "gun", ic_not=KAM_NOT, takv=tk("1185-12-22", "戊申")))
S.append(sn("1135-01-19", "daewi-myocheong", ["daewi-myocheong", "goryeo"], "Seogyeong (Pyongyang) Daewi isyan devletine geçti", "toprak-kazanc", 3, "Pyongyang",
            "Myocheong ve Jo Gwang Seogyeong'de Goryeo'ya başkaldırıp Daewi devletini ilan etti.", "Goryeosa j.127 Yeoljeon 40 ve j.16 — zh.wikisource.org/wiki/高麗史/卷一百二十七 ve /卷十六 (ms1 künyesinde okundu): «十三年春正月乙巳朔…戊申，妙淸、柳旵…以西京反»; «國號大爲，建元天開»",
            "Injong 13. yıl 1. ay 4. gün (戊申)", "gun", takv=tk("1135-01-19", "戊申"), ic_not="Daewi künyesi (KUNYE_MS1_DALINDA) ve kuruluş maddesi ms1 dalındadır; burada yalnız yerleşim devri kaydedilir."))
S.append(sn("1136-03-23", "goryeo", ["goryeo", "daewi-myocheong"], "Seogyeong (Pyongyang) Kim Bu-sik tarafından alınıp Goryeo'ya döndü", "toprak-kazanc", 3, "Pyongyang",
            "Kim Bu-sik Seogyeong'i aldı, Jo Gwang kendini yaktı; şehir Goryeo idaresine döndü.", GR16 + "«十四年…二月…丁巳，金富軾會諸軍，攻西京，城陷，趙匡自焚死。»",
            "Injong 14. yıl 2. ay 丁巳", "gun", takv=tk("1136-03-23", "丁巳")))
S.append(sn("1105-01-01", "goryeo", ["goryeo", "tamna"], "Ceccu (Jeju): Tamna Goryeo'ya katıldı (Tamna-gun)", "toprak-kazanc", 4, "Ceccu (Jeju)",
            "Tamna krallığı Goryeo'ya katılıp Tamna-gun oldu.", GR57, "Sukjong 10. yıl (1105)", "yil"))
S.append(sn("1270-11-17", "sambyeolcho-rejimi", ["sambyeolcho-rejimi", "goryeo"], "Jeju Samseongbyeolcho'nun eline geçti", "toprak-kazanc", 3, "Ceccu (Jeju)",
            "Samseongbyeolcho isyancıları Jeju'yu ele geçirdi.", GR_SB_3 + " | " + GR57, "Wonjong 11. yıl 11. ay (己亥)", "gun", takv=tk("1270-11-17", "己亥")))
S.append(sn("1273-05-16", "goryeo", ["goryeo", "sambyeolcho-rejimi"], "Jeju Samseongbyeolcho'dan geri alındı", "toprak-kazanc", 3, "Ceccu (Jeju)",
            "Kim Bang-gyeong ve Moğol orduları Jeju'yu isyancılardan geri aldı.", GR_SB_5, "Wonjong 14. yıl 4. ay 庚戌", "gun", takv=tk("1273-05-16", "庚戌")))
S.append(sn("1273-07-21", "yuan-hanedani", ["yuan-hanedani", "goryeo"], "Jeju'ya Yuan darugachi'si atandı; ada Yuan yönetimine girdi", "toprak-kazanc", 3, "Ceccu (Jeju)",
            "Yuan hanedanı Jeju'da darugachi koydu.", GR_YU, "Wonjong 14. yıl artık 6. ay (丙辰–己未)", "ay", takv=tk("1273-07-21", "丙辰"),
            ic_not="Gün kesin değil (günsüz cümle, 丙辰–己未 aralığı)."))
S.append(sn("1270-09-05", "sambyeolcho-rejimi", ["sambyeolcho-rejimi", "goryeo"], "Jindo Samseongbyeolcho'nun eline geçti", "toprak-kazanc", 3, "Jindo",
            "Samseongbyeolcho Jindo adasına yerleşti.", GR_SB_2, "Wonjong 11. yıl 8. ay 丙戌", "gun", takv=tk("1270-09-05", "丙戌")))
S.append(sn("1271-06-23", "goryeo", ["goryeo", "sambyeolcho-rejimi"], "Jindo Samseongbyeolcho'dan geri alındı", "toprak-kazanc", 3, "Jindo",
            "Kim Bang-gyeong ve Moğol orduları Jindo'yu aldı.", GR_SB_4, "Wonjong 12. yıl 5. ay 丁丑", "gun", takv=tk("1271-06-23", "丁丑")))

# ---------------- KUNYE ----------------
KUN = [
 {"id": "tamna", "ad": "Tamna Krallığı (Jeju)", "tur": "krallik", "bolge": "dogu-asya", "f": "0476-01-01", "t": "1105-01-01", "baskent": "Jeju (Tamna)",
  "ozet": "Jeju Adası'nda Baekje, Silla ve Goryeo'ya karşı haraç ilişkisiyle varlığını sürdüren yerel krallık; 1105'te Goryeo'ya Tamna-gun olarak katıldı.",
  "kaynak": SSG_M + " | " + SSG_S + " | " + GR57,
  "kesinlik": {"f": "yil", "t": "yil"}, "boya_gerekli": True,
  "ic_not": "f=476 Tamna'nın ilk TARİHLİ yazılı tanığıdır (Baekje Munju 2; haraç sunması), kuruluş değil: Jiri-ji'nin Tamna kuruluş efsanesi (üç tanrı-insan Yang-eul-na, Go-eul-na, Bu-eul-na) tarihsizdir. Önceki dönem için Çin kaynaklarında (Weizhi «州胡») anılan Jeju yerleşimi bu oturumda açılmadı. t=1105: Goryeosa j.57 «肅宗十年». Silla bağımlılığı için bkz. kronoloji maddesi (661/662 çelişkisi). Tamna iç yönetimi (Seongju, Wangja) 1105'e dek sürdü; Goryeo ve Silla ile ilişki haraç/vasal düzeyindedir, bu yüzden ayrı polity sayıldı.",
  "kronoloji": [
   {"t": "0476-01-01", "tur": "kurulus", "b": "Tamna ilk tarihli tanık: Baekje Kralı Munju'ya haraç sundu", "kaynak": SSG_M, "gun": "Munju 2. yıl 4. ay (476)", "kesinlik": "yil",
    "ic_not": "Kuruluş değil, ilk tarihli tanık."},
   {"t": "1105-01-01", "tur": "son", "b": "Tamna Goryeo'ya Tamna-gun olarak katıldı", "kaynak": GR57, "gun": "Sukjong 10. yıl (1105)", "kesinlik": "yil"}]},
 {"id": "sambyeolcho-rejimi", "ad": "Samseongbyeolcho Rejimi (Pae Jung-son / Seunghwa-hu On)", "tur": "krallik", "bolge": "dogu-asya", "f": "1270-06-20", "t": "1273-05-16", "baskent": "Jindo (1270-09'dan), Jeju (1270-11'den); saray yeri kaynakta okunmadı",
  "ozet": "Goryeo'nun Moğollara teslim olup Ganghwa'dan Kaesong'a dönmesine karşı Samseongbyeolcho özel ordusunun 1270 Haziran'ında Seunghwa-hu On'u kral ilan edip Jindo ve Jeju'da kurduğu isyan devleti; 1271'de Jindo'yu, 1273'te Jeju'yu kaybederek yıkıldı.",
  "kaynak": GR_SB_1 + " | " + GR_SB_2 + " | " + GR_SB_3 + " | " + GR_SB_5,
  "kesinlik": {"f": "gun", "t": "gun"}, "boya_gerekli": True,
  "ic_not": "f: Goryeosa j.26 Wonjong 11. yıl 6. ay «己巳朔» = 1270-06-20 (Jülyen; ganzhi doğrulanmış): Pae Jung-son Samseongbyeolcho ile isyan edip Seunghwa-hu On'u kral yaptı, «署置官府». t: Wonjong 14. yıl 4. ay 庚戌 = 1273-05-16: Kim Bang-gyeong Jeju'da isyancıları bozguna uğrattı. Bu oturumda Jindo'daki saray yeri (Yongjang-seong) kaynakta okunmadı. Yerleşim noktaları: Jindo (yeni), Jeju (mevcut). Girdi listesinde (girdi_koja2) yoktur; zincirde sahipsiz süreyi önlemek için eklenmiştir — başka küme de aynı kimliği yazarsa tekilleştirilmelidir.",
  "kronoloji": [
   {"t": "1270-06-20", "tur": "kurulus", "b": "Samseongbyeolcho isyan etti; Seunghwa-hu On'u kral ilan etti", "kaynak": GR_SB_1, "gun": "Wonjong 11. yıl 6. ay 朔 (己巳)", "kesinlik": "gun", "ic_not_takvim": tk("1270-06-20", "己巳")},
   {"t": "1273-05-16", "tur": "son", "b": "Kim Bang-gyeong Jeju'da Samseongbyeolcho'yu bozguna uğrattı; rejim sona erdi", "kaynak": GR_SB_5, "gun": "Wonjong 14. yıl 4. ay 庚戌", "kesinlik": "gun", "ic_not_takvim": tk("1273-05-16", "庚戌")}]},
]

# ---------------- YERLESIM (yeni) ----------------
YER = [
 {"ad": "Jindo", "tur": "sehir", "lat": 34.485, "lon": 126.252, "g": 1, "k": 4,
  "s": [{"f": "1270-09-05", "t": "1271-06-23", "d": "sambyeolcho-rejimi", "kesinlik": "gun", "kaynak": GR_SB_2},
        {"f": "1271-06-23", "t": "1281-01-01", "d": "goryeo", "kesinlik": "gun", "kaynak": GR_SB_4 + " | t=1281-01-01 mevcut epok sınırıdır (1281 sonrası bu kümeye ait değil)"}],
  "not": "kur YAZILMADI: Jindo Silla/Goryeo çağında da vardır ama ilk tarihli tanık bu oturumda okunmadı; zincir yalnız Samseongbyeolcho işgali ve sonrasından başlar. 1270-09-05 öncesi (Goryeo) ve 1281 sonrası zincir başka işe aittir (devam_gerekli).",
  "kaynak": "koordinat (çift tanık, 5 km içinde): Wikidata Q12618195 Jindo-eup P625 = 34.48745, 126.23933; OSM Nominatim «진도읍» = 34.4826255, 126.2649899; seçilen nokta ikisinin ortası 34.485, 126.252 (iki tanık arası ≈2,4 km). GeoNames cities1000'de bulunmadı."},
]

# ---------------- YAMA ----------------
YAMA = [
 {"ad": "Pyongyang", "mevcut_zincir_basi": "goryeo 1281-01-01",
  "s_onek": [
   {"f": "1135-01-19", "t": "1136-03-23", "d": "daewi-myocheong", "kesinlik": "gun", "kaynak": "Goryeosa j.127 Yeoljeon 40 ve j.16 (okundu, ms1 künyesi): «國號大爲，建元天開»; «戊申，妙淸、柳旵…以西京反» (1135-01-19); «二月…丁巳，金富軾會諸軍，攻西京，城陷，趙匡自焚死» (1136-03-23). Seogyeong = Pyongyang. f=1135-01-19 ORTADAN KESİŞEN dilim başıdır (ufuk sınırı işareti değil)."},
   {"f": "1136-03-23", "t": "1281-01-01", "d": "goryeo", "kesinlik": "gun", "kaynak": GR16 + "«十四年…二月…丁巳，金富軾會諸軍，攻西京，城陷，趙匡自焚死»; «三月己巳，…西京內外，老疾幼弱，不能自存者，量給米賙恤» (Seogyeong'e Goryeo yönetiminin dönüşü). t=1281-01-01 mevcut zincir başı. BEYANLI YAKLAŞIKLIK: 1136-1281 arası için ayrıca devir kaydı aranmadı; bu dilimin içinde Moğol Dongnyeong-bu (Seogyeong merkezli, Choe Tan'ın 1269-70 teslimi) YAZILMADI — bkz. uyari."}],
  "devam_gerekli": "0500-01-01 → 1135-01-19 (Pyongyang'ın Goryeo öncesi ve 918-1135 Goryeo dilimi başka kümenin işi)",
  "uyari": "Goryeosa j.26'ya göre 1270'te Choe Tan Seogyeong'i Mongollara bağladı (Dongnyeong-bu, 1270-1290): bu dilim 'goryeo' diye bırakılmıştır ve Değişmez 3/ sahiplik açısından yaklaşıklıktır — Mongol Dongnyeong-bu için ayrı kimlik/küme gerekir."},
 {"ad": "Ceccu (Jeju)", "mevcut_zincir_basi": "yuan-hanedani 1281-01-01",
  "s_onek": [
   {"f": "0500-01-01", "t": "1105-01-01", "d": "tamna", "kesinlik": "yil", "kaynak": "Goryeosa j.57 Jiri-ji: «肅宗十年，改乇羅，爲耽羅郡»; Samguk sagi j.26: Tamna 476/498 haraç; f=0500-01-01 UFUK SINIR İŞARETİDİR (Tamna 476'dan beri tanıklı, pencere başı)"},
   {"f": "1105-01-01", "t": "1270-11-17", "d": "goryeo", "kesinlik": "yil", "kaynak": GR57 + " (Tamna-gun → hyeollyeong → «元宗十一年» isyancıların girişi); t Goryeosa j.26 «十一月己亥，賊陷濟州» (1270-11-17)"},
   {"f": "1270-11-17", "t": "1273-05-16", "d": "sambyeolcho-rejimi", "kesinlik": "gun", "kaynak": GR_SB_3 + " | " + GR_SB_5},
   {"f": "1273-05-16", "t": "1273-07-21", "d": "goryeo", "kesinlik": "ay", "kaynak": GR_SB_5 + " (isyan bastırıldı; yerliler yurtlarında bırakıldı) ; t: günsüz «元置達魯花赤于耽羅» (丙辰–己未)"},
   {"f": "1273-07-21", "t": "1281-01-01", "d": "yuan-hanedani", "kesinlik": "ay", "kaynak": GR_YU + " | " + GR57 + " (忠烈王三年 «元爲牧馬場»); 1281-01-01 mevcut zincir başı"}],
  "uyari": "ÇELİŞKİ: Goryeosa j.57 Jiri-ji Tamna'nın Chungnyeol 20'de (1294) Goryeo'ya iade edildiğini («還隷于我»), ertesi yıl Jeju adını aldığını yazar; mevcut atlas zinciri yuan-hanedani 1281-1356 / goryeo 1356 der. 1294-1296 aralığı ve yeniden Yuan'a geçişin (1300: «皇太后又放廐馬»; 1305: «還屬于…») sınırı bu kümenin dışındadır."},
 {"ad": "Urasoe Gusuku (Chuzan merkezi)", "mevcut_zincir_basi": "sanzan 1322-01-01",
  "s_onek": [
   {"f": "1187-01-01", "t": "1314-01-01", "d": "ryukyu-shunten-eiso", "kesinlik": "yil", "kaynak": "Chūzan Seikan (1650) ja.wikisource.org/wiki/琉球國中山世鑑/卷一 ve /卷二 (okundu): «南宋淳熈十四年丁未舜天御即位» (1187); «大元延祐元年甲寅玉城王子御即位» (1314). BEYANLI YAKLAŞIKLIK: Urasoe'nin 1187'de Ryukyu başkenti olduğu yalnız XVII. yy. kroniğine dayanır; 1260 (Eiso) öncesi hanedan tarihselliği tartışmalıdır. Urasoe'nin ilk tarihli tanığı ayrı (mevcut kur: 1322)"}],
  "devam_gerekli": "1314-01-01 → 1322-01-01 (Tamagusuku dönemi / Sanzan ayrılışı; kronik Tamagusuku'yu 1314'te tahta çıkarır ve ülkenin üçe ayrılışını ardından anlatır, Sanzan'ın 1322 f'si künyeden)",
  "uyari": "Mevcut kayıtta kur=1322-01-01; yama uygulanırsa kur, ilk tarihli tanıkla (kronik: 1187 Shunten) uyum için gözden geçirilmeli. 1187 öncesi için yerleşim/devlet YOK (Ryukyu 1187'ye dek devletsiz kabul)."},
]
for yer, ad in (("Kamakura", "Kamakura"), ("Kyoto", "Kyoto"), ("Nara", "Nara"), ("Hakata (Fukuoka)", "Hakata (Fukuoka)")):
    varlik = {"Kamakura": "Azuma Kagami j.1 (okundu): «治承四年…十月小十五日甲午。武衛始入御鎌倉御亭» (1180-11-04); fiilî bakufu merkezi 1180'den",
              "Kyoto": "Azuma Kagami j.5 (okundu): Kyoto saray ve Rokuhara/Kamakura elçilerinin yeri (十一月 girişleri: «入洛», «京都»); 794'ten beri başkent",
              "Nara": "Azuma Kagami j.2 (okundu): «去年十二月廿八日。南都東大寺。興福寺已下堂塔坊舎。悉以爲平家燒失» (Nara/Nanto 1180-12-28'de var ve Taira'ca yakıldı)",
              "Hakata (Fukuoka)": "Azuma Kagami j.4 (okundu): «元暦二年正月大十二日丙申…可責入博多津之旨有議定» (Hakata limanı 1185'te anılır)"}[yer]
    YAMA.append({"ad": ad, "mevcut_zincir_basi": "kamakura 1281-01-01",
                 "s_onek": [{"f": "1185-12-22", "t": "1281-01-01", "d": "kamakura", "kesinlik": "gun",
                             "kaynak": AK5_29 + " | VARLIK: " + varlik + " | " + KAM_NOT + " | t=1281-01-01 mevcut epok sınırı."}],
                 "devam_gerekli": "0500-01-01 → 1185-12-22 (Heian/Nara/Taira dönemi; başka kümenin işi)"})

# ---------------- YAZ ----------------
w('kunye_yeni.js', 'DOGU_KUNYE_KOJA2', KUN, '// koja2 — yeni künyeler: tamna, sambyeolcho-rejimi. kiyohara-dewa YAZILMADI (kaynak bulunamadı; bkz. RAPOR.md).')
w('kronoloji_cok_dogu_koja2.js', 'KRONOLOJI_COK_DOGU_KOJA2', K, '// koja2 — kronoloji maddeleri (kuruluş/son maddeleri: ms1 künyeleri ve kunye_yeni.js içinde)')
w('kronoloji_sinir_dogu_koja2.js', 'KRONOLOJI_SINIR_DOGU_KOJA2', S, '// koja2 — yerleşim sahip devir günleri (Değişmez 2 evreni); her madde yama_koja2.js / yerlesimler_dogu_koja2.js içindeki bir s: kırılmasına karşılık gelir')
w('yerlesimler_dogu_koja2.js', 'YERLESIMLER_DOGU_KOJA2', YER, '// koja2 — yeni yerleşim: Jindo (çift tanıklı koordinat).')
w('yama_koja2.js', 'YAMA_DOGU_KOJA2', YAMA, '// koja2 — MEVCUT yerleşimlere s: öneki yamaları (yama aracı girdisi)')
print('kunye', len(KUN), 'kron', len(K), 'sinir', len(S), 'yer', len(YER), 'yama', len(YAMA))
