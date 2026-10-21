# 1281 ÖNCESİ = 1281 SONRASI AYNI PRENSİPLER (Emre 21 Ekim, madde 6-7) — sınıflandırma ve yama

Yazan: MO-MOTOR · hafif iş (ağır komut yok, push yok) · yama dalda: `mo-ayni-prensip` (commit edilmedi/itilmedi; test KOŞU 29 bitince).
Ölçümlerin kaynağı: `denetim/MO-MOTOR-RAPOR-1020.md`, `KOSU-29-ON-KONTROL.md`, motor kodu (`arac/uret_petek.py`).

## ① 1281 SONRASI haritayı çizen prensipler (motor kodundan)
| # | Prensip | Nerede |
|---|---|---|
| P1 | Her yerleşimin çevresindeki toprak onun peteği; sahibinin rengiyle boyanır; noktasız toprak en yakın peteğe emilir | Voronoi + `petek_epok` |
| P2 | **Sürtünmeli yürüyüş:** 5,04 km/sa · taban bütçe **40 sa (5 gün)** · DEM eğim çarpanı · nehir geçiş bedeli · boğaz yasağı · kara-kısıtlı Dijkstra · çöl kelepçesi KAPALI | `MOTOR_YURUYUS*` |
| P3 | **A gösterimi:** taban 5 gün; 7 ve 10 gün **bantlardan** (`MOTOR_UFUK_BANT=40,56,80`) — kullanıcı ufuk seçer | `ufuk_bantlari.js` |
| P4 | A1 yarıçap tavanı (k'ya göre km) + çöl tavanı (eşik 8 puan) | `TAVAN_*` |
| P5 | Ada kuralı (petek kendi kara parçasına) · **kıstak köprüsü** · **yaka kilidi** · sınır kısıtı (D/E/F hattı) · komşu-kur-böl | ilgili bayraklar |
| P6 | **Varlık epokları:** `kur:`/`bit:` ile sahne; sahnede olmayanın payı yürüyüşle (bütçe dahilinde) canlı komşuya; bütçe aşılırsa sahipsiz | `devir_kumesi`, `petek_epok` |
| P7 | **Kuşatılmışlık devri:** sahibi yazılmamış ama %90 sahiplilerle kuşatılı petek devredilir | `_kusatilmis` |
| P8 | **Yoğunluk (puan) kapısı:** ≥4 puan (200 km=4, 300=2, 400=1) olmayan toprak boyanmaz | `_puan_bolgesi` |
| P9 | Ekleyici kapı (sahipsiz peteğin dağıtımı, `bos:` cinsine göre) · kapama · B2 enklav / B3 koridor düzeltmesi · komşu toprak çıkarma · eklenti bölüştürme | `_dolgu_kumesi`, `gosterim_duzelt`… |
| P10 | Kademe: k1/k2 bölge; k3 merkez; k4 `m:` ile merkeze bağlı; **Emre 19 Ekim: tarih başı yalnız sahnedeki k≤3 merkez bölge alır** | `k12_merkez` |
| P11 | Değişmezler: 1 sahipsizlik yok · 2 sessiz toprak değişimi yok · 3 çelişmez · 8 şehir bölgesi ülke sınırını aşmaz | `denetle.py` |

## ② 1281 öncesi bugün FARKLI olanlar — her biri "veri seyrekliği mi, kaldırılabilir mi"
| Fark (bugün main'de) | Gerekçe | Hüküm |
|---|---|---|
| **F1** MÖ'de sabit **10 gün** tavan (`MOTOR_MO_YURUYUS_GUN=10`), taban `_BANT_HAM[80]` | Emre 18-19 Ekim "10 gün" demişti; ama P3'e göre 7/10 gün **gösterim ayarı**, üretim değil. 10'u tabana gömmek A gösterimini (5/7/10 seçimi) MÖ'de bozuyor: kullanıcı 5 seçse de 10 görür. **Veri seyrekliği değil, yanlış katman.** | ❌ **KALDIR** → yama: varsayılan = taban (5 gün); 7/10 bantlardan. Parametre kalır (deney için). |
| **F2** Bantlar MÖ'de **epok-duyarlı değil**: bant geometrisi `aktif` kümenin ham hücrelerinden kuruluyor (ölü/hayalet payı canlıya devredilmiyor) | CE'de ölü az olduğu için görünmüyordu; MÖ'de hayalet çok → 7/10 gün bantları tohumların küçük Voronoi parçası olarak çıkardı. **Hata, farkın gerekçesi yok.** | ❌ **DÜZELT** → yama: `petek_epok(g, bant=…)`; bant döngüsü 1281-öncesi dönemde bunu kullanır. |
| **F3** Yoğunluk (puan) kapısı MÖ'de atlanır (`MOTOR_MO_PUAN_KAPISI=0`) | Tek nokta ≈200 km disk bırakıyor; 10 günlük tavanı (≈400 km) gizlediği için atlanmıştı. F1 kalkınca (tavan 5 gün ≈ 202 km) kapı ≈ tavanla çakışıyor, gerekçe düşer. | ❌ **KALDIR** → yama: varsayılan açık (`MOTOR_MO_PUAN_KAPISI=0` atlar). |
| **F4** Sahne kuralı: kur:'suz nokta, en erken `s:` kaydından önce sahnede sayılmaz; kayıtsız+kur:'suz+bit:'siz nokta MÖ'de yok | CE'de "kur:'suz = ufuk başından beri" konvansiyonu var ve CE'de zararsız (nokta zaten kendi çağında sahipli). MÖ'de aynı konvansiyon 2.900 hayalet üretir. Gerekçe **veri konvansiyonu**, seyreklik değil; Emre'nin 19 Ekim ilkesi ("yalnız sahnedeki") genel. | ✅ **GEREKLİ ama CE'ye genişletilebilir**: CE'de etkisi sıfıra yakın (kur:'suz+kayıtsız yalnız 166 nokta, hepsi sahipsiz) → Emre onayıyla `MOTOR_MO_SINIR` yerine tüm tarihlere. Kod değişikliği gerekmez, yalnız sınır (örn. `9999-01-01`) — **CE çıktısı değişir mi ölçülmeli** (tam koşu). |
| **F5** k≥4 kuralı yalnız MÖ (`MOTOR_TARIH_BASI_MERKEZ=mo`) | Emre'nin ilkesi tüm tarihler. Fark yalnız "CE'de kutuda %6-8 yeni sahipsiz toprak" riskinden. Bu **veri seyrekliği değil, 5 günlük bütçenin sonucu**. | ⚠️ **KALDIRILABİLİR, ama kararı Emre'nin:** `=1` ile CE aynı prensibe geçer; delikler B dolgusu (madde ③) ile kapatılacaksa önce B. |
| **F6** `MOTOR_MO_SINIR=1281-01-01` | "MÖ kuralı" etiketi değil, **hangi tarihlerde sahne kuralı uygulanır** anahtarı. | ✅ Gerekli (F4 CE'ye açılırsa anlamı kalmaz). |
| **F7** MÖ epokunda eski yollar kapalı (küresel-en-yakın · bitişik komşuya bütün) | Bu iki yol **mesafe tavanı tanımıyor**; seyrek sahnede kıtayı tek noktaya verir. CE'de de aynı kusur var ama tetiklenmiyor (komşu çok). | ⚠️ **CE'ye de uygulanabilir ama CE çıktısı değişebilir** (sayaçlar `komşusuz`/`tek komşu` CE koşusunda okunmalı; KOŞU 29 logundan). Şimdilik fark kalsın. |
| **F8** Pencere/`searchsorted` düzeltmesi | Performans; sonuç aynı. | ✔ Fark değil. |

Yama (dalda): F1 + F2 + F3. **Etki:** MÖ haritası 5 gün taban + 7/10 gün bant ile **1281 sonrasıyla aynı mekanikte**. F4/F5/F7 Emre'nin kararına gerekçeyle sunuldu.
Test planı (KOŞU 29 bittikten sonra, hafif→ağır): (a) `--hizli` kutu: eski↔yama CE bit bit aynı; MÖ: tavan 5 gün, bant 56/80'in artış geometrisi >0 ve tohum hücresinden büyük; (b) `--dunya-olc` ile 5 MÖ epoku süre/RAM; (c) tam hat kutu `ufuk_bantlari.js` MÖ kayıtları dolu mu.

## ③ B (A + dolgu) — tenha çağlar için ayrı komut (üretim planı güncellemesi)
* B **A'nın üstüne ayrı dosya** (`data/dolgu.js`), A'ya dokunmaz; tam koşuda `MOTOR_B_DOLGU=1` ile ya da **koşudan sonra tek başına** `py arac/dolgu.py` (A çıktısı `donemler.js`+`devletler_harita.js`ten okur).
* **Plan:** KOŞU 29 inişinden sonra, A yayına alındıktan sonra, **ayrı komut:**
  `set MOTOR_DOLGU_CIKTI=%CD%\data\dolgu_tenha.js` · `set MOTOR_DOLGU_KESIT=<n>` (dar dilim sınaması) · `py arac/dolgu.py` — önce **tenha kesit listesiyle** (MÖ 3000 · MS 0/300/500/800/1000) sınanır, sonra tam.
* 🔴 **B MÖ'de bugün ÇALIŞMAZ — iki engel:** (1) `dolgu.py` tarih karşılaştırmaları dizgi (`f <= a < t`) ⇒ MÖ'de ters (gun.py sayacına geçmeli — b-gorunum'un dosyası); (2) B-GORUNUM-1020-OLCUM: 1281'de 261 gövdede çekişme adımı 40 dk'da bitmedi ve **10,7 GB**; MÖ'de gövde sayısı küçük olduğu için risk düşük ama ölçülmedi. Bu yüzden B'ye **`--tarih` listesi** (yalnız verilen kesitler) eklenmeli: `MOTOR_DOLGU_KESIT` bugün yalnız "ilk n kesit".
* B kapalı kalır: KOŞU 29'a dahil değil (`MOTOR_B_DOLGU` tanımsız).

## ④ Önizleme aracı (hazır, ÇALIŞTIRILMADI)
`py denetim/ARAC-MO-MOTOR-KUTU-1020.py kos --kutu=-180,-60,180,85 --ad onizle --varyant yeni --onizle=-2999-06-15,0001-01-01,0300-06-15,0500-06-15,0800-06-15,1000-06-15 --onb <dizin>`
Çıktı: `<SCR>\mo-kutu\onizle\olcum.json.onizleme\<etiket>_<gün>.png` + `.geojson` (devlet/kültür başına gövde, BOYALAR rengiyle) + `ozet.json`. Bu araç tek-epok: A pipeline'ının ilk ~100 dk'sı (ızgara/petek kurulumu) + tarih başına birkaç sn. **KOŞU 29 bitince** çalıştır (RAM 13 GB zirve; şimdi koşma). Birden fazla kesit tek koşuda; iki kez koşmaya gerek yok.
**Not:** tarih verirken MÖ N = −(N−1): MÖ 3000 = `-2999-06-15`; MS 0 yok, `0001-01-01` kullan.
