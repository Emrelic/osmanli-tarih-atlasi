// ============================================================================
// EK OKUMA — MAYIS 1805: KAHİRE ULEMÂSI MEHMED ALİ'Yİ VALİ İLAN ETTİ
// ============================================================================
// Yazan: EKOKUMA-SIMGE-0070 · 20 Eylül 2026 · paket 0070 (H-0009)
// Koordinatör: 1.MURAT · şartname: oturumlar/DALGA-0070.md §4
// Emre'nin isteği (PARTI.json H-0009): "bu olay mısır tarih anlatımında nasıl
// işlenir ve ne şekilde anlatılır. ek okuma yapalım."
//
// 🔴 AD ALANI (CLAUDE.md §7): bu dosya YALNIZ window.EKOKUMA_MISIR1805 tanımlar.
//    Yükleyici satırı js/app.js `_EKOKUMA_DOSYA_ADLARI` listesine eklendi
//    ("ekokuma_misir1805") — index.html'e dokunulmadı (ek okuma dosyaları ana
//    yüke girmez, ilk gerektiğinde arka planda indirilir).
//
// TÜR SEÇİMİNİN GEREKÇESİ (şartname: "tür seçimini gerekçelendir"):
//   `karsi-anlati`. Kartın konusu olayın KENDİSİ değil, olayın MISIR TARİH
//   YAZIMINDAKİ İŞLENİŞİDİR; bu kovanın bugünkü 29 kartı tam olarak bu şemayı
//   taşıyor ("… gözünden Osmanlı", data/ekokuma_bakis.js). Aynı maddeye bağlı
//   `bakis-misir` kartı Mısır DERS KİTAPLARININ Osmanlı dönemine genel bakışını
//   anlatıyor; bu kart o kartın altına, TEK OLAYIN tarih yazımındaki yerini
//   koyuyor — ikisi aynı satır türünde yan yana durur, mükerrer değil.
//
// KAYNAK (CLAUDE.md §4 — hepsinin GÖVDESİ bu oturumda AÇILDI, 20 Eylül 2026):
//   ① TDV `hursid-ahmed-pasa` (Cevdet Küçük, 1998) — Mayıs-Ağustos 1805 günleri
//   ② TDV `kavalali-mehmed-ali-pasa` — 3 Temmuz 1805 tayini
//   ③ Fatma Zehra Beyaz, "İki Yeni Eser Münasebetiyle: Oryantalizm ve
//      Milliyetçiliğin Kıskacındaki Mısır Tarih Yazımını Yeniden Düşünmek",
//      TALİD 20/40 (2022/2), 297-328 — tam metin PDF okundu
//   ④ Halil İbrahim Erol, [Khaled Fahmy, Kavalalı Mehmed Ali: Osmanlı
//      Valiliğinden Mısır Hükümdarlığına kitabının değerlendirmesi],
//      İslâm Araştırmaları Dergisi 46 (2021), 225-229 — tam metin PDF okundu
// ⚠️ BULUNAMADI (açıkça): TDV'de "Ömer Mekrem" maddesi YOK (arama yapıldı);
//    "13 Mayıs 1805" günü yukarıdaki iki TDV gövdesinin HİÇBİRİNDE geçmiyor —
//    ayrıntı `denetim/EKOKUMA-SIMGE-0070.md`de, kart bu farkı gizlemiyor.
// 🔴 20 Eylül 2026, M-4715 (1.MURAT'ın sevki) — GÜN KAYNAĞA OTURTULDU: iki akademik
//    tez daha okundu (Özkoç 2013, s. 66 · Ertuğrul 2018, s. 52), ikisi de yalnız
//    "Mayıs 1805" diyor. Kronoloji kaydının hassasiyeti AYA düşürüldü
//    (`data/olaylar_ek4.js` + `data/kronoloji_misir.js`: t:"1805-05"), bu kartın
//    bağı da ona göre güncellendi (`1805-05|Mehmed Ali`) — bağ gün dizgisiyle TAM
//    EŞİTLİK arar, güncellenmeseydi kart sessizce görünmez olurdu (D099).
// ============================================================================
window.EKOKUMA_MISIR1805 = [

{ id:"misir1805-tarih-anlatisi", tur:"karsi-anlati",
  baslik:"Mayıs 1805: Kahire'nin vali düşürmesi Mısır tarih yazımında nasıl anlatılır?",
  olay:["1805-05|Mehmed Ali","1805-07-03|vali"],
  zincir:["bakis-misir"],
  kisa:"Kahire'de bir valinin halk ve ulemâ baskısıyla düşürülmesi, Mısır'da uzun süre 'modern Mısır'ın doğuşu' anlatısının açılış sahnesi sayıldı. Son kırk yılın eleştirel tarihçiliği ise bu anlatıyı — Mısırlı tarihçi Khaled Fahmy'nin kendi deyişiyle — bir 'kurgu' olarak tartışmaya açtı.",
  metin:"OLAY, GÜN GÜN (TDV gövdesinden). TDV'nin `hursid-ahmed-pasa` maddesi (Cevdet Küçük) olayı vali Hurşid Paşa'nın tarafından anlatır. Bâbıâli Mehmed Ali'yi Cidde valiliğine atamıştır ve \"Mehmed Ali Paşa'nın Cidde valiliğine tayin edildiğini bildiren Hurşid Paşa ona hil'at giydirdi (10 Mayıs 1805).\" Ama merasim ters teper: \"Fakat merasimden sonra konağına dönerken Mehmed Ali Paşa'nın askerlerinin aleyhte tezahüratıyla karşılaştı. Sokaklara dökülen halk ve askerler de Mehmed Ali Paşa'nın lehinde gösteri yaptılar.\" Hemen ardından ulemâ devreye girer: \"Mısır ulemâsı ve şeyhleri Hurşid Paşa'dan görevini terketmesini istediler.\" Hurşid'in cevabı, bu kartın asıl konusu olan anlatı kavgasının çekirdeğidir: \"Hurşid Paşa da sultanın emriyle geldiği görevini birkaç fellâhın isteğiyle terketmeyeceğini, padişahtan yazılı emir gelinceye kadar kaleden çıkmayacağını bildirdi.\" Sonuç: \"Askerler ve halk kaleyi kuşatma altına aldı.\" Merkez oldubittiyi ancak haftalar sonra tanır — Bâbıâli'nin kararı 18 Haziran 1805, emirnâme Kahire'de \"ulemâ ve askerlerin huzurunda okundu (9 Temmuz 1805)\", Hurşid Paşa Mısır'dan 6 Ağustos 1805'te ayrıldı.\n\nAYNI OLAY, İSTANBUL'UN CÜMLESİYLE. TDV'nin `kavalali-mehmed-ali-pasa` maddesi aynı süreci tek cümlede ve merkezin diliyle özetler: \"Çeşitli siyasî manevralar neticesinde Mısır'ın son valileri bulunan Hüsrev, Tâhir, Ali ve Hurşid paşaları bertaraf ettikten sonra ulemâ, eşraf ve Mısır halkının desteğini de elde edip Bâbıâli tarafından valiliğe getirildi (3 Temmuz 1805).\" Dikkat: fiilin öznesi Kahire değil BÂBIÂLİ'dir; ulemâ ve halkın desteği bir DESTEK unsuru olarak anılır, tayin eden merci değil. Mısır anlatısının tersine çevirdiği tam olarak bu cümledir — orada tayin eden Kahire'dir, İstanbul yalnız onaylar.\n\nMISIR TARİH YAZIMININ ÇERÇEVESİ. Bu olayın Mısır'da niçin bir başlangıç sahnesi sayıldığı, tek tek yazarlardan önce bir ÇERÇEVE meselesidir. Fatma Zehra Beyaz'ın Mısır tarih yazımını inceleyen makalesine göre XX. yüzyılda kurulan çerçevede \"Osmanlı klasik dönemi, oryantalistlerden ödünç alınan söylemle Mısır'ın karanlık bir dönemi olarak addedilip tarihten silinecek ve yapılan akademik araştırmalar Mehmed Ali Paşa'dan sonraki döneme hasredilecektir.\" Aynı makale, Halil İbrahim Erol'un kitabının reddettiği tezi şöyle tarif eder: \"Arap milliyetçiliğine hâkim olan Osmanlı klasik döneminin Arap toprakları için 'karanlık çağ' sayılıp Fransız işgali ve ardından gelen Mehmed Ali Paşa döneminin bir uyanış ve kültürel aydınlanma dönemi olduğu yönündeki tez.\" Böyle bir çerçevede 1805, bir Osmanlı valisinin değişmesi değil, YENİ BİR ÇAĞIN açılışı olur.\n\nMISIRLI BİR TARİHÇİNİN KENDİ ANLATISINA İTİRAZI. Çerçeveyi en sert biçimde tartışmaya açan isimlerden biri Mısırlı tarihçi Khaled Fahmy'dir. Halil İbrahim Erol'un değerlendirmesine göre Fahmy ilk kitabında \"Mısırlı milliyetçi anlatının Kavalalı etrafında oluşturmaya çalıştığı kurgu ve iddiaları eleştirmekteydi\"; ikinci kitabında da \"milliyetçi kurguda oluşturulan, kendisinin de tenkit ettiği Kavalalı portresini eleştirel bir bakış açısıyla\" ele alır. Aynı değerlendirme, milliyetçi kurguyu destekleyen çalışmalara örnek olarak Abdurrahman er-Râfiî'yi (ö. 1966) anar ve Fahmy'nin \"bu vaziyetin 1952'deki askeri darbeye kadar büyük oranda, sonrasında ise kısmen devam ettiğini ileri sürd\"üğünü aktarır. Kırılma noktası arşivdir: \"1970'lerden itibaren arşiv malzemelerinin tamamının araştırmacılara açılmasıyla birlikte daha kapsamlı, nitelikli ve eleştirel çalışmaların başladığına dikkat çekmektedir.\"\n\nHALK HAREKETİ Mİ, VERGİ İSYANI MI? Bir de olayın CİNSİ tartışılıyor. Erol, Fahmy'nin Fransız işgali yıllarındaki (1798-1801) iki Kahire ayaklanmasını işgal karşıtı bir millî direniş gibi okumasına itiraz ederken ölçütü şöyle koyar: \"Kahire halkı Fransızlar'ın yönetim tarzından kaynaklanan sorunlarla birlikte nihai kertede vergilendirme biçimine karşı isyan etmişlerdir\" — ve bunu, olaylara birinci elden tanıklık eden Ezher ulemâsından tarihçi Abdurrahman el-Cebertî'nin (ö. 1240/1825) değerlendirmelerine dayandırır. Bu ölçüt 1805'e taşındığında sorunun biçimi değişir: Kahire'nin 1805'te ulemâ önderliğinde yaptığı şey bir millî/anayasal an mı, yoksa vergi ve asker baskısına karşı verilen tanıdık bir şehir tepkisi mi? ⚠️ Bu kart o soruyu KAPATMIYOR: Erol'un cümlesi 1798-1801 ayaklanmaları hakkındadır, 1805 için aynı hükmü veren bir kaynak OKUNAMADI.\n\nVE SAYFANIN KENDİ KAYDI — DÜZELTİLDİ. Bu sayfanın kronolojisi olayı önce 13 Mayıs 1805'e yazıyordu; o gün yukarıda gövdesi okunan iki TDV maddesinin hiçbirinde geçmiyor ve iki akademik tez de (Özkoç 2013, s. 66; Ertuğrul 2018, s. 52) yalnız \"Mayıs 1805\" diyor. 20 Eylül 2026'da kaydın hassasiyeti AYA düşürüldü (1805-05) ve kaynağı gerçek kaynaklara çevrildi. Kaynakların verdiği günler: TDV'nin verdiği günler 10 Mayıs (hil'at), 18 Haziran (Bâbıâli kararı), 3 Temmuz (`kavalali-mehmed-ali-pasa`) / 9 Temmuz (emirnâmenin okunması, `hursid-ahmed-pasa`) ve 6 Ağustos'tur (Hurşid'in ayrılışı). TDV'nin iki maddesi arasındaki 3 Temmuz / 9 Temmuz farkı da giderilmemiştir. Yani üç ayrı gün üç ayrı 'başlangıç' sayılabilir — hangisinin seçildiği, olayı kimin anlattığına bağlıdır: Kahire'nin günü (Mayıs), merkezin kararı (Haziran) ya da fermanın okunduğu gün (Temmuz).",
  kesinlik:"tartismali",
  kaynak:"TDV: hursid-ahmed-pasa (Cevdet Küçük, 1998 — gövde okundu: 10 Mayıs 1805 hil'at, ulemânın talebi, kalenin kuşatılması, 18 Haziran 1805 Bâbıâli kararı, 9 Temmuz 1805 emirnâmenin okunması, 6 Ağustos 1805 Hurşid'in ayrılışı) · TDV: kavalali-mehmed-ali-pasa (gövde okundu — \"ulemâ, eşraf ve Mısır halkının desteğini de elde edip Bâbıâli tarafından valiliğe getirildi (3 Temmuz 1805)\") · Fatma Zehra Beyaz, \"İki Yeni Eser Münasebetiyle: Oryantalizm ve Milliyetçiliğin Kıskacındaki Mısır Tarih Yazımını Yeniden Düşünmek\", Türkiye Araştırmaları Literatür Dergisi 20/40 (2022/2), 297-328 (s. 310, 315-316 — tam metin okundu) · Halil İbrahim Erol, [Khaled Fahmy, Kavalalı Mehmed Ali: Osmanlı Valiliğinden Mısır Hükümdarlığına, İstanbul: Vakıfbank Kültür Yayınları, 2020 değerlendirmesi], İslâm Araştırmaları Dergisi 46 (2021), 225-229 (s. 225, 227-228 — tam metin okundu)",
  ic_not:"BULUNAMADI, açıkça: ① TDV'de \"Ömer Mekrem\" maddesi yok (islamansiklopedisi.org.tr/arama ile arandı; nakîbüleşrafın adı iki TDV gövdesinde de geçmiyor) — atlasın kronoloji maddesindeki Ömer Mekrem önderliği bu oturumda TDV'den DOĞRULANAMADI. ② Mısır ders kitaplarının/tarih yazımının TAM OLARAK 13 Mayıs 1805'i nasıl anlattığına dair doğrudan okunmuş bir inceleme bulunamadı; kart bu yüzden olayın anlatı ÇERÇEVESİNİ (Beyaz 2022, Erol 2021) veriyor, ders kitabı cümlesi uydurmuyor. Khaled Fahmy'nin kitabının kendisi ve Abdurrahman el-Cebertî'nin Acâibü'l-Âsâr'ı BU OTURUMDA AÇILMADI — ikisi de yukarıdaki iki akademik değerlendirmeden AKTARILDI (D073: aktarım aktarım olarak işaretlenir). ③ Atlasın 1805-05-13 kaydının `kaynak:` alanı \"kavalali-mehmed-ali-pasa (TDV)\" diyor ama o gövdede 13 Mayıs YOK; bu bulgu denetim/EKOKUMA-SIMGE-0070.md'ye yazıldı ve tahtadan 1.MURAT'a bildirildi (kayıt bu oturumun dosyası değil, düzeltilmedi)." }

];
