// data/olay_yama_ok104.js — OPUS HAZIR KITA 104 · parti-emrelic-0019
// ===========================================================================
// 🔴 BU DOSYA VERİ DEĞİL, BİR YAMA TARİFİDİR. `index.html`e BAĞLANMAZ,
//    `arac/girdi.py`ye YAZILMAZ. Var olan kronoloji kayıtlarının DÜZELTİLMİŞ
//    hâlini tarif eder; uygulayıcısı `data/olaylar*.js` sahibi oturumdur.
//    (Kalıp: `data/yer_yama_p19.js`ten alındı — o dosya aynı işi yerleşim
//     tarafında yapıyor.)
//
// AD ALANI DOSYA ADINDAN TÜRETİLDİ: window.OLAY_YAMA_OK104
//
// ⚠️ NİÇİN YAMA, NİÇİN DOĞRUDAN DÜZELTME DEĞİL: `data/olaylar_ek5.js`
//    PAYLAŞILAN bir dosya ve benim değil (`CLAUDE.md §7` · M-1903 ④:
//    "var olan hiçbir paylaşılan veri dosyasına yazmayın"). Kayıt bir
//    SATIRDAN ibaret olduğu için iki oturum aynı dosyaya yazarsa sessiz
//    veri kaybı olur — bu projede ölçülmüş bir zarar.
// ---------------------------------------------------------------------------

window.OLAY_YAMA_OK104 = [

// ═══════════════════════════════════════════════════════════════════════════
// H-0045 — "Halep'in Osmanlı hâkimiyetine girişi maddesinde haritada
//           Deyrizor ve Rakka'da görünüyor. Kronoloji başlığında bunlardan
//           da bahsedilebilir. Detay metinde ise var, bu güzel."
// ═══════════════════════════════════════════════════════════════════════════
// DEVRALDIĞIM ÖLÇÜMÜ DOĞRULADIM (B10 — devraldığın rakamı aktarmadan önce ölç):
//   Kayıt bugün:  olaylar_ek5.js · t:"1516-08-28"
//                 b:   "Halep'in Osmanlı hâkimiyetine girişi"
//                 yer: "Halep"          yer_id: "Halep"
//   O gün kırılan yerleşim (TASNIF ölçümü): Antakya · Deyrizor · Halep · Rakka
//   ⇒ `yer:` alanı DÖRDÜNDEN YALNIZ BİRİNİ taşıyor.
// 📌 Ve TASNIF'in eklediği ayrıntı Emre'nin gözünden kaçanı yakalamış:
//    Emre iki yer saymış (Deyrizor · Rakka), ÜÇÜNCÜSÜ (ANTAKYA) onun da
//    gözünden kaçmış. Şikâyet CANLI ve ölçülebilir.
// ⚠️ ÖLÇMEDİM: o dört yerleşimin `d:` başlangıç günlerini kendi elimle
//    açmadım — TASNIF'in kırılma listesini olduğu gibi devraldım. Bu satır
//    o yüzden "ölçtüm" değil "devraldım" diye duruyor.
{
  dosya: "data/olaylar_ek5.js",
  t: "1516-08-28",
  b: "Halep'in Osmanlı hâkimiyetine girişi",
  alan: "yer",
  mevcut: "Halep",
  yeni: "Halep, Antakya, Deyrizor, Rakka",
  gerekce: "Aynı gün d: dönemi başlayan dört yerleşimin dördü de başlıkta/yer alanında anılmalı; bugün yalnız Halep var. Emre Deyrizor ve Rakka'yı saydı, Antakya üçüncüsü.",
  degismez: "Bu bir METİN düzeltmesidir — hiçbir dönem tarihine dokunmuyor, Değişmez 1/2/2s sayaçlarını DEĞİŞTİRMEZ.",
  kaynak: "parti-emrelic-0019 H-0045 · PAKET 0019 TASNIF ölçümü"
},

// ═══════════════════════════════════════════════════════════════════════════
// H-0067 — 🔴 ŞİKÂYET BAYAT. UYGULANACAK BİR ŞEY YOK — KAYIT ZATEN DÜZELTİLMİŞ.
// ═══════════════════════════════════════════════════════════════════════════
// Emre'nin şikâyeti (13 Ağustos):
//   "Fuzûlî'nin kaside sunması Bağdat'ın fethinden ÖNCE görünüyor, anakronik"
// TASNIF'in ölçümü (21-29 Ağustos):
//   "madde metni 'Bağdat'ın fethi SONRASI' diyor ama TARİHİ 1534-06-01;
//    'Bağdat'ın fethi' ise 1534-12-04 ⇒ kayıt kendi cümlesine göre ALTI AY ERKEN"
// BENİM ÖLÇÜMÜM (2 Eylül 2026 — index.html'in yüklediği 67 dosya, 6115 madde):
//   olaylar_ek14.js  t = "1534-12-04"
//   b = "Fuzûlî'nin Bağdat'ın fethi sonrası Kanuni'ye kaside sunması"
//   olaylar.js       t = "1534-12-04"  "Bağdat'ın fethi — Irakeyn Seferi"
//   ⇒ İKİSİ ARTIK AYNI GÜNDE. Altı aylık iç çelişki KAPANMIŞ.
// ⚠️ ÖLÇMEDİM: bunu hangi commit'in düzelttiğini. `git log -S` ve
//    `git log -- <dosya>` bu depoda 2 dakikada dönmedi (12-14 MB'lık üretilmiş
//    dosyalar var). Yalnız "bugünkü değer 1534-12-04" diyorum; "şu commit
//    düzeltti" DEMİYORUM.
// 📌 M-1903 ⑥'nın tam vakası: "① git log — bu iş ZATEN YAPILMIŞ MI?"
//    Bu ölçüm yapılmasaydı kayıt İKİNCİ KEZ düzeltilecek ve "anakronizmi
//    giderdim" diye teslim edilecekti.
//
// 🟡 GERİYE KALAN TEK SORU — ve TASNIF onu zaten işaretlemişti:
//    "aynı güne konursa sıralama kronoloji oturumunun kararına kalır
//     (fetih maddesinden SONRA görünmesi lazım)."
//    İki madde artık aynı günde. Kaside maddesinin fetih maddesinden SONRA
//    sıralandığını ÖLÇMEDİM — bu bir `js/app.js` sıralama sorusu ve o dosya
//    benim değil. Koordinatöre soru olarak gidiyor.
{
  dosya: "data/olaylar_ek14.js",
  t: "1534-12-04",
  b: "Fuzûlî'nin Bağdat'ın fethi sonrası Kanuni'ye kaside sunması",
  alan: "—",
  mevcut: "1534-12-04",
  yeni: "DEĞİŞİKLİK YOK",
  hukum: "bayat",
  gerekce: "Şikâyetin tarif ettiği kusur (1534-06-01) bugünkü veride YOK; tarih zaten fetih gününe çekilmiş. Uygulanacak yama yok; bu kayıt 'ikinci kez düzeltilmesin' diye duruyor.",
  acik_kalan: "Aynı gündeki iki maddenin GÖRÜNME SIRASI ölçülmedi — kaside maddesi fetih maddesinden sonra mı sıralanıyor? js/app.js sorusu.",
  kaynak: "kendi ölçümüm, 2 Eylül 2026"
},

];
