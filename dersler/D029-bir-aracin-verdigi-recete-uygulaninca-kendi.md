# BİR ARACIN VERDİĞİ REÇETE, UYGULANINCA KENDİ TESTİNİ GEÇMEK ZORUNDADIR — GEÇMİYORSA TEŞHİS DOĞRU AMA REÇETE KULLANILAMAZDIR.

> Kimlik `D029` · `CLAUDE.md §11` dizininden taşındı (10 Eylül 2026 budaması).
> Slogan orada, vaka burada.

---

- 🔴 **BİR ARACIN VERDİĞİ REÇETE, UYGULANINCA KENDİ TESTİNİ GEÇMEK
  ZORUNDADIR — GEÇMİYORSA TEŞHİS DOĞRU AMA REÇETE KULLANILAMAZDIR.**

  **Vaka (8 Ağustos 2026).** `denetle.py` dört noktayı *"kara maskesinin
  dışında"* diye bildirdi ve her biri için **"en yakın kara"** koordinatını
  verdi. NOKTA GDASYA noktaları **tam oraya** taşıdı. Denetim üçünü **yine
  reddetti** — bu sefer:
  ```
  Larantuka   0.00 km dışarıda   -8.3416,122.9896 → en yakın kara AYNI NOKTA
  ```
  ⚠️ *"0,00 km dışarıda"* **kendi içinde çelişkili bir cümledir**, ve bir
  aracın ürettiği çelişkili cümle onun **ölçtüğü şeyin sınırına vardığının**
  işaretidir.

  🔴 **VE KOORDİNATÖRÜN İLK TEŞHİSİ YANLIŞTI.** *"Test `contains()`
  kullanıyor, sınırı hariç tutuyor"* dedi — koda bakınca `covers()` çıktı,
  yani sınır **zaten dâhildi.** Gerçek sebep **yuvarlama**: `nearest_points`
  kıyı çizgisinin *üstünde* bir nokta verir, dosyaya **4 ondalıkla (~11 m)**
  yazılınca kıl payı dışarı düşer.
  📌 Yani hüküm doğruydu (*"kusur araçta, veride değil"*) ama teşhis
  yanlıştı — `B10`un koordinatörün kendi üzerinde gerçekleşmiş hâli, ve
  düzeltmeyi **koda bakmak** verdi, akıl yürütmek değil.

  **Çare ölçütü değiştirmek değil, REÇETEYİ SINAMAK oldu:** öneri artık
  içeri doğru kaydırılıyor **ve yazılacağı hassasiyette** (`round(…, 4)`)
  sınanıyor; geçmezse `⚠️ bu öneri sınandı ve GEÇMEDİ` diye damgalanıyor.
  Uygulandı: `konum` **4 → 0**.
  ⇒ **Bir denetimin iki yönü sınanır (`§11`), ama bir REÇETENİN üçüncü bir
  yönü vardır: uygulandığında işe yarıyor mu?** Bu proje ilk ikisini
  biliyordu, üçüncüsünü bilmiyordu.
