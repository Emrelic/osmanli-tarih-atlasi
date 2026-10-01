# D246 — `git status` CRLF bozulmasını GÖRMEZ: damgalı dosya için "temiz" bir kanıt değildir

**Slogan:** 🔴 **Windows'ta `core.autocrlf=true` checkout sırasında her satır sonuna CR ekler; dosya BOZULUR ama `git status` BOŞ döner, çünkü git geri okurken yeniden normalleştirir — bozulma yalnız SHA DAMGASINDA görünür, sürüm denetiminde değil.**

## Vaka — KOŞU 19, 1 Ekim 2026

UMIT koşuyu bitirdi, `kodla.py yay`i dört hedef için koşturdu. Birincisi
(`devlet`) kendi sınavını **geçti.** Sonra global kapı öteki üçünü reddetti ve
**yazılanları sildi:**

```
✗ KODLAMA KAPISI: kurulan metin damgayla UYUŞMUYOR
  beklenen ce199f19dfeb…   çıkan d8f951a5e259…    ⇒ … YAYIN DURDU
```

Üç hedefte de aynı (`dfcaabb9…`, `6bbda9ec…`).

## 🟢 TEŞHİSİN DOĞRU KURULUŞU — ayırıcı sınav

KOSU-UMIT'in yaptığı şey derslik: **`yay`e hiç dokunmadan, commit'teki hâliyle
`kodla.py kapi data` koşturdu** ve AYNI üç ihlali aldı.

```
kusur YAZMADA olsa    → `kapi` dokunulmamis dosyada SUSAR
kusur CHECKOUT'ta olsa → `kapi` dokunulmamis dosyada da OTER   ← bu oldu
```

Tek komutla *"benim yazdığım mı bozuk, yoksa diskteki mi"* sorusu ayrıldı. Bu
olmadan teşhis `yay`in kodunda saatlerce aranırdı.

Sonra ölçüm: `git ls-files --eol` → **`i/lf  w/crlf`.** `core.autocrlf=true`.
CR sayıları: `donemler_ust` 6 · `donem_parcalar` 9 · `petek_govde_ust` 3 ·
`ufuk_bantlari_ust` 4 — her satır sonuna bir CR, yani **CR sayısı = satır sayısı.**

Çare o gece elle: yalnız 10 kodlanmış dosya
`git -c core.autocrlf=false checkout --` ile yeniden çıkarıldı. İndeks içeriği
aynı, config'e dokunulmadı. `kapi data` dört hedefte de ✓, çıkış 0.

## 🔴 ASIL DERS — `git status` bu sınıfı GÖRMEZ

EMRELIC'te iki yönde ölçüldü (`data/petek_govde_ust.js`):

```
YÖN 1  .gitattributes YOK · rm + git checkout --
       81.147 bayt / 0 CR   →   81.150 bayt / 3 CR     (tam +3, satır başına 1)
       git status --porcelain  →  BOŞ.  "temiz."
YÖN 2  .gitattributes VAR  · rm + git checkout --
       81.147 bayt / 0 CR   →   81.147 bayt / 0 CR     ✓
```

Yön 1'in ikinci satırı dersin kendisidir: **dosya diskte bozuktur ve git
"değişiklik yok" der.** Çünkü git worktree'yi geri okurken aynı dönüşümü ters
uygular; indekse göre fark görmez. ⇒ Bir dosya sha256 ile damgalanıyorsa
`git status` o damganın sağlığı hakkında **hiçbir şey söylemez.**

📌 Ve bu, `D202` ailesinin biçim yüzü: *"denetim var ≠ o soruyu soruyor."*
`git status` içerik eşitliğini değil **normalleştirilmiş** içerik eşitliğini
sorar. Damga ham baytı sorar. İki soru ayrı; birinin cevabı öteki için kanıt değil.

## KALICI ÇARE — `.gitattributes`, kasıtlı DAR kapsam

```
data/*_parcalar.js  -text
data/*_parca.js     -text
data/*_ust.js       -text
data/*_on.js        -text
```

On dosyayı tutar: `kodla.py`nin ürettiği + damgaladığı eserler. Elle yazılan
`yerlesimler*.js` ve kronoloji dosyaları **dışarıda** — onlarda normalleşme
istenen davranıştır, diff okunabilir kalır.

⚠️ Bu dosya yokken risk HER Windows checkout'unda vardır ve **uzak makineye
özel değildir:** EMRELIC'te de `autocrlf=true` ölçüldü. Orada patlamamasının tek
sebebi dosyaların yerel olarak ÜRETİLMİŞ olması, yani smudge süzgecinden hiç
geçmemesiydi. `kosu19` dalı çekildiği an on dosya yeniden materyalize olacaktı
⇒ **yayın kapısı doğru çıktıyı reddedecekti.** Bomba kuruluydu, tetiği bekliyordu.

## BAĞLI

`D229` (koşu çıktısı bayat ama yayınlanır) · `D241` (commitlenmeyen kumanda uzak
makinede yalan söyler) · `D247` (iki ölçümün uyuşması doğrulama değildir)
