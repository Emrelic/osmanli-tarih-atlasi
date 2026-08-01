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

✅ **`merini` — 17:52 → 17:51**
`harita:"fas"` bağlandı (`data/devletler.js:1728`). **Yeni renk yazılmadı.**
Gerekçe: `fas` anahtarı (`#9e6b5b`) zaten vardı; `fas` kaydı (Sâdî/Alevî
Şerifleri) **1549-1923**, `merini` (Merînî/Vattâsî) **1196-1549** — bitiş ve
başlangıç **aynı gün**, örtüşme yok. `merini`'nin kendi özeti zaten
*"sonra Sâdîlere devretti (bkz. [[fas]])"* diyor. İkisi de `tur:"krallik"`,
`bolge:"kuzey-afrika"`. Güç etiketi: **KESİN** (§73).
⚠️ Yeni renk açmak Fas'ı 1549'da renk değiştiren iki ayrı ülke gibi
gösterirdi; oysa hanedan değişimi, ülke değişimi değil.
Ölçüm: `denetle.py` temel çizgiyle **birebir aynı** (2s 115/114 · 2t 56/49)
— sıfır yeni ihlal. `node --check` temiz. `harita:"fas"` kullanıcı 1 → 2.

---

### 🔴 `dehlek` — sınıfı yanlış, araştırma kalemi

Görev tanımı satır 21/34 `dehlek`i *"kayıt var, yalnız renk yok"* sınıfına
koyuyor. Ölçtüm, **değil**:
```
grep 'id:"dehlek"' data/devletler.js  → yok
grep '"dehlek"'    arac/renkler.py    → yok
```
Sıfırdan kayıt gerekiyor (`f` · `t` · `bolge` · `baskent` · `ozet` ·
`kronoloji`) **artı** yeni renk — ve burada Kısıt 1 (13,6 eşiği) gerçekten
uygulanacak. Bugünkü ilk üçün diğer ikisi tek satırdı; bu değil.

