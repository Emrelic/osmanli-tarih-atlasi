# Ⓐ mı Ⓑ mi — MALİYET ÖLÇÜMÜ (seçmeden önce)

> Koordinatör (M-3087): *"hangisinin daha ucuz olduğunu SEN ölç"*.
> Ölçtüm. Aşağıdaki iki sayı kararı veriyor.

## Ⓑ — 1281-1923 tamamında toplam çift sayısı

🟢 **Yapısal bir kestirme var ve ölçüldü:** Gabriel komşuluğu yalnız
**nokta kümesine** bağlı, sahipliğe DEĞİL. Nokta kümesi de yalnız
`kur:`/`bit:` günlerinde değişir. ⇒ Gabriel'i her gün değil, her
**ayrık nokta kümesi** için bir kez kurmak yeter.

```
`kur:` taşıyan kayıt (pencere içi)     1138
`bit:` taşıyan kayıt (pencere içi)     19
🔴 AYRIK NOKTA KÜMESİ SAYISI           543   (benzersiz kur/bit günü + 1)

sahiplik değişim günü (kesişim için)   1817
```

Bir Gabriel koşusu **~95 saniye** sürüyor (3630 noktada ölçüldü).
⇒ **Ⓑ'nin maliyeti ≈ 543 × 95 sn = 14.3 SAAT.**

🔴 **VE KOŞU 7b ŞU AN CPU KULLANIYOR** (`§7`: bir işi başlatmadan
önce tahtaya yaz ve bekle). 14.3 saatlik bir iş, koşan üretimle
CPU paylaşır ve **ikisini de yavaşlatır** — ve `§7`nin kayıtlı
vakası tam bu: *iki koşu aynı anda başlatıldı, ikisi de yavaşladı
ve süre ölçümü de bozuldu.*

## Ⓐ — 39 uzak kimlik çifti deniz aşıyor mu

```
uzak kimlik çifti (en yakını >300 km)  39
bu çiftlerin taşıdığı YERLEŞİM çifti   75
test edilecek doğru parçası            75
kara maskesi                           ne_10m_land.geojson · 11 parça
```

⇒ **Ⓐ'nın maliyeti: 75 segment × bir shapely kesişim testi ≈ SANİYELER.**

## 🔴 HÜKÜM — Ⓐ, Ⓑ'den ÜÇ MERTEBE ucuz

```
Ⓐ  ~75 segment testi          ≈ saniyeler        🟢 ŞİMDİ YAPILABİLİR
Ⓑ  543 Gabriel koşusu          ≈ 14.3 saat        🔴 KOŞU 7b SÜRERKEN OLMAZ
```

⇒ **Ⓐ seçildi.** Ⓑ bir *reddetme* değil bir **erteleme**: yapısal
kestirmesi ölçüldü ve yazıldı, koşu bittiğinde **doğrudan koşulabilir.**
📌 Ve Ⓑ'nin maliyetini ölçmek onu ucuzlattı: naif yol her *kırılma
günü* için Gabriel kurardı (1823 koşu ≈ 48 saat); nokta-kümesi
kestirmesi onu **543 koşuya** indiriyor.
