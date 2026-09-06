# ÖLÇÜM — MANDA YAMASI RENK KAPISINDA DURUYOR: 4 ihlal, ikisi ağır

> **1.MURAT (Oturum 0) · 6 Eylül 2026 · VERİ VE RENK YAZILMADI**
> (koşu 7b sürüyor; `renkler.py` DONUK).
> Dayanak: `HUKUM-MANDA-KIMLIK-0906.md §⑥`.
> Ölçü **aletin kendisinden** alındı: `renkler._bindirilmis_lab` + `_de3`,
> opaklık `renkler.OPAKLIK["yabanci"]` — taklit edilmedi.

---

## ① BULGU — dört çift eşiğin (ΔE 12) ALTINDA

```
irak-kralligi          misir-kralligi     #42d224 · #48d224   dE  1,09  🔴🔴
irak-kralligi          misir-sultanligi   #42d224 · #4ed224   dE  1,82  🔴🔴
suriye-lubnan-mandasi  tbmm-turkiye       #9c24d2 · #7e24d2   dE  5,27  🔴🔴
filistin-mandasi       ingiliz-sudani     #24d2a8 · #24d2c0   dE  5,39  🔴
```

🔴 **`irak-kralligi` ile `misir-kralligi` ΔE 1,09 — pratikte AYNI RENK.**
Kırmızı kanalda **6 birim** fark var, başka hiçbir fark yok. İkisi de
1922-1923'te sahnede ve aralarında yalnız Filistin/Ürdün duruyor.

🔴 **`suriye-lubnan-mandasi` ↔ `tbmm-turkiye` ΔE 5,27 ve bunlar KOMŞU.**
Antep/Kilis (Türkiye) ile Halep (Suriye) **sınırdaş**; kullanıcı
Ankara İtilâfnâmesi'ni okurken iki tarafı ayırt edemeyecek.
📌 `§11`: *"anlatının merkezindeki çift daha fazlasını hak eder"* —
bu çift yalnız eşiği geçmemiyor, **hak ettiği eşik daha yüksek.**

## ② NİÇİN BUGÜN GÖRÜNMÜYOR — ve niçin görünecek

Üç manda kimliği veride **sıfır kez** kullanılıyor ⇒ hiç çizilmiyorlar ⇒
`renk_olc` onlar için **hiçbir çift kurmuyor.** Yama onları sahneye
çıkarınca dört çift birden doğuyor.

⇒ ***Bu, `§9`un "palet verinin fonksiyonudur" kuralının en saf hâli:
hiçbir renge dokunmadan, yalnız bir yama inerek dört ihlal doğuyor.***
Ve `§11`in *"veri penceresi ile künye penceresi ayrı şeylerdir — biri
BUGÜNKÜ, öteki YARINKİ kusuru bulur"* dersinin canlı vakası.

🟢 **Ve hükmün öngörüsü TUTTU ama ZAYIF ÇIKTI.** `HUKUM-MANDA-KIMLIK`
şöyle diyordu: *"üç gövde sahneye çıkınca komşularıyla yeni renk
çiftleri doğar."* Doğruydu — ama *"çiftler doğar"* ile ***"iki gövde
pratikte AYNI renkte olur"*** aynı şey değil. Öngörü **yönü** biliyordu,
**büyüklüğü** bilmiyordu.

## ③ 🔴 HÜKÜM: YAMA RENK OLMADAN UYGULANMAZ

```
① koşu 7b bitsin  →  renkler.py çözülür
② irak-kralligi · suriye-lubnan-mandasi · filistin-mandasi YENİDEN ÇÖZÜLÜR
   ⚠️ `renk_olc.py --oner` payı YOK (DE_KOMSU = 12,0); `renkler.py`nin
      kendi `_GUVENLI_PAY = 13,0` emsali kullanılmalı — yoksa çözüm
      eşiğin KIL PAYI üstünde durur (bu belge o borcu kaydediyor)
③ suriye-lubnan-mandasi ↔ tbmm-turkiye için hedef 12 DEĞİL ≥25
   (anlatının merkezindeki çift · Ankara İtilâfnâmesi)
④ SONRA yer_yama_manda_0906.js uygulanır
```
🔴 Sıra ters çevrilirse harita **Irak'ı Mısır'la, Suriye'yi Türkiye'yle
aynı renkte** gösterir — ve `denetle.py` bunu **görmez**, çünkü veri
denetimleri renge bakmaz.

## ④ 🟡 BİR HİPOTEZ — ölçülmedi

Üç künyenin **rengi var ama verisi yok** olması bir tesadüf olmayabilir:
kimlikleri açan oturum renk kapısında durmuş **olabilir.** ⇒ Ölçülmedi;
`git log` ile bakılabilir, bakılmadı.

## ⑤ 🔴 KENDİ ALETİMİN AYNI KUSURU İKİNCİ KEZ

Betik `suud-ucuncu` · `yemen-zeydi` · `bulgaristan-kralligi` için
*"RENK YOK"* bastı. **Üçü de yanlış:** renk `harita:` anahtarına bakar,
`id`ye DEĞİL (`bulgaristan-kralligi` → `harita:"bulgaristan"` → `#2d6c0c`).
🔴 Bu, `CLAUDE.md §11`de **adıyla kayıtlı** bir kör nokta ve bu oturumda
**ikinci kez** yapıldı — ilki Silistre zincir sınavındaydı (`bulgaristan`
· `musa-celebi` · `suleyman-celebi` *"KÜNYE YOK"* çıkmıştı).
⇒ ***Bir kör noktayı belgede okumak, kendi aletinde önlemeye
yetmiyor.*** İki vakada da dört sayıdan üçü doğruydu ve yanlış olan
**sessizdi** — hata vermedi, temiz bir satır bastı.
📌 Çare kural değil **alet**: `harita:` dolaylamasını yapan ortak bir
yardımcı (`kimlik_boya(kid)`), ve her yeni ölçüm onu çağırmalı.

## ⑥ ÖLÇÜLMEDİ
```
· suud-ucuncu ve yemen-zeydi'nin `harita:` üzerinden rengi VAR MI
· dort ihlalin COGRAFI mesafesi (`renk_olc`un kademe eşikleri:
  <600 km ihlal · 600-1500 uyarı · >1500 tasarım) — YALNIZ dE ölçüldü
· yeni renklerin ÖTEKI komşularla açacağı çiftler (yalnız 14 komşu bakıldı)
```
⚠️ Son satır önemli: bu ölçüm bir **tarama değil bir sonda.** Gerçek
hüküm `renk_olc.py`nin tam koşusundan çıkar.
