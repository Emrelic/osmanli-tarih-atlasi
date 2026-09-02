// -*- coding: utf-8 -*-
// YER_YAMA_P0037 — PAKET-0037 oturumu (Fable), 2 Eylül 2026, 1.MURAT sevki (M-1903 · M-1930)
//
// 🔴 BU DOSYA VERİ DEĞİL, YAMADIR. Motor okumaz, index.html'e bağlanmaz.
//    Uygulayıcılar: `py arac/_sahiplik_uygula.py` (ad + v dizisi)
//                   `node arac/yama_uygula.js`    (dosya + t + b + eksik_nokta → yer_kon)
//    Verilen dizi, o kaydın o alanının TAM VE NİHAİ hâlidir; verilmeyen alanlara dokunulmaz.
//
// ⚠️ BU DOSYADA YALNIZ ÇAKIŞMASIZ KAYITLAR VAR. Kuru koşu (2 Eylül 00:20) 25 sahiplik kaydımın
//    16'sını AD ÇAKIŞMASI diye durdurdu: `_sahiplik_uygula.py` çakışmayı ALANA değil ADA bakarak
//    kuruyor — `yer_yama_romanya.js` (s:) · `yer_yama_gece_v3.js` (isg:) · `yer_yama_uyg2.js` ·
//    `yer_yama_ok110.js` · `yer_yama_p35.js` aynı adları başka alanlarda yamalıyor. Onları burada
//    bıraksaydım hem benimkiler hem ONLARINKİ inmezdi. ⇒ Çakışanlar `data/yama_p0037_bekleyen.js`e
//    alındı (glob dışı ad, uygulayıcı okumaz); koordinatör kararıyla `yer_yama_p0037b.js`
//    adıyla geri gelir. Ayrıntı: o dosyanın başlığı ve teslim raporu.
//
// İÇİNDEKİLER:
//   H-0003  Mısır işgali 1832-1841 — "benek benek": Halep · Şam · Adana · Maraş · Urfa yazılı,
//           ARALARINDAKİ Antep · Kilis · Payas · Humus yazısızdı ⇒ koyu kırmızı adalar.
//           (Yumurtalık · Mersin · Urfa · Maraş → bekleyen dosyada, ad çakışması)
//   H-0004  Dürzî-Mârûnî iç savaşı maddesine yer_kon (Deyrülkamer) — kronoloji yaması.
//
// DEĞİŞMEZ-2 (v: günleri Osmanlı sayılır) — dördü de ÖLÇÜLDÜ, çekirdekte maddeli:
//   1832-07-08 Humus Muharebesi (0 gün) · 1832-07-29 Belen bozgunu (0 gün) ·
//   1841-02-25 Mısır ordusu Suriye ve Çukurova'yı boşalttı (0 gün).

window.YER_YAMA_P0037 = [

// ═══════════════ H-0003 · Mısır (İbrâhim Paşa) işgali — boşluk dolgusu ═══════════════

{ ad:"Antep",
  v:[{f:"1832-07-29",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}],
  kaynak:"TDV `gaziantep` gövdesinde Mısır dönemi cümlesi BULUNAMADI (167 paragraf tarandı). Dayanak dolaylı ve açık: Halep eyaleti livâsı (TDV `kilis`: 'Halep eyaletine bağlı livâlardan biri'); Halep 15 Temmuz 1832'de, Belen 29 Temmuz 1832'de düştü (TDV `ibrahim-pasa-kavalali`, gövdesi okundu); külliyattaki Halep·Adana·Maraş kayıtları aynı dönemi taşıyor. Bitiş 1841-02-25 külliyatın Halep/Adana günü (çekirdek maddesi: 'Mısır ordusu Suriye ve Çukurova'yı boşalttı').",
  gerekce:"p0037/H-0003 'benek benek': Halep ve Maraş işgalli, ARADAKİ Antep yazısız ⇒ koyu kırmızı ada. Komşu deseni; kaynak dolaylı, gizlenmedi." },

{ ad:"Kilis",
  v:[{f:"1832-07-29",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}],
  kaynak:"TDV `kilis` (gövdesi okundu): Halep eyaletine bağlı livâ merkezi; Mısır dönemi cümlesi YOK. Halep'in düşüşü 15 Temmuz 1832, Belen 29 Temmuz 1832 (TDV `ibrahim-pasa-kavalali`). Bitiş külliyatın Halep günü.",
  gerekce:"p0037/H-0003 — Halep ile Antep arasında yazısız nokta, komşu deseni." },

{ ad:"Payas",
  v:[{f:"1832-07-29",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}],
  kaynak:"Belen muharebesi 29 Temmuz 1832 (TDV `ibrahim-pasa-kavalali`) Payas'ın hemen kuzeyindeki geçitte; Adana bölgesi 1833-1840 İbrâhim Paşa'da (TDV `adana`, gövdesi okundu: '1833-1840 yıllarında ... İbrâhim Paşa'nın eline geçmiş, Londra Antlaşması ile de 1841'de tekrar Osmanlı Devleti'ne bağlanmıştır'). Bitiş külliyatın Adana günü.",
  gerekce:"p0037/H-0003 — Adana ile Antakya arasında yazısız nokta, komşu deseni." },

{ ad:"Humus",
  v:[{f:"1832-07-08",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}],
  kaynak:"TDV `ibrahim-pasa-kavalali` (gövdesi okundu): '16 Haziran'da Şam'ı zaptedip Humus üzerine yürüdü ve burada Halep Valisi Mehmed Paşa idaresindeki öncü Osmanlı kuvvetlerini yendi (8 Temmuz)'. TDV `humus` 302. Bitiş külliyatın Şam/Hama günü. Çekirdekte 1832-07-08 'Humus Muharebesi' maddesi VAR (0 gün).",
  gerekce:"p0037/H-0003 — Şam ve Hama işgalli, aradaki Humus yazısız ⇒ Suriye'nin ortasında koyu kırmızı ada." },

// ═══════════════ K4 · Vidin — ödünç gün düzeltmesi (1.MURAT kararı, 2 Eyl 06:05) ═══════════════
// Vidin'in Avusturya dönemi Niş'in gününden (1689-09-24) başlıyordu; TDV `vidin` "1689 Ekiminde"
// diyor. Gün yok, ay var ⇒ 1689-10-01 + kesinlik:"ay" (VERI-YAPISI.md:171 — 🔜 alan, uygulayıcı/
// girdi.py "bilinmeyen dönem alanı" uyarısı basabilir, BEKLENEN). Maddesi data/olaylar_p0037.js'te
// (önce madde, sonra dönem — K4 sırası). `v:` (1878 Bulgaristan Prensliği) dokunulmadı.
// kesinlik YALNIZ belirsiz uca: s:avusturya döneminin f'si; d: döneminin t'si aynı gün, ikinci kez
// damgalanmadı (tek belirsiz tarih, tek damga).
{ ad:"Vidin",
  s:[{f:"1281-01-01",t:"1396-10-01",d:"bulgaristan"},{f:"1689-10-01",t:"1690-09-09",d:"avusturya",kesinlik:"ay"},{f:"1908-10-05",t:"1923-10-29",d:"bulgaristan-kralligi"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}],
  d:[{f:"1396-10-01",t:"1402-07-28",y:"ilhak"},{f:"1413-07-05",t:"1689-10-01"},{f:"1690-09-09",t:"1878-07-13"}],
  kaynak:"TDV `vidin` (gövdesi okundu): '1689 Ekiminde hıristiyan birliğiyle yapılan savaşlarda Margrave Ludwig von Baden, Fethülislâm ve Florentin ile birlikte Vidin'i savaşmadan ele geçirdi. Fakat bir yıl geçmeden ... Vidin'i geri almayı başardı.' Gün yok ⇒ ayın 1'i + kesinlik:'ay'. Öteki dönemler mevcut kaydın kendisi, dokunulmadı. Bitiş 1690-09-09 Niş'in günü (TDV vidin 'bir yıl geçmeden' — ay/gün yok), ÖDÜNÇ olarak kaldı, kayda geçti.",
  gerekce:"K4 (1.MURAT, 2 Eyl): 1689-09-24 Niş'ten ödünç gündü, TDV Ekim diyor ⇒ düzelt. Değişmez-2: 1689-10-01'e olaylar_p0037.js maddesi (0 gün) + çekirdek 1689-09-24 (7 gün). denetim/BULGU-NIS-1689.md §1d." },

// ═══════════════ H-0004 · kronoloji yaması (aile A — yama_uygula.js) ═══════════════
// kuru koşu 2 Eylül: EŞLEŞTİ, "yazilacak" listesinde (olaylar_ek5.js · 1).
{ dosya:"olaylar_ek5.js", t:"1860-05-30", b:"Cebel-i Lübnan'da Dürzî-Mârûnî iç savaşı ve Şam olayları",
  eksik_nokta:{ ad:"Deyrülkamer (Deir el-Kamer)", enlem:33.696, boylam:35.565,
                kaynak:"TDV `lubnan` (gövdesi okundu): 'Mayıs ayında Sayda yakınlarında öldürülen iki Dürzî bölgenin bilinen en kanlı Dürzî-Mârûnî çatışmasına yol açtı ... çatışmalar haziran boyunca devam etti'; Deyrülkamer Cebel-i Lübnan emirliğinin merkezi ve 1860 katliamının ana sahnesi — yer seçimi genel akademik/coğrafî bilgi. Koordinat: coğrafî bilgi." },
  not:"p0037/H-0004 — Emre: 'bu olayın haritadaki yerini işaretlemeli'. Madde olaylar_ek5.js'te, `yer_id` YOK (ölçüldü: grep 0), `yer:` alanı 'Cebel-i Lübnan, Şam' iki yer sayıyor. Tek yerleşim seçilemeyeceği için `yer_kon` (petek almaz, toprak boyamaz) tercih edildi; Şam'daki Temmuz olayları ayrı bir yer olarak maddenin metninde duruyor. Kaynak: TDV `lubnan` (eksik_nokta.kaynak içinde). ⚠️ Bu kayıtta ÜST DÜZEY `kaynak:` alanı KASTEN YOK: `_sahiplik_uygula.py` `kaynak` gören her kaydı toplayıp `ad` bulamayınca SESSİZCE atlıyordu (1.MURAT'ın 2 Eyl 01:05 bulgusu). Kayıt aile A'nındır (`yama_uygula.js`, dosya+t+b anahtarı), aile C onu görmemeli." }

];
