// =====================================================================
// SERHAT — MORAVA KORİDORU · üç kırılma maddesi
// Oturum: MACARİSTAN SERHAT ARAŞTIRMA · görev tahta M-1097
//
// 🔴 BU DOSYA BİR KUSURUN KARŞILIĞIDIR — kendi kusurumun.
//
// `data/yerlesimler_serhat.js`i teslim ederken *"SIFIR yeni kırılma günü —
// dokuz günün dokuzu da çekirdekte +0 gün maddeli"* diye rapor ettim
// (M-1096). **Koordinatör ölçtü ve ÇÜRÜTTÜ** (M-1097):
//     serhat BAĞLI      519 kırılma · 3 AÇIK
//     serhat ÇIKARILDI  515 kırılma · 0 açık
// Ben de bağımsız olarak yeniden ölçtüm ve **aynı üç günü** buldum.
//
// ─────────────────────────────────────────────────────────────────────
// 🔴 KUSURUN KÖKÜ — ve bu, `CLAUDE.md §11`de ZATEN YAZILI BİR DERSTİR
//
// Ölçümüm yanlış değildi; **EVRENİ** yanlıştı:
// ```
// ben ölçerken     data/kronoloji_*.js  +  data/olaylar*.js   = 48 dosya
// denetle.py:703   glob("data/olaylar*.js")                    = 18 dosya
// ```
// `1428-01-01` benim taramamda "+0 gün" görünüyordu — ama o madde
// `kronoloji_balkan.js`teydi, yani **KUYRUKTA**. Çekirdekte en yakın
// madde **214 gün** ötede.
//
// 📌 `CLAUDE.md §11`: *"BU GÜN ZATEN VAR YETMİYOR — HANGİ KOVADA OLDUĞU
// DA SORULMALI."* Ders yazılıydı, ben okumuştum, ve **yine de aynı
// kovaya düştüm.** Kural bilmek yetmiyor; ölçmeden önce **aracın hangi
// dosyaları okuduğunu** doğrulamak gerekiyor (`§5`in kendi dersi).
//
// ⚠️ Ve koordinatörün eklediği ikinci sebep de ölçülmüş: bugün 16
// kronoloji dosyası indi ve `girdi.py`ye iki yeni nokta dosyası bağlandı.
// Taban saat başı değişiyor. *Ölçüt bayatlamaz, ölçütün DAYANDIĞI ÖLÇÜM
// bayatlar.*
//
// ─────────────────────────────────────────────────────────────────────
// AÇIK ÜÇ GÜN — bağımsız ölçümüm (evren: yalnız `olaylar*.js`, ±30 gün)
// ```
// 🔴 1428-01-01  kazanç  Şehirköy + Alacahisar   en yakın çekirdek: 214 gün
// 🔴 1443-01-01  kayıp   Şehirköy                en yakın çekirdek: 304 gün
// 🔴 1454-01-01  kazanç  Alacahisar              en yakın çekirdek:  74 gün
// ✓  1444-08-01 · 1456-01-01 · 1689-09-24 · 1690-09-09 · 1878-07-13
//    beşi de çekirdekte +0 / +23 gün — bunlara madde GEREKMİYOR
// ```
// ⇒ Bu dosya tam olarak o üç günü kapatır, fazlasını değil. Dolgu madde
//   yazmadım (`KRONOLOJI-SARTNAME §1`: *bir maddeyi silsen kronolojiden
//   bir şey eksilir mi?*).
//
// ─────────────────────────────────────────────────────────────────────
// KAYNAK — üçü de TDV, gövdesi okunmuş maddelerden (`§4`)
//   sehirkoy   (200 · 15.009 karakter) — Pirot'un Osmanlı dönemindeki adı
//   alacahisar (200 ·  9.017 karakter) — Kruševac'ın Osmanlı dönemindeki adı
// Bu iki madde `yerlesimler_serhat.js`in de dayanağıdır; yeni kaynak
// eklenmedi, aynı gövdelerden okundu.
//
// ⚠️ ÜÇ TARİHİN ÜÇÜ DE `YYYY-01-01` — ve bu bir UYDURMA DEĞİL, bir
//    BEYANDIR: TDV üçü için de YIL veriyor, GÜN vermiyor. `CLAUDE.md §4`:
//    *"Gün bilinmiyorsa YYYY-01-01 yaz — bu, 'yıl biliniyor, gün
//    bilinmiyor' demenin kabul edilmiş yoludur."*
//    En açık örneği 1454: TDV'nin kendi ifadesi *"muhtemelen 1453 sonları
//    veya 1454 başları"*dır. Kaynağın kendi tereddüdü maddenin metnine
//    aynen yazıldı.
//
// 🔴 BAĞIMLILIK: bu üç maddenin `yer_id` değerleri
//    `data/yerlesimler_serhat.js`teki iki noktaya işaret eder. O dosya
//    `arac/girdi.py`ye BAĞLANMADAN `yer_id` denetimi bu üçünü
//    "eşleşmiyor" sayar. **İki dosya BİRLİKTE bağlanmalıdır.**
// =====================================================================

window.OLAYLAR_SERHAT = [

{ t:"1428-01-01", b:"II. Murad Alacahisar'ı aldı, Şehirköy Osmanlı'ya geri döndü", tur:"fetih",
  onem:4, dunya:2, kapsam:"dis", etiket:["askeri","toprak","serhat"],
  yer_id:"Alacahisar (Kruševac)",
  d:"Sırp Despotu Stefan Lazareviç'in vârissiz ölümünün (1427) ardından II. Murad, Yıldırım Bayezid'in Sırp prensesiyle evliliğine dayanarak Sırbistan'ın meşrû vârisi olduğunu ileri sürüp harekete geçti ve Alacahisar'ı aldı (1428). Aynı yıl, Lazareviç'in ölümünden sonra Osmanlılar Şehirköy kalesini de geri aldılar — şehir 1412'de Stefan tarafından alınmış ve Mûsâ Çelebi'ye karşı savunulmuştu. Böylece Büyük Morava ile Nişava vadilerini birbirine bağlayan hat Osmanlı denetimine girdi. ⚠️ TARİH HAKKINDA: TDV her iki yer için de YIL veriyor, gün vermiyor.",
  kaynak:"alacahisar + sehirkoy" },

{ t:"1443-01-01", b:"Haçlı ordusu Şehirköy'ü zaptetti — 'Uzun Sefer'in Nişava kolu", tur:"kayip",
  onem:3, dunya:2, kapsam:"dis", etiket:["askeri","toprak-kaybi","hacli"],
  yer_id:"Şehirköy (Pirot)",
  d:"Kral Vladislav ve Sırp Despotu Curac Brankoviç liderliğindeki Haçlı ordusu 1443'te Şehirköy'ü zaptetti. Aynı seferin devamında Osmanlı kuvvetleri kasım ayında İzladi geçidinde bozguna uğrayacaktır. Şehirköy, Segedin Antlaşması'nın (1444) ardından II. Murad tarafından tekrar Sırplar'a verilmiş, ancak 1456'da Curac Brankoviç'in ölümünden sonra Osmanlılar'a geçmiştir. ⚠️ TARİH HAKKINDA: TDV yıl veriyor, gün vermiyor.",
  kaynak:"sehirkoy" },

{ t:"1454-01-01", b:"Alacahisar yeniden Osmanlı hâkimiyetine girdi — tımar kayıtlarının tanıklığı", tur:"fetih",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","toprak","idari","serhat"],
  yer_id:"Alacahisar (Kruševac)",
  d:"1444'te Macar delegeleriyle yapılan antlaşma sonunda Brankoviç'e bırakılan Alacahisar, Varna zaferini izleyen yıllarda yeniden Türk hâkimiyetine girdi. Şehrin bu ikinci fethi bir savaş kaydıyla değil, bir MALİYE kaydıyla belgelenir: Alacahisar'a bağlı bazı köylere ait tımar kayıtlarının varlığı, yörenin buraya girdiğini gösterir. ⚠️ TARİH HAKKINDA: TDV'nin kendi ifadesi 'muhtemelen 1453 sonları veya 1454 başları'dır — kaynağın tereddüdü olduğu gibi aktarılmıştır; gün beyandır. 📌 Bu tarihten sonra Alacahisar, TDV'nin ifadesiyle 'kesintisiz 300 sene devam eden Türk hâkimiyeti'ne girer ve ilk Avusturya işgalini ancak 1737'de görür — 1689 Habsburg ilerleyişinin Batı Morava'ya ulaşmadığının dayanağı budur.",
  kaynak:"alacahisar" },

];
