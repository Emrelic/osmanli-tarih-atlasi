/* PAKET 23 — arac/paketle.py ile ÜRETİLDİ, ELLE DÜZENLENMEZ.
   10 kaynak dosya, sırası index.html'deki sıradır.
   Kaynağı değiştirdiysen: py arac/paketle.py yenile
   Tazelik kapıda sınanır: py arac/paketle.py sina */
/* ==== data/yerlesimler_p0043libya.js ==== */
// -*- coding: utf-8 -*-
// YERLESIMLER_P0043LIBYA — KITA 13 · paket-emrelic-0043 / İŞ④ · 12 Eylül 2026
// Sevk: 1.MURAT · karar M-3602 + M-3611
// ═══════════════════════════════════════════════════════════════════════
// 🔴 BU DOSYA BİR NOKTA TAŞIYOR — ve bu sayının DÜŞÜKLÜĞÜ İŞİN KENDİSİDİR.
//
// Sevk 12 aday verdi (Tobruk · Derne · Bingazi · Mercu · Beyda · Ajdabiya ·
// Avcile · Dâhile · Hârice · Farafra · Bahriye · Sîve). Ölçüldü
// (`denetim/ARAC-KITA13-LIBYA-TABAN-0912.py`): **onu ZATEN VERİDE.**
// Üçü 3 km sınıfı mükerrer tuzağıydı:
//     "Farafra"      → mevcut `Ferâfire`         0,0 km
//     "Mercu (Marj)" → mevcut `Merc`             4,8 km
//     "el-Beyda"     → mevcut `Beyzâ (Kirene)`  12,4 km
// ⇒ Sevk harfiyen uygulansaydı ON MÜKERRER NOKTA doğardı (`D002`).
//
// 🔴 VE BERKA HİNTERLANDINA (30,0-31,8K / 21,2-24,5D) NOKTA YAZILMADI.
//    O bant gerçekten boş (en yakın nokta 169 km) ama TDV `berka` oraya
//    HİÇBİR yerleşim adı vermiyor; andığı her yer ya kıyıda (Merc ·
//    Bingazi · Beyzâ) ya çok güneyde (Kufra · Câlû · Cağbûb · Tâzirbû) —
//    ve DÖRDÜ DE ATLASTA ZATEN VAR.
//    Emre'nin ilkesi (2 Eylül, p0019/H-0056): *"EĞER YERLEŞİM VAR İSE
//    NOKTA KONUR. YOK İSE UYDURACAK HÂLİMİZ YOK. DEVASA BOŞLUKLAR
//    OLACAKSA OLSUN."*  Koordinatör onayladı (M-3602 ③).
//
// 🔴 AVCİLE (Awjila) YAZILMADI — ve sebebi "mükerrer" DEĞİL:
//    Avcile atlasta YOK ve mevcut `Câlû`dan 26,7 km uzakta, yani 3 km
//    eşiğinin ÜSTÜNDE (`D066`: eşik bir yasak değil bir ŞÜPHE eşiğidir,
//    ve eşiğin üstünde olmak "yaz" demek değildir).
//    Yazılmama sebebi KAYNAKSIZLIK: TDV `berka` gövdesi Senûsî merkezleri
//    olarak **Cağbûb ve Câlû'yu** anıyor, Avcile'yi ANMIYOR.
//    ⚠️ AKADEMİK KAYNAK ARANMADI — `bulunamadı` değil, **ARANMADI**
//    (`D107`: üç damga ayrıdır). Aranırsa yazılabilir.
// ═══════════════════════════════════════════════════════════════════════
//
// 🟢 SÎVA — NİÇİN YAZILDI: KAYNAĞIN KENDİ LİSTESİNDEKİ TEK BOŞLUK
//
// Dar sluglar ÖLÜ (302 ölçüldü): sive · siva · siwa · vahat · amonyum ·
// sive--misir.  ⇒ `§4`: "dar slug tutmazsa KAPSAYICI maddeyi dene."
// Kapsayıcı madde `misir` (200, gövde 231.572 karakter, OKUNDU) şunu
// yazıyor:
//     "Çok geniş ve derin çukurlara dolan sular çevrelerini tarıma ve
//      yerleşmeye uygun vahalar (SÎVA, Bahriyye, Feyyûm, Ferâfre, Dâhle
//      ve Hârce) haline getirmiştir."
//     "En kalabalık vaha Batı çölündeki Libya sınırında bulunan Sîva
//      vahasıdır."
// TDV'nin saydığı ALTI vahanın BEŞİ atlasta zaten var (Bahriye ·
// Feyyûm · Ferâfire · Dâhile · Hârice). Sîva bir TAHMİN değil,
// **kaynağın kendi listesindeki tek eksik.**
//
// ⚠️ AD: TDV yazımı "Sîva". Öngörümde (`denetim/ONGORU-KITA13-IS4-0912.md`,
//    commit 0fa4ea5) "Sîve (Siwa)" yazacağımı söylemiştim; KAYNAĞIN
//    YAZIMINA döndüm. Öngörüden sapma küçük ama kayda geçiyor.
//
// ═══════════ ZİNCİR SEÇİLMEDİ, KARDEŞLERDEN DEVRALINDI (D084) ═══════════
// TDV Sîva için TARİH VERMİYOR — yalnız varlığını ve coğrafyasını veriyor.
// Kendi tarihimi SEÇMEK yerine, aynı sınıftaki DÖRT kardeş vahanın
// kullandığı zinciri devraldım; dördü de BİREBİR aynısını taşıyor:
//     Dâhile (25,494/28,976) · Hârice (25,440/30,546) ·
//     Ferâfire (27,058/27,970) · Bahriye (28,349/28,864)
// 🟢 Ve bu zincir `1517-04-13` kullanıyor — Memlük Devleti'nin GERÇEK
//    sonu. (Libya KIYISI `1517-05-19` kullanıyor ve o ayrı bir kalem:
//    p0043/H-0016(5), İŞ④'e DAHİL DEĞİL.)
// 🔴 DEVRALINDIĞI AÇIKÇA YAZILIYOR: yazılmayan devralma, uydurmadan
//    ayırt edilemez. Aşağıdaki `kaynak:` alanı bunu taşıyor.
//
// ⚠️ BİLİNEN VE DAMGALANAN ZAYIFLIK: Sîva altı vahanın EN ÖZERKİYDİ;
//    Mısır'ın fiilî denetimi Kavalalı Mehmed Ali'nin 1820 Batı Çölü
//    seferiyle kuruldu. Yani `v: 1805-07-03` (Kavalalı'nın valiliği)
//    fiilî denetimden ~15 yıl ÖNCE başlıyor. Bu KARDEŞLERDE DE BÖYLE —
//    atlasın bilinçli konvansiyonu. Sîva'ya özel bir 1820 tarihi
//    YAZMADIM çünkü TDV'de dayanağı yok (`§4`: tarih uydurma).
//    ⇒ Düzeltilecekse DÖRT KARDEŞLE BİRLİKTE düzeltilir, tek başına değil.
//
// ═══════════ SINAVLAR ═══════════
//   3 km mükerrer : en yakın nokta Cağbûb 114,3 km  ✓ (ölçüldü)
//   ad çakışması  : "Sîva"/"Siwa" atlasta YOK — normalleştiriciyle
//                   arandı VE komşuluk taramasıyla doğrulandı ✓
//   kara maskesi  : `denetle.py` konum dalıyla sınanacak
// ═══════════════════════════════════════════════════════════════════════

window.YERLESIMLER_P0043LIBYA = [

  { ad:"Sîva (Siwa)",
    tur:"bolge", lat:29.203, lon:25.519, g:0, k:4, m:"Kahire",
    kaynak:"TDV `misir` (kapsayıcı madde, 200, gövde okundu) — VARLIK ve COĞRAFYA kaynaklı: \"vahalar (Sîva, Bahriyye, Feyyûm, Ferâfre, Dâhle ve Hârce)\" ve \"En kalabalık vaha Batı çölündeki Libya sınırında bulunan Sîva vahasıdır.\" 🔴 TARİH KAYNAKLI DEĞİL: TDV Sîva için dönem vermiyor. Zincir, aynı sınıftaki DÖRT kardeş vahadan (Dâhile · Hârice · Ferâfire · Bahriye) BİREBİR DEVRALINDI (D084) — seçilmedi, devralındı ve bu açıkça yazıldı. Dar sluglar ölçüldü ve ÖLÜ: sive · siva · siwa · vahat · amonyum · sive--misir (302).",
    neden:"Batı Çölü'nün en kalabalık vahası ve TDV'nin saydığı altı vahadan atlasta bulunmayan TEK vaha (beşi zaten var). En yakın mevcut nokta Cağbûb 114,3 km ⇒ 3 km sınavı geçti, gerçek boşluk. ⚠️ Sîva altı vahanın en özerkiydi; Mısır'ın fiilî denetimi 1820 Kavalalı seferiyle kuruldu, yani `v:1805-07-03` fiilî denetimden ~15 yıl önce başlıyor — AMA bu dört kardeşte de böyle, atlasın konvansiyonu. Sîva'ya özel tarih YAZILMADI çünkü TDV'de dayanağı yok.",
    s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},
       {f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},
       {f:"1922-03-15",t:"1923-10-29",d:"misir-kralligi"}],
    d:[{f:"1517-04-13",t:"1805-07-03"}],
    v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali",kaynak:"kid/statu kardeş vahalarla aynı (Dâhile · Hârice · Ferâfire · Bahriye); tarih DEĞİŞMEDİ · UYGULA-YERLESIM-0930 (0076/H-0064)"}],
    isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere"},
         {f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}] }

];

;
/* ==== data/yerlesimler_p0037.js ==== */
// -*- coding: utf-8 -*-
// YERLESIMLER_P0037 — PAKET-0037 oturumu (Fable), 2 Eylül 2026, 1.MURAT sevki (tahta M-1903/M-1910/M-1923)
//
// 🔴 BU DOSYA HENÜZ girdi.py'ye VE index.html'e BAĞLI DEĞİLDİR (M-1901: koşu sürerken
//    bağlama koordinatörün işi). Bağlanınca `window.YERLESIMLER_P0037` girdi.oku_dosya
//    tarafından kendiliğinden bulunur. Ad alanı dosya adından türetildi (§7 kuralı).
//
// ÜÇ KÜME, ÜÇ MADDE:
//   H-0001  Kahul · Bolgrad     Cenûbî Besarabya'nın İsmail'le birlikte 1856-1878 Boğdan'a
//                               dönen üç kazasından ikisi. İsmail yer_yama_uyg1.js'te düzeltildi,
//                               bu ikisi VERİDE HİÇ YOKTU (_yer_ara: 0 eşleşme, 2 Eylül'de yeniden
//                               sınandı). Sahiplik zinciri İsmail'in (yerlesimler.js) deseniyle
//                               birebir; tek fark: Kahul 1538'de Osmanlı rayası olmadı (Bucak
//                               sınırının kuzeyinde, Boğdan toprağı kaldı), Bolgrad 1821'de kuruldu.
//   H-0005  Lovozero · Varzuga  Emre'nin görselindeki kutu 67,10-69,12K / 34,29-39,25D 1864'te
//                               0 NOKTA (_yer_ara). Kola yarımadasının içi Kola·Kandalakşa (batı)
//                               ile Ponoy (doğu) arasında yarıçap tavanı yüzünden boş kalıyor —
//                               emilme değil, boşluk. Zincir Kola'nın (yerlesimler_ek8.js) aynısı.
//   H-0007  Lublin · Chełm · Zamość · Brest-Litovsk · Kovel · Lutsk · Volodymyr · Rivne ·
//           Pinsk · Białystok · Grodno
//                               Emre'nin görselindeki kutu 50,62-52,57K / 21,84-25,93D 1867'de
//                               0 NOKTA; geniş kutu 49-54,5K / 19-29,5D'de yalnız 6 nokta
//                               (Krakov · Lvov · Varşova · Minsk · Bar · Meciboj). Lvov'un
//                               (avusturya) peteği Lublin-Volhinya'yı kuzeye doğru boyuyor,
//                               Varşova/Minsk ile arasında tavan şeridi açık kalıyor — görseldeki
//                               "boşluk" ve yanlış sarı bu. Zincirler komşuların desenine oturtuldu:
//                               Varşova (almanya 1795-1806 · lehistan 1806-1815 · rusya 1815),
//                               Krakov/Lvov (avusturya 1795/1772), Minsk/Kamaniçe (rusya 1793/1795).
//
// KAYNAK DİSİPLİNİ (§4): TDV `bogdan` gövdesi okundu ve Kahul·Bolgrad·İsmail'in 1856/1878
// hareketini AÇIKÇA veriyor. TDV `lehistan` 200 döndü ama gövde BOİLERPLATE (§4 ④: 11 paragraf,
// hiçbiri madde metni) — "TDV'de yok" DENMİYOR, "çekilemedi" deniyor; `lublin`·`brest`·`bolgrad`·
// `kahul` 302 (ölü). Kola/Volhinya için TDV kapsam dışı; dayanak projede kabul görmüş genel
// akademik kaynaklar (kronoloji_lehistan.js'in Norman Davies dayanağı) ve coğrafî bilgi.
// Doğrulanamayan tek şey Bolgrad'ın kuruluş yılı (1821): Encyclopedia of Ukraine sayfası
// bulunamadı — kaynak alanında AÇIKÇA yazılı, gizlenmedi.
//
// DEĞİŞMEZ-2 NOTU: Osmanlı (`d:`/`v:`) kırılma günleri 1456-06-01 · 1812-05-28 · 1856-03-30 ·
// 1878-07-13 — dördü de İsmail'in kullandığı, çekirdekte maddeli günler. Yabancı (`s:`)
// günlerinden İKİSİ külliyatta YENİ: 1809-10-14 (Schönbrunn — Lublin·Chełm·Zamość Avusturya'dan
// Varşova Dukalığı'na) ve 1921-03-18 (Riga — Volhinya/Polesye/Grodno Sovyet Rusya'dan Polonya'ya).
// İkisi de gerçek ve savunulur; 2s sayacına en çok +2 gün ekler (tavan 121, bugün 70).

window.YERLESIMLER_P0037 = [

// ───── H-0001 · Cenûbî Besarabya ─────
{ ad:"Kahul (Cahul)", tur:"sehir", lat:45.905, lon:28.198, g:0, k:4, m:"Yaş",
  isg:[{f:"1806-11-30",t:"1812-05-28",d:"rusya",kaynak:"bogdan · gün komşudan: Akkirman · TDV akkirman (30 Kasım 1806); ESBE «Турецкие войны России»: Mihelson'a Memleketeyn'i işgal emri, 11 Kasım J'de Dinyester geçişi"}],
  s:[{f:"1281-01-01",t:"1359-01-01",d:"altinorda",kaynak:"ÇIKARIM: TDV bogdan 'XIII. yüzyıldan itibaren de Tatarlar'la Gagauzlar'ın istilâsına uğrayan Moldavya' + TDV bucak (komşu). 1345-1359 Macar markı (Dragoş) yılı TDV'de bulunamadı · bitiş = künye bogdan f — DUNYA-0079"},{f:"1359-01-01",t:"1456-06-01",d:"bogdan"},{f:"1812-05-28",t:"1856-03-30",d:"rusya"},{f:"1878-07-13",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-01-01",d:"sovyet-rusya"},{f:"1918-01-01",t:"1923-10-29",d:"romanya-kralligi"}],
  v:[{f:"1456-06-01",t:"1812-05-28",k:"Boğdan Voyvodalığı",statu:"vassal",kid:"bogdan"},{f:"1856-03-30",t:"1878-07-13",k:"Boğdan Voyvodalığı (Cenûbî Besarabya — Paris Antlaşması'yla Boğdan'a geri verildi, Berlin Antlaşması'yla tekrar Rusya'ya)",statu:"vassal"}],
  d:[],
  kaynak:"TDV `bogdan` (gövdesi okundu): '1812 Bükreş Antlaşması gereğince Boğdan'ın doğu kısmı ... Rusya'ya bırakıldı' · 'Paris Antlaşması ile sonuçlanan Kırım Harbi'nden sonra Rusya Kahul (Cahul), İsmâil Kalesi ve Bolgrad'ı Boğdan'a geri verdi' · 'Berlin Antlaşması ile Besarabya'nın üç vilâyeti tekrar Rusya'ya verilmiş'. 1456-1812 Boğdan tâbiliği: İsmail kaydının deseni; Kahul Bucak rayasına girmedi (Bucak sınırının kuzeyi), bu kısım genel akademik/coğrafî bilgi. Koordinat: coğrafî bilgi. TDV `kahul` 302 (müstakil madde yok)." },

{ ad:"Bolgrad (Bolhrad)", tur:"sehir", lat:45.681, lon:28.613, g:0, k:4, m:"Yaş", kur:"1821-01-01",
  s:[{f:"1821-01-01",t:"1856-03-30",d:"rusya"},{f:"1878-07-13",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-01-01",d:"sovyet-rusya"},{f:"1918-01-01",t:"1923-10-29",d:"romanya-kralligi"}],
  v:[{f:"1856-03-30",t:"1878-07-13",k:"Boğdan Voyvodalığı (Cenûbî Besarabya — Paris Antlaşması'yla Boğdan'a geri verildi, Berlin Antlaşması'yla tekrar Rusya'ya)",statu:"vassal"}],
  d:[],
  kaynak:"TDV `bogdan` (gövdesi okundu): 1856 iadesi ve 1878 geri alınışı Bolgrad'ı ADIYLA sayıyor. Kuruluş 1821 (Rus idaresinde Bulgar göçmen kolonisi): TDV `bolgrad` 302, Encyclopedia of Ukraine sayfası BULUNAMADI — yıl genel akademik/coğrafî bilgi, DOĞRULANMADI; `kur:` alanı bu yüzden yuvarlak (1821-01-01). Koordinat: coğrafî bilgi." },

// ───── H-0005 · Kola yarımadasının içi ─────
{ ad:"Lovozero (Luyavr)", tur:"sehir", lat:68.005, lon:35.015, g:0, k:4,
  s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},{f:"1478-01-15",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}],
  d:[],
  kaynak:"bulunamadı — TDV bu coğrafyayı kapsamıyor. Sami (Lapon) pogostu; ilk anılışı XVI. yüzyıl (1574 Loyyavrsiyt / 1608 vakayinâme) — genel akademik/coğrafî bilgi. Sahiplik zinciri Kola'nın (yerlesimler_ek8.js) zinciriyle birebir: yarımadanın içi Kola uyezdinin parçası. Koordinat: coğrafî bilgi. Amaç: H-0005 görselindeki tavan boşluğunu doldurmak (kutuda 0 nokta ölçüldü)." },

{ ad:"Varzuga", tur:"sehir", lat:66.397, lon:36.620, g:0, k:4,
  s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},{f:"1478-01-15",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}],
  d:[],
  kaynak:"bulunamadı — TDV bu coğrafyayı kapsamıyor. Terskiy kıyısının en eski Rus (Novgorod) yerleşimi, ilk anılışı 1466 — genel akademik/coğrafî bilgi. Zincir Kola'nın aynısı. Koordinat: coğrafî bilgi." },

// ───── H-0007 · Lublin — Volhinya — Polesye ─────
// Kongre Lehistanı parçası (1795 Avusturya · 1809 Varşova Dukalığı · 1815 Rusya · 1918 Polonya)
{ ad:"Lublin", tur:"sehir", lat:51.2465, lon:22.5684, g:1, k:3,
  // 🔴 12 Eylül 2026, KITA 2 — `lehistan` SPLIT (PAKET-VERI-DUZELTME-A-0911.json).
  s:[{f:"1281-01-01",t:"1569-07-01",d:"polonya-erken"},{f:"1569-07-01",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1809-10-14",d:"avusturya"},{f:"1809-10-14",t:"1815-06-09",d:"varsova-dukaligi"},{f:"1815-06-09",t:"1917-03-15",d:"kongre-polonyasi"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-11-11",d:"sovyet-rusya"},{f:"1918-11-11",t:"1923-10-29",d:"polonya"}],
  d:[],
  kaynak:"TDV `lehistan` gövdesi çekilemedi (§4 ④ boilerplate), `lublin` 302. Dayanak: Norman Davies, God's Playground: A History of Poland (Oxford UP) — üçüncü taksim 24 Ekim 1795 (Batı Galiçya, Avusturya), Schönbrunn 14 Ekim 1809 (Varşova Dukalığı'na), Viyana Nihaî Senedi 9 Haziran 1815 (Kongre Lehistanı, Rusya). Koordinat: kronoloji_lehistan.js'teki eksik_nokta kaydıyla aynı. 1917-1918 kuyruğu Varşova kaydının deseni." },

{ ad:"Chełm (Kholm)", tur:"sehir", lat:51.1431, lon:23.4716, g:0, k:4, m:"Lublin",
  // 🔴 12 Eylül 2026, KITA 2 — `lehistan` SPLIT (PAKET-VERI-DUZELTME-A-0911.json).
  s:[{f:"1281-01-01",t:"1569-07-01",d:"polonya-erken"},{f:"1569-07-01",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1809-10-14",d:"avusturya"},{f:"1809-10-14",t:"1815-06-09",d:"varsova-dukaligi"},{f:"1815-06-09",t:"1915-08-01",d:"kongre-polonyasi",kaynak:"KASA-POLONYA-1005 · AY DÜZEYİ (Ağustos 1915; gün kaynaklanmadı) — Chełmska Biblioteka Publiczna monografisi"},{f:"1915-08-01",t:"1918-11-11",d:"avusturya",kaynak:"KASA-POLONYA-1005 · AY DÜZEYİ (Ağustos 1915; gün kaynaklanmadı) — Chełmska Biblioteka Publiczna monografisi"},{f:"1918-11-11",t:"1923-10-29",d:"polonya"}],
  d:[],
  kaynak:"Lublin kaydıyla aynı dayanak (N. Davies, God's Playground); 1281-1340 Halic-Volhinya dönemi külliyatın deseni gereği (Lvov kaydı gibi) `lehistan` altında sadeleştirildi. Koordinat: coğrafî bilgi." },

{ ad:"Zamość", tur:"kale", lat:50.7178, lon:23.2478, g:0, k:4, m:"Lublin", kur:"1580-04-10",
  s:[{f:"1580-04-10",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1809-10-14",d:"avusturya"},{f:"1809-10-14",t:"1815-06-09",d:"varsova-dukaligi"},{f:"1815-06-09",t:"1915-07-01",d:"kongre-polonyasi",kaynak:"KASA-POLONYA-1005 · Stankiewicz, Archiwariusz Zamojski XIX (2021) — Almanlar 1 Temmuz 1915; Avusturya Eylül 1915 (AY DÜZEYİ)"},{f:"1915-07-01",t:"1915-09-01",d:"almanya",kaynak:"KASA-POLONYA-1005 · Stankiewicz, Archiwariusz Zamojski XIX (2021) — Almanlar 1 Temmuz 1915; Avusturya Eylül 1915 (AY DÜZEYİ)"},{f:"1915-09-01",t:"1918-11-11",d:"avusturya",kaynak:"KASA-POLONYA-1005 · Stankiewicz, Archiwariusz Zamojski XIX (2021) — Almanlar 1 Temmuz 1915; Avusturya Eylül 1915 (AY DÜZEYİ)"},{f:"1918-11-11",t:"1923-10-29",d:"polonya"}],
  d:[],
  kaynak:"Kuruluş 10 Nisan 1580 ve koordinat: kronoloji_lehistan.js'teki iki eksik_nokta kaydı (N. Davies, God's Playground). Taksim/1809/1815 günleri Lublin kaydıyla aynı dayanak." },

// Prusya payı → Tilsit'le Rusya (1807)
{ ad:"Białystok", tur:"sehir", lat:53.1325, lon:23.1688, g:0, k:4,
  s:[{f:"1281-01-01",t:"1569-07-01",d:"litvanya-buyuk-dukalik"},{f:"1569-07-01",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1807-07-09",d:"prusya"},{f:"1807-07-09",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-11-11",d:"sovyet-rusya"},{f:"1918-11-11",t:"1923-10-29",d:"polonya"}],
  d:[],
  kaynak:"N. Davies, God's Playground: üçüncü taksimde Prusya'ya (Yeni Doğu Prusya), Tilsit (9 Temmuz 1807 — kronoloji_almanya.js'te maddeli) ile Rusya'ya (Belostok oblastı). Prusya külliyatta Varşova kaydının deseniyle `almanya` kimliğinde. 1918-11-11 Polonya günü Varşova'nın deseni (fiilî Polonya girişi Şubat 1919 — ay farkı bilinçli, külliyat günü tercih edildi). Koordinat: coğrafî bilgi." },

// Litvanya Büyük Dukalığı / Volhinya payı → 1795 Rusya → Riga 1921 Polonya
{ ad:"Brest-Litovsk", tur:"kale", lat:52.0975, lon:23.6877, g:1, k:3,
  s:[{f:"1281-01-01",t:"1569-07-01",d:"litvanya-buyuk-dukalik"},{f:"1569-07-01",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1921-03-18",d:"sovyet-rusya"},{f:"1921-03-18",t:"1923-10-29",d:"polonya"}],
  d:[],
  kaynak:"N. Davies, God's Playground: üçüncü taksim (24 Ekim 1795) ile Rusya; Riga Antlaşması (18 Mart 1921) ile Polonya. TDV `brest` 302. 1918 Brest-Litovsk Antlaşması'nın Alman işgali (1915-1918) `isg:` olarak YAZILMADI — bu partinin kapsamı dışı, kayda geçiyor. Koordinat: coğrafî bilgi. Ad `Brest-Litovsk` seçildi çünkü külliyatta Fransa'daki `Brest` var (ad çakışması girdi.py'de HATA)." },

{ ad:"Pinsk", tur:"sehir", lat:52.1150, lon:26.1030, g:0, k:4,
  s:[{f:"1281-01-01",t:"1569-07-01",d:"litvanya-buyuk-dukalik"},{f:"1569-07-01",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1921-03-18",d:"sovyet-rusya"},{f:"1921-03-18",t:"1923-10-29",d:"polonya"}],
  d:[],
  kaynak:"Brest-Litovsk kaydıyla aynı dayanak (N. Davies): Polesye 1795 Rusya, 1921 Riga ile Polonya. Koordinat: coğrafî bilgi." },

{ ad:"Grodno", tur:"sehir", lat:53.6778, lon:23.8297, g:0, k:3,
  s:[{f:"1281-01-01",t:"1569-07-01",d:"litvanya-buyuk-dukalik"},{f:"1569-07-01",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1921-03-18",d:"sovyet-rusya"},{f:"1921-03-18",t:"1923-10-29",d:"polonya"}],
  d:[],
  kaynak:"N. Davies, God's Playground: 1795 üçüncü taksimde Rusya (son Seym Grodno'da toplandı), 1921 Riga ile Polonya. Koordinat: coğrafî bilgi." },

{ ad:"Kovel", tur:"sehir", lat:51.2153, lon:24.7086, g:0, k:4, m:"Lutsk",
  s:[{f:"1281-01-01",t:"1569-07-01",d:"litvanya-buyuk-dukalik"},{f:"1569-07-01",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1921-03-18",d:"sovyet-rusya"},{f:"1921-03-18",t:"1923-10-29",d:"polonya"}],
  d:[],
  kaynak:"Volhinya: N. Davies, God's Playground — 1569 Lublin Birliği'yle Taç'a, 1795 Rusya, 1921 Riga ile Polonya. 1281-1340 Halic-Volhinya dönemi külliyat deseni gereği `lehistan` altında sadeleştirildi (Lvov kaydı gibi). Koordinat: coğrafî bilgi." },

{ ad:"Lutsk (Łuck)", tur:"kale", lat:50.7472, lon:25.3254, g:1, k:3,
  s:[{f:"1281-01-01",t:"1569-07-01",d:"litvanya-buyuk-dukalik"},{f:"1569-07-01",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1921-03-18",d:"sovyet-rusya"},{f:"1921-03-18",t:"1923-10-29",d:"polonya"}],
  d:[],
  kaynak:"Kovel kaydıyla aynı dayanak (Volhinya voyvodalığının merkezi). Koordinat: coğrafî bilgi." },

{ ad:"Volodymyr-Volynskyi (Włodzimierz)", tur:"sehir", lat:50.8480, lon:24.3226, g:0, k:4, m:"Lutsk",
  s:[{f:"1281-01-01",t:"1569-07-01",d:"litvanya-buyuk-dukalik"},{f:"1569-07-01",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1921-03-18",d:"sovyet-rusya"},{f:"1921-03-18",t:"1923-10-29",d:"polonya"}],
  d:[],
  kaynak:"Kovel kaydıyla aynı dayanak. Koordinat: coğrafî bilgi." },

{ ad:"Rivne (Równe)", tur:"sehir", lat:50.6199, lon:26.2516, g:0, k:4, m:"Lutsk",
  s:[{f:"1281-01-01",t:"1569-07-01",d:"litvanya-buyuk-dukalik"},{f:"1569-07-01",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1921-03-18",d:"sovyet-rusya"},{f:"1921-03-18",t:"1923-10-29",d:"polonya"}],
  d:[],
  kaynak:"Kovel kaydıyla aynı dayanak. Koordinat: coğrafî bilgi." }

];

;
/* ==== data/yerlesimler_anadolu_0914.js ==== */
// =====================================================================
// P05-ANADOLU — DÖRT YENİ NOKTA (14 Eylül 2026 · DALGA SINIF2 · 1.MURAT sevki)
// Rapor: denetim/P05-ANADOLU-0914.md · öneriler: denetim/YAMA-ANADOLU-0914.json
//
// AD ALANI (§7): data/yerlesimler_anadolu_0914.js → window.YERLESIMLER_ANADOLU_0914
// 🔴 arac/girdi.py GIRDI_DOSYALARI'na BAĞLI DEĞİL — Oturum 0 ekler (D099).
//    Bağlanmadan motor da denetim de bu dosyayı GÖRMEZ.
//
// NİÇİN (§2 NOKTASIZLIK — dört kalem de aynı kökten):
//   0016/H-0002 · 0017/H-0001 · 0030/H-0018  Kayseri–Elbistan arası "üçgen/kama":
//        Kayseri ile Elbistan arasında ~150 km'de nokta YOK → Zamantı (Pınarbaşı)
//   0030/H-0004  Ordu peteğinin sivri ucu: Ordu ile iç kesim (Niksar ·
//        Şebinkarahisar) arasında nokta YOK → Mesudiye (Milas) · Gölköy (Habsamana)
//   0033/H-0018  Yavuz'un 1514 dönüşünde teslim alınan Bayburt'un noktası YOK → Bayburt
//
// ÖN ARAMA (§11 D002/D066 · denetim/ARAC-NORMAL-0903.py norm() ile, 80 girdi
// dosyası / 3818 nokta): dördünün de ad eşleşmesi YOK ("milas" yalnız Muğla
// Milas'ı buldu, 932 km — bu yüzden ad "Mesudiye (Milas)"). 3 km içinde nokta
// YOK; en yakınlar: Bayburt→Aşkale 54,5 km · Zamantı→Kayseri 79 km (castle
// koordinatıyla ~74 km) · Mesudiye→Ordu 57,4 km · Gölköy→Ordu 37,4 km.
//
// KONUM: Bayburt · Mesudiye · Gölköy bugünkü şehir/ilçe merkezi (tarihî kale yeri
// ÖLÇÜLMEDİ). Zamantı: Kültür Envanteri "Zamantı Kalesi — Pınarbaşı'nın
// Pazarören kasabasına bağlı Melikgazi köyünde" 38.733147 / 36.222836 (konum
// için; sahiplik dayanağı DEĞİL).
// =====================================================================

window.YERLESIMLER_ANADOLU_0914 = [

{ ad:"Bayburt", tur:"kale", lat:40.2552, lon:40.2249, g:1, k:3,
  neden:"0033/H-0018 · Yavuz'un Tebriz seferi dönüşünde teslim alınan kalelerden Bayburt'un atlasta noktası YOKTU (ölçüldü: 80 km içinde yalnız Aşkale 54,5 · Kelkit 68,3). Nokta yokken bölge Aşkale/Kelkit peteklerine emiliyordu (§2).",
  not:"ZİNCİR VE HASSASİYETİ: bütün iç kırılmalar YIL hassasiyetindedir (YYYY-01-01) — tek gün hassasiyetli uç 1514-10-23. 🔴 KODLANMAYAN ARALAR (kaynak var, yıl yok): ① Eretna devrinde Erzincan emirlerinin 'zaman zaman' zaptı ve 1362'de Şebinkarahisar hâkimi Pîr Hüseyin'in alışı (TDV akkoyunlular) eretna içinde bırakıldı — o emirler Eretna emîri sıfatındaydı ('Eretna emîrlerinden Mutahharten', TDV erzincan), ayrı künyeleri yok. ② Kadı Burhâneddin'in Akkoyunlu Ahmed Bey'e 'Erzincan'dan Bayburt'a kadar' dirlik vermesi (1389 sonrası, yıl yok) KODLANMADI. ③ Cihan Şah devrinde Bayburt'un Karakoyunlu idaresinde oluşu (bitişi 1462, başı yıl yok; TDV akkoyunlular) KODLANMADI — 1422-1462 arasının bir kısmı akkoyunlu diye FAZLA gösteriliyor, bu bilinen borçtur. ④ 1878 ve 1916 Rus işgalleri (TDV bayburt, gün yok) `isg:` olarak YAZILMADI (Değişmez 2i tavanı 3).",
  kaynak:"TDV `bayburt` (200, gövde okundu): 'Son İlhanlı Hükümdarı Ebû Said … ölümünden sonra (1335) Bayburt Eretnaoğulları'nın eline geçti' · '… uzun süre Akkoyunlular'ın elinde kalan şehir ve yöresi 1501'de Safevîler tarafından alındı' · 'Mustafa Bey ile … Bıyıklı Mehmed Bey … Bayburt'u aldılar (Ekim 1514)'. TDV `akkoyunlular` (200): '(1378) Erzincan ve Bayburt Eretna emîrlerinden Mutahharten'in eline geçti'. TDV `erzincan` (200): 'Mutahharten'den sonra Erzincan 1410 yılında Karakoyunlu hâkimiyetine girdi' · '(1422) Karayülük Osman tarafından alınarak Akkoyunlu topraklarına katıldı' · 'Erzincan, Bayburt ile birlikte 23 Ekim 1514'te Bıyıklı Mehmed Bey'e (Paşa) beylerbeyilik olarak verilmişti'. GÜN/YIL DEVRALMALARI (§4 şartlı komşu/pencere): 1379 = mutahharten künyesinin başı (kaynak 1378 diyor; künye penceresi dışına düşmemek için künye günü devralındı, künye günü de kaynaksız) · 1410 ve 1422 = TDV erzincan yılları, Bayburt için 'gün komşudan: Erzincan · TDV erzincan' (aynı süreç: TDV bayburt Kara Yûsuf zaptetti … az sonra Karayülük yeniden ele geçirdi) · 1501-07-01 = safevi künyesinin başı (kaynak '1501' diyor; 1501-01-01 künyeden önceye düşerdi, künye günü kaynaksız) · 1514-10-23 = TDV erzincan'daki beylerbeyilik tevcihinin günü: Bayburt 'Ekim 1514'te alındı ve bu gün Bıyıklı'ya verildi ⇒ bu gün en geç Osmanlı elindedir (ÜST SINIR, alınış günü değil).",
  s:[{f:"1281-01-01",t:"1335-01-01",d:"ilhanli"},
     {f:"1335-01-01",t:"1378-01-01",d:"eretna"},
     {f:"1378-01-01",t:"1410-01-01",d:"mutahharten",kaynak:"TDV akkoyunlular: 'Onun da ölümü üzerine (1378), Erzincan ve Bayburt Eretna emîrlerinden Mutahharten’in eline geçti' — YIL · KRONO-2S-3 19 Eyl 2026"},
     {f:"1410-01-01",t:"1422-01-01",d:"karakoyunlu"},
     {f:"1422-01-01",t:"1501-07-01",d:"akkoyunlu"},
     {f:"1501-07-01",t:"1514-10-23",d:"safevi"},
     {f:"1916-07-16",t:"1917-03-15",d:"rusya",kaynak:"Çaykıran 2021 · Sarı (TÜBA, Millî Mücadele'nin Yerel Tarihi 1918-1923 c.9 böl.7 Bayburt): Rus işgali 16 Temmuz 1916; Selvi (aynı cilt böl.6) '17 Temmuz' — azınlık · NOKTA-KAFKAS-0077 §6 · UYGULA-YERLESIM-0930"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-02-19",d:"transkafkasya",kaynak:"Sarı (TÜBA c.9 böl.7 Bayburt): Bayburt'un geri alınışı 19 Şubat 1918 · NOKTA-KAFKAS-0077 §6 · UYGULA-YERLESIM-0930"},
     {f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1514-10-23",t:"1916-07-16"},{f:"1918-02-19",t:"1920-04-23"}] },

{ ad:"Zamantı (Pınarbaşı)", tur:"kale", lat:38.7331, lon:36.2228, g:0, k:4,
  neden:"0016/H-0002 · 0017/H-0001 · 0030/H-0018 · Kayseri–Elbistan arasındaki keskin 'üçgen' (Emre'nin görselleri: 1335-01-01 · 1337-09-09 · 1392-01-01, kutu 38,19-38,97K / 36,17-36,64D). ÖLÇÜLDÜ: kutuda 0 nokta; en yakınlar Kayseri 79 km · Elbistan 90,5 km · Darende 98,3 km — iki komşu petek boşluğa KAMA gibi açılıyordu (§2). Bu nokta üçgenin tam içinde.",
  not:"🔴 KODLANMAYAN: ① 1344-45'te Tohma havzasının Dulkadir'e geçip 1350'lerde Eretna'ya dönmesi — Kaya bunu TOHMA havzası (Darende · Gürün) için söylüyor, Zamantı için değil; yazılmadı. ② 1381 sonrası Kadı Burhâneddin devrinin Zamantı'ya etkisi: Kaya 'Tohma havzası 1381'e kadar Dulkadirli'lerin elinde kaldı' diyor, Zamantı'yı anmıyor — ÖLÇÜLMEDİ, dulkadir kesintisiz yazıldı. ③ 1435-37 Karaman geri alışı TDV'ye göre Kayseri · Ürgüp · Karacahisar · Develi · Uçhisar'ı kapsıyor, Zamantı listede YOK ⇒ kodlanmadı. ④ 1472'de Şehsuvar Bey'in 'sığındığı Zamantı Kalesi' (TDV) hâlâ Dulkadir elindedir.",
  kaynak:"Abdullah KAYA, 'Dulkadirli Beyliği'nin Eratnalılar ile Münasebetleri', Mustafa Kemal Üniv. Sosyal Bilimler Enst. Dergisi 11(25), 2014, s. 81-97 (pypdf ile okundu): s.9 '1339 yılında … Emîr Eratna, çevre illerde sınırlarını genişleterek Tokat, Kayseri ve Samsun yörelerini kendisine bağladı' · s.10 'Eratnalılar'ın elindeki Zamantı (Pınarbaşı), Gürün, Darende, Divriği yaklaşık on yıl sonra tekrar Dulkadirliler'in hâkimiyetine girdi' (1352'den on yıl) · s.12 'Dulkadirli Halil Bey'de sınırlarını Zamantı'ya kadar genişletti (1360)'. TDV `dulkadirogullari` (200, gövde okundu): '1360'ta … Halil Bey de ülkesinin sınırlarını Zamantı'ya kadar genişletti' · 'Osmanlı ordusunu Göksun ile Andırın arasında Ördekli mevkiinde karşılayan Alâüddevle yenildi ve öldürüldü (13 Haziran 1515)'. 1281-1339 ilhanli: Kaya 2014 özeti ve TDV `elbistan` ('İlhanlı idaresinin sarsılması sonucu 1337') — bölge İlhanlı idaresindeydi; Zamantı ADIYLA anılmıyor (bölge hükmü, nokta hükmü DEĞİL). Konum: Kültür Envanteri (kulturenvanteri.com/yer/zamanti-kalesi) — yalnız konum.",
  s:[{f:"1281-01-01",t:"1339-01-01",d:"ilhanli"},
     {f:"1339-01-01",t:"1360-01-01",d:"eretna"},
     {f:"1360-01-01",t:"1522-01-01",d:"dulkadir"},
     {f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1522-01-01",t:"1920-04-23",y:"ilhak",kesinlik:{f:"yil"},kaynak:"TDV dulkadirogullari (200, gövde okundu): 'Ferhad Paşa İran'a sefer bahanesiyle onu Tokat'a davet etti ve Artukova'da çocuklarıyla birlikte katlettirdi (1522). Ali Bey'in öldürülmesinden sonra Dulkadırlı ülkesi Osmanlı topraklarına katılarak Maraş merkez olmak üzere bir eyalet haline getirildi.' 1515-06-13 Turnadağ sonrası İLHAK DEĞİL TÂBİYETTİR: 'Alâüddevle Bey'den sonra Dulkadıroğulları Beyliği'nin başına Yavuz Sultan Selim tarafından Şehsuvaroğlu Ali Bey getirildi.' ⚠️ ÇELİŞKİ: TDV dulkadir-eyaleti aynı olaya 1521 der ve beylerbeyiliğin hangi tarihte teşkil edildiğinin 'kesin olarak bilinmediğini' yazar ⇒ GÜN YOK, yıl hassasiyeti (D210). — TARIH-SUPHE-0920"}], v:[{f:"1515-06-13",t:"1522-01-01",k:"Osmanlı'ya tâbi Dulkadır beyliği — Şehsuvaroğlu Ali Bey (TDV dulkadirogullari)"}] },

{ ad:"Mesudiye (Milas)", tur:"kale", lat:40.4633, lon:37.7728, g:0, k:4,
  neden:"0030/H-0004 · 'Ordu peteğinin sivri ucu' (Emre görseli 1335-01-01, 40,19-41,22K / 37,04-38,26D). ÖLÇÜLDÜ (1340 kesiti): Ordu ile iç kesim arasında (40,3-40,9K / 37,2-38,4D) 0 nokta; Ordu'nun peteği Canik dağlarına doğru serbestçe uzuyordu (§2). Milas, TDV'nin Hacıemîroğulları vilâyetini adlandırdığı iki kaleden biri ('vilâyet-i Canik-i Bayramlu maa İskefsir ve Milas').",
  not:"ZİNCİR KOMŞUDAN (§4 şartlı komşu): Ordu (Bayramlı) kaydının 1350 · 1398-06-01 · 1402-07-28 · 1427-06-01 kırılmaları. ⚠️ Ordu'nun günleri kısmen KAYNAKSIZ: TDV '1350 yıllarında' (yıl) · '800 (1398) baharında' (mevsim; 06-01 ay kodudur) · '1427'de ilhak edildi' (yıl; 06-01 ay kodudur). Günler yeni kırılma üretmemek için DEVRALINDI ve kaynaksız oldukları burada BİLDİRİLİR. 🔴 1281-1350 trabzon-rum bir ÇIKARIMDIR: TDV kalenin fetihten önce Rum savunmasında olduğunu söyler ('fetih sırasında savunmada kalan ve sonradan teslim olanlar'), hangi devlete bağlı olduğunu ADIYLA söylemez; Ordu kaydıyla aynı kimlik alındı. Fethin YILI Milas için ayrıca bilinmiyor (TDV bölge için '1270-1380 sürecinde').",
  kaynak:"TDV `ordu--sehir` (200, gövde okundu): '… İskefsir (Reşadiye), Milas (Mesudiye), Habsamana (Gölköy), Bolaman, Vona ve Öksün gibi kalelerde fetih sırasında savunmada kalan ve sonradan teslim olanlardan meydana geliyordu' · 'oğlu Hacı Emîr 1350 yıllarında beyliği genişletti' · 'Bayezid 800 (1398) baharında … Ordu yöresi emîri Süleyman da ona tâbi oldu' · 'Hacıemîroğulları Beyliği 1427'de Osmanlılar tarafından ilhak edildi' · '859 (1455) tarihli Tahrir Defteri'nde … vilâyet-i Canik-i Bayramlu maa İskefsir ve Milas' [TDV: ordu--sehir] · '1455'te … 360'ı Milas … kalelerinde … hıristiyan-Rum aile'. Dar slug `mesudiye` 302 ÖLÜ (§4 taneciklik; kapsayıcı YER maddesi kullanıldı).",
  s:[{f:"1281-01-01",t:"1350-01-01",d:"trabzon-rum"},
     {f:"1350-01-01",t:"1427-06-01",d:"haciemir"},
     {f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1427-06-01",t:"1920-04-23"}],
  v:[{f:"1398-06-01",t:"1402-07-28",k:"Hacıemîroğulları Beyliği (Osmanlı tâbii)",statu:"vassal",kid:"haciemir"}] },

{ ad:"Gölköy (Habsamana)", tur:"kale", lat:40.6878, lon:37.6178, g:0, k:4,
  neden:"0030/H-0004 · Ordu peteğinin sivri ucunun ikinci ayağı: Ordu'nun 37 km güney-güneybatısında, Ordu ile Niksar (57 km) arasındaki boşlukta. Habsamana TDV'de Hacıemîroğulları vilâyetinin Rum kalelerinden biri ve 1455'te ayrı nahiye.",
  not:"ZİNCİR KOMŞUDAN — Mesudiye (Milas) kaydının notu AYNEN geçerli (Ordu'nun günleri kısmen kaynaksız · 1281-1350 trabzon-rum çıkarım · fetih yılı bilinmiyor).",
  kaynak:"TDV `ordu--sehir` (200, gövde okundu): 'Milas (Mesudiye), Habsamana (Gölköy), Bolaman, Vona ve Öksün gibi kalelerde fetih sırasında savunmada kalan ve sonradan teslim olanlar' · '(Piraziz) Habsamana kalelerinde … hıristiyan-Rum aile' (1455) · 'Nahiyeler … İskefsir, Milas ve Habsamana' · '1427'de … ilhak edildi'. Dar slug `golkoy`/`habsamana` madde yok (arama: 'Habsamana' yalnız `ordu--sehir`de, 1 eşleşme).",
  s:[{f:"1281-01-01",t:"1350-01-01",d:"trabzon-rum"},
     {f:"1350-01-01",t:"1427-06-01",d:"haciemir"},
     {f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1427-06-01",t:"1920-04-23"}],
  v:[{f:"1398-06-01",t:"1402-07-28",k:"Hacıemîroğulları Beyliği (Osmanlı tâbii)",statu:"vassal",kid:"haciemir"}] },

{ ad:"Göksun", tur:"kale", lat:38.0210, lon:36.4973, g:0, k:4,
  neden:"0017/H-0001 · 0016/H-0002 · Kayseri–Elbistan–Maraş arasındaki kama. ÖLÇÜLDÜ (1340-01-01, kutu 37,9-38,4K / 36,2-37,0D): en büyük boşluk 80,2 km (38,0K 36,2D, en yakın Maraş); bu noktayla 45,7 km. Geniş şikâyet kutusunda (37,78-39,23K / 35,29-37,56D, 1337-09-09) en büyük boşluk 100,6 → 82,6 km.",
  not:"ZİNCİR: 1281-1337 İLHANLI ve 1337 günü KOMŞUDAN (§4 şartlı): Elbistan için TDV `elbistan` 'Anadolu'daki Moğol hâkimiyeti' ve 'İlhanlı idaresinin sarsılması sonucu 1337' diyor; Göksun için ayrı gün/yıl YOK; Göksun Elbistan'a 64 km, aynı süreç (Dulkadir beyliğinin kuruluşu). Gün komşudan: Elbistan · TDV elbistan (yıl hassasiyeti, 1337-01-01). 🔴 KODLANMAYAN: Elbistan'ın 1381-1384 Memlük arası TDV'de yalnız 'şehir' için söyleniyor — Göksun'a TAŞINMADI. 1515-06-13 GÜNÜ DOĞRUDAN KAYNAKTAN: Ördekli savaşı 'Göksun ile Andırın arasında'.",
  kaynak:"TDV `dulkadirogullari` (200, gövde okundu): 'Osmanlı ordusunu Göksun ile Andırın arasında Ördekli mevkiinde karşılayan Alâüddevle yenildi ve öldürüldü (13 Haziran 1515)' · 'Memlük kuvvetlerini Göksun'da karşılayan Sevli Bey galip gelerek' (Dulkadir sahası içinde savunma). TDV `elbistan` (200, gövde okundu): 'İlhanlı idaresinin sarsılması sonucu 1337 yılında Taraklı oymağının reisi Halil Bey yöreyi ele geçirdi'. Koordinat: GeoNames 314188 (Göksun ilçe merkezi, tarihî kale yeri ÖLÇÜLMEDİ). Dar slug `goksun` 302 ÖLÜ.",
  s:[{f:"1281-01-01",t:"1337-01-01",d:"ilhanli"},
     {f:"1337-01-01",t:"1522-01-01",d:"dulkadir"},
     {f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1522-01-01",t:"1920-04-23",y:"ilhak",kesinlik:{f:"yil"},kaynak:"TDV dulkadirogullari (200, gövde okundu): 'Ferhad Paşa İran'a sefer bahanesiyle onu Tokat'a davet etti ve Artukova'da çocuklarıyla birlikte katlettirdi (1522). Ali Bey'in öldürülmesinden sonra Dulkadırlı ülkesi Osmanlı topraklarına katılarak Maraş merkez olmak üzere bir eyalet haline getirildi.' 1515-06-13 Turnadağ sonrası İLHAK DEĞİL TÂBİYETTİR: 'Alâüddevle Bey'den sonra Dulkadıroğulları Beyliği'nin başına Yavuz Sultan Selim tarafından Şehsuvaroğlu Ali Bey getirildi.' ⚠️ ÇELİŞKİ: TDV dulkadir-eyaleti aynı olaya 1521 der ve beylerbeyiliğin hangi tarihte teşkil edildiğinin 'kesin olarak bilinmediğini' yazar ⇒ GÜN YOK, yıl hassasiyeti (D210). — TARIH-SUPHE-0920"}], v:[{f:"1515-06-13",t:"1522-01-01",k:"Osmanlı'ya tâbi Dulkadır beyliği — Şehsuvaroğlu Ali Bey (TDV dulkadirogullari)"}] },

{ ad:"Gürün", tur:"sehir", lat:38.7223, lon:37.2710, g:0, k:4,
  neden:"0017/H-0001 notunun adıyla istediği dört noktadan biri. Darende–Zamantı–Sivas arasında (38,3-39,2K / 36,2-37,6D, 1340) en büyük boşluk 72,5 → 66,3 km.",
  not:"ZİNCİR KOMŞUDAN (§4 şartlı): Darende (yerlesimler_ok110.js). Şart ③ kaynağın KENDİSİNDEN: Kaya 'Gürün, Darende ile birlikte aynı devlet yahut beyliklerin sınırları içinde yer almıştı'. Gün komşudan: Darende · TDV dulkadirogullari Dârende: 1338'de işgal edildi (yıl). ⚠️ Darende'nin 1335-01-01'i kendi kaydında 'komşu ankrajdan türetildi' diye BEYANLI — bu tek gün kaynaksız devralındı, bildirilir. 🔴 KODLANMAYAN (Darende'de de yok): Kaya'ya göre Tohma havzası 1344-45 Dulkadir, '1350'lerden sonra' Eratna geri aldı, 'yaklaşık on yıl sonra' tekrar Dulkadir; 1381 sonrası ve 1404 Darende'nin 'tekrar zaptı' (Sümer) — yıl/sahip belirsiz, yazılmadı. Kaya: Gürün 'bu dönemlerde bir köy konumundaydı'.",
  kaynak:"Abdullah KAYA, 'Dulkadirli Beyliği'nin Eratnalılar ile Münasebetleri', MKÜ SBE Dergisi 11(25), 2014, s.81-97 (dergipark article-file/183340, pypdf ile okundu): s.89 'Gürün, Darende ile birlikte aynı devlet yahut beyliklerin sınırları içinde' · s.87 'Dârende, Gemerek ve Gürün bu akınlar sonucu Dulkadirliler'in eline geçerken'. TDV `dulkadirogullari`: beylik sahası '… Gemerek ve Gürün'den Hatay'a bağlı Hassa'ya kadar'. Koordinat GeoNames 313314. Dar slug `gurun` 302 ÖLÜ.",
  s:[{f:"1281-01-01",t:"1335-01-01",d:"ilhanli"},
     {f:"1335-01-01",t:"1338-01-01",d:"eretna"},
     {f:"1338-01-01",t:"1522-01-01",d:"dulkadir"},
     {f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1522-01-01",t:"1920-04-23",y:"ilhak",kesinlik:{f:"yil"},kaynak:"TDV dulkadirogullari (200, gövde okundu): 'Ferhad Paşa İran'a sefer bahanesiyle onu Tokat'a davet etti ve Artukova'da çocuklarıyla birlikte katlettirdi (1522). Ali Bey'in öldürülmesinden sonra Dulkadırlı ülkesi Osmanlı topraklarına katılarak Maraş merkez olmak üzere bir eyalet haline getirildi.' 1515-06-13 Turnadağ sonrası İLHAK DEĞİL TÂBİYETTİR: 'Alâüddevle Bey'den sonra Dulkadıroğulları Beyliği'nin başına Yavuz Sultan Selim tarafından Şehsuvaroğlu Ali Bey getirildi.' ⚠️ ÇELİŞKİ: TDV dulkadir-eyaleti aynı olaya 1521 der ve beylerbeyiliğin hangi tarihte teşkil edildiğinin 'kesin olarak bilinmediğini' yazar ⇒ GÜN YOK, yıl hassasiyeti (D210). — TARIH-SUPHE-0920"}], v:[{f:"1515-06-13",t:"1522-01-01",k:"Osmanlı'ya tâbi Dulkadır beyliği — Şehsuvaroğlu Ali Bey (TDV dulkadirogullari)"}] },

{ ad:"Reşadiye (İskefsir)", tur:"kale", lat:40.3919, lon:37.3375, g:0, k:4,
  neden:"0030/H-0004 · Ordu peteğinin sivri ucunun batı-iç ayağı: Niksar (40 km) ile Mesudiye (38 km) arasında. Emre kutusunda en büyük boşluk 51,1 → 38,0 km.",
  not:"ZİNCİR KOMŞUDAN (§4 şartlı) — Ordu (Bayramlı) kaydından, Mesudiye/Gölköy ile AYNI dayanak: İskefsir TDV'de Milas ve Habsamana ile AYNI cümlede, aynı süreçte (Hacıemîroğulları fethi) geçiyor. Gün komşudan: Ordu (Bayramlı) · TDV ordu--sehir. ⚠️ Ordu'nun günleri kısmen kaynaksız: '1350 yıllarında' (yıl) · '800 (1398) baharında' (06-01 ay kodu) · '1427'de ilhak' (06-01 ay kodu) — yeni kırılma üretmemek için DEVRALINDI. 🔴 1281-1350 trabzon-rum bir ÇIKARIMDIR (kale fetih sırasında Rum savunmasındaydı; hangi yıldan beri, bilinmiyor). ⚠️ İskefsir Niksar'a (eretna/taceddin) 40 km — iç kesimde Rum hâkimiyetinin Canik beylikleriyle sınırı ÖLÇÜLMEDİ.",
  kaynak:"TDV `ordu--sehir` (200, gövde okundu): 'İskefsir (Reşadiye), Milas (Mesudiye), Habsamana (Gölköy), Bolaman, Vona ve Öksün gibi kalelerde fetih sırasında savunmada kalan' · 'Hacıemîroğulları Beyliği 1427'de Osmanlılar tarafından ilhak edildi' · '859 (1455) … vilâyet-i Canik-i Bayramlu maa İskefsir ve Milas' [TDV: ordu--sehir] · '954'te (1547) … İskefsir, Bayramlu ve Bazarsuyu kazalarına'. Koordinat GeoNames 740490 (Reşadiye ilçe merkezi; tarihî kale yeri ÖLÇÜLMEDİ).",
  s:[{f:"1281-01-01",t:"1350-01-01",d:"trabzon-rum"},
     {f:"1350-01-01",t:"1427-06-01",d:"haciemir"},
     {f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1427-06-01",t:"1920-04-23"}],
  v:[{f:"1398-06-01",t:"1402-07-28",k:"Hacıemîroğulları Beyliği (Osmanlı tâbii)",statu:"vassal",kid:"haciemir"}] }

];

;
/* ==== data/yerlesimler_ukrayna_0916.js ==== */
// =====================================================================
// H-0095 — BEŞ YENİ NOKTA · SAĞ YAKA UKRAYNA / PODOLYA / VOLHİNYA
// DALGA-0052 · 16 Eylül 2026 · araştıran HARITA-VERI (denetim/YAMA-0052-UKRAYNA.json
// kalem 2-6, rapor denetim/HARITA-VERI-0916.md) · uygulayan UYGULA
//
// AD ALANI (§7): data/yerlesimler_ukrayna_0916.js → window.YERLESIMLER_UKRAYNA_0916
// BAĞLAMA: arac/girdi.py GIRDI_DOSYALARI (UYGULA) + index.html satırı (UI'ye istendi)
//
// NİÇİN (§2 NOKTASIZLIK): Bar ile Meciboj petekleri kuzeye/doğuya, Berdiçev ve
// Jitomir boşluğuna uzuyordu; Bratslav voyvodalığının merkezi Vinnitsa'da ve
// Bar ile Uman arasındaki 150 km'de hiç nokta yoktu.
// KAYNAK: Internet Encyclopedia of Ukraine (CIUS) maddeleri + TDV bucas-antlasmasi;
// koordinatlar GeoNames. Komşu günleri kayıtların kaynak alanında AÇIKÇA yazılı (§4).
// v: 1672-10-18 → 1699-01-26 Bucaş ve Karlofça maddelerine 0 gün (Değişmez 2).
// ⚠️ 1648-1667 Hetmanlık dönemi komşular (Uman, Kiev) gibi lehistan — kimlik yok, borç.
// =====================================================================
window.YERLESIMLER_UKRAYNA_0916 = [
  { ad:"Vinnitsa (Vinnytsia)", tur:"sehir", lat:49.232, lon:28.469, g:0, k:3, kur:"1363-01-01", s:[{f:"1363-01-01",t:"1569-07-01",d:"litvanya-buyuk-dukalik"},{f:"1569-07-01",t:"1672-10-18",d:"lehistan"},{f:"1699-01-26",t:"1793-01-23",d:"lehistan"},{f:"1793-01-23",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], v:[{f:"1672-10-18",t:"1699-01-26",k:"Sağ Yaka Ukrayna (Osmanlı himayesindeki hatmanlık)",statu:"vassal"}], kaynak:"IEU Vinnytsia (CIUS): ilk anılış 1363 Litvanya kalesi; 1672-99 Türk hâkimiyeti; 1793 Rusya. Gün 1672-10-18 = Bucaş (TDV bucas-antlasmasi, 4. madde Ukrayna Kazaklar'a). kur YIL hassasiyetinde." },
  { ad:"Braslav (Bratslav)", tur:"kale", lat:48.823, lon:28.938, g:0, k:3, kur:"1400-01-01", s:[{f:"1400-01-01",t:"1569-07-01",d:"litvanya-buyuk-dukalik"},{f:"1569-07-01",t:"1672-10-18",d:"lehistan"},{f:"1699-01-26",t:"1793-01-23",d:"lehistan"},{f:"1793-01-23",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], v:[{f:"1672-10-18",t:"1699-01-26",k:"Sağ Yaka Ukrayna (Osmanlı himayesindeki hatmanlık)",statu:"vassal"}], kaynak:"IEU Bratslav: 14. yy'da iyi biliniyor (kur 1400 = ALT SINIR, kuruluş yılı değil); 1648-1712 Kazak alay kasabası; Rusya'da Podolya guberniyası. 1793 günü komşudan: Vinnitsa · IEU Vinnytsia (aynı voyvodalık, aynı paylaşım)." },
  { ad:"Kostantinov (Starokostiantyniv)", tur:"kale", lat:49.755, lon:27.212, g:0, k:3, kur:"1571-01-01", s:[{f:"1571-01-01",t:"1793-01-23",d:"lehistan"},{f:"1793-01-23",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"IEU Starokostiantyniv: 1560'larda Ostrozki kurdu, kale kalıntısı 1571 (kur 1571 = ALT SINIR); Volhinya'da; 1793 Rusya." },
  { ad:"Jitomir (Zhytomyr)", tur:"sehir", lat:50.262, lon:28.679, g:0, k:3, s:[{f:"1281-01-01",t:"1320-01-01",d:"altinorda"},{f:"1320-01-01",t:"1569-07-01",d:"litvanya-buyuk-dukalik"},{f:"1569-07-01",t:"1793-01-23",d:"lehistan"},{f:"1793-01-23",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"IEU Zhytomyr: 1240 kroniklerde; 1320 Gediminas Litvanya'ya kattı; 1667 Andruşova ile Lehistan'a iade; 1793 paylaşımda Rusya." },
  { ad:"Berdiçev (Berdychiv)", tur:"sehir", lat:49.894, lon:28.582, g:0, k:3, kur:"1545-01-01", s:[{f:"1545-01-01",t:"1569-07-01",d:"litvanya-buyuk-dukalik"},{f:"1569-07-01",t:"1793-01-23",d:"lehistan"},{f:"1793-01-23",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], kaynak:"IEU Berdychiv: ilk belge 1545; 1569 Litvanya'dan Polonya'ya; 1593 kale. 1793 YILI komşudan: Jitomir · IEU Zhytomyr (aynı Kiev voyvodalığı, 44 km, aynı paylaşım)." }
];

;
/* ==== data/yerlesimler_nokta_afrika_0917.js ==== */
// =====================================================================
// NOKTA-AFRIKA — AFRİKA NOKTASIZLIK ADAYLARINA KAYNAKLI YERLEŞİM (17 Eylül 2026 · D3-AVRUPA-ORTA ·
// 1.MURAT sevki, oturumlar/KOSU13-OTOBUS.md "NOKTA-AFRIKA" satırı)
//
// AD ALANI (§7): data/yerlesimler_nokta_afrika_0917.js → window.YERLESIMLER_NOKTA_AFRIKA_0917
// 🔴 arac/girdi.py GIRDI_DOSYALARI'na BAĞLI DEĞİL — Oturum 0 ekler (D099).
//
// NİÇİN (§2): denetim/NOKTASIZLIK-ADAY-0917.json Afrika kümeleri (kutu 35G-37K · 18B-52D, Arabistan
// hariç = 24 küme; sevkte 27 yazıyordu). Kural: o dönemde orada DEVLET yoksa boşluk doğrudur; varsa
// ve yerleşim kaynakla tarihlenebiliyorsa nokta konur. Küme küme hüküm: denetim/NOKTA-AFRIKA-0917.md.
//
// 🟡 __BOSLUK__ = künyesi OLMAYAN devlet dilimi (Tamba Krallığı) — "kimsenin değildi" DEĞİL; komşu
// künyeye İTMEMEK için (NOKTA-ASYA emsali). Künye açılınca dilim o kimliğe çevrilir.
// 🔴 kur ÜST SINIRDIR: Dingiray 1848'de ZATEN vardı (TDV), kuruluş yılı bulunamadı.
// =====================================================================

window.YERLESIMLER_NOKTA_AFRIKA_0917 = [

{ ad:"Dingiray (Dinguiraye)", tur:"kale", lat:11.296, lon:-10.715, g:0, k:0, kur:"1848-01-01",
  neden:"NOKTASIZLIK-ADAY-0917 k12 kümesi 12,23K/10,95B (13.987 km², komşular Labe · Kita · Kayes) — el-Hâc Ömer'in cihad üssü noktasızdı. En yakın mevcut noktalar: Timbo 143 km · Labe 171 km · Falaba 173 km (3 km içinde nokta yok, ad araması 0).",
  not:"kur ÜST SINIR: TDV 1848'de Ömer'in 'Tamba kralının kontrolündeki Dingiray'a' yerleştiğini yazar; yerin kuruluş yılı bulunamadı. 1848→1852-09 dilimi Tamba Krallığı (künye YOK → __BOSLUK__). 1852-09-01: TDV 'Eylül 1852'de fiilî cihadı başlatma' — ay hassasiyeti, künye `tekrur` f: ile aynı; Tamba'nın düşüş günü BULUNAMADI (TDV yalnız Tamba kralının Ekim 1852 saldırısını ve ardından kuşatmayı anar). 1891-01-01: Suret-Canale — Aguibu 'Nioro'nun düşüşünden sonra, 1891'de' Dingiray'dan Bandiagara'ya aktarıldı, bölge Fransız askerî idaresine girdi; YIL hassasiyeti.",
  kaynak:"TDV el-hac-omer (200, gövde okundu): '…Futa Calon'un doğusunda Tamba kralının kontrolündeki Dingiray'a yerleşti (1848)' · 'Hâkim olduğu devletin sınırları güneydeki Dingiray'dan…' · J. Suret-Canale, 'Guinea in the Colonial System' (Essays on African History), webguine.site: 'after the fall of Nioro, in 1891, he saw himself transferred from the authority of Dinguiraye' · koordinat OSM place=city 11.2964,-10.7149",
  s:[{f:"1848-01-01",t:"1852-09-01",d:"__BOSLUK__"},
     {f:"1852-09-01",t:"1891-01-01",d:"tekrur"},
     {f:"1891-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}] },

];

;
/* ==== data/yerlesimler_nokta_amerika_0917.js ==== */
// =====================================================================
// NOKTA-AMERIKA — noktasız Amerika kümelerine KAYNAKLI yerleşim noktaları
// =====================================================================
// 🔴 ÜRETİLMİŞ — elle düzenleme; üretici denetim/ARAC-NOKTA-AMERIKA-URET-0917.py
// Şartname oturumlar/KOSU13-OTOBUS.md (NOKTA-AMERIKA). Aday listesi
// denetim/NOKTASIZLIK-ADAY-0917.json · sınıflama denetim/NOKTA-AMERIKA-RAPOR-0917.md
// Kural: nokta yalnız o tarihte orada DEVLET İDARESİ varsa; kur = idarenin başladığı gün.
// girdi.py GIRDI_DOSYALARI kaydı 1.MURAT'ta.

window.YERLESIMLER_NOKTA_AMERIKA_0917 = [
{ ad:"Diamantina (Arraial do Tijuco)", tur:"sehir", lat:-18.2413, lon:-43.6031, g:1, k:3, kur:"1734-01-01",
  s:[{f:"1734-01-01",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  d:[],
  kaynak:"IBGE Biblioteca, Diamantina (codmun 3121605), Histórico — 'Em 1734 foi criada a Real Intendência' (yıl). Vila: 'Decreto de 13-10-1831, desmembrado de vila do Sêrro'.",
  neden:"Tijuco arraialinde taç idaresi 1734'te Real Intendência (elmas intendanlığı) kurulmasıyla başlar; Elmas Bölgesi'nin idarî merkezi olduğu için g:1." },
{ ad:"Serro (Vila do Príncipe)", tur:"sehir", lat:-18.6048, lon:-43.3794, g:1, k:3, kur:"1714-01-29",
  s:[{f:"1714-01-29",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  d:[],
  kaynak:"IBGE Biblioteca, Serro (codmun 3167103), Monografia n.613 (1982) — 'recebeu a designação de Vila do Príncipe, a 29 de janeiro de 1714'; kurulum 6 Nisan 1714.",
  neden:"Portekiz tacı 1714'te Vila do Príncipe'yi kurdu (Sabará termosundan ayrılarak); 1720'de Serro Frio komarkasının merkezi oldu, bu yüzden g:1." },
{ ad:"Rio de Contas (Minas do Rio de Contas)", tur:"sehir", lat:-13.5794, lon:-41.8111, g:0, k:3, kur:"1723-11-27",
  s:[{f:"1723-11-27",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  d:[],
  kaynak:"IBGE Biblioteca, Rio de Contas (codmun 2926707) — 'Elevado à categoria de vila ... por carta regia de 27-11-1723'; 'Instalada em 1724'.",
  neden:"Vila Minas do Rio de Contas 1723 kraliyet mektubuyla kuruldu; ilk merkez 12 km aşağıdaki Sítio'daydı, 1745'te bugünkü yere (Creoulos) taşındı." },
{ ad:"Caetité (Vila Nova do Príncipe)", tur:"sehir", lat:-14.0694, lon:-42.4861, g:0, k:3, kur:"1754-01-01",
  s:[{f:"1754-01-01",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  d:[],
  kaynak:"IBGE Biblioteca, Caetité (codmun 2905206) — 'Distrito criado com a denominação de Vila Nova do Príncipe, em 1754' (yıl); vila 'Decreto de 26-02-1810 ... Instalada em 05-04-1810'.",
  neden:"Rio de Contas matrizinden ayrılan freguesia 1754'te kuruldu (resmî kurum); vila 1810." },
{ ad:"Pirenópolis (Meia Ponte)", tur:"sehir", lat:-15.8507, lon:-48.9592, g:0, k:3, kur:"1754-08-10",
  s:[{f:"1754-08-10",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  d:[],
  kaynak:"IBGE Biblioteca, Pirenópolis (codmun 5217302) — 'Distrito criado com a denominação de Meia Ponte, pela Carta Régia de 10-08-1754'.",
  neden:"Kaynağın verdiği ilk resmî kurum 1754 Carta Régia ile kurulan Meia Ponte distrito'sudur; 1727 arraiali bir madenci kampı olarak anlatılıyor." },
{ ad:"Casa Branca", tur:"sehir", lat:-21.7742, lon:-47.0858, g:0, k:3, kur:"1814-10-25",
  s:[{f:"1814-10-25",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  d:[],
  kaynak:"IBGE Biblioteca, Casa Branca (codmun 3510807) — 'Distrito criado ... por Resolução Regia de 15 de março de 1814 e Alvará de 25 de outubro de 1814'.",
  neden:"Estrada Real üstündeki tropeiro konağı 1814'te kraliyet alvarásıyla freguesia/distrito oldu (Mogi Mirim vilası içinde); vila 1841-02-25." },
{ ad:"Caxias do Sul (Colônia de Caxias)", tur:"sehir", lat:-29.1678, lon:-51.1794, g:0, k:3, kur:"1875-01-01",
  s:[{f:"1875-01-01",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  d:[],
  kaynak:"IBGE Biblioteca, Caxias do Sul (codmun 4305108) — 'Em maio de 1875, chegavam a Porto Alegre os primeiros colonos'; hükümet komisyonu lotları demarke ediyordu.",
  neden:"İmparatorluk devletinin kurduğu kolonizasyon yerleşimi: ilk İtalyan kolonlar 1875'te Campo dos Bugres'e yerleştirildi, lotları devlet komisyonu dağıttı." },
{ ad:"Viana (Maranhão)", tur:"sehir", lat:-3.2204, lon:-44.9918, g:0, k:3, kur:"1757-07-08",
  s:[{f:"1757-07-08",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  d:[],
  kaynak:"IBGE Biblioteca, Viana (codmun 2112803) — 'Elevado à categoria de vila com a denominação de Viana em 08-07-1757'; Resolução Régia 18-06-1757.",
  neden:"Cizvit misyonu Maracu (1709) devlet idaresi değildi; yerlilerin serbest bırakılmasından sonra vali 1757'de Viana vilasını kurdu." },
{ ad:"Chaves (Marajó)", tur:"sehir", lat:-0.1644, lon:-49.987, g:0, k:3, kur:"1758-01-01",
  s:[{f:"1758-01-01",t:"1822-09-07",d:"portekiz-brezilyasi"},
     {f:"1822-09-07",t:"1889-11-15",d:"brezilya-imparatorlugu"},
     {f:"1889-11-15",t:"1923-10-29",d:"brezilya-cumhuriyeti"}],
  d:[],
  kaynak:"IBGE Biblioteca, Chaves (codmun 1502509) — 'Elevado à categoria de vila com a denominação de Chaves, em 1758' (yıl).",
  neden:"Kapuçin misyonu olan Aruã aldeiası 1758'de Portekiz vilası yapıldı (Senado da Câmara); öncesi yalnız misyon." },
{ ad:"Oruro (Villa de San Felipe de Austria)", tur:"sehir", lat:-17.9667, lon:-67.1167, g:1, k:3, kur:"1606-01-01",
  s:[{f:"1606-01-01",t:"1825-08-06",d:"ispanyol-peru"},
     {f:"1825-08-06",t:"1923-10-29",d:"bolivya-cumhuriyeti"}],
  d:[],
  kaynak:"Trifonio Delgado Gonzales, Historia del espacio urbano de Oruro (ed. Guillermo Delgado P., 2022, eScholarship/UC), s.1 — 1606 fundacion aktini aktariyor: 'veintinueve dias del mes de Octubre del año de mil seiscientos y seis' (Blanco 1904 nesrinden)",
  neden:"Charcas Audiencia oidoru Manuel de Castro y Padilla, kral adina maden asiento'sunda villa kurdu; ispanyol idaresi kurulusla baslar." },
{ ad:"Cochabamba (Villa de Oropesa)", tur:"sehir", lat:-17.3895, lon:-66.1568, g:1, k:3, kur:"1571-08-15",
  s:[{f:"1571-08-15",t:"1825-08-06",d:"ispanyol-peru"},
     {f:"1825-08-06",t:"1923-10-29",d:"bolivya-cumhuriyeti"}],
  d:[],
  kaynak:"Luis Oporto Ordonez, 'La obra magna de Jose Macedonio Urquidi...', Fuentes (Rev. Biblioteca y Archivo Historico de la Asamblea Legislativa Plurinacional) v.5 n.17, 2011 (revistasbolivianas.umsa.bo) — Cuzco provizyonu 2 Agosto 1571 Osorio'ya 'la fundacion de la Villa de Oropesa, el 15 de agosto de 1571' yetkisi verdi",
  neden:"Vali Francisco de Toledo'nun emriyle Kaptan Geronimo de Osorio villayi kurdu; ispanyol idaresi kurulusla baslar." },
{ ad:"Barinas (Altamira de Cáceres)", tur:"sehir", lat:8.6226, lon:-70.2075, g:1, k:3, kur:"1577-06-30",
  s:[{f:"1577-06-30",t:"1821-06-24",d:"ispanyol-peru"},
     {f:"1821-06-24",t:"1830-01-13",d:"gran-kolombiya"},
     {f:"1830-01-13",t:"1923-10-29",d:"venezuela-cumhuriyeti"}],
  d:[],
  kaynak:"Diccionario de Historia de Venezuela (Fundacion Empresas Polar), 'Barinas' — 'con el nombre de Altamira de Caceres, el 30 de junio de 1577, por el capitan Juan Andres Varela'",
  neden:"La Grita/Espiritu Santo valisi Francisco de Caceres'in talimatiyla Merida'dan gelen seferle Ispanyol sehri kuruldu." },
{ ad:"Guanare", tur:"sehir", lat:9.0418, lon:-69.7421, g:1, k:3, kur:"1591-11-03",
  s:[{f:"1591-11-03",t:"1821-06-24",d:"ispanyol-peru"},
     {f:"1821-06-24",t:"1830-01-13",d:"gran-kolombiya"},
     {f:"1830-01-13",t:"1923-10-29",d:"venezuela-cumhuriyeti"}],
  d:[],
  kaynak:"Diccionario de Historia de Venezuela (Fundacion Empresas Polar), 'Guanare' — 'Para la fundacion de la ciudad, el 3 de noviembre de 1591, Juan Fernandez de Leon escogio...'",
  neden:"Juan Fernandez de Leon Ispanyol sehri olarak kurdu; idare kurulusla baslar." },
{ ad:"Calabozo (Villa de Nuestra Señora de la Candelaria)", tur:"sehir", lat:8.9239, lon:-67.4294, g:0, k:3, kur:"1724-02-01",
  s:[{f:"1724-02-01",t:"1821-06-24",d:"ispanyol-peru"},
     {f:"1821-06-24",t:"1830-01-13",d:"gran-kolombiya"},
     {f:"1830-01-13",t:"1923-10-29",d:"venezuela-cumhuriyeti"}],
  d:[],
  kaynak:"Diccionario de Historia de Venezuela (Fundacion Empresas Polar), 'Calabozo' — 'el 1 de febrero de 1724, fray Salvador de Cadiz levanto una cruz y bendijo el sitio de la villa'",
  neden:"Misyon degil ispanyol villasi: vali 26 Kasim 1723'te 'permiso para erigir una villa de espanoles' verdi, 1726'da arsalari dagitti; 1776'da cabildo." },
{ ad:"San Ignacio Guazú", tur:"sehir", lat:-26.8876, lon:-57.0283, g:0, k:3, kur:"1609-01-01",
  s:[{f:"1609-01-01",t:"1811-05-14",d:"ispanya"},
     {f:"1811-05-14",t:"1923-10-29",d:"paraguay-cumhuriyeti"}],
  d:[],
  kaynak:"Municipalidad de San Ignacio Guazu, 'La Ciudad' (sanignacioguazu.gov.py) — 'el 16 de diciembre de 1609 jesuitas y caciques guaranies salieron de Asuncion'; varista 'se celebra la primera misa que se toma como punto de fundacion'",
  neden:"Guarani kaciklerinin Paraguay valisi Hernandarias'a basvurusu uzerine vali, piskopos ve Cizvitlerle reduccion kuruldu; misyonlar Ispanyol tacina bagli (Paraguay valiligi)." },
{ ad:"Encarnación (Itapúa)", tur:"sehir", lat:-27.3306, lon:-55.8667, g:1, k:3, kur:"1615-03-25",
  s:[{f:"1615-03-25",t:"1811-05-14",d:"ispanya"},
     {f:"1811-05-14",t:"1923-10-29",d:"paraguay-cumhuriyeti"}],
  d:[],
  kaynak:"Municipalidad de Encarnacion, 'Historia de la Ciudad' (encarnacion.gov.py) — 'Fue el 25 de marzo de 1615 cuando Roque Gonzalez de Santa Cruz ... decidio fundar la mision'",
  neden:"Cizvit reduccion'u, Paraguay valiligi (Ispanyol taci) cercevesinde kuruldu; San Ignacio'dan cikan misyon zincirinin parcasi." },
{ ad:"Junín (Fuerte Federación)", tur:"sehir", lat:-34.5856, lon:-60.9589, g:0, k:3, kur:"1827-12-27",
  s:[{f:"1827-12-27",t:"1923-10-29",d:"arjantin-cumhuriyeti"}],
  d:[],
  kaynak:"Archivo Historico de la Provincia de Buenos Aires 'Dr. Ricardo Levene', Fondo Carlos Ibarguren, seri 'Fundacion del Fuerte de la Federacion: origen de la ciudad de Junin, 1827-1828' (ahpbagestion.gba.gob.ar, id199: Rosas'in 29 Kasim 1827 taslagi). Gun: Escribano'nun mektubu 'Fundacion de Junin, Documento 244' — 27 Aralik 1827 (Diario Democracia ve yerel tarih yayinlari)",
  neden:"Buenos Aires hukumetinin sinir hatti karariyla (Rivadavia 27 Eylul 1826 dekreti) Komutan Bernardino Escribano kaleyi kurdu; devlet idaresi askeri kaleyle basladi." },
{ ad:"Río Cuarto (Villa de la Concepción del Río Cuarto)", tur:"sehir", lat:-33.1232, lon:-64.3493, g:0, k:3, kur:"1786-11-11",
  s:[{f:"1786-11-11",t:"1810-05-25",d:"ispanya"},
     {f:"1810-05-25",t:"1923-10-29",d:"arjantin-cumhuriyeti"}],
  d:[],
  kaynak:"Universidad Nacional de Rio Cuarto, haber (unrc.edu.ar nota 37062) — 'fue fundada el 11 de noviembre de 1786 por el Marques Rafael de Sobre Monte'; Concejo Deliberante de Rio Cuarto 'Historia' — 'Villa Real fundada el 11 de noviembre de 1786'",
  neden:"Cordoba del Tucuman vali-intendani Sobremonte sinir kuzeyindeki daginik yerlesikleri resmi villada topladi; 1798'de cabildo kuruldu." },
{ ad:"San Rafael (Fuerte San Rafael del Diamante)", tur:"sehir", lat:-34.6177, lon:-68.3301, g:0, k:3, kur:"1805-04-02",
  s:[{f:"1805-04-02",t:"1810-05-25",d:"ispanya"},
     {f:"1810-05-25",t:"1923-10-29",d:"arjantin-cumhuriyeti"}],
  d:[],
  kaynak:"Universidad de Mendoza, '24 de octubre: Dia de la ciudad de San Rafael Arcangel' (um.edu.ar) — 'el dia 2 de abril de 1805' / 'fundado en la margen norte del rio Diamante por el comandante Miguel Telles Meneses'",
  neden:"Rio de la Plata genel valisi Sobremonte'nin emriyle guney sinirini korumak icin kale kuruldu (Ispanyol yonetiminde kurulan son kale)." },
{ ad:"Treinta y Tres", tur:"sehir", lat:-33.2333, lon:-54.3833, g:1, k:3, kur:"1853-03-10",
  s:[{f:"1853-03-10",t:"1923-10-29",d:"uruguay-cumhuriyeti"}],
  d:[],
  kaynak:"Intendencia de Treinta y Tres / MVOTMA, Directrices Departamentales de Ordenamiento Territorial, Memoria de Informacion (treintaytres.gub.uy), 1.1 Breve historia — 'El 10 de marzo de 1853, el Presidente de la Republica, Don Juan Fco. Giro, decreta la creacion de un Pueblo'",
  neden:"Uruguay cumhurbaskaninin kurulus kanunu/dekretiyle devlet eliyle kuruldu; 1884'te departman merkezi." },
{ ad:"Minas (Villa de la Concepción de las Minas)", tur:"sehir", lat:-34.3759, lon:-55.2377, g:1, k:3, kur:"1783-01-01",
  s:[{f:"1783-01-01",t:"1814-06-20",d:"ispanya"},
     {f:"1814-06-20",t:"1817-01-01",d:"arjantin-cumhuriyeti"},
     {f:"1817-01-01",t:"1822-09-07",d:"portekiz"},
     {f:"1822-09-07",t:"1828-08-27",d:"brezilya-imparatorlugu"},
     {f:"1828-08-27",t:"1923-10-29",d:"uruguay-cumhuriyeti"}],
  d:[],
  kaynak:"Intendencia Departamental de Lavalleja, 'Historia de Minas' (lavalleja.gub.uy, web.archive.org kopyasi) — ilk kilise defteri 'se inicia el de agosto de 1783'; 'Ya en abril de 1784, el poblado funcionaba como tal'",
  neden:"Koloni devleti eliyle kuruldu: 'funcionarios de la Corona' yapti, Leyes de Indias'a gore planlandi, Asturyali/Galicyali aileler yerlestirildi." },
{ ad:"Columbia (Missouri)", tur:"sehir", lat:38.9517, lon:-92.3341, g:0, k:3, kur:"1821-04-07",
  s:[{f:"1821-04-07",t:"1923-10-29",d:"abd"}],
  d:[],
  kaynak:"University of Missouri Libraries, Columbia Missourian 'Columbia and Boone County Guide' (library.missouri.edu/missourian/columbiabeat/facts/) — 'Renamed Columbia, it became the Boone County seat on April 7, 1821.'",
  neden:"1821-04-07'de Boone County merkezi oldu (ABD Missouri idaresi); Missouri ortasında nokta boşluğunu doldurur." },
{ ad:"Morganton", tur:"sehir", lat:35.7454, lon:-81.6848, g:0, k:3, kur:"1784-01-01",
  s:[{f:"1784-01-01",t:"1923-10-29",d:"abd"}],
  d:[],
  kaynak:"NCpedia (State Library of North Carolina), 'Burke County' (ncpedia.org/geography/burke) — 'Morganton, the county seat and largest city, was incorporated in 1784' (yıl).",
  neden:"1784'te Kuzey Karolina meclisi kasabayı Burke County merkezi olarak kurdu (ABD eyalet idaresi); Batı Kuzey Karolina'daki ilk kasaba." },
{ ad:"Rawlins", tur:"sehir", lat:41.7911, lon:-107.2387, g:0, k:3, kur:"1868-01-01",
  s:[{f:"1868-01-01",t:"1923-10-29",d:"abd"}],
  d:[],
  kaynak:"WyoHistory.org (Wyoming State Historical Society), 'Carbon County, Wyoming' — '[1868:] Rawlins Spring, later known as Rawlins, was named for General Rawlins and selected as a division point for the railroad.' (yıl)",
  neden:"1868'de Union Pacific'in (federal arazi bağışıyla yapılan kıtalararası demiryolu) bölüm istasyonu olarak kuruldu; aynı yıl Haziran'da ordu yakındaki Fort Fred Steele'i hattı korumak için açtı." },
{ ad:"Traverse City", tur:"sehir", lat:44.7631, lon:-85.6206, g:0, k:3, kur:"1847-06-13",
  s:[{f:"1847-06-13",t:"1923-10-29",d:"abd"}],
  d:[],
  kaynak:"Traverse Area Historical Society, tarih çizelgesi (traversehistory.org/history) — '1847: … June 13, Horace Boardman and crew enter the later named Boardman river.'; '1851: April 7, Grand Traverse County was organized'; '1853: Post office established in Traverse City'.",
  neden:"1847-06-13'te Boardman'ın ekibi kereste fabrikası kurmak için geldi; yer, Michigan eyaletinin (ABD) sınırları içindeydi, ayrı bir yerli devlet idaresi değildi." },
];

;
/* ==== data/yerlesimler_nokta_asya_0917.js ==== */
// =====================================================================
// NOKTA-ASYA — ASYA NOKTASIZLIK ADAYLARINA KAYNAKLI YERLEŞİM (17 Eylül 2026 · D5-ASYA · 1.MURAT sevki,
// oturumlar/KOSU13-OTOBUS.md "NOKTA-ASYA" satırı)
//
// AD ALANI (§7): data/yerlesimler_nokta_asya_0917.js → window.YERLESIMLER_NOKTA_ASYA_0917
// 🔴 arac/girdi.py GIRDI_DOSYALARI'na BAĞLI DEĞİL — Oturum 0 ekler (D099).
//
// ÜRETİLİR, ELLE YAZILMAZ: py denetim/ARAC-D5-ASYA-NOKTA-0917.py --yaz
//   girdi  denetim/D5-ASYA-NOKTA-ARASTIRMA-0917.json (dört araştırma kolu · eksik kimlikler · ölü sluglar)
//   sınav  künye var mı · künye penceresi · ters/sıfır/çakışma · kesintisizlik (kur|1281 → 1923-10-29)
//          · renk (renkler.BOYALAR, harita: anahtarı) · 3 km · ad çakışması (norm)
//
// NİÇİN (§2): denetim/NOKTASIZLIK-ADAY-0917.json Asya kümeleri — ilk soru "o dönemde orada DEVLET var
// mıydı?". Yalnız devlet OLAN ve yerleşimi kaynakla tarihlenebilen yerlere nokta kondu. Her kaydın
// `neden:` alanı hangi kümeyi kapattığını ve en yakın mevcut noktayı yazar (hepsi ≥80 km).
//
// 🟡 __BOSLUK__ (VERI-YAPISI §__BOSLUK__) bu dosyada "KÜNYESİ OLMAYAN devlet" dilimleri için kullanıldı
// (Haihaya · Nagpur Bhonsle · Chauhan · Mirani · Tianwan/Chen Han/Wu · Urumçi Tungan rejimi) —
// "kimsenin değildi" DEĞİL; komşu künyeye İTMEMEK için. Künye açılınca dilim o kimliğe çevrilir.
// Xinyang 1644-04→1645-09 dilimi ise "sahip BULUNAMADI" beyanıdır.
//
// 🔴 kur ÜST SINIR olan kayıtlar: Dera Gazi Han (1500) · Dera İsmail Han (1739) · Vitim (1661 ilk kayıt).
// Günler: Çin kayıtlarında 清史稿 günleri KAYIT günüdür (olay günü değil); 1917 geçişleri ve 1912-02-12
// künye sınırıdır. Ayrıntı her kaydın `kaynak:`/`not:` alanında.
// =====================================================================

window.YERLESIMLER_NOKTA_ASYA_0917 = [

{ ad:"Mergen (Nenjiang)", tur:"kale", lat:49.18, lon:125.22, g:0, k:0, kur:"1686-01-01",
  neden:"NOKTASIZLIK-ADAY-0917 k25 kümesi 49,44K/124,56D (28.100 km², komşular Qiqihar · Aigun) — Qing'in Nonni garnizon şehri noktasızdı. En yakın mevcut nokta: Aigun 200 km.",
  not:"Kuruluş öncesi Nonni vadisi Dagur/Solon kabile yurdu (Lee s.15); `kur` verildi, önceki zincir yazılmadı. Lee ile Reardon-Anderson uyumlu (1685 sonrası / 1686 / 1688 kanıtı). 🔴 KODLANMAYAN: 1690'larda Heilongjiang askerî valiliği merkezi Mergen'e taşındı (Lee s.65 'headquarters ... were moved south to Mergen'), 1699'da Tsitsihar'a — yıl snippet'te okunamadı; sahiplik değişimi değil, kodlanmaz | 1900-1905 Rus işgali (Boxer sonrası Mançurya) — Mergen'e özgü kaynak okunmadı; egemenlik değil işgal, `isg:` konusu",
  kaynak:"TDV mancurya 302 ÖLÜ · mancular 302 ÖLÜ · cin--ulke 200 (Mergen taneciği için okunmadı). Google Books içi arama (SearchWithinVolume): Lee 1970 (id 6HFuAAAAMAAJ) s.50/65/72 okundu (snippet); Reardon-Anderson 2005 (id CiqQIPESpR8C) s.24/41 okundu (snippet). Tam metin OKUNMADI. · KURULUŞ: Reardon-Anderson, Reluctant Pioneers (Stanford UP 2005) s.24: \"Mergen (or Nenjiang, 1686)\"; s.41 garnizon tablosu \"D 1686 Mergen\". Destek: R.H.G. Lee, The Manchurian Frontier in Ch'ing History (Harvard UP 1970) s.72 \"probably created sometime after 1685\"; s.50 \"In 1688, 480 of them served in the Mergen garrison\". hassasiyet: yıl · DÖNEM DAYANAKLARI: 1686-01-01→1912-02-12 qing-hanedani (yıl): Reardon-Anderson 2005 s.24: \"Mergen (or Nenjiang, 1686)\" — Qing askerî garnizonu olarak kuruldu ‖ 1912-02-12→1923-10-29 cin-cumhuriyeti (pencere): geçiş günü künye sınırı (qing t / Qing tahttan feragat 1912-02-12); Mergen'e özgü kaynak cümlesi ARANMADI. 1923-10-29 pencere sonu",
  s:[{f:"1686-01-01",t:"1912-02-12",d:"qing-hanedani"},
     {f:"1912-02-12",t:"1923-10-29",d:"cin-cumhuriyeti"}] },

{ ad:"Sanxing (Yilan)", tur:"kale", lat:46.32, lon:129.57, g:0, k:0, kur:"1714-01-01",
  neden:"NOKTASIZLIK-ADAY-0917 k25 kümesi 45,98K/130,25D (17.395 km², komşu Ningguta) — Sungari aşağı havzasının Qing garnizonu noktasızdı. En yakın mevcut nokta: Ningguta 219 km.",
  not:"🟡 ÇELİŞKİ (hafif): Reardon-Anderson s.41 tablosu Sanxing garnizonunu \"c. 1700\" veriyor, Lee s.34 açıkça \"1714\". 'c.' yaklaşık olduğu için Lee'nin açık yılı seçildi — koordinatör hükmüne açık. Lee s.15: Ilan Hala Heje klanının yurdu; kuruluş öncesi zincir yazılmadı. 🔴 KODLANMAYAN: 1732 garnizon komutanlığına fudutong atanması (Lee s.45 'probably in 1732') — idarî, sahiplik değişimi değil | Yuan dönemi bu bölgede mıntıka/myriarchy iddiası — kaynak OKUNMADI (bulunamadı); yer 1281'de şehir olarak belgelenmedi, zincir yazılmadı | 1900-1905 Rus işgali — Sanxing'e özgü kaynak okunmadı",
  kaynak:"TDV: ilgili slug yok (mancurya 302). Lee 1970 s.15/34/45 snippet okundu; Reardon-Anderson 2005 s.24/41/141/176 snippet okundu. · KURULUŞ: Lee 1970 s.34: \"In 1714 the San-hsing garrison post was established\". hassasiyet: yıl · DÖNEM DAYANAKLARI: 1714-01-01→1912-02-12 qing-hanedani (yıl): Lee 1970 s.34: \"In 1714 the San-hsing garrison post was established\" ‖ 1912-02-12→1923-10-29 cin-cumhuriyeti (pencere): künye sınırı 1912-02-12; Sanxing'e özgü kaynak cümlesi ARANMADI",
  s:[{f:"1714-01-01",t:"1912-02-12",d:"qing-hanedani"},
     {f:"1912-02-12",t:"1923-10-29",d:"cin-cumhuriyeti"}] },

{ ad:"Barkol (Balikun / Zhenxi)", tur:"kale", lat:43.6, lon:93.02, g:0, k:0, kur:"1715-01-01",
  neden:"NOKTASIZLIK-ADAY-0917 'Kumul-Turfan' kümesi 43,83K/92,24D (90.439 km², komşular Hâmi · Turfan · Ürümçi) — Hami ile Turfan arasındaki Qing garnizon şehri noktasızdı. En yakın mevcut nokta: Hâmi (Kumul) 95 km.",
  not:"Kuruluş öncesi Barkol çayırı Hami bölgesinin göçebe otlağı; 1715 öncesi zincir yazılmadı (brif). Perdue s.199: Hami 1697 civarı Qing'e bağlandı — Barkol ayrı yerleşim olarak anılmıyor. Qing sürekliliği 1715-1912: Cungar savaşları ve Dungan/Yakub Bey döneminde Barkol'un düştüğüne dair kaynak bulunamadı; tersine Kim iki yerde Qing elinde olduğunu söylüyor. Mevcut komşu Hâmi kaydı 1864-1876 arası `yakub-beg` taşımıyor — tutarlı. 🔴 KODLANMAYAN: 1864-10-19 Barkul Müslümanlarının ayaklanması (Kim s.58 'Barkul on October 19, 1864') — şehri ALAMADILAR, sahiplik değişmedi | 1731 Cungar karşı saldırısı / Qing geri çekilmesi (Perdue s.254 'military reverses of 1731', 'withdraw troops back to ... Chahan Sor') — Barkol'un el değiştirdiğine dair kaynak YOK; Chahan Sor kuzey (Moğolistan) hattı | 1731 Yue Zhongqi'nin sur inşası — yalnız ölçüt dışı turistik/Çin basını kaynaklarında görüldü (reddedildi); akademik dayanak bulunamadı | 1759-60 zhiliting, 1773 Zhenxi fu (Perdue s.339) — idarî, sahiplik değişimi değil | 1931-33 Kumul isyanında Ma Zhongying Barkol'a akın (Millward s.193) — pencere dışı",
  kaynak:"TDV: barkul 302 ÖLÜ · barkol 302 ÖLÜ · kumul 302 ÖLÜ · turfan 200 okundu (Barkol GEÇMİYOR) · yakub-bey 200 okundu (Barkol GEÇMİYOR) · kalmuklar 200 okundu (Barkol GEÇMİYOR) · dogu-turkistan 200 ama gövde yalnız 'bk. TÜRKİSTAN' (yönlendirme kütüğü) · sincan 200 aynı kütük · turkistan 200 okundu (Barkol GEÇMİYOR) ⇒ TDV bu taneciği kapsamıyor (§4 taneciklik). Perdue 2005 (id J4L-_cjmSqoC) s.230/231/241/254/339/343/351 snippet; Kim, Holy War in China (Stanford UP 2004; id AtduqAtBzegC) s.43/58/59 snippet; Millward, Eurasian Crossroads (Columbia UP; id 8FVsWq31MtMC) s.101/128/168/193 snippet. Tam metin OKUNMADI. · KURULUŞ: Perdue, China Marches West (Harvard UP 2005) s.343: \"1715 he began active efforts to establish colonies at Turfan, Hami, Anxi, and Barköl\"; s.230: Balikun Hami'nin kuzeyinde ileri harekât üssü. hassasiyet: yıl · DÖNEM DAYANAKLARI: 1715-01-01→1912-02-12 qing-hanedani (yıl): Perdue 2005 s.343: \"1715 ... establish colonies at Turfan, Hami, Anxi, and Barköl\" · Dungan isyanında elde tutuldu: Kim 2004 s.43 \"all of the Eastern Circuit except for Hami, Turfan, and Barkul\"; s.58-59 \"Qing army came down from Barkul\" ‖ 1912-02-12→1923-10-29 cin-cumhuriyeti (pencere): künye sınırı 1912-02-12; Sincan'ın Cumhuriyet'e geçişi 1912 içinde (Millward s.168 1912 başı çatışmalar) — Barkol'a özgü gün yok",
  s:[{f:"1715-01-01",t:"1912-02-12",d:"qing-hanedani"},
     {f:"1912-02-12",t:"1923-10-29",d:"cin-cumhuriyeti"}] },

{ ad:"Qitai (Gucheng)", tur:"sehir", lat:44.01, lon:89.56, g:0, k:0, kur:"1771-01-01",
  neden:"NOKTASIZLIK-ADAY-0917 'Kumul-Turfan' boşluğunun batı ucu (Turfan 121 km · Ürümçi 157 km) — Doğu Sincan'ın Gucheng garnizonu noktasızdı. En yakın mevcut nokta: Turfan 121 km.",
  not:"1865–1876 __BOSLUK__: Urumçi Tungan rejiminin künyesi yok (eksik kimlik). 1876 Qing dönüşü ÜST SINIR (Millward s.128) — geri alış daha erken olabilir. Kuruluş öncesi bölge Cungar otlağı (cungar 1634-1758) ama kasaba yok → `kur`. 🔴 1865-1876 arası 11 yıllık boşluk kasıtlı: Tungan kimliği yok, Yakub Bey'e itmek yanlış atıf olur (§3.5.-1). ⚠️ Komşu Ürümçi/Manas kayıtları 1864-06-04'ten `yakub-beg` taşıyor — künye 1865-01-01'de başladığı için künye öncesi kullanım (D193) VE 1864-1870 Tungan dönemi için yanlış atıf olabilir (Kim s.43: Urumçi 1864 Tungan rejimi; Yakub Bey Urumçi'yi 1870'te aldı, s.72 '10/11/1870'). 🔴 KODLANMAYAN: 1865-01-01 → 1876-01-01 BOŞLUK BIRAKILDI: 1865 Şubat-Mart'tan itibaren Urumçi Tungan rejimi (Tuo Ming / Daud Halife) — kimlik YOK (eksik_kimlik). Kim s.102: Yakub Bey'in hâkimiyeti doğuda Gumadi'ye kadar ⇒ Gucheng `yakub-beg` DEĞİL, İTİLMEDİ | Qing'in Gucheng'i geri alış tarihi BULUNAMADI. Kim s.241: 'Tungans attacked Qitai in March 1870' (Qitai o sırada Tungan elinde değil gibi görünüyor, kim elindeydi okunamadı); Vikipedi 'Qing reconquest of Xinjiang' 1876'da Gucheng'de karargâh diyor (tek dayanak olamaz, dipnotu belirsiz) | Mayıs 1864 Qitai'de Tungan-milis çatışması (Kim s.42) — sahiplik değişimi değil",
  kaynak:"TDV: guchen 302 ÖLÜ · (Barkol satırındaki TDV taraması aynı: turfan/yakub-bey/kalmuklar/turkistan okundu, Qitai/Gucheng GEÇMİYOR; dogu-turkistan ve sincan yönlendirme kütüğü). Perdue s.339/394 snippet; Kim 2004 s.42/43/58/72/102/241 snippet; Millward s.117/128/151 snippet; en.wikipedia 'Qing reconquest of Xinjiang' yalnız YÖNLENDİRME için okundu. · KURULUŞ: Perdue 2005 s.339: \"included Pizhan (Turfan) and Qitai in 1771–72\" — EN ERKEN KAYNAKLI ANILIŞ (idarî katılım); kasaba daha önce Qing askerî kolonisi olarak var olmuş olabilir. hassasiyet: yıl · DÖNEM DAYANAKLARI: 1771-01-01→1865-01-01 qing-hanedani (yıl): Perdue 2005 s.339 \"Qitai in 1771–72\" · bitiş: Kim 2004 s.43 \"Gucheng also fell between the end of February and the beginning of March 1865\" (ay Şubat sonu–Mart başı; §4 gereği yıl yazıldı) ‖ 1876-01-01→1912-02-12 qing-hanedani (yıl): Millward s.128: 1876'da \"The reconquest of Zungharia (except for the Yili valley) took only three months\" ⚠️ ÜST SINIR — Qing Gucheng'i daha önce geri almış olabilir ‖ 1912-02-12→1923-10-29 cin-cumhuriyeti (pencere): künye sınırı 1912-02-12; Qitai'ye özgü gün yok",
  s:[{f:"1771-01-01",t:"1865-01-01",d:"qing-hanedani"},
     {f:"1865-01-01",t:"1876-01-01",d:"__BOSLUK__"},
     {f:"1876-01-01",t:"1912-02-12",d:"qing-hanedani"},
     {f:"1912-02-12",t:"1923-10-29",d:"cin-cumhuriyeti"}] },

{ ad:"Chifeng (Ulanhad)", tur:"sehir", lat:42.27, lon:118.96, g:0, k:0, kur:"1738-01-01",
  neden:"NOKTASIZLIK-ADAY-0917 k24 kümesi 42,51K/118,26D (20.783 km², komşu Cehol) — İç Moğolistan'ın Qing idarî merkezi noktasızdı. En yakın mevcut nokta: Cehol (Chengde) 167 km.",
  not:"🔴 ÇELİŞKİ: alt-valilik kuruluşu Britannica 1729 · Reardon-Anderson 1738. Akademik (Stanford UP, Çince literatüre dayanan tablo) olan seçildi; brif Britannica için 'imzalı madde' şartı koyuyordu, bu madde imzasız. Koordinatör hükmüne açık. Britannica 'Çinli yerleşimciler çoğaldıktan SONRA' diyor ⇒ yerleşme alt-valilikten önce başlamış; kasabanın gerçek doğum yılı ölçülemedi. 🔴 KODLANMAYAN: 1778 county-level town (Chifeng), 1907 prefecture (Britannica) — idarî | Ming döneminde 'Duoyan Wei' denetimi, 17. yy'da Öngüt (Ongniud) Moğol sancakları (Britannica) — kasaba yok; `kur` öncesi, yazılmadı. Duoyan Wei (Uriankhai Üç Muhafız) için kimlik de YOK",
  kaynak:"TDV: Chifeng için slug denenmedi (İslâm coğrafyası dışı). Britannica 'Chifeng' HTTP 200 (curl; WebFetch 403) gövde okundu — imza 'Written and fact-checked by Britannica Editors' (İMZALI UZMAN MADDESİ DEĞİL; sayfada 'Britannica AI' arayüz öğesi var ama madde gövdesi editoryal). Reardon-Anderson 2005 s.43/175 snippet okundu. · KURULUŞ: Reardon-Anderson 2005 s.43 tablo: \"10 1738 Wulanhada Chifeng Subprefecture\". ⚠️ Britannica 'Chifeng' (imzasız, 'Britannica Editors'): \"In 1729 ... the subprefecture of Ulaan Hada was set up\" — ÇELİŞKİ. hassasiyet: yıl · DÖNEM DAYANAKLARI: 1738-01-01→1912-02-12 qing-hanedani (yıl): Reardon-Anderson 2005 s.43: \"1738 Wulanhada Chifeng Subprefecture\" (Qing idarî birimi) ‖ 1912-02-12→1923-10-29 cin-cumhuriyeti (pencere): künye sınırı; Britannica: \"became a county seat in 1913\" (Cumhuriyet idarî birimi)",
  s:[{f:"1738-01-01",t:"1912-02-12",d:"qing-hanedani"},
     {f:"1912-02-12",t:"1923-10-29",d:"cin-cumhuriyeti"}] },

{ ad:"Raipur", tur:"sehir", lat:21.25, lon:81.63, g:0, k:0,
  neden:"NOKTASIZLIK-ADAY-0917 'Dekken kuzeyi' kümesi 20,85K/81,42D (68.815 km², komşular Cabalpûr · Vişâkapatnam · Varangal) — Chhattisgarh ovasının merkezi noktasızdı. En yakın mevcut nokta: Nagpûr 264 km.",
  not:"__BOSLUK__ dilimleri künyesi olmayan yerel devletlerdir (eksik kimlik), 'kimsenin değil' DEĞİL. `maratha` dönemi 1750-1818-01-01 künye penceresi içinde. 1818'in günü kaynakta yok (Appa Sahib'in azli 1818; IGI c.10 s.17 yıl vermiyor ama bağlamdan 1818) -> yıl. 1818-1853 boşluğu için iki seçenek koordinatöre: (a) yeni künye `nagpur-bhonsle` 1818->1853 (emsal: gvalyar/indor/kolhapur Maratha ardılları künyeli), (b) veride Nagpûr kaydı `maratha`yı 1853-12-11'e kadar KÜNYE DIŞINA taşıyor — bu kaydı taklit etmedim. 1818-1830 İngiliz Resident idaresi idarî devirdir (D083), ingiliz-hindistani'ye itilmedi. 🔴 KODLANMAYAN: 1281-1750: Haihaivansi (Kalachuri) hanedanının Raipur kolu — IGI c.21 s.51 \"separately governed by a younger branch ... in subordination to the Ratanpur kingdom\". Künye YOK -> boş bırakıldı (eksik_kimlik). | 1818-1853: Nagpur Bhonsle devleti. IGI c.21 s.51: \"Between 1818 and 1830 the Nagpur territories were administered by the British Resident. From 1830 to 1853 ... again administered by Maratha Subahs\". `maratha` künyesi 1818-06-03'te bitiyor, Nagpur Bhonsle künyesi yok -> boş bırakıldı (eksik_kimlik). Raipur 1818'de Chhattisgarh merkezi yapıldı (IGI c.21 s.60). | 1853 lapse günü: IGI yalnız yıl veriyor (Raghuji III 1853'te öldü, IGI c.10 s.17). Britannica 'Nagpur (Indian dynasty)' ilhakı 1854 diyor (lapse 1853 / resmî ilhak 1854 ayrımı). Gün bulunamadı; veride Nagpûr kaydının 1853-12-11 günü KAYNAKSIZ (yerlesimler_asya.js:895, kaynak alanı yok) -> komşu günü şartı sağlanmıyor, kullanılmadı.",
  kaynak:"IGI 1908-09 (dsal.uchicago.edu, sayfa görüntüsü okundu): c.21 s.51 (DS405.1.I34_V21_057.gif) · c.21 s.60 (V21_066) · c.10 s.15-17 Central Provinces History (V10_021-023). Britannica 'Nagpur Indian dynasty' curl 200, okundu (\"British clients from 1818 to 1853\"). TDV: nagpur/maratalar/marathalar/maratha/bhonsle/ratanpur 302 ÖLÜ; hindistan 200 okundu — Chhattisgarh/Nagpur taneciğini kapsamıyor (TANECİK boşluğu). · KURULUŞ: IGI c.21 s.60: \"believed to have existed since the ninth century\" — 1281 öncesi, kur gerekmez. Kale: \"said to have been constructed in 1460\" (kur değil). · DÖNEM DAYANAKLARI: 1750-01-01→1818-01-01 maratha (yıl): IGI c.21 s.51 (Raipur District, History): \"Between 1750 and 1818 the country was governed by the Marathas\" ‖ 1853-01-01→1923-10-29 ingiliz-hindistani (yıl): IGI c.21 s.51: \"In 1853 Chhattisgarh became British territory by lapse\" · t = pencere sonu",
  s:[{f:"1281-01-01",t:"1750-01-01",d:"__BOSLUK__"},
     {f:"1750-01-01",t:"1818-01-01",d:"maratha"},
     {f:"1818-01-01",t:"1853-01-01",d:"__BOSLUK__"},
     {f:"1853-01-01",t:"1923-10-29",d:"ingiliz-hindistani"}] },

{ ad:"Ratanpur", tur:"sehir", lat:22.29, lon:82.17, g:0, k:0,
  neden:"NOKTASIZLIK-ADAY-0917 'Dekken kuzeyi' kümesinin kuzeyi — Haihaya (Kalachuri) krallığının başkenti noktasızdı. En yakın mevcut nokta: Cabalpûr (Jabalpur) 245 km.",
  not:"__BOSLUK__ dilimleri künyesi olmayan yerel devletlerdir (eksik kimlik), 'kimsenin değil' DEĞİL. Kalyan Sahi'nin Ekber'e gidişi (IGI c.8 s.223-224: \"proceeded to Delhi ... returned ... with a Muhammadan title\") bir Bâbürlü tasarrufu DEĞİL; babur-imparatorlugu'na itilmedi. Kaynağa göre Chhattisgarh Marathalara kadar dış saldırı görmemiş. Başkent 1818 sonrası Ratanpur'dan Raipur'a taşındı (IGI c.8 s.224). 🔴 KODLANMAYAN: 1281-1741: Haihaivansi (Kalachuri) Racput krallığı, başkent Ratanpur — IGI c.8 s.223. Künye YOK (kalac/haihay/ratan taraması boş) -> boş (eksik_kimlik). | 1745: son raca Raghunath Singh'in azli (IGI c.10 s.15 \"four years later, with the deposition of the last Raja\"). Tasarruf kırılması 1741 alındı (şehir teslim oldu, krallık ilhak edildi — IGI c.21 s.51 \"took Ratanpur and annexed the kingdom\"). | 1818-1853: Nagpur Bhonsle devleti (1818-1830 İngiliz Resident vesayeti, 1830-1853 Maratha subahları) — künye yok -> boş (eksik_kimlik). | 1853 günü bulunamadı (bkz. Raipur).",
  kaynak:"IGI c.8 s.223-224 Bilaspur District History (V08_229, V08_230 görüntü okundu) · c.21 s.51 (V21_057) · c.10 s.15-17 (V10_021-023). TDV ratanpur 302 ÖLÜ. · KURULUŞ: IGI c.8 s.223-224: Haihaivansi hanedanının kadim başkenti; 12. yy yazıtları Ratanpur krallarından söz ediyor — 1281 öncesi. · DÖNEM DAYANAKLARI: 1741-01-01→1818-01-01 maratha (yıl): IGI c.8 s.224: \"In 1741 occurred the invasion of Chhattisgarh by the Maratha general Bhaskar Pant\" · \"governed by Maratha Subahs ... until 1818\" ‖ 1853-01-01→1923-10-29 ingiliz-hindistani (yıl): IGI c.8 s.224: \"until 1853, when Chhattisgarh with the rest of the Nagpur territories lapsed\" · t = pencere sonu",
  s:[{f:"1281-01-01",t:"1741-01-01",d:"__BOSLUK__"},
     {f:"1741-01-01",t:"1818-01-01",d:"maratha"},
     {f:"1818-01-01",t:"1853-01-01",d:"__BOSLUK__"},
     {f:"1853-01-01",t:"1923-10-29",d:"ingiliz-hindistani"}] },

{ ad:"Sambalpur", tur:"sehir", lat:21.47, lon:83.97, g:0, k:0,
  neden:"NOKTASIZLIK-ADAY-0917 k14 kümesi 21,26K/84,8D (18.473 km², komşular Kattak · Puri · Bâlâsor) — Mahanadi yukarı havzası noktasızdı; bölge Orissa kıyısının peteklerine emiliyordu. En yakın mevcut nokta: Kattak (Cuttack) 228 km.",
  not:"__BOSLUK__ dilimleri künyesi olmayan yerel devletlerdir (eksik kimlik), 'kimsenin değil' DEĞİL. `maratha` 1797-1817 künye penceresi (1674-06-06→1818-06-03) içinde. 1849 günü bulunamadı (yıl). Eğer koordinatör 1803-1806'yı kodlamak isterse Deogaon günü için kabul edilebilir bir kaynak (Britannica erişilemedi) aranmalı. 🔴 KODLANMAYAN: 1281-1797: Chauhan Racput hâkimiyeti (önce Patna, sonra Balram Deo'nun Sambalpur devleti; 'Athara Garhjat' kümesi) — IGI c.22 s.7 \"one of a cluster of States held by Chauhan Rajputs\", IGI c.20 s.71. Künye YOK (chauhan/cauhan/sambal/garhjat taraması boş) -> boş (eksik_kimlik). | 1817-1849: Chauhan racalığı İngiliz siyasî denetiminde — IGI c.22 s.7 \"placed under the political control of the Bengal Government\". Himaye altında yerli devlet; künye yok -> boş (eksik_kimlik). ingiliz-hindistani'ye İTİLMEDİ (D083). | 1803-1806 ÇELİŞKİ: IGI c.10 s.16 \"by the Treaty of Deogaon Raghuji was obliged to cede Cuttack, Sambalpur\" (1803); başka bir IGI sayfası (arama özeti, sayfa no okunamadı) \"Sambalpur, the last of which was, however, relinquished in 1806\". Sambalpur'un kendi maddesi (c.22 s.7) 1797-1817 kesintisiz Maratha diyor. Arama sonuçlarında 1806-1808 arası Rani Ratan Kumari direnişi ve 1808 Maratha işgali geçiyor ama kaynaklar (IJNRD/IJCRT) §4 kabul listesinde değil -> kodlanmadı. Yerin kendi maddesi esas alındı, fark bildirildi. | Maratha fethi yılı: IGI 1797 diyor; brifteki 1800 önerisini destekleyen kabul edilebilir kaynak bulunamadı.",
  kaynak:"IGI c.22 s.5-7 (V22_011-013 görüntü okundu) · c.22 s.17 (V22_023) · c.20 s.70-71 Patna State (V20_076-077) · c.10 s.16 (V10_022). Britannica 'Treaty of Deogaon' 403 (okunamadı; arama özeti 17 Aralık 1803 diyor — gün kullanılmadı). TDV sambalpur/orissa/ulise 302 ÖLÜ. · KURULUŞ: bulunamadi — IGI kasabanın kuruluş yılını vermiyor; Patna Racası Narsingh Deo'nun kardeşi Balram Deo'nun Sambalpur devletini kurduğunu yazıyor (IGI c.20 s.71) ama YIL YOK. Kur null bırakıldı. · DÖNEM DAYANAKLARI: 1797-01-01→1817-01-01 maratha (yıl): IGI c.22 s.7 (Sambalpur District, History): \"In 1797 the District was conquered and annexed by the Marathas\" · \"Raja was restored in 1817\" ‖ 1849-01-01→1923-10-29 ingiliz-hindistani (yıl): IGI c.22 s.7: \"in 1849 the District was annexed as an escheat\" · t = pencere sonu",
  s:[{f:"1281-01-01",t:"1797-01-01",d:"__BOSLUK__"},
     {f:"1797-01-01",t:"1817-01-01",d:"maratha"},
     {f:"1817-01-01",t:"1849-01-01",d:"__BOSLUK__"},
     {f:"1849-01-01",t:"1923-10-29",d:"ingiliz-hindistani"}] },

{ ad:"Dera Gazi Han", tur:"sehir", lat:30.05, lon:70.63, g:0, k:0, kur:"1500-01-01",
  neden:"NOKTASIZLIK-ADAY-0917 k14 kümesi 30,72K/70,23D (28.361 km², komşular Multan · Bahâvelpûr) — İndus'un batı yakası (Derajat güneyi) noktasızdı. En yakın mevcut nokta: Multan 83 km.",
  not:"kur ÜST SINIRDIR. 1281–1500 yazılmadı (şehir yoktu; eski 1281–1437 delhi-sultanligi ve 1451 langah dönemleri bölge hükmüydü). Konum modern şehir; tarihî şehir ~14 km doğuda (70,78D) — nehir yatağı değişimi. TDV TANECİKLİK BOŞLUĞU: dar sluglar ölü (dera-gazi-han, derei-gazi-han, dere-gazi-han → 302), kapsayıcı multan/pencap/belucistan maddeleri kasabanın tarihini vermiyor ⇒ IGI + 1883 Punjab gazetteer kullanıldı (§4 taneciklik kuralı). DEĞİŞMEZ 1 UYARISI: 1437-1451 ve 1527-1739 dilimleri BOŞ (kimlik yok) — delik açar; eksik_kimlik'e yazıldı. Komşu Multan kaydı sind 1528-1557 / babur 1557 kullanıyor — komşu kayıt dayanak alınmadı. Bitişik Harrand/Dajal 1758'de Kalat Hanı Nasır Han'a verildi (DGK Gaz. s.19) — şehir dışı, kalat künyesi de yok. 🔴 KODLANMAYAN: 1437-01-01 → 1451-01-01: TDV multan — Mültan 'on beş yıl kadar' Şeyh Muhammed Yûsuf Kureyşî idaresinde; künye YOK (eksik_kimlik). DİLİM BOŞ BIRAKILDI. | 1527-01-01 → 1739-01-01: MİRANİ (Gazi Han hanedanı) — DGK Gaz. 1883 s.17: Ekber öncesi 'the family maintained itself in independence', sonra Bâbürlü cagîri ama 'powers ... practically uncontrolled'; IGI v11 s.250: 'nominal submission to the Mughal empire'. Künye YOK ⇒ DİLİM BOŞ. Seçenek B (koordinatör kararı): babur-imparatorlugu metbû olarak — ama Bâbürlü tâbiiyetinin BAŞLANGIÇ YILI kaynakta yok (Hümayun'a 'said to have' cagîr; Ekber dönemi tâbiiyet, yılsız). 1527-1556 arası kaynak açıkça BAĞIMSIZ diyor. | Langah → Mirani bağımsızlığı: DGK Gaz. 1883 s.17 Gazi Han'ın 'Mahmud' (Langah) döneminde isyan edip bağımsızlık ilan ettiğini söylüyor — Mahmud'un saltanat yılı bu kaynakta yok; kırılma YAZILMADI (Langah dilimi 1527'ye kadar biçimsel metbûluk olarak kodlandı). | 1769 Kalhora (sind) işgali: DGK Gaz. 1883 s.18 'In 1183 A.H. (1769 A.D.) the Kalhoras took Dera Ghazi Khan' (IGI 1739-sonrası Kalhora vali bağlılığı diyor); Kalhora idaresinin BİTİŞ yılı yok ('subsequently under Ahmad Shah') ⇒ sind dilimi yazılmadı. Ayrıca gazetteer'in kendi dipnotu tarih çelişkisini kabul ediyor (1758/1769/1775). | 1819-1830 Bahavelpur Navabı'na iltizam (DGK Gaz. 1883 s.20 'farmed the district first to Sadik Muhammad Khan, Nawab of Bahawalpur'; 1830'da azledildi) — egemenlik değil iltizam; bahavelpur olarak KODLANMADI, not düşüldü.",
  kaynak:"TDV multan (200, gövde okundu, Azmi Özcan 2020) · TDV pencap (200, gövde okundu — Dera Gazi Han yalnız lehçe listesinde) · TDV belucistan (200, okundu — kasaba tanecinde yok) · TDV sind (200, okundu — ilgili satır yok) · TDV afganistan (200, okundu — 1747) · TDV ahmed-sah-durrani (200, okundu) · TDV suriler (200, okundu — Derecat yok) · Imperial Gazetteer of India (1908) v11 s.249-251, 257-258 (DSAL sayfa görüntüleri OKUNDU) · Punjab District Gazetteer Dera Ghazi Khan 1883-84 (archive.org gazetteer-dera-ghazi-khan-1883, djvu metin, s.16-20 OKUNDU) · Journal of Indian Studies 10/1 (pu.edu.pk PDF, pypdf ile okundu). · KURULUŞ: ÜST SINIR (yıl yok): IGI v11 s.250 'the town which he founded before the end of the fifteenth century' ⇒ en geç 1500 · Yıl YOK. IGI v11 s.257 (Dera Ghazi Khan Town): 'founded at the end of the fifteenth century' (Mirani reisi Gazi Han). IGI v11 s.250: 'the town which he founded before the end of the fifteenth century'. Punjab District Gazetteer DGK 1883 (Ibbetson serisi) s.17: 'founded by Haji Khan, father of Ghazi Khan' · Gazi Han 'died in 900 A.H. (1494 A.D.)' (mezar taşı) · aile 'in power only from 887 A.H. (1482 AD.)'. ⇒ kuruluş ~1482–1500 arası, tek yıl verilemiyor. ÖNERİ (onay gerekir, türetilmiş): kur verilmeyecekse aşağıdaki zincir 1281'den TOPRAĞI temsil eder (IGI: bölge Multan eyaletinin uç parçası). · DÖNEM DAYANAKLARI: 1500-01-01→1527-01-01 multan-langah (yıl): TDV multan: 'Muhtemelen 855’te (1451) Belûcîler’in Lengâh kabilesinden Rai Sahra ... Mültan’a hâkim oldu' · bitiş TDV multan: 'Hüseyin Şah Argun son verdi (Rebîülâhir 933 / Ocak 1527)' — ay hassasiyeti, yıla düşürüldü; künye t ile aynı. Mirani reisleri Langah hizmetinde tımarlı (DGK Gaz. 1883 s.16-17: 'adventurers who then flocked to the court of Sultan') ‖ 1739-01-01→1747-10-01 afsar (yıl (bitiş: künye günü devralındı)): DGK Gaz. 1883 s.18: 'In 1151 A.H. (1739 A.D.) Muhammad Shah had ceded all the country west of the Indus to Nadir Shah' · IGI v11 s.251 aynı (1739). Bitiş: TDV afganistan 'Ahmed Şah, 1747’de Nâdir Şah’ın öldürülmesinden sonra' — yalnız YIL; 1747-01-01 künye afgan-durrani f (1747-10-01) öncesine ve Nadir'in ölümü öncesine düşeceği için künye günü DEVRALINDI; bu gün de KAYNAKSIZ (künyenin). ‖ 1747-10-01→1819-01-01 afgan-durrani (yıl (başlangıç künye günü)): DGK Gaz. 1883 s.19: 'Nadir Shah was killed in 1747 A.D, and Ahmad Shah, Abdali or Durani, succeeded him' · s.18: Horasan kralları 'were therefore the actual owners of Dera Ghazi Khan' · IGI v11 s.251: 'A series of Afghan rulers succeeded under the Durrani monarchs' ‖ 1819-01-01→1849-03-29 sih-imparatorlugu (yıl): DGK Gaz. 1883 s.20: 'In 1819 A.D. Ranjit Singh annexed Dera Ghazi Khan' · IGI v11 s.251: 'In 1819 Ranjit Singh extended his conquests in this direction beyond the Indus' ‖ 1849-03-29→1923-10-29 ingiliz-hindistani (gün (bitiş: pencere sonu)): Anwar, Haroon & Zeeshan, Journal of Indian Studies (Univ. of the Punjab) 10/1 (©2023; dosya 2_v10_1_24.pdf) — 'Punjab was annexed to the British Empire on March 29, 1849' (Grewal 1990'a atıfla) · DGK Gaz. 1883 s.20: 'In 1849 A.D. ... Dera Ghazi Khan was annexed by the British'",
  s:[{f:"1500-01-01",t:"1527-01-01",d:"multan-langah"},
     {f:"1527-01-01",t:"1739-01-01",d:"__BOSLUK__"},
     {f:"1739-01-01",t:"1747-10-01",d:"afsar"},
     {f:"1747-10-01",t:"1819-01-01",d:"afgan-durrani"},
     {f:"1819-01-01",t:"1849-03-29",d:"sih-imparatorlugu"},
     {f:"1849-03-29",t:"1923-10-29",d:"ingiliz-hindistani"}] },

{ ad:"Dera İsmail Han", tur:"sehir", lat:31.83, lon:70.9, g:0, k:0, kur:"1739-01-01",
  neden:"NOKTASIZLIK-ADAY-0917 k14 kümesi 32,34K/69,34D (33.892 km², komşular Gazne · Peşâver · Kâbil) — Derajat noktasızdı. En yakın mevcut nokta: Multan 190 km.",
  not:"kur ÜST SINIRDIR. 1821–1836 Navab Sih'e haraçlı yarı bağımsız — sih olarak kodlandı. TDV taneciklik boşluğu (dar slug ölü, kapsayıcı maddeler Derecat'ı anmıyor). DEĞİŞMEZ 1: kur verilmezse zincir 1281'den başlayamaz — kaynak kur öncesini 'entirely unoccupied' diyor, yani devlet yok; kur verilmesi ŞART ama kaynakta yıl yok (öneri 1469, terminus post quem). 1527-1739 BOŞ (hot künyesi yok). Kaynak tutarsızlığı: IGI 'Nawab ... Muhammad Khan ... died in 1815 ... His grandson, Sher Muhammad Khan, succeeded' diyor; 1883 gazetteer arada Hafız Ahmed Han'ı (1815-1825) sayıyor — kırılmayı etkilemiyor. 🔴 KODLANMAYAN: 1527-01-01 → 1739-01-01: HOT BELUÇ beyliği — IGI v11 s.262: 'held sway over the Upper Derajat for 300 years, with practical independence'. Künye YOK ⇒ DİLİM BOŞ. Biçimsel metbûluk kaynakta var ama yılsız: DİK Gaz. 1883 s.30 Sur: 1540'ta Şir Şah'a 'tendered their submission' (künye sur-hanedani f 1540-05-17 ile uyumlu) ve s.29 'part of the Moghal empire till the invasion of Nadir Shah'. Sur→Bâbürlü geçiş yılı Derecat için kaynakta YOK. Seçenek B (koordinatör): sur-hanedani 1540-05-17 → ? ; babur-imparatorlugu ? → 1739-01-01. | 1821 → 1836 Dera Navablığı (Sadozay): IGI v11 s.262 'semi-independent prince' + Sih'e haraç. Seçenek: Navablık künyesi açılırsa bu dilim ona, sih-imparatorlugu 1836-01-01'den (IGI 'in 1836'). Şimdilik Sih metbûluğu 1821'den kodlandı (şehir 1821'de Sih'e teslim edildi, sonra şartla Navab'a bırakıldı — DİK Gaz. s.37 'retain the town and province of Dera'). | 1770 Hot reisinin azli ve Kâbil'den doğrudan valiler (DİK Gaz. s.31 'about A.D. 1770') — aynı kimlik (Dürrânî), kırılma yok.",
  kaynak:"TDV dera-ismail-han (302 ÖLÜ) · TDV multan (200, okundu) · TDV afganistan (200, okundu) · Imperial Gazetteer of India v11 s.260-262 (DSAL sayfa görüntüleri OKUNDU) · Punjab District Gazetteer Dera Ismail Khan 1883-84 (archive.org gaz-dera-ismail-khan-1883, djvu metin s.29-40 OKUNDU) · Journal of Indian Studies 10/1 (okundu). · KURULUŞ: ÜST SINIR (kuruluş yılı yok): IGI v11 s.261 kasabayı 15. yy sonunda gelen Beluç reisinin oğullarına bağlıyor, yıl vermiyor; şehir 1739 devrinde Hot navablarının merkeziydi (DIK Gaz. 1883 s.29-30). Nokta en geç 1739'dan gösterilir; 1739 öncesi Hot beyliği künyesiz olduğu için zincir yazılmadı. Yıl YOK. IGI v11 s.261: Beluç yerleşimciler 'arrived in the District towards the end of the fifteenth century. His two sons, Ismail Khan and Fateh Khan, founded the towns' · Punjab District Gazetteer DIK 1883 s.30: 'in 874 Hijri (A.D. 1469), Sultan Husain ... obtained the Government of Multan'; Malik Suhrab 'soon after' geldi ve 'founded a Dera named after Ismail Khan'. ⇒ 1469 bir terminus post quem, kuruluş yılı DEĞİL. IGI v11 s.261: öncesinde göçmenler 'found the country entirely unoccupied' ⇒ kur öncesi DEVLET YOK. ÖNERİ (onay gerekir): kur 1469-01-01 'en erken sınır' damgasıyla. · DÖNEM DAYANAKLARI: 1739-01-01→1747-10-01 afsar (yıl (bitiş künye günü devralındı, kaynaksız)): DİK Gaz. 1883 s.29: 'In 1739 A.D., the country west of the Indus was surrendered by the Emperor to Nadir Shah' · bitiş: TDV afganistan 'Nâdir Şah’ın öldürülmesinden' (1747) — künye günü 1747-10-01 devralındı ‖ 1747-10-01→1821-01-01 afgan-durrani (yıl (başlangıç künye günü)): DİK Gaz. 1883 s.29: 'passed after his death to Ahmed Shah, Abdalli' · IGI v11 s.262: Hot ailesi 'reduced to vassalage by Ahmad Shah Durrani about 1750' · IGI: 1794 Zaman Şah 'conferred the government of this dependency' Navab Muhammed Han'a ‖ 1821-01-01→1849-03-29 sih-imparatorlugu (yıl): DİK Gaz. 1883 s.37: 'In the autumn of 1821 … the town was surrendered' — mevsim hassasiyeti, yıla düşürüldü · IGI v11 s.262: Navab 'subject to a quit-rent to the Sikhs' · 1836 ilhak: IGI v11 s.262 'in 1836 Nao Nihal Singh ... annexed the District to the territories of Lahore' ‖ 1849-03-29→1923-10-29 ingiliz-hindistani (gün (bitiş: pencere sonu)): Journal of Indian Studies 10/1: 'Punjab was annexed to the British Empire on March 29, 1849' · IGI v11 s.262: 'The District then passed quietly under British rule'",
  s:[{f:"1739-01-01",t:"1747-10-01",d:"afsar"},
     {f:"1747-10-01",t:"1821-01-01",d:"afgan-durrani"},
     {f:"1821-01-01",t:"1849-03-29",d:"sih-imparatorlugu"},
     {f:"1849-03-29",t:"1923-10-29",d:"ingiliz-hindistani"}] },

{ ad:"Bannu (Edwardesabad)", tur:"sehir", lat:32.99, lon:70.6, g:0, k:0, kur:"1848-01-01",
  neden:"NOKTASIZLIK-ADAY-0917 k14 kümesi 32,34K/69,34D (Gazne–Peşâver–Kâbil boşluğu) — Bannu vadisi noktasızdı. En yakın mevcut nokta: Peşâver 145 km.",
  not:"Şehir 1848 kuruluşlu olduğu için zincir kısa ve temiz. Ama nokta vadinin 1848 öncesini TEMSİL ETMEZ: o dönemde vadi Peşaver/Gazne peteklerine emilir ve oralar babur/afsar/durrani/afganistan boyar — oysa IGI vadinin fiilen bağımsız olduğunu söylüyor (§2 emilme). Gerekirse 'Bazar Ahmad Khan' ayrı noktası + kabile/devlet_yok kararı. 🔴 KODLANMAYAN: Kur ÖNCESİ vadi (nokta kapsamaz, bilgi için): IGI v6 s.394 — Ekber'den itibaren iki asır 'nominal allegiance to the Delhi emperors'; 1738 Nadir; Dürrânî haraç akınları ama 'neither conqueror made any attempt to establish a permanent government'; 1823'ten 1836'ya Sih ve Navab akınları; 1838 Sih'e terk. Edwardes 1847'de 'a large portion of the District practically independent' buldu ⇒ vadi 1838 öncesi fiilen DEVLET YOK / kabile (Bannuçi, Mervet). Vadiyi temsil edecek eski merkez: IGI v6 s.402 'the commercial centre of the Bannu valley prior to annexation' — ayrı nokta gerekirse. | Sih'e geçiş yılı ÇELİŞKİLİ: IGI v6 s.394 '1838 ... cession to the Sikhs'; DİK Gaz. 1883 s.39 Nao Nihal Singh'in 1836 Bannu seferi. Kur 1848 olduğu için noktayı etkilemiyor.",
  kaynak:"TDV bennu (302 ÖLÜ) · TDV bannu (302 ÖLÜ) · TDV vezirler / vezir-kabilesi / pestunlar / afganlar (302 ÖLÜ) · Imperial Gazetteer of India v6 s.394, 395, 401, 402 (DSAL sayfa görüntüleri OKUNDU) · Punjab District Gazetteer DIK 1883 s.39 (okundu) · Punjab District Gazetteer Bannu 1883 (archive.org gaz-bannu-district-1883, indirildi, OKUNMADI) · Journal of Indian Studies 10/1 (okundu). · KURULUŞ: IGI v6 s.402 (Bannu Town): 'It was founded in 1848 by Lieutenant (afterwards Sir Herbert) Edwardes' · kale 'Dhulipgarh ... in honour of the Maharaja of Lahore' · DÖNEM DAYANAKLARI: 1848-01-01→1849-03-29 sih-imparatorlugu (yıl): IGI v6 s.394: 'In 1838 the valley passed by cession to the Sikhs'; Edwardes 'representative of the Lahore Darbar' olarak geldi · IGI v6 s.402: kale Lahor mihracesi adına 'Dhulipgarh' ‖ 1849-03-29→1923-10-29 ingiliz-hindistani (gün (bitiş: pencere sonu)): IGI v6 s.395: 'the following year the Punjab was annexed, and the District passed without a blow under British administration' · Journal of Indian Studies 10/1: 'annexed ... on March 29, 1849'",
  s:[{f:"1848-01-01",t:"1849-03-29",d:"sih-imparatorlugu"},
     {f:"1849-03-29",t:"1923-10-29",d:"ingiliz-hindistani"}] },

{ ad:"Vitim (Vitimskoye zimov'e / Vitimskiy ostrog)", tur:"kale", lat:59.45, lon:112.56, g:0, k:0, kur:"1661-01-01",
  neden:"NOKTASIZLIK-ADAY-0917 'Vitim-Lena' kümesi 57,36K/111,99D (118.578 km², komşular Bodaybo · Kirensk · Bauntovsk) — Lena–Vitim kavşağı noktasızdı. En yakın mevcut nokta: Bodaybo 202 km.",
  not:"kur ÜST SINIRDIR (1661 ilk kayıt). 1917 geçişleri künye günleridir (yere özgü kaynak okunamadı). Komşu Kirensk kur'suz 1630'dan rusya kullanıyor — komşu kayıt dayanak alınmadı. Kolçak/Sibirya Geçici Hükümeti künyesi yok (eksik_kimlik). 🔴 KODLANMAYAN: Kuruluş yılı (1621? 1623-1638?) — kaynaklar çelişkili/dayanaksız, yazılmadı. | Kur öncesi: Tunguz (Evenk) / Yakut toprağı, devlet yok — kur ile bırakıldı. | 1918-1920 İç Savaş: bölge (Kirensk uyezdi, İrkutsk guberniyası) Beyaz Sibirya/Kolçak yönetiminde kaldı; kimlik YOK ve bu partide Sovyet kontrolüne geçiş için kaynak OKUNMADI ⇒ kırılma yazılmadı.",
  kaynak:"ESBE 'Витим, слобода' (ru.wikisource, okundu) · CyberLeninka 'Витим в поисках будущего' (okundu) · CyberLeninka 'Начало русского освоения Забайкалья' (okundu — başka yer) · Britannica 'Russian Revolution' (403, OKUNAMADI). · KURULUŞ: ÜST SINIR — ilk kayıt yılı, kuruluş değil. Kuruluş yılı BULUNAMADI. ESBE 'Витим, слобода': 'Селение существовало уже в 1661 г. под названием Витимского зимовья'. Hakemli makale 'Витим в поисках будущего' (CyberLeninka): kuruluş tarihi bir 'белое пятно' — ansiklopedilerin 1621'i belgeye dayanmıyor, Rusların Lena'ya çıkışı en erken 1623/1626; 1685'te 'четырнадцать крестьянских дворов'. ⚠ Perfilyev'in 1639 zimov'esi ('Начало русского освоения Забайкалья', CyberLeninka) BU YER DEĞİL: 'в устье реки Котомары (Кутомалы)', Vitim'in yukarısında — karıştırılmamalı. ⇒ kur için 1661 ilk-kayıt önerildi; koordinatör reddederse nokta 'bulunamadi' kalır. · DÖNEM DAYANAKLARI: 1661-01-01→1917-03-15 rusya (yıl (başlangıç = ilk kayıt)): ESBE 'Витим, слобода': 'существовало уже в 1661 г. под названием Витимского зимовья' (Rus yasak zimov'esi) · makale: 1751 'прибыли в Витимский острог'; Tatişçev 1744-46 'Витимский острог в Якутской провинции' ‖ 1917-03-15→1917-11-07 rusya-gecici-hukumet (gün — künye kalıbı (bu partide 1917 kaynağı OKUNAMADI: Britannica 403)): künye rusya-gecici-hukumet f/t (brif gereği kalıp korundu) ‖ 1917-11-07→1923-10-29 sovyet-rusya (gün — künye kalıbı; bitiş pencere sonu): künye sovyet-rusya f (brif gereği kalıp korundu)",
  s:[{f:"1661-01-01",t:"1917-03-15",d:"rusya"},
     {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
     {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"İlimsk (Ilimskiy ostrog)", tur:"kale", lat:56.77, lon:103.87, g:0, k:0, kur:"1630-01-01",
  neden:"NOKTASIZLIK-ADAY-0917 k24 kümesi 57,93K/102,01D (24.230 km², komşu Bratsk ostrogu) — Lena taşıma yolunun (Ленский волок) başı noktasızdı. En yakın mevcut nokta: Bratsk ostrogu 139 km.",
  not:"1917 geçişleri künye günleridir (yere özgü kaynak okunamadı). SİE maddesi dolaylı (academic.ru önizleme) okundu; kısaltılmış metin. 1630 'kuruluş' bir zimov'e/geçit yeri; ostrog statüsü 1640'lar — veri şemasında 'kale' için ikisi aynı kova. Kolçak kimliği eksik. 🔴 KODLANMAYAN: Kur öncesi: Tunguz (Evenk) toprağı, devlet yok. | 1918-1920 Beyaz Sibirya/Kolçak dönemi (İrkutsk guberniyası) — kimlik yok, kaynak okunmadı, kırılma yazılmadı.",
  kaynak:"academic.ru east_sibir_toponyms 'Ленский Волок' (okundu; Melheev 1969 + SİE 'Илимск' alıntısı) · radischev.ru 'Илимск' (okundu; müze sitesi — dayanak olarak KULLANILMADI, yalnız 1630'u teyit) · irkipedia.ru IES 2009 (404/ECONNREFUSED) · bsk.nios.ru (503) · CyberLeninka 'Русский острог в Сибири...' (okundu; İlimsk kazısına atıf, kuruluş yılı yok). · KURULUŞ: Sovetskaya istoriçeskaya ensiklopediya (academic.ru üzerinden alıntı, okundu): 'ИЛИМСК — ... Осн. в 1630 как поселение Ленский волок, переим. в Илимский острог' · Melheev, Географические названия Восточной Сибири (Irkutsk 1969) 'Ленский волок': 'Путь был открыт в 1630 г. ... Начинался он с Илимского острога'. Kurucu (Yenisey atamanı İvan Galkin), 1640 küçük ostrog, 1647 Demyanov ostrogu, 1666 yangın / 1667 yeniden kuruluş bilgileri yalnız arama özetlerinden (Историческая энциклопедия Сибири 2009 — irkipedia/bsk.nios.ru sayfaları 404/503/ECONNREFUSED, OKUNAMADI). · DÖNEM DAYANAKLARI: 1630-01-01→1917-03-15 rusya (yıl): SİE 'Илимск': 'Осн. в 1630 как поселение Ленский волок, переим. в Илимский острог' · Radişçev sürgünü 1792-97 (aynı madde) ⇒ Rus idaresi sürekli ‖ 1917-03-15→1917-11-07 rusya-gecici-hukumet (gün — künye kalıbı (kaynak okunamadı)): künye rusya-gecici-hukumet f/t ‖ 1917-11-07→1923-10-29 sovyet-rusya (gün — künye kalıbı; bitiş pencere sonu): künye sovyet-rusya f",
  s:[{f:"1630-01-01",t:"1917-03-15",d:"rusya"},
     {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
     {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Hengyang (Hengzhou)", tur:"sehir", lat:26.89, lon:112.57, g:0, k:0,
  neden:"NOKTASIZLIK-ADAY-0917 DAĞ kümesi 'Guilin-Şaoguan' 26,78K/114,35D (145.083 km²) — Xiang ırmağı orta havzası noktasızdı (Changsha 153 km). En yakın mevcut nokta: Changsha 153 km.",
  not:"__BOSLUK__ dilimleri künyesi olmayan rejimlerdir ya da sahibi bulunamamıştır (gerekçesi dilimde) — 'kimsenin değil' DEĞİL. Kısa vadeli karşılıklı el değiştirmeler (1648-49, 1652-53) kodlanmadı; veri bu iki dilimi Qing gösterecek. Wu Sangui'nin 1678 tahta çıkışı san-fan dilimi içinde. 1911 günü eyalet başkentinin (Changsha) günüdür — şehir düzeyinde ayrı gün bulunamadi; il yönetimi o gün Qing'den koptuğu için kullanıldı. 🔴 KODLANMAYAN: 1356-09-17 → 1368-01-23 BOŞ: Yuan Shi 卷44 aynı yıl 十二月 '也先帖木兒…合兵復衡州' (Yuan geri aldı, ~1357 başı); 1357-1364 arası şehir düzeyinde sahip bulunamadi (Ming Shi 卷123: Chen Youliang 1360'ta '盡有江西、湖廣地' — bölge hükmü, şehre taşınmadı); 1364-12 → 1368-01-23 Zhu Yuanzhang'ın Wu rejimi (künye yok). Bkz. eksik_kimlik | 1352 (至正12年三月): Yuan Shi 卷42 '徐壽輝偽將許甲攻衡州，洞官黃安撫敗之' — saldırı püskürtüldü, sahiplik değişmedi | 1354: Yuan Shi 卷43 '徭賊自耒陽寇衡州' — baskın, düşüş yok | 1648 sonu–1649 başı Güney Ming geri alışı: Ming Shi 卷280 瞿式耜傳 '十一月，永州、寶慶、衡州並復' (順治5年11月 ≈ Aralık 1648); Qing'in yeniden alışı 1649 (Ming Shi 卷279 '胤錫與胡一青守衡州，戰敗走桂陽'; 清史稿 卷4 '衡州悉平'); iki uç da gün/ay düzeyinde kesin değil, süre birkaç ay → kodlanmadı | 1652 sonu Li Dingguo (Güney Ming) zaferi: 清史稿 卷5 順治九年十一月 Nikan Hengzhou önlerinde öldü ('尼堪薨于軍'); Ming'in şehri tutup tutmadığı ve süresi bulunamadi | Taiping: Hengzhou hiç düşmedi — ECCP I (Hsü Kuang-chin): Hsü 1852'de Heng-chou'dan kuzeye geçti; 1854'te Zeng Guofan ordusu buradan çıktı (清史稿 卷20 '自衡州起程')",
  kaynak:"Yuan Shi 卷42-44 (zh.wikisource ham, okundu) · Ming Shi 卷1, 2, 123, 125, 134, 279, 280 (okundu) · 清史稿 卷4, 5, 6, 20, 25 (okundu) · ECCP cilt I (Jangtai, Labu, Hsü Kuang-chin maddeleri, okundu) · Britannica 'Hengyang' (K. Pletcher, tarayıcıyla okundu) · Britannica 'Wu Sangui' (okundu) · TDV cin--ulke 200 okundu (şehir düzeyi bilgi YOK) · TDV hunan 302 · KURULUŞ: Britannica 'Hengyang' (K. Pletcher): 'About 224 CE Linzheng county was established there' — 1281'den önce · DÖNEM DAYANAKLARI: 1281-01-01→1356-09-17 yuan-hanedani (gün): Yuan Shi 卷44 至正十六年八月: '庚午，倪文俊陷衡州路，元帥甄崇福戰死' (Tianwan komutanı Ni Wenjun). 八月 ayının 朔'u kaynakta yok; aynı ayda geçen 丙辰·己未·丁卯·甲戌 günleriyle hesap ay başı 己酉=1356-08-27 tutarlı → 庚午=1356-09-17 (Julyen) ‖ 1368-01-23→1644-04-25 ming-hanedani (pencere): künye penceresi (Ming 1368-01-23 hanedan ilanı = Ming Shi 卷2 '洪武元年春正月乙亥…即皇帝位'). Hengzhou'nun Zhu Yuanzhang'a geçişi daha önce: Ming Shi 卷1 至正二十四年十二月 '庚寅，達克辰州，遣別將下衡州' (~1364-12/1365-01) ‖ 1644-04-25→1647-07-25 guney-ming (gün (kayıt)): başlangıç künye penceresi. Bitiş: 清史稿 卷4 順治四年六月 '癸巳 … 湖廣官軍克衡州、常德' (kayıt günü; ay içindeki 壬申 ile sınandı → 1647-07-25). Ming Shi 卷280 何騰蛟傳 aynı yıl: '大兵遂下衡、永' ‖ 1647-07-25→1674-03-26 qing-hanedani (gün (kayıt)): 清史稿 卷6 康熙十三年二月(乙未朔): '甲寅，吳三桂陷長沙 … 旁陷衡州' → 1674-03-26 ‖ 1674-03-26→1679-03-24 san-fan (gün (kayıt)): 清史稿 卷6 康熙十八年二月: '戊寅，簡親王喇布遣前鋒統領希佛復衡州' → 1679-03-24. ECCP I s.~(Labu): 'at the beginning of 1679 he recovered Heng-chou'. Arada Britannica 'Wu Sangui': 'In March 1678 Wu set up his own dynasty … in Hengzhou' (清史稿: '吳三桂僭號于衡州') ‖ 1679-03-24→1911-10-22 qing-hanedani (gün): 清史稿 卷25 宣統三年: '九月乙丑朔 … 湖南新軍變，巡撫余誠格奔於兵艦' → 1911-10-22 (Hunan eyaleti; il merkezi Changsha) ‖ 1911-10-22→1923-10-29 cin-cumhuriyeti (gün): aynı kayıt; bitiş pencere sonu",
  s:[{f:"1281-01-01",t:"1356-09-17",d:"yuan-hanedani"},
     {f:"1356-09-17",t:"1368-01-23",d:"__BOSLUK__"},
     {f:"1368-01-23",t:"1644-04-25",d:"ming-hanedani"},
     {f:"1644-04-25",t:"1647-07-25",d:"guney-ming"},
     {f:"1647-07-25",t:"1674-03-26",d:"qing-hanedani"},
     {f:"1674-03-26",t:"1679-03-24",d:"san-fan"},
     {f:"1679-03-24",t:"1911-10-22",d:"qing-hanedani"},
     {f:"1911-10-22",t:"1923-10-29",d:"cin-cumhuriyeti"}] },

{ ad:"Ji'an (Jizhou)", tur:"sehir", lat:27.11, lon:114.98, g:0, k:0,
  neden:"NOKTASIZLIK-ADAY-0917 k14 kümesi 27,25K/116,25D (11.815 km², komşu Nanchang) — Gan ırmağı orta havzası noktasızdı (Nanchang 195 km). En yakın mevcut nokta: Nanchang 195 km.",
  not:"__BOSLUK__ dilimleri künyesi olmayan rejimlerdir ya da sahibi bulunamamıştır (gerekçesi dilimde) — 'kimsenin değil' DEĞİL. 1646 geçişi yıl hassasiyetinde (kaynak yalnız kamerî ay veriyor): veri Ocak-Nisan 1646'yı Qing gösterecek. San-Fan bitişi üst sınır. 1911 günü eyalet başkentinin günü. 🔴 KODLANMAYAN: 1352 (至正12年閏三月乙酉, ≈1352-04-26 Julyen): Yuan Shi 卷42 '徐壽輝偽將陳普文陷吉安路，鄉民羅明遠起義兵復之' — kısa Tianwan işgali, geri alış günü yok | 1358-06-19 → 1368-01-23 BOŞ: Tianwan/Chen Han (1358-62), 1362 Zhu'ya teslim (Ming Shi 卷1 至正二十二年正月 '袁、瑞、臨江、吉安相繼下'), Xiong Tianrui eliyle yeniden Han'a geçiş (Ming Shi 卷123 '攻陷臨江、吉安'), 1364-08 Zhu (Wu rejimi). Hiçbirinin künyesi yok → eksik_kimlik | 1643: Zhang Xianzhong baskını — Ming Shi 卷279 '張獻忠…分兵陷袁州、吉安', kısa süre sonra Ming geri aldı ('峽江、永新二郡皆復'); günler yok | 1645 Qing kısa işgali: Ming Shi 卷278 萬元吉傳 順治二年 '六月，我大清兵已取…吉安', Ming geri alışı 楊廷麟傳 '九月…乘虛復吉安、臨江' — ~3 ay, gün yok | 1648-49 Jin Shenghuan isyanı (Nanchang, 清史稿 卷4 順治五年 '金聲桓及王得仁以南昌叛'): Ji'an'ın isyana katılıp katılmadığı bulunamadi | 1861: 清史稿 卷21 咸豐十一年七月 '辛亥，粵匪陷吉安' (≈1861-08-30, kayıt) — Qing geri alışı bulunamadi; Li Xiucheng'in geçici geçişi olmalı, kodlanmadı",
  kaynak:"Yuan Shi 卷42, 45 · Ming Shi 卷1, 123, 278, 279 · 清史稿 卷4, 6, 20, 21, 25 · ECCP cilt I (Labu) — hepsi okundu. Britannica 'Ji'an' maddesi açılmadı (zaman). TDV: şehir maddesi aranmadı (TDV Çin iç şehirlerini kapsamıyor, cin--ulke okundu, şehir bilgisi yok) · KURULUŞ: Yuan Shi 卷42 1352'de 吉安路'dan söz ediyor — 1281 öncesi idarî birim; kuruluş günü aranmadı · DÖNEM DAYANAKLARI: 1281-01-01→1358-06-19 yuan-hanedani (gün): Yuan Shi 卷45 至正十八年 '五月戊戌朔 … 庚戌，陳友諒陷吉安路' → 1358-06-19 (Julyen; 朔 kaynakta verili, hesapla birebir). Ming Shi 卷123 aynı olayı '明年…分兵取邵武、吉安' diye anar ‖ 1368-01-23→1644-04-25 ming-hanedani (pencere): künye penceresi; Zhu'nun son alışı Ming Shi 卷1 至正二十四年 '八月戊戌，復吉安，遂圍贛州' (~1364-09-03 Julyen) ‖ 1644-04-25→1646-01-01 guney-ming (yıl): Ming Shi 卷278 蘇觀生傳: '(順治)三年三月，大兵破吉安' — ay kamerî 3. ay (≈Nisan 1646), gün yok → yıl ‖ 1646-01-01→1676-04-05 qing-hanedani (gün (kayıt)): 清史稿 卷6 康熙十五年二月: '乙亥，吳三桂將高大傑陷吉安' → 1676-04-05; ECCP I (Labu): Han Ta-jen ve Kao Ta-chieh 'occupying Chi-an in 1676' ‖ 1676-04-05→1677-04-30 san-fan (gün (üst sınır)): 清史稿 卷6 康熙十六年三月 '乙巳 … 喇布鎮吉安' (Labu'ya Ji'an'da garnizon emri → şehir Qing elinde) → 1677-04-30. Alt sınır: aynı yıl '正月丙申，將軍額楚攻吉安失利' (1677-02-20, hâlâ San-Fan). ECCP I (Labu): kuşatma, 'by the following spring … Han Ta-jen and his men escaped'. Gerçek düşüş günü bulunamadi; 02-20 ile 04-30 arası ‖ 1677-04-30→1856-04-09 qing-hanedani (gün (kayıt)): 清史稿 卷20 咸豐六年三月: '壬戌 … 江西賊陷吉安' (Taiping) → 1856-04-09 ‖ 1856-04-09→1858-10-15 taiping (gün (kayıt)): 清史稿 卷20 咸豐八年 '九月癸酉朔 … 辛巳 … 湖南官軍克復吉安，予同知曾國荃等升敘' → 1858-10-15 (kayıt; asıl alış birkaç hafta önce olabilir, bulunamadi) ‖ 1858-10-15→1911-10-31 qing-hanedani (gün): 清史稿 卷25 宣統三年九月(乙丑朔): '甲戌，江西新軍變，巡撫馮汝骙走九江' → 1911-10-31 (eyalet başkenti Nanchang) ‖ 1911-10-31→1923-10-29 cin-cumhuriyeti (gün): aynı kayıt; bitiş pencere sonu",
  s:[{f:"1281-01-01",t:"1358-06-19",d:"yuan-hanedani"},
     {f:"1358-06-19",t:"1368-01-23",d:"__BOSLUK__"},
     {f:"1368-01-23",t:"1644-04-25",d:"ming-hanedani"},
     {f:"1644-04-25",t:"1646-01-01",d:"guney-ming"},
     {f:"1646-01-01",t:"1676-04-05",d:"qing-hanedani"},
     {f:"1676-04-05",t:"1677-04-30",d:"san-fan"},
     {f:"1677-04-30",t:"1856-04-09",d:"qing-hanedani"},
     {f:"1856-04-09",t:"1858-10-15",d:"taiping"},
     {f:"1858-10-15",t:"1911-10-31",d:"qing-hanedani"},
     {f:"1911-10-31",t:"1923-10-29",d:"cin-cumhuriyeti"}] },

{ ad:"Ganzhou", tur:"sehir", lat:25.85, lon:114.93, g:0, k:0,
  neden:"NOKTASIZLIK-ADAY-0917 DAĞ kümesi 'Guilin-Şaoguan' 26,78K/114,35D — Gan ırmağı yukarı havzası noktasızdı (Şaoguan 178 km). En yakın mevcut nokta: Şaoguan 178 km.",
  not:"__BOSLUK__ dilimleri künyesi olmayan rejimlerdir ya da sahibi bulunamamıştır (gerekçesi dilimde) — 'kimsenin değil' DEĞİL. San-Fan döneminde Ganzhou'nun Qing'de kaldığı yalnız dolaylı kanıtla (1677 garnizon emri) biliniyor; 1674-76 için şehir düzeyinde kayıt bulunamadi. 🔴 KODLANMAYAN: 1358-11-01 → 1368-01-23 BOŞ: Chen Han valisi Xiong Tianrui (Ming Shi 卷123: '友諒俾以參知政事，守贛'), 1365-02-01'den sonra Zhu'nun Wu rejimi — künye yok → eksik_kimlik | Qing döneminde şehrin DÜŞMEDİĞİ saldırılar (kodlanacak bir şey yok, kayıt için): 1648 Jin Shenghuan kuşatması (清史稿 順治五年八月 '寇贛州，官軍擊走之'); 1648 Li Chengdong (十一月 '犯贛州…擊走之'); 1677 Qing garnizonu ('舒恕防贛州'); 1856 Taiping kuşatması kaldırıldı (清史稿 卷20 咸豐六年七月 '解贛州城圍')",
  kaynak:"Yuan Shi 卷45, 46 · Ming Shi 卷1, 123, 278 · 清史稿 卷4, 6, 20, 25 — okundu · Britannica 'Ganzhou' (tarayıcıyla okundu; curl/WebFetch 403) · TDV ganzhou 302 ÖLÜ · KURULUŞ: Britannica 'Ganzhou': 'became a county seat in the 3rd century CE' — 1281 öncesi · DÖNEM DAYANAKLARI: 1281-01-01→1358-11-01 yuan-hanedani (gün): Yuan Shi 卷45 至正十八年 '九月丁酉朔 … 乙丑，陳友諒陷贛州路，江西行省參知政事全普庵撒里…死之' → 1358-11-01 (Julyen; 朔 kaynakta verili) ‖ 1368-01-23→1644-04-25 ming-hanedani (pencere): künye penceresi; Zhu'ya geçiş: Yuan Shi 卷46 至正二十五年正月 '己巳 … 偽漢守將熊天瑞以贛州及韶州、南雄降于大明' (≈1365-02-01 Julyen); Ming Shi 卷1 '常遇春克贛州，熊天瑞降' ‖ 1644-04-25→1646-11-18 guney-ming (gün (kayıt)): 清史稿 卷4 順治三年十月: '甲申 … 金聲桓遣將克贛州，獲故明閣部楊廷麟殺之' → 1646-11-18. Ming Shi 卷278 萬元吉傳: '十月初，大兵用向導夜登城 … 城遂破' (10. ay başı = 1646-11-07'den sonra) — tutarlı ‖ 1646-11-18→1911-10-31 qing-hanedani (gün): 清史稿 卷25 宣統三年九月: '甲戌，江西新軍變' → 1911-10-31 (eyalet başkenti) ‖ 1911-10-31→1923-10-29 cin-cumhuriyeti (gün): aynı kayıt; bitiş pencere sonu",
  s:[{f:"1281-01-01",t:"1358-11-01",d:"yuan-hanedani"},
     {f:"1358-11-01",t:"1368-01-23",d:"__BOSLUK__"},
     {f:"1368-01-23",t:"1644-04-25",d:"ming-hanedani"},
     {f:"1644-04-25",t:"1646-11-18",d:"guney-ming"},
     {f:"1646-11-18",t:"1911-10-31",d:"qing-hanedani"},
     {f:"1911-10-31",t:"1923-10-29",d:"cin-cumhuriyeti"}] },

{ ad:"Chenzhou (Hunan)", tur:"sehir", lat:25.77, lon:113.01, g:0, k:0,
  neden:"NOKTASIZLIK-ADAY-0917 DAĞ kümesi 'Guilin-Şaoguan' — Hunan–Guangdong geçidi (Nanling kuzeyi) noktasızdı (Şaoguan 123 km). En yakın mevcut nokta: Şaoguan 123 km.",
  not:"İki San-Fan kırılması şartlı komşu günüyle kuruldu (§4: komşunun günü kendi kaynağına dayanıyor, hedefte gün yok, aynı sefer, yazıldı). Gerçekte Chenzhou Hengzhou'dan birkaç hafta sonra düşmüş/kurtarılmış olabilir. 1368 Yuan→Ming günü iki kaynak arasında ~10 gün gerilimli (Yuan Shi 06-29 toplu kayıt · Ming Shi sıralaması 07-08 sonrası). 🔴 KODLANMAYAN: 1352-1368 arası Tianwan/Chen Han denetimi şehir düzeyinde BULUNAMADI; Yuan dilimi 1368'e kadar kesintisiz kodlandı ama bu yalnız Yuan Shi'nin 1368'de Chenzhou'yu Yuan'dan alınan Guangxi şehirleriyle birlikte saymasına dayanıyor (Ming Shi 卷123 Chen Han'ın 1360'ta '盡有…湖廣地' dediği bölge hükmüyle gerilimli) | 1646: Ming Shi 卷280 '永忠…五月始抵郴州' — Güney Ming birlikleri şehirde (sahiplik zaten guney-ming) | 1648-49 Güney Ming karşı saldırısı ve 1649 '赤心等走廣西，緣道掠衡、永、郴、桂' (Ming Shi 卷279) — yağma geçişi, sahiplik günleri yok | 1677-78: 清史稿 卷6 康熙十六年十二月 '命…額楚進取郴、永' (Qing henüz almamış) ve 康熙十七年六月 '吳三桂兵犯郴州，副都統碩岱與戰，不利，奔永興' (≈1678-08, Qing şehirdeydi ve kaybetti) → 1678'de kısa bir Qing dönemi var, başlangıç günü bulunamadi | Taiping 1852: ECCP I (Hung Hsiu-ch'üan): 'On August 16 they went to Ch'en-chou' (1852-08-16); 清史稿 卷20 '壬申，洪秀全攻陷郴州' (kayıt 1852-09-07); çıkış günü yok (ana kuvvet Ekim 1852'de Changsha önünde) — ~2 ay, bitişi belirsiz → kodlanmadı (istenirse taiping 1852-08-16 → ? ) | 1855: 清史稿 卷20 咸豐五年七月朔 '廣東賊陷湖南郴州、宜章' — Guangdong Kızıl Sarıklı isyancıları, Taiping değil, künye yok | 1859: 清史稿 卷20 '江西賊竄湖南郴州、桂陽' — Shi Dakai ordusunun geçişi, düşüş kaydı yok",
  kaynak:"Yuan Shi 卷42, 47 · Ming Shi 卷2, 123, 129, 279, 280 · 清史稿 卷4, 6, 20, 25 · ECCP cilt I (Chiang Chung-yüan, Hung Hsiu-ch'üan, Labu) — okundu · Britannica 'Chenzhou' açılmadı · KURULUŞ: Yuan Shi 卷42 tashih notu Yuan döneminde '郴州路'dan söz ediyor — 1281 öncesi; kuruluş günü aranmadı · DÖNEM DAYANAKLARI: 1281-01-01→1368-06-29 yuan-hanedani (gün): Yuan Shi 卷47 至正二十八年 '六月庚子朔 … 癸丑，大明兵取全州、郴州、梧州、藤州…' → 1368-06-29 (Julyen; 朔 verili). ⚠ Bu bir TOPLU kayıt (全州'ı Ming Shi 卷2 üç ay önce veriyor); Ming Shi 卷129 楊璟傳 Chenzhou'yu 靖江 (Guilin) düşüşünden SONRA sayar ('復移師徇郴州'), Ming Shi 卷2 靖江 düşüşü 六月壬戌=1368-07-08 ‖ 1368-06-29→1644-04-25 ming-hanedani (gün): yukarıdaki kayıt; bitiş künye penceresi ‖ 1644-04-25→1648-01-14 guney-ming (gün (kayıt, bölge)): 清史稿 卷4 順治四年十二月 '丙戌，大軍自岳州收長沙 … 湖南平' → 1648-01-14. Şehir adıyla anılmıyor — BÖLGE hükmü (Changsha-Hengzhou-Baoqing-Jingzhou seferinin özeti) ‖ 1648-01-14→1674-03-26 qing-hanedani (gün): gün komşudan: Hengyang · 清史稿 卷6 康熙十三年二月甲寅 '吳三桂陷長沙…旁陷衡州' — aynı sefer (Wu Sangui'nin 1674 Hunan ilerleyişi, Britannica 'Wu Sangui': 'In 1674 he advanced into central China'), Hengzhou ~150 km kuzeyde; Chenzhou için kaynakta gün yok ‖ 1674-03-26→1679-03-24 san-fan (gün): gün komşudan: Hengyang · 清史稿 卷6 康熙十八年二月戊寅 '喇布遣前鋒統領希佛復衡州' + ECCP I (Labu) 'recovered Heng-chou and other cities, continuing on into Kwangsi' — aynı sefer; Chenzhou için gün yok ‖ 1679-03-24→1911-10-22 qing-hanedani (gün): 清史稿 卷25 宣統三年 '九月乙丑朔 … 湖南新軍變' → 1911-10-22 (Hunan) ‖ 1911-10-22→1923-10-29 cin-cumhuriyeti (gün): aynı kayıt; bitiş pencere sonu",
  s:[{f:"1281-01-01",t:"1368-06-29",d:"yuan-hanedani"},
     {f:"1368-06-29",t:"1644-04-25",d:"ming-hanedani"},
     {f:"1644-04-25",t:"1648-01-14",d:"guney-ming"},
     {f:"1648-01-14",t:"1674-03-26",d:"qing-hanedani"},
     {f:"1674-03-26",t:"1679-03-24",d:"san-fan"},
     {f:"1679-03-24",t:"1911-10-22",d:"qing-hanedani"},
     {f:"1911-10-22",t:"1923-10-29",d:"cin-cumhuriyeti"}] },

{ ad:"Xinyang", tur:"sehir", lat:32.13, lon:114.07, g:0, k:0,
  neden:"NOKTASIZLIK-ADAY-0917 k14 kümesi 31,87K/114,75D (17.048 km², komşular Wuchang · Jiujiang) — Huai yukarı havzası noktasızdı (Wuchang 176 km). En yakın mevcut nokta: Wuchang (Wuhan) 176 km.",
  not:"__BOSLUK__ dilimleri künyesi olmayan rejimlerdir ya da sahibi bulunamamıştır (gerekçesi dilimde) — 'kimsenin değil' DEĞİL. İki büyük boşluk (1351-1368, 1644-1645) bilinçli bırakıldı. Ming başlangıcı ay başı üst sınırı; kaynak gün vermiyor ve YYYY-01-01 kodlaması künye başından (1368-01-23) önceye düşerdi. 🔴 KODLANMAYAN: 1351-01-01 → 1368-11-11 BOŞ: Kızıl Sarıklı Song rejimi (Liu Futong/Han Lin'er) ile Yuan sadıkları (Chaghan Temür; Luoshan'lı Li Siqi 1352'de Yuan için asker topladı — Yuan Shi 卷42) arasında gidip gelme; Ming Shi 卷42 '後廢' (idare kaldırıldı). Şehir düzeyinde sahip bulunamadi | 1641: Zhang Xianzhong Xinyang'da yenildi (ECCP I s.~Chang Hsien-chung: 'defeated in 1641 by Tso Liang-yü at Hsin-yang'); Ming Shi 卷309 Zhang'ın '殘…信陽' yağması — Ming sahipliği sürdü | 1642: Ming Shi 卷309 Li Zicheng '由確山、信陽、泌陽向襄陽' — geçiş, işgal kaydı yok | 1644-04-25 → 1645-09-08 BOŞ: Dashun (Li Zicheng) / Güney Ming'e bağlı yerel güç Liu Hongqi (劉洪起) — hangisinin elinde olduğu bulunamadi. 'dashun' künyesi 1644-1647 var ama şehre atanamadı (kanıt yok) | 1853-54 Taiping: 清史稿 卷20 咸豐四年 '英桂赴信陽防堵' — savunma, düşüş yok | 1864: 清史稿 卷21 同治三年 '免河南信陽等處被擾額賦' — baskın (Taiping batı kolu/Nian), işgal süresi yok",
  kaynak:"Yuan Shi 卷42 · Ming Shi 卷2, 42, 126, 309 · 清史稿 卷4, 20, 21, 25 · ECCP cilt I (Chang Hsien-chung) — okundu · Britannica 'Xinyang' açılmadı · KURULUŞ: Ming Shi 卷42: '信陽州元爲信陽縣，屬信陽州，後廢。洪武元年十月置信陽州於此' — yer Yuan'da ilçe merkeziydi (1281 öncesi), Yuan sonunda idare KALDIRILDI, Ming 1368'de yeniden kurdu. Yuan'da 信陽州 merkezi Luoshan'daydı ('羅山：元信陽州治') · DÖNEM DAYANAKLARI: 1281-01-01→1351-01-01 yuan-hanedani (yıl): Yuan Shi 卷42 至正十一年六月: '是月，劉福通據朱臯，攻破羅山、真陽' — Luoshan Yuan 信陽州'ın merkezi; ay var gün yok → yıl. ⚠ Xinyang ilçesinin kendisi anılmıyor ‖ 1368-11-11→1644-04-25 ming-hanedani (ay başı (üst sınır)): Ming Shi 卷42: '洪武元年十月置信陽州於此' → 洪武元年十月 = 1368-11-11..12-09 (Julyen; ay başı 戊辰, 8. ay başının Yuan künye sonu 1368-09-14=八月庚午 ile tutarlılığıyla sınandı). Ming denetimi büyük olasılıkla daha erken (Ming Shi 卷2 1368 四月 '河南平') ama şehir düzeyinde gün bulunamadi ‖ 1645-09-08→1912-02-12 qing-hanedani (gün (kayıt, bölge)): 清史稿 卷4 順治二年七月(庚戌朔): '戊辰，西平賊首劉洪起伏誅，汝寧州縣悉平' → 1645-09-08 (Xinyang Ming'de 汝寧府'a bağlıydı). Bitiş: Henan 1911'de ayrılmadı — 清史稿 卷25 宣統三年十月 '丁未…以齊耀琳為河南巡撫' (Qing atama yapıyor); bitiş = künye sonu (tahttan çekilme) ‖ 1912-02-12→1923-10-29 cin-cumhuriyeti (pencere): Qing tahttan çekilmesi (künye); bitiş pencere sonu",
  s:[{f:"1281-01-01",t:"1351-01-01",d:"yuan-hanedani"},
     {f:"1351-01-01",t:"1368-11-11",d:"__BOSLUK__"},
     {f:"1368-11-11",t:"1644-04-25",d:"ming-hanedani"},
     {f:"1644-04-25",t:"1645-09-08",d:"__BOSLUK__"},
     {f:"1645-09-08",t:"1912-02-12",d:"qing-hanedani"},
     {f:"1912-02-12",t:"1923-10-29",d:"cin-cumhuriyeti"}] }

];

;
/* ==== data/yerlesimler_nokta_ortadogu_0917.js ==== */
// ============================================================================
// YERLEŞİM — NOKTASIZLIK DOLGUSU · Orta Doğu (D4-ORTADOGU / NOKTA-ARABISTAN)
// ============================================================================
// Yazan: D4-ORTADOGU · 17 Eylül 2026 · sevk: 1.MURAT, oturumlar/KOSU13-OTOBUS.md
// Aday kaynağı: denetim/NOKTASIZLIK-ADAY-0917.json (16 komşulu yürüyüş öngörüsünün sahipsiz kümeleri)
// 🔴 AD ALANI (CLAUDE.md §7): bu dosya YALNIZ window.YERLESIMLER_NOKTA_ORTADOGU_0917 tanımlar.
//    girdi.py kaydını 1.MURAT yapar. Doğrulayıcı: node denetim/ARAC-D4-NOKTA-DOGRULA-0917.js
// Şema data/yerlesimler.js ile aynı. Kimlik yazımı komşu kayıtlarla aynı (suud-ikinci/suud-ucuncu künye
// kimliği → harita:"suud"; Mısır dönemi v: + kid:"misir-kavalali"; Mekke Şerifliği v:).
// Atlas referans değildir: günler kaynaktan; "gün komşudan" yalnız komşunun KENDİ kaynağı yazılıysa.
// bos:"devletsiz" dilimleri kaynaklı: o dilimde bölge hiçbir devletin idaresinde değildi.
//
// YAZILAMAYAN KÜMELER (künye/kaynak yok — ayrıntı denetim/D4-ORTADOGU-0916.md §20):
//   Asîr–Yemen içi (Me'rib/Cevf Şerifliği, Necrân Mekârime künyesiz) · Hâş–Kandehar (Kalat Hanlığı künyesiz) ·
//   Gazne–Kâbil (Argun ve Bâbür'ün Kâbil'i 1504-1526 künyesiz) · Abu Dabi içi (Benî Yâs künyesiz) ·
//   Figuig–Ağvât (el-Beyyiz: 1852 öncesi zincir kaynaksız)
// ============================================================================
window.YERLESIMLER_NOKTA_ORTADOGU_0917 = [

// ── Necid içi (küme 23.33°K 45.76°D · ~37.000 km²) ──
{ ad:"Dilem (Harc)", bos:"devletsiz", neden:"1281-1792 ve 1819-08-13→1824-06-01 boş: Harc'ta merkezî devlet yok (TDV necid); 1819'da Mısır garnizonu Harc'tan çekildi, bölge kabile temsilcilerine bırakıldı (Lorimer I/1091-92). 1792-01-01 EN GEÇ sınır: Suûdîler 1792'ye kadar Harc'a hâkim oldu (yıl; fethin kendi günü bulunamadı). 1818-09-09 Dir'iye teslimi, Harc işgali onu izledi. 1819-08-13 Süleymiye garnizonunun Menfûha'ya varış günü. 1838/1840 yıl: Hurşid Paşa karargâhı Harc'ta Süleymiye'de. 1824-06-01, 1891-01-24 ve 1902-01-15 künye günleri devralındı (kaynaklar yalnız yıl veriyor). Kasım 1902'de İbn Reşîd birkaç gün Dilem'de kaldı (1 Kasım 1902 yenilgisi); bu dilim modellenmedi. 🟢 1819-08-13→1824-06-01 __BOSLUK__ BEYANI (NOKTA-ORTADOGU, 19 Eyl 2026): TDV suudiler 'aileden gelen bazı isimler … emirliği yeniden kurma teşebbüsünde bulundularsa da 1824 yılına kadar bir başarı elde edemediler'; TDV necid: İbrâhim Paşa'nın 1819'da dönüşünden sonra Necid'deki idarî düzenlemeler zayıfladı; Lorimer I/1091-92 kabile temsilcileri. Künyeli sahip yok, komşuya itilmedi.", tur:"kasaba", lat:23.991, lon:47.162, g:0, k:3,
  s:[{f:"1792-01-01",t:"1818-09-09",d:"suud-birinci"},{f:"1819-08-13",t:"1824-06-01",d:"__BOSLUK__"},{f:"1824-06-01",t:"1838-01-01",d:"suud-ikinci"},{f:"1840-01-01",t:"1891-01-24",d:"suud-ikinci"},{f:"1891-01-24",t:"1902-01-15",d:"sammar"},{f:"1902-01-15",t:"1923-10-29",d:"suud-ucuncu"}], d:[],
  v:[{f:"1818-09-09",t:"1819-08-13",k:"Mısır (İbrâhim Paşa)",statu:"vassal",kid:"misir-kavalali"},{f:"1838-01-01",t:"1840-01-01",k:"Mısır (Hurşid Paşa)",statu:"vassal",kid:"misir-kavalali"}],
  kaynak:"TDV vehhabilik ('Riyad, Harc ve Kasîm'de hâkimiyet kurdular', 1792) · TDV necid · TDV suudiler · TDV riyad (15 Ocak 1902) · Lorimer, Gazetteer of the Persian Gulf, Oman and Central Arabia I (1915) s.1089-1106, 1145 · Al-Rasheed, A History of Saudi Arabia (CUP 2010) · GeoNames 110314" },

{ ad:"Havta (Havtat Benî Temîm)", bos:"devletsiz", neden:"1281-1795 ve 1819-08-13→1824-06-01 boş (TDV necid; Lorimer I/1091). 1795-01-01 EN GEÇ, GEREKÇELİ: orta Arabistan seferleri Ahsâ seferinden (TDV vehhabilik: 1795) önce tamamlanmıştı (Al-Rasheed); Havta'nın kendi fetih yılı bulunamadı. 1819-08-13 gün komşudan: Dilem (Harc) · Lorimer I/1091-92 (aynı tahliye). 1838-1840: Hurşid Paşa bütün Necid'de Mehmed Ali'nin egemenliğini ilan etti (Lorimer I/1099); Havta Harc'taki karargâha 35 km. Havtalılar 1902'de Abdülazîz'e katıldı (Lorimer I/1145). Künye günleri devralındı. 🟢 1819-08-13→1824-06-01 __BOSLUK__ BEYANI (NOKTA-ORTADOGU, 19 Eyl 2026): TDV suudiler 'aileden gelen bazı isimler … emirliği yeniden kurma teşebbüsünde bulundularsa da 1824 yılına kadar bir başarı elde edemediler'; TDV necid: İbrâhim Paşa'nın 1819'da dönüşünden sonra Necid'deki idarî düzenlemeler zayıfladı; Lorimer I/1091-92 kabile temsilcileri. Künyeli sahip yok, komşuya itilmedi.", tur:"kasaba", lat:23.496, lon:46.878, g:0, k:3,
  s:[{f:"1795-01-01",t:"1818-09-09",d:"suud-birinci"},{f:"1819-08-13",t:"1824-06-01",d:"__BOSLUK__"},{f:"1824-06-01",t:"1838-01-01",d:"suud-ikinci"},{f:"1840-01-01",t:"1891-01-24",d:"suud-ikinci"},{f:"1891-01-24",t:"1902-01-15",d:"sammar"},{f:"1902-01-15",t:"1923-10-29",d:"suud-ucuncu"}], d:[],
  v:[{f:"1818-09-09",t:"1819-08-13",k:"Mısır (İbrâhim Paşa)",statu:"vassal",kid:"misir-kavalali"},{f:"1838-01-01",t:"1840-01-01",k:"Mısır (Hurşid Paşa)",statu:"vassal",kid:"misir-kavalali"}],
  kaynak:"TDV necid · TDV vehhabilik · Lorimer, Gazetteer I s.1051, 1091-92, 1099, 1145; II 'Hautah' · Al-Rasheed 2010 · GeoNames 13631408" },

{ ad:"Leylâ (Eflâc)", bos:"devletsiz", neden:"Zincir ve gerekçe Havta ile aynı (TDV necid: Eflâc Necd-i Ârızî'nin bölgesi; Turki Eflâc'a hâkim oldu — Al-Rasheed). 1795 EN GEÇ, GEREKÇELİ. 1819-08-13 gün komşudan: Dilem · Lorimer I/1091-92. 🟡 1838-1840 Mısır dilimi Eflâc için ayrıca belgelenmedi; Lorimer'in 'bütün Necid' beyanına dayanıyor. 🟢 1819-08-13→1824-06-01 __BOSLUK__ BEYANI (NOKTA-ORTADOGU, 19 Eyl 2026): TDV suudiler 'aileden gelen bazı isimler … emirliği yeniden kurma teşebbüsünde bulundularsa da 1824 yılına kadar bir başarı elde edemediler'; TDV necid: İbrâhim Paşa'nın 1819'da dönüşünden sonra Necid'deki idarî düzenlemeler zayıfladı; Lorimer I/1091-92 kabile temsilcileri. Künyeli sahip yok, komşuya itilmedi.", tur:"kasaba", lat:22.292, lon:46.724, g:0, k:3,
  s:[{f:"1795-01-01",t:"1818-09-09",d:"suud-birinci"},{f:"1819-08-13",t:"1824-06-01",d:"__BOSLUK__"},{f:"1824-06-01",t:"1838-01-01",d:"suud-ikinci"},{f:"1840-01-01",t:"1891-01-24",d:"suud-ikinci"},{f:"1891-01-24",t:"1902-01-15",d:"sammar"},{f:"1902-01-15",t:"1923-10-29",d:"suud-ucuncu"}], d:[],
  v:[{f:"1818-09-09",t:"1819-08-13",k:"Mısır (İbrâhim Paşa)",statu:"vassal",kid:"misir-kavalali"},{f:"1838-01-01",t:"1840-01-01",k:"Mısır (Hurşid Paşa)",statu:"vassal",kid:"misir-kavalali"}],
  kaynak:"TDV necid · TDV vehhabilik · Lorimer, Gazetteer II 'Aflaj'; I s.1091-99 · Al-Rasheed 2010 · GeoNames 104716" },

// ── Tâif çevresi (küme 21.65°K 42.04°D · ~19.500 km²) ──
{ ad:"Türabe", bos:"devletsiz", neden:"Boş dilim 1816-01-01→1818-09-09: Mısır garnizonları Türabe'den çekildi (Lorimer I/1086), yerine kimin geçtiği bulunamadı. Lorimer Türabe'yi güney Hicaz sayar; Tâif gibi Memlûk→Mekke Şerifliği zinciri (🟡 GEREKÇELİ). 1517-07-06 Mekke heyetinin kabulü (TDV mekke). 1801 yıl: Tâif çevresi kabileleri Vehhâbî nüfuzuna girdi (Lorimer I/1055). 1815-01-13 Bisal zaferinin ikinci günü — Türabe'nin alınışı bu zaferi İZLEDİ, günü verilmiyor (alt sınır). 1816 yıl: garnizon çekildi. 1818-09-09 🟡 GEREKÇELİ: Vehhâbî direnişinin sonu; Türabe'de Mısır idaresinin yeniden kuruluş günü bulunamadı. 1840 yıl: Mısır Hicaz'dan çekildi (TDV hicaz). 1916-06-10 Mekke ayaklanması (TDV abdullah-b-huseyin). 1919-05-26 Abdülazîz Şerif kuvvetlerini yendi (TDV abdulaziz-b-suud; Türabe savaşı). 🟢 1816-01-01→1818-09-09 __BOSLUK__ BEYANI (NOKTA-ORTADOGU, 19 Eyl 2026): Lorimer I/1080-86 garnizon listesi ve TDV (hicaz, suudiler, mekke) bu dilimde yerin sahibini SÖYLEMİYOR; Mısır'a ya da Suûd'a itmek kaynaksız olur — dilim kimsenin değil diye beyan edildi.", tur:"kasaba", lat:21.214, lon:41.633, g:0, k:3,
  s:[{f:"1281-01-01",t:"1517-07-06",d:"memluk"},{f:"1801-01-01",t:"1815-01-13",d:"suud-birinci"},{f:"1816-01-01",t:"1818-09-09",d:"__BOSLUK__"},{f:"1916-06-10",t:"1919-05-26",d:"hicaz"},{f:"1919-05-26",t:"1923-10-29",d:"suud-ucuncu"}], d:[],
  v:[{f:"1517-07-06",t:"1801-01-01",k:"Mekke Şerifliği",kid:"mekke-serifligi",statu:"vassal"},{f:"1815-01-13",t:"1816-01-01",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"},{f:"1818-09-09",t:"1840-01-01",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"},{f:"1840-01-01",t:"1916-06-10",k:"Mekke Şerifliği",kid:"mekke-serifligi",statu:"vassal"}],
  kaynak:"TDV mekke ('16 ve 22 Cemâziyelâhir 923'te (6 ve 12 Temmuz 1517)') · TDV taif · TDV hicaz · TDV abdulaziz-b-suud ('26 Mayıs 1919'da Şerif Hüseyin'in kuvvetlerini yendi') · TDV abdullah-b-huseyin · Lorimer, Gazetteer I s.190-191, 1055, 1080-1086 · Al-Rasheed 2010 s.42 · GeoNames 101322" },

{ ad:"Hurma (Tâif doğusu)", bos:"devletsiz", neden:"🟡 1801→1815 zinciri Türabe'den (82 km, aynı Vehhâbî-Mısır savaşı; gün komşudan: Türabe · Lorimer I/1055, 1080-86). Lorimer'in garnizon listesinde (Bîşe, Rânye, Türabe) Hurma YOK; 1815-01-13→1818-09-09 BOŞ bırakıldı. 1919-05-26: TDV'ye göre Şerif'e verilen 'Tâif'in doğusundaki hurma vahası' izni Abdülazîz'in bu günkü zaferiyle boşa çıktı; Hurma halkının İbn Suûd'a geçişi daha önce oldu (Al-Rasheed s.42), yılı bulunamadı. 🟢 1815-01-13→1818-09-09 __BOSLUK__ BEYANI (NOKTA-ORTADOGU, 19 Eyl 2026): Lorimer I/1080-86 garnizon listesi ve TDV (hicaz, suudiler, mekke) bu dilimde yerin sahibini SÖYLEMİYOR; Mısır'a ya da Suûd'a itmek kaynaksız olur — dilim kimsenin değil diye beyan edildi.", tur:"vaha", lat:21.911, lon:42.031, g:0, k:3,
  s:[{f:"1281-01-01",t:"1517-07-06",d:"memluk"},{f:"1801-01-01",t:"1815-01-13",d:"suud-birinci"},{f:"1815-01-13",t:"1818-09-09",d:"__BOSLUK__"},{f:"1916-06-10",t:"1919-05-26",d:"hicaz"},{f:"1919-05-26",t:"1923-10-29",d:"suud-ucuncu"}], d:[],
  v:[{f:"1517-07-06",t:"1801-01-01",k:"Mekke Şerifliği",kid:"mekke-serifligi",statu:"vassal"},{f:"1818-09-09",t:"1840-01-01",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"},{f:"1840-01-01",t:"1916-06-10",k:"Mekke Şerifliği",kid:"mekke-serifligi",statu:"vassal"}],
  kaynak:"TDV abdulaziz-b-suud · TDV mekke · TDV hicaz · TDV abdullah-b-huseyin · Al-Rasheed 2010 s.42 · Lorimer, Gazetteer I s.1055, 1080-1086 · GeoNames 109306" },

// ── Hadramut içi (küme 16.71°K 48.51°D · ~22.500 km²) ──
{ ad:"Seyûn (Sayvan)", tur:"sehir", lat:15.9433, lon:48.7933, g:0, k:3,
  s:[{f:"1281-01-01",t:"1450-01-01",d:"yemen-zeydi"},{f:"1450-01-01",t:"1538-01-01",d:"kesiri-sultanligi"},{f:"1635-10-22",t:"1659-01-01",d:"kesiri-sultanligi"},{f:"1659-01-01",t:"1700-01-01",d:"yemen-zeydi"},{f:"1700-01-01",t:"1923-10-29",d:"kesiri-sultanligi"}], d:[],
  v:[{f:"1538-01-01",t:"1635-10-22",k:"Kesîrî reisleri (tâbi)",statu:"vassal"}],
  neden:"🔴 1281-1450: kaynakta RESÛLÎ hâkimiyeti (1229-1454; 1280'de Hadramut alındı), sonra Tâhirî — ikisinin de künyesi YOK; atlasın Yemen konvansiyonuyla `yemen-zeydi` (harita yemen) yazıldı — bu bir YANLIŞ ATIF YAKLAŞIKLAMASIDIR, Resûlî/Tâhirî künyesi gelince düzeltilmeli. 1450: kesiri-sultanligi künye yılı (TDV 'XV. yy ikinci yarısı'). 1538-01-01: TDV yıl (Hadım Süleyman Paşa seferi); Osmanlı sancağı ama idare Kesîrî reislerinde → v:. 1635-10-22: TDV yemen, Osmanlı'nın Yemen'den son çekilişi (Muhâ) — Hadramut'a özgü bitiş cümlesi YOK. 1659-01-01: TDV 1069 (1658-59) Zeydî istilâsı. 🟡 1700-01-01: TDV 'XVIII. yy ilk yarısında' Zeydî ve Kesîrî nüfuzu zayıfladı — YARIM YÜZYIL KABALIĞI, gerçek yıl bulunamadı. 19. yy: TDV 'Sayvan Kesîrîler'in'; 1881 sonrası 'Şibâm, Sayvan ve Terîm Kesîrîler'de kaldı'.",
  kaynak:"TDV hadramut ('Hadramut içinde idareyi ellerinde bulunduranlar Kesîrî kabilesi reisleri idi'; '1069'da (1658-59) Zeydî imamı … Hadramut'u istilâ etti') · TDV yemen ('10 Cemâziyelevvel 1045'te (22 Ekim 1635) … Muhâ'dan ayrıldı') · TDV resuliler · GeoNames 70981" }

];

;
/* ==== data/yerlesimler_nokta_sibirya_0917.js ==== */
// -*- coding: utf-8 -*-
// YERLESIMLER_NOKTA_SIBIRYA_0917 — NOKTA-SIBIRYA (D1-TURKIYE oturumu), 17 Eylül 2026
// Görev: oturumlar/KOSU13-OTOBUS.md "EK KADRO" — denetim/NOKTASIZLIK-ADAY-0917.json
//   NOKTASIZ-ADAY kümelerinden Sibirya-Orta Asya (merkez_lat ≥ 43, merkez_lon > 50): 68 küme.
// Kural: o dönemde devlet yoksa boşluk doğrudur; varsa KAYNAKLI nokta.
// Şema data/yerlesimler.js ile aynı. girdi.py kaydı 1.MURAT'ındır — bu dosya BAĞLI DEĞİL.
//
// YÖNTEM
//   1. Her kümenin merkezine max(120 km, 1,2 × eşdeğer yarıçap) içindeki GeoNames yerleşimleri
//      (allCountries, P sınıfı, RU/KZ/MN/CN/JP) → 12.114 aday.
//   2. Küme başına en yakın 30 aday + idarî merkezler + tarihî ad listesi, Rusça adıyla
//      ЭСБЕ / МЭСБЕ (ru.wikisource) maddelerinde arandı.
//   3. YALNIZ maddesi KURULUŞ YILINI veren yerleşim yazıldı. Gün yok ⇒ YYYY-01-01 (§4).
//   4. Atlasın 82 girdi dosyasındaki (3859 nokta) en yakın noktaya mesafe > 3 km (D002).
//   Kuruluştan ÖNCESİ yazılmadı: kur: öncesinde yerleşim yoktur (VERI-YAPISI).
//   Rus dönemleri atlas geleneğiyle bölündü: rusya → rusya-gecici-hukumet (1917-03-15) →
//   sovyet-rusya (1917-11-07) → 1923-10-29. Üç kimliğin de renkler.py'de boyası VAR.
//
// KOORDİNAT: GeoNames kimliği her kayıtta. Atlas noktası koordinat kaynağı olarak KULLANILMADI.
window.YERLESIMLER_NOKTA_SIBIRYA_0917 = [
{ ad:"Akşa (Akşinsk kalesi)", tur:"kale", lat:50.28105, lon:113.287, g:0, k:0, kur:"1765-01-01",
  s:[{f:"1765-01-01", t:"1917-03-15", d:"rusya"},
     {f:"1917-03-15", t:"1917-11-07", d:"rusya-gecici-hukumet"},
     {f:"1917-11-07", t:"1923-10-29", d:"sovyet-rusya"}],
  kaynak:"ЭСБЕ «Акша» (ru.wikisource): \"Пограничная крепость А. была основана в 1765 г.\" · \"при впадении реки Акши в Онон\" · GeoNames 2028028",
  not:"küme: 50.29/113.53 (27.372 km², komşular Irgen · Nerçinsk · Çita) — merkeze 17 km; en yakın atlas noktası 182 km. kur: YIL (gün yok)." },
{ ad:"Gorbitsa (Gorbiçenskaya)", tur:"kale", lat:53.10004, lon:119.21745, g:0, k:0, kur:"1762-01-01",
  s:[{f:"1762-01-01", t:"1917-03-15", d:"rusya"},
     {f:"1917-03-15", t:"1917-11-07", d:"rusya-gecici-hukumet"},
     {f:"1917-11-07", t:"1923-10-29", d:"sovyet-rusya"}],
  kaynak:"МЭСБЕ «Горбица» (ru.wikisource): \"станица Забайк. обл., Нерчинск. окр., при впадении реки Г. в Шилку. С 1762 была крепостью до половины XIX в.\" · GeoNames 2023965",
  not:"küme: 53.81/119.01 (15.968 km², komşu Sretensk) — merkeze 80 km. kur: YIL; 1762 kaynakta KALE oluşunun başı — yerleşimin daha eski olup olmadığı bulunamadı." },
{ ad:"Kazakevičevo (Kazakevičeva stanitsası)", tur:"kale", lat:48.26922, lon:134.73811, g:0, k:0, kur:"1858-01-01",
  s:[{f:"1858-01-01", t:"1917-03-15", d:"rusya"},
     {f:"1917-03-15", t:"1917-11-07", d:"rusya-gecici-hukumet"},
     {f:"1917-11-07", t:"1923-10-29", d:"sovyet-rusya"}],
  kaynak:"ЭСБЕ «Казакевичева» (ru.wikisource): \"станица Приморской обл., Северно-Уссурийского края, на пр. берегу Уссури, в 40 в. от Хабаровки. Основана в 1858 г.\" · GeoNames 2023021 (Habarovsk'a ≈34 km kuş uçuşu; kaynak 40 verst ≈ 43 km, nehir yolu)",
  not:"küme: 48.7/134.78 (53.536 km², komşu Habarovka) — merkeze 48 km. ⚠️ Rus stanitsası 1858'de kuruldu, Ussuri'nin sağ yakası hukuken 1860 Pekin Antlaşması'na kadar ortak/Qing sayılır; atlas fiilî tasarruf boyar ⇒ rusya 1858. Komşu Habarovka kaydı qing-hanedani'yi 1860-11-14'e kadar sürdürüyor: Habarovka da 1858'de Rus karakolu olarak kuruldu — iki kayıt ÇELİŞİYOR, hüküm 1.MURAT'ın." },
{ ad:"Sofiysk (Amur)", tur:"sehir", lat:51.5733, lon:139.8455, g:0, k:0, kur:"1859-01-01",
  s:[{f:"1859-01-01", t:"1917-03-15", d:"rusya"},
     {f:"1917-03-15", t:"1917-11-07", d:"rusya-gecici-hukumet"},
     {f:"1917-11-07", t:"1923-10-29", d:"sovyet-rusya"}],
  kaynak:"ЭСБЕ «Софийск» (ru.wikisource): \"сел. Приморской обл., Хабаровского окр., расположено на прав. берегу р. Амура в его низовьях, у подошвы горы Джай. Основ. в 1859 г.; до 1896 г. С. был окружным городом\" · МЭСБЕ «Софийск»: \"основ. 1859\" · GeoNames 2016364",
  not:"küme: 52.27/138.65 (20.930 km², komşu Nikolayevsk) — merkeze 113 km. ⚠️ GeoNames'te iki Sofiysk var; 2016363 (52.26/133.99, Amur oblastı, iç kesim) ESBE'nin tarif ettiği yer DEĞİL — aşağı Amur kıyısındaki 2016364 alındı." }
];

;
/* ==== data/yerlesimler_afrika2.js ==== */
// 🔴 4 EKİM 2026 — `kur:"1281-01-01"` ALANLARI SİLİNDİ (81 kayıt bu dosyada).
//    Gerekçe: ONCE1281-KUR191-1004 ölçtü — 191 kaydın 156'sı KANITLA ufuk
//    tabanına kenetliydi, 35'i kaynaksızdı, **0'ı gerçek kuruluş tarihiydi**.
//    §4: "yıl bilinmiyorsa yıl yazılmaz" — kaynaksız `kur:` sahte kesinliktir,
//    ve 1281 öncesi sahiplik yazılırsa motor onu SESSİZCE yutardı.
//    Motor etkisi ÖLÇÜLDÜ: `kur:` yalnız MOTOR_YURUYUS=1 iken aday listesinde
//    okunuyor (uret_petek.py:6448) ve o bayrak son koşuda KAPALIYDI ⇒ bugünkü
//    çıktı DEĞİŞMEZ. Yürüyüş kapısı açılırsa bu 191 nokta adaydan çıkar —
//    kayıp değil DÜZELTME: uydurma bir `kur:` sayesinde aday oluyorlardı.
//    Rapor: denetim/ONCE1281-KUR191-1004.md (192 kayıt tek tek)
// 🔴 AYNI GÜN, EKSİK KALAN YÜZ — silme GERİYE doğru NÖTR DEĞİLDİR:
//    kur VARKEN  g=1000'de nokta YOK · kur YOKKEN g=1000 ve g=-5000'de VAR.
//    Yani bu kayıtlar artık "ezelden beri var". Taino (~600-1500), Inuit,
//    Xhosa yerleşimleri için bu kur:1281 kadar yanlıştır — ÖBÜR YÖNE.
//    ⇒ 1281 ÖNCESİ KAMPANYANIN İKİNCİ KAPISI: her nokta için ya KAYNAKLI
//      bir kur yazılacak, ya o nokta kapsam dışı bırakılacak. Ufuk geriye
//      açılmadan bu kapı kapanmalı. (ONCE1281-KUR191 bu yüzü ölçmemişti.)
// ============================================================================
// YERLEŞİM VERİ SETİ — AFRİKA 2   (Oturum: DUNYA-AFRIKA-0903, 3 Eylül 2026)
// ============================================================================
// data/yerlesimler.js ile AYNI ŞEMA. Alan sözlüğü: VERI-YAPISI.md.
// Ad alanı: window.YERLESIMLER_AFRIKA2  (CLAUDE.md §7 — "ayrı dosya vermek,
// ayrı ad alanı vermek DEĞİLDİR"; dosya adındaki ayırt edici parça değişken
// adında da duruyor.)
//
// 🔴 BU DOSYA BAĞLANIR (yama DEĞİL). `arac/girdi.py` GIRDI_DOSYALARI'na
//    eklenmesi ve `index.html`e satır yazılması gerekir — İKİSİNİ DE
//    KOORDİNATÖR YAPAR. Ben yazdım, BAĞLAMADIM.
//
// ---------------------------------------------------------------------------
// NİÇİN — ÖLÇÜLMÜŞ BOŞLUK
// ---------------------------------------------------------------------------
// Kutu 35G-20K / 18B-52D · 1° ızgara · tavan 200 km (motorun TAVAN_KM'i)
//   kara hücre 1960 · AÇIK 1146 (%58,5)   ← gün başındaki taban
//   bu dosyanın adayları konunca: 52 açık (%2,7)
// Kuzey Afrika kutusu (20-37K / 18B-35D): 207 → 87 açık (%31,4 → %13,2)
//
// 🔴 VE ZAMAN BOYUTU ÖLÇÜLDÜ — resmî ölçüt onu GÖRMÜYOR:
//   `_dunya_bosluk.py` `kur:`a BAKMAZ, noktayı 1281'den var sayar.
//   kur: süzgeciyle aynı tarama:  1400'de 750 açık (%38,3) · 1900'de 85
//   ⇒ Bu dosyanın adaylarının çoğu SÖMÜRGE DÖNEMİ kuruluşudur; harita
//     1900'de dolu, 1400'de boş görünecektir. Bu bir kusur değil, Emre'nin
//     hükmünün sonucu ("yerleşim varsa nokta konur, yoksa uydurmayız") —
//     ama ÖLÇÜT bunu görmüyor ve "bitti" diyor. Kayıt olsun diye yazıldı.
//
// ---------------------------------------------------------------------------
// KAYNAK DÜRÜSTLÜĞÜ (§4)
// ---------------------------------------------------------------------------
// TDV gövdesi bu turda okunan 12 madde: gine · senegal · mali · burkina-faso
// · cad · kamerun · malavi · mozambik · tanzanya · madagaskar · zambiya ·
// moritanya. İkisi (moritanya · zambiya) o TANECİKTE SUSTU ve öyle yazıldı.
// Kalanın dayanağı standart akademik el kitabıdır ve `kaynak:` alanı
// "bulunamadı" ile BAŞLAR — gizlenmiyor.
//
// 🔴 `kur:` TABANDIR, ÖLÇÜM DEĞİL: 80 kaydın `kur:`ı künyesinin `f`'inden
//    alınmıştır. Bir kısmı künyesinden ESKİ kasabadır ve `kur:`ı GEÇ
//    yazılmıştır. Yazma turunda tek tek kaynaklanmalı. (Kankan bu yüzden
//    ayrıca düzeltildi: `bate` künyesi yazılıp kur: 1878 → 1650 çekildi.)
//
// ---------------------------------------------------------------------------
// ÖN SINAV — yazmadan ÖNCE, hepsi 0
// ---------------------------------------------------------------------------
//   ad çakışması 0 (girdi.yukle TAM DİZGİ karşılaştırır → ValueError)
//   3 km 0 (bağlı evren) · 0 (kendi içinde)
//   künyesi olmayan kimlik 0 · ömür taşması 0 · zincir boşluğu 0
//   ⚠️ RENGİ OLMAYAN KİMLİK VAR — koordinatörün renk partisi henüz
//      koşulmadı (M-2460: "renk beklemene gerek yok"). Bu dosya inince
//      renksiz kimlikler BOYANMAZ; renk gelince düzelir.
//
// 🔴 DOSYADAN ÇIKARILAN İKİ NOKTA — Tecerhî · Vâv en-Nâmûs (Fizan)
//    Fizan emsalini (Murzuk · Gât · Zevîle · el-Katrûn) birebir
//    kopyalamıştım: `s:[hafsi 1281→1577]`. Ama `hafsi` künyesi
//    1574-09-13'te bitiyor ⇒ 2,4 yıllık taşma. Taşma BENİM DEĞİL,
//    emsalin kendisinde var ve `Değişmez 4c` onu SAYIYOR (beklenen 280).
//    İki kayıt eklersem 282 olur ve denetim öter. Emsali tek başıma
//    yeniden yazmak da bölgesel modeli değiştirmek olurdu.
//    ⇒ İKİSİ DE ÇIKARILDI ve koordinatöre SORULDU. AÇIK KALEM.
// ============================================================================

window.YERLESIMLER_AFRIKA2 = [


{ ad:"İllîzî", tur:"sehir", lat:26.4800, lon:8.4700, g:0, k:0,
  s:[{f:"1281-01-01",t:"1911-01-01",d:"tuareg-accer"},
     {f:"1911-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Cânet (Djanet)", tur:"sehir", lat:24.5500, lon:9.4800, g:0, k:0,
  s:[{f:"1281-01-01",t:"1911-01-01",d:"tuareg-accer"},
     {f:"1911-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"İdeles", tur:"sehir", lat:23.8000, lon:5.9000, g:0, k:0,
  s:[{f:"1281-01-01",t:"1902-05-07",d:"tuareg-ahaggar"},
     {f:"1902-05-07",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Abalessa", tur:"sehir", lat:22.8900, lon:4.8500, g:0, k:0,
  s:[{f:"1281-01-01",t:"1902-05-07",d:"tuareg-ahaggar"},
     {f:"1902-05-07",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Bardaî", tur:"sehir", lat:21.3600, lon:17.0000, g:0, k:0,
  s:[{f:"1281-01-01",t:"1914-01-01",d:"tubu-tibesti"},
     {f:"1914-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Vûr", tur:"sehir", lat:21.3500, lon:15.9800, g:0, k:0,
  s:[{f:"1281-01-01",t:"1914-01-01",d:"tubu-tibesti"},
     {f:"1914-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Zûâr", tur:"sehir", lat:20.4500, lon:16.5200, g:0, k:0,
  s:[{f:"1281-01-01",t:"1914-01-01",d:"tubu-tibesti"},
     {f:"1914-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Ounianga", tur:"sehir", lat:19.0700, lon:20.5100, g:0, k:0,
  kur:"1635-01-01",
  s:[{f:"1635-01-01",t:"1909-06-02",d:"vaday",kaynak:"TDV veday (başlık 1635-1909; 'Fransızlar 2 Haziran 1909’da Ebîşe’yi ele geçirerek Vedây Sultanlığı’na son verdiler') — t: sultanlığın sonu · SENUSI-NOKTA 19 Eyl 2026"},
     {f:"1909-06-02",t:"1913-01-01",d:"senusi",kaynak:"TDV cad: 'Fransızlar Ebîşe’yi ve Vedây’ı ele geçirdikten sonra kuzeydeki Borku ve Ennîdî’yi hâkimiyetlerinde tutan Senûsîler’i buradan çıkardılar (1913)' · TDV veday aynı hüküm — t YIL hassasiyeti (kaynak yıl veriyor; Borku merkezi Ayn Kelek'in günü 1913-11-27, TDV senusiyye, bu noktaya taşınmadı) · SENUSI-NOKTA"},
     {f:"1913-01-01",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"TDV veday: 'Çad’ın tamamını nüfuzları altına aldılar (1913)' — YIL · SENUSI-NOKTA"}],
  kaynak:"cad" },

{ ad:"Aravan", tur:"sehir", lat:18.9000, lon:-3.5300, g:0, k:0,
  kur:"1600-01-01",
  s:[{f:"1600-01-01",t:"1894-01-01",d:"berabis"},
     {f:"1894-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Râşid (Tagant)", tur:"sehir", lat:18.8300, lon:-11.6000, g:0, k:0,
  kur:"1640-01-01",
  s:[{f:"1640-01-01",t:"1909-01-01",d:"moritanya-emirlikleri"},
     {f:"1909-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"moritanya" },

{ ad:"Arlit", tur:"sehir", lat:18.7400, lon:7.3900, g:0, k:0,
  kur:"1405-01-01",
  s:[{f:"1405-01-01",t:"1900-01-01",d:"tuareg-air"},
     {f:"1900-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Tişît (Tichitt)", tur:"sehir", lat:18.4500, lon:-9.5100, g:0, k:0,
  kur:"1640-01-01",
  s:[{f:"1640-01-01",t:"1909-01-01",d:"moritanya-emirlikleri"},
     {f:"1909-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"moritanya" },

{ ad:"Kidal", tur:"sehir", lat:18.4400, lon:1.4100, g:0, k:0,
  s:[{f:"1281-01-01",t:"1899-01-01",d:"tuareg-adag"},
     {f:"1899-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Fachi", tur:"sehir", lat:18.1100, lon:11.5600, g:0, k:0,
  kur:"1405-01-01",
  s:[{f:"1405-01-01",t:"1900-01-01",d:"tuareg-air"},
     {f:"1900-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Faya-Largeau", tur:"sehir", lat:17.9200, lon:19.1000, g:0, k:0,
  s:[{f:"1281-01-01",t:"1913-01-01",d:"kanem-tubu"},
     {f:"1913-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"cad" },

{ ad:"Butilimit", tur:"sehir", lat:17.5500, lon:-14.7000, g:0, k:0,
  kur:"1640-01-01",
  s:[{f:"1640-01-01",t:"1909-01-01",d:"moritanya-emirlikleri"},
     {f:"1909-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"moritanya" },

{ ad:"Fada (Ennedi)", tur:"sehir", lat:17.1800, lon:21.5800, g:0, k:0,
  kur:"1635-01-01",
  s:[{f:"1635-01-01",t:"1909-06-02",d:"vaday",kaynak:"TDV veday (başlık 1635-1909; 'Fransızlar 2 Haziran 1909’da Ebîşe’yi ele geçirerek Vedây Sultanlığı’na son verdiler') — t: sultanlığın sonu · SENUSI-NOKTA 19 Eyl 2026"},
     {f:"1909-06-02",t:"1913-01-01",d:"senusi",kaynak:"TDV cad: 'kuzeydeki Borku ve Ennîdî’yi hâkimiyetlerinde tutan Senûsîler’i buradan çıkardılar (1913)' — Fada Ennedi'nin merkezi · t YIL hassasiyeti · SENUSI-NOKTA"},
     {f:"1913-01-01",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"TDV veday: 'Çad’ın tamamını nüfuzları altına aldılar (1913)' — YIL · SENUSI-NOKTA"}],
  kaynak:"cad" },

{ ad:"In Gall", tur:"sehir", lat:16.7900, lon:6.9300, g:0, k:0,
  kur:"1405-01-01",
  s:[{f:"1405-01-01",t:"1900-01-01",d:"tuareg-air"},
     {f:"1900-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Podor", tur:"sehir", lat:16.6500, lon:-14.9600, g:0, k:0,
  kur:"1776-01-01",
  s:[{f:"1776-01-01",t:"1881-01-01",d:"futa-toro"},
     {f:"1881-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"senegal" },

{ ad:"Kiffa", tur:"sehir", lat:16.6200, lon:-11.4000, g:0, k:0,
  kur:"1640-01-01",
  s:[{f:"1640-01-01",t:"1909-01-01",d:"moritanya-emirlikleri"},
     {f:"1909-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"moritanya" },

{ ad:"Nema (Néma)", tur:"sehir", lat:16.6200, lon:-7.2600, g:0, k:0,
  kur:"1640-01-01",
  s:[{f:"1640-01-01",t:"1909-01-01",d:"moritanya-emirlikleri"},
     {f:"1909-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"moritanya" },

{ ad:"Nder (Valo)", tur:"sehir", lat:16.2000, lon:-15.8500, g:0, k:0,
  kur:"1287-01-01",
  s:[{f:"1287-01-01",t:"1855-02-25",d:"valo"},
     {f:"1855-02-25",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Kaedi", tur:"sehir", lat:16.1500, lon:-13.5000, g:0, k:0,
  kur:"1776-01-01",
  s:[{f:"1776-01-01",t:"1881-01-01",d:"futa-toro"},
     {f:"1881-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"senegal" },

{ ad:"Saint-Louis (Ndar)", tur:"sehir", lat:16.0300, lon:-16.5100, g:0, k:0,
  kur:"1659-01-01",
  s:[{f:"1659-01-01",t:"1792-09-22",d:"fransa"},
     {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Menaka", tur:"sehir", lat:15.9200, lon:2.4000, g:0, k:0,
  s:[{f:"1281-01-01",t:"1899-01-01",d:"tuareg-ivellemmedan"},
     {f:"1899-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Linguère (Colof)", tur:"sehir", lat:15.4000, lon:-15.1200, g:0, k:0,
  kur:"1350-01-01",
  s:[{f:"1350-01-01",t:"1890-01-01",d:"colof"},
     {f:"1890-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"senegal" },

{ ad:"Nioro (Kaarta)", tur:"sehir", lat:15.2300, lon:-9.5900, g:0, k:0,
  kur:"1650-01-01",
  s:[{f:"1650-01-01",t:"1861-03-10",d:"bambara"},
     {f:"1861-03-10",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"mali" },

{ ad:"Mbul (Kayor)", tur:"sehir", lat:15.1600, lon:-16.3800, g:0, k:0,
  kur:"1549-01-01",
  s:[{f:"1549-01-01",t:"1886-10-27",d:"kayor"},
     {f:"1886-10-27",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"senegal" },

{ ad:"Iriba", tur:"sehir", lat:15.1300, lon:22.2500, g:0, k:0,
  kur:"1635-01-01",
  s:[{f:"1635-01-01",t:"1909-06-02",d:"vaday",kaynak:"TDV veday (başlık 1635-1909; 'Fransızlar 2 Haziran 1909’da Ebîşe’yi ele geçirerek Vedây Sultanlığı’na son verdiler') — t: sultanlığın sonu · SENUSI-NOKTA 19 Eyl 2026"},
     {f:"1909-06-02",t:"1913-01-01",d:"__BOSLUK__",kaynak:"BEYAN — 1909-06-02..1913 sahibi BULUNAMADI: TDV cad/veday Senûsî hâkimiyetini yalnız 'Borku ve Ennîdî' için söylüyor, Iriba (Dâr Zagâve, Ennedi'nin güneyi) adı geçmiyor; Fransız fiilî denetiminin Iriba'ya ulaştığı yıl da yok. Komşuya itilmedi (VERI-YAPISI __BOSLUK__) · SENUSI-NOKTA"},
     {f:"1913-01-01",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"TDV veday: 'Çad’ın tamamını nüfuzları altına aldılar (1913)' — YIL, üst sınır · SENUSI-NOKTA"}],
  kaynak:"cad" },

{ ad:"Bakel", tur:"sehir", lat:14.9000, lon:-12.4600, g:0, k:0,
  kur:"1818-01-01",
  s:[{f:"1818-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Tahoua", tur:"sehir", lat:14.8900, lon:5.2700, g:0, k:0,
  s:[{f:"1281-01-01",t:"1899-01-01",d:"adar"},
     {f:"1899-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Rufisque", tur:"sehir", lat:14.7200, lon:-17.2700, g:0, k:0,
  kur:"1549-01-01",
  s:[{f:"1549-01-01",t:"1886-10-27",d:"kayor"},
     {f:"1886-10-27",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"senegal" },

{ ad:"Dakar", tur:"sehir", lat:14.6900, lon:-17.4500, g:0, k:0,
  kur:"1857-05-25",
  s:[{f:"1857-05-25",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Gore (Gorée)", tur:"sehir", lat:14.6750, lon:-17.4273, g:0, k:0,
  kur:"1444-01-01",
  s:[{f:"1444-01-01",t:"1627-01-01",d:"portekiz", enklav: true },
     {f:"1627-01-01",t:"1677-11-01",d:"hollanda", enklav: true },
     {f:"1677-11-01",t:"1792-09-22",d:"fransa"},
     {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Biltine", tur:"sehir", lat:14.5300, lon:20.9200, g:0, k:0,
  kur:"1635-01-01",
  s:[{f:"1635-01-01",t:"1909-06-02",d:"vaday"},
     {f:"1909-06-02",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"TDV veday (başlık: 1635-1909): 'Fransızlar 2 Haziran 1909’da Ebîşe’yi ele geçirerek Vedây Sultanlığı’na son verdiler' — GÜN (Abeşe için doğrudan; Biltine/Vara sultanlığın sonuna bağlandı) · KRONO-2S-3 19 Eyl 2026"}],
  kaynak:"cad" },

{ ad:"Mopti", tur:"sehir", lat:14.4900, lon:-4.1900, g:0, k:0,
  kur:"1650-01-01",
  s:[{f:"1650-01-01",t:"1861-03-10",d:"bambara"},
     {f:"1861-03-10",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"mali" },

{ ad:"Kayes", tur:"sehir", lat:14.4500, lon:-11.4400, g:0, k:0,
  kur:"1650-01-01",
  s:[{f:"1650-01-01",t:"1861-03-10",d:"bambara"},
     {f:"1861-03-10",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"mali" },

{ ad:"Filingue", tur:"sehir", lat:14.3500, lon:3.3200, g:0, k:0,
  s:[{f:"1281-01-01",t:"1899-01-01",d:"adar"},
     {f:"1899-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Bulebane (Bundu)", tur:"sehir", lat:14.3200, lon:-12.7000, g:0, k:0,
  kur:"1690-01-01",
  s:[{f:"1690-01-01",t:"1858-01-01",d:"bundu"},
     {f:"1858-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Diahav (Sine)", tur:"sehir", lat:14.3000, lon:-16.3000, g:0, k:0,
  kur:"1350-01-01",
  s:[{f:"1350-01-01",t:"1887-01-01",d:"sine-salum"},
     {f:"1887-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"senegal" },

{ ad:"Nguigmi", tur:"sehir", lat:14.2500, lon:13.1100, g:0, k:0,
  s:[{f:"1281-01-01",t:"1913-01-01",d:"kanem-tubu"},
     {f:"1913-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"cad" },

{ ad:"Tillaberi", tur:"sehir", lat:14.2100, lon:1.4500, g:0, k:0,
  s:[{f:"1281-01-01",t:"1898-01-01",d:"zerma"},
     {f:"1898-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Hamdullahi", tur:"sehir", lat:14.1500, lon:-4.1500, g:0, k:0,
  kur:"1820-01-01",
  s:[{f:"1820-01-01",t:"1862-05-16",d:"massina"},
     {f:"1862-05-16",t:"1893-01-01",d:"tekrur",kaynak:"TDV mali: 'Mâsînâ’nın merkezi Hamdallahi 16 Mayıs 1862 tarihinde el-Hâc Ömer’in eline geçti' — GÜN · KRONO-2S-3 19 Eyl 2026"},
     {f:"1893-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Madaoua", tur:"sehir", lat:14.0800, lon:5.9600, g:0, k:0,
  s:[{f:"1281-01-01",t:"1899-01-01",d:"adar"},
     {f:"1899-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Vara (Wara)", tur:"sehir", lat:14.0500, lon:21.0000, g:0, k:0,
  kur:"1635-01-01",
  s:[{f:"1635-01-01",t:"1909-06-02",d:"vaday"},
     {f:"1909-06-02",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"TDV veday (başlık: 1635-1909): 'Fransızlar 2 Haziran 1909’da Ebîşe’yi ele geçirerek Vedây Sultanlığı’na son verdiler' — GÜN (Abeşe için doğrudan; Biltine/Vara sultanlığın sonuna bağlandı) · KRONO-2S-3 19 Eyl 2026"}],
  kaynak:"cad" },

{ ad:"Dori", tur:"sehir", lat:14.0300, lon:-0.0300, g:0, k:0,
  kur:"1810-01-01",
  s:[{f:"1810-01-01",t:"1897-01-01",d:"liptako"},
     {f:"1897-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Tera", tur:"sehir", lat:14.0100, lon:0.7500, g:0, k:0,
  s:[{f:"1281-01-01",t:"1898-01-01",d:"zerma"},
     {f:"1898-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Goure", tur:"sehir", lat:13.9800, lon:10.2700, g:0, k:0,
  kur:"1731-01-01",
  s:[{f:"1731-01-01",t:"1899-01-01",d:"damagaram"},
     {f:"1899-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Kahone (Salum)", tur:"sehir", lat:13.9200, lon:-16.1800, g:0, k:0,
  kur:"1350-01-01",
  s:[{f:"1350-01-01",t:"1887-01-01",d:"sine-salum"},
     {f:"1887-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"senegal" },

{ ad:"Abeşe (Abéché)", tur:"sehir", lat:13.8300, lon:20.8300, g:0, k:0,
  kur:"1635-01-01",
  s:[{f:"1635-01-01",t:"1909-06-02",d:"vaday"},
     {f:"1909-06-02",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"TDV veday (başlık: 1635-1909): 'Fransızlar 2 Haziran 1909’da Ebîşe’yi ele geçirerek Vedây Sultanlığı’na son verdiler' — GÜN (Abeşe için doğrudan; Biltine/Vara sultanlığın sonuna bağlandı) · KRONO-2S-3 19 Eyl 2026"}],
  kaynak:"cad" },

{ ad:"Birni-N'Konni", tur:"sehir", lat:13.8000, lon:5.2500, g:0, k:0,
  s:[{f:"1281-01-01",t:"1899-01-01",d:"adar"},
     {f:"1899-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Vahiguya (Yatenga)", tur:"sehir", lat:13.5800, lon:-2.4200, g:0, k:0,
  kur:"1540-01-01",
  s:[{f:"1540-01-01",t:"1895-01-01",d:"yatenga"},
     {f:"1895-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"burkina-faso" },

{ ad:"Bathurst (Banjul)", tur:"sehir", lat:13.4478, lon:-16.5872, g:0, k:0,
  kur:"1816-04-23",
  s:[{f:"1816-04-23",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Albreda-Cufure", tur:"sehir", lat:13.3385, lon:-16.3598, g:0, k:0,
  s:[{f:"1281-01-01",t:"1894-01-01",d:"gambiya-mandinka"},
     {f:"1894-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Ati", tur:"sehir", lat:13.2200, lon:18.3400, g:0, k:0,
  s:[{f:"1281-01-01",t:"1913-01-01",d:"kanem-tubu"},
     {f:"1913-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"cad" },

{ ad:"Say", tur:"sehir", lat:13.1000, lon:2.3700, g:0, k:0,
  s:[{f:"1281-01-01",t:"1898-01-01",d:"zerma"},
     {f:"1898-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Kita", tur:"sehir", lat:13.0400, lon:-9.4900, g:0, k:0,
  kur:"1881-01-01",
  s:[{f:"1881-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Bamako", tur:"sehir", lat:12.6500, lon:-8.0000, g:0, k:0,
  kur:"1650-01-01",
  s:[{f:"1650-01-01",t:"1861-03-10",d:"bambara"},
     {f:"1861-03-10",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"mali" },

{ ad:"Vagadugu (Ouagadougou)", tur:"sehir", lat:12.3700, lon:-1.5300, g:0, k:0,
  s:[{f:"1281-01-01",t:"1896-09-01",d:"mossi-vagadugu"},
     {f:"1896-09-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"burkina-faso" },

{ ad:"Kaşev (Cacheu)", tur:"sehir", lat:12.2700, lon:-16.1700, g:0, k:0,
  kur:"1588-01-01",
  s:[{f:"1588-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Mongo", tur:"sehir", lat:12.1800, lon:18.7000, g:0, k:0,
  kur:"1522-01-01",
  s:[{f:"1522-01-01",t:"1897-01-01",d:"bagirmi"},
     {f:"1897-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"cad" },

{ ad:"Fada Ngurma (Gurma)", tur:"sehir", lat:12.0600, lon:0.3600, g:0, k:0,
  s:[{f:"1281-01-01",t:"1897-01-01",d:"gurma"},
     {f:"1897-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"burkina-faso" },

{ ad:"Kangaba", tur:"sehir", lat:11.9400, lon:-8.4200, g:0, k:0,
  kur:"1650-01-01",
  s:[{f:"1650-01-01",t:"1861-03-10",d:"bambara"},
     {f:"1861-03-10",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"mali" },

{ ad:"Bissav (Bissau)", tur:"sehir", lat:11.8600, lon:-15.6000, g:0, k:0,
  kur:"1687-01-01",
  s:[{f:"1687-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Tenkodogo", tur:"sehir", lat:11.7800, lon:-0.3700, g:0, k:0,
  s:[{f:"1281-01-01",t:"1896-09-01",d:"mossi-vagadugu"},
     {f:"1896-09-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"burkina-faso" },

{ ad:"Massenya", tur:"sehir", lat:11.4000, lon:16.1700, g:0, k:0,
  kur:"1522-01-01",
  s:[{f:"1522-01-01",t:"1897-01-01",d:"bagirmi"},
     {f:"1897-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"cad" },

{ ad:"Labe", tur:"sehir", lat:11.3200, lon:-12.2800, g:0, k:0,
  kur:"1747-01-01",
  s:[{f:"1747-01-01",t:"1896-01-01",d:"futa-callon"},
     {f:"1896-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"gine" },

{ ad:"Sikasso (Kenedugu)", tur:"sehir", lat:11.3200, lon:-5.6700, g:0, k:0,
  kur:"1650-01-01",
  s:[{f:"1650-01-01",t:"1898-05-01",d:"kenedugu"},
     {f:"1898-05-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Bobo-Diulasso", tur:"sehir", lat:11.1800, lon:-4.3000, g:0, k:0,
  s:[{f:"1281-01-01",t:"1896-09-01",d:"mossi-vagadugu"},
     {f:"1896-09-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"burkina-faso" },

{ ad:"Am Timan", tur:"sehir", lat:11.0300, lon:20.2800, g:0, k:0,
  kur:"1522-01-01",
  s:[{f:"1522-01-01",t:"1897-01-01",d:"bagirmi"},
     {f:"1897-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"cad" },

{ ad:"Timbo", tur:"sehir", lat:10.6500, lon:-11.8500, g:0, k:0,
  kur:"1747-01-01",
  s:[{f:"1747-01-01",t:"1896-01-01",d:"futa-callon"},
     {f:"1896-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"gine" },

{ ad:"Marua (Maroua)", tur:"sehir", lat:10.5900, lon:14.3200, g:0, k:0,
  kur:"1809-01-01",
  s:[{f:"1809-01-01",t:"1901-09-02",d:"adamava"},
     {f:"1901-09-02",t:"1916-09-01",d:"almanya"},
     {f:"1916-09-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"kamerun" },

{ ad:"Kankan", tur:"sehir", lat:10.3900, lon:-9.3100, g:0, k:0,
  kur:"1650-01-01",
  s:[{f:"1650-01-01",t:"1879-01-01",d:"bate"},
     {f:"1879-01-01",t:"1898-09-29",d:"vasulu"},
     {f:"1898-09-29",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"gine" },

{ ad:"Bauci (Bauchi)", tur:"sehir", lat:10.3100, lon:9.8400, g:0, k:0,
  kur:"1809-01-01",
  s:[{f:"1809-01-01",t:"1903-07-27",d:"sokoto"},
     {f:"1903-07-27",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Birao", tur:"sehir", lat:10.2800, lon:22.7900, g:0, k:0,
  kur:"1890-01-01",
  s:[{f:"1890-01-01",t:"1911-04-12",d:"darul-kuti"},
     {f:"1911-04-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Busa (Borgu)", tur:"sehir", lat:10.2000, lon:4.5000, g:0, k:0,
  s:[{f:"1281-01-01",t:"1898-01-01",d:"borgu"},
     {f:"1898-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Bisandugu", tur:"sehir", lat:10.0300, lon:-9.1000, g:0, k:0,
  kur:"1878-01-01",
  s:[{f:"1878-01-01",t:"1898-09-29",d:"vasulu"},
     {f:"1898-09-29",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"gine" },

{ ad:"Nikki (Borgu)", tur:"sehir", lat:9.9400, lon:3.2100, g:0, k:0,
  s:[{f:"1281-01-01",t:"1898-01-01",d:"borgu"},
     {f:"1898-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Cos (Jos)", tur:"sehir", lat:9.9000, lon:8.8600, g:0, k:0,
  s:[{f:"1281-01-01",t:"1903-01-01",d:"birom-plato"},
     {f:"1903-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Falaba", tur:"sehir", lat:9.8500, lon:-11.3000, g:0, k:0,
  kur:"1720-01-01",
  s:[{f:"1720-01-01",t:"1884-01-01",d:"solima-yalunka"},
     {f:"1884-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Konakri (Conakry)", tur:"sehir", lat:9.5111, lon:-13.7109, g:0, k:0,
  kur:"1885-01-01",
  s:[{f:"1885-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Odienne", tur:"sehir", lat:9.5100, lon:-7.5700, g:0, k:0,
  kur:"1878-01-01",
  s:[{f:"1878-01-01",t:"1898-09-29",d:"vasulu"},
     {f:"1898-09-29",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"gine" },

{ ad:"Yendi (Dagbon)", tur:"sehir", lat:9.4400, lon:-0.0100, g:0, k:0,
  s:[{f:"1281-01-01",t:"1899-01-01",d:"dagbon"},
     {f:"1899-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Garua (Garoua)", tur:"sehir", lat:9.3000, lon:13.4000, g:0, k:0,
  kur:"1809-01-01",
  s:[{f:"1809-01-01",t:"1901-09-02",d:"adamava"},
     {f:"1901-09-02",t:"1916-09-01",d:"almanya"},
     {f:"1916-09-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"kamerun" },

{ ad:"Buna (Bouna)", tur:"sehir", lat:9.2700, lon:-3.0000, g:0, k:0,
  kur:"1690-01-01",
  s:[{f:"1690-01-01",t:"1897-01-01",d:"buna"},
     {f:"1897-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Yola", tur:"sehir", lat:9.2000, lon:12.4800, g:0, k:0,
  kur:"1841-01-01",
  s:[{f:"1841-01-01",t:"1901-01-01",d:"sokoto"},
     {f:"1901-01-01",t:"1923-10-29",d:"ingiltere",kaynak:"TDV adamava: '1901’de Adamava, İngiltere’ye bağlı Kuzey Nijerya ile Almanya’ya bağlı Kamerun arasında paylaşılmış ve … İngiliz bölgesinde Yola emîri olmuştur' — YIL · KRONO-2S-3 19 Eyl 2026"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Kong", tur:"sehir", lat:9.1500, lon:-4.6100, g:0, k:0,
  kur:"1710-01-01",
  s:[{f:"1710-01-01",t:"1897-05-01",d:"kong-vattara"},
     {f:"1897-05-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Sarh (Fort-Archambault)", tur:"sehir", lat:9.1500, lon:18.3900, g:0, k:0,
  kur:"1899-01-01",
  s:[{f:"1899-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Bida (Nupe)", tur:"sehir", lat:9.0800, lon:6.0100, g:0, k:0,
  kur:"1859-01-01",
  s:[{f:"1859-01-01",t:"1897-01-01",d:"sokoto"},
     {f:"1897-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Bole", tur:"sehir", lat:9.0300, lon:-2.4800, g:0, k:0,
  kur:"1550-01-01",
  s:[{f:"1550-01-01",t:"1899-01-01",d:"gonja"},
     {f:"1899-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Uanda-Calle", tur:"sehir", lat:8.9000, lon:22.7800, g:0, k:0,
  kur:"1890-01-01",
  s:[{f:"1890-01-01",t:"1911-04-12",d:"darul-kuti"},
     {f:"1911-04-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Beyla", tur:"sehir", lat:8.6900, lon:-8.6400, g:0, k:0,
  kur:"1878-01-01",
  s:[{f:"1878-01-01",t:"1898-09-29",d:"vasulu"},
     {f:"1898-09-29",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"gine" },

{ ad:"Rey Buba", tur:"sehir", lat:8.6700, lon:14.1800, g:0, k:0,
  kur:"1809-01-01",
  s:[{f:"1809-01-01",t:"1901-09-02",d:"adamava"},
     {f:"1901-09-02",t:"1916-09-01",d:"almanya"},
     {f:"1916-09-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"kamerun" },

{ ad:"Mundu (Moundou)", tur:"sehir", lat:8.5700, lon:16.0800, g:0, k:0,
  kur:"1923-01-01",
  s:[{f:"1923-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Salaga (Gonja)", tur:"sehir", lat:8.5500, lon:-0.5200, g:0, k:0,
  kur:"1550-01-01",
  s:[{f:"1550-01-01",t:"1899-01-01",d:"gonja"},
     {f:"1899-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"İlorin", tur:"sehir", lat:8.5000, lon:4.5500, g:0, k:0,
  kur:"1817-01-01",
  s:[{f:"1817-01-01",t:"1897-02-16",d:"sokoto"},
     {f:"1897-02-16",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Freetown", tur:"sehir", lat:8.4800, lon:-13.2300, g:0, k:0,
  kur:"1792-03-11",
  s:[{f:"1792-03-11",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Ndele (Dâru'l-Kûtî)", tur:"sehir", lat:8.4100, lon:20.6500, g:0, k:0,
  kur:"1890-01-01",
  s:[{f:"1890-01-01",t:"1911-04-12",d:"darul-kuti"},
     {f:"1911-04-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Bondugu (Gyaaman)", tur:"sehir", lat:8.0400, lon:-2.8000, g:0, k:0,
  kur:"1690-01-01",
  s:[{f:"1690-01-01",t:"1895-01-01",d:"gyaaman"},
     {f:"1895-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Seguela", tur:"sehir", lat:7.9600, lon:-6.6700, g:0, k:0,
  kur:"1878-01-01",
  s:[{f:"1878-01-01",t:"1898-09-29",d:"vasulu"},
     {f:"1898-09-29",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"gine" },

{ ad:"Vukari (Wukari)", tur:"sehir", lat:7.8700, lon:9.7800, g:0, k:0,
  s:[{f:"1281-01-01",t:"1900-01-01",d:"jukun-kvararafa"},
     {f:"1900-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Lokoca (Lokoja)", tur:"sehir", lat:7.8000, lon:6.7400, g:0, k:0,
  s:[{f:"1281-01-01",t:"1900-01-01",d:"jukun-kvararafa"},
     {f:"1900-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Nzerekore", tur:"sehir", lat:7.7600, lon:-8.8200, g:0, k:0,
  s:[{f:"1281-01-01",t:"1898-01-01",d:"dan-guro"},
     {f:"1898-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Begho (Bighu)", tur:"sehir", lat:7.7500, lon:-2.3500, g:0, k:0,
  kur:"1550-01-01",
  s:[{f:"1550-01-01",t:"1899-01-01",d:"gonja"},
     {f:"1899-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Makurdi", tur:"sehir", lat:7.7300, lon:8.5400, g:0, k:0,
  s:[{f:"1281-01-01",t:"1900-01-01",d:"tiv"},
     {f:"1900-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Buake (Bouaké)", tur:"sehir", lat:7.6900, lon:-5.0300, g:0, k:0,
  s:[{f:"1281-01-01",t:"1898-01-01",d:"dan-guro"},
     {f:"1898-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Man", tur:"sehir", lat:7.4100, lon:-7.5500, g:0, k:0,
  s:[{f:"1281-01-01",t:"1898-01-01",d:"dan-guro"},
     {f:"1898-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"İbadan", tur:"sehir", lat:7.3800, lon:3.9000, g:0, k:0,
  kur:"1829-01-01",
  s:[{f:"1829-01-01",t:"1893-08-15",d:"ibadan"},
     {f:"1893-08-15",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Ngaunder (Ngaoundéré)", tur:"sehir", lat:7.3200, lon:13.5800, g:0, k:0,
  kur:"1809-01-01",
  s:[{f:"1809-01-01",t:"1901-09-02",d:"adamava"},
     {f:"1901-09-02",t:"1916-09-01",d:"almanya"},
     {f:"1916-09-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"kamerun" },

{ ad:"Batangafo", tur:"sehir", lat:7.3000, lon:18.2800, g:0, k:0,
  s:[{f:"1281-01-01",t:"1903-01-01",d:"banda-gbaya"},
     {f:"1903-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Gbarnga", tur:"sehir", lat:7.0000, lon:-9.4900, g:0, k:0,
  kur:"1822-04-25",
  s:[{f:"1822-04-25",t:"1923-10-29",d:"liberya"}],
  kaynak:"bulunamadı" },

{ ad:"Kaga-Bandoro", tur:"sehir", lat:6.9800, lon:19.1900, g:0, k:0,
  s:[{f:"1281-01-01",t:"1903-01-01",d:"banda-gbaya"},
     {f:"1903-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Notse", tur:"sehir", lat:6.9500, lon:1.1700, g:0, k:0,
  s:[{f:"1281-01-01",t:"1884-07-05",d:"eve-notse"},
     {f:"1884-07-05",t:"1916-02-16",d:"almanya"},
     {f:"1916-02-16",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Daloa", tur:"sehir", lat:6.8800, lon:-6.4500, g:0, k:0,
  s:[{f:"1281-01-01",t:"1898-01-01",d:"dan-guro"},
     {f:"1898-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Banyo", tur:"sehir", lat:6.7500, lon:11.8200, g:0, k:0,
  kur:"1809-01-01",
  s:[{f:"1809-01-01",t:"1901-09-02",d:"adamava"},
     {f:"1901-09-02",t:"1916-09-01",d:"almanya"},
     {f:"1916-09-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"kamerun" },

{ ad:"Bria", tur:"sehir", lat:6.5400, lon:21.9900, g:0, k:0,
  s:[{f:"1281-01-01",t:"1903-01-01",d:"banda-gbaya"},
     {f:"1903-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Bossangoa", tur:"sehir", lat:6.4900, lon:17.4500, g:0, k:0,
  s:[{f:"1281-01-01",t:"1903-01-01",d:"banda-gbaya"},
     {f:"1903-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Tibati", tur:"sehir", lat:6.4700, lon:12.6300, g:0, k:0,
  kur:"1809-01-01",
  s:[{f:"1809-01-01",t:"1901-09-02",d:"adamava"},
     {f:"1901-09-02",t:"1916-09-01",d:"almanya"},
     {f:"1916-09-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"kamerun" },

{ ad:"Lagos (Eko)", tur:"sehir", lat:6.4500, lon:3.4000, g:0, k:0,
  s:[{f:"1281-01-01",t:"1861-08-06",d:"benin-kralligi"},
     {f:"1861-08-06",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Monrovia", tur:"sehir", lat:6.3024, lon:-10.7978, g:0, k:0,
  kur:"1822-04-25",
  s:[{f:"1822-04-25",t:"1923-10-29",d:"liberya"}],
  kaynak:"bulunamadı" },

{ ad:"Onitsha", tur:"sehir", lat:6.1500, lon:6.7900, g:0, k:0,
  s:[{f:"1281-01-01",t:"1897-02-18",d:"benin-kralligi"},
     {f:"1897-02-18",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Zwedru", tur:"sehir", lat:6.0700, lon:-8.1300, g:0, k:0,
  kur:"1822-04-25",
  s:[{f:"1822-04-25",t:"1923-10-29",d:"liberya"}],
  kaynak:"bulunamadı" },

{ ad:"Buar (Bouar)", tur:"sehir", lat:5.9400, lon:15.6000, g:0, k:0,
  s:[{f:"1281-01-01",t:"1903-01-01",d:"banda-gbaya"},
     {f:"1903-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Bambari", tur:"sehir", lat:5.7700, lon:20.6800, g:0, k:0,
  s:[{f:"1281-01-01",t:"1903-01-01",d:"banda-gbaya"},
     {f:"1903-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Fumban (Bamum)", tur:"sehir", lat:5.7300, lon:10.9000, g:0, k:0,
  kur:"1394-01-01",
  s:[{f:"1394-01-01",t:"1916-02-16",d:"bamum"},
     {f:"1916-02-16",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"kamerun" },

{ ad:"Akra (Accra)", tur:"sehir", lat:5.5500, lon:-0.2000, g:0, k:0,
  kur:"1650-01-01",
  s:[{f:"1650-01-01",t:"1701-01-01",d:"hollanda"},
     {f:"1701-01-01",t:"1874-07-24",d:"asanti"},
     {f:"1874-07-24",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Obo", tur:"sehir", lat:5.4000, lon:26.4900, g:0, k:0,
  kur:"1750-01-01",
  s:[{f:"1750-01-01",t:"1912-01-01",d:"zende"},
     {f:"1912-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Aroçukvu", tur:"sehir", lat:5.3800, lon:7.3500, g:0, k:0,
  kur:"1690-01-01",
  s:[{f:"1690-01-01",t:"1902-03-01",d:"aro-konfederasyonu"},
     {f:"1902-03-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Assinie", tur:"sehir", lat:5.1280, lon:-3.2730, g:0, k:0,
  kur:"1687-01-01",
  s:[{f:"1687-01-01",t:"1792-09-22",d:"fransa"},
     {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Cape Coast", tur:"sehir", lat:5.1100, lon:-1.2500, g:0, k:0,
  kur:"1653-01-01",
  s:[{f:"1653-01-01",t:"1664-05-01",d:"hollanda"},
     {f:"1664-05-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Zemio", tur:"sehir", lat:5.0300, lon:25.1400, g:0, k:0,
  kur:"1750-01-01",
  s:[{f:"1750-01-01",t:"1912-01-01",d:"zende"},
     {f:"1912-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Eski Kalabar", tur:"sehir", lat:4.9600, lon:8.3200, g:0, k:0,
  s:[{f:"1281-01-01",t:"1884-09-10",d:"nijer-deltasi"},
     {f:"1884-09-10",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Sassandra", tur:"sehir", lat:4.9500, lon:-6.0800, g:0, k:0,
  s:[{f:"1281-01-01",t:"1898-01-01",d:"dan-guro"},
     {f:"1898-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Rafai", tur:"sehir", lat:4.9500, lon:23.9200, g:0, k:0,
  kur:"1750-01-01",
  s:[{f:"1750-01-01",t:"1912-01-01",d:"zende"},
     {f:"1912-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Bangassu", tur:"sehir", lat:4.7400, lon:22.8200, g:0, k:0,
  kur:"1750-01-01",
  s:[{f:"1750-01-01",t:"1912-01-01",d:"zende"},
     {f:"1912-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Bertua (Bertoua)", tur:"sehir", lat:4.5800, lon:13.6800, g:0, k:0,
  kur:"1905-01-01",
  s:[{f:"1905-01-01",t:"1916-02-16",d:"almanya"},
     {f:"1916-02-16",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Grand Cess (Kru)", tur:"sehir", lat:4.5700, lon:-8.2100, g:0, k:0,
  s:[{f:"1281-01-01",t:"1822-04-25",d:"kru-grebo"},
     {f:"1822-04-25",t:"1923-10-29",d:"liberya"}],
  kaynak:"bulunamadı — Kru sahilinin köklü denizci kasabalarından; Liberya'ya katılımı 1857 Maryland birleşmesiyle. 🔴 HARPER'A DOKUNULMADI: o 1834 Maryland kolonisi" },

{ ad:"Bonny", tur:"sehir", lat:4.4300, lon:7.1700, g:0, k:0,
  s:[{f:"1281-01-01",t:"1884-09-10",d:"nijer-deltasi"},
     {f:"1884-09-10",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Harper", tur:"sehir", lat:4.3800, lon:-7.7200, g:0, k:0,
  kur:"1822-04-25",
  s:[{f:"1822-04-25",t:"1923-10-29",d:"liberya"}],
  kaynak:"bulunamadı" },

{ ad:"Bangi (Bangui)", tur:"sehir", lat:4.3700, lon:18.5600, g:0, k:0,
  kur:"1889-06-26",
  s:[{f:"1889-06-26",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Duala", tur:"sehir", lat:4.0500, lon:9.7000, g:0, k:0,
  kur:"1868-01-01",
  s:[{f:"1868-01-01",t:"1884-07-14",d:"hollanda"},
     {f:"1884-07-14",t:"1916-02-16",d:"almanya"},
     {f:"1916-02-16",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Yaunde", tur:"sehir", lat:3.8700, lon:11.5200, g:0, k:0,
  kur:"1888-11-30",
  s:[{f:"1888-11-30",t:"1916-02-16",d:"almanya"},
     {f:"1916-02-16",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Niangara (Mangbetu)", tur:"sehir", lat:3.6900, lon:27.8700, g:0, k:0,
  kur:"1815-01-01",
  s:[{f:"1815-01-01",t:"1895-01-01",d:"mangbetu"},
     {f:"1895-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — Uele-Bomokandi arasında Mangbetu saray sahası; Nabiembali'nin birleştirmesi 1815. 🔴 ISIRO'YA DOKUNULMADI: o bir Belçika karakolu" },

{ ad:"Yokadouma", tur:"sehir", lat:3.5200, lon:15.0500, g:0, k:0,
  kur:"1905-01-01",
  s:[{f:"1905-01-01",t:"1916-02-16",d:"almanya"},
     {f:"1916-02-16",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Businga", tur:"sehir", lat:3.3400, lon:20.8800, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Gemena", tur:"sehir", lat:3.2500, lon:19.7700, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Lodvar", tur:"sehir", lat:3.1200, lon:35.6000, g:0, k:0,
  kur:"1912-01-01",
  s:[{f:"1912-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Watsa", tur:"sehir", lat:3.0400, lon:29.5300, g:0, k:0,
  kur:"1892-01-01",
  s:[{f:"1892-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Kribi", tur:"sehir", lat:2.9400, lon:9.9100, g:0, k:0,
  kur:"1884-07-14",
  s:[{f:"1884-07-14",t:"1916-02-16",d:"almanya"},
     {f:"1916-02-16",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Buta", tur:"sehir", lat:2.7900, lon:24.7400, g:0, k:0,
  kur:"1890-01-01",
  s:[{f:"1890-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Isiro", tur:"sehir", lat:2.7700, lon:27.6200, g:0, k:0,
  kur:"1892-01-01",
  s:[{f:"1892-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Gulu", tur:"sehir", lat:2.7700, lon:32.3000, g:0, k:0,
  kur:"1911-01-01",
  s:[{f:"1911-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Aketi", tur:"sehir", lat:2.7400, lon:23.7800, g:0, k:0,
  kur:"1890-01-01",
  s:[{f:"1890-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Moroto", tur:"sehir", lat:2.5300, lon:34.6600, g:0, k:0,
  kur:"1911-01-01",
  s:[{f:"1911-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Marsabit", tur:"sehir", lat:2.3300, lon:37.9900, g:0, k:0,
  s:[{f:"1281-01-01",t:"1895-07-01",d:"kenya-kuzey-halklari"},
     {f:"1895-07-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"kenya" },

{ ad:"Lira", tur:"sehir", lat:2.2300, lon:32.9000, g:0, k:0,
  kur:"1911-01-01",
  s:[{f:"1911-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Bumba", tur:"sehir", lat:2.1900, lon:22.4700, g:0, k:0,
  kur:"1890-01-01",
  s:[{f:"1890-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Lisala", tur:"sehir", lat:2.1500, lon:21.5100, g:0, k:0,
  kur:"1890-01-01",
  s:[{f:"1890-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Suanke", tur:"sehir", lat:2.0700, lon:14.1300, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Moloundou", tur:"sehir", lat:2.0300, lon:15.2000, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1911-11-04",d:"fransa-cumhuriyet"},
     {f:"1911-11-04",t:"1916-02-16",d:"almanya"},
     {f:"1916-02-16",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Vacir (Wajir)", tur:"sehir", lat:1.7500, lon:40.0600, g:0, k:0,
  s:[{f:"1281-01-01",t:"1895-07-01",d:"kenya-kuzey-halklari"},
     {f:"1895-07-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"kenya" },

{ ad:"Masindi", tur:"sehir", lat:1.6800, lon:31.7200, g:0, k:0,
  s:[{f:"1281-01-01",t:"1899-04-09",d:"bunyoro"},
     {f:"1899-04-09",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"uganda" },

{ ad:"İmpfondo", tur:"sehir", lat:1.6200, lon:18.0600, g:0, k:0,
  s:[{f:"1281-01-01",t:"1880-10-03",d:"tio"},
     {f:"1880-10-03",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Ouesso", tur:"sehir", lat:1.6100, lon:16.0500, g:0, k:0,
  s:[{f:"1281-01-01",t:"1880-10-03",d:"tio"},
     {f:"1880-10-03",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı" },

{ ad:"Bunia", tur:"sehir", lat:1.5600, lon:30.2500, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Hoima (Bunyoro)", tur:"sehir", lat:1.4300, lon:31.3500, g:0, k:0,
  s:[{f:"1281-01-01",t:"1899-04-09",d:"bunyoro"},
     {f:"1899-04-09",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"uganda" },

{ ad:"Epena", tur:"sehir", lat:1.3600, lon:17.4700, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Basankusu", tur:"sehir", lat:1.2200, lon:19.8000, g:0, k:0,
  kur:"1885-01-01",
  s:[{f:"1885-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Kitale", tur:"sehir", lat:1.0200, lon:35.0000, g:0, k:0,
  kur:"1908-01-01",
  s:[{f:"1908-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Fort Portal (Toro)", tur:"sehir", lat:0.6600, lon:30.2800, g:0, k:0,
  kur:"1830-01-01",
  s:[{f:"1830-01-01",t:"1900-06-26",d:"toro"},
     {f:"1900-06-26",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Makoku (Makokou)", tur:"sehir", lat:0.5700, lon:12.8700, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Cinca (Jinja)", tur:"sehir", lat:0.4284, lon:33.2002, g:0, k:0,
  kur:"1901-01-01",
  s:[{f:"1901-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Librevil (Libreville)", tur:"sehir", lat:0.3900, lon:9.4500, g:0, k:0,
  kur:"1849-08-17",
  s:[{f:"1849-08-17",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"İsiolo", tur:"sehir", lat:0.3500, lon:37.5800, g:0, k:0,
  s:[{f:"1281-01-01",t:"1895-07-01",d:"kenya-kuzey-halklari"},
     {f:"1895-07-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"kenya" },

{ ad:"Butembo", tur:"sehir", lat:0.1400, lon:29.2900, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Mbandaka", tur:"sehir", lat:0.0500, lon:18.2600, g:0, k:0,
  kur:"1883-06-17",
  s:[{f:"1883-06-17",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Kisumu", tur:"sehir", lat:-0.0900, lon:34.7700, g:0, k:0,
  kur:"1901-12-20",
  s:[{f:"1901-12-20",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Boende", tur:"sehir", lat:-0.2800, lon:20.8800, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Nakuru", tur:"sehir", lat:-0.3000, lon:36.0800, g:0, k:0,
  kur:"1904-01-01",
  s:[{f:"1904-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Garissa", tur:"sehir", lat:-0.4500, lon:39.6600, g:0, k:0,
  s:[{f:"1281-01-01",t:"1895-07-01",d:"kenya-kuzey-halklari"},
     {f:"1895-07-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"kenya" },

{ ad:"Ovando", tur:"sehir", lat:-0.4800, lon:15.9000, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Djolu", tur:"sehir", lat:-0.5700, lon:22.4500, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Mbarara (Nkore)", tur:"sehir", lat:-0.6100, lon:30.6600, g:0, k:0,
  kur:"1450-01-01",
  s:[{f:"1450-01-01",t:"1901-10-25",d:"nkore"},
     {f:"1901-10-25",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Lambarene", tur:"sehir", lat:-0.7000, lon:10.2300, g:0, k:0,
  kur:"1874-01-01",
  s:[{f:"1874-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Lubutu", tur:"sehir", lat:-0.7300, lon:26.5800, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Ikela", tur:"sehir", lat:-1.1800, lon:23.2700, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Nairobi", tur:"sehir", lat:-1.2900, lon:36.8200, g:0, k:0,
  kur:"1899-01-01",
  s:[{f:"1899-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"Nairobi City County 'History' (nairobi.go.ke): 'a supply depot of the Uganda Railway was built by the British in 1899' — YIL (eski 1899-05-30 dayanaksızdı; 30 Mayıs yalnız Vikipedi) · KRONO-2S-3 19 Eyl 2026" },

{ ad:"Bveranyange (Karagve)", tur:"sehir", lat:-1.3000, lon:31.1000, g:0, k:0,
  kur:"1450-01-01",
  s:[{f:"1450-01-01",t:"1890-07-01",d:"karagve"},
     {f:"1890-07-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Bukoba", tur:"sehir", lat:-1.3300, lon:31.8100, g:0, k:0,
  kur:"1890-01-01",
  s:[{f:"1890-01-01",t:"1916-09-01",d:"almanya"},
     {f:"1916-09-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Kitui", tur:"sehir", lat:-1.3700, lon:38.0100, g:0, k:0,
  s:[{f:"1281-01-01",t:"1895-07-01",d:"kamba"},
     {f:"1895-07-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Valikale", tur:"sehir", lat:-1.4200, lon:28.0500, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Maçakos", tur:"sehir", lat:-1.5200, lon:37.2600, g:0, k:0,
  kur:"1889-01-01",
  s:[{f:"1889-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Monkoto", tur:"sehir", lat:-1.6000, lon:20.6800, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Fransvil (Franceville)", tur:"sehir", lat:-1.6300, lon:13.5800, g:0, k:0,
  kur:"1880-06-13",
  s:[{f:"1880-06-13",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"R. Pourtier, Bull. Assoc. géogr. français 57/473 (1980, Persée): 'C'était le 13 juin 1880, sur un éperon rocheux dominant la rivière Mpassa' — GÜN · KRONO-2S-3 19 Eyl 2026" },

{ ad:"Muila (Mouila)", tur:"sehir", lat:-1.8700, lon:11.0600, g:0, k:0,
  kur:"1899-01-01",
  s:[{f:"1899-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Kigali", tur:"sehir", lat:-1.9500, lon:30.0600, g:0, k:0,
  kur:"1907-01-01",
  s:[{f:"1907-01-01",t:"1916-05-06",d:"almanya"},
     {f:"1916-05-06",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Nyanza (Ruanda)", tur:"sehir", lat:-2.3500, lon:29.7500, g:0, k:0,
  kur:"1300-01-01",
  s:[{f:"1300-01-01",t:"1916-05-06",d:"ruanda"},
     {f:"1916-05-06",t:"1923-10-29",d:"belcika"}],
  kaynak:"ruanda" },

{ ad:"Bukavu", tur:"sehir", lat:-2.5100, lon:28.8600, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Mvanza", tur:"sehir", lat:-2.5200, lon:32.9000, g:0, k:0,
  kur:"1892-01-01",
  s:[{f:"1892-01-01",t:"1916-09-01",d:"almanya"},
     {f:"1916-09-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Cambala (Djambala)", tur:"sehir", lat:-2.5400, lon:14.7500, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Cibanga", tur:"sehir", lat:-2.9300, lon:10.9900, g:0, k:0,
  kur:"1899-01-01",
  s:[{f:"1899-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Kindu", tur:"sehir", lat:-2.9500, lon:25.9200, g:0, k:0,
  kur:"1893-01-01",
  s:[{f:"1893-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Bandundu", tur:"sehir", lat:-3.3100, lon:17.3800, g:0, k:0,
  kur:"1885-01-01",
  s:[{f:"1885-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Mosi (Moshi)", tur:"sehir", lat:-3.3500, lon:37.3400, g:0, k:0,
  kur:"1893-01-01",
  s:[{f:"1893-01-01",t:"1916-09-01",d:"almanya"},
     {f:"1916-09-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Arusa (Arusha)", tur:"sehir", lat:-3.3700, lon:36.6800, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1916-09-01",d:"almanya"},
     {f:"1916-09-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Bucumbura", tur:"sehir", lat:-3.3800, lon:29.3600, g:0, k:0,
  kur:"1897-01-01",
  s:[{f:"1897-01-01",t:"1916-06-06",d:"almanya"},
     {f:"1916-06-06",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Uvira", tur:"sehir", lat:-3.4000, lon:29.1400, g:0, k:0,
  kur:"1892-01-01",
  s:[{f:"1892-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Gitega (Burundi)", tur:"sehir", lat:-3.4300, lon:29.9200, g:0, k:0,
  kur:"1680-01-01",
  s:[{f:"1680-01-01",t:"1916-06-06",d:"burundi"},
     {f:"1916-06-06",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı" },

{ ad:"Sibiti", tur:"sehir", lat:-3.6800, lon:13.3500, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Nyangve (Nyangwe)", tur:"sehir", lat:-4.2100, lon:26.1800, g:0, k:0,
  kur:"1860-01-01",
  s:[{f:"1860-01-01",t:"1893-03-04",d:"umman-zengibar"},
     {f:"1893-03-04",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Babati", tur:"sehir", lat:-4.2200, lon:35.7500, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1916-09-01",d:"almanya"},
     {f:"1916-09-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"İlebo", tur:"sehir", lat:-4.3300, lon:20.5800, g:0, k:0,
  kur:"1888-01-01",
  s:[{f:"1888-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Kasongo", tur:"sehir", lat:-4.4300, lon:26.6600, g:0, k:0,
  kur:"1860-01-01",
  s:[{f:"1860-01-01",t:"1893-01-01",d:"umman-zengibar"},
     {f:"1893-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Puent-Nuar", tur:"sehir", lat:-4.7900, lon:11.8600, g:0, k:0,
  kur:"1883-01-01",
  s:[{f:"1883-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Singida", tur:"sehir", lat:-4.8200, lon:34.7500, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1916-09-01",d:"almanya"},
     {f:"1916-09-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Ucici (Ujiji)", tur:"sehir", lat:-4.9200, lon:29.6800, g:0, k:0,
  kur:"1830-01-01",
  s:[{f:"1830-01-01",t:"1890-11-04",d:"umman-zengibar"},
     {f:"1890-11-04",t:"1916-09-01",d:"almanya"},
     {f:"1916-09-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Lusambo", tur:"sehir", lat:-4.9700, lon:23.4400, g:0, k:0,
  kur:"1890-01-01",
  s:[{f:"1890-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Tabora (Kazeh)", tur:"sehir", lat:-5.0200, lon:32.8000, g:0, k:0,
  kur:"1852-01-01",
  s:[{f:"1852-01-01",t:"1890-11-04",d:"umman-zengibar"},
     {f:"1890-11-04",t:"1916-09-01",d:"almanya"},
     {f:"1916-09-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Kikwit", tur:"sehir", lat:-5.0400, lon:18.8200, g:0, k:0,
  kur:"1896-01-01",
  s:[{f:"1896-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Luebo", tur:"sehir", lat:-5.3500, lon:21.4200, g:0, k:0,
  kur:"1885-01-01",
  s:[{f:"1885-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Pangani", tur:"sehir", lat:-5.4296, lon:38.9781, g:0, k:0,
  s:[{f:"1281-01-01",t:"1698-12-13",d:"svahili-sehirleri"},
     {f:"1698-12-13",t:"1890-11-04",d:"umman-zengibar"},
     {f:"1890-11-04",t:"1916-09-01",d:"almanya"},
     {f:"1916-09-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Kalemie", tur:"sehir", lat:-5.9509, lon:29.1824, g:0, k:0,
  kur:"1892-01-01",
  s:[{f:"1892-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Kabalo", tur:"sehir", lat:-6.0500, lon:26.9200, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Fesi (Feshi)", tur:"sehir", lat:-6.1100, lon:18.1700, g:0, k:0,
  kur:"1665-01-01",
  s:[{f:"1665-01-01",t:"1887-01-01",d:"lunda-imparatorlugu"},
     {f:"1887-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Kabinda", tur:"sehir", lat:-6.1300, lon:24.4800, g:0, k:0,
  kur:"1890-01-01",
  s:[{f:"1890-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Dodoma", tur:"sehir", lat:-6.1700, lon:35.7500, g:0, k:0,
  kur:"1907-01-01",
  s:[{f:"1907-01-01",t:"1916-09-01",d:"almanya"},
     {f:"1916-09-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Mpvapva", tur:"sehir", lat:-6.3500, lon:36.4900, g:0, k:0,
  s:[{f:"1281-01-01",t:"1890-11-04",d:"nyamvezi"},
     {f:"1890-11-04",t:"1916-09-01",d:"almanya"},
     {f:"1916-09-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"tanzanya" },

{ ad:"Morogoro", tur:"sehir", lat:-6.8200, lon:37.6600, g:0, k:0,
  s:[{f:"1281-01-01",t:"1890-11-04",d:"nyamvezi"},
     {f:"1890-11-04",t:"1916-09-01",d:"almanya"},
     {f:"1916-09-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"tanzanya" },

{ ad:"Kilosa", tur:"sehir", lat:-6.8300, lon:36.9900, g:0, k:0,
  s:[{f:"1281-01-01",t:"1890-11-04",d:"nyamvezi"},
     {f:"1890-11-04",t:"1916-09-01",d:"almanya"},
     {f:"1916-09-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"tanzanya" },

{ ad:"Kahemba", tur:"sehir", lat:-7.2800, lon:18.9900, g:0, k:0,
  kur:"1665-01-01",
  s:[{f:"1665-01-01",t:"1887-01-01",d:"lunda-imparatorlugu"},
     {f:"1887-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Dundo", tur:"sehir", lat:-7.3700, lon:20.8300, g:0, k:0,
  kur:"1665-01-01",
  s:[{f:"1665-01-01",t:"1887-01-01",d:"lunda-imparatorlugu"},
     {f:"1887-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Uije (Uíge)", tur:"sehir", lat:-7.6100, lon:15.0600, g:0, k:0,
  kur:"1390-01-01",
  s:[{f:"1390-01-01",t:"1914-01-01",d:"kongo-kralligi"},
     {f:"1914-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Kalenga (Hehe)", tur:"sehir", lat:-7.7900, lon:35.6200, g:0, k:0,
  kur:"1850-01-01",
  s:[{f:"1850-01-01",t:"1898-07-19",d:"hehe"},
     {f:"1898-07-19",t:"1916-09-01",d:"almanya"},
     {f:"1916-09-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Sumbavanga", tur:"sehir", lat:-7.9700, lon:31.6200, g:0, k:0,
  s:[{f:"1281-01-01",t:"1890-11-04",d:"fipa-nyakyusa"},
     {f:"1890-11-04",t:"1916-09-01",d:"almanya"},
     {f:"1916-09-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Kamina", tur:"sehir", lat:-8.7400, lon:25.0000, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Kilva Kivince", tur:"sehir", lat:-8.7500, lon:39.4100, g:0, k:0,
  kur:"1800-01-01",
  s:[{f:"1800-01-01",t:"1890-11-04",d:"umman-zengibar"},
     {f:"1890-11-04",t:"1916-09-01",d:"almanya"},
     {f:"1916-09-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Mbeya", tur:"sehir", lat:-8.9000, lon:33.4600, g:0, k:0,
  s:[{f:"1281-01-01",t:"1890-11-04",d:"fipa-nyakyusa"},
     {f:"1890-11-04",t:"1916-09-01",d:"almanya"},
     {f:"1916-09-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Matamba", tur:"sehir", lat:-9.3000, lon:16.0000, g:0, k:0,
  s:[{f:"1281-01-01",t:"1744-01-01",d:"matamba"},
     {f:"1744-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı" },

{ ad:"Njombe", tur:"sehir", lat:-9.3400, lon:34.7700, g:0, k:0,
  kur:"1835-01-01",
  s:[{f:"1835-01-01",t:"1898-01-01",d:"ngoni"},
     {f:"1898-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"malavi" },

{ ad:"Kasance (Kasanje)", tur:"sehir", lat:-9.3600, lon:18.1400, g:0, k:0,
  kur:"1620-01-01",
  s:[{f:"1620-01-01",t:"1910-01-01",d:"kasance"},
     {f:"1910-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı" },

{ ad:"Massangano", tur:"sehir", lat:-9.5400, lon:14.2000, g:0, k:0,
  kur:"1583-01-01",
  s:[{f:"1583-01-01",t:"1923-10-29",d:"portekiz", enklav: true }],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Malanje", tur:"sehir", lat:-9.5400, lon:16.3400, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1902-01-01",d:"ovimbundu"},
     {f:"1902-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı" },

{ ad:"Saurimo", tur:"sehir", lat:-9.6600, lon:20.3900, g:0, k:0,
  kur:"1665-01-01",
  s:[{f:"1665-01-01",t:"1887-01-01",d:"lunda-imparatorlugu"},
     {f:"1887-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Sandoa", tur:"sehir", lat:-9.6600, lon:22.8700, g:0, k:0,
  kur:"1665-01-01",
  s:[{f:"1665-01-01",t:"1887-01-01",d:"lunda-imparatorlugu"},
     {f:"1887-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Pungo Andongo", tur:"sehir", lat:-9.6700, lon:15.5700, g:0, k:0,
  kur:"1671-01-01",
  s:[{f:"1671-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Kambambe (Cambambe)", tur:"sehir", lat:-9.7500, lon:14.4800, g:0, k:0,
  kur:"1604-01-01",
  s:[{f:"1604-01-01",t:"1923-10-29",d:"portekiz", enklav: true }],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Mvansabombve (Kazembe)", tur:"sehir", lat:-9.8500, lon:28.7500, g:0, k:0,
  kur:"1740-01-01",
  s:[{f:"1740-01-01",t:"1899-01-01",d:"kazembe"},
     {f:"1899-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı" },

{ ad:"Karonga", tur:"sehir", lat:-9.9300, lon:33.9300, g:0, k:0,
  kur:"1880-01-01",
  s:[{f:"1880-01-01",t:"1895-01-01",d:"umman-zengibar"},
     {f:"1895-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Mbande (Ngonde)", tur:"sehir", lat:-9.9800, lon:33.8500, g:0, k:0,
  kur:"1600-01-01",
  s:[{f:"1600-01-01",t:"1887-01-01",d:"ngonde"},
     {f:"1887-01-01",t:"1895-01-01",d:"umman-zengibar"},
     {f:"1895-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — Kyungu'nun makamı Mbande tepesi. 🔴 KARONGA'YA DOKUNULMADI: o 1880'ler Stevenson yolu karakolu, kur: çekilmedi. TDV malavi'nin 1887'si (Mlozi'nin sultanlık ilânı) zincirde" },

{ ad:"Lindi", tur:"sehir", lat:-10.0000, lon:39.7200, g:0, k:0,
  s:[{f:"1281-01-01",t:"1698-12-13",d:"svahili-sehirleri"},
     {f:"1698-12-13",t:"1890-11-04",d:"umman-zengibar"},
     {f:"1890-11-04",t:"1916-09-01",d:"almanya"},
     {f:"1916-09-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Kasama (Bemba)", tur:"sehir", lat:-10.2100, lon:31.1800, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1899-01-01",d:"bemba"},
     {f:"1899-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"zambiya" },

{ ad:"Mikindani", tur:"sehir", lat:-10.2800, lon:40.1200, g:0, k:0,
  s:[{f:"1281-01-01",t:"1698-12-13",d:"svahili-sehirleri"},
     {f:"1698-12-13",t:"1890-11-04",d:"umman-zengibar"},
     {f:"1890-11-04",t:"1916-09-01",d:"almanya"},
     {f:"1916-09-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Bunkeya (Yeke)", tur:"sehir", lat:-10.4100, lon:26.9400, g:0, k:0,
  kur:"1856-01-01",
  s:[{f:"1856-01-01",t:"1891-12-20",d:"yeke"},
     {f:"1891-12-20",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı" },

{ ad:"Songea (Ngoni)", tur:"sehir", lat:-10.6800, lon:35.6500, g:0, k:0,
  kur:"1835-01-01",
  s:[{f:"1835-01-01",t:"1898-01-01",d:"ngoni"},
     {f:"1898-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"malavi" },

{ ad:"Kolvezi", tur:"sehir", lat:-10.7200, lon:25.4700, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1923-10-29",d:"belcika"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Masasi", tur:"sehir", lat:-10.7200, lon:38.8000, g:0, k:0,
  kur:"1800-01-01",
  s:[{f:"1800-01-01",t:"1899-01-01",d:"yao"},
     {f:"1899-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"malavi" },

{ ad:"Tunduru", tur:"sehir", lat:-11.1100, lon:37.3600, g:0, k:0,
  kur:"1800-01-01",
  s:[{f:"1800-01-01",t:"1899-01-01",d:"yao"},
     {f:"1899-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"malavi" },

{ ad:"Mosimboa", tur:"sehir", lat:-11.3500, lon:40.3500, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Luena (Moxico)", tur:"sehir", lat:-11.7800, lon:19.9200, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1902-01-01",d:"ovimbundu"},
     {f:"1902-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı" },

{ ad:"Mpika", tur:"sehir", lat:-11.8300, lon:31.4500, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1899-01-01",d:"bemba"},
     {f:"1899-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"zambiya" },

{ ad:"Kazombo", tur:"sehir", lat:-11.9000, lon:22.9200, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1902-01-01",d:"ovimbundu"},
     {f:"1902-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı" },

{ ad:"Solwezi", tur:"sehir", lat:-12.1700, lon:26.3800, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1899-01-01",d:"bemba"},
     {f:"1899-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"zambiya" },

{ ad:"Bailundo", tur:"sehir", lat:-12.1900, lon:15.8300, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1902-01-01",d:"ovimbundu"},
     {f:"1902-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı" },

{ ad:"Antseranana", tur:"sehir", lat:-12.2800, lon:49.2900, g:0, k:0,
  kur:"1885-12-17",
  s:[{f:"1885-12-17",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"İbo (Kerimba)", tur:"sehir", lat:-12.3875, lon:40.5607, g:0, k:0,
  kur:"1600-01-01",
  s:[{f:"1600-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Kuito (Bié)", tur:"sehir", lat:-12.3800, lon:16.9400, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1902-01-01",d:"ovimbundu"},
     {f:"1902-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı" },

{ ad:"Benguela", tur:"sehir", lat:-12.5800, lon:13.4100, g:0, k:0,
  kur:"1617-05-17",
  s:[{f:"1617-05-17",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Huambo (Wambu)", tur:"sehir", lat:-12.7800, lon:15.7400, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1902-01-01",d:"ovimbundu"},
     {f:"1902-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı" },

{ ad:"Mvembe (Mataka)", tur:"sehir", lat:-12.9000, lon:36.0000, g:0, k:0,
  kur:"1800-01-01",
  s:[{f:"1800-01-01",t:"1899-01-01",d:"yao"},
     {f:"1899-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"malavi" },

{ ad:"Nkhotakota (Cumbe)", tur:"sehir", lat:-12.9300, lon:34.3000, g:0, k:0,
  kur:"1840-01-01",
  s:[{f:"1840-01-01",t:"1895-01-01",d:"umman-zengibar"},
     {f:"1895-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Ndola", tur:"sehir", lat:-12.9700, lon:28.6400, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1899-01-01",d:"bemba"},
     {f:"1899-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"zambiya" },

{ ad:"Montepuez", tur:"sehir", lat:-13.1300, lon:39.0000, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Serence (Serenje)", tur:"sehir", lat:-13.2400, lon:30.2400, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1899-01-01",d:"bemba"},
     {f:"1899-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"zambiya" },

{ ad:"Licinga", tur:"sehir", lat:-13.3100, lon:35.2400, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Kasempa", tur:"sehir", lat:-13.4600, lon:25.8300, g:0, k:0,
  s:[{f:"1281-01-01",t:"1900-01-01",d:"kaonde-ila"},
     {f:"1900-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Zambezi (Balovale)", tur:"sehir", lat:-13.5500, lon:23.1000, g:0, k:0,
  kur:"1600-01-01",
  s:[{f:"1600-01-01",t:"1890-06-27",d:"lozi"},
     {f:"1890-06-27",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"zambiya" },

{ ad:"Kabompo", tur:"sehir", lat:-13.6000, lon:24.2000, g:0, k:0,
  kur:"1600-01-01",
  s:[{f:"1600-01-01",t:"1890-06-27",d:"lozi"},
     {f:"1890-06-27",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"zambiya" },

{ ad:"Çipata (Fort Jameson)", tur:"sehir", lat:-13.6400, lon:32.6500, g:0, k:0,
  kur:"1899-01-01",
  s:[{f:"1899-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Kangamba", tur:"sehir", lat:-13.7000, lon:19.8700, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1902-01-01",d:"ovimbundu"},
     {f:"1902-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı" },

{ ad:"Kakonda (Caconda)", tur:"sehir", lat:-13.7300, lon:15.0700, g:0, k:0,
  kur:"1682-01-01",
  s:[{f:"1682-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Sambava", tur:"sehir", lat:-14.2700, lon:50.1700, g:0, k:0,
  kur:"1712-01-01",
  s:[{f:"1712-01-01",t:"1817-01-01",d:"betsimisaraka"},
     {f:"1817-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"madagaskar" },

{ ad:"Mankhamba (Maravi)", tur:"sehir", lat:-14.2800, lon:34.5200, g:0, k:0,
  kur:"1480-01-01",
  s:[{f:"1480-01-01",t:"1800-01-01",d:"maravi"},
     {f:"1800-01-01",t:"1891-05-14",d:"umman-zengibar"},
     {f:"1891-05-14",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — Kalonga'nın başkenti; dayanak standart akademik kaynak. ⚠️ koordinat yaklaşık (~10 km), arkeolojik saha" },

{ ad:"Mangoçi", tur:"sehir", lat:-14.4800, lon:35.2600, g:0, k:0,
  kur:"1891-01-01",
  s:[{f:"1891-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Menongue", tur:"sehir", lat:-14.6600, lon:17.6900, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1902-01-01",d:"ovimbundu"},
     {f:"1902-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı" },

{ ad:"Kaoma (Mankoya)", tur:"sehir", lat:-14.8000, lon:24.8000, g:0, k:0,
  kur:"1600-01-01",
  s:[{f:"1600-01-01",t:"1890-06-27",d:"lozi"},
     {f:"1890-06-27",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"zambiya" },

{ ad:"Kuamba", tur:"sehir", lat:-14.8000, lon:36.5400, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Lubango", tur:"sehir", lat:-14.9200, lon:13.4900, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1902-01-01",d:"ovimbundu"},
     {f:"1902-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı" },

{ ad:"Kalabo", tur:"sehir", lat:-14.9700, lon:22.6800, g:0, k:0,
  kur:"1600-01-01",
  s:[{f:"1600-01-01",t:"1890-06-27",d:"lozi"},
     {f:"1890-06-27",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"zambiya" },

{ ad:"Mumbva", tur:"sehir", lat:-14.9800, lon:27.0600, g:0, k:0,
  s:[{f:"1281-01-01",t:"1900-01-01",d:"kaonde-ila"},
     {f:"1900-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Kuito Kuanavale", tur:"sehir", lat:-15.1700, lon:19.1700, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1902-01-01",d:"ovimbundu"},
     {f:"1902-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı" },

{ ad:"Mosamedes (Namibe)", tur:"sehir", lat:-15.2000, lon:12.1500, g:0, k:0,
  kur:"1840-08-04",
  s:[{f:"1840-08-04",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Lealui (Lozi)", tur:"sehir", lat:-15.2000, lon:23.1000, g:0, k:0,
  kur:"1600-01-01",
  s:[{f:"1600-01-01",t:"1890-06-27",d:"lozi"},
     {f:"1890-06-27",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"zambiya" },

{ ad:"Zomba", tur:"sehir", lat:-15.3900, lon:35.3200, g:0, k:0,
  kur:"1891-01-01",
  s:[{f:"1891-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Maroantsetra", tur:"sehir", lat:-15.4300, lon:49.7400, g:0, k:0,
  kur:"1712-01-01",
  s:[{f:"1712-01-01",t:"1817-01-01",d:"betsimisaraka"},
     {f:"1817-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"madagaskar" },

{ ad:"Zumbo", tur:"sehir", lat:-15.6100, lon:30.4500, g:0, k:0,
  kur:"1720-01-01",
  s:[{f:"1720-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Mahacanga (Majunga)", tur:"sehir", lat:-15.7170, lon:46.3199, g:0, k:0,
  kur:"1690-01-01",
  s:[{f:"1690-01-01",t:"1897-02-28",d:"sakalava-boina"},
     {f:"1897-02-28",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"madagaskar" },

{ ad:"Blantyre", tur:"sehir", lat:-15.7900, lon:35.0100, g:0, k:0,
  kur:"1876-01-01",
  s:[{f:"1876-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Mavinga", tur:"sehir", lat:-15.8300, lon:20.3600, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1902-01-01",d:"ovimbundu"},
     {f:"1902-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı" },

{ ad:"Senanga", tur:"sehir", lat:-16.1200, lon:23.2700, g:0, k:0,
  kur:"1600-01-01",
  s:[{f:"1600-01-01",t:"1890-06-27",d:"lozi"},
     {f:"1890-06-27",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"zambiya" },

{ ad:"Tete", tur:"sehir", lat:-16.1600, lon:33.5900, g:0, k:0,
  kur:"1531-01-01",
  s:[{f:"1531-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Besalampy", tur:"sehir", lat:-16.7500, lon:44.4800, g:0, k:0,
  kur:"1690-01-01",
  s:[{f:"1690-01-01",t:"1897-02-28",d:"sakalava-boina"},
     {f:"1897-02-28",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"madagaskar" },

{ ad:"Maevatanana", tur:"sehir", lat:-16.9500, lon:46.8300, g:0, k:0,
  kur:"1690-01-01",
  s:[{f:"1690-01-01",t:"1897-02-28",d:"sakalava-boina"},
     {f:"1897-02-28",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"madagaskar" },

{ ad:"Ondjiva (Ovambo)", tur:"sehir", lat:-17.0700, lon:15.7100, g:0, k:0,
  kur:"1600-01-01",
  s:[{f:"1600-01-01",t:"1917-02-06",d:"ovambo"},
     {f:"1917-02-06",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Sena", tur:"sehir", lat:-17.4500, lon:35.0300, g:0, k:0,
  kur:"1530-01-01",
  s:[{f:"1530-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Seşeke (Sesheke)", tur:"sehir", lat:-17.4800, lon:24.3000, g:0, k:0,
  kur:"1600-01-01",
  s:[{f:"1600-01-01",t:"1890-06-27",d:"lozi"},
     {f:"1890-06-27",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"zambiya" },

{ ad:"Katima Mulilo", tur:"sehir", lat:-17.5000, lon:24.2700, g:0, k:0,
  kur:"1890-07-01",
  s:[{f:"1890-07-01",t:"1915-07-09",d:"almanya"},
     {f:"1915-07-09",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Kuangar", tur:"sehir", lat:-17.5800, lon:18.6100, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1902-01-01",d:"ovimbundu"},
     {f:"1902-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı" },

{ ad:"Binga", tur:"sehir", lat:-17.6200, lon:27.3400, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Salisbury (Harare)", tur:"sehir", lat:-17.8300, lon:31.0500, g:0, k:0,
  kur:"1890-09-12",
  s:[{f:"1890-09-12",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Livingstone", tur:"sehir", lat:-17.8500, lon:25.8600, g:0, k:0,
  kur:"1905-01-01",
  s:[{f:"1905-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Ondangva (Ondonga)", tur:"sehir", lat:-17.9200, lon:15.9500, g:0, k:0,
  kur:"1600-01-01",
  s:[{f:"1600-01-01",t:"1917-02-06",d:"ovambo"},
     {f:"1917-02-06",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Rundu", tur:"sehir", lat:-17.9300, lon:19.7700, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1915-07-09",d:"almanya"},
     {f:"1915-07-09",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Maintirano", tur:"sehir", lat:-18.0600, lon:44.0300, g:0, k:0,
  kur:"1600-01-01",
  s:[{f:"1600-01-01",t:"1897-02-28",d:"sakalava-menabe"},
     {f:"1897-02-28",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"madagaskar" },

{ ad:"Toamasina (Tamatave)", tur:"sehir", lat:-18.1500, lon:49.4000, g:0, k:0,
  s:[{f:"1281-01-01",t:"1787-01-01",d:"merina-oncesi"},
     {f:"1787-01-01",t:"1897-02-28",d:"merina"},
     {f:"1897-02-28",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"madagaskar" },

{ ad:"Hvange", tur:"sehir", lat:-18.3700, lon:26.5000, g:0, k:0,
  kur:"1903-01-01",
  s:[{f:"1903-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Ambohimanga", tur:"sehir", lat:-18.7600, lon:47.5600, g:0, k:0,
  s:[{f:"1281-01-01",t:"1787-01-01",d:"merina-oncesi"},
     {f:"1787-01-01",t:"1897-02-28",d:"merina"},
     {f:"1897-02-28",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"madagaskar" },

{ ad:"Tsiroanomandidy", tur:"sehir", lat:-18.7700, lon:46.0500, g:0, k:0,
  s:[{f:"1281-01-01",t:"1787-01-01",d:"merina-oncesi"},
     {f:"1787-01-01",t:"1897-02-28",d:"merina"},
     {f:"1897-02-28",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"madagaskar" },

{ ad:"Umtali (Mutare)", tur:"sehir", lat:-18.9700, lon:32.6700, g:0, k:0,
  s:[{f:"1281-01-01",t:"1891-01-01",d:"manica"},
     {f:"1891-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"mozambik" },

{ ad:"Tsumeb", tur:"sehir", lat:-19.2400, lon:17.7100, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1915-07-09",d:"almanya"},
     {f:"1915-07-09",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Gveru", tur:"sehir", lat:-19.4500, lon:29.8200, g:0, k:0,
  kur:"1894-01-01",
  s:[{f:"1894-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Grutfontein", tur:"sehir", lat:-19.5700, lon:18.1100, g:0, k:0,
  kur:"1893-01-01",
  s:[{f:"1893-01-01",t:"1915-07-09",d:"almanya"},
     {f:"1915-07-09",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Danangombe (Rozvi)", tur:"sehir", lat:-19.6000, lon:29.3000, g:0, k:0,
  kur:"1684-01-01",
  s:[{f:"1684-01-01",t:"1834-01-01",d:"rozvi"},
     {f:"1834-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Antsirabe", tur:"sehir", lat:-19.8700, lon:47.0300, g:0, k:0,
  kur:"1872-01-01",
  s:[{f:"1872-01-01",t:"1897-02-28",d:"merina"},
     {f:"1897-02-28",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Maun (Tavana)", tur:"sehir", lat:-19.9900, lon:23.4200, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1885-03-31",d:"tsvana"},
     {f:"1885-03-31",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Outjo", tur:"sehir", lat:-20.1100, lon:16.1500, g:0, k:0,
  kur:"1895-01-01",
  s:[{f:"1895-01-01",t:"1915-07-09",d:"almanya"},
     {f:"1915-07-09",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Khami", tur:"sehir", lat:-20.1500, lon:28.3800, g:0, k:0,
  kur:"1450-01-01",
  s:[{f:"1450-01-01",t:"1683-01-01",d:"torva"},
     {f:"1683-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Bulavayo", tur:"sehir", lat:-20.1500, lon:28.5800, g:0, k:0,
  kur:"1840-01-01",
  s:[{f:"1840-01-01",t:"1893-11-04",d:"matabele"},
     {f:"1893-11-04",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Toteng", tur:"sehir", lat:-20.3500, lon:22.9700, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1885-03-31",d:"tsvana"},
     {f:"1885-03-31",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Mahabo (Menabe)", tur:"sehir", lat:-20.3800, lon:44.6700, g:0, k:0,
  kur:"1600-01-01",
  s:[{f:"1600-01-01",t:"1897-02-28",d:"sakalava-menabe"},
     {f:"1897-02-28",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"madagaskar" },

{ ad:"Ambositra", tur:"sehir", lat:-20.5300, lon:47.2500, g:0, k:0,
  s:[{f:"1281-01-01",t:"1830-01-01",d:"betsileo"},
     {f:"1830-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"madagaskar" },

{ ad:"Gvanda", tur:"sehir", lat:-20.9400, lon:29.0000, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Mananjary", tur:"sehir", lat:-21.2300, lon:48.3400, g:0, k:0,
  kur:"1500-01-01",
  s:[{f:"1500-01-01",t:"1897-02-28",d:"antemoro"},
     {f:"1897-02-28",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"madagaskar" },

{ ad:"Fianarantsoa", tur:"sehir", lat:-21.4500, lon:47.0900, g:0, k:0,
  kur:"1830-01-01",
  s:[{f:"1830-01-01",t:"1897-02-28",d:"merina"},
     {f:"1897-02-28",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Massangena", tur:"sehir", lat:-21.5400, lon:32.9600, g:0, k:0,
  kur:"1895-01-01",
  s:[{f:"1895-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Ganzi (Ghanzi)", tur:"sehir", lat:-21.7000, lon:21.6500, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1885-03-31",d:"tsvana"},
     {f:"1885-03-31",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Okahandja", tur:"sehir", lat:-21.9800, lon:16.9100, g:0, k:0,
  s:[{f:"1281-01-01",t:"1904-01-12",d:"herero"},
     {f:"1904-01-12",t:"1915-07-09",d:"almanya"},
     {f:"1915-07-09",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Cikualakuala", tur:"sehir", lat:-22.0900, lon:31.6800, g:0, k:0,
  kur:"1895-01-01",
  s:[{f:"1895-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Otjimbingve", tur:"sehir", lat:-22.3500, lon:16.1300, g:0, k:0,
  s:[{f:"1281-01-01",t:"1904-01-12",d:"herero"},
     {f:"1904-01-12",t:"1915-07-09",d:"almanya"},
     {f:"1915-07-09",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Vohipeno (Antemoro)", tur:"sehir", lat:-22.3600, lon:47.8300, g:0, k:0,
  kur:"1500-01-01",
  s:[{f:"1500-01-01",t:"1897-02-28",d:"antemoro"},
     {f:"1897-02-28",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"madagaskar" },

{ ad:"Serove (Serowe)", tur:"sehir", lat:-22.3900, lon:26.7100, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1885-03-31",d:"tsvana"},
     {f:"1885-03-31",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"İhosy (Bara)", tur:"sehir", lat:-22.4000, lon:46.1200, g:0, k:0,
  s:[{f:"1281-01-01",t:"1900-01-01",d:"antandroy"},
     {f:"1900-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"madagaskar" },

{ ad:"Gobabis", tur:"sehir", lat:-22.4500, lon:18.9700, g:0, k:0,
  kur:"1856-01-01",
  s:[{f:"1856-01-01",t:"1884-08-07",d:"hollanda"},
     {f:"1884-08-07",t:"1915-07-09",d:"almanya"},
     {f:"1915-07-09",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Palapye", tur:"sehir", lat:-22.5500, lon:27.1300, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1885-03-31",d:"tsvana"},
     {f:"1885-03-31",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Vindhuk (Windhoek)", tur:"sehir", lat:-22.5700, lon:17.0800, g:0, k:0,
  kur:"1890-10-18",
  s:[{f:"1890-10-18",t:"1915-07-09",d:"almanya"},
     {f:"1915-07-09",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Valvis Körfezi", tur:"sehir", lat:-22.9600, lon:14.5100, g:0, k:0,
  kur:"1793-01-01",
  s:[{f:"1793-01-01",t:"1878-03-12",d:"hollanda"},
     {f:"1878-03-12",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Dzata (Venda)", tur:"sehir", lat:-22.9600, lon:30.1500, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1898-01-01",d:"venda"},
     {f:"1898-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Şoşong (Shoshong)", tur:"sehir", lat:-23.0300, lon:26.5000, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1885-03-31",d:"tsvana"},
     {f:"1885-03-31",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Luis Trichardt", tur:"sehir", lat:-23.0500, lon:29.9000, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1898-01-01",d:"venda"},
     {f:"1898-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Rehoboth", tur:"sehir", lat:-23.3200, lon:17.0800, g:0, k:0,
  s:[{f:"1281-01-01",t:"1904-10-03",d:"nama-orlam"},
     {f:"1904-10-03",t:"1915-07-09",d:"almanya"},
     {f:"1915-07-09",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Toliara (Tuléar)", tur:"sehir", lat:-23.3500, lon:43.6700, g:0, k:0,
  kur:"1600-01-01",
  s:[{f:"1600-01-01",t:"1897-02-28",d:"sakalava-menabe"},
     {f:"1897-02-28",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"madagaskar" },

{ ad:"Mabalane", tur:"sehir", lat:-23.4200, lon:32.5500, g:0, k:0,
  kur:"1895-01-01",
  s:[{f:"1895-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Kang", tur:"sehir", lat:-23.6700, lon:22.8000, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1885-03-31",d:"tsvana"},
     {f:"1885-03-31",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"İnhambane", tur:"sehir", lat:-23.8700, lon:35.3800, g:0, k:0,
  kur:"1534-01-01",
  s:[{f:"1534-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Tshane", tur:"sehir", lat:-24.0200, lon:21.8700, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1885-03-31",d:"tsvana"},
     {f:"1885-03-31",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Aranos", tur:"sehir", lat:-24.1300, lon:19.1200, g:0, k:0,
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1915-07-09",d:"almanya"},
     {f:"1915-07-09",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Molepolole (Kvena)", tur:"sehir", lat:-24.4100, lon:25.5000, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1885-03-31",d:"tsvana"},
     {f:"1885-03-31",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Moçudi (Kgatla)", tur:"sehir", lat:-24.4200, lon:26.1500, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1885-03-31",d:"tsvana"},
     {f:"1885-03-31",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Mariental", tur:"sehir", lat:-24.6300, lon:17.9700, g:0, k:0,
  kur:"1890-01-01",
  s:[{f:"1890-01-01",t:"1915-07-09",d:"almanya"},
     {f:"1915-07-09",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Tjate (Pedi)", tur:"sehir", lat:-24.7000, lon:30.0500, g:0, k:0,
  kur:"1650-01-01",
  s:[{f:"1650-01-01",t:"1879-12-02",d:"pedi"},
     {f:"1879-12-02",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Kanye (Ngvaketse)", tur:"sehir", lat:-24.9800, lon:25.3400, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1885-03-31",d:"tsvana"},
     {f:"1885-03-31",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Tolanaro (Fort Dauphin)", tur:"sehir", lat:-25.0300, lon:46.9900, g:0, k:0,
  kur:"1643-01-01",
  s:[{f:"1643-01-01",t:"1674-01-01",d:"fransa"},
     {f:"1674-01-01",t:"1792-09-22",d:"fransa"},
     {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Ambovombe (Antandroy)", tur:"sehir", lat:-25.1700, lon:46.0900, g:0, k:0,
  s:[{f:"1281-01-01",t:"1900-01-01",d:"antandroy"},
     {f:"1900-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"madagaskar" },

{ ad:"Mafikeng", tur:"sehir", lat:-25.8600, lon:25.6400, g:0, k:0,
  kur:"1885-01-01",
  s:[{f:"1885-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Lourenço Marques", tur:"sehir", lat:-25.9693, lon:32.5800, g:0, k:0,
  kur:"1781-01-01",
  s:[{f:"1781-01-01",t:"1923-10-29",d:"portekiz"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Tsabong", tur:"sehir", lat:-26.0200, lon:22.4000, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1885-03-31",d:"tsvana"},
     {f:"1885-03-31",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Lobamba (Svazi)", tur:"sehir", lat:-26.4500, lon:31.2000, g:0, k:0,
  kur:"1815-01-01",
  s:[{f:"1815-01-01",t:"1903-01-01",d:"svazi"},
     {f:"1903-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Bethanie", tur:"sehir", lat:-26.4900, lon:17.1500, g:0, k:0,
  s:[{f:"1281-01-01",t:"1904-10-03",d:"nama-orlam"},
     {f:"1904-10-03",t:"1915-07-09",d:"almanya"},
     {f:"1915-07-09",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Keetmanshoop", tur:"sehir", lat:-26.5800, lon:18.1300, g:0, k:0,
  kur:"1866-01-01",
  s:[{f:"1866-01-01",t:"1884-08-07",d:"hollanda"},
     {f:"1884-08-07",t:"1915-07-09",d:"almanya"},
     {f:"1915-07-09",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Lüderitz", tur:"sehir", lat:-26.6500, lon:15.1600, g:0, k:0,
  kur:"1883-05-01",
  s:[{f:"1883-05-01",t:"1915-07-09",d:"almanya"},
     {f:"1915-07-09",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Potchefstroom", tur:"sehir", lat:-26.7200, lon:27.1000, g:0, k:0,
  kur:"1838-11-01",
  s:[{f:"1838-11-01",t:"1852-01-17",d:"ingiltere"},
     {f:"1852-01-17",t:"1902-05-31",d:"transvaal"},
     {f:"1902-05-31",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Vryburg", tur:"sehir", lat:-26.9500, lon:24.7300, g:0, k:0,
  kur:"1882-08-06",
  s:[{f:"1882-08-06",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Kuruman", tur:"sehir", lat:-27.4500, lon:23.4300, g:0, k:0,
  kur:"1700-01-01",
  s:[{f:"1700-01-01",t:"1885-03-31",d:"tsvana"},
     {f:"1885-03-31",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Nevkasl (Newcastle)", tur:"sehir", lat:-27.7600, lon:29.9300, g:0, k:0,
  kur:"1864-01-01",
  s:[{f:"1864-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Postmasburg", tur:"sehir", lat:-28.3300, lon:23.0700, g:0, k:0,
  kur:"1892-01-01",
  s:[{f:"1892-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Umgungundlovu", tur:"sehir", lat:-28.4200, lon:31.2800, g:0, k:0,
  kur:"1829-01-01",
  s:[{f:"1829-01-01",t:"1879-07-04",d:"zulu-kralligi"},
     {f:"1879-07-04",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Varmbad (Warmbad)", tur:"sehir", lat:-28.4500, lon:18.7400, g:0, k:0,
  s:[{f:"1281-01-01",t:"1904-10-03",d:"nama-orlam"},
     {f:"1904-10-03",t:"1915-07-09",d:"almanya"},
     {f:"1915-07-09",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Upington", tur:"sehir", lat:-28.4500, lon:21.2400, g:0, k:0,
  kur:"1884-01-01",
  s:[{f:"1884-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Kimberley", tur:"sehir", lat:-28.7400, lon:24.7700, g:0, k:0,
  kur:"1871-07-16",
  s:[{f:"1871-07-16",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Griquatown", tur:"sehir", lat:-28.8500, lon:23.2600, g:0, k:0,
  kur:"1804-01-01",
  s:[{f:"1804-01-01",t:"1878-01-01",d:"griqua"},
     {f:"1878-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Pofadder", tur:"sehir", lat:-29.1300, lon:19.4000, g:0, k:0,
  kur:"1875-01-01",
  s:[{f:"1875-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Maseru", tur:"sehir", lat:-29.3100, lon:27.4800, g:0, k:0,
  kur:"1822-01-01",
  s:[{f:"1822-01-01",t:"1868-03-12",d:"basuto"},
     {f:"1868-03-12",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Kenhardt", tur:"sehir", lat:-29.3500, lon:21.1500, g:0, k:0,
  kur:"1868-01-01",
  s:[{f:"1868-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Thaba Bosiu", tur:"sehir", lat:-29.3500, lon:27.7500, g:0, k:0,
  kur:"1822-01-01",
  s:[{f:"1822-01-01",t:"1868-03-12",d:"basuto"},
     {f:"1868-03-12",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Pietermaritzburg", tur:"sehir", lat:-29.6000, lon:30.3800, g:0, k:0,
  kur:"1838-10-01",
  s:[{f:"1838-10-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Springbok", tur:"sehir", lat:-29.6600, lon:17.8900, g:0, k:0,
  kur:"1852-01-01",
  s:[{f:"1852-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Prieska", tur:"sehir", lat:-29.6700, lon:22.7500, g:0, k:0,
  kur:"1878-01-01",
  s:[{f:"1878-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Durban", tur:"sehir", lat:-29.8600, lon:31.0200, g:0, k:0,
  kur:"1824-06-01",
  s:[{f:"1824-06-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Philippolis", tur:"sehir", lat:-30.2700, lon:25.2800, g:0, k:0,
  kur:"1804-01-01",
  s:[{f:"1804-01-01",t:"1878-01-01",d:"griqua"},
     {f:"1878-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı" },

{ ad:"Kokstad", tur:"sehir", lat:-30.5500, lon:29.4200, g:0, k:0,
  kur:"1863-01-01",
  s:[{f:"1863-01-01",t:"1874-01-01",d:"ingiltere"},
     {f:"1874-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Colesberg", tur:"sehir", lat:-30.7200, lon:25.1000, g:0, k:0,
  kur:"1830-01-01",
  s:[{f:"1830-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Kalvinia", tur:"sehir", lat:-31.4700, lon:19.7800, g:0, k:0,
  kur:"1847-01-01",
  s:[{f:"1847-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Umtata", tur:"sehir", lat:-31.5900, lon:28.7900, g:0, k:0,
  kur:"1882-01-01",
  s:[{f:"1882-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Graaff-Reinet", tur:"sehir", lat:-32.2500, lon:24.5300, g:0, k:0,
  kur:"1786-01-01",
  s:[{f:"1786-01-01",t:"1806-01-18",d:"hollanda"},
     {f:"1806-01-18",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Gcuva (Butterworth)", tur:"sehir", lat:-32.3300, lon:28.1500, g:0, k:0,
  s:[{f:"1281-01-01",t:"1878-01-01",d:"xhosa"},
     {f:"1878-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — Gcaleka Xhosa'sının büyük yeri bu havzada; Butterworth misyonu 1827'de aynı yere kuruldu. 1281 XHOSA YERLEŞİMİNİN atlas ufkudur, KASABA tarihi DEĞİL" },

{ ad:"Beaufort West", tur:"sehir", lat:-32.3500, lon:22.5800, g:0, k:0,
  kur:"1818-01-01",
  s:[{f:"1818-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"King William's Town", tur:"sehir", lat:-32.8800, lon:27.4000, g:0, k:0,
  kur:"1835-05-24",
  s:[{f:"1835-05-24",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"East London", tur:"sehir", lat:-33.0177, lon:27.9088, g:0, k:0,
  kur:"1847-01-01",
  s:[{f:"1847-01-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Grahamstown", tur:"sehir", lat:-33.3000, lon:26.5300, g:0, k:0,
  kur:"1812-08-14",
  s:[{f:"1812-08-14",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Stellenbosch", tur:"sehir", lat:-33.9300, lon:18.8600, g:0, k:0,
  kur:"1679-11-08",
  s:[{f:"1679-11-08",t:"1806-01-18",d:"hollanda"},
     {f:"1806-01-18",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Port Elizabeth", tur:"sehir", lat:-33.9600, lon:25.6000, g:0, k:0,
  kur:"1820-06-01",
  s:[{f:"1820-06-01",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },

{ ad:"Svellendam", tur:"sehir", lat:-34.0200, lon:20.4400, g:0, k:0,
  kur:"1745-01-01",
  s:[{f:"1745-01-01",t:"1806-01-18",d:"hollanda"},
     {f:"1806-01-18",t:"1923-10-29",d:"ingiltere"}],
  kaynak:"bulunamadı — standart akademik el kitabı; TDV bu taneciği kapsamıyor (§4)" },


];

;
