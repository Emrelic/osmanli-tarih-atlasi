# MOTOR-TASARIM — `enklav:true` presidionun hücresi kale yarıçapıyla sınırlı (MOTOR-ENKLAV-KIRP-1104)

Yazan: alt ajan (UMIT dışı, worktree `agent-a269531b59a56ecc8`) · 4 Kasım 2026 · soru: `MOTOR-SORU.md` (LAB).
Tam koşu YAPILMADI. Ölçümler: koşu 32 `data/petek_govde.js` (worktree'de `coz-c` ile çözüldü) + bugünkü girdi.

## 1. Kusurun asıl yeri — ÖLÇÜLDÜ, varsayım düzeltildi

LAB'ın varsayımı "kalenin zamansız Voronoi hücresi karaya taşıyor"du. Koşu 32'nin zamansız taban peteğinde
(`PETEK_D`, `petek_govde.js`) bu **yok**:

| nokta | taban hücresi (koşu 32) | not |
|---|---|---|
| Oran | **0 km²** (boş) | Oran'ın kara payı 7 km'deki Mersa'l-Kebîr'in hücresinde (766 km², tek parça) |
| Bâdis (Peñón de Vélez) | **0 km²** (boş) | nokta adada, NE 10m karasında değil |
| LAB Oran parçasının temsil noktası (35,43K −0,54D) | Sîdî Bel Abbès'in hücresinde (7.196 km²) | SBA `kur: 1843-01-01` ⇒ 1843'ten önce SAHNEDE DEĞİL |
| LAB Bâdis parçasının temsil noktası (34,82K −4,06D) | Nekor'un hücresinde (3.992 km²) | Nekor `bit: 1281-01-01` ⇒ hep sahne dışı |

(İndeks eşlemesi parmak izinde ayrışıyor — 96 dosya; ama 5.500 dolu hücrenin 5.466'sı kendi noktasına
< 0,05°, yukarıdaki satırlar nokta-içerme ile de tutarlı.)

⇒ Parça, **`petek_epok()`teki varlık devrinden** doğuyor: sahnede olmayan komşunun (SBA, Nekor) peteği
yürüyüşle sahnedeki komşulara paylaştırılırken **presidio da ALICI** oluyor. `_ENKLAV` bugün yalnız yetim
**yüz** devrini kesiyor (`uret_petek.py` ~4108-4137); varlık devrinde hiç sorulmuyor. Pay Oran Sebhası'nın
güneyine düştüğünde kaleden kopuk "enklav parçası" oluyor.

## 2. Değişiklik (yalnız `arac/uret_petek.py`, bayrağa bağlı)

`petek_epok(g)` devri bitirdikten **sonra**, `g` gününde `enklav:true` dönemi süren (ve `d != __BOSLUK__`)
**sahnedeki** her nokta j için:

1. j yalnız `taban[j] ∩ daire(j, R)` tutar (taban = `PETEK_D`, MÖ gününde bant tabanı) — yani ① devirden
   aldığı payın tamamını bırakır, ② kendi taban hücresinin kaleden R km ötesini bırakır. Dairenin içinde de
   olsa kaleden kopuk bileşen (lagün/burun ötesi) tutulmaz.
2. Artık bileşen bileşen dağıtılır: bileşenle ≥ ~1 km **ortak kenar** paylaşan sahnedeki enklav-OLMAYAN
   komşular arasında yerel Voronoi (motorun ③ yoluyla aynı kalıp). Voronoi payı alıcının hücresine
   değmiyorsa ona değen komşuya geçer (tur tur; köşe teması sayılmaz). Hiçbir komşuya değmeyen bileşen
   kaleye değiyorsa kalede kalır (Melîle'nin ardındaki Üç Çatal burnu), değmiyorsa en yakın enklav-olmayan
   sahnedeki noktaya.
3. **İşlemsel:** kopya üzerinde; istisna olursa o gün kırpmasız devam eder ve `🔴 ENKLAV KIRPMA DÜŞTÜ` basar.

Yeni öğeler: `ENKLAV_KIRP_KM` (ortamdan), `enklav_gunu(g)`, `_enklav_disk`, `_enklav_kirp`,
`_varlik_anahtar(g)`; `petek_epok` önbellek anahtarı bayrak açıkken `(eski, "ENKLAV", enklav_kümesi)`,
kapalıyken **birebir eski**. Logda her koşu `🏰 enklav kırpma KAPALI|AÇIK …` satırı; `_VARLIK_DEVIR`
kaydına `ENKLAV KIRP 10 km` satırları, `_VARLIK_PAY`a `enklav_kirp`, `enklav_kirp_km2`.

**GÜNE BAĞLI, zamansız değil.** Bu, zamansız kırpmanın (yüz aşamasında) en büyük riskini kaldırır — ölçüldü:
39 enklav noktasının enklavsız dönemleri 20.278 dönem-yılı, bunun 5.232'sinde en yakın komşunun sahibi
farklı (Kefe/Sudak 1475-1774 Osmanlı ↔ komşu Kırım tâbi; Oran/Mersa'l-Kebîr 1708-32, 1792-1831 Osmanlı ↔
Ayn Temûşent tâbi; Malaka 1825-1942 …). Güne bağlı kırpma o dönemlere dokunmaz (sınandı: Oran 1800 ⇒
Mersa'l-Kebîr 3.316 km² aynen kalır; Kırım 1600 ⇒ kırpma 0).

Dokunulmayan: yetim yüz kuralı `_ENKLAV` (zamansız, olduğu gibi) · renkler.py · girdi.py · motor_onbellek.py.

## 3. Bayrak ve varsayılan — öneri

- `MOTOR_ENKLAV_KIRP_KM=<km>`; yok ya da 0 ⇒ kapalı. **Kodda varsayılan KAPALI**: çıktı bit-bit eski
  (enklav_gunu boş küme döner, anahtar eski biçim — sınandı: `R=0` satırları). Gerekçe: açmak Angola/Hindistan/
  Fas'ta on binlerce km² yer değiştiriyor (§5) — o karar Emre'nin.
- ⚠️ Kapalı bile olsa `uret_petek.py` değiştiği için motor özeti ⇒ **tuz değişir ⇒ tam yeniden inşa**.
  Kod tek başına "ücretsiz" değil; Koşu 34 zaten tam inşaysa ek bedeli yok.
- Önerim: Koşu 34 bayraklarına `MOTOR_ENKLAV_KIRP_KM=10` eklensin (Emre §5 listesini onaylarsa).

## 4. R (ve B) — ölçerek

| R | Oran 1600 (pencere) | Bâdis 1600 | çelişki (nokta başka sahibin bölgesinde) |
|---|---|---|---|
| 5 km | Melîle 51 · Mersa 46 km² kalır | Melîle 51 | **1 YENİ: Oran (ispanya) ∈ Ayn Temûşent (OSMANLI)** |
| **10 km** | Melîle 204 · Mersa 182 km² | Melîle 204 | **0** |
| 15 km | Melîle 310 · Mersa 343 km² | Melîle 310 | 0 |

- **R = 10 km** öneriyorum: (a) en küçük çelişkisiz değer — Oran'ın kendi taban hücresi boş, Oran noktası
  Mersa'l-Kebîr'den 7 km'de; R=5'te Oran şehri Osmanlı boyasında kalıyor. (b) Izgara adımının (KV_ADIM
  0,05° ≈ 5,5 km) ~2 katı: kırpma ızgara gürültüsünün altına inmez. (c) Kıyıda yarım daire ≈ 150-200 km²:
  haritada görünür, kalenin karadaki tahkimat kuşağını (Oran-Mersa'l-Kebîr kale halkası, Sebte/Melîle
  "campo"su) kapsar, hinterland değildir.
- En yakın enklav-olmayan komşu < 2R=20 km olan 6 nokta (Balaklava 11,9 · Melîle 13,1 · Amasra 13,3 ·
  Tranquebar 12,9 · Kerç 13,8 · Yenikale 18,9 km) için Voronoi zaten dar; R onları az keser.
- **B (kıyı tamponu) gerekmez:** kırpılan hücre zaten KARA'ya kesilmiş taban hücresi; kıyıdaki noktanın
  dairesi kendiliğinden kıyı yarım dairesidir. İç kara enklavları (Massangano, Kambambe, Cinci, Hûglî,
  Çandernagor) kıyıda değil — kıyı tamponu onları sıfırlardı.

## 5. Etkilenen `enklav:true` noktalar — 39 nokta

Koşu 32 taban hücresi (nokta-içerme; `*` = nokta hiçbir hücrede değil) ve R dışında kalan (bayrak açıkken
**yalnız enklav dönemlerinde** komşuya gider). Devirden aldığı pay bu tabloda YOK (güne bağlı; §6).

| nokta | taban km² | R10 dışı km² | enklav dönemi | en yakın enklav-olmayan |
|---|---|---|---|---|
| Massangano | 18.256 | 17.941 | 1583-1975 portekiz-angola | Kabasa 107,6 |
| Kambambe | 18.150 | 17.835 | 1604-1975 portekiz-angola | Kabasa 88,9 |
| Hûglî / Çandernagor (aynı hücre) | 14.406 | 14.202 | 1580-1632 / 1688-1950 | Kalküta 36 / 32 |
| Madras | 12.963 | 12.749 | 1639-1757 | Kançipuram 67,1 |
| Cinci | 12.846 | 12.539 | 1750-1761 fransa | Kançipuram 73,1 |
| Lugos | 6.911 | (0 — `__BOSLUK__`, kırpılmaz) | 1689-1691 | Lippa 47,6 |
| Safi | 6.298 | 6.073 | 1488-1541 | Sûvayra 100,8 |
| Pondişeri | 6.065 | 5.883 | 1674-1954 (8 dönem) | Kaveripattinam 87,7 |
| Malaka | 6.061 | 5.893 | 1511-1825 | Muar 39,1 |
| Agadir | 4.756 | 4.524 | 1505-1541 | Tarûdant 69,3 |
| Azemmûr | 4.668 | 4.436 | 1513-1541 | Dârülbeyzâ 76,6 |
| Nagazaki | 4.536 | 4.302 | 1580-1587 | Kumamoto 77,8 |
| el-Hüseyme / Bâdis* | 4.260 | 4.135 | 1673-2000 / 1564-2000 | Nekor 20,7 / 45,8 |
| Mamûra | 3.906 | 3.746 | 1614-1681 | Rabat 30,1 |
| Mazagan | 3.834 | 3.693 | 1514-1769 | Dârülbeyzâ 92,0 |
| Sevâkin | 2.384 | 2.170 | 1884-1923 ingiltere | Bûr Sûdân 58,1 |
| Atapupu | 1.899 | 1.724 | 1818-1949 | Maliana 38,2 |
| Lifau | 1.865 | 1.698 | 1702-1923 | Noemuti 39,3 |
| Arzila | 1.505 | 1.335 | 1471-1549 | Kasrülkebîr 53,0 |
| el-Arâiş | 1.436 | 1.251 | 1610-1689 | Kasrülkebîr 31,2 |
| Bicâye | 1.269 | 1.077 | 1510-1555 | Akbû 57,1 |
| Bombay | 812 | 737 | 1665-1757 | Thane 31,8 |
| Tranquebar | 802 | 673 | 1620-1845 | Kaveripattinam 12,9 |
| Calais | 772 | 559 | 1347-1558 | Boulogne 30,9 |
| Oran* / Mersa'l-Kebîr | 0 / 766 | 0 / 584 | 1509-1708, 1732-1792 | SBA 56 / 60 |
| Amasra | 682 | 541 | 1281-1459 cenova | Bartın 13,3 |
| Tanca | 655 | 445 | 1471-1684 | Tıtvân 45,2 |
| Melîle | 627 | 451 | 1497-2000 | Nador 13,1 |
| Sebte | 526 | 426 | 1415-2000 | Tıtvân 34,9 |
| Cebelitarık | 506 | 472 | 1704-2000 | Tıtvân 62,5 |
| Cerbe | 495 | 194 | 1560-03..07 | Cerciş 41,2 |
| Kerç | 434 | 232 | 1774-1783 rusya | Nymphaion 13,8 |
| Sudak | 364 | 146 | 1365-1475 cenova | Eski Kırım 22,5 |
| Kefe | 290 | 102 | 1281-1475 cenova | Eski Kırım 21,6 |
| Balaklava | 160 | 14 | 1357-1475 cenova | İnkirman 11,9 |
| Yenikale | 96 | 25 | 1774-1783 rusya | Taman 18,9 |

Dünya toplamı (taban etkisi, devir yok, R=10, güne bağlı): 1500: 6 presidio 8.279 km² · 1600: 8 / 43.207 ·
1700: 12 / 70.411 · 1800: 10 / 54.813 · 1900: 10 / 52.142 km². **Büyük kalemler Osmanlı dışında**
(Angola ~35.800, Hindistan GD ~22.000, Hûglî 14.200, Malaka 5.900, Fas kıyısı). Haritada görünür değişiklik;
`enklav:` bayrağının o noktalarda doğru olduğu (ör. Massangano/Kambambe 1583-1975 "yalnız kale" mi)
veri sorusu — ayrı denetlenmeli.

## 6. Sınama — yöntem ve sayılar

Motorun bir bölgesini/gününü tek başına üreten bir yol **yok** (bölge penceresi bayrağı yok; `BOLGE` sabit).
Yapılan iki kesit sınaması — ikisi de motordaki **gerçek** işlevleri AST ile söküp koşturur (kopya değil):

**(a) `sina_enklav_kirp.py`** — `_enklav_kirp` + bağımlılıkları; girdi koşu 32 taban petekleri, devir
pencere içinde `kur>g`/`bit<=g` ile, paylaştırma ③ yolunun (yerel Voronoi) yeniden yazımı. 7 pencere, 15 kesit
(çıktı `sina_enklav_kirp.out.txt`).
**(b) `sina_petek_epok.py`** — **motorun gerçek `petek_epok`'u** (yaması dahil), `_olu_bilesenler`,
`_canli_komsular` ile; stub: `MOTOR_YURUYUS=False`, `devir_kumesi` pencere yaklaşığı. Bayrak KAPALI/AÇIK
karşılaştırması (çıktı `sina_petek_epok.out.txt`):

| kesit | kapalı | açık (R=10) |
|---|---|---|
| Oran 1600 | Melîle 4.740 · Mersa'l-Kebîr 3.316 km² (devirden aldıkları dahil) | 204 · 182 km²; 7.670 km² → Nedrûme, Vecde, Debdû, Mustagānim, Muaskar, Ayn Temûşent |
| Oran 1800 (Osmanlı devri) | Mersa 3.316 | **3.316 (kırpılmadı ✓)**; yalnız Melîle |
| Bâdis 1650 | Melîle 4.640 | 204 |
| Kırım 1400 | Kefe 290 | Kefe 187 · Sudak 218 · Balaklava 146 (300 km² → Eski Kırım, Arabat, Karasubazar, Mankup, İnkirman) |
| Lugos 1690 `__BOSLUK__` | — | **kırpma 0 ✓** |
| her kesitte | | noktasız parça **yeni 0**, nokta-başka-sahip çelişkisi **0**, alan korunumu farkı ≤ 0,06 km² |
| önbellek anahtarı | eski biçim ✓ | `(…, "ENKLAV", küme)` ✓ |

(a)'da ayrıca: Fas kuzeyi 1650 çelişki 1 → 0 (Sebte/Tanca/el-Arâiş/Mamûra), Hindistan GD 1700 noktasız parça
2 → 1 (karnatik 41 km² kapandı; kalan 52 km² tancur-maratha kırpmayla ilgisiz, önce de var), Angola 1700 ilk sürümde 71 km² YENİ kopuk
Kongo payı üretti ⇒ "ortak kenar ≥ 1 km" + tur tur yeniden atama eklendi ⇒ 0.

**Sınanamayan / ölçülemeyen (ölçülemedi ≠ temiz):**
- **LAB'ın 1.430 / 174 km² parçası bu yaklaşıkta YENİDEN ÜRETİLEMEDİ** ("önce" sütunu her iki pencerede
  0 noktasız parça; Voronoi devri Oran'ın payını Sebha'nın kuzeyinde bıraktı). Yani o iki sayının sıfıra
  indiği **ölçülmedi**; ölçülen, mekanizmanın kesilmesi: presidionun devirden aldığı her şey (Mersa 3.316 →
  182, Melîle 4.740 → 204) bırakılıyor — parçanın doğabileceği tek kaynak bu.
- `YÜRÜYÜŞ` (ızgara) paylaştırma yolu ve süreç işçileri (`MOTOR_SUREC_ISCI=2`) bu sınamada koşmadı. Yama
  devirden SONRA ve yoldan bağımsız çalıştığı için aynı davranış beklenir — ama beklenti, ölçüm değil.
- Ek süre ölçülmedi: anahtar enklav kümesiyle bölündüğü için yeni `petek_epok` hesapları doğar
  (enklav dönem sınırı ~80 gün; çağrı ~15 sn ⇒ tahmin ≤ +20-30 dk).
- Kabul ölçümü koşudan sonra: `olc_enklav_1103.py` (E082/E083/E084/E104 kapanmalı) + logdaki `🏰` satırı.

## 7. Riskler

1. **Büyük ve görünür yer değiştirme Osmanlı dışında** (§5). Bayrak açılmadan önce Emre'nin onayı.
2. Alıcı sahnedeki ama **o gün sahipsiz** bir nokta olursa artık sahipsiz kalır (delik). Sınamada görülmedi.
3. Yetim yüz kuralı hâlâ zamansız: enklav noktası yetim yüz emmiyor (eski karar, 1.609 km² bedel) — ayrı konu.
4. Enklav noktasının taban hücresi boşsa (Oran, Bâdis) o gün presidio haritada hiç toprak göstermez;
   Oran'ı Mersa'l-Kebîr'in dairesi kapsıyor (R ≥ 7 km şartı), Bâdis adası zaten NE karasında yok.
5. `_deger` eşiği (ortak kenar ≥ 0,01°, tolerans 0,002°) çok dar kıstakta komşuyu "değmiyor" sayabilir ⇒
   bileşen kalede kalır ya da en yakına gider; sınamada etkisi 0 ölçüldü.
6. Tuz: `uret_petek.py` değişti ⇒ bayrak kapalı olsa da tam inşa.
