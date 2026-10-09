# GUN-SAYACI-TASARIM-1009 — dizgi karşılaştırmasını terk etmek: tek gün sayacı (TASARIM, kod yok)

Oturum: GUN-SAYACI-TASARIM-1009 (UMIT) · 9 Ekim 2026 · ağaç `C:\atlas-gun` @ `origin/makine/umit` `67e9ec9d`
Görev: UMIT İRTİBAT (koordinatör yönü + Emre onayı: *"MÖ tarih temsili için ne gerekiyorsa yapalım"*).
**Üretim koduna dokunulmadı.** Tasarımın iddiaları iki ölçüm aletiyle sınandı (aşağıda, yalnız okurlar):
`ARAC-GUN-SAYACI-OLCUM-1009.js` (referans algoritma ↔ bugünkü gunIdx/gun_no) ·
`ARAC-GUN-SAYACI-ENVANTER-1009.py` → `GUN-SAYACI-ENVANTER-1009.tsv` (site dökümü).

## HÜKÜM — beş cümle
1. **Sınır: tarih dizgisi okunduğu YERDE bir kez tam sayıya çevrilir.** Python'da `girdi.yukle()` /
   `oku_devletler()`, JS'te veri yükleyici (`gi` deseni zaten var). Karşılaştırma ve sıralama yalnız bu
   sayıyla yapılır. Dizgi alanı silinmez, yalnız giriş/çıkış ve gösterim içindir.
2. **Ortak işlev ikizi: `arac/gun.py` + `js/gun.js`.** Proleptik Gregoryen takvim, astronomik yıl (0 = MÖ 1),
   sıfır günü 1970-01-01, tamamen tam sayı aritmetiği (Date/datetime kullanılmaz). **Ölçüldü:** 0100-9999
   arasındaki 3.615.900 günün **hepsinde** bugünkü `gunIdx` ile birebir. Python `gun_no − 719.163` ile de
   3.652.059 günün hepsinde birebir. Yani bugünkü veri için geriye uyumluluk **tam**.
3. **Kapanan üç kusur, yamasız kolda GERÇEKTEN koşturuldu:**
   - `gunIdx("-2999-01-01")` → y=**2149**.
   - `Date.UTC` 0001-0099 aralığında **36.159 / 36.159** günü yanlış veriyor.
   - `_gun_farki` negatifte **None** dönüyor (11 çağrı sitesi ihlali görmeden geçer).

   Ayrıca `gun_no` negatifte ValueError veriyor ve dizgi sıralaması negatifleri ters diziyor.
4. **Döküm 281 site:** motor 59 (TARAMA, AST) + motor dışı 222 (desen; 7'si elle ayıklanan yanlış pozitif ⇒ **215**).
   Sınıflar: "sınırda çevir" 122 · "zaten sayısal/sınır" 136 (gunIdx ailesi) · "yalnız gösterim" 16.
5. **Beş commit.** Motor tuzuna YALNIZ biri dokunur (C3). O commit **Z1 MOTOR.diff ve MOTOR-TARIH-TARAMA
   bulgularıyla aynı tam inşada** iner, tuz bir kez değişir (`§9.1`-2). **MÖ verisi C3'ten önce yazılmaz.**

---

## ① SİTE DÖKÜMÜ — 281 site (tam liste: `GUN-SAYACI-ENVANTER-1009.tsv` + TARAMA §②)

### Özet — dosya × dönüşüm sınıfı
| dosya | site | sınırda ÇEVİR (dizgi kıyası/sıra/parçala/eşit) | ZATEN SAYISAL / SINIR (gunIdx·gun_no·Date) | YALNIZ GÖSTERİM |
|---|---|---|---|---|
| `arac/uret_petek.py` + `girdi.py` (TUZ) | 59 | **59** (48 kıyas/sıra · 11 eşitlik) | 0 | 0 |
| `js/app.js` | 120 (−1 yp) | 18 (kıyas 6 · sıra 1 · eşit 7 · ayrıştıran `split` 4) | 89 (gunIdx 67 · idxTarih/getUTC 22) | 13 (gösterim işlevi 8 · `slice(0,4)` basımı 5) |
| `arac/denetle.py` | 53 (−3 yp) | 25 (kıyas 15 · sıra 2 · parçala 8) | 28 (gun_no 13 · _gun_farki 11 · isoformat/date 4) | 0 |
| `arac/renk_olc.py` | 9 (−1 yp) | 6 (kıyas 1 · sıra/min/max 5) | 0 | 3 (`[:4]` basımı) |
| `arac/odak_cozum.js` | 8 | 2 (`typeof o.t` eşit) | 6 (W.gunIdx) | 0 |
| `arac/denetle_eslesme.py` | 8 | 4 | 4 | 0 |
| `arac/denetle_anakronizm.py` | 6 | 1 | 5 (kendi `gun_no` kopyası!) | 0 |
| `arac/uret_devirler.py` | 4 | 4 (dönem içerme) | 0 | 0 |
| `arac/denetle_statu.py` | 3 (−1 yp) | 2 | 1 | 0 |
| `arac/denetle_gorunur.py` | 3 | 0 | 3 | 0 |
| `arac/kodla.py` | 1 | 1 (`p.get("f","9999") <= gun`) | 0 | 0 |
| `arac/denetle_yayin.py` | 0 (−1 yp) | — | — | — |
| **toplam** | **274 (+7 yp = 281)** | **122** (motor 59 + motor dışı 63) | **136** | **16** |

Ayıklanan 7 yanlış pozitif: `denetle.py:1187-1188` (docstring) · `:1568` `olc[:4]` · `renk_olc.py:1152` `_alt[:4]` ·
`denetle_yayin.py:1585` `fark[:4]` · `denetle_statu.py:462` `adlar[:4]` · `app.js:10720` `kisiler…slice(0,4)`.
⚠️ Motor dışı döküm **desen sayımı, AST taint değil**. TARAMA'nın aleti motora bakıyor. Değişken adı `f/t/kur/bit/tarih`
olmayan kıyaslar kaçmış olabilir ⇒ C1/C2'nin kapısı TARAMA aletinin bu dosyalara genişletilmiş hâlidir (④).

### Kritik siteler, adıyla (motor dışı, "sınırda çevir")
| dosya:satır | işlev | bugün | not |
|---|---|---|---|
| `app.js:9285 · 9288 · 9296` | `sahip` | `p.f <= gun && gun < p.t` (**dizgi**) | arayüzün kendi sahiplik testi. Negatif yılda yanlış sahip |
| `app.js:5250-5251` | `isyanMaddeKutusu` | `p.f <= gs && gs < p.t` | isyan taraması |
| `app.js:9826` | `_yaSahip` | `p.f <= gs && gs < p.t` | işgal satırı |
| `app.js:15511` | `listeCiz` | `a.t.localeCompare(b.t)` | Devletler listesi sırası |
| `app.js:16 · 45 · 5230 · 7297` | `gunIdx` · `kesinlikliYazi` · `_isyanTarihYazi` · olay yükleyici | `split("-")` | negatifte ilk parça `""` |
| `app.js:3689 · 3697` | `tekVeri` | `dn.f === EPOK_DAMGASI` | eşitlik, tek yazım şartı |
| `denetle.py:1211 · 2238 · 2422-2428 · 3735-3741` | `ir` · `_osmanli_kure` · `durum` ×2 | `p["f"] <= g < p["t"]` | Değişmez 1/2/7 içerme |
| `denetle.py:1880 · 3697 · 3704 · 3133` | `degismez2` · `degismez7` · `degismez5` | uç literaliyle kıyas | Z1 ARAC.diff bunları `kirilma_disi`'ye topluyor; C1 orada sayıya çevirir |
| `denetle.py:4346 · 4465` | `onek_olcutu` · `mukerrer_maddeler` | `sorted(key=o["t"])` | |
| `denetle.py:4730 · 6378` | `orusuyor` · `degismez_r` | `a["f"] < b["t"]` | örtüşme |
| `denetle.py:1203-1204 · 2265 · 2654 · 3635 · 4206` | `gun_no` · `kapsam_disi` · `_gun_farki.ay` · `artir` · `_gun_no` | `int(s[0:4])` / `split` | **üç ayrı ayrıştırıcı** + `denetle_anakronizm.gun_no` = dört kopya |
| `renk_olc.py:389-390 · 545 · 629 · 885 · 1013` | `ayni_anahtar` · `yakin_renk` · `_cie_evreni` · `denetle` · `engel_kumesi` | `min/max/sorted/<` künye `f/t` | TARAMA: bugün CANLI yanlış (64 dolgusuz künye) |
| `uret_devirler.py:275 · 346 · 348 · 362` | `isgalleri_uret` · `osmanli_govdesi` · `devlet_govdesi` | içerme | motor sonrası üretici (tuz değil) |
| `kodla.py:625` | `_acilis_halkalari` | `p.get("f","9999") <= gun` | açılış dilimi |
Motorun 59 sitesi: `MOTOR-TARIH-TARAMA-1008.md §②`, adıyla. Satır numaraları o tabandan beri kaydı:
Z1 MOTOR.diff ile `uret_petek >2903` +6, `girdi >717` +14; bu tabanda yeniden ölçülmedi.

---

## ② DÖNÜŞÜM SINIRI ve ORTAK İŞLEVİN SÖZLEŞMESİ

### Sınır nerede — her okuyucu değil, YÜKLEYİCİ
| taraf | sınır | ne eklenir | neden orası |
|---|---|---|---|
| Python, yerleşim | `girdi.yukle()` | her dönem dict'ine `fg`/`tg` (int), kayda `kurg`/`bitg` (s/d/v/isg/kd) | motor + denetle + 30'dan fazla araç tek kapıdan okuyor (`§5`: "tek okuma noktası") |
| Python, künye | `girdi.oku_devletler()` | `fg`/`tg` | renk_olc + denetle 4c/4d |
| Python, madde | `denetle.olaylari_yukle()` | `tg` | Değişmez 2 evreni |
| JS, madde | app.js olay yükleyicisi (`:7297`, `gi` zaten burada üretiliyor) | `gi` mevcut, yalnız `gunIdx` gövdesi değişir | 67 `gunIdx` çağrısı DOKUNULMADAN düzelir |
| JS, yerleşim/künye | app.js veri hazırlığı | dönemlere `fi`/`ti` (int) | `sahip` · `_yaSahip` · `isyanMaddeKutusu` |
| node araçları | `odak_cozum.js` (app.js kesiti) | `js/gun.js`i de yükler | `W.gunIdx` app'ten gelir |
- **Dizgi alanı (`f`, `t`, `kur`, `bit`) SİLİNMEZ ve DEĞİŞTİRİLMEZ.** Çıktıda, logda, kimlikte (`t|b`), JSON'da
  aynen kalır. Sayı alanı **yanında** durur. Bu yüzden (③) ODAK-TAVAN anahtarları ve önbellek dışı çıktılar değişmez.
- ⚠️ `girdi.yukle()` alan doğrulaması (`for alan in y`, `:627`) bilinmeyen alanı reddediyor. Sayı alanları
  doğrulamadan **SONRA** eklenmeli; yoksa yükleyici kendi eklediğini reddeder.
- **Neden yerinde int'e çevirme (in-place) değil:** motor dışında 30'dan fazla araç `girdi.yukle()` dizgisini
  basıyor/dilimliyor. Yerinde çevirmek hepsini aynı anda kırar. Paralel alan, okuyucuları **teker teker**
  taşımaya izin verir. Taşınmayan site eski davranışında kalır, kırılmaz.
  ⚠️ Bedeli: taşınmamış bir dizgi kıyası **sessiz** kalır ⇒ tamamlanmayı yalnız ④'ün AST kapısı kanıtlar.

### Ortak işlev — Python `arac/gun.py` + JS `js/gun.js` (İKİZ; aynı vektör dosyasıyla sınanır)
```
gun(s)  → int          dizgi → gün sayısı   (1970-01-01 = 0)
dizgi(n, hass="gun") → str   gün → kanonik dizgi ("YYYY-MM-DD" | "YYYY-MM" | "YYYY"; yıl <0: "-YYYY…")
yil(n)  → int          astronomik yıl
yil_yazi(y) → str      gösterim: y ≥ 1 → "1453" · y ≤ 0 → "MÖ " + (1 − y)     (0 → "MÖ 1")
```
**Girdi dilbilgisi** (tam eşleşme, boşluk yok): `^([+-]?)(\d{1,6})(?:-(\d{2})(?:-(\d{2}))?)?$`
| biçim | örnek | sonuç (ölçüldü, referans) |
|---|---|---|
| YYYY | `1453` | 1453-01-01 = −188.830 |
| YYYY-MM | `1453-05` | 1453-05-01 = −188.710 |
| YYY / 0YYY / +0YYYYY | `908-03-01` · `0908-03-01` · `+000908-03-01` | üçü de **−387.828** |
| −YYYY (astronomik) | `-2999-01-01` | −1.814.890 (= **MÖ 3000**) |
| ±YYYYY(Y) | `-002999-01-01` | aynı |
| geçersiz (`1453/05/29`, `""`, `None`, ay 13) | | **HATA FIRLATIR**: Python `ValueError`, JS `throw` |
- 🔴 **`None`/`NaN` dönmek YASAK.** `_gun_farki`'nin `None`'u, ihlali 11 sitede sessizce geçiren tam bu desen.
  Bilinmeyen bir tarih okuyucuyu durdurur.
- **Algoritma:** Hinnant `days_from_civil` / `civil_from_days`. Yalnız tam sayı ve **taban bölme** var
  (JS'te `Math.floor(a/b)`, Python'da `//`), iki dilde birebir. Referansı `ARAC-GUN-SAYACI-OLCUM-1009.js`te.
- **Takvim: proleptik Gregoryen** (1582 öncesi de). Gerekçe ölçümde: bugünkü `gunIdx` (JS Date) ve `gun_no`
  (Python ordinal) **ikisi de** proleptik Gregoryen. Başka bir seçim bugünkü her günü kaydırır, geriye
  uyumluluk biter. ⚠️ **Kaynak takvimi ayrı bir sorudur:** 1582 öncesi kaynak tarihi Jülyen ise aynı etiket
  Gregoryen sayaçta farklı bir güne düşer (ölçüldü: yıl 1281'de **7**, 1000'de **6**, 1'de **2**, MÖ 1200'de
  **11**, MÖ 3000'de **24** gün). Bu sayaç işi değil. Verinin hangi takvimde yazıldığı (`takvim:` alanı) ayrı
  bir kalem, sayacın sözleşmesine girmez. MÖ çağlarında hassasiyet zaten yıl düzeyinde, ±30 günlük Değişmez 2'yi
  pratikte etkilemez; 1281-1582 gün hassasiyetli Jülyen kaynaklar için ölçülmedi.
- **0 yılı: astronomik (ISO 8601).** Veride MÖ 3000 = `-2999`. JS Date'in iç düzeni de bu (ölçüldü:
  `Date.UTC(-2999,0,1)` doğru gün).
  ⚠️ **Yazım riski:** yazar MÖ 3000 için `-3000` yazarsa bir yıl kayar ve bu **sessizdir**. Önerilen güvence:
  MÖ kaydı insan okunur `gun:"MÖ 3000"` metni de taşır. Denetim, `yil_yazi(yil(gun(t)))` ile metindeki yılı
  karşılaştırır, uyuşmazsa ihlal. Şema satırı (`VERI-YAPISI.md`) koordinatörün.

---

## ③ GERİYE UYUMLULUK
| soru | cevap | dayanak |
|---|---|---|
| bugünkü 4 haneli veri aynı sayıya düşer mi | **EVET, 0100-9999'da her gün** | ölçüm ①: 3.615.900 gün, fark 0 · Python `gun_no−719163`: 3.652.059 gün, fark 0 |
| 3 haneli / dolgulu veri | `908` ≡ `0908` ≡ `+000908` | ölçüm ④ |
| 0001-0099 | bugün YANLIŞ (36.159/36.159), sayaçla doğru. **Davranış değişir**, ama veride bu aralıkta tarih yok (SUMER ölçümü: en eski 0226) | ölçüm ② |
| arayüz gün indeksi (kaydırıcı, `suanki`) | sıfır günü 1970-01-01 aynen kaldığı için aynı | gunIdx eşitliği |
| denetle'nin ordinal'i | iç farklar (gün farkı) değişmez; mutlak değer −719.163 kayar. Mutlak `gun_no` değeri yazan/okuyan bir dosya **ölçülmedi** (C1 öncesi `grep toordinal`) | |
| **motor tuzu** | `girdi.py` + `uret_petek.py` değişir ⇒ tam inşa. **Bir kez:** Z1 MOTOR.diff + TARAMA bulguları + sayaç AYNI koşuda | `§9.1` |
| motor çıktısı (`donemler.js` · `devletler_harita.js`) | dnm `f/t` dizgisi `gun.dizgi(n)` ile basılır = bugünkü 4 haneli biçim ⇒ **bayt düzeyinde aynı beklenir** (MÖ veri yokken) | ④ sınavı `motor_esitlik.py` |
| **odak_cozum.js** | `W.gunIdx` app.js kesitinden geliyor, gövde değişince otomatik. `kimlik(o) = String(o.t)+"|"+b` **ham dizgi** ⇒ dizgi silinmediği sürece **değişmez** | `odak_cozum.js:~455` |
| **ODAK-TAVAN.json anahtarları** (`t\|b`) | **DEĞİŞMEZ** (tasarım veriyi yeniden yazmıyor). ⚠️ İleride 47 dolgusuz madde `0YYY`ye çevrilirse 47 anahtar değişir ⇒ tavan **aynı commit'te** yeniden yazılır (§3.4-2). Bu tasarımın parçası DEĞİL | |
| `renk_olc.py` | **sonuç DEĞİŞİR, iyileşme yönünde**: TARAMA'nın ölçtüğü gizli 10 örtüşme (`ingiltere f:927`) ve 684 "ölçülemedi" çifti görünür olur | TARAMA §HÜKÜM-4. Varsa tavanı aynı commit'te (C1) |
| `denetle.py` çıktısı | MÖ verisi yokken **birebir** beklenir. Tek istisna 64 dolgusuz künyeye dokunan 4c/4d sayıları (pad zaten `c747b411`'de ⇒ fark 0 beklenir) | ④ |

---

## ④ İKİ YÖNLÜ SINAV PLANI (`denetim/ARAC-GUN-SAYACI-SINAV-<tarih>.py` + `.js`; C0 ile iner)

### Yamasız kol — BUGÜN koşturuldu (`ARAC-GUN-SAYACI-OLCUM-1009.js` + Python), sınavın "öter" yönü
| soru | ölçüm (bugün, `67e9ec9d`) |
|---|---|
| `gunIdx("-2999-01-01")` → `idxTarih` | **65683 → y=2149** · `-0499-03-01` → y=1941 · `0000-01-01` → y=1900 |
| `Date.UTC` 0001-0099 (`gunIdx`) | **36.159 / 36.159 gün YANLIŞ** |
| `denetle._gun_farki("-2999-01-01","1281-01-01")` | **None** |
| `denetle.gun_no("-2999-01-01")` | **ValueError** ("year -299 is out of range") |
| dizgi sırası | `-0499 < -1199 < -2999 < 0000 < 1281 < 330` (**iki kusur birden**) |
Yamalı kolda aynı satırlar: y = −2999 · 0 yanlış · sayı · sayı · `-2999 < -1199 < -0499 < 0 < 330 < 1281`.

### Yamalı kol
1. **İkiz eşitliği:** tek bir vektör dosyası (MÖ 3000 → MS 9999 her gün + biçim varyantları + geçersizler)
   hem `gun.py` hem `gun.js` ile koşar. Sonuçlar birebir; geçersizlerin **hepsi** iki dilde de fırlatır.
2. **Gerileme, veri evreninde:** bugünkü **her** tarih dizgisi (yerleşim 36.295 · madde 13.250 · künye 1.792 ·
   üretilmiş `dnm f/t`) için `gun(s) == eski gunIdx(s)` ve `gun(s) == eski gun_no(s) − 719163`. Fark 0 olmalı.
3. **Biçimler:** `YYYY` · `YYYY-MM` · `YYY` · `0YYY` · `-YYYY` · `±YYYYYY` · ay/gün sınırları (29 Şubat; MÖ artık yılları
   astronomik: 0, −4, −2999 değil) · `dizgi(gun(s)) == kanonik(s)` gidiş-dönüş.
4. **Kapılar birebir:** C1 öncesi/sonrası `denetle.py` · `odak_olc.py` · `renk_olc.py` çıktısı. Fark yalnız
   adıyla öngörülen kalemlerde (renk_olc iyileşmesi).
5. **AST kapısı (fail-closed):** `ARAC-MOTOR-TARIH-TARAMA-1008.py` motor + denetle + renk_olc + uret_devirler +
   kodla'ya genişletilir. Yamalı ağaçta **"dizgi tarih kıyası" = 0** olmalı, eşitlik sitelerinde str↔int karışımı
   0. Yamasız ağaçta aynı alet 48+ sayıyı bulmalı (iki yön).
6. **Motor:** C3 tam inşasında `motor_esitlik.py` ile önceki koşuya karşı. MÖ verisi yokken çıktılar aynı olmalı;
   fark yalnız iz/tuz satırları ve Z1 ufkunun öngörülen kesitleri.
7. **Kırmızı çizgi sınavı:** sayıyla karşılaştırılan bir sitede dizgiye geri dönüş (ör. biri `p["f"] <= g`
   yazdı ve `g` int) Python'da **TypeError** ile ÖTMELİ. Eşitlik siteleri ötmez (str ≠ int sessiz False);
   onları 5'teki AST kapısı yakalar.

---

## ⑤ AŞAMALANDIRMA — beş commit
| # | içerik | tuz? | ön şart | yayın |
|---|---|---|---|---|
| **C0** | `arac/gun.py` + `js/gun.js` (yeni, tüketicisiz) + vektör dosyası + sınav (iki kol) · `index.html`e `js/gun.js` satırı | hayır | — | evet (davranış aynı) |
| **C1** | araçlar: `denetle.py` (dört ayrıştırıcı → `gun`; `_gun_farki` None yerine fırlatır) · `denetle_eslesme/statu/gorunur/anakronizm` · `renk_olc.py` · `uret_devirler.py` · `kodla.py` · `girdi.oku_devletler` YOK (tuz!) ⇒ künye sayısı C1'de araç içinde `gun()` ile · AST kapısı · renk_olc tavanı (varsa) aynı commit | hayır | C0 | evet |
| **C2** | arayüz: `gunIdx`/`idxTarih`/`idxYazi` → `gun.js` · `sahip`/`_yaSahip`/`isyanMaddeKutusu` → `fi/ti` · `listeCiz` sayıyla · gösterim (`yil_yazi`: "MÖ 3000") · Z2 `yilDizgi`/`isoDizgi` ile birleşir · `odak_cozum.js` `gun.js`i yükler · surum_damgala | hayır | C0 · Z2 APPJS | evet |
| **C3** | **TUZ:** `girdi.py` (`yukle` → `fg/tg/kurg/bitg`, `kd_gun`, `oku_goller`, `oku_devletler`) + `uret_petek.py` (59 site → sayı; EPOK/KESIT_SON/literal'ler `gun()`; çıktıda `dizgi()`) **+ Z1 MOTOR.diff + MOTOR-TARIH-TARAMA bulguları** — TEK tuz değişimi | **EVET** | C0 · C1 (denetle yeni alanı okuyabilsin) | tam inşa koşusu (HAVVA), `motor_esitlik` |
| **C4** | MÖ veriye İZİN: `VERI-YAPISI.md` şema (astronomik `-YYYY`, `gun:"MÖ n"` çapraz denetimi) + denetle'ye "MÖ yıl ↔ metin" sorusu | hayır | C3 koşusu yayında | evet |
- 🔴 **C4'ten önce tek satır MÖ verisi yazılmaz.** C1-C2 sonrası araçlar ve arayüz MÖ'yü doğru okur ama motor
  C3'e kadar dizgiyle kıyaslar; ters sıralı negatif bir dönem **sessiz** sahipsizlik üretir. Bunu C0'da kapıya
  bağlamak için denetle'ye geçici bir soru eklenir: "veride negatif yıl var ve motor sürümü sayaçsız → ÖLÇÜLEMEDİ".
- C1 ile C2 birbirinden bağımsız, paralel iki işçiye verilebilir. Dosyaları ayrık (`arac/` vs `js/`).
- C3 Z1 paketiyle birleşince Z1'in ARAC.diff'i de C1'e katılır. İkisi de `denetle.py`ye dokunuyor, ayrı işçiye verilmemeli.

---

## ⑥ KAPSAM DIŞI kovası — yeni gerekçe: borç değil, BEYAN EDİLMİŞ TASARIM
Emre (9 Ekim): *"Sümer'de olan şehirler boyanır, gerisi boş görünse de olur."*
- Z1'in iki kovası (`denetle.degismez1_kapsam` KAPSAM DIŞI · `odak` VERİ PENCERESİ DIŞI) bugün "kampanya bitince
  kapanacak borç" gerekçesiyle yazılı. Yeni gerekçe: **kova kalıcıdır, çünkü boş harita bir TASARIM KARARI.**
  Kapanması beklenmez, sayısının sıfıra inmesi hedef değildir.
- **Dört şart aynen:** (1) LİSTE, kalem adıyla · (2) ölçüt VERİ, tarih değil: o devire dokunan tek dönem yoksa
  kovada, veri yazılınca kendiliğinden çıkar · (3) gerçek borçla (309 · SESSİZ 46) asla toplanmaz · (4) beyan,
  artık iki parçalı: `ZAMAN-GENİŞ-1008` + **`TASARIM: Emre 9 Ekim 2026 — "Sümer'de olan şehirler boyanır,
  gerisi boş görünse de olur"`**.
- **Değişmeyen sınır:** "VERİLİ DEVİR DELİĞİ" (o devirde verisi OLAN ama sahipsiz kalan nokta) tasarım değil,
  **borçtur**. Kovaya girmez, tavanı ayrı. Tasarım beyanı yalnız "hiç veri yok"u kapsar, "eksik veri"yi kapsamaz.
- **Ufuk bandı (5/7/10 gün yürüyüş) Sümer çağında AÇIK:** bant motor çıktısı (`MOTOR_UFUK_BANT`, varsayılan
  KAPALI, ortam değişkeni). Sümer kesitlerinde sahipli az sayıda şehrin çevresinde bant çizilir, ötesi boş.
  Bu "boş görünse de olur" kararının görsel karşılığı. Şart: C3 koşusu `MOTOR_UFUK_BANT=5,7,10` ile koşar.
  Bandın seyrek noktada davranışı **ölçülmedi** (bugün en seyrek kesit bile 1281 yoğunluğunda).
- Değişiklik yeri: Z1 ARAC.diff'teki iki yorum bloğu + `odak_olc` satırının beyan metni. Kod mantığı aynı.
  Z1 paketiyle birlikte iner; ayrı commit gerekmez.

## BULAMADIM / ÖLÇMEDİM
- Motor dışı döküm desen tabanlı (AST değil). ④-5 kapısı bu açığı kapatmak için.
- Motorun 59 sitesinin bu tabandaki (`67e9ec9d`) satır numaraları yeniden ölçülmedi (TARAMA `c69b890f`).
- Mutlak `gun_no`/ordinal değerini dosyaya yazan/okuyan araç var mı: ölçülmedi.
- Kaynak tarihlerinin takvimi (Jülyen/Gregoryen, 1281-1582 gün hassasiyetli maddeler): ölçülmedi. Sayaçtan bağımsız kalem.
- Ufuk bandının seyrek (Sümer) kesitte görünümü: ölçülmedi.
- Python'da paralel alanların (`fg/tg`) bellek bedeli (4.300 nokta × ~10 dönem): ölçülmedi, ihmal edilebilir beklenir.

## Dosyalar (`C:\atlas-umit\denetim\`)
`GUN-SAYACI-TASARIM-1009.md` (bu rapor) · `GUN-SAYACI-ENVANTER-1009.tsv` (222 satır döküm) ·
`ARAC-GUN-SAYACI-ENVANTER-1009.py` · `ARAC-GUN-SAYACI-OLCUM-1009.js` (referans algoritma + yamasız kol ölçümü).
