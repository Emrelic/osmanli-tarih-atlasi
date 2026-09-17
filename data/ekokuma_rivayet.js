// ============================================================================
// EK OKUMA — RİVAYET, MENKIBE VE TARTIŞMALI ANLATILAR (EKO-RIVAYET, dalga 0052)
// ============================================================================
// Yazan: EKO-RIVAYET · 16 Eylül 2026 · koordinatör 1.MURAT
// Şartname: oturumlar/DALGA-0052.md — maddeler H-0003 · H-0008 · H-0020 ·
// H-0042 · H-0072 · H-0076 · H-0082 · H-0083 (+ 51/H-0006 aynı madde) ·
// 51/H-0005. Teslim raporu: denetim/EKO-RIVAYET-0916.md
//
// 🔴 AD ALANI (CLAUDE.md §7): bu dosya YALNIZ window.EKOKUMA_RIVAYET tanımlar.
//    app.js `_ekHavuz()` deseni (/^EKOKUMA(_[A-Z0-9]+)?$/) bunu otomatik
//    toplar; `_EKOKUMA_DOSYA_ADLARI`ya "ekokuma_rivayet" satırının eklenmesi
//    bu oturumun işi DEĞİL — UI oturumuna tahtadan bildirildi.
//
// KAYNAK YÖNTEMİ (CLAUDE.md §4, 16 Eylül 2026 — hepsi bu turda çekildi/okundu):
//   TDV (HTTP 200, gövde okundu): eflak · bogdan · tiryaki-hasan-pasa · kanije ·
//   hezarfen-ahmed-celebi · bagdat · katib-celebi · cihannuma--katip-celebi ·
//   cinar-vakasi · koprulu-mehmed-pasa
//   Ottoman siyaset/askerî tarihi anlatı geleneğine (Peçevî/Naîmâ aktarımı,
//   akademik ikincil yazın) dayanan, TDV'nin KENDİ maddesinde doğrulanmamış
//   ayrıntılar `kesinlik:"rivayet"` ile ayrıca damgalandı — bu ayrım, projenin
//   "atlas/anlatı kaynağını gizleme" yasağının (§4) gereği.
// Metinler KOPYALANMADI, özetlendi. `olay:` tarihleri mevcut olaylar_ek*.js
// kayıtlarındaki `t:` değerleriyle BİREBİR — node ile aranıp doğrulandı.
// ============================================================================
window.EKOKUMA_RIVAYET = [

// ── 1 · H-0003 — 1594 üç voyvodalık isyanı ──────────────────────────────────
{ id:"sebep-sonuc-1594-uc-voyvodalik-isyani", tur:"sebep-sonuc",
  kisa:"Üç voyvodalık aynı yıl, aynı kararla ayaklandı — ve bu, atlasın kronolojisinde hiç yoktu.",
  sebep:{ b:"Osmanlı-Habsburg Uzun Harbi'nin (1593-1606) yarattığı fırsat ortamında Avusturya İmparatoru ile Papa VIII. Clemens'in kurduğu Kutsal İttifak'a Boğdan voyvodası Aron Tiran'ın katılması ve Eflak voyvodası Mihai Viteazul'un ağır vergi yükünden duyduğu hoşnutsuzluk", t:"1593-07-01" },
  sonuc:{ b:"1594 ortasında üç voyvodalığın (Eflak, Boğdan, Erdel) ortak hareket kararı ve 13 Kasım 1594'te Eflak ile Boğdan'da eş zamanlı başlayan, Erdel'in desteğiyle Tuna'nın güneyine taşan ayaklanma", t:"1594-11-13" },
  bag:"Önemi: bu üçlü ittifak, aynı yıllarda süren Uzun Harp'in kuzey/Tuna cephesini açtı ve Osmanlı'yı aynı anda iki cephede (Avusturya'ya karşı Macaristan'da, voyvodalıklara karşı Tuna'nın kuzeyinde) savaşmak zorunda bıraktı. Bu isyanın kronolojide kendi maddesi yoktu; bu boşluk kronolojiye ayrıca yazıldı.",
  metin:"1594 baharında Tuna'nın kuzeyindeki üç voyvodalık aynı kararı aldı: Osmanlı'ya karşı birlikte hareket etmek. Boğdan voyvodası Aron Tiran, Avusturya ve Papalığın öncülüğündeki Kutsal İttifak'a katılıp kendini Erdel Prensliği'ne bağladı; Eflak voyvodası Mihai Viteazul ise ağır vergi talepleriyle bunalan bir voyvoda olarak harekete katıldı. 13 Kasım 1594'te Eflak ve Boğdan'da eş zamanlı ayaklanmalar patlak verdi; Erdel'in askerî desteğiyle isyan Tuna'nın güneyine, doğrudan Osmanlı topraklarına taştı. Mihai Viteazul'un bu isyanı beş-altı yıl içinde (1599-1600) Erdel'i ve Boğdan'ı fiilen ele geçirecek kadar büyütmesi ayrı, sonraki bir safhadır ve bu kartın kapsamı dışında bırakıldı — TDV'nin o safhaya verdiği tam günler burada taranmadı.",
  kesinlik:"kesin",
  zincir:["sebep-sonuc-zitvatorok-1606"],
  olay:["1594-11-13"],
  kaynak:"TDV: eflak · bogdan" },

// ── 2 · H-0008 — Tiryaki Hasan Paşa ve Kanije: belge mi rivayet mi ──────────
{ id:"menkibe-tiryaki-hasan-pasa-kanije", tur:"menkibeler",
  baslik:"Kanije'de ne belgeli, ne anlatı — bir kuşatmanın iki katmanı",
  kisa:"9000 kişi 70 gece dayandı — bu TDV'de yazıyor. Toplarını gizlemesi, sahte mektupları da mı?",
  metin:"Bu kart iki ayrı soru soruyor: Kanije savunmasının farklı anlatılan hikâyeleri var mı, ve akademik kaynağın ötesine geçen halk rivayetlerine bu atlasta yer verilmeli mi? İkisi ayrı katmanda cevaplanıyor.\n\n① BELGELİ ÇEKİRDEK (TDV `tiryaki-hasan-pasa` ve `kanije`): 1601'de bir yıl önce fethedilen Kanije'yi geri almak isteyen Arşidük Ferdinand'ın ordusu kaleyi kuşattı; Tiryâki Hasan Paşa 9000 kişilik kuvvetiyle yetmiş gece direndi, huruç harekâtlarıyla düşmanı ağır kayıplarla geri çekilmeye zorladı ve kuşatma 18 Kasım 1601'de Osmanlı zaferiyle bitti. TDV'nin kendi iki maddesi bile küçük ayrıntılarda ayrışıyor (garnizon TDV `tiryaki-hasan-pasa`de 9000, `kanije`nin verdiği olağan kadroyla karşılaştırılınca çok daha büyük) — bu, projenin kendi kronolojisinde zaten kayıtlı bir iç tutarsızlıktır, burada tekrar edilmiyor.\n\n② ANLATI KATMANI (Osmanlı tarih yazım geleneği — Peçevî/Naîmâ aktarımına dayanan ikincil literatür, TDV'nin kendi maddesinde AÇIKÇA doğrulanmıyor): Hasan Paşa'nın surlardaki topları geceleyin gerilere çektirip dışarıdan kalenin silahsız göründüğü izlenimi vermesi; duvarlardaki gedikleri yastık ve battaniyeyle doldurup önüne ince bir taş sırası dizmesi; padişah adına sahte cesaret mektupları yazdırıp bunları ölü askerlerin üzerine bırakarak 'büyük bir Osmanlı ordusu yolda' izlenimi vererek kuşatmacılar arasında paniğe yol açması.\n\n③ YÖNTEM SORUSU: akademik kaynağın ötesine geçen bir araştırma usulü izlenebilir mi? ①'i ②'den AYIRMAK, ikisini birbirine karıştırmaktan iyidir. TDV'nin doğruladığı iskelet (rakamlar, tarihler, sonuç) zaten kronolojide var; ②'deki taktik hikâyeler bu kartta AÇIKÇA 'rivayet/anlatı geleneği' diye etiketlenerek sunuluyor, TDV'nin kendi ağzından çıkmış gibi değil. 1453'teki gemilerin karadan yürütülmesi (Cenevizli tanıklıkla çok kaynaklı belgeli) ile Lagari Hasan Çelebi'nin roket uçuşu (yalnız Evliya Çelebi) arasındaki fark da tam bu ayrımı gösteriyor: bir anlatının 'menkıbe' sayılması, kaynak SAYISINA ve TÜRÜNE bakar, hikâyenin ilginç olup olmadığına değil.",
  not:"② bölümündeki taktik ayrıntılar yalnızca ikincil Türkçe anlatı kaynaklarında bulundu; TDV'nin `tiryaki-hasan-pasa`/`kanije` maddelerinin kendisinde açıkça yok — kaynak listesinde bu yüzden ayrı işaretlendi.",
  kesinlik:"tartismali",
  olay:["1600-10-20|Kanije","1601-09-10|Kanije"],
  kaynak:"TDV: tiryaki-hasan-pasa · kanije (belgeli çekirdek) · Osmanlı anlatı geleneği (Peçevî/Naîmâ aktarımına dayanan ikincil Türkçe yazın — taktik ayrıntılar için, TDV'de doğrulanmadı)" },

// ── 3 · H-0042 — Hezarfen Ahmed Çelebi'nin uçuşu: hangi yıl, tek kaynak mı ──
{ id:"tartisma-hezarfen-ahmed-celebi-tarihlendirme", tur:"tartisma",
  baslik:"Hezarfen ne zaman uçtu — ve atlasın kendisi de iki tarih taşıyor",
  kisa:"TDV yıl vermiyor. Atlas ise İKİ ayrı yıl (1632 VE 1638) veriyor — ikisi de aynı olayı anlatıyor.",
  metin:"Bu olay hangi kaynaklarda nasıl anlatılıyor, ve Evliya Çelebi'nin 'ballandırdığı' hikâyelerden biri mi? TDV `hezarfen-ahmed-celebi` maddesi açık: bu kişi hakkındaki bilgi tamamen Evliya Çelebi'nin Seyahatnâme'sine dayanıyor, başka çağdaş kaynak yok — ve madde spesifik bir yıl vermiyor, yalnız 'XVII. yüzyılda yaşadı' diyor. Maddenin kendi değerlendirmesi temkinli: kol-kanat çırparak uçmanın fizik olarak mümkün olmadığını, ama olayın 'basit bir planörle' açıklanabileceğinin düşünüldüğünü yazıyor — ne doğruluyor ne kesin yalanlıyor.\n\nAtlasta bu olay yaklaşık 1638 olarak işaretlidir; TDV yıl vermediği için bu bir tahmindir, rivayetin tarihî kesinliği tartışmalıdır.",
  bag:"Lagari Hasan Çelebi'nin roket uçuşu (1632 dolayı) ile aynı yöntem sorusunu taşıyor: ikisi de tek kaynaklı (Evliya Çelebi), ikisi de teknik olarak sorgulanabilir, ikisi de dönemin İstanbul'unda gerçekten anlatılan hikâyeler. Fark: Lagari'nin kaydı zaten `kesinlik` alanı taşımıyor gibi görünse de anlatı üslubuyla 'rivayete göre' diyerek mesafe koyuyor; Hezarfen'in 1638 kaydı bu mesafeyi kaybetmiş.",
  kesinlik:"tartismali",
  olay:["1638-06-01"],
  ic_not:"17 Eylül 2026: YAMA-RIVAYET-0916.json'daki öneri uygulandı — atlas iki ayrı tarihli (1632/1638) mükerrer kaydı TEK kayda (1638-06-01, başlığa '(rivayet)' eklenerek) indirdi; bu kartın olay bağı güncellendi.",
  kaynak:"TDV: hezarfen-ahmed-celebi" },

// ── 4 · H-0020 — Bağdat 1623: savaş ilanı var mıydı? ────────────────────────
{ id:"tartisma-bagdat-1623-savas-ilani-mi", tur:"tartisma",
  baslik:"1623'te Bağdat'a savaş mı açıldı, yoksa Şah bir isyanı mı devraldı?",
  kisa:"Ne bir elçi geldi ne bir ültimatom — Şah Abbas, Osmanlı'nın KENDİ isyancısının davetine icabet etti.",
  metin:"İran'ın savaş ilanı filan yok mu, gelip direkt mi saldırmışlar? TDV `bagdat` ve `abbas-i` maddelerine göre cevap ikisi de değil, üçüncü bir şey: bu klasik anlamda ne bir savaş ilanıdır ne de sıfırdan bir saldırı — Osmanlı'nın KENDİ İÇ İSYANINI Şah Abbas devraldı.\n\nZincir şöyle işledi: Bağdat'ta yeniçeri zâbiti Bekir Subaşı, merkezî otoritenin zayıfladığı bir dönemde ayaklandı ve Bağdat Beylerbeyi Yûsuf Paşa'nın ölümünden sonra iç kaleye hâkim oldu. Diyarbekir Beylerbeyi Hâfız Ahmed Paşa'nın onu beylerbeyilik rütbesiyle yatıştırma girişimi tutmayınca, Bekir Subaşı Şah Abbas'la temasa geçip Osmanlı'dan uzaklaşmaya başladı. Şah Abbas bu iç çözülmeyi bekleyip Temmuz 1623'te 30.000 kişilik orduyla doğrudan Bağdat üzerine yürüdü ve şehri kuşattı — bu, önceden bir barışın bozulup ELÇİ GÖNDERİLEREK savaşın İLAN EDİLDİĞİ bir sekans değil, zaten fiilen kopmuş bir vilayetin ÜZERİNE YÜRÜMEdir. Üç aylık kuşatmadan sonra Bekir Subaşı öldü, oğlu Derviş Mehmed Bağdat valiliği vaadine kanıp iç kaleyi 28 Kasım 1623'te Safevîlere teslim etti.\n\nYani sıra şu: önce İÇ İSYAN (Bekir Subaşı) → sonra İSYANCI-ŞAH TEMASI → sonra ŞAH'IN KUŞATMASI → sonra İHANETLE TESLİM. Resmî bir savaş ilanı bu zincirin hiçbir halkasında yok; TDV de böyle bir ilandan söz etmiyor.",
  bag:"Önemi: bu sekans, kaybın neden bu kadar hızlı ve travmatik olduğunu açıklıyor — Osmanlı bir cepheye hazırlanamadan, kendi taşra yönetimindeki bir çözülme yüzünden Bağdat'ı ve Necef-Kerbelâ'yı kaybetti. Şah Abbas sonradan sözünü tutmayıp Sünnî halka ağır davrandı; bu da Bağdat'ın geri alınmasını (1638) sonraki on beş yılın tek doğu hedefi hâline getirdi.",
  kesinlik:"kesin",
  olay:["1623-11-28"],
  kaynak:"TDV: bagdat" },

// ── 5 · H-0072 — Cihannümâ ──────────────────────────────────────────────────
{ id:"teknik-cihannuma-katib-celebi", tur:"teknik-bilimsel",
  kisa:"Evinde oturan biri, dünyayı bir yolcu gibi dolaşabilsin diye yazılmış bir kitap — ve yazarı onu iki kez yazıp iki kez yarım bıraktı.",
  metin:"Kâtib Çelebi, 1055'te (1645) katıldığı Girit seferi sırasında haritalara ve coğrafya kitaplarına ilgi duymaya başladı. Kendi önsözünde yazdığına göre coğrafya, evinde oturan bir insanın bir gezgin gibi dünyayı dolaşmasını sağlar ve böyle eserleri okumak bir ömür boyu seyahat etmekten daha çok bilgi verir. Cihannümâ'yı yazma sebebini de açıkça koyuyor: Arapça, Farsça ve Türkçe yazılmış coğrafya kitaplarını yetersiz buluyor, Batı'nın bu bilim dalına verdiği önemi örnek gösteriyordu.\n\nEser iki ana bölümden oluşur: birincisi yalnız denizler, nehirler ve adaları; ikincisi ülkeleri ve şehirleri alfabetik sırayla, 7. (hicrî) yüzyıldan sonra keşfedilen ülkeleri de kapsayacak biçimde ele alır. Cihannümâ Osmanlı topraklarının ilk sistematik coğrafya kitabı sayılır ve Batılı kaynakları da (Mercator ve Hondius'un Atlas Minor'u başta olmak üzere) kullanan öncü yaklaşımıyla tanınır.\n\nEserin kaderi kendi de bir hikâye: elde kalan yazmalara göre Kâtib Çelebi Cihannümâ'yı FARKLI dönemlerde, farklı kaynak ve plana göre İKİ KEZ yazdı ve İKİSİ DE YARIM KALDI. İlk telifini bırakıp Aralık 1654 sonunda yeni baştan yazmaya girişti; bu ikinci versiyon da Van'a geldiğinde yazarın 1657'deki ölümüyle tamamlanamadı. Eser bu yarım hâliyle ancak 1732'de İbrâhim Müteferrika'nın matbaasında basıldı — Türk matbaacılığının ilk kitaplarından biri olarak.",
  kesinlik:"kesin",
  olay:["1654-12-01","1657-10-06"],
  kaynak:"TDV: cihannuma--katip-celebi" },

// ── 6 · H-0082 — Keşfü'z-Zünûn ──────────────────────────────────────────────
{ id:"teknik-kesfuzzunun-katib-celebi", tur:"teknik-bilimsel",
  kisa:"Yirmi yıl, sayısız şehir, tek bir soru: kim, ne yazmış? On beş bin eserin fişini çıkaran bir kütüphane kataloğu.",
  metin:"Keşfü'z-Zünûn 'an Esâmi'l-Kütüb ve'l-Fünûn, Kâtib Çelebi'nin bibliyografik başyapıtıdır: İslâm dünyasında o güne kadar yazılmış Arapça, Farsça ve Türkçe eserleri konularına göre sınıflandırıp yazar adı, eser adı ve içeriği hakkında kısa bilgi veren dev bir kütüphane kataloğudur. Kâtib Çelebi bu malzemeyi toplamaya 1633'te Halep'te başladı; yirmi yıl sürecek çalışma boyunca gittiği şehirlerin kütüphanelerini ve kitapçılarını tek tek taradı, IV. Murad'ın doğu seferlerine kâtip olarak katıldığı yıllarda bile bu araştırmayı sürdürdü.\n\nEser, ortaya çıktığı dönemde benzeri olmayan bir kapsam iddiası taşır: TDV'nin tarifiyle Kâtib Çelebi bu çalışmasıyla Batılı araştırmacılarca Celâleddin es-Süyûtî'ye benzetilmiş, yirminci yüzyıla kadar İslâm dünyasının bilgi üretimini araştıran Batılı ve Doğulu araştırmacılar için VAZGEÇİLMEZ bir başvuru kaynağı olmuştur. Yazarın medrese düşüncesine eleştirel yaklaşımı ve mezhep taassubuna karşı duruşu bu eserin de karakterini belirler: Keşfü'z-Zünûn bir mezhebin ya da ekolün eserlerini değil, ULAŞABİLDİĞİ HER ESERİ kaydetmeye çalışır.",
  kesinlik:"kesin",
  olay:["1633-01-01"],
  kaynak:"TDV: katib-celebi" },

// ── 7 · 51/H-0005 — Kâtib Çelebi kimdir ─────────────────────────────────────
{ id:"kimdir-katib-celebi", tur:"kimdir",
  ad:"Kâtib Çelebi",
  kisa:"Bir maliye kâtibi kırk yaşına gelmeden kendini tamamen okumaya kilitledi — ve Osmanlı'nın en üretken tek kişilik ansiklopedi projesini yarattı.",
  metin:"Şubat 1609'da İstanbul'da doğdu; asıl adı Mustafa'dır, Doğu'da Hacı Halîfe, Batı'da Hacı Kalfa adıyla da anılır. On dört yaşına kadar özel eğitim aldı, 1623'te Anadolu Muhasebesi kalemine girdi. IV. Murad'ın doğu seferlerine (1624-1640) kâtip olarak katıldı; 1635'te İstanbul'a dönüşünden sonra kendini tamamen okumaya ve yazmaya verdi — Kadızâde Mehmed Efendi ve A'rec Mustafa Efendi gibi hocalardan on yıl boyunca gece gündüz demeden ders aldı.\n\nKişiliği eserlerine sinmiştir: TDV onu ölçülü, hicivden kaçınan, çiçek yetiştirmek gibi zarif uğraşları olan, bütün mezhep taassubuna karşı duran ama Hanefî çizgide dindar kalan bir âlim olarak tarif eder. Batıl addettiği dinî uygulamalara eleştirel yaklaşırken skolastik (medrese) düşünceye de eleştirel baktı — bu ikili duruş onu döneminin sıra dışı bir aklî düşünce temsilcisi yapar.\n\nÜç büyük eseri farklı alanları kapsar: Keşfü'z-Zünûn (bibliyografya, 20 yılda tamamlandı), Cihannümâ (coğrafya, iki kez yazılıp iki kez yarım kaldı) ve Fezleke (1592-1654 arasını anlatan Türkçe Osmanlı tarihi). Ayrıca dönemin fikrî tartışmalarına değinen Mîzânü'l-Hak adlı bir eseri daha vardır. Franz Babinger onu Celâleddin es-Süyûtî'ye benzetmiş, eserleri Batı'da İslâm araştırmaları için temel referans kaynakları arasına girmiştir. 6 Ekim 1657'de İstanbul'da öldü; Cihannümâ'nın ikinci versiyonu Van'a geldiğinde yarım kalmıştı.",
  kesinlik:"kesin",
  olay:["1633-01-01","1654-12-01","1657-10-06"],
  kaynak:"TDV: katib-celebi" },

// ── 8 · H-0076 — Çınar Vakası ────────────────────────────────────────────────
{ id:"sebep-sonuc-cinar-vakasi-1656", tur:"sebep-sonuc",
  kisa:"Ödenmeyen maaş bir meydanı idam sehpasına çevirdi — ve altı ay sonra seksen yaşında bir adam devleti kurtarmaya çağrıldı.",
  sebep:{ b:"Girit seferinin uzaması ve mali krizin ağırlaşması: askere ayarı düşük akçe verilmesi ve ulûfelerin gecikmesi, Girit'ten ödemesiz dönen yeniçeri ve sipahilerin yolsuzlukla suçladıkları devlet adamlarından hesap sorma kararı", t:"1656-03-02" },
  sonuc:{ b:"Çınar Vak'ası (Vak'a-i Vakvakiye): önce üç, sonra otuza yakın devlet adamının idamı ve cesetlerinin Sultanahmet Meydanı'ndaki çınar ağaçlarına asılması", t:"1656-03-04" },
  bag:"Önemi: bu isyan tek başlı bir olay değil, 1648'den beri süregelen saray-ordu-hazine krizinin doruk noktasıydı. TDV `cinar-vakasi` maddesine göre Sadrazam Zurnazen Mustafa Paşa'nın müsadere ve sürgün önerisi kabul görmedi, yalnız kanlı bir tasfiye isyancıları yatıştırdı. Kriz burada BİTMEDİ: aynı yılın sonunda (15 Eylül 1656) Vâlide Turhan Sultan, 78 yaşındaki Köprülü Mehmed Paşa'yı — kendisine devlet işlerine karışılmayacağı, azlinin istenmeyeceği ve şikâyetlerin dinlenmeyeceği gibi olağanüstü şartları kabul ederek — sadrazam yaptı (TDV `koprulu-mehmed-pasa`). Çınar Vak'ası, bu radikal çözümün önünü açan krizlerden biridir.",
  metin:"2-4 Mart 1656'da Girit seferinden ödemesiz dönen yeniçeri ve sipahiler İstanbul'da toplanıp yolsuzlukla suçladıkları devlet adamlarının idamını istedi. Sadrazam Zurnazen Mustafa Paşa önce müsadere ve sürgün önererek isyanı yumuşatmaya çalıştı, ama bu öneri kabul görmedi. Önce üç görevli, ardından toplam otuza yakın devlet adamı idam edilip cesetleri Sultanahmet Meydanı'ndaki çınar ağaçlarına asıldı — olay bu yüzden 'Çınar Vak'ası' adını aldı; cesetlerin sarktığı ağacın Hint mitolojisindeki, meyveleri insan başına benzeyen efsanevi vakvak ağacına benzetilmesiyle de 'Vak'a-i Vakvakiye' diye anıldı. Genç padişah IV. Mehmed, isyancıların taleplerini dinleyip hatt-ı şerifle infazları onayladı. TDV bu isyanı devlet otoritesinin en çok sarsıldığı anlardan biri olarak kaydeder; doğrudan sonucu altı ay sonra, krizin çaresi olarak Köprülü Mehmed Paşa'nın olağanüstü yetkilerle sadrazamlığa getirilmesidir.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1656-03-04"],
  kaynak:"TDV: cinar-vakasi · TDV: koprulu-mehmed-pasa" },

// ── 9 · H-0083 / 51-H-0006 — Yanova, Erdel seferi ve Rákóczi zinciri ────────
// ── 10 · 0048/H-0015 (2. tur) — Ferhad Paşa/İstanbul Antlaşması 1590 ────────
{ id:"sebep-sonuc-ferhad-pasa-istanbul-1590", tur:"sebep-sonuc",
  kisa:"Osmanlı doğuda hiç olmadığı kadar genişledi — ve on sekiz yıl içinde kazandığının tamamını geri verdi.",
  sebep:{ b:"1578'de başlayan uzun ve yıpratıcı Osmanlı-Safevî savaşının Gence'nin 1 Eylül 1588'de alınmasıyla Osmanlı lehine dönmesi ve yeni şah I. Abbas'ın taht çekişmeleri ile doğuda Özbeklerin baskısıyla uğraşması", t:"1588-09-01" },
  sonuc:{ b:"Ferhad Paşa (İstanbul) Antlaşması: Kafkasya'da Gürcistan, Dağıstan, Şirvan, Karabağ ve Gence; Azerbaycan'da Tebriz ve Karacadağ; batıda Luristan, Nihâvend, Kürdistan, Şehrizor ve Bağdat'ın Osmanlı'da kalması ve İran'da halifelere lânet okunmasının yasaklanması", t:"1590-01-01" },
  bag:"Önemi: bu antlaşma Osmanlı'nın doğuda ulaştığı EN GENİŞ sınırı belgeler — TDV'nin Safevîler maddesindeki toprak listesi bunu gösterir. Ama kazanım KALICI OLMADI: Şah Abbas doğu cephesini (Özbekler) önce halledip batıya döndü ve Luristan'ı 1603'te, Tebriz'i 21 Ekim 1603'te, Gence'yi 1606'da, Şirvan ile Gürcistan'ı 1608'de geri aldı — on üç ila on sekiz yıl içinde 1590'ın bütün kazanımları eridi. Bu, 'genişleme' ile 'kalıcı tasarruf'un aynı şey olmadığını gösteren en çarpıcı örneklerden biridir (bkz. D030 'atlas seferi değil tasarrufu boyar').",
  metin:"1578'den beri süren savaş, Osmanlı'nın 1588'de Gence'yi almasıyla dönüm noktasına ulaştı; yeni tahta çıkan Şah I. Abbas hem iç çekişmelerle hem doğudaki Özbek baskısıyla uğraşıyordu ve batı cephesini kapatmak istiyordu. Şah, Haydar Mirza başkanlığında kalabalık bir heyeti İstanbul'a gönderdi; Osmanlı serdarı Ferhad Paşa da heyetle birlikte dönerek antlaşmada rol oynadı. 1590'da (998) varılan barışla savaş boyunca ele geçirilen bütün topraklar (Kafkasya, Azerbaycan, batı İran ve Irak'ın büyük bölümü) Osmanlı'da kaldı ve İran'da ilk üç halifeye lânet okunması yasaklandı. Ama bu, kalıcı bir sınır değil bir GÜÇ DENGESİ ANI'ydı: batı cephesi güvenceye alınan Abbas doğuya (Özbeklere) yöneldi, orduyu ve maliyeyi yeniden düzenledi (meşhur şah kulu reformları da bu döneme rastlar) ve hazır olunca batıya döndü. Luristan 1603'te, Tebriz aynı yılın 21 Ekim'inde, Gence 1606'da, Şirvan ve Gürcistan 1608'de tek tek Safevîlere geçti.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1588-09-01","1590-03-21"],
  kaynak:"TDV: safeviler · murad-iii · luristan · ferhad-pasa · tebriz" },

// ── 11 · 0048/H-0015 (2. tur) — İstanbul Antlaşması 1700 (Azak) ─────────────
{ id:"sebep-sonuc-istanbul-1700-azak", tur:"sebep-sonuc",
  kisa:"Karlofça'nın çözemediği tek hesap Rusya'yla kaldı — ve bu kez Rusya, kaybeden taraf değil masadaki EŞİT bir taraf gibi konuştu.",
  sebep:{ b:"Karlofça görüşmelerinde (1699) Osmanlı ile Rusya arasında kalıcı bir barış kurulamaması: Osmanlı Azak'ı bırakmaya razıydı ama Dinyeper ağzındaki kalelerin boşaltılmasını istiyordu, Rus elçisi Ukrayntsev ise bu konuda tam yetkili olmadığını söylüyordu — yalnız iki yıllık, beş maddelik bir mütarekeyle (24 Ocak 1699) yetinildi", t:"1699-01-24" },
  sonuc:{ b:"İstanbul Antlaşması: Azak Kalesi kesin olarak Rusya'ya bırakıldı, ama toprak meselelerinde genellikle Osmanlı istekleri kabul edildi ve Rusya ilk kez İstanbul'da SÜREKLİ ELÇİ bulundurma hakkı kazandı", t:"1700-07-14" },
  bag:"Önemi: bu antlaşma, Rusya'nın artık Osmanlı sarayında GÜNDELİK, SÜREKLİ bir diplomatik varlık kazandığı ilk andır — önceki yüzyıllarda elçilikler geçici heyetlerdi. Osmanlı bir tavizle (Azak) bir kazanç (toprakta genel olarak kendi isteklerinin kabulü, Kırım'a akın yapılmaması güvencesi) elde etti, ama Rusya'nın Karadeniz'e açılma talebini (ticaret gemilerinin serbest dolaşımı) reddederek denizi kendi gölü olarak tutmayı sürdürdü — bu direnç ancak 1774 Küçük Kaynarca'da kırılacaktı.",
  metin:"Karlofça'da bütün müttefiklerle (Avusturya, Venedik, Lehistan) kalıcı barış yapılabildiği hâlde Rusya'yla yalnız geçici bir mütareke imzalanabilmişti. Görüşmeler birkaç ay sonra İstanbul'da aynı Osmanlı heyeti (Reis-ül Küttab Râmi Mehmed Efendi) ile Rus elçisi Ukrayntsev arasında sürdürüldü ve on dört maddelik antlaşma 14 Temmuz 1700'de imzalandı. Azak Kalesi kesin olarak Rusya'ya bırakıldı; buna karşılık Kırımlılara akın yapılmaması ve haraç talep edilmemesi konusunda Rus istekleri kabul edildi, Rusya İstanbul'da elçi düzeyinde sürekli bir temsilci bulundurma hakkı kazandı, ama ticaret gemilerinin Karadeniz'de serbestçe dolaşması talebi REDDEDİLDİ. Osmanlı hükümeti antlaşmadan sonra, Azak'ın Rusya'ya geçmesine karşılık Karadeniz'in güvenliği için Kerç Boğazı'nda Yenikale'yi inşa ettirdi.",
  kesinlik:"kesin",
  zincir:["sebep-sonuc-karlofca-1699","sebep-sonuc-kucuk-kaynarca-1774"],
  olay:["1699-01-26","1700-07-14"],
  kaynak:"TDV: karlofca · azak · mustafa-ii · rusya" },

// ── 12 · 0048/H-0015 (2. tur) — Prut Antlaşması 1711 ────────────────────────
{ id:"sebep-sonuc-prut-1711", tur:"sebep-sonuc",
  kisa:"Bir sadrazam, bir çarı ordusuyla birlikte elinin altında yakaladı — ve onu serbest bıraktı. Kahramanlık mı, rüşvet mi, akıllı diplomasi mi?",
  sebep:{ b:"İsveç Kralı XII. Karl'ın Poltava'da (Ağustos 1709) Çar I. Petro'ya yenilip Osmanlı topraklarına sığınması, Boğdan voyvodası Dimitrie Kantemir'in Petro ile gizlice anlaşıp Osmanlı'ya karşı harekete geçmesi ve Rusya'nın Azak'tan sonra Kırım'ı tehdit eden yeni kaleler kurması", t:"1709-08-01" },
  sonuc:{ b:"Baltacı Mehmed Paşa'nın Prut nehri kıyısında Çar I. Petro'nun bizzat bulunduğu Rus ordusunu kuşatıp imha edebilecekken barış teklifini kabul etmesi; Prut Antlaşması (Amannâmesi): Azak'ın Rusya'dan geri alınması, Taygan ve Yenikale'nin yıkılması, Lehistan ve Kazaklara karışılmaması", t:"1711-07-21" },
  bag:"Önemi ve tartışması bir arada: Rusya'nın en güçlü hükümdarlarından birini ordusuyla birlikte tuzağa düşürüp SONRA SERBEST BIRAKMAK, Osmanlı tarih yazımının en tartışmalı kararlarından biridir. TDV'nin aktardığı eleştiriler açık: Baltacı'nın çarı esir alma fırsatını kaçırdığı, Rus ordusunu topu tüfeğiyle serbest bıraktığı ve müttefiki İsveç Kralı'nın rızasını almadan karar verdiği söylendi; Çariçe Katerina'nın sadrazama gönderdiği hediyelerin (mücevher) barışı etkilediği iddia edildi. Baltacı bu yüzden azledilip Limni'ye sürüldü ve 1712'de orada öldü. Ama TDV bazı tarihçilerin bunu akıllıca bir diplomasi kabul ettiğini de ekliyor: savaş tazminatı ve Rus donanmasının teslimi gibi daha ağır şartlar hiç gündeme gelmedi, ve imzalanan belge zaten bir mütareke (temessük) niteliğindeydi — asıl kalıcı barışın İstanbul'da yapılması öngörülüyordu.",
  metin:"Poltava bozgunundan kaçan İsveç Kralı XII. Karl'ın Osmanlı topraklarına (Bender) sığınması ve Boğdan voyvodası Kantemir'in Rusya'yla gizli anlaşması, Osmanlı'yı 1710'da Rusya'ya savaş açmaya itti. 1711 yazında Baltacı Mehmed Paşa komutasındaki Osmanlı ordusu, Prut nehri kıyısında Çar I. Petro'nun bizzat bulunduğu Rus ordusunu kuşattı — ordu erzaksız ve çaresiz durumdaydı. Ama Baltacı, imha etmek yerine 21 Temmuz 1711'de bir mütareke (Amannâme) imzaladı: Rusya Azak'ı çevresi ve cephanesiyle geri verecek, Taygan ile Kamenka kaleleri ve Yenikale yıkılacak, Lehistan'a ve Kazaklara müdahale edilmeyecek, Müslüman esirler serbest bırakılacaktı — ama savaş tazminatı, donanma teslimi ya da Kantemir'in iadesi gibi ağır şartlar metne hiç girmedi. Osmanlı tarafının Türkçe metniyle Rusça metin arasında da fark vardı: Türkçesi Lehistan'a müdahaleyi yalnız Rusya'ya yasaklarken Rusçası bunu iki devlete birden uyguluyordu.",
  kesinlik:"tartismali",
  zincir:[],
  olay:["1711-07-21|Azak ve Taygan"],
  kaynak:"TDV: prut-antlasmasi" },

// ── 13 · 0048/H-0015 (2. tur) — 93 Harbi'nin başlangıcı → Ayastefanos ───────
{ id:"sebep-sonuc-doksanuc-harbi-1877-ayastefanos", tur:"sebep-sonuc",
  kisa:"Balkanlarda başlayan bir isyan zinciri, iki cephede birden Osmanlı'yı yenilgiye götürdü — ve bu kart Berlin'in sebebini DEĞİL, savaşın KENDİSİNİN sebebini anlatır.",
  sebep:{ b:"1875-76'da Bosna-Hersek ve Bulgaristan'da çıkan ayaklanmalar, Rusya'nın panslavist siyasetle bunları körüklemesi ve Aralık 1876'daki İstanbul Konferansı'nın önerilerinin Osmanlı tarafından reddedilmesi üzerine Rusya'nın 24 Nisan 1877'de savaş ilan etmesi", t:"1877-04-24" },
  sonuc:{ b:"Rus ordularının Tuna'da Plevne'yi (Osman Paşa'nın direnişine rağmen) ve doğuda Erzurum'u aşıp İstanbul önlerine (Yeşilköy/Ayastefanos) dayanması; 31 Ocak 1878 Edirne Mütarekesi ve 3 Mart 1878 Ayastefanos Antlaşması", t:"1878-03-03" },
  bag:"Önemi: bu kart, `sebep-sonuc-berlin-1878`den KASITLI olarak AYRI — o kart Ayastefanos'un NİÇİN Berlin'de değiştirildiğini (büyük devletlerin itirazı) anlatır, bu kart ise SAVAŞIN KENDİSİNİN nasıl başladığını ve Osmanlı'ya bedelini anlatır. 93 Harbi, Balkanlardaki Osmanlı varlığının çöküşünün başlangıcı sayılır: yüz binlerce Türk ve Müslüman muhacir Bulgaristan'dan Anadolu'ya göç etmek zorunda kaldı, devlet Rusya'ya 802,5 milyon frank savaş tazminatı borçlandı — bu mali yük 1875 Düyûn-ı Umûmiye iflasının üzerine binen ikinci büyük darbe oldu.",
  metin:"1875-76'da Bosna-Hersek ve Bulgaristan'da çıkan ayaklanmalar Avrupa kamuoyunda geniş yankı buldu; Rusya panslavist siyasetiyle bu hareketleri destekledi. Aralık 1876'da toplanan İstanbul Konferansı'nın Balkan halklarına özerklik öneren kararları Osmanlı hükümetince reddedilince Rusya 24 Nisan 1877'de savaş ilan etti. Savaş iki cephede birden yürütüldü: Tuna cephesinde Abdülkerim Paşa'nın komutasında başlayan mücadele, Osman Paşa'nın Plevne'deki uzun direnişine rağmen Rus ilerleyişini durduramadı; doğuda Ahmed Muhtar Paşa'nın Kafkas cephesindeki başlangıçtaki başarıları da kalıcı olmadı. Rus orduları batıda İstanbul'un Yeşilköy (Ayastefanos) semtine, doğuda Erzurum'a kadar ilerleyince Bâbıâli 31 Ocak 1878'de Edirne Mütarekesi'ni imzalamak zorunda kaldı. Savaşın insanî bedeli ağırdı: özellikle Bulgaristan'dan yüz binlerce Türk ve Müslüman zorla yerinden edildi ya da yollarda öldü; bu muhacirlerin bir kısmı sonradan II. Abdülhamid adına kurulan köylere yerleştirildi. 3 Mart 1878'de imzalanan Ayastefanos Antlaşması'nın hükümleri (bağımsızlıklar, Bulgaristan'ın genişlemesi, toprak kayıpları, 1.410.000.000 rublelik tazminat) ayrı bir kartta (`antlasma-ayastefanos-1878`) anlatılıyor.",
  kesinlik:"kesin",
  zincir:["sebep-sonuc-berlin-1878"],
  olay:["1877-04-24","1878-01-31","1878-03-03"],
  kaynak:"TDV: doksanuc-harbi · ayastefanos-antlasmasi" },

// ── 14 · 0050/H-0003 — I. Mustafa'nın hal'i ve kızlarağası rivayeti ─────────
{ id:"tartisma-i-mustafa-kizlaragasi-rivayeti", tur:"tartisma",
  baslik:"Kızlarağası'nın rolü — ve on beş yıllık bir sessizlik",
  kisa:"TDV bir isim veriyor ama bir hikâye vermiyor: halk arasında anlatılan 'kızlarağası onu odaya kilitledi' anlatısı kaynakta yok.",
  metin:"I. Mustafa, II. Osman'ın 1622'de öldürülmesinin ardından ikinci kez tahta çıkmış, ama akli dengesizliği yüzünden yalnız bir yıl kadar sonra 10 Eylül 1623'te ikinci ve son kez tahttan indirilmişti (yerine IV. Murad geçti). TDV İslâm Ansiklopedisi bu hal' kararında Kızlar Ağası Mustafa Ağa'nın etkili olduğunu belirtir — yani karar sarayın en üst düzey iç hizmet görevlisinin de içinde olduğu bir mutabakatla alındı. Ama TDV'nin kaydı burada durur: kızlarağasının Mustafa'yı bizzat bir odaya kilitlediğine, ya da halk arasında anlatılan başka bir sahneye dair bir ayrıntı YOK.\n\nHal'den ölümüne kadar geçen on beş yıl (1623-1639) hakkında TDV'nin kendi ifadesi çarpıcı bir biçimde açık: bu döneme dair 'herhangi bir bilgi bulunmamaktadır.' Yani I. Mustafa, imparatorluğun ortasında, kapalı bir odada, tarihin hiç kaydetmediği on beş yıl geçirdi. 20 Ocak 1639'da (15 Ramazan 1048) öldüğünde kaynaklar ikiye ayrılır: bir kısmı doğal ölüm der, bir kısmı IV. Murad'ın parmağı olduğunu ileri sürer — TDV ikisini de 'iddia edilir/ileri sürülür' diye aktarır, birini seçmez.",
  bag:"Bu kart, 'kızlarağasının rolünü ilginç bir olay olarak anlatalım' türü bir merak isteğine karşı DÜRÜST bir sınır koyuyor: kaynakta VAR olan (kızlarağasının hal' kararındaki etkisi) ile HALK ARASINDA anlatılan ama TDV'de bulunmayan (bir odaya kilitleme sahnesi) birbirinden ayrıldı. İkincisi kartta YAZILMADI — D107'nin 'bulunamadı' damgası burada tam yerinde.",
  not:"Ölüm sebebi (doğal/cinayet) TARTIŞMALI; hal' kararında kızlarağasının etkisi KESİN; on beş yıllık boşluk döneminin içeriği kaynakta YOK.",
  kesinlik:"tartismali",
  olay:["1623-09-10","1639-01-20"],
  kaynak:"TDV: mustafa-i" },

// ── 15 · 0050/H-0008 — Varvar Ali Paşa isyanı ───────────────────────────────
{ id:"magazin-varvar-ali-pasa-isyani-1647", tur:"magazin",
  baslik:"Reddedilen bir emir, bir yıl süren bir isyana dönüştü",
  kisa:"Bir beylerbeyi, başka bir paşanın karısını padişaha götürmeyi reddetti — ve bu ret, Sultan İbrahim döneminin en büyük taşra isyanlarından birinin fitilini ateşledi.",
  metin:"Bosnalı bir devşirme olan Varvar Ali Paşa, 1647'de Sivas beylerbeyiliğine tayin edildi. Aynı yıl, Sultan İbrahim'in emriyle İpşir Mustafa Paşa'nın Sivas'ta bulunan nikâhlı karısı Perihan Hanım'ın İstanbul'a, padişaha takdim edilmek üzere gönderilmesi istendi. Varvar Ali Paşa bu emri geri çevirdi — TDV, reddedişinin kesin sebebini bilmediğini açıkça yazar, ama bu itaatsizliğin isyan sürecinin başlangıcı olduğunu belirtir.\n\nEkim 1647'de kendisinden 30.000 kuruş istenince ödeme imkânı olmadığını bildirdi; merkezle ilişkisi daha da gerildi. Bunun üzerine eyaletteki taşra ileri gelenleriyle birleşip İstanbul'daki yönetimden reformlar talep etti ve etrafına asker topladı — Sultan İbrahim döneminin genel huzursuzluk ortamı, ona geniş bir destek bulacağı umudunu verdi. İsyan yaklaşık bir yıl sürdü. 20 Mayıs 1648'de Çerkeş'te, daha önce karısının verilmesini reddettiği İpşir Mustafa Paşa'nın kuvvetlerince yakalandı; kısa bir muhakemeden sonra idam edildi, kesik başı İstanbul'a gönderildi.",
  not:"Varvar Ali Paşa aynı zamanda şair olarak da anılır. İsyanının Sultan İbrahim'in hal'inden (Ağustos 1648) yalnız üç ay önce bastırılmış olması, döneme özgü genel otorite krizinin bir başka yüzüdür.",
  kesinlik:"kesin",
  olay:["1648-08-08"],
  kaynak:"TDV: varvar-ali-pasa" },

// ── 16 · 0050/H-0008 — 'şişman kadın' anlatısı: BULUNAMADI ──────────────────
{ id:"tartisma-ibrahim-sisman-kadin-arastirmasi", tur:"tartisma",
  baslik:"'Şişman kadın merakı' — akademik/TDV kaynak bulunamadı",
  kisa:"Popüler sitelerde çok anlatılan bir hikâye; TDV'de ve akademik yazında izi bulunamadı.",
  metin:"Halk arasında 'Şivekâr' adıyla bilinen bir haseki hikâyesi, İbrahim'in 'şişman kadın düşkünlüğü'ne dair bir anlatı taşır. TDV `ibrahim--padisah` maddesi böyle bir haseki adı ya da fiziksel özellik tarifi vermiyor, ve anlatı güvenilir bir kaynakla doğrulanamadı; bu yüzden burada anlatılmıyor.\n\nİlgili konu: İbrahim'in çok sayıda haseki edinmesi ve onlara sağladığı gelirler ayrı kartlarda TDV kaynaklı olarak anlatılıyor — 'şişman kadın' anlatısı bu genel temanın popülerleşmiş bir dalı olabilir ama kendi başına doğrulanamadı.",
  not:"Bu kart bir 'sonuç' değil bir 'arama raporu'dur — D107'nin 'bulunamadı' damgası.",
  kesinlik:"tartismali",
  olay:["1644-01-01|Deli İbrahim"],
  kaynak:"aranmadı — yalnız forum/wiki/blog türü sonuçlar bulundu, TDV ve akademik kaynakta YOK" },

// ── 17 · DALGA-0053 H-0001 — Bahçesaray Antlaşması 1681 ─────────────────────
{ id:"sebep-sonuc-bahcesaray-1681", tur:"sebep-sonuc",
  kisa:"Sekiz yıl ve binlerce can pahasına alınan bir kale — antlaşma masaya oturduğunda çoktan değersizleşmişti.",
  sebep:{ b:"Ukrayna'yı Osmanlı himayesinde yöneten Kazak hetmanı Petro Doroşenko'nun Rusya'dan gördüğü askerî ve malî destekle taraf değiştirmesi; bunun üzerine Kara Mustafa Paşa'nın Doroşenko'nun merkezi Çehrin'i kuşatıp 21 Ağustos 1678'de otuz üç günlük muhasaradan sonra alması", t:"1678-08-21" },
  sonuc:{ b:"Bahçesaray (Çehrin) Antlaşması: Özi/Dinyeper nehrinin Osmanlı ile Rusya arasında sınır kabul edilmesi, Kiev'in Rusya'da kalması, yirmi yıllık barış — Osmanlı-Rus ilişkilerinde ilk resmî antlaşma", t:"1681-01-11" },
  bag:"Önemi çift yönlü: ① Bu, iki devlet arasında imzalanan İLK RESMÎ antlaşmadır — 1700 İstanbul ve 1774 Küçük Kaynarca'ya uzanan uzun bir antlaşmalar zincirinin ilk halkası. ② Ama TDV'nin kendi değerlendirmesi acı bir ironi taşıyor: Osmanlı sekiz yıl önce büyük bedelle (binlerce asker, uzun bir kuşatma) aldığı Çehrin'i sekiz yıl elinde tutabildi, sonra Rusya geri aldı — yani bütün seferin nihai toprak kazancı KALICI OLMADI. Sefer, dönemin en pahalı ama en 'sonuçsuz' harekâtlarından biri sayılabilir.",
  metin:"Ukrayna'nın sağ yakasını (Dinyeper'in batısını) Osmanlı himayesinde yöneten Kazak hetmanı Petro Doroşenko, Rusya'dan askerî ve malî destek görünce taraf değiştirdi; bu, Osmanlı hükümetini askerî müdahaleye zorladı. Sadrazam Kara Mustafa Paşa'nın yönettiği kuşatma 21 Temmuz 1678'de başladı; yaklaşık 6000 Rus, Kazak ve Alman askerinin savunduğu Çehrin kalesi otuz üç günlük şiddetli muharebelerden sonra 21 Ağustos 1678'de düştü. Ama zafer kalıcı bir barışa dönüşmedi: görüşmeler ancak 1681'de Bahçesaray'da sonuçlandı. Antlaşmayla Özi (Dinyeper) nehri iki devlet arasında sınır kabul edildi, nehir ile Güney Bug arasına yeni yerleşim kurulmayacağı garanti edildi, Kırım hanlarına yıllık haraç ödenmesi ve bölgede tahkimat yapılmaması kararlaştırıldı, Kiev Rusya'da kalmaya devam etti ve yirmi yıllık bir mütareke/barış ilan edildi. Sonuçta Osmanlı sekiz yıl önce aldığı Çehrin'i uzun süre elinde tutamadı; TDV bu seferin toprak kazancı açısından 'inconsequential' (sonuçsuz) kaldığını vurgular.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1678-08-21","1681-01-11"],
  kaynak:"TDV: cehrin-seferi · bahcesaray" },

// ── 18 · DALGA-0053 H-0012 — Macaristan'ın fethi ve kaybı: kaç yıl? ─────────
{ id:"tartisma-macaristan-fetih-kayip-sureleri", tur:"tartisma",
  baslik:"Kurmak on beş yıl sürdü, yıkmak on altı — ama elde tutmak yüz kırk beş",
  kisa:"Aynı toprak için üç ayrı süre var: fethin tamamlanma süresi, tasarrufun ömrü, çöküşün süresi. Üçü de birbirinden çok farklı.",
  metin:"'Macaristan'ın tümüyle ele geçirilmesi ve Türk hâkimiyetinin kurulması kaç yıl sürdü, elden çıkışı kaç yıl sürdü?' Bu soru iki ayrı süreyi karşılaştırıyor. Üç farklı ölçüm birden gerekiyor, çünkü 'fetih' ve 'hâkimiyet' aynı şey değil.\n\n① FETHİN TAMAMLANMASI — 15 yıl: Kanûnî 29 Ağustos 1526'da Mohaç'ta Macar Krallığı ordusunu dağıtıp Budin'i aldı, ama Macaristan'ı doğrudan bir eyalet olarak merkeze bağlamadı; bir süre Zapolya'yı vasal kral olarak tuttu. Ancak 1541'de, Budin'i doğrudan işgal edip beylerbeyilik kurmasıyla 'tam hâkimiyet' resmen tesis edildi. Yani meydan zaferinden idari kuruluşa 15 yıl geçti.\n② TASARRUFUN ÖMRÜ — 145 yıl: TDV'nin kendi ifadesiyle Budin '145 yıl Osmanlı toprağı kaldı' — 1541'den 1686'daki kaybına kadar.\n③ ÇÖKÜŞÜN SÜRESİ — 16 yıl (ya da bakışa göre 3 yıl): Eğer çöküşün başlangıcını 1683 Viyana bozgunu, bitişini 1699 Karlofça Antlaşması (bütün Macaristan'ın resmen Avusturya'ya bırakılması) sayarsak 16 yıl. Ama asıl ÇÖZÜLME çok daha hızlı oldu: Estergon 1683'te, Peçuy ve Budin 1686'da, İkinci Mohaç bozgunuyla Eğri ve Erdel de dahil geniş bir bölge 1687'de, Belgrad 1688'de kaybedildi — yani Macaristan'ın FİİLÎ kontrolü Viyana'dan sonra yalnız 3-4 yıl içinde çöktü, kalan yıllar (1688-1699) zaten kaybedilmiş toprakların hukuken teslim edilmesiydi.",
  bag:"Asimetrinin sebebi tek bir şey değil: ① Kurmak (1526-1541) tedrîcî bir süreçti — önce vasal krallık, sonra doğrudan idare; oysa çöküş (1683-1687) BİRDEN ÇOK cephenin (Kutsal İttifak: Avusturya, Lehistan, Venedik, sonradan Rusya) AYNI ANDA saldırmasıyla geldi. ② 1683 Viyana'daki başarısızlık, kuşatmaya sokulan devasa insan/malzeme/mali kaynağın (100.000'i aşkın asker, sayısız top) BİRDEN kaybedilmesi anlamına geldi — ordu bir daha aynı gücü toparlayamadı. ③ Kale ağı bir ZİNCİR gibi çalışıyordu: bir kale düşünce komşusunun ikmal yolu kesiliyor, moral çöküyor, bir sonraki kale de daha kolay düşüyordu (bkz. `tartisma-macaristan-kale-kayiplari-ordu-1683-1699`, aynı dosya).",
  not:"'145 yıl' rakamı TDV budin maddesinin kendi ifadesidir. Fetih ile idari kuruluş arasındaki 15 yıllık fark ve çöküşün fiilî 3-4 yıllık çekirdeği bu kartın kendi hesaplamasıdır (1526→1541 = 15; 1683→1687 = 4).",
  kesinlik:"tartismali",
  olay:["1526-08-29","1686-09-02","1687-08-12"],
  kaynak:"TDV: budin · mohac-muharebesi" },

// ── 19 · DALGA-0053 H-0016 — Kaleler tek tek düşerken ordu ne yapıyordu? ────
{ id:"tartisma-macaristan-kale-kayiplari-ordu-1683-1699", tur:"tartisma",
  baslik:"Ordu 'yetersiz' değildi — tükenmişti, ve tükenmenin dört ayrı yüzü vardı",
  kisa:"Aynı asker, aynı cesaret — ama artık aynı devlet değildi. Kaleler tek tek düşerken ordunun sorunu savaşmamak değil, savaşamamaktı.",
  metin:"Kaleler teker teker Avusturya eline geçerken Osmanlı ordusu ne yapıyordu, yetersiz miydi? Ölçülebilen dört ayrı mekanizma var, ve hiçbiri 'askerler korkaktı' gibi basit bir açıklama değil:\n\n① KAYNAK TÜKENMESİ — 1683 Viyana kuşatmasına 100.000'i aşkın asker, sayısız top ve devasa erzak/malzeme yığını sokuldu; bu tek seferlik, olağanüstü bir seferberlikti. Bozgunla bu gücün BÜYÜK KISMI (topçu, malzeme, moral) bir çırpıda kayboldu ve devlet bunu aynı ölçekte bir daha toparlayamadı.\n② ZİNCİRLEME KALE KAYBI — kaleler birbirini besliyordu: Estergon 1683'te düşünce Budin'in kuzey ikmal hattı zayıfladı; Budin 2 Eylül 1686'da (13 Şevval 1097, TDV budin) düşünce güneydeki Peçuy ve Segedin savunmasız kaldı (ikisi de Ekim 1686'da kaybedildi); İkinci Mohaç bozgunuyla (12 Ağustos 1687) Erdel de dahil geniş bir bölge birden açıldı. Bir kale düştükçe komşusunun direnme şansı azaldı — bu bir 'ordu yetersizliği' değil bir AĞ ÇÖKÜŞÜ mantığıdır.\n③ KUMANDA VE DİSİPLİN KRİZİ — 1687'de Sarı Süleyman Paşa'nın ordusu, aylardır ulûfe alamayan asker arasında iyice geriliyordu; Mohaç bozgunundan sonra ordu bizzat sadrazamına karşı isyan etti (2 Eylül 1687), sancağı ve mührü zorla aldı, kendi serdarını (Siyavuş Paşa) atadı. Yani sorun yalnız cephede değil, ORDUNUN KENDİ İÇİNDEYDİ.\n④ ÇOK CEPHELİLİK — Kutsal İttifak aynı anda birden çok yönden geliyordu (Avusturya kuzeyden, Venedik Mora ve Dalmaçya'dan, sonradan Rusya Karadeniz'in kuzeyinden); Osmanlı'nın sınırlı kaynağı tek bir cepheye yoğunlaştırılamadı.",
  bag:"Akademik literatür (bkz. kaynak) bu çöküşü 'askerin cesaretsizliği' değil 'sosyal örgütlenme ve siyasi liderlik' sorunu olarak okur — subay eksikliği ve geleneksel askerî sınıfın (yeniçeri/sipahi) yenilikçi reform girişimlerine direnci, 1683 sonrası dönemi özellikle vurmuştur. Bu, Osmanlı-Avrupa savaş tarzı karşılaştırmasıyla aynı ailededir.",
  not:"Sarı Süleyman Paşa'nın kendisi bu çöküşün hem faili hem kurbanı oldu: azledilip 14 Ekim 1687'de idam edildi.",
  kesinlik:"tartismali",
  olay:["1686-09-02","1687-08-12"],
  kaynak:"TDV: budin · suleyman-pasa-sari" },

// ── 20 · DALGA-0053 H-0017 — İkinci Mohaç: aynı ova, ters sonuç ─────────────
{ id:"tartisma-ikinci-mohac-1687-ayni-ova-ters-sonuc", tur:"tartisma",
  baslik:"Aynı ova, 161 yıl arayla iki taban tabana zıt sonuç",
  kisa:"1526'da bir krallığı yerle bir eden Osmanlı ordusu, 1687'de aynı toprakta kendi sadrazamına karşı isyan etti.",
  metin:"Kanûnî zamanında zafer olan Mohaç ovası, 1687'de neden bozguna döndü? TDV'nin `mohac-muharebesi` maddesi yalnız 1526'yı anlatıyor (1687'ye hiç değinmiyor — bu, farklı bir savaş için AYRI kaynak taraması gerektirdi); 1687'nin ayrıntıları `suleyman-pasa-sari` maddesinden geliyor.\n\n1526'DA NEDEN ZAFER: Kanûnî'nin ordusu (yaklaşık 80.000) düzenli, tecrübeli ve merkezî kumandalıydı; disiplinli bir savunma hattı (toplar zincirle bağlı) kurdu ve sabırsızlanıp erken saldıran daha küçük, dağınık bir Macar ordusunu (20-50 bin) bu hazır düzene çekip dağıttı.\n\n1687'DE NEDEN BOZGUN (12 Ağustos 1687, Harsány/Nagyharsány, atlasta 'İkinci Mohaç'): Sadrazam Sarı Süleyman Paşa'nın ordusu bir yıl önce Budin'i (2 Eylül 1686) kaybetmiş, moral ve malzeme bakımından çökmüş bir orduydu. Dräva nehrini geçip Lorraine Dükü Charles komutasındaki Kutsal İttifak kuvvetlerini takip ederken Çatalköprü civarında ağır bir yenilgiye uğradı — kayıplar 10.000 ölü, 8.000 yaralı, 2.000 esir, 78 top, 56 sancak olarak aktarılır (TDV dışı, ikincil literatür). Yenilgi kalıcı bir felaket zincirine dönüştü: Erdel bu bozgunla Osmanlı bağını fiilen kaybetti, ve daha da vahimi, ORDUNUN KENDİSİ 2 Eylül 1687'de sadrazamına karşı isyan etti — aylardır ödenmeyen ulûfe ve Eğri'ye yardım yükü bardağı taşırdı, askerler sancağı ve mührü zorla aldı.\n\nAynı ova, 161 yıl arayla iki taban tabana zıt sonuç verdi çünkü değişen coğrafya değil, İKİ ORDUNUN GÖRECELİ DURUMUYDU: 1526'da taze, düzenli ve tek cepheli bir Osmanlı ordusu dağınık bir rakiple karşılaştı; 1687'de tükenmiş, moralsiz ve çok cepheli baskı altındaki bir Osmanlı ordusu, taze ve koordineli bir Kutsal İttifak kuvvetiyle karşılaştı.",
  bag:"Bu kart `savas-mohac-1526` (aynı havuz, `ekokuma_savas.js`) kartıyla birlikte okunmalı — ikisi aynı coğrafyanın iki ucunu, kuruluşu ve çöküşü gösteriyor. Ayrıca bkz. `tartisma-macaristan-kale-kayiplari-ordu-1683-1699` (aynı dosya): bu bozgun, o kartın anlattığı 'zincirleme kale kaybı ve kumanda krizi' mekanizmasının en dramatik tek sahnesidir.",
  not:"Kayıp rakamları (10.000 ölü vb.) TDV'nin okunan maddelerinde YOK — yalnız ikincil literatürden aktarıldı, ayrıca işaretlendi.",
  kesinlik:"tartismali",
  olay:["1526-08-29","1686-09-02","1687-08-12"],
  kaynak:"TDV: mohac-muharebesi · suleyman-pasa-sari (1526 ve genel bağlam) · ikincil literatür (kayıp rakamları için, TDV'de yok)" },

// ── 21 · DALGA-0054 H-0004 — Salankamen bozgunu 1691 ────────────────────────
{ id:"savas-salankamen-1691", tur:"savas-hikayesi",
  baslik:"Salankamen Muharebesi (19 Ağustos 1691)",
  kisa:"Reformcu bir sadrazam cepheye bizzat daldı, bir kurşunla düştü — ve cesedi bir daha hiç bulunamadı.",
  tarih_metin:"19 Ağustos 1691 öğleden sonra",
  yer:"Salankamen (Slankamen), Belgrad'ın kuzeybatısı, Varadin ile Karlofça arasında, Tuna kıyısında",
  taraflar:[
    { ad:"Osmanlı Devleti", komutan:"Sadrazam ve serdar-ı ekrem Köprülüzâde Fâzıl Mustafa Paşa", kuvvet:"kaynakta toplam sayı verilmiyor; Kırım kuvvetlerinin katılımı beklenip gelmedi" },
    { ad:"Kutsal İttifak (Avusturya)", komutan:"Baden Prensi Ludwig Wilhelm", kuvvet:"kaynakta toplam sayı verilmiyor" }
  ],
  oncesi:"Fâzıl Mustafa Paşa, 1683 Viyana bozgunundan sonraki en yetenekli sadrazamlardan sayılır: idarî, malî ve askerî ıslahatlar yaptı, 19 Ağustos 1690'da (tam bir yıl önce) Belgrad'ı ve Niş'i geri aldı. 1691 seferinde Salankamen mevkiinde ordugâh kurup Kırım kuvvetlerinin katılmasını bekliyordu. Baden Prensi Ludwig, Osmanlı ordusunun Kırım takviyesinden yoksun olduğunu ve Varadin'e giden yolun kapalı olduğunu öğrenince, kendi ordusunun ikmal sıkıntısına rağmen beklemeden saldırı kararı aldı.",
  akis:"Öğleden sonra başlayan çarpışmada Avusturya kuvvetleri merkeze saldırdı. Fâzıl Mustafa Paşa, askerini cesaretlendirmek için bizzat ön saflara ilerlerken bir kurşunla vuruldu. Sadrazamın düşmesiyle ordu dağılmaya, geri çekilmeye başladı; Osmanlı ordugâhı ve ağırlıkları Avusturya eline geçti.",
  sonuc:"Fâzıl Mustafa Paşa'nın cesedi kapsamlı aramalara rağmen bir daha bulunamadı. Onun ölümüyle 1683 sonrası toparlanma çabasının en güçlü ismi kayboldu; bozgun, savaşın gidişini yeniden Osmanlı aleyhine çevirdi ve altı yıl sonraki Zenta felaketine (1697) giden çöküşün önemli bir halkası oldu.",
  tartisma:"Kaynakta çarpışmanın ayrıntılı safhaları (birlik hareketleri, saat saat gidişat) yok; anlatı ağırlıklı olarak Fâzıl Mustafa Paşa'nın ölüm anına ve sonrasındaki dağılmaya odaklanıyor.",
  kesinlik:"kesin",
  olay:["1691-08-19"],
  kaynak:"TDV: kopruluzade-fazil-mustafa-pasa",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 22 · DALGA-0054 H-0016 — Zenta bozgunu 1697 ─────────────────────────────
{ id:"savas-zenta-1697", tur:"savas-hikayesi",
  baslik:"Zenta Muharebesi (11 Eylül 1697)",
  kisa:"Ordu bir nehri ikiye bölünmüş hâlde geçerken yakalandı — sadrazam, kendi kestirdiği köprünün başında kılıcıyla dururken öldü.",
  tarih_metin:"11 Eylül 1697",
  yer:"Zenta (Senta), Tisa (Tisza) nehri kıyısı",
  taraflar:[
    { ad:"Osmanlı Devleti", komutan:"Sadrazam ve serdar-ı ekrem Elmas Mehmed Paşa · II. Mustafa (ordunun başında)", kuvvet:"kaynakta toplam sayı verilmiyor" },
    { ad:"Kutsal Roma İmparatorluğu (Avusturya)", komutan:"Prens Eugen (Savoyalı)", kuvvet:"kaynakta toplam sayı verilmiyor" }
  ],
  oncesi:"1695'ten beri sadrazam olan Elmas Mehmed Paşa'nın komuta ettiği ordu, Tisa nehrini geçerek harekâtına devam etmek istiyordu. Prens Eugen, Osmanlı ordusunun sefer planını öğrenmişti ve tam nehri geçiş anında baskın yapmaya hazırlandı.",
  akis:"11 Eylül 1697'de, Padişah II. Mustafa ve ordunun bir kısmı Tisa'nın karşı kıyısına geçmişken, Elmas Mehmed Paşa, yeniçeriler ve geri kalan birlikler henüz nehrin bu yakasındaydı. Prens Eugen tam bu anda, ordu ikiye bölünmüşken saldırıya geçti. Elmas Mehmed Paşa, geçişi durdurmak ve düzeni korumak için köprünün iki gözünü kaldırttıktan sonra kılıcı elinde köprü başında durdu; kısa süre içinde muhtemelen kendi askerince (panik içindeki kalabalığın çiğnemesiyle ya da doğrudan) öldürüldü.",
  sonuc:"Birkaç saat içinde ordunun önemli bir kısmı dağıldı; çok sayıda asker Tisa'nın sularında boğuldu, sadrazam Elmas Mehmed Paşa hayatını kaybetti. Avusturya kuvvetleri Osmanlı ordugâhındaki topları, sancakları ve büyük miktarda mühimmatı ele geçirdi. Zenta, Osmanlı-Kutsal İttifak savaşının (1683-1699) kaderini fiilen belirleyen son büyük meydan muharebesiydi; bu yenilginin ardından Osmanlı tarafı barışa razı oldu ve iki yıl sonra Karlofça'da masaya oturuldu.",
  tartisma:"Kaynaklar Elmas Mehmed Paşa'nın tam olarak nasıl öldüğü konusunda kesin değil — 'muhtemelen' ifadesiyle aktarılıyor; kendi askerince mi yoksa düşman ateşiyle mi öldüğü net değil.",
  kesinlik:"kesin",
  olay:["1697-09-11"],
  kaynak:"TDV: elmas-mehmed-pasa (aktarım) · genel Osmanlı-Avusturya savaş tarihi",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 23 · DALGA-0054 H-0017 — Orduların nehir geçişindeki risk ───────────────
{ id:"tartisma-ordularin-nehir-gecisi-riski", tur:"tartisma",
  baslik:"Bir ordunun en savunmasız anı: nehrin ortasında, ikiye bölünmüşken",
  kisa:"Zenta'da ordu ikiye bölünmüşken yakalandı, Prut'ta yakalayan taraf pes etti. Aynı zafiyet, iki taraflı bir kumar.",
  metin:"Bu, askerî tarihte gerçek ve tekrarlayan bir zafiyete işaret ediyor: bir nehri geçmekte olan ordu, geçişin ortasında EN SAVUNMASIZ anını yaşar — birlik ikiye bölünmüştür, düzenli saf tutamaz, geri çekilme yolu (köprü ya da geçit) TEK ve DAR bir noktaya sıkışmıştır. Bu atlasın kendi kronolojisinde iki karşıt örnek var:\n\n① ZENTA (11 Eylül 1697) — TAM BU ZAAFIN KURBANI: Padişah II. Mustafa ve ordunun bir kısmı Tisa'nın karşı kıyısına geçmiş, sadrazam Elmas Mehmed Paşa ile yeniçeriler henüz öteki yakadaydı. Prens Eugen tam bu anı, ordu ikiye bölünmüşken saldırdı. Sadrazam köprünün gözlerini kaldırtıp geçişi durdurmaya çalıştıysa da düzen çöktü, çok sayıda asker panikle nehre atlayıp boğuldu. Bu, savaşın kaderini belirleyen tek muharebe oldu (bkz. Zenta Muharebesi kartı).\n② PRUT (1711) — AYNI ZAAF, TERS SONUÇ: Baltacı Mehmed Paşa'nın kuşattığı Rus ordusu da Prut nehri kıyısında, erzaksız ve çaresiz durumdaydı — yani kuşatan taraf (Osmanlı) burada nehir kıyısındaki mahsur kalmış düşmanın zaafından yararlanma FIRSATINI yakaladı, ama imha etmek yerine barış yaptı (bkz. Prut kartı). Yani aynı coğrafi zaaf (nehir kıyısında sıkışmışlık), bir tarafta YIKICI bir yenilgiye (Zenta), öteki tarafta KAÇIRILMIŞ bir fırsata (Prut) dönüştü.\n\nBu ikisinin karşılaştırması genel bir askerî tarih ilkesini doğruluyor: nehir geçişleri tarih boyunca pusu ve baskın için klasik bir fırsat penceresi sayılmıştır, çünkü saldıran taraf düşmanı en örgütsüz ve en dar bir cepheye sıkışmış hâlde yakalar.",
  bag:"Bu kart bir 'olay' değil bir DESEN kartıdır — atlasın kendi iki kaydını (Zenta ve Prut) yan yana koyarak, tek bir askerî zafiyetin iki farklı sonucunu gösteriyor. `arac/uret_petek.py`'nin motor seviyesinde geliştirdiği 'nehir sürtünmesi' (geçiş bedeli) modellemesi de aynı coğrafi gerçekliğin haritacılık tarafıdır — o motor kararı ayrı bir oturumun (MOTOR) konusu, burada yalnız tarihsel örnek olarak anılıyor.",
  not:"Prens Eugen'in Zenta'daki zaferinin 'sefer planını öğrenmiş olması'na dayandığı bazı kaynaklarda geçer; bu istihbarat iddiası TDV'nin okunan maddesinde ayrıca doğrulanmadı.",
  kesinlik:"tartismali",
  olay:["1697-09-11","1711-07-21|Azak ve Taygan"],
  kaynak:"TDV: elmas-mehmed-pasa · prut-antlasmasi (Prut örneği için)" },

// ── 24 · DALGA-0054 H-0019 — Karlofça'nın diplomatik yeniliği ───────────────
{ id:"teknik-karlofca-yuvarlak-masa-protokolu", tur:"teknik-bilimsel",
  kisa:"Kaybeden taraf bu kez masaya oturuyordu — ve tarihte ilk kez, oturma düzeni bile 'kim üstün' sorusunu sormasın diye tasarlandı.",
  metin:"Savaşın sebep-sonucu ve antlaşmanın hükümleri zaten başka bir kartta anlatılıyor; bu kart onu tekrarlamıyor, yalnız görüşmelerin kendisini — yani bir barış konferansının nasıl fiziksel ve protokol olarak kurulduğunu — ayrı bir açıdan anlatıyor.\n\nTDV `karlofca` maddesine göre Osmanlı heyeti başkanı Reîsülküttâb Râmi Mehmed Efendi, görüşmelerin yapılacağı büyük çadırın kurulumunu ve döşenmesini bizzat denetledi. Çadırın DÖRT AYRI KAPISI vardı — Osmanlı, müttefik (Avusturya-Venedik-Lehistan), arabulucu (İngiltere-Hollanda) ve ayrıca Rusya heyeti için — ve TARAFLAR AYNI ANDA, HİÇBİRİNE ÖNCELİK TANINMADAN farklı kapılardan içeri girdi. Bu düzenleme, barış müzakereleri tarihinde protokol eşitliğini fiziksel mimariyle çözen ilk örneklerden biri sayılır: hangi tarafın 'önce' girdiği, kimin kime 'boyun eğdiği' izlenimi vermeyecek bir tasarımdı.\n\nGörüşmelerin kendisi de sıradan değildi: 13 Kasım 1698'de başlayıp yetmiş iki gün süren müzakereler otuz altı ayrı oturumda yürütüldü; yalnız protokol tartışmaları (kimin nereye oturacağı, hangi unvanın kullanılacağı gibi) ilk yirmi günü tüketti. TDV'nin aktardığı bir ayrıntı: Avusturya delegesi ve aynı zamanda bilim insanı olan Marsigli, Hıristiyan delegelerin müzakerelerde zaman zaman acınacak duruma düştüğünü yazmıştır — oysa savaşı KAYBEDEN taraf Osmanlı'ydı. TDV, yenilmiş konumdaki Osmanlı heyetinin buna rağmen 'güçlü ve vakur bir tavır', sabır ve ikna kabiliyeti sergilediğini vurgular.",
  kesinlik:"kesin",
  olay:["1698-11-13","1699-01-26"],
  kaynak:"TDV: karlofca" },

// ── 25 · DALGA-0055 H-0008 (özel) — Tunus'ta 1705: yeni hanedan mı, güç boşluğunun dolması mı? ──
{ id:"sebep-sonuc-tunus-huseyniler-1705", tur:"sebep-sonuc",
  kisa:"İstanbul'dan atanan vali Tunus'u hiç yönetmiyordu — 1705'te değişen hanedandı, yönetim biçimi değil.",
  sebep:{ b:"1613'ten beri Tunus'u fiilen yöneten yerel Murâdî hanedanının 1702'de komutan İbrahim Şerif tarafından yıkılması (son Murâdî beyi III. Murad öldürüldü) ve İbrahim Şerif'in birkaç yıl sonra Cezayir beylerbeyinin istilâsıyla esir düşmesi", t:"1702-01-01" },
  sonuc:{ b:"12 Temmuz 1705'te ileri gelenler ve ocak ağalarından oluşan divanın Muhammed Hoca'yı dayı, Hüseyin'i bey seçmesi; Hüseyin Bey'in aynı yıl Cezayir saldırısını püskürtüp Muhammed Hoca'yı ve İbrahim Şerif'i öldürterek tek başına iktidarı ele geçirmesi", t:"1705-07-17" },
  bag:"'Tunus'ta daha önce Osmanlı'nın atadığı valiler etkili değil miydi?' sorusunun cevabı burada: 1705'ten ÇOK ÖNCE değillerdi. Tunus 1574'te Osmanlı'ya katılıp `sâlyâneli eyalet` sistemine girdiğinden (bkz. Garp Ocakları statü kartı) beri, gerçek yürütme gücü zaten yerel askerî-idarî makamlardaydı — önce dayılar, sonra (1613'ten itibaren) Murâdî beyleri hânedanı. 1705'te DEĞİŞEN şey 'yerel özerklik başladı' değil, 'hangi yerel hanedanın özerkliği elinde tuttuğu'ydu (Murâdîler'den Hüseynîler'e). İstanbul'un rolü hiçbir zaman fiilen valiler atayıp yönetmek değildi — hutbenin padişah adına okunması, sikkenin (parası) onun adına basılması ve düzenli fermanlarla biatın periyodik olarak tazelenmesiyle sınırlı sembolik bir üst egemenlikti; vergi miktarı bile İstanbul'la PAZARLIK konusuydu.",
  metin:"Tunus, Osmanlı'ya 1574'te katıldığında doğrudan bir eyalet gibi merkezden yönetilmedi; 1609 tarihli Ayn Ali Efendi listesinde Cezayir ve Trablusgarp gibi 'sâlyâneli' (vergisi hazineye toplu gönderilen) bir eyalet sayıldı ve pratikte 'ocak' denen yerel askerî-idarî bir yapıya bırakıldı. 1613'ten itibaren Murâdî ailesi 'bey' unvanıyla Tunus'u fiilen yönetti — bu, İstanbul'dan gönderilen bir vali değil, YEREL VE KALITSAL bir otoriteydi. Murâdîler seksen üç yıl (yedi bey) sürdü, ama 1702'de bir komutan olan İbrahim Şerif son Murâdî beyi III. Murad'ı öldürüp dayı, bey ve paşa unvanlarını kendinde topladı. İbrahim Şerif'in iktidarı da uzun sürmedi: Cezayir beylerbeyinin desteğiyle birkaç yıl hüküm sürdükten sonra yine Cezayir'in Tunus'u istilâ etmesiyle esir düştü. Bu güç boşluğunda, 12 Temmuz 1705'te ileri gelenler ve ocak ağalarından oluşan divan (emâret meclisi) Muhammed Hoca'yı dayı, Hüseyin'i de bey seçti. Hüseyin Bey aynı yıl içinde bir Cezayir saldırısını püskürttü, ardından ortaklarını (Muhammed Hoca ve serbest kalan İbrahim Şerif'i) öldürtüp Tunus'un idaresini tek başına ele geçirdi — Hüseynîler hânedanı böyle doğdu ve 1957'ye, cumhuriyetin ilanına kadar sürdü.",
  kesinlik:"kesin",
  zincir:["statu-garp-ocaklari-cezayir"],
  olay:["1705-07-17"],
  kaynak:"TDV: huseyniler · huseyin-pasa-tunus-beyi (aktarım) · statu-garp-ocaklari-cezayir kartının TDV kaynakları (eyalet, garp-ocaklari, cezayir)" },

// ── 26 · DALGA-0055 H-0008 (genel) — Doğu Afrika eyaletleri: Mısır, Sudan, Habeş ──
{ id:"teknik-dogu-afrika-eyaletleri-idari-yapi", tur:"teknik-bilimsel",
  kisa:"Kuzey Afrika'da 'ocak' yönetiyordu, Doğu Afrika'da başka bir sorun vardı: sınırın KENDİSİ hiç net değildi.",
  metin:"`statu-garp-ocaklari-cezayir` kartı Kuzey Afrika'yı (Cezayir, Tunus, Trablusgarp) anlatıyor — bu kart onun DOĞUYA doğru devamı: Mısır, Sudan ve Habeş (bugünkü Sudan-Eritre-Cibuti-Somali kıyı şeridi). Üçü de kendine özgü bir 'yarı kontrol' biçimi geliştirdi, ama üç ayrı mekanizmayla.\n\n■ MISIR — DENGE SİSTEMİ, SONRA DENGESİZLİK. 1517'de fethedildikten sonra Kanûnî'nin sadrazamı Makbul İbrâhim Paşa'nın hazırladığı Mısır Kanunnâmesi, gücü ÜÇ unsur arasında dengeledi: beylerbeyi (İstanbul'un valisi), kölemen/Memlük beyleri (fetihte dokunulmayan eski yönetici sınıf) ve yeniçeri ocağı. Beylerbeyi başta görünse de tek başına hareket edemezdi. XVII. yüzyıldan itibaren denge bozuldu: Memlük beyleri taşra kâşifliklerini (vergi tahsildarlığı) iltizamla ele geçirip kendi adamlarını askerî gruplara soktu; Kāsımiyye ve Zülfikāriyye fırkaları arasındaki mücadeleyi XVIII. yüzyılda Kazdağlı fırkası kazandı. Sonunda Memlük beyleri arasından seçilen 'şeyhülbeled' (örneğin İsmâil Bey — bizzat Mısır beylerbeyi tarafından bu unvanla giydirilerek) fiilî iktidar sahibi oldu; beylerbeyinin otoritesi büyük ölçüde sembolikleşti.\n\n■ SUDAN — OSMANLI YALNIZ KIYIYI TUTTU, İÇERİYE HİÇ GİRMEDİ. Bugünkü Sudan'ın Kızıldeniz kıyısı (Sevakin, sonra Sevakin'e bağlı bir sancak) Habeş Eyaleti'ne katıldı, ama Mavi ve Beyaz Nil arasındaki, merkezi Sinnar olan FÜNC SULTANLIĞI hiçbir zaman Osmanlı denetimine girmedi — TAMAMEN BAĞIMSIZ bir devlet olarak XIX. yüzyıla (1820, Kavalalı Mehmed Ali'nin Mısır üzerinden ilhakına) kadar ayakta kaldı. Yani 'Osmanlı Sudan'ı yönetti' demek yanlış: Osmanlı yalnız kıyı şeridinde bir sancak tuttu, ülkenin coğrafi ağırlık merkezi hiç eline geçmedi.\n\n■ HABEŞ EYALETİ — FETİH DEĞİL, KIYI ÜSSÜ. 1555'te (bazı kaynaklara göre 1557 — atlas bu ikinci tarihi kullanıyor) Özdemir Paşa'nın kurduğu Habeş Eyaleti, Mısır sınırından Mombasa'ya kadar Kızıldeniz kıyısını KAĞITTA kapsıyordu, ama Hıristiyan Habeş Krallığı'nın kendisi HİÇBİR ZAMAN fethedilmedi. Sevâkin (ilk merkez), 1557'de alınan Masavva ve 1559'da eklenen Debarva/Zeyla birer kıyı kalesiydi; Özdemir Paşa'nın içeriye ilerleme girişimi iklim koşulları yüzünden geri çekilmeyle sonuçlandı, ardılı Osman Paşa da Habeş Kralı Minas'ın direnişiyle karşılaştı. 1579'daki Addi Karro yenilgisinden sonra eyalet sürekli küçüldü; XVII. yüzyılda etkisi tamamen kıyı şeridine indi ve 1701'de Medine'den bir vekille yönetilir hâle gelip bağımsız bir eyalet olmaktan fiilen çıktı.\n\nÜÇÜNÜN ORTAK DERSİ: 'Osmanlı toprağı' olarak boyanan bir alan, üç FARKLI gerçekliği gizleyebilir — Mısır'da güç yerli bir sınıfa (Memlükler) kaymıştı, Sudan'da ülkenin büyük kısmı hiç girilmemiş bağımsız bir sultanlıktı, Habeş'te ise kontrol hiçbir zaman kıyı kalelerinin ötesine geçmedi.",
  kesinlik:"kesin",
  zincir:["statu-garp-ocaklari-cezayir"],
  olay:["1517-01-22|Ridaniye","1557-01-01","1559-01-01"],
  kaynak:"TDV: misir · sudan · habes-eyaleti · eyalet" },

// ── 27 · DALGA-0055 H-0010 — Itrî kimdir ────────────────────────────────────
{ id:"kimdir-itri", tur:"kimdir",
  ad:"Buhûrîzâde Mustafa Itrî Efendi",
  kisa:"Bin eserden söz edilir, kırk kadarı günümüze ulaşır — ama bunlardan biri, yüzyıllardır her bayram sabahı hâlâ okunuyor.",
  metin:"Muhtemelen 1630-1640 dolaylarında İstanbul'da (Yayla mahallesinde) doğdu, asıl adı Mustafa'ydı; 'Itrî' mahlasını babasının tütsü ('ıtır') satıcılığından aldığı söylenir. IV. Mehmed'in (saltanatı 1648-1687) has odasında müzisyen ve hânende olarak görev yaptı, kendi isteğiyle sonradan silahdarlığa yükseldi. Müzik eğitiminde kesin bir hoca zinciri bilinmiyor; Rauf Yektâ Bey'e göre Yenikapı Mevlevîhânesi'ne devam edip neyzenlikte dervişlerden ders almış olabilir, Derviş Ömer ve Koca Osman gibi isimlerle de ilişkilendirilir. Mezarının yeri kesin değil — bir rivayet Yenikapı Mevlevîhânesi yakınını, başka bir rivayet Edirnekapı dışını gösterir.\n\nItrî hemen hemen bütün Türk mûsikisi formlarında eser verdi. En tanınmış yapıtı SEGÂH TEKBİR'idir: serbest ölçülü, dar bir ses aralığında büyük bir anlatım gücüne ulaşan bu beste, kabul görüp bugün hâlâ İslâm dünyasının pek çok yerinde bayram namazlarından önce okunur — üç yüz yılı aşkın bir sürekliliktir. Din dışı repertuvarından NEVÂ KÂR, Hâfız-ı Şîrâzî'nin 'Gülbün-i iyş mîdemed sâkī-i gül'izâr kû?' mısraıyla başlayan Farsça bir şiir üzerine bestelenmiştir ve saz girişi olmadan doğrudan güfteyle başlaması bakımından türünün başyapıtlarından sayılır. Ayrıca Segâh Salât-ı Ümmiyye, Rast Na't ve bir Segâh Mevlevî âyini de önemli eserleri arasındadır. Mehmed Esad Efendi bin eserinden söz etse de, modern araştırmacılar günümüze ulaşan yapıtlarını kırk iki ile kırk dokuz arasında sayar. 1123'te (1711), bazı kaynaklara göre 1124'te (1712) öldü.",
  kesinlik:"tartismali",
  olay:["1711-01-01"],
  kaynak:"TDV: itri-efendi-buhurizade" },

// ── 28 · DALGA-0056 madde 1 — Trablusgarp: valilerden Karamanlılara ────────
{ id:"sebep-sonuc-trablusgarp-karamanlilar-1711", tur:"sebep-sonuc",
  kisa:"Adı 'Karaman'dan geliyor ama hanedanla hiçbir kanıtlanmış bağı yok — ve iktidara bir askerî çekişmenin ortasından, arap desteğiyle geldi.",
  sebep:{ b:"1551'de Turgut Reis'in beylerbeyi olarak kurduğu doğrudan Osmanlı idaresinin zamanla yerini, ocak ağaları (kuloğlu) arasındaki sürekli iktidar çekişmesine bırakması; Münşiye ve Sâhil bölgesi idarecisi süvari zâbiti Ahmed Bey'in 1710'da yeniçeriler, kuloğlular ve arap ileri gelenleri arasındaki bu çatışmaya arap desteğiyle müdahale etmesi", t:"1710-01-01" },
  sonuc:{ b:"Ahmed Bey'in (Karamanlı) 29 Temmuz 1711'de Trablusgarp'ın idaresini fiilen ele geçirmesi ve III. Ahmed'in kendisini beylerbeyi tanıyan bir beratla bu durumu resmîleştirmesi; 1711-1835 arası süren, kendi donanmasını kurup Avrupa devletleriyle doğrudan antlaşma imzalayan yarı bağımsız Karamanlı hanedanının başlaması", t:"1711-07-29" },
  bag:"Tunus kartıyla aynı desenin bir başka örneği: Trablusgarp'ta da 1711'de DEĞİŞEN şey 'özerklik başlangıcı' değil, hangi yerel gücün özerkliği elinde tuttuğuydu. Farkı: Tunus'ta önce KALITSAL bir hanedan (Murâdîler) sonra bir asker (İbrahim Şerif) iktidara geldi; Trablusgarp'ta ise doğrudan Osmanlı valileri (beylerbeyi) döneminden askerî ocak zümresinin (ağalar/dayılar) egemenliğine, oradan da yeni bir askerin (Ahmed Bey) kurduğu kalıtsal hanedana geçildi — üç farklı yönetim biçimi arka arkaya denendi. Bir de İstanbul'un rolü burada da aynı: fiilî iktidar değişimi ÖNCE gerçekleşiyor, İstanbul'un beratı/fermanı SONRADAN bu oldu-bitiyi onaylıyor.",
  metin:"Trablusgarp, 1551'de Sinan Paşa'nın donanmasıyla Malta Şövalyeleri'nden alınıp Turgut Reis ilk beylerbeyi atandığında doğrudan İstanbul'dan gönderilen valilerle yönetiliyordu — bu 'beylerbeyiler dönemi' onlarca yıl sürdü. Zamanla, tıpkı Cezayir'deki (bkz. `statu-garp-ocaklari-cezayir`) örüntüye benzer biçimde, fiilî güç yerel askerî zümreye (ocak, kuloğlu adı verilen yeniçeri kökenli gruplar) kaydı; atanan valiler bu ocak ağalarıyla sürekli çekişme içindeydi, bazen güçlü bir vali ocağın nüfuzunu bir süreliğine kısıtlayabiliyordu. 1710'da, Münşiye ve Sâhil bölgesinin idarecisi olan süvari zâbiti Ahmed Bey, yeniçeriler-kuloğlular ile yerel arap ileri gelenleri arasındaki çatışmaya müdahale etti; arap desteğini kazanarak kuloğlu zümresine karşı üstünlük sağladı ve 29 Temmuz 1711'de Trablusgarp'ın idaresini fiilen ele geçirdi. Sultan III. Ahmed bunu bir beylerbeyilik beratıyla tanıyıp resmîleştirdi. Ahmed Paşa, oğlu Mehmed Paşa ve torunu Yûsuf Paşa eliyle süren Karamanlı hanedanı, kendi donanmasını kurup Avrupa devletleriyle doğrudan antlaşma imzalayacak kadar geniş bir özerklik kazandı; bu düzen ancak 1835'te eyaletin doğrudan merkeze bağlanmasıyla sona erdi.\n\n'KARAMANLI' ADI NEREDEN GELİYOR? TDV, ailenin Anadolu'daki tarihî Karamanoğulları hanedanıyla KANITLANMIŞ bir bağı olmadığını açıkça belirtir — adın kökeni muhtemelen Ahmed Bey'in kendisinin, babasının ya da dedelerinden birinin Trablusgarp ocağında askerlik yapmak üzere Anadolu'nun Karaman bölgesinden gelmiş olmasıdır. Bazı tarihçiler bir Turgut Reis bağlantısı öne sürse de kesin bir soy zinciri kurulamıyor. Yani 'Karamanlı' burada bir HANEDAN ADI değil, bir MEMLEKET KÖKENİ etiketidir.",
  kesinlik:"kesin",
  zincir:["statu-garp-ocaklari-cezayir","sebep-sonuc-tunus-huseyniler-1705"],
  olay:["1711-07-29"],
  kaynak:"TDV: trablusgarp · karamanli",
  ic_not:"17 Eylül 2026: YAMA-RIVAYET-0916.json'daki öneri uygulandı — atlas kaydının t'si 1711-03-01'den TDV'nin verdiği kesin güne (29 Temmuz 1711) çekildi; bu kartın olay bağı güncellendi." },

// ── 29 · DALGA-0064 H-0022 — I. Mahmud 'canlı canlı gömüldü' mü? ────────────
{ id:"tartisma-i-mahmud-diri-gomulme-rivayeti", tur:"tartisma",
  baslik:"'Canlı canlı gömülen padişah' — hikâye gerçekte KİMİN cenazesiydi?",
  kisa:"Rivayet bir Fransız subayının anlattığı isimsiz bir olaydan doğdu — ve zamanla yanlış padişaha yapıştı.",
  metin:"I. Mahmud'un canlı canlı gömüldüğüne dair anlatılanlar gerçek mi rivayet mi? TDV `mahmud-i--osmanli` maddesi ölümü şöyle kaydeder: 27 Safer 1168'de (13 Aralık 1754) cuma namazından dönerken Topkapı Sarayı'nın Demirkapı girişinde vefat etti; Nuruosmaniye'de kendisi için hazırlanan türbeye değil, halefi III. Osman'ın iradesiyle Yeni Cami yanındaki Vâlide Turhan Sultan Türbesi'ne, babası II. Mustafa'nın yanına gömüldü. TDV'nin metninde 'canlı canlı gömülme' rivayetine dair TEK KELİME YOK.\n\nRİVAYETİN GERÇEK KAYNAĞI NEREDE? Hukuk tarihçisi Ekrem Buğra Ekinci'nin bu rivayeti araştıran yazısına göre, hikâyenin kökü Osmanlı sarayında görev yapmış Fransız subayı Baron de Tott'un hatıratına dayanıyor. Baron de Tott anılarında — I. Mahmud'u DEĞİL, III. Osman'ın cenaze törenini anlatırken — Türklerin canlı canlı gömülme ihtimalini hiç dikkate almadan ölüleri hızla defnettiğini, ölü sanılıp gömülen birinin sonradan mezardan bağırdığını aktarır. Yani hikâyenin özgün öznesi belirsiz/isimsiz bir vaka ve bağlamı III. Osman'ın cenazesidir — I. Mahmud'un cenazesi DEĞİL. Ekinci'nin tespiti: bu abartılı Fransız anlatısı zamanla I. Mahmud'a mal edilmiş olabilir, çünkü III. Osman halk hafızasında I. Mahmud kadar tanınmıyordu — daha 'akılda kalıcı' bir padişaha yapıştırılmış bir hikâye.\n\nÖLÜMÜN GERÇEK SÜRECİ NEDİR? Ekinci'nin aktardığına göre I. Mahmud, 1754'te zaten hasta durumda çıktığı bir cuma namazı dönüşünde attan düşüp komaya girdi ve iki yıldır süren bir hastalıktan öldü. Bu ayrıntı (attan düşme, iki yıllık hastalık) TDV'nin okunan metninde YOK — yalnız Ekinci'nin aktarımında var; hangi birincil kaynağa dayandığı doğrulanamadı.",
  bag:"Bu, projenin sıkça karşılaştığı bir örüntünün yeni bir örneği: popüler bir anekdot, ORİJİNAL BAĞLAMINDAN (III. Osman'ın cenazesi, isimsiz bir vaka) koparılıp DAHA ÜNLÜ bir figüre (I. Mahmud) taşınıyor. Kaynağın kendisi (Baron de Tott) de dönemin abartılı/güvenilirliği tartışmalı bir Batılı seyahatname yazarı — hikâye hem YANLIŞ KİŞİYE atfediliyor hem de ZATEN TARTIŞMALI bir kaynağa dayanıyor.",
  not:"'Attan düşüp komaya girme, iki yıllık hastalık' ayrıntısı TDV'de doğrulanamadı; yalnız ikincil bir aktarımda var. 'Canlı canlı gömülme' rivayeti TDV'de YOK ve kaynağı (Baron de Tott) olayı zaten I. Mahmud'a değil III. Osman'ın cenazesine bağlıyor.",
  kesinlik:"tartismali",
  olay:["1754-12-13"],
  kaynak:"TDV: mahmud-i--osmanli · Ekrem Buğra Ekinci, \"Diri Diri Gömülen Padişah Masalı\" (Baron de Tott'un hatıratına dayanan analiz)" },

// ── 30 · DALGA-0065 madde 3 (1/4) — III. Mustafa'nın müneccim merakı ────────
{ id:"tartisma-iii-mustafa-muneccim-merakι", tur:"tartisma",
  baslik:"Bir padişah, uğurlu saat gelmeden hiçbir iş görmezdi",
  kisa:"Sadrazam atarken, oğlunun doğumunu ayarlarken hep aynı soru: yıldızlar ne diyor?",
  metin:"III. Mustafa'nın astrolojiye olan düşkünlüğü sıradan bir merakın çok ötesindeydi. Uğurlu sayılan bir an (eşref saat) beklemeden önemli bir işe girişmezdi; devlet adamlarını görevlendirirken bile onların 'yıldızının yüksek' olduğuna inandığı zamanları gözetti. Prusya Kralı II. Friedrich'ten kendisine bir müneccim göndermesini istemesi, bu ilginin sarayın dışına, Avrupa'ya kadar uzandığını gösterir. En çarpıcı örnek oğlu Şehzade Selim'in (sonradan III. Selim) doğumuyla ilgilidir: Selim'in ileride büyük bir hükümdar ('cihangir') olması için ana rahmine düşme anının uğurlu bir 'kıran vakti'ne denk gelmesini tertiplemeye çalıştı.",
  bag:"Dönemin bazı gözlemcileri bu düşkünlüğü, III. Mustafa'nın kararlarındaki tutarsızlığın bir sebebi olarak görmüştür — yıldız falına dayanan bir zamanlama anlayışının, devlet işlerinde akılcı ve tutarlı bir politikanın önüne geçtiği yorumu yapılmıştır.",
  kesinlik:"kesin",
  olay:["1757-10-30"],
  kaynak:"TDV: mustafa-iii" },

// ── 31 · DALGA-0065 madde 3 (2/4) — III. Mustafa'nın borç senedi ───────────
{ id:"tartisma-iii-mustafa-borc-senedi", tur:"tartisma",
  baslik:"Bir padişah kendi çocuklarından borç aldı — ve borcunu ödemeden öldü",
  kisa:"Savaşı sürdürecek para tükenince, hazineye değil kendi ailesine el açtı; karşılığında imzasını bıraktı.",
  metin:"1768'de başlayan Rus savaşının giderleri hazineyi zorlayınca III. Mustafa, TDV'nin ifadesiyle, oğlu Şehzade Selim ile kızı Şah Sultan'dan borç almak zorunda kaldı. Popüler tarih yazınında bu olay daha ayrıntılı anlatılır: padişahın haseki sultanı Mihrişah'tan (sonradan Selim'in vâlide sultanı) 237 kese 55 kuruş, kızı Şah Sultan'dan 340 kese borç aldığı, karşılığında kendi mührünü taşıyan bir senet verdiği ve bu paranın savaş masraflarına harcandığı aktarılır. Aynı anlatıya göre bu senet Topkapı Sarayı Arşivi'nde günümüze kadar saklanmıştır ve III. Mustafa, savaşın sonucunu göremeden, borcunu ödeyemeden 21 Ocak 1774'te öldü.",
  bag:"TDV'nin okunan maddesi borç alma olgusunu doğruluyor ama senedin arşivde saklandığına ya da kimden ne kadar alındığına dair ayrıntı vermiyor; bu ayrıntılar yalnız popüler tarih yazınında (gazete köşe yazıları) bulunabildi, akademik bir eserle ayrıca doğrulanamadı.",
  not:"Borç verenler TDV'de 'oğlu Selim ile kızı Şah Sultan' diye geçiyor; Mihrişah'ın adı ve kese miktarları yalnız ikincil/popüler kaynaklarda var.",
  kesinlik:"tartismali",
  olay:["1774-01-21"],
  kaynak:"TDV: mustafa-iii (borç alma olgusu) · popüler tarih yazını (senet ayrıntıları, akademik olarak ayrıca doğrulanmadı)" },

// ── 32 · DALGA-0065 madde 3 (3/4) — III. Mustafa'nın Rusya'ya savaş hırsı ──
{ id:"tartisma-iii-mustafa-rusya-savas-hirsi", tur:"tartisma",
  baslik:"Savaşı sadrazam mı istedi, padişah mı?",
  kisa:"Deneyimli sadrazam ihtiyatı öğütlerken, savaşa asıl istekli görünen padişahın kendisiydi.",
  metin:"1768'de Osmanlı'nın Rusya'ya savaş açması, dönemin kaynaklarında padişah III. Mustafa'nın kişisel tutumuyla ilişkilendirilir. TDV'nin verdiği çerçeveye göre, uzun yıllar sadrazamlık yapmış ve temkinli bir dış siyaset izleyen Koca Râgıb Paşa'nın vefatından sonra (1763) bu ihtiyatlı çizgi zayıfladı; III. Mustafa savaşa taraftar bir tutum sergiledi. Kararın sorumluluğu doğrudan padişaha bağlanır: ricâl (devlet ileri gelenleri) ve ulemâ karşı çıksaydı ısrar etmeyecek bir konumdaydı, ama böyle bir direniş gösterilmedi.",
  bag:"Bu, bir devletin savaşa girişini tek bir kişinin 'hırsına' bağlamanın ne kadar isabetli olduğu tartışmasının bir örneğidir: TDV padişahın taraftarlığını kaydeder, ama savaşın gerçek tetikleyicisi (Lehistan meselesi, Balta olayı gibi diplomatik krizler) ayrı bir zincirin parçasıdır — bu kart yalnız padişahın kişisel tutumuna odaklanır, savaşın diplomatik sebep zincirini anlatmaz.",
  kesinlik:"tartismali",
  olay:["1757-10-30"],
  kaynak:"TDV: mustafa-iii" },

// ── 33 · DALGA-0065 madde 3 (4/4) — Çeşme sonrası Venedik'e nota ────────────
{ id:"tartisma-cesme-sonrasi-venedige-nota", tur:"tartisma",
  baslik:"Rus filosu yarım Avrupa'yı dolaştı — Osmanlı'nın protestosu yanlış adrese gitti",
  kisa:"Baltık'tan Cebelitarık'a, oradan Ege'ye: donanma koca bir kıtayı turladı. Osmanlı'nın öfkesi ise komşusu Venedik'e yöneldi.",
  metin:"Rusya, 1768'de başlayan savaşta Mora'yı ayaklandırmak için Baltık Denizi'ndeki donanmasını 1769'da yola çıkardı; filo İngiliz desteğiyle Atlas Okyanusu ve Cebelitarık Boğazı üzerinden Akdeniz'e ulaştı ve 6-7 Temmuz 1770'te Çeşme'de Osmanlı donanmasını yaktı (bkz. Çeşme Baskını kartı). Tarihçi Bernard Lewis'in `The Emergence of Modern Turkey` (1961) adlı eserine dayanan bir aktarıma göre, Osmanlı sarayı bu felaketin ardından bir nota hazırladı — ama notayı Rusya'ya değil, donanmanın 'Baltık'tan Adriyatik'e geçişine izin verdiği' gerekçesiyle Venedik'e verdi.\n\nBu iddianın ima ettiği şey, dönemin Osmanlı diplomasisinin Avrupa coğrafyasını ne kadar güncel bilgiyle takip ettiğiydi: filo gerçekte Venedik'in denetlediği hiçbir sudan geçmemiş, tamamen Batı Avrupa'yı dolaşarak (Atlas Okyanusu, Cebelitarık) Akdeniz'e inmişti. Venedik'i suçlamak, olayın coğrafi gerçeğiyle örtüşmüyordu.",
  bag:"Bu kart Baron de Tott'un kişisel anekdot düzeyindeki rivayetlerinden farklı: dayanağı, alanın en tanınmış akademisyenlerinden Bernard Lewis'in adı verilen bir kitabıdır. Yine de eserin ilgili sayfası doğrudan okunmadı — aktarım ikincil bir özetleme üzerinden yapıldı, bu yüzden ayrıntı (notanın tam metni, tarihi) doğrulanamadı.",
  not:"Bernard Lewis'in kitabındaki ilgili pasaj bizzat okunamadı; iddia ikincil bir kaynak aktarımıyla aktarıldı.",
  kesinlik:"tartismali",
  zincir:["savas-cesme-1770"],
  olay:["1770-07-06"],
  kaynak:"Bernard Lewis, The Emergence of Modern Turkey, Oxford University Press, 1961 (ikincil aktarım, birincil metin okunmadı)" },

{ id:"sebep-sonuc-rakoczi-erdel-seferi-1658-1664", tur:"sebep-sonuc",
  kisa:"Bir prens izinsiz Lehistan'a girdi — ve iki yıl sonra kendi ölümünü, altı yıl sonra da yeni bir Osmanlı-Avusturya savaşını doğurdu.",
  sebep:{ b:"Erdel Prensi II. György Rákóczi'nin Osmanlı himayesini çiğneyerek izinsiz Lehistan seferine çıkması", t:"1657-01-01" },
  sonuc:{ b:"Köprülü Mehmed Paşa'nın Rákóczi'yi cezalandırmak için sefere çıkıp Yanova'yı (1658) ve ardılı Köse Ali Paşa'nın Varad'ı (1660) doğrudan Osmanlı sancağına bağlaması; Rákóczi'nin 1660'ta savaşta ölmesi ve altı yıl sonra 1663-64 Osmanlı-Avusturya savaşına uzanan zincir", t:"1660-08-27" },
  bag:"Önemi: Erdel zaten Osmanlı'ya tâbi bir prenslikti; Yanova ve Varad'ın alınması yabancı bir devletten fetih değil, tâbi prensliğin bu iki kalesini prenslik idaresinden çıkarıp doğrudan Osmanlı sancağına bağlamaktı — prensliğin geri kalanı tâbi statüsünde kalmaya devam etti. Ama olay burada kapanmadı: Varad'ın düşmesi Habsburgları alarma geçirdi ve TDV'nin kendi değerlendirmesiyle üç yıl sonra başlayacak Osmanlı-Avusturya savaşının (1663-64) doğrudan sebeplerinden biri oldu — o savaş da Vasvar Antlaşması'yla (1664) sona erdi.",
  metin:"1657'de Erdel Prensi II. György Rákóczi, Osmanlı'nın himayesi altındaki bir prens olmasına rağmen padişahtan izin almadan Lehistan'a sefer açtı — bu, vasallık bağının açık bir ihlaliydi. Yeni sadrazam Köprülü Mehmed Paşa onu cezalandırmak için Belgrad üzerinden yürüyerek 27 Ağustos 1658'de stratejik Yanova (Ineu) kalesini aldı ve Erdel'e yeni bir prens tayin ettirerek vasallık bağını sertçe hatırlattı. Ama Rákóczi tahtından vazgeçmedi; iki yıl sonra 27 Ağustos 1660'ta bu kez Köse Ali Paşa'nın komutasındaki bir sefer Erdel'in kilit kalelerinden Varad'ı (Oradea) aldı ve burada yeni bir Osmanlı eyaleti (Varad Eyaleti) kuruldu — Rákóczi bu çatışmalarda öldü. Varad'ın düşmesi Habsburgları doğrudan alarma geçirdi: Avusturya, Erdel'i kendi nüfuz alanı saydığından bu genişlemeyi bir tehdit olarak okudu ve üç yıl içinde (1663) büyük bir Osmanlı-Avusturya savaşı patlak verdi. Bu savaş 1664'te Vasvar Antlaşması'yla sona erdi — Osmanlı'nın Erdel'deki iki küçük kale operasyonuyla başlayan zincir, sonunda kıtasal ölçekli bir savaşa çıktı.",
  kesinlik:"kesin",
  zincir:["sebep-sonuc-vasvar-1664"],
  olay:["1658-08-27","1660-08-27"],
  kaynak:"TDV: koprulu-mehmed-pasa" }

];
