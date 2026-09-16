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
  bag:"Bu kart Emre'nin H-0003'te sorduğu 'kızlarağasının rolünü ilginç/komik bir olay olarak anlatalım' isteğine karşı DÜRÜST bir sınır koyuyor: kaynakta VAR olan (kızlarağasının hal' kararındaki etkisi) ile HALK ARASINDA anlatılan ama TDV'de bulunmayan (bir odaya kilitleme sahnesi) birbirinden ayrıldı. İkincisi kartta YAZILMADI — D107'nin 'bulunamadı' damgası burada tam yerinde.",
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
  baslik:"'Şişman kadın merakı' — bu turda akademik/TDV kaynak bulunamadı",
  kisa:"Popüler sitelerde çok anlatılan bir hikâye; TDV'de ve akademik yazında izi bulunamadı.",
  metin:"H-0008'in saydığı 'şişman kadın düşkünlüğü' anlatısı (halk arasında 'Şivekâr' adıyla bilinen bir haseki hikâyesi) bu turda araştırıldı. TDV `ibrahim--padisah` maddesi böyle bir haseki adı ya da fiziksel özellik tarifi VERMİYOR. Bulunan tek kaynaklar Wikipedia, fandom wiki'leri, Tumblr ve eksisözlük gibi kullanıcı içerikli sitelerdi — CLAUDE.md §4'ün kırmızı çizgisi (forum/blog/kaynaksız derleme site kullanılmaz) bu kaynakları KULLANMAYI YASAKLIYOR. Bu yüzden anlatı bu turda karta YAZILMADI.\n\nEn yakın DOĞRULANMIŞ konu: `ibrahim-telli-haseki-nikahi` ve `ibrahim-hasekiler-pasmaklik-eyaletler` kartları (bu dosyanın dışında, `data/ekokuma_ibrahim.js`) İbrahim'in çok sayıda haseki edinmesini ve onlara sağladığı gelirleri zaten TDV kaynaklı olarak anlatıyor — 'şişman kadın' anlatısı bu genel temanın popülerleşmiş bir dalı olabilir ama kendi başına doğrulanamadı.",
  not:"Bu kart bir 'sonuç' değil bir 'arama raporu'dur — D107'nin 'bulunamadı' damgası.",
  kesinlik:"tartismali",
  olay:["1644-01-01|Deli İbrahim"],
  kaynak:"aranmadı — yalnız forum/wiki/blog türü sonuçlar bulundu, TDV ve akademik kaynakta YOK" },

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
