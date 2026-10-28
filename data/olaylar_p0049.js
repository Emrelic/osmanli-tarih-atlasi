// =====================================================================
// PAKET 0049 — PAKET-A3 KRONOLOJİ (13 Eylül 2026, 1.MURAT sevki,
// denetim/OLCUM-PAKET-SINIF-0913.md "A3 · KRONOLOJİ" + A1'den iki devir)
// Oturum: PAKET-A3 · rapor denetim/PAKET-A3-KRONOLOJI-0913.md
//
// KALEMLER
//   0042/H-0004  Katalan seferinin başı ............ 1303-01-01
//   0020/H-0013  Ahıska'nın Osmanlı idaresine girişi  1578-08-09 (gün KOMŞUDAN, §4 şartlı)
//   A1 devri ②   1595 Tuna kalelerine akınlar ........ 1595-01-01
//   0035/H-0090  savaş başlangıçları (ilk parti) ..... 1711-04-09 · 1787-07-27
//   0039/H-0004  1918-1923 doğu/güney cephesi (10) ... 1919-04-12 … 1921-06-01
//
// 🔴 D147 HER GÜN İÇİN ÖNCEDEN ÖLÇÜLDÜ (denetim/ARAC-A3-KIRILMA-0913.py ③):
//   bu dosyadaki 15 günün 15'inde "bu güne madde yazılırsa kapanacak maddesiz
//   kırılma günü" = 0. Elenen aday: 1853-07-03 (Rus ordusunun Prut'u geçişi)
//   — ±30 günde 1853-07-28 Ak-Meçit (hokand→rusya) kırılmasını SAHTE kapatırdı,
//   üstelik TDV gün vermiyor ⇒ yazılmadı.
// KAYNAK: hepsi TDV, gövdeleri okundu (ARAC-A6A-TDV-0913.py ile çekildi).
//   Kaynağın gün vermediği yerde YYYY-01-01 ve `ic_not_gun` (§4).
//   Atlas dönemleri, savaslar.js sefer f/t ve künye günleri DAYANAK DEĞİLDİR.
// AD ALANI (§7): data/olaylar_p0049.js → window.OLAYLAR_P0049
// 🔴 index.html satırı BAĞLI DEĞİL (o dosya başka işçide) — bağlanmadan CANLI
//   DEĞİLDİR (D099). denetle.py olaylar*.js glob'uyla okur, Değişmez 2 evrenine
//   BUGÜN girer.
// =====================================================================

window.OLAYLAR_P0049 = [

// ── 0042/H-0004 — Katalan seferinin başı ───────────────────────────
{ t:"1303-09-01", kesinlik:"ay", k:"sefer", etiket:["savas","diplomasi","konu-askeri","konu-diplomasi"],
  b:"Katalan Kumpanyası Bizans hizmetine girdi — Anadolu seferinin başlangıcı",
  gun:"Eylül 1303",
  ic_not_gun:"W52b/1006: AY kaynaklı (GEC + Bilkent tezi, kaynak alanında) → 1303-09-01 + kesinlik:ay; gün bulunamadı. Önceki not: TDV bizans yıl verir, gün vermez; savaslar.js sefer f:1303-09-01 ve kronoloji_katalan.js 1303-09-01 atlas kaydıdır, DAYANAK DEĞİLDİR (bu değişiklik onlara değil yukarıdaki iki kaynağa dayanır). ⚠️ js/app.js sefer kırpması çapayı seferin t'sine (1305-06-01) bağlıyor; bu madde okun görünür başlangıcını tek başına öne çekmez (rapor §0042/H-0004).",
  yer:"İstanbul ve Batı Anadolu (Alaşehir)", yer_id:"Alaşehir",
  kisiler:"Roger de Flor, II. Andronikos",
  d:"Batı Anadolu'da Türk beylikleri karşısında toprak kaybeden Bizans İmparatorluğu, Roger de Flor kumandasındaki yaklaşık 6500 kişilik Katalan birliğini ücretli asker olarak hizmetine aldı. TDV'nin Bizans maddesine göre birlik 1303'te imparatorluğun yardımına geldi ve ertesi yıl Germiyanoğulları'nın kuşattığı Alaşehir'i kurtardı. Ancak kumpanya kısa sürede geçtiği yerleri yağmalamaya başladı; Bizans onu Trakya'ya geçirdi ve 1305'te Roger de Flor'u öldürttü.",
  ic_not_d:"TDV alasehir Katalanların Germiyan kuşatmasını kaldırdığını yazar, yıl vermez; TDV germiyanogullari aynı kuşatmayı 1306'ya koyar — TDV bizans'ın 1304'üyle iki yıllık ayrışma, bildirildi (§4⑥).",
  kaynak:"bizans · alasehir · Gran Enciclopèdia Catalana, \"expedició dels almogàvers a Orient\" (enciclopedia.cat): \"Trenta-sis vaixells partiren del port de Messina a l'estiu del 1303, i arribaren a Constantinoble pel setembre\" · Yunus Doğan, \"The Transformation of an Itinerant Army: From the Catalan Company to the Catalan Duchy of Athens and Neopatras (1303-1388)\", yüksek lisans tezi, İhsan Doğramacı Bilkent Üniv. Tarih Bölümü (danışman Luca Zavagno), 2019: \"The Catalan Company arrived at Constantinople in September 1303\"" },

// ── 0020/H-0013 — Ahıska ───────────────────────────────────────────
{ t:"1578-08-09", k:"fetih", etiket:["toprak-kazanc","konu-askeri"],
  b:"Ahıska atabegliğinin Osmanlı idaresine girmesi — Altunkale, Hırtıs ve Ahılkelek",
  gun:"Ağustos 1578, Çıldır zaferinin hemen ardından",
  ic_not_b:"denetle.py mükerrer denetimi ilk yazımda bu maddeyi olaylar_ek2.js 'Çıldır Zaferi — doğu savaşı başladı' (aynı gün) ile eşleştirdi: ortak 'Çıldır zaferi' başlık kelimeleri + 'Mustafa' (Lala Mustafa Paşa ↔ Menûçihr'in sonraki adı Mustafa Paşa). İki olay AYRI: biri meydan savaşı, öteki savaşın ardından atabeg ülkesinin itaati (TDV cildir-eyaleti). YALNIZ başlık konuya indirildi ('Çıldır zaferinin ardından' gun alanında duruyor); kişi alanı KORUNDU, çift bu yüzden denetle.py ZAYIF (ihlal olmayan gözden geçirme) listesinde [kişi:mustaf] olarak görünür — bilerek. Ayrılık beyanı (BILINEN_AYRI) arac/denetle.py sahibinin kararı — rapora yazıldı.",
  ic_not_gun:"TDV ahiska: atabegler 'Çıldır Savaşı (1578) sonunda' Osmanlı idaresine girdi — gün yok. TDV cildir-eyaleti: atabeg ülkesinin geri kalanının fethi savaşın 'hemen ardından' tamamlandı. GÜN KOMŞUDAN (§4 şartlı komşu günü, dört şart): Çıldır Savaşı 9 Ağustos 1578 — kendi kaynağı TDV lala-mustafa-pasa (5 Cemâziyelâhir 986) ve cildir-eyaleti; hedef için kaynakta gün yok; aynı sefer; açıkça yazıldı. Yerleşim tarafı: Ahıska d.f 1578-08-01 savaştan 8 gün ÖNCE — B önerisi denetim/YAMA-A3-0913.json.",
  yer:"Ahıska, Altunkale, Hırtıs, Ahılkelek", yer_id:"Ahıska",
  kisiler:"Menûçihr (sonra Mustafa Paşa), Dedis İmedi, Ardahan Sancak Beyi Abdurrahman Bey",
  d:"Lala Mustafa Paşa'nın Çıldır'da Safevî öncü kuvvetlerini yenmesinin hemen ardından Gürcü atabeglerinin elindeki topraklar da Osmanlı idaresine geçti. Altunkale ve çevresini tutan Dedis İmedi ile oğulları itaatlerini bildirdiler; Ardahan sancak beyi Çıldır ve Tümük'ü, başka Osmanlı birlikleri de Hırtıs ile Ahılkelek'i aldı. Menûçihr'e ve kardeşine birer sancak bırakıldı, atabeglik ülkesinin geri kalanı doğrudan idareye bağlandı. Ahıska bundan sonra yeni kurulan Çıldır eyaletinin merkezi olacak; İstanbul'a gelip müslüman olan ve Mustafa adını alan Menûçihr 1 Temmuz 1579'da bu eyaletin başına getirilecekti.",
  kaynak:"ahiska · cildir-eyaleti · lala-mustafa-pasa" },

// ── POSTIT-96 — Megrelya (Dadyan) Amasya'da Osmanlı nüfuz bölgesine bırakıldı ──
{ t:"1555-05-29", k:"antlasma", etiket:["diplomasi","konu-diplomasi"],
  b:"Megrelya (Dadyan) beyliği Osmanlı nüfuz bölgesine bırakıldı",
  gun:"29 Mayıs 1555 (Amasya Antlaşması günü)",
  ic_not_gun:"Gün Amasya Antlaşması'nın günüdür (olaylar.js); TDV gurcistan Dadyan'ın Amasya ile Osmanlı'ya bırakıldığını söyler, ayrı gün vermez. GÜN KOMŞUDAN değil, aynı belgenin günü.",
  yer:"Zugdidi (Megrelya), Batı Gürcistan", yer_id:"Zugdidi (Megrelya/Odişi merkezi)",
  kisiler:"",
  d:"Amasya Antlaşması'nın Gürcistan'ı bölen hükümleriyle Batı Gürcistan'daki Dadyan (Megrel ve Svanet) beyliği, İmereti ve Güryel ile birlikte Osmanlı nüfuz bölgesine bırakıldı. Haritada Megrelya'nın merkezi Zugdidi bu günden itibaren Osmanlı'ya tâbi bir beylik olarak görünür; fiilî itaat bildirimi ise 1578'de gelecekti.",
  kaynak:"gurcistan (TDV: 'Dadian (Megrel ve Svanet), Güryel, Daveli/Tao-eli Osmanlı Devleti'ne' — Amasya, 1555)" },

// ── A1 devri ② (0021/H-0030) — 1595 Tuna kaleleri ───────────────────
//   Ayaklanmanın başı ZATEN VAR: olaylar_ek10.js 1594-10-05 (üç voyvodalık)
//   ve 1594-11-13 (Bükreş, Tuna kalelerine saldırı). Eksik olan, kaynakta
//   ADIYLA geçen kale olaylarıydı.
{ t:"1595-01-01", k:"savas", etiket:["isyan","savas","konu-askeri","konu-isyan"],
  b:"Cesur Mihail'in Tuna kalelerine akınları — Rusçuk yakıldı, İbrâil alındı, Silistre yağmalandı",
  gun:"Ocak – ilkbahar 1595",
  ic_not_gun:"Kaynaklar ay/mevsim veriyor, gün vermiyor → yıl kodu 1595-01-01 (§4). TDV murad-iii İbrâil kalesinin yakılmasını 'Ocak 1595', TDV ibrail zaptını '1595 Martında' verir — iki TDV maddesi ayrışıyor, bildirildi. TDV ruscuk 'Şubat 1595', TDV silistre '1595 ilkbaharı'. D147: 1595-01-01 ±30 günde maddesiz kırılma YOK (ölçüldü). Yerleşim tarafı: İbrail'in 1595-1601 Mihail idaresi atlasta yok (d 1538→1829) — B önerisi YAMA-A3-0913.json.",
  yer:"Rusçuk, İbrâil, Silistre", yer_id:"İbrail",
  kisiler:"Eflak Voyvodası Cesur Mihail (Mihai Viteazul), III. Murad",
  d:"Kutsal İttifak'a katılan Eflak Voyvodası Cesur Mihail, 1594-95 kışında Tuna boyunda doğrudan Osmanlı idaresindeki kale ve şehirlere yüklendi. TDV'nin Rusçuk maddesine göre Şubat 1595'te kaleyi alamasa da şehri ele geçirip yaktı. İbrâil maddesine göre Tuna'nın sol kıyısındaki İbrâil'i zaptetti ve şehir 1601'e kadar onun elinde kaldı; III. Murad maddesi de Eflak ordusunun İbrâil kalesini yakıp Silistre'ye kadar uzandığını yazar. Silistre maddesinde anılan bir tahrir kaydına göre Eflak ordusu 1595 ilkbaharında Tuna'yı geçerek Silistre'yi yağmaladı; şehrin kalesi yıkıldı ve uzun süre kullanılamadı. Aynı yaz Koca Sinan Paşa Eflak üzerine sefere çıkacaktı.",
  kaynak:"ruscuk · ibrail · silistre · murad-iii · koca-sinan-pasa" },

// ── 0035/H-0090 — savaş başlangıçları, ilk parti ───────────────────
//   Plan ve mevcut başlangıç maddelerinin dökümü raporda. Bu partide yalnız
//   TDV'nin GÜNÜYLE verdiği iki başlangıç adımı yazıldı.
{ t:"1711-04-09", k:"sefer", etiket:["savas","sefer","konu-askeri"],
  b:"Prut Seferi başladı — 1710-1711 Osmanlı-Rus Savaşı'nda ordu İstanbul'dan çıktı",
  gun:"9 Nisan 1711",
  yer:"İstanbul", yer_id:"İstanbul",
  kisiler:"III. Ahmed, Baltacı Mehmed Paşa, Çar I. Petro, Kırım Hanı Devlet Giray",
  d:"Rusya'nın Osmanlı topraklarına saldırması, Çar Petro'nun 1700 İstanbul Antlaşması'nın hükümlerine uymaması ve Kırım Hanı Devlet Giray'ın teşvikleri III. Ahmed'i Rusya'ya savaş ilan etmeye götürmüştü. TDV'nin III. Ahmed maddesine göre sonradan Prut Seferi adıyla anılacak bu savaş, Osmanlı ordusunun 9 Nisan 1711'de İstanbul'dan hareketiyle fiilen başladı. Baltacı Mehmed Paşa kumandasındaki ordu Kırım kuvvetleriyle birleşerek Prut nehrine doğru ilerledi; sefer Temmuz'da Rus ordusunun Prut kıyısında sıkıştırılmasıyla sonuçlanacaktı.",
  kaynak:"ahmed-iii" },

{ t:"1787-07-27", k:"diplomasi", etiket:["diplomasi","savas","konu-askeri","konu-diplomasi"],
  b:"Rus elçisine ültimatom — 1787-1792 Osmanlı-Rus Savaşı'na giden son adım",
  gun:"27 Temmuz 1787",
  yer:"İstanbul", yer_id:"İstanbul",
  kisiler:"I. Abdülhamid, Reîsülküttâb Süleyman Feyzi Efendi, Koca Yûsuf Paşa, II. Katerina",
  d:"Kırım'ın 1783'te Rusya'ya ilhakından sonra süren gerginlik, Rusya'nın İskenderiye konsolosluğunun Mısır'daki kölemen beylerini Osmanlı'ya karşı kışkırttığının anlaşılmasıyla koptu. TDV'nin I. Abdülhamid maddesine göre Reîsülküttâb Süleyman Feyzi Efendi 27 Temmuz 1787'de İstanbul'daki Rus elçisine yedi maddelik bir ültimatom verdi. Rusya'nın cevabı beklenmeden savaş kararı alındı ve birkaç hafta içinde ilan edildi; savaşın hedefi Kırım'ın geri alınmasıydı.",
  kaynak:"abdulhamid-i · yas-antlasmasi" },

// ── 0039/H-0004 — 1918-1923 doğu ve güney cephesi, ilk parti (10) ────
//   Mevcut çekirdek maddeler DOKUNULMADI: Brest-Litovsk · Batum 1918 · Elviye-i
//   Selâse · Gümrü Antlaşması · Ankara İtilâfnâmesi · Kars Antlaşması ·
//   Çukurova dosyası (Maraş işgali 1919, Kilis · Antep · Tarsus · Mersin ·
//   Adana kurtuluşları).
//   ⚠️ Beş maddede harita KIPIRDAMAZ: atlas Kars · Ardahan · Artvin · Antalya
//   için 1919-1921 işgal/Ermeni dönemini taşımıyor — madde kaynaklı, eksik
//   olan yerleşim tarafı (B, YAMA-A3-0913.json).
{ t:"1919-04-12", k:"kayip", etiket:["isgal","toprak-kayip","konu-askeri"],
  b:"Kars'ın İngiliz işgali — Cenûb-ı Garbî Kafkas Hükûmeti dağıtıldı",
  gun:"12 Nisan 1919",
  ic_not_gun:"TDV kars '12 Nisan 1919', TDV ahiska '13 Nisan 1919' — bir günlük ayrışma, şehir maddesi esas alındı. Yerleşim tarafı 13 Ekim 2026'da indi: Kars grubu Osmanlı d: 1918-04-25→1919-04-30 (Cenûb-ı Garbî Kafkas/İngiliz dönemi künyesiz, d: ile temsil), ardından Ermeni idaresi.",
  yer:"Kars", yer_id:"Kars", kisiler:"",
  d:"Mondros Mütarekesi'nin 1914 sınırlarına çekilme hükmü gereği Osmanlı ordusu Kars'ı boşaltmıştı. Bölge halkı Ermeni ve Gürcü saldırılarına karşı 5 Kasım 1918'de Kars İslâm Şûrası'nı kurdu ve Ocak 1919'daki kongreyle bunu Cenûb-ı Garbî Kafkas Hükûmet-i Muvakkate-i Milliyesi'ne dönüştürdü. TDV'nin Kars maddesine göre İngilizler 12 Nisan 1919'da Kars'ı işgal edip bu hükümeti dağıttı, üyelerini tutuklayarak sürgüne gönderdi ve şehrin denetimini Ermenilere bıraktı.",
  kaynak:"kars · ahiska" },

{ t:"1919-04-29", k:"kayip", etiket:["isgal","toprak-kayip","konu-askeri"],
  b:"Antalya'nın İtalyan işgali",
  gun:"29 Nisan 1919",
  ic_not_gun:"Gün TDV antalya. Atlas Antalya'yı 1920-04-23'e kadar OSMANLI gösteriyor, İtalyan işgal dönemi yok — yerleşim tarafı B.",
  yer:"Antalya", yer_id:"Antalya", kisiler:"",
  d:"Mondros Mütarekesi'nin ardından İtilaf devletleri Anadolu'da işgal bölgelerine yerleşirken İtalya güneybatı Anadolu'ya yöneldi. TDV'nin Antalya maddesine göre şehir ve çevresi, mütareke hükümlerine dayanılarak 29 Nisan 1919'da İtalyanlar tarafından işgal edildi. İşgal yaklaşık iki yıl sürecekti.",
  kaynak:"antalya" },

{ t:"1920-02-11", k:"savas", etiket:["savas","kurtulus","toprak-kazanc","konu-askeri"],
  b:"Maraş'ın kurtuluşu — Fransızlar şehri boşalttı",
  gun:"11-12 Şubat 1920",
  yer:"Maraş", yer_id:"Maraş", kisiler:"Sütçü İmam, Doktor Mustafa Bey, General Queratte",
  d:"İngilizlerin 22 Şubat 1919'da işgal ettiği Maraş, iki devlet arasındaki anlaşmayla 29 Ekim 1919'da Fransızlara bırakılmıştı. Fransız birlikleri içindeki Ermenilerin tutumu ve kaledeki Türk bayrağının indirilmesi halkı ayaklandırdı; şehirde Müdâfaa-i Hukuk Cemiyeti ve Kuvâ-yi Milliye örgütlendi. TDV'nin Kahramanmaraş maddesine göre çatışmaların sonunda Fransızlar 11 Şubat 1920'de şehri boşaltıp İslâhiye yönüne çekilmeye başladı ve Maraş 11-12 Şubat'ta kurtuldu. Şehre 1925'te İstiklâl madalyası verildi.",
  kaynak:"kahramanmaras" },

{ t:"1920-04-11", k:"savas", etiket:["savas","kurtulus","toprak-kazanc","konu-askeri"],
  b:"Urfa'nın kurtuluşu — Fransız garnizonu şehri terk etti",
  gun:"11 Nisan 1920 (anlaşma 10 Nisan)",
  ic_not_gun:"TDV sanliurfa: Fransızlar 10 Nisan 1920'de anlaşmayla boşaltmayı kabul etti, ertesi gün şehri terk etti. Atlasın isg dönemi 1920-04-10'da bitiyor ve kendi notu 'TÜRETİLDİ — doğrulanmadı' diyor; TDV'ye göre çıkış 11 Nisan — yerleşim tarafı B.",
  yer:"Urfa", yer_id:"Urfa", kisiler:"",
  d:"Mart 1919'da İngilizlerin, yedi ay kadar sonra da Fransızların işgal ettiği Urfa'da halk 7 Şubat 1920'de işgal kuvvetlerine karşı ayaklandı. TDV'nin Şanlıurfa maddesine göre iki ay süren çarpışmaların ardından Fransızlar 10 Nisan 1920'de anlaşma şartlarıyla Urfa'yı boşaltmayı kabul etti ve ertesi gün şehirden çıktı.",
  kaynak:"sanliurfa" },

{ t:"1920-09-28", k:"savas", etiket:["savas","konu-askeri"],
  b:"Doğu Cephesi harekâtı başladı — Kâzım Karabekir Ermenistan'a karşı taarruza geçti",
  gun:"28 Eylül 1920",
  yer:"Soğanlı dağı geçitleri, Sarıkamış", yer_id:"Sarıkamış", kisiler:"Kâzım Karabekir Paşa",
  d:"Sevr Antlaşması'nın Erzurum, Trabzon, Van, Bitlis ve Bingöl'ü Ermenistan'a bırakması ve bölgedeki Ermeni saldırılarının artması üzerine TBMM hükümeti 20 Eylül 1920'de harekâta izin verdi. TDV'nin Kâzım Karabekir maddesine göre Şark Cephesi Kumandanı Karabekir, Soğanlı dağı geçitlerini tutan birliklerine taarruz emri vererek 28 Eylül'de doğu harekâtını başlattı. Sarıkamış, Göle ve Kağızman alındı; harekât bir ay sonra Kars'ın kurtarılmasıyla sürecekti.",
  kaynak:"kazim-karabekir" },

{ t:"1920-10-30", k:"fetih", etiket:["savas","kurtulus","toprak-kazanc","konu-askeri"],
  b:"Kars'ın kurtuluşu — Doğu Cephesi Kars'a girdi",
  gun:"30 Ekim 1920",
  ic_not_gun:"Gün TDV kars ve kazim-karabekir (iki madde uyuşuyor). Yerleşim tarafı 13 Ekim 2026'da indi: Kars grubu 1919-04-30→1920-10-30 ermenistan-demokratik-cumhuriyeti, 1920-10-30'dan tbmm-turkiye.",
  yer:"Kars, Sarıkamış, Digor, Arpaçay, Küçükperveli", yer_id:"Kars", kisiler:"Kâzım Karabekir Paşa",
  d:"TDV'nin Kars maddesine göre Kâzım Karabekir Paşa 30 Ekim 1920'de Kars'a girdi ve şehir, İngilizlerin 1919'da denetimini bıraktığı Ermeni idaresinden kurtarıldı. Karabekir maddesi bunun Kars'ın ikinci kurtuluşu olduğunu vurgular: şehir ilk kez Nisan 1918'de Ermenilerden alınmıştı. Doğu Cephesi ilerleyerek 7 Kasım'da Gümrü'yü aldı; savaş 3 Aralık 1920'deki Gümrü Antlaşması ile sona erdi.",
  kaynak:"kars · kazim-karabekir" },

{ t:"1920-11-07", k:"savas", etiket:["savas","konu-askeri"],
  b:"Gümrü'nün alınışı — Doğu Cephesi Ermenistan içlerine ilerledi",
  gun:"7 Kasım 1920",
  yer:"Gümrü (Aleksandropol)", yer_id:"Gümrü (Aleksandropol)", kisiler:"Kâzım Karabekir Paşa",
  d:"Kars'ın kurtarılmasından sonra harekâta devam eden Kâzım Karabekir Paşa'nın birlikleri 7 Kasım 1920'de Gümrü'yü aldı. Ateşkese razı olan Ermenilerle görüşmeler Gümrü'de yürütüldü ve savaş 3 Aralık 1920'de imzalanan Gümrü Antlaşması ile sona erdi.",
  kaynak:"kazim-karabekir · kars",
  ic_not_d:"KUTU-E-1014 (Emre 0039/H-0004 ikinci parti). TDV kazim-karabekir birebir: 'Harekâta devam ederek 7 Kasım'da Gümrü'yü ve 12 Kasım'da Iğdır'ı aldı.' ⚠️ Haritada Gümrü (Aleksandropol) 1917-11-07→1991 kesintisiz sovyet-rusya; 1918-1920 Ermenistan ve Kasım 1920 Türk işgali VERİDE YOK (ayrı VERI işi)." },

{ t:"1920-11-12", k:"fetih", etiket:["savas","toprak-kazanc","konu-askeri"],
  b:"Iğdır'ın alınışı",
  gun:"12 Kasım 1920",
  yer:"Iğdır", yer_id:"Iğdır", kisiler:"Kâzım Karabekir Paşa",
  d:"Doğu Cephesi Gümrü'yü aldıktan beş gün sonra, 12 Kasım 1920'de Iğdır'ı da aldı. Iğdır, 3 Aralık 1920 Gümrü Antlaşması ile Türkiye'ye bırakıldı.",
  kaynak:"kazim-karabekir",
  ic_not_d:"KUTU-E-1014. TDV kazim-karabekir birebir: '… 12 Kasım'da Iğdır'ı aldı.' ⚠️ Haritada Iğdır 1920-12-03'te (Gümrü Antlaşması) tbmm-turkiye'ye geçiyor; fiilî alınış 12 Kasım — s: sınırının 1920-11-12'ye çekilmesi ayrı VERI işi (yerlesimler_ek26.js)." },

{ t:"1921-02-09", k:"kayip", etiket:["savas","konu-askeri"],
  b:"Antep savunmasının sonu — şehir on ay direndikten sonra Fransızlara bırakıldı",
  gun:"7-9 Şubat 1921",
  yer:"Antep", yer_id:"Antep", kisiler:"Şâhin Bey",
  d:"İngilizlerin 17 Aralık 1918'de girdiği Antep, 5 Kasım 1919'da Fransızlara bırakılmıştı; Antep-Kilis hattındaki ilk direnişi Şâhin Bey yönetti. TDV'nin Gaziantep maddesine göre şehir halkı 1 Nisan 1920'den 7 Şubat 1921'e kadar Fransız kuvvetlerine karşı direndi; direniş kırılınca savunmadaki kuvvetler geri çekildi ve Fransızlar 9 Şubat'ta şehre hâkim oldu. TBMM, işgale on ay dayanan şehre bundan üç gün önce, 6 Şubat 1921'de gazilik unvanı vermişti. Antep, Ankara Antlaşması'nın ardından 25 Aralık 1921'de boşaltılacaktı.",
  kaynak:"gaziantep" },

{ t:"1921-02-23", k:"fetih", etiket:["kurtulus","toprak-kazanc","konu-askeri"],
  b:"Ardahan ve Artvin'in kurtuluşu",
  gun:"23 Şubat 1921",
  ic_not_gun:"Gün TDV ardahan ve kazim-karabekir. Yerleşim tarafı 13 Ekim 2026'da indi: Ardahan grubu gurcistan-demokratik-cumhuriyeti 1919-04-20→1921-02-23, Artvin grubu 1920-04→1921-02-23; ikisi de bu günden tbmm-turkiye.",
  yer:"Ardahan, Artvin", yer_id:"Ardahan", kisiler:"Kâzım Karabekir Paşa",
  d:"Gümrü Antlaşması'ndan sonra Doğu Cephesi, elviye-i selâsenin Gürcistan elindeki kısmına yöneldi. TDV'nin Ardahan maddesine göre Gürcü ve Ermeni çeteleriyle süren mücadelenin sonunda 23 Şubat 1921'de Artvin ile birlikte Ardahan sancağı da kurtarıldı. Kâzım Karabekir maddesi bu hamleyle Çürüksu, Acara ve Batum kazaları dışında kalan elviye-i selâse topraklarının geri alındığını yazar.",
  kaynak:"ardahan · kazim-karabekir" },

{ t:"1921-03-16", k:"antlasma", etiket:["antlasma","diplomasi","konu-diplomasi"],
  b:"Moskova Antlaşması — TBMM ile Sovyet Rusya doğu sınırını belirledi",
  gun:"16 Mart 1921",
  yer:"Moskova; Kars, Ahıska", yer_id:"Kars", kisiler:"",
  d:"TBMM hükümeti ile Sovyet Rusya arasında 16 Mart 1921'de Moskova Antlaşması imzalandı. TDV'nin Kars maddesine göre bu antlaşma ile 13 Ekim 1921'deki Kars Antlaşması'nın sınır düzenlemeleri sonucunda Kars yeni Türk devletinin sınırları içinde kaldı. Ahıska maddesine göre ise Ahıska bu antlaşmayla Gürcistan Sovyet Sosyalist Cumhuriyeti'nin Tiflis vilâyetine bağlandı. Doğu sınırı, yedi ay sonra Güney Kafkasya cumhuriyetleriyle imzalanan Kars Antlaşması'yla kesinleşecekti.",
  kaynak:"kars · ahiska" },

{ t:"1921-06-01", k:"siyaset", etiket:["kurtulus","toprak-kazanc","konu-askeri","konu-siyasi"],
  b:"İtalyanlar Antalya'yı boşaltmaya başladı",
  gun:"1 Haziran 1921",
  ic_not_gun:"Gün TDV antalya. Yerleşim tarafı yazıldı: yerlesimler.js Antalya isg:italya {1919-04-29→1921-06-01} (TDV antalya, GEMINI-DOGRULA 0919) — harita bu gün kıpırdar; 2t isg havuzu bu maddeyi kapatır (KIRILMASIZ-9, 19 Eyl 2026).",
  yer:"Antalya", yer_id:"Antalya", kisiler:"",
  d:"TDV'nin Antalya maddesine göre 29 Nisan 1919'dan beri süren İtalyan işgali, İtalyanların 1 Haziran 1921'de şehri boşaltmaya başlamasıyla sona erdi. Antalya ve çevresi böylece Millî Mücadele'nin askerî sonucunu beklemeden işgalden kurtuldu.",
  kaynak:"antalya" },
// =====================================================================
// KUTU-A-1014 — Doğu grubu kutu maddeleri (14 Ekim 2026). Her madde bir
// yerleşim kırılmasını (d:/v:) kronolojiye bağlar (Değişmez 2) ve kaynağı
// TDV'dir; kaynak dışı ayrıntı yazılmadı.
// =====================================================================
{ t:"1538-11-27", k:"vassal", etiket:["toprak-kazanc"],
  b:"Hadramut ve Şihr hâkimi Osmanlı hâkimiyetini tanıdı — Hadım Süleyman Paşa'nın Hint seferi dönüşü",
  gun:"27 Kasım 1538",
  ic_not_gun:"TDV suleyman-pasa-hadim: '27 Kasım 1538'de Şihr Limanı'na uğradı' — itaatin kendi günü yok, gün Şihr'e uğramanındır (en erken sınır). Yerleşim: Seyûn v:'Kesîrî reisleri (tâbi)' 1538-11-27 (eski 1538-01-01 seferin çıkışından önceydi). KUTU-A-1014 (0088/H-0048).",
  yer:"Şihr, Hadramut, Seyûn", yer_id:"Seyûn (Sayvan)", kisiler:"Hadım Süleyman Paşa",
  d:"Diu kuşatmasından dönen Hadım Süleyman Paşa 27 Kasım 1538'de Şihr Limanı'na uğradı; Hadramut ve Şihr hâkimi Osmanlı hâkimiyetini kabul edince Aden'e geçti. Hadramut Yemen'e bağlı bir sancak olarak teşkilâtlandırıldı, ama bölgede idareyi Kesîrî kabilesinin reisleri elinde tutmayı sürdürdü. Bu tâbilik, Osmanlıların 1635'te Yemen'den çekilmesine kadar sürdü.",
  kaynak:"suleyman-pasa-hadim" },
{ t:"1603-01-01", k:"kayip", etiket:["toprak-kayip"],
  b:"Şah Abbas Tiflis'i geri aldı — Kartli ve Kaheti'de Osmanlı idaresinin sonu",
  gun:"1603",
  ic_not_gun:"TDV tiflis '1603'te Tiflis Şah Abbas'ın eline geçti' · TDV gurcistan '1603'te Şah I. Abbas Tiflis şehrini Osmanlılar'dan geri alıp Kartli'yi hanlık olarak ilân etti' — YIL, ay/gün yok. ⚠️ YYYY-01-01 kuralı bu maddeyi Abbas'ın 1603 sonbahar seferinden (Tebriz 21 Ekim 1603) önceye düşürür; sıra beyanlıdır. Eski yerleşim ucu 1606, TDV'deki II. Luarsab'ın tahta çıkışı / Lori-Tumanıs yılıydı, Tiflis'in değil. Yerleşim: Tiflis d · Zagem v · Gori d · Telavi v. KUTU-A-1014 (0081/H-0051).",
  yer:"Tiflis, Gori, Zagem (Kaheti), Telavi", yer_id:"Tiflis", kisiler:"I. Abbas",
  d:"Şah I. Abbas 1603'te Tiflis'i Osmanlılar'dan geri aldı ve Kartli'yi hanlık olarak ilân etti; Kahet'te de Safevî idaresi kuruldu. 1578'de Lala Mustafa Paşa'nın seferiyle başlayan Osmanlı'nın Doğu Gürcistan'daki idaresi böylece sona erdi; Tiflis ancak 1723'te yeniden Osmanlı eline geçecekti.",
  kaynak:"tiflis" },
{ t:"1587-01-01", k:"idari", etiket:["toprak-kazanc"],
  b:"Gori eyaleti kuruldu — Kartli'nin batısında doğrudan Osmanlı idaresi",
  gun:"1587",
  ic_not_gun:"TDV gurcistan: 'batı bölgesinde Gori eyaletini (1587) kurmuş' — YIL. Yerleşim: Gori v (1578 itaat) → d 1587. KUTU-A-1014 (0080/H-0020).",
  yer:"Gori", yer_id:"Gori", kisiler:"",
  d:"1578'de Gori ve Muhran kesimlerindeki Gürcü beyleri Osmanlılar'a itaat etmişti. 1587'de Kartli'nin batısında Gori eyaleti kuruldu ve bölge doğrudan Osmanlı idaresine bağlandı. Gürcü Simon'un isyanı sırasında elden çıkan Gori Kalesi 1601'de geri alındı; Osmanlı idaresi 1603'te Şah Abbas'ın seferiyle sona erdi.",
  kaynak:"gurcistan" },
{ t:"1579-07-26", k:"fetih", etiket:["toprak-kazanc"],
  b:"Kılıç Ali Paşa Faş (Poti) Kalesi'ni inşa etti — Rioni ağzında Osmanlı üssü",
  gun:"26 Temmuz 1579",
  ic_not_gun:"TDV fas--gurcistan (M. Aydın 2020): '26 Temmuz 1579'da Faş Kalesi'ni inşa etti' · TDV kilic-ali-pasa 987/1579. Yerleşim: Poti (Faş Kalesi) d. KUTU-A-1014 (0074/H-0014).",
  yer:"Poti (Faş Kalesi)", yer_id:"Poti (Faş Kalesi)", kisiler:"Kılıç Ali Paşa",
  d:"Kaptan-ı derya Kılıç Ali Paşa, Rioni (Faş) ırmağının Karadeniz'e döküldüğü yerde 26 Temmuz 1579'da Faş Kalesi'ni inşa etti.",
  kaynak:"fas--gurcistan" },
{ t:"1640-01-01", k:"kayip", etiket:["toprak-kayip"],
  b:"Faş (Poti) Kalesi İmereti, Guria ve Megrelya birliklerince yıkıldı",
  gun:"1640",
  ic_not_gun:"TDV fas--gurcistan: '1640'ta Faş Kalesi, Gürya ve Mingrelli prenslerin katılımıyla İmeretiya birlikleri tarafından yerle bir edildi' — YIL. 1640-1724 sahibi ADIYLA yok ⇒ yerleşimde __BOSLUK__. KUTU-A-1014 (0074/H-0014).",
  yer:"Poti (Faş Kalesi)", yer_id:"Poti (Faş Kalesi)", kisiler:"",
  d:"Faş Kalesi 1640'ta Guria ve Megrelya prenslerinin katıldığı İmereti birliklerince yerle bir edildi. Rioni ağzındaki Osmanlı varlığı, kalenin 1724'te yeniden kurulmasına kadar kesildi.",
  kaynak:"fas--gurcistan" },
{ t:"1724-03-01", k:"fetih", etiket:["toprak-kazanc"],
  b:"Faş (Poti) Kalesi'nin yeniden inşasına başlandı",
  gun:"Mart 1724",
  ic_not_gun:"TDV fas--gurcistan: inşa kararı 23 Aralık 1723 · 'Kalenin inşasına Mart 1724'te başlandı' (AY hassasiyeti; 1724-03-01 ayın ilk günüdür) · inşaat 1729'da bitti. KUTU-A-1014 (0074/H-0014).",
  yer:"Poti (Faş Kalesi)", yer_id:"Poti (Faş Kalesi)", kisiler:"",
  d:"23 Aralık 1723'te alınan kararla yıkık Faş Kalesi'nin yeniden inşasına Mart 1724'te başlandı; inşaat 1729'da tamamlandı.",
  kaynak:"fas--gurcistan" },
{ t:"1809-11-27", k:"kayip", etiket:["toprak-kayip"],
  b:"Rus kuvvetleri Faş (Poti) Kalesi'ni aldı — Rioni ağzı elden çıktı",
  gun:"27 Kasım 1809",
  ic_not_gun:"TDV fas--gurcistan: Mayıs 1809 saldırısı başarısız; 'Bu defa 27 Kasım 1809'da' kale Ruslara teslim edildi. KUTU-A-1014 (0074/H-0014).",
  yer:"Poti (Faş Kalesi)", yer_id:"Poti (Faş Kalesi)", kisiler:"",
  d:"1806-1812 Osmanlı-Rus savaşı sırasında Mayıs 1809'daki Rus saldırısı başarısız oldu; ancak kale 27 Kasım 1809'da Ruslara teslim edildi.",
  kaynak:"fas--gurcistan" },
{ t:"1812-12-19", k:"antlasma", etiket:["toprak-kazanc","antlasma"],
  b:"Bükreş Antlaşması gereğince Faş (Poti) Kalesi Osmanlı'ya geri verildi",
  gun:"19 Aralık 1812",
  ic_not_gun:"TDV fas--gurcistan: '1812 Bükreş Antlaşması gereğince Faş Kalesi … Osmanlı Devleti'ne verildi (19 Aralık 1812)' — teslim günü (antlaşmanın imzası değil). KUTU-A-1014 (0074/H-0014).",
  yer:"Poti (Faş Kalesi)", yer_id:"Poti (Faş Kalesi)", kisiler:"",
  d:"1812 Bükreş Antlaşması gereğince Faş Kalesi 19 Aralık 1812'de Osmanlı Devleti'ne teslim edildi.",
  kaynak:"fas--gurcistan" },
{ t:"1828-06-26", k:"kayip", etiket:["toprak-kayip"],
  b:"Faş (Poti) Kalesi ikinci kez Rus eline geçti — Edirne Antlaşması'yla Rusya'da kaldı",
  gun:"26 Haziran 1828",
  ic_not_gun:"TDV fas--gurcistan: '26 Haziran 1828'de Ruslar'a teslim edildi' · TDV edirne-antlasmasi: 'Ahıska, Ahılkelek, Anapa, Poti gibi kalelerle' (14 Eylül 1829). Yerleşim: s:rusya 1828-06-26'dan (Kars deseni). KUTU-A-1014 (0074/H-0014).",
  yer:"Poti (Faş Kalesi)", yer_id:"Poti (Faş Kalesi)", kisiler:"",
  d:"1828-1829 Osmanlı-Rus savaşının başında Faş Kalesi 26 Haziran 1828'de Ruslara teslim edildi. 14 Eylül 1829 Edirne Antlaşması'yla Ahıska, Ahılkelek ve Anapa ile birlikte Poti de Rusya'ya bırakıldı.",
  kaynak:"fas--gurcistan" },
{ t:"1733-08-17", k:"kayip", etiket:["toprak-kayip"],
  b:"Nâdir Şemâhî'ye girdi — Şirvan'ın merkezi Osmanlı'dan çıktı",
  gun:"17 Ağustos 1733",
  ic_not_gun:"TDV sirvan: 'Nâdir Şah 17 Ağustos 1733'te Şemâhî'ye girdi'. Yerleşim: Şamahı d 1724-06-24→1733-08-17 (İstanbul Muahedesi'yle Osmanlı payı). KUTU-A-1014 (0063/H-0001).",
  yer:"Şamahı", yer_id:"Şamahı", kisiler:"Nâdir",
  d:"24 Haziran 1724 İstanbul Muahedesi'yle Şirvan'ın merkezî kesimiyle birlikte Osmanlı payına düşen Şemâhî'ye Nâdir 17 Ağustos 1733'te girdi. Kafkasya'daki Osmanlı idaresi bundan sonra hızla çözüldü; Gence ve Tiflis 1735'te elden çıktı.",
  kaynak:"sirvan" },
{ t:"1915-07-25", k:"kayip", etiket:["toprak-kayip","savas"],
  b:"İngilizler Nâsıriye'yi işgal etti — Fırat cephesi",
  gun:"25 Temmuz 1915",
  ic_not_gun:"F. J. Moberly, History of the Great War: The Campaign in Mesopotamia 1914-1918, c. I (London: HMSO, 1923), bölüm XI içindekiler: 'Action of 24th July: defeat of the Turks' · 'Occupation of Nasiriya, 25th July'. TDV'de nasiriye maddesi yok. Yerleşim: Nâsıriye d.t/s.f 1914-11-22 (Basra'nın toptan günü) → 1915-07-25. KUTU-A-1014 (0077/H-0004).",
  yer:"Nâsıriye", yer_id:"Nâsıriye", kisiler:"",
  d:"Basra'dan Fırat boyunca ilerleyen İngiliz kuvvetleri 24 Temmuz 1915'te Osmanlı birliklerini yendi ve ertesi gün Nâsıriye'yi işgal etti. Basra 1914 Kasımında düşmüştü; Nâsıriye ise yaklaşık sekiz ay daha Osmanlı elinde kalmıştı.",
  kaynak:"Moberly, The Campaign in Mesopotamia I (1923), bölüm XI" },
{ t:"1724-05-06", k:"fetih", etiket:["toprak-kazanc"],
  b:"Hoy, Kapan ve Karadağ yöresi yeniden Osmanlı idaresine geçti",
  gun:"6 Mayıs 1724",
  ic_not_gun:"Bilgili & Beşe 2009 (Türk Kültürü ve Hacı Bektaş Velî Araştırma Dergisi 50): bölge '6 Mayıs 1724'de tekrar Osmanlı idaresine geçmiştir'; TD 911 (1140/1728) tahriri · TDV hoy '(1724)' YIL. Yerleşim: Hoy d.f 1724-09-28 → 1724-05-06. KUTU-A-1014 (0035/H-0076).",
  yer:"Hoy", yer_id:"Hoy", kisiler:"",
  d:"1723'te başlayan İran seferi sırasında Hoy ile Kapan ve Karadağ yöresi 6 Mayıs 1724'te yeniden Osmanlı idaresine geçti ve 1728'de Osmanlı tahririne kaydedildi.",
  kaynak:"hoy" },

];
