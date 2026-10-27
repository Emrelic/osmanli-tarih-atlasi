# KAPSAM-GUNCEL-OZET-1024 (kunye / s: / boya kapsami)

Olcum: 24.10.2026 17:53 | makine: HAVVA | dal: worktree-agent-a214e12d10e5a3402 | HEAD: b97aab751 | arac: denetim/ARAC-KAPSAM-GUNCEL-1024.py | yalniz olcum, veri yazilmadi, denetle kosmadi.
Yukleme: node vm, 679 data/*.js (paket_*.js haric), yukleme hatasi 0; motor girdi listesi 120 dosya.

## Sayilar
- Kunye (devletler.js): **2225** | 1281 oncesi (f<1281): **1108** | 1281 ve sonrasi: 1117
- Atlasta yerlesim (motor girdi, ad+lat): 5378 (s: tasiyan 4710) | BOYALAR: 2069 | madde (t+b tekil, devletli+devletsiz+gomulu): 29108
- s: periyotlarinda gecen devlet kimligi: 1305 farkli; **devletler.js'te kunyesi olmayan s: kimligi: 22** (1062 donem), BOYALAR'da olmayan s: kimligi: 11
  - en cok: suleyman-celebi(245), avusturya(190), musa-celebi(176), mehmed-celebi(140), isa-celebi(63), sardinya(36), sirbistan(35), bulgaristan(29), yemen(28), ceneviz(24), suud(21), sovalye(16)

## 1281 oncesi kunye: toplam durum (n=1108)
- s yok: 470 | TAM: 407 | boya eksik: 100 | bosluk-beyanli: 88 | hayalet: 40 | madde eksik: 3
- eksik bayraklari (cok etiketli): s yok: 519 | s yok(sahip belli, bosluk beyanli): 131 | boya eksik: 100 | hayalet: 40 | madde eksik: 3
- boyasi var: 1008 / 1108 | s: kullanan kunye: 458 | hayalet(s: omrunu asan): 40 | madde=0: 3
- yer: en az 1 yeri tam adla atlasta olmayan kunye: 303 | atlasta hic bulunamayan (esnek) yeri olan kunye: 0

## 1281 ve sonrasi kunye: toplam durum (n=1117)
- TAM: 736 | s yok: 284 | hayalet: 88 | bosluk-beyanli: 4 | madde eksik: 3 | boya eksik: 2
- eksik bayraklari (cok etiketli): s yok: 287 | hayalet: 89 | s yok(sahip belli, bosluk beyanli): 5 | madde eksik: 3 | boya eksik: 2
- boyasi var: 1115 / 1117 | s: kullanan kunye: 825 | hayalet(s: omrunu asan): 89 | madde=0: 3
- yer: en az 1 yeri tam adla atlasta olmayan kunye: 421 | atlasta hic bulunamayan (esnek) yeri olan kunye: 0

### 1281 oncesi: TAM olmayan kunye, bolge dokumu
dogu-asya: 115 | guney-asya: 78 | bati-avrupa: 49 | italya: 45 | orta-asya: 43 | guneydogu-asya: 43 | balkanlar: 38 | anadolu: 27 | misir-sudan: 25 | iberya: 25 | kuzey-afrika: 24 | orta-amerika: 24 | suriye-filistin: 22 | orta-avrupa: 22 | mezopotamya: 18 | arabistan: 17 | dogu-avrupa: 17 | kafkasya: 17 | iran: 12 | guney-amerika: 11 | sibirya-bozkir: 8 | bati-afrika: 7 | okyanusya: 5 | kuzey-amerika: 3 | dogu-afrika: 3 | kuzey-avrupa: 2 | guney-afrika: 1

## (b) `__BOSLUK__` ile park edilmis s: donemleri
- Toplam `__BOSLUK__` s: donemi: **754** (yerlesim: 436)
  - A sahip belli (boya/kunye bekliyor; kaynakta 'sahip <id>'): 260
  - B sahip kaynakta bulunamadi (arandi, bulunamadi / veri-yok): 268
  - C sahip atlasta kunyesiz (kunye yok / yeni_kunye_gerekli): 91
  - D kunye omru asimi (kunye kapaniyor/basliyor): 25
  - E siniflanamayan: 110
- Devlete baglanan (A+D) donem: 285, 154 farkli devlet kimligi; bunlardan devletler.js'te kunyesi olan: 153, kunyesiz id: 1
- Kunye bazinda: s: kullanimi 0 olup bosluk-beyanli sahip olan kunye: **92** (bunlar 'zincir yok' degil, 'sahip belli, bosluk beyanli' kovasinda)
- En cok beyanli bosluk tasiyan devletler (A+D): tang(26), saffari(10), timor-beylikleri(9), sonraki-tang-5hanedan(8), tahiri-horasan(7), funan(7), sonraki-liang-5hanedan(6), sonraki-zhou-5hanedan(6), taebong(6), brunei-sultanligi(5), sonraki-jin-5hanedan(5), sonraki-han-5hanedan(5), horasan-oguz-hakimiyeti(4), hindu-sahiler(4), guney-tang(4)

## (a) DEVLET-LISTESI (1205 kayit) <-> kunye eslesmesi
- eslesti (guven>=0.80): 634 | belirsiz (0.50-0.80, elle bak): 12 | **gercekten kunyesiz (<0.50): 559**
- eslesen yontemler: id-esit 514, liste-esleme 108, ad-benzer 6, ad-esit 3, id-kok 3
  - eski olcu: id-esit eslesen 508, 'kunyede olmayan' 697 -> bugun id-esit: 514, isim+donem ile ek eslesen: 120
- Gercekten kunyesiz: 559, bunlardan devredilebilir: **260** (+ belirsiz-devredilebilir 6); taslak: 299
  - devredilebilir kunyesiz onem dagilimi: kucuk 194, orta 66
  - bolge: dogu-asya 42, balkanlar 41, italya 32, suriye-filistin 28, iran 19, mezopotamya 17, guney-asya 16, orta-asya 14, bati-avrupa 11, iberya 6, arabistan 6, misir-sudan 6
  - ilk 20 (cekirdek once):
    - adiabene | Adiabene Krallığı | -0163..0116- | orta | en iyi aday - (0.00)
    - aedui | Aedui (Haedui) Konfederasyonu | ?..-0051 | orta | en iyi aday - (0.00)
    - ammon | Ammon Krallığı | -1099..-0581 | orta | en iyi aday - (0.00)
    - amurru | Amurru Krallığı | -1349..-1199 | orta | en iyi aday - (0.00)
    - anshan | Anşan Krallığı (Elam-Pers baglantili) | -2299..-0549 | orta | en iyi aday - (0.00)
    - antik-harezm | Antik Hârizm (Hârizm Krallığı) | ?..0305- | orta | en iyi aday - (0.00)
    - ardalan | Erdelân Emirliği | 1169-..1867- | orta | en iyi aday - (0.00)
    - arpad | Arpad (Bit-Agusi) Krallığı | -0899..-0739 | orta | en iyi aday - (0.00)
    - arverni | Arverni Konfederasyonu/Krallıgı | ?..-0051 | orta | en iyi aday - (0.00)
    - au-lac | Au Lac (Thuc Hanedani) | -0256..-0178 | orta | en iyi aday - (0.00)
    - avanti | Avanti Mahajanapadası (Ujjain/Mahishmati) | -0599..-0412 | orta | en iyi aday - (0.00)
    - awsan | Avsan (Awsan) Krallığı | -0799..-0679 | orta | en iyi aday - (0.00)
    - bardylis-krallik | Bardylis'in İlir Krallığı (Dassaretioi) | -0392..-0357 | orta | en iyi aday - (0.00)
    - buyeo | Buyeo Krallığı | ?..0494- | orta | en iyi aday - (0.00)
    - capua-sehri | Capua (Etrüsk-Oskan şehir devleti) | -0598..-0210 | orta | en iyi aday capua-prensligi (0.45)
    - dabuyiler | Dâbûyîler (Gîlânşâhlar / Dabuyid İsbehbedleri) | 0642-..0760- | orta | en iyi aday - (0.00)
    - dmt | Dʿmt (Da'amat) Krallığı | -0799..-0399 | orta | en iyi aday - (0.00)
    - edom | Edom Krallığı | -1299..-0552 | orta | en iyi aday - (0.00)
    - el-mirador | El Mirador (Preklasik Maya devleti/tartışmalı) | -0299..0150- | orta | en iyi aday - (0.00)
    - emesa | Emesa (Hims) Krallığı | -0063..0078- | orta | en iyi aday - (0.00)
  - tam liste: denetim/KAPSAM-GUNCEL-KUNYESIZ-1024.tsv

## (c) Dilim kapsami (dunya; 'gorunen' = en az bir yerlesimde s: donemi dilimle kesisen devlet kimligi)
### 3000 yillik dilimler
| dilim | kunye | s: gorunen devlet | boyali | yerlesim(sahipli) | delik(BOSLUK) yerlesim |
|---|---|---|---|---|---|
| MO12000..MO9000 | 4 | 4 | 4 | 8 | 0 |
| MO9000..MO6000 | 15 | 9 | 9 | 17 | 0 |
| MO6000..MO3000 | 30 | 22 | 22 | 24 | 1 |
| MO3000..MS1 | 239 | 82 | 82 | 89 | 29 |
| MS1..MS1281 | 888 | 339 | 328 | 599 | 305 |

### 500 yillik dilimler
| dilim | kunye | s: gorunen devlet | boyali | yerlesim(sahipli) | delik(BOSLUK) yerlesim |
|---|---|---|---|---|---|
| MO12000..MO11500 | 1 | 1 | 1 | 1 | 0 |
| MO11500..MO11000 | 2 | 2 | 2 | 2 | 0 |
| MO11000..MO10500 | 2 | 2 | 2 | 2 | 0 |
| MO10500..MO10000 | 2 | 2 | 2 | 3 | 0 |
| MO10000..MO9500 | 4 | 3 | 3 | 6 | 0 |
| MO9500..MO9000 | 3 | 3 | 3 | 7 | 0 |
| MO9000..MO8500 | 6 | 4 | 4 | 8 | 0 |
| MO8500..MO8000 | 5 | 4 | 4 | 11 | 0 |
| MO8000..MO7500 | 6 | 5 | 5 | 10 | 0 |
| MO7500..MO7000 | 8 | 5 | 5 | 10 | 0 |
| MO7000..MO6500 | 9 | 6 | 6 | 8 | 0 |
| MO6500..MO6000 | 10 | 5 | 5 | 5 | 0 |
| MO6000..MO5500 | 11 | 6 | 6 | 6 | 0 |
| MO5500..MO5000 | 11 | 7 | 7 | 7 | 0 |
| MO5000..MO4500 | 10 | 8 | 8 | 9 | 0 |
| MO4500..MO4000 | 8 | 7 | 7 | 8 | 0 |
| MO4000..MO3500 | 11 | 9 | 9 | 10 | 0 |
| MO3500..MO3000 | 16 | 12 | 12 | 13 | 1 |
| MO3000..MO2500 | 23 | 14 | 14 | 15 | 0 |
| MO2500..MO2000 | 37 | 23 | 23 | 28 | 8 |
| MO2000..MO1500 | 39 | 22 | 22 | 25 | 5 |
| MO1500..MO1000 | 34 | 16 | 16 | 17 | 7 |
| MO1000..MO500 | 79 | 26 | 26 | 36 | 12 |
| MO500..MS1 | 138 | 28 | 28 | 40 | 20 |
| MS1..MS501 | 166 | 52 | 43 | 77 | 65 |
| MS501..MS1001 | 486 | 149 | 138 | 309 | 216 |
| MS1001..MS1281 | 567 | 256 | 253 | 577 | 241 |

### 100 yillik dilimler (133 dilim; tam tablo KAPSAM-GUNCEL-DILIM-1024.tsv)
- s: gorunen devleti **0** olan dilim: 0 / 133
- boyali devleti 0 olan dilim: 0 / 133
- s: gorunen devlet sayisi: min 1, medyan 5, maks 187
- boyasiz gorunen devlet (s: var, BOYALAR yok): toplam dilim-devlet 45
- 0 gorunen dilim araliklari: yok

### 1281-1923, Osmanli disi dunya (100 yil)
| dilim | kunye | s: gorunen | boyali | yerlesim | delik |
|---|---|---|---|---|---|
| 1281..1381 | 497 | 332 | 332 | 2681 | 91 |
| 1381..1481 | 490 | 353 | 353 | 2760 | 68 |
| 1481..1581 | 466 | 332 | 332 | 2514 | 56 |
| 1581..1681 | 435 | 309 | 309 | 2359 | 41 |
| 1681..1781 | 469 | 332 | 332 | 2755 | 53 |
| 1781..1881 | 562 | 377 | 377 | 3407 | 67 |
| 1881..1923 | 469 | 315 | 315 | 4369 | 21 |

### 1923-2000 (25 yil)
| dilim | kunye | s: gorunen | boyali | yerlesim | delik |
|---|---|---|---|---|---|
| 1923..1948 | 336 | 242 | 242 | 4416 | 5 |
| 1948..1973 | 341 | 265 | 265 | 4448 | 6 |
| 1973..1998 | 310 | 269 | 269 | 4461 | 4 |
| 1998..2000 | 248 | 218 | 218 | 4436 | 3 |

### Bolge bolge, 1281-1923, Osmanli disi (kunye / s: gorunen / boyali / yerlesim)
| bolge | kunye | s: gorunen | boyali | yerlesim | s: orani |
|---|---|---|---|---|---|
| guneydogu-asya | 91 | 62 | 62 | 241 | 68% |
| guney-asya | 90 | 68 | 68 | 185 | 76% |
| kuzey-amerika | 74 | 59 | 59 | 422 | 80% |
| bati-afrika | 72 | 59 | 59 | 112 | 82% |
| italya | 65 | 29 | 29 | 246 | 45% |
| dogu-afrika | 63 | 38 | 38 | 224 | 60% |
| balkanlar | 62 | 28 | 28 | 417 | 45% |
| orta-avrupa | 59 | 21 | 21 | 343 | 36% |
| dogu-avrupa | 48 | 24 | 24 | 597 | 50% |
| anadolu | 45 | 35 | 35 | 287 | 78% |
| bati-avrupa | 45 | 21 | 21 | 1060 | 47% |
| arabistan | 42 | 27 | 27 | 126 | 64% |
| guney-amerika | 42 | 27 | 27 | 338 | 64% |
| dogu-asya | 39 | 30 | 30 | 240 | 77% |
| guney-afrika | 33 | 22 | 22 | 65 | 67% |
| orta-afrika | 32 | 27 | 27 | 91 | 84% |
| kafkasya | 30 | 15 | 15 | 61 | 50% |
| iran | 26 | 20 | 20 | 282 | 77% |
| kuzey-afrika | 25 | 11 | 11 | 152 | 44% |
| orta-amerika-karayip | 25 | 18 | 18 | 50 | 72% |
| orta-asya | 23 | 15 | 15 | 256 | 65% |
| okyanusya | 17 | 7 | 7 | 136 | 41% |
| orta-amerika | 16 | 7 | 7 | 122 | 44% |
| misir-sudan | 15 | 10 | 10 | 227 | 67% |
| sibirya-bozkir | 15 | 9 | 9 | 168 | 60% |
| kuzey-avrupa | 14 | 8 | 8 | 104 | 57% |
| iberya | 12 | 7 | 7 | 350 | 58% |
| suriye-filistin | 7 | 5 | 5 | 7 | 71% |
| mezopotamya | 2 | 0 | 0 | 0 | 0% |
| ?bilinmeyen | 0 | 22 | 22 | 457 | - |
| **toplam(dunya)** | 1129 | 731 | 731 | 4458 | 65% |

### Bolge bolge, 1923-2000, Osmanli disi (kunye / s: gorunen / boyali / yerlesim)
| bolge | kunye | s: gorunen | boyali | yerlesim | s: orani |
|---|---|---|---|---|---|
| dogu-afrika | 53 | 42 | 42 | 261 | 79% |
| guneydogu-asya | 51 | 37 | 37 | 243 | 73% |
| guney-asya | 39 | 30 | 30 | 184 | 77% |
| balkanlar | 35 | 29 | 29 | 342 | 83% |
| orta-amerika-karayip | 32 | 28 | 28 | 70 | 88% |
| arabistan | 31 | 25 | 25 | 153 | 81% |
| bati-afrika | 30 | 25 | 25 | 136 | 83% |
| orta-avrupa | 28 | 21 | 21 | 132 | 75% |
| kuzey-afrika | 26 | 13 | 13 | 135 | 50% |
| dogu-asya | 22 | 17 | 17 | 227 | 77% |
| guney-afrika | 22 | 18 | 18 | 88 | 82% |
| okyanusya | 21 | 18 | 18 | 146 | 86% |
| dogu-avrupa | 20 | 17 | 17 | 546 | 85% |
| orta-afrika | 18 | 15 | 15 | 142 | 83% |
| guney-amerika | 17 | 15 | 15 | 333 | 88% |
| bati-avrupa | 13 | 11 | 11 | 644 | 85% |
| orta-asya | 12 | 7 | 7 | 79 | 58% |
| italya | 9 | 7 | 7 | 162 | 78% |
| misir-sudan | 9 | 7 | 7 | 176 | 78% |
| kuzey-avrupa | 8 | 7 | 7 | 92 | 88% |
| anadolu | 8 | 8 | 8 | 301 | 100% |
| suriye-filistin | 7 | 6 | 6 | 34 | 86% |
| kafkasya | 7 | 7 | 7 | 50 | 100% |
| kuzey-amerika | 6 | 6 | 6 | 422 | 100% |
| iberya | 5 | 3 | 3 | 122 | 60% |
| iran | 3 | 2 | 2 | 110 | 67% |
| orta-amerika | 2 | 2 | 2 | 84 | 100% |
| sibirya-bozkir | 2 | 1 | 1 | 1 | 50% |
| ?bilinmeyen | 0 | 3 | 3 | 24 | - |
| **toplam(dunya)** | 536 | 427 | 427 | 4518 | 80% |

### Bolge bolge, MO12000-MS1281 (kunye / s: gorunen / boyali / yerlesim)
| bolge | kunye | s: gorunen | boyali | yerlesim | s: orani |
|---|---|---|---|---|---|
| dogu-asya | 152 | 52 | 51 | 108 | 34% |
| guney-asya | 103 | 26 | 22 | 33 | 25% |
| italya | 87 | 43 | 43 | 61 | 49% |
| bati-avrupa | 67 | 24 | 24 | 47 | 36% |
| guneydogu-asya | 62 | 21 | 21 | 40 | 34% |
| orta-asya | 59 | 22 | 17 | 50 | 37% |
| anadolu | 53 | 23 | 23 | 82 | 43% |
| balkanlar | 51 | 11 | 11 | 86 | 22% |
| suriye-filistin | 46 | 25 | 25 | 60 | 54% |
| iran | 42 | 27 | 27 | 74 | 64% |
| orta-avrupa | 39 | 20 | 19 | 60 | 51% |
| iberya | 39 | 13 | 13 | 28 | 33% |
| mezopotamya | 39 | 22 | 22 | 50 | 56% |
| orta-amerika | 36 | 11 | 11 | 15 | 31% |
| misir-sudan | 35 | 10 | 10 | 51 | 29% |
| kuzey-afrika | 35 | 12 | 12 | 32 | 34% |
| arabistan | 32 | 14 | 14 | 15 | 44% |
| dogu-avrupa | 30 | 12 | 12 | 15 | 40% |
| kafkasya | 22 | 4 | 4 | 6 | 18% |
| guney-amerika | 17 | 6 | 6 | 8 | 35% |
| bati-afrika | 12 | 4 | 4 | 5 | 33% |
| dogu-afrika | 11 | 7 | 7 | 9 | 64% |
| sibirya-bozkir | 10 | 3 | 3 | 11 | 30% |
| kuzey-amerika | 10 | 4 | 4 | 4 | 40% |
| okyanusya | 8 | 3 | 3 | 3 | 38% |
| kuzey-avrupa | 7 | 5 | 5 | 8 | 71% |
| guney-afrika | 2 | 0 | 0 | 0 | 0% |
| orta-afrika | 1 | 1 | 1 | 1 | 100% |
| sahra | 1 | 1 | 1 | 1 | 100% |
| ?bilinmeyen | 0 | 5 | 5 | 8 | - |
| **toplam(dunya)** | 1108 | 431 | 420 | 693 | 39% |

## Yontem notlari / sinirlar
- 'Gorunen' VERI duzeyinde olcumdur (yerlesim s: donemi var); motor/Voronoi ciktisi (petek, emilme, bos bolge) bu olcumde YOK. 'Yerlesim sahipli' = s:'si dilimle kesisen sahipli yerlesim sayisi (tek dilimde ayni yerlesim bir kez).
- Bolge, s: kimliginin devletler.js kunyesindeki `bolge` alanindan okunur; kunyesiz s: kimligi `?bilinmeyen` kovasina duser.
- toplam_durum onceligi: madde eksik > boya eksik > hayalet > s yok > TAM; yeni durum `bosluk-beyanli` = s: kullanimi 0 ve kaynagi bir sahip/kunye id'si adlandiran `__BOSLUK__` beyani var. `yer` eksigi bayrak degil, ayri sayilir (eski olcudeki gibi).
- `__BOSLUK__` kova siniflamasi `kaynak:` metnindeki kaliplardan regex ile yapilir (A/D guvenilir, B/C/E kaba); kova E elle bakilmali.
- Eslesme guveni: id-esit 1.0, liste `esleme.mevcut_id` 0.95, id-kok (-tarihsel/-tarih/... soneki atilmis) 0.90, ad-esit 0.90, ad-benzer = SequenceMatcher*donem uyumu (<=0.95). Donemi hic kesismeyen eslesme 0.45-0.55'e duser = 'belirsiz/kunyesiz'.
- tahmini_madde devletsiz maddelerde kunye adinin (>=5 harf) metinde gecmesidir; yanlis pozitif icerebilir, toplam duruma katilmaz. Yalniz 1281 oncesi icin hesaplandi.
