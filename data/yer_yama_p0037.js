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

// ═══════════════ H-0004 · kronoloji yaması (aile A — yama_uygula.js) ═══════════════
// kuru koşu 2 Eylül: EŞLEŞTİ, "yazilacak" listesinde (olaylar_ek5.js · 1).
{ dosya:"olaylar_ek5.js", t:"1860-05-30", b:"Cebel-i Lübnan'da Dürzî-Mârûnî iç savaşı ve Şam olayları",
  eksik_nokta:{ ad:"Deyrülkamer (Deir el-Kamer)", enlem:33.696, boylam:35.565,
                kaynak:"TDV `lubnan` (gövdesi okundu): 'Mayıs ayında Sayda yakınlarında öldürülen iki Dürzî bölgenin bilinen en kanlı Dürzî-Mârûnî çatışmasına yol açtı ... çatışmalar haziran boyunca devam etti'; Deyrülkamer Cebel-i Lübnan emirliğinin merkezi ve 1860 katliamının ana sahnesi — yer seçimi genel akademik/coğrafî bilgi. Koordinat: coğrafî bilgi." },
  not:"p0037/H-0004 — Emre: 'bu olayın haritadaki yerini işaretlemeli'. Madde olaylar_ek5.js'te, `yer_id` YOK (ölçüldü: grep 0), `yer:` alanı 'Cebel-i Lübnan, Şam' iki yer sayıyor. Tek yerleşim seçilemeyeceği için `yer_kon` (petek almaz, toprak boyamaz) tercih edildi; Şam'daki Temmuz olayları ayrı bir yer olarak maddenin metninde duruyor. Kaynak: TDV `lubnan` (eksik_nokta.kaynak içinde). ⚠️ Bu kayıtta ÜST DÜZEY `kaynak:` alanı KASTEN YOK: `_sahiplik_uygula.py` `kaynak` gören her kaydı toplayıp `ad` bulamayınca SESSİZCE atlıyordu (1.MURAT'ın 2 Eyl 01:05 bulgusu). Kayıt aile A'nındır (`yama_uygula.js`, dosya+t+b anahtarı), aile C onu görmemeli." }

];
