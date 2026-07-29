# Oturum 6 — `arac/denetle.py` ve `arac/denetle_kapsama.py` örnek çıktıları

Bu dosya `oturumlar/OTURUM-6-ARACLAR.md` görevinin "Bitirdiğinde" adımı için
tutulan örnek çalıştırma kaydıdır. Yorum/düzeltme bu oturumun işi değil;
sayılar aşağıda olduğu gibi bildirilmiştir.

## `py arac/denetle.py`

```
Veri okunuyor...
  567 yerleşim, 799 kronoloji maddesi

Değişmez 1  ✓  567 yerleşim, 29 sahipsiz (beklenen 29)

Değişmez 2  ✓  424 kırılma, 0 açık (beklenen 0)

Değişmez 3  ✓  311 çelişki (beklenen ≤311) — bilinen borç, bkz. MIMARI.md §3.4

SONUÇ: temiz
```

Çıkış kodu 0. Üç sayı da `CLAUDE.md` §3'ün belgelediği rakamlarla birebir
uyuşuyor (567/29, 424/0, 311). `--ayrinti` bayrağı her ihlali/çelişkiyi tek
tek listeliyor; çıktısı denendi, `CLAUDE.md`'deki örneklerle (Söğüt/Bursa,
Eskişehir/Kütahya vb.) eşleşiyor.

## `py arac/denetle_kapsama.py` (varsayılan: adım 0.25°, eşik 120 km)

```
567 yerleşim yüklendi.

Kara maskesi (Natural Earth 10m)...
Göller çıkarılıyor...
  117 büyük göl çıkarıldı

Izgara üretiliyor (adım 0.25°)...
  karadaki nokta: 53856
En yakın yerleşime uzaklıklar hesaplanıyor...

Izgara: 0.25°  |  karadaki nokta: 53856  |  eşik: 120 km
Eşiği aşan: 39475 nokta (%73.3)

En kötü boşluklar (ilk 15, tamamı bugünkü kutu içinde ama Osmanlı çekirdeğinin
çok dışında — Batı Afrika kıyısı, en yakın nokta Timbuktu/Ndjamena çölü dolgu
noktaları):
    1468 km     4.38,  -7.62   (diğer)     en yakın: Timbuktu
    ...

Bölge özeti (kaba dikdörtgen kutular, yalnız okunabilirlik için — bkz. dosya
başındaki uyarı):
   Anadolu              en kötü    145 km   ✗
   Rumeli/Balkanlar     en kötü    167 km   ✗
   İtalya               en kötü    254 km   ✗
   ...
   diğer                en kötü   1468 km   ✗
```

**Okunuşu:** `BOLGE` kutusu (`uret_petek.py`'deki `box(-12, 1.5, 62, 62)`)
bugünkü 567 noktanın kapsadığından çok daha geniş — Batı Afrika kıyısı, Orta
Avrupa'nın çoğu, İskandinavya gibi büyük parçalar kutunun içinde ama hiç
yerleşim yok. Bu **beklenen bir durum**: `MIMARI.md` §6'daki sıraya göre
"dünya kapsamı: yerleşimler" fazı henüz başlamadı (bkz. `CLAUDE.md` §1.5).
Aracın kendisi bunu yorumlamaz; hangi boşlukların kasıtlı dolgu (çöl) hangisinin
eksik nokta olduğuna entegrasyon oturumu karar verir.

Not: `Anadolu` kutusu bile varsayılan 120 km eşiğinde 145 km'lik bir boşluk
gösteriyor — Osmanlı çekirdeğinde `MIMARI.md` §5'in öngördüğü 60 km ölçütüyle
ayrıca denetlenmeli (`--esik 60`); bu oturum yalnız aracı teslim ediyor, o
denetimi yapmadı.

Görsel örnek (adım 1.0°, hızlı önizleme): `denetim/kapsama_ornek.png`.
`--gorsel` bayrağı kara maskesini gri, yerleşimleri × işaretiyle, eşiği aşan
ızgara noktalarını kırmızı basıyor; hızlı önizleme çalıştı ve dosya üretti.

## Kara maskesi konumu

İlk yazıldığında `arac/uret_petek.py`'deki `BASEMAPS` sabiti bir önceki
oturumun geçici klasörüne işaret ediyordu; bu betik önce o sabiti aynen
kopyalamıştı. Çalışma sırasında entegrasyon oturumu `veri-kaynak/` klasörünü
depoya aldı ve `uret_petek.py`'nin `BASEMAPS`'ini `os.path.join(KOK,
"veri-kaynak")`'a güncelledi (commit `245ec03`) — bu betik de aynı kalıcı
yola güncellendi ve yeniden test edildi, sonuçlar birebir aynı.
