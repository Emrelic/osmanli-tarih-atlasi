# UMIT-W7-DALGA8-1006 — KRONO-SAY sınavının yüksek riskli 5 sabiti ölçüme çevrildi (SAGLAM-1006b)

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi (2026-10-05)
- ek8'in kusur sınıfı JSON biçimli tırnaklı anahtar (`"t":`, `"duygu":`, `"yer_id":`); olaylar.js'inki `alt_kronoloji` içi adım. İkisi de dosya metninden ölçülebilir.
- Yeni kurallarla tam zincirde sınav: **67 + 5 kusur-var satırı = 72/72**; yapay madde eklenince: geçer (yeni kurallar), eski sabitler kırılır.

**Öngörü ↔ ölçüm:** kusur sınıfları ✓ (ek8 = tırnaklı anahtar; dalga 2'deki "`{` ayrı satırda" etiketim YANLIŞTI — eski regex `\s*` ile satır sonunu zaten geçer, onu durduran tırnak; etiket düzeltildi) · "72/72" ✗ → **84/84** (yapay-madde satırlarını saymamıştım) · yapay maddede geçer ✓ — ama **ilk denemede ✗** (aşağıda).

Temel: worktree `C:\atlas-w7` = origin/main **78c74b80**. Commit yok, motor tuzuna 0 dokunuş.

## 1. `KRONO-SAY-SINAV-SAGLAM-1006b.diff` (SAGLAM üstüne · LF · CR 0 · +108/−22 · yalnız `denetim/ARAC-KRONO-SAY-SINAV-1006.py`)
- 5 yüksek riskli sabit (olaylar.js madde 81 · yer_id 73 · ek8 madde 35 · duygu 8 · yer_id 16) → **dosyadan ölçülen doğru.**
- YORUM/ALT/JSON/boş-yer_id düzeltmeleri tek işlevde, **BİRLEŞİK formül**:
  `doğru = eski regex − // satırı geçişi − alt_kronoloji:[…] içi geçiş + tırnaklı anahtar geçişi (yorum ve alt dışı) − boş yer_id:""`
  Her vakada ayrıca "bu dosyada sınıf HÂLÂ var mı (>0)" sınanır — kusur kalkarsa ayrı satırda öter.
- 🔴 **Neden birleşik — sınav ilk denemede yakaladı:** önce sınıf başına tek kural yazdım (olaylar.js → yalnız ALT). Yapay-madde testi **82/84** verdi: olaylar.js'e eklenen TIRNAKLI madde ALT kuralına görünmüyordu (doğru 82, sayaç 83). Tek sınıflı kural, dosyaya yeni bir biçim girdiği gün yine kırılır ⇒ her sınıf her dosyada ölçülür. Sonra 84/84.
- **YAPAY MADDE (iki yön):** olaylar.js ve ek8'in geçici kopyasına (tempdir; `data/` değişmez) hem çıplak hem tırnaklı birer madde eklenir → ① ölçülen doğru = node sayacı (5/5 ✓: 83=83 · 75=75 · 37=37 · 10=10 · 18=18) · ② eski sabit aynı kopyada BAYATLAR (5/5 ✓: 81≠83 · 73≠75 · 35≠37 · 8≠10 · 16≠18) — sabitin kırılganlığının kanıtı.
- **Sonuç: 84/84** = eski 67'nin TAMAMI (hiçbiri düşmedi) + 5 "sınıf hâlâ var" + 2 "yapay kopya ölçülebildi" + 10 yapay satır.
- `--check`: main'e ✗ · main+1006b'ye (SAGLAM'sız) ✗ · main+1006b+SAGLAM'a İLERİ ✓ / -R ✗ · uygulanmışta -R ✓. **Sıra: 1006b → SAGLAM → SAGLAM-1006b.**
- **Tam zincir** (main → 1006b → SAGLAM → SAGLAM-1006b → JASENOVAC-BROD-1536 → YERID-IMZA → OSMAN1-YIL → BOS-YERID-1734 → BOS-YERID-1886-1892 → KAYNAK-ZAYIF-SAYIM → KAYNAK-ZAYIF-VERI → VERI-YAPISI-KAYNAK-ZAYIF): hepsi ✓; KRONO-SAY **84/84** · KAYNAK-ZAYIF **12/12** · `--sina` 9/9.

## 2. Kalan 8 sabit — neden sabit kaldı (birleşik formül bu dosyalarda ÖLÇÜLDÜ)
| Dosya · sabit | Formülün bugünkü sonucu | 30 g commit | Gerekçe |
|---|---|---|---|
| sh110 madde 0 · duygu 0 | madde **1 ≠ 0** | 0 (son 09-02) | Kusur sınıfı BLOK YORUM (`/* ÇÜRÜDÜ, UYGULANMADI */`); formül bunu ölçmüyor. Dosya bilinçli ÖLÜ: tek maddesi blok yorumla kapatılmış, 0 "dosya canlı madde taşımıyor" beyanıdır, fotoğraf değil. Biri maddeyi açarsa 0'ın ötmesi İSTENEN davranış. |
| sk105 madde 0 | (aynı sınıf) | 0 (son 09-03) | Aynı: blok yorumlu ölü dosya. |
| kamerika madde/duygu/yer_id 11 | **11 = 11** (JSON kuralıyla) | 3 (son 09-13) | Düşük risk. ⚠️ Formül bugün DOĞRU veriyor — tek satırla ölçüme çevrilebilir (maliyet ~0). Onaylanan kapsam 5 sabitti, çevirmedim; önerim: çevrilsin. |
| ek21 duygu 4 | **2 ≠ 4** | 5 (son 09-19) | Kusur sınıfı BOŞLUKLU `duygu: [` — formülde yok. Ölçüme çevirmek yeni bir sınıf kuralı ister (`duygu\s*:\s*\[` farkı). Orta-düşük risk. |
| ek22 duygu 1 | **0 ≠ 1** | 7 (son 09-14) | Aynı sınıf (boşluklu). Orta risk. |

⇒ 8'in 3'ü (sh110×2, sk105) **anlam olarak sabit** (ölü dosya beyanı); 3'ü (kamerika) **bedava çevrilebilir**; 2'si (ek21, ek22) yeni bir "boşluklu anahtar" sınıfı ister.

## 3. git status
- `C:\atlas-w7` HEAD 78c74b80 — porcelain BOŞ; teslimden sonra kaldırılıyor.
- `C:\atlas-umit`: `?? denetim/KRONO-SAY-SINAV-SAGLAM-1006b.diff` · `?? denetim/UMIT-W7-DALGA8-1006.md`.
