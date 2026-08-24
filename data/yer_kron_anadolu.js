// =====================================================================
// YERLEŞİM SAHİPLİK KRONOLOJİSİ — ANADOLU (Osmanlı çekirdeği + beylikler)
// Oturum: SONNET HAZIR KITA 73 -- 24 Ağustos 2026 (M-1206)
// Bölge: Karaman · Germiyan · Aydın · Menteşe · Saruhan · Candar/İsfendiyar ·
// Hamid · Tekke · Eretna · Kadı Burhaneddin · Dulkadir · Ramazan · Karesi ·
// Sahib Ata · Pervane · Çobanoğulları · Hacıemiroğulları · Tacettinoğulları ·
// Trabzon Rum İmparatorluğu · Kilikya Ermeni Krallığı
//
// TUR 1 — ⓪ TABAN ÖLÇÜMÜ + ① ÖNCELİK (15 beylik merkezi)
// Bu dosyaya SADECE bu oturum yazar. VERİYE/MOTORA DOKUNULMADI, koordinatör
// uygular (CLAUDE.md §7).
//
// window.YER_KRON_ANADOLU — { ad, ...önerilen tam s:/d: dizisi, kaynak, not }
// Bir kaydı DEĞİŞTİRMİYORUM (mevcut kayıt YOK ise) — yalnız YENİ kayıt.
// =====================================================================

window.YER_KRON_ANADOLU = [

// ── EĞRİDİR — TAMAMEN EKSİK (kayıt hiç yok), Hamidoğulları başkenti ────
{ ad:"Eğridir", lat:37.876, lon:30.852,
  s:[
    { f:"1281-01-01", t:"1300-01-01", d:"selcuklu" },
    { f:"1300-01-01", t:"1386-01-01", d:"hamid" },
    { f:"1402-07-28", t:"1402-09-15", d:"timurlu" },
    { f:"1402-09-15", t:"1414-06-01", d:"karaman" }
  ],
  d:[
    { f:"1386-01-01", t:"1402-07-28" },
    { f:"1414-06-01", t:"1923-10-29" }
  ],
  kaynak:"TDV hamidogullari",
  not:"TDV: Eğridir Hamidoğulları'nın başkentiydi ('Felekâbâd' adını Dündar Bey verdi); I. Murad tarafından 1386'da ASKERİ FETİHLE alındı — SATIŞ DEĞİL. Karıştırılmasın: Akşehir/Beyşehir/Seydişehir/Yalvaç/Karaağaç 1381-82'de 80.000 altına SATILMIŞTI, Eğridir bundan AYRI ve SONRAKİ bir olaydır (satıştan sonra Hüseyin Bey yalnız İsparta/Uluborlu/Keçiborlu/Burdur/Gölhisar'da kaldı, Eğridir'i de bu son alanın parçası olarak elinde tutuyordu ve 1386'da onu da kaybetti). ⚠️ 1402-1414 Karaman ara dönemi TDV'den DOĞRUDAN doğrulanmadı — komşu kayıtlardan (Isparta/Yalvaç/Beyşehir/Akşehir, dördü de veride mevcut ve hepsi 1402-07-28→1414-06-01 Karaman'da, 1414-06-01'de OSMANLI'ya dönüyor) BÖLGESEL TUTARLILIK için önerildi, İKİNCİL çıkarım — ayrıca doğrulanmalı. Gün bilinmiyor (1386 yıl beyanı), CLAUDE.md §4 kuralı gereği YYYY-01-01." },

];

// =====================================================================
// TUR 1 RAPORU — ⓪ TABAN ÖLÇÜMÜ (py girdi.yukle() + 36-42K/26-45D kutusu)
// =====================================================================
// ① OLCUM (ilk gecis, HAM):
//    kutudaki yerleşim            283
//    hiç sahiplik dönemi YOK        0
//    YALNIZ Osmanlı dönemi var
//      (öncesi yazılmamış)          3   — Adapazarı · Kilitbahir · Rumeli Hisarı
//    ayrı sahip kimliği            52
//
// 🔴 BU ÜÇÜNÜ TEK TEK AÇTIM VE HAM SAYI YANILTICIYMIŞ — düzeltiyorum:
//    Adapazarı     kur:"1550-01-01"        — 1550'de SIFIRDAN KURULDU
//    Kilitbahir    kur:"1452-01-01"        — Fâtih'in 1452'de İNŞA ETTİĞİ kale
//    Rumeli Hisarı kur:"1452-08-31"        — Fâtih'in 1452'de İNŞA ETTİĞİ kale
//    ⇒ Üçü de `kur:` alanı taşıyor: SIFIRDAN KURULUŞ/İNŞA, öncesinde bir
//    "sahibi" olacak bir yerleşim YOK ki yazılsın — boşluk değil, tasarım.
//    DÜZELTİLMİŞ SAYI: gerçek "öncesi eksik" kaydı bu kutuda 0.
//    (İlk script'im `kur:` alanını hiç kontrol etmiyordu — kendi ölçümümü
//    yayınlamadan önce tek tek açıp YANLIŞ ALARMI kendim yakaladım.)
//
// ② PRIORITE ① — 15 beylik merkezi tek tek açıldı:
//    14/15 TAM ZİNCİRLİ (1281→1923 arası boşluksuz, iç tutarlı):
//      Konya · Kütahya · Birgi · Milas · Manisa · Kastamonu · Antalya ·
//      Sivas · Kayseri · Maraş · Adana · Trabzon · Sinop · Balıkesir*
//      (*Balıkesir/Karesi bölgesi hakkında AŞAĞIYA BAKIN — ayrı not)
//    1/15 KAYIT HİÇ YOK: Eğridir — YUKARIDA EKLENDİ (TDV ile doğrulandı)
//
// ③ ÇIKARDIĞIM HÜKÜM — bölge BEKLENENDEN ÇOK DAHA SAĞLAM: 283 yerleşimlik
//    kutuda düzeltilmiş gerçek boşluk sayısı 1 (yalnız Eğridir) —
//    "eksik tamamlama" bu turda küçük bir iş çıktı, asıl değer DOĞRULAMA
//    tarafında (Karesi bulgusu gibi).
//
// =====================================================================
// KARESİ BULGUSU — ÖNCEKİ TASNIFİMİ (BAYAT-SONNET-HAZIR-KITA-73.json,
// H-0001) GÜNCELLİYORUM — TDV DOĞRULAMASI YAPILDI
// =====================================================================
// Önceki turda (BAYAT TARAMASI) H-0001'i "hala-açık" işaretlemiştim:
// "saruhan diriltildi ama karesi hâlâ eksik" diyerek. BUGÜN TDV
// karesiogullari maddesini çektim:
//    "Karesi Beyliği Osmanlı topraklarına katılmış oldu (746/1345
//     veya hemen sonrası)" — Bergama kuşatması ve Dursun Bey'in
//     öldürülmesiyle. Madde 1402 Fetret Devri'nden HİÇ bahsetmiyor.
// ⇒ ÇIKARDIĞIM HÜKÜM: Karesi'nin Osmanlı'ya katılışı (1345) Saruhan/
//    Aydın/Menteşe/Germiyan'ın katılışından (1381-1390 civarı) ÇOK DAHA
//    ESKİ — 57-60 yıl önce. Timur 1402'de yalnız YAKIN ZAMANDA fethedilmiş
//    beylikleri (ve hayattaki hanedan üyelerini) restore etti; Karesi
//    hanedanı 1345'te zaten sona ermişti (Dursun Bey öldürüldü), restore
//    edilecek bir talip yoktu. ⇒ Balıkesir/Çanakkale/Bergama/Biga'nın
//    1402-1413 arası doğrudan şehzade idaresinde (isa-celebi→...) kalması,
//    "karesi diriltilmedi" bir KUSUR değil, TARİHEN BEKLENEN durum
//    olabilir. Bunu KESİN "çözüldü" diye işaretlemiyorum (Saruhan/Karesi
//    arasındaki bu asimetriyi doğrudan tartışan bir TDV cümlesi
//    bulamadım — çıkarım benim, TDV'nin doğrudan ifadesi değil) ama
//    önceki "hala-açık" hükmümü BURADA GÜNCELLİYORUM: düzeltme
//    ÖNERMİYORUM, mevcut veri muhtemelen zaten doğru.
// =====================================================================
