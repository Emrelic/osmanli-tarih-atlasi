// 🏷️ KOŞU DAMGASI — yayındaki haritayı HANGİ koşunun ürettiği.
//
// 🔴 NİÇİN VAR (Emre, 5 Ekim 2026): *"bundan sonra koşu damgasını siteye uygula,
//    koşu 19 koşu 20 şeklinde butonlar bölümünde yayın numarasının yanında
//    görelim."* Ve bu bir süs değil, ÖLÇÜLMÜŞ BİR KUSURUN ÇARESİ:
//
//    `uret_petek.py:1175` yıllardır *"Bu koşunun damgasına yazılır"* diyordu —
//    ama ÖYLE BİR DAMGA YOKTU. Sonuç: 4 Ekim'de `MOTOR_YURUYUS` bayrağı KAPALI
//    koşan r11195 yayına indi, Bulgaristan sınırı Tuna'yı geçti, ve bunu
//    Emre GÖZLE fark etti. Hiçbir kapı yakalamadı, çünkü bir koşunun hangi
//    bayraklarla koştuğu SONRADAN ÖLÇÜLEMİYORDU — yalnız koşu logundan ve
//    commit mesajından çıkarılabiliyordu, ikisi de yayına inmiyor.
//    ⇒ Damga, "hangi prensiple çizildi" sorusunu MAKİNEYE SORULABİLİR yapar.
//
// ⚠️ BU DOSYA ŞU AN ELLE YAZILDI ve bu BİR İSTİSNADIR — beyan ediyorum:
//    bundan sonra `arac/uret_petek.py` koşu sonunda kendisi yazacak (yaması
//    tam inşa kuyruğunda, motor tuzuna girdiği için `§9.1 ②` gereği tek
//    seferde girecek). Aşağıdaki değerler UYDURULMADI; hepsi
//    `git show 3a34f8b0` commit gövdesinden ve `0a23dce7`den BİREBİR okundu:
//      "uret_petek: MOTOR_YURUYUS=1 · MOTOR_COL_UFUK_SAAT=56 · MOTOR_UFUK_BANT=40,56,80"
//      "KOSU 19 CIKTISI (UMIT) — temel 52222fa3 · 1 sa 53 dk 52 sn"
//    Ölçemediğim alan `null` bırakıldı, tahminle doldurulmadı.
//
// 📌 `yuruyus:true` ile `false` iki AYRI SAHİPLİK PRENSİBİdir, aynı şeyin
//    ayarı değil:
//      true   sahiplik = en ucuz YÜRÜYÜŞ (sürtünme · nehir geçişi · eğim)
//             + `yuruyus_saat` BÜTÇESİ; bütçenin ötesi SAHİPSİZ kalır
//      false  sahiplik = Voronoi (düz çizgi en yakın) + A1 200 km tavanı;
//             nehrin bir bedeli YOKTUR, karşı yaka "en yakın" diye alınır
//    Bu yüzden damgada `yuruyus` alanı EN ÖNEMLİ alandır.

window.KOSU_DAMGA = {
  // KOŞU 25 ELLE yazıldı (HAVVA, 15 Ekim 2026). KOŞU 22-24 çıktıları da yayına indi ama bu dosya
  // GÜNCELLENMEDİ (Emre sitede "KOŞU 21" gördü, 15 Ekim). Değerler atlas-kosu25/kosu25-20261015-002715
  // -bayraklar.log ve aynı koşunun logundan birebir okundu. Çıktı commit'i: e2ca9be62 (yayın r12414).
  no: 30,                         // koşu numarası — arayüzde "KOŞU 30" diye görünür
  tarih: "2026-10-25",             // çıktının main'e alındığı gün
  makine: "HAVVA",                 // koşuyu KOŞTURAN makine
  commit: "39980344",              // KOŞU 30 çıktı commit'i (iniş; denetle 0: 8a 180/180 [Emre onayı, 154→180] · 8k defter 96 · 8b 0/0 · 7e 1985)
  temel: "ed75c356",               // koşunun girdi temeli · kosu30-hazirlik (bütün gece veri işleri; uret_petek 7a935c02)
  sure: "7 sa 58 dk + 10 sa 38 dk",  // 2026-10-25 00:49 → 08:47 GEOS çökmesi (0xC0000005) · MOTOR_DEVAM ile 08:53 → 19:31
  bayraklar: {
    yuruyus: true,                 // MOTOR_YURUYUS=1  ← sahiplik prensibi
    yuruyus_saat: 40,              // MOTOR_YURUYUS_SAAT=40 (bütçe 40 saat = 5 gün)
    yuruyus_16: null,              // MOTOR_YURUYUS_16 koşu ortamında YOKTU — varsayılan
    col_ufuk_saat: 0,              // MOTOR_COL_UFUK_SAAT=0 — çöl kelepçesi KAPALI (KOŞU 23'ten beri)
    ufuk_bant: [40, 56, 80],       // MOTOR_UFUK_BANT — 5 · 7 · 10 gün
    devam: true,                   // MOTOR_DEVAM=1
    surec_isci: 2,                 // MOTOR_SUREC_ISCI=2 — tuzda DEĞİL, sonucu değiştirmez
    yaka_kilidi: true,             // MOTOR_YAKA_KILIDI=1 (KOŞU 28'den beri)
    kistak_kopru: true,            // MOTOR_KISTAK_KOPRU=1 (başlatıcı bayrak logundan, KOŞU 30)
    komsu_kur_bol: true            // MOTOR_KOMSU_KUR_BOL=1 (başlatıcı bayrak logundan, KOŞU 30)
  },
  // Koşunun KENDİ denetim kaydı yok (koşu 30 denetle'si iniş zincirinde koşuldu); 8k körlük defteri:
  //   ÇIKIŞ 0 (iniş) · 7e 1985 · 8a 180/180 (tavan Emre onayıyla 154→180) · 8b 0/0 · 8k defter 96
  denetim: "denetim/DEGISMEZ-0086-kor-defter.json"
};
