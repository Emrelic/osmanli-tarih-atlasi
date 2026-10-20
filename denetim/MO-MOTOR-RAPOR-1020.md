# MO-MOTOR-1020 — motorun MÖ katmanı (rapor)

21 Ekim 2026 · oturum MO-MOTOR · ağaç `d42f05169` + yama · makine HAVVA (koşu YOK: `uret_petek` süreci 0, `C:\atlas-kosu28` 19 Ekim'de bitmiş)
Sınav sürücüsü: `denetim/ARAC-MO-MOTOR-KUTU-1020.py` · renk sınavı: `denetim/ARAC-KULTUR-DESEN-SINAV-1020.py` · tam koşu YAPILMADI.

## ① Ne ölçtüm

**Kutu:** 33–47°D · 30–41°K (Levant–Mezopotamya), kara 1.409.030 km². DEM ETOPO (HAVVA'daki koşu ağacından sabit bağ), bantlar `40,56,80`,
`MOTOR_YURUYUS=1`. **Senaryo:** 14 SENTETİK MÖ noktası (Ain Mallaha, Eriha, Abu Hureyra, Göbekli Tepe, Çayönü, Çatalhöyük, Carmo, Eridu, Uruk,
Ugarit, Hattuşa, Antakya, Ktesifon, bir k:4 köy) belleğe eklendi — **veri değildir, hiçbir dosyaya yazılmadı**. Gerçek 21 Sümer noktasının sahipliği yok.

### Neden gerekliydi — bugünkü motorun MÖ'sü (HEAD, yamasız)
| kesit | sahnedeki nokta | petek | boyanan | en büyük petek |
|---|---:|---:|---:|---|
| MÖ 9500 · 6000 · 3000 · 1000 · MS 500 (hepsi AYNI) | **4.720** | 257 | **1.392.167 km² = kara %98,8** | Hamâd 62.840 km² |

kur:'u olmayan ~2.900 şehir MÖ'de de "sahnede" sayılıyor, yalnız sahibi o güne yazılı olmayan nokta devredilmiyor
(`devir_kumesi` sadece sahipli noktayı devreder) ⇒ 14 gerçek MÖ noktasının peteği 4.700 hayalet komşu arasında sıkışıyor, kalan toprak onlara emiliyor.

### Yamayla — tavan etkisi (peteğin KENDİSİ: `petek_epok`, sahipli/sahipsiz ayrımından ÖNCE)
| kesit | sahne | **5 gün** (40 sa) | **10 gün** (80 sa, varsayılan) | 20 gün (160 sa, yalnız karşılaştırma) |
|---|---:|---:|---:|---:|
| MÖ 9500 | 21 (T:4) | 368.054 km² · %26,1 · en büyük 68.142 | **922.541 · %65,5 · 177.698** | 1.341.053 · %95,2 · 265.422 |
| MÖ 6000 | 20 (T:3) | 278.649 · %19,8 · 51.273 | **737.069 · %52,3 · 126.248** | 1.299.539 · %92,2 · 365.787 |
| MÖ 3000 | 21 (T:4) | 291.508 · %20,7 · 53.292 | **796.901 · %56,6 · 130.830** | 1.402.255 · %99,5 · 268.934 |
| MÖ 1000 | 19 (T:3) | 254.034 · %18,0 · 53.259 | **662.274 · %47,0 · 181.059** | 1.397.838 · %99,2 · 402.426 |

(T = senaryo noktası; kalanı gerçek Sümer noktaları — sahipsiz oldukları için boyamazlar, aşağıda.) Petek sayısı 19–21 (eski: 257).
Sahnedeki nokta 4.720 → 19–21. Tavanı aşan toprak (10 gün, MÖ 9500): **486.489 km² SAHİPSİZ** (`butce_disi_km2`) — "veri yok", "kültürsüz" değil.
**Bulgu:** 20 gün kutuyu %92–99 kaplıyor — Emre'nin uyardığı "kıtayı kaplayan petek" tam 20 günde başlıyor; 10 gün %47–66, 5 gün %18–26.

### Yoğunluk (PUAN) kapısı MÖ'de tavanı gizliyordu — yama kapıyı MÖ'de atlıyor
Hata ayıklama (`--ayikla`): tek noktalı MÖ 11999 gününde petek birleşimi 110.944 → kapı sonrası **60.892 km²** (kapı: 200 km içinde 4 puan; tek
nokta ≈ 200 km disk) ⇒ 10 günlük tavan kapının ARKASINDA kalıyordu, ayar yanıltıcı olurdu. MÖ günlerinde kapı artık uygulanmıyor
(`MOTOR_MO_PUAN_KAPISI=1` geri açar). **Tam hat çıktısı** (`devletler_harita.js`, 1.300 sn, hatasız): MÖ 9500'de 'bizans' (senaryo sahibi) boyası
447.520 km² ≈ T hücreleri toplamı 447.328 km² (kapı kesmiyor); MÖ 6000 251.691 (T 250.555); MÖ 3000 248.901 (T 251.442); MÖ 1000 119.343 (T 127.135) —
fark kıyı/sadeleştirme kılcalı (≤%6). Geri kalan peteğin (ör. MÖ 9500'de 475 bin km²) sahibi yok: gerçek Sümer noktaları `s:`siz ⇒ delik (Değişmez 1, veri işi).

### Dönem hattı MÖ'yü kaldırıyor mu (tam hat, küçük pencere = 1.300 sn)
`donemler.js`/`devletler_harita.js`/`ufuk_bantlari.js` yazıldı, çıkış 0; 'bizans' için **15 MÖ dönemi**, çakışma 0, sıfır uzunluk 0, negatif tarih
biçimi doğru (`-11999-01-01`…). Sınır: pencere dışı noktalar (Eridu/Hattuşa küçük kutuda) dönem üretmez — kusur değil, kutu etkisi.

### CE (1281+) değişmedi mi
* `petek_epok` + `devir_kumesi` 16 CE gününde (1281…1923) eski ↔ yeni **bit bit AYNI** (`kiyas h-eski h-yeni10`).
* Çıktı düzeyi (tam hat eski ↔ tam hat yeni, aynı kutu 33–47°D/30–41°K, aynı senaryo; havuz sırası farklı olduğundan koordinatlara çözülüp SHA-1): 1281+ için
  `devletler_harita.js` **677 dönem · geometri farkı 0 · yalnız-birinde 0**; `donemler.js` (Osmanlı o+v) **1.388 kayıt · fark 0 · yalnız-birinde 0**.

### Tarih başı merkez kuralı (k≥4) ve k:0
Veri: 4.706 nokta · derece {0:1.968, 1:382, 2:236, 3:1.367, 4:753} · kur: 1.793 · kur:'suz 2.913 · gerçek MÖ kur:'lu SAHİPLİ nokta 0.
| tarih | sahipli sahne | k0 | k4 |
|---|---:|---:|---:|
| 1300 | 2.645 | 483 (%18,3) | 670 (%25,3) |
| 1500 | 2.777 | 515 (%18,5) | 698 (%25,1) |
| 1700 | 3.277 | 836 (%25,5) | 723 (%22,1) |
| 1900 | 4.278 | 1.577 (%36,9) | 752 (%17,6) |

Kutuda etki (CE, 5 günlük tavan; `MOTOR_TARIH_BASI_MERKEZ=1`): petek 245→157, boyanan 1.392.056→1.281.058 km² (1500; −110.998, **−%8,0**; 1300 −92.717 · 1700 −108.383 · 1900 −88.356).
Yani k≥4 devri kutuda toprağın **%6–8'ini SAHİPSİZ bırakıyor** (4. derece tek başına tutan çöl/iç bölgeler 5 günlük bütçenin dışında kalıyor) — #126 deliğini kapatır ama başka delik açar.
k0 DIŞLANIRSA (k0+k4): kapsam %98,8→%70,5; MÖ'de sahne 2 noktaya iner (**21/21 Sümer noktası k:0**, senaryonun T noktaları dahil) ⇒ MÖ haritası boşalır.
**Karar (varsayılan): k:0 MERKEZ SAYILIR** (`MOTOR_MERKEZ_K0=1`). Gerekçe: ① k0 = "kademe yazılmamış", yoklukla aynı değil; ② 1500'de sahipli k0'ın 513/515'inin `m:` zinciri YOK ⇒ başka merkeze bağlanıp devredilemez;
③ MÖ'de bütün yeni noktalar k:0 geliyor. Öneri: k0'a kademe yazma işi veri tarafında; motor onları dışlamasın.
k4: 753 noktanın 577'sinin `m:` zinciri k≤3 merkeze kapanıyor, 176'sı kapanmıyor. `m:` merkezi ile EN YAKIN (kuş uçuşu) k≤3 aynı olan yalnız 102 (%18; `m:`'ye mesafe medyan 133 km, p90 419, max 917).
Kural "toprak yürüyüşle en yakın merkeze, k4 noktanın etiketi `m:` merkeziyle" okunarak uygulandı (toprak `m:` merkezine DEĞİL en yakın canlı merkeze gider).

### Renk (desenli ton)
`renkler.py`: `KULTUR_DESEN = {kimlik: (desen, opaklik)}` + `kultur_desen_dogrula()`; `BOYALAR` satırı yine `(ad, "#taban")` (tüm tüketiciler değişmedi).
İki yönlü sınav: iyi örnek temiz, 6/6 bozuk (BOYALAR'da yok · bilinmeyen desen · opaklık düşük/yüksek · çift değil · sayı değil) yakalandı. Sözlük BOŞ geldi (kimlik eklemek de tuzu değiştirir).

## ② Ne bulamadım / ölçemedim
* **Dünya ölçeği:** MÖ epokunun maliyeti yalnız kutuda ölçüldü (`petek_epok` 0,02–1 sn/epok). `_yr_epok_onar` ölü hücrelerin kümesini (`set(D.tolist())`) kuruyor; dünyada ölü küme ~6 M hücre ⇒ epok başına birkaç sn ve ~yüzlerce MB. Yüzlerce MÖ epoku için **ölçülmedi**; HAVVA koşusunda `varlık devri (petek_epok)` satırından okunur. Gerekirse `Dset`'i halka çevresine kırpmak (bellek yaması) hazır fikir.
* **Gerçek MÖ verisi yok:** 21 Sümer noktasında `s:` yok ⇒ boyamıyor (Değişmez 1: delik). Boya/harita görünümü gerçek kültür künyeleri gelmeden doğrulanamaz.
* **Arayüz:** "veri yok" etiketi (MÖ'de sahipsiz = veri yok, kültürsüz değil), desen raster'ı, lejant — yazılmadı (B/arayüz oturumu). Motor beyanı: `_VARLIK_PAY["butce_disi_km2"]` ve `mo_sahipsiz_km2`; çıktı şemasına DOKUNULMADI (`kodla` gidiş-dönüş riski).
* **MS 1–1281:** varsayılan `MOTOR_MO_SINIR=0001-01-01` ⇒ MS 500 hâlâ hayaletli (4.720 sahne / %98,8). `MOTOR_MO_SINIR=1281-01-01` ile MS 500: 10 sahne, %50,9. MS verisi inerken bu değer değişmeli (veri oturumu + Emre).
* `denetle.py` ana ağaçta D8 ölçemez (çıkış 2 beklenir); kabul ölçümü `push_kapisi.py` içinde.
* `m:` merkezine devir (k4 toprağının kendi merkezine gitmesi) uygulanmadı; yürüyüşle en yakın merkez.

## ③ Emre'den istediğim
1. **Tuz:** `uret_petek.py` + `renkler.py` değişti ⇒ bir sonraki tam inşa 7–8 saat. Onay: push `--tuz-onay` ile (CE çıktısı bit bit aynı, MÖ varsayılanı yeni).
2. **10 gün onayı:** 5 gün %18–26, 10 gün %47–66, 20 gün %92–99 (kutu karası). Öneri: **10**; ayar `MOTOR_MO_YURUYUS_GUN` (bant `MOTOR_UFUK_BANT`ta olmalı).
3. **`MOTOR_MO_SINIR`:** MS 1–1281 verisi inince `1281-01-01`'e çekmeyi öneriyorum (hayalet sorunu orada da var); hangi tarihte karar?
4. **k≥4 kuralını CE'ye açmak (`MOTOR_TARIH_BASI_MERKEZ=1`):** koşu emri ister; kutuda %6–8 yeni boşluk açıyor (5 günlük bütçe). Önce 10 günlük/B dolgusu mu, 4. derece için `m:` merkezine devir mi?
5. **k0:** merkez sayılsın (varsayılan) — onay.
