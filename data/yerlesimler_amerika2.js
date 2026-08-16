// =====================================================================
// NOKTA AMERİKA — Kol A (nokta), And dağları + Kuzey Amerika içi
// İŞÇİ oturum: NOKTA-AMERIKA · görev tahta M-0624/M-0629/M-0638
// Şartname: BES-ALTYAPI.md (unsur ②) + oturumlar/NOKTA-AMERIKA.md
// İlerleme günlüğü: oturumlar/NOKTA-AMERIKA-ILERLEME.md
//
// ⚠️ Bu, önceki turdaki data/yerlesimler_0ee15e.js'ten AYRI bir dosya —
//   koordinatör M-0638'de bu adı verdi, kendi seçmedim.
// ⚠️ Dosyayı girdi.py'ye BEN BAĞLAMIYORUM — koordinatör bağlar.
//
// ═══════════ YAZIM ÖNCESİ ÖLÇÜM ═══════════
// `data/yerlesimler_amerika.js` (138 kayıt, yerlesimler_0ee15e.js dahil)
// "And dağları" kabaca kutusunda (lat -20..10, lon -80..-65) ZATEN 21
// nokta taşıyor (Cusco, Quito, Potosí, La Paz, Sucre, Arequipa, Bogotá,
// Tunja, Mérida-Venezuela, vb.) — İnka çekirdeği ve büyük başkentler
// KAPLI. "Kuzey Amerika içi"nde İrokua/Powhatan/Creek/Cherokee/Choctaw/
// Pueblo var ama TAMAMI doğu/güneybatı — Büyük Ovalar (Sioux/Lakota,
// Comanche, Pawnee) ve Kanada içi TAMAMEN BOŞ. Buraya GERÇEK boşluklar
// ekleniyor, mükerrer üretilmiyor.

window.YERLESIMLER_AMERIKA2 = [

{ ad:"Huamanga (Ayacucho)", tur:"sehir", lat:-13.1588, lon:-74.2239, g:1, k:1, kur:"1539-01-09",
  s:[{f:"1539-01-09",t:"1824-12-09",d:"ispanyol-peru"},
     {f:"1824-12-09",t:"1923-10-29",d:"peru-cumhuriyeti"}] },
// kaynak: ① Encyclopaedia Britannica "Ayacucho" md. — "In 1539 the
//         conquistador Francisco Pizarro conquered the area ... and named
//         the city Huamanga."
//         ② Encyclopedia.com "Ayacucho" md. — "Founded by Francisco
//         Pizarro on 9 January 1539 as San Juan de la Frontera, it was
//         moved several miles to its present site on 25 April 1540 by
//         Alonso de Alvarado." İki kaynak UYUMLU (yıl); gün Encyclopedia.
//         com'dan alındı, Britannica çelişmiyor. 1540 taşınması AYRI kayıt
//         AÇTIRMADI — İspanyol varlığı kesilmedi, planlı yer değişimi
//         (Panama City örneğiyle aynı mantık). 1824-12-09 Ayaçuço
//         Muharebesi — mevcut Lima kaydıyla (yerlesimler_amerika.js)
//         AYNI kırılma tarihi, tutarlılık için.
// k gerekçesi: And dağları iç kesiminde Lima-Cusco güzergâhının kilit
//         durağı, kolonyal dönemde önemli idari/madencilik merkezi
//         (1677 Peru'nun ilk üniversitelerinden San Cristóbal de Huamanga
//         buradan) — k:1.

];
