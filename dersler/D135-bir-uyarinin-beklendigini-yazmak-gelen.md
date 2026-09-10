# BİR UYARININ BEKLENDİĞİNİ YAZMAK, GELEN UYARININ O OLDUĞUNU GÖSTERMEZ — ve öngörü "tuttu" sanıldığı için kimse bakmaz.

> Kimlik `D135` · `CLAUDE.md §11` dizininden taşındı (10 Eylül 2026 budaması).
> Slogan orada, vaka burada.

---

- 🔴🔴 **BİR UYARININ BEKLENDİĞİNİ YAZMAK, GELEN UYARININ O OLDUĞUNU
  GÖSTERMEZ — ve öngörü "tuttu" sanıldığı için kimse bakmaz.**
  *(5 Eylül 2026 · `s.kesinlik` · `NEHİR SÜRTÜNME`)*

  `girdi.yukle()` her koşuda uyarıyor: *"alan `s.kesinlik`
  `BILINEN_ALANLAR`da yok — 2 kayıtta"*. Bir kayıt (`Şırnak`) kendi
  yorumunda o uyarıyı **öngörmüştü**: *"girdi.py tanımayacak, uyarı
  beklenen"*. Uyarı geldi, öngörü **tuttu sanıldı**, kimse bakmadı.
  Ölçüldü:
```
DÖNEM İÇİ  2  🔴 uyarı VERİYOR   Vidin s[1] "ay" · Kızıkermen s[0] "yuzyil"
KAYIT ÜSTÜ 1  🟢 SESSİZ geçiyor  Şırnak "belirsiz"   ← öngörüyü YAZAN kayıt
```
  ⇒ ***Uyarıyı veren, öngörüyü yazan kayıt DEĞİL*** — o sessiz geçiyor;
  uyaran, yorumun hiç bahsetmediği iki başka kayıt.
  📌 Aynı gecenin *"alet sessizce hiçbir şey yapar ve çıktısı senin
  öngörünle aynı olur"* dersinin kardeşi: orada bir `+0` taban sanılmıştı,
  burada bir **uyarı** doğrulama sanıldı. İkisinde de öngörü **kendini
  doğruladı.**

  🔴 **Ve altındaki kusur üç ihtimalin de dışındaydı: İKİ KÜTÜK VAR.**
```
girdi.py:772   BILINEN_ALANLAR         24 · `kesinlik` VAR  ← KAYIT seviyesi
girdi.py:920   BILINEN_DONEM_ALANLARI   7 · `kesinlik` YOK  ← DÖNEM seviyesi
girdi.py:1194  dönemleri İKİNCİ kütüğe sorar (`f"{kat}.{alan}"`)
```
  Ve `VERI-YAPISI.md`in üç örneğinin üçü de alanı **dönem nesnesinin
  içinde** tarif ediyor. ⇒ Alan **dönem için tasarlanmış, kayıt
  seviyesine kaydedilmiş** — ve sonucu tersine dönmüş:
  ***sözleşmeye UYAN kayıtlar uyarı veriyor, sözleşme DIŞINDAKİ sessiz
  geçiyor.*** Uyarı veriyi değil **kütüğü** gösteriyor.

  🟡 **Ve alanın VAAT ETTİĞİ şey zaten teslim edilmiyor:** arayüz
  hassasiyeti tarih **dizgisinin biçiminden** çıkarıyor (`app.js:43`);
  Vidin'in `1689-10-01`i tam gün biçiminde olduğu için ekranda **gün**
  yazıyor, ve `kesinlik:"ay"` bunu düzeltmiyor — **kimse okumuyor.**
  ⇒ Kütüğü düzeltmek uyarıyı susturur ama **alanı işler kılmaz**; ikisi
  ayrı kalem.

  🔴 **VE AYNI AD, İKİ AYRIK DEĞER ALANI:**
```
yerleşim/kronoloji  gun · ay · yil · onyil · yuzyil · belirsiz   OKUNMUYOR
EK OKUMA kartı      kesin · tartismali · iddia · rivayet         app.js:6029 OKUYOR
```
  ⇒ Tek ad, iki sözlük, ve **yalnız biri okunuyor.** `KUYRUK` vakasının
  (*"aynı kelime iki ayrı şey"*) **alan adı** yüzü. Ve kronolojideki
  kardeşi **hiçbir denetimin kapsamında değil** — kronoloji için alan
  kütüğü yok, `denetle.py` alan adı denetlemiyor.
