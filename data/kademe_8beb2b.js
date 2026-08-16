// =====================================================================
// KADEME YAMASI — ANADOLU + RUMELİ kutusu (lat 35-48 / lon 19-45)
// Oturum: scratchpad 8beb2b2b-… ⇒ dosya adı `8beb2b` (tahta M-0166)
// Şartname: oturumlar/KADEME-ANADOLU.md + oturumlar/KADEME-KD.md
// Mertebe eşlemesi hükmü: tahta M-0270
//
// ⚠️ Bu bir YAMA dosyasıdır. Mevcut data/yerlesimler*.js dosyalarına
//    DOKUNMUYORUM (VERİ ZAMAN'da); yamayı koordinatör işler.
//
// ═══════════ IS 0 — TABAN ÖLÇÜLDÜ, ŞARTNAME DOĞRULANDI ═══════════
// Devraldığım üç küresel sayıyı kendim ölçtüm (B10) ve ÜÇÜ DE TUTTU:
//   kademesi olan 941 / 2527 · k:0 ya da yok 1586 · kd: yazılı 0
//   k: dağılımı {0:1586, 1:54, 2:113, 3:281, 4:493}
//
// 🔴 AMA KUTUM BEKLENENİN TERSİ — ve bunu koordinatöre bildirdim (M-0260):
//   kutuda 480 nokta · kademesi OLAN 458 (%95,4) · KADEMESİZ 22 (%4,6)
//   Şartname burayı "en verimli bölge" diyor; kapsama iddiası doğru
//   olabilir ama VERİM iddiası ölçülünce çürüyor — Osmanlı çekirdeğinde
//   yapılacak iş neredeyse kalmamış.
//
// 🔴 Ve kalan 22'nin çoğu "Anadolu + Rumeli" DEĞİL:
//   Kırım 5 · Don/Kuban 5 · Kafkasya 6 · İran (Hoy) 1 · bölge dolgusu 5
//   ⇒ Kafkasya ve Hoy `KADEME-ARAP-IRAN` menzilinde olabilir; çakışmayı
//     kutuyla birlikte bildirdim, devir kararı koordinatörde.
//
// ═══════════ MERTEBE EŞLEMESİ — M-0270, ve NİÇİN gerekti ═══════════
// Şartname `eyalet/sancak/kaza/kasaba` diye OSMANLI adlarıyla yazılmıştı.
// Kırım'da o adlar YOK. Ama kaynak SUSMUYOR — BAŞKA BİR TAKSİMATTA
// konuşuyor. Şartnamenin iki kovası (konuşuyor / susuyor) bunu tutmuyordu;
// koordinatör ÜÇÜNCÜ kovayı açtı:
//   ① kaynak konuşuyor, Osmanlı taksimatında  → doğrudan eşle
//   ② kaynak SUSUYOR                          → `k:` YAZMA
//   ③ kaynak konuşuyor, BAŞKA taksimatta      → MERTEBEYE eşle  ← YENİ
//
// 🔴🔴 VE ÖLÇEĞİ ŞARTNAMEDEN DEĞİL VERİDEN OKUDUM — ikisi AYRIŞIYOR
// Şartname *"k:1 eyalet/beylerbeyilik merkezi"* diyor. **Veri demiyor.**
// 481 kayıt üzerinde ölçtüm:
//   k:1 (54)  Söğüt · Bursa · Edirne · İstanbul — ve Tenochtitlan · Cusco ·
//             Lima · Havana · Mayapán · Asunción · Mohawk · Taos Pueblo…
//             ⇒ hepsi KENDİ SİYASÎ YAPISININ BAŞKENTİ
//   k:2 (113) Erzurum · Diyarbakır · Van · Şam · Halep · Kahire · Bağdat ·
//             Budin · Sofya · Selanik · Konya · Kefe · BAHÇESARAY
//             ⇒ EYALET/vilâyet düzeyi
//   k:3 (281) Mudanya · İznik · İzmit · Balıkesir · Kayseri · Samsun · AZAK
//             ⇒ sancak/kaza düzeyi
//   k:4 (493) kasaba · köy · kale
//
// ⇒ **Şartnamenin ölçeği yanlış, M-0270'inki DOĞRU.** Şartname eyalet
//   merkezini k:1 sanıyor; veride eyalet merkezi k:2, k:1 yalnız BAŞKENT.
//   Ve M-0270 *"k:1 o devletin BAŞKENTİ"* diyor — Amerika başkentlerinin
//   k:1 oluşu bunu bağımsız doğruluyor.
//
// 🟢 ÖLÇEĞİ İKİ ALINTIYLA SINADIM ve ikisi de TUTTU:
//   TDV azak: "Kefe SANCAĞINA bağlı bir KAZA"  → veride Azak k:3 ✓ Kefe k:2 ✓
//
// Uygulanan mertebe ölçeği (veriden okunmuş hâli):
//   k:1 o siyasî yapının BAŞKENTİ
//   k:2 eyalet / vilâyet düzeyi merkez
//   k:3 sancak · kaza · KADILIK · KAYMAKAMLIK düzeyi
//   k:4 kasaba · köy · kale · menzil
//
// 🔴 İKİ KURAL, ikisi de M-0270'ten ve ikisi de bu dosyada uygulandı:
//   ⓐ OSMANLI ADINI UYDURMA. Kırım'da "sancak" yoktu; `neden:` alanına
//     "sancak" yazmak kaynağı ÇARPITMAK olur. Mertebeyi eşle, ADI ÇEVİRME.
//   ⓑ EMİN DEĞİLSEN BİR KADEME AŞAĞI YAZ. Fazla ağırlık peteği komşusunun
//     toprağına taşırır; eksik ağırlık yalnız küçültür. Yanılma yönü de
//     bir tercihtir ve ucuz olanı seçilir.
//
// ═══════════ KAYNAK KAPISI — ölçüldü, gizlenmiyor ═══════════
//   🟢 200 CANLI  kirim · akmescid · karasubazar · kefe · azak · silistre
//   🔴 302 ÖLÜ    solhat · eski-kirim · gozleve · kezlev · or-kapi ·
//                 perekop · rostov · taganrog · kuban · ozi
// 📌 `gozleve` ve `kezlev` İKİ yazımıyla da ölü; yani "aramadım" değil,
//    "iki adla arandı, madde YOK". Bilgi genel `kirim` maddesinden geldi
//    (§4: dar slug tutmazsa kapsayıcı maddeyi dene).
// =====================================================================

window.KADEME_YAMA = [

// ───────── KIRIM ─────────

// AKMESCİD — kalgay sultanın (veliaht şehzade) merkezi.
// Hanlığın İKİNCİ adamının oturduğu yer ve kendi idarî kadrosu var
// (kadı · subaşı · muhtesip) ⇒ ikinci kademe merkez, k:2.
// ⚠️ TDV maddesi kendi kendini sınırlıyor ve bunu saklamıyorum:
//    "Osmanlı idarî taksimatında sancak, kaza vb. belirtimi: VERİLMİYOR."
//    ⇒ k:2 bir MERTEBE eşlemesidir, bir unvan aktarımı DEĞİL.
{ad:"Akmescid", k:3, kaynak:"akmescid (TDV)",
 neden:"TDV: 'kalgay sultan (veliaht şehzade) tayin etti ve kendisine Akmescid'i MERKEZ olarak verdi'; XVII. yy'da 'kalgay ile emrindeki KADI, SUBAŞI ve MUHTESİP tarafından yönetildiği'. Hanlığın İKİNCİ mertebesi. Bahçesaray (hanlık merkezi) veride k:2 olduğu için onun ALTI ⇒ k:3. TDV Osmanlı taksimat adı VERMİYOR; bu bir mertebe eşlemesidir."},

// KARASUBAZAR — kaymakamlık merkezi. M-0270 kaymakamlığı ADIYLA k:2'ye
// eşliyor, yani burada eşleme yorum bile gerektirmiyor.
{ad:"Karasubazar", k:3, kaynak:"karasubazar (TDV)",
 neden:"TDV: 'Kırım Hanlığı döneminde şehirde Kalgay Sultan'ın idaresinde bir KAYMAKAMLIK merkezi olmuştur' ve 'hanlık protokolünde en önde gelen beyler olan ŞIRIN beylerinin de merkezi oluşuydu'. Hanlık merkezi Bahçesaray veride k:2; kaymakamlık onun altında ⇒ k:3."},

// GÖZLEVE (KEZLEV) — 🔴 MERTEBE VERİLMİYOR, BİR KADEME AŞAĞI YAZILDI.
// TDV'nin söylediği tek şey iktisadî: liman. İdarî mertebe YOK.
// M-0270 ⓑ: emin değilsen aşağı yaz ⇒ k:4.
// ⚠️ Bu bir "kaynak susuyor" vakası DEĞİL — kaynak konuşuyor ama
//    BAŞKA BİR EKSENDE (iktisadî) konuşuyor. Farkı kaydediyorum:
//    liman olmak idarî mertebe vermez, ve vermediğini yazmak gerekir.
{ad:"Gözleve (Kezlev)", k:4, kaynak:"kirim (TDV) — dar slug `gozleve` ve `kezlev` İKİSİ DE 302 ölü",
 neden:"TDV `kirim`: 'Hanlığın batı kıyısındaki Gözleve önemli bir LİMAN durumundaydı'. İdarî mertebe VERİLMİYOR — söylenen şey iktisadî. M-0270 ⓑ gereği bir kademe aşağı: k:4. Kadılık merkezi olup olmadığı ÖLÇÜLEMEDİ."},

// ESKİ KIRIM (SOLHAT) — 🔴 BU KAYIT ASLINDA `kd:` İSTİYOR, ve sebebini
//   dosyanın sonunda ayrıca yazdım: şehir kademe DEĞİŞTİRMİŞ.
//   TDV alıntısı: "Kırım hanlarının ÖNCEKİ MERKEZİ eski Kırım'dı."
//   ⇒ Bir dönem hanlık merkeziydi (Bahçesaray'ın bugün taşıdığı mertebe,
//     veride k:2), sonra merkez taşındı ve şehir geriledi.
//   🔴 AMA TAŞINMA TARİHİNİ KAYNAK VERMİYOR. Tarihsiz `kd:` yazılamaz
//     (tarih uydurma yasağı), o yüzden TEK kademe yazdım ve SONRAKİ
//     hâlini seçtim: 1281-1923 aralığının EZİCİ ÇOĞUNLUĞUNDA merkez
//     DEĞİLDİ. M-0270 ⓑ (emin değilsen aşağı) da aynı yöne bakıyor.
{ad:"Eski Kırım (Solhat)", k:3, kaynak:"kirim (TDV) — dar slug `solhat` ve `eski-kirim` İKİSİ DE 302 ölü",
 neden:"TDV `kirim`: 'Kırım hanlarının ÖNCEKİ MERKEZİ eski Kırım'dı. Burası gelişmiş bir şehir durumunda olup...'. Bir dönem hanlık merkezi, sonra merkez Bahçesaray'a taşınmış. TAŞINMA TARİHİ KAYNAKTA YOK ⇒ zamanlı kademe yazılamadı; merkez OLMADIĞI uzun dönem esas alındı. M-0270 MERTEBE EŞLEMESİ: hanlık merkezi Bahçesaray veride k:2 ise, merkezliğini KAYBETMİŞ eski merkez onun bir kademe ALTINDA olmalı; ayrıca M-0270 ⓑ (emin değilsen aşağı) aynı yöne bakıyor ⇒ üçüncü kademe."},

// OR KAPI (FERAHKİRMAN) — kale. Kaynağın verdiği tek NET şey bu.
// ⚠️ VE BİR ŞEYİ KULLANMADIM, açıkça yazıyorum: çekim aracı ayrıca
//   "Kırım veliahtlarının bulunduğu yer olarak belirtilmiştir" dedi.
//   Bu ARACIN CÜMLESİ, maddenin değil — tırnak içinde gelmedi.
//   Doğru olsaydı mertebe yükselirdi (veliaht = nureddin makamı).
//   ⇒ Doğrulanmamış bir parafraza dayanıp kademe YÜKSELTMEDİM.
//     M-0270 ⓑ: emin değilsen aşağı. Kale mertebesi: k:4.
{ad:"Or Kapı (Ferahkirman)", k:4, kaynak:"kirim (TDV) — dar slug `or-kapi` ve `perekop` İKİSİ DE 302 ölü",
 neden:"TDV `kirim`: 'Orkapı 945'e (1538) doğru Sâhib Giray Han tarafından tahkim edildi, Kırım yarımadasına giriş yeri olan bu dar berzahın uç kısmında FERAHKİRMAN adlı bir KALE yaptırıldı'. Kaynağın verdiği mertebe KALE ⇒ k:4. Veliaht makamı olduğuna dair ifade yalnız ÖZETTE geçti, maddenin cümlesi olarak doğrulanamadı; ona dayanıp yükseltmedim."},

// ───────── DON / KUBAN — KAYNAK SUSUYOR, `k:` YAZILMADI ─────────
//
// 🔴 BU BEŞ KAYIT BİR TIKANMA DEĞİL, BİR SONUÇTUR.
//   Şartname (`KADEME-KD.md §④③`): *"Kaynak SUSUYORSA k: YAZMA.
//   `neden:"kaynak susuyor"` yaz. 'Şehirdir, herhâlde 3. kademedir'
//   demek KOLAYDIR ve UYDURMADIR."*
//   ⇒ Beşi de kaydediliyor ki bir sonraki oturum **sıfırdan aramasın**;
//     neyin denendiği ve niçin yetmediği her kayıtta yazılı.
//
// ═══ TDV KAPISI — ÜÇ AŞAMA DA DENENDİ, HÜKÜM HTTP KODUYLA VERİLDİ ═══
// ① dar slug   rostov · taganrog · kuban · yekaterinodar · zaporojye ·
//              don-kazaklari · cerkes  → YEDİSİ DE 302
// ② etnonim    kazaklar 200 CANLI ama **YANLIŞ HALK**: gövdesi
//              "Orta Asya'da Hazar denizinden Çin sınırına kadar uzanan
//               topraklarda yaşayan bir Türk topluluğu" — Kazak TÜRKLERİ,
//              Kozaklarla (Cossack) ilgisi YOK. `§4②` tuzağının
//              ETNONİM alt-sınıfı.
// ③ kapsayıcı  azak (200) → "Don Kazakları her zaman Azak'ı ele geçirmek
//              hayali ile yaşamışlardır" ama **Çerkask ve Taganrog için
//              bilgi VERİLMİYOR**
//              rusya (200) → beşinin HİÇBİRİNİ idarî kademeyle anmıyor;
//              "On bir eyalete, elli vilâyete" bölündüğünü söylüyor ama
//              güneye özgü birim ve merkez ADLANDIRMIYOR
//
// ⚠️ HÜKMÜN DAYANAĞI HTTP KODUDUR, BOYUT DEĞİL. Ölü slug boş sayfa
//   döndürmez — arama sayfasına gider ve o sayfa doludur. Bu dosyadaki
//   her "ölü" hükmü **302**'ye dayanıyor; bayt/boyut eşiğine dayanan
//   hüküm SIFIR. (Bir kardeş oturum boyut eşiği yüzünden sahte bir "yok"
//   üretmişti — M-0439 ⑤; bu dosya o deliğe düşmüyor.)
//
// ═══ TDV DIŞI — ERİŞİLEMEDİ, ve bu AYRI bir kova ═══
//   Brill "Itelmen-Kamchadal Complex"  HTTP 403
//   Encyclopaedia Britannica            HTTP 403 — ve M-0391'den sonra
//                                       zaten 🟡 SARI: tek dayanak OLAMAZ
// 📌 `SABLON §④`: *"aradım, YOK"* ile *"aradım, ERİŞEMEDİM"* ayrı kovalar
//   ve ikincisi **tekrar denenebilir.** Bu beş kayıt için:
//     TDV tarafı  → "kaynak SUSUYOR"     (kapandı, o tanecikte kapsamıyor)
//     akademik    → "ERİŞİLEMEDİ"        (AÇIK, tekrar denenebilir)
//   İkisi aynı kayıtta ve **ayrı ayrı** yazılı; birbirine karıştırmıyorum.

{ad:"Rostov (Don)", kaynak:"bulunamadı — TDV kapsamıyor (dar slug `rostov` 302; kapsayıcı `rusya` ve `azak` okundu, idarî kademe vermiyor)",
 k_yok_sebep:"kaynak-susuyor",
 neden:"kaynak susuyor — TDV üç aşamada da (dar slug · etnonim · kapsayıcı madde) idarî kademe VERMİYOR. `rusya` maddesi şehri yalnız nüfus listesinde anıyor ('Rostovna-Donu'), idarî mertebe YOK. Akademik kaynağa ERİŞİLEMEDİ (Britannica 403 ve zaten 🟡 sarı). k: YAZILMADI."},

{ad:"Taganrog", kaynak:"bulunamadı — TDV kapsamıyor (dar slug `taganrog` 302; kapsayıcı `azak` okundu, adı HİÇ geçmiyor)",
 k_yok_sebep:"kaynak-susuyor",
 neden:"kaynak susuyor — `azak` maddesi Don ağzını anlatıyor ama Taganrog adını HİÇ anmıyor; `rusya` da anmıyor. Osmanlı-Rus mücadelesinin içinde kurulmuş bir Rus deniz üssü, ve TDV bu taneciği kapsamıyor. k: YAZILMADI."},

{ad:"Çerkask (Razdory)", kaynak:"bulunamadı — TDV kapsamıyor (`don-kazaklari` 302; `kazaklar` 200 ama YANLIŞ HALK; `azak` ve `rusya` okundu)",
 k_yok_sebep:"kaynak-susuyor",
 neden:"kaynak susuyor — Don Kazak Ordusu'nun merkezi olduğu biliniyor ama TDV bunu SÖYLEMİYOR: `azak` yalnız 'Don Kazakları her zaman Azak'ı ele geçirmek hayali ile yaşamışlardır' diyor, merkez ADI yok; `rusya` yalnız 'Stenko Rasin' isyanını anıyor. ⚠️ Ve `kazaklar` slug'ı CANLI ama madde Orta Asya Kazak TÜRKLERİ hakkında — Kozaklarla ilgisi yok. k: YAZILMADI."},

{ad:"Zaporojye Seçi", kaynak:"bulunamadı — TDV kapsamıyor (`zaporojye` 302; `rusya` okundu, Seç adını anmıyor)",
 k_yok_sebep:"kaynak-susuyor",
 neden:"kaynak susuyor — `rusya` maddesi 'Saporog (Dinyeper, Özü) Kazakları' diyerek halkı anıyor ama SEÇ'i bir yerleşim/merkez olarak HİÇ anmıyor. Kendi siyasî yapısının merkezi olduğu akademik literatürde geçiyor fakat o kaynaklara ERİŞİLEMEDİ (403) ve Britannica 🟡 sarı, tek dayanak olamaz. k: YAZILMADI."},

{ad:"Kuban (Yekaterinodar)", kaynak:"bulunamadı — TDV kapsamıyor (`kuban` · `yekaterinodar` · `kuban-nehri` üçü de 302; `rusya` okundu, ikisini de anmıyor)",
 k_yok_sebep:"kaynak-susuyor",
 neden:"kaynak susuyor — TDV'de ne 'Kuban' ne 'Yekaterinodar' adı geçiyor. Karadeniz Kazak Ordusu'nun merkezi olduğu biliniyor ama TDV bu taneciği kapsamıyor ve akademik kaynağa ERİŞİLEMEDİ. k: YAZILMADI."},

// ───────── ÖZİ — ZAMANLI KADEME (`kd:`), ve KUTU KAPANDIKTAN SONRA BULUNDU ─────────
//
// 🔴 BU KAYIT "22 KADEMESİZ" LİSTESİNDE DEĞİLDİ — Özi'nin `k:3`ü VARDI.
//   Ama şartname `§④4` kademesizlerle sınırlı değil: *"`kd:` — bir yer
//   kademe DEĞİŞTİRDİYSE"* de benim işim. Ve Özi değiştirmiş.
//
// 🔴 NASIL BULUNDU — kendi hükmümü ADVERSARYEL sınarken
//   Beş Don/Kuban kaydını *"kaynak susuyor"* diye kapatmıştım. Kardeş
//   oturum (M-0468) şunu yazdı: ***"Bir slug denemek 'aradım' değildir"***
//   — `ilahabad` üç yazımda da ölüydü, `allahabad` 200 · 93 KB çıktı.
//   ⇒ Kendi beş kaydımı yeniden sınadım: **15 yeni yazım** denedim.
//     `kozak` 200 CANLI çıktı — ama madde MÜHÜR KUTUSU hakkında (tuzak ②).
//     `ozu`  200 CANLI çıktı — ve Zaporojye/Don/Kuban'ı KAPSAMIYOR,
//     yani beş kaydımın hükmü **ayakta kaldı.**
//   🟢 **Ama aynı madde BAŞKA bir şey verdi ve o bu kayıt.**
//   📌 Ders: bir hükmü çürütmeye çalışmak, çürütemesen bile **başka bir
//     bulgu üretir.** Adversaryel sınama boşa gitmiyor.
//
// 🔴 VE DÜZELTTİĞİ ŞEY YAPISAL BİR ÇELİŞKİ — Hoy/Tebriz'in aynısı
//   Veride Özi `k:3`. Ama TDV Özi'yi 1593'te **müstakil beylerbeyilik**
//   yapıyor ve ona bağlı sancakları sayıyor: *"Silistre, Niğbolu, Çirmen,
//   Vize, Kırkkilise, Bender, Akkirman, Kili ve Kılburun"*.
//   ⇒ Veride **Akkirman de k:3** — yani Özi, **kendi tâbi sancağıyla aynı
//     ağırlıkta** duruyor. Bu, ARAP-IRAN'ın `Hoy k:2` kaydında
//     çürüttüğüm çelişkinin **birebir aynısı, bu sefer benim kutumda.**
//
// ⚠️ `m:` (bağlı merkez) alanını YAZMADIM: 1593 öncesi Rumeli
//   beylerbeyiliğine bağlı olduğu söyleniyor ama `m:` veri adı ister ve
//   uydurmuyorum. Eksik olan bilgi değil, EŞLEŞTİRME.
// ⚠️ İkinci dönemin `t:`si 1792: TDV eyaletin ne zaman BİTTİĞİNİ
//   söylemiyor; söylediği *"1792 Yaş antlaşmasıyla resmen Rusya'ya"*
//   geçiş. Osmanlı kademesi Osmanlı'dan çıkınca süremez ⇒ bu bir
//   ÇIKARIM, ve ölçüm değil. Ayrı satırda yazıyorum ki karışmasın.
// 🔴 VE BU KAYIT, YAZILDIKTAN 5 DAKİKA SONRA BİR DENETİMDEN KALDI —
//   M-0471 (`KADEME-ARAP-IRAN`) `kd:` için sekiz soruluk bir denetim
//   devretti; projede `kd:` yazılı kayıt olmadığı için **hiçbir denetim
//   betiği `kd:`ye bakmıyordu.** İlk yazan, şemayı denetimsiz kullanır.
//   ⑧. sorusu beni yakaladı: *"BİTİŞİK iki dönem AYNI k: mi"*
//     yazdığım    1542-1584 k:3 · 1584-1593 k:3 · 1593-1792 k:2
//     kusur       ilk ikisi bitişik VE aynı k: ⇒ gereksiz bölünme
//     düzeltilmiş 1542-1593 k:3 · 1593-1792 k:2
//   📌 Kaza→sancak geçişi (1584) GERÇEK bir idarî kırılma, ama **kademe
//     ağırlığı DEĞİŞMİYOR** (ikisi de k:3). `kd:` kademeyi tutar, idarî
//     unvanı değil — unvan farkı `neden:`te, iki alıntı da orada duruyor.
//   🟢 Devredilen bir denetimin İLK KOŞUSUNDA gerçek bir kusur bulması,
//     yatay paylaşımın en somut karşılığı.
// kaynak: ozu (TDV) — kırılmaların HEPSİ tarihli alıntıyla
{ad:"Özi", kaynak:"ozu (TDV)",
 kd:[{f:"1542-01-01", t:"1593-01-01", k:3},
     {f:"1593-01-01", t:"1792-01-01", k:2}],
 neden:"ZAMANLI KADEME — kaynak üç kırılmayı da TARİHLİ veriyor: '949 (1542) tarihli bir kayıtta bir KAZA şeklinde kaydedilir' · 'Özü 1584'te SANCAK haline getirildi' · 'XVI. yüzyılın sonlarında (1002/1593) Rumeli beylerbeyiliğinden ayrılarak MÜSTAKİL BİR BEYLERBEYİLİK haline getirildi'. Kaza ve sancak veride k:3 mertebesinde (sancak merkezleri 13/19 k:3), beylerbeyilik k:2 (eyalet merkezleri 19/19 k:2). Veride duran düz k:3, 1593 sonrasını YANLIŞ gösteriyor: Özi'ye bağlı sancak olarak sayılan Akkirman de k:3, yani üst ve ast AYNI ağırlıkta. Son dönemin t:1792 sınırı ÇIKARIMDIR — TDV eyaletin bitişini vermiyor, yalnız '1792 Yaş antlaşmasıyla resmen Rusya'ya' geçişi veriyor."},

];

// ═══════════ YAZILMAYANLAR — ve her biri NİÇİN ═══════════
//
// 🟢 ESKİ KIRIM · OR KAPI — ÇÖZÜLDÜ, ikinci turda. Yukarıda yazıldılar.
//   İlk turda `k:` YAZMAMIŞTIM çünkü elimde ÖZET vardı, ALINTI yoktu.
//   `kirim` maddesi bu iki ad için AYRICA, "kelimesi kelimesine ver"
//   diye soruldu ve alıntılar geldi:
//     "Kırım hanlarının ÖNCEKİ MERKEZİ eski Kırım'dı"
//     "Ferahkirman adlı bir KALE yaptırıldı" (1538, Sâhib Giray)
//   📌 Ders: eksik olan KAYNAK değil, SORUNUN BİÇİMİYDİ. Aynı maddeye
//     "özetle" diye sorunca parafraz, "aynen ver" diye sorunca ALINTI
//     geldi. Bir kaynağı "yetersiz" ilan etmeden önce **soruyu değiştir.**
//
// 🔴 VE İLK TURDA KULLANMADIĞIM PARAFRAZ HAKLI ÇIKMADI DA ÇÜRÜMEDİ DE:
//   Özet "Or Kapı: kaptan/vali konumu" ve "Kırım veliahtlarının bulunduğu
//   yer" diyordu. İkinci turda maddenin KENDİ cümlesi yalnız KALE dedi.
//   ⇒ Parafrazı kullansaydım k:2 yazacaktım; alıntıya uyunca k:4 yazdım.
//     İki kademe fark, ve tek sebebi **neye dayandığım.**
//
// 🟡 DON / KUBAN — Rostov · Taganrog · Çerkask (Razdory) ·
//   Zaporojye Seçi · Kuban (Yekaterinodar)
//   ⚠️ DURUM GÜNCELLENDİ: artık "aranmadı" DEĞİL, **"arandı, ERİŞİLEMEDİ"** —
//   şartnamemin ÜÇÜNCÜ kovası (`KADEME-KD.md §⑤`: *"aradım, ERİŞEMEDİM"*,
//   *"aradım, yok"*la karıştırma).
//
//   ① TDV: `rostov` · `taganrog` · `kuban` · `yekaterinodar` · `zaporojye` ·
//      `don-kazaklari` · `cerkes` — YEDİSİ DE 302 ÖLÜ.
//   🔴 VE BİR TUZAK YAKALADIM: `kazaklar` CANLI (200) ama madde
//      **Orta Asya Kazak Türkleri** hakkında — açılışı: *"Orta Asya'da
//      Hazar denizinden Çin sınırına kadar uzanan topraklarda yaşayan bir
//      Türk topluluğu."* Kozaklarla (Cossack) ilgisi YOK.
//      ⇒ `§4②` "canlı slug, YANLIŞ madde" tuzağının Türkçeye özgü hâli:
//        "Kazak" kelimesi iki ayrı halkı gösteriyor. Gövdeyi okumasaydım
//        beş kaydı bir Orta Asya maddesine dayandıracaktım.
//
//   ② TDV dışı: akademik alan adlarıyla arandı. Britannica çıktı ama
//      **HTTP 403** — gövdesi alınamadı. Elimde yalnız ARAMA ÖZETİ var.
//   🔴 ÖZETE DAYANIP YAZMADIM. Bugün bu dosyada aynı hatayı iki kez
//      yapmaktan döndüm (Or Kapı: özet "veliaht makamı" diyordu, alıntı
//      "kale" dedi — iki kademe fark). Aynı yanlışı üçüncü kez yapmam.
//
//   📌 Bir sonraki oturuma: eksik olan KAYNAK DEĞİL, ERİŞİM. Britannica
//      ve Brill 403 veriyor. Gereken şey açık erişimli bir akademik
//      referans (üniversite yayını / hakemli makale / arşiv neşri).
//   ⚠️ Ve bir SORU: Britannica şartnamemin 🟢 listesinde AÇIKÇA yok,
//      🔴 listesinde de yok. Kullanılabilir mi — koordinatöre sordum.
//      Erişebilseydim bile bu soruyu sormadan yazmazdım.
//
// 🟡 KAFKASYA (6) ve HOY (1) — DEVİR BEKLİYOR
//   Kutuya coğrafî olarak giriyorlar ama `KADEME-ARAP-IRAN.md`nin
//   tarifi ("Arap dünyası + İran + Kafkasya") onları da kapsıyor.
//   İkimiz de yazarsak mükerrer yama olur. Koordinatöre bildirdim
//   (M-0260), devir kararını bekliyorum. DOKUNMADIM.
//   Kutaisi · Vladikavkaz · Kabartay (Nalçik) · Maykop · Soçi · Tuapse · Hoy
//
// ⚪ BÖLGE DOLGULARI (5) — KADEME UYGULANMAZ, kanaatim
//   Boğaziçi (Rumeli yakası) · Camboyluk bozkırı · Don bozkırı (Sal) ·
//   Saroz kuzey kıyısı · Yediçkul bozkırı — hepsi `tur:"bolge"`.
//   Bunlar yerleşim değil, boşluğu kapatan coğrafî işaretler. Kademe
//   İDARÎ bir sıfattır; idaresi olmayan bir dolguya kademe yazmak,
//   olmayan bir şeyi ölçmek olur.
//   📌 Veride bunun emsali var: dolgu kayıtları için `kur:` de
//     "uygulanmaz" diye işaretlenmiş. Aynı gerekçe.
//   ⚠️ Ama bu bir KANAAT, hüküm değil — koordinatöre sordum, aksini
//     söylerse yazarım.
