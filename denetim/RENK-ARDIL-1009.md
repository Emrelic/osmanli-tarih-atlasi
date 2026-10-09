# RENK-ARDIL-1009 — `renk_olc.py`ye ARDIL ENGELİ (UMIT) · v2

9 Ekim 2026 · makine UMIT · taban `origin/main` **79115d23**. Teslim anında main `b6131aed`'e ilerlemişti.
Aradaki iki commit (`212679f1` CLAUDE.md, `b6131aed` LAB raporu) `renk_olc.py`, `renkler.py`, `girdi.py` ve `data/`'ya dokunmuyor
(`git diff --stat` boş, `renk_olc.py` blob'u aynı) ⇒ diff iki tabanda da geçerli.
**UYGULANMADI, commit YOK.** `renkler.py`'ye DOKUNULMADI. BOYA-BORC-1009-v2'ye dayanılmadı (aşağıda §4 notu).

Teslim `denetim/RENK-ARDIL-1009.diff`:
- `arac/renk_olc.py`: +253/−4
- yeni dosya `denetim/ARAC-RENK-ARDIL-SINAV-1009.py`: +264
- LF, BOM yok, CR 0, 30.874 bayt, sha256 `a3a2fd95b14d…`
- Temiz ağaçta `git apply --check` ✓. Uygulanınca iki dosya da yamalı hâlle birebir aynı.
- v1 diff'in (`17f37d56…`) YERİNE geçer.

## 1. TANIM — koordinatör şartı ① (kodda `renk_olc.py` "ARDIL" başlığında aynen)

**Taban sahibi.** Her an TEK sahip var, yani motorun boyadığı renk (`uret_petek.py` `_osm_aktif` + :6353). İşlev `zaman_cizgisi()`.

| an | taban sahibi |
|---|---|
| `v:` açık | **OSMANLI tâbi** (`d:` ile çakışırsa TÂBİ kazanır, motor sırası). `v:{himaye:true, kid}` → `kid`'in kendi rengi |
| `d:` açık | **OSMANLI doğrudan** |
| yoksa `s:` | `d:` kimliği. Boyasızsa künyenin `harita:` anahtarı (motorun düşüş kuralı) |
| `isg:` | **okunmaz**. İşgal taban rengini değiştirmez, tarama olarak biner (`girdi.py` notu; `komsuluk()` da okumaz) |

**v: tâbilik sayılır mı? → EVET.**
- Tâbinin ekranda kendi tonu var (#b2384a, opaklık 0,60). Bu yüzden "X → Osmanlı tâbi" ve "Osmanlı tâbi → Y" geçişleri ardıl sayılır.
- Motor `v:`'nin `d:` alanını okumaz; burada da okunmaz.
- İki Osmanlı tonu arasındaki geçiş (doğrudan↔tâbi) sabit tasarım, palet sorusu değil ⇒ sayılmaz.

**Hangi iki dönem "ardışık"?**
- Zaman çizgisinde iki FARKLI taban sahibi art arda geliyor.
- Aralarındaki sahipsiz boşluk **≤ 30 gün** (`ARDIL_BOSLUK_TAVANI`).
- 🔴 **v1'deki hata ve düzeltmesi.** v1 dönemleri `f`'ye göre sıralayıp komşusunu eşliyordu. Tavanı ölçerken çürüdü: iç içe dönemde
  (Kütahya: `d:` 1300-1920 içinde `v:` 1832-1833) "tâbi → tbmm-turkiye" diye 31.708 günlük hayalî ardıllık üretiyordu.
  v2 "o an kimdi" diye soruyor. Hayalî çiftlerin ΔE'si yüksek olduğu için **v1'in raporladığı sonuç değişmedi** (aşağıda §4), ama tanım artık doğru.

**Boşluğun tavanı neden 30 gün?**
- Uydurulmadı: projenin "aynı an" toleransı bu, Değişmez 2'nin kırılma↔kronoloji penceresi (±30 gün, `§3`).
- Boşluk sırasında yerleşim sahipsizdir ve peteği komşuya emilir (`§2`). Ekranda a → komşu → b görünür, a ile b art arda görünmez.
- **Ölçüm** (79115d23, 11.698 farklı-sahip geçişi):

| boşluk | geçiş |
|---|---|
| 0 gün | 11.691 |
| 1-365 gün | **0** |
| 1-10 yıl | 3 |
| >10 yıl | 4 |

  Uzun boşluklar:
  - Gao fas→fransa-cumhuriyet (198 yıl)
  - Katar tâbi→katar
  - Cenne fas→massina
  - Timbuktu mali→songhay
  - Cizre ve Cibri akkoyunlu→OSMANLI (7,7 yıl)
  - Cenne songhay→fas (4,7 yıl)
- ⇒ Tavan bugün yalnız bu 7 geçişi dışarıda bırakıyor. 1-365 bandı boş olduğu için 30 ile 365 arasındaki her seçim aynı sonucu verir.

**`__BOSLUK__` araya girerse?** MUAF ve ZİNCİRİ KIRAR. Kasıtlı boşluk kendi sahibi olan bir dilimdir (`§1.5` BEYAN).
a → BOŞLUK → b dizisinde a↔b ardıl değil; BOŞLUK da kimseyle çift kurmaz.

**Susulanlar:**
- aynı boya anahtarına düşen ardıllar (`ayni_anahtar()`'ın "ardışık paylaşım yerleşik desen" kuralı)
- Osmanlı doğrudan↔tâbi geçişi
- `renkler.PAYLASIM`'da aynı grupta beyanlı aynı hex. Yeni bir istisna listesi değil, var olan beyan okunuyor;
  ihlal sayılmıyor ama ADIYLA basılıyor.

**Eşik = `DE_KOMSU` (12).** Aynı algı sorusu. Ardılı komşudan gevşek tutmanın gerekçesi yok, sıkı tutmanın ölçümü yok.
SINIRDA 12-15 yalnız ekran.

## 2. Nerede etkili — şart ②
| yer | etki |
|---|---|
| `denetle()` | yeni bölüm **ARDILIYLA ÇAKIŞAN** (ihlal · beyanlı · `--ayrinti` ile sınırda/ölçülemedi) + özet satırına `· N ardıl çakışması` |
| `engel_kumesi()` | ardıllar engele eklendi (beyanlı hex mirası hariç) |
| `--oner` | `engel_kumesi` üzerinden + yeni↔yeni çiftte `_yeni_engel_mi()` ardılı pencere süzgecinden ÖNCE engel sayıyor |
| `--dogrula` | SON DOĞRULAMA `engel_kumesi` üzerinden ardılı görüyor; başlık "∪ aynı yerde ARDIL" diyor, ardıl engel `(ardıl)` diye işaretli basılıyor |
| eşzamanlı ölçütler | **DEĞİŞMEDİ**: `komsuluk` · `yakin_renk` · `ayni_hex` · `ayni_anahtar` (sınav D) |

Not: `renk_olc.py`'nin düz koşuda çıkış kodu her zaman 0 (`__main__` `denetle()`'yi `sys.exit`'e vermiyor). Ardıl bölümü de kapı değil, ekran.

## 3. SINAV — şart ③: `py denetim/ARAC-RENK-ARDIL-SINAV-1009.py` → **29/29 ✓, çıkış 0** (~2 dk; `--hizli` `--oner`'i atlar)
İki araç gerçek veride yan yana: yamasız `git show 79115d23:arac/renk_olc.py`, yamalı `arac/renk_olc.py`.
- **A, tanım (11 soru, sentetik):**
  - boşluk 0 → ardıl
  - boşluk 30 gün → ardıl
  - boşluk 31 gün → **ardıl değil**
  - `__BOSLUK__` zinciri kırar
  - `isg:` çift kurmaz
  - `v:` → tâbi
  - himaye `kid`
  - doğrudan↔tâbi sayılmaz
  - a→b→c'de a↔c ardıl değil
  - **Kütahya deseni** (v1'in hatası): doğrudan→t ardıl, tâbi→t değil
  - `d:` ile `v:` çakışırsa tâbi kazanır
- **B, ardışık + YAKIN renk YAKALANMALI** (resuli #6cd824 / tahiri #72d824, ΔE 1.01):
  - yamasız araçta engel değil (kör nokta yeniden üretildi)
  - yamalı `denetle()`'de ARDIL ÇAKIŞMASI
  - yamalı `engel_kumesi`'nde engel
  - yamalı `--dogrula` `🟠 resuli 1 çift: tahiri 1.0 (ardıl)` basıyor; yamasız `--dogrula` görmüyor
  - yamasız `--oner` #6cd824/#72d824 (ΔE 1.01, vaka birebir); yamalı `--oner` #6cd824/#9c24d8 (ΔE 92.5)
- **C, ardışık + UZAK renk SUSMALI** (tahiri #9c24d8):
  - `denetle()` ne ihlal ne sınırda
  - `--dogrula` resuli/tahiri'yi engel diye basmıyor
  - ardışık OLMAYAN uzak devlete (`joseon`) resuli ile aynı hex verilince sayılmıyor
- **D, eşzamanlı davranışta GERİLEME YOK:**
  - `komsuluk()`, `yakin_renk()`, `ayni_hex()`, `ayni_anahtar()`, `denetle()` dönüş tuple'ı yamasızla **birebir**
  - `denetle()` çıktısı ardıl bölümü dışında karakter karakter aynı (21.631 = 21.631)
  - `engel_kumesi` 29 örnek kimlikte: yamalı ⊇ yamasız, fark YALNIZ ardıllar
- Sınav `--oner` artefaktını siler, BOYALAR'ı geri yükler, tahta/dosya izi bırakmaz.

## 4. Bugünkü palete uygulanınca — şart ④ (79115d23 = b6131aed paleti, `PYTHONHASHSEED=0 py arac/renk_olc.py --ayrinti`)

**Eski sayaçlar değişmedi:** komşu çakışması 7 · aynı-anahtar 70 · aynı-hex 0 · yakın-ama-değmeyen 14 · yakın SINIRDA 131 · yakın ÖLÇÜLEMEDİ 7425 · görünmez 0.

**ARDIL İHLALİ ΔE < 12: 8 çift**
| ΔE | çift | geçiş | örnek yer · gün (yön) |
|---|---|---|---|
| 0.97 | misir-kralligi ↔ misir-sultanligi | 57 | Kahire 1922-03-15 (sultanlık → krallık) |
| 7.56 | ingiltere ↔ mataram-sultanligi | 1 | Surakarta (Solo) 1811-08-18 (mataram → ingiltere) |
| 9.25 | itilaf-emaneti ↔ litvanya | 1 | Klaipėda (Memel) 1923-02-16 · *Voronoi komşusu da* |
| 9.27 | avusturya ↔ itilaf-emaneti | 16 | Lvov 1919-09-10 (avusturya → emanet) |
| 10.89 | fransiz-guyanasi ↔ portekiz | 1 | Cayenne 1817-01-01 (portekiz → fr. guyanası) |
| 11.09 | cebri ↔ usfuri | 4 | Lahsa 1417-01-01 (usfuri → cebri) |
| 11.65 | hail-ibn-ali ↔ sammar | 1 | Hâil 1836-01-01 (hail-ibn-ali → sammar) |
| 11.68 | candar ↔ cobanogullari | 3 | Kastamonu 1309-01-01 (çobanoğulları → candar) |

**BEYANLI, aynı hex (`PAYLASIM`): 2. İhlal sayılmadı.**
- meysur ↔ meysur-racaligi · 3 geçiş · Bangalor 1799-05-04 · beyan açıkça "ardıllık" diyor ✓
- goryeo ↔ joseon · 15 geçiş · Kaesong 1392-07-17 · ⚠️ beyanın gerekçesi "2026-07-30 denetimi (yugoslavya/hive) + Asya partisi";
  **ardıllığı anmıyor**. 1392 hanedan değişimi haritada görünmez.

**SINIRDA 12 ≤ ΔE < 15: 51 çift** (ekran):

| ΔE | çiftler |
|---|---|
| 12.00-12.14 | abd↔sosoni · sirbistan↔yugoslavya · babur-imparatorlugu↔bengal-nevabligi · ispanya↔muisca-konfederasyonu · granada↔kastilya · beothuk↔ingiliz-kuzey-amerika · behmeni↔nayak-devletleri · bogdan↔eflak · ingiltere↔toro · portekiz↔sadi · ayutthaya↔konbaung · konbaung↔siyam-chakri · altinorda↔safevi · ming-hanedani↔tungning |
| 12.25-12.97 | ingiltere↔kandy · bicapur↔vijayanagara · almanya↔eve-notse · ilhanli↔muzafferi · antemoro↔fransa-cumhuriyet · habesistan↔vollayta · altinorda↔astarhan · abd↔mandan · demak↔mataram-sultanligi · bali-kralliklari↔hollanda-dogu-hint · bali-kralliklari↔majapahit · almanya↔fransa · celayirli↔sutayogullari · eflak↔macaristan · nguyen-beyligi↔tay-son · brunei-sultanligi↔ingiltere |
| 13.05-13.97 | almanya↔polonya-erken · cin-cumhuriyeti↔qing-hanedani · altinorda↔kazak-hanligi · kacar↔zend · bahreyn↔ingiltere · italya↔papalik · hollanda↔luksemburg · bolivya-cumhuriyeti↔ispanya · fransa↔wicita · fransa-cumhuriyet↔solima-yalunka |
| 14.16-14.85 | gonja↔ingiltere · kuzey-yuan↔rusya · ace-sultanligi↔hollanda-dogu-hint · hollanda-dogu-hint↔ming-hanedani · abd↔savni · cungar↔rusya · joseon↔meiji-japonya · qing-hanedani↔tungning · portekiz↔ternate-sultanligi · cungar↔kuzey-yuan · buhara↔mogulistan |

**ÖLÇÜLEMEDİ, boyasız taraf: 8.** Çiftler:
- akkoyunlu↔gozleroglu
- eyyubi-hama↔memluk
- kudus-kralligi↔memluk
- memluk↔tahiri
- memluk↔trablus-kontlugu
- napoli↔sicilya-kralligi
- resuli↔tahiri
- tahiri↔yemen

Hepsi bugünkü main'de boyası olmayan kimlikler.
⚠️ v1 raporunda bunlar için BOYA-BORC-1009 renklerini bellekte bindirerek yaptığım ölçüm vardı. Koordinatörün uyarısı üzerine
(BOYA diff'i v2'de elle düzeltildi) **o ölçüm GERİ ÇEKİLDİ, hüküm sayılmasın**. Boyalar inince bu 8 çift `renk_olc.py` ile yeniden ölçülmeli;
araç bunu kendiliğinden yapıyor.

v1 ↔ v2 ihlal/sınırda listesi **birebir aynı** (adıyla karşılaştırıldı). Tanım düzeltmesi bugünkü sonucu oynatmadı.

## Ölçtüm · bulamadım · istiyorum
**Ölçtüm.**
- Tanım yazıldı ve gerekçelendi (§1).
- Tavan 30 gün; 11.698 geçişin 11.691'inde boşluk 0, 1-365 gün bandı boş.
- v1'in sıralama hatası ölçümle bulundu ve düzeltildi.
- Bugünkü palette 8 ardıl ihlali, 2 beyanlı, 51 sınırda, 8 ölçülemedi.
- Eşzamanlı ölçütlerde gerileme 0.
- Sınav üç yönde 29/29.

**Bulamadım.**
- misir-kralligi↔misir-sultanligi (ΔE 0.97, 57 geçiş) ve goryeo↔joseon (aynı hex, beyan ardıllığı anmıyor) kasıtlı süreklilik mi? Kayıtta gerekçe yok, hüküm vermedim.
- `komsuluk()` `v:`'yi motordan farklı okuyor (`v.d or OSMANLI`; motorda her zaman TÂBİ). Ölçmedim, eşzamanlı ölçüte dokunmamak için kapsam dışında bıraktım. Ayrı iş olabilir.

**İstiyorum.**
1. Diff insin. `renk_olc.py` motor tuzunda değil (§9.1), koşu beklemez.
2. 8 ihlal için önerim:
   - misir ve goryeo/joseon için Emre'ye tek soru (kasıtlıysa `PAYLASIM`'a ardıllık gerekçesiyle beyan; misir aynı hex değil, önce aynı hex'e çekilmesi gerekir)
   - kalan 6'sı `--oner` ile ayrılsın (araç artık ardılı görüyor)
3. Kapıya bağlanacaksa tavan bugünkü ölçüm 8 olur (§3.4), koordinatör yazar.

YENİ DOSYALAR: denetim/RENK-ARDIL-1009.diff (v2, v1'in yerine) · denetim/RENK-ARDIL-1009.md (v2)
DİFF İÇİNDEKİ DOSYALAR: arac/renk_olc.py (değişti) · denetim/ARAC-RENK-ARDIL-SINAV-1009.py (yeni)
