# UMIT-W11-EDIGU-1006b — `edigu` düzeltme önerisi (diff, UYGULANMADI)

Oturum: UMIT-W11-EDIGU-MUKERRER-1006 · 5 Ekim 2026 · önceki ölçüm: `UMIT-W11-EDIGU-MUKERRER-1006.md`
Ağaç: `C:\atlas-w11` detached `origin/main` = `ae2e6bbd` · Diff: `denetim/EDIGU-1006.diff`
Kilit (kısa süreli, şimdi BIRAKILDI): `data/kisiler.js` (yalnız `edigu`) · `data/devletler.js` (yalnız `:2263`).

## 1. Diff — tek dosya, tek hunk
`data/kisiler.js:270` (`edigu`), başka satır yok:
- `devlet:"nogay"` → `devlet:"altinorda"` (künye 1242–1502, ölüm 1420'yi kapsar; D205 sınıf ③).
- `not` TDV'nin iki cümlesine indirildi: Mangıt boyundan Altın Orda emîri, 1419'a kadar fiilî
  idare, Nogay beylerinin atası; Nogay Ordası onun ölümünden SONRA oğulları üzerinden.
- `ic_not_not` (dosyada var: `:452`, `:453`): eski `not` + değişikliğin gerekçesi.
- `kaynak` (dosyada 22 kez): TDV `nogaylar` ×2 alıntı + `altin-orda-hanligi` alıntısı.
- `tartisma` (dosyada var: `:44`, `:67` …; kartvizitte "Tartışma" olarak gösterilir,
  `app.js:10200-10203`): **ölüm yılı çelişkisi BEYANLI**: `nogaylar` "823'te (1420)" ↔
  `mangitlar` "İdigu, ö. 1419". Atlas 1420'yi tutar; `altin-orda-hanligi`ndeki 1419 idarenin
  sonudur, ölüm değil.
Yeni alan adı icat edilmedi. `t:"1420"`, `donem` değişmedi.

**Paket:** `data/paket_12.js:13791` aynı kaydın kopyası, diff'e KONMADI. **Uygulayan
`py arac/paketle.py yenile` koşturur** (tazelik `paketle.py sina` ile sınanır).

## 2. `devletler.js:2263`: `nogay` künye kronolojisindeki 1420 maddesi → TAŞINMAZ
Madde: `{ t:"1420-01-01", tur:"hukumdar", b:"Mangıt beyi Edigü öldü; ardından oğulları
konfederasyonun çekirdeğini oluşturdu" }`. Bir **ölümü** tarihliyor; künye özeti ("Edigü'nün
mirasından doğan") ile aynı öncül bağlamı.

Hangi ekranda görünüyor? Tahmin edilmedi, **tarayıcıda ölçüldü** (worktree yerel sunucuda,
`window.DEVLETLER` yüklendikten sonra):
- **`nogay` odak ekranı:** künyenin kendi 6 maddesi + çok taraflı 1 (1644) = 7 madde; 1420
  maddesi **ilk satır** olarak görünüyor. Bu ekranda Nogay'ın öncülünü anlatan tek madde bu.
- **`altinorda` odak ekranı:** 52 madde = `KRONOLOJI_ALTINORDA` dosyasının 44'ü + çok taraflı
  8. Künyenin `devletler.js`teki kendi maddeleri **ekranda yok**: `app.js:14284`
  (`D[i].kronoloji = derin`) `KRONOLOJI_ALTINORDA` ile EZİYOR. Aynı olay orada zaten var:
  `kronoloji_altinorda.js:257` "1420-01-01 Edigü öldü — oğulları Nogay Ordası'nın
  çekirdeğini kurdu" (kaynak TDV `nogaylar`).

⇒ Maddeyi `altinorda` künyesine taşımak: ① **görünmez** olur (künye kronolojisi eziliyor),
② görünse bile **mükerrer** olurdu. `nogay`dan silmek ise Nogay ekranından öncül bağlamını
kaldırır. **Öneri: yerinde kalsın.** Künyenin kendi kronolojisi, penceresinden önceki öncül
olayı anlatabilir; kişi kaydının `devlet` bağı ise "kime aitti" sorusudur. İkisi ayrı sorudur.
Küçük not (yazılmadı): `tur:"hukumdar"` Edigü'yü Nogay hükümdarı gibi sunuyor; `kronoloji_orta_asya.js:341`
aynı olaya `kurulus` diyor. Tür düzeltmesi koordinatörün (`devletler.js` sahibi) takdiri.

## 3. Sınav (ÖNCE = `origin/main` ae2e6bbd · SONRA = diff uygulanmış)
| ölçüm | ÖNCE | SONRA |
|---|---|---|
| `denetle.py` özet satırları (25 satır, `Değişmez*`/`Ek denetim`/`SONUÇ`) | — | **birebir aynı** (`diff` boş) |
| `denetle.py` çıkış | 2 (yalnız Değişmez 8 `devletler_harita.js YOK`, taze ağaç) | 2 (aynı sebep) |
| mükerrer madde | 112 (≤113) | 112 |
| `odak_olc.py` | ODAKSIZ 769 · BEYANLI→yabancı 653 · toplam iş 1422 | aynı (`diff` boş) |
| UYARI satırları (denetle + odak_olc) | 1 + 1 (`dogrulanmadi` alanı, `yerlesimler_ek29`, önceden var) | aynı · **yeni UYARI 0** |
| `denetle_gorunur.py` (kisiler.js'i okur) | çıkış 1 (önceden var) | çıktı **birebir aynı** |

Diff: LF, **CR 0**, 1 hunk · `git apply --check` origin/main'e karşı **ileri ✓** · `-R` **✗ (reddedildi)**.
Ağaç ölçümden sonra geri alındı (`git checkout -- data/kisiler.js`), `git status` boş.

## 4. Bulunamadı
- Nogay Ordası kuruluş yılı TDV'de yok (önceki rapordan) ⇒ künye `f:1440` dayanaksız, bu diff'in dışında.
