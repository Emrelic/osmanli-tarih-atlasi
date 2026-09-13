// =====================================================================
// PAKET 0051 — VERI-KIRIM (14 Eylül 2026, 1.MURAT sevki · Emre kararı D)
// Rapor: denetim/VERI-KIRIM-0914.md · öncül: denetim/ARASTIRMA-KIRIM2-0913.md
//
// NİÇİN: YAMA-KIRIM2-0913 uygulanınca üç kırılma KENDİ olayını istiyor:
//   1480-01-01  Hacıbey  litvanya-buyuk-dukalik → kirim     (çekirdekte ±30 gün madde YOK)
//   1585-01-01  Voronej  __BOSLUK__ → rusya                 (±0 madde olaylar_ek2.js akçe tağşişi — ALAKASIZ)
//   1596-01-01  Belgorod __BOSLUK__ → rusya                 (±30 gün madde YOK)
//
// 🔴 TARİH KAYNAKTAN (CLAUDE.md §4 "ATLAS REFERANS DEĞİLDİR"). Üç kaynak da
//   YALNIZ YIL veriyor ⇒ YYYY-01-01; gün uydurulmadı.
// Kaynak: Internet Encyclopedia of Ukraine (CIUS, University of Alberta),
//   encyclopediaofukraine.com — 14 Eylül 2026'da bu oturumca yeniden okundu.
// AD ALANI (§7): data/olaylar_p0051.js → window.OLAYLAR_P0051
// 🔴 index.html satırı BAĞLI DEĞİL (koordinatör ekler) — bağlanmadan CANLI
//   DEĞİLDİR (D099). denetle.py olaylar*.js glob'uyla okur.
// =====================================================================

window.OLAYLAR_P0051 = [

// ── Hacıbey 1480 ─────────────────────────────────────────────────────
{ t:"1480-01-01", k:"fetih", kapsam:"ic", etiket:["toprak-kazanc","konu-askeri"],
  b:"Hacıbey (Kaçibey) kalesinin Litvanya'nın elinden çıkması",
  gun:"1480", kesinlik:"yil",
  yer:"Hacıbey (Odessa), Karadeniz'in kuzeybatı kıyısı",
  yer_id:"Hacıbey (Odessa)",
  d:"Karadeniz'in kuzeybatı kıyısındaki Kaçibey limanı, 15. yüzyılın başında Litvanya büyük dükü Vytautas tarafından tahkim edilmişti. 1480'de kale Litvanya'nın elinden çıktı ve Hacıbey adını aldı. Kıyı, 15. yüzyılın sonunda Osmanlı'ya tâbi Kırım Hanlığı'nın denetimine geçti; bölgenin doğrudan Osmanlı idarî teşkilatına bağlanması ise 1538'dir.",
  ic_not_gun:"IEU 'Odesa' yalnız yıl verir ('In 1480 the fortress was captured…'); gün bulunamadı, §4 gereği 1480-01-01.",
  ic_not_d:"🔴 KAYNAK ÇELİŞKİSİ (hafif), SAKLANMADI: IEU 'Odesa' kaleyi 1480'de 'the Turks'ün aldığını yazıyor; IEU 'Ochakiv' kuzey kıyının 15. yy sonunda 'Crimean Khanate' denetimine geçtiğini yazıyor; TDV 'bucak' Osmanlı idarî teşkilatını 1538'e koyuyor. Atlas 1480-1538'i Kırım (gevşek himaye) çiziyor; 'Türkler' ifadesinin Osmanlı mı Kırım Tatarları mı olduğu bu kaynaklarla çözülmedi. TDV hacibey/hocabey/odesa/odessa slugları 302 ÖLÜ; ozu/akkirman/bucak Hacıbey'i anmıyor.",
  kaynak:"Internet Encyclopedia of Ukraine (CIUS), maddeler 'Odesa' ve 'Ochakiv' · TDV bucak (1538)" },

// ── Voronej 1585 ─────────────────────────────────────────────────────
{ t:"1585-01-01", k:"kurulus", kapsam:"dis", etiket:["toprak-kazanc","konu-askeri"],
  b:"Moskova'nın Voronej'de bozkıra karşı ileri garnizon kurması",
  gun:"1585", kesinlik:"yil",
  yer:"Voronej, Don havzası, vahşi bozkırın kuzey kenarı",
  yer_id:"Voronej",
  d:"16. yüzyılın sonunda bugünkü Sloboda Ukrayna'sı ve Don'un yukarı havzası, Tatarların Moskova'ya akınlarda geçtiği ıssız bir vahşi bozkırdı. Moskova hükümeti bu bozkırda bir dizi ileri garnizon kurdu; Voronej bunlardan biri olarak 1585'te kuruldu. Kale, sonraki on yıllarda Belgorod ve Kursk ile birlikte Moskova'nın güney savunma hattının ilk halkalarından oldu.",
  ic_not_gun:"IEU 'Slobidska Ukraine' yalnız yıl verir ('…Orel, Livny, and Voronezh (1585)'); gün bulunamadı, §4 gereği 1585-01-01. Aynı gündeki olaylar_ek2.js 'Büyük tağşiş' maddesi kırılmayı tesadüfen kapatıyordu, alakasız.",
  ic_not_d:"IEU parantezi Orel, Livny ve Voronej'i aynı yıla koyuyor; bu madde yalnız Voronej'i tarihliyor. TDV voronej 302 ÖLÜ. Atlas 1441-1585'i __BOSLUK__ çiziyor (kaynak Kırım tasarrufu yazmıyor).",
  kaynak:"Internet Encyclopedia of Ukraine (CIUS), madde 'Slobidska Ukraine'" },

// ── Belgorod 1596 ────────────────────────────────────────────────────
{ t:"1596-01-01", k:"kurulus", kapsam:"dis", etiket:["toprak-kazanc","konu-askeri"],
  b:"Moskova'nın Belgorod, Oskol ve Kursk'u bozkırda ileri garnizon olarak kurması",
  gun:"1596", kesinlik:"yil",
  yer:"Belgorod, Oskol, Kursk — Sloboda Ukrayna bozkırı",
  yer_id:"Belgorod",
  d:"Moskova hükümeti Kırım akınlarına karşı güney sınırını ileri taşıyarak 1596'da Belgorod, Oskol ve Kursk'u vahşi bozkırda garnizon noktaları olarak kurdu. Belgorod bu tarihten itibaren bir kale kasabası oldu ve sonraki yüzyılda uzanacak 300 kilometrelik Belgorod savunma hattının merkezi hâline geldi.",
  ic_not_gun:"IEU 'Slobidska Ukraine' ('Belgorod, Oskol, and Kursk (1596)') ve IEU 'Belgorod' ('From 1596 it was a fortress town…') yalnız yıl verir; gün bulunamadı, §4 gereği 1596-01-01.",
  ic_not_d:"IEU 'Belgorod' şehrin ilk anılışını 1237'ye koyuyor; 1441-1596 arası yerleşim sürekliliği ÖLÇÜLEMEDİ. Kursk atlasta ayrı zincir taşıyor (litvanya → moskova), bu madde onun kırılmasını tarihlemez. TDV belgorod 302 ÖLÜ.",
  kaynak:"Internet Encyclopedia of Ukraine (CIUS), maddeler 'Slobidska Ukraine' ve 'Belgorod'" },

// ── Don Kazak Ordası 1570 ────────────────────────────────────────────
// 🆕 Sevkte YOKTU: ③ D dönüşümü Don bozkırı (Sal) · Donets bozkırı · Çerkask'ın
//   kirim→don-kazak geçişini s:→s:'den v: bitişine çevirdi ⇒ Değişmez 2 kırılması
//   doğdu (1570-01-01, en yakın madde 203 gün). Tahta M-3902'de bildirildi.
{ t:"1570-01-01", k:"siyaset", kapsam:"ic", etiket:["siyaset","konu-siyasi","konu-diplomasi"],
  b:"IV. İvan'ın Don kazaklarına gramotası — Don Kazak Ordası'nın ilk güvenilir kaydı",
  gun:"1570", kesinlik:"yil",
  yer:"Don ve Kuzey Donets bozkırı, Razdory, Azak yolu",
  yer_id:"Çerkask (Razdory)",
  kisiler:"IV. İvan, İvan Novosiltsev",
  d:"Don üzerinde kazakların varlığına dair bilgiler 16. yüzyılın ortasından başlar. Rus askerî ansiklopedisine göre Don Kazak Ordası'nın kıdemi 1570'ten sayılır: o yıl Çar IV. İvan, Kuzey Donets'te yaşayan kazaklara bir gramota göndererek Azak üzerinden Osmanlı sultanına elçi olarak yollanan İvan Novosiltsev'e yardım etmelerini istedi ve karşılığında onları ödüllendirmeyi vaat etti. Bu, Don kazaklarının Moskova devletine hizmetine dair ilk güvenilir kayıttır. Kazakların başlıca merkezi önce Yukarı Razdory, sonra Çerkassk oldu.",
  ic_not_gun:"İki kaynak da yalnız yıl verir; gramotanın günü bulunamadı, §4 gereği 1570-01-01. Atlasın don-kazak künyesi f:1570-01-01 DAYANAK ALINMADI; yıl kaynağa denk geldi.",
  ic_not_d:"⚠️ Madde bir ÖRGÜTLENME/TANINMA kaydını tarihliyor, bir toprak devrini değil: kaynaklar Don bozkırının 1570'te Kırım'ın gevşek nüfuzundan çıktığını SÖYLEMİYOR. Atlasın 1502-1570 kirim → 1570 don-kazak modeli kaynağa bu madde ile bağlanmış sayılmaz (oturumlar/KIMLIK-DON-KAZAK.md: '1502 → 1570 nogay … kirim DEĞİL, ölçülmeli' notu hâlâ açık borç). ESBE 'Козачество' Çerkassk'ın 1570'te kurulduğunu 'bazı haberlere göre' diye temkinle anıyor; o cümle yazılmadı. TDV azak yalnız 'Kazaklar' der, Don/Zaporog ayırmaz.",
  kaynak:"Военная энциклопедия (Sytin, 1911-1915), madde 'Донское казачье войско' ('Старшинство войска считается с 1570 г.' — Novosiltsev gramotası) · ESBE 'Козачество' (imza В. М—н): 'уже в 1570 г. царем Иваном Грозным была отправлена грамота' (ru.wikisource, 14 Eyl 2026 okundu)" },

];
