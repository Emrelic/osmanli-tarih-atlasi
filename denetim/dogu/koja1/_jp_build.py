# -*- coding: utf-8 -*-
# Japonya yarisi: _part_jp_*.json uretir (kaynak alintilari _kaynak/ altindaki metinlerde sinandi).
import json, os, io, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
D = os.path.dirname(os.path.abspath(__file__))
WS = 'zh.wikisource.org/wiki/'

def kay(eser, url, alinti):
    return '%s (%s%s, okundu): %s' % (eser, WS, url, alinti)

K_NARA710 = kay('Shoku Nihongi j.5, Wadō 3 (710)', '續日本紀/卷第五', '「三月…辛酉。始遷都于平城。以左大臣正二位石上朝臣麻呂爲留守。」')
K_HEIAN794 = kay('Nihon Kōki j.3, Enryaku 13 (794)', '日本後紀/卷第三', '「十月…辛酉。車駕遷于新京。」 · 「丁丑。詔。…宜改山背国、為山城国。又子来之民、謳歌之輩、異口同辞、号曰平安京。」')
K_NAGAOKA784 = kay('Shoku Nihongi j.38, Enryaku 3 (784)', '續日本紀/卷第卅八', '「十一月戊戌朔。…戊申。天皇移幸長岡宮。」')
K_KAM1180 = kay('Azuma Kagami j.1, Jishō 4 (1180)', '吾妻鏡/卷001', '「十月小十五日甲午。武衛始入御鎌倉御亭。此間爲景義奉行所令修理也。」')
K_SHUGO1185 = kay('Azuma Kagami j.5, Bunji 1 (1185)', '吾妻鏡/卷005', '「十一月大廿八日丁未。補任諸國平均守護地頭。不論權門勢家庄公。」 · 「十一月大廿九日戊申。北條殿所被申之諸國守護地頭兵粮米事。早任申請可有御沙汰之由。被仰下之間。師中納言被傳勅於北條殿云々。」')
K_NANIWA646 = kay('Nihon Shoki j.25, Taika 1 (645)', '日本書紀/卷第廿五', '「冬十二月乙未朔癸卯，天皇遷都難波長柄豐碕。」')
K_NANOTSU536 = kay('Nihon Shoki j.18, Senka 1 (536)', '日本書紀/卷第十八', '「夏五月辛丑朔。詔曰。…夫筑紫國者遐迩之所朝届。去來之所關門。…修造官家那津之口。」 …「是年也太歳丙辰。」')
K_IWAI528 = kay('Nihon Shoki j.17, Keitai 22 (528)', '日本書紀/卷第十七', '「廿二年冬十一月甲寅朔甲子、大將軍物部大連麁鹿火、親與賊帥磐井、交戰於筑紫御井郡。…遂斬磐井、果定疆場。」')
K_KENPO604 = kay('Nihon Shoki j.22, Suiko 12 (604)', '日本書紀/卷第廿二', '「十二年…夏四月丙寅朔戊辰，皇太子親肇作憲法十七條。」')
K_ISSHI645 = kay('Nihon Shoki j.24, Kōgyoku 4 (645)', '日本書紀/卷第廿四', '「六月丁酉朔甲辰。中大兄蜜謂倉山田麻呂臣曰：「三韓進調之日，必將使卿讀唱其表。」…戊申。天皇御大極殿，古人大兄侍焉。…即共子麻呂等出其不意，以劔傷割入鹿頭肩。」 · 「己酉蘇我臣蝦夷等臨誅，悉燒《天皇記》、《國記》、珍寶。」')
K_TAIKA646 = kay('Nihon Shoki j.25, Taika 2 (646)', '日本書紀/卷第廿五', '「春正月甲子朔，賀正禮畢，即宣改新之詔曰：」')
K_DAIBUTSU743 = kay('Shoku Nihongi j.15, Tenpyō 15 (743)', '續日本紀/卷第十五', '「冬十月辛巳。詔曰。…粤以天平十五年歳次癸未十月十五日。發菩薩大願奉造盧舍那佛金銅像一躯。」')
K_OSHIKATSU764 = kay('Shoku Nihongi j.25, Tenpyō-hōji 8 (764)', '續日本紀/卷第廿五', '「乙巳。太師藤原惠美朝臣押勝逆謀頗泄。高野天皇遣少納言山村王。收中宮院鈴印。」 · 「癸亥。勅。逆賊惠美仲麻呂。…乃以今月十一日。起兵作逆。」 · 「壬子。軍士石村村主石楯斬押勝傳首京師。」')
K_OTENMON866 = kay('Nihon Sandai jitsuroku j.12, Jōgan 8 (866)', '日本三代實錄/卷第十二', '「閏三月丙午朔。…十日乙夘。夜。應天門火。延燒棲鳳翔鸞兩樓。」')
K_YOSHIFUSA866 = kay('Nihon Sandai jitsuroku j.13, Jōgan 8 (866)', '日本三代實錄/卷第十三', '「八月癸酉朔。…十九日辛夘。勅太政大臣。攝行天下之政。」')
K_MASAKADO = 'Fusō ryakki j.25 (Suzaku Tennō) (zh.wikisource.org/wiki/扶桑略記/第025, okundu): '

TAK = 'ic_not_takvim'

def gun_not(isaret, yeniay, jul):
    return ('Kaynaktaki sexagenary gün işareti (%s) ile ay başı (ortalama yeniay hesabı: %s, ±1) kesiştirilerek Jülyen %s bulundu '
            '(gün indeksi=(JDN+49)%%60, 2000-01-01=戊午 ile sınandı; aynı ayın başka günleriyle iç tutarlılık denetlendi).') % (isaret, yeniay, jul)

# ---------------- kronoloji_cok ----------------
def M(t, b, tur, taraf, yer, d, kaynak, gun, kes, ic=None, tak=None, onem=3, dunya=1):
    m = {'t': t, 'b': b, 'tur': tur, 'onem': onem, 'dunya': dunya, 'kapsam': 'ic', 'etiket': ['konu-siyasi'], 'yer': yer,
         'taraflar': taraf, 'd': d, 'kaynak': kaynak, 'gun': gun, 'kesinlik': kes}
    if ic: m['ic_not'] = ic
    if tak: m[TAK] = tak
    return m

cok = []
# --- yamato ---
cok.append(M('0528-12-07', 'Yamato ordusu Chikushi hükümdarı Iwai\'yi Mii\'de yenip öldürdü', 'savas', ['yamato'], 'Chikushi (Kuzey Kyūshū)',
  'Mononobe no Arakabi komutasındaki Yamato ordusu Chikushi (Kuzey Kyūshū) yerel hükümdarı Iwai ile Mii bölgesinde (Chikushi Mii-gun) savaştı; Iwai öldürüldü ve kaynağa göre sınır kesinleşti. Aynı yılın 12. ayında Iwai\'nin oğlu Kuzuko babasının cezasına ortak olmaktan korkmuştur.',
  K_IWAI528, 'Keitai 22/11/11 (甲子)', 'gun',
  'Mevcut 0527-01-01 «Iwai isyanı» maddesi (yıl hassasiyeti) isyanın başlangıcıdır; bu madde sonuç gününü ekler. Nihon Shoki Yamato sarayının sonradan derlenmiş (720) resmî kroniğidir; Iwai olayının Nihon Shoki dışında çağdaş yazılı kaynağı yoktur.',
  gun_not('甲子', '528-11-27', '528-12-07'), 2))
cok.append(M('0536-06-05', 'Senka: Chikushi\'de Nanotsu (Hakata) limanına devlet ambarı yapılması emri', 'siyaset', ['yamato'], 'Nanotsu (Hakata)',
  'İmparator Senka, Chikushi\'nin dış dünyaya açılan kapı olduğunu belirtip çeşitli eyaletlerin ambar tahılını taşıtarak «Nanotsu\'nun ağzında» devlet ambarı (miyake) yaptırmayı buyurdu. Hakata Körfezi\'ndeki bu liman Yamato\'nun Kyūshū ve Kore kapısı oldu.',
  K_NANOTSU536, 'Senka 1/5/1 (辛丑朔)', 'gun',
  'Nanotsu = Hakata limanı özdeşleştirmesi tarihçilikte yaygındır ama bu oturumda ayrı akademik kaynakla açılmadı (atıf). Senka yılı «太歳丙辰» ibaresiyle 536 olarak kaynağın kendisinden doğrulandı.',
  gun_not('辛丑 (ay başı)', '536-06-05', '536-06-05'), 2))
cok.append(M('0604-05-06', 'Prens Shōtoku on yedi maddelik Anayasa\'yı yazdı', 'siyaset', ['yamato'], 'Yamato',
  'Naip Prens Shōtoku Suiko saltanatının 12. yılında kabine hiyerarşisini ve memur ahlakını düzenleyen on yedi maddelik «Anayasa»yı yazdı; metin Konfüçyüsçü, Budist ve Legist ilkeleri birleştirir.',
  K_KENPO604, 'Suiko 12/4/3 (戊辰)', 'gun',
  'Mevcut 0604-01-01 maddesinin gün hassasiyetli doğrulaması. Anayasa metninin Shōtoku\'ya ait olup olmadığı modern tarihçilikte tartışmalıdır (Nihon Shoki derlemesi 720); kaynak yalnız Nihon Shoki\'nin anlatısıdır.',
  gun_not('戊辰', '604-05-04', '604-05-06'), 3))
cok.append(M('0645-07-10', 'Nakano Ōe ve Nakatomi Kamatari Soga no Iruka\'yı saray huzurunda öldürdü', 'siyaset', ['yamato'], 'Asuka',
  'Üç Kore devletinin elçileri adına çağrılan tören sırasında Nakano Ōe ve Nakatomi no Kamatari, Soga no Iruka\'yı Büyük Divan Salonu\'nda kılıçla öldürdü; ertesi gün babası Emishi, Tenno Ki ve Koku Ki kayıtlarını yakıp öldü. Soga hâkimiyeti sona erdi ve Taika Reformu\'nun yolu açıldı.',
  K_ISSHI645, 'Kōgyoku 4/6/12 (戊申); Emishi 6/13 (己酉)', 'gun',
  'Mevcut 0645-01-01 «darbe» maddesinin gün hassasiyetli doğrulaması. Emishi\'nin ölümü ertesi gün (645-07-11).',
  gun_not('丁酉 (ay başı)+11 gün = 戊申', '645-06-30; gün işaretine göre 06-29', '645-07-10'), 4))
cok.append(M('0646-01-01', 'Kōtoku sarayı Naniwa Nagara Toyosaki\'ye taşıdı', 'baskent', ['yamato'], 'Naniwa (Osaka)',
  'Taika 1. yılın 12. ayında İmparator Kōtoku başkenti Naniwa Nagara Toyosaki\'ye taşıdı; metne göre «baharda yazdan beri fareler Naniwa\'ya yöneldi» diye bu taşınma önceden sezilmişti. Naniwa limanı Asuka-sonrası Yamato yönetiminin kapısı ve Osaka yerleşiminin ilk tarihli saray tanığı oldu.',
  K_NANIWA646, 'Taika 1/12/9 (癸卯)', 'gun',
  'Jülyen karşılığı 646-01-01 tesadüfen yıl başına düşer; kaynakta gün işareti ve ay başı (乙未朔) birlikte verildiği için «gün» hassasiyetidir.',
  gun_not('癸卯 = 乙未朔 + 8 gün', '645-12-24', '646-01-01'), 3))
cok.append(M('0646-01-22', 'Taika\'nın 2. yılında Reform Fermanı (Kaishin no mikotonori) ilan edildi', 'siyaset', ['yamato'], 'Naniwa (Osaka)',
  'Taika 2. yılın ilk gününde, yeni yıl töreni biter bitmez, «Yenileşme Fermanı» (改新之詔) ilan edildi. Kaynak metnin devamındaki madde içeriği (arazi, idare, vergi) bu oturumda okunmadı.',
  K_TAIKA646, 'Taika 2/1/1 (甲子朔)', 'gun',
  'Fermanın metni Nihon Shoki\'de sonradan düzenlenmiş olabilir (Taihō-sonrası idari terimler); gün işareti kaynaktadır.',
  gun_not('甲子 (ay başı)', '646-01-22', '646-01-22'), 3))
# --- nara ---
cok.append(M('0710-04-13', 'İmparatoriçe Genmei sarayı Heijō-kyō\'ya (Nara) taşıdı', 'baskent', ['nara-japonya'], 'Nara (Heijō-kyō)',
  'Wadō 3. yılın 3. ayında saray resmen Heijō-kyō\'ya taşındı; Fujiwara-kyō\'da kalan başkenti Sol Bakan İsonokami no Maro korumakla görevlendirildi. Nara dönemi bu günle başlar.',
  K_NARA710, 'Wadō 3/3 (辛酉)', 'gun',
  'Mevcut 0710-01-01 ve 0710-01-01 «baskent» maddelerinin gün düzeltmesi: 710-04-13. Ayın kaç olduğunu kaynak ayrıca yazmaz; Jülyen gün işaretten bulundu (3. ayın 辛酉 günü).',
  gun_not('辛酉 (3. ay içi; ≈ 10. gün)', '710-04-04', '710-04-13'), 4))
cok.append(M('0743-11-06', 'Shōmu Büyük Buda (Rushana) heykeli yapım fermanını yayımladı', 'siyaset', ['nara-japonya'], 'Nara (Heijō-kyō)',
  'Tenpyō 15. yılın 10. ayında İmparator Shōmu, devletin bütün bakırıyla Rushana Buda\'nın altın-bakır heykelini yaptırmaya yemin ettiğini bildiren ferman yayımladı. Heykel sonradan Nara\'daki Tōdai-ji\'nin Büyük Buda\'sı oldu.',
  K_DAIBUTSU743, 'Tenpyō 15/10/15 (辛巳)', 'gun',
  'Mevcut 0752-01-01 «göz açma töreni» maddesinden ayrı olay (yapım fermanı). Ferman Shigaraki sarayında yayımlandı; heykel sonradan Nara\'ya taşındı.',
  gun_not('辛巳 = 10. ay 15. gün', '743-10-23', '743-11-06'), 4))
cok.append(M('0764-10-10', 'Fujiwara no Nakamaro (Emi no Oshikatsu) isyanı ortaya çıktı', 'isyan', ['nara-japonya'], 'Nara (Heijō-kyō)',
  'Tenpyō-hōji 8. yılın 9. ayında Emi no Oshikatsu (Fujiwara no Nakamaro) askerî yetkisini artırdıktan sonra darbe planı sızdı; Kōken-Shōtoku sarayı mühür ve çanı almak için Yamamura Ō\'yu yolladı, Oshikatsu da askerî hamleyle karşı koydu. Fiilî çatışma bu günle başladı.',
  K_OSHIKATSU764, 'Tenpyō-hōji 8/9/11 (乙巳)', 'gun', None,
  gun_not('乙巳 = 9. ay 11. gün', '764-09-30', '764-10-10'), 3))
cok.append(M('0764-10-17', 'Oshikatsu Ōmi\'de öldürüldü, isyan bastırıldı', 'isyan', ['nara-japonya'], 'Nara (Heijō-kyō)',
  'Ōmi\'ye kaçan Emi no Oshikatsu 9. ayın 18. günü bir asker tarafından öldürüldü ve başı başkente gönderildi. İsyancının atamalarının iptali ve Dōkyō\'nun yükselişi izleyen yıllarda yaşandı.',
  K_OSHIKATSU764, 'Tenpyō-hōji 8/9/18 (壬子)', 'gun', None,
  gun_not('壬子 = 9. ay 18. gün', '764-09-30', '764-10-17'), 3))
cok.append(M('0784-12-27', 'Kammu sarayı Nara\'dan Nagaoka-kyō\'ya taşıdı', 'baskent', ['nara-japonya'], 'Nagaoka-kyō (Yamashiro)',
  'Enryaku 3. yılın 11. ayında İmparator Kammu Nagaoka sarayına geçti; ardından Kamo ve Matsuo tapınaklarına taşınma haberi verildi. Heijō-kyō bu tarihten itibaren fiilen eski başkent oldu; Nagaoka dönemi 794\'te Heian-kyō\'ya geçişe kadar sürdü.',
  K_NAGAOKA784, 'Enryaku 3/11/11 (戊申; 11. ay 戊戌朔)', 'gun',
  'KOJA_RAPOR2 madde 4: Nagaoka (784-794) ayrı polity/dönem mi sorusu Emre kararıdır; bu madde yalnız taşınma gününü verir. Nagaoka-kyō atlasta yerleşim kaydı olmadığından sinir maddesi yazılmadı.',
  gun_not('戊申 = 戊戌朔 + 10', '784-12-17', '784-12-27'), 3))
# --- heian ---
cok.append(M('0794-11-18', 'Kammu sarayı Heian-kyō\'ya (Kyoto) taşıdı; Heian dönemi başladı', 'baskent', ['heian-japonya'], 'Kyoto (Heian-kyō)',
  'Enryaku 13. yılın 10. ayında imparatorun arabası yeni başkente girdi; şehir Katsurano\'daki Yamashiro bölgesinde kuruldu. Sarayın ikamet ettiği bu şehir 1868\'e kadar imparatorluk başkenti kaldı.',
  K_HEIAN794, 'Enryaku 13/10 (辛酉)', 'gun',
  'Mevcut 0794-01-01 maddesinin gün düzeltmesi. Aynı kaynakta 794-12-04 (11. ay 丁丑) «Heian-kyō» adı verildi.',
  gun_not('辛酉 (10. ay içi; ≈ 21-22. gün)', '794-10-29', '794-11-18'), 4))
cok.append(M('0794-12-04', 'Yamashiro eyaletinin adı değişti, yeni başkent «Heian-kyō» adını aldı', 'siyaset', ['heian-japonya'], 'Kyoto (Heian-kyō)',
  'Taşınmadan yaklaşık iki hafta sonra ferman Yamashiro eyaletinin adını (山背) 山城 olarak değiştirdi ve halkın ağız birliğiyle verdiği «Heian-kyō» adını resmileştirdi.',
  K_HEIAN794, 'Enryaku 13/11 (丁丑)', 'gun', None,
  gun_not('丁丑 (11. ay içi; 11. ay 辛未 = 794-11-28)', '794-11-27', '794-12-04'), 2))
cok.append(M('0866-04-28', 'Ōtenmon Olayı: Heian sarayının Ōtenmon kapısı yandı', 'siyaset', ['heian-japonya'], 'Kyoto (Heian-kyō)',
  'Jōgan 8. yılın artık 3. ayının 10. gecesi Ōtenmon kapısı ve iki yan kulesi yandı; yangın Fujiwara no Yoshifusa\'nın Ōtomo ve Ki klanlarını tasfiye etmesine yol açtı. Olay Fujiwara naipliğinin kurumsallaşmasının dönüm noktasıdır.',
  K_OTENMON866, 'Jōgan 8/閏3/10 (乙卯)', 'gun',
  'Mevcut kayıtlarda bu olay yoktur (858-872 Fujiwara maddesi yıl hassasiyetli). Suçluluk soruşturması Sandai jitsuroku j.13\'te (8. ay) kayıtlıdır.',
  gun_not('乙卯 = 閏3. ay 10. gün (丙午朔=866-04-19)', '866-04-19', '866-04-28'), 3))
cok.append(M('0866-10-01', 'Fujiwara no Yoshifusa fiilen naipliğe (sesshō) getirildi', 'hukumdar', ['heian-japonya'], 'Kyoto (Heian-kyō)',
  'Jōgan 8. yılın 8. ayında imparator genç Seiwa adına Büyük Bakan Yoshifusa\'ya «ülkenin yönetimini üstlenmesi» (攝行天下之政) emrini verdi; bu, Fujiwara naipliği (sesshō) uygulamasının kaynaklı başlangıcıdır.',
  K_YOSHIFUSA866, 'Jōgan 8/8/19 (辛卯; 8. ay 癸酉朔)', 'gun',
  'Mevcut 0858-01-01 maddesi Yoshifusa hâkimiyetini yıl hassasiyetiyle verir; bu madde naipliğin resmî atanma gününü ekler. «Sesshō» terimi kaynakta geçmez; ifade 攝行天下之政\'dir.',
  gun_not('辛卯 = 癸酉朔 + 18', '866-09-13', '866-10-01'), 4))
cok.append(M('1180-11-04', 'Minamoto no Yoritomo Kamakura\'ya girdi', 'isyan', ['heian-japonya'], 'Kamakura',
  'Izu\'da ayaklanan Yoritomo, Sagami\'ye girdikten sonra Jishō 4. yılın 10. ayının 15. günü Kamakura\'daki konağa yerleşti; tamir işini Kageyoshi yürütmüştü. Kantō\'da Heian sarayına karşı fiilî bir yönetim burada kuruldu.',
  K_KAM1180, 'Jishō 4/10/15 (甲午)', 'gun',
  'KOJA_RAPOR2 madde 3: Kamakura (şogunluk) f için 1180-11-04 «fiilî», 1185-12-22 «kurumsal» başlangıç öneridir; Emre kararı bekler. Yerleşim zinciri bu madde için de Heian ile açılır (BEYAN: Yoritomo\'nun Kantō yönetimi hukuken saray yetkisine dayanıyordu; kamakura künyesi 1185\'ten önce yoktur).',
  gun_not('甲午 = 10. ay 15. gün (ay başı 1180-10-21)', '1180-10-21', '1180-11-04'), 4))
cok.append(M('1185-12-22', 'Yoritomo\'ya ülke çapında shugo ve jitō atama yetkisi tanındı', 'siyaset', ['kamakura', 'heian-japonya'], 'Kyoto (Heian-kyō)',
  'Bunji 1. yılın 11. ayının 28-29. günlerinde Hōjō Tokimasa\'nın Kyoto\'da yaptığı başvuru üzerine saray, bütün eyaletlerde shugo ve jitō atanmasını ve tahıl vergisi toplanmasını onayladı. Bu, Heian sarayının fiilî yönetim tekelinin kaybı ve Kamakura bakufu hukukî temelinin atıldığı gün sayılır.',
  K_SHUGO1185, 'Bunji 1/11/28 (丁未) başvuru; 11/29 (戊申) saray onayı', 'gun',
  'KOJA_REF.json: heian-japonya t = kamakura f = 1185-12-22 önerisinin kaynak maddesi. Saray bu günden sonra da 1868\'e kadar sürer (RAPOR2 madde 2): atlasta Kyoto/Nara/Osaka/Hakata\'nın 1185-12-22\'den sonraki sahibi «kamakura» yazılması BEYANLI YAKLAŞIKLIKTIR.',
  gun_not('戊申 = 11. ay 29. gün (ay başı 1185-11-24)', '1185-11-24', '1185-12-22'), 4))
# --- masakado-shinno ---
cok.append(M('0940-01-01', 'Masakado Shimotsuke ve Kōzuke valiliklerini ele geçirdi, kendi valilerini atadı', 'siyaset', ['masakado-shinno', 'heian-japonya'], 'Shimotsuke · Kōzuke (Kantō)',
  'Tengyō 2. yılın 12. ayının 11. günü Masakado binlerce askerle Shimotsuke vilayet binasına girip valiyi mühür ve anahtarlarla kaçırttı, 15. gün Kōzuke\'yi de aldı; kardeşlerini ve müttefiklerini sekiz doğu eyaletine vali atadı. Bu atamalar merkezî sarayın dışında kendi yönetimini kurma girişimidir.',
  K_MASAKADO + '「十二月十一日，將門率數千兵，就下野國廰。…先拜將門，便擎撃印鎰。」 · 「同十五日，將門遷上野國。國司藤原尚範，被奪印鎰。…且行諸國除目。」',
  'Tengyō 2/12/11 ve 12/15 (gün işareti yok)', 'ay',
  'Tengyō 2/12 Jülyen Ocak 940\'a düşer (12. ay başı ≈ 940-01-12; 11. gün ≈ 01-22, 15. gün ≈ 01-26, ±1). Gün işareti verilmediğinden ay hassasiyeti: 0940-01-01. Fusō ryakki ham Shōmonki alıntısıdır; Shōmonki\'nin kendi metni açılmadı. Aynı satırların başındaki «十二月廿一日» Hitachi çatışması satırı 11. ay yerine yanlış yazılmış görünür; kullanılmadı.',
  'Mevcut ay-güneş ay numaraları, ayrıntı ay başı ortalama yeniay hesabıyla (940-01-12, 02-11, 03-12) sınandı; 2. ay 8. gün 甲辰 = 940-03-19 çapasıyla tutarlı (aynı kaynak).', 3))
cok.append(M('0940-03-19', 'Sarayın Fujiwara no Tadafumi\'yi doğu seferi başkomutanı atayıp kılıç verdi', 'siyaset', ['heian-japonya', 'masakado-shinno'], 'Kyoto (Heian-kyō)',
  'Tengyō 3. yılın 2. ayının 8. günü Suzaku sarayda Danışman Fujiwara no Tadafumi\'yi seii-taishōgun yaptı ve Bandō\'ya gidecek sefer ordusu için tören kılıcını verdi; yardımcı generaller de atandı. Sefer ordusu varmadan Masakado öldürüldü.',
  K_MASAKADO + '「二月八日甲辰，辰刻，主上出御南殿，賜征夷大將軍右衛門督藤原忠文節刀，下遣於坂東國。」',
  'Tengyō 3/2/8 (甲辰)', 'gun', None,
  gun_not('甲辰 = 2. ay 8. gün (2. ay başı 940-03-12; 3/9 乙亥 ile tutarlı)', '940-03-12', '940-03-19'), 3))
cok.append(M('0940-03-25', 'Masakado Taira no Sadamori ve Fujiwara no Hidesato tarafından öldürüldü', 'son', ['heian-japonya', 'masakado-shinno'], 'Shimōsa',
  'Tengyō 3. yılın 2. ayının 14. günü öğleden sonra Masakado Shimōsa\'da Sadamori\'nin okuyla attan düştü ve Hidesato tarafından başı kesildi; çatışmada 197 adamı öldürüldü. «Yeni İmparatorluk» böylece son buldu.',
  K_MASAKADO + '「十四日未刻，於同國貞盛為憲秀鄉等棄身忘命，馳向射合。…秀鄉馳至，斬將門頸，以屬士卒。」 · 「其日，將門件類被射殺者一百九十七人。」',
  'Tengyō 3/2/14 (ikindi, 未刻)', 'gun',
  'Gün, aynı kaynakta 2/8 甲辰 çapasından 6 gün sayılarak bulundu (aynı ay içi sayım); 14. gün için ayrı gün işareti yoktur. Ms1 künyesinin t=0940-03-01 (ay hassasiyeti) bu günle düzeltilebilir.',
  gun_not('2. ay 14. gün = 甲辰 (2/8) + 6 gün', '940-03-12', '940-03-25'), 4))
# --- abe-mutsu ---
KOTO = 'Kotobank (kotobank.jp/word/前九年の役-88132; okundu): '
cok.append(M('1051-01-01', 'Minamoto no Yoriyoshi Mutsu valisi oldu; Abe klanıyla Zenkunen savaşı dönemi başladı', 'kurulus', ['abe-mutsu'], 'Oku no Rokugun (Mutsu)',
  'Abe klanı Mutsu\'nun kuzeyindeki altı ilçeyi (Oku no Rokugun: Isawa, Esashi, Waga, Hienuki, Shiwa, Iwate) özerk yönetiyordu; Minamoto no Yoriyoshi\'nin vali olmasıyla başlayan 12 yıllık çatışma dönemi Abe yönetiminin tarihsel sınırlarını belirler.',
  KOTO + '世界大百科事典（改訂新版）「古くは源頼義が陸奥守になった1051年（永承6）から62年までの12年間を乱の期間と見て」 · 同「奥六郡（伊沢，江刺，和賀，稗貫，斯波，岩手の6郡）の司であったが」',
  'Eishō 6 (1051)', 'yil',
  'Kaynak aynı sayfada başlangıç için ikinci bir görüş verir (1056/Tenki 4); 1051 «klasik» okuma. Mutsu waki ve Azuma-öncesi birincil belgeler açılmadı. Sözlük/ansiklopedi (Heibonsha, Yamakawa, Britannica Japonya) kaynaklıdır; birincil kronik atıfsız.', None, 3))
cok.append(M('1057-01-01', 'Abe no Yoritoki Torinoumi Kalesi\'nde savaşta öldü', 'savas', ['abe-mutsu'], 'Torinoumi (Mutsu)',
  'Abe klanının başı Yoritoki (Yoritoki) 1057 yazında Torinoumi Kalesi\'nde (bugünkü Kanegasaki, Iwate) öldü; liderliği oğlu Sadatō devraldı.',
  KOTO + '世界大百科事典（改訂新版）「翌57年7月安倍頼時は鳥海柵（現，岩手県金ヶ崎町）で戦死したが」',
  'Tenki 5/7 (1057, ay)', 'yil',
  'Kaynak ay (7. ay) verir; ay-güneş ay numarası Jülyen\'e çevrilemediği (gün yok) için YYYY-01-01 + yıl. Sadatō\'nun halefliği bu sayfada yazılı değildir; yalnız sonraki kuşak olarak Sadatō\'nun Kuriyagawa\'da öldüğü kaynakta vardır (aşağı madde).', None, 3))
cok.append(M('1062-01-01', 'Minamoto no Yoriyoshi Kuriyagawa Kalesi\'nde Abe Sadatō\'yu yendi; Abe yönetimi sona erdi', 'son', ['abe-mutsu'], 'Kuriyagawa (Morioka)',
  'Kōhei 5. yılda Minamoto no Yoriyoshi ve oğlu Yoshiie, Abe klanının son kalesi Kuriyagawa\'yı (bugünkü Morioka) alıp Sadatō\'yu öldürdü; kardeşi Munetō teslim oldu. Oku no Rokugun yönetimi Abe\'nin elinden alındı.',
  KOTO + '世界大百科事典（改訂新版）「9月7日ついに貞任を厨川柵に破った」 · ブリタニカ国際大百科事典「康平5 (62) 年ようやく貞任を倒してこの乱を鎮定した」',
  'Kōhei 5/9/7 (1062; başka sözlükte 9/17)', 'yil',
  'ÇELİŞKİ: Sekai Daihyakka 9. ayın 7\'si, öteki sözlükler (Nipponica/Kokushi Daijiten türevi ansiklopedi sayfaları, WebSearch özeti) 9/17 yazar; ay-güneş ay numarası Jülyen\'e çevrilmediği için gün değil YIL hassasiyeti kullanıldı. Mutsu waki açılmadı.', None, 3))

# ---------------- kronoloji_sinir ----------------
def S(t, devlet, taraf, yer, b, d, kaynak, gun, kes, ic=None, tak=None):
    m = {'t': t, 'devlet': devlet, 'taraflar': taraf, 'b': b, 'tur': 'toprak-kazanc', 'onem': 1, 'dunya': 1, 'kapsam': 'ic', 'yer': yer, 'yer_id': yer,
         'etiket': ['toprak-degisimi', 'konu-siyasi', 'dogu-500-1281'], 'd': d, 'kaynak': kaynak, 'gun': gun, 'kesinlik': kes, 'sinir_id': []}
    if ic: m['ic_not'] = ic
    if tak: m[TAK] = tak
    return m

sinir = []
# --- yerleşim zincirleri: ad -> [(f,t,d,kaynak, kes, ic)] ---
BEYAN_POLITY = 'BEYAN: devir günü saray/hükümdar sürekliliği içindeki atlas dönem adı değişimidir (aynı hanedan/saray; yeni fetih değil).'
BEYAN_KAM1185 = 'BEYANLI YAKLAŞIKLIK: Heian sarayı 1868\'e kadar sürer; atlas modeli 1185-12-22\'den sonrasını «kamakura» polity\'sine yazar (KOJA_REF.json, KOJA_RAPOR2 madde 2). Kyoto\'nun fiilî şogunluk denetimine geçişi Jōkyū (1221) sonrasıdır; bu oturumda açılmadı.'
yama = []
def sl(f, t, d, kaynak, kes, ic=None):
    s = {'f': f, 't': t, 'd': d, 'kesinlik': kes, 'kaynak': kaynak + (' · ' + ic if ic else '')}
    return s

TAK710 = gun_not('辛酉 (3. ay içi; ay başı ≈ 3. ayın 10. günü)', '710-04-04', '710-04-13')
TAK794 = gun_not('辛酉 (10. ay içi; ≈ 21-22. gün)', '794-10-29', '794-11-18')
TAK1185 = gun_not('戊申 = 11. ay 29. gün (ay başı 1185-11-24)', '1185-11-24', '1185-12-22')
TAK646 = gun_not('癸卯 = 乙未朔 + 8', '645-12-24', '646-01-01')
TAK536 = gun_not('辛丑 (ay başı)', '536-06-05', '536-06-05')
TAK1180 = gun_not('甲午 = 10. ay 15. gün (ay başı 1180-10-21)', '1180-10-21', '1180-11-04')

zincir = {
 'Nara': [
  ('0710-04-13', '0794-11-18', 'nara-japonya', K_NARA710, 'gun', 'Heijō-kyō şehri bu günle kuruldu (kur = 0710-04-13 «kuruluş = saray taşınması»; öncesinde Nara havzasında Asuka bölgesi başka yerleşimdir).'),
  ('0794-11-18', '1185-12-22', 'heian-japonya', K_HEIAN794, 'gun', 'ABİ MERKEZ: Kyoto — saray 794\'te Heian-kyō\'ya taşındı, Nara eski başkent olarak aynı saray devleti içinde kaldı (kaynak yalnız taşınmayı yazar; Nara\'nın sonraki sahibi çıkarımdır) · ' + BEYAN_POLITY),
  ('1185-12-22', '1281-01-01', 'kamakura', K_SHUGO1185, 'gun', BEYAN_KAM1185)],
 'Kyoto': [
  ('0794-11-18', '1185-12-22', 'heian-japonya', K_HEIAN794, 'gun', 'Heian-kyō şehri bu günle kuruldu (kur = 0794-11-18).'),
  ('1185-12-22', '1281-01-01', 'kamakura', K_SHUGO1185, 'gun', BEYAN_KAM1185)],
 'Kamakura': [
  ('1180-11-04', '1185-12-22', 'heian-japonya', K_KAM1180, 'gun', 'BEYANLI YAKLAŞIKLIK: Yoritomo\'nun fiilî Kantō rejimi hukuken Heian saray yetkisine dayanıyordu; kamakura künyesi (f=1185-01-01) 1185-12-22\'den önce yoktur. Kamakura-gun (Sagami) 1180 öncesi de vardı ama tarihli tanığı bu oturumda açılmadı.'),
  ('1185-12-22', '1281-01-01', 'kamakura', K_SHUGO1185, 'gun', 'Kamakura bakufunun hukukî temeli (shugo-jitō) bu gün sayıldı.')],
 'Osaka': [
  ('0646-01-01', '0710-04-13', 'yamato', K_NANIWA646, 'gun', 'Naniwa Nagara Toyosaki Sarayı ilk tarihli saray tanığı; 646 öncesi Naniwa limanı (kuruluş efsanevî Nintoku dönemi) bu oturumda tarihli kaynakla bulunmadı → önce dilim yok. Özdeşleme: Naniwa = bugünkü Osaka (genel kabul; kazı koordinatı açılmadı).'),
  ('0710-04-13', '0794-11-18', 'nara-japonya', K_NARA710, 'gun', BEYAN_POLITY),
  ('0794-11-18', '1185-12-22', 'heian-japonya', K_HEIAN794, 'gun', 'ABİ MERKEZ: Kyoto — başkent taşınması sonrası aynı saray devleti · ' + BEYAN_POLITY),
  ('1185-12-22', '1281-01-01', 'kamakura', K_SHUGO1185, 'gun', BEYAN_KAM1185)],
 'Hakata (Fukuoka)': [
  ('0536-06-05', '0710-04-13', 'yamato', K_NANOTSU536, 'gun', 'Nanotsu = Hakata limanı özdeşleştirmesi yaygın kabuldür, akademik kaynak açılmadı. 528\'de Iwai yenilgisiyle (Nihon Shoki j.17) Chikushi Yamato\'ya bağlandı; 500-536 arası Hakata Körfezi sahibi bu oturumda tarihli tanıkla bulunmadı → önce dilim yok.'),
  ('0710-04-13', '0794-11-18', 'nara-japonya', K_NARA710, 'gun', BEYAN_POLITY),
  ('0794-11-18', '1185-12-22', 'heian-japonya', K_HEIAN794, 'gun', 'ABİ MERKEZ: Kyoto — başkent taşınması sonrası aynı saray devleti · ' + BEYAN_POLITY),
  ('1185-12-22', '1281-01-01', 'kamakura', K_SHUGO1185, 'gun', BEYAN_KAM1185)],
}
yama_koor = {'Nara': 'atlas mevcut kayıt', 'Kyoto': 'atlas mevcut kayıt', 'Kamakura': 'atlas mevcut kayıt', 'Osaka': 'atlas mevcut kayıt', 'Hakata (Fukuoka)': 'atlas mevcut kayıt'}
TAKMAP = {'0710-04-13': TAK710, '0794-11-18': TAK794, '1185-12-22': TAK1185, '0646-01-01': TAK646, '0536-06-05': TAK536, '1180-11-04': TAK1180}
BASLIK = {
 ('0710-04-13'): 'Heijō-kyō\'ya taşınma: Nara dönemi',
 ('0794-11-18'): 'Heian-kyō\'ya taşınma: Heian dönemi',
 ('1185-12-22'): 'Shugo-jitō yetkisi: Kamakura bakufu dönemi',
 ('0646-01-01'): 'Naniwa Nagara Toyosaki başkenti: Yamato sarayı',
 ('0536-06-05'): 'Nanotsu ambarı: Yamato yönetimi',
 ('1180-11-04'): 'Yoritomo Kamakura\'ya girdi',
}
for ad, dil in zincir.items():
    s_onek = []
    for (f, t, d, kay_, kes, ic) in dil:
        s_onek.append({'f': f, 't': t, 'd': d, 'kesinlik': kes, 'kaynak': kay_ + ' · ' + ic, 'ic_not_takvim': TAKMAP[f]})
        gunyaz = {'0710-04-13': 'Wadō 3/3 (710)', '0794-11-18': 'Enryaku 13/10 (794)', '1185-12-22': 'Bunji 1/11/29 (1185)', '0646-01-01': 'Taika 1/12/9 (645)', '0536-06-05': 'Senka 1/5/1 (536)', '1180-11-04': 'Jishō 4/10/15 (1180)'}[f]
        sinir.append(S(f, d, [d], ad, '%s: %s sahibi %s oldu' % (BASLIK[f], ad, d),
            '%s, %s tarihinde %s polity\'sine/dönemine geçti (%s).' % (ad, f, d, BASLIK[f]), kay_, gunyaz, kes,
            ic + ' · Önceki dilim sahibi: ' + (dil[dil.index((f, t, d, kay_, kes, ic)) - 1][2] if dil.index((f, t, d, kay_, kes, ic)) > 0 else 'yok (yerleşimin ilk dilimi)'), TAKMAP[f]))
    yama.append({'ad': ad, 'koordinat': yama_koor[ad], 'mevcut_zincir_basi': 'kamakura 1281-01-01', 's_onek': s_onek})

# ---------------- künye abe-mutsu ----------------
kunye = [{
 'id': 'abe-mutsu', 'ad': 'Abe Klanı Mutsu Yönetimi (Oku no Rokugun)', 'tur': 'hanedanlik', 'bolge': 'dogu-asya', 'f': '1051-01-01', 't': '1062-01-01',
 'baskent': 'Koromo-gawa (Koromo-gawa no saku)',
 'ozet': 'Abe klanının Mutsu\'nun kuzeyindeki altı ilçede (Oku no Rokugun) saray adına «tutsak-başı» olarak özerk yönettiği; Zenkunen savaşıyla Minamoto no Yoriyoshi\'ye yenilip 1062\'de sona eren bölgesel hanedan.',
 'kaynak': KOTO + 'ブリタニカ国際大百科事典「当時陸奥6郡を支配し勢力のあった安倍頼良 (頼時)」 · 世界大百科事典（改訂新版）「奥六郡（伊沢，江刺，和賀，稗貫，斯波，岩手の6郡）の司であったが」 · 山川 日本史小辞典「平安中期の1051～62年(永承6～康平5)奥羽でおきた安倍氏の反乱」 · 世界大百科事典（改訂新版）「9月7日ついに貞任を厨川柵に破った」',
 'kesinlik': {'f': 'yil', 't': 'yil'}, 'boya_gerekli': True,
 'ic_not': 'f=1051 (Eishō 6): kaynaklar Zenkunen savaşının başlangıcını 1051 (Yoriyoshi\'nin Mutsu valiliği) ve 1056 (Tenki 4) diye ikiye ayırır; 1051 «klasik» okumadır (girdi f ile uyumlu). Abe\'nin özerk yönetimi 1051\'den daha eskidir (Yoriyoshi\'den önce Yoritoki zamanında Oku no Rokugun\'un sahibi); künye yalnız savaşın hukukî çerçevesini kapsar: devlet ömrü ölçütü (adı + belirli toprağı + 11 yıl) sağlanır. t=1062: Kuriyagawa 9/7 (Sekai Daihyakka) – 9/17 (öteki ansiklopediler) çelişkisi ay-güneş takviminde çevrilemediği için yıl hassasiyeti. BİRİNCİL KAYNAK YOK: Mutsu waki, Konjaku monogatari, Azuma Kagami (Kōhei öncesi yok) Wikisource\'ta bulunamadı (ja/zh arandı: 陸奥話記 YOK); kaynak yalnız Japon akademik ansiklopedileridir (Heibonsha, Yamakawa, Britannica Japonya; Kotobank aracılığıyla okundu). Hiraizumi\'nin Koromo-gawa ile aynı yer olup olmadığı bu oturumda sınanmadı; yerleşim yazılmadı.',
 'kronoloji': [
  {'t': '1051-01-01', 'tur': 'kurulus', 'b': 'Abe Klanı Mutsu Yönetimi (Oku no Rokugun) çatışma dönemi başladı', 'kaynak': KOTO + '世界大百科事典（改訂新版）「古くは源頼義が陸奥守になった1051年（永承6）から62年までの12年間を乱の期間と見て」'},
  {'t': '1062-01-01', 'tur': 'son', 'b': 'Abe Klanı Mutsu Yönetimi (Oku no Rokugun) sona erdi', 'kaynak': KOTO + '世界大百科事典（改訂新版）「9月7日ついに貞任を厨川柵に破った」 · ブリタニカ国際大百科事典「康平5 (62) 年ようやく貞任を倒してこの乱を鎮定した」'}]
}]

def dump(n, o): json.dump(o, open(os.path.join(D, n), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
dump('_part_jp_kunye.json', kunye); dump('_part_jp_cok.json', cok); dump('_part_jp_sinir.json', sinir); dump('_part_jp_yer.json', []); dump('_part_jp_yama.json', yama)
print('kunye', len(kunye), 'cok', len(cok), 'sinir', len(sinir), 'yama', len(yama), 'slice', sum(len(y['s_onek']) for y in yama))
