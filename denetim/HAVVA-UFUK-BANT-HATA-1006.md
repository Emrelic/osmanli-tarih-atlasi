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
