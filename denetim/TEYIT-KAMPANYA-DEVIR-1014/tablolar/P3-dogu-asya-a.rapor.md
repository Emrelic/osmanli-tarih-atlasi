# P3-dogu-asya-a — teyit raporu (14 Ekim 2026)

Girdi: 77 madde (data/devletler.js künye kronolojileri, Doğu Asya). Çıktı: `P3-dogu-asya-a.cikti.tsv` (77 satır; anahtar/dosya/t/b girdiyle betikle birebir karşılaştırıldı, fark 0).
Süre: yaklaşık 34 dakika (15:03–15:37).

## Hüküm sayıları
| hüküm | sayı |
|---|---|
| teyit | 3 |
| teyit-yil | 46 |
| tarih-celiski | 6 |
| teyit-edilemedi | 22 |

**Uzlaşım:** `YYYY-01-01` maddeler yıl hassasiyetinde yer tutucu. Kaynak olayı ve yılı doğruluyorsa `teyit-yil` verdim (gün teyitsiz). `teyit` yalnız günü kaynakla eşleşen 3 madde için.

## Tarih çelişkileri (Emre karar vermeli)
- **goryeo#13** (1388-05-22): EKC'nin «5월 22일» tarihi Goryeo'nun ay-güneş takvimine göre. Madde aynı rakamları Batı takvimiyle yazmış. 5. ay yaz gündönümünü içerdiği için bu gün Jülyen'de yaklaşık 4 Haziran–3 Temmuz aralığına düşer. Çeviriyi yapmadım.
- **ezo-cumhuriyeti#0/#4/#5** (1868-12-15, 1869-05-11, 1869-05-18): Kaynaklar (Yamakawa, Britannica Japan, kotobank) eski Japon takvimini veriyor. Japonya Gregoryen takvime 1873'te geçti. Gregoryen karşılıkları kendi çevirimdir, kaynakta yok: 1869-01-27, 1869-06-20, 1869-06-27.
- **goryeo#6** (1022): EKC barışı 1019 zaferinin «이듬해»sına (ertesi yılına) koyuyor. Bu ifadeden 1019 ya da 1020 okunur, 1022 okunmaz. 1022 Liao tanımasını bulamadım.
- **bati-wei#9** (557): ChinaKnowledge 556 diyor. Bu Çin yılı olabilir; tahttan çekilme Jülyen'de 557 başına denk gelebilir. Kendi değerlendirmem, çeviri yapmadım.

## Ay-güneş takvimi beyanı
Kore (EKC) ve Çin (ChinaKnowledge) kaynaklarındaki ay/gün bilgileri ay-güneş takvimine göredir. Hiçbir kaynak Jülyen ya da Gregoryen karşılık vermiyor. Ham sayfada «음력/양력» ve «新暦/太陽暦» aradım; hiçbiri yok. Yalnız Japon maddeleri için Gregoryen karşılık yazdım ve bunları «kendi çevirim» diye beyan ettim. Gün düzeyinde kesin çeviri yapmadım; Academia Sinica dönüştürücüsünü denemeden kabuk erişimi kesildi.

## Kaynaklar
- **Encyclopedia of Korean Culture (EKC, A)**: 18 madde. Goryeo, Goguryeo, Baekje ve ABD askerî idaresi.
- **ChinaKnowledge.de (B)**: 31 hüküm. Dali, Dian, Chu, Doğu Jin, Doğu/Batı Wei ve Dai künye sayfaları ile kişi biyografileri.
- **Britannica Japan, kotobank üzerinden (B)**: 2 madde.
- **FRUS / history.state.gov (A)**: 1 madde (Xi'an Olayı).
- **Ulusal Tayvan Tarihi Müzesi, nmth.gov.tw (RESMI-SITE, B)**: 1 madde.
- **Tabloda olmayan 2 kaynak**:
  - 漢學研究 29:3 (2011) — `TABLODA-YOK:HANXUE-YANJIU`, önerim A (hakemli dergi).
  - Yamakawa 日本史小辞典 — `TABLODA-YOK:YAMAKAWA-NIHONSHI`, önerim A ya da B.
- **Not sütununda ikincil destek olarak**: Wallacker, JAS 1969 ve 1971 (doi; yalnız özet okundu).

Bütün `yeni_kaynak` metinlerini `kaynak_guven.js` desenleriyle betikle sınadım. Hepsi beyan edilen kodla eşleşiyor. Hiçbirinde parçalama ayırıcısı (` · `, ` + `, `; `) yok.

## Ham doğrulama
Kabuk bir süre engellendi; o sırada EKC, kotobank, nmth, FRUS ve lawdata sayfalarını WebFetch ile okudum. Kabuk geri gelince bu 20 sayfayı `urllib` / `curl` ile ham indirip alıntılanan tarih dizgelerini yeniden aradım (`teyit_is_P3/ham_dogrula.py`). Hepsi bulundu. Tek fark goryeo#6'da çıktı: «이듬해» ifadesinin neye göre olduğu belirsiz, bunu `not` sütununa yazdım. ChinaKnowledge sayfaları baştan curl ile ham indirilmişti. Ham doğrulanamayan satır kalmadı. Yalnız «arama özeti» diye işaretlediğim yan bilgiler açılmamış sayfalardan geliyor ve hükme dayanak yapılmadı.

## Zorluklar
- Şu kaynaklar bot koruması ya da 403 verdi, atlandı: Britannica (403), Project MUSE, ctext.org, Oxford Reference, HKU Hub, Papers Past, Refworld.
- ChinaKnowledge WebFetch'te HTTPS el sıkışmasında başarısız oluyor; yalnız curl/http ile okunabiliyor.
- Cambridge History of China'ya erişilemedi. Batı Xia, Doğu Xia, Dali (1137/1147/1174/1252), Dai ayrıntıları ve 1930'lar Çin maddelerinin çoğu bu yüzden `teyit-edilemedi`.
- Long March tarihlerini (10 Ekim, 22 Ekim, 22 Eylül 1937) yalnız ÇKP parti siteleri veriyor. Bunları kullanmadım.

## Zayıf/şerhli teyitler (uygulayıcı dikkat)
- **dogu-wei#7**: Kaynak yalnız Gao Cheng'in ölüm yılını veriyor; suikast teyitsiz.
- **dogu-wei#2 ve bati-wei#1** (Shayuan): ChinaKnowledge savaşı «karar getirmedi» diye özetliyor; maddedeki zafer/bozgun sonucu teyitsiz.
- **goryeo#11**: «Dongnyeong» kısmı teyitsiz.
- **goguryeo#3**: «bütün kaleler» genellemesi teyitsiz.
- **goryeo#4**: Kaesong yağması 1011 başına düşüyor olabilir.
- **abd#0**: Hodge'un rütbesi EKC'de korgeneral (중장).
