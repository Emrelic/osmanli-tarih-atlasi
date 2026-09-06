// ═══════════════════════════════════════════════════════════════════
// YER YAMASI — Girit'in 1898-1913 özerklik dönemi
// Oturum NEHİR SÜRTÜNME · sevk 1.MURAT M-2799 ④ · 5 Eylül 2026
//
// SORUN: veri Girit'i 1898-12-01'den itibaren `s:"yunanistan"` boyuyor.
// TDV `girit` (200, gövde okundu) bunu ÇÜRÜTÜYOR — birebir:
//
//   "18 Aralık 1897" — dört büyük devlet Girit'in muhtariyetini ilân etti;
//   ada "OSMANLI HÂKİMİYETİNDE TARAFSIZ VE MUHTAR BİR VİLÂYET" oldu
//   "Prens George'un 22 Aralık 1898'de adada görevine başlaması"
//   Osmanlı hükümranlığı teorik olarak sürdü, hazineye YILLIK VERGİ ödendi
//   "Londra (30 Mayıs 1913) ve Bükreş (10 Ağustos 1913) muahedeleriyle
//    Girit adası Osmanlı Devleti'nin elinden çıkmış oldu"
//
// 🔴 VE KRONOLOJİ ZATEN DOĞRUYU SÖYLÜYORDU: çekirdekte `1898-12-01`
//    gününde "Girit'e özerklik" maddesi VAR. Yani metin "özerklik",
//    harita "Yunanistan" diyordu — Değişmez 2'nin korumaya çalıştığı
//    çelişkinin TERS yönü: madde doğru, gövde yanlış.
//
// ÇARE: Şarkî Rumeli emsali (ÖLÇÜLDÜ — Filibe: `d:` → 1878-07-13 ·
// `v:` 1878-07-13 → 1885-09-18 · `s:` 1885-09-18 → bulgaristan-prensligi).
// Özerk + Osmanlı hükümranlığı = `v:`.
//
// ⚠️ TARİH SEÇİMİ — yeni kırılma günü ÜRETMİYOR, ve bu KASITLI:
//   1898-12-01  ZATEN kırılma, çekirdekte 0 gün: "Girit'e özerklik"
//   1913-05-30  çekirdekte 0 gün: "Londra Antlaşması — Rumeli'nin kaybı"
//   (1898-12-22, Prens George'un göreve başladığı gün, çekirdekte
//    21 gün uzakta — ±30'u geçerdi ama YENİ bir kırılma açardı.
//    Kuyrukta 0 gün maddesi var. Veriye DOKUNMADIM; künye
//    `girit-devleti` zaten 1898-12-22 taşıyor ve o künye ayrı iş.)
//
// 🔴 DÖRT DEVLET İŞGALİNİ YAZMADIM — ve bu bir eksiklik değil bir HÜKÜM:
//    TDV ada üzerinde dört büyük devletin (İngiltere · Fransa · Rusya ·
//    İtalya) himayesini/işgalini anlatıyor. Atlasın `isg:` alanı bir
//    dönemde TEK kimlik taşıyor — ölçtüm: örtüşen `isg:` dönem çifti 0.
//    Dördünü tek alana sığdırmak ya birini seçmek ya üçünü silmek olurdu.
//    "Bir ezilmeyi başka bir ezilmeyle değiştirmem." ⇒ YAZILMADI, BEYAN EDİLDİ.
// ═══════════════════════════════════════════════════════════════════

window.YER_YAMA_GIRIT = [

  {
    ad: "Girit (Resmo)",
    s: [
      { f: "1281-01-01", t: "1646-11-13", d: "venedik" },
      { f: "1913-05-30", t: "1923-10-29", d: "yunanistan" }
    ],
    v: [
      { f: "1830-11-01", t: "1841-02-25" },
      { f: "1898-12-01", t: "1913-05-30" }
    ],
    kaynak: "girit"
  },

  {
    ad: "Hanya",
    s: [
      { f: "1281-01-01", t: "1645-08-22", d: "venedik" },
      { f: "1913-05-30", t: "1923-10-29", d: "yunanistan" }
    ],
    v: [
      { f: "1830-11-01", t: "1841-02-25" },
      { f: "1898-12-01", t: "1913-05-30" }
    ],
    kaynak: "girit"
  },

  {
    ad: "Kandiye (Girit)",
    s: [
      { f: "1281-01-01", t: "1669-09-27", d: "venedik" },
      { f: "1913-05-30", t: "1923-10-29", d: "yunanistan" }
    ],
    v: [
      { f: "1830-11-01", t: "1841-02-25" },
      { f: "1898-12-01", t: "1913-05-30" }
    ],
    kaynak: "girit"
  },

  {
    ad: "Sitiye (Sitia)",
    s: [
      { f: "1281-01-01", t: "1669-09-27", d: "venedik" },
      { f: "1913-05-30", t: "1923-10-29", d: "yunanistan" }
    ],
    v: [
      { f: "1830-11-01", t: "1841-02-25" },
      { f: "1898-12-01", t: "1913-05-30" }
    ],
    kaynak: "girit"
  },

  {
    ad: "İsfakiye (Sfakia)",
    s: [
      { f: "1281-01-01", t: "1669-09-27", d: "venedik" },
      { f: "1913-05-30", t: "1923-10-29", d: "yunanistan" }
    ],
    v: [
      { f: "1830-11-01", t: "1841-02-25" },
      { f: "1898-12-01", t: "1913-05-30" }
    ],
    kaynak: "girit"
  }

];

// ═══════════════════════════════════════════════════════════════════
// DOKUNULMAYANLAR — ve niçin
//
// `d:` alanı HİÇ YAZILMADI ⇒ uygulayıcı ona dokunmaz. Beş noktanın
//     `d:` zincirleri olduğu gibi kalıyor (1898-12-01'de bitiyorlar,
//     ki bu doğru ve zaten kırılma).
//
// 🟡 ÖLÇTÜM, DOKUNMADIM: `Girit (Resmo)` ve `Kandiye`nin `d:` dönemi
//    1830-1841 `v:` dönemiyle ÖRTÜŞÜYOR (ötekiler `d:`yi ikiye bölmüş).
//    Kayıtlar arası bir tutarsızlık ama Mısır dönemine ait ve bu yamanın
//    kapsamı dışında. AYRI KALEM.
//
// 🟡 ÖLÇTÜM, DOKUNMADIM: künye `girit-devleti` f:1898-12-22 · t:1913-05-30.
//    `t:` verimle BİREBİR uyuyor. `f:` 21 gün ileride (Prens George'un
//    göreve başlaması). Künye alanı ayrı iş.
//
// ⚪ YAZILMADI: 1897-12-18 (muhtariyet ilânı) ile 1898-12-01 arası.
//    TDV bu aralık için temiz bir statü modeli vermiyor (Osmanlı askeri
//    çekiliyor, devletler adayı tutuyor). UYDURMADIM.
// ═══════════════════════════════════════════════════════════════════
