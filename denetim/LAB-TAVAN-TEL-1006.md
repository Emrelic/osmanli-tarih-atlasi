# LAB-TAVAN-TEL-1006 — 24 `BEKLENEN_*` sabitinin kaçı hükme BAĞLI?

**Ölçüm gövdesi:** `origin/main` **586c07918142c79efec733d47d104ca1ad847ca3**
("KURTARMA: EMRELIC stash yigini…", 6 Ekim 15:02) · `arac/denetle.py` sha256 `4a63bf37a24a…`, 6711 satır, `:628 BEKLENEN_2S_YIL_BORC = 151` ✓.
**Makine:** `Emre` (EMRELIC **DEĞİL**). Depo: `C:\atlas`ın `--shared` klonları, scratchpad'de; kök hiçbir betikte mutlak yazılmadı (statik betik kökü argümandan alır, dinamik betik `git -C <kopya>`).
**Üretilmiş veri (gitignore'lu):** `devletler_harita.js` + `donemler.js`, `C:\atlas\data`dan kopyalandı. sha256 = site damgası (`__DP_SHA 0ef2d3e23c4e…`, `__PR_SHA 6e34fd54dcfb…`) ⇒ Değişmez 8 **ölçüldü**. (İlk denemede `atlas-d8m` verisi damgayla uyuşmadı → D8 ölçülemedi; atıldı.)
**Asıl `arac/denetle.py` hiçbir yerde değiştirilmedi;** beş kopya koşu sonunda `git status` = temiz.

## 0. Öngörü (ölçümden ÖNCE yazıldı, 15:05:50, gövde okunmadan)

> 24'ten ~**11 DEKORATİF**, ~**4 YARI BAĞLI**, ~**9 BAĞLI**. Mekanizma: (a) eşitlik/kayma kalıbı → bağlı; (b) "tavan aşıldı, ihlal DEĞİL" kalıbı → dekoratif (2S_YIL_BORC örneği), tavanlar sonradan eklendiği için çoğu (b)'de; yarı bağlı = aynı sabitin iki kullanım yeri ya da bir mod/bayrak yolunda karşılaştırmanın atlanması.

**Sonuç: 6 / 2 / 16.** Sayı **TUTMADI** (fazla karamsar: dekoratifi 2 kat fazla tahmin ettim).
Mekanizma **KISMEN** tuttu:
- (b) "ihlal DEĞİL" kalıbı ✓ — ama yalnız **2** sabit (2S_YIL_BORC, 2S_YALNIZ_TARAF).
- Görmediğim üç dekoratif mekanizma: **"sadece bilgi" eşitlik sayaçları** (YERLESIM, KIRILMA — öngörüdeki (a) kalıbının bağlı olacağını sanıyordum, ikisi de bağsız) · **ölü sabit** (CELISKI_UST_SINIR, hiç okunmuyor) · **yalnız ekrana basılan sabit** (MASKE_DISI; hüküm sabite değil literal 0'a bağlı).
- Yarı bağlı ✓ "mod/bayrak" kolu: `KAMPANYA_DONDURMA`. ✗ "iki kullanım yeri" kolu: hiç çıkmadı. Görmediğim ikinci yarı bağlı mekanizma: **`None` nöbetçisi + veriye bağlı erken dönüş** (BAYAT_KOPYA).

## 1. Hüküm yolu (iki yöntemin ortak zemini)

`main()` sonunda: `if ihlal: exit(1)` → `if OLCULEMEDI_KOVA: exit(2)` → `exit(0)` (`:6699-6707`). **İhlal 2'yi ezer** ⇒ baseline 2 iken bir sabitin bağlı olduğu, çıkışın **2→1** dönmesiyle görünür.
**Baseline (bu gövde, D8 verili): çıkış 2** — tek ölçülemeyen: `Değişmez 8k` (75 tam kör hat). Bütün 28 koşuda bu "1 ölçülemeyen" aynı kaldı (her log'da sayıldı) ⇒ 2→1 farkı yalnız yamadan geliyor.
`ihlal` main'de 30+ yerde `True` yapılıyor + iki fonksiyondan dönüşle geliyor (`zincir_kaynagi_rapor :6635`, `degismez8_rapor :6639`). Koordinatörün satır numaraları (`:5401 · :5404 · :5594 …`) bu gövdeyle ~18 satır kaymalı (`:5419 · :5422 · :5612 …`) ⇒ **koordinatörün ölçtüğü gövde 586c0791 DEĞİL** (daha eski); `:628` ikisinde de aynı.

## 2. Yöntemler

**① STATİK (`ast`)** — her `BEKLENEN_*` okumasından başlayarak fonksiyon içi kirlenme: atamalarla veri akışı + `if/while` testiyle kontrol bağımlılığı → `ihlal` ataması mı? Fonksiyon kirli `ihlal` döndürüyorsa çağrı yeri main'de kirli sayılır. Yoldaki **kirli olmayan** koşullar (`and` bağlaçları dahil, `else` dalı, `except` erken dönüşleri) "ek koşul" olarak raporlanır. `grep` kullanılmadı.
**② DİNAMİK** — her sabit için ayrı kopyada değer değiştirildi, `py arac/denetle.py` koşuldu, çıkış kodu kaydedildi, dosya `git checkout` ile geri alındı. Değer = **ölçüm − 1** (aşmayı garanti eder). 23 sabitte bu "tavan − 1" ile aynı; ACIK_S'te farklı (aşağıda ⚠️). `None`/0 sabitler → −1. 28 koşu, 4 kopya paralel, koşu başı 4-5,5 dk.

## 3. Dağılım — 24 sabit

| # | Sabit | Kova | Dinamik (değer → çıkış) | Statik yol | Bugünkü ölçüm | Tavan | Aşılmış mı |
|---|---|---|---|---|---|---|---|
| 1 | SAHIPSIZ | 🔴 BAĞLI | 308 → **1** | main `:5872` koşulsuz | 309 | 309 | hayır (sınırda) |
| 2 | BELGESIZ | 🔴 | 3 → **1** | `:5907` | 4 | 4 | hayır (sınırda) |
| 3 | BOSLUK | 🔴 | −1 → **1** | `:5937` | 0 | 0 | hayır |
| 4 | CINSSIZ | 🔴 | −1 → **1** | `:5968` | 0 | 0 | hayır |
| 5 | ACIK | 🔴 | −1 → **1** | `:5982` | 0 | 0 | hayır |
| 6 | ACIK_S | 🔴 | 188 → 2 ⚠️ · **185 → 1** | `:6006` | 186 | 189 | hayır — **3 puan GEVŞEK** |
| 7 | ACIK_ISG | 🔴 | 0 → **1** | `:6064` | 1 | 1 | hayır |
| 8 | KIRILMASIZ | 🔴 | 12 → **1** | `:6101` | 13 | 13 | hayır |
| 9 | HAYALET | 🔴 | −1 → **1** | `:6183`, ek koşul `olculdu` | 0 | 0 | hayır |
| 10 | ASAN | 🔴 | 126 → **1** | `:6202`, ek koşul `olculdu` | 127 | 127 | hayır |
| 11 | ONCE | 🔴 | 323 → **1** | `:6240`, ek koşul `olculdu` | 324 | 324 | hayır |
| 12 | SARAN | 🔴 | 4 → **1** | `:6279`, ek koşul `olculdu` | 5 | 5 | hayır |
| 13 | HAYALET_YERLESIM | 🔴 | −1 → **1** | `:6337` | 0 | 0 | hayır |
| 14 | DEVIR_BEYANI | 🔴 | 0 → **1** | `:6346` | 1 | 1 | hayır |
| 15 | D8A | 🔴 | 1507 → **1** | `degismez8_rapor :5422` → main `:6641`, ek koşul: gövde damgası | 1508 | 1508 | hayır |
| 16 | D8B | 🔴 | 81 → **1** | aynı | 82 | 82 | hayır |
| 17 | **ENKLAV_SORGU** | 🟡 YARI BAĞLI | 730 → 2 · `DONDURMA=False` → **1** · `DONDURMA=False, tavan=733` → 2 | `:6406`, ek koşul `not KAMPANYA_DONDURMA` | **733** | 731 | **EVET, +2, SESSİZ** |
| 18 | **BAYAT_KOPYA** | 🟡 | −1 → 2 | `zincir_kaynagi_rapor :5813` → main `:6636`; ek koşullar `R["beyanli"]` erken dönüş + `is None` | 0 bayat / **0 beyanlı kayıt** | `None` | sorulamıyor |
| 19 | **2S_YIL_BORC** | ⚪ DEKORATİF | 150 → 2 | yol YOK (yalnız `print`) | **165** | 151 | **EVET, +14** |
| 20 | **2S_YALNIZ_TARAF** | ⚪ | 2246 → 2 | yol YOK (`_trf_asim` yalnız ikon/print) | 2247 | 2247 | hayır — **tam sınırda**, bir sonraki +1 sessiz |
| 21 | **YERLESIM** | ⚪ | 967 → 2 | yol YOK ("sadece bilgi") | **4299** | 968 (`!=`) | **EVET, +3331** — 2 aydır bayat |
| 22 | **KIRILMA** | ⚪ | 475 → 2 | yol YOK ("sadece bilgi") | **623** | 476 (`!=`) | **EVET, +147** |
| 23 | **CELISKI_UST_SINIR** | ⚪ (ÖLÜ) | 386 → 2 | **sıfır okuma** | sayaç 485 | 387 | nominal EVET, +98 (31 Tem'de bilinçli sayaca düşürüldü, `da5a208e`; sabit + yorum bloğu `:760-782` kaldı) |
| 24 | **MASKE_DISI** | ⚪ | −1 → 2 | yol YOK; hüküm `if kd:` = literal 0'a bağlı | 0 | 0 | hayır |

**Toplam: 🔴 16 · 🟡 2 · ⚪ 6.**

**Listede OLMAYAN iki sabit** (main içinde yerel, modül düzeyinde değil — o yüzden sayımdan kaçmış): `BEKLENEN_MUKERRER = 95` (`:6529`) 94 → **1** 🔴 · `BEKLENEN_OLU_ISTISNA = 0` (`:6590`) −1 → **1** 🔴. Ölçüm 95/95 ve 0/0, aşılmamış. Gerçek evren **26**.

## 4. Statik ↔ dinamik ÇELİŞKİLERİ (bulgu)

1. **ENKLAV_SORGU — benim ilk statik aracım YANILDI.** İlk sürüm `if _asim and not KAMPANYA_DONDURMA:` testini bütün olarak "kirli" saydı → **koşulsuz BAĞLI** dedi. Dinamik 730 → **2**. `and` bağlaçlarını ayrıştıran ikinci sürüm ek koşulu buldu. Ders koordinatörün dersiyle aynı: *ast temiz yol buldu ≠ yol çalışıyor*. Dondurmanın etkisi ölçüldü: `False` → 1, `False + tavan=733` → 2 (kontrol: 1'i getiren aşımdır, bayrak değil).
2. **BAYAT_KOPYA — statik YOL BULDU, dinamik hiçbir şey değiştirmedi.** Yol `zincir_kaynagi_rapor`dan main'e gerçekten bağlı; ama iki kapı arkasında: tavan `None` (yalnız bilgi) **ve** `beyanli == 0` olduğu için fonksiyon tavana bakmadan `False` döner. Tavan yazılsa BİLE bugün sorulmaz.
3. **ACIK_S — dinamik yöntemin KENDİ İÇİNDE çelişkisi.** Görevdeki "bir eksilt" talimatı aynen uygulanınca (189 → 188) çıkış **2** — sabit DEKORATİF görünür. Ama tavan 3 puan gevşek (186 < 189); ölçüm − 1 = 185 → **1**. ⇒ **"tavanı bir eksilt" testi gevşek tavanı yanlışlıkla DEKORATİF diye sınıflar.** Doğru test "tavanı ölçümün altına indir"dir.
4. **Ortama bağlı bağlılık (çelişki değil, uyarı):** D8A/D8B yalnız gövde damgası tutarsa bağlı. Benim taze klonumda (üretilmiş dosya yok) D8 ölçülemedi → D8A−1 testi **2** verirdi ve D8A **yanlışlıkla DEKORATİF** sınıflanırdı. HAYALET/ASAN/ONCE/SARAN için aynısı `olculdu` (node + devletler.js) üzerinden. Bunlar sessiz değil (ölçülemezse çıkış 2, `ÖLÇÜLEMEYEN` basılır) ⇒ 🔴 sayıldı, ama **dinamik ölçümü veri eksik bir ağaçta yapan herkes bunları ⚪ bulur.** EMRELIC'teki koşunun D8'i ölçüp ölçmediği çıktıda kontrol edilmeli.
5. **MASKE_DISI:** iki yöntem anlaşıyor (dekoratif), ama ekran yalan söylüyor: −1 yazınca çıktı `✓ konum: 0 nokta … (beklenen -1)` basıyor — 0 > −1 olduğu hâlde ✓.

## 5. AŞILMIŞ olanlar (hükmü değiştirmeden)

| Sabit | Ölçüm | Tavan | Fark | Neden görünmüyor |
|---|---|---|---|---|
| ENKLAV_SORGU | 733 | 731 | +2 | `KAMPANYA_DONDURMA = True` (`:3140`); ✗ yerine 🧊 basılıyor |
| 2S_YIL_BORC | 165 | 151 | +14 | yol yok, "ihlal DEĞİL" |
| KIRILMA | 623 | 476 | +147 | "sadece bilgi" |
| YERLESIM | 4299 | 968 | +3331 | "sadece bilgi" |
| CELISKI_UST_SINIR | 485 (sayaç) | 387 | +98 | sabit hiç okunmuyor |

**Sınırda (bir sonraki +1 sessiz geçer):** 2S_YALNIZ_TARAF 2247 / 2247.
**Gevşek (aradaki gerileme görünmez):** ACIK_S 186 / 189.

## 6. Öneriler (YAZMADIM — §3.4(4), koordinatör yazar)

1. **2S_YIL_BORC:** ya bağla (`ihlal = True`) ve 14 yeni `YYYY-01-01`in sınıfı okunduktan sonra tavanı 165'e taşı, ya da adını sayaç koy ve "tavan" sözcüğünü kaldır. Bugünkü hâl tam koordinatörün "tavan koydum" tuzağı.
2. **2S_YALNIZ_TARAF:** aynı karar. Sınırda olduğu için bugün karar vermek ucuz.
3. **ENKLAV_SORGU:** dondurma kendi yorumundaki tehlikeyi (`D004`: dondurma → gevşetme) gerçekleştirmiş durumda — aşım +2 ve hükümde yok. En azından aşım SAYISI için ayrı tavan (ör. "dondurma sırasında aşım ≤ 2") düşünülmeli.
4. **ACIK_S:** 189 → 186.
5. **YERLESIM / KIRILMA:** değerler 2 aydır bayat; ya güncelle ya kaldır. Her koşuda basılan "beklenenden farklı — sadece bilgi" satırı, gerçek bir uyarıyı gömecek gürültü.
6. **CELISKI_UST_SINIR:** sabiti ve `:760-782` yorum bloğunu sil (ölü; okuyanı "tavan var" sanmaya itiyor).
7. **MASKE_DISI:** `if kd:` → `if len(kd) > BEKLENEN_MASKE_DISI:` (tek doğruluk kaynağı) ya da sabiti kaldır.
8. **BAYAT_KOPYA:** tavanı yazmak tek başına yetmez; `beyanli == 0` erken dönüşü tavanı da susturuyor.
9. **Görev listesine** MUKERRER ve OLU_ISTISNA eklensin; modül düzeyi taraması yerel sabitleri kaçırıyor.

## 7. Ham kayıt

Koşu başına: yama (eski → yeni), yamalı dosyanın sha256 öneki, süre, son `SONUÇ` satırı. Hepsi `586c0791` + C:\atlas'ın üretilmiş verisi üzerinde.

```
SAHIPSIZ=308 1 023a2a20d8e9      YERLESIM=967 2 c45fc0e44314      BELGESIZ=3 1 a5dda18d21ea
BOSLUK=-1 1 d8ca5f5f3e0d         CINSSIZ=-1 1 b4c984aa41e3        ACIK=-1 1 e683bd0237fa
KIRILMA=475 2 9a73fe1e70c9       ACIK_S=188 2 f5042f6ddc00        ACIK_S=185 1 4ba7f6adaf94
2S_YALNIZ_TARAF=2246 2 5e6bbaf57881   2S_YIL_BORC=150 2 d3b206f68a54
ACIK_ISG=0 1 4f075bc1c4b6        KIRILMASIZ=12 1 82afc7819cc0     HAYALET=-1 1 814447ca7897
ASAN=126 1 3d6819d74c23          ONCE=323 1 fa911ee5953e          SARAN=4 1 9ef49e5aa17a
HAYALET_YERLESIM=-1 1 56ba78df5c1f    DEVIR_BEYANI=0 1 220eea049c53
ENKLAV_SORGU=730 2 de619579bcf2  CELISKI_UST_SINIR=386 2 e5368ba296dc
MUKERRER=94 1 9213f858c141       OLU_ISTISNA=-1 1 e7fa0c840cd0    MASKE_DISI=-1 2 5989633f6b01
D8A=1507 1 d014a8e0c2fd          D8B=81 1 cd2f64ef1940            BAYAT_KOPYA=-1 2 aeece8ca050f
KAMPANYA_DONDURMA=False 1 c074213fed90
KAMPANYA_DONDURMA=False,ENKLAV_SORGU=733 2 657a764a5fde
baseline (yamasız) 2
```

Süreç notu: dinamik betiğin ilk sürümü CRLF satır sonunda yorumsuz sabitleri (ör. `BEKLENEN_YERLESIM = 968`) eşleyemedi ve **yama yapmadan `assert` ile durdu** (o koşular hiç yapılmadı, sessiz geçmedi); regex düzeltilip kalanlar yeniden koşuldu. Statik ve dinamik betikler scratchpad'de; depoya alınmadı.
