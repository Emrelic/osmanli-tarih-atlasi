# Yol üstü durakları — şartname (post-it #56, Emre, 17 Ekim 2026)

**Kural (Emre):** Kara yoluyla ulaşılan bir yer (örn. Erzincan–Kemah) için arada yerleşim kaydı olmasa bile, o
yolun üstündeki yerler eksklavı engellemek için haritaya katılır; hedefi alan devlet aradaki yolu da kontrol etmiş
sayılır. Bu noktaların petekleri **geçici** hesaplanır ve hedefi anakarayla koridor biçiminde birleştirir.
Bunlar **yerleşim sayılmaz.**

## Durum (18 Ekim 2026, #56 Opus turu)
- **#56 sahnesi (Sivas–Kemah, 1401) durak gerektirmiyor.** Post-it #59 (commit `eadaf6d3f`) aynı üç yeri — Zara,
  İmranlı, Refahiye — `data/yerlesimler_ek29.js`e **gerçek yerleşim** olarak ekledi (abi merkez kuralı: Zara ve
  İmranlı Sivas zincirini, Refahiye Erzincan zincirini taşır; üçü de 1401-02-01 → 1402-07-28 Osmanlı, beyanlı
  yaklaşıklık). Koridor Sivas → Zara → İmranlı → Refahiye → Kemah kesintisiz Osmanlı'dır; eksklav bir sonraki
  HAVVA koşusunda kalkar (KOŞU 27 #59'dan önce başladığı için bugünkü haritada henüz yok).
- `data/yol_ustu_duraklari.js` bu yüzden **boşaltıldı** (aynı üç noktanın ikinci, kaynaksız kopyasıydı).
- **Öncelik:** Abi merkez kuralı (yerleşim + kaynaklı merkez zinciri) duraktan önce gelir. Durak, ancak yol
  üstündeki yerin o devirde var olduğu teyit edilemiyorsa ya da abi merkezi bulunamıyorsa kullanılır.

## Motor değişikliği GEREKMİYOR (ölçüldü)
İlk tasarım `girdi.py` + `uret_petek.py` değişikliği öngörüyordu (motor tuzu → 7-8 saatlik tam inşa). Gerek yok:
motor bir noktanın **var olduğu pencereyi** zaten `kur:` / `bit:` alanlarından okur (`girdi.BILINEN_ALANLAR`,
`uret_petek.petek_epok`; pencere dışında petek komşuya devredilir, Değişmez 1 de bu pencereye uyar). Dolayısıyla
durak, bir yerleşim dosyasında şu biçimde sıradan bir kayıttır:

```js
{ ad:"<Yer> (durak)", tur:"durak", lat:…, lon:…, g:9, k:4,
  kur:"<hedefin alınış günü>", bit:"<hedefin kaybı günü>",
  kaynak:"YOL ÜSTÜ DURAĞI — hedef: <yer> (<kaynak>) · konum coğrafî, sahiplik tanıklığı DEĞİL",
  d:[{f:"<kur>", t:"<bit>"}] }       // ya da s:[{…, d:"<devlet>"}]
```
- `d`/`s` dönemi `kur`→`bit` ile birebir aynıdır; hedefin kaynaklı alımından türer.
- Yeni dosya ise adı `girdi_listesi.py`ye eklenir (bu liste tuz DEĞİLDİR; yalnız çevredeki hücreler yeniden hesaplanır).
- Kırılmalar hedefin kırılmalarıyla aynı gündür; Değişmez 2 maddesi hedefinkidir.

## İlk gerçek durakla birlikte yapılacak (henüz yapılmadı — okuyan veri yok)
1. `js/app.js`: `tur:"durak"` kayıtları işaret, etiket, arama ve "alandaki yerleşimler" listelerine girmez
   (`ISARET_KAYNAK` süzgeci ve `gelistirici.js` bağlamı).
2. `arac/denetle.py`: durak sayımı yerleşim sayılarından ayrı satır; "durak `kur`/`bit` hedefin dönemi dışında olamaz".
3. Doğrulama: durağın penceresinde eksklav kalkmalı, pencere bitince koridor kalkmalı.
