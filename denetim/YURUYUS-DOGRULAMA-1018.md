# YURUYUS-DOGRULAMA-1018 — 5 / 7 / 10 günlük yürüyüş ufku doğru hesaplanıyor mu? 10 günlük A, B ilkelerini kendiliğinden sağlar mı?

**SALT OKUMA / ÖLÇÜM.** Motor, `arac/*`, `js/*`, `data/*` değiştirilmedi; B uygulanmadı. Emre'nin 18 Ekim hipotezi
(*"A'yı 10 günlük sürtünmeli yürüyüşle koşturursak B ilkelerinin çoğu otomatik hallolur"*) ölçüye vuruldu —
`oturumlar/KARAR-EMRE-1018-ONCE1281-B-TIPI.md` §1 (B ilkeleri a–e).

## 0 · Nerede, neyle ölçüldü
| | |
|---|---|
| makine | **HAVVA** (`hostname`), 18 Ekim 2026 11:20 sonrası; tam motor koşusu çalışmıyordu (python süreçleri listelendi: yalnız `kodla.py coz-c`, `push_kapisi.py`, `not.py bekle`) |
| ağaç | worktree `goofy-proskuriakova-5a2289`, dal `claude/goofy-proskuriakova-5a2289`, taban `origin/main` **`1b453cac6`** (18 Eki 11:15) |
| yayındaki bant verisi | `data/ufuk_bantlari_ust.js` + `ufuk_bant_parcalar{,_2,_3}.js` = **KOŞU 27** (`d9121c478`); `kodla.py coz-c … bant` ile ham dosyaya açıldı (610.572.103 bayt, 88.269 halka, 6.949 kayıt × 3 bant) |
| motor kutu koşuları | 5 kutu (Anadolu 26,34,50,44 · Ova 24,44,44,56 · Sahra 10,14,36,34 · Orta Asya 55,36,85,50 · Arabistan 30,8,64,34), **tam koşu DEĞİL**: `denetim/ARAC-B-GORUNUM-UFUK-0072.py::_motor_kesiti` ile `ÇÖL TAVANI` öncesine kadar (~80 sn/kutu), KOŞU-YAYIN bayrakları: `MOTOR_YURUYUS=1 SAAT=40 UFUK_BANT=40,56,80 COL_UFUK_SAAT=0`, `MOTOR_YURUYUS_16` **yok** (üretimdeki gibi 8 komşu), önbellek dizini scratchpad |
| bağımsız hesap | `scipy.sparse.csgraph.dijkstra` (motorun heapq Dijkstra'sı DEĞİL), aynı girdilerle; shapely 2.1.2 · numpy 2.5.3 · scipy 1.18.1 · contourpy 1.4.0 · rasterio 1.5.2 (🟡 `KOSU-DEVIR-CEVRIMI.md §④`deki sürümlerden farklı: numpy 2.2.6 · contourpy 1.3.3 · rasterio 1.5.1 — kutu konturları bu yüzden "motorun üretimiyle bit bit aynı" diye sunulmuyor) |
| alet | `denetim/ARAC-YURUYUS-DOGRULAMA-1018/*.py` (taşınabilir; ara dosyalar `YDOG_DIZIN` ya da `%TEMP%\ydog1018`) |

## 1 · Hüküm (kısa)

| soru | sonuç |
|---|---|
| Bütçe: 5 / 7 / 10 gün = 40 / 56 / 80 saat = **201,6 / 282,2 / 403,2 km-eşdeğeri**; kodda tek yerde (`uret_petek.py:1918`, `NEHIR_KM_SAAT = 5.04`, gün = 8 saat) | ✅ doğru, bant saatleri (`40,56,80`) yayındaki `UFUK_BANT_IZI` ile aynı |
| Düz ovada 5 gün ≈ 200 km, 10 gün ≈ 400 km | ✅ **eksen yönlerinde** (0°/45°/90°… sektörlerde 400–402 km) · 🟡 **22,5° yönlerinde −%8** (369–373 km) çünkü üretim 8 komşulu; alan πB²'nin %86–90'ı |
| Motorun Dijkstra'sı doğru mu | ✅ bağımsız scipy Dijkstra ile 4 kutuda **0 hücre fark** (en büyük |Δ| 2,8·10⁻⁵ km), erişilebilir hücre kümesi aynı |
| Gerçek arazide "5 gün ≈ 200 km" | 🔴 **hayır** — tek yerleşimin 5 günlük erişimi eşdeğer yarıçapla Anadolu **103**, Orta Asya 145, Ova 159, Sahra 173 km (düz referans ~190). 10 gün: 223 / 297 / 313 / 347 km. Sürtünme (eğim) tasarım gereği yavaşlatıyor |
| Dağ / nehir / deniz | ✅ davranış tutarlı: eğim sürtünmesi 1,05–1,55 medyan, nehir kenar bedeli 20,2 ya da 80,6 km-eşd., boğaz yasağı 166–776 kenar, deniz geçilmez (yalnız kara hücreleri) — ayrıntı §2.4 |
| Bantlar iç içe mi (olmamalı)? | ⚠️ soru bayat: **5 Ekim'den beri bantlar tasarım gereği İÇ İÇE TAM BÖLGE** (`"<=5" ⊆ "<=7" ⊆ "<=10"`). Motor konturu: 0 ihlal. Yayındaki bantta ⊆ ilişkisi **tam tutmuyor**: 161 / 6.949 kayıtta A(7) < A(5) (§3.2) |
| 10 gün bandı 5 gün bandının üstkümesi mi | 🟡 kayıtların %97,7'sinde evet; **161 kayıt** (Bizans 74, İsviçre 25, Osmanlı 13 …) hayır; kayıp medyan %0,9, en çok %6,6 |
| Dosya mevcut mu / yayında yükleniyor mu | ✅ 4 dosya izlenen (47,2 + 47,2 + 12,0 + 12,4 MB, hepsi < 100 MB), canlı sitede HEAD 200 ve `Content-Length` birebir aynı; tarayıcıda 10 gün seçilince 3 bant × 6.949 kayıt, 88.269 halka yüklendi, katman görünür |
| **10 günlük A, B'nin a–e'sinden kaçını kendiliğinden sağlar?** | **Bugünkü üretim hattıyla çoğunu DEĞİL.** (b) Orta Asya/Arabistan'da ✅, (a)(c)(e) tenha bölgede kısmen, **(d) hiç** (§4.1). Saf yürüyüş (kapısız, tarihli) yayında kalan iç boşluğun %96–100'ünü Anadolu/Orta Asya/Sahra'da kapatırdı (§4.2) — ama **bu "İDEAL" tenhada yanıltıcıdır** (§6b): Sahra'daki ideal↔hat farkının (%77–81 ↔ %47–53) büyük kısmı **hattın hatası değil**; 10 günlük erişimdeki karanın %46'sı, o gün VAR olan ama devletsiz yerleşimlerin (vaha/aşiret) bölgesi ve hat orayı kasıtlı boyamıyor (Emre'nin B kuralı da "arada devletsiz şehir varsa doldurma" diyor). Puan kapısı küçük pay (Orta Asya 10 günde +3,5 puan, Sahra +0,6; §6). Kalan gerçek eksik: **varlık devri yalnız 40 saatlik bütçeyle** çalışıyor (§6b) |

## 2 · Yürüyüş hesabı doğru mu — kod ve bağımsız ölçüm

### 2.1 Kod okuması
- Bütçe: `_YR_BUTCE = YURUYUS_SAAT × NEHIR_KM_SAAT` (`uret_petek.py:1918`); `YURUYUS_SAAT = 40` (`:1227`); bant `_bs × NEHIR_KM_SAAT` (`:2246`/`:2250`). Gün = 8 saat (`"<=%g" % (_bs / 8.0)`, `:9092`).
- Alan **bir kez** çözülür (`_kv_dijkstra`, 8 yönlü `_KV_YON`, adım bedeli `hypot(dx·di, dy·dj) × sürtünme[hedef]` + nehir kenar bedeli); ufuk yalnız **kontur seviyesi**dir (yeni yürüyüş yok) — `B-GORUNUM-0072-UFUK.md §0` ile uyumlu.
- Sürtünme `1 + 0,005 × |∇z|`, `|∇z|` m/hücre (0,05° ≈ 5,5 km); 0,005 **44 gerçek sefer güzergâhına karşı kalibre** (`uret_petek.py:706-717`), Tobler eğrisi değil. Anadolu kara hücresi eğim medyanı 110 m/hücre ⇒ sürtünme medyanı **1,55**; Sahra 1,06; Orta Asya 1,10; Ova 1,06 (kutu loglarından).
- `MOTOR_YURUYUS_16` (16 komşu) **KOŞU-YAYIN zorunlu bayrak listesinde YOK** ⇒ üretim 8 komşu.

### 2.2 Düz ova sentetik sınavı (motorun GERÇEK `_kv_dijkstra` + `_kv_ara_kara` gövdesi AST ile dosyadan çekilip koşturuldu, sürtünme 1, nehir/boğaz yok, kopya yazılmadı) — `duz_ova.py`
Erişim = bütçe içindeki hücrelerin merkezden en uzak gerçek (haversine) mesafesi, 16 sektörde:

| enlem | gün (B km) | 8 komşu: min · maks · ort | alan/πB² | 16 komşu: min · maks · ort | alan/πB² |
|---|---|---|---|---|---|
| 0° | 5 (201,6) | 187,6 · 200,2 · 193,0 | 0,900 | 199,3 · 200,5 · 199,8 | 0,972 |
| 0° | 10 (403,2) | 377,8 · 400,9 · 389,2 | 0,900 | 400,3 · 401,0 · 400,5 | 0,972 |
| 30° | 5 | 186,7 · 200,2 · 194,0 | 0,900 | 197,8 · 200,8 · 199,7 | 0,971 |
| 30° | 10 | 373,2 · 402,0 · 390,6 | 0,901 | 399,9 · 402,0 · 400,9 | 0,972 |
| 45° | 5 | 184,4 · 200,4 · 195,6 | 0,890 | 197,1 · 200,9 · 199,8 | 0,966 |
| 45° | 7 (282,2) | 258,6 · 280,8 · 274,0 | 0,892 | 274,8 · 281,5 · 279,2 | 0,968 |
| 45° | 10 | 369,4 · 400,8 · 392,7 | 0,893 | 394,1 · 402,3 · 399,9 | 0,968 |
| 60° | 5 | 178,9 · 200,2 · 191,5 | 0,859 | 189,9 · 201,2 · 198,0 | 0,947 |
| 60° | 10 | 362,3 · 401,5 · 386,5 | 0,864 | 384,3 · 402,4 · 396,9 | 0,950 |

- Eksen yönü (K/G/D/B, 45° dilimleri) 400–402 km ⇒ **"düz ovada 10 gün ≈ 400 km" doğru**.
- 22,5° dilimlerinde 8 komşu 369–373 km verir = 403,2 / 1,0824 (oktil). 16 komşu bunu 394–402'ye çeker. 60° enlemde 8 komşu −%10'a iner.
- Alan oranı 5/7/10 günde aynı (0,89–0,90) ⇒ ölçek tutarlı.

### 2.3 Motorun gerçek-arazi Dijkstra'sı vs bağımsız (scipy) — `dijk_capraz.py`
Girdiler motorun kendi dökümünden: kara maskesi, sürtünme yüzeyi, nehir kenar bedelleri, boğaz yasağı, tohum hücreleri.

| kutu | kara hücresi | tohum hücresi | erişilebilir (motor / bağımsız) | \|Δbedel\| maks | 10⁻³ km'den büyük fark |
|---|---|---|---|---|---|
| Anadolu | 67.472 | 459 | 67.449 / 67.449 | 1,5·10⁻⁵ km | **0** |
| Ova | 88.813 | 162 | 88.781 / 88.781 | 1,5·10⁻⁵ | **0** |
| Orta Asya | 163.031 | 83 | 163.025 / 163.025 | 2,8·10⁻⁵ | **0** |
| Sahra | 183.211 | 184 | 183.190 / 183.190 | 1,5·10⁻⁵ | **0** |

⇒ Motorun çok-kaynaklı Dijkstra'sı (sahiplik + bedel) kendi girdisiyle bağımsız çözücüyle **özdeş**. (Bu, girdilerin — DEM, nehir sınıfı, boğaz — doğru olduğunu söylemez; yalnız algoritmanın doğru çalıştığını söyler.)

### 2.4 Dağ · nehir · deniz davranışı
**Tek tohum erişimi (komşu yok sayılır; 25 yerleşim; `tek_tohum.py`)** — eşdeğer yarıçap = √(alan/π):

| kutu | model | 5 gün | 7 gün | 10 gün | 10g/5g alan |
|---|---|---|---|---|---|
| Anadolu | düz (sürt.=1, nehir yok) | 187 km (109.455 km²) | 258 | 357 | — |
| Anadolu | **gerçek** | **103 km** (33.502 km²) | 147 | **223** (155.591) | **4,28** |
| Ova | düz | 189 | 264 | 361 | — |
| Ova | gerçek | 159 (79.415) | 224 | 313 (307.141) | 3,74 |
| Orta Asya | düz | 190 | 265 | 377 | — |
| Orta Asya | gerçek | 145 (66.453; p10 34.200) | 206 | 297 (278.010) | 4,19 |
| Sahra | düz | 191 | 268 | 383 | — |
| Sahra | gerçek | 173 (94.364) | 244 | 347 (377.926) | 4,01 |

- "Düz" sütunu kıyı/göl kesmesi ve oktil etkisi dahil (πB²'nin %79–90'ı); asıl fark **gerçek arazide**: 5 günlük erişim düz referansın Anadolu'da **%55'i**, Orta Asya'da %76'sı.
- **Kapsam kuralı doğru yazılmış:** bütçe birimi "km-eşdeğeri" (km × sürtünme). "Düz ovada 200 km" cümlesi doğru, **"5 gün = 200 km" genel bir cümle DEĞİL** — dağlık bölgede 5 günlük erişim 100–150 km'dir. Emre'nin B ilkelerindeki "**400 km**" kuş uçuşu/ham mesafe; 10 günlük sürtünmeli yürüyüş Anadolu'da ortalama 223 km'dir. İkisi aynı ölçü değildir.
- **Nehir** (`nehir_ist.py`, KOŞU özne = idare): kenar bedeli **20,2** (sınıf-1, 4 sa) ya da **80,6** km-eşd. (sınıf-2, 16 sa); 5 günlük bütçenin en çok **%40**'ı. `GORUNUM-ABCD-0916.md` *"büyük nehir bütçenin tamamını yiyebilir"* diyordu — kod bunu **%40 ile sınırlıyor** (belge ≠ kod; hangisinin doğru olduğu Emre'nin kararıdır). Kenar sayıları: Anadolu 8.882 · Ova 9.986 · Orta Asya 6.534 · Sahra 4.204 · Arabistan 8.800. Yalnız nehir kapatılırsa motor/varyant bedel oranı medyan 1,000, %90'ı 1,00–1,22 (en yüksek Ova) — nehir etkisi nehir kenarında yoğun, genelde yerel.
- **Boğaz yasağı** (sudan geçen adım): 166–776 kenar/kutu; Dijkstra'da `(h·YS+yi) in _KVSU` ile atlanıyor.
- **Deniz**: grafikte yalnız `kara` hücreleri var ⇒ deniz geçilmez; tohumsuz/erişilemez kara (ada vb.): Anadolu 568 · Ova 691 · Orta Asya 128 · Sahra 566 km² — "eski kurala kalır" olarak beyanlı (`uret_petek.py:2141`).

### 2.5 Kontur ↔ hücre alanı, kutu bantları iç içe mi (motor çıktısı)
`alan_olc.py` (iç bölge = kutu kenarından 2,5–6° içeride): bütçe-dışı küme **5 ⊇ 7 ⊇ 10 gün**: 0 hücre ihlal (4 kutu × 2 geçiş). Kontur poligonu / hücre alanı oranı: Orta Asya 1,013 · 1,019 · 1,019, Sahra 1,007 · 1,009 · 1,041 (Anadolu 0,944 ve Ova 0,924 — fark tohumsuz kara, kontur "karar bölgesi" dışını çizmiyor). Kontur ⊆ kontur: alan(80∖56)=0, alan(56∖40) ≤ 5·10⁻¹⁷°².
İç bölgede bütçe-dışı (sahipsiz) kara payı — **tüm zamanların bütün yerleşimleri tohum**:

| kutu (iç) | 5 gün | 7 gün | 10 gün |
|---|---|---|---|
| Anadolu (2,5° iç) | 146 km² (0,02 %) | 123 | 123 |
| Ova (2,5°) | 952 km² (0,12 %) | 0 | 0 |
| Orta Asya (6°) | 104.869 km² (**%32,8**) | 25.482 (%8,0) | **0** |
| Sahra (6°) | 272.090 km² (%21,5) | 33.465 (%2,6) | **0** |

## 3 · Yayındaki bant verisi (KOŞU 27) — `pub_olc.py`, `anomali.py`

### 3.1 Yapı
- 3 bant (`"<=5"`, `"<=7"`, `"<=10"`; saat 40/56/80; gün 5/7/10), her biri **6.949 devlet-dönem kaydı, 935 devlet**; üç bantta `(d, f, t)` anahtarları **aynı sırayla özdeş**. Boş `g` yok.
- `UFUK_BANT_IZI = {"bant":[40,56,80],"col_ufuk_saat":0,"taban_saat":40}` — **çöl kelepçesi kapalı** (10 Ekim kararı).
- Dönem aralığı 1000-01-01 … 2001-01-03; aktif kayıt: 1300 → 264, 1520 → 273, 1683 → 257, 1800 → 265.

### 3.2 "10 ⊇ 7 ⊇ 5" — alan ve geometri (tüm kayıtlar / 300'lük örnek)
| ölçüt | sonuç |
|---|---|
| A(5) > A(7) (>%0,2) | **161** kayıt (%2,3); toplam kayıp 108.563 km²; devletler: Bizans 74 · İsviçre 25 · Osmanlı 13 · Venedik 7 · Aydın 6 · Mehmed Çelebi 6 · Eretna 6 …; kayıp medyan %0,9 · p90 %2,9 · maks %6,6 (en büyük mutlak: Osmanlı 1456 — 1.658 km² / %0,2, parça sayısı 28→30) |
| A(7) > A(10) | 1 kayıt (`sibir-hanligi` 1430: 539.785 → 538.274 km²) |
| A(7)=A(5) (±%0,2) | 1.583 kayıt (%22,8); A(10)=A(7): 3.484 (%50,1); A(10)=A(5): **1.581 (%22,8)** |
| A(7)/A(5), A>1000 km² için | p10 1,00 · **medyan 1,056** · p90 1,226 · maks 2,41 |
| A(10)/A(5) | p10 1,00 · **medyan 1,060** · p90 1,315 · maks 5,91 |
| küçük devlet (1000–30000 km²; 770 kayıt) | A(7)/A(5) ve A(10)/A(5) medyan **1,000** |
| g5 ⊄ g7 (örnek 300, fark > %0,2) | 8 / 300; g7 ⊄ g10: 0 / 300; en büyük göreli taşma %3,5 |

**Neden:** `uret_petek.py:9126-9130` `≤5`i `PETEK_D`den (kıyı kesimi · ada kuralı · kara-kısıtlı devir · çöl tavanı geçmiş) alıyor, `≤7/≤10`u ham `_BANT_HAM[b]`den — kodun kendi yorumu bunu "AÇIKÇA BİLİNEN SINIR" diye yazıyor (`:9063-9068`). Yani iki bant **farklı boru hattından** çıkıyor ve üstküme ilişkisi yapısal olarak garanti değil. Etki küçük (toplam alanın %0,01'i) ama sıfır değil.

### 3.3 🟡 Yabancı devletlerde 7/10 bandı puan kapısıyla da kesiliyor — etkisi §6'da ölçüldü (sınırlı)
`:9149-9168`: yabancı devlet bandı `_puan_bolgesi(...)` ile **kesişiyor**; kapı `YURUYUS_PUAN_HALKA = ((40,4),(60,2),(80,1))` saat (4/2/1 puan), `PUAN_ESIK = 4`, sektör başına en yakın yerleşim (`:6953`, `:6638-6700`). Sonuç: bir hücre ancak **5 günlük erişimde (4 puan)** ya da birden çok yönden (2+2, 1+1+1+1) puan toplarsa boyanıyor; **tek yerleşimin 5–10 günlük erişimi boyanmıyor.** Osmanlı kapıdan geçmiyor (`:9166`). `denetim/UFUK-KELEPCE-0930`, `app.js:1428-1431` tooltip'i bunu *"tek yerleşimin beslediği … hiçbir ufukta boyanmaz"* diye beyan ediyor — yani **bilinen ve yazılı davranış**; yeni olan, bunun B hipotezi için ne anlama geldiği (§4).
Beklenen belirti: A(10)/A(5) medyan 1,06 · 3.484 kaydın 7→10'da hiç büyümemesi · §4.2'deki yayın-vs-ideal farkı. **Ama kapıyı kapatıp aynı kutuda koşunca (§6) kapı bu belirtinin yalnız küçük bir kısmını açıklıyor** (Orta Asya 10 günde +3,5 puan, Sahra +0,6): kapı tek başına "neden 10 gün 5 güne benziyor" sorusunun cevabı **değil**. Yoğun bölgede 7→10 büyümemesi büyük ölçüde komşuya dayanmaktan (taban 5 günde zaten dolu), tenha bölgede ise §6'daki açıklanamayan farktan geliyor.

### 3.4 Devletler arası binme (aynı gün, aynı bant) — taban A'da da var
| tarih | bant | binen çift | Σ binme km² | Σ alan km² | oran |
|---|---|---|---|---|---|
| 1300-06-15 | ≤5 / ≤7 / ≤10 | 1 / 1 / 1 | 17.230 / 17.901 / 18.061 | 43,8 / 49,3 / 51,3 M | %0,039 / 0,036 / 0,035 |
| 1520-06-15 | ≤5 / ≤7 / ≤10 | 8 / 8 / 8 | 197.119 / 207.633 / 223.920 | 45,9 / 51,5 / 53,5 M | %0,43 / 0,40 / 0,42 |
| 1683-06-15 | ≤5 / ≤7 / ≤10 | 22 / 22 / 22 | 638.576 / 665.183 / 666.379 | 60,5 / 69,2 / 72,3 M | %1,06 / 0,96 / 0,92 |
| 1800-06-15 | ≤5 / ≤7 / ≤10 | 18 / 18 / 18 | 497.575 / 510.567 / 512.876 | 72,6 / 83,0 / 86,8 M | %0,69 / 0,62 / 0,59 |

- Binme oranı bant büyüdükçe **artmıyor** (çift sayısı aynı) ⇒ bantlar yeni binme üretmiyor, taban gövdedeki binme taşınıyor. En büyük çiftler: fransa × haudenosaunee 78–88 bin km², kaonde-ila × lozi 84 bin, gonja × bono-manso 73 bin, gucerat-sultanligi × racput 44 bin, oyo × borgu 36 bin, gambiya-mandinka × sine-salum 45 bin (1520). Bu bir bant kusuru değil, **yabancı gövde örtüşmesi**; bu rapora konu dışı, yalnız kayıt.
- Dünya toplamı 5→7→10: 1520'de 45,9 → 51,5 (+%12,4) → 53,5 M km² (+%16,7); 1683'te +%14,4 / +%19,4.

### 3.5 Dosya ve yayın
- `git ls-files`: `ufuk_bant_parcalar.js` 47.187.511 · `_2.js` 47.186.111 · `_3.js` 11.999.043 · `ufuk_bantlari_ust.js` 12.401.196 bayt; ham `ufuk_bantlari.js` izlenmiyor (`.gitignore:207`), 610 MB (belgelerdeki 254/264 MB bayat).
- Canlı: `https://emrelic.github.io/osmanli-tarih-atlasi/data/<dosya>` dördü **200** ve `Content-Length` yerel bayt sayısıyla **birebir**.
- Tarayıcı (yerleşik, canlı site, 18 Ekim): sayfa `?v=r16131560`; 7/10 düğmeleri başta `disabled`, seçiciye yaklaşınca (`pointerenter`) HEAD 200 ⇒ açıldı; "10" seçilince tembel yükleme: 3 bant × 6.949 kayıt, **88.269 halka** (yerel çözümle aynı), çözme 7,45 sn, `ufuk-bant-alan` **visible**, 1281-01-01'de 257 kayıt çiziliyor. Konsolda ufukla ilgili hata yok.
- 🟡 `app.js:1428` düğme açıklaması **bayat**: *"Çölde yürüyüş ufku 7 günde sabittir (Emre kararı), orada 5/7/10 fark etmez"* — KOŞU 27'de kelepçe kapalı (`col_ufuk_saat:0`, KOSU-YAYIN: *"ÇÖL KELEPÇESİ KALDIRILDI"*). Aynı metin *"7 ve 10 gün ek bantları gösterir"* diyor, oysa 5 Ekim'den beri 7/10 **tam bölge** ve tabanın yerine geçiyor (`app.js:1285-1300`).

## 4 · 10 günlük A ile B ilkeleri (a–e)

Ölçü, iki farklı "10 günlük A" için verilir:
- **YAYIN** = bugünkü üretim bandı (≤10, puan kapılı) — §4.1.
- **İDEAL** = o tarihte sahibi olan bütün yerleşimlerden, kapısız, tarihli çok kaynaklı sürtünmeli yürüyüş (motorun aynı DEM/nehir/boğaz girdisiyle, scipy) — §4.2.

### 4.1 YAYIN: ≤5 → ≤7 → ≤10 (bölge kutuları `pub_bolge.py`; kara = ne_10m_land − ne_10m_lakes; boşluk = kara ∖ (o gün aktif bütün devletlerin bandı); bileşen > 25 km²)
Sınıflar: **a** = yalnız tek devletle çevrili ve deniz teması yok · **c/e** = tek devlet + deniz teması · **d** = ≥2 devlet arasında · **kenar** = kutu kenarına değen (büyük çöl, ölçüm dışı) · "çap" = en büyük iç daire çapı.

| bölge · tarih | ilke | ≤5 | ≤7 | ≤10 | 10 günün etkisi |
|---|---|---|---|---|---|
| Anadolu 1300 | (a) kapalı boşluk | 3 · 3.513 km² | 3 · 3.513 | 3 · 3.513 | ❌ değişmedi |
| | (d) devletler arası | 7 · 31.442 | 8 · 31.525 | 8 · 31.525 | ❌ (ahiler/çobanoğulları/ilhanlı 12.814 km² çap 96 km, artuklu/ilhanlı 7.898, bizans/germiyan/karesi 5.806 …) |
| | (c/e) devlet–deniz | 4 · 1.014 | 3 · 862 | 3 · 862 | 🟡 −%15 |
| | (c) girinti (closing 50 km, boş kara) | 33.943 | 33.628 | 33.628 | ❌ −%1 |
| | (b) 403 km altı kara köprüsü adayı çift | 1 | 1 | 1 | ❌ |
| Anadolu 1520 | (a) | 3 · 4.686 | 3 · 4.686 | 3 · 4.686 | ❌ |
| | (d) | 1 · 5.439 (OSMANLI×safevi, çap 67) | 1 · 5.439 | 1 · 5.439 | ❌ |
| | (c/e) | 2 · 2.269 | 1 · 2.117 | 1 · 2.117 | 🟡 |
| | (c) girinti / (b) çift | 14.745 / 2 | 14.430 / 2 | 14.430 / 2 | ❌ |
| Anadolu 1683 | (a) | 3 · 8.957 | 3 · 8.957 | 3 · 8.957 | ❌ |
| | (c/e) | 1 · 152 | 0 | 0 | ✅ (küçük) |
| | (c) / (b) | 13.042 / 2 | 12.728 / 2 | 12.728 / 2 | ❌ |
| Arabistan 1520 | (a) | 14 · 15.447 | 1 · 3.168 | 1 · 3.168 | ✅ −%79 |
| | (c/e) | 7 · 14.548 | 4 · 10.154 | 4 · 10.154 | 🟡 −%30 |
| | (d) | 2 · 19.559 | 2 · 938 | 3 · 1.093 | ✅ −%94 |
| | (c) girinti / (b) | 51.540 / 1 | 24.525 / 0 | 22.851 / 0 | ✅ −%56 / ✅ |
| Arabistan 1683 | (a) | 12 · 12.210 | 0 | 0 | ✅ |
| | (d) | 4 · 22.797 | 3 · 4.106 | 2 · 3.270 | ✅ −%86 |
| | (c) / (b) | 48.339 / 3 | 31.771 / 2 | 18.513 / 0 | ✅ −%62 / ✅ |
| Orta Asya 1520 | (a) | 7 · 8.047 | 8 · 10.178 | 4 · 4.623 | 🟡 −%43 |
| | (d) | 1 · 154 | 6 · 45.417 | 3 · 127.603 | 🔴 **büyüdü** (kenar bileşenleri iç hâle geçti; çap ≤ 237 km) |
| | (c) girinti / (b) | 123.381 / 9 | 51.589 / 1 | 46.192 / 0 | ✅ −%63 / ✅ |
| Orta Asya 1683 | (a) / (d) | 7 · 8.047 / 2 · 2.984 | 7 · 10.042 / 6 · 45.540 | 4 · 4.643 / 2 · 126.533 | 🟡 / 🔴 |
| | (c) / (b) | 123.385 / 8 | 54.123 / 1 | 51.450 / 0 | ✅ −%58 / ✅ |
| Sahra kenarı 1520 | (a) | 2 · 3.198 | 0 | 0 | ✅ |
| | (c/e) | 5 · 13.386 | 4 · 5.897 | 4 · 5.897 | 🟡 −%56 |
| | (d) | 2 · 9.986 | 4 · 112.852 | 4 · 112.852 | 🔴 büyüdü (çap ≤ 248 km) |
| | (c) / (b) | 50.027 / 4 | 33.798 / 3 | 34.966 / 3 | 🟡 −%30 / 🟡 |
| Sahra kenarı 1683 | (a) | 3 · 6.138 | 1 · 69.738 | 1 · 69.738 | 🔴 tek bir 69.738 km²'lik Osmanlı çevreli boşluk (çap 248 km) |
| | (c/e) | 6 · 22.384 | 5 · 14.896 | 5 · 14.896 | 🟡 |
| | (d) | 1 · 986 | 2 · 34.113 | 2 · 34.113 | 🔴 |
| | (c) / (b) | 67.049 / 3 | 35.529 / 3 | 36.267 / 3 | 🟡 / ❌ |

**Okuma:**
- **(b) eksklav köprüsü:** Orta Asya ve Arabistan'da 9/8/3 → 0 ✅; Anadolu 1→1, 2→2, 2→2 ve Sahra 4→3, 3→3 ❌. (Kalan çiftleri tek tek **adlandırmadım** — yalnız sayıldı.)
- **(a) kapalı boşluk:** tenha bölgede kapanıyor (Arabistan −%79/−%100, Sahra 2→0), **yoğun Anadolu'da hiç değişmiyor** (kalıntı 3 bileşen 4,7–9,0 bin km² — göller çıkarıldı).
- **(c) girinti** (≈ proxy: closing 50 km): tenha bölgede −%30…−%63, Anadolu'da −%1…−%2.
- **(d) iki devlet arası boşluk: 10 gün BUNU ÇÖZMÜYOR.** Anadolu'da sayı da alan da sabit; Orta Asya/Sahra'da "iki devlet arası" alanı 5→10'da **büyüyor** (kenar bileşenleri küçülünce iç hâle geçiyor) ve kalan bileşenler 67–248 km çaplı. 9 bölge-tarih × 3 bant = 27 ölçümde **kenara değmeyen hiçbir boşluğun çapı 400 km'yi aşmıyor** (`cap>400`: 0 bileşen; en büyük 248 km) ⇒ B'nin 400 km kuralı bunların hepsini kapatırdı.
- **(e) devlet–deniz:** −%0…−%55; kalıntılar var.

### 4.2 İDEAL (kapısız) vs YAYIN — aynı iç kutu, aynı tarih (`ideal_tarih.py`)
İç kutu = döküm kutusunun içinde, kenar etkisi için payı bırakılmış: Anadolu (29,36,46,42) · Arabistan (36,12,60,30) · Sahra (14,18,32,30) · Orta Asya (59,40,81,47). "Sahipli" = karanın yüzdesi; "kenara değmeyen boşluk" = kutu kenarına değmeyen bileşenlerin toplam alanı.

| bölge · tarih | gün | İDEAL sahipli | YAYIN sahipli | İDEAL boşluk (kenara değmeyen) · maks çap | YAYIN boşluk (kenara değmeyen) · maks çap |
|---|---|---|---|---|---|
| Anadolu 1300 | 5 | %99,9 | %96,4 | 285 km² (8) · 11 km | 30.354 km² (9) · 97 km |
| | 10 | %100,0 | %96,5 | **123 km²** (5) · 11 | **30.202 km²** (8) · 97 |
| Anadolu 1520 | 5 / 10 | %99,9 / %100,0 | %98,2 / %98,2 | 285 / 123 | 14.764 / 14.612 (maks çap 68 km) |
| Anadolu 1683 | 5 / 10 | %99,9 / %100,0 | %98,5 / %98,5 | 285 / 123 | 11.479 / 11.326 |
| Orta Asya 1520 | 5 | %68,5 | %65,2 | 118.262 (7) · 254 km | 3.975 (6) · 42 |
| | 7 | %89,4 | %84,9 | 30.346 · 108 | 30.216 · 97 |
| | 10 | **%98,9** | **%90,3** | **363 km²** (3) · 16 | **10.355** (4) · 55 |
| Orta Asya 1683 | 10 | %98,9 | %89,3 | 363 · 16 | 10.360 · 55 |
| Arabistan 1520 | 5 / 7 / 10 | %52,9 / 67,9 / **86,2** | %52,6 / 61,4 / **64,1** | 45.369 / 10.027 / 11.279 | 41.395 / 11.586 / 11.741 |
| Arabistan 1683 | 10 | %86,2 | %64,2 | 11.279 | 10.749 |
| Sahra 1520 | 5 / 7 / 10 | %48,0 / 62,9 / **76,6** | %41,4 / 47,0 / **47,4** | 29 / 0 / 0 | 985 / 1.018 / 1.018 |
| Sahra 1683 | 5 / 7 / 10 | %50,7 / 66,6 / **81,2** | %46,1 / 52,5 / **53,0** | 29 / 0 / 0 | 985 / 1.018 / 1.018 |

**Okuma:**
- **5 günde** YAYIN ≈ İDEAL (Arabistan %52,6 vs %52,9; Orta Asya %65,2 vs %68,5; Sahra %41–46 vs %48–51; Anadolu −1,4…−3,5 puan). 5 günlük A hesabı sağlam.
- **7/10 günde yollar ayrılıyor:** Sahra'da 7→10 yayında **+%0,4**, ideal +%13–15; Arabistan 10 günde %64 vs %86; Orta Asya %90 vs %99; Anadolu'da yayın 30 bin km² iç boşluk bırakırken (1300) ideal 123 km².
- Yani **"A'yı 10 günlük yürüyüşle koşturmak" bugünkü hatta (kapılı) B ilkelerinin çoğunu kendiliğinden sağlamaz; ama yürüyüşün KENDİSİ sağlayabilir** — Anadolu/Orta Asya/Sahra'da yayında kalan iç boşluğun %96–100'ünü (Anadolu 11,3–30,2 bin → 123 km², Orta Asya 10,4 bin → 363, Sahra 1,0 bin → 0) kapatıyor; Arabistan'da iç boşluk ikisinde de ~11 bin km² (fark yok). Engel **hesap değil**; hattın içinde: kısmen puan kapısı (§6), asıl büyük kısmı (Sahra'da ~28 puan) **kaynağı ölçülmemiş** (adaylar: çöl/A1 tavanı, varlık-devri `petek_epok` kuralları, ≤7/≤10 ayrı boru hattı — aşama aşama kapsam dökümü gerekir, §9).
- Hem İDEAL hem YAYIN'da ucu açık çöl (Sahra, Arap yarımadası, Orta Asya step) 10 günde de **%14–47 sahipsiz** kalıyor: 403 km (düzde) ötesi hiçbir yerleşimin menzili değil; B'nin 400 km kuralı da bunları doldurmaz.

## 5 · A ve B ilkeleri — tek tablo

| ilke (B) | 10 günlük A (YAYIN, bugünkü) | 10 günlük A (İDEAL, kapısız) |
|---|---|---|
| (a) ülke toprakları arası boşluk | 🟡 tenha bölgede kısmen (−%43…−%100), Anadolu'da ❌ | ✅ yayında kalan iç boşluğun %96–100'ü kapanır (Arabistan hariç) |
| (b) eksklav ≤ 400 km köprü | ✅ Orta Asya/Arabistan, ❌ Anadolu/Sahra | ölçülmedi (ideal tarihli yürüyüş devlet etiketi taşımıyor) |
| (c) derin koridor (derinlik ≤ ağız) | 🟡 −%30…−%63 tenhada, Anadolu'da ❌ (proxy) | ölçülmedi |
| (d) iki devlet arası ≤ 400 km | ❌ (Anadolu'da sabit; tenhada büyüyor; hepsi ≤ 400 km çaplı) | ✅ aynı kapanma (devletlerarası paylaşım için sınır kuralı ayrıca gerekir) |
| (e) devlet–deniz ≤ 400 km | 🟡 −%0…−%55 | ✅ |

⚠️ "İDEAL" sütunu devlet etiketine bakmadan **kara kapsamını** ölçer (boşluk var mı yok mu). Kapanan boşluğun *hangi devlete* yazılacağı (d, b) ayrı bir karardır; (d)'de sınırın bittiği noktadan itibaren paylaşım B'nin işi olarak kalır.

## 6 · Puan kapısı A/B — motor kutu modunda, BANT ÇIKTISINA KADAR (`bant_derin.py`)
`_motor_kesiti(kutu, "bant-sonrasi")` ile motorun bant dosyasını yazan aşamaya kadar koşturuldu (gövde FAZ 1: 1.043 devlet; 13–25 dk/koşu), `MOTOR_PUAN_KAPALI` 0 ↔ 1; bayraklar KOŞU-YAYIN'daki gibi (`MOTOR_YURUYUS=1 SAAT=40 UFUK_BANT=40,56,80 COL_UFUK_SAAT=0`, 8 komşu). Ölçü: bant geometrisi (1520-06-15'te aktif kayıtlar) ∩ iç kutu ∩ kara, sahipli kara yüzdesi.

| bölge · iç kutu · 1520-06-15 | gün | **kapı açık** (üretim) | **kapı kapalı** | İDEAL (§4.2) | YAYIN (dünya koşusu) |
|---|---|---|---|---|---|
| Orta Asya (59,40,81,47) · döküm kutusu 55,36,85,50 | 5 | %68,08 | %68,08 | %68,5 | %65,2 |
| | 7 | %88,51 | %88,70 | %89,4 | %84,9 |
| | 10 | **%94,16** | **%97,65** | %98,9 | %90,3 |
| Sahra (14,18,32,30) · döküm kutusu 10,14,36,34 | 5 | %41,55 | %41,55 | %48,0 | %41,4 |
| | 7 | %47,15 | %47,71 | %62,9 | %47,0 |
| | 10 | **%47,54** | **%48,16** | **%76,6** | %47,4 |

- **Kapının etkisi:** Orta Asya'da yalnız 10 günde **+3,5 puan** (+45.100 km²), 5 ve 7 günde ≈ 0; Sahra'da 7/10 günde **+0,6 puan** (≈ +10.000 km²). Hatta Sahra 7→10 kapı kapalıyken de yalnız **+0,5 puan** büyüyor.
- **Kutu koşusu dünya koşusunu Sahra'da yeniden üretiyor** (%41,6 / 47,2 / 47,5 ↔ yayın %41,4 / 47,0 / 47,4) — kutu ölçümünün güvenilirliğini gösterir. Orta Asya'da kutu yayından %3–4 puan yüksek (kutu dışındaki komşular yok; Orta Asya için ölçüm kutu etkisi içerir).
- **Sonuç:** "10 günde neden 5 güne benziyor" sorusunun cevabı Sahra'da **kapı değil**; cevap §6b'de (devletsiz yerleşim bölgeleri + 40 saatlik varlık devri).
- Yan not: kutu koşusu `data/bolgeler.js` ve `veri-kaynak/motor_kara.geojson`u (izlenen) ve `data/devletler_harita.js`i (ham) **üzerine yazar**; bir sonraki koşu bozuk `devletler_harita.js`i okuyup `TypeError` verir (`_eski_yabanci_taban`, `:6349`) — iki kez yaşandı, silinip tracked dosyalar `git checkout` ile geri alındı. Aletin başlığına yazıldı.

## 6b · Aşama dökümü — kısmi koşu (Emre onayı: "kısmi koşu yapmana onay veriyorum", 18 Ekim) — `asama1_sahiplik.py`
Soru: motorun zamandan bağımsız Dijkstra'sı her kara hücresini (tüm zamanların) en yakın yerleşime yazıyor; o yerleşimin **o tarihte** durumu ne? Bütçe içi hücrelerin sahibi: **GERÇEK devlette** · `__BOSLUK__` · **VAR ama devletsiz** · **henüz kurulmamış/ölü** (bunların toprağını `_yr_epok_onar` yeniden dağıtır, `uret_petek.py:2339-2345`: *"Bütçe (40 saat) aşılırsa hücre sahipsiz kalır"*).

| bölge · 1520-06-15 (iç kutu) | gün | bütçe içi | sahibi gerçek devlette | VAR ama devletsiz | kurulmamış/ölü (devir ≤40 sa) | yayın (dünya koşusu) |
|---|---|---|---|---|---|---|
| Sahra | 5 | %83,1 | %40,6 | **%37,1** | %5,4 | %41,4 |
| | 7 | %98,1 | %46,8 | **%44,9** | %6,4 | %47,0 |
| | 10 | %100,0 | **%47,2** | **%46,2** | %6,5 | **%47,4** |
| Arabistan | 5 / 7 / 10 | %76,7 / 92,6 / 99,8 | %44,3 / 50,6 / **53,2** | %26,1 / 34,1 / **38,0** | %6,3 / 7,8 / 8,7 | %52,6 / 61,4 / 64,1 |
| Orta Asya | 5 / 7 / 10 | %68,6 / 89,4 / 98,9 | %65,6 / 85,7 / **95,1** | %0,3 | %2,4 / 3,0 / 3,0 | %65,2 / 84,9 / 90,3 |
| Anadolu 1300 | 5 / 10 | %99,9 / 100 | %92,7 | %0,0 | **%7,3** | %96,4 / 96,5 |
| Anadolu 1520 | 5 / 10 | %99,9 / 100 | %96,5 | %0,0 | %3,5 | %98,2 / 98,2 |
| Anadolu 1683 | 5 / 10 | %99,9 / 100 | %96,8 / 96,9 | %0,0 | %3,0 | %98,5 / 98,5 |
Sahra 1683: gerçek %43,9 / 51,1 / **51,6**, devletsiz %37,0 / 44,8 / 46,1, ölü %2,2 (yayın %46,1 / 52,5 / 53,0).

**Okuma:**
- **Sahra'daki "28 puan" hat hatası değil, veri durumu:** 10 günde karanın **%46'sı** o gün VAR olan ama devletsiz yerleşimlerin (vaha, aşiret bölgesi) hücresi; hat orayı boyamıyor. Bu, Emre'nin B kuralıyla (*"arada devletsiz şehir / aşiret … yoksa doldur"*) **aynı yöndedir** — yani B bu bölgeleri de doldurmamalı. Önceki "İDEAL" (§4.2) devletsiz yerleşimleri tohum saymadığı için tenhada (Sahra, Arabistan) yürüyüşün kapsamını **olduğundan fazla** gösteriyordu; bu satırlar artık "tavan değil üst sınır" diye okunmalı.
- **Hattın yayını ≈ bu dökümün tavanı:** Sahra 10 gün: gerçek %47,2 (+ devir tavanı %6,5 = %53,7) ↔ yayın %47,4; 1683: %51,6 (+2,2) ↔ %53,0. Yani hat Sahra'da kendi verisinin izin verdiğini boyuyor. **Dijkstra sahipliği → bant** zinciri tutarlı.
- **Gerçek bir eksik:** kurulmamış/ölü yerleşimlerin toprağı (Anadolu 1300'de karanın **%7,3**'ü, Arabistan %6–9, Sahra %5–6) `_yr_epok_onar` ile **yalnız 40 saatlik** bütçeyle dağıtılıyor; 7/10 günlük bantta bu toprak ayrıca geri yürünmüyor. Bu yüzden Anadolu'da ideal %100 ↔ yayın %96,5–98,5 ve 7→10 günde büyüme sıfır. **10 günlük A'nın "devir"i bütçeyle ölçeklenmiyor; bu B ilkelerine (a)(d)(e) yardım edecek asıl kod noktası.** (Nicel etkiyi ayrıca ölçmedim: Anadolu 1300'de ölü/kurulmamış yerleşim bölgesi karanın %7,3'ü ≈ 63.000 km²; yayın boşluğu 30.202 km² — ikisi arasındaki ilişki doğrulanmadı.)
- Bu döküm yalnız **aşama 1** (Dijkstra sahipliği → tarih durumu) ve gate A/B'dir; `PETEK_D` aşama sonrası (ada kuralı, çöl tavanı) ve bant ham kesimi ayrı ayrı dökülmedi.

## 7 · Bulgular (kusur / belge farkı) — numaralı

| # | bulgu | ağırlık |
|---|---|---|
| 1 | Üretim 8 komşu; 22,5° yönlerde −%8 (60° enlemde −%10); `MOTOR_YURUYUS_16` zorunlu bayrak listesinde yok. 16 komşu ova doğruluğunu %97'ye çıkarır (maliyet bu raporda ölçülmedi) | 🟡 |
| 2 | "5 gün ≈ 200 km" yalnız düz ovada doğru; Anadolu'da 103 km, 10 gün 223 km. Emre'nin B'deki **400 km** ölçüsü ile "10 günlük sürtünmeli yürüyüş" Anadolu'da aynı şey değil | 🔴 B için |
| 3 | 7→10 günde bant genişlemesi çok küçük (medyan A10/A5 = 1,06). Nedenleri ölçüldü (§6, §6b): (i) tenhada karanın %37–46'sı devletsiz yerleşim bölgesi — kasıtlı boş; (ii) varlık devri 40 saatle sınırlı (Anadolu 1300'de karanın %7,3'ü); (iii) puan kapısı küçük pay (Orta Asya +3,5 puan, Sahra +0,6) | 🔴 B için: (ii) |
| 4 | `≤5` ve `≤7/≤10` farklı boru hatları: 161 kayıtta A7 < A5 (maks %6,6); 1 kayıtta A10 < A7 | 🟡 |
| 5 | Taban A'da devletler arası binme (%0,04–1,06) bantlarla taşınıyor | 🟡 (bant dışı) |
| 6 | `app.js:1428` düğme açıklaması bayat (çöl kelepçesi 7 gün + "ek bant") | 🟡 |
| 7 | `GORUNUM-ABCD-0916.md` "büyük nehir bütçenin tamamını yer" ↔ kod %40 | 🟡 belge/karar |
| 8 | Belgelerdeki ham dosya boyutu (254/264 MB) bayat: bugün 610 MB | ⚪ |
| 9 | Ölçüm sürümleri üretimden farklı (contourpy 1.4.0 / numpy 2.5.3) | ⚪ |

## 8 · Ölçülemedi / bulamadım
- **Adlandırılmış boşluk dökümü:** (b) kalan çiftler, (a) Anadolu'daki 3 bileşenin ne olduğu (isim) çıkarılmadı; sadece sayı/alan/çap.
- **(c) tam tanım** ("derinlik ≤ ağız genişliği") ölçülmedi — yerine `closing 50 km` yaklaşığı kullanıldı; yalnız yön/büyüklük için.
- **Puan kapısı A/B yalnız 2 kutu × 1 tarih** (Orta Asya ve Sahra, 1520-06-15); Anadolu/Arabistan'da kapı A/B'si koşulmadı (Arabistan kapı koşusu bellek yetmeyince düştü). İDEAL ölçümü `__BOSLUK__` yerleşimlerini (1520'de 36) gerçek tohum sayıyor — etkisi küçük beklenir, ayrıca çıkarılmadı.
- **Sahra'daki farkın** büyük kısmı §6b'de açıklandı (devletsiz yerleşim bölgeleri); `PETEK_D` sonrası aşamalar (ada kuralı, çöl tavanı) ayrı dökülmedi.
- **Gerçek B ilkesi (d/e) uygulaması** (sınırın bittiği noktadan 400 km doldurma) denenmedi (görev bunu yasaklıyor).
- **MOTOR_YURUYUS_16'nın tam koşu maliyeti**, 2 yönlü Dijkstra süresi ölçülmedi.
- Yürüyüşün **doğruluk referansı** (gerçek askerî yürüyüş menzili) ölçülmedi: algoritmanın girdileriyle tutarlılığı doğrulandı, **girdilerin gerçeğe uyumu** (sürtünme çarpanı 0,005, nehir sınıfları) bu raporun kapsamı dışında.
- Büyük çöl/dağ uç durumları (Himalaya/Tibet/Karakum) kutuya alınmadı; Orta Asya kutusu Tanrı Dağları'nın bir kısmını içerir.
- Canlı sitede görsel doğrulama (piksel) yapılmadı; yalnız veri/katman durumu okundu.

## 9 · İstediklerim (önerimle)
1. **Karar (Emre):** Varlık devri (`_yr_epok_onar`, kurulmamış/ölü yerleşimin toprağı) bugün yalnız 40 saatle çalışıyor. 7/10 günlük bantta da bütçeyle ölçeklensin mi? Bu, 10 günlük A'nın B ilkelerini daha çok sağlamasının tek net kod yolu (Anadolu 1300'de karanın %7,3'ü). Motor tuzuna dokunur ⇒ ancak HAVVA'daki bir sonraki TAM İNŞA'da, onayınla. Önerim: evet, ama önce kutuda sayısal kanıt (bu raporda tam bir sayı yok).
   **Bilgi (karar değil):** tenhada boş kalan toprak büyük ölçüde devletsiz yerleşim bölgesi; B'nin "devletsiz şehir varsa doldurma" kuralıyla uyumlu ⇒ 10 günlük A bu boşluğu doldurmaz, doldurmamalı.
2. **Karar:** 16 komşu bayrağı (`MOTOR_YURUYUS_16=1`) zorunlu bayraklara girsin mi? Önerim: bir kutuda süre maliyetini ölç, sonra karar.
3. **İş (küçük, ayrı oturum):** `app.js:1428` açıklamasını güncelle; `≤7/≤10`u `PETEK_D` hattından geçir ya da `≥ ≤5` olacak şekilde birleştir (161 kayıt). Hiçbirini bu raporda yapmadım.
4. **Belge:** `GORUNUM-ABCD-0916.md`/`MESAFE-VE-SURTUNME.md`ye "nehir bedeli en çok bütçenin %40'ı" ve "5 gün düzde 200 km, dağlıkta 100–150 km" notu — Emre onaylarsa.

## 11 · Literatür tetkiki — nehir / dağ / rampa bütçe tüketimi (Emre: "ezbere %40 demeyelim, tetkik ve teyid edelim")
Yöntem: alt ajan web ve açık erişimli makale metinleriyle taradı; her sayı [okundu] (metin açıldı) / [özet] (arama özeti) / [hesap] (formülden hesaplandı) / [dolaylı] diye işaretli. Okuyamadıkları (Engels kitabı, Murphey, Kolb, İnalcık, Erler, Minetti 2002 tam metni) **bulunamadı/erişilemedi** diye yazıldı. Ajanın ham raporu bu belgenin altında özetlenmiştir; kaynak dosyası depoya yazılmadı. Çıkarımlar ajanın ve benim; kaynakta açık karşılığı olmayanlar belirtildi.

| motor sabiti | literatür | uyum |
|---|---|---|
| düz zeminde 5,04 km/sa | Tobler 6·e^(−3,5·\|S+0,05\|) ⇒ düzde ≈5 km/sa; Naismith 5 km/sa [okundu: Wood ve ark. 2023, arXiv:2303.16065]; yüklü deve ≈5 km/sa [özet: UNESCO] | ✅ yol üstü hız |
| yol dışı | Tobler ×0,6; Aitken 4 km/sa [okundu: Wood 2023] | 🟡 motor tek hız veriyor, yol dışı indirimi yok |
| 8 sa/gün, 5 gün ≈ 200 km | büyük ordu ≈ 19–30 km/gün (Engels 15 mil/gün ≈ 24 km; Murphey 12–15 mil/gün) [özet/dolaylı]; kervan 30–40 km/gün [özet]; Roma kuryesi ≈ 74 km/gün [özet] | ✅ **"rutin idare"** tanımına (40 km/gün) uyar; ❌ büyük orduya yüksek — motor bunu zaten özne olarak seçmiyor |
| eğim çarpanı 1 + 0,005·\|dz\| (5,5 km hücre) | %2: Tobler 1,07 · Naismith 1,17 · Minetti-Herzog 1,26 · **motor 1,55**; %5: 1,19/1,42/1,74/**2,38**; %10: 1,42/1,83/2,70/**3,75**; %20: 2,01/2,67/4,92/**6,50** [hesap] | 🟡 motor aynı eğimde literatürden **2–3 kat dik**; ama ETOPO ortalamalı 5,5 km hücrede eğim gerçek yerel eğimden küçüktür (Herzog 2014 §5.1.1; Lock & Pouncett 2010; Van Leusen 2002 [okundu, Herzog üzerinden]) — **telafi çıkarımı kaynakta açık karşılığı olmayan yorumdur**; sayısal ölçek-düzeltme oranı **bulunamadı**. 0,005 literatürden doğrulanamıyor, yalnız 44 sefer güzergâhı kalibrasyonuna dayanıyor |
| \|dz\| simetrik (iniş = çıkış) | Tobler tepe hızı ≈ −%5 inişte; Minetti en düşük maliyet ≈ −%10 [okundu/özet] | 🟡 hafif inişte sapma |
| dz'de doğrusal | Tobler/Minetti dik eğimde konveks (daha hızlı artar) [hesap] | 🟡 yalnız ≈550 m/hücre üstünde belirgin |
| nehir büyük:küçük = 80,6:20,2 = 4:1 | Van Leusen 2002: 22 : 5,5 = 4:1; Herzog: büyük 10–20, küçük 5–10 çarpanı [okundu: Herzog 2014 §5.5] | ✅ **oran** uyumlu |
| nehir **mutlak** 4 sa / 16 sa (bütçenin en çok %40'ı) | pre-modern büyük nehir geçişi için saat/gün sayısı **bulunamadı**; yalnız 1864 James Nehri'nde ≈100 bin kişi 4–5 günde [özet, pre-modern değil] | ❓ **doğrulanamadı**: mutlak değerin literatür dayanağı yok; "%40" bir kalibrasyon tercihidir, ölçülmüş bir doğa sabiti değil |
| köprü/geçit indirimi | Langmuir 2004 geçit seçimi [okundu: Herzog üzerinden] | ✅ nitel |
| irtifa terimi yok | VO2max ≈ −%5,6…7 / 1000 m (Wehrlin 2006; meta-analiz) [özet] ⇒ 3000 m'de ≈ −%15–20 aerobik kapasite [hesap] | 🟡 3000 m+ plato için eksik (Tibet/Pamir/Habeş); kaynaklı hız sayısı yok |
| kış/kar kapanışı yok | ORBIS kışın dağ hareketini kısıtlar [okundu] | 🟡 eksik; sayı yok |

**Hüküm (Emre'nin sorusuna):**
1. **"Nehir bütçenin en çok %40'ı" literatürle doğrulanamıyor** — ne doğrulayan ne çürüten bir saat/gün kaynağı bulundu. Doğrulanan yalnız büyük/küçük **oranı** (4:1). Mutlak bedel bir kalibrasyon değişkeni olarak kalmalı ve belgelerde "ölçülmüş" değil "varsayılan, oranı literatürlü" diye yazılmalı.
2. **Eğim çarpanı 0,005 fizyolojik veriden 2–3 kat sert**; bunu hücre ölçeği telafisi olarak savunmak mümkün ama ispatlanmadı. Sınama önerisi: DEM'i 5,5 km ortalamasından önce (30") ve sonra (0,05°) yerel eğimlerle karşılaştırıp küçülme oranını **ölçmek**; sonra 0,005'in neye tekabül ettiğini Tobler'le yeniden türetmek. 44 sefer kalibrasyonunun çıktı eğrisi düzdü (0,005–0,02 ayırt edilemiyor, `uret_petek.py:706-717`) — bu yüzden sayı "iyi ayarlı" değil "sıfırdan büyük ve 0,05'ten küçük".
3. **Dağ geçidi:** 5,5 km ortalama dar geçidi yumuşatır (çıkarım, Lock & Pouncett'e dayanır); Gülek, Belen, Derbent gibi bilinen geçitlerin motorda seçilip seçilmediği **ölçülmedi** — tetkik borcu.
4. Düz zemin hızı (5,04), 8 saatlik gün ve "rutin idare" 40 km/gün **literatürle uyumlu**.

Kaynaklar: Wood, Mackaness, Simpson, Armstrong 2023, arXiv:2303.16065 · Herzog I. 2014, *Least-cost paths – some methodological issues*, Internet Archaeology 36, doi:10.11141/ia.36.5 · Minetti ve ark. 2002, J Appl Physiol 93:1039–1046 (yalnız özet) · Irmischer & Clarke 2018, CaGIS 45(2):177–186, doi:10.1080/15230406.2017.1292150 (yalnız künye) · Tang, Pilesjö, Persson 2013, Geodesy and Cartography 39(2) (özet) · Scheidel 2015, ORBIS, Princeton/Stanford Working Papers in Classics · Engels 1978, *Alexander the Great and the Logistics of the Macedonian Army* (yalnız ikincil aktarım) · Murphey 1999, *Ottoman Warfare 1500–1700* (yalnız forum aktarımı — **kullanılabilir kaynak değil**, TDV/akademik doğrulama bekler) · Wehrlin ve ark. 2006, Eur J Appl Physiol; meta-analiz doi:10.1186/s40779-017-0113-x (özet) · UNESCO Silk Road kervan sayfası (özet). 🔴 İnalcık, Erler, Finkel, TDV'den Osmanlı günlük menzili **bulunamadı** — CLAUDE.md kaynak kuralı gereği Osmanlı menzil iddiaları bu tetkikte kanıt sayılmadı.

## 10 · Yeniden üretme
```
py arac/kodla.py coz-c data %TEMP%\ydog1018\ufuk_bantlari.js bant        # ~95 sn, 610 MB
set YDOG_DIZIN=%TEMP%\ydog1018
py -X utf8 denetim/ARAC-YURUYUS-DOGRULAMA-1018/duz_ova.py                  # §2.2
py -X utf8 denetim/ARAC-YURUYUS-DOGRULAMA-1018/kutu_dok.py anadolu 26,34,50,44   # ~80 sn, dok_<ad>.pkl
py -X utf8 denetim/ARAC-YURUYUS-DOGRULAMA-1018/dijk_capraz.py anadolu      # §2.3
py -X utf8 denetim/ARAC-YURUYUS-DOGRULAMA-1018/tek_tohum.py anadolu 3 25   # §2.4
py -X utf8 denetim/ARAC-YURUYUS-DOGRULAMA-1018/alan_olc.py anadolu 2.5     # §2.5
py -X utf8 denetim/ARAC-YURUYUS-DOGRULAMA-1018/pub_olc.py                  # §3 (bölüm 1-3; bölge kısmı pub_bolge.py)
py -X utf8 denetim/ARAC-YURUYUS-DOGRULAMA-1018/pub_bolge.py "Anadolu"      # §4.1
py -X utf8 denetim/ARAC-YURUYUS-DOGRULAMA-1018/ideal_tarih.py anadolu 29,36,46,42 1300,1520,1683   # §4.2
```
⚠️ `kutu_dok.py`/`bant_derin.py` motoru **kutu modunda** koşturur; `bant_derin.py` (en derin kesim) izlenen `veri-kaynak/motor_kara.geojson` ve `data/bolgeler.js`i **ÜZERİNE YAZAR** — yalnız atılabilir bir worktree'de koştur, sonra `git checkout -- <iki dosya>`.
