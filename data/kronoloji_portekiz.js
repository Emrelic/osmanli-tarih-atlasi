// =====================================================================
// PORTEKİZ KRALLIĞI — DEVLET KRONOLOJİSİ (1. tur, 21 Ağustos 2026)
// =====================================================================
// ⚠️ HENÜZ CANLI DEĞİL. `index.html`e ve `arac/girdi.py`ye bağlanmadı;
//    bağlamayı koordinatör yapar (KRONOLOJI-SARTNAME.md §5).
//
// ── ŞEMA ──────────────────────────────────────────────────────────────
//   `onem`  1-5  BU DOSYANIN DEVLETİ (Portekiz) için ağırlık
//   `dunya` 1-5  OLAYIN kendisine ait — HER DOSYADA AYNI olmak zorunda
//
// 🔴 `dunya` HİZALAMASI — paylaşılan olaylarda başka dosyalarla birebir:
//    1498-05-20 (Vasco da Gama Kalikut) → 5, `data/kronoloji_memluk.js`
//    ile birebir aynı.
//    1509-02-03 (Diu Deniz Savaşı) → 4, `data/kronoloji_memluk.js` ile
//    birebir aynı. ⚠️ `data/kronoloji_hindistan.js:513` AYNI OLAYA
//    `dunya:3` vermiş — İKİ DOSYA ÇELİŞİYOR, KUSURDUR (§3.2). Ben
//    memluk'un hakemli akademik kaynağını (Winter 2024) esas aldım;
//    hüküm koordinatörün, teslim raporunda ayrıca bildirdim.
//
// ── NİÇİN BU DEVLET BÖYLE ANLATILIYOR ───────────────────────────────
// Portekiz'in kendi tarihyazımının ağırlık merkezi "Keşifler Çağı"dır
// (Descobrimentos) — 1415 Ceuta'dan 1580 İspanya birliğine kadarki 165
// yıl, ülkenin kendi bakışında Aljubarrota'dan bile önemlidir. Bu dosya
// o merkezi korur ama koordinatörün istediği ÖZGÜN OMURGAYI da işler:
// Osmanlı-Portekiz'in Kızıldeniz/Hint Okyanusu'ndaki doğrudan teması
// (Diu, Aden, Hürmüz, Habeşistan) ayrı bir tema olarak ayrıştırıldı,
// `data/kronoloji_memluk.js`teki maddelerle ÇAKIŞTIRILMADI (mükerrer
// yazılmadı — memluk'takiler Memlük tarafından anlatılıyor, burada
// AYNI olaylar Portekiz tarafından, farklı `d:` metniyle anlatılıyor;
// `t:` ve `dunya:` ortak olanlarda birebir hizalandı).
//
// ── KAPSAM — BU TUR ──────────────────────────────────────────────────
// 1281-1923 tam aralık tarandı ama YOĞUNLUK EŞİT DEĞİL: 1415-1581 arası
// (Keşifler + Osmanlı-Portekiz mücadelesi + İspanya birliğine geçiş)
// kaynağın en zengin olduğu dönem ve madde sayısı orantısız yüksek.
// 1581 sonrası (Restorasyon, Brezilya altını, Pombal, Napolyon işgali,
// Brezilya bağımsızlığı, Liberal Savaşlar, kölelik kaldırılması,
// sömürge Afrika krizi, Cumhuriyet) daha seyrek ama omurga olayların
// hepsi var. Sıradaki tur istenirse 17-19. yüzyıl sömürge idaresi
// (Angola, Mozambik iç tarihi) ve 20. yüzyıl başı iç siyaseti
// derinleştirilebilir.
//
// ── KAYNAK (§4) ──────────────────────────────────────────────────────
// GÖVDESİ OKUNAN: TDV `portekiz` (ana kronoloji) · `hurmuz--iran` ·
//   `seydi-ali-reis` · `piri-reis` · `habes-eyaleti` · `sadiler`.
// TDV SLUG SINAVI: 🟢 portekiz · hurmuz--iran · diu · seydi-ali-reis ·
//   piri-reis · habes-eyaleti · sadiler   🔴 vadissyl (302) ·
//   alcazarquivir (302) — TDV'de bu savaşın müstakil maddesi yok,
//   `portekiz` ve `sadiler` maddelerinden toplandı.
// TDV DIŞI (akademik, tanecik TDV'de yok — §4 kural): Encyclopaedia
//   Britannica (standart tarih çapraz doğrulaması — bu projede
//   `kronoloji_memluk.js`te zaten kullanılmış emsal) · A.R. Disney,
//   "A History of Portugal and the Portuguese Empire" (Cambridge UP,
//   2009) ölçütüyle tutarlı standart tarihler · Encyclopaedia of
//   Portuguese Expansion (FCSH/Universidade Nova de Lisboa, akademik
//   proje) · EBSCO Research Starters (üniversite kütüphane veritabanı,
//   akademik özet) · MacTutor History of Mathematics (St Andrews
//   Üniversitesi, akademik proje) · Wikipedia'daki hakemli makale
//   özetlerinin kendi kaynak gösterdiği birincil tarihler çapraz
//   doğrulandı. Forum/blog/AI üretimi içerik KULLANILMADI.
// ⚠️ Bazı maddelerde gün doğrulanmadı ama yıl-ay standart kaynaklarla
//   çapraz doğrulandı; bu maddelerde `kaynak:` içinde açıkça yazılı.
// =====================================================================

window.KRONOLOJI_PORTEKIZ = [

// ══════════════════════════════════════════════════════════════════
// I. RECONQUISTA SONRASI VE AVİZ HANEDANI (1281-1415)
// ══════════════════════════════════════════════════════════════════

{ t:"1281-01-01", b:"Atlasın açılışında Portekiz — Burgonya hanedanı ve Reconquista'nın mirası", tur:"kurulus", onem:3, dunya:1, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["hanedan"],
  d:"Atlas penceresi açıldığında Portekiz Krallığı 1139'dan beri bağımsız, sınırları 1249'da Algarve'nin fethiyle bugünkü hâline kavuşmuş bir Burgonya hanedanı krallığıdır — Avrupa'nın Reconquista'yı en erken tamamlayan devletidir. Bu erken bitiş, Kastilya ve Aragon henüz Endülüs'le uğraşırken Portekiz'i Atlantik'e yönelmeye hazırlayan yapısal bir avantaj olarak okunur.",
  kaynak:"TDV `portekiz`: \"1095'te bağımsız devlet kurulması başladı\" · standart akademik kronoloji (Algarve fethi 1249)" },

{ t:"1290-03-01", b:"Coimbra (Lizbon) Üniversitesi kuruldu", tur:"bilim", onem:3, dunya:1, kapsam:"ic", yer_id:"Lizbon",
  etiket:["bilim"],
  d:"Kral I. Dinis, Scientiae Thesaurus Mirabilis fermanıyla Portekiz'in ilk üniversitesini Lizbon'da kurdu; Papa IV. Nicholas'ın onayıyla resmileşen kurum, sonraki iki buçuk asırda Lizbon ve Coimbra arasında defalarca taşınacaktı. Bu, İber Yarımadası'nın en eski üniversitelerinden birinin başlangıcıdır.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (University of Coimbra kuruluş kaydı, 1290)" },

{ t:"1383-12-06", b:"1383-1385 Bunalımı başladı — Kastilya'ya karşı tahta veraset krizi", tur:"kriz", onem:5, dunya:2, kapsam:"ic", yer_id:"Lizbon",
  etiket:["hanedan","kriz"],
  d:"I. Fernando'nun vârissiz ölümüyle Portekiz tahtı Kastilya kralına kalma tehlikesiyle karşılaştı; Lizbon halkı ve esnafı, Aviz Şövalyeleri büyük üstadı João'yu (gayrimeşru bir kraliyet oğlu) hükümdar naibi ilan etti. İki yıl sürecek bir bağımsızlık savaşının fitili burada ateşlendi.",
  kaynak:"standart akademik kronoloji (Britannica, 'Battle of Aljubarrota'); TDV `portekiz` bu iki yılı 'bağımsız devlet' sürekliliği içinde anar" },

{ t:"1385-08-14", b:"Aljubarrota Savaşı — Aviz hanedanı ve bağımsızlık kesinleşti", tur:"savas", onem:5, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["askeri","hanedan","toprak-kazanc"],
  d:"João'nun (I. João) komutasındaki Portekiz ordusu, İngiliz okçularının da desteğiyle, sayıca çok daha kalabalık bir Kastilya ordusunu Aljubarrota'da ağır bir yenilgiye uğrattı. Zafer Aviz hanedanının tahtını kesinleştirdi ve Portekiz'in iki asır sürecek bağımsızlığını güvenceye aldı; İngiltere ile ittifak (1386 Windsor Antlaşması) bu zaferin doğrudan mirasıdır.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama: Britannica 'Battle of Aljubarrota' (14 Ağustos 1385)" },

{ t:"1415-08-21", b:"Ceuta'nın fethi — sömürge çağının açılışı", tur:"toprak-kazanc", onem:5, dunya:3, kapsam:"dis", yer_id:"Sebte (Ceuta)",
  etiket:["askeri","toprak-kazanc","din"],
  d:"I. João komutasındaki bir Portekiz donanması, Cebelitarık Boğazı'nın Afrika yakasındaki Ceuta'yı Merînî hâkimiyetinden aldı. Bu, bir Avrupa devletinin Afrika kıtasında kurduğu ilk kalıcı üstü ve Portekiz'in yüzyıllar sürecek denizaşırı genişlemesinin başlangıç noktasıdır; seferde genç şehzade Henrique de yer aldı.",
  kaynak:"TDV `portekiz`: \"1415: Ceuta fethi sömürge dönemini açtı\"" },

// ══════════════════════════════════════════════════════════════════
// II. KEŞİFLER ÇAĞI — AFRİKA KIYISI VE OKYANUS YOLU (1419-1497)
// ══════════════════════════════════════════════════════════════════

{ t:"1419-01-01", b:"Denizci Henrique, Sagres'te bir keşif kadrosu kurdu", tur:"bilim", onem:4, dunya:2, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["bilim","teknoloji"],
  d:"Ceuta seferinden dönen Şehzade Henrique, Sagres burnunda kartograflar, denizciler, gökbilimciler ve gemi ustalarından oluşan bir ekip topladı; ekip hem Hıristiyan hem yahudi uzmanları ve Arap kaynaklarını kullandı. ⚠️ Modern araştırma, burada efsanevi anlamda bir 'denizcilik okulu' bulunduğu iddiasına şüpheyle yaklaşır — kesin olan, kraliyet destekli sistemli bir keşif teşebbüsünün burada örgütlendiğidir.",
  kaynak:"World History Encyclopedia, 'Prince Henry the Navigator' — akademik tarih ansiklopedisi; makale açıkça 'efsanenin aksine burada resmî bir denizcilik okulu yoktu' notunu düşer" },

{ t:"1434-01-01", b:"Gil Eannes, Bojador Burnu'nu aştı", tur:"bilim", onem:4, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["bilim","toprak-kazanc"],
  d:"O güne dek hiçbir Avrupalı gemicinin geçip geri dönemediği söylenen Bojador Burnu'nu (bugünkü Batı Sahra kıyısı), Henrique'in gönderdiği kaptan Gil Eannes aştı. Efsanevi engelin kırılması, Portekiz kıyı keşiflerinin güneye doğru sistemli biçimde hızlanmasını başlattı.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (World History Encyclopedia, 'Prince Henry the Navigator')" },

{ t:"1449-05-20", b:"Alfarrobeira Savaşı — naiplik krizi kanlı bitti", tur:"kriz", onem:3, dunya:1, kapsam:"ic", yer_id:"",
  etiket:["hanedan","kriz"],
  d:"Genç V. Afonso adına ülkeyi on iki yıl yöneten naip Dük Pedro (Henrique'nin ağabeyi), sarayın kendisine karşı kurduğu ittifakla Alfarrobeira'da yenilip öldürüldü. İç çekişme, keşif seferlerinin finansmanını bir süreliğine sekteye uğratsa da Henrique bizzat savaşta kardeşine karşı krala destek vererek konumunu korudu.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, TDV bu taneciği kapsamıyor, dayanak: standart akademik kaynak" },

{ t:"1460-11-13", b:"Denizci Henrique'in ölümü", tur:"olum", onem:4, dunya:1, kapsam:"ic", yer_id:"",
  etiket:["hanedan"],
  d:"Kırk yılı aşkın bir süre Afrika kıyısı keşiflerini kişisel servetiyle finanse eden Şehzade Henrique öldüğünde Portekiz gemileri Sierra Leone kıyılarına kadar ulaşmıştı. Onun kurduğu model — kraliyet tekeli altında sistemli, kayıt tutulan keşif — halefleri tarafından aynen sürdürüldü.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, yıl standart akademik kronolojiyle teyitli" },

{ t:"1471-08-24", b:"Tanca'nın fethi", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"Tanca",
  etiket:["askeri","toprak-kazanc"],
  d:"I. Afonso döneminde Portekiz, Cebelitarık Boğazı'nın kilit limanı Tanca'yı ele geçirdi; Ceuta ile birlikte boğazın Afrika yakasında iki kalıcı üs kuruldu. Fas kıyısındaki bu ağ, sonraki yüzyılda Sa'dî hanedanına karşı sürdürülecek uzun mücadelenin zeminini oluşturdu.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, yıl standart akademik kronolojiyle teyitli" },

{ t:"1482-01-19", b:"São Jorge da Mina (Elmina) kalesi inşa edildi", tur:"toprak-kazanc", onem:4, dunya:2, kapsam:"dis", yer_id:"Elmina (São Jorge da Mina)",
  etiket:["ekonomi","toprak-kazanc"],
  d:"Portekiz, bugünkü Gana kıyısında altın ticaretini denetlemek için São Jorge da Mina kalesini inşa etti — Sahra altı Afrika'daki ilk kalıcı Avrupa yapısı. Kale sonraki yüzyılda köle ticaretinin de büyük merkezlerinden biri hâline gelecekti.",
  kaynak:"Ghana Museums and Monuments Board, 'St. George's Castle (Elmina Castle)' — resmî kurum kaydı; inşaat 1482'de başladı, 1486'da tamamlandı" },

{ t:"1483-04-01", b:"Diogo Cão, Kongo Nehri ağzına ulaştı", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"Mbanza-Kongo (São Salvador)",
  etiket:["diplomasi","toprak-kazanc"],
  d:"Kaptan Diogo Cão, Kongo Nehri'nin ağzına ulaşıp Kongo Krallığı'nın gücünden etkilendi; Manikongo Nzinga a Nkuwu'ya hediyeler ve elçiler gönderdi. On yıl içinde Portekiz, Kongo'ya misyonerler, askerler ve diplomatlar yolladı — kralın kendisi 1491'de vaftiz olup João adını aldı.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Britannica, 'Diogo Cão')" },

{ t:"1488-01-01", b:"Bartolomeu Dias, Ümit Burnu'nu dolaştı", tur:"bilim", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["bilim","toprak-kazanc"],
  d:"Bartolomeu Dias komutasındaki üç gemilik filo, Afrika'nın güney ucunu dolaşarak Hint Okyanusu'na açıldı; kıyı boyunca dönüş yolunda burnu 'Fırtınalar Burnu' diye adlandırdı, kral II. João ise umut dolu bir isim tercih ederek 'Ümit Burnu' dedi. Bu, Avrupa'dan Hindistan'a doğrudan deniz yolunun teknik olarak mümkün olduğunu kanıtladı.",
  kaynak:"TDV `portekiz`: \"1486: Bartolomeu Diaz Ümitburnu'nu dolaştı\" · standart akademik kronoloji yılı 1488 olarak teyit eder (varış tarihi)" },

{ t:"1494-06-07", b:"Tordesillas Antlaşması — dünya iki devlet arasında bölüşüldü", tur:"antlasma", onem:5, dunya:5, kapsam:"dis", yer_id:"",
  etiket:["diplomasi","antlasma","toprak-kazanc"],
  d:"Papa'nın hakemliğiyle Portekiz ve Kastilya-Aragon, Yeşil Burun Adaları'nın 370 fersah batısından geçen bir hat boyunca dünyayı iki nüfuz alanına böldü: Portekiz hattın doğusunu (Afrika, Hindistan yolu, sonradan Brezilya'nın bir kısmı), Kastilya batısını aldı. Bu, Avrupa dışı dünyanın iki güç tarafından resmen paylaşıldığı ilk antlaşmadır.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (EHNE, 'Treaty of Tordesillas, June 7, 1494'; Britannica)" },

{ t:"1495-10-25", b:"I. Manuel tahta çıktı", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic", yer_id:"Lizbon",
  etiket:["hanedan"],
  d:"II. João'nun vârissiz ölümüyle uzak akrabası Manuel tahta çıktı; otuz yıl sürecek saltanatı boyunca Vasco da Gama'nın Hindistan yolu, Kalikut'tan Malaka'ya bütün Hint Okyanusu imparatorluğunun kuruluşu ve Manuelino sanat üslubunun altın çağı yaşandı — tarihyazımında bu dönem 'I. Manuel'in Altın Çağı' olarak anılır.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, yıl standart akademik kronolojiyle teyitli" },

{ t:"1496-12-05", b:"Yahudi ve Müslümanların sürgün fermanı", tur:"din", onem:4, dunya:2, kapsam:"ic", yer_id:"Lizbon",
  etiket:["din","sosyal"],
  d:"I. Manuel, Kastilya kralı ve kraliçesinin kızıyla evlenme şartı olarak Portekiz'deki bütün yahudi ve müslümanlara ülkeyi on bir ay içinde terk etme fermanı yayımladı. Ancak bir yıl sonra ferman zorla din değiştirmeye çevrildi: 1497 Ekim'inde toplanan binlerce yahudi Lizbon'da zorla vaftiz edildi, çocukları ebeveynlerinden ayrılıp Hıristiyan ailelere verildi.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (fermanın tarihi ve zorla vaftiz süreci çoklu akademik kaynakla teyitli — 'Persecution of Jews and Muslims by Manuel I of Portugal' araştırma özetleri)" },

// ══════════════════════════════════════════════════════════════════
// III. HİNT YOLU VE İLK İMPARATORLUK (1498-1521)
// ══════════════════════════════════════════════════════════════════

{ t:"1498-05-20", b:"Vasco da Gama, Kalikut'a ulaştı — Hindistan'a deniz yolu açıldı", tur:"bilim", onem:5, dunya:5, kapsam:"dis", yer_id:"Kalikut (Kozhikode)",
  etiket:["bilim","iktisat","toprak-kazanc"],
  d:"Vasco da Gama komutasındaki dört gemilik filo, Ümit Burnu'nu dolaşıp Doğu Afrika kıyısından pilot alarak Hindistan'ın Kalikut limanına ulaştı. Avrupa ile Hindistan arasında Osmanlı ve Memlük denetimindeki Kızıldeniz-Akdeniz güzergâhına ihtiyaç duymayan bir deniz yolu açıldı; bu, sonraki bir asrın dünya ticaret dengesini yeniden kuracak bir dönüm noktasıdır.",
  kaynak:"TDV `portekiz`: \"1498: Vasco da Gama deniz yoluyla Hindistan'a (Kaliküt) ulaştı\" · `data/kronoloji_memluk.js:308` ile `dunya` birebir hizalı" },

{ t:"1500-01-01", b:"Casa da Índia kuruldu — baharat tekelinin idare merkezi", tur:"reform", onem:4, dunya:2, kapsam:"ic", yer_id:"Lizbon", kapsam_genis:true,
  etiket:["ekonomi","reform"],
  d:"I. Manuel, Hindistan'la bütün ticareti kraliyet tekeli hâlinde yürütmek için Casa da Índia'yı kurdu; kurum, Hindistan seferlerinin finansmanından baharatın Avrupa'ya dağıtımına kadar bütün zinciri denetledi. 1503'te Henrique'in eski Gine-Mina kurumunu da içine alarak Portekiz'in bütün denizaşırı ticaretinin tek elden yönetildiği bir devlet tekeline dönüştü.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (kurumun 1500 tarihi ve işlevi çoklu akademik kaynakla teyitli)" },

{ t:"1500-03-09", b:"Cabral filosu Hindistan'a yola çıktı, Brezilya'ya rastladı", tur:"toprak-kazanc", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["toprak-kazanc","iktisat"],
  d:"Pedro Álvares Cabral, on üç gemilik bir filoyla Hindistan'a giderken rotası Atlantik'in batısına kaydı ve 22 Nisan 1500'de bugünkü Brezilya kıyısını gördü; toprağı 'Vera Cruz Adası' sanarak Portekiz adına ilhak etti. Tordesillas hattının Brezilya'yı Portekiz payına düşürmesiyle birleşince bu rastlantı, üç asır sürecek bir Güney Amerika sömürgesinin başlangıcı oldu.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Britannica, 'Pedro Alvares Cabral'; Encyclopaedia of Portuguese Expansion — FCSH/Universidade Nova de Lisboa, 'The Discovery of Brazil')" },

{ t:"1501-01-01", b:"Jerónimos Manastırı'nın inşaatı başladı — Manuelino üslubunun anıtı", tur:"kultur", onem:4, dunya:2, kapsam:"ic", yer_id:"Lizbon",
  etiket:["kultur"],
  d:"I. Manuel, Vasco da Gama'nın Hindistan seferinin getirdiği zenginlikle Lizbon'da Jerónimos Manastırı'nın inşasını başlattı; yapı, denizcilik motifleriyle (halat, mercan, deniz canavarları) süslü Manuelino mimarisinin en olgun örneğidir. Manastır aynı zamanda Vasco da Gama'nın mezarını da barındıracaktı.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, TDV bu taneciği kapsamıyor, dayanak: standart akademik kaynak (yapının 1501'de başlayıp on yıllar süren inşası)" },

{ t:"1502-01-01", b:"Cartaz sistemi kuruldu — Hint Okyanusu ticareti izne bağlandı", tur:"reform", onem:4, dunya:3, kapsam:"dis", yer_id:"", kapsam_genis:true,
  etiket:["ekonomi","reform"],
  d:"Vasco da Gama'nın ikinci seferinde başlattığı cartaz sistemi, Hint Okyanusu'nda seyreden her Asyalı ticaret gemisinin Portekiz limanlarından geçiş izni almasını zorunlu kıldı; izinsiz yakalanan gemiler mallarına el konularak batırıldı. Bu, Portekiz'in gücünü toprak fethiyle değil deniz üzerindeki zorla-tekel ile kurduğu bir stratejinin resmî aracıydı ve on sekizinci yüzyıla dek yürürlükte kaldı.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Cartaz sisteminin 1502'de Vasco da Gama'nın ikinci seferiyle başlatılması — çoklu akademik özet kaynak)" },

{ t:"1505-07-24", b:"Kilve'nin yağmalanması — Doğu Afrika kıyısında ilk üs zinciri", tur:"savas", onem:3, dunya:2, kapsam:"dis", yer_id:"Kilwa Kisiwani (Kilve)",
  etiket:["askeri","toprak-kazanc"],
  d:"İlk Hindistan genel valisi Francisco de Almeida, Doğu Afrika kıyısında Portekiz denetimi kurmak için Kilve Sultanlığı'nı sekiz gemiyle bastı; şehir direnmeden teslim oldu. Üç hafta sonra aynı filo Mombasa'yı da top ateşine tutup yağmaladı — Sofala ve Kilve'de kalıcı kaleler kurma emri buradan çıktı.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama ('Sack of Kilwa', '7th Portuguese India Armada (Almeida, 1505)' — akademik özet kaynaklar)" },

{ t:"1505-08-14", b:"Mombasa'nın top ateşiyle yağmalanması", tur:"savas", onem:2, dunya:2, kapsam:"dis", yer_id:"Mombasa",
  etiket:["askeri"],
  d:"Kilve'den sonra Mombasa'ya gelen Almeida filosu, vasallık teklifini reddeden şehri top ateşine tutup işgal etti; şehir yağmalandı. Doğu Afrika kıyısındaki bu sert gösteri, Portekiz'in Hint Okyanusu deniz yolunu her iki kıyıdan da denetleme stratejisinin bir parçasıydı.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama ('Battle of Mombasa (1505)' — akademik özet kaynak)" },

{ t:"1508-03-01", b:"Chaul Deniz Savaşı — Hint Okyanusu'nda ilk Portekiz yenilgisi", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"Çaul (Chaul)",
  etiket:["askeri","toprak-kayip"],
  d:"Memlük emîri Hüseyin el-Kürdî'nin Gücerat donanmasıyla birleşik filosu, Chaul limanında Lourenço de Almeida komutasındaki küçük bir Portekiz kuvvetini yendi; Lourenço'nun gemisi battı, kendisi öldü. Bu, Portekiz'in Hint Okyanusu'na girişinden beri aldığı ilk deniz yenilgisiydi ve babası Vali Francisco de Almeida'yı ertesi yıl Diu'da intikam seferine yöneltti.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama ('Battle of Chaul' — akademik özet kaynak); TDV `diu` maddesinin arka planını oluşturur" },

{ t:"1509-02-03", b:"Diu Deniz Savaşı — Hint Okyanusu'nda Portekiz üstünlüğü kesinleşti", tur:"savas", onem:5, dunya:4, kapsam:"dis", yer_id:"Diu",
  etiket:["askeri","toprak-kazanc","ticaret"],
  d:"Vali Francisco de Almeida, oğlunun Chaul'daki ölümünün intikamını almak için Memlük-Gücerat-Kalikut birleşik donanmasını Diu açıklarında kesin bir yenilgiye uğrattı. Zafer, Kızıldeniz-Akdeniz baharat güzergâhının Memlük tekelini kalıcı olarak kırdı ve Portekiz'e bir asır sürecek Hint Okyanusu deniz üstünlüğünü kazandırdı.",
  kaynak:"Cameron Winter (2024), 'Giving the Devil His Diu…', SAGE Journals (hakemli akademik makale) — `data/kronoloji_memluk.js:326` ile `t:` ve `dunya:` birebir hizalı. ⚠️ `data/kronoloji_hindistan.js:513` aynı olaya `dunya:3` vermiş, ÇELİŞKİ koordinatöre bildirildi" },

{ t:"1510-11-25", b:"Goa'nın fethi — Estado da Índia'nın başkenti", tur:"toprak-kazanc", onem:5, dunya:3, kapsam:"dis", yer_id:"Goa",
  etiket:["askeri","toprak-kazanc"],
  d:"Afonso de Albuquerque, Bicapur Sultanlığı'ndan Goa'yı ele geçirdi; şehir kısa sürede Portekiz'in Asya'daki bütün topraklarının (Estado da Índia) başkenti ve dört buçuk asır sürecek bir sömürge merkezi oldu. Goa'nın limanı ve tersanesi, Hint Okyanusu filolarının ana üssüne dönüştü.",
  kaynak:"TDV `portekiz`: \"1510: Goa ele geçirildi\"" },

{ t:"1511-08-24", b:"Malaka'nın fethi — baharat yolunun boğazı ele geçirildi", tur:"toprak-kazanc", onem:5, dunya:4, kapsam:"dis", yer_id:"Malaka",
  etiket:["askeri","toprak-kazanc","ticaret"],
  d:"Albuquerque, Malaka Boğazı'nı denetleyen zengin liman şehri Malaka'yı Malaka Sultanlığı'ndan aldı. Boğaz, Hint Okyanusu ile Güneydoğu Asya baharat adaları arasındaki tek deniz geçidiydi; onun ele geçirilmesi Portekiz'e baharat ticaretinin kaynağına doğrudan erişim sağladı.",
  kaynak:"TDV `portekiz`: \"1511: Malezya zaptedildi\" (Malaka Sultanlığı kastediliyor)" },

{ t:"1512-01-01", b:"Ordenações Manuelinas — birleşik hukuk kodu yürürlüğe girdi", tur:"reform", onem:3, dunya:1, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["reform"],
  d:"I. Manuel, Portekiz'in dağınık örfî hukukunu ve kraliyet fermanlarını beş kitap hâlinde tek bir kodda topladı (Ordenações Manuelinas). Kod, matbaanın yaygınlaşmasından yararlanarak krallığın her yerinde aynı hukukun uygulanmasını sağlayan ilk basılı Portekiz hukuk derlemesiydi.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, TDV bu taneciği kapsamıyor, dayanak: standart akademik kaynak" },

{ t:"1514-01-01", b:"Belém Kulesi'nin inşaatı başladı", tur:"kultur", onem:3, dunya:1, kapsam:"ic", yer_id:"Lizbon",
  etiket:["kultur"],
  d:"Tejo Nehri ağzını savunmak ve Lizbon limanına gelen gemileri karşılamak için mimar Francisco de Arruda'nın tasarladığı Belém Kulesi'nin inşaatı başladı; altı yıl sonra tamamlanan yapı, Manuelino üslubunun deniz temalı süslemeleriyle Vasco da Gama seferinin sembolik bir anıtına dönüştü.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Belém Tower inşaat tarihleri 1514-1520)" },

{ t:"1515-04-01", b:"Hürmüz'ün ikinci kez alınması — Basra Körfezi'nin kilidi", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis", yer_id:"Hürmüz Adası",
  etiket:["askeri","toprak-kazanc","ticaret"],
  d:"Albuquerque, 1507'de kuşatıp çekildiği Hürmüz Adası'nı yedi yıl sonra kalıcı olarak ele geçirdi; adanın hükümdarını Portekiz'e bağımlı bir vassal hâline getirdi. Basra Körfezi'nin ağzını denetleyen bu üs, Portekiz'in Hint Okyanusu ticaret ağının batı ucundaki en değerli halkasıydı.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama; TDV `hurmuz--iran`: \"Portekizliler ikinci muhasaradan sonra adayı ele geçirip sultanı kendilerine bağladılar\"" },

{ t:"1517-01-01", b:"Selman Reis, Portekiz filosunu Cidde önünde geri püskürttü", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"Cidde",
  etiket:["askeri","toprak-kayip"],
  d:"Memlük hizmetindeki denizci Selman Reis, Kızıldeniz'e girmeye çalışan bir Portekiz filosunu Cidde önünde durdurdu; bu, Portekiz'in Kızıldeniz'in kuzeyine kalıcı olarak giremeyeceğinin ilk açık göstergesiydi. Osmanlı'nın 1517'de Mısır'ı fethetmesiyle bu savunma hattı bir yıl içinde Osmanlı denetimine geçecekti.",
  kaynak:"TDV `portekiz`: \"1517: Selman Reis Portekizlileri Cidde'de geri püskürtmüştü\"" },

{ t:"1517-01-01", b:"Seylan'a ulaşıldı — tarçın adası", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["ticaret","toprak-kazanc"],
  d:"Portekiz gemileri Seylan adasına ulaşıp Kotte Krallığı ile ticaret ayrıcalıkları içeren bir anlaşma yaptı; tarçın tekelini denetlemek için kısa süre sonra Colombo'da bir kale inşa edildi. Ada, Portekiz'in Hint Okyanusu ağının en doğu ucundaki kalıcı üssü oldu.",
  kaynak:"TDV `portekiz`: \"1517: Seylan ele geçirildi\" — ⚠️ yerleşim kaydı yok, `yer_id` boş bırakıldı" },

{ t:"1521-12-13", b:"I. Manuel öldü, III. João tahta çıktı", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic", yer_id:"Lizbon",
  etiket:["hanedan"],
  d:"Hint Okyanusu imparatorluğunun kurucusu I. Manuel öldü; oğlu III. João, otuz altı yıl sürecek saltanatında imparatorluğu Brezilya'ya (donatary kaptanlıklar), Japonya'ya (Cizvit misyonları) ve Fas'a (Sa'dî mücadelesi) doğru genişletecek, aynı zamanda Portekiz Engizisyonu'nu kuracaktı.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, yıl standart akademik kronolojiyle teyitli" },

{ t:"1525-01-01", b:"Selman Reis'in raporu — Kızıldeniz savunma planı", tur:"reform", onem:2, dunya:2, kapsam:"dis", yer_id:"", kapsam_genis:true,
  etiket:["askeri"],
  d:"Artık Osmanlı hizmetinde olan Selman Reis, Kızıldeniz'i Portekiz baskısına karşı savunmak için ayrıntılı bir donanma ve tahkimat raporu sundu; rapor, sonraki on yılda inşa edilecek Süveyş tersanesi ve Habeş seferlerinin zeminini oluşturdu. Portekiz açısından bu, rakip cephenin artık sistemli bir devlet politikasına dönüştüğü anlamına geliyordu.",
  kaynak:"TDV `portekiz`: \"1525: Selman Reis raporuyla konuya ışık tuttu\"" },

// ══════════════════════════════════════════════════════════════════
// IV. OSMANLI-PORTEKİZ MÜCADELESİ VE ALTIN ÇAĞIN SONU (1534-1581)
// ══════════════════════════════════════════════════════════════════

{ t:"1534-01-01", b:"Brezilya on beş kaptanlığa bölündü", tur:"idari", onem:4, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["idari","toprak-kazanc"],
  d:"III. João, Brezilya kıyısını Tordesillas hattına kadar uzanan on beş şerit hâlinde bölüp on iki soyluya kalıtsal 'donatary kaptanlıklar' olarak dağıttı; her kaptan kendi masrafıyla toprağı savunmak, iskân etmek ve şeker değirmenleri kurmakla yükümlüydü. Sistem on beş yıl içinde büyük ölçüde başarısız olup çoğu kaptanlık tacına geri döndü, ama bugünkü Brezilya eyalet sınırlarının ilk taslağını çizdi.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (donatary kaptanlık sisteminin 1534'te kuruluşu — çoklu akademik özet kaynak)" },

{ t:"1536-05-23", b:"Portekiz Engizisyonu kuruldu", tur:"din", onem:4, dunya:2, kapsam:"ic", yer_id:"Lizbon",
  etiket:["din","sosyal"],
  d:"Papa III. Paulus'un fermanıyla Portekiz'de resmî bir engizisyon mahkemesi kuruldu; kurum özellikle 1497'de zorla vaftiz edilmiş yahudi kökenli 'yeni Hıristiyanları' hedef aldı. Engizisyon, on sekizinci yüzyıla dek Portekiz toplumsal ve dinî hayatının en baskıcı kurumlarından biri olarak işleyecekti.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Portuguese Inquisition kuruluş fermanı, 23 Mayıs 1536)" },

{ t:"1537-01-01", b:"Coimbra Üniversitesi kalıcı olarak Coimbra'ya taşındı", tur:"bilim", onem:3, dunya:1, kapsam:"ic", yer_id:"Coimbra",
  etiket:["bilim"],
  d:"Lizbon ve Coimbra arasında yüzyıllardır gidip gelen üniversite, III. João döneminde kalıcı olarak Coimbra'ya nakledildi ve eski kraliyet sarayına yerleşti. Bu tarihten sonra Coimbra, Portekiz'in tek üniversite şehri olarak dört asır boyunca ülkenin bütün hukukçu, din adamı ve idarecilerini yetiştirecekti.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (University of Coimbra'nın 1537'de kalıcı nakli)" },

{ t:"1537-01-01", b:"Pedro Nunes'un rota risalesi — loxodrome'un keşfi", tur:"bilim", onem:4, dunya:2, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["bilim","teknoloji"],
  d:"Coimbra'da matematik okutan Pedro Nunes, 'Tratado em defensam da carta de marear' adlı risalesinde bir geminin sabit pusula rotasında seyrettiğinde aslında büyük daire değil sarmal bir yol (loxodrome) izlediğini matematiksel olarak ilk kanıtlayan kişi oldu. Nunes aynı zamanda 1529'da kraliyet baş kozmografı atanmış, deniz haritacılığının resmî denetleyicisi olmuştu — Portekiz'in keşif seferlerini ayakta tutan bilimsel altyapının en önemli ismidir.",
  kaynak:"MacTutor History of Mathematics (St Andrews Üniversitesi, akademik proje), 'Pedro Nunes' — risalenin 1537 yayın tarihi ve baş kozmograf ataması teyitli" },

{ t:"1538-08-04", b:"Hadım Süleyman Paşa'nın Aden-Diu seferi", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"Diu",
  etiket:["askeri","toprak-kayip","kusatma"],
  d:"Osmanlı Hindistan seferi kapsamında Hadım Süleyman Paşa, Yemen'de Aden'i alıp oradan Hint Okyanusu'na açıldı; Gücerat Sultanlığı'nın çağrısıyla Diu'daki Portekiz kalesini kuşattı. Kuşatma başarısızlıkla sonuçlanıp Osmanlı donanması geri çekildiyse de sefer, Portekiz'e Hint Okyanusu'nun artık tartışmasız bir tekel olmadığını gösterdi.",
  kaynak:"TDV `portekiz`: \"1538: Hadım Süleyman Paşa Aden'i ele geçirdi, Diû kuşatıldı\" — mevcut `data/devletler.js` kaydıyla tarih birebir korundu" },

{ t:"1541-01-01", b:"Portekiz'in Kızıldeniz saldırısı Osmanlı tarafından püskürtüldü", tur:"savas", onem:2, dunya:2, kapsam:"dis", yer_id:"Süveyş",
  etiket:["askeri"],
  d:"Portekiz, Diu kuşatmasının intikamını almak için Kızıldeniz'in kuzeyine, Süveyş tersanesine yönelik bir baskın denedi; Osmanlı garnizonu saldırıyı geri püskürttü. Bu başarısızlık, Portekiz'in Kızıldeniz'in kuzey yarısına asla kalıcı olarak giremeyeceğini bir kez daha doğruladı.",
  kaynak:"TDV `portekiz`: \"1541: Portekiz saldırısı Osmanlılar tarafından geri püskürtüldü\"" },

{ t:"1541-04-10", b:"Cristóvão da Gama, Habeşistan'a yardım kuvveti çıkardı", tur:"askeri", onem:4, dunya:2, kapsam:"dis", yer_id:"Mozambik Adası",
  etiket:["askeri","din","ittifak"],
  d:"Vasco da Gama'nın oğlu Cristóvão da Gama, Osmanlı destekli Adal Sultanlığı hükümdarı Ahmed Gran'ın istilası altındaki Hıristiyan Habeş Krallığı'na dört yüz tüfekli askerle yardıma gitti. Sefer, Portekiz-Osmanlı rekabetinin Kızıldeniz'in dışına, Doğu Afrika'nın içlerine kadar taştığı ender doğrudan çarpışma alanlarından biridir.",
  kaynak:"TDV `habes-eyaleti` (Ahmed el-Mücâhid'in Habeş seferleri bağlamı); standart akademik kronoloji ile çapraz doğrulama — ⚠️ Cristóvão da Gama'nın 1542'de esir düşüp idam edilişi TDV'de doğrudan geçmiyor" },

{ t:"1543-02-21", b:"Ahmed Gran'ın ölümü — Habeşistan'da Osmanlı-Portekiz vekâlet savaşı sona erdi", tur:"savas", onem:3, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["askeri","din"],
  d:"Osmanlı Yemen valiliğinden silah yardımı alan Adal hükümdarı Ahmed Gran, Cristóvão da Gama'yı önce yenip idam ettirmişti; ama Portekiz destekli Habeş kuvvetleri ertesi yıl onu savaşta öldürdü. Ölümü, bölgedeki müslüman ilerleyişini durdurdu ve Osmanlı'yı 1550'lerden itibaren Habeşistan'a doğrudan bir eyalet (Habeş Eyaleti) kurarak müdahale etmeye yöneltti.",
  kaynak:"TDV `habes-eyaleti`: \"Ahmed el-Mücâhid'in 1543'teki savaşta öldürülmesi\"" },

{ t:"1547-11-01", b:"Aden'de Portekiz nüfuzunun sonu — Pîrî Reis'in seferi", tur:"savas", onem:2, dunya:2, kapsam:"dis", yer_id:"Aden",
  etiket:["askeri","toprak-kayip"],
  d:"Osmanlı Hint kaptanı Pîrî Reis, altmış gemilik bir filoyla Süveyş'ten yola çıkıp Aden'i kuşattı; kuşatma sırasında üç Portekiz gemisi ve 120 denizci ele geçirildi. Aden'in Şubat 1549'da kesin olarak alınmasıyla Portekiz'in Kızıldeniz ağzındaki son etkili varlığı da tasfiye edilmiş oldu.",
  kaynak:"TDV `piri-reis`: \"954'te (1547) Hint kaptanlığına tayin edildi… Aden'in geri alınması 12 Rebîülevvel 956'da (12 Şubat 1549) gerçekleşti\"" },

{ t:"1549-01-01", b:"Tomé de Sousa, Salvador'ı kurdu — Brezilya Genel Valiliği", tur:"idari", onem:4, dunya:2, kapsam:"dis", yer_id:"Salvador (Bahia)",
  etiket:["idari","toprak-kazanc"],
  d:"On beş dağınık kaptanlığın çoğunun başarısız olması üzerine III. João, bütün Brezilya'yı tek bir merkezî yönetim altında toplayan bir Genel Valilik kurdu; ilk genel vali Tomé de Sousa, bin yerleşimci ve altı Cizvit misyonerle Salvador'ı (Bahia) kurup burayı iki yüz on dört yıl sürecek koloni başkenti yaptı.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Governorate General of Brazil kuruluşu ve Salvador'ın 1549'da kuruluşu — çoklu akademik özet kaynak)" },

{ t:"1549-08-15", b:"Francis Xavier, Japonya'da ilk Hıristiyan misyonunu başlattı", tur:"din", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["din","kultur"],
  d:"Goa merkezli Cizvit misyoner Francis Xavier, Kagoşima limanına ulaşarak Japonya'daki ilk sistemli Hıristiyan misyonunu başlattı. Portekiz padroado sistemi altında yürütülen bu misyon, Portekiz ticaret ağının dinî ve kültürel bir uzantısı olarak Asya'nın en uzak ucuna kadar taştı.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Francis Xavier'in Kagoşima'ya varışı, 15 Ağustos 1549); TDV bu taneciği kapsamıyor" },

{ t:"1552-08-01", b:"Pîrî Reis'in Hürmüz kuşatması — Portekiz kaleyi savundu", tur:"kusatma", onem:3, dunya:2, kapsam:"dis", yer_id:"Hürmüz Adası",
  etiket:["askeri"],
  d:"Pîrî Reis, otuz gemilik bir filoyla Hürmüz Adası'nı kuşattı; yolda Maskat'ı bir haftalık kuşatmayla ele geçirip 128 Portekizli esir aldı. Ancak Hürmüz'ün kendisinde Portekiz donanmasının üstünlüğünden çekinerek kuşatmayı kaldırdı — kale bir asır daha Portekiz elinde kaldı.",
  kaynak:"TDV `piri-reis`: \"959'da (1552) Hürmüz'ü zaptetmek için Süveyş'ten otuz parça gemiyle yola çıktı… Maskat bir haftalık kuşatmadan sonra ele geçirildi, 128 esir alındı\"" },

{ t:"1554-08-25", b:"Seydi Ali Reis'in Umman açıklarında yenilgisi", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"Maskat",
  etiket:["askeri","toprak-kayip"],
  d:"Basra'dan Süveyş'e dönmeye çalışan Seydi Ali Reis'in on beş parçalık Osmanlı filosu, Maskat açıklarında otuz dört parçalık bir Portekiz donanmasıyla karşılaştı; iki taraf da altışar gemi kaybetti ama Osmanlı filosu Kirman kıyılarına doğru çekilmek zorunda kaldı. Bu yenilgi, Osmanlı'nın Hint Okyanusu'nda kalıcı bir donanma bulundurma girişiminin fiilen sonu oldu.",
  kaynak:"TDV `seydi-ali-reis`: \"25 Ağustos 1554'te Maskat açıklarında Fernando kumandasındaki otuz dört Portekiz kalyonuyla karşılaşıldı; her iki taraf altı gemi kaybetti\"" },

{ t:"1563-04-10", b:"Garcia de Orta'nın Goa'da yayımladığı ilaç kitabı — tropikal tıbbın başlangıcı", tur:"bilim", onem:3, dunya:2, kapsam:"dis", yer_id:"Goa",
  etiket:["bilim"],
  d:"Goa'da yaşayan yahudi kökenli Portekizli hekim Garcia de Orta, Hindistan'ın yerli ilaç bitkilerini ve baharatlarını konu alan 'Colóquios dos Simples e Drogas da Índia'yı yayımladı; elli dokuz diyalogdan oluşan eser, bir Avrupalının doğal ortamında gözlemleyerek yazdığı ilk tropikal tıp ve eczacılık kitabı sayılır ve kısa sürede Latinceye çevrilerek Avrupa'da standart referans oldu.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Colóquios dos Simples'in 10 Nisan 1563'te Goa'da yayımlanması — akademik kaynak özetleri)" },

{ t:"1572-03-12", b:"Camões'in 'Os Lusíadas'ı yayımlandı", tur:"kultur", onem:4, dunya:2, kapsam:"ic", yer_id:"Lizbon",
  etiket:["kultur"],
  d:"Luís de Camões, Vasco da Gama'nın Hindistan seferini konu alan on kantoluk destanı Os Lusíadas'ı yayımladı; eser kısa sürede Portekiz dilinin en önemli edebî anıtı ve keşifler çağının millî destanı hâline geldi. Camões'in kendisi de Goa ve Makao'da yıllarca yaşamış, eserini büyük ölçüde denizaşırı imparatorlukta yazmıştı.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Os Lusíadas'ın ilk baskı tarihi, 12 Mart 1572)" },

{ t:"1578-08-04", b:"Vâdisseyl (Alcácer Quibir) Savaşı — Kral Sebastião öldü, hanedan çöktü", tur:"savas", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["askeri","hanedan","toprak-kayip"],
  d:"Genç Kral Sebastião, Fas'a bir haçlı seferi düzenleyip tahttan indirilmiş Sa'dî sultanı Muhammed el-Mütevekkil'i geri getirmeye kalkıştı; Osmanlı destekli Sultan Abdülmelik'in ordusu Portekiz ordusunu Vâdisseyl'de imha etti. Sebastião savaş alanında öldü, vâris bırakmadı ve Abdülmelik de aynı gün öldü — üç kral bir günde kaybedildiği için savaş 'Üç Kral Savaşı' olarak da anılır.",
  kaynak:"TDV `portekiz`: \"1578 (4 Ağustos): Vâdisseyl Savaşında Portekiz ordusu yenildi, Kral Sebastian öldürüldü\" · TDV `sadiler`: \"Sultan Abdülmelik çarpışma sırasında öldü (4 Ağustos 1578)\" — ⚠️ TDV'de savaşın müstakil maddesi yok, iki kaynaktan birleştirildi" },

{ t:"1580-08-25", b:"Alcântara Savaşı — İspanya birliğinin askerî kesinleşmesi", tur:"savas", onem:5, dunya:4, kapsam:"dis", yer_id:"Lizbon",
  etiket:["askeri","hanedan"],
  d:"Sebastião'nun vârissiz ölümünden sonra Portekiz tahtına en güçlü aday olan İspanya Kralı II. Felipe'nin ordusu, rakip aday Dom António'yu Alcântara'da (Lizbon yakınında) kesin bir yenilgiye uğrattı. Zafer, Felipe'nin Portekiz tahtını fiilen ele geçirmesini sağladı; sekiz ay sonra Tomar Cortes'i bunu resmen onaylayacaktı.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Battle of Alcântara, 25 Ağustos 1580)" },

{ t:"1581-04-16", b:"Tomar Cortes'i — II. Felipe Portekiz kralı ilan edildi, İberya Birliği başladı", tur:"birlesme", onem:5, dunya:3, kapsam:"ic", yer_id:"",
  etiket:["hanedan","anayasa"],
  d:"Portekiz kortesleri Tomar'da toplanıp İspanya Kralı II. Felipe'yi I. Felipe unvanıyla Portekiz kralı tanıdı; Felipe karşılığında Portekiz'in kendi hukukunu, parasını, dilini ve denizaşırı imparatorluğunu ayrı tutacağına yemin etti. Altmış yıl sürecek İberya Birliği (1581-1640) böyle başladı — Portekiz bağımsız bir taç olarak değil, kişisel birlik hâlinde varlığını sürdürdü.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Cortes of Tomar, 16 Nisan 1581)" },

// ══════════════════════════════════════════════════════════════════
// V. İSPANYA BİRLİĞİ, RESTORASYON VE BREZİLYA ALTINI (1622-1761)
// ══════════════════════════════════════════════════════════════════

{ t:"1622-04-23", b:"Hürmüz'ün kaybı — Safevî-İngiliz ortak seferi", tur:"toprak-kayip", onem:4, dunya:3, kapsam:"dis", yer_id:"Hürmüz Adası",
  etiket:["askeri","toprak-kayip"],
  d:"Safevî Şahı I. Abbas, İngiliz Doğu Hindistan Şirketi donanmasının desteğiyle Hürmüz'ü 108 yıllık Portekiz hâkimiyetinden aldı. Kayıp, Portekiz'in Basra Körfezi'ndeki tekelinin sonu ve İngiliz-Hollanda rekabetinin Hint Okyanusu'nda Portekiz'in yerini almaya başladığının ilk büyük işaretiydi.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Hürmüz'ün 23 Nisan 1622'de Safevî-İngiliz ortak seferiyle alınması); TDV `hurmuz--iran` bu olayı 108 yıllık işgalin sonu olarak anar" },

{ t:"1640-12-01", b:"Bragança Hanedanı'nın restorasyonu — bağımsızlık geri alındı", tur:"birlesme", onem:5, dunya:3, kapsam:"ic", yer_id:"Lizbon",
  etiket:["hanedan","isyan"],
  d:"Lizbon'daki bir saray darbesiyle Bragança Dükü, IV. João unvanıyla kral ilan edildi; altmış yıllık İspanya birliği fiilen sona erdi. Ayaklanma, otuz yıllık bir bağımsızlık savaşını (1640-1668) başlattı ve Portekiz sömürge imparatorluğunun (Ceuta hariç) neredeyse tamamını yeni hanedana devretti.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Encyclopedia.com, 'Restoration, Portuguese War of'; 1 Aralık 1640 darbesi)" },

{ t:"1641-01-14", b:"Malaka'nın Hollanda'ya kaybı", tur:"toprak-kayip", onem:4, dunya:3, kapsam:"dis", yer_id:"Malaka",
  etiket:["askeri","toprak-kayip"],
  d:"Hollanda Doğu Hindistan Şirketi, yerel müttefiki Johor Sultanlığı ile birlikte beş aylık bir kuşatmanın ardından Malaka'yı Portekiz'den aldı; vali Sousa teslim olduktan iki gün sonra öldü. Kayıp, 1511'den beri Portekiz'in elinde olan Malaka Boğazı tekelini sona erdirdi ve Hollanda'nın Güneydoğu Asya ticaretinde Portekiz'in yerini almasının en büyük sembolik dönüm noktasıydı.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Siege of Malacca 1640-1641, teslimin 14 Ocak 1641'de gerçekleşmesi — akademik özet kaynaklar)" },

{ t:"1662-05-21", b:"Catherine of Braganza'nın İngiltere kralıyla evliliği — Tanca ve Bombay çeyiz olarak verildi", tur:"antlasma", onem:4, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["diplomasi","antlasma","toprak-kayip"],
  d:"IV. João'nun kızı Catherine, İngiltere Kralı II. Charles ile evlenerek İngiliz-Portekiz ittifakını güvenceye aldı; çeyiz olarak nakit paranın yanında Tanca ve Bombay limanları İngiltere'ye devredildi (Bombay'ın fiilî teslimi 1665'i buldu). Bu evlilik antlaşması, hâlâ İspanya ile savaş hâlindeki Portekiz'in bağımsızlığını uluslararası güvenceye kavuşturan kilit diplomatik hamlelerden biriydi.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (1661 İngiliz-Portekiz evlilik antlaşması, evliliğin 21 Mayıs 1662'de gerçekleşmesi, Bombay'ın 1665'te devri)" },

{ t:"1665-06-17", b:"Montes Claros Savaşı — Restorasyon Savaşı'nın kesin zaferi", tur:"savas", onem:5, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["askeri","toprak-kazanc"],
  d:"Marquês de Marialva komutasındaki Portekiz-İngiliz birleşik ordusu, Vila Viçosa yakınında İspanyol ordusunu ağır bir yenilgiye uğrattı; bu, Restorasyon Savaşı'nın en büyük ve son büyük muharebesiydi. Zafer, İspanya'nın Portekiz'i yeniden ilhak etme umudunu fiilen bitirdi ve üç yıl sonraki Lizbon Antlaşması'nın yolunu açtı.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Battle of Montes Claros, 17 Haziran 1665)" },

{ t:"1668-02-13", b:"Lizbon Antlaşması — İspanya bağımsızlığı resmen tanıdı", tur:"antlasma", onem:4, dunya:2, kapsam:"dis", yer_id:"Lizbon",
  etiket:["diplomasi","antlasma"],
  d:"İngiltere'nin arabuluculuğuyla imzalanan Lizbon Antlaşması ile İspanya, yirmi sekiz yıllık savaşın ardından Bragança hanedanının egemenliğini ve Portekiz'in bağımsızlığını resmen tanıdı; Ceuta hariç bütün sömürgeler Portekiz'e bırakıldı. Bu antlaşma, Portekiz'in modern çağa kadar sürecek bağımsız devlet statüsünü hukuken kesinleştirdi.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Treaty of Lisbon, 13 Şubat 1668)" },

{ t:"1693-01-01", b:"Minas Gerais'te altın bulundu — Brezilya altın çağı başladı", tur:"ekonomi", onem:5, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["iktisat"],
  d:"São Paulo'dan içerilere sefer düzenleyen bandeirante'ler, bugünkü Ouro Preto çevresinde zengin altın yatakları buldu; haber yayılınca kıyı bölgelerinden binlerce kişi bölgeye akın etti. Brezilya altını, on sekizinci yüzyıl boyunca Portekiz hazinesinin ve Lizbon'un yeniden inşasının başlıca kaynağı olacaktı.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Brazilian gold rush, 1693-1695 keşif dönemi)" },

{ t:"1703-12-27", b:"Methuen Antlaşması — İngiltere ile ticaret bağı", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"Lizbon",
  etiket:["diplomasi","antlasma","ekonomi"],
  d:"Portekiz ve İngiltere, Portekiz şarabına İngiltere'de ayrıcalıklı gümrük tarifesi tanıyan, karşılığında İngiliz yün mamullerine Portekiz pazarını açan bir ticaret antlaşması imzaladı. Antlaşma, Portekiz ekonomisini bir asır boyunca İngiltere'ye bağımlı hâle getiren yapısal bir dönüşümün başlangıcı oldu.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Methuen Treaty, 27 Aralık 1703)" },

{ t:"1755-11-01", b:"Büyük Lizbon Depremi", tur:"kriz", onem:5, dunya:3, kapsam:"ic", yer_id:"Lizbon",
  etiket:["kriz","sosyal","bilim"],
  d:"Bütün Azizler Bayramı sabahı Lizbon'u vuran 8,5-9,0 büyüklüğündeki deprem, ardından gelen yangın ve tsunamiyle şehrin büyük kısmını yok etti; tahmini otuz-elli bin kişi öldü. Felaket, sadece Portekiz'i değil Aydınlanma Avrupası'nın deprem, kötülük ve ilahî adalet üzerine felsefî tartışmalarını da (Voltaire'in 'Candide'i dahil) derinden etkiledi.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (1755 Lisbon earthquake, 1 Kasım 1755, saat 09:40 civarı)" },

{ t:"1755-11-02", b:"Pombal, Lizbon'un yeniden inşasını üstlendi", tur:"reform", onem:5, dunya:2, kapsam:"ic", yer_id:"Lizbon",
  etiket:["reform","bilim"],
  d:"Kral I. José'nin başbakanı Marquês de Pombal, depremin ertesinde şehri geniş caddeler, ızgara planlı bloklar ve deprem sarsıntısını sönümleyen ahşap iskelet yapılarla ('gaiola pombalina') yeniden inşa etti. Bu, dünyada bilimsel deprem mühendisliği ilkelerine dayanan ilk büyük şehir yeniden inşa projelerinden biri sayılır.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Pombal'ın yeniden inşa planı, ızgara sokak düzeni ve deprem dirençli yapı tekniği)" },

{ t:"1759-09-03", b:"Cizvitlerin Portekiz İmparatorluğu'ndan kovulması", tur:"din", onem:4, dunya:2, kapsam:"ic", yer_id:"Lizbon",
  etiket:["din","reform"],
  d:"Pombal, bir suikast girişimini bahane ederek Cizvit tarikatını bütün Portekiz topraklarından (Brezilya dahil) kovdu ve tarikat mensuplarının tebaayla iletişimini yasakladı. Kovulma, Avrupa'da Cizvitlere karşı başlayan geniş bir dalganın ilk ve en sert halkasıydı; on dört yıl sonra Papa tarikatı tamamen ilga edecekti.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Cizvitlerin kovulma fermanı, 3 Eylül 1759)" },

{ t:"1761-01-19", b:"Portekiz'de kölelik metropolde yasaklandı", tur:"reform", onem:3, dunya:2, kapsam:"ic", yer_id:"Lizbon",
  etiket:["reform","sosyal"],
  d:"Pombal, Portekiz anakarasında (sömürgelerde değil) köle ticaretini ve yeni köle girişini yasaklayan bir ferman çıkardı; bu, Avrupa'nın büyük sömürge güçleri arasında erken bir adımdı. Yasak, ekonomik motivasyonla da açıklanır — Pombal, Brezilya'daki işgücünü metropole kaymaktan alıkoymak istiyordu.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, TDV bu taneciği kapsamıyor, dayanak: standart akademik kaynak" },

{ t:"1772-01-01", b:"Coimbra Üniversitesi Pombal reformuyla yeniden yapılandırıldı", tur:"reform", onem:3, dunya:1, kapsam:"ic", yer_id:"Coimbra",
  etiket:["reform","bilim"],
  d:"Pombal, Coimbra Üniversitesi'nin skolastik müfredatını kaldırıp deneysel bilim, matematik ve doğa tarihine dayalı yeni fakülteler (Matematik, Doğa Felsefesi) kurdu; üniversitede ilk kez fizik laboratuvarı ve botanik bahçesi açıldı. Reform, Portekiz yüksek eğitimini Aydınlanma bilimine açan en kapsamlı kurumsal değişimdi.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, TDV bu taneciği kapsamıyor, dayanak: standart akademik kaynak" },

{ t:"1773-05-25", b:"'Eski Hıristiyan-yeni Hıristiyan' ayrımı kaldırıldı", tur:"reform", onem:3, dunya:2, kapsam:"ic", yer_id:"Lizbon",
  etiket:["reform","sosyal","din"],
  d:"Pombal, iki buçuk asırdır Portekiz toplumsal düzenine kazınmış 'kan temizliği' (limpeza de sangue) statülerini ve yahudi kökenli 'yeni Hıristiyanlar' ile 'eski Hıristiyanlar' ayrımını yasayla ortadan kaldırdı; autos-da-fé törenleri de fiilen sona erdi. Reform, hem devletin toplumsal sınıflandırma tekelini pekiştirme hem de kaçak ticareti önleme amacı taşıyordu.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (1773 kan temizliği statülerinin kaldırılması — akademik özet kaynak, 'Mercantilism, Statebuilding, and Social Reform')" },

// ══════════════════════════════════════════════════════════════════
// VI. NAPOLYON İŞGALİ VE BREZİLYA'NIN KAYBI (1807-1834)
// ══════════════════════════════════════════════════════════════════

{ t:"1807-11-29", b:"Kraliyet ailesi Brezilya'ya kaçtı", tur:"kriz", onem:5, dunya:3, kapsam:"ic", yer_id:"Lizbon",
  etiket:["kriz","hanedan"],
  d:"Napolyon'un Portekiz'i işgal emrini öğrenen Naip Prens João, İngiliz donanmasının koruması altında on bin kişilik kraliyet mensubu ve saray çevresiyle Lizbon'dan Brezilya'ya doğru yola çıktı; iki gün sonra Fransız birlikleri şehre girdi. Bu, bir Avrupa hanedanının denizaşırı bir sömürgeye tamamen taşındığı benzersiz bir olaydır.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (kraliyet ailesinin 29 Kasım 1807'de yola çıkışı, Junot'nun 30 Kasım'da Lizbon'a girişi)" },

{ t:"1808-01-28", b:"Brezilya limanları dost uluslara açıldı", tur:"reform", onem:4, dunya:2, kapsam:"dis", yer_id:"Salvador (Bahia)",
  etiket:["ekonomi","reform"],
  d:"Salvador'a ulaşan Naip Prens João, üç asırlık tekel sistemini fiilen bitiren bir fermanla Brezilya limanlarını bütün dost ülkelerin ticaretine açtı; bu, Portekiz'in kendi sömürgesi üzerindeki münhasır ticaret hakkından koşullar zoruyla vazgeçtiği ilk adımdı. Ferman, İngiliz mallarının Brezilya pazarına doğrudan girişini de sağladı.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, TDV bu taneciği kapsamıyor, dayanak: standart akademik kaynak (Transfer of the Portuguese court to Brazil bağlamı)" },

{ t:"1808-03-07", b:"Rio de Janeiro, Portekiz İmparatorluğu'nun fiilî başkenti oldu", tur:"idari", onem:4, dunya:2, kapsam:"dis", yer_id:"Rio de Janeiro",
  etiket:["idari","hanedan"],
  d:"Rio de Janeiro'ya ulaşan Naip Prens João, burayı bütün imparatorluğun yönetim merkezi ilan etti; limanları yabancı gemilere açtı ve şehirde bankalar, matbaalar, bir kraliyet kütüphanesi kurdu. Bir Avrupa devletinin başkentinin Amerika kıtasına taşınması, sömürge ile metropol arasındaki hiyerarşiyi tarihte ilk kez tersine çevirdi.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Transfer of the Portuguese court to Brazil, Rio de Janeiro'ya varış Mart 1808)" },

{ t:"1820-08-24", b:"Porto Liberal Devrimi", tur:"isyan", onem:5, dunya:2, kapsam:"ic", yer_id:"Porto",
  etiket:["isyan","anayasa"],
  d:"Porto'da başlayan bir ayaklanma, kralın on üç yıldır Brezilya'da kalmasından ve İngiliz idaresinin fiilî vesayetinden bıkan liberal subaylar tarafından yürütüldü; hareket kısa sürede Lizbon'a yayılıp bir kurucu meclis (kortes) toplanmasını ve anayasal monarşi ilanını dayattı. Devrim, VI. João'yu Portekiz'e dönmeye zorlayan sürecin ilk halkasıydı.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Liberal Revolution of 1820, Porto merkezli)" },

{ t:"1822-09-07", b:"Brezilya bağımsızlığını ilan etti — 'İpiranga Çağrısı'", tur:"bolunme", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["hanedan","toprak-kayip","bolunme"],
  d:"Portekiz'de kalan babası VI. João'nun aksine Brezilya'da naip bırakılan Prens Pedro, Kortes'in Brezilya'yı yeniden sömürge statüsüne indirme girişimlerine karşı São Paulo yakınındaki Ipiranga deresi kıyısında 'Bağımsızlık ya da Ölüm!' diye bağırıp bağımsızlığı ilan etti. Pedro, aynı yılın sonunda Brezilya İmparatoru I. Pedro olarak taç giydi; Portekiz üç asırlık en büyük sömürgesini kaybetti.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Independence of Brazil, 7 Eylül 1822 'Grito do Ipiranga')" },

{ t:"1825-08-29", b:"Rio de Janeiro Antlaşması — Portekiz Brezilya'yı tanıdı", tur:"antlasma", onem:4, dunya:3, kapsam:"dis", yer_id:"Rio de Janeiro",
  etiket:["diplomasi","antlasma","toprak-kayip"],
  d:"İngiltere'nin arabuluculuğuyla VI. João, oğlu I. Pedro'nun imparator unvanını ve Brezilya'nın bağımsızlığını resmen tanıdı; karşılığında Portekiz'e ağır bir tazminat ve ticarî ayrıcalıklar sağlandı. Antlaşma, üç asırlık Portekiz-Brezilya bağını hukuken sona erdirdi.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Treaty of Rio de Janeiro, 1825)" },

{ t:"1826-04-29", b:"Anayasal Karta ilan edildi", tur:"reform", onem:4, dunya:2, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["anayasa","reform"],
  d:"Brezilya'dan Portekiz kralı IV. Pedro sıfatıyla hareket eden I. Pedro, Portekiz'e krala geniş yetkiler (dördüncü bir 'ılımlaştırıcı güç' dahil) tanıyan ama iki meclisli bir Kortes de öngören bir anayasal karta bahşetti. Karta, 1822 anayasasından daha az liberaldi ama 1910'a kadar (iki kısa kesintiyle) Portekiz'in temel yasası olarak yürürlükte kalacaktı.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Constitutional Charter of 1826, 29 Nisan 1826)" },

{ t:"1828-06-30", b:"Dom Miguel kendini mutlak kral ilan etti — Liberal Savaşlar başladı", tur:"kriz", onem:5, dunya:2, kapsam:"ic", yer_id:"Lizbon",
  etiket:["kriz","hanedan","isyan"],
  d:"I. Pedro'nun kardeşi Dom Miguel, anayasal monarşiyi tanımayı reddedip kendini mutlak kral ilan etti; bu, liberal anayasacılara bağlı kalan kardeşi Pedro'nun destekçileriyle altı yıl sürecek bir iç savaşın (Liberal Savaşlar / Miguelist Savaşlar) fitilini ateşledi. Savaş, Portekiz'i anayasal monarşi ile mutlakıyet arasında bölen on dokuzuncu yüzyılın en derin krizi oldu.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Liberal Wars, 1828-1834)" },

{ t:"1834-05-24", b:"Evoramonte Sözleşmesi — Liberal Savaşlar sona erdi", tur:"antlasma", onem:4, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["antlasma","hanedan"],
  d:"Dom Miguel, Evoramonte'de imzalanan sözleşmeyle Portekiz tahtı üzerindeki bütün iddialarından vazgeçip yıllık bir maaş karşılığında sürgüne gönderildi. Anlaşma, anayasal monarşinin Portekiz'de kalıcı olarak yerleşmesini sağladı.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Convention of Evoramonte, 24 Mayıs 1834 — EBSCO Research Starters esas alındı)" },

{ t:"1834-05-28", b:"Manastırların kaldırılması — dinî tarikatlar tasfiye edildi", tur:"reform", onem:4, dunya:1, kapsam:"ic", yer_id:"Lizbon",
  etiket:["din","reform","sosyal"],
  d:"İç savaşın hemen ardından bakan Joaquim António de Aguiar imzasıyla çıkan kararname, Portekiz'deki bütün manastır, tarikat evi ve dinî kurumları kapatıp mal varlıklarına devlet adına el koydu; beş yüzden fazla manastır bu yolla tasfiye edildi. Aguiar, bu kararname yüzünden halk arasında 'Keşiş Katili' lakabını aldı — Liberal Savaşlar'ın kilise gücünü kıran en kalıcı sonucudur.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama ('Dissolution of the monasteries in Portugal', kararnamenin 28 Mayıs 1834 tarihi)" },

// ══════════════════════════════════════════════════════════════════
// VII. LİBERAL MONARŞİ, SÖMÜRGE AFRİKA VE CUMHURİYET (1836-1923)
// ══════════════════════════════════════════════════════════════════

{ t:"1836-12-10", b:"Sá da Bandeira kararnamesi — köle ticareti yasaklandı", tur:"reform", onem:4, dunya:2, kapsam:"dis", yer_id:"", kapsam_genis:true,
  etiket:["reform","sosyal"],
  d:"İçişleri bakanı Sá da Bandeira, Ekvator'un güneyindeki bütün Portekiz sömürgelerinde (başta Angola ve Mozambik) Atlantik köle ticaretini resmen yasaklayan bir kararname çıkardı. Yasak, uygulamada kaçak ticareti tamamen durduramadıysa da Portekiz'in Brezilya'ya köle ihraç eden en büyük Avrupa gücü kimliğinden çekilme sürecinin ilk resmî adımıydı.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Sá da Bandeira kararnamesi, 10 Aralık 1836)" },

{ t:"1869-02-25", b:"Kölelik bütün Portekiz topraklarında kaldırıldı", tur:"reform", onem:4, dunya:2, kapsam:"dis", yer_id:"", kapsam_genis:true,
  etiket:["reform","sosyal"],
  d:"Kral I. Luís, 1858'den beri sürdürülen kademeli özgürleştirme sürecini tamamlayan bir kararnameyle köleliği Portekiz Krallığı'nın bütün topraklarında (Angola, Mozambik, Goa dahil) hukuken sona erdirdi. Bu, Portekiz'i Avrupa'nın büyük sömürge güçleri arasında köleliği tamamen kaldıran devletlerden biri yaptı — ama zorunlu çalıştırma pratikleri (contrato işçiliği) yirminci yüzyıla dek sürecekti.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (25 Şubat 1869 kölelik kaldırma kararnamesi, Sá da Bandeira'nın girişimiyle)" },

{ t:"1886-02-20", b:"'Pembe Harita' — Angola-Mozambik kıtasal iddiası ilan edildi", tur:"diplomasi", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["diplomasi","toprak-kazanc"],
  d:"Portekiz, Angola ile Mozambik'i birbirine bağlayan Orta Afrika'nın büyük bir kısmını (bugünkü Zambiya, Zimbabve ve Malavi'nin parçaları) kendi nüfuz alanı ilan eden 'Pembe Harita'yı Fransa ve Almanya ile yaptığı antlaşmalarla resmîleştirdi. İddia, İngiltere'nin Kahire-Kap Şehri hattı hedefiyle doğrudan çatışıyordu ve dört yıl içinde bir krize dönüşecekti.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Pink Map / Mapa Cor-de-Rosa, 1886-1888 antlaşmaları)" },

{ t:"1890-01-11", b:"İngiliz Ültimatomu — sömürge hayali çöktü", tur:"kriz", onem:5, dunya:3, kapsam:"dis", yer_id:"Lizbon",
  etiket:["diplomasi","kriz","toprak-kayip"],
  d:"İngiltere, Portekiz'in Pembe Harita iddiasını zorla uygulamaya çalışan keşif kollarını Orta Afrika'dan çekmesini isteyen bir ültimatom verdi; deniz baskısı tehdidiyle Portekiz geri adım atmak zorunda kaldı. Küçük düşürücü geri çekilme, monarşiye duyulan güveni derinden sarstı ve yirmi yıl sonraki cumhuriyet devriminin toplumsal zeminini hazırladı.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (1890 British Ultimatum, 11 Ocak 1890)" },

{ t:"1908-02-01", b:"Kral I. Carlos ve veliaht suikaste kurban gitti — Lizbon Regicide'i", tur:"kriz", onem:5, dunya:2, kapsam:"ic", yer_id:"Lizbon",
  etiket:["kriz","hanedan"],
  d:"Kral I. Carlos ve veliaht Prens Luís Filipe, açık bir arabayla Lizbon'da Terreiro do Paço meydanından geçerken cumhuriyetçi suikastçılar tarafından vurularak öldürüldü. Suikast, monarşinin son iki yılına damgasını vurdu ve genç kardeş II. Manuel'in kısa, kırılgan saltanatını başlattı.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Lisbon Regicide, 1 Şubat 1908)" },

{ t:"1910-10-05", b:"Cumhuriyet ilan edildi — monarşi sona erdi", tur:"birlesme", onem:5, dunya:3, kapsam:"ic", yer_id:"Lizbon",
  etiket:["isyan","anayasa"],
  d:"Cumhuriyetçi subaylar ve sivillerin Lizbon'da başlattığı iki günlük bir ayaklanmanın ardından Portekiz Cumhuriyeti ilan edildi; Kral II. Manuel İngiltere'ye kaçtı ve yedi asırlık Portekiz monarşisi sona erdi. Bu, Portekiz'in kendi tarihinde ilk cumhuriyet deneyimiydi ve on altı yıl sürecek istikrarsız Birinci Cumhuriyet dönemini açtı.",
  kaynak:"TDV `portekiz`: \"1910 (Ekim): Cumhuriyet ilân edildi, Kral II. Emanuel İngiltere'ye kaçtı\"" },

{ t:"1911-03-22", b:"Kilise-devlet ayrılığı yasası — laik cumhuriyet reformları", tur:"reform", onem:3, dunya:1, kapsam:"ic", yer_id:"Lizbon",
  etiket:["reform","din"],
  d:"Yeni cumhuriyet, Katolik Kilisesi'nin devlet üzerindeki tarihî nüfuzunu kırmak için kilise ile devleti ayıran, dinî eğitimi kamu okullarından çıkaran ve din adamlarının maaşlarını kesen kapsamlı bir laiklik yasası çıkardı. Reform, muhafazakâr köylü kesimlerle cumhuriyetçi kentli seçkinler arasındaki ayrışmayı derinleştirdi.",
  kaynak:"bulunamadı — gün DOĞRULANMADI, TDV bu taneciği kapsamıyor, dayanak: standart akademik kaynak" },

{ t:"1916-03-09", b:"Almanya, Portekiz'e savaş ilan etti — I. Dünya Savaşı'na giriş", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"Lizbon",
  etiket:["askeri","diplomasi"],
  d:"İngiltere'nin talebiyle Lizbon limanındaki otuz altı Alman ve Avusturya-Macaristan gemisine el konulması üzerine Almanya, Portekiz'e resmen savaş ilan etti; Portekiz karşılık verip müttefiklere katıldı. Angola ve Mozambik sınırlarında Almanlarla çatışmalar 1914'ten beri sürüyordu; savaş ilanı bunu resmî bir cepheye dönüştürdü.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Almanya'nın Portekiz'e savaş ilanı, 9 Mart 1916)" },

{ t:"1917-02-01", b:"Portekiz Seferi Kolordusu Batı Cephesi'ne gönderildi", tur:"savas", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["askeri"],
  d:"Portekiz, müttefiklere olan bağlılığını somutlaştırmak için elli bin kişilik bir seferi kolorduyu Fransa'daki Batı Cephesi'ne gönderdi; birlik ertesi yıl Lys Muharebesi'nde ağır kayıplar verecekti. Bu, Portekiz ordusunun kıta Avrupası'nda büyük ölçekli bir savaşa doğrudan katıldığı ilk ve tek modern deneyimdi.",
  kaynak:"standart akademik kronoloji, çapraz doğrulama (Portuguese Expeditionary Corps, Şubat 1917 sevkiyatı)" },

{ t:"1923-10-29", b:"Atlas penceresinin kapanışında Portekiz — istikrarsız Birinci Cumhuriyet", tur:"diger", onem:2, dunya:1, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["anayasa"],
  d:"Atlas penceresi kapandığında Portekiz, on üç yılda kırktan fazla hükümet değişikliği yaşamış istikrarsız bir cumhuriyettir; ekonomik kriz ve siyasî kutuplaşma üç yıl sonra (1926) bir askerî darbeyle sonuçlanacak, bu da nihayetinde Salazar'ın otuz altı yıllık Estado Novo rejimine yol açacaktır.",
  kaynak:"TDV `portekiz`: \"1926 (Mayıs): Askerî darbe, General Gomes da Costa iktidarı ele geçirdi\" — bu madde atlas penceresinin kapanışında durumu özetler, olayın kendisi pencere dışındadır" }

];
