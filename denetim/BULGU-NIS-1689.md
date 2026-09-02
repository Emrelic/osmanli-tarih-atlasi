# BULGU — NİŞ 1688 mi 1689 mu? Veri DOĞRU, TDV `nis` maddesi kendi içinde çelişik

**Oturum:** PAKET-0037 (Fable) · **Tarih:** 2 Eylül 2026 · **Sevk:** 1.MURAT (send_message 05:40)
**Soru:** veride Niş `s:avusturya f:"1689-09-24"`, TDV `nis` "24 Eylül 1688" diyor — hangisi doğru, küme ne olacak?

## 1. Ölçtüğüm

### 1a. TDV'nin KENDİ maddeleri birbiriyle çelişiyor — dördü 1689 diyor, biri 1688
```
TDV `nis`        "24 Eylül 1688'de Niş, Margrave Ludwig von Baden'in birlikleri tarafından
                  ele geçirildi. Fakat ... Köprülüzâde Fâzıl Mustafa Paşa'nın karşı saldırısı
                  ile ... geri alındı (Zilhicce 1101 / Eylül 1690)."            ← 1688
TDV `vidin`      "1689 Ekiminde ... Margrave Ludwig von Baden, Fethülislâm ve Florentin ile
                  birlikte Vidin'i savaşmadan ele geçirdi."                      ← 1689 EKİM
TDV `sehirkoy`   "1689'da şehir müttefik hıristiyan kuvvetlerince zaptedildi ... Ertesi yılın
                  eylülünde Köprülüzâde Fâzıl Mustafa Paşa kasabayı ... geri aldı." ← 1689
TDV `belgrad`    "Avusturyalılar'ın saldırısına uğrayarak bir ara elden çıktıysa da (1688)
                  Köprülüzâde Fâzıl Mustafa Paşa tarafından geri alındı (1690)."   ← Belgrad 1688
TDV `kopruluzade-fazil-mustafa-pasa`
                 "Rumeli'de Üsküp'e kadar ilerleyen Avusturya kuvvetlerini geri atmak için ilk
                  seferine Şevval 1101'de (Temmuz 1690) çıkmıştı ... Şehirköy (Pirot), Vidin,
                  ... Niş ve asıl önemlisi Belgrad geri alındı."                 ← 1690 dönüş
```
Baden Vidin'i **Niş'ten sonra** aldı (Niş → Vidin hattı) ve TDV `vidin` bunu **Ekim 1689**'a
koyuyor. Niş 1688'de düşmüş olsaydı Vidin 13 ay sonra alınmış olurdu — oysa aynı seferin
ardışık iki adımı. Belgrad'ın düşüşü **6 Eylül 1688** (çekirdek maddesi var); Baden 1688'de
Belgrad'da durdu, Niş **1689 seferinin** hedefiydi. ⇒ `nis` maddesindeki "1688" bir **yıl
hatası** (Hicrî 1100 → Milâdî çeviri kayması olması muhtemel; madde Hicrî karşılık vermiyor).

### 1b. Çekirdek kronoloji (olaylar*.js) — 1688-09-24 YOK, 1689-09-24 VAR
```
1688-09-06  Belgrad'ın ilk kez kaybı — Kutsal İttifak kuşatması
1689-09-24  Niş ve Vidin'in kaybı — en kritik yıl            ← veriyle AYNI GÜN
1689-10-25  Köprülüzâde Fâzıl Mustafa Paşa'nın sadrazamlığa atanması
1690-09-09  Niş, Vidin ve Belgrad geri alındı                ← veriyle AYNI GÜN
1688-09-24  (hiçbir olaylar*.js / kronoloji_*.js dosyasında YOK)
```
⇒ Niş 1688-09-24'e taşınsaydı **maddesiz Osmanlı kırılması** doğar, Değişmez 2 (tavan 0)
kırılır, yayın kapısı kapanırdı — koordinatörün ① uyarısı yerinde; ama taşımaya gerek yok.

### 1c. Bağımsız akademik kaynak (başka oturumun yaması, yer_yama_sh107.js)
```
Mirčetić, Dragoljub (1994), Vojna istorija Niša, Prosveta — Niş'in alınışı 24 Eylül 1689
Necati Tacan (1939), Eski Osmanlı Seferlerinden Niş, Belgrad ... 1690-1696 — TDV `nis`in
kendi bibliyografyası; 1690 geri alınışı için
```

### 1d. 1689-09-24 kümesi — beş kayıt, aynı gün
```
Niş               1689-09-24 → 1690-09-09   GERÇEK GÜN (Niş muharebesi)          ✓
Şehirköy (Pirot)  1689-09-24 → 1690-09-09   TDV: "1689" (gün yok); Niş'ten hemen sonra
Vidin             1689-09-24 → 1690-09-09   TDV `vidin`: "1689 EKİMİ" ⇒ ~3 hafta ERKEN
Kragujevac        1689-09-24 → 1690-09-09   TDV yok (302); Batoçina 30 Ağu 1689 sonrası
Çaçak             1689-09-24 → 1690-09-09   TDV yok (302); aynı
```
Tarihi kim yazdı: `git log -S` → **28 Temmuz 2026**, motorun ilk günü (4e6f3c5 · 72feb1a).
Dördü Niş'ten **ödünç** — ama hepsi aynı seferin Ağustos–Ekim 1689 penceresinde; ödünç
tarihin sapması ±3 hafta, YIL sapması yok. Bekleyen yamalar (p35 · sh107 · ok105) beşini de
**1689-09-24'te tutuyor**, yalnız `kaynak:` ekliyor; sh107 Vidin için "ikincil kaynak 19 Ekim
1689 diyor, akademik değil, DOKUNMADIM" notu düşmüş.

## 2. Çıkardığım (ölçümden ayrı)
- **Niş: `zaten-dogru`.** 1689-09-24 dört TDV maddesi + Mirčetić + çekirdek madde ile tutarlı;
  tek aykırı TDV `nis`in yıl rakamı. `§4` "TDV esastır" kuralı TDV'nin **iki maddesi
  çeliştiğinde** hangisinin esas olduğunu söylemez; burada ölçüm, iç tutarlılık ve olay sırası
  1689'u veriyor. **Veriye dokunulmadı.**
- **Küme çözüldü, bölünmedi:** Niş taşınmadığı için dört kayıt havada kalmıyor (③ boş).
- **Vidin tek gerçek sapma:** TDV ay veriyor (Ekim 1689), gün vermiyor. Seçenekler:
  (a) 1689-10-01'e çek (ay biliniyor kuralı; çekirdek maddesi 1689-09-24'e 7 gün, Değişmez 2
  tamam) — ama çekirdek maddesi "Niş VE Vidin'in kaybı" diye TEK maddede 24 Eylül'e bağlı,
  harita maddeden bir hafta sonra oynar; (b) olduğu gibi bırak, ödünç olduğunu kayda geçir
  (sh107 zaten geçirmiş). **Önerim (b)**: gün kaynağı yok, madde bölünmeden (a) yeni bir
  tutarsızlık üretir. Madde bölünecekse (kronoloji koordinatörde) o zaman (a).
- **TDV'ye hata bildirimi** projenin işi değil; ama `nis` slug'ına dayanan başka bir kayıt
  1688 yazmışsa yanlıştır — tarandı: veride 1688-09-24 taşıyan kayıt **0**.

## 3. Ne yapılmadı ve niçin
- Yama YAZILMADI: değişecek bir alan yok. Vidin için karar koordinatörün (K4).
- TDV `nis`in kaynağı olan Hicrî tarih maddede yok; "1100" yazsaydı 1688-89 çevirisi olarak
  açıklanabilirdi — bu bir **tahmin**, ölçüm değil; hükme dayanak yapılmadı.
