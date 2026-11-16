# TDV ham metin doğrulaması — 16 Kasım 2026

Kapsam: `data/sehir_tarihce_afrika_misir.js` (Fustat, Asvan) ve `data/sehir_tarihce_afrika_magrip.js` (16 şehir).
Yöntem: TDV tam gövdesi gömülü tarayıcıyla okundu (navigate; 3-4 sn aralıklı). Her `ilk` ve `olay` kaydının sayıları (miladî yıl, hicrî yıl) ve ilk anahtar sözcükleri, TDV sayfasında 300 karakter pencerede birlikte aranıp günlü kayıtlarda gün+ay dizgisi de arandı; kayıtta gün yokken TDV'de gün varsa işaretlendi. İşaretlenenlerin bağlamı elle okundu. Sınır: otomatik pencere kontrolü anlam doğrulaması değildir; ek olarak yalnız işaretlenenler cümle düzeyinde okundu. `sahip[]` dönem sınırları ayrıca satır satır okunmadı (bağlı olay kayıtları üzerinden dolaylı bakıldı).
Bakılan TDV maddesi: 25 (CEZAYİR, BÛNE, BİCÂYE, KAYREVAN, VEHRÂN, FAS, MEHDİYE, RABAT, SEFÂKUS, SÛSE, TANCA, TİLİMSÂN, TRABLUSGARP, TUNUS, BULUKKÎN, ASVAN, MISIR, KAHİRE, TOLUNOĞULLARI, İHŞÎDÎLER, MEMLÜKLER, EYYÛBÎLER, ŞECERÜDDÜR, KAVALALI MEHMED ALİ PAŞA, MERVÂN II). Bakılan kayıt (ilk + olay, TDV'ye atıflı): ~210. Mısır dosyası: 2 şehir; Mağrip: 16 şehir.
Bulukkîn: 960 (Cezayir/Miliana/Médéa idaresi) birebir doğrulandı.

## Uyuşmazlıklar

1. **mehdiye-tn · olay[14]** · alan `t`/`gun`/`ic_not`
   - Dosya: `t:"1550-09-01"`, `gun:"Eylül 1550"`, `ic_not:"Gün verilmez."`
   - TDV MEHDİYE ham metni: "28 Ağustos'ta başlattıkları saldırı sonunda 10 Eylül'de kaleye girmeyi başardılar" (yıl 1550: aynı paragrafta "22 Haziran 1550 tarihinde Mehdiye'yi kuşatan Haçlı donanması").
   - Hüküm: TDV GÜN VERİYOR; doğru `t` = 1550-09-10 ve `ic_not` yanlış.

2. **fustat-eg · olay[7]** (Fâtımî'nin kaldırılması) · alan `t`
   - Dosya: `t:"1171-09-04"` (hicrî 567 ∩ 1171 ilk günü, kaynak "TDV MISIR (C. Avcı)").
   - TDV EYYÛBÎLER (R. Şeşen) ham metni: "Abbâsîler adına hutbe okuttu (10 Muharrem 567 / 13 Eylül 1171)". TDV MISIR bu cümlede yalnız yıl verir.
   - Hüküm: aynı olayı Asvan kaydı (olay[11]) 1171-09-13 yazıyor; iki dosya arasında 9 gün fark. Gün TDV'de başka maddede var → Fustat `t` 1171-09-13 olmalı.

3. **fustat-eg · olay[8]** (Turan Şah öldürüldü; Memlük dönemi) · alan `t`
   - Dosya: `t:"1250-04-05"` (hicrî 648 ∩ 1250 ilk günü).
   - TDV ŞECERÜDDÜR ham metni: "Turan Şah'ı öldürdüler ve Şecerüddürr'ü sultan seçtiler (30 Muharrem 648 / 4 Mayıs 1250)".
   - Hüküm: Asvan olay[13] 1250-05-04 yazıyor; Fustat'ta ~29 gün fark. Doğru `t` = 1250-05-04.

4. **aswan-eg · olay[2]** (Emevî künye geçişi) · alan `kaynak`
   - Dosya: `kaynak:"TDV MISIR, 4. bölüm …"` ve `gun:"661"`.
   - TDV MISIR ham metninde 661 yılı YOK (Muâviye anlatılırken yalnız "38 (658)", "Muâviye'nin ölümüne kadar (60/680)", "64 (683)" geçer). 661 / 29 Temmuz günü kaydın kendi `ic_not`unda hulefa-yi-rasidin maddesine dayanıyor.
   - Hüküm: atıf yanlış madde; kaynak alanına TDV HULEFÂ-YI RÂŞİDÎN eklenmeli (içerik yanlış değil, atıf eksik).

5. **mehdiye-tn · olay[10]** (792/1390 kuşatma) · alan `b`
   - Dosya: "Fransız-İtalyan-İspanyol filosu".
   - TDV MEHDİYE: "Cenevizli, Sicilyalı, Fransız ve Aragonlu hıristiyanlar, 792'de (1390) Bourbon dükünün kumandasındaki bir donanmayla şehri bir ay müddetle kuşattılar".
   - Hüküm: tarih ve süre doğru; uyruk sıralaması TDV'yle birebir değil (küçük sapma).

6. **tunus-tn · sahip[6] / ic_not** (1187) — TDV'de YOK
   - Dosya: Ganiye dönemi bitişi 1187 ("üç yıl sonra" türetimi).
   - TDV TUNUS'ta 1187 yılı geçmez; dosya `ic_not`ta türetme olduğunu beyan ediyor. İhlal değil, "TDV'de yok" olarak not.

## Uyuşan ama not düşülenler

- annaba-dz olay[3] (1535, V. Karl): TDV "beş yıllık direniş (1535-1540)" der; 1535'i Bûne'nin ele geçiriliş yılı olarak açıkça vermez, otomatik kontrol sapma gösterdi, cümle okundu: tutarlı.
- sfax-tn olay[12]: 15 Temmuz 1881 ve 12 Mayıs 1881 (TDV "Bordeaux" der, dosya bunu `ic_not`ta beyan ediyor) TDV'yle uyuşuyor.
- tripoli-ly olay[14]/ic_not: TDV 'Trablusgarp'a 1 Eylül 1911' savaş ilânı yazar (dosya bunu tarih yerine `ic_not`ta beyan eder): TDV'nin yazdığıyla uyuşuyor.
- fes-ma olay[6] Sa'dî 1549: TDV FAS "(1549)" ile uyuşuyor.
- Mısır dosyasındaki hicrî-gün çevirileri (fustat olay[1], [15], [16]; asvan olay[3], [4], [6], [7], [8]) TDV'de günü verilmeyen hicrî yıl/ay çevirileridir; kayıtlar çevirinin türetme olduğunu beyan ediyor; TDV'de gün aranıp bulunamadı (asvan olay[15] 1517-04-13: kayıt "komşu olay günü" diye beyanlı; MEMLÜKLER'de 23 Ocak ve 13 Nisan 1517 var).
- Çekilemedi: yok (429 yalnız ilk toplu denemede alındı; sonra aralıklı okundu). ŞECERÜDDÜR için ilk slug (`seceruddurr`) arama sayfasına düştü; doğru slug `seceruddur`, okundu.
