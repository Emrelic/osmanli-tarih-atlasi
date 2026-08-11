# RENK DENİZ — İlerleme

## ADIM 1 — deniz rengini bul, ölç (BİTTİ)

**Deniz rengi kaynağı:** `js/app.js` — iki bağımsız yerde aynı hex:
- satır 567: `"zemin"` katmanı (MapLibre `background`, en altta)
- satır 604: `"g-gol"` katmanı (göl/deniz dolgusu, `fill-opacity: 1`)

İkisi de `#a8c8dc`, opaklık 1.0 (opak — blend gerekmiyor, deniz zaten saf hâliyle
ekranda).

**Ölçüm:** 327 kimliğin tamamı `renk_olc.py`'nin var olan `gorunen()` (ülke
rengi kendi opaklığında karaya bindirilmiş hâliyle) fonksiyonuyla denize karşı
ΔE (CIE76, Lab) ile ölçüldü.

```
ΔE < 10  →  12 kimlik
ΔE < 12  →  24 kimlik
ΔE < 15  →  38 kimlik   ← seçilen tanı eşiği (gerekçe aşağıda)
ΔE < 18  →  49 kimlik
ΔE < 20  →  70 kimlik
```

**Eşik seçimi — ΔE < 15, gerekçe:** `renk_olc.py`'de karadan (altlık `#e8dfc8`)
ayrışma eşiği zaten `DE_ALTLIK = 15`. Kara ve deniz atlasın iki EVRENSEL
zemini — her ikisi de her karede var, ikisine karşı görünürlük ölçütü simetrik
olmalı. Daha gevşek olamaz (brifingin kendi notu): deniz her gövdenin her
kenarında.

**Emre'nin adıyla andığı ikisi:**
```
delhi-sultanligi   ΔE_deniz 18,74   hex #00acc1 — turkmen · kavalali ·
                    ingiliz-hindistani · ingiliz-malaya ile PAYLAŞIMLI (5 kimlik)
almanya (Kutsal Roma/Almanya)  ΔE_deniz 13,43
```

**🔴 Bulgu — ölçüm ile çıkarım ayrı satır:**
Ölçüm: Delhi grubu (ΔE 18,74) salt ΔE'ye göre 38 kimlikten DAHA İYİ görünüyor
— strict ΔE<15 eşiğinin dışında kalıyor.
Çıkarım: Emre'nin onu yine de "gözü kanatıyor" diye işaret etmesinin sebebi
muhtemelen PARLAKLIK (L*) yakınlığı — ΔE toplam mesafeyi ölçüyor ama:
```
deniz L* 78,9
Delhi grubu L* 76,3  (fark 2,6)   ton farkı 52°
almanya   L* 80,7  (fark 1,8)   ton farkı 31,5°
```
İkisi de parlaklıkta denizle neredeyse özdeş; büyük mavi zeminin içinde "aynı
açıklıkta bir leke" gibi okunuyor, ton farklı olsa bile.

**Karar (koordinatöre bildirildi, onay bekleniyor/paralel ilerleniyor):**
Eşik ΔE<15 (38 kimlik) + Delhi grubu (5 kimlik, ayrı gerekçeyle) = **43 kimlik,
38 hex-değişim noktası** (bazıları paylaşımlı hex taşıyor, birlikte taşınacak).

## ADIM 2 — düzelt (SÜRÜYOR)

Yöntem: `renk_olc.py`'nin primitiflerini (h2r/bind/lab/dE/gorunen/ton/uyum/
komsuluk/engel_kumesi) İÇE AKTARDIM, kendim yeniden yazmadım. Üstüne YENİ iki
filtre ekledim (bunlar `renk_olc.py`de yoktu):
- ΔE(aday, deniz) ≥ 20 (tanı eşiğinin üstünde güvenlik payı)
- ton(aday) ∉ [15°, 35°] — Osmanlı'ya ayrılmış kırmızı şerit (renkler.py'nin
  kendi belgelenmiş kuralı, `letonya`/`kaffa` yorumlarında yazılı)

Engel kümesi: `engel_kumesi()` (1500 km "AYNA", künye penceresi) — Voronoi
komşuluğundan daha geniş, çünkü 38 kimlik BİRDEN değişiyor ve yeni çakışma
riski normalden yüksek.

Sıralama: en çok kısıtlı (engel kümesi en büyük) grup ÖNCE çözülüyor (klasik
graf-renklendirme sezgisi) ki zor vakalar taze aday havuzundan seçsin.

Şu an: aday üretimi + 38 grubun çözümü çalışıyor (arka planda, canlı veri
büyük — 2356 nokta, engel kümeleri bazı gruplarda 100+).

## Sıradaki
- Çözüm bitince: `renkler.py`ye tek tek yaz (grup grup, PAYLAŞIM beyanını da
  güncelleyerek — delhi grubu ve babur/darfur çifti mevcut PAYLASIM kayıtlı)
- `py arac/renk_olc.py` ile TAM denetim (§9 zorunlu)
- İkinci geçiş (sıra etkisi ölçümü)
- Çözülemeyen varsa CİNSİ yazılacak (tercih/yapı/sıra)
