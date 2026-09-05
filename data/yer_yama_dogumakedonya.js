// ═══════════════════════════════════════════════════════════════════
// YER YAMASI — Doğu Makedonya 1913: EKSİK BULGAR ARA SAHİBİ
// Oturum NEHİR SÜRTÜNME · sevk 1.MURAT M-2819 · 5 Eylül 2026
//
// SORUN: Drama · Kavala · Serez · Praviște `d:` 1413 → **1913-06-28**
// sonra doğrudan `s:yunanistan`. Yani Osmanlı'dan Yunanistan'a TEK
// ADIMDA geçiyorlar. Oysa arada BULGARİSTAN vardı.
//
// TDV `kavala` (200, gövde okundu) — birebir:
//   "I. Balkan Savaşı'nda **1912 sonbaharında BULGAR ORDUSU** Kavala
//    bölgesini işgal etti"
//   "Yunanistan **II. Balkan Savaşı'nda 1913 Temmuzunda** şehri ve
//    çevresini aldı"
//   "Bu durum **10 Ağustos 1913 tarihli BÜKREŞ ANTLAŞMASI** ile de
//    tescil edildi"
//
// 🔴 VE ATLAS BUNU KOMŞULARINDA ZATEN YAPIYOR — ölçüldü:
//   Gümülcine · İskeçe · Nevrokop · Ferecik · Dimetoka · Petriç ·
//   Köstendil · Çirmen → hepsi `s:bulgaristan-kralligi` **1913-05-30**'dan
//   (Londra Antlaşması). Yani proje Bulgar ara sahipliğini BİLİYOR ve
//   29 dönemde kullanıyor — bu dört nokta ONLARIN ARASINDA ve DIŞARIDA
//   kalmış.
//
// TARİH SEÇİMİ — ve ikisi de atlasın KENDİ emsalinden:
//   1913-05-30  Londra Antlaşması — komşu sekiz noktanın Bulgar dönemi
//               tam bu günde başlıyor. TDV "1912 sonbaharı" diyor ama
//               GÜN vermiyor; atlasın kendi konvansiyonu izlendi.
//   1913-08-10  Bükreş Antlaşması — TDV'nin AÇIKÇA verdiği gün
//               ("tescil edildi")
//
// ⚠️ VE BUNU BEYAN EDİYORUM: TDV Yunan ele geçirişini **"1913 Temmuzu"**
//    diye veriyor, Bükreş ise TESCİLDİR. Ben tescili aldım çünkü
//    atlasın komşu kayıtları da antlaşma günü kullanıyor. Fiilî
//    Temmuz gününü kaynak VERMİYOR.
// ═══════════════════════════════════════════════════════════════════

// 🔴 DÜZELTME — bu yamanın İLK SÜRÜMÜ `d:` zincirinin ORTAÇAĞ
//    dönemlerini YOK EDİYORDU. Ölçüm betiğim yalnız `t >= 1900` olan
//    dönemleri basıyordu ve dört erken dönem (1374 · 1383 · 1387 ·
//    1402 kırılmaları) GÖRÜNMÜYORDU.
//    `yama_sinav.py` bunu "KAYBOLAN kırılma" satırında yakaladı.
//    ⇒ Yama artık ELLE değil VERİDEN üretiliyor: bütün dönemler
//      korunuyor, yalnız SON `d:` döneminin `t:` değeri değişiyor.
//    📌 §11: "kendi yazdığın ayrıştırıcı her zaman kötüdür" — burada
//      ayrıştırıcı değil ÖLÇÜM FİLTRESİ yalan söyledi.

window.YER_YAMA_DOGUMAKEDONYA = [

  {
    ad: "Kavala",
    d: [
      { f: "1387-04-09", t: "1402-07-28" },
      { f: "1413-07-05", t: "1913-05-30" }
    ],
    s: [
      { f: "1281-01-01", t: "1387-04-09", d: "bizans" },
      { f: "1913-05-30", t: "1913-08-10", d: "bulgaristan-kralligi" },
      { f: "1913-08-10", t: "1923-10-29", d: "yunanistan" },
      { f: "1402-07-28", t: "1410-02-13", d: "suleyman-celebi" },
      { f: "1410-02-13", t: "1410-06-15", d: "musa-celebi" },
      { f: "1410-06-15", t: "1411-02-17", d: "suleyman-celebi" },
      { f: "1411-02-17", t: "1413-07-05", d: "musa-celebi" }
    ],
    kaynak: "kavala"
  },

  {
    ad: "Drama",
    d: [
      { f: "1374-01-01", t: "1383-09-19" },
      { f: "1383-09-19", t: "1402-07-28" },
      { f: "1413-07-05", t: "1913-05-30" }
    ],
    s: [
      { f: "1281-01-01", t: "1345-01-01", d: "bizans" },
      { f: "1345-01-01", t: "1374-01-01", d: "sirbistan" },
      { f: "1402-07-28", t: "1410-02-13", d: "suleyman-celebi" },
      { f: "1410-02-13", t: "1410-06-15", d: "musa-celebi" },
      { f: "1410-06-15", t: "1411-02-17", d: "suleyman-celebi" },
      { f: "1411-02-17", t: "1413-07-05", d: "musa-celebi" },
      { f: "1913-05-30", t: "1913-08-10", d: "bulgaristan-kralligi" },
      { f: "1913-08-10", t: "1923-10-29", d: "yunanistan" }
    ],
    kaynak: "kavala"
  },

  {
    ad: "Serez",
    d: [
      { f: "1383-09-19", t: "1402-07-28" },
      { f: "1413-07-05", t: "1913-05-30" }
    ],
    s: [
      { f: "1281-01-01", t: "1345-01-01", d: "bizans" },
      { f: "1345-01-01", t: "1383-09-19", d: "sirbistan" },
      { f: "1913-05-30", t: "1913-08-10", d: "bulgaristan-kralligi" },
      { f: "1913-08-10", t: "1923-10-29", d: "yunanistan" },
      { f: "1402-07-28", t: "1410-02-13", d: "suleyman-celebi" },
      { f: "1410-02-13", t: "1410-06-15", d: "musa-celebi" },
      { f: "1410-06-15", t: "1411-02-17", d: "suleyman-celebi" },
      { f: "1411-02-17", t: "1413-07-05", d: "musa-celebi" }
    ],
    kaynak: "kavala"
  },

  {
    ad: "Praviște (Eleftheroupoli)",
    d: [
      { f: "1387-04-09", t: "1402-07-28" },
      { f: "1413-07-05", t: "1913-05-30" }
    ],
    s: [
      { f: "1281-01-01", t: "1387-04-09", d: "bizans" },
      { f: "1402-07-28", t: "1410-02-13", d: "suleyman-celebi" },
      { f: "1410-02-13", t: "1410-06-15", d: "musa-celebi" },
      { f: "1410-06-15", t: "1411-02-17", d: "suleyman-celebi" },
      { f: "1411-02-17", t: "1413-07-05", d: "musa-celebi" },
      { f: "1913-05-30", t: "1913-08-10", d: "bulgaristan-kralligi" },
      { f: "1913-08-10", t: "1923-10-29", d: "yunanistan" }
    ],
    kaynak: "kavala"
  }

];

// ═══════════════════════════════════════════════════════════════════
