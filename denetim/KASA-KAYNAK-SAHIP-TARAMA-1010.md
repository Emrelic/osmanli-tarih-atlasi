# KASA-KAYNAK-SAHIP-TARAMA-1010 — "kaynak notunun adıyla andığı sahip ≠ dilimin `d:`'si" (Malta tipi)

Görev: YILDIRIM BAYEZIT (GOVDE-TANIK kararı ②(d), sıradaki iş) · Araştırmacı: KASA · `data/` DONUK · salt okuma.
Çıkış noktası: GOVDE-TANIK K örneklemi — Malta `napoli 1282-1530` ama dilimin KENDİ `kaynak:`ı TDV `malta`yı
aktarıyor: *"1284'ten Aragon, 1410'dan Kastilya"*. Kaynak doğru, veri kaynağı izlemiyor. Bu, kaydın İÇİNDE duran bir
çelişki ⇒ tanık aramaya gerek yok, kaynak notu ve onun alıntıladığı madde okunur.

## 0. ÖNGÖRÜ ve ÖLÇÜT (ölçümden ÖNCE, 2026-10-10 — ayrı commit, sayım yapılmadan)

### 0.1 Tanımlar (kilitli; GOVDE-TANIK'ın dersiyle: kusurlu çıkarsa kilit korumaz, sapma adıyla ve iki sayı yan yana)
- **Evren:** `_kaynak_tanikli` olan bütün `s:` dilimleri (dönemin kendi `kaynak:`'ı; `bulunamadı` hariç).
- **Sözlük (devlet adı → kimlik):** `devletler.js`'teki her künye için anahtarlar: (a) `id`'nin `-` ile bölünmüş
  ilk parçası ≥ 5 harfse ve başka künyenin ilk parçasıyla çakışmıyorsa; (b) `ad` alanının `/`, `(`, `,`, `—` ile
  bölünmüş parçalarının ilk sözcüğü ≥ 5 harfse. Eşleşme: kaynak metninde (küçük harf, Türkçe katlama) anahtarın
  **sözcük başında** geçmesi (Türkçe ek alır: "Aragonlular", "Kastilyalılar", "Hafsîler"). Birden çok künyeye giden
  belirsiz anahtarlar ATILIR. Künye ömrü dilimle hiç kesişmeyen eşleşmeler sayılmaz.
- **Sınıflar:** `KENDİ` (kaynak dilimin `d:`'sini anıyor) · `YABANCI` (dilimin `d:`'sini anmıyor, ömrü dilimle kesişen
  başka bir künyeyi anıyor) · `SESSİZ` (hiç künye anmıyor).
- **Örneklem Y (risk):** `YABANCI` sınıfından uzunluğa göre ilk 40 (UZUN-DILIM ve GOVDE-TANIK'ta okunanlar hariç).
- **Örneklem Kk (kontrol):** `KENDİ` sınıfından, L ≥ Y'nin en küçük L'sinin yarısı olanlardan `random.Random(1010)`
  ile 20.
- **Okuma (ucuz):** önce dilimin kendi `kaynak:` metni; kaynak bir TDV maddesini alıntılıyorsa alıntı TDV gövdesinde
  aranır (alıntının madde içinde VARLIĞI doğrulanır). Gerekirse aynı maddenin başka cümlesi.
- **Hükümler:**
  - `İÇ-ÇELİŞKİ` (YANLIŞ): kaynağın (doğrulanmış) cümlesi, dilimin İÇİNDE ≥ 1 yıl için başka bir `d:` sahibi veriyor,
    ya da dilimin bir ucuyla ≥ 5 yıl çelişen bir tarih veriyor.
  - `UYUMLU`: kaynak cümlesi dilimin sahibini ve tarihini karşılıyor; adı geçen öteki devlet selef/halef/taraf olarak
    anılıyor.
  - `ÖLÇÜLEMEDİ`: alıntı TDV gövdesinde bulunamadı, kaynak TDV değil ve açılamadı, ya da cümle hüküm vermiyor.
  - `SÖZLÜK-HATASI`: eşleşme yanlış (anahtar başka bir şeyi adlandırıyor). Paydaya GİRMEZ, sözlük isabeti olarak
    ayrıca raporlanır.
- **Oran:** İÇ-ÇELİŞKİ / (İÇ-ÇELİŞKİ + UYUMLU), Y ve Kk için ayrı.

### 0.2 Sayısal öngörüler (sayımdan önce)
- Tanıklı dilimler (~1.225): `KENDİ` **%45 ± 15** · `YABANCI` **%20 ± 10** · `SESSİZ` **%35 ± 15** (sözlük
  Türkçe; İngilizce/Hırvatça/Rusça kaynak metinleri büyük ölçüde SESSİZ'e düşer).
- Y'de sözlük isabeti (gerçekten bir devlet adlandırılmış): **%75 ± 15**.
- Y'de anılan öteki devlet çoğunlukla **selef ya da halef** (dilimin ucunda el değiştiren): **%60 ± 20** ⇒ çoğu
  UYUMLU çıkar.
- **Y İÇ-ÇELİŞKİ oranı: %25 ± 15.** **Kk: %5 ± 5.** Hipotez: Y − Kk ≥ **15 puan**.
- İÇ-ÇELİŞKİ'lerin türü: ① dilim yanlış künyede ama kaynak doğru künyeyi adlandırıyor (Malta tipi) ② kaynak bir ara
  sahibi anıyor, dilim onu yutuyor (gecenin ana deseni, ama bu kez kaydın İÇİNDE). ①:② ≈ 1:2.
- Bölge: İÇ-ÇELİŞKİ'lerin çoğu Akdeniz adaları ve Balkan/Adriyatik (Malta, Mljet aynı gece çıktı).

### 0.3 Yanlışlanma şartları
- Y − Kk < 10 puan ⇒ "kaynak başka sahip anıyor" bir risk ölçütü değil.
- Sözlük isabeti < %50 ⇒ ölçüt sözlüğe bağlı kaldı, oran hüküm vermez; sözlük düzeltilip yeniden çekilir (beyanlı).
- Y'de ölçülebilen < 15 ⇒ hüküm verilmez.
