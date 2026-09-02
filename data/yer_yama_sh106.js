// -*- coding: utf-8 -*-
// ═══════════════════════════════════════════════════════════════════════
// YER_YAMA_SH106 — PAKET-0008-0020 (eski ad: SONNET HAZIR KITA 106)
// window.YER_YAMA_SH106        (§7: dosya adındaki ayırt edici parça
//                                değişken adında da duruyor)
// Kaynak paket: parti-emrelic-0020 / H-0013 (Vâdisseyl-Ahıska kırılması)
// ═══════════════════════════════════════════════════════════════════════
//
// 🔴 BU DOSYA GERÇEK KAYIT TAŞIR, RAPOR TAŞIMAZ.
//    Ölçüm zaten `data/olaylar_ek20.js:255-276` (GECE PARTİSİ, 30 Ağustos)
//    yorumunda yazılıydı: hüküm doğruydu, yalnız PAYLAŞILAN yerlesimler.js'e
//    kimse yazmamıştı (M-1903 §④'te "var olan hiçbir paylaşılan veri
//    dosyasına yazma" kuralı vardı, yama mekanizması yoktu). Bu dosya o
//    boşluğu kapatıyor.
//
// ═══════════ AHISKA — d: BAŞLANGIÇ GÜNÜ DÜZELTİLİYOR ═══════════
// BUGÜNKÜ KAYIT (data/yerlesimler.js:812):
//   { ad:"Ahıska", ..., d:[{f:"1578-08-01",t:"1829-09-14",y:"savas"}], ... }
// SORUN: 1578-08-01 günü Osmanlı'yı SAVAŞTAN 8 GÜN ÖNCE Ahıska'ya sahip
// yapıyor. Külliyatta 1578-08-09 günü ZATEN "Çıldır Zaferi — doğu savaşı
// başladı" maddesi var (data/olaylar_ek2.js:92) ve metni Kafkasya
// kazanımını adıyla anlatıyor ("Tiflis alındı ve Gürcistan Osmanlı
// hâkimiyetine girdi"). Emre'nin gördüğü "Vâdisseyl (Fas) maddesinde
// Kafkasya'da ufak toprak değişimi" tam bu — 1578-08-01 ile 1578-08-04
// (Vâdisseyl) yalnız 3 gün arayla düştüğü için Değişmez 2 onu (yanlışlıkla)
// temiz görüyordu.
// KAYNAK — BEN DE OKUDUM (WebFetch, bugün, https://islamansiklopedisi.org.tr/ahiska):
//   "Yavuz Sultan Selim'in Çaldıran Seferi sırasında dolaylı olarak
//    yardımları görülen Ahıska atabegleri, Lala Mustafa Paşa'nın Çıldır
//    Savaşı (1578) SONUNDA Osmanlı idaresine girdiler." — devamında Ahıska
//    yeni kurulan Çıldır eyaletinin merkezi oluyor.
// ⇒ Yeni madde YAZILMIYOR (külliyatı şişirmez) — Çıldır maddesi zaten
//   olayı anlatıyor. Tek düzeltme: kırılma günü savaşın SONRASINA (1578-08-09)
//   çekiliyor, böylece kırılma zaten var olan maddeye oturuyor.
// KOŞU KİLİDİ: bu dosya `data/` altında, arac/ üçlüsüne (uret_petek·girdi·
//   renkler) DOKUNMADI. Şu anki koşuya girmez, bir sonrakine girer.
// ═══════════════════════════════════════════════════════════════════════

window.YER_YAMA_SH106 = [

  // ── AHISKA — GÜVEN: KESİN ────────────────────────────────────────────
  {
    ad: "Ahıska",
    d: [{ f: "1578-08-09", t: "1829-09-14", y: "savas" }],
    kaynak: "TDV İslâm Ansiklopedisi, \"Ahıska\" (islamansiklopedisi.org.tr/ahiska) " +
      "— BİREBİR: \"Ahıska atabegleri, Lala Mustafa Paşa'nın Çıldır Savaşı " +
      "(1578) sonunda Osmanlı idaresine girdiler\"; devamında Ahıska yeni " +
      "kurulan Çıldır eyaletinin merkezi oluyor.",
    neden: "Yalnız `f:` değişti (1578-08-01 → 1578-08-09), `t:` ve `y:` AYNEN " +
      "korundu. Gerekçe: Çıldır Savaşı 1578-08-09'dur (data/olaylar_ek2.js:92, " +
      "kaynak: cildir-savasi) ve o madde zaten Ahıska/Gürcistan kazanımını " +
      "anlatıyor — ikinci bir madde yazmak külliyatı şişirirdi, kırılma günü " +
      "zaten var olan maddeye çekildi. İlk ölçüm ve teşhis `data/olaylar_ek20.js:" +
      "255-276`de (GECE PARTİSİ, 30 Ağustos) yazılıydı; ben TDV kaynağını " +
      "bağımsız olarak yeniden okudum (bugün) ve birebir doğruladım, sonra " +
      "PAYLAŞILAN dosyaya değil bu yamaya yazdım."
  }

];
