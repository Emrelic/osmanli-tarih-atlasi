# DENIZ-OKU-0085 — 1454 Kefe muhasarasının deniz oku (paket 0085 · H-0020)

Oturum: DENIZ-OKU-0085 (UMIT; SEFER-OKU-0087'nin devamı) · görevi veren UMIT İRTİBAT · ağaç
`C:\atlas-deniz` = `origin/main` `6865cc87` · commit/push yok · diff UYGULANMADI.
Emre: *"osmanlı deniz seferini oklar ile gösterelim sefer okları ile deniz seferi"* (madde
`olaylar_ek5.js:120`, 14 Temmuz 1454). Görsel yok, açılmadı.

## 0. Öngörü (ölçümden önce)
SEFERLER'de 1454 kaydı yok; düz İstanbul→Kefe hattı Boğaz'ı ve Kırım kıyısını keser (~50-70 km);
0087'deki yöntemle (Boğaz orta hattı + rota aleti) < 2 km'ye iner; app.js değişikliği gerekmez.

## 1. Mükerrer kapısı
`data/savaslar.js` + `data/seferler_*.js` tarandı ("1454", "Kefe"): yalnız 1771 Dolgorukov (kara) ve 1914
Hamidiye (deniz) okları var. `denetim/` altında KEFE/DENIZ-OKU adlı ölçüm yok. ⇒ YENİ kayıt.

## 2. Kaynak (TDV, HTTP 200, gövde okundu, birebir)
- `mehmed-ii`: *"İlkin 858 (1454) yazında bu denize donanmasını gönderdi. Karadeniz Ceneviz kolonilerinin
  merkezi olan Kefe, Kırım Hanı I. Hacı Giray'ın müttefik kuvvetleriyle birlikte sıkıştırıldı."* ·
  *"Aynı yaz Osmanlı donanması Akkirman'ı da tehdit etti ve Boğdan beyinden haraç istedi."*
- `haci-giray-i`: *"Haziran 1454'te Hacı Giray, Fâtih Sultan Mehmed ile Kefe'yi almak için bir anlaşma
  yaptı."* · *"Elli altmış kadar kadırgadan oluşan Osmanlı donanması Kefe önlerinde demir atınca Hacı Giray
  14 Temmuz 1454'te 7000 atlısıyla şehri karadan kuşattı."*
- `kefe`: 1454 kuşatmasını anlatmıyor (yalnız Hacı Giray-Osmanlı ittifakı ve 1475 fethi).
- Ölü slug: `haci-giray` (302), `demir-kapi` (302).

## 3. Yapılan — `denetim/DENIZ-OKU-0085.diff` (`data/savaslar.js`, +20 satır)
Tek kayıt `d85-kefe-donanma-1454`, `tur:"deniz"`, `f:"1454-06-01"` (AY — anlaşmanın ayı; çıkış günü
kaynakta yok, `tarih_hassasiyet` alanında yazılı) · `t:"1454-07-14"` (kuşatma başlangıcı) ·
`yol` İstanbul→Kefe · `rota` = İstanbul Boğazı orta hattı (ne_10m_land'in iki kıyısının ortası, 18 nokta)
+ rota aletiyle açık deniz (3 nokta).

ÇİZİLMEYENLER (gerekçeli, kayıt yorumunda):
- Hacı Giray'ın kara kolu — TDV hareket noktasını vermiyor; Solhat'tan çıkış yazmak çıkarım.
- Akkirman tehdidi — TDV "Aynı yaz" diyor; Kefe'den önce mi sonra mı belli değil, sıra uydurulmaz.

## 4. Ölçüm (headless Chrome, gerçek index.html, `paketle.py yenile` SONRASI; app.js'in kendi `seferGuncelle`/`seferHat`'ı)
```
kara üstü (ne_10m_land, liman muafiyetsiz katı ölçü):  düz yol 61,2 km  →  rota 0,6 km (Kefe limanına yaklaşma)
  (rota aleti tek başına Boğaz'da 12,0 km kara bırakıyordu; orta hat bunu 0'a indirdi)
kavis: false (deniz) · çizim hattı 22 nokta
görünürlük: 1454-01-01 gizli · 06-01 → 09-01 GÖRÜNÜR (14 Temmuz maddesi dahil) · 1455-01-01 gizli
  okun düştüğü madde: "Kuzey Ege adalarının alınışı: Bozcaada, İmroz ve Taşoz" (1455)
```
Görüntü: `SINAV-DENIZ-OKU-0085-kefe-1454-07-14-z5.png` — ok Boğaz'dan çıkıp açık denizden Kefe'ye
uzanıyor, ⚓ simgesi, "deniz harekâtı" lejantı.
Uygulanabilirlik: `git apply --check` taban (`origin/main` 6865cc87) ✓ · taban + `SEFER-OKU-0087.diff` ✓
(aynı dosya, ayrı bölge) · CR 0. app.js'e dokunulmadı ⇒ Z2 APPJS ile ilişkisi yok.

## 5. Bulgular / bulunamadı
- 🔴 Madde metni (`olaylar_ek5.js:120` `d:`) *"kırk-elli parçalık bir Osmanlı donanması"* diyor; kendi
  kaynağı `haci-giray-i` **"Elli altmış kadar kadırga"** der. Madde düzeltilmeli (bu oturumun dosyası değil).
- Donanmanın İstanbul'dan çıkış günü, Kefe'ye varış günü ve kuşatmanın kalktığı gün kaynakta YOK.
- Ok 14 Temmuz'dan sonra da bir sonraki maddeye (1455) kadar görünür — arada madde yok; kuşatmanın sonu
  için madde yazılırsa ok orada düşer.
- Uygulandıktan sonra `py arac/paketle.py yenile` ŞART (paket_12). Ayrıca temiz `origin/main`de paketle
  yine **bayat paket** bildirdi (bu kez 9 kaynak) — GORUNTU-0087 §5'teki bulgunun devamı.
