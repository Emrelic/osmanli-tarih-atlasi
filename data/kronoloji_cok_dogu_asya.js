// =====================================================================
// DOĞU ASYA + BORNEO — ÇOK KÜNYELİ KRONOLOJİ (KRONO-ASYA-UZAK-0929, 29 Eylül 2026)
// Oturum: KRONO-ASYA-UZAK-0929 · koordinatör: YILDIRIM BAYEZIT
// =====================================================================
// ⚠️ index.html'e ve arac/paketle.py'ye BAĞLANMADI — bağlamak koordinatörün işi.
//    Bağlanana kadar sitede görünmez (normal).
//
// ── BAĞLAMA YOLU (ORTAK §4.1) ─────────────────────────────────────
// window.KRONOLOJI_COK_DOGU_ASYA → app.js cokTarafliKronolojiEkle: her madde
// `taraflar:[...]` listesindeki künyelere EKLENİR (ezmez; t+b tekrarı atlanır).
// Künyeler data/devletler.js'ten okundu (29 Eylül 2026), madde günü pencere içinde:
//   ming-hanedani 1368-01-23→1644-04-25 · kuzey-yuan 1368-09-14→1691-05-30
//   qing-hanedani 1636-05-15→1912-02-12 · guney-ming 1644-04-25→1662-01-01
//   san-fan 1673-12-28→1681-12-07 · san-devletleri 1281→1923
//   pingnan 1855-01-01→1873-01-15 · sarawak-brooke 1841-09-24→1946-07-01
//   brunei-sultanligi 1368→1923
// 🔴 Künye eksiği YOK (bu dosyada); künye ÖNERİLERİ (Wu/Han/Zhou rejimleri vb.)
//    denetim/KRONO-ASYA-UZAK-0929-KUNYE.md'de.
//
// ── MÜKERRER DİSİPLİNİ ─────────────────────────────────────────────
// Önceden tarandı (kronoloji_cin.js · kronoloji_sinir_asya.js · olaylar*):
//   VAR, YAZILMADI: 1351 Kızıl Sarıklılar · 1368 Hongwu · 1644-45 Qing fethi ·
//   1662 Yongli'nin ölümü · 1673-12 San Fan başlangıcı (⚠️ günü çelişkili —
//   DUZELTME.md) · 1683 Tayvan · 1689 Nerçinsk (⚠️ üç ayrı gün — DUZELTME.md) ·
//   1759 Altışehir · 1851-64 Taiping · 1878 Zuo Zongtang.
//   YOK, YAZILDI: aşağıdaki maddeler (Yunnan 1382/1659/1681/1729, Pingnan
//   1856/1872, Sarawak'ın Brunei'den üç kopuşu).
//
// ── KAYNAK DÜRÜSTLÜĞÜ ─────────────────────────────────────────────
// TDV bu coğrafyayı (Yunnan, Borneo) kapsamaz → akademik kaynak (ORTAK §3).
// Kitap SAYFALARI bu oturumda açılmadı: `kaynak:` eser+yazar+yıl verir, sayfa
// vermez. Günler, web özetlerinden alınmıştır (çoğu Vikipedi; Britannica/Iranica/Te Ara bazılarını destekledi) — akademik eserlerin sayfasında OKUNMADI;
// çelişen ya da tek kaynaklı olan gün `gun:` alanında AÇIKÇA yazılıdır.
// =====================================================================

window.KRONOLOJI_COK_DOGU_ASYA = [

{ t:"1382-01-06", b:"Ming ordusu Kunming'i aldı — Yunnan'daki Yuan (Liang Prensliği) yönetimi çöktü", tur:"fetih", onem:4, dunya:2, kapsam:"ic",
  etiket:["fetih","konu-askeri","konu-siyasi","yunnan"], yer_id:"Kunming", taraflar:["ming-hanedani","kuzey-yuan"],
  d:"Hongwu İmparatoru, Yuan'ın Yunnan'daki son tutamağı olan Liang Prensliği'ne 1381 sonbaharında Fu Youde komutasında büyük bir ordu yolladı; Lan Yu ve Mu Ying yardımcı komutanlardı. Prens Basalawarmi başkent Kunming düşerken intihar etti, Dali çevresindeki yerel Duan hanedanı da 1382 içinde kırıldı. Mu Ying'in Yunnan'da kalıcı komutan bırakılmasıyla bölge iki yüzyıl boyunca Ming'in güneybatı sınır eyaleti oldu.",
  kaynak:"Edward L. Dreyer, Early Ming China: A Political History, 1355–1435 (Stanford, 1982) · Yang Bin, Between Winds and Clouds: The Making of Yunnan (Columbia UP, 2009) · Frederick W. Mote, Imperial China 900–1800 (Harvard UP, 1999). Sayfa verilmedi (bu oturumda açılmadı).",
  gun:"6 Ocak 1382 = Basalawarmi'nin intiharı (web özetlerinde (çoğunlukla Vikipedi); Dreyer/Yang'dan doğrudan doğrulanmadı). Dali'nin düştüğü ay kaynaklarda Ocak/Nisan diye ayrışıyor — ölçülemedi.",
  ic_not_d:"Haritadaki 13 Yunnan yerleşiminin 1382-01-15…04-14 arası kırılmasını (Chuxiong · Lin'an · Mengzi · Lijiang · Tengchong · Baoshan …) TEK madde kapatır; her şehrin kendi günü ölçülemedi." },

{ t:"1659-01-01", b:"Wu Sangui Yunnan'ı Qing adına aldı — Güney Ming'in son toprağı elden gitti", tur:"fetih", onem:4, dunya:2, kapsam:"ic",
  etiket:["fetih","konu-askeri","konu-siyasi","yunnan"], yer_id:"Kunming", taraflar:["qing-hanedani","guney-ming"],
  d:"Qing, Güney Ming direnişinin sığındığı Yunnan'a 1658-59 kışında üç koldan girdi; Ming'den dönme general Wu Sangui bölgeyi ele geçirip sonradan buranın vasal prensi oldu. Yongli İmparatoru sınırı aşıp Birmanya'ya kaçtı; Wu 1661'de peşinden gidip onu getirtti (idamı 1662'de ayrı maddededir). Böylece Çin'in içinde Ming adına tutunan son toprak parçası Qing'e geçti.",
  kaynak:"Lynn A. Struve, The Southern Ming, 1644–1662 (Yale UP, 1984) · Frederic Wakeman Jr., The Great Enterprise (California UP, 1985). Sayfa verilmedi (bu oturumda açılmadı).",
  gun:"1659 (gün bulunamadı; ay bile doğrulanamadı — sefer 1658 sonu–1659 başı)",
  ic_not_d:"Haritadaki Chuxiong · Jingdong · Kaihua · Lijiang · Lin'an · Mengzi (1659-01-07) ve Shunning · Tengchong · Baoshan (1659-04-22) kırılmalarını kapatır; iki ayrı günün ikisi de bu tek olaydan türer. 1646-48 arası Güney Ming'den Qing'e geçen Ganzhou · Hengyang · Chenzhou · Ji'an günleri kaynaksız kaldı — ölçülemedi." },

{ t:"1681-10-01", b:"Qing orduları Kunming'e girdi — Üç Vasal İsyanı'nın son kalesi düştü", tur:"fetih", onem:4, dunya:2, kapsam:"ic",
  etiket:["fetih","isyan","konu-askeri","konu-siyasi","yunnan"], yer_id:"Kunming", taraflar:["san-fan","qing-hanedani"],
  d:"Wu Sangui'nin 1678'de ölümünden sonra torunu Wu Shifan Yunnan'a sıkışmış, Qing orduları üç yönden Kunming'i kuşatmıştı. Şehir 1681 sonbaharında düştü ve Wu Shifan yakalanmadan kendi canına kıydı; sekiz yıllık isyan bu düşüşle fiilen sona erdi, Yunnan doğrudan Qing yönetimine girdi. İsyanın başlangıcı (1673) ayrı bir maddedir.",
  kaynak:"Robert Kessler, K'ang-hsi and the Consolidation of Ch'ing Rule, 1661–1684 (Chicago, 1976) · Britannica, «Revolt of the Three Feudatories». Sayfa verilmedi (bu oturumda açılmadı).",
  gun:"Ekim 1681 (gün bulunamadı). Wu Shifan'ın ölümü tek kaynakta 7 Aralık 1681 diye geçiyor (künye `san-fan`ın t:1681-12-07 günüyle aynı) ama şehir Ekim'de kırılmış görünüyor: iki tarih birbirine oturmuyor — çapraz doğrulanamadı.",
  ic_not_d:"Haritadaki Lijiang 1681-07-14 kırılması bu maddeye bağlanamaz (3 ay önce; Yunnan'ın kuzey kesiminde ayrı bir Qing ilerlemesi olabilir) — ölçülemedi." },

{ t:"1729-01-01", b:"Ortai'nin «toprak yönetimine geçiş» reformu — Yunnan sınırındaki yerel beylikler kaldırıldı, Pu'er (Ning'er) vilayeti kuruldu", tur:"idari", onem:3, dunya:1, kapsam:"ic",
  etiket:["idari","reform","konu-idari","konu-siyasi","yunnan"], yer_id:"Ning'er (Pu'er)", taraflar:["qing-hanedani","san-devletleri"],
  d:"Yongzheng döneminde Yunnan-Guizhou genel valisi Ortai, güneybatıdaki kalıtsal yerel beyleri (tusi) kaldırıp yerlerine merkezden atanan memurlar koydu (gaitu guiliu). Bu politikanın Yunnan'ın güney ucundaki karşılığı, Şan/Tay beyliklerinin topraklarında Pu'er (Ning'er) idare biriminin kurulmasıdır. Sınır halkları ilk kez doğrudan Qing vergi ve memuriyet düzenine bağlandı.",
  kaynak:"C. Patterson Giersch, Asian Borderlands: The Transformation of Qing China's Yunnan Frontier (Harvard UP, 2006) · John E. Herman, Amid the Clouds and Mist: China's Colonization of Guizhou, 1200–1700 (Harvard, 2007; Guizhou için ama aynı politikayı ele alır). Sayfa verilmedi (bu oturumda açılmadı).",
  gun:"1729 (yıl; reform 1726-31 arası sürdü, Pu'er biriminin kuruluş yılı web özetlerinde 1729 — Giersch'ten doğrudan doğrulanmadı)",
  ic_not_d:"Haritadaki Ning'er (Pu'er) 1729-01-01 kırılmasını kapatır. `san-devletleri` künyesi `devlet` sıfatıyla kabaca bir kova (Şan sawbwa'lıkları); Xishuangbanna'nın Tay beyliği ayrı künye olmalı — KUNYE.md." },

{ t:"1856-10-23", b:"Du Wenxiu Dali'de başkomutan ilan edildi — Pingnan (Panthay) Devleti doğdu", tur:"kurulus", onem:4, dunya:2, kapsam:"ic",
  etiket:["kurulus","isyan","konu-siyasi","yunnan","din"], yer_id:"Dali", taraflar:["pingnan","qing-hanedani"],
  d:"1856 baharında Kunming'de Hui Müslümanlarına yönelik katliamlar Yunnan'da genel bir isyanı tetikledi; Du Wenxiu önderliğindeki isyancılar Dali'yi ele geçirdi ve orada kendi yönetimlerini kurdu. Du Wenxiu Müslüman unvanıyla «Sultan Süleyman» anıldı, devlet Çince adıyla Pingnan Guo diye geçer. Devlet 1872 sonuna kadar Yunnan'ın batısında Qing'e karşı ayakta kaldı.",
  kaynak:"David G. Atwill, The Chinese Sultanate: Islam, Ethnicity, and the Panthay Rebellion in Southwest China, 1856–1873 (Stanford UP, 2005). Sayfa verilmedi (bu oturumda açılmadı).",
  gun:"23 Ekim 1856 = Du Wenxiu'nun başkomutan ilanı (web özetlerinde (çoğunlukla Vikipedi); Atwill'den doğrudan doğrulanmadı).",
  ic_not_d:"Künye `pingnan` f:1855-01-01 diyor ama isyan 1856'da başladı (Atwill başlığı da 1856–1873) — künye başlangıcı bir yıl erken: KUNYE.md. Haritadaki Shunning 1858-05-17 ile Tengchong · Baoshan 1862-08-24 kırılmaları bu devletin ilerleyişidir; her şehrin günü ölçülemedi." },

{ t:"1872-12-26", b:"Du Wenxiu Qing'e teslim olup öldü — Pingnan Devleti çöktü, Dali Ocak 1873'te Qing'e geçti", tur:"son", onem:4, dunya:2, kapsam:"ic",
  etiket:["son","isyan","konu-askeri","konu-siyasi","yunnan"], yer_id:"Dali", taraflar:["pingnan","qing-hanedani"],
  d:"Qing orduları Dali'yi 1872 sonunda kuşatınca Du Wenxiu şehri kurtarmak umuduyla Qing'e teslim oldu ve kısa süre sonra öldü (intihar mı idam mı kaynaklarda ayrışır). Şehrin kendisi Ocak 1873'te Qing birliklerine geçti ve isyanın son direnişleri bastırıldı. Sonuç: yaklaşık on yedi yıllık Müslüman devleti bitti, Yunnan'ın batısı yeniden Qing yönetimine girdi.",
  kaynak:"David G. Atwill, The Chinese Sultanate: Islam, Ethnicity, and the Panthay Rebellion in Southwest China, 1856–1873 (Stanford UP, 2005). Sayfa verilmedi (bu oturumda açılmadı).",
  gun:"26 Aralık 1872 = Du Wenxiu'nun saltanatının bitişi (web özetlerinde (çoğunlukla Vikipedi)); Dali'nin Qing'e geçişi «Ocak 1873» diye tek kaynakta — künye `pingnan`ın t:1873-01-15 günü bu ikincisiyle uyumlu ama gün doğrulanamadı.",
  ic_not_d:"Haritadaki Shunning · Tengchong · Baoshan 1873-01-15 ve Shunning 1873-04-25 · Tengchong 1873-08-02 kırılmalarını kapatır (Nisan/Ağustos günleri son direniş noktalarının teslimi olabilir; ölçülemedi)." },

{ t:"1861-01-01", b:"Brunei Sultanı Bintulu bölgesini Sarawak Racası'na bıraktı", tur:"toprak-kazanc", onem:3, dunya:1, kapsam:"dis",
  etiket:["toprak-kazanc","toprak-kayip","konu-siyasi","borneo","sarawak"], yer_id:"Bintulu", taraflar:["sarawak-brooke","brunei-sultanligi"],
  d:"James Brooke'un Sarawak'ı 1841'de kurmasından sonra küçülen Brunei Sultanlığı, kıyıdaki nehir ağızlarını birer birer Beyaz Rajalar'a bıraktı. 1861'de Bintulu ile çevresi de Sarawak'a geçti; böylece Sarawak'ın kıyı şeridi Brunei'nin ana topraklarına doğru bir adım daha uzadı.",
  kaynak:"Steven Runciman, The White Rajahs: A History of Sarawak from 1841 to 1946 (Cambridge UP, 1960) · Nicholas Tarling, Britain, the Brookes and Brunei (Oxford UP, Kuala Lumpur, 1971). Sayfa verilmedi (bu oturumda açılmadı).",
  gun:"1861 (yıl; gün bulunamadı — bu oturumda doğrulanamadı; atlasın haritadaki Bintulu 1861-01-01 günü de bir YIL işaretidir)",
  ic_not_d:"Haritadaki Sibu 1862 · Simanggang 1864 · Kapit 1880 kırılmaları YERLEŞİM KURULUŞU (kur:) — toprak devri değil, madde YAZILMADI (bkz. -0929.md)." },

{ t:"1882-01-01", b:"Sarawak, Baram nehri havzasını Brunei'den aldı", tur:"toprak-kazanc", onem:3, dunya:1, kapsam:"dis",
  etiket:["toprak-kazanc","toprak-kayip","konu-siyasi","borneo","sarawak"], yer_id:"Baram (bölge)", taraflar:["sarawak-brooke","brunei-sultanligi"],
  d:"Rajah Charles Brooke, Baram vadisinin tamamını Brunei Sultanı'ndan yıllık bir ödeme karşılığı elde etti. Brunei bu kayıp ve 1890'daki Limbang ilhakıyla kıyı Borneo'daki gelir kaynaklarının çoğunu yitirdi; ardından İngiltere 1888'de sultanlığı himayesine aldı. Baram'ın alınması, Sarawak'ın Brunei'yi iki parçaya bölen hattı tamamlama yolundaki ikinci büyük adımıdır.",
  kaynak:"Steven Runciman, The White Rajahs (Cambridge UP, 1960) · Nicholas Tarling, Britain, the Brookes and Brunei (Oxford UP, Kuala Lumpur, 1971). Sayfa verilmedi (bu oturumda açılmadı).",
  gun:"1882 (yıl; kaynak «1882» der, gün bulunamadı). Atlasın haritadaki 1882-06-13 günü bir DAYANAK değildir — çelişkide atlas düzelir.",
  ic_not_d:"Haritadaki Baram (bölge) · Niah kıyısı (bölge) 1882-06-13 kırılmasını kapatır; günün doğruluğu ölçülemedi (yıl eşleşiyor). «1888 himaye» ayrıntısı hafızadan; sınanmamıştır." },

{ t:"1890-03-17", b:"Rajah Charles Brooke Limbang'ı Sarawak'a kattı", tur:"toprak-kazanc", onem:4, dunya:1, kapsam:"dis",
  etiket:["toprak-kazanc","toprak-kayip","konu-siyasi","borneo","sarawak"], yer_id:"Limbang", taraflar:["sarawak-brooke","brunei-sultanligi"],
  d:"Limbang'ın yerel şefleri Brunei'nin yönetiminden bir süredir çıkmış, Sarawak bayrağını çekmişti; Brooke bunu gerekçe göstererek bölgeyi ilhak etti ve kararı İngiliz hükûmetinin onayına bıraktı. Sultan tepki gösterdi, ama İngiltere ilhakı onayladı. Brunei bu ilhakla ülkesini ikiye bölünmüş biçimde bıraktı ve küçük bir devlete indi.",
  kaynak:"Steven Runciman, The White Rajahs (Cambridge UP, 1960) · Nicholas Tarling, Britain, the Brookes and Brunei (Oxford UP, Kuala Lumpur, 1971). Sayfa verilmedi (bu oturumda açılmadı).",
  gun:"17 Mart 1890 (web özetlerinde (çoğunlukla Vikipedi); Runciman/Tarling'den doğrudan doğrulanmadı). Atlasın Limbang 1890-01-01 kırılması YIL temsilîdir.",
  ic_not_d:"kapsam:dis — Brunei'nin Osmanlı ile ilişkisi yok ama İngiltere işin içinde; «ilhakı İngiltere onayladı» ayrıntısı özetten, sınanmamıştır." }

];
