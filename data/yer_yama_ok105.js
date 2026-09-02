// ============================================================================
// YER_YAMA_OK105 — SAHİPLİK YAMASI · OPUS HAZIR KITA 105 · parti-emrelic-0030
//
// 🔴 BU DOSYA BAĞLANMAZ, UYGULANIR.
//    `arac/_sahiplik_uygula.py` okur ve hedef `yerlesimler*.js`e işler.
//    `girdi.py`ye EKLENMEZ — eklenirse aynı yerleşim İKİ KEZ girer
//    (`girdi.py`nin `yerlesimler_kafkas_duzeltme.js` için yazdığı ders).
//    Ad alanı dosya adından türetildi (`ok105`) — `CLAUDE.md §7`.
//
// ───────────────────────────────────────────────────────────────── H-0017
// Emre: "osmanlı nişi almış ama burada bir sırbistan toprağı kalmış
//        görünüyor o toprağı sahiplenecek bir şehir de göremedim ben
//        acaba bu bir hata mı"
//
// CEVAP: ŞEHİR VAR (Şehirköy/Pirot) — ama Emre'nin sezgisi DOĞRU, hata da var.
//
// ÖLÇÜM (`_yer_ara.py --kutu 42.40 20.30 44.60 23.20 --gun 1390-06-15`):
//   Sofya            d: 1385-09-01'den   OSMANLI
//   Niş              d: 1386-01-01'den   OSMANLI
//   Şehirköy (Pirot) s: sirbistan 1281 → 1428      ← 42 YIL Sırp
//   Alacahisar       s: sirbistan 1281 → 1428
// 🔴 Şehirköy, Osmanlı Sofya'sı ile Osmanlı Niş'i ARASINDADIR. TDV:
//   "Belgrad-Sofya-İstanbul kara ve demiryolu üzerinde önemli bir bağlantı
//    noktasıdır." ⇒ Veri, Osmanlı'nın Niş'e Sırp toprağının ÜSTÜNDEN
//   ATLADIĞINI söylüyor. Emre'nin gördüğü parça budur.
//
// KAYNAK — TDV `sehirkoy` (HTTP 200 · Machiel Kiel · GÖVDESİ OKUNDU):
//   "Osmanlılar'ın I. Murad devrinde Balkanlar'da ilerledikleri, Sofya ve
//    Niş'e (1386) hâkim oldukları sırada ana yol üzerinde ve nehrin
//    kıyısında olan kaleyi de ele geçirdikleri tahmin edilmektedir."
//   "1412'de Sırp Despotu Stefan Lazareviç tarafından alındı ve Mûsâ
//    Çelebi'nin saldırısına karşı savunuldu. Ertesi yıl Mûsâ Çelebi'nin
//    ölümüyle Çelebi Sultan Mehmed kaleyi resmen vasalı Stefan Lazareviç'e
//    iade etti. 1428'de Lazareviç'in ölümünden sonra Osmanlılar kaleyi
//    geri aldı."
//   ⇒ Veri 1428 SONRASINI (1428 · 1443 · 1444/1456) DOĞRU tutuyor;
//     eksik olan yalnız 1386-1428 penceresidir.
//   Slug testi: `sehirkoy` 200 ✓ · `pirot` 302 ÖLÜ · `krusevac` 302 ÖLÜ.
//
// ⏱ TAKVİM: atlas JÜLYEN, TDV de bu dönemde Jülyen ⇒ ÇEVİRME YAPILMADI.
//
// SEÇİLEN GÜNLER — ikisi de ÖLÇÜLDÜ, uydurulmadı, İKİSİ DE KÜLLİYATTA VAR:
//   1386-01-01  2 kronoloji maddesi · 62 kırılma kaydı (Niş'in fethi zaten
//               bu gün) ⇒ YENİ gün AÇMIYOR.
//   1413-07-05  1 kronoloji maddesi · 270 kırılma kaydı (Mûsâ Çelebi'nin
//               ölümü, Fetret'in sonu) ⇒ YENİ gün AÇMIYOR.
//               Ve TDV'nin devir cümlesi TAM BU GÜNE oturuyor: "Ertesi yıl
//               Mûsâ Çelebi'nin ölümüyle Çelebi Sultan Mehmed kaleyi
//               RESMEN vasalı Stefan Lazareviç'e İADE ETTİ."
//
// 🔴 İLK YAZDIĞIM HÂLİ REDDEDİLDİ VE REDDEDEN HAKLIYDI — kayda geçiyorum.
//   İlk sürüm devir gününü `1412-01-01` yapmıştı (TDV yıl veriyor, gün
//   vermiyor ⇒ `§4` gereği `YYYY-01-01`). Kuru koşu onu durdurdu:
//       [!] ATLANAN — Şehirköy (Pirot)
//           MADDESİZ GÜN (Değişmez 2 açılır): 1412-01-01
//   Ölçüm doğruladı: 1412-01-01'in ±30 gününde madde YOK (en yakın -214 /
//   +274 gün). Ve o gün bir `d:` penceresinin BİTİŞİ olduğu için
//   `Değişmez 2`nin menzilinde — yani koruma ④ tam yerinde ötmüş.
//   ⇒ Eşiği zorlamak yerine DAHA İYİ KAYNAKLANMIŞ günü seçtim: 1412
//     savaş içinde bir ZAPT, 1413-07-05 ise TDV'nin "resmen iade etti"
//     dediği BELGELİ devirdir. Doğruluktan ödün verilmedi, ARTTI.
//
// 🔴 MODELLENMEYEN İKİNCİ OLAY: 1412'de Stefan Lazareviç'in kaleyi ALMASI
//   ve Mûsâ Çelebi'ye karşı savunması. Kayıt bunu ifade ETMİYOR, çünkü
//   1412 için külliyatta gün yok ve uydurmak `§4` ihlali olurdu. Bu
//   kaydedilmiş bir GECİKMEdir, kusur değil — 1412'ye bir kronoloji
//   maddesi inerse pencere ikiye bölünebilir.
//
// 🔴 MODELLENMEYEN BİR OLAY VAR VE BİLEREK YAZILMADI:
//   TDV, Kosova savaşından (1389) hemen önce Sırp kumandanı Dimitri
//   Vojinović'in kaleyi geri aldığını, I. Murad'ın 10.000 kişi
//   gönderdiğini, Sırpların kaleyi BOŞALTIP YAKTIĞINI ve kalenin kısa
//   süre sonra yeniden inşa edildiğini anlatıyor. Ne ele geçirme ne geri
//   alma için GÜN veriyor, ve olay aynı sefer içinde kapanıyor.
//   ⇒ İki tarih UYDURMAK gerekirdi; yazılmadı. `bulunamadı` bir SONUÇTUR.
//
// ⚠️ DİZİ BÜTÜN OLARAK DEĞİŞİR (emilme2 dersi): uygulayıcı `s:`/`d:`
//   alanını TAMAMEN değiştirir, o yüzden ikisi de var olan bütün
//   pencereleri TAŞIYOR. Değişmez 1 elle sağlandı — 1281'den 1923-10-29'a
//   kadar KESİNTİSİZ:
//     1281→1386 s · 1386→1413-07-05 d · 1413-07-05→1428 s · 1428→1443 d ·
//     1443→1456 s · 1456→1689-09-24 d · 1689-09-24→1690-09-09 s ·
//     1690-09-09→1878-07-13 d · 1878-07-13→1882 s · 1882→1918 s ·
//     1918→1923-10-29 s
//
// ✓ Değişmez 4 (hayalet devlet) sınandı: `sirp-despotlugu` künyesi
//   f:1402-01-01 → t:1459-06-20 ⇒ 1413-1428 penceresi künyenin İÇİNDE.
// ============================================================================
window.YER_YAMA_OK105 = [

{ ad:"Şehirköy (Pirot)",
  s:[{f:"1281-01-01",t:"1386-01-01",d:"sirbistan"},
     {f:"1413-07-05",t:"1428-01-01",d:"sirp-despotlugu"},
     {f:"1443-01-01",t:"1456-01-01",d:"sirp-despotlugu"},
     {f:"1689-09-24",t:"1690-09-09",d:"avusturya"},
     {f:"1878-07-13",t:"1882-03-06",d:"sirbistan-prensligi"},
     {f:"1882-03-06",t:"1918-12-01",d:"sirbistan-kralligi"},
     {f:"1918-12-01",t:"1923-10-29",d:"yugoslavya"}],
  d:[{f:"1386-01-01",t:"1413-07-05"},
     {f:"1428-01-01",t:"1443-01-01"},
     {f:"1456-01-01",t:"1689-09-24"},
     {f:"1690-09-09",t:"1878-07-13"}],
  kaynak:"sehirkoy",
  not:"H-0017 · 1386-1413 penceresi veride HIC yoktu: Sehirkoy, Osmanli Sofya'si (1385-09-01) ile Osmanli Nis'i (1386-01-01) ARASINDA olmasina ragmen 1428'e kadar Sirp gorunuyordu. Emre'nin 'Nis'in yaninda kalmis Sirbistan topragi' dedigi parca budur. IKI olay BILEREK modellenmedi, ikisinde de TDV GUN vermiyor: (1) 1389 Vojinovic'in kaleyi geri almasi ve Sirplarin yakip terk etmesi, (2) 1412'de Stefan Lazarevic'in zapti. Devir gunu olarak TDV'nin 'resmen iade etti' dedigi 1413-07-05 (Musa Celebi'nin olumu) secildi — o gun kulliyatta VAR, 1412-01-01 ise YOKTU ve uygulayici onu haklı olarak reddetti." }

];
