# Çin takvimi çevirileri — sonuç (EMRELİC, Academia Sinica; 1582 sonrası Gregoryen, öncesi Jülyen)

Girdiler: `CIN-TAKVIM-CEVIRI.tsv` (ifadeli 23 satır, gece-100) ve `CIN-TAKVIM-IFADE-25.tsv` (25 satır / 49 uç). Uç kuralı geçerlidir: alıntının neyi tarihlediği okunur. Kayıt günü ile olay günü ayrımı `ic_not`a yazılır. 本紀 Yunnan yerleşimlerini adıyla anmadığı için bunlara ülke/bölge düzeyi beyanı eklenir (onaylı).

Sonuç sütununun anlamı: ✓ atlas doğru · ✗ atlas yanlış, önerilen güne düzelt · KOŞULLU satırın notundaki şarta bağlı.

| Yer / uç | İfade | Çeviri | Atlas | Sonuç |
|---|---|---|---|---|
| Baoding f · Yunnan zincirleri 1368 | 洪武元年八月庚午 | 1368-09-14 | 1368-09-14 | ✓ |
| Tengyue 1382 | 洪武15 閏月 癸卯 | 1382-04-07 | 1382-04-07 | ✓ |
| Jingdong 1382 | 洪武15 二月 甲寅 (詔天下) | 1382-02-17 | 1382-03-16 | ✗ → 1382-02-17 + "Yunnan geneli, ülke düzeyi". Atlasın 03-16'sı 閏2'nin 朔'udur. |
| Mengzi 1382 | 洪武14 十二月 戊辰 / 壬申 · 洪武15 正月 壬午 | 1382-01-02 Qujing / 01-06 Liang prensi / 01-16 | 1382-01-16 | KOŞULLU — aşağıda (1) |
| 1644 Ming sonu | 崇禎17 三月 丁未 | 1644-04-25 | 1644-04-25 | ✓ |
| 1659 Yunnan Qing'e (Jingdong vb.) | 順治16 正月 庚子 | 1659-01-30 | 1659-01-07 | ✗ → 1659-01-30 |
| Tengyue 1659 | 順治16 四月 甲寅 | 1659-06-13 (ayın 24'ü) | 1659-04-22 | ✗ → 1659-06-13 |
| Wu Sangui 1673 | 康熙12 十二月 壬子 | 1674-01-23 (kayıt günü) | 1673-12-28 | KOŞULLU — aşağıda (2) |
| 1681 Yunnan'ın alınışı | 康熙20 十月二十八日 | 1681-12-07 | 1681-12-07 | ✓ |
| Dali / Tengyue 1873-01 | 同治12 正月 甲辰 | 1873-02-21 (kayıt günü) | 1873-01-15 | KOŞULLU — aşağıda (3) |
| Tengyue 1873-08 | 同治12 閏六月 丙戌 | 1873-08-02 | 1873-08-02 | ✓ (kayıt günüyle aynı; beyan et) |
| Sakya 1720 | 康熙59 八月 戊午 (克西藏) / 九月 壬申 (tahta çıkış) | 1720-09-25 / 1720-10-09 | 1720-09-24 | KOŞULLU — aşağıda (4) |
| 1912 Qing sonu (13 satır) | 宣統三年十二月二十五日 | 1912-02-12 | 1912-02-12 | ✓ |
| Ji'an 383 | 至正24 8月 戊戌 | 1364-09-03 | f 1368-01-23 | gece-100: Zhu Wu rejimi 1364-1368 (künye/BEYANLI) |
| Ji'an 387 | 至正22 春正月 | 1362-01-27 … 02-24 | f 1358-06-19 | gece-100: alıntının ucuna göre 1362-01-27 + ay beyanı |
| Ji'an 388/389 | 康熙15 2月 乙亥 | 1676-04-05 | 1676-04-05 | ✓ |
| Ji'an 390/391 | 咸豐6 3月 壬戌 / 辛巳 | 1856-04-09 / 04-28 | 1856-03-02 | ✗ → Taiping'in alışı alıntıda hangisiyse o |
| Ji'an 392 | 咸豐8 9月 辛巳 | 1858-10-15 | 1858-09-22 | ✗ → 1858-10-15 |
| Ye 4386 | 泰始元年 12月 丙寅 | 0266-02-08 | 0266-02-08 | ✓ (辛未 = 0266-02-13 ayrı olay) |

**Koşullu satırların şartları:**
1. **Mengzi:** Yunnan merkezinin (Kunming / Liang yönetimi) düşüşü esastır. Alıntı 壬申'yi Liang yönetiminin sonu olarak veriyorsa 1382-01-06; 壬午 bir teslim kaydıysa 01-16 kalır. Seçilmeyen gün `ic_not`a.
2. **Wu Sangui:** UMIT kararı geçerli. Ayaklanma günü 1673-12-28 akademik bir kaynakla teyit edilirse atlas günü kalır; 1674-01-23 kayıt günü olarak `ic_not`a.
3. **Dali / Tengyue 1873-01:** uç kuralı olay gününü ister. 01-15'in (Dali'nin düşüşü / Du Wenxiu) kendi kaynağı varsa kalır ve 02-21 `ic_not`a; yoksa ONERI.
4. **Sakya:** uç Qing'in Lhasa'ya girişiyse 09-24'ün kendi kaynağına bakılır. Kaynak yoksa 09-25 + "kayıt günü" beyanı. Tahta çıkış (10-09) ayrı bir olaydır.

**İfadesi bulunamayan uçlar:**
- Sapporo, Nakijin: Japon/Okinawa konusu, NAOJ işi.
- Jingzhou: MÖ.
- Tengyue 1862-08-24: 清史稿 卷21'de kayıt yok.
