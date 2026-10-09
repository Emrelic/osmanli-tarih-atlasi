# DIVRIGI-MEMLUK-1008-EK — Darende ve Malatya (DIVRIGI-MEMLUK-1008'in devamı)

Görev UMIT İRTİBAT · 9 Ekim 2026 · ağaç `C:\atlas-divrigi2` (`origin/makine/umit` 7f63bcd9) ·
commit yok · **dört diff UYGULANMADI**.

## 0. Öngörü — ölçümden ÖNCE (görev metninden)
Darende'nin 1398-1400 arası Osmanlı dönemi eksik. Malatya'da Memlük'e dönüşün yılı TDV'de büyük
olasılıkla **yok**.
**Sonuç:** ikisi de ✓. Ama beklenmeyen iki bulgu daha çıktı:
- Darende'de **1414-1418 Memlük ara dönemi** de eksik.
- **Kendi yamamda bir hata buldum:** Behisni'yi `dulkadir` yapmıştım; TDV `besni` Memlük diyor.

## 1. Kaynak taraması (§4: arama aday üretir, GET doğrular)
- `darende`, `darende--malatya`, `darende--sehir`, `darende--ilce`: hepsi **302** ve arama
  sayfasına düşüyor. TDV'de müstakil Darende maddesi **yok**; künye notu da bunu söylüyordu.
- İçerik araması (`?q=darende&p=t`, 53 sonuç, ilk sayfası 10). Aday çıkan ve GET 200 dönen
  maddeler okundu: `dulkadirogullari` · `besni` · `divrigi` · `malatya` · `memlukler`.

## 2. Darende — ölçüm ve sınıflandırma (D205)
**Bugünkü zincir** (`yerlesimler_ok110.js`): ilhanli → 1335 · eretna → 1338 · **dulkadir
1338-01-01 → 1522-01-01** (kesintisiz) · Osmanlı 1522 → 1920.

TDV ne diyor (birebir):
- `divrigi`: "Yıldırım Bayezid 1398'de Sivas, Malatya, Besni (Behisni), **Darende** ve Divriği'yi
  … Osmanlı topraklarına kattı."
- `besni`: "1398’de Sivas, **Dârende** ve Malatya ile birlikte Osmanlı topraklarına katıldıysa da"
- `dulkadirogullari`: "Sultan Şeyh **1414** yılında sefere çıkarak daha önce kendi rızası ile
  verdiği Antep şehriyle **Dârende’yi Dulkadırlılar’dan geri aldı**." · "Fakat Mehmed Bey
  **1418’de Dârende’yi tekrar aldığı** gibi Besni’yi de ülkesine kattı."
- 1338 başlangıcı TDV ile uyumlu ("1338’de … Karaca Bey, bir baskınla Eretnaoğulları’nın elinde
  bulunan Dârende’yi işgal etti").

**Sınıf:** iki kaynaklı dönem **eksik**: ① Osmanlı 1398-1400 ② Memlük 1414-1418. Mevcut dönem
yanlış değil, eksik. Çare kısaltmak değil, araya dönem eklemek (delik açılmaz).

**Önerilen zincir:**
```
dulkadir 1338-01-01 → 1398-01-01
OSMANLI  1398-01-01 → 1400-01-01   d: y:savas, kesinlik yıl/yıl (TDV divrigi + besni)
dulkadir 1400-01-01 → 1414-01-01   ⚠️ 1400'deki geçişin günü ve sahibi Darende için BULUNAMADI —
                                     gün komşudan: Malatya (TDV malatya 1400, YIL, Dulkadır);
                                     1414'te Dulkadır elinde olduğu TDV'de var
memluk   1414-01-01 → 1418-01-01   (TDV dulkadirogullari, YIL)
dulkadir 1418-01-01 → 1522-01-01   (TDV dulkadirogullari, YIL)
```

## 3. 🔴 Kendi hatam: Behisni (Besni)
`DIVRIGI-MEMLUK-1008-KOORD.diff` Behisni'yi Malatya zincirine çekmişti (1400-1402 `dulkadir`).
TDV `besni` bunun yanlış olduğunu söylüyor (birebir):
> "1398’de Sivas, Dârende ve Malatya ile birlikte Osmanlı topraklarına katıldıysa da 1400’de
> Timur’un Sivas ve Malatya’yı zaptı sırasında **Memlükler’in eline geçti**. Ancak Timur 27 Eylül
> 1400’de şiddetli bir muhasaradan sonra burayı zaptetti. Onun bu yöreden çekilmesinden sonra
> **tekrar Memlükler’in hâkimiyetine girdi**."

**Düzeltme:**
- Osmanlı başlangıcı 1399-09-01 (Malatya kopyası) → **1398-01-01** (TDV besni).
- Osmanlı bitişi → **1400-08-01**. Gün komşudan: Sivas (`olaylar_ek5` "Ağustos 1400", kaynak TDV
  `sivas`).
- Ardından **memluk 1400-08-01 → 1516-08-24** kesintisiz.
- Yazılmayanlar: Timur'un 27 Eylül 1400 zaptı (çekiliş günü yok) ve "bir ara" Dulkadır dönemi
  (TDV `dulkadirogullari`: 1418'de Besni'yi aldı; bitiş "XV. yüzyılın sonlarına doğru", yıl yok).
  Bunlar **bulunamadı** olarak kaydedildi, uydurulmadı.

Arapkir, Hısn-ı Mansûr ve Kâhta'nın Malatya zincirinde kalması doğru. Onlar için müstakil kaynak
yok, `kaynak:` alanında komşu beyanlı.

## 4. Malatya — Memlük dönüşünün yılı: **BULUNAMADI**
- TDV `malatya` 1395-1420 arasında Memlük dönüşünü **anlatmıyor**.
- TDV `memlukler` 1395-1430 arasında Malatya'yı, Darende'yi, Divriği'yi, Besni'yi ve Dulkadır'ı
  **hiç anmıyor**.
- TDV `dulkadirogullari` yalnız bir alt sınır veriyor: "**1421’de** Memlük Sultanı Şeyh’in ölümü
  üzerine Suriye’de çıkan karışıklıktan faydalanan … Tuğrak **Malatya’yı zaptetti**." Yani 1421'de
  Malatya Dulkadır'ın elinde değildi (kimin elinde olduğu cümlede yok).
- ⇒ Veride `memluk 1402-07-28` başlangıcı kaynaksız kalıyor (zaten beyanlı).
- **Yeni bulgu:** 1421'de **Dulkadır (Tuğrak) Malatya'yı aldı**, veri ise bu dönemi
  göstermiyor. Bitişi TDV'de yok; yalnız 1480'lerde "Memlükler’in elinde bulunan Malatya" deniyor.
  **Yazılmadı** (bitişsiz dönem uydurma olur). Ayrı kalem önerisi.

## 5. `denetle.py` (EK uygulanmış ↔ uygulanmamış; temel: KRONO-SENKRON + DIVRIGI-1008 iki diff)
İki koşu da **çıkış 2**: Değişmez 8 ÖLÇÜLEMEDİ, çünkü taze ağaçta `devletler_harita.js` yok.
```
Değişmez 2        624 → 625 kırılma, 0 açık                     (Darende 1398 kazancı + madde var)
Değişmez 2s       1720 → 1723 yabancı · AÇIK 184 → 184          (3 yeni kırılmanın hepsi kapalı)
Değişmez 2sk      YER anılarak 2078 → 2081 · yalnız-taraf 2251 → 2252 (tavan 2250)
3z sayaç          487/56 → 488/57                                (Behisni m:Malatya ↔ Malatya dulkadir, ihlal değil)
mükerrer madde    95 → 95  (ilk denemede 96'ydı: Besni maddesinde 'Timur' kişisi Sivas maddesiyle
                            aynı güne düşüyordu — kişiler alanından çıkarıldı)
D1 · 1b · 2i · 2t · 4c · 4d   aynı
```
⚠️ **2sk yalnız-taraf +1:** hangi kırılma olduğu teşhis **edilemedi**, çünkü `--ayrinti` 2sk
kalemlerini tek tek basmıyor. Hipotez (ölçülmedi): Darende'nin 1400-01-01 Dulkadır kazancı,
yalnız Malatya'yı anan 1400 maddesine taraf üzerinden kapanıyor. Tavan KRONO-SENKRON ile zaten
aşılmıştı (2251); bu ek 2252 yapıyor.

## 6. Diff'ler ve iniş sırası
| dosya | ne | temel / sıra |
|---|---|---|
| `DIVRIGI-MEMLUK-1008-EK-KOORD.diff` | `yerlesimler_ok110.js` Darende | sıradan **bağımsız** (başka diff bu dosyaya dokunmuyor) |
| `DIVRIGI-MEMLUK-1008-EK-BEHISNI-KOORD.diff` | `yerlesimler.js` Behisni düzeltmesi | ① KRONO ② Z3 ③ DIVRIGI-KOORD ④ bu |
| `DIVRIGI-MEMLUK-1008-EK-BEHISNI-KOORD-ARTUKLU-SONRASI.diff` | aynı | ① KRONO ② Z3 ③ ARTUKLU ④ DIVRIGI-KOORD-ARTUKLU-SONRASI ⑤ bu |
| `DIVRIGI-MEMLUK-1008-EK.diff` | `olaylar_senkron_0930.js`: 1400-08-01 Besni · 1414 · 1418 Darende maddeleri | DIVRIGI-MEMLUK-1008.diff'ten SONRA |

- **İki tam zincir de temiz**, sıfırdan `git apply` ile denendi:
  - A: KRONO → madde → KOORD → EK → EK-BEHISNI → EK-KOORD ✓
  - B: KRONO → madde → ARTUKLU → KOORD-AS → EK → EK-BEHISNI-AS → EK-KOORD ✓
- Satır sonu LF, CR 0.
- 🔴 **Madde diff'i ile KOORD diff'leri AYNI commit'te inmeli** (§3.4-2). Yalnız KOORD inerse
  1400-08-01 Besni kırılması 2s'de açık kalır; ilk ölçümde bu 184 → 185 oldu ve tavana dayandı.
- **İstek:** Behisni düzeltmesi kendi diff'imdeki hatayı düzeltiyor. Koordinatör, istersen
  DIVRIGI-KOORD + EK-BEHISNI'yi tek diff'te birleştirebilirim (tek mesaj yeter). Malatya 1421
  Dulkadır dönemi ve Besni'nin 1418 Dulkadır dönemi bitiş yılı bekliyor, ayrı kalem.
