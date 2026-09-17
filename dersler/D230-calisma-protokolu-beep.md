# Çalışma protokolü — beep kuralları ve bekçi tetiği

> Kimlik `D230` · `CLAUDE.md §10` bölümünden taşındı (17 Eylül 2026, PROTOKOL-BUDAMA).
> Kural CLAUDE.md'de tek satır; gerekçe ve vakalar burada — metin BİREBİR, budama öncesi hâliyle.
> ⚠️ İçindeki `§N` atıfları ve satır numaraları budama ÖNCESİ CLAUDE.md'ye aittir.

---

## 10. Çalışma protokolü (kullanıcı tercihi)

- **Onay bekleme**, işlemlere devam et.
- Görev tamamlanınca / soru sorarken 3 kere beep:
  ```bash
  powershell -c "[Console]::Beep(800,300); [Console]::Beep(800,300); [Console]::Beep(800,300)"
  ```
- **9 kere beep — uzun işin bitişi** (kullanıcı kuralı). Kullanıcının başında
  beklemediği uzun bir iş bitince. Amaç farklı, o yüzden ton da farklı:
  3 beep *"sıra sende"* der, 9 beep *"masaya dön"* der.
  ```bash
  powershell -c "1..9 | ForEach-Object { [Console]::Beep(880,250); Start-Sleep -Milliseconds 120 }"
  ```
  **Nerede:** petek üretimi (30+ dk), toplu doğrulama koşuları, bir dalganın bütün
  oturumlarının teslim etmesi — kullanıcının başka işle ilgilenip dönmesi beklenen her şey.

  **Nasıl kurulur — kural bu:** tahmini süreyle BEKLENMEZ, **somut bir dosya damgası**
  izlenir. Petek üretimi için tetik `data/donemler.js`'tir, çünkü motor onu koşunun
  SONUNDA yazar. Arka planda bir bekçi damgayı yoklar, değişince 9 beep basar.
  Zaman aşımında (2 saat) üç kalın alçak beep: *"iş bitmedi, takıldı."*

  ⚠️ **Bitti sanıp erken haber vermek, hiç haber vermemekten kötüdür.** Bekçi her
  zaman GERÇEKLEŞMİŞ bir olaya bağlanır — geçen süreye, tahmine ya da bir oturumun
  "bitiyorum" demesine değil. Bunun canlı örneği yaşandı: üretim koşarken girdi
  dosyası değişti; koşu temiz bitecekti ama çıktı bayat olacaktı. "Süre doldu, bitti"
  demek o gün yanıltıcı olurdu.
- Kullanıcı hataları **numaralı partiler hâlinde** bildirir ve haritayı gözle
  denetler. Her maddeyi ayrı ayrı cevapla; birini atlarsan fark eder.
- Kullanıcı "eğer doğru ise ayrı madde ile gösterilmeli ismi ile zikredilmeli" derse
  bu Değişmez 2'nin ihlali demektir — kırılmayı bul, maddesini yaz.

---
