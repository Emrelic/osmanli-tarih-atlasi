// =====================================================================
// olaylar_p0043kirim.js — KITA 18 · paket 0044 · IS① (Anapa) ve IS② (H-0001)
// window.OLAYLAR_P0043KIRIM · KITA 14 kronolojinin genel sahibi, KITA 18
// YALNIZ BU DOSYAYA yazar (oturumlar/KITA-18-KIRIM-ANAPA-0044.md).
// =====================================================================
//
// ── H-0001 CEVABI — Kızıkermen'in 1526'da doğrudan Osmanlı olması ────
// Emre: "Kırım'da bir parça toprak katılmış görünüyor, doğru mu yanlış
// mı, kronoloji maddesi yok, bunu çözelim." (görsel H-0001-1.png,
// 1526-01-01, Or Kapı'nın kuzeyinde Kızıkermen'e uzanan koyu kırmızı
// çıkıntı.)
// ⇒ ÖLÇÜLDÜ: KIRILMA DOĞRU. `data/yerlesimler_ok106.js:167-169`
// Kızıkermen (Gazi Kerman) kaydı `d:[{f:"1526-01-01",t:"1774-07-21"}]`
// taşıyor — kaynağı IEU "Beryslav" maddesi: "in 1526 assumed direct
// control of the right bank with Kazi-Kermen as its northern outpost."
// Yani "parça" gerçek: bu tarihte Kızıkermen, Kırım Hanlığı'nın (bozkır,
// `s:{d:"kirim"}`) rengi/statüsünden DOĞRUDAN OSMANLI'ya geçiyor — Or
// Kapı'nın hâlâ `v:` (tâbi Kırım) kalmasıyla renk farkı doğuyor.
// 🔴 AMA kaydın kendi yorumu şunu itiraf ediyor: bu gün Değişmez 2'yi
// yalnız TESADÜFEN geçiyor — en yakın madde (±0 gün) Pîrî Reis'in
// Kitâb-ı Bahriye'yi genişletip Kanûnî'ye sunması, Kızıkermen'le
// ALAKASIZ. Gerçek bir kronoloji maddesi hiç yazılmamıştı. Aşağıdaki
// madde o boşluğu KAYNAKLI olarak kapatıyor (kaynak, yerleşim kaydının
// kendi `kaynak:` alanından AYNEN taşındı, D104).
//
// ── ANAPA — 1791-92 ve 1828-29 boşlukları (denetim/ARASTIRMA-KIRIM-0912.md) ──
// data/yerlesimler.js:532 Anapa'nın `d:` dizisi 1781-1829 arası
// KESİNTİSİZ; TDV `anapa` iki ara kesinti veriyor (bkz.
// denetim/YAMA-ANAPA-0913.json — isg: önerisi, veri YAZILMADI, koşu
// 10 donuk). Aşağıdaki iki madde bu kesintilerin KENDİSİNİ, `isg:`
// yaması henüz inmeden, kaynaklı olarak kayda geçiriyor.
//
window.OLAYLAR_P0043KIRIM = [

{ t:"1526-01-01", k:"kazanc", etiket:["toprak-kazanc"],
  b:"Kızıkermen (Gazi Kerman) ve Dinyeper'in sağ kıyısının doğrudan Osmanlı denetimine girmesi",
  gun:"1526 (IEU: yalnız yıl, gün yok)",
  yer:"Kızıkermen, Dinyeper ağzı", yer_id:"Kızıkermen (Gazi Kerman)",
  kisiler:"Kanûnî Sultan Süleyman",
  d:"Kırım Hanlığı'nın 15. yüzyıl ortasından beri elinde tuttuğu Kızıkermen kalesi ve Dinyeper'in sağ kıyısı, bu tarihte Osmanlı Devleti'nin doğrudan denetimine girdi; kale, bozkırın kuzey ucundaki bir Osmanlı ileri karakoluna dönüştü. Bahçesaray ve Or Kapı çevresindeki Kırım Hanlığı toprağından farklı olarak, Kızıkermen'in idaresi doğrudan Osmanlı'daydı.",
  kaynak:"bulunamadı — TDV'de müstakil madde YOK (kizikermen/gazikerman/gazi-kerman 302, kapsayıcı `ozu` maddesi Dinyeper kalelerini anmıyor). Dayanak: Internet Encyclopedia of Ukraine (CIUS, University of Alberta), madde \"Beryslav\": \"in 1526 assumed direct control of the right bank with Kazi-Kermen as its northern outpost.\" (alıntı yerleşim kaydından AYNEN taşındı, data/yerlesimler_ok106.js:167)",
  duygu:["🎉"] },

{ t:"1791-07-26", k:"kayip", etiket:["toprak-kayip","savas"],
  b:"Anapa'nın Ruslar tarafından işgali (üçüncü kuşatma)",
  gun:"26 Temmuz 1791",
  yer:"Anapa, Kuban kıyısı", yer_id:"Anapa",
  kisiler:"",
  d:"1781'de Ferah Ali Paşa yönetiminde inşa edilen Anapa kalesi, savaş süresince Ruslar tarafından üç defa kuşatıldı; üçüncü kuşatma sonunda 26 Temmuz 1791'de işgal edildi. İşgal geçiciydi — Yaş Antlaşması'yla (1792) Kafkasya'da eski sınırlar kabul edildiğinden kale Osmanlı Devleti'ne geri verildi.",
  kaynak:"TDV `anapa` (200, gövdesi okundu): \"Savaş süresince Ruslar tarafından üç defa kuşatılan Anapa üçüncü kuşatma sonunda 26 Temmuz 1791'de işgal edildi\" · \"[Yaş Antlaşması ile] Kafkasya'da eski sınırlar kabul edildiğinden Osmanlı Devleti'ne geri verildi.\" (alıntı denetim/ARASTIRMA-KIRIM-0912.md'den AYNEN taşındı, D104)",
  duygu:["😔"] },

{ t:"1828-06-24", k:"kayip", etiket:["toprak-kayip","savas"],
  b:"Anapa'nın Osman Paşa tarafından Ruslara teslimi",
  gun:"24 Haziran 1828",
  yer:"Anapa, Kuban kıyısı", yer_id:"Anapa",
  kisiler:"Osman Paşa",
  d:"1828-29 Osmanlı-Rus Savaşı'nın açılış safhasında Anapa kuşatıldı ve kaledeki Osmanlı kuvvetleri Osman Paşa kumandasında 24 Haziran 1828'de Ruslara teslim oldu. Bu kez teslim kalıcı oldu: ertesi yıl imzalanan Edirne Antlaşması'yla (14 Eylül 1829) Anapa ve Kafkasya resmen Osmanlı hâkimiyetinden çıktı.",
  kaynak:"TDV `anapa` (200, gövdesi okundu): \"Osman Paşa 24 Haziran 1828'de Ruslar'a teslim oldu\" · \"1829 Edirne Antlaşması ile de Anapa ve Kafkasya Osmanlı hâkimiyetinden çıktı.\" (alıntı denetim/ARASTIRMA-KIRIM-0912.md'den AYNEN taşındı, D104)",
  duygu:["😔"] }

];
