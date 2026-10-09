# MOTOR-TARIH-TARAMA-1008 — motor tuzu dosyalarında üç haneli yıl: tarih karşılaştırması taraması

Oturum: MOTOR-TARIH-TARAMA-1008 (UMIT, alt görev) · 8 Ekim 2026 · ağaç `C:\atlas-mtt` @ `origin/makine/umit` `c69b890f`
Dosyalar (yalnız OKUNDU/içe aktarıldı, dokunulmadı): `arac/uret_petek.py` (8512 satır) · `arac/girdi.py` (884) ·
`arac/motor_onbellek.py` (174) · `arac/renkler.py` (3937). YALNIZ ÖLÇÜM — çare yazılmadı.

## ① ÖNGÖRÜ — ölçümden ÖNCE yazıldı

Sınav anı: worktree açıldı; `GUNNO-PAD-1008.md` ve `ZAMAN-Z1-1008.md` + `-MOTOR.diff` okundu.
Dört dosyanın kodu henüz TARANMADI (ne grep ne AST); yalnız MOTOR.diff'in gösterdiği 7 satır
(`EPOK <= t <= "1923-11-01"` · `sorted(...)` · `ts[-1] != "1923-11-01"`) biliniyor.

**Mekanizma (dil düzeyinde, kodla değil Python ile bilinen):**
- dizgi `<`/`>`/`min`/`max`/`sorted`: 3 haneli ile 4 haneli yıl karışınca **SESSİZCE YANLIŞ**
  (`"900-01-01" > "1281-01-01"` True; `"1000-01-01" < "999-12-31"` True). İki taraf da aynı
  hane sayısındaysa doğru. Şans eseri doğru alt-durum: yıl `1xx` ve karşı yıl ≥ `1x0x`…
  (`"100-…" < "1281-…"`) — kuralsız, güvenilmez.
- `==`/`!=` ve `in` (küme üyeliği): normalize edilmemiş iki yazım ("900-01-01" / "0900-01-01")
  dışında DOĞRU.
- `int(s[:4])` · `s[:4]` dilimi: "900-" ⇒ `int` **ÇÖKÜYOR** (ValueError); `s[:4]` dizgi olarak
  kullanılırsa sessizce yanlış.
- `date.fromisoformat("900-01-01")` **ÇÖKÜYOR** (Python 3.13, 4 hane ister); `"0900-01-01"` çalışır.
- `split("-")` + `int` + `date(y,m,d)`: **DOĞRU** (1 ≤ yıl ≤ 9999; MÖ/0 yıl çöker — bu görevin dışında).

**Sayısal öngörü:**
| soru | öngörü |
|---|---|
| dört dosyada tarih taşıyan karşılaştırma/sıralama/dilim/ayrıştırma sitesi (toplam) | **60–120**; yoğunluk `uret_petek.py`de (~%85), `girdi.py`de 10–20, `motor_onbellek.py` 0–3, `renkler.py` 0–2 (yalnız yorum) |
| kırılgan (dizgi sıralaması: `<`,`>`,`<=`,`>=`,`min`,`max`,`sorted`,`bisect`) | toplamın **~%70'i** — **SESSİZCE YANLIŞ** kovası en büyük kova |
| ÇÖKÜYOR (`fromisoformat`, `strptime`, `int(s[:4])`) | **5–15** site (MOTOR.diff'in `KESIT_SON`'u yeni bir `fromisoformat` ekler ama girdisi `UFUK[1]` = 4 hane ⇒ çökmez) |
| DOĞRU (`==`, `!=`, küme, `split`) | kalan ~%20–30 |
| bugün motora ulaşan üç haneli yıl (yerleşim `s/d/v/isg`, göl `gecerli`) | **0** (GUNNO-PAD ve Z1 ölçtü: yerleşimde 0) |
| motor `devletler.js` `f/t` okuyor mu | **okuyor olabilir** (ömür süzgeci); okuyorsa 64 üç haneli `f:` ORADA motora ulaşır — bugün etkisi: `f` < EPOK ise sonuç yine "erken başladı" yönünde mi değil mi, kıyas yönüne bağlı; öngörü: **en az 1 site bugün CANLI kırılgan** (künye `f:` dizgi kıyası) |
| MOTOR.diff uygulanınca | yeni site sayısı +2..+4 (`KESIT_SON`), kova dağılımı değişmez; `EPOK`=`1000-01-01` 4 hane ⇒ ufuk 1000'de dizgi kıyası hâlâ DOĞRU — kırılma ancak **<1000 veri** girince tetiklenir |
| ufuk 1000'e açılıp 1000–1280 verisi yazılınca | **tetiklenmez** (hepsi 4 hane). Tetikleyen tek şey 3 haneli yıl (yıl < 1000) — yani Z1 ufku TEK BAŞINA güvenli, ufuk <1000'e inerse bütün sıralama kovası canlanır |

> Kapsam iki kez genişledi (koordinatör, 8-9 Eki): ① dolgulu (`0908`) VE dolgusuz (`908`) girdi ayrı denensin ·
> ② GÖSTERİM/DİLİM taraması (`js/app.js` · `arac/odak_cozum.js` · `arac/denetle.py` · `arac/renk_olc.py` + motorun 4 dosyası),
> "0330 sızar mı", "330- – 1461"in kaynağı, Z2 APPJS sütunu. Oturum bir kez yarıda kapandı; worktree korunmuştu, kaldığı yerden sürdü.
> 🔒 Taban: `c69b890f`. `origin/makine/umit` bu arada `8b2f5415`e ilerledi; aradaki farkta `js/app.js` · `arac/` · `data/devletler.js`
> **0 satır** değişti (ölçüldü, `git diff --stat`) — yalnız `ZAMAN-Z2-1008-APPJS.diff` sürüm 2'ye geçti; Z2 sütunu **o güncel
> diff**'le (`8b2f5415`ten alındı) ölçüldü.

## HÜKÜM — beş cümle
1. **Motor (4 dosya) bugün güvende, ama tek bir dolgusuz üç haneli yıl yerleşim verisine girdiği an 48 yerde SESSİZCE yanlış
   çalışır** — hiçbiri çökmez, hepsi sessizdir. En ağırı dönem içerme testi `f <= g < t` (19 site + `girdi.kd_gun`): `f="330-05-11"` olan bir
   dönem `"330-…" <= "1281-…"` False olduğu için **hiçbir kesitte aktif sayılmaz** → o nokta sahipsiz, harita delik.
2. **Dolgulu biçim (`0330-…`) motorun 48 sitesinin 48'ini de DOĞRU çalıştırır** (ölçüldü, her site ayrı). Dolgunun bozduğu tek
   şey **karışık yazım**dır: `"0908-01-01" == "908-01-01"` False → 11 eşitlik sitesi (kırılma günü eşleşmesi `dn["f"] == a`,
   `ts[0] != EPOK` vb.) ancak veri TEK yazımdaysa doğrudur.
3. **Bugün motora üç haneli yıl ulaşmıyor** (yerleşim s/d/v/isg/kd/kur/bit/go 0 · göl 0). Motor `devletler.js`ten yalnız `id`/`harita`
   okur (`uret_petek.py:472`), künye `f/t`sini okumaz. ⇒ Kusur GİZLİ. **Z1 ufku (1000) tek başına tetiklemez** (1000–1280 dört
   hanedir); tetikleyen yıl < 1000 verisidir.
4. 🔴 **AMA motor dışında CANLI bir sessiz-yanlış bulundu — `renk_olc.py` künye `f/t`sini dizgiyle kıyaslıyor ve bugünkü 64 dolgusuz
   künyeyle YANLIŞ sonuç veriyor** (gerçek çağrıyla ölçüldü): `ayni_anahtar()` örtüşen çift **60 (ham) ↔ 70 (pad'li)** — 10 örtüşme
   (hepsi `ingiltere f:927` ↔ ingiliz kolonileri) GÖRÜNMÜYOR; `yakin_renk(kunye=True)` "ölçülemedi" **2.041 ↔ 2.725** — 684 çift
   sessizce "eşzamanlı değil" sayılıp düşüyor; bizans↔bosna örtüşme başı `1281` (ham) ↔ `1180` (pad'li).
5. **"0330" sızar mı: EVET, bugün 15 ekran sitesinde, Z2 uygulanınca 10'unda.** Z2'nin `yilDizgi()`si yalnız 5 `slice(0,4)` sitesini
   (bugünkü "330- – 1461"in kaynağı `app.js:15481 kartCiz` dahil) düzeltiyor; `kesinlikliYazi`/`olayTarihYazi` (yıl hassasiyetli
   `p[0]` ham basımı — UFUK-DISI'nin 64 "0226" bulgusu), `_isyanTarihYazi` (üç modda da `p[0]`), Devletler sekmesi
   `(d.f) + " → " + (d.t)` ve dört ham ISO basımı daha Z2'de de "0330" basar. Dolgusuzda ise Z2 sonrası yalnız bir site bozuk kalır:
   derin anlatım gün-doğrulayıcısı `/^\d{4}-\d{2}-\d{2}$/` (dolgusuz gün-hassasiyetli maddeyi "gün hassasiyetinde değil" diye ELER).

## ② ENVANTER + ③ DAVRANIŞ — KARŞILAŞTIRMA (motorun 4 dosyası)

Alet: `denetim/ARAC-MOTOR-TARIH-TARAMA-1008.py` — **AST** (regex değil), akışa duyarlı taint (tohum: tarih biçimli sabit ·
`["f"|"t"|"kur"|"bit"|"go"|"devir_beyani"]` · `.get(…)` · EPOK/KESIT_SON/UFUK/VERI_UFKU; yayılma: atama, for/comprehension,
`.add/.append` (zincir kökü dahil), `*args`, işlev dönüşü, çağrı→parametre, `split`).
Yöntem: **izole değerlendirme** — site ifadesi aynen alınır; EPOK/UFUK gibi adlar GERÇEK değeriyle, kirli işlenenler test
vektörleriyle doldurulur (tek yuvada 1…999 BÜTÜN yıllar + `0900` + sınırlar = 1.004 vektör; çok yuvada 9 değerin kartezyeni),
Python'un gerçek `<`/`sorted`/`min`/`max` sonucu 4 haneye dolgulu karşılığıyla kıyaslanır. Ayrıca `girdi.kd_gun` GERÇEKTEN çağrıldı.
uret_petek.py içe aktarılamaz (modül düzeyi 4 saatlik koşu) — o yüzden izole.

| | bugün (`c69b890f`) | Z1 MOTOR.diff uygulanmış kopya |
|---|---|---|
| aday site (taint) | 70 | 71 |
| TARİH DEĞİL (yanlış pozitif; 5'i ELLE okunup gerekçeyle ayıklandı) | 11 | 11 |
| **gerçek tarih sitesi** | **59** | **60** |
| 🔴 SESSİZCE YANLIŞ | **48** | **48** |
| ÇÖKÜYOR | 0 | **1** (`uret_petek.py:2908 _dt.date.fromisoformat(girdi.UFUK[1])` — girdisi sabit `1945-09-02`, ancak UFUK[1] < 1000 yazılırsa çöker; bugün etkisiz) |
| DOĞRU | 11 (hepsi `==`/`!=`/`in` — koşul: tek yazım) | 11 |
| dolgulu girdide yanlış | **0 / 48** | 0 / 48 |

Kova dağılımı Z1'de değişmedi; yalnız 7 sitede sabit `"1923-11-01"` → `KESIT_SON` oldu ve satır numaraları kaydı
(uret_petek `> 2903`: **+6**; girdi `> 717`: **+14**). Pencere süzgecinin sızdırdığı dolgusuz yıllar ölçüldü:
bugün `EPOK <= t <= "1923-11-01"` → **13–19 ve 129–192** (71 yıl) içeri girer; Z1'de `1000…1945-09-05` → **11–19 ve 101–194**
(103 yıl). Öteki üç haneli yıllar (ör. 330, 900) şans eseri doğru dışarıda kalır.

### 🔴 SESSİZCE YANLIŞ — 48 site, ADIYLA (hepsi dolgulu girdide DOĞRU)
Mekanizma: dizgi sırası `"900-…" > "1281-…"`, `"1000-…" < "999-…"`. Çare notu: **pad()** = kıyas noktasında ya da `girdi.yukle()`
yükleme anında 4 haneye doldurmak düzeltir (veri tek yazıma çevrilirse de).

| # | dosya:satır | işlev | ifade | ölçüm | çare |
|---|---|---|---|---|---|
| 1 | girdi.py:687 | kd_gun | `p.get("f", "") <= gun < p.get("t", "9999")` | 154/729 vektör · GERÇEK ÇAĞRI: `kd f=900-01-01`, gün 1281 → `(0,None)` (doğrusu k=3) | pad() |
| 2 | girdi.py:733 | oku_goller | `gec.get("f", UFUK[0]) > UFUK[0]` | 966/1004 | pad() |
| 3 | girdi.py:733 | oku_goller | `gec.get("t", UFUK[1]) < UFUK[1]` | 895/1004 | pad() |
| 4 | uret_petek.py:4570 | (modül) Osmanlı kesitleri | `sorted(t for t in tarihler if …)` | sıra: `['1000','1281','900','999']` | pad() |
| 5 | uret_petek.py:4570 | (modül) | `EPOK <= t <= "1923-11-01"` | 71/1004 | pad() |
| 6 | uret_petek.py:4801 | _sahipli | `p["f"] <= g < p["t"]` | 154/729 | pad() |
| 7-8 | uret_petek.py:4927 | _kusatilmis | `y["kur"] > g` · `y["bit"] <= g` | 27/81 · 27/81 | pad() |
| 9-10 | uret_petek.py:4945 | _kusatilmis | `yj["kur"] > g` · `yj["bit"] <= g` | 27/81 | pad() |
| 11-12 | uret_petek.py:4981 | _kusatilmis | `yj["kur"] > g` · `yj["bit"] <= g` | 27/81 | pad() |
| 13-14 | uret_petek.py:5019 | devir_kumesi | `y["kur"] > g` · `y["bit"] <= g` | 27/81 | pad() |
| 15 | uret_petek.py:5423 | (modül) varlık epokları | `sorted({kur…} ∪ {bit…})` | dizgi sırası | pad() |
| 16 | uret_petek.py:5728 | don_kose_kur | `rs.sort(key=lambda x: x[1])` | dizgi sırası (alet `*kaynaklar` → demet yolunu izledi) | pad() |
| 17 | uret_petek.py:5733 | don_kose_kur | `fk >= ti` | 27/81 | pad() |
| 18-19 | uret_petek.py:5876 | (modül) BÖLGELER | `min(dn["f"] …)` · `max(dn["t"] …)` | min→`1000` (doğrusu 900) · max→`999` (doğrusu 1281) | pad() |
| 20 | uret_petek.py:5977 | _eski_yabanci_taban | `_p["f"] <= _g < _p["t"]` | 154/729 | pad() |
| 21-22 | uret_petek.py:6353 · 6357 | _dolgu_kumesi | `dn["f"] <= a < dn["t"]` · `sp["f"] <= a < sp["t"]` | 154/729 | pad() |
| 23-24 | uret_petek.py:6401 · 6402 | _dolgu_kumesi | `y["kur"] > a` · `y["bit"] <= a` | 27/81 | pad() |
| 25-26 | uret_petek.py:6598 · 6599 | _osm_aktif | `dn["f"] <= a < dn["t"]` (d ve v) | 154/729 | pad() |
| 27-28 | uret_petek.py:6636 | (modül) yabancı kesit | `sorted(…)` · `EPOK <= t <= "1923-11-01"` | dizgi sırası · 71/1004 | pad() |
| 29 | uret_petek.py:6644 | (modül) | `sp["f"] <= _wa < sp["t"]` | 154/729 | pad() |
| 30 | uret_petek.py:6737 | _gun_sahipleri | `sp["f"] <= a < sp["t"]` | 154/729 | pad() |
| 31-32 | uret_petek.py:6890 | _yabanci_devlet_faz1 | `sorted(…)` · `EPOK <= t <= "1923-11-01"` | dizgi sırası · 71/1004 | pad() |
| 33 | uret_petek.py:6903 | _yabanci_devlet_faz1 | `sp["f"] <= a < sp["t"]` | 154/729 | pad() |
| 34-35 | uret_petek.py:7158 | (modül, paralel kapalı yolu) | `sorted(…)` · `EPOK <= t <= "1923-11-01"` | dizgi sırası · 71/1004 | pad() |
| 36 | uret_petek.py:7169 | (modül) | `sp["f"] <= a < sp["t"]` | 154/729 | pad() |
| 37 | uret_petek.py:7392 | himaye_gruplari | `p["f"] <= a < p["t"]` | 154/729 | pad() |
| 38-39 | uret_petek.py:7563 · 7565 | (modül) | `dn["f"] <= _a < dn["t"]` (v, d) | 154/729 | pad() |
| 40-41 | uret_petek.py:7580 · 7583 | (modül) dönemler | `dn["f"] <= a < dn["t"]` (v, d) | 154/729 | pad() |
| 42-43 | uret_petek.py:7705 · 7741 | (modül) | `p["f"] <= a < p["t"]` | 154/729 | pad() |
| 44 | uret_petek.py:8304 | _yabanci_g | `p["f"] <= g < p["t"]` | 154/729 | pad() |
| 45 | uret_petek.py:8314 | _alan_g | `d["f"] <= g < d["t"]` | 154/729 | pad() |
| 46 | uret_petek.py:8420 | (modül) ölçü kesiti | `g < _oyn[0][0][:10]` | 27/81 | pad() |
| 47 | uret_petek.py:8420 | (modül) ölçü kesiti | `_oyn[0][0][:10]` (etiket "1300-06-15 (yabancı)") | `"900-06-15 (yabancı)"[:10]` → `"900-06-15 "` | **başka çare**: sabit genişlik varsayımı; etiket boşlukla bölünmeli (OLCU_KESIT bugün sabit 4 haneli ⇒ etkisiz) |
| 48 | uret_petek.py:8490 | (modül) | `"1830-01-01" <= d["f"] <= "1842-12-31"` | 1/1004 (yalnız yıl 184 sızar) | pad() |

**DOĞRU (11):** `uret_petek.py` 4571 · 4572 · 6638 · 6892 · 6893 · 7160 · 7161 (`ts[0] != EPOK`, `ts[-1] != "1923-11-01"`) ·
4920 · 6329 (önbellek üyeliği) · 7627 · 7629 (`dn["f"] == a`, giren/çıkan). Sıra kullanmazlar; **ama karışık yazımda yanlış**
(`'0908-01-01' == '908-01-01'` → False). ⚠️ Ek risk: motor (Z1 `KESIT_SON`) ve denetle (`artir`, `_d8_gun_once`,
`kapsam_disi`) `.isoformat()` ile tarih ÜRETİR ve Python **her zaman dolgulu** üretir (`date(330,5,11).isoformat()` →
`'0330-05-11'`). Veri dolgusuz kalırsa, üretilen gün ile veri günü aynı gün için iki yazımda olur.
**TARİH DEĞİL (11):** 5'i elle okundu (`ELLE_TARIH_DEGIL`, satır/gerekçe alette): 5551 `{a for _, a in _kus_kayit}` (ad) ·
5555 · 5559 · 5735 `sk != si` (sahip kimliği) · 5738 `q in out` (köşe); 6'sı kuralla (`is None`, `"ak" in h`, `abs()` anahtarlı max, liste dilimi ×2, `"(yabancı)" not in`).

## ④ GİRDİ EVRENİ — bugün üç haneli yıl motora ulaşıyor mu? **HAYIR (0).**
`girdi.yukle()` (4.300 kayıt) + `oku_devletler()` (896) + `oku_goller()` (1), alet `girdi_evreni()`:

| alan | tarih | dolgusuz üç haneli | dolgulu 0xxx |
|---|---|---|---|
| yerleşim `s.f/t` | 14.453 / 14.453 | 0 | 0 |
| yerleşim `d` · `v` · `isg` · `kd` (f/t) | 1.318 · 561 · 371 · 692 | 0 | 0 |
| yerleşim `kur` · `bit` · `go` · `devir_beyani` | 1.476 · 21 · 13 · 1 | 0 | 0 |
| göl `gecerli.f/t` | 1 / 1 | 0 | 0 |
| künye `f` (motor OKUMAZ) | 896 | **64** | **32** |
| künye `t` | 896 | 0 | **14** |
| künye-içi `kronoloji[].t` | 3.186 | **47** | **62** |

⇒ `devletler.js` bugün **iki yazımı karışık** taşıyor (koordinatörün emsali doğrulandı: `mekke-serifligi 0969`, `norse-gronland 0985`,
`sasani 0226`… 32 dolgulu `f` · `bizans 330`, `venedik 697`… 64 dolgusuz `f`).
**Tetikleme eşlemesi:** ufuk 1000'e açılıp 1000–1280 verisi yazılınca motor sitelerinin **hiçbiri** tetiklenmez (dört hane). Yıl < 1000
yazıldığı anda: dolgusuzsa **48 sitenin tamamı** (dönem içerme 19 + kd_gun 1, `kur/bit` 10, sıralama/min/max 8, EPOK penceresi 4, göl `gecerli` 2, diğer 4); dolguluysa **0**
— ama dolgulu ve dolgusuz karışırsa 11 eşitlik sitesi.

## ⑤ KARŞILAŞTIRMA — motor DIŞI (ek; `--ek`, aynı alet)
`arac/renk_olc.py`: **19 SESSİZCE YANLIŞ**, bunların künye okuyanları **BUGÜN CANLI** (yukarıdaki HÜKÜM-4; gerçek çağrı ölçümü,
`scratchpad/renk_canli.py` deseni rapora yazıldı):
`389` `sorted(kayitlar, key=x["f"])` · `390` `a["f"] < b["t"]` / `b["f"] < a["t"]` (ayni_anahtar) · `545`/`629`/`1013`
`min(dv["f"], e[0])`/`max(dv["t"], e[1])` (künye penceresi) · `885` `max(a["f"], b["f"])`/`min(a["t"], b["t"])` (rapor satırı) ·
`442`/`536`/`621`/`1002` aynı desen yerleşim tarafında (bugün etkisiz). **Alet KAÇIRDI, elle bulundu:** `561` `fa < tb and fb < ta`,
`563` `max(fa, fb)`/`min(ta, tb)`, `565` `pa[2] < T` (değerler `zarf[d] = …` abone atamasıyla dolaşıyor — taint abone atamasını izlemiyor).
Tümü **pad() ile düzelir**; künye verisi dolguluya çevrilirse de düzelir (ölçüldü: pad'li veriyle 70 / 2.725).
`arac/denetle.py`: 69 SESSİZCE YANLIŞ adayı — **2'si yanlış pozitif** (`2966`/`2976` `pad(kt)`/`pad(kf)`; GUNNO'nun yaması, gerçek
`gun_no` çağrısı iki biçimde de DOĞRU: `330-05-11` ve `0330-05-11` → 120295). Kalan 67 yerleşim/olay evreninde (GUNNO bilerek
yamalamadı; bugün etkisiz). Gerçek ÇÖKME yolları aşağıda GÖSTERİM tablosunda.

## ⑥ GÖSTERİM / DİLİM — "0330 sızar mı?"
Aletler: Python → `ARAC-MOTOR-TARIH-TARAMA-1008.py --gosterim` (AST; kirli KAYNAK düğümleri girdiyle değiştirilip ifade
GERÇEKTEN `eval` edilir). JS → `ARAC-MOTOR-TARIH-TARAMA-1008-GOSTERIM.js` (node): biçimleyiciler dosyadan ayrıştırılıp vm'de
**gerçek çağrılır**; satır içi ifadeler dosyada **birebir** aranır (bulunamazsa "YOK" — uydurma satır yok) ve aynı metin değerlendirilir.
Girdi: gün `330-05-11` / `0330-05-11`, yıl `330-01-01` / `0330-01-01`.

### ⑥a js/app.js — bugün ve Z2 (sürüm 2) uygulanmış
| site | bugün satır | dolgusuz (gün · yıl) | dolgulu (gün · yıl) | Z2 satır | Z2 dolgusuz | Z2 dolgulu |
|---|---|---|---|---|---|---|
| **kartCiz saltanat** (devlet kartı) `(d.f).slice(0,4)+" – "+(d.t).slice(0,4)` | **15481** | 🔴 `330- – 1461` | 🔴 `0330 – 1461` | 15779 `yilDizgi` | `330 – 1461` ✓ | `330 – 1461` ✓ |
| kur yılı (dizin) `s.kur.slice(0,4)` | 9465 | 🔴 `330-` | 🔴 `0330` | 9682 | `330` ✓ | `330` ✓ |
| kuruluş yılı `y.kur.slice(0,4)` | 9527 | 🔴 `330-` | 🔴 `0330` | 9744 | ✓ | ✓ |
| Osmanlı dönem ilk/son yıl `dn[0].f.slice(0,4)` · `…t.slice(0,4)` | 9593 · 9594 | 🔴 `330-` | 🔴 `0330` | 9810 · 9811 | ✓ | ✓ |
| `kesinlikliYazi` / `olayTarihYazi` (yıl hassasiyetli `p[0]`) | 43 · 50 | `11 Mayıs 330` · `330` ✓ | `11 Mayıs 330` · 🔴 **`0330`** | 56 · 82 | ✓ | 🔴 **`0330`** (UFUK-DISI: 64 etiket "0226" vb.) |
| ↳ çağıranlar | 7489 · 7584 · 9437 · 9442 · 14683 · 14685 | | | 7648 · 7743 · 9654 · 9659 · 14973 · 14981 · 14983 · (92 kisaTarihYazi içi) | | |
| `_isyanTarihYazi` (yil · ay · gün) | 5229 (çağıran 5258) | `330` · `Mayıs 330` · `11 Mayıs 330` ✓ | 🔴 `0330` · `Mayıs 0330` · `11 Mayıs 0330` | 5374 (5403) | ✓ | 🔴 aynı |
| Devletler sekmesi satırı `(d.f) + " → " + (d.t)` | 9659 | `330-05-11 → …` (ham ISO) | 🔴 `0330-05-11 → …` | 9876 | ham ISO | 🔴 `0330-05-11` |
| yerleşim çubuğu dilim title `p.f + " → " + p.t` | 9338 | ham ISO | 🔴 `0330-…` | 9501 | ham | 🔴 |
| yerleşim dönem satırı `p.f + " → " + p.t` | 9561 | ham ISO | 🔴 `0330-…` | 9778 | ham | 🔴 |
| tarihe git durum `(og.m.t).slice(0,10)` | 14672 | ham ISO | 🔴 `0330-05-11` | 14958 `kisaTarihYazi` | `330-05-11` · `330` | 🔴 `0330-05-11` · `0330` |
| birleşik liste madde `(o.t).slice(0,10)` | 15421 | ham ISO | 🔴 | 15719 `kisaTarihYazi` | ham · `330` | 🔴 |
| odak kronoloji madde `(m.t).slice(0,10)` | 15514 | ham ISO | 🔴 | 15816 `kisaTarihYazi` (içi :90) | ham · `330` | 🔴 |
| derin anlatım adım başlığı `a.t + " — " + a.b` | 16106 | ham ISO | 🔴 | 16408 | ham | 🔴 |
| sefer vuruş title `" · " + v.t` | 5630 | ham ISO | 🔴 | 5775 | ham | 🔴 |
| derin anlatım gün-doğrulayıcı `/^\d{4}-\d{2}-\d{2}$/.test(a.t)` | 15974 | 🔴 **false → madde ELENİR** | true ✓ | 16276 | 🔴 false | ✓ |
| `idxYazi(gunIdx(s))` (sayısal yol) | 23 | `11 Mayıs 330` ✓ | ✓ | 23 | ✓ | ✓ |
| `yilDizgi` | — | — | — | 78 | `330` ✓ | `330` ✓ |

Sayım: **"0330" sızan ekran sitesi bugün 15** (5 `slice(0,4)` + 2 biçimleyici ailesi + 8 ham basım) · **Z2'de 10**
(`kesinlikliYazi`/`olayTarihYazi` ailesi · `_isyanTarihYazi` · `kisaTarihYazi` ×3 çağrı · 5 ham ISO basım: 9876 Devletler sekmesi,
9501, 9778, 16408, 5775 — ikisi title/tooltip). **Dolgusuzda bozuk ekran sitesi bugün 6** (5 `slice(0,4)` → `330-` + 15974
doğrulayıcı) · **Z2'de 1** (16276 doğrulayıcı).
**"330- – 1461"in kaynağı:** bugün `js/app.js:15481 kartCiz` (devlet kartı saltanat satırı). Aynı `slice(0,4)` deseni 4 yerde daha
(9465 · 9527 · 9593 · 9594) — Z2'nin düzelttiği 5 yer TAM bunlar. **Z2 sonrası app.js'te tarih üstünde `slice(0,4)` KALMIYOR**
(ölçüldü: kalan iki `slice(0,4)` biri yorum `:77`, biri `kisiler.split(...)` listesi `:10989`).
`arac/odak_cozum.js`: sabit genişlikli tarih dilimi **0**; tarih `W.gunIdx` (split) ile sayıya çevriliyor ✓. ⚠️ AMA kimlik anahtarı
`String(o.t) + "|" + b` (`:458`, `:424`): `denetim/ODAK-TAVAN.json`da bu biçimde **49 dolgusuz + 65 dolgulu** üç haneli yıllı anahtar
var — künye-içi `kronoloji[].t` dolguluya çevrilirse bu 49 anahtar ESKİR (beyanlı borç adını kaybeder, kapı "yeni kırık" görür;
§3.4-5 ölü istisna). Çevrim ile `ODAK-TAVAN.json` aynı commit'te güncellenmeli (§3.4-2).

### ⑥b Python — dilim / ayrıştırma / basım (6 dosya)
| site | dolgusuz | dolgulu | not |
|---|---|---|---|
| `denetle.py:4478 mukerrer_maddeler` `S[i]["t"][:4]` (rapor yılı) | 🔴 `330-` | 🔴 `0330` | **başka çare** (`int(split)` ya da `yilDizgi` muadili) |
| `renk_olc.py:715 · 924 · 932` `(F or '')[:4]-(T or '')[:4]` (elle bulundu; alet `F,T` demet yolunu izleyemedi) | 🔴 `330--1461` | 🔴 `0330-1461` | başka çare (aynı) |
| `denetle.py:2243-2249 kapsam_disi` `(d+"-01-01")[:10]` → `int(g[:4])` | 🔴 **ÇÖKER** (`'330-05-11-'` → ValueError) | ✓ 330 | pad() |
| `denetle.py:5071 _d8_gun_once` `date.fromisoformat(g)` | 🔴 **SESSİZ None** (ValueError yakalanıyor; gerçek çağrı) | ✓ `0330-05-10` | pad() |
| `denetle.py:6080` `date.fromisoformat(s/b)` (BAYAT KOPYA raporu) | 🔴 ÇÖKER | ✓ | pad() |
| `denetle.py:1197 gun_no` `int(s[0:4])` | ✓ (GERÇEK çağrı 120295 — GUNNO `pad()` önce koşuyor; izole değerlendirme pad'i atladığı için ÇÖKER dedi, **yanlış alarm**) | ✓ | — |
| `denetle.py:2638 ay` · `3612 artir` · `4183 _gun_no` `split("-")` | ✓ | ✓ | `artir` sonucu `.isoformat()` → **dolgulu üretir** |
| `uret_petek.py:8420` `_oyn[0][0][:10]` | ✓ (etiket kısa) | ✓ | (karşılaştırma tablosu #47) |
| f-string içinde ham tarih basımı | 121 site (denetle 93 · uret_petek 20 · renk_olc 6 · girdi 2) | aynen `0330-05-11` — **rapora ISO olarak sızar** (geçerli ISO 8601; "0330" yıl etiketi DEĞİL) | liste: `--gosterim --json` → `*-basim.json` |

## ② NE BULAMADIM / ÖLÇEMEDİM
- **Motor çıktısı ölçülmedi** — koşu yok. "48 site → harita deliği" bir koşu çıktısı değil, izole değerlendirme + kod okumadır.
- **uret_petek.py içe aktarılamadı** (modül düzeyi koşu): 48 sitenin hepsi **izole** değerlendirildi; gerçek çağrı yalnız
  `girdi.kd_gun` (+ motor dışı `denetle.gun_no`, `denetle._d8_gun_once`, `renk_olc.ayni_anahtar`, `renk_olc.yakin_renk`).
- **Alet kaçakları (bildiriyorum):** taint abone atamasını (`zarf[d] = …`) ve demet içinden okunan `F,T`'yi izlemiyor →
  `renk_olc.py:561/563/565` ve `715/924/932` elle bulundu. Motorun 4 dosyasında ayrıca `sorted/min/max/<` taranıp elle süzüldü
  (`kacak` taraması), kaçan yalnız `don_kose_kur` çıktı ve alet düzeltilip yakaladı. Başka kaçak **bulunamadı** — "yok" değil.
- **app.js KARŞILAŞTIRMALARI taranmadı** (görev yalnız gösterim istedi). Örnek: `:15508` `(a.t).localeCompare(b.t)` odak kronolojisini
  dizgiyle sıralıyor — karışık yazımda (0969 ↔ 969) sıra bozulur. `kesinlikliYazi`'nin `gunMetniIdx` `(\d{4})` regex'i `gun` METNİNDEKİ
  üç haneli yılı okumaz (veri biçiminden bağımsız) — ölçülmedi.
- `arac/dolgu.py` (`uret_petek.py:8172` içe aktarır, `MOTOR_B_DOLGU=1`): `:946 sorted({a[0]…})`, `:955 f <= a < t` dizgi kıyası — motor
  tuzunda DEĞİL, kapsam dışı; ölçülmedi.
- Öngörü karnesi aşağıda.

## ③ NE İSTİYORUM
1. **Karar (Emre/koordinatör):** veri tek yazıma. Ölçüm iki yolu ayırıyor: **dolgulu** → motor 48/48, renk_olc 19/19 DOĞRU, Python
   `isoformat` ile aynı yazım; bedeli ekranda "0330" sızıntısı (Z2 sonrası 10 site — hepsi `yilDizgi`/`Number(p[0])` türü tek
   satırlık işler) + `ODAK-TAVAN.json` 49 anahtar. **dolgusuz** → motorda 48 + renk_olc'de 19 site `pad()` ister.
2. 🔴 **renk_olc.py BUGÜN yanlış** (60↔70, 2.041↔2.725) — yalnız ölçtüm, düzeltmedim; sahibine iş kalemi olarak.
3. Derin anlatım doğrulayıcısı (`app.js:15974` / Z2 `16276`) dolgusuz veride gün-hassasiyetli maddeyi eler — Z2'ye bildirilsin.
4. Motor yaması (pad) yazılacaksa §9.1 gereği tam inşa koşusunda, Z1 diff'iyle aynı commit'te.

## ÖNGÖRÜ KARNESİ
| öngörü | ölçüm | hüküm |
|---|---|---|
| toplam 60–120 site, ~%85 uret_petek | 59 gerçek (70 aday), uret_petek 56/59 = %95 | ✓ aralıkta |
| girdi.py 10–20 | 3 | ✗ fazla |
| motor_onbellek 0–3 · renkler 0–2 | 0 · 0 | ✓ |
| kırılgan ~%70, en büyük kova SESSİZCE YANLIŞ | 48/59 = %81 | ✓ (oran fazla) |
| ÇÖKÜYOR 5–15 | **0** (Z1'de 1, latent) | ✗ ÇÜRÜDÜ — motor hiç `int(s[:4])`/`fromisoformat` kullanmıyor |
| DOĞRU %20–30 | 11/59 = %19 | ≈ |
| bugün motora üç haneli yıl 0 | 0 | ✓ |
| motor künye f/t okuyor olabilir, en az 1 site CANLI | motor okumuyor (yalnız id/harita) → motorda canlı 0 | ✗ ÇÜRÜDÜ — ama aynı öngörü **renk_olc.py'de** doğru çıktı |
| Z1: +2..+4 site, kova değişmez | +1 site (fromisoformat), kova değişmedi | ✓ |
| ufuk 1000 tek başına tetiklemez | tetiklemez (sızan yıllar yalnız <1000) | ✓ |

## Dosyalar
- `denetim/MOTOR-TARIH-TARAMA-1008.md` — bu rapor (öngörü en üstte, ölçümden önce yazıldı)
- `denetim/ARAC-MOTOR-TARIH-TARAMA-1008.py` — `py … [KÖK] [--json YOL] [--gosterim] [--ek]` (yalnız okur; çıkış 0/2)
- `denetim/ARAC-MOTOR-TARIH-TARAMA-1008-GOSTERIM.js` — `node … bugun=js/app.js z2=<Z2 uygulanmış app.js>`
