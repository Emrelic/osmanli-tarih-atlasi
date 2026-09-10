# BİR REGEX'İN GÖRMEDİĞİ YAZIM BİÇİMİ ÖLÇÜLDÜ: `t:"` 1285 kayıt · `t: "` 14 kayıt — ve ikisi 2 dosyada toplanmış.

> Kimlik `D125` · `CLAUDE.md §11` dizininden taşındı (10 Eylül 2026 budaması).
> Slogan orada, vaka burada.

---

- 🔴 **BİR REGEX'İN GÖRMEDİĞİ YAZIM BİÇİMİ ÖLÇÜLDÜ: `t:"` 1285 kayıt ·
  `t: "` 14 kayıt — ve ikisi 2 dosyada toplanmış.** *(aynı tur)*

  Bir ölçüm aleti `1811-06-01`i *"çekirdekte maddesi yok"* diye açık
  saydı. `denetle.degismez2` doğrudan çağrıldı: madde **0 GÜN**
  uzaklıkta var (*«Kutuzov Rusçuk'u boşalttı»*, `olaylar_ek21.js:47`).
```
aletin regexi   t:"(\d{4}-…)"        ← iki noktadan sonra BOŞLUK YOK
dosyadaki yazım { t: "1811-06-01",   ← BOŞLUK VAR
ölçüldü         `t:"` 1285 kayıt / 30 dosya · `t: "` 14 kayıt / 2 dosya
                (data/olaylar_ek21.js · data/olaylar_ok109.js)
```
  ⇒ İki dosya farklı yazım kullanıyor ve regex onları **sessizce**
  atladı. Bu gecenin *"kendi yazdığın ayrıştırıcı her zaman kötüdür"*
  dersinin **yedinci** vakası, ve dar hâli zaten kayıtlıydı (`ad:` ↔
  `{"ad":`). ***Aynı tuzak, farklı alan.***

  🟢 **Ve ölçen oturum kendi ölçümünün tamamını gölgeledi:** o betiğin
  bütün *"çekirdekte N gün"* uzaklıkları aynı regexle hesaplandı ⇒ 14
  maddeyi hiç görmedi. Öteki iki mesafe (58g · 91g) denetle'yle uyuşuyor
  **ama uyuşmaları tesadüf de olabilir** — ve bunu yazması, uyuşan
  sayıları da şüpheye açık tutuyor.
  📌 ***Bir ayrıştırıcı kusuru bulunduğunda, o ayrıştırıcıyla ölçülen
  DOĞRU çıkan sayılar da doğrulanmamış sayılır.***

  🟢 **Ve merge tarafı ölçülüp temiz çıktı:** `_kronoloji_uygula.py`
  hedefini **node ile** okuyor (`devletleri_oku`) ve kendi başlığında
  bunu gerekçelendiriyor (*"regex'le değil. Bu proje aynı dersi beş kez
  öğrendi"*). Kör nokta ad-hoc ölçümlerde, **uygulayıcıda değil.**
