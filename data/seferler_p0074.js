// -*- coding: utf-8 -*-
// SEFERLER_P0074 — SEFER-OK-0070 oturumu, 21 Eylül 2026 · DALGA-0074 H-0011
// Konu: 1828-1829 Osmanlı-Rus savaşında harekât okları.
//
// OKUYUCU: js/app.js seferKayitlariniTopla() — /^SEFERLER(_[A-Za-z0-9_]+)?$/ deseni.
// AD ALANI (§7): data/seferler_p0074.js → window.SEFERLER_P0074. index.html satırı
// koordinatörün; bağlanmadan CANLI DEĞİLDİR (D099).
//
// 🟢 15 Ekim 2026 GÜNCELLEME (KARAR-UYG-1015, KAYNAK-1015/G1 0074/H-0011): aşağıdaki "yazılmadı"
// hükmü TDV'ye göreydi. Güzergâhı veren akademik kaynak bulundu — Lukyanoviç N. A., Описание
// Турецкой войны 1828 и 1829 годов, Ч.1 (SPb 1844) s.164 (sayfa görüntüsü okundu): Greig'in filosu
// 21 Nisan'da Sivastopol'dan çıktı, 2 Mayıs'ta Anapa'ya vardı; ertesi gün Taman yarımadasından
// Perovski'nin kolu geldi. İKİ OK yazıldı (dosyanın sonunda). Teslim günü TDV'nin Gregoryen
// 24 Haziran 1828'i (Lukyanoviç 12 Haziran J) — DOKUNULMADI.
// ESKİ HÜKÜM (TDV'ye göre): ANAPA İÇİN OK YAZILMADI ve sebebi ölçüldü. Emre'nin maddesi (H-0011)
// "24 Haziran 1828 — Anapa'nın Osman Paşa tarafından Ruslara teslimi" idi.
// TDV `anapa` teslim GÜNÜNÜ veriyor — *"Osman Paşa 24 Haziran 1828'de Ruslar'a
// teslim oldu."* — ama Rus kuvvetlerinin NEREDEN ve NASIL geldiğini SÖYLEMİYOR.
// Aynı maddede "karadan ve denizden yapılan hücumlar sonucu yaklaşık 6000 Rus
// askeri kaleye girdi" cümlesi VAR, fakat o 1809 kuşatmasına aittir — başka
// yılın cümlesini 1828'e taşımak D211 ⑧'in yasakladığı şeydir. TDV
// `edirne-antlasmasi` da yalnız sonucu sayıyor: *"Ruslar Tuna'yı aşarak İbrâil'i
// almışlar, Anapa, Kars ve Ahıska'yı ele geçirmişlerdi."*
// ⇒ Kaynak güzergâh vermiyor; beyansız temsilî hat yazmak yerine BOŞ bırakıldı.
//
// KOORDİNAT: atlasın kendi yerleşim noktaları (koordinatörün 0073'teki hükmü —
// ok bir ölçüm değil gösterimdir, haritadaki şehir işaretiyle çakışmalı).
// Nokta yanlışsa ok da yanlış olur; bu bedel bilinerek kabul edildi.

window.SEFERLER_P0074 = [

{ id:"p0074-dibic-silistre-edirne-1829",
  ad:"General Diebitsch'in Silistre'den Edirne'ye ilerleyişi (1829)",
  tur:"sefer", sonuc:"yenilgi", taraf:"dusman", devlet:"rusya",
  f:"1829-06-18", t:"1829-08-22",
  tarih_hassasiyet:"f: GÜN — Silistre'nin Dibiç'e teslimi (kronoloji maddesi 1829-06-18 — ESBE 18 Haziran J; KUTU-H6-1015 eski G 1829-06-30'dan döndürdü, m.28; TDV ilerleyişin Silistre'nin alınmasından SONRA başladığını söylüyor, çıkış günü ayrıca verilmiyor) · t: GÜN — Rus kuvvetlerinin Edirne'ye girişi",
  kaynak:"edirne-antlasmasi (TDV): \"Silistre'yi ele geçiren General Diebitch Edirne'ye doğru ilerlemeye başlamış\" · \"Edirne önündeki Rus kuvvetleri herhangi bir mukavemetle karşılaşmadan şehre girmişler (22 Ağustos 1829), Kırklareli ile Lüleburgaz'ı da işgal etmişlerdi\"",
  kesinlik:"İSTASYON yalnız iki uç: Silistre ve Edirne. Kırklareli ile Lüleburgaz kaynakta ADIYLA geçiyor ama SIRASI ve GÜNÜ yok — üstelik Lüleburgaz Edirne'nin doğusunda kalıyor, yani 'yol üstünde' varsaymak güzergâhı UYDURMAK olurdu; ikisi de yola KONMADI. Ara menziller (Şumnu, Aydos, Karnabat) bu cümlelerde geçmiyor.",
  yol:[[27.26,44.117],[26.556,41.677]] },

{ id:"p0074-greig-sivastopol-anapa-1828",
  ad:"Greig filosunun Sivastopol'dan Anapa'ya seferi (1828)",
  tur:"sefer", sonuc:"yenilgi", taraf:"dusman", devlet:"rusya",
  f:"1828-05-03", t:"1828-05-14",
  tarih_hassasiyet:"f/t GÜN — Lukyanoviç Jülyen 21 Nisan (çıkış) / 2 Mayıs (varış) = Gregoryen 3 Mayıs / 14 Mayıs 1828 (EMRE KARARI #10 (KARARLAR-EMRE-1015): Jülyen gün +12 ile Gregoryen'e çevrildi)",
  ic_not_takvim:"Jülyen 21 Nisan 1828 (Lukyanoviç) = Gregoryen 3 Mayıs 1828 · Jülyen 2 Mayıs 1828 = Gregoryen 14 Mayıs 1828",
  kaynak:"Lukyanoviç N. A., Описание Турецкой войны 1828 и 1829 годов, Ч.1 (SPb 1844) s.164: 'эскадра Черноморскаго флота, подъ начальствомъ вице-адмирала Грейга, Апрѣля 21-го, вышла изъ Севастополя. Задержанная противными вѣтрами, она прибыла къ Анапѣ Мая 2-го' · Sytin VE «Анапа»: filo Menşikov'un çıkarma kuvvetiyle gönderildi · KAYNAK-1015/G1 · KARAR-UYG-1015",
  kesinlik:"deniz rotası düz çizgi: kaynak ara durak vermiyor. Uçlar atlasın kendi noktaları (Akyar (Sivastopol) · Anapa).",
  yol:[[33.5254,44.6138],[37.316,44.894]] },

{ id:"p0074-perovski-taman-anapa-1828",
  ad:"Perovski kolunun Taman yarımadasından Anapa'ya yürüyüşü (1828)",
  tur:"sefer", sonuc:"yenilgi", taraf:"dusman", devlet:"rusya",
  f:"1828-05-15", t:"1828-05-15",
  tarih_hassasiyet:"t GÜN — Lukyanoviç: filonun varışının ertesi günü (Jülyen 3 Mayıs = Gregoryen 15 Mayıs 1828); ÇIKIŞ günü kaynakta YOK, f = t (EMRE KARARI #10 (KARARLAR-EMRE-1015): Jülyen gün +12 ile Gregoryen'e çevrildi)",
  ic_not_takvim:"Jülyen 3 Mayıs 1828 (Lukyanoviç) = Gregoryen 15 Mayıs 1828",
  kaynak:"Lukyanoviç N. A., Описание Турецкой войны 1828 и 1829 годов, Ч.1 (SPb 1844) s.164: 'На другой день пришелъ къ ней съ полуострова Тамана небольшой отрядъ пѣхоты, подъ командою флигель-адъютанта, полковника Перовскаго' (Karadeniz Kazak alayları, Taman garnizon alayı) · KAYNAK-1015/G1 · KARAR-UYG-1015",
  kesinlik:"Taman noktası 'Taman yarımadası'nın TEMSİLCİSİDİR — kaynak yarımadadaki çıkış yerini vermiyor; düz çizgi.",
  yol:[[36.7172,45.2029],[37.316,44.894]] }

];
