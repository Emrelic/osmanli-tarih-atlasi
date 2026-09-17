# MOTOR-YURUYUS — kara sınırını yürüyüş süresi çizsin · teslim · 17 Eylül 2026

**Oturum:** MOTOR-YURUYUS (Opus, eski UYGULA-2 / aa8aa5dc) · koordinatör 1.MURAT ·
şartname `oturumlar/MOTOR-YURUYUS-0917.md`
**Dal:** `motor-yuruyus` · worktree `C:/atlas-yuruyus` · commit `04a9e65`
(yalnız `arac/uret_petek.py`; ana klasördeki motora ve koşu 12'ye dokunulmadı, tam koşu açılmadı)

---

## 0. Özet

| | |
|---|---|
| Bayrak | `MOTOR_YURUYUS=1` (varsayılan **kapalı**) · bütçe `MOTOR_YURUYUS_SAAT` (vars. 40) · ayrı bayrak `MOTOR_YURUYUS_16=1` |
| Bayrak kapalı | kutu sınavında `PETEK_D` özgün motorla **bit bit aynı** — 3.855 peteğin **0**'ı farklı |
| Bayrak açık (kutu) | 422 petek değişti · ~156 bin km² el değiştirdi · sahipsiz kara 4.858 → 13.161 km² · Osmanlı doğrudan (ham) 1683 **−%0,99**, 1800 **−%0,97** · örtü bozuk kenar 0 · boşalan petek 0 · tohum yeri korunan 0 |
| Öngörü (dünya, koşusuz) | karada sahibi değişen **%5,67** (7,58 mn km²) · yeni sahipsiz **%12,99** (17,37 mn km²) · Osmanlı doğrudan (ham) 1520 −%2,34 · 1683 −%3,15 · 1800 −%3,04 |
| 16 komşu | düz arazide medyan sapma %6,0 → %1,9 (bozkır), %5,1 → %1,3 (Anadolu) · Dijkstra ~3 kat yavaş · kutuda yeni sahipsizin **%61'i** 8 komşunun ölçüm hatasıymış |

---

## 1. Ne değişti, nerede

Tek dosya: `arac/uret_petek.py` (dal `motor-yuruyus`). Farkı okumak için
`git diff --diff-algorithm=histogram` önerilir: 771 ekleme / 515 silme, bunun
513 satırı **taşınan** blok.

1. **Izgara bloğu Voronoi'nin ÖNÜNE taşındı.** Taşınan blok: kara maskesi ızgarası,
   tohumlar, eğim, nehir kenarı, Dijkstra ve iki A/B.
   - Kodun metni değişmedi, yalnız yeri değişti.
   - Bağımlılık AST ile tarandı: blok yalnız Voronoi'den önce atanan adları okuyor.
   - Bayrak kapalıyken yalnız log'daki aşama sırası değişir.
2. **Bayrak başlığı ve sabitler** taşınan bloğun başında.
   - `YURUYUS_SACAK=2` hücre · `YURUYUS_KARO=5°` · `YURUYUS_SADE=0,05°`.
   - Doğuran vaka ve kapsam yorumda yazılı.
3. **Bütçe bölgesi** (`YÜRÜYÜŞ: … bütçe bölgesi`), Dijkstra'dan sonra kuruluyor.
   - **Maliyet alanı:** erişilen karada Dijkstra bedeli. Kıyı saçağında en yakın erişilen hücreninki alınıyor. Izgaranın karar vermediği yerde bütçe sorulmuyor.
   - **40 saatten uzak bölge:** `contourpy` eşyükseltisiyle, 5°'lik parçalar hâlinde çıkarılıyor. Doğrusal ara değer kullanıldığı için sınır basamaklı çizilmiyor.
   - **Karar bölgesi:** erişilen kara + 2 hücrelik kıyı saçağı; tohumsuz karanın saçağı hariç. Raster parçalar hâlinde tutuluyor.
4. **Petekler ızgaradan** (Voronoi kurulduktan hemen sonra).
   - Hücre sahibi = Dijkstra sahibi. Karar dışındaki hücrede (deniz, tohumsuz kara) Voronoi sahibi kalıyor; hücre merkezine `rasterize` ile soruluyor.
   - 🔴 **Düğümleme şart (ölçüldü):** rasterio parçaları ortak kenarda aynı köşeleri taşımıyor (T-kavşağı). GEOS bu örtüyü geçersiz sayıyor ve `coverage_simplify` basamağı sessizce bırakıyor.
     - İlk sınavda 434 petekte 434 bozuk kenar çıktı.
     - Çare: bütün halkalar tek ağda `polygonize` ediliyor. Yüz sayısı parça sayısına eşit (469 = 469); örtü bozuk kenarı 0.
   - Sonra `coverage_simplify(0,05°)` uygulanıyor ve örtü boru hattı (yaslama, Chaikin, sadeleştirme) değişmeden koşuyor.
5. **Kıyı kesimi:** `kara_kesik ∩ TAVAN_DAIRE[i]` yerine `_yr_kes(kara_kesik, i)`:
   - 40 saatten uzak olan çıkarılıyor.
   - Izgaranın karar vermediği payda eski A1 tavanı uygulanıyor.
   - Tohumun kendi yeri kesilirse geri konuyor ve adıyla sayılıyor.
6. **Ada kuralı:** boşta kalan pay da aynı kuralla veriliyor.
7. **`MOTOR_YURUYUS_16`** (ayrı bayrak): at hamleleri ekleniyor.
   - Adımın geçtiği iki ara hücre de kara olmalı; yoksa bir hücrelik boğazı atlardı.
   - Kenar anahtarı `h*_KV_YS+yön` oldu; nehir adayı komşuluğu 2 hücreye çıkıyor.
   - Bayrak kapalıyken anahtarlar ve sıra eskisiyle aynı (8).

**Dokunulmayan:** ada kuralı · ana parça dokunulmazlığı · bileşen kilidi ·
kara-kısıtlı devir · çöl tavanı · **puan kapısı** (`PUAN_TAVAN_KM` düz 200 km
halkası — MOTOR-0916 ③'ün "basamaklı daire" kaynaklarından biri, bu işte kapsam
dışı) · varlık epokları (`petek_epok`).

---

## 2. Sınav

### 2.1 Alet
`denetim/ARAC-MOTOR-YURUYUS-SINAV-0917.py` motoru küçük bir kutuda koşturuyor. Motor metni aynen alınıyor, yalnız dört yeri değişiyor:
1. `BOLGE` kutuya daraltılıyor.
2. Çift koşu kilidi atlanıyor.
3. `.uretim-basladi` damgası yazılmıyor.
4. Metin çöl tavanı satırında kesiliyor.

Petekler WKB sha'sıyla kaydediliyor; `data/` ve `veri-kaynak/` yazılmıyor.
Kutu: **26–50°D · 34–44°K** (Anadolu, Kafkasya, Batı İran; dağ ve nehir yoğun).

### 2.2 Sonuç
```
ana_kapali  (ana motor 772ec0ceb3d9)        ↔ yr_kapali (dal e4f558042a67, bayrak 0)
   bit bit farklı petek 0 · boyalı 1.621.279 = 1.621.279 · Osmanlı üç kesitte +%0,00   ✓
yr_kapali ↔ yr_acik (bayrak 1)
   farklı petek 422 · el değiştiren ~155.759 km²
   sahipsiz kara 4.858 → 13.161 km²
   Osmanlı doğrudan (ham) 1520 +%0,09 · 1683 −%0,99 · 1800 −%0,97
   örtü bozuk kenar 0 ✓ · kara-kısıtlı devir 2 parça · boşalan petek 0 ✓
   korunum ②a ve ② +0 ✓ · tohum yeri korunan 0 · nokta kendi peteğinin dışında 0
     (bayraksızda 3: Erzin, Cumai, Saylıca)
yr_acik ↔ yr_acik16 (bayrak 1 + 16 komşu)
   farklı petek 380 · el değiştiren ~40.165 km² · sahipsiz kara 13.161 → 5.090 km²
   Osmanlı 1683 +%0,26 · nokta kendi peteğinin dışında 1 (Çarşamba — bayraksızdaki sınıf)
```
En çok değişenler (bayrak açık):
- Kaybedenler: Kayseri −8.485 km² · Reşt −7.232 · Hasankeyf −5.279 · Kabala −4.956
- Kazananlar: Sultâniye +7.132 · Bayburt +5.943 · Rakka +4.854 · Aksaray +4.146

Süre (kutu): yürüyüş aşamaları toplam ~6 sn; kutu koşusu bayraklı 91 sn, bayraksız 91–132 sn.

⚠️ **Sınavın sınırları:**
- Kutu kenarında pencere dışı tohumlar yarışmıyor. Bu iki taraf için de aynı; mutlak sayı dünyaya taşınmaz.
- Çöl tavanı ve sonrası (epoklar, gövde, puan kapısı, B1–B3) koşmadı. Değişikliğin haritaya inen son hâli ancak tam koşuda (koşu 14) görülür.
- "Bit bit aynı" sonucu `PETEK_D` içindir. Motorun geri kalanı `PETEK_D`den türediği ve ızgara bloğunun taşınması başka bir adı değiştirmediği için sonraki aşamalar da aynı girdiyi görür. Bu bir **çıkarımdır**; tam koşuyla ölçülmedi.

---

## 3. Öngörü (koşudan önce, koşusuz — `denetim/ONGORU-MOTOR-YURUYUS-0917.json`)

Alet: `denetim/ARAC-MOTOR-YURUYUS-ONGORU-0917.py` + `-KAROLAR-0917.py`.
- Dünya 18 karo; her karo ızgarası 3° pay ile kuruldu.
- Tam dünya ızgarası koşu 12'yi sayfa dosyasına iterdi, bu yüzden karolar kullanıldı.
- Motor kodu metin dilimiyle aynen koşturuldu (ana motor `772ec0ceb3d9`).

**İki tarafın tanımı:**
- **A (bugün):** derece-düz en yakın tohum (= Voronoi), A1 tavanının içindeyse.
- **B (yarın):** 40 saatlik sürtünmeli ve nehirli Dijkstra; ızgaranın erişmediği karada A.
- İkisi de **ham sahipliktir**: ada kuralı, devir, çöl tavanı, puan kapısı ve epoklar yok.

```
kara (karolar)                 133.651.409 km²
sahibi değişen                   7.575.798 km²   %5,67
yeni sahipsiz                   17.367.286 km²   %12,99
yeni sahipli                     2.060.184 km²
sahipsiz toplam  A 25,91 mn → B 41,21 mn km²
Osmanlı doğrudan (ham)  1520  2.579.804 → 2.519.560  −%2,34
                        1683  4.295.336 → 4.159.997  −%3,15
                        1800  3.079.958 → 2.986.328  −%3,04
ızgarada hücresi olmayan tohum (aynı hücreyi paylaşan)  8
```
En büyük 10 yeni sahipsiz küme:

| Küme | Alan | Bugünkü sahipler |
|---|---|---|
| And, Bolivya | 371 bin km² | La Paz · Sucre · Quilmes |
| Kolombiya And'ı | 338 bin km² | Bogotá · Popayán |
| Hindukuş | 324 bin km² | Kâbil · Gazne · Külâb |
| Güney Çin iç yaylaları | 300 bin km² | Guilin · Xi'an · Şaoguan |
| Kuzey Rockies | 271 bin km² | |
| Peru And'ı | 251 bin km² | Cusco |
| Batı Tibet | 223 bin km² | Leh · Katmandu |
| Sayan | 219 bin km² | Mörön · Uliastay |
| Patagonya | 214 bin km² | |
| Sierra Madre | 184 bin km² | |

En çok kaybedenler:
- Çamdo −104 bin km² (MOTOR-0916 ③'ün vakası)
- Mérida −98 bin km²
- Leh −95 bin km²
- Lhasa −71 bin km²
- Quilmes, Dali, Dunhuang, Kunming, Katmandu, Yakutsk … (tam liste JSON'da)

**Öngörünün mazeret olabilecek kalemleri (önceden yazılı):**
1. **8 komşu ölçüm hatası.** Izgara düz arazide %5–6 uzun ölçüyor; kutu sınavında yeni sahipsizin %61'i bu hatanın ürünüydü. Dünya sayısı (%12,99) büyük olasılıkla **şişik**. 16 komşuyla tekrar ölçülmedi.
2. **A ham sahipliktir.** Çöl tavanı ve puan kapısı bugünkü haritada zaten sahipsiz bırakıyor; yeni sahipsizin bir kısmı haritada **zaten boş**. Haritaya inen fark bundan küçük olmalı.
3. **Osmanlı oranı kutuyla uyumlu.** Anadolu deneme kutusunda −%0,5 / −%1,0 / −%0,8 ölçüldü, kutu sınavında −%0,99 çıktı. Dünya Osmanlı'sının −%3'ü Kızıldeniz · Hicaz · Yemen · Kuzey Afrika çölleri gibi seyrek kenarlardan geliyor olabilir. **Karo bazında ayrılmadı.**
4. **Noktasızlık (CLAUDE.md §2).** Güney Çin iç yaylaları gibi tarih boyunca yoğun yerleşik alanların sahipsiz çıkması, orada nokta eksikliği ihtimalini gösteriyor. Kusur motorda değil, **veride** olabilir. Bu kümeler NOKTA oturumları için bir aday listesidir.

---

## 4. Açık bırakılanlar ve kararlar

- **"Zaman" sorusu (§2), tahta M-4326'da soruldu, cevap bekleniyor.**
  - Geometri bütün yerleşimler için **tek kez** kuruluyor. Epoklarda ölü peteğin payı `petek_epok` içinde yerel mini-Voronoi ile dağıtılıyor.
  - v1'de bu **değişmedi** (seçenek c): epok devri hâlâ Voronoi kuralıyla.
  - Tam doğru çözüm (b), ölü tohumun hücrelerini canlı komşu sınırından tohumlanan kısıtlı bir Dijkstra ile yeniden dağıtmak. Sonucu epok başına tam Dijkstra (a, ~250 × ~100 sn ≈ 7 saat) ile birebir aynı olur, maliyeti saniyelerdir. Ayrı kalem olarak önerildi.
- **Puan kapısı** hâlâ düz 200 km halkası. Seyrek bölgede yürüyüşle erişilen ama halkanın dışındaki toprak yine kesilir. Bir sonraki kalem olmalı (MOTOR-0916 ③).
- **Çöl tavanı** (300 km) bütçeyle birlikte koşar. Sahra'da iki kesimden küçüğü bağlar; etkileşimi ölçülmedi.
- **`BOZUK_KIYI_TABAN`:** kutu sınavında taban gevşek uyarısı çıktı (14/58). Bu kutunun ürünü; dünya tabanını söylemez.
- **16 komşu:** kalite kazancı açık (sapma ÷3), bedeli Dijkstra ×3. Tam ızgarada üretim Dijkstra'sı ~1,5 dk → ~4,5 dk; iki A/B ile birlikte ~13 dk ediyor. Önerim: koşu 14'te `MOTOR_YURUYUS=1` ile birlikte aç. Karar sizin.
- **Birleştirme:** dal ana dala göre 513 satırlık bir **taşıma** içeriyor. Bu arada ana klasörde `uret_petek.py` değişirse, özellikle ızgara bloğunda, çakışma çıkar; `--diff-algorithm=histogram` ile okunmalı.

---

## 5. Dosyalar

- `denetim/ARAC-MOTOR-YURUYUS-ONGORU-0917.py` · `…KAROLAR-0917.py` · `…ONGORU-0917.json` (karo ham verisi) · `…ONGORU-0917.k*.log`
- `denetim/ONGORU-MOTOR-YURUYUS-0917.json` (toplanmış öngörü)
- `denetim/ARAC-MOTOR-YURUYUS-SINAV-0917.py` · `…SINAV-0917.json`
- `denetim/ARAC-MOTOR-YURUYUS-16YON-0917.py` · `…16YON-0917.json`
- dal `motor-yuruyus` · commit `04a9e65` (`arac/uret_petek.py`)
