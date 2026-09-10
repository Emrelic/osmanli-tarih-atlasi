# YENİ YAZILAN DENETİM, İKİ YÖNDE DE SINANMADAN "ÇALIŞIYOR" SAYILMAZ.

> Kimlik `D010` · `CLAUDE.md §11` dizininden taşındı (10 Eylül 2026 budaması).
> Slogan orada, vaka burada.

---

- 🔴 **YENİ YAZILAN DENETİM, İKİ YÖNDE DE SINANMADAN "ÇALIŞIYOR" SAYILMAZ.**
  ```
  GEÇME YOLU   kusur yokken TEMİZ diyor mu
  ATEŞLEME     HER kusur dalı için AYRI AYRI, gerçekten ötüyor mu
  ```
  ⚠️ Gerçek veride o kusur yoksa dal koşulamaz ⇒ **sahte girdi ya da geçici
  eşik değişikliğiyle ZORLA ateşlenir. Zorlanamayan dal, denetimsiz daldır.**

  **Vaka (7 Ağustos 2026, RENK 2):** yeni bir nöbetçi (`arac/renk_fark.py`)
  yazıldı. Geçme yolu ✓, ateşlemenin dört dalından üçü ✓ — ama *"var olan
  çift eşiğin altına düştü"* dalı **hiç ateşlemedi**, çünkü bugünkü veride o
  durum yok. Eşik geçici olarak zorlandı → **132 düşen çift, çıkış kodu 1**,
  dal sağlam çıktı.
  🔴 **Ve o dal, tam olarak bir sonraki koşuda beklenen kusur sınıfını
  yakalayacak olan daldı.** Sınanmasaydı yeni denetim **ilk gerçek işinde
  sessizce "TEMİZ" diyecekti.**

  📌 Ve bu, `arac/renkler.py`de yazılı olan uyarının **ters yönü**: orada
  *"ateşleme yolunu sınadım, geçme yolunu değil"* diyor. Proje daha önce
  ateşlemeyi sınayıp geçmeyi sınamamıştı; bu oturum tersini yaptı ve kendi
  eksiğini kapattı. **İki yarım ders bir tam kural ediyor.**
  📌 Bu, `§3.5`teki *"bir veri KATEGORİSİ hiç denetlenmemiş olabilir"*
  dersinin **kod tarafıdır**: orada çağrılmayan bir ARGÜMAN vardı, burada
  ateşlenmeyen bir DAL var. İkisi de *"araç doğru ama kapsamı ölçülmemiş"*.
