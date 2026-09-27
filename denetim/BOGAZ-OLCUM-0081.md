# BOGAZ-OLCUM-0081 — Sınıf B (H-0009 · H-0010 · H-0020) teşhisi

28 Eylül 2026 · işçi BOGAZ-OLCUM-0081 · şartname `oturumlar/PAKET-0080-BOLUSUM.md ④`
Evren: **koşu 16** (`C:/atlas-kosu16`, `5ada2e63`) — önbellek `k1` KARA'sı (6.845 parça,
göller çıkarılmış) + `data/petek_govde.js` + `data/donemler.js`. **Salt okundu.**
Aletler: `denetim/BOGAZ-OLCUM-0081.py` (ızgara + boğazlar + Tiflis) ·
`denetim/BOGAZ-OLCUM-0081-sinif.py` (küresel parça sınıfı). Çıktılar aynı adlı `.json`.
Sınav: benim ızgaram koşu 16'nınkiyle **birebir** — kara hücresi 6.095.287 = `kosu16.log:441`.

---

## 0. 🔴 Öncül düzeltmesi — `MOTOR_YURUYUS` koşu 16'da KAPALIYDI

Sevk "koşu 16'da AÇIKTI" diyordu. Ölçüm:
- `kosu16.log`da `🚶` satırı **0**; `uret_petek.py:1174` bayrak açıkken bu satırı basar.
- Aşama listesinde `YÜRÜYÜŞ: … saatlik bütçe bölgesi` (`:1800`) **YOK**. Sıra:
  Dijkstra → A/B (eğim) → A/B (nehir) → Voronoi → … → Kıyı kesimi + A1 → Ada kuralı →
  parçaları sına ve devret → Çöl tavanı.

⇒ Koşu 16'da kara-kara sınırı **Voronoi + A1 tavanı** çizdi; Dijkstra yalnız düz hattı
denizden geçen ≥200 km² parçalara sorulur (`:3837-3845`).

## 1. Sınav: ızgara Boğaz'ı KARA mı DENİZ mi sayıyor?

**Cevap: (a) — ama haritayı ızgara boyamıyor.** İki ölçüm ayrı ayrı:

### 1a. Izgara suyun üstünden atlıyor (a şıkkı DOĞRU)
Motorun formülü aynen koşturuldu (hücre merkezi `KARA` içinde mi). Merkezden merkeze
doğrusu sudan geçen 8-komşu adım sayıldı (11 örnek noktası, ~0,4 km aralık):

| boğaz | pencere kara/deniz | gerçek yaka | ızgara bileşeni | sudan geçen adım | kaldırılınca dolanma |
|---|---|---|---|---|---|
| İstanbul | 67 / 54 | 2 | **1 (köprülü)** | 7 | >400 km |
| Çanakkale | 169 / 103 | 3 | 2 (köprülü) | 7 | >400 km |
| Messina | 57 / 64 | 2 | 1 (köprülü) | 2 | >400 km |
| Öresund | 153 / 103 | 6 | 3 (2 köprü) | 4 | >400 km |
| Küçük Belt | 79 / 42 | 3 | 1 (köprülü) | 19 | 22 km |
| Menai | 58 / 32 | 2 | 1 (köprülü) | 9 | >400 km |
| Eğriboz | 61 / 20 | 2 | 1 (köprülü) | 4 | >400 km |
| Bonifacio | 50 / 71 | 12 | 2 (köprülü) | 6 | >400 km |
| Kerç | 81 / 175 | 3 | 3 | 6 | köprüsüz |
| Bab-ül Mendeb | 85 / 140 | 5 | 2 | 0 | köprüsüz |
| Cebelitarık | 129 / 96 | 3 | 2 | 1 | köprüsüz |
| Hürmüz | 31 / 258 | 3 | 3 | 6 | köprüsüz |

Yani hücreler DENİZ olarak da temsil ediliyor (İstanbul penceresinde 54 deniz
hücresi), ama **çapraz adım ara hücre sınamıyor** (`_kv_ara_kara` yalnız at hamlesine,
`:1472`), ve iki yakanın kara merkezli hücreleri köşeden köşeye bitişiyor.
**Küresel:** sudan geçen adım **50.617** · küme **8.720** · dolanması 3×+20 km'yi aşan
deniz kümesi **2.112** (göl kümesi 427). Çoğu fiyort/ada kıyısı (Şili, Norveç, Kanada).

### 1b. Ama H-0009/H-0010'u ızgara ÜRETMİYOR — (c) şıkkı
Koşu 16 `petek_govde.js`inde **Üsküdar peteğinin Avrupa yakasında 13,6 km²'lik TEK
parçası** var (temsil noktası 28,987D/41,073K, Beşiktaş kıyısı; tohumdan 6,1 km).
- 13,6 < 200 km² ⇒ `:3837` (`KV_MIN_KM2`) parçayı **ızgaraya hiç sormadan** Voronoi
  sahibinde bırakıyor. Izgaranın ne dediği bu parça için önemsiz.
- Ada kuralı (`:3624`) kesemiyor: Avrupa ile Asya `KARA`da **aynı bileşen**
  (Kafkasya üzerinden bağlı).
- Bileşen kilidi (`:3870`) aynı sebeple devreye girmiyor.

⇒ **Mekanizma:** Voronoi suyu görmez → kıyı kesimi (`× KARA`) karşı yakadaki payı kara
olduğu için bırakır → ada kuralı aynı bileşen diye kesmez → 200 km² tabanı ızgarayı
atlar. Dört aşama tek tek "doğru", aralarında sözleşme yok (D-ailesi: A1/yetim yüz ikizi).

H-0010 ("Avrupa yakasında Osmanlı toprağı bu devirde doğru değil") aynı parçadır:
Üsküdar Osmanlı, İstanbul 1453'e kadar Bizans ⇒ 1453 öncesi Beşiktaş kıyısı Osmanlı
boyanır.

## 2. Sınıf — aynı kusur kaç yerde

Koşu 16 çıktısında **tohumu içermeyen ve tohumdan düz hattı denizden geçen parça:**

| kova | parça | km² |
|---|---|---|
| hepsi | 4.879 | 1.014.077 |
| 200 km² altı (ızgaraya sorulmadı) | 4.262 | 155.632 |
| ↳ düz hattı KARADAN geçen başka tohumu var (**asıl kusur adayı**) | **137** | **5.969** |
| 200 km² üstü (ızgara "aynı sahip" dedi / kilit / kararsız) | 617 | — |

200 altı 4.262'nin çoğu noktasız ada ya da kendi tohumunun körfez karşısı (ör. Kopenhag
→ Amager, 6,1 km; kara hatlı başka aday yok) — meşru. Kusur adayları (137'den seçme):

| km² | petek → | kara hatlı en yakın aday | not |
|---|---|---|---|
| 197,1 | Helsinki → Estonya kıyısı | Tartu 141 km | 88 km deniz aşıyor; Estonya'da yakın tohum yok |
| 195,0 | Kırşehir | Ankara 107 km | göl (Tuz/Hirfanlı?) — ölçülmedi |
| 185,6 | **Kilitbahir → Anadolu yakası** | Çanakkale 27 km | Çanakkale Boğazı |
| 122,8 | **Sebte → İspanya kıyısı** | Ronda 81 km | Cebelitarık |
| 129,1 / 76,1 | Ayvalık | Edremit / Bergama | körfez |
| 94,6 | Pelekanon (Eskihisar) | Yalova 14 km | İzmit Körfezi |
| 89,0 | **Bolayır → Anadolu** | Biga 28 km | Çanakkale |
| 75,4 | **Çimpe** | Saroz kuzey kıyısı 18 km | Saroz/Gelibolu |
| 50,7 | Şarköy | Karabiga 21 km | Marmara |
| 27,1 | **Çanakkale → Avrupa** | Çimpe 27 km | Çanakkale |
| 13,6 | **Üsküdar → Beşiktaş** | İstanbul 7,3 km | **H-0009/H-0010** |

Tam liste: `denetim/BOGAZ-OLCUM-0081-sinif.json` (`esik_alti` + `aday_kara_hatli`).
Ayrıca Taman 109 km² ve Yenikale 51,6 km² Kerç'in karşı yakasında; kara hatlı aday yok.

## 3. H-0020 — Tiflis'in kuzey üçgeni

- **"5 günlük yürüyüş uygulanıyor mu?" → HAYIR** (koşu 16'da bayrak kapalı, §0).
- Tiflis peteği **13.796 km²**, kutu 43,95-45,36D / 40,84-42,41K; kuzey ucu
  45,29D/42,41K, tohumdan **88 km** (A1 tavanının 200 km'sinin altında ⇒ tavan kesmiyor).
- DEM profili (tohum → kuzey ucu): 441 → … → **2.873 m** azami, uçta 2.260 m ⇒ petek
  Büyük Kafkas'ın **güney yamacına** tırmanıyor.
- **Sebep noktasızlık (§2):** 43,8-46,5D × 41,5-43,3K kutusunda koşu 16'nın okuduğu
  yerleşim **yalnız üç**: Tiflis · Zagem (83 km) · Vladikavkaz (146 km). Gori, Mtskheta,
  Telavi, Duşeti/Ananuri, Tianeti, Kazbegi, Signakhi veride **yok** (`data/yerlesimler*.js`
  adla tarandı: 0). Üçgen, bu üç tohumun Voronoi açıortaylarının ürünü.
- **Çare motor değil veri:** Kartli-Kakheti iç yerleşimleri (yerleşim yoğunluğu, §6).
  Yürüyüş bayrağı açılsa da nokta yokken ufuk bölgesi Tiflis'e düşer.

## 4. Yama taslağı — `denetim/BOGAZ-OLCUM-0081-yama.diff`

`git apply --check` **temiz** (C:\atlas HEAD'e karşı) · yamalı kopya `py_compile` geçti.
**Koşturulmadı** — `uret_petek.py` Oturum 0'ın; motor tuzunu değiştirir ⇒ §9.1 ②
**tam inşa koşusuna** girmeli, veri koşusuna değil.

İki değişiklik, `MOTOR_BOGAZ_KAPALI=1` ikisini birden eski davranışa döndürür (A/B):
1. **Boğaz yasağı:** Dijkstra öncesi, kıyı hücresine dokunan her adımın merkezden merkeze
   doğrusu 11 noktada sınanır; KARA dışına çıkan adım `_KVSU` kümesine girer; iki
   Dijkstra gövdesi (`_kv_dijkstra`, `_kv_iki_etiket`) aynı satırla atlar.
   Öngörü: ~101.000 yönlü kenar (8 komşu; 16 komşuda daha çok). Maliyet: ölçümümde tam
   küre ~50 sn.
2. **200 km² tabanı yalnız kara hattında:** düz hat testi tabandan ÖNCE yapılır; denizden
   geçen küçük parça artık ızgaraya sorulur. Temsil noktası su hücresine düşerse `_s < 0`
   ile zaten karar verilmez (eski güvenlik korunur).

**Öngörüler (koşudan önce yazıldı, çürütülebilir):**
- "parça el değiştirdi" 138'den (koşu 16) **en az +137** artar; üst sınır 4.262.
- Üsküdar'ın Beşiktaş parçası İstanbul'a (ya da Avrupa yakasındaki başka tohuma) geçer.
- Kilitbahir'in Anadolu payı Çanakkale'ye, Çanakkale'nin Avrupa payı Kilitbahir/Çimpe'ye.
- ⚠️ Değişmez 1 (sahipsiz) **ARTABİLİR**: yasak bazı kıyı hücrelerini erişilemez
  yapabilir (tek köprüsü sudan geçen adım olan kara cebi). Kararsız sayısı (`_kvkararsiz`)
  ve sahipsiz birlikte izlenmeli.
- ⚠️ Helsinki → Estonya parçası kara hatlı yakın tohum bulamazsa ızgara onu **Tartu**'ya
  verir (141 km) — denizaşırı Helsinki'den iyi, ama doğru cevap Estonya kıyısına nokta
  eklemektir (noktasızlık, §2).

## 5. Ölçülemedi / bulunamadı
- `_kvsahip` etiketi: önbellekte tutulmuyor, ancak koşuyla okunur. 200 altı parçalarda
  kullanılmadığı için H-0009/H-0010 teşhisini değiştirmez.
- 200 km² üstü 617 parçanın kaçının köprülü ızgara yüzünden yanlış sahipte kaldığı:
  ölçülemedi (yine `_kvsahip` gerekir) — yama ① bunu koşuda kendiliğinden gösterir
  (el değiştiren parça farkı).
- Örnek aralığından dar hatlar (Eğriboz 40 m, Menai 200 m) `KARA_TOL=0.002` (~220 m)
  sadeleştirmesiyle maskede zaten kapanmış olabilir; ölçülmedi.
