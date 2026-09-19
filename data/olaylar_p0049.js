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
{ t:"1303-01-01", k:"sefer", etiket:["savas","diplomasi","konu-askeri","konu-diplomasi"],
  b:"Katalan Kumpanyası Bizans hizmetine girdi — Anadolu seferinin başlangıcı",
  gun:"1303",
  ic_not_gun:"TDV bizans yıl verir, gün vermez → YYYY-01-01 (§4). savaslar.js sefer f:1303-09-01 ve kronoloji_katalan.js 1303-09-01 DAYANAK DEĞİLDİR. ⚠️ js/app.js sefer kırpması çapayı seferin t'sine (1305-06-01) bağlıyor; bu madde okun görünür başlangıcını tek başına öne çekmez (rapor §0042/H-0004).",
  yer:"İstanbul ve Batı Anadolu (Alaşehir)", yer_id:"Alaşehir",
  kisiler:"Roger de Flor, II. Andronikos",
  d:"Batı Anadolu'da Türk beylikleri karşısında toprak kaybeden Bizans İmparatorluğu, Roger de Flor kumandasındaki yaklaşık 6500 kişilik Katalan birliğini ücretli asker olarak hizmetine aldı. TDV'nin Bizans maddesine göre birlik 1303'te imparatorluğun yardımına geldi ve ertesi yıl Germiyanoğulları'nın kuşattığı Alaşehir'i kurtardı. Ancak kumpanya kısa sürede geçtiği yerleri yağmalamaya başladı; Bizans onu Trakya'ya geçirdi ve 1305'te Roger de Flor'u öldürttü.",
  ic_not_d:"TDV alasehir Katalanların Germiyan kuşatmasını kaldırdığını yazar, yıl vermez; TDV germiyanogullari aynı kuşatmayı 1306'ya koyar — TDV bizans'ın 1304'üyle iki yıllık ayrışma, bildirildi (§4⑥).",
  kaynak:"bizans · alasehir" },

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
  ic_not_gun:"TDV kars '12 Nisan 1919', TDV ahiska '13 Nisan 1919' — bir günlük ayrışma, şehir maddesi esas alındı. Atlas Kars'ı 1918-05-25 → 1920-04-23 OSMANLI gösteriyor; İngiliz/Ermeni denetimi yok — yerleşim tarafı B.",
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
  ic_not_gun:"Gün TDV kars ve kazim-karabekir (iki madde uyuşuyor). Atlas Kars'ı 1920-04-23'ten tbmm-turkiye gösteriyor; 1919-1920 Ermeni denetimi olmadığı için bu maddede harita kıpırdamaz — yerleşim tarafı B.",
  yer:"Kars", yer_id:"Kars", kisiler:"Kâzım Karabekir Paşa",
  d:"TDV'nin Kars maddesine göre Kâzım Karabekir Paşa 30 Ekim 1920'de Kars'a girdi ve şehir, İngilizlerin 1919'da denetimini bıraktığı Ermeni idaresinden kurtarıldı. Karabekir maddesi bunun Kars'ın ikinci kurtuluşu olduğunu vurgular: şehir ilk kez Nisan 1918'de Ermenilerden alınmıştı. Doğu Cephesi ilerleyerek 7 Kasım'da Gümrü'yü aldı; savaş 3 Aralık 1920'deki Gümrü Antlaşması ile sona erdi.",
  kaynak:"kars · kazim-karabekir" },

{ t:"1921-02-09", k:"kayip", etiket:["savas","konu-askeri"],
  b:"Antep savunmasının sonu — şehir on ay direndikten sonra Fransızlara bırakıldı",
  gun:"7-9 Şubat 1921",
  yer:"Antep", yer_id:"Antep", kisiler:"Şâhin Bey",
  d:"İngilizlerin 17 Aralık 1918'de girdiği Antep, 5 Kasım 1919'da Fransızlara bırakılmıştı; Antep-Kilis hattındaki ilk direnişi Şâhin Bey yönetti. TDV'nin Gaziantep maddesine göre şehir halkı 1 Nisan 1920'den 7 Şubat 1921'e kadar Fransız kuvvetlerine karşı direndi; direniş kırılınca savunmadaki kuvvetler geri çekildi ve Fransızlar 9 Şubat'ta şehre hâkim oldu. TBMM, işgale on ay dayanan şehre bundan üç gün önce, 6 Şubat 1921'de gazilik unvanı vermişti. Antep, Ankara Antlaşması'nın ardından 25 Aralık 1921'de boşaltılacaktı.",
  kaynak:"gaziantep" },

{ t:"1921-02-23", k:"fetih", etiket:["kurtulus","toprak-kazanc","konu-askeri"],
  b:"Ardahan ve Artvin'in kurtuluşu",
  gun:"23 Şubat 1921",
  ic_not_gun:"Gün TDV ardahan ve kazim-karabekir. Atlas Ardahan'ı 1920-04-23'ten tbmm-turkiye, Artvin'i 1921-10-13'e kadar sovyet-rusya gösteriyor — iki kayıt da bu günle uyuşmuyor, yerleşim tarafı B.",
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
  kaynak:"antalya" }

];
