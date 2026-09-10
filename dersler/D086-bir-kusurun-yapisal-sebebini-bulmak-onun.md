# BİR KUSURUN YAPISAL SEBEBİNİ BULMAK, ONUN YAYGINLIĞINI DA SÖYLER.

> Kimlik `D086` · `CLAUDE.md §11` dizininden taşındı (10 Eylül 2026 budaması).
> Slogan orada, vaka burada.

---

- 🟢 **BİR KUSURUN YAPISAL SEBEBİNİ BULMAK, ONUN YAYGINLIĞINI DA SÖYLER.**
  *(5 Eylül 2026 · `Kiz?lirmak` · `NEHİR SÜRTÜNME`)*

  Kaynak verisindeki `?` kusuru sayıldı ve **tekil** çıktı — ama asıl
  cevabı sayı değil **şema farkı** verdi:
```
ne_10m_lakes   name · name_en · name_alt · **name_tr** · name_ar ·
               name_de · name_el · name_fa …   (20+ dil alanı)
ne_10m_rivers  name · name_en · name_alt      ← YEREL DİL ALANI HİÇ YOK
`?` içeren ad:  göller 0   ·   nehirler 2 (ve ikisi AYNI nehir)
```
  ⇒ Göllerin Türkçe ad **kanalı var**, nehirlerin **yok**: nehir adları
  tek bir transliterasyon kanalından geçiyor ve `ı` orada kayboluyor.
  ***Kusur yalnız alanın eksik olduğu katmanda doğabilir*** — ve
  göllerdeki `0` bunu doğruluyor.
  📌 Bir sayım *"iki vaka var"* der; yapısal sebep ***"başka nerede
  olabileceğini"*** söyler. İkincisi olmadan sayım bir tahmindir: bir
  sonraki veri sürümünde `?` sayısı değişebilir, ama **eksik alan**
  değişmedikçe kusur sınıfı durur.
