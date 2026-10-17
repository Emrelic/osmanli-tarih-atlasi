# KRONO-ONCE1281-1010-B — Değişmez 2s, 1204-1216 açık birimleri (B kolu)

**Taban:** `f0b6fd50` (origin/main, worktree `C:\atlas-umit-krB`, detached).
İş sürerken origin/main `616f7066`e ilerledi; aradaki 4 commit YALNIZ `denetim/` +
`oturumlar/` dosyalarına dokunuyor (`git diff --stat f0b6fd50 616f7066` — `data/`,
`arac/`, `index.html` değişikliği 0) ⇒ ölçüm ve diff bu farktan etkilenmez.
**Model:** opus (TDV okuma + gün hükmü).

🔴 **Bu sayaca 3 diff dokunuyor, tek başına ölçüm yapmadım.** Aşağıda yalnız KENDİ
birimlerimin kapanışını ADIYLA gösteriyorum; toplam sayı/tavan ÖNERMİYORUM.

## Teslim
- `C:\atlas-umit\denetim\KRONO-ONCE1281-1010-B.diff` — LF, BOM yok, CR 0; temiz
  `f0b6fd50` ağacında `git apply --check -v` ✓ (iki dosya).
- **YENİ DOSYALAR:** `data/olaylar_once1281_b.js` (`window.OLAYLAR_ONCE1281_B`, 5 madde).
- **DEĞİŞEN:** `index.html` +1 satır (1285'ten sonra, `kronoloji_cok_once1281_afrika.js`
  satırının altına `<script src="data/olaylar_once1281_b.js?v=r11995">`).
- ⚠️ **Çakışma uyarısı (A/C kolları):** yeni dosya ayrı ad alanında, çakışmaz. AMA
  `index.html`de aynı bölgeye satır ekleyen bir kardeş kol varsa hunk çakışır —
  satır elle sıralanır, içerik çakışması değildir. Paketlenmiş (`paket_*.js`) hiçbir
  dosyaya dokunmadım ⇒ paket bayatlığı yok.

## Öngörü (ölçümden önce) → sonuç
| öngörü | sonuç |
|---|---|
| 4 birim D2 evreninde ±30 günde 0 madde | ✓ TUTTU (0/0/0/0) |
| maddeler kuyrukta VAR | KISMEN — 2'si gün-tam (1204-04-13, 1216-01-22), 1207 yalnız YIL (63 gün uzak), Girit 1204-08-12 kuyrukta YOK |
| Yol 1 dört birimi kapatır, başka birim açmaz | ✓ TUTTU |
| mükerrer 0 değişir | ✗ İLK DENEMEDE TUTMADI (95→96), düzeltildi → 95 (aşağıda) |

## Birim birim — kaynak (TDV, 10 Ekim 2026 GET 200, gövde okundu)
| birim | yerleşim (eski→yeni) | madde | TDV slug · cümle |
|---|---|---|---|
| **1204-04-13** | İstanbul bizans→latin-imp. · Gelibolu →latin-imp. · İznik bizans→iznik-imp. · Manisa →iznik-imp. | ① "IV. Haçlı Seferi İstanbul'u zaptetti; Latin İmparatorluğu kuruldu" (yer_id İstanbul, gövdede Gelibolu) ② "I. Theodoros Laskaris İznik Bizans Devleti'ni kurdu" (yer_id İznik, gövdede Manisa) | `haclilar`: "…bir hafta sonraki saldırıda şehir düştü (13 Nisan 1204)." · `istanbul`: "Bunun üzerine Haçlılar şehri zaptettiler (13 Nisan 1204)." · `gelibolu`/`manisa`/`iznik`: **yalnız 1204 YILI** ⇒ ② "gün komşudan: İstanbul'un düşüşü · TDV haclilar (alt sınır)" — D207 şartları: kaynak gün vermiyor, aynı süreç, gün kaynağı doğrudan TDV (zincir yok), kayda yazıldı |
| **1204-08-12** | Girit (Resmo) →venedik | "Montferrat Markisi Boniface Girit'i Venediklilere bıraktı" (yer_id Girit (Resmo)) | `girit`: "Marki Boniface, imparatorun iznini aldıktan sonra 12 Ağustos 1204’te yapılan bir anlaşma ile Girit’i 100.000 gümüş karşılığında Venedikliler’e bıraktı." |
| **1207-03-05** | Antalya →selcuklu | "Anadolu Selçuklu Sultanı I. Gıyâseddin Keyhusrev Antalya'yı fethetti" | `antalya`: "Nihayet 5 Mart 1207’de Latin idaresinden memnun olmayan Rumlar’ın da desteği ile fethi gerçekleştirdi." (öncesi Aldobrandini — künyesi yok, haritada boyanmaz; maddede anlatıldı) |
| **1216-01-22** | Antalya kibris-krallik→selcuklu | "I. İzzeddin Keykâvus Antalya'yı Kıbrıslılardan geri aldı" | `antalya`: "…Antalya 1212’de Kıbrıslılar’ın eline geçti; fakat 22 Ocak 1216’da İzzeddin Keykâvus tarafından yeniden fethedilerek valiliği tekrar Mübârizüddin Ertokuş’a verildi." |

D211 tuzakları: `izzeddin-keykavus-i`, `giyaseddin-keyhusrev-i`, `latin-imparatorlugu`
slug'ları **302 (ölü)** — kullanılmadı; D217 uyarınca YER maddeleri (istanbul, gelibolu,
manisa, iznik, girit, antalya) + `haclilar` okundu. Her rakamın cümlesi yukarıda: 1204
yılını taşıyan gelibolu/manisa/iznik cümleleri ZAPTI değil oranın Latin/İznik'e geçişini
tarihliyor; gün yalnız haclilar/istanbul'da.

## Kuyruk eşleri (ölçüldü, dosya:satır) — Değişmez 2 evreninde DEĞİL
- 1204-04-13 İstanbul'un zaptı: `kronoloji_atina_dukaligi.js:16` · `kronoloji_naksa_dukaligi.js:11`
  (her ikisi `paket_12.js`te). `kronoloji_cok_once1281_anadolu.js:1796` aynı gün ama
  **Epir Despotluğu** (Arta) — bu birimi kapatmaz.
- 1207: `kronoloji_cok_once1281_anadolu.js:1844` — **1207-01-01 (yıl)**, 63 gün uzak ⇒ evrene girse de kapatmaz.
- 1216-01-22: `kronoloji_anadolu.js:681` (aynı gün, aynı olay).
- 1204-08-12 Girit: kuyrukta **bulunamadı** (once1281_* yedi dosya + kronoloji_anadolu tarandı).
- Mükerrer kapısı (`mukerrer_maddeler(O)`) YALNIZ D2 evrenini tarar ⇒ olaylar×kuyruk
  çifti kapıda görünmez. Kuyruk maddeleri `cokTarafliKronolojiEkle` ile künye
  kronolojisine, OLAYLAR ana kronolojiye bağlanır — farklı paneller.

## Yol 1 — iki yönlü ölçüm (`PYTHONHASHSEED=0 py arac/denetle.py --ayrinti`)
| soru | ÖNCE (f0b6fd50) | SONRA (+diff) |
|---|---|---|
| ① 2s AÇIK — benim 4 birimim | 1204-04-13 (4) · 1204-08-12 · 1207-03-05 · 1216-01-22 **AÇIK** | **dördü de KAPALI** (raporun açık listesinde yoklar) |
| 2s kapanış sınıfı | YER 2122 · TARAF 2115 | YER **2129** (+7 = İstanbul, Gelibolu, İznik, Manisa, Resmo, Antalya×2) · TARAF 2115 |
| ② başka 2s birimi açıldı mı | — | **0** (açık listenin kalan 8 eski birimi aynı; yalnız "en yakın madde" metni değişti) |
| Değişmez 2 (d/v) | 628 kırılma · 0 açık | aynı |
| 2i | 171 · 1 açık | aynı |
| 2t kırılmasız madde | 13 | 13 |
| mükerrer (rapor) | 95 | **95** |
| odak (`odak_olc.py`) | — | çözülmeyen odak atfı **0** |
| YIL-TEMSİLÎ | 228 | 228 |
| çıkış kodu | 2 | 2 — **aynı sebep:** Değişmez 8 ÖLÇÜLEMEDİ (`devletler_harita.js` taze ağaçta yok, gitignore'lu çıktı). Benim değişikliğimden bağımsız. |

🔴 **Mükerrer vakası (ölçüldü, düzeltildi):** ilk sürümde ② maddenin başlığı "İznik
İmparatorluğu'nu kurdu" idi ⇒ `_kisiler_kumesi` başlıktan büyük harfli kelimeyi kişi
sayıyor, aynı günkü "Latin İmparatorluğu" ile `[kişi!impara]` sahte çifti kurdu
(95→96, ✗, çıkış 1). İstisna (`BILINEN_AYRI`) eklemek yerine başlık TDV iznik'in kendi
adlandırmasına çevrildi ("İznik Bizans Devleti") → 95. Kapı kusuru değil ama not:
"X İmparatorluğu/Krallığı" kalıbı aynı gün iki maddede bu sahte çifti üretir.

## Yol 2 — ÖNERİ DEĞİL, ölçüm (uygulanmadı; hüküm koordinatörde)
Taban (benim dosyam çıkarılarak) üzerinde `olaylari_yukle()` + kuyruk dosyaları:
| senaryo | madde | 2s AÇIK | kapanan (12 Z6 biriminden) | ham mükerrer çift |
|---|---|---|---|---|
| taban | 2223 | 193 | — | 182 |
| **Yol 1 (bu diff)** | 2228 | **189** | 1204-04-13 · 1204-08-12 · 1207-03-05 · 1216-01-22 | 182 (+0) |
| Yol 2a: + `kronoloji_cok_once1281_*` (7 dosya, 964 madde) | 3187 | 191 | 1097-06-19 · 1258-02-10 | 271 (**+89**) |
| Yol 2b: + 2a + `kronoloji_anadolu.js` (282) | 3469 | 189 | 1084-12-12 · 1097-06-19 · 1216-01-22 · 1258-02-10 | 340 (**+158**) |
(ham çift = `mukerrer_maddeler` dönüşü; rapordaki 95 bunun kademe/istisna süzülmüş hâli.)
Açılan birim her senaryoda 0.
⇒ **Yol 2 bu borcu kapatmıyor:** 12 birimin en çok 4'ünü kapatıyor (B'nin 4'ünden
yalnız 1216'yı), çünkü kuyruk maddelerinin çoğu YIL damgalı (`YYYY-01-01`) ya da
başka olayı anlatıyor; buna karşılık mükerrer evrenine +89/+158 ham çift sokuyor.
Önerim: **Yol 1**, Yol 2 yok.

## ölçtüm · bulamadım · istiyorum
- **ölçtüm:** 4 birimin dördü Yol 1 ile adıyla kapandı, 0 yeni açık (2s/2/2i/2t/mükerrer/odak);
  Yol 2'nin etkisi yukarıda.
- **bulamadım:** Girit 1204-08-12 için kuyrukta madde yok · 1204'te Gelibolu/Manisa/İznik
  geçişinin GÜNÜ TDV'de yok (yıl) — gün haclilar'dan komşu kuralıyla, beyanlı ·
  Antalya'nın 1207 öncesi sahibi (Aldobrandini) künyesi yok.
- **istiyorum:** diff'in koordinatörce A/C ile birlikte ölçülüp indirilmesi (tavan o
  birleşik ölçümle). `index.html` hunk'ı kardeş kollarla çakışırsa satır sırası önemsiz.
