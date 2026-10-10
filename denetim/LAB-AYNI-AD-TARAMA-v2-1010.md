# LAB — Aynı-ad yanlış-cins taraması v2 (ABLASYONLU) — 1010

## §0 ÖNGÖRÜ (ölçümden ÖNCE)
Zaman damgası: 2026-10-10 05:25:34 +03:00 — hiçbir ölçüm/okuma yapılmadan yazıldı. Bu bölüm bir daha DÜZENLENMEZ.

v1 referans (verilen): YANLIŞ 358 = KESİN 4 / ADAY 338 / ÖLÇÜLEMEDİ 16; DOĞRU 2252; BELİRSİZ 1690.

| kol | öngörülen YANLIŞ | KESİN | ADAY | not |
|---|---|---|---|---|
| ⓐ yalnız (4 tanım değişikliği) | 290 | 2 (+ KUSUR-KESİN ~12, TAŞIMA-HAZIR ~2) | 275 | ≤1 km doğru-cins kaydı ve ölçek eşiği ADAY'ı azaltır; aile kuralı KESİN'i düşürür |
| ⓑ yalnız (≤2 km) | 345 | 4 | 325 | pencere büyüyünce doğru-cins eşleşmeler de artar; net hafif düşüş |
| ⓒ yalnız (ad İÇERİR + kelime listesi) | 430 | 6 | 405 | daha çok eşleşme ⇒ YANLIŞ artar |
| ⓓ yalnız (normalleştirme) | 380 | 4 | 358 | daha çok kayıt bulunur; hem DOĞRU hem YANLIŞ artar |
| ⓔ yalnız (311 yapısal payda dışı) | 350 | 4 | 330 | sayılar ~aynı, oran payda küçüldüğü için yükselir |
| HEPSİ BİRLİKTE | 360 | 3 (+ KUSUR-KESİN ~15) | 340 | artışlar (ⓒⓓ) ile düşüşler (ⓐ) kabaca birbirini götürür |

Hvar öngörüsü: ⓐ4 altında KUSUR-KESİN, TAŞIMA-PARK. Ahvaz/Rabat: ⓐ2 altında KESİN'den düşer.

<!-- §0 sabit; aşağıdakiler ölçüm sırasında/sonrasında eklendi -->

---

> **Yalnız ölçüm.** `data/`a yazılmadı (KOŞU 22 çalışıyor), commit/push yok. GeoNames API kullanılmadı; yalnız ülke dökümleri `export/dump/<CC>.zip` + `export/dump/alternatenames/<CC>.zip` (işlenip silindi), `allCountries` yok.
> **Taban:** `origin/main` @ **`0a3966260`** (`0a39662608c1e8dc1052ef595be4db2a31a1953b`), ayrık worktree `C:\atlas-ayniad2` (iş sonunda kaldırıldı). `girdi.yukle()` = 4300 nokta; 4300 noktanın **4300**ü v1 tabanıyla (`2ce5dc315`) aynı ad + aynı koordinat ⇒ v1 CSV satırları indeksle birebir eşleşiyor.

## §1 BAZ TANIMLAR (v1), VERBATIM — v1 raporu §1 + §1.1, kelimesi kelimesine kopya


- **YANLIŞ-CİNS-KESİN:** atlas coordinate ≤1 km from a gazetteer record with the SAME/near-same name but of a WRONG KIND relative to the record's own tur:/ad: claim, AND the correct object located by ≥2 independent witness families with distance ≥5 km — OR the matched wrong-kind record is categorically incompatible with any historic settlement object (hotel/lodging, airport, railway station, museum) and the correct object is located by ≥2 families at any distance ≥1 km (coordinator's ruling on Hvar: "a hotel cannot be a castle or a town" ⇒ object error, not a distance question).
- **YANLIŞ-CİNS-ADAY:** wrong-kind match ≤1 km, but correct object has only one witness family, or distance <5 km for non-categorical wrong kinds (island, admin district, river/mountain, modern neighbourhood).
- **YANLIŞ-CİNS-ÖLÇÜLEMEDİ:** wrong-kind match ≤1 km, correct object not locatable by any accepted witness.
- **DOĞRU-CİNS:** nearest same-name record ≤1 km is of the right kind.
- **CİNS-BELİRSİZ:** no same-name record ≤1 km, or kind cannot be determined. ("not found" ≠ "doesn't exist" — §3.)

Etiket, eşiğiyle birlikte okunur: **KESİN = ≥2 bağımsız aile ∧ ≥5 km (kategorik olmayan) / ≥1 km (otel·havalimanı·istasyon·müze).** Hiçbir eşik değiştirilmedi.

### §1.1 Tanımı uygularken verdiğim mekanik kararlar (beyan: bunlar tanım DEĞİŞİKLİĞİ değil, okuma biçimi)
1. **"En yakın" kuralı:** ≤1 km'deki aynı-ad kayıtlardan cinsi *nötr* olanlar atlanır (ör. `liman` kaydı için ada; Pleiades `findspot/unknown`; Ṯ `xroads/quarters`). Kararı, cinsi belli olan ilk kayıt verir.
2. **Tanım boşluğu:** en yakın kayıt yanlış cins, ama **doğru-cins aynı-ad kayıt da ≤1 km'de**. Kategorik olmayanlarda tanım harfiyen ADAY der (mesafe <5 km). Kategoriklerde (doğru nesne <1 km) hiçbir sınıf tutmuyor. İkisini de **ADAY** içinde, `doğru-cins kayıt da ≤1 km (tanım boşluğu)` alt-kovasıyla tuttum: beş sınıf aynen kalsın, boşluk da görünsün. **208 nokta** (bkz. §6 öneri).
3. **"Bağımsız aile":** GeoNames · Pleiades · al-Ṯurayyā · TGN dört ayrı ailedir. İki ailenin tanık noktası **≤0,05 km** çakışıyorsa **tek aile** sayıldı. Ölçüldü: 6 vakada GN ↔ TGN koordinatı ondalığına kadar aynı (Puri, Jinan, Port Lincoln, Bairnsdale, Marree, Ikela), ortak NGA/GNS kökenli. Bu, tanımdaki "independent" kelimesinin uygulanmasıdır. Uygulanmasaydı KESİN **10** olurdu (bu 6 eklenirdi).
4. **§6.2 aynı nesne:** aileler ancak tanık noktaları birbirine **≤10 km** ise "aynı nesneyi gösteriyor" sayıldı (Ṯ p90 8,7 km).
5. **§9.4:** TGN `inhabited places` kaydı `tur:kale` için tanık sayılmadı. **Dakika-yuvarlak** TGN koordinatı (lat·60 ve lon·60 tama ±0,02) hiçbir kayıt için tanık sayılmadı. 124 TGN satırının 82'si yuvarlaktı.
6. **§6.1:** yalnız Ṯ tanıklı ve <10 km olan ADAY'lar "gürültü" diye alt-etiketlenecekti. Bu taramada **0** vaka çıktı.
7. **§6.3 İKAME:** pencerenin birden çok nesneyi kapsayıp kapsamadığı mekanik olarak ÖLÇÜLMEDİ. Hiçbir KESİN/ADAY satırı "taşı" önerisi değildir.
8. **§6.4 iç yüz:** "doğru cins", kaydın kendi `tur:`'una göre okundu:
   - `sehir/kasaba/koy/kale`: yerleşim + kale/harabe/tarihî site doğru. Yanlış: ada · idari · doğal · PPLX · L-alan · R-yol · başka S-yapı · 4 kategorik.
   - `liman`: yerleşim + liman yapısı (H.HBR, L.PRT, iskele) doğru, ada nötr.
   - `bolge/konfederasyon`: yalnız 4 kategorik yanlış, gerisi doğru ya da nötr.
   - `ad:` içindeki "Adası", "Kalesi" gibi cins sözcükleri ayrıca işaretlenmedi.
9. **Ad eşleşmesi:** `ad` + parantez içi alternatifler + `ad_esanlam.js` eşanlamları. Parantez içi bir ad başka bir atlas kaydının çekirdek adıysa ve o kayıt >20 km uzaktaysa **ayırt edici** sayılıp eşleşmeden çıkarıldı (ör. `Yenişehir (Bursa)` → "bursa" kullanılmadı). "Near-same" = cins sözcükleri (Airport, Station, Hotel, Nisí, Otok, Dimos, İlçesi, Kalesi …) atıldıktan sonra eşitlik.


## §1.2 ABLASYON KOLLARI — her kol = v1 + YALNIZ o değişiklik; "HEPSİ" = hepsi birden. Tek koşu (`sinif2.py`), aynı kayıt havuzu.

Kayıt havuzu tek: GN ülke dökümleri yeniden tarandı, her eşleşmeye hangi yöntemle bulunduğu etiketlendi (`v1` · `c` · `d` · `cd`). Bir kol yalnız kendi yöntemlerinin bulduğu kayıtları görür. Böylece v1 kolu v1 eşleşmesini birebir tekrar ediyor (§2.0 sağlama).

**ⓐ dört onaylı tanım değişikliği** (v1 §6.1–6.4'ün uygulanmış hâli):
- **ⓐ1 tanım boşluğu:** en yakın kayıt yanlış cins, ama pencerede (≤1 km; HEPSİ kolunda ≤2 km) doğru-cins aynı-ad bir kayıt da var ⇒ **DOĞRU-CİNS** (alt: `ⓐ1`). v1'deki 208'lik alt-kova tanık-anahtarına bağlıydı; ⓐ1 pencerede herhangi bir doğru-cins aynı-ad kayda bakıyor.
- **ⓐ2 kategorik kolun ölçek eşiği.** Vekil: **doğru nesnenin yarıçapı r = max(1 km, 0,008 km · √nüfus)**. Nüfus = en yakın doğru-nesne tanığının ≤10 km'sindeki **tüm** doğru-cins aynı-ad GN kayıtlarının en büyük `population` değeri. Yalnız ailenin en yakın tanığına bakılmaz: Pinsk'te en yakın GN tanığı nüfussuz bir PPLL, şehir kaydı ise PPLA2 (123 283). Hiç nüfus yoksa r = 1 km. 0,008 = 5000 kişi/km² yoğunlukta dairesel kent yarıçapı katsayısı (√(1/(π·5000))).
  - Kategorik yanlış cins (otel · havalimanı · istasyon · müze) yalnız **atlas noktası doğru nesneye ≥ r uzaksa** yanlış cins sayılır. KESİN için ≥2 aile şartı aynen kalır.
  - d < r ise nokta doğru nesnenin içindedir ⇒ kategorik kayıt kusur sayılmaz ⇒ **DOĞRU-CİNS** (alt: `ⓐ2`).
  - Örnek yarıçaplar: 1 M nüfus ≈ 8 km · 100 b ≈ 2,5 km · ≤15,6 b ⇒ 1 km.
- **ⓐ3 bağımsız aile:** tanık koordinatları ≤0,05 km çakışan iki aile TEK aile sayılır. ⚠️ v1 bunu zaten uygulamıştı (v1 §1.1-3). ⓐ3 tek başına v1'e **fark üretmez**. Şeffaflık için kuralsız karşı-olgu (`a3_yok`) ayrıca basıldı.
- **ⓐ4 Hvar ayrımı (§6.5).** Kategorik yanlış cins ∧ doğru nesne ≥10 km (ⓐ2 ile birlikte ≥ max(10, r)) ∧ tek aile ⇒ kaydın kendi `ad:`'ı ikinci aileyi **YALNIZ KİMLİK İÇİN** ikame eder ⇒ **KUSUR-KESİN, TAŞIMA-PARK**.
  - ≥2 aileli KESİN'ler ⇒ **KUSUR-KESİN, TAŞIMA-HAZIR**.
  - ⓐ kolunda "KESİN" sütunu = KUSUR-KESİN toplamı; TAŞIMA-HAZIR ayrıca verildi.

**ⓑ pencere ≤2 km.** Aynı-ad eşleşme penceresi ≤1 km yerine ≤2 km. KESİN eşikleri (≥5 km / ≥1 km) değişmedi.

**ⓒ "ad İÇERİR" + genişletilmiş cins sözcükleri.**
- Kayıt adı, v1 GENERIC + aşağıdaki liste atıldıktan sonra atlas adına eşitse aynı-ad sayılır. Sözcük sınırları boşluk · tire · virgül · nokta · eğik çizgi · parantez. Ek olarak Farsça izafe `-e/-ye` atılır.
- Aynı liste kayıt **cinsini** de verir. Ancak bu yalnız GN fc'si zaten belirsiz/yapı olduğunda (S-yapı · L · R · bilinmez) uygulanır. `P.*` ve `A.*` kayıtlarının cinsi ezilmez: Avustralya'daki "X Station" gibi çiftlik yerleşimleri istasyon sayılmasın diye.
- Tam liste:
  - **istasyon:** jn jct junction station stn railway railroad bahnhof hbf gare stazione estacion estación istasyon istasyonu gari garı vokzal stantsiya zheleznodorozhnaya istgah istgāh mahattat mahatta rah ahan rahahan eki
  - **havalimanı:** airport aeroport aeroporto aeropuerto aéroport aerodrome aerodromo airfield airstrip havalimani havalimanı havaalani havaalanı flughafen forudgah frudgah matar
  - **otel:** hotel otel hostel motel resort lodge inn gostinitsa funduq pension pansiyon
  - **müze:** museum müze muze müzesi muzesi museo musée musee muzeum muzey mathaf
  - **idari bina** (kategorik DEĞİL, "başka yapı (S)" kalır): kuyakusho shiyakusho yakuba yakusho choyakuba belediye belediyesi city hall town hall rathaus mairie hôtel de ville
  - **idari ek** (yalnız atılır): shi ku cho machi mura gun ken fu xian qu zhen shiqu diqu kecamatan kabupaten kota oblast gorod ostan dehestan baladiyat

**ⓓ normalleştirme.**
- Taban: `denetim/ARAC-NORMAL-0903.py::norm`. Türkçe eşleme `lower()`'dan ÖNCE yapılıyor, bu yüzden D215 tuzağına güvenli.
- Ünsüz eşlemeleri:
  - ç/ch/tch → bir; ş/sh/sch → bir; dzh/dj/zh → j
  - atlas tarafında Türkçe c ayrıca j olarak da denenir (/dʒ/)
  - kh→h · gh→g · q→k · dh→d · th→t · ph→f · ou→u · w→v · x→h · c→k · y→i
  - çift harf tekleşir; ünlüden sonraki son -h atılır (-e ↔ -ah)
- **ünlü iskeleti:** tüm ünlü kümeleri → `a`. Bu, e↔a ve -iye↔-ya eşlemesini sağlar.
- Atlas tarafında ayrıca atılır:
  - artikel: el-/al-/ül-/ed-/es-/…
  - Türkçe cins sözcükleri: çölü havzası takımadası adası kalesi gölü dağı/dağları ovası körfezi boğazı burnu vahası limanı bozkırı deltası vadisi yarımadası kıyısı bölgesi iç kesimi …
- Anahtar boyu ≥4.
- ⓓ ayrıca GN **alternateNamesV2** adlarını da görür. Hariç tutulan diller: link wkdt post iata icao faac abbr fr_1793 unlc tcid phon piny.
- "Ayırt-edici" parantez kuralı (v1 §1.1-9) ⓓ anahtarlarına da uygulandı.

**ⓔ payda.** Yapısal noktalar paydadan (ve aynı alt-evrende paydan) çıkarıldı. Operasyonel tanım: **`kasitli_bosluk: true` taşıyan kayıtlar = 312.** Bu küme 46 "Beyan G… B…" noktasının 46'sını ve 212 `bolge/konfederasyon` kaydının 121'ini kapsıyor.
- ⚠️ Görevde "311" deniyordu; bu tabanda bayrak 312 kayıtta var. Fark 1. Hangi kaydın fazladan sayıldığını bilemiyorum.
- Duyarlılık için geniş küme de basıldı: `kasitli_bosluk ∪ tur∈{bolge,konfederasyon} ∪ ad "Beyan…"` = **403**.
- Adlar CSV'de, `yapisal` kolonunda.

**Değişmeyenler:** cins hükmü (v1 §1.1-8, `sinif.py::hukum` birebir) · §6.2 ≤10 km nesne grubu · §9.4 TGN filtreleri · tanık-anahtar kuralı (eşleşmenin TEK anahtarı, tam-ad öncelikli, ya da `ana` varyantı).

**TGN:** v1'in 81 adayının satırları aynen kullanıldı.
- Herhangi bir kolda ADAY-tek-aile-eşik-üstü, ÖLÇÜLEMEDİ ya da TAŞIMA-PARK çıkıp v1'de sorgulanmamış **84 yeni aday** için Getty SPARQL'e yeniden soruldu (GeoNames değil): 120 sorgu, 0 hata, 14'ü LIMIT 60'a dayandı, 81 satır.
- Bu yeni satırlar **yalnız doğru-nesne tanığı** olarak kullanıldı, pencere eşleşmesine girmez. Bu yüzden v1 kolu v1'i birebir tekrar ediyor.
- Ek tanıklar her kolda (v1 dahil) görünüyor, ama v1 kolunda hiçbir sınıfı değiştirmedi.

## §2 SONUÇ

### §2.0 Sağlama: v1 kolu v1'i birebir tekrar ediyor
v1 kolu (yeni döküm, yeni tarayıcı, yalnız `v1` yöntemi) şunu verdi: **DOĞRU 2252 · BELİRSİZ 1690 · YANLIŞ 358 = KESİN 4 / ADAY 338 / ÖLÇ. 16**. v1 CSV'siyle satır satır karşılaştırıldı: **4300 satırda 0 fark**.

Yolda bulunan iki okuma ayrıntısı, v1'e uymak için düzeltildi:
- TGN satırlarında `mtip=tam` korundu (Mukalla: 0,916 km'de TGN yerleşim ile GN *Mukalla Airport* eşit uzaklıkta).
- Tanık anahtarı eşleşmenin TEK anahtarı (Fort St. Pierre: "rainy" alt-anahtarı tanık üretmesin).

### §2.1 Ablasyon tablosu — "kol · tek başına · birlikte · v1'e fark"

Payda: ⓔ'siz kollarda **4300**, ⓔ'li kollarda **3988** (= 4300 − 312 `kasitli_bosluk`). Oran = YANLIŞ / payda.
- "birlikte katkı" = HEPSİ − (HEPSİ eksi o kol): kolun birleşik koşudaki katkısı.
- "v1'e fark", tek başına hâlin v1'e (358 · %8,33) farkıdır.

| kol | tek başına: YANLIŞ (KESİN/ADAY/ÖLÇ) · DOĞRU · BELİRSİZ · oran | v1'e fark (tek başına) | HEPSİ-eksi-bu: YANLIŞ (K/A/Ö) · oran | birlikte katkı (YANLIŞ) |
|---|---|---|---|---|
| v1 | 358 (4/338/16) · 2252 · 1690 · %8,33 | — | — | — |
| ⓐ dört tanım | **124** (3/107/14) · 2486 · 1690 · %2,88 | **−234** (KESİN −1) | 549 (23/506/20) · %13,77 | **−318** |
| ⓐ1 yalnız | 144 (4/126/14) · 2466 · 1690 · %3,35 | −214 | | |
| ⓐ2 yalnız | 263 (2/245/16) · 2347 · 1690 · %6,12 | −95 (KESİN −2: Ahvaz, Rabat) | | |
| ⓐ3 yalnız | 358 (4/338/16) · %8,33 | **0** (v1 zaten uyguluyordu; kuralsız KESİN 10) | | |
| ⓐ4 yalnız | 358 (5/337/16) · %8,33 | 0 (KESİN +1: Hvar PARK; HAZIR 4) | | |
| ⓑ ≤2 km | **457** (20/408/29) · 2638 · 1205 · %10,63 | **+99** (KESİN +16) | 149 (5/134/10) · %3,74 | **+82** |
| ⓒ ad içerir | **407** (5/387/15) · 2221 · 1672 · %9,47 | **+49** (KESİN +1) | 216 (9/189/18) · %5,42 | **+15** |
| ⓓ normalleştirme | **401** (7/378/16) · 2469 · 1430 · %9,33 | **+43** (KESİN +3) | 202 (6/172/24) · %5,07 | **+29** |
| ⓔ payda (312 çıkar) | **348** (4/330/14) · 2181 · 1459 · **%8,73** / 3988 | −10 sayı, **oran +0,40 puan** | 239 (9/211/19) · %5,56 / 4300 | −8 sayı, oran +0,23 p |
| **HEPSİ (ⓐ–ⓔ)** | **231 (9/205/17)** · 3058 · 699 · **%5,79** / 3988 | **−127**, oran −2,54 p; KESİN +5 | | |
| HEPSİ ⓔ'siz | 239 (9/211/19) · 3168 · 893 · %5,56 / 4300 | −119 | | |

Ek kalemler:
- **ⓐ4 / TAŞIMA ayrımı:**
  - ⓐ kolu: KUSUR-KESİN 3 = TAŞIMA-HAZIR 2 (Zaklise, Sanirajak) + TAŞIMA-PARK 1 (Hvar).
  - HEPSİ: KUSUR-KESİN 9 = **TAŞIMA-HAZIR 7 + TAŞIMA-PARK 2** (Hvar, Xieng Khouang).
- **Duyarlılık:**
  - ⓐ1'in penceresi de 2 km yapılırsa (HEPSİ, ⓔ'siz) YANLIŞ 128 (7/102/19) çıkıyor. Sanirajak ve Uqsuqtuuq düşüyor, çünkü yerleşim kaydı 1,15–1,62 km'de. Onaylı metin "≤1 km" dediği için ana sonuç 1 km'yle verildi.
  - ⓔ geniş kümeyle (403) v1 = 348/3897 = %8,93 · HEPSİ = 230/3897 = %5,90.
- **Ölçülebilir payda (BELİRSİZ hariç):** v1 %13,72 · ⓐ %4,75 · ⓑ %14,77 · ⓒ %15,49 · ⓓ %13,97 · HEPSİ+ⓔ %7,02.

⚠️ **ⓔ uyarısı:** ⓔ'nin tek başına oranı (%8,33 → %8,73) **payda küçüldüğü için** yükseliyor, kusur arttığı için değil. 312 yapısal noktanın yalnız 10'u v1'de YANLIŞ: Rağa · Nauru (Yaren) · Papeete · Banaba (Ocean Island) · Funafuti · Boma · Pecos Pueblo (Cicuye) · Hakodate · İrkutsk · Vladivostok. 231'i CİNS-BELİRSİZ. Bölge "merkezi" ve beyan noktaları zaten eşleşmiyor; çıkarınca payda 312 küçülüyor, pay ise yalnız 10 küçülüyor. 312 ad CSV'de, `yapisal_kasitli_bosluk = 1`.

### §2.2 Geçişler (v1 → kol, YANLIŞ sınıfları birleşik)
- **ⓐ:** YANLIŞ→DOĞRU 234. Bunun 214'ü ⓐ1, 95'i ⓐ2 (örtüşmeli). Ters yönde geçiş yok.
- **ⓑ:** BELİRSİZ→DOĞRU 386 · BELİRSİZ→YANLIŞ 99.
- **ⓒ:** DOĞRU→YANLIŞ 35 (bileşik adlı istasyon/otel/belediye kaydı doğru-cins kayıttan daha yakın) · BELİRSİZ→YANLIŞ 15 · BELİRSİZ→DOĞRU 3 · YANLIŞ→DOĞRU 1.
- **ⓓ:** BELİRSİZ→DOĞRU 232 · BELİRSİZ→YANLIŞ 28 · DOĞRU→YANLIŞ 15.
- **HEPSİ:** BELİRSİZ→DOĞRU 680 · BELİRSİZ→YANLIŞ 117 · YANLIŞ→DOĞRU 236.
  - HEPSİ+ⓔ YANLIŞ 231'in yanlış cinse dağılımı: idari 76 · ada 39 · başka yapı (S) 36 · havalimanı 34 · doğal 24 · PPLX 7 · otel 5 · istasyon 5 · alan (L) 3 · müze 2.
  - ADAY 205'in dağılımı: tek aile 180 · 2+ aile ama eşik altı 25.

## §3 KESİN — adıyla

### §3.1 HEPSİ (ⓐ–ⓔ) altında 9 KUSUR-KESİN (9'u da yapısal küme dışında, ⓔ etkilemiyor)

| ad | yanlış cins | eşleşen kayıt | doğru nesne tanıkları | aile | taşıma |
|---|---|---|---|---|---|
| Ulubat | nehir/göl | GN 13433160 *Ulubat Gölü* H.LK **1,62** | GN 738449 P.PPL 12,43 · PL 511320 12,75 | GN+PL | HAZIR |
| Kimolos (Argentiera) | otel | GN 9403110 *Kimolis* S.HTL 0,32 | GN 259802 PPLA3 2,67 · PL 589867 4,32 | GN+PL | HAZIR |
| Egina (Aegina) | ada | PL 579844 *Aegina (island)* 0,36 | GN 265502 PPLA3 5,88 · PL 579853 *Aigina* 6,30 | GN+PL | HAZIR |
| Zaklise (Zakynthos) | idari | GN 8133854 *Dimos Zakynthos* ADM3 0,52 | PL 531154 10,58 · GN 251280 10,63 | GN+PL | HAZIR |
| **Hvar (Lesina)** | otel | GN 10236444 *Hvar* S.HTL 0,21 | GN 3199180 PPLA2 20,80 | GN (+ `ad:`) | **PARK** |
| Xieng Khouang | havalimanı | GN 7731637 *Xieng Khouang Airport* S.AIRP **1,22** | GN 1652078 P.PPL 26,17 · TGN 1082558 26,17 (≡GN ≤0,05 km ⇒ tek aile) | GN (+ `ad:`) | PARK |
| Sanirajak (Hall Beach) | havalimanı | GN 6296301 S.AIRP 0,10 | GN 5969475 PPLL 1,62 · TGN 7593721 2,12 | GN+TGN | HAZIR |
| Uqsuqtuuq (Gjoa Haven) | havalimanı | GN 6296204 S.AIRP **1,06** | GN 5961560 PPLL 1,15 · TGN 1014376 2,82 | GN+TGN | HAZIR |
| Tshane | havalimanı | GN 6296953 S.AIRP **1,40** | GN 932984 P.PPL 3,39 · TGN 1088121 7,67 | GN+TGN | HAZIR |

**Hangi kol getirdi:**
- Zaklise, Sanirajak v1'den kalıyor.
- Hvar ⓐ4'ten geliyor.
- Kimolos ve Egina ⓓ'den geliyor:
  - Kimolos: *Kimolis* oteli yalnız ünlü iskeletiyle eşleşiyor.
  - Egina: *Aigina* yerleşimi ikinci aileyi veriyor.
- Ulubat, Xieng Khouang, Uqsuqtuuq ve Tshane ⓑ'den geliyor: eşleşen kayıt 1–2 km'de.

⚠️ **Etiket eşiğiyle birlikte okunur:**
- **Kimolos** KESİN'i 4 metrelik bir sıra farkına dayanıyor: otel 0,323 km, PL ada kaydı 0,327 km. Ada kaydı önde olsaydı ADAY kalırdı. Kırılgan.
- **Uqsuqtuuq · Tshane · Sanirajak** küçük yerleşimler (r = 1 km). Nokta pistte ya da pist yanında, yerleşim 1,1–3,4 km'de. ⓐ2 bunları ayırmıyor, çünkü nüfus küçük.
- **Xieng Khouang:** GN P.PPL 26 km'de, büyük olasılıkla eski başkent Muang Khoun. Atlas noktası modern Phonsavan havalimanında. Gerçek bir kimlik vakası olabilir, ama tek aile ⇒ PARK.

### §3.2 Tek kollarda KESİN (adıyla)
- **v1:** Zaklise · Ahvaz · Rabat · Sanirajak.
- **ⓐ (3):** Zaklise (HAZIR) · Sanirajak (HAZIR) · Hvar (PARK).
- **ⓑ (20):** Aden · Rabat · Zaklise · Ahvaz · Portsaid · Benzert · Shaoxing · Kanazawa · Okayama · Pyongyang · Mergui · Đà Nẵng · Rovaniemi · Henzada · Reykjavík · Sanirajak · Uqsuqtuuq · Pinsk · Dundo · Tshane.
  - Çoğu büyük şehirde merkez istasyon/müze/havalimanı 1–2 km'de: pencere genişleyince kategorik kol (≥1 km) şehir içini "nesne hatası" sayıyor.
  - HEPSİ'de ⓐ2 bunların şehir olanlarını eliyor. Pinsk ancak tüm-grup nüfusuyla eleniyor (§1.2).
- **ⓒ (5):** v1'in 4'ü + **Codhpûr (Jodhpur)**: *Jodhpur Jn* S.RSTN 0,63 · şehir 2,54/2,63. HEPSİ'de ⓐ2 eliyor.
- **ⓓ (7):** v1'in 4'ü + Kimolos · Egina · **Debre Markos** (*Debremarcos* S.AIRP 0,04 · şehir 1,79/4,06). Debre Markos HEPSİ'de ⓐ2 ile eleniyor.

## §4 SAĞLAMALAR

| vaka | v1 | ⓐ (ⓐ2 / ⓐ4) | HEPSİ | hüküm |
|---|---|---|---|---|
| **Hvar (Lesina)** | ADAY (tek aile) | ⓐ4: **KUSUR-KESİN, TAŞIMA-PARK** · ⓐ2 yalnız: ADAY | **KUSUR-KESİN, TAŞIMA-PARK** | ✅ beklenen. Otel 0,21 km · Hvar kasabası 20,80 km, nüfus 3519 ⇒ r = 1 km. İkinci aile hâlâ yok (TGN 7015484 §9.4'ten elendi); taşıma bu yüzden PARK |
| **Ahvaz** | KESİN | ⓐ2: **DOĞRU-CİNS**. d = 1,43 < r = 7,34 km (pop 841 145) | DOĞRU-CİNS (ⓐ2) | ✅ KESİN'den düştü |
| **Rabat** | KESİN | ⓐ2: **DOĞRU-CİNS**. d = 1,16 < r = 10,29 km (pop 1 655 753) | DOĞRU-CİNS (ⓐ2) | ✅ KESİN'den düştü |

## §5 ⓓ: 1684 örnekleminin "hiçbir mesafede kayıt yok" satırları
1684-KÖR CSV'sinde `onceki_tarama_150km_buldu = hayır` ve Beyan olmayan **18 satır** var. Raporun metni "15" diyor; CSV'de bunlara Dera Gazi Han, Meciboj ve Mamûra da ekli. ⓓ altındaki durum:
- **Bulunanlar (11):**
  - ≤1 km doğru kayıt: Meciboj 0,75 · Merâde 0,54 · Ebû Hamed 0,31 · Bîcâr 0,67
  - 1 km'den uzakta: Dera Gazi Han 1,09 · Verzâzât 1,59 · Muhammere→Khorramshahr 1,72 · Verder 1,90 · Sinâvin 2,48 · Vaygaç 14,27
  - Mamûra yalnız *Kasbah de Kenitra* üstünden 2,07 km'de bulundu. Mehdya hâlâ eşleşmiyor: "Mehdiye" parantezi başka bir atlas kaydının (Tunus Mehdiye) adı olduğu için v1 §1.1-9 gereği ayırt-edici sayılıp atılıyor.
- **HÂLÂ AÇIKLANAMAYANLAR — adıyla (7):**
  - **Louisiade-Milne takımadası:** bileşik atlas adı, "Milne" eki iskeleti bozuyor
  - **Yeni Britanya iç kesimi:** çeviri exonym (New Britain), normalleştirme çözemez, sözlük gerekir
  - **Atbay çölü** ve **Hoggar:** kayıtlar 245 / 303 km'de, tarama yarıçapı 150 km. Hoggar↔Ahaggar ayrıca ad varyantı
  - **Samudra Pasai:** gazetteer'da yok
  - **Telembinsk:** Telemba 49 km, ardıllık kurulamadı
  - **Karatigin:** Ploketta kimliği kurulamadı

## §6 TANIM ÖNERİLERİ (AYRI BÖLÜM — UYGULANMADI; yukarıdaki sayılar bunlarla hesaplanmadı)
1. **ⓐ2 küçük yerleşim boşluğu:** r = max(1 km, 0,008·√pop) köy ve arktik yerleşimlerde 1 km'ye iniyor. Sanirajak, Uqsuqtuuq ve Tshane'de pistteki nokta KESİN kalıyor. Öneri: havalimanı için alt sınırı 2 km yapmak (pist ölçeği) ya da ⓐ1 penceresini 2 km'ye çıkarmak (duyarlılık: HEPSİ 239 → 128).
2. **ⓑ, ⓐ2 olmadan kategorik kola uygulanmamalı:** ⓑ tek başına KESİN'i 4'ten 20'ye çıkarıyor, çoğu şehir içi istasyon/havalimanı. ⓐ2 olmadan ≤2 km penceresi kategorik kolda yanlış pozitif üretiyor.
3. **Atlas adı birleşik varyantı:** "Nykøbing (Falster)" atlas tarafında "Nykøbing Falster" diye birleşik denenmiyor. ⓒ'de *Hotel Falster* yanlış cins olarak eşleşiyor, gerçek şehir kaydı tanık olamıyor (HEPSİ'de ADAY). Öneri: ana+parantez birleşik anahtarı.
4. **Kırılgan sıra:** en yakın iki kaydın farkı <0,05 km ise ve biri yanlış, öteki nötr/doğru cinsse KESİN verilmesin (Kimolos).
5. **"311":** bu tabanda `kasitli_bosluk` 312 kayıtta. Payda tanımı adıyla sabitlenmeli (CSV `yapisal_kasitli_bosluk`).

## §7 ERİŞİM VE KAPSAM SINIRLARI
- **GeoNames:** 201 ülke dökümü + 201 alternateNamesV2 dökümü indirildi, işlendi, silindi (0 indirme hatası, 0 eksik alt dosya). API ve `allCountries` kullanılmadı. Tutulan aday satır: 21 238 (≤150 km). Ülke seçimi v1'in `ulkeler.json`'u (cities500, 120 km).
- GN dökümleri v1'den ~1,5 saat sonra indirildi. Yine de v1 kolu 4300/4300 aynı çıktı.
- **Pleiades / Ṯ:** yerel dökümler, aynı çok-yöntemli eşleştiriciyle yeniden tarandı (PL 749 · Ṯ 213 satır). Ṯ yalnız `eng` alanları (v1 gibi).
- **TGN:** §1.2'deki gibi, toplu taramada yok.
- **Kesinleşmeyenler:** ADAY satırları elle doğrulanmadı. KESİN'lerin elle okunması §3.1'deki notlarla sınırlı. Hiçbir satır taşıma diff'i değildir.
- **CSV:** `denetim/LAB-AYNI-AD-TARAMA-v2-1010.csv` (4300 satır). Kolonlar:
  - yapisal bayrakları (312 / 403) · v1 rapor sınıfı · v1 yeniden
  - her kolun sınıfı: ⓐ · ⓐ1 · ⓐ2 · ⓐ4 · ⓐ3-kuralsız · ⓑ · ⓒ · ⓓ · ⓔ (PAYDA-DIŞI işaretli)
  - HEPSİ sınıfı + KUSUR/TAŞIMA + eşleşen kayıt / tanık / aile / r
- **Scriptler** (`scratchpad\ayniad2\`): `anahtar.py` (ⓒ/ⓓ anahtarları) · `gn2.py` (döküm taraması) · `pl2.py` · `tgn_ek.py` · `sinif2.py` (tüm kollar tek koşu) · `rapor2.py` · `kor15.py`.

---

## §EK — 10 Ekim koordinatör kararları

> **Yalnız ekleme.** §0–§7 ve oradaki ölçülmüş sayılar değiştirilmedi. `data/`a yazılmadı, commit/push yok.
> **Taban:** tarama tabanı aynen `0a3966260`. Egina kaydı ve petek hesabı için `origin/main` @ **`d50ddbedd`** kullanıldı (ayrık worktree `C:\atlas-etki`, iş sonunda kaldırıldı). Etki kümesindeki 214 noktanın **214**'ü `d50ddbedd`'de tarama tabanıyla aynı koordinatta (CSV `main_koordinat_farkli` boş).
> **Yeni dosya:** `denetim/LAB-AYNI-AD-TARAMA-v2-1010-etki.csv` (214 satır = 8 KUSUR-KESİN + 206 ADAY).

### EK① Kimolos → ADAY
- Koordinatör kararı: 4 metrede dönen bir sınıf KESİN değildir. Bu, §6.1'in ruhunun ölçüm kırılganlığına uygulanmasıdır.
- **Kimolos (Argentiera): kırılgan: 4 m.** Otel 0,323 km, PL ada kaydı 0,327 km (§3.1 uyarısı, §6.4 önerisi).
- **Güncel HEPSİ sayımı (payda 3988):** YANLIŞ 231 = **KUSUR-KESİN 8** (TAŞIMA-HAZIR 6 / TAŞIMA-PARK 2) / **ADAY 206** / ÖLÇ. 17.
- TAŞIMA-HAZIR 6: Ulubat · Egina · Zaklise · Sanirajak · Uqsuqtuuq · Tshane. Egina'nın çaresi EK②'de İKAME'ye dönüyor; sınıfı değişmiyor.

### EK② Egina (Aegina) — iki bulgu, TEK hüküm

**Kaydın kendisi** (`d50ddbedd`, `data/yerlesimler.js:1668`):
- `tur:"kale"`, `ad:"Egina (Aegina)"`: ada adı, ayrı bir kale adı yok. Koordinat 37.736, 23.493.
- `s:` 1281-01-01→1537-10-01 venedik · 1821-03-25→1923-10-29 yunanistan.
- `d:` 1537-10-01→1821-03-25 (Osmanlı).
- Pencere kesintisiz **1281–1923**.

**İki bulgu:**

| tarama | sınıf | eşleşen kapsayan kayıt | doğru nesne | km |
|---|---|---|---|---|
| ADA-TARAMA-1010 | KAPSAYAN-KAYIT · ADAY · çare İKAME | PL 579844 *Aegina (island)* 0,36 · TGN 7011088 ada 0,51 · GN 8133696 *Dimos Aegina* ADM3 0,99 | **Palaiochora** PL 884693053 · Egina kasabası GN 265502 / TGN 7011087 / PL 579853 (antik) | **1,68 / 5,88** |
| bu rapor (v2, HEPSİ) | KUSUR-KESİN · TAŞIMA-HAZIR · yanlış cins = ada | PL 579844 *Aegina (island)* 0,36 | Egina kasabası GN 265502 5,88 · PL 579853 *Aigina* 6,30 | 5,88 |

⚠️ Görev metninde ADA taramasındaki Egina mesafeleri "7,4 / 1,9 km" diye verilmişti. Bu iki sayı ADA raporunda **Termiye (Kythnos)** satırına ait: Kastro tis Orias 7,42 / Chora 1,90. Egina satırında 1,68 / 5,88 yazıyor. Burada Egina satırının kendi sayıları kullanıldı.

**İki bulgu farklı nesneleri gösteriyor:**
- **ADA taraması kaleyi buluyor.** Palaiochora, adanın tahkimli ortaçağ merkezi. Pleiades zamanı `mediaeval-byzantine`. Merkez 1826 civarına dek burada.
- **v2 kasabayı buluyor.** Modern Egina kasabası (GN PPLA3) ile antik Aigina (PL), ~1826 sonrası merkez.
- v2 Palaiochora'yı göremez: aynı-ad taraması, ve "Palaiochora" adı "Egina" değil.

**Kaydın iddia ettiği nesne:** `tur:"kale"` ve 1281'de başlayan pencere, kaydın nesnesini **ortaçağ kalesi/kale-kasabası Palaiochora** yapıyor. Modern kasaba bu pencerenin ancak son katmanının (~1826–1923) nesnesi.

**§6.5 kimlik ile koordinat:**
- *Kimlik (kusurun varlığı) kesin.* Koordinat bir kale değil, adanın temsil noktası. Bunu üç ayrı aile söylüyor (PL ada 0,36 · TGN ada 0,51 · GN ADM3 0,99) ve kaydın kendi `tur:kale`'si de bununla çelişiyor. İki tarama bu noktada ayrışmıyor.
- *Koordinat (düzeltmenin hedefi) tek değil.* Hedef pencerenin hangi katmanına bakıldığına göre değişiyor.

**§6.3 pencere:** pencere iki nesneyi kapsıyor (Palaiochora 1281–~1826 → Egina kasabası ~1826–1923) ⇒ **çok katmanlı ⇒ İKAME**, TAŞIMA değil. 1826 tarihi genel bilgidir, tanıkla teyit edilmedi (ADA raporu §Pencere ile aynı).

**TEK HÜKÜM: Egina = KUSUR-KESİN (sınıf aynen kalır) · çare TAŞIMA-HAZIR → İKAME (§6.3).**
- Tek noktayı kasabaya (5,88 km) taşımak 1281–~1826 katmanını bozar. Kaleye (1,68 km) taşımak da son katmanı bozar.
- Düzeltme iki ayrı kayıt/katman ister:
  - Palaiochora (tek aile: PL; ADA taramasında ADAY sayılmasının nedeni bu)
  - Egina kasabası (GN+PL, ≥5 km ⇒ v2 KESİN eşiği bu katmanda tutuyor)
- Sonuç: KUSUR-KESİN 8 = **TAŞIMA-HAZIR 5 + İKAME 1 + TAŞIMA-PARK 2**. EK①'deki "HAZIR 6" sayımı, EK② uygulanmadan önceki hâldir.
- Palaiochora koordinatı Pleiades reprPoint'idir (37.75085, 23.48926), elle doğrulanmadı.

### EK③ `etki:` ekseni (rapor ekseni; tanım değişikliği DEĞİL, sınıflar aynen kalır)

**Yöntem:**
- **Doğru-nesne koordinatı:** `hepsi_tanik`'teki en yakın tanık kaydı. Aynı tanık kayıt havuzu kullanıldı (`gn/out`, `pl_th2`, `tgn2`, `tgn_ek`).
- **Mesafe:** atlas noktası → bu tanık.
- **Petek:** basitleştirilmiş Voronoi what-if (`scratchpad\konum\voronoi.py`'nin uyarlaması).
  - Noktanın sahipli olduğu **2 gün**: en uzun sahiplik döneminin orta günü ve ilk dönemin orta günü (aynıysa 1 gün).
  - O gün sahipli tüm atlas noktaları (±8° pencere) alınır, hücreler kara maskesiyle (`veri-kaynak/motor_kara.geojson` @ d50ddbedd) ve **200 km tavanla** kırpılır.
  - Ölçü: noktanın hücresinin taşıma öncesi/sonrası **simetrik farkı (km²)**. Bant için günlerin en büyüğü alındı.
- ⚠️ **Motor kuralları modellenmedi.** Kural dışı olanlar: ağırlık/rütbe, kale/şehir ayrımı, nehir/dağ sınırları, deniz geçişi, `kasitli_bosluk` delikleri, vasal kuralları. km² değerleri yalnız göreli büyüklük göstergesidir, haritadaki gerçek alan değişimi değildir.
- Sağlama: Zaklise 1639 için 1080 → 1433 km², simetrik fark 354. Bu, önceki `konum/voronoi.log` ile birebir aynı.

**Bant eşikleri:**
- **ÖNCELİK DÜŞÜK:** mesafe **< 2 km** VE hücre değişimi **< 500 km²**
- **ÖNCELİK YÜKSEK:** mesafe **≥ 5 km** (kategorik olmayan KESİN mesafe eşiğiyle aynı) VEYA hücre değişimi **≥ 2000 km²** (dağılımın üst ~%7'si; p90 = 1374 km²)
- **ÖNCELİK ORTA:** geri kalan
- **ÖLÇÜLEMEDİ:** doğru-nesne koordinatı yok ya da nokta hiçbir günde sahipli değil

Etki kümesinde (214) dağılımlar:
- mesafe: medyan 1,99 km · p75 3,03 · p90 6,01 km
- hücre değişimi: medyan 267 km² · p75 597 km²

**Bant sayıları:**

| sınıf | n | YÜKSEK | ORTA | DÜŞÜK | ÖLÇÜLEMEDİ |
|---|---|---|---|---|---|
| KUSUR-KESİN | 8 | 5 | 1 | 2 | 0 |
| **ADAY** | **206** | **28** | **88** | **89** | **1** |

ADAY notları:
- **ÖLÇÜLEMEDİ 1: İfe (Ile-Ife).** Mesafe ölçüldü (1,86 km), ama kayıtta `s/d/v` boş, hiçbir günde sahipli değil ⇒ petek yok.
- **ADAY YÜKSEK 28'in en uzakları:** Brakya 103,4 km · Elba 77,5 · Knife River 69,5 · Peşte 67,3 · Nikarya 56,0 · Fort Nez Percés 43,0 · Fort Ross 31,9.
  - Bunlar tek-aile ve uzak tanıklar, büyük kısmı muhtemelen eş-adlı başka bir nesne.
  - Elle bakılmadı. YÜKSEK bandı burada "önce elle doğrula" anlamına gelir, "önce taşı" anlamına gelmez.
- **Yalnız alan ölçütüyle YÜKSEK olanlar:** Tucson (4,09 km / 3018 km²) · Port of Spain (2,27 km / 2044 km²).
- **< 2 km olup alan yüzünden ORTA'ya çıkanlar:** 15 satır.

**TAŞIMA-HAZIR sıralaması** (önce bant, bant içinde mesafe; Egina EK② gereği İKAME ama listede tutuldu):

| sıra | ad | mesafe | hücre değişimi (gün) | bant | not |
|---|---|---|---|---|---|
| 1 | Ulubat | 12,43 km | 405 km² (1666 osmanlı · 1307 bizans) | YÜKSEK | değişim tek sahip içinde (sahip_net 0) |
| 2 | Zaklise (Zakynthos) | 10,58 km | 354 km² (1639 venedik · 1380 napoli) | YÜKSEK | kayma sahip değiştiriyor: 1639 osmanlı −354 / venedik +354 km² |
| 3 | Egina (Aegina) | 5,88 km (katman 2) · 1,68 km (katman 1) | 108 km² · 18 km² (1679 osmanlı · 1409 venedik) | YÜKSEK (k2) / DÜŞÜK (k1) | **İKAME** (EK②) |
| 4 | Tshane | 3,39 km | 1649 km² (1792 tsvana) | ORTA | hücre ≈59 500 km², göreli %2,8 |
| 5 | Sanirajak (Hall Beach) | 1,62 km | 106 km² (1580 inuit) | DÜŞÜK | pistteki nokta; gerçek köken kusuru |
| 6 | Uqsuqtuuq (Gjoa Haven) | 1,15 km | 54 km² (1580 inuit) | DÜŞÜK | pistteki nokta; gerçek köken kusuru |

PARK 2 (sıralamaya girmez):
- **Xieng Khouang:** 26,17 km · 4457 km² · YÜKSEK. 1530'da lan-xang +853 / le-hanedanı −853 km².
- **Hvar:** 20,80 km · 301 km² · YÜKSEK.

Havalimanı köyleri:
- Sanirajak, Uqsuqtuuq ve Tshane listenin dibinde, ama listede.
- Koordinatör eşiğin gevşetilmesini açıkça reddetti: *"sınıflandırma ve düzeltme önceliği iki ayrı sorudur."* Bu yüzden bu satırlar KUSUR-KESİN kalıyor. Düşük olan yalnız düzeltme öncelikleri.
- Tshane'nin ORTA çıkması mesafeden değil, Kalahari'deki büyük hücreden geliyor.

**Scriptler** (`scratchpad\etki\`):
- `dump.py`: `d50ddbedd` noktaları, `s/d/v/kur` dahil
- `etki.py`: mesafe + petek
- `sahip.py`: sahip_net ve Egina katmanları
- `bant.py`: bantlar + CSV
- Shapely `py -3.14` ile çalıştı.
