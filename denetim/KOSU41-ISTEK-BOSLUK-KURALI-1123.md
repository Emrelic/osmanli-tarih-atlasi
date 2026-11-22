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

Kapsam sınırı: yalnız MS 150 ve Roma bakıldı; başka çağ/devlette ölçülmedi. Yerel önizleme motor çıktısını `main`den okur —
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
