# ALETİN GÖSTERDİĞİ ≠ DOSYADA YAZAN.

> Kimlik `D043` · `CLAUDE.md §11` dizininden taşındı (10 Eylül 2026 budaması).
> Slogan orada, vaka burada.

---

- 🔴 **ALETİN GÖSTERDİĞİ ≠ DOSYADA YAZAN.** Bir `\b` kaçışı bozulup dosyaya
  **0x08 (BACKSPACE) baytı** yazıldı. `Read` onu **görünmez** gösterdi —
  satır ekranda kusursuz görünüyordu:
  ```
  ekranda   re.findall(r"<script(?![^>]*\bsrc=)…"
  dosyada   re.findall(r"<script(?![^>]*␈src=)…"     ← 0x08
  ```
  Sonuç: lookahead hiç eşleşmedi, denetim `<script src=…>` etiketlerini de
  saydı (1 yerine **55**). Denetim **çalışıyordu ama sayısı yalandı** —
  yani ne çıktı hata verdi ne de göz.
  > **Bir düzenlemenin doğruluğundan şüphelenmek için sebep varsa,
  > `Read`'e değil `repr()`'e sor.** `inspect.getsource(...)` + `repr` ya da
  > `open(yol,"rb").read().count(b"\x00…")` görünmeyeni gösterir.

  📌 Bu, kusur listesinin **onuncu** sınıfı ve öncekilerin hiçbirine
  benzemiyor: ①-⑦ *yanlış şeyi ölçmek*, ⑧-⑨ *hiç ölçmemek*, ⑩ ise
  **doğru şeyi ölçüp ALETİN yalan söylemesi.**
