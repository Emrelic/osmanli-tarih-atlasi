# KENDİ YAZDIĞIN AYRIŞTIRICI, VAR OLAN BİR AYRIŞTIRICIDAN HER ZAMAN KÖTÜDÜR.

> Kimlik `D023` · `CLAUDE.md §11` dizininden taşındı (10 Eylül 2026 budaması).
> Slogan orada, vaka burada.

---

- 🔴 **KENDİ YAZDIĞIN AYRIŞTIRICI, VAR OLAN BİR AYRIŞTIRICIDAN HER ZAMAN
  KÖTÜDÜR.**
  Yukarıdaki öngörünün **ilk iki sürümü yanlıştı ve ikisi de SESSİZDİ:**
  ```
  ① regex `[^,]*` kullandı ⇒ ADINDA VİRGÜL olan kimlikleri kaçırdı
     (`dogu-sumatra-sultanliklari`: "…(Jambi, Siak, Deli…)")
     8 kimlik sessizce kayboldu — "310 kimlik" dedi, gerçek 314
  ② düzeltme bash heredoc'undan geçirildi, kaçışlar yendi, regex hiçbir
     şey eşleştirmez oldu → "0 kimlik" ve 298 SAHTE delik
  ```
  ⚠️ İkincisi `§11`in **aynı gün BEŞİNCİ ihlali** — ve tam da o dersi
  uygularken. **Kural yetmiyor.**
  🟢 **Çare regex'i düzeltmek değil, REGEX'İ BIRAKMAK oldu:** `renkler.py`
  o revizyondan dosyaya yazılıp **içe aktarıldı**; ayrıştırma işini Python'un
  kendi ayrıştırıcısı yaptı.
  📌 Bu proje aynı şeyi bugün **üçüncü kez** öğrendi (`girdi.py`nin tek
  tırnak vakası · `bagla.py`nin CRLF vakası · bu). ⇒ **Veri zaten bir dilde
  yazılıysa, o dilin yorumlayıcısını çağır.**
