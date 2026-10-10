# HARITA-DIL-OLCUM-1009 — gövdeye gömülü ≤2 hücre enli diller

Ölçüm oturumu (hüküm koordinatörde). Taban: `origin/main` = `3429ead9`
(`HEAD..origin/main` = 0, 10 Ekim 2026). Worktree `C:/atlas-dil1009`, dal `makine/emrelic`.

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı (veri yalnız yapısı için açıldı, geometri ölçülmedi)

- Evren: `DEVLET_HARITA` yabancı gövdeleri (Osmanlı gövdesi bu dosyada YOK — `donemler.js`).
- Beklenen aday (≤11 km en, ≥3 hücre boy, gövdeye bağlı), **benzersiz geometri** başına:
  **40–150 arası**.
- Kovalar: **(a) gerçek coğrafya ÇOĞUNLUK (~%60)** — kıyı şeridi / yarımada boynu /
  fiyort kenarı (Norveç, Dalmaçya, Şili), göller arası kıstak, kara maskesinin kestiği
  kıyı · **(b) diş ~%25** — iki yerleşim peteği arasında sırta/nehre yaslanmadan kalan
  şerit · **(c) ölçülemedi ~%15** (otomatik sınıflama kararsız).
- ⇒ Öngörü: **(a) kovası BOŞ DEĞİL**; C3 koridoru yeme riski TAŞIR.

### 0.1 Öngörü eki — girdi değişti, geometri HÂLÂ ölçülmedi
Koordinatörün ACİL düzeltmesiyle girdi `origin/main` KOŞU 21 çözümüne geçti (4 Ekim tarihli
yerel dosya ATILDI; ondan yalnız yapı ve parça-temas sayımı alınmıştı, dil ölçülmedi).
"Gömülü" = dilin iki yanı da KARA (komşu gövde) — iki yanı su olan yarımada gömülü sayılmaz,
ayrı kovada (Y) sayılır. Bu tanımla öngörü inceltildi:
- Y (yarımada, iki yan su): **en kalabalık** kova, yüzlerce.
- Gömülü (iki yan kara): **onlarca (20–80)**; bunların **çoğu (b) diş**, (a) nehir vadisi
  **az (<10)** — ≤11 km enli gerçek KORİDOR dünyada hemen hiç yok (Vahan ~13+ km, Caprivi ~30 km).
- Kıyı şeridi (bir yan su, bir yan kara): onlarca.


## 1. Zemin — ADIYLA

| | |
|---|---|
| ölçüm tabanı | `origin/main` = `3429ead9` (`HEAD..origin/main` = 0, fetch 10 Ekim 2026 ~00:00) |
| harita | **KOŞU 21 çıktısı** (koordinatörün beyanı: `14174ef7`, 7 Ekim) — yayında yüklenen `data/devlet_harita_ust.js` |
| yabancı girdi | `devlet_harita_ust.js` 3.148.869 B · sha256 `925b2483dd8c8357879481e44cdfaed5123db849cbc35ba9b64b10405b865faa` + `devlet_parcalar.js` sha256 `60103c5a…1266624` |
| ⇒ çözülen | `py arac/kodla.py coz-c data data/devletler_harita.js` → **181.080.905 B** · sha256 `82cc12240c46abf956360c4d4056e4b8fffb0217c9f8eb3672e99fabc95af01c` |
| Osmanlı girdi | `donemler_ust.js` sha256 `e39bb344…1fea4715` + `donem_parcalar.js` sha256 `041feb0a…0a2b8bce` |
| ⇒ çözülen | `py arac/kodla.py coz-c data data/donemler.js donem` → **61.296.467 B** · sha256 `5469235ff7b52b6335b962c206550aedd3ce2163ce01d140af4b6eb661ec49e7` |
| kıyı / göl / nehir | `veri-kaynak/motor_kara.geojson` sınırı + `ne_10m_lakes` sınırı · `ne_10m_rivers` (aynı taban) |
| ⚠️ atılan zemin | `C:\atlas\data\devletler_harita.js` (93,7 MB, 4 Ekim, git'te YOK) — koordinatörün ACİL düzeltmesiyle **kullanılmadı**; ondan dil ölçülmedi |

Evren: **yabancı 86.429 poligon** (585 devlet, 4.282 dönem, 10,9 M nokta) + **Osmanlı 4.921 poligon**
(`DONEMLER[].o` = OSMANLI, `.v` = OSMANLI-TABI; 620 dönem). Toplam **91.350 poligon, tam tarama** (örnekleme yok).

## 2. Yöntem ve parametreler — ADIYLA (ÖNCE/SONRA kıyası bu satırlarla yapılır)

- **Yöntem: morfolojik AÇMA (negatif tampon + pozitif tampon).** Her poligon için
  `ac = P.buffer(-R).buffer(+R)`, `kalan = P − ac`. Kalan parça, içine **2R çaplı daire
  sığmayan** kısımdır ⇒ eni ≤ 2R.
- **R = 5,5 km ⇒ en ≤ 11 km** (≈ 2 hücre; 1 hücre = 4,2–5,5 km, koordinatörün dönüşümü).
- **Boy ≥ 12,6 km** = 3 hücre × 4,2 km (alt uç — kapsayıcı). Boy = parçanın en küçük döndürülmüş
  dikdörtgeninin uzun kenarı (kıvrık dilde boyu KISA ölçer ⇒ sayı alt sınırdır).
- **Gövdeye bağlı:** kalan parça açılmış gövdeye ≤ 0,2 km. Gövdesi tümüyle ince olan poligon
  (`tum_ince`: yabancı 56.143, Osmanlı 2.193) dil değil, **gövdesiz ince parça**dır — sayılmadı.
- `quad_segs=4`; alan < 1 km² parça atıldı.
- **İzdüşüm:** poligon başına sinüzoidal (orta meridyen = poligon ortası), KM = 111,195/°.
  Boylamda >12° poligon **10° bant + 1° pay** ile kesildi, yalnız çekirdekteki dil sayıldı
  (`bantli`: yabancı 2.138, Osmanlı 859). Kılcal Slovakya şeridinin bant kesimi izi olmadığı
  ayrıca ölçüldü (bant kenarına 4,88°).
- **Geçersiz poligon:** `make_valid` ile onarıldı, bileşenleri ayrı ölçüldü (yabancı 2.937 · Osmanlı 652).
- **Birleştirme:** aynı sahip × ~3 km ızgara (0,05°) × kova bir kayıt; dönemleri birleşik (ilk gün → son gün, dönem sayısı).
- **Sınıflama ölçüleri** (dilin yan kenarı = sınır − gövdeye temas):
  `su` = yan kenarın kıyı/göle ≤ 1,5 km payı · `n_iç` = dil içinden (2 km tampon) geçen nehir boyu / dil boyu ·
  `n_yan` = yan kenarın nehre ≤ 2 km payı · **komşu kapsamı** = dil sınırının, o GÜN etkin BAŞKA sahip
  gövdesine ≤ 0,012° (~1,3 km) değen payı (dönem başları, ≤ 5 gün örneklendi, EN YÜKSEĞİ tutuldu;
  komşu evreni = bütün yabancı gövdeler + Osmanlı o/v).
- **Kova kuralı (otomatik):**
  `Y` su ≥ 0,8 (iki yanı su: yarımada/kıyı adası/kıyı oku — GÖMÜLÜ DEĞİL) ·
  `G0` komşu kapsamı < 0,5 (yanı boşluğa/sahipsize/suya açık — GÖMÜLÜ DEĞİL) ·
  gömülü olanlarda: `a-kiyi-seridi` su 0,3–0,8 · `a-nehir` n ≥ 0,5 ve en ≥ 2 km ·
  `c-nehir-ince` n ≥ 0,5 ve en < 2 km · `b-dis` su < 0,1, n < 0,2 · `c` geri kalan.
- **Biçim:** dik kesit eni %20 ve %80'de; küçük/büyük < 0,5 ⇒ `KAMA` (sivri uç), değilse `SERIT`.

## 3. ÖLÇÜM — sayılar

```
ham poligon-dil     yabancı 138.134 · Osmanlı 21.746 · toplam 159.880
birleşik (sahip×~3 km×kova)
  Y  iki yanı su (gömülü değil)          7.604   (yabancı 7.446 · Osmanlı 158)
  Y-dışı, komşusu ölçülen                5.291
    G0 gömülü DEĞİL (komşu < %50)        3.598
    GÖMÜLÜ (komşu ≥ %50)                 1.693
      a-kiyi-seridi                        480   (Osmanlı/tâbi 61)
      a-nehir                              121   (Osmanlı/tâbi 30)
      b-dis                                890   (Osmanlı/tâbi 108)
      c                                    136   (Osmanlı/tâbi 15)
      c-nehir-ince                          66   (Osmanlı/tâbi 11)
biçim (SERIT/KAMA)  a-kiyi 219/261 · a-nehir 65/56 · b-dis 392/498 · c 78/58 · c-ince 28/38
kılcal (en < 1 km)  b-dis 41 · c-ince 17 · c 7 · a-kiyi 4 · G0 34
Osmanlı↔tâbi-İÇİ gömülü (yalnız o/v komşu; Değişmez 3'e göre çelişki değil): 16
```

## 4. ELLE DENETİM — otomatik (a) kovası GÜVENİLMEZ, (b) kovası tuttu

Çizildi ve göz ile sınıflandı: **50 dil** (rastgele 16 · biçim sınıfı başına rastgele 16 ·
her kovanın en uzun 6'sı = 18; tohum 1009). Görseller `scratchpad` (geçici), komut `ciz.py/ciz2.py/ciz3.py`.

| otomatik kova | çizilen | gözle hüküm |
|---|---|---|
| `b-dis` | 18 | **18/18 diş** — üç sahibin buluştuğu köşede sivri uç, ya da kılcal (0,1–0,3 km) şerit |
| `a-nehir` + `a-kiyi-seridi` | 28 | **1 kesin (a)** · **4 makul (a)** · 23 **diş/köşe ucu** — bir kenarı nehre/kıyıya YASLANMIŞ sivri uç; nehir/kıyı vadinin değil SINIRIN çizgisi |
| `c-nehir-ince` | 4 | 4/4 **nehre yaslanma şeridi** (iki gövde nehri biraz farklı izliyor, 1–2 km arada kalıyor) — motor eseri |

⇒ **Otomatik (a) = 601 bir ÜST SINIRDIR, gerçek (a) değildir.** Örneklemdeki isabet 5/28 (%18,
1 kesin); bu oranla kaba kestirim **~20–110** gerçek (a) — ama örneklem küçük ve rastgele değil
(18'in 12'si "en uzun"), **sayı olarak KULLANMA, bir mertebe olarak oku.** Gerçek coğrafyayı
dişten ayıran ölçü (kenarın ÇİZGİYİ izlemesi değil, ARAZİNİN dar olması) bu ölçümde YOK.

### 4.1 (a) — gözle görülen gerçek/makul coğrafya, ADIYLA

| # | hüküm | sahip | yer (enlem, boylam) | gün | boy / en | ne |
|---|---|---|---|---|---|---|
| 1 | **KESİN (a) kıyı şeridi** | `abd` | 58,575, −134,796 (Lynn Kanalı, Alaska kuşağı) | 1867-10-18 → 1923-10-29 (25 dönem) | 66 / 6,5 km | ABD kıyı şeridi, karşı yan `kanada` (kapsam 0,55). Alaska Panhandle'ın fiyort kıyısı — gerçek dar toprak |
| 2 | makul (a) nehir | `macaristan` | 47,822, 17,645 (Tuna, Győr–Komárom) | 1526-08-29 → 1598-03-29 (15 dönem) | 43 / 2,6 km | Tuna boyunca şerit, komşu `avusturya` 0,95 |
| 3 | makul (a) nehir vadisi | `timurlu` | 37,872, 28,462 (Büyük Menderes) | 1402-07-28 → 1402-09-15 | 42 / 3,2 km | Menderes vadisi boyunca; komşu menteşe/germiyan/aydın |
| 4 | makul (a) nehir ağzı/kıyı | `OSMANLI` | 30,371, 49,238 (Şattülarap doğu yakası) | 1546-01-01 → 1847-05-31 (276 dönem) | 48 / 5,5 km | su payı 0,54, komşu `safevi` 0,67 — Muhammara kıyısı |
| 5 | makul (a) nehir | `belcika` | 4,646, 20,397 (Ubangi/Uele) | 1890-01-01 → 1900-01-01 | 46 / 4,3 km | nehir kıyısı şerit, komşu `banda-gbaya` 0,51 |

⚠️ 2–5 "makul" = biçim gerçek coğrafyaya uyuyor; **tarihî doğruluk ÖLÇÜLMEDİ** (kaynak okunmadı).
Görülen ama (a) SAYILMAYAN dikkat çekici kayıt: `OSMANLI` 41,93, 26,02 (Meriç, Edirne)
1913-05-30 → 07-14, 41 km — biçimi nehirden kollar salan düzensiz uç, (c).

### 4.2 (b) — en belirgin dişler (gözle doğrulandı)

- `OSMANLI` 48,67, 18,44 (Slovakya) 1663-09-24 → 1682-09-16 · **132 km × 0,29 km**; aynı yerde
  1682-09-16 → 1683-10-27 iki parça daha (83 × 0,19 · 73 × 0,09). **Kılcal meridyen şeridi**: Osmanlı
  ile `macaristan` gövdesinin neredeyse çakışan kenarları — en büyük diş.
- `OSMANLI` 46,27, 15,72 (Slovenya) 1687-09-29 → 1688-05-19 · 66 × 4,5 km — `macaristan` gövdesine saplanmış sivri uç.
- `OSMANLI` 29,59, 21,76 (Libya çölü) 1517-05-19 → 1551-08-15 · 64 × 4,5 km — `kanem-bornu`ya saplanmış sivri uç.
- `maratha`/`portekiz` 18,93, 73,10 (Hindistan) · 56 × 1,6 km — iki ayrı dönem aynı uç.

### 4.3 Gömülü olmayan ama BÜYÜK iki sınıf (C3 bunlara ne yapar — bilmiyorum)
- **Y = 7.604** iki yanı su: kıyı okları, bariyer adalar, yarımada boyunları — çoğu GERÇEK
  coğrafya (ör. `yeni-ispanya`/`meksika` Laguna Madre bariyer adası 24,8, −97,6 · 188 km × 2,2 km
  1749 → 1923). Komşu sahip
  yoktur; C3 "komşu sahibe çevirerek" yiyorsa bunlara DOKUNMAMALI — **ama bu, C3 kodu okunmadan
  söylenemez; ölçülmedi.**
- **G0 = 3.598**: yanı boşluğa/sahipsize açık uçlar (ör. `afgan-durrani`/`babur` 31,1, 68,5 · 254 km × 5,5 km,
  komşu kapsamı 0,0) · `ingiltere`/`avustralya` Coorong kıyı oku 35,9 S, 139,4 E · 103 km × 2,6 km,
  1847 → 1923 (su 0,78, komşu 0,0 — gerçek coğrafya, gömülü değil).

## 5. Öngörü ↔ ölçüm

| öngörü (§0, ölçümden önce) | ölçüm | |
|---|---|---|
| toplam aday 40–150 | 12.895 birleşik (Y 7.604 + Y-dışı 5.291) | **TUTMADI** (iki mertebe az) |
| Y en kalabalık, "yüzlerce" | 7.604 | sıra tuttu, mertebe **TUTMADI** |
| gömülü 20–80 | 1.693 | **TUTMADI** |
| gömülülerin çoğu (b) | otomatik b 890 / 1.693; gözle (b) 18/18, (a)-kova 23/28 diş | **TUTTU** |
| (a) < 10 | gözle 1 kesin + 4 makul; otomatik üst sınır 601 | örneklemde tuttu, evrende **ölçülemedi** |
| (a) BOŞ DEĞİL | 1 kesin (Alaska) | **TUTTU** |

Sapmanın sebebi: öngörü "dil"i paralel kenarlı şerit diye düşündü; ölçüt (2R'lik daireye sığmama)
**her sivri köşe ucunu** da yakalıyor — gömülülerin %53'ü KAMA. Bir ızgara süzgeci için ikisi aynı
sınıftır (≤ 2 hücre enli çıkıntı), o yüzden sayılara dahil.

## 6. Bulamadıklarım / ölçmediklerim
- **Sırt/dağ yaslanması ölçülmedi** (`veri-kaynak/yukseklik` kullanılmadı) ⇒ sırta yaslanan gerçek bir dil `b-dis`e düşebilir.
- **Tarihî doğruluk ölçülmedi** — (a) "makul" kayıtlar biçim hükmüdür, kaynak hükmü değil.
- **C3'ün kendisi okunmadı** — hangi kovayı yediğini bilmiyorum; bu liste C3'ün yiyebileceği SINIFIN envanteridir.
- Dokunan poligon çiftleri (yabancı örneklemde 15 gövdede 0–7 çift) ayrı ölçüldü — iki parçaya bölünmüş bir dil eksik sayılmış olabilir.
- Antimeridyen (±180°) özel işlenmedi.
- Komşu kapsamı ≤ 5 gün örneğiyle — ara dönemde gömülüleşen dil kaçmış olabilir.

## 7. Tam liste (gömülü, Y-dışı) — otomatik kova, en uzundan
`a-nehir` ve `a-kiyi-seridi` TAMAMI; `b`/`c` en uzunlar. Sütunlar: `su/n_iç/n_yan` §2'deki ölçüler;
son sütun: en çok gömüldüğü gün komşuları ve kapsamları.

#### `a-nehir` — 121 kayıt

| sahip | enlem, boylam | bugünkü ülke | ilk gün → son gün | dönem | boy km | en km | biçim | su/n_iç/n_yan | o gün komşu: kapsam |
|---|---|---|---|---|---|---|---|---|---|
| belcika | 4.646, 20.397 | Dem. Rep. Congo | 1890-01-01 → 1900-01-01 | 8 | 46 | 4.3 | KAMA | 0.00/1.23/0.63 | banda-gbaya:0.51 |
| macaristan | 47.822, 17.645 | Slovakia | 1526-08-29 → 1598-03-29 | 15 | 43 | 2.6 | KAMA | 0.00/1.16/0.66 | avusturya:0.95 |
| timurlu | 37.872, 28.462 | Turkey | 1402-07-28 → 1402-09-15 | 2 | 42 | 3.2 | SERIT | 0.00/1.05/0.59 | mentese:0.55,germiyan:0.25,aydin:0.16 |
| OSMANLI | 41.925, 26.021 | Bulgaria | 1913-05-30 → 1913-07-14 | 2 | 41 | 5.1 | KAMA | 0.00/1.00/0.41 | bulgaristan:0.96 |
| OSMANLI | 41.945, 26.046 | Bulgaria | 1913-07-14 → 1913-07-21 | 1 | 41 | 2.6 | SERIT | 0.00/0.62/0.34 | bulgaristan:0.95 |
| OSMANLI | 39.726, 43.353 | Turkey | 1514-09-06 → 1534-01-01 | 44 | 38 | 5.0 | SERIT | 0.00/1.17/0.41 | safevi:0.97 |
| akkoyunlu | 39.730, 43.354 | Turkey | 1467-01-01 → 1469-01-01 | 3 | 36 | 4.9 | SERIT | 0.00/1.26/0.44 | karakoyunlu:0.95 |
| qing-hanedani | 24.979, 99.756 | China | 1858-05-17 → 1862-08-24 | 8 | 35 | 2.7 | KAMA | 0.00/0.63/0.35 | pingnan:1.00 |
| qing-hanedani | 24.775, 100.312 | China | 1858-05-17 → 1873-01-15 | 16 | 34 | 5.1 | SERIT | 0.00/0.87/0.20 | pingnan:0.93 |
| OSMANLI | 39.450, 47.378 | Iran | 1578-11-01 → 1607-01-01 | 6 | 34 | 2.4 | KAMA | 0.00/1.11/0.58 | safevi:1.00 |
| OSMANLI-TABI | 44.009, 26.123 | Romania | 1877-05-09 → 1878-07-13 | 8 | 33 | 2.2 | KAMA | 0.00/1.16/0.83 | OSMANLI:0.56,romanya:0.38 |
| portekiz-brezilyasi | -13.071, -65.099 | Bolivia | 1776-06-20 → 1822-09-07 | 7 | 33 | 2.0 | SERIT | 0.00/1.34/0.82 | ispanya:1.00 |
| ingiliz-hindistani | 12.354, 75.790 | India | 1790-12-15 → 1923-10-29 | 36 | 31 | 5.4 | SERIT | 0.00/0.95/0.41 | meysur:0.91 |
| kalikut | 12.354, 75.790 | India | 1281-01-01 → 1505-01-01 | 1 | 31 | 5.4 | SERIT | 0.00/0.96/0.41 | hoysala:0.91 |
| portekiz | 12.354, 75.790 | India | 1505-01-01 → 1663-02-15 | 54 | 31 | 5.4 | SERIT | 0.00/0.96/0.41 | vijayanagara:0.91 |
| hollanda | 12.354, 75.790 | India | 1663-02-15 → 1771-01-01 | 8 | 31 | 5.4 | SERIT | 0.00/0.96/0.41 | meysur:0.91 |
| OSMANLI | 34.326, 41.104 | Iraq | 1516-08-28 → 1918-10-26 | 77 | 30 | 4.7 | SERIT | 0.00/0.66/0.27 | safevi:0.54 |
| memluk | 34.326, 41.104 | Iraq | 1281-01-01 → 1516-08-28 | 14 | 30 | 5.0 | SERIT | 0.00/0.67/0.27 | ilhanli:0.53 |
| sovalye | 37.862, 28.459 | Turkey | 1344-10-28 → 1390-01-01 | 1 | 30 | 3.5 | SERIT | 0.00/1.01/0.49 | mentese:0.50,aydin:0.21,inancogullari:0.14 |
| fransa-cumhuriyet | 34.326, 41.104 | Iraq | 1918-10-26 → 1920-07-24 | 4 | 30 | 5.0 | SERIT | 0.00/0.67/0.27 | ingiltere:0.53 |
| suriye-lubnan-mandasi | 34.326, 41.104 | Iraq | 1920-07-24 → 1923-10-29 | 1 | 30 | 5.0 | SERIT | 0.00/0.67/0.27 | ingiltere:0.54 |
| sirbistan | 42.891, 22.063 | Serbia | 1878-01-11 → 1878-07-13 | 1 | 30 | 4.2 | SERIT | 0.00/1.28/0.61 | OSMANLI:1.00 |
| musa-celebi | 42.891, 22.063 | Serbia | 1412-01-01 → 1413-07-05 | 1 | 30 | 4.2 | SERIT | 0.00/1.29/0.58 | sirbistan:0.90 |
| OSMANLI | 42.891, 22.063 | Serbia | 1443-01-01 → 1444-08-01 | 1 | 30 | 4.4 | SERIT | 0.00/1.29/0.57 | sirbistan:0.92 |
| memluk | 38.374, 36.927 | Turkey | 1381-01-01 → 1384-01-01 | 1 | 29 | 5.0 | SERIT | 0.00/0.73/0.19 | dulkadir:0.92 |
| avusturya | 47.659, 18.159 | Hungary | 1526-08-29 → 1566-09-07 | 12 | 28 | 5.0 | KAMA | 0.00/0.65/0.26 | macaristan:0.94 |
| avusturya | 47.614, 18.176 | Hungary | 1566-09-07 → 1594-09-27 | 4 | 28 | 5.0 | KAMA | 0.00/0.65/0.26 | macaristan:0.64,OSMANLI:0.36 |
| venedik | 44.980, 9.774 | Italy | 1426-01-01 → 1428-01-01 | 1 | 27 | 3.6 | KAMA | 0.00/0.85/0.22 | milanoduka:0.87 |
| venedik | 44.980, 9.776 | Italy | 1428-01-01 → 1797-05-12 | 53 | 27 | 3.4 | KAMA | 0.00/0.85/0.21 | milanoduka:0.87 |
| rusya | 49.964, 40.597 | Russia | 1652-01-01 → 1663-01-01 | 9 | 27 | 4.0 | KAMA | 0.13/1.02/0.50 | don-kazak:1.00,nogay:0.38,OSMANLI-TABI:0.20 |
| avusturya | 45.162, 17.416 | Croatia | 1526-08-29 → 1538-01-01 | 6 | 26 | 3.4 | SERIT | 0.00/1.31/0.49 | OSMANLI:1.00 |
| nayak-devletleri | 16.600, 79.495 | India | 1336-01-01 → 1361-01-01 | 1 | 26 | 6.0 | SERIT | 0.00/0.57/0.18 | delhi-sultanligi:0.89 |
| akkoyunlu | 38.431, 39.603 | Turkey | 1401-01-01 → 1465-01-01 | 6 | 24 | 4.5 | KAMA | 0.00/1.18/0.49 | artuklu:0.59,memluk:0.41 |
| celayirli | 38.431, 39.603 | Turkey | 1353-01-01 → 1394-04-25 | 6 | 24 | 4.5 | KAMA | 0.00/1.21/0.49 | artuklu:0.60,memluk:0.41 |
| sutayogullari | 38.431, 39.603 | Turkey | 1343-01-01 → 1353-01-01 | 1 | 24 | 4.5 | KAMA | 0.00/1.18/0.49 | artuklu:0.59,memluk:0.41 |
| OSMANLI | 38.431, 39.603 | Turkey | 1515-09-10 → 1516-05-01 | 3 | 24 | 4.4 | KAMA | 0.00/1.21/0.49 | safevi:0.97 |
| timurlu | 38.431, 39.603 | Turkey | 1394-04-25 → 1401-01-01 | 3 | 24 | 4.5 | KAMA | 0.00/1.21/0.48 | artuklu:0.60,memluk:0.40 |
| bulgaristan | 42.193, 23.845 | Bulgaria | 1885-09-18 → 1908-10-05 | 1 | 24 | 2.8 | KAMA | 0.00/0.99/0.36 | OSMANLI-TABI:0.87,OSMANLI:0.56 |
| eflak | 45.242, 28.690 | Ukraine | 1416-01-01 → 1419-01-01 | 1 | 24 | 2.8 | SERIT | 0.00/1.69/0.67 | bogdan:0.54,OSMANLI:0.48 |
| avusturya | 50.806, 21.798 | Poland | 1915-07-01 → 1915-10-01 | 3 | 24 | 3.1 | SERIT | 0.00/1.22/0.56 | kongre-polonyasi:0.61,almanya:0.40 |
| avusturya | 44.980, 9.774 | Italy | 1797-05-12 → 1859-06-04 | 13 | 24 | 3.8 | KAMA | 0.00/0.89/0.16 | parma:0.86 |
| bizans | 41.353, 26.556 | Greece | 1361-01-01 → 1371-09-26 | 6 | 23 | 7.3 | SERIT | 0.00/1.32/0.40 | OSMANLI:0.95 |
| sardinya | 44.980, 9.774 | Italy | 1859-06-04 → 1860-03-18 | 1 | 23 | 3.8 | KAMA | 0.00/0.92/0.16 | parma:0.86 |
| abd | 29.400, -102.808 | Mexico | 1867-10-18 → 1923-10-29 | 26 | 23 | 2.8 | SERIT | 0.00/0.85/0.39 | meksika:0.96 |
| abd | 29.458, -102.814 | Mexico | 1867-01-01 → 1867-10-18 | 2 | 23 | 2.8 | SERIT | 0.00/0.84/0.38 | meksika:0.55 |
| ingiltere | 32.561, 35.578 | Israel | 1918-09-21 → 1918-09-23 | 1 | 22 | 4.1 | KAMA | 0.00/1.19/0.27 | OSMANLI:1.00 |
| OSMANLI-TABI | 32.551, 35.567 | Israel | 1831-11-08 → 1832-05-27 | 3 | 22 | 3.9 | KAMA | 0.00/1.23/0.29 | OSMANLI:0.92 |
| OSMANLI | 33.026, 35.593 | Israel | 1918-10-01 → 1918-10-08 | 3 | 22 | 3.3 | SERIT | 0.00/0.92/0.38 | ingiltere:0.59,fransa-cumhuriyet:0.50 |
| OSMANLI | 31.269, 47.444 | Iraq | 1914-11-22 → 1915-01-01 | 2 | 21 | 3.1 | KAMA | 0.00/1.25/0.64 | kacar:0.49,ingiltere:0.48 |
| OSMANLI-TABI | 47.816, 27.247 | Moldova | 1812-05-28 → 1877-05-09 | 69 | 21 | 2.0 | KAMA | 0.00/1.35/0.81 | avusturya:0.58,rusya:0.58 |
| OSMANLI-TABI | 47.852, 27.227 | Moldova | 1859-04-25 → 1874-11-02 | 10 | 21 | 2.0 | KAMA | 0.00/1.35/0.81 | avusturya:0.58,rusya:0.58 |
| milanoduka | 45.055, 9.712 | Italy | 1428-01-01 → 1512-06-24 | 1 | 20 | 3.8 | KAMA | 0.00/0.66/0.31 | venedik:0.82 |
| romanya | 44.149, 27.940 | Romania | 1878-07-13 → 1881-03-26 | 1 | 20 | 2.5 | KAMA | 0.00/0.50/0.20 | OSMANLI-TABI:1.00 |
| romanya-kralligi | 44.149, 27.940 | Romania | 1881-03-26 → 1913-08-10 | 1 | 20 | 2.5 | KAMA | 0.00/0.50/0.20 | OSMANLI-TABI:1.00 |
| altinorda | 44.828, 27.840 | Romania | 1281-01-01 → 1359-01-01 | 5 | 20 | 4.0 | SERIT | 0.00/1.64/0.51 | macaristan:0.76 |
| bogdan | 44.828, 27.840 | Romania | 1359-01-01 → 1456-06-01 | 2 | 20 | 4.0 | SERIT | 0.00/1.63/0.51 | eflak:0.76 |
| tbmm-turkiye | 41.336, 43.207 | Georgia | 1921-10-13 → 1923-10-29 | 2 | 20 | 3.4 | KAMA | 0.00/1.18/0.49 | sovyet-rusya:0.92 |
| bulgaristan | 44.617, 27.989 | Romania | 1908-10-05 → 1913-08-10 | 7 | 19 | 6.3 | SERIT | 0.00/2.78/0.99 | romanya-kralligi:0.85 |
| OSMANLI-TABI | 44.827, 27.840 | Romania | 1456-06-01 → 1462-06-01 | 10 | 19 | 4.2 | SERIT | 0.00/1.62/0.50 | eflak:0.75 |
| ingiliz-kuzey-amerika | 60.062, -112.094 | Canada | 1786-01-01 → 1788-01-01 | 1 | 19 | 3.0 | KAMA | 0.00/1.44/0.73 | dene:1.00 |
| OSMANLI | 43.626, 25.530 | Bulgaria | 1388-01-01 → 1393-07-17 | 7 | 19 | 3.1 | KAMA | 0.00/0.72/0.29 | bulgaristan:0.59,eflak:0.39 |
| babur-imparatorlugu | 16.267, 79.285 | India | 1686-09-12 → 1687-09-21 | 1 | 19 | 4.5 | KAMA | 0.29/0.76/0.26 | golkonda:0.74 |
| artuklu | 39.290, 38.458 | Turkey | 1281-01-01 → 1465-01-01 | 3 | 19 | 2.6 | SERIT | 0.00/1.32/0.70 | ilhanli:0.96 |
| OSMANLI | 44.913, 18.889 | Croatia | 1687-09-29 → 1688-05-19 | 6 | 19 | 3.8 | SERIT | 0.00/1.08/0.43 | macaristan:1.00 |
| OSMANLI-TABI | 39.957, 48.898 | Azerbaijan | 1722-11-01 → 1735-06-19 | 17 | 19 | 2.2 | KAMA | 0.00/0.82/0.43 | safevi:0.94 |
| fransa-cumhuriyet | 7.068, -8.330 | Liberia | 1898-01-01 → 1923-10-29 | 33 | 19 | 3.1 | KAMA | 0.00/0.74/0.18 | liberya:1.00 |
| bicapur | 16.267, 79.288 | India | 1619-01-01 → 1686-09-12 | 8 | 19 | 4.2 | KAMA | 0.28/0.77/0.25 | golkonda:0.77 |
| safevi | 39.290, 38.459 | Turkey | 1515-05-19 → 1516-05-01 | 4 | 18 | 2.6 | SERIT | 0.00/1.33/0.70 | memluk:0.52,OSMANLI:0.49 |
| akkoyunlu | 39.290, 38.459 | Turkey | 1502-01-01 → 1507-01-01 | 2 | 18 | 2.6 | SERIT | 0.00/1.33/0.70 | memluk:0.52,safevi:0.49 |
| OSMANLI-TABI | 46.556, 28.264 | Moldova | 1825-02-24 → 1854-12-02 | 5 | 18 | 2.5 | KAMA | 0.00/1.30/0.19 | rusya:1.00 |
| abd | 28.355, -100.344 | Mexico | 1914-01-01 → 1923-10-29 | 2 | 18 | 3.7 | KAMA | 0.00/0.75/0.31 | meksika:0.84 |
| OSMANLI-TABI | 48.048, 27.038 | Romania | 1775-05-07 → 1812-05-28 | 25 | 18 | 3.7 | SERIT | 0.00/1.58/0.60 | avusturya:1.00,OSMANLI:0.46 |
| mehmed-celebi | 39.248, 33.485 | Turkey | 1411-02-17 → 1413-07-05 | 1 | 18 | 5.2 | KAMA | 0.00/0.89/0.29 | karaman:0.88 |
| timurlu | 39.248, 33.485 | Turkey | 1402-09-15 → 1404-03-01 | 2 | 18 | 5.3 | KAMA | 0.00/0.91/0.30 | karaman:0.88 |
| suleyman-celebi | 39.248, 33.485 | Turkey | 1404-03-01 → 1411-02-17 | 3 | 18 | 5.3 | KAMA | 0.00/0.91/0.30 | karaman:0.88 |
| ahiler | 39.248, 33.485 | Turkey | 1281-01-01 → 1354-08-01 | 1 | 18 | 5.3 | KAMA | 0.00/0.91/0.30 | selcuklu:0.64,ilhanli:0.31 |
| macaristan | 46.184, 18.869 | Hungary | 1527-01-01 → 1687-08-12 | 5 | 18 | 3.0 | SERIT | 0.00/1.24/0.61 | OSMANLI:1.00 |
| OSMANLI | 30.401, 30.849 | Egypt | 1517-02-15 → 1517-05-19 | 3 | 17 | 3.0 | SERIT | 0.00/1.73/0.85 | memluk:0.62 |
| rusya | 48.840, 37.878 | Ukraine | 1638-01-01 → 1643-01-01 | 4 | 17 | 4.9 | SERIT | 0.00/0.82/0.12 | don-kazak:0.80 |
| OSMANLI | 39.209, 42.243 | Turkey | 1916-03-01 → 1916-08-08 | 10 | 17 | 3.7 | SERIT | 0.00/0.97/0.32 | rusya:1.00 |
| almanya | 46.659, 15.041 | Austria | 1335-05-02 → 1526-08-29 | 16 | 16 | 6.5 | SERIT | 0.00/1.16/0.45 | avusturya:0.88 |
| macaristan | 47.756, 24.515 | Romania | 1544-09-01 → 1686-10-23 | 4 | 16 | 2.1 | KAMA | 0.00/0.96/0.76 | OSMANLI-TABI:1.00 |
| OSMANLI-TABI | 44.619, 27.990 | Romania | 1878-07-13 → 1908-10-05 | 16 | 16 | 5.2 | KAMA | 0.00/2.62/0.93 | romanya:0.83 |
| almanya | 47.309, 6.838 | France | 1871-05-10 → 1919-06-28 | 53 | 16 | 3.7 | KAMA | 0.00/1.25/0.47 | fransa-cumhuriyet:0.46,isvicre:0.41 |
| ispanya | -6.576, -75.129 | Peru | 1685-01-01 → 1790-01-01 | 41 | 16 | 2.4 | SERIT | 0.00/0.95/0.64 | ispanyol-peru:1.00 |
| OSMANLI | 40.121, 39.020 | Turkey | 1916-07-24 → 1918-01-01 | 6 | 16 | 3.4 | SERIT | 0.00/0.63/0.26 | rusya:1.00 |
| bizans | 37.843, 28.471 | Turkey | 1281-01-01 → 1308-01-01 | 10 | 16 | 4.3 | SERIT | 0.00/0.94/0.31 | mentese:0.50,selcuklu:0.33,inancogullari:0.28 |
| aydin | 37.843, 28.471 | Turkey | 1308-01-01 → 1425-06-01 | 5 | 16 | 4.3 | SERIT | 0.00/0.95/0.31 | mentese:0.50,germiyan:0.33,inancogullari:0.28 |
| burhaneddin | 39.564, 36.370 | Turkey | 1393-06-01 → 1398-07-15 | 2 | 16 | 2.1 | SERIT | 0.00/1.28/0.68 | OSMANLI:0.47,dulkadir:0.46 |
| timurlu | 39.564, 36.370 | Turkey | 1402-07-28 → 1408-06-01 | 7 | 16 | 2.1 | SERIT | 0.00/1.28/0.68 | dulkadir:0.47,mehmed-celebi:0.47 |
| ispanya | -6.216, -75.131 | Peru | 1790-01-01 → 1824-12-09 | 18 | 16 | 3.1 | SERIT | 0.00/0.66/0.20 | ispanyol-peru:1.00 |
| merini | 35.091, -2.370 | Morocco | 1497-01-01 → 1549-01-01 | 4 | 15 | 2.7 | SERIT | 0.16/1.16/0.71 | ispanya:0.58,zeyyani:0.39 |
| sadi | 35.091, -2.370 | Morocco | 1549-01-01 → 1659-01-01 | 4 | 15 | 2.7 | SERIT | 0.16/1.16/0.71 | ispanya:0.58,zeyyani:0.39 |
| fas | 35.091, -2.370 | Morocco | 1659-01-01 → 1923-10-29 | 11 | 15 | 2.7 | SERIT | 0.16/1.16/0.71 | ispanya:0.58,OSMANLI:0.39 |
| cekoslovakya | 48.111, 16.752 | Austria | 1920-06-04 → 1923-10-29 | 1 | 15 | 3.7 | SERIT | 0.00/0.93/0.36 | avusturya-cumhuriyet:0.92 |
| OSMANLI | 37.843, 28.471 | Turkey | 1415-06-01 → 1422-01-01 | 5 | 15 | 4.3 | SERIT | 0.00/0.96/0.32 | germiyan:0.57,mentese:0.50 |
| OSMANLI | 41.178, 45.460 | Azerbaijan | 1578-08-24 → 1735-08-12 | 11 | 15 | 4.3 | KAMA | 0.00/0.73/0.29 | OSMANLI-TABI:0.53,safevi:0.46 |
| rusya | 43.612, 25.459 | Bulgaria | 1877-07-16 → 1878-07-13 | 5 | 15 | 4.7 | KAMA | 0.00/0.96/0.31 | OSMANLI:1.00,OSMANLI-TABI:0.42 |
| ingiltere | 31.214, -91.772 | United States of America | 1763-02-10 → 1779-09-21 | 6 | 15 | 3.2 | SERIT | 0.00/0.78/0.25 | yeni-ispanya:0.88 |
| venedik | 45.028, 9.608 | Italy | 1428-01-01 → 1797-05-12 | 53 | 15 | 4.6 | SERIT | 0.00/0.76/0.15 | milanoduka:0.79 |
| bulgaristan | 43.612, 25.459 | Bulgaria | 1393-07-17 → 1395-01-01 | 2 | 15 | 4.8 | KAMA | 0.00/0.96/0.31 | OSMANLI:0.55,eflak:0.42 |
| almanya | 47.343, 7.069 | Switzerland | 1501-07-13 → 1919-06-28 | 54 | 15 | 3.1 | SERIT | 0.00/1.10/0.66 | isvicre:0.81 |
| OSMANLI | 30.348, 31.130 | Egypt | 1517-02-15 → 1517-05-19 | 3 | 15 | 4.4 | SERIT | 0.00/1.16/0.37 | memluk:0.92 |
| almanya | 48.309, 16.859 | Austria | 1281-01-01 → 1526-08-29 | 19 | 14 | 2.5 | KAMA | 0.00/0.89/0.31 | macaristan:0.68,avusturya:0.34 |
| fransa-cumhuriyet | 47.343, 7.069 | Switzerland | 1798-03-15 → 1923-10-29 | 53 | 14 | 3.1 | SERIT | 0.00/1.13/0.67 | isvicre:0.82 |
| cekoslovakya | 48.309, 16.859 | Austria | 1918-11-11 → 1920-06-04 | 2 | 14 | 2.6 | KAMA | 0.00/0.92/0.32 | macaristan-naiplik:0.68,avusturya:0.33 |
| fransa-cumhuriyet | 14.745, -12.061 | Mali | 1830-07-05 → 1858-01-01 | 25 | 14 | 3.0 | KAMA | 0.00/1.01/0.50 | bambara:1.00,bundu:0.48 |
| safevi | 39.487, 38.759 | Turkey | 1502-01-01 → 1507-01-01 | 2 | 14 | 4.3 | KAMA | 0.00/1.25/0.47 | akkoyunlu:0.40,memluk:0.37 |
| karakoyunlu | 39.487, 38.759 | Turkey | 1410-01-01 → 1457-01-01 | 4 | 14 | 4.3 | KAMA | 0.00/1.25/0.47 | artuklu:0.40,memluk:0.37 |
| sovyet-rusya | 48.613, 25.956 | Ukraine | 1918-01-01 → 1923-10-29 | 18 | 13 | 3.0 | SERIT | 0.00/2.38/0.72 | romanya-kralligi:0.50,avusturya:0.50 |
| rusya | 48.613, 25.956 | Ukraine | 1793-01-23 → 1812-05-28 | 12 | 13 | 3.0 | SERIT | 0.00/2.38/0.73 | OSMANLI:0.50,avusturya:0.50 |
| OSMANLI-TABI | 37.327, 36.471 | Turkey | 1516-05-01 → 1516-08-24 | 1 | 13 | 2.1 | SERIT | 0.00/0.83/0.24 | memluk:1.00 |
| macaristan-naiplik | 45.213, 25.363 | Romania | 1918-11-11 → 1920-06-04 | 2 | 13 | 5.3 | KAMA | 0.00/0.50/0.18 | romanya-kralligi:0.78 |
| macaristan | 45.213, 25.363 | Romania | 1330-01-01 → 1918-11-11 | 36 | 13 | 5.3 | KAMA | 0.00/0.50/0.18 | OSMANLI-TABI:1.00 |
| lehistan | 48.612, 25.957 | Ukraine | 1772-08-05 → 1793-01-23 | 1 | 13 | 3.0 | SERIT | 0.00/2.33/0.73 | OSMANLI:0.50,avusturya:0.50 |
| OSMANLI | 41.177, 45.488 | Azerbaijan | 1723-06-15 → 1724-10-03 | 7 | 13 | 2.4 | KAMA | 0.00/0.82/0.31 | safevi:0.43,gurcistan:0.42 |
| memluk | 38.222, 39.189 | Turkey | 1399-09-01 → 1402-07-28 | 2 | 13 | 3.2 | SERIT | 0.00/1.35/0.54 | OSMANLI:0.57,artuklu:0.49 |
| mutahharten | 39.493, 38.758 | Turkey | 1378-01-01 → 1410-01-01 | 5 | 13 | 4.2 | SERIT | 0.00/1.26/0.46 | artuklu:0.40,eretna:0.36 |
| OSMANLI | 44.578, 27.825 | Romania | 1395-05-17 → 1396-10-01 | 2 | 13 | 3.6 | KAMA | 0.00/0.55/0.08 | bogdan:1.00 |
| akkoyunlu | 39.492, 38.759 | Turkey | 1422-01-01 → 1465-01-01 | 3 | 13 | 4.2 | SERIT | 0.00/1.26/0.46 | artuklu:0.40,memluk:0.36 |
| OSMANLI | 39.492, 38.759 | Turkey | 1401-02-01 → 1402-07-28 | 1 | 13 | 4.2 | KAMA | 0.00/1.26/0.46 | artuklu:0.39,memluk:0.36 |

#### `a-kiyi-seridi` — 480 kayıt

| sahip | enlem, boylam | bugünkü ülke | ilk gün → son gün | dönem | boy km | en km | biçim | su/n_iç/n_yan | o gün komşu: kapsam |
|---|---|---|---|---|---|---|---|---|---|
| abd | 58.575, -134.796 | United States of America | 1867-10-18 → 1923-10-29 | 25 | 66 | 6.5 | SERIT | 0.55/0.00/0.00 | kanada:0.55 |
| fransa-cumhuriyet | 12.367, -12.934 | Guinea | 1861-03-10 → 1896-01-01 | 19 | 55 | 5.8 | SERIT | 0.47/0.00/0.00 | futa-callon:0.50 |
| fransa-cumhuriyet | 12.381, -12.893 | Guinea | 1858-01-01 → 1861-03-10 | 2 | 52 | 5.5 | SERIT | 0.47/0.00/0.00 | bambara:0.77,futa-callon:0.38 |
| OSMANLI | 30.371, 49.238 | Iran | 1546-01-01 → 1847-05-31 | 276 | 48 | 5.5 | SERIT | 0.54/0.00/0.00 | safevi:0.67 |
| sili-cumhuriyeti | -41.471, -72.283 | Chile | 1883-01-01 → 1923-10-29 | 5 | 46 | 5.7 | SERIT | 0.45/0.00/0.00 | arjantin-cumhuriyeti:0.73 |
| OSMANLI | 29.247, 32.608 | Egypt | 1517-02-15 → 1517-04-13 | 1 | 43 | 4.7 | KAMA | 0.57/0.00/0.00 | memluk:0.60 |
| taiping | 31.834, 121.505 | China | 1853-03-19 → 1864-07-19 | 9 | 41 | 5.4 | KAMA | 0.37/0.00/0.00 | qing-hanedani:0.64 |
| qing-hanedani | 42.661, 129.391 | China | 1676-03-01 → 1912-02-12 | 39 | 39 | 3.6 | KAMA | 0.53/0.00/0.00 | meiji-japonya:0.52 |
| dogu-sumatra-sultanliklari | 0.213, 102.569 | Indonesia | 1590-01-01 → 1723-01-01 | 3 | 38 | 4.9 | KAMA | 0.53/0.00/0.00 | cohor-sultanligi:0.58 |
| OSMANLI | 38.276, 45.266 | Iran | 1724-01-01 → 1724-09-28 | 3 | 38 | 7.8 | SERIT | 0.45/0.00/0.00 | safevi:0.56 |
| cin-cumhuriyeti | 42.660, 129.388 | China | 1912-02-12 → 1923-10-29 | 6 | 38 | 3.6 | KAMA | 0.53/0.00/0.00 | meiji-japonya:0.52 |
| ingiliz-kuzey-amerika | 56.850, -62.585 | Canada | 1771-01-01 → 1867-07-01 | 49 | 38 | 1.8 | KAMA | 0.79/0.00/0.00 | inuit:1.00 |
| kanada | 56.850, -62.582 | Canada | 1867-07-01 → 1880-09-01 | 4 | 37 | 1.7 | KAMA | 0.79/0.00/0.00 | inuit:0.81 |
| fransa | 30.332, -87.775 | United States of America | 1702-01-01 → 1762-11-03 | 19 | 37 | 3.6 | KAMA | 0.79/0.00/0.00 | ispanya:1.00 |
| ming-hanedani | 24.525, 104.052 | China | 1382-01-06 → 1382-01-16 | 2 | 37 | 2.7 | KAMA | 0.32/0.52/0.23 | kuzey-yuan:0.58 |
| yeni-ispanya | 29.874, -93.772 | United States of America | 1803-12-20 → 1821-02-22 | 4 | 37 | 1.8 | SERIT | 0.76/0.24/0.09 | abd:0.62 |
| nguyen-beyligi | 12.444, 107.517 | Cambodia | 1653-01-01 → 1775-02-01 | 3 | 37 | 3.5 | SERIT | 0.47/0.00/0.00 | kamboc-kralligi:0.51 |
| meksika | 29.874, -93.772 | United States of America | 1824-01-01 → 1836-03-02 | 3 | 36 | 1.9 | KAMA | 0.76/0.24/0.10 | abd:0.75 |
| campa | 12.444, 107.517 | Cambodia | 1281-01-01 → 1471-03-02 | 2 | 36 | 3.5 | SERIT | 0.47/0.00/0.00 | angkor-kmer:0.51 |
| nguyen-hanedani | 12.444, 107.517 | Cambodia | 1802-06-01 → 1884-06-06 | 5 | 36 | 3.5 | SERIT | 0.47/0.00/0.00 | kamboc-kralligi:0.51 |
| bogdan | 44.974, 29.631 | Romania | 1359-01-01 → 1448-01-01 | 1 | 36 | 3.0 | KAMA | 0.68/0.40/0.17 | bulgaristan:0.52 |
| racput | 23.684, 68.348 | India | 1281-01-01 → 1679-01-01 | 9 | 36 | 5.9 | SERIT | 0.76/0.00/0.00 | gucerat-sultanligi:1.00,sind:0.82 |
| gucerat-sultanligi | 23.684, 68.348 | India | 1472-01-01 → 1531-01-01 | 2 | 35 | 5.9 | SERIT | 0.76/0.00/0.00 | sind:0.82 |
| floransa | 43.082, 10.593 | Italy | 1406-10-09 → 1532-05-01 | 1 | 35 | 6.5 | KAMA | 0.60/0.00/0.00 | siena:0.51 |
| toskana | 43.082, 10.593 | Italy | 1532-05-01 → 1557-07-03 | 1 | 35 | 6.5 | KAMA | 0.60/0.00/0.00 | siena:0.51 |
| piza | 43.082, 10.593 | Italy | 1281-01-01 → 1406-10-09 | 3 | 35 | 6.5 | KAMA | 0.60/0.00/0.00 | siena:0.51 |
| OSMANLI | 46.886, 17.908 | Hungary | 1686-09-02 → 1688-05-19 | 16 | 35 | 2.5 | SERIT | 0.66/0.29/0.21 | macaristan:0.72 |
| tay-son | 12.466, 107.509 | Cambodia | 1786-06-01 → 1802-06-01 | 4 | 35 | 2.9 | SERIT | 0.53/0.00/0.00 | kamboc-kralligi:0.51 |
| afgan-durrani | 34.295, 73.626 | Pakistan | 1765-04-16 → 1808-01-01 | 1 | 34 | 3.1 | KAMA | 0.77/0.11/0.06 | sih-imparatorlugu:0.74 |
| ispanya | 36.775, 10.556 | Tunisia | 1537-01-01 → 1573-10-10 | 6 | 34 | 4.5 | SERIT | 0.36/0.00/0.00 | hafsi:0.56 |
| safevi | 39.614, 49.306 | Azerbaijan | 1515-09-19 → 1735-03-21 | 4 | 33 | 2.6 | SERIT | 0.57/0.00/0.00 | rusya:0.53 |
| OSMANLI | 36.764, 10.553 | Tunisia | 1574-08-24 → 1574-08-25 | 1 | 33 | 4.4 | SERIT | 0.48/0.00/0.00 | hafsi:0.54 |
| ispanyol-peru | 2.272, -69.133 | Colombia | 1760-03-11 → 1821-06-24 | 6 | 33 | 3.4 | KAMA | 0.66/1.11/0.70 | portekiz-brezilyasi:0.60 |
| venezuela-cumhuriyeti | 2.272, -69.133 | Colombia | 1830-01-13 → 1923-10-29 | 5 | 33 | 3.4 | KAMA | 0.66/1.11/0.70 | brezilya-imparatorlugu:0.60 |
| OSMANLI | 45.064, 14.875 | Croatia | 1527-01-01 → 1592-01-01 | 85 | 33 | 4.8 | KAMA | 0.49/0.00/0.00 | avusturya:0.43,venedik:0.09 |
| le-hanedani | 12.416, 107.515 | Cambodia | 1775-02-01 → 1786-06-01 | 1 | 33 | 3.5 | SERIT | 0.42/0.00/0.00 | kamboc-kralligi:0.50 |
| OSMANLI | 42.483, 18.720 | Montenegro | 1482-01-01 → 1499-01-01 | 5 | 33 | 5.1 | KAMA | 0.55/0.00/0.00 | venedik:0.39,OSMANLI-TABI:0.17 |
| inuit | 69.092, -135.127 | Canada | 1281-01-01 → 1880-09-01 | 3 | 33 | 3.5 | KAMA | 0.32/0.91/0.24 | dene:1.00 |
| venedik | 43.548, 16.252 | Croatia | 1420-01-01 → 1648-03-31 | 28 | 32 | 3.6 | KAMA | 0.49/0.00/0.00 | macaristan:0.58 |
| ispanya | 36.759, 10.537 | Tunisia | 1561-03-02 → 1574-08-24 | 5 | 32 | 3.8 | SERIT | 0.38/0.00/0.00 | hafsi:0.53 |
| ingiltere | 43.698, -71.393 | United States of America | 1620-12-21 → 1623-01-01 | 1 | 32 | 2.3 | SERIT | 0.79/0.00/0.00 | abenaki:0.51 |
| ingiltere | 36.195, -5.878 | Spain | 1716-01-01 → 1921-10-20 | 172 | 31 | 6.7 | KAMA | 0.36/0.00/0.00 | ispanya:0.56 |
| cin-cumhuriyeti | 30.635, 115.473 | China | 1911-10-10 → 1912-02-12 | 3 | 31 | 1.2 | KAMA | 0.76/0.00/0.00 | qing-hanedani:0.88 |
| ingiltere | 54.856, -82.368 | Canada | 1686-01-01 → 1725-12-15 | 5 | 31 | 3.6 | KAMA | 0.56/0.00/0.00 | kri:0.51 |
| bizans | 40.449, 26.646 | Turkey | 1352-03-01 → 1354-03-02 | 1 | 31 | 6.5 | SERIT | 0.48/0.00/0.00 | OSMANLI:0.53 |
| qing-hanedani | 30.636, 115.473 | China | 1853-02-24 → 1858-05-19 | 5 | 31 | 1.2 | SERIT | 0.75/0.00/0.00 | taiping:0.88 |
| almanya | 54.570, 9.938 | Germany | 1281-01-01 → 1864-10-30 | 34 | 31 | 6.0 | KAMA | 0.58/0.00/0.00 | danimarka:0.51 |
| belcika | 4.972, 19.246 | Dem. Rep. Congo | 1900-01-01 → 1923-10-29 | 4 | 30 | 3.5 | KAMA | 0.47/0.90/0.51 | fransa-cumhuriyet:0.98 |
| ispanya | 36.786, 10.585 | Tunisia | 1535-07-21 → 1573-01-01 | 27 | 30 | 3.7 | SERIT | 0.34/0.00/0.00 | hafsi:0.54 |
| norvec-kralligi | 60.468, 11.141 | Norway | 1281-01-01 → 1537-01-01 | 2 | 30 | 4.0 | SERIT | 0.42/0.78/0.30 | danimarka:0.60 |
| OSMANLI | 46.917, 18.099 | Hungary | 1543-08-10 → 1544-09-01 | 1 | 30 | 2.2 | KAMA | 0.73/0.34/0.25 | macaristan:0.65 |
| haydarabad-nizam | 19.660, 79.754 | India | 1724-10-11 → 1923-10-29 | 6 | 30 | 3.9 | KAMA | 0.55/0.32/0.15 | gond-kralliklari:0.53 |
| venedik | 42.043, 19.290 | Montenegro | 1281-01-01 → 1479-01-25 | 4 | 30 | 6.0 | SERIT | 0.31/0.00/0.00 | OSMANLI:1.00 |
| yeni-ispanya | 17.932, -96.471 | Mexico | 1529-01-01 → 1535-04-17 | 3 | 30 | 2.7 | KAMA | 0.41/0.00/0.00 | ispanya:1.00 |
| fransa-cumhuriyet | 12.518, -11.819 | Senegal | 1858-01-01 → 1861-03-10 | 2 | 29 | 4.0 | SERIT | 0.52/0.00/0.00 | bambara:1.00,futa-callon:0.52 |
| babur-imparatorlugu | 19.659, 79.756 | India | 1704-01-01 → 1724-10-11 | 7 | 29 | 3.9 | KAMA | 0.56/0.33/0.15 | gond-kralliklari:0.54 |
| ispanya | 18.123, -96.492 | Mexico | 1519-04-22 → 1523-01-01 | 9 | 29 | 5.5 | SERIT | 0.71/0.00/0.00 | nahua-sehir-devletleri:1.00,zapotek-krallik:0.44 |
| golkonda | 19.660, 79.757 | India | 1512-01-01 → 1687-09-21 | 2 | 29 | 3.9 | KAMA | 0.56/0.33/0.15 | berar:0.54 |
| OSMANLI-TABI | 24.968, 50.657 | Saudi Arabia | 1559-01-01 → 1913-07-29 | 121 | 29 | 2.5 | SERIT | 0.64/0.00/0.00 | suud:0.81 |
| OSMANLI | 37.724, 23.130 | Greece | 1460-05-29 → 1540-11-01 | 101 | 29 | 4.4 | SERIT | 0.63/0.00/0.00 | venedik:0.74 |
| nguyen-hanedani | 13.241, 107.637 | Vietnam | 1802-06-01 → 1884-06-06 | 4 | 29 | 1.8 | KAMA | 0.65/0.00/0.00 | kamboc-kralligi:0.66 |
| campa | 13.241, 107.637 | Vietnam | 1281-01-01 → 1471-03-02 | 2 | 29 | 1.8 | KAMA | 0.65/0.00/0.00 | angkor-kmer:0.68 |
| ingiliz-kuzey-amerika | 62.788, -111.320 | Canada | 1833-01-01 → 1867-07-01 | 15 | 29 | 2.8 | KAMA | 0.66/0.00/0.00 | dene:1.00 |
| OSMANLI | 38.090, 22.535 | Greece | 1499-08-26 → 1715-07-20 | 78 | 29 | 4.6 | KAMA | 0.60/0.00/0.00 | venedik:0.94 |
| tay-son | 13.240, 107.647 | Vietnam | 1786-06-01 → 1786-07-21 | 1 | 28 | 3.0 | SERIT | 0.53/0.00/0.00 | kamboc-kralligi:0.57 |
| nguyen-beyligi | 13.240, 107.647 | Vietnam | 1558-01-01 → 1773-01-01 | 2 | 28 | 3.0 | SERIT | 0.53/0.00/0.00 | kamboc-kralligi:0.57 |
| meksika | 31.618, -113.989 | Mexico | 1869-05-14 → 1923-10-29 | 6 | 28 | 1.8 | SERIT | 0.77/0.00/0.00 | abd:1.00 |
| sili-cumhuriyeti | -54.521, -71.447 | Chile | 1843-10-30 → 1923-10-29 | 7 | 28 | 8.1 | SERIT | 0.44/0.00/0.00 | arjantin-cumhuriyeti:0.69 |
| ispanya | 34.894, -6.247 | Morocco | 1610-01-01 → 1678-09-17 | 11 | 28 | 3.9 | KAMA | 0.55/0.00/0.00 | sadi:0.50 |
| OSMANLI | 35.736, -0.536 | Algeria | 1708-04-04 → 1831-01-04 | 74 | 28 | 5.7 | SERIT | 0.47/0.00/0.00 | OSMANLI-TABI:0.56 |
| ispanya | 35.736, -0.537 | Algeria | 1530-01-01 → 1788-01-01 | 46 | 28 | 6.2 | KAMA | 0.41/0.00/0.00 | zeyyani:0.56 |
| siyam-chakri | 18.070, 97.723 | Thailand | 1774-01-15 → 1923-10-29 | 10 | 28 | 3.9 | SERIT | 0.55/0.90/0.46 | konbaung:0.54 |
| lan-na | 18.070, 97.723 | Thailand | 1281-01-01 → 1558-04-02 | 1 | 28 | 3.9 | SERIT | 0.55/0.90/0.46 | pagan:0.54 |
| toungoo | 18.070, 97.723 | Thailand | 1740-01-01 → 1752-04-23 | 1 | 28 | 3.9 | SERIT | 0.55/0.90/0.46 | hanthawaddy:0.54 |
| konbaung | 18.070, 97.723 | Thailand | 1752-04-23 → 1757-05-06 | 2 | 28 | 3.9 | SERIT | 0.55/0.90/0.46 | hanthawaddy:0.54 |
| OSMANLI-TABI | 45.751, 29.756 | Ukraine | 1856-03-30 → 1878-07-13 | 22 | 28 | 6.9 | SERIT | 0.79/0.00/0.00 | rusya:0.69 |
| ming-hanedani | 23.041, 100.171 | China | 1382-03-16 → 1644-04-25 | 17 | 28 | 2.3 | KAMA | 0.59/1.25/0.76 | san-devletleri:0.71 |
| le-hanedani | 13.226, 107.654 | Vietnam | 1471-03-02 → 1558-01-01 | 2 | 28 | 4.6 | SERIT | 0.32/0.00/0.00 | kamboc-kralligi:0.54 |
| behmeni | 19.660, 79.759 | India | 1490-01-01 → 1512-01-01 | 2 | 28 | 3.3 | KAMA | 0.56/0.33/0.16 | berar:0.58 |
| kakatiya | 19.661, 79.759 | India | 1281-01-01 → 1323-01-01 | 2 | 28 | 3.3 | KAMA | 0.56/0.33/0.16 | yadava:0.58 |
| nayak-devletleri | 19.661, 79.759 | India | 1336-01-01 → 1361-01-01 | 1 | 28 | 3.3 | KAMA | 0.56/0.33/0.16 | delhi-sultanligi:0.58 |
| kuzey-yuan | 23.054, 100.168 | China | 1368-09-14 → 1382-03-16 | 3 | 28 | 1.7 | KAMA | 0.69/1.25/0.91 | san-devletleri:0.71 |
| afganistan | 37.040, 74.848 | China | 1883-08-15 → 1923-10-29 | 2 | 28 | 4.1 | SERIT | 0.43/0.00/0.00 | qing-hanedani:0.50 |
| yuan-hanedani | 24.526, 104.189 | China | 1368-09-14 → 1382-01-06 | 1 | 28 | 1.4 | KAMA | 0.33/0.46/0.25 | kuzey-yuan:0.66 |
| OSMANLI-TABI | 46.839, 38.644 | Russia | 1696-07-19 → 1697-01-01 | 1 | 28 | 2.1 | KAMA | 0.64/0.00/0.00 | rusya:0.96 |
| portekiz | 10.095, 76.266 | India | 1502-01-01 → 1661-12-08 | 54 | 27 | 8.6 | SERIT | 0.58/0.00/0.00 | kalikut:0.53 |
| hollanda | 10.095, 76.266 | India | 1661-12-08 → 1795-01-01 | 15 | 27 | 8.6 | SERIT | 0.58/0.00/0.00 | kalikut:0.53 |
| travankur | 10.095, 76.266 | India | 1281-01-01 → 1502-01-01 | 1 | 27 | 8.6 | SERIT | 0.58/0.00/0.00 | kalikut:0.53 |
| san-fan | 23.054, 100.168 | China | 1673-12-28 → 1681-12-07 | 13 | 27 | 1.7 | KAMA | 0.70/1.25/0.91 | san-devletleri:0.71 |
| guney-ming | 23.041, 100.171 | China | 1644-04-25 → 1659-01-07 | 15 | 27 | 2.3 | KAMA | 0.58/1.25/0.76 | san-devletleri:0.71 |
| qing-hanedani | 23.041, 100.171 | China | 1659-01-07 → 1729-01-01 | 17 | 27 | 2.3 | KAMA | 0.58/1.25/0.76 | san-devletleri:0.71 |
| yuan-hanedani | 23.041, 100.171 | China | 1281-01-01 → 1368-04-01 | 9 | 27 | 2.3 | KAMA | 0.58/1.25/0.76 | san-devletleri:0.71 |
| norvec-kralligi | 69.304, 20.171 | Norway | 1281-01-01 → 1537-01-01 | 2 | 27 | 6.8 | SERIT | 0.47/0.00/0.00 | isvec-birlik-oncesi:0.50 |
| danimarka | 69.304, 20.171 | Norway | 1537-01-01 → 1814-01-14 | 7 | 27 | 6.8 | SERIT | 0.47/0.00/0.00 | isvec:0.50 |
| norvec | 69.304, 20.171 | Norway | 1905-06-07 → 1923-10-29 | 1 | 27 | 6.8 | SERIT | 0.47/0.00/0.00 | isvec:0.50 |
| dene | 51.361, -121.809 | Canada | 1281-01-01 → 1899-06-21 | 2 | 27 | 3.7 | KAMA | 0.55/0.00/0.00 | kanada:0.81 |
| ibadan | 6.405, 3.004 | Nigeria | 1829-01-01 → 1893-08-15 | 1 | 27 | 1.4 | SERIT | 0.77/0.00/0.00 | benin-kralligi:1.00,dahomey:0.59,eve-notse:0.59 |
| benin-kralligi | 6.405, 3.004 | Nigeria | 1281-01-01 → 1861-08-06 | 1 | 27 | 1.4 | SERIT | 0.77/0.00/0.00 | eve-notse:0.59 |
| ingiltere | 6.405, 3.004 | Nigeria | 1901-01-01 → 1903-01-01 | 7 | 27 | 1.4 | SERIT | 0.76/0.00/0.00 | fransa-cumhuriyet:0.60 |
| gran-kolombiya | 8.451, -72.945 | Colombia | 1819-12-17 → 1821-06-24 | 1 | 27 | 4.3 | SERIT | 0.32/0.00/0.00 | ispanyol-peru:0.57 |
| ingiltere | 8.099, 79.854 | Sri Lanka | 1796-02-16 → 1815-03-02 | 17 | 27 | 7.7 | SERIT | 0.47/0.00/0.00 | kandy:0.71 |
| portekiz | 8.099, 79.854 | Sri Lanka | 1518-09-01 → 1656-05-12 | 39 | 27 | 7.7 | SERIT | 0.47/0.00/0.00 | kandy:0.71 |
| hollanda | 8.099, 79.854 | Sri Lanka | 1656-05-12 → 1796-02-16 | 20 | 27 | 7.7 | SERIT | 0.47/0.00/0.00 | kandy:0.71 |
| ispanyol-peru | 10.096, -67.725 | Venezuela | 1567-07-25 → 1591-11-03 | 6 | 27 | 6.1 | SERIT | 0.51/0.00/0.00 | ispanya:1.00 |
| seylan-sinhala | 8.099, 79.854 | Sri Lanka | 1469-01-01 → 1518-09-01 | 1 | 27 | 7.7 | SERIT | 0.47/0.00/0.00 | kandy:0.71 |
| venedik | 37.455, 22.711 | Greece | 1281-01-01 → 1715-07-20 | 17 | 26 | 4.6 | KAMA | 0.52/0.00/0.00 | bizans:0.51 |
| venedik | 37.449, 22.726 | Greece | 1482-01-01 → 1489-02-26 | 1 | 26 | 6.0 | SERIT | 0.33/0.00/0.00 | OSMANLI:0.52 |
| OSMANLI | 37.453, 22.712 | Greece | 1821-03-25 → 1822-12-12 | 3 | 26 | 4.6 | KAMA | 0.52/0.00/0.00 | yunanistan:0.51 |
| yunanistan | 37.450, 22.722 | Greece | 1825-06-22 → 1828-10-05 | 2 | 26 | 5.2 | SERIT | 0.41/0.00/0.00 | OSMANLI-TABI:0.53 |
| bicapur | 11.840, 77.828 | India | 1565-01-26 → 1687-01-01 | 10 | 26 | 2.8 | KAMA | 0.35/0.59/0.33 | nayak-devletleri:0.64,meysur:0.55 |
| mehdi | 10.419, 35.305 | Ethiopia | 1885-01-26 → 1899-01-19 | 3 | 26 | 1.9 | KAMA | 0.62/1.25/0.74 | habesistan:0.62 |
| delhi-sultanligi | 11.840, 77.828 | India | 1335-01-01 → 1336-01-01 | 1 | 26 | 2.9 | KAMA | 0.35/0.59/0.33 | madurai-sultanligi:0.64,hoysala:0.56 |
| tay-son | 13.165, 107.594 | Vietnam | 1786-07-21 → 1801-06-15 | 2 | 26 | 2.9 | SERIT | 0.57/0.00/0.00 | kamboc-kralligi:0.58 |
| ingiliz-kuzey-amerika | 51.383, -121.847 | Canada | 1827-01-01 → 1867-07-01 | 19 | 26 | 1.4 | KAMA | 0.62/0.00/0.00 | dene:0.86,secwepemc:0.08 |
| kanada | 51.383, -121.847 | Canada | 1867-07-01 → 1899-06-21 | 10 | 26 | 1.4 | KAMA | 0.62/0.00/0.00 | dene:0.86 |
| ingiliz-sudani | 10.419, 35.305 | Ethiopia | 1899-01-19 → 1923-10-29 | 3 | 26 | 2.0 | KAMA | 0.62/1.25/0.73 | habesistan:0.62 |
| OSMANLI | 37.147, 9.801 | Tunisia | 1569-01-01 → 1573-10-10 | 6 | 26 | 1.7 | KAMA | 0.36/0.00/0.00 | hafsi:0.89 |
| OSMANLI | 39.129, 22.834 | Greece | 1832-01-01 → 1881-07-02 | 59 | 26 | 5.5 | SERIT | 0.59/0.00/0.00 | yunanistan:0.77 |
| venedik | 38.039, 23.466 | Greece | 1687-09-26 → 1688-04-01 | 2 | 26 | 3.0 | SERIT | 0.57/0.00/0.00 | OSMANLI:0.81 |
| ingiliz-kuzey-amerika | 51.420, -121.814 | Canada | 1812-01-01 → 1827-01-01 | 11 | 26 | 1.3 | KAMA | 0.61/0.00/0.00 | dene:0.86,secwepemc:0.08 |
| OSMANLI | 37.434, 21.673 | Greece | 1821-03-25 → 1825-02-24 | 5 | 26 | 3.0 | KAMA | 0.67/0.00/0.00 | yunanistan:0.56 |
| OSMANLI-TABI | 37.434, 21.673 | Greece | 1825-02-24 → 1825-06-22 | 1 | 26 | 3.0 | KAMA | 0.67/0.00/0.00 | yunanistan:0.56 |
| ingiliz-kuzey-amerika | 57.582, -111.560 | Canada | 1843-06-10 → 1867-07-01 | 9 | 26 | 5.8 | SERIT | 0.56/0.95/0.43 | dene:1.00 |
| ceneviz | 44.493, 33.642 | Russia | 1324-01-01 → 1475-06-06 | 4 | 25 | 4.7 | SERIT | 0.51/0.00/0.00 | bizans:0.61 |
| kanada | 57.582, -111.560 | Canada | 1867-07-01 → 1898-01-01 | 9 | 25 | 5.8 | SERIT | 0.56/0.95/0.43 | dene:1.00 |
| arjantin-cumhuriyeti | -24.338, -65.532 | Argentina | 1810-05-25 → 1814-06-20 | 1 | 25 | 2.5 | KAMA | 0.53/0.00/0.00 | ispanyol-peru:1.00 |
| ingiliz-kuzey-amerika | 57.562, -111.579 | Canada | 1788-01-01 → 1843-06-10 | 34 | 25 | 5.7 | SERIT | 0.56/0.95/0.43 | dene:1.00 |
| ingiltere | 3.558, 117.095 | Indonesia | 1878-01-22 → 1923-10-29 | 101 | 25 | 5.6 | SERIT | 0.43/0.00/0.00 | hollanda-dogu-hint:0.58 |
| kirim | 46.304, 31.972 | Ukraine | 1774-07-21 → 1783-04-19 | 2 | 25 | 5.0 | SERIT | 0.78/0.00/0.00 | OSMANLI:1.00,rusya:0.19 |
| gran-kolombiya | 2.269, -69.160 | Colombia | 1821-06-24 → 1830-01-13 | 4 | 25 | 2.4 | KAMA | 0.76/1.19/0.77 | portekiz-brezilyasi:0.65 |
| nguyen-hanedani | 13.165, 107.594 | Vietnam | 1802-06-20 → 1832-01-01 | 1 | 25 | 2.9 | SERIT | 0.57/0.00/0.00 | kamboc-kralligi:0.59 |
| ingiliz-kuzey-amerika | 58.945, -110.031 | Canada | 1848-01-01 → 1850-09-07 | 1 | 25 | 2.4 | KAMA | 0.62/0.00/0.00 | dene:1.00 |
| ispanya | 35.789, -0.514 | Algeria | 1521-08-13 → 1792-09-12 | 52 | 25 | 6.1 | KAMA | 0.37/0.00/0.00 | zeyyani:0.56 |
| OSMANLI | 38.184, 22.214 | Greece | 1687-08-01 → 1822-12-12 | 4 | 25 | 2.8 | KAMA | 0.59/0.00/0.00 | yunanistan:0.78 |
| umman-zengibar | -10.605, 32.615 | Zambia | 1887-01-01 → 1895-01-01 | 5 | 25 | 2.6 | SERIT | 0.53/0.00/0.00 | bemba:0.59 |
| almanya | -8.859, 30.973 | Zambia | 1890-11-04 → 1916-09-01 | 37 | 25 | 2.7 | KAMA | 0.55/0.00/0.00 | bemba:0.60 |
| almanya | -8.865, 30.987 | Zambia | 1915-09-01 → 1916-02-16 | 2 | 25 | 2.7 | KAMA | 0.54/0.00/0.00 | ingiltere:0.60 |
| yuan-hanedani | 23.023, 100.198 | China | 1368-04-01 → 1368-09-14 | 2 | 25 | 1.5 | KAMA | 0.70/1.26/0.96 | san-devletleri:0.76 |
| ayutthaya | 17.869, 100.410 | Thailand | 1569-08-08 → 1584-05-03 | 1 | 25 | 4.3 | KAMA | 0.35/0.47/0.28 | toungoo:0.88 |
| san-devletleri | 22.608, 100.431 | China | 1729-01-01 → 1913-01-01 | 1 | 25 | 3.0 | SERIT | 0.48/1.07/0.56 | qing-hanedani:0.54 |
| ingiltere | 13.486, -15.885 | Gambia | 1894-01-01 → 1923-10-29 | 61 | 24 | 4.0 | SERIT | 0.56/0.00/0.00 | fransa-cumhuriyet:0.61 |
| san-fan | 23.835, 106.924 | China | 1673-12-28 → 1680-01-01 | 4 | 24 | 3.0 | SERIT | 0.57/0.00/0.00 | mac-hanedani:0.51 |
| OSMANLI | 38.231, 45.434 | Iran | 1585-09-25 → 1588-09-01 | 2 | 24 | 3.8 | SERIT | 0.44/0.00/0.00 | safevi:0.62 |
| OSMANLI | 37.240, 45.283 | Iran | 1724-01-01 → 1730-08-12 | 8 | 24 | 5.5 | SERIT | 0.52/0.00/0.00 | safevi:0.58 |
| yeni-ispanya | 16.557, -91.257 | Mexico | 1535-04-17 → 1821-09-27 | 24 | 24 | 3.7 | SERIT | 0.50/0.00/0.00 | maya-sehir-devletleri:0.50 |
| ispanya | 36.625, 5.332 | Algeria | 1530-01-01 → 1530-02-14 | 1 | 24 | 2.9 | SERIT | 0.51/0.00/0.00 | OSMANLI:0.87 |
| ingiltere | -10.611, 32.616 | Zambia | 1895-01-01 → 1899-01-01 | 8 | 24 | 2.8 | SERIT | 0.50/0.00/0.00 | bemba:0.60 |
| ingiliz-kuzey-amerika | 58.952, -110.011 | Canada | 1850-09-07 → 1851-01-01 | 1 | 24 | 2.3 | KAMA | 0.62/0.00/0.00 | dene:1.00 |
| kanada | 62.788, -111.320 | Canada | 1867-07-01 → 1899-06-21 | 10 | 24 | 3.4 | KAMA | 0.61/0.00/0.00 | dene:1.00 |
| qing-hanedani | 42.760, 129.877 | North Korea | 1653-01-01 → 1912-02-12 | 76 | 23 | 3.2 | KAMA | 0.65/0.41/0.08 | joseon:0.52 |
| yunanistan | 38.420, 22.350 | Greece | 1821-03-25 → 1832-01-01 | 7 | 23 | 6.7 | KAMA | 0.58/0.00/0.00 | OSMANLI:1.00 |
| OSMANLI | 38.297, 23.830 | Greece | 1687-09-26 → 1688-04-01 | 6 | 23 | 4.8 | KAMA | 0.56/0.00/0.00 | venedik:0.61 |
| OSMANLI | 38.391, 42.877 | Turkey | 1916-03-01 → 1916-08-08 | 10 | 23 | 5.8 | SERIT | 0.72/0.00/0.00 | rusya:0.91 |
| rusya | 46.642, 38.296 | Russia | 1696-07-19 → 1783-04-19 | 22 | 23 | 6.1 | KAMA | 0.49/0.00/0.00 | OSMANLI-TABI:1.00 |
| ceneviz | 46.642, 38.296 | Russia | 1281-01-01 → 1475-06-06 | 8 | 23 | 6.1 | KAMA | 0.49/0.00/0.00 | altinorda:0.75 |
| portekiz | 12.735, -15.574 | Senegal | 1588-01-01 → 1923-10-29 | 40 | 23 | 2.5 | KAMA | 0.61/0.00/0.00 | gambiya-mandinka:0.91,sine-salum:0.86 |
| arjantin-cumhuriyeti | -41.761, -72.633 | Chile | 1883-01-01 → 1899-07-05 | 3 | 23 | 3.9 | KAMA | 0.78/0.00/0.00 | sili-cumhuriyeti:0.99 |
| OSMANLI | 40.325, 26.526 | Turkey | 1352-03-01 → 1354-03-02 | 1 | 23 | 4.0 | KAMA | 0.65/0.00/0.00 | bizans:1.00 |
| ingiliz-kuzey-amerika | 58.973, -109.952 | Canada | 1788-01-01 → 1798-01-01 | 5 | 23 | 2.4 | SERIT | 0.63/0.00/0.00 | dene:1.00 |
| OSMANLI-TABI | 16.228, 39.207 | Eritrea | 1865-01-01 → 1885-02-05 | 27 | 23 | 2.3 | KAMA | 0.65/0.00/0.00 | OSMANLI:0.32,habesistan:0.29 |
| yeni-ispanya | 16.590, -91.267 | Mexico | 1529-01-01 → 1535-04-17 | 3 | 23 | 3.3 | SERIT | 0.46/0.00/0.00 | maya-sehir-devletleri:0.55 |
| sind | 26.197, 67.689 | Pakistan | 1839-02-03 → 1843-02-17 | 1 | 23 | 6.7 | KAMA | 0.58/0.00/0.00 | ingiliz-hindistani:0.54 |
| bizans | 41.531, 28.227 | — | 1417-01-01 → 1423-09-14 | 1 | 23 | 1.9 | SERIT | 0.74/0.00/0.00 | OSMANLI:0.50 |
| venedik | 38.924, 21.193 | Greece | 1684-09-29 → 1797-10-17 | 23 | 23 | 4.0 | SERIT | 0.38/0.00/0.00 | OSMANLI:0.74 |
| ingiliz-kuzey-amerika | 56.483, -124.802 | Canada | 1822-01-01 → 1843-06-10 | 14 | 23 | 4.4 | SERIT | 0.30/0.00/0.00 | dene:0.87 |
| meksika | 16.560, -91.253 | Mexico | 1821-09-27 → 1923-10-29 | 14 | 23 | 3.2 | SERIT | 0.46/0.00/0.00 | guatemala:0.56 |
| OSMANLI | 38.948, 21.182 | Greece | 1881-07-02 → 1913-11-14 | 37 | 23 | 4.7 | SERIT | 0.50/0.00/0.00 | yunanistan:0.65 |
| yeni-ispanya | 15.969, -91.155 | Guatemala | 1543-03-10 → 1697-03-13 | 20 | 23 | 4.3 | SERIT | 0.46/0.00/0.00 | maya-sehir-devletleri:0.54 |
| cin-cumhuriyeti | 42.760, 129.878 | North Korea | 1912-02-12 → 1923-10-29 | 6 | 23 | 3.3 | KAMA | 0.65/0.42/0.08 | meiji-japonya:0.52 |
| fransa-cumhuriyet | 38.925, 21.195 | Greece | 1797-10-17 → 1798-10-23 | 3 | 23 | 3.9 | SERIT | 0.37/0.00/0.00 | OSMANLI:0.75 |
| inuit | 58.941, -69.890 | Canada | 1867-10-18 → 1880-09-01 | 1 | 22 | 3.5 | KAMA | 0.52/0.00/0.00 | kanada:0.50 |
| afgan-durrani | 34.310, 73.608 | Pakistan | 1808-01-01 → 1813-07-13 | 1 | 22 | 2.1 | KAMA | 0.72/0.09/0.05 | sih-imparatorlugu:0.63 |
| OSMANLI | 42.125, 19.243 | Montenegro | 1697-01-01 → 1878-07-13 | 159 | 22 | 4.0 | SERIT | 0.55/0.00/0.00 | karadag:0.75 |
| OSMANLI | 30.251, 49.259 | Iran | 1847-05-31 → 1914-11-22 | 69 | 22 | 6.0 | KAMA | 0.56/0.00/0.00 | kacar:0.97 |
| umman-zengibar | -1.400, 41.743 | Somalia | 1698-12-13 → 1923-10-29 | 10 | 22 | 1.4 | SERIT | 0.69/0.00/0.00 | somali:0.56 |
| belcika | -1.193, 16.936 | Dem. Rep. Congo | 1885-01-01 → 1923-10-29 | 16 | 22 | 1.6 | KAMA | 0.59/1.10/0.81 | fransa-cumhuriyet:0.61 |
| svahili-sehirleri | -1.400, 41.743 | Somalia | 1281-01-01 → 1600-01-01 | 2 | 22 | 1.4 | SERIT | 0.69/0.00/0.00 | somali:0.56 |
| kanada | 56.465, -124.825 | Canada | 1867-07-01 → 1899-06-21 | 10 | 22 | 4.5 | SERIT | 0.30/0.00/0.00 | dene:0.87 |
| rusya | 61.604, 29.322 | Finland | 1721-08-30 → 1721-09-10 | 1 | 22 | 6.3 | SERIT | 0.72/0.00/0.00 | isvec:0.51 |
| ingiltere | 17.905, -76.913 | Jamaica | 1655-01-01 → 1655-05-10 | 1 | 22 | 2.9 | SERIT | 0.54/0.00/0.00 | ispanya:1.00 |
| rusya | 58.280, 27.412 | Estonia | 1703-05-27 → 1721-08-30 | 10 | 22 | 2.0 | KAMA | 0.79/0.31/0.17 | isvec:0.52 |
| ingiliz-kuzey-amerika | 56.465, -124.825 | Canada | 1843-06-10 → 1867-07-01 | 9 | 22 | 4.5 | SERIT | 0.30/0.00/0.00 | dene:0.87 |
| ispanya | 36.627, 5.337 | Algeria | 1510-01-01 → 1555-09-27 | 53 | 22 | 3.0 | KAMA | 0.54/0.00/0.00 | OSMANLI:0.80 |
| inka-imparatorlugu | -11.060, -77.416 | Peru | 1537-07-01 → 1539-01-01 | 1 | 22 | 4.2 | SERIT | 0.34/0.00/0.00 | ispanyol-peru:0.56 |
| ingiliz-kuzey-amerika | 54.756, -102.117 | Canada | 1774-01-01 → 1838-01-01 | 37 | 22 | 5.0 | SERIT | 0.39/0.00/0.00 | kri:0.50 |
| sovyet-rusya | 58.280, 27.412 | Estonia | 1918-02-24 → 1920-02-02 | 5 | 22 | 1.9 | KAMA | 0.79/0.36/0.20 | estonya:0.53 |
| fransa | 47.737, -55.018 | Canada | 1662-01-01 → 1763-02-10 | 31 | 22 | 2.5 | KAMA | 0.35/0.00/0.00 | ingiltere:0.86,beothuk:0.24 |
| ingiliz-kuzey-amerika | 54.758, -102.142 | Canada | 1838-01-01 → 1867-07-01 | 11 | 22 | 5.0 | SERIT | 0.38/0.00/0.00 | kri:0.51 |
| kanada | 54.758, -102.126 | Canada | 1867-07-01 → 1876-08-23 | 3 | 22 | 5.0 | SERIT | 0.39/0.00/0.00 | kri:0.51 |
| ingiltere | 14.272, 121.383 | Philippines | 1762-10-06 → 1764-05-31 | 3 | 21 | 3.1 | KAMA | 0.65/0.00/0.00 | ispanya:0.55 |
| ingiltere | 1.399, 32.618 | Uganda | 1901-01-01 → 1908-01-01 | 13 | 21 | 1.5 | KAMA | 0.70/0.00/0.00 | buganda:0.60,ingiliz-sudani:0.13 |
| fransa-cumhuriyet | 44.090, 8.215 | Italy | 1797-06-14 → 1815-06-09 | 17 | 21 | 1.7 | KAMA | 0.67/0.00/0.00 | sardinya:0.60 |
| ceneviz | 44.090, 8.215 | Italy | 1281-01-01 → 1797-06-14 | 16 | 21 | 1.8 | KAMA | 0.67/0.00/0.00 | sardinya:0.37,fransa:0.32 |
| moskova | 58.274, 27.410 | Estonia | 1510-01-13 → 1547-01-16 | 3 | 21 | 1.6 | KAMA | 0.79/0.36/0.13 | almanya:0.52 |
| rusya | 58.274, 27.410 | Estonia | 1547-01-16 → 1703-05-27 | 73 | 21 | 1.6 | KAMA | 0.79/0.36/0.13 | almanya:0.52 |
| pskov | 58.274, 27.410 | Estonia | 1348-01-01 → 1510-01-13 | 1 | 21 | 1.6 | KAMA | 0.79/0.35/0.12 | almanya:0.53 |
| novgorod | 58.274, 27.410 | Estonia | 1281-01-01 → 1348-01-01 | 1 | 21 | 1.6 | KAMA | 0.79/0.36/0.13 | almanya:0.52 |
| eretna | 41.314, 36.610 | Turkey | 1379-01-01 → 1381-01-01 | 1 | 21 | 3.0 | SERIT | 0.41/0.24/0.26 | taceddin:0.50 |
| rusya | 51.106, 78.066 | Kazakhstan | 1718-01-01 → 1720-01-01 | 1 | 21 | 2.7 | KAMA | 0.36/1.52/0.72 | cungar:0.53 |
| burhaneddin | 41.314, 36.610 | Turkey | 1381-01-01 → 1398-07-01 | 2 | 21 | 3.0 | SERIT | 0.41/0.24/0.26 | taceddin:0.50 |
| venedik | 37.990, 23.023 | Greece | 1281-01-01 → 1715-07-20 | 35 | 21 | 8.2 | SERIT | 0.60/0.00/0.00 | OSMANLI:0.50 |
| venedik | 37.990, 23.026 | Greece | 1470-07-12 → 1537-10-01 | 8 | 21 | 8.2 | SERIT | 0.60/0.00/0.00 | OSMANLI:0.50 |
| sili-cumhuriyeti | -41.779, -72.577 | Chile | 1894-06-20 → 1911-05-31 | 1 | 21 | 3.3 | KAMA | 0.78/0.00/0.00 | arjantin-cumhuriyeti:0.96 |
| mehmed-celebi | 41.314, 36.610 | Turkey | 1402-07-28 → 1411-02-17 | 4 | 21 | 3.0 | SERIT | 0.41/0.24/0.26 | taceddin:0.50 |
| sosoni | 36.298, -117.912 | United States of America | 1281-01-01 → 1868-07-03 | 1 | 21 | 2.8 | SERIT | 0.51/0.00/0.00 | payut:0.54 |
| OSMANLI | 30.821, 47.348 | Iraq | 1776-04-16 → 1779-04-01 | 1 | 21 | 5.5 | KAMA | 0.57/0.00/0.00 | zend:1.00 |
| ispanyol-peru | -11.078, -77.412 | Peru | 1535-01-18 → 1542-11-20 | 9 | 21 | 3.5 | SERIT | 0.41/0.00/0.00 | inka-imparatorlugu:1.00 |
| belcika | -3.623, 18.518 | Dem. Rep. Congo | 1885-01-01 → 1887-01-01 | 1 | 21 | 1.0 | KAMA | 0.43/1.21/0.90 | lunda-imparatorlugu:0.75 |
| OSMANLI | 45.100, 14.893 | Croatia | 1636-01-01 → 1689-01-01 | 41 | 21 | 4.6 | SERIT | 0.52/0.00/0.00 | avusturya:0.50,venedik:0.13 |
| sovyet-rusya | 47.651, 86.919 | China | 1917-11-07 → 1923-10-29 | 20 | 21 | 1.3 | SERIT | 0.79/1.21/0.81 | cin-cumhuriyeti:0.69 |
| rusya | 47.651, 86.919 | China | 1864-10-07 → 1917-03-15 | 36 | 21 | 1.3 | SERIT | 0.79/1.21/0.81 | qing-hanedani:0.69 |
| rusya-gecici-hukumet | 47.651, 86.919 | China | 1917-03-15 → 1917-11-07 | 1 | 21 | 1.3 | SERIT | 0.79/1.21/0.81 | cin-cumhuriyeti:0.69 |
| haydarabad-nizam | 19.765, 77.080 | India | 1853-05-21 → 1923-10-29 | 1 | 20 | 4.9 | KAMA | 0.37/0.00/0.00 | ingiliz-hindistani:0.61 |
| cikasav | 36.709, -89.149 | United States of America | 1739-01-01 → 1832-10-20 | 1 | 20 | 2.2 | KAMA | 0.72/1.21/0.78 | fransa:0.61 |
| bosna | 42.449, 18.716 | Montenegro | 1382-01-01 → 1482-01-01 | 6 | 20 | 5.5 | SERIT | 0.70/0.00/0.00 | macaristan:1.00 |
| qing-hanedani | 42.758, 129.931 | North Korea | 1658-01-01 → 1659-01-07 | 1 | 20 | 3.4 | KAMA | 0.51/0.00/0.00 | joseon:0.55 |
| kanada | 47.825, -113.968 | United States of America | 1874-01-01 → 1898-01-01 | 8 | 20 | 3.4 | KAMA | 0.55/0.00/0.00 | abd:1.00 |
| vijayanagara | 16.279, 79.313 | India | 1490-01-01 → 1565-01-26 | 5 | 20 | 8.8 | SERIT | 0.36/0.85/0.21 | behmeni:0.70 |
| ahmednagar | 19.764, 77.078 | India | 1499-01-01 → 1633-06-28 | 4 | 20 | 4.4 | KAMA | 0.45/0.00/0.00 | babur-imparatorlugu:1.00 |
| qing-hanedani | 39.061, 113.595 | China | 1644-05-31 → 1644-06-06 | 1 | 20 | 5.6 | SERIT | 0.64/0.00/0.00 | ming-hanedani:1.00 |
| bicapur | 16.279, 79.313 | India | 1565-01-26 → 1619-01-01 | 1 | 20 | 8.8 | SERIT | 0.36/0.84/0.21 | golkonda:0.70 |
| fransiz-cinhindi | 17.691, 106.341 | Vietnam | 1883-08-25 → 1884-06-06 | 1 | 20 | 9.8 | SERIT | 0.47/0.00/0.00 | nguyen-hanedani:0.50 |
| tay-son | 17.691, 106.341 | Vietnam | 1801-06-15 → 1802-06-20 | 2 | 20 | 9.8 | SERIT | 0.47/0.00/0.00 | nguyen-hanedani:0.50 |
| tran-hanedani | 17.691, 106.341 | Vietnam | 1281-01-01 → 1306-01-01 | 1 | 20 | 9.8 | SERIT | 0.47/0.00/0.00 | campa:0.50 |
| le-hanedani | 17.691, 106.341 | Vietnam | 1592-01-01 → 1786-07-21 | 3 | 20 | 9.8 | SERIT | 0.47/0.00/0.00 | nguyen-beyligi:0.50 |
| OSMANLI | 46.358, 30.261 | Ukraine | 1484-08-04 → 1812-05-28 | 86 | 20 | 3.7 | SERIT | 0.56/1.59/0.66 | OSMANLI-TABI:0.51 |
| belcika | -3.769, 19.090 | Dem. Rep. Congo | 1885-01-01 → 1896-01-01 | 8 | 20 | 3.1 | SERIT | 0.54/1.20/0.65 | lunda-imparatorlugu:0.56 |
| meysur | 14.365, 74.736 | India | 1763-01-01 → 1799-05-04 | 5 | 20 | 2.5 | SERIT | 0.39/0.00/0.00 | portekiz:1.00 |
| belcika | 4.942, 20.007 | Dem. Rep. Congo | 1900-01-01 → 1923-10-29 | 4 | 20 | 2.7 | SERIT | 0.39/1.22/0.64 | fransa-cumhuriyet:0.60 |
| OSMANLI-TABI | 19.666, 42.880 | Saudi Arabia | 1874-11-02 → 1878-03-03 | 8 | 20 | 2.0 | SERIT | 0.70/0.00/0.00 | OSMANLI:0.62 |
| danimarka | 62.424, 15.478 | Sweden | 1537-01-01 → 1645-08-13 | 3 | 20 | 1.8 | KAMA | 0.65/0.00/0.00 | isvec:0.60 |
| norvec-kralligi | 62.424, 15.478 | Sweden | 1281-01-01 → 1537-01-01 | 2 | 20 | 1.8 | KAMA | 0.65/0.00/0.00 | isvec-birlik-oncesi:0.60 |
| fransa-cumhuriyet | 17.092, -16.240 | Mauritania | 1792-09-22 → 1842-09-09 | 37 | 20 | 3.2 | KAMA | 0.58/0.00/0.00 | valo:1.00 |
| fransa-cumhuriyet | 17.067, -16.242 | Mauritania | 1842-09-09 → 1855-02-25 | 11 | 20 | 3.0 | SERIT | 0.71/0.00/0.00 | valo:1.00 |
| fransa | 17.092, -16.240 | Mauritania | 1659-01-01 → 1792-09-22 | 54 | 20 | 3.2 | KAMA | 0.58/0.00/0.00 | valo:1.00 |
| afgan-durrani | 33.150, 75.710 | India | 1808-01-01 → 1819-07-05 | 4 | 19 | 5.5 | KAMA | 0.49/1.09/0.27 | sih-imparatorlugu:0.50 |
| rusya | 45.710, 29.761 | Ukraine | 1856-03-30 → 1878-07-13 | 28 | 19 | 5.5 | KAMA | 0.78/0.00/0.00 | OSMANLI-TABI:1.00 |
| ingiltere | 50.406, -75.236 | Canada | 1686-01-01 → 1763-02-10 | 28 | 19 | 5.8 | KAMA | 0.78/0.00/0.00 | kri:1.00 |
| fransa-cumhuriyet | 13.463, -15.485 | Gambia | 1887-01-01 → 1923-10-29 | 47 | 19 | 3.0 | SERIT | 0.70/0.00/0.00 | gambiya-mandinka:1.00,ingiltere:0.46 |
| rusya | 50.829, 78.587 | Kazakhstan | 1718-01-01 → 1720-01-01 | 1 | 19 | 4.0 | KAMA | 0.53/0.59/0.22 | cungar:0.64 |
| OSMANLI-TABI | 43.090, 17.461 | Croatia | 1459-03-07 → 1806-05-27 | 325 | 19 | 9.2 | KAMA | 0.52/0.00/0.00 | hersek:0.50 |
| OSMANLI-TABI | 36.516, 23.090 | Greece | 1825-06-22 → 1828-10-05 | 2 | 19 | 4.2 | SERIT | 0.55/0.00/0.00 | yunanistan:0.87 |
| avusturya | 43.100, 17.448 | Croatia | 1814-01-28 → 1908-10-05 | 6 | 19 | 9.2 | KAMA | 0.52/0.00/0.00 | OSMANLI:0.50 |
| ingiltere | 21.721, 89.251 | Bangladesh | 1690-08-24 → 1716-01-01 | 4 | 19 | 7.0 | SERIT | 0.44/0.00/0.00 | babur-imparatorlugu:1.00 |
| muromachi | 35.689, 135.983 | Japan | 1550-01-01 → 1573-01-01 | 2 | 19 | 2.7 | KAMA | 0.51/0.00/0.00 | azuchi-momoyama:0.56 |
| ingiliz-hindistani | 14.351, 74.670 | India | 1853-01-01 → 1885-11-28 | 5 | 19 | 3.4 | KAMA | 0.52/0.00/0.00 | portekiz:1.00 |
| fransa-cumhuriyet | 43.100, 17.448 | Croatia | 1806-05-27 → 1814-01-28 | 8 | 19 | 9.2 | KAMA | 0.52/0.00/0.00 | OSMANLI:0.50 |
| venedik | 43.100, 17.448 | Croatia | 1281-01-01 → 1358-02-18 | 1 | 19 | 9.2 | KAMA | 0.52/0.00/0.00 | bosna:0.50 |
| macaristan | 43.100, 17.454 | Croatia | 1358-02-18 → 1459-03-07 | 8 | 19 | 8.8 | SERIT | 0.39/0.00/0.00 | bosna:0.56 |
| ingiltere | 43.862, -73.424 | United States of America | 1685-01-01 → 1725-12-15 | 11 | 19 | 1.6 | KAMA | 0.68/0.00/0.00 | haudenosaunee:0.58 |
| ispanya | 42.254, 3.225 | Spain | 1479-01-20 → 1923-10-29 | 87 | 19 | 3.1 | SERIT | 0.57/0.00/0.00 | fransa:0.51 |
| ispanya | 42.251, 3.241 | Spain | 1697-09-20 → 1698-11-17 | 1 | 19 | 3.0 | SERIT | 0.56/0.00/0.00 | fransa:0.52 |
| yugoslavya | 43.100, 17.454 | Croatia | 1918-11-11 → 1918-12-01 | 2 | 19 | 8.8 | SERIT | 0.39/0.00/0.00 | sirbistan:0.56 |
| kanada | 47.861, -113.987 | United States of America | 1898-01-01 → 1899-06-21 | 1 | 18 | 3.7 | KAMA | 0.55/0.00/0.00 | abd:1.00 |
| aragon | 42.252, 3.239 | Spain | 1463-01-01 → 1479-01-20 | 1 | 18 | 3.0 | SERIT | 0.56/0.00/0.00 | fransa:0.52 |
| fransiz-cinhindi | 15.721, 104.965 | Thailand | 1863-08-11 → 1893-10-03 | 3 | 18 | 2.7 | SERIT | 0.55/0.00/0.00 | siyam-chakri:0.89 |
| kamboc-kralligi | 15.721, 104.965 | Thailand | 1795-01-01 → 1863-08-11 | 1 | 18 | 2.7 | SERIT | 0.55/0.00/0.00 | siyam-chakri:0.89 |
| OSMANLI-TABI | 36.856, 6.156 | Algeria | 1837-10-13 → 1839-05-13 | 3 | 18 | 3.9 | KAMA | 0.52/0.00/0.00 | fransa-cumhuriyet:0.60 |
| ingiltere | 42.752, -70.858 | United States of America | 1776-07-04 → 1783-09-03 | 5 | 18 | 5.9 | KAMA | 0.63/0.09/0.03 | abd:0.51 |
| peru-cumhuriyeti | -3.300, -79.398 | Ecuador | 1824-12-09 → 1923-10-29 | 7 | 18 | 3.4 | SERIT | 0.45/0.00/0.00 | ekvador-cumhuriyeti:0.74 |
| qing-hanedani | 21.916, 108.506 | China | 1673-12-28 → 1680-01-01 | 8 | 18 | 3.7 | KAMA | 0.79/0.00/0.00 | san-fan:0.51 |
| ispanyol-peru | -3.300, -79.398 | Ecuador | 1542-11-20 → 1824-12-09 | 4 | 18 | 3.4 | SERIT | 0.45/0.00/0.00 | gran-kolombiya:0.68 |
| ispanya | 41.702, -8.723 | Portugal | 1697-09-20 → 1698-11-17 | 1 | 18 | 4.9 | KAMA | 0.55/0.00/0.00 | portekiz:0.53 |
| sili-cumhuriyeti | -41.766, -72.552 | Chile | 1911-05-31 → 1923-10-29 | 1 | 18 | 2.3 | KAMA | 0.79/0.00/0.00 | arjantin-cumhuriyeti:0.75 |
| OSMANLI-TABI | 46.870, 31.862 | Ukraine | 1475-06-06 → 1480-01-01 | 6 | 18 | 4.4 | SERIT | 0.58/0.00/0.00 | altinorda:0.73,litvanya-buyuk-dukalik:0.33 |
| fransa-cumhuriyet | 36.638, 5.359 | Algeria | 1833-09-29 → 1838-10-13 | 3 | 18 | 2.6 | SERIT | 0.51/0.00/0.00 | OSMANLI-TABI:0.84 |
| ispanya | 41.693, -8.728 | Portugal | 1479-01-20 → 1923-10-29 | 174 | 18 | 4.7 | KAMA | 0.56/0.00/0.00 | portekiz:0.53 |
| OSMANLI | 35.085, 35.918 | Syria | 1918-10-01 → 1918-10-13 | 4 | 18 | 4.0 | SERIT | 0.60/0.00/0.00 | fransa-cumhuriyet:0.70 |
| fransa-cumhuriyet | 51.752, 4.162 | Netherlands | 1795-10-01 → 1815-06-09 | 18 | 18 | 6.8 | KAMA | 0.42/1.27/0.51 | hollanda:0.59 |
| kastilya | 41.693, -8.728 | Portugal | 1281-01-01 → 1479-01-20 | 3 | 18 | 4.7 | KAMA | 0.56/0.00/0.00 | portekiz:0.53 |
| OSMANLI | 18.587, 37.826 | Sudan | 1884-01-01 → 1885-02-05 | 5 | 18 | 4.7 | KAMA | 0.47/0.00/0.00 | mehdi:0.57 |
| inuit | 57.529, -62.403 | Canada | 1857-01-01 → 1880-09-01 | 2 | 18 | 5.4 | KAMA | 0.58/0.00/0.00 | ingiliz-kuzey-amerika:0.68 |
| arnavutluk | 40.782, 20.995 | Greece | 1912-11-28 → 1923-10-29 | 2 | 18 | 3.8 | KAMA | 0.59/0.00/0.00 | OSMANLI:0.95,sirbistan:0.15 |
| memluk | 16.244, 39.206 | Eritrea | 1281-01-01 → 1517-04-13 | 25 | 18 | 1.8 | KAMA | 0.73/0.00/0.00 | habesistan:0.56 |
| almanya | -24.519, 16.199 | Namibia | 1890-01-01 → 1904-10-03 | 17 | 18 | 3.2 | KAMA | 0.54/0.00/0.00 | nama-orlam:1.00 |
| delhi-sultanligi | 24.793, 80.148 | India | 1281-01-01 → 1526-04-21 | 24 | 18 | 2.3 | SERIT | 0.54/0.00/0.00 | gond-kralliklari:1.00 |
| ingiliz-hindistani | 24.793, 80.149 | India | 1801-11-10 → 1818-01-01 | 9 | 18 | 2.3 | SERIT | 0.54/0.00/0.00 | maratha:1.00 |
| babur-imparatorlugu | 24.793, 80.149 | India | 1526-04-21 → 1707-03-03 | 37 | 18 | 2.3 | SERIT | 0.54/0.00/0.00 | gond-kralliklari:1.00 |
| sur-hanedani | 24.793, 80.148 | India | 1540-05-17 → 1555-07-23 | 1 | 18 | 2.3 | SERIT | 0.54/0.00/0.00 | gond-kralliklari:1.00 |
| italya | 16.244, 39.206 | Eritrea | 1885-02-05 → 1889-01-01 | 1 | 18 | 1.8 | KAMA | 0.73/0.00/0.00 | habesistan:0.56 |
| avad | 24.791, 80.138 | India | 1722-01-01 → 1801-11-10 | 3 | 18 | 1.7 | SERIT | 0.54/0.00/0.00 | gond-kralliklari:1.00 |
| cavnpur-sultanligi | 24.791, 80.138 | India | 1394-01-01 → 1479-01-01 | 1 | 18 | 1.7 | SERIT | 0.54/0.00/0.00 | gond-kralliklari:1.00 |
| dene | 62.269, -129.964 | Canada | 1281-01-01 → 1899-06-21 | 2 | 18 | 3.6 | KAMA | 0.59/0.00/0.00 | kanada:0.51 |
| karadag | 42.185, 19.185 | Montenegro | 1697-01-01 → 1918-11-26 | 2 | 18 | 2.2 | SERIT | 0.72/0.00/0.00 | OSMANLI:1.00 |
| rusya | 61.204, 28.891 | Finland | 1721-08-30 → 1721-09-10 | 1 | 18 | 4.2 | SERIT | 0.38/0.13/0.06 | isvec:0.63 |
| kanada | 46.915, -114.617 | United States of America | 1874-01-01 → 1899-06-21 | 9 | 17 | 4.0 | SERIT | 0.57/0.00/0.00 | abd:1.00 |
| OSMANLI | 19.781, 41.741 | Saudi Arabia | 1871-01-01 → 1916-06-10 | 59 | 17 | 2.7 | KAMA | 0.62/0.00/0.00 | OSMANLI-TABI:0.54 |
| venedik | 41.523, 19.518 | Albania | 1393-05-01 → 1478-06-15 | 12 | 17 | 3.0 | KAMA | 0.62/0.00/0.00 | arnavutluk:0.50 |
| burgonya | 51.753, 4.161 | Netherlands | 1430-08-04 → 1482-03-27 | 5 | 17 | 6.9 | KAMA | 0.42/1.27/0.50 | almanya:0.59 |
| nayak-devletleri | 14.366, 74.759 | India | 1620-11-19 → 1674-01-01 | 2 | 17 | 0.8 | KAMA | 0.69/0.00/0.00 | portekiz:1.00 |
| ingiliz-kuzey-amerika | 52.256, -127.552 | Canada | 1833-01-01 → 1858-08-02 | 12 | 17 | 3.5 | SERIT | 0.53/0.00/0.00 | nuxalk:1.00 |
| belcika | 51.753, 4.161 | Netherlands | 1830-10-04 → 1923-10-29 | 18 | 17 | 6.9 | KAMA | 0.42/1.27/0.50 | hollanda:0.59 |
| venedik | 35.265, 23.953 | Greece | 1645-08-22 → 1646-11-13 | 1 | 17 | 1.7 | SERIT | 0.63/0.00/0.00 | OSMANLI:0.55 |
| mehdi | 17.437, 37.910 | Eritrea | 1884-01-01 → 1891-02-06 | 3 | 17 | 3.4 | SERIT | 0.36/0.00/0.00 | habesistan:0.49,OSMANLI:0.48 |
| inuit | 58.211, -62.775 | Canada | 1857-01-01 → 1880-09-01 | 2 | 17 | 5.4 | SERIT | 0.78/0.00/0.00 | ingiliz-kuzey-amerika:0.72 |
| avusturya | 51.754, 4.161 | Netherlands | 1714-03-07 → 1795-10-01 | 13 | 17 | 6.9 | KAMA | 0.42/1.28/0.50 | hollanda:0.59 |
| ispanya | 51.754, 4.161 | Netherlands | 1581-07-26 → 1714-03-07 | 40 | 17 | 6.9 | KAMA | 0.42/1.28/0.50 | hollanda:0.59 |
| brezilya-cumhuriyeti | -19.956, -57.587 | Brazil | 1889-11-15 → 1906-12-18 | 13 | 17 | 5.8 | KAMA | 0.49/0.00/0.00 | paraguay-cumhuriyeti:1.00 |
| brezilya-imparatorlugu | -19.956, -57.587 | Brazil | 1873-03-14 → 1889-11-15 | 7 | 17 | 5.8 | KAMA | 0.49/0.00/0.00 | paraguay-cumhuriyeti:1.00 |
| ispanyol-peru | -11.172, -76.754 | Peru | 1535-01-18 → 1542-11-20 | 9 | 17 | 3.2 | KAMA | 0.54/0.00/0.00 | inka-imparatorlugu:1.00 |
| ingiltere | 43.880, -73.404 | United States of America | 1665-02-18 → 1668-01-01 | 2 | 17 | 1.7 | KAMA | 0.69/0.00/0.00 | haudenosaunee:1.00 |
| siyam-chakri | 13.949, 105.935 | Laos | 1778-01-01 → 1893-10-03 | 7 | 17 | 2.4 | SERIT | 0.64/0.82/0.41 | kamboc-kralligi:1.00 |
| ingiliz-hindistani | 14.351, 74.676 | India | 1849-03-29 → 1923-10-29 | 4 | 17 | 2.8 | KAMA | 0.51/0.00/0.00 | portekiz:1.00 |
| ingiliz-kuzey-amerika | 58.975, -109.947 | Canada | 1798-01-01 → 1848-01-01 | 31 | 17 | 2.1 | SERIT | 0.66/0.00/0.00 | dene:1.00 |
| ingiliz-hindistani | 18.807, 73.027 | India | 1757-06-23 → 1818-01-01 | 28 | 17 | 3.6 | KAMA | 0.55/0.00/0.00 | maratha:0.52 |
| laos-kralliklari | 13.949, 105.935 | Laos | 1713-01-01 → 1778-01-01 | 1 | 17 | 2.4 | SERIT | 0.64/0.82/0.41 | kamboc-kralligi:1.00 |
| ingiltere | 18.807, 73.027 | India | 1665-02-18 → 1757-06-23 | 34 | 17 | 3.6 | KAMA | 0.55/0.00/0.00 | portekiz:0.52 |
| ingiltere | 1.258, 33.165 | Uganda | 1901-01-01 → 1901-12-20 | 3 | 17 | 4.3 | KAMA | 0.58/0.00/0.00 | ingiliz-sudani:1.00 |
| delhi-sultanligi | 18.807, 73.027 | India | 1347-08-03 → 1407-01-01 | 11 | 17 | 3.6 | KAMA | 0.55/0.00/0.00 | behmeni:0.52 |
| gucerat-sultanligi | 18.807, 73.027 | India | 1407-01-01 → 1534-12-23 | 5 | 17 | 3.7 | KAMA | 0.55/0.00/0.00 | behmeni:0.51 |
| azuchi-momoyama | 34.708, 136.511 | Japan | 1567-09-01 → 1573-01-01 | 2 | 17 | 4.9 | SERIT | 0.39/0.00/0.00 | muromachi:0.50 |
| ceneviz | 44.771, 34.559 | Russia | 1281-01-01 → 1475-06-06 | 8 | 17 | 3.1 | SERIT | 0.61/0.00/0.00 | altinorda:0.51 |
| konbaung | 16.830, 96.809 | Myanmar | 1852-04-14 → 1852-12-20 | 1 | 17 | 4.3 | KAMA | 0.57/0.00/0.00 | ingiliz-hindistani:0.51 |
| sirbistan | 40.671, 23.651 | Greece | 1345-09-25 → 1383-09-19 | 5 | 16 | 2.3 | KAMA | 0.61/0.00/0.00 | bizans:0.61 |
| ovimbundu | -10.978, 22.213 | Dem. Rep. Congo | 1700-01-01 → 1902-01-01 | 1 | 16 | 1.2 | SERIT | 0.39/1.01/0.41 | lozi:1.00,lunda-imparatorlugu:0.65 |
| hanthawaddy | 16.830, 96.809 | Myanmar | 1755-05-03 → 1757-05-06 | 1 | 16 | 4.3 | KAMA | 0.57/0.00/0.00 | konbaung:0.51 |
| meksika | 15.297, -92.581 | Mexico | 1821-09-27 → 1923-10-29 | 14 | 16 | 3.7 | KAMA | 0.58/0.00/0.00 | guatemala:0.86 |
| OSMANLI | 46.645, 38.271 | Russia | 1475-06-06 → 1502-03-01 | 20 | 16 | 7.3 | KAMA | 0.55/0.00/0.00 | altinorda:0.67 |
| OSMANLI | 16.244, 39.205 | Eritrea | 1557-01-01 → 1865-01-01 | 267 | 16 | 2.2 | KAMA | 0.72/0.00/0.00 | habesistan:0.56 |
| yunanistan | 40.671, 23.651 | Greece | 1913-08-10 → 1913-11-14 | 2 | 16 | 2.3 | KAMA | 0.61/0.00/0.00 | OSMANLI:0.60 |
| yeni-ispanya | 15.297, -92.581 | Mexico | 1821-09-15 → 1821-09-27 | 1 | 16 | 3.7 | KAMA | 0.58/0.00/0.00 | guatemala:0.86 |
| isvec | 61.486, 30.229 | Russia | 1721-09-10 → 1809-09-17 | 1 | 16 | 1.7 | SERIT | 0.78/0.00/0.00 | rusya:0.68 |
| nahua-sehir-devletleri | 19.919, -97.290 | Mexico | 1466-01-01 → 1519-07-01 | 1 | 16 | 3.3 | SERIT | 0.37/0.00/0.00 | aztek-imparatorlugu:0.82 |
| venedik | 35.253, 23.923 | Greece | 1646-11-13 → 1669-09-27 | 6 | 16 | 1.9 | SERIT | 0.64/0.00/0.00 | OSMANLI:0.51 |
| bulgaristan | 40.671, 23.651 | Greece | 1913-05-30 → 1913-08-10 | 3 | 16 | 2.3 | KAMA | 0.61/0.00/0.00 | OSMANLI:0.60 |
| ingiliz-sudani | 2.268, 31.413 | Uganda | 1899-01-19 → 1916-11-06 | 2 | 16 | 6.0 | SERIT | 0.60/2.33/0.88 | bunyoro:1.00 |
| OSMANLI | 46.870, 31.941 | Ukraine | 1774-07-21 → 1783-04-19 | 5 | 16 | 2.9 | SERIT | 0.62/0.00/0.00 | kirim:0.72 |
| ispanya | 15.990, -91.157 | Guatemala | 1525-05-18 → 1527-01-01 | 1 | 16 | 3.0 | KAMA | 0.42/0.00/0.00 | maya-sehir-devletleri:0.65 |
| arjantin-cumhuriyeti | -41.957, -72.610 | Chile | 1884-07-15 → 1899-07-05 | 1 | 16 | 5.0 | KAMA | 0.58/0.00/0.00 | sili-cumhuriyeti:1.00 |
| yuan-hanedani | 40.420, 126.535 | North Korea | 1281-01-01 → 1356-01-01 | 4 | 16 | 3.8 | KAMA | 0.38/0.00/0.00 | goryeo:0.88 |
| venedik | 35.186, 25.679 | Greece | 1669-09-06 → 1669-09-27 | 1 | 16 | 5.5 | SERIT | 0.46/0.00/0.00 | OSMANLI:0.68 |
| OSMANLI-TABI | 46.703, 38.590 | Russia | 1570-01-01 → 1699-01-26 | 112 | 16 | 1.5 | SERIT | 0.68/0.00/0.00 | rusya:0.98 |
| ingiltere | 15.297, -92.581 | Mexico | 1523-01-01 → 1783-09-03 | 65 | 16 | 3.8 | KAMA | 0.58/0.00/0.00 | maya-sehir-devletleri:0.86 |
| zapotek-krallik | 15.297, -92.581 | Mexico | 1281-01-01 → 1523-01-01 | 1 | 16 | 3.8 | KAMA | 0.58/0.00/0.00 | maya-sehir-devletleri:0.86 |
| dulkadir | 38.710, 38.468 | Turkey | 1400-01-01 → 1402-07-28 | 1 | 16 | 2.6 | SERIT | 0.62/1.19/0.74 | artuklu:0.53,OSMANLI:0.45 |
| eretna | 38.711, 38.469 | Turkey | 1335-01-01 → 1338-01-01 | 1 | 16 | 2.6 | SERIT | 0.62/1.19/0.74 | artuklu:0.53,memluk:0.45 |
| belcika | -2.229, 29.212 | Rwanda | 1900-01-01 → 1916-05-06 | 1 | 16 | 2.6 | SERIT | 0.57/0.00/0.00 | ruanda:1.00 |
| dene | 59.289, -154.372 | United States of America | 1281-01-01 → 1867-10-18 | 1 | 16 | 3.1 | SERIT | 0.74/0.00/0.00 | alutiiq:0.88 |
| OSMANLI-TABI | 46.870, 31.941 | Ukraine | 1480-01-01 → 1502-03-01 | 14 | 16 | 2.9 | SERIT | 0.61/0.00/0.00 | altinorda:0.71 |
| kuzey-yuan | 26.112, 100.960 | China | 1368-09-14 → 1382-01-15 | 1 | 16 | 4.5 | KAMA | 0.53/0.42/0.23 | yuan-hanedani:0.50 |
| kanada | 69.447, -140.546 | Canada | 1899-06-21 → 1923-10-29 | 2 | 16 | 5.3 | SERIT | 0.43/0.00/0.00 | abd:0.66 |
| OSMANLI-TABI | 23.197, 15.140 | Libya | 1732-07-01 → 1821-01-04 | 18 | 16 | 2.4 | KAMA | 0.31/0.00/0.00 | tubu-tibesti:1.00 |
| bizans | 44.608, 33.534 | Russia | 1281-01-01 → 1349-01-01 | 23 | 16 | 1.1 | KAMA | 0.69/0.00/0.00 | ceneviz:0.80 |
| teodoro | 44.608, 33.534 | Russia | 1349-01-01 → 1475-06-06 | 1 | 16 | 1.1 | KAMA | 0.69/0.00/0.00 | ceneviz:0.80 |
| OSMANLI | 40.667, 23.680 | Greece | 1383-09-19 → 1387-04-09 | 5 | 16 | 1.6 | SERIT | 0.64/0.00/0.00 | bizans:0.69 |
| ispanya | 36.080, -5.625 | Spain | 1479-01-20 → 1485-05-22 | 1 | 16 | 2.5 | KAMA | 0.48/0.00/0.00 | granada:0.51 |
| bizans | 37.694, 23.146 | Greece | 1417-01-01 → 1424-01-01 | 2 | 16 | 2.2 | SERIT | 0.64/0.00/0.00 | venedik:0.62 |
| kastilya | 36.080, -5.625 | Spain | 1462-08-20 → 1479-01-20 | 1 | 16 | 2.5 | KAMA | 0.48/0.00/0.00 | granada:0.51 |
| bizans | 44.602, 33.506 | Russia | 1323-01-01 → 1334-01-01 | 6 | 16 | 1.2 | SERIT | 0.71/0.00/0.00 | ceneviz:0.76 |
| ingiltere | 36.080, -5.625 | Spain | 1716-01-01 → 1921-10-20 | 168 | 16 | 2.5 | KAMA | 0.48/0.00/0.00 | ispanya:0.51 |
| ingiltere | 18.588, 37.817 | Sudan | 1885-02-05 → 1891-02-06 | 10 | 16 | 4.2 | SERIT | 0.49/0.00/0.00 | mehdi:0.56 |
| napoli | 40.047, 18.034 | Italy | 1480-08-11 → 1481-09-10 | 1 | 16 | 3.3 | SERIT | 0.68/0.00/0.00 | OSMANLI:0.50 |
| ispanyol-peru | -12.867, -73.658 | Peru | 1539-01-09 → 1540-08-15 | 2 | 15 | 1.1 | SERIT | 0.68/0.00/0.00 | ispanya:0.96,inka-imparatorlugu:0.90 |
| hoysala | 14.364, 74.749 | India | 1281-01-01 → 1343-01-01 | 1 | 15 | 0.9 | KAMA | 0.71/0.00/0.00 | yadava:1.00 |
| ingiltere | -13.976, 35.148 | Malawi | 1900-01-01 → 1923-10-29 | 49 | 15 | 2.4 | KAMA | 0.55/0.00/0.00 | portekiz:0.53 |
| brezilya-cumhuriyeti | -4.003, -71.052 | Peru | 1889-11-15 → 1923-10-29 | 19 | 15 | 2.4 | KAMA | 0.56/1.17/0.54 | peru-cumhuriyeti:0.58 |
| brezilya-imparatorlugu | -4.008, -71.053 | Peru | 1822-09-07 → 1889-11-15 | 32 | 15 | 2.4 | KAMA | 0.56/1.17/0.54 | ispanyol-peru:0.58 |
| portekiz-brezilyasi | -4.008, -71.053 | Peru | 1766-01-01 → 1822-09-07 | 9 | 15 | 2.4 | KAMA | 0.56/1.17/0.54 | ispanyol-peru:0.61 |
| OSMANLI | 44.300, 15.484 | Croatia | 1689-01-01 → 1699-01-26 | 14 | 15 | 2.4 | KAMA | 0.50/0.00/0.00 | avusturya:0.70 |
| pagan | 21.560, 93.620 | Myanmar | 1281-01-01 → 1313-01-01 | 2 | 15 | 2.2 | KAMA | 0.72/0.00/0.00 | arakan:0.57 |
| ava | 21.560, 93.620 | Myanmar | 1313-01-01 → 1555-01-01 | 4 | 15 | 2.2 | KAMA | 0.72/0.00/0.00 | arakan:0.57 |
| macaristan | 42.584, 18.250 | Croatia | 1358-02-18 → 1459-03-07 | 8 | 15 | 1.9 | SERIT | 0.52/0.00/0.00 | bosna:0.50 |
| ingiltere | 36.941, -76.527 | United States of America | 1776-07-04 → 1783-09-03 | 5 | 15 | 4.0 | SERIT | 0.62/0.00/0.00 | abd:0.51 |
| umman-zengibar | -13.976, 35.148 | Malawi | 1800-01-01 → 1891-05-14 | 8 | 15 | 2.4 | KAMA | 0.55/0.00/0.00 | yao:0.53 |
| toungoo | 21.560, 93.620 | Myanmar | 1555-01-01 → 1752-04-23 | 5 | 15 | 2.2 | KAMA | 0.72/0.00/0.00 | arakan:0.57 |
| konbaung | 21.560, 93.620 | Myanmar | 1752-04-23 → 1885-11-28 | 9 | 15 | 2.2 | KAMA | 0.72/0.00/0.00 | arakan:0.57 |
| fransa-cumhuriyet | 42.584, 18.250 | Croatia | 1806-05-27 → 1814-01-28 | 8 | 15 | 1.9 | KAMA | 0.52/0.00/0.00 | OSMANLI:0.51 |
| zend | 30.922, 46.910 | Iraq | 1776-04-16 → 1779-04-01 | 1 | 15 | 2.1 | KAMA | 0.68/0.56/0.20 | OSMANLI:1.00 |
| ilhanli | 30.450, 59.916 | Iran | 1335-12-01 → 1337-09-09 | 2 | 15 | 2.5 | KAMA | 0.58/0.00/0.00 | muzafferi:0.50 |
| racput | 22.737, 70.304 | India | 1510-01-01 → 1923-10-29 | 10 | 15 | 1.9 | KAMA | 0.63/0.00/0.00 | gucerat-sultanligi:1.00 |
| ispanyol-peru | 7.161, -73.115 | Colombia | 1819-12-17 → 1821-06-24 | 1 | 15 | 5.8 | KAMA | 0.44/0.00/0.00 | gran-kolombiya:0.51 |
| umman-zengibar | -9.462, 39.590 | Tanzania | 1890-11-04 → 1923-10-29 | 5 | 15 | 2.7 | KAMA | 0.50/0.00/0.00 | almanya:0.57 |
| hollanda-dogu-hint | -2.978, 113.083 | Indonesia | 1830-01-01 → 1860-06-11 | 5 | 15 | 2.8 | SERIT | 0.61/0.00/0.00 | banjar-sultanligi:0.52 |
| timurlu | 30.450, 59.916 | Iran | 1381-01-01 → 1383-01-01 | 2 | 15 | 2.5 | KAMA | 0.58/0.00/0.00 | muzafferi:0.50 |
| OSMANLI | 41.972, 41.807 | Georgia | 1578-08-09 → 1918-12-01 | 280 | 15 | 2.6 | KAMA | 0.64/0.00/0.00 | OSMANLI-TABI:0.54 |
| ingiltere | 59.816, -94.808 | Canada | 1717-01-01 → 1763-02-10 | 18 | 15 | 1.7 | SERIT | 0.74/0.00/0.00 | inuit:0.50 |
| qing-hanedani | 49.386, 129.018 | China | 1865-01-01 → 1877-10-18 | 7 | 15 | 1.5 | KAMA | 0.67/1.35/0.83 | rusya:0.60 |
| arjantin-cumhuriyeti | -41.755, -72.436 | Chile | 1899-07-05 → 1922-03-23 | 1 | 15 | 4.7 | KAMA | 0.53/0.00/0.00 | sili-cumhuriyeti:0.60 |
| ingiliz-hindistani | 14.417, 78.815 | India | 1760-01-01 → 1760-10-11 | 1 | 15 | 4.9 | KAMA | 0.31/0.00/0.00 | haydarabad-nizam:1.00 |
| azuchi-momoyama | 35.713, 136.018 | Japan | 1567-09-01 → 1603-03-24 | 13 | 15 | 1.9 | SERIT | 0.62/0.00/0.00 | muromachi:0.60 |
| venedik | 42.617, 18.243 | Croatia | 1281-01-01 → 1358-02-18 | 1 | 15 | 2.2 | KAMA | 0.54/0.00/0.00 | bosna:0.50 |
| OSMANLI-TABI | 42.617, 18.243 | Croatia | 1459-03-07 → 1806-05-27 | 325 | 15 | 2.2 | KAMA | 0.54/0.00/0.00 | hersek:0.50 |
| OSMANLI | 20.426, 42.972 | Saudi Arabia | 1912-11-11 → 1913-07-29 | 10 | 15 | 2.3 | KAMA | 0.70/0.00/0.00 | OSMANLI-TABI:0.57 |
| akkoyunlu | 37.473, 38.428 | Turkey | 1465-01-01 → 1507-01-01 | 9 | 15 | 1.6 | SERIT | 0.68/1.26/0.95 | memluk:0.97 |
| avusturya | 42.597, 18.243 | Croatia | 1814-01-28 → 1908-10-05 | 6 | 15 | 2.2 | KAMA | 0.54/0.00/0.00 | OSMANLI:0.50 |
| ingiltere | 1.263, 33.301 | Uganda | 1901-12-20 → 1908-01-01 | 10 | 15 | 0.4 | KAMA | 0.51/0.00/0.00 | ingiliz-sudani:1.00 |
| abd | 33.231, -109.800 | United States of America | 1848-02-02 → 1854-06-30 | 8 | 15 | 3.6 | SERIT | 0.50/0.00/0.00 | meksika:0.52 |
| danimarka | 54.079, 9.061 | Germany | 1281-01-01 → 1864-10-30 | 11 | 14 | 4.8 | KAMA | 0.64/0.00/0.00 | almanya:0.64 |
| brezilya-cumhuriyeti | -32.186, -52.729 | Brazil | 1889-11-15 → 1923-10-29 | 19 | 14 | 1.3 | SERIT | 0.56/0.00/0.00 | uruguay-cumhuriyeti:0.63 |
| brezilya-imparatorlugu | -32.186, -52.729 | Brazil | 1847-11-13 → 1889-11-15 | 20 | 14 | 1.3 | SERIT | 0.56/0.00/0.00 | uruguay-cumhuriyeti:0.63 |
| sovalye | 38.389, 26.744 | Turkey | 1402-07-28 → 1402-12-01 | 1 | 14 | 1.7 | KAMA | 0.68/0.00/0.00 | aydin:0.53 |
| OSMANLI | 37.471, 38.426 | Turkey | 1516-05-01 → 1516-08-24 | 1 | 14 | 1.6 | SERIT | 0.70/1.26/0.94 | memluk:0.97 |
| OSMANLI | 38.274, 45.406 | Iran | 1724-09-28 → 1725-07-28 | 2 | 14 | 4.1 | KAMA | 0.45/0.00/0.00 | safevi:0.58 |
| OSMANLI-TABI | 37.471, 38.426 | Turkey | 1832-08-15 → 1841-02-25 | 16 | 14 | 1.6 | SERIT | 0.70/1.26/0.94 | OSMANLI:0.96 |
| safevi | 37.473, 38.428 | Turkey | 1507-01-01 → 1516-05-01 | 13 | 14 | 1.5 | SERIT | 0.68/1.27/0.95 | memluk:0.97 |
| ingiltere | 16.152, -88.774 | Belize | 1716-01-01 → 1923-10-29 | 228 | 14 | 3.9 | KAMA | 0.71/0.00/0.00 | yeni-ispanya:1.00 |
| portekiz | -9.476, 39.580 | Tanzania | 1505-01-01 → 1698-12-13 | 59 | 14 | 1.8 | KAMA | 0.32/0.00/0.00 | svahili-sehirleri:0.72 |
| ingiltere | 49.329, -1.075 | France | 1450-06-24 → 1450-08-12 | 1 | 14 | 1.9 | SERIT | 0.33/0.00/0.00 | fransa:0.52 |
| san-devletleri | 18.668, 97.370 | Myanmar | 1281-01-01 → 1923-10-29 | 3 | 14 | 3.5 | SERIT | 0.48/1.41/0.64 | pagan:0.50 |
| fransa | 49.329, -1.075 | France | 1417-09-04 → 1418-09-29 | 1 | 14 | 1.9 | SERIT | 0.33/0.00/0.00 | ingiltere:0.52 |
| OSMANLI | 40.340, 28.663 | Turkey | 1321-04-01 → 1334-01-01 | 10 | 14 | 3.5 | KAMA | 0.55/0.00/0.00 | bizans:0.52 |
| ceneviz | 40.773, 26.063 | Greece | 1355-01-01 → 1456-01-24 | 3 | 14 | 4.2 | KAMA | 0.54/0.64/0.25 | OSMANLI:0.76 |
| abd | 33.608, -91.141 | United States of America | 1820-01-01 → 1830-09-27 | 7 | 14 | 1.5 | KAMA | 0.67/0.70/0.44 | cikasav:0.52,choctaw:0.22 |
| isvec | 61.230, 27.432 | Finland | 1721-08-30 → 1809-09-17 | 2 | 14 | 3.1 | SERIT | 0.68/0.00/0.00 | rusya:0.67 |
| ispanya | -11.078, -77.394 | Peru | 1539-01-01 → 1542-11-20 | 4 | 14 | 2.7 | KAMA | 0.44/0.00/0.00 | ispanyol-peru:0.88 |
| OSMANLI-TABI | 36.662, 5.468 | Algeria | 1838-10-13 → 1839-05-13 | 1 | 14 | 3.8 | KAMA | 0.51/0.00/0.00 | fransa-cumhuriyet:0.76 |
| ingiltere | 53.942, -9.569 | Ireland | 1281-01-01 → 1603-03-30 | 22 | 14 | 3.0 | SERIT | 0.33/0.00/0.00 | irlanda:0.52 |
| milanoduka | 45.016, 12.369 | — | 1395-05-11 → 1405-11-22 | 2 | 14 | 4.7 | KAMA | 0.48/0.80/0.25 | papalik:0.35,ferrara:0.23 |
| ingiliz-hindistani | 14.306, 78.702 | India | 1760-01-01 → 1760-10-11 | 1 | 14 | 3.2 | KAMA | 0.55/0.00/0.00 | haydarabad-nizam:0.60,meysur:0.31 |
| bulgaristan | 42.021, 27.991 | Bulgaria | 1920-05-14 → 1923-10-29 | 2 | 14 | 1.1 | KAMA | 0.73/0.00/0.00 | tbmm-turkiye:0.58 |
| almanya | 37.325, 119.880 | China | 1898-03-06 → 1914-11-07 | 22 | 14 | 3.1 | KAMA | 0.62/0.00/0.00 | qing-hanedani:1.00 |
| almanya | 55.020, 21.231 | Russia | 1920-01-10 → 1923-10-29 | 4 | 14 | 2.9 | SERIT | 0.56/0.00/0.00 | itilaf-emaneti:0.57 |
| altinorda | 53.311, 59.212 | Russia | 1430-01-01 → 1438-01-01 | 1 | 14 | 3.3 | KAMA | 0.47/0.74/0.35 | sibir-hanligi:0.96 |
| prusya-dukaligi | 55.020, 21.231 | Russia | 1525-04-08 → 1701-01-18 | 1 | 14 | 2.9 | SERIT | 0.56/0.00/0.00 | almanya:0.57 |
| OSMANLI | 20.421, 42.971 | Saudi Arabia | 1871-01-01 → 1916-06-10 | 49 | 14 | 2.3 | KAMA | 0.70/0.00/0.00 | OSMANLI-TABI:0.58 |
| sovyet-rusya | 41.985, 41.794 | Georgia | 1917-11-07 → 1918-04-14 | 5 | 14 | 2.4 | KAMA | 0.64/0.00/0.00 | transkafkasya:0.55 |
| ingiltere | 54.001, -9.823 | Ireland | 1281-01-01 → 1603-03-30 | 22 | 14 | 2.5 | KAMA | 0.75/0.00/0.00 | irlanda:0.55 |
| tbmm-turkiye | 40.768, 26.061 | Greece | 1920-04-23 → 1923-10-29 | 3 | 14 | 4.0 | KAMA | 0.64/0.62/0.22 | bulgaristan:0.51 |
| qing-hanedani | 26.120, 100.956 | China | 1856-01-01 → 1858-05-17 | 2 | 14 | 4.0 | KAMA | 0.52/0.48/0.27 | pingnan:0.52 |
| joseon | 35.025, 128.076 | South Korea | 1592-05-23 → 1598-11-24 | 1 | 14 | 2.0 | SERIT | 0.58/0.00/0.00 | azuchi-momoyama:0.63 |
| rusya | 60.602, 26.540 | Finland | 1721-08-30 → 1809-09-17 | 47 | 14 | 2.1 | KAMA | 0.67/0.00/0.00 | isvec:0.57 |
| arjantin-cumhuriyeti | -41.927, -72.563 | Chile | 1883-01-01 → 1884-07-15 | 2 | 14 | 2.6 | KAMA | 0.38/0.00/0.00 | sili-cumhuriyeti:0.97 |
| safevi | 36.716, 50.762 | Iran | 1515-09-19 → 1548-08-24 | 17 | 14 | 1.5 | SERIT | 0.78/0.00/0.00 | gilan-kiya:0.59 |
| avusturya | 44.277, 15.516 | — | 1908-10-05 → 1919-09-10 | 8 | 14 | 1.7 | KAMA | 0.48/0.00/0.00 | macaristan:0.71 |
| timurlu | 36.716, 50.762 | Iran | 1393-01-01 → 1452-01-01 | 16 | 14 | 1.5 | SERIT | 0.78/0.00/0.00 | gilan-kiya:0.59 |
| kuzey-yuan | 42.834, 114.166 | China | 1581-01-01 → 1635-01-01 | 2 | 14 | 2.1 | KAMA | 0.41/0.00/0.00 | ming-hanedani:0.62 |
| OSMANLI | 40.779, 20.963 | Greece | 1385-01-01 → 1912-11-29 | 17 | 14 | 1.7 | SERIT | 0.56/0.00/0.00 | arnavutluk:1.00 |
| ingiliz-kuzey-amerika | 55.670, -86.023 | Canada | 1794-01-01 → 1867-07-01 | 29 | 14 | 2.4 | KAMA | 0.65/0.00/0.00 | kri:1.00 |
| qing-hanedani | 47.579, 86.770 | China | 1876-08-18 → 1912-02-12 | 12 | 14 | 3.7 | KAMA | 0.56/0.00/0.00 | rusya:0.65 |
| mora-despotlugu | 36.515, 23.079 | Greece | 1349-01-01 → 1460-05-29 | 3 | 14 | 2.3 | SERIT | 0.62/0.00/0.00 | bizans:0.98 |
| avusturya | 45.015, 12.371 | — | 1797-05-12 → 1809-10-14 | 2 | 14 | 4.7 | KAMA | 0.48/0.80/0.25 | papalik:0.53 |
| avusturya | 46.738, 9.097 | Switzerland | 1859-06-04 → 1866-10-03 | 1 | 14 | 2.2 | SERIT | 0.36/0.80/0.35 | isvicre:0.62 |
| umman-zengibar | -9.500, 34.083 | Tanzania | 1880-01-01 → 1893-01-01 | 3 | 14 | 2.1 | SERIT | 0.67/0.00/0.00 | ngonde:1.00,ngoni:0.68 |
| OSMANLI | 36.440, 35.946 | Turkey | 1516-08-24 → 1918-10-30 | 20 | 14 | 3.5 | KAMA | 0.62/0.00/0.00 | memluk:0.52 |
| almanya | 46.738, 9.099 | Switzerland | 1420-06-07 → 1466-10-19 | 5 | 14 | 2.3 | SERIT | 0.35/0.83/0.36 | isvicre:0.63 |
| ingiliz-kuzey-amerika | 55.670, -86.026 | Canada | 1795-01-01 → 1822-01-01 | 11 | 14 | 2.5 | KAMA | 0.64/0.00/0.00 | kri:1.00 |
| mapuche-araukanya | -36.844, -73.133 | Chile | 1725-01-01 → 1883-01-01 | 1 | 14 | 3.1 | SERIT | 0.60/0.26/0.00 | ispanyol-peru:0.50 |
| kanada | 55.670, -86.024 | Canada | 1867-07-01 → 1876-08-23 | 3 | 14 | 2.5 | KAMA | 0.64/0.00/0.00 | kri:1.00 |
| fransa | 46.105, -79.568 | Canada | 1679-01-01 → 1750-01-01 | 22 | 13 | 1.7 | SERIT | 0.45/0.00/0.00 | ingiltere:0.69 |
| umman-zengibar | -4.276, 29.592 | Burundi | 1830-01-01 → 1890-11-04 | 6 | 13 | 2.2 | SERIT | 0.61/0.00/0.00 | burundi:0.51 |
| ingiliz-kuzey-amerika | 46.108, -79.569 | Canada | 1798-01-01 → 1867-07-01 | 11 | 13 | 1.7 | SERIT | 0.45/0.00/0.00 | abd:0.69 |
| kanada | 46.107, -79.569 | Canada | 1867-07-01 → 1899-06-21 | 10 | 13 | 1.6 | SERIT | 0.46/0.00/0.00 | abd:0.70 |
| OSMANLI | 39.100, 20.858 | Greece | 1881-07-02 → 1913-11-14 | 37 | 13 | 2.1 | SERIT | 0.77/0.00/0.00 | yunanistan:0.67 |
| ispanya | -13.629, -72.452 | Peru | 1535-04-17 → 1535-07-21 | 1 | 13 | 2.8 | KAMA | 0.54/1.11/0.48 | inka-imparatorlugu:0.52 |
| ingiliz-kuzey-amerika | 54.933, -82.300 | Canada | 1763-02-10 → 1794-01-01 | 10 | 13 | 2.7 | KAMA | 0.69/0.00/0.00 | kri:0.56 |
| ingiliz-kuzey-amerika | 55.659, -100.069 | Canada | 1802-01-01 → 1859-01-01 | 34 | 13 | 2.2 | KAMA | 0.46/0.00/0.00 | kri:1.00 |
| ispanya | -16.481, -70.694 | Peru | 1542-01-01 → 1542-11-20 | 1 | 13 | 5.0 | SERIT | 0.57/0.00/0.00 | ispanyol-peru:0.85 |
| itilaf-emaneti | 44.287, 15.523 | Croatia | 1919-09-10 → 1920-11-12 | 2 | 13 | 1.2 | SERIT | 0.47/0.00/0.00 | macaristan-naiplik:0.77 |
| venedik | 44.287, 15.523 | Croatia | 1409-01-01 → 1797-10-17 | 27 | 13 | 1.2 | SERIT | 0.47/0.00/0.00 | macaristan:0.77 |
| cin-cumhuriyeti | 47.579, 86.770 | China | 1912-02-12 → 1923-10-29 | 6 | 13 | 3.7 | KAMA | 0.57/0.00/0.00 | rusya:0.65 |
| fransa-cumhuriyet | 44.287, 15.523 | Croatia | 1806-02-01 → 1809-07-09 | 5 | 13 | 1.2 | SERIT | 0.47/0.00/0.00 | avusturya:0.77 |
| ingiliz-kuzey-amerika | 64.083, -110.773 | Canada | 1840-01-01 → 1843-06-10 | 1 | 13 | 6.3 | KAMA | 0.32/0.00/0.00 | dene:1.00 |
| siyam-chakri | 14.247, 105.421 | Laos | 1778-01-01 → 1893-10-03 | 7 | 13 | 1.8 | KAMA | 0.48/0.00/0.00 | kamboc-kralligi:1.00 |
| ceneviz | 44.443, 33.668 | Russia | 1281-01-01 → 1324-01-01 | 1 | 13 | 2.5 | KAMA | 0.71/0.00/0.00 | bizans:0.51 |
| maya-sehir-devletleri | 19.121, -90.972 | Mexico | 1530-01-01 → 1542-01-01 | 1 | 13 | 2.8 | KAMA | 0.65/0.00/0.00 | ispanya:0.54 |
| OSMANLI | 40.433, 26.460 | Turkey | 1352-03-01 → 1354-03-02 | 1 | 13 | 3.5 | KAMA | 0.62/0.00/0.00 | bizans:0.50 |
| timurlu | 33.316, 47.096 | Iran | 1393-01-01 → 1452-01-01 | 16 | 13 | 1.2 | SERIT | 0.35/0.79/0.31 | celayirli:0.63,lur-i-buzurg:0.55 |
| laos-kralliklari | 14.247, 105.421 | Laos | 1713-01-01 → 1778-01-01 | 1 | 13 | 1.8 | KAMA | 0.48/0.00/0.00 | kamboc-kralligi:1.00 |
| safevi | 33.298, 47.097 | Iran | 1589-01-01 → 1590-03-21 | 1 | 13 | 1.2 | SERIT | 0.35/0.79/0.32 | OSMANLI:0.63,OSMANLI-TABI:0.54 |
| ingiltere | -27.620, 26.092 | South Africa | 1838-11-01 → 1852-01-17 | 17 | 13 | 2.1 | KAMA | 0.78/1.02/0.49 | transvaal:1.00,griqua:0.75,oranj:0.72 |
| transvaal | -27.620, 26.092 | South Africa | 1830-01-01 → 1902-05-31 | 2 | 13 | 2.1 | KAMA | 0.78/1.02/0.49 | griqua:0.75,oranj:0.72,tsvana:0.59 |
| ispanyol-peru | 2.989, -77.611 | Colombia | 1537-01-13 → 1542-11-20 | 8 | 13 | 3.9 | SERIT | 0.77/0.00/0.00 | ispanya:1.00 |
| aydin | 38.362, 26.725 | Turkey | 1402-07-28 → 1402-12-01 | 2 | 13 | 2.8 | SERIT | 0.40/0.00/0.00 | sovalye:0.51 |
| fransa-cumhuriyet | 14.308, -16.912 | Senegal | 1886-10-27 → 1887-01-01 | 1 | 13 | 4.1 | KAMA | 0.61/0.00/0.00 | gambiya-mandinka:1.00,sine-salum:1.00 |
| kayor | 14.308, -16.912 | Senegal | 1549-01-01 → 1886-10-27 | 1 | 13 | 4.1 | KAMA | 0.61/0.00/0.00 | gambiya-mandinka:1.00,sine-salum:1.00 |
| ispanya | -13.621, -72.474 | Peru | 1533-11-15 → 1537-07-01 | 8 | 13 | 2.8 | SERIT | 0.52/1.12/0.50 | inka-imparatorlugu:0.59 |
| abd | 44.020, -114.968 | United States of America | 1872-01-01 → 1923-10-29 | 19 | 13 | 2.3 | KAMA | 0.58/0.00/0.00 | kanada:0.50 |
| hollanda-dogu-hint | -6.951, 106.410 | Indonesia | 1619-05-30 → 1811-08-18 | 19 | 13 | 2.2 | KAMA | 0.69/0.00/0.00 | banten-sultanligi:1.00 |
| aydin | 37.752, 27.264 | Turkey | 1390-01-01 → 1402-07-28 | 1 | 13 | 2.1 | KAMA | 0.59/0.00/0.00 | OSMANLI:0.67 |
| ilhanli | 33.283, 47.129 | Iran | 1340-01-01 → 1353-01-01 | 3 | 13 | 4.0 | KAMA | 0.36/0.96/0.45 | celayirli:0.60 |
| qing-hanedani | 31.801, 121.567 | China | 1858-05-17 → 1864-07-19 | 5 | 13 | 3.2 | KAMA | 0.79/0.00/0.00 | taiping:1.00 |
| lur-i-buzurg | 33.283, 47.129 | Iran | 1393-01-01 → 1424-01-01 | 1 | 13 | 4.0 | KAMA | 0.36/0.96/0.45 | timurlu:0.60,celayirli:0.10 |
| lur-i-kucek | 33.283, 47.129 | Iran | 1424-01-01 → 1508-01-01 | 1 | 13 | 4.0 | KAMA | 0.36/0.96/0.45 | timurlu:0.60,karakoyunlu:0.11 |
| safevi | 33.283, 47.129 | Iran | 1723-10-01 → 1725-07-28 | 8 | 13 | 4.0 | KAMA | 0.36/0.97/0.45 | OSMANLI:0.77 |
| almanya | 1.577, 9.723 | Eq. Guinea | 1884-07-14 → 1916-02-16 | 44 | 13 | 2.2 | KAMA | 0.48/0.17/0.00 | fransa-cumhuriyet:0.62 |
| fransa | 44.218, -73.295 | United States of America | 1634-07-04 → 1668-01-01 | 10 | 13 | 4.7 | SERIT | 0.63/0.00/0.00 | haudenosaunee:0.79,hollanda:0.42 |
| hollanda | 1.577, 9.723 | Eq. Guinea | 1868-01-01 → 1884-07-14 | 3 | 13 | 2.2 | KAMA | 0.48/0.17/0.00 | fransa-cumhuriyet:0.62 |
| hokand | 42.387, 76.214 | Kyrgyzstan | 1866-05-24 → 1868-01-01 | 1 | 13 | 2.5 | KAMA | 0.71/0.00/0.00 | rusya:0.52 |
| yunanistan | 38.292, 23.796 | Greece | 1827-06-05 → 1833-03-31 | 5 | 13 | 5.5 | KAMA | 0.43/0.00/0.00 | OSMANLI:1.00 |
| astarhan | 50.602, 45.694 | Russia | 1466-01-01 → 1502-03-01 | 1 | 13 | 1.2 | KAMA | 0.38/1.33/0.88 | altinorda:0.93 |

#### `b-dis` — 890 kayıt (en uzun 40 gösterildi)

| sahip | enlem, boylam | bugünkü ülke | ilk gün → son gün | dönem | boy km | en km | biçim | su/n_iç/n_yan | o gün komşu: kapsam |
|---|---|---|---|---|---|---|---|---|---|
| OSMANLI | 48.675, 18.438 | Slovakia | 1663-09-24 → 1682-09-16 | 9 | 132 | 0.3 | SERIT | 0.00/0.00/0.00 | macaristan:0.97 |
| OSMANLI | 48.173, 18.438 | Slovakia | 1682-09-16 → 1683-10-27 | 1 | 83 | 0.2 | SERIT | 0.00/0.03/0.00 | macaristan:1.00 |
| OSMANLI | 48.972, 18.439 | Slovakia | 1682-09-16 → 1683-10-27 | 1 | 73 | 0.1 | SERIT | 0.00/0.00/0.00 | macaristan:1.00 |
| OSMANLI | 46.266, 15.721 | Slovenia | 1687-09-29 → 1688-05-19 | 6 | 66 | 4.5 | KAMA | 0.00/0.00/0.00 | macaristan:0.97,avusturya:0.06 |
| OSMANLI | 29.590, 21.758 | Libya | 1517-05-19 → 1551-08-15 | 57 | 64 | 4.5 | KAMA | 0.00/0.00/0.00 | kanem-bornu:1.00 |
| maratha | 18.933, 73.102 | India | 1817-11-17 → 1818-01-01 | 1 | 56 | 1.6 | SERIT | 0.00/0.00/0.00 | ingiliz-hindistani:0.97 |
| portekiz | 18.947, 73.106 | India | 1521-01-01 → 1740-01-01 | 16 | 56 | 1.6 | SERIT | 0.00/0.00/0.00 | gucerat-sultanligi:0.73,ahmednagar:0.70 |
| OSMANLI-TABI | 32.608, 47.187 | Iran | 1589-01-01 → 1590-03-21 | 1 | 47 | 3.5 | SERIT | 0.00/0.00/0.00 | safevi:1.00,OSMANLI:0.49 |
| karnatik | 12.665, 79.449 | India | 1760-01-01 → 1801-07-31 | 1 | 41 | 4.2 | KAMA | 0.00/0.00/0.00 | fransa:0.59,ingiliz-hindistani:0.54 |
| OSMANLI | 46.002, 16.356 | Croatia | 1688-05-19 → 1689-02-11 | 6 | 40 | 4.0 | KAMA | 0.00/0.00/0.00 | macaristan:1.00 |
| OSMANLI-TABI | 24.658, 43.434 | Saudi Arabia | 1838-01-01 → 1840-01-01 | 3 | 40 | 4.4 | KAMA | 0.00/0.00/0.00 | suud:1.00 |
| OSMANLI | 48.087, 19.402 | Slovakia | 1685-08-19 → 1685-10-15 | 1 | 39 | 4.5 | SERIT | 0.00/0.00/0.00 | macaristan:1.00,OSMANLI-TABI:0.47 |
| ingiltere | 33.620, 69.586 | Afghanistan | 1839-07-23 → 1842-09-06 | 2 | 39 | 2.4 | KAMA | 0.00/0.00/0.00 | afganistan:0.61,sih-imparatorlugu:0.61 |
| afganistan | 33.620, 69.586 | Afghanistan | 1879-10-12 → 1880-08-11 | 1 | 38 | 2.4 | SERIT | 0.00/0.00/0.00 | ingiliz-hindistani:0.62,ingiltere:0.61 |
| burgonya | 50.069, 4.407 | Belgium | 1421-03-01 → 1433-04-11 | 2 | 37 | 2.6 | KAMA | 0.00/0.00/0.00 | almanya:0.93 |
| bulgaristan | 42.821, 22.790 | Bulgaria | 1371-09-26 → 1385-09-01 | 3 | 37 | 2.8 | KAMA | 0.00/0.00/0.00 | sirbistan:0.61,OSMANLI-TABI:0.36 |
| OSMANLI | 42.821, 22.790 | Bulgaria | 1385-09-01 → 1386-01-01 | 1 | 37 | 2.6 | KAMA | 0.00/0.00/0.00 | sirbistan:0.61,OSMANLI-TABI:0.37 |
| OSMANLI | 31.648, 48.131 | Iran | 1776-04-16 → 1779-04-01 | 1 | 37 | 2.0 | KAMA | 0.00/0.08/0.00 | zend:1.00 |
| sirbistan | 42.820, 20.691 | Kosovo | 1912-10-22 → 1912-10-23 | 1 | 36 | 7.8 | SERIT | 0.00/0.00/0.00 | OSMANLI:1.00 |
| ilhanli | 37.681, 34.933 | Turkey | 1335-01-01 → 1366-01-01 | 11 | 36 | 1.1 | KAMA | 0.00/0.00/0.00 | eretna:0.77,kilikya-ermeni:0.72 |
| OSMANLI | 16.044, 39.088 | Eritrea | 1872-01-01 → 1884-06-03 | 20 | 35 | 5.9 | SERIT | 0.00/0.00/0.00 | OSMANLI-TABI:0.80,habesistan:0.46 |
| avusturya | 44.960, 22.358 | Romania | 1738-05-08 → 1739-09-18 | 2 | 35 | 5.8 | KAMA | 0.00/0.00/0.00 | OSMANLI:0.63,macaristan:0.33 |
| romanya | 44.960, 22.358 | Romania | 1877-05-09 → 1881-03-26 | 2 | 34 | 5.8 | KAMA | 0.00/0.00/0.00 | macaristan:0.91 |
| eflak | 44.960, 22.358 | Romania | 1330-01-01 → 1462-06-01 | 9 | 34 | 5.8 | KAMA | 0.00/0.00/0.00 | macaristan:0.91 |
| romanya-kralligi | 44.960, 22.358 | Romania | 1881-03-26 → 1918-01-01 | 2 | 34 | 5.8 | KAMA | 0.00/0.00/0.00 | macaristan:0.91 |
| venedik | 46.057, 10.367 | Italy | 1426-01-01 → 1428-01-01 | 1 | 34 | 3.8 | KAMA | 0.00/0.00/0.00 | milanoduka:0.50,almanya:0.48 |
| OSMANLI | 16.093, 39.131 | Eritrea | 1865-01-01 → 1885-02-05 | 7 | 34 | 5.6 | SERIT | 0.00/0.00/0.00 | OSMANLI-TABI:0.48,habesistan:0.47 |
| meysur | 12.156, 75.939 | India | 1565-01-26 → 1923-10-29 | 7 | 34 | 5.0 | KAMA | 0.00/0.00/0.00 | portekiz:0.91 |
| vijayanagara | 12.156, 75.939 | India | 1343-01-01 → 1565-01-26 | 9 | 34 | 5.0 | KAMA | 0.00/0.00/0.00 | kalikut:0.91 |
| hoysala | 12.156, 75.939 | India | 1281-01-01 → 1343-01-01 | 1 | 34 | 5.0 | KAMA | 0.00/0.00/0.00 | kalikut:0.91 |
| ingiliz-hindistani | 22.534, 78.723 | India | 1818-01-01 → 1853-12-11 | 15 | 34 | 4.8 | KAMA | 0.00/0.00/0.00 | bhopal:0.56,maratha:0.54 |
| gond-kralliklari | 22.534, 78.723 | India | 1281-01-01 → 1781-01-01 | 2 | 34 | 4.8 | KAMA | 0.00/0.00/0.00 | racput:0.56,yadava:0.54 |
| afsar | 39.044, 55.438 | Turkmenistan | 1747-06-20 → 1796-01-01 | 3 | 34 | 1.3 | KAMA | 0.00/0.00/0.00 | zend:0.75 |
| turkmen | 39.044, 55.438 | Turkmenistan | 1796-01-01 → 1860-01-01 | 1 | 34 | 1.3 | KAMA | 0.00/0.00/0.00 | kacar:0.75 |
| burgonya | 50.447, 4.441 | Belgium | 1421-03-01 → 1430-08-04 | 1 | 33 | 1.6 | KAMA | 0.00/0.00/0.00 | almanya:0.95 |
| ingiliz-hindistani | 12.186, 75.833 | India | 1790-12-15 → 1923-10-29 | 36 | 33 | 5.1 | SERIT | 0.00/0.00/0.00 | meysur:0.91 |
| kalikut | 12.186, 75.833 | India | 1281-01-01 → 1505-01-01 | 1 | 33 | 5.1 | SERIT | 0.00/0.00/0.00 | hoysala:0.91 |
| portekiz | 12.186, 75.833 | India | 1505-01-01 → 1663-02-15 | 54 | 33 | 5.1 | SERIT | 0.00/0.00/0.00 | vijayanagara:0.91 |
| hollanda | 12.186, 75.833 | India | 1663-02-15 → 1771-01-01 | 8 | 33 | 5.1 | SERIT | 0.00/0.00/0.00 | meysur:0.91 |
| cerkez | 44.705, 39.304 | Russia | 1838-01-01 → 1864-07-01 | 1 | 33 | 1.3 | KAMA | 0.00/0.00/0.00 | rusya:0.97 |

#### `c` — 136 kayıt (en uzun 30 gösterildi)

| sahip | enlem, boylam | bugünkü ülke | ilk gün → son gün | dönem | boy km | en km | biçim | su/n_iç/n_yan | o gün komşu: kapsam |
|---|---|---|---|---|---|---|---|---|---|
| ingiliz-kuzey-amerika | 46.361, -84.927 | United States of America | 1763-02-10 → 1867-07-01 | 50 | 42 | 11.4 | SERIT | 0.29/0.00/0.00 | ingiltere:0.74 |
| kanada | 46.361, -84.926 | United States of America | 1867-07-01 → 1923-10-29 | 12 | 42 | 11.4 | KAMA | 0.27/0.00/0.00 | abd:0.75 |
| kuzey-yuan | 24.904, 100.685 | China | 1382-01-15 → 1382-03-16 | 2 | 39 | 7.0 | SERIT | 0.00/0.36/0.11 | ming-hanedani:0.92 |
| OSMANLI | 37.284, 42.361 | Turkey | 1918-10-30 → 1918-11-08 | 1 | 38 | 2.2 | KAMA | 0.00/0.35/0.15 | ingiltere:0.71,fransa-cumhuriyet:0.35 |
| ingiliz-kuzey-amerika | 58.698, -111.682 | Canada | 1788-01-01 → 1867-07-01 | 43 | 37 | 4.8 | SERIT | 0.17/0.00/0.00 | dene:1.00 |
| kanada | 58.699, -111.682 | Canada | 1867-07-01 → 1899-06-21 | 10 | 37 | 4.8 | SERIT | 0.17/0.00/0.00 | dene:1.00 |
| akkoyunlu | 40.075, 37.966 | Turkey | 1381-01-01 → 1473-08-11 | 12 | 35 | 3.3 | KAMA | 0.00/0.35/0.17 | haciemir:0.53,memluk:0.50 |
| macaristan | 45.193, 14.780 | Croatia | 1281-01-01 → 1527-01-01 | 23 | 32 | 7.0 | SERIT | 0.21/0.00/0.00 | venedik:0.59,almanya:0.01 |
| ingiltere | 36.195, -5.863 | Spain | 1708-09-29 → 1713-04-11 | 1 | 31 | 6.4 | KAMA | 0.29/0.00/0.00 | ispanya:0.58 |
| belcika | -5.075, 14.425 | Dem. Rep. Congo | 1885-01-01 → 1923-10-29 | 16 | 31 | 1.1 | SERIT | 0.00/0.25/0.12 | kongo-kralligi:0.57,fransa-cumhuriyet:0.08 |
| OSMANLI | 41.945, 26.046 | Bulgaria | 1361-05-05 → 1913-09-29 | 4 | 30 | 2.8 | SERIT | 0.00/0.40/0.19 | bulgaristan:0.69,bizans:0.40 |
| avusturya | 45.041, 9.686 | Italy | 1714-03-07 → 1797-05-12 | 15 | 30 | 2.6 | SERIT | 0.00/0.45/0.25 | venedik:0.54,parma:0.46 |
| ispanya | 45.041, 9.686 | Italy | 1535-11-01 → 1714-03-07 | 82 | 29 | 2.6 | SERIT | 0.00/0.45/0.25 | venedik:0.54,papalik:0.46 |
| milanoduka | 45.041, 9.686 | Italy | 1281-01-01 → 1535-11-01 | 2 | 29 | 2.6 | SERIT | 0.00/0.45/0.25 | venedik:0.54,papalik:0.46 |
| venedik | 42.404, 18.785 | Montenegro | 1470-07-12 → 1687-09-30 | 36 | 29 | 6.7 | SERIT | 0.27/0.00/0.00 | OSMANLI:0.54,bosna:0.38 |
| venedik | 42.372, 18.777 | Montenegro | 1479-01-25 → 1482-01-01 | 1 | 29 | 6.8 | SERIT | 0.27/0.00/0.00 | OSMANLI:0.54,bosna:0.37 |
| ingiliz-kuzey-amerika | 44.382, -75.710 | United States of America | 1763-02-10 → 1867-07-01 | 50 | 28 | 4.9 | SERIT | 0.12/0.04/0.00 | haudenosaunee:1.00 |
| fransa | 44.382, -75.710 | United States of America | 1673-01-01 → 1763-02-10 | 35 | 28 | 4.9 | SERIT | 0.13/0.05/0.00 | haudenosaunee:1.00 |
| kanada | 44.382, -75.710 | United States of America | 1867-07-01 → 1923-10-29 | 12 | 28 | 4.9 | SERIT | 0.13/0.05/0.00 | abd:0.81 |
| OSMANLI | 42.008, 26.034 | Bulgaria | 1363-01-01 → 1366-08-01 | 1 | 27 | 3.0 | SERIT | 0.00/0.38/0.13 | bulgaristan:0.72,bizans:0.39 |
| hamid | 38.343, 30.558 | Turkey | 1381-06-01 → 1391-01-01 | 1 | 27 | 2.8 | SERIT | 0.00/0.20/0.10 | OSMANLI:0.74,germiyan:0.34 |
| almanya | 50.772, 21.751 | Poland | 1915-05-13 → 1915-10-01 | 5 | 27 | 1.8 | KAMA | 0.00/0.41/0.16 | kongre-polonyasi:0.94 |
| maratha | 21.819, 73.758 | India | 1753-04-01 → 1818-01-01 | 19 | 26 | 3.0 | KAMA | 0.00/0.27/0.17 | babur-imparatorlugu:0.90 |
| delhi-sultanligi | 21.819, 73.758 | India | 1407-01-01 → 1484-01-01 | 4 | 26 | 3.0 | KAMA | 0.00/0.27/0.17 | gucerat-sultanligi:0.90 |
| isvicre | 47.972, 6.537 | France | 1515-01-01 → 1798-03-15 | 2 | 26 | 2.2 | SERIT | 0.00/0.49/0.29 | almanya:0.58,ispanya:0.53 |
| ispanya | 17.295, -93.598 | Mexico | 1519-03-25 → 1535-04-17 | 25 | 26 | 3.8 | KAMA | 0.18/0.14/0.06 | yeni-ispanya:0.48,ingiltere:0.45 |
| OSMANLI-TABI | 48.199, 24.492 | Ukraine | 1672-08-27 → 1697-01-01 | 21 | 25 | 6.6 | SERIT | 0.00/0.41/0.27 | macaristan:0.87,OSMANLI:0.45 |
| rusya | 40.797, 42.463 | Turkey | 1877-05-17 → 1877-11-18 | 2 | 25 | 1.2 | KAMA | 0.00/0.21/0.01 | OSMANLI:0.92 |
| safevi | 40.797, 42.463 | Turkey | 1534-06-01 → 1551-01-01 | 12 | 25 | 1.2 | KAMA | 0.00/0.21/0.01 | OSMANLI:0.83,gurcistan:0.68 |
| portekiz | -20.079, 33.221 | Mozambique | 1505-01-01 → 1891-01-01 | 79 | 23 | 3.2 | SERIT | 0.11/0.00/0.00 | manica:0.70 |

#### `c-nehir-ince` — 66 kayıt (en uzun 20 gösterildi)

| sahip | enlem, boylam | bugünkü ülke | ilk gün → son gün | dönem | boy km | en km | biçim | su/n_iç/n_yan | o gün komşu: kapsam |
|---|---|---|---|---|---|---|---|---|---|
| brezilya-cumhuriyeti | -13.064, -65.096 | Bolivia | 1889-11-15 → 1923-10-29 | 19 | 33 | 2.0 | SERIT | 0.00/1.33/0.82 | bolivya-cumhuriyeti:0.98 |
| brezilya-imparatorlugu | -13.064, -65.096 | Bolivia | 1822-09-07 → 1889-11-15 | 32 | 33 | 2.0 | SERIT | 0.00/1.33/0.82 | ispanya:0.98 |
| babur-imparatorlugu | 29.741, 70.738 | Pakistan | 1748-01-01 → 1752-04-01 | 4 | 33 | 1.3 | KAMA | 0.00/1.16/0.88 | bahavelpur:0.71,afgan-durrani:0.68 |
| tbmm-turkiye | 39.731, 44.748 | Turkey | 1921-10-13 → 1923-10-29 | 2 | 33 | 1.4 | KAMA | 0.00/1.09/0.87 | sovyet-rusya:0.74,kacar:0.71 |
| OSMANLI | 39.723, 44.756 | Turkey | 1534-01-01 → 1878-03-03 | 273 | 33 | 1.4 | KAMA | 0.00/1.09/0.87 | safevi:0.95 |
| sih-imparatorlugu | 29.730, 70.731 | Pakistan | 1818-06-02 → 1819-01-01 | 1 | 33 | 1.3 | KAMA | 0.00/1.16/0.88 | bahavelpur:0.72,afgan-durrani:0.69 |
| karakoyunlu | 39.731, 44.748 | Turkey | 1468-04-01 → 1469-01-01 | 1 | 33 | 1.4 | KAMA | 0.00/1.09/0.87 | akkoyunlu:0.95 |
| ingiltere | -17.035, 35.302 | Mozambique | 1876-01-01 → 1923-10-29 | 104 | 31 | 1.9 | SERIT | 0.26/1.17/0.80 | portekiz:1.00 |
| safevi | 35.633, 43.276 | Iraq | 1638-12-24 → 1638-12-25 | 1 | 24 | 1.3 | KAMA | 0.00/1.33/0.85 | OSMANLI:1.00 |
| yeni-ispanya | 37.865, -89.763 | United States of America | 1764-02-14 → 1804-03-10 | 15 | 23 | 1.2 | KAMA | 0.00/0.76/0.50 | ingiltere:1.00 |
| jukun-kvararafa | 6.795, 6.656 | Nigeria | 1281-01-01 → 1900-01-01 | 1 | 23 | 1.2 | KAMA | 0.00/1.18/0.89 | benin-kralligi:0.95 |
| nkore | -1.186, 30.491 | Rwanda | 1450-01-01 → 1901-10-25 | 1 | 23 | 1.1 | SERIT | 0.00/1.25/0.75 | karagve:0.74,ruanda:0.73 |
| almanya | 48.576, 13.533 | Austria | 1526-08-29 → 1923-10-29 | 75 | 22 | 1.1 | KAMA | 0.00/1.50/1.00 | avusturya:0.98 |
| bulgaristan | 45.354, 28.322 | Ukraine | 1281-01-01 → 1393-09-01 | 10 | 22 | 1.2 | KAMA | 0.00/1.21/0.92 | altinorda:0.73,macaristan:0.68 |
| yugoslavya | 47.377, 15.325 | Austria | 1920-06-04 → 1923-10-29 | 2 | 22 | 1.8 | KAMA | 0.00/1.17/0.81 | avusturya-cumhuriyet:0.95 |
| ingiltere | 37.351, 42.232 | Turkey | 1918-10-30 → 1921-10-20 | 7 | 22 | 1.5 | KAMA | 0.00/0.64/0.40 | OSMANLI:0.94,fransa-cumhuriyet:0.28 |
| OSMANLI | 45.354, 28.322 | Ukraine | 1393-09-01 → 1856-03-30 | 96 | 21 | 1.3 | KAMA | 0.00/1.28/0.92 | bogdan:0.73,eflak:0.68 |
| karakoyunlu | 39.206, 42.177 | Turkey | 1467-01-01 → 1469-01-01 | 3 | 21 | 1.2 | SERIT | 0.00/0.91/0.53 | akkoyunlu:0.95 |
| safevi | 39.207, 42.177 | Turkey | 1518-01-01 → 1548-08-24 | 13 | 21 | 1.2 | SERIT | 0.00/0.92/0.53 | OSMANLI:1.00 |
| altinorda | 48.308, 24.562 | Ukraine | 1281-01-01 → 1359-01-01 | 5 | 21 | 0.7 | KAMA | 0.00/0.66/0.37 | polonya-erken:0.89,macaristan:0.89 |

---

## 8. EK (10 Ekim) — C3'ün KODU okundu: `Y` ve `G0`ya dokunuyor mu?

Okunan: `origin/makine/umit:denetim/C3-YURUYUS-SUZGEC-1009.diff` (commit `3715d4d5`, tur 5, UYGULANMADI).
`arac/` donuk — YALNIZ OKUNDU, motor koşturulmadı, süzgeç bu haritaya UYGULANMADI.

### 8.1 Önce bir DÜZELTME — iki ifadem yanlış okunabilirdi, biri BENİM hatam
1. **Elle denetimin yönü:** otomatik (a) kovasından çizilen 28 dilin **23'ü DİŞ** (artefakt) çıktı,
   gerçek coğrafya DEĞİL. Yani otomatik (a) kovası **büyük ölçüde artefakt**; gerçek (a) = 1 kesin + 4 makul.
   "601 yalnız ÜST SINIR" bu demek: gerçek koridor sayısı 601'den ÇOK AZ.
2. 🔴 **KAMA/ŞERİT, su/komşu ölçüsü DEĞİLDİR — teslim mesajımda ikisini eşitledim, bu BENİM hatam.**
   KAMA/ŞERİT yalnız BİÇİMDİR (dik kesit eni %20 ↔ %80 oranı). Su payıyla bağımsız:
   ```
   b-dis (iki yan kara)   ŞERİT 392 · KAMA 498
   a-kiyi (bir yan su)    ŞERİT 219 · KAMA 261
   ```
   ⇒ "C3 yalnız KAMA'yı yesin" ≠ "bir yanı su olan korunsun". Ve KAMA/ŞERİT çıktı poligonunda
   ölçülen bir sonradan-ölçüdür; **C3 ızgarada çalışır, poligon biçimini GÖREMEZ** — yama bu ölçüyle yazılamaz.

### 8.2 C3 ne yapıyor (koddan, satır anlamıyla)
- Nesne: `_YR_SAHIP` — **YERLEŞİM indisi** etiketli, **GÜNDEN BAĞIMSIZ** yürüyüş ızgarası (`KV_ADIM = 0,05°`).
  ⇒ C3'ün "komşu sahibi" **başka bir YERLEŞİM**dir, başka bir DEVLET değil. Aynı devletin iki yerleşimi
  arasında da çalışır (o gün görünmez); farklı devletlerde sahiplik değişir. **Benim ölçtüğüm nesne
  (o günün DEVLET gövdesi) ile C3'ün nesnesi bire bir eşleşmez.**
- Bir hücre yalnız beşi birden tutarsa çevrilir: ① geçerli (etiket ≥ 0) ② tohum değil
  ③ İNCE (kendi etiketinin hiçbir 3×3 tekdüze penceresinde değil ⇒ ≤ 2 hücre en)
  ④ 8 komşudan **≥ 5'i TEK bir başka yerleşim**; **deniz, maske dışı, erişilmemiş (< 0) ve boğaz-yasaklı komşu OY VERMEZ**
  ⑤ basit nokta (kendi komşuları halkada ≤ 1 dizi — bölgeyi bölemez). En çok 5 tur.

### 8.3 CEVAP
**`Y` (iki yanı su, 7.604) — HAYIR, yapısal olarak dokunamaz.** Oy verebilen komşu en çok
8 − (su komşusu) tanedir. ≥ 4 su komşusu olan hücrede 5'lik çoğunluk İMKÂNSIZ; 3 su komşusu
olan hücre ancak kalan 5 komşunun 5'i de aynı başka yerleşimse çevrilir (kıyıda tek başına
kalmış yabancı hücre — dil değil). İki yanı su olan 1-2 hücrelik bir dilin her hücresinde
≥ 3, çoğunda ≥ 4-6 su komşusu vardır ⇒ **korunur.**

**Bir yanı su + öbür yanı komşu (`a-kiyi-seridi`, Alaska tipi) — büyük ölçüde HAYIR, aynı sebeple.**
1 enli kıyı şeridinin orta hücresi: 3 su + 2 kendi + 3 komşu ⇒ komşu 3 < 5 ⇒ çevrilmez.
Uç hücresi: 3 su + 1 kendi + 4 komşu ⇒ 4 < 5 ⇒ çevrilmez. ⇒ Koordinatörün "bir yanı su
korunsun" istediği daraltma **kodda ZATEN VAR (④ "deniz oy vermez")** — yeni yama gerekmez.
⚠️ Ölçülmedi: fiyortlu kıyıda (Alaska) ızgaranın kara maskesi suyu her hücrede görüyor mu —
0,05°'lik hücre dar fiyordu KARA sayabilir; o zaman o hücrenin su komşusu yoktur.

**`G0` (komşu gövdeye < %50 değen, 3.598) — KISMEN, ölçülemedi.** Benim G0'ım "o gün başka
DEVLET gövdesine değmiyor" demek. Öbür yan şunlardan biri olabilir:
- deniz/maske dışı/erişilmemiş (< 0) → oy vermez → **korunur** (`Y` gibi)
- sahipsiz ya da `__BOSLUK__` yerleşimlerin hücresi (etiket ≥ 0) → **OY VERİR → yenebilir**
- AYNI devletin başka yerleşimi → oy verir → yenebilir ama devlet haritasında GÖRÜNMEZ
Hangisinin hangi G0 kaydında olduğu, devlet gövdesinden okunamaz — ızgara gerekir.

**İki yanı kara (gömülü 1.693'ün `a-nehir` 121 · `b-dis` 890 · `c` 202 kısmı) — EVET, ama yalnız UÇTAN.**
⑤ (basit nokta) iki gövdeyi bağlayan 1 enli BOYNU korur; yalnız **ölü uçlu** dil ucundan yenir,
5 turda en çok ~9 hücre (~40 km). ⇒ Gerçek bir nehir vadisi koridoru **iki ucu da bir gövdeye
bağlıysa yenmez**; ölü uçlu bir vadi (Timurlu-Menderes tipi) ucundan kısalır.

### 8.4 Ölçümümün C3 için SINIRI
- Benim dillerimin bir kısmı yürüyüş ızgarasından DOĞMUYOR ⇒ C3 onlara hiç dokunamaz:
  Slovakya'daki 132 km × 0,29 km kılcal şerit (iki gövdenin çakışık kenarı — poligon katmanı),
  kıyı maskesiyle kesilen yarımadalar, poligon onarımı (`make_valid`) bileşenleri.
- C3'ün asıl etkisini ÖLÇMENİN tek yolu: süzgeçli ve süzgeçsiz iki `_YR_SAHIP` farkı (`_dis_D`)
  — koşunun kendi logu bunu basıyor (`🦷 DİŞ SÜZGECİ: değişen hücre …`). Benim listem o farkın
  **adaylarının** devlet-katmanı envanteridir, C3'ün çıktısı değil.

### 8.5 Öneri (karar koordinatörde)
① "Yalnız KAMA" daraltması **yazılamaz** (8.1-2) ve kıyı tarafı için **gerekmez** (8.3, ④ zaten koruyor).
② Kalan gerçek risk: **ölü uçlu iç koridor** (iki yanı kara). Bunun için C3'ü değiştirmek yerine,
C3 koşusunda `_dis_D`yi **benim 5 (a) kaydımın penceresinde** saymak yeter — sıfırsa risk kapanır,
değilse adıyla görünür. Bu bir log satırı ister (`_dis_pen` zaten var: Sivas/Iğdır gibi 5 pencere daha).
