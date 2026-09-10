# `§7.1⑤b` TEK TARAFLIYDI — TAHTA ARIZASININ İKİ CİNSİ VAR, VE ARACIN "TEKRAR YAZMA" TALİMATI BİRİNDE DOĞRU ÖTEKİNDE YANLIŞ.

> Kimlik `D154` · `CLAUDE.md §11` dizininden taşındı (10 Eylül 2026 budaması).
> Slogan orada, vaka burada.

---

- 🟢 **`§7.1⑤b` TEK TARAFLIYDI — TAHTA ARIZASININ İKİ CİNSİ VAR, VE
  ARACIN "TEKRAR YAZMA" TALİMATI BİRİNDE DOĞRU ÖTEKİNDE YANLIŞ.**
  *(5 Eylül 2026 · `NEHİR SÜRTÜNME` ölçtü, koordinatör doğruladı)*

  `§7.1⑤b` şöyle diyor: *"Aracın «mesaj tahta.json'da VAR, TEKRAR YAZMA»
  talimatı bu arızada YANILTICIDIR — bir rapor tam o talimata uyulduğu
  için kaybolacaktı."* Bu gece talimatın **doğru olduğu** vaka çıktı:
```
① KAYIP GÜNCELLEME   iki oturum aynı anda `max+1` alır, ikinci yazım
                     birinciyi EZER ⇒ mesaj GERÇEKTEN YOK
                     araç "yazıldı" der · TEKRAR YAZMAK DOĞRU
② YARIM COMMIT 🆕    yazım DİSKE İNDİ, `git commit` yarım kaldı
                     mesaj VAR · TEKRAR YAZMAK MÜKERRER ÜRETİR
```
  ⇒ ***İki arıza ekranda AYNI görünür ve yalnız ÖLÇÜM ayırır*** —
  `tahta.json`dan geri okumak. Ölçen oturum ikisini de yaptı: talimata
  **uydu** (tekrar yazmadı) **ve** `§7.1⑤b`ye uyup **geri okudu** (kaydı
  tam çıktı). İki kural çelişiyor gibi duruyor; çelişmiyorlar, **farklı
  arızalara** bakıyorlar.

  🟢 **VE ② KENDİ KENDİNİ ONARIYOR — ölçüldü:** yarım kalan sahneleme,
  bir sonraki tahta yazımının commit'ine giriyor.
```
git show --stat 4ad6702 → oturumlar/TAHTA.md · oturumlar/tahta.json
                          2 files changed — BAŞKA HİÇBİR ŞEY YOK
```
  ⚠️ Ve bu bir **tesadüf değil tasarım**: `tahta.py` commit'i **pathspec**
  ile atıyor, yani `§7`nin *"yol adı yazılmazsa başka bir oturumun
  sahnelediği dosya senin commit'ine girer"* riski burada **ateşlemiyor.**
  📌 ⇒ Paylaşılan index'te yarım kalan bir commit, **pathspec kullanan**
  bir araç tarafından zararsızca tamamlanır; kullanmayan bir araç
  tarafından **başka bir işin içine karıştırılır.** Aradaki fark aracın
  kendisinde, arızada değil.
