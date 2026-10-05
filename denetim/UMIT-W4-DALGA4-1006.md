# UMIT-W4-DALGA4-1006 — OSMAN-ORHAN-DEVIR-1006b (1006 + osman1 saltanat_yil çelişki beyanı)

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi
- 1006b, 1006'nın üstüne yalnız osman1 `ic_not_saltanat_yil` METNİNİ değiştirir ⇒ hunk sayısı 4, değer alanları (to/from/saltanat_yil) 1006 ile birebir.
- `denetle.py` ve `odak_olc.py`: yeni UYARI **0** — `BILINEN_ALANLAR` `girdi.py`de ve yalnız `GIRDI_DOSYALARI`na (yerleşim) uygulanır, `padisahlar.js` o evrende değil (W6'nın tuzağı `yerlesimler_ek26.js`teydi). Çıktılar ÖNCE/SONRA birebir.
- Zincir: boşluk 1 (mehmed1→murad2) · çakışma 0 · ters 0 — dalga 3 ile aynı.
- Sınama: tek başına ileri ✓ / -R ✗ · ELLE→OSMAN1→1006b ✓.

## 0.1 Öngörü tuttu mu — HEPSİ TUTTU
4 hunk · yeni UYARI 0 · zincir 1/0/0 · iki sıra temiz.

Temel: `origin/main` = `3d89e4c4b6726722435a52dd5306203e7abc44b4`.
⚠️ Ağaç `git -C C:\atlas …` ile DEĞİL, dalga 1-3'teki gibi `C:\atlas-umit`ten kuruldu (`-c safe.directory`): dalga 1 şartnamesi "C:\atlas'a DOKUNMA (yarım reset'te)" diyordu; worktree eklemek C:\atlas\.git'e yazar. Sonuç aynı (origin/main'den detached). Koşu 20'nin motor tuzu dosyalarına dokunulmadı.

## 1. İçerik — 1006 + tek fark
1006'nın 4 hunk'ı aynen (to/from 1324-03, tahta metni, saltanat_yil 25/38, ic_not_to/ic_not_from/ic_not_tahta/ic_not_saltanat_yil). Fark yalnız **osman1 `ic_not_saltanat_yil`** METNİ: istenen metin başa, 1006'nın notu ` ‖ ` ile arkaya ("aynen kalır" + "ek olarak").
- Alan adı: `ic_not_saltanat_yil` — yeni ad icat edilmedi, 1006'nın (kabul edilen) alanı; `ic_not_<alan>` deseni `arac/ic_not_uygula.py`nin kuralı, padisahlar.js'te 9 ayrı `ic_not_*` alanı zaten var.
- 🔴 **BİREBİR'den TEK sapma — slug:** istenen metin "TDV \`osman-gazi\`" diyordu; `osman-gazi` **ölü slug (HTTP 302 → /arama/osman-gazi, dalga 2 ve 3'te ölçüldü)**, "yirmi yedi yıl" cümlesi `osman-i` gövdesinde. Ölü slug'ı kaynak diye yazmak §4 TDV tuzağı ①. ⇒ `osman-i` yazıldı. Gerisi harfi harfine. İstenirse tek kelimelik değişiklik.
- ⚠️ Not (dokunulmadı): TDV cümlesi "Osmanlı rivayetine göre … yirmi yedi yıl hükümdarlık yapmıştı" — yani 27'yi TDV kendi hükmü olarak değil RİVAYET olarak aktarıyor; arkadaki 1006 notu bunu söylüyor.

## 2. Uygulanmış ağaçta DEĞERLER (ELLE-VERI → OSMAN1-YIL → 1006b uygulandıktan sonra, node ile `PADISAHLAR` yüklenip TEK TEK okundu)
```
osman1.to              = 1324-03
orhan.from             = 1324-03
osman1.saltanat_yil    = 25
orhan.saltanat_yil     = 38
osman1.olum            = 1324
orhan.tahta            = 1324-03 (Rebîülevvel 724 — TDV orhan: "Mart 1324")
osman1.ic_not_saltanat_yil =
  TDV `osman-i` "yirmi yedi yıl" der; bu süre ~1297 tahta çıkışı gerektirir, kayıt "1299 (dolayı)" diyor — ÇELİŞKİ BEYANLI, çözülmedi. `saltanat_yil` türetilmiş alandır (ölçüldü: eski 27 = 1326 − 1299), `to:` düzeltilince 25'tir. ‖ eski: 27 — TDV osman-i "Osmanlı rivayetine göre … yirmi yedi yıl hükümdarlık yapmıştı" (RİVAYET sayısı). Dosya saltanat_yil'ı kaydın kendi from/to'sundan yazar (P3 kuralı): 1299-01 → 1324-03 = 25,2. TDV künyesi (1302-1324) ile 22 olurdu; from:1299-01 bu yamada DEĞİŞMEDİ
```

## 3. Sınav
| | Sonuç |
|---|---|
| LF / CR | 0 CR · 2499 bayt · 4 hunk · `-U1` (gerekçe dalga 3 §3) |
| origin/main'e karşı | ileri ✓ · -R ✗ |
| ELLE-VERI → OSMAN1-YIL → 1006b | üçü uygulandı ✓ · 1006b için -R ✗ (uygulanmamışken) |
| 1006 + 1006b birlikte | **reddedilir** ("patch failed: data/padisahlar.js:3") — beklenen, 1006b yerine geçer |
| `node --check` | padisahlar · olaylar_ek5 · savaslar · seferler_p0037 temiz |
| `git diff --check` | temiz |
| Zincir (41 kayıt) | boşluk 1 (mehmed1 1421-05 → murad2 1421-06, bağımsız) · çakışma 0 · ters 0 — dalga 3 ile AYNI |
| `denetle.py` ÖNCE/SONRA | çıkış 2 / 2 (yamadan bağımsız). Sıra-bağımsız fark TEK satır: zayıf ölçüt 109 → 110 = OSMAN1-YIL'ın bilinen etkisi (Akyazı ↔ Osman vefatı aynı gün, dalga 2 §3) — 1006b'den değil |
| `odak_olc.py` ÖNCE/SONRA | çıkış 0 / 0 · çıktı BİREBİR aynı |
| Yeni UYARI | **0**. İki araçta da tek UYARI satırı ÖNCE de vardı: `'dogrulanmadi' BILINEN_ALANLAR'da yok — yerlesimler_ek29.js` (bağımsız, mevcut). `BILINEN_ALANLAR` yalnız yerleşim girdi dosyalarına uygulanır; padisahlar.js o evrende değil. |

Ağaç temiz bırakıldı (4 dosya checkout, kopyalanan iki üretim çıktısı silindi); `C:\atlas-w4` yerinde.
