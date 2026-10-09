# GUNNO-PAD-1008 — üç haneli yıl: `gun_no` ve dizgi tarih karşılaştırması

## ① ÖNGÖRÜ — ölçümden ÖNCE yazıldı (8 Ekim 2026)

Sınav anı: worktree `C:\atlas-gunno` = `origin/makine/umit` `d8e4e07b` açıldı;
yalnız `denetle.py`deki `gun_no`/`tam`/`_gun_no`/`_gun_farki` tanımları ve
`degismez4` gövdesi OKUNDU, veri sayımı ve `denetle.py` henüz KOŞULMADI.
Evren: `data/devletler.js` (896 künye) · `girdi.py`nin okuduğu yerleşim dosyaları ·
`olaylar*.js` + `kronoloji_sinir*.js`.

1. **Kayıt sayısı:** görevin verdiği 111 (künye `f:` 64 + künye-içi `kronoloji[].t` 47)
   tutar. EK öngörü: künye `t:` alanında da üç haneli yıl VARDIR (ör. 1000 yılından
   önce biten bir devlet) — görev metni bunu saymamış olabilir; ölçülecek.
   Negatif/MÖ yıl: devletler.js'te OLABİLİR (hedef MÖ 12000); varsa `int(s[0:4])`
   bambaşka çöker — ölçülecek, sayısı tahmin edilmiyor.
2. **Yerleşim (`s:`/`d:`/`v:`/`isg:`) ve olay (`OLAYLAR*`, `KRONOLOJI_SINIR*`) `t:`
   alanlarında üç haneli yıl: 0.** Bu yüzden `gun_no` bugün hiç çökmüyor.
3. **Etkilenen işlevler:**
   - `gun_no` — `int(s[0:4])` "900-01-01"de `"900-"` ⇒ **ValueError** (çöker).
   - `_gun_no` (mükerrer/önek) — `split("-")` kullanıyor ⇒ üç haneli yılı DOĞRU okur
     (çökmez); yalnız sıralaması `sorted(key=o["t"])` dizgi ⇒ yanlış sıralar.
   - `_gun_farki` — `split("-")` ⇒ doğru (çökmez, doğru gün farkı).
   - `degismez4` dizgi karşılaştırmaları: `kf > ATLAS_BASI` (üç haneli kf'de YANLIŞ
     True), `kt < ATLAS_SONU` (üç haneli kt'de YANLIŞ False), `min(a[0] …)` /
     `max(a[1] …)` çok künyeli `harita:` anahtarında (YANLIŞ en erken).
   - `degismez7` `f <= "1281-01-01"`, `degismez1` `kur > g` vb. yerleşim dizgileri —
     veride üç haneli yıl yoksa (madde 2) bugün etkisiz.
4. **Yamadan sonra `denetle.py` sayıları: DEĞİŞMEZ (fark 0), çıkış kodu aynı (2).**
   Mekanizma ayrı: `kf > ATLAS_BASI`nın yanlış True'su arkasındaki
   `_gun_farki(kf, p.f) > tolerans` korumasında negatif çıkıp düşer;
   `kt < ATLAS_SONU`nun yanlış False'u, üç haneli `kt`li bir dönem zaten önceki
   `ihlal` dalında (`continue`) yakalandığı için görünmez; `min()` yalnız
   `cok_harita` dalında koşar. ⇒ Kusur GİZLİDİR, sayıya yansımaz.
   ⚠️ Risk: çok künyeli bir `harita:` anahtarının adaylarından biri üç haneli `f:`
   taşıyor ve `_harita_tarih_sec` None dönüyorsa `min()` farklı kf seçer ve `once`
   sayacı oynayabilir. Ölçülecek; öngörü "oynamaz".


## ÖNGÖRÜ KARNESİ (ölçüldükten sonra)
| öngörü | ölçüm | hüküm |
|---|---|---|
| 111 = f 64 + kronoloji.t 47 | 111 = f 64 + kronoloji.t 47 | ✓ tuttu |
| künye `t:`de de üç haneli yıl VAR | **0** (896 künyenin hiçbiri 1000'den önce bitmiyor) | ✗ ÇÜRÜDÜ |
| negatif/MÖ yıl: belirsiz | 0 | — |
| yerleşim + olay evreninde üç haneli yıl 0 | yerleşim 4300 kayıt · 0 — olay 2207 madde · 0 | ✓ |
| `gun_no` çöker, `_gun_no`/`_gun_farki` çökmez | sınav S2: 111/111 ValueError · `_gun_farki` `split` kullanır | ✓ |
| `denetle.py` sayıları değişmez, çıkış 2 | çıktı 349 satır, ham `diff` **0 satır**, çıkış 2 → 2 | ✓ |
| `min()` riski (`cok_harita`) oynamaz | çok künyeli `harita:` anahtarında üç haneli yıllı aday **0**; 4c/4d aynı | ✓ |

## ② ENVANTER — `denetle.py`de tarih okuyan/karşılaştıran yerler
Üç haneli yıl taşıyan TEK evren `data/devletler.js`tir (künye `f:` + künye-içi
`kronoloji[].t`). `denetle.py` künye-içi `kronoloji`yi HİÇ okumaz (anahtar geçmiyor);
künye `f`/`t`yi yalnız `_devletler_yukle` → `degismez4` ve `_devletler_harita` →
`_harita_tarih_sec` okur (`degismez_r` künyeden yalnız `id`/`harita` alır).

| yer | ne yapar | üç haneli yılda | bugün etkisi | yama |
|---|---|---|---|---|
| `gun_no` (+ `denetle_eslesme` · `denetle_statu` · `denetle_tutarlilik` dışarıdan çağırır) | `int(s[0:4])` | **ValueError** ("900-") | 0 — girdileri olay `t` + yerleşim kırılması; ikisinde de üç haneli yıl 0 | `tam(pad(s))` |
| `tam` | `len==7` ⇒ `-01` ekle | "900-05" (len 6) genişlemez | 0 | dokunulmadı (`gun_no` önce pad eder; `denetle_eslesme:196` `tam`ı anahtar olarak kullanıyor — dönüşü değiştirilmedi) |
| `degismez4` `kf > ATLAS_BASI` | dizgi | **YANLIŞ True** (64 künyenin hepsi; 20'si yerleşimde kullanılıyor) | 0 — arkasındaki `_gun_farki(kf, p.f) > tolerans` negatif çıkar, dal düşer | `pad(kf)` |
| `degismez4` `kt < ATLAS_SONU` | dizgi | üç haneli `kt`de YANLIŞ False | 0 — üç haneli `t:` 0 kayıt | `pad(kt)` |
| `degismez4` `min/max(a[0]/a[1])` (`cok_harita` dalı) | dizgi min/max | "900" > "1281" ⇒ yanlış "en erken" | 0 — çok künyeli `harita:` anahtarında üç haneli aday 0 | `key=pad` |
| `_harita_tarih_sec` → `_gun_farki` | `split("-")` + `date` | DOĞRU | — | gerek yok |
| `_gun_no` (mükerrer/önek) | `split("-")` | DOĞRU | — | gerek yok; çağıranı `sorted(O, key=o["t"])` dizgi sıralar (olay evreni, üç haneli 0) |
| `degismez1`/`1b`/`3`/`5`/`7`/`8`/`R`, `donem_sagligi`, `zincir_kaynagi` | yerleşim `f/t` dizgi `<`/`<=` (`f <= g < t`, `f <= "1281-01-01"` …) | yanlış sıralar | 0 — yerleşim evreninde üç haneli yıl 0 | **yamalanmadı** (en küçük değişiklik; ③'te öneri) |
| `_d8_gun_once` | `date.fromisoformat` | ValueError yakalanır, `None` (sessiz) | D8 hatlarında üç haneli yıl yok | yamalanmadı |

`arac/` altında denetle'nin çağırdığı `girdi.py` (`kd_gun`) ve `paket_coz.py` künye
tarihi okumuyor. `data/kimlikler.js` (15 üç haneli tarih) EMEKLİ, denetle okumuyor;
`paket_05.js` paketlenmiş kopya, denetle okumuyor.

## ③ 111 KAYIT — ADIYLA
Gerçek okuyucu: node `eval(devletler.js)`; sınav S1 aynı sayıyı `denetle._devletler_yukle`
ile bağımsız sayar. Biçim: 111'in hepsi `YYY-MM-DD` (1-2 haneli 0 · negatif 0).
Künye `t:` üç haneli: 0. Sayı 111 TUTTU (fark 0).
```
id | alan | değer | (künye f için t= ve harita=)
bizans | f | 330-05-11 | t=1461-08-15
venedik | f | 697-01-01 | t=1797-05-12
polonya-erken | f | 966-01-01 | t=1569-07-01
papalik | f | 756-01-01 | t=1870-09-20
fransa | f | 987-01-01 | t=1792-09-22
ingiltere | f | 927-01-01 | t=1945-09-02
sirvansah | f | 861-01-01 | t=1538-01-01
sirvansah | kronoloji[0].t | 861-01-01
yemen-zeydi | f | 897-01-01 | t=1962-09-26 | harita=yemen
almanya | f | 962-02-02 | t=1945-06-05
danimarka | f | 950-01-01 | t=1945-09-02
dubrovnik | f | 700-01-01 | t=1808-01-31
nube | f | 543-01-01 | t=1504-01-01
nube | kronoloji[0].t | 543-01-01
nube | kronoloji[1].t | 651-01-01
norvec-kralligi | f | 872-01-01 | t=1537-01-01
song | f | 960-01-01 | t=1279-03-19
song | kronoloji[0].t | 960-01-01
goryeo | f | 918-01-01 | t=1392-07-17
goryeo | kronoloji[0].t | 918-01-01
poni | f | 977-01-01 | t=1405-01-01
poni | kronoloji[0].t | 977-01-01
kanem-bornu | f | 800-01-01 | t=1905-01-01
kanem-bornu | kronoloji[0].t | 800-01-01
iskocya | f | 843-01-01 | t=1707-05-01
iskocya | kronoloji[0].t | 843-01-01
bretanya | f | 939-01-01 | t=1532-08-13
bretanya | kronoloji[0].t | 939-01-01
navarra | f | 824-01-01 | t=1620-10-19
navarra | kronoloji[0].t | 824-01-01
angkor-kmer | f | 802-01-01 | t=1431-01-01
angkor-kmer | kronoloji[4].t | 802-01-01
pagan | f | 849-01-01 | t=1297-01-01
sunda-pajajaran | f | 669-01-01 | t=1527-06-22
ziriler | f | 972-01-01 | t=1148-01-01
ziriler | kronoloji[0].t | 972-01-01
magrave-sicilmase | f | 976-01-01 | t=1053-01-01
magrave-sicilmase | kronoloji[0].t | 976-01-01
suve-emirligi | f | 896-01-01 | t=1285-01-01
suve-emirligi | kronoloji[0].t | 896-01-01
mapungubwe | f | 900-01-01 | t=1300-01-01
liao-hanedani | f | 916-01-01 | t=1125-01-01
liao-hanedani | kronoloji[0].t | 916-01-01
dali-kralligi | f | 937-01-01 | t=1253-01-01
dali-kralligi | kronoloji[0].t | 937-01-01
tien-le-hanedani | f | 980-01-01 | t=1009-01-01
tien-le-hanedani | kronoloji[0].t | 980-01-01
heian-japonya | f | 794-01-01 | t=1185-01-01
heian-japonya | kronoloji[0].t | 794-01-01
srivijaya | f | 683-01-01 | t=1275-01-01
srivijaya | kronoloji[0].t | 683-01-01
medang | f | 732-01-01 | t=1016-01-01
medang | kronoloji[0].t | 732-01-01
medang | kronoloji[1].t | 929-01-01
bali-warmadewa | f | 914-01-01 | t=1284-01-01
bali-warmadewa | kronoloji[0].t | 914-01-01
gazneli | f | 963-01-01 | t=1186-01-01
gazneli | kronoloji[0].t | 963-01-01
karahanli | f | 840-01-01 | t=1041-01-01
karahanli | kronoloji[0].t | 840-01-01
samani | f | 819-01-01 | t=1005-01-01
samani | kronoloji[0].t | 819-01-01
buveyhi | f | 932-01-01 | t=1062-01-01
buveyhi | kronoloji[0].t | 932-01-01
ziyari | f | 928-01-01 | t=1090-01-01
ziyari | kronoloji[0].t | 928-01-01
revvadi | f | 979-01-01 | t=1071-01-01
revvadi | kronoloji[0].t | 979-01-01
bavendi | f | 665-01-01 | t=1349-04-17
bavendi | kronoloji[0].t | 665-01-01
annazi | f | 991-01-01 | t=1117-01-01
annazi | kronoloji[0].t | 991-01-01
musafiri | f | 942-01-01 | t=1062-01-01
musafiri | kronoloji[0].t | 942-01-01
musafiri | kronoloji[1].t | 979-01-01
badusbani | f | 723-01-01 | t=1598-01-01
badusbani | kronoloji[0].t | 723-01-01
idil-bulgar | f | 965-01-01 | t=1236-01-01
koco-uygur | f | 911-01-01 | t=1209-01-01
mervani | f | 983-01-01 | t=1085-08-30
mervani | kronoloji[0].t | 983-01-01
endulus-emevi | f | 756-05-15 | t=1031-01-01
leon-kralligi | f | 910-01-01 | t=1230-09-23
barselona-kontlugu | f | 801-01-01 | t=1164-01-01
normandiya | f | 911-01-01 | t=1204-01-01
normandiya | kronoloji[0].t | 911-01-01
flandre | f | 862-01-01 | t=1384-01-30
flandre | kronoloji[0].t | 862-01-01
toulouse | f | 849-01-01 | t=1271-01-01
toulouse | kronoloji[0].t | 849-01-01
arles-kralligi | f | 933-01-01 | t=1032-09-06
arles-kralligi | kronoloji[0].t | 933-01-01
arles-kralligi | kronoloji[1].t | 993-01-01
sicilya-emirligi | f | 947-01-01 | t=1091-01-01
sicilya-emirligi | kronoloji[0].t | 947-01-01
izlanda-serbest-devleti | f | 930-01-01 | t=1262-01-01
kiev-rusu | f | 882-01-01 | t=1240-12-06
birinci-bulgar | f | 681-01-01 | t=1018-01-01
hirvatistan-kralligi | f | 925-01-01 | t=1102-01-01
ani-bagratli-kralligi | f | 884-01-01 | t=1045-01-01
ani-bagratli-kralligi | kronoloji[0].t | 884-01-01
ani-bagratli-kralligi | kronoloji[1].t | 962-01-01
kars-vanand-kralligi | f | 962-01-01 | t=1064-01-01
kars-vanand-kralligi | kronoloji[0].t | 962-01-01
lori-kralligi | f | 982-01-01 | t=1101-01-01
lori-kralligi | kronoloji[0].t | 982-01-01
seddadiler-gence | f | 951-01-01 | t=1075-01-01
seddadiler-gence | kronoloji[0].t | 951-01-01
seddadiler-gence | kronoloji[1].t | 971-01-01
derbent-hasimi-emirligi | f | 869-01-01 | t=1065-01-01
derbent-hasimi-emirligi | kronoloji[0].t | 869-01-01
```

## ④ YAMA (`GUNNO-PAD-1008.diff`, yalnız `arac/denetle.py`, +24 −5)
- yeni `pad(s)`: yılı `zfill(4)`; dört haneli yılda dizgiyi DEĞİŞTİRMEZ (sınav S9,
  4131 tarih); negatif (MÖ) yıla DOKUNMAZ ⇒ `gun_no` çöker (S10) — sessiz yanlış yok.
- `gun_no`: `tam(s)` → `tam(pad(s))`.
- `degismez4`: `pad(kf) > ATLAS_BASI` · `pad(kt) < ATLAS_SONU` · `min/max(..., key=pad)`
  (döndürülen/basılan değer HAM kalır — rapor metni değişmez).
- Motor tuzu dosyalarına (`uret_petek.py` · `renkler.py` · `girdi.py` · `motor_onbellek.py`) DOKUNULMADI.

## ⑤ SINAV — `denetim/ARAC-GUNNO-PAD-SINAV-1008.py` · **12/12 geçti, çıkış 0** (~15 sn)
Yamasız kol: `git show origin/makine/umit:arac/denetle.py` → `arac/_gunno_yamasiz_<pid>.py`
(denetle yolları kendi konumundan çözer; %TEMP%ten yüklenince modül açılışta "Maske
sabitleri okunamadı" ile çıktı — ölçüldü) → yüklenir yüklenmez silinir, ağaçta iz yok.
```
S1  evren: 111 = f 64 + kronoloji.t 47 + t 0; negatif 0
S2  YAMASIZ gun_no 111/111 ValueError ile ÇÖKÜYOR      ← sınavın soruyu sorduğunun kanıtı
S3  YAMASIZ `kf > ATLAS_BASI` 111/111 YANLIŞ True
S4  YAMASIZ düz sorted() kronolojik sırayı bozuyor
S5  YAMALI gun_no 111/111 DOĞRU (bağımsız split-oracle)
S6  YAMALI pad(kf) > ATLAS_BASI yanlış 0
S7  YAMALI sorted(key=pad) kronolojik
S8  GERİLEME 4131 dört haneli tarih (künye f/t, kronoloji, olay, yerleşim d/v/s/isg,
    elle 1281-01-01 · 1923-10-29 · 1453-05-29 · 1526-08 …) yamasız == yamalı, fark 0
S9  pad() dört haneli yılda dizgiyi değiştirmiyor
S10 MÖ: pad dokunmuyor, gun_no çöküyor
S11 GERÇEK: degismez4 iki kolda BİREBİR (ihlal 0 · künyesiz 0 · asan 127 · önce 324 · cok_harita 10)
S12 GERÇEK: üç haneli f'li 20 künye yerleşimde kullanılıyor ⇒ yamasız dal gerçekten
    yanlış giriliyor, sayı oynamıyor (almanya, angkor-kmer, bizans, bretanya, danimarka,
    fransa, goryeo, ingiltere, iskocya, kanem-bornu, navarra, norvec-kralligi …)
```

## ⑥ KAPI — `py arac/denetle.py`, yamasız ve yamalı (aynı ağaç, aynı veri `d8e4e07b`)
```
                yamasız   yamalı
çıkış kodu         2         2      (yalnız Değişmez 8 ÖLÇÜLEMEDİ: devletler_harita.js YOK)
çıktı satırı     349       349      ham `diff` 0 satır — BİREBİR
D1 309/309 · D1b 0 · D2 624 kırılma 0 açık · D2s 1722 / 185 açık (tavan 185) ·
D2i 171 / 1 · D2t 13 · D4 0 · D4c 127 · D4d 324 · konum 0 · R 0
```
Tavan oynamadı ⇒ tavan önerisi YOK.

# TESLİM — üç başlık
## ① ne ölçtüm
- 111 üç haneli yıllı kayıt (64 künye `f:` + 47 `kronoloji[].t`), künye `t:` 0, negatif 0;
  yerleşim (4300) ve olay (2207) evreninde 0.
- `gun_no` yamasızda 111/111 çöküyor; yamalı 111/111 doğru; 4131 dört haneli tarihte fark 0.
- `degismez4`te 3 gizli dizgi kusuru (`kf > ATLAS_BASI` 64 künyede yanlış True — 20'si
  yerleşimde kullanılıyor; `kt < ATLAS_SONU`; `min/max`), hiçbiri bugün sayıya yansımıyor.
- `denetle.py` önce/sonra: çıkış 2 → 2, çıktı birebir.
## ② ne bulamadım
- `gun_no`ya bugün üç haneli yıl ulaştıran bir yol bulunamadı — kusur gizli, sayısal zarar 0.
- MÖ yıl için doğru gün numarası: `datetime` yıl ≤ 0 desteklemiyor; yama yalnız
  "sessiz yanlış yerine çök" garantisi veriyor, MÖ'yü ÇÖZMÜYOR.
- "Dizgi karşılaştırmasında yanlış sıralıyor" bugün yerleşim/olay evreninde ölçülemez
  (orada üç haneli yıl yok); yalnız künye evreninde ölçüldü.
## ③ ne istiyorum
1. Diff'in koordinatörce uygulanması (`git apply --check` origin/makine/umit üstünde temiz).
2. ÖNERİ (yamalanmadı, en küçük değişiklik ilkesi): yerleşim/olay dizgi karşılaştırmaları
   onlarca satır; hepsini pad'lemek yerine `denetle.py`ye tek bir GİRİŞ KAPISI —
   "yerleşim `d/v/s/isg` f/t ve olay `t` dört haneli yıl taşır, değilse ÖLÇÜLEMEDİ
   kovası" — evren genişleyip (MÖ 12000 hedefi) üç haneli yıl yerleşime girdiği gün
   dizgi karşılaştırmalarının sessizce yanlışlanmasını görünür kılar.
3. ÖNERİ (motor tuzu, dokunulmadı): `uret_petek.py`/`girdi.py`de künye ya da yerleşim
   tarihini dizgiyle karşılaştıran yerler aynı `pad`i gerektirebilir — bu görevde
   ÖLÇÜLMEDİ; tam inşa koşusu yamaları arasında ayrı tarama olarak sıraya alınmalı.
4. MÖ yıl hedefine geçmeden önce tarih temsilinin (işaretli yıl + kendi ordinal'i)
   kararı — `datetime` ile gidilemez.
