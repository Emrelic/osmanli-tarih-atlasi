# B görünümü — teşhis, kural karşılaştırması, dar kesit sınavı (B-GORUNUM, 20–21 Ekim 2026)

Ölçüm yeri: bu worktree (`blissful-jackson-5eb584`, `origin/main` d42f05169 üstü). A dosyaları
`kodla.py coz-c` ile açıldı (donemler.js 72,65 MB · devletler_harita.js 330,74 MB); `dolgu.py`
onları YALNIZ okudu. Önbellek geçici dizinde (repo kirlenmedi). Alet: scratchpad `kesit.py`.

## 1 · Teşhis — `data/dolgu.js` neden diskte yok?
| Olgu | Kanıt |
|---|---|
| Motor çağrısı VAR ve A'dan sonra bağlı | `uret_petek.py:9324` `_bdolgu.kosudan(...)` |
| Ama bayrak varsayılan KAPALI: `MOTOR_B_DOLGU=="1"` | `uret_petek.py:9320-9348` ("tam koşu maliyeti ONAYLANMADI") |
| Hiçbir koşu bayrağı açmadı ⇒ dosya hiç üretilmedi | `ls data/dolgu*` → yok |
| Yükleyici satırı 22 Eylül'de SİLİNDİ (her ziyaretçi 404 ödüyordu) | `index.html` ~1887-1894 yorumu; `3b6c4b622` |
| Soğuk üretim "yapılamaz" bulundu: 281 sn/kesit × 1.883 kesit ≈ 6,1 gün | `B-GORUNUM-0072-OLCUM.md` §1 |
| Arayüz DÜRÜST: veri yoksa anahtar pasif + "veri henüz üretilmedi" | `app.js` `bVeriKapisi` (ARAYUZ-0077) |

Hat şöyle kopuk: **A → dolgu çağrısı (kapalı bayrak) → `data/dolgu.js` (yok) → index.html
yükleyici (silinmiş)**. Kopukluk tek bir noktada değil, sıralı üç yerde; ilk halka (bayrak)
açılmadan öteki ikisi anlamsız.

**Ek bulgu (yeni, ölçüldü):** atlasın A verisi **1000-01-01'den başlıyor** (6.976 aralık,
2.849 kesit tarihi, `< 1281` 169 kesit, `< 0001` **0**). MÖ 9500 · MÖ 3000 · MS 500
kesitlerinde canlı gövde sayısı **0** ⇒ istenen "MÖ/MS 500 dar kesit sınavı" **ÖLÇÜLEMEDİ**
(boş girdi "temiz" sayılmaz). Sınav bu yüzden en tenha ölçülebilir kesitte (1000-01-01,
23 gövde) ve 1281'de yapıldı.

## 2 · a–e kuralları × `dolgu.py` (değişiklikten ÖNCE → SONRA)
| Kural (Emre 18 Ekim §1) | Önce | Sonra |
|---|---|---|
| a) ülke topraklarının arasındaki boşluk kapanır | ✓ kapanış (r=120 km ⇒ 240 km'ye kadar) | ✓ r = ufuk km / 2 |
| b) eksklav ≤ 400 km (5/7/10 gün); 401 km kapanmaz | ✗ eşik 240 km, güne bağlı değil | ✓ `UFUK_GUN`×40,32 km; 10 gün = 403 km |
| c) derin koridor: derinlik ≤ ağız genişliği | ✗ yalnız ETİKET (`koridor`), kırpma yok | ◐ ağzı <2r olan koridorda ağıza ağız-genişliği kadar yakın kesim boş bırakılır (`_koridor_kirp`). **Ağzı 2r'den geniş derin girintiler hâlâ YOK** |
| d) iki devlet arası boşluk ≤ 400 km, sınırdan başlayarak | ✓ çekişmeli alan + Voronoi paylaşım (en yakın gövde) | ✓ aynı, r yeni |
| e) devlet–deniz boşluğu ≤ 400 km devlete katılır | ✗ YOK (kapanış gövdeler arası) | ✓ `_deniz_kapanisi`: kapanış (gövde ∪ büyük su kütlesi); gövdeye değen bileşen, gövdeden ≤2r |
| enklav kuralı: başkasının toprağı örtülmez | ✓ yapısal | ✓ aynı (A'ya dokunma korunur) |

Ayar: `MOTOR_DOLGU_UFUK_GUN` (5/7/10, varsayılan 10) · `MOTOR_DOLGU_DENIZ=0` ve
`MOTOR_DOLGU_KORIDOR=0` kuralları kapatır · `MOTOR_DOLGU_YARICAP_KM` açıkça yazılırsa ezer.
`KURAL_SURUM` dolgu-kural-2; `_ONB_TUZ` modül özetini taşıdığı için eski önbellek kendiliğinden düşer.
Deniz eşiği: yalnız ≥100.000 km² su kütlesi "deniz" (kara maskesi küçük gölleri de delik taşıyor).

## 3 · Dar kesit sınavı — 1000-01-01 (23 gövde, gövde alanı 567.536 km²)
| Ayar | Süre | Parça | Dolgu km² | Cins (sayı) |
|---|---|---|---|---|
| 10 gün, deniz KAPALI (eski kural, r≈202) | 5,4 sn | 37 | 441.317 | bosluk 35 · koridor 1 · paylasim 1 |
| 5 gün, deniz açık | 41,7 sn | 60 | 774.305 | bosluk 57 · koridor 1 · paylasim 2 |
| 10 gün, deniz açık | 63,9 sn | 79 | 2.893.052 | bosluk 34 · paylasim 44 · koridor 1 |

Hata ve düzeltme (yazılı kalsın): ilk deniz kuralı 4,0 milyon km² yazdı (410 parça) — kapanış
deniz–deniz boğazlarını (Apenin, Anadolu, İberya…) da dolduruyordu. Süzgeç eklendi (yalnız gövdeye
değen bileşen, gövdeden ≤2r) ⇒ 2,89 milyon km². Hâlâ gövdenin ~5 katı: erken kesitte atlasın A'sı
şehir-petek adacıklarından ibaret, dolgu her adacığın çevresine 400 km'ye kadar hâle çiziyor
(`k1000_10.png`). **Yani B erken devirde haritayı "tenha" olmaktan çıkarır ama kesintisiz kaplama
VERMEZ; uzak boş bölgeler (Sibirya, Sahra, Hint) 400 km dışında kalır — Emre'nin kuralının doğal sonucu.**
Bu hüküm Emre'nin gözüyle doğrulanmalıdır; ben "iyi görünüyor" demiyorum.

Gövdeyle örtüşme (A'ya dokunma kanıtı): dolgu∩gövde = 688 (5 gün) – 1.955 km² (10 gün). Sebep
`SADE_TOL` sadeleştirmesinin gövde kıyısında 1 km'ye varan taşması (0,1–0,07 % dolgu alanı);
yapısal garanti "A dosyası yazılmaz" tutuyor, ama "dolgu A'yı alan olarak hiç örtmez" iddiası
**kesin değil** — ölçülen küçük bir taşma var. Çare (öneri): çıktıdan A birleşimini çıkarma.

## 4 · Tam kesitler (10 gün, deniz+koridor açık) — 21 Ekim 2026 turu

DÜZELTME: §4'ün ilk sürümü "1281 çekişme adımı 40 dk'da bitmedi, 10,7 GB" diyordu. Bu YİNELENMEDİ:
ilk koşu paylaşımlı makinede ve eşzamanlı süreçle koşmuştu. İzli koşuda (`MOTOR_DOLGU_IZ=1`,
devlet başına süre + RSS) RSS tepesi **4,7 GB** (A yüklü dahil), çekişme zaten DEVLET BAŞINA
yerel (1 sıçrama komşuluğu; "yerelleştirme" yeni yazılacak bir şey değil, vardı).

| Kesit | Gövde | Soğuk/ılık süre | Parça | Dolgu km² | Gövde km² | Tek kesit js |
|---|---|---|---|---|---|---|
| 1000-01-01 | 23 | 64 sn | 79 | 2,9 M | 0,57 M | — |
| 1281-01-01 | 261 | **2.845 sn (47 dk)** soğuk | 885 | 12,1 M | 45,5 M | 833 KB |
| 1285-01-01 | 261 | 1.546 sn (4 gövde değişti) | 877 | — | 45,5 M | — |
| 1286-01-01 | 261 | **33 sn** (önbellek tam sıcak; 15 sn'si JSON okuma) | — | — | — | — |
| 1500-01-01 | 276 | 1.825 sn (30 dk) soğuk-kısmi | 1.012 | 9,6 M | 47,4 M | 900 KB |
| 1900-01-01 | 161 | **3.519 sn (59 dk)**; çekişme 1.502 · cins 568 · kapanış 503 | 1.130 | 17,9 M | 98,6 M | 1,01 MB |

Okunuşu:
- **Maliyet kesitten kesite 33 sn ↔ 59 dk oynuyor** (değişmeyen kesit ↔ komşusu değişen kesit).
  Tam koşu süresi 3 noktadan TAHMİN EDİLEMEZ; üst sınır kaba: değişen kesit sayısı × 25–60 dk.
  Bu yüzden "tam koşuya hazır" demiyorum. Önbellek artımlı çalışıyor (1286: 33 sn) — ilk
  geçiş uzun, sonrası kısa; ilk geçiş HAVVA'da, ayrı süreçte, bayrak açıkken yapılmalı.
- **Boyut:** tek kesit 0,83–1,0 MB (halka havuzu dahil). Dosya `kayıt × kesit` ile büyür;
  ilk 12 kesitte 566 KB idi. Tam dosya 2.849 kesitte onlarca MB olabilir → `index.html`e
  koşulsuz yüklenemez; tembel yükleme (ufuk bantlarındaki gibi) şart. Gerçek boyut TAM
  koşuda ölçülmeli (burada ölçülmedi).
- **Görsel (`z_1500.png`, scratchpad):** dolgu Kuzey Amerika'daki kopuk adacıkların arasını,
  Orta Asya/Çin kenarlarını, Sahra çevresini kapatıyor; Avrasya gövdesini örtmüyor. Kıyıdan
  denize taşma görülmedi. Beyaz kalan: Amazon, iç Kanada, Sibirya iç kesimi, Avustralya iç
  kesimi — 400 km'den uzak, kuralın doğal sonucu. Piksel doğruluğunu (yanlış devlete yazılan
  alan) ben ölçmedim; gözle bakıldı, Emre'nin gözü gerekir.
- **A'ya örtüşme:** dolgu∩gövde 1281'de 7,8 bin km² (dolgunun %0,06'sı), 1900'de 14,8 bin km²
  (%0,08): sadeleştirme taşması. Küçük ama sıfır değil.
- `cins` dağılımı (1281): bosluk 507 · paylasim 364 · koridor 14 · enklav-bag 0; 1500/1900'de
  enklav-bag 1 — yani enklav bağı ilk kez 1500'de ateşledi (0072 raporundaki "ölçülemedi"
  kalemi kapandı: enklav-bag nadir ama sıfır değil).

### MÖ / MS 500 / sonrası
A verisi 1000'de başlıyor; MÖ 9500 · MÖ 3000 · MS 500 **ölçülemedi** (boş girdi). A gelince
aynı komut (`kesit.py <tarih> 10`) koşar.

### Çalıştırma biçimi (Emre kararı: B koşuya GÖMÜLMEZ)
`py arac/dolgu.py` zaten bağımsızdır: `donemler.js` + `devletler_harita.js`i OKUR (A'ya
yazmaz), `data/dolgu.js` yazar. `MOTOR_B_DOLGU` varsayılan KAPALI kaldı; `uret_petek.py`
yaması GEREKMİYOR (önceki yama belgesi geçersiz sayılsın). Ortam: `MOTOR_DOLGU_UFUK_GUN=10`
(varsayılan). İzleme: `MOTOR_DOLGU_IZ=1`. Önbellek `_motor_onbellek/` (tuza modül özeti
girer: dolgu.py her değiştiğinde TÜM önbellek düşer — koşu sürerken dosyayı düzenlemeyin).

## 5 · Emre'ye sorular
1. (Karar verildi: yalnız 10 gün, tek dosya; 5/7 sonra.)
   Statik sitede ufuk seçici dolguyu yeniden hesaplayamaz.
2. MÖ 12000 ↔ MS 1000 arası A'da gövde yok: B için önce A'nın o devirlere uzanması gerekir
   (ONCE1281 kampanyası). B o zamana kadar yalnız ≥1000 kesitlerde anlamlı.
3. Ağzı 2r'den geniş derin girinti (c'nin ikinci yarısı) istenir mi? Ayrı bir hesap, ayrı maliyet.
4. Deniz eşiği 100.000 km² (Hazar/Karadeniz tutuldu, küçük göller dışarıda) uygun mu?
