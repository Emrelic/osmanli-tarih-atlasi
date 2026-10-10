# KASA-HICRI-TARAMA-2-1010 — notunda hicrî OLMAYAN 789 künye: TDV gövdesinden örneklem

Görev: YILDIRIM BAYEZIT (HICRI-TARAMA kararı (d)) · Araştırmacı: KASA · salt okunur, `data/` DONUK.
Soru: künye notu miladî yıl veriyor ama künyenin TDV maddesi hicrî tarih taşıyor mu? Taşıyorsa `f` / `t`, o
hicrî yılın aralığında mı? (`sasani` t ve `hulefa-yi-rasidin` f vakaları)
Yöntem (ölçümden önce sabit):
- **Örneklem:** 789 künyeden n = 50, TABAKALI: `bolge` × dönem (f < 622 · 622-1500 · >1500). Her tabakaya
  orantılı pay (en az 1). Tohum **1010** (`random.Random(1010)`).
- TDV slug'ı künyenin `kaynak` / `ic_not` alanından alınır. Slug yoksa ya da 302 dönerse ⇒ **ölçülemedi (slug)**.
- Gövde çekilir. f / t'nin miladî yılını taşıyan `H/M` ifadeleri aranır, aynı kesişim kuralı uygulanır
  (hicrî ∩ miladî yıl ∩ miladî ay; öneri = ilk gün).
- **Hüküm (muhafazakâr):**
  - Aynı yıla ait aday ifadelerden BİRİ bile uca uyuyorsa İÇİNDE.
  - DIŞINDA yalnız hepsi dışlıyorsa; DIŞINDA'lar cümlesiyle elle doğrulanır (aynı yılın başka bir olayı mı, ⑧).
- **Üç kova:**
  - ölçüldü-içinde
  - ölçüldü-dışında
  - **ölçülemedi**: gövdede o yılı taşıyan hicrî ifade yok — "temiz" DEĞİL, ayrı sayılır.
- Genelleme: 789 × (dış uç oranı), %95 güven aralığı (Wilson), tabaka ağırlığıyla.

## 0. ÖNGÖRÜ (ölçümden ÖNCE, 2026-10-10)
Koordinatörün kalibrasyon notu uygulandı: DESEN aynı keskinlikte, BÜYÜKLÜK aralıkları iki kat geniş.
**Desen:**
- ① Dışarıda bulunan her uç yine `-01-01` olacak (%95).
- ② Dış uçlar 622-1500 tabakasında toplanacak; 622 öncesi tabaka neredeyse tamamen **ölçülemedi**, 1500 sonrası
  TDV gün verdiği için az dış.
- ③ Dış uçların çoğu `f`'de (kuruluş).
**Büyüklük (geniş):**
- 50'den slug'ı olup çekilebilen: **35 ± 15**.
- Kontrol edilebilir uç (gövdede yılına eşleşen hicrî ifade): **25 ± 25**.
- DIŞINDA uç: **8 ± 8** ⇒ örneklem başına uç oranı ~%8 (0-%30).
- ölçülemedi (slug yok/302 + hicrî yok): **30 ± 15** künye.
- 789'a genelleme: gerçek dış uç toplamı **60-200** (bugünkü 70'e EK). ⇒ Toplam hicrî tuzak **130-270** uç.
