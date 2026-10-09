# LAB İNİŞ-DOĞRULAMA-1009 — `71603afe..origin/main` bağımsız ölçüm

Tarih: 9 Ekim 2026 · Makine: hostname `Emre` · Python 3.14.3
Yalnız ÖLÇÜM. Hüküm yok. "TUTUYOR / TUTMUYOR / ÖLÇÜLEMEDİ" yalnız mesajdaki sayının bugünkü
ağaçta tekrar üretilip üretilemediğini söyler.

## 0. Kurulum ve kapsam (olgular)

- `makine/lab` **origin'de zaten vardı** (`4a4add8e0`). Talimat gereği rapor worktree'si
  (`C:\atlas-lab-denetim`) ona dayandırıldı. Bu dal `origin/main`in **1057 commit gerisinde**
  ve `origin/main`de olmayan **12 kendi commit'i** var ⇒ `merge --ff-only origin/main`
  **mümkün değil** (denendi: ff-NOT-possible), yapılmadı; rebase de yapılmadı (12 LAB commit'ini
  yeniden yazardı). **Raporun taban sha'sı: `4a4add8e0` (makine/lab).**
- Bu yüzden ölçümler `makine/lab` ağacında değil, ayrı detached worktree'lerde yapıldı:
  `origin/main` 6865cc876 ve (ikinci fetch'ten sonra) `origin/main` **0291c38d3**; ara commit'ler
  için 8 geçici detached worktree (scratchpad altında, iş sonunda kaldırıldı).
- **Commit sayısı:** koordinatör "14" dedi. `71603afe..6865cc876` = **22** commit;
  ikinci fetch'ten sonra `71603afe..0291c38d3` = **23** commit. Bildirilen "Z5" commit'i
  (3.982 kayıt yaması + beş künye ucu) **origin/main'de YOK** (0291c38d3'ten sonra yeni commit yok).
- `denetle.py` her koşuda `PYTHONIOENCODING=utf-8 PYTHONHASHSEED=0`, çıktı `| cat >` ile alındı;
  çıktıda NUL bayt yok (bayt sayısı `tr -d '\0'` öncesi/sonrası aynı: 30059).

## 1. Commit listesi (`git log --oneline 71603afe..origin/main`, eskiden yeniye)

| # | sha | konu (kısaltılmış) |
|---|---|---|
| 1 | 14174ef7d | KOSU 21 (HAVVA) — tam inşa + UFUK-BANT + yayın r11964 |
| 2 | 3928c0012 | ŞARTNAME — parti-0085/H-0008 HAVVA'ya |
| 3 | 3a5522a5e | defter.json güncellemesi |
| 4 | a52f116d0 | TAHTA M-5878 |
| 5 | e28edfdc7 | TAHTA M-5879 |
| 6 | bc3c467a4 | EEK PROTOKOLÜ + VERI-YAPISI kesinlik örneği |
| 7 | ea1718d52 | su seviyesi M-5877 -> M-5879 |
| 8 | f6ff69d2d | PAKET-0087 depoya alındı |
| 9 | aab05acdb | KRONO-SENKRON MOSTAR yarısı + tavan 185->184 |
| 10 | 1edf7f9a8 | KRONO-SENKRON GÜRCİSTAN yarısı |
| 11 | a36928df4 | ARTUKLU-IKI-PARCA + BEKLENEN_ASAN 127->126 |
| 12 | 647bcf311 | DIVRIGI-MEMLUK + EK (Darende) |
| 13 | 38cf24aef | YIL-DOLGU (0330) |
| 14 | 8584cfcec | DOGUBEYAZIT-0087 |
| 15 | 03c49ad50 | durum tablosu: 623->627 · 185->184 · 4299->4300 |
| 16 | 0e45a9b94 | EEK-DOGU / ERCİŞ |
| 17 | 29be6d424 | VERI-YAPISI: MÖ tarih yazım kuralı |
| 18 | a20e1fe9c | AD DEĞİŞTİ: "Tarih Atlası" + README 1299 |
| 19 | 648ff21ea | KUTU GÖRSEL KÜNYESİ ŞARTNAMESİ |
| 20 | 025ab2a72 | KUTU KÜNYE ŞARTNAMESİ DÜZELTİLDİ |
| 21 | ad4f398db | TAHTA M-5880 |
| 22 | 6865cc876 | ACICI-CGNAT-1009 |
| 23 | 0291c38d3 | PAKETLER YENİLENDİ (ikinci fetch ile geldi) |

Kalıcılık taraması (her commit'in eklediği satırların bugünkü ağaçta birebir bulunması):
bütün kod/veri commit'lerinde eklenen satırların **tamamı** 0291c38d3'te duruyor. Kısmi olanlar
yalnız belge: bc3c467a4 `VERI-YAPISI.md` 5/11 (29be6d424 üstüne yazdı), 648ff21ea
`KUTU-GORSEL-KUNYE-SARTNAME.md` 98/107 (025ab2a72 üstüne yazdı).

## 2. Commit başına iddia ölçümü

Kısaltma: `out-<sha>` = o commit'in detached worktree'sinde `py arac/denetle.py` çıktısı.

### 1 · 14174ef7d KOŞU 21
| iddia | nerede ölçüldü | ölçülen | sonuç |
|---|---|---|---|
| denetle ÇIKIŞ 2 · 8a 1505 (tavan 1508) · 8b 82 (tavan 82) | `denetim/DEGISMEZ-KOSU21-HAVVA.log:339-340,374` | log aynı sayıları taşıyor | log ile TUTARLI; bu makinede **ÖLÇÜLEMEDİ** (D8 girdisi `data/devletler_harita.js` yok, bkz. §5) |
| `paketle.py yenile (30 paket)` | paket tazelik simülasyonu (§6) | bu commit'te bayat kaynak 0, içerik uyuşmazlığı 0 (71603afe'de 39/17 idi) | TUTUYOR |
| yayın r11964 | `CLAUDE.md` tablosu (03c49ad50 sonrası) | r11964 | TUTUYOR |
| D8 CRLF, süreler, MB değerleri | — | — | ÖLÇÜLEMEDİ (koşu ortamı HAVVA) |

### 2 · 3928c0012 ŞARTNAME H-0008
| iddia | nerede | ölçülen | sonuç |
|---|---|---|---|
| `js/app.js:841 var ufukGun = 5;` (71603afe ağacı) | `git show 71603afe:js/app.js` satır 841 | `var ufukGun = 5; // seçili ufuk (gün) — 5 = A, bant çizilmez` | TUTUYOR |
| app.js:2209 yorumu "A opak kalmalı, ve bant KENDİ KENARINI…" | aynı, satır 2209 | birebir | TUTUYOR |
| HAVVA hostname / shapely 2.1.2 + rasterio 1.5.2 | — | başka makine | ÖLÇÜLEMEDİ |
| (olgu) commit `glm/GLM-217-KAYNAKSIZ-GOREV.txt` (143 satır) da ekliyor; mesajda bu dosya anılmıyor | `git show --stat` | — | — |

### 3 · 3a5522a5e defter.json — ölçülebilir iddia yok
### 4 · a52f116d0 TAHTA M-5878 — ölçülebilir iddia yok
### 5 · e28edfdc7 TAHTA M-5879 — ölçülebilir iddia yok

### 6 · bc3c467a4 EEK PROTOKOLÜ
| iddia | nerede | ölçülen | sonuç |
|---|---|---|---|
| denetle `gun_no` negatif yılda ÇÖKER | `arac/denetle.py:1182-1186` (`date(y,a,g).toordinal()`) | `datetime.date` yıl ≥ 1 ister ⇒ ValueError | TUTUYOR (koddan; çalıştırılmadı) |
| bağlı en az altı madde | — | — | ÖLÇÜLEMEDİ (kutu paketleri bu makinede yok) |

### 7 · ea1718d52 su seviyesi
| iddia | nerede | ölçülen | sonuç |
|---|---|---|---|
| M-5877 -> M-5879 | diff `KOORDINATOR-SU-SEVIYESI.json` | `son_islenen` M-5877 → M-5879 | TUTUYOR |

### 8 · f6ff69d2d PAKET-0087
| iddia | nerede | ölçülen | sonuç |
|---|---|---|---|
| 23 dosya | `git ls-files oturumlar/PAKET-0087` | 23 | TUTUYOR |
| 2,76 MB | `du -cb` | 2.892.315 B = 2,76 MiB | TUTUYOR |
| 24 madde · 20 görsel · 12 görselsiz | `PARTI.json` | 24 · 20 görsel ref · 12 görselsiz | TUTUYOR |
| 12 görsel 240 px'ten dar | — | — | ölçülmedi |
| bayt bayt karşılaştırma hata 0 · `.git/info/exclude:20` | — | kutu aslı ve o makinenin exclude'u burada yok | ÖLÇÜLEMEDİ |

### 9 · aab05acdb MOSTAR + `BEKLENEN_ACIK_S` 185->184
| iddia | nerede | ölçülen | sonuç |
|---|---|---|---|
| önce: D2 624/0 · 2s 1722 / 185 AÇIK / 791 kapsam dışı / 165 YIL | `out-f6ff69d2d` (ebeveyn) | 624/0 · 1722 / 185 (tavan 185) / 791 / 165 | TUTUYOR |
| sonra: 2s 1720 / 184 AÇIK / 792 / 164 | `out-aab05acdb` | 1720 / 184 (tavan 184) / 792 / 164 | TUTUYOR |
| D1 309 · 2sk 2250 değişmedi · 2i 171/1 · çıkış 2 | `out-aab05acdb` | 309 · 2250 (tavan 2250) · 171/1 · exit=2 | TUTUYOR |
| tavan aynı commit'te | `git show aab05acdb -- arac/denetle.py` | `BEKLENEN_ACIK_S = 184` bu commit'te (`denetle.py:630`) | TUTUYOR |
| Mostar 1466-01-01, Trebinye 1466-01-01, 1466 maddesi, Hersek ilhakı 1482 | `data/yerlesimler.js:447`, `yerlesimler_seyrek.js:269`, `olaylar_ek5.js:127` | değerler mevcut | TUTUYOR |

### 10 · 1edf7f9a8 GÜRCİSTAN
| iddia | nerede | ölçülen | sonuç |
|---|---|---|---|
| sonra: 2s 1721 / 184 (tavan 184) / 2sk 2250 / YIL 166 | `out-1edf7f9a8` | 1721 / 184 / 2250 / 166 | TUTUYOR |
| D1 309 · D2 624/0 · 2i 171/1 · çıkış 2 | aynı | aynı | TUTUYOR |
| hiçbir tavan oynamadı | `git show --stat` | `arac/denetle.py` dokunulmamış | TUTUYOR |
| kaheti f 1492-01-01, t 1762-01-01; Zagem zinciri 1281-1492-1762-1801 | `devletler.js:7730`, `yerlesimler.js:665` | birebir | TUTUYOR |

### 11 · a36928df4 ARTUKLU + `BEKLENEN_ASAN` 127->126
| iddia | nerede | ölçülen | sonuç |
|---|---|---|---|
| 4c 127 -> 126 | `out-1edf7f9a8` → `out-a36928df4` | 127 → 126 (beklenen 126) | TUTUYOR |
| BEKLENEN_ASAN aynı commit'te 126 | diff, `denetle.py:2694` | evet | TUTUYOR |
| D1 309 · D2 624/0 · 2s 1722 / 184 · 2sk 2250 · çıkış 2 | `out-a36928df4` | aynı | TUTUYOR |
| YIL-TEMSİLÎ 166 -> 167 | aynı | 167 | TUTUYOR |
| Değişmez 7: 733 -> 738, taban 731 donuk | `out-1edf7f9a8` / `out-a36928df4` | 733 → 738, beklenen 731, "7 AŞIM" | TUTUYOR |
| Çemişgezek'ten artuklu kalktı | `yerlesimler.js:2292` | cemisgezek-beyligi → akkoyunlu → safevi, artuklu yok | TUTUYOR |
| (olgu) Harput 1353-1429 ve Palu 1353-1465 hâlâ `artuklu` | `yerlesimler.js:1553,2293` | — | mesaj bunu "SIRADA" diye beyan ediyor |

### 12 · 647bcf311 DIVRIGI + `BEKLENEN_2S_YALNIZ_TARAF` 2250->2251
| iddia | nerede | ölçülen | sonuç |
|---|---|---|---|
| önce D2 624/0 · 2s 1722 / 184 · 2sk 2250 · 4c 126 · D1 309 | `out-a36928df4` | aynı | TUTUYOR |
| sonra D2 625/0 · 2s 1725 / 184 · 2sk 2251 · 4c 126 · D1 309 · çıkış 2 | `out-647bcf311` | aynı, exit=2 | TUTUYOR |
| tavan aynı commit'te | diff, `denetle.py:1713` | evet | TUTUYOR |
| Arapkir/Hısn-ı Mansûr/Behisni/Kâhta Malatya'nın bugünkü zincirine çekildi | diff'in `+` satırları vs `yerlesimler.js:256` | 1399 sonrası (OSM 1399-09-01..1400 · dulkadir 1400..1402 · memluk 1402..1516) Malatya ile aynı; Malatya'daki 1335-1338 `eretna` dilimi bu dört noktada yok | KISMEN (1399 sonrası birebir) |
| Darende: OSM 1398, memluk 1414-1418 | `yerlesimler_ok110.js` diff | 1398..1400 boşluk-OSM · memluk 1414..1418 | TUTUYOR |

### 13 · 38cf24aef YIL-DOLGU
| iddia | nerede | ölçülen | sonuç |
|---|---|---|---|
| önce/sonra birebir: D1 309 · D2 625/0 · 2s 1725/184 · 2sk 2251 · 4c 126 · çıkış 2 | `out-647bcf311` vs `out-38cf24aef` | iki çıktının değişmez satırları aynı | TUTUYOR |
| 64 künye f + 47 kronoloji t = 111 | diff `data/devletler.js` `-` satırları | 111 satır; 64 `f:"ddd-` + 47 `t:"ddd-` | TUTUYOR |
| diff sonrası üç haneli yıl taşıyan veri alanı 0 | 0291c38d3 `devletler.js` | `"ddd-dd-dd"` 0 | TUTUYOR (devletler.js için; `kimlikler.js` 15, iki `kronoloji_cok_once1281_*` dosyasında 1'er üç haneli f/t var — commit kapsamı dışında) |
| ODAK-TAVAN 49 anahtar + evren_ozet | diff `denetim/ODAK-TAVAN.json` | 49 `"k":` satırı + 1 `evren_ozet` | TUTUYOR |
| "YENİ KAPSAM 4->51, 47 ölü anahtar" (tavan inmezse) · "3 -> 1" | — | `denetle_yayin.py` koşturulmadı | ÖLÇÜLEMEDİ |
| `6e39f055` önceki §3.4② açığı | `git log --all` | bu sha yerel hiçbir ref'te yok | ÖLÇÜLEMEDİ |

### 14 · 8584cfcec DOĞUBEYAZIT
| iddia | nerede | ölçülen | sonuç |
|---|---|---|---|
| önce D2 625/0 · 2s 1725/184 · 2sk 2251 · 4c 126 · D1 309 | `out-38cf24aef` | aynı | TUTUYOR |
| sonra D2 627/0 · 2s 1727/184 · 2sk 2251 · 4c 126 · D1 309 · çıkış 2 | `out-8584cfcec` | aynı | TUTUYOR |
| zincir: safevi→1534-06-23 · OSM 1534-06-23→1547 · safevi→1553-08-01 · OSM 1553-08-01→1920-04-23 | `yerlesimler_ek26.js:113-115` | birebir | TUTUYOR |
| 200 km içinde 28 noktanın 27'si safevi · Erzurum 245 km | — | — | ölçülmedi |
| (olgu) Değişmez 7: 738 → 737 | `out-8584cfcec` | 737, "6 AŞIM" | mesajda yok |

### 15 · 03c49ad50 durum tablosu
| iddia | nerede | ölçülen | sonuç |
|---|---|---|---|
| tablo değerleri bugünkü ölçüm | `CLAUDE.md` tablo vs 0291c38d3 denetle | 4300 · 309 · 627/0 · 1727 / 184 (tavan 184) / 791 / 167 · 171/1 · 13 · konum 0 — hepsi aynı | TUTUYOR |
| başlık "4299->4300 nokta (gecenin altı inişi)" | `out-71603afe` | aralığın başında (71603afe) zaten **4300** yerleşim | sayı TUTUYOR; "gecenin inişi" kısmı TUTMUYOR (değişim 71603afe'den önce) |
| başlık "623->627 kırılma" | `out-71603afe` | aralık başında **624**; gece 624→627 (+3). 623 bayat tablo değeri (ve dekoratif `BEKLENEN_KIRILMA = 623`, `denetle.py:349`) | son değer TUTUYOR; başlangıç değeri ölçümle uyuşmuyor |
| başlık "185->184 tavan" | diff | tabloda tavan **189→184**, AÇIK **186→184** değişti; kod sabiti 185→184 aab05acdb'de | tablo diff'i başlıktaki sayıyla uyuşmuyor |
| kronoloji 1793 madde · renk 608→704 | — | denetle "2215 kronoloji maddesi" basıyor (farklı evren); `durum_tablosu.py` koşturulmadı | ÖLÇÜLEMEDİ |

### 16 · 0e45a9b94 ERCİŞ
| iddia | nerede | ölçülen | sonuç |
|---|---|---|---|
| önce 2sk 4200 kapalı / 2086 YER | `out-8584cfcec` | 4200 / 2086 | TUTUYOR |
| sonra 4201 / 2087, 2251 (tavan 2251), D2 627/0, 2s 1727/184, 4c 126, çıkış 2 | `denetle-out` (6865cc876) ve `out-0291c38d` | aynı | TUTUYOR |
| Erciş 1467-01-01, `kesinlik:"yil"`, "Gün komşudan: Van" | `yerlesimler.js:1782-1783` | mevcut | TUTUYOR |

### 17 · 29be6d424 MÖ tarih kuralı
| iddia | nerede | ölçülen | sonuç |
|---|---|---|---|
| bugünkü evrende negatif yıl 0 | `data/*.js` f/t regex | 0 | TUTUYOR |
| MÖ 3000 – MS 9999 arası 4.747.787 gün | proleptik Gregoryen hesap | iki uç dahil **4.747.788**; bir uç hariç 4.747.787 | sınır tanımına bağlı (±1) |
| -2999-01-01 gün sayacı −1.814.890 | — | sayaç epoch'u depoda tanımlı değil; 1970-01-01 epoch'uyla −1.814.891 | ÖLÇÜLEMEDİ |
| 7.404 tarih dizgisi · sha256 ikiz sınavı | — | GUN-SAYACI-*-1009 dosyaları depoda yok | ÖLÇÜLEMEDİ |

### 18 · a20e1fe9c AD DEĞİŞTİ
| iddia | nerede | ölçülen | sonuç |
|---|---|---|---|
| başlık "Tarih Atlası", 1281 | `README.md:1,5` | evet | TUTUYOR |
| `js/app.js:89 BASLANGIC = gunIdx("1281-01-01")` | `js/app.js:89` | birebir | TUTUYOR |
| "README'deki 1299 YANLIŞI düzeltildi" | `README.md:17` | "- **1299–1923** arası ay ay ilerleyen…" satırı duruyor | KISMEN (başlık düzeldi, özellik listesinde 1299 kaldı) |

### 19 · 648ff21ea KUTU GÖRSEL KÜNYESİ ŞARTNAMESİ
| iddia | sonuç |
|---|---|
| 1.834 madde, dört alan · 26 görsel < 240 px | ÖLÇÜLEMEDİ (`C:\claudemre\kutu` bu makinede yok) |
| "hiç olmamış özellik" | 025ab2a72 bu iddiayı kendisi geri aldı |

### 20 · 025ab2a72 ŞARTNAME DÜZELTİLDİ
| iddia | sonuç |
|---|---|
| parti-0002/H-0006-1.png şeridi · `%LOCALAPPDATA%\uibul\settings.json` F4 · 100 kare · kutu.py:256 | ÖLÇÜLEMEDİ (bu makinede `uibul\settings.json` ve `C:\claudemre\kutu` yok) |

### 21 · ad4f398db TAHTA M-5880 — ölçülebilir iddia yok

### 22 · 6865cc876 ACICI-CGNAT
| iddia | nerede | ölçülen | sonuç |
|---|---|---|---|
| teşhis `arac/acici.py:154 return ip.is_private or ip.is_loopback` | `git show ad4f398db:arac/acici.py` satır 154 | birebir | TUTUYOR |
| sınav A RED 4/4 · B KABUL 4/4 · C RED 6/6 · D KABUL 6/6 · çıkış 0 | `py denetim/ARAC-ACICI-CGNAT-SINAV-1009.py --eski HEAD~` (6865cc876) | 4/4 · 4/4 · 6/6 · 6/6 · exit 0 | TUTUYOR |
| (olgu) argümansız çağrı | aynı betik, argümansız | `A yamasız (HEAD): Tailscale RED 0/4`, exit **1**. Docstring "HEAD~" diyor, kod (`:42`) varsayılanı `"HEAD"` | — |

### 23 · 0291c38d3 PAKETLER YENİLENDİ
| iddia | nerede | ölçülen | sonuç |
|---|---|---|---|
| 6 paket değişti (01·04·05·13·14·21) | `git show --stat` | 6 dosya | TUTUYOR |
| "30 paket yeniden üretildi, 18'i değişti, değişen kaynak 8" | aynı | commit'te 6 paket var; **`data/paket_kunye.json` commit'te YOK** | "18" diff'le uyuşmuyor |
| paket_14'te "1534-06-23" → 3 geçiş | grep | 3 satır, 4 geçiş | satır sayısı olarak tutuyor |
| paket_05'te "1925-10-31" → 2 geçiş | grep | 2 | TUTUYOR — ama `data/devletler.js`te (0291c38d3) bu değer **yok**: kacar `t:"1925-01-01"`, iran `f:"1925-12-12"`, surakarta `t:"1923-10-29"`; `git log --all -S'1925-10-31' -- data/devletler.js` boş |
| "Düzeltmeler artık PAKETTE" | `py arac/paketle.py sina` @0291c38d3 | exit **1**: 8 kaynak sha'sı künyeyle uyuşmuyor (künye güncellenmemiş) + `paket_05.js` İÇERİK kaynakla uyuşmuyor (10 satır fark) | KISMEN: 01·04·13·14·21 içerik olarak kaynakla birebir; 05 değil; künye bayat |
| "denetle_yayin paket ile KAYNAK arasındaki farkı sormuyor" | `arac/denetle_yayin.py:1856-1863,1891` | `paketle.sina()` çağrılıyor; sina hem kaynak sha'sını hem içeriği soruyor; `_paket_ihlali` çıkış 1'e bağlı | TUTMUYOR (kapı bu farkı soruyor) |

### Sayım (23 commit)
- Ölçülebilir iddia yok: **4** (3a5522a5e, a52f116d0, e28edfdc7, ad4f398db).
- Ölçülen iddiaların hepsi TUTAN commit: 14174ef7d (ölçülebilen kısım), 3928c0012, bc3c467a4, ea1718d52, f6ff69d2d, aab05acdb, 1edf7f9a8, a36928df4, 38cf24aef, 8584cfcec, 0e45a9b94, 6865cc876 → **12**.
- En az bir iddiası kısmen tutan / uyuşmayan: 647bcf311 (zincir kısmen), 03c49ad50 (başlıktaki başlangıç değerleri), 29be6d424 (±1 gün sayısı), a20e1fe9c (README:17), 0291c38d3 (18 paket, künye, paket_05, denetle_yayin cümlesi) → **5**.
- Yalnız ölçülemeyen: 648ff21ea, 025ab2a72 → **2**.
- **Bütün `denetle.py` sayaç iddiaları (önce/sonra, 9 commit) birebir tekrar üretildi; uyuşmayan sayaç yok.**

## 3. §3.4② — tavan ile veri aynı commit'te mi

Tanım: `CLAUDE.md:146-148` ("TAVAN + SABİT AYNI COMMIT'TE … ayrılırsa arada kalan commit'te kapı DOĞRU
çıktıyı yanlışlıkla REDDEDER").

Aralıktaki tavan değişiklikleri (`arac/denetle.py` ve `denetim/ODAK-TAVAN.json`):

| commit | tavan | veri aynı commit'te mi |
|---|---|---|
| aab05acdb | `BEKLENEN_ACIK_S` 185→184 | evet (yerlesimler, seyrek, olaylar_ek5, yer_yama) |
| a36928df4 | `BEKLENEN_ASAN` 127→126 (+ D7 yorumu; `BEKLENEN_ENKLAV_SORGU` 731 değişmedi) | evet (yerlesimler.js) |
| 647bcf311 | `BEKLENEN_2S_YALNIZ_TARAF` 2250→2251 | evet (yerlesimler, ok110, olaylar_senkron_0930) |
| 38cf24aef | `ODAK-TAVAN.json` 49 anahtar | evet (devletler.js) |

**Ayrık (split) tavan değişikliği bulunmadı.** Yine de her ara commit gerçekten ölçüldü
(geçici detached worktree, tam `denetle.py`):

| commit | çıkış | ihlal | not |
|---|---|---|---|
| 71603afe | 2 | yok | yalnız D8 ölçülemedi |
| f6ff69d2d | 2 | yok | |
| aab05acdb | 2 | yok | 2s 184 = tavan 184 |
| 1edf7f9a8 | 2 | yok | |
| a36928df4 | 2 | yok | 4c 126 = 126 |
| 647bcf311 | 2 | yok | 2sk 2251 = 2251 |
| 38cf24aef | 2 | yok | |
| 8584cfcec | 2 | yok | |
| 6865cc876 / 0291c38d3 | 2 | yok | |

Hiçbir ara commit'te kapı çıkış 1 vermedi; çıkış 2'nin tek sebebi her yerde D8 (bkz. §5).
**Sınır:** çıkış 1, çıkış 2'ye baskın (`denetle.py:7250-7255`), yani "ihlal yok" ölçümü D8 dışındaki
dallar için geçerlidir. Ayrıca kapının sıkılığı sorulursa: 2s ve 4c tavanları iyileşmede kendi
commit'inde indiği için ara commit'lerde gevşek tavan payı da 0'dı (her ölçümde değer = tavan).
`ODAK-TAVAN.json` `denetle_yayin.py` tarafından okunur; o kapı ara commit'lerde **koşturulmadı**.
`CLAUDE.md` tablosu (03c49ad50) bir kapı değildir; 8584cfcec ile 03c49ad50 arasında tablo bayattı
(ölçüm değil, belge).

## 4. `py arac/denetle.py` — origin/main

Koşuldu: 6865cc876 (`denetle-out.txt`) ve 0291c38d3; değişmez/ek denetim/SONUÇ satırları iki koşuda
**birebir aynı**. Süre ~100 sn.

**Çıkış kodu: 2** — "TEMİZ DEĞİL — eksik ölçüm". İhlal yok.

| değişmez | değer |
|---|---|
| veri | 4300 yerleşim, 2215 kronoloji maddesi; 1 beyansız <3 km çift (Dakar↔Gorée 2,96 km) |
| 1 | ✓ 309 sahipsiz (beklenen 309) · bilgi: 4300 ≠ 4299 |
| 1c | ✓ belgesiz 4 (tavan 4) |
| 1b | ✓ beyansız boşluk 0 · beyanlı 7/7 |
| Boşluk cinsi | ✓ 0 |
| 2 | ✓ 627 kırılma, 0 açık · bilgi: 627 ≠ 623 |
| 2s | ✓ 1727 · 184 AÇIK (tavan 184) · 791 kapsam dışı · 167 YIL-TEMSİLÎ (tavan 151 aşıldı, ihlal sayılmıyor) |
| 2sk | 🧊 4201 kapalı = 2087 YER + 2114 TARAF · yalnız-taraf 2251 (tavan 2251) · maske 714 |
| 2i | ✓ 171, 1 açık (tavan 1) |
| 2t | ✓ 13 (tavan 13) |
| 3z | m: 491 · kd: 57 · gerçek kd 418 |
| 4 | ✓ 0 hayalet |
| 4c | ✓ 126 (beklenen 126) |
| 4d | ✓ 324 (beklenen 324) |
| 4s | ✓ 5 (beklenen 5) |
| 5 / 5a-muaf / 5b / 5c | ✓ 0 · ✓ 1 (tavan 1) · i 149 · i 2450 |
| 7 | 🧊 737 (beklenen 731, DONDU) — 6 aşım, ihlal sayılmıyor · A 543 · B 184 · C 10 |
| dönem sağlığı | ✓ 0/0/0 |
| kaynaksız `s:` | ✓ 1908 (tavan 1930) · kayıt-kaynaksız 2301 (tavan 2301) — "TAVAN GEVŞEK" uyarısı |
| mükerrer | ✓ 95 (≤95) · ölü istisna 0/52 |
| savaş senkronu | i 165/174 |
| **8** | **ÖLÇÜLEMEDİ — `RuntimeError: devletler_harita.js YOK (üretilmiş + gitignore'lu çıktı)`** |
| R | ✓ 0 |
| konum | ✓ 0 nokta kara maskesi dışında |

## 5. D8 bu makinede ölçülebilir mi

- `py -c "import shapely"` → **shapely 2.1.2** var.
- `py -c "import rasterio"` → **ModuleNotFoundError** (yok). Kurulmadı.
- D8 `data/devletler_harita.js` ister; dosya gitignore'lu (`.gitignore:28`) motor çıktısıdır ve
  hiçbir worktree'mde yok. Motoru (`arac/uret_petek.py`) üretmek rasterio ister.
- **Sonuç: D8 ölçülemedi.** (Engel sırası: önce eksik girdi dosyası; onu üretmek için rasterio.)

## 6. Paket tazeliği hangi kapıya bağlı, boşluk kaç kez oluştu

### 6.1 Bağlantı (koddan)
- `arac/paketle.py sina` (`:403-463`): künyedeki her kaynağın sha256'sını ve paketin içeriğini bellekte
  yeniden kurup karşılaştırır; bayatsa çıkış 1.
- **`arac/denetle_yayin.py:1856-1863`** `paketle.sina()`yı çağırır; sonuç `_paket_ihlali` olarak
  `:1891`de çıkış 1'e bağlı. ⇒ Bağlı olduğu tek kapı **denetle_yayin.py**.
- `arac/denetle.py`: `sina` çağrısı **yok** (yalnız D8/görünür dallarında paketleri çözen yardımcı var).
- Hook: `core.hooksPath` tanımsız, `.git/hooks`ta `.sample` dışında dosya yok (C:\atlas), `.githooks/` yok.
- CI: `.github/workflows/` **yok**.
- (olgu) 14174ef7d mesajı `denetle_yayin` için "çıkış 1 — bilinen borçlar" diyor: kapı paket bayatlığı
  olmadan da 1 dönüyorsa, paket bayatlığı ek bir çıkış kodu değişikliği üretmez (aynı 1). Bu,
  `denetle_yayin` o commit'te koşturulmadan, mesajdan aktarılmıştır.

### 6.2 Ölçüm: o gün `sina` koşsaydı ne derdi
Yöntem: `origin/main`in **first-parent** zinciri, paketlemenin geldiği `af0c78c6`dan (29 Eyl) 0291c38d3'e,
**1047 commit**. Her commit'te o commit'in `data/paket_kunye.json`u okundu; ① her kaynak blob'unun
satır sonu düzlenmiş sha256[:16]'sı künyeyle, ② paket blob'u `_govde_kur` ile kaynaklardan yeniden
kurulan gövdeyle karşılaştırıldı (`paketle.py`nin mantığının birebir kopyası, `git cat-file` ile).
Doğrulama: simülasyon 6865cc876'da 8 bayat kaynak + 6 paket, 0291c38d3'te 8 + 1 paket verdi —
gerçek `paketle.py sina` çıktısıyla aynı. (index.html bağlantı denetimi simüle edilmedi.)

Sonuç:
- **505 / 1047** first-parent commit'te `sina` çıkış 1 verirdi (498'inde kaynak sha'sı, 501'inde içerik uyuşmazlığı).
- **14 ayrı bayatlık dönemi** (temizden bayata geçiş):

| başlayan | biten (son bayat) | commit |
|---|---|---|
| cc58e51d8 | 17cd2f98f | 81 |
| 2ddede3db | eb574b5fc | 164 |
| 575be1465 | 575be1465 | 1 |
| 1307745ae | 7015c18d1 | 7 |
| d886d45b9 | d886d45b9 | 1 |
| 614b09144 | 9b9a8986e | 12 |
| 11bcae716 | d3dc63e94 | 32 |
| 250b62ae3 | ca1436638 | 50 |
| be79c67ad | 91fc131eb | 9 |
| 7585d66d1 | 3e5fcdae6 | 50 |
| af3492a85 | af3492a85 | 1 |
| 2f97dcbf7 | 2060ce7aa | 43 |
| 413867a59 | 71603afee | 39 |
| aab05acdb | **(açık — 0291c38d3 dahil)** | 15 |

- Bu aralıkta: 71603afe bayattı (39 kaynak/17 paket), 14174ef7d temizledi, aab05acdb ile yeniden
  bayatladı ve 0291c38d3'te **hâlâ bayat** (8 künye sha'sı + paket_05 içeriği).

## 7. Tutarsızlıklar (yalnız olgu)

1. Commit sayısı 14 denmiş; 22 (6865cc876'ya kadar), şimdi 23 (0291c38d3). "Z5" commit'i origin/main'de yok.
2. 03c49ad50 başlığı "4299->4300": aralık başında (71603afe) zaten 4300 yerleşim ölçüldü.
3. 03c49ad50 başlığı "623->627": aralık başında 624 ölçüldü; 623 bayat tablo/dekoratif sabit değeri.
4. 03c49ad50 başlığı "185->184 tavan": tablo diff'inde tavan 189→184, AÇIK 186→184.
5. a20e1fe9c "1299 düzeltildi": `README.md:17` hâlâ "1299–1923".
6. 647bcf311 "Malatya'nın bugünkü zinciri": 1399 sonrası aynı, Malatya'daki 1335-1338 eretna dilimi dört noktada yok.
7. 29be6d424 "4.747.787 gün": iki uç dahil hesap 4.747.788.
8. 6865cc876 sınav betiği: docstring varsayılanı HEAD~, kod varsayılanı HEAD; argümansız çalıştırınca exit 1.
9. 3928c0012 `glm/GLM-217-KAYNAKSIZ-GOREV.txt` dosyasını da ekliyor, mesajda anılmıyor.
10. 0291c38d3 "18'i değişti": commit'te 6 paket; `paket_kunye.json` commit'te yok ⇒ `paketle.py sina` 0291c38d3'te exit 1.
11. 0291c38d3 paket_05'te `1925-10-31` (kacar/iran) ve surakarta `1945-09-02` var; aynı commit'teki
    `data/devletler.js`te yok, yerel hiçbir ref'in `devletler.js`inde `1925-10-31` yok ⇒ paket, depoda
    olmayan bir kaynaktan üretilmiş.
12. 0291c38d3 "denetle_yayin paket ile kaynak farkını sormuyor": `denetle_yayin.py:1859` `paketle.sina()`yı
    çağırıyor ve sina kaynak sha'sı + içerik soruyor.
13. Değişmez 7 bugün 737 (a36928df4 mesajındaki 738'den 8584cfcec'te 737'ye indi); mesajlarda anılmıyor.
14. D8 her ara commit'te ve bugün bu makinede ölçülemedi; 14174ef7d'nin 8a/8b sayıları yalnız log kaydı olarak doğrulanabildi.
