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

// ═══════════ KUZEY AMERİKA İÇİ — Büyük Ovalar (M-0660'ta bildirilen
// karmaşık zincir, ARTIK ARAŞTIRILDI) ═══════════
// Tek kayıtla 1281-1923 kapatılamayacağı doğrulandı — İKİ AŞAMALI zincir:
// Apaçi (Plains Apache, en az 1100 CE'den beri bölgede — TDV konuya hiç
// değinmiyor, akademik kaynağa gidildi) → Komançi (~1750'den) → ABD
// (1875'ten, Quanah Parker'ın teslimi).

{ ad:"Comanchería (Güney Büyük Ovalar)", tur:"konfederasyon", lat:34.9700, lon:-101.6800, g:0, k:2,
  baskent:"merkezi yok — göçebe, son direniş noktası Palo Duro Kanyonu",
  s:[{f:"1281-01-01",t:"1750-01-01",d:"apaci-ovalar"},
     {f:"1750-01-01",t:"1875-01-01",d:"komanci"},
     {f:"1875-01-01",t:"1923-10-29",d:"abd"}] },
// kaynak: ① Encyclopaedia Britannica "Apache" md. — "The ancestral Apache
//         probably did not reach the Southwest until at least 1100 CE...
//         semisedentary Plains Apache farmers were living along the Dismal
//         River in what is now Kansas as recently as 1700. When the horse
//         and gun trades converged in the central Plains about 1750,
//         guerrilla-style raiding by ... the Comanche greatly increased.
//         The remaining Plains Apache were severely pressured and retreated."
//         ② Encyclopedia.com "Comanche" md. — "Between 1750 and 1875
//         Comanche groups spread across central and western Texas, eastern
//         New Mexico, southeastern Colorado, southwestern Kansas, and
//         western Oklahoma. This 24,000-square-mile area became known as
//         the Comanchería." "Important Dates: 1874-75: The Comanche make
//         their last stand; Quanah Parker and his followers are the last
//         Comanches to surrender." İKİ KAYNAK 1750 ve 1874/75 sınırlarında
//         BİREBİR UYUŞUYOR. Gün düzeyi kesinlik yok (ikisi de yalnız yıl
//         veriyor), YYYY-01-01. Britannica "Quanah Parker" biyografisi
//         teslimi "Haziran 1874'ten yaklaşık bir yıl sonra" diyor (≈1875
//         ortası) ama gün vermiyor — 1875-01-01 muhafazakâr (erken) tarafa
//         çekildi, tam gün için üçüncü kaynak gerekir.
// TDV NOTU: TDV'nin "amerika" maddesi Büyük Ovalar'ı hiç anmıyor (yalnız
//         Kuzey Amerika'nın güneydoğusu/Mississippi ve Kanada tarafı) —
//         gerçek taneciklik/coğrafya boşluğu, akademik kaynağa geçildi.
// 🔴 İKİ YENİ KÜNYE BORCU: `apaci-ovalar` ve `komanci` devletler.js'te
//         YOK — TAHTAYA bildirilecek, kendim yazmıyorum (§④).
// k gerekçesi: göçebe/merkezsiz siyasi yapı, sabit başkent yok — Mapuche/
//         Cherokee ile aynı tier — k:2.

];
