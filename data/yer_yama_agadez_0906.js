// -*- coding: utf-8 -*-
// YER_YAMA_AGADEZ_0906 — 1.MURAT (Oturum 0) · 6 Eylül 2026
// ═══════════════════════════════════════════════════════════════════
// 🔴 `denetim/` ALTINDA BEKLİYOR — koşu 7b sürüyor, `data/` DONUK.
//    Uygulama: git mv → `py arac/_sahiplik_uygula.py` (kuru koşu
//    VARSAYILAN) → `s:` indiğini GÖR → `--yaz`.
// 🔴🔴 VE BU YAMA TEK BAŞINA İNMEZ — PAKET:
//    `1906-01-01` atlasta HİÇ kullanılmayan bir gün (ölçüldü: 0 uç) ve
//    çekirdekte 1906'ya ait MADDE YOK (ölçüldü: 0). Tek başına inerse
//    `Değişmez 2s` AÇIK 104 → 105 olur (tavan 121, geçer ama BORÇ).
//    ⇒ Yanındaki kronoloji maddesiyle BİRLİKTE:
//       `denetim/KRONOLOJI-AGADEZ-1906-0906.json`
// ═══════════════════════════════════════════════════════════════════
//
// KUSUR: kayıt TEK BLOK — `agadez-sultanligi 1405-01-01 → 1923-10-29`,
// 518 yıl. Ve kaydın KENDİ `kaynak:` alanı zaafı yazıyor:
//    "bulunamadı — TDV'de `agadez` slug'ı ÖLÜ (302) ve KAPSAYICI BİR
//     MADDE ARANMADI."
// ⇒ `§4`ün *"dar slug tutmazsa KAPSAYICI maddeyi dene"* kuralı hiç
//   uygulanmamış. Uygulandı ve TUTTU.
//
// 🟢 KAYNAK — TDV `nijer` (ülke maddesi, gövde geldi ~50.000 kar.,
//    Aydoğan Köksal ve Ahmet Kavas imzalı; boilerplate DEĞİL):
//      "Fransızlar, Agâdes'i işgal edip halkın Osmanlı Devleti ile
//       irtibata geçmesini engelledi (1906)."
//    ⇒ `agadez-sultanligi` 1923'e kadar sürüyordu: **17 YIL FAZLA.**
//    Sınıf: `§3.5` HAYALET DEVLET — sultanlık 1906'da fiilen bitti,
//    veri onu boyamaya devam ediyordu.
//
// 🟢 ÖN KOŞUL ÖLÇÜLDÜ (`§3.5.0`):
//      fransa-cumhuriyet  künye 1792-09-22 → 1923-10-29  ✓ 1906'yı kapsıyor
//      veride 379 dönemde kullanılıyor ⇒ RENK VAR, yeni künye/renk YOK
//      komşu emsal: Timbuktu `fransa-cumhuriyet 1894 → 1923` (aynı
//      sömürge gücü, aynı çağ, aynı havza)
//
// 🔴 GÜN HASSASİYETİ: TDV **YIL** veriyor, gün vermiyor ⇒ `§4` gereği
//    `1906-01-01`. Bu bir gün iddiası DEĞİL, "yıl biliniyor gün
//    bilinmiyor"un kabul edilmiş yazımı.
//
// ⚠️ 1917 KAOCEN İSYANI BİLEREK YAZILMADI. TDV aynı gövdede:
//      "Agâdes Tevârikleri, 1917 yılı Mart ayında I. Dünya Savaşı'ndan
//       istifade ederek şehri ele geçirdilerse de Fransızlar'ın üstün
//       savaş teknikleri karşısında YENİLDİLER."
//    ⇒ Bir isyan, BAŞARILI OLMADIKÇA tasarrufu değiştirmez (`evfat`
//      vakasında bugün kaydedildi). Şehir geçici olarak el değiştirdi
//      ama Fransız hâkimiyeti kırılmadı. Bu bir EKSİKLİK DEĞİL, KARAR —
//      ve yazılı olması bir sonraki oturumun onu "düzeltmesini" önler.
//
// 🔜 AÇIK KALEM — 1515 SONGHAY: aynı gövde şunu da diyor:
//      "1515 yılında Songay Sultanı Askiya Muhammed tarafından Gao'ya
//       bağlanan şehir"
//    ⇒ 1515'te Songhay'a bağlanmış. AMA TDV BİTİŞ VERMİYOR, ve
//    Timbuktu'nun `songhay → 1591-04-13` gününü Agadez'e taşımak
//    1500 km ötedeki bir günü ödünç almak olurdu (`§3.5.-1` menzil
//    dersi). ⇒ YAZILMADI. Kaynak arandığında eklenecek.
// ═══════════════════════════════════════════════════════════════════
window.YER_YAMA_AGADEZ_0906 = [
  { ad:"Agadez",
    s:[{f:"1405-01-01",t:"1906-01-01",d:"agadez-sultanligi"},
       {f:"1906-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
    kaynak:"TDV `nijer` (ülke maddesi, gövde okundu): \"Fransızlar, Agâdes'i işgal edip halkın Osmanlı Devleti ile irtibata geçmesini engelledi (1906).\" — `agadez` slug'ı ÖLÜ (302); kapsayıcı madde `§4` gereği denendi ve TUTTU. Gün YIL hassasiyetinde (`1906-01-01`), TDV gün vermiyor.",
    not:"Önceki hâl TEK BLOK idi (agadez-sultanligi 1405→1923, 518 yıl) ve kendi `kaynak:` alanı \"kapsayıcı bir madde ARANMADI\" diyordu. Arandı. Sultanlık 1906'da fiilen bitti ⇒ 17 yıllık hayalet kapandı. 1917 Kaocen isyanı BİLEREK yazılmadı: TDV Tuaregler'in \"yenildiler\" dediği başarısız bir ayaklanma, ve başarısız isyan tasarrufu değiştirmez. 1515 Songhay bağlılığı TDV'de VAR ama BİTİŞİ YOK ⇒ yazılmadı, açık kalem."
  }
];
