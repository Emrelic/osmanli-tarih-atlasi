# GLM1 — "TDV'ye göre" Atıflarının Sayımla Doğrulanması (1004)

**İşçi:** GLM (Z.ai) · **Şartname:** `oturumlar/GLM-GOREV-1004.md` · **Girdi:** `denetim/ARAC-KRONO-SUZGEC-1004.py` (c) kovası
**Evren:** 520 kalem (olaylar_ek*: 228 · öteki: 292) — `d` alanında "TDV" atfı geçen kronoloji maddeleri.
**Kural:** hüküm yok, sayım var · kanıt birebir cümle · Vikipedi kullanılmaz · veriye dokunulmaz.

---

## SEÇİM ÖLÇÜTÜ — ölçüme BAŞLAMADAN ÖNCE yazıldı

**Tabakalı sistematik örnekleme, içerik körü** (d metinleri seçim sırasında OKUNMADI; yalnız dosya/tarih/başlık basıldı):

- `olaylar_ek*` tabakası: 228 kalem → **18** kalem, indeks `floor(i×228/18)`, i=0..17 (yüklenici sırası)
- öteki tabaka: 292 kalem → **22** kalem, indeks `floor(i×292/22)`, i=0..21
- Hesap: 228/520×40 = 17,5 → 18 · 292/520×40 = 22,5 → 22 · toplam 40.
- Niçin sistematik: ilk-N alımı tek dosyada kümelenir (ilk 22 "diger" kalemın 17'si altınorda olurdu); oranı tüm evrene genellemek için kovayı baştan sona dolaşan sabit adımlı seçim tarafsızdır ve yinelenebilir.

### Seçilen 40 kalem (sırası ölçüm sırasıdır)

| # | kova | dosya | tarih | başlık |
|---|---|---|---|---|
| 1 | ek | olaylar_ek.js | 1371-09-26 | Çirmen Savaşı — Meriç vadisinin denetimi |
| 2 | ek | olaylar_ek13.js | 1573-10-10 | Don Juan de Austria'nın Tunus'u geri alışı — İnebahtı'nın karadaki tek karşılığı |
| 3 | ek | olaylar_ek14.js | 1357-06-01 | Kırkpınar güreşlerinin rivayet edilen başlangıcı |
| 4 | ek | olaylar_ek15.js | 1695-01-01 | Dârfûr Sultanlığı'nın kuruluşu — Keyra hânedanı ve Süleyman Solonc |
| 5 | ek | olaylar_ek16.js | 1335-01-01 | Eretna Beyliği'nin kuruluşu — İlhanlı sonrası Orta Anadolu |
| 6 | ek | olaylar_ek17.js | 1617-11-22 | Yeni padişah I. Mustafa: solgun çehreli, dalgın bakışlı bir 'kafes' mahpusu tahtta |
| 7 | ek | olaylar_ek17.js | 1738-08-01 | Semendire'nin Avusturya'dan geri alınışı — 1737-39 Savaşı |
| 8 | ek | olaylar_ek5.js | 1288-01-01 | Karacahisar'ın fethi — ilk şehir kazanımı ve Eskişehir'e hâkimiyet |
| 9 | ek | olaylar_ek5.js | 1884-05-08 | Midhat Paşa'nın Tâif zindanında öldürülmesi |
| 10 | ek | olaylar_ek7.js | 1512-06-10 | II. Bayezid'in Dimetoka yolunda ölümü |
| 11 | ek | olaylar_ek7.js | 1558-04-15 | Hürrem Sultan öldü |
| 12 | ek | olaylar_ek7.js | 1602-02-15 | Karayazıcı Abdülhalim öldü, isyan hareketi zayıfladı |
| 13 | ek | olaylar_ek7.js | 1656-03-04 | Çınar Vak'ası (Vak'a-i Vakvakiye) |
| 14 | ek | olaylar_ek7.js | 1703-03-01 | Feyzullah Efendi'nin oğullarını üst görevlere getirmesi ve biriken tepki |
| 15 | ek | olaylar_ek7.js | 1739-06-01 | İstanbul'da veba salgınının başlaması |
| 16 | ek | olaylar_ek7.js | 1808-07-19 | Alemdar Mustafa Paşa ordusuyla İstanbul'a girdi |
| 17 | ek | olaylar_ek7.js | 1862-06-27 | Tasvir-i Efkâr yayımlandı |
| 18 | ek | olaylar_ek7.js | 1468-04-01 | Uzun Hasan'ın Karakoyunlu Devleti'ne son vermesi |
| 19 | diger | kronoloji_altinorda.js | 1281-01-01 | İlk fetret devri sürüyor — Tuda Mengü döneminde devletin bütünlüğü tehlikede |
| 20 | diger | kronoloji_altinorda.js | 1434-01-01 | Hacı Giray Cenevizliler'i yenerek Kefe üzerinde meşrû hâkim tanındı |
| 21 | diger | kronoloji_balkan.js | 1444-11-10 | Varna Savaşı — Haçlı ordusu Bulgaristan topraklarında bozguna uğradı |
| 22 | diger | kronoloji_cok_1dunya_A.js | 1915-05-07 | Lusitania bir Alman denizaltısınca batırıldı |
| 23 | diger | kronoloji_cok_1dunya_A.js | 1918-03-21 | Alman Bahar Taarruzu başladı |
| 24 | diger | kronoloji_cok_1dunya_B.js | 1914-11-02 | Rusya Osmanlı Devleti'ne savaş ilan etti |
| 25 | diger | kronoloji_cok_1dunya_B.js | 1917-01-01 | İngiliz kuvvetleri Kûtülamâre'yi geri aldı (Şubat 1917) |
| 26 | diger | kronoloji_cok_afrika.js | 1812-01-01 | Osman b. Fûdî ülkeyi iki eyalete ayırdı; Muhammed Bello Sokoto'yu başşehir yaptı |
| 27 | diger | kronoloji_cok_ince_dg_afrika.js | 1534-01-01 | Func tahtına Nâyil b. Amâre geçti |
| 28 | diger | kronoloji_cok_ince_misir_orta_asya.js | 1445-07-07 | Suzdal savaşı: Kazan kuvvetleri Moskova ordusunu yendi, Kāsım Hanlığı'na izin koparıldı |
| 29 | diger | kronoloji_cok_once1281_anadolu.js | 1243-01-01 | Kilikya Ermeni Krallığı Moğollara tâbi oldu |
| 30 | diger | kronoloji_cok_tunus.js | 1861-01-29 | İlk Tunus anayasası Kānûnü'd-devle ilân edildi, Meclis-i Ekber açıldı |
| 31 | diger | kronoloji_fransa.js | 1918-11-11 | Compiègne Ateşkesi — I. Dünya Savaşı'nın Batı Cephesi'nde sona ermesi |
| 32 | diger | kronoloji_habsburg.js | 1699-01-26 | Karlofça Antlaşması — Macaristan'ın Habsburg'a geçişi |
| 33 | diger | kronoloji_isvec.js | 1587-01-01 | Osmanlı ile ilk resmî temas — Kral Sigismund'un mektubu |
| 34 | diger | kronoloji_misir.js | 1861-06-01 | Amerikan İç Savaşı'nın Mısır pamuğuna talebi patlatması |
| 35 | diger | kronoloji_sinir_asya.js | 1564-01-01 | Sûrî hânedanının Bengal'deki son kolu 1564'te sona erdi |
| 36 | diger | olaylar_p0044.js | 1556-01-01 | Moskova Çarlığı Astarhan'ı aldı — Aşağı Volga Rus denetimine girdi |
| 37 | diger | olaylar_p0049.js | 1921-02-23 | Ardahan ve Artvin'in kurtuluşu |
| 38 | diger | olaylar_p0057.js | 1919-06-30 | Aydın'ın kısa süreli kurtarılışı ve 4 Temmuz'da yeniden işgali |
| 39 | diger | olaylar_p0057.js | 1921-07-05 | Muğla'nın İtalyan işgalinden kurtuluşu |
| 40 | diger | olaylar_p0057b.js | 1756-12-22 | Veliaht Şehzade Mehmed'in ölümü — zehirlenme iddiası tartışmalı |

---

## ÖLÇÜM — kalem kalem

## SAYIM

```
okunan kalem : 40 · ✅ VAR : 31 · 🔴 YOK : 9 (ASIL SAYI) · ⚪ OKUNAMADI : 0 · ölü slug : 30
🔴 YOK oranı : 9/40 = %22,5
```

**Yöntem:** madde gövdeleri iki kaynaktan okundu — ① canlı çekim (`islamansiklopedisi.org.tr`, 4-5 Ekim 2026; 9 dalga, HTTP 302 = ölü slug, `arama/<slug>` yönlendirmesi = o başlıkta madde yok) ② repodaki hazır TDV önbellekleri (`denetim/*-tdv-onbellek/`, `_kaynak_govde/` vb.). Önbellekten okunanlarda URL, maddenin kalıcı slug adresidir. Bütün alıntılar GÖVDEDEN birebirdir; Türkçe karakterler olduğu gibi korunmuştur.

**Ölü slug listesi (30):** altin-orda · altinorda · altin-ordu · fung · fung-sultanligi · func-sultanligi · senar · kilikya · kilikya-ermeni-kralligi · kilikya-ermeni · kilikya-1 · kilikya-2 · kilikya-3 · ermeniler · ermeniler-krallik · kosedag · cukurova · hacitarhan · haci-tarhan · ejderhan · astarhan · kirkpinar-guresleri · karlofca-antlasmasi · tunus/2 · tunus/3 · anadolu-selcuklu-devleti · turkiye-selcuklu-devleti · kirim-hanligi · moskova · kirim-tatar-hanligi

### KALEM KALEM

### 1 · olaylar_ek.js · 1371-09-26 · Çirmen Savaşı
iddia: TDV, Osmanlı rivayetindeki 1364/766 tarihinin yanlış olduğunu, doğru tarihin 26 Eylül 1371 olduğunu ve Sırpsındığı anlatısının aynı savaşa ait olduğunu belirtir.
kova: ✅ VAR
kanıt: "Savaşın tarihi Osmanlı kaynaklarında 766 (1364-65) olarak verilirse de hıristiyan kaynakları doğru tarihi 26 Eylül 1371 şeklinde kaydeder." — https://islamansiklopedisi.org.tr/murad-i · Sırpsındığı-Hacı İlbey bağlantısı HACİ İLBEY maddesinden ayrıca okundu.

### 2 · olaylar_ek13.js · 1573-10-10 · İspanyollar Tunus'u aldı
iddia: TDV'nin ifadesiyle İspanyollar 10 Ekim 1573'te Tunus'u alıp 8000 asker bıraktı.
kova: ✅ VAR
kanıt: "10 Ekim 1573'te İspanyollar, Tunus'ta kontrolü ele geçirmek amacıyla yeni bir harekâta giriştiler. Tunus'u alıp burada 8000 asker bıraktılar." — https://islamansiklopedisi.org.tr/tunus

### 3 · olaylar_ek14.js · 1357-06-01 · Kırkpınar'ın rivayet edilen başlangıcı
iddia: TDV Güreş ve Kırkpınar maddeleri kırk gazi rivayetini aktarır ama kesin kuruluş tarihi vermez.
kova: ✅ VAR
kanıt: "Tarihi Orhan Bey zamanına kadar giden Kırkpınar güreşleri, rivayete göre Şehzade Süleyman Paşa ile (ö. 1357) Rumeli'ye geçen kırk gazi yiğidin o civarda güreşmesiyle başlamıştır." — https://islamansiklopedisi.org.tr/gures · not: KIRKPINAR maddesi tek satırlık "bk. GÜREŞ" yönlendirmesidir; iki maddede de kuruluş tarihi yoktur.

### 4 · olaylar_ek15.js · 1695-01-01 · Dârfûr Sultanlığı'nın kuruluşu
iddia: TDV'ye göre kuruluş XVII. yy sonunda istilâ sonrası karışıklığa rastlar; Süleyman Solonc 1695-1715 hüküm sürdü; sultanlar Bâbıâli ile yazıştı.
kova: ✅ VAR
kanıt: "Dârfûr Sultanlığı'nın kuruluşu, XVII. yüzyılın sonlarında Bumû el-Kasîr'in bölgeyi istilâ etmesiyle birlikte gelen karışıklıktan sonraya rastlamaktadır." + "Sultan Süleyman Solonc'dan (1695-1715) sonra aynı aileden on kişi iktidara gelmiştir" + "Bâbıâli ile yazışmalarda bulundukları ve Abdülmecid ile Abdülaziz'in bunlara hükümdarlıklarını tasdik eden fermanlar gönderdikleri bilinmektedir." — https://islamansiklopedisi.org.tr/darfur

### 5 · olaylar_ek16.js · 1335-01-01 · Eretna Beyliği'nin kuruluşu
iddia: TDV'ye göre Eretna 1335'ten sonra naibliği bağımsızlığa çevirdi; 1340'ta hutbeden Memlük adını çıkardı, ertesi yıl bağımsızlığı ilân etti; 753/Mart 1352'de öldü.
kova: ✅ VAR
kanıt: "1340 yılında Memlük sultanı adına hutbe okunmasına son verdi." + "Memlükler'le ilgisini kesip bağımsızlığını ilân etti. Önce Sivas, daha sonra Kayseri merkez olmak üzere kendi adına hutbe okutup sikke kestirdi." + "753 Muharreminde (Mart 1352) Kayseri'de vefat eden Alâeddin Eretna Köşkmedrese avlusundaki kümbete gömüldü." — https://islamansiklopedisi.org.tr/eretnaogullari (künye: "1335-1381 yılları arasında Sivas ve Kayseri merkez olmak üzere Anadolu'da hüküm süren bir Türk beyliği")

### 6 · olaylar_ek17.js · 1617-11-22 · I. Mustafa tahtta
iddia: TDV onu 'solgun çehreli, seyrek sakallı, iri siyah gözlü donuk bakışlı' diye tasvir eder, uzun hapsin psikolojik durumu ağırlaştırdığını kaydeder; saltanat 26 Şubat 1618'e kadar sürdü.
kova: ✅ VAR
kanıt: "Kendisini gören Venedik balyosu tarafından, solgun çehreli, seyrek sakallı, iri siyah gözlü donuk bakışlı, nahif vücutlu olarak tarif edilen I. Mustafa'nın aklî zayıflığı daha ilk saltanatı sırasında biliniyordu. Fakat zamanla psikolojik durumu daha da bozuldu. Özellikle II. Osman dönemindeki mahpus hayatı, tahta getiriliş şekli ve Osman'ın feci âkıbeti onu daha da etkilemiş olmalıdır." + "1 Rebîülevvel 1027 (26 Şubat 1618) tarihine kadar süren saltanatı" — https://islamansiklopedisi.org.tr/mustafa-i · not: bozulma TDV'de özellikle II. Osman dönemi mahpusiyetine bağlanır.

### 7 · olaylar_ek17.js · 1738-08-01 · Semendire'nin geri alınışı
iddia: TDV'nin Semendire maddesine göre kale 1717'de Pasarofça'yla Avusturya'ya bırakıldı, 1737'de başlayan savaşta geri alındı; Avusturyalılar Ağustos 1738'e kadar kaldı.
kova: 🔴 YOK (kısmen)
kanıt: "1717 Ağustosunda Belgrad'ın düşüşünün hemen ardından cereyan eden bir sonraki savaş sırasında Osmanlılar, Semendire'yi yeniden terketti. Avusturyalılar bu bölgede Ağustos 1738'e kadar kaldılar." — https://islamansiklopedisi.org.tr/semendire · **fark:** maddede "Pasarofça" ve "1737" kelimeleri HİÇ GEÇMİYOR (önbellekteki üç kopya da tarandı); d, 1717 devrini Pasarofça'ya ve 1737 savaş başlangıcını TDV'ye yüklüyor — madde bu iki bağlantıyı kurmuyor. 1738 tahliyesi cümlesi ise birebir destekleniyor.

### 8 · olaylar_ek5.js · 1288-01-01 · Karacahisar'ın fethi
iddia: TDV OSMAN I maddesi 687/1288'de Karacahisar'ın fethini ve Eskişehir'e mâlik olmayı anlatır; ESKİŞEHİR maddesi 1291 geleneğinin şüpheli olduğunu belirtir.
kova: ✅ VAR
kanıt: "…Karacahisar tekfuruna karşı hareketi 687'de (1288) kaleyi ele geçirmesine fırsat vermiş görünmektedir." + "Neşrî'ye göre Osman Gazi Karacahisar'ı fethedip Eskişehir'e mâlik oldu (Cihannümâ, I, 86)." — https://islamansiklopedisi.org.tr/osman-i · ESKİŞEHİR maddesi: 1291 tarihi veren Osmanlı geleneği için "Bunların doğruluğu şüpheli" der — https://islamansiklopedisi.org.tr/eskisehir

### 9 · olaylar_ek5.js · 1884-05-08 · Midhat Paşa'nın ölümü
iddia: TDV kaydına göre 7-8 Mayıs 1884 gecesi hücresinde boğularak öldürüldü; resmî sebep şîrpençe açıklandı.
kova: ✅ VAR
kanıt: "Midhat Paşa 7-8 Mayıs 1884 gecesi hücresinde boğularak öldürüldü. Resmî ölüm sebebi şîrpençe diye açıklanan Midhat Paşa'nın cesedi bile şüphe konusu olmuş" — https://islamansiklopedisi.org.tr/midhat-pasa

### 10 · olaylar_ek7.js · 1512-06-10 · II. Bayezid'in ölümü
iddia: TDV'ye göre Çorlu yakınındaki Abalar köyünde fenalaştı, 10 Haziran 1512'de vefat etti; ölüm sebebi çok şüpheli, zehirlenme ihtimali üzerinde duruluyor.
kova: ✅ VAR
kanıt: "Tahtırevana binen Bayezid günde 5-6 km. yol alabiliyordu. Çorlu yakınındaki Abalar köyüne varıldığında fenalaştı ve 25 Rebîülevvel 918'de (10 Haziran 1512) vefat etti. Ölüm sebebi çok şüpheli olan Bayezid'in bazı yerli ve yabancı kaynaklardaki kayıtlara göre zehirlenmiş olabileceği ihtimali üzerinde durulmaktadır." — https://islamansiklopedisi.org.tr/bayezid-ii

### 11 · olaylar_ek7.js · 1558-04-15 · Hürrem Sultan öldü
iddia: TDV'ye göre 15 Nisan 1558'de İstanbul'da vefat etti, Süleymaniye Camii külliyesine defnedildi.
kova: ✅ VAR
kanıt: "Hürrem Sultan 26 Cemâziyelâhir 965'te (15 Nisan 1558) İstanbul'da öldü ve Süleymaniye Camii hazîresine defnedildi." — https://islamansiklopedisi.org.tr/hurrem-sultan · not: d "külliyesindeki türbesine" der, TDV "hazîresine" der — aynı mekân, ifade nüansı.

### 12 · olaylar_ek7.js · 1602-02-15 · Karayazıcı Abdülhalim öldü
iddia: TDV'ye göre Sepetli yenilgisi 12 Ağustos 1601'de oldu; ölüm haberi İstanbul'a 1010 Ramazanında (Şubat-Mart 1602) ulaştı; ölüm sebebi tartışmalı.
kova: ✅ VAR
kanıt: "…Sepetli mevkiinde mağlûp etti (12 Safer 1010 / 12 Ağustos 1601)." + "Karayazıcı bir rivayete göre anlaşmazlığa düştüğü adamları tarafından öldürülmüş, diğer rivayete göre ise ölümüne aldığı yaralar sebep olmuştur. Ölüm haberinin İstanbul'a 1010 yılı Ramazanında (Şubat-Mart 1602) ulaştığı kaynaklarda belirtilir." — https://islamansiklopedisi.org.tr/karayazici-abdulhalim

### 13 · olaylar_ek7.js · 1656-03-04 · Çınar Vak'ası
iddia: TDV'ye göre ödemesiz dönen yeniçeriler ayaklandı; Zurnazen'in müsadere önerisi kabul görmedi; üç görevli sonra otuza yakın devlet adamı öldürülüp cesetleri Sultanahmet'teki çınarlara asıldı; olay bu yüzden bu adla anıldı.
kova: ✅ VAR
kanıt: "Girit'teki savaştan dönen ve dokuz taksit maaşlarını alamayan bir kısım yeniçeriler…" + "önce Dârüssaâde Ağası Behram Ağa, Kapı Ağası Bosnalı Çalık Ahmed Ağa ve İbrâhim Ağa bostancıbaşı" + "otuz kadar devlet adamı yakalandıkları yerlerde öldürüldüler. Bunların cesetleri âsiler tarafından Sultanahmet Meydanı'ndaki çınar ağaçlarına asıldı. Bundan dolayı bu olaya Osmanlı tarihinde 'Çınar Vak'ası' adı verildi." — https://islamansiklopedisi.org.tr/cinar-vakasi (M. Münîr Aktepe)

### 14 · olaylar_ek7.js · 1703-03-01 · Feyzullah Efendi ve tepki
iddia: TDV'ye göre oğlu Fethullah Efendi'nin şeyhülislâm olacağına dair benzeri görülmemiş ferman aldı, akrabalarını genç yaşta yüksek makamlara getirdi; bu uygulamalar geniş hoşnutsuzluk yarattı.
kova: ✅ VAR
kanıt: "…oğullarını ve akrabalarını henüz küçük yaşlarda iken yüksek mevkilere getirmeye başladı. Hatta Osmanlı tarihinde ilk defa olmak üzere oğlu Fethullah Efendi'nin kendinden sonra şeyhülislâm olması hususunda padişahtan bir ferman bile aldı. Bu uygunsuz icraatları… büyük bir tepkinin oluşması…" — https://islamansiklopedisi.org.tr/feyzullah-efendi-seyyid

### 15 · olaylar_ek7.js · 1739-06-01 · İstanbul'da veba
iddia: TDV'nin Tâun maddesine göre 1739-1743 salgını bu dönemde İstanbul'u da vurdu; 18. yy salgınları daha hafif seyretti; 1713, 1719, 1728-29, 1759-65 de sayılır.
kova: 🔴 YOK (kısmen)
kanıt: "…1713, 1719, 1728-1729, 1739-1743, 1759-1765, 1784-1786, 1791-1792 tarihlerinde yine etkili olmuştur." — https://islamansiklopedisi.org.tr/taun · **fark:** salgın tarih listesi (1739-1743 dahil) maddede VAR, ama "1739-1743 salgını İstanbul'u da vurdu" ifadesi maddede YOK — tarih listesi şehir ismi vermeden genel İslam coğrafyası içindir; "İstanbul" bu salgına bağlanmıyor.

### 16 · olaylar_ek7.js · 1808-07-19 · Alemdar İstanbul'a girdi
iddia: TDV'ye göre şehre girişi bizzat IV. Mustafa tarafından karşılandı.
kova: ✅ VAR
kanıt: "İstanbul'da Dâvud Paşa sahrasına varıldığında ordu ve sancak-ı şerif bizzat IV. Mustafa tarafından karşılandı (19 Temmuz 1808) ve Alemdar huzura kabul edildi." — https://islamansiklopedisi.org.tr/alemdar-mustafa-pasa

### 17 · olaylar_ek7.js · 1862-06-27 · Tasvir-i Efkâr yayımlandı
iddia: TDV'ye göre dördüncü Türkçe gazetedir; Nâmık Kemal döneminde Yeni Osmanlılar'ın sözcüsü oldu.
kova: ✅ VAR
kanıt: "Takvîm-i Vekāyi' (1 Kasım 1831), Cerîde-i Havâdis (31 Temmuz 1840) ve Tercümân-ı Ahvâl'den (22 Ekim 1860) sonra Osmanlı ülkesinde yayımlanan dördüncü Türkçe gazetedir." + "Yeni Osmanlılar Cemiyeti'nin sözcüsü durumuna geldiği görülmektedir." + "Şinâsi'den sonra gazetenin başına Nâmık Kemal geçer." — https://islamansiklopedisi.org.tr/tasvir-i-efkar (Nesimi Yazıcı)

### 18 · olaylar_ek7.js · 1468-04-01 · Uzun Hasan Karakoyunlu'ya son verdi
iddia: TDV'ye göre Uzun Hasan 1467'de Cihan Şah'ı gafil avlayarak öldürdü; oğlu Hasan Ali'nin direnişi de ertesi bahara kadar kırıldı.
kova: 🔴 YOK (kısmen)
kanıt: "Bu muktedir hükümdar 1467'de üzerine yürüyen amansız düşmanı Karakoyunlu Hükümdarı Cihan Şah'ı gafil avlayarak Karakoyunlu Devleti'ne son verdi." — https://islamansiklopedisi.org.tr/akkoyunlular · **fark:** 1467 gafil avlama cümlesi birebir VAR; ama "Hasan Ali" adı maddede HİÇ geçmiyor (0 kez) — oğulun direnişine dair anlatı TDV'nin bu maddesinde yok.

### 19 · kronoloji_altinorda.js · 1281-01-01 · İlk fetret devri
iddia: TDV bu evreyi ayrı bir dönem olarak adlandırır: hanların otoritesi zayıflamış, Cuci ulusunun batı kanadında beylerin nüfuzu hanınkini gölgelemişti.
kova: 🔴 YOK (kısmen)
kanıt: "Tuda Mengü Han zamanında (1280-1287) devletin bütünlüğü tehlikeye düştü ve bundan sonraki yirmi beş yıllık süre, Altın Orda'nın ilk fetret devri oldu." — https://islamansiklopedisi.org.tr/altin-orda-hanligi · **fark:** "ayrı dönem olarak adlandırır" kısmı ✅ ("ilk fetret devri" adlandırması birebir); ama "Cuci ulusunun batı kanadında beylerin nüfuzu hanınkini gölgelemişti" cümlesi maddede YOK ("gölgele", "batı kanadı", "Cuci ulusu" geçmiyor). Maddedeki beyler cümlesi ("saltanat için bir taraftan beylerin, diğer taraftan da prenslerin… kanlı mücadeleleri") SONRAKİ büyük fetret dönemine (on dört han devri) aittir, 1280-87'ye değil.

### 20 · kronoloji_altinorda.js · 1434-01-01 · Hacı Giray ve Kefe
iddia: TDV Kefe maddesi 1434'te Hacı Giray'ın Cenevizliler'i yenerek şehrin meşrû hâkimi sayıldığını yazar.
kova: ✅ VAR
kanıt: "Altın Orda'nın parçalanması üzerine ortaya çıkan Kırım Hanlığı'nın kurucusu I. Hacı Giray, 1434 yılında Cenevizliler'i ağır bir bozguna uğrattıktan sonra onlarla yaptığı antlaşmada Kefe'nin hukukî bakımdan hâkimi oldu." — https://islamansiklopedisi.org.tr/kefe

### 21 · kronoloji_balkan.js · 1444-11-10 · Varna Savaşı
iddia: TDV maddesi bunu doğrudan 'Osmanlıların Bulgaristan'daki geleceğini garanti altına aldı' diye özetliyor.
kova: ✅ VAR
kanıt: "1444 Kasımında II. Murad kumandasındaki Osmanlı ordusu ile büyük bir Haçlı ordusu arasındaki savaş şehir yakınlarında cereyan etti…" + "Varna zaferi Osmanlılar'ın Bulgaristan'daki geleceğini garanti altına aldı." — https://islamansiklopedisi.org.tr/varna (ikinci cümle d'deki alıntının birebiri)

### 22 · kronoloji_cok_1dunya_A.js · 1915-05-07 · Lusitania/ABD
iddia: TDV'ye göre ABD'nin 1917'de savaşa girmesinin başlıca sebebi Alman denizaltılarının Amerikan ticaret gemilerini batırmasıydı.
kova: ✅ VAR
kanıt: "çarlığın yıkılmasından az sonra, 6 Nisan 1917'de, Amerika Birleşik Devletleri Almanya'ya karşı savaşa girmişti. Bu kararın alınmasında başlıca sebep Alman denizaltılarının Amerikan ticaret gemilerini batırmasıydı." — https://islamansiklopedisi.org.tr/birinci-dunya-savasi

### 23 · kronoloji_cok_1dunya_A.js · 1918-03-21 · Alman Bahar Taarruzu
iddia: TDV'ye göre taarruz şiddetli oldu ama 19 Nisan'da başarısızlıkla sonuçlandı; sonrasında Almanya savunmada kaldı.
kova: ✅ VAR
kanıt: "Almanlar bütün güçlerini toplayarak 21 Mart 1918'de batı cephesinde Fransa Büyük Meydan Muharebesi'ni başlatmışlardı. Taarruz şiddetli oldu, ancak 19 Nisan'da başarısızlıkla sonuçlandı. Bundan sonra Almanya ve müttefikleri savunmada kaldı." — https://islamansiklopedisi.org.tr/birinci-dunya-savasi

### 24 · kronoloji_cok_1dunya_B.js · 1914-11-02 · Rusya savaş ilan etti
iddia: TDV'ye göre donanmanın 27 Ekim'de Karadeniz'e açılması Rusya'nın 2 Kasım 1914 savaş ilanına sebep oldu; Osmanlı oldubittiyle savaşa girdi.
kova: ✅ VAR
kanıt: "Osmanlı donanmasının Alman Amirali Souchon kumandasında 27 Ekim'de Karadeniz'e açılıp Rus gemilerini batırması, Sivastopol ve Novorossiysk limanlarını topa tutması, Rusya'nın 2 Kasım 1914'te Osmanlı Devleti'ne savaş ilân etmesine sebep oldu." — https://islamansiklopedisi.org.tr/birinci-dunya-savasi

### 25 · kronoloji_cok_1dunya_B.js · 1917-01-01 · Kûtülamâre ve Bağdat
iddia: TDV'ye göre Kûtülamâre Şubat 1917'de, Bağdat Mart 1917'de İngilizlerin eline geçti.
kova: ✅ VAR
kanıt: "Şubat 1917'de Kûtül'amâre ve Mart ayında Bağdat İngilizler'in eline geçti." — https://islamansiklopedisi.org.tr/kutulamare

### 26 · kronoloji_cok_afrika.js · 1812-01-01 · Osman b. Fûdî
iddia: TDV'ye göre Alkalawa'yı 1808'de aldı; 1812'de Sokoto halifeliğini ilân etti; batıyı Abdullah'a, doğuyu ve Sokoto'yu oğlu Muhammed Bello'ya bıraktı.
kova: ✅ VAR
kanıt: "1806'da Alkalawa'ya karşı tekrar başlatılan saldırılar 1808'de şehrin alınmasıyla sonuçlandı." + "Bu başarılarının ardından Osman b. Fûdî 1812'de Sokoto halifeliğinin kuruluşunu ilân ederek İslâmî bir yönetim kurdu." + "yönetimini kardeşi Abdullah'a, yeni fethedilen doğu eyaletlerinin yönetimini de Sokoto'yu başşehir yapan oğlu Muhammed Bello'ya bırakıp Sifava'da ikamet etmeye başladı." — https://islamansiklopedisi.org.tr/osman-b-fudi (künye: "Nijerya Fûlânî Devleti'nin kurucusu ve ilk halifesi (1812-1817)")

### 27 · kronoloji_cok_ince_dg_afrika.js · 1534-01-01 · Nâyil b. Amâre
iddia: TDV'nin Func sultanları cetveli Nâyil'in cülûs yılını 1534 olarak verir.
kova: ✅ VAR
kanıt: sultanlar cetvelinden satırlar: "I. Amâre (Dûnkas) b. Adlân 1504 … Nâyil b. Amâre 1534 … I. Abdülkādir b. Amâre 1551 … II. Amâre Ebû Sükeykîn b. Nâyil 1558 … Dekîn b. Nâyil 1569" — https://islamansiklopedisi.org.tr/func

### 28 · kronoloji_cok_ince_misir_orta_asya.js · 1445-07-07 · Suzdal ve Kāsım Hanlığı
iddia: TDV'ye göre Kāsım Hanlığı 1445'ten itibaren bağımsız bir devlet statüsüne kavuştu.
kova: 🔴 YOK (kısmen)
kanıt: "Bazı kaynaklara göre 1445'te…, bazılarına göre ise 1452-1456 yıllarında… kurulan Kāsım Hanlığı'nın başına Uluğ Muhammed'in oğlu Kāsım getirildi." + "Kāsım hanlarının kendi adlarına sikke kestirmediklerini iddia etmektedir (Müstefâdü'l-ahbâr, I, 140). Ayrıca Kāsım Hanlığı'nın kendine ait bağımsızlık göstergesi sayılan bayrağının da olmadığını yazmaktadır." — https://islamansiklopedisi.org.tr/kasim-hanligi · **fark:** künye "(1445[?]-1681)" soru işaretli; kuruluş yılı kaynaklar arasında ihtilaflı (1445 / 1452-56); madde ayrıca hanlığın bağımsızlık göstergesi sikke ve bayrağının OLMADIĞINI yazar. "1445'ten itibaren bağımsız statü" kesin hükmü TDV'de yok — TDV tam tersine bağımsızlık göstergelerinin yokluğunu kaydeder. (Suzdal yenilgisi ve Vasili fidyesi anlatısı maddede var.)

### 29 · kronoloji_cok_once1281_anadolu.js · 1243-01-01 · Kilikya Moğollara tâbi oldu
iddia: Kösedağ yılında Kilikya Moğol üstünlüğünü tanıdı; TDV bu tâbiiyeti İlhanlılar adıyla anar.
kova: 🔴 YOK (okundu, bulunamadı)
kanıt: SELÇUKLULAR maddesi Kösedağ'ı şöyle anlatır: "Kösedağ Savaşı'nın kaybedilmesiyle (1243) Anadolu Selçukluları, Moğollar'ın tahakkümü altına girmiştir." — https://islamansiklopedisi.org.tr/selcukluler · **fark:** tâbi olan TDV'de SELÇUKLU DEVLETİ'dir, Kilikya değil. İLHANLILAR maddesinde (38.069 kr) "Kilikya" HİÇ geçmiyor; MOĞOLLAR maddesinde de yok; ANADOLU maddesinde Kilikya yalnız antik dönemde; ADANA maddesinde 1243 anlatısı yok. "Kilikya Ermenileri ile Trabzon Rumları dize getirilmiştir" cümlesi SELÇUKLULAR maddesinde vardır ama o I. Alâeddin Keykubad dönemi (1243 öncesi) Selçuklu politikasının özetidir. KİLİKYA ve KÖSEDAĞ başlıklı madde DİA'da yok (sluglar arama sayfasına yönleniyor). "TDV bu tâbiiyeti İlhanlılar adıyla anar" atfı okunan hiçbir maddede doğrulanamadı.

### 30 · kronoloji_cok_tunus.js · 1861-01-29 · İlk Tunus anayasası
iddia: TDV'ye göre anayasa yürütme-yasama-yargı bölünümü kurdu (altmış üyeli Meclis-i Ekber); Osmanlı'ya bağlılığı azaltıp Avrupa etkisini artıran bir dönem başlattı.
kova: 🔴 YOK (kısmen)
kanıt: "1860'ta Tunus anayasasını hazırlayan komisyona üye seçilen Hayreddin Paşa, bir yıl sonra da istişarî mahiyetteki Meclis-i Ekber'in önce üyesi, sonra başkanı oldu." — https://islamansiklopedisi.org.tr/hayreddin-pasa-tunuslu · **fark:** Meclis-i Ekber ve anayasa hazırlama komisyonu TDV'de VAR (Hayreddin Paşa maddesi); ama "altmış üyeli", yürütme-yasama-yargı yetki bölünümü, "III. Napolyon'la Cezayir'de görüşme" (Napolyon ve Cezayir kelimeleri iki maddede de geçmiyor) ve "Osmanlı'ya bağlılığı azaltıp Avrupa etkisini artıran dönem başlattı" hükmü YOK. TUNUS maddesi (120.590 karakter) 1861 anayasasını hiç anlatmıyor (madde geçen yerler 20. yy Düstür partisidir).

### 31 · kronoloji_fransa.js · 1918-11-11 · Compiègne Ateşkesi
iddia: TDV maddesinde Mondros 30 Ekim 1918 tarihindedir.
kova: ✅ VAR
kanıt: künye: "I. Dünya Savaşı sonunda Osmanlı Devleti ile İtilâf devletleri arasında 30 Ekim 1918'de yapılan ateşkes antlaşması." + "…30 Ekim 1918'de Amiral Calthorpe'un dikte ettirdiği hükümleri içeren Mondros Mütarekesi'ni imzaladı." — https://islamansiklopedisi.org.tr/mondros-mutarekesi

### 32 · kronoloji_habsburg.js · 1699-01-26 · Karlofça Antlaşması
iddia: TDV bunu Osmanlı-Avrupa ilişkilerinde bir dönüm noktası, gücün Avusturya ve Rusya'ya devri diye anlatır.
kova: 🔴 YOK (kısmen)
kanıt: "…müttefik kuvvetler karşısında değişik cephelerde yaptıkları mücadelelere son veren Karlofça Antlaşması Osmanlı tarihinde bir dönüm noktası olarak kabul edilir." — https://islamansiklopedisi.org.tr/karlofca · **fark:** "dönüm noktası" hükmü VAR (TDV "Osmanlı tarihinde", d "Osmanlı-Avrupa ilişkilerinde" der); ama "gücün Avusturya ve Rusya'ya devri" ifadesi maddenin canlı tam metninde ve önbellekteki dört kopyada da YOK. karlofca-antlasmasi slug'ı ölü.

### 33 · kronoloji_isvec.js · 1587-01-01 · İlk Osmanlı-İsveç teması
iddia: III. Zygmunt Wasa'nın III. Murad'a mektubu ilk resmî belgeli temastır (1587).
kova: ✅ VAR
kanıt: "İki devlet arasında ilk resmî irtibat 1587 yılında meydana gelmiştir. İsveç Kralı III. Zygmunt Waza, bu tarihte III. Murad'a yazdığı bir mektupta kendisinin Polonya tahtına olan adaylığının desteklenmesini istiyor…" — https://islamansiklopedisi.org.tr/isvec

### 34 · kronoloji_misir.js · 1861-06-01 · Pamuk patlaması
iddia: TDV'nin pamuk maddesi Amerikan İç Savaşı'nın 'Osmanlı pamuk piyasasını canlandırdığını' özellikle vurgular.
kova: ✅ VAR
kanıt: "Amerikan iç savaşı (1861-1865) Osmanlı pamuklu pazarının canlanmasına yol açmıştır." — https://islamansiklopedisi.org.tr/pamuk · not: d "piyasasını" der, TDV "pamuklu pazarının" der — aynı hüküm.

### 35 · kronoloji_sinir_asya.js · 1564-01-01 · Sûrîler'in Bengal kolu
iddia: TDV bu egemenliğin 971 (1564) yılına kadar sürdüğünü bildiriyor.
kova: ✅ VAR
kanıt: "Böylece Sûrîler'in Delhi'deki hâkimiyeti sona erdi; ancak hânedanın Bengal'deki egemenliği 971 (1564) yılına kadar devam etti. Bengal'de Şîr Şah'tan sonra Hızır Han, Muhammed Han, Hızır Han Bahadır ve Gıyâseddin Ce[lâl Şah]…" — https://islamansiklopedisi.org.tr/suriler

### 36 · olaylar_p0044.js · 1556-01-01 · Moskova Astarhan'ı aldı
iddia: TDV'nin ifadesiyle Moskova 'ilerisi için çok önemli sonuçlar doğuracak bir hamle' yaptı.
kova: 🔴 YOK (kısmen)
kanıt: 1556 zaptının olgusu TDV'de VAR: "Kazan (1552) ve Astarhan (1556) hanlıklarını ele geçirmiş" — https://islamansiklopedisi.org.tr/rusya · "Ertesi yıl Ruslar Kazan'ı ve dört yıl sonra da Astarhan'ı ele geçirdiler." — https://islamansiklopedisi.org.tr/kirim · **fark:** "'ilerisi için çok önemli sonuçlar doğuracak bir hamle' TDV'nin ifadesiyle" alıntısı okunan HİÇBİR maddede geçmiyor (ASTARHAN HANLIĞI 7.597 kr — "önemli sonuç|netice|sonuç|doğur|ileri için" taramaları negatif; EJDERHAN HANLIĞI "bk." stub; RUSYA 143 kr; KIRIM 131 kr; KAZAN HANLIĞI 15,8 kr). Alıntı TDV'ye dayanmıyor görünüyor; d'nin öteki ögeleri (Devlet Giray, 1569 seferi, Kırım'a bırakma) KIRIM maddesinde anlatılıyor.

### 37 · olaylar_p0049.js · 1921-02-23 · Ardahan'ın kurtuluşu
iddia: TDV'nin Ardahan maddesine göre 23 Şubat 1921'de Artvin ile birlikte kurtarıldı; Kâzım Karabekir maddesi Çürüksu, Acara ve Batum dışındaki elviye-i selâsenin geri alındığını yazar.
kova: ✅ VAR
kanıt: "Gürcü ve Ermeni çeteleriyle yapılan mücadeleler sonunda 23 Şubat 1921'de Artvin'le birlikte Ardahan sancağı da kurtarılmıştır." — https://islamansiklopedisi.org.tr/ardahan + "Ardahan da alınarak (23 Şubat 1921) Çürüksu, Acara ve Batum kazaları dışında kalan elviye-i selâse toprakları kurtarıldı." — https://islamansiklopedisi.org.tr/kazim-karabekir

### 38 · olaylar_p0057.js · 1919-06-30 · Aydın'ın kısa kurtarılışı
iddia: TDV'ye göre 27 Mayıs 1919'da işgal edildi, 30 Haziran'da kısa süre kurtarıldı, 4 Temmuz'da yeniden işgal edildi, 7 Eylül 1922'ye kadar işgal altında kaldı.
kova: ✅ VAR
kanıt: "I. Dünya Savaşı'ndan sonra, 27 Mayıs 1919'da Yunan işgaline uğradı. 30 Haziran'da kısa bir süre için kurtarıldı ise de 4 Temmuz'da yeniden işgal edildi. Nihayet 7 Eylül 1922'de kısmen yıkılmış ve nüfusu çok azal[an]…" — https://islamansiklopedisi.org.tr/aydin

### 39 · olaylar_p0057.js · 1921-07-05 · Muğla'nın kurtuluşu
iddia: TDV'ye göre 23 Temmuz 1919'dan beri İtalyan işgalindeki Muğla 5 Temmuz 1921'de kurtarıldı.
kova: ✅ VAR
kanıt: "23 Temmuz 1919'da İtalyan işgaline uğrayan ve 5 Temmuz 1921'de kurtarılan Muğla Cumhuriyet'in ilânından sonra il merkezi durumuna getirildi." — https://islamansiklopedisi.org.tr/mugla

### 40 · olaylar_p0057b.js · 1756-12-22 · Şehzade Mehmed'in ölümü
iddia: Mustafa III maddesi âni ve şüpheli, muhtemelen zehirlenerek öldüğünü yazar; Osman III maddesi hastalıktan olduğunu yazar ve Köse Mustafa Paşa'yı suçlamanın asılsızlığına delil sayar.
kova: ✅ VAR
kanıt: "Nitekim III. Osman'ın ortadan kaldırmak üzere girişimlerde bulunduğu bilinen Şehzade Mehmed âni ve şüpheli bir şekilde muhtemelen zehirlenmiş olarak öldü (29 Rebîülevvel 1170 / 22 Aralık 1756)." — https://islamansiklopedisi.org.tr/mustafa-iii + "…şehzade Mehmed 29 Rebîülevvel 1170'te (22 Aralık 1756) hastalık sebebiyle kırk iki yaşında vefat etti." ve "Sadrazamlık ve damat adaylığı, mükâfatlandırmaktan daha çok suçlamanın asılsızlığına delil olmalıdır." — https://islamansiklopedisi.org.tr/osman-iii

---

### YAPISAL GÖZLEMLER (ölçümün yanında, hüküm değil)

1. **Ölü slug mekânizması çözüldü:** TDV bilinmeyen slug'u `arama/<slug>` sayfasına YÖNLENDİRİR (HTTP 302). Yani 302 = "bu başlıkta madde yok"nun kendiliğinden kanıtı. Bunu bilmeden "slug tutmadı" diye atlanan maddeler yanlış-negative üretir (ör. KİLİKYA için 8 slug denendi; hepsi aramaya gitti → DİA'da KİLİKYA maddesi yok).
2. **"bk." stub'ları:** KIRKPINAR ("bk. GÜREŞ"), EJDERHAN HANLIĞI ("bk. ASTARHAN HANLIĞI"), ANADOLU SELÇUKLULARI ("bk. SELÇUKLULAR [Anadolu]") — tek satırlık yönlendirme maddeleri; alıntı asıl maddede aranmalı.
3. **9 🔴'ün deseni:** hiçbiri "uydurma" değil — 7'si **kısmen doğru**: TDV'de VAR olan çekirdek olgunun üstüne TDV'de OLMAYAN bağlayıcı hüküm (Pasarofça/1737 · Hasan Ali · Cuci batı kanadı · İstanbul-1739 · bağımsız statü · altmış üyeli/Napolyon · güç devri). 2'si alıntının TDV'de hiç olmaması (#29 İlhanlılar adıyla tâbiiyet · #36 'önemli sonuçlar' ifadesi). Risk sınıfı: **TDV'den çeviri/paraphrase yapılırken eklenen sentez cümlelerinin TDV'ye atfedilmesi.**

