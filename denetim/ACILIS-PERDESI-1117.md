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
- **Ölçülmedi:** tam sitede yükleme süresine etkisi (worktree'de üretilmiş veri yok);
  push kapısının `denetle_yayin` sınavı sitenin açılışını koşturur.
