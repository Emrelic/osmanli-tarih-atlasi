# 🟢🟢 İKİ ÖLÇÜMÜN ORANLARININ ORANI, FARKIN SEBEBİNİ VEREBİLİR.

> **Vaka anlatısı — `CLAUDE.md §11`den çıkarıldı (BUDAMA-0907).**
> Kuralın kendisi ve hükmü `CLAUDE.md §11`de **kalmıştır**;
> burada duran, o kuralı doğuran VAKADIR.
> Eski konum: `CLAUDE.md` satır **0** · 770 token

---

- 🟢🟢 **İKİ ÖLÇÜMÜN ORANLARININ ORANI, FARKIN SEBEBİNİ VEREBİLİR.**
  *(5 Eylül 2026 · R1 eşiği · `NEHİR SÜRTÜNME`)*

  Bir reçetenin eşiği (*"dikiş 95 parça → R1'den sonra <10"*) bugünkü
  tabana (640) taşınabilir miydi? Dört fark ölçüldü — kapsam (Avrupa
  kutusu ↔ global) · zemin (`ne_10m_land` ↔ `motor_kara`, R15 bunu
  **bilerek** değiştirdi) · petek (2731 ↔ 3805) · ve **alan tabanı**
  (reçete <5 km²'yi eledi, alet elemiyor — `olc.py:144`in tek süzgeci
  `if a <= 0`).

  🔴 **Ve dördüncüsünün kanıtı sayıların ORANINDA:**
```
KIYI KENARI   2.159 → 42.233   = 20 kat
DİKİŞ parça      95 →    640   = 6,7 kat
DİKİŞ km²    15.526 → 34.318   = **2,2 kat**
ortalama parça  163 km² → 54 km²   (üçte bire düştü)
```
  ⇒ **Parça sayısı 6,7 kat ama alan yalnız 2,2 kat.** Kapsam büyümesi
  alanı da orantılı büyütürdü; sayıyı bu kadar öne geçirmezdi.
  ***Sayı/alan oranının kayması, "küçük parçalar elenmemiş"in imzasıdır.***
  📌 Tek bir oran *"ne kadar büyüdü"* der; **iki oranın karşılaştırılması
  NİÇİN büyüdüğünü söyler.**

  🟢 **Ve buradan bir ÖLÇÜT ÇIKTI: eşik parça sayısı değil km² olmalı.**
  Alan iki ölçüm arasında kararlı (2,2×), sayı değil (6,7×), ve sebebi
  yapısal — parça sayısı **alan tabanına ve sadeleştirme gürültüsüne
  duyarlı**, toplam alan değil. Parça sayısı yine raporlanır ama **eşik
  olmaz: bilgi, ölçüt değil.**
  🟢 Ve ölçen oturum **hedef sayı önermedi**: *"'%X düşsün' demek için
  R1'in dikiş ALANINI ne kadar kapatacağını bilmem gerekir ve
  BİLMİYORUM."* ⇒ Bir ölçüt önermek ile onun eşiğini koymak **ayrı
  yetkiler**, ve ikincisi ölçümle gelmiyorsa istenmez.

  ⚠️ **Ve koordinatörün eklediği çekince:** *"tek değişken geometri"*
  cümlesi eksik — geometri **veri + kodun** fonksiyonu, ve 4b ile 5b
  arasında **R1 (kod)** değişti. Verinin de değişip değişmediği
  **ölçülmedi** ⇒ düşüş görülürse tamamı R1'e yazılamaz.

