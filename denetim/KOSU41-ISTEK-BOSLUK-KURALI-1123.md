# KOŞU 41 ÖNCESİ İSTEK — çevrili boşluk ve kıyı kuralı + Ⓑ çakışması (EMRELİC 21 KASIM, 23 Kasım 2026)

**Kaynak:** Emre'nin Roma İmparatorluğu haritasında gördükleri (MS 150). Bu istek koşu BAŞLATMAZ; Koşu 41 izni Emre'dedir
(Emre'nin ayrı "başla" demesi şart). Motor dosyalarına (`uret_petek.py`, `renkler.py`, `girdi.py`, `motor_onbellek.py`) bu
oturum dokunmadı; tuzlu dosyalar olduğu için değişiklik tam yeniden inşa (7-8 saat) ister.

## 1. Gözlemler (ölçüm: yerel önizleme, `origin/main` + EMRELİC dalları, MS 150, tarayıcıda `queryRenderedFeatures`)

| # | Gözlem | Ölçüm |
|---|---|---|
| A | **Ⓑ dolgusu sahibi olan toprağın üstüne de çiziliyor.** Halep (37.16,36.2), Şam (36.3,33.5), Beyrut (35.5,33.9), Antakya (36.15,36.2) noktalarının dördünde de iki katman birden dönüyor: `devlet-dolgu` (id `roma-imp`, kırmızı) + `dolgu-b-alan` (`cins:"bosluk"`, mavi). | 4/4 nokta |
| B | **Galya, İberya, İsviçre çevresinde devlet içinde boş kalan toprak** (tek sahipli çevrili boşluk); Normandiya, kuzey İspanya, Narbonne kuzeydoğusu. | Gözle (ekran görüntüsü); yüzde ölçülmedi |
| C | **İtalya:** Po ovası (Milano, Verona, Padova, Ravenna, Rimini çevresi), Adriyatik kıyı şeridi ve boyalı parçalar arası koridorlar boş. Orta İtalya + güney parçaları boyalı. | Gözle; piksel sayımı denendi, sonuç vermedi (katman adı yanlış) |

| D | **MÖ 27 Roma, Nil vadisi/Delta:** Memphis noktasında `devlet-dolgu` YOK (boş); Delta, Fayyum, Behnesa çevresinde soluk (boyasız) parçalar var. İskenderiye, Teb, Aswan, Fayyum, Kudüs noktaları `roma-imp`. Mısır MÖ 30'da (Octavianus, İskenderiye) Roma eyaleti olmuştur; MÖ 26'da boş görünmesi doğru değil. Çevrili boşluk sınıfı (kural 2). | 1 boş, 5 sahipli nokta (canlı site, 23 Kasım) |

Kapsam sınırı: yalnız MS 150 ve MÖ 27 Roma bakıldı; başka çağ/devlette ölçülmedi. Yerel önizleme motor çıktısını `main`den okur —
canlıdaki harita ile aynı olduğu doğrulanmadı.

## 2. İstenen TEK kural

> **Bir bölge, hiçbir kaynaklı şehre emilmediği için boş kalıyorsa ve (a) tek bir devletin yerleşim/gövdesi onu baştan sona
> çeviriyorsa (çevrili boşluk), ya da (b) kıyı şeridi olarak yalnız o devletin ana toprağına bitişikse, o devletin toprağı sayılır.**
> Katılan alan **beyanlı yaklaşıklıktır** (kaynaklı sahiplik değil): haritada ayırt edilir, `kaynak:`a
> "çevrili boşluk / bitişik kıyı — sahibinden devralındı" yazılır. Beyansız yaklaşıklık beyanlı boşluktan kötüdür (CLAUDE.md).

Sınırlar: iki ya da daha çok devlete değen boşluk bu kurala girmez (mevcut "komşu peteklere böl" davranışı kalır); kuralın
yarıçapı için 400 km tavanı (Tek harita + B kararı, 18 Kasım) geçerlidir; boşluk deniz ise doldurulmaz (yalnız kara).

## 3. Ayrı düzeltme: Ⓑ yalnız GERÇEK boşlukta çizilmeli

`dolgu-b-alan` özelliği, nihai sahipliği (`devlet-dolgu`) olan bir hücrede ÇİZİLMEMELİ. Kontrol: üst üste iki dolgu katmanı
dönen nokta sayısı = 0.

## 4. Kabul ölçütü (koşudan sonra, yeni harita üzerinde)

1. MS 150 Roma: Halep/Şam/Beyrut/Antakya'da yalnız `devlet-dolgu` (Ⓑ yok).
2. MS 150 İtalya, Galya, İberya, İsviçre: tek sahipli çevrili boşluk sayısı **0**, kıyı şeridi bitişik anakaraya katılmış;
   katılan her parça beyanlı yaklaşıklık olarak işaretli.
3. İki yönde sınama: kural **tetiklenmemesi gereken** yerde (iki devlete değen boşluk, ör. sınır bölgeleri) tetiklenmemeli.
4. `py arac/denetle.py` Değişmez 1/2/3/8 tavanlarında GERİLEME yok; Değişmez 3b ölçümü ayrı rapor.
5. Başka bir çağdan en az iki örnek (ör. 1500, 1900) bakılıp yan etki yok teyidi.

## 4b. Bilinmeyenler (Emre/HAVVA bakacak)

- Boşluğun "tek sahipli çevrili" olduğunun motorda nasıl hesaplanacağı (petek komşuluk grafiği mi, bölge poligonu mu).
- Beyanlı yaklaşıklığın haritada nasıl gösterileceği (hatlı/taralı dolgu mu) — görsel karar Emre'nindir.
- Ardıl-devlet sınır kayıtları (Roma Krallığı→Cumhuriyet vb.) başka iştir: veri düzeltmesi, motor değil.

## 5. Süreç

Emre "Koşu 41'i başlat" diyene kadar uygulanmaz. HAVVA koşudan önce bu isteği Emre'ye gösterir; kural onaylanırsa motor dalı
ayrı açılır, tam yeniden inşa 7-8 saat, sonra iniş zinciri (`KOSU-YAYIN.md`).


## 6. EK — Kaynaklı boşluk doğrulaması sonucu: Ⓑ nasıl davranmalı? (23 Kasım 2026, oturum "keen-boyd")

Kaynak: `denetim/BOSLUK-DOGRULAMA-1123/RAPOR.md` (Roma MÖ 26 pilotu; Cassius Dio, Strabon, Res Gestae, Livius okundu; TDV/CAH okunmadı).
Ölçüm (veriden, 5650 yerleşim): Roma'ya ≤100 km sahipsiz 727 yerleşim; MÖ 26'da 333 yerleşim Roma, 24 `__BOSLUK__`.

**Ana bulgu: yukarıdaki §2 kuralı ("tek devlet çevreliyorsa o devletin sayılır") TEK BAŞINA YANLIŞ SONUÇ ÜRETİR.** Çünkü çevrili boşlukların
bir kısmı kaynakta Roma'ya DEĞİL, Roma'ya bağlı kralların ya da bağımsız kabilelerin toprağıdır:

| Sınıf | Kaynaklı örnek (MÖ 26) | Ⓑ ne yapsın |
|---|---|---|
| **A — doğrudan hâkimiyet** | Kyrenaika, Mısır, Makedonya, Akhaia, Po ovası, Sardinya | Ⓑ doldursun; ana karaya katsın; beyanlı yaklaşıklık |
| **V — bağlı krallık (vassal)** | Amyntas (Pisidia/Likaonya), Odrys Trakyası, Herodes, Arkhelaos, Polemon | Ⓑ **doğrudan Roma boyamasın**. Ya ayrı `v:`/himaye kademesinde gösterilsin ya da boş kalsın; bağlı krallığı doğrudan Roma'ya katmak yasak |
| **G — gerçek boşluk** (fethedilmemiş/bağımsız) | Kuzey İspanya (Kantabria/Asturias, Dio 53.25), Salassi, Garamantes, Dobruca-Getai | Ⓑ **DOLDURMASIN**. Boşluk, boşluk kalır |
| **M — Roma hâkimiyeti ama kral yok** | Mauretania MÖ 33-25 (Dio 49.43.7) | Beyanlı yaklaşıklık: Roma; tek metin, temkinli |

**Kural önerisi (Ⓑ çevrili-boşluk):** Ⓑ bir boşluğu ancak (1) çevreleyen devlet kaynakta o bölgenin **doğrudan** hâkimi ise (A/M),
(2) o gün bölgede `v:`/bağlı krallık kaydı yoksa ve (3) bölge G sınıfı değilse doldursun. Sınıfı veri belirlesin: `kaynak:` içinde
"ABİ MERKEZ" / "bağlı kral" / "fethedilmemiş" etiketi taşıyan kayıt Ⓑ için **durdurucu** olsun. Etiket yoksa Ⓑ **doldurmaz**.
Böylece "beyansız yaklaşıklık" (CLAUDE.md'nin yasakladığı) üretilmez.

**Atlas'ın fazla Roma'ya yazdığı yerler (ters yön, Ⓑ'den bağımsız veri işi):** kuzey İspanya (León, Santander, A Coruña, Pamplona),
Dobruca/Kuzey Bulgaristan (Varna, Köstence, Lofça…), Konya/Antalya (Amyntas) — MÖ 26'da kaynakla çelişiyor; doğrudan metin okununca çıkarılmalı.
Bu yüzden kural uygulanmadan ÖNCE bu kayıtlar düzelmezse Ⓑ yanlış bölgeyi büyütür.

**Başka eklentiler:** Memphis (Mısır) yerleşimi hiç yok → eklenmeden Nil boşluğu kapanmaz; `Kartaca`/`Karthago` mükerrer (3 km). İkisi de tuzlu/motor etkisi
olmayan veri işi, ama harita değişimi koşuyla görünür.

**Bilinmeyen/ölçülemeyen:** Amyntas bölgesi doğrudan metinle okunmadı; Numidia MÖ 26 (Roma mı Juba II mi) çelişkili; bağlı krallıklar için ayrı
devlet kimliği yok (Emre kararı gerek: açılsın mı?).
