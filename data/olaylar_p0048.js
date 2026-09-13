// =====================================================================
// PAKET 0048 — LURİSTAN 1591-92 / 1603 (Emre'nin kararı, 13 Eylül 2026,
// ikinci tur, oturumlar/FERHATPASA-SINIR-0913.md madde 3):
//   "Luristan: 1590'da Osmanlı ise Osmanlı gösterilir. Haritada renk
//    değişimi 1603 (TDV luristan). 1591-92 Şahverdi'nin Safevî'ye bağlılık
//    bildirmesi (Monshi) kronolojiye isyan maddesi olarak; kesin kayıp 1603
//    maddesi. Dayanak belge ne diyorsa odur — iki gelenek maddelerde
//    açıkça yazılır."
// Oturum: FERHATPASA-KARAR · rapor denetim/FERHATPASA-KARAR-UYGULA-0913.md
//
// 🔴 BU İKİ MADDE BUGÜN HARİTADA BİR KIRILMAYA OTURMUYOR (kırılmasız madde,
//   Değişmez 2t). Luristan yerleşimi bugün d:1590-03-21→1603-10-21 taşıyor;
//   renk değişimini 1603-01-01'e çeken yama KOŞU SONRASI önerisidir:
//   denetim/YAMA-FERHATPASA-BIRLESIK-0913.json (Luristan d→v, t 1603-01-01;
//   Nihâvend şık A t 1603-01-01). Yama inince (b) maddesi o kırılmayı kapatır.
//
// 🔴 D147 ÖLÇÜLDÜ VE BİR KEZ YAKALADI — (a) maddesinin günü 1591-01-01'den
//   1592-01-01'e TAŞINDI:
//   ilk yazım t:1591-01-01 → denetle.py --ayrinti önce/sonra farkı:
//     yerlesimler_asya.js kuyruğu 320 → 319 MADDESİZ · 2s KAPSAM DIŞI 357 → 356
//   sebep: aynı günde iki YABANCI kırılma — Haydarâbâd (Dekken) golkonda
//     s.f 1591-01-01 · Chilpancingo yeni-ispanya s.f 1591-01-01 — Luristan
//     maddesi onları SAHTE kapatıyordu.
//   ayrıca 1591-01-01 kaynağın penceresinin ÖNCESİNE düşüyordu: Monshi
//     '1000/1591-92' — Türk yılı Nevruz 1591'de, hicrî 1000 19 Ekim 1591'de
//     başlar. 1592-01-01 hicrî 1000'in İÇİNDEDİR (19 Eki 1591–7 Eki 1592).
//   1592-01-01'deki yabancı kırılmalar (Lâhîcan · Tatta · Hanoi …) zaten
//     olaylar_ek14.js 'Dâvud Ağa'nın hassa mimarbaşı olması' (aynı gün)
//     tarafından sayılıyor ⇒ bu madde yeni bir sahte kapanış ÜRETMEZ
//     (sonra-ölçümü: denetim/FERHATPASA-KARAR-UYGULA-0913.md).
//   (b) 1603-01-01: ±30 günde HİÇBİR kategoride (s/d/v/isg) kırılma yok.
// GÜN: kaynaklar YIL veriyor ⇒ YYYY-01-01 (§4).
// AD ALANI (§7): data/olaylar_p0048.js → window.OLAYLAR_P0048 (diskte yoktu).
// 🔴 index.html satırı koordinatörde — bağlanmadan CANLI DEĞİLDİR (D099).
//   (denetle.py olaylar*.js glob'uyla okur; Değişmez 2 evrenine BUGÜN girer.)
// =====================================================================

window.OLAYLAR_P0048 = [

{ t:"1592-01-01", k:"isyan", etiket:["isyan","siyaset"],
  b:"Luristan hâkimi Şâhverdi'nin Şah Abbas'a bağlılık bildirmesi",
  gun:"1000 (1591-92) — kaynak yalnız yılı veriyor",
  yer:"Luristan (Hürremâbâd)", yer_id:"Luristan",
  kisiler:"Şâhverdi Han, Şah I. Abbas",
  d:"1589'da Osmanlılara itaat ederek Bağdat beylerbeyinin tâbii olan Luristan hâkimi Şâhverdi, Safevî tarihçisi İskender Bey Münşî'nin anlatımına göre 1000 (1591-92) yılında Safevî tacına bağlılığını bildirmek zorunda kaldı. Aynı kaynak onun bu yıllarda iki taraf arasında gidip geldiğini, Hemedan valilerini rahatsız edip Burûcird'e akınlar yaptığını ve 1002 (1593-94) yılında Şah Abbas'ın Hürremâbâd'ı işgal edip şehre bir vali atadığını yazar. TDV İslâm Ansiklopedisi ise 1590 İstanbul Antlaşması'yla Osmanlı idaresine bağlanan Luristan'ın Safevîlere tam olarak bağlanmasını 1603 yılına koyar. İki gelenek farklı tarih verir; bu madde Safevî geleneğindeki bağlılık beyanını, 1603 maddesi kesin kaybı gösterir.",
  ic_not_d:"Emre kararı (13 Eylül 2026, ikinci tur, madde 3): 1591-92 beyanı ISYAN maddesi olarak yazılır, haritada renk değişimi TDV'nin 1603'üdür. ⇒ Bu madde bir toprak kırılmasına bağlı DEĞİLDİR (isyan maddesi olarak kasıtlı). Gün: Monshi 'In the year 1000/1591-92' — hicrî 1000 = 19 Ekim 1591–7 Ekim 1592 ⇒ 1592-01-01 yıl kodu hicrî yılın İÇİNDE (§4). İlk yazımda 1591-01-01 idi: hem kaynak penceresinin önüne düşüyordu hem de aynı gündeki iki yabancı kırılmayı (Haydarâbâd golkonda · Chilpancingo) sahte kapatıyordu (D147, denetle.py önce/sonra farkıyla ölçüldü) ⇒ taşındı. Monshi alıntıları bu oturumda YENİDEN OKUNMADI — denetim/YAMA-FERHATPASA-GUNEY-0913.json A3 ve OLCUM-NIHAVEND-BAGLANTI-0913.md üzerinden (D104); TDV luristan cümlesi bu oturumda okundu (Rıza Kurtuluş, c.27 s.227, 2003). 1589 itaati Kütükoğlu 1962 s.183 (rapor özeti, alinti_ozet). Iranica ATĀBAKĀN-E LORESTĀN ek bilgi: Şâhverdi 1003/1594-95'te yeniden atandı, 1006/1597-98'de öldürüldü (GUNEY raporu üzerinden).",
  kaynak:"Eskandar Beg Monshi, History of Shah ʿAbbas the Great, çev. R. M. Savory (Boulder 1978), II s.642-643: 'Sahverdi then became the vassal of the Ottoman governor of Baghdad … In the year 1000/1591-92 … Šāhverdī was forced to declare his allegiance to the Safavid crown' · s.643: 'Šāhverdī began to molest the governors of Hamadan and to make raids on Borüjerd' · s.644: 'the Shah … occupied Korramābād and made Mahdīgolī Khan Šāmlū governor of the city (1002/1593-94)' · Kütükoğlu, Osmanlı-İran Siyâsî Münâsebetleri I (1962) s.183 (Eyvân itaati 997/1589) · luristan (TDV): 'Bir ara 998'de (1590) İstanbul'da yapılan antlaşmaya göre Osmanlı idaresine bağlanan Luristan'ı Şah I. Abbas Safevîler'e tam olarak bağladı (1603).'",
  duygu:["✊"] },

{ t:"1603-01-01", k:"kayip", etiket:["toprak-kayip"],
  b:"Luristan'ın Safevîlere kesin olarak geçmesi",
  gun:"1603 — kaynak yalnız yılı veriyor",
  yer:"Luristan (Hürremâbâd), Nihâvend", yer_id:"Luristan",
  kisiler:"Şah I. Abbas",
  d:"1590 İstanbul (Ferhad Paşa) Antlaşması'yla Osmanlı idaresine bağlanan Luristan'ı Şah I. Abbas 1603'te Safevîlere tam olarak bağladı. Safevî tarihçisi İskender Bey Münşî ise Hürremâbâd'ın Şah Abbas tarafından daha önce, 1002 (1593-94) yılında işgal edilip şehre bir Safevî valisi atandığını yazar; iki gelenek arasındaki bu fark çözülmüş değildir. Aynı yıl Luristan'ın kuzeyindeki Osmanlı kalesi Nihâvend de Şah Abbas'ın eline geçti; Hemedan valisi Hasan Han kaleyi yerle bir etti.",
  ic_not_d:"Emre kararı (13 Eylül 2026, ikinci tur, madde 3-4): haritada Luristan'ın renk değişimi TDV luristan'ın 1603'ü; Nihâvend Luristan üzerinden 1603'e kadar Osmanlı toprağına BAĞLI (enklav değil). Yerleşim yaması koşu sonrası: denetim/YAMA-FERHATPASA-BIRLESIK-0913.json — Luristan v t:1603-01-01, Nihâvend d.t şık A 1603-01-01 (şık B: mevcut 1603-10-21 Tebriz günü, komşu-günü şartı ③ tutmuyor). Yama inene kadar bu madde kırılmasızdır (2t). ⚠️ olaylar_ek2.js t:1603-10-21 Tebriz maddesi 'Aynı tarihte elden çıkan diğer yerleşimler: Nahçıvan, Luristan' diyor — yama inince Luristan o listeden çıkmalı (dosya bende değil, koordinatöre bildirildi). Iranica NEHĀVAND yıkımı 1011/1602-03 verir — TDV nihavend--iran '1603'. Monshi alıntıları bu oturumda yeniden okunmadı (D104); TDV luristan ve nihavend--iran cümleleri bu oturumda okundu.",
  kaynak:"luristan (TDV, Rıza Kurtuluş, c.27 s.227): 'Bir ara 998'de (1590) İstanbul'da yapılan antlaşmaya göre Osmanlı idaresine bağlanan Luristan'ı Şah I. Abbas Safevîler'e tam olarak bağladı (1603).' · nihavend--iran (TDV, İbrahim Sarıçam, c.33 s.98-99): 'Şah I. Abbas 1603'te şehri ele geçirdi' · Eskandar Beg Monshi, çev. Savory (1978), II s.644: 'the Shah … occupied Korramābād and made Mahdīgolī Khan Šāmlū governor of the city (1002/1593-94)' · Encyclopaedia Iranica, «Nehāvand»: 'Shah ʿAbbās's governor of Hamadan, Ḥasan Khan, razed the fort to the ground'",
  duygu:["😔"] },

];
