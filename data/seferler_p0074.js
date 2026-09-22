// -*- coding: utf-8 -*-
// SEFERLER_P0074 — SEFER-OK-0070 oturumu, 21 Eylül 2026 · DALGA-0074 H-0011
// Konu: 1828-1829 Osmanlı-Rus savaşında harekât okları.
//
// OKUYUCU: js/app.js seferKayitlariniTopla() — /^SEFERLER(_[A-Za-z0-9_]+)?$/ deseni.
// AD ALANI (§7): data/seferler_p0074.js → window.SEFERLER_P0074. index.html satırı
// koordinatörün; bağlanmadan CANLI DEĞİLDİR (D099).
//
// 🔴 ANAPA İÇİN OK YAZILMADI ve sebebi ölçüldü. Emre'nin maddesi (H-0011)
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
  f:"1829-06-30", t:"1829-08-22",
  tarih_hassasiyet:"f: GÜN — Silistre'nin Dibiç'e teslimi (kronoloji maddesi 1829-06-30; TDV ilerleyişin Silistre'nin alınmasından SONRA başladığını söylüyor, çıkış günü ayrıca verilmiyor) · t: GÜN — Rus kuvvetlerinin Edirne'ye girişi",
  kaynak:"edirne-antlasmasi (TDV): \"Silistre'yi ele geçiren General Diebitch Edirne'ye doğru ilerlemeye başlamış\" · \"Edirne önündeki Rus kuvvetleri herhangi bir mukavemetle karşılaşmadan şehre girmişler (22 Ağustos 1829), Kırklareli ile Lüleburgaz'ı da işgal etmişlerdi\"",
  kesinlik:"İSTASYON yalnız iki uç: Silistre ve Edirne. Kırklareli ile Lüleburgaz kaynakta ADIYLA geçiyor ama SIRASI ve GÜNÜ yok — üstelik Lüleburgaz Edirne'nin doğusunda kalıyor, yani 'yol üstünde' varsaymak güzergâhı UYDURMAK olurdu; ikisi de yola KONMADI. Ara menziller (Şumnu, Aydos, Karnabat) bu cümlelerde geçmiyor.",
  yol:[[27.26,44.117],[26.556,41.677]] }

];
