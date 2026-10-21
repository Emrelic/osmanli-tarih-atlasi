# RENK PAKETİ k3 (MO-MOTOR, 21 Ekim 2026) — DALDA, İTİLMEDİ

Dal: `boya-paketi-k3` (taban `origin/main` 003d79b6, commit `2a7ed0d55`). `renkler.py` tuz dosyası ⇒ KOŞU 29 bitince, **yeni boyaların tamamı tek paket** olarak itilir
(`uret_altlik.py` aynı commit'te; `denetle`, `renk_olc`, push kapısı koşu bittikten sonra). Bu belge koşu SÜRERKEN yalnız okuma/metin işiyle hazırlandı.

## 1. Yeni boyalar (33 künye · KURULUS-GERI `KUNYE-BOYA-ISTEGI-k3.md`)
Seçim: bindirilmiş L* ≥ 59,8 · altlıktan ΔE ≥ 16 · zaman örtüşen + ≤3.500 km (bölgesi bilinmeyen = yakın sayıldı, KORUMACI) mevcut `BOYALAR`'a karşı ΔE maksimize.
| kimlik | renk | | kimlik | renk | | kimlik | renk |
|---|---|---|---|---|---|---|---|
| bati-roma | #f1c1fa | | ptolemai | #5b83fd | | bati-francia | #3b873e |
| odoakar | #10a0ed | | byzantion-polis | #b8d95f | | mercia | #a383d5 |
| dogu-got | #995ace | | sparta | #178799 | | wessex | #58e9ca |
| karolenj-italya | #95e0a6 | | misir-yeni-krallik | #7f7e42 | | orta-francia-lotharingia | #f792cb |
| tigran-imp | #388e10 | | aram-sam | #fe70cf | | dogu-francia | #e7cf42 |
| frank | #26e8f6 | | nabatiye | #fbce79 | | hun-avrupa | #b56512 |
| langobard | #da3858 | | ebla-1 | #b06486 | | bohemya | #49b0db |
| atina-demokrasisi | #26eba3 | | yamhad | #d34f31 | | kiev-rusu | #fc8ea2 |
| yahuda | #fd9f86 | | hitit-imp | #7d880a | | kartaca | #64b9a6 |
| hasmoni | #6277a7 | | yeni-hitit | #6adb73 | | | |
| herodes-krallik | #8fdefa | | makedon-merisleri | #149c76 | | | |
| | | | galatya-keltleri | #9cbbff | | | |
| | | | bergama | #a26c53 | | | |

**Henüz KÜNYESİ OLMAYAN 11 kimlik boyanamadı** (önce `devletler.js` künyesi — DEVLET-LİSTESİ): roma-komunu · urusalim-kent-devleti · kudus-isyan-hukumeti · rabazli-iskenderiye · aftegin-dimask · luluogullari-halep · halep-huteyti · parisii · soissons-romen-devleti · insubres · neapolis-polis. Künye gelince aynı yöntemle eklenir (`k12`-tipi arama, ~1 dk).

⚠️ **Yeni boyalardan ΔE < 12 çıkabilecek olanlar** (korumacı karşılaştırmada en yakın komşuya fark): bohemya 9,0 · kiev-rusu 8,7 · kartaca 10,4 · dogu-francia 10,7 · orta-francia-lotharingia 10,8 · wessex 11,3 · mercia 11,5 · galatya-keltleri 11,9 · bergama 11,9.
Bölgesi bilinmeyen yüzlerce komşu "yakın" sayıldığı için bu sayılar kötümser; **gerçek komşuluk `renk_olc` ile ölçülünce** (zincirler yazıldıktan sonra) <12 çıkanlar yeniden boyanır.

## 2. Mevcut 12 renk çakışmasının (ΔE < 12) sınıflandırması
`renk_olc` (21 Ekim, 003d79b6 sonrası) "komşusuyla çakışan 12 çift" — baseline'dır (yeni değil). Sınıf: **S** = sahte (gerçekte komşu değil / örtüşme yok) · **G** = gerçek komşuluk, düzeltilmeli · **A** = kasıtlı aile (hanedan kolu).
| ΔE | çift | sınıf | gerekçe / öneri |
|---|---|---|---|
| 1,4 | büyük-selçuklu ↔ suriye-selçuklu | **A→G** | Aynı hanedanın kolu ama harita üzerinde bitişik; ΔE 1,4 sınırı okunmaz kılar → ayrı ton ver (aile içi ΔE ≥ 12 hâlâ aileye benzer kalır) |
| 6,5 | isvec-birlik-oncesi ↔ teuton-devleti | **G** | Baltık/Finlandiya-Estonya bölgesinde yan yana; düzelt |
| 7,3 | kanada ↔ portekiz | **S** | Kıtalar arası; komşuluk Voronoi artefaktı (Newfoundland/Azor yok). Kabul |
| 7,6 | ingiltere ↔ nguyen-hanedani | **S** | Britanya anakarası ↔ Vietnam; uzak. Kabul (ingiltere 11 künyeli anahtar: sömürge parçaları Asya'da komşu olabilir → `renk_olc --ayrinti` ile bak) |
| 9,2 | itilaf-emaneti ↔ litvanya | **G** | Memel/Klaipėda 1920-23 Litvanya'ya bitişik; kısa ömürlü ama gerçek → düzelt |
| 9,4 | kuzey-yuan ↔ san-devletleri | **S/G?** | Moğol Kuzey Yuan ile Shan arası Yunnan koridoru; zaman örtüşmesi künyede belirsiz → ölçülmeli |
| 10,3 | kolombiya ↔ kosta-rika | **S** | Panama arada; renk_olc komşuluğu Voronoi'den çıkarıyor. Kabul |
| 10,6 | abd ↔ yeni-zelanda | **S** | Pasifik; uzak. Kabul |
| 10,7 | çemişgezek ↔ dulkadir | **G** | Doğu Anadolu beylikleri, bitişik → düzelt |
| 10,9 | finlandiya ↔ itilaf-emaneti | **S** | Memel ile Finlandiya arasında 800+ km, Baltık. Kabul |
| 11,2 | artuklu ↔ büyük-selçuklu | **A→G** | Artuklular Selçuklu tâbisi, bitişik; ΔE 11,2 sınırda → hafif ayır |
| 11,6 | musa-celebi ↔ zeta | **G (düşük)** | Rumeli 1410-13; Edirne ↔ Zeta arası Sırp/Bosna; ΔE sınırda |

Özet: **S = 6 (kabul)** · **G = 4 (düzelt: isvec-birlik-oncesi/teuton, itilaf-emaneti, çemişgezek/dulkadir, musa-çelebi)** · **A→G = 2 (selçuklu kolları)** · belirsiz 1 (kuzey-yuan/san).
Önerilen düzeltme paketi (6 kimlik): `teuton-devleti` · `itilaf-emaneti` · `cemisgezek-beyligi` · `suriye-selcuklu` · `artuklu` · `musa-celebi` — her biri komşusuna ΔE ≥ 13 olacak şekilde, hex aramasıyla; `renk_olc` ve `uret_altlik` koşu sonrası. **Bu düzeltmeler paketin 2. commit'i olarak yazılmadı** (mevcut yayındaki renkleri değiştirir = görünür etki; Emre onayı).
Ayrıca "aynı anahtarı paylaşıp tarihi örtüşen 85 çift (ΔE 0)": `abd`/`ingiltere`/`fransa-cumhuriyet` altındaki sömürge alt-künyeleri **tasarım gereği** aynı renk (tek anahtar); ayrı bir kusur değil, bu pakette dokunulmadı.
