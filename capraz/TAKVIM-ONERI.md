# Takvim (Jülyen/Gregoryen) kuralı önerisi

Tarih: 18 Ekim 2026 · Kaynak liste: `capraz/TAKVIM-SATIRLARI.tsv` (945 satır, 29 defterden)

## 0. Düzeltme

Önceki mesajımdaki "tek kural: bütün tarihler Gregoryen" önerisi **yanlıştı**. Atlasta zaten tek bir
kural var (`VERI-YAPISI.md` §TAKVİM, Emre #10, 15 Ekim 2026) ve 1582 öncesi için Jülyen'i korur:

1. Atlas günü **Gregoryen**dir. Jülyen kaynak günü, **15 Ekim 1582 ve sonrası** için çevrilir
   (+10 / +11 / +12 / +13 gün, yüzyıla göre).
2. 15 Ekim 1582 **öncesi** günler olduğu gibi (Jülyen) kalır; geriye dönük Gregoryen üretilmez.
3. Her çeviride `ic_not_takvim:"Jülyen <gün> (<kaynak>) = Gregoryen <gün>"` zorunludur.
4. Kaynak hangi takvimi kullandığını söylemiyorsa çevrilmez, listelenir.

**Önerim: yeni kural yazmayız; bu kuralı tutarlı uygularız.** Tutarsızlık kuraldan değil, kuralın
uygulanmamasından geliyor. Defterlerdeki ajanlar kuralı bilmediği için 1582 öncesi satırlara da
çeviri önerdi (aşağıda S1).

## 1. Sayım (tarama; sezgisel, kesin değil)

| Sınıf | Anlam | Satır |
|---|---|---|
| A | Atlas tarihi < 1582-10-15, takvim sözü geçiyor | 316 |
| B | Atlas günü, metinde **Jülyen** işaretli günle aynı | 99 |
| C | Atlas günü, metinde **Gregoryen** işaretli günle aynı | 162 |
| D | Takvim sözü var, atlas günüyle eşleşen işaretli gün yok | 303 |
| E | Atlas tarihi > 1918-02-13 | 65 |

B'yi elle okudum (99 satır). Sonuç:

- **Gerçek ihlal adayı (Jülyen gün çevrilmeden yazılmış):** yaklaşık 60. Örnekler:
  - İngiliz/Hint: 1600-12-31 (EIC, → 1601-01-10), 1601-12-24 Kinsale (→ 1602-01-03), 1603-03-24 (→ 04-03), 1603-03-30, 1604-08-16 (→ 08-26), 1690-08-24 (→ 09-03), 1707-05-01 (→ 05-12)
  - İsveç: 1621-09-15, 1645-08-13 (→ 08-23)
  - Rus/Ukrayna: 1613-02-21 (→ 03-03), 1636-04-17, 1689-08-27 (→ 09-06), 1721-10-22, 1736-09-13, 1668-06-08, 1687-07-25 (→ 08-04), 1700-07-03 (→ 07-14), 1709-03-28, 1710-04-16
  - Yunan (O.S. 1923'e dek): 1821-03-25 (→ 04-06), 1837-05-03, 1843-09-03, 1850-06-29, 1893-12-10
  - Balkan/Gürcü/Rus 19. yy: bulgar 1879-04-16, 1886-03-24 (→ 04-05), sırp 1804-02-14, 1835-02-15, gürcü 1757-12-14, 1783-07-24, rus 1801-09-12, 1810-02-17, 1856-07-10, 1864-06-12, 1864-09-22, 1877-05-02, 1877-08-12, 1881-08-19
  - Alman: 1685-10-29 (Brandenburg Jülyen; DB 8 Kasım)
- **Zaten doğru çevrilmiş (dokunma, yalnız `ic_not_takvim` eksikse ekle):** rus 1711-07-21, 1795-10-24, 1797-01-26, 1825-02-28; iran 1828-02-22, 1881-12-21; yunan 1893-08-06, 1896-04-06; bulgar 1885-11-14; ukrayna 1918-01-25.
- **Yanlış alarm:** alman 1871–1888 satırları (Reich Gregoryen kullanır, ~12 satır); polonya 1914-08-12; bazı "yalnız yıl" satırları.

## 2. Tutarsızlık türleri ve tek kuralın uygulaması

| Tür | Satır | Kural uygulaması |
|---|---|---|
| S1: 1582 öncesi, ajan çeviri önerdi | A sınıfından birkaç düzine | **Çevirme.** Jülyen kalır; yalnız `ic_not_takvim` ile "Jülyen" beyan edilir. |
| S2: Jülyen gün çevrilmemiş (yukarıdaki ~60) | B | Çevir + `ic_not_takvim` yaz; ± 30 gün kronoloji/`d:` bağı varsa (Değişmez 2) sınırı da kaydır. |
| S3: Kaynak takvim söylemiyor | D'nin çoğu (303) | Çevirme, listele; takvimi bilen ikinci kaynak aranır. Rus/Balkan kaynaklar 14 Şubat 1918 öncesinde varsayılan O.S. ama **çeviri için kaynağın kesin belirtmesi şart.** |
| S4: Aynı gün iki kaynakta farklı | ör. alman 1685 (29 Ekim / 8 Kasım), bulgar 1886 (24 Mart / 5 Nisan) | Fark tam +10/+12 gün ise çelişki değil takvim farkıdır; Gregoryen karşılığı yazılır, ÇELİŞKİ sayılmaz. |
| S5: Yıl başı | İngiltere 25 Mart'a dek (1752) | Yıl, modern 1 Ocak yılına çevrilir; `ic_not_takvim`e "O.S. yıl <x>" yazılır. |

## 3. Emre'nin karar vermesi gereken noktalar

1. **İngiltere 1582–1752:** gün Jülyen'den Gregoryen'e çevrilsin mi (kural gereği evet) yoksa İngiliz olaylarında yerel Jülyen mi kalsın? Önerim: kural gereği çevir.
2. **İsveç takvimi (1700–1712 ve 1753 öncesi):** İsveç'e özgü sapma var; önerim: kaynağın verdiği güne bak, çeviriyi `ic_not_takvim`de ayrıca yaz.
3. **Yunan O.S. (1923-02-16'ya dek):** tüm Yunan ulusal tarihleri (25 Mart 1821 vb.) çevrilsin mi? Önerim: evet, Gregoryen karşılığı atlasta, ulusal gün `gun:` metninde parantezle.
4. **Rus kaynaklar (1918-02-14 öncesi):** kaynak "O.S." yazmıyorsa varsayılan çeviri yapılsın mı? Önerim: hayır; yalnız kaynak kesin belirtiyorsa çevir, değilse S3 listesine.
5. **Hicrî dönüşümlü günler (TDV):** TDV'nin 1582 sonrası bazı günleri Jülyen/Rûmî olabiliyor; hafta günü ile ölçülmeden çevrilmesin (mevcut kural).
6. **Kapsam:** önce S2 (~60 madde) uygulansın mı, yoksa 303 satırlık S3 listesi için önce takvimi söyleyen kaynak mı aransın?

## 4. Sınırlar

- Tarama anahtar kelime ve regex'e dayanır; B'yi elle okudum, A, C, D, E'yi okumadım. D'de gerçek ihlal olabilir.
- Yukarıdaki +gün değerleri defter notlarındaki aritmetiktir; uygulamadan önce her biri tabloyla yeniden hesaplanmalı.
- Hiçbir veri dosyası değiştirilmedi; yalnız liste ve bu belge eklendi.
