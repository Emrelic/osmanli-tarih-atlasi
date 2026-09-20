# KRONO-YER-0072 — ÖNGÖRÜ (ölçümden ÖNCE yazıldı)

Yazılma anı: 2026-09-20, sevk alındıktan hemen sonra, hiçbir `olaylar*.js` / `app.js`
satırı okunmadan önce.

## Sınav evreni
- E1: `arac/girdi.py` ya da kronoloji ayrıştırıcısının okuduğu bütün kronoloji maddeleri
  (taban: 1688 madde, 1524'ünde `yer_id` — CLAUDE.md §1.5).
- E2: `js/app.js` içindeki madde→kamera zinciri (`haritayiOlayaGotur` ve çağırdıkları).

## Öngörüler
- **Ö1 (H-0009):** "İbrâhim Paşa Necid seferine çıktı" maddesinde `yer_id` YOK. Varsa bile
  çözülemeyen bir ad ("Necid" bir bölge, yerleşim değil).
- **Ö2 (H-0012):** "Ypsilanti'nin Prut'u geçmesi" maddesinde de `yer_id` YOK; Prut bir
  NEHİR, yerleşim noktası olamaz — bu yüzden ad-eşleme zinciri boş dönüyor.
- **Ö3 (kod):** `app.js`te zincir şöyle: `yer_id` → yerleşim koordinatı → yoksa `yer`
  adıyla arama → yoksa `yer_kon` → hiçbiri yoksa **düşüş (fallback) imparatorluk/devlet
  sınırına fitBounds**. Yani kaçış bir hata değil, TANIMLI düşüştür; kusur verinin
  eksikliğinde.
- **Ö4 (evren):** yer bağı hiç olmayan (ne `yer_id`, ne çözülebilir `yer`, ne `yer_kon`)
  madde sayısı **100–164** aralığında, merkez tahmin **~130**. (1688 − 1524 = 164 madde
  `yer_id`siz; bunların bir bölümünde `yer`/`yer_kon` vardır diye 164'ün altını bekliyorum.)
- **Ö5 (sebep dağılımı):** en büyük kova "yerleşim noktası yok / yer yerleşim DEĞİL"
  (bölge, nehir, deniz, cephe adı) olacak; ad yazım farkı ikinci; "yer gerçekten belirsiz"
  en küçük kova.
