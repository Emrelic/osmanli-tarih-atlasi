# DEVLETLER-SLUG-IZ-1006 — künye içi kronolojide TDV biçim normalleşmesi (⑤) + gizli iz taşıması (④)

Yapan: UMIT-W51-DEVLETLER-SLUG-IZ-1006 · istek: UMIT İRTİBAT · 6 Ekim 2026
Ağaç: `C:\atlas-w51` = **origin/main `0f08fcae`** (detached). Dokunulan TEK dosya: `data/devletler.js`.
Teslim: `denetim/DEVLETLER-SLUG-IZ-1006.diff` (**UYGULANMADI**; `git apply --check` C:\atlas-umit'te `bce6c267` üstünde TEMİZ)
· satır satır karar: `denetim/DEVLETLER-SLUG-IZ-1006.tsv` (343 satır = 254 ⑤ + 89 ④)
· öngörü (ölçümden ÖNCE yazıldı): `denetim/DEVLETLER-SLUG-IZ-1006-ONGORU.md`.
Kaynak ölçüm: W38 `KUNYE-KRONO-KAYNAK-1006.md` ②③ (görevde adı `KISI-PADISAH-KOVA-1006` geçiyordu; 254/114/89
sayıları W38 raporundadır, W40 raporunda `TDV slug:` = 0 yazar). Commit YOK.

## 0. Evren yeniden sayıldı (W38'le birebir)
`window.DEVLETLER` 896 künye · 3.203 madde · kova (kisi_kova tanımı) tdv **103** · başka **898** · beyan 139 · kaynaksız **2.063**.
⑤ evreni: `kaynak` "TDV" ile başlayıp "TDV:" ile başlamayan **254** madde / 127 künye.
⚠️ Görev metnindeki "`TDV slug:` biçimli" ifadesi bu 254'ü TARİF ETMİYOR: diskte `TDV slug:` dizgisi **0**.
254'ün biçimi `TDV <slug>…` (251) ve `TDV-AM …` (3): eksik olan iki nokta.
④ evreni: kaynak DIŞI alanda TDV izi **114** madde; kaynaksız **89** / **40** künye; alan ic_not_b 84 · gun 17 · b 12 · ic_not_t 4.

## ⑤ Biçim normalleşmesi — 254 → **221 çevrildi**, 33 çevrilmedi
Çeviri: yalnız baştaki `TDV ` → `TDV: ` (metnin geri kalanı birebir korunur). Kova tdv 103 → 324.
Sınama, örneklemden ÖNCE bütün evrende otomatik yapıldı, sonra elle okundu:
1. **Canlılık** — 124 tekil slug, `ARAC-TDV-CIKARICI-1006.py` `getir` (yönlendirme izlenmez): 200 → 122 · 302 → 2.
   İki 302 (`ayrilmayi`, `maddesi`) ve 200 dönen `bu` (gönderme sayfası) metin içinden yanlış yakalanmış sözcükler,
   gerçek slug değil; hiçbir maddenin BAŞTAKİ slug'ı değiller. **Baştaki slug ölü: 0.**
2. **Doğru madde** (§4 ②) — baştaki slug'ın başlığı ve gövde uzunluğu (her biri ≥ 500 karakter) kontrol edildi; yanlış madde **0**.
3. **Yıl gövdede mi** (kaynakça HARİÇ, `tam()` gövdesi) — maddenin `t` yılı.
4. **Alıntı gövdede mi** — kaynak metnindeki «…»/"…" alıntıların 3-kelimelik dizileri (normalleştirilmiş) gövdede arandı.
   Sıfır ya da kısmî eşleşen **34** madde ELLE okundu (TDV cümlesi yanında): **33 tuttu** (alıntılar başka kelimelerle
   yazılmış ama cümle o olayı o yılla tarihliyor: vasulu, sokoto, hausa, tekrur, dahomey, asanti, bosna-isgal, oniki-ada …),
   **1 tutmadı**: `buganda#2` — TDV "I. Mutasa (1854-1884)" diyor, madde 1856.
5. **Rastgele örneklem** — kalan adaylardan **25** (tohum 51006), TDV cümlesi elle okundu: **25/25 tuttu**
   (belcika-kongo#0 · danismendli#0 · kesmir#3 · svahili-sehirleri#3 · fas#4 · saffari#1 · sani-emirligi#1 ·
   portekiz-gine#0 · ingiliz-nijerya#3 · zeyyani#3 · senusi#1 · dilmacogullari#2 · saltuklu#0 · ziyadi#1 ·
   cohor-sultanligi#4 · uygur-kaganligi#1 · portekiz-mozambik#0 · malva-sultanligi#4 · tolunogullari#2 ·
   malaka-sultanligi#3 · danismendli#4 (25 Ekim 1178) · portekiz-gine#1 · mengucuklu#3 · yao#2 · karakoyunlu#9).
6. Kaynak metninde `devralındı` geçen 4 madde (farukiler#0/#1, eyyubi-hisnikeyfa#0/#1) gövdeyle ELLE doğrulandı ve
   çevrildi: oradaki "devralındı" ALINTININ kopyalanmasıdır, tarihin değil (772/1370 · 1601 Asîrgarh · 630/1232 · 1462).

**Çevrilmeyen 33 (adıyla, TSV'de gerekçesiyle):**
| sınıf | n | maddeler |
|---|---|---|
| künye kaynağından devralınmış, madde için okunmamış | 14 | suriye-lubnan-mandasi#0 · filistin-mandasi#0,#1 · urdun-emirligi#0 · misir-sultanligi#0,#1 · misir-kralligi#0 · kesiri-sultanligi#0 · kuayti-sultanligi#0,#1 · ingiliz-sudani#0 · mekke-serifligi#0 · sani-emirligi#0 · sabah-emirligi#2 |
| slug yok / belirsiz | 7 | ekvador-cumhuriyeti#0 · venezuela-cumhuriyeti#2 · kolombiya-cumhuriyeti#0 (`TDV-AM` — hangi madde, bulunamadı) · ammarogullari#1–#4 ("TDV İslâm Ansiklopedisi, 'Ammâroğulları' maddesi"; #1'deki URL `ammarogullari--trablusgarp` 200 döner, ama bu YENİDEN YAZIM ister, çeviri değil) |
| yıl TDV gövdesinde yok | 6 | futa-callon#2 · mossi-vagadugu#2 · samudra-pasai#2 (TDV "1296-97") · harfusogullari#0 (yıl başka maddeden: canbirdi-gazali) · harfusogullari#1 (XVII. yy başı) · ingiliz-siyera-leon#0 |
| GÜN atlastan/künyeden devralınmış (§4 "atlas dayanak olamaz") | 4 | ingiliz-kuzey-amerika#2 (10 Şubat künye f:'den) · nahua-sehir-devletleri#2 (13 Ağustos künye t:'den) · sirbistan-eyaleti#3 · cerkez#0 (atlasın Kefe kırılması) |
| kaynağın kendisi "alıntılanmadı" diyor | 1 | azerbaycan-demokratik-cumhuriyeti#1 |
| yıl TDV ile tutmuyor | 1 | buganda#2 |

## ④ İz taşıması — 89 kaynaksız → **63 taşındı**, 26 taşınmadı (89'dan AZ = ölçüt gereği başarı)
Yeni alan biçimi: `kaynak:"TDV: <slug> — «<TDV gövdesinden BİREBİR izin cümlesi>»"` (+ gerekiyorsa ` — YIL (gün TDV'de yok)`
/ ` — AY (gün TDV'de yok)`). Alıntı, betik tarafından TDV gövdesinden KESİLDİ, elle yazılmadı ve `assert q in gövde` ile
doğrulandı. `ic_not_b` / `gun` / `b` alanlarına DOKUNULMADI (arşiv notu yerinde kaldı); yalnız `kaynak` EKLENDİ.
Her maddede cümle okundu ve o cümlenin O maddeyi tarihlediği kontrol edildi (§4 ⑧). Taşınan 63 · 27 künye.
- İzin gösterdiği slug ile cümlenin geldiği slug her zaman aynı değil: `imereti#1` → gurcistan ("İmeretiya ve Guriya (1804)"),
  `poni#1` → bruney (1405-1415), `kevkev#0` → gao, `lur-i-buzurg` → luristan (künye kaynağı), `papalik#1` → fransa (25 Ekim 1463).
- İki cümleli alıntı (tarih önceki cümlede, "aynı yıl/bunun üzerine/bir yıl sonra" ile bağlı): granada#3 · cavnpur-sultanligi#3 ·
  haydarabad-nizam#3 · muvahhidler#2 · berar#3.
- Hassasiyet: YIL notu hollanda#0,#2,#4,#5 (gün TDV'de yok, maddeler gün taşıyor); AY notu esrefogullari#3, cavnpur-sultanligi#1.
- `esrefogullari#2`: TDV "muhtemelen 1299 veya 1300" diyor; alıntı çekinceyi aynen taşıyor.

**Taşınmayan 26 (adıyla):**
| sınıf | n | maddeler |
|---|---|---|
| iz "TDV'de YOK / kapsamıyor / doğrulanamadı" notu | 13 | mazenderan-marasi#2 · papalik#4 · funj#1 · habesistan#7 · zeta#4 · makdisu-sultanligi#2 · yugoslavya#3 · bengal-sultanligi#1,#2 · bengal-nevabligi#1,#3 · avad#1,#2 |
| tarih yüzyıl/tahmin/atlastan türetilmiş | 9 | granada#1 (gün Britannica) · umman#0 (TDV 1615/1624, atlas f:'ye göre seçilmiş) · dacu#0 · tunciler#1 · kasim#0 · makdisu-sultanligi#0 · magindanao-sultanligi#0 · multan-langah#0 · samudra-pasai#0 |
| TDV cümlesi o maddeyi tarihlemiyor | 4 | papalik#0, #3 (Niğbolu/İnebahtı papalik maddesinde yalnız adıyla, tarihsiz) · arnavutluk-bagimsiz#2 (TDV 3 Eylül 1914 ayrılışı tarihliyor, 7 Mart tahta çıkışı değil) · **funj#3 — ÇELİŞKİ**: TDV Şâyikıyye ayaklanmasını II. Bâdî (1649-1680) dönemine koyuyor; maddenin 1770'i TDV'de başka olaydır |

## Kova — önce / sonra (künye içi, disk katmanı, 3.203 madde)
| | tdv | başka | beyan | kaynaksız |
|---|---|---|---|---|
| önce (`0f08fcae`) | 103 | 898 | 139 | 2.063 |
| sonra (diff uygulanmış) | **387** | **677** | 139 | **2.000** |
Fark: tdv +284 = ⑤ 221 + ④ 63 · başka −221 · kaynaksız −63. Sınandı: değişen madde kümesi planlanan kümeyle BİREBİR
(221 + 63, kesişim 0), `kaynak` dışında hiçbir alan değişmedi, ⑤'te her değişiklik tam olarak `TDV `→`TDV: `.
Diff: 284 satır silindi / 284 eklendi, yalnız `data/devletler.js`.

## Kapı — önce / sonra (aynı ağaçta)
- `py arac/denetle.py`: **önce 2 · sonra 2** (değişmedi). Kod 2'nin tek sebebi Değişmez 8 ÖLÇÜLEMEDİ —
  `devletler_harita.js` taze worktree'de yok (üretilmiş, gitignore'lu). Öteki bütün satırlar önce=sonra birebir.
- `py arac/durum_tablosu.py`: çıktı önce=sonra **birebir aynı**. Bu ağaçta (origin/main) künye-kronoloji ve kişi
  kaynak satırı **YOK** (`kisi_kova` diff'i `fa1dd9af` main'e inmemiş) ⇒ kişi/künye kaynak sayısı araçtan
  **ölçülemedi**; yukarıdaki kova tablosu aynı tanımla benim ölçümümdür (node + `kisi_kova` birebir kopyası).

## Öngörü → ölçüm
| | öngörü | ölçüm | |
|---|---|---|---|
| ⑤ evren | 254 ± 3 | 254 | ✓ |
| ⑤ çekinceli/olumsuz | 10-40 | 33 çevrilmedi | ✓ |
| baştaki slug ölü | %3-10 | **0** | ✗ (daha iyi) |
| yanlış madde | ≤ 5 | 0 | ✓ |
| örneklem tutma | ≥ 17/20 | 25/25 | ✓ |
| ⑤ çevrilen | 190-230 | 221 | ✓ |
| ④ evren | 114/89/40 | 114/89/40 | ✓ |
| ④ taşınabilir | 30-55 | **63** | ✗ (fazla — `ic_not_b`lerin çoğu "eski b: … (TDV x maddesi)" arşiv notuydu ve gövdede tuttu) |
| kapı önce=sonra | aynı | aynı | ✓ |

## Bulamadıklarım
- `TDV-AM` kısaltmasının hangi TDV maddesi olduğu: **bulunamadı** (3 madde; büyük ihtimalle `amerika`, doğrulanmadı).
- `kisi_kova` main'de yok ⇒ `durum_tablosu.py`den kişi/künye kaynak satırı okunamadı.

## Öneriler (hüküm koordinatörde)
1. 4 "GÜN atlastan" maddesi (§4 atlas dayanak olamaz) ayrı düzeltme ister: gün kaldırılıp `YYYY-01-01` mi yazılsın,
   yoksa gün kaynağı aransın mı — bu işin kapsamı DIŞINDA, dokunulmadı.
2. 14 "künye kaynağından devralınmış" madde ucuz bir okuma turuyla çevrilebilir (slug canlı, yalnız cümle okunmalı).
3. `funj#3` (çelişki) ve `buganda#2` (1856 TDV'de yok) veri düzeltmesi ister.
4. ammarogullari#1–#4 → `TDV: ammarogullari--trablusgarp` biçimine YENİDEN YAZILABİLİR (#1'in URL'i 200).
