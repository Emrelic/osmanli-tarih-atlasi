// =====================================================================
// OLAYLAR_ORTADOGU_0919 — Değişmez 2 borcu: yerlesimler_nokta_ortadogu_0917.js
// NOKTA-ORTADOGU oturumu · 19 Eylül 2026 · görevlendiren 1.MURAT (M-4571)
// =====================================================================
// NİÇİN VAR: nokta dosyası bağlanınca (bellekte sınandı) Değişmez 2'de üç
// `v:` bitişi ±30 günde maddesiz kalıyordu:
//   1801-01-01 Hurma + Türabe (Mekke Şerifliği v: biter)   en yakın madde 66 g
//   1816-01-01 Türabe (Mısır v: biter)                      57 g
//   1819-08-13 Dilem · Havta · Leylâ (Mısır v: biter)       80 g
// Öneri denetim/YAMA-NOKTA-ORTADOGU-KRONO-0917.json'daydı (D4-ORTADOGU);
// üçü veride YOKTU (grep: olaylar*/kronoloji* — mükerrer değil).
//
// KAYNAK OKUMASI (bu oturumda yeniden, metinden): Lorimer, Gazetteer of the
// Persian Gulf, Oman and Central Arabia I/1 (1915) — archive.org
// in.ernet.dli.2015.206962 tam metni. TDV taif/suudiler/necid gövdeleri.
// Hassasiyet: 1801 ve 1816 kaynakta YIL; 1819-08-13 kaynakta GÜN.
// ⚠️ 1801 ve 1816 kırılmalarının kendi tarihi de YIL kodudur (YYYY-01-01);
//    gerçek olay yılın içinde bir gündür — kırılma ile madde aynı kaba
//    tarihi paylaşıyor, gün uydurulmadı (CLAUDE.md §4).
// ⚠️ HENÜZ CANLI DEĞİL: index.html/app.js bağlaması 1.MURAT'ta.
// =====================================================================
window.OLAYLAR_ORTADOGU_0919 = [

// ── 1. TÂİF ÇEVRESİ VEHHÂBÎ NÜFUZUNA GİRDİ (1801) ─────────────────────
{ t:"1801-01-01", kesinlik:"yil", b:"Tâif çevresi kabileleri Vehhâbî nüfuzuna girdi — Türabe ve Hurma Mekke Şerifliği'nden koptu", tur:"toprak-kayip", onem:3, dunya:2, kapsam:"dis", yer_id:"Türabe",
  gun:"1801 (kaynak yalnız yıl veriyor)", yer:"Tâif çevresi (Türabe, Hurma)",
  etiket:["toprak-kayip","konu-siyasi","konu-din"],
  d:"Mekke Şerifi Gālib'e bağlı Tâif çevresindeki kabileler 1801'de Vehhâbî nüfuzuna girdi; Dir'iye emîri onları Şerif'in eniştesi ve düşmanı olan bedevî şeyhi Osman el-Mudâyifî'nin idaresine verdi. Doğudaki Türabe ve Hurma vahaları da bu kuşakta Suûdî tarafına geçti. Bu, Vehhâbîlerin Şubat 1803'te Tâif'i ve ardından Mekke'yi almasının öncülüydü.",
  kaynak:"Lorimer, Gazetteer I/1 (1915) s.1055: 'In 1801 the tribes in the vicinity of Taif fell under the influence of the Wahhabis and were placed by the Amir in charge of … Othman-al-Madhaifah' · taif (TDV: 'Şubat 1803'te Tâif'i ele geçirerek yağmaladı') — Türabe/Hurma adıyla anılmıyor, 'Tâif çevresi' hükmü 82 km doğuya taşındı (🟡 bölgeden yere hüküm)" },

// ── 2. MISIR GARNİZONLARI GÜNEY HİCAZ'DAN ÇEKİLDİ (1816) ──────────────
{ t:"1816-01-01", kesinlik:"yil", b:"Mısır garnizonları güney Hicaz'da Türabe, Bîşe ve Rânye'den çekildi", tur:"toprak-kayip", onem:3, dunya:2, kapsam:"dis", yer_id:"Türabe",
  gun:"1816 (Kasım 1815 ile Ağustos 1816 arası; gün bulunamadı)", yer:"Türabe, Bîşe, Rânye",
  etiket:["askeri","toprak-kayip","konu-askeri"],
  d:"Tosun Paşa'nın Vehhâbîlerle barışıp Kasım 1815'te Kahire'ye dönmesinden sonraki aylarda güney Hicaz'da karışıklık çıktı; Kavalalı Mehmed Ali Paşa'nın garnizonları Bîşe, Rânye ve Türabe'den geri çekilmek zorunda kaldı. İbrâhim Paşa'nın yeni sefer için Ağustos 1816'da Kahire'den ayrılması bu çekilişin ardından geldi. Türabe'yi Dir'iye'nin düşüşüne (1818) kadar kimin yönettiği kaynakta yazılı değil.",
  kaynak:"Lorimer, Gazetteer I/1 (1915) s.1085 (D4-ORTADOGU '1086' yazmıştı; tam metinde sayfa başlığı 1085): 'the Egyptian garrisons had been obliged to retire from Bishah, Ranyah and Turabah. In August 1816 Ibrahim Pasha … left Cairo' — çekilişin yılı çıkarımla 1816 (Tosun'un 7 Kasım 1815 dönüşü ile Ağustos 1816 arası); kaynak yıl yazmıyor, sıralama veriyor" },

// ── 3. MISIR GARNİZONU HARC'TAN ÇEKİLDİ (13 AĞUSTOS 1819) ─────────────
{ t:"1819-08-13", b:"Mısır garnizonu Harc'taki Süleymiye'den çekilip Menfûha'ya ulaştı — Necid'in güneyi başsız kaldı", tur:"toprak-kayip", onem:3, dunya:2, kapsam:"dis", yer_id:"Dilem (Harc)",
  gun:"13 Ağustos 1819", yer:"Harc (Süleymiye, Dilem), Menfûha, Eflâc",
  etiket:["askeri","toprak-kayip","konu-askeri"],
  d:"Dir'iye'nin yıkılışından sonra İbrâhim Paşa'nın Harc'taki Süleymiye'ye koyduğu Mısır karakolu, Paşa'nın geri çekilme emriyle yola çıkmadan önce Dilem'in dört şeyhini bir ziyafette öldürttü ve bedevîlerce kuşatıldı. Kurtarılan garnizon 13 Ağustos 1819'da Menfûha'ya ulaştı ve Kasîm'e yürüyüş başladı. Necid'in güneyinde merkezî bir otorite kalmadı; Suûd ailesinin girişimleri 1824'e kadar sonuç vermedi.",
  kaynak:"Lorimer, Gazetteer I/1 (1915) s.1091-1092: 'On the 13th of August the Sulaimiyah garrison reached Manfuhah in safety' (dipnot: Dilem şeyhlerinin öldürülmesi) · suudiler (TDV: '1824 yılına kadar bir başarı elde edemediler') · necid (TDV: 1819'da İbrâhim Paşa'nın dönüşünden sonra idarî düzenlemeler zayıfladı)" },

];
