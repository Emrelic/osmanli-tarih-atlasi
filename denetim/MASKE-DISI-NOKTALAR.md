# 32 yerleşim kara maskesinin dışında — sessiz hata sınıfı

**Ölçüm tarihi:** 2026-07-30 · **Ölçen:** hatalar 2-3 oturumu (r70 commit'i)
**Durum: DÜZELTİLDİ — 2026-07-30, hatalar 4-5-6 oturumu.** Yeniden ölçümde
baraj gölü kuralıyla 36 nokta çıktı (bu listedeki 32 + Akkirman, Ohri, Stokholm
— maske `simplify(KARA_TOL)` ile kurulunca üçü de dışarı düşüyor — ve o turda
eklenen mükerrer Katîf kaydı, silindi). 36'sı en yakın kara hücresine + 150 m
içeri payla kaydırıldı; maske dışı 0. Kalıcı çözüm de yazıldı: `denetle.py`
içinde `konum_denetimi()`, altıncı denetim, `BEKLENEN_MASKE_DISI = 0`.

**Eski durum:** tanı tamam, düzeltme YAPILMADI — `data/yerlesimler.js` şu anda başka
bir oturumun elinde (hatalar 4-5-6), çakışmamak için dokunulmadı.

## Nasıl bulundu

Kullanıcı sordu: *"Taman yarımadasının alınışı maddesinde haritada hiçbir
değişiklik olmuyor. 1482"*

Veride bir tarih uyuşmazlığı vardı (kayıt 1482-01-01, maddesi 1 Haziran 1482 —
151 gün) ve düzeltildi. Değişmez 2 bunu kaçırmıştı çünkü 1482-01-01'in ±30 günü
içinde alâkasız bir madde var (Zaklise'nin Venedik'e bırakılması), yani kırılma
"maddeli" sayılıyordu.

**Ama üretimden sonra ölçtüğümde yarımada hâlâ 1475'te el değiştiriyordu.**
Asıl sebep tarih değildi: Taman'ın koordinatı Natural Earth kara maskesinde
**denizde** kalıyor (740 m açıkta). Nokta hiç toprak sahibi olmuyor, yarımadayı
komşu petek (Kerç, 1475-06-06) boyuyor. Ada kuralı bu noktayı haklı olarak
dışarıda bırakıyor — kural doğru çalışıyor, veri yanlış yerde.

Aramayı 748 noktanın tamamına yayınca **32 nokta** aynı durumda çıktı.

## Neden önemli

Maskenin dışındaki nokta **hiç toprak sahibi olamaz.** Yani o yerleşimin bütün
fetih ve kayıp maddeleri haritada **hiçbir toprak değişimi göstermez.** Listede
Gelibolu var: 1354 fethi, 1366 Savoy seferindeki kaybı, 1416 deniz savaşı —
hiçbiri haritaya yansımıyor. Kullanıcı Gelibolu'nun kaybını ayrıca sormuştu
("gelibolunun kaybı haçlı savoy seferi..."); ok eklendi ama toprak değişimi
zaten hiç görünmüyordu.

Oturum 14 kendi 153 noktasında aynı sınıfı yakalayıp 7'sini en yakın kara
hücresine kaydırmıştı (en fazla 2.8 km). **Mevcut küme için hiç ölçülmemişti.**

## Liste (uzaklık = maskeye en kısa mesafe)

| Yerleşim | enlem | boylam | km | g | k |
|---|---|---|---|---|---|
| Maydos (Eceabat) | 40.190 | 26.360 | 1.39 | 0 | 4 |
| Parga | 39.283 | 20.400 | 1.03 | 0 | 4 |
| Değirmenlik (Milos) | 36.708 | 24.440 | 0.96 | 0 | 4 |
| Nakşa | 37.104 | 25.376 | 0.90 | 0 | 3 |
| Şerşel (Cherchell) | 36.610 | 2.190 | 0.81 | 0 | 4 |
| Rab (Arbe) | 44.756 | 14.766 | 0.79 | 0 | 0 |
| **Gelibolu** | 40.410 | 26.670 | 0.78 | 2 | 3 |
| **Taman** | 45.211 | 36.716 | 0.74 | 0 | 3 |
| Rumeli Hisarı | 41.085 | 29.057 | 0.56 | 2 | 4 |
| Özi | 46.619 | 31.539 | 0.56 | 0 | 3 |
| Fornoz (Fourni) | 37.580 | 26.470 | 0.55 | 0 | 4 |
| Tekirdağ | 40.978 | 27.511 | 0.54 | 0 | 4 |
| Alanya | 36.544 | 31.999 | 0.52 | 1 | 3 |
| Kavala | 40.940 | 24.412 | 0.43 | 0 | 4 |
| Modon | 36.818 | 21.703 | 0.42 | 0 | 3 |
| Preveze | 38.958 | 20.751 | 0.38 | 1 | 4 |
| Karistos (Kızılhisar) | 38.014 | 24.418 | 0.33 | 0 | 4 |
| İskiathos | 39.165 | 23.490 | 0.30 | 0 | 4 |
| Masavva | 15.608 | 39.474 | 0.29 | 0 | 3 |
| Girne (Kyrenia) | 35.341 | 33.319 | 0.23 | 0 | 4 |
| Pag (Pago) | 44.470 | 15.021 | 0.21 | 0 | 0 |
| Kopenhag | 55.676 | 12.568 | 0.19 | 0 | 0 |
| Çeşme | 38.325 | 26.306 | 0.18 | 0 | 4 |
| Venedik | 45.440 | 12.316 | 0.16 | 0 | 0 |
| Karadeniz Ereğli | 41.283 | 31.416 | 0.12 | 0 | 4 |
| Ayacyo (Ajaccio) | 41.930 | 8.740 | 0.10 | 0 | 0 |
| Batum | 41.646 | 41.641 | 0.10 | 1 | 3 |
| Mukalla | 14.531 | 49.125 | 0.05 | 0 | 0 |
| Cenova | 44.407 | 8.934 | 0.04 | 0 | 0 |
| Datça | 36.727 | 27.685 | 0.01 | 0 | 4 |
| Eğriboz | 38.464 | 23.601 | 0.01 | 0 | 3 |
| Ras el-Hayme (Cülfâr) | 25.789 | 55.943 | 0.01 | 0 | 0 |

**En büyük sapma 1.39 km.** Normal yakınlaştırmada piksel altı, yani kaydırma
hiçbir şeyi yanlış göstermez — koordinatlar doğru, maske çözünürlüğü yetersiz.
Hepsi kıyı yerleşimi ya da ada; hiçbiri iç bölgede değil.

## Düzeltme yöntemi

Her nokta maskenin **en yakın iç noktasına** kaydırılsın, üstüne küçük bir
içeri pay konsun (sınırın tam üstünde durursa `covers` testi kıyı
sadeleştirmesiyle yine dışarı düşebilir). Ölçüm betiği:
`shapely.ops.nearest_points(KARA, Point(lon, lat))`.

Kaydırılan her nokta kayıt yorumuna yazılsın — Oturum 14 aynı şeyi
`yerlesimler_afrika.js` başında yaptı, örnek olarak alınabilir.

## Kalıcı çözüm: ALTINCI denetim

Bu, `arac/denetle.py`'ye eklenmesi gereken bir kontrol. Üç değişmez de veri
tutarlılığına bakıyor, hiçbiri **noktanın karada olup olmadığına** bakmıyor.
Yeni yerleşim ekleyen her oturum bu tuzağa düşebilir ve düştüğünde belirti
sessizdir: denetim temiz raporlar, harita yanlış çizer.

Kontrol ucuz: kara maskesi zaten `veri-kaynak/ne_10m_land.geojson`'da ve
`denetle.py` shapely'e bağımlı değil ama olabilir. Alternatif olarak ayrı bir
`arac/denetle_konum.py` yazılabilir.

⚠️ Bu ölçüm baraj gölü düzeltmesinden ÖNCE yapıldı. Baraj gölleri maskeden
çıkarılınca göl kıyısındaki noktalarda sonuç değişebilir; düzeltme öncesi
yeniden ölçülmeli.
