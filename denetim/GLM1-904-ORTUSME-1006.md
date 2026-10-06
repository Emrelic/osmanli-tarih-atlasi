# GLM1-904-ORTUSME-1006 — 904 slug'ın BİZİM VERİMİZLE örtüşmesi (yerel, bedsiz)

Atama: YILDIRIM BAYEZIT (koordinatör), 7 Ekim — *"(A) ÖRTÜŞME — yerel, bedava,
'yapılmalı mı'yı belirler"*: 904 slug'ın kaçı verimizde bir yerleşim/kişi/devlete
karşılık geliyor ve o kayıt şu an kaynaksız? Evren: `girdi.GIRDI_DOSYALARI`
yerleşim adları + `kisiler.js` + `devletler.js`. Normalleştirme `ARAC-NORMAL-0903.py`.
Kovalar: **VAR+kaynaksız / VAR+kaynaklı / YOK** (hasatçı uydurması).
Çıktı: `GLM1-904-ORTUSME-1006.tsv` + tek satır oran.

Durum: **BİTTİ** (7 Ekim 2026, GLM1; tam sayım, yerel, ağ isteği 0).

## 0. 🔴 ÖNGÖRÜ — ölçümden ÖNCE mühürlendi (7 Ekim, GLM1)

Evren: 904 gerçek-TDV-slug (INDEKS ŞÜPHELİ; ARAMA-/DIS- dışı) — aynen 904
sınavının evreni. Tam sayım, örneklem yok (yerel işlem, ağ isteği yok).

**SAYI öngörüsü** (kova payları, nokta ve aralık):
- VAR+kaynaklı: **%30** (aralık %20-40)
- VAR+kaynaksız (kaynak alanı YOK ya da `bulunamadı` beyanı): **%10** (aralık %5-20)
- YOK (hasatçı uydurması / verimizde karşılıksız): **%60** (aralık %48-70)

**MEKANİZMA öngörüsü** (sayıdan AYRI değerlendirilecek):
904 slug'ının baskın sınıfı hasatçının **telaffuz varyantı ve dünya-coğrafyası
denemeleri** — verimiz Osmanlı-eksenli 4293 canlı nokta + kişi/devlet dizinleri
olduğundan, dünya adlarının çoğu (tobolsk, mossi, ugedey sınıfı) verimizde YOK
çıkacak. Eşleşenler ağırlıkla üç yerden: yerleşim adının kısa biçimi
(tuzağ ②: kısa slug ölü, tam slug kaynaklı), kişilerin `id`'si, devlet `id`'leri.
Kaynaksız cephane kişilerden GE(L)MEZ (§1.5: kişi kaynaklı 257+2, kaynaksız 0) —
VAR+kaynaksız ağırlığı yerleşimlerden gelir; o da kaynak zorunluluğu kuralı
yürürlükte olduğundan dar kalır.

## 1. YÖNTEM

- Slug ↔ ad eşleşmesi İKİ anahtarla, ikisi de `norm()` (ARAC-NORMAL-0903)
  tabanlı: **TIRELI** (`[^a-z0-9]+` → tek tire; "Ordu (Şehir)"→"ordu-sehir",
  slug "ordu--sehir"→"ordu-sehir") ve **SIKISTIRILMIS** (harf/rakam dışını sil;
  "Tuğrul Şah"→"tugrulsah"). Kişi/devlet `id` alanları doğrudan TIRELI anahtara
  girer. Slug her iki anahtarıyla da aranır; eşleşme biçimi not sütununa yazılır.
- Kaynak durumu ÜÇ alt sınıf: kaynak-YOK (alan hiç yazılmamış) · kaynak-BULUNAMADI
  (`bulunamadı` — beyan, ama kaynak bağlanabilir aday) · kaynak-DOLU.
  Kova ikilisi koordinatör tarifidir: kaynaksız = YOK ∪ BULUNAMADI.
- Çoklu eşleşme (aynı anahtara birden çok kayıt): eşleşme sayısı not sütununda;
  kova = kayıtlardan EN AZ BİRİ kaynaksızsa VAR+kaynaksız, yoksa VAR+kaynaklı.

## 2. SONUÇ — YOK %64,3 · VAR+kaynaksız %24,0 · VAR+kaynaklı %11,7

| Kova | Sayı | % | Öngörü (§0) | Tuttu mu |
|---|---|---|---|---|
| YOK (verimizde karşılıksız) | **581** | %64,3 | %60 (48-70) | ✓ aralık içinde |
| VAR+kaynaksız | **217** | %24,0 | %10 (5-20) | ✗ 2,4 katı — aralık üstü |
| VAR+kaynaklı | **106** | %11,7 | %30 (20-40) | ✗ altında |

**Tek satır oran: verimizde VAR 323/904 (%35,7) — kaynaksız 217 (%24,0) ·
kaynaklı 106 (%11,7) · YOK 581 (%64,3).**

Eşleşen 323 slug'un niteliği: **yerleşim 297** (292 yalnız-yerleşim + 4
devlet+yerleşim + 1 kisi+yerleşim) · **devlet 26** · **kişi yalnız 0** (tek kişi
eşleşmesi `agah-efendi`, o da yerleşimle birlikte). Eşleşme biçimi: tireli 293 ·
id 25 · sıkıştırılmış 5. Kaynak alt dağılımı (VAR içinde): **kaynak-YOK 197 ·
kaynak-BULUNAMADI 18** (16+2 karışık) · kaynak-DOLU 106 (2 karışık).

**Öngörü muhasebesi:** MEKANİZMA'nın üç ucu tuttu — YOK baskın (%64,3),
eşleşenler ağırlıkla yerleşim, kişilerden kaynaksız cephane gelmiyor (tek kişi
eşleşmesi DOLU). Dördüncü uç çürüdü: *"kaynaksız cephane dar kalır"* yerine
217 çıktı. Kökü ölçümden görünüyor: **197 yerleşim kaydında kayıt düzeyi
`kaynak` alanı hiç YOK** — benim ölçümüm KAYIT düzeyidir; koordinatörün
"kaynaksız `s:` 1912" evreni DÖNEM düzeyidir ve bu koşumda ölçülmedi. Kaynak
alanı yazılmamış 197 kayıt, (A)'nın yan ürünü olarak ayrı bir borç görünümü
(kural `kaynak:`'ı zorunlu sayar — hükmü koordinatörün).

⚠️ **Evren beyanı:** `yukle()` **4300** nokta saydı; §1.5 **4299** diyor (1
fark — KOŞU 21 sürüyor ya da tablo bayat; ölçüm okunan hâlin fotoğrafıdır).
Kişi 288 · devlet 896 künye.

🔴 **(B) eşiği:** VAR+kaynaksız **%24,0 > %20** ⇒ koordinatörün *"(A) %20'nin
altındaysa (B) hiç koşulmaz"* koşulu TERSİNE döndü — **(B) anlamlı çıktı**
(mühürlü 30'luk örneklemde kapsayıcı aday taraması, ~30 arama isteği; karar
koordinatörün).

Kalite kontrolleri: çoklu eşleşmeler doğru (`cenova`→Cenova Cumhuriyeti+Cenova ·
`hive`→Hive Hanlığı+Hîve · `kuba` · `mapungubwe`); sıkıştırılmış anahtar
yakalamaları doğru (`mentese-ogullari`→Menteşeoğulları · `tuzhurmatu`→Tuz
Hurmatu · `tsqaltbila`→Ts'q'altbila). TSV: `GLM1-904-ORTUSME-1006.tsv` (904
satır).
