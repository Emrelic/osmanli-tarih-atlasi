# KASA-EKSIK-DONEM-ORNEKLEM-1004 — atlasta HİÇ GÖRÜNMEYEN dönemler: 10 kayıtlık örneklem (YALNIZ ÖLÇÜM)

KASA · 4 Ekim 2026 · koordinatörün talebi · taban `origin/main` `94df6672`
📌 Terim: görev "10 künye" diyor, ama `s:` dönemi **yerleşim kayıtlarında** durur ve kazara bulunan iki örnek (Bihaç, İşkodra) yerleşimdi. Örneklem birimi bu yüzden **yerleşim kaydı**. Künye (devlet) düzeyinde ayrı bir soru.

## SEÇİM — ölçümden ÖNCE donduruldu (bu commit)
Ölçüt: TDV'de şehir maddesi olması · atlasta `s:` dönemi olması · farklı coğrafyalar · bu gece **hiç ölçülmemiş** olması (Van, Mardin, Sivas, Kayseri, Ahıska, Batum, İpsala, İzmir, Bihaç, İşkodra, Halep, Lahsa, Dimetoka, Ferecik ve Dubiça hariç).
| # | kayıt | dosya | bölge | TDV slug (denenecek) |
|--:|---|---|---|---|
| 1 | Tebriz | yerlesimler.js | İran | `tebriz` |
| 2 | Musul | yerlesimler.js | Irak | `musul` |
| 3 | Belgrad | yerlesimler.js | Balkan/Tuna | `belgrad` |
| 4 | Kefe | yerlesimler.js | Kırım | `kefe` |
| 5 | Trabzon | yerlesimler.js | Karadeniz | `trabzon` |
| 6 | Tunus | yerlesimler.js | Kuzey Afrika | `tunus` |
| 7 | Revan | yerlesimler.js | Kafkasya | `revan` |
| 8 | Rodos | yerlesimler.js | Ege adası | `rodos` |
| 9 | Semerkant | yerlesimler_ek14.js | Orta Asya | `semerkant` |
| 10 | Sofya | yerlesimler.js | Balkan iç | `sofya` |

## ÖNGÖRÜ — ölçümden ÖNCE (sayı ve mekanizma ayrı)
- **SAYI:** 10 kayıtta **12–25** eksik dönem (kayıt başına ~1–2,5).
- **MEKANİZMA:** çoğunluk **kısa ara dönemler** olacak: "bir ara elden çıktı … geri alındı" türü 1–15 yıllık kesintiler. Atlas uzun dönemleri yazıp bunları atlıyor (Bihaç 1463 ve İşkodra 1393–96 tam bu tipti). İkinci sınıf: Osmanlı öncesindeki küçük beylik/atabeylik halkalarının büyük devlete katılması.
- **Tanım (ölçümden önce):** "eksik dönem" = TDV'nin o şehir için **adıyla** verdiği bir sahip/statü aralığının, atlas kaydında o aralıkta **hiçbir** `s:`/`d:`/`v:`/`isg:` karşılığının olmaması. Yalnız **sınırı farklı** olan dönem (aynı sahip, başka yıl) eksik sayılmaz; ayrı "sınır farkı" sütununa yazılır. 1281 öncesi ve 1923 sonrası sayılmaz.

---
# SONUÇ — ölçüm (seçim ve öngörü `52860339`'da donduruldu; bu bölüm ondan SONRA yazıldı)
Yöntem: her kaydın TDV maddesi ham sayfadan indirildi. Musul için `musul` 302 verdi, `musul--irak` kullanıldı; Tunus için `tunus` ülke maddesi kullanıldı, şehir ayrıca anlatılıyor. 1270–1923 arası bir yıl ve sahiplik/idare fiili geçen cümleler çıkarılıp okundu. Tunus'ta cümleler süzgeç için uzun olduğundan kilit yıllar elle arandı. Atlas zinciri `girdi.yukle()` ile okundu.

## 🔴 TEK SAYI: 10 kayıtta 25 eksik dönem (kayıt başına 2,5)
| kayıt | eksik | sınır farkı (sayılmadı) |
|---|--:|---|
| Tebriz | **9** | Karakoyunlu 1410↔1406 · Kaçar 1790↔1794 |
| Trabzon | 3 | — |
| Revan | 3 | Kaçar 1795↔1794 |
| Belgrad | 2 | Pasarofça 1718↔1717 |
| Tunus | 2 | — |
| Semerkant | 2 | Timur 1369↔1370 |
| Sofya | 2 | Osmanlı "1380'li yılların başı"↔1385 |
| Musul | 1 | Osmanlı 1517↔1516 |
| Kefe | 1 | — |
| Rodos | **0** | İtalyan işgali 1912-05-17↔05-04 |
| **toplam** | **25** | 8 |
- ⚠️ Tebriz uç değer (9). Tebriz hariç 9 kayıtta **16** (kayıt başına 1,8). Sıfır çıkan tek kayıt Rodos.

## EKSİK DÖNEMLER — TDV tam cümlesiyle
### Tebriz (`tebriz`) — 9
1. **Timurlu 1408**: "Şehir, 1408'de Timurlu Ebû Bekir Mirza'nın ve 1410'da Ahmed Celâyir'i yenen Karakoyunlu Yûsuf'un eline geçti." (atlas 1406'dan itibaren kesintisiz `karakoyunlu`)
2. **Timurlu (Şâhruh) dönemleri, yılsız**: "Timurlu Şâhruh üç defa zaptettiği Tebriz'i 1436'da Karakoyunlu Cihan Şah'a bıraktı."
3. **Osmanlı 1618** (kısa): "Kayserili Halil Paşa 1618'de kısa bir süre için şehre hâkim oldu."
4. **Osmanlı 1635** (kısa): "Murad 1045'te (1635) girdiği boşaltılmış şehri tahrip ettirdi."
5. **Dünbülî Tebriz-Hoy Hanlığı 1747**: "1747'de Dünbülîler şehri ele geçirip Tebriz-Hoy Hanlığı'nı kurdular." (atlas `zend 1747→1794`)
6. **Rus işgali 1827–1828**: "…Tebriz, Ekim 1827'de Rus işgaline uğradıysa da Türkmençay Antlaşması'yla geri alındı (Şubat 1828)."
7. **Rus işgali 1909**: "Ancak şahı destekleyen Ruslar, Şubat 1909'da Tebriz'i işgal ederek…"
8. **Rus işgali 1915–1918**: "…şehri 1915'te yeniden işgal eden Ruslar Şubat 1918'de buradan ayrıldılar."
9. **Osmanlı 1918** (Eylül–Ekim): "…Tümen'i Tebriz'e sevketti (16 Ağustos 1918), 2 Eylül'de şehre geldi ve 5 Eylül'de İngilizler'i püskürttü; Ekim 1918'de az bir kuvvet bırakıp çekildi."

### Trabzon (`trabzon`) — 3, hepsi VASALLIK (atlasta `trabzon-rum` kesintisiz, `v:` yok)
- "…imparatorların güçlü yönetimlerin altında vasal statüsünü kabul etme arzuları da (Selçuklular 1214-1243, **1243'ten sonra Moğollar, 1402'de Timur ve 1456'dan sonra Osmanlılar**) imparatorluğun uzun sürmesinde rol oynamıştır."
- ⇒ Üç eksik dönem: Moğol/İlhanlı vasallığı (1281'den itibaren, bitişi yılsız) · Timur vasallığı 1402 · **Osmanlı vasallığı 1456→1461**.

### Revan (`revan`) — 3
1. **Revan Hanlığı 1747**: "…Pîr Mahmud Han, Revan hanı tayin edilmişti; 1747'de öldürülünce Mîr Mehdî müstakil bir Revan Hanlığı oluşturdu." (atlas `zend`)
2. **Kartli-Kaheti'ye bağlılık** (1756/1769): "Irakli 1756 ve 1769'da hanlığa saldırdı, buradaki hanları kendine bağladı"
3. **Osmanlı 1918**: "Daha sonra doğu bölgesinde ilerleyen Osmanlı kuvvetleri Revan'ı zaptetti, ancak 1918 Haziranında başşehri Revan olan Ermenistan'ı tanıdı." (gün yok)

### Belgrad (`belgrad`) — 2
1. **Macar 1355(?)–1403**: "1354'te Sırp Kralı Stefan Duşan tarafından zaptedilen Belgrad, onun ölümünden sonra tekrar Macar idaresine girerek Maçva eyaletine bağlandı." · "1403'te Prens Stefan Lazareviç şehri Macarlar'dan geri aldı…" Atlas `sirbistan 1281→1427` kesintisiz; "onun ölümü"nün yılı cümlede yok.
2. **Avusturya-Macaristan işgali 1915–1918**: "…üç yıl Avusturya-Macaristan İmparatorluğu'nun elinde kaldı (1915-1918)." (atlasta `isg:` yok)

### Tunus (`tunus`) — 2, ikisi de STATÜ
1. **İspanyol himayesi 1535–1569**: "Tunus şehri ise 1569'daki Osmanlılar'ın ikinci müdahalesine kadar İspanyollar'ın himayesinde ve III. Mevlây Ahmed'in idaresinde kaldı." (atlas `hafsi`, `v:` yok)
2. **Murâdî özerkliği 1631**: "Tunus'ta 1631'de Murâdî, 1705'te Hüseynî ailesi eyalet yönetiminde yetki sahibi olunca beylerbeyi tayininde aksamalar görüldü…" Atlas `v:tunus-ocagi`'yı 1705'te açıyor; 1631–1705 arası `d:` Osmanlı.

### Semerkant (`semerkant`) — 2
- "1497, 1501 ve 1511 yıllarında belirli sürelerle şehre hâkim olan Bâbür…" · "1500'de Özbek Hükümdarı Şeybânî Han tarafından ele geçirilen Semerkant, 1868 yılına kadar Özbek hanlarının idaresi altında kaldı."
- ⇒ Eksik olan **Bâbür (Timurlu) 1501** ve **1511**; atlas `buhara 1500→1868` kesintisiz. 1497 atlasın `timurlu` aralığında.

### Sofya (`sofya`) — 2
1. **Rus işgali 1828–1829**: "Ancak Sofya, 1828-1829 Osmanlı-Rus savaşı sırasında kısa süre de olsa Ruslar tarafından işgal edildi."
2. **Rus işgali 1878**: "Türk nüfusunun şehri terketmesinden sonra Rus kuvvetlerinin işgaline uğrayan (3 Ocak 1878) Sofya 1879'da Bulgar Prensliği'nin … başşehri oldu." Atlas 1878-01-04'te doğrudan `v:bulgaristan-prensligi`'ye geçiyor; Rus geçici idaresi yok.

### Musul (`musul--irak`) — 1
- "Böylece bağımsız devlet olmaktan çıkan Musul sırasıyla İlhanlı, Celâyirli, **Timurlu**, Karakoyunlu, Akkoyunlu ve Safevî dönemlerinden sonra 923 (1517) yılında Osmanlı hâkimiyetine girdi."
- ⇒ Timurlu dönemi atlasta yok: `celayirli 1340→1411` doğrudan `karakoyunlu`'ya geçiyor. Kaynak yıl vermiyor.

### Kefe (`kefe`) — 1
- "Hacı Giray, 1434 yılında Cenevizliler'i ağır bir bozguna uğrattıktan sonra onlarla yaptığı antlaşmada Kefe'nin hukukî bakımdan hâkimi oldu."
- ⇒ Kırım Hanlığı'nın hukukî hâkimiyeti 1434→1475; atlas `ceneviz`, `v:` yok.

### Rodos — 0
TDV'nin verdiği her dönem (şövalyeler, Osmanlı 1522, İtalyan işgali 1912) atlasta var; yalnız işgal günü 13 gün farklı.

## ÖNGÖRÜ DEĞERLENDİRMESİ
| | öngörü | ölçüm | hüküm |
|---|---|---|---|
| **SAYI** | 12–25 | **25** | ✓ tuttu, **üst sınırda**. Tebriz olmasa 16 |
| **MEKANİZMA 1** | çoğunluk kısa ara dönemler | kısa ara işgal/geri alış **13/25** (%52) | ✓ tuttu |
| **MEKANİZMA 2** | ikinci sınıf: Osmanlı öncesi küçük beylik/atabeylik | ikinci sınıf **VASALLIK/STATÜ 7/25** (Trabzon 3, Tunus 2, Kefe 1, Revan 1); beylik değil | ✗ **tutmadı**. İkinci sınıf "kim yönetti" değil "**hangi statüde**" |
| — | — | atlanan büyük hanedan 3 (Tebriz Şâhruh, Musul Timurlu, Belgrad Macar) · yerel hanlık 2 (Dünbülî, Revan) | öngörülmemişti |
- 📌 **13 kısa dönemin 7'si 19.–20. yy işgali:** Tebriz 1827, 1909, 1915, 1918 · Belgrad 1915 · Sofya 1829, 1878. Bu, `KASA-IC-CELISKI-1004`'teki desenle (çoğunluk Rus/Avusturya kısa işgalleri) aynı. İki bağımsız ölçüm aynı yere işaret ediyor: **`isg:` katmanı 19.–20. yy işgallerini sistematik biçimde eksik taşıyor.**
- 📌 Vasallık sınıfı `v:` katmanının eksikliğini gösteriyor: ana devlet doğru yazılmış, ama üst hâkimiyet (Moğol, Timur, Osmanlı, İspanya, Kırım) yok.

## BULAMADIM / beyan
- Örneklem **büyük şehirlerden** seçildi; TDV maddeleri uzun ve ayrıntılı. Küçük yerleşimlerde TDV az şey söylediği için eksik dönem **görünmez**; bu, olmadığı anlamına gelmez. ⇒ 2,5'i 4298 kayda çarpmak **yanlış** olur. Bu oran, büyük ve çok anlatılmış şehirler için bir **üst kestirim**.
- Yalnız yılı ve fiili olan cümleler süzüldü; yılsız anlatılan dönemler ("bir ara") kaçmış olabilir. ⇒ Şehir başına sayı bir **alt sınır** da olabilir. İki etki zıt yönde.
- Kayıtların 1281 öncesi ve 1923 sonrası sayılmadı. Hiçbir eksik dönem için TDV dışında ikinci bir tanık aranmadı.
- UFUK içindekilerden hangilerinin haritada görünür delik açtığı ölçülmedi (ör. Tebriz 1918, Belgrad 1915–18, Revan 1918).
