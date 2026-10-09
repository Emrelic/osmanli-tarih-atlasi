# D2-YER-SARTI-OLC-1009 — Değişmez 2'nin `d:`/`v:`/`isg:` kollarına YER ŞARTI eklenirse kaç kırılma açılır?

YALNIZ ÖLÇÜM. `denetle.py` DEĞİŞTİRİLMEDİ; ölçüm aleti `denetle.py`yi import edip
kendi şartını onun yüklediği aynı Y/O evreninde sorar.

## ① Öngörü (ölçümden ÖNCE yazıldı — 9 Ekim 2026)
Evren: `degismez2(Y_cekirdek, O)` — `d:`+`v:` birlikte, birim TARİH (§1.5: 623 kırılma, 0 açık).
Bugün tarih ±30 günde HERHANGİ bir madde varsa kapalıdır.

| Sıkılık | Tanım (kısa) | Öngörü: açılan tarih / 623 |
|---|---|---|
| A | `yer_id`/`odak_yer` = nokta ya da noktanın `m:` merkezi | ~380 (%60) |
| B | A + başlıkta (`b`) noktanın adı (norm) | ~260 (%42) |
| C | B + `yer_id`si noktaya ≤150 km olan madde | ~120 (%19) |

- Sınav noktaları: DOGU-1533 (5 nokta, `1534-01-01`) A, B, C'nin ÜÇÜNDE DE açılmalı
  (Bitlis maddesi ~250 km ötede → C de kapatmaz). Divriği 1401 (kopya düzeltmesi indiyse
  kırılma gün değiştirmiş olabilir) A ve B'de açılmalı.
- Sınıf öngörüsü (A'da açılanlar): eşleştirme kusuru en büyük kova (~%45 — madde yeri
  gövdede/başlıkta/merkez adıyla anıyor ama `yer_id` farklı), kayma ~%20, gerçekten maddesiz ~%35.
- En büyük kümeler: büyük antlaşmalar (1699 Karlofça, 1718 Pasarofça, 1774 Küçük Kaynarca,
  1878 Berlin, 1913) ve `YYYY-01-01` yıl-temsilî kovalar — antlaşma maddeleri yerleri
  saymadan devrettiği için A/B'de toplu açılacak.
- `v:`: kırılma azdır (tâbi kayıtlar seyrek), açılma oranı `d:`den YÜKSEK (~%70 A'da) —
  tâbi devirler (Eflak/Boğdan/Kırım/Mısır/Tunus) çoğunlukla bölge adıyla anılır, nokta adıyla değil.
- `isg:`: 171 kırılma, A'da ~%50 açılır.



## ② Bugünkü eşleştirme — ne ile eşliyor (okundu, `arac/denetle.py` @ origin/main `647bcf31`)
- `degismez2(Y_cekirdek, O)` (`denetle.py:6509`, tanım `:1790`), `kategoriler=("d","v")`, `yer_sarti=False`.
- Kırılma = TARİH (`kir[d]`); `d:` ve `v:` dönemlerinin `f`/`t` ucu aynı sözlüğe düşer, yani bir tarihte
  d ve v kırılması birlikte tek kırılmadır. Tarih, ±30 günde **HERHANGİ** bir madde varsa kapalıdır
  (`fark <= 30`). Yer, taraf, tür hiç sorulmaz.
- `yer_id` yalnız BERABERLİK BOZUCUDUR (rapor hangi maddeyi göstersin) — hükmü değiştirmez.
- `isg:` kolu (`:6599`) aynı fonksiyonu aynı şartsız dalla çağırır.
- `s:` kolu (`:6530`) `yer_sarti=True`: her BİRİM (yer×gün) ayrı sorulur, tarih ancak HER birimi
  açıklanmışsa kapanır (Mankup 1349). İki kol: YER (`_2s_yeri_aniyor`: `yer_id` ∈ adlar · kök adı
  tam metinde ÖZEL AD olarak · merkez adı yalnız başlık+`yer`de ya da `yer_id` = merkez) ve TARAF
  (`_2s_tarafi_aniyor`: eski/yeni sahibin künye adı BAŞLIKTA ya da ikisi birlikte metinde). 2sk bu iki
  kolu "YER anılarak" / "YALNIZ TARAF ile" diye ayrı sayar.
- Bu ölçüm 2s'in birim mantığını AYNEN aldı; YER kolunu görevin A/B/C tanımıyla değiştirdi; TARAF kolunu
  kapatıcı olarak DEĞİL bayrak olarak ölçtü (Osmanlı tarafının adı her başlıkta geçer, ölçmez — yalnız
  KARŞI devletin adı sayıldı).

## ③ Tanımlar (alet: `denetim/ARAC-D2-YER-SARTI-OLC-1009.py`)
| | Birim kapanır, eğer ±30 günde bir madde… |
|---|---|
| **A** | `yer_id` ya da `odak_yer` = nokta **veya** noktanın `m:` merkezi |
| **B** | A, **veya** BAŞLIKTA (`b`) noktanın adı (kök + parantez içi ad; `ARAC-NORMAL-0903.norm`; kelime sınırı; ÖZEL AD = ham metinde büyük harf; `_2S_ES_AD` kökleri hariç) |
| **C** | B, **veya** `yer_id`/`odak_yer`'i noktaya ≤150 km |

Sınıf (açılan her birim için, sıkılıktan bağımsız GEVŞEK "yeri anıyor" = A ∪ ad başlık+`yer`+GÖVDE'de ∪ merkez adı başlık+`yer`de):
- **ESLESTIRME** — ±30 içinde GEVŞEK'i tutan madde VAR (yeri anıyor ama ölçütün baktığı alanda değil)
- **KAYMA** — ±30 içinde yok, ±365 içinde var (gün/madde kayması)
- **MADDESIZ** — ±365 içinde yeri anan madde YOK

Kesen iki bayrak (sınıfı değiştirmez): **G = AYNIGUN** (kırılma `-01-01` değil ve tam o güne yazılmış
madde var ⇒ gün o maddeden alınmış; toplu devir — olay maddesi yer saymıyor) · **T = TARAF** (karşı
devletin künye adı ±30'daki bir maddenin başlığında). Ne G ne T olan açılmış birim = **SAHTE-ADAYI**:
DIVRIGI/DOGU-1533 deseni (ilgisiz madde aynı yıla düştü).

## Ölçüm (9 Ekim 2026, origin/main `647bcf31`, 4300 yerleşim / 3193 çekirdek, 2212 madde)
⚠️ Bugün `d:`+`v:` = **625** kırılma (§1.5 623 diyor — bayat), açık 0. Kapalı birim 3108.

### Açılan sayılar
| Kol | Kırılma (kapalı) | A tarih / birim | B tarih / birim | C tarih / birim |
|---|---|---|---|---|
| **d+v (Değişmez 2)** | 625 / 3108 birim | **321** / 1689 | **278** / 1583 | **168** / 1016 |
| yalnız `d:` | 529 / 2522 | 261 / 1403 | 220 / 1303 | 122 / 816 |
| yalnız `v:` | 172 / 833 | 101 / 416 | 99 / 409 | 73 / 314 |
| `isg:` (2i) | 170 (+1 açık) / 565 | 52 / 196 | 43 / 183 | 37 / 141 |

(d ve v satırlarının toplamı d+v'yi aşar: aynı tarihte iki kolda kırılma olabilir.)

### ④ Sınıf dağılımı (birim)
| Kol / sıkılık | ESLESTIRME | KAYMA | MADDESIZ | G (aynı gün) | T (taraf) | G∨T | **SAHTE-ADAYI** (birim / tarih) |
|---|---|---|---|---|---|---|---|
| d+v A | 474 | 349 | 866 | 1400 | 453 | 1420 | **269 / 116** |
| d+v B | 368 | 349 | 866 | 1351 | 437 | 1366 | **217 / 97** |
| d+v C | 173 | 262 | 581 | 885 | 272 | 891 | **125 / 63** |
| v A | 97 | 79 | 240 | 366 | 81 | 368 | 48 / 28 |
| v C | 50 | 76 | 188 | 283 | 59 | 285 | 29 / 18 |
| isg A | 59 | 25 | 112 | 142 | 82 | 161 | 35 / 22 |
| isg C | 41 | 22 | 78 | 103 | 61 | 120 | 21 / 13 |

SAHTE-ADAYI'nın `YYYY-01-01` payı: d+v A **191/269** · B 141/217 · C 73/125. ⇒ Kusur sınıfı yıl-temsilî
günlerde yoğunlaşıyor (ilgisiz "aynı yılın 1 Ocak'ı" maddesi kapatıyor).

### Okuma — en önemli bulgu
**Yer şartı eklenince açılanların %83'ü (1420/1689, A) bir OLAY MADDESİNİN tam gününe oturuyor**
(TBMM 1920-04-23 · Çamurlu 1413-07-05 · Ankara 1402-07-28 · Berlin · Lozan · Mondros…). Bunlar 2s'in
"YALNIZ TARAF" kovasının d: karşılığıdır: madde devri doğru anlatıyor, yalnız yerleri saymıyor.
Yer şartı tek başına bunları İHLAL yapar ⇒ çare madde yazmak değil, "toplu devir" beyanıdır (2sk gibi
ayrı kova). DIVRIGI/DOGU-1533 sınıfı (gerçek sahte kapanış) **116 tarih / 269 birim (A)** — C'de **63 / 125**.

## Sınav (iki yön, `--sinav`)
| Durum | bugünkü kural | A | B | C |
|---|---|---|---|---|
| Divriği 1401 maddesi YERİNDE (origin/main'de var: "Divriği, Timur tehlikesi yüzünden yeniden Memlükler'e verildi") | KAPALI | kapalı | kapalı | kapalı |
| aynı madde bellekte ÇIKARILINCA (eski hâl) | **KAPALI** (Diyarbekir 1401-01-01 kapatıyor) | **AÇAR** | **AÇAR** | **AÇAR** |

- **DOGU-1533 hâlâ canlı:** `1534-01-01` 6 nokta kırılıyor, Bitlis kendi maddesiyle kapanıyor, kalan **5'i
  A/B/C'nin ÜÇÜNDE DE AÇIK**: Arpaçay (Akyaka) · Digor · Iğdır (KAYMA, 151 g → 1534-06-01 "Kars çevresinin
  bütünleşmesi") · Beri · Küçükperveli (MADDESIZ, `m:` yok, ±365'te anan madde yok). Kars'ın kendisi
  1534-06-01'e taşınmış (kapalı). Rapordaki "beş nokta" kümesi Kars yerine Beri/Küçükperveli ile sürüyor.
- **Erciş (EEK):** Erciş'in kırılması `s:` (karakoyunlu→akkoyunlu) — d/v kolunun evreninde YOK; 2s zaten
  `yer_sarti=True`. Erciş d+v'de yalnız 1920-04-23'te açılıyor (MADDESIZ, G+T).
- Öngörü karşılaştırması: A 380 öngörü → **321** · B 260 → **278** · C 120 → **168**. Sınıf öngörüsü TUTMADI
  (ESLESTIRME %45 dedim, %28 çıktı; MADDESIZ %51). En büyük küme antlaşma değil **1920-04-23 TBMM** (215 birim).
  `v:` A'da %59 (öngörü %70 — yön tuttu, büyüklük fazla) · `isg:` A'da %31 (öngörü %50 — TUTMADI).

## Ölçülemeyen / sınır
- GEVŞEK sınıf ölçütü gövdede (`d`) ad aramayı içerir; büyük harf şartı var ama gövde kelime çakışması
  (KELIME-CAKISMA-YER-1006 sınıfı) ESLESTIRME'yi şişirebilir — elle doğrulanmadı.
- "Bölge" kümesi `m:` merkezine göre; `m:`'si olmayan nokta kendi adıyla küme olur (Beri, Küçükperveli).
- TARAF bayrağı yalnız noktanın aynı gün `s:`/`isg:`/`v:`/`d:` ucundaki `d:` alanından okunur; `v:` dönemi
  `d:` taşımıyorsa karşı taraf bilinmez (yanlış negatif olabilir).
- `kd:` okunmadı (motor da okumuyor; ölçüme girmez).

## İstenen (koordinatöre)
1. d/v'ye yer şartı **tek başına İNDİRİLMEMELİ**: A'da 321 tarih açılır, %83'ü olay maddesine oturan
   toplu devirdir. Öneri: 2sk deseni — birim YER / TOPLU-DEVİR (G∨T) / AÇIK üç kovaya; yalnız SAHTE-ADAYI
   (A 116 tarih/269 birim; `-01-01` ağırlıklı) ihlal adayı olarak tavanla dondurulur (`§3.4`: tavan yazılmadan
   önce yeniden ölçülür).
2. DOGU-1533 kalıntısı (Arpaçay/Digor/Iğdır/Beri/Küçükperveli `1534-01-01`) veri sahibine — `DOGU-1533-0087-KOORD.diff` origin/main'e inmemiş görünüyor.
3. Sıkılık seçimi: C (≤150 km) gerçek bir yer şartı değil, komşu maddeye kapı aralar (Rodos 1566 kümesini C tamamen kapatıyor, Nakşa maddesi Kiklad noktalarını saymasa da). Önerim **B + G/T kovası**.

---
## Ekler
Gösterim: `[E/K/M]` = ESLESTIRME/KAYMA/MADDESIZ · `·B` / `·C` = o sıkılıkta DA açık (yoksa o sıkılık kapatıyor) ·
`açık:ABC` aynı anlam · `T`/`G` bayraklar · "kapatan" = bugün ±30'da en yakın maddeler.

### E1 — En büyük 20 TARİH (d+v, A) — `| tarih | tip | açık/nokta | B'de açık | C'de açık | sınıf | bugün kapatan |`
|---|---|---|---|---|---|---|
| 1920-04-23 | kayip | 215/248 | 215 | 158 | {'KAYMA': 140, 'MADDESIZ': 75} | 0g Türkiye Büyük Millet Meclisi'nin açılışı |
| 1413-07-05 | kazanc | 140/150 | 140 | 137 | {'KAYMA': 45, 'MADDESIZ': 95} | 0g Çamurlu Savaşı — birliğin yeniden kurulması |
| 1402-07-28 | kayip | 120/220 | 118 | 74 | {'MADDESIZ': 59, 'ESLESTIRME': 54, 'KAYMA': 7} | 0g Ankara Savaşı — Fetret Devri başladı |
| 1805-07-03 | kayip | 55/55 | 55 | 55 | {'KAYMA': 47, 'ESLESTIRME': 8} | 0g Bâbıâli oldubittiyi kabul etti: Mısır valiliği fermanı |
| 1878-07-13 | kayip | 36/37 | 36 | 28 | {'MADDESIZ': 14, 'ESLESTIRME': 9, 'KAYMA': 13} | 0g Berlin Antlaşması |
| 1923-07-24 | kayip | 22/23 | 22 | 22 | {'MADDESIZ': 16, 'KAYMA': 6} | 0g Lozan Antlaşması |
| 1516-08-24 | kazanc | 21/36 | 21 | 16 | {'MADDESIZ': 17, 'KAYMA': 2, 'ESLESTIRME': 2} | 0g Ramazanoğulları Beyliği'nin Osmanlı'ya bağlanması |
| 1517-05-19 | kazanc | 21/22 | 21 | 9 | {'KAYMA': 19, 'ESLESTIRME': 2} | 0g İskenderiye'nin donanmayla teslim alınması — Mısır fethinin  |
| 1918-10-30 | kayip | 21/26 | 21 | 20 | {'MADDESIZ': 20, 'KAYMA': 1} | 0g Mondros Mütarekesi |
| 1830-02-03 | kayip | 20/21 | 20 | 5 | {'MADDESIZ': 19, 'KAYMA': 1} | 0g Londra Protokolü — Yunanistan'ın bağımsızlığının tanınması |
| 1390-01-01 | kazanc | 16/17 | 15 | 8 | {'ESLESTIRME': 15, 'MADDESIZ': 1} | 0g Batı Anadolu beyliklerinin ilhakı: Saruhan, Aydın, Menteşe |
| 1774-07-21 | kayip | 16/22 | 16 | 16 | {'MADDESIZ': 16} | 0g Küçük Kaynarca Antlaşması |
| 1913-05-30 | kayip | 16/24 | 16 | 12 | {'KAYMA': 9, 'MADDESIZ': 7} | 0g Londra Antlaşması — Rumeli'nin kaybı |
| 1913-11-14 | kayip | 16/19 | 15 | 8 | {'ESLESTIRME': 9, 'MADDESIZ': 7} | 0g Atina Antlaşması: Yunanistan ile barış ve Selanik-Yanya'nın  |
| 1566-04-15 | kazanc | 15/16 | 15 | 0 | {'ESLESTIRME': 7, 'MADDESIZ': 8} | 0g Nakşa Dukalığı'nın ilhakı — Kiklad Adaları'nın tamamı |
| 1730-08-12 | kayip | 15/18 | 12 | 12 | {'ESLESTIRME': 10, 'MADDESIZ': 5} | 0g Nâdir'in taarruzu: Tebriz, Nahçıvan, Hemedan, Kirmanşah, Mer |
| 1841-02-25 | kayip | 14/22 | 14 | 10 | {'ESLESTIRME': 9, 'MADDESIZ': 3, 'KAYMA': 2} | 0g Mısır ordusu Suriye ve Çukurova'yı boşalttı |
| 1878-03-03 | kayip | 14/14 | 14 | 1 | {'KAYMA': 10, 'MADDESIZ': 4} | 0g Ayastefanos Antlaşması: Büyük Bulgaristan tasarısı |
| 1425-06-01 | kazanc | 13/14 | 13 | 1 | {'ESLESTIRME': 13} | 0g Batı Anadolu beyliklerinin yeniden ilhakı: Menteşe ve Aydın |
| 1699-01-26 | kayip | 13/13 | 13 | 13 | {'ESLESTIRME': 1, 'MADDESIZ': 12} | 0g Karlofça Antlaşması — ilk büyük toprak kaybı |

### E2 — En büyük 20 KÜME (aynı gün + aynı `m:` bölgesi; d+v, A) — `| tarih | bölge | açık | B | C | sınıf | bayrak | bugün kapatan | en yakın yeri anan |`
|---|---|---|---|---|---|---|---|---|
| 1805-07-03 | Kahire | 55 | 55 | 55 | {'KAYMA': 47, 'ESLESTIRME': 8} | {'G': 55} | 0g Bâbıâli oldubittiyi kabul etti: Mısır valiliği fer | 0g 1805-07-03 Bâbıâli oldubittiyi kabul etti: Mısır valiliğ |
| 1413-07-05 | Bursa | 45 | 45 | 45 | {'KAYMA': 45} | {'G': 45} | 0g Çamurlu Savaşı — birliğin yeniden kurulması | 180g 1414-01-01 Bursa Yeşil Cami Külliyesi'nin inşaatının baş |
| 1920-04-23 | Bursa | 45 | 45 | 7 | {'KAYMA': 45} | {'TG': 45} | 0g Türkiye Büyük Millet Meclisi'nin açılışı | 60g 1920-06-22 Yunan yaz taarruzu — Akhisar, Soma, Balıkesir |
| 1413-07-05 | Edirne | 30 | 30 | 30 | {'MADDESIZ': 30} | {'G': 30} | 0g Çamurlu Savaşı — birliğin yeniden kurulması | 869g 1411-02-17 Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim |
| 1920-04-23 | Edirne | 26 | 26 | 20 | {'KAYMA': 26} | {'TG': 26} | 0g Türkiye Büyük Millet Meclisi'nin açılışı | 88g 1920-07-20 Yunan ordusunun Doğu Trakya'yı işgali — Edirn |
| 1517-05-19 | Kahire | 21 | 21 | 9 | {'KAYMA': 19, 'ESLESTIRME': 2} | {'G': 21} | 0g İskenderiye'nin donanmayla teslim alınması — Mısır | 0g 1517-05-19 İskenderiye'nin donanmayla teslim alınması —  |
| 1402-07-28 | Kütahya | 14 | 14 | 7 | {'MADDESIZ': 9, 'ESLESTIRME': 5} | {'G': 14} | 0g Ankara Savaşı — Fetret Devri başladı | 0g 1402-07-28 Ankara Savaşı — Fetret Devri başladı |
| 1920-04-23 | Kütahya | 14 | 14 | 14 | {'KAYMA': 14} | {'TG': 14} | 0g Türkiye Büyük Millet Meclisi'nin açılışı | 34g 1920-03-20 İngilizlerin Eskişehir'i boşaltması |
| 1830-02-03 | Rodos | 13 | 13 | 0 | {'KAYMA': 1, 'MADDESIZ': 12} | {'TG': 13} | 0g Londra Protokolü — Yunanistan'ın bağımsızlığının t | 256g 1830-10-17 Sırbistan'a özerklik fermanı — irsî knezlik v |
| 1923-07-24 | Rodos | 13 | 13 | 13 | {'MADDESIZ': 13} | {'G': 13} | 0g Lozan Antlaşması | 3931g 1912-10-18 Uşi Antlaşması: Trablusgarp ve Bingazi'nin İt |
| 1402-07-28 | Sofya | 12 | 12 | 11 | {'ESLESTIRME': 11, 'MADDESIZ': 1} | {'G': 12} | 0g Ankara Savaşı — Fetret Devri başladı | 0g 1402-07-28 Ankara Savaşı — Fetret Devri başladı |
| 1878-07-13 | Sofya | 12 | 12 | 12 | {'KAYMA': 9, 'ESLESTIRME': 3} | {'G': 8, 'TG': 4} | 0g Berlin Antlaşması | 0g 1878-07-13 Berlin Antlaşması |
| 1566-04-15 | Rodos | 11 | 11 | 0 | {'ESLESTIRME': 6, 'MADDESIZ': 5} | {'G': 11} | 0g Nakşa Dukalığı'nın ilhakı — Kiklad Adaları'nın tam | 0g 1566-04-15 Nakşa Dukalığı'nın ilhakı — Kiklad Adaları'nı |
| 1920-04-23 | Sivas | 11 | 11 | 11 | {'KAYMA': 11} | {'TG': 11} | 0g Türkiye Büyük Millet Meclisi'nin açılışı | 184g 1919-10-22 Amasya Protokolü: İstanbul hükümetiyle Heyet- |
| 1920-04-23 | İzmir | 11 | 11 | 11 | {'KAYMA': 11} | {'TG': 11} | 0g Türkiye Büyük Millet Meclisi'nin açılışı | 109g 1920-08-10 Sevr Antlaşması — imparatorluğun paylaşım met |
| 1461-06-01 | Ankara | 10 | 10 | 9 | {'MADDESIZ': 7, 'ESLESTIRME': 3} | {'G': 10} | 0g Amasra ve Sinop'un katılışı | 0g 1461-06-01 Amasra ve Sinop'un katılışı |
| 1552-01-01 | Cezayir | 10 | 9 | 5 | {'ESLESTIRME': 10} | {'-': 10} | 0g Cezayir Ocaklığı'nın Sahra'ya doğru genişlemesi —  | 0g 1552-01-01 Cezayir Ocaklığı'nın Sahra'ya doğru genişleme |
| 1878-03-03 | Erzurum | 10 | 10 | 1 | {'KAYMA': 10} | {'G': 10} | 0g Ayastefanos Antlaşması: Büyük Bulgaristan tasarısı | 105g 1877-11-18 Kars'ın düşüşü — Doğu cephesinin çözülmesi ve |
| 1918-10-30 | Sana | 10 | 10 | 10 | {'MADDESIZ': 10} | {'G': 10} | 0g Mondros Mütarekesi | 4807g 1905-09-01 San'a'nın geri alınması: İmam Yahyâ isyanının |
| 1920-04-23 | Konya | 10 | 10 | 10 | {'MADDESIZ': 10} | {'TG': 10} | 0g Türkiye Büyük Millet Meclisi'nin açılışı | 7452g 1899-11-27 Konya-Bağdat hattı imtiyazının Almanlara veri |

### E3 — SAHTE-ADAYI (d+v, A; ne aynı gün ne taraf) — 116 tarih / 269 birim
- **1288-01-01** kazanc (1): Eskişehir[E] — kapatan: 0g 1288-01-01 Karacahisar'ın fethi — ilk şehir kazanımı ve Eskiş
- **1299-01-01** kazanc (2): Yarhisar[E], İnegöl[E·B] — kapatan: 0g 1299-01 Osmanlı Beyliği'nin kuruluşu; 0g 1299-01-01 Bilecik ve Yarhisar'ın gece baskınıyla fethi
- **1303-01-01** kazanc (2): Kestel[E·B], Kite (Kete)[E] — kapatan: 0g 1303-01-01 Dimbos zaferi ve ardından Kite ile Ulubat'ın alınm
- **1304-01-01** kazanc (4): Akhisar (Pamukova)[E·B], Geyve[E], Lefke (Osmaneli)[E], Mekece[E] — kapatan: 0g 1304-01-01 Sakarya seferi: Leblebicihisar, Lefke, Mekece ve G
- **1305-01-01** kazanc (2): Absu (Hypsu)[E], Karatigin[E] — kapatan: 0g 1305-01-01 Geyve Boğazı kalelerinin fethi: Karaçepüş, Karatig
- **1323-01-01** kazanc (1): Karamürsel[E] — kapatan: 0g 1323-01-01 Yalova ve Karamürsel'in katılışı; 0g 1323-01-01 Uluğ Han Varangal'i zaptetti, Kakatiya ülkesi Delh
- **1324-01-01** kazanc (1): İmralı Adası[E] — kapatan: 0g 1324-01-01 Akyazı ve İmralı Adası'nın fethi; 0g 1324-01-01 Osman Gazi'nin vefatı ve Orhan Bey'in beyliğe geçi
- **1325-01-01** kazanc (2): Konurapa (Düzce)[E], Mudurnu[E] — kapatan: 0g 1325-01-01 Konuralp'in Bolu yöresini fethi — Mudurnu, Konurap
- **1345-01-01** kazanc (8): Ayvalık[E·B], Behramkale (Assos)[E·B], Bergama[E], Biga[E], Edremit[E], Erdek[E], Karabiga[E·B], Çanakkale[E·B] — kapatan: 0g 1345-01-01 Karesi Beyliği'nin ilhakı: Balıkesir, Bergama, Big
- **1357-01-01** kazanc (7): Ferecik (Feres)[E·B], Karpuzlu (Yenikarpuzlu)[M·B], Saroz kuzey kıyısı[E·B], Tekirdağ[E], Távri[M·B], İpsala[E], Şarköy[E·B] — kapatan: 0g 1357-01-01 Süleyman Paşa döneminde Trakya ilerleyişi: Malkara
- **1360-01-01** kazanc (2): Keşan[E], Lüleburgaz[E] — kapatan: 0g 1360-01-01 Edirne'nin yardım yollarının kesilmesi: Çorlu, Lül; 0g 1360-01-01 Dulkadirli Halil Bey sınırlarını Zamantı'ya kadar 
- **1361-01-01** kazanc (2): Küfkaynapınarı (Azatlı)[M·B], Stérna[M·B] — kapatan: 0g 1361-01-01 Dimetoka'nın alınışı — Meriç vadisinin açılması; 0g 1361-01-01 Pençik Kanunu — Yeniçeri Ocağı'nın temelinin atılm
- **1369-01-01** kazanc (8): Ahtapolu (Ahtopol)[M·B], Demirköy[E·B], Dereköy (Kırklareli)[E], Kofçaz[E·B], Malko Tırnova[E·B], Rezve (Rezovo)[M·B], Vize[E], İğneada[M·B] — kapatan: 0g 1369-01-01 Istıranca kaleleri: Pınarhisar, Kırkkilise (Kırkla; 0g 1369-01-01 Timurtaş Bey Tunca vadisinde Kızılcaağaç Yenicesi 
- **1373-01-01** kazanc (2): İhtiman[E], İskeçe[M·B] — kapatan: 0g 1373-01-01 Filibe'nin batısı: Tatarpazarcığı ve İhtiman'ın ka
- **1374-01-01** kazanc (3): Drama[E], Nevrokop (Gotse Delçev)[E], Petriç[E] — kapatan: 0g 1374-01-01 Struma ve Mesta vadileri: Köstendil, Petriç, Nevro
- **1385-01-01** kazanc (3): Filorina (Florina)[M·B], Kesriye (Kastoria)[M·B], Ohri[E] — kapatan: 0g 1385-01-01 Makedonya'nın içine ilerleyiş: Manastır ve Ohri'ni
- **1386-01-01** kazanc (1): Şehirköy (Pirot)[K·B] — kapatan: 0g 1386-01-01 Niş'in fethi; 0g 1386-01-01 Timur'un 'üç yıllık sefer'i: Azerbaycan ve Kuzey İ
- **1390-01-01** kazanc (16): Alaşehir[E·B], Ayasuluk (Selçuk)[E·B], Aydın[E], Balat (Palatia)[E·B], Birgi[E·B], Datça[E·B·C], Denizli[E·B·C], Fethiye (Makri)[E·B·C], Karahisâr-ı Sâhib (Afyon)[E·B·C], Marmaris[E·B·C], Milas[E·B], Muğla[E·B·C], Söke[E·B], Tire[E·B], Uşak[E·B·C], Yenice-i Vardar[M·B·C] — kapatan: 0g 1390-01-01 Batı Anadolu beyliklerinin ilhakı: Saruhan, Aydın,; 0g 1390-01-01 Minjo hanedanı tarafından kuruldu (gelenek)
- **1391-01-01** kazanc (4): Burdur[M·B·C], Eğirdir[M·B·C], Isparta[M·B·C], Uluborlu[M·B·C] — kapatan: 0g 1391-01-01 Karadeniz kıyısında Varna'nın alınışı
- **1394-01-01** kazanc (2): Yenişehir (Larissa)[E·B], İzdin (Lamia)[E·B] — kapatan: 0g 1394-01-01 Teselya'ya iniş; 0g 1394-01-01 Yıldırım Bayezid İstanbul'u yeniden sıkı bir kuşat
- **1395-01-01** kazanc (2): Debre (Dibra)[M·B·C], Görice (Korçë)[M·B·C] — kapatan: 0g 1395-01-01 Niğbolu'nun fethi
- **1398-01-01** kazanc (2): Behisni (Besni)[E], Darende[E] — kapatan: 0g 1398-01-01 Yıldırım Bayezid Sivas, Malatya, Besni, Darende ve
- **1398-06-01** kazanc (5): Gölköy (Habsamana)[M·B], Mesudiye (Milas)[M·B·C], Ordu (Bayramlı)[M·B], Reşadiye (İskefsir)[M·B], Ünye[M·B] — kapatan: 30g 1398-07-01 Canik kıyılarının katılışı: Samsun
- **1417-01-01** kazanc (2): Berat[E], Ergiri (Ergirikasrı)[M·B] — kapatan: 0g 1417-01-01 Bahreyn adalarının Cebrîler'in eline geçmesi; 0g 1417-01-01 Avlonya, Berat ve Kanina'nın fethi
- **1419-01-01** kazanc (2): Kırşehir[E], İshakçı (Isaccea)[E·B·C] — kapatan: 0g 1419-01-01 Silistre ve Dobruca'nın geri alınışı — Mircea'nın ; 0g 1419-01-01 Orta Anadolu'nun geri alınışı: Kayseri ve Kırşehir
- **1428-01-01** kazanc (2): Niş[E], Şehirköy (Pirot)[E] — kapatan: 0g 1428-01-01 II. Murad Alacahisar'ı aldı, Niş ve Şehirköy Osman; 0g 1428-01-01 Tenochtitlan, Texcoco ve Tlacopan Üçlü İttifak'ı k
- **1429-01-01** kazanc (1): Denizli[M·B·C] — kapatan: 0g 1429-01-01 Germiyan'ın vasiyetle ilhakı
- **1430-10-01** kazanc (1): Ayasaranda (Sarandë)[M·B] — kapatan: 8g 1430-10-09 Yanya'nın teslimi
- **1449-01-01** kazanc (2): Preveze[E], Vonitsa[M·B] — kapatan: 0g 1449-01-01 Epir kıyısının katılışı: Arta ve Preveze
- **1455-01-01** kazanc (2): Taşoz[E], İmroz[E] — kapatan: 0g 1455-01-01 Kuzey Ege adalarının alınışı: Bozcaada, İmroz ve T
- **1456-01-01** kazanc (1): Niş[E·B] — kapatan: 0g 1456-01-01 Şehirköy Osmanlı hâkimiyetine döndü — Curac Branko; 23g 1456-01-24 Enez'in ve Semadirek'in fethi — Batı Trakya kıyısı
- **1460-01-01** kazanc (1): Tuzla (Bosna)[M·B] — kapatan: 0g 1460-01-01 Batı Karadeniz kıyısının alınışı: Amasra; 0g 1460-01-01 İzvornik (Zvornik) kalesinin fethi
- **1465-01-24** kayip (1): Kili[M·B·C] — kapatan: 23g 1465-01-01 Foça'nın alınışı — Hersek Düklüğü'ne ilk girişin a
- **1468-01-01** kazanc (2): Karapınar[E·B], Ulukışla[E·B·C] — kapatan: 0g 1468-01-01 Karaman'ın kesin ilhakı; 0g 1468-01-01 Kâsım Han'ın ölümü, Danyal Han'ın tahta çıkışı (Ka
- **1471-01-01** kazanc (2): Anamur[E], Böğürdelen (Šabac)[M·B·C] — kapatan: 0g 1471-01-01 Alanya, Anamur ve Silifke'nin (İçel) ilhakı
- **1482-01-01** kazanc (1): Kırcaali[K·B·C] — kapatan: 0g 1482-01-01 Crnojeviç Zetası'nın tâbiiyeti ve Cetinje'nin merk; 0g 1482-01-01 Hersek'in ilhakı
- **1518-01-01** kazanc (1): Hacıoğlupazarcığı (Dobrich)[M·B·C] — kapatan: 0g 1518-01-01 Erzurum Osmanlı idaresine katıldı — Doğu Anadolu'd
- **1521-01-01** kazanc (2): Ba'lebek (Baalbek)[M·B·C], Fornoz (Fourni)[M·B] — kapatan: 0g 1521-01-01 Portekiz'in Bahreyn'i alışı — Cebrî hâkimiyetinin ; 0g 1521-01-01 Pîrî Reis'in Kitâb-ı Bahriye'nin ilk versiyonunu t
- **1522-01-01** kazanc (3): Göksun[E·B], Gürün[E·B], Zamantı (Pınarbaşı)[E·B] — kapatan: 0g 1522-01-01 Bagirmi Sultanlığı kuruldu; 0g 1522-01-01 Dulkadir ülkesinin ilhakı — Maraş merkezli Dulkadı
- **1524-01-01** kazanc (1): Orsova (Eski Orsova)[M·B·C] — kapatan: 0g 1524-01-01 Mısır'da Hain Ahmed Paşa isyanı
- **1526-01-01** kayip (1): Konstantin[M·B·C] — kapatan: 0g 1526-01-01 Pîrî Reis'in Kitâb-ı Bahriye'yi genişletip Kanûnî ; 0g 1526-01-01 Kalender Şah isyanı
- **1527-01-01** kazanc (2): Gospić[K·B], Konstantin[M·B·C] — kapatan: 0g 1527-01-01 Demak Sultanlığı'nın Majapahit'i yıkıp Cava kıyısı; 0g 1527-01-01 Cetin Meclisi — Hırvat soyluları Mohaç'tan sonra H
- **1528-01-01** kazanc (1): Yayça (Jajce)[E] — kapatan: 0g 1528-01-01 Kuzey Bosna'nın ilhakı: Yayça ve Banaluka
- **1534-01-01** kazanc (5): Arpaçay (Akyaka)[K·B·C], Beri[M·B·C], Digor[K·B·C], Iğdır[K·B·C], Küçükperveli[M·B·C] — kapatan: 0g 1534-01-01 Matrakçı Nasuh'un Irakeyn seferi güzergâhını Beyân; 0g 1534-01-01 Kanunî – Hürrem Sultan nikâhı
- **1535-01-01** kazanc (2): Annaba[M·B·C], Şehrizor[M·B·C] — kapatan: 0g 1535-01-01 Fuzûlî'nin Leylâ vü Mecnûn mesnevisini tamamlaması; 17g 1535-01-18 Lima kuruldu — İspanyol Peru'sunun başkenti Rimac 
- **1537-01-01** kazanc (1): Paros[E·B] — kapatan: 0g 1537-01-01 Barbaros'un Ege adaları seferi — Nakşa Dükalığı Os; 0g 1537-01-01 Norveç'in Danimarka tacına bağlı bir eyalete indir
- **1538-01-01** kazanc (4): Bosna Brod'u (Bosanski Brod)[M·B·C], Bosna Dubiçası (Bosanska Dubica)[M·B·C], Jasenovaç (Jasenovac)[M·B·C], Seyûn (Sayvan)[M·B·C] — kapatan: 0g 1538-01-01 Mimar Sinan'ın hassa mimarbaşılığına atanması; 0g 1538-01-01 Herseknovi (Castelnuovo) Andrea Doria tarafından z
- **1540-01-01** kazanc (1): Annaba[M·B·C] — kapatan: 0g 1540-01-01 Yatenga krallığı Vagadugu'dan ayrıldı; 0g 1540-01-01 De Soto seferi bölgeden geçti
- **1540-10-02** kazanc (2): Nadin[M·B·C], Vrana (Urana)[M·B·C] — kapatan: 2g 1540-10-04 San Francisco de Campeche kuruldu — Yucatán fethin; 30g 1540-11-01 Anabolu'nun (Nauplion) antlaşmayla devralınması
- **1546-01-01** kazanc (1): Abâdân[M·B] — kapatan: 0g 1546-01-01 Basra'nın ilhakı ve Basra Körfezi'ne çıkış
- **1550-01-01** kazanc (4): Adapazarı[K·B·C], Cübeyl[E·B·C], Katîf[E], Ukayr (Uceyr)[E·B] — kapatan: 0g 1550-01-01 Lahsa ve Katîf'in ilhakı — Körfez'in Arabistan kıy; 0g 1550-01-01 Şehrizor'un elden çıkışı — Erdelân beyi Sührâb Saf
- **1551-01-01** kazanc (9): Ahılkelek (Akhalkalaki)[E·B], Artvin[E·B], Borçka[E·B], Hanak[E·B], Hopa[E·B], Posof[E·B], Sarp[E·B], Saylıca[M·B], Şavşat[E·B] — kapatan: 0g 1551-01-01 Ardahan ve Çıldır havzasının alınması
- **1551-07-26** kayip (4): Brassó (Braşov)[M·B·C], Erdel (Kaloşvar)[E], Erdel Belgradı (Gyulafehérvár)[M·B], Segesvár (Sighişoara)[M·B·C] — kapatan: 20g 1551-08-15 Trablusgarp'ın fethi; 25g 1551-07-01 Erdel'in Banat kalelerinin (Temeşvar, Lippa, Lugos
- **1552-01-01** kazanc (11): Ayn Temûşent[E·B], Ağvât[E·B·C], Biskra[E·B·C], Bû Sa'âde[E·B·C], Gardâye[E·B·C], Muaskar[E·B], Mustagānim[E·B·C], Nedrûme[E·B], Sîdî Bel Abbès[E·B], Tuggurt[E], Zaporojye Seçi[M·B·C] — kapatan: 0g 1552-01-01 Cezayir Ocaklığı'nın Sahra'ya doğru genişlemesi — ; 0g 1552-01-01 Hasanüddin Demak'tan ayrıldı, Bentem bağımsız sult
- **1556-01-01** kazanc (1): Bosna Novi'si (Bosanski Novi)[M·B·C] — kapatan: 0g 1556-01-01 Turgut Reis Trablusgarp beylerbeyi oldu — eyalet d; 0g 1556-01-01 Moskova Çarlığı Astarhan'ı aldı — Aşağı Volga Rus 
- **1557-01-01** kazanc (9): Akīk[E·B·C], Arkîko[E·B], Benzert (Bizerte)[M·B·C], Dahlak[E·B], Ebû Ramâd (Şalâtîn)[E·B·C], Halâib[E·B·C], Sevâkin[E·B·C], Sinkat[E·B·C], Tokar[E·B·C] — kapatan: 0g 1557-01-01 Seydi Ali Reis'in Mir'âtü'l-Memâlik'i İstanbul'da ; 0g 1557-01-01 Habeş Eyaleti'nin kuruluşu — Kızıldeniz kıyısının 
- **1559-01-01** kazanc (1): Katar Yarımadası (iç, dolgu)[M·B] — kapatan: 0g 1559-01-01 Osmanlı'nın Bahreyn seferi — körfezde Portekiz'e k; 0g 1559-01-01 Zeyla'nın Habeş Eyaleti'ne katılması
- **1577-01-01** kazanc (2): Câlû[E·B·C], Sokna[E·B·C] — kapatan: 0g 1577-01-01 Drina (Sokullu Mehmed Paşa) Köprüsü'nün tamamlanma; 0g 1577-01-01 Azapkapı (Sokullu Mehmed Paşa) Camii'nin yaptırılm
- **1578-08-01** kazanc (2): Ts’q’altbila[M·B], Zazalo[M·B] — kapatan: 3g 1578-08-04 Vâdisseyl (Kasrılkebir) Savaşı — Osmanlı desteğind; 8g 1578-08-09 Çıldır Zaferi — doğu savaşı başladı
- **1586-01-01** kazanc (1): Culfa[M·B] — kapatan: 0g 1586-01-01 Nahçıvan ve Ordubad'ın Osmanlı idaresine girmesi
- **1589-01-01** kazanc (1): Luristan[E] — kapatan: 0g 1589-01-01 Cığalazâde Sinan Paşa'nın Nihâvend'i alıp kale kur
- **1603-01-01** kayip (1): Nihâvend[E·B] — kapatan: 0g 1603-01-01 Luristan'ın Safevîlere kesin olarak geçmesi
- **1606-01-01** kayip (2): Berde (Karabağ)[E·B·C], Gence[E] — kapatan: 0g 1606-01-01 Tiflis ve Gence'nin kaybı
- **1607-01-01** kayip (3): Kuba[E·B], Tarki (Tarku)[M·B·C], Şeki (Nuha)[M·B] — kapatan: 0g 1607-01-01 Şirvan'ın kaybı — Şamahı, Bakü ve Derbend
- **1625-01-01** kazanc (1): Kerkük[E·B] — kapatan: 0g 1625-01-01 Musul'un Safevîlerden kurtarılması — Hâfız Ahmed P
- **1638-12-25** kazanc (1): Erbil[M·B·C] — kapatan: 1g 1638-12-24 Kemankeş Kara Mustafa Paşa sadrazam oldu — mali ıs; 1g 1638-12-24 Bağdat'ın geri fethi
- **1658-08-30** kazanc (1): Lugos (Lugoj)[M·B] — kapatan: 3g 1658-08-27 Yanova'nın (Ineu) fethi ve Erdel seferi
- **1670-01-01** kayip (1): Katar Yarımadası (iç, dolgu)[M·B] — kapatan: 0g 1670-01-01 Lahsa'nın Benî Hâlid Emirliği'ne kaybı; 0g 1670-01-01 Cetin'in yeniden Osmanlı kalesi olması
- **1671-01-01** kayip (1): Mersin[M·B·C] — kapatan: 0g 1671-01-01 Cezayir'de dayı idaresinin başlaması
- **1686-09-30** kayip (1): Sin (Sinj)[M·B·C] — kapatan: 14g 1686-10-14 Peçuy'un kaybı; 23g 1686-10-23 Segedin'in kaybı
- **1687-08-06** kayip (1): İnebahtı[M·B·C] — kapatan: 5g 1687-08-01 IV. Mehmed avdan vazgeçti — hal'inin arifesindeki ; 6g 1687-08-12 İkinci Mohaç (Harşan) bozgunu — Erdel'in ve Mohaç'
- **1687-09-06** kayip (2): Baç (Bács)[M·B], Varadin (Petrovaradin)[M·B] — kapatan: 20g 1687-09-26 Atina'nın kaybı ve Parthenon patlaması; 25g 1687-08-12 İkinci Mohaç (Harşan) bozgunu — Erdel'in ve Mohaç'
- **1687-09-29** kayip (1): Ösek (Osijek)[K·B·C] — kapatan: 3g 1687-09-26 Atina'nın kaybı ve Parthenon patlaması
- **1687-09-30** kayip (1): Herseknovi (Herceg Novi)[M·B·C] — kapatan: 4g 1687-09-26 Atina'nın kaybı ve Parthenon patlaması
- **1688-06-01** kayip (1): Lugos (Lugoj)[M·B·C] — kapatan: 13g 1688-05-19 İstolni Belgrad'ın kaybı — Macar krallarının taç ş
- **1689-01-01** kayip (1): Gospić[E] — kapatan: 0g 1689-01-01 Mevlây İsmâil'in el-Arâiş'i İspanyollardan geri al; 0g 1689-01-01 Lika ve Krbava'nın kaybı — Udbina ve Gospić Habsbu
- **1695-09-01** kazanc (1): Lugos (Lugoj)[E] — kapatan: 21g 1695-09-22 Lugoş zaferi — II. Him seferi
- **1703-01-01** kazanc (1): Yenikale[E] — kapatan: 0g 1703-01-01 Yenikale'nin inşası — Kerç Boğazı'nın kilitlenmesi
- **1716-01-01** kayip (1): Lugos (Lugoj)[M·B·C] — kapatan: 0g 1716-01-01 İrtiş-Om kavşağında Rus Omsk kalesi kuruldu
- **1717-01-01** kayip (1): Orsova (Eski Orsova)[M·B·C] — kapatan: 0g 1717-01-01 Ummanlılar'ın Bahreyn'i istilâsı — Safevî hâkimiye
- **1724-01-01** kazanc (1): Selmâs (Dilman)[E] — kapatan: 0g 1724-01-01 Urmiye ve Selmâs'ın Osmanlı idaresine geçişi
- **1724-09-28** kazanc (1): Hoy[K·B·C] — kapatan: 5g 1724-10-03 Revan'ın yeniden fethi; 17g 1724-09-11 Salyan'da Rus taburunun yok edilmesi — Tahmasb'ın 
- **1732-01-10** kayip (3): Merîvan[M·B·C], Sakkız[M·B·C], Senendec (Sine)[M·B·C] — kapatan: 2g 1732-01-08 Ahmed Paşa Antlaşması — Batı İran'ın büyük bölümün; 9g 1732-01-01 Levnî'nin vefatı
- **1735-08-12** kayip (1): Tiflis[K·B·C] — kapatan: 11g 1735-08-23 Kutsal Haç kalesinin yıkılması — Rus sınırı Terek'
- **1739-09-28** kazanc (2): Bosna Brod'u (Bosanski Brod)[M·B·C], Bosna Dubiçası (Bosanska Dubica)[M·B·C] — kapatan: 5g 1739-10-03 Niş Antlaşması — Rusya ile barış, Azak'ın tarafsız; 10g 1739-09-18 Belgrad Antlaşması — Belgrad, Semendire ve kuzey S
- **1792-09-12** kazanc (2): Mersa'l-Kebîr[K·B·C], Oran[K·B·C] — kapatan: 10g 1792-09-22 Fransa'da Birinci Cumhuriyet'in ilânı — krallığın 
- **1801-01-01** kayip (1): Hurma (Tâif doğusu)[E] — kapatan: 0g 1801-01-01 Tâif çevresi kabileleri Vehhâbî nüfuzuna girdi — T
- **1805-07-20** kayip (2): Bedir[M·B·C], Yenbu[K·B·C] — kapatan: 17g 1805-07-03 Bâbıâli oldubittiyi kabul etti: Mısır valiliği fer
- **1811-11-01** kazanc (2): Bedir[M·B·C], Yenbu[K·B·C] — kapatan: 7g 1811-10-25 Slobozia Bozgunu — Tuna ordusunun kuşatılması; 30g 1811-12-01 Safra-Cedîde boğazında ilk bozgun
- **1815-01-13** kazanc (1): Türabe[K·B·C] — kapatan: 7g 1815-01-20 Bisel Muharebesi: Suûdî kuvvetleri bozguna uğradı
- **1831-11-08** kazanc (2): Kudüs[M·B], Nablus[M·B] — kapatan: 7g 1831-11-01 İlk resmî gazete: Takvîm-i Vekāyi; 8g 1831-10-31 İbrâhim Paşa Suriye'ye girdi — birinci kriz başlad
- **1832-08-15** kazanc (1): Urfa[M·B·C] — kapatan: 17g 1832-07-29 Belen (Beylan) Geçidi bozgunu — Çukurova açıldı
- **1832-12-10** kayip (1): Sisam[M·B·C] — kapatan: 11g 1832-12-21 Konya Meydan Muharebesi: sadrazam esir düştü; 18g 1832-11-22 Emîr Abdülkādir'in devletinin kuruluşu — batı Ceza
- **1833-06-30** kayip (3): Karaman[K·B·C], Konya[K·B·C], Kütahya[K·B·C] — kapatan: 8g 1833-07-08 Hünkâr İskelesi Antlaşması; 29g 1833-06-01 Feshâne-i Âmire'nin kuruluşu
- **1838-01-01** kazanc (3): Dilem (Harc)[M·B·C], Havta (Havtat Benî Temîm)[M·B·C], Leylâ (Eflâc)[M·B·C] — kapatan: 0g 1838-01-01 Ruslar Çerkez kıyısında Soçi ve Tuapse limanlarını
- **1839-05-13** kayip (1): Cicel[K·B·C] — kapatan: 1g 1839-05-14 Tıp okulunun Mekteb-i Tıbbiyye-i Adliyye-i Şâhâne ; 22g 1839-04-21 Osmanlı ordusu Fırat'ı geçti
- **1840-01-01** kazanc (5): Dilem (Harc)[M·B·C], Havta (Havtat Benî Temîm)[M·B·C], Hurma (Tâif doğusu)[M·B·C], Leylâ (Eflâc)[M·B·C], Türabe[M·B·C] — kapatan: 0g 1840-01-01 Taka bölgesinin fethi ve Kesela'nın kurulması; 0g 1840-01-01 İlk Osmanlı kâğıt parası (kâime) çıkarıldı
- **1844-02-12** kayip (1): Batna[M·B] — kapatan: 13g 1844-01-30 Avusturya-Bavyera Tirol-Vorarlberg sınır antlaşmas; 21g 1844-03-04 Biskra'nın işgali — Sahra kapısının kaybı
- **1849-01-01** kazanc (2): Moha[E], Zebîd[E] — kapatan: 0g 1849-01-01 Tihâme sahiline dönüş: Hudeyde, Zebîd ve Moha'nın 
- **1869-01-01** kazanc (1): Nâsıriye[E] — kapatan: 0g 1869-01-01 Midhat Paşa'nın Bağdat valiliği ve aşiret iskânı —
- **1871-01-01** kazanc (1): Kuveyt[K·B·C] — kapatan: 0g 1871-01-01 Asîr'in doğrudan idareye alınması
- **1875-06-01** kayip (1): Zeyla[M·B·C] — kapatan: 18g 1875-06-19 Hersek İsyanı'nın başlaması: Şark Meselesi'nin yen
- **1877-07-16** kayip (1): Niğbolu[E·B] — kapatan: 3g 1877-07-19 Şıpka Geçidi'nin tahliyesi — Balkan hattının yarıl; 3g 1877-07-19 Plevne savunmasının başlaması: Gazi Osman Paşa'nın
- **1882-09-07** kayip (2): Kordofan[K·B·C], Kordofan (Ubeyyid)[K·B·C] — kapatan: 6g 1882-09 Mısır'ın İngiliz işgali; 6g 1882-09-13 Tel el-Kebîr Muharebesi — Urâbî ordusunun dağılmas
- **1891-01-01** kazanc (1): Şırnak[M·B·C] — kapatan: 0g 1891-01-01 Müleydâ Savaşı — İkinci Suud Devleti'nin sonu, Nec; 0g 1891-01-01 MacLean hakem kararı: İran–Afganistan kuzey sınırı
- **1912-10-26** kayip (6): Doyran[M·B], Gevgili (Gevgelija)[M·B], Köprülü (Veles)[M·B], Ustrumca (Strumica)[M·B], Üsküp[M·B], İştip (Štip)[M·B] — kapatan: 3g 1912-10-23 Şark Ordusu'nun bozgunu ve Çatalca hattına çekiliş; 8g 1912-11-03 Edirne kuşatması başladı
- **1915-06-10** kayip (1): Kemeran (Kamaran)[M·B·C] — kapatan: 2g 1915-06-12 Horgos nehri boyunca Rus–Çin sınırlandırma protoko; 3g 1915-06-07 Kiahta Üçlü Anlaşması — Dış Moğolistan'ın sınırı s
- **1916-06-16** kayip (1): Râbiğ[M·B·C] — kapatan: 6g 1916-06-10 Şerif Hüseyin isyanı; 30g 1916-07-16 Bayburt ve Gümüşhane'nin Rus işgali
- **1918-01-01** kayip (4): Medâin-i Sâlih (el-Hicr)[M·B·C], Tebük[M·B·C], el-Ulâ[M·B·C], el-Vech[M·B·C] — kapatan: 3g 1918-01-04 Sovyet Rusya Finlandiya'nın bağımsızlığını tanıdı; 23g 1917-12-09 Kudüs'ün kaybı
- **1918-04-01** kayip (1): Tuz Hurmatu[K·B·C] — kapatan: 3g 1918-03-29 Brest-Litovsk Barışı yürürlüğe girdi: Rusya batı t; 4g 1918-04-05 II. George Tupou'nun ölümü, Sālote Tupou III'ün ta
- **1918-09-21** kayip (1): Nablus[K·B·C] — kapatan: 6g 1918-09-15 Kafkas İslâm Ordusu'nun Bakü'yü alması; 10g 1918-10-01 Şam'ın kaybı
- **1918-09-27** kayip (1): Maan[K·B·C] — kapatan: 4g 1918-10-01 Şam'ın kaybı; 12g 1918-09-15 Kafkas İslâm Ordusu'nun Bakü'yü alması
- **1918-10-08** kayip (2): Deyrülkamer (Dayr al-Kamer)[M·B], Sûr (Tyre) — Lübnan[M·B] — kapatan: 7g 1918-10-01 Şam'ın kaybı; 19g 1918-10-27 Halep'in Arap ve İngiliz kuvvetlerince işgali
- **1918-10-13** kayip (1): Trablusşam[M·B] — kapatan: 12g 1918-10-01 Şam'ın kaybı; 14g 1918-10-27 Halep'in Arap ve İngiliz kuvvetlerince işgali
- **1918-10-26** kayip (2): Qaţţīnah[M·B·C], Rakka[M·B·C] — kapatan: 1g 1918-10-27 Halep'in Arap ve İngiliz kuvvetlerince işgali; 2g 1918-10-28 Çekoslovakya'nın bağımsızlık ilânı — Habsburg mira
- **1918-11-08** kayip (10): Akra[M·B·C], Duhok[M·B·C], Gōrabī[M·B·C], Musul[E·B·C], Rewândiz[M·B·C], Sincar[M·B·C], Telafer[M·B·C], Tirwānīsh[M·B·C], Zaho[M·B·C], İmâdiye (Amêdî)[M·B·C] — kapatan: 3g 1918-11-11 Polonya'nın bağımsızlığı — Naiplik Konseyi ordunun; 3g 1918-11-11 Compiègne Ateşkesi — Alsas-Loren'in tahliyesi ve F


### E4 — v: en büyük 10 küme (A)
| tarih | bölge | açık | sınıf |
|---|---|---|---|
| 1805-07-03 | Kahire | 55 | {'KAYMA': 47, 'ESLESTIRME': 8} |
| 1878-07-13 | Sofya | 11 | {'KAYMA': 8, 'ESLESTIRME': 3} |
| 1832-11-22 | Cezayir | 9 | {'ESLESTIRME': 9} |
| 1821-06-14 | Hartum | 8 | {'MADDESIZ': 7, 'ESLESTIRME': 1} |
| 1711-07-29 | Bingazi | 7 | {'MADDESIZ': 7} |
| 1835-05-26 | Bingazi | 7 | {'MADDESIZ': 7} |
| 1878-07-13 | Silistre | 7 | {'KAYMA': 3, 'ESLESTIRME': 4} |
| 1475-06-06 | Bahçesaray | 6 | {'MADDESIZ': 5, 'ESLESTIRME': 1} |
| 1682-09-16 | Kassa (Košice) | 6 | {'MADDESIZ': 6} |
| 1456-06-01 | Silistre | 5 | {'MADDESIZ': 5} |

### E5 — isg: TAM LİSTE (A)
- **1739-09-12** kazanc (1/1): Yaş[E·B·C] — kapatan: 6g «Belgrad Antlaşması — Belgrad, Semendire ve kuzey S»
- **1739-09-18** kayip (1/2): Yaş[E·B·C] — kapatan: 0g «Belgrad Antlaşması — Belgrad, Semendire ve kuzey S»
- **1771-07-01** kazanc (7/12): Aluşta[M·B], Balaklava (Cembalo)[M·B], Kefe[M·B], Mankup[M·B], Sudak (Suğdak)[M·B], Yalta[M·B], İnkirman (Kalamita)[M·B] — kapatan: 0g «Kırım yarımadasının Rus işgali»
- **1771-07-12** kazanc (2/3): Taman[E], Yenikale[E] — kapatan: 11g «Kırım yarımadasının Rus işgali»
- **1774-07-21** kayip (7/13): Akkirman[M·B·C], Bender[M·B·C], Hotin[K·B·C], Kerç[M·B·C], Taman[M·B·C], Yedisan bozkırı[M·B·C], Yenikale[M·B·C] — kapatan: 0g «Küçük Kaynarca Antlaşması»
- **1783-04-19** kayip (7/7): Aluşta[M·B], Balaklava (Cembalo)[M·B], Kefe[M·B], Mankup[M·B], Sudak (Suğdak)[M·B], Yalta[M·B], İnkirman (Kalamita)[M·B] — kapatan: 0g «Kırım'ın Rusya'ya ilhakı»
- **1791-08-04** kayip (8/8): Belgrad[E·B·C], Bosna Dubiçası (Bosanska Dubica)[M·B·C], Bosna Novi'si (Bosanski Novi)[M·B·C], Böğürdelen (Šabac)[M·B·C], Bükreş[K·B·C], Cetin (Cetingrad)[M·B·C], Drežnik (Drežnik Grad)[M·B·C], Semendire[M·B·C] — kapatan: 0g «Ziştovi Antlaşması — Avusturya cephesinin kapanmas»
- **1792-01-09** kayip (5/5): Anapa[K·B·C], Bender[K·B], Hotin[M·B·C], Kili[M·B·C], İsmail[E·B·C] — kapatan: 1g «Yaş Antlaşması — Kırım'ın kesin kaybı ve Turla sın»
- **1798-11-08** kazanc (1/1): Süveyş[K·B·C] — kapatan: 16g «Preveze'nin Fransızlardan alınışı — Nikopolis Muha»
- **1801-10-09** kayip (3/3): Asyut[E·B·C], Dimyat[E·B·C], Reşîd (Rosetta)[E·B] — kapatan: 0g «Mısır'ın Fransızlardan tahliyesi»
- **1806-11-30** kazanc (10/11): Akkirman[E·B·C], Bender[E·B·C], Birlad (Bârlad)[M·B·C], Kahul (Cahul)[M·B·C], Kalas (Galatz)[M·B·C], Kili[E·B·C], Orhei[M·B·C], Roman[M·B·C], Soroka (Soroca)[M·B], Yaş[M·B·C] — kapatan: 7g «Rus ordusunun savaş ilan edilmeden Dinyester'i geç»
- **1810-09-27** kazanc (1/1): Yergöğü (Giurgiu)[E·B] — kapatan: 1g «Rusçuk'un teslimi — Tuna'nın güney kıyısı da elden»
- **1812-05-28** kayip (24/25): Akkirman[E·B], Birlad (Bârlad)[M·B·C], Buzău[E·B·C], Bükreş[E], Hotin[E·B·C], Kahul (Cahul)[M·B], Kalas (Galatz)[M·B·C], Kili[E·B·C], Krayova (Craiova)[E·B·C], Kımpulung (Câmpulung)[E·B·C], Orhei[M·B], Piteşti[E·B·C] … — kapatan: 0g «Bükreş Antlaşması — Besarabya'nın kaybı»
- **1827-10-13** kazanc (1/1): Revan[K·B·C] — kapatan: 7g «Navarin baskını»
- **1828-05-07** kazanc (6/10): Buzău[M·B·C], Bükreş[M·B·C], Kımpulung (Câmpulung)[M·B·C], Piteşti[M·B·C], Rimnik-i Sârat (Râmnicu Sărat)[M·B·C], Tırgovişte[M·B·C] — kapatan: 0g «Rus 6. Piyade Kolordusunun Prut'u geçip Memleketey»
- **1829-09-14** kayip (2/2): Anapa[E·B·C], İbrail[E·B·C] — kapatan: 0g «Edirne Antlaşması»
- **1834-01-01** kayip (4/10): Birlad (Bârlad)[E·B·C], Kalas (Galatz)[E·B·C], Roman[E·B·C], Yaş[E·B·C] — kapatan: 0g «Rus ordusunun Eflak ve Boğdan'dan çekilmesi — altı»
- **1878-07-13** kayip (1/1): Sofya[K·B·C] — kapatan: 0g «Berlin Antlaşması»
- **1878-07-29** kazanc (4/18): Bosna Brod'u (Bosanski Brod)[M·B], Bosna Dubiçası (Bosanska Dubica)[M·B·C], Bosna Novi'si (Bosanski Novi)[M·B·C], Krupa (Bosanska Krupa)[M·B·C] — kapatan: 0g «Bosna-Hersek ve Yenipazar'ın Avusturya-Macaristan »
- **1900-01-01** kazanc (1/1): Mengo (Buganda)[M·B·C] — kapatan: 0g «Râbih b. Zübeyr Fransızlara yenilip öldürüldü — Bo»
- **1908-10-05** kayip (6/20): Bihaç (Bihać)[M·B·C], Bosna Brod'u (Bosanski Brod)[M·B], Bosna Dubiçası (Bosanska Dubica)[M·B·C], Bosna Novi'si (Bosanski Novi)[M·B·C], Krupa (Bosanska Krupa)[M·B·C], Ostrovica (Stara Ostrovica, Kulen Vakuf)[M·B·C] — kapatan: 0g «Bulgaristan'ın bağımsızlığı ve Bosna'nın ilhakı»
- **1912-07-17** kazanc (1/2): Fornoz (Fourni)[E·B] — kapatan: 0g «Nikarya'nın bağımsızlık ilanı»
- **1912-10-18** kayip (2/3): Bingazi[E], Derne[E·B·C] — kapatan: 0g «Uşi Antlaşması: Trablusgarp ve Bingazi'nin İtalya'»
- **1912-10-21** kazanc (2/3): Preveze[K·B·C], Vonitsa[K·B·C] — kapatan: 2g «Şark Ordusu'nun bozgunu ve Çatalca hattına çekiliş»
- **1912-11-08** kazanc (5/6): Karaferye (Veria)[M·B], Kılkış (Avrathisar)[M·B], Lanzaka (Lagkadas)[M·B], Vodina (Edessa)[M·B], Yenice-i Vardar[M·B] — kapatan: 3g «Sisam'ın Osmanlı idaresinden çıkışı»
- **1912-11-11** kazanc (2/2): Sakız[K·B], İpsara (Psara)[M·B·C] — kapatan: 0g «Sisam'ın Osmanlı idaresinden çıkışı»
- **1912-11-21** kazanc (2/2): Midilli[M·B·C], Molova (Molyvos)[M·B·C] — kapatan: 3g «Manastır'ın Sırp kuvvetlerince işgali»
- **1913-11-14** kayip (14/17): Aydonat (Paramythia)[E·B·C], Filat (Filiates)[E·B·C], Karaferye (Veria)[M·B], Kılkış (Avrathisar)[M·B], Lanzaka (Lagkadas)[M·B], Margiliç (Margariti)[E·B·C], Parga[E·B·C], Preveze[E·B·C], Souli (Sûli)[E·B·C], Vodina (Edessa)[M·B], Vonitsa[E·B·C], Yanya[E] … — kapatan: 0g «Atina Antlaşması: Yunanistan ile barış ve Selanik-»
- **1916-11-03** kazanc (1/2): Katar Yarımadası (iç, dolgu)[M·B] — kapatan: 0g «İngiliz-Katar Antlaşması — Katar İngiliz himayesin»
- **1918-10-30** kazanc (5/8): Ceylanpınar[M·B·C], Dörtyol[M·B], Erzin[M·B], Nusaybin[M·B·C], Yumurtalık[M·B] — kapatan: 0g «Mondros Mütarekesi»
- **1918-11-04** kazanc (1/1): Zadar (Zara)[M·B·C] — kapatan: 1g «Villa Giusti Mütarekesi — Avusturya-Macaristan sil»
- **1918-11-06** kazanc (1/1): Şibenik (Sebenico)[M·B·C] — kapatan: 3g «Villa Giusti Mütarekesi — Avusturya-Macaristan sil»
- **1918-11-22** kazanc (1/1): Lvov[M·B·C] — kapatan: 3g «Sırp birlikleri Szigetvár'a girdi — Güney Somogy'u»
- **1918-12-06** kazanc (1/1): Kilis[K·B·C] — kapatan: 5g «Sırp-Hırvat-Sloven Krallığı ile Büyük Romanya'nın »
- **1918-12-17** kazanc (2/2): Antep[K·B·C], Tarsus[M·B·C] — kapatan: 2g «İtalyan ordusu Knin'i işgal etti»
- **1918-12-24** kazanc (2/2): Adana[M·B·C], Erdel (Kaloşvar)[E·B·C] — kapatan: 5g «İtalyan ordusu Knin'i işgal etti»
- **1919-01-01** kazanc (1/1): Urfa[M·B·C] — kapatan: 0g «Çekoslovakya Alman Bohemyası ve Güney Moravya'yı d»
- **1919-04-19** kazanc (1/1): Szatmár (Satu Mare)[E] — kapatan: 1g «Romen ordusu Szatmár'a (19 Nisan) ve Oradea'ya (Va»
- **1919-08-12** kazanc (1/2): Lendava (Alsólendva)[E] — kapatan: 0g «SHS ordusu Prekmurje'ye girdi — Murska Sobota ve L»
- **1919-10-29** kayip (3/3): Kilis[K·B·C], Maraş[K·B·C], Urfa[K·B·C] — kapatan: 7g «Amasya Protokolü: İstanbul hükümetiyle Heyet-i Tem»
- **1919-11-05** kayip (1/1): Antep[K·B·C] — kapatan: 14g «Amasya Protokolü: İstanbul hükümetiyle Heyet-i Tem»
- **1920-06-04** kayip (10/11): Brassó (Braşov)[M·B·C], Eisenstadt (Kismarton)[M·B·C], Erdel (Kaloşvar)[E·B·C], Kassa (Košice)[M·B·C], Lendava (Alsólendva)[K·B·C], Lugos (Lugoj)[K·B], Murska Sobota[K·B·C], Szatmár (Satu Mare)[M·B·C], Varad (Oradea)[M·B·C], Zagreb[M·B·C] — kapatan: 0g «Trianon Antlaşması — Macaristan toprağının üçte ik»
- **1920-10-25** kazanc (1/2): Yenişehir (Bursa)[E] — kapatan: 0g «İnegöl ve Yenişehir'in Yunan işgali»
- **1920-11-12** kayip (1/1): Zadar (Zara)[E·B·C] — kapatan: 0g «Rapallo Antlaşması — İtalya ile SHS Krallığı arası»
- **1921-03-25** kazanc (1/1): Adapazarı[E] — kapatan: 2g «Yunan ordusunun ikinci taarruzu — Bilecik, Afyon v»
- **1921-06-21** kayip (1/1): Adapazarı[E] — kapatan: 7g «İzmit'in kurtuluşu — Adapazarı'nın ardından»
- **1921-07-21** kazanc (1/1): Kütahya[E] — kapatan: 1g «Eskişehir'in boşaltılması — Yunan ordusu Eskişehir»
- **1921-07-22** kazanc (1/1): Bilecik[E] — kapatan: 2g «Eskişehir'in boşaltılması — Yunan ordusu Eskişehir»
- **1921-10-20** kayip (5/8): Akçakale[M·B·C], Ceylanpınar[M·B·C], Nusaybin[E·B·C], Payas[E·B], Suruç[M·B·C] — kapatan: 0g «Ankara İtilâfnâmesi: Fransa ile barış ve güney cep»
- **1922-11-13** kayip (1/1): Tekirdağ[E] — kapatan: 3g «Doğu Trakya'nın teslim alınması — Kırklareli ve Te»
- **1923-03-15** kayip (1/1): Lvov[M·B·C] — kapatan: 0g «Büyükelçiler Konferansı Polonya'nın doğu sınırları»
- **1923-07-24** kayip (22/23): Batnoz (Patmos)[M·B·C], Bozbaba (Ay Strati)[M·B·C], Fornoz (Fourni)[K·B·C], Herke (Halki)[M·B·C], Karpatos[M·B·C], Kaşot (Kasos)[M·B·C], Kelemez (Kalimnos)[M·B·C], Limni[M·B·C], Lindos[M·B·C], Midilli[K·B·C], Molova (Molyvos)[K·B·C], Nikarya (İkarya)[K·B·C] … — kapatan: 0g «Lozan Antlaşması»


### E6 — d+v TAM LİSTE (A'da açılan 321 tarih / 1689 birim; B/C durumu satırda)

**1288-01-01** kazanc — 1/2 nokta açık · kapatan (1): 0g 1288-01-01 «Karacahisar'ın fethi — ilk şehir kazanımı ve Eskişehir'»
  - Eskişehir (m:Kütahya) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1288-01-01 «Karacahisar'ın fethi — ilk şehir kazanımı ve Eskişehir'»

**1299-01-01** kazanc — 2/3 nokta açık · kapatan (2): 0g 1299-01 «Osmanlı Beyliği'nin kuruluşu»; 0g 1299-01-01 «Bilecik ve Yarhisar'ın gece baskınıyla fethi»
  - Yarhisar (m:Bursa) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1299-01 «Osmanlı Beyliği'nin kuruluşu»
  - İnegöl (m:Bursa) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1299-01 «Osmanlı Beyliği'nin kuruluşu»

**1302-08-01** kazanc — 1/1 nokta açık · kapatan (2): 0g 1302-08-01 «İznik'in ilk kuşatması ve Marmaracık'ın fethi»; 5g 1302-07-27 «Koyunhisar (Bapheus) Savaşı — Bizans ordusuna karşı ilk»
  - Marmaracık (m:Bursa) · ESLESTIRME · açık:A-- · TG · en yakın anan: 0g 1302-08-01 «İznik'in ilk kuşatması ve Marmaracık'ın fethi»

**1303-01-01** kazanc — 2/3 nokta açık · kapatan (1): 0g 1303-01-01 «Dimbos zaferi ve ardından Kite ile Ulubat'ın alınması»
  - Kestel (m:Bursa) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1303-01-01 «Dimbos zaferi ve ardından Kite ile Ulubat'ın alınması»
  - Kite (Kete) (m:Bursa) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1303-01-01 «Dimbos zaferi ve ardından Kite ile Ulubat'ın alınması»

**1304-01-01** kazanc — 4/5 nokta açık · kapatan (1): 0g 1304-01-01 «Sakarya seferi: Leblebicihisar, Lefke, Mekece ve Geyve'»
  - Akhisar (Pamukova) (m:Bursa) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1304-01-01 «Sakarya seferi: Leblebicihisar, Lefke, Mekece ve Geyve'»
  - Geyve (m:Bursa) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1304-01-01 «Sakarya seferi: Leblebicihisar, Lefke, Mekece ve Geyve'»
  - Lefke (Osmaneli) (m:Bursa) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1304-01-01 «Sakarya seferi: Leblebicihisar, Lefke, Mekece ve Geyve'»
  - Mekece (m:Bursa) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1304-01-01 «Sakarya seferi: Leblebicihisar, Lefke, Mekece ve Geyve'»

**1305-01-01** kazanc — 2/3 nokta açık · kapatan (1): 0g 1305-01-01 «Geyve Boğazı kalelerinin fethi: Karaçepüş, Karatigin ve»
  - Absu (Hypsu) (m:Bursa) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1305-01-01 «Geyve Boğazı kalelerinin fethi: Karaçepüş, Karatigin ve»
  - Karatigin (m:Bursa) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1305-01-01 «Geyve Boğazı kalelerinin fethi: Karaçepüş, Karatigin ve»

**1323-01-01** kazanc — 1/2 nokta açık · kapatan (2): 0g 1323-01-01 «Yalova ve Karamürsel'in katılışı»; 0g 1323-01-01 «Uluğ Han Varangal'i zaptetti, Kakatiya ülkesi Delhi eya»
  - Karamürsel (m:Bursa) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1323-01-01 «Yalova ve Karamürsel'in katılışı»

**1324-01-01** kazanc — 1/2 nokta açık · kapatan (2): 0g 1324-01-01 «Akyazı ve İmralı Adası'nın fethi»; 0g 1324-01-01 «Osman Gazi'nin vefatı ve Orhan Bey'in beyliğe geçişi»
  - İmralı Adası (m:Bursa) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1324-01-01 «Akyazı ve İmralı Adası'nın fethi»

**1324-03-01** kazanc — 1/2 nokta açık · kapatan (1): 0g 1324-03-01 «Gemlik (Kios) ve Armutlu'nun fethi»
  - Armutlu (m:Bursa) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1324-03-01 «Gemlik (Kios) ve Armutlu'nun fethi»

**1325-01-01** kazanc — 2/3 nokta açık · kapatan (1): 0g 1325-01-01 «Konuralp'in Bolu yöresini fethi — Mudurnu, Konurapa ve »
  - Konurapa (Düzce) (m:Ankara) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1325-01-01 «Konuralp'in Bolu yöresini fethi — Mudurnu, Konurapa ve »
  - Mudurnu (m:Ankara) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1325-01-01 «Konuralp'in Bolu yöresini fethi — Mudurnu, Konurapa ve »

**1329-06-01** kazanc — 5/6 nokta açık · kapatan (1): 0g 1329-06-01 «Pelekanon (Maltepe) Savaşı ve Kocaeli'nin tamamının alı»
  - Aydos Kalesi (m:Bursa) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1329-06-01 «Pelekanon (Maltepe) Savaşı ve Kocaeli'nin tamamının alı»
  - Hereke (m:İstanbul) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1329-06-01 «Pelekanon (Maltepe) Savaşı ve Kocaeli'nin tamamının alı»
  - Pelekanon (Eskihisar) (m:İstanbul) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1329-06-01 «Pelekanon (Maltepe) Savaşı ve Kocaeli'nin tamamının alı»
  - Samandıra (m:İstanbul) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1329-06-01 «Pelekanon (Maltepe) Savaşı ve Kocaeli'nin tamamının alı»
  - Üsküdar (m:İzmit) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1329-06-01 «Pelekanon (Maltepe) Savaşı ve Kocaeli'nin tamamının alı»

**1334-01-01** kazanc — 3/4 nokta açık · kapatan (1): 0g 1334-01-01 «Marmara'nın güneyindeki Bizans kasabalarının alınışı — »
  - Gölyazı (Apollonia) (m:Bursa) · ESLESTIRME · açık:A-- · T · en yakın anan: 0g 1334-01-01 «Marmara'nın güneyindeki Bizans kasabalarının alınışı — »
  - Kirmasti (M.Kemalpaşa) (m:Bursa) · ESLESTIRME · açık:A-- · T · en yakın anan: 0g 1334-01-01 «Marmara'nın güneyindeki Bizans kasabalarının alınışı — »
  - Ulubat (m:Bursa) · MADDESIZ · açık:AB- · T · en yakın anan: 1310g 1330-06-01 «Orhan Gazi'nin Bursa fethi sonrası cirit oyunları için »

**1345-01-01** kazanc — 8/9 nokta açık · kapatan (1): 0g 1345-01-01 «Karesi Beyliği'nin ilhakı: Balıkesir, Bergama, Biga, Ed»
  - Ayvalık (m:Bursa) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1345-01-01 «Karesi Beyliği'nin ilhakı: Balıkesir, Bergama, Biga, Ed»
  - Behramkale (Assos) (m:Bursa) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1345-01-01 «Karesi Beyliği'nin ilhakı: Balıkesir, Bergama, Biga, Ed»
  - Bergama (m:İzmir) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1345-01-01 «Karesi Beyliği'nin ilhakı: Balıkesir, Bergama, Biga, Ed»
  - Biga (m:Bursa) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1345-01-01 «Karesi Beyliği'nin ilhakı: Balıkesir, Bergama, Biga, Ed»
  - Edremit (m:Bursa) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1345-01-01 «Karesi Beyliği'nin ilhakı: Balıkesir, Bergama, Biga, Ed»
  - Erdek (m:Bursa) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1345-01-01 «Karesi Beyliği'nin ilhakı: Balıkesir, Bergama, Biga, Ed»
  - Karabiga (m:Biga) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1345-01-01 «Karesi Beyliği'nin ilhakı: Balıkesir, Bergama, Biga, Ed»
  - Çanakkale (m:Bursa) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1345-01-01 «Karesi Beyliği'nin ilhakı: Balıkesir, Bergama, Biga, Ed»

**1354-03-02** kazanc — 2/3 nokta açık · kapatan (1): 0g 1354-03-02 «Gelibolu'nun alınışı — Rumeli'de kalıcı köprübaşı»
  - Bolayır (m:Edirne) · MADDESIZ · açık:AB- · G · en yakın anan: 1187g 1357-06-01 «Kırkpınar güreşlerinin rivayet edilen başlangıcı»
  - Maydos (Eceabat) (m:Edirne) · MADDESIZ · açık:AB- · G · en yakın anan: 1187g 1357-06-01 «Kırkpınar güreşlerinin rivayet edilen başlangıcı»

**1357-01-01** kazanc — 7/8 nokta açık · kapatan (1): 0g 1357-01-01 «Süleyman Paşa döneminde Trakya ilerleyişi: Malkara, İps»
  - Ferecik (Feres) (m:Edirne) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1357-01-01 «Süleyman Paşa döneminde Trakya ilerleyişi: Malkara, İps»
  - Karpuzlu (Yenikarpuzlu) (m:-) · MADDESIZ · açık:AB- · - · en yakın anan: YOK
  - Saroz kuzey kıyısı (m:-) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1357-01-01 «Süleyman Paşa döneminde Trakya ilerleyişi: Malkara, İps»
  - Tekirdağ (m:Edirne) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1357-01-01 «Süleyman Paşa döneminde Trakya ilerleyişi: Malkara, İps»
  - Távri (m:-) · MADDESIZ · açık:AB- · - · en yakın anan: YOK
  - İpsala (m:Edirne) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1357-01-01 «Süleyman Paşa döneminde Trakya ilerleyişi: Malkara, İps»
  - Şarköy (m:Edirne) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1357-01-01 «Süleyman Paşa döneminde Trakya ilerleyişi: Malkara, İps»

**1360-01-01** kazanc — 2/3 nokta açık · kapatan (3): 0g 1360-01-01 «Edirne'nin yardım yollarının kesilmesi: Çorlu, Lüleburg»; 0g 1360-01-01 «Dulkadirli Halil Bey sınırlarını Zamantı'ya kadar geniş»; 0g 1360-01-01 «Vestribygð (Batı Yerleşimi) terk edildi»
  - Keşan (m:Edirne) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1360-01-01 «Edirne'nin yardım yollarının kesilmesi: Çorlu, Lüleburg»
  - Lüleburgaz (m:Edirne) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1360-01-01 «Edirne'nin yardım yollarının kesilmesi: Çorlu, Lüleburg»

**1361-01-01** kazanc — 2/5 nokta açık · kapatan (2): 0g 1361-01-01 «Dimetoka'nın alınışı — Meriç vadisinin açılması»; 0g 1361-01-01 «Pençik Kanunu — Yeniçeri Ocağı'nın temelinin atılması»
  - Küfkaynapınarı (Azatlı) (m:-) · MADDESIZ · açık:AB- · - · en yakın anan: YOK
  - Stérna (m:-) · MADDESIZ · açık:AB- · - · en yakın anan: YOK

**1366-08-01** kayip — 3/4 nokta açık · kapatan (1): 0g 1366-08-01 «Gelibolu'nun kaybı (Savoy Haçlı seferi)»
  - Bolayır (m:Edirne) · MADDESIZ · açık:AB- · G · en yakın anan: 1430g 1362-09-01 «Rumeli Beylerbeyliği kuruldu»
  - Maydos (Eceabat) (m:Edirne) · MADDESIZ · açık:AB- · G · en yakın anan: 1430g 1362-09-01 «Rumeli Beylerbeyliği kuruldu»
  - Çimpe (m:Edirne) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1366-08-01 «Gelibolu'nun kaybı (Savoy Haçlı seferi)»

**1369-01-01** kazanc — 8/10 nokta açık · kapatan (2): 0g 1369-01-01 «Istıranca kaleleri: Pınarhisar, Kırkkilise (Kırklareli)»; 0g 1369-01-01 «Timurtaş Bey Tunca vadisinde Kızılcaağaç Yenicesi (Elho»
  - Ahtapolu (Ahtopol) (m:Edirne) · MADDESIZ · açık:AB- · - · en yakın anan: 2314g 1362-09-01 «Rumeli Beylerbeyliği kuruldu»
  - Demirköy (m:Edirne) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1369-01-01 «Istıranca kaleleri: Pınarhisar, Kırkkilise (Kırklareli)»
  - Dereköy (Kırklareli) (m:Edirne) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1369-01-01 «Istıranca kaleleri: Pınarhisar, Kırkkilise (Kırklareli)»
  - Kofçaz (m:Edirne) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1369-01-01 «Istıranca kaleleri: Pınarhisar, Kırkkilise (Kırklareli)»
  - Malko Tırnova (m:Edirne) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1369-01-01 «Istıranca kaleleri: Pınarhisar, Kırkkilise (Kırklareli)»
  - Rezve (Rezovo) (m:Edirne) · MADDESIZ · açık:AB- · - · en yakın anan: 2314g 1362-09-01 «Rumeli Beylerbeyliği kuruldu»
  - Vize (m:-) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1369-01-01 «Istıranca kaleleri: Pınarhisar, Kırkkilise (Kırklareli)»
  - İğneada (m:Edirne) · MADDESIZ · açık:AB- · - · en yakın anan: 2314g 1362-09-01 «Rumeli Beylerbeyliği kuruldu»

**1371-09-26** kazanc — 9/11 nokta açık · kapatan (2): 0g 1371-09-26 «Çirmen Savaşı — Meriç vadisinin denetimi»; 0g 1371-09-26 «Dejanoviç Prensliği (Kostadin-ili) Osmanlı vasalı oldu»
  - Dedeağaç (Alexandroupoli) (m:Edirne) · MADDESIZ · açık:AB- · G · en yakın anan: 3312g 1362-09-01 «Rumeli Beylerbeyliği kuruldu»
  - Doyran (m:-) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1371-09-26 «Dejanoviç Prensliği (Kostadin-ili) Osmanlı vasalı oldu»
  - Köprülü (Veles) (m:-) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1371-09-26 «Dejanoviç Prensliği (Kostadin-ili) Osmanlı vasalı oldu»
  - Köstendil (m:Sofya) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1371-09-26 «Dejanoviç Prensliği (Kostadin-ili) Osmanlı vasalı oldu»
  - Malak Dervent (Lalkovo) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Uluköy (Akçadam) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Umur Fakih (Fakia) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Uzunköprü (m:Edirne) · MADDESIZ · açık:AB- · G · en yakın anan: 3312g 1362-09-01 «Rumeli Beylerbeyliği kuruldu»
  - İştip (Štip) (m:Köstendil) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1371-09-26 «Dejanoviç Prensliği (Kostadin-ili) Osmanlı vasalı oldu»

**1372-06-01** kazanc — 1/2 nokta açık · kapatan (1): 0g 1372-06-01 «Filibe ve Eski Zağra'nın fethi»
  - Eski Zağra (Stara Zagora) (m:Sofya) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1372-06-01 «Filibe ve Eski Zağra'nın fethi»

**1373-01-01** kazanc — 2/3 nokta açık · kapatan (1): 0g 1373-01-01 «Filibe'nin batısı: Tatarpazarcığı ve İhtiman'ın katılış»
  - İhtiman (m:Sofya) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1373-01-01 «Filibe'nin batısı: Tatarpazarcığı ve İhtiman'ın katılış»
  - İskeçe (m:Selanik) · MADDESIZ · açık:AB- · - · en yakın anan: 5211g 1387-04-09 «Selanik'in ilk teslimi»

**1374-01-01** kazanc — 3/3 nokta açık · kapatan (1): 0g 1374-01-01 «Struma ve Mesta vadileri: Köstendil, Petriç, Nevrokop v»
  - Drama (m:Selanik) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1374-01-01 «Struma ve Mesta vadileri: Köstendil, Petriç, Nevrokop v»
  - Nevrokop (Gotse Delçev) (m:Selanik) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1374-01-01 «Struma ve Mesta vadileri: Köstendil, Petriç, Nevrokop v»
  - Petriç (m:Selanik) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1374-01-01 «Struma ve Mesta vadileri: Köstendil, Petriç, Nevrokop v»

**1376-09-01** kazanc — 3/4 nokta açık · kapatan (1): 0g 1376-09-01 «Gelibolu'nun geri alınışı»
  - Bolayır (m:Edirne) · MADDESIZ · açık:AB- · G · en yakın anan: 5114g 1362-09-01 «Rumeli Beylerbeyliği kuruldu»
  - Maydos (Eceabat) (m:Edirne) · MADDESIZ · açık:AB- · G · en yakın anan: 5114g 1362-09-01 «Rumeli Beylerbeyliği kuruldu»
  - Çimpe (m:Edirne) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1376-09-01 «Gelibolu'nun geri alınışı»

**1381-06-01** kazanc — 5/5 nokta açık · kapatan (1): 0g 1381-06-01 «Hamîd ilinin satın alınışı: Isparta'nın katılışı»
  - Akşehir (m:Konya) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1381-06-01 «Hamîd ilinin satın alınışı: Isparta'nın katılışı»
  - Beyşehir (m:Konya) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1381-06-01 «Hamîd ilinin satın alınışı: Isparta'nın katılışı»
  - Seydişehir (m:Konya) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1381-06-01 «Hamîd ilinin satın alınışı: Isparta'nın katılışı»
  - Yalvaç (m:Kütahya) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1381-06-01 «Hamîd ilinin satın alınışı: Isparta'nın katılışı»
  - İshaklı (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: 5630g 1366-01-01 «Karamanoğlu Alâeddin Bey Konya, Aksaray ve Niğde'yi Kar»

**1383-09-19** kayip — 5/6 nokta açık · kapatan (1): 0g 1383-09-19 «Serez'in fethi»
  - Drama (m:Selanik) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1383-09-19 «Serez'in fethi»
  - Gevgili (Gevgelija) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Kılkış (Avrathisar) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Nevrokop (Gotse Delçev) (m:Selanik) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1383-09-19 «Serez'in fethi»
  - Petriç (m:Selanik) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1383-09-19 «Serez'in fethi»

**1385-01-01** kazanc — 3/4 nokta açık · kapatan (1): 0g 1385-01-01 «Makedonya'nın içine ilerleyiş: Manastır ve Ohri'nin fet»
  - Filorina (Florina) (m:-) · MADDESIZ · açık:AB- · - · en yakın anan: YOK
  - Kesriye (Kastoria) (m:-) · MADDESIZ · açık:AB- · - · en yakın anan: YOK
  - Ohri (m:Üsküp) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1385-01-01 «Makedonya'nın içine ilerleyiş: Manastır ve Ohri'nin fet»

**1386-01-01** kazanc — 1/2 nokta açık · kapatan (2): 0g 1386-01-01 «Niş'in fethi»; 0g 1386-01-01 «Timur'un 'üç yıllık sefer'i: Azerbaycan ve Kuzey İran'ı»
  - Şehirköy (Pirot) (m:Sofya) · KAYMA · açık:AB- · - · en yakın anan: 122g 1385-09-01 «Sofya'nın fethi»

**1387-04-09** kazanc — 2/4 nokta açık · kapatan (2): 0g 1387-04-09 «Selanik'in ilk teslimi»; 29g 1387-05-08 «Karaferye'nin (Veria) Osmanlı hâkimiyetine girmesi»
  - Lanzaka (Lagkadas) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Praviște (Eleftheroupoli) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: 192240g 1913-08-10 «Bükreş Antlaşması — Batı Trakya ve Kavala havzası Bulga»

**1388-01-01** kazanc — 2/3 nokta açık · kapatan (1): 0g 1388-01-01 «Çandarlı Ali Paşa'nın Bulgaristan seferi: Şumnu ve Rusç»
  - Prevadi (Provadia) (m:-) · MADDESIZ · açık:AB- · T · en yakın anan: YOK
  - Rusçuk (m:Silistre) · ESLESTIRME · açık:A-- · T · en yakın anan: 0g 1388-01-01 «Çandarlı Ali Paşa'nın Bulgaristan seferi: Şumnu ve Rusç»

**1390-01-01** kazanc — 16/17 nokta açık · kapatan (4): 0g 1390-01-01 «Batı Anadolu beyliklerinin ilhakı: Saruhan, Aydın, Ment»; 0g 1390-01-01 «Minjo hanedanı tarafından kuruldu (gelenek)»; 0g 1390-01-01 «Lukeni lua Nimi, Kongo Krallığı'nı kurdu»
  - Alaşehir (m:Kütahya) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1390-01-01 «Batı Anadolu beyliklerinin ilhakı: Saruhan, Aydın, Ment»
  - Ayasuluk (Selçuk) (m:İzmir) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1390-01-01 «Batı Anadolu beyliklerinin ilhakı: Saruhan, Aydın, Ment»
  - Aydın (m:İzmir) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1390-01-01 «Batı Anadolu beyliklerinin ilhakı: Saruhan, Aydın, Ment»
  - Balat (Palatia) (m:Muğla) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1390-01-01 «Batı Anadolu beyliklerinin ilhakı: Saruhan, Aydın, Ment»
  - Birgi (m:İzmir) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1390-01-01 «Batı Anadolu beyliklerinin ilhakı: Saruhan, Aydın, Ment»
  - Datça (m:Muğla) · ESLESTIRME · açık:ABC · - · en yakın anan: 0g 1390-01-01 «Batı Anadolu beyliklerinin ilhakı: Saruhan, Aydın, Ment»
  - Denizli (m:İzmir) · ESLESTIRME · açık:ABC · - · en yakın anan: 0g 1390-01-01 «Batı Anadolu beyliklerinin ilhakı: Saruhan, Aydın, Ment»
  - Fethiye (Makri) (m:Muğla) · ESLESTIRME · açık:ABC · - · en yakın anan: 0g 1390-01-01 «Batı Anadolu beyliklerinin ilhakı: Saruhan, Aydın, Ment»
  - Karahisâr-ı Sâhib (Afyon) (m:Kütahya) · ESLESTIRME · açık:ABC · - · en yakın anan: 0g 1390-01-01 «Batı Anadolu beyliklerinin ilhakı: Saruhan, Aydın, Ment»
  - Marmaris (m:Muğla) · ESLESTIRME · açık:ABC · - · en yakın anan: 0g 1390-01-01 «Batı Anadolu beyliklerinin ilhakı: Saruhan, Aydın, Ment»
  - Milas (m:Muğla) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1390-01-01 «Batı Anadolu beyliklerinin ilhakı: Saruhan, Aydın, Ment»
  - Muğla (m:-) · ESLESTIRME · açık:ABC · - · en yakın anan: 0g 1390-01-01 «Batı Anadolu beyliklerinin ilhakı: Saruhan, Aydın, Ment»
  - Söke (m:İzmir) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1390-01-01 «Batı Anadolu beyliklerinin ilhakı: Saruhan, Aydın, Ment»
  - Tire (m:İzmir) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1390-01-01 «Batı Anadolu beyliklerinin ilhakı: Saruhan, Aydın, Ment»
  - Uşak (m:Kütahya) · ESLESTIRME · açık:ABC · - · en yakın anan: 0g 1390-01-01 «Batı Anadolu beyliklerinin ilhakı: Saruhan, Aydın, Ment»
  - Yenice-i Vardar (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: YOK

**1391-01-01** kazanc — 4/5 nokta açık · kapatan (1): 0g 1391-01-01 «Karadeniz kıyısında Varna'nın alınışı»
  - Burdur (m:Kütahya) · MADDESIZ · açık:ABC · - · en yakın anan: 731g 1393-01-01 «Anadolu Beylerbeyliği kuruldu»
  - Eğirdir (m:Kütahya) · MADDESIZ · açık:ABC · - · en yakın anan: 731g 1393-01-01 «Anadolu Beylerbeyliği kuruldu»
  - Isparta (m:Kütahya) · MADDESIZ · açık:ABC · - · en yakın anan: 731g 1393-01-01 «Anadolu Beylerbeyliği kuruldu»
  - Uluborlu (m:Kütahya) · MADDESIZ · açık:ABC · - · en yakın anan: 731g 1393-01-01 «Anadolu Beylerbeyliği kuruldu»

**1392-11-01** kazanc — 6/8 nokta açık · kapatan (1): 0g 1392-11-01 «Kastamonu'nun ilhakı»
  - Akçakoca (m:Ankara) · MADDESIZ · açık:ABC · G · en yakın anan: 3555g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Bartın (m:Ankara) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1392-11-01 «Kastamonu'nun ilhakı»
  - Devrek (m:Ankara) · MADDESIZ · açık:ABC · G · en yakın anan: 3555g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Eflani (m:Ankara) · MADDESIZ · açık:AB- · G · en yakın anan: 3555g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Karadeniz Ereğli (m:Ankara) · MADDESIZ · açık:ABC · G · en yakın anan: 3555g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Safranbolu (m:Ankara) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1392-11-01 «Kastamonu'nun ilhakı»

**1393-06-01** kazanc — 5/6 nokta açık · kapatan (1): 0g 1393-06-01 «Amasya'nın Osmanlı topraklarına katılması»
  - Ladik (Amasya) (m:Sivas) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1393-06-01 «Amasya'nın Osmanlı topraklarına katılması»
  - Merzifon (m:Sivas) · MADDESIZ · açık:AB- · G · en yakın anan: 1675g 1398-01-01 «Yıldırım Bayezid Sivas, Malatya, Besni, Darende ve Divr»
  - Osmancık (m:Sivas) · MADDESIZ · açık:AB- · G · en yakın anan: 1675g 1398-01-01 «Yıldırım Bayezid Sivas, Malatya, Besni, Darende ve Divr»
  - Tokat (m:Sivas) · MADDESIZ · açık:AB- · G · en yakın anan: 1675g 1398-01-01 «Yıldırım Bayezid Sivas, Malatya, Besni, Darende ve Divr»
  - Çorum (m:Ankara) · MADDESIZ · açık:AB- · G · en yakın anan: 1870g 1398-07-15 «Kadı Burhâneddin Devleti'nin yıkılışı»

**1393-07-17** kazanc — 1/2 nokta açık · kapatan (1): 0g 1393-07-17 «Tırnova'nın düşüşü — Bulgaristan'ın ilhakı»
  - Plevne (m:Sofya) · ESLESTIRME · açık:AB- · TG · en yakın anan: 0g 1393-07-17 «Tırnova'nın düşüşü — Bulgaristan'ın ilhakı»

**1393-09-01** kazanc — 2/4 nokta açık · kapatan (2): 0g 1393-09-01 «Dobruca'nın katılışı»; 3g 1393-08-29 «Timur Bağdat'ı zaptetti — Celâyirliler Anadolu'ya kaçtı»
  - Babadağı (Babadag) (m:Özi) · MADDESIZ · açık:AB- · G · en yakın anan: 3251g 1402-07-28 «Ankara bozgununun ardından Eflak Voyvodası Mircea Dobru»
  - İshakçı (Isaccea) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 3251g 1402-07-28 «Ankara bozgununun ardından Eflak Voyvodası Mircea Dobru»

**1394-01-01** kazanc — 2/3 nokta açık · kapatan (4): 0g 1394-01-01 «Teselya'ya iniş»; 0g 1394-01-01 «Yıldırım Bayezid İstanbul'u yeniden sıkı bir kuşatma al»; 0g 1394-01-01 «Jaunpûr valisi Delhi'den bağımsızlaştı, Şarkî Sultanlığ»
  - Yenişehir (Larissa) (m:Yanya) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1394-01-01 «Teselya'ya iniş»
  - İzdin (Lamia) (m:Yanya) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1394-01-01 «Teselya'ya iniş»

**1395-01-01** kazanc — 2/3 nokta açık · kapatan (1): 0g 1395-01-01 «Niğbolu'nun fethi»
  - Debre (Dibra) (m:Üsküp) · MADDESIZ · açık:ABC · - · en yakın anan: 1091g 1392-01-06 «Üsküp'ün fethi»
  - Görice (Korçë) (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: YOK

**1395-05-17** kazanc — 5/5 nokta açık · kapatan (1): 0g 1395-05-17 «Rovine Savaşı — Eflak seferi»
  - Doyran (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 8634g 1371-09-26 «Dejanoviç Prensliği (Kostadin-ili) Osmanlı vasalı oldu»
  - Köprülü (Veles) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 8634g 1371-09-26 «Dejanoviç Prensliği (Kostadin-ili) Osmanlı vasalı oldu»
  - Köstendil (m:Sofya) · MADDESIZ · açık:ABC · G · en yakın anan: 2628g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Ustrumca (Strumica) (m:Köstendil) · MADDESIZ · açık:ABC · G · en yakın anan: 7806g 1374-01-01 «Struma ve Mesta vadileri: Köstendil, Petriç, Nevrokop v»
  - İştip (Štip) (m:Köstendil) · MADDESIZ · açık:ABC · G · en yakın anan: 7806g 1374-01-01 «Struma ve Mesta vadileri: Köstendil, Petriç, Nevrokop v»

**1395-08-01** kazanc — 2/2 nokta açık · kapatan (1): 0g 1395-08-01 «Anadolu Hisarı'nın yapımı»
  - Anadolu Hisarı (m:İstanbul) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1395-08-01 «Anadolu Hisarı'nın yapımı»
  - Beykoz (m:İstanbul) · MADDESIZ · açık:AB- · G · en yakın anan: 577g 1394-01-01 «Yıldırım Bayezid İstanbul'u yeniden sıkı bir kuşatma al»

**1397-07-01** kazanc — 1/6 nokta açık · kapatan (1): 0g 1397-07-01 «Karaman'ın ilk ilhakı»
  - Karapınar (m:Karaman) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1397-07-01 «Karaman'ın ilk ilhakı»

**1398-01-01** kazanc — 2/3 nokta açık · kapatan (1): 0g 1398-01-01 «Yıldırım Bayezid Sivas, Malatya, Besni, Darende ve Divr»
  - Behisni (Besni) (m:Malatya) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1398-01-01 «Yıldırım Bayezid Sivas, Malatya, Besni, Darende ve Divr»
  - Darende (m:Maraş) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1398-01-01 «Yıldırım Bayezid Sivas, Malatya, Besni, Darende ve Divr»

**1398-06-01** kazanc — 5/5 nokta açık · kapatan (1): 30g 1398-07-01 «Canik kıyılarının katılışı: Samsun»
  - Gölköy (Habsamana) (m:-) · MADDESIZ · açık:AB- · - · en yakın anan: YOK
  - Mesudiye (Milas) (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: 3073g 1390-01-01 «Batı Anadolu beyliklerinin ilhakı: Saruhan, Aydın, Ment»
  - Ordu (Bayramlı) (m:Trabzon) · MADDESIZ · açık:AB- · - · en yakın anan: 10591g 1427-06-01 «Hacıemîroğulları Beyliği'nin ilhakı — Ordu ve Ünye»
  - Reşadiye (İskefsir) (m:-) · MADDESIZ · açık:AB- · - · en yakın anan: YOK
  - Ünye (m:Trabzon) · MADDESIZ · açık:AB- · - · en yakın anan: 10591g 1427-06-01 «Hacıemîroğulları Beyliği'nin ilhakı — Ordu ve Ünye»

**1398-07-15** kazanc — 1/3 nokta açık · kapatan (2): 0g 1398-07-15 «Kadı Burhâneddin Devleti'nin yıkılışı»; 14g 1398-07-01 «Canik kıyılarının katılışı: Samsun»
  - Kırşehir (m:Ankara) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1398-07-15 «Kadı Burhâneddin Devleti'nin yıkılışı»

**1400-01-01** kayip — 1/5 nokta açık · kapatan (5): 0g 1400-01-01 «Timur Malatya'yı aldı — şehir Dulkadıroğulları'na geçti»; 0g 1400-01-01 «Dârfûr'da Dâcû hâkimiyetinin Tuncûrlar'a geçmesi»; 0g 1400-01-01 «Bursa'da Yıldırım Darüşşifası — ilk Osmanlı hastanesi»
  - Darende (m:Maraş) · KAYMA · açık:AB- · T · en yakın anan: 212g 1400-08-01 «Besni, Timur'un Sivas ve Malatya seferi sırasında Memlü»

**1401-02-01** kazanc — 1/3 nokta açık · kapatan (1): 0g 1401-02-01 «Yıldırım Bayezid Erzincan ve Kemah'ı geri aldı»
  - Kemah (m:Erzurum) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1401-02-01 «Yıldırım Bayezid Erzincan ve Kemah'ı geri aldı»

**1402-07-28** kayip — 120/220 nokta açık · kapatan (5): 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»; 0g 1402-07-28 «Ankara bozgununun ardından Eflak Voyvodası Mircea Dobru»; 4g 1402-08-01 «Şehzadeler arasında ülkenin bölünmesi»
  - Aksaray (m:Konya) · MADDESIZ · açık:ABC · G · en yakın anan: 1852g 1397-07-01 «Karaman'ın ilk ilhakı»
  - Akyazı (m:İstanbul) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Akşehir (m:Konya) · KAYMA · açık:ABC · G · en yakın anan: 224g 1403-03-09 «Yıldırım Bayezid'in esarette ölümü»
  - Alaşehir (m:Kütahya) · MADDESIZ · açık:AB- · G · en yakın anan: 3494g 1393-01-01 «Anadolu Beylerbeyliği kuruldu»
  - Anadolu Hisarı (m:İstanbul) · MADDESIZ · açık:AB- · G · en yakın anan: 2552g 1395-08-01 «Anadolu Hisarı'nın yapımı»
  - Antalya (m:-) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Ayasuluk (Selçuk) (m:İzmir) · KAYMA · açık:AB- · G · en yakın anan: 139g 1402-12-14 «Timur İzmir'i Saint Jean şövalyelerinden aldı»
  - Aydın (m:İzmir) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Babadağı (Babadag) (m:Özi) · ESLESTIRME · açık:A-- · TG · en yakın anan: 0g 1402-07-28 «Ankara bozgununun ardından Eflak Voyvodası Mircea Dobru»
  - Balat (Palatia) (m:Muğla) · MADDESIZ · açık:AB- · G · en yakın anan: 4590g 1390-01-01 «Batı Anadolu beyliklerinin ilhakı: Saruhan, Aydın, Ment»
  - Bergama (m:İzmir) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Beykoz (m:İstanbul) · MADDESIZ · açık:AB- · G · en yakın anan: 2879g 1410-06-15 «Kosmidion Savaşı»
  - Beyşehir (m:Konya) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Birgi (m:İzmir) · KAYMA · açık:AB- · G · en yakın anan: 139g 1402-12-14 «Timur İzmir'i Saint Jean şövalyelerinden aldı»
  - Burdur (m:Kütahya) · MADDESIZ · açık:ABC · G · en yakın anan: 3494g 1393-01-01 «Anadolu Beylerbeyliği kuruldu»
  - Datça (m:Muğla) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Debre (Dibra) (m:Üsküp) · MADDESIZ · açık:ABC · G · en yakın anan: 3855g 1392-01-06 «Üsküp'ün fethi»
  - Denizli (m:İzmir) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Doyran (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 11262g 1371-09-26 «Dejanoviç Prensliği (Kostadin-ili) Osmanlı vasalı oldu»
  - Drama (m:Selanik) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Elmalı (m:Antalya) · MADDESIZ · açık:ABC · G · en yakın anan: 3860g 1392-01-01 «Teke ilinin ilhakı: Antalya'nın katılışı»
  - Emet (Eğrigöz) (m:Kütahya) · MADDESIZ · açık:AB- · G · en yakın anan: 3494g 1393-01-01 «Anadolu Beylerbeyliği kuruldu»
  - Ermenek (m:Konya) · MADDESIZ · açık:ABC · G · en yakın anan: 1852g 1397-07-01 «Karaman'ın ilk ilhakı»
  - Erzincan (m:Erzurum) · MADDESIZ · açık:ABC · G · en yakın anan: 542g 1401-02-01 «Yıldırım Bayezid Erzincan ve Kemah'ı geri aldı»
  - Eski Zağra (Stara Zagora) (m:Sofya) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Eskişehir (m:Kütahya) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Eğirdir (m:Kütahya) · MADDESIZ · açık:ABC · G · en yakın anan: 3494g 1393-01-01 «Anadolu Beylerbeyliği kuruldu»
  - Fethiye (Makri) (m:Muğla) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Filibe (m:Sofya) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Filorina (Florina) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Finike (m:Antalya) · MADDESIZ · açık:ABC · G · en yakın anan: 3860g 1392-01-01 «Teke ilinin ilhakı: Antalya'nın katılışı»
  - Gebze (m:İstanbul) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Gevgili (Gevgelija) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Gölköy (Habsamana) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Görice (Korçë) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Hereke (m:İstanbul) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Ilgın (m:Konya) · MADDESIZ · açık:ABC · G · en yakın anan: 1852g 1397-07-01 «Karaman'ın ilk ilhakı»
  - Isparta (m:Kütahya) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Kandıra (m:İstanbul) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Karabiga (m:Biga) · MADDESIZ · açık:ABC · G · en yakın anan: 21026g 1345-01-01 «Karesi Beyliği'nin ilhakı: Balıkesir, Bergama, Biga, Ed»
  - Karacahisar (m:Kütahya) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Karaferye (Veria) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 5559g 1387-05-08 «Karaferye'nin (Veria) Osmanlı hâkimiyetine girmesi»
  - Karahisâr-ı Sâhib (Afyon) (m:Kütahya) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Karaman (m:Konya) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Karapınar (m:Karaman) · KAYMA · açık:ABC · G · en yakın anan: 49g 1402-09-15 «Timur Anadolu beyliklerini yeniden kurdu — Türk birliği»
  - Karpuzlu (Yenikarpuzlu) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Kavala (m:Selanik) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Kayseri (m:Sivas) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Kaş (Antiphellos) (m:Antalya) · MADDESIZ · açık:ABC · G · en yakın anan: 3860g 1392-01-01 «Teke ilinin ilhakı: Antalya'nın katılışı»
  - Kelkit (m:Erzincan) · MADDESIZ · açık:ABC · G · en yakın anan: 542g 1401-02-01 «Yıldırım Bayezid Erzincan ve Kemah'ı geri aldı»
  - Kemah (m:Erzurum) · KAYMA · açık:ABC · G · en yakın anan: 137g 1402-03-13 «Timur'un Tebriz'den gönderdiği ültimatom — dört şart»
  - Kesriye (Kastoria) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Konya (m:-) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Köprülü (Veles) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 11262g 1371-09-26 «Dejanoviç Prensliği (Kostadin-ili) Osmanlı vasalı oldu»
  - Köstendil (m:Sofya) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Küfkaynapınarı (Azatlı) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Kütahya (m:-) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Kılkış (Avrathisar) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Ladik (Amasya) (m:Sivas) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Lanzaka (Lagkadas) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Malak Dervent (Lalkovo) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Manastır (m:Üsküp) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Marmaris (m:Muğla) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Merzifon (m:Sivas) · MADDESIZ · açık:AB- · G · en yakın anan: 726g 1400-08-01 «Timur Sivas'ı yerle bir etti»
  - Mesudiye (Milas) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 4590g 1390-01-01 «Batı Anadolu beyliklerinin ilhakı: Saruhan, Aydın, Ment»
  - Milas (m:Muğla) · MADDESIZ · açık:AB- · G · en yakın anan: 4590g 1390-01-01 «Batı Anadolu beyliklerinin ilhakı: Saruhan, Aydın, Ment»
  - Muğla (m:-) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Nevrokop (Gotse Delçev) (m:Selanik) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Niğbolu (m:Sofya) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Niş (m:Sofya) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Ohri (m:Üsküp) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Ordu (Bayramlı) (m:Trabzon) · MADDESIZ · açık:ABC · G · en yakın anan: 9074g 1427-06-01 «Hacıemîroğulları Beyliği'nin ilhakı — Ordu ve Ünye»
  - Osmancık (m:Sivas) · MADDESIZ · açık:AB- · G · en yakın anan: 726g 1400-08-01 «Timur Sivas'ı yerle bir etti»
  - Pelekanon (Eskihisar) (m:İstanbul) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Petriç (m:Selanik) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Plevne (m:Sofya) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Praviște (Eleftheroupoli) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 186652g 1913-08-10 «Bükreş Antlaşması — Batı Trakya ve Kavala havzası Bulga»
  - Prevadi (Provadia) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Reşadiye (İskefsir) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Samandıra (m:İstanbul) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Samsun (m:Sivas) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Saroz kuzey kıyısı (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: 16643g 1357-01-01 «Süleyman Paşa döneminde Trakya ilerleyişi: Malkara, İps»
  - Selanik (m:-) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Serez (m:Selanik) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Seydişehir (m:Konya) · MADDESIZ · açık:ABC · G · en yakın anan: 1852g 1397-07-01 «Karaman'ın ilk ilhakı»
  - Simav (m:Kütahya) · MADDESIZ · açık:AB- · G · en yakın anan: 3494g 1393-01-01 «Anadolu Beylerbeyliği kuruldu»
  - Sivas (m:-) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Sofya (m:-) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Stérna (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Söke (m:İzmir) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Tatarpazarcığı (m:Sofya) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Tavşanlı (m:Kütahya) · MADDESIZ · açık:AB- · G · en yakın anan: 3494g 1393-01-01 «Anadolu Beylerbeyliği kuruldu»
  - Tire (m:İzmir) · KAYMA · açık:AB- · G · en yakın anan: 139g 1402-12-14 «Timur İzmir'i Saint Jean şövalyelerinden aldı»
  - Tokat (m:Sivas) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Tosya (m:Kastamonu) · MADDESIZ · açık:ABC · G · en yakın anan: 3555g 1392-11-01 «Kastamonu'nun ilhakı»
  - Távri (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Tırhala (m:Yanya) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Tırnova (m:Sofya) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Uluborlu (m:Kütahya) · MADDESIZ · açık:ABC · G · en yakın anan: 3494g 1393-01-01 «Anadolu Beylerbeyliği kuruldu»
  - Uluköy (Akçadam) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Umur Fakih (Fakia) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Ustrumca (Strumica) (m:Köstendil) · MADDESIZ · açık:ABC · G · en yakın anan: 10434g 1374-01-01 «Struma ve Mesta vadileri: Köstendil, Petriç, Nevrokop v»
  - Uşak (m:Kütahya) · MADDESIZ · açık:ABC · G · en yakın anan: 3494g 1393-01-01 «Anadolu Beylerbeyliği kuruldu»
  - Vidin (m:Sofya) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Vize (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: 12260g 1369-01-01 «Istıranca kaleleri: Pınarhisar, Kırkkilise (Kırklareli)»
  - Vodina (Edessa) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 5686g 1387-01-01 «Vodina'nın fethi (1386-1387 kışı)»
  - Yalvaç (m:Kütahya) · MADDESIZ · açık:ABC · G · en yakın anan: 3494g 1393-01-01 «Anadolu Beylerbeyliği kuruldu»
  - Yenice-i Vardar (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Yenişehir (Larissa) (m:Yanya) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Ünye (m:Trabzon) · MADDESIZ · açık:AB- · G · en yakın anan: 9074g 1427-06-01 «Hacıemîroğulları Beyliği'nin ilhakı — Ordu ve Ünye»
  - Üsküdar (m:İzmit) · MADDESIZ · açık:AB- · G · en yakın anan: 16431g 1357-08-01 «Şehzade Halil'in kaçırılması»
  - Üsküp (m:-) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - İhtiman (m:Sofya) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - İshaklı (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 13356g 1366-01-01 «Karamanoğlu Alâeddin Bey Konya, Aksaray ve Niğde'yi Kar»
  - İshakçı (Isaccea) (m:-) · ESLESTIRME · açık:A-- · TG · en yakın anan: 0g 1402-07-28 «Ankara bozgununun ardından Eflak Voyvodası Mircea Dobru»
  - İskeçe (m:Selanik) · KAYMA · açık:ABC · G · en yakın anan: 308g 1403-06-01 «Süleyman Çelebi – Bizans antlaşması: Selanik'in iadesi»
  - İzdin (Lamia) (m:Yanya) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - İzmit (m:İstanbul) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - İştip (Štip) (m:Köstendil) · MADDESIZ · açık:ABC · G · en yakın anan: 10434g 1374-01-01 «Struma ve Mesta vadileri: Köstendil, Petriç, Nevrokop v»
  - Şehirköy (Pirot) (m:Sofya) · MADDESIZ · açık:ABC · G · en yakın anan: 3444g 1412-01-01 «Sırp Despotu Stefan Lazareviç Şehirköy'ü (Pirot) aldı»

**1413-07-05** kazanc — 140/150 nokta açık · kapatan (2): 0g 1413-07-05 «Çamurlu Savaşı — birliğin yeniden kurulması»; 4g 1413-07 «Çelebi Mehmed birliği yeniden kurdu»
  - Absu (Hypsu) (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Adranos (Orhaneli) (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Akhisar (Pamukova) (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Akyazı (m:İstanbul) · MADDESIZ · açık:ABC · G · en yakın anan: 765g 1411-06-01 «Musa Çelebi'nin İstanbul kuşatması»
  - Amasya (m:Sivas) · MADDESIZ · açık:ABC · G · en yakın anan: 1860g 1408-06-01 «Çelebi Mehmed Sivas'ı Timurlu Mezid Bey'den geri aldı»
  - Anadolu Hisarı (m:İstanbul) · MADDESIZ · açık:ABC · G · en yakın anan: 765g 1411-06-01 «Musa Çelebi'nin İstanbul kuşatması»
  - Ankara (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 604g 1415-03-01 «Konya kuşatması ve Karamanoğulları ile antlaşma — Hamîd»
  - Armutlu (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Aydos Kalesi (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Ayvalık (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Balıkesir (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Behramkale (Assos) (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Bergama (m:İzmir) · MADDESIZ · açık:ABC · G · en yakın anan: 696g 1415-06-01 «İzmir'in Aydınoğlu Cüneyd Bey'den alınışı»
  - Beykoz (m:İstanbul) · MADDESIZ · açık:ABC · G · en yakın anan: 765g 1411-06-01 «Musa Çelebi'nin İstanbul kuşatması»
  - Biga (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Bilecik (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Bolayır (m:Edirne) · MADDESIZ · açık:ABC · G · en yakın anan: 869g 1411-02-17 «Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim»
  - Bozüyük (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Bursa (m:-) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Debre (Dibra) (m:Üsküp) · MADDESIZ · açık:ABC · G · en yakın anan: 7850g 1392-01-06 «Üsküp'ün fethi»
  - Dedeağaç (Alexandroupoli) (m:Edirne) · MADDESIZ · açık:ABC · G · en yakın anan: 869g 1411-02-17 «Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim»
  - Demirköy (m:Edirne) · MADDESIZ · açık:ABC · G · en yakın anan: 869g 1411-02-17 «Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim»
  - Dereköy (Kırklareli) (m:Edirne) · MADDESIZ · açık:ABC · G · en yakın anan: 869g 1411-02-17 «Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim»
  - Dimbos (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Dimetoka (m:Edirne) · MADDESIZ · açık:ABC · G · en yakın anan: 869g 1411-02-17 «Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim»
  - Domaniç (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Doyran (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 15257g 1371-09-26 «Dejanoviç Prensliği (Kostadin-ili) Osmanlı vasalı oldu»
  - Drama (m:Selanik) · MADDESIZ · açık:ABC · G · en yakın anan: 3673g 1403-06-15 «Gelibolu Antlaşması — Bizans'a tavizler»
  - Edirne (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 869g 1411-02-17 «Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim»
  - Edremit (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Elhova (Elhovo) (m:Edirne) · MADDESIZ · açık:ABC · G · en yakın anan: 869g 1411-02-17 «Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim»
  - Erdek (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Ermeni Derbendi (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Eskişehir (m:Kütahya) · MADDESIZ · açık:ABC · G · en yakın anan: 2591g 1406-06-01 «İsa Çelebi'nin ortadan kalkması»
  - Ferecik (Feres) (m:Edirne) · MADDESIZ · açık:ABC · G · en yakın anan: 869g 1411-02-17 «Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim»
  - Filorina (Florina) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Gebze (m:İstanbul) · MADDESIZ · açık:ABC · G · en yakın anan: 765g 1411-06-01 «Musa Çelebi'nin İstanbul kuşatması»
  - Gelibolu (m:Edirne) · MADDESIZ · açık:ABC · G · en yakın anan: 869g 1411-02-17 «Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim»
  - Gemlik (Kios) (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Gevgili (Gevgelija) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Geyve (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Gölyazı (Apollonia) (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Görice (Korçë) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Gümülcine (m:Edirne) · MADDESIZ · açık:ABC · G · en yakın anan: 869g 1411-02-17 «Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim»
  - Harmankaya (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Havsa (m:Edirne) · MADDESIZ · açık:ABC · G · en yakın anan: 869g 1411-02-17 «Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim»
  - Hereke (m:İstanbul) · MADDESIZ · açık:ABC · G · en yakın anan: 765g 1411-06-01 «Musa Çelebi'nin İstanbul kuşatması»
  - Kandıra (m:İstanbul) · MADDESIZ · açık:ABC · G · en yakın anan: 765g 1411-06-01 «Musa Çelebi'nin İstanbul kuşatması»
  - Karabiga (m:Biga) · MADDESIZ · açık:ABC · G · en yakın anan: 25021g 1345-01-01 «Karesi Beyliği'nin ilhakı: Balıkesir, Bergama, Biga, Ed»
  - Karacahisar (m:Kütahya) · MADDESIZ · açık:ABC · G · en yakın anan: 3995g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Karaferye (Veria) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 9554g 1387-05-08 «Karaferye'nin (Veria) Osmanlı hâkimiyetine girmesi»
  - Karamürsel (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Karatigin (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Karaçepüş (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Karpuzlu (Yenikarpuzlu) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Kavala (m:Selanik) · MADDESIZ · açık:ABC · G · en yakın anan: 3673g 1403-06-15 «Gelibolu Antlaşması — Bizans'a tavizler»
  - Kesriye (Kastoria) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Kestel (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Keşan (m:Edirne) · MADDESIZ · açık:ABC · G · en yakın anan: 869g 1411-02-17 «Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim»
  - Kirmasti (M.Kemalpaşa) (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Kite (Kete) (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Kofçaz (m:Edirne) · MADDESIZ · açık:ABC · G · en yakın anan: 869g 1411-02-17 «Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim»
  - Kulacahisar (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Köprühisar (Yenişehir) (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Köprülü (Veles) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 15257g 1371-09-26 «Dejanoviç Prensliği (Kostadin-ili) Osmanlı vasalı oldu»
  - Küfkaynapınarı (Azatlı) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Kılkış (Avrathisar) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Kırklareli (m:Edirne) · MADDESIZ · açık:ABC · G · en yakın anan: 869g 1411-02-17 «Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim»
  - Ladik (Amasya) (m:Sivas) · MADDESIZ · açık:ABC · G · en yakın anan: 1860g 1408-06-01 «Çelebi Mehmed Sivas'ı Timurlu Mezid Bey'den geri aldı»
  - Lalapaşa (m:Edirne) · MADDESIZ · açık:ABC · G · en yakın anan: 869g 1411-02-17 «Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim»
  - Lanzaka (Lagkadas) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Leblebicihisar (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Lefke (Osmaneli) (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Lüleburgaz (m:Edirne) · MADDESIZ · açık:ABC · G · en yakın anan: 869g 1411-02-17 «Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim»
  - Malak Dervent (Lalkovo) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Malkara (m:Edirne) · MADDESIZ · açık:ABC · G · en yakın anan: 869g 1411-02-17 «Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim»
  - Malko Tırnova (m:Edirne) · MADDESIZ · açık:ABC · G · en yakın anan: 869g 1411-02-17 «Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim»
  - Manastır (m:Üsküp) · MADDESIZ · açık:ABC · G · en yakın anan: 3995g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Marmaracık (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Maydos (Eceabat) (m:Edirne) · MADDESIZ · açık:ABC · G · en yakın anan: 869g 1411-02-17 «Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim»
  - Mekece (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Meriç (İpsala kuzeyi) (m:Edirne) · MADDESIZ · açık:ABC · G · en yakın anan: 869g 1411-02-17 «Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim»
  - Merzifon (m:Sivas) · MADDESIZ · açık:ABC · G · en yakın anan: 1860g 1408-06-01 «Çelebi Mehmed Sivas'ı Timurlu Mezid Bey'den geri aldı»
  - Mihaliç (Karacabey) (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Mudanya (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Mustafapaşa (Svilengrad) (m:Edirne) · MADDESIZ · açık:ABC · G · en yakın anan: 869g 1411-02-17 «Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim»
  - Nevrokop (Gotse Delçev) (m:Selanik) · MADDESIZ · açık:AB- · G · en yakın anan: 3673g 1403-06-15 «Gelibolu Antlaşması — Bizans'a tavizler»
  - Ohri (m:Üsküp) · MADDESIZ · açık:ABC · G · en yakın anan: 3995g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Orestiada (Kumçiftliği) (m:Edirne) · MADDESIZ · açık:ABC · G · en yakın anan: 869g 1411-02-17 «Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim»
  - Osmancık (m:Sivas) · MADDESIZ · açık:ABC · G · en yakın anan: 1860g 1408-06-01 «Çelebi Mehmed Sivas'ı Timurlu Mezid Bey'den geri aldı»
  - Pazaryeri (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Pelekanon (Eskihisar) (m:İstanbul) · MADDESIZ · açık:ABC · G · en yakın anan: 765g 1411-06-01 «Musa Çelebi'nin İstanbul kuşatması»
  - Petriç (m:Selanik) · MADDESIZ · açık:AB- · G · en yakın anan: 3673g 1403-06-15 «Gelibolu Antlaşması — Bizans'a tavizler»
  - Praviște (Eleftheroupoli) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 182657g 1913-08-10 «Bükreş Antlaşması — Batı Trakya ve Kavala havzası Bulga»
  - Prevadi (Provadia) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Rusçuk (m:Silistre) · MADDESIZ · açık:ABC · G · en yakın anan: 2006g 1419-01-01 «Silistre ve Dobruca'nın geri alınışı — Mircea'nın ölümü»
  - Samandıra (m:İstanbul) · MADDESIZ · açık:ABC · G · en yakın anan: 765g 1411-06-01 «Musa Çelebi'nin İstanbul kuşatması»
  - Samsun (m:Sivas) · MADDESIZ · açık:ABC · G · en yakın anan: 1860g 1408-06-01 «Çelebi Mehmed Sivas'ı Timurlu Mezid Bey'den geri aldı»
  - Saroz kuzey kıyısı (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 20638g 1357-01-01 «Süleyman Paşa döneminde Trakya ilerleyişi: Malkara, İps»
  - Serez (m:Selanik) · MADDESIZ · açık:ABC · G · en yakın anan: 1031g 1416-05-01 «Şeyh Bedreddin isyanı»
  - Sivas (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 1860g 1408-06-01 «Çelebi Mehmed Sivas'ı Timurlu Mezid Bey'den geri aldı»
  - Sivrihisar (m:Ankara) · MADDESIZ · açık:ABC · G · en yakın anan: 3413g 1404-03-01 «Emîr Süleyman Anadolu'ya geçti: Bursa ve Ankara onun el»
  - Sofulu (Soufli) (m:Edirne) · MADDESIZ · açık:ABC · G · en yakın anan: 869g 1411-02-17 «Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim»
  - Stérna (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Söğüt (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Tekirdağ (m:Edirne) · MADDESIZ · açık:ABC · G · en yakın anan: 869g 1411-02-17 «Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim»
  - Tokat (m:Sivas) · MADDESIZ · açık:ABC · G · en yakın anan: 1860g 1408-06-01 «Çelebi Mehmed Sivas'ı Timurlu Mezid Bey'den geri aldı»
  - Távri (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Tırhala (m:Yanya) · MADDESIZ · açık:ABC · G · en yakın anan: 3995g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - Ulubat (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Uluköy (Akçadam) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Umur Fakih (Fakia) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Ustrumca (Strumica) (m:Köstendil) · MADDESIZ · açık:ABC · G · en yakın anan: 14429g 1374-01-01 «Struma ve Mesta vadileri: Köstendil, Petriç, Nevrokop v»
  - Uzunköprü (m:Edirne) · MADDESIZ · açık:ABC · G · en yakın anan: 869g 1411-02-17 «Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim»
  - Varna (m:Silistre) · MADDESIZ · açık:ABC · G · en yakın anan: 2006g 1419-01-01 «Silistre ve Dobruca'nın geri alınışı — Mircea'nın ölümü»
  - Vize (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 16255g 1369-01-01 «Istıranca kaleleri: Pınarhisar, Kırkkilise (Kırklareli)»
  - Vodina (Edessa) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 9681g 1387-01-01 «Vodina'nın fethi (1386-1387 kışı)»
  - Yalova (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Yarhisar (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Yenice-i Vardar (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Yenişehir (Bursa) (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Yenişehir (Larissa) (m:Yanya) · MADDESIZ · açık:ABC · G · en yakın anan: 3107g 1405-01-01 «Yenişehir Ovası savaşı — Çelebi Mehmed Amasya'ya çekild»
  - Çanakkale (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - Çankırı (m:Ankara) · MADDESIZ · açık:ABC · G · en yakın anan: 3413g 1404-03-01 «Emîr Süleyman Anadolu'ya geçti: Bursa ve Ankara onun el»
  - Çimpe (m:Edirne) · MADDESIZ · açık:ABC · G · en yakın anan: 869g 1411-02-17 «Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim»
  - Çirmen (m:Edirne) · MADDESIZ · açık:ABC · G · en yakın anan: 869g 1411-02-17 «Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim»
  - Çorlu (m:Edirne) · MADDESIZ · açık:ABC · G · en yakın anan: 869g 1411-02-17 «Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim»
  - Çorum (m:Ankara) · MADDESIZ · açık:ABC · G · en yakın anan: 3413g 1404-03-01 «Emîr Süleyman Anadolu'ya geçti: Bursa ve Ankara onun el»
  - Üsküdar (m:İzmit) · MADDESIZ · açık:ABC · G · en yakın anan: 20426g 1357-08-01 «Şehzade Halil'in kaçırılması»
  - Üsküp (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 3995g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - İmralı Adası (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - İnegöl (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - İpsala (m:Edirne) · MADDESIZ · açık:ABC · G · en yakın anan: 869g 1411-02-17 «Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim»
  - İskeçe (m:Selanik) · MADDESIZ · açık:ABC · G · en yakın anan: 3673g 1403-06-15 «Gelibolu Antlaşması — Bizans'a tavizler»
  - İzdin (Lamia) (m:Yanya) · MADDESIZ · açık:ABC · G · en yakın anan: 3995g 1402-07-28 «Ankara Savaşı — Fetret Devri başladı»
  - İzmit (m:İstanbul) · MADDESIZ · açık:ABC · G · en yakın anan: 765g 1411-06-01 «Musa Çelebi'nin İstanbul kuşatması»
  - İznik (m:Bursa) · KAYMA · açık:ABC · G · en yakın anan: 180g 1414-01-01 «Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması»
  - İştip (Štip) (m:Köstendil) · MADDESIZ · açık:AB- · G · en yakın anan: 14429g 1374-01-01 «Struma ve Mesta vadileri: Köstendil, Petriç, Nevrokop v»
  - Şarköy (m:Edirne) · MADDESIZ · açık:ABC · G · en yakın anan: 869g 1411-02-17 «Emîr Süleyman'ın ölümü — Musa Rumeli'ye hâkim»
  - Şumnu (m:Silistre) · MADDESIZ · açık:ABC · G · en yakın anan: 2006g 1419-01-01 «Silistre ve Dobruca'nın geri alınışı — Mircea'nın ölümü»

**1415-03-01** kazanc — 6/9 nokta açık · kapatan (1): 0g 1415-03-01 «Konya kuşatması ve Karamanoğulları ile antlaşma — Hamîd»
  - Burdur (m:Kütahya) · MADDESIZ · açık:ABC · TG · en yakın anan: 5055g 1429-01-01 «Germiyan'ın vasiyetle ilhakı»
  - Eğirdir (m:Kütahya) · MADDESIZ · açık:AB- · TG · en yakın anan: 5055g 1429-01-01 «Germiyan'ın vasiyetle ilhakı»
  - Isparta (m:Kütahya) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1415-03-01 «Konya kuşatması ve Karamanoğulları ile antlaşma — Hamîd»
  - Uluborlu (m:Kütahya) · MADDESIZ · açık:ABC · TG · en yakın anan: 5055g 1429-01-01 «Germiyan'ın vasiyetle ilhakı»
  - Yalvaç (m:Kütahya) · MADDESIZ · açık:AB- · TG · en yakın anan: 5055g 1429-01-01 «Germiyan'ın vasiyetle ilhakı»
  - İshaklı (m:-) · MADDESIZ · açık:AB- · TG · en yakın anan: 17955g 1366-01-01 «Karamanoğlu Alâeddin Bey Konya, Aksaray ve Niğde'yi Kar»

**1417-01-01** kazanc — 2/5 nokta açık · kapatan (2): 0g 1417-01-01 «Bahreyn adalarının Cebrîler'in eline geçmesi»; 0g 1417-01-01 «Avlonya, Berat ve Kanina'nın fethi»
  - Berat (m:Yanya) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1417-01-01 «Avlonya, Berat ve Kanina'nın fethi»
  - Ergiri (Ergirikasrı) (m:Yanya) · MADDESIZ · açık:AB- · - · en yakın anan: 5029g 1430-10-09 «Yanya'nın teslimi»

**1419-01-01** kazanc — 2/5 nokta açık · kapatan (2): 0g 1419-01-01 «Silistre ve Dobruca'nın geri alınışı — Mircea'nın ölümü»; 0g 1419-01-01 «Orta Anadolu'nun geri alınışı: Kayseri ve Kırşehir»
  - Kırşehir (m:Ankara) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1419-01-01 «Orta Anadolu'nun geri alınışı: Kayseri ve Kırşehir»
  - İshakçı (Isaccea) (m:-) · ESLESTIRME · açık:ABC · - · en yakın anan: 0g 1419-01-01 «Silistre ve Dobruca'nın geri alınışı — Mircea'nın ölümü»

**1424-02-22** kazanc — 3/3 nokta açık · kapatan (1): 0g 1424-02-22 «II. Murad ile Bizans barışı — Bizans yeniden haraç ödem»
  - Ahtapolu (Ahtopol) (m:Edirne) · ESLESTIRME · açık:AB- · TG · en yakın anan: 0g 1424-02-22 «II. Murad ile Bizans barışı — Bizans yeniden haraç ödem»
  - Rezve (Rezovo) (m:Edirne) · ESLESTIRME · açık:AB- · TG · en yakın anan: 0g 1424-02-22 «II. Murad ile Bizans barışı — Bizans yeniden haraç ödem»
  - İğneada (m:Edirne) · ESLESTIRME · açık:AB- · TG · en yakın anan: 0g 1424-02-22 «II. Murad ile Bizans barışı — Bizans yeniden haraç ödem»

**1425-06-01** kazanc — 13/14 nokta açık · kapatan (1): 0g 1425-06-01 «Batı Anadolu beyliklerinin yeniden ilhakı: Menteşe ve A»
  - Ayasuluk (Selçuk) (m:İzmir) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1425-06-01 «Batı Anadolu beyliklerinin yeniden ilhakı: Menteşe ve A»
  - Balat (Palatia) (m:Muğla) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1425-06-01 «Batı Anadolu beyliklerinin yeniden ilhakı: Menteşe ve A»
  - Birgi (m:İzmir) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1425-06-01 «Batı Anadolu beyliklerinin yeniden ilhakı: Menteşe ve A»
  - Datça (m:Muğla) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1425-06-01 «Batı Anadolu beyliklerinin yeniden ilhakı: Menteşe ve A»
  - Fethiye (Makri) (m:Muğla) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1425-06-01 «Batı Anadolu beyliklerinin yeniden ilhakı: Menteşe ve A»
  - Kuşadası (m:İzmir) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1425-06-01 «Batı Anadolu beyliklerinin yeniden ilhakı: Menteşe ve A»
  - Marmaris (m:Muğla) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1425-06-01 «Batı Anadolu beyliklerinin yeniden ilhakı: Menteşe ve A»
  - Milas (m:Muğla) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1425-06-01 «Batı Anadolu beyliklerinin yeniden ilhakı: Menteşe ve A»
  - Muğla (m:-) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1425-06-01 «Batı Anadolu beyliklerinin yeniden ilhakı: Menteşe ve A»
  - Söke (m:İzmir) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1425-06-01 «Batı Anadolu beyliklerinin yeniden ilhakı: Menteşe ve A»
  - Tire (m:İzmir) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1425-06-01 «Batı Anadolu beyliklerinin yeniden ilhakı: Menteşe ve A»
  - Çeşme (m:İzmir) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1425-06-01 «Batı Anadolu beyliklerinin yeniden ilhakı: Menteşe ve A»
  - İzmir (m:-) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1425-06-01 «Batı Anadolu beyliklerinin yeniden ilhakı: Menteşe ve A»

**1427-01-01** kazanc — 2/4 nokta açık · kapatan (5): 0g 1427-01-01 «Tâceddinoğulları Beyliği'nin ilhakı: Niksar»; 0g 1427-01-01 «Belgrad'ın Macaristan'a bırakılması — Tata Antlaşması»; 0g 1427-01-01 «Alâiye'nin Memlük Sultanı Barsbay'a satılması»
  - Terme (m:Sivas) · MADDESIZ · açık:AB- · T · en yakın anan: 6788g 1408-06-01 «Çelebi Mehmed Sivas'ı Timurlu Mezid Bey'den geri aldı»
  - Çarşamba (m:Sivas) · MADDESIZ · açık:AB- · T · en yakın anan: 6788g 1408-06-01 «Çelebi Mehmed Sivas'ı Timurlu Mezid Bey'den geri aldı»

**1427-06-01** kazanc — 4/5 nokta açık · kapatan (1): 0g 1427-06-01 «Hacıemîroğulları Beyliği'nin ilhakı — Ordu ve Ünye»
  - Gölköy (Habsamana) (m:-) · MADDESIZ · açık:AB- · TG · en yakın anan: YOK
  - Mesudiye (Milas) (m:-) · MADDESIZ · açık:AB- · TG · en yakın anan: 730g 1425-06-01 «Batı Anadolu beyliklerinin yeniden ilhakı: Menteşe ve A»
  - Reşadiye (İskefsir) (m:-) · MADDESIZ · açık:AB- · TG · en yakın anan: YOK
  - Ünye (m:Trabzon) · ESLESTIRME · açık:A-- · TG · en yakın anan: 0g 1427-06-01 «Hacıemîroğulları Beyliği'nin ilhakı — Ordu ve Ünye»

**1428-01-01** kazanc — 2/3 nokta açık · kapatan (2): 0g 1428-01-01 «II. Murad Alacahisar'ı aldı, Niş ve Şehirköy Osmanlı'ya»; 0g 1428-01-01 «Tenochtitlan, Texcoco ve Tlacopan Üçlü İttifak'ı kurdu»
  - Niş (m:Sofya) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1428-01-01 «II. Murad Alacahisar'ı aldı, Niş ve Şehirköy Osmanlı'ya»
  - Şehirköy (Pirot) (m:Sofya) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1428-01-01 «II. Murad Alacahisar'ı aldı, Niş ve Şehirköy Osmanlı'ya»

**1429-01-01** kazanc — 1/8 nokta açık · kapatan (1): 0g 1429-01-01 «Germiyan'ın vasiyetle ilhakı»
  - Denizli (m:İzmir) · MADDESIZ · açık:ABC · - · en yakın anan: 1310g 1425-06-01 «Batı Anadolu beyliklerinin yeniden ilhakı: Menteşe ve A»

**1430-10-01** kazanc — 1/7 nokta açık · kapatan (1): 8g 1430-10-09 «Yanya'nın teslimi»
  - Ayasaranda (Sarandë) (m:Delvine) · MADDESIZ · açık:AB- · - · en yakın anan: 176105g 1912-11-28 «Arnavutluk'un istiklâlinin ilânı — Avlonya'da İsmâil Ke»

**1439-08-27** kazanc — 3/4 nokta açık · kapatan (1): 0g 1439-08-27 «Semendire'nin ilk alınışı»
  - Kragujevac (m:Belgrad) · KAYMA · açık:AB- · G · en yakın anan: 218g 1440-04-01 «Belgrad kuşatması (başarısız)»
  - Yagodina (Jagodina) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Çaçak (m:Belgrad) · KAYMA · açık:AB- · G · en yakın anan: 218g 1440-04-01 «Belgrad kuşatması (başarısız)»

**1444-08-01** kayip — 5/6 nokta açık · kapatan (1): 0g 1444-08-01 «Semendire ve Sırp kalelerinin Sırbistan'a iadesi»
  - Alacahisar (Kruševac) (m:Belgrad) · ESLESTIRME · açık:AB- · TG · en yakın anan: 0g 1444-08-01 «Semendire ve Sırp kalelerinin Sırbistan'a iadesi»
  - Kragujevac (m:Belgrad) · MADDESIZ · açık:AB- · TG · en yakın anan: 1583g 1440-04-01 «Belgrad kuşatması (başarısız)»
  - Niş (m:Sofya) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1444-08-01 «Semendire ve Sırp kalelerinin Sırbistan'a iadesi»
  - Yagodina (Jagodina) (m:-) · MADDESIZ · açık:AB- · TG · en yakın anan: YOK
  - Çaçak (m:Belgrad) · MADDESIZ · açık:AB- · TG · en yakın anan: 1583g 1440-04-01 «Belgrad kuşatması (başarısız)»

**1449-01-01** kazanc — 2/3 nokta açık · kapatan (1): 0g 1449-01-01 «Epir kıyısının katılışı: Arta ve Preveze»
  - Preveze (m:Yanya) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1449-01-01 «Epir kıyısının katılışı: Arta ve Preveze»
  - Vonitsa (m:Yanya) · MADDESIZ · açık:AB- · - · en yakın anan: 6659g 1430-10-09 «Yanya'nın teslimi»

**1452-08-31** kazanc — 1/1 nokta açık · kapatan (1): 0g 1452-08-31 «Rumeli Hisarı tamamlandı — 'Boğazkesen'»
  - Rumeli Hisarı (m:İstanbul) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1452-08-31 «Rumeli Hisarı tamamlandı — 'Boğazkesen'»

**1453-05-29** kazanc — 2/5 nokta açık · kapatan (3): 0g 1453-05-29 «İstanbul'un Fethi»; 3g 1453-06-01 «Fatih Sultan Mehmed'in Okmeydanı'nı okçulara tahsis etm»; 3g 1453-06-01 «Çandarlı Halil Paşa'nın azli ve idamı»
  - Boğaziçi (Rumeli yakası) (m:-) · KAYMA · açık:AB- · G · en yakın anan: 271g 1452-08-31 «Rumeli Hisarı tamamlandı — 'Boğazkesen'»
  - Silivri (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: 10689g 1424-02-22 «II. Murad ile Bizans barışı — Bizans yeniden haraç ödem»

**1455-01-01** kazanc — 2/3 nokta açık · kapatan (1): 0g 1455-01-01 «Kuzey Ege adalarının alınışı: Bozcaada, İmroz ve Taşoz»
  - Taşoz (m:Selanik) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1455-01-01 «Kuzey Ege adalarının alınışı: Bozcaada, İmroz ve Taşoz»
  - İmroz (m:Edirne) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1455-01-01 «Kuzey Ege adalarının alınışı: Bozcaada, İmroz ve Taşoz»

**1455-06-01** kazanc — 1/2 nokta açık · kapatan (2): 0g 1455-06-01 «Kosova'nın fethi: Priştine ve Yenipazar'ın alınması»; 19g 1455-06-20 «Prizren'in fethi — Kosova'da Osmanlı sancak merkezi»
  - Yenipazar (Novi Pazar) (m:Üsküp) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1455-06-01 «Kosova'nın fethi: Priştine ve Yenipazar'ın alınması»

**1456-01-01** kazanc — 1/2 nokta açık · kapatan (2): 0g 1456-01-01 «Şehirköy Osmanlı hâkimiyetine döndü — Curac Brankoviç'i»; 23g 1456-01-24 «Enez'in ve Semadirek'in fethi — Batı Trakya kıyısının t»
  - Niş (m:Sofya) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1456-01-01 «Şehirköy Osmanlı hâkimiyetine döndü — Curac Brankoviç'i»

**1456-01-24** kazanc — 1/2 nokta açık · kapatan (2): 0g 1456-01-24 «Enez'in ve Semadirek'in fethi — Batı Trakya kıyısının t»; 23g 1456-01-01 «Şehirköy Osmanlı hâkimiyetine döndü — Curac Brankoviç'i»
  - Semadirek (m:Edirne) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1456-01-24 «Enez'in ve Semadirek'in fethi — Batı Trakya kıyısının t»

**1456-06-01** kazanc — 5/14 nokta açık · kapatan (2): 0g 1456-06-01 «Boğdan'ın haraca bağlanışı»; 3g 1456-06-04 «Atina'nın fethi»
  - Akkirman (m:Silistre) · MADDESIZ · açık:ABC · TG · en yakın anan: 7360g 1476-07-26 «Akdere (Valea Albă) zaferi — Boğdan seferi»
  - Bender (m:Silistre) · MADDESIZ · açık:AB- · TG · en yakın anan: 1613g 1452-01-01 «Karakoyunlu Cihan Şah'ın Timurlu İran'ını (Rey, İsfahan»
  - Hotin (m:Silistre) · MADDESIZ · açık:ABC · TG · en yakın anan: 10291g 1484-08-04 «Akkirman'ın fethi — Dinyester ağzı ve Boğdan'ın Karaden»
  - Kili (m:Silistre) · MADDESIZ · açık:ABC · G · en yakın anan: 7360g 1476-07-26 «Akdere (Valea Albă) zaferi — Boğdan seferi»
  - İsmail (m:Silistre) · MADDESIZ · açık:ABC · TG · en yakın anan: 13666g 1419-01-01 «Silistre ve Dobruca'nın geri alınışı — Mircea'nın ölümü»

**1459-06-20** kazanc — 3/4 nokta açık · kapatan (1): 0g 1459-06-20 «Sırbistan'ın ilhakı (Semendire'nin düşüşü)»
  - Kragujevac (m:Belgrad) · MADDESIZ · açık:AB- · G · en yakın anan: 1063g 1456-07-22 «Belgrad kuşatmasının başarısızlığı»
  - Yagodina (Jagodina) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Çaçak (m:Belgrad) · MADDESIZ · açık:AB- · G · en yakın anan: 1063g 1456-07-22 «Belgrad kuşatmasının başarısızlığı»

**1460-01-01** kazanc — 1/3 nokta açık · kapatan (2): 0g 1460-01-01 «Batı Karadeniz kıyısının alınışı: Amasra»; 0g 1460-01-01 «İzvornik (Zvornik) kalesinin fethi»
  - Tuzla (Bosna) (m:Saraybosna) · MADDESIZ · açık:AB- · - · en yakın anan: 1247g 1463-06-01 «Bosna Krallığı'nın yıkılışı — Fâtih'in Bosna seferi»

**1461-06-01** kazanc — 11/12 nokta açık · kapatan (1): 0g 1461-06-01 «Amasra ve Sinop'un katılışı»
  - Akçakoca (m:Ankara) · MADDESIZ · açık:ABC · G · en yakın anan: 20911g 1404-03-01 «Emîr Süleyman Anadolu'ya geçti: Bursa ve Ankara onun el»
  - Bartın (m:Ankara) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1461-06-01 «Amasra ve Sinop'un katılışı»
  - Bolu (m:Ankara) · MADDESIZ · açık:ABC · G · en yakın anan: 20911g 1404-03-01 «Emîr Süleyman Anadolu'ya geçti: Bursa ve Ankara onun el»
  - Devrek (m:Ankara) · MADDESIZ · açık:ABC · G · en yakın anan: 20911g 1404-03-01 «Emîr Süleyman Anadolu'ya geçti: Bursa ve Ankara onun el»
  - Eflani (m:Ankara) · MADDESIZ · açık:ABC · G · en yakın anan: 20911g 1404-03-01 «Emîr Süleyman Anadolu'ya geçti: Bursa ve Ankara onun el»
  - Karadeniz Ereğli (m:Ankara) · MADDESIZ · açık:ABC · G · en yakın anan: 20911g 1404-03-01 «Emîr Süleyman Anadolu'ya geçti: Bursa ve Ankara onun el»
  - Kastamonu (m:Ankara) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1461-06-01 «Amasra ve Sinop'un katılışı»
  - Konurapa (Düzce) (m:Ankara) · MADDESIZ · açık:ABC · G · en yakın anan: 20911g 1404-03-01 «Emîr Süleyman Anadolu'ya geçti: Bursa ve Ankara onun el»
  - Mudurnu (m:Ankara) · MADDESIZ · açık:ABC · G · en yakın anan: 20911g 1404-03-01 «Emîr Süleyman Anadolu'ya geçti: Bursa ve Ankara onun el»
  - Safranbolu (m:Ankara) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1461-06-01 «Amasra ve Sinop'un katılışı»
  - Tosya (m:Kastamonu) · MADDESIZ · açık:AB- · G · en yakın anan: 25048g 1392-11-01 «Kastamonu'nun ilhakı»

**1462-06-01** kazanc — 1/12 nokta açık · kapatan (1): 0g 1462-06-01 «Eflak seferi: Kazıklı Voyvoda»
  - İbrail (m:Silistre) · MADDESIZ · açık:ABC · TG · en yakın anan: 15857g 1419-01-01 «Silistre ve Dobruca'nın geri alınışı — Mircea'nın ölümü»

**1462-09-17** kazanc — 1/2 nokta açık · kapatan (1): 0g 1462-09-17 «Midilli adasının fethi»
  - Molova (Molyvos) (m:İzmir) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1462-09-17 «Midilli adasının fethi»

**1463-06-01** kazanc — 3/3 nokta açık · kapatan (2): 0g 1463-06-01 «Bosna Krallığı'nın yıkılışı — Fâtih'in Bosna seferi»; 30g 1463-07-01 «On altı yıllık Osmanlı-Venedik Savaşı'nın başlaması»
  - Koniçe (Konjic) (m:Saraybosna) · MADDESIZ · açık:ABC · TG · en yakın anan: 5630g 1448-01-01 «Saray ovasının ilhakı — Bosna içindeki Osmanlı ucunun k»
  - Travnik (m:Saraybosna) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1463-06-01 «Bosna Krallığı'nın yıkılışı — Fâtih'in Bosna seferi»
  - Vişegrad (m:Saraybosna) · MADDESIZ · açık:ABC · TG · en yakın anan: 5630g 1448-01-01 «Saray ovasının ilhakı — Bosna içindeki Osmanlı ucunun k»

**1465-01-24** kayip — 1/1 nokta açık · kapatan (1): 23g 1465-01-01 «Foça'nın alınışı — Hersek Düklüğü'ne ilk girişin açılma»
  - Kili (m:Silistre) · MADDESIZ · açık:ABC · - · en yakın anan: 4201g 1476-07-26 «Akdere (Valea Albă) zaferi — Boğdan seferi»

**1466-01-01** kazanc — 1/2 nokta açık · kapatan (2): 0g 1466-01-01 «Hersek'in büyük kısmının fethi: Trebinye ve Mostar»; 0g 1466-01-01 «İstanbul'da veba salgını ve sarayın Edirne'ye taşınması»
  - Trebinye (m:Saraybosna) · ESLESTIRME · açık:A-- · T · en yakın anan: 0g 1466-01-01 «Hersek'in büyük kısmının fethi: Trebinye ve Mostar»

**1466-06-01** kazanc — 1/1 nokta açık · kapatan (1): 0g 1466-06-01 «II. Arnavutluk seferi — Fatih'in İskender Bey üzerine b»
  - İlbasan (Elbasan) (m:İşkodra) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1466-06-01 «II. Arnavutluk seferi — Fatih'in İskender Bey üzerine b»

**1468-01-01** kazanc — 2/8 nokta açık · kapatan (4): 0g 1468-01-01 «Karaman'ın kesin ilhakı»; 0g 1468-01-01 «Kâsım Han'ın ölümü, Danyal Han'ın tahta çıkışı (Kasım H»; 0g 1468-01-01 «Sünnî Ali, Tuareglerin elindeki Timbuktu'yu Songhay'a k»
  - Karapınar (m:Karaman) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1468-01-01 «Karaman'ın kesin ilhakı»
  - Ulukışla (m:Niğde) · ESLESTIRME · açık:ABC · - · en yakın anan: 0g 1468-01-01 «Karaman'ın kesin ilhakı»

**1470-07-12** kazanc — 1/3 nokta açık · kapatan (1): 0g 1470-07-12 «Eğriboz'un fethi»
  - Karistos (Kızılhisar) (m:Mora (Tripoliçe)) · MADDESIZ · açık:AB- · G · en yakın anan: 2568g 1463-07-01 «On altı yıllık Osmanlı-Venedik Savaşı'nın başlaması»

**1471-01-01** kazanc — 2/3 nokta açık · kapatan (1): 0g 1471-01-01 «Alanya, Anamur ve Silifke'nin (İçel) ilhakı»
  - Anamur (m:Antalya) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1471-01-01 «Alanya, Anamur ve Silifke'nin (İçel) ilhakı»
  - Böğürdelen (Šabac) (m:Belgrad) · MADDESIZ · açık:ABC · - · en yakın anan: 1857g 1476-02-01 «Böğürdelen'in Macarlara kaybı — Sava hattındaki ilk ged»

**1473-08-11** kazanc — 1/2 nokta açık · kapatan (1): 0g 1473-08-11 «Otlukbeli Savaşı»
  - Karahisâr-ı Şarkî (Şebinkarahisar) (m:-) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1473-08-11 «Otlukbeli Savaşı»

**1475-06-06** kazanc — 12/21 nokta açık · kapatan (1): 0g 1475-06-06 «Kırım'ın Osmanlı himayesine girişi»
  - Akmescid (m:Bahçesaray) · MADDESIZ · açık:AB- · TG · en yakın anan: 12574g 1441-01-01 «Kırım Hanlığı'nın kuruluşu — Hacı Giray'ın Altınorda'da»
  - Bahçesaray (m:-) · ESLESTIRME · açık:AB- · TG · en yakın anan: 0g 1475-06-06 «Kırım'ın Osmanlı himayesine girişi»
  - Eski Kırım (Solhat) (m:Bahçesaray) · MADDESIZ · açık:AB- · TG · en yakın anan: 12574g 1441-01-01 «Kırım Hanlığı'nın kuruluşu — Hacı Giray'ın Altınorda'da»
  - Gözleve (Kezlev) (m:Bahçesaray) · MADDESIZ · açık:ABC · TG · en yakın anan: 12574g 1441-01-01 «Kırım Hanlığı'nın kuruluşu — Hacı Giray'ın Altınorda'da»
  - Karasubazar (m:Bahçesaray) · MADDESIZ · açık:AB- · TG · en yakın anan: 12574g 1441-01-01 «Kırım Hanlığı'nın kuruluşu — Hacı Giray'ın Altınorda'da»
  - Kızıkermen (Gazi Kerman) (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 18471g 1526-01-01 «Kızıkermen (Gazi Kerman) ve Dinyeper'in sağ kıyısının d»
  - Maykop (Çerkezya) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Or Kapı (Ferahkirman) (m:Bahçesaray) · MADDESIZ · açık:ABC · TG · en yakın anan: 12574g 1441-01-01 «Kırım Hanlığı'nın kuruluşu — Hacı Giray'ın Altınorda'da»
  - Soçi (Sâşe) (m:-) · KAYMA · açık:ABC · G · en yakın anan: 156g 1475-01-01 «Çerkez kıyısının Osmanlı hâkimiyetini tanıması»
  - Tuapse (m:-) · KAYMA · açık:ABC · G · en yakın anan: 156g 1475-01-01 «Çerkez kıyısının Osmanlı hâkimiyetini tanıması»
  - Özi (m:Silistre) · MADDESIZ · açık:ABC · TG · en yakın anan: 20610g 1419-01-01 «Silistre ve Dobruca'nın geri alınışı — Mircea'nın ölümü»
  - İnkirman (Kalamita) (m:Mankup) · MADDESIZ · açık:AB- · G · en yakın anan: YOK

**1478-06-15** kazanc — 2/2 nokta açık · kapatan (2): 0g 1478-06-15 «Akçahisar'ın (Kruja) fethi ve Arnavutluk'un tamamlanmas»; 14g 1478-06-01 «İlk Osmanlı altını (sultanî) basıldı»
  - Leş (Alessio) (m:İşkodra) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1478-06-15 «Akçahisar'ın (Kruja) fethi ve Arnavutluk'un tamamlanmas»
  - Mat (Mati) (m:İşkodra) · KAYMA · açık:AB- · TG · en yakın anan: 224g 1479-01-25 «İstanbul Antlaşması — Arnavutluk ve İşkodra»

**1479-01-25** kazanc — 3/4 nokta açık · kapatan (2): 0g 1479-01-25 «İstanbul Antlaşması — Arnavutluk ve İşkodra»; 24g 1479-01-01 «Olmütz antlaşmaları: Moravya, Silezya ve Lusatya Matthi»
  - Bozbaba (Ay Strati) (m:Selanik) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1479-01-25 «İstanbul Antlaşması — Arnavutluk ve İşkodra»
  - Limni (m:Selanik) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1479-01-25 «İstanbul Antlaşması — Arnavutluk ve İşkodra»
  - Sisam (m:İzmir) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1479-01-25 «İstanbul Antlaşması — Arnavutluk ve İşkodra»

**1479-08-01** kazanc — 3/4 nokta açık · kapatan (1): 0g 1479-08-01 «İyon adalarının fethi — Tocco düklüğünün sonu: Ayamavra»
  - Kefalonya (m:Yanya) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1479-08-01 «İyon adalarının fethi — Tocco düklüğünün sonu: Ayamavra»
  - Zaklise (Zakynthos) (m:Yanya) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1479-08-01 «İyon adalarının fethi — Tocco düklüğünün sonu: Ayamavra»
  - İthaki (m:Yanya) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1479-08-01 «İyon adalarının fethi — Tocco düklüğünün sonu: Ayamavra»

**1482-01-01** kazanc — 1/4 nokta açık · kapatan (3): 0g 1482-01-01 «Crnojeviç Zetası'nın tâbiiyeti ve Cetinje'nin merkez ol»; 0g 1482-01-01 «Hersek'in ilhakı»; 0g 1482-01-01 «Zaklise'nin (Zakynthos) yıllık haraç karşılığı Venedik'»
  - Kırcaali (m:Edirne) · KAYMA · açık:ABC · - · en yakın anan: 321g 1482-11-18 «Gedik Ahmed Paşa'nın idamı»

**1500-08-09** kazanc — 1/1 nokta açık · kapatan (1): 0g 1500-08-09 «Modon ve Koron'un fethi»
  - Koron (m:Mora (Tripoliçe)) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1500-08-09 «Modon ve Koron'un fethi»

**1500-12-24** kayip — 1/2 nokta açık · kapatan (1): 0g 1500-12-24 «Kefalonya ve İthaki'nin kaybı»
  - İthaki (m:Yanya) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1500-12-24 «Kefalonya ve İthaki'nin kaybı»

**1502-03-01** kazanc — 12/12 nokta açık · kapatan (1): 0g 1502-03-01 «Altın Orda Hanlığı'nın yıkılışı ve Kırım'ın yükselişi»
  - Bozkır (Deşt-i Kıpçak) (m:-) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1502-03-01 «Altın Orda Hanlığı'nın yıkılışı ve Kırım'ın yükselişi»
  - Camboyluk bozkırı (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: YOK
  - Don bozkırı (Sal) (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: YOK
  - Donets bozkırı (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 24778g 1570-01-01 «IV. İvan'ın Don kazaklarına gramotası — Don Kazak Ordas»
  - Kuban (Yekaterinodar) (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 98050g 1770-08-12 «Yedisan ve Bucak Nogaylarının Rus himayesine geçmesi»
  - Kuban Nogay bozkırı (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: YOK
  - Kuban deltası bozkırı (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: YOK
  - Stavropol–Kuma bozkırı (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: YOK
  - Yedisan bozkırı (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 98050g 1770-08-12 «Yedisan ve Bucak Nogaylarının Rus himayesine geçmesi»
  - Yediçkul bozkırı (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: YOK
  - Zaporojye Seçi (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: YOK
  - Çerkask (Razdory) (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 24778g 1570-01-01 «IV. İvan'ın Don kazaklarına gramotası — Don Kazak Ordas»

**1514-09-06** kazanc — 3/4 nokta açık · kapatan (2): 0g 1514-09-06 «Yavuz Sultan Selim'in Tebriz'e girişi»; 9g 1514-09-15 «Tebriz'den çekiliş — bir haftalık işgalin sonu ve Kars-»
  - Doğubayazıt (m:Erzurum) · MADDESIZ · açık:ABC · G · en yakın anan: 374g 1515-09-15 «Doğu Anadolu'nun katılışı»
  - Erzincan (m:Erzurum) · KAYMA · açık:ABC · G · en yakın anan: 47g 1514-10-23 «Bayburt ve Kiğı kaleleri Safevîlerden teslim alındı — E»
  - Siirt (m:Diyarbakır) · MADDESIZ · açık:ABC · G · en yakın anan: 374g 1515-09-15 «Doğu Anadolu'nun katılışı»

**1515-06-13** kazanc — 5/6 nokta açık · kapatan (2): 0g 1515-06-13 «Turnadağ Zaferi — Dulkadir Beyliği Osmanlı'ya tâbi oldu»; 25g 1515-05-19 «Kemah Kalesi'nin Safevîler'den fethi»
  - Darende (m:Maraş) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1515-06-13 «Turnadağ Zaferi — Dulkadir Beyliği Osmanlı'ya tâbi oldu»
  - Göksun (m:-) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1515-06-13 «Turnadağ Zaferi — Dulkadir Beyliği Osmanlı'ya tâbi oldu»
  - Gürün (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: 2394g 1522-01-01 «Dulkadir ülkesinin ilhakı — Maraş merkezli Dulkadır eya»
  - Maraş (m:-) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1515-06-13 «Turnadağ Zaferi — Dulkadir Beyliği Osmanlı'ya tâbi oldu»
  - Zamantı (Pınarbaşı) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: 2394g 1522-01-01 «Dulkadir ülkesinin ilhakı — Maraş merkezli Dulkadır eya»

**1515-09-15** kazanc — 1/1 nokta açık · kapatan (3): 0g 1515-09-15 «Doğu Anadolu'nun katılışı»; 4g 1515-09-19 «Âmid'in (Diyarbekir) fethi ve Diyarbekir beylerbeyiliği»; 4g 1515-09-19 «Nusaybin, Derik ve Silopi'nin Osmanlı'ya katılması — Di»
  - Bitlis (m:Van) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1515-09-15 «Doğu Anadolu'nun katılışı»

**1515-09-19** kazanc — 5/8 nokta açık · kapatan (3): 0g 1515-09-19 «Âmid'in (Diyarbekir) fethi ve Diyarbekir beylerbeyiliği»; 0g 1515-09-19 «Nusaybin, Derik ve Silopi'nin Osmanlı'ya katılması — Di»; 4g 1515-09-15 «Doğu Anadolu'nun katılışı»
  - Babū (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Cibri (Güçlü) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Cizre (m:-) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1515-09-19 «Nusaybin, Derik ve Silopi'nin Osmanlı'ya katılması — Di»
  - Cumai (Birlikköy) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Ḩīmū (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK

**1516-05-01** kazanc — 5/5 nokta açık · kapatan (1): 0g 1516-05-01 «Koçhisar (Kızıltepe) Savaşı ve Mardin ile Urfa'nın feth»
  - Harput (Elazığ) (m:Diyarbakır) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1516-05-01 «Koçhisar (Kızıltepe) Savaşı ve Mardin ile Urfa'nın feth»
  - Palu (m:Diyarbakır) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1516-05-01 «Koçhisar (Kızıltepe) Savaşı ve Mardin ile Urfa'nın feth»
  - Siverek (m:Urfa) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1516-05-01 «Koçhisar (Kızıltepe) Savaşı ve Mardin ile Urfa'nın feth»
  - Urfa (m:Diyarbakır) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1516-05-01 «Koçhisar (Kızıltepe) Savaşı ve Mardin ile Urfa'nın feth»
  - Çemişgezek (m:Diyarbakır) · KAYMA · açık:ABC · G · en yakın anan: 225g 1515-09-19 «Âmid'in (Diyarbekir) fethi ve Diyarbekir beylerbeyiliği»

**1516-08-24** kazanc — 21/36 nokta açık · kapatan (6): 0g 1516-08-24 «Ramazanoğulları Beyliği'nin Osmanlı'ya bağlanması»; 4g 1516-08-28 «Halep, Rakka ve Deyrizor'un Osmanlı hâkimiyetine girişi»; 5g 1516-08-29 «Halep Gökmeydan'da Abbâsî Halifesi III. Mütevekkil ile »
  - Akra (m:Musul) · MADDESIZ · açık:ABC · G · en yakın anan: 3158g 1508-01-01 «Bağdat'ın Safevî'ye geçişi — Irâk-ı Arab el değiştirdi»
  - Arapkir (m:Malatya) · MADDESIZ · açık:AB- · G · en yakın anan: 42391g 1400-08-01 «Besni, Timur'un Sivas ve Malatya seferi sırasında Memlü»
  - Behisni (Besni) (m:Malatya) · MADDESIZ · açık:ABC · G · en yakın anan: 36029g 1418-01-01 «Dulkadıroğlu Mehmed Bey Darende'yi geri aldı, Besni'yi »
  - Birecik (m:Urfa) · KAYMA · açık:AB- · G · en yakın anan: 115g 1516-05-01 «Koçhisar (Kızıltepe) Savaşı ve Mardin ile Urfa'nın feth»
  - Ceylanpınar (m:Diyarbakır) · KAYMA · açık:ABC · G · en yakın anan: 340g 1515-09-19 «Âmid'in (Diyarbekir) fethi ve Diyarbekir beylerbeyiliği»
  - Divriği (m:Malatya) · MADDESIZ · açık:AB- · G · en yakın anan: 42238g 1401-01-01 «Divriği, Timur tehlikesi yüzünden yeniden Memlükler'e v»
  - Duhok (m:Musul) · MADDESIZ · açık:ABC · G · en yakın anan: 3158g 1508-01-01 «Bağdat'ın Safevî'ye geçişi — Irâk-ı Arab el değiştirdi»
  - Hısn-ı Mansûr (Adıyaman) (m:Malatya) · MADDESIZ · açık:ABC · G · en yakın anan: 42391g 1400-08-01 «Besni, Timur'un Sivas ve Malatya seferi sırasında Memlü»
  - Jadlā’ (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Kâhta (m:Malatya) · MADDESIZ · açık:ABC · G · en yakın anan: 42391g 1400-08-01 «Besni, Timur'un Sivas ve Malatya seferi sırasında Memlü»
  - Malatya (m:Maraş) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1516-08-24 «Ramazanoğulları Beyliği'nin Osmanlı'ya bağlanması»
  - Mercihamis (Yurtbağı) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Musul (m:-) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1516-08-24 «Ramazanoğulları Beyliği'nin Osmanlı'ya bağlanması»
  - Qaţţīnah (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Rewândiz (m:Musul) · MADDESIZ · açık:ABC · G · en yakın anan: 3158g 1508-01-01 «Bağdat'ın Safevî'ye geçişi — Irâk-ı Arab el değiştirdi»
  - Sincan (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: 139725g 1899-03-14 «Macdonald hattı notası — Keşmir–Sincan sınırı önerildi,»
  - Sincar (m:Musul) · MADDESIZ · açık:ABC · G · en yakın anan: 3158g 1508-01-01 «Bağdat'ın Safevî'ye geçişi — Irâk-ı Arab el değiştirdi»
  - Telafer (m:Musul) · MADDESIZ · açık:ABC · G · en yakın anan: 3158g 1508-01-01 «Bağdat'ın Safevî'ye geçişi — Irâk-ı Arab el değiştirdi»
  - Tirwānīsh (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Zaho (m:Musul) · MADDESIZ · açık:ABC · G · en yakın anan: 3158g 1508-01-01 «Bağdat'ın Safevî'ye geçişi — Irâk-ı Arab el değiştirdi»
  - İmâdiye (Amêdî) (m:Musul) · MADDESIZ · açık:ABC · G · en yakın anan: 3158g 1508-01-01 «Bağdat'ın Safevî'ye geçişi — Irâk-ı Arab el değiştirdi»

**1516-08-28** kazanc — 1/4 nokta açık · kapatan (8): 0g 1516-08-28 «Halep, Rakka ve Deyrizor'un Osmanlı hâkimiyetine girişi»; 1g 1516-08-29 «Halep Gökmeydan'da Abbâsî Halifesi III. Mütevekkil ile »; 4g 1516-08-24 «Ramazanoğulları Beyliği'nin Osmanlı'ya bağlanması»
  - Rakka (m:Diyarbakır) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1516-08-28 «Halep, Rakka ve Deyrizor'un Osmanlı hâkimiyetine girişi»

**1516-09-27** kazanc — 1/9 nokta açık · kapatan (6): 0g 1516-09-27 «Şam'ın (Dımaşk) Osmanlı hâkimiyetine girişi»; 1g 1516-09-26 «Trablusşam ve Hama'nın Osmanlı idaresine girişi»; 4g 1516-10-01 «Kudüs ve Filistin şehirlerinin Osmanlı yönetimine giriş»
  - Sûr (Tyre) — Lübnan (m:Sayda) · ESLESTIRME · açık:AB- · TG · en yakın anan: 4g 1516-10-01 «Kudüs ve Filistin şehirlerinin Osmanlı yönetimine giriş»

**1516-10-01** kazanc — 1/2 nokta açık · kapatan (4): 0g 1516-10-01 «Kudüs ve Filistin şehirlerinin Osmanlı yönetimine giriş»; 4g 1516-09-27 «Şam'ın (Dımaşk) Osmanlı hâkimiyetine girişi»; 5g 1516-09-26 «Trablusşam ve Hama'nın Osmanlı idaresine girişi»
  - Deyrülkamer (Dayr al-Kamer) (m:-) · MADDESIZ · açık:AB- · TG · en yakın anan: 118796g 1842-01-01 «Lübnan Emirliği'nin sonu — III. Beşîr Şihâb'ın görevden»

**1517-05-01** kazanc — 1/3 nokta açık · kapatan (4): 0g 1517-05-01 «Mardin kalesinin teslimi — Diyarbekir'in güneyinde Safe»; 13g 1517-04-18 «Portekiz donanmasının Cidde'ye saldırısı ve Selman Reis»; 18g 1517-04-13 «Tomanbay'ın Bâbüzüveyle'de idamı ve Memlük Devleti'nin »
  - Hasankeyf (m:-) · MADDESIZ · açık:AB- · TG · en yakın anan: 20208g 1462-01-01 «Akkoyunlu Uzun Hasan, Hısnıkeyfâ Eyyûbî kolunu ortadan »

**1517-05-19** kazanc — 21/22 nokta açık · kapatan (2): 0g 1517-05-19 «İskenderiye'nin donanmayla teslim alınması — Mısır feth»; 18g 1517-05-01 «Mardin kalesinin teslimi — Diyarbekir'in güneyinde Safe»
  - Benhâ (Kalyûbiye) (m:Kahire) · KAYMA · açık:AB- · G · en yakın anan: 36g 1517-04-13 «Tomanbay'ın Bâbüzüveyle'de idamı ve Memlük Devleti'nin »
  - Bilbîs (Şarkiye) (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 36g 1517-04-13 «Tomanbay'ın Bâbüzüveyle'de idamı ve Memlük Devleti'nin »
  - Bürüllüs (Baltîm) (m:Kahire) · KAYMA · açık:AB- · G · en yakın anan: 36g 1517-04-13 «Tomanbay'ın Bâbüzüveyle'de idamı ve Memlük Devleti'nin »
  - Demenhûr (Damanhur) (m:Kahire) · KAYMA · açık:AB- · G · en yakın anan: 36g 1517-04-13 «Tomanbay'ın Bâbüzüveyle'de idamı ve Memlük Devleti'nin »
  - Dessûk (m:Kahire) · KAYMA · açık:AB- · G · en yakın anan: 36g 1517-04-13 «Tomanbay'ın Bâbüzüveyle'de idamı ve Memlük Devleti'nin »
  - Dimyat (m:Kahire) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1517-05-19 «İskenderiye'nin donanmayla teslim alınması — Mısır feth»
  - Ebûkîr (m:Kahire) · KAYMA · açık:AB- · G · en yakın anan: 36g 1517-04-13 «Tomanbay'ın Bâbüzüveyle'de idamı ve Memlük Devleti'nin »
  - El-Arîş (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 36g 1517-04-13 «Tomanbay'ın Bâbüzüveyle'de idamı ve Memlük Devleti'nin »
  - Fâkûs (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 36g 1517-04-13 «Tomanbay'ın Bâbüzüveyle'de idamı ve Memlük Devleti'nin »
  - Kafrüşşeyh (m:Kahire) · KAYMA · açık:AB- · G · en yakın anan: 36g 1517-04-13 «Tomanbay'ın Bâbüzüveyle'de idamı ve Memlük Devleti'nin »
  - Katye (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 36g 1517-04-13 «Tomanbay'ın Bâbüzüveyle'de idamı ve Memlük Devleti'nin »
  - Mahalletülkübrâ (m:Kahire) · KAYMA · açık:AB- · G · en yakın anan: 36g 1517-04-13 «Tomanbay'ın Bâbüzüveyle'de idamı ve Memlük Devleti'nin »
  - Mansûre (m:Kahire) · KAYMA · açık:AB- · G · en yakın anan: 36g 1517-04-13 «Tomanbay'ın Bâbüzüveyle'de idamı ve Memlük Devleti'nin »
  - Menzile (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 36g 1517-04-13 «Tomanbay'ın Bâbüzüveyle'de idamı ve Memlük Devleti'nin »
  - Mersâ Matruh (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 36g 1517-04-13 «Tomanbay'ın Bâbüzüveyle'de idamı ve Memlük Devleti'nin »
  - Mît Gamr (m:Kahire) · KAYMA · açık:AB- · G · en yakın anan: 36g 1517-04-13 «Tomanbay'ın Bâbüzüveyle'de idamı ve Memlük Devleti'nin »
  - Reşîd (Rosetta) (m:Kahire) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1517-05-19 «İskenderiye'nin donanmayla teslim alınması — Mısır feth»
  - Sellûm (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 36g 1517-04-13 «Tomanbay'ın Bâbüzüveyle'de idamı ve Memlük Devleti'nin »
  - Sâlihiyye (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 36g 1517-04-13 «Tomanbay'ın Bâbüzüveyle'de idamı ve Memlük Devleti'nin »
  - Tanta (m:Kahire) · KAYMA · açık:AB- · G · en yakın anan: 36g 1517-04-13 «Tomanbay'ın Bâbüzüveyle'de idamı ve Memlük Devleti'nin »
  - Şibînülkûm (Menûfiye) (m:Kahire) · KAYMA · açık:AB- · G · en yakın anan: 36g 1517-04-13 «Tomanbay'ın Bâbüzüveyle'de idamı ve Memlük Devleti'nin »

**1517-07-06** kazanc — 5/15 nokta açık · kapatan (2): 0g 1517-07-06 «Hicaz'ın savaşsız katılışı: Mekke Şerifi'nin oğlu Ebû N»; 6g 1517-07-12 «Hâdimü'l-Haremeyn unvanının kabulü ve Medine'de hutbe»
  - Bedir (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Hurma (Tâif doğusu) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 103543g 1801-01-01 «Tâif çevresi kabileleri Vehhâbî nüfuzuna girdi — Türabe»
  - Râbiğ (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Türabe (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 103543g 1801-01-01 «Tâif çevresi kabileleri Vehhâbî nüfuzuna girdi — Türabe»
  - Zebîd (m:Sana) · MADDESIZ · açık:ABC · G · en yakın anan: 381g 1516-06-20 «Zebîd'in alınması: Osmanlı denizcilerinin Kızıldeniz'e »

**1518-01-01** kazanc — 2/3 nokta açık · kapatan (1): 0g 1518-01-01 «Erzurum Osmanlı idaresine katıldı — Doğu Anadolu'da Saf»
  - Aşkale (m:-) · MADDESIZ · açık:AB- · T · en yakın anan: 40177g 1408-01-01 «Erzurum ve Aşkale bölgesi Karakoyunlu-Timurlu çekişmesi»
  - Hacıoğlupazarcığı (Dobrich) (m:Silistre) · MADDESIZ · açık:ABC · - · en yakın anan: 28063g 1594-11-01 «Bükreş ayaklanması ve Tuna kalelerine saldırı — isyanın»

**1521-01-01** kazanc — 2/3 nokta açık · kapatan (7): 0g 1521-01-01 «Portekiz'in Bahreyn'i alışı — Cebrî hâkimiyetinin sonu»; 0g 1521-01-01 «Pîrî Reis'in Kitâb-ı Bahriye'nin ilk versiyonunu tamaml»; 0g 1521-01-01 «Nikarya (İkarya) adasının Osmanlı idaresine girmesi»
  - Ba'lebek (Baalbek) (m:Şam) · MADDESIZ · açık:ABC · - · en yakın anan: 1557g 1516-09-27 «Şam'ın (Dımaşk) Osmanlı hâkimiyetine girişi»
  - Fornoz (Fourni) (m:İzmir) · MADDESIZ · açık:AB- · - · en yakın anan: 10379g 1492-08-01 «İspanya'dan sürülen Sefarad Yahudilerinin Osmanlı'ya ka»

**1522-01-01** kazanc — 3/6 nokta açık · kapatan (4): 0g 1522-01-01 «Bagirmi Sultanlığı kuruldu»; 0g 1522-01-01 «Dulkadir ülkesinin ilhakı — Maraş merkezli Dulkadır eya»; 0g 1522-01-01 «Sunan Gunung Jati Bentem'i Pajajaran'dan alarak Demak'a»
  - Göksun (m:-) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1522-01-01 «Dulkadir ülkesinin ilhakı — Maraş merkezli Dulkadır eya»
  - Gürün (m:-) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1522-01-01 «Dulkadir ülkesinin ilhakı — Maraş merkezli Dulkadır eya»
  - Zamantı (Pınarbaşı) (m:-) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1522-01-01 «Dulkadir ülkesinin ilhakı — Maraş merkezli Dulkadır eya»

**1524-01-01** kazanc — 1/1 nokta açık · kapatan (1): 0g 1524-01-01 «Mısır'da Hain Ahmed Paşa isyanı»
  - Orsova (Eski Orsova) (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: 37985g 1420-01-01 «Aşağı Tuna'nın kapanması — Yergöğü, Turnu ve Orşova'nın»

**1526-01-01** kayip — 1/2 nokta açık · kapatan (3): 0g 1526-01-01 «Pîrî Reis'in Kitâb-ı Bahriye'yi genişletip Kanûnî Sulta»; 0g 1526-01-01 «Kalender Şah isyanı»; 0g 1526-01-01 «Kızıkermen (Gazi Kerman) ve Dinyeper'in sağ kıyısının d»
  - Konstantin (m:Cezayir) · MADDESIZ · açık:ABC · - · en yakın anan: 2314g 1519-09-01 «Cezayir'in Osmanlı Devleti'ne bağlanması»

**1526-08-29** kazanc — 1/1 nokta açık · kapatan (2): 0g 1526-08-29 «Mohaç Meydan Muharebesi»; 3g 1526-09-01 «Mohaç sonrası Budin'in teslimi — Macar tahtına iki kral»
  - Lugos (Lugoj) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 9072g 1551-07-01 «Erdel'in Banat kalelerinin (Temeşvar, Lippa, Lugos, Kar»

**1526-09-01** kazanc — 7/13 nokta açık · kapatan (2): 0g 1526-09-01 «Mohaç sonrası Budin'in teslimi — Macar tahtına iki kral»; 3g 1526-08-29 «Mohaç Meydan Muharebesi»
  - Brassó (Braşov) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 10785g 1556-03-12 «Habsburg idaresi Erdel'de sona erdi: Erdel yeniden Osma»
  - Debrecen (m:Varad (Oradea)) · MADDESIZ · açık:ABC · G · en yakın anan: 16261g 1571-03-10 «Erdel beyleri Speyer antlaşmasını onayladı: Erdel prens»
  - Erdel (Kaloşvar) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 5476g 1541-08-29 «Budin'in ilhakı — Macaristan Osmanlı eyaleti»
  - Erdel Belgradı (Gyulafehérvár) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 10785g 1556-03-12 «Habsburg idaresi Erdel'de sona erdi: Erdel yeniden Osma»
  - Segesvár (Sighişoara) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 10785g 1556-03-12 «Habsburg idaresi Erdel'de sona erdi: Erdel yeniden Osma»
  - Varad (Oradea) (m:Erdel (Kaloşvar)) · MADDESIZ · açık:ABC · G · en yakın anan: 10785g 1556-03-12 «Habsburg idaresi Erdel'de sona erdi: Erdel yeniden Osma»
  - Yanova (Ineu) (m:Temeşvar) · MADDESIZ · açık:ABC · G · en yakın anan: 9069g 1551-07-01 «Erdel'in Banat kalelerinin (Temeşvar, Lippa, Lugos, Kar»

**1527-01-01** kazanc — 2/2 nokta açık · kapatan (7): 0g 1527-01-01 «Demak Sultanlığı'nın Majapahit'i yıkıp Cava kıyısına hâ»; 0g 1527-01-01 «Cetin Meclisi — Hırvat soyluları Mohaç'tan sonra Habsbu»; 0g 1527-01-01 «Bihaç'ın kısa süreli Osmanlı idaresi — Mohaç ve Yayça'n»
  - Gospić (m:-) · KAYMA · açık:AB- · - · en yakın anan: 120g 1527-05-01 «Udbina ve Krbava kalelerinin fethi — Lika Osmanlı idare»
  - Konstantin (m:Cezayir) · MADDESIZ · açık:ABC · - · en yakın anan: 2679g 1519-09-01 «Cezayir'in Osmanlı Devleti'ne bağlanması»

**1528-01-01** kazanc — 1/2 nokta açık · kapatan (1): 0g 1528-01-01 «Kuzey Bosna'nın ilhakı: Yayça ve Banaluka»
  - Yayça (Jajce) (m:Saraybosna) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1528-01-01 «Kuzey Bosna'nın ilhakı: Yayça ve Banaluka»

**1534-01-01** kazanc — 5/6 nokta açık · kapatan (3): 0g 1534-01-01 «Matrakçı Nasuh'un Irakeyn seferi güzergâhını Beyân-ı Me»; 0g 1534-01-01 «Kanunî – Hürrem Sultan nikâhı»; 0g 1534-01-01 «Bitlis Ulama Paşa eliyle kesin olarak Osmanlı'ya katıld»
  - Arpaçay (Akyaka) (m:Erzurum) · KAYMA · açık:ABC · - · en yakın anan: 151g 1534-06-01 «Kars çevresinin bütünleşmesi: Arpaçay, Digor ve Iğdır'ı»
  - Beri (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: YOK
  - Digor (m:Erzurum) · KAYMA · açık:ABC · - · en yakın anan: 151g 1534-06-01 «Kars çevresinin bütünleşmesi: Arpaçay, Digor ve Iğdır'ı»
  - Iğdır (m:Erzurum) · KAYMA · açık:ABC · - · en yakın anan: 151g 1534-06-01 «Kars çevresinin bütünleşmesi: Arpaçay, Digor ve Iğdır'ı»
  - Küçükperveli (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: YOK

**1534-09-22** kazanc — 1/2 nokta açık · kapatan (1): 0g 1534-09-22 «Barbaros'un Tunus'u fethi»
  - Annaba (m:Cezayir) · MADDESIZ · açık:ABC · G · en yakın anan: 5500g 1519-09-01 «Cezayir'in Osmanlı Devleti'ne bağlanması»

**1534-12-04** kazanc — 6/20 nokta açık · kapatan (4): 0g 1534-12-04 «Bağdat'ın fethi — Irakeyn Seferi»; 0g 1534-12-04 «Fuzûlî'nin Bağdat'ın fethi sonrası Kanuni'ye kaside sun»; 2g 1534-12-06 «San Francisco de Quito kuruldu — kuzey İnka başkentinde»
  - Erbil (m:Şehrizor) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1534-12-04 «Bağdat'ın fethi — Irakeyn Seferi»
  - Halepçe (m:Şehrizor) · MADDESIZ · açık:ABC · G · en yakın anan: 5507g 1550-01-01 «Şehrizor'un elden çıkışı — Erdelân beyi Sührâb Safevîle»
  - Kasr-ı Şîrîn (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 37009g 1636-04-01 «Revan'ın Safevîlere kaybı»
  - Kerkük (m:Şehrizor) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1534-12-04 «Bağdat'ın fethi — Irakeyn Seferi»
  - Kifri (m:Şehrizor) · MADDESIZ · açık:ABC · G · en yakın anan: 5507g 1550-01-01 «Şehrizor'un elden çıkışı — Erdelân beyi Sührâb Safevîle»
  - Tuz Hurmatu (m:Şehrizor) · MADDESIZ · açık:ABC · G · en yakın anan: 5507g 1550-01-01 «Şehrizor'un elden çıkışı — Erdelân beyi Sührâb Safevîle»

**1535-01-01** kazanc — 2/2 nokta açık · kapatan (5): 0g 1535-01-01 «Fuzûlî'nin Leylâ vü Mecnûn mesnevisini tamamlaması»; 17g 1535-01-18 «Lima kuruldu — İspanyol Peru'sunun başkenti Rimac vadis»; 26g 1534-12-06 «San Francisco de Quito kuruldu — kuzey İnka başkentinde»
  - Annaba (m:Cezayir) · MADDESIZ · açık:ABC · - · en yakın anan: 5601g 1519-09-01 «Cezayir'in Osmanlı Devleti'ne bağlanması»
  - Şehrizor (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: 5479g 1550-01-01 «Şehrizor'un elden çıkışı — Erdelân beyi Sührâb Safevîle»

**1537-01-01** kazanc — 1/2 nokta açık · kapatan (6): 0g 1537-01-01 «Barbaros'un Ege adaları seferi — Nakşa Dükalığı Osmanlı»; 0g 1537-01-01 «Norveç'in Danimarka tacına bağlı bir eyalete indirgenme»; 0g 1537-01-01 «Kars'ın Osmanlı topraklarına kesin katılışı — doğu serh»
  - Paros (m:Rodos) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1537-01-01 «Barbaros'un Ege adaları seferi — Nakşa Dükalığı Osmanlı»

**1537-08-25** kazanc — 2/2 nokta açık · kapatan (3): 0g 1537-08-25 «Korfu kuşatması ve Venedik'le savaş»; 10g 1537-08-15 «Asunción kuruldu — Paraguay ırmağında İspanyol üssü»; 24g 1537-08-01 «Hunza'nın zaptı — zaque Quemuenchatocha'nın yenilgisi»
  - Ayasaranda (Sarandë) (m:Delvine) · MADDESIZ · açık:AB- · G · en yakın anan: 137061g 1912-11-28 «Arnavutluk'un istiklâlinin ilânı — Avlonya'da İsmâil Ke»
  - Delvine (m:Yanya) · MADDESIZ · açık:AB- · G · en yakın anan: 39036g 1430-10-09 «Yanya'nın teslimi»

**1537-10-01** kazanc — 4/5 nokta açık · kapatan (1): 0g 1537-10-01 «Barbaros'un Ege seferi: Venedik'in doğrudan yönettiği a»
  - Batnoz (Patmos) (m:Rodos) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1537-10-01 «Barbaros'un Ege seferi: Venedik'in doğrudan yönettiği a»
  - Egina (Aegina) (m:Atina) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1537-10-01 «Barbaros'un Ege seferi: Venedik'in doğrudan yönettiği a»
  - Kaşot (Kasos) (m:Rodos) · ESLESTIRME · açık:AB- · TG · en yakın anan: 0g 1537-10-01 «Barbaros'un Ege seferi: Venedik'in doğrudan yönettiği a»
  - İstanbulya (Astipalya) (m:Rodos) · ESLESTIRME · açık:AB- · TG · en yakın anan: 0g 1537-10-01 «Barbaros'un Ege seferi: Venedik'in doğrudan yönettiği a»

**1538-01-01** kazanc — 4/4 nokta açık · kapatan (2): 0g 1538-01-01 «Mimar Sinan'ın hassa mimarbaşılığına atanması»; 0g 1538-01-01 «Herseknovi (Castelnuovo) Andrea Doria tarafından zapted»
  - Bosna Brod'u (Bosanski Brod) (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: YOK
  - Bosna Dubiçası (Bosanska Dubica) (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: 91549g 1788-08-26 «Dubica'nın Avusturya'ya düşüşü»
  - Jasenovaç (Jasenovac) (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: YOK
  - Seyûn (Sayvan) (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: YOK

**1538-08-01** kazanc — 3/4 nokta açık · kapatan (3): 0g 1538-08-01 «Barbaros'un Kuzey Ege seferi: İskiros ve Kuzey Sporadla»; 2g 1538-08-03 «Aden'in zaptı ve Yemen sahilinin ilhakı»; 5g 1538-08-06 «Santa Fe de Bogotá kuruldu — Muisca ülkesinde İspanyol »
  - Alonisos (m:Selanik) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1538-08-01 «Barbaros'un Kuzey Ege seferi: İskiros ve Kuzey Sporadla»
  - İskiros (Skyros) (m:Selanik) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1538-08-01 «Barbaros'un Kuzey Ege seferi: İskiros ve Kuzey Sporadla»
  - İskopelos (m:Selanik) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1538-08-01 «Barbaros'un Kuzey Ege seferi: İskiros ve Kuzey Sporadla»

**1538-08-03** kazanc — 3/4 nokta açık · kapatan (5): 0g 1538-08-03 «Aden'in zaptı ve Yemen sahilinin ilhakı»; 2g 1538-08-01 «Barbaros'un Kuzey Ege seferi: İskiros ve Kuzey Sporadla»; 3g 1538-08-06 «Santa Fe de Bogotá kuruldu — Muisca ülkesinde İspanyol »
  - Ferasan (Farasan) (m:Sana) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1538-08-03 «Aden'in zaptı ve Yemen sahilinin ilhakı»
  - Kemeran (Kamaran) (m:Sana) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1538-08-03 «Aden'in zaptı ve Yemen sahilinin ilhakı»
  - Moha (m:Sana) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1538-08-03 «Aden'in zaptı ve Yemen sahilinin ilhakı»

**1538-09-01** kazanc — 4/5 nokta açık · kapatan (4): 0g 1538-09 «Preveze Deniz Zaferi»; 0g 1538-09-01 «Boğdan Seferi ve Bucak (Bender) bölgesinin ilhakı»; 26g 1538-08-06 «Santa Fe de Bogotá kuruldu — Muisca ülkesinde İspanyol »
  - Hacıbey (Odessa) (m:Silistre) · MADDESIZ · açık:AB- · G · en yakın anan: 20515g 1594-11-01 «Bükreş ayaklanması ve Tuna kalelerine saldırı — isyanın»
  - Özi (m:Silistre) · MADDESIZ · açık:ABC · G · en yakın anan: 20515g 1594-11-01 «Bükreş ayaklanması ve Tuna kalelerine saldırı — isyanın»
  - İbrail (m:Silistre) · MADDESIZ · açık:ABC · G · en yakın anan: 20515g 1594-11-01 «Bükreş ayaklanması ve Tuna kalelerine saldırı — isyanın»
  - İsmail (m:Silistre) · MADDESIZ · açık:ABC · G · en yakın anan: 7548g 1518-01-01 «Erzurum Osmanlı idaresine katıldı — Doğu Anadolu'da Saf»

**1540-01-01** kazanc — 1/1 nokta açık · kapatan (2): 0g 1540-01-01 «Yatenga krallığı Vagadugu'dan ayrıldı»; 0g 1540-01-01 «De Soto seferi bölgeden geçti»
  - Annaba (m:Cezayir) · MADDESIZ · açık:ABC · - · en yakın anan: 4383g 1552-01-01 «Cezayir Ocaklığı'nın Sahra'ya doğru genişlemesi — Tuggu»

**1540-10-02** kazanc — 2/2 nokta açık · kapatan (2): 2g 1540-10-04 «San Francisco de Campeche kuruldu — Yucatán fethinin üç»; 30g 1540-11-01 «Anabolu'nun (Nauplion) antlaşmayla devralınması»
  - Nadin (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: 96911g 1806-02-01 «Dalmaçya'nın Fransız idaresine geçişi — Pojun (Bratisla»
  - Vrana (Urana) (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: 96911g 1806-02-01 «Dalmaçya'nın Fransız idaresine geçişi — Pojun (Bratisla»

**1541-08-29** kazanc — 8/11 nokta açık · kapatan (1): 0g 1541-08-29 «Budin'in ilhakı — Macaristan Osmanlı eyaleti»
  - Brassó (Braşov) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 5309g 1556-03-12 «Habsburg idaresi Erdel'de sona erdi: Erdel yeniden Osma»
  - Debrecen (m:Varad (Oradea)) · MADDESIZ · açık:ABC · G · en yakın anan: 10785g 1571-03-10 «Erdel beyleri Speyer antlaşmasını onayladı: Erdel prens»
  - Erdel (Kaloşvar) (m:-) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1541-08-29 «Budin'in ilhakı — Macaristan Osmanlı eyaleti»
  - Erdel Belgradı (Gyulafehérvár) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 5309g 1556-03-12 «Habsburg idaresi Erdel'de sona erdi: Erdel yeniden Osma»
  - Lugos (Lugoj) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 3593g 1551-07-01 «Erdel'in Banat kalelerinin (Temeşvar, Lippa, Lugos, Kar»
  - Segesvár (Sighişoara) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 5309g 1556-03-12 «Habsburg idaresi Erdel'de sona erdi: Erdel yeniden Osma»
  - Varad (Oradea) (m:Erdel (Kaloşvar)) · MADDESIZ · açık:ABC · G · en yakın anan: 5309g 1556-03-12 «Habsburg idaresi Erdel'de sona erdi: Erdel yeniden Osma»
  - Yanova (Ineu) (m:Temeşvar) · MADDESIZ · açık:ABC · G · en yakın anan: 3593g 1551-07-01 «Erdel'in Banat kalelerinin (Temeşvar, Lippa, Lugos, Kar»

**1543-08-10** kazanc — 1/2 nokta açık · kapatan (2): 0g 1543-08-10 «Estergon ve İstolni Belgrad'ın fethi»; 20g 1543-07-21 «Valpo, Şikloş ve Peçuy'un fethi»
  - İstolni Belgrad (m:Budin) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1543-08-10 «Estergon ve İstolni Belgrad'ın fethi»

**1544-09-01** kazanc — 2/3 nokta açık · kapatan (1): 0g 1544-09-01 «Budin'in kuzey ve batı savunma kuşağı: Vaç, Hatvan ve Ş»
  - Vaç (Vác) (m:Budin) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1544-09-01 «Budin'in kuzey ve batı savunma kuşağı: Vaç, Hatvan ve Ş»
  - Şimontorna (m:Budin) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1544-09-01 «Budin'in kuzey ve batı savunma kuşağı: Vaç, Hatvan ve Ş»

**1546-01-01** kazanc — 1/6 nokta açık · kapatan (1): 0g 1546-01-01 «Basra'nın ilhakı ve Basra Körfezi'ne çıkış»
  - Abâdân (m:-) · MADDESIZ · açık:AB- · - · en yakın anan: 110088g 1847-05-31 «II. Erzurum Antlaşması — Şattülarap sınırı ve Hûzistan »

**1548-08-24** kazanc — 7/17 nokta açık · kapatan (3): 0g 1548-08-24 «Van'ın fethi ve doğu sınırının sabitlenmesi»; 23g 1548-08-01 «Şehzade Camii'nin ibadete açılması»; 28g 1548-07-27 «İkinci İran Seferi ve Tebriz'in yeniden alınması»
  - Bacirge (Esendere) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Balıklı (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Gōrabī (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Kilise (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: 4253g 1537-01-01 «Norveç'in Danimarka tacına bağlı bir eyalete indirgenme»
  - Şemdinli (Şemdinni) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Şeyh Salû-yi Ulyâ (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Şeyhrumi (Yücelen) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK

**1550-01-01** kazanc — 4/7 nokta açık · kapatan (5): 0g 1550-01-01 «Lahsa ve Katîf'in ilhakı — Körfez'in Arabistan kıyısı»; 0g 1550-01-01 «Şehrizor'un elden çıkışı — Erdelân beyi Sührâb Safevîle»; 0g 1550-01-01 «Ndewura Jakpa krallığı kurdu»
  - Adapazarı (m:İstanbul) · KAYMA · açık:ABC · - · en yakın anan: 151g 1550-06-01 «Süleymaniye Camii ve külliyesinin inşaatı başladı»
  - Cübeyl (m:Basra) · ESLESTIRME · açık:ABC · - · en yakın anan: 0g 1550-01-01 «Lahsa ve Katîf'in ilhakı — Körfez'in Arabistan kıyısı»
  - Katîf (m:Basra) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1550-01-01 «Lahsa ve Katîf'in ilhakı — Körfez'in Arabistan kıyısı»
  - Ukayr (Uceyr) (m:Basra) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1550-01-01 «Lahsa ve Katîf'in ilhakı — Körfez'in Arabistan kıyısı»

**1551-01-01** kazanc — 9/10 nokta açık · kapatan (1): 0g 1551-01-01 «Ardahan ve Çıldır havzasının alınması»
  - Ahılkelek (Akhalkalaki) (m:Erzurum) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1551-01-01 «Ardahan ve Çıldır havzasının alınması»
  - Artvin (m:Erzurum) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1551-01-01 «Ardahan ve Çıldır havzasının alınması»
  - Borçka (m:Erzurum) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1551-01-01 «Ardahan ve Çıldır havzasının alınması»
  - Hanak (m:Erzurum) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1551-01-01 «Ardahan ve Çıldır havzasının alınması»
  - Hopa (m:Erzurum) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1551-01-01 «Ardahan ve Çıldır havzasının alınması»
  - Posof (m:Erzurum) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1551-01-01 «Ardahan ve Çıldır havzasının alınması»
  - Sarp (m:Erzurum) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1551-01-01 «Ardahan ve Çıldır havzasının alınması»
  - Saylıca (m:-) · MADDESIZ · açık:AB- · - · en yakın anan: YOK
  - Şavşat (m:Erzurum) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1551-01-01 «Ardahan ve Çıldır havzasının alınması»

**1551-07-26** kayip — 4/4 nokta açık · kapatan (2): 20g 1551-08-15 «Trablusgarp'ın fethi»; 25g 1551-07-01 «Erdel'in Banat kalelerinin (Temeşvar, Lippa, Lugos, Kar»
  - Brassó (Braşov) (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: 1691g 1556-03-12 «Habsburg idaresi Erdel'de sona erdi: Erdel yeniden Osma»
  - Erdel (Kaloşvar) (m:-) · ESLESTIRME · açık:A-- · - · en yakın anan: 25g 1551-07-01 «Erdel'in Banat kalelerinin (Temeşvar, Lippa, Lugos, Kar»
  - Erdel Belgradı (Gyulafehérvár) (m:-) · MADDESIZ · açık:AB- · - · en yakın anan: 1691g 1556-03-12 «Habsburg idaresi Erdel'de sona erdi: Erdel yeniden Osma»
  - Segesvár (Sighişoara) (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: 1691g 1556-03-12 «Habsburg idaresi Erdel'de sona erdi: Erdel yeniden Osma»

**1551-08-15** kazanc — 5/18 nokta açık · kapatan (1): 0g 1551-08-15 «Trablusgarp'ın fethi»
  - Beyzâ (Kirene) (m:Bingazi) · MADDESIZ · açık:ABC · G · en yakın anan: 111173g 1856-01-01 «Senûsiyye'nin çöl merkezi Cağbûb'un Osmanlı düzenine ba»
  - Bingazi (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 111173g 1856-01-01 «Senûsiyye'nin çöl merkezi Cağbûb'un Osmanlı düzenine ba»
  - Derne (m:Bingazi) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1551-08-15 «Trablusgarp'ın fethi»
  - Ecdâbiye (m:Bingazi) · MADDESIZ · açık:ABC · G · en yakın anan: 111173g 1856-01-01 «Senûsiyye'nin çöl merkezi Cağbûb'un Osmanlı düzenine ba»
  - Merc (m:Bingazi) · MADDESIZ · açık:ABC · G · en yakın anan: 111173g 1856-01-01 «Senûsiyye'nin çöl merkezi Cağbûb'un Osmanlı düzenine ba»

**1552-01-01** kazanc — 11/12 nokta açık · kapatan (2): 0g 1552-01-01 «Cezayir Ocaklığı'nın Sahra'ya doğru genişlemesi — Tuggu»; 0g 1552-01-01 «Hasanüddin Demak'tan ayrıldı, Bentem bağımsız sultanlık»
  - Ayn Temûşent (m:Cezayir) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1552-01-01 «Cezayir Ocaklığı'nın Sahra'ya doğru genişlemesi — Tuggu»
  - Ağvât (m:Cezayir) · ESLESTIRME · açık:ABC · - · en yakın anan: 0g 1552-01-01 «Cezayir Ocaklığı'nın Sahra'ya doğru genişlemesi — Tuggu»
  - Biskra (m:Cezayir) · ESLESTIRME · açık:ABC · - · en yakın anan: 0g 1552-01-01 «Cezayir Ocaklığı'nın Sahra'ya doğru genişlemesi — Tuggu»
  - Bû Sa'âde (m:Cezayir) · ESLESTIRME · açık:ABC · - · en yakın anan: 0g 1552-01-01 «Cezayir Ocaklığı'nın Sahra'ya doğru genişlemesi — Tuggu»
  - Gardâye (m:Cezayir) · ESLESTIRME · açık:ABC · - · en yakın anan: 0g 1552-01-01 «Cezayir Ocaklığı'nın Sahra'ya doğru genişlemesi — Tuggu»
  - Muaskar (m:Cezayir) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1552-01-01 «Cezayir Ocaklığı'nın Sahra'ya doğru genişlemesi — Tuggu»
  - Mustagānim (m:Cezayir) · ESLESTIRME · açık:ABC · - · en yakın anan: 0g 1552-01-01 «Cezayir Ocaklığı'nın Sahra'ya doğru genişlemesi — Tuggu»
  - Nedrûme (m:Cezayir) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1552-01-01 «Cezayir Ocaklığı'nın Sahra'ya doğru genişlemesi — Tuggu»
  - Sîdî Bel Abbès (m:Cezayir) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1552-01-01 «Cezayir Ocaklığı'nın Sahra'ya doğru genişlemesi — Tuggu»
  - Tuggurt (m:Cezayir) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1552-01-01 «Cezayir Ocaklığı'nın Sahra'ya doğru genişlemesi — Tuggu»
  - Zaporojye Seçi (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: YOK

**1555-05-29** kazanc — 1/1 nokta açık · kapatan (2): 0g 1555-05-29 «Amasya Antlaşması»; 3g 1555-06-01 «Ebüssuûd Efendi'nin gedik (esnaf tekel hakkı) meselesin»
  - Kutaisi (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 23888g 1490-01-01 «Gürcistan Krallığı üçe bölündü — Kartli, Kaheti ve merk»

**1556-01-01** kazanc — 1/2 nokta açık · kapatan (2): 0g 1556-01-01 «Turgut Reis Trablusgarp beylerbeyi oldu — eyalet doğuda»; 0g 1556-01-01 «Moskova Çarlığı Astarhan'ı aldı — Aşağı Volga Rus denet»
  - Bosna Novi'si (Bosanski Novi) (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: 85013g 1788-10-03 «Laudon Una üzerindeki Novi kalesini aldı»

**1556-03-12** kazanc — 3/4 nokta açık · kapatan (1): 0g 1556-03-12 «Habsburg idaresi Erdel'de sona erdi: Erdel yeniden Osma»
  - Brassó (Braşov) (m:-) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1556-03-12 «Habsburg idaresi Erdel'de sona erdi: Erdel yeniden Osma»
  - Erdel Belgradı (Gyulafehérvár) (m:-) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1556-03-12 «Habsburg idaresi Erdel'de sona erdi: Erdel yeniden Osma»
  - Segesvár (Sighişoara) (m:-) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1556-03-12 «Habsburg idaresi Erdel'de sona erdi: Erdel yeniden Osma»

**1557-01-01** kazanc — 9/10 nokta açık · kapatan (2): 0g 1557-01-01 «Seydi Ali Reis'in Mir'âtü'l-Memâlik'i İstanbul'da tamam»; 0g 1557-01-01 «Habeş Eyaleti'nin kuruluşu — Kızıldeniz kıyısının Osman»
  - Akīk (m:Sevâkin) · ESLESTIRME · açık:ABC · - · en yakın anan: 0g 1557-01-01 «Habeş Eyaleti'nin kuruluşu — Kızıldeniz kıyısının Osman»
  - Arkîko (m:Sevâkin) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1557-01-01 «Habeş Eyaleti'nin kuruluşu — Kızıldeniz kıyısının Osman»
  - Benzert (Bizerte) (m:Tunus) · MADDESIZ · açık:ABC · - · en yakın anan: 1229g 1560-05-14 «Cerbe Deniz Zaferi»
  - Dahlak (m:Sevâkin) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1557-01-01 «Habeş Eyaleti'nin kuruluşu — Kızıldeniz kıyısının Osman»
  - Ebû Ramâd (Şalâtîn) (m:Kahire) · ESLESTIRME · açık:ABC · - · en yakın anan: 0g 1557-01-01 «Habeş Eyaleti'nin kuruluşu — Kızıldeniz kıyısının Osman»
  - Halâib (m:Sevâkin) · ESLESTIRME · açık:ABC · - · en yakın anan: 0g 1557-01-01 «Habeş Eyaleti'nin kuruluşu — Kızıldeniz kıyısının Osman»
  - Sevâkin (m:-) · ESLESTIRME · açık:ABC · - · en yakın anan: 0g 1557-01-01 «Habeş Eyaleti'nin kuruluşu — Kızıldeniz kıyısının Osman»
  - Sinkat (m:Sevâkin) · ESLESTIRME · açık:ABC · - · en yakın anan: 0g 1557-01-01 «Habeş Eyaleti'nin kuruluşu — Kızıldeniz kıyısının Osman»
  - Tokar (m:Sevâkin) · ESLESTIRME · açık:ABC · - · en yakın anan: 0g 1557-01-01 «Habeş Eyaleti'nin kuruluşu — Kızıldeniz kıyısının Osman»

**1559-01-01** kazanc — 1/2 nokta açık · kapatan (2): 0g 1559-01-01 «Osmanlı'nın Bahreyn seferi — körfezde Portekiz'e karşı »; 0g 1559-01-01 «Zeyla'nın Habeş Eyaleti'ne katılması»
  - Katar Yarımadası (iç, dolgu) (m:-) · MADDESIZ · açık:AB- · - · en yakın anan: 81815g 1783-01-01 «Âl-i Halîfe'nin Bahreyn'i fethi — bugüne kadar süren ha»

**1566-04-14** kazanc — 1/2 nokta açık · kapatan (2): 0g 1566-04-14 «Sakız'ın Cenevizlilerden alınışı»; 1g 1566-04-15 «Nakşa Dukalığı'nın ilhakı — Kiklad Adaları'nın tamamı»
  - İpsara (Psara) (m:İzmir) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1566-04-14 «Sakız'ın Cenevizlilerden alınışı»

**1566-04-15** kazanc — 15/16 nokta açık · kapatan (2): 0g 1566-04-15 «Nakşa Dukalığı'nın ilhakı — Kiklad Adaları'nın tamamı»; 1g 1566-04-14 «Sakız'ın Cenevizlilerden alınışı»
  - Andros (m:İzmir) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1566-04-15 «Nakşa Dukalığı'nın ilhakı — Kiklad Adaları'nın tamamı»
  - Değirmenlik (Milos) (m:Rodos) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1566-04-15 «Nakşa Dukalığı'nın ilhakı — Kiklad Adaları'nın tamamı»
  - Folegandros (m:Kandiye (Girit)) · MADDESIZ · açık:AB- · G · en yakın anan: 29967g 1648-05-01 «Kandiye kuşatmasının başlaması»
  - Kimolos (Argentiera) (m:Rodos) · MADDESIZ · açık:AB- · G · en yakın anan: 13171g 1530-03-24 «Malta ve Trablus Saint Jean şövalyelerine verildi — Rod»
  - Koçbaba (Serifos) (m:Rodos) · MADDESIZ · açık:AB- · G · en yakın anan: 13171g 1530-03-24 «Malta ve Trablus Saint Jean şövalyelerine verildi — Rod»
  - Mikonos (m:Rodos) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1566-04-15 «Nakşa Dukalığı'nın ilhakı — Kiklad Adaları'nın tamamı»
  - Murted (Kea) (m:Rodos) · MADDESIZ · açık:AB- · G · en yakın anan: 13171g 1530-03-24 «Malta ve Trablus Saint Jean şövalyelerine verildi — Rod»
  - Namfi (Anafi) (m:Kandiye (Girit)) · MADDESIZ · açık:AB- · G · en yakın anan: 29967g 1648-05-01 «Kandiye kuşatmasının başlaması»
  - Nio (İos) (m:Rodos) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1566-04-15 «Nakşa Dukalığı'nın ilhakı — Kiklad Adaları'nın tamamı»
  - Paros (m:Rodos) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1566-04-15 «Nakşa Dukalığı'nın ilhakı — Kiklad Adaları'nın tamamı»
  - Santorini (m:Kandiye (Girit)) · MADDESIZ · açık:AB- · G · en yakın anan: 29967g 1648-05-01 «Kandiye kuşatmasının başlaması»
  - Sifnos (Yavuzca) (m:Rodos) · MADDESIZ · açık:AB- · G · en yakın anan: 13171g 1530-03-24 «Malta ve Trablus Saint Jean şövalyelerine verildi — Rod»
  - Sire (Syros) (m:Rodos) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1566-04-15 «Nakşa Dukalığı'nın ilhakı — Kiklad Adaları'nın tamamı»
  - Termiye (Kythnos) (m:Rodos) · MADDESIZ · açık:AB- · G · en yakın anan: 13171g 1530-03-24 «Malta ve Trablus Saint Jean şövalyelerine verildi — Rod»
  - Yamurgi (Amorgos) (m:Rodos) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1566-04-15 «Nakşa Dukalığı'nın ilhakı — Kiklad Adaları'nın tamamı»

**1570-01-01** kayip — 2/3 nokta açık · kapatan (1): 0g 1570-01-01 «IV. İvan'ın Don kazaklarına gramotası — Don Kazak Ordas»
  - Don bozkırı (Sal) (m:-) · MADDESIZ · açık:ABC · T · en yakın anan: YOK
  - Donets bozkırı (m:-) · ESLESTIRME · açık:ABC · T · en yakın anan: 0g 1570-01-01 «IV. İvan'ın Don kazaklarına gramotası — Don Kazak Ordas»

**1570-07-23** kazanc — 1/2 nokta açık · kapatan (1): 0g 1570-07-23 «Kıbrıs çıkarması: Limasol ve Baf'ın alınışı»
  - Baf (Paphos) (m:Lefkoşa) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1570-07-23 «Kıbrıs çıkarması: Limasol ve Baf'ın alınışı»

**1577-01-01** kazanc — 2/6 nokta açık · kapatan (5): 0g 1577-01-01 «Drina (Sokullu Mehmed Paşa) Köprüsü'nün tamamlanması»; 0g 1577-01-01 «Azapkapı (Sokullu Mehmed Paşa) Camii'nin yaptırılması»; 0g 1577-01-01 «İstanbul Rasathanesi kuruldu»
  - Câlû (m:Bingazi) · ESLESTIRME · açık:ABC · - · en yakın anan: 0g 1577-01-01 «Fizan sancağının Trablusgarp'a bağlanışı — Murzuk ve Sa»
  - Sokna (m:Trablus) · ESLESTIRME · açık:ABC · - · en yakın anan: 0g 1577-01-01 «Fizan sancağının Trablusgarp'a bağlanışı — Murzuk ve Sa»

**1578-08-01** kazanc — 2/3 nokta açık · kapatan (4): 3g 1578-08-04 «Vâdisseyl (Kasrılkebir) Savaşı — Osmanlı desteğindeki A»; 8g 1578-08-09 «Çıldır Zaferi — doğu savaşı başladı»; 8g 1578-08-09 «Ahıska atabegliğinin Osmanlı idaresine girmesi — Altunk»
  - Ts’q’altbila (m:-) · MADDESIZ · açık:AB- · - · en yakın anan: YOK
  - Zazalo (m:-) · MADDESIZ · açık:AB- · - · en yakın anan: YOK

**1578-08-09** kazanc — 5/5 nokta açık · kapatan (4): 0g 1578-08-09 «Çıldır Zaferi — doğu savaşı başladı»; 0g 1578-08-09 «Ahıska atabegliğinin Osmanlı idaresine girmesi — Altunk»; 5g 1578-08-04 «Vâdisseyl (Kasrılkebir) Savaşı — Osmanlı desteğindeki A»
  - Batum (m:Trabzon) · MADDESIZ · açık:AB- · G · en yakın anan: 42727g 1461-08-15 «Trabzon'un fethi»
  - Hulo (Acara) (m:Erzurum) · MADDESIZ · açık:AB- · G · en yakın anan: 8718g 1554-09-26 «Osmanlı–Safevî mütarekesi — Kanunî, Tahmasb'ın ateşkes »
  - Makhalak’auri (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Murvaneti (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Sohum (m:Trabzon) · MADDESIZ · açık:ABC · G · en yakın anan: 37840g 1475-01-01 «Çerkez kıyısının Osmanlı hâkimiyetini tanıması»

**1578-11-01** kazanc — 2/8 nokta açık · kapatan (2): 0g 1578-11-01 «Şirvan'ın fethi: Şamahı'nın alınışı»; 27g 1578-10-05 «Derbend halkının Lala Mustafa Paşa'ya bağlılık arzı — D»
  - Tarki (Tarku) (m:Şeki (Nuha)) · MADDESIZ · açık:AB- · G · en yakın anan: 52536g 1722-09-03 «Rus kuvvetlerinin Derbend'i alması: I. Petro'nun Hazar »
  - Şeki (Nuha) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: 85824g 1813-10-24 «Gülistan Antlaşması: Kafkasya'daki hanlıklar Rusya'ya b»

**1583-09-13** kazanc — 2/3 nokta açık · kapatan (1): 0g 1583-09-13 «Revan'ın (Erivan) fethi ve kale inşası»
  - Eçmiyadzin (m:Erzurum) · MADDESIZ · açık:AB- · G · en yakın anan: 10579g 1554-09-26 «Osmanlı–Safevî mütarekesi — Kanunî, Tahmasb'ın ateşkes »
  - Gümrü (Aleksandropol) (m:Erzurum) · MADDESIZ · açık:AB- · G · en yakın anan: 10579g 1554-09-26 «Osmanlı–Safevî mütarekesi — Kanunî, Tahmasb'ın ateşkes »

**1585-09-25** kazanc — 6/8 nokta açık · kapatan (1): 0g 1585-09-25 «Tebriz'in fethi»
  - Merâga (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: 51075g 1725-07-28 «Tebriz'in zaptı — Azerbaycan'ın ele geçirilmesi»
  - Mîyandoab (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Rāzhān (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Selmâs (Dilman) (m:Van) · MADDESIZ · açık:AB- · G · en yakın anan: 1522g 1581-07-26 «Feragat Bildirgesi (Plakkaat van Verlatinghe) — Holland»
  - Sero (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Urmiye (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: 50501g 1724-01-01 «Urmiye ve Selmâs'ın Osmanlı idaresine geçişi»

**1586-01-01** kazanc — 1/3 nokta açık · kapatan (1): 0g 1586-01-01 «Nahçıvan ve Ordubad'ın Osmanlı idaresine girmesi»
  - Culfa (m:-) · MADDESIZ · açık:AB- · - · en yakın anan: 50626g 1724-08-11 «Nahçıvan'ın alınışı»

**1588-09-01** kazanc — 2/4 nokta açık · kapatan (2): 0g 1588-09-01 «Karabağ ve Gence'nin ilhakı»; 0g 1588-09-01 «Karacadağ (Ahar) hâkimi Şâhverdi Han'ın Cafer Paşa'ya i»
  - Berde (Karabağ) (m:-) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1588-09-01 «Karabağ ve Gence'nin ilhakı»
  - Merend (m:-) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1588-09-01 «Karacadağ (Ahar) hâkimi Şâhverdi Han'ın Cafer Paşa'ya i»

**1589-01-01** kazanc — 1/2 nokta açık · kapatan (1): 0g 1589-01-01 «Cığalazâde Sinan Paşa'nın Nihâvend'i alıp kale kurması »
  - Luristan (m:Hemedan) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1589-01-01 «Cığalazâde Sinan Paşa'nın Nihâvend'i alıp kale kurması »

**1590-03-21** kazanc — 1/1 nokta açık · kapatan (1): 0g 1590-03-21 «Ferhad Paşa Antlaşması — doğuda en geniş sınırlar»
  - Kirmanşah (m:Hemedan) · MADDESIZ · açık:ABC · G · en yakın anan: 31856g 1503-01-01 «Murad Bey'in Hemedan yenilgisi: Irâk-ı Acem ve Fars Saf»

**1603-01-01** kayip — 1/2 nokta açık · kapatan (1): 0g 1603-01-01 «Luristan'ın Safevîlere kesin olarak geçmesi»
  - Nihâvend (m:Hemedan) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1603-01-01 «Luristan'ın Safevîlere kesin olarak geçmesi»

**1603-10-21** kayip — 11/14 nokta açık · kapatan (1): 0g 1603-10-21 «Şah Abbas'ın karşı taarruzu — Tebriz'in kaybı»
  - Culfa (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: 44124g 1724-08-11 «Nahçıvan'ın alınışı»
  - Kirmanşah (m:Hemedan) · MADDESIZ · açık:ABC · G · en yakın anan: 36818g 1503-01-01 «Murad Bey'in Hemedan yenilgisi: Irâk-ı Acem ve Fars Saf»
  - Merend (m:-) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1603-10-21 «Şah Abbas'ın karşı taarruzu — Tebriz'in kaybı»
  - Merâga (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: 44475g 1725-07-28 «Tebriz'in zaptı — Azerbaycan'ın ele geçirilmesi»
  - Mîyandoab (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Nahçıvan (m:Revan) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1603-10-21 «Şah Abbas'ın karşı taarruzu — Tebriz'in kaybı»
  - Ordubad (m:Nahçıvan) · MADDESIZ · açık:AB- · G · en yakın anan: 6502g 1586-01-01 «Nahçıvan ve Ordubad'ın Osmanlı idaresine girmesi»
  - Rāzhān (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Selmâs (Dilman) (m:Van) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1603-10-21 «Şah Abbas'ın karşı taarruzu — Tebriz'in kaybı»
  - Sero (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Urmiye (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: 43901g 1724-01-01 «Urmiye ve Selmâs'ın Osmanlı idaresine geçişi»

**1604-06-08** kayip — 2/3 nokta açık · kapatan (1): 0g 1604-06-08 «Revan'ın Şah Abbas'a kaybı»
  - Eçmiyadzin (m:Erzurum) · MADDESIZ · açık:AB- · G · en yakın anan: 8872g 1628-09-22 «Abaza Mehmed Paşa'nın Erzurum merkezli isyanının bastır»
  - Gümrü (Aleksandropol) (m:Erzurum) · MADDESIZ · açık:AB- · G · en yakın anan: 8872g 1628-09-22 «Abaza Mehmed Paşa'nın Erzurum merkezli isyanının bastır»

**1606-01-01** kayip — 2/4 nokta açık · kapatan (1): 0g 1606-01-01 «Tiflis ve Gence'nin kaybı»
  - Berde (Karabağ) (m:-) · ESLESTIRME · açık:ABC · - · en yakın anan: 0g 1606-01-01 «Tiflis ve Gence'nin kaybı»
  - Gence (m:Revan) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1606-01-01 «Tiflis ve Gence'nin kaybı»

**1607-01-01** kayip — 3/11 nokta açık · kapatan (1): 0g 1607-01-01 «Şirvan'ın kaybı — Şamahı, Bakü ve Derbend»
  - Kuba (m:Derbend) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1607-01-01 «Şirvan'ın kaybı — Şamahı, Bakü ve Derbend»
  - Tarki (Tarku) (m:Şeki (Nuha)) · MADDESIZ · açık:ABC · - · en yakın anan: 42248g 1722-09-03 «Rus kuvvetlerinin Derbend'i alması: I. Petro'nun Hazar »
  - Şeki (Nuha) (m:-) · MADDESIZ · açık:AB- · - · en yakın anan: 75536g 1813-10-24 «Gülistan Antlaşması: Kafkasya'daki hanlıklar Rusya'ya b»

**1623-11-28** kayip — 6/20 nokta açık · kapatan (1): 0g 1623-11-28 «Bağdat'ın Safevîlere kaybı»
  - Erbil (m:Şehrizor) · MADDESIZ · açık:ABC · G · en yakın anan: 2300g 1630-03-16 «Hüsrev Paşa'nın Şehrizor'da Gülanber Kalesi'ni yeniden »
  - Halepçe (m:Şehrizor) · MADDESIZ · açık:ABC · G · en yakın anan: 2300g 1630-03-16 «Hüsrev Paşa'nın Şehrizor'da Gülanber Kalesi'ni yeniden »
  - Kasr-ı Şîrîn (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 4508g 1636-04-01 «Revan'ın Safevîlere kaybı»
  - Kifri (m:Şehrizor) · MADDESIZ · açık:ABC · G · en yakın anan: 2300g 1630-03-16 «Hüsrev Paşa'nın Şehrizor'da Gülanber Kalesi'ni yeniden »
  - Tuz Hurmatu (m:Şehrizor) · MADDESIZ · açık:ABC · G · en yakın anan: 2300g 1630-03-16 «Hüsrev Paşa'nın Şehrizor'da Gülanber Kalesi'ni yeniden »
  - Şehrizor (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 2300g 1630-03-16 «Hüsrev Paşa'nın Şehrizor'da Gülanber Kalesi'ni yeniden »

**1624-01-01** kayip — 1/2 nokta açık · kapatan (1): 0g 1624-01-01 «Musul ve Kerkük'ün Safevî eline geçmesi — Bağdat'ın düş»
  - Kerkük (m:Şehrizor) · ESLESTIRME · açık:A-- · T · en yakın anan: 0g 1624-01-01 «Musul ve Kerkük'ün Safevî eline geçmesi — Bağdat'ın düş»

**1625-01-01** kazanc — 1/2 nokta açık · kapatan (1): 0g 1625-01-01 «Musul'un Safevîlerden kurtarılması — Hâfız Ahmed Paşa'n»
  - Kerkük (m:Şehrizor) · ESLESTIRME · açık:AB- · - · en yakın anan: 0g 1625-01-01 «Musul'un Safevîlerden kurtarılması — Hâfız Ahmed Paşa'n»

**1635-10-22** kayip — 1/2 nokta açık · kapatan (1): 0g 1635-10-22 «Moha'nın tahliyesi»
  - Seyûn (Sayvan) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK

**1638-12-24** kazanc — 3/17 nokta açık · kapatan (3): 0g 1638-12-24 «Kemankeş Kara Mustafa Paşa sadrazam oldu — mali ıslahat»; 0g 1638-12-24 «Bağdat'ın geri fethi»; 27g 1639-01-20 «I. Mustafa on beş yıllık unutuluşun ardından öldü»
  - Halepçe (m:Şehrizor) · MADDESIZ · açık:ABC · G · en yakın anan: 3205g 1630-03-16 «Hüsrev Paşa'nın Şehrizor'da Gülanber Kalesi'ni yeniden »
  - Kifri (m:Şehrizor) · MADDESIZ · açık:ABC · G · en yakın anan: 3205g 1630-03-16 «Hüsrev Paşa'nın Şehrizor'da Gülanber Kalesi'ni yeniden »
  - Tuz Hurmatu (m:Şehrizor) · MADDESIZ · açık:ABC · G · en yakın anan: 3205g 1630-03-16 «Hüsrev Paşa'nın Şehrizor'da Gülanber Kalesi'ni yeniden »

**1638-12-25** kazanc — 1/1 nokta açık · kapatan (3): 1g 1638-12-24 «Kemankeş Kara Mustafa Paşa sadrazam oldu — mali ıslahat»; 1g 1638-12-24 «Bağdat'ın geri fethi»; 26g 1639-01-20 «I. Mustafa on beş yıllık unutuluşun ardından öldü»
  - Erbil (m:Şehrizor) · MADDESIZ · açık:ABC · - · en yakın anan: 3206g 1630-03-16 «Hüsrev Paşa'nın Şehrizor'da Gülanber Kalesi'ni yeniden »

**1639-05-17** kayip — 3/3 nokta açık · kapatan (1): 0g 1639-05-17 «Kasr-ı Şirin Antlaşması»
  - Kotur (m:Van) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1639-05-17 «Kasr-ı Şirin Antlaşması»
  - Mâku (m:Van) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1639-05-17 «Kasr-ı Şirin Antlaşması»
  - Şeyh Salû-yi Ulyâ (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK

**1656-07-13** kayip — 3/3 nokta açık · kapatan (1): 0g 1656-07-13 «Çanakkale bozgunu ve Bozcaada ile Limni'nin kaybı»
  - Bozcaada (m:Edirne) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1656-07-13 «Çanakkale bozgunu ve Bozcaada ile Limni'nin kaybı»
  - Limni (m:Selanik) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1656-07-13 «Çanakkale bozgunu ve Bozcaada ile Limni'nin kaybı»
  - Semadirek (m:Edirne) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1656-07-13 «Çanakkale bozgunu ve Bozcaada ile Limni'nin kaybı»

**1657-11-15** kazanc — 1/2 nokta açık · kapatan (1): 0g 1657-11-15 «Limni ve Semadirek'in geri alınışı»
  - Semadirek (m:Edirne) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1657-11-15 «Limni ve Semadirek'in geri alınışı»

**1658-08-30** kazanc — 1/1 nokta açık · kapatan (1): 3g 1658-08-27 «Yanova'nın (Ineu) fethi ve Erdel seferi»
  - Lugos (Lugoj) (m:-) · MADDESIZ · açık:AB- · - · en yakın anan: 13537g 1695-09-22 «Lugoş zaferi — II. Him seferi»

**1663-09-24** kazanc — 1/2 nokta açık · kapatan (1): 0g 1663-09-24 «Uyvar'ın fethi»
  - Nitra (Nyitra) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK

**1670-01-01** kayip — 4/6 nokta açık · kapatan (2): 0g 1670-01-01 «Lahsa'nın Benî Hâlid Emirliği'ne kaybı»; 0g 1670-01-01 «Cetin'in yeniden Osmanlı kalesi olması»
  - Cübeyl (m:Basra) · MADDESIZ · açık:ABC · T · en yakın anan: 38821g 1776-04-16 «Basra'nın İran işgaline uğraması»
  - Katar Yarımadası (iç, dolgu) (m:-) · MADDESIZ · açık:AB- · - · en yakın anan: 41272g 1783-01-01 «Âl-i Halîfe'nin Bahreyn'i fethi — bugüne kadar süren ha»
  - Katîf (m:Basra) · MADDESIZ · açık:AB- · T · en yakın anan: 38821g 1776-04-16 «Basra'nın İran işgaline uğraması»
  - Ukayr (Uceyr) (m:Basra) · MADDESIZ · açık:AB- · T · en yakın anan: 38821g 1776-04-16 «Basra'nın İran işgaline uğraması»

**1671-01-01** kayip — 1/34 nokta açık · kapatan (1): 0g 1671-01-01 «Cezayir'de dayı idaresinin başlaması»
  - Mersin (m:Adana) · MADDESIZ · açık:ABC · - · en yakın anan: 56378g 1516-08-24 «Ramazanoğulları Beyliği'nin Osmanlı'ya bağlanması»

**1672-10-18** kazanc — 2/2 nokta açık · kapatan (1): 0g 1672-10-18 «Bucaş Antlaşması — en geniş sınırlar»
  - Braslav (Bratslav) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 4958g 1686-05-16 «Ebedî Barış: Polonya Kiev'i ve sol yaka Ukrayna'yı Rusy»
  - Vinnitsa (Vinnytsia) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK

**1682-09-16** kazanc — 6/6 nokta açık · kapatan (1): 0g 1682-09-16 «Tököli İmre'ye Orta Macar krallığı beratının verilmesi»
  - Eperjes (Prešov) (m:Kassa (Košice)) · MADDESIZ · açık:ABC · G · en yakın anan: 1125g 1685-10-15 «Tököli'nin Varad'da tutuklanması — Orta Macar Krallığı »
  - Fülek (Fiľakovo) (m:Kassa (Košice)) · MADDESIZ · açık:AB- · G · en yakın anan: 1125g 1685-10-15 «Tököli'nin Varad'da tutuklanması — Orta Macar Krallığı »
  - Kassa (Košice) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 1125g 1685-10-15 «Tököli'nin Varad'da tutuklanması — Orta Macar Krallığı »
  - Munkács (Mukacheve) (m:Kassa (Košice)) · MADDESIZ · açık:ABC · G · en yakın anan: 1125g 1685-10-15 «Tököli'nin Varad'da tutuklanması — Orta Macar Krallığı »
  - Tokaj (m:Kassa (Košice)) · MADDESIZ · açık:ABC · G · en yakın anan: 1125g 1685-10-15 «Tököli'nin Varad'da tutuklanması — Orta Macar Krallığı »
  - Ungvár (Uzhhorod) (m:Kassa (Košice)) · MADDESIZ · açık:ABC · G · en yakın anan: 1125g 1685-10-15 «Tököli'nin Varad'da tutuklanması — Orta Macar Krallığı »

**1684-09-29** kayip — 1/2 nokta açık · kapatan (1): 0g 1684-09-29 «Preveze ve Vonitsa'nın Venedik'e kaybı — Epir kıyısının»
  - Vonitsa (m:Yanya) · ESLESTIRME · açık:A-- · TG · en yakın anan: 0g 1684-09-29 «Preveze ve Vonitsa'nın Venedik'e kaybı — Epir kıyısının»

**1685-08-19** kayip — 1/2 nokta açık · kapatan (2): 0g 1685-08-19 «Uyvar'ın kaybı»; 8g 1685-08-11 «Koron'un Venedik'e kaybı»
  - Nitra (Nyitra) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK

**1686-08-30** kayip — 4/5 nokta açık · kapatan (2): 0g 1686-08-30 «Anabolu'nun (Nauplion) Venedik'e kaybı — Mora Savaşı'nı»; 3g 1686-09-02 «Budin'in kaybı — 145 yıllık Macar başkenti»
  - Damala (Troizen) (m:Mora (Tripoliçe)) · MADDESIZ · açık:AB- · TG · en yakın anan: 10531g 1715-07-01 «Mora'nın geri alınışı»
  - Ermiyoni (Hermione) (m:Mora (Tripoliçe)) · MADDESIZ · açık:AB- · TG · en yakın anan: 10531g 1715-07-01 «Mora'nın geri alınışı»
  - Kranidi (m:Mora (Tripoliçe)) · MADDESIZ · açık:AB- · TG · en yakın anan: 10531g 1715-07-01 «Mora'nın geri alınışı»
  - Methana (m:Mora (Tripoliçe)) · MADDESIZ · açık:AB- · TG · en yakın anan: 10531g 1715-07-01 «Mora'nın geri alınışı»

**1686-09-30** kayip — 1/1 nokta açık · kapatan (3): 14g 1686-10-14 «Peçuy'un kaybı»; 23g 1686-10-23 «Segedin'in kaybı»; 28g 1686-09-02 «Budin'in kaybı — 145 yıllık Macar başkenti»
  - Sin (Sinj) (m:Klis) · MADDESIZ · açık:ABC · - · en yakın anan: 14062g 1648-03-31 «Klis'in Venedik'e kaybı»

**1687-08-01** kayip — 2/2 nokta açık · kapatan (2): 0g 1687-08-01 «IV. Mehmed avdan vazgeçti — hal'inin arifesindeki son ç»; 11g 1687-08-12 «İkinci Mohaç (Harşan) bozgunu — Erdel'in ve Mohaç'ın ka»
  - Elafonisos (Cervi) (m:Mora (Tripoliçe)) · MADDESIZ · açık:ABC · G · en yakın anan: 10195g 1715-07-01 «Mora'nın geri alınışı»
  - Mora (Tripoliçe) (m:-) · KAYMA · açık:ABC · G · en yakın anan: 31g 1687-07-01 «Balyabadra'nın (Patras) kaybı — Mora'nın kuzey kapısı»

**1687-08-06** kayip — 1/1 nokta açık · kapatan (2): 5g 1687-08-01 «IV. Mehmed avdan vazgeçti — hal'inin arifesindeki son ç»; 6g 1687-08-12 «İkinci Mohaç (Harşan) bozgunu — Erdel'in ve Mohaç'ın ka»
  - İnebahtı (m:Mora (Tripoliçe)) · MADDESIZ · açık:ABC · - · en yakın anan: 10190g 1715-07-01 «Mora'nın geri alınışı»

**1687-08-12** kayip — 4/5 nokta açık · kapatan (2): 0g 1687-08-12 «İkinci Mohaç (Harşan) bozgunu — Erdel'in ve Mohaç'ın ka»; 11g 1687-08-01 «IV. Mehmed avdan vazgeçti — hal'inin arifesindeki son ç»
  - Brassó (Braşov) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 48000g 1556-03-12 «Habsburg idaresi Erdel'de sona erdi: Erdel yeniden Osma»
  - Erdel (Kaloşvar) (m:-) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1687-08-12 «İkinci Mohaç (Harşan) bozgunu — Erdel'in ve Mohaç'ın ka»
  - Erdel Belgradı (Gyulafehérvár) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 48000g 1556-03-12 «Habsburg idaresi Erdel'de sona erdi: Erdel yeniden Osma»
  - Segesvár (Sighişoara) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 48000g 1556-03-12 «Habsburg idaresi Erdel'de sona erdi: Erdel yeniden Osma»

**1687-09-06** kayip — 2/2 nokta açık · kapatan (2): 20g 1687-09-26 «Atina'nın kaybı ve Parthenon patlaması»; 25g 1687-08-12 «İkinci Mohaç (Harşan) bozgunu — Erdel'in ve Mohaç'ın ka»
  - Baç (Bács) (m:Budin) · MADDESIZ · açık:AB- · - · en yakın anan: 369g 1686-09-02 «Budin'in kaybı — 145 yıllık Macar başkenti»
  - Varadin (Petrovaradin) (m:Budin) · MADDESIZ · açık:AB- · - · en yakın anan: 369g 1686-09-02 «Budin'in kaybı — 145 yıllık Macar başkenti»

**1687-09-29** kayip — 1/1 nokta açık · kapatan (1): 3g 1687-09-26 «Atina'nın kaybı ve Parthenon patlaması»
  - Ösek (Osijek) (m:Budin) · KAYMA · açık:ABC · - · en yakın anan: 233g 1688-05-19 «İstolni Belgrad'ın kaybı — Macar krallarının taç şehri»

**1687-09-30** kayip — 1/1 nokta açık · kapatan (1): 4g 1687-09-26 «Atina'nın kaybı ve Parthenon patlaması»
  - Herseknovi (Herceg Novi) (m:Mostar) · MADDESIZ · açık:ABC · - · en yakın anan: 43191g 1806-01-01 «Kvarner adalarının Napolyon İtalya Krallığı'na, Boka Ko»

**1688-01-01** kayip — 1/1 nokta açık · kapatan (2): 15g 1687-12-17 «Eğri'nin kaybı»; 16g 1688-01-17 «Munkács (Mukacheve) kalesinin üç yıllık kuşatma sonrası»
  - Orsova (Eski Orsova) (m:-) · MADDESIZ · açık:ABC · T · en yakın anan: 561g 1689-07-15 «Orsova'nın Thököly ve Osmanlı kuvvetlerince geri alınış»

**1688-06-01** kayip — 1/1 nokta açık · kapatan (1): 13g 1688-05-19 «İstolni Belgrad'ın kaybı — Macar krallarının taç şehri»
  - Lugos (Lugoj) (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: 2669g 1695-09-22 «Lugoş zaferi — II. Him seferi»

**1689-01-01** kayip — 1/2 nokta açık · kapatan (2): 0g 1689-01-01 «Mevlây İsmâil'in el-Arâiş'i İspanyollardan geri alışı»; 0g 1689-01-01 «Lika ve Krbava'nın kaybı — Udbina ve Gospić Habsburg sı»
  - Gospić (m:-) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1689-01-01 «Lika ve Krbava'nın kaybı — Udbina ve Gospić Habsburg sı»

**1689-09-24** kayip — 4/5 nokta açık · kapatan (3): 0g 1689-09-24 «Niş ve Vidin'in kaybı — en kritik yıl»; 7g 1689-10-01 «Vidin'in Avusturya'ya düşüşü — Ekim 1689»; 28g 1689-08-27 «Nerçinsk Antlaşması — ilk Rus–Mançu sınırı»
  - Kragujevac (m:Belgrad) · KAYMA · açık:AB- · TG · en yakın anan: 350g 1690-09-09 «Niş, Vidin ve Belgrad geri alındı»
  - Yagodina (Jagodina) (m:-) · MADDESIZ · açık:AB- · TG · en yakın anan: YOK
  - Çaçak (m:Belgrad) · KAYMA · açık:AB- · TG · en yakın anan: 350g 1690-09-09 «Niş, Vidin ve Belgrad geri alındı»
  - Şehirköy (Pirot) (m:Sofya) · KAYMA · açık:AB- · TG · en yakın anan: 350g 1690-09-09 «Niş, Vidin ve Belgrad geri alındı»

**1690-09-09** kazanc — 7/8 nokta açık · kapatan (1): 0g 1690-09-09 «Niş, Vidin ve Belgrad geri alındı»
  - Belgrad (m:-) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1690-09-09 «Niş, Vidin ve Belgrad geri alındı»
  - Kragujevac (m:Belgrad) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1690-09-09 «Niş, Vidin ve Belgrad geri alındı»
  - Semendire (m:Belgrad) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1690-09-09 «Niş, Vidin ve Belgrad geri alındı»
  - Vidin (m:Sofya) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1690-09-09 «Niş, Vidin ve Belgrad geri alındı»
  - Yagodina (Jagodina) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Çaçak (m:Belgrad) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1690-09-09 «Niş, Vidin ve Belgrad geri alındı»
  - Şehirköy (Pirot) (m:Sofya) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1690-09-09 «Niş, Vidin ve Belgrad geri alındı»

**1695-09-01** kazanc — 1/1 nokta açık · kapatan (1): 21g 1695-09-22 «Lugoş zaferi — II. Him seferi»
  - Lugos (Lugoj) (m:-) · ESLESTIRME · açık:A-- · - · en yakın anan: 21g 1695-09-22 «Lugoş zaferi — II. Him seferi»

**1699-01-26** kayip — 13/13 nokta açık · kapatan (1): 0g 1699-01-26 «Karlofça Antlaşması — ilk büyük toprak kaybı»
  - Bar (Podolya) (m:Kamaniçe) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1699-01-26 «Karlofça Antlaşması — ilk büyük toprak kaybı»
  - Braslav (Bratslav) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 4638g 1686-05-16 «Ebedî Barış: Polonya Kiev'i ve sol yaka Ukrayna'yı Rusy»
  - Gyula (Göle) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 48360g 1566-09-01 «Gyula (Göle) Kalesi'nin teslimi — Pertev Paşa'nın Tımış»
  - Jasenovaç (Jasenovac) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Kamaniçe (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 9596g 1672-10-18 «Bucaş Antlaşması — en geniş sınırlar»
  - Kostayniçe (Kostajnica) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 41612g 1813-01-01 «Avusturya'nın İlirya Eyaletleri'ni ve Dalmaçya'yı geri »
  - Meciboj (Mejibuji) (m:Kamaniçe) · MADDESIZ · açık:ABC · G · en yakın anan: 9648g 1672-08-27 «Kamaniçe'nin fethi ve Podolya Eyaleti'nin kurulması»
  - Nadin (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 39086g 1806-02-01 «Dalmaçya'nın Fransız idaresine geçişi — Pojun (Bratisla»
  - Uman (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 9156g 1674-01-01 «Kara Mustafa Paşa Uman'ı Lehistan'dan teslim aldı»
  - Vinnitsa (Vinnytsia) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Vrana (Urana) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 39086g 1806-02-01 «Dalmaçya'nın Fransız idaresine geçişi — Pojun (Bratisla»
  - Yazlofça (Yazlovets) (m:Kamaniçe) · MADDESIZ · açık:ABC · G · en yakın anan: 9648g 1672-08-27 «Kamaniçe'nin fethi ve Podolya Eyaleti'nin kurulması»
  - Çehrin (Çigirin) (m:Kamaniçe) · MADDESIZ · açık:ABC · G · en yakın anan: 6589g 1681-01-11 «Bahçesaray Antlaşması — Rusya ile ilk resmî barış»

**1703-01-01** kazanc — 1/1 nokta açık · kapatan (1): 0g 1703-01-01 «Yenikale'nin inşası — Kerç Boğazı'nın kilitlenmesi»
  - Yenikale (m:Kefe) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1703-01-01 «Yenikale'nin inşası — Kerç Boğazı'nın kilitlenmesi»

**1711-07-21** kazanc — 1/1 nokta açık · kapatan (5): 0g 1711-07-21 «Baltacı Mehmed Paşa ve Çariçe Katerina rivayeti»; 0g 1711-07-21 «Prut'ta 'kaçırılan fırsat' tartışması — iki görüş»; 0g 1711-07-21 «Prut Antlaşması — Azak ve Taygan'ın geri alınması»
  - Azak (m:Kefe) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1711-07-21 «Prut Antlaşması — Azak ve Taygan'ın geri alınması»

**1711-07-29** kayip — 11/25 nokta açık · kapatan (5): 0g 1711-07-29 «Trablusgarp'ta Karamanlı hanedanının kurulması»; 8g 1711-07-21 «Baltacı Mehmed Paşa ve Çariçe Katerina rivayeti»; 8g 1711-07-21 «Prut'ta 'kaçırılan fırsat' tartışması — iki görüş»
  - Beyzâ (Kirene) (m:Bingazi) · MADDESIZ · açık:ABC · G · en yakın anan: 52751g 1856-01-01 «Senûsiyye'nin çöl merkezi Cağbûb'un Osmanlı düzenine ba»
  - Bingazi (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 52751g 1856-01-01 «Senûsiyye'nin çöl merkezi Cağbûb'un Osmanlı düzenine ba»
  - Câlû (m:Bingazi) · MADDESIZ · açık:ABC · G · en yakın anan: 49151g 1577-01-01 «Fizan sancağının Trablusgarp'a bağlanışı — Murzuk ve Sa»
  - Derne (m:Bingazi) · MADDESIZ · açık:ABC · G · en yakın anan: 26370g 1639-05-17 «Kasr-ı Şirin Antlaşması»
  - Ecdâbiye (m:Bingazi) · MADDESIZ · açık:ABC · G · en yakın anan: 52751g 1856-01-01 «Senûsiyye'nin çöl merkezi Cağbûb'un Osmanlı düzenine ba»
  - Gât (m:Murzuk (Fizan)) · MADDESIZ · açık:ABC · G · en yakın anan: 49151g 1577-01-01 «Fizan sancağının Trablusgarp'a bağlanışı — Murzuk ve Sa»
  - Merc (m:Bingazi) · MADDESIZ · açık:ABC · G · en yakın anan: 52751g 1856-01-01 «Senûsiyye'nin çöl merkezi Cağbûb'un Osmanlı düzenine ba»
  - Murzuk (Fizan) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 49151g 1577-01-01 «Fizan sancağının Trablusgarp'a bağlanışı — Murzuk ve Sa»
  - Sebha (m:Murzuk (Fizan)) · MADDESIZ · açık:ABC · G · en yakın anan: 49151g 1577-01-01 «Fizan sancağının Trablusgarp'a bağlanışı — Murzuk ve Sa»
  - Tobruk (m:Bingazi) · MADDESIZ · açık:ABC · G · en yakın anan: 52751g 1856-01-01 «Senûsiyye'nin çöl merkezi Cağbûb'un Osmanlı düzenine ba»
  - Ubârî (m:Murzuk (Fizan)) · MADDESIZ · açık:ABC · G · en yakın anan: 49151g 1577-01-01 «Fizan sancağının Trablusgarp'a bağlanışı — Murzuk ve Sa»

**1715-09-07** kazanc — 1/2 nokta açık · kapatan (2): 0g 1715-09-07 «Çuha Adası'nın (Kythira) alınışı»; 22g 1715-08-16 «Koron'un teslimi — Mora seferinin tamamlanması»
  - Ayamavra (Lefkada) (m:Yanya) · ESLESTIRME · açık:ABC · G · en yakın anan: 22g 1715-08-16 «Koron'un teslimi — Mora seferinin tamamlanması»

**1716-01-01** kayip — 1/1 nokta açık · kapatan (1): 0g 1716-01-01 «İrtiş-Om kavşağında Rus Omsk kalesi kuruldu»
  - Lugos (Lugoj) (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: 7405g 1695-09-22 «Lugoş zaferi — II. Him seferi»

**1717-01-01** kayip — 1/1 nokta açık · kapatan (1): 0g 1717-01-01 «Ummanlılar'ın Bahreyn'i istilâsı — Safevî hâkimiyetinin»
  - Orsova (Eski Orsova) (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: 7797g 1738-05-08 «Orsova palankasının Osmanlı'ya geçişi — muhafızın Adaka»

**1717-08-18** kayip — 1/5 nokta açık · kapatan (1): 0g 1717-08-18 «Belgrad'ın ikinci kez kaybı — Prens Eugen'in kuşatması»
  - Yagodina (Jagodina) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK

**1718-07-21** kayip — 8/8 nokta açık · kapatan (1): 0g 1718-07-21 «Pasarofça Antlaşması — Mora kazanıldı, Belgrad ve Banat»
  - Ayamavra (Lefkada) (m:Yanya) · MADDESIZ · açık:ABC · G · en yakın anan: 1070g 1715-08-16 «Koron'un teslimi — Mora seferinin tamamlanması»
  - Bosna Brod'u (Bosanski Brod) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Bosna Dubiçası (Bosanska Dubica) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 25604g 1788-08-26 «Dubica'nın Avusturya'ya düşüşü»
  - Krayova (Craiova) (m:Bükreş) · MADDESIZ · açık:ABC · G · en yakın anan: 26036g 1789-11-01 «Avusturya ordusunun (Coburg) Bükreş'i işgali»
  - Rimnik (Râmnicu Vâlcea) (m:Bükreş) · MADDESIZ · açık:ABC · G · en yakın anan: 25852g 1789-05-01 «Kalas bozgunu»
  - Turnu Severin (m:Bükreş) · MADDESIZ · açık:AB- · G · en yakın anan: 26036g 1789-11-01 «Avusturya ordusunun (Coburg) Bükreş'i işgali»
  - Tırgu Jiu (m:Bükreş) · MADDESIZ · açık:ABC · G · en yakın anan: 26036g 1789-11-01 «Avusturya ordusunun (Coburg) Bükreş'i işgali»
  - Çuha Adası (Kythira) (m:Mora (Tripoliçe)) · MADDESIZ · açık:ABC · G · en yakın anan: 1048g 1715-09-07 «Çuha Adası'nın (Kythira) alınışı»

**1723-10-01** kazanc — 1/2 nokta açık · kapatan (3): 0g 1723-10-01 «Kirmanşah'ın alınışı — Zağros kapısı»; 8g 1723-09-23 «Petersburg Antlaşması — Tahmasb'ın elçisi Hazar kıyısı »; 8g 1723-09-23 «Petersburg Antlaşması: Derbend, Bakü ve Hazar'ın güney »
  - Kasr-ı Şîrîn (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: 2507g 1730-08-12 «Nâdir'in taarruzu: Tebriz, Nahçıvan, Hemedan, Kirmanşah»

**1723-11-10** kazanc — 2/3 nokta açık · kapatan (1): 0g 1723-11-10 «Erdelan'ın merkezi Senendec'in (Sine) teslimi»
  - Merîvan (m:-) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1723-11-10 «Erdelan'ın merkezi Senendec'in (Sine) teslimi»
  - Sakkız (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK

**1724-01-01** kazanc — 1/2 nokta açık · kapatan (1): 0g 1724-01-01 «Urmiye ve Selmâs'ın Osmanlı idaresine geçişi»
  - Selmâs (Dilman) (m:Van) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1724-01-01 «Urmiye ve Selmâs'ın Osmanlı idaresine geçişi»

**1724-08-11** kazanc — 1/3 nokta açık · kapatan (2): 0g 1724-08-11 «Nahçıvan'ın alınışı»; 20g 1724-08-31 «Hemedan'ın fethi»
  - Culfa (m:-) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1724-08-11 «Nahçıvan'ın alınışı»

**1724-09-28** kazanc — 1/1 nokta açık · kapatan (3): 5g 1724-10-03 «Revan'ın yeniden fethi»; 17g 1724-09-11 «Salyan'da Rus taburunun yok edilmesi — Tahmasb'ın birli»; 28g 1724-08-31 «Hemedan'ın fethi»
  - Hoy (m:Tebriz) · KAYMA · açık:ABC · - · en yakın anan: 303g 1725-07-28 «Tebriz'in zaptı — Azerbaycan'ın ele geçirilmesi»

**1724-10-03** kazanc — 3/4 nokta açık · kapatan (2): 0g 1724-10-03 «Revan'ın yeniden fethi»; 22g 1724-09-11 «Salyan'da Rus taburunun yok edilmesi — Tahmasb'ın birli»
  - Eçmiyadzin (m:Erzurum) · MADDESIZ · açık:AB- · G · en yakın anan: 35074g 1628-09-22 «Abaza Mehmed Paşa'nın Erzurum merkezli isyanının bastır»
  - Gümrü (Aleksandropol) (m:Erzurum) · MADDESIZ · açık:AB- · G · en yakın anan: 35074g 1628-09-22 «Abaza Mehmed Paşa'nın Erzurum merkezli isyanının bastır»
  - Mâku (m:Van) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1724-10-03 «Revan'ın yeniden fethi»

**1725-07-28** kazanc — 3/5 nokta açık · kapatan (1): 0g 1725-07-28 «Tebriz'in zaptı — Azerbaycan'ın ele geçirilmesi»
  - Merend (m:-) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1725-07-28 «Tebriz'in zaptı — Azerbaycan'ın ele geçirilmesi»
  - Merâga (m:-) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1725-07-28 «Tebriz'in zaptı — Azerbaycan'ın ele geçirilmesi»
  - Mîyandoab (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK

**1725-09-09** kazanc — 3/4 nokta açık · kapatan (2): 0g 1725-09-09 «Erdebil'in alınışı»; 3g 1725-09-12 «Gence'nin fethi — Kafkasya seferinin sonu»
  - Halhâl (m:-) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1725-09-09 «Erdebil'in alınışı»
  - Miyâne (m:Tebriz) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1725-09-09 «Erdebil'in alınışı»
  - Sarâb (m:Tebriz) · KAYMA · açık:AB- · G · en yakın anan: 43g 1725-07-28 «Tebriz'in zaptı — Azerbaycan'ın ele geçirilmesi»

**1725-09-12** kazanc — 4/5 nokta açık · kapatan (2): 0g 1725-09-12 «Gence'nin fethi — Kafkasya seferinin sonu»; 3g 1725-09-09 «Erdebil'in alınışı»
  - Berde (Karabağ) (m:-) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1725-09-12 «Gence'nin fethi — Kafkasya seferinin sonu»
  - Ereş (m:Şamahı) · MADDESIZ · açık:AB- · G · en yakın anan: 773g 1723-08-01 «1723 İran Seferi: Şirvan ve Gürcistan'a giriş»
  - Kabala (m:Şamahı) · MADDESIZ · açık:AB- · G · en yakın anan: 773g 1723-08-01 «1723 İran Seferi: Şirvan ve Gürcistan'a giriş»
  - Şeki (Nuha) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: 32183g 1813-10-24 «Gülistan Antlaşması: Kafkasya'daki hanlıklar Rusya'ya b»

**1730-08-12** kayip — 15/18 nokta açık · kapatan (1): 0g 1730-08-12 «Nâdir'in taarruzu: Tebriz, Nahçıvan, Hemedan, Kirmanşah»
  - Ahar (Karadağ) (m:Tebriz) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1730-08-12 «Nâdir'in taarruzu: Tebriz, Nahçıvan, Hemedan, Kirmanşah»
  - Culfa (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 2192g 1724-08-11 «Nahçıvan'ın alınışı»
  - Erdebil (m:-) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1730-08-12 «Nâdir'in taarruzu: Tebriz, Nahçıvan, Hemedan, Kirmanşah»
  - Halhâl (m:-) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1730-08-12 «Nâdir'in taarruzu: Tebriz, Nahçıvan, Hemedan, Kirmanşah»
  - Hoy (m:Tebriz) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1730-08-12 «Nâdir'in taarruzu: Tebriz, Nahçıvan, Hemedan, Kirmanşah»
  - Kasr-ı Şîrîn (m:-) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1730-08-12 «Nâdir'in taarruzu: Tebriz, Nahçıvan, Hemedan, Kirmanşah»
  - Merend (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 1841g 1725-07-28 «Tebriz'in zaptı — Azerbaycan'ın ele geçirilmesi»
  - Merâga (m:-) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1730-08-12 «Nâdir'in taarruzu: Tebriz, Nahçıvan, Hemedan, Kirmanşah»
  - Miyâne (m:Tebriz) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1730-08-12 «Nâdir'in taarruzu: Tebriz, Nahçıvan, Hemedan, Kirmanşah»
  - Mîyandoab (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Ordubad (m:Nahçıvan) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1730-08-12 «Nâdir'in taarruzu: Tebriz, Nahçıvan, Hemedan, Kirmanşah»
  - Sarâb (m:Tebriz) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1730-08-12 «Nâdir'in taarruzu: Tebriz, Nahçıvan, Hemedan, Kirmanşah»
  - Selmâs (Dilman) (m:Van) · MADDESIZ · açık:ABC · G · en yakın anan: 2415g 1724-01-01 «Urmiye ve Selmâs'ın Osmanlı idaresine geçişi»
  - Tebriz (m:-) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1730-08-12 «Nâdir'in taarruzu: Tebriz, Nahçıvan, Hemedan, Kirmanşah»
  - Urmiye (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 460g 1731-11-15 «Hekimoğlu Ali Paşa'nın Tebriz'i geri alması»

**1732-01-08** kayip — 1/1 nokta açık · kapatan (4): 0g 1732-01-08 «Ahmed Paşa Antlaşması — Batı İran'ın büyük bölümünün ia»; 7g 1732-01-01 «Levnî'nin vefatı»; 7g 1732-01-01 «Reşt Antlaşması — Rusya Gîlân, Mâzenderân ve Esterâbâd'»
  - Tebriz (m:-) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1732-01-08 «Ahmed Paşa Antlaşması — Batı İran'ın büyük bölümünün ia»

**1732-01-10** kayip — 3/3 nokta açık · kapatan (4): 2g 1732-01-08 «Ahmed Paşa Antlaşması — Batı İran'ın büyük bölümünün ia»; 9g 1732-01-01 «Levnî'nin vefatı»; 9g 1732-01-01 «Reşt Antlaşması — Rusya Gîlân, Mâzenderân ve Esterâbâd'»
  - Merîvan (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: 2983g 1723-11-10 «Erdelan'ın merkezi Senendec'in (Sine) teslimi»
  - Sakkız (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: YOK
  - Senendec (Sine) (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: 2983g 1723-11-10 «Erdelan'ın merkezi Senendec'in (Sine) teslimi»

**1735-06-19** kayip — 5/7 nokta açık · kapatan (1): 0g 1735-06-19 «Baghavard (Arpaçay) bozgunu — Kafkasya'nın Nâdir Han'a »
  - Berde (Karabağ) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 3567g 1725-09-12 «Gence'nin fethi — Kafkasya seferinin sonu»
  - Ereş (m:Şamahı) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1735-06-19 «Baghavard (Arpaçay) bozgunu — Kafkasya'nın Nâdir Han'a »
  - Kabala (m:Şamahı) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1735-06-19 «Baghavard (Arpaçay) bozgunu — Kafkasya'nın Nâdir Han'a »
  - Şamahı (m:-) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1735-06-19 «Baghavard (Arpaçay) bozgunu — Kafkasya'nın Nâdir Han'a »
  - Şeki (Nuha) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 28616g 1813-10-24 «Gülistan Antlaşması: Kafkasya'daki hanlıklar Rusya'ya b»

**1735-08-12** kayip — 1/1 nokta açık · kapatan (1): 11g 1735-08-23 «Kutsal Haç kalesinin yıkılması — Rus sınırı Terek'e çek»
  - Tiflis (m:-) · KAYMA · açık:ABC · - · en yakın anan: 52g 1735-10-03 «Revan'ın Nâdir Han'a teslimi»

**1735-10-03** kayip — 3/4 nokta açık · kapatan (1): 0g 1735-10-03 «Revan'ın Nâdir Han'a teslimi»
  - Eçmiyadzin (m:Erzurum) · MADDESIZ · açık:AB- · G · en yakın anan: 31136g 1821-01-01 «Osmanlı-İran savaşı başladı — Kars ve Bayazıt'ın kaybı,»
  - Gümrü (Aleksandropol) (m:Erzurum) · MADDESIZ · açık:AB- · G · en yakın anan: 31136g 1821-01-01 «Osmanlı-İran savaşı başladı — Kars ve Bayazıt'ın kaybı,»
  - Mâku (m:Van) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1735-10-03 «Revan'ın Nâdir Han'a teslimi»

**1739-09-18** kazanc — 5/10 nokta açık · kapatan (3): 0g 1739-09-18 «Belgrad Antlaşması — Belgrad, Semendire ve kuzey Sırbis»; 15g 1739-10-03 «Niş Antlaşması — Rusya ile barış, Azak'ın tarafsızlaştı»; 21g 1739-08-28 «Stavuçani yenilgisi ve Hotin'in Ruslara teslimi (1736-1»
  - Krayova (Craiova) (m:Bükreş) · MADDESIZ · açık:ABC · G · en yakın anan: 18307g 1789-11-01 «Avusturya ordusunun (Coburg) Bükreş'i işgali»
  - Rimnik (Râmnicu Vâlcea) (m:Bükreş) · MADDESIZ · açık:ABC · G · en yakın anan: 18123g 1789-05-01 «Kalas bozgunu»
  - Turnu Severin (m:Bükreş) · MADDESIZ · açık:ABC · G · en yakın anan: 18307g 1789-11-01 «Avusturya ordusunun (Coburg) Bükreş'i işgali»
  - Tırgu Jiu (m:Bükreş) · MADDESIZ · açık:ABC · G · en yakın anan: 18307g 1789-11-01 «Avusturya ordusunun (Coburg) Bükreş'i işgali»
  - Yagodina (Jagodina) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK

**1739-09-28** kazanc — 2/2 nokta açık · kapatan (2): 5g 1739-10-03 «Niş Antlaşması — Rusya ile barış, Azak'ın tarafsızlaştı»; 10g 1739-09-18 «Belgrad Antlaşması — Belgrad, Semendire ve kuzey Sırbis»
  - Bosna Brod'u (Bosanski Brod) (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: YOK
  - Bosna Dubiçası (Bosanska Dubica) (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: 17865g 1788-08-26 «Dubica'nın Avusturya'ya düşüşü»

**1774-07-21** kayip — 16/22 nokta açık · kapatan (2): 0g 1774-07-21 «Küçük Kaynarca Antlaşması»; 26g 1774-06-25 «Kozluca Bozgunu — Küçük Kaynarca'ya giden yenilgi»
  - Anapa (m:Kefe) · MADDESIZ · açık:ABC · G · en yakın anan: 2356g 1781-01-01 «Anapa Kalesi'nin inşası — Kafkas savunma hattı»
  - Bozkır (Deşt-i Kıpçak) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 99489g 1502-03-01 «Altın Orda Hanlığı'nın yıkılışı ve Kırım'ın yükselişi»
  - Camboyluk bozkırı (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Kerç (m:Kefe) · MADDESIZ · açık:ABC · G · en yakın anan: 1118g 1771-06-29 «Arabat Kalesi'nin düşmesi; Kerç, Yenikale ve Taman'ın R»
  - Kuban (Yekaterinodar) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 1439g 1770-08-12 «Yedisan ve Bucak Nogaylarının Rus himayesine geçmesi»
  - Kuban Nogay bozkırı (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Kuban deltası bozkırı (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Kızıkermen (Gazi Kerman) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 90782g 1526-01-01 «Kızıkermen (Gazi Kerman) ve Dinyeper'in sağ kıyısının d»
  - Maykop (Çerkezya) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Soçi (Sâşe) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 23174g 1838-01-01 «Ruslar Çerkez kıyısında Soçi ve Tuapse limanlarını aldı»
  - Stavropol–Kuma bozkırı (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Taman (m:Kefe) · MADDESIZ · açık:ABC · G · en yakın anan: 1118g 1771-06-29 «Arabat Kalesi'nin düşmesi; Kerç, Yenikale ve Taman'ın R»
  - Tuapse (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 23174g 1838-01-01 «Ruslar Çerkez kıyısında Soçi ve Tuapse limanlarını aldı»
  - Yedisan bozkırı (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 1439g 1770-08-12 «Yedisan ve Bucak Nogaylarının Rus himayesine geçmesi»
  - Yediçkul bozkırı (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Yenikale (m:Kefe) · MADDESIZ · açık:ABC · G · en yakın anan: 1118g 1771-06-29 «Arabat Kalesi'nin düşmesi; Kerç, Yenikale ve Taman'ın R»

**1775-05-07** kayip — 2/2 nokta açık · kapatan (3): 0g 1775-05-07 «Bukovina'nın (Kuzey Boğdan) Avusturya'ya terki»; 8g 1775-04-29 «Mühendishâne-i Bahrî-i Hümâyun'un açılışı»; 25g 1775-06-01 «Esham sisteminin ihdası»
  - Suçava (Suceava) (m:Yaş) · MADDESIZ · açık:ABC · TG · en yakın anan: 6006g 1791-10-16 «Potemkin'in ölümü — Yaş görüşmelerinin Rus tarafında el»
  - Çernovitz (Çernivtsi) (m:Yaş) · MADDESIZ · açık:ABC · TG · en yakın anan: 424g 1776-07-04 «Bukovina sınır senedi imzalandı»

**1783-04-19** kayip — 11/11 nokta açık · kapatan (1): 0g 1783-04-19 «Kırım'ın Rusya'ya ilhakı»
  - Aluşta (m:Kefe) · MADDESIZ · açık:AB- · TG · en yakın anan: 112447g 1475-06-06 «Kırım'ın Osmanlı himayesine girişi»
  - Balaklava (Cembalo) (m:Kefe) · MADDESIZ · açık:AB- · TG · en yakın anan: 112447g 1475-06-06 «Kırım'ın Osmanlı himayesine girişi»
  - Kefe (m:-) · MADDESIZ · açık:AB- · TG · en yakın anan: 109895g 1482-06-01 «Taman yarımadasının katılışı»
  - Mankup (m:Kefe) · MADDESIZ · açık:AB- · TG · en yakın anan: 112447g 1475-06-06 «Kırım'ın Osmanlı himayesine girişi»
  - Maykop (Çerkezya) (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: YOK
  - Soçi (Sâşe) (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 19980g 1838-01-01 «Ruslar Çerkez kıyısında Soçi ve Tuapse limanlarını aldı»
  - Sudak (Suğdak) (m:Kefe) · MADDESIZ · açık:AB- · TG · en yakın anan: 112447g 1475-06-06 «Kırım'ın Osmanlı himayesine girişi»
  - Tuapse (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 19980g 1838-01-01 «Ruslar Çerkez kıyısında Soçi ve Tuapse limanlarını aldı»
  - Yalta (m:Kefe) · MADDESIZ · açık:AB- · TG · en yakın anan: 112447g 1475-06-06 «Kırım'ın Osmanlı himayesine girişi»
  - Yedisan bozkırı (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 4633g 1770-08-12 «Yedisan ve Bucak Nogaylarının Rus himayesine geçmesi»
  - İnkirman (Kalamita) (m:Mankup) · MADDESIZ · açık:AB- · TG · en yakın anan: YOK

**1790-04-16** kayip — 1/1 nokta açık · kapatan (2): 0g 1790-04-16 «Eski Hırsova'nın düşüşü — kış boyu süren muhasaranın so»; 17g 1790-03-30 «Serdâr-ı ekremin Şumnu ordugâhında vefatı — dört aylık »
  - Orsova (Eski Orsova) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 18870g 1738-08-17 «Adakale'nin Avusturya'dan alınışı»

**1791-08-04** kayip — 2/2 nokta açık · kapatan (8): 0g 1791-08-04 «Ziştovi Antlaşması — Avusturya cephesinin kapanması»; 4g 1791-08-08 «Kalas'ta Vâsıf Efendi ile Prens Repnin arasında mütarek»; 7g 1791-08-11 «Kalas (Galaç) Mütarekesi — Rusya ile sekiz aylık ateşke»
  - Cetin (Cetingrad) (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 580g 1790-01-01 «Cetin Kalesi'nin Avusturya'ca zaptı»
  - Drežnik (Drežnik Grad) (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 1311g 1788-01-01 «Drežnik'in Avusturya'ca zaptı — Dubica Savaşı'nın batı »

**1792-01-09** kayip — 1/2 nokta açık · kapatan (5): 1g 1792-01-10 «Yaş Antlaşması — Kırım'ın kesin kaybı ve Turla sınırı»; 2g 1792-01-07 «Yaş'ta on dördüncü oturum — Rusya'nın tazminat talebind»; 8g 1792-01-01 «Çin–Nepal antlaşması — Himalaya sınırı belirsiz bırakıl»
  - Yedisan bozkırı (m:-) · MADDESIZ · açık:AB- · T · en yakın anan: 7820g 1770-08-12 «Yedisan ve Bucak Nogaylarının Rus himayesine geçmesi»

**1792-09-12** kazanc — 2/2 nokta açık · kapatan (1): 10g 1792-09-22 «Fransa'da Birinci Cumhuriyet'in ilânı — krallığın sonu»
  - Mersa'l-Kebîr (m:Oran) · KAYMA · açık:ABC · - · en yakın anan: 213g 1792-02-12 «Vehrân'ın (Oran) İspanyollarca boşaltılması ve Cezayir'»
  - Oran (m:Cezayir) · KAYMA · açık:ABC · - · en yakın anan: 213g 1792-02-12 «Vehrân'ın (Oran) İspanyollarca boşaltılması ve Cezayir'»

**1798-10-23** kazanc — 2/3 nokta açık · kapatan (1): 0g 1798-10-23 «Preveze'nin Fransızlardan alınışı — Nikopolis Muharebes»
  - Butrint (Butrinto) (m:Yanya) · MADDESIZ · açık:AB- · G · en yakın anan: 7799g 1820-03-01 «Tepedelenli Ali Paşa'nın azli ve Yanya kuşatmasının baş»
  - Vonitsa (m:Yanya) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1798-10-23 «Preveze'nin Fransızlardan alınışı — Nikopolis Muharebes»

**1801-01-01** kayip — 1/2 nokta açık · kapatan (1): 0g 1801-01-01 «Tâif çevresi kabileleri Vehhâbî nüfuzuna girdi — Türabe»
  - Hurma (Tâif doğusu) (m:-) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1801-01-01 «Tâif çevresi kabileleri Vehhâbî nüfuzuna girdi — Türabe»

**1805-07-03** kayip — 55/55 nokta açık · kapatan (1): 0g 1805-07-03 «Bâbıâli oldubittiyi kabul etti: Mısır valiliği fermanı»
  - Ahmîm (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Asvan (m:Kahire) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1805-07-03 «Bâbıâli oldubittiyi kabul etti: Mısır valiliği fermanı»
  - Asyut (m:Kahire) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1805-07-03 «Bâbıâli oldubittiyi kabul etti: Mısır valiliği fermanı»
  - Atfîh (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Bahriye (Bâvîtî) (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Behnesâ (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Benhâ (Kalyûbiye) (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Benî Süveyf (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Bilbîs (Şarkiye) (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Bürüllüs (Baltîm) (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Cirge (Girga) (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Demenhûr (Damanhur) (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Dessûk (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Deyrût (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Dimyat (m:Kahire) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1805-07-03 «Bâbıâli oldubittiyi kabul etti: Mısır valiliği fermanı»
  - Dâhile (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Ebû Ramâd (Şalâtîn) (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Ebûkîr (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Edfû (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - El-Arîş (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Esna (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Ferâfire (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Ferşût (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Feyyûm (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Fâkûs (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Hârice (Vâhât) (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Kafrüşşeyh (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Kahire (m:-) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1805-07-03 «Bâbıâli oldubittiyi kabul etti: Mısır valiliği fermanı»
  - Katye (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Kusayr (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Kûm Ombo (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Kûs (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Kına (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Mahalletülkübrâ (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Mansûre (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Mellevî (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Menzile (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Mersâ Matruh (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Minye (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Mît Gamr (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Reşîd (Rosetta) (m:Kahire) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1805-07-03 «Bâbıâli oldubittiyi kabul etti: Mısır valiliği fermanı»
  - Sefâce (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Sellûm (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Sina güneyi (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Sâlihiyye (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Sîva (Siwa) (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Süveyş (m:Kahire) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1805-07-03 «Bâbıâli oldubittiyi kabul etti: Mısır valiliği fermanı»
  - Tahtâ (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Tanta (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Tûr (Sînâ) (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Uksur (Luksor) (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - Vâdî Halfâ (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»
  - İbrim (m:Kahire) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1805-07-03 «Bâbıâli oldubittiyi kabul etti: Mısır valiliği fermanı»
  - İskenderiye (m:Kahire) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1805-07-03 «Bâbıâli oldubittiyi kabul etti: Mısır valiliği fermanı»
  - Şibînülkûm (Menûfiye) (m:Kahire) · KAYMA · açık:ABC · G · en yakın anan: 63g 1805-05 «Kahire ulemâsı Mehmed Ali'yi vali ilan etti»

**1805-07-20** kayip — 2/2 nokta açık · kapatan (1): 17g 1805-07-03 «Bâbıâli oldubittiyi kabul etti: Mısır valiliği fermanı»
  - Bedir (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: YOK
  - Yenbu (m:Medine) · KAYMA · açık:ABC · - · en yakın anan: 49g 1805-06-01 «Vehhâbîlerin Medine'yi işgali»

**1811-11-01** kazanc — 2/2 nokta açık · kapatan (2): 7g 1811-10-25 «Slobozia Bozgunu — Tuna ordusunun kuşatılması»; 30g 1811-12-01 «Safra-Cedîde boğazında ilk bozgun»
  - Bedir (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: YOK
  - Yenbu (m:Medine) · KAYMA · açık:ABC · - · en yakın anan: 31g 1811-10-01 «Yenbu teslim alındı — Hicaz seferinin ilk kıyı üssü»

**1812-05-28** kayip — 7/8 nokta açık · kapatan (1): 0g 1812-05-28 «Bükreş Antlaşması — Besarabya'nın kaybı»
  - Akkirman (m:Silistre) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1812-05-28 «Bükreş Antlaşması — Besarabya'nın kaybı»
  - Hotin (m:Silistre) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1812-05-28 «Bükreş Antlaşması — Besarabya'nın kaybı»
  - Kahul (Cahul) (m:Yaş) · MADDESIZ · açık:AB- · G · en yakın anan: 3192g 1821-02-22 «Eflak İsyanı — Ypsilanti'nin Prut'u geçmesi ve Vladimir»
  - Kili (m:Silistre) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1812-05-28 «Bükreş Antlaşması — Besarabya'nın kaybı»
  - Orhei (m:Yaş) · MADDESIZ · açık:AB- · G · en yakın anan: 3192g 1821-02-22 «Eflak İsyanı — Ypsilanti'nin Prut'u geçmesi ve Vladimir»
  - Soroka (Soroca) (m:Yaş) · MADDESIZ · açık:ABC · G · en yakın anan: 3192g 1821-02-22 «Eflak İsyanı — Ypsilanti'nin Prut'u geçmesi ve Vladimir»
  - İsmail (m:Silistre) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1812-05-28 «Bükreş Antlaşması — Besarabya'nın kaybı»

**1813-01-23** kazanc — 1/3 nokta açık · kapatan (2): 0g 1813-01-23 «Mekke geri alındı — hac yolu açıldı»; 22g 1813-01-01 «Avusturya'nın İlirya Eyaletleri'ni ve Dalmaçya'yı geri »
  - Râbiğ (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK

**1815-01-13** kazanc — 1/1 nokta açık · kapatan (1): 7g 1815-01-20 «Bisel Muharebesi: Suûdî kuvvetleri bozguna uğradı»
  - Türabe (m:-) · KAYMA · açık:ABC · - · en yakın anan: 353g 1816-01-01 «Mısır garnizonları güney Hicaz'da Türabe, Bîşe ve Rânye»

**1818-09-09** kazanc — 11/12 nokta açık · kapatan (1): 0g 1818-09-09 «Dir'iye düştü — ilk Suûdî Devleti sona erdi»
  - Buraydâ (Kasîm) (m:Medine) · KAYMA · açık:ABC · G · en yakın anan: 338g 1819-08-13 «Mısır garnizonu Harc'taki Süleymiye'den çekilip Menfûha»
  - Dilem (Harc) (m:-) · KAYMA · açık:AB- · G · en yakın anan: 338g 1819-08-13 «Mısır garnizonu Harc'taki Süleymiye'den çekilip Menfûha»
  - Havta (Havtat Benî Temîm) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Hurma (Tâif doğusu) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 6460g 1801-01-01 «Tâif çevresi kabileleri Vehhâbî nüfuzuna girdi — Türabe»
  - Leylâ (Eflâc) (m:-) · KAYMA · açık:ABC · G · en yakın anan: 338g 1819-08-13 «Mısır garnizonu Harc'taki Süleymiye'den çekilip Menfûha»
  - Necid içi (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 26412g 1891-01-01 «Müleydâ Savaşı — İkinci Suud Devleti'nin sonu, Necid Râ»
  - Nefud çölü (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Riyad (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: 2092g 1824-06-01 «İkinci Suûdî Devleti'nin Riyad'da kurulması»
  - Türabe (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 982g 1816-01-01 «Mısır garnizonları güney Hicaz'da Türabe, Bîşe ve Rânye»
  - Uneyze (m:Medine) · MADDESIZ · açık:ABC · G · en yakın anan: 2106g 1812-12-03 «Medine geri alındı»
  - Şakrâ (m:Medine) · MADDESIZ · açık:AB- · G · en yakın anan: 2106g 1812-12-03 «Medine geri alındı»

**1819-08-13** kayip — 2/3 nokta açık · kapatan (1): 0g 1819-08-13 «Mısır garnizonu Harc'taki Süleymiye'den çekilip Menfûha»
  - Havta (Havtat Benî Temîm) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Leylâ (Eflâc) (m:-) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1819-08-13 «Mısır garnizonu Harc'taki Süleymiye'den çekilip Menfûha»

**1821-01-04** kazanc — 5/6 nokta açık · kapatan (3): 0g 1821-01-04 «Dongola alındı — Kölemen bakiyesi dağıtıldı»; 3g 1821-01-01 «Osmanlı-İran savaşı başladı — Kars ve Bayazıt'ın kaybı,»; 3g 1821-01-01 «Süleymaniye ve Bağdat'ın İran işgali — Kerkük muhasaras»
  - Berber (m:Hartum) · MADDESIZ · açık:ABC · G · en yakın anan: 23128g 1884-05-01 «Berber'in Mehdî kuvvetlerinin eline geçmesi — Nil yolun»
  - Debbe (m:Hartum) · MADDESIZ · açık:AB- · G · en yakın anan: 23398g 1885-01-26 «Hartum'un düşüşü — Sudan'ın tamamının kaybı»
  - Ebû Hamed (m:Hartum) · MADDESIZ · açık:ABC · G · en yakın anan: 23398g 1885-01-26 «Hartum'un düşüşü — Sudan'ın tamamının kaybı»
  - Kerma (m:Hartum) · MADDESIZ · açık:AB- · G · en yakın anan: 23398g 1885-01-26 «Hartum'un düşüşü — Sudan'ın tamamının kaybı»
  - Merevî (m:Hartum) · MADDESIZ · açık:ABC · G · en yakın anan: 23398g 1885-01-26 «Hartum'un düşüşü — Sudan'ın tamamının kaybı»

**1821-03-25** kayip — 5/13 nokta açık · kapatan (1): 0g 1821-03-25 «Yunan İsyanı başladı»
  - Atina (m:-) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1821-03-25 «Yunan İsyanı başladı»
  - Egina (Aegina) (m:Atina) · MADDESIZ · açık:AB- · G · en yakın anan: 2263g 1827-06-05 «Atina Akropolü teslim alındı»
  - Kulluk (Salamis) (m:Atina) · MADDESIZ · açık:AB- · G · en yakın anan: 2263g 1827-06-05 «Atina Akropolü teslim alındı»
  - Livadya (m:Atina) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1821-03-25 «Yunan İsyanı başladı»
  - İstefe (Tebai) (m:Atina) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1821-03-25 «Yunan İsyanı başladı»

**1821-06-14** kazanc — 8/9 nokta açık · kapatan (1): 0g 1821-06-14 «Sennâr (Fûnc) Sultanlığı teslim oldu»
  - Ed-Düveym (m:Hartum) · MADDESIZ · açık:AB- · TG · en yakın anan: 23237g 1885-01-26 «Hartum'un düşüşü — Sudan'ın tamamının kaybı»
  - Fâzûğlî (m:Hartum) · MADDESIZ · açık:ABC · TG · en yakın anan: 23237g 1885-01-26 «Hartum'un düşüşü — Sudan'ın tamamının kaybı»
  - Hartum (m:-) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1821-06-14 «Sennâr (Fûnc) Sultanlığı teslim oldu»
  - Kadârif (m:Hartum) · MADDESIZ · açık:ABC · TG · en yakın anan: 23237g 1885-01-26 «Hartum'un düşüşü — Sudan'ın tamamının kaybı»
  - Kosti (m:Hartum) · MADDESIZ · açık:AB- · TG · en yakın anan: 23237g 1885-01-26 «Hartum'un düşüşü — Sudan'ın tamamının kaybı»
  - Rusayris (m:Hartum) · MADDESIZ · açık:ABC · TG · en yakın anan: 23237g 1885-01-26 «Hartum'un düşüşü — Sudan'ın tamamının kaybı»
  - Vad Medenî (m:Hartum) · MADDESIZ · açık:AB- · TG · en yakın anan: 23237g 1885-01-26 «Hartum'un düşüşü — Sudan'ın tamamının kaybı»
  - Şendî (m:Hartum) · MADDESIZ · açık:ABC · TG · en yakın anan: 497g 1822-10-24 «Şendî'de İsmâil Paşa'nın öldürülmesi»

**1821-08-19** kazanc — 3/4 nokta açık · kapatan (2): 0g 1821-08-19 «Kordofan ele geçirildi»; 27g 1821-09-15 «Orta Amerika Bağımsızlık Bildirisi — Guatemala Genel Ka»
  - Bâra (m:Hartum) · MADDESIZ · açık:AB- · G · en yakın anan: 23171g 1885-01-26 «Hartum'un düşüşü — Sudan'ın tamamının kaybı»
  - Kordofan (m:-) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1821-08-19 «Kordofan ele geçirildi»
  - Nühûd (m:Hartum) · MADDESIZ · açık:ABC · G · en yakın anan: 23171g 1885-01-26 «Hartum'un düşüşü — Sudan'ın tamamının kaybı»

**1824-06-01** kayip — 6/7 nokta açık · kapatan (1): 0g 1824-06-01 «İkinci Suûdî Devleti'nin Riyad'da kurulması»
  - Buraydâ (Kasîm) (m:Medine) · MADDESIZ · açık:ABC · G · en yakın anan: 1754g 1819-08-13 «Mısır garnizonu Harc'taki Süleymiye'den çekilip Menfûha»
  - Dir'iye (Necid) (m:Basra) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1824-06-01 «İkinci Suûdî Devleti'nin Riyad'da kurulması»
  - Necid içi (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 24320g 1891-01-01 «Müleydâ Savaşı — İkinci Suud Devleti'nin sonu, Necid Râ»
  - Nefud çölü (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Uneyze (m:Medine) · MADDESIZ · açık:ABC · G · en yakın anan: 4198g 1812-12-03 «Medine geri alındı»
  - Şakrâ (m:Medine) · MADDESIZ · açık:ABC · G · en yakın anan: 4198g 1812-12-03 «Medine geri alındı»

**1829-05-01** kayip — 3/4 nokta açık · kapatan (1): 0g 1829-05-01 «İnebahtı, Eğriboz ve Karistos'un Yunanistan'a bırakılma»
  - Eğriboz (m:Mora (Tripoliçe)) · ESLESTIRME · açık:A-- · TG · en yakın anan: 0g 1829-05-01 «İnebahtı, Eğriboz ve Karistos'un Yunanistan'a bırakılma»
  - Karistos (Kızılhisar) (m:Mora (Tripoliçe)) · ESLESTIRME · açık:A-- · TG · en yakın anan: 0g 1829-05-01 «İnebahtı, Eğriboz ve Karistos'un Yunanistan'a bırakılma»
  - Oreoi (İstiaia) (m:Eğriboz) · ESLESTIRME · açık:AB- · TG · en yakın anan: 0g 1829-05-01 «İnebahtı, Eğriboz ve Karistos'un Yunanistan'a bırakılma»

**1829-09-14** kayip — 9/10 nokta açık · kapatan (2): 0g 1829-09-14 «Edirne Antlaşması»; 0g 1829-09-14 «Ahıska'nın Rusya'ya terki — Çıldır eyaletinin merkezi e»
  - Ahılkelek (Akhalkalaki) (m:Erzurum) · MADDESIZ · açık:AB- · TG · en yakın anan: 2448g 1823-01-01 «Erzurum Antlaşması — İran kuvvetlerinin altmış günde çe»
  - Anapa (m:Kefe) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1829-09-14 «Edirne Antlaşması»
  - Maykop (Çerkezya) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Soçi (Sâşe) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 3031g 1838-01-01 «Ruslar Çerkez kıyısında Soçi ve Tuapse limanlarını aldı»
  - Ts’q’altbila (m:-) · MADDESIZ · açık:AB- · TG · en yakın anan: YOK
  - Tuapse (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 3031g 1838-01-01 «Ruslar Çerkez kıyısında Soçi ve Tuapse limanlarını aldı»
  - Yergöğü (Giurgiu) (m:Sofya) · MADDESIZ · açık:ABC · G · en yakın anan: 6923g 1810-10-01 «Niğbolu ve Kule'nin (Turnu) direnmeden Ruslara teslimi»
  - Zazalo (m:-) · MADDESIZ · açık:AB- · TG · en yakın anan: YOK
  - İbrail (m:Silistre) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1829-09-14 «Edirne Antlaşması»

**1830-02-03** kayip — 20/21 nokta açık · kapatan (2): 0g 1830-02-03 «Londra Protokolü — Yunanistan'ın bağımsızlığının tanınm»; 2g 1830-02 «Yunanistan'ın bağımsızlığı — Cezayir'in işgali»
  - Alonisos (m:Selanik) · MADDESIZ · açık:ABC · TG · en yakın anan: 26903g 1903-10-02 «Mürzsteg Programı: Makedonya'da uluslararası reform den»
  - Değirmenlik (Milos) (m:Rodos) · KAYMA · açık:AB- · TG · en yakın anan: 256g 1830-10-17 «Sırbistan'a özerklik fermanı — irsî knezlik ve garnizon»
  - Folegandros (m:Kandiye (Girit)) · MADDESIZ · açık:AB- · TG · en yakın anan: 13849g 1868-01-04 «Girit Nizamnâmesi: adaya geniş idarî imtiyazlar»
  - Kimolos (Argentiera) (m:Rodos) · MADDESIZ · açık:AB- · TG · en yakın anan: 30040g 1912-05-04 «Rodos'un İtalyan işgali»
  - Koçbaba (Serifos) (m:Rodos) · MADDESIZ · açık:AB- · TG · en yakın anan: 30040g 1912-05-04 «Rodos'un İtalyan işgali»
  - Mikonos (m:Rodos) · MADDESIZ · açık:AB- · TG · en yakın anan: 30040g 1912-05-04 «Rodos'un İtalyan işgali»
  - Murted (Kea) (m:Rodos) · MADDESIZ · açık:AB- · TG · en yakın anan: 30040g 1912-05-04 «Rodos'un İtalyan işgali»
  - Nakşa (m:Rodos) · MADDESIZ · açık:AB- · TG · en yakın anan: 30040g 1912-05-04 «Rodos'un İtalyan işgali»
  - Namfi (Anafi) (m:Kandiye (Girit)) · MADDESIZ · açık:ABC · TG · en yakın anan: 13849g 1868-01-04 «Girit Nizamnâmesi: adaya geniş idarî imtiyazlar»
  - Nio (İos) (m:Rodos) · MADDESIZ · açık:AB- · TG · en yakın anan: 30040g 1912-05-04 «Rodos'un İtalyan işgali»
  - Paros (m:Rodos) · MADDESIZ · açık:AB- · TG · en yakın anan: 30040g 1912-05-04 «Rodos'un İtalyan işgali»
  - Santorini (m:Kandiye (Girit)) · MADDESIZ · açık:ABC · TG · en yakın anan: 13849g 1868-01-04 «Girit Nizamnâmesi: adaya geniş idarî imtiyazlar»
  - Sifnos (Yavuzca) (m:Rodos) · MADDESIZ · açık:AB- · TG · en yakın anan: 30040g 1912-05-04 «Rodos'un İtalyan işgali»
  - Sire (Syros) (m:Rodos) · MADDESIZ · açık:AB- · TG · en yakın anan: 30040g 1912-05-04 «Rodos'un İtalyan işgali»
  - Termiye (Kythnos) (m:Rodos) · MADDESIZ · açık:AB- · TG · en yakın anan: 30040g 1912-05-04 «Rodos'un İtalyan işgali»
  - Yamurgi (Amorgos) (m:Rodos) · MADDESIZ · açık:AB- · TG · en yakın anan: 30040g 1912-05-04 «Rodos'un İtalyan işgali»
  - İskiathos (m:Selanik) · MADDESIZ · açık:ABC · TG · en yakın anan: 26903g 1903-10-02 «Mürzsteg Programı: Makedonya'da uluslararası reform den»
  - İskiros (Skyros) (m:Selanik) · MADDESIZ · açık:AB- · TG · en yakın anan: 26903g 1903-10-02 «Mürzsteg Programı: Makedonya'da uluslararası reform den»
  - İskopelos (m:Selanik) · MADDESIZ · açık:ABC · TG · en yakın anan: 26903g 1903-10-02 «Mürzsteg Programı: Makedonya'da uluslararası reform den»
  - İstendil (Tinos) (m:Rodos) · MADDESIZ · açık:AB- · TG · en yakın anan: 30040g 1912-05-04 «Rodos'un İtalyan işgali»

**1830-10-17** kayip — 1/3 nokta açık · kapatan (3): 0g 1830-10-17 «Sırbistan'a özerklik fermanı — irsî knezlik ve garnizon»; 13g 1830-10-04 «Belçika'nın bağımsızlık ilanı — Fransa sınırı fiilen Be»; 15g 1830-11-01 «Girit'in idaresi Mehmed Ali'ye bırakıldı»
  - Yagodina (Jagodina) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK

**1830-11-01** kazanc — 4/5 nokta açık · kapatan (4): 0g 1830-11-01 «Girit'in idaresi Mehmed Ali'ye bırakıldı»; 15g 1830-10-17 «Sırbistan'a özerklik fermanı — irsî knezlik ve garnizon»; 28g 1830-10-04 «Belçika'nın bağımsızlık ilanı — Fransa sınırı fiilen Be»
  - Hanya (m:Kandiye (Girit)) · MADDESIZ · açık:AB- · G · en yakın anan: 13578g 1868-01-04 «Girit Nizamnâmesi: adaya geniş idarî imtiyazlar»
  - Kandiye (Girit) (m:-) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1830-11-01 «Girit'in idaresi Mehmed Ali'ye bırakıldı»
  - Sitiye (Sitia) (m:Kandiye (Girit)) · MADDESIZ · açık:AB- · G · en yakın anan: 13578g 1868-01-04 «Girit Nizamnâmesi: adaya geniş idarî imtiyazlar»
  - İsfakiye (Sfakia) (m:Kandiye (Girit)) · MADDESIZ · açık:AB- · G · en yakın anan: 13578g 1868-01-04 «Girit Nizamnâmesi: adaya geniş idarî imtiyazlar»

**1831-10-31** kazanc — 1/2 nokta açık · kapatan (3): 0g 1831-10-31 «İbrâhim Paşa Suriye'ye girdi — birinci kriz başladı»; 1g 1831-11-01 «İlk resmî gazete: Takvîm-i Vekāyi»; 27g 1831-11-27 «Akkâ kuşatması başladı»
  - Yafa (m:Kudüs) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1831-10-31 «İbrâhim Paşa Suriye'ye girdi — birinci kriz başladı»

**1831-11-08** kazanc — 2/2 nokta açık · kapatan (3): 7g 1831-11-01 «İlk resmî gazete: Takvîm-i Vekāyi»; 8g 1831-10-31 «İbrâhim Paşa Suriye'ye girdi — birinci kriz başladı»; 19g 1831-11-27 «Akkâ kuşatması başladı»
  - Kudüs (m:-) · MADDESIZ · açık:AB- · - · en yakın anan: 923g 1834-05-19 «Filistin-Nablus isyanı Mısır idaresine karşı»
  - Nablus (m:Kudüs) · MADDESIZ · açık:AB- · - · en yakın anan: 923g 1834-05-19 «Filistin-Nablus isyanı Mısır idaresine karşı»

**1832-06-15** kazanc — 2/6 nokta açık · kapatan (4): 0g 1832-06-15 «Şam teslim oldu»; 10g 1832-06-25 «Halep ele geçirildi»; 19g 1832-05-27 «Akkâ düştü»
  - Hama (m:Trablusşam) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1832-06-15 «Şam teslim oldu»
  - Trablusşam (m:-) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1832-06-15 «Şam teslim oldu»

**1832-07-29** kazanc — 7/7 nokta açık · kapatan (2): 0g 1832-07-29 «Belen (Beylan) Geçidi bozgunu — Çukurova açıldı»; 21g 1832-07-08 «Humus Muharebesi»
  - Adana (m:-) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1832-07-29 «Belen (Beylan) Geçidi bozgunu — Çukurova açıldı»
  - Antakya (m:Halep) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1832-07-29 «Belen (Beylan) Geçidi bozgunu — Çukurova açıldı»
  - Antep (m:Halep) · KAYMA · açık:ABC · G · en yakın anan: 34g 1832-06-25 «Halep ele geçirildi»
  - Kilis (m:Halep) · KAYMA · açık:ABC · G · en yakın anan: 34g 1832-06-25 «Halep ele geçirildi»
  - Maraş (m:-) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1832-07-29 «Belen (Beylan) Geçidi bozgunu — Çukurova açıldı»
  - Payas (m:Halep) · KAYMA · açık:ABC · G · en yakın anan: 34g 1832-06-25 «Halep ele geçirildi»
  - Tarsus (m:Adana) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1832-07-29 «Belen (Beylan) Geçidi bozgunu — Çukurova açıldı»

**1832-08-15** kazanc — 1/1 nokta açık · kapatan (1): 17g 1832-07-29 «Belen (Beylan) Geçidi bozgunu — Çukurova açıldı»
  - Urfa (m:Diyarbakır) · MADDESIZ · açık:ABC · - · en yakın anan: 3116g 1841-02-25 «Mısır ordusu Suriye ve Çukurova'yı boşalttı»

**1832-11-22** kayip — 9/10 nokta açık · kapatan (3): 0g 1832-11-22 «Emîr Abdülkādir'in devletinin kuruluşu — batı Cezayir'd»; 1g 1832-11-21 «Mısır ordusu Konya'ya girdi»; 29g 1832-12-21 «Konya Meydan Muharebesi: sadrazam esir düştü»
  - Ayn Temûşent (m:Cezayir) · ESLESTIRME · açık:AB- · TG · en yakın anan: 0g 1832-11-22 «Emîr Abdülkādir'in devletinin kuruluşu — batı Cezayir'd»
  - Bû Sa'âde (m:Cezayir) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1832-11-22 «Emîr Abdülkādir'in devletinin kuruluşu — batı Cezayir'd»
  - Dellîs (m:Cezayir) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1832-11-22 «Emîr Abdülkādir'in devletinin kuruluşu — batı Cezayir'd»
  - Mesîle (m:Cezayir) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1832-11-22 «Emîr Abdülkādir'in devletinin kuruluşu — batı Cezayir'd»
  - Mustagānim (m:Cezayir) · ESLESTIRME · açık:AB- · TG · en yakın anan: 0g 1832-11-22 «Emîr Abdülkādir'in devletinin kuruluşu — batı Cezayir'd»
  - Nedrûme (m:Cezayir) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1832-11-22 «Emîr Abdülkādir'in devletinin kuruluşu — batı Cezayir'd»
  - Sîdî Bel Abbès (m:Cezayir) · ESLESTIRME · açık:AB- · TG · en yakın anan: 0g 1832-11-22 «Emîr Abdülkādir'in devletinin kuruluşu — batı Cezayir'd»
  - Tenes (m:Cezayir) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1832-11-22 «Emîr Abdülkādir'in devletinin kuruluşu — batı Cezayir'd»
  - Şelif (m:Cezayir) · ESLESTIRME · açık:AB- · TG · en yakın anan: 0g 1832-11-22 «Emîr Abdülkādir'in devletinin kuruluşu — batı Cezayir'd»

**1832-12-10** kayip — 1/1 nokta açık · kapatan (3): 11g 1832-12-21 «Konya Meydan Muharebesi: sadrazam esir düştü»; 18g 1832-11-22 «Emîr Abdülkādir'in devletinin kuruluşu — batı Cezayir'd»; 19g 1832-11-21 «Mısır ordusu Konya'ya girdi»
  - Sisam (m:İzmir) · MADDESIZ · açık:ABC · - · en yakın anan: 22802g 1770-07-06 «Çeşme baskını»

**1833-06-30** kayip — 3/3 nokta açık · kapatan (2): 8g 1833-07-08 «Hünkâr İskelesi Antlaşması»; 29g 1833-06-01 «Feshâne-i Âmire'nin kuruluşu»
  - Karaman (m:Konya) · KAYMA · açık:ABC · - · en yakın anan: 191g 1832-12-21 «Konya Meydan Muharebesi: sadrazam esir düştü»
  - Konya (m:-) · KAYMA · açık:ABC · - · en yakın anan: 191g 1832-12-21 «Konya Meydan Muharebesi: sadrazam esir düştü»
  - Kütahya (m:-) · KAYMA · açık:ABC · - · en yakın anan: 47g 1833-05-14 «Kütahya Sözleşmesi — Suriye ve Adana Kavalalı'ya»

**1835-05-26** kazanc — 11/25 nokta açık · kapatan (1): 0g 1835-05-26 «Trablusgarp'ın doğrudan merkeze bağlanması — Karamanlı »
  - Beyzâ (Kirene) (m:Bingazi) · MADDESIZ · açık:ABC · G · en yakın anan: 7525g 1856-01-01 «Senûsiyye'nin çöl merkezi Cağbûb'un Osmanlı düzenine ba»
  - Bingazi (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 7525g 1856-01-01 «Senûsiyye'nin çöl merkezi Cağbûb'un Osmanlı düzenine ba»
  - Câlû (m:Bingazi) · MADDESIZ · açık:ABC · G · en yakın anan: 7525g 1856-01-01 «Senûsiyye'nin çöl merkezi Cağbûb'un Osmanlı düzenine ba»
  - Derne (m:Bingazi) · MADDESIZ · açık:ABC · G · en yakın anan: 7525g 1856-01-01 «Senûsiyye'nin çöl merkezi Cağbûb'un Osmanlı düzenine ba»
  - Ecdâbiye (m:Bingazi) · MADDESIZ · açık:ABC · G · en yakın anan: 7525g 1856-01-01 «Senûsiyye'nin çöl merkezi Cağbûb'un Osmanlı düzenine ba»
  - Gât (m:Murzuk (Fizan)) · MADDESIZ · açık:ABC · G · en yakın anan: 27613g 1911-01-01 «Fransızlar Canet'i (Djanet) işgal etti»
  - Merc (m:Bingazi) · MADDESIZ · açık:ABC · G · en yakın anan: 7525g 1856-01-01 «Senûsiyye'nin çöl merkezi Cağbûb'un Osmanlı düzenine ba»
  - Murzuk (Fizan) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 94377g 1577-01-01 «Fizan sancağının Trablusgarp'a bağlanışı — Murzuk ve Sa»
  - Sebha (m:Murzuk (Fizan)) · MADDESIZ · açık:ABC · G · en yakın anan: 94377g 1577-01-01 «Fizan sancağının Trablusgarp'a bağlanışı — Murzuk ve Sa»
  - Tobruk (m:Bingazi) · MADDESIZ · açık:ABC · G · en yakın anan: 7525g 1856-01-01 «Senûsiyye'nin çöl merkezi Cağbûb'un Osmanlı düzenine ba»
  - Ubârî (m:Murzuk (Fizan)) · MADDESIZ · açık:ABC · G · en yakın anan: 94377g 1577-01-01 «Fizan sancağının Trablusgarp'a bağlanışı — Murzuk ve Sa»

**1837-10-13** kayip — 2/3 nokta açık · kapatan (2): 0g 1837-10-13 «Konstantin'in düşüşü — doğu Cezayir beyliğinin sonu»; 2g 1837-10-15 «Cebel-i Dürûz ayaklanması»
  - Kalme (Guelma) (m:Cezayir) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1837-10-13 «Konstantin'in düşüşü — doğu Cezayir beyliğinin sonu»
  - Mîle (m:Cezayir) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1837-10-13 «Konstantin'in düşüşü — doğu Cezayir beyliğinin sonu»

**1838-01-01** kazanc — 3/3 nokta açık · kapatan (1): 0g 1838-01-01 «Ruslar Çerkez kıyısında Soçi ve Tuapse limanlarını aldı»
  - Dilem (Harc) (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: 6716g 1819-08-13 «Mısır garnizonu Harc'taki Süleymiye'den çekilip Menfûha»
  - Havta (Havtat Benî Temîm) (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: YOK
  - Leylâ (Eflâc) (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: 6716g 1819-08-13 «Mısır garnizonu Harc'taki Süleymiye'den çekilip Menfûha»

**1838-10-13** kayip — 3/4 nokta açık · kapatan (1): 0g 1838-10-13 «Setif'in işgali»
  - Berc Bû Areric (m:Cezayir) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1838-10-13 «Setif'in işgali»
  - Kolo (m:Cezayir) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1838-10-13 «Setif'in işgali»
  - Sikikde (m:Cezayir) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1838-10-13 «Setif'in işgali»

**1839-05-13** kayip — 1/1 nokta açık · kapatan (2): 1g 1839-05-14 «Tıp okulunun Mekteb-i Tıbbiyye-i Adliyye-i Şâhâne adını»; 22g 1839-04-21 «Osmanlı ordusu Fırat'ı geçti»
  - Cicel (m:Cezayir) · KAYMA · açık:ABC · - · en yakın anan: 212g 1838-10-13 «Setif'in işgali»

**1840-01-01** kazanc — 5/6 nokta açık · kapatan (2): 0g 1840-01-01 «Taka bölgesinin fethi ve Kesela'nın kurulması»; 0g 1840-01-01 «İlk Osmanlı kâğıt parası (kâime) çıkarıldı»
  - Dilem (Harc) (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: 7446g 1819-08-13 «Mısır garnizonu Harc'taki Süleymiye'den çekilip Menfûha»
  - Havta (Havtat Benî Temîm) (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: YOK
  - Hurma (Tâif doğusu) (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: 14244g 1801-01-01 «Tâif çevresi kabileleri Vehhâbî nüfuzuna girdi — Türabe»
  - Leylâ (Eflâc) (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: 7446g 1819-08-13 «Mısır garnizonu Harc'taki Süleymiye'den çekilip Menfûha»
  - Türabe (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: 8766g 1816-01-01 «Mısır garnizonları güney Hicaz'da Türabe, Bîşe ve Rânye»

**1840-10-10** kayip — 2/3 nokta açık · kapatan (4): 0g 1840-10-10 «Beyrut ve sahil şehirleri elden çıktı»; 2g 1840-10-08 «Hawaii'nin ilk yazılı anayasası ilan edildi»; 24g 1840-11-03 «Akkâ iki saatte düştü»
  - Sayda (m:Şam) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1840-10-10 «Beyrut ve sahil şehirleri elden çıktı»
  - Trablusşam (m:-) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1840-10-10 «Beyrut ve sahil şehirleri elden çıktı»

**1841-02-25** kayip — 14/22 nokta açık · kapatan (1): 0g 1841-02-25 «Mısır ordusu Suriye ve Çukurova'yı boşalttı»
  - Girit (Resmo) (m:Kandiye (Girit)) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1841-02-25 «Mısır ordusu Suriye ve Çukurova'yı boşalttı»
  - Hama (m:Trablusşam) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1841-02-25 «Mısır ordusu Suriye ve Çukurova'yı boşalttı»
  - Hanya (m:Kandiye (Girit)) · MADDESIZ · açık:ABC · G · en yakın anan: 9809g 1868-01-04 «Girit Nizamnâmesi: adaya geniş idarî imtiyazlar»
  - Humus (m:Şam) · KAYMA · açık:ABC · G · en yakın anan: 90g 1840-11-27 «İskenderiye Konvansiyonu»
  - Kandiye (Girit) (m:-) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1841-02-25 «Mısır ordusu Suriye ve Çukurova'yı boşalttı»
  - Kudüs (m:-) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1841-02-25 «Mısır ordusu Suriye ve Çukurova'yı boşalttı»
  - Maraş (m:-) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1841-02-25 «Mısır ordusu Suriye ve Çukurova'yı boşalttı»
  - Nablus (m:Kudüs) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1841-02-25 «Mısır ordusu Suriye ve Çukurova'yı boşalttı»
  - Sitiye (Sitia) (m:Kandiye (Girit)) · MADDESIZ · açık:ABC · G · en yakın anan: 9809g 1868-01-04 «Girit Nizamnâmesi: adaya geniş idarî imtiyazlar»
  - Tedmür (Palmyra) (m:Şam) · KAYMA · açık:ABC · G · en yakın anan: 90g 1840-11-27 «İskenderiye Konvansiyonu»
  - Urfa (m:Diyarbakır) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1841-02-25 «Mısır ordusu Suriye ve Çukurova'yı boşalttı»
  - Yafa (m:Kudüs) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1841-02-25 «Mısır ordusu Suriye ve Çukurova'yı boşalttı»
  - İsfakiye (Sfakia) (m:Kandiye (Girit)) · MADDESIZ · açık:ABC · G · en yakın anan: 9809g 1868-01-04 «Girit Nizamnâmesi: adaya geniş idarî imtiyazlar»
  - Şam (m:-) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1841-02-25 «Mısır ordusu Suriye ve Çukurova'yı boşalttı»

**1841-05-24** kazanc — 7/7 nokta açık · kapatan (1): 0g 1841-05-24 «Ferman: Mısır valiliği Kavalalı ailesine irsî bırakıldı»
  - Bedir (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Cidde (m:Mekke) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1841-05-24 «Ferman: Mısır valiliği Kavalalı ailesine irsî bırakıldı»
  - Hayber (m:Medine) · MADDESIZ · açık:ABC · G · en yakın anan: 10399g 1812-12-03 «Medine geri alındı»
  - Medine (m:-) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1841-05-24 «Ferman: Mısır valiliği Kavalalı ailesine irsî bırakıldı»
  - Mekke (m:-) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1841-05-24 «Ferman: Mısır valiliği Kavalalı ailesine irsî bırakıldı»
  - Râbiğ (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Yenbu (m:Medine) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1841-05-24 «Ferman: Mısır valiliği Kavalalı ailesine irsî bırakıldı»

**1844-02-12** kayip — 1/1 nokta açık · kapatan (2): 13g 1844-01-30 «Avusturya-Bavyera Tirol-Vorarlberg sınır antlaşması»; 21g 1844-03-04 «Biskra'nın işgali — Sahra kapısının kaybı»
  - Batna (m:Cezayir) · MADDESIZ · açık:AB- · - · en yakın anan: 1948g 1838-10-13 «Setif'in işgali»

**1844-03-04** kayip — 2/3 nokta açık · kapatan (1): 0g 1844-03-04 «Biskra'nın işgali — Sahra kapısının kaybı»
  - Sûk Ahrâs (m:Cezayir) · MADDESIZ · açık:ABC · G · en yakın anan: 1969g 1838-10-13 «Setif'in işgali»
  - Tebesse (m:Cezayir) · MADDESIZ · açık:ABC · G · en yakın anan: 1969g 1838-10-13 «Setif'in işgali»

**1849-01-01** kazanc — 2/3 nokta açık · kapatan (1): 0g 1849-01-01 «Tihâme sahiline dönüş: Hudeyde, Zebîd ve Moha'nın alınm»
  - Moha (m:Sana) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1849-01-01 «Tihâme sahiline dönüş: Hudeyde, Zebîd ve Moha'nın alınm»
  - Zebîd (m:Sana) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1849-01-01 «Tihâme sahiline dönüş: Hudeyde, Zebîd ve Moha'nın alınm»

**1849-05-01** kazanc — 2/2 nokta açık · kapatan (1): 0g 1849-05-01 «Baltalimanı Sözleşmesi: Eflak ve Boğdan'da ortak Osmanl»
  - Ferasan (Farasan) (m:Sana) · MADDESIZ · açık:ABC · G · en yakın anan: 8371g 1872-04-01 «San'a'nın alınışı: Yemen'de Osmanlı otoritesinin yenide»
  - Kemeran (Kamaran) (m:Sana) · MADDESIZ · açık:ABC · G · en yakın anan: 8371g 1872-04-01 «San'a'nın alınışı: Yemen'de Osmanlı otoritesinin yenide»

**1852-12-04** kayip — 1/2 nokta açık · kapatan (1): 0g 1852-12-04 «Ağvât'ın (Laghouat) düşüşü — Sahra kapısının açılması»
  - Gardâye (m:Cezayir) · MADDESIZ · açık:ABC · G · en yakın anan: 728g 1854-12-02 «Tuggurt'un işgali — Cezayir'in tamamının elden çıkışı»

**1856-03-30** kazanc — 3/4 nokta açık · kapatan (2): 0g 1856-03-30 «Paris Antlaşması: Kırım Savaşı'nın sonu ve Osmanlı'nın »; 6g 1856-03-24 «Nepal–Tibet barışı — sınır çizilmedi»
  - Bolgrad (Bolhrad) (m:Yaş) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1856-03-30 «Paris Antlaşması: Kırım Savaşı'nın sonu ve Osmanlı'nın »
  - Kahul (Cahul) (m:Yaş) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1856-03-30 «Paris Antlaşması: Kırım Savaşı'nın sonu ve Osmanlı'nın »
  - Kili (m:Silistre) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1856-03-30 «Paris Antlaşması: Kırım Savaşı'nın sonu ve Osmanlı'nın »

**1859-01-24** kayip — 6/17 nokta açık · kapatan (1): 0g 1859-01-24 «Eflak ve Boğdan'ın Cuza yönetiminde birleşmesi: Romanya»
  - Birlad (Bârlad) (m:Yaş) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1859-01-24 «Eflak ve Boğdan'ın Cuza yönetiminde birleşmesi: Romanya»
  - Kalas (Galatz) (m:Yaş) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1859-01-24 «Eflak ve Boğdan'ın Cuza yönetiminde birleşmesi: Romanya»
  - Roman (m:Yaş) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1859-01-24 «Eflak ve Boğdan'ın Cuza yönetiminde birleşmesi: Romanya»
  - Yaş (m:-) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1859-01-24 «Eflak ve Boğdan'ın Cuza yönetiminde birleşmesi: Romanya»
  - Yergöğü (Giurgiu) (m:Sofya) · MADDESIZ · açık:AB- · G · en yakın anan: 6920g 1878-01-04 «Sofya'nın Rus kuvvetlerince işgali»
  - İbrail (m:Silistre) · MADDESIZ · açık:ABC · G · en yakın anan: 5181g 1873-04-01 «"Vatan yahut Silistre" sahnelendi, Nâmık Kemal sürgüne »

**1861-06-09** kayip — 1/1 nokta açık · kapatan (4): 0g 1861-06-09 «Cebel-i Lübnan Nizamnâmesi: Lübnan'a imtiyazlı mutasarr»; 4g 1861-06-13 «Çerkezlerin Soçi'de toplanıp Osmanlı, İngiltere ve Fran»; 9g 1861-05-31 «Bahreyn'in İngiltere ile antlaşması — körfezde himaye d»
  - Deyrülkamer (Dayr al-Kamer) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 7099g 1842-01-01 «Lübnan Emirliği'nin sonu — III. Beşîr Şihâb'ın görevden»

**1869-01-01** kazanc — 1/2 nokta açık · kapatan (1): 0g 1869-01-01 «Midhat Paşa'nın Bağdat valiliği ve aşiret iskânı — Ramâ»
  - Nâsıriye (m:Basra) · ESLESTIRME · açık:A-- · - · en yakın anan: 0g 1869-01-01 «Midhat Paşa'nın Bağdat valiliği ve aşiret iskânı — Ramâ»

**1871-01-01** kazanc — 1/2 nokta açık · kapatan (1): 0g 1871-01-01 «Asîr'in doğrudan idareye alınması»
  - Kuveyt (m:Basra) · KAYMA · açık:ABC · - · en yakın anan: 109g 1871-04-20 «Midhat Paşa'nın Necid seferi: Lahsâ'da Osmanlı hâkimiye»

**1871-04-20** kazanc — 3/4 nokta açık · kapatan (1): 0g 1871-04-20 «Midhat Paşa'nın Necid seferi: Lahsâ'da Osmanlı hâkimiye»
  - Cübeyl (m:Basra) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1871-04-20 «Midhat Paşa'nın Necid seferi: Lahsâ'da Osmanlı hâkimiye»
  - Katîf (m:Basra) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1871-04-20 «Midhat Paşa'nın Necid seferi: Lahsâ'da Osmanlı hâkimiye»
  - Ukayr (Uceyr) (m:Basra) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1871-04-20 «Midhat Paşa'nın Necid seferi: Lahsâ'da Osmanlı hâkimiye»

**1871-09-20** kazanc — 1/2 nokta açık · kapatan (2): 0g 1871-09-20 «Katar'da Osmanlı kontrolünün kurulması»; 13g 1871-09-07 «Sadrazam Âlî Paşa'nın vefatı: Tanzimat kadrosunun sonu»
  - Katar Yarımadası (iç, dolgu) (m:-) · MADDESIZ · açık:AB- · TG · en yakın anan: 15287g 1913-07-29 «Katar'dan Osmanlı feragati — Londra Sözleşmesi»

**1875-06-01** kayip — 1/1 nokta açık · kapatan (1): 18g 1875-06-19 «Hersek İsyanı'nın başlaması: Şark Meselesi'nin yeniden »
  - Zeyla (m:Sevâkin) · MADDESIZ · açık:ABC · - · en yakın anan: 3136g 1884-01-01 «Reji İdaresi kuruldu (tütün tekeli)»

**1877-05-09** kayip — 4/15 nokta açık · kapatan (2): 0g 1877-05-09 «Romanya'nın bağımsızlığını ilân etmesi — Eflak-Boğdan t»; 15g 1877-04-24 «Rusya'nın savaş ilânı — Doksanüç Harbi'nin başlaması»
  - Birlad (Bârlad) (m:Yaş) · MADDESIZ · açık:ABC · TG · en yakın anan: 1417g 1881-03-26 «Romanya Krallığı ilan edildi — Prenslik Krallığa dönüşt»
  - Kalas (Galatz) (m:Yaş) · MADDESIZ · açık:ABC · TG · en yakın anan: 6680g 1859-01-24 «Eflak ve Boğdan'ın Cuza yönetiminde birleşmesi: Romanya»
  - Roman (m:Yaş) · MADDESIZ · açık:ABC · TG · en yakın anan: 6680g 1859-01-24 «Eflak ve Boğdan'ın Cuza yönetiminde birleşmesi: Romanya»
  - Yaş (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 430g 1878-07-13 «Berlin Antlaşması»

**1877-05-17** kayip — 1/1 nokta açık · kapatan (2): 8g 1877-05-09 «Romanya'nın bağımsızlığını ilân etmesi — Eflak-Boğdan t»; 23g 1877-04-24 «Rusya'nın savaş ilânı — Doksanüç Harbi'nin başlaması»
  - Ardahan (m:Erzurum) · ESLESTIRME · açık:ABC · T · en yakın anan: 23g 1877-04-24 «Rusya'nın savaş ilânı — Doksanüç Harbi'nin başlaması»

**1877-07-16** kayip — 1/1 nokta açık · kapatan (3): 3g 1877-07-19 «Şıpka Geçidi'nin tahliyesi — Balkan hattının yarılması»; 3g 1877-07-19 «Plevne savunmasının başlaması: Gazi Osman Paşa'nın dire»; 19g 1877-06-27 «Rus ordusunun Tuna'yı geçmesi — Ziştovi ve Tırnova'nın »
  - Niğbolu (m:Sofya) · ESLESTIRME · açık:AB- · - · en yakın anan: 19g 1877-06-27 «Rus ordusunun Tuna'yı geçmesi — Ziştovi ve Tırnova'nın »

**1878-03-03** kayip — 14/14 nokta açık · kapatan (2): 0g 1878-03-03 «Ayastefanos Antlaşması: Büyük Bulgaristan tasarısı»; 18g 1878-02-13 «II. Abdülhamid'in Meclis-i Meb'ûsan'ı süresiz tatil etm»
  - Arpaçay (Akyaka) (m:Erzurum) · KAYMA · açık:AB- · G · en yakın anan: 105g 1877-11-18 «Kars'ın düşüşü — Doğu cephesinin çözülmesi ve Aziziye t»
  - Artvin (m:Erzurum) · KAYMA · açık:AB- · G · en yakın anan: 105g 1877-11-18 «Kars'ın düşüşü — Doğu cephesinin çözülmesi ve Aziziye t»
  - Beri (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Borçka (m:Erzurum) · KAYMA · açık:AB- · G · en yakın anan: 105g 1877-11-18 «Kars'ın düşüşü — Doğu cephesinin çözülmesi ve Aziziye t»
  - Digor (m:Erzurum) · KAYMA · açık:AB- · G · en yakın anan: 105g 1877-11-18 «Kars'ın düşüşü — Doğu cephesinin çözülmesi ve Aziziye t»
  - Hanak (m:Erzurum) · KAYMA · açık:AB- · G · en yakın anan: 105g 1877-11-18 «Kars'ın düşüşü — Doğu cephesinin çözülmesi ve Aziziye t»
  - Hulo (Acara) (m:Erzurum) · KAYMA · açık:AB- · G · en yakın anan: 105g 1877-11-18 «Kars'ın düşüşü — Doğu cephesinin çözülmesi ve Aziziye t»
  - Iğdır (m:Erzurum) · KAYMA · açık:AB- · G · en yakın anan: 105g 1877-11-18 «Kars'ın düşüşü — Doğu cephesinin çözülmesi ve Aziziye t»
  - Küçükperveli (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Makhalak’auri (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Posof (m:Erzurum) · KAYMA · açık:AB- · G · en yakın anan: 105g 1877-11-18 «Kars'ın düşüşü — Doğu cephesinin çözülmesi ve Aziziye t»
  - Sarp (m:Erzurum) · KAYMA · açık:ABC · G · en yakın anan: 105g 1877-11-18 «Kars'ın düşüşü — Doğu cephesinin çözülmesi ve Aziziye t»
  - Saylıca (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Şavşat (m:Erzurum) · KAYMA · açık:AB- · G · en yakın anan: 105g 1877-11-18 «Kars'ın düşüşü — Doğu cephesinin çözülmesi ve Aziziye t»

**1878-07-13** kayip — 36/37 nokta açık · kapatan (4): 0g 1878-07-13 «Berlin Antlaşması»; 0g 1878-07-13 «Berlin Antlaşması: Bosna-Hersek A-M işgaline, Sırbistan»; 16g 1878-07-29 «Bosna-Hersek ve Yenipazar'ın Avusturya-Macaristan taraf»
  - Alacahisar (Kruševac) (m:Belgrad) · MADDESIZ · açık:ABC · TG · en yakın anan: 1332g 1882-03-06 «Sırbistan Krallığı'nın ilânı — eski Osmanlı tâbii prens»
  - Babadağı (Babadag) (m:Özi) · MADDESIZ · açık:AB- · G · en yakın anan: 987g 1881-03-26 «Romanya Krallığı ilan edildi — Prenslik Krallığa dönüşt»
  - Batum (m:Trabzon) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1878-07-13 «Berlin Antlaşması»
  - Belgrad (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 1332g 1882-03-06 «Sırbistan Krallığı'nın ilânı — eski Osmanlı tâbii prens»
  - Bolgrad (Bolhrad) (m:Yaş) · MADDESIZ · açık:AB- · TG · en yakın anan: 7110g 1859-01-24 «Eflak ve Boğdan'ın Cuza yönetiminde birleşmesi: Romanya»
  - Böğürdelen (Šabac) (m:Belgrad) · MADDESIZ · açık:AB- · TG · en yakın anan: 1332g 1882-03-06 «Sırbistan Krallığı'nın ilânı — eski Osmanlı tâbii prens»
  - Eski Zağra (Stara Zagora) (m:Sofya) · KAYMA · açık:ABC · G · en yakın anan: 190g 1878-01-04 «Sofya'nın Rus kuvvetlerince işgali»
  - Filibe (m:Sofya) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1878-07-13 «Berlin Antlaşması»
  - Hacıoğlupazarcığı (Dobrich) (m:Silistre) · KAYMA · açık:ABC · G · en yakın anan: 157g 1878-12-17 «Avrupa Komisyonu Romanya–Bulgaristan Dobruca sınırını ç»
  - Kahul (Cahul) (m:Yaş) · MADDESIZ · açık:AB- · TG · en yakın anan: 7110g 1859-01-24 «Eflak ve Boğdan'ın Cuza yönetiminde birleşmesi: Romanya»
  - Kili (m:Silistre) · KAYMA · açık:AB- · TG · en yakın anan: 157g 1878-12-17 «Avrupa Komisyonu Romanya–Bulgaristan Dobruca sınırını ç»
  - Kragujevac (m:Belgrad) · MADDESIZ · açık:ABC · TG · en yakın anan: 1332g 1882-03-06 «Sırbistan Krallığı'nın ilânı — eski Osmanlı tâbii prens»
  - Köstence (m:Silistre) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1878-07-13 «Berlin Antlaşması»
  - Köstendil (m:Sofya) · KAYMA · açık:ABC · G · en yakın anan: 190g 1878-01-04 «Sofya'nın Rus kuvvetlerince işgali»
  - Murvaneti (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: YOK
  - Niğbolu (m:Sofya) · KAYMA · açık:ABC · TG · en yakın anan: 190g 1878-01-04 «Sofya'nın Rus kuvvetlerince işgali»
  - Plevne (m:Sofya) · KAYMA · açık:ABC · TG · en yakın anan: 190g 1878-01-04 «Sofya'nın Rus kuvvetlerince işgali»
  - Podgorica (m:İşkodra) · MADDESIZ · açık:ABC · TG · en yakın anan: 11584g 1910-04-01 «Arnavutluk İsyanı: Kosova ve İşkodra'da silahlı direniş»
  - Prevadi (Provadia) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Rusçuk (m:Silistre) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1878-07-13 «Berlin Antlaşması»
  - Sarıkamış (m:Kars) · KAYMA · açık:ABC · TG · en yakın anan: 132g 1878-03-03 «Ayastefanos Antlaşması: Büyük Bulgaristan tasarısı»
  - Semendire (m:Belgrad) · MADDESIZ · açık:ABC · TG · en yakın anan: 1332g 1882-03-06 «Sırbistan Krallığı'nın ilânı — eski Osmanlı tâbii prens»
  - Silistre (m:-) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1878-07-13 «Berlin Antlaşması»
  - Sofya (m:-) · KAYMA · açık:ABC · TG · en yakın anan: 163g 1878-01-31 «Edirne Mütarekesi: 93 Harbi'nde silahların susması»
  - Tatarpazarcığı (m:Sofya) · KAYMA · açık:ABC · G · en yakın anan: 190g 1878-01-04 «Sofya'nın Rus kuvvetlerince işgali»
  - Tırnova (m:Sofya) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1878-07-13 «Berlin Antlaşması»
  - Varna (m:Silistre) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1878-07-13 «Berlin Antlaşması»
  - Vidin (m:Sofya) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1878-07-13 «Berlin Antlaşması»
  - Yagodina (Jagodina) (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: YOK
  - Yergöğü (Giurgiu) (m:Sofya) · KAYMA · açık:ABC · G · en yakın anan: 190g 1878-01-04 «Sofya'nın Rus kuvvetlerince işgali»
  - Çaçak (m:Belgrad) · MADDESIZ · açık:ABC · TG · en yakın anan: 1332g 1882-03-06 «Sırbistan Krallığı'nın ilânı — eski Osmanlı tâbii prens»
  - İbrail (m:Silistre) · KAYMA · açık:AB- · G · en yakın anan: 157g 1878-12-17 «Avrupa Komisyonu Romanya–Bulgaristan Dobruca sınırını ç»
  - İhtiman (m:Sofya) · KAYMA · açık:ABC · G · en yakın anan: 190g 1878-01-04 «Sofya'nın Rus kuvvetlerince işgali»
  - İshakçı (Isaccea) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: 167840g 1419-01-01 «Silistre ve Dobruca'nın geri alınışı — Mircea'nın ölümü»
  - Şehirköy (Pirot) (m:Sofya) · KAYMA · açık:ABC · TG · en yakın anan: 190g 1878-01-04 «Sofya'nın Rus kuvvetlerince işgali»
  - Şumnu (m:Silistre) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1878-07-13 «Berlin Antlaşması»

**1881-07-02** kayip — 2/3 nokta açık · kapatan (1): 0g 1881-07-02 «Teselya'nın Yunanistan'a bırakılması»
  - Arta (m:Yanya) · ESLESTIRME · açık:AB- · TG · en yakın anan: 0g 1881-07-02 «Teselya'nın Yunanistan'a bırakılması»
  - Yenişehir (Larissa) (m:Yanya) · ESLESTIRME · açık:AB- · TG · en yakın anan: 0g 1881-07-02 «Teselya'nın Yunanistan'a bırakılması»

**1882-09-01** kayip — 1/1 nokta açık · kapatan (3): 0g 1882-09 «Mısır'ın İngiliz işgali»; 12g 1882-09-13 «Tel el-Kebîr Muharebesi — Urâbî ordusunun dağılması»; 26g 1882-09-27 «Meksika–Guatemala Sınır Antlaşması imzalandı — Guatemal»
  - Bâra (m:Hartum) · MADDESIZ · açık:ABC · G · en yakın anan: 878g 1885-01-26 «Hartum'un düşüşü — Sudan'ın tamamının kaybı»

**1882-09-07** kayip — 2/2 nokta açık · kapatan (3): 6g 1882-09 «Mısır'ın İngiliz işgali»; 6g 1882-09-13 «Tel el-Kebîr Muharebesi — Urâbî ordusunun dağılması»; 20g 1882-09-27 «Meksika–Guatemala Sınır Antlaşması imzalandı — Guatemal»
  - Kordofan (m:-) · KAYMA · açık:ABC · - · en yakın anan: 134g 1883-01-19 «Ubeyyid'in düşüşü — Kordofan'ın Mehdî kuvvetlerine geçi»
  - Kordofan (Ubeyyid) (m:Hartum) · KAYMA · açık:ABC · - · en yakın anan: 134g 1883-01-19 «Ubeyyid'in düşüşü — Kordofan'ın Mehdî kuvvetlerine geçi»

**1883-12-23** kayip — 3/3 nokta açık · kapatan (7): 0g 1883-12-23 «Darfur'un Mehdî kuvvetlerine geçişi — Slatin Paşa'nın t»; 9g 1884-01-01 «Reji İdaresi kuruldu (tütün tekeli)»; 9g 1884-01-01 «Doğu Sudan'ın Mehdî kuvvetlerine geçişi — Tokar'ın kayb»
  - Cenîne (m:El-Fâşir) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1883-12-23 «Darfur'un Mehdî kuvvetlerine geçişi — Slatin Paşa'nın t»
  - El-Fâşir (m:-) · ESLESTIRME · açık:AB- · TG · en yakın anan: 0g 1883-12-23 «Darfur'un Mehdî kuvvetlerine geçişi — Slatin Paşa'nın t»
  - Nyala (m:El-Fâşir) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1883-12-23 «Darfur'un Mehdî kuvvetlerine geçişi — Slatin Paşa'nın t»

**1884-06-03** kayip — 1/1 nokta açık · kapatan (3): 0g 1884-06-03 «Hewett (Adua) Antlaşması — Bogos'un Habeşistan'a bırakı»; 12g 1884-05-22 «Novi-Margelan protokolü — Kaşgar kesiminde Rus–Çin sını»; 26g 1884-05-08 «Midhat Paşa'nın Tâif zindanında öldürülmesi»
  - Kerene (m:Sevâkin) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1884-06-03 «Hewett (Adua) Antlaşması — Bogos'un Habeşistan'a bırakı»

**1885-02-05** kayip — 5/6 nokta açık · kapatan (2): 0g 1885-02-05 «Masavva'nın İtalyan işgali — Kızıldeniz'in batı kıyısın»; 10g 1885-01-26 «Hartum'un düşüşü — Sudan'ın tamamının kaybı»
  - Akīk (m:Sevâkin) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1885-02-05 «Masavva'nın İtalyan işgali — Kızıldeniz'in batı kıyısın»
  - Arkîko (m:Sevâkin) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1885-02-05 «Masavva'nın İtalyan işgali — Kızıldeniz'in batı kıyısın»
  - Dahlak (m:Sevâkin) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1885-02-05 «Masavva'nın İtalyan işgali — Kızıldeniz'in batı kıyısın»
  - Halâib (m:Sevâkin) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1885-02-05 «Masavva'nın İtalyan işgali — Kızıldeniz'in batı kıyısın»
  - Sinkat (m:Sevâkin) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1885-02-05 «Masavva'nın İtalyan işgali — Kızıldeniz'in batı kıyısın»

**1885-09-18** kayip — 2/3 nokta açık · kapatan (2): 0g 1885-09-18 «Doğu Rumeli'nin Bulgaristan'a katılması»; 8g 1885-09-10 «Londra protokolü — Afgan–Rus sınırı Zülfikar'dan doğuya»
  - Eski Zağra (Stara Zagora) (m:Sofya) · MADDESIZ · açık:AB- · TG · en yakın anan: 2814g 1878-01-04 «Sofya'nın Rus kuvvetlerince işgali»
  - Tatarpazarcığı (m:Sofya) · MADDESIZ · açık:AB- · TG · en yakın anan: 2814g 1878-01-04 «Sofya'nın Rus kuvvetlerince işgali»

**1891-01-01** kazanc — 1/1 nokta açık · kapatan (2): 0g 1891-01-01 «Müleydâ Savaşı — İkinci Suud Devleti'nin sonu, Necid Râ»; 0g 1891-01-01 «MacLean hakem kararı: İran–Afganistan kuzey sınırı 39 d»
  - Şırnak (m:Bitlis) · MADDESIZ · açık:ABC · - · en yakın anan: 2557g 1884-01-01 «Siirt sancağı Diyarbekir'den Bitlis vilâyetine nakledil»

**1898-12-01** kayip — 4/5 nokta açık · kapatan (1): 0g 1898-12-01 «Girit'e özerklik»
  - Hanya (m:Kandiye (Girit)) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1898-12-01 «Girit'e özerklik»
  - Kandiye (Girit) (m:-) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1898-12-01 «Girit'e özerklik»
  - Sitiye (Sitia) (m:Kandiye (Girit)) · MADDESIZ · açık:AB- · G · en yakın anan: 11289g 1868-01-04 «Girit Nizamnâmesi: adaya geniş idarî imtiyazlar»
  - İsfakiye (Sfakia) (m:Kandiye (Girit)) · MADDESIZ · açık:AB- · G · en yakın anan: 11289g 1868-01-04 «Girit Nizamnâmesi: adaya geniş idarî imtiyazlar»

**1908-10-05** kayip — 12/33 nokta açık · kapatan (4): 0g 1908-10-05 «Bulgaristan'ın bağımsızlığı ve Bosna'nın ilhakı»; 0g 1908-10-05 «Bulgaristan bağımsızlığını ilan etti — Romanya ile sını»; 0g 1908-10-05 «Bulgaristan bağımsızlığını ilan etti — Osmanlı-Bulgar h»
  - Bihaç (Bihać) (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 44106g 1788-01-01 «Drežnik'in Avusturya'ca zaptı — Dubica Savaşı'nın batı »
  - Bosna Brod'u (Bosanski Brod) (m:-) · MADDESIZ · açık:AB- · TG · en yakın anan: YOK
  - Bosna Dubiçası (Bosanska Dubica) (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 43868g 1788-08-26 «Dubica'nın Avusturya'ya düşüşü»
  - Bosna Novi'si (Bosanski Novi) (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 43830g 1788-10-03 «Laudon Una üzerindeki Novi kalesini aldı»
  - Hacıoğlupazarcığı (Dobrich) (m:Silistre) · MADDESIZ · açık:ABC · TG · en yakın anan: 1770g 1913-08-10 «Bükreş Antlaşması: Güney Dobruca Romanya'ya geçti»
  - Krupa (Bosanska Krupa) (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 125555g 1565-01-01 «Krupa Kalesi'nin Osmanlılarca alınması»
  - Ostrovica (Stara Ostrovica, Kulen Vakuf) (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 140896g 1523-01-01 «Una vadisinde Ostrovica Kalesi'nin fethi»
  - Prevadi (Provadia) (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: YOK
  - Rusçuk (m:Silistre) · MADDESIZ · açık:ABC · TG · en yakın anan: 10504g 1880-01-01 «Silistre yakınında (Arap Tabya) Romanya–Bulgaristan sın»
  - Silistre (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 1770g 1913-08-10 «Bükreş Antlaşması: Güney Dobruca Romanya'ya geçti»
  - Varna (m:Silistre) · MADDESIZ · açık:ABC · TG · en yakın anan: 10504g 1880-01-01 «Silistre yakınında (Arap Tabya) Romanya–Bulgaristan sın»
  - Şumnu (m:Silistre) · MADDESIZ · açık:ABC · TG · en yakın anan: 10504g 1880-01-01 «Silistre yakınında (Arap Tabya) Romanya–Bulgaristan sın»

**1912-10-18** kayip — 12/26 nokta açık · kapatan (7): 0g 1912-10-18 «Uşi Antlaşması: Trablusgarp ve Bingazi'nin İtalya'ya te»; 0g 1912-10-18 «Uşi Antlaşması — Libya'nın Tunus ve Cezayir sınırları O»; 5g 1912-10-23 «Şark Ordusu'nun bozgunu ve Çatalca hattına çekiliş — Ku»
  - Beyzâ (Kirene) (m:Bingazi) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1912-10-18 «Uşi Antlaşması: Trablusgarp ve Bingazi'nin İtalya'ya te»
  - Bingazi (m:-) · ESLESTIRME · açık:A-- · TG · en yakın anan: 0g 1912-10-18 «Uşi Antlaşması: Trablusgarp ve Bingazi'nin İtalya'ya te»
  - Cağbûb (m:Bingazi) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1912-10-18 «Uşi Antlaşması: Trablusgarp ve Bingazi'nin İtalya'ya te»
  - Câlû (m:Bingazi) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1912-10-18 «Uşi Antlaşması: Trablusgarp ve Bingazi'nin İtalya'ya te»
  - Derne (m:Bingazi) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1912-10-18 «Uşi Antlaşması: Trablusgarp ve Bingazi'nin İtalya'ya te»
  - Ecdâbiye (m:Bingazi) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1912-10-18 «Uşi Antlaşması: Trablusgarp ve Bingazi'nin İtalya'ya te»
  - Gât (m:Murzuk (Fizan)) · MADDESIZ · açık:ABC · TG · en yakın anan: 656g 1911-01-01 «Fransızlar Canet'i (Djanet) işgal etti»
  - Merc (m:Bingazi) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1912-10-18 «Uşi Antlaşması: Trablusgarp ve Bingazi'nin İtalya'ya te»
  - Murzuk (Fizan) (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 122646g 1577-01-01 «Fizan sancağının Trablusgarp'a bağlanışı — Murzuk ve Sa»
  - Sebha (m:Murzuk (Fizan)) · MADDESIZ · açık:ABC · TG · en yakın anan: 122646g 1577-01-01 «Fizan sancağının Trablusgarp'a bağlanışı — Murzuk ve Sa»
  - Tobruk (m:Bingazi) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1912-10-18 «Uşi Antlaşması: Trablusgarp ve Bingazi'nin İtalya'ya te»
  - Ubârî (m:Murzuk (Fizan)) · MADDESIZ · açık:ABC · TG · en yakın anan: 122646g 1577-01-01 «Fizan sancağının Trablusgarp'a bağlanışı — Murzuk ve Sa»

**1912-10-26** kayip — 6/6 nokta açık · kapatan (8): 3g 1912-10-23 «Şark Ordusu'nun bozgunu ve Çatalca hattına çekiliş — Ku»; 8g 1912-11-03 «Edirne kuşatması başladı»; 8g 1912-10-18 «Uşi Antlaşması: Trablusgarp ve Bingazi'nin İtalya'ya te»
  - Doyran (m:-) · MADDESIZ · açık:AB- · - · en yakın anan: 197626g 1371-09-26 «Dejanoviç Prensliği (Kostadin-ili) Osmanlı vasalı oldu»
  - Gevgili (Gevgelija) (m:-) · MADDESIZ · açık:AB- · - · en yakın anan: YOK
  - Köprülü (Veles) (m:-) · MADDESIZ · açık:AB- · - · en yakın anan: 64777g 1735-06-19 «Baghavard (Arpaçay) bozgunu — Kafkasya'nın Nâdir Han'a »
  - Ustrumca (Strumica) (m:Köstendil) · MADDESIZ · açık:AB- · - · en yakın anan: 2623g 1920-01-01 «Neuilly Antlaşması'nın Bulgaristan–SHS sınırı: Çariçin,»
  - Üsküp (m:-) · MADDESIZ · açık:AB- · - · en yakın anan: 939g 1910-04-01 «Arnavutluk İsyanı: Kosova ve İşkodra'da silahlı direniş»
  - İştip (Štip) (m:Köstendil) · MADDESIZ · açık:AB- · - · en yakın anan: 196798g 1374-01-01 «Struma ve Mesta vadileri: Köstendil, Petriç, Nevrokop v»

**1912-11-03** kayip — 1/1 nokta açık · kapatan (9): 0g 1912-11-03 «Edirne kuşatması başladı»; 8g 1912-11-11 «Sisam'ın Osmanlı idaresinden çıkışı»; 11g 1912-10-23 «Şark Ordusu'nun bozgunu ve Çatalca hattına çekiliş — Ku»
  - Prizren (m:Üsküb) · MADDESIZ · açık:AB- · G · en yakın anan: 167052g 1455-06-20 «Prizren'in fethi — Kosova'da Osmanlı sancak merkezi»

**1912-11-28** kayip — 11/14 nokta açık · kapatan (5): 0g 1912-11-28 «Arnavutluk'un istiklâlinin ilânı — Avlonya'da İsmâil Ke»; 1g 1912-11-29 «Ohri ve Debre'de Osmanlı hâkimiyetinin sona ermesi»; 10g 1912-11-18 «Manastır'ın Sırp kuvvetlerince işgali»
  - Akçahisar (Kruja) (m:İşkodra) · ESLESTIRME · açık:AB- · TG · en yakın anan: 0g 1912-11-28 «Arnavutluk'un istiklâlinin ilânı — Avlonya'da İsmâil Ke»
  - Ayasaranda (Sarandë) (m:Delvine) · ESLESTIRME · açık:AB- · TG · en yakın anan: 0g 1912-11-28 «Arnavutluk'un istiklâlinin ilânı — Avlonya'da İsmâil Ke»
  - Berat (m:Yanya) · ESLESTIRME · açık:AB- · TG · en yakın anan: 0g 1912-11-28 «Arnavutluk'un istiklâlinin ilânı — Avlonya'da İsmâil Ke»
  - Butrint (Butrinto) (m:Yanya) · ESLESTIRME · açık:AB- · TG · en yakın anan: 0g 1912-11-28 «Arnavutluk'un istiklâlinin ilânı — Avlonya'da İsmâil Ke»
  - Delvine (m:Yanya) · ESLESTIRME · açık:AB- · TG · en yakın anan: 0g 1912-11-28 «Arnavutluk'un istiklâlinin ilânı — Avlonya'da İsmâil Ke»
  - Draç (m:İşkodra) · ESLESTIRME · açık:AB- · TG · en yakın anan: 0g 1912-11-28 «Arnavutluk'un istiklâlinin ilânı — Avlonya'da İsmâil Ke»
  - Ergiri (Ergirikasrı) (m:Yanya) · ESLESTIRME · açık:AB- · TG · en yakın anan: 0g 1912-11-28 «Arnavutluk'un istiklâlinin ilânı — Avlonya'da İsmâil Ke»
  - Görice (Korçë) (m:-) · MADDESIZ · açık:AB- · TG · en yakın anan: YOK
  - Leş (Alessio) (m:İşkodra) · ESLESTIRME · açık:AB- · TG · en yakın anan: 0g 1912-11-28 «Arnavutluk'un istiklâlinin ilânı — Avlonya'da İsmâil Ke»
  - Mat (Mati) (m:İşkodra) · ESLESTIRME · açık:AB- · TG · en yakın anan: 0g 1912-11-28 «Arnavutluk'un istiklâlinin ilânı — Avlonya'da İsmâil Ke»
  - İlbasan (Elbasan) (m:İşkodra) · ESLESTIRME · açık:AB- · TG · en yakın anan: 0g 1912-11-28 «Arnavutluk'un istiklâlinin ilânı — Avlonya'da İsmâil Ke»

**1912-11-29** kayip — 1/2 nokta açık · kapatan (5): 0g 1912-11-29 «Ohri ve Debre'de Osmanlı hâkimiyetinin sona ermesi»; 1g 1912-11-28 «Arnavutluk'un istiklâlinin ilânı — Avlonya'da İsmâil Ke»; 11g 1912-11-18 «Manastır'ın Sırp kuvvetlerince işgali»
  - Debre (Dibra) (m:Üsküp) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1912-11-29 «Ohri ve Debre'de Osmanlı hâkimiyetinin sona ermesi»

**1913-03-26** kayip — 3/12 nokta açık · kapatan (4): 0g 1913-03-26 «Edirne'nin Bulgarlara düşüşü»; 15g 1913-03-11 «Anglo-Alman Nijerya-Kamerun Sınır Antlaşması imzalandı »; 20g 1913-03-06 «Yanya'nın düşüşü — Epir'in ve Parga'nın kaybı»
  - Küfkaynapınarı (Azatlı) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Uluköy (Akçadam) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Vize (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: 198775g 1369-01-01 «Istıranca kaleleri: Pınarhisar, Kırkkilise (Kırklareli)»

**1913-05-30** kayip — 16/24 nokta açık · kapatan (5): 0g 1913-05-30 «Londra Antlaşması — Rumeli'nin kaybı»; 0g 1913-05-30 «Londra Antlaşması: Arnavutluk'un sınırları büyük devlet»; 0g 1913-05-30 «Londra Antlaşması — Enez-Midye hattının batısı Balkan m»
  - Drama (m:Selanik) · KAYMA · açık:ABC · G · en yakın anan: 72g 1913-08-10 «Bükreş Antlaşması — Batı Trakya ve Kavala havzası Bulga»
  - Girit (Resmo) (m:Kandiye (Girit)) · KAYMA · açık:ABC · G · en yakın anan: 168g 1913-11-14 «Atina Antlaşması: Yunanistan ile barış ve Selanik-Yanya»
  - Hanya (m:Kandiye (Girit)) · MADDESIZ · açık:ABC · G · en yakın anan: 5293g 1898-12-01 «Girit'e özerklik»
  - Kandiye (Girit) (m:-) · KAYMA · açık:ABC · G · en yakın anan: 168g 1913-11-14 «Atina Antlaşması: Yunanistan ile barış ve Selanik-Yanya»
  - Kavala (m:Selanik) · KAYMA · açık:ABC · G · en yakın anan: 72g 1913-08-10 «Bükreş Antlaşması — Batı Trakya ve Kavala havzası Bulga»
  - Malak Dervent (Lalkovo) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Nevrokop (Gotse Delçev) (m:Selanik) · KAYMA · açık:ABC · G · en yakın anan: 72g 1913-08-10 «Bükreş Antlaşması: Yunanistan–Sırbistan sınırı doğdu»
  - Petriç (m:Selanik) · KAYMA · açık:ABC · G · en yakın anan: 72g 1913-08-10 «Bükreş Antlaşması: Yunanistan–Sırbistan sınırı doğdu»
  - Praviște (Eleftheroupoli) (m:-) · KAYMA · açık:ABC · G · en yakın anan: 72g 1913-08-10 «Bükreş Antlaşması — Batı Trakya ve Kavala havzası Bulga»
  - Serez (m:Selanik) · KAYMA · açık:ABC · G · en yakın anan: 72g 1913-08-10 «Bükreş Antlaşması — Batı Trakya ve Kavala havzası Bulga»
  - Sitiye (Sitia) (m:Kandiye (Girit)) · MADDESIZ · açık:ABC · G · en yakın anan: 16582g 1868-01-04 «Girit Nizamnâmesi: adaya geniş idarî imtiyazlar»
  - Stérna (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Távri (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - Umur Fakih (Fakia) (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK
  - İsfakiye (Sfakia) (m:Kandiye (Girit)) · MADDESIZ · açık:ABC · G · en yakın anan: 16582g 1868-01-04 «Girit Nizamnâmesi: adaya geniş idarî imtiyazlar»
  - İskeçe (m:Selanik) · KAYMA · açık:ABC · G · en yakın anan: 72g 1913-08-10 «Bükreş Antlaşması: Yunanistan–Sırbistan sınırı doğdu»

**1913-07-08** kayip — 3/4 nokta açık · kapatan (5): 0g 1913-07-08 «İbn Suud Lahsa'yı aldı — Osmanlı'nın Körfez kıyısındaki»; 9g 1913-06-29 «II. Balkan Savaşı'nın başlaması: müttefiklerin paylaşım»; 13g 1913-07-21 «Edirne'nin geri alınışı»
  - Cübeyl (m:Basra) · ESLESTIRME · açık:ABC · G · en yakın anan: 0g 1913-07-08 «İbn Suud Lahsa'yı aldı — Osmanlı'nın Körfez kıyısındaki»
  - Katîf (m:Basra) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1913-07-08 «İbn Suud Lahsa'yı aldı — Osmanlı'nın Körfez kıyısındaki»
  - Ukayr (Uceyr) (m:Basra) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1913-07-08 «İbn Suud Lahsa'yı aldı — Osmanlı'nın Körfez kıyısındaki»

**1913-07-21** kazanc — 3/14 nokta açık · kapatan (8): 0g 1913-07-21 «Edirne'nin geri alınışı»; 8g 1913-07-29 «Katar'dan Osmanlı feragati — Londra Sözleşmesi»; 13g 1913-07-08 «İbn Suud Lahsa'yı aldı — Osmanlı'nın Körfez kıyısındaki»
  - Küfkaynapınarı (Azatlı) (m:-) · MADDESIZ · açık:AB- · TG · en yakın anan: YOK
  - Uluköy (Akçadam) (m:-) · MADDESIZ · açık:AB- · TG · en yakın anan: YOK
  - Vize (m:-) · MADDESIZ · açık:AB- · TG · en yakın anan: 198892g 1369-01-01 «Istıranca kaleleri: Pınarhisar, Kırkkilise (Kırklareli)»

**1913-07-29** kayip — 1/2 nokta açık · kapatan (8): 0g 1913-07-29 «Katar'dan Osmanlı feragati — Londra Sözleşmesi»; 8g 1913-07-21 «Edirne'nin geri alınışı»; 12g 1913-08-10 «Bükreş Antlaşması — Batı Trakya ve Kavala havzası Bulga»
  - Katar Yarımadası (iç, dolgu) (m:-) · ESLESTIRME · açık:AB- · TG · en yakın anan: 0g 1913-07-29 «Katar'dan Osmanlı feragati — Londra Sözleşmesi»

**1913-11-01** kazanc — 1/2 nokta açık · kapatan (7): 0g 1913-11-01 «Bozcaada ve İmroz'un geri alınışı — Atina Antlaşması»; 4g 1913-11-05 «Rus–Çin Pekin Deklarasyonu — Dış Moğolistan'ın sınırlar»; 11g 1913-11-12 «Sırbistan–Karadağ sınır anlaşması: Yenipazar sancağı bö»
  - İmroz (m:Edirne) · ESLESTIRME · açık:A-- · TG · en yakın anan: 0g 1913-11-01 «Bozcaada ve İmroz'un geri alınışı — Atina Antlaşması»

**1913-11-14** kayip — 16/19 nokta açık · kapatan (7): 0g 1913-11-14 «Atina Antlaşması: Yunanistan ile barış ve Selanik-Yanya»; 2g 1913-11-12 «Sırbistan–Karadağ sınır anlaşması: Yenipazar sancağı bö»; 3g 1913-11-17 «İstanbul Protokolü — Türk-İran sınırının tahdidi»
  - Aydonat (Paramythia) (m:Yanya) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1913-11-14 «Atina Antlaşması: Yunanistan ile barış ve Selanik-Yanya»
  - Filat (Filiates) (m:Yanya) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1913-11-14 «Atina Antlaşması: Yunanistan ile barış ve Selanik-Yanya»
  - Filorina (Florina) (m:-) · MADDESIZ · açık:AB- · TG · en yakın anan: YOK
  - Karaferye (Veria) (m:-) · MADDESIZ · açık:AB- · TG · en yakın anan: 192307g 1387-05-08 «Karaferye'nin (Veria) Osmanlı hâkimiyetine girmesi»
  - Kesriye (Kastoria) (m:-) · MADDESIZ · açık:AB- · TG · en yakın anan: YOK
  - Kılkış (Avrathisar) (m:-) · MADDESIZ · açık:AB- · TG · en yakın anan: YOK
  - Lanzaka (Lagkadas) (m:-) · MADDESIZ · açık:AB- · TG · en yakın anan: YOK
  - Margiliç (Margariti) (m:Yanya) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1913-11-14 «Atina Antlaşması: Yunanistan ile barış ve Selanik-Yanya»
  - Parga (m:Yanya) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1913-11-14 «Atina Antlaşması: Yunanistan ile barış ve Selanik-Yanya»
  - Preveze (m:Yanya) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1913-11-14 «Atina Antlaşması: Yunanistan ile barış ve Selanik-Yanya»
  - Souli (Sûli) (m:Yanya) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1913-11-14 «Atina Antlaşması: Yunanistan ile barış ve Selanik-Yanya»
  - Vodina (Edessa) (m:-) · MADDESIZ · açık:AB- · TG · en yakın anan: 192434g 1387-01-01 «Vodina'nın fethi (1386-1387 kışı)»
  - Vonitsa (m:Yanya) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1913-11-14 «Atina Antlaşması: Yunanistan ile barış ve Selanik-Yanya»
  - Yanya (m:-) · ESLESTIRME · açık:A-- · TG · en yakın anan: 0g 1913-11-14 «Atina Antlaşması: Yunanistan ile barış ve Selanik-Yanya»
  - Yenice-i Vardar (m:-) · MADDESIZ · açık:AB- · TG · en yakın anan: YOK
  - İgumenitsa (Gomenice) (m:Yanya) · ESLESTIRME · açık:ABC · TG · en yakın anan: 0g 1913-11-14 «Atina Antlaşması: Yunanistan ile barış ve Selanik-Yanya»

**1915-01-01** kayip — 1/1 nokta açık · kapatan (6): 10g 1914-12-22 «Sarıkamış Harekâtı: Kafkas cephesinde felaket»; 13g 1915-01-14 «Birinci Kanal Harekâtı: Süveyş'e Sina çölü üzerinden ta»; 14g 1914-12-18 «Mısır'ın İngiliz himayesine alınarak sultanlık ilan edi»
  - Ammâre (m:Basra) · KAYMA · açık:ABC · T · en yakın anan: 40g 1914-11-22 «Şattülarap çıkarması — Basra'nın düşüşü ve Irak cephesi»

**1915-06-10** kayip — 1/1 nokta açık · kapatan (7): 2g 1915-06-12 «Horgos nehri boyunca Rus–Çin sınırlandırma protokolü»; 3g 1915-06-07 «Kiahta Üçlü Anlaşması — Dış Moğolistan'ın sınırı sancak»; 14g 1915-05-27 «Sevk ve İskân (Tehcir) Kanunu'nun çıkarılması»
  - Kemeran (Kamaran) (m:Sana) · MADDESIZ · açık:ABC · - · en yakın anan: 3569g 1905-09-01 «San'a'nın geri alınması: İmam Yahyâ isyanının bastırılm»

**1916-06-10** kayip — 2/3 nokta açık · kapatan (1): 0g 1916-06-10 «Şerif Hüseyin isyanı»
  - Hurma (Tâif doğusu) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 42163g 1801-01-01 «Tâif çevresi kabileleri Vehhâbî nüfuzuna girdi — Türabe»
  - Türabe (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 36685g 1816-01-01 «Mısır garnizonları güney Hicaz'da Türabe, Bîşe ve Rânye»

**1916-06-16** kayip — 1/2 nokta açık · kapatan (2): 6g 1916-06-10 «Şerif Hüseyin isyanı»; 30g 1916-07-16 «Bayburt ve Gümüşhane'nin Rus işgali»
  - Râbiğ (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: YOK

**1916-07-27** kayip — 1/2 nokta açık · kapatan (5): 0g 1916-07-27 «Yenbu'nun Şerif Hüseyin kuvvetlerine kaybı»; 3g 1916-07-24 «Erzincan'ın Rus işgali»; 11g 1916-07-16 «Bayburt ve Gümüşhane'nin Rus işgali»
  - Bedir (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK

**1917-03-11** kayip — 2/16 nokta açık · kapatan (2): 0g 1917-03-11 «Bağdat'ın kaybı»; 4g 1917-03-07 «Necef'in İngiliz işgali»
  - Halepçe (m:Şehrizor) · MADDESIZ · açık:ABC · G · en yakın anan: 104819g 1630-03-16 «Hüsrev Paşa'nın Şehrizor'da Gülanber Kalesi'ni yeniden »
  - Kifri (m:Şehrizor) · MADDESIZ · açık:ABC · G · en yakın anan: 104819g 1630-03-16 «Hüsrev Paşa'nın Şehrizor'da Gülanber Kalesi'ni yeniden »

**1917-11-07** kayip — 1/2 nokta açık · kapatan (3): 0g 1917-11-07 «Üçüncü Gazze Muharebesi — Gazze ve Han Yûnus'un kaybı»; 7g 1917-10-31 «Birüssebi'nin düşüşü — Refah hattının iki yakası İngili»; 29g 1917-12-06 «Finlandiya bağımsızlığını ilan etti — İsveç ve Norveç i»
  - Han Yûnus (m:Kudüs) · ESLESTIRME · açık:A-- · G · en yakın anan: 0g 1917-11-07 «Üçüncü Gazze Muharebesi — Gazze ve Han Yûnus'un kaybı»

**1918-01-01** kayip — 4/5 nokta açık · kapatan (3): 3g 1918-01-04 «Sovyet Rusya Finlandiya'nın bağımsızlığını tanıdı»; 23g 1917-12-09 «Kudüs'ün kaybı»; 26g 1917-12-06 «Finlandiya bağımsızlığını ilan etti — İsveç ve Norveç i»
  - Medâin-i Sâlih (el-Hicr) (m:Medine) · MADDESIZ · açık:ABC · - · en yakın anan: 374g 1919-01-10 «Medine'nin teslimi»
  - Tebük (m:Medine) · MADDESIZ · açık:ABC · - · en yakın anan: 374g 1919-01-10 «Medine'nin teslimi»
  - el-Ulâ (m:Medine) · MADDESIZ · açık:ABC · - · en yakın anan: 374g 1919-01-10 «Medine'nin teslimi»
  - el-Vech (m:Medine) · MADDESIZ · açık:ABC · - · en yakın anan: 374g 1919-01-10 «Medine'nin teslimi»

**1918-03-03** kazanc — 1/1 nokta açık · kapatan (8): 0g 1918-03-03 «Brest-Litovsk Antlaşması: Kars, Ardahan ve Batum'un ger»; 1g 1918-03-02 «Rize'nin kurtuluşu: Doğu Karadeniz kıyısının geri alını»; 5g 1918-02-26 «Erzincan'ın kurtuluşu»
  - Aşkale (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: 738g 1916-02-24 «Aşkale'nin Rus işgali»

**1918-04-01** kayip — 1/1 nokta açık · kapatan (7): 3g 1918-03-29 «Brest-Litovsk Barışı yürürlüğe girdi: Rusya batı toprak»; 4g 1918-04-05 «II. George Tupou'nun ölümü, Sālote Tupou III'ün tahta ç»; 7g 1918-04-08 «Besarabya Romanya ile birleşti: fiilî sınır Dinyester'e»
  - Tuz Hurmatu (m:Şehrizor) · KAYMA · açık:ABC · - · en yakın anan: 36g 1918-05-07 «Kerkük'ün İngiliz işgali»

**1918-04-14** kazanc — 1/2 nokta açık · kapatan (5): 0g 1918-04-14 «Batum'un geri alınışı»; 6g 1918-04-08 «Besarabya Romanya ile birleşti: fiilî sınır Dinyester'e»; 9g 1918-04-05 «II. George Tupou'nun ölümü, Sālote Tupou III'ün tahta ç»
  - Murvaneti (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: YOK

**1918-05-25** kazanc — 1/3 nokta açık · kapatan (5): 0g 1918-05-25 «Elviye-i Selâse: Kars ve Ardahan'ın geri alınışı»; 1g 1918-05-26 «Gürcistan bağımsızlığını ilân etti — Transkafkasya Seym»; 2g 1918-05-27 «Kerkük'ün geri alınışı»
  - Ardahan (m:Erzurum) · ESLESTIRME · açık:A-- · TG · en yakın anan: 0g 1918-05-25 «Elviye-i Selâse: Kars ve Ardahan'ın geri alınışı»

**1918-09-21** kayip — 1/1 nokta açık · kapatan (2): 6g 1918-09-15 «Kafkas İslâm Ordusu'nun Bakü'yü alması»; 10g 1918-10-01 «Şam'ın kaybı»
  - Nablus (m:Kudüs) · KAYMA · açık:ABC · - · en yakın anan: 286g 1917-12-09 «Kudüs'ün kaybı»

**1918-09-27** kayip — 1/1 nokta açık · kapatan (3): 4g 1918-10-01 «Şam'ın kaybı»; 12g 1918-09-15 «Kafkas İslâm Ordusu'nun Bakü'yü alması»; 30g 1918-10-27 «Halep'in Arap ve İngiliz kuvvetlerince işgali»
  - Maan (m:Kudüs) · KAYMA · açık:ABC · - · en yakın anan: 292g 1917-12-09 «Kudüs'ün kaybı»

**1918-10-01** kayip — 1/4 nokta açık · kapatan (8): 0g 1918-10-01 «Şam'ın kaybı»; 16g 1918-09-15 «Kafkas İslâm Ordusu'nun Bakü'yü alması»; 26g 1918-10-27 «Halep'in Arap ve İngiliz kuvvetlerince işgali»
  - Hama (m:Trablusşam) · ESLESTIRME · açık:AB- · G · en yakın anan: 0g 1918-10-01 «Şam'ın kaybı»

**1918-10-08** kayip — 2/3 nokta açık · kapatan (10): 7g 1918-10-01 «Şam'ın kaybı»; 19g 1918-10-27 «Halep'in Arap ve İngiliz kuvvetlerince işgali»; 20g 1918-10-28 «Çekoslovakya'nın bağımsızlık ilânı — Habsburg mirasında»
  - Deyrülkamer (Dayr al-Kamer) (m:-) · MADDESIZ · açık:AB- · - · en yakın anan: 632g 1920-07-01 «Han Meyselûn — Faysal dönemi bitti, Suriye Fransız mand»
  - Sûr (Tyre) — Lübnan (m:Sayda) · MADDESIZ · açık:AB- · - · en yakın anan: 632g 1920-07-01 «Han Meyselûn — Faysal dönemi bitti, Suriye Fransız mand»

**1918-10-13** kayip — 1/1 nokta açık · kapatan (13): 12g 1918-10-01 «Şam'ın kaybı»; 14g 1918-10-27 «Halep'in Arap ve İngiliz kuvvetlerince işgali»; 15g 1918-10-28 «Çekoslovakya'nın bağımsızlık ilânı — Habsburg mirasında»
  - Trablusşam (m:-) · MADDESIZ · açık:AB- · - · en yakın anan: 627g 1920-07-01 «Han Meyselûn — Faysal dönemi bitti, Suriye Fransız mand»

**1918-10-26** kayip — 2/4 nokta açık · kapatan (17): 1g 1918-10-27 «Halep'in Arap ve İngiliz kuvvetlerince işgali»; 2g 1918-10-28 «Çekoslovakya'nın bağımsızlık ilânı — Habsburg mirasında»; 3g 1918-10-29 «Sloven-Hırvat-Sırp Devleti'nin ilânı — Hırvat Saboru Ha»
  - Qaţţīnah (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: YOK
  - Rakka (m:Diyarbakır) · MADDESIZ · açık:ABC · - · en yakın anan: 614g 1920-07-01 «Han Meyselûn — Faysal dönemi bitti, Suriye Fransız mand»

**1918-10-30** kayip — 21/26 nokta açık · kapatan (18): 0g 1918-10-30 «Mondros Mütarekesi»; 0g 1918-10-30 «Avusturya Cumhuriyeti'nin kuruluşu — Habsburg mirasının»; 1g 1918-10-29 «Sloven-Hırvat-Sırp Devleti'nin ilânı — Hırvat Saboru Ha»
  - Babū (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Cumai (Birlikköy) (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Ebha (Asir) (m:Sana) · MADDESIZ · açık:ABC · G · en yakın anan: 4807g 1905-09-01 «San'a'nın geri alınması: İmam Yahyâ isyanının bastırılm»
  - Erbil (m:Şehrizor) · MADDESIZ · açık:ABC · G · en yakın anan: 63924g 1743-10-23 «Musul Savunması — Nâdir Şah'ın püskürtülmesi»
  - Ferasan (Farasan) (m:Sana) · MADDESIZ · açık:ABC · G · en yakın anan: 4807g 1905-09-01 «San'a'nın geri alınması: İmam Yahyâ isyanının bastırılm»
  - Hudeyde (m:Sana) · MADDESIZ · açık:ABC · G · en yakın anan: 4807g 1905-09-01 «San'a'nın geri alınması: İmam Yahyâ isyanının bastırılm»
  - Jadlā’ (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK
  - Kerkük (m:Şehrizor) · KAYMA · açık:ABC · G · en yakın anan: 156g 1918-05-27 «Kerkük'ün geri alınışı»
  - Kevkebân (m:Sana) · MADDESIZ · açık:ABC · G · en yakın anan: 4807g 1905-09-01 «San'a'nın geri alınması: İmam Yahyâ isyanının bastırılm»
  - Malikiye (Derik) (m:Diyarbakır) · MADDESIZ · açık:ABC · G · en yakın anan: 610g 1920-07-01 «Han Meyselûn — Faysal dönemi bitti, Suriye Fransız mand»
  - Mersin (m:Adana) · MADDESIZ · açık:ABC · G · en yakın anan: 1086g 1921-10-20 «Ankara İtilâfnâmesi: Fransa ile barış ve güney cephesin»
  - Moha (m:Sana) · MADDESIZ · açık:ABC · G · en yakın anan: 4807g 1905-09-01 «San'a'nın geri alınması: İmam Yahyâ isyanının bastırılm»
  - Sa'de (m:Sana) · MADDESIZ · açık:ABC · G · en yakın anan: 4807g 1905-09-01 «San'a'nın geri alınması: İmam Yahyâ isyanının bastırılm»
  - Sana (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 4807g 1905-09-01 «San'a'nın geri alınması: İmam Yahyâ isyanının bastırılm»
  - Silopi (m:Diyarbakır) · MADDESIZ · açık:ABC · G · en yakın anan: 147234g 1515-09-19 «Âmid'in (Diyarbekir) fethi ve Diyarbekir beylerbeyiliği»
  - Sincan (m:-) · MADDESIZ · açık:AB- · G · en yakın anan: 7169g 1899-03-14 «Macdonald hattı notası — Keşmir–Sincan sınırı önerildi,»
  - Taiz (m:Sana) · MADDESIZ · açık:ABC · G · en yakın anan: 4807g 1905-09-01 «San'a'nın geri alınması: İmam Yahyâ isyanının bastırılm»
  - Zebîd (m:Sana) · MADDESIZ · açık:ABC · G · en yakın anan: 4807g 1905-09-01 «San'a'nın geri alınması: İmam Yahyâ isyanının bastırılm»
  - Şehrizor (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 102068g 1639-05-17 «Kasr-ı Şirin Antlaşması»
  - Şehâre (m:Sana) · MADDESIZ · açık:ABC · G · en yakın anan: 4807g 1905-09-01 «San'a'nın geri alınması: İmam Yahyâ isyanının bastırılm»
  - Ḩīmū (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK

**1918-11-08** kayip — 10/10 nokta açık · kapatan (20): 3g 1918-11-11 «Polonya'nın bağımsızlığı — Naiplik Konseyi ordunun komu»; 3g 1918-11-11 «Compiègne Ateşkesi — Alsas-Loren'in tahliyesi ve Fransı»; 4g 1918-11-12 «Avusturya Cumhuriyeti'nin ilânı — Habsburg monarşisinin»
  - Akra (m:Musul) · MADDESIZ · açık:ABC · - · en yakın anan: 1261g 1915-05-27 «Sevk ve İskân (Tehcir) Kanunu'nun çıkarılması»
  - Duhok (m:Musul) · MADDESIZ · açık:ABC · - · en yakın anan: 1261g 1915-05-27 «Sevk ve İskân (Tehcir) Kanunu'nun çıkarılması»
  - Gōrabī (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: YOK
  - Musul (m:-) · ESLESTIRME · açık:ABC · - · en yakın anan: 9g 1918-10-30 «Mondros Mütarekesi»
  - Rewândiz (m:Musul) · MADDESIZ · açık:ABC · - · en yakın anan: 1261g 1915-05-27 «Sevk ve İskân (Tehcir) Kanunu'nun çıkarılması»
  - Sincar (m:Musul) · MADDESIZ · açık:ABC · - · en yakın anan: 1261g 1915-05-27 «Sevk ve İskân (Tehcir) Kanunu'nun çıkarılması»
  - Telafer (m:Musul) · MADDESIZ · açık:ABC · - · en yakın anan: 1261g 1915-05-27 «Sevk ve İskân (Tehcir) Kanunu'nun çıkarılması»
  - Tirwānīsh (m:-) · MADDESIZ · açık:ABC · - · en yakın anan: YOK
  - Zaho (m:Musul) · MADDESIZ · açık:ABC · - · en yakın anan: 1261g 1915-05-27 «Sevk ve İskân (Tehcir) Kanunu'nun çıkarılması»
  - İmâdiye (Amêdî) (m:Musul) · MADDESIZ · açık:ABC · - · en yakın anan: 1261g 1915-05-27 «Sevk ve İskân (Tehcir) Kanunu'nun çıkarılması»

**1918-12-01** kayip — 2/2 nokta açık · kapatan (16): 0g 1918-12-01 «Sırp-Hırvat-Sloven Krallığı ile Büyük Romanya'nın kurul»; 0g 1918-12-01 «Romen ordusu Brașov'a (Brassó) girdi ve törenle karşıla»; 0g 1918-12-01 «Sırp-Hırvat-Sloven Krallığı kuruldu — Yunanistan'ın kuz»
  - Batum (m:Trabzon) · KAYMA · açık:ABC · G · en yakın anan: 77g 1918-09-15 «Kafkas İslâm Ordusu'nun Bakü'yü alması»
  - Murvaneti (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: YOK

**1920-04-23** kayip — 215/248 nokta açık · kapatan (8): 0g 1920-04-23 «Türkiye Büyük Millet Meclisi'nin açılışı»; 3g 1920-04-26 «Hârizm Halk Cumhuriyeti ilan edildi»; 4g 1920-04-27 «Kızıl Ordu Azerbaycan'ı işgal etti — Demokratik Cumhuri»
  - Absu (Hypsu) (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Adana (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 545g 1921-10-20 «Ankara İtilâfnâmesi: Fransa ile barış ve güney cephesin»
  - Adranos (Orhaneli) (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Akhisar (Pamukova) (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 60g 1920-06-22 «Yunan yaz taarruzu — Akhisar, Soma, Balıkesir ve Alaşeh»
  - Aksaray (m:Konya) · MADDESIZ · açık:ABC · TG · en yakın anan: 7452g 1899-11-27 «Konya-Bağdat hattı imtiyazının Almanlara verilmesi»
  - Akçakale (m:Halep) · KAYMA · açık:AB- · TG · en yakın anan: 69g 1920-07-01 «Han Meyselûn — Faysal dönemi bitti, Suriye Fransız mand»
  - Akşehir (m:Konya) · MADDESIZ · açık:ABC · TG · en yakın anan: 7452g 1899-11-27 «Konya-Bağdat hattı imtiyazının Almanlara verilmesi»
  - Alanya (m:Antalya) · KAYMA · açık:ABC · TG · en yakın anan: 360g 1919-04-29 «Antalya'nın İtalyan işgali»
  - Alaşehir (m:Kütahya) · KAYMA · açık:ABC · TG · en yakın anan: 60g 1920-06-22 «Yunan yaz taarruzu — Akhisar, Soma, Balıkesir ve Alaşeh»
  - Amasya (m:Sivas) · KAYMA · açık:ABC · TG · en yakın anan: 184g 1919-10-22 «Amasya Protokolü: İstanbul hükümetiyle Heyet-i Temsîliy»
  - Anamur (m:Antalya) · KAYMA · açık:ABC · TG · en yakın anan: 360g 1919-04-29 «Antalya'nın İtalyan işgali»
  - Antalya (m:-) · KAYMA · açık:ABC · TG · en yakın anan: 300g 1919-06-28 «Burdur'un İtalyan işgali — Isparta'ya yönelen bölüğün g»
  - Antep (m:Halep) · KAYMA · açık:AB- · TG · en yakın anan: 69g 1920-07-01 «Han Meyselûn — Faysal dönemi bitti, Suriye Fransız mand»
  - Arapkir (m:Malatya) · MADDESIZ · açık:ABC · TG · en yakın anan: 189826g 1400-08-01 «Besni, Timur'un Sivas ve Malatya seferi sırasında Memlü»
  - Ardahan (m:Erzurum) · KAYMA · açık:ABC · TG · en yakın anan: 275g 1919-07-23 «Erzurum Kongresi: Doğu vilâyetlerinin millî direniş kar»
  - Arhavi (m:Trabzon) · MADDESIZ · açık:ABC · TG · en yakın anan: 789g 1918-02-24 «Trabzon'un Rus işgalinden kurtuluşu»
  - Armutlu (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Ayasuluk (Selçuk) (m:İzmir) · KAYMA · açık:ABC · TG · en yakın anan: 344g 1919-05-15 «İzmir'in işgali»
  - Aydos Kalesi (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Aydın (m:İzmir) · KAYMA · açık:ABC · TG · en yakın anan: 298g 1919-06-30 «Aydın'ın kısa süreli kurtarılışı ve 4 Temmuz'da yeniden»
  - Ayvalık (m:Bursa) · KAYMA · açık:ABC · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Aşkale (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 1520g 1916-02-24 «Aşkale'nin Rus işgali»
  - Bacirge (Esendere) (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: YOK
  - Balat (Palatia) (m:Muğla) · KAYMA · açık:ABC · TG · en yakın anan: 275g 1919-07-23 «Muğla'nın İtalyan işgali»
  - Balıkesir (m:Bursa) · KAYMA · açık:ABC · TG · en yakın anan: 60g 1920-06-22 «Yunan yaz taarruzu — Akhisar, Soma, Balıkesir ve Alaşeh»
  - Balıklı (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: YOK
  - Bargiri (Muradiye) (m:Van) · MADDESIZ · açık:ABC · TG · en yakın anan: 123723g 1581-07-26 «Feragat Bildirgesi (Plakkaat van Verlatinghe) — Holland»
  - Bayburt (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 794g 1918-02-19 «Bayburt ve Gümüşhane'nin kurtuluşu»
  - Başkale (m:Van) · MADDESIZ · açık:ABC · TG · en yakın anan: 123723g 1581-07-26 «Feragat Bildirgesi (Plakkaat van Verlatinghe) — Holland»
  - Behisni (Besni) (m:Malatya) · MADDESIZ · açık:AB- · TG · en yakın anan: 183464g 1418-01-01 «Dulkadıroğlu Mehmed Bey Darende'yi geri aldı, Besni'yi »
  - Behramkale (Assos) (m:Bursa) · KAYMA · açık:ABC · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Bergama (m:İzmir) · KAYMA · açık:ABC · TG · en yakın anan: 344g 1919-05-15 «İzmir'in işgali»
  - Beyşehir (m:Konya) · MADDESIZ · açık:ABC · TG · en yakın anan: 7452g 1899-11-27 «Konya-Bağdat hattı imtiyazının Almanlara verilmesi»
  - Biga (m:Bursa) · KAYMA · açık:ABC · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Bilecik (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Birgi (m:İzmir) · KAYMA · açık:ABC · TG · en yakın anan: 344g 1919-05-15 «İzmir'in işgali»
  - Bitlis (m:Van) · KAYMA · açık:ABC · TG · en yakın anan: 158g 1920-09-28 «Doğu Cephesi harekâtı başladı — Kâzım Karabekir Ermenis»
  - Bodrum (m:Muğla) · KAYMA · açık:ABC · TG · en yakın anan: 275g 1919-07-23 «Muğla'nın İtalyan işgali»
  - Bolayır (m:Edirne) · KAYMA · açık:ABC · TG · en yakın anan: 88g 1920-07-20 «Yunan ordusunun Doğu Trakya'yı işgali — Edirne ve Kırkl»
  - Bozcaada (m:Edirne) · KAYMA · açık:ABC · TG · en yakın anan: 88g 1920-07-20 «Yunan ordusunun Doğu Trakya'yı işgali — Edirne ve Kırkl»
  - Bozüyük (m:Bursa) · KAYMA · açık:ABC · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Boğaziçi (Rumeli yakası) (m:-) · MADDESIZ · açık:AB- · TG · en yakın anan: 527g 1918-11-13 «İtilâf donanmasının İstanbul önlerine gelişi ve şehrin »
  - Burdur (m:Kütahya) · KAYMA · açık:ABC · TG · en yakın anan: 300g 1919-06-28 «Burdur'un İtalyan işgali — Isparta'ya yönelen bölüğün g»
  - Bursa (m:-) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Ceylanpınar (m:Diyarbakır) · MADDESIZ · açık:AB- · TG · en yakın anan: 147775g 1515-09-19 «Âmid'in (Diyarbekir) fethi ve Diyarbekir beylerbeyiliği»
  - Cibri (Güçlü) (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: YOK
  - Cizre (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 545g 1921-10-20 «Ankara İtilafnamesi — Türkiye-Suriye sınırının tarifi»
  - Darende (m:Maraş) · KAYMA · açık:ABC · TG · en yakın anan: 72g 1920-02-11 «Maraş'ın kurtuluşu — Fransızlar şehri boşalttı»
  - Datça (m:Muğla) · KAYMA · açık:ABC · TG · en yakın anan: 275g 1919-07-23 «Muğla'nın İtalyan işgali»
  - Demirköy (m:Edirne) · KAYMA · açık:AB- · TG · en yakın anan: 88g 1920-07-20 «Yunan ordusunun Doğu Trakya'yı işgali — Edirne ve Kırkl»
  - Denizli (m:İzmir) · KAYMA · açık:ABC · TG · en yakın anan: 344g 1919-05-15 «İzmir'in işgali»
  - Dereköy (Kırklareli) (m:Edirne) · KAYMA · açık:ABC · TG · en yakın anan: 88g 1920-07-20 «Yunan ordusunun Doğu Trakya'yı işgali — Edirne ve Kırkl»
  - Dimbos (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Divriği (m:Malatya) · MADDESIZ · açık:ABC · TG · en yakın anan: 189673g 1401-01-01 «Divriği, Timur tehlikesi yüzünden yeniden Memlükler'e v»
  - Diyarbakır (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 147775g 1515-09-19 «Âmid'in (Diyarbekir) fethi ve Diyarbekir beylerbeyiliği»
  - Domaniç (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Doğubayazıt (m:Erzurum) · KAYMA · açık:ABC · TG · en yakın anan: 275g 1919-07-23 «Erzurum Kongresi: Doğu vilâyetlerinin millî direniş kar»
  - Dörtyol (m:Adana) · MADDESIZ · açık:ABC · TG · en yakın anan: 545g 1921-10-20 «Ankara İtilâfnâmesi: Fransa ile barış ve güney cephesin»
  - Edirne (m:-) · KAYMA · açık:ABC · TG · en yakın anan: 88g 1920-07-20 «Yunan ordusunun Doğu Trakya'yı işgali — Edirne ve Kırkl»
  - Edremit (m:Bursa) · KAYMA · açık:ABC · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Elbistan (m:Maraş) · KAYMA · açık:ABC · TG · en yakın anan: 72g 1920-02-11 «Maraş'ın kurtuluşu — Fransızlar şehri boşalttı»
  - Elmalı (m:Antalya) · KAYMA · açık:ABC · TG · en yakın anan: 360g 1919-04-29 «Antalya'nın İtalyan işgali»
  - Emet (Eğrigöz) (m:Kütahya) · KAYMA · açık:ABC · TG · en yakın anan: 343g 1921-04-01 «İkinci İnönü Muharebesi: Yunan taarruzunun ikinci kez k»
  - Enez (m:Edirne) · KAYMA · açık:ABC · TG · en yakın anan: 88g 1920-07-20 «Yunan ordusunun Doğu Trakya'yı işgali — Edirne ve Kırkl»
  - Erciş (m:Van) · MADDESIZ · açık:ABC · TG · en yakın anan: 123723g 1581-07-26 «Feragat Bildirgesi (Plakkaat van Verlatinghe) — Holland»
  - Erdek (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Ermenek (m:Konya) · MADDESIZ · açık:ABC · TG · en yakın anan: 7452g 1899-11-27 «Konya-Bağdat hattı imtiyazının Almanlara verilmesi»
  - Ermeni Derbendi (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Erzin (m:Adana) · MADDESIZ · açık:ABC · TG · en yakın anan: 545g 1921-10-20 «Ankara İtilâfnâmesi: Fransa ile barış ve güney cephesin»
  - Erzincan (m:Erzurum) · KAYMA · açık:ABC · TG · en yakın anan: 275g 1919-07-23 «Erzurum Kongresi: Doğu vilâyetlerinin millî direniş kar»
  - Erzurum (m:-) · KAYMA · açık:ABC · TG · en yakın anan: 158g 1920-09-28 «Doğu Cephesi harekâtı başladı — Kâzım Karabekir Ermenis»
  - Eskişehir (m:Kütahya) · KAYMA · açık:ABC · TG · en yakın anan: 34g 1920-03-20 «İngilizlerin Eskişehir'i boşaltması»
  - Eğirdir (m:Kütahya) · KAYMA · açık:ABC · TG · en yakın anan: 343g 1921-04-01 «İkinci İnönü Muharebesi: Yunan taarruzunun ikinci kez k»
  - Fethiye (Makri) (m:Muğla) · KAYMA · açık:ABC · TG · en yakın anan: 275g 1919-07-23 «Muğla'nın İtalyan işgali»
  - Finike (m:Antalya) · KAYMA · açık:ABC · TG · en yakın anan: 360g 1919-04-29 «Antalya'nın İtalyan işgali»
  - Gelibolu (m:Edirne) · KAYMA · açık:ABC · TG · en yakın anan: 88g 1920-07-20 «Yunan ordusunun Doğu Trakya'yı işgali — Edirne ve Kırkl»
  - Gemlik (Kios) (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Geyve (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Giresun (m:Trabzon) · MADDESIZ · açık:ABC · TG · en yakın anan: 789g 1918-02-24 «Trabzon'un Rus işgalinden kurtuluşu»
  - Göksun (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 113847g 1608-08-09 «Alaçayır zaferi ve Kalenderoğlu isyanının bastırılması»
  - Gölköy (Habsamana) (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: YOK
  - Gölyazı (Apollonia) (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Gürün (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 145479g 1522-01-01 «Dulkadir ülkesinin ilhakı — Maraş merkezli Dulkadır eya»
  - Harmankaya (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Harput (Elazığ) (m:Diyarbakır) · MADDESIZ · açık:ABC · TG · en yakın anan: 147550g 1516-05-01 «Koçhisar (Kızıltepe) Savaşı ve Mardin ile Urfa'nın feth»
  - Hasankeyf (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 167393g 1462-01-01 «Akkoyunlu Uzun Hasan, Hısnıkeyfâ Eyyûbî kolunu ortadan »
  - Havsa (m:Edirne) · KAYMA · açık:ABC · TG · en yakın anan: 88g 1920-07-20 «Yunan ordusunun Doğu Trakya'yı işgali — Edirne ve Kırkl»
  - Hopa (m:Erzurum) · KAYMA · açık:ABC · TG · en yakın anan: 275g 1919-07-23 «Erzurum Kongresi: Doğu vilâyetlerinin millî direniş kar»
  - Hoşap (Mahmudi) (m:Van) · MADDESIZ · açık:ABC · TG · en yakın anan: 123723g 1581-07-26 «Feragat Bildirgesi (Plakkaat van Verlatinghe) — Holland»
  - Hısn-ı Mansûr (Adıyaman) (m:Malatya) · MADDESIZ · açık:AB- · TG · en yakın anan: 189826g 1400-08-01 «Besni, Timur'un Sivas ve Malatya seferi sırasında Memlü»
  - Ilgın (m:Konya) · MADDESIZ · açık:ABC · TG · en yakın anan: 7452g 1899-11-27 «Konya-Bağdat hattı imtiyazının Almanlara verilmesi»
  - Isparta (m:Kütahya) · KAYMA · açık:ABC · TG · en yakın anan: 300g 1919-06-28 «Burdur'un İtalyan işgali — Isparta'ya yönelen bölüğün g»
  - Karabiga (m:Biga) · MADDESIZ · açık:ABC · TG · en yakın anan: 210126g 1345-01-01 «Karesi Beyliği'nin ilhakı: Balıkesir, Bergama, Biga, Ed»
  - Karacahisar (m:Kütahya) · KAYMA · açık:ABC · TG · en yakın anan: 343g 1921-04-01 «İkinci İnönü Muharebesi: Yunan taarruzunun ikinci kez k»
  - Karahisâr-ı Sâhib (Afyon) (m:Kütahya) · KAYMA · açık:ABC · TG · en yakın anan: 334g 1921-03-23 «Yunan ordusunun ikinci taarruzu — Bilecik, Afyon ve Ada»
  - Karahisâr-ı Şarkî (Şebinkarahisar) (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 163153g 1473-08-11 «Otlukbeli Savaşı»
  - Karaman (m:Konya) · MADDESIZ · açık:ABC · TG · en yakın anan: 7452g 1899-11-27 «Konya-Bağdat hattı imtiyazının Almanlara verilmesi»
  - Karamürsel (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Karapınar (m:Karaman) · MADDESIZ · açık:ABC · TG · en yakın anan: 165202g 1468-01-01 «Karaman'ın kesin ilhakı»
  - Karatigin (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Karaçepüş (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Karpuzlu (Yenikarpuzlu) (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: YOK
  - Kars (m:Erzurum) · KAYMA · açık:ABC · TG · en yakın anan: 96g 1920-07-28 «Kızılordu'nun Nahçıvan'a girişi»
  - Kayseri (m:Sivas) · KAYMA · açık:ABC · TG · en yakın anan: 232g 1919-09-04 «Sivas Kongresi: millî direnişin tek çatı altında birleş»
  - Kaş (Antiphellos) (m:Antalya) · KAYMA · açık:ABC · TG · en yakın anan: 360g 1919-04-29 «Antalya'nın İtalyan işgali»
  - Kelkit (m:Erzincan) · MADDESIZ · açık:ABC · TG · en yakın anan: 787g 1918-02-26 «Erzincan'ın kurtuluşu»
  - Kemah (m:Erzurum) · KAYMA · açık:ABC · TG · en yakın anan: 275g 1919-07-23 «Erzurum Kongresi: Doğu vilâyetlerinin millî direniş kar»
  - Kestel (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Keşan (m:Edirne) · KAYMA · açık:ABC · TG · en yakın anan: 88g 1920-07-20 «Yunan ordusunun Doğu Trakya'yı işgali — Edirne ve Kırkl»
  - Kilis (m:Halep) · KAYMA · açık:ABC · TG · en yakın anan: 69g 1920-07-01 «Han Meyselûn — Faysal dönemi bitti, Suriye Fransız mand»
  - Kilise (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 140000g 1537-01-01 «Norveç'in Danimarka tacına bağlı bir eyalete indirgenme»
  - Kilitbahir (m:Edirne) · KAYMA · açık:ABC · TG · en yakın anan: 88g 1920-07-20 «Yunan ordusunun Doğu Trakya'yı işgali — Edirne ve Kırkl»
  - Kirmasti (M.Kemalpaşa) (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Kite (Kete) (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Kofçaz (m:Edirne) · KAYMA · açık:ABC · TG · en yakın anan: 88g 1920-07-20 «Yunan ordusunun Doğu Trakya'yı işgali — Edirne ve Kırkl»
  - Konya (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 7452g 1899-11-27 «Konya-Bağdat hattı imtiyazının Almanlara verilmesi»
  - Kulacahisar (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Kuşadası (m:İzmir) · KAYMA · açık:ABC · TG · en yakın anan: 344g 1919-05-15 «İzmir'in işgali»
  - Kâhta (m:Malatya) · MADDESIZ · açık:AB- · TG · en yakın anan: 189826g 1400-08-01 «Besni, Timur'un Sivas ve Malatya seferi sırasında Memlü»
  - Köprühisar (Yenişehir) (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Küfkaynapınarı (Azatlı) (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: YOK
  - Kütahya (m:-) · KAYMA · açık:ABC · TG · en yakın anan: 343g 1921-04-01 «İkinci İnönü Muharebesi: Yunan taarruzunun ikinci kez k»
  - Kırklareli (m:Edirne) · KAYMA · açık:ABC · TG · en yakın anan: 88g 1920-07-20 «Yunan ordusunun Doğu Trakya'yı işgali — Edirne ve Kırkl»
  - Ladik (Amasya) (m:Sivas) · KAYMA · açık:ABC · TG · en yakın anan: 184g 1919-10-22 «Amasya Protokolü: İstanbul hükümetiyle Heyet-i Temsîliy»
  - Lalapaşa (m:Edirne) · KAYMA · açık:ABC · TG · en yakın anan: 88g 1920-07-20 «Yunan ordusunun Doğu Trakya'yı işgali — Edirne ve Kırkl»
  - Leblebicihisar (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Lefke (Osmaneli) (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Lüleburgaz (m:Edirne) · KAYMA · açık:AB- · TG · en yakın anan: 88g 1920-07-20 «Yunan ordusunun Doğu Trakya'yı işgali — Edirne ve Kırkl»
  - Malatya (m:Maraş) · KAYMA · açık:AB- · TG · en yakın anan: 72g 1920-02-11 «Maraş'ın kurtuluşu — Fransızlar şehri boşalttı»
  - Malkara (m:Edirne) · KAYMA · açık:ABC · TG · en yakın anan: 88g 1920-07-20 «Yunan ordusunun Doğu Trakya'yı işgali — Edirne ve Kırkl»
  - Manisa (m:İzmir) · KAYMA · açık:ABC · TG · en yakın anan: 333g 1919-05-26 «Yunan kuvvetlerinin Manisa ve Aydın'a girişi»
  - Maraş (m:-) · KAYMA · açık:ABC · TG · en yakın anan: 72g 1920-02-11 «Maraş'ın kurtuluşu — Fransızlar şehri boşalttı»
  - Mardin (m:Diyarbakır) · MADDESIZ · açık:ABC · TG · en yakın anan: 147185g 1517-05-01 «Mardin kalesinin teslimi — Diyarbekir'in güneyinde Safe»
  - Marmara Adası (m:Edirne) · KAYMA · açık:AB- · TG · en yakın anan: 88g 1920-07-20 «Yunan ordusunun Doğu Trakya'yı işgali — Edirne ve Kırkl»
  - Marmaracık (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Marmaris (m:Muğla) · KAYMA · açık:ABC · TG · en yakın anan: 275g 1919-07-23 «Muğla'nın İtalyan işgali»
  - Maydos (Eceabat) (m:Edirne) · KAYMA · açık:ABC · TG · en yakın anan: 88g 1920-07-20 «Yunan ordusunun Doğu Trakya'yı işgali — Edirne ve Kırkl»
  - Mekece (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Mercihamis (Yurtbağı) (m:-) · MADDESIZ · açık:AB- · TG · en yakın anan: YOK
  - Meriç (İpsala kuzeyi) (m:Edirne) · KAYMA · açık:ABC · TG · en yakın anan: 88g 1920-07-20 «Yunan ordusunun Doğu Trakya'yı işgali — Edirne ve Kırkl»
  - Merzifon (m:Sivas) · KAYMA · açık:ABC · TG · en yakın anan: 232g 1919-09-04 «Sivas Kongresi: millî direnişin tek çatı altında birleş»
  - Mesudiye (Milas) (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 180756g 1425-06-01 «Batı Anadolu beyliklerinin yeniden ilhakı: Menteşe ve A»
  - Midyat (m:Mardin) · MADDESIZ · açık:ABC · TG · en yakın anan: 147185g 1517-05-01 «Mardin kalesinin teslimi — Diyarbekir'in güneyinde Safe»
  - Mihaliç (Karacabey) (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Milas (m:Muğla) · KAYMA · açık:ABC · TG · en yakın anan: 275g 1919-07-23 «Muğla'nın İtalyan işgali»
  - Mudanya (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Muğla (m:-) · KAYMA · açık:ABC · TG · en yakın anan: 275g 1919-07-23 «Muğla'nın İtalyan işgali»
  - Niksar (m:Sivas) · KAYMA · açık:ABC · TG · en yakın anan: 232g 1919-09-04 «Sivas Kongresi: millî direnişin tek çatı altında birleş»
  - Niğde (m:Konya) · MADDESIZ · açık:ABC · TG · en yakın anan: 7452g 1899-11-27 «Konya-Bağdat hattı imtiyazının Almanlara verilmesi»
  - Nusaybin (m:Diyarbakır) · MADDESIZ · açık:ABC · TG · en yakın anan: 545g 1921-10-20 «Ankara İtilafnamesi — Türkiye-Suriye sınırının tarifi»
  - Ordu (Bayramlı) (m:Trabzon) · MADDESIZ · açık:ABC · TG · en yakın anan: 789g 1918-02-24 «Trabzon'un Rus işgalinden kurtuluşu»
  - Osmancık (m:Sivas) · KAYMA · açık:ABC · TG · en yakın anan: 232g 1919-09-04 «Sivas Kongresi: millî direnişin tek çatı altında birleş»
  - Palu (m:Diyarbakır) · MADDESIZ · açık:ABC · TG · en yakın anan: 147550g 1516-05-01 «Koçhisar (Kızıltepe) Savaşı ve Mardin ile Urfa'nın feth»
  - Payas (m:Halep) · KAYMA · açık:ABC · TG · en yakın anan: 69g 1920-07-01 «Han Meyselûn — Faysal dönemi bitti, Suriye Fransız mand»
  - Pazaryeri (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Reşadiye (İskefsir) (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: YOK
  - Rize (m:Trabzon) · MADDESIZ · açık:ABC · TG · en yakın anan: 783g 1918-03-02 «Rize'nin kurtuluşu: Doğu Karadeniz kıyısının geri alını»
  - Samsun (m:Sivas) · KAYMA · açık:ABC · TG · en yakın anan: 232g 1919-09-04 «Sivas Kongresi: millî direnişin tek çatı altında birleş»
  - Saroz kuzey kıyısı (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 205743g 1357-01-01 «Süleyman Paşa döneminde Trakya ilerleyişi: Malkara, İps»
  - Sarıkamış (m:Kars) · KAYMA · açık:ABC · TG · en yakın anan: 158g 1920-09-28 «Doğu Cephesi harekâtı başladı — Kâzım Karabekir Ermenis»
  - Seydişehir (m:Konya) · MADDESIZ · açık:ABC · TG · en yakın anan: 7452g 1899-11-27 «Konya-Bağdat hattı imtiyazının Almanlara verilmesi»
  - Siirt (m:Diyarbakır) · MADDESIZ · açık:ABC · TG · en yakın anan: 13261g 1884-01-01 «Siirt sancağı Diyarbekir'den Bitlis vilâyetine nakledil»
  - Silifke (m:Konya) · MADDESIZ · açık:ABC · TG · en yakın anan: 7452g 1899-11-27 «Konya-Bağdat hattı imtiyazının Almanlara verilmesi»
  - Silivri (m:-) · MADDESIZ · açık:AB- · TG · en yakın anan: 181221g 1424-02-22 «II. Murad ile Bizans barışı — Bizans yeniden haraç ödem»
  - Simav (m:Kütahya) · KAYMA · açık:ABC · TG · en yakın anan: 343g 1921-04-01 «İkinci İnönü Muharebesi: Yunan taarruzunun ikinci kez k»
  - Sivas (m:-) · KAYMA · açık:ABC · TG · en yakın anan: 232g 1919-09-04 «Sivas Kongresi: millî direnişin tek çatı altında birleş»
  - Suruç (m:Halep) · KAYMA · açık:AB- · TG · en yakın anan: 69g 1920-07-01 «Han Meyselûn — Faysal dönemi bitti, Suriye Fransız mand»
  - Söke (m:İzmir) · KAYMA · açık:ABC · TG · en yakın anan: 344g 1919-05-15 «İzmir'in işgali»
  - Söğüt (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Tarsus (m:Adana) · MADDESIZ · açık:ABC · TG · en yakın anan: 545g 1921-10-20 «Ankara İtilâfnâmesi: Fransa ile barış ve güney cephesin»
  - Tavşanlı (m:Kütahya) · KAYMA · açık:ABC · TG · en yakın anan: 343g 1921-04-01 «İkinci İnönü Muharebesi: Yunan taarruzunun ikinci kez k»
  - Tekirdağ (m:Edirne) · KAYMA · açık:AB- · TG · en yakın anan: 88g 1920-07-20 «Yunan ordusunun Doğu Trakya'yı işgali — Edirne ve Kırkl»
  - Terme (m:Sivas) · KAYMA · açık:ABC · TG · en yakın anan: 232g 1919-09-04 «Sivas Kongresi: millî direnişin tek çatı altında birleş»
  - Tire (m:İzmir) · KAYMA · açık:ABC · TG · en yakın anan: 344g 1919-05-15 «İzmir'in işgali»
  - Tokat (m:Sivas) · KAYMA · açık:ABC · TG · en yakın anan: 232g 1919-09-04 «Sivas Kongresi: millî direnişin tek çatı altında birleş»
  - Tosya (m:Kastamonu) · MADDESIZ · açık:ABC · TG · en yakın anan: 192655g 1392-11-01 «Kastamonu'nun ilhakı»
  - Trabzon (m:-) · KAYMA · açık:ABC · TG · en yakın anan: 158g 1920-09-28 «Doğu Cephesi harekâtı başladı — Kâzım Karabekir Ermenis»
  - Ulubat (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Uluborlu (m:Kütahya) · KAYMA · açık:ABC · TG · en yakın anan: 343g 1921-04-01 «İkinci İnönü Muharebesi: Yunan taarruzunun ikinci kez k»
  - Uluköy (Akçadam) (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: YOK
  - Ulukışla (m:Niğde) · MADDESIZ · açık:ABC · TG · en yakın anan: 165202g 1468-01-01 «Karaman'ın kesin ilhakı»
  - Uzunköprü (m:Edirne) · KAYMA · açık:ABC · TG · en yakın anan: 88g 1920-07-20 «Yunan ordusunun Doğu Trakya'yı işgali — Edirne ve Kırkl»
  - Uşak (m:Kütahya) · KAYMA · açık:ABC · TG · en yakın anan: 128g 1920-08-29 «Uşak'ın Yunan işgali»
  - Van (m:-) · KAYMA · açık:ABC · TG · en yakın anan: 158g 1920-09-28 «Doğu Cephesi harekâtı başladı — Kâzım Karabekir Ermenis»
  - Vize (m:-) · MADDESIZ · açık:AB- · TG · en yakın anan: 201360g 1369-01-01 «Istıranca kaleleri: Pınarhisar, Kırkkilise (Kırklareli)»
  - Yalova (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Yalvaç (m:Kütahya) · KAYMA · açık:ABC · TG · en yakın anan: 343g 1921-04-01 «İkinci İnönü Muharebesi: Yunan taarruzunun ikinci kez k»
  - Yarhisar (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Yenişehir (Bursa) (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Yumurtalık (m:Adana) · MADDESIZ · açık:ABC · TG · en yakın anan: 545g 1921-10-20 «Ankara İtilâfnâmesi: Fransa ile barış ve güney cephesin»
  - Yüksekova (Gever) (m:Van) · MADDESIZ · açık:ABC · TG · en yakın anan: 123723g 1581-07-26 «Feragat Bildirgesi (Plakkaat van Verlatinghe) — Holland»
  - Zamantı (Pınarbaşı) (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 145479g 1522-01-01 «Dulkadir ülkesinin ilhakı — Maraş merkezli Dulkadır eya»
  - Çaldıran (m:Van) · MADDESIZ · açık:ABC · TG · en yakın anan: 13261g 1884-01-01 «Siirt sancağı Diyarbekir'den Bitlis vilâyetine nakledil»
  - Çanakkale (m:Bursa) · KAYMA · açık:ABC · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - Çarşamba (m:Sivas) · KAYMA · açık:ABC · TG · en yakın anan: 232g 1919-09-04 «Sivas Kongresi: millî direnişin tek çatı altında birleş»
  - Çemişgezek (m:Diyarbakır) · MADDESIZ · açık:ABC · TG · en yakın anan: 147775g 1515-09-19 «Âmid'in (Diyarbekir) fethi ve Diyarbekir beylerbeyiliği»
  - Çeşme (m:İzmir) · KAYMA · açık:ABC · TG · en yakın anan: 344g 1919-05-15 «İzmir'in işgali»
  - Çimpe (m:Edirne) · KAYMA · açık:ABC · TG · en yakın anan: 88g 1920-07-20 «Yunan ordusunun Doğu Trakya'yı işgali — Edirne ve Kırkl»
  - Çorlu (m:Edirne) · KAYMA · açık:AB- · TG · en yakın anan: 88g 1920-07-20 «Yunan ordusunun Doğu Trakya'yı işgali — Edirne ve Kırkl»
  - Çölemerik (Hakkâri) (m:Van) · MADDESIZ · açık:ABC · TG · en yakın anan: 123723g 1581-07-26 «Feragat Bildirgesi (Plakkaat van Verlatinghe) — Holland»
  - Özalp (Saray) (m:Van) · MADDESIZ · açık:ABC · TG · en yakın anan: 73161g 1720-01-01 «Levnî'nin Surnâme-i Vehbî'yi resimlemesi»
  - Ünye (m:Trabzon) · MADDESIZ · açık:ABC · TG · en yakın anan: 789g 1918-02-24 «Trabzon'un Rus işgalinden kurtuluşu»
  - Üsküdar (m:İzmit) · MADDESIZ · açık:AB- · TG · en yakın anan: 431g 1921-06-28 «İzmit'in kurtuluşu — Adapazarı'nın ardından»
  - İmralı Adası (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - İmroz (m:Edirne) · KAYMA · açık:ABC · TG · en yakın anan: 88g 1920-07-20 «Yunan ordusunun Doğu Trakya'yı işgali — Edirne ve Kırkl»
  - İnegöl (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - İpsala (m:Edirne) · KAYMA · açık:ABC · TG · en yakın anan: 88g 1920-07-20 «Yunan ordusunun Doğu Trakya'yı işgali — Edirne ve Kırkl»
  - İshaklı (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: 202456g 1366-01-01 «Karamanoğlu Alâeddin Bey Konya, Aksaray ve Niğde'yi Kar»
  - İzmir (m:-) · KAYMA · açık:ABC · TG · en yakın anan: 109g 1920-08-10 «Sevr Antlaşması — imparatorluğun paylaşım metni»
  - İznik (m:Bursa) · KAYMA · açık:AB- · TG · en yakın anan: 76g 1920-07-08 «Bursa'nın Yunan işgali»
  - İğneada (m:Edirne) · KAYMA · açık:AB- · TG · en yakın anan: 88g 1920-07-20 «Yunan ordusunun Doğu Trakya'yı işgali — Edirne ve Kırkl»
  - Şarköy (m:Edirne) · KAYMA · açık:ABC · TG · en yakın anan: 88g 1920-07-20 «Yunan ordusunun Doğu Trakya'yı işgali — Edirne ve Kırkl»
  - Şemdinli (Şemdinni) (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: YOK
  - Şeyhrumi (Yücelen) (m:-) · MADDESIZ · açık:ABC · TG · en yakın anan: YOK
  - Şırnak (m:Bitlis) · MADDESIZ · açık:ABC · TG · en yakın anan: 1354g 1916-08-08 «Bitlis'in Rus işgalinden kurtarılması»

**1923-07-24** kayip — 22/23 nokta açık · kapatan (3): 0g 1923-07-24 «Lozan Antlaşması»; 0g 1923-07-24 «Lozan Antlaşması — Türk-Yunan sınırı Meriç ve Karaağaç »; 0g 1923-07-24 «Lozan Antlaşması — Türk-Bulgar sınırının teyidi»
  - Batnoz (Patmos) (m:Rodos) · MADDESIZ · açık:ABC · G · en yakın anan: 4090g 1912-05-12 «Onikiada'nın İtalyan işgali»
  - Bozbaba (Ay Strati) (m:Selanik) · MADDESIZ · açık:ABC · G · en yakın anan: 3539g 1913-11-14 «Atina Antlaşması: Yunanistan ile barış ve Selanik-Yanya»
  - Fornoz (Fourni) (m:İzmir) · KAYMA · açık:ABC · G · en yakın anan: 318g 1922-09-09 «Büyük Taarruz ve İzmir'in kurtuluşu»
  - Herke (Halki) (m:Rodos) · MADDESIZ · açık:ABC · G · en yakın anan: 4090g 1912-05-12 «Onikiada'nın İtalyan işgali»
  - Karpatos (m:Rodos) · MADDESIZ · açık:ABC · G · en yakın anan: 4090g 1912-05-12 «Onikiada'nın İtalyan işgali»
  - Kaşot (Kasos) (m:Rodos) · MADDESIZ · açık:ABC · G · en yakın anan: 4090g 1912-05-12 «Onikiada'nın İtalyan işgali»
  - Kelemez (Kalimnos) (m:Rodos) · MADDESIZ · açık:ABC · G · en yakın anan: 4090g 1912-05-12 «Onikiada'nın İtalyan işgali»
  - Limni (m:Selanik) · MADDESIZ · açık:ABC · G · en yakın anan: 1728g 1918-10-30 «Mondros Mütarekesi»
  - Lindos (m:Rodos) · MADDESIZ · açık:ABC · G · en yakın anan: 4098g 1912-05-04 «Rodos'un İtalyan işgali»
  - Midilli (m:İzmir) · KAYMA · açık:ABC · G · en yakın anan: 318g 1922-09-09 «Büyük Taarruz ve İzmir'in kurtuluşu»
  - Molova (Molyvos) (m:İzmir) · KAYMA · açık:ABC · G · en yakın anan: 318g 1922-09-09 «Büyük Taarruz ve İzmir'in kurtuluşu»
  - Nikarya (İkarya) (m:İzmir) · KAYMA · açık:ABC · G · en yakın anan: 318g 1922-09-09 «Büyük Taarruz ve İzmir'in kurtuluşu»
  - Rodos (m:-) · MADDESIZ · açık:ABC · G · en yakın anan: 3931g 1912-10-18 «Uşi Antlaşması: Trablusgarp ve Bingazi'nin İtalya'ya te»
  - Sakız (m:İzmir) · KAYMA · açık:ABC · G · en yakın anan: 318g 1922-09-09 «Büyük Taarruz ve İzmir'in kurtuluşu»
  - Sömbeki (Simi) (m:Rodos) · MADDESIZ · açık:ABC · G · en yakın anan: 4090g 1912-05-12 «Onikiada'nın İtalyan işgali»
  - Taşoz (m:Selanik) · MADDESIZ · açık:ABC · G · en yakın anan: 3539g 1913-11-14 «Atina Antlaşması: Yunanistan ile barış ve Selanik-Yanya»
  - İleryoz (Leros) (m:Rodos) · MADDESIZ · açık:ABC · G · en yakın anan: 4090g 1912-05-12 «Onikiada'nın İtalyan işgali»
  - İlyaki (Tilos) (m:Rodos) · MADDESIZ · açık:ABC · G · en yakın anan: 4090g 1912-05-12 «Onikiada'nın İtalyan işgali»
  - İncirli (Nisiros) (m:Rodos) · MADDESIZ · açık:ABC · G · en yakın anan: 4090g 1912-05-12 «Onikiada'nın İtalyan işgali»
  - İpsara (Psara) (m:İzmir) · KAYMA · açık:ABC · G · en yakın anan: 318g 1922-09-09 «Büyük Taarruz ve İzmir'in kurtuluşu»
  - İstanbulya (Astipalya) (m:Rodos) · MADDESIZ · açık:ABC · G · en yakın anan: 4090g 1912-05-12 «Onikiada'nın İtalyan işgali»
  - İstanköy (m:Rodos) · MADDESIZ · açık:ABC · G · en yakın anan: 4081g 1912-05-21 «İstanköy'ün işgali»

