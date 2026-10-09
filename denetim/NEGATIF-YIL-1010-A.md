# NEGATIF-YIL-1010-A — gün sayacının TÜKETİCİSİ (js) + `gunIdx` negatif yıl

Oturum: NEGATIF-YIL-1010-A (UMIT, hazır kıta) · 10 Ekim 2026 · model **Opus**
Ağaç: `C:\atlas-umit-negA` @ `origin/main` `f0b6fd50` (ayrı worktree). `C:\atlas` HEAD = `origin/main` = `f0b6fd50`, geride değildi.
Teslimde `origin/main` `616f7066`ya ilerlemişti: aradaki 40 dosyanın hiçbiri `js/` · `index.html` · `arac/` · C0 sınavı değil.
Diff `616f7066` üstünde de `apply --check` temiz.
Şartname: `KAMPANYA-SUMER-2000.md §5` ⓵⓶⓹ (js tarafı). ⓷⓸ (ayrıştırma, sıralama, motor) B kolunda.
🔴 Tuz dosyalarına (`uret_petek.py` · `girdi.py` · `renkler.py` · `motor_onbellek.py`) **dokunulmadı**.

## ⓵ TÜKETİCİ — gun.js'i artık ne çağırıyor (adıyla)
| dosya | işlev / satır (yamalı) | ne yapıyor |
|---|---|---|
| `index.html` | `<script src="js/gun.js">` · `js/app.js` etiketinin hemen ÖNCESİ | `window.GUN` tarayıcıda artık VAR (önceden 0 yükleyici) |
| `js/app.js` | `gunIdx` (`_gunSayaci().gun(s)`) | **67+ çağrı sitesi DOKUNULMADAN** sayaca geçti: yükleyiciler (`fi/ti`, `gi`), BASLANGIC/BITIS, kronoloji, d_katman, sefer_ok, antlasma_harita |
| `js/app.js` | `idxTarih` (`GUN.parcala`) | gün → {y,a,g}; y ASTRONOMİK |
| `js/app.js` | `_gunSayaci` (yeni) | GUN yoksa **ATAR**: "js/gun.js yüklenmedi". Eski Date.UTC'ye sessizce düşmez |
| `js/app.js` | `idxYazi` · `_yilYazi` · `yilDizgi` · `kesinlikliYazi` (ay/yil/onyil/yuzyil/belirsiz) | yıl ≤ 0 için `GUN.yilYazi` → "MÖ n". **y ≥ 1'de çıktı AYNEN eski** (evrende sınandı) |
| `js/app.js` | `gunMetniIdx` | ay/gün iki haneye dolgu (eskiden `"1453-5-29"`u Date.UTC yutuyordu) · "MÖ n" / "M.Ö. n" metni → 1−n |
| `js/app.js` | olay yükleyici (eski `:7507`) | gün hassasiyeti DESENLE belirleniyor. Eski `split("-").length > 2`, `"-2999-05"`i gün hassasiyetli sayıyordu |
| `js/app.js` | `_khGunStr` → `GUN.dizgi` | eski dolgu y = −1'de `"00-1"` basıyordu |
| `js/app.js` | `_khGunYazi` → `idxYazi` | aynı biçim |
| `js/app.js` | `zamanEksenDoldur` → `GUN.gunSayisi(y,1,1)` | eski `("000"+y).slice(-4)` negatifte `"2999"` veriyordu |
| `js/app.js` | `baslikDamgala` iso → `GUN.dizgi(suanki)` | eski `padStart(4)` negatifte `"00-1"` |
| `arac/odak_cozum.js` | index.html taramasında `js/gun.js` dalı | kesilen `gunIdx` GUN'suz ATAR ⇒ kamera nöbetçisi yüklemek ZORUNDA. Yüklenemezse ÖLÇÜLEMEDİ |
| `denetim/ARAC-GUN-SAYACI-C0-SINAV-1009.js` | `appGunIdx` | "yamasız kol" artık çalışma ağacında yok. Gövde bağlıysa taban `f0b6fd50` git'ten okunur. **Sınavın anlamı aynı kaldı** |
Toplam `GUN.*` / `_gunSayaci()` çağrı sitesi `app.js`te **14**. `gunIdx` üzerinden dolaylı tüketici: tarayıcıda **3.345 ayrık girdi** (ölçüldü, aşağıda).

### Python / motor tüketicisi — YAZILMADI, ÖNERİ (B koluna not düşüldü)
- `arac/gun.py`'nin tüketicisi hâlâ **0**. Tasarımdaki yerler: C1'de `denetle.py` (`gun_no` `:1221` · `_gun_farki` · dört kopya ayrıştırıcı → `gun.gun`; `negatif_yil_kapisi` + `capraz_kapi` → `OLCULEMEDI_KOVA`). C3'te `girdi.yukle()` → `fg/tg/kurg/bitg` (TUZ). `fromisoformat` ölçümü: `uret_petek.py` **1** · `denetle.py` **3** · `girdi.py` 0.
- Bu kol js tarafıdır. Python tarafına dokunmadım.

## ⓶ ÖNCE / SONRA — `gunIdx`
| girdi | ÖNCE (`f0b6fd50`) | SONRA |
|---|---|---|
| `-2999-01-01` (MÖ 3000) | 65683 → **2149-11-01** | −1.814.890 → y −2999 · "1 Ocak MÖ 3000" |
| `0000-01-01` (MÖ 1) | → **1900** | −719.528 → y 0 · "MÖ 1" |
| `0001-01-01` (MS 1) | → **1901** | −719.162 → y 1 |
| `0050-01-01` | → **1950** | −701.265 → y 50 |
| `1000-01-01` · `1945-09-02` · `2026-01-01` | −354.285 · −8.887 · 20.454 | **aynı** |
| `""` | −25.567 (1900-01-01) **sessiz** | ATAR |
| `1453-13-01` · `1281-02-30` · `1900-02-29` | ileri kayık gün **sessiz** | ATAR |
| `abc` · `1453/05/29` | NaN **sessiz** | ATAR |
| `" 1453"` · `"1453-5-1"` · `"--1453"` | değer **sessiz** | ATAR |
| GUN yüklenmemiş | — | ATAR "js/gun.js yüklenmedi" |
Hakem bağımsızdır: yıl uzunluklarının toplamıyla hesaplanır, Hinnant'a dayanmaz. Yedi vektörün yedisinde gün = hakem.

## ⓹ SINAV — `denetim/ARAC-NEGATIF-YIL-A-SINAV-1010.js` (diff içinde YENİ dosya)
Öngörü (koşudan önce): evrende fark 0 · atan 0. Tarayıcıda yeni istisna 0. Eski kol MÖ 3000/MÖ 1/MS 1/0050'de yanlış, 1000/1945/2026'da doğru.
**Tuttu.** Tek sapma: evren ilk koşuda `"1552-53"`ü topladı. Bu bir `gun:` GÖSTERİM metni (1552-1553 yılları), `gunIdx`'e girmiyor. Toplayıcı `gun`/`*not*` alanlarını dışarıda tutacak şekilde düzeltildi ve sayısı basılıyor (1).

`node denetim/ARAC-NEGATIF-YIL-A-SINAV-1010.js birim` → **63/63, çıkış 0**
| bölüm | yön | sonuç |
|---|---|---|
| A doğru çeviriyor | yeni: 7 vektör × (yıl · hakem günü · idxYazi · gidiş-dönüş) + kesinlik dalları MÖ + `gunMetniIdx` "15 Mart MÖ 44" | ✓ |
| | **eski kolda kusur GÖRÜNÜYOR** (sınav ayırt ediyor): 2149 · 1900 · 1901 · 1950 | ✓ |
| B yanlışı yakalıyor | 13 bozuk girdi → yeni ATAR. **Eski kol 9'unu sessiz yuttu.** `idxTarih(1.5)` ATAR · "31 Şubat 1453" ATAR (eski 3 Mart) · GUN yoksa ATAR | ✓ |
| C veri evreni | index.html'in 71 `data/` betiği · **7.788 ayrık tarih dizgisi** · yeni ATAN 0 · **yeni == eski fark 0** · gösterim (`idxYazi` · `kesinlikliYazi`×6 · `_khGunStr`) **birebir** · `gunMetniIdx` 5.075 metinde atan 0 / fark 0 · zaman ekseni 0100-9999 fark 0 | ✓ |
| D tüketici | index.html gun.js'i app.js'ten ÖNCE yüklüyor · gövdede Date.UTC/getUTC yok · odak_cozum gun.js dalı var · **odak KESIMLER 9 baş işareti app.js'te TEKİL** · GUN sitesi 14 | ✓ |
**Mutasyonla iki yönde sınandı:** ① `gunIdx` gövdesi eskiye çevrildi → **32/62, çıkış 1** · ② index.html'den gun.js satırı silindi → **çıkış 1** (D ✗). İkisinde de geri alındı, `cmp` ile birebir.

`node denetim/ARAC-NEGATIF-YIL-A-SINAV-1010.js tarayici` → **10/10, çıkış 0**. GERÇEK index.html, başsız Chrome (CDP), yerel sunucu. Taban sayfası `f0b6fd50`'in index.html/app.js'iyle açılıp aynı ölçüm koşuldu.
- Çalışma anında `GUN.gun`'a giren **3.345 ayrık girdi**: atan **0** · eski formülden farklı **0**. Yakalayıcı `window.GUN` atanırken sarılıyor.
- Yeni sayfada tabanda olmayan istisna **0**, konsol hatası **0**. İki sayfada da önceden var olan bir `Error` satırı var, yamayla ilgisi yok.
- Zaman gezintisi (7 tarih, `tarihAyarla`) taban ile **birebir**. Başlık damgası örneği: `Tarih Atlası · 1453-05-29 · 40.00N 30.00E · …` iki sayfada da aynı.
- Sayfada `gunIdx("-2999-01-01")` → [−1814890, −2999, "1 Ocak MÖ 3000"] · `"0050-01-01"` → 50 · `""` ve `"1453-13-01"` ATAR.

**Mevcut sınavlar:**
- `py denetim/ARAC-GUN-SAYACI-C0-SINAV-1009.py` yamalı ağaçta **52/52**. C3 "gun() == app.js gunIdx" **fark 0** (bugünkü evren **7.340** dizgi; 9 Ekim'deki 7.404'ten veri değişimiyle oynadı).
  Ayarsız hâli ilk koşuda **çıkış 1** verdi: yamasız kol GUN'suz vm'de "js/gun.js yüklenmedi" diye ATTI. Bu yanlış değer değil, açık hataydı ⇒ yukarıdaki `appGunIdx` ayarı.
- `py arac/odak_olc.py` (yayın kapısına bağlı): yamasız ve yamalı çıktı **birebir** (237 satır, çıkış 0).
  🔴 **Ama ilk koşuda ÖLÇÜLEMEDİ verdi.** Benim yorumum `"function gunIdx(s)"` kesim işaretini birebir içeriyordu, ilk eşleşme yorumda oldu ("Unexpected string"). Yorum düzeltildi ve sınav D'ye **işaret tekilliği** sorusu eklendi. `app.js:160`'taki BASLANGIC uyarısının aynı ailesi.

## Bekleyen diff'lerle uyum
- Temiz ağaçta (`616f7066`) `git apply --check NEGATIF-YIL-1010-A.diff` ✓
- `KRONO-GORUNURLUK-1008-SUZGEC` (`js/suzgec.js`) · `-TUR` (8 kronoloji dosyası) · `-TUR2` (6 kronoloji dosyası): benimkiyle **dosya kesişimi 0**. Benimkinden SONRA üçü de `--check` ✓ ve uygulandı.
  Dördü birlikte uygulanmış ağaçta birim sınavı **63/63**: evren aynı, atan 0.
- `RENK-ARDIL-1009-v3-PAKETUSTU.diff` kapsam dışı (istenmedi, bakılmadı).

## BULAMADIM / ÖLÇMEDİM / C2'NİN KALANI (dokunulmadı, adıyla)
1. 🔴 **Sahiplik testi hâlâ DİZGİ kıyaslıyor**, negatif ve 3 haneli yılda yanlış sahip verir. `gs` dizgisi artık `GUN.dizgi`'den doğru geliyor, ama `"-2999…" < "-0499…"` dizgi sırası TERS.
   - `js/suzgec.js` 7 site: `:424 · 425 · 426` (`sahipAnahtari`) · `:555 · 615 · 630 · 640`.
   - `js/app.js` 5 site: `sahip` `:9521 · 9524 · 9532` · `isyanMaddeKutusu` `:5436` · `_yaSahip` `:10120`.
   Çare (tasarım C2): yükleyicide `fi/ti` (int), kıyas sayıyla. **`suzgec.js`e bekleyen `KRONO-GORUNURLUK-1008-SUZGEC` dokunuyor ⇒ o indikten SONRA yazılmalı.** MÖ verisi C4'e kadar yazılmayacağı için bugün sessiz yanlış üretmez.
2. Ham `.y` gösterimleri (MÖ'de "-2999" basar, bugün ufuk 1000-1945 olduğu için ulaşılamaz): `app.js:119 · 7341 · 7370 · 9608 · 9617 · 10339 · 10596 · 15240 · 15246 · 16197`. Çare: `GUN.yilYazi(...)`. Ufuk MÖ'ye açılmadan şart.
3. `kesinlikliYazi` MÖ yüzyılı `_ROMA_YUZYIL` XXI'de bittiği için Arap rakamına düşüyor: "MÖ 30. yüzyıl". Davranış eski fallback ile aynı; Roma rakamı istenirse tablo uzatılır.
4. **Kırılan eski denetim aletleri:** `app.js`'ten `gunIdx`'i kesip GUN'suz koşturan `ARAC-A1-PORTRE-0913.js` · `ARAC-GUN-SAYACI-OLCUM-1009.js` · `ODAK-OLC-KOR-NOKTA-1005-olc.js` artık "js/gun.js yüklenmedi" diye ATAR (sessiz değil). Hiçbiri kapıya bağlı değil (`arac/` grep 0). Tarihî aletler, düzeltilmedi.
5. `zaman.js` · `arama.js` gunIdx çağırmıyor (ölçüldü). `d_katman.js` (12) · `sefer_ok.js` (2) · `antlasma_harita.js` (1) app.js'ten sonra yüklenir, global `gunIdx` ile otomatik geçti. Tarayıcı ölçümü bunları kapsıyor.
6. Jülyen/Gregoryen kaynak takvimi: sayaç işi değil (TASARIM §②), ölçülmedi.

## İSTİYORUM / ÖNERİYORUM
- Diff **tuz dosyası içermiyor** ⇒ motor partisini beklemesi ŞART DEĞİL; yayınlanabilir, davranış birebir. Koordinatör yine de motor partisiyle indirecekse (görev öyle diyor) sakıncası yok.
  ⚠️ İndiği commit'te `surum_damgala.py` koşmalı: yeni `js/gun.js?v=` satırı aynı damgayı taşıyor.
- C2'nin kalanı (1 ve 2) ayrı bir kalem olarak, `KRONO-GORUNURLUK-1008-SUZGEC` indikten sonra verilsin.

YENİ DOSYALAR: `denetim/ARAC-NEGATIF-YIL-A-SINAV-1010.js` (diff içinde, ayrıca `C:\atlas-umit\denetim\`'e kopya) · `C:\atlas-umit\denetim\NEGATIF-YIL-1010-A.diff` · `C:\atlas-umit\denetim\NEGATIF-YIL-1010-A.md`
DEĞİŞEN (diff): `js/app.js` · `index.html` · `arac/odak_cozum.js` · `denetim/ARAC-GUN-SAYACI-C0-SINAV-1009.js`
