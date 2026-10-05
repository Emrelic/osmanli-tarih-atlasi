# UMIT-W7-DURUM-1006 — durum_tablosu.py vefat_id sayımı

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi (2026-10-05)
- Düzeltmeden sonra vefat_id: **27**.
- Öteki üç metin sayımı (madde · duygu · yer_id): üçü de YAPISAL olarak aynı kusuru taşır (metin regex'i, yorum ayırt etmez); bugün SAYIYI GERÇEKTEN şişiren: **2** (yer_id ve duygu — yorumlarda alan adı geçer; madde regex'i `{ t:"YYYY` kalıbı yorumda nadir).

**Öngörü ↔ ölçüm:** vefat_id 27 ✓ · "öteki üçten 2'si" ✗ — ölçüm: **üçü de** sayıyı yanlış veriyor, ve kusur tek yönlü (yorum) DEĞİL, İKİ yönlü.

Temel: worktree `C:\atlas-w7` = origin/main **fc3809758ae0b56e6b6ea19dd81cf98f5c71bbdf**. `--yaz` koşturulmadı, commit yok, worktree sonunda temiz (yama geri alındı).

## 1. Gerçek değer nasıl ölçüldü
`data/olaylar*.js` (75 dosya) node'da tarayıcı gibi `eval` edildi, `window.*` dizilerinin ÜST DÜZEY elemanları sayıldı
(betik scratchpad `gercek.js`). Gerçek: **1768 madde · 1418 duygu · 1633 yer_id · 27 vefat_id.**

## 2. ÖNCE / SONRA (`py arac/durum_tablosu.py`, çıkış 0 / 0)
```
ÖNCE  | Kronoloji | **1774** madde · 1398 duygu etiketli · 1641 `yer_id` · 28 `vefat_id` |
SONRA | Kronoloji | **1774** madde · 1398 duygu etiketli · 1641 `yer_id` · 27 `vefat_id` |
```
`diff once.txt sonra.txt` → YALNIZ bu satır, yalnız vefat_id (28→27). Başka satır değişmedi.
Dosya bazında yeni sayım = node gerçeği (75/75 dosya, fark yok).

## 3. Yama — `denetim/DURUM-TABLOSU-VEFAT-1006.diff` (LF, 46+/1−, yalnız `arac/durum_tablosu.py`)
- Yeni `_kod_iskeleti(js)`: `//` ve `/* */` yorumlarını DİZGE FARKINDA atar (`denetle.py _yorumsuz` yöntemi; import edilmedi —
  stdout sarmalayıcı çakışması, denetle.py'nin kendi notu), dizge içeriğini `""` yapar; içeriği salt tanımlayıcı olan
  dizge (JSON anahtarı `"vefat_id":`) tırnaksız kalır.
- `vefat_id` sayımı: `(?<![\w$])vefat_id\s*:` iskelet üzerinde. Öteki üç sayıma dokunulmadı; satır üstüne uyarı yorumu kondu.
- `git apply --check`: temiz origin/main'de İLERİ ✓ (geri ✗) · uygulanmış ağaçta GERİ ✓ (ileri ✗).
- **Sınav, iki yön (9/9):** negatif — `// vefat_id:` · `/* {vefat_id:} */` · `d:"bkz vefat_id: yok"` · `d:"a \" vefat_id: b"` · `eski_vefat_id:` → 0;
  pozitif — `{vefat_id:"x"}` · `{"vefat_id": "x"}` · URL'li dizge + satır sonu yorum · `'Osman\'ın'` kaçışlı dizge → 1.
  ESKİ regex ilk üç negatifte 1/1/1 sayıyor (kusuru gösteriyor). (Bir ilk deneme bozuk girdiyle — kaçışsız `'Osman'ın'` — 0 verdi; girdi geçersiz JS'ti, düzeltilip yeniden koşuldu.)

## 4. Öteki metin sayımları — AYNI KUSUR VAR (yalnız öneri, düzeltilmedi)
| Sayım | ARAÇ | GERÇEK | Fark | Üyelik (dosya: araç → gerçek) |
|---|---|---|---|---|
| madde `\{\s*t:\s*"YYYY` | 1774 | 1768 | +6 net | FAZLA: `olaylar.js` 110→81 (**29 iç içe `alt_kronoloji`** alt maddesi: 1453-05-29 ×14, 1915-03-18 ×15) · `ok106` 8→7 (yorum, :43) · `sh110` 1→0 · `sk105` 1→0 (ikisi `/* ÇÜRÜDÜ, UYGULANMADI */` blok yorumu). EKSİK: `ek8` 20→35 (`{` ayrı satırda, regex kaçırıyor) · `kamerika` 0→11 (JSON biçimi `"t": "…"`) |
| duygu `duygu:\[` | 1398 | 1418 | −20 net | EKSİK: `ek21` 2→4 · `ek22` 0→1 (`duygu: [` boşluklu) · `ek8` 0→8 · `kamerika` 0→11 (JSON). FAZLA: `sh110` · `sk105` +1/+1 (blok yorum) |
| yer_id `yer_id:` | 1641 | 1633 | +8 net | FAZLA: `olaylar.js` 102→73 (29 `alt_kronoloji`) · `ek5` 390→389 (yorum :340) · `ok106` 9→7 (yorum :76,:79) · `sh110`/`sk105` +1/+1. EKSİK: `ek8` 1→16 · `kamerika` 0→11 (JSON `"yer_id":`) |

⇒ Üç sayımda da **iki ters kusur birbirini kısmen siliyor** — net fark küçük göründüğü için fark edilmemiş (madde: 32 fazla − 26 eksik = +6 · duygu: 2 fazla − 22 eksik = −20 · yer_id: 34 fazla − 26 eksik = +8). Bu "makul görünen yanlış sayı" ailesidir.
- `_kod_iskeleti` aynı yöntemle denendi: **duygu 1418 = gerçek (75/75)** · **yer_id 1662**, tek fark `olaylar.js` 102→73 = iç içe `alt_kronoloji`.
  ⇒ yorum + biçim kusurunu iskelet çözüyor; iç içe alt madde ayrı bir **EVREN sorusu** (alt_kronoloji maddesi "madde" sayılır mı?) — hüküm sizin.
- madde sayımı iskeletle çözülmez (regex dizge içeriğine, `t:` değerine bakıyor); öneri: node ile gerçek eleman sayımı ya da `{` / anahtar biçiminden bağımsız ayrıştırma.

## 5. Bulunamayan
- §1.5'in yazıldığı andaki 1767 madde ile bugünkü 1774/1768 arasındaki farkın kökeni ölçülmedi (kapsam dışı).
