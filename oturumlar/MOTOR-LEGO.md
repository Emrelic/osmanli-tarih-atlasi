# MOTOR-LEGO — artımlı motor mimarisi (Emre, 19 Eylül 2026)

**İlke:** bir ampul için bina yıkılmaz. Motor bir kez tam kurulur; sonraki koşular yalnız
DEĞİŞEN parçaları söküp takar. Doğruluktan taviz yok: artımlı çıktı, sıfırdan koşuyla
**BİT BİT AYNI** olmak zorunda; değilse artımlı yol kullanılmaz.

## Katmanlar (Emre'nin A–G'si, motorun gerçek aşamalarına eşlenecek)
| Katman | İçerik | Ne zaman değişir | Önbellek anahtarı (parmak izi) |
|---|---|---|---|
| A coğrafya | kara, deniz, göl, nehir, dağ, çöl, yürüyüş maliyet ızgarası | neredeyse hiç | veri-kaynak/ dosyaları + ilgili motor kodu |
| B şehirler | yerleşim noktaları (konum + var olduğu pencere) | nokta eklenince/taşınınca | nokta listesi |
| C şehir bölgeleri | petekler (Voronoi + yaslanma + kesim) | yalnız YAKINDA nokta eklenince/çıkınca | o karodaki + komşu karolardaki canlı nokta kümesi + A |
| D siyasi sahiplik | peteğin boyası (s:, isg:, tâbi) | bayrak değişince | petek × sahip listesi — geometri YENİDEN KULLANILIR, yalnız boya |
| E ileri sınır | kaynaklı sınır çizgileri, devlet gövdeleri (birleşim), D/E katmanı | sahip/sınır değişince | devlet × epok, yalnız gövdesi değişen devlet |
| F zaman | epoklar (her değişim günü bir dilim) | — | C/D/E anahtarları epok başına |
| G mekân | karolar/bölgeler | — | anahtarlar karo başına |

**Lego parçası = (katman × karo × epok).** A tek parça (karolara bölünmüş); B tek liste;
C/D/E her biri karo × epok. Parça sayısı ölçülecek (epok sayısı × karo sayısı).

## Kıta mı karo mu
Kıta (Avrasya/Afrika/…) kaba: değişikliklerin çoğu Avrasya'da, Macaristan için bütün
Avrasya yeniden kurulur. Öneri: **ızgara karo** (ör. 10°×10°) + **hale** (komşu karo
şeridi, çünkü bir petek karo sınırını aşar). Karo boyutu ölçümle seçilir. Kıta düzeyi
yalnız bir raporlama/elle koşu seçeneği ("yalnız Afrika'yı koş") olarak kalır.

## Doğruluk tuzakları (ölçülmeden "yerel" sayılmaz)
- Noktası olmayan bölge en yakın peteğe emilir (CLAUDE.md §2) — emilme uzağa ulaşabilir.
- Epok devri (ölü peteğin payı), dolgu, ekleyici kapı puanı, çöl tavanı (300 km), yürüyüş
  bütçesi (40 saat), puan kapısı (200 km): hepsinin **etki yarıçapı** ölçülecek; hale en
  az bu yarıçap olmalı.
- Günden güne bağımlılık (bir epok bir öncekinin sonucunu kullanıyorsa) zincir boyunca yayılır.
- Parmak izi motor KODUNU da kapsar: motor değişince ilgili katman kendiliğinden geçersiz.

## Roller
- **MOTOR-YURUYUS** (Opus 1008, dal `motor-hiz`, `C:/atlas-hiz`): uygulama — `arac/uret_petek.py`,
  `arac/kos_ve_yayinla.py`, yeni `arac/motor_onbellek.py`. Tek yazar.
- **MOTOR-SINAV** (taze Opus): bağımsız sınav — `arac/motor_esitlik.py` (çıktı hash kıyası,
  senaryo üreteci) + etki yarıçapı ölçümü. uret_petek.py'ye YAZMAZ.

## Kabul
Aynı girdide ① sıfırdan ② önbellekli ③ yarıda kesilip devam ④ paralel ⑤ tek karo
değişikliğiyle artımlı → `donemler.js · devletler_harita.js · bolgeler.js · devirler.js`
BİT BİT AYNI. Senaryolar: Macaristan'a bir nokta ekle · bir şehrin sahibini değiştir ·
bir d: tarihini kaydır · Afrika'da nokta ekle. Her senaryoda yeniden hesaplanan
parça sayısı ve süre raporlanır.
