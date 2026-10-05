# UMIT-W11-TUR-1006 — `kisiler.js` `tur` değerleri · `edigu` için karşılık var mı

Oturum: UMIT-W11-EDIGU-MUKERRER-1006 · 5 Ekim 2026 · YALNIZ ÖLÇÜM, diff yok (`kisiler.js` W16'nın).
Ağaç: `C:\atlas-w11` = `origin/main` `ae2e6bbd`.

## 1. TAM liste (`grep -o 'tur:"…"' data/kisiler.js`, toplam 288 = 288 kayıt)
| tur | sayı | `app.js` dizin etiketi (`TUR_ADI`, `:9125`) |
|---|---|---|
| `yabanci-hukumdar` | 168 | Yabancı Hükümdarlar |
| `alim` | 24 | Âlimler |
| `sadrazam` | 23 | Sadrazamlar |
| `komutan` | 20 | Komutanlar |
| `yabanci-komutan` | 13 | Yabancı Komutanlar |
| `siyasi` | 13 | Siyasî Figürler |
| `vezir-pasa` | 9 | Vezirler ve Paşalar |
| `denizci` | 7 | Denizciler |
| `mimar` | 4 | Mimarlar |
| `edebiyatci` | 4 | Edebiyatçılar |
| `hanedan` | 3 | Hanedan |

Şemada olup bu dosyada 0 kayıtlı: `padisah` (`padisahlar.js`te). `app.js:9397-9398` ayrıca
`sehzade`, `valide` süzüyor: kisiler.js'te **0 kayıt** (ölü süzgeç, bilgi).

## 2. emir / bey / beylerbeyi / naib karşılığı → **YOK**
11 değerin hiçbiri "hükümdar olmayan yönetici/emîr" anlamı taşımıyor. `komutan` ve
`vezir-pasa` Osmanlı kadrosu (dizinde Osmanlı sekmeleri), yabancı için yalnız
`yabanci-hukumdar` · `yabanci-komutan` · `siyasi` var.

Benzer kayıtlarda bugünkü kullanım (emsal, tutarsız):
- "emîr/emir" diye anılan yöneticiler `yabanci-hukumdar`: `muhammed-bin-resid` (Şammar emiri, `:306`),
  `turki-bin-abdullah` (`:304`), `suud-bin-abdulaziz` (`:303`, "emirlik 1803–1814").
- `abdullah-b-suud` "Son Dir'iye emîri" → `yabanci-komutan` (`:194`). Aynı soydan öteki emîrlerle tutarsız.
- Taçsız fiilî yönetici emsali: `miklos-horthy` (naip) → `siyasi` (`:393`).

## 3. Hüküm (şartnameye göre)
Karşılık **YOK** ⇒ `edigu` `tur` alanı **DOKUNULMAZ**, değer icat edilmez. `yabanci-hukumdar`
kalır. TDV de "devleti idare etti" diyor (`altin-orda-hanligi`); emîr sıfatı `not` alanında
taşınıyor (EDIGU-1006 diff'i).
Bilgi olarak (öneri DEĞİL): ileride "taçsız fiilî yönetici" için ayrı değer açılırsa adaylar
`edigu` + `horthy` + `abdullah-b-suud`/Suûdî emîrleri tutarlılığıdır. Bu bir kapsam/şema
kararıdır, koordinatörde.
