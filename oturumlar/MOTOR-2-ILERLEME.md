# MOTOR 2 — İLERLEME DEFTERİ (2 Ağustos 2026, Fable 5)

> Görev tanımı: `oturumlar/MOTOR-2-GOREV.md` (4c366a9) · Ana brifing: `MOTOR-KAPILAR.md` (19417f7)
> Kapsam: İş A (ortaasya2 girdiye) · İş B (denetle.py:962 kaynaktan okusun) · İş C (BOLGE maliyet ÖLÇÜMÜ)
> Kapı B (15 Avrupa rengi) BU OTURUMDA DEĞİL — VERİ KİMLİK 2 çakışması.

---

⏳ başladım: İş A — ortaasya2 çakışma ölçümü + girdiye alma — 2026-08-02 12:10

## ✅ İş A — ortaasya2 girdiye alındı (12:25)

Ölçümler (hepsi bu oturumda, betik scratchpad'de; sayılar KENDİ ölçümüm):
- ortaasya2: **7 nokta · 9 kimlik · rengi olmayan 0 · 7/7 BOLGE kutusu içinde**
  (lon 51,92..61,50) — koordinatörün sayılarıyla birebir aynı.
- **3 km çakışma: 0 çift** (canlı 991 noktaya karşı; beklenen negatif sonuç,
  çıkmadı). En yakın çift 17,36 km: Aşkabad ↔ Nesâ (yerlesimler.js).
  Partinin kendi içinde de 3 km çifti yok.
- Çürük yorumlar KENDİ ölçümümle düzeltildi: asya rengi olmayan kimlik
  98→**135** (toplam kimlik 147), avrupa 228→**237 nokta**. Koordinatör
  ölçümüyle uyumlu.

Kabul koşusu (`py arac/denetle.py`, öncesi/sonrası tam çıktı karşılaştırıldı):
- Değişmez 1: **50 sahipsiz → 50 sahipsiz** (991→998 yerleşim). YENİ SAHİPSİZLİK YOK. ✓
- Değişmez 2: 493 kırılma, 0 açık — değişmedi. ✓
- Konum: 0 maske dışı — değişmedi. ✓
- ⚠️ Değişmez 2s (bilinen borç, taban zaten ✗ 119/114): 610→614 kırılma,
  açık 119→**121 (+2)**. Yeni iki açık satır yalnız ortaasya2 noktaları:
  `1500-01-01` (Aral kuzeyi · Emba · Üstyurt kuzeyi — Nogay/Kazak sahneye
  çıkışı, TDV yıl vermiyor) ve `1640-01-01` (Guryev kuruluşu). 1869 ve 1881
  satırları önceden vardı (Krasnovodsk, Dihistan), yalnız nokta eklendi.
  → Kırılma borcu VERİ KRONOLOJİ sınıfı iş; koordinatöre bildirildi.
- Değişmez 2t: 52 — değişmedi (taban zaten ✗ 52/49).
- Çıkış kodu her iki koşuda da 1 (bilinen borçlar yüzünden) — SINIF DEĞİŞMEDİ.

---

⏳ başladım: İş B — denetle.py:962 _BOLGE_KUTU kaynaktan okusun — 2026-08-02 12:30

## ✅ İş B — denetle.py _BOLGE_KUTU artık kaynaktan okunuyor (12:40)

Elle kopya `(-12, 1.5, 62, 62)` silindi; `_BOLGE_KUTU` artık
`uret_petek.py`'deki `BOLGE = box(...)` satırından regex ile okunuyor —
desen `denetle_kapsama.py:47-58` emsalinden (a6215ce) aynen alındı.
Ayrıştırma başarısızsa SystemExit (sessizce eski değere düşme YOK).

Kabul ölçütü ÜÇ UÇLU, üçü de koşuldu:
- ① önce: `py arac/denetle.py` → çıktı X (İş A sonrası koşu)
- ② sonra: aynı koşu → **çıktı BİREBİR AYNI** (satır satır diff: 0 fark;
  çıkış kodu da aynı, 1 — bilinen 2s/2t borçları)
- ③ `uret_petek.py` BOLGE GEÇİCİ olarak 62→63 yapıldı →
  `denetle._BOLGE_KUTU` **(-12.0, 1.5, 63.0, 62.0)** okudu = YENİ değeri
  gördü. Sonra geri alındı; doğrulama: tekrar (-12.0, 1.5, 62.0, 62.0) ve
  `git diff arac/uret_petek.py` boş — kalıcı iz YOK.

