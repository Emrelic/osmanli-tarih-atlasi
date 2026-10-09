# RENK-ARDIL-1009 — `renk_olc.py`ye ARDIL ENGELİ (UMIT)

9 Ekim 2026 · makine UMIT · taban `origin/main` **79115d23** (iş sonunda yeniden fetch edildi, kıpırdamadı).
**UYGULANMADI, commit YOK.** Teslim `denetim/RENK-ARDIL-1009.diff`: yalnız `arac/renk_olc.py` (+188/−2) ve
yeni `denetim/ARAC-RENK-ARDIL-SINAV-1009.py` (+189). LF, BOM yok, CR 0, 21.677 bayt, sha256 `17f37d56a876…`.
Temiz ağaçta `git apply --check` ✓. Uygulanınca iki dosya da yamalı hâlle BİREBİR aynı (cmp; sınav dosyasında
fark yalnız autocrlf'in CRLF'i). `renkler.py`ye DOKUNULMADI. `renk_olc.py` motor tuzunda değil (§9.1).

## 1. Araç nasıl çalışıyordu (① okundu)
- `komsuluk()`: Voronoi hücreleri değiyor **ve** dönemler GÜN düzeyinde örtüşüyor (`fa < tb and fb < ta`).
- `engel_kumesi()`: Voronoi komşuları ∪ 1500 km içindeki **eşzamanlı** palet kimlikleri, künye penceresiyle.
  `--oner` ve `--dogrula`nın tek evreni burası.
- `--oner` içindeki `_yeni_engel_mi()`: yeni↔yeni çiftte pencere örtüşmüyorsa `return False  # paylaşım MEŞRU`.
  resuli→tahiri vakası tam bu satırdı.
- Eşik `DE_KOMSU = 12`; `DE_SINIRDA = 15` yalnız ekran.
- ⚠️ Yan bulgu: düz koşuda `renk_olc.py`'nin çıkış kodu **her zaman 0** (`__main__` `denetle()`nin sonucunu
  `sys.exit`e vermiyor; `_yayin_zinciri.py` de bunu yazıyor). Yeni bölüm de çıkış kodunu etkilemiyor, kapı değil ekran.

## 2. Ne eklendi (② )
| yer | değişiklik |
|---|---|
| `ardil_ciftleri(Y, cozum)` | **saf** işlev. Yerleşimin taban dönemleri `f`'ye göre dizilir, ardışık iki dönemin anahtarı farklıysa çift kurulur ve kanıtı (yer · gün · yön) tutulur |
| `ardil()` | gerçek veriyle önbellekli: kimlik → ardıllar, kanıt |
| `ardil_denetle(k)` | ΔE ölçümü → ihlal · sınırda · ölçülemedi · beyanlı |
| `denetle()` | yeni bölüm **ARDILIYLA ÇAKIŞAN** (+ `--ayrinti` dökümü) ve özet satırında `· N ardıl çakışması` |
| `engel_kumesi()` | ardıllar engele eklendi ⇒ `--oner` ve `--dogrula`nın SON DOĞRULAMA'sı aynı evreni görüyor |
| `oner._yeni_engel_mi()` | yeni↔yeni ardıl ⇒ engel (pencere süzgecinden ÖNCE) |

**Gerekçeli seçimler** (kodun başlık yorumunda da yazılı):
- **Eşik = `DE_KOMSU` (12).** Yeni sayı uydurulmadı. İkisi de aynı algı sorusu: iki dolgu ayırt ediliyor mu.
- **Taban rengi = motorun boyadığı renk** (`uret_petek.py:6353`):
  - `s:` → `d:` kimliği. Boyasızsa künyenin `harita:` anahtarı (motorun düşüş kuralı).
  - `d:` → OSMANLI doğrudan.
  - `v:` → OSMANLI tâbi. Motor `v:`'nin `d:`'sini okumuyor. Aynı gün açılan `d:`/`v:`'de tâbi kazanıyor.
  - `v:{himaye:true, kid}` → `kid`'in kendi rengi (iç dolgu).
  - ⚠️ `komsuluk()` `v:`'yi `d or OSMANLI` diye okuyor, yani motordan ayrışıyor. Ardıl tarafında motor esas alındı. Komşuluk tarafına dokunulmadı (kapsam dışı).
- **`isg:` YOK.** İşgal taban rengini değiştirmiyor, tarama olarak biniyor (`girdi.py` notu). `komsuluk()` da okumuyor.
- **`__BOSLUK__` muaf ve zinciri KIRAR.** a → BOŞLUK → b dizisinde a↔b sayılmıyor, çünkü arada görünen bir dilim var.
  **Boş aralık** (hiç dönem yok) ise köprüleniyor: vakanın kendisi bu.
- **Aynı boya anahtarı** → susuluyor (`ayni_anahtar()`'ın "ardışık paylaşım yerleşik desen" kuralı).
  **İki OSMANLI tonu** arasındaki geçiş palet sorusu değil.
- **`renkler.PAYLASIM`'da aynı grupta beyanlı aynı hex** → ihlal SAYILMIYOR, ayrı kovada ADIYLA basılıyor.
  Yeni bir istisna listesi değil, renkler.py'nin zaten tuttuğu beyan okunuyor. `engel_kumesi` de beyanlı mirası engel saymıyor
  (yoksa `--oner meysur`, beyanlı `meysur-racaligi` mirasını bozardı).

## 3. Ölçüm (③) — bugünkü origin/main, `PYTHONHASHSEED=0 py arac/renk_olc.py --ayrinti`

### Önce/sonra — mevcut sayaçlar
| sayaç | önce | sonra |
|---|---|---|
| görünmez | 0 | 0 |
| komşu çakışması | 7 | 7 |
| aynı-anahtar örtüşmesi | 70 | 70 |
| aynı-hex çakışması | 0 | 0 |
| yakın-ama-değmeyen | 14 | 14 |
| SINIRDA (yakın) | 131 | 131 |
| ÖLÇÜLEMEDİ (yakın) | 7425 | 7425 |

Çıktının geri kalanı **birebir aynı**: yeni bölüm ve özet satırının kuyruğu dışında `diff` 0.

### YENİ KAPSAM — ardıl çiftleri (bu "kötüleşme" değil, yeni bir soru)
**İHLAL ΔE < 12: 8 çift**
| ΔE | çift | geçiş | örnek yer · gün |
|---|---|---|---|
| 0.97 | misir-kralligi ↔ misir-sultanligi | 57 | Kahire 1922-03-15 (sultanlık → krallık) |
| 7.56 | ingiltere ↔ mataram-sultanligi | 1 | Surakarta (Solo) 1811-08-18 |
| 9.25 | itilaf-emaneti ↔ litvanya | 1 | Klaipėda (Memel) 1923-02-16 · *Voronoi komşusu da* |
| 9.27 | avusturya ↔ itilaf-emaneti | 16 | Lvov 1919-09-10 |
| 10.89 | fransiz-guyanasi ↔ portekiz | 1 | Cayenne 1817-01-01 |
| 11.09 | cebri ↔ usfuri | 4 | Lahsa 1417-01-01 |
| 11.65 | hail-ibn-ali ↔ sammar | 1 | Hâil 1836-01-01 |
| 11.68 | candar ↔ cobanogullari | 3 | Kastamonu 1309-01-01 |

**BEYANLI (aynı hex, `PAYLASIM`): 2. İhlal sayılmadı.**
- meysur ↔ meysur-racaligi · 3 geçiş · Bangalor 1799-05-04 · beyan açıkça **ardıllık** diyor ✓
- goryeo ↔ joseon · 15 geçiş · Kaesong 1392-07-17 · ⚠️ beyanın gerekçesi *"2026-07-30 denetimi (yugoslavya/hive) + Asya partisi"*;
  **ardıllığı anmıyor**. 1392 hanedan değişimi haritada görünmez. Kasıtlı mı, koordinatör karar vermeli.

**SINIRDA 12 ≤ ΔE < 15: 51 çift** (ekran). Tam liste `--ayrinti`'de. En düşükleri:
abd↔sosoni 12.00 · sirbistan↔yugoslavya 12.01 · babur↔bengal-nevabligi 12.01 · ispanya↔muisca 12.02 · granada↔kastilya 12.04.

**ÖLÇÜLEMEDİ (boyasız taraf): 8.** Hepsi BOYA-BORC-1009'un 🔴 kovası:
akkoyunlu↔gozleroglu · eyyubi-hama↔memluk · kudus-kralligi↔memluk · memluk↔tahiri · memluk↔trablus-kontlugu ·
napoli↔sicilya-kralligi · **resuli↔tahiri** · tahiri↔yemen.

### BOYA-BORC-1009 renkleri belleğe bindirilince (17 renk, `renkler.py` yazılmadı)
- ÖLÇÜLEMEDİ 8 → **0**.
- İHLAL **8 (aynı liste)**, SINIRDA 51 (aynı). Yeni renklerin hiçbiri ardıl ihlali ya da sınırda üretmiyor.
- Yeni renklerin ardıl ΔE'leri:

| çift | ΔE |
|---|---|
| resuli↔tahiri | 92.5 |
| tahiri↔memluk | 46.6 |
| tahiri↔yemen | 69.7 |
| kudus↔memluk | 47.5 |
| trablus↔memluk | 46.3 |
| eyyubi-hama↔memluk | 28.5 |
| napoli↔sicilya | 67.1 |
| akkoyunlu↔gozleroglu | 34.8 |

  BOYA-BORC'un tablosuyla birebir aynı.
- Not: veride resuli→tahiri geçişi **1454-01-01** (Zebîd, Aden). Künyede tahiri `f` Temmuz 1454 (TDV, ay hassasiyeti).
  Ardıl ölçümü bunu etkilemez; bilgi olarak duruyor.

## 4. Sınav (④) — `py denetim/ARAC-RENK-ARDIL-SINAV-1009.py` → **17/17 ✓, çıkış 0** (~32 sn, `--hizli` B4'ü atlar)
- **A1-A8, saf işlev, sentetik:** boş aralık köprülenir · `__BOSLUK__` zinciri kırar · `isg:` çift kurmaz · aynı sahip çift kurmaz ·
  `v:`→tâbi · himaye `kid` · doğrudan↔tâbi sayılmaz · a→b→c'de a↔c ardıl değil.
- **B, GERÇEK veri, iki araç yan yana.** Yamasız araç `git show 79115d23:arac/renk_olc.py` ile belleğe yükleniyor.
  - **B1:** ΔE 1.01 hâlinde **yamasız araçta tahiri resuli'nin engeli DEĞİL** (kör nokta yeniden üretildi).
    Yamalı araçta ARDIL ÇAKIŞMASI çıkıyor ve engel kümesine giriyor.
  - **B2:** #6cd824/#9c24d8 ile temiz (ΔE 92.5).
  - **B3:** ardışık olmayan uzak devlet (`joseon`), aynı hex verilince çakışma SAYILMIYOR.
  - **B4:** gerçek `--oner resuli,tahiri`.
    - **Yamasız #6cd824/#72d824, ΔE 1.01.** Vaka birebir yeniden üretildi.
    - **Yamalı #6cd824/#9c24d8, ΔE 92.5.** BOYA-BORC'un sarmalayıcısıyla birebir aynı sonuç.
  - Sınav öneri artefaktını siler ve BOYALAR'ı eski hâline döndürür.

## Ölçtüm · bulamadım · istiyorum
**Ölçtüm.**
- Ardıl engeli araca girdi.
- Mevcut palette **8 ardıl ihlali** var (yukarıda adıyla), 2 beyanlı, 51 sınırda, 8 ölçülemedi. Ölçülemeyenlerin hepsi boyasız kimlik ve BOYA-BORC renkleriyle 0'a iniyor.
- Eski sayaçların hiçbiri oynamadı.
- Sınav iki yönde 17/17.

**Bulamadım.**
- misir-kralligi↔misir-sultanligi (ΔE 0.97, 57 geçiş) ve goryeo↔joseon (aynı hex) **kasıtlı süreklilik mi** (aynı ülke, rejim/hanedan değişimi)?
  Kayıtta gerekçe yok. Goryeo'nun PAYLASIM beyanı ardıllığı anmıyor. Hüküm vermedim.
- `komsuluk()`'ün `v:` okuması motordan ayrışıyor (`v.d or OSMANLI` / motor: her zaman TÂBİ). Ölçmedim, kapsam dışı. Ayrı iş olabilir.

**İstiyorum.**
1. Diff indirilsin. Motor tuzunda değil (`renk_olc.py` §9.1'in dört dosyası arasında yok), koşu beklemez.
2. 8 ardıl ihlalinin hükmü koordinatörde. Seçenekler:
   - (a) kasıtlı olanlar `PAYLASIM`'a ardıllık gerekçesiyle beyan edilsin (yalnız aynı hex için çalışır; misir ΔE 0.97 aynı hex değil)
   - (b) renk ayrılsın (`--oner`, artık ardılı görüyor)
   - **Önerim:** misir ve goryeo/joseon için Emre'ye tek soru; kalan 6'sı (b).
3. `renk_olc.py` çıkış kodunun her zaman 0 olması bilinen bir durum; bu iş onu değiştirmedi.
   Ardıl bölümü bir tavanla kapıya bağlanacaksa §3.4 gereği tavan bugünkü ölçüm olur (8), koordinatör yazar.

YENİ DOSYALAR: denetim/RENK-ARDIL-1009.diff · denetim/RENK-ARDIL-1009.md
DİFF İÇİNDEKİ DOSYALAR: arac/renk_olc.py (değişti) · denetim/ARAC-RENK-ARDIL-SINAV-1009.py (yeni)
