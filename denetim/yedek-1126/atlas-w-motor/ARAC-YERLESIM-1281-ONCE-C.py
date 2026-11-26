# YERLESIM-1281-ONCE · adım C — elle okunmuş sınıflandırmadan ÖNERİ JSON'u üretir,
# her önerilen dönemi üç soruya (sıfır uzunluk · ters · çakışma) ve künye penceresine sınar.
# data/'ya YAZMAZ. Girdi: A çıktısı (argv[1]). Çıktı: denetim/YERLESIM-1281-ONCE-ONERI.json
import sys, json, collections
sys.path.insert(0, 'arac'); import girdi
sys.stdout.reconfigure(encoding='utf-8')
A = {x['ad']: x for x in json.load(open(sys.argv[1], encoding='utf-8'))}
K = {k['id']: k for k in girdi.oku_devletler()} if hasattr(girdi, 'oku_devletler') else {}
print('künye evreni =', len(K))
Y = {y['ad']: y for y in girdi.yukle(sessiz=True)}
S = 'TDV: '
def p(f, t, d): return {'f': f, 't': t, 'd': d}
UJ = '1261-07-25'  # iznik-imparatorlugu → bizans künye geçişi (künye günü, kaynak DEĞİL)
# ── A: temiz öneri — TDV cümlesi el değiştirmeyi ADIYLA ve YILIYLA veriyor, sahip atlasın 1281 sahibiyle aynı polity
ONERI = {
 'Kütahya':   ([p('1233-01-01','1281-01-01','selcuklu')], 'kutahya', 'Alâeddin Keykubad zamanında İznik İmparatorluğu’ndan geri alındı (1233).'),
 'Isparta':   ([p('1204-01-01','1281-01-01','selcuklu')], 'isparta', 'Kılıcarslan zamanında 1204’te zaptedilmiştir'),
 'Antalya':   ([p('1216-01-22','1281-01-01','selcuklu')], 'antalya', '22 Ocak 1216’da İzzeddin Keykâvus tarafından yeniden fethedilerek'),
 'Karaman':   ([p('1256-01-01','1281-01-01','karaman')], 'karaman', 'Karamanoğulları Beyliği’nin eline geçti (654/1256)'),
 'Uşak':      ([p('1182-01-01','1281-01-01','selcuklu')], 'usak', 'Manuel Komnenos’un ölümünden (1180) iki yıl sonra … Uşak tekrar Selçuklular’ın egemenliğine geçti. [1182 TÜRETİLDİ: 1180+2]'),
 'İznik':     ([p('1204-04-13',UJ,'iznik-imparatorlugu'), p(UJ,'1281-01-01','bizans')], 'iznik', 'İstanbul’un Latinler’in eline geçmesi ve Bizans hâkimiyetinin ortadan kalkması üzerine 1204’te I. [Theodoros Laskaris] … [kaynak yıl verir; künye günü 1204-04-13 devralındı]'),
 'Manisa':    ([p('1204-04-13',UJ,'iznik-imparatorlugu'), p(UJ,'1281-01-01','bizans')], 'manisa', 'Latinler’in 1204’te İstanbul’u almalarından sonra İznik İmparatorluğu’nun sınırlarına dahil edildi. [künye günü devralındı]'),
 'İzmit':     ([p('1228-01-01',UJ,'iznik-imparatorlugu'), p(UJ,'1281-01-01','bizans')], 'izmit', 'Uzun süre Bizans ve Latinler arasında el değiştiren şehir 1228’de yeniden Bizans hâkimiyetine geçti. [1228 “Bizans” = İznik devleti]'),
 'Gelibolu':  ([p('1235-01-01',UJ,'iznik-imparatorlugu'), p(UJ,'1281-01-01','bizans')], 'gelibolu', '… Ioannes tarafından geri alındı (1235). [Ioannes = III. Vatatzes, İznik — ÇIKARIM, teyit]'),
 'Dimetoka':  ([p('1246-01-01',UJ,'iznik-imparatorlugu'), p(UJ,'1281-01-01','bizans')], 'dimetoka', '1230-1246 yılları arasında Bulgarlar’ın hâkimiyetinde kaldıysa da bu son tarihten itibaren Bizans’ın yönetimi altına girdi. [1246 “Bizans” = İznik devleti]'),
 'İstanköy':  ([p('1258-01-01',UJ,'iznik-imparatorlugu'), p(UJ,'1281-01-01','bizans')], 'istankoy', '… Latin hâkimiyetine girmiş, 1258’de yeniden Bizans’ın eline geçmiştir. [1258 “Bizans” = İznik devleti]'),
 'Tekirdağ':  ([p('1275-01-01','1281-01-01','bizans')], 'tekirdag', 'Mikhail zamanında 1275’te şehir tekrar Bizans idaresine girdi.'),
 'İstanbul':  ([p('1204-04-13','1261-07-25','latin-imparatorlugu'), p('1261-07-25','1281-01-01','bizans')], 'istanbul', 'Haçlılar şehri zaptettiler (13 Nisan 1204). … 25 Temmuz 1261’de … İznik birlikleri şehirdeki Batı hâkimiyetine son vermeyi başardı.'),
 'Trabzon':   ([p('1204-01-01','1281-01-01','trabzon-rum')], 'rize', '… Trabzon merkez olmak üzere kurdukları Trabzon Rum Devleti’nin sınırları içinde kaldı (1204). [cümle RİZE maddesinden; Trabzon’u merkez diye adlandırıyor] · 1228 kuşatması başarısız (TDV trabzon)'),
 'Giresun':   ([p('1204-01-01','1281-01-01','trabzon-rum')], 'giresun', 'Haçlılar’ın İstanbul’u işgallerinin (1204) ardından Trabzon’da kurulan Rum İmparatorluğu’nun sınırları içinde kalan kale'),
 'Rize':      ([p('1204-01-01','1281-01-01','trabzon-rum')], 'rize', '… Trabzon Rum Devleti’nin sınırları içinde kaldı (1204).'),
 'Antakya':   ([p('1268-05-18','1281-01-01','memluk')], 'antakya', '18 Mayıs 1268’de yapılan bir genel hücum sonunda surlardan içeri girildi, şehir … alındı'),
 'İskenderun':([p('1268-01-01','1281-01-01','memluk')], 'iskenderun', '1268’de Memlükler’in Antakya Prinkepsliği’ne son vermesi üzerine yeniden İslâm topraklarına katılmıştır.'),
 'Rakka':     ([p('1260-01-01','1281-01-01','memluk')], 'rakka', 'Aynicâlût Savaşı’nın (658/1260) ardından Memlükler’in hâkimiyetine geçen Rakka'),
 "Ba'lebek (Baalbek)": ([p('1260-01-01','1281-01-01','memluk')], 'balebek', '1260’ta Moğollar’ın eline geçti; ancak Memlük Sultanı Kutuz’un Aynicâlût’ta kazandığı zafer üzerine Memlükler’in idaresine girdi.'),
 'Şehrizor':  ([p('1258-01-01','1281-01-01','ilhanli')], 'sehrizor', '643 (1245) yılında Moğol istilâsına uğradı ve 1258’de İlhanlılar’ın idaresine geçti.'),
 'Vâsıt':     ([p('1258-01-01','1281-01-01','ilhanli')], 'vasit', 'İlhanlılar Irak’ı zaptedince (656/1258) onların hâkimiyetine geçti.'),
 'Bağdat':    ([p('1258-02-10','1281-01-01','ilhanli')], 'bagdat', 'Kuruluşundan Abbâsî Devleti’nin yıkılışına (1258) kadar hilâfet merkezi olarak kalan Bağdat [kaynak yıl verir; gün abbasi künye bitişinden (1258-02-10) devralındı — kaynak DEĞİL, bitişik olsun diye]'),
}
# ── B: KARAR — kaynak cümlesi var ama önerinin sahibi atlasın 1281 sahibiyle ÇELİŞİYOR ya da künye penceresi tutmuyor
KARAR = {
 # B1 — atlasın 1281 sahibi TDV ile ÇELİŞİYOR (1281 dönemi yanlış olabilir → ters yön ölçülmeli §3.5)
 'Beyrut':     ('B1-sahip-celiskisi', 'beyrut', 'atlas memluk@1281 · TDV: 1197’de Haçlılar tekrar zaptetti, Kudüs Krallığı’na bağladı. Kudüs Kr. künyesi 1291-05-18’e dek.', 'Beyrut 1291’de Memlük’e geçer; 1281 dönemi kudus-kralligi olmalı mı?'),
 'Trablusşam': ('B1-sahip-celiskisi', 'trablussam', 'atlas memluk@1281 · TDV: “Şehir Haçlılar’ın elinde iken 552 (1157) ve 597’de (1201) iki büyük depreme mâruz kaldı”. trablus-kontlugu künyesi 1289-04-26’ya dek.', '1281 sahibi trablus-kontlugu olmalı mı?'),
 'Akkâ':       ('B1-sahip-celiskisi', 'akka', 'atlas memluk@1281 · TDV: 1191 teslim, Henri de Champagne idaresi. kudus-kralligi künyesi 1291-05-18.', '1281 sahibi kudus-kralligi olmalı mı?'),
 'Sayda':      ('B1-sahip-celiskisi', 'sayda', 'atlas memluk@1281 · TDV: Julien şehri Templier şövalyelerine teslim etti (659/1261).', '1261-1291 Templier/Kudüs Kr. — atlas 1281 memluk şüpheli'),
 'Kirman':     ('B1-sahip-celiskisi', 'kirman', 'atlas ilhanli@1281 · TDV: Barak Hâcib 619 (1222) Kutluğhanlılar’ı kurdu; Kutluğ Terken dönemi (1257-1283). kutlughanli künyesi VAR (1222-1306).', 'öneri: {1222→1281 kutlughanli} + 1281 dönemi kutlughanli (tâbi v:ilhanli?)'),
 'Harput (Elazığ)': ('B1-sahip-celiskisi', 'harput', 'atlas artuklu@1281 · TDV: 1234’e kadar Artuklular’ın elinde kalan şehir bu tarihte Anadolu Selçukluları, Kösedağ’dan sonra İlhanlılar tarafından zaptedildi.', 'öneri: {1234→? selcuklu} — 1281 artuklu çelişkili'),
 'Diyarbakır': ('B1-sahip-celiskisi', 'diyarbakir', 'atlas artuklu@1281 · TDV: 1259’da Hülâgû tarafından alındı ve Moğollar’a tâbi olan Anadolu Selçuklu Devleti’ne geri verildi.', '1281 sahibi selcuklu (v:ilhanli) olmalı mı?'),
 'Alanya':     ('B1-sahip-celiskisi', 'alanya', 'atlas karaman@1281 · TDV: Kıbrıs Krallığı’na bağlı iken 1221 yılında I. [Keykubad] …', 'öneri {1221→1281 selcuklu}; 1281 karaman şüpheli (künye içinde ama TDV cümlesi yok)'),
 'Silifke':    ('B1-sahip-celiskisi', 'silifke', 'atlas karaman@1281 · TDV: Levon … Silifke’yi Saint Jean şövalyelerine terketti (1210).', '1281 sahibi ölçülmeli'),
 'Ahıska':     ('B1-sahip-celiskisi', 'ahiska', 'atlas gurcistan@1281 · TDV: 1267-1268’de Moğol hâkimiyeti; atabegler 1268-1578 yönetti. samtshe-atabegligi künyesi VAR (1268).', 'öneri {1268→1281 samtshe-atabegligi}; 1281 dönemi de'),
 'Herat':      ('B1-sahip-celiskisi', 'herat', 'atlas ilhanli@1281 · TDV: 571 Gurlu · 605 Hârizmşah · 618 (1221) Tuluy. kert künyesi VAR (1244-1389).', 'Kert Herat merkezlidir — 1281 kert (v:ilhanli) olmalı mı? cümle yok, ölçülmeli'),
 'Ankara':     ('B1-sahip-celiskisi', 'ankara', 'atlas ahiler@1281 AMA ahiler künyesi 1290’da başlar (künye aşımı) · TDV: Keykubad … teslim oldu (1212).', 'öneri {1212→1281 selcuklu}; ahiler 1281 künye penceresi dışında'),
 'Tire':       ('B1-sahip-celiskisi', 'tire', 'atlas bizans@1281 · TDV: Kılıcarslan’ın kumandanı Şemseddin Bey tarafından 1186’da fethedildi.', 'sonrası bulunamadı; 1281 bizans ters yön ölçülmeli'),
 'Eskişehir':  ('B1-sahip-celiskisi', 'usak', 'atlas bizans@1281 · TDV (UŞAK maddesi): Manuel’in ölümünden (1180) iki yıl sonra … Eskişehir … tekrar Selçuklular’ın egemenliğine geçti.', 'öneri {1182→1281 selcuklu} — ama cümle başka maddeden, eskisehir maddesiyle teyit'),
 'Alaşehir':   ('B1-sahip-celiskisi', 'alasehir', 'atlas selcuklu@1281 · TDV: 1075/1076 fethedildi, birkaç defa el değiştirdikten sonra 1098’de I. [Aleksios]…', 'Philadelphia 1281’de Selçuklu mu? ters yön ölçülmeli'),
 'Besni':      ('B1-sahip-celiskisi', 'besni', 'atlas memluk@1281 · TDV: kale 1261’de Ermeni kralına teslim oldu.', 'Memlük’e dönüş günü bulunamadı'),
 'Behisni (Besni)': ('B1-sahip-celiskisi', 'besni', 'atlas memluk@1281 · TDV: kale 1261’de Ermeni kralına teslim oldu.', 'Memlük’e dönüş günü bulunamadı'),
 'Hama':       ('B1-sahip-celiskisi', 'hama', 'atlas memluk@1281 · eyyubi-hama künyesi 1178-1342 VAR (Memlük’e tâbi Eyyûbî kolu).', 'cümle yok — 1281 eyyubi-hama (v:memluk) olmalı mı?'),
 'Yezd':       ('B1-sahip-celiskisi', 'yezd', 'atlas ilhanli@1281 · yezd-atabegligi künyesi 1141-1318 VAR.', 'cümle yok — ölçülmeli'),
 'Sisam':      ('B1-sahip-celiskisi', 'sisam', 'atlas ceneviz@1281 · TDV: 1205-1225 Latin işgali; `ceneviz` devletler.js’te KÜNYE OLARAK YOK (harita: anahtarı olabilir).', 'ceneviz 1281 şüpheli'),
 'Midilli':    ('B1-sahip-celiskisi', 'midilli', 'atlas ceneviz@1281 · Gattilusio dönemi 1355 — TDV cümlesi yok.', 'ceneviz 1281 şüpheli'),
 # B2 — EPOK: 1281’de atlas ilhanli der; TDV’nin son el değiştirmesi Selçuklu’ya (Kösedağ sonrası vesayet). Selçuklu önerisi 1281’de YAPAY kırılma üretir.
 'Erzincan':   ('B2-epok', 'erzincan', 'Alâeddin Keykubad tarafından Anadolu Selçuklu topraklarına katıldı (1228).', '{1228→? selcuklu}; İlhanlı başlangıcı kaynaktan (yoksa 1281’de sahte kırılma)'),
 'Erzurum':    ('B2-epok', 'erzurum', 'Süleyman Şah Saltukoğulları Beyliği’ni ortadan kaldırarak Erzurum’u … iktâ etti (1202).', '{1202→? selcuklu}'),
 'Van':        ('B2-epok', 'van', 'Van 1232’de Selçuklu hâkimiyetine girdi.', '{1232→? selcuklu}'),
 'Bitlis':     ('B2-epok', 'bitlis', '… Bitlis’i de Anadolu Selçuklu Devleti sınırları içine kattı (1232)', '{1232→? selcuklu}'),
 'Malatya':    ('B2-epok', 'malatya', 'Süleyman Şah … şehri zaptetti (19 Ramazan 597 / 23 Haziran 1201).', '{1201-06-23→? selcuklu}'),
 'Kemah':      ('B2-epok', 'kemah', 'Alâeddin Keykubad tarafından 625 (1228) yılında Anadolu Selçuklu Devleti topraklarına katıldı', '{1228→? selcuklu}'),
 'Bayburt':    ('B2-epok', 'bayburt', 'Selçuklular 1202’de Saltuklu Devleti’ne son verince Bayburt’u da ele geçirdiler. … 1243 … şehir antlaşma gereği Selçuklu idaresinde kaldı.', '{1202→1281 selcuklu} — TDV açıkça Selçuklu idaresi der; atlas 1281 ilhanli ile ÇELİŞİR'),
 'Samsun':     ('B2-epok', 'samsun', 'Rükneddin Süleyman Şah, Samsun’a kadar Doğu Karadeniz topraklarını tekrar ele geçirdi (590/1194).', '{1194→? selcuklu}'),
 'Kayseri':    ('B2-epok', 'kayseri', '1243’teki Kösedağ Savaşı’ndan sonra Kayseri … Moğollar’ın eline geçti', 'Moğol yağması mı devir mi — ayrım koordinatörün'),
 'Sivas':      ('B2-epok', 'sivas', '641 (1243) Kösedağ bozgunu ile Baycu Noyan tarafından ele geçirilen Sivas üç gün süreyle yağmalandı.', 'yağma ≠ devir'),
 'Amasya':     ('B2-epok', 'amasya', '1243 … Moğollar şehri zaptettiler ve … Moğol valileri tarafından idare edilmeye başladı.', '{1243→1256 mogol-imparatorlugu? → ilhanli} — künye geçişi koordinatörün'),
 'Isfahan':    ('B2-epok', 'isfahan', '1194’te Hârizmşahlar’ın ve 1235-1236’da Moğollar’ın eline geçen İsfahan', 'yıl 1235/1236 belirsiz → yıl yazılmaz; mogol-imparatorlugu→ilhanli geçişi'),
 'Merâga':     ('B2-epok', 'meraga', 'Şehir 628’de (1231) Moğollar tarafından ikinci defa ele geçirildi', 'mogol-imparatorlugu→ilhanli geçişi'),
 'Serahs':     ('B2-epok', 'serahs', '618’de (1221) Moğol istilâsına mâruz kaldı ve … Tuluy Han tarafından teslim alındı.', 'mogol-imparatorlugu (1221→?) sonra ilhanli'),
 'Kaşgar':     ('B2-epok', 'kasgar', 'Cebe Noyan … şehri ele geçirmesiyle (1218)', '{1218→1227 mogol-imp.} cagatay künyesi 1227 — geçiş günü künyeden'),
 'Semerkant':  ('B2-epok', 'semerkant', 'Cengiz Han … şehri tahrip etti (Muharrem 617 / Mart 1220).', '{1220-03→ mogol-imp. → cagatay}'),
 'Taşkent':    ('B2-epok', 'taskent', '1220’de Cengiz Han tarafından istilâ edildi.', 'aynı'),
 'Hucend':     ('B2-epok', 'hucend', 'şehir Moğollar’ın eline geçti (1219).', 'aynı'),
 'Nahçıvan':   ('B2-epok', 'nahcivan', 'Moğollar’ın 618’de (1221) burayı ele geçirmesinden sonra', 'aynı'),
 'Nusaybin':   ('B2-epok', 'nusaybin', 'yüzyılın ortalarında Hülâgû tarafından işgal edilen şehir', 'yıl yok · atlas artuklu@1281 ile çelişir'),
 'Cizre':      ('B2-epok', 'cizre', '1251’de … el-Melikü’n-Nâsır … ile Bedreddin Lü’lü’ … Cizre’yi istilâ ederek', 'sonrası (İlhanlı) yılı yok'),
 'Erbil':      ('B2-epok', 'erbil', 'Bağdat’ın 1258’de Hülâgû’nun eline geçmesinden sonra burası da zaptedildi.', '“sonra” → yıl kesin değil; 1232 abbasi dönemi kaynaklı'),
 'Hasankeyf':  ('B2-epok', 'hasankeyf', '… Hasankeyf’i zaptederek … oğlu el-Melikü’s Sâlih’in idaresine bıraktı (629/1231-32)', 'hicrî 629 iki miladî yıla düşer → yıl kesin değil'),
 'Sinop':      ('B2-epok', 'sinop', 'fethedildi (2 Kasım 1214) · Trabzon Rumları kısa süre (657/1259) · Pervâne geri aldı (664/1266)', '{1214-11-02→1259 selcuklu}{1259→1266 trabzon-rum}{1266→1281 ?} — pervane künyesi 1277’de başlar'),
 'Muğla':      ('B2-epok', 'mugla', 'Karya bölgesi 1261 yılından itibaren Menteşeoğulları’nın hâkimiyetine girdi.', 'BÖLGE hükmü şehre taşınmaz (§4) · mentese künyesi 1280’de başlar'),
 'Balat (Palatia)': ('B2-epok', 'balat', 'şehir 1273’e doğru tekrar Türk hâkimiyetine girdi.', '“Türk” ≠ Menteşe · “doğru” = yaklaşık · mentese künyesi 1280'),
}
# ── D: TDV cümlesi o noktanın 1000-1280 varlığını KANITLAMIYOR (tuzak)
RED = {
 'Yenişehir (Bursa)': 'cümle Bohemund’un 1082 kuşatması = Tesalya Yenişehri (Larissa); Bursa Yenişehri değil (§4 ② canlı slug yanlış madde)',
 'Köprühisar (Yenişehir)': 'aynı yenisehir cümlesi — Larissa',
 'Çanakkale': '“Çanakkale yöresine” — yöre; şehir 1462 kuruluşu',
 'Bartın': '“Bartın yöresini … kesin olarak bilinmemektedir” — yöre, belirsiz',
 'Tokat': '“Milâttan önce 1750-1200” — MÖ yılı elenmemiş',
 'Revan': 'hicrî 1025 (= 1616)',
 'Rodos': 'hicrî 1178 (= 1764-65)',
 'Osmancık': 'hicrî 1117 (= 1705-06)',
 'Basra': '“1000’den az” — sayı, yıl değil',
 'Tûs': '“1000’den fazla köyü” — sayı (varlık Yâkût ile XIII. yy’da ayrıca doğru ama bu cümle yıl vermez)',
 'Ladik (Amasya)': 'cümle AMASYA maddesinden — başka yer',
 'Ahar (Karadağ)': 'karadag maddesi = KARADAĞ (Montenegro) prensliği — yanlış madde',
 'Kilise': 'cümle Kudüs Kıyâme Kilisesi — yanlış madde',
 'Türkistan (Yesi)': 'cümle Karahanlı devletini tarihliyor, şehri değil',
 'Şırnak': '“1240 yılında … yöre” — yöre; nokta bugün 1920’de başlıyor',
}
out = {'_': 'YERLESIM-1281-ONCE öneri — ELLE OKUNDU, UYGULANMADI. Kaynak: TDV cümleleri denetim/ONCE1281-YERLESIM-tdv-onbellek + canlı TDV. Araç: denetim/ARAC-YERLESIM-1281-ONCE-{A,B,C}.py',
       'evren': {'girdi_dosyasi': len(girdi.GIRDI_DOSYALARI), 'nokta': len(Y), 'var_aday': len(A), 'kunye': len(K)},
       'donem_ekle': [], 'karar': [], 'red': [], 'yalniz_varlik': [], 'eksik_nokta': [], 'sinav': {}}
ihlal = collections.Counter(); ihlal_liste = []
for ad, (ds, slug, cumle) in ONERI.items():
    x = A[ad]; mevcut = x['ilk_donem']
    for d in ds:
        if d['f'] >= d['t']: ihlal['sifir_veya_ters'] += 1; ihlal_liste.append((ad, d, 'sıfır/ters'))
        k = K.get(d['d'])
        if not k: ihlal['kunye_yok'] += 1; ihlal_liste.append((ad, d, 'künye yok'))
        else:
            kf, kt = k['f'].zfill(10), (k.get('t') or '9999').zfill(10)
            if d['f'] < kf or d['t'] > kt:
                ihlal['kunye_penceresi'] += 1; ihlal_liste.append((ad, d, f'künye {kf}–{kt}'))
    for a, b in zip(ds, ds[1:]):
        if a['t'] != b['f']: ihlal['ic_bosluk_ya_da_cakisma'] += 1; ihlal_liste.append((ad, (a, b), 'iç kopukluk'))
    # mevcut dönemle çakışma: önerinin sonu mevcut ilk dönemin başını AŞAMAZ
    for pd in (Y[ad].get('s') or []) + (Y[ad].get('d') or []):
        for d in ds:
            if d['f'] < pd.get('t', '9999') and pd.get('f', '0000') < d['t']:
                ihlal['mevcutla_cakisma'] += 1; ihlal_liste.append((ad, d, f"mevcut {pd}"))
    son = ds[-1]
    out['donem_ekle'].append({'nokta': ad, 'dosya': x['dosya'], 'islem': 'donem-ekle', 'yeni_donemler': ds,
        'mevcut_ilk_donem': mevcut, 'bitisik': son['t'] == mevcut.get('f'), 'ayni_sahip_birlestirilebilir': son['d'] == mevcut.get('d'),
        'kaynak': S + slug, 'tdv_cumle': cumle})
for ad, (sinif, slug, kanit, oneri) in KARAR.items():
    if ad not in A: continue
    out['karar'].append({'nokta': ad, 'sinif': sinif, 'mevcut_ilk_donem': A[ad]['ilk_donem'], 'kaynak': S + slug, 'kanit': kanit, 'oneri_veya_soru': oneri})
for ad, neden in RED.items():
    out['red'].append({'nokta': ad, 'tdv_cumle': A[ad]['tdv_cumle'], 'neden': neden})
kullanilan = set(ONERI) | set(KARAR) | set(RED)
for ad, x in A.items():
    if ad not in kullanilan:
        out['yalniz_varlik'].append({'nokta': ad, 'mevcut_ilk_donem': x['ilk_donem'], 'tdv_yil': x['tdv_yil'], 'kaynak': S + x['slug'], 'tdv_cumle': x['tdv_cumle'],
                                     'sahip_1281_oncesi': 'bulunamadı (önbellekte 1180-1280 el değiştirme cümlesi yok)'})
out['sinav'] = {'onerilen_donem': sum(len(v[0]) for v in ONERI.values()), 'ihlal': dict(ihlal), 'ihlal_liste': [str(i) for i in ihlal_liste]}
cnt = {k: len(out[k]) for k in ('donem_ekle', 'karar', 'red', 'yalniz_varlik')}
print('sınıf sayıları:', cnt, 'toplam', sum(cnt.values()))
print('önerilen dönem:', out['sinav']['onerilen_donem'], '· ihlal:', dict(ihlal) or 0)
for i in ihlal_liste: print('  İHLAL', i)
out['_sayim'] = cnt
json.dump(out, open('denetim/YERLESIM-1281-ONCE-ONERI.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
