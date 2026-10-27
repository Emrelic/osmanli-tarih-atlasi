# ONCE1281-ENVANTER-1018 — MS 0–1281 ölçümü (bölge × yüzyıl) ve yerleşim envanteri

*18 Ekim 2026 · origin/main `1b453cac6` · salt okunur ölçüm. Araçlar: `arac/once1281_yukle.js` (devlet+kronoloji dökümü) → `arac/once1281_envanter.py --veri <json>` → `denetim/ONCE1281-ENVANTER-1018.json` (tam makine çıktısı, yerleşim başına satır).*

## ① Evren (sayıyla)

| Ölçü | Sayı |
|---|---|
| Devlet künyesi (hepsi) | 1824 |
| Kronoloji maddesi (t+b tekil, bütün dosyalar) | 23049 |
| … MS 0–1281 arası madde | 4398 |
| … MÖ (negatif yıl) madde — bu turda dokunulmadı | 819 |
| MS 0–1281'de yaşamış künye | 693 |
| MÖ'de başlayan künye | 166 |
| Yerleşim (nokta) | 4671 |
| Yerleşim dönemi f<1281 (s/d/v/isg) | 367 |
| Hiçbir künyeye bağlanamayan (taraflar boş) MS 0–1281 madde | 186 |
| MS 0–1281'de yaşayıp 1281 öncesi HİÇ maddesi olmayan künye | 61 |

Önceki fotoğraf (UFUK-ACILISI-1010 §0): kronoloji 541 / künye 278 / yerleşim dönemi 143. Bugün 1281 öncesi kronoloji 4398 (MS) + 819 (MÖ), künye 534 (MS f<1281) + 166 (MÖ), yerleşim dönemi 367. (Sayımlar eşit tanımlı değil: 1010'daki 541 yalnız 'pencere altı'; bugünkü sayı tekilleştirilmiş tüm dosyalardır.)

🔴 **1281 epok damgası:** künyesi `f:"1281-01-01"` olan 123 devlet var (kuzey-amerika 47 · batı-afrika 15 · GD-asya 13 · doğu-afrika 10 · güney-amerika 9 · güney-asya 7 · orta-afrika 5 · …). Bunlar 'araştırılmamış epok'tur; gerçek doğuşları 1281 öncesi olabilir — geriye uzatmanın birinci kuyruğu bunlardır.

## ② Künye: yüzyılda YAŞAYAN devlet sayısı
```
bolge                 0000 0100 0200 0300 0400 0500 0600 0700 0800 0900 1000 1100 1200   top
bati-avrupa              1    0    3    2    7    9    9    9   18   20   27   30   30   165
dogu-asya                6    4    9   10    9   14   11   10    9   27   10   11   11   141
guney-asya               3    2    2    5    5    5    8    9   13   12   24   24   27   139
guneydogu-asya           1    2    2    2    2    5    6    6    8   11   15   13   29   102
italya                   1    1    1    1    2    3    3    5    4    5   21   24   24   95
arabistan                5    5    4    3    3    3    4    2    7    9   13   13   11   82
orta-amerika             5    5    6    7    9    9    8    9    6    3    2    2    2   73
kuzey-amerika            0    0    0    1    1    1    1    1    2    3    5    5   52   72
orta-asya                2    3    3    4    4    6    5    4    5    6    8    9   11   70
iran                     2    2    3    1    1    1    2    2    6    9   12   14   13   68
orta-avrupa              0    0    1    1    1    1    2    1    5    6    7   12   20   57
balkanlar                4    1    0    1    2    2    2    3    4    5    6    9   16   55
anadolu                  4    0    0    0    0    0    0    0    0    1   12   15   20   52
guney-amerika            2    2    2    2    2    4    4    5    5    4    4    4   12   52
dogu-avrupa              1    1    1    2    1    0    1    0    2    4    7   12   19   51
kafkasya                 3    2    2    1    1    0    1    1    7   11   12    5    5   51
kuzey-afrika             2    1    1    1    2    2    1    4    5    8    8    9    7   51
iberya                   0    0    0    0    2    2    1    3    4    5   13   10    9   49
dogu-afrika              0    1    1    1    1    1    1    1    2    2    5    6   17   39
bati-afrika              0    0    0    0    0    0    0    0    0    1    6    6   22   35
suriye-filistin          2    1    2    1    1    1    2    1    0    1    8   10    5   35
mezopotamya              1    1    2    1    1    1    1    1    1    5    6    6    5   32
misir-sudan              1    1    1    1    0    1    1    1    2    4    2    3    4   22
kuzey-avrupa             0    0    0    0    0    0    0    0    2    4    5    5    6   22
sibirya-bozkir           0    0    0    0    0    0    1    2    3    3    3    3    5   20
okyanusya                0    0    0    0    0    0    0    0    1    1    3    5    7   17
orta-afrika              0    0    0    0    0    0    0    0    1    1    1    1    6   10
guney-afrika             0    0    0    0    0    0    0    0    0    1    1    2    6   10
orta-amerika-karayip     0    0    0    0    0    0    0    0    0    0    0    0    3   3
```

## ③ Kronoloji maddesi: yüzyıla düşen madde (bölge = maddenin ilk bağlı künyesinin bölgesi)
```
bolge                 0000 0100 0200 0300 0400 0500 0600 0700 0800 0900 1000 1100 1200   top
dogu-asya                6    3   23   29   23   52   31   24    9  123   37   57   90   507
anadolu                  7    0    0    0    0    0    0    0    0    1   43  147  160   358
iran                     1    0    7    1    1    2    8    1   25   37   95   86   64   328
bati-avrupa              4    0    9    1   10    8   11    9   37   25   45   58   61   278
guney-asya               2    7    4   10    4    5   23   15   21   23   61   52   34   261
arabistan                0    0    3    3    2    7   31    4   14   25   51   55   24   219
orta-asya                4    5    7    5    9   15   17   13    7   24   49   29   34   218
suriye-filistin          4    1    6    0    0    1    8    7    0    8   52   98   26   211
kuzey-afrika             5    0    1    0    1    3    1    9   27   32   47   47   38   211
bolgesiz                 0    0    0    0    0    0    1    0    0    0   27   54  104   186
italya                   1    1    2    4   10   11    4    6    2   13   52   38   29   173
iberya                   0    0    0    0    7    3    0    7    9   13   72   35   25   171
balkanlar                7    2    0    0    3    5    1    0    6    8   34   24   70   160
mezopotamya              0    1    3    1    1    3    1    5    5   17   38   60   21   156
orta-avrupa              0    0    2    1    1    2   10    5   14   13   12   34   53   147
dogu-avrupa              0    1    0    0    4    0    2    0    2   12   23   23   71   138
kafkasya                 3    0    1    2    1    0    0    1   11   35   55   18    8   135
guneydogu-asya           0    1    1    2    3   10    9    6    6   18   40   12   18   126
misir-sudan              0    0    0    1    0    1    1    0    9   18   11   20   24   85
kuzey-amerika            0    0    0    1    0    0    0    1    1    3    3    8   49   66
kuzey-avrupa             0    0    0    0    0    0    0    0    6    1   10    6   30   53
orta-amerika             3    2    3    8    2    9    9    6    4    4    0    2    1   53
sibirya-bozkir           0    0    0    0    0    0    1   10    4    4    6    7   13   45
bati-afrika              0    0    0    0    0    0    0    0    0    1   13    2   22   38
dogu-afrika              0    1    0    1    0    2    0    0    1    0    3    2   16   26
guney-amerika            1    1    0    1    1    3    5    5    1    2    3    2    0   25
orta-afrika              0    0    0    0    0    0    0    0    1    0    4    0    6   11
okyanusya                0    0    0    0    0    0    0    0    0    0    1    2    4   7
guney-afrika             0    0    0    0    0    0    0    0    0    1    0    1    4   6
```

## ④ Yerleşim dönemi: yüzyılı kesen s/d/v/isg dönemi (f<1281; bölge = ilk sahibin bölgesi)
```
bolge                 0000 0100 0200 0300 0400 0500 0600 0700 0800 0900 1000 1100 1200   top
balkanlar                0    0    0    1    1    1    1    1    1    1   18   23   47   95
anadolu                  0    0    0    0    0    0    0    0    0    0    9   30   55   94
iran                     0    0    0    0    0    0    0    0    0    0    6   17   27   50
misir-sudan              0    0    0    0    0    0    0    0    0    0   10   10   24   44
orta-avrupa              0    0    0    0    0    0    0    0    0    0   12   14   17   43
bati-avrupa              0    0    0    0    0    0    0    0    0    0    9   11   17   37
orta-asya                0    0    0    0    0    0    0    0    0    0    1    8   22   31
mezopotamya              0    0    0    0    0    0    0    0    0    0    5   12   11   28
dogu-asya                0    0    0    0    0    0    0    0    0    0    1    2   24   27
italya                   0    0    0    0    0    0    0    0    0    0    7    9   10   26
kuzey-afrika             0    0    0    0    0    0    0    0    0    0    0    3   14   17
iberya                   0    0    0    0    0    0    0    0    0    0    3    4    6   13
kafkasya                 0    0    0    0    0    0    0    0    0    0    2    3    5   10
guney-asya               0    0    0    0    0    0    0    0    0    0    2    2    4   8
kuzey-avrupa             0    0    0    0    0    0    0    0    0    0    2    2    4   8
bati-afrika              0    0    0    0    0    0    0    0    0    0    2    2    2   6
arabistan                0    0    0    0    0    0    0    0    0    0    1    2    2   5
suriye-filistin          0    0    0    0    0    0    0    0    0    0    1    1    2   4
okyanusya                0    0    0    0    0    0    0    0    0    0    1    1    2   4
guneydogu-asya           0    0    0    0    0    0    0    0    0    0    1    1    1   3
```

Sütun = yüzyılın ilk yılı (0000 = MS 0–99 … 1200 = 1200–1281).

### Okuma — boşluklar

- **Yerleşim dönemi MS 1000'den önce fiilen YOK** (balkanlar'daki 1'er dönem tek istisna). Motor ufku 1000'e açık ama 1000–1281 de ince: 367 dönemin çoğu 1200–1281 sütununda. Bu, matristeki en büyük açıktır.
- **Künye var, madde yok:** anadolu MS 0–999 (künye 4+1, madde 7+1), orta-amerika-karayip, güney-afrika, orta-afrika, okyanusya, doğu-afrika, batı-afrika 1000 öncesi neredeyse sıfır madde; oysa künye sütunları dolu (güney-amerika 2→5 künye, madde 0–5).
- **Madde var, ağırlık dağılımı çarpık:** doğu-asya 507 (900'ler sütununda 123), anadolu 358 ama 1000 öncesi 8; batı-avrupa 278; MS 0–700 arası tüm bölgelerde yüzyıl başına çoğunlukla 0–10 madde.
- **Bağsız madde:** 186 madde hiçbir künyeye bağlı değil (taraflar yok/yanlış id) — çoğu 1000–1281.

## ⑤ Künyesi var, 1281 öncesi HİÇ maddesi olmayan devletler (61)

| id | bölge | f | t |
|---|---|---|---|
| nebhani | arabistan | 1281-01-01 | 1515-04-01 |
| ranquel | guney-amerika | 1281-01-01 | 1883-01-01 |
| charrua | guney-amerika | 1281-01-01 | 1831-01-01 |
| arua | guney-amerika | 1281-01-01 | 1836-01-01 |
| como-komunu | italya | 1001-01-01 | 1335-01-01 |
| brescia-komunu | italya | 1120-01-01 | 1332-06-01 |
| racput | guney-asya | 1000-01-01 | 1947-08-15 |
| ahom | guney-asya | 1281-01-01 | 1826-01-01 |
| nepal | guney-asya | 1000-01-01 | None |
| kalikut | guney-asya | 1281-01-01 | 1766-01-01 |
| travankur | guney-asya | 1281-01-01 | 1949-07-01 |
| arakan | guneydogu-asya | 1281-01-01 | 1785-01-02 |
| san-devletleri | guneydogu-asya | 1281-01-01 | 1923-10-29 |
| malay-sultanliklari | guneydogu-asya | 1281-01-01 | 1909-07-10 |
| palembang-sultanligi | guneydogu-asya | 1281-01-01 | 1825-01-01 |
| gova-makassar | guneydogu-asya | 1281-01-01 | 1667-11-18 |
| ternate-sultanligi | guneydogu-asya | 1281-01-01 | 1663-01-01 |
| tidore-sultanligi | guneydogu-asya | 1281-01-01 | 1923-10-29 |
| banda-adalari | guneydogu-asya | 1281-01-01 | 1621-03-08 |
| pagaruyung | guneydogu-asya | 1281-01-01 | 1833-01-01 |
| timor-beylikleri | guneydogu-asya | 1281-01-01 | 1769-10-10 |
| kocin | guney-asya | 1102-01-01 | 1503-01-01 |
| cherokee | kuzey-amerika | 1281-01-01 | 1791-07-02 |
| choctaw | kuzey-amerika | 1281-01-01 | 1830-09-27 |
| natchez | kuzey-amerika | 1281-01-01 | 1731-01-01 |
| chimu-krallik | guney-amerika | 1281-01-01 | 1470-01-01 |
| colla-krallik | guney-amerika | 1281-01-01 | 1450-01-01 |
| lupaqa-krallik | guney-amerika | 1281-01-01 | 1450-01-01 |
| diaguita-calchaqui-konfederasyonu | guney-amerika | 1281-01-01 | 1667-01-02 |
| mapuche-araukanya | guney-amerika | 1281-01-01 | 1883-01-01 |
| muisca-konfederasyonu | guney-amerika | 1281-01-01 | 1537-08-01 |
| nahua-sehir-devletleri | orta-amerika-karayip | 1281-01-01 | 1521-08-13 |
| tututepec-krallik | orta-amerika-karayip | 1281-01-01 | 1522-01-01 |
| zapotek-krallik | orta-amerika-karayip | 1281-01-01 | 1523-01-01 |
| apaci-ovalar | kuzey-amerika | 1281-01-01 | 1750-01-01 |
| kabartay | kafkasya | 1281-01-01 | 1774-07-21 |
| hurmuz-sultanligi | iran | 1281-01-01 | 1514-01-01 |
| cerkez | kafkasya | 1281-01-01 | 1864-07-01 |
| hariphunchai | guneydogu-asya | 1000-01-01 | 1292-01-01 |
| hawaii-seflikleri | okyanusya | 1190-01-01 | 1795-01-01 |
| saksonya | orta-avrupa | 1281-01-01 | 1918-11-13 |
| baden | orta-avrupa | 1281-01-01 | 1918-11-22 |
| teuton-sovalyeleri | dogu-avrupa | 1281-01-01 | 1525-04-08 |
| franche-comte | bati-avrupa | 1000-01-01 | 1678-01-01 |
| hollanda-kontlugu | bati-avrupa | 1000-01-01 | 1433-01-01 |
| montferrat-markizligi | italya | 1000-01-01 | 1708-01-01 |
| euboea-negroponte | balkanlar | 1209-01-01 | 1470-07-12 |
| frizya-ozgurlugu | bati-avrupa | 1100-01-01 | 1498-01-01 |
| saluzzo-markizligi | italya | 1142-01-01 | 1548-02-23 |
| tairona | guney-amerika | 0800-01-01 | 1600-01-01 |
| rarotonga | okyanusya | 1250-01-01 | 1888-01-01 |
| chamorro | okyanusya | 0800-01-01 | 1695-01-01 |
| dilmun | arabistan | -1999-01-01 | None |
| kataban | arabistan | -0399-01-01 | 0199-01-01 |
| chimu | guney-amerika | 1100-01-01 | 1470-01-01 |
| mayapan-birligi | orta-amerika | 1200-01-01 | 1450-01-01 |
| ogedey-ulusu-kaydu | orta-asya | 1271-01-01 | 1309-01-01 |
| lucca-cumhuriyeti | italya | 1162-01-01 | 1799-01-01 |
| salzburg-prens-basepiskoposlugu | orta-avrupa | 1278-01-01 | 1803-02-25 |
| luwu | guneydogu-asya | 1281-01-01 | None |
| buton | guneydogu-asya | 1281-01-01 | None |


## ⑥ Yerleşim envanteri — 1281'de var olan 2537 nokta (tur≠bölge)

Sınıf: **güçlü** = 1281 öncesi bir kronoloji maddesi yerleşimin ≤15 km'sinde (`yer_kon`) ya da `yer_id`si yerleşim adı/eski adıyla aynı; **zayıf** = yalnız madde metninde ad geçiyor (insan teyidi); **tdv-aday** = kronolojide yok ama 0930 TDV listesinde 1000–1280 tarihli cümle var (insan teyidi); **yok** = hiçbiri.

| Sınıf | Nokta | Pay |
|---|---|---|
| guclu | 249 | %9.8 |
| zayif | 247 | %9.7 |
| tdv-aday | 45 | %1.8 |
| yok | 1996 | %78.7 |

**Geriye uzatılabilir** (kaynaklı kanıt var, insan teyidiyle): güçlü + zayıf + tdv-aday = **541** nokta; yalnız *güçlü* sınıf = 249 (kronoloji maddesi zaten o yeri o günlerde anıyor — `kur`/dönem uzatma adayı). **yok** sınıfı = kaynak araştırması gerekir (TDV → akademik → komşu devlet kaynakları → abi merkez).

| Bölge | güçlü | zayıf | tdv-aday | yok | toplam |
|---|---|---|---|---|---|
| balkanlar | 24 | 12 | 14 | 200 | 250 |
| orta-avrupa | 9 | 31 | 0 | 171 | 211 |
| iran | 25 | 19 | 12 | 130 | 186 |
| guneydogu-asya | 7 | 8 | 0 | 169 | 184 |
| misir-sudan | 18 | 13 | 3 | 127 | 161 |
| dogu-afrika | 1 | 9 | 0 | 136 | 146 |
| dogu-asya | 23 | 23 | 2 | 97 | 145 |
| kuzey-afrika | 19 | 3 | 0 | 117 | 139 |
| italya | 16 | 22 | 0 | 88 | 126 |
| sibirya-bozkir | 8 | 9 | 0 | 104 | 121 |
| kuzey-amerika | 0 | 1 | 0 | 114 | 115 |
| bati-avrupa | 13 | 16 | 0 | 81 | 110 |
| guney-asya | 3 | 15 | 0 | 79 | 97 |
| anadolu | 28 | 11 | 11 | 39 | 89 |
| kuzey-avrupa | 5 | 6 | 0 | 75 | 86 |
| dogu-avrupa | 3 | 10 | 0 | 69 | 82 |
| iberya | 18 | 9 | 0 | 34 | 61 |
| orta-asya | 10 | 13 | 0 | 28 | 51 |
| bati-afrika | 1 | 4 | 0 | 36 | 41 |
| arabistan | 6 | 2 | 0 | 26 | 34 |
| kafkasya | 4 | 2 | 2 | 19 | 27 |
| orta-afrika | 1 | 1 | 0 | 24 | 26 |
| orta-amerika-karayip | 0 | 0 | 0 | 11 | 11 |
| orta-amerika | 0 | 2 | 0 | 7 | 9 |
| guney-amerika | 0 | 1 | 0 | 8 | 9 |
| guney-afrika | 1 | 0 | 0 | 7 | 8 |
| suriye-filistin | 3 | 2 | 1 | 0 | 6 |
| mezopotamya | 3 | 2 | 0 | 0 | 5 |
| okyanusya | 0 | 1 | 0 | 0 | 1 |

### Yöntem sınırları (dürüstçe)
- Madde↔yerleşim eşleşmesi: koordinat (≤15 km, `yer_kon` yalnız ~%11 maddede var), `yer_id`, tam sözcük metin. `yer_kon`suz ve yalnız bölge adı geçen
  maddeler (örn. «Trakya'da …») yerleşime BAĞLANMADI; bölge adı eşlemesi (Trakya→İstanbul çevresi, Bitinya→Bursa/İznik) bu turda kurulmadı → **güçlü/zayıf sayıları alt sınırdır.**
- Eski ad sözlüğü elle ~70 büyük şehri kapsar (`ESKI_AD`) + `ad_esanlam.js` 25 çift; küçük yerleşimlerin eski adları kapsanmadı.
- 'Güçlü' ≠ 'o yerleşim 1281 öncesi var ve sahibi şu': madde bir olayı anar; sahiplik dönemi için ayrıca kaynaklı tanıklık (`kaynakli_halka_*`) gerekir.
- `tur:"bolge"` dolgu noktaları envanter dışı. MÖ (negatif yıl) hiç sayılmadı/yazılmadı.
- Atlas kaydı hiçbir sınıfta dayanak sayılmadı.
