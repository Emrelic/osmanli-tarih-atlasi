# `t:` ALANI İKİ ANLAMA GELİYOR — "devlet bitti" ve "atlasın penceresi bitiyor" — ve kayıtta ikisi AYRIŞTIRILAMIYOR.

> Kimlik `D195` · 11 Eylül 2026 · `PRENSLİK PENCERE` oturumunun
> bulgusu, `denetim/BULGU-PRENSLIK-PENCERE-0911.md`. Slogan
> `CLAUDE.md §11`de, vaka burada.

---

- 🔴🔴 **`t:` ALANI İKİ FARKLI ANLAMA GELİYOR VE KAYITTA BU İKİSİ
  AYRIŞTIRILAMIYOR.**
  ```
  (A) PENCERE SONU BEYANI   "atlas buradan sonrasını çizmiyor,
                            devlet AslInDA sürüyordu"
  (B) GERÇEK BİTİŞ TARİHİ   "devlet bu tarihte/yakınında GERÇEKTEN bitti"
  ```
  **Ölçüm:** `t:` değeri tam `1923-10-29` (atlas ufku) olan **114**
  künyeden **113'ü (%99)** (A) — yalnız `tbmm-turkiye` (B). Bu bir
  "birkaç istisna" değil, ABD, bütün Güney Amerika, İngiltere, Fransa,
  İskandinavya, Fransız Cezayiri, Irak Krallığı dahil **neredeyse
  EVRENSEL bir desen.**

  🔴 **VE UYARI EN ÇOK İHTİYAÇ DUYULAN YERDE EKSİK:** 114'ün **69'u
  (%61)** `ozet:` alanına elle bir uyarı cümlesi eklemiş ("…1923
  sonrasında da sürdü" gibi) — yazan oturumlar SORUNUN FARKINDAYDI. Ama
  **45'i (%39) bu uyarıyı TAŞIMIYOR**, ve bu 45'in içinde ABD, Kanada,
  bütün Güney Amerika cumhuriyetleri, Irak Krallığı gibi **yüzyıl
  ölçeğinde yanlış** kayıtlar var. Uyarı rastgele eksik değil — tam
  tersine, en pahalı yanılgı riski taşıyan kayıtlarda GÜVENDE
  hissettiren bir örüntü yok.

  ⇒ **Bunu ayırt eden TEK sinyal, elle yazılmış YAPILANDIRILMAMIŞ bir
  `ozet:` cümlesi — bir alan/bayrak DEĞİL.** Hiçbir araç, hiçbir UI kodu
  bu cümleyi okuyup "(A) mı (B) mi" diye ayırt edemiyor; `js/app.js`in
  kart gösterimi (varsayıldı, bu görevde doğrulanmadı) muhtemelen her
  iki durumda da aynı "1281 – 1923" tipi aralığı basıyor.

  📌 `D180`in genişlemesi: orada *"pencere ucu bir sorgu günü olarak
  kullanılamaz"* deniyordu (ölçüm ekseninde). Burada AYNI pencere ucu
  bir GÖSTERİM ekseninde de yalan söylüyor — kullanıcıya "bu devlet
  1923'te bitti" izlenimi veriyor, oysa çoğu zaman "atlas burada
  duruyor" demek istiyor.

  ⇒ **Bir pencere-sonu değeri (`1923-10-29` gibi) ile bir gerçek-bitiş
  değeri AYNI ALANDA, AYNI BİÇİMDE tutuluyorsa, o alanı okuyan HİÇBİR
  KOD ikisini ayırt edemez** — çözüm bir metin uyarısı değil,
  yapılandırılmış bir bayrak (örn. `pencere_sonu:true`) olmalı.
