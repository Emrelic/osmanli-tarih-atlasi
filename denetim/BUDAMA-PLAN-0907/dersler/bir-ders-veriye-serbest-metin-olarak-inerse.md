# 🔴 BİR DERS VERİYE SERBEST METİN OLARAK İNERSE, İNMİŞ SAYILMAZ — VE

> **Vaka anlatısı — `CLAUDE.md §11`den çıkarıldı (BUDAMA-0907).**
> Kuralın kendisi ve hükmü `CLAUDE.md §11`de **kalmıştır**;
> burada duran, o kuralı doğuran VAKADIR.
> Eski konum: `CLAUDE.md` satır **0** · 656 token

---

- 🔴 **BİR DERS VERİYE *SERBEST METİN* OLARAK İNERSE, İNMİŞ SAYILMAZ — VE
  `grep` ONU "UYGULANMIŞ" GÖSTERİR.** *(10 Ağustos 2026)*

  Kullanıcı `h17#7`de şunu istedi: *"boş alanların taranarak teyit edilmesi
  gerekmektedir… orada müstakil bir siyasî yapı var ise **etiketlenip
  boyanmalı**."* Yani **boşluğun cinsi ekranda belli olsun.**

  Oysa proje o ayrımı **iki gün önce öğrenmişti** (`§11`, NOKTA SİBİRYA):
  *"Sınav: kaynağa sor. Konuşuyorsa `devletsiz`, susuyorsa `veri-yok`."*
  Ölçüldü:
  ```
  kasitli_bosluk nokta      138
    neden: alanı VAR        133        "devletsiz" 35 · "veri-yok" 2
    cinsi YAZILMAMIŞ         97
  ```
  ⇒ **Ders inmiş — ama `neden:` serbest metninin içine.** Sonuç:
  ```
  🔴 makine SORAMAZ    cins yapılandırılmış alan değil, metne gömülü kelime
  🔴 harita ÇİZEMEZ    motor `neden:` metnini ayrıştırmıyor
  🔴 denetim GÖREMEZ   "cinsi yazılmamış 97 nokta" diye ötecek nöbetçi yok
  ```
  🔴 **Ve sinsiliği burada:** `git grep devletsiz` **45 sonuç** verir. Ders
  *"uygulanmış"* görünür. Uygulanmamış olan **yapı** — ve yapı olmadan ders
  yalnız **o kaydı yazan oturum** için vardır.

  📌 Kusur listesinin **on birinci** sınıfı: ①-⑦ *yanlış şeyi ölçmek* ·
  ⑧-⑨ *hiç ölçmemek* · ⑩ *aletin yalan söylemesi* · ⑪ ***doğru öğrenilmiş bir
  dersin makinenin göremeyeceği yere yazılması.***
  🟢 **Sınavı tek soru:** *bu bilgiyi bir `if` ile sorabiliyor muyum?*
  Sorulamıyorsa kayıt vardır, **veri yoktur.**

  ⚠️ Ve koordinatörün ilk ölçümü de yanlıştı (*"138'inin 138'i düz `true`,
  cinsi yazılı olan 0"*): `kasitli_bosluk` alanının **değerine** baktı, cins
  **başka alandaydı.** *"Ölçüm doğru, evren dar"* — düzeltmeyi işçi oturum yaptı.

