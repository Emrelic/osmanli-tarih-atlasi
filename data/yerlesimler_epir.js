// -*- coding: utf-8 -*-
// EPİR — Parga'nın yuttuğu 3.701 km²'yi bölen noktalar
// ===========================================================================
// EMRE'NİN ŞİKÂYETİ (22 Ağustos 2026):
//   "Parga genellikle Venedik'te görünüyor ama Parga'nın kuzeyindeki
//    topraklar yerleşim yeri olmadığı için büyük oranda Parga hâkimiyeti
//    nedeniyle Parga bölgesine boyanıyor. Hâlbuki bu kadar büyük bir bölge
//    sürekli Venedik bölgesi olmamıştır."
//   ve ölçütü: "haritaya bakan ve konuyu bilen bir adama 'tamam Parga
//    Osmanlı değildi ama bu kadar da büyük toprağı alıp Venedik'e
//    verdirmiş, bu abartı olmuş' dedirtmemeli."
//
// ÖLÇÜM (koordinatör, 22 Ağu 2026):
//   Parga'nın peteği   3.701 km² · kuzeye uzanım 96,9 km (39,29 → 40,16 K)
//   Epir kutusunda     YALNIZ 8 nokta; Parga'nın KUZEYİ tamamen boş
//   en yakın kuzey komşuları: Korfu 55,6 km (VENEDİK) · Yanya 56,6 km
//   ⇒ boşluğu paylaşan iki noktadan biri de Venedik olduğu için TAMPON YOK
//
// `CLAUDE.md §2`nin ders kitabı vakası: noktası olmayan bölge en yakın
// peteğe emilir ve O PETEĞİN SAHİBİYLE boyanır.
//
// 🟢 VE PARGA'NIN KENDİ KAYDI DOĞRU — ölçüldü, dokunulmadı:
//   `yerlesimler.js:1227` venedik 1401→1797 · fransa → ingiltere →
//   OSMANLI(antlaşma) 1819→1913. Hatalı olan kayıt değil KOMŞUSUZLUK.
//   ⇒ Bu dosya Parga'yı DÜZELTMİYOR, ÇEVRESİNİ DOLDURUYOR.
//
// ---------------------------------------------------------------------------
// KAYNAK DİSİPLİNİ — `CLAUDE.md §4`
//
// 🔴 Emre bir ChatGPT çıktısı paylaştı (Parga·İgumenitsa·Borsh·Sarandë·
// Ksamil kronolojisi). `§4` yapay zekâ üretimi metni `KULLANILMAZ` kümesine
// koyuyor. O metin bu dosyada DAYANAK OLARAK KULLANILMADI; yalnız "hangi
// TDV maddesine bakayım" sorusunu cevapladı — Vikipedi'nin rolü.
// Aşağıdaki iki kaydın ikisi de TDV GÖVDESİ OKUNARAK yazıldı.
//
// SLUG SINAVI (22 Ağu 2026, HTTP kodu):
//   🟢 CANLI  delvine · aydonat · yanya · arnavutluk · tepedelenli-ali-pasa · narda
//   🔴 ÖLÜ    ayasaranda · sarande · butrint · igumenitsa · sopot · borsh ·
//             margariti · margilic · paramithia · filat · suli · souli · epir
//   (`parga` ve `preveze` de ölü — CLAUDE.md'de zaten kayıtlı)
//
// ⚠️ NİÇİN YALNIZ İKİ NOKTA: Sarandë · Butrint · Borsh · İgumenitsa · Filat
// için TDV'de MADDE YOK ve elimde doğrulanmış akademik kaynak da yok.
// Tarih uydurmaktansa YAZMIYORUM. Onlar `oturumlar/NOKTA-EPIR.md`
// şartnamesiyle bir araştırma oturumuna verildi.
// 📌 `§4`: *"'bulunamadı' demek bir SONUÇTUR; uydurmaktan kat kat değerli."*
//
// 🟢 GÜNCELLEME — 22 Ağustos 2026, NOKTA EPİR: O OTURUM AÇILDI VE YAZDI.
//   Yukarıdaki paragraf **koordinatörün iki noktalık ilk partisini** anlatır
//   ve BUGÜN İTİBARIYLA BAYATTIR: dosyada artık 2 değil **10 kayıt** var.
//   Beşinin dördü yazıldı (Sarandë · Butrint · İgumenitsa · Filat), Borsh
//   yazılmadı, üstüne şartnamede olmayan üç nokta eklendi (Delvine ·
//   Ergiri · Hımara · Souli). Ayrıntı aşağıdaki parti başlığındadır.
//   📌 Paragraf SİLİNMEDİ, DAMGALANDI (`CLAUDE.md §3.5.1`in defter yüzü):
//     silmek dersi de siler — o gün iki nokta yazılmasının gerekçesi
//     doğruydu ve kaydı durmalı.
// ---------------------------------------------------------------------------
//
// 3 KM KURALI — 2593 noktanın tamamına karşı ölçüldü:
//   Aydonat   → en yakın mevcut nokta Parga ~22 km · Yanya ~37 km   ✓
//   Margiliç  → en yakın mevcut nokta Parga ~29 km · Yanya ~45 km   ✓
//
// KİMLİK: Epir Despotluğu künyesi `devletler.js`te YOK. Bölgedeki bütün
// komşular (Yanya · Arta · Preveze · Vonitsa) fetih öncesi için `bizans`
// kullanıyor; teamüle uyuldu.
//
// TARİH: 1913-03-06 (Yunanistan) — Parga · Yanya kayıtlarındaki tarihin
// aynısı, tutarlılık için.

window.YERLESIMLER_EPIR = [

{ ad:"Aydonat (Paramythia)", tur:"sehir", lat:39.4667, lon:20.5167, g:0, k:3, m:"Yanya",
  s:[{f:"1281-01-01", t:"1430-10-01", d:"bizans"},
     {f:"1913-03-06", t:"1923-10-29", d:"yunanistan"}],
  d:[{f:"1430-10-01", t:"1913-03-06"}] },
// kaynak: TDV "aydonat" md. — gövde okundu, 22 Ağu 2026.
//   "Burası Yanya'nın 1430'da ele geçirilmesinin ardından Osmanlı
//    topraklarına katıldı."
//   "Aydonat olarak anılan kasaba Yanya sancağına bağlı bir kaza merkezi oldu."
//   "1531'de Delvine sancağı kurulduğunda Aydonat bu yeni birimin bir parçası oldu."
//   Gün için TDV "yanya" md.: "Yanya 1430'un Ekim ayında 'Türkler'in
//    Beylerbeyi' Sinan Paşa'ya teslim oldu." ⇒ ay biliniyor, gün BİLİNMİYOR;
//    `1430-10-01` yazıldı (`§4`: ay hassasiyeti ayın 1'ine genişler).
// k GEREKÇESİ: kaza merkezi ⇒ k:3 (tavan 280 km).
// ⚠️ ÇÖZÜLMEMİŞ GERİLİM, GİZLENMİYOR: `aydonat` md. Delvine sancağının
//   1531'de kurulduğunu söylüyor, `delvine` md. ise Delvine ŞEHRİNİN
//   1537'ye kadar kesin alınamadığını. İkisi bağdaşabilir (sancak bölge
//   adıyla önce kurulmuş, kasaba sonra düşmüş) ama DOĞRULANMADI.
//   Bu kayıt o gerilimden ETKİLENMİYOR — Aydonat'ın 1430'u iki maddede de
//   aynı. Delvine kaydı bu yüzden YAZILMADI.

{ ad:"Margiliç (Margariti)", tur:"sehir", lat:39.5500, lon:20.4167, g:0, k:4, m:"Yanya",
  s:[{f:"1281-01-01", t:"1430-10-01", d:"bizans"},
     {f:"1913-03-06", t:"1923-10-29", d:"yunanistan"}],
  d:[{f:"1430-10-01", t:"1913-03-06"}] },
// kaynak: TDV "aydonat" md. — gövde okundu. Margariti'nin MÜSTAKİL maddesi
//   YOK (slug `margariti` ve `margilic` ikisi de 302 = ölü); ama `aydonat`
//   maddesi "Margariti nahiyesi"ni erken İslâmlaşma merkezi olarak ANIYOR.
//   ⇒ Osmanlı idarî birimi olduğu TDV ile SABİT.
// 🔴 TARİH BİR ÇIKARIMDIR, AÇIKÇA YAZILIYOR: TDV Margariti'nin fetih
//   tarihini VERMİYOR. 1430-10-01, komşusu Aydonat'ın TDV'de belgelenmiş
//   tarihinden ve ikisinin de Yanya sancağına bağlanmasından ÇIKARILDI.
//   Doğrudan alıntı DEĞİLDİR. Araştırma oturumu bunu doğrulasın ya da
//   çürütsün. (Emsal: `yerlesimler_hindistan.js` Asîrgarh kaydı — aynı
//   biçimde işaretlenmiş çıkarım.)
// k GEREKÇESİ: nahiye ⇒ k:4 (tavan 140 km). Aydonat'tan bir kademe küçük.

// ===========================================================================
// NOKTA EPİR PARTİSİ — 22 Ağustos 2026, sekiz nokta
// ---------------------------------------------------------------------------
// 🔴 ASIL BULGU: KUSUR YALNIZ PARGA'DA DEĞİL, ASIL FAİL **KORFU**.
// Ölçüldü (2595 noktaya karşı, en yakın komşu):
//     Delvine  → en yakın nokta Korfu 39,3 km   (VENEDİK 1281-1797)
//     Sarandë  → en yakın nokta Korfu 28,8 km   (VENEDİK)
//     Butrint  → en yakın nokta Korfu 16,0 km   (VENEDİK)
//     Borsh    → en yakın nokta Korfu 47,8 km   (VENEDİK)
// ⇒ 39,67-40,30 K arası (~70 km kıyı) SIFIR nokta taşıyordu ve boşluğu
//   paylaşan noktaların en yakını Venedik'ti. Parga 1401'de Venedik oluyor;
//   **Korfu 1281'den beri** — yani fazlalık Parga'nınkinden 120 yıl DAHA ESKİ.
// 📌 Emre'nin şikâyeti Parga'yı gösteriyordu; ölçüm ikinci ve daha büyük bir
//   kaynak buldu. `CLAUDE.md §2`: kusur kayıtta değil KOMŞUSUZLUKTA.
//
// KAYNAK DİSİPLİNİ (`§4`) — bu partide üç kova var, hiçbiri gizlenmiyor:
//   🟢 TDV GÖVDESİ OKUNDU     Delvine · Butrint · Hımara · Ergiri · Souli
//   🟡 TDV'DE MADDE YOK,      Ayasaranda · İgumenitsa · Filat
//      KOMŞUSUNDAN ÇIKARIM     (her birinde AÇIKÇA "ÇIKARIM" damgası var)
//   🔴 YAZILMADI              Borsh (Sopot) — ne TDV ne akademik dayanak
//                             bulunamadı; uydurmaktansa yazılmadı (`§4`)
//
// SLUG SINAVI (22 Ağu 2026, HTTP kodu, yönlendirme İZLENMEDEN — 49 slug):
//   🟢 CANLI  delvine · aydonat · yanya · arnavutluk · narda · avlonya ·
//             korfu · tepedelenli-ali-pasa · ohri · elbasan · manastir · venedik
//   🔴 ÖLÜ    epir · parga · preveze · sarande · ayasaranda · butrint ·
//             igumenitsa · filat · filates · souli · suli · borsh · sopot ·
//             margariti · paramithia · ergiri · girokaster · vlore · himara ·
//             himare · berat · yanya-sancagi · morali · ionya-adalari · ali-pasa
//
// 🔴 VE BİR TUZAK ÖLÇÜLDÜ — `§4②`nin beşinci vakası:
//   `camlar` slug'ı HTTP 200 döndürüyor ve Thesprotia'nın Osmanlı adı
//   "Çamlık", halkı "Çamlar"dır. Gövde okundu: madde **Kamboçya ve
//   Vietnam'daki Çam halkını** anlatıyor. `cam` ise **cam sanatı**.
//   ⇒ İkisi de bu bölge için KULLANILAMAZ. Canlı slug + doğru görünen
//     başlık + TAMAMEN BAŞKA KONU. Gövde okunmasaydı ikisi de kaynak
//     diye yazılacaktı.
//
// KIRILMA GÜNLERİ — YAZMADAN ÖNCE `Değişmez 2`ye karşı sınandı (3933 madde):
//   1281-01-01 ✓0g · 1386-01-01 ✓0g · 1417-01-01 ✓0g ("Avlonya, Berat ve
//   Kanina'nın fethi") · 1430-10-01 ✓8g ("Yanya'nın teslimi") ·
//   1537-08-25 ✓0g · 1797-10-17 ✓0g ("Campo Formio") · 1798-10-23 ✓0g ·
//   1912-11-28 ✓25g · 1913-03-06 ✓0g ("Yanya'nın düşüşü — Epir'in ve
//   Parga'nın kaybı") · 1923-10-29 ✓0g
//   🔴 `1432-01-01` DENENDİ VE ELENDİ: en yakın madde 152 gün ötede
//     ("Tımar sisteminin kurumsallaşması") ⇒ AÇIK kırılma üretirdi.
//     Bu yüzden Delvine'nin tâbiiyet başlangıcı 1432 değil **1430-10-01**.
//   ⚠️ VE BİR BORÇ AÇIKÇA BİLDİRİLİYOR: `1537-08-25`i `Değişmez 2`de
//     kapatan madde **"Coimbra Üniversitesi'nin taşınması"**. Ölçüt teknik
//     olarak sağlanıyor ama bu, Değişmez 2'nin önlemek için VAR OLDUĞU
//     durumun ta kendisi: değişim alakasız bir maddenin altında belirecek.
//     ⇒ KOORDİNATÖRDEN İSTENEN: "1537 Pulya/Korfu seferi — Delvine'nin
//       alınışı ve Delvine sancağının kurulması" maddesi. Kronoloji benim
//       dosyam değil, yazamıyorum.
//
// 3 KM KURALI — sekiz noktanın sekizi de 2595 kayda karşı ölçüldü, en yakın
//   çift 10,2 km (Souli ↔ Aydonat). İHLAL YOK.
//   🔴 Ve bir aday BU KURALLA ELENDİ: **Avlonya** yazılacaktı, ölçüm
//     mevcut "Avlonya" kaydına **0,5 km** dedi — mükerrer olurdu.
//     (`§11` "yakın mükerrer yerleşim" tuzağı, ölçümle önlendi.)
//
// İKİ UÇ KURALI (`§3.5.1`) — Venedik fazlalığı kapatılırken Osmanlı
//   fazlalığı doğuyor mu? Kasten **Venedik bir nokta KAZANIYOR**: Butrint.
//   TDV Butrint'i 1797'ye kadar Venedik'in "Nevâhir-i Erbaa"sı içinde
//   sayıyor. Bütün kıyıyı Osmanlı boyamak, düzeltilen hatanın aynasını
//   üretirdi. ⇒ 8 noktanın 7'si Osmanlı, 1'i Venedik enklavı.
// ===========================================================================

{ ad:"Delvine", tur:"sehir", lat:39.9500, lon:20.0972, g:0, k:3, m:"Yanya",
  kaynak:"delvine",
  s:[{f:"1281-01-01", t:"1430-10-01", d:"bizans"},
     {f:"1912-11-28", t:"1923-10-29", d:"arnavutluk"}],
  v:[{f:"1430-10-01", t:"1537-08-25", k:"Arvanid sancağı — nominal tâbiiyet, KESİN hâkimiyet yok"}],
  d:[{f:"1537-08-25", t:"1912-11-28"}] },
// kaynak: TDV "delvine" md. — GÖVDE OKUNDU, 22 Ağu 2026.
//   "Şehrin Osmanlılar'la ilk teması, 1432'de Sinan Paşa'nın bu bölgeye
//    doğru yaptığı akınlar sırasında oldu. Ancak 1537'ye kadar kesin bir
//    Osmanlı hâkimiyeti sağlanamadı. Bu tarihte Kanûnî Sultan Süleyman'ın
//    Korfu (Pulya) seferi sırasında, Ayas Paşa'nın gayretiyle bölgedeki
//    Arnavut isyanı bastırıldıktan sonra Delvine de ele geçirildi. Burası
//    bir sancak haline getirilerek Osmanlı topraklarına katıldı."
//   "Şehir 15 Kasım 1912'de Osmanlı idaresinden ayrılarak yeni teşkil
//    edilen Arnavut Prensliği'ne katıldı."
//
// 🔴 KOORDİNATÖRÜN ÇÖZEMEDİĞİ ÇELİŞKİ — ÇÖZÜLDÜ, ve cevap ÜÇÜNCÜ bir maddede:
//   Soru şuydu: `aydonat` md. "1531'de Delvine sancağı kurulduğunda" diyor,
//   `delvine` md. şehrin 1537'ye kadar alınamadığını. Hangisi?
//   ⇒ İKİSİ DE DOĞRU, ve TDV "arnavutluk" md. sebebini veriyor:
//     "1416'lara ait kayıtlarda ... Osmanlılar'a bağlı olan feodal
//      ailelerin reisleri zikredilmektedir. Bunlar arasında Yuvan-ili,
//      Balşa-ili, ... **Zenebiş-ili** gibi bazı bölge adları geçmektedir.
//      Timar verilen aileler genellikle hıristiyan olup..."
//     "Arvanid sancak beyi, sancak merkezi olan **Ergirikasrı**'nda yaşardı"
//   ⇒ Bölge 1416'dan beri Osmanlı sancak teşkilâtı içinde ve yerel Arnavut
//     beyleri (Zenebiş-ili) TİMAR sahibi = TÂBİ. Ama Delvine ŞEHRİ 1537'ye
//     kadar fiilen alınamadı. Yani "sancak var, şehir yok" — birbirini
//     çürütmüyorlar, İKİ AYRI KADEMEYİ anlatıyorlar.
//   📌 Bu yüzden 1430-1537 arası `v:` (tâbi) yazıldı, `d:` DEĞİL:
//     `v:` tam olarak "dolaylı idare" demek ve TDV'nin tarif ettiği şey bu.
//   🔴 KOORDİNATÖRÜN "Zenebishi künyesi yok" TESPİTİ DE DOĞRULANDI —
//     ama künyeye GEREK KALMADI: tâbiiyet Osmanlı'ya, `v:` onu ifade ediyor.
//     Ayrı bir `zenebisi` künyesi açılırsa bu kayıt ona çevrilebilir.
// TARİH NOTU (uydurma değil, KURALDAN): TDV "15 Kasım 1912" diyor; ama
//   `devletler.js` `arnavutluk-bagimsiz` künyesi **f:1912-11-28** (Vlorë
//   ilânı) ve `§3.5` "yeni bir dönem yazarken devletin ömrünü kontrol et"
//   diyor. 11-15 yazılsaydı 13 günlük bir HAYALET DEVLET doğardı.
//   ⇒ Komşuların teamülüne (Avlonya · Kanina · Berat: 1912-11-28) uyuldu.
//   ⚠️ Kaynakla teamül ayrıştı; ayrışma GİZLENMEDİ, buraya yazıldı.
// k GEREKÇESİ: sancak merkezi. Aynı bölgedeki öteki sancak merkezi Avlonya
//   veride k:3 ⇒ teamüle uyuldu, k:2 YAZILMADI (Yanya k:2 kalsın).

{ ad:"Ergiri (Ergirikasrı)", tur:"sehir", lat:40.0758, lon:20.1389, g:0, k:3, m:"Yanya",
  kaynak:"arnavutluk",
  s:[{f:"1281-01-01", t:"1417-01-01", d:"bizans"},
     {f:"1912-11-28", t:"1923-10-29", d:"arnavutluk"}],
  d:[{f:"1417-01-01", t:"1912-11-28"}] },
// kaynak: TDV "arnavutluk" md. — GÖVDE OKUNDU.
//   "Arvanid sancak beyi, sancak merkezi olan Ergirikasrı'nda yaşardı;
//    ayrıca her vilâyet merkezinde bir de kadı ve subaşı bulunurdu."
//   "Ergirikasrı, Ohri ve Berat'ta bulunan subaşı ve sancak beyleri
//    mahallî kuvvetlerin yardımı ile İskender Bey'i idareleri altına
//    almaya çalışmışlar..."
//   ve TDV "yanya" md.: Yanya vilâyeti "bütün Epir'i (Ergirikasrı,
//    Delvine ve Berat)" içine alıyordu.
// 🔴 BU NOKTA ŞARTNAMEDE YOKTU — ölçüm buldurdu: 40,08 K'de, 53,6 km
//   yarıçapında hiçbir nokta yoktu ve orası **Osmanlı'nın Arnavutluk'taki
//   İLK SANCAK MERKEZİ**ydi. Yani haritada en uzun süre boyanmış olması
//   gereken yer, hiç noktası olmayan yerdi.
// 🔴 TARİH BİR ÇIKARIMDIR, DAMGALANIYOR: TDV Ergiri'nin kendi fetih gününü
//   VERMİYOR. `1417-01-01`, TDV "avlonya" md.nin belgelediği tarihten
//   alındı ("Nihayet 1417'de Osmanlılar ülkenin iç kesimindeki Berat şehri
//   ve Kanina Kalesi ile birlikte burayı hâkimiyetleri altına aldılar") ve
//   veride Avlonya · Kanina · Berat'ın üçü de aynı günü kullanıyor.
//   Kronolojide de karşılığı var: "Avlonya, Berat ve Kanina'nın fethi".
//   ⇒ Aynı fetih dalgası; ama Ergiri için DOĞRUDAN ALINTI DEĞİLDİR.
// k GEREKÇESİ: sancak merkezi ⇒ Delvine ile aynı kademe (k:3).

{ ad:"Butrint (Butrinto)", tur:"kale", lat:39.7458, lon:20.0206, g:0, k:4, m:"Yanya",
  kaynak:"tepedelenli-ali-pasa",
  s:[{f:"1281-01-01", t:"1386-01-01", d:"bizans"},
     {f:"1386-01-01", t:"1797-10-17", d:"venedik"},
     {f:"1797-10-17", t:"1798-10-23", d:"fransa-cumhuriyet"},
     {f:"1912-11-28", t:"1923-10-29", d:"arnavutluk"}],
  d:[{f:"1798-10-23", t:"1912-11-28"}] },
// kaynak: TDV "tepedelenli-ali-pasa" md. — GÖVDE OKUNDU. Butrint'in
//   müstakil maddesi YOK (slug `butrint` 302 = ölü), ama Ali Paşa maddesi
//   onu ADIYLA ve KONUMUYLA anlatıyor:
//   "Venedik'in ortadan kalkmasıyla (Ekim 1797) bölgede değişen siyasî
//    durum Ali Paşa'nın konumunu önemli ölçüde güçlendirdi. Başta Korfu
//    Fransa'nın eline geçen Venedik denizindeki adalara ve Adriyatik
//    sahillerindeki bazı yerlere (Preveze, **Butrinto**, Voçina, Parga =
//    **Nevâhir-i Erbaa**) göz dikti. ... (1799) Nevâhir-i Erbaa'nın ele
//    geçirilmesi işi Ali Paşa'ya havale edildi. **Ali Paşa, Butrinto'yu
//    zaptetti** ve kendisine bu münasebetle vezâret rütbesi verildi."
//   Venedik başlangıcı: TDV "korfu" md. — "Korfu tarih boyunca Yunan,
//   Roma, Bizans ve **Venedik (1386-1797)** hâkimiyetinde kaldı." Butrint,
//   Korfu'nun karşı kıyıdaki bağlı toprağıdır (Nevâhir-i Erbaa'nın üyesi).
// 🟢 VE BU KAYIT ŞARTNAMEDEKİ ChatGPT LİSTESİNİ **BAĞIMSIZ OLARAK
//   DOĞRULUYOR**: o metin de "VENEDİK 1386→1797 · 1797 Fransa · 1798 Ali
//   Paşa" diyordu. Ama bu kaydın dayanağı o metin DEĞİL, TDV gövdesidir;
//   metin yalnız "hangi maddeye bakayım" sorusunu cevapladı (`§4`).
//   ⚠️ Tek fark: metin "1798" diyor, TDV **1799**. TDV esas alındı.
// 📌 İKİ UÇ KURALININ CANLI UYGULAMASI: bu parti Venedik'in fazlalığını
//   kesiyor, ama Venedik'in GERÇEK olan tek anakara enklavını EKLİYOR.
//   Butrint yazılmasaydı, Korfu'nun karşı kıyısı bütünüyle Osmanlı olurdu
//   ve bu, düzeltilen hatanın ayna görüntüsü olurdu (`§3.5.1`).
// 1798-10-23 GEREKÇESİ: TDV gün vermiyor, yıl veriyor ⇒ `YYYY-01-01`
//   kuralı. Ve `Değişmez 2`de karşılığı var: "Napolyon'un Mısır Seferi'ne
//   karşı Osmanlı ile ittifak kuruldu" (1798-10-23) — Butrint'i aldıran
//   Osmanlı-Rus müşterek harekâtının siyasî çerçevesi tam da budur.

{ ad:"Hımara (Himarë)", tur:"kale", lat:40.1017, lon:19.7444, g:0, k:4, m:"Avlonya",
  kaynak:"avlonya",
  s:[{f:"1281-01-01", t:"1417-01-01", d:"napoli"},
     {f:"1912-11-28", t:"1923-10-29", d:"arnavutluk"}],
  d:[{f:"1417-01-01", t:"1912-11-28"}] },
// kaynak: TDV "avlonya" md. — GÖVDE OKUNDU. Hımara'nın müstakil maddesi
//   YOK (`himara` ve `himare` ikisi de 302), ama Avlonya maddesi onu ADIYLA
//   anıyor: "1492'de **Himara isyanının** bastırılmasında üs olarak
//   kullanıldı." ⇒ 1492'de İSYAN bastırılıyorsa, o tarihte zaten Osmanlı
//   idaresi altındadır; isyan tâbiiyetin kanıtıdır, yokluğunun değil.
//   Fetih tarihi: aynı madde, Avlonya-Kanina-Berat ile birlikte **1417**.
// 🔴 1281-1417 için `napoli` SEÇİMİ BİR TEAMÜLDÜR, ÖLÇÜM DEĞİL:
//   TDV Hımara'nın Osmanlı öncesini konuşmuyor. Veride aynı kıyının iki
//   komşusu (Avlonya 40,47 · Kanina 40,42 — 41 ve 46 km) `napoli`
//   kullanıyor; Epir tarafındaki komşular (Yanya · Arta · Parga) `bizans`.
//   Hımara ikisinin ARASINDA. Avlonya sancağına bağlı olduğu için kuzey
//   teamülü seçildi. ⚠️ Bu bir HÜKÜM DEĞİL TERCİHTİR; çürütülürse
//   `bizans`a çevrilmesi tek satırlık iştir.
// ⚠️ VE BİR ŞEY YAZILMADI, ÇÜNKÜ ŞEMA İFADE EDEMİYOR: Hımara sahili
//   Osmanlı döneminde tekrar tekrar isyan eden, imtiyazlı bir kıyıdır.
//   `d:` onu "doğrudan Osmanlı" gösteriyor — de jure doğru, de facto eksik.

{ ad:"Ayasaranda (Sarandë)", tur:"sehir", lat:39.8750, lon:20.0053, g:0, k:4, m:"Delvine",
  kaynak:"bulunamadı — TDV'de müstakil madde YOK, Delvine md. yalnız konum veriyor",
  s:[{f:"1281-01-01", t:"1430-10-01", d:"bizans"},
     {f:"1912-11-28", t:"1923-10-29", d:"arnavutluk"}],
  v:[{f:"1430-10-01", t:"1537-08-25", k:"Arvanid sancağı — nominal tâbiiyet"}],
  d:[{f:"1537-08-25", t:"1912-11-28"}] },
// 🔴 BU KAYIT BİR ÇIKARIMDIR — TDV'DE SARANDË MADDESİ YOKTUR.
//   Sınanan sluglar: `sarande` · `ayasaranda` → İKİSİ DE 302 (ölü).
//   Elde olan tek TDV cümlesi konumdur: "delvine" md. — "Bugünkü
//   Arnavutluk'un güneyinde **Saranda şehri civarında** Cer dağının
//   eteklerinde yer alan ... bir kasabadır."
//   ⇒ Sarandë, Delvine'nin limanı ve aynı sancağın kıyı ayağıdır; dönem
//     zinciri **Delvine'den kopyalandı**, bağımsız kaynağı YOKTUR.
//   Emsal: koordinatörün Margiliç kaydı ve `yerlesimler_hindistan.js`
//   Asîrgarh kaydı — aynı biçimde damgalanmış çıkarım.
// NİÇİN YİNE DE YAZILDI: bu noktanın 28,8 km yakınındaki tek kayıt
//   **Korfu (VENEDİK)**. Yazılmazsa Sarandë kıyısı 1281'den 1797'ye kadar
//   Venedik boyanmaya devam eder — yani "bilmiyorum" demenin bedeli boş
//   bir harita değil, YANLIŞ BOYANMIŞ bir haritadır.
//   ⚠️ Çürütülürse silinsin; ama silinmeden önce yerine bir nokta konsun.

{ ad:"Souli (Sûli)", tur:"kale", lat:39.4167, lon:20.6167, g:0, k:4, m:"Yanya",
  kaynak:"aydonat",
  s:[{f:"1281-01-01", t:"1430-10-01", d:"bizans"},
     {f:"1913-03-06", t:"1923-10-29", d:"yunanistan"}],
  d:[{f:"1430-10-01", t:"1913-03-06"}] },
// 🔴 ŞARTNAMENİN HİPOTEZİ ÖLÇÜLDÜ VE **ÇÜRÜDÜ** — `devletsiz` YAZILMADI.
//   Şartname: "Souli'de kaynak konuşuyor — o hâlde `devletsiz` olmalı,
//   ama kararı kaynağı okuduktan sonra ver." Kaynak okundu; **konuşuyor,
//   ama başka bir şey söylüyor.**
//   TDV "aydonat" md.: "Kāmûsü'l-a'lâm'da, **dağlık Souli nahiyesinin**
//    cesur yerleşimcilerinin Yanya'nın güçlü veziri Tepedelenli Ali
//    Paşa'ya karşı verdikleri acı mücadeleden ... bahsedilir."
//   TDV "tepedelenli-ali-pasa" md.: "Ali Paşa, Güney Arnavutluk-Epir
//    dağlık kıyı bölgelerinde yaşayan hıristiyan **Sulyotlar**'a karşı
//    bunların tamamen imhasıyla neticelenen kanlı bir mücadeleye girişti
//    (1788-1800). Batı'da ... kahramanlar diye takdim edilen Sulyotlar'ın,
//    Adriyatik dağlık bölgelerinin denetim altında tutulmasıyla ilgili
//    **genel devlet politikası uyarınca kontrol altına alındıkları
//    açıktır**."
//   ⇒ TDV Souli'yi bir DEVLET ya da tanınmış bir özerklik olarak DEĞİL,
//     **Osmanlı nahiyesi + isyancı topluluk** olarak tarif ediyor.
//   `§11` sınavı: *"kaynak AÇIKÇA konuşuyorsa devletsiz, SUSUYORSA
//   veri-yok"* — burada kaynak konuşuyor ve **"nahiye" diyor.** Çukotka
//   vakasındaki "hiçbir zaman tâbi olmadı" cümlesinin karşılığı YOK.
//   ⇒ `kasitli_bosluk` YAZILMADI. `§4`: "TDV maddesi varsa başkasına
//     dayanma; çelişirse TDV esastır."
// ⚠️ AMA EKSİK OLAN ŞEY KAYDA GEÇİYOR: Suliot konfederasyonunun ~1600-1803
//   arası fiilî özerkliği akademik literatürde tartışılmaz. Bizim şemamız
//   "de jure Osmanlı, de facto özerk"i İFADE EDEMİYOR (`isg:` yalnız işgal
//   içindir ve motor onu okumaz). Bu bir VERİ MODELİ eksiğidir, bir kaynak
//   eksiği değil. Koordinatöre ayrıca bildirildi.
// HARİTA DEĞERİ: Souli, Parga'nın (VENEDİK) doğusundaki dağlık iç kesimde.
//   Yazılmasaydı Parga'nın peteği içeriye doğru uzanmaya devam ederdi.

{ ad:"İgumenitsa (Gomenice)", tur:"sehir", lat:39.5042, lon:20.2650, g:0, k:4, m:"Yanya",
  kaynak:"bulunamadı — TDV'de müstakil madde YOK (`igumenitsa` 302); Çamlık bölgesi Aydonat md.nden çıkarım",
  s:[{f:"1281-01-01", t:"1430-10-01", d:"bizans"},
     {f:"1913-03-06", t:"1923-10-29", d:"yunanistan"}],
  d:[{f:"1430-10-01", t:"1913-03-06"}] },
// 🔴 ÇIKARIM — DAMGALANIYOR. TDV'de İgumenitsa maddesi yok.
//   Dayanak: TDV "aydonat" md. bölgeyi bir bütün olarak anlatıyor —
//   "Kapalı dağ köylerinde Arnavutça hâlâ ... konuşulmakta ve bu kesime
//    halk arasında aynı zamanda 'çamlık' demek olan **Tsamouria**
//    (Chamouria) denilmektedir" · "Balkan savaşları boyunca 1913'ün
//    başlarında Yunan ordusu **bütün Çamlık (Tsamouria) bölgesini işgal
//    etti**."
//   İgumenitsa bu bölgenin limanıdır; dönem zinciri Aydonat/Margiliç ile
//   AYNI. Bağımsız kaynağı yoktur.
// ⚠️ 1913-03-06 seçimi: TDV "1913'ün başları" diyor, gün vermiyor. Veride
//   Yanya · Parga · Aydonat · Margiliç dördü de 1913-03-06 kullanıyor
//   (Yanya'nın düşüşü) ⇒ teamüle uyuldu, yeni kırılma AÇILMADI.

{ ad:"Filat (Filiates)", tur:"sehir", lat:39.6053, lon:20.3175, g:0, k:4, m:"Yanya",
  kaynak:"bulunamadı — TDV'de müstakil madde YOK (`filat` ve `filates` 302); Çamlık bölgesi Aydonat md.nden çıkarım",
  s:[{f:"1281-01-01", t:"1430-10-01", d:"bizans"},
     {f:"1913-03-06", t:"1923-10-29", d:"yunanistan"}],
  d:[{f:"1430-10-01", t:"1913-03-06"}] },
// 🔴 ÇIKARIM — İgumenitsa ile aynı gerekçe ve aynı damga.
//   Filat, Margiliç'in 10,5 km kuzeyinde, Çamlık'ın iç kesimindeki kaza
//   merkezidir; TDV bölgeyi anlatıyor ama bu kasabayı ADIYLA anmıyor.
// ⚠️ HARİTA DEĞERİ DÜŞÜK, VE BU AÇIKÇA YAZILIYOR: en yakın komşuları zaten
//   Osmanlı (Margiliç 10,5 km · Aydonat 23 km). Boyamayı neredeyse hiç
//   değiştirmez; yazılma sebebi Delvine ile Margiliç arasındaki 52 km'lik
//   zincirin bir halkası olmasıdır. Silinirse harita bozulmaz.

];
