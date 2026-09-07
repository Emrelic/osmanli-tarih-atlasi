# 🔴 C13ÜN EKSİK AYAĞI: HANGİ YÖNÜN ZORLANACAĞI ÖNCEDEN BİLİNMEZ.

> **Vaka anlatısı — `CLAUDE.md §11`den çıkarıldı (BUDAMA-0907).**
> Kuralın kendisi ve hükmü `CLAUDE.md §11`de **kalmıştır**;
> burada duran, o kuralı doğuran VAKADIR.
> Eski konum: `CLAUDE.md` satır **0** · 308 token

---

- 🔴 **`C13`ÜN EKSİK AYAĞI: HANGİ YÖNÜN ZORLANACAĞI ÖNCEDEN BİLİNMEZ.**
  `C13` *"yeni denetim iki yönde de sınanmadan çalışıyor sayılmaz"* der ve
  iki yolu sayar: **geçme** (kusur yokken temiz mi) · **ateşleme** (kusur
  varken ötüyor mu). Ama **hangisinin zorlama gerektireceği vakaya bağlı**
  ve ikisi de olabilir:
  ```
  renk_fark.py     gerçek veride kusur YOKTU  ⇒ ATEŞLEME zorlandı (eşik geçici değişti)
  ikinci kurucu    gerçek veride 72 KUSUR VAR ⇒ GEÇME YOLU zorlandı
                   (mesafe eşiği 0'a VE ΔE eşiği 0'a çekilerek, iki ayrı yoldan)
  ```
  ⇒ **Kural: her iki yolu da zorlamaya HAZIR ol.** *"Ateşleme zordur"*
  varsayımı yarısında yanlış çıkar — ve yanlış çıktığında sınanmayan yol
  **geçme yolu** olur, ki o daha sinsidir: denetim gürültülü çalışır ama
  **temiz veriyi de kirli sayıyor** olabilir.

