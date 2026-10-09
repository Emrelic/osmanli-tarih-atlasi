# SABLON-KANADA-1008 — KAMERIKA şablonunun Kanada'daki `s:abd` izi

Ağaç: `C:\atlas-sablon` · temel `origin/makine/umit` `7f63bcd9` · 9 Ekim 2026 · UMIT.
Diff: `denetim/SABLON-KANADA-1008-KOORD.diff` — **UYGULANMADI**.

## ① Öngörü (ölçümden önce yazıldı)
- KAMERIKA bir yerleşim girdi dosyasıdır; kuzey noktalarına toplu bir `→ abd 1783` zinciri basılmıştır.
- 1783 hattının kuzeyinde (Newfoundland dahil) `s:abd` taşıyan nokta sayısı: 3 bilinen + 2..8 ek ⇒ **toplam 5-11**.
- Denetim: yeni 1763 / 1867 kırılmaları 2s'yi açabilir.

## ② Ölçüm — sınıf
- **"KAMERIKA şablonu"** = `data/yerlesimler_kamerika.js` (commit `6c2e5923`, 3 Eylül 2026, 377 nokta).
  Kalıp: `<önceki> → ingiltere → abd 1783-09-03 → 1923-10-29`. Eski araç `denetim/ARAC-1783-TOPLU-KESIM.js`
  bu sınıfı komşu-çoğunluk şüphesiyle ölçmüş; Kanada'daki üç nokta yine de kalmış.
- Yöntem: `girdi.yukle()` (93 dosya) → `s:` içinde `abd` taşıyan **233** kayıt → Natural Earth
  `ne_10m_admin_0_countries` (shapely 2.1.2) ile bugünkü ülke. Regex kullanılmadı.
- `1783-09-03`te `abd`ye geçen nokta: **29** (KAMERIKA 24 · `yerlesimler_amerika.js` 5 Irokua noktası, ABD'de, doğru yaka).
- **Bugünkü Kanada'da `s:abd` taşıyan nokta: 4**, hepsi KAMERIKA:

| Nokta | Konum | Kayıttaki zincir | 1783 md.2'ye göre |
|---|---|---|---|
| St. John's (Newfoundland) | 47.56,-52.71 | ingiltere 1583 → abd 1783 | İngiliz. **HAYALET-KUNYE-1008-KOORD.diff düzeltiyor, DOKUNULMADI** |
| Kahnawake | 45.41,-73.68 | haudenosaunee 1667 → ingiltere 1777 → abd 1783 | 45. enlemin kuzeyi, St. Lawrence'ın doğusu ⇒ İngiliz |
| Sainte-Marie-au-pays-des-Hurons | 44.68,-79.75 | vendat → ingiltere 1649 → abd 1783 | Ontario-Erie-Huron gölleri hattının kuzeyi ⇒ İngiliz |
| Ossossané | 44.50,-79.93 | vendat → ingiltere 1649 → abd 1783 | aynı |

- Öngörü karşılaştırması: 5-11 nokta öngördüm, **4 çıktı (3 + St. John's)**; öngörü fazlaydı. Sebebi: eski araç
  Kanada kalıbını büyük ölçüde temizlemiş, yalnız komşu çoğunluğu kanada olmayan Huronia ve
  Montreal'in güney kıyısı kalmış.
- Aynı kalıbın Kanada DIŞINDAKİ izleri (bu diff'te YOK):
  - **Tehuantepec** (Meksika): `ingiltere 1523 → abd 1783`. HAYALET diff'i düzeltiyor.
  - 🟡 **Mound Key (Florida)**: `ingiltere 1763 → abd 1783-09-03`. 1783'te Florida İspanya'ya döndü,
    ABD'ye 1821'de geçti ⇒ **1783-1821 arası hayalet ABD**. Ölçüldü, düzeltilmedi; ayrı kalem olarak öneriyorum.
  - Michilimackinac · La Baye · Chequamegon · Prairie du Chien: 1783 hattının ABD yakası. De facto İngiliz
    garnizonu 1796'ya (Jay) kadar sürdü; komşu Detroit `ingiltere → 1796-07-11` kullanıyor ⇒ tutarsızlık.
    Sınıf ③ / yorum kararı, bu kalemin kapsamı dışında. Bildiriyorum.
  - 1783 sınırı Mississippi'de bittiği için Mississippi'nin batısında `abd 1783` alan nokta yok (ölçüldü: Prairie du Chien -91.14 doğu yakada).

## ③ Doğru sahip zinciri (diff)
Künye pencereleri (`girdi.oku_devletler`): fransa 987–1792 · ingiliz-kuzey-amerika 1763-02-10–1923-10-29 ·
kanada 1867-07-01– · haudenosaunee 1450–1777 · vendat 1281–1649-03-16. Hiçbiri aşılmıyor.

- **Kahnawake:** `haudenosaunee 1667→1777` (DOKUNULMADI) · `ingiliz-kuzey-amerika 1777→1867-07-01` · `kanada 1867-07-01→1923-10-29`.
  Yalnız yanlış kimlikler değişti, 1777 kesimi korundu. Bu en dar düzeltme.
- **Sainte-Marie · Ossossané:** `vendat →1649-03-16` (dokunulmadı) · `fransa 1649-03-16→1763-02-10` ·
  `ingiliz-kuzey-amerika 1763-02-10→1867-07-01` · `kanada 1867-07-01→1923-10-29`.
- **Kaynak:** Paris Antlaşması, 3 Eylül 1783, md.2 (Avalon Project, Yale; GET 200, metin okundu).
  Okunan hat: Connecticut nehri → *"along said latitude until it strikes the river Iroquois or Cataraquy"*
  → Ontario, Erie ve Huron göllerinin ortası.
  1763-02-10 ve 1867-07-01 **gün komşudan** (D207 beyanı `not:`a yazıldı): Montreal (Ville-Marie) ·
  York (Toronto) · Fort Frontenac. Aynı süreçler, 13-275 km.
- **Bulunamadı:**
  - Canadian Encyclopedia: Kahnawake 404, Huronia sayfası gövdesiz (yalnız menü).
  - Britannica: 403. EB1911 Caughnawaga: 404.
  - DCB okunamadı.
  - Huronia'nın 1649-1763 arası sahibi için yer düzeyinde kaynak cümlesi bulunamadı. `fransa` (Yeni
    Fransa iddiası, komşu konvansiyonu) seçildi. Alternatif `ojibwe`: Anishinaabe ~1690'larda bölgeye
    yerleşti, ama bu da kaynaksız. ⇒ Koordinatör kararı.
- `kaynak:` alanları `"bulunamadı"` olarak kaldı (önceden de öyleydi). Dayanak `not:`a eklendi.
- **D206 (iki uç):**
  - 1649-1763 Huronia peteği `ingiltere` (hayalet) yerine `fransa` olur; komşu York 1750'den beri fransa.
  - 1783-1923 ABD peteği Georgian Bay ve Montreal güneyinden çekilir; komşular ingiliz-kuzey-amerika / kanada.
  - ⇒ Yeni delik ya da hayalet AÇMIYOR. Değişmez 1 sayıları önce/sonra aynı.

## ④ Denetim (kendi ağacımda uygula → ölç → geri al)
| | Önce | Sonra |
|---|---|---|
| Çıkış kodu | **2** | **2** |
| Değişmez 2s | 1722 · 185 AÇIK (tavan 185) | aynı |
| 4c (ölümü aşan) | 127 | 127 |
| **2sk yalnız-taraf** | 2250 (tavan 2250) | **2253 ⚠️ tavan aşıldı (+3)** |
| öteki satırlar | — | değişmedi |

- Çıkış kodu 2'nin sebebi diffle ilgisiz: Değişmez 8 ÖLÇÜLEMEDİ (`devletler_harita.js` taze ağaçta yok, gitignore'lu).
- 2sk +3: yeni 1763-02-10 / 1867-07-01 kırılmaları YER değil yalnız TARAF ile kapanıyor. Bu ihlal değil, borç
  (hükmü değiştirmiyor). Tavanı ben YAZMADIM (§3.4 ④).
- Geri alındı: `git checkout -- data/yerlesimler_kamerika.js`. `git apply --check` temiz. CR 0.
  HAYALET-KUNYE-1008-KOORD + EK-KOORD diff'leriyle **birlikte** `--check` temiz, çakışma yok.

## İstek
1. Diff'i inişe al. 2sk tavanı aynı commit'te 2250 → 2253 (§3.4 ②). İstenirse 1763 ve 1867 kronoloji
   maddelerine üç yer anılır, böylece tavan oynamaz.
2. Huronia 1649-1763 için `fransa` mı `ojibwe` mu: koordinatör kararı.
3. Mound Key (Florida 1783-1821 İspanya) ayrı kalem olarak açılsın.
