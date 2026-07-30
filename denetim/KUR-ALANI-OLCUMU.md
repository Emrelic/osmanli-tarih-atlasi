# `kur:` hatasının bedeli — 1,7 milyon km²

**Ölçüm tarihi:** 2026-07-30 · **Ölçen:** hatalar 4-5-6 oturumu (r83 sonrası)
**Durum:** ölçüm tamam, düzeltme YAPILMADI — `arac/uret_petek.py`, Oturum 0'da.

## Sorun

`arac/uret_petek.py` `kur:` alanını **okumuyor.** Henüz kurulmamış bir şehrin
peteği 1281'den beri haritada duruyor ve komşularından toprak koparıyor.
`arac/denetle.py` ile şehir dizini `kur:`'u okuyor, motor okumuyor — yani
denetim temiz raporlarken harita 1300'de 1900'ün şehirlerini gösteriyor.

`MIMARI.md §3.1` bunu "zaman dilimli Voronoi" olarak tanımlıyor. `DURUM.md`
zaman çizgisinin neredeyse düz olduğunu ölçtü: **642 yılda 41 nokta**
(1281'de 851 nokta sahnede, 1923'te 892). Aşağıdaki ölçüm o düzlüğün
km² cinsinden bedelini veriyor.

## Ölçüm yöntemi

Çıplak Voronoi (yaslama öncesi) hücreleri `girdi.yukle()`'nin verdiği 917
nokta üzerinden kuruldu, kara maskesiyle kesildi (`BOLGE` + `KARA_TOL=0.002`),
`kur:` taşıyan her noktanın hücre alanı geodezik olarak hesaplandı.
Betik: bu turda scratchpad'de; yöntem `konum_denetimi()`'nin maskesiyle aynı.

## Sonuç

**34 nokta `kur:` taşıyor ve kuruluşlarından ÖNCE toplam 1.699.095 km²
tutuyorlar.** Karşılaştırma için: Osmanlı'nın zirve yüzölçümü ~5,2 milyon km².

| Yerleşim | kur: | Kuruluşundan önce tuttuğu alan |
|---|---|---|
| Ufa | 1574-01-01 | **391.590 km²** |
| Perm | 1723-01-01 | **364.108 km²** |
| Saratov | 1590-07-12 | 175.405 km² |
| St. Petersburg | 1703-05-27 | 103.248 km² |
| Helsinki | 1550-06-12 | 96.331 km² |
| Tsaritsyn | 1589-07-02 | 78.982 km² |
| Kesela | 1840-07-15 | 68.258 km² |
| Abu Dabi | 1761-01-01 | 62.552 km² |
| Kuveyt | 1716-01-01 | 60.891 km² |
| Doha (Katar) | 1825-01-01 | 49.855 km² |

Tarih kesitlerine göre haksız alan:

```
1300-06-15   34 nokta henüz kurulmamış   1.699.095 km²
1500-06-15   26 nokta                    1.673.105 km²
1700-06-15   17 nokta                      875.664 km²
```

## Neden bu kadar büyük

En büyük iki kalem Ufa ve Perm: ikisi de Ural eteğinde ve **komşusuz**.
Nokta yoğunluğu düşük olduğu için hücreleri zaten kocaman; kuruluş tarihleri
de geç (1574, 1723). Yani hata iki çarpanın ürünü: **geç kuruluş × seyrek
komşuluk.** Bu, `kur:` işinin nokta ekledikçe BÜYÜYECEĞİ anlamına gelir —
Kuzey-Doğu Avrupa partisi Petersburg, Odessa, Harkov, Göteborg, Zaporijya
Sıçı'nı getiriyor ve hepsi geç kuruluşlu.

⚠️ Bu yüzden `YAPILACAKLAR.md` sırayı doğru koymuş: **`kur:` desteği Oturum
16'nın merge'inden ÖNCE.** Aksi hâlde parti hatayı büyütür.

## Düzeltme tasarımı — zaman dilimli Voronoi'ye gerek YOK

Diyagramı her dönem için yeniden hesaplamak pahalı (441 kırılma × 917 nokta)
ve gereksiz. `YAPILACAKLAR.md`'nin işaret ettiği yol daha ucuz ve motorda
zaten çalışan bir makineyi tekrar kullanıyor:

> Kurulmamış peteği o dönem için en yakın **sahipli** komşuya bağışla —
> ADA KURALI'nın kullandığı makinenin aynısı.

Uygulama, dönem döngüsünün içinde:

1. Dönem tarihi `g` için `kur: > g` olan noktaların indeks kümesi çıkarılır
2. O noktaların `PETEK_D` payları, kümede OLMAYAN en yakın komşuya devredilir
   (ada kuralındaki "boşta kalan payı içerideki en yakın yerleşime ver"
   döngüsünün birebir aynısı, satır ~470)
3. `bit:` de aynı yolla işlenir: `bit: <= g` olan nokta sahneden çıkar

Maliyet: dönem başına bir STRtree sorgusu ve birkaç `difference`. Geometri
havuzu paylaşımı bozulmaz çünkü devir **dönem kaydı üretilirken** yapılır,
petek geometrisi tek kalır.

⚠️ Devir sonrası `alan_km2` yeniden hesaplanmalı — dönem kayıtlarındaki `ao`
ve `av` alanları buna bağlı.

## Yan etki: Değişmez 1 ile ilişki

`denetle.py`'nin Değişmez 1 kontrolü `kur:`'u zaten okuyor ve kurulmamış
noktayı "sahipsiz" saymıyor. Motor `kur:`'u okumaya başladığında ikisi
hizalanır. `bit:` ise HENÜZ HİÇBİR ARAÇTA yok (VERI-YAPISI.md'de "planlanan
alan" olarak duruyor) — motora eklenirken `denetle.py`'ye de eklenmeli, yoksa
`bit:` sonrası sahipsizlik yanlış alarm üretir.
