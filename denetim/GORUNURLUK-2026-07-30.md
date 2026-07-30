# Dokuzuncu denetim — görünürlük · 30 Temmuz 2026

**Araç:** `arac/denetle_gorunurluk.py` (yeni dosya).
**Soru:** *bir kırılma kullanıcının ekranında GERÇEKTEN değişiyor mu?*
`OGRENILENLER.md §10`'un araca çevrilmiş hâli.

```bash
py arac/denetle_gorunurluk.py            # görünmeyen kırılmalar
py arac/denetle_gorunurluk.py --dagilim  # eşik seçmek için ham dağılım
```

Ölçüm: üretilmiş `donemler.js`'te ardışık iki dönem arasında boyanan alanın
değişimi. **441 kırılmanın hepsi** için koşuyor.

---

## Kurulan iki tuzak — ikisi de kuruldu

**1. Yalnız `o` sayma.** Tâbi katmana geçen petek `o`'dan düşer `v`'ye girer;
yalnız `o` ölçülürse Bursa bile "0 km²" çıkar. Ölçüm `o + v` toplamı üzerinden.
Ayrıca katman arası geçiş de bir değişimdir (toplam sabit kalır ama ekranda
**renk** değişir), o yüzden `max(Δtoplam, |Δo|, |Δv|)` alınıyor.
*Not: `z` katmanı bugünkü çıktıda yok — şehzade payları `devletler_harita.js`'ten
çiziliyor.*

**2. Kayıttaki `ao` alanını kullanma.** `alan_km2` `round(T, -3)` yapıyor, yani
500 km²'nin altındaki her değişimi sıfırlıyor. Yedinci denetime bu yüzden 50 km²
mutlak eşik konmuş ve 101 yanlış alarm vermişti. **Bu araç alanı geometriden
yeniden hesaplıyor, yuvarlamıyor.**

**3. Biçim tuzağı (yeni).** `o`/`v` artık geometri değil, `PARCALAR` havuzuna
indeks dizisi. İlk yazımda araç `TypeError` verdi — iyi ki gürültülü hataydı;
sessiz olsaydı bütün alanları 0 ölçerdi. Çözüm tek yerde (`oku_donemler`).

## Eşik — veriden okundu

```
= 0 km²          9        150-1000 km²    36
1-10 km²         2        1-10 bin km²   166
10-50 km²        2        >10 bin km²    224
50-150 km²       2
```

Dağılımda **temiz bir boşluk** var: 15 kırılma 150 km²'nin altında, sonra 36'sı
150-1000 arasına sıçrıyor. 150 km² sezgiyle değil bu boşluktan seçildi.

Oran ölçütü (`toplam × 1e-4`) de denendi ama geç dönemde 500 km²'ye çıkıyor ve
**Ege adalarının kaybını "görünmez" sayıyor** — oysa kullanıcı tam da o adaları
ekran görüntüsüyle bildirdi. Bu yüzden oran öldürücü değil, ikinci kademe
"şüpheli" listesi (11 kırılma).

---

## Bulgular — 15 / 441 kırılma görünmüyor

| Δ | Tarih | Kırılma | Teşhis |
|---|---|---|---|
| **0,0** | 1326-04-06 | **Katılım: Bursa** | nokta **1310'dan beri** Osmanlı boyalı |
| **0,0** | 1331-03-02 | Katılım: İznik | 1325'ten beri boyalı |
| **0,0** | 1416-09-01 | Katılım: Manisa | 1415'ten beri boyalı |
| **0,0** | 1429-02-01 | Katılım: Kütahya, Afyon, Simav… | aynı sınıf |
| **0,0** | 1499-08-28 | Katılım: İnebahtı | 1480'den beri boyalı |
| **0,0** | 1922-09-07 | Katılım: Aydın | 1920'den beri boyalı |
| 0,2 | 1313-01-01 | Katılım: Harmankaya | aynı sınıf |
| 1,2 | 1337-01-01 | Katılım: İzmit | aynı sınıf |
| 120,2 | 1302-08-01 | Katılım: Marmaracık | aynı sınıf |
| **0,0** | 1685-10-19 | Kayıp: Solnok | bilinen — peteği sıfır |
| 7,5 | 1683-10-09 | Kayıp: Estergon | bilinen — 8 km² |
| **0,0** | 1883-01-19 | Kayıp: Kordofan | **yeni** — Mehdî isyanında kayıp hiç görünmüyor |
| 40,9 | 1657-08-25 | Katılım: Bozcaada | ada gerçekten küçük |
| 40,9 | 1912-10-07 | Kayıp: Bozcaada | ada gerçekten küçük |
| 147,9 | 1915-06-10 | Kayıp: Kemeran | ada gerçekten küçük |

### Asıl bulgu: dokuzu tek bir sebepten

**Δ = 0 olan katılımların hepsi, yerleşimin fetihten ÖNCE zaten boyalı
olmasından kaynaklanıyor.** Güncel çıktıda nokta sorgusuyla doğrulandı:

```
Bursa      1310:OSM  1325:OSM  1326:OSM     fetih 1326-04-06  → 16 yıl erken
İznik      1325:OSM  1330:OSM  1332:OSM     fetih 1331-03-02  →  6 yıl erken
İnebahtı   1480:OSM  1495:OSM  1500:OSM     katılım 1499-08-28 → 19 yıl erken
Aydın      1920:OSM  1921:OSM  1923:OSM     katılım 1922-09-07 →  2 yıl erken
Manisa     1410:boş  1415:OSM  1418:OSM     katılım 1416-09-01 →  1 yıl erken
```

Bu, `denetim/BULGULAR-2026-07-29.md` **B-2**'nin bağımsız doğrulaması:
`delikleri_doldur` iç halkaları siliyor, `kapat(0.15)` ~33 km'ye kadar köprü
kuruyor; çevresi Osmanlı olan yerleşim fethinden önce yutuluyor. Dün bu yalnız
"nokta yanlış renkte" diye ölçülmüştü; bugün ikinci sonucu görünüyor:
**fetih anı ekranda hiç yaşanmıyor.** Kronoloji "Bursa fethedildi" diyor, harita
kıpırdamıyor.

İki denetim iki ayrı yönden aynı kusura varıyor — B-2'nin önceliğini yükseltir.

### Yeni ve bağımsız: Kordofan 1883

Mehdî isyanında Kordofan'ın kaybı **0,0 km²**. Bilinen Estergon/Solnok sınıfının
üçüncü örneği; daha önce ölçülmemişti.

---

## Denetimin kör noktası

- **Yalnız Osmanlı gövdesini ölçüyor.** `devletler_harita.js`'teki 97 devletin
  kendi kırılmaları ölçülmüyor; Venedik'in bir ada kaybı görünmüyorsa yakalanmaz.
  Aynı yöntem oraya da uygulanabilir, ayrı iş.
- **Alan değişimini ölçüyor, KONUM değişimini değil.** Aynı gün eşit alan alınıp
  verilirse Δ ≈ 0 çıkar ve kırılma "görünmez" sanılır. Bugünkü veride örneği yok
  ama mümkün.
- **Şüpheli kademesi (11 kırılma) hükümsüz** — gözden geçirme listesi, bulgu
  değil. Çoğu Ege adası kaybı ve muhtemelen gerçekten görünür.
