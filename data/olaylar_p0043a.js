// =====================================================================
// PAKET 0043 · IS① — ŞEHİRKÖY ZİNCİRİ (H-0002 · H-0004 · H-0008)
// Oturum: KITA 14 · görev tahta M-3592 · triyaj denetim/TRIYAJ-PAKET-0043-0912.md §③
//
// 🔴 BU DOSYA SEVKİN BEKLEDİĞİNDEN AZ MADDE TAŞIYOR — ve sebebi ölçüldü.
//
// Sevk iki kusur bildirdi:
//   ① "1443-01-01 YUVARLAK VE MUHTEMELEN YANLIŞ — gerçek günü ARA"
//   ② "1456-01-01 dönüşünün KRONOLOJİ MADDESİ YOK"
//
// ①  ÇÜRÜDÜ. TDV `sehirkoy` gövdesi okundu: *"Kral Vladislav ve Sırp
//    Despotu Curac Brankoviç liderliğindeki Haçlı ordusu Şehirköy'ü
//    zaptetti"* — YIL veriyor, GÜN VERMİYOR. `1443-01-01` bu yüzden
//    yuvarlak DEĞİL, `§4`ün kendi yazımıdır: *"yıl biliniyor, gün
//    bilinmiyor."* Sevkin önerdiği 1443-11-03 (Niş'in düşüşü) Şehirköy
//    için KAYNAKSIZ olurdu — ve `§4` bunu açıkça yasaklıyor:
//    *"künyenin f:/t: günü bir KAYNAK DEĞİLDİR."*
//    ⇒ Şehirköy'ün DÖNEMLERİNE DOKUNULMADI.
//
// ②  DOĞRU, ama Değişmez 2 anlamında değil: 1456-01-01'in ±0 gününde
//    ÜÇ madde var (iki İtalyan şehri + Enez), yani denetim KAPALI
//    diyor. Kusur `D147`in tarif ettiği cinsten: *"Değişmez 2'nin
//    'kapalı' hükmü, o günün BÜTÜN geçişlerinin anlatıldığı anlamına
//    gelmez."* Emre'nin H-0008 şikâyeti (*"alınıyor ama kronolojide
//    görünmüyor"*) tam bu boşluktur. Aşağıdaki madde onu kapatır.
//
// ─────────────────────────────────────────────────────────────────────
// 🔴🔴 VE ASIL BULGU BU DOSYADA DEĞİL — NİŞ'TE. (§3.5.1: İKİ UÇ DA ÖLÇÜLÜR)
//
// TDV `nis`, aynen:
//   "24 Safer 848'de (12 Haziran 1444) Edirne'de, 12 Temmuz'da ise
//    Segedin'de on yıllığına imzalanan Edirne-Segedin Antlaşması'ndan
//    sonra NİŞ SIRPLAR'A İADE EDİLDİ … 860'ta da (1456) Curac
//    Brankoviç'in ölümünün ardından kati olarak Osmanlı hâkimiyetine
//    girdi."
//
// ÖLÇÜLDÜ (1444-08-15 kesiti):
//   Şehirköy   sirp-despotlugu   ✓   Alacahisar  sirp-despotlugu  ✓
//   Semendire  sirp-despotlugu   ✓   NİŞ         OSMANLI          🔴
//
// ⇒ Atlas Segedin iadesini Alacahisar ve Semendire için ZATEN modelliyor
//   (ikisi de `1444-08-01`). Niş'te modellemiyor. Şehirköy'ün "tam
//   enklav" görünmesinin sebebi Şehirköy DEĞİL, 59 km batısındaki Niş.
//   🔒 `data/yerlesimler.js` Oturum 0'ın dosyası — DOKUNULMADI, BİLDİRİLDİ.
//
// 📌 Ve triyajın "8 komşunun 8'i farklı" ölçümü kısmen KESİT ARTEFAKTI:
//    ölçüm 1444-06-15'te alınmış, oysa atlasın Segedin günü 1444-08-01.
//    O tarihte Alacahisar ve Semendire HENÜZ Osmanlı'ydı. 1444-08-15'te
//    ikisi de Sırp.
// ─────────────────────────────────────────────────────────────────────
// AD ALANI (§7): dosya adındaki ayırt edici parça değişken adında da var.
//    data/olaylar_p0043a.js  →  window.OLAYLAR_P0043A
// 🔴 index.html satırı 1.MURAT'ta — bu dosya BAĞLANMADAN CANLI DEĞİLDİR.
// =====================================================================

window.OLAYLAR_P0043A = [

{ t:"1456-01-01", b:"Şehirköy Osmanlı hâkimiyetine döndü — Curac Brankoviç'in ölümü", tur:"fetih",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","toprak","serhat"],
  yer_id:"Şehirköy (Pirot)",
  d:"1443'te Haçlı ordusunca zaptedilen ve 1444 Edirne-Segedin Antlaşması'nın ardından II. Murad tarafından Sırplar'a bırakılan Şehirköy, 1456'da Sırp Despotu Curac Brankoviç'in ölümüyle Osmanlı hâkimiyetine döndü. Aynı yıl ve aynı sebeple Niş de kesin olarak Osmanlı idaresine girdi; Nişava vadisinin Sofya yoluna açılan hattı böylece bütünlendi. Antlaşmanın süresi on yıl olarak imzalanmıştı ve Varna (1444) ile II. Kosova'nın (1448) ardından Despotluk'un ömrü ancak Brankoviç'in hayatı kadar sürdü.", ic_not_d:"⚠️ TARİH HAKKINDA: TDV her iki madde için de (`sehirkoy`, `nis`) YIL veriyor, GÜN VERMİYOR. `1456-01-01` bu yüzden bir gün iddiası değil, `§4`ün 'yıl biliniyor, gün bilinmiyor' yazımıdır.",
  kaynak:"sehirkoy + nis" },

];
