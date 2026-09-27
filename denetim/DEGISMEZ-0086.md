# DEGISMEZ-0086 — "şehir bölgesi ülke sınırını aşamaz" değişmezi

Şartname `oturumlar/DEGISMEZ-0086.md` · koordinatör YILDIRIM BAYEZIT · 27 Eylül 2026.
Devralınan ölçüm `denetim/AVRUPA-SINIR-0077.md` (koşu 15 gövdesi, 25 Eyl 20:55).

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı (27 Eyl, alet henüz yazılmadı, koşulmadı)

### Tasarım kararı: TEK kural, İKİ soru (8a · 8b), iki ayrı tavan
Kusur iki ayrı katmanda ve çareleri ayrı:
- **8a PETEK × D HATTI** — bir devletin gövdesi (yerleşim peteklerinin birleşimi, motor
  çıktısı `devletler_harita.js` + `donemler.js`) o gün geçerli bir D hattını aşıp KARŞI
  taraf yakasına ≥ 5 km uzanıyor mu. Kök: A katmanında nokta seyrekliği / yaslanmama.
  Çare: nokta ya da yaslama. (Emre'nin gördüğü şey budur.)
- **8b BÖLGE × GÖVDE** — `bolgeler.js`teki bir Osmanlı k1/k2 bölge poligonunun, kendi
  görünürlük penceresinde, yabancı gövdeye düşen alanı. Kök: bölge poligonu ZAMANDAN
  BAĞIMSIZ tek geometri. Çare: `uret_petek.py` bölge üretimi (Oturum 0).
Tek sayıya toplanırsa biri iner öbürü çıkar ve tavan kıpırdamaz — iki sayaç ayrı tutulur.

### Ölçüt (sabit, ölçümden önce seçildi)
- 8a: hattın iki yanında 25 km şerit (yerel eşit-uzaklık izdüşümü, km); iki yanın
  şeritlerinin ÇAKIŞTIĞI yer (menderes) belirsizdir, atılır. Karşı tarafın gövdesinden
  şeride düşen parçalardan **yalnız hatta değen** (≤ 1 km) parçalar sayılır; bunların
  hattan 5 km'den derindeki alanı ≥ 5 km² ise TAŞMA. Parça, o gün o tarafa ait en yakın
  yerleşime bağlanır ⇒ birim: (hat, gün, yan, yerleşim).
  Sınav günleri: her D kaydının `f` günü ve `t`'den bir önceki gün.
- 8b: bölge poligonu ∩ (yabancı gövde − Osmanlı `o`∪`v` gövdesi); ≥ 50 km² VE bölgenin
  ≥ %1'i ise TAŞMA. Birim (bölge, gün). Sınav günleri: bölgenin `f` günü ve `t`'den önceki gün.

### Muafiyetler ve gerekçeleri (sessiz muafiyet yok)
| sınıf | nasıl muaf | gerekçe |
|---|---|---|
| deniz aşırı / eksklav | 8a: hatta değmeyen parça sayılmaz | eksklav hattan KOPUKTUR; hattan kesintisiz uzanan gövde taşmadır |
| `__BOSLUK__` | gövdesi karşı taraf sayılmaz | beyan, kusur değil (§3.5.1) |
| Osmanlı ↔ tâbi | 8b'de `v` gövdesi yabancı SAYILMAZ; 8a'da `osmanli` tarafı yalnız `o` | §3 |
| kasıtlı çöl/dolgu | gövdesi yok ⇒ hiçbir soruya girmez | Değişmez 1'in beklenenleri |
| `isg:` işgal | YAPISAL: motor `isg:` okumaz (`girdi.py:177`), gövde de jure | işgal gövdeye girmez, taşma üretemez |
| menderes belirsizliği | iki yanın şeridi çakışan yer atılır | nokta hangi yakada, hat geometrisinden karar verilemez |

### Sayısal öngörüler
- **Ö1 (ateşleme):** 8a, `d1920-tbmm-bg` 1920-04-23'te Edirne'yi TR→BG taşması olarak yakalar
  (rapor: 20 km). Aynı hatta ≥ 5 taşan yerleşim.
- **Ö2 (şartnamenin negatif kontrolü ÇÜRÜK — ölçmeden önce bildiriyorum):** şartname be-lu/be-nl'yi
  "temiz, %0" diye veriyor; oysa raporda %0 LU/NL yanında DOĞRU sahibin oranıdır, yani o yanlar
  TAMAMEN taşmış (Arlon, Bastogne, St. Vith BE→LU ≥ 24 km; §4 H-0088 "kusur A katmanında").
  Öngörü: 8a be-lu'yu BE→LU yönünde **YAKALAR**. Negatif kontrol başka yerden kurulur:
  ① `d1923-fr-de` Fransa yanı (rapor %95 doğru) ⇒ o yanda ≤ 1 taşan yerleşim;
  ② YAPAY: iki gövdenin ortak kenarından hat kurulur ⇒ 0; aynı hat 15 km kaydırılınca ⇒ > 0.
- **Ö3 (evren):** 8a toplam taşma birimi **~600** (aralık 250–1500); (kayıt, gün) çiftlerinin
  **~%85**'i ölçülebilir (iki tarafın da o gün gövdesi hat çevresinde var).
- **Ö4:** 8b Edirne k1 bölgesini 1920-04-22'de ~22.000 km² ile yakalar (rapor 21.958).
  8b toplam taşan (bölge, gün) **~8** (aralık 3–20).
- **Ö5 (bedel):** iki soru `denetle.py`ye ≤ 90 sn ekler.

## 1. ÖLÇÜM — koşu 15 gövdesi (`devletler_harita.js` 2026-09-25 20:55 · uret_petek c90fa6c8)

Evren: `index.html`in yüklediği 13 `d_sinirlar*.js` → `hat`lı **450** kayıt (hepsi iki
taraflı; iki tarafsız 0) × {f, t−1} = **900** (hat, gün). Ölçülen **723** · ölçülemeyen
**177** (o gün taraflardan birinin hat çevresinde gövdesi yok — ör. Afrika Caprivi, Kenya-
Tanganyika, Sudan-Libya; `d1746-osm-afsar-kerden`). 80 bölge × {f, t−1}.

| sayaç | değer | not |
|---|---|---|
| **8a** (D/E/F hattı) | **1611** birim (1751 satır) | 249 hatta · 479 (hat, gün) · 1022'si ≥ 24 km (şerit tavanı 25) · E 1562 / D 189 satır |
| 8a kaba kova (C/YOK) | 985 | ihlal değil, sayılır |
| **8b** | **83** (bölge, gün) | 54/80 bölgede |
| süre | 64 + 7 sn | `denetle.py` toplamı 4:07 (önce 3:59) |

En çok taşan hatlar: `d1923-ca-us-dogu` 44 · `g4-bna-us-dogu` 44 · `d1923-no-se` 26 ·
`dg6-dk-se-stromstad` 26 · `d1923-iq-ir` 24 · `d1923-nijer-nijerya` 23 · `d1923-tr-sy-dogu` 22.
8b'nin en büyükleri bölgenin **f günü**nde: Kahire 1517-02-15 ~794 bin km² · Hartum
1821-06-14 · Cezayir 1519-09-01 — merkez fethedildiği gün bölge poligonu, henüz fethedilmemiş
eyaletin TAMAMINI çiziyor (poligon zamansız, pencere merkezin Osmanlı aralığı). Edirne
1920-04-22: bulgaristan **21.932 km² %52,5** (rapor 21.958 ✓).

### Öngörülerin sınavı
- **Ö1 ✓** Edirne 1920-04-23 TR→BG yakalandı; tbmm-bg'de 5 yerleşim (Demirköy, Dereköy,
  Edirne, Malko Tırnova, Umur Fakih) iki yönde. ⚠️ Edirne'nin derinliği **9,6 km** (rapor 20):
  benim birimim ızgara örneğini EN YAKIN TR yerleşimine bağlıyor; derindeki örnekler Dereköy'e
  (18 km) düşüyor. Rapor ise kesiti hattın en yakın şehrine bağlıyordu. İkisi aynı taşmayı
  farklı yerleşime yazıyor — sayaç birimi değişir, taşmanın varlığı değişmez.
- **Ö2 ✓** be-lu BE→LU yakalandı (Arlon, Bastogne, St. Vith, Wiltz). Şartnamenin "temiz"
  okuması ÇÜRÜK. Negatif kontrol: fr-de Almanya→Fransa yanı **0** ✓; Strazburg FR→DE yakalandı.
- **Ö3 ✗ ÇÜRÜDÜ** 8a ~600 (250–1500) dedim → **1611** (C dahil 3058). Ölçülebilirlik %85 dedim → %80.
  Sebep: ham gövde D hattını HİÇ tanımıyor; ölçülen (hat, gün)ların **%94**'ünde (683/723, C dahil) taşma var.
- **Ö4 ½** Edirne ✓ (21.932 km²) · toplam ~8 dedim → **83** ✗. Sebep: bölgenin f günü (merkezin
  fethi) eyaletin geri kalanı henüz yabancıyken poligonu tam çiziyor — sınıf, tekil kusur değil.
- **Ö5 ½** ilk sürüm **489 sn** ✗ (yerleşim atfı döngüdeydi) → vektörleştirilince **71 sn** ✓.

## 2. KARARLAR ve gerekçeleri
- **Tek kural, iki soru.** Kusur iki katmanda, çareleri ayrı (8a nokta/yaslama · 8b bölge
  üretimi `uret_petek.py`); tek sayı birinin inişini öbürünün çıkışıyla gizlerdi.
- **Tavan = ölçüm (1611 · 83), 27 Eyl, gövde damgasıyla** `denetle.py`de yazılı.
- **Defter** `denetim/DEGISMEZ-0086-defter.json` (2t kalıbı): tavanın evreni 450 değil,
  **ölçülen** hat kümesidir. Sonradan eklenen D hattı "YENİ KAPSAM" kovasına adıyla düşer,
  tavana katılmaz — aksi hâlde ham gövdenin %94 taşma oranıyla her doğru D eklemesi yayını
  durdururdu. Evrene alma: `py arac/denetle.py --d8-defter-yaz` (tavan o gün yeniden ölçülür).
- **C/YOK ayrı kova:** C "belge kaba" — taşma hattın kabalığından olabilir; YOK çizilmez.
- **Birim:** 8a (hat, gün, yan, yerleşim) — Emre "şehrin bölgesi" dedi; gövde birleşik
  olduğu için 2 km ızgara + en yakın karşı-sahipli yerleşim. 8b (bölge, gün).
- **Sınav günleri yalnız f ve t−1.** Pencere İÇİ günler ÖLÇÜLMEDİ (bedel: her gün için
  gövde yeniden okunur). Kör nokta, beyan edildi.
- **Motor çıktısı ölçülür** — veri düzeltmesi koşudan önce bu satırı oynatmaz.
- **Tarayıcı yaslaması ölçülmedi** (`js/d_katman.js` E/F dolgu) — ham gövde ölçülür; Emre'nin
  gördüğü gövde parçası çizgisi de hamdır (AVRUPA-SINIR-0077 §0).

## 3. SINAV — `py denetim/DEGISMEZ-0086-sinav.py` → **24/24**
Yapay 8a (9): yaslı hat 0 · ölçüldü · 15 km taşma yakalandı, doğru yerleşim, derinlik 14 ·
3 km 0 · eksklav muaf · `__BOSLUK__` muaf · karşı gövde yok ⇒ ÖLÇÜLEMEDİ.
Yapay 8b (4): %50 yabancı yakalandı · tâbi muaf · tam Osmanlı 0 · < 50 km² 0.
Karar dalı (5): tavanda temiz + yeni hat tavana girmez · 8a/8b aşımı ✗ ve YENİ birim adıyla ·
TAVAN GEVŞEK · ölçülemezse ✓ basmaz.
Gerçek (6): Edirne ateşleme · tbmm-bg iki yön · be-lu yakalanır · fr-de negatif 0 · Strazburg ·
8b Edirne 21.932 km².

## 4. BULUNAMADI / ÖLÇÜLMEDİ
- Pencere içi günler (yalnız f, t−1).
- Tarayıcı yaslaması sonrası ekran.
- 177 (hat, gün) — taraflardan birinin gövdesi yok.
- `§1.5` satırı: `arac/durum_tablosu.py` benim dosyam değil → yaması
  `denetim/DEGISMEZ-0086-durum_tablosu.diff` (`git apply --check` temiz, +4 satır).
