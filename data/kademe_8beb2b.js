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
