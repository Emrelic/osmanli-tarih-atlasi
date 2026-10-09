# UMIT-W52b — KRONO-1422-KATALAN yeniden üretim (`origin/makine/umit` 47290f11 üstünde)

Diff: `denetim/KRONO-1422-KATALAN-1006b.diff` — UYGULANMADI · `git apply --check` 47290f11'de temiz ·
CR 0 · 4 dosya, +20 −12. Kaynak ölçümü değişmedi: `KRONO-1422-KATALAN-1006.md` (Kushch 2017 · GEC ·
Doğan 2019 · CHR 2020). Bu not yalnız çakışmanın çözümünü anlatır.

## 1. KRONO-TARIH zincirinin bu satırlara yazdığı (0f08fcae → 47290f11)
| dosya | onların değişikliği | aynı olay mı? | çelişki mi? |
|---|---|---|---|
| `kronoloji_bizans.js` 1422 maddesi | **yalnız `kaynak:`** — gün 06-08 kaldı; alıntı: TDV `murad-ii` "II. Murad bunun arkasından Bizans üzerine yürüdü (Receb 825 / Haziran 1422). Elli günden fazla süren kuşatma sonuç vermedi." + beyan: "kullanılan gün 06-08 KAYNAKSIZ, değişmedi (akademik kaynak turu bekliyor)" + 1 Receb 825 ≈ 21 Haziran notu | evet, aynı kuşatma | **HAYIR.** Bunu kaynak farkı olarak değil, onların açık bıraktığı sorunun cevabı olarak gördüm. Zincir günü kaynaksız beyan edip akademik tura bırakmış; W52 o turdur. Birleştirildi |
| `kronoloji_katalan.js:13` | yalnız `kaynak:` — "devletler.js künye kronolojisi" atfı kaldırıldı (D207); künyedeki 1303-01-01 maddesi mükerrer olarak **silindi** (KRONO-CELISKI-1006 §2 #26); "TDV kapsamıyor" eklendi | evet | **HAYIR**, yalnız biçim/kaynak farkı. Birleştirildi; atfın kaldırıldığına ve maddenin silindiğine dair not korundu |

**Receb notu ile Kushch çelişiyor mu (§4 ⑧)?** Hayır. `murad-ii` cümlesi sultanın yürüyüşünü
tarihliyor ("Bizans üzerine yürüdü"). Kushch: "турецкие отряды под командованием визиря Михалбея 10 июня
подошли к городу, 20 июня к ним присоединился султан Мурад". 1 Receb 825 ≈ 21 Haziran, yani sultanın
katıldığı güne düşüyor; 10 Haziran ise öncü kuvvetin gelişi. İki kayıt farklı alt olayları tarihliyor.
"Çelişki değil" hükmü bu yüzden bizans maddesinin `ic_not_gun` alanına yazıldı.

**"TDV kapsamıyor" ifadesi düşürüldü:** TDV `bizans` Katalanları yıl düzeyinde anıyor: "Bizans'ın
yardımına koştu (1303)". Bu, 6 Ekim'de çekilen gövdede okundu.

## 2. Diff içeriği (birleştirilmiş)
- `kronoloji_bizans.js`
  - 1422: 06-08 → **06-10**. `kaynak:` alanı Kushch + `bizans`·`istanbul` + onların `murad-ii` alıntısıyla (aynen korundu) yazıldı. `ic_not_gun` TDV'nin üç değerini, kapanan MGGP-NOT beyanını ve Receb hükmünü taşıyor. Başlık yorumları (§①, §X) güncellendi.
  - 🆕 **Üçüncü Katalan maddesi bulundu ve kapsandı:** `:138` "Katalan Kumpanyası hizmete alındı" `1303-01-01` · `kaynak:"el-kitabi"`. Aynı olay, aynı dosya (kilidim) ⇒ **1303-09-01 + `kesinlik:"ay"`**, kaynak GEC + Doğan + TDV yılı. Dizi sırası bozulmadı (1302-07-27 → 1303-09 → 1305-04-30).
- `kronoloji_katalan.js:13` — `kesinlik:"ay"` · kaynak GEC + Doğan + TDV yılı. Setton okunmadığı için dayanak sayılmadı. Onların iki notu `ic_not_gun`da korundu.
- `olaylar_ek.js:117` — gün 06-10 (değişmedi). Kaynak `istanbul` → Kushch; o madde 15 Haziran diyor. `gun:` "10 Haziran - 6 Eylül 1422".
- `olaylar_p0049.js:30` — 1303-01-01 → **1303-09-01** + `kesinlik:"ay"` · `gun:"Eylül 1303"`. Bu dosyada 0f08fcae → 47290f11 arasında değişiklik yok.

## 3. `devletler.js:998` önerisi — DÜŞTÜ, ayrı diff YOK
47290f11'de Katalan 1303 künye satırı **yok**. KRONO-TARIH zinciri onu mükerrer olarak sildi
(KRONO-CELISKI-1006 §2 #26). `devletler.js`te kalan `1303-01-01` tek satır Halacî/Çitor
(`:5604`), ilgisiz. ⇒ Yazılacak ayrı diff yok.

## 4. Denetim (`C:\atlas-w52`, 47290f11)
| | önce | sonra |
|---|---|---|
| çıkış kodu | 2 | 2 |
| sebep | Değişmez 8 ÖLÇÜLEMEDİ (`devletler_harita.js` yok) | aynı |
| D2 / 2s | 623·0 açık / 1720·187 açık | aynı |
| tek fark | `yerlesimler_asya.js` 250 MADDESİZ | **249** |
