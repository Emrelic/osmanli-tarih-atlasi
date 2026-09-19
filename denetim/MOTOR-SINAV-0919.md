# MOTOR-SINAV — ara rapor (19 Eylül 2026)

Şartname: `oturumlar/MOTOR-SINAV.md` · mimari: `oturumlar/MOTOR-LEGO.md`.
Alet: `arac/motor_esitlik.py` (`kiyas` · `kos` · `etki`). Koşular `C:/atlas-sinav`
worktree'sinde (motor-hiz `9a7b6be`, motor sha256 `9c17ee92…`), çıktılar
`C:/atlas-sinav-cikti/<ad>/`. Önbellek KAPALI, bayrak kapalı (MOTOR_YURUYUS yok),
MOTOR_PARALEL_KAPALI=1, MOTOR_EGIM_AB_KAPALI=1, MOTOR_NEHIR_AB_KAPALI=1 (yalnız
ölçüm amaçlı ikinci Dijkstra'lar kapalı).

## Yöntem
Motor metnine yalnız üç yama (dosyaya değil, `arac/_sinav_kesit.py` kopyasına):
① `BOLGE = box(kutu)` ② `asama()` girişinde salt-okur döküm kancası — her aşama
sonunda `PETEK`/`PETEK_TAM`/`PETEK_D` (ad → WKB) ve Dijkstra ızgarası (hücre → sahip
adı), yalnız değiştiğinde ③ senaryo: `YERLER = girdi.yukle()`den hemen sonra bellekte
(girdi dosyası değişmez). Nokta ekleme YERLER SONUNA yapılır (indeks kayması yok).

## Kutular ve senaryolar
| ad | kutu | senaryo | durum |
|---|---|---|---|
| h_taban | 14,43,26,50 (112 nokta) | — | ✓ 8233 sn (makine %100 doluyken) |
| h_taban2 | aynı | — (determinizm) | ✓ 3850 sn |
| h_nokta | aynı | Segedin kopyası → Kecskemét (19.698, 46.903) | geometri aşamaları bitti, M-4638 ile durduruldu |
| h_sahip | aynı | Segedin 1918-11-11..1923-10-29 macaristan-naiplik → yugoslavya | bekliyor (koşu 14) |
| h_tarih | aynı | Segedin d[0].f 1543-08-10 +365 gün (s[0].t birlikte) | bekliyor |
| a_taban | 8,20,22,32 (39 nokta, 12 dolgu) | — | bekliyor |
| a_nokta | aynı | Sebha kopyası → (16.2, 26.6) çöl | bekliyor |

## Ölçülenler
**Determinizm:** h_taban ↔ h_taban2 → 4 dosyanın 4'ü BİT BİT AYNI
(`donemler.js a26af587…` · `devletler_harita.js fb5f47a2…` · `bolgeler.js 40406e18…` ·
`devirler.js e8d48107…`). Aynı girdi + aynı kod, sıralı yol: motor deterministik.

**h_nokta — aşama aşama etki (h_taban'a karşı):**
| aşama | değişen | en uzak | yorum |
|---|---|---|---|
| Dijkstra ızgarası | 205 hücre | 48 km | yerel |
| Voronoi PETEK | 6 hücre | 82 km | yerel |
| Kıyı kesimi PETEK_D | 12 hücre | **511 km** | 6 gerçek (≤85 km, 429–1567 km²) + 6 UZAK bit farkı |
| Ada kuralı / parçaları sına PETEK_D | 12 hücre | 478 km | Klis (447 km) eklendi, Vis düştü |

Uzak farklar: Vis 511 · Hvar 478 · Brač 465 · Livno 401 · Eperjes 260 · Kassa 233 km.
Alan farkı 0,0000 km², köşe sayısı aynı; köşe kayması 3,6e-15–1,8e-14° (ULP);
Kassa'da halka başlangıç köşesi dönmüş. Kaynak: `PETEK_D` `PETEK_TAM`dan doğar;
`PETEK_TAM` örtü boru hattının (ortak kenar ağı → polygonize → coverage_simplify)
çıktısıdır ve üç basamak da BÜTÜN örtüyü birlikte işler. Hangi basamak (ölçülemedi —
kanca PETEK_TAM'ı bu koşuda yakalamıyordu; genişletildi).

⇒ **C katmanı bit düzeyinde yerel değil.** Karo+hale önbelleği, sıfırdan koşuyla bit
bit aynılığı ancak örtü boru hattından sonra kanonikleştirme (set_precision +
normalize) ya da karo başına örtü ile sağlayabilir. Çıktı dosyasına (0,001°) inip
inmediği: senaryo çıktısı koşu 14'ten sonra ölçülecek.

## Koddan doğrulanan riskler (M-4576 ile MOTOR-YURUYUS'a gitti)
R1 epok devri komşusuz → küresel en yakın (`petek_epok`, main L4272-4280) · R2 ölü
zinciri bileşen çapı kadar (L4166) · R3 puan/dolgu ≤400 km + örtme gölgelemesi
(L4864, L5150-5222) · R4 süreç içi önbellek anahtarları YERLER indeksli (L4213, L4891).

## Gemini görüşü (gemini/MOTOR-LEGO-GORUS-0919.md) sayımı
- Satır numarası iddiaları: 29 → **25 doğrulandı** (±3 satır), **4 yanlış** (iddia → gerçek:
  BOLGE L1789 → L183 · ThreadPoolExecutor L5570 → L5518 · `baglanti` döngüsü L4181 →
  L4187 · `havuza` L5589 → orada değil). `DAG_HAT` adında değişken yok (yanlış ad).
- Mekanizma iddiaları: deque+submit/popleft gönderim sırası **doğrulandı** · tarihler
  set→sorted **doğrulandı** · L1229 tamsayı küme **doğrulandı** · A1 TAVAN_KM 200,
  çöl 300 km / su muafiyeti 30 km **doğrulandı** (değer olarak) · puan kapısı
  "bağlı gövdenin toplam puanı eşik altındaysa gövde silinir" **YANLIŞ** (öyle bir
  kural yok; puan hücre başına yerel toplam) · epok devri "ilk canlı komşu halkasıyla
  sınırlı" **YANLIŞ/EKSİK** (komşusuz grup küresel en yakına gider) · "alan yuvarlaması
  float farkını emer" **YANLIŞ EKSEN** (bit denkliği koordinat sorusudur; ULP farkı
  yukarıda ölçüldü) · karo yapısı yok **doğrulandı** · yürüyüş ~200 km **ölçülemedi**.
