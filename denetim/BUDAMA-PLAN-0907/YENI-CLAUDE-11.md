## 11. Tekrarlanmaması gereken hatalar

- **`replace(eski, yeni, 1)`** — Python'da sayı argümanı ilk eşleşmeyi değiştirir.
  İbrail ve Özi'de ilk eşleşme `s:` bitiş tarihiydi; `d:` eski kaldı ve 8 aylık
  sahipsiz pencere açıldı. Toplu düzeltmede **tüm eşleşmeleri** değiştir, sonra
  Değişmez 1'i koştur.

- **Yakın mükerrer yerleşim** — Varat/Varad 1 km arayla iki kayıttı; Afyon ve
  Karahisâr-ı Sâhib 100 m arayla **çelişen** zaman çizgileriyle duruyordu. Yeni nokta
  eklerken 3 km içinde başka nokta var mı diye bak.

- **Üretimi veri değişirken başlatma.** Dört üretim bu yüzden çöpe gitti.

- **Denetim ölçütünü gevşetme.** "Maddesi var mı" sorusunun cevabı "aynı gün" ya da
  "±30 gün" olmalı; "aynı yıl" değil.

- **`sed` ile Türkçe karakterli / kesme işaretli düzeltme yapma** — Git Bash'te
  tırnak eşleşmesi bozuluyor. Bunun yerine scratchpad'e `py` betiği yaz ve çalıştır.
  ⇒ **Kaçış içeren hiçbir düzeltme bash'ten geçirilmez.** Betiği `Write`
  aracıyla scratchpad'e yaz, sonra `py <yol>` ile çalıştır. İstisna yok.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/sed-ile-turkce-karakterli-kesme-isaretli-duzeltme.md`  · künye yok

- 🔴 **"BU GÜN ZATEN VAR" YETMİYOR — HANGİ KOVADA OLDUĞU DA SORULMALI.**
  `Değişmez 2s` **ÇEKİRDEĞİ** ölçüyor (`denetle.py:1589`), kuyruk dosyalarını
  ayrı sayıyor. Yani bir tarih **kuyrukta var ama çekirdekte yok** olabilir.
  **Vaka (7 Ağustos 2026, NOKTA HALKA-2 2):** yeni bir kırılma günü seçerken
  `1500-01-01`i *"külliyatta zaten var"* diye aldı — Emba ve Üstyurt onu
  kullanıyordu. **Ama ikisi de `yerlesimler_asya.js`te, yani KUYRUKTA.**
  Sonuç: gün çekirdek için **yeniydi** ve `2s`yi 121 → 123 yapıyordu.
  ⇒ Oturum bunu kendi yazdığı ölçüm aletiyle yakaladı ve tarihi çekirdeğin
  kendi gününe (`1441-01-01`) çevirdi — **tarih de en az onun kadar
  savunulurdu**, yani doğruluktan ödün verilmedi.
  📌 Ve bu, *"ölçen kendi sorduğu soruyu ölçüyor"* ailesinin **kova** yüzü:
  soru doğruydu (*"bu gün var mı"*), **evren** yanlıştı.


- 🔴 **"DENETİM VAR" ≠ "O SORUYU SORUYOR." Aynı gün ÜÇ ayrı körlük ölçüldü
  (7 Ağustos 2026) ve üçü de TEMİZ rapor veriyordu:**
  🔴 En saf vaka: **`kaffa ↔ sidamo`, ΔE 2,8** — neredeyse aynı renk, ve
  **beş yüzyıl boyunca (1390-1897) ikisi de sahnede.** Voronoi komşusu
  olmadıkları için hiçbir denetim bildirmedi. Ölçüt *"hücreler değiyor mu"*
  idi; oysa **iki gövde değmeden de aynı ekranda yan yana durur.**
  ⇒ Bir denetimin **kapsamı**, doğruluğundan ayrı ölçülür: *"hangi çiftleri
  KURUYOR"* sorusu, *"kurduğu çiftleri doğru ölçüyor mu"* sorusundan önce gelir.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/denetim-var-o-soruyu-soruyor-ayni-gun.md`  · 7 Ağustos 2026

- 🔴 **"ÇÖZÜLEMEDİ" DEMEDEN ÖNCE HANGİ KISITIN BAĞLADIĞINI ÖLÇ.**
  `fransa ↔ portekiz` (ΔE 9,6) önce *"çözülemedi"* çıktı — paletin en kısıtlı
  iki düğümü. Kısıtlar tek tek ölçülünce görüldü:
  ```
  tam bant (C* + uyum + Osmanlı şeridi)   en iyi 11,5  🔴 çözülemez
  yalnız C* bandı                          en iyi 13,2  ✓ çözüldü
  ```
  Bağlayan şey **ΔE değil, `uyum` TERCİHİYDİ** — ve `renk_olc.py:132` bunu
  zaten yazıyor: *"uyum ölçüt değil TERCİH; eşiği geçen adaylar arasında ayrım
  yapar, EŞİĞİ DEĞİŞTİRMEZ."*
  ⇒ **Üç kısıt üst üste binince hangisinin gerçek eşik, hangisinin tercih
  olduğu görünmez olur — ve bir TERCİH yüzünden gerçek bir İHLAL açık
  bırakılır.** Eşiği gevşetmek yerine tercihten çıkıldı; hiçbir eşiğe
  dokunulmadı.


- 📌 **BAZI LİSTELER KUYRUK DEĞİL PENCEREDİR.** `SINIRDA` uyarı listesinin
  tepesindeki iki çift kapatılınca **alttan iki yenisi çıktı** (`ahom↔yuan` ·
  `joseon↔ming`) — hep oradaydılar, ilk ondan taşmışlardı. Dördüncü kez
  doğrulandı.
  ```
  EŞİK   (2s tavanı 121, 2t tavanı 42)   bitirilir, tavanın altına inilir
  EKRAN  (SINIRDA maruziyet sırası)      bitirilmez, HEP DOLU olur
  ```
  ⚠️ İkisine aynı gözle bakmak yanlış: bir ekranı *"bitirilecek iş"* sanmak,
  bitmeyen bir işi borç sanmaktır.


- 🔴 **YENİ YAZILAN DENETİM, İKİ YÖNDE DE SINANMADAN "ÇALIŞIYOR" SAYILMAZ.**
  📌 Ve bu, `arac/renkler.py`de yazılı olan uyarının **ters yönü**: orada
  *"ateşleme yolunu sınadım, geçme yolunu değil"* diyor. Proje daha önce
  ateşlemeyi sınayıp geçmeyi sınamamıştı; bu oturum tersini yaptı ve kendi
  eksiğini kapattı. **İki yarım ders bir tam kural ediyor.**
  📌 Bu, `§3.5`teki *"bir veri KATEGORİSİ hiç denetlenmemiş olabilir"*
  dersinin **kod tarafıdır**: orada çağrılmayan bir ARGÜMAN vardı, burada
  ateşlenmeyen bir DAL var. İkisi de *"araç doğru ama kapsamı ölçülmemiş"*.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/yeni-yazilan-denetim-iki-yonde-de-sinanmadan.md`  · 7 Ağustos 2026, RENK 2

- 🔴 **VERİ PENCERESİ İLE KÜNYE PENCERESİ AYRI ŞEYLERDİR — biri BUGÜNKÜ,
  öteki YARINKİ kusuru bulur.**
  Künye *"1496-1511'de ikisi de var"* diyordu; **veri onu henüz ifade
  etmiyordu** — ve o gün başlayan nokta partisi ifade edecekti.
  ⇒ **Bir kusuru DOĞMADAN yakalamak istiyorsan, bugünkü veriye değil
  YARIN ÇİZİLECEK OLANA bak.** Künye, verinin taahhüdüdür.
  📌 `C14`ün ileri yönü: o *"araç sen dokunmadan başkalaşır"* der, bu
  *"evren yarın büyüyecek, ÖLÇÜMÜ ŞİMDİ ORAYA GÖRE KUR"* der.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/veri-penceresi-ile-kunye-penceresi-ayri-seylerdir.md`  · 8 Ağustos 2026, RENK 2

- 🔴 **BİR SÜZGECİ KALDIRMADAN ÖNCE, SÜZGECİN NEYİ KORUDUĞUNU OKU.**
  Aynı gün, aynı oturum: *"süzgeci tamamen kaldıralım"* önerisi ölçüldü ve
  **86 çiftin 63'ünün tasarımın kendisi olduğu** çıktı. `renkler.py`nin
  kendi başlığı zaten yazıyordu: *"bir rengi birden çok devletin paylaşması
  sorun değildir, **yeter ki o devletler tarih boyunca hiç komşu
  olmasın**."*
  ⇒ Süzgeci kaldırmak, **tasarımın izin verdiği paylaşımı ihlal saymak**
  olurdu: doğru şeyi ölçüp **yanlış evrende** raporlamak.
  Çare tek eşik değil **kademe** oldu: `<600 km` ihlal · `600-1500 km`
  uyarı · `>1500 km` tasarım · `ölçülemedi` AYRI kova.
  📌 Ve dördüncü kova şart: *"ölçülemedi"* asla *"temiz"* diye raporlanmaz.


- 🔴 **`C13`ÜN EKSİK AYAĞI: HANGİ YÖNÜN ZORLANACAĞI ÖNCEDEN BİLİNMEZ.**
  `C13` *"yeni denetim iki yönde de sınanmadan çalışıyor sayılmaz"* der ve
  iki yolu sayar: **geçme** (kusur yokken temiz mi) · **ateşleme** (kusur
  varken ötüyor mu). Ama **hangisinin zorlama gerektireceği vakaya bağlı**
  ve ikisi de olabilir:
  ⇒ **Kural: her iki yolu da zorlamaya HAZIR ol.** *"Ateşleme zordur"*
  varsayımı yarısında yanlış çıkar — ve yanlış çıktığında sınanmayan yol
  **geçme yolu** olur, ki o daha sinsidir: denetim gürültülü çalışır ama
  **temiz veriyi de kirli sayıyor** olabilir.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/c13un-eksik-ayagi-hangi-yonun-zorlanacagi-onceden.md`  · künye yok

- 🔴 **YUVARLAK TARİH YALNIZ YANLIŞ DEĞİLDİR — ÇELİŞKİYİ DE SAKLAR.**
  Yuvarlak `1337-01-01` bu boşluğu **iki ay**a indiriyor ve gözden
  kaçırıyordu; tam gün onu **21 aya** çıkarıp `Değişmez 1b`nin menziline
  soktu.
  ⇒ ***Hassasiyet yalnız doğruluk değil, GÖRÜNÜRLÜK meselesidir.***
  > 🔴🔴 **BU HÜKÜM IRAK İÇİN ÖLÇÜLDÜ VE ÇÜRÜDÜ — 2 Eylül 2026.**
  > Bir işçi oturum (OPUS HAZIR KITA 109) kaynağa sordu ve **fetret diye
  > bir şey çıkmadı:**
  > ```
  > TDV `ilhanlilar`   "İran'da kurulan bir Moğol devleti (1256-1353)"
  >                    ve 1335 SONRASI ilhanları TEK TEK sayıyor:
  >                    Arpa 1335 · Mûsâ 1336 · Muhammed 1336 · Tuga Timur 1337
  >                    Cihan Timur 1338 · Sâtî Beg 1339 · Süleyman 1340
  >                    Nûşirevân 1344-1353
  > TDV `celayirliler` "1340-1431 yılları arasında…", "bağımsız bir devlet
  >                    kurdu (1340)"
  > ```
  > ⇒ 1335-1340 arası **sahipsiz değildi.** Veri bir *fetret* taşımıyor,
  > **YANLIŞ SINIR GÜNÜ** taşıyor: 33 dönem `1335-12-01`de kesiliyor, oysa
  > `devletler.js`in `ilhanli` künyesi **zaten doğruyu söylüyordu** —
  > 1256-01-01 → **1353-01-01**. Veri künyesinden **17 yıl erken** kesmiş.
  > Çare kova değil **gün**: `ilhanli t:` ve `celayirli f:` 1340-01-01'e
  > kayar; kimlik değişmez, boşluk doğmaz, `4d` 469 → 436.
  >
  > 🔴 **Ve yanılan koordinatördü:** iş *"fetret var, kovaları ayır
  > (`devletsiz` · `veri-yok` · `başka devlet`)"* diye sevk edildi. **Üç
  > kova da yanlıştı** — 33'ün 33'ü zaten doğru kimliğe aitti. Üçüncü
  > ihtimal (**doğru kimlik, yanlış tarih**) hiç sayılmamıştı.
  > 📌 ***Bir çerçeve vermek, çerçevenin doğruluğunu peşinen kabul
  > ettirmektir.*** Sevk *"ölç"* diyordu ama **neyi ölçeceğini de
  > söylüyordu**; işçi oturum çerçevenin kendisini ölçtü ve çürüttü.
  > Beş öngörüsünün dördü çürüdü ve bilgiyi çürüyenler taşıdı.
  >
  > ⚠️ **KAPSAM DARALTILDI, SİLİNMEDİ.** Ölçülen **33 Irâk-ı Arab kaydıdır**;
  > İran ardılları (serbedârîler 1337-09-09 · muzafferî · kert) **ölçülmedi.**
  > Yukarıdaki paragrafın İran tarafı hâlâ **açık bir sorudur** — ama
  > *"1335-1340 arası bir fetret vardır"* genel hükmü **Irak için yanlıştır**
  > ve bir daha oradan iş türetilmemelidir.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/yuvarlak-tarih-yalniz-yanlis-degildir-celiskiyi-de.md`  · 8 Ağustos 2026

- 🔴 **ÖLÇEMEDİĞİNİ ELEYEN BİR SÜZGEÇ, ONU TEMİZ SAYAR.**
  ⇒ Süzgeç *"ölçemediğim aday"*ı *"sorun olmayan aday"* diye eledi. Bu,
  `§11`in *"ölçülemedi ≠ temiz"* kuralının **engel kümesi tarafı** — ve o
  kuralı aynı gün **üç kez yazan oturum, kendi aletinde uygulamamıştı.**
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/olcemedigini-eleyen-bir-suzgec-onu-temiz-sayar.md`  · 8 Ağustos 2026, RENK 2 — ve öngörüsü bunu ORTAYA ÇIKARDI

- 🔴 **ORTAK BİR KANALA ÖZEL BİR MESAJ KOYMAK, ONU HERKESE GÖNDERMEKTİR.**
  **Vaka (8 Ağustos 2026, koordinatörün hatası).** Atlas soruları
  ClaudEmre'nin **kök** `BEKLEYENLER.md`sine yazıldı. Kutu o dosyayı
  `SİSTEM ·` önekiyle **her projede** gösteriyor ⇒ atlas soruları
  **eczane projesinin** kutusunda belirdi. Emre sordu:
  > *"Bu mesajlar atlas projesi için değil mi? Burası EczAsist oturumu…"*
  📌 **Kusur kutuda değildi**: kanal tasarlandığı gibi çalıştı, taşıması
  gerekeni taşıdı. Kusur **içerikteydi** — ortak dosyaya özel iş yazıldı.
  ⇒ Çare: her projenin **kendi** `BEKLEYENLER.md`si; ortak dosya yalnız
  sistem maddeleri. (Yapıldı.)


- 🔴 **BİR DÜZELTME DOĞRU ÇALIŞABİLİR VE SONRAKİ AŞAMA ONU GERİ ALABİLİR —
  ve ikisi arasındaki boşluk hiçbir denetimin sorusu değildir.**
  ⇒ ***Kusur ne tavandaydı ne yetim-yüz mantığında — İKİSİNİN ARASINDAYDI.***
  İkisi de kendi başına doğru, ve hiçbir denetim *"bu ikisi birbirini iptal
  ediyor mu"* diye sormuyor.
  📌 Bu, *"denetim var ≠ o soruyu soruyor"* ailesinin **aşamalar arası**
  hâli: bugüne kadarki vakalar tek bir aletin içindeydi, bu **iki aletin
  arasında.**
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-duzeltme-dogru-calisabilir-ve-sonraki-asama.md`  · 9 Ağustos 2026, A1 yarıçap tavanı, koşu 4b

- 🔴 **BİR DOSYANIN "VERİ Mİ KOD MU" OLDUĞUNU İÇERİĞİ DEĞİL, ARACIN ONA
  NASIL DAVRANDIĞI BELİRLER.**
  Aynı gün NOKTA oturumu 17:06'da **32 nokta yazdı ve koşu ölmedi**; RENK 2
  bir **sözlük** değiştirdi ve koşu öldü. İkisi de *"veri"* gibi görünüyor.
  ⇒ ***`renkler.py` bir sözlük TAŞIR ama `arac/` altında bir `.py`DİR.***
  **Ne taşıdığı değil, NEREDE DURDUĞU belirliyor.**
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-dosyanin-veri-mi-kod-mu-oldugunu.md`  · 8 Ağustos 2026

- 🟢 **ÖLÇÜMDEN ÖNCE, HANGİ ÖNGÖRÜNÜN "MAZERETİ OLABİLECEĞİNİ" DE YAZ.**
  **Vaka (8 Ağustos, RENK 2).** Taban 2293 → 2325'e kayınca öngörülerini
  **değiştirmedi** ama kapsamlarını **önceden** ilan etti:
  ```
  TABANA DUYARLI:  ② gövdesiz 22 · ⑤ yakın-ama-değmeyen 7
  TABANA DUYARSIZ: ① eski renk 0 · ③ delik 0 · ④ yeni çakışma 0
  ```
  > *"②/⑤ tutmazsa sebep taban kayması OLABİLİR. Ama ①·③·④ tutmazsa
  > mazeret yok — özellikle ④, çünkü o benim 1500 km seçimimin sınavı ve
  > taban büyümesi onu ZORLAŞTIRIR, mazur GÖSTERMEZ."*
  ⇒ Ölçümden **sonra** *"ha o zaten tabana duyarlıydı"* demek, mazereti
  bulguya benzetir. **Mazeretin de önceden yazılması gerekiyor** — yoksa
  her yanlış öngörü sonradan açıklanabilir hâle gelir ve hiçbiri çürümez.
  📌 `§11`in *"öngörü ölçümden önce yazılır"* kuralının ikinci ayağı.


- 🔴 **"SAHİPSİZ"İN İKİ CİNSİ VARDIR VE SINAVI ŞUDUR: KAYNAK KONUŞUYOR MU,
  SUSUYOR MU?**
  ⇒ **Sınav:** *kaynağa sor. **Konuşuyorsa** `devletsiz`, **susuyorsa**
  `veri-yok`.*
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/sahipsiz-in-iki-cinsi-vardir-ve-sinavi.md`  · 8 Ağustos 2026, NOKTA SİBİRYA

- 🔴 **TEMİZ ÇIKAN BİR ÖRNEKLEM, ÖRNEKLEMİN DIŞINI TEMİZ İLAN ETMEZ.**
  **Vaka (8 Ağustos, koordinatörün kendi şartnamesi).** NOKTA SİBİRYA'nın
  ön ölçümü Sibir Hanlığı çekirdeğini (Tobolsk · Tümen · Baraba) ve Rus
  ostroglarını **temiz** buldu — ölçüm doğruydu. Koordinatör bundan
  ***"Sibirya'da yanlış sahip yok, sorun yalnız yoğunluk"*** diye şartname
  yazdı. **Çürüdü:**
  ```
  Çukotka: `rusya` — 2.106 km öteden (Sahalin) emiliyor
  Oysa Çukçiler 1281-1923 boyunca HİÇ fethedilmedi
  ```
  ⇒ Çekirdek temizdi, **Uzak Doğu başka bir dünyaydı.** Örneklem 60°D
  civarındaydı, kusur 170°D'deydi.
  📌 Bu, `§5`'teki *"ayrıştırıcıyı doğrulamak yetmiyor, hangi DOSYALARI
  okuduğunu da doğrulamak gerekiyor"* dersinin **coğrafya tarafı**: ölçüm
  doğru, **evreni dar.**


- 🟢 **ÖNGÖRÜ ÖLÇÜMDEN ÖNCE YAZILIR — SONRA YAZILAN BEKLENTİ AYARLANABİLİR,
  ÖNCE YAZILAN ÇÜRÜTÜLEBİLİR.**
  ⇒ `denetim/kosu-ongoru.json` — üç sayı, **koşu bitmeden**, damgalı.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/ongoru-olcumden-once-yazilir-sonra-yazilan-beklenti.md`  · 8 Ağustos 2026, RENK 2

- 🔴 **KENDİ YAZDIĞIN AYRIŞTIRICI, VAR OLAN BİR AYRIŞTIRICIDAN HER ZAMAN
  KÖTÜDÜR.**
  Yukarıdaki öngörünün **ilk iki sürümü yanlıştı ve ikisi de SESSİZDİ:**
  ⚠️ İkincisi `§11`in **aynı gün BEŞİNCİ ihlali** — ve tam da o dersi
  uygularken. **Kural yetmiyor.**
  🟢 **Çare regex'i düzeltmek değil, REGEX'İ BIRAKMAK oldu:** `renkler.py`
  o revizyondan dosyaya yazılıp **içe aktarıldı**; ayrıştırma işini Python'un
  kendi ayrıştırıcısı yaptı.
  📌 Bu proje aynı şeyi bugün **üçüncü kez** öğrendi (`girdi.py`nin tek
  tırnak vakası · `bagla.py`nin CRLF vakası · bu). ⇒ **Veri zaten bir dilde
  yazılıysa, o dilin yorumlayıcısını çağır.**
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/kendi-yazdigin-ayristirici-var-olan-bir-ayristiricidan.md`  · künye yok

- 🔴 **İKİ AYRI KUSUR TEK SATIRDA RAPORLANIRSA, ÇARELERİ TERS OLSA BİLE
  AYNI ÇARE UYGULANIR — VE DOĞRU VERİ BOZULUR.**
  ⇒ Altısı da **doğru yerdeydi**; atlasın penceresi oraları **hiç
  kapsamıyordu.** Öneri uygulansaydı Sofala **1020 km** kuzeye taşınacaktı —
  yani ihlal kapanacak, **gerçek silinecekti.**
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/iki-ayri-kusur-tek-satirda-raporlanirsa-careleri.md`  · 8 Ağustos 2026, NOKTA EMİLME yakaladı

- 🔴 **"ÇÖZÜLEMEDİ"NİN ÜÇÜNCÜ CİNSİ: SIRA BAĞLIYOR OLABİLİR — VE BU,
  YAPISAL OLANDAN DAHA TEHLİKELİDİR ÇÜNKÜ AYNI GÖRÜNÜR.**
  ⇒ Partide seçilen **her renk bir sonraki kimliğe engel olur**; geç sıraya
  düşen kimlik **çözülemez GÖRÜNÜR.** Aynı parti ikinci kez koşulunca
  **20 → 7** oldu: bildirilen 20'nin **13'ü yapısal değildi.**
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/cozulemedi-nin-ucuncu-cinsi-sira-bagliyor-olabilir.md`  · 8 Ağustos 2026, RENK 2

- 🔴 **BİR KISIT "UYGULANAMADI" DİYE SESSİZ GEÇİLİRSE, UYGULANMIŞ SANILIR.**
  Çözücü normal bitti, *"çözdüm"* dedi. Kısıtın kurulmadığı ancak **çıktı
  satır satır okununca** görüldü.
  ⇒ **Çare `assert`:** kurulamayan özel kısıt artık çözücüyü **durduruyor.**
  İkinci geçişte kuruldu: `luba ↔ lunda` **ΔE 60,7** (hedef ≥ 25).
  📌 Bu, aynı gün ölçülen *"aletin BASMADIĞI ≠ ölçtüğü"* dersinin **kısıt
  tarafı**: orada bir bölüm hiç ölçmüyordu, burada bir kısıt hiç
  kurulmuyordu — **ve ikisi de sessizdi.** Sessiz atlama, yanlış sonuçtan
  daha zor bulunur: yanlış sonuç bir sayı gösterir, sessiz atlama **hiçbir
  şey göstermez.**
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-kisit-uygulanamadi-diye-sessiz-gecilirse-uygulanmis.md`  · 8 Ağustos 2026, RENK 2

- 🟢 **VE NÖBETÇİ İLK GERÇEK YAKALAYIŞINI YAPTI — "KAÇ TANE VAR" DEĞİL
  "KAÇ TANE YENİ DOĞDU".**
  Beş renk istendi, **dokuz yazıldı**: nöbetçi dört kimliğin `kongo-kralligi`
  · `lunda-imparatorlugu` · `ndongo` · `avustralya` **veride KULLANILDIĞI
  hâlde renksiz** olduğunu buldu.
  ```
  istenen beş     künyeli-renksiz               → sessiz borç
  bulunan dört    VERİDE KULLANILIYOR + renksiz → `§8`: BOYANMIYOR = harita DELİĞİ
  ```
  Ve sayının **2 → 4 diye BÜYÜDÜĞÜNÜ** de gösterdi: nokta oturumu yazarken
  doğuyorlardı. ⇒ Bir sayaç *"dört tane var"* derdi; nöbetçi ***"ikisi az
  önce doğdu"*** dedi — ve asıl bilgi ikincisidir.


- 🔴 **BİR ALAN TASARLAMADAN ÖNCE, O ALANIN ZATEN VAR OLUP OLMADIĞINI ÖLÇ —
  VE VARSA, ONUN NEYLE DOLU OLDUĞUNU DA ÖLÇ.**
  ⇒ `k:` alanı **zaten vardı**, ve `VERI-YAPISI.md` zamanlı hâlini
  (`kd:[{f,t,k,m}]`) **zaten tasarlamıştı** — *"k/m'nin yerini alacak"*
  notuyla birlikte. Yeni alan **gereksizdi**, ve `kd:` daha iyiydi: kademeyi
  **ve** bağlı merkezi *birlikte* zamanlı yapıyor, yani `Değişmez 3`ün 359
  çiftini de çözüyor — ayrı bir `sinif:` alanı çözmezdi.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-alan-tasarlamadan-once-o-alanin-zaten.md`  · 8 Ağustos 2026, koordinatör

- 🔴 **BİR ARACIN VERDİĞİ REÇETE, UYGULANINCA KENDİ TESTİNİ GEÇMEK
  ZORUNDADIR — GEÇMİYORSA TEŞHİS DOĞRU AMA REÇETE KULLANILAMAZDIR.**
  🔴 **VE KOORDİNATÖRÜN İLK TEŞHİSİ YANLIŞTI.** *"Test `contains()`
  kullanıyor, sınırı hariç tutuyor"* dedi — koda bakınca `covers()` çıktı,
  yani sınır **zaten dâhildi.** Gerçek sebep **yuvarlama**: `nearest_points`
  kıyı çizgisinin *üstünde* bir nokta verir, dosyaya **4 ondalıkla (~11 m)**
  yazılınca kıl payı dışarı düşer.
  📌 Yani hüküm doğruydu (*"kusur araçta, veride değil"*) ama teşhis
  yanlıştı — `B10`un koordinatörün kendi üzerinde gerçekleşmiş hâli, ve
  düzeltmeyi **koda bakmak** verdi, akıl yürütmek değil.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-aracin-verdigi-recete-uygulaninca-kendi-testini.md`  · 8 Ağustos 2026

- 🔴 **ATLAS SEFERİ DEĞİL TASARRUFU BOYAR — bir kimliğin TARİHSEL ERİŞİMİ
  ile HARİTADAKİ GÖVDESİ ayrı şeylerdir.**
  **Vaka (8 Ağustos 2026).** Koordinatör `ace ↔ ming` aynı-hex çiftini
  ölçtürürken şunu yazdı: *"Zheng He seferleri Sumatra'ya ulaşıyordu, Ming
  donanması 15. yüzyılda Malaka Boğazı'ndaydı — eşzamanlı ve yakın bir an
  var mı?"* **Tarihen doğru, ÖLÇÜT OLARAK YANLIŞ.**
  📌 Ve aynı oturum bunun bir **desen** olduğunu gösterdi — aynı gün üç kez:
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/atlas-seferi-degil-tasarrufu-boyar-bir-kimligin.md`  · 8 Ağustos 2026

- 🔴 **EŞİK TEK SAYI DEĞİLDİR: ANLATININ MERKEZİNDEKİ ÇİFT DAHA FAZLASINI
  HAK EDER — VE GEREKÇESİ VERİDE DEĞİL KRONOLOJİDEDİR.**
  **Vaka (8 Ağustos, RENK 2).** `bugis-kralliklari ↔ gova-makassar`:
  ```
  ΔE ≥ 12 (okunabilirlik tabanı)  →  ölçüm 12,4 · GEÇERDİ ama YETMEZDİ
  hedef 25 konarak yeniden çözüldü →  ölçüm 25,8 ✓
  ```
  Sebep veride değil: **Makassar Savaşı'nın iki tarafı bunlar.** Kullanıcı
  o savaşı okurken tarafları ayırt edememek, eşiği teknik olarak geçen bir
  renkten **kat kat** kötüdür.
  ⇒ **Eşik gevşetilmez — SIKILAŞTIRILIR**, ve hangi çiftin sıkılaştırmayı
  hak ettiğini **kronoloji** söyler. (`ava ↔ ayutthaya` — Burma-Siyam
  savaşları — aynı sınıfın ilk vakasıydı.)
  📌 `B15`in aynası: o *"eşiğin taban mı tavan mı olduğunu söyle"* der, bu
  *"tabanın ÜSTÜNE çıkmayı hak eden çift vardır"* der.


- 🔴 **ENGEL KÜMESİ, KAPATILMAK İSTENEN ÇİFTİ İÇERMİYORSA ÇÖZÜM O ÇİFTİ
  ÇÖZMEZ — VE ÇÖZÜCÜ BUNU SÖYLEMEZ, "ÇÖZDÜM" DER.**

  **Vaka (8 Ağustos 2026, RENK 2).** Bir renk çakışması çözülürken engel
  kümesi **600 km** süzgeciyle kuruldu; oysa kapatılacak çiftler **647-1170
  km** aralığındaydı ⇒ **kısıta hiç girmediler.** Çözücü kusursuz çalıştı,
  "çözdüm" dedi, ve hedef çiftler hâlâ eşiğin altındaydı (`le-hanedani`
  11,89 · `mac-hanedani` 10,51).
  ⇒ **Alet başarı bildiriyor ve başarı KENDİ TANIMINA GÖRE gerçek.**
  Bu, *"doğru aleti yanlış evrenle koşturmak"* ailesinin **seçim tarafı**
  ve en sinsi üyesi: hata ne çıktıda ne kodda — **girdide.**
  📌 Çare bir doğrulama adımı: **kapatmak için seçilen her çift, çözüm
  sonrası eşiği GERÇEKTEN geçiyor mu?** `C13`ün bu dalı yoktu.


- 🔴 **"ÇÖZÜLEMEDİ"NİN İKİ CİNSİ VARDIR VE AYIRT EDİLMELİ.**
  ⇒ *"Çözülemedi"* raporlanırken **hangi cins olduğu yazılır** — yoksa bir
  sonraki oturum **çözülebileni de imkânsız sanar** ve denemez.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/cozulemedi-nin-iki-cinsi-vardir-ve-ayirt.md`  · künye yok

- 🔴 **BİR BİLGİ İKİ YERDE DURUYORSA, BİRİ GÜNCELLENİNCE ÖTEKİ BAYATLAR —
  VE HANGİSİNİN OKUNDUĞUNU ALET SÖYLER, GÖZ DEĞİL.**
  **Vaka (8 Ağustos, RENK 2 — ve nöbetçi YAZARINI yakaladı):** sabah
  eklenen *"beyan edilen paylaşım bozuldu"* uyarısı, öğleden sonra onu
  yazan oturumun kendi düzenlemesinde öttü. Düzeltirken ikinci ders çıktı:
  beyan **iki yerde** duruyordu — insan okunur yorum **ve** makine okunur
  sözlük. **Yorum güncellendi, sözlük unutuldu, uyarı susmadı.**
  📌 `uret_bekleyenler.py`nin *"iki otorite doğar ve ayrışır"* dersinin
  üçüncü vakası — ve ilk kez **aynı dosyanın içinde.**
  📌 Ve asıl ders: ***bir nöbetçinin değeri, onu YAZANI DA bağlamasıdır.***


- 🔴 **BİR RAPORDA ÖLÇÜLMÜŞ İLE HATIRLANMIŞ YAN YANA DURURSA, OKUYAN
  İKİSİNİ DE ÖLÇÜLMÜŞ SANAR — VE YAZAN DA.**
  🔴 **Üçüncüsü en ağırı:** *"kabul edilmiş borç kayıtsız kalırsa yarın
  kusur diye yeniden bulunur"* dersini **yazan oturumun kendisi**, bu sefer
  **kaydı ARAMADAN "kayıtsız" ilan etti.** Dersi uyguladı sandı; **ölçmeden
  uyguladı.**
  ⇒ **Çare:** ölçülmemiş her cümle **açıkça işaretlenir** ya da **yazılmaz.**
  `§7.1 ④`ün *"bulamadığını `bulunamadı` diye yaz"* kuralının ters yüzü:
  ***ölçmediğini `ölçmedim` diye yaz.***
  📌 Ve blok hâlinde sunmak tehlikeyi büyütüyor: ölçülmüş satırlar,
  yanlarındaki ölçülmemiş satıra **kendi güvenilirliklerini ödünç veriyor.**
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-raporda-olculmus-ile-hatirlanmis-yan-yana.md`  · 8 Ağustos 2026, RENK 2'nin kendi çözümlemesi

- 🔴 **HÜKÜM İLE TEŞHİS AYRI ŞEYLERDİR — bir raporu kabul etmeden ÖLÇ.**
  RENK 2 şunu bildirdi: *"`merini` rengini yazdım ama hiçbir zaman
  boyanmayacaktı — künyesi `harita:"fas"` diyor."* **Hüküm doğruydu.**
  Ölçüldü, **teşhis yanlıştı**:
  ```
  BOYALAR içinde "merini"      VAR
  veride  d:"merini" dönemi      0     ← ASIL SEBEP BU
  ```
  Renk görünmüyordu çünkü **onu kullanan veri yoktu** — Fas göçü hiç
  yapılmamıştı. Bildirilen `harita:` alanı düzeltilseydi **renk yine
  görünmeyecekti** ve kusur "kapatıldı" sayılacaktı.
  ⇒ Doğru hüküm, yanlış teşhisle gelebilir. **Rapor ne kadar iyi olursa
  olsun, düzeltmeden önce sebebi kendin ölç.**


- 🔴 **BİR ALETİN EVRENİ DEĞİŞİNCE, ALET DEĞİŞMEDEN SESSİZCE YANILIR.**
  7 Ağustos'ta **üç ayrı oturum** aynı tuzağa düştü, üçünde de kod bir
  satır bile değişmemişti — değişen **taban**dı:
  Üçü de yanlış alarmı kendi yakaladı ve düzeltti. **Kural: bir dosya
  bağlandığı gün, o veriye bakan BÜTÜN ölçüm aletlerinin tabanı yeniden
  doğrulanır.** Aletin doğruluğu evreninden bağımsız değildir.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-aletin-evreni-degisince-alet-degismeden-sessizce.md`  · künye yok

- 🔴 **"ŞU DÜZELTMEYİ YAP" DENİNCE ÖNCE KUSURUN ÜREYİP ÜREMEDİĞİNİ ÖLÇ —
  ve düzeltmenin HER DALDA doğru olduğunu.**
  `id:` ∪ `harita:` okuma önerisi RENK 2'ye gitti. Ölçtü:
  ```
                            harita-or-id (mevcut)   id ∪ harita (önerilen)
  künyesi var, rengi yok           63  ✓                96  🔴 +33 YANLIŞ
  rengi var, künyesi yok            3                    2  ✓
  ```
  33 fazlanın sebebi: `bosna-kralligi` (harita=`bosna`) gibi künyelerin
  `harita:` alanı **başka anahtara** bakar — kendi renklerine ihtiyaçları
  **yoktur**. Birleşim onları "rengi eksik" sayardı.
  ⇒ Çare birleşim değil **ayrı bir dal** oldu: *"künye var ama `harita:`
  başka anahtarda"*. Ve o dal **ilk koşusunda gerçek bir bulgu** verdi.
  📌 Ama **`js/app.js`te birleşim DOĞRUYDU** ve uygulandı: `devletAdi()`
  yalnız `d.id` okuduğu için **30 gövde ham slug gösteriyordu** (`kaffa` ·
  `sirbistan` · `ceneviz` · `sovalye`…). **Aynı soru, iki yerde iki farklı
  cevap — ve ikisine de ölçüm karar verdi, kural değil.**


- 🔴 **BİR KURALIN YAZILI OLMASI, UYGULANDIĞI ANLAMINA GELMİYOR — ve ihlaller
  GİDEREK SESSİZLEŞİYOR.** `§11`in *"kaçış içeren hiçbir düzeltme bash'ten
  geçirilmez"* kuralı 8 Ağustos'ta **dört oturumun dördü tarafından da**
  ihlal edildi (koordinatör beş kez). Ama asıl bulgu sayı değil **dizilim**:
  Dördüncüsünde `git commit` backtick yüzünden hiç çalışmadı, **ama ekrana
  "commit tamam" yazıldı.** Fark edilmeseydi o oturumun bütün raporu
  commit'siz kalacaktı — yani **rapor vardı, dayanağı yoktu.**
  ⇒ *"Patlayan → sessizce bozan → başarılı görünen."* Aynı kural, giderek
  daha zor fark edilen üç biçimde çiğnendi.
  📌 Teşhis RENK 2'nin: ***"Kural yetmiyor, ALIŞKANLIK gerekiyor."***
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-kuralin-yazili-olmasi-uygulandigi-anlamina-gelmiyor.md`  · künye yok

- 🔴 **KOORDİNATÖRÜN "HIZLI BİR BAKIŞ" ÖLÇÜMÜ, İŞ DAĞITIMININ TABANI
  OLUNCA ARTIK HIZLI BİR BAKIŞ DEĞİLDİR** — *(10 Ağustos 2026, aynı gün
  DÖRT vaka)*
  🔴 **Ve bedeli tek bir yanlış sayı değil: YANLIŞ İŞ TARİFİ.** *"17 içerik
  kalemi bekliyor"* diye yazılan şartname, **ödenmiş bir borcu yeniden
  kuyruğa** koyuyordu; oturum onu okuyup 11 kartı **yeniden yazabilirdi.**
  📌 Bu, `§11`in *"kabul edilmiş borç kayıtsız kalırsa yarın kusur diye
  yeniden bulunur"* kuralının **TERS YÜZÜ**: ödenmiş bir borç da kayıtsız
  kalırsa yeniden **iş** diye bulunur. **Kayıt iki yöne de gerekiyor.**
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/koordinatorun-hizli-bir-bakis-olcumu-is-dagitiminin.md`  · 10 Ağustos 2026, aynı gün DÖRT vaka

- 🔴 **`-F <dosya>` KULLANMAK YETMİYOR — O DOSYANIN NASIL YAZILDIĞI DA
  KURALIN İÇİNDE.** *(altıncı vaka, 10 Ağustos 2026)*
  📌 Ve asıl ders `§11`in kendi cümlesinin bir kademe ötesi: orada
  *"kural yetmiyor, ALIŞKANLIK gerekiyor"* deniyordu, sonra *"yeter olan tek
  şey ARACI DEĞİŞTİRMEK"*. Bu vaka üçüncüsünü ekliyor: **aracı değiştirmek de
  yetmiyorsa, ARACIN GİRDİSİNİN nereden geldiğine bakılır.** Doğru alete
  bozuk metin vermek, yanlış alet kullanmakla aynı sonucu verir.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/f-dosya-kullanmak-yetmiyor-o-dosyanin-nasil.md`  · künye yok

- 🔴 **BİR DÜZELTMENİN VERİDE İNMESİ, HARİTADA İNDİĞİ ANLAMINA GELMEZ.**
  Sıra kuralının **üç** ayağı var ve üçüncüsü aynı gün tamamlanamaz:
  **Vaka (8 Ağustos):** `ainu` kaydı veriden kaldırıldı (2 → 0), rengi
  `BOYALAR`dan düşürüldü — ama koşu **veri düzeltilmeden önce** bitmişti.
  `renk_cikti` yayını okudu ve *"`ainu` · çizilen `#1b8ae4` · **beyan YOK**"*
  dedi: **hayalet canlı yayında** ve ancak bir sonraki koşuda düşecek.
  ⚠️ Bu bir kusur değil **kabul edilmiş borçtur** — ama *yazılmazsa* bir
  sonraki oturum onu kusur diye ikinci kez keşfeder.
  ⇒ **Veriyle çıktı arasında bir tur gecikme varsa, o tur TESPİHE YAZILIR.**
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-duzeltmenin-veride-inmesi-haritada-indigi-anlamina.md`  · künye yok

- 🔴 **ALETİN GÖSTERDİĞİ ≠ DOSYADA YAZAN.** Bir `\b` kaçışı bozulup dosyaya
  **0x08 (BACKSPACE) baytı** yazıldı. `Read` onu **görünmez** gösterdi —
  satır ekranda kusursuz görünüyordu:
  📌 Bu, kusur listesinin **onuncu** sınıfı ve öncekilerin hiçbirine
  benzemiyor: ①-⑦ *yanlış şeyi ölçmek*, ⑧-⑨ *hiç ölçmemek*, ⑩ ise
  **doğru şeyi ölçüp ALETİN yalan söylemesi.**
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/aletin-gosterdigi-dosyada-yazan-bir-b-kacisi.md`  · künye yok

- 🔴 **BİR ŞİKÂYET, ŞİKÂYET EDİLEN ŞEYDEN DAHA HIZLI BAYATLAR — VE EKRAN
  GÖRÜNTÜSÜ KENDİ TARİHİNİ TAŞIR.** *(10 Ağustos 2026, İÇERİK)*
  🟢 **Ve buradan bir alet çıktı:** *kronoloji panelindeki `N / TOPLAM
  başlık` sayısı, görüntünün hangi yayından olduğunu birebir söyler.*
  ⇒ Her görsel şikâyette **ilk soru** *"bu kusur var mı"* değil,
  ***"bu şikâyet hâlâ geçerli mi"*** olmalı — ve cevabı ölçümle değil
  **görsele bakarak** verilebiliyor.
  ⚠️ Sınırı ölçülmedi: panel her görselde okunmuyor (dar kırpılmış olanlar
  var), kaçında okunabildiği **sayılmadı.**
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-sikayet-sikayet-edilen-seyden-daha-hizli.md`  · 10 Ağustos 2026, İÇERİK

- 🔴🔴 **"İSTENEN ŞEYİN ALTYAPISI ZATEN VARDI" — BİR GÜNDE BEŞ KEZ.**
  *(10 Ağustos 2026 — üç ayrı oturum + koordinatör)*
  📌 En keskin vaka `hareket tipolojisi`: commit **30 Temmuz 17:20**, Emre'nin
  `K10` şikâyeti (`h11#31`) **30 Temmuz 16:58** — **yirmi iki dakika önce.**
  Aynı külliyattaki `h18#6` ise **1 Ağustos 00:58**, yani commit'ten **31 saat
  sonra** ⇒ o şikâyet *"tipoloji yok"* demiyor, **başka bir şey** söylüyor
  (rota verisi). ***Dakika farkı, iki şikâyeti iki ayrı kovaya koydu.***
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/istenen-seyin-altyapisi-zaten-vardi-bir-gunde.md`  · 10 Ağustos 2026 — üç ayrı oturum + koordinatör

- 🔴 **BİR DERS VERİYE *SERBEST METİN* OLARAK İNERSE, İNMİŞ SAYILMAZ — VE
  `grep` ONU "UYGULANMIŞ" GÖSTERİR.** *(10 Ağustos 2026)*
  ⇒ **Ders inmiş — ama `neden:` serbest metninin içine.** Sonuç:
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-ders-veriye-serbest-metin-olarak-inerse.md`  · 10 Ağustos 2026

- 🔴 **LOG DA BİR ÇIKTIDIR VE O DA BAYATLAR — VE DOSYA ADI NUMARASI TARİHLE
  İLGİSİZ.** *(10 Ağustos 2026, İÇERİK yakaladı)*
  ⇒ İş **zaten yapılmıştı.** Şartname düzeltilmeseydi motor oturumu **bitmiş
  bir işi ikinci kez** yapacaktı — ve `43` rakamıyla başlayıp *"kapsamı dört
  katına çıkardım"* diye teslim edecekti.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/log-da-bir-ciktidir-ve-o-da.md`  · 10 Ağustos 2026, İÇERİK yakaladı

- 🔴 **SİLİNEN KODUN MEZAR TAŞI, HAYATTA KALAN KOD HAKKINDA BİR İDDİADIR —
  VE GÜVEN VERDİĞİ İÇİN KİMSE ONU ÖLÇMEZ.** *(24 Ağustos 2026)*
  📌 **Ve kusur, notun yanlış olmasından değil, GÜVEN VERMESİNDEN
  büyüdü.** *"Bu bilgi orada duruyor"* cümlesi, okuyanı oraya
  BAKMAKTAN alıkoyar. Bir uyarı okuru ölçüme iter; bir güvence ölçümden
  ÇEVİRİR. ⇒ ***Yanlış bir güvence, hiç yazılmamış bir nottan kötüdür.***
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/silinen-kodun-mezar-tasi-hayatta-kalan-kod.md`  · 24 Ağustos 2026

- 🔴 **BUGÜNÜN EN SIK HATASI TEK BİR SINIFTI: ÖLÇÜM DOĞRU, ÇIKARIM YANLIŞ.**
  *(10 Ağustos 2026 — bir günde ALTI vaka, üç ayrı oturum + koordinatör)*
  ⇒ Altısında da **sayı doğruydu.** Yanlış olan, sayıdan çıkarılan hükümdü.
  📌 Ve altısının beşini **başka bir oturum** yakaladı, hiçbirini denetim
  betiği yakalamadı — çünkü betik **sayıyı** denetler, **çıkarımı** değil.
  🟢 Çare bir denetim değil bir **cümle**: rapora *"ölçtüğüm şu, bundan
  çıkardığım şu"* diye **iki ayrı satır** yazmak. Tek satırda birleşince
  çıkarım, ölçümün güvenilirliğini **ödünç alıyor.**
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bugunun-en-sik-hatasi-tek-bir-sinifti.md`  · 10 Ağustos 2026 — bir günde ALTI vaka, üç ayrı oturum + koordinatör

- 🔴 **BİR DEFTERİN ANAHTARI KARARSIZSA, DEFTER SESSİZCE YALAN SÖYLER —
  ve yalanı "gerileme" gibi görünür.** *(2 Eylül 2026 — bir gecede ÜÇ
  defterde ölçüldü)*
  ⇒ **KURAL (bulan oturumun kendi cümlesi):** *"Anahtar, DEĞİŞMESİ BULGUYU
  DEĞİŞTİREN şeylere dayanmalı."* `ilk yer` bulgu değişmeden değişir
  (gürültü); `yer_id` değişirse **maddenin gösterdiği yer** değişir (gerçek).
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-defterin-anahtari-kararsizsa-defter-sessizce-yalan.md`  · 2 Eylül 2026 — bir gecede ÜÇ defterde ölçüldü

- 🔴 **İKİ AYRI SORUNUN AYNI CEVABI VERMESİ, AYNI SORU OLDUĞU ANLAMINA
  GELMEZ.** *(2 Eylül 2026)*
  ⇒ Devralsaydı **tek dayanağı** olurdu. Ayrı ölçtüğü için **iki bağımsız
  kanıt** var ve biri çürürse öteki ayakta kalır.
  📌 Bu, *"ölçüm doğru, çıkarım yanlış"* ailesinin en ince üyesi: iki ölçüm
  aynı sonuca varınca **birini ötekinin doğrulaması sanmak.** Doğrulama,
  aynı soruya iki yoldan gitmektir — farklı sorulara aynı cevabı almak
  değil.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/iki-ayri-sorunun-ayni-cevabi-vermesi-ayni.md`  · 2 Eylül 2026

- 🔴 **BİR ALET YANLIŞ BİRİM ETİKETİ BASIYORSA, ONA YAZILAN ÖNGÖRÜ
  ÇÜRÜTÜLEMEZ HÂLE GELİR — NE TUTAR NE ÇÜRÜR, YALNIZ YANILTIR.**
  *(2 Eylül 2026 — iki oturumu, on yedi gün arayla, aynı satır yanılttı)*
  ⇒ `kesilen` **km²·DÖNEM**, `tamamen boşalan` **adet**. 391 devlet ×
  2865 dönem ⇒ 743.793.802 / 2865 ≈ **259.600 km² / gövde-dönem.**
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-alet-yanlis-birim-etiketi-basiyorsa-ona.md`  · 2 Eylül 2026 — iki oturumu, on yedi gün arayla, aynı satır yanılttı

- 🔴 **`C13`ÜN ÜÇÜNCÜ AYAĞI: GİRDİYİ GERÇEK KAYNAĞINDAN OKUMA YOLU DA
  SINANIR.** *(2 Eylül 2026 — ve bir nöbetçi, önlemek için yazıldığı
  kusuru İLK GERÇEK GİRDİSİNDE kendi üzerinde üretti)*
  ⇒ **Sınavların ikisi de kayıtları BELLEĞE ENJEKTE ederek yapılmıştı.**
  Dosyadan okuma yolu **hiç koşulmamıştı** ve kusur tam oradaydı: regex
  `bk:[` dizisinin ilk öğesinde duruyor, gövdeyi boş yakalıyordu.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/c13un-ucuncu-ayagi-girdiyi-gercek-kaynagindan-okuma.md`  · 2 Eylül 2026 — ve bir nöbetçi, önlemek için yazıldığı kusuru İLK GERÇEK GİRDİSİNDE kendi ü

- 🔴 **"ATLASTA YOK" HÜKMÜ, NORMALLEŞTİRİCİSİZ BİR ARAMAYLA VERİLEMEZ —
  ve bu, `§4`ün Türkçe yazım ekseninin BEŞİNCİ vakası, ilk kez BİR NOKTA
  PARTİSİNİ durdurdu.** *(2 Eylül 2026)*
  ⇒ Kol açılsaydı `Budin`in yanına **`Buda`**, `Üsküp`ün yanına
  **`Skopje`** yazılacaktı: `§11`in Varat/Varad tuzağı, **altı kez
  birden**, ve hepsi *"eksik veriyi tamamlıyoruz"* diye.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/atlasta-yok-hukmu-normallestiricisiz-bir-aramayla-verile.md`  · 2 Eylül 2026

- 🔴 **BİR ÖNGÖRÜ, SINAVININ KOŞULACAĞI ANI DA TARİF ETMELİDİR — damga
  yetmiyor.** *(2 Eylül 2026, puanlama kapısı öngörüsü)*
  Kıyas *"dün bugün ne değişti"* sorusunu cevaplıyordu; öngörünün sorduğu
  *"kapı ne yaptı"* sorusunu **değil.** Alet doğru çalıştı, **kontrol
  grubu yoktu.**
  📌 Aynı öngörünün ①'inde eksik olan **birim**di, ④⑤⑦'sinde **kontrol
  grubu**. İkisi de "doğru aleti yanlış evrenle koşturmak" ailesinden.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-ongoru-sinavinin-kosulacagi-ani-da-tarif.md`  · 2 Eylül 2026, puanlama kapısı öngörüsü

- 🟢 **VE BİR ÖNGÖRÜ ÜÇ AYRI CİNSTEN ÇÜRÜR — ÜÇÜNCÜSÜ EN DEĞERLİSİ.**
  Aynı turda ölçüldü:
  ⇒ ①'de sayıyı düzeltmek yeter; ③'te **soruyu değiştirmek** gerekir.
  📌 Ve ③ ancak **kodu okuyarak** bulunur; hiçbir koşu sayısı onu
  göstermez, çünkü sayı hep 0 çıkar ve *"demek hiç boşalmıyor"* diye
  okunur.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/ve-bir-ongoru-uc-ayri-cinsten-curur.md`  · künye yok

- 🟢 **BİR KOD ARGÜMANI, BİR KONTROL KOŞUSUNDAN GENİŞ OLABİLİR —
  ve 11,5 SAAT KURTARDI.** *(aynı gün, aynı öngörü)*
  ⇒ Kapı, Osmanlı gövdesinin girdisine **hiçbir yoldan** dokunamıyor.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-kod-argumani-bir-kontrol-kosusundan-genis.md`  · künye yok

- 🔴 **DOĞRU SONUCU GÜVENİLMEZ YOLDAN VEREN ALET — ve kendini ELE VERMEZ.**
  *(2 Eylül 2026, işçi oturumun kendi aletini ihbarı)*
  ⇒ *"'Adı geçiyor' ile 'hükme bağlanmış' AYNI ŞEY DEĞİL."* Birinci ölçüm
  doğru sayıya varıyordu ama **yanlış soruyu** soruyordu.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/dogru-sonucu-guvenilmez-yoldan-veren-alet-ve.md`  · 2 Eylül 2026, işçi oturumun kendi aletini ihbarı

- 🔴 **BİR HÜKÜM, VERİYE İNMEDİKÇE HÜKÜM DEĞİL BİR METİNDİR.**
  *(aynı gün, aynı küme)*
  📌 `§11`in *"bir ders veriye SERBEST METİN olarak inerse inmiş
  sayılmaz"* dersinin **karar** tarafı: orada bir bilgi makinenin
  göremeyeceği yere yazılmıştı, burada bir **hüküm.** İkisinde de
  `grep` *"var"* der, makine *"yok"* der.
  🟢 Sınavı aynı tek soru: ***bu hükmü bir `if` ile sorabiliyor muyum?***
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-hukum-veriye-inmedikce-hukum-degil-bir.md`  · künye yok

- 🔴🔴 **BİR ALET, ARADIĞI ŞEYİN *NEREDE OLMAYACAĞINI* DA BİLMELİ.**
  *(2 Eylül 2026 — bir günde YEDİ kusur, hepsi tek kökten, ve yedisini de
  aletleri yazan oturum kendi üzerinde yakaladı)*
  ⇒ ***Sessiz atlama, yanlış sonuçtan pahalıdır.*** Yanlış sonuç bir gün
  fark edilir; sessiz atlama **hiçbir iz bırakmaz** ve üstüne
  *"tamamlandı"* raporu yazılır.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-alet-aradigi-seyin-nerede-olmayacagini-da.md`  · 2 Eylül 2026 — bir günde YEDİ kusur, hepsi tek kökten, ve yedisini de aletleri yazan oturu

- 🔴🔴 **KENDİ KURDUĞUN ÖLÇÜM PENCERESİ, GÖRMEDİĞİNİ "YOK" DİYE GÖSTERİR —
  VE O YOKLUK ÜZERİNE YAZILAN YAMA, GERÇEĞİ SİLER.**
  *(5 Eylül 2026 · `NEHİR SÜRTÜNME` · ve kusuru YAZAN taraf yakaladı)*
  🟢 **Ve yakalayan şey sezgi değil SINAV oldu** — `KAYBOLAN kırılma`
  satırı ötüyordu. Çare de doğru cinstendi: filtreyi düzeltmek değil,
  **yamayı elden değil VERİDEN üretmek.**
  📌 Bulan oturumun cümlesi kaydın özü: ***"Filtre veriyi bozmadı, BENİ
  bozdu."***
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/kendi-kurdugun-olcum-penceresi-gormedigini-yok-diye.md`  · 5 Eylül 2026 · `NEHİR SÜRTÜNME` · ve kusuru YAZAN taraf yakaladı

- 🔴 **BİR SEVK, TAŞIDIĞI ÖNCÜLÜ DE DOĞRULAMALIDIR — koordinatör tarafı
  yazılı değildi.** *(2 Eylül 2026 — bir günde ÜÇ vaka, üçü de aynı
  koordinatörün sevklerinde, üçünü de aynı işçi oturum çürüttü)*
  ⇒ Üçünde de öncül **maddenin kendi notundan** geldi ve koordinatör onu
  **ölçmeden** sevke taşıdı. Ve bir sevkte yazılı bir öncül, işçi için
  **veri gibi** okunur — çünkü koordinatörden gelmiştir.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-sevk-tasidigi-onculu-de-dogrulamalidir-koordinator.md`  · 2 Eylül 2026 — bir günde ÜÇ vaka, üçü de aynı koordinatörün sevklerinde, üçünü de aynı işç

- 🔴 **DOĞRU BİLGİ, ÖLÜ ADRES — `kaynak:` alanının yarım çalışan hâli.**
  *(2 Eylül 2026)*
  ⇒ Kaynak **yazılmış** ama **izlenemez.** Bilgi doğru, adres ölü. Bu,
  *"kaynağı yazılmayan"*dan farklı ve daha sinsi bir sınıf: alan DOLU
  olduğu için hiçbir denetim ötmüyor, ve okuyan *"kaynaklı"* sanıyor.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/dogru-bilgi-olu-adres-kaynak-alaninin-yarim.md`  · 2 Eylül 2026

- 🔴🔴 **BİR ARAMA, ARADIĞI ŞEYİN KAÇ AYRI BİÇİMDE YAZILABİLECEĞİNİ
  BİLMELİ — BEŞ EKSEN ÖLÇÜLDÜ, BEŞİ DE GERÇEK KAYIP ÜRETTİ.**
  *(2 Eylül 2026 akşamı — 553 slug taramasının damga turunda)*
  ⇒ ***Ortak kök tek: alet, aradığı şeyin NEREDE OLMAYACAĞINI bilmiyor.***
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-arama-aradigi-seyin-kac-ayri-bicimde.md`  · 2 Eylül 2026 akşamı — 553 slug taramasının damga turunda

- 🔴 **BİR DÜZELTME SLUGA DEĞİL KAYDA BAKAR — aynı slug iki kayıtta
  farklı yere gidebilir.** *(2 Eylül 2026)*
  Global `sed s/ferhad-pasa-antlasmasi/gence/` 1590 **antlaşmasını** `gence`
  maddesine dayandırırdı ve o gövde 1590'ı vermiyor.
  ⇒ **Uygulayıcı `t:` + eski değer çiftiyle eşler, ve eşleşme 1 değilse
  DURUR — hiçbir dosya yazılmaz.** Aynı gün ikinci vaka: `lehistan` veride
  **50 dönemde** geçiyor, yalnız **4'ü** hayaletti; kör bir değiştirme
  **46 meşru dönemi** bozardı.
  📌 Ve eşleştirmenin kendisi de dar kurulabilir: ilk uygulayıcı `ad:` ile
  dönemi **aynı satırda** aradı, oysa kayıt çok satırlıydı ⇒ 0 eşleşme.
  Nöbetçi durdurdu. ⇒ *Dosya bazlı ve **beklenen sayı önceden yazılı**
  bir eşleştirme, satır bazlıdan güvenlidir.*
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-duzeltme-sluga-degil-kayda-bakar-ayni.md`  · 2 Eylül 2026

- 🔴 **3 KM BİR YASAK DEĞİL, BİR ŞÜPHE EŞİĞİDİR — ve şartı ZAMAN
  ÇİZGİLERİNİN FARKLI OLMASIDIR.** *(2 Eylül 2026)*
  ⇒ Atlas **sahiplik** boyuyor, **sınır geometrisi** boyamıyor. Voronoi
  noktası bu farkı ifade edemez, **çünkü ifade edilecek fark yok.**
  ⇒ Kalem nokta işi değil **geometri** işi.
  📌 Ve bir ayrım kalemi doğru kapattı: ***"Yunanistan bıraktı" demek
  "Yunanistan'ın elindeydi" demek DEĞİLDİR.*** Tazminat hukukî
  **gerekçe**, tasarruf başka şey — ve atlas tasarrufu boyar.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/3-km-bir-yasak-degil-bir-suphe.md`  · 2 Eylül 2026

- 🔴 **BİR BEYAN, ARACIN ALAN KÜMESİNDE YOKSA SESSİZCE DÜŞER — VE
  YAMANIN YARISI İNER, YARISI DÜŞER.** *(2 Eylül 2026)*
  📌 `§11`in *"bir ders veriye SERBEST METİN olarak inerse inmiş sayılmaz"*
  dersinin **bir kademe ötesi**: burada ders serbest metin **değildi**,
  doğru biçimde **yapılandırılmış bir alana** yazılmıştı — ve onu düşüren
  şey kaydın kendisi değil **aracın alan kümesi** oldu. `grep` beyanı
  bulur (yamada duruyor), `denetle.py` bulamaz (veride yok).
  ⇒ Sınav yine tek soru: ***bu bilgiyi bir `if` ile sorabiliyor muyum?***
  Ve yeni bir soru daha: ***onu yazan araç, o alanı yazabiliyor mu?***
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-beyan-aracin-alan-kumesinde-yoksa-sessizce.md`  · 2 Eylül 2026

- 🔴 **BİR DÖNGÜDE BAŞARI VARLIKLA, HATA YOKLUKLA BİLDİRİLİRSE HATA
  GÖRÜNMEZ — VE ÇIKIŞ KODU SON YİNELEMENİNKİDİR.** *(2 Eylül 2026)*
  🟢 Yakalayan bir denetim değil, **başka bir işçi oturum** oldu:
  *"bölüm ⑩'un adresine giden mesaj: HÂLÂ 0"* diye **saydı**.
  ⇒ Toplu bir işlemde **beklenen sayı önceden yazılır ve sonunda
  DOĞRULANIR**; `&&`li bir echo teslim kanıtı değildir.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-dongude-basari-varlikla-hata-yoklukla-bildirilirse.md`  · 2 Eylül 2026

- 🔴 **BİR HÜKÜM DOSYASI BİR ÖLÇÜM DEĞİL, ÖLÇÜMÜN FOTOĞRAFIDIR — ve
  fotoğraf eskir.** *(2 Eylül 2026 — bir günde ÜÇ kalem)*
  ⇒ Üçünde de kusur ölçümde değil **yaşta**. Ve `§11`in *"işe dönüştürmeden
  önce `git log`"* kuralı üç kez birden ihlal edildi — **on saniyelik iş.**
  📌 En keskin ders: ***kendi ödediğin borcu, kaydını okumadan yeniden iş
  sanabilirsin.*** Kayıt iki yöne de gerekiyor — açık borç için de,
  **ödenmiş** borç için de.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-hukum-dosyasi-bir-olcum-degil-olcumun.md`  · 2 Eylül 2026 — bir günde ÜÇ kalem

- 🔴🔴 **DOĞRU KAPIYA GİDİP YANLIŞ YERDEN DİNLEMEK — yokluğu TEMİZLİK
  sanmak.** *(3 Eylül 2026 · bir saat içinde ÜÇ ALETTE, üçü de aynı
  koordinatörün, ve üçüncüsü DERSİN KENDİSİ YAZILIRKEN)*
  ⇒ Üçü de tek cümle: ***bir şey bulamadım ⇒ sorun yok.*** Ve hiçbiri
  hata vermedi; üçü de **temiz bir sayı** üretti.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/dogru-kapiya-gidip-yanlis-yerden-dinlemek-yoklugu.md`  · 3 Eylül 2026 · bir saat içinde ÜÇ ALETTE, üçü de aynı koordinatörün, ve üçüncüsü DERSİN KE

- 🟢🟢 **BİR DENETİM ADAYI ÖLÇÜLDÜ VE "BUNU YAZMAYIN" DİYE RAPORLANDI — ve
  ölçen, kovayı AÇAN oturumdu.** *(5 Eylül 2026 · `KÜRE GÖRÜNÜM`)*
  📌 Bu proje *"denetim var ≠ o soruyu soruyor"* dersini çok yazdı ve
  hepsi **var olan** bir denetimin körlüğüydü. Bu ilk kez **ÖNLEYİCİ**
  yönde: bir denetim **doğmadan** ölçülüp reddedildi.
  ⇒ ***Bir ölçütün kusur mu tasarım mı ölçtüğü, denetime dönüştürülmeden
  ÖNCE sorulur*** — sonra sorulursa cevabı yanlış alarmların gürültüsünden
  okunur, ve o gürültü genellikle ölçütü değil **denetimi** öldürür.
  🟢 Ve türetilecek biçim de yazıldı: ölçüt *"`t:` ≠ `son`"* değil,
  ***"`t:` ≠ `son` VE `ozet` farkı AÇIKLAMIYOR"*** olmalı — ve ikincisi
  otomatik sınanamaz.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-denetim-adayi-olculdu-ve-bunu-yazmayin.md`  · 5 Eylül 2026 · `KÜRE GÖRÜNÜM`

- 🔴 **KIRPILMIŞ BİR ÇIKTI DA BİR ÖLÇÜM DEĞİLDİR.** *(aynı tur)*
  İki betik `brezilya`nın `son` sayısı için farklı şey söylüyor göründü.
  İlk hipotez **mükerrer künye `id`si**ydi — `{d["id"]: d}` sözlüğü bir
  mükerreri **sessizce ezer** ve bu ölçülebilir bir kusur olurdu. Ölçüldü:
  **591 kayıt · 591 benzersiz id · mükerrer 0** ⇒ hipotez ÇÜRÜDÜ. Gerçek
  sebep kendi `head -70` kesmesiydi; `brezilya` bölümü çıktının sonundaydı
  ve ekrana **hiç gelmedi.**
  📌 *"Aleti sorgulamak doğruydu, ama bozuk olan alet değil GÖRÜNTÜLEME
  idi."* ⇒ `§11`in *"aletin gösterdiği ≠ dosyada yazan"* ailesinin
  **kırpma** yüzü, ve *"`0`, 'yok' ile 'bakmadım' arasında ayrım yapmaz"*
  kuralının **çıktı** tarafı: `tail`i görülmemiş bir çıktı, ölçülmemiş bir
  kuyruktur.


- 🔴🔴 **İKİ KAYNAK ÇELİŞİYOR DEMEDEN ÖNCE, İKİSİNİN AYNI YERDEN
  BAHSETTİĞİNİ DOĞRULA — ve "X'in idaresi SIRASINDA" bir ZAMAN ifadesidir,
  bir EGEMENLİK iddiası DEĞİL.** *(5 Eylül 2026 · Barka 1281-1551)*
  📌 Bu, `§4`ün *"önce ayrıştır, sonra çelişki ilan et"* önkoşulunun
  **coğrafya ve dilbilgisi** yüzü. Ve `§11`in *"bir tarihin hassasiyeti,
  yazıldığı alandan değil AÇIKLAYAN alandan okunur"* dersinin kardeşi:
  ***bir egemenlik iddiası, iki adın YAN YANA GEÇMESİNDEN değil cümlenin
  YÜKLEMİNDEN okunur.***
  ⚠️ Ve ölçüt tek yönlü değil: ② doğruysa `derne` Hafsî iddiası taşımıyor
  demektir, ama ① doğruysa `trablusgarp` **taşıyor** — TDV Trablus şehri
  için zinciri gün gün veriyor (`Ammaroğulları 727/1327 → 803/1401 →
  Hafsîler → 1510`). ⇒ Aynı ölçüm bir bölgeyi Hafsî'den ÇIKARIRKEN
  ötekini Hafsî'ye BAĞLAYABİLİR; `§3.5.1`in *"iki uç da ölçülür"* kuralı.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/iki-kaynak-celisiyor-demeden-once-ikisinin-ayni.md`  · 5 Eylül 2026 · Barka 1281-1551

- 🟢 **ÜÇ BAĞIMSIZ ÖLÇÜT AYNI KÜMEYE YAKINSARSA, BU KÜMENİN *TAM* OLDUĞUNUN
  KANITIDIR — *DOĞRU* OLDUĞUNUN DEĞİL.** *(5 Eylül 2026 · `KÜRE GÖRÜNÜM`)*
  📌 Bu proje *"doğrulama, aynı soruya iki yoldan gitmektir"* der ve
  *"farklı sorulara aynı cevabı almak doğrulama değildir"* diye uyarır.
  Buradaki üçüncü hâl ikisinden de ayrı: **üç FARKLI soru, aynı KÜMEYE**
  varıyor. Bu, her kaydın doğru sınıflandığını göstermez — ama
  ***listenin dışında altıncı bir kayıt kalmadığını*** gösterir.
  ⇒ Yakınsama bir **kapsam** kanıtıdır, bir **içerik** kanıtı değil.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/uc-bagimsiz-olcut-ayni-kumeye-yakinsarsa-bu.md`  · 5 Eylül 2026 · `KÜRE GÖRÜNÜM`

- 🟢 **AYNI DAMGA, FARKLI DAYANAK GÜCÜ — damga GÖRÜNÜR kılar, ama NE KADAR
  SAĞLAM olduğunu KAYDETMEZ.** *(5 Eylül 2026 · `NEHİR SÜRTÜNME`)*
  ⇒ Ölçen oturum ikisini **aynı damgayla geçiştirmedi**, farkı yazdı.
  📌 Bu, `§11`in *"damga bir iddiayı ne meşrulaştırır ne düzeltir — yalnız
  GÖRÜNÜR kılar"* dersinin eksik ayağı: ***bir damga, altındaki iki kaydın
  eşit güvenilir olduğunu ima eder ve bu ima çoğu zaman yanlıştır.***
  Damganın yanına **dayanağın gücü** de yazılmazsa, bir sonraki oturum
  zayıf olanı güçlü olanla aynı kefeye koyar — ve düzeltmesi gerekeni
  düzeltmez.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/ayni-damga-farkli-dayanak-gucu-damga-gorunur.md`  · 5 Eylül 2026 · `NEHİR SÜRTÜNME`

- 🔴 **VARLIK ÇAPASI, TASARRUF ÇAPASI DEĞİLDİR — ve atlas tasarruf boyar.**
  *(aynı tur · `Piran` reddedildi)*
  ⇒ Nokta yazılsaydı `s:` zinciri **tamamen konvansiyondan** gelirdi, yani
  kaynaksız bir tasarruf iddiası üretirdi. **Yazılmadı.**
  📌 `§11`in *"ATLAS SEFERİ DEĞİL TASARRUFU BOYAR"* dersinin **kaynak**
  yüzü: orada bir devletin *uğraması* tasarruf sanılmıştı, burada bir yerin
  *anılması*. İkisinde de eksik olan aynı şey — **yüklem.**
  🟢 Ve ret `denetim/`e kaydedildi (*"arandı, kaynak zayıf, YAZILMADI"*):
  bir sonraki oturum üçüncü kez aramasın diye.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/varlik-capasi-tasarruf-capasi-degildir-ve-atlas.md`  · künye yok

- 🔴🔴 **BİR TUTARSIZLIK BİR TERCİH DEĞİL, BİR EKSİĞİN SONUCU OLABİLİR — ve
  o zaman "hangisi doğru" SORUSU YANLIŞTIR.** *(5 Eylül 2026 · `KÜRE GÖRÜNÜM`)*
  🔴 **Ve ①'in niçin yalnız Osmanlı'ya açık olduğu ölçüldü:** `v:`
  dönemlerinin **kimlik alanı yok** (423 dönem: yalnız `f`/`t`/`k`/`enklav`).
  ⇒ Sömürge himayesi için ① **yapısal olarak mevcut değil**; herkes ② ya da
  ③'ü seçmek **zorunda** kalmış.
  > 🟢🟢 **BU İKİ SATIR ERTESİ GÜN BAYATLADI — ders duruyor, VAKA
  > DAMGALANDI (7 Eylül 2026 · `KIMLIK-KID-0907` ölçtü).**
  > ```
  > db23f90  2026-09-06 13:12  "SECENEK 🅑 INDI — v: donemlerine kid: + statu:"
  > 5e3cc53  2026-09-05 23:58  (5 Eylül'ün SON commit'i) → "kid:" sayısı 0
  > git log -S"kid:" -- data/   İLK sonuç: db23f90
  > canlı: v: f 429 · t 429 · k 373 · statu 421 · kid 291
  > ```
  > ⇒ **Ölçüm YANLIŞ DEĞİLDİ — BİR GÜN SONRA BAYATLADI.** O gün `v:`
  > gerçekten kimlik taşımıyordu; alan ertesi gün doğdu.
  >
  > 🔴 **Ve bayat hâliyle okunması ölçülebilir bir zarar veriyordu:**
  > *"kimlik alanı yok"* cümlesi bugün **çözülmüş bir eksiği açık borç**
  > gibi gösterir, ve ona dayanan bir oturum **var olan bir alanı yeniden
  > tasarlamaya** kalkar — `§11`in *"bir alan tasarlamadan önce zaten var
  > olup olmadığını ÖLÇ"* dersinin (`sinif:` ↔ `kd:` vakası) birebir
  > tekrarı. Bu satır bugün **üç ayrı sevke** taşındı ve taşıyan
  > koordinatördü.
  >
  > ⚠️ **VE TERS YÖNDE BAYAT KAYIT ÜRETİLMEDİ:** `kid`ın var olması
  > *"Osmanlı dışı himaye artık ifade edilebiliyor"* demek **DEĞİLDİR.**
  > ```
  > 429 = 291 (k VE kid) + 82 (yalnız k) + 0 (yalnız kid) + 56 (ADSIZ)
  > kalan 138 · `k`si olan 82        ← ilk yazımda "88/32" idi, ÇÜRÜDÜ
  > bağımsız teyit: v: k = 373 · 373 − 291 = 82
  > ```
  > ⇒ ***Alan DOĞDU; KAPSAMASI tamam değil.*** İkisi ayrı cümledir, ve
  > birini ötekinin yerine yazmak yeni bir bayat kayıt üretir.
  >
  > 🔴🔴 **VE ÜÇÜNCÜ CÜMLE GEREKİYORMUŞ — ALAN VAR, DOLU, VE HİÇBİR ALET
  > ONU KİMLİK OLARAK KULLANMIYOR.** *(7 Eylül · `GECIS-SURE-0907`)*
  > ```
  > kid DOLU        291 dönem · 13 kimlik · 13/13 GEÇERLİ
  > uret_petek.py:4826   yalnız AD YEDEĞİ — `k or kid`
  > js/app.js            HİÇ okumuyor
  > denetle.py           HİÇ okumuyor
  > ```
  > ⇒ Haritaya ve denetime göre kabiliyet **hâlâ yok.** `§11`in *"bir
  > ders veriye SERBEST METİN olarak inerse inmiş sayılmaz"* dersinin
  > **alan** yüzü: burada alan yapılandırılmış, dolu ve geçerli — ama
  > **onu okuyan yok**, ve `grep` *"var"* der, motor *"yok"* der.
  > 📌 Sınav aynı tek soru: ***bu bilgiyi bir `if` ile sorabiliyor
  > muyum?*** Bugün bir `if` onu **yalnız ad yedeği olarak** soruyor.
  >
  > ⚪ **VE BİR KALEM AÇIK, adıyla:** `kid`ın kendi tanımı
  > (`girdi.py:932`) künye penceresinin dönemi **kapsamasını** şart
  > koşuyor ve **16 dönem ihlal ediyor** (Bükreş/Yaş `kid=eflak,bogdan`:
  > dönem `..1878-07-13`, künye `..1859-01-24`). İhlallerin **CİNSİ**
  > — künye mi dar, veri mi geniş — **ÖLÇÜLMEDİ.** Ve o 16 kayıt,
  > Boğdan'ın `1859-01-24` tutarsızlığıyla **aynı kayıtlar.**
  >
  > 📌 `§3.5.1`in Yukarı Macaristan emsali: *"bir vakayı silmek dersi de
  > siler; damgalamak dersi korur."* Ders (`②` ile `③` arasındaki
  > tutarsızlık bir TERCİH değil bir EKSİĞİN sonucudur) **hâlâ doğru** —
  > eksik kısmen kapandı, tamamen değil.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-tutarsizlik-bir-tercih-degil-bir-eksigin.md`  · 5 Eylül 2026 · `KÜRE GÖRÜNÜM`

- 🔴 **BİR YER ADI GÖVDEDE GEÇEBİLİR VE GÖVDE ONU KAPSAMIYOR OLABİLİR —
  SINIR olarak geçmiştir.** *(aynı gün · `KRONOLOJİ BOŞ KÜNYE`, ve kendi
  aletini yakaladı)*
  TDV `berka` gövdesinde **Sirte** geçiyor — ama içerik olarak değil:
  *«Batısında Büyük **SİRTE** körfezi bulunur.»* Madde onu kapsadığını
  değil, **orada BİTTİĞİNİ** söylüyor.
  ⇒ `§4⑧`in (*"rakam gövdede geçiyor ≠ gövde o değeri destekliyor"*)
  **yer adı** yüzü — ve ölçen oturum *"az kalsın Sirte'yi Barka'ya
  sayacaktım"* diye kendi yakaladı.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-yer-adi-govdede-gecebilir-ve-govde.md`  · künye yok

- 🔴 **YETERLİ AMA GEREKLİ OLMAYAN BİR ÖLÇÜT, MALİYETİ FAZLA SAYAR — ve
  fazla saymak, az saymak kadar bozar.** *(5 Eylül 2026 · koordinatörün
  ölçütünü `NEHİR SÜRTÜNME` düzeltti)*
  ⇒ Verilen ölçüt **yeterliydi ama gerekli değildi**: *eş zamanlı ama
  UZAK* olan çifti (`evfat` — Anadolu kümesiyle eş zamanlı, **~3000 km**)
  yeni renk gerektiriyor sayardı. Ölçen oturum ikisini birden ölçtü ve
  yük **8 → 6**'ya indi.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/yeterli-ama-gerekli-olmayan-bir-olcut-maliyeti.md`  · 5 Eylül 2026 · koordinatörün ölçütünü `NEHİR SÜRTÜNME` düzeltti

- 🔴 **BİR İSYANIN VARLIĞI TASARRUFU DEĞİŞTİRMEZ — SONUCU DEĞİŞTİRİR.**
  *(5 Eylül 2026 · `evfat` · `NEHİR SÜRTÜNME`)*
  ⇒ Üç savaşın üçünde de Evfat **yenildi**; Habeş hâkimiyeti fiilen hiç
  kırılmadı. ***Bir isyan, BAŞARILI OLMADIKÇA tasarrufu değiştirmez*** —
  ve atlas tasarruf boyar. `habesistan` yazmak o 130 yıl boyunca
  **doğrudur**; eksik olan yalnız Evfat'ın kendi adının görünmemesi.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-isyanin-varligi-tasarrufu-degistirmez-sonucu-degisti.md`  · 5 Eylül 2026 · `evfat` · `NEHİR SÜRTÜNME`

- 🔴 **BİR ÖLÇÜT, KARŞILAŞTIRILAN İKİ SEÇENEĞİ AYIRT ETMİYORSA, CEVABI
  "EVET" OLSA BİLE SORU YANLIŞ SORULMUŞTUR.** *(5 Eylül 2026 · nehir
  geçiş cezası · `NEHİR SÜRTÜNME` kendi cevabını nitelendirdi)*
  ⇒ Sorulan ölçüt (**bağımsızlık**) mevcut durumu da yeni öneriyi de
  geçiyordu; yani **hiçbir şeyi seçmiyordu.** Gerçek kazanç başka bir
  eksende (**ayırt etme**) duruyordu ve sorulmamıştı.
  📌 Bu, aynı gün ölçülen *"yanlış ikilem"* dersinin kardeşi ama ayrı:
  orada soru **iki yanlış şık** sunuyordu, burada soru **doğru bir ölçüt**
  kullanıyor ama o ölçüt **ayırt etmiyor.** ⇒ Bir ölçüt seçmeden önce
  sorulacak: ***bu ölçüt, karşılaştırdığım seçeneklere FARKLI cevap
  veriyor mu?*** Vermiyorsa ölçüt değil bir **ön koşuldur**.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-olcut-karsilastirilan-iki-secenegi-ayirt-etmiyorsa.md`  · 5 Eylül 2026 · nehir geçiş cezası · `NEHİR SÜRTÜNME` kendi cevabını nitelendirdi

- 🔴🔴 **EŞANLAM BORCUNUN ÜÇÜNCÜ EKSENİ: KAYNAK VERİSİNİN KENDİSİ BOZUK
  OLABİLİR — ve normalleştirici onu ÇÖZEMEZ.** *(5 Eylül 2026 ·
  `NEHİR SÜRTÜNME`)*
  ⚠️ **Mojibake ya da U+FFFD DEĞİL** — dosyada şüpheli kontrol karakteri
  sayısı **0**. `ı` bir kodlama dönüşümünde kaybolmuş ve yerine `?`
  konmuş; hata bizim okumamızda değil **kaynağın kendisinde.**
  📌 Ve veri zaten Türkçe harf taşımıyor: 1455 parçanın tamamında düzgün
  Türkçe harfli nehir adı **yalnız 2** (`Künes` · `Zayü`).
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/esanlam-borcunun-ucuncu-ekseni-kaynak-verisinin-kendisi.md`  · 5 Eylül 2026 · `NEHİR SÜRTÜNME`

- 🔴 **İDARÎ DEVİR, SAHİPLİK DEĞİŞİMİ DEĞİLDİR — ve atlas sahiplik çizer.**
  *(5 Eylül 2026 · Barka doğu 8 · `KRONOLOJİ BOŞ KÜNYE`)*

  TDV `bingazi` iki tarih veriyor: *«1551 … Berka bölgesinin Osmanlı
  hâkimiyetine girmesinden sonra Bingazi de **kesin olarak** Osmanlı
  yönetimine katıldı **(1578)**»*. İkisi de gerçek — ama ikisi de
  **Osmanlı İÇİ idarî devir**: Mısır eyaletinden Trablusgarp eyaletine.
  ⇒ **İlk hâkimiyet değil.** Atlas eyalet sınırı çizmiyor, **sahiplik**
  çiziyor; sahip 1517'den beri aynı.
  📌 `§11`in tasarruf ailesinin dördüncü yüzü: *sefer* · *anılma* ·
  *isyan* · ve şimdi **idarî devir**. Dördü de aynı hatayı farklı kapıdan
  yapıyor — bir olayı tasarruf değişimi sanmak.
  🟢 Ve seçim gizlenmedi: 1578 TDV'de duruyor, yama onu kullanmıyor, ve
  **gerekçesi yamanın başlığında.**


- 🟢 **KOMŞUSUNUN KULLANDIĞI GÜNÜ KULLANMAK, KENDİ GÜNÜNÜ SEÇMEKTEN
  DAYANAKLIDIR.** *(aynı tur)*
  ⇒ Kaynak iki günü de destekliyorsa, **veriyle tutarlı olanı seçmek**
  keyfî değildir: `§3`ün *"sessiz toprak değişimi yok"* kuralı zaten aynı
  günü paylaşan komşuların birlikte kırılmasını istiyor.
  🔴 Ve gün seçimi bir **delik** kapattı: koordinatör *"04-13 alırsan
  1551'e kadar 34 yıllık boşluk açılır"* diye uyarmıştı; çare boşluğa
  kimlik uydurmak değil, **`d:` başlangıcını da taşımak** oldu.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/komsusunun-kullandigi-gunu-kullanmak-kendi-gununu-secmek.md`  · künye yok

- 🔴 **BİR ÇARENİN MALİYETİ, BEKLENEN EKSENDE OLMAYABİLİR — ve yanlış
  eksenden bakan tahmin onu yanlış fiyatlar.** *(aynı gün · `KÜRE GÖRÜNÜM`)*
  ⇒ `t:`yi uzatmak **bir tarih yazmaktır**, ve `§4` tarih uydurulmaz —
  14 künyenin `kaynak:` alanı *"bulunamadı"* diyor. ***Çare pahalı değil,
  ama pahalı olduğu yer beklenen yerde değil:*** kimlik ve renk hazır, iş
  **tarih ve dayanak** işi.
  🟢 Ve iki yol ayrıldı: (a) polity'nin gerçek sonunu yaz → 14 kaynak
  sorgusu · (b) atlas ufkuna uzat → tarih bir **pencere işareti** olur.
  ⚠️ Ama **(b) tarihi ucuzlatır, İDDİAYI ucuzlatmaz**: *"bu polity 1923'te
  hâlâ ayrı bir gövdeydi"* yine tarihsel bir iddiadır.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-carenin-maliyeti-beklenen-eksende-olmayabilir-ve.md`  · künye yok

- 🟢 **BİR KUSURUN YAPISAL SEBEBİNİ BULMAK, ONUN YAYGINLIĞINI DA SÖYLER.**
  *(5 Eylül 2026 · `Kiz?lirmak` · `NEHİR SÜRTÜNME`)*
  ⇒ Göllerin Türkçe ad **kanalı var**, nehirlerin **yok**: nehir adları
  tek bir transliterasyon kanalından geçiyor ve `ı` orada kayboluyor.
  ***Kusur yalnız alanın eksik olduğu katmanda doğabilir*** — ve
  göllerdeki `0` bunu doğruluyor.
  📌 Bir sayım *"iki vaka var"* der; yapısal sebep ***"başka nerede
  olabileceğini"*** söyler. İkincisi olmadan sayım bir tahmindir: bir
  sonraki veri sürümünde `?` sayısı değişebilir, ama **eksik alan**
  değişmedikçe kusur sınıfı durur.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-kusurun-yapisal-sebebini-bulmak-onun-yayginligini.md`  · 5 Eylül 2026 · `Kiz?lirmak` · `NEHİR SÜRTÜNME`

- 🟢 **ELENEN BİR ADAYIN GEREKÇESİ, SONRADAN BULUNAN VERİYLE ÖLÇÜLEBİLİR
  HÂLE GELEBİLİR.** *(aynı tur)*
  ⇒ Geçit verisinin var olduğu **tek** yer, atlasın **en az** çalıştığı
  coğrafya. Eleme gerekçesi bir akıl yürütmeydi; artık **ölçülmüş.**
  📌 Ve bu, bir *"ölçemedim"* damgasının değerini gösteriyor: aday
  elenirken gerekçe **yazıldığı için** sonradan sınanabildi. Gerekçesiz
  bir eleme, veri bulununca yeniden açılırdı.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/elenen-bir-adayin-gerekcesi-sonradan-bulunan-veriyle.md`  · künye yok

- 🟢🟢 **YAZILI OLMAYAN BİR KONVANSİYON, ANCAK ONA UYMAYAN BİR KAYIT
  ÇAKIŞINCA GÖRÜNÜR OLUR — ve o zaman "kusur mu" sorusu YANLIŞTIR.**
  *(5 Eylül 2026 · `Kasr-ı Şîrîn` çakışması · koordinatör ölçtü)*
  Ve desen tek: **Osmanlı-Safevî cephesi.** `s:safevi` hânedanın TÜM
  ömrü olarak tek blok yazılmış (`1501-07-01 → 1736-03-08`), Osmanlı
  işgalleri onun **üstüne** `d:` ile oyulmuş — Tebriz · Revan · Nahçıvan ·
  Gence · Şamahı · Hemedan · Kirmanşah · Merâga…
  🟢 **Ve `Hemedan` ile `Kirmanşah` zaten TAM O PENCEREYİ taşıyor**
  (`d:1590-03-21→1603-10-21`) — yani yama, komşularıyla **tutarlı** hâle
  getiriyordu.
  ⇒ ***Çakışma bir kusur değil, YAZILI OLMAYAN BİR KONVANSİYON.***
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/yazili-olmayan-bir-konvansiyon-ancak-ona-uymayan.md`  · 5 Eylül 2026 · `Kasr-ı Şîrîn` çakışması · koordinatör ölçtü

- 🔴🔴 **VERİ MODELİNİN İFADE EDEMEDİĞİ BİR İLİŞKİYİ, EDEBİLDİĞİ BİR
  İLİŞKİYE ÇEVİRMEK — YAKLAŞIKLAMA DEĞİL, BAŞKA BİR İDDİADIR.**
  *(5 Eylül 2026 · `Ammaroğulları` · `KRONOLOJİ BOŞ KÜNYE` ölçtü,
  koordinatör hükmetti)*
  ⇒ **Altı kırılmanın dördü TÂBİİYET değişimi**, toprak devri değil. Ve
  atlas tâbiiyeti **yalnız Osmanlı için** ifade edebiliyor (`v:`
  dönemlerinin kimlik alanı yok — aynı gün ölçüldü).
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/veri-modelinin-ifade-edemedigi-bir-iliskiyi-edebildigi.md`  · 5 Eylül 2026 · `Ammaroğulları` · `KRONOLOJİ BOŞ KÜNYE` ölçtü, koordinatör hükmetti

- 🟢 **BİR SLUG'I TAHMİN ETME — KAYNAĞIN KENDİ BAĞLANTISINI OKU.**
  *(aynı tur · `§4②` ailesinin BEŞİNCİ vakası)*
  ⇒ `ordu--sehir` · `saray--sehir` · `cin--ulke` · `hurmuz--iran`
  ailesinin beşincisi — ve bu sefer sonek bir **şehir/ülke** ayrımı değil,
  **aynı adı taşıyan iki hânedan** ayrımı.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-slug-i-tahmin-etme-kaynagin-kendi.md`  · künye yok

- 🟢🟢 **UZUN BİR KOŞUDA CANLILIĞIN ÜÇÜNCÜ SİNYALİ: CPU DELTASI — ve
  ötekilerin çözemediği belirsizliği O çözer.** *(5 Eylül 2026 · koşu 5b)*
  ⇒ **Tam bir çekirdek, kesintisiz.** Koşu takılmamış, uzun bir hesabın
  içinde. ***CPU deltası tek yönlü bir sinyaldir: artıyorsa süreç
  ÇALIŞIYORDUR, ve bunu hiçbir dosya damgası söyleyemez.***
  🔴 **VE AYNI ÖLÇÜM KOORDİNATÖRÜN SABAHKİ BİR OKUMASINI ÇÜRÜTTÜ —
  YEREL AYRAÇ:** 13:03'te `CPU 36.266s` görülmüş ve *"10 saatlik bir
  koşu için şüphesiz düşük"* diye kaydedilmişti. **Türkçe yerelde `.`
  BİNLİK AYRAÇTIR:** o sayı 36 saniye değil **36.266 saniye ≈ 10 saat**,
  yani duvar saatinin ~%97'si. Koşu baştan beri bir çekirdeği doldurmuş.
  📌 `§11`in *"sayıyı biliyorum ≠ sayının neye göre olduğunu biliyorum"*
  ailesinin **yerel biçim** yüzü — birim doğruydu (saniye), **ayraç**
  yanlış okundu. Ve tıpkı ötekiler gibi **hata vermedi**: temiz bir sayı
  üretti ve yanlış yorumlandı.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/uzun-bir-kosuda-canliligin-ucuncu-sinyali-cpu.md`  · 5 Eylül 2026 · koşu 5b

- 🟢🟢 **"ÇELİŞKİ" SANILAN ŞEYİN BEŞ MEKANİZMASI — bir gecede beşi de
  ölçüldü, ve BEŞİNDE DE ÇELİŞKİ ÇIKMADI.** *(5 Eylül 2026)*
  ⑤'in vakası: TDV *"Eflak Prensliği'ne bırakıldı"* diyor, akademik
  kaynak *"Yerköy Kalesi'nin Rusya'ya teslim edilmesi ve istihkâmlarının
  yıkılması"*. Aynı makalenin iki cümlesi yan yana konunca ayrıştı — bu
  bir **silahsızlandırma** hükmü: egemenlik Eflak'a, **yapı** Rusya'ya ve
  yıkılmak üzere.
  ⇒ Atlasın `s:eflak 1829-09-14 →` kaydı **doğru**, dokunulmadı.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/celiski-sanilan-seyin-bes-mekanizmasi-bir-gecede.md`  · 5 Eylül 2026

- 🔴🔴 **"ADIYLA ANIYOR" İLE "TARİHLİYOR" AYNI ŞEY DEĞİLDİR — ve gövdedeki
  TEK tarih BAŞKA BİR POLITY'ye ait olabilir.** *(5 Eylül 2026 ·
  `KÜRE GÖRÜNÜM`, ve ölçen taraf kendi hükmünü daralttı)*
  ⇒ 1900'ü Ankole'ye bağlamak **`nube` tuzağının ta kendisi** olurdu
  (`§4⑧`: rakam gövdede geçiyor ≠ gövde o değeri destekliyor) — ama bir
  kademe sinsisi: orada rakam **başka bir olaya**, burada **başka bir
  polity'ye** aitti, ve aranan polity **aynı cümlede adıyla geçiyordu.**
  🟢 Ölçen oturumun cümlesi: *"Tam cümleleri okumasaydım YAZACAKTIM."*
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/adiyla-aniyor-ile-tarihliyor-ayni-sey-degildir.md`  · 5 Eylül 2026 · `KÜRE GÖRÜNÜM`, ve ölçen taraf kendi hükmünü daralttı

- 🔴 **BİR MÜKERRER KURALI HEP MEVCUDU KAYIRIYORSA, MEVCUDUN HATASINI DA
  KORUR.** *(aynı gün · `NEHİR SÜRTÜNME`, 34 şüpheli tasnifi)*
  ⇒ Kural doğru sonucu veriyor (*iki kayıt aynı olayı anlatıyor, biri
  düşsün*) ama **yanlış kaydı tutuyor.** ***Kıdem bir doğruluk ölçütü
  değildir.***
  🟢 Çare kuralı ters çevirmek değil — o da simetrik olarak yanlış olur:
  düşen kaydın **daha doğru** olduğu vakalar **ayrı bir kaleme** yazılır
  ve mevcudun `tur` alanı gözden geçirilir. Ölçen oturumun yaptığı budur.
  📌 `§11`in *"bir hüküm, veriye inmedikçe hüküm değil bir metindir"*
  dersinin tersi: burada hüküm **veriye iniyor** ve indiği için **daha
  iyi olanı siliyor.**
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-mukerrer-kurali-hep-mevcudu-kayiriyorsa-mevcudun.md`  · künye yok

- 🔴🔴 **BİR GLOB BİR AD SÖZLEŞMESİDİR: DOSYANIN ADI ONUN CİNSİNİ İLÂN
  EDER — ve yanlış ad, dosyayı YANLIŞ ALETE teslim eder.**
  *(5 Eylül 2026 · `KÜRE GÖRÜNÜM`, ve koordinatörün talimatını reddederek)*
  ⇒ `bolge:` eklenseydi gerekçe *"şema eksik"* → **"KİMLİK ÇAKIŞMASI"**
  olurdu, ve bu **daha kötü**: okuyan *"aynı künye iki kez yazılmış"*
  sanırdı. ***Talimat kusuru düzeltmiyor, teşhisi bozuyordu.***
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-glob-bir-ad-sozlesmesidir-dosyanin-adi.md`  · 5 Eylül 2026 · `KÜRE GÖRÜNÜM`, ve koordinatörün talimatını reddederek

- 🔴🔴 **KAYNAK BULUNAMIYORSA, ÖNCE ARANAN ŞEYİN DOĞRU OLDUĞUNU DOĞRULA —
  bir devir kaydı VARLIĞI ile GÜNÜ yanlış eşleştirmiş olabilir.**
  *(5 Eylül 2026 · "Herseknovi 1878-09-18")*
  ⇒ Kuyruk bir **günü yanlış yerleşime** bağlamıştı — **dört yerde**, ve
  birinde o yanlış atıf üzerine **akıl yürütülmüştü** (*"Herseknovi,
  Bosna'dan 51 gün sonra…"*). Yanlış atıf bir arama turu yaktı.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/kaynak-bulunamiyorsa-once-aranan-seyin-dogru-oldugunu.md`  · 5 Eylül 2026 · "Herseknovi 1878-09-18"

- 🔴 **"MÜKERRER" GEREKÇESİ İKİ SINIF SAKLAYABİLİR — VE BİRİ SESSİZ BİR
  SEÇİMDİR, ÖLÇÜTÜ DOSYA OKUMA SIRASI.** *(aynı gün · `NEHİR SÜRTÜNME`)*
  Kronoloji uygulayıcısı 16 maddeyi tek gerekçeyle reddetti:
  `MUKERRER (aynı t + tur)`. Altında iki apayrı sınıf çıktı:
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/mukerrer-gerekcesi-iki-sinif-saklayabilir-ve-biri.md`  · künye yok

- 🔴 **BİR HÜKMÜ VERMEK İLE UYGULAMAK AYRI YETKİLERDİR — ve `§7`
  UYGULAYANI belirler.** *(aynı gün · koordinatörün ihlali)*

  Koordinatör *"`pueblo` mükerrerini SEN düzelt"* diye emir yazdı. Ölçen
  oturum dosyaları taradı: `KRONOLOJI-BOSKUNYE` ve `KRONOLOJI-KAMERIKA`
  **onun dosyaları değildi** — ve `§7`ye dayanıp **uygulamadı, sordu.**
  ⇒ Hüküm hazırdı; eksik olan **yetkiydi.** Üç düzeltmenin (pueblo ·
  choctaw · hollanda-dogu-hint) uygulaması merge'de **Oturum 0'a** ait —
  kuyruğun ⑥. adımı zaten *"TEK ELDEN"* diyor.
  📌 Bir hükmü isteyen taraf, uygulamayı da aynı yere vermek zorunda
  değildir; ve **karıştırırsa `§7`yi kendi eliyle deldirir.**


- 🔴🔴 **BİR ARTEFAKT HİÇBİR ALETİN GLOB'UNA GİRMİYORSA, YAPILMAMIŞ
  OLMAKLA AYNI SONUCU VERİR — ve hiçbir denetim ötmez.**
  *(5 Eylül 2026 · `KÜRE GÖRÜNÜM` taradı, koordinatör bağımsız doğruladı)*
  Koordinatör bağımsız ölçtü: `VARSAYILAN = "denetim/YAMA-KUNYE-*0905*.json"`
  (satır 44) ve dosyanın ilk öğesinin alanları `['ad_onerisi', 'bolge',
  'f', 'id_onerisi', …]`. **İkisi de doğrulandı.**
  ⇒ Biri düzeltilse öteki hâlâ yutardı — ***iki bağımsız kusurun üst
  üste binmesi, tek bir kusurdan farklıdır: her biri ayrı ayrı
  "düzeltildi" sanılabilir.***
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-artefakt-hicbir-aletin-glob-una-girmiyorsa.md`  · 5 Eylül 2026 · `KÜRE GÖRÜNÜM` taradı, koordinatör bağımsız doğruladı

- 🔴🔴 **İZLENEBİLİRLİK, DOĞRULANMIŞLIKTAN ÖNCE GELİR — çünkü izlenebilir
  olan sonradan doğrulanabilir, doğrulanmış ama izlenemeyen bir daha
  sınanamaz.** *(5 Eylül 2026 · `cahokia 1050` · koordinatör hükmü)*
  ⇒ **A kazanır.** `§4`ün kırmızı çizgisi zaten bunu söylüyor:
  *"Kaynağı yazılmayan bilgi, kaynağı olmayan bilgiden ayırt edilemez."*
  Adsız bir doğrulama, doğrulayan oturum kapandığında **hiçbir şeye
  dayanmaz**; adlı ama devralınmış bir kaynak yarın **açılıp
  sınanabilir.**
  ⚠️ Şartı: `DEVRALDIM` damgası birleştirilmiş kayda **taşınır** —
  düşürülürse hüküm bir doğrulama iddiasına dönüşür ve o iddia sahte olur.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/izlenebilirlik-dogrulanmisliktan-once-gelir-cunku-izlene.md`  · 5 Eylül 2026 · `cahokia 1050` · koordinatör hükmü

- 🟢 **BİR DAMGA, BİR HÜKMÜN DAYANAĞI OLABİLİR.** *(aynı tur ·
  `NEHİR SÜRTÜNME`)*

  Dokuz çarpışmanın altısında bir taraf kazandı, ve sebebi hep aynıydı:
  öteki taraf künyenin kendi alanından **devralmış ve doğrulamamıştı** —
  ve bunu `kaynak:` alanında **açıkça damgalamıştı** (`🟡 DEVRALDIM`).
  ⇒ ***O damga olmasaydı iki taraf EŞİT görünürdü ve hüküm
  verilemezdi.*** `§11`in *"ölçmediğini `ölçmedim` diye yaz"* kuralı
  burada bir dürüstlük jesti değil, **bir hükmün dayanağı** oldu.
  ⚠️ Ve ölçen oturum deseni bir kurala çevirmedi: yedinci vakada
  (`natchez`) damgalı taraf **hakemli ve adlı** bir çalışma gösteriyordu
  ve **kazandı.** *"Dosyaya göre değil, VAKAYA göre hüküm"* — altının
  aynı yöne çıkması bir gözlem, bir kural değil.


- 🟢 **BİR DAVRANIŞ KASITLI OLABİLİR VE YİNE DE EKSİK OLABİLİR — kusur
  DAVRANIŞTA değil, olmayan bir ÖLÇÜTTEDİR.** *(aynı tur)*

  Kronoloji uygulayıcısının *"iki yeni yama çarpışırsa ilk okunanı tut"*
  davranışı bir kaza değil: `:259` satırı kabul edilen her maddeyi
  görülmüşler kümesine ekliyor ve yorumu bunu **açıkça** söylüyor
  (*"aynı parti içinde de mükerrer olmasın"*).
  ⇒ Davranış doğru; eksik olan **adayları sıralayan bir ölçüt.** Araç
  *"hangisi"* sorusunu sormuyor çünkü o soru **hiç tanımlanmamış.**
  🟢 Ve aynı okuma bir sayıyı da kesinleştirdi: üç red dalından ikisi
  bu koşuda **0** kez ateşledi ⇒ **16 bir alt sınır değil, TAM SAYI**,
  ve kronolojide künye tarafındaki gibi bir şema kusuru **yok.**


- 🟢 **İÇERİK ÖLÇÜTÜ BİR SAYIM DEĞİL: "SINANABİLİR ÖĞE" SAYMAK YETMEZ,
  ÖĞENİN YENİ BİLGİ TAŞIYIP TAŞIMADIĞI SORULUR.** *(5 Eylül 2026 ·
  `farukiler 1370` · koordinatörün ölçüt merdiveni düzeltildi)*
  ⇒ İkisi de *"sınanabilir öğe"*; biri **bilgi ekliyor**, öteki **var
  olanı başka biçimde söylüyor.** Hüküm ②'de ayrıldı, kıdeme hiç
  inilmedi.
  📌 ***Bir ölçüt "kaç tane" diye soruyorsa, aynı bilginin iki biçimini
  iki ayrı ayrıntı sayar.*** Doğru soru sayı değil **artım**: bu öğe
  kayda ne EKLİYOR?
  🟢 Ve kaybedenin Hicrî karşılığı atılmadı — taşınacaklar kovasına
  girdi. *Ölçütü kaybetmek, bilgiyi kaybetmek değildir.*
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/icerik-olcutu-bir-sayim-degil-sinanabilir-oge.md`  · 5 Eylül 2026 · `farukiler 1370` · koordinatörün ölçüt merdiveni düzeltildi

- 🔴 **BİR CÜMLE İKİ KAYIT ARASINDA TAŞINIRKEN KAYNAĞINI DA TAŞIR — yoksa
  hakemli bir kaydın içine adsız bir iddia girer.** *(aynı tur ·
  `NEHİR SÜRTÜNME`nin şartı)*
  ⇒ Bir kayıt, içindeki her cümlenin dayanağı **aynı** değilse, o farkı
  taşımak zorundadır. ***Metin birleştirmek, dayanakları da
  birleştirmek DEĞİLDİR*** — ve karıştırılırsa en güçlü dayanak, en
  zayıf cümleye ödünç verilmiş olur.
  📌 Aynı gün ölçülen *"izlenebilirlik doğrulanmışlıktan önce gelir"*
  kuralının **birleştirme** yüzü.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-cumle-iki-kayit-arasinda-tasinirken-kaynagini.md`  · künye yok

- 🔴🔴 **BİR REFERANS, ÖLÇTÜĞÜ ŞEYİN YANINDA DURMALI — BEYANIN YANINDA
  DEĞİL.** *(4 Eylül 2026 · `PAKET RENK 0904` ölçtü, koordinatörü çürüttü)*
  `gorunen(k) = lab(bind(hex))` — gövde **altlıkla harmanlanmış** hâliyle
  ölçülüyor; ham hex hiçbir yerde ekranda yok.
  📌 Aynı koordinatörün aynı gün **üçüncü** *"aletin cevabını yanlış yerden
  okuma"* vakası (`konum_denetimi`in dönüşü · tahtanın `kim` alanı · bu).
  Üçü de **hata vermedi**, üçü de **temiz bir sayı** üretti.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-referans-olctugu-seyin-yaninda-durmali-beyanin.md`  · 4 Eylül 2026 · `PAKET RENK 0904` ölçtü, koordinatörü çürüttü

- 🔴 **DAMGA BİR İDDİAYI NE MEŞRULAŞTIRIR NE DÜZELTİR — YALNIZ GÖRÜNÜR
  KILAR.** *(4 Eylül 2026 — iki işçi oturum aynı kuralın iki yüzünü buldu)*
  ⇒ Damgalamak bir **ilk adım**; düzeltmek **ayrı bir iştir** ve damga onu
  yapmış saydırmaz.
  🟢 Ve üçüncü bir yüzü: **türetilen sayı ALINTIYA YAZILMAZ.** Bir yılı iki
  cümleden türetmek meşrudur (*"Mart 1886 … bir yıl sonra"* → 1887), ama o
  sayıyı alıntı metnine eklemek *"kaynağın söylemediği bir sayıya SAHTE BİR
  DAYANAK üretir"* (`KRONOLOJİ AFRİKA GÖVDE`).
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/damga-bir-iddiayi-ne-mesrulastirir-ne-duzeltir.md`  · 4 Eylül 2026 — iki işçi oturum aynı kuralın iki yüzünü buldu

- 🔴 **"BULUNAMADI" · "ÖLÇÜLEMEDİ" · "OKUMADIM" — ÜÇ AYRI DAMGA.**
  *(4 Eylül 2026 · `KRONOLOJİ GÜNEY AMERİKA`)*
  Proje ilk ikisini biliyordu. Üçüncüsü şu cümleyle doğdu:
  > *"«Bulunamadı» aradım-ama-yok demektir; ben **aramadım bile**."*
```
BULUNAMADI   aradım, yok                 → bir SONUÇ, uydurmaktan değerli
ÖLÇÜLEMEDİ   aradım, alet cevap veremedi → kalem AÇIK kalır
OKUMADIM     aramadım bile               → kalem HİÇ AÇILMADI
```
  🔴 Üçüncüsü en kolay kaybolanı: `bulunamadı` yazılsaydı bir sonraki oturum
  o kaydı **bir daha aramazdı**. ***Yanlış damga, hatayı KALICILAŞTIRIR.***


- 🔴 **VE BİR DÜZELTME, YANLIŞ UYGULANIRSA DOĞRU VERİYİ BOZAR — "ÇEK"
  KOVASI ŞART TAŞIR.** *(4 Eylül · `KRONOLOJİ ORTA AMERİKA` uyardı)*
  *"Yanlış hassasiyet"* bulgusunun onarım kovası *"gün hizalama ürünü →
  `YYYY-01-01`e ÇEK"* diye yazılmıştı. İşçi oturum durdurdu:
  > *"«Doğrulayamadım» «yanlış» demek değildir, ve `YYYY-01-01`e çekmek
  > DOĞRU BİR GÜNÜ KAYBETTİREBİLİR."*
  ⇒ **ŞART:** bir gün ancak kaydın **KENDİ beyanı** onu çürütüyorsa
  (`"hizalandı"` · `"bağlı verinin aralığına"`) çekilir. Purépecha'da o
  beyan **vardı**; Novgorod'da **yok** — ikisi aynı kovaya girmez.
  📌 `denetle.py`nin altı noktaya aynı koordinatı önerdiği vakanın aynısı:
  ihlali kapatan bir reçete, **gerçeği silebilir.**


- 🔴 **TDV TUZAK LİSTESİNE ALTINCI: CANLI YÖNLENDİRME KÜTÜĞÜ.**
  *(4 Eylül · `KRONOLOJİ AFRİKA GÖVDE`)*
  `dahomey` slug'ı **200** döner ve gövdenin tamamı tek satırdır:
  > *«bk. BENİN — Batı Afrika'da İslâm Konferansı Teşkilâtı üyesi olan bir
  > ülke.»*

  Bir **adres**, bir madde değil. Dört tuzağın hiçbiri bunu yakalamaz —
  slug canlı, gövde geliyor, boş değil, yanlış konu da değil.
  🔴 **Ve en tehlikeli yanı:** o oturumun kendi 38 sluglık taraması onu
  *"CANLI"* saymıştı. Bir HTTP taraması bundan *"TDV Dahomey'i kapsıyor"*
  hükmü çıkarır.
  📌 `000` ekseninin **aynası**: orada **ölçülemedi ≠ ölü**, burada
  **200 ≠ madde**. İkisi de bir HTTP kodunun taşıyamayacağı bir bilgiyi
  taşıdığını sanmaktan doğuyor.
  🟢 Çare yönlendirmeyi **izlemek**: `benin` gövdesi altı maddenin altısını
  verdi. Ama dikkat — TDV `benin` **modern Benin**'dir, Nijerya'daki
  **Benin Krallığı** değil (`§4②` tuzağının altıncı vakası).


- 🔴🔴 **TDV TUZAK LİSTESİNE YEDİNCİ: TAKVİM — VE TDV KENDİ İÇİNDE
  KARIŞIK KULLANIYOR.** *(5 Eylül 2026 · `NEHİR SÜRTÜNME`, ve bir
  "çelişki" yine çelişki çıkmadı)*
  ⇒ ***Bir TDV gününü veriye yazmadan önce HANGİ TAKVİM olduğu
  sorulur.*** Ve soru ucuz: aynı olayın başka bir maddedeki tarihiyle
  ya da bilinen bir Milâdî çapayla karşılaştır; 13 günlük (19. yy'da 12)
  bir sapma takvim farkının imzasıdır.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/tdv-tuzak-listesine-yedinci-takvim-ve-tdv.md`  · 5 Eylül 2026 · `NEHİR SÜRTÜNME`, ve bir "çelişki" yine çelişki çıkmadı

- 🔴 **BİR DEVLETİN KRONOLOJİSİNE, TARAF OLMADIĞI BİR OLAY YAZILMAZ.**
  *(4 Eylül · `KRONOLOJİ AFRİKA GÖVDE`)*
  14 Haziran 1898 Paris Konvansiyonu TDV `gana`da **günüyle** geçiyor — gün
  taşıyan bir madde en cazip olandır. Oturum **yazmadı**: Aşanti o
  antlaşmanın tarafı değil, üç Avrupa devleti arasında.
  > *"Bir devletin kronolojisine taraf olmadığı bir olayı yazmak, onu
  > oturmadığı bir masaya oturtur."*
  📌 `§11`in *"ATLAS SEFERİ DEĞİL TASARRUFU BOYAR"* dersinin **kronoloji**
  tarafı. Ve yazmama kararının **dosyaya kaydedilmesi** ikinci yarısı: bir
  sonraki oturum onu *"atlanmış"* sanacaktı.


- 🔴🔴 **BİR KAYNAĞIN MARKASI, ONUN PROVENANSI DEĞİLDİR — aynı alan adı
  bugün hem imzalı madde hem YZ ÜRETİMİ ÖZET sunuyor.**
  *(4 Eylül 2026 · `KRONOLOJİ GÜNEY AMERİKA` ölçtü · koordinatör tarayıcıyla
  BAĞIMSIZ doğruladı)*
  ⇒ ***Bir Britannica bağlantısı, tek başına "kabul edilebilir kaynak"
  demek DEĞİLDİR.*** Sayfanın **hangi cinsten** olduğuna bakılır.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-kaynagin-markasi-onun-provenansi-degildir-ayni.md`  · 4 Eylül 2026 · `KRONOLOJİ GÜNEY AMERİKA` ölçtü · koordinatör tarayıcıyla BAĞIMSIZ doğrulad

- 🟢 **VE HASSASİYETİ DÜŞÜRMEK BİLGİYİ SİLMEZ — DAYANAĞINI GÖRÜNÜR KILAR.**
  *(aynı oturum, aynı gün)*
  `paraguay f:1811-05-14` kaynaksız diye `1811-01-01`e indirilmişti. Yeni
  bir kaynak günü **aynen** verdi (*«declared their independence on May 14,
  1811»*) ve gün **geri alındı** — ama artık künyeden değil **kaynaktan**
  geliyor.
  ⇒ Kural önce doğruyu kaybettirdi gibi göründü; sonra aynı kural onu
  **dayanaklı** hâle getirdi. ***Kaybolan şey gün değil, gerekçesizlikti.***


- 🔴 **BİR BULGUNUN SAHİBİ, BULGUNUN KENDİSİ KADAR KAYITTIR.**
  *(4 Eylül 2026 · koordinatörün hatası, ve düzelten MAL EDİLEN taraf oldu)*
  ⇒ Bu, `§11`in *"ölçmediğini `ölçmedim` diye yaz"* kuralının **aynası**, ve
  iki hata aynı sınıf:
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-bulgunun-sahibi-bulgunun-kendisi-kadar-kayittir.md`  · 4 Eylül 2026 · koordinatörün hatası, ve düzelten MAL EDİLEN taraf oldu

- 🔴🔴 **YAYIN, VERİNİN BEŞ PARTİ GERİSİNDE — VE HİÇBİR DENETİM BUNU
  SORMUYORDU.** *(4 Eylül 2026 · `PAKET GEOMETRİ 0904` ölçtü)*
  ⇒ **Yayındaki harita Amerika'nın, Okyanusya'nın ve Sibirya-2'nin HİÇBİR
  noktasını çizmiyor.** Veri var, harita çizmiyor.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/yayin-verinin-bes-parti-gerisinde-ve-hicbir.md`  · 4 Eylül 2026 · `PAKET GEOMETRİ 0904` ölçtü

- 🔴 **ÇOK PARÇALI BİR İLİŞKİYİ TEK SAYIYA İNDİREN ÖLÇÜ, KUSURU ALT SINIR
  OLARAK GÖSTERİR.** *(4 Eylül 2026 · aleti yazan oturum kendi çürüttü)*
  📌 Mesafe bir **minimum** alır; kusur bir **maksimum** meselesidir. Bir
  ölçünün yanlış olması gerekmiyor — **yanlış yönde özetlemesi** yetiyor.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/cok-parcali-bir-iliskiyi-tek-sayiya-indiren.md`  · 4 Eylül 2026 · aleti yazan oturum kendi çürüttü

- 🟢 **AYNI SAYININ TEKRAR ETMESİ, İLK ÖNCE ALETTEN ŞÜPHELENDİRİR.**
  Üç kesitte de boşluklu çift sayısı **17** çıktı. Oturum bunu bulgu
  saymadı, **sorguladı**: *"aynı sayı üç kez çıkınca ilk şüphelenilmesi
  gereken şey ALETİN kendini tekrarlamasıdır."* Ölçtü — üç kesitte ortak
  olan yalnız **3 çift**, gerisi kesite özgü.
  ⇒ ***Aynı sayı ≠ aynı vaka.***


- 🔴 **GİZLİ BİR SEKMEDE YAPILAN HER TARAYICI ÖLÇÜMÜ «YOK» DER — VE «YOK»
  BİR SONUÇ SANILIR.** *(4 Eylül 2026 · aynı günün DÖRDÜNCÜ vakası)*
  ⇒ Bütün o *"katman yok"* ölçümleri **bir artefakttı**, ve hiçbiri hata
  vermedi — dördü de **temiz bir sayı** üretti.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/gizli-bir-sekmede-yapilan-her-tarayici-olcumu.md`  · 4 Eylül 2026 · aynı günün DÖRDÜNCÜ vakası

- 🔴 **AYNI RENGİ İKİ ALET FARKLI HARMANLIYOR — VE BİRİ EKRANDA OLMAYAN BİR
  RENGİ ÖLÇÜYOR.** *(4 Eylül 2026 · `ispanya` uyarısını kovalarken çıktı)*
  ⇒ Ayrışan şey metrik değil **harman**:
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/ayni-rengi-iki-alet-farkli-harmanliyor-ve.md`  · 4 Eylül 2026 · `ispanya` uyarısını kovalarken çıktı

- 🟢 **AÇIK KALEM KAPANDI: "10 ÇAKIŞMA" BİR YAMA KUSURU DEĞİL, GERÇEKTİ —
  VE KÖK SEBEP ÇÖZÜCÜNÜN PAY BIRAKMAMASI.** *(4 Eylül 2026 gecesi)*
  ⇒ **Sayı birebir tuttu.** Yani o 10 çift bir artefakt değil: **ekranda
  (8 bit) zaten eşiğin altındalar.** `renk_olc`un float harmanı **iyimser**.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/acik-kalem-kapandi-10-cakisma-bir-yama.md`  · 4 Eylül 2026 gecesi

- 🔴🔴 **KOMŞULUK BİR İPUCUDUR, KANIT DEĞİLDİR — VE BİR KİMLİĞİ ATAMAK
  İÇİN DELİL ARARKEN ATAMAMAK İÇİN DELİL ÇIKABİLİR.**
  *(5 Eylül 2026 · `NEHİR SÜRTÜNME`, ve aday kimliği ÇÜRÜTEN taraf onu
  ÖNEREN taraftı)*
  ⇒ Derbend'i Şirvan'a bağlamak yalnız **dayanaksız** değil, kaynağın
  gösterdiği **idarî ayrıma da aykırı** olurdu.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/komsuluk-bir-ipucudur-kanit-degildir-ve-bir.md`  · 5 Eylül 2026 · `NEHİR SÜRTÜNME`, ve aday kimliği ÇÜRÜTEN taraf onu ÖNEREN taraftı

- 🟢🟢 **İKİ OTURUM, AYNI GECE, KENDİ MANŞET SAYISINI ÇÜRÜTTÜ — VE İKİSİ DE
  KABUL ÖLÇÜTÜNÜ KARŞILADIKTAN SONRA.** *(5 Eylül 2026 gecesi)*
  📌 Bir kabul ölçütü karşılandıktan **sonra** kimse geri dönüp bakmaz —
  ölçüt bir kapıdır ve kapıdan geçen iş *"bitti"* sayılır. Bu iki oturum
  kapıdan geçtikten sonra baktı, ve ikisi de kendi sayısını düşürdü.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/iki-oturum-ayni-gece-kendi-manset-sayisini.md`  · 5 Eylül 2026 gecesi

- 🔴🔴🔴 **İÇ TUTARLILIK, DOĞRULAMA DEĞİLDİR — yanlış bir taban, üzerine
  kurulan her ölçümü yanlış ama UYUMLU yapar.** *(5 Eylül 2026 ·
  `NEHİR SÜRTÜNME` kendi aletini ihbar etti · koordinatör `denetle.py`yi
  koşturup bağımsız doğruladı)*
  Yani denetle `4c = 143+137 = 280`, `4d = 297+137 = 434` sayıyor; taklit
  aletin **`4s` diye bir kavramı yoktu.**
  📌 `§11`in *"bir aleti taklit eden ölçüm onun EŞİĞİNİ de taşımalı"*
  dersi **eksikmiş**: eşik yetmiyor, ***KOVA YAPISI da taşınmalı.***
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/ic-tutarlilik-dogrulama-degildir-yanlis-bir-taban.md`  · 5 Eylül 2026 · `NEHİR SÜRTÜNME` kendi aletini ihbar etti · koordinatör `denetle.py`yi koşt

- 🔴 **AYNI KELİME İKİ AYRI ŞEYİ ANLATIYORSA, BİRİNİ ÖLÇEN ÖTEKİNİ
  ÖLÇTÜĞÜNÜ SANIR — `KUYRUK` vakası.** *(5 Eylül 2026 · `NEHİR SÜRTÜNME`)*
  🟢 Ve asıl cevap: `2` · `2s` · `2i` **üçü de aynı `Y_cekirdek` ve aynı
  `O`yu** kullanıyor — beklenen tutarsızlık **YOK.** Ve `isg:` taşıyan 89
  noktanın 89'u çekirdek dosyalarda, yani yerleşim filtresi bu denetimde
  hiçbir şey gizlemiyor.
  📌 ⇒ Bir terim iki katmanda aynı adı taşıyorsa, *"X kuyruğu tarıyor
  mu"* sorusu **hangi kuyruk** diye sorulmadan cevaplanamaz — ve
  cevaplanırsa yanlış cevaplanır.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/ayni-kelime-iki-ayri-seyi-anlatiyorsa-birini.md`  · 5 Eylül 2026 · `NEHİR SÜRTÜNME`

- 🔴 **BİR REGEX'İN GÖRMEDİĞİ YAZIM BİÇİMİ ÖLÇÜLDÜ: `t:"` 1285 kayıt ·
  `t: "` 14 kayıt — ve ikisi 2 dosyada toplanmış.** *(aynı tur)*
  ⇒ İki dosya farklı yazım kullanıyor ve regex onları **sessizce**
  atladı. Bu gecenin *"kendi yazdığın ayrıştırıcı her zaman kötüdür"*
  dersinin **yedinci** vakası, ve dar hâli zaten kayıtlıydı (`ad:` ↔
  `{"ad":`). ***Aynı tuzak, farklı alan.***
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-regex-in-gormedigi-yazim-bicimi-olculdu.md`  · künye yok

- 🟢 **BİR AYRIŞTIRICI KUSURU BULUNDUĞUNDA, ONUNLA ÖLÇÜLEN HER SAYI AYNI
  ÖLÇÜDE KİRLENMEZ — DELTA TEMİZ KALIRKEN MUTLAK SAYI KİRLENEBİLİR.**
  *(5 Eylül 2026 · `NEHİR SÜRTÜNME`, kendi gölgesini tarayarak)*
  ⇒ ***Bir aletin iki kusuru olabilir ve ikisi farklı çıktıları
  kirletebilir.*** *"Alet bozuktu"* demek yetmez: **hangi kusur, hangi
  sayıyı** sorulur. Burada deltalar kurtuldu çünkü onları üreten yol
  kusurlu ayrıştırıcıya **hiç uğramıyordu.**
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-ayristirici-kusuru-bulundugunda-onunla-olculen-her.md`  · 5 Eylül 2026 · `NEHİR SÜRTÜNME`, kendi gölgesini tarayarak

- 🔴 **BİR ORANI BAŞKA BİR KATMANA TAŞIMAK, O KATMANIN KENDİ YAPISINI YOK
  SAYAR — ve iki yönde birden yanılabilir.** *(5 Eylül 2026 ·
  koordinatörün iki tahmini, iki ayrı oturum tarafından ölçüldü)*

  Sahiplik katmanında 113 kayıtta 8 çakışma çıkmıştı (%7). Koordinatör bu
  oranı iki başka katmana taşıdı ve **ikisinde de yanıldı:**
```
397 kayıtlık taşıma     tahmin ~28   ⇒ ölçüm **17**   (fazla saydı)
26 künye önerisi        tahmin ~28   ⇒ ölçüm **0**    (kat kat fazla)
```
  🟢 Ve künye tarafının **niçin** sıfır çıktığı yapısal: her kimlik bir
  kez öneriliyor, oysa sahiplik katmanında **aynı yerleşim adı birden çok
  dosyada farklı dönemlerle** yazılıyor. Ayrıca o gecenin *"id TAHMİN
  ETME, TARA"* disiplini künye önerilerini baştan çakışmasız üretmiş.
  ⇒ ***Çakışma oranı bir veri özelliği değil, KATMANIN YAPISININ
  sonucudur:*** kaç aktörün aynı nesneye dokunabildiğine bağlı.
  📌 `§4`ün *"bir bölgede ölçülen kaynak yoğunluğu komşu bölge için bir
  tahmin bile değildir"* dersinin **katman** ekseni.


- 🟢 **TAŞIMANIN GETİRDİĞİ İLE ZATEN ORADA OLANI AYIRMAK — yoksa taşımaya
  haksız yüklenir.** *(aynı tur · `KÜRE GÖRÜNÜM`)*
  ⇒ O yedi **bugün de** bloke ediyor; taşıma onları ne yaratıyor ne
  çözüyor. Tek sayıda toplansaydı **taşımaya haksız yüklenirdi** — ve
  daha kötüsü, 18:50'de `24` görüp *"taşıma bunları getirdi"* diye
  okunurdu.
  🟢 Ve o yedi zaten bu gece hükme bağlanmış olanlar; **taşıma sonrası
  kuru koşuda yeniden görünecekler ve bu BEKLENEN.**
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/tasimanin-getirdigi-ile-zaten-orada-olani-ayirmak.md`  · künye yok

- 🔴 **BİR EŞİK, ÖLÇÜLDÜĞÜ TABANLA BİRLİKTE TAŞINIR — taban değişince
  eşik geçersizleşir ve YENİDEN TÜRETİLMEDEN kullanılamaz.**
  *(5 Eylül 2026 · R1 dikiş sınavının ön uçuşu · `NEHİR SÜRTÜNME`)*
  🔴 **Ve sonucu keskin:** reçetenin *"R1'den sonra **< 10 parça**"*
  hedefi **96'lık tabana** aitti. 640'lık tabanda o eşiğin karşılığı
  **ölçülmemiş.** ⇒ Koşu sonrası sayı 10'un üstünde çıkarsa bu tek başına
  *"R1 çalışmadı"* demek **DEĞİLDİR** — eşik önce yeniden türetilmeli.
  📌 Bir eşik bir **oran** mı bir **mutlak sayı** mı olduğu söylenmeden
  taşınırsa, yeni tabanda **sessizce yanlış bir hüküm** üretir: geçen bir
  testi kalmış, kalan bir testi geçmiş gösterebilir.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-esik-olculdugu-tabanla-birlikte-tasinir-taban.md`  · 5 Eylül 2026 · R1 dikiş sınavının ön uçuşu · `NEHİR SÜRTÜNME`

- 🟢🟢 **İKİ ÖLÇÜMÜN ORANLARININ ORANI, FARKIN SEBEBİNİ VEREBİLİR.**
  *(5 Eylül 2026 · R1 eşiği · `NEHİR SÜRTÜNME`)*
  ⇒ **Parça sayısı 6,7 kat ama alan yalnız 2,2 kat.** Kapsam büyümesi
  alanı da orantılı büyütürdü; sayıyı bu kadar öne geçirmezdi.
  ***Sayı/alan oranının kayması, "küçük parçalar elenmemiş"in imzasıdır.***
  📌 Tek bir oran *"ne kadar büyüdü"* der; **iki oranın karşılaştırılması
  NİÇİN büyüdüğünü söyler.**
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/iki-olcumun-oranlarinin-orani-farkin-sebebini-verebilir.md`  · 5 Eylül 2026 · R1 eşiği · `NEHİR SÜRTÜNME`

- 🔴 **`mtime` BİR ÖLÇÜM DEĞİL BİR DAMGADIR — içerik değişmeden değişir.**
  *(5 Eylül 2026 · `NEHİR SÜRTÜNME`, kendi tabanındaki kör noktayı bularak)*
  ⇒ İçerik **4b'nin çıktısı**; koşu 5b onu yeniden yazmış ama **aynı
  baytlarla.** Taban kirli değil.
  📌 Bu, `§11`in *"log da bir çıktıdır ve o da bayatlar"* ailesinin
  **tersi**: orada eski bir damga yeni sanılmıştı, burada **yeni bir
  damga içeriğin değiştiğini sandırdı.** ⇒ Bir dosyanın tazeliği
  `mtime`la değil **içerikle** (boyut · hash · `git status`) ölçülür.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/mtime-bir-olcum-degil-bir-damgadir-icerik.md`  · 5 Eylül 2026 · `NEHİR SÜRTÜNME`, kendi tabanındaki kör noktayı bularak

- 🔴 **BİR KONTROL DEĞİŞKENİ SORULURKEN YANLIŞ EKSEN SEÇİLEBİLİR — ve
  cevap "temiz" çıkarsa yanlış eksen hiç görünmez.** *(aynı tur ·
  koordinatörün çekincesi)*
  ⇒ Risk **kod tarafındaydı**, ve koordinatör onu *"R1 değişti"* diye
  **tek bir commit** sanmıştı. Ölçen oturum onu da açtı: hunk
  konumlarını `_pe_ozet=3615` çapasıyla izleyip **10'un 9'unun
  geometriye dokunmadığını** gösterdi (R7 yalnız okuyup basıyor,
  `PETEK_D`ye yazım yok; A2 kilit; ikisi rapor), ve `renkler.py`de
  `BOYALAR`ı Python'a okutup **550↔550 · yeni kimlik 0 · yalnız 16 hex**
  ölçtü ⇒ renk yeni gövde doğuramaz.
  📌 *"Veri sabit mi"* doğru bir soruydu ama **tek başına** sorulunca,
  cevabı `0` çıktığı için ***sorulmayan eksen hiç görünmeyecekti.***
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-kontrol-degiskeni-sorulurken-yanlis-eksen-secilebili.md`  · künye yok

- 🔴 **ÇAKIŞMA, DOSYANIN BÜYÜKLÜĞÜNDEN DEĞİL, BAŞKALARININ ZATEN YAZDIĞI
  TOPRAĞA DOKUNMASINDAN DOĞAR.** *(5 Eylül 2026 · `KÜRE GÖRÜNÜM`,
  koordinatörün hipotezini ölçerek)*
  ⇒ İran-Kafkasya ve Mısır-Sina **daha önce yamalanmış** bölgeler; öteki
  30 dosya el değmemiş coğrafyada.
  📌 Aynı gün ölçülen *"çakışma oranı KATMANIN YAPISININ sonucudur"*
  dersinin bir kademe incesi: ***katman İÇİNDE de düzgün dağılmıyor —
  ÖNCEDEN İŞLENMİŞ bölgede yoğunlaşıyor.*** ⇒ Çakışma riski önceden
  kestirilebilir: *"bu coğrafya daha önce yamalandı mı?"*
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/cakisma-dosyanin-buyuklugunden-degil-baskalarinin-zaten-.md`  · 5 Eylül 2026 · `KÜRE GÖRÜNÜM`, koordinatörün hipotezini ölçerek

- 🟢 **VE 17 ÇAKIŞMA 17 SORU DEĞİLDİ — DÖRT.** *(aynı tur)*
  Dokuzu tek bir kaynak boşluğunun görünen yüzü (`zend`→`kacar` 1794 mü
  1796 mı), altısı tek bir model sorusunun (himaye altındaki toprak
  kimin kimliğiyle boyanır), biri mekanik, biri tanecik.
  ⇒ ***Bir çakışma listesi, KARAR listesi değildir; önce hangi SORUYA
  ait olduğuna göre gruplanır.*** Dokuz kaydı tek tek hükme bağlamak
  aynı kararı dokuz kez vermek olurdu — ve dokuzu farklı çıkabilirdi.


- 🔴🔴 **BİR UYARININ BEKLENDİĞİNİ YAZMAK, GELEN UYARININ O OLDUĞUNU
  GÖSTERMEZ — ve öngörü "tuttu" sanıldığı için kimse bakmaz.**
  *(5 Eylül 2026 · `s.kesinlik` · `NEHİR SÜRTÜNME`)*
  ⇒ ***Uyarıyı veren, öngörüyü yazan kayıt DEĞİL*** — o sessiz geçiyor;
  uyaran, yorumun hiç bahsetmediği iki başka kayıt.
  📌 Aynı gecenin *"alet sessizce hiçbir şey yapar ve çıktısı senin
  öngörünle aynı olur"* dersinin kardeşi: orada bir `+0` taban sanılmıştı,
  burada bir **uyarı** doğrulama sanıldı. İkisinde de öngörü **kendini
  doğruladı.**
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-uyarinin-beklendigini-yazmak-gelen-uyarinin-o.md`  · 5 Eylül 2026 · `s.kesinlik` · `NEHİR SÜRTÜNME`

- 🔴 **"HER EKSENDE TEMİZ" DEMEK, SAYDIĞIN EKSENLERDE TEMİZ DEMEKTİR.**
  *(5 Eylül 2026 · `zend`→`kacar` hükmü · `NEHİR SÜRTÜNME` ölçtü)*
  ⇒ Bugün `1794-01-01` yalnız beş **Kanada/Sibirya** kaydında kırılıyor
  (kapsam dışı); yama 132 İran/Kafkasya kaydını o güne taşıyınca gün
  **kapsam içine** giriyor.
  🟢 Tavan 121 ⇒ **102 geçer, ihlal değil.** Hüküm ayakta — ama
  ***gerekçesi eksikti, ve eksikliği ancak ölçüm gösterdi.***
  📌 ⇒ Bir hüküm *"her eksende temiz"* diye savunuluyorsa, **saydığı
  eksenlerin listesi de hükmün parçasıdır**; sayılmayan eksen bir
  boşluk değil, **görünmeyen bir iddiadır.**
  🟢 Ve doğru sonuç hükmü değiştirmiyor, **borcunu adlandırıyor**:
  B yolu çekirdeğe bir `1794` maddesi yazılmasını **gerektiriyor**.
  Alternatif (A) bir hayalet devlet bırakırdı; B belgelenebilir bir
  kırılma bırakıyor. **Belgelenebilir borç, sessiz kusurdan iyidir.**
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/her-eksende-temiz-demek-saydigin-eksenlerde-temiz.md`  · 5 Eylül 2026 · `zend`→`kacar` hükmü · `NEHİR SÜRTÜNME` ölçtü

- 🔴🔴 **BİR SEVKTE ADAY TARİH SAYMAK, İŞÇİYE KAYNAKSIZ BİR ÇERÇEVE
  VERMEKTİR — ve adaylar MAKUL olduğu için tuzak görünmez.**
  *(5 Eylül 2026 · Manama himaye günü · `KÜRE GÖRÜNÜM` üçünü de eledi)*
  ⇒ Üç aday da **gerçek antlaşmalardı, yalnız himaye antlaşması
  değildi.** ***Tuzak, adayların yanlış olmasında değil MAKUL
  olmasındaydı*** — bir işçi onları doğrulamak yerine aralarından
  seçmeye yönelebilirdi.
  📌 `§11`in *"bir sevk, taşıdığı öncülü de doğrulamalıdır"* kuralının
  **tarih** yüzü: bir sayı devralınırken *"DOĞRULANMADI"* yazılır; bir
  **aday listesi** verilirken de aynısı gerekir, çünkü liste aramanın
  **çerçevesini** kurar.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-sevkte-aday-tarih-saymak-isciye-kaynaksiz.md`  · 5 Eylül 2026 · Manama himaye günü · `KÜRE GÖRÜNÜM` üçünü de eledi

- 🔴🔴 **BİR YÖNTEM EMEKLİ EDİLMİŞ OLABİLİR VE YERİNE GELEN ALET
  ULAŞILAMAZ OLABİLİR — o zaman herkes emekli yönteme döner, ve
  bilmediğinden değil MECBUR OLDUĞUNDAN.** *(5 Eylül 2026 · koşu 5b'nin
  merdiveni · koordinatörün kendi gece boyunca kullandığı yöntem)*
  Sebep `CLAUDE.md`de zaten yazılı: *"`uret_petek.py` başında stdout'u
  `TextIOWrapper` ile sarmaladığı için `py -u` bile çıktıyı ancak
  ÇIKIŞTA boşaltır."*
  ⇒ ***Emekli edilen yöntem, yerine gelenin ulaşılamaz olması yüzünden
  hâlâ tek seçenek.*** Ve bu bir bilgisizlik değil bir **yapı** sorunu:
  aleti bilen bir oturum bile ona koşu sırasında bakamaz.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-yontem-emekli-edilmis-olabilir-ve-yerine.md`  · 5 Eylül 2026 · koşu 5b'nin merdiveni · koordinatörün kendi gece boyunca kullandığı yöntem

- 🔴🔴 **BİR ŞEMADA `b:` ALANI `t:`DEN SONRA GELİYORSA, `t:`DEN GERİYE
  ARAMAK HEP BİR ÖNCEKİ KAYDIN ALANINI BULUR — ve uydurma bir manşet
  üretir.** *(5 Eylül 2026 · koordinatörün kendi ölçüm aleti, ve kendi
  ikinci turunda yakaladı)*
  📌 `§11`in *"bir alet, aradığı şeyin NEREDE OLMAYACAĞINI da bilmeli"*
  ailesinin **şema sırası** yüzü. Önceki üyeler *yorumda* · *başlıkta* ·
  *önsözde* arıyordu; bu **komşu kayıtta** arıyor — ve komşu kayıt, aranan
  şeyle **aynı biçimde** olduğu için hiçbir sağlamlık kontrolü ötmez.
  🟢 Çare yön düzeltmek değil, **kaydı kendi sınırlarıyla almak**: eşleşen
  `t:`den **ileriye** ilk `b:`ye git, ve iki kayıt arasındaki `},{` sınırını
  aşarsan **`?` bas** — ya da veriyi kendi dilinin yorumlayıcısına ver.
  ⚠️ Ve bu, `§11`in *"kendi yazdığın ayrıştırıcı her zaman kötüdür"*
  dersinin bu projede **yedinci** vakası.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-semada-b-alani-t-den-sonra.md`  · 5 Eylül 2026 · koordinatörün kendi ölçüm aleti, ve kendi ikinci turunda yakaladı

- 🟢🟢 **BİR EŞLEŞTİRİCİNİN DOĞRULUĞU, İSABET ORANINI ADAY KÜMESİNİN
  BÜYÜKLÜĞÜYLE İLİŞKİLENDİREREK SINANIR — İKİSİ BİRLİKTE ARTIYORSA
  ÖLÇÜLEN ŞEY İÇERİK DEĞİL ANAHTAR UZAYIDIR.** *(5 Eylül 2026 ·
  `NEHİR SÜRTÜNME`, ve kendi ölçütünü İKİ KEZ çürüterek)*
  📌 Ve hükmün yönü kayda değer: bu **aletin kusuru değil ÖLÇÜTÜN TAVANI.**
  ⇒ *"Daha iyi bir otomatik test bu sayıyı yükseltemez"* — ve bunu bilmek,
  yükseltmeye çalışarak tur yakmayı önlüyor. `§11`in *"çözülemedi'nin üç
  cinsi"* ailesine dördüncüsü: **ölçüt tavanı.**
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-eslestiricinin-dogrulugu-isabet-oranini-aday-kumesin.md`  · 5 Eylül 2026 · `NEHİR SÜRTÜNME`, ve kendi ölçütünü İKİ KEZ çürüterek

- 🔴 **BİR KOŞU SÜRESİ TAHMİNİ, ÖLÇÜLDÜĞÜ GİRDİ BÜYÜKLÜĞÜYLE BİRLİKTE
  TAŞINIR — ve fırlatıcının kendi kaydı bir TAHMİNDEN iyidir ama
  TABANSIZ okunursa yanıltır.** *(5 Eylül 2026 · koşu 5b)*
  Voronoi ve kesişim maliyeti nokta sayısıyla doğrusaldan kötü ölçekler
  ⇒ **daha uzun bir koşu beklenen davranıştır.** 16:55'te tarihî azami
  aşıldı ve bu bir arıza işareti değil.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-kosu-suresi-tahmini-olculdugu-girdi-buyukluguyle.md`  · 5 Eylül 2026 · koşu 5b

- 🔴🔴 **BİR İDDİAYI AKTARIRKEN YOLU "NORMALLEŞTİRMEK" ONU ÇÜRÜTEBİLİR —
  ve sonra kendi normalleştirmeni ölçüp karşı tarafı haksız çıkarırsın.**
  *(5 Eylül 2026 · koordinatörün hatası, ve düzelten yine ÖLÇÜLEN taraf)*
  📌 `§11`in *"bir alet, aradığı şeyin NEREDE OLMAYACAĞINI da bilmeli"*
  ailesinin **aktarım** yüzü — ve en sinsi üyesi, çünkü burada yanlış yeri
  arayan bir alet değil, **iddiayı taşıyan kişi**: yol, taşınırken
  *"düzeltilmiş"* oluyor ve düzeltme onu **yanlış** yapıyor.
  🟢 Kural: bir iddia aktarılırken **yazıldığı hâliyle** aktarılır. Bir
  yolu tamamlamak gerekiyorsa, tamamlanan hâl **ayrıca ölçülür** — ve
  ölçüm sonucu *"yok"* çıkarsa ilk şüphelenilecek şey **kendi eklediğin
  önektir**, karşı tarafın iddiası değil.
  ⚠️ Ve bu, aynı gün ölçülen *"bir glob bir ad sözleşmesidir"* dersinin
  aynası: orada dosya adı onu **yanlış alete** teslim ediyordu, burada
  eklenen dizin onu **var olmayan bir yere.**
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-iddiayi-aktarirken-yolu-normallestirmek-onu-curutebi.md`  · 5 Eylül 2026 · koordinatörün hatası, ve düzelten yine ÖLÇÜLEN taraf

- 🔴🔴 **AYNI İŞİ YAPAN İKİ ZİNCİR BETİĞİ VARSA, DÜZELTME YALNIZ BİRİNE
  İNER — ve hangisinin koştuğu ANCAK SÜREÇTEN ölçülür.**
  *(5 Eylül 2026 · merge adım ⓪ · koşu 5b)*
  ⇒ Koşudan sonra **yanlış zincir koşulursa kapı duracak**, ve sebebi
  *"düzeltme yapılmadı"* değil ***"düzeltme öteki betikte"*** olacak —
  yani `git log` düzeltmeyi gösterecek ve kimse çelişkiyi çözemeyecek.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/ayni-isi-yapan-iki-zincir-betigi-varsa.md`  · 5 Eylül 2026 · merge adım ⓪ · koşu 5b

- 🔴🔴 **BEYAN EDİLEN KAYNAK, İDDİAYI TAŞIMIYOR OLABİLİR — ve hiçbir
  denetim bunu sormuyor.** *(5 Eylül 2026 · `NEHİR SÜRTÜNME` · `1899-04-09`)*
  ⇒ Gün **doğru olabilir**, ama **gösterilen kaynak onu söylemiyor.**
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/beyan-edilen-kaynak-iddiayi-tasimiyor-olabilir-ve.md`  · 5 Eylül 2026 · `NEHİR SÜRTÜNME` · `1899-04-09`

- 🔴 **YUVARLAK BİR TARİH YALNIZ HASSASİYETİ DEĞİL, BORÇLARI DA
  BİRLEŞTİRİR — bir madde sayacı kapatır, borcu kapatmaz.**
  *(aynı ölçüm)*
```
1668-01-01   ÜÇ AYRI GEÇİŞ, ÜÇ KITA:
             Waskaganish (HBC) · Sault Ste. Marie · Kamışlov (Ural)
             üçü de AYRI kaynaklı, üçü de YIL hassasiyetinde
1349 · 1646 · 1895   ikişer ayrı geçiş
```
  ⇒ O güne **bir** madde yazmak `Değişmez 2s`yi kapatır ve geriye **iki
  anlatılmamış geçiş** bırakır — ve denetim artık *"temiz"* dediği için
  kimse aramaz.
  📌 Aynı gün ölçülen *"artefakt imzası"* (isabet oranı aday kümesiyle
  birlikte artıyorsa anahtar uzayı ölçülüyordur) bunun **ölçüm** tarafıydı;
  bu **veri** tarafı, ve kök aynı: `YYYY-01-01` farklı olayları tek
  anahtara yığıyor.


- 🔴 **BİR GÖVDEYİ İLK `BİBLİYOGRAFYA`DA KESMEK, ÇOK BÖLÜMLÜ TDV
  MADDESİNİN %79'UNU ATABİLİR.** *(aynı ölçüm · çıkarıcıyı yazan çürüttü)*
```
`uganda`  `Müellif:` 8 kez ⇒ SEKİZ bölümlü madde
kesme     7.313 / 34.134 karakter  ⇒ metnin %79'u ATILDI
sonuç     "Bunyoro 0 kez" ölçüldü — GERÇEK 13
```
  🟢 Yakalayan şey bir eşik değil, **bilinen bir olguyla çelişmesi**: o
  maddenin Bunyoro'yu andığı zaten biliniyordu.
  📌 `§4⑦`nin (*"metin çıkarılamadı ≠ belgede metin yok"*) kardeşi:
  orada çıkarıcı **okuyamamıştı**, burada **okudu ve kesti** — ve kesilmiş
  gövde tam gövde sanıldı. ⇒ Bir gövdeden *"yok"* hükmü çıkarmadan önce
  **kaç karakter okunduğu** yazılır.


- 🔴🔴 **`DEĞİŞMEZ 2`NİN "KAPALI" HÜKMÜ, O GÜNÜN BÜTÜN GEÇİŞLERİNİN
  ANLATILDIĞI ANLAMINA GELMEZ — YALNIZ **EN AZ BİRİNİN.** Ve fark
  ölçüldü: kırılma günlerinin **%21'i**.*
  *(5 Eylül 2026 · `NEHİR SÜRTÜNME`nin `1668` vakasından, koordinatör ölçtü)*
  ⇒ ***Geçişler ne kadar uzaksa, günün yuvarlak olma ihtimali o kadar
  KESİN.*** 10.000 km'de %98,6 — ve o mesafede gerçek bir eşzamanlılık
  için tarihsel bir mekanizma yok. Yani bu bir rastlantı değil, **anahtar
  çakışmasının imzası**: `YYYY-01-01` ilgisiz olayları tek anahtara yığıyor.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/degismez-2nin-kapali-hukmu-o-gunun-butun.md`  · 5 Eylül 2026 · `NEHİR SÜRTÜNME`nin `1668` vakasından, koordinatör ölçtü

- 🔴🔴 **VE SINIFIN EN AĞIR ÜYESİ: KAYNAK AYNI ŞEYİ **BAŞKA BİR TARİHLE**
  TARİHLİYOR.** *(5 Eylül 2026 · `NEHİR SÜRTÜNME` · `portekiz`)*
  ⇒ **Dört yıl VE başka bir olay.** Künye bir savaşı, kaynak bir
  antlaşmayı tarihliyor.
  📌 `§4⑧`in (*"rakam gövdede geçiyor ≠ gövde o değeri destekliyor"*)
  **tersi**: orada gövde **başka bir şeyi** tarihliyordu, burada gövde
  **aynı şeyi başka bir tarihle**. ⑧ sahte bir doğrulama üretir; bu
  **sessiz bir çelişki** bırakır — ve `kaynak:` dolu olduğu için kimse
  iki tarafı yan yana koymaz.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/ve-sinifin-en-agir-uyesi-kaynak-ayni.md`  · 5 Eylül 2026 · `NEHİR SÜRTÜNME` · `portekiz`

- 🔴🔴 **SÜZGEÇ GÖRÜNÜR ELER, İZDÜŞÜM SESSİZ KIRPAR — ve bir aletin
  hangisini yaptığı sorulmadan alan kapsaması ölçülemez.**
  *(5 Eylül 2026 · `KÜRE GÖRÜNÜM` · `_kademe_uygula.py`)*
  ⇒ Kayıt **TUTULUYOR**, öteki bütün alanları **atılıyor**, ve hiçbir
  yere iz düşmüyor. Süzgeç bir kaydı kaybeder ve söyler; izdüşüm bir
  **alanı** kaybeder ve **söylemez.**
  🟢 **VE ÖLÇEN OTURUM BİR ADAYI YAYINLAMADAN ÇÜRÜTTÜ:**
  `data/yer_yama_kademe_zincir.js` (17 kayıt) sabit listede yoktu ve
  *"17 kayıt görünmez"* gibi duruyordu. Ölçüldü — **çürüdü**: dosya adı
  *"kademe"* diyor ama içeriği bir `m:` yaması (`ad` + `m` + `kaynak`),
  ve doğru sahibi `_sahiplik_uygula.py`; kuru koşu iniyor, 17'sinde de
  fark 0.
  📌 *"Bir glob bir ad sözleşmesidir"* dersinin **aynası**: orada ad
  dosyayı yanlış **alete** teslim ediyordu, burada ad **ölçümü** yanlış
  kola yolluyor — ve sevki yazan koordinatör de aynı ada aldanmıştı.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/suzgec-gorunur-eler-izdusum-sessiz-kirpar-ve.md`  · 5 Eylül 2026 · `KÜRE GÖRÜNÜM` · `_kademe_uygula.py`

- 🔴🔴 **BAYAT BİR KABUL ÖLÇÜTÜ, YANLIŞ SEBEPTEN GEÇER — ve geçtiği için
  kimse ona bakmaz.** *(5 Eylül 2026 · Ö9 sınavı)*
  ⇒ Borç **ölçümden 5,5 saat SONRA ödendi**, ve ödeyen commit'in mesajı
  bunu **açıkça yazıyor.** Ölçüt ödenmiş bir borcu bekliyordu.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bayat-bir-kabul-olcutu-yanlis-sebepten-gecer.md`  · 5 Eylül 2026 · Ö9 sınavı

- 🔴🔴 ~~**BİR DÖNEMİN `kaynak:`I ÇOĞU ZAMAN ONU BAŞLATAN OLAYIN
  KAYNAĞIDIR; BİTİREN OLAYINKİ DEĞİL**~~ → **ÇÜRÜDÜ, AYNI GECE.**
  *(5 Eylül 2026 · yazan koordinatör, çürüten `NEHİR SÜRTÜNME`)*
  ⇒ ***Kayıt kusurlu DEĞİL; alan iki farklı olayı tek slug'la göstermek
  zorunda.*** Bir dönemin başı ve sonu genellikle **ayrı olaylardır** ve
  ayrı maddelerde anlatılır; `kaynak:` ise tektir.
  > 🔴🔴 **BU DERS ÇÜRÜDÜ VE SEBEBİ ÖRNEKLEM YOĞUNLAŞMASIYDI.** Slug
  > başına tavan konup yeniden ölçüldü:
  > ```
  >                    `f:` 🔴   `t:` 🔴   🔴'ların `t:` payı
  > DAR örneklem         %11      %76           %87
  > ÇEŞİTLİ (slug ≤ 2)   %23      %21           %57  (7 kırmızıda 4)
  > ```
  > İki uç arasındaki fark **kayboldu**. Sebep ölçüldü (koordinatör
  > bağımsız doğruladı): **`urabi-pasa` tek başına evrenin %57'si**,
  > ikincisiyle **%72** — rastgele bir örneklem *zorunlu olarak* o iki
  > slug'a düşüyordu. O iki slug gerçekten asimetrik, ama bu **onların
  > özelliği, evrenin değil.**
  > 🔴 Ve veride tersi de var: `eflak` ve `bogdan` **`f:` ucunda** 🔴.
  >
  > 🟢 **AYAKTA KALAN:** sınıf var ve künyeden yüksek — ama **iki kat,
  > dört kat değil** (yerleşim %22 · künye %12). Vakalar gerçek:
  > `berlin-antlasmasi t=1908` · `bihac t=1908` · `eflak f=1806 ve t=1812`.
  >
  > 🔴🔴 **VE ASIL KUSUR ÖLÇÜMDE DEĞİL BENDE:** işçi oturum daralığı
  > **raporunda ÖNCEDEN yazmıştı** — *"35 ucun 7'si tek slug'dan; bu
  > darlıkta tek bir slug sonucu sürükleyebilir"*. Ben onu **okudum**,
  > dersi `CLAUDE.md`ye **yine de yazdım**, ve ancak ondan sonra
  > sınanmasını istedim.
  > ⇒ ***Çürüten kanıtı elinde tutarken bir iddiayı terfi ettirmek,
  > ölçmeden tahmin etmekten KÖTÜDÜR*** — çünkü tahminin dayanağı yoktur,
  > bunun ise **yanlış bir dayanağı** vardır ve okuyan onu ölçülmüş sanar.
  > 🟢 Yakalayan şey de bir denetim değil, **çürütme talebinin kendisiydi**
  > (*"çökerse SÖYLE, damgalarım"*) — ve o cümle yazılmasaydı ders
  > belgede kalırdı.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-donemin-kaynak-i-cogu-zaman-onu.md`  · 5 Eylül 2026 · yazan koordinatör, çürüten `NEHİR SÜRTÜNME`

- 🔴 **MİRAS ALINMIŞ BİR ÖZNİTELİK, BİR BEYAN DEĞİLDİR — ona karşı ölçmek,
  kaydın hiç yapmadığı bir iddiayı sınamaktır.** *(aynı ölçüm)*
  ⇒ Evrenin **%77'si** bir dönem beyanı değil, kayıt seviyesinden
  devralınmış bir etiketti. Ona karşı ölçmek, o dönemin **hiç yapmadığı**
  bir kaynak iddiasını çürütmek olurdu.
  📌 `§11`in *"ölçüm doğru, evren yanlış"* ailesinin **miras** yüzü: burada
  evren coğrafî ya da zamansal olarak değil, **beyan sahipliği** bakımından
  dardı. ⇒ Bir alanı ölçerken sorulacak: ***bu değeri bu kayıt mı BEYAN
  ETTİ, yoksa devraldı mı?***
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/miras-alinmis-bir-oznitelik-bir-beyan-degildir.md`  · künye yok

- 🔴🔴 **BİR EVRENİN YARISINDAN ÇOĞU TEK BİR ÜYEDEYSE, RASTGELE ÖRNEKLEM
  EVRENİ DEĞİL O ÜYEYİ ÖLÇER — ve sonuç "ölçüldü" diye kaydedilir.**
  *(5 Eylül 2026 · `urabi-pasa` · ve çürüyen ders bu yüzden çürüdü)*
  ⇒ Rastgele 20 dönem çeken bir örneklem **zorunlu olarak** o iki slug'a
  düşer. Ölçülen şey *"yerleşim katmanının `kaynak:` davranışı"* değil,
  ***`urabi-pasa`nın davranışı*** olur — ve rapor birincisinin adıyla
  yazılır.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-evrenin-yarisindan-cogu-tek-bir-uyedeyse.md`  · 5 Eylül 2026 · `urabi-pasa` · ve çürüyen ders bu yüzden çürüdü

- 🟢 **`§7.1⑤b` TEK TARAFLIYDI — TAHTA ARIZASININ İKİ CİNSİ VAR, VE
  ARACIN "TEKRAR YAZMA" TALİMATI BİRİNDE DOĞRU ÖTEKİNDE YANLIŞ.**
  *(5 Eylül 2026 · `NEHİR SÜRTÜNME` ölçtü, koordinatör doğruladı)*
  ⇒ ***İki arıza ekranda AYNI görünür ve yalnız ÖLÇÜM ayırır*** —
  `tahta.json`dan geri okumak. Ölçen oturum ikisini de yaptı: talimata
  **uydu** (tekrar yazmadı) **ve** `§7.1⑤b`ye uyup **geri okudu** (kaydı
  tam çıktı). İki kural çelişiyor gibi duruyor; çelişmiyorlar, **farklı
  arızalara** bakıyorlar.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/7-15b-tek-tarafliydi-tahta-arizasinin-iki.md`  · 5 Eylül 2026 · `NEHİR SÜRTÜNME` ölçtü, koordinatör doğruladı

- 🔴 **BİR KORUMA ÇAPASI, BELGEDE ZATEN GEÇEN BİR İFADEYSE, BETİK
  "ZATEN VAR" DEYİP SESSİZCE HİÇBİR ŞEY YAPMAZ.**
  *(5 Eylül 2026 · koordinatörün kendi betiği, aynı turda)*

  Yukarıdaki dersi yazan betiğin mükerrer koruması şuydu:
  `if "TEK YÖNLÜYDÜ" in s: print("ZATEN VAR")`. O ifade `CLAUDE.md`de
  **zaten vardı** (`§3.5.1`, *"VE BU BAŞLIĞIN KENDİSİ TEK YÖNLÜYDÜ"*)
  ⇒ betik **"CLAUDE ZATEN VAR"** bastı, çıkış kodu **0** verdi, ve ders
  **hiç yazılmadı.** `git commit` de *"no changes added"* dedi ve o satır
  başarı akışının içinde kaybolabilirdi.
  📌 `§11`in *"`0`, 'yok' ile 'bakmadım' arasında ayrım yapmaz"* dersinin
  **mükerrer koruması** yüzü — ve en sinsi hâli, çünkü *"ZATEN VAR"*
  cümlesi **iyi haber gibi okunuyor.**
  🟢 Kural: bir çapa seçmeden önce **belgede kaç kez geçtiği ölçülür**
  (`grep -c`); 0 değilse çapa değildir.
  ⚠️ Ve düzeltmeyi `sed` ile yapmak betiği **sözdizimi hatasına** soktu —
  `§11`in *"kaçış içeren hiçbir düzeltme kabuktan geçirilmez"* kuralının
  aynı turda ihlali. Çare: betiği `Write` ile **yeniden yazmak.**


- 🔴🔴 **BİR SAYIM BİRİMİ YANLIŞSA, ÖLÇÜM VERİYİ DEĞİL VERİNİN
  YAPISINI ÖLÇER — ve gecenin üç bulgusu da bu tek kökten çıktı.**
  *(5 Eylül 2026 · `NEHİR SÜRTÜNME` buldu, koordinatör evrene yaydı)*
  ⇒ Mısır'ın tamamına uygulanmış **tek bir işgal örtüsü**. Sınıf
  *"kaynak taşımıyor ×110"* değil ***"tek cümle 55 yerleşime yayılmış"***.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-sayim-birimi-yanlissa-olcum-veriyi-degil.md`  · 5 Eylül 2026 · `NEHİR SÜRTÜNME` buldu, koordinatör evrene yaydı

- 🔴 **BİR KATEGORİ ŞİŞMEYİ AÇIKLAMAZ — ŞİŞMEYİ *TOPLU ATAMA* AÇIKLAR,
  ve ikisi karıştırılırsa çare yanlış yere gider.**
  *(5 Eylül 2026 · `isg:` örtüleri · işçi gözlemi, koordinatör daralttı)*
  ⇒ İki yönde de kırılıyor: **`isg:` olmak şişme için YETERLİ DEĞİL**
  (28 `isg:` ucu hiç şişmiyor) ve **şişme `isg:`e ÖZGÜ DEĞİL** (`sokoto`
  2×, ve `s:`).
  🟢 Doğru değişken **kategori değil TOPLU ATAMA**: tek bir olayın çok
  yerleşime uygulanması. Büyük vakalar `isg:`te çünkü işgal örtüleri
  doğal olarak toplu — ama bağ **nedensel değil, olgusal.**
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-kategori-sismeyi-aciklamaz-sismeyi-toplu-atama.md`  · 5 Eylül 2026 · `isg:` örtüleri · işçi gözlemi, koordinatör daralttı

- 🟢🟢 **KAPSAYICI MADDE, DAR MADDENİN İFADE EDEMEDİĞİ **İKİ UCU BİRDEN**
  TAŞIYABİLİR — ve bu, bir "alan tasarımı" şikâyetini kaynak sorununa
  geri indirir.** *(5 Eylül 2026 · `misir` · `NEHİR SÜRTÜNME`)*
  ⇒ **Tek bir alan değişikliği (`urabi-pasa` → `misir`) iki ucu da
  kapatıyor ve 55 yerleşimi dayanaklandırıyor.**
  📌 ***Bir alanın "ifade edemediği" sanılan şey, çoğu zaman yanlış
  ADRESTEN sorulmuş olabilir.*** Tasarım şikâyetine geçmeden önce
  kapsayıcı madde denenir — yoksa bir şema değişikliği, bir arama
  eksikliğinin üstüne inşa edilir.
  ⚠️ Ve bu, tasarım sorusunu **çürütmüyor** — yalnız *bu vakanın* onu
  gerektirmediğini gösteriyor. Gözlem ikinci kez daraldı ve dayanağı
  artık iki slug.
  🟢 **VE BOİLERPLATE DOĞRU DAMGALANDI:** sekiz kapı denendi;
  `hidiviyet` · `misir--ulke` · `abbas-hilmi` **200 döndü ama gövde
  807/1031/869 karakter** ⇒ `§4④`. Ölçen oturum onlar için *"TDV'de
  yok"* **yazmadı**.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/kapsayici-madde-dar-maddenin-ifade-edemedigi-iki.md`  · 5 Eylül 2026 · `misir` · `NEHİR SÜRTÜNME`

- 🔴 **BÜYÜK/KÜÇÜK HARF DUYARSIZ ALT-DİZGİ ARAMASI, BİR ADI BAŞKA BİR
  KELİMENİN İÇİNDE BULUR — ve "geçiyor ama ilgisiz" diye raporlanır.**
  *(5 Eylül 2026 · `Ahar` ↔ `baHARatı` · `KÜRE GÖRÜNÜM`)*
```
arama    "ahar" (harf duyarsız)  → TDV gövdesinde 1 eşleşme
cümle    ticaret hakkında, ve eşleşme **"ba·HAR·atı"nın İÇİ**
harf duyarlı sayım                → 0
```
  ⚠️ Yakalanmasaydı *"Ahar gövdede geçiyor ama ilgisiz bir cümlede"* diye
  raporlanacaktı — **doğru sonuç, yanlış dayanak**, ve o dayanak bir
  sonraki oturumu *"bakıldı"* diye yanıltırdı.
  📌 Aynı gecenin ikinci vakası (`astı` ↔ `bastırıldı`) ve `§11`in
  *"eşleşme bulmak, doğru şeyi bulmak değildir"* ailesinin **en ucuz**
  üyesi: çare bir kelime sınırı (`\b…\b`) ya da harf duyarlılığı.
  🟢 Ve bu, gecenin **sınır koruması** dersinin kardeşi — orada bir yıl
  (`533` ↔ `533-538` sayfa aralığı), burada bir **ad**.


- 🔴🔴 **BİR SINIFTA OTOMATİK SINAV NE GEVŞETİLEREK NE SIKILAŞTIRILARAK
  DOĞRU ÇALIŞABİLİR — ve bunu ancak ÇAREYİ DE SINAYARAK öğrenirsin.**
  *(5 Eylül 2026 · `NEHİR SÜRTÜNME` · gün araması)*
  ⇒ ***Gevşek yakalar ve uydurur; sıkı ayıklar ve kaybeder.*** Dört ucun
  **üçünün** hükmü sonunda **okumaya** dayandı.
  🟢 **Denetim adayı için kesin sonuç: `⚪`/`🟡` ayrımı
  OTOMATİKLEŞTİRİLEMEZ.** Otomatikleşebilen tek kova `🔴` (yıl gövdede
  **hiç** yok) — çünkü ölçüt **yokluk**, ve yokluk yorum gerektirmez.
  🔴 **Ama `kirim` onu bile sınırladı: TAKVİM.** Kaynak *"8 Nisan 1783"*
  (Jülyen), veri `1783-04-19` (Gregoryen, 18. yy farkı 11 gün) ⇒ **aynı
  gün**, ama otomatik arama `1783`ü bulsa bile günü **hiç eşleştiremez.**
  ⇒ `🔴` kovası bile **takvim ekseninde yanılabilir**; şart ⑦.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-sinifta-otomatik-sinav-ne-gevsetilerek-ne.md`  · 5 Eylül 2026 · `NEHİR SÜRTÜNME` · gün araması

- 🟢🟢 **BİR DENETİM ŞARTNAMESİNİN EN DEĞERLİ SATIRI, NE ÖLÇTÜĞÜ DEĞİL
  **NE ÖLÇMEDİĞİDİR** — ve o satır en başa yazılmazsa denetim başka bir
  şey sanılır.** *(5 Eylül 2026 · `SARTNAME-KAYNAK-DENETIMI-0905.md`)*
  🔴 **Ayrım hayatî ve bir vakayla kanıtlı:** `urabi-pasa t=1914-12-18` —
  gün **tarihen doğru**, ama gösterilen madde 1911'de bitiyor. Bir kayıt
  **doğru tarihi taşıyıp yanlış kaynağı gösterebilir.**
  ⇒ Bu satır yazılmasaydı denetim bir *"tarih denetimi"* sanılır ve
  **yanlış kalemler açılırdı** — düzeltilecek şey tarih değil `kaynak:`.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-denetim-sartnamesinin-en-degerli-satiri-ne.md`  · 5 Eylül 2026 · `SARTNAME-KAYNAK-DENETIMI-0905.md`

- 🔴🔴 **BİR CÜMLEYİ ALINTILAMADAN ÖNCE **ÖNCEKİNİ** OKU — ve aynı gece
  aynı disiplin bir yılı kurtardı, uygulanmadığında bir bulguyu çürüttü.**
  *(5 Eylül 2026 · `Zagem` · `KÜRE GÖRÜNÜM` kendi bulgusunu geri aldı)*
  ⇒ İki cümle **aynı ânı** (Ağustos 1578) anlatıyor ve **çelişmiyorlar**:
  Kahet idarî olarak eyalete yazıldı, **fiilen** eski hâkimine ocaklık
  olarak bırakıldı ve haraca bağlandı — yani **tâbi krallık.** Gerekçenin
  dediği tam olarak buydu.
  🟢 Ve veri bunu **zaten aynı günle** söylüyor:
  `Zagem v:[{f:"1578-08-09", … k:"Kaheti krallığı (tâbi)"}]` · TDV
  *"Ağustos 1578"*. Bağımsız teyit.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-cumleyi-alintilamadan-once-oncekini-oku-ve.md`  · 5 Eylül 2026 · `Zagem` · `KÜRE GÖRÜNÜM` kendi bulgusunu geri aldı

- 🔴 **BİR SÖZLÜKTE OLMAYAN SINIF, VERİDE **DÖRT FARKLI** CEVAP ALIR — ve
  hiçbiri yanlış sayılamaz.** *(aynı ölçüm)*
  ⇒ ***Kusur tek bir kaydın gerekçesinde değil: o sınıf için tutarlı bir
  ÖLÇÜT yok, çünkü SÖZLÜKTE O SINIF YOK.*** Zagem'i tek başına
  düzeltmek tutarsızlığı **çözmez.**
  🟡 Görünür bir gradyan **var** (büyük tâbi devletler → k1-k2, küçük
  polity'ler → k3-k4) ve Kaheti ona uyuyor — ama bu bir **doğrulama
  değil, EMSALLE UYUM**; sözlük yazılana kadar kalem kapanmaz.
  🟢 Ve ölçen oturum **bir kademe önermedi**: *"sözlük yazılmadan seçmek,
  seçimi ölçüm gibi göstermek olurdu."*
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-sozlukte-olmayan-sinif-veride-dort-farkli.md`  · künye yok

- 🔴 **BİR KOORDİNATÖR, OKUDUĞUNDAN HIZLI SEVK EDERSE İKİ KUSUR ÜRETİR:
  MÜKERRER İŞ VE HAKSIZ SORU.** *(5 Eylül 2026 · aynı gece iki vaka)*
  ⇒ İkisinin de kökü aynı: **sevk hızı, okuma hızını geçti.** Ve ikisi de
  işçi tarafında bir kusur değil.
  📌 `§7.1` koordinatöre *"ses yoksa sor"* diyor; eksik olan ayak
  ***"sormadan önce TAHTAYI OKU"*** — çünkü *"ses yok"* bir ölçüm değil,
  **okumamanın sonucu** olabilir.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-koordinator-okudugundan-hizli-sevk-ederse-iki.md`  · 5 Eylül 2026 · aynı gece iki vaka

- 🔴🔴 **BİR ÖN-SINAV, SORDUĞU RİSKLERDE TEMİZ ÇIKIP EN BÜYÜK RİSKİ HİÇ
  SORMAMIŞ OLABİLİR — ve "mekanik" damgası onu kapatır.**
  *(5 Eylül 2026 · merge adım ⑥ · koordinatörün kendi ön-sınavı)*
  📌 ***Bir ön-sınav "temiz" dediğinde sorulacak soru "doğru mu
  ölçtü" değil "NEYİ ÖLÇMEDİ"dir*** — ve *"mekanik"* gibi bir damga o
  soruyu **sordurmaz.** `§11`in *"denetim var ≠ o soruyu soruyor"*
  ailesinin **kendi yazdığın sınav** yüzü.
  🟢 Ve yakalayan şey bir denetim değil, bir **işçi bildirimi** oldu —
  üstelik iki kimlik bildirdi, ölçüm **on yediyi** buldu.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-on-sinav-sordugu-risklerde-temiz-cikip.md`  · 5 Eylül 2026 · merge adım ⑥ · koordinatörün kendi ön-sınavı

- 🔴🔴 **BİR MERGE ADIMININ ÖN KOŞULU, O ADIMIN KENDİ GİRDİSİNDEN
  TÜRETİLEMEZ — ÖNCEKİ ADIMLARDAN SONRAKİ DURUMDAN türetilir.**
  *(5 Eylül 2026 · adım ⑧ renk listesi · iki liste, aynı kusur)*
  ⇒ Ölçüldü ve ikisinin **arasından altı delik** çıktı:
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-merge-adiminin-on-kosulu-o-adimin.md`  · 5 Eylül 2026 · adım ⑧ renk listesi · iki liste, aynı kusur

- 🔴 **BİR ÖLÇÜMÜN BİR EKSENİNİ DÜZELTMEK, ÖTEKİ EKSENİNİ BOZABİLİR — ve
  düzeltilmiş sürüm "daha doğru" sanıldığı için ikisi birden kabul
  edilir.** *(5 Eylül 2026 · kimlik karşılığı ölçümü, iki tur)*
  Düzeltilmiş sürüm renk dolaylamasını kazandı ama künye kümesini
  `id:` ile sınırladı ⇒ **yalnız `harita:` anahtarı olarak var olan
  kimlikleri** (`ceneviz` · `sirbistan` · `sovalye` · `musa-celebi` ·
  `suleyman-celebi`) *"künyesi yok"* saydı.
  ⇒ ***Aynı dolaylama iki eksende de gerekiyordu; biri eklenirken öteki
  düşürüldü.***
  🟢 Yakalayan şey, iki sürümün sayılarını **yan yana koymak** oldu:
  11 → 16 sıçraması bir düzeltmenin yan etkisi olamayacak kadar büyüktü.
  📌 `§11`in *"reçete kendi testini geçmeli"* dersinin **çok eksenli**
  hâli: bir düzeltme yalnız düzelttiği ekseni değil, **dokunduğu bütün
  eksenleri** yeniden ölçmeli.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-olcumun-bir-eksenini-duzeltmek-oteki-eksenini.md`  · 5 Eylül 2026 · kimlik karşılığı ölçümü, iki tur

- 🟢🟢 **BİR MEKANİZMANIN ÇALIŞTIĞINI, ÇALIŞMASAYDI **KIRILACAK OLAN**
  BİR DEĞİŞMEZİN SAĞLAM OLMASIYLA KANITLAMAK — kodu okumaktan güçlüdür.**
  *(5 Eylül 2026 · `harita:` boya düşüşü · `NEHİR SÜRTÜNME`)*
  📌 ①'in zayıflığı: okuduğun kod **çağrılıyor mu**, bilmezsin (bu gece
  bir izdüşümün alanı sessizce attığı ölçülmüştü). ②'nin zayıflığı: şartı
  bulur ama **işlediğini** göstermez. ③ **bütün zinciri** sınar — kodu,
  çağrıyı, veriyi ve çıktıyı birden — çünkü zincirin herhangi bir
  halkası kopsa **değişmez kırılırdı.**
  ⇒ ***Bir mekanizmayı doğrulamanın en ucuz yolu, onun sessizce
  bozulması hâlinde ne olurdu diye sorup, o şeyin OLMADIĞINI
  göstermektir.***
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-mekanizmanin-calistigini-calismasaydi-kirilacak-olan.md`  · 5 Eylül 2026 · `harita:` boya düşüşü · `NEHİR SÜRTÜNME`

- 🔴 **KAPSAYICI MADDE HER ZAMAN EN İYİ ADRES DEĞİLDİR — bazen günü
  KOMŞU ÜLKENİN maddesi verir.** *(5 Eylül 2026 · `kahire f=1798-07-01`)*
  ⇒ Kapsayıcı yetmedi; günü **işgal EDEN tarafın** maddesi verdi.
  📌 `§4`ün *"kapsayıcı madde genellikle YER ya da KİŞİ maddesidir"*
  ölçümüne bir eksen daha: ***bir olayın iki tarafı vardır ve gün,
  olayı KENDİ TARİHİ SAYAN tarafın maddesinde olabilir.*** Bir işgalin
  günü işgal edilenin değil **edenin** kronolojisinde durabiliyor.
  ⇒ Kapı listesine *"olayın ÖTEKİ tarafı"* eklenir.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/kapsayici-madde-her-zaman-en-iyi-adres.md`  · 5 Eylül 2026 · `kahire f=1798-07-01`

- 🟡 **UZUN BİR KOŞUDA DÖRDÜNCÜ SİNYAL: BELLEK SALINIMI — ve sınırı
  ÖNCEDEN yazılmalı.** *(5 Eylül 2026 · koşu 5b, 18. saat)*
  ⇒ Büyük **salınımlar**: art arda tahsis ve serbest bırakma. Sıkı bir
  döngüde dönen bir süreç tipik olarak **düz** bellek gösterir; salınım
  **aşama geçişlerinin** izidir.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/uzun-bir-kosuda-dorduncu-sinyal-bellek-salinimi.md`  · 5 Eylül 2026 · koşu 5b, 18. saat

- 🔴🔴 **HER KAYDI TEK TEK DOĞRU BULAN DENETİMLER, KAYITLAR ARASINDAKİ
  TUTARSIZLIĞI GÖRMEZ — ve toplu bir yama tam o boşlukta kusur üretir.**
  *(5 Eylül 2026 · FAZ 1 · Sarıkamış)*
  ⇒ Dört veri denetimi de kaydı **tek başına** doğru buluyor, ve
  hepsi haklı. Kusur kaydın içinde değil **komşusuyla ilişkisinde**:
  Sarıkamış TBMM oldu, Kars ve Ardahan olmadı.
  📌 ***Veri denetimleri bir kaydı sorgular; KAYITLAR ARASINDAKİ
  tutarsızlığı yalnız GEOMETRİ gördü.***
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/her-kaydi-tek-tek-dogru-bulan-denetimler.md`  · 5 Eylül 2026 · FAZ 1 · Sarıkamış

- 🔴🔴 **BİR ALETİN CEVABI DOĞRU OLABİLİR VE SORDUĞU SORU YETERSİZ
  OLABİLİR — ve bunu ancak İKİNCİ BİR ALET gösterir.**
  *(7 Eylül 2026 · `KADEME-MODEL-0907` · kendi aletini çürüterek)*
  ⇒ ***"Ortak tepesi var" ile "kenarı birebir aynı" AYNI ŞEY DEĞİLDİR.***
  📌 `§11`in *"denetim var ≠ o soruyu soruyor"* ailesinin **yeterlilik**
  yüzü: önceki üyelerde alet yanlış şeyi ölçüyordu ya da hiç ölçmüyordu;
  burada **doğru şeyi ölçüyor ama ölçtüğü şey hükmü taşımıyor.** Bir
  `0`, sorunun kendisi zayıfsa **temiz bir sayı** olarak görünür.
  🟢 Ve yakalayan şey bir denetim değil, aletin sahibinin *"bu sayı
  hükmümü gerçekten kanıtlıyor mu"* diye sorması oldu.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-aletin-cevabi-dogru-olabilir-ve-sordugu.md`  · 7 Eylül 2026 · `KADEME-MODEL-0907` · kendi aletini çürüterek

- 🔴 **BİR LİSTEDE OLMAYAN ŞEY, ELENMİŞ OLANDAN AYIRT EDİLEMEZ — eleme
  GEREKÇESİ ölçülmedikçe.** *(7 Eylül 2026 · `koridor.js` · `YUK-FETCH-0907`)*
  🔴 Ve asıl bulgu `koridor.js`: **listede HİÇ yoktu.** Ölçenin kendi
  cümlesi: *"ölçmeseydim onu «unutulmuş» mu «elenmiş» mi bilemezdim."*
  ⇒ `§11`in *"`0`, «yok» ile «bakmadım» arasında ayrım yapmaz"* dersinin
  **liste** yüzü — ve burada `0` bile yoktu, yalnız bir **yokluk** vardı.
  📌 Bir eleme kararı, **elenenin sayısıyla** yazılırsa bir karar olur;
  yazılmazsa bir sonraki oturum onu bir **boşluk** sanır ve yeniden açar.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-listede-olmayan-sey-elenmis-olandan-ayirt.md`  · 7 Eylül 2026 · `koridor.js` · `YUK-FETCH-0907`

- 🔴 **AYRI BİR REALM'DE KOŞAN VERİDE `instanceof` SESSİZCE FALSE
  DÖNER — ve bu kusuru GERÇEK VERİ GÖSTEREMEZ.**
  *(7 Eylül 2026 · `.js`→`.json` eşdeğerlik sınavı)*
```
vm.createContext        veriyi AYRI bir realm'de koşturur
v instanceof Date       realm'ler arasında FALSE  ⇒ Date kayıtları KAÇIYOR
çare                    Object.prototype.toString.call(v)
```
  🔴 **Ve kusur ancak ZORLANMIŞ bir dalda göründü:** atlas verisinde
  `Date` yok, yani sınav gerçek veriyle sonsuza kadar *"temiz"* derdi.
  Yalnız elle yazılmış bir fikstür (`denetim/_atesleme/kayipli.js`) onu
  ateşledi, ve düzeltmeden sonra GEÇME dalı yeniden koşuldu (yanlış
  pozitif 0).
  📌 `C13`ün **ATEŞLEME** ayağının en temiz kanıtı: ateşleme dalı yalnız
  denetimi sınamıyor — ***denetimin KENDİ kusurunu buldurdu.***
  ⇒ Ve `§11`in *"veriyi kendi dilinin yorumlayıcısına ver"* kuralının
  bir çekincesi doğdu: yorumlayıcıyı **ayrı bir realm'de** çağırmak
  doğru yoldur, ama o realm tip kimliğini kırar. Doğru araç, **yanlış
  varsayımla** kullanılabilir.


- 🟢🟢 **`§7` AD ALANI DERSİ İLK KEZ ÖNLEYİCİ İŞLEDİ — çakışma OLMADAN
  ÖNCE.** *(7 Eylül 2026 · `KADEME-MODEL-0907`)*
  📌 Bu proje `§7`nin *"ayrı dosya vermek ayrı ad alanı vermek değildir"*
  dersini **hep çakışma OLDUKTAN sonra** öğrendi (`KADEME_YAMA`: beş
  dosya tek ad, 537 kayıt 137'ye düştü). Bu ilk kez **önce.**
  🟢 Ve konuşma dili ile makine ad alanı ayrıldı: kalem konuşurken hâlâ
  *"kademe C"*, veride `SINIR_HUKUKI`. ***Bir çakışma makine ad
  alanındadır; konuşma dilini kısıtlamaz.***
  ⚠️ Ve kolları açan sevkin şartı buradan çıktı: **her kola dosya adı ve
  `window` adı BİRLİKTE verilir** — yoksa 14 kol 14 biçim üretir.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/7-ad-alani-dersi-ilk-kez-onleyici.md`  · 7 Eylül 2026 · `KADEME-MODEL-0907`

- 🔴🔴 **UYGULANMAMIŞ BİR YAMA İKİ GEÇERLİ «ŞİMDİ» YARATIR — ve bir sayı
  hangisine ait olduğu yazılmadan taşınırsa İKİ TARAF DA HAKLI ÇIKAR.**
  *(7 Eylül 2026 · `kid` paydası · koordinatör iki kez yanıldı)*
  📌 `§11`in *"sayıyı bilmek, sayının NEYE GÖRE olduğunu bilmek
  değildir"* ailesine **dördüncü eksen: AN.** Öncekiler **birim**
  (km²·dönem) · **alan adı** (`kim` ↔ `kimden`) · **referans** (2014 km
  neye göre) idi.
  ⇒ **KURAL: bir sayı `(disk)` ya da `(yamalı)` damgası taşır.**
  Damgasız bir sayı, uygulanmamış yaması olan her alanda **iki anlama
  gelir** ve okuyan kendi bağlamına göre yorumlar.
  ⚠️ Ve bu, *"çıktı girdinin bir tur gerisindedir"* dersinden farklı:
  orada **gecikme** vardı ve tek bir doğru vardı; burada **iki doğru**
  var ve hangisinin sorulduğu belirtilmemiş.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/uygulanmamis-bir-yama-iki-gecerli-simdi-yaratir.md`  · 7 Eylül 2026 · `kid` paydası · koordinatör iki kez yanıldı

- 🟢🟢 **BİR İŞÇİ, KOORDİNATÖRÜN DÜZELTMESİNE UYMAYARAK HAKLI OLABİLİR —
  ve `§7.1` bunun nasıl olacağını yazmıyordu.** *(aynı vaka)*
  📌 `§7.1` koordinatörün yükümlülüklerini uzun uzun sayıyor (*ses
  yoksa sor · ölü ilan etmeden bak · sorusuna karşılık bir şey
  yaptıysan haber ver*) ama **işçinin bir emri ne zaman
  UYGULAMAYACAĞINI** hiç yazmıyor.
  🟢 **KURAL:** bir sevk ya da düzeltme, işçinin **kendi ölçümüyle**
  çelişiyorsa — uygulanmaz, **ölçüm yazılır ve BİLDİRİLİR.** Bu bir
  itaatsizlik değil `§7.1⑥`nın ta kendisi (*"beklenenden ÇOK farklı bir
  sayı ölçtüysen BEKLETMEDEN bildir"*), yalnız ters yönden okunmuş hâli.
  ⚠️ Şartı: **uymamak sessiz olamaz.** Sessizce farklı bir şey yapmak,
  emri uygulamaktan kötüdür — o zaman koordinatör yanlış bir tabanla
  plan yapmaya devam eder.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-isci-koordinatorun-duzeltmesine-uymayarak-hakli-olab.md`  · künye yok

- 🔴🔴 **BAYATLAYAN BİR BELGE, YALNIZ KENDİSİNİ DEĞİL ONU KOPYALAYAN
  BRİFİNGİ DE BAYATLATIR — ve zinciri kimse izlemez.**
  *(7 Eylül 2026 · `oturumlar/TESPIH.md`)*
  📌 `§1.5`in *"bayat bir tablo bir araştırma oturumunu yanılttı"*
  ailesinin **besleme zinciri** yüzü: orada bayat olan **okunan şeydi**;
  burada **okunanı ÜRETEN şey**, ve o yüzden düzeltmesi de bir kat
  yukarıda.
  ⇒ **KURAL: bir bayat kayıtla karşılaşınca «bu nereden geliyor» diye
  sor.** Bayatlığı her turda yeniden not etmek, onu düzeltmenin yerine
  geçmiyor — ve notun ucuz olması tam da bu yüzden tehlikeli.
  🟢 Somut hâli: **koşu değişince İLK İŞ `TESPIH.md` başlığını
  güncellemektir.**
  > 🔴🔴 **BU DERSİN TEŞHİSİ AYNI GÜN ÇÜRÜDÜ — vaka duruyor, MEKANİZMA
  > yanlıştı.** *(7 Eylül, `CronList` ile ölçüldü)*
  > ```
  > İDDİA ETTİM   "brifing TESPIH.md'nin başlığını KOPYALIYOR"
  > ÖLÇÜM         CronList → fad27fd6 · "Every 20 minutes (recurring)"
  >               brifing bir CRON İŞİNİN DONMUŞ PROMPT METNİ
  > ```
  > ⇒ Metin `TESPIH.md`nin o günkü başlığına **benziyor** çünkü cron
  > kurulurken oradan **bir kez** kopyalanmış — her ateşlemede yeniden
  > okunmuyor. **Korelasyon gerçek, nedensellik yanlış.**
  > 🔴 Ve sonucu pratik: `TESPIH.md`yi tazelemek brifingi **DÜZELTMEZ.**
  > Donmuş bir prompt ancak **yeniden kurularak** düzelir
  > (`CronDelete` + `CronCreate`).
  >
  > 📌 **Ve kusurun ironisi kaydedilmeye değer:** bu dersi yazan cümle
  > *"koordinatör bayatlığı her turda not düştü ama NEREDEN GELDİĞİNİ
  > izlemedi"* diyordu — ve **kendisi de izlemeden bir mekanizma ilan
  > etti.** `§11`in *"ölçüm doğru, çıkarım yanlış"* ailesinin en pahalı
  > hâli: burada çıkarım **doktrine yazıldı.**
  > 🟢 Ayakta kalan: `TESPIH.md` **gerçekten bayattı** ve tazelenmesi
  > **gerekiyordu** — yalnız o, brifingin sebebi değildi.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bayatlayan-bir-belge-yalniz-kendisini-degil-onu.md`  · 7 Eylül 2026 · `oturumlar/TESPIH.md`

- 🟢🟢 **BİR EŞİĞİ SABİT SAYI DEĞİL İLİŞKİ OLARAK YAZMAK, TABAN TAŞIMA
  PROBLEMİNİ YÖNETMEZ — ORTADAN KALDIRIR.**
  *(7 Eylül 2026 · `SINAV-KOSU8-0907`, kendi öngörüsünü kurarken)*
  ⇒ İkisi de *"dikkat edilseydi"* yakalanabilirdi ve **edilmedi.** Bir
  ilişki yazılsaydı yakalanacak bir şey **olmayacaktı.**
  📌 `§11`in *"kural yetmiyor, ALIŞKANLIK gerekiyor"* → *"yeter olan tek
  şey ARACI DEĞİŞTİRMEK"* dizisinin **eşik** üyesi: burada değişen alet
  değil **eşiğin yazım biçimi.**
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-esigi-sabit-sayi-degil-iliski-olarak.md`  · 7 Eylül 2026 · `SINAV-KOSU8-0907`, kendi öngörüsünü kurarken

- 🔴🔴 **PENCERE UCU BİR SORGU GÜNÜ OLARAK KULLANILAMAZ — ve cevabı
  SESSİZDİR.** *(7 Eylül 2026 · `KIMLIK-1923-0907` · çıpa `1923-10-29`)*
  ⇒ ***Çıpa YAZILAN, sorgu günü OKUNANDIR.*** İkisini aynı sayı sanmak,
  3804 noktayı sahipsiz göstermek demek.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/pencere-ucu-bir-sorgu-gunu-olarak-kullanilamaz.md`  · 7 Eylül 2026 · `KIMLIK-1923-0907` · çıpa `1923-10-29`

- 🔴🔴 **BİR DENETİM BİR VERİ DEĞERİNE BAĞLANIRSA, VERİ O DEĞERİ TERK
  ETTİĞİNDE SESSİZCE ÖLÜR — «denetim var ≠ o soruyu soruyor» DEĞİL,
  «denetim VARDI, ARTIK SORMUYOR».**
  *(7 Eylül 2026 · `DEGISMEZ3-0907` · `denetle.py:3424`)*
  🔴 Ve ölümü **sessiz**: dal `else`e düştü, ekrana yeşil bir satır
  bastı, ve o satır bir **başarı** gibi okundu.
  ⇒ ***Sınav bir EŞİĞE değil bir VERİ DEĞERİNE bağlanmıştı*** (`== 0`),
  ve veri o değeri **borç ödendikçe** terk etti. Yani denetim, tam
  **iyileşme başladığında** kör oldu.
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-denetim-bir-veri-degerine-baglanirsa-veri.md`  · 7 Eylül 2026 · `DEGISMEZ3-0907` · `denetle.py:3424`

- 🔴🔴 **BİR KORUMA, ONU UYGULAYAN YAMADA DEĞİL, YAMAYI UYGULAYAN
  ARAÇTA DURMALIDIR.** *(7 Eylül 2026 · `DEGISMEZ3-0907` · `kd` desteği)*
  ⇒ ***Yamada duran koruma O YAMAYA ÖZGÜDÜR, ve bir sonraki yazar onu
  bilmez.*** Mekanik bir yama o dördü ezseydi **ödenmiş bir borç geri
  açılır**, ve kimse bunun bir gerileme olduğunu bilmezdi.
  🟢 Çare: `SKALER_KORUNAN`ın yanına **`DIZI_KORUNAN`** — ve ayrı bir
  küme olması şart, çünkü skaler koruma dize karşılaştırmasıyla
  çalışıyor, `kd` ise bir **dizi.**
  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/bir-koruma-onu-uygulayan-yamada-degil-yamayi.md`  · 7 Eylül 2026 · `DEGISMEZ3-0907` · `kd` desteği
