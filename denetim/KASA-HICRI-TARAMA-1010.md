# KASA-HICRI-TARAMA-1010 — devletler.js: hicrî kaynaklı künyelerin f/t'si kaynağın aralığında mı?

Görev: YILDIRIM BAYEZIT (CHABOT kararı (b)) · Araştırmacı: KASA · salt okunur, `data/` DONUK · öneri + csv.
Soru: künyenin `kaynak:` / `ic_not` alanında hicrî yıl geçiyorsa, `f:` / `t:` o hicrî yılın miladî aralığının
İÇİNDE mi?
Yöntem (ölçümden önce sabit):
- Hicrî ↔ miladî: tabular takvim; 1582-10-15 öncesi Jülyen, sonrası Gregoryen. ±1-2 gün tabular payı ⇒ sınırda
  ≤2 gün kalan "SINIRDA" diye ayrı işaretlenir.
- Eşleştirme: alandaki yazılı miladî yıl M; kaynak metninde `H/M`, `H (M)`, `H/M-M'` biçiminde M'yi taşıyan hicrî H
  aranır. Ay adı da varsa (Receb 858/Temmuz 1454) ay aralığıyla kontrol edilir.
- Evren üç kova: hicrî taşıyan · taşımayan · kaynak alanı BOŞ (ölçülemedi).
- Zincir: bir künyenin `t`si başka bir künyenin `f`siyle aynı günse (ardıl eşi), kaydırma ikisine birlikte önerilir.

## 0. ÖNGÖRÜ (ölçümden ÖNCE, 2026-10-10) — desen VE büyüklük aralığıyla
- **Evren:** künye ~900. Hicrî yıl taşıyan kaynak **300 ± 150** · taşımayan **500 ± 150** · boş **40 ± 40**.
- **Kontrol edilebilir alan** (alan yılı kaynaktaki bir H/M çiftiyle eşleşiyor): **200 ± 120**.
- **DIŞINDA: 110 ± 70.** Gerekçe: TDV `H/M` yazarken M'yi genellikle hicrî yılın BAŞLADIĞI miladî yıl olarak verir.
  O yıl çoğu zaman 1 Ocak'tan sonra başlar ⇒ `M-01-01` **varsayılan olarak dışarıda kalır**. `-01-01` yazılmış
  alanların **%60-90'ı** dışarıda; gün yazılmış alanların **≤%15'i**.
- **SINIRDA** (≤2 gün): **5 ± 5**.
- **Zincir eşi olan dış uç:** **20 ± 15**. Râşidîn/Emevî deseni yaygın, ardıl künyeler aynı `YYYY-01-01`'i paylaşıyor.
- Desen: hata ağırlıkla **`f`** alanında (devlet kuruluşları "H/M" ile, yıkılışlar daha sık gün/ay ile veriliyor).
