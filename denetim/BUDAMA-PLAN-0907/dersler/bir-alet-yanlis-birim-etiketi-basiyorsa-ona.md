# 🔴 BİR ALET YANLIŞ BİRİM ETİKETİ BASIYORSA, ONA YAZILAN ÖNGÖRÜ

> **Vaka anlatısı — `CLAUDE.md §11`den çıkarıldı (BUDAMA-0907).**
> Kuralın kendisi ve hükmü `CLAUDE.md §11`de **kalmıştır**;
> burada duran, o kuralı doğuran VAKADIR.
> Eski konum: `CLAUDE.md` satır **0** · 1190 token

---

- 🔴 **BİR ALET YANLIŞ BİRİM ETİKETİ BASIYORSA, ONA YAZILAN ÖNGÖRÜ
  ÇÜRÜTÜLEMEZ HÂLE GELİR — NE TUTAR NE ÇÜRÜR, YALNIZ YANILTIR.**
  *(2 Eylül 2026 — iki oturumu, on yedi gün arayla, aynı satır yanılttı)*

  `uret_petek.py`nin puanlama kapısı şu satırı basıyor:
  ```
  🚪 PUANLAMA KAPISI: kesilen 743.793.802 km²
  ```
  Sayı doğru. **Birim yanlış.** Kod okununca çıktı:
  ```python
  _PUAN_KESILEN[0] += max(0.0, _onceki_alan - _ham_km2(g))  # her devlet × her DÖNEM
  if g.is_empty: _PUAN_TAMAMEN[0] += 1                       # AYRIK sayım
  ```
  ⇒ `kesilen` **km²·DÖNEM**, `tamamen boşalan` **adet**. 391 devlet ×
  2865 dönem ⇒ 743.793.802 / 2865 ≈ **259.600 km² / gövde-dönem.**

  **İki oturum, on yedi gün arayla, aynı etikete güvendi:**
  ```
  16 Ağustos  öngörüyü YAZAN oturum bandı km² sandı  → "2-15 M km²" yazdı
   2 Eylül    koordinatör sayıyı km² sandı           → "50 KAT SAPMA,
              yayın durabilir" diye alarm verdi ve bir kolu ACİL'e çevirdi
  ```
  🟢 Ve çürüten şey bir sezgi değil **kodu okumak** oldu: koordinatör
  *"birim uyuşmazlığı OLABİLİR"* diye doğru tahmin etti ama **dayanağı
  yoktu**; işçi oturum `uret_petek.py:4354`ü açtı ve dayanağı verdi.

  ⚠️ **VE SAPMANIN YÖNÜ DE AÇIKLANDI:** sayaç `max(0, …)` kullanıyor,
  yani **negatif olamaz.** Çok gövdenin kenarını her dönemde budamak,
  **hiçbirini boşaltmadan** dev bir toplam üretir. *"Kesilen bandın 50 kat
  üstünde ama boşalan bandın altında"* çelişkisi bir kaçak değil,
  **iki farklı birimin yan yana basılmasıydı.**

  📌 Bu, `§11`in *"aletin gösterdiği ≠ dosyada yazan"* dersinin **BİRİM**
  yüzü. Orada bir bayt görünmez olmuştu (0x08); burada bir **birim yanlış
  yazılı** — ve ikincisi daha sinsi, çünkü **hiçbir şey bozuk görünmüyor.**

  🟢 **VE ÜÇÜNCÜ BİR DAMGA GEREKTİĞİ ORTAYA ÇIKTI.** Proje *"ölçülemedi ≠
  temiz"* kuralını biliyordu. İşçi oturum ikinci yarısını ekledi:
  > *"'ölçülemedi' asla TEMİZ diye raporlanmaz — **ama 'ÇÜRÜDÜ' diye de
  > raporlanmaz.**"*
  ```
  TUTTU        öngörü doğrulandı
  ÇÜRÜDÜ       öngörü yanlıştı            → BİLGİ taşır, dersi alınır
  ÖLÇÜLEMEDİ   alet o soruyu cevaplamıyor → kalem HÂLÂ AÇIK
  ```
  ⚠️ Yanlış damga pahalı: **çürük** damgası bir öngörüyü kapatır ve bir
  sonraki oturumu onu ölçmekten alıkoyar. *Ölçülemedi* onu açık tutar.

  🔴 **VE SINAVIN KENDİSİ DE BOZULABİLİR:** aynı öngörünün ⑤ kalemi
  *"kesilen km² toplamı ile kesitlerdeki alan düşüşü tutarlı olmalı"*
  diyordu — ama **sol taraf km²·dönem, sağ taraf km²**; karşılaştırılamazlar.
  Yani yanlış birim yalnız öngörüyü değil, **onu sınayacak sınavı da**
  geçersiz kılmıştı. Çare: sol tarafı sayaçtan değil **çıktıdan** türetmek.

  🟢 **KURAL — bir sonraki öngörü şablonuna:** her kalemin yanına
  ***"bunu HANGİ ÇIKTIDAN, HANGİ BİRİMDE okuyacağım"*** yazılır. Bir
  öngörü, aletin bastığı birimi doğrulamadan yazılırsa çürütülemez.
  ⇒ Ve borç kaydı: `uret_petek.py`deki o satır `kesilen … km²·dönem`
  diye düzeltilecek, yanına *"ayrık alan DEĞİLDİR"* notuyla.

