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
  // KOŞU 20 de ELLE yazıldı (HAVVA, 6 Ekim 2026). Değerler koşu logundan
  // (C:\atlas-kosu-kayit\kosu20.log) ve başlatma kaydından birebir okundu.
  no: 20,                          // koşu numarası — arayüzde "KOŞU 20" diye görünür
  tarih: "2026-10-06",             // koşunun bittiği gün — main'e HENÜZ alınmadı
  makine: "HAVVA",                 // koşuyu KOŞTURAN makine
  commit: "6831b5da",              // çıktı commit'i (makine/havva dalında)
  temel: "fc380975",               // koşunun girdi temeli · yama YOK
  sure: "8 sa 14 dk 37 sn",        // 2026-10-05 21:20:57 → 2026-10-06 05:35:34
  bayraklar: {
    yuruyus: true,                 // MOTOR_YURUYUS=1  ← sahiplik prensibi
    yuruyus_saat: 40,              // MOTOR_YURUYUS_SAAT=40 (bütçe 40 saat = 5 gün)
    yuruyus_16: null,              // MOTOR_YURUYUS_16 koşu ortamında YOKTU — varsayılan
    col_ufuk_saat: 56,             // MOTOR_COL_UFUK_SAAT=56
    ufuk_bant: [40, 56, 80],       // MOTOR_UFUK_BANT — 5 · 7 · 10 gün
    surec_isci: 4                  // MOTOR_SUREC_ISCI=4 — tuzda DEĞİL, sonucu değiştirmez
  },
  // Koşunun KENDİ denetim kaydı (depoda): denetim/DEGISMEZ-KOSU20-HAVVA.log
  //   kodlamadan SONRA · ÇIKIŞ 2 — Değişmez 8 ÖLÇÜLEMEDİ (GÖVDE UYUŞMUYOR:
  //   ham .js CRLF, kodlanmış metin LF — geometri aynı, bayt özeti farklı) ·
  //   öteki değişmezler ✓ · konum 0
  denetim: "denetim/DEGISMEZ-KOSU20-HAVVA.log"
};
