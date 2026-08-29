// -*- coding: utf-8 -*-
// YERLESIMLER_SINIR_GUNEY -- UYGULAMA-1, SINIR YERLEŞİMİ (oturumlar/SINIR-YERLESIMI.md)
// KOL: GÜNEY — Suriye (Fransa mandası) + Irak (İngiliz mandası) sınırları.
// Emre'nin fikri: sınırın iki yakasına eşlenik yerleşim koy, petek kenarı
// aralarından geçsin (motor zaten dik-ortay kullanıyor, CLAUDE.md §2).
//
// 🔒 KOŞU CANLI (00:32'de başladı) — arac/'a dokunulmadı. Bu dosya girdi.py'ye
// HENÜZ BAĞLANMADI (ORHANGAZİ bağlayacak, koşu bitince) — yazılan noktalar BU
// KOŞUYA GİRMEZ, bir sonrakine kalır. Kusur değil GECİKME.
//
// 🔴 3 km MÜKERRER TARAMASI yapıldı (py arac/_yer_ara.py) — üçü de KAYIT YOK
// çıktı, ekleniyor.

window.YERLESIMLER_SINIR_GUNEY = [

// ── YENİ ÇİFT: Tell Abyad (Suriye) ↔ Akçakale (Türkiye, ZATEN VERİDE VAR) ──
// Akçakale (36.71,38.95) veride ZATEN mevcut ve fransa-cumhuriyet'e komşu
// devlette kayıtlı OSMANLI. Yalnız Tell Abyad EKSİKTİ.
{ad:"Tell Abyad", tur:"kasaba", lat:36.6975, lon:38.9567, g:0, k:4, m:null,
 sinir:true,
 s:[{f:"1281-01-01", t:"1516-08-24", d:"memluk"}, {f:"1918-10-26", t:"1923-10-29", d:"fransa-cumhuriyet"}],
 d:[{f:"1516-08-24", t:"1918-10-26"}],
 kaynak:"Wikipedia 'Tell Abyad' (WebFetch ile doğrulandı, koordinat 36°41'51\"N 38°57'24\"E) + Rakka/Akçakale'nin bölgesel deseni (aynı vilayet, aynı Mercidabık/1918 fetih-kayıp tarihleri) — TDV bu taneciği (küçük demiryolu istasyonu) kapsamıyor, §4 tanecik boşluğu.",
 neden:"sınır çifti: Akçakale (OSMANLI, veride zaten var) ile ~30 km — 1921 Ankara İtilâfnâmesi sınırı Bağdat Demiryolu hattını izler, Tell Abyad-Akçakale tam bu hattın üzerinde 'bölünmüş şehir' (Wikipedia: 'Tell Abyad ... constitutes a divided city with Akçakale in Turkey'). BİR SONRAKİ KOŞUYA GİRER."
},

// ── YENİ ÇİFT: Ras al-Ayn (Suriye) ↔ Ceylanpınar (Türkiye, YENİ) ──
// İkisi de EKSİKTİ — aynı kentin 1921'de ikiye bölünmesiyle doğan çift,
// en net örneklerden biri (Bağdat Demiryolu istasyonu tam sınırda).
{ad:"Ras al-Ayn (Re'sülayn)", tur:"kasaba", lat:36.8503, lon:40.0706, g:0, k:4, m:null,
 sinir:true,
 s:[{f:"1281-01-01", t:"1515-01-01", d:"akkoyunlu"}, {f:"1918-10-30", t:"1923-10-29", d:"fransa-cumhuriyet"}],
 d:[{f:"1515-01-01", t:"1918-10-30"}],
 kaynak:"Wikipedia 'Ras al-Ayn' (WebFetch ile doğrulandı, koordinat 36°51'01\"N 40°04'14\"E: 'Following the Treaty of Ankara, Ras al-Ayn became a divided city when its northern part, today's Ceylanpınar, was ceded to Turkey'). Pre-1918 zincir bölgesel model — komşu Nusaybin'in (37.077,41.215) aynı akkoyunlu→Osmanlı(1515) deseni izlendi, TDV bu taneciği kapsamıyor.",
 neden:"sınır çifti: Ceylanpınar (bu dosyada, aşağıda) ile ~3-4 km — İKİSİ DE AYNI ŞEHRİN 1921'de bölünmüş yarısı, bu görevin en net örneği. BİR SONRAKİ KOŞUYA GİRER."
},

{ad:"Ceylanpınar", tur:"kasaba", lat:36.867, lon:40.048, g:0, k:4, m:null,
 sinir:true,
 s:[{f:"1281-01-01", t:"1515-01-01", d:"akkoyunlu"}, {f:"1918-10-30", t:"1921-10-20", d:"fransa-cumhuriyet"}],
 d:[{f:"1515-01-01", t:"1918-10-30"}, {f:"1921-10-20", t:"1923-10-29"}],
 kaynak:"Wikipedia 'Ras al-Ayn' maddesi (WebFetch): 'its northern part, today's Ceylanpınar, was ceded to Turkey' — 1921 Ankara İtilâfnâmesi ile. Tarih deseni Nusaybin'in (37.077,41.215) VERİDEKİ KENDİ kaydıyla BİREBİR aynı (d:1918-10-30→1921-10-20 fransa-cumhuriyet arası, sonra tekrar Türkiye) — aynı demiryolu hattı, aynı 1918-1921 Fransız işgal-tahliye deseni.",
 neden:"sınır çifti: Ras al-Ayn (bu dosyada, yukarıda) ile ~3-4 km, sınır aralarından geçiyor — Bağdat Demiryolu'nun tam üzerinde bölünmüş tek şehrin iki yarısı. BİR SONRAKİ KOŞUYA GİRER."
}

];

// ═══════════════════════════════════════════════════════════════════════
// BULGU — VAR OLAN İYİ ÇİFTLER, YENİ KAYIT DEĞİL (yalnız RAPOR, bu diziye
// YAZILMADI çünkü isimler zaten yerlesimler*.js'te var — mükerrer olurdu).
// Bunlara `sinir:true` eklemek ORHANGAZİ'nin/yerlesimler.js sahibinin işi:
// ═══════════════════════════════════════════════════════════════════════
//   Suruç (OSMANLI) ↔ Ayn el-Arab/Kobani (fransa)     11,5 km  🟢 oturmuş
//   Kilis (OSMANLI) ↔ Azez/A'zâz (fransa)              15,7 km  🟢 oturmuş
//   Payas (OSMANLI) ↔ İskenderun (fransa)              19,0 km  🟢 oturmuş
//   Birecik (OSMANLI) ↔ Cerablus/Jarablus (fransa)     22,5 km  🟢 oturmuş
//   Dörtyol (OSMANLI) ↔ İskenderun (fransa)            29,0 km  🟢 oturmuş
//   Silopi (OSMANLI) ↔ Malikiye/Derik (fransa)         29,8 km  🟢 oturmuş
//   Silopi (OSMANLI) ↔ Zaho (ingiltere)                21,9 km  🟢 oturmuş — IRAK sınırı
