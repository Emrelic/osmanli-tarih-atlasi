# ARGOS 1821-1822 — kronoloji madde taslağı (UMIT 21 → LAB)

Hazırlayan: UMIT 21 KASIM, 21 Kasım 2026. Dal: `umit-21-argos-1121`.
Yerleşim değişikliği `data/yerlesimler_zincir64.js` Argos kaydındadır (s:/d: dönemleri).
**Değişmez 2:** her yeni kırılmanın ±30 gün içinde madde gerekir. Çeviri (20 dil) LAB'dedir;
maddeler yazılıp çevrilmeden bu dal KASA'da `denetle` 0 vermez. Sıra: önce maddeler, sonra kapı.

Takvim: bütün günler Gregoryendir (Finlay/Phillips/Gordon Batı takvimiyle yazar; Yunan
kaynaklarındaki 26 Temmuz = Jülyen = 7 Ağustos 1822 Gregoryen).

| # | t | gun | yer_id | b (başlık) | kırılma |
|---|---|---|---|---|---|
| 1 | 1821-01-01 | 1821 (yalnız yıl teyitli; gün teyitsiz) | Argos | Argos Rum eline geçer | d: 1715-07-20→1821-01-01 / s: yunanistan 1821-01-01 |
| 2 | 1821-05-05 | Mayıs 1821 (en erken 5 Mayıs; gün teyitsiz) | Argos | Ahmed Kihaya Argos'u alır, şehir yağmalanıp yakılır | s→d: 1821-05-05 |
| 3 | 1821-05-15 | 15 Mayıs 1821 | Argos | Kihaya Tripoliçe Müslümanlarıyla Argos'ta birleşip Tripoliçe'ye yürür | d→s: 1821-05-15 |
| 4 | 1822-07-24 | 24 Temmuz 1822 | Argos | Dramalı Mahmud Paşa karargâhını Argos'ta kurar | s→d: 1822-07-24 |
| 5 | 1822-08-06 | 6 Ağustos 1822 | Argos | Dramalı Argos'tan geri çekilmeye başlar (Dervenakya 7 Ağustos) | d→s: 1822-08-06 |

## Kaynaklar (birebir okundu, archive.org, 21 Kasım 2026)

- **Finlay**, *History of the Greek Revolution* c.I (1861), s. 353: «He established his headquarters in the town of Argos on the 24th of July»; s. 360: «before Dramali had occupied Argos a fortnight, he found himself compelled to fall back on Corinth. On the 6th of August he sent forward the first division of his army» (archive.org `historyofgreekre01finl`).
- **Phillips**, *The War of Greek Independence 1821 to 1833* (1897), s. 105: Dramalı geri çekilmesi «on the 6th of August» (archive.org `warofgreekindepe00phil`).
- **Gordon**, *History of the Greek Revolution* c.I (1832): Mayıs 1821 — Ahmed Kihaya 5 Mayıs'ta Korint'te, Argos'ta Rumları yener, şehri yağmalar/yakar, Larissa'yı/manastırı alır, 15 Mayıs'ta Tripoliçe Müslümanlarıyla birleşip Tripoliçe'ye yürür; Temmuz 1822 — Argos kasabası 26 Temmuz'da kuşatılıp alınır (archive.org `bub_gb_6XS-gn5t3MAC`; OCR sayfa başlığı 488 civarı, Dramalı bölümü).

## ic_not önerisi (madde 4-5)

Çelişki: Finlay karargâh günü 24 Temmuz; Gordon kasabanın kuşatılıp alınışı 26 Temmuz (öncü 24'ünde ovaya girdi). 24 seçildi.
Geri çekilme 6 Ağustos (Finlay + Phillips, bağımsız ikisi). Dervenakya 26 Temmuz Jülyen = 7 Ağustos Gregoryen
(Gordon «6th and 8th of August»): popüler kaynaklardaki 26 Temmuz / 6-8 Ağustos farkı takvim farkıdır.
Larissa kalesi (Ypsilanti) Dramalı'nın Argos'ta kaldığı süre Rum elinde kaldı.
Madde 1-3 tek kaynaklıdır (Gordon); Argos'un Rum eline geçiş günü BULUNAMADI (Finlay c.I'in ilk bölümleri, Trikoupis OKUNMADI).

## Yan not (BORÇ)

Argos kaydındaki eski "1822-12-12 yunanistan" günü Nauplia'nın günüydü; `olaylar_ek6.js` satır 103
(Anabolu 1822-12-12) maddesi `yer:` alanında "Argos" yazıyor — Argos artık o güne bağlı değil;
LAB `yer:` alanından Argos'u çıkarmayı değerlendirsin (o maddenin kırılması Anabolu için kalır).
