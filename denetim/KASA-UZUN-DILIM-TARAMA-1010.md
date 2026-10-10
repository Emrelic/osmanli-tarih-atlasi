# KASA-UZUN-DILIM-TARAMA-1010 — atlasın bütün `s:` dilimleri uzunluğa göre sıralanıyor; en riskliler okunuyor

Görev: YILDIRIM BAYEZIT (SAHIP-BOLGE-2 kararı ⑤) · Araştırmacı: KASA · `data/` DONUK · salt okuma · main d50ddbedd.
Hipotez (SAHIP-BOLGE 1-2'nin deseni, 7/7 · 12/12): atlasın sahip hatası noktalarda değil **uzun düz dilimlerde**;
uzun ve kaynaksız bir dilim ara sahipleri (işgal, rakip hânedan, yerel bağımsızlık, terk) yutar.

## 0. ÖNGÖRÜ ve ÖLÇÜT (ölçümden ÖNCE, 2026-10-10 — bu bölüm ayrı commit'te, sayım yapılmadan yazıldı)

### 0.1 Tanımlar (önceden kilitli)
- **Dilim:** `girdi.yukle()` ile okunan her yerleşimin her `s:` öğesi. `d:"__BOSLUK__"` dilimleri sıralamaya
  GİRMEZ (sahip iddiası değil, beyan); sayıları ayrıca verilir.
- **Uzunluk (yıl):** `(gun(t) − gun(f)) / 365.2425`. `t` yoksa `UFUK[1]` (1945-09-02). Uçlardan biri UFUK DAMGASI
  günündeyse (1000-01-01 · 1281-01-01 · 1923-10-29 · 1945-09-02) dilim **kırpılmış** sayılır ve işaretlenir: uzunluk
  bir ALT SINIRDIR, risk sıralaması yine yazılı uzunlukla yapılır.
- **Kaynaksız:** dilimin kendi `kaynak` alanı yok ya da boş. (Noktanın başka dilimindeki kaynak bu dilime TAŞINMAZ —
  D208'in zaman eksenindeki karşılığı.)
- **Risk sırası:** kaynaksız dilimler, uzunluğa göre azalan. Eşitlikte dosya + satır sırası (belirlenimci).
- **Örneklem A (risk):** sıralamanın ÜST 50'si. Aynı (d, f, t) kümesi üstte yığılırsa yine de 50 nokta tek tek
  okunur (D208: şehir adlı tanık); yığılma oranı ayrıca raporlanır.
- **Örneklem B (kontrol):** kaynaklı dilimlerden, A'nın uzunluk aralığına [min_A, max_A] düşenler arasından,
  `random.Random(1010)` ile 20. Aralıkta 20'den az kaynaklı dilim varsa aralık aşağı doğru genişletilir ve beyan edilir.
- **YANLIŞ (dilim için):** şehir adlı tanık (Y ya da Ş) şunlardan birini söylüyor:
  1. dilimin İÇİNDE ≥ 1 yıl süren başka bir `d:` sahibi (işgal, rakip hânedan, bağımsız yerel yönetim) ya da terk
     (varlık);
  2. dilimin başı ya da sonu tanıktan ≥ 5 yıl sapıyor (UFUK kırpmasından gelen sapma SAYILMAZ, bu D210).
  `v:` (tâbiyet) farkı, ⑧ BAŞKA OLAY ve S (bölge cümlesi) YANLIŞ sayılmaz.
- **TEMİZ:** şehir adlı tanık dilimin sahibini ve iki ucunu (± 5 yıl) karşılıyor, içinde ara sahip anmıyor.
- **ÖLÇÜLEMEDİ:** tanık yok ya da yalnız S. **Paydaya GİRMEZ** (HICRI-TARAMA-2 §1.4 dersi); ayrı sayılır.
- **Oran:** YANLIŞ / (YANLIŞ + TEMİZ), A ve B için ayrı. Kaynak: TDV birincil (İslâm dünyası); İslâm dünyası
  dışında akademik birincil (Tesalya dersi).

### 0.2 Sayısal öngörüler (sayımdan önce)
**Sayım (bedava kısım):**
- Toplam `s:` dilimi: **17.000 ± 3.000** (koordinatörün tahmini). Kaynaksız payı: **%55 ± 20**.
- Kırpılmış dilim (en az bir ucu UFUK DAMGASI): kaynaksızların **%40 ± 15**'i.
- Risk sıralamasının üst 50'sinin alt eşiği: **450 ± 150 yıl**.
- Üst 50'nin **≥ %60**'ı en çok 3 `d:` kimliğinden gelir (yığılma). Aday kimlikler: `osmanli` (ve öncüleri) ile uzun
  ömürlü bir Batı/Doğu devleti (`bizans`, `venedik`, `safevi`, `kastilya` ya da `portekiz` türü).
- Üst 50'nin **%70 ± 20**'si kırpılmış (1281 başlangıçlı ya da 1923/1945 bitişli).

**Okuma (örneklem A, risk):**
- Ölçülebilen (tanık bulunan): **30 ± 10 / 50**.
- YANLIŞ oranı (ölçülebilenler içinde): **%55 ± 25**. Beklentim yüksek ama SAHIP-BOLGE'deki 7/7'den DÜŞÜK, çünkü:
  en uzun dilimler büyük olasılıkla Osmanlı çekirdeğinde (Anadolu/Rumeli); orada atlas en çok emek görmüş bölgede ve
  ara dönemler (1402 Ankara sonrası beylikler, Venedik'in kıyı işgalleri, Rus işgalleri) daha seyrek.
- YANLIŞ'ların **%70 ± 20**'si iç yutma (ara sahip), kalanı uç sapması.
- En sık yutulan ara dönem türleri (öngörü sırası): ① 1402-1425 Timur sonrası beylik iadeleri ② Venedik/Ceneviz/
  Şövalye kıyı ve ada dönemleri ③ 1768-1878 Rus işgalleri ④ Safevî-Osmanlı el değiştirmeleri (Bağdat, Tebriz, Revan).

**Kontrol (örneklem B, kaynaklı):**
- Ölçülebilen: **15 ± 4 / 20**. YANLIŞ oranı: **%10 ± 10**.
- ⇒ Hipotezin sınaması: A oranı − B oranı ≥ **30 puan** (fark yoksa "uzunluk × kaynaksızlık" ölçütü REDDEDİLİR ve
  raporlanır).

### 0.3 Yanlışlanma şartları (önceden)
- A'da YANLIŞ oranı ≤ %20 ⇒ desen SAHIP-BOLGE kutularına özgüydü (seçim yanlılığı: o kutular zaten şüpheli bölgeler
  olarak seçilmişti), atlasın geneline taşınmaz.
- A ile B arasında fark < 15 puan ⇒ kaynaksızlık bir risk ölçütü değil; ölçüt yalnız uzunluk olur.
- Ölçülebilen < 15 / 50 ⇒ oran raporlanır ama hüküm verilmez (küçük payda).
