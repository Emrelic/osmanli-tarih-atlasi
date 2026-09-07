# 🟢🟢 §7 AD ALANI DERSİ İLK KEZ ÖNLEYİCİ İŞLEDİ — çakışma OLMADAN

> **Vaka anlatısı — `CLAUDE.md §11`den çıkarıldı (BUDAMA-0907).**
> Kuralın kendisi ve hükmü `CLAUDE.md §11`de **kalmıştır**;
> burada duran, o kuralı doğuran VAKADIR.
> Eski konum: `CLAUDE.md` satır **0** · 420 token

---

- 🟢🟢 **`§7` AD ALANI DERSİ İLK KEZ ÖNLEYİCİ İŞLEDİ — çakışma OLMADAN
  ÖNCE.** *(7 Eylül 2026 · `KADEME-MODEL-0907`)*

  Yeni bir katman için ad seçilirken 333 mevcut `window` adı **tarandı**
  (tahmin edilmedi), ve seçilecek kelimenin **zaten dolu** olduğu çıktı:
```
"KADEME"  bu projede k:0-4 YERLEŞİMİN İDARÎ KADEMESİ demek
          window.KADEME_YAMA · YER_YAMA_KADEME · YER_YAMA_KADEME2 …
⇒ yeni katmanın ad alanına KADEME YAZILMAMALI
seçilen   data/sinir_hukuki.js → window.SINIR_HUKUKI   (çakışma 0)
```
  📌 Bu proje `§7`nin *"ayrı dosya vermek ayrı ad alanı vermek değildir"*
  dersini **hep çakışma OLDUKTAN sonra** öğrendi (`KADEME_YAMA`: beş
  dosya tek ad, 537 kayıt 137'ye düştü). Bu ilk kez **önce.**
  🟢 Ve konuşma dili ile makine ad alanı ayrıldı: kalem konuşurken hâlâ
  *"kademe C"*, veride `SINIR_HUKUKI`. ***Bir çakışma makine ad
  alanındadır; konuşma dilini kısıtlamaz.***
  ⚠️ Ve kolları açan sevkin şartı buradan çıktı: **her kola dosya adı ve
  `window` adı BİRLİKTE verilir** — yoksa 14 kol 14 biçim üretir.

