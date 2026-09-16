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
  bag:"Önemi: bu üçlü ittifak, aynı yıllarda süren Uzun Harp'in kuzey/Tuna cephesini açtı ve Osmanlı'yı aynı anda iki cephede (Avusturya'ya karşı Macaristan'da, voyvodalıklara karşı Tuna'nın kuzeyinde) savaşmak zorunda bıraktı. Emre'nin H-0003'te sorduğu \"bu maddeyi göremedim\" sorusunun cevabı: madde gerçekten YOKTU — `olaylar_ek10.js` bu boşluğu 1593-1596 arası için zaten ÖLÇMÜŞTÜ ama hiçbir oturum yazmamıştı; bu turda `data/olaylar_p0059.js`e yazıldı.",
  metin:"1594 baharında Tuna'nın kuzeyindeki üç voyvodalık aynı kararı aldı: Osmanlı'ya karşı birlikte hareket etmek. Boğdan voyvodası Aron Tiran, Avusturya ve Papalığın öncülüğündeki Kutsal İttifak'a katılıp kendini Erdel Prensliği'ne bağladı; Eflak voyvodası Mihai Viteazul ise ağır vergi talepleriyle bunalan bir voyvoda olarak harekete katıldı. 13 Kasım 1594'te Eflak ve Boğdan'da eş zamanlı ayaklanmalar patlak verdi; Erdel'in askerî desteğiyle isyan Tuna'nın güneyine, doğrudan Osmanlı topraklarına taştı. Mihai Viteazul'un bu isyanı beş-altı yıl içinde (1599-1600) Erdel'i ve Boğdan'ı fiilen ele geçirecek kadar büyütmesi ayrı, sonraki bir safhadır ve bu kartın kapsamı dışında bırakıldı — TDV'nin o safhaya verdiği tam günler bu turda taranmadı.",
  kesinlik:"kesin",
  zincir:["sebep-sonuc-zitvatorok-1606"],
  olay:["1594-11-13"],
  kaynak:"TDV: eflak · bogdan" },

// ── 2 · H-0008 — Tiryaki Hasan Paşa ve Kanije: belge mi rivayet mi ──────────
{ id:"menkibe-tiryaki-hasan-pasa-kanije", tur:"menkibeler",
  baslik:"Kanije'de ne belgeli, ne anlatı — bir kuşatmanın iki katmanı",
  kisa:"9000 kişi 70 gece dayandı — bu TDV'de yazıyor. Toplarını gizlemesi, sahte mektupları da mı?",
  metin:"H-0008 iki ayrı soru soruyor: Kanije savunmasının farklı anlatılan hikâyeleri var mı, ve akademik kaynağın ötesine geçen halk rivayetlerine bu atlasta yer verilmeli mi? İkisi ayrı katmanda cevaplanıyor.\n\n① BELGELİ ÇEKİRDEK (TDV `tiryaki-hasan-pasa` ve `kanije`): 1601'de bir yıl önce fethedilen Kanije'yi geri almak isteyen Arşidük Ferdinand'ın ordusu kaleyi kuşattı; Tiryâki Hasan Paşa 9000 kişilik kuvvetiyle yetmiş gece direndi, huruç harekâtlarıyla düşmanı ağır kayıplarla geri çekilmeye zorladı ve kuşatma 18 Kasım 1601'de Osmanlı zaferiyle bitti. TDV'nin kendi iki maddesi bile küçük ayrıntılarda ayrışıyor (garnizon TDV `tiryaki-hasan-pasa`de 9000, `kanije`nin verdiği olağan kadroyla karşılaştırılınca çok daha büyük) — bu, projenin kendi kronolojisinde (`olaylar_ek5.js:218`) zaten kayıtlı bir iç tutarsızlıktır, burada tekrar edilmiyor.\n\n② ANLATI KATMANI (Osmanlı tarih yazım geleneği — Peçevî/Naîmâ aktarımına dayanan ikincil literatür, TDV'nin kendi maddesinde AÇIKÇA doğrulanmıyor): Hasan Paşa'nın surlardaki topları geceleyin gerilere çektirip dışarıdan kalenin silahsız göründüğü izlenimi vermesi; duvarlardaki gedikleri yastık ve battaniyeyle doldurup önüne ince bir taş sırası dizmesi; padişah adına sahte cesaret mektupları yazdırıp bunları ölü askerlerin üzerine bırakarak 'büyük bir Osmanlı ordusu yolda' izlenimi vererek kuşatmacılar arasında paniğe yol açması.\n\n③ YÖNTEM SORUSU: Emre'nin sorduğu 'akademik kaynağın ötesine geçen bir araştırma usulü koysak mı' sorusuna cevap: ①'i ②'den AYIRMAK, ikisini birbirine karıştırmaktan iyidir. TDV'nin doğruladığı iskelet (rakamlar, tarihler, sonuç) zaten kronolojide var; ②'deki taktik hikâyeler bu kartta AÇIKÇA 'rivayet/anlatı geleneği' diye etiketlenerek sunuluyor, TDV'nin kendi ağzından çıkmış gibi değil. 1453'teki gemilerin karadan yürütülmesi (Cenevizli tanıklıkla çok kaynaklı belgeli) ile Lagari Hasan Çelebi'nin roket uçuşu (yalnız Evliya Çelebi) arasındaki fark da tam bu ayrımı gösteriyor: bir anlatının 'menkıbe' sayılması, kaynak SAYISINA ve TÜRÜNE bakar, hikâyenin ilginç olup olmadığına değil.",
  not:"② bölümündeki taktik ayrıntılar bu turda yalnızca ikincil Türkçe anlatı kaynaklarında bulundu; TDV'nin `tiryaki-hasan-pasa`/`kanije` maddelerinin kendisinde AÇIKÇA yok — kaynak listesinde bu yüzden ayrı işaretlendi.",
  kesinlik:"tartismali",
  olay:["1600-10-20|Kanije","1601-09-10|Kanije"],
  kaynak:"TDV: tiryaki-hasan-pasa · kanije (belgeli çekirdek) · Osmanlı anlatı geleneği (Peçevî/Naîmâ aktarımına dayanan ikincil Türkçe yazın — taktik ayrıntılar için, TDV'de doğrulanmadı)" },

// ── 3 · H-0042 — Hezarfen Ahmed Çelebi'nin uçuşu: hangi yıl, tek kaynak mı ──
{ id:"tartisma-hezarfen-ahmed-celebi-tarihlendirme", tur:"tartisma",
  baslik:"Hezarfen ne zaman uçtu — ve atlasın kendisi de iki tarih taşıyor",
  kisa:"TDV yıl vermiyor. Atlas ise İKİ ayrı yıl (1632 VE 1638) veriyor — ikisi de aynı olayı anlatıyor.",
  metin:"H-0042'nin sorusu: bu olay hangi kaynaklarda nasıl anlatılıyor, ve Evliya Çelebi'nin 'ballandırdığı' hikâyelerden biri mi? TDV `hezarfen-ahmed-celebi` maddesi açık: bu kişi hakkındaki bilgi TAMAMEN Evliya Çelebi'nin Seyahatnâme'sine dayanıyor, başka çağdaş kaynak yok — ve madde SPESİFİK BİR YIL VERMİYOR, yalnız 'XVII. yüzyılda yaşadı' diyor. Maddenin kendi değerlendirmesi temkinli: kol-kanat çırparak uçmanın fizik olarak mümkün olmadığını, ama olayın 'basit bir planörle' açıklanabileceğinin düşünüldüğünü yazıyor — ne doğruluyor ne kesin yalanlıyor.\n\nVE ATLASIN KENDİSİ ÇELİŞİYOR: `olaylar_ek2.js` bu olayı `1632-06-01`'e, `olaylar_ek7.js` ise AYNI OLAYI `1638-06-01`'e koyuyor. İkisi de aynı kişiden (Hezarfen Ahmed Çelebi, Galata Kulesi'nden Üsküdar'a uçuş), aynı kaynaktan (`kaynak:\"hezarfen-ahmed-celebi\"`) bahsediyor — TEK OLAY, İKİ TARİH. Daha da önemlisi: 1638 tarihli kayıt 'TDV İslâm Ansiklopedisi'nin ... maddesine göre bu uçuş, insanlık tarihinin belgelenmiş ilk uzun mesafeli planör uçuşlarından biri sayılır' diyor — ama TDV'nin kendi maddesi böyle bir 'belgelenmiş' hükmü VERMİYOR (§4'ün 'kaynağın kendi uyarısını da oku' ailesi: burada kaynak hiçbir uyarı vermiyor, iddia doğrudan kaynağın SÖYLEMEDİĞİ bir şeyi kaynağa mal ediyor). 1632 tarihli kayıt ise doğru biçimde 'rivayet' ve 'tarihî kesinliği tartışmalı' diye hedgeliyor.\n\nBu iki kaydın hangisinin kalacağı bir madde sahiplik kararı; bu turda yalnız TESPİT edildi ve `denetim/YAMA-RIVAYET-0916.json`e yazıldı — düzeltme koordinatör/madde sahibi eliyle uygulanacak.",
  bag:"Lagari Hasan Çelebi'nin roket uçuşu (1632 dolayı) ile aynı yöntem sorusunu taşıyor: ikisi de tek kaynaklı (Evliya Çelebi), ikisi de teknik olarak sorgulanabilir, ikisi de dönemin İstanbul'unda gerçekten anlatılan hikâyeler. Fark: Lagari'nin kaydı zaten `kesinlik` alanı taşımıyor gibi görünse de anlatı üslubuyla 'rivayete göre' diyerek mesafe koyuyor; Hezarfen'in 1638 kaydı bu mesafeyi kaybetmiş.",
  kesinlik:"tartismali",
  olay:["1632-06-01","1638-06-01"],
  kaynak:"TDV: hezarfen-ahmed-celebi" },

// ── 4 · H-0020 — Bağdat 1623: savaş ilanı var mıydı? ────────────────────────
{ id:"tartisma-bagdat-1623-savas-ilani-mi", tur:"tartisma",
  baslik:"1623'te Bağdat'a savaş mı açıldı, yoksa Şah bir isyanı mı devraldı?",
  kisa:"Ne bir elçi geldi ne bir ültimatom — Şah Abbas, Osmanlı'nın KENDİ isyancısının davetine icabet etti.",
  metin:"H-0020'nin sorusu doğrudan: 'İran'ın savaş ilanı filan yok mu, gelip direkt mi saldırmışlar?' TDV `bagdat` ve `abbas-i` maddelerine göre cevap ikisi de değil, üçüncü bir şey: bu klasik anlamda ne bir savaş ilanıdır ne de sıfırdan bir saldırı — Osmanlı'nın KENDİ İÇ İSYANINI Şah Abbas devraldı.\n\nZincir şöyle işledi: Bağdat'ta yeniçeri zâbiti Bekir Subaşı, merkezî otoritenin zayıfladığı bir dönemde ayaklandı ve Bağdat Beylerbeyi Yûsuf Paşa'nın ölümünden sonra iç kaleye hâkim oldu. Diyarbekir Beylerbeyi Hâfız Ahmed Paşa'nın onu beylerbeyilik rütbesiyle yatıştırma girişimi tutmayınca, Bekir Subaşı Şah Abbas'la temasa geçip Osmanlı'dan uzaklaşmaya başladı. Şah Abbas bu iç çözülmeyi bekleyip Temmuz 1623'te 30.000 kişilik orduyla doğrudan Bağdat üzerine yürüdü ve şehri kuşattı — bu, önceden bir barışın bozulup ELÇİ GÖNDERİLEREK savaşın İLAN EDİLDİĞİ bir sekans değil, zaten fiilen kopmuş bir vilayetin ÜZERİNE YÜRÜMEdir. Üç aylık kuşatmadan sonra Bekir Subaşı öldü, oğlu Derviş Mehmed Bağdat valiliği vaadine kanıp iç kaleyi 28 Kasım 1623'te Safevîlere teslim etti.\n\nYani sıra şu: önce İÇ İSYAN (Bekir Subaşı) → sonra İSYANCI-ŞAH TEMASI → sonra ŞAH'IN KUŞATMASI → sonra İHANETLE TESLİM. Resmî bir savaş ilanı bu zincirin hiçbir halkasında yok; TDV de böyle bir ilandan söz etmiyor.",
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
