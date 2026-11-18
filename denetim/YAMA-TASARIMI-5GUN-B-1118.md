# Yama tasarımı — TEK HARİTA: 5 gün + B dolgusu, bütün zamanlarda aynı (18 Kasım 2026)

Yazan: EMRELİC'teki Opus denetim oturumu. Kod origin/main'den (2c47a1d22) okundu.
Bu makine yazıcı değil. Bu belge KASA'nın uygulayacağı plandır.
Tam koşu YALNIZ Emre açıkça söyleyince yapılır (HAVVA).

## Emre'nin kararları (18 Kas, üçüncü tur dahil)
1. Gün sınırı her çağda 5 gün (40 sa sürtünmeli yürüyüş) + B dolgusu. 1281 öncesi ile sonrası arasında hiçbir ayar farkı olmaz.
2. Puan kapısı KAPALI. Pasife alınır, silinmez.
3. Sahne kuralı 1281 öncesi ve sonrası için aynıdır.
   - Kuruluş tarihi (`kur:`) yazılmamış olması tek başına "yok say" demek değildir.
   - Emre'nin tahmini: 1281 sonrası `kur:`suz yerlerin çoğu 1281 öncesi kaynaklarda da geçer. Bu ayrıca ölçülecek (aşağıda ölçüm 1).
   - Bütün yerleşimlerin kaynaklarda ilk geçtiği günü bulmak ayrı bir çalışmadır.
4. B dolgusu her çağda, 5 günlük yürüyüşten SONRA uygulanır.
5. Merkez kuralı (k:4 kendi bölgesini almaz) ŞİMDİLİK KALIR.
   - Kalkmadan önce her k:4'e, toprak el değiştirirken birlikte hareket ettiği abi merkez atanır. Bu iş ayrı oturumda yürüyor: abi-merkez-k4, `local_7396807d-c0e8-44ac-a088-07bf5d2ca53e`.
   - Bağlama ölçütü:
     - kaynak ya da coğrafi birliktelik;
     - merkeze ≤2 gün ise kesin bağlanır;
     - 3-5 gün arasında "daha yakın merkez var mı" sorusuna ve kayıtlara bakılır.
   - Emre'nin gerekçesi: abi merkezin toprağı başka devlete geçerken k:4'ün toprağı yerinde kalırsa harita yanlış olur.
6. Aşiret ve devletsiz noktalar (`bos: kabile|devletsiz`) bulundukları kaynağın tarihine göre geçerlidir: **kaynak yılı −25 … +50 yıl**. Başka kaynak yoksa bu pencereden sonra ortadan kalkar.
7. Antlaşma hattı sınıfları **C + D + E + F** duvardır. Ne dolgu ne A bölgesi bu hattı geçer.
8. 400 km tavanlar:
   - karasal eksklav birleşmesi;
   - iki devlet arasındaki sahipsiz toprağın bölüşülmesi (bölüşme SÜRTÜNMELİ: en yakın yerleşime);
   - deniz ile gövde arasındaki sahipsiz toprak.
   Devlet içi boşluk boyutuna bakılmadan kapanır. Bu kurallar tâbi ve himayeler için de aynıdır.
9. Çöle özel kural yok. 5/7/10 ve Ⓑ düğmeleri siteden kalkar.

## Ölçüm (EMRELİC, origin/main verisi, 18 Kas; betik `scratchpad/olc/sahne_olc.py`)
- 5649 nokta. 2040'ında `kur:` var, 3609'unda yok.
- `kur:`suz 3609 noktanın dağılımı:
  - ilk sahiplik kaydı 1281'den önce: 1046;
  - ilk sahiplik kaydı 1281 veya sonrası: 2152. Bunların **2038'i tam olarak `1281-01-01`**. Yani zincirleri atlasın başlangıç gününden başlıyor, bir kaynak gününden değil;
  - sahiplik kaydı yok ama `bit:` var: 320;
  - hiçbir kayıt yok: 91.
- ⇒ Emre'nin tahmini ölçülebilir hâle geldi. 2038 yer bugün 1281 öncesi haritalarda "sahnede değil" sayılıyor. Sebep kaynakta bulunmamaları değil, atlas zincirinin 1281'de başlaması. Bunların kaynakta ilk geçtiği gün ayrı çalışmada bulunmalı.
- Sahne kuralı 1281 sonrasına yayılırsa ek olarak sahneden düşecek nokta sayısı:

  | Tarih | Ek düşen |
  |---|---|
  | 1300 | 204 |
  | 1500 | 194 |
  | 1700 | 162 |
  | 1900 | 91 |

  91'i hiç sahiplik kaydı olmayan ve `bit:` taşımayan noktalardır; bunlar her çağda düşer. Kalanlar ilk sahiplik günlerine kadar sahnede yoktur.
- k dağılımı: 0:2731 · 1:389 · 2:260 · 3:1499 · 4:770.
- `bos` dağılımı: veri-yok 391 · devletsiz 153 · kabile 66 · insansız 13 · hata 6 · çöl 1.
  - Bu sayılar özetteki 172/156 ile uyuşmuyor; o sayılar eski ölçüm.
- 219 kabile/devletsiz noktanın yalnız 38'inde `kur:`, 41'inde `kaynak:` var. Çoğunun tarihi yok ⇒ önce kaynak araştırması gerekir.

## Uygulama planı (KASA, kendi worktree'si)

### A. Yalnız ortam değişkeni — motor dosyası değişmez (KOSU-YAYIN.md bayrak satırı)
- `MOTOR_MO_SINIR=9999-12-31` → bütün günler tek kural kümesine girer (MÖ kümesi her çağa yayılır). Beraberinde:
  - `MOTOR_MO_YURUYUS_GUN=5` → MO_SAAT=40 = YURUYUS_SAAT (5 gün);
  - `MOTOR_MO_PUAN_KAPISI=0` → puan her çağda atlanır (= puan kapalı); ek güvence için `MOTOR_PUAN_KAPALI=1`;
  - sahne kuralı (`_mo_sahne_disi`) her çağda uygulanır;
  - `MOTOR_TARIH_BASI_MERKEZ=1` → merkez kuralı her çağda aynı. Abi merkez işi bitince `0` yapılır.
    - ⚠️ Bugün yalnız 1281 öncesindeydi. Her çağa yayılınca CE kutusunda boyalı alan −%8 ölçülmüştü (MO-MOTOR-RAPOR-1020). Emre "şimdilik kalsın" dedi; tek kural ilkesi gereği "her yerde" seçildi.
  - ⚠️ DOĞRULANACAK: `_mo_tavanli` dalı tabanı `_BANT_HAM[MO_SAAT]`ten alır. 40 bant listesinde olmalı. Tek harita olacağı için bant listesi `MOTOR_UFUK_BANT=40` yapılır, 56/80 düşer (koşu kısalır).
- `MOTOR_B_DOLGU=1`, `MOTOR_DOLGU_UFUK_GUN=10` → kapanış yarıçapı 201,6 km. Bu, iki yakadan ≈400 km'lik boşluğu kapatır (= Emre'nin 400 km tavanı).
- `MOTOR_DOLGU_KAPALI=1` (ekleyici kapı pasif).
- `MOTOR_COL_UFUK_SAAT=0` ve `MOTOR_COL_GIRINTI_KAPALI=1` zaten kapalı.
  - `COL_TAVAN_KM=300` 5 günde (≤201,6 km) yapısal olarak etkisizdir: yürüyüş mesafesi her zaman kuşuçuşundan uzundur.

### B. Kod değişikliği (motor tuzu → tam yeniden inşa, 7-8 sa)
1. `uret_petek.py:523` `SINIR_KISIT_SINIF = ("C","D","E","F")`.
   - Aynı değişiklik `denetle.py` `D8_SINIF`ta da yapılmalı mı? Ayrı karar. Değişmez 8 tavanı kayabilir; ölçülmeli.
2. `uret_petek.py:3608` `B2_ENKLAV_KM = 400.0`.
3. `dolgu.py` paylaşımı (`_paylas`, :399): bugün kuşuçuşu Voronoi kullanıyor. Yerine sürtünmeli olmalı:
   - her hücre `_YR_SAHIP` ızgarasındaki (sürtünmeli en yakın yerleşim) sahibine gider;
   - aday yalnız temas eden iki devlet;
   - ızgara `dolgu.kosudan`a parametre olarak geçer.
4. `dolgu.py`: antlaşma hattı duvarı.
   - Dolgu adayı alan, C/D/E/F hattının öbür yakasına taşamaz: aday poligon − (hat tamponu ile ayrılan karşı yaka).
   - Hattı en çok kullanan A tarafı kodu `_sinir_kisit_uygula`dır; aynı geometri dolguya da verilmeli.
5. `dolgu.py`: devlet içi boşluk boyuttan bağımsız kapanır. `bosluk` cinsinde yarıçap şartı aranmaz, yalnız "içinde başka devlet / yerleşim / sahnede aşiret yok" şartı.
   - DOĞRULANACAK: bugün iç delik `YARICAP_KM` kapanışına bağlı mı? `_talep` okunmalı.
6. Aşiret engeli tarihli. ÖNERİ: şema değişmesin. Kabile/devletsiz noktaya kaynağın yılından türetilmiş `kur:` = yıl−25 ve `bit:` = yıl+50 yazılır, `ic_not`ta beyan edilir.
   - Sahne kuralı her çağda geçerli olduğundan nokta pencere dışında sahneden düşer; engel de onunla kalkar.
   - Motor kodu değişmez. Veri işi ayrı oturumda yapılır.
   - ⚠️ `kur:`un anlamı "kuruluş"tur; burada "tanıklık penceresi başı" olarak kullanılır. Emre onaylarsa `VERI-YAPISI.md`ye bu kullanım yazılır.
   - Alternatif: yeni alan (`tf:`/`tt:`). Bu `girdi.py BILINEN_ALANLAR` değişikliği ister, girdi.py de motor tuzudur.
7. js (`js/app.js`):
   - 5/7/10 ve Ⓑ düğmeleri kaldırılır; dolgu katmanı her zaman açık.
   - `:1700-1716` "yalnız 1281 öncesi" kısıtı kalkar; `data/dolgu.js` okunur.
   - HAVVA'nın `ufuk-bant-1117` dalının bant kısmı gereksizleşir. Alınacak olanlar: B1 `id()` düzeltmesi ve hata sayaçları.

### C. Sınav (koşudan önce, dakikalar)
- Küçük kutuda (örnek: `denetim/ARAC-UFUK-BANT-GOVDE-SINAV-1117.py` kalıbı) MS 1 · 1300 · 1600 · 1900 kesiti.
- Kontroller:
  - 1281'in iki yakası aynı kural ⇒ 1280-12-31 / 1281-01-02 farkı yalnız veri kırılmasından gelmeli;
  - dolgu hiçbir C/D/E/F hattını geçmemeli (sayaç = 0);
  - Vizigot 507-624 ve Kastilya 1187-1262 parçalanması düzelmeli.
- `py arac/denetle.py` çıkış kodu.

## Emre'den cevap bekleyen 3 karar (KASA bunlar gelene kadar önerilen değerle ilerler, raporda beyan eder)
1. Aşiret penceresi `kur:`/`bit:` ile mi yazılsın (öneri: evet), yoksa yeni alanla mı (girdi.py = tuz)?
2. `denetle.py` `D8_SINIF`a da C eklensin mi? Değişmez 8 tavanı kayabilir; ölçülüp raporlanır.
3. Merkez kuralı abi merkezler bitene kadar HER ÇAĞDA açık mı (`MOTOR_TARIH_BASI_MERKEZ=1`, öneri), yoksa her çağda kapalı mı (`0`)?
- Ek Emre kararı (18 Kas): 1281 öncesi kuruluşlar da (`kur:`) veriye yazılır (Söğüt, Bükreş dahil); ilk-geçiş oturumu bunu yapıyor.

## Ayrı işler (oturum)
- Abi merkez k:4 ataması — başladı (abi-merkez-k4).
- Kabile/devletsiz 219 noktanın kaynaklı tarihlenmesi (−25/+50 penceresi) — Emre'ye soruldu.
- Bütün yerleşimlerin kaynakta ilk geçtiği gün. Önce 1281-01-01'den başlayan 2038 zincir ve hiç kaydı olmayan 91 nokta — Emre "gerekirse" dedi; öneri kartı.
