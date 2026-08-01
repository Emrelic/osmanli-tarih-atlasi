# VERİ KİMLİK 2 — İLERLEME

Görev tanımı: [VERI-KIMLIK-2.md](VERI-KIMLIK-2.md) (`880c382`)
Claim kuralı: `ORGANIZASYON Karar 2` — durum mesajla değil dosyayla akar.

---

## 1 Ağustos 2026

✅ **`sirbistan-nemanjic` — 17:44 → 17:52**
`harita:"sirbistan"` bağlandı (`data/devletler.js:497`). **Yeni renk yazılmadı.**
Gerekçe: `sirbistan` anahtarı (`#6a8fa0`) zaten vardı ve üç Sırp kaydı onu
kullanıyor — `sirp-despotlugu` (1402-1459), `sirbistan-prensligi` (1804-1882),
`sirbistan-kralligi` (1882-1918). Nemanjić 1217-1402, despotlukla **tam
bitişik**. Güç etiketi: **KESİN** (§73).
⚠️ Yeni renk açmak Sırbistan'ı dönemlere göre iki farklı ülke gibi gösterirdi.
Ölçüm: `denetle.py` temel çizgiyle **birebir aynı** (2s 115/114 · 2t 56/49,
ikisi de önceden var olan borç) — sıfır yeni ihlal. `node --check` temiz.
Ayrıca özetteki *"Henüz renk/harita karşılığı yok"* ifadesi artık yanlış
olduğu için çıkarıldı, TDV kaynak künyesi korundu.

⏳ **başladım: `merini` — 17:52**
