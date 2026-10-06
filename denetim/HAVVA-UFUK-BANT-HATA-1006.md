# HAVVA-UFUK-BANT-HATA-1006 — ufuk bantları (5/7/10 gün): beş kusur + renk

Makine HAVVA · veri: KOŞU 20 `C:\atlas-kosu\data\ufuk_bantlari.js` (temel fc380975,
MOTOR_UFUK_BANT=40,56,80 · MOTOR_COL_UFUK_SAAT=56) · Emre'nin görselleri koşu17/18.
Yalnız ÖLÇÜM + DIFF. `uret_petek.py` / `renkler.py` DEĞİŞTİRİLMEDİ (motor tuzu, §9.1②).

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı (2026-10-06 15:26, kod henüz okunmadı)
Görsellerden (H-0020-2..13, H-0002-1) çıkardığım tek-mekanizma hipotezi:
- **① ve ② aynı kod:** bant = (N günlük erişim alanı) − (5 günlük ERİŞİM alanı),
  ÇİZİLEN gövde değil. Gövde bir TAVANLA kırpılmışsa (A1 yarıçap tavanı / çöl tavanı)
  çizilen gövde erişim alanından küçüktür ⇒ aradaki şerit hiçbir katmanda yoktur ⇒
  **boşluklu hilal (①)**. Tavanın kırpmadığı yerde gövde = erişim alanı ⇒ **yapışık (②)**.
  Ayırt edici koşul: "o gövdeye tavan uygulandı mı".
- **③/④ "fark yok":** çoğunlukla KUSUR DEĞİL — 5 günün ötesi komşu gövdeye, denize ya da
  geçilmez araziye düşüyor, bant kesimiyle sıfırlanıyor. Bir kısmı kusur olabilir
  (bant bütçesi ufuk tavanıyla kesiliyorsa). Öngörü: çoğunluk muaf, BEYAN gerekir.
- **⑤ binme:** bant katmanına ÖZGÜ, kapat() (PAKET-0083) ile AYNI DEĞİL: komşu
  devletlerin bantları birbirinden bağımsız hesaplanıyor, aralarında paylaştırma yok.
- **Renk (H-0002 ①):** bant rengi gövde renginin koyulaştırılmışı, opaklığı fazla.
- **KOŞU 20'de durum:** beşinin de HÂLÂ VAR olmasını bekliyorum (5/5). Gerekçe:
  koşu18 → fc380975 arasında bant kodunun değiştiğini bilmiyorum; KOŞU 20'nin bayrakları
  aynı bant tanımını kullanıyor.

---

## 1. ÖLÇÜM — KOŞU 20 (önce tabanı) · 6 Ekim 15:28–18:48
Betikler (salt okuma): `C:\atlas-kosu-kayit\bant_olc2.py` · `bant_govde.py`. Sonuçlar
`bant_olc_*.json`. Kod denkliği: `uret_petek.py` koşu18 (55dfa2b5/2ddede3d) ↔ fc380975
**aynı blob** ⇒ Emre'nin koşu17/18 görselleri ile KOŞU 20 aynı bant koduyla üretildi.

### Mekanizma — `uret_petek.py:7865–7880` (bant aşaması)
```
ilk bant (≤5)     _g = PETEK_D[_i]                                 ← çizilen petek
sonraki bantlar   _g = _BANT_HAM[N][_i] − _BANT_HAM[önceki][_i]    ← HAM bütçe kesimleri
devlet bandı      unary_union(petek bantları)  — kapat()/delikleri_doldur() YOK
yabancı gövde     :6671/:7057 delikleri_doldur(kapat(g)) + puan kapısı (:6683)
```
⇒ 5-7 bandı ÇİZİLEN gövdeden değil, ham 5 günlük kesimden çıkarılıyor. Çizilen yabancı
gövde puan kapısı + kapat ile ham kesimden FARKLI ⇒ aradaki şerit hiçbir katmanda yok.

### ① boşluklu halka / ② doğrudan gövdeye — TEK mekanizma, ayırt edici: PUAN KAPISI
| karşılaştırma | 5-7 kayıt | kopuk parçalı | tamamen kopuk | boşluk km (medyan · Q1–Q3 · maks) |
|---|---|---|---|---|
| bant ↔ ÇİZİLEN gövde (yabancı) | 3.806 | **360 (%9,5)** | 17 | 53 · 31–77 · 238 |
| bant ↔ PETEK_D (≤5 katmanı) — tümü | 4.369 | 379 (%8,7) | 50 | 40 · 19–67 · 237 |
| **OSMANLI** (puan kapısından geçmez) | 563 | **0** | 0 | — |
| 7-10 ↔ ≤7, OSMANLI | 449 | **0** | 0 | — |

Sahra (Emre'nin adıyla andığı), çizilen gövdeye göre:
| kimlik | çizilen r | PETEK_D r | yapışık km² | kopuk km² | boşluk |
|---|---|---|---|---|---|
| berabis | 185 | 227 | 0 | 24.073 | 62 km |
| tuareg-adag | 186 | 219 | 0 | 36.791 | 62 km |
| tuareg-ahaggar | 198 | 214 | 7.695 | 13.396 | 41 km |
| tuareg-accer | 211 | 232 | 16.824 | 4.228 | 94 km |
| kanem-bornu (1281) | 522 | 539 | 4.112 | 21.960 | 62 km |
| tuareg-air · tubu-tibesti | 300 · 243 | 328 · 243 | tümü | 0 | — |
(r = alan-eşdeğer yarıçap, km)

⇒ **1600'ün sınanabilir iddiası:** boşluğun iç kenarı ~185–200 km (çizilen gövde),
dış kenarı ~220–230 km eşdeğer yarıçap (ham kesim) **ve Osmanlı'da 0** ⇒ sebep
**PUAN KAPISI** (M2'nin hedefi). TAVAN olsaydı Osmanlı'da da görülürdü.
⚠️ "~282 km" kelepçe tabanı eşdeğer yarıçapla doğrudan sınanamaz (yarıçap alan-ortalaması).
⇒ **②'nin koşulu:** puan kapısının gövdeyi kesmediği yer (Osmanlı · tuareg-air · tibesti) = yapışık.
En çok kopuk kayıt Sahra değil: hollanda 38 · venedik 30 · fransa 28 · maratha 21 ·
qing 21 · ming 17 (kıyı/ada parçaları) ⇒ kusur Sahra'ya ÖZGÜ DEĞİL, çölde yalnız en GÖRÜNÜR.

### ③/④ fark yok
- 5-7 boş: **523** devlet-dönem; hepsinde 7-10 da boş ⇒ **③ ile ④ AYNI küme**.
- Ölçülen 400/523'ün sebebi (gövde çevresi 0,5° şerit):
  **komşu gövde 266 (%66) · deniz 49 (%12) · serbest kara var 85 (%21)**.
  Serbest kara sınıfında serbest pay medyanı %11; en çok sirbistan 14 · bulgaristan 10 ·
  suleyman-celebi 5 · darfur 4 · eflak 4. Geçilmez arazi mi kusur mu AYIRT EDİLMEDİ.
- **Yeni alt sınıf:** 5-7 var, 7-10 yok: **1.205** devlet-dönem (sınıflanmadı).
- ⇒ 315/400 (%79) MUAF (komşu/deniz) — kusur değil, arayüzde BEYAN edilmeli.

### ⑤ binme — ayırt etme (sayı koşu sonrasına kaldı)
Koddan: bant `kapat()`/`delikleri_doldur()` hattından GEÇMİYOR. İki ayrı kaynak:
(a) bant ↔ komşunun petek gövdesi (banda özgü: devret edilmiş petek parçaları) ·
(b) bant ↔ komşunun `kapat()` ile genişlemiş çizilen gövdesi (PAKET-0083 mekanizması).
Petek bantları ham kesimden (PETEK_TAM ∩ KARA) geldiği için devletler arası bant-bant
binme yapısal olarak beklenmez. Binme sayımı (`bant_olc2.py binme`) KOŞU 21'den sonra.

### H-0002 ① renk — MOTOR TUZU DEĞİL
`js/app.js:2008` `ufuk-bant-alan` fill-opacity 1; `SIYASI_KIP` (`:15703`) yumuşak kipte
gövdeyi 0,44'e indiriyor, bant tabloda YOK ⇒ aynı renk %44 ↔ %100. Diff:
`denetim/HAVVA-UFUK-RENK-1006.diff` (sert 0,72 · yumuşak 0,30), uygulanmadı.

### Öngörü (§0) karşısında
- ①② tek mekanizma: TUTTU, ama ayırt edici koşul **tavan değil PUAN KAPISI** (öngörüm "tavan" demişti — TUTMADI).
- ③④ çoğunluk muaf: TUTTU (%79).
- ⑤ kapat()'tan ayrı: kısmen — iki kaynak var, sayı bekliyor.
- Renk: mekanizma TUTMADI (renkler.py değil, app.js opaklığı).
- KOŞU 20'de 5/5 var: ①②③④ VAR · ⑤ ÖLÇÜLMEDİ.
