# 🔴🔴 BİR ALETİN CEVABI DOĞRU OLABİLİR VE SORDUĞU SORU YETERSİZ

> **Vaka anlatısı — `CLAUDE.md §11`den çıkarıldı (BUDAMA-0907).**
> Kuralın kendisi ve hükmü `CLAUDE.md §11`de **kalmıştır**;
> burada duran, o kuralı doğuran VAKADIR.
> Eski konum: `CLAUDE.md` satır **0** · 646 token

---

- 🔴🔴 **BİR ALETİN CEVABI DOĞRU OLABİLİR VE SORDUĞU SORU YETERSİZ
  OLABİLİR — ve bunu ancak İKİNCİ BİR ALET gösterir.**
  *(7 Eylül 2026 · `KADEME-MODEL-0907` · kendi aletini çürüterek)*

  *"NE'nin komşu poligonları ortak kenarda birebir aynı koordinatı mı
  taşıyor?"* sorusu ölçüldü. Birinci alet **doğru** cevap verdi ve
  **yetersizdi:**
```
① alet   "ortak tepesi OLMAYAN çift: 0"     ✓ doğru
  AMA    asgarî ortak tepe 2 idi — uzun bir kenarda yalnız İKİ UÇ
         eşleşiyorsa o kenar tepe-özdeş DEĞİLDİR
② alet   "paylaşılan ÇİZGİNİN tepelerinin kaçı iki tarafta da var?"
         → 69.011'in 69.011'i · kısmen ortak 0
```
  ⇒ ***"Ortak tepesi var" ile "kenarı birebir aynı" AYNI ŞEY DEĞİLDİR.***
  📌 `§11`in *"denetim var ≠ o soruyu soruyor"* ailesinin **yeterlilik**
  yüzü: önceki üyelerde alet yanlış şeyi ölçüyordu ya da hiç ölçmüyordu;
  burada **doğru şeyi ölçüyor ama ölçtüğü şey hükmü taşımıyor.** Bir
  `0`, sorunun kendisi zayıfsa **temiz bir sayı** olarak görünür.
  🟢 Ve yakalayan şey bir denetim değil, aletin sahibinin *"bu sayı
  hükmümü gerçekten kanıtlıyor mu"* diye sorması oldu.

  🔴 **VE AYNI ÖLÇÜMDE İKİNCİ BİR ALET 2 KAT SAPTI:** shapely
  `boundary.intersection` bir kenarı **sürekli çizgi olarak değil, iki
  noktalı parçaların yığını** olarak veriyor (Türkiye↔Suriye: 182 parça ·
  364 ham tepe · benzersiz 183) ⇒ her iç tepe **iki kez** sayılıyor.
  `linemerge` düzeltti, 137.234 → 69.011, ve iki alet uyuştu.
  📌 Ve bu bir sayım düzeltmesinden fazlası: ***kenar zaten SÜREKLİ bir
  çizgidir, 182 kopuk parça değil — model de onu öyle saklamalı.*** Bir
  kütüphanenin dönüş BİÇİMİ, ölçtüğün şeyin doğasını değiştirmez; ama
  ölçümü sessizce ikiye katlar.

