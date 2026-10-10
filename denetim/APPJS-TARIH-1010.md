# APPJS-TARIH-1010: `js/app.js` (+ `js/d_katman.js`) tarih kıyasları SAYISAL (A2'nin devamı)

Oturum: APPJS-TARIH-1010 (UMIT, yazıcı) · 10 Ekim 2026 · model **Opus**
Ağaç: `C:\atlas-appjs`, `origin/main` `a24a4838` üstünde ayrı worktree (detached). Önce A2 diff'i uygulandı, bu iş onun üstüne yapıldı. İş bitince worktree kaldırıldı.
Teslimde `origin/main` = `1d5e2dfd`. Aradaki commit'lerde `js/`, `index.html` ve `arac/odak_cozum.js` hiç değişmedi.
Şunlara **dokunulmadı**: `js/suzgec.js` (A2 bekliyor) · dört tuz dosyası · `arac/denetle.py`.
Commit, push ve stash yapılmadı. `C:\atlas`'a yazılmadı.

## Yaklaşım (A2 ile aynı ilkeler)
- Her tarih kıyası ve sıralaması **gün sayısıyla** yapılır. Kendi takvim kodu yazılmadı: `gunIdx` (A'dan beri `GUN.gun`), `GUN.ayUzunlugu`, `GUN.gunSayisi` ve `GUN.yilYazi` kullanılıyor.
- Yeni yardımcılar `gunIdx` kesiminin **içinde**, `_gunSayaci` ile `idxYazi` arasında duruyor. `arac/odak_cozum.js`'in ilk kesimi bu yüzden onları da taşıyor; yorumda hiçbir kesim işareti geçmiyor. Yardımcılar:
  - `tarihSira(a, b)`: sayısal karşılaştırır. Aynı günde (`"1453"` ile `"1453-01-01"`) dizgiye göre sıralar. Böylece dört haneli MS veride sonuç eski dizgi sırasıyla **birebir aynı** kalıyor.
  - `tarihPencerede(p, gi)`: `[f, t)` aralığının sayısal karşılığı.
- Geçersiz tarihte **ATAR** (A2 ile aynı sözleşme). Gerçek veride bu durumu ölçtüm:
  - 4.300 yerleşimin d/v/s/isg uçları geçersiz: 0
  - künye kronolojisinin 3.187 `t` alanı geçersiz: 0
  - `KRONOLOJI_*` dosyalarının 8.267 `t` alanı geçersiz: 0
  - 7 isyan penceresi geçersiz: 0
- Yükleme sırası tuzağı burada yok. `app.js` zaten `gun.js`'ten sonra yükleniyor ve `_gunSayaci` GUN'u çağrı anında arıyor.

## KALEMLER
| # | site (taban satırı) | ne vardı | ne yapıldı |
|---|---|---|---|
| 1 | `tarihMetniAyristir` :15162 (+ `calistir` :15240) | `Date.UTC`: `"50"` → **1950**. MÖ girilemiyordu. `"30.02.1453"` sessizce 2 Mart'a kayıyordu | Aşağıdaki **KARAR**. Ayrıca durum satırındaki yıl `_yilYazi` ile basılıyor; eskiden MÖ'de `"-49"` basardı |
| 2 | `_yerlesimSerit` → `sahip` :9521/9524/9532 | `p.f <= gun < p.t` dizgi kıyası | `tarihPencerede(p, gunIdx(gun))` |
| 3 | `isyanMaddeKutusu` :5436-5437 | `gs` dizgisiyle kıyas | `o.gi` (gün indeksi) kullanılıyor: `tarihPencerede` ve `gi < gunIdx(p.f)` |
| 4 | `_yaSahip` :10120 | işgal kıyası dizgiyle | `tarihPencerede(p, t)`. Buradaki `t` zaten gün indeksi |
| 5 | `_yerlesimSerit` :9515 | `Object.keys(uc).sort()` | `.sort(tarihSira)` |
| 5 | dizin ilk/son :9759/9760 | `a.f < b.f` | `tarihSira` |
| 5 | yer kartı dönem listesi :9806 | dizgi sıralaması | `tarihSira` |
| 6 | `derinAdimlari` :16576 (KRONO-NEG J1) + :16587 | `^\d{3,4}-…`: **MÖ adım ELENİYORDU**. Sıralama dizgiyle | Desen yalnız aday buluyor (`^[+-]?\d{1,6}-\d{2}-\d{2}$`), karar `gunIdx`'te (`_derinGunMu`). Sıralama `tarihSira` ile. `"1453-02-30"` artık eleniyor |
| ek | **`js/d_katman.js:422 _dGunYazi`** (KRONO-NEG J2, koordinatör ekledi) | `^\d{3,4}-…`: MÖ ham basılıyordu. 🔴 Aynı satırın bir de **çökme** kusuru vardı: desen `"1453-02-30"`ü geçiriyordu ve A'dan beri `gunIdx` ATAR ⇒ panel çökerdi | Önce desenle aday bulunuyor, sonra `GUN` karar veriyor. Geçersiz gün ham basılıyor ve `console.warn`a düşüyor |

### Listede OLMAYAN, aynı sınıftan siteler (eklendi)
| site | sınıf | ne yapıldı |
|---|---|---|
| `_isyanTarihYazi` :5415 | `split("-")` MÖ'de `p[0] = ""` veriyordu. Ekran `"3 undefined —"` basıyordu | Ayrıştırma regex ile yapılıyor, yıl `yilDizgi`'den |
| `isyanYayilmaUret` :5595 `nk.sort` | savaş/isyan oku sırası dizgiyle | `tarihSira`. Bu yapılmasa MÖ'de ok ters dönerdi |
| `cokTarafliKronolojiEkle` :15459 `ix[id].kronoloji.sort` | düz `String(t)` sıralaması. 🔴 **odak kesiminin içinde** | `tarihSira` |
| `derinKronolojiBindir` :15384-15386 | `kronoGun` yalnız gün hassasiyetinde çalışıyor. Öbür durumlarda dizgiye düşüyordu (MÖ'de ters). 🔴 odak kesiminde | `tarihSira` |

### Dokunulmayanlar (gerekçeli)
- `:3886 pencereler.sort` (odak kesimi `EPOK_DAMGASI`): DIZGI bunu ZARARSIZ saydı. Pencereler ayrık ve ilk eşleşen döndüğü için sıra sonucu değiştirmiyor. Odak kesimine gereksiz dokunmamak için olduğu gibi bırakıldı.
- `idxTarih(BASLANGIC/BITIS).y` (:119, :15246, :16197): ufuk sabitleri pozitif (1000–1945). Yazım bu yüzden doğru.
- `kronoGun` :15328: `setUTCFullYear` kullanıyor ve negatif yılda doğru çalışıyor. Dizgi kıyası değil.
- `:9287 dsira.sort()` ve `:9947` devlet/tür adları: bunlar tarih değil.
- `:16089`: önce `gi` ile kıyaslıyor, dizgiye ancak eşitlikte bakıyor (DIZGI ZARARSIZ dedi).
- Pozitif sabitle yapılan kıyaslar (`1281` gibi): bu dosyada kalan böyle bir site yok. Varsa da tek taraf negatif kuralı gereği zararsız olurdu.

## ① KARAR: yıl girişinin anlamı
- **Çıplak sayı takvim yılıdır (MS).** `"1453"` → 1453 (değişmedi), `"50"` → **MS 50**.
  - Gerekçe: eski kodun yorumunda ve hata metnindeki örneklerde iki haneli yıl hiç yok.
  - `50` → 1950 sonucu bir kısaltma kuralından değil, `Date.UTC`'nin 0-99 yıllarını 1900'e kaydırmasından geliyordu. A'nın `gunIdx` başlığı da bunu kusur olarak kaydetmişti.
  - 1950 zaten ufuk dışında kalıyor ve kırpılıyordu. Yani bu davranışın yararlı bir kullanımı yoktu.
  - Atlasın hedefi MÖ 12000 – MS 2026. Bu aralıkta MS 50 meşru bir tarih.
- **MÖ, ekranın kendi yazdığı biçimle girilir.** Ekran `GUN.yilYazi` ile `"MÖ n"` basıyor; giriş de aynı biçimi kabul ediyor. Örnekler: `"MÖ 50"`, `"M.Ö. 50"`, `"50 MÖ"`, `"MÖ50"`, `"mö 50"`, `"15 Mart MÖ 44"`, `"15.03.44 MÖ"`, `"Mayıs MÖ 44"`. Bunlar astronomik **1 − n** yılına çevrilir. `"MS 50"` ve `"M.S. 50"` de kabul ediliyor. `gunMetniIdx` (A) da aynı `MÖ` desenini kullanıyor.
- **Eksi işareti** verinin kendi astronomik biçimini gösterir (`js/gun.js`, ISO 8601). Bu yüzden yalnız **4-6 haneli** yazımda kabul ediliyor: `"-0049-03-15"` = MÖ 50.
  - `"-50"` **çift anlamlı**: MÖ 50 mi, yoksa astronomik −50 (= MÖ 51) mi?
  - Sessizce seçmiyor. Hata metninde iki doğru yazımı da gösteriyor (§11: sessiz kalma yasağı).
- **Yıl 0 yoktur.** `"0"` ve `"MÖ 0"` hata verir. Yıl alanı 6 haneye genişledi, böylece `"12000 MÖ"` girilebiliyor.
- **Ayın gün sayısını GUN sınıyor.** `"30.02.1453"` ve `"29 Şubat 1900"` artık hata (eskiden sessizce Mart'a kayıyordu). `"29 Şubat MÖ 5"` geçerli, çünkü astronomik −4 artık yıl.

## SINAV: `denetim/ARAC-APPJS-TARIH-SINAV-1010.js` (diff içinde; ayrı kopyası `C:\atlas-umit\denetim\`'de)
`node denetim/ARAC-APPJS-TARIH-SINAV-1010.js [--eski <ref>]`. Eski kol `a24a4838:js/app.js` ve `js/d_katman.js`. `suzgec` iki kolda da çalışma ağacındaki (A2) sürüm.
İşlevler `app.js`'ten **metinle kesilip** `vm` içinde koşuyor (`odak_cozum.js` yöntemi; kopya yok). Çıkış kodları: 0 temiz · 1 ihlal · 2 ölçülemedi.

| | yamalı | yamasız (`app.js` + `d_katman.js` = taban) |
|---|---|---|
| sonuç | **79/79, çıkış 0** | **32/79, çıkış 1** |
| A: giriş → gün (46 soru) | hepsi ✓ | `"50"` → 1950-01-01 · `"1"` → 1901 · `"29.05.53"` → 1953 · bütün MÖ girdileri HATA · `"30.02.1453"` → 1453-03-02 |
| B: MÖ sentetik (24 soru) | şerit 4 dilim, artan sıra · sahip ahameni/makedonya · isyan ▣ · `_yaSahip` işgali görüyor · dizin ilk `-0600` · `derinAdimlari` MÖ kabul ediyor · 3 sıralayıcı artan · `"1 Mart MÖ 501"` · `"1 Ekim MÖ 330"` | şerit tek dilim (selevkos) · sahip her MÖ günde **selevkos** (yanlış sahip) · isyan `"1 undefined —"` · işgal yok · sıra ters · MÖ adım eleniyor · `_dGunYazi("1453-02-30")` **ATIYOR** |
| C: pozitif giriş | **64.302 giriş**, beyansız fark **0** (aynı 48.297). Beyanlı farklar: yıl < 100 → 4.158 · geçersiz gün → hata 11.847 | — |
| D: GERİLEME (gerçek veri, 70 betik, 4.300 yerleşim, MÖ uç 0) | `_yerlesimSerit` 4.300 yerleşim fark 0 · **`sahip()` 278.196 (yerleşim, gün) çifti fark 0** (kendi uçları ±1 + 50 küresel gün) · `_yaSahip` 20.148 işgalli çift fark 0 · dizin ilk/son + dönem listesi 4.300 fark 0 (aynı nesne) · 3 kronoloji sıralayıcısı 950 liste / 13.230 madde × 2 başlangıç sırası fark 0 · `isyanMaddeKutusu` 7 pencere × 140 gün metin fark 0 · `derinAdimlari` 2 gerçek madde fark 0 · `_dGunYazi` + `_isyanTarihYazi` 7.292 gerçek tarih dizgisi fark 0 | — |

### ISIRMA (`arac/sinav_isirma.py`, `makine/umit` `SINAV-ISIRMA-1010.diff`)
`--taban origin/main` (`5a37a3e1`, 0 geride) `--diff NEGATIF-YIL-1010-A2.diff APPJS-TARIH-1010.diff`:
```
A (yamasız)  çıkış 1 · 32/79 · özet 32/79      B (yamalı)  çıkış 0 · 79/79 · özet 79/79
ISIRIYOR 47 · TESADÜF-YA-DA-SORULMAMIŞ 32 · İKİSİNDE-KALAN 0 · GERİLEME 0 · EŞLEŞMEDİ 0 · çıkış 0
worktree ikisi de kaldırıldı
```
TESADÜF kovasındaki 32 soruyu elle inceledim:
- 18'i süreklilik sorusu: pozitif girişler ve iki kolda da HATA olan girişler.
- 4'ü eski kolu doğrulayan yardımcı soru: B2, B13, B17 ve B11 dışındaki "eski kol FARKLI/kaçırıyor" soruları.
- B7 ve B8 tesadüf: `0000-12-31` ve `0001-01-01` tek taraflı ya da negatif olmayan kıyaslar.
- C1 ve D1-D8 gerileme soruları. Tabanda eski ile yeni aynı olduğu için iki kolda da ✓ çıkmaları beklenen sonuç.
- ⚠️ B12 (`_yaSahip` MÖ) ISIRIYOR kovasında, ama payın bir kısmı A2'nin. A kolunda `suzgec.js` da A2'siz.

### ODAK KAPISI (yamalı ve yamasız aynı ağaçta; yamasız = A2 + taban `app.js`/`d_katman.js`)
| | yamasız | yamalı |
|---|---|---|
| `py arac/odak_olc.py` | çıkış 0 · 236 satır | çıkış 0 · **`cmp` birebir** |
| `py denetim/ODAK-KAPI-SINAV.py` | çıkış 1 (taban kırığı: `SEKME SESSİZ/OKUNMAYAN GERİLEDİ 1 çift` · `odaksiz 373 ≠ 374`) | çıkış 1 · **`cmp` birebir** |
Odak kesimindeki iki sıralayıcı değişti (:15386, :15459). `odak_olc` yamalı ağaçta çıkış 0 verdi, yani kesilen parçalar koştu ve çıktı değişmedi.

### Tarayıcı (yerel statik sunucu `127.0.0.1:8767`; iş bitince durduruldu)
- Sayfa açıldı: 1.800 olay, konsol hatası **0**.
- **Tarihe git kutusunda** gerçek Enter olayıyla girişler denendi:
  - `"MÖ 50"` → ufuk öncesi diye kırpıldı ("1000–1945 arasını kapsıyor").
  - `"-50"` → çift anlam hatası.
  - `"50"` → ufuk öncesi diye kırpıldı (eskiden 1950'ye, yani ufuk **sonrasına** gidiyordu).
  - `"29 Mayıs 1453"` → İstanbul'un Fethi.
  - `"30.02.1453"` → "Bu ayda o gün yok".
- Sayfa içinde `_cubukCiz` gerçek 4.300 yerleşimin hepsinde çalıştı, `_yaSahip` 500 kayıtta çalıştı. Atan 0.
- ⚠️ Sınırı: tarayıcıda MÖ **verisi** yok. Bu yüzden harita ve kartlardaki MÖ yolları tarayıcıda değil, node'da sınandı. Tarayıcı kanıtı "sayfa kırılmadı + giriş kutusu doğru" diyor. MÖ veri yolları için "tarayıcıda sınandı" demiyor.
- Yan gözlem (bana ait değil): ufuk öncesi kırpmada "en yakın olay" bir **680 (1281-82)** maddesine gidiyor. Bu, `olaylar[0]` ufuk dışında kalan bir madde demek. Davranış tabanda da aynı.

## İNİŞ NOTU
- `js/app.js` ve `js/d_katman.js` değiştiği için iniş commit'inde **`py arac/surum_damgala.py`** gerekiyor (`app.js?v=` ve `d_katman.js?v=`).
- **A2 önce inmeli.** Bu diff A2'nin dokunmadığı dosyalara yazıyor ve tek başına da temiz uygulanıyor, ama sınavın MÖ `_yaSahip` sorusu A2'ye bağlı.

## ① ÖLÇTÜM
- Sınav yamalı **79/79**, yamasız **32/79**. Isırma: ISIRIYOR 47, GERİLEME 0, EŞLEŞMEDİ 0.
- Gerçek veride gerileme 0:
  - 278.196 `sahip` çifti
  - 20.148 `_yaSahip` çifti
  - 4.300 şerit ve dönem listesi
  - 13.230 madde × 3 sıralayıcı
  - 7.292 tarih dizgisi
  - 64.302 giriş, beyansız fark 0
- Odak kapısı iki kolda `cmp` ile birebir.
- Değişen siteler: listedeki 6 kalemin hepsi (10 site), KRONO-NEG'in `d_katman` sitesi, listede olmayan 4 site. Toplam **app.js'te 16, d_katman'da 1 değişim**.
## ② BULAMADIM / ÖLÇMEDİM
- JS için AST taint aracı yok. Elle grep yaptım (dizgi `< <= > >=` `.f/.t`, `.sort()`, `String(t)` karşılaştırması, `split("-")`, `Date.UTC`, `slice(0,4)`). Bu desenlerin dışında kalan bir kıyas gözümden kaçmış olabilir.
- Tarayıcıda MÖ verisiyle harita ve kart yolu ölçülemedi, çünkü ufuk 1000–1945 ve veride MÖ uç 0.
- `index.html`'de `suzgec.js` ile `gun.js` arasındaki sıra tuzağına dokunmadım. A2 bunu çağrı anında arama yaparak çözüyor; `app.js` zaten `gun.js`'ten sonra yükleniyor.
## ③ İSTİYORUM / ÖNERİYORUM
1. İniş sırası: **A2 → APPJS-TARIH**. Aynı commit'te `surum_damgala.py`.
2. `"-50"` kararı onay bekliyor: astronomik eksi işareti yalnız 4+ haneyle kabul ediliyor, kısa yazım hata veriyor. Koordinatör ya da Emre "eksi = MÖ" isterse değişiklik tek satır.
3. `olaylar[0]` ufuk dışında (680). Kırpmada kullanıcı ufuk öncesine götürülüyor. Bu ayrı bir arayüz kalemi; bana ait değil.

YENİ DOSYALAR: `C:\atlas-umit\denetim\APPJS-TARIH-1010.diff` (`js/app.js` · `js/d_katman.js` · YENİ `denetim/ARAC-APPJS-TARIH-SINAV-1010.js`) · `C:\atlas-umit\denetim\APPJS-TARIH-1010.md` · `C:\atlas-umit\denetim\ARAC-APPJS-TARIH-SINAV-1010.js`
Taban `a24a4838`. Diff sha256 `0b5eb91bc4f8fdef0367e5701f061256f1863bad9923e4f06719d07b1eff0fd9` (647 satır).
`git apply --cached --check` geçici index ile yapıldı, çalışma ağacına dokunulmadı:
- `a24a4838` üstünde: A2 → APPJS ✓ · APPJS tek başına ✓
- `1d5e2dfd` (teslimdeki `origin/main`) üstünde: A2 → APPJS ✓ · APPJS tek başına ✓
