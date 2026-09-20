// -*- coding: utf-8 -*-
// =====================================================================
// MISIR 1801 — Fransız işgalinin iki teslim günü
// Oturum: SEFER-OK-0070 (Opus) · 20 Eylül 2026 · koordinatör hükmü M-4735
//
// AD ALANI (§7): data/olaylar_misir1801.js → window.OLAYLAR_MISIR1801
// index.html satırı BAĞLI DEĞİL (koordinatör ekler) — bağlanmadan CANLI
// DEĞİLDİR (D099). `denetle.py` olaylar*.js glob'uyla okur, yani denetim
// bağlanmadan da görür.
//
// 🔴 NİÇİN YAZILDI: NAPOLYON-MISIR-0070 yaması (denetim/YAMA-NAPOLYON-MISIR-
// 0070.json) işgal bitişini tek blok güne (1801-10-09) bağlı hâlden çıkarıp
// kaynaklı iki teslim gününe bağladı; bu, Değişmez 2i'de İKİ AÇIK KIRILMA
// doğurdu (1801-06-27 Kahire+Süveyş · 1801-08-31 İskenderiye, tavan 3/3 tam
// sınırda). Kırılmaların maddesi kronolojide YOKTU — eski veri gerçek teslim
// günlerini hiç taşımadığı için senkron "tam" görünüyordu.
//
// 🔴 KAYNAK (§4): TDV'de karşılık BULUNAMADI ve bu ÖLÇÜLDÜ — `misir` maddesinin
// gövdesinde 1801 yılı GEÇMİYOR, `kahire` ve `iskenderiye` maddeleri bu iki
// teslime gün vermiyor. Bu yüzden akademik kaynak kullanıldı ve künyesi
// `kaynak:` alanına AÇIKÇA yazıldı: Fondation Napoléon, "Correspondance
// générale de Napoléon Bonaparte, tome 3 — Pacifications, 1800-1802"
// kronolojisi (napoleon.org). Alıntılar GERÇEKTEN AÇILAN gövdeden.
//
// ⚠️ MÜKERRER DEĞİL, TANECİK: `data/olaylar_ek5.js:308`teki 1801-10-09
// "Mısır'ın Fransızlardan tahliyesi" maddesi üç yıllık işgalin KAPANIŞINI
// anlatıyor ve zaten "önce Kahire, ardından İskenderiye teslim alındı" diyor.
// Bu iki madde o cümlenin İKİ AYRI GÜNÜNÜ kaynağıyla yazıyor; 1801-10-09
// maddesine DOKUNULMADI.
// =====================================================================

window.OLAYLAR_MISIR1801 = [

{ t:"1801-06-27", kesinlik:"gun", k:"fetih", kapsam:"ic", onem:4,
  etiket:["savas","toprak-kazanc","konu-askeri"],
  b:"Kahire'nin Fransızlardan teslim alınması — Belliard'ın kapitülasyonu",
  gun:"27 Haziran 1801",
  yer:"Kahire, Süveyş", yer_id:"Kahire",
  kisiler:"General Augustin-Daniel Belliard",
  d:"Osmanlı ve İngiliz kuvvetlerinin Mısır'a yönelik ortak harekâtı sırasında Kahire'deki Fransız kuvvetlerinin kumandanı General Belliard kapitülasyonu imzaladı. Kahire ile birlikte, Fransızların 1798 Kasımında ele geçirdiği Süveyş de Fransız denetiminden çıktı. İşgalin kapanışı iki ay sonra İskenderiye'de tamamlanacak, ülkeden tahliye ise ekim ayına kadar sürecekti.",
  kaynak:"Fondation Napoléon, \"Chronologie de la Correspondance générale de Napoléon Bonaparte, tome 3 — Pacifications, 1800-1802\" (napoleon.org) — 27 juin (8 messidor): « Le général Belliard signe la capitulation des troupes françaises en Égypte. » · TDV'DE KARŞILIĞI YOK (ölçüldü: 'misir' maddesinin gövdesinde 1801 geçmiyor; 'kahire' maddesi Fransız işgaline gün vermiyor) — §4 gereği akademik kaynak künyesiyle yazıldı. Süveyş'in aynı güne bağlanması: denetim/YAMA-NAPOLYON-MISIR-0070.json (gün komşudan: Kahire kapitülasyonu)",
  duygu:["🎉"] },

{ t:"1801-08-31", kesinlik:"gun", k:"fetih", kapsam:"ic", onem:4,
  etiket:["savas","toprak-kazanc","konu-askeri"],
  b:"İskenderiye'nin Fransızlardan teslim alınması — Menou'nun kapitülasyonu",
  gun:"31 Ağustos 1801",
  yer:"İskenderiye", yer_id:"İskenderiye",
  kisiler:"General Jacques-François Menou",
  d:"Şark Ordusu'nun başkumandanı General Menou 17 Ağustos'ta İskenderiye'de kuşatıldı; 21 Ağustos'ta İngilizler şehrin yakınındaki Marabout kalesini aldı ve 31 Ağustos'ta Menou ordunun kapitülasyonunu imzaladı. Fransız birliklerinin Fransa'ya dönüşü 2 Eylül'de başladı. Böylece 1798 Haziranında İskenderiye'ye çıkarak başlayan işgal, başladığı şehirde sona erdi.",
  kaynak:"Fondation Napoléon, \"Chronologie de la Correspondance générale de Napoléon Bonaparte, tome 3 — Pacifications, 1800-1802\" (napoleon.org) — 17 août (29 thermidor): « Menou est assiégé à Alexandrie. » · 21 août (3 fructidor): « Les Anglais prennent le fort du Marabout, près d'Alexandrie. » · 31 août (13 fructidor): « À Alexandrie, Menou signe la capitulation de l'armée d'Orient. » · 2 septembre (15 fructidor): « Début du rapatriement en France de l'armée d'Orient. » · TDV'DE KARŞILIĞI YOK (ölçüldü: 'iskenderiye' maddesi 1801 teslimine gün vermiyor) — §4 gereği akademik kaynak künyesiyle yazıldı",
  duygu:["🎉"] }

];
