# ENKLAV-HARITA-1028 — haritada ÇİZİLEN enklav/eksklav ölçümü (tüm devlet-dönemleri, MÖ dahil)

Salt okuma; veri değişikliği YOK. Ağaç: worktree `enklav-eksklav-5781a2` @ `b8e3233e` (origin/main, 0 geride),
girdi = `coz-c` ile açılmış YAYINDAKİ harita çıktısı (`devletler_harita.js` 8.008 dönem + `donemler.js` 710 Osmanlı dönemi).
Ölçüm UMIT/laptop değil, bu oturumun makinesi; koşu ~54 dk.

## 0. Üç cümle

1. Önceki taramalar (ENKLAV-TARAMA-1013, `eksklav_olc.py`, D7) yerleşim NOKTASINI ölçüyordu; bu ölçüm motorun ÇİZDİĞİ peteği ölçer —
   8.718 devlet-döneminden 6.964'ü birden çok bileşenli; ≥100 km² kopuk parça **107.514 aday-dönem → 4.281 zincir** (aynı parçanın ardışık dönemleri).
2. Zincirlerin 3.364'ü denizaşırı/ada (ön sınıf), **917'si karasal** (koridor 455 · boş-koridor 337 · tek devlet içinde 98 · karışık 27).
   Bunlardan 79 değerlendirme (53 seçili vaka; çok zincirli olanlar bölünerek) kaynakla incelendi: **22 GERÇEK · 11 MOTOR-HATASI · 43 VERİ-EKSİĞİ · 3 KAYNAKSIZ.**
3. **Kopuk görünümün çoğu gerçek eksklav değil:** en sık nedenler (a) komşu yerleşimin yanlış/eksik devlet etiketi (Sicilya `napoli`, Hannover/Kassel `almanya`,
   Tirol 1805-09, Piyemonte…), (b) antik devletlerde yerleşim noktası seyrekliği, (c) Tuna/Colorado gibi nehirde peteğin karşı yakaya taşması.
   **Bütün hükümler ön hükümdür** — bkz. §5 (kaynak derinliği sınırlı).

## 1. Yöntem

`denetim/ARAC-ENKLAV-HARITA-1028.py` (ölçüm) + `ARAC-ENKLAV-SINIFLA-1028.py` (zincir ve ön sınıf).
- Birim (devlet, dönem). Dönemin petek halkaları ORTAK KÖŞE grafiğiyle bileşenlere ayrılır; alan olarak en büyük bileşen = ana kara.
- Eşikler: ≥100 km² (altı «kırıntı»: 384.361 parça, sayıldı ama incelenmedi), ana karaya <3 km olan «yapışık» (11.266, atıldı).
- Her aday: ana karaya en yakın uzaklık, düz hattın `motor_kara.geojson` içinde kalıp kalmadığı (KARA/DENIZ), karasal adaylarda düz hat boyunca 39 örnek nokta
  ve parça çevresinde 60 örnek nokta ile o günün (dönem ortası) başka sahibi (koridor / çevre %).
- Aynı bileşen yapısı bir önceki dönemle aynıysa yeniden ölçülmedi (süre uzatıldı; en çok 100 yılda bir tazelendi). Zincir = aynı devlet+sınıf+merkez ≤1,5°+bitişik zaman.
- Ön sınıf: `DENIZ-ADA` (hat denizden) · `KARA-ENKLAV` (çevrenin ≥%85'i tek başka devlet) · `KARA-KORIDOR` (hattın ≥%60'ı başka devletlerin) · `KARA-BOS` (hattın <%40'ı sahipli, kalanı boş) · `KARA-KARISIK`.
  Ek: `DENIZ-ADA` olup uzaklığı ≤50 km olanlar `DENIZ-YAKIN-SUPHELI` (kara maskesi/nehir/koy artefaktı şüphesi; ajanlar 3-29 km vakalarında bunu doğruladı).
- Tam zincir listesi (4.281 satır): `ENKLAV-HARITA-1028-ZINCIRLER.csv`. Vaka değerlendirmeleri: `ENKLAV-HARITA-1028-VAKALAR.json`.

## 2. Sayılar

| ön sınıf | zincir | ≥1 yıl | ≥10 yıl |
|---|---|---|---|
| DENIZ-ADA (>50 km) | 2.299 | 2.038 | 1.502 |
| DENIZ-YAKIN-SUPHELI (≤50 km) | 1.065 | 956 | 725 |
| KARA-KORIDOR | 455 | 365 | 208 |
| KARA-BOS | 337 | 300 | 190 |
| KARA-ENKLAV | 98 | 74 | 36 |
| KARA-KARISIK | 27 | 18 | 11 |
| **toplam** | **4.281** | | |

- MÖ başlayan zincir 64: KARA-BOS 38 · DENIZ-YAKIN 14 · DENIZ-ADA 12 (antik devletler yerleşim kümesi olarak çiziliyor; aradaki boşluk veri seyrekliği).
- Karasal zincir başlangıçları 1000-1300 (251) ve 1700-1900 (283) yüzyıllarında yoğun. En çok zincirli devletler: ingiltere 86 · OSMANLI 61 · kanada 54 · rusya 54 · ingiliz-kuzey-amerika 53 · sovyet-rusya 52 · qing 46 · abd 44 · almanya 35.
- Çağdaş (~1900-2000) ingiltere/fransa/portekiz/kanada kopukluğunun büyük kısmı çok sömürgeli devletin ayrı kara koloni parçalarıdır (GERÇEK kopuk, enklav sayılmaz).

## 3. Vaka değerlendirmesi (özet; ayrıntı ve kaynaklar JSON'da)

GERÇEK (22 eleman): Habeş eyaleti (Osmanlı, 1557-1885) · Villach/Bamberg eksklavı (1526-1759) · Papalık Benevento · Parma-Piacenza 1523-45 · Prusya Ren 1815-66 ·
İspanyol Flandre · Maastricht 1830-39 · Kırım Kuban kıyı · Portekiz Mozambik koridor/deniz zincirleri · Ajmer-Merwara (İngiliz Hindistan 1818-1947) · Racput 1679-1707 ·
Delhi–Gucerat 1392-1407 · Safevî Harput 1516 · Mehdî Tokar · Hollanda Malakka/Riau/Sumatra adaları · Kuban-Azak kıyı zinciri · Hudeyde 1538 · İtalya Eritre.

MOTOR-HATASI (11): Banat/Orşova Macar parçası (Tuna güney yakasına taşma) · Büyük Polonya 1281-1466 ve Poznan 1918-20 (aynı Voronoi şeridi) · Isviçre Rheintal 1918-23 ·
Meksika Baja (Colorado deltasında Sonora ile kara bağı var) · Olivenza (Badajoz'a bitişik) · Yuan Yunnan (13 km «deniz») · Asir/Hudeyde 1849-1918 · Portekiz Mozambik 12 km «deniz» ·
Portekiz-Brezilya Maranhão ve küçük kıyı parçaları.

VERİ-EKSİĞİ (43) — düzeltmesi mümkün olanlar (hepsi KAYNAKLA TEYİT BEKLER, bkz. §5):
- **Sicilya:** Palermo, Messina, Siraküza, Trapani, Katanya `napoli` etiketli (1281-1861), oysa ada 1282'den beri Sicilya-Aragon (Caltabellotta 1302) → Trapani vakası. *(güven yüksek)*
- **Prusya 1866-71:** Hannover/Kassel/Frankfurt ilhaktan sonra hâlâ `almanya` → Ren parçası kopuk.
- **Tirol 1805-09:** Brixen/Trento `avusturya` kalmış, Pressburg'la Bavyera'ya geçti → Lienz parçası.
- **Maastricht 1795-1814:** `hollanda` kalmış, Fransa'daydı.
- **Piyemonte:** Torino `sardinya` (1281'den), Aosta `savoya`; Saluzzo 1720-1861 `__BOSLUK__` (1601'den beri Savoya).
- **Sırbistan:** aynı devlet iki kimlikle (`sirbistan-nemanjic`, `sirbistan`).
- **Papalık Benevento:** bitiş 1861-03-17 → 1860 sonbaharı; başlangıç 1155 yerine 1053.
- **Konfedere Alabama (yüksek güven):** Montgomery Konfedere merkezi; çevresi %100 ABD olamaz → Georgia/Mississippi/Florida/Tennessee petekleri yanlış.
- **Osmanlı:** Bosna 1456-60 (Bosna Sancağı 1463), Bursa-Söğüt 1303-21 (Bursa 1326), Cezayir-Kabiliye 1844-57 (Osmanlı 1830'da bitti), Abhazya-Sohum/Kuban-Azak bozkırı (150-195 bin km², Osmanlı yalnız kıyı kaleleri), Trablus 1551-74, Kut 1915-16 (taraf rengi ters/karışık).
- **Tarih uyuşmazlıkları:** Delhi–Gucerat fethi 1299 (veri 1297) · Çitor'u Mevar'ın geri alışı ~1326 (veri 1311) · Safevî Doğu Anadolu 1501'de yok (Harput 1507'den) · Şam'a giriş 3 Ekim 1516 (veri 1 Ekim) · Olivenza 1801 (veri 1866).
- **Antik:** Ahameniş (Medya/Persis/Elam), Harappa, Roma-Lazio: boşluk tarihî değil, nokta seyrekliği (Susa, Bisutun, Persepolis, Latin şehirleri eklenmeli).

KAYNAKSIZ (3): Doğubayazıt 1534-47 (TDV yalnız 1514 fethi), Nogay 1644-63 (Penza çevresi), Asir 1871.

## 4. Kesin olmayanlar ve yanlış çıkarım riskleri
- «Karasal» sınıfı düz hatta bakar; nehir/göl deliği olan kara maskesi nedeniyle ≤50 km «deniz» vakaları şişik (1.065) — ayrı kovaya alındı.
- Ana kara = en büyük bileşen: iki eşit gövdeli devletlerde (Mogol, Harizmşah, bölünmüş krallıklar) «parça» seçimi keyfidir.
- Sahip tespiti dönem ORTASI günündedir; dönem içinde el değiştiren koridor yanlış okunabilir.
- Ölçülen şey yayındaki harita çıktısıdır; veri sonradan düzelmiş de olabilir (Oct 28 ağacı; çıktı HAVVA koşusundan).

## 5. Kaynak derinliği — dürüst sınır
Ajanlar 79 hüküm üretti, ama **çoğu web arama özetine, TDV arama sonuçlarına ve Vikipedi ipuçlarına dayanıyor; TDV maddelerinin çoğu açılıp okunmadı**, akademik kaynakların tam metni okunmadı (ajan raporları kendisi söylüyor).
Bu yüzden: ① JSON'daki `guven: düşük/orta` hükümler veri değişikliği için YETERLİ DEĞİLDİR; ② yalnız «güven yüksek» (Sicilya etiketi, Konfedere Alabama) ve doğrudan tarihî bilgiyle çelişmeyen düzeltmeler öne alınabilir, o da kaynak okunarak; ③ CLAUDE.md kaynak sırası (TDV→İSAM→TTK→DergiPark…) uygulanmadı. Kapsam: 917 karasal zincirin ~20 ailesi incelendi; ~900 zincir yalnız kural ön sınıfında (= KAYNAKSIZ sayılmalı).

## 6. Öneri (Emre onayı bekler)
1. Etiket-tutarsızlığı ailelerinden (Sicilya, Prusya 1866, Tirol, Piyemonte, Sırbistan, Maastricht, Benevento) başlayan, kaynak okuyarak yapılan ayrı veri oturumu; her düzeltme sonrası `denetle` + HAVVA koşusu.
2. Motor: nehir yaslama sırasında peteğin karşı yakaya taşması (Tuna/Orşova, Colorado, Badajoz) — motor dondurma kuralı nedeniyle HAVVA kararı.
3. Antik kopukluk için ayrı karar: «şehir-devlet kümesi» modelinde boşlukları kabul edip beyan mı, yoksa nokta mı eklenecek.
4. Ölçüm aletini `denetle`ye tavanla bağlama (eksklav_olc.py'nin harita-düzeyi karşılığı) — yalnız Emre onayıyla.
