# Bir koşunun çıktısı, onu üreten aletin HÂLİNE bağlıdır — "koşu bitti" donukluğun bittiği an DEĞİLDİR

> Kimlik D198 · 12 Eylül 2026 · KITA 7 — B3 KORİDOR bulgusu

---

- 20 saatlik bir üretim koşusu bitti, çıktısı (`data/altlik.js` ve
  kardeşleri) diskte durdu. Koordinatör 1.MURAT bunu "koşu bitti,
  `arac/` artık açık" diye okudu ve KITA 7'ye `arac/uret_petek.py`
  içine bir yama uygulatıp COMMIT ETTİRDİ (365f4eb).
- Yayın kapısı (`denetle_yayin.py`) bunu **haklı olarak REDDETTİ**:
  ```
  ✗ üretim izi: taze 6 · bayat 1 · izsiz 0
      BAYAT  data/altlik.js    değişen: arac/uret_petek.py
  ```
  Motor koşunun bittiği andaki HÂLİNDEN farklıydı (yama girmişti) —
  çıktı artık onu ÜRETEN aletin GÜNCEL hâlini yansıtmıyordu.
- ⇒ **"Koşu bitti" iki ayrı ANI aynı isimle anıyor:**
  ```
  ① koşu PROCESS'İ bitti      — motor artık CPU/bellek tüketmiyor
  ② koşunun ÇIKTISI YAYINLANDI — motor artık DEĞİŞTİRİLEBİLİR
  ```
  ①'in gerçekleşmesi ②'nin gerçekleştiği anlamına GELMEZ. Aradaki
  pencerede (koşu bitti ama henüz yayınlanmadı) motor hâlâ **DONUK**
  olmalıydı, tıpkı koşu SÜRERKEN olduğu gibi — `§7`'nin "üretim
  koşarken girdi dosyaları donmuştur" kuralının, koşu SONRASI, YAYIN
  ÖNCESİ pencereye de UZANMASI GEREKTİĞİ, yazılı değildi.
- **Kusur KİMSEDE tek başına değildi:** koordinatör "artık açık" dedi
  ama yayının inip inmediğini SORMADI; işçi (KITA 7) "arac/ AÇIK" beyanına
  güvendi ama kendi tarafından `denetle_yayin.py`yi çalıştırıp
  doğrulamadı (D010'un "aracı ölçmeden önce iki yönde de sına" kuralının
  bir örneği daha — burada sınanmayan yön "yayın gerçekten indi mi").
- **Zarar SIFIR oldu, ama TESADÜFEN:** yama içerik olarak zararsızdı
  (saf ekleme, mevcut kararı değiştirmiyordu) ve `git diff --stat` ile
  KAPSAMI doğrulanmıştı (55+/5-, yalnız 3 blok). Koordinatör durumu
  fark edip yamayı GERİ ALDI (`denetim/YAMA-B3-UYGULANMIS-0912.diff`
  olarak yedekleyip), yayın indikten sonra AYNEN yeniden uygulanacak.
  Eğer yama zararlı bir değişiklik olsaydı, aynı sıra hatası çok daha
  pahalıya patlardı.

**Kural:** `arac/`/`data/`nin "açık" ilan edilmesi, ilan edenin **hem
koşunun sürecini hem de yayın kapısının GEÇTİĞİNİ** ikisini birden
doğrulamasını gerektirir — yalnız birincisi yeterli değildir. Bir işçi
oturum da "arac/ açık" beyanına güvenmeden önce, mümkünse
`py arac/denetle_yayin.py`yi kendisi çalıştırıp "temiz" gördüğünü
teyit eder; göremiyorsa bunu açıkça sorar (`§7.1⑥`).

📌 Bu, `§7`'nin *"üretim koşarken girdi dosyaları donmuştur"* kuralının
**tersi yönü**: orada donukluk koşu SÜRERKEN başlıyordu, burada
donukluğun **NE ZAMAN BİTTİĞİ** yanlış ölçüldü — "süreç bitti" ile
"yayın indi" farklı olaylar, ve `§10`'un *"bitti sanıp erken haber
vermek, hiç haber vermemekten kötüdür"* dersinin **motor-devri** yüzü.
