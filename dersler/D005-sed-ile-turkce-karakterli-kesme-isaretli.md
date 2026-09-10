# `sed` ile Türkçe karakterli / kesme işaretli düzeltme yapma

> Kimlik `D005` · `CLAUDE.md §11` dizininden taşındı (10 Eylül 2026 budaması).
> Slogan orada, vaka burada.

---

- **`sed` ile Türkçe karakterli / kesme işaretli düzeltme yapma** — Git Bash'te
  tırnak eşleşmesi bozuluyor. Bunun yerine scratchpad'e `py` betiği yaz ve çalıştır.

  🔴 **VE BU KURAL `heredoc`U DA KAPSAR — 6 Ağustos'ta DÖRT KEZ ısırdı.**
  `py - <<'EOF'` ile yazılan her kaçış (`\b` · `\n` · backtick) bozulabiliyor:
  ```
  girdi.py yorumu     `ek13` ve `cin-cumhuriyeti` backtick'i bash'e ÇALIŞTI, kelimeler SİLİNDİ
  denetle_yayin.py    \n gerçek satır sonuna döndü → sözdizimi hatası
  denetle_yayin.py    \b → 0x08 BACKSPACE BAYTI (aşağıya bak)
  arac2s.py           aynı \n vakası (PETEK/NOKTA'da)
  ```
  ⇒ **Kaçış içeren hiçbir düzeltme bash'ten geçirilmez.** Betiği `Write`
  aracıyla scratchpad'e yaz, sonra `py <yol>` ile çalıştır. İstisna yok.
