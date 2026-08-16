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

];

// ═══════════ YAZILMAYANLAR — ve her biri NİÇİN ═══════════
//
// 🔴 ESKİ KIRIM (SOLHAT) · OR KAPI (FERAHKİRMAN)
//   `solhat` · `eski-kirim` · `or-kapi` · `perekop` DÖRDÜ DE 302 ölü.
//   Genel `kirim` maddesinde ikisi de GEÇİYOR ama idarî mertebeleri
//   birebir alıntılanabilir biçimde ÇIKMADI. `k:` YAZMADIM.
//   ⚠️ Ve niçin yazmadığım önemli: elimde bir ÖZET var, bir ALINTI yok.
//     Özet "Or Kapı: kaptan/vali konumu" diyor — ama bunu maddenin kendi
//     cümlesi olarak DOĞRULAYAMADIM. Özete dayanıp k:2 yazmak, kaynağa
//     dayanmak değil ARACIN PARAFRAZINA dayanmak olurdu.
//   ⇒ Bir sonraki tur: `kirim` maddesinin gövdesi bu iki ad için AYRICA
//     okunacak. Eksik olan kaynak değil, ALINTI.
//
// 🔴 DON / KUBAN — Rostov · Taganrog · Çerkask (Razdory) ·
//   Zaporojye Seçi · Kuban (Yekaterinodar)
//   Beşinin de TDV slug'ı ölü (`rostov` · `taganrog` · `kuban` 302).
//   Bunlar Rus/Kazak yerleşimleri; TDV kapsamı dışında (§4 coğrafî boşluk)
//   ⇒ akademik kaynak MEŞRU ama bu turda ARANMADI. Yazmadım.
//   📌 "Aranmadı" diye yazıyorum, "yok" diye DEĞİL — ikisi ayrı şeydir.
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
