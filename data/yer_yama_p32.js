// data/yer_yama_p32.js — parti-emrelic-0032 VERİ ÖNERİLERİ
// OPUS HAZIR KITA 82 · 24 Ağustos 2026 · rapor: denetim/BULGU-0032-VERI.md
//
// 🔴 BU DOSYA UYGULANMIŞ BİR DÜZELTME DEĞİL, ÖNERİ KÜMESİDİR.
//    Hiçbir canlı veri dosyasına yazmadım (`yerlesimler*.js`, `olaylar*.js`,
//    `renkler.py`, `js/app.js` — hiçbirine dokunulmadı). `index.html`e de
//    EKLENMEDİ: bu dosya motorun okuduğu bir girdi değil, bir tekliftir.
//
// 🔴 AD ALANI (CLAUDE.md §7): dosya adındaki ayırt edici parça `p32`,
//    değişken adında da var → `window.YER_YAMA_P32`. Başka hiçbir dosya
//    bu adı kullanmıyor (ölçüldü: `grep -c YER_YAMA_P32 data/*.js` = 0).
//
// Her kaydın alanları BİR `if` İLE SORULABİLİR olsun diye yapılandırıldı
// (§11: "serbest metne gömülen ders, inmiş sayılmaz"):
//    h            parti maddesi
//    tur          "yerlesim" | "kronoloji" | "renk"
//    hedef        değişecek kayıt
//    hal          "oneri" | "karar-bekliyor"
//    guven        "yuksek" | "orta" — kaynağın ne kadar doğrudan söylediği
//    kaynak       TDV slug'ı (HTTP kodu ve gövde okuması raporda)
//    bedel        bu öneri uygulanırsa BAŞKA NE KIRILIR (§3.5.1: iki uç da ölçülür)

window.YER_YAMA_P32 = [

  // ─────────────────────────────────────────────────────────────────────
  {
    h: "H-0001", tur: "yerlesim", hedef: "İşkodra", hal: "oneri",
    guven: "yuksek", kaynak: "iskodra",
    baslik: "Venedik dönemi 115 yıl fazla; 1393-96 Osmanlı devri hiç yok",
    olculen: 's: venedik 1281-01-01 -> 1479-01-25  (TEK BLOK)',
    tdv: 'TDV iskodra: 1393 Kavala Şâhin aldı, KISA SÜRDÜ · 1396 George ' +
         'Stratsimirović şehri VENEDİKLİLERE SATTI, Venedik 83 YIL tuttu · ' +
         '1479 antlaşma ile Osmanlı.  "83 yıl" = 1396-1479, birebir.',

    // A ŞIKKI — UCUZ. Var olan kimlikler ve renklerle, ek bedel YOK.
    oneri_a: [
      { alan: "s", f: "1281-01-01", t: "1396-01-01", d: "sirbistan" },
      { alan: "s", f: "1396-01-01", t: "1479-01-25", d: "venedik"   },
      { alan: "d", f: "1479-01-25", t: "1913-04-23"                 }   // DEĞİŞMİYOR
    ],
    oneri_a_bedel: "YOK. `sirbistan` ve `venedik` renkleri VAR (#518790 / #deed93). " +
                   "Yeni kırılma günü 1396-01-01 — Değişmez 2 için ±30 günde madde ARANMALI.",

    // B ŞIKKI — TAM. TDV'yi birebir izler ama İKİ yeni bedel doğurur.
    oneri_b: [
      { alan: "s", f: "1281-01-01", t: "1356-01-01", d: "sirbistan" },
      { alan: "s", f: "1356-01-01", t: "1393-01-01", d: "zeta"      },
      { alan: "d", f: "1393-01-01", t: "1396-01-01"                 },  // Kavala Şâhin
      { alan: "s", f: "1396-01-01", t: "1479-01-25", d: "venedik"   },
      { alan: "d", f: "1479-01-25", t: "1913-04-23"                 }
    ],
    oneri_b_bedel:
      "① `zeta` künyesi devletler.js'te VAR ('Zeta Prensliği (Balšić/Crnojević)', " +
      "1356-01-01→1514-01-01) ama `renkler.py`de RENGİ YOK — §8: boyanmayan " +
      "kimlik harita DELİĞİdir. RENK oturumuna sevk gerekir. " +
      "② 1393 ve 1396 İKİ YENİ Osmanlı kırılması doğurur; Değişmez 2 gereği " +
      "İKİSİNİN de ±30 gün içinde kronoloji maddesi olmalı, yoksa açık sayısı 2 artar. " +
      "③ 1356 kırılması da yeni.",
    onerim: "A — ucuz, bedelsiz ve asıl kusuru (115 yıllık Venedik hayaleti) kapatıyor. " +
            "B tarihen daha doğru ama üç yeni borç açıyor; ayrı bir kalem olarak sıraya girsin."
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    h: "H-0001", tur: "yerlesim", hedef: "Dubrovnik", hal: "karar-bekliyor",
    guven: "yuksek", kaynak: "dubrovnik",
    baslik: "Tâbiiyet tarihi 1458 — gösterdiği TDV maddesinde 1458 HİÇ GEÇMİYOR",
    olculen: 'v: 1458-01-01 -> 1806-05-27 · s: macaristan 1358-01-01 -> 1458-01-01 · ' +
             'olaylar_ek2.js t:"1458-01-01" b:"Dubrovnik (Raguza) haracı" kaynak:"dubrovnik"',
    tdv: 'TDV dubrovnik (HTTP 200, gövde iki ayrı sorguyla okundu): ' +
         '"Dubrovnik kaynaklarına göre 1365 tarihli olan bu ahidnâme ile Dubrovnik ' +
         'Osmanlılar\'ın haraçgüzârı oluyor." · 1430-12-06 II. Murad mektubu · ' +
         '1442-02 ferman · 1452 haraç 1500 filori · 1459-03-07 ahidnâme "hükme bağlandı" · ' +
         '1469/1471/1472/1478 artışlar.  1458 YOK.',

    sik_1365: "Tarihen TDV'nin esas aldığı yıl. BEDEL: `v:` 1365'ten başlarsa " +
              "`s:macaristan` (1358-1458) ile 93 YIL ÖRTÜŞÜR. Ragusa gerçekten " +
              "aynı anda hem Macar hem Osmanlı haraçgüzârıydı — ama veri modeli " +
              "çift tâbiiyeti ifade edebiliyor mu ÖLÇMEDİM. Motor `v:` ve `s:`yi " +
              "aynı gün için birlikte görürse ne çizer, denenmedi.",
    sik_1459: "EN UCUZ. 1459-03-07 gün hassasiyetli, TDV'nin 'hükme bağlandı' " +
              "ifadesine dayanıyor, örtüşme DOĞURMUYOR (macaristan 1458'de bitiyor, " +
              "araya 14 ay boşluk kalır — Değişmez 1b'ye BAKILMALI). " +
              "Kronoloji maddesi de aynı güne çekilir, Değişmez 2 korunur.",
    sik_1458: "Olduğu gibi bırakılırsa: `kaynak:\"dubrovnik\"` alanı maddeyi " +
              "DESTEKLEMEYEN bir kaynağı gösteriyor demektir. En azından gerçek " +
              "dayanak yazılmalı — §4: kaynağı yazılmayan bilgi, kaynağı olmayan " +
              "bilgiden ayırt edilemez.",
    onerim: "KARAR KOORDİNATÖRÜN. Kendi eğilimim 1459-03-07 — ama bu bir EĞİLİM, " +
            "karar değil; 1365'in doğruluğu daha yüksek, maliyeti de."
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    h: "H-0003", tur: "kronoloji", hedef: "olaylar_ek7.js · t:1468-04-01", hal: "oneri",
    guven: "yuksek", kaynak: "akkoyunlular",
    baslik: "Kamera 700 km uzağa gidiyor; maddenin harita karşılığı TEBRİZ'de",
    olculen: 'madde: yer:"Azerbaycan, Doğu Anadolu, Irak-ı Acem" (ÜÇ BÖLGE) ' +
             'ama yer_kon:[38.8853,40.4966] (TEK NOKTA, Bingöl civarı, orada yerleşim YOK). ' +
             'Odak çevresi 400 km: akkoyunlu 33 · memluk 16 · gurcistan 14 · karakoyunlu 11. ' +
             'TEBRİZ (38.08/46.292): s:karakoyunlu 1406-10-21 -> 1468-04-01, ' +
             's:akkoyunlu 1468-04-01 -> 1501-07-01  ⇒ KIRILMA MADDENİN TAM GÜNÜ.',
    oneri: { yer_id: "Tebriz", yer_kon: null },
    bedel: "`olayKonumu` (app.js:5321) `yer_kon`u ÖNCE okuyor; `yer_kon` " +
           "KALDIRILMAZSA yeni `yer_id` HİÇ okunmaz. İkisi birlikte yapılmalı.",
    uyari: "`kapsam_genis:true` YANLIŞ olur — o dal `donemler[di].b` ile OSMANLI " +
           "sınırına açılıyor (app.js:5510); Karakoyunlu maddesi için konuyla " +
           "ilgisiz bir çerçeve verir.",
    sahibi: "data/olaylar_ek7.js — BENİM DEĞİL, uygulamadım."
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    h: "H-0007", tur: "kronoloji", hedef: "olaylar_ek5.js · t:1476-07-26", hal: "oneri",
    guven: "orta",
    baslik: "Maddenin odağı ile savaş işareti ~55 km ayrı",
    olculen: 'madde yer_id:"Suçava (Suceava)" (47.63/26.25 civarı, g=0) · ' +
             'savaslar.js "Akdere (Valea Albă) zaferi" lat:47.15 lon:26.30. ' +
             'Kamera Suçava\'ya gidiyor, ⚔ işareti Războieni\'de yanıyor.',
    oneri: { yer_kon: [47.15, 26.30] },
    gerekce: "Madde muharebeyi anlatıyor (b: 'Akdere ... zaferi'); Suçava seferin " +
             "sonraki durağı. Racova maddesi ZATEN bu deseni doğru kullanıyor: " +
             "yer_kon:[46.6407,27.7276] ile savaslar.js kaydı (46.64/27.73) BİREBİR aynı.",
    bedel: "Suçava'ya girişin anlatısı kaybolmaz — `yer:` metni ikisini de yazıyor. " +
           "Kamera 55 km kayar, başka hiçbir şey değişmez.",
    olcmedigim: "Emre'nin şikâyeti bu 55 km'yi mi kastediyor, ÖLÇMEDİM — o, " +
                "işaretin HİÇ görünmemesinden şikâyetçi. Bu ayrı ve küçük bir bulgu."
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    h: "H-0002", tur: "renk", hedef: "arac/renkler.py · gurcistan ↔ karakoyunlu",
    hal: "oneri", guven: "yuksek",
    baslik: "Eşiği GEÇİYOR ama gerçek okur ayırt edemedi — sıkıştırılmalı",
    olculen: 'arac/renk_olc.py ile: gurcistan #e020b0 ↔ karakoyunlu #e018e0 ΔE = 25,69 ' +
             '(eşik DE_KOMSU = 12,0 → GEÇER). 1467-11-10\'da ikisi de sahnede ' +
             '(gurcistan 18 nokta, karakoyunlu 98 nokta), en yakın çift 160 km ' +
             '(Sarıkamış ↔ Erciş). İkisi de doygun magenta: ton ~313° ve ~300°.',
    cikarim: "ΔE'yi ayakta tutan şey TON değil doygunluk/açıklık; yan yana iki " +
             "magenta gövdeyi ayırmak tona bağlı. CLAUDE.md'nin yazılı dersi: " +
             "'eşik tek sayı değildir, anlatının merkezindeki çift daha fazlasını " +
             "hak eder' (bugis↔gova 12,4→25,8; ava↔ayutthaya aynı sınıf).",
    oneri: "gurcistan ↔ karakoyunlu için hedef ≥ 12 değil ≥ 35 konsun, yeniden çözülsün.",
    sahibi: "arac/renkler.py — BENİM DEĞİL. RENK oturumuna sevk.",
    uyari: "CLAUDE.md: bir renk değişikliği KOMŞULUK üzerinden başka çiftleri açabilir; " +
           "değişiklikten sonra `py arac/renk_olc.py` KOŞULMALI."
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    h: "H-0006", tur: "yerlesim", hedef: "Kırım", hal: "oneri-YOK",
    guven: "yuksek", kaynak: "kirim",
    baslik: "ZATEN-DOĞRU — düzeltme önermiyorum, ve bu bir SONUÇTUR",
    olculen: 'Yarımada (44,0-46,3K / 32,4-36,7D) 14 nokta. ' +
             'd: (doğrudan) 8 — Kefe·Sudak·Mankup·Balaklava·Yalta·Aluşta·Kerç·İnkirman. ' +
             'v: (tâbi) 6 — Bahçesaray·Akmescid·Karasubazar·Eski Kırım·Gözleve·Or Kapı. ' +
             'Hepsi 1475-06-06. Azak d: 1475-06-06. Taman ceneviz→d: 1482-06-01. ' +
             'Anapa kirim→d: 1781. Özi kirim 1441→d: 1538-09-01. ' +
             'Rostov kur:1749 · Taganrog kur:1698 (1475\'te haklı olarak yok).',
    tdv: 'TDV kirim: "1475\'ten itibaren güneyde Kefe, Sudak ve Mangub limanları ' +
         'civardaki araziyle birlikte DOĞRUDAN DOĞRUYA Osmanlı padişahına tâbi oldu ' +
         've Kefe\'de sancak beyi ... bir Osmanlı valisi yerleşti." İç kesim hanlarda.',
    cikarim: "Veri, TDV'nin doğrudan/tâbi ayrımını nokta nokta ve GÜN hassasiyetinde " +
             "taşıyor. Emre'nin 'gerekirse oturum görevlendir' isteği için gerekçe YOK.",
    olcmedigim: "14 noktanın petek yoğunluğu olarak yeterli olup olmadığı (§2 emilme) — " +
                "bu bir motor sorusu, BAKMADIM."
  }

];
