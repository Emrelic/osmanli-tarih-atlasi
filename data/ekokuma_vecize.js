// ============================================================================
// EK OKUMA — ÜNLÜ SÖZLER / VECİZELER (EKO-PADISAH, DALGA-0065 H-0002)
// ============================================================================
// Yazan: EKO-PADISAH · 17 Eylül 2026 · paket parti-emrelic-0065, madde H-0002
// Koordinatör: 1.MURAT · rapor: denetim/EKO-PADISAH-0916.md
//
// 🔴 AD ALANI (CLAUDE.md §7): bu dosya YALNIZ window.EKOKUMA_VECIZE tanımlar.
//    YÜKLEYİCİ satırını (`_EKOKUMA_DOSYA_ADLARI`) UI oturumu ekleyecek.
//
// ŞEMA: data/ekokuma_ibrahim.js'teki "magazin" türüyle BİREBİR aynı (mevcut,
// çalışan, `baslik` alanı zaten zorunlu tutan biçim) — yeni bir `tur` icat
// edilmedi, UI/app.js'e dokunmadan render edilebilsin diye:
//   { id, tur:"magazin", kisi:[kişi id'leri], t, olay:[...], soru, baslik,
//     metin, kesinlik, kaynak, ic_not }
//
// KAYNAK YÖNTEMİ (CLAUDE.md §4): TDV birincil; atfı doğrulanamayan sözler
// "rivayet, çağdaş/akademik kaynağı bulunamadı" diye AÇIKÇA damgalandı —
// D107'nin "bulunamadı" kovası. Metinler kopyalanmadı, özetlendi.
//
// 🔴 SON OKUYUCU METNİNDE GELİŞTİRİCİ NOTU YOK (DALGA-0065 kuralı): "Emre",
// paket no, "kesin" etiketi gibi ifadeler yalnız ic_not'ta; metin/baslik/soru
// alanları doğal, bitmiş düzyazı.
// ============================================================================
window.EKOKUMA_VECIZE = [

// ── Kanûnî'nin "Olmaya devlet cihanda bir nefes sıhhat gibi" beyti ─────────
{ id:"vecize-kanuni-sihhat-beyti", tur:"magazin", kisi:["suleyman1"],
  t:"1566-09-07", olay:["1566-09-07"],
  soru:"Kanûnî'nin en çok tekrarlanan mısraı hangi şiirden, ve neyi söylüyor?",
  baslik:"\"Bir nefes sıhhat gibi\": Kanûnî'nin dillerden düşmeyen beyti",
  metin:"Kanûnî Sultan Süleyman, 'Muhibbî' mahlasıyla yaklaşık üç bin şiir yazmış, Osmanlı padişahları arasında en üretken şairdir. Bunların içinden bugüne kadar en çok tekrarlanan iki mısra, kaleme aldığı bir gazelin ilk beytidir:\n\n'Halk içinde mu'teber bir nesne yok devlet gibi / Olmaya devlet cihânda bir nefes sıhhat gibi.'\n\nYani: dünyada saygın sayılan hiçbir şey saltanat kadar değerli değildir — ama bir saltanatın bile, bir anlık sağlıkla ölçülemeyeceğini söylüyor. Gazelin devamında da aynı tema sürüyor: 'saltanat dedikleri ancak cihan kavgasıdır', asıl huzur bir köşeye çekilip gönül rahatlığı bulmaktır. Koca bir imparatorluğun hükümdarının, gücünün ve toprağının hiçbirinin sağlıklı bir nefes kadar değerli olmadığını yazması, bu beyti bir atasözü hâline getirmiştir.",
  kesinlik:"kesin",
  kaynak:"TDV: suleyman-i (Coşkun Ak)",
  ic_not:"Şiirin tam yazılış tarihi/vesilesi TDV'de belirtilmiyor — bulunamadı, uydurulmadı. Kart, Kanûnî'nin vefatı gününe (7 Eylül 1566) bağlandı çünkü atlasta beytin kendi tarihine sahip bir kronoloji maddesi yok." },

// ── Sokullu'nun "sakal-kol" sözü — İnebahtı/Kıbrıs bağlamı ──────────────────
{ id:"vecize-sokullu-sakal-kol", tur:"magazin", kisi:["sokullu-mehmed-pasa"],
  t:"1573-03-07", olay:["1571-10-07","1573-03-07"],
  soru:"Osmanlı bir deniz savaşını kaybetti, bir adayı kazandı — sadrazam bunu nasıl özetledi?",
  baslik:"\"Sakalımızı kestiniz, biz kolunuzu kestik\": bir rivayetin iki yüzü",
  metin:"1571'de aynı yılın içinde iki büyük olay yaşandı: Ağustos'ta Kıbrıs'ın fethi tamamlandı, Ekim'de ise Osmanlı donanması İnebahtı'da (Lepanto) ağır bir yenilgiye uğradı. Anlatıya göre, İnebahtı sonrası kendisini ziyarete gelen bir Venedik temsilcisine Sadrazam Sokullu Mehmed Paşa şöyle demiş: 'Biz Kıbrıs'ı alarak sizin kolunuzu kestik, siz İnebahtı'da bizi yenerek bizim sakalımızı tıraş ettiniz — ama kesilen kol bir daha çıkmaz, tıraş edilen sakal daha gür çıkar.'\n\nSöz, savaşın gerçek bilançosunu özetliyordu: Osmanlı donanması bir kışta yeniden inşa edilip 1572'de Akdeniz'e açılırken, Venedik'in Kıbrıs'ı geri alması hiçbir zaman mümkün olmadı — Venedik 1573'te İstanbul'la ayrı barış yapıp Kıbrıs'ın Osmanlı'da kaldığını resmen kabul etmek zorunda kaldı.",
  kesinlik:"rivayet",
  kaynak:"rivayet — çağdaş/akademik birincil kaynağı bulunamadı",
  ic_not:"🔴 Paket metni bu sözü 1569-70 Astarhan/Don-Volga kanal projesiyle ilişkilendiriyordu — bu bağlam YANLIŞ, araştırmayla düzeltildi: TDV'nin sokullu-mehmed-pasa maddesinde Astarhan seferi yalnız 'başarısız oldu' diye geçiyor, sakal/kol metaforu orada YOK. Gerçek bağlam İnebahtı-Kıbrıs (1571-73). Sözün kendisi TDV'nin okunan hiçbir maddesinde (sokullu-mehmed-pasa, inebahti-savasi, kibris) geçmiyor; yalnız popüler tarih yazımında (Türkçe ve İngilizce) dolaşan, birincil kaynağa (dönem kroniği, Venedik baylo raporu) bağlanamayan bir anekdot. Bu yüzden 'rivayet' diye damgalandı, TDV kaynak gösterilmedi." },

// ── Koca Ragıp Paşa'nın "tırnakları sökük aslan" benzetmesi ────────────────
{ id:"vecize-ragip-pasa-aslan-benzetmesi", tur:"magazin", kisi:["mustafa3"],
  t:"1757-02-28", olay:["1757-02-28","1763-04-08"],
  soru:"Genç padişah savaşa hazır olduğunu söylüyordu — tecrübeli sadrazamı onu neyle ikna etti?",
  baslik:"\"Uzaktan heybetli, yakından tırnakları sökük\": Ragıp Paşa'nın ihtiyat dersi",
  metin:"III. Mustafa, 1757'de tahta çıktığında Rusya'ya karşı savaşa girmeye hazır olduğunu, hazinenin buna yeteceğini söylüyordu. Altı yıl boyunca sadrazamlık yapan Koca Râgıb Paşa ise tam tersi bir çizgideydi: Avrupa'da süren Yedi Yıl Savaşları'nın dışında kalarak Osmanlı'yı hiçbir cepheye sürüklemedi. Anlatılan bir rivayete göre Ragıp Paşa, padişahı bu tedbirli tutuma ikna etmek için Osmanlı'yı uzaktan heybetli görünen ama yakından tırnakları sökük, dişleri dökük bir aslana benzetmiş — gerçek gücünü Batılı devletlere göstermeden, savaşa girmeden korumayı öğütlemiş.\n\nRagıp Paşa'nın bu tedbirli/ihtiyatlı siyasetinin kendisi tarihî kayıtlarda sağlam biçimde teyitlidir; devleti savaşın dışında tutmayı başardı ve 1763'teki ölümüne kadar bu çizgiyi sürdürdü. Ölümünden yalnızca beş yıl sonra, 1768'de, Osmanlı yine de Rusya'ya karşı savaşa girdi — bu kez Ragıp Paşa'nın ihtiyatını taşıyacak kimse yoktu.",
  kesinlik:"rivayet",
  kaynak:"TDV: mustafa-iii (Ragıp Paşa'nın ihtiyatlı politikası için) · aslan benzetmesinin tam metni: rivayet, akademik kaynakta da atıfsız aktarılıyor",
  ic_not:"Ragıp Paşa'nın savaşa karşı ihtiyatlı tutumu TDV mustafa-iii maddesinde doğrulandı. Ama aslan/tırnak/diş metaforunun TAM SÖZÜ hiçbir kaynakta (TDV dahil) birincil bir belgeye dayandırılmıyor — saygın bir tarihçinin (Erhan Afyoncu) popüler yazısında bile kaynaksız aktarılıyor, 'bir rivayete göre' kaydıyla. Bu yüzden 'rivayet' diye damgalandı." },

// ── III. Mustafa'nın "Yıkılıptır bu cihan" dörtlüğü ─────────────────────────
{ id:"vecize-mustafa3-yikilipdir-cihan", tur:"magazin", kisi:["mustafa3"],
  t:"1757-10-30", olay:["1757-10-30"],
  soru:"Tahta yeni çıkan bir padişah, imparatorluğun çökmekte olduğunu neden kendi diliyle yazdı?",
  baslik:"\"Yıkılıptır bu cihan\": III. Mustafa'nın kendi tahtına yazdığı yakınma",
  metin:"III. Mustafa, tahta çıktığı 1757'den itibaren devlet adamlarının yetersizliğinden ve nitelikli kadro eksikliğinden şikâyet eden şiirler yazdı; 'Cihangir' mahlasını kullandı. Kendisine atfedilen en tanınmış dörtlük şöyledir:\n\n'Yıkılıptır bu cihan sanma ki bizde düzele / Devlet-i çarh-ı denî verdi kamu müptezele / Şimdi ebvâb-ı saâdette gezen hep hezele / İşimiz kaldı hemân merhamet-i Lem-yezel'e.'\n\nYani: bu dünya (ya da bu devlet) yıkılmıştır, sanma ki bizim zamanımızda düzelecek; alçak felek saltanatı değersizlere teslim etti; şimdi sarayın kapılarında gezen hep işe yaramaz kimseler; işimiz artık ancak sonsuz olanın merhametine kaldı.\n\nBu dörtlük, aynı dönemin şairleri tarafından da ciddiye alındı: aralarında Ragıp Paşa'nın da bulunduğu on yediden fazla şair, aynı vezin ve kafiyeyle bu şiire 'nazire' (karşılık şiiri) yazdı — bir padişahın kendi elinden çıkan bir yakınmanın, devrin edebiyat çevresinde doğrudan bir tartışma konusu hâline geldiğini gösteriyor.",
  kesinlik:"kesin",
  kaynak:"TDV: mustafa-iii (üslup/tema teyidi) · İsmail Avcı, \"'Yıkılupdur Bu Cihân Sanma ki Bizde Düzele': Sultan III. Mustafa'nın Meşhur Nazmına Yazılan Nazireler\", Türk Dili ve Edebiyatı Dergisi, İstanbul Üniversitesi, C. 61, S. 1 (2021)",
  ic_not:"Şiirin III. Mustafa'ya ait olduğu hakemli bir akademik makaleyle (İsmail Avcı, 2021) doğrudan doğrulandı; makale şiire yazılmış 17'den fazla nazireyi de tespit ediyor. Başka bir padişaha (örn. II. Mahmud) karıştırılma ihtimali arandı, hiçbir kaynakta böyle bir karışıklığa rastlanmadı." },

];
