# UMIT-W31-SINAV-YANETKI-1006 — dört sınav betiği canlı dosyaya yazmasın

Devir: `denetim/SINAV-ENVANTER-1006.md §5` (W27, 13a3ae93). Çalışma yeri: atılabilir
worktree `origin/main` = `a59e4b7b` (fetch `.git/objects` yazma izni yüzünden düştü;
yerel `origin/main` ref'i kullanıldı).

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi (6 Ekim 2026)

Taban (yamasız, temiz worktree, `core.autocrlf=true`, dört dosya `i/lf w/crlf`):

| betik | çıkış | `git status` yan etkisi |
|---|---|---|
| `ODAK-KAPI-SINAV.py` | 0, "geçen 5 · BAŞARISIZ 0" | ` M denetim/ODAK-TAVAN.json` (CRLF→LF, içerik farkı 0) |
| `ARAC-1783-ULKE-SINA.py` | 0 | ` M _1783_cikar.js` (gömülü mutlak yol) · ` M _1783_ulke.json` |
| `ARAC-EKO-BOLGE-BAG-SINA-0920.py` | 0 | ` M EKO-BOLGE-BAG-0920.json` |
| `ARAC-KAMERIKA-0903-taban-sina.py` | 0 | `?? denetim/_omur.json` |

Yamalı:
- (a) dördü art arda koşunca `git status --porcelain` **BOŞ** (0 satır).
- (b) her betiğin çıkış kodu ve stdout'u (yalnız çıktı-dosyası yolunu basan satır hariç)
  tabanla **AYNI**.
- (c) negatif kontrol: yamalı betikte geçici kopya yolu canlı yola geri çevrilince yan etki
  dört betikte de **geri gelir** (status ≥ 1 satır her biri için).
- Canlı tavan dosyası `ODAK-TAVAN.json` sınav boyunca bayt bayt değişmez (sha256 önce = sonra).

Tasarım (öngörü): ODAK → `odak_olc`un `KOK` ve `TAVAN_YOL`u geçici bir köke yönlendirilir
(`data/` okuma kümesi + `js/suzgec.js` + tavan kopyası); kurban ve tavan yalnız kopyada
bozulur, `git checkout` gerekmez. Rapor üreten iki betik (1783, EKO) raporu varsayılan olarak
geçici dizine yazar, canlı `denetim/` raporu yalnız açık `--yaz` bayrağıyla yeniden yazılır.
1783'ün node yardımcısı ve KAMERIKA'nın `_omur.json`u ara üründür → yalnız geçici dizin.

## 1. ÖLÇÜM — öngörü TUTTU (4/4 betik, üç sınav)

Taban (yamasız) — öngörüyle birebir: dördü çıkış 0; yan etki ` M ODAK-TAVAN.json` ·
` M _1783_cikar.js` · ` M _1783_ulke.json` · ` M EKO-BOLGE-BAG-0920.json` · `?? _omur.json`.
ODAK: "geçen 5 · BAŞARISIZ 0 · ✓ data/ temiz"; 1783: "abd YANLIŞ 5"; EKO: 20 bağ, 19 tutan,
1 kopuk; KAMERIKA: ①–④ 🟢, künye ömrü 896.

| sınav | sonuç |
|---|---|
| (a) yamalı dördü art arda → `git status --porcelain` | yalnız 4 yamalı betiğin kendisi (` M`); **yan etki 0**. `ODAK-TAVAN.json` sha256 önce = sonra |
| (b) stdout (`-> <rapor yolu>` satırı hariç) + çıkış kodu | **4/4 AYNI**, stderr 4/4 boş |
| (b') rapor içeriği | 1783 geçici rapor == HEAD `_1783_ulke.json` (EOL hariç) · EKO geçici rapor == ESKİ betiğin yazdığı (bayt aynı, EOL hariç) |
| (c) negatif kontrol | **4/4 yan etki geri geldi**: ODAK (kök canlıya) → ` M ODAK-TAVAN.json` + ` M data/kronoloji_misir.js` · 1783 (yardımcı canlıya) → ` M _1783_cikar.js` · 1783 `--yaz` → ` M _1783_ulke.json` · EKO `--yaz` → ` M EKO-BOLGE-BAG-0920.json` · KAMERIKA (ömür canlıya) → `?? _omur.json` |

Yama: `denetim/SINAV-YANETKI-1006.diff` (4 dosya, +90/−27, mutlak yol satırı 0;
`origin/main` a59e4b7b üstüne üretildi, `makine/umit` 358e2349 üstünde `apply --check` TEMİZ).

## 2. Ne değişti

- **ODAK-KAPI-SINAV** — `odak_olc.KOK` + `odak_olc.TAVAN_YOL` geçici köke çevrilir; oraya
  odak çözücüsünün okuduğu dosyalar (`odak_cozum.js`te `oku()` çağrıları: `devletler.js` ·
  `hukuki_sinirlar.js` · `kronoloji_*`/`olaylar*` · `js/suzgec.js`, ~9,8 MB) + tavan kopyalanır.
  ①② tavanı, ③ kurbanı yalnız kopyada bozar; `git checkout` kaldırıldı; `finally` modül
  global'lerini geri koyar ve geçici kökü siler. Kirli `data/` reddi KORUNDU. Kopya eksik
  kalırsa node düşer → ⓿ taban ötmüş görünür (kapalıya düşer).
- **1783-ULKE-SINA** — node yardımcısı geçici dizinde; rapor varsayılan geçici dosya,
  kayıtlı `_1783_ulke.json` yalnız `--yaz` ile.
- **EKO-BOLGE-BAG-SINA-0920** — rapor varsayılan geçici dosya, kayıtlı rapor yalnız `--yaz`.
- **KAMERIKA-0903-taban-sina** — `_omur.json` geçici dosya, okunduktan sonra silinir.

## 3. Bulunamayan / ölçülemeyen

- `git fetch origin` düştü (`.git/objects` yazma izni reddi, `C:\atlas`) — worktree yerel
  `origin/main` ref'inden (a59e4b7b) açıldı; daha yeni bir `main` varsa ölçülmedi.
- Yerleşim havuzu (`girdi.yukle`) ODAK'ta canlıdan OKUNUYOR — salt okuma, yazma yolu yok.
- Rapor üreten iki betiğin `--yaz`sız modunda `%TEMP%`'te birer rapor dosyası kalır (yolu
  basılır; okunabilsin diye kasıtlı silinmez).

## 4. Öneri (hüküm koordinatörde)

1. Yamayı `main`e indir; dört betik artık yan etkisiz ⇒ W27'nin "hızlı küme" kapı adaylığına
   (§6) yan etki engeli olmadan girebilir.
2. **`denetim/EKO-BOLGE-BAG-0920.json` BAYAT**: kayıtlı rapor `evren_madde 5910`, bugün 7056;
   satır numaraları kaymış (59 satır fark). `--yaz` ile yenilenmesi tek komut — yazmadım (rapor
   dosyası benim değil).
3. `denetim/_1783_cikar.js` artık hiçbir betik tarafından yazılmıyor/okunmuyor ve bir makinenin
   mutlak yolunu taşıyor → silinmeye aday (silmedim).
