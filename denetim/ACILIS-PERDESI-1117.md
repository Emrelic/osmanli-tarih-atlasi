# ACILIS-PERDESI-1117 — açılış perdesi yenilendi

**17 Kasım 2026 · KASA · Emre'nin isteği:** dönen dünya; devletlerin haritaları dünyadaki
yerlerinden fırlayıp saçılsın; önce bugünün popüler devletleri, sonra her milletin en
bilinen/en parlak devrindeki devlet; haritalarla birlikte önemli şahsiyetler (Osmanlı'dan
Fatih + Kanunî, Roma'dan en az 5 imparator, her milletten 1-2 kişi).

## Ne değişti
| Dosya | Değişiklik |
|---|---|
| `arac/acilis_uret.py` (YENİ) | tek üretici: Natural Earth (bugün) + historical-basemaps (tarih) silüetleri, bölge zemini, küre dokusu, portre tabakası |
| `data/acilis_siluet.js` | veri yeniden üretildi (53 harita, 38 kişi) + kurucu baştan yazıldı |
| `img/acilis/portreler.jpg` (YENİ, 119 KB) · `img/acilis/KAYNAK.md` | 38 yüz, tek istek; lisans künyesi |
| `css/style.css` | `#acilis` bloğu: bantlı küre, ışık/atmosfer, portre kartı, kıvılcım, dalga başlığı |
| `denetim/ARAC-ACILIS-ANIM-0929-URET.py` | emekli (koşturulursa durur — yeni veriyi ezerdi) |
| `.gitignore` | indirilen kaynak önbellekleri |

## Kararlar (ölçüme dayalı)
- **Eski perdedeki atlas kaynaklı imparatorluklar bozuktu** (galeri ile tek tek bakıldı):
  Osmanlı 1600 tanınmaz, Britanya 1900 kırıntı, İspanya 1809 ve Alman İmp. 1911 nokta,
  Rus Çarlığı/Qing paramparça, Timurlu/Memlük/Ming/Altın Orda/İlhanlı rastgele yıl.
  Yerine historical-basemaps'in yıl dilimleri; birden çok dilim verilirse en geniş olanı.
- **Çok parçalı imparatorluk silüeti tek başına tanınmıyor** → tarihî haritalar sönük bölge
  zemini (Natural Earth kara) üstünde çizilir.
- **Küre:** 22 dikey bant (dar ekranda 14); bant içi doku cos θ ile sıkışır, hepsi aynı
  periyotla bileşik katmanda kayar → kenarlar küre gibi daralır. Tur 12 sn.
- **"Ülkesinden fırlama":** dönüş açısı zamanla doğrusal olduğu için her ülkenin öne geldiği
  an peşinen hesaplanır; ana iş parçacığı kilitliyken (perdenin ~%80'i, 0929 ölçümü) de akar.
  Sıradaki 6 öğeden öne en yakını fırlar; hiçbiri önde değilse ÖNEM korunur ve öğe kendi
  tarafındaki ufuktan çıkar. Benzetim (4 dönüş hızı × 36 başlangıç açısı): her ayarda
  53 öğenin 16-20'si arka yüzde kalıyor (53 öğe ~11 sn'de, küre o sürede bir tur);
  bugünkü ayarda 28 ufuk fırlaması — bilerek kabul, sıra önemden şaşmasın diye.
- **"Hareketi azalt" yok sayılır** (Emre'nin makinesinde Windows animasyonları kapalı →
  eski perde hiç dönmüyordu, 0929 §4/2). Yalnız `?hareket=az` durgun kip.
- Bitişte saçılan her şey küreye çekilir, Türkiye ortada belirir; henüz fırlamamışlar iptal.

## Ölçüm
- Betik 66,6 → 177 KB (gzip 26 → 67 KB); portre tabakası ayrı istek 119 KB (sayfa
  başında istenir, gelmeden fırlayan kartın yüzü boş halka görünür).
- Sınama: yerel `py -m http.server`, ayrı sınama sayfası (perde tek başına), 1400×860 ve
  375×812. Konsol hatası yok; 13,8. sn'de 110 canlandırma akıyor, ilk harita yerinde
  (opaklık 0,42); `?bitir=` ile toplanma + Türkiye, perde DOM'dan kalkıyor.
- **Amblem eki (aynı gün, Emre "Evet, ekle"):** 33 amblem (14 bayrak + 19 tarihî arma/tuğra/
  sancak) tek saydam WebP tabakası `img/acilis/amblemler.webp` 93 KB; her biri haritasıyla
  60 ms sonra fırlar, haritanın sol üst köşesine 42 px (dar 30 px) rozet olur. Sınama
  800×600: 33 rozet, 201 canlandırma, konsol hatası yok. Künye ve elenenler `img/acilis/KAYNAK.md`.
  Tuzak: Windows dosya adında büyük/küçük harf ayırmıyor — `rus`/`RUS` önbellekte çakıştı
  (tarihî önbellek dosyası artık `-tarih` ekli).
- **Görünüm ve kişi eki (aynı gün, Emre'nin dört notu):** haritalar zeminsiz (yalnız şekil);
  portreler dört köşe dikey 3:4, baş+omuz tam sığar (eski kırpma yüzün yarısını kesiyordu);
  millet başına 2-3 kişi: +Shakespeare, Jeanne d'Arc, Vasco da Gama, Denizci Henrique, Kangxi,
  Şah İsmail, Şah Abbas; dinî şahsiyetler haritasız kart olarak kendi yerlerinden: Hz. Muhammed
  (adı, hat), Hz. İsa (Ayasofya Deesis), Hz. Musa (Sina ikonu), Buda, Konfüçyüs, Luther.
  Toplam 59 öğe, 51 kişi. Betik 180 → 118 KB (kullanılmayan zeminler yazılmıyor); portre
  tabakası 148 KB. Sınama 1400×860: konsol hatası yok, 220 canlandırma, 51 kart.
- **Bölmeli yerleşim (aynı gün, Emre: "birbirinin üzerine gelmesin, kare kare bölgelere
  rastgele saçılsın"; "bayrakları haritanın üstüne oturt"):** ekran 128×140 (dar 80×96)
  bölmelere ayrılır, küre/yazı şeridine değen bölme yok; her harita (bayrağı üstünde) ve her
  kişi kartı tek bölmeye rastgele düşer, kişiler haritasına yakın bölmeyi seçer. Bölme
  dolunca en az 2,6 sn (dar 1,8 sn) görünmüş en eski öğe söner, yenisi yerine iner.
  Ölçüm (yere inmiş öğe kutuları, 0,5 sn arayla): 1400×860 — 42 bölme, 38 anda çakışma 0,
  en çok erteleme 30 ms; 375×812 — 12 bölme, 58 anda çakışma 0, kuyruk 11 sn uzuyor
  (dar ekranda bölme az; perde erken kalkarsa kuyruğun sonu görünmez — önem sırası korunur).
- **Ölçülmedi:** tam sitede yükleme süresine etkisi (worktree'de üretilmiş veri yok);
  push kapısının `denetle_yayin` sınavı sitenin açılışını koşturur.
