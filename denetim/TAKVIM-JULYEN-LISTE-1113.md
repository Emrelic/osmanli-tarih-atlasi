# TAKVIM-JULYEN-LISTE-1113 — Britanya/İrlanda/sömürge 1583-1752 Jülyen adayları (salt okunur tarama)

Kural (CLAUDE.md Takvim, Emre 4 Kasım 2026): 1582-10-15 sonrası atlas günü Gregoryen; geç geçen Britanya (1752) kaynak günü çevrilir, `ic_not_takvim` ile iki günüyle beyan edilir. Fark: 1583-1700/02-28 arası +10 gün, 1700-03-01'den 1752'ye +11 gün.

Yöntem: data/ içindeki elle yazılan kaynak dosyalar (devletler, kronoloji_*, yerlesimler*, olaylar*, sehir_tarihce_k12) tarandı; üretilmiş dosyalar (paket_*, yer_yama*, ceviri_*) yalnız yansıma olduğundan ayrıca listelenmedi. `data/kronoloji_ingiltere.js` (1583-1752 arası ~66 madde) zaten temiz: gün maddelerinin tamamı GREGORYEN beyanlı ya da yıl hassasiyetli. yerlesimler_avrupa.js İrlanda 1603-04-09 beyanı mevcut.
Doğrulama: web ile yalnız 3 aday teyit edildi (Halifax, Philadelphia, Kalküta); gerisi "kaynak okunmadı" — genel bilgiye dayalı güven orta/düşük.

## A. Düzeltilmeye değer adaylar
| dosya:satır | madde | mevcut tarih | kaynak takvimi | ic_not_takvim | önerilen düzeltme + kaynak | güven |
|---|---|---|---|---|---|---|
| data/devletler.js:4677 (mikmak) | Cornwallis Halifax'ı kurdu | 1749-06-21 | Jülyen (O.S.) | yok | 1749-07-02 + beyan; DCB «Cornwallis, Edward» biographi.ca/en/bio/cornwallis_edward_4E.html (21 Haziran 1749 varış); Masonic bio "2 Temmuz new style" | yüksek |
| data/yerlesimler_amerika.js:939-940 | Philadelphia kuruluşu (Penn'in New Castle'a varışı) | 1682-10-27 | Jülyen | yok | 1682-11-06 + beyan; HSP / explorepahistory (27 Ekim 1682 O.S.) | yüksek (varış günü kaynaklarda 27/28/29 dalgalı) |
| data/kronoloji_hindistan.js:710 | Charnock Kalküta'yı kurdu | 1690-08-24 | büyük olasılıkla Jülyen (kaynaklar etiketsiz) | yok | 1690-09-03 + beyan; Banglapedia, Wikipedia «1690 in England» | orta |
| data/yerlesimler_amerika.js:936-937 | Boston adlandırıldı | 1630-09-07 | Jülyen (O.S. standart) | yok | 1630-09-17 + beyan; kaynak okunmadı | orta |
| data/yerlesimler_asya.js:1459-1460 | Madras kuruluşu (Day imtiyazı) | 1639-08-22 | Jülyen (Madras Günü O.S.) | yok (sehir_tarihce_k12.js:14697 gün kaynağını bulamadığını söylüyor) | 1639-09-01 + beyan; kaynak okunmadı | orta/düşük |
| data/yerlesimler_asya.js:1349 | Bombay İngilizlere devri | 1665-02-18 | büyük olasılıkla Jülyen (Cooke'un teslim alışı) | yok | 1665-02-28 + beyan; kaynak okunmadı | orta/düşük |
| data/devletler.js:16481 | Jamaika'ya İngiliz çıkarması | 1655-05-10 | büyük olasılıkla Jülyen | yok | 1655-05-20 + beyan; ebsco kaynağı takvim demiyor | orta |
| data/yerlesimler_kamerika.js:859,863 | St John's, Gilbert'in sahiplenmesi | 1583-08-05 | büyük olasılıkla Jülyen | yok | 1583-08-15 + beyan; doğrulanamadı | orta |
| data/devletler.js:16520 | Holetown/Barbados ilk yerleşim | 1627-02-17 | muhtemelen Jülyen (gün zayıf kaynak) | yok | 1627-02-27 + beyan veya yıl hassasiyeti; doğrulanamadı | düşük/orta |
| data/devletler.js:4666, 4655, 4692 | Boston (Dummer) Antlaşması | 1725-12-15 | Jülyen | yok | 1725-12-26 + beyan; kaynak okunmadı | orta |
| data/devletler.js:4676, 4693 | Antlaşmanın Annapolis Royal onayı | 1726-06-04 | Jülyen | yok | 1726-06-15 + beyan | orta |
| data/devletler.js:4694 | Halifax'ta yenileme | 1749-08-15 | Jülyen | yok | 1749-08-26 + beyan | orta/düşük |
| data/devletler.js:4678 | Cornwallis ödül bildirgesi | 1749-10-02 | Jülyen | yok | 1749-10-13 + beyan | orta |
| data/devletler.js:4660 | Portsmouth Antlaşması (Abenaki) | 1713-07-13 | Jülyen | yok | 1713-07-24 + beyan | orta |
| data/devletler.js:4661, 4662, 4664, 4665 | Brunswick 1722-06-13; savaş ilanı 1722-07-25; Norridgewock 1724-08-23; Lovewell 1725-05-09 | — | muhtemelen Jülyen | yok | +11 gün (1722-06-24, 1722-08-05, 1724-09-03); Lovewell +10 (1725-05-20 değil +11: 1725-05-20); kaynak okunmadı | düşük/orta |
| data/devletler.js:4485 (kri) | Hudson's Bay imtiyazı | 1670-05-02 | Jülyen | yok | 1670-05-12 + beyan | orta/yüksek |
| data/devletler.js:16483 | Madrid (Godolphin) Antlaşması | 1670-07-08 | Jülyen; NS 18 Temmuz | devletler.js'te yok; kronoloji_sinir_karayip_adalar.js:14'te VAR | devletler.js satırını 1670-07-18 + beyan yap (TNA SP 108/470 «July 8 OS/18 NS») | yüksek |
| data/kronoloji_portekiz.js:363 | Catherine of Braganza evliliği (Portsmouth) | 1662-05-21 | İngiliz kaynağına göre Jülyen | yok | 1662-05-31 + beyan; kaynak okunmadı | orta |
| data/devletler.js:18876-18877 (yeni-hollanda) | Nicolls filosu geldi / New Amsterdam teslim | 1664-08-27; 1664-09-08 | karışık (27 Ağu O.S.; Hollanda NS teslim 6 Eylül) | yok | iç tutarsızlık olası; doğrulanamadı | düşük |

Not: Lovewell satırında +10/+11 yanlışlığa dikkat: 1725 için fark +11 gündür (1700-03-01 sonrası) — yukarıdaki tüm 1700 sonrası çevrimlerde +11 kullanılmalı (1713-07-13 → 07-24, 1725-12-15 → 12-26, 1726-06-04 → 06-15, 1749-06-21 → 07-02, 1749-08-15 → 08-26, 1749-10-02 → 10-13; Lovewell 1725-05-09 → 05-20).

## B. Bakılmalı / doğrulanamadı
| dosya:satır | madde | mevcut | not |
|---|---|---|---|
| data/devletler.js:8255 | Clive Arcot'u aldı | 1751-08-31 | O.S. ise 1751-09-11; doğrulanamadı |
| data/yerlesimler_asya.js:1462 | Madras'ın İngilizlere iadesi | 1749-08-21 | takvim doğrulanamadı |
| data/yerlesimler.js:1389; data/olaylar_ek11.js:191 | Tanca devri | 1662-01-30 | O.S. ise ≈ 1662-02-09; olaylar_ek11 «teyit okunmadı» diyor |
| data/kronoloji_hindistan.js:690 | Roe'nun Cihangir'e kabulü | 1615-01-10 | takvim + olası yıl kayması; doğrulanamadı |
| data/kronoloji_hindistan.js:685 | Sûrat fabrikası | 1613-01-11 | doğrulanamadı |
| data/kronoloji_hollanda.js:200,205 | I. İng.-Hol. Savaşı 1652-07-10; Medway baskını 1667-06-19 | — | OS/NS karışımı olabilir; doğrulanamadı |
| data/kronoloji_ispanya.js:389 | Cadiz yağması | 1596-06-30 | doğrulanamadı |
| data/kronoloji_portekiz.js:348 | Hürmüz düşüşü | 1622-04-23 | doğrulanamadı |
| data/devletler.js:7711 | Courthope Run | 1616-12-25 | doğrulanamadı |
| data/devletler.js:8863, 8864 | Pocahontas evliliği 1614-04-05; Powhatan baskını 1622-03-22 | — | Virginia kaynakları O.S. olabilir; doğrulanamadı |
| data/devletler.js:16539 | Rogers'ın ölümü | 1732-07-15 | O.S. ise 1732-07-26; doğrulanamadı |
| data/kronoloji_cok_ince_avrupa_amerika.js:115,129 | Kinsale çıkarması 1601-10-03; teslim 1602-01-12 | — | kronoloji_ingiltere'deki 1602-01-03 çevrilmiş; bu iki satırın takvimi doğrulanamadı |

## C. Temiz (aday değil)
kronoloji_ingiltere.js (tüm gün maddeleri beyanlı), kronoloji_almanya.js:733, kronoloji_hindistan.js:272, kronoloji_sinir_nokta2.js:43, yerlesimler_avrupa.js İrlanda 1603-04-09, Utrecht 1713-04-11 (NS), Cape Passaro 1718-08-11 (NS), Gibraltar 1704-08-04 (NS), Şanlı Devrim 1688-11-15 (Gregoryen doğru), Halifax Antlaşması 1752-11-22 (reform sonrası).

## Özet
Aday: A'da 19 satır grubu, B'de 12 doğrulanamayan grup. Düzeltilmeye değer: Halifax 1749, Philadelphia 1682, Madrid 1670 (devletler.js yansıması) yüksek güvenle; Kalküta, Boston, Madras, Bombay, Hudson, Jamaika, St John's, Dummer/Mi'kmaq grubu orta güvenle (çevrim + ic_not_takvim, kaynak teyidi sonrası). Tarama salt okunur; hiçbir data dosyasına yazılmadı. Gün taşınırsa kırılma ve madde birlikte taşınmalı (CLAUDE.md).
