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
  // GÜNCELLENMEDİ (Emre sitede "KOŞU 21" gördü, 15 Ekim). Değerler C:tlas-kosu25\kosu25-20261015-002715
  // -bayraklar.log ve aynı koşunun logundan birebir okundu. Çıktı commit'i: e2ca9be62 (yayın r12414).
  no: 25,                          // koşu numarası — arayüzde "KOŞU 25" diye görünür
  tarih: "2026-10-15",             // çıktının main'e alındığı gün
  makine: "HAVVA",                 // koşuyu KOŞTURAN makine
  commit: "e2ca9be62",             // KOŞU 25 çıktı commit'i (damga sonradan elle yazıldı)
  temel: "b0b48774",               // koşunun girdi temeli · yama YOK
  sure: "4 sa 44 dk 07 sn",        // 2026-10-15 00:27:15 → 05:11 (AŞAMA BİLANÇOSU)
  bayraklar: {
    yuruyus: true,                 // MOTOR_YURUYUS=1  ← sahiplik prensibi
    yuruyus_saat: 40,              // MOTOR_YURUYUS_SAAT=40 (bütçe 40 saat = 5 gün)
    yuruyus_16: null,              // MOTOR_YURUYUS_16 koşu ortamında YOKTU — varsayılan
    col_ufuk_saat: 0,              // MOTOR_COL_UFUK_SAAT=0 — çöl kelepçesi KAPALI (KOŞU 23'ten beri)
    ufuk_bant: [40, 56, 80],       // MOTOR_UFUK_BANT — 5 · 7 · 10 gün
    devam: true,                   // MOTOR_DEVAM=1
    surec_isci: 2                  // MOTOR_SUREC_ISCI=2 — tuzda DEĞİL, sonucu değiştirmez
  },
  // Koşunun KENDİ denetim kaydı (depoda): denetim/DEGISMEZ-KOSU25-HAVVA.log
  //   ÇIKIŞ 0 · 7e 1904/1904 · 8a 1500/1505 (eski ölçüt) · 8b 84/84
  denetim: "denetim/DEGISMEZ-KOSU25-HAVVA.log"
};
