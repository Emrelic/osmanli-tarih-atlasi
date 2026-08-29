// -*- coding: utf-8 -*-
// ═══════════════════════════════════════════════════════════════════════
// YER_YAMA_GECE_V3 — GECE PARTİSİ, VERİ kovası 3/3 (devir)
// window.YER_YAMA_GECE_V3   (§7: dosya adındaki ayırt edici parça değişken adında da)
// Oturum: UYGULAMA-3 · 30 Ağustos 2026 · koordinatör ORHANGAZİ (M-1718 devir)
// Şartname: oturumlar/GECE-VERI.md, son 10 madde. Ölçüm/karar detayı:
// denetim/BULGU-UYGULAMA-3.md.
// 🔒 KOŞU CANLI — bu dosya `arac/`e dokunmuyor, `data/*.js` güvenli.
//    `neden:` alanına yazıldığı gibi bu kayıtlar BİR SONRAKİ koşuya girer.
// ═══════════════════════════════════════════════════════════════════════
//
// TEK KONU: 0037/H-0008 — "Rusya savaştan sonra Eflak/Boğdan'a girip işgal
// ediyorsa taralı gösterilmeli, açık/koyu kırmızının ortasında birden Rus
// toprağı görmek algısal problem." Altyapı (`isg:` örtüsü) HAZIR, VERİ eksik.
//
// ÖLÇÜM: Bükreş (Eflak başkenti) ve Yaş (Boğdan başkenti) `isg:` HİÇ
// taşımıyor — oysa bazı sınır kaleleri (Akkirman, Kili, Hotin: 1806→1812-05-28;
// İbrail: 1809-12-02→1812-05-28 VE 1828-06-23→1829-09-14) zaten `isg:`
// kayıtlı. İki başkent (en görünür noktalar) bu örtüden dışarıda kalmış.
//
// TDV `eflak` + `bogdan` (gövdeleri okundu): 1828-1829 savaşından sonra
// "Eflak harp tazminatı ödeninceye kadar (1834) Rus işgali altında kaldı";
// Boğdan'da "1828-1829 savaşı sırasında Ruslar Memleketeyn'i tekrar işgal
// ettiler" (General Kiselev idaresi, 1830 anayasası). Gün/ay TDV'de yok —
// CLAUDE.md §4 gereği YYYY-01-01 kullanıldı. 1806-1812 için bitiş tarihi
// (1812-05-28, Bükreş Antlaşması) veride ZATEN kullanılan kesin tarih;
// başlangıç için mevcut Akkirman kaydındaki 1806-11-30 örneği izlendi
// (savaşın fiilen başladığı ay, TDV'nin kendisi gün vermiyor).
//
// 🔴 KAPSAM DIŞI BIRAKILAN — açıkça: 1848-49 Rus müdahalesi (Balta Limanı
// öncesi) BURAYA YAZILMADI; TDV yalnız "1848 İaşi ayaklanması sonrası Rus
// işgali → Balta Limanı Antlaşması" diyor, kesin başlangıç/bitiş günü
// bulamadım — `kaynak:"bulunamadı"` demek yerine EKSİK BIRAKMAYI seçtim,
// tahmin üretmedim.
// 🔴 KAPSAM DIŞI — Rusçuk · Silistre · Bender · İsmail · Vidin · Niğbolu ·
// Yergöğü · Turnu Severin (Tuna hattı kaleleri, aynı 1806-1812 işgali):
// VERİ SAHİPLİK'in (denetim/kume/olculdu.md, H-0097/H-0100) ölçtüğü ama
// "tarihler TDV'den doğrulanmadı" diye AÇIK bıraktığı dokuz nokta — benim
// 10 maddelik kovamın dışında, koordinatöre AYRICA bildiriliyor (tahta).
// ═══════════════════════════════════════════════════════════════════════

window.YER_YAMA_GECE_V3 = [

  {
    ad: "Bükreş",
    isg: [
      { f: "1806-11-30", t: "1812-05-28", d: "rusya", kaynak: "eflak" },
      { f: "1828-05-01", t: "1834-01-01", d: "rusya", kaynak: "eflak" }
    ],
    kaynak: "TDV `eflak` (gövde okundu): '...Eflak harp tazminatı ödeninceye " +
            "kadar (1834) Rus işgali altında kaldı.' 1806-1812 penceresi " +
            "sınır kalelerindeki (Akkirman/Kili/Hotin) ZATEN VAR OLAN isg: " +
            "deseniyle (bitiş 1812-05-28, Bükreş Antlaşması) hizalandı.",
    neden: "Bükreş, Eflak Voyvodalığı'nın (`s:`) başkenti — Rusya'nın 1806-12 " +
           "ve 1828-34 işgalleri sırasında fiilen Rus idaresi altındaydı ama " +
           "`isg:` örtüsü hiç taşımıyordu; harita ortasında koyu kırmızı " +
           "(tâbi/vassal Osmanlı) gösteriyordu, tam da H-0008'in şikâyet " +
           "ettiği algısal problem. Bu koşuya girmez, bir sonrakine kalır."
  },

  {
    ad: "Yaş",
    isg: [
      { f: "1806-11-30", t: "1812-05-28", d: "rusya", kaynak: "bogdan" },
      { f: "1828-05-01", t: "1834-01-01", d: "rusya", kaynak: "bogdan" }
    ],
    kaynak: "TDV `bogdan` (gövde okundu): '1828-1829 Osmanlı-Rus savaşı " +
            "sırasında Ruslar Memleketeyn'i tekrar işgal ettiler' (General " +
            "Kiselev idaresi, 1830 anayasası). 1806-1812 penceresi Bükreş " +
            "ile aynı gerekçeyle hizalandı.",
    neden: "Yaş, Boğdan Voyvodalığı'nın başkenti — Bükreş ile birebir aynı " +
           "durum, aynı iki işgal penceresi. Bir sonraki koşuya kalır."
  }

];
