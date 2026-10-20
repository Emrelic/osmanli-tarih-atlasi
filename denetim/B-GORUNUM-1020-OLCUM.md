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

## 4 · 1281-01-01 tam kesit (261 gövde, 10 gün)
**ÖLÇÜLEMEDİ — ve sebebi bir bulgu.** Aynı alet, aynı kural; 1281-01-01'de kapanış aşaması
(261 gövde) ~10 dk'da bitti (tek tek 4–38 sn), ama ardından çekişme/cins aşaması **40 dakikada
bitmedi** ve süreç **10,7 GB RAM**'e çıktı (makine paylaşımlı; geçmişte `bad allocation`
çökmeleri oldu) — kendi PID'imi (1292) kapattım. 1000-01-01'de aynı aşama 1–2 sn idi; 261
gövdede deniz+r≈202 km ile çekişme alanı patlıyor (komşu talepler artık geniş çakışıyor,
`B-GORUNUM-0072-OLCUM.md` §2'nin "çekişme O(n²) maliyeti" bulgusu 2× yarıçapta daha da ağır).
⇒ **Varsayılan 10 gün/r≈202 km tam koşuya HAZIR DEĞİL**; üretimden önce çekişme adımı bölgeye
yerelleştirilmeli ya da r kademeli denenmeli (5 gün: kapanış 40 sn, çekişme 0,2 sn, 1000'de).
Bu, "çalışır" değil "tehlikeli" ölçümüdür: tam koşuya bu hâliyle geçilirse RAM çökmesi riski var.

## 5 · Emre'ye sorular
1. Dolgu **ufuk gününe göre ayrı dosya** mı (5/7/10 → 3 geometri) yoksa yalnız 10 gün mü?
   Statik sitede ufuk seçici dolguyu yeniden hesaplayamaz.
2. MÖ 12000 ↔ MS 1000 arası A'da gövde yok: B için önce A'nın o devirlere uzanması gerekir
   (ONCE1281 kampanyası). B o zamana kadar yalnız ≥1000 kesitlerde anlamlı.
3. Ağzı 2r'den geniş derin girinti (c'nin ikinci yarısı) istenir mi? Ayrı bir hesap, ayrı maliyet.
4. Deniz eşiği 100.000 km² (Hazar/Karadeniz tutuldu, küçük göller dışarıda) uygun mu?
