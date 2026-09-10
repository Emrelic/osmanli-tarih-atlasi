# "ŞU DÜZELTMEYİ YAP" DENİNCE ÖNCE KUSURUN ÜREYİP ÜREMEDİĞİNİ ÖLÇ — ve düzeltmenin HER DALDA doğru olduğunu.

> Kimlik `D038` · `CLAUDE.md §11` dizininden taşındı (10 Eylül 2026 budaması).
> Slogan orada, vaka burada.

---

- 🔴 **"ŞU DÜZELTMEYİ YAP" DENİNCE ÖNCE KUSURUN ÜREYİP ÜREMEDİĞİNİ ÖLÇ —
  ve düzeltmenin HER DALDA doğru olduğunu.**
  `id:` ∪ `harita:` okuma önerisi RENK 2'ye gitti. Ölçtü:
  ```
                            harita-or-id (mevcut)   id ∪ harita (önerilen)
  künyesi var, rengi yok           63  ✓                96  🔴 +33 YANLIŞ
  rengi var, künyesi yok            3                    2  ✓
  ```
  33 fazlanın sebebi: `bosna-kralligi` (harita=`bosna`) gibi künyelerin
  `harita:` alanı **başka anahtara** bakar — kendi renklerine ihtiyaçları
  **yoktur**. Birleşim onları "rengi eksik" sayardı.
  ⇒ Çare birleşim değil **ayrı bir dal** oldu: *"künye var ama `harita:`
  başka anahtarda"*. Ve o dal **ilk koşusunda gerçek bir bulgu** verdi.
  📌 Ama **`js/app.js`te birleşim DOĞRUYDU** ve uygulandı: `devletAdi()`
  yalnız `d.id` okuduğu için **30 gövde ham slug gösteriyordu** (`kaffa` ·
  `sirbistan` · `ceneviz` · `sovalye`…). **Aynı soru, iki yerde iki farklı
  cevap — ve ikisine de ölçüm karar verdi, kural değil.**
