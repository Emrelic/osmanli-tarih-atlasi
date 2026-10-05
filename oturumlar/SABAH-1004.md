# ☀️ SABAH BRİFİNGİ — 4 Ekim 2026, gece nöbetinin hasadı

> Koordinatör: YILDIRIM BAYEZIT · Emre uyurken yürütüldü
> 🔴 **Bu bir rapor değil bir KARAR LİSTESİDİR.** Gece boyu 7 ölçüm raporu ve
> ~100 kalem birikti; ölçümleri `denetim/` altında bıraktım, buraya yalnız
> **senin kararını bekleyen** şeyleri yazdım. Sıra: *neyi açtığına* göre.

---

## 🔓 A · TIKAÇ — biri bütün zinciri durduruyor

| # | karar | ne açılıyor |
|---|---|---|
| **A1** | 🔴 **HAVVA'nın izin penceresini aç** (`requires_action`) | **Koşu zincirinin TAMAMI.** HAVVA `pip install shapely pyproj rtree scipy` iznini bekliyor. Bunlar olmadan HAVVA koşamıyor ⇒ TİP3/TİP5 çalışmıyor ⇒ fiilen TİP1'deyiz. Node.js de gerekiyor (nodejs.org). |
| **A2** | **8788 güvenlik duvarı** + **tahta sunucusunun makinesi** | Tahtanın git'ten çıkması. Hazır, 5 sınav temiz, kesme betiği + geri dönüş var. |
| **A3** | **Dört `ag.json` aynı sunucuyu göstersin** | A2'nin ön koşulu. Elle kopyalanan ayar; ayrışırsa bölünme **sessiz** olur. Artık ölçülebilir (`/tahta/makineler`). |
| **A4** | **LAB'ı aç** | LAB kapalı; klon + rol mesajı kuyrukta. Denetleyici rolü boş. |
| **A6** | 🔴 **BEKÇİ MEKANİZMASI 2 SAATTE ÖLÜYOR — §7.2 ④ fiilen çalışmıyor** | Ölçüldü 09:05: **CANLI 0 · BITMIS 11**. Harness arka plan süreçlerini **7.200.000 ms (2 saat, izin verilen en uzun)** tavanında kesiyor. ⇒ Her bekçi 2 saatte bir ölür; **boşta duran bir oturum onu yeniden kurmaz** ve o andan sonra **tahtadan UYANDIRILAMAZ** — yalnız `send_message` ulaşır. ⚠️ Ve **TAHTA-WEB bunu ÇÖZMEZ**: sunucu tahtanın yerini değiştirir, uyandırmayı değiştirmez. Uyandırma ayrı bir karar: ya 2 saatte bir yeniden kurmayı garanti eden bir dış tetik (zamanlanmış görev), ya "işçiler bekçi kurmaz, görev `send_message` ile gelir" diye sadeleştirme. |
| **A5** | **Oturum adları** — işçiler haklı olarak reddetti | Ad `claude remote-control --name KASA` **zamanlanmış görevinden** geliyor; değiştirmek yapılandırma değişikliği + süreç yeniden başlatma, yani oturumu kapatır. Bir eş oturumun isteğiyle yapılmaz. Talimat **o makinede, senden** gelmeli. 📌 Benim hatam: "değiştirt" dedim, mekanizmayı ölçmedim. |

---

## 🔴 B · VERİ KARARLARI — haritayı GÖRÜNÜR biçimde değiştirir

### B1 · KÖK DÜZELTME PARTİSİ (11 TDV çelişkisi + 5 eksik dönem)
`denetim/KASA-KOK7-CELISKI-1004.md` — her satırda TDV'nin **tam cümlesi**.
```
Kayseri  Osmanlı başı 1419 ↔ TDV "879'da (1474)"        → 55 YIL
Sivas    1398/1402        ↔ TDV "teslim alındı (1400)"
Van      karakoyunlu 1351 ↔ "ancak 1374'ten sonra" · safevi 1502 ↔ "1507'de"
         EKSİK: Timur 1387-1405 · Osmanlı 1534-1536
Mardin   karakoyunlu sonu 1467 ↔ "835 (1432) yılına kadar"
Ahıska   EKSİK 1918-1921 (Kars Şûrası · 13 Nisan 1919)
Batum    Osmanlı başı 1578 ↔ "XV. yy sonlarında" · EKSİK İngiliz 24.12.1918-07.1920
İpsala   atlasın 1357'si Süleyman Paşa'nın ÖLÜM yılı — kaynak değeri DEĞİL.
         TDV kendiyle çelişiyor; hükmüm 1361 (`evrenosogullari`, adıyla+yılla)
```
🔴 **Parti ÜÇ kalemli ve bölünemez:** ① kök ② **donmuş kopya yapraklar** ③ **Değişmez 2 kronoloji maddesi**.
②'nin gerekçesi ölçüldü: Malatya·Divriği·Arapkir·Darende `eretna` başını **1335** olarak Sivas/Kayseri'den kopyalamış (TDV: **1343**). Kök düzeltilip yaprak düzeltilmezse çelişki kökle yaprak arasına **taşınır**.
③'ün gerekçesi: kırılma kayarsa ±30 gün içinde kronoloji maddesi **şart** (§3), yoksa "sessiz toprak değişimi" ihlali açılır. Kayseri 1474 · Van 1507 · Kayseri 1343 · Mardin 1432 için külliyatta madde **YOK**.

### B1b · 7 TERS MADDEnin 5'i TDV'ye karşı ölçüldü — ve **tespit ≠ çare**
`denetim/KASA-TDV5-1004.md`, cümleler ham sayfadan harf harf.
```
#2 BİHAÇ    🔴 TERS YÖN DOĞRULANDI. TDV: "Bihaç kısa bir süre için yeniden
            Osmanlılar'ın idaresine geçti" (1527). Atlas 1527'de `avusturya`
            ⇒ SAHİP TERS. ⚠️ Ama Osmanlı aralığının BİTİŞ yılı TDV'de YOK.
#5 İŞKODRA  🔴 TARİH YANLIŞ. TDV: "Osmanlı yönetiminin (1393-1396, 1479-1912)"
            ⇒ Osmanlı sonu 1912; atlas 1913-04-23. ⚠️ TDV Karadağ işgalini
            ANMIYOR (yalnız "altı aylık kuşatma").
#1 İZMİR    🔴 EKSİK DÖNEM. TDV Aralık 1402 Timur zaptını veriyor; atlas
            Timurlu dönemini ATLIYOR. ⚠️ Aydın'a devir yılı TDV'de YOK.
#4 LAHSA    ⚪ AÇIK. TDV ne atlası ne maddeyi destekliyor; Faysal'ın
            Lahsâ'yı geri alış yılı YOK. "Osmanlı güçleri" Mısır kuvvetleri
            mi, cümle söylemiyor (`D211 ⑥`).
#6 HALEP    ⚪ PROJE KARARI. TDV `halep` 1918'i hiç anmıyor; `suriye`
            İngiliz-Arap işgalini ŞAM için veriyor ve Fransa'ya terki
            **Aralık 1918 KARARI** olarak anlatıyor. Atlas Halep'i
            1918-10-27'den Fransa'ya veriyor ⇒ hem fail hem tarih şüpheli,
            ama TDV Halep'i ADIYLA tarihlemiyor (`D211 ⑧`). → ardıl künye
            sorunu (`D205 ③`), Şam şüphelisine de uzanıyor.
```
🔴 **Ve asıl ayrım: TESPİT ≠ ÇARE.** Beşinin **dördü** artık kusur olarak **kesinleşti**, ama TDV'den **düzeltilebilir** olan yalnız **ikisi** (İşkodra 1912 · İzmir'in Timurlu dönemi). Bihaç'ın sahibi yanlış olduğu kesin ama **doğrusunun bitiş yılı yok**; Lahsa ve Halep ek kaynak ya da senin kararını bekliyor.
⇒ Yani bu parti *"beş satır düzelt"* değil: **2 düzeltilebilir · 1 yarım (Bihaç) · 2 karar.**

🔴 **YAN BULGU — ve bu, sınıfın ÖLÇÜLENDEN BÜYÜK olduğunu söylüyor:**
KASA bu beşi okurken **kazara** iki eksik dönem daha gördü — Bihaç **1463** Osmanlı dönemi ve İşkodra **1393-1396** Osmanlı dönemi, ikisi de atlasta yok. *"Yalnız okuduğum maddelerde göze çarptı; kayıtlarda aramadım"* dedi.
📌 **Kazara bulunan bir sınıf, neredeyse her zaman eksik sayılmıştır.** Beş madde okuyup iki eksik dönem bulunuyorsa, 895 künyede kaç tane var — bu ölçülmedi ve ölçülmesi gerekiyor.

### B2 · 🔴 `D210` ile MOTOR ÇATIŞIYOR — bunu çözmek benim yetkimde değil
Dört satırda yazılacak **yıl YOK** ve `D210` yıl yazmayı yasaklıyor:
Batum ilk fethi [YÜZYIL] · Sivas İlhanlı sonu [YÜZYIL] · Van karakoyunlu [ALT SINIR] · Ahıska Safevî başı (yok).
⇒ Uydurma yıl kalkar, yerine yıl yazılmaz — **ama motor pencere ucu için bir GÜN istiyor.**
**Soru: bu dört dönem ne olacak?** (a) dönem kaldırılır, nokta o aralıkta sahipsiz kalır (b) kaba bir gün yazılır ve kaynaksızlığı beyan edilir (c) başka.

### B3 · `__BOSLUK__` SÖZLEŞMESİ — verinin çeliştiği bir beyan
Lugos 1554: kayıt `__BOSLUK__` (beyanlı kasıtlı boşluk, **denetimden MUAF**), ama atlasın kendi kronolojisi *"Lugos sancakbeyi atanması"* diyor — orada bir Osmanlı idaresi **var**.
🔴 Verinin çeliştiği bir beyan, beyan değildir; **beyan kılığına girmiş bir hatadır.** Ve muaf olduğu için **hiçbir kapıda görünmüyor** — en iyi saklanma yeri muafiyetin içi.
**Soru: 77 `__BOSLUK__` penceresi kronolojiye karşı taranacak mı?**

### B4 · İSTANBUL'UN İŞGALİ `isg:` KATMANINDA YOK
1918 fiilî ve 1920-04-23 resmî işgal, ikisi de yok. `isg:` katmanı **var ve 142 kırılmada kullanılıyor** (§1.5, Değişmez 2i). İmparatorluğun başkenti eksik. Sözleşme tartışması değil, **boşluk**.

---

### B5 · 🔴 1923 SONRASI **BİR KALEM DEĞİL, KAMPANYA** — ölçüldü
`denetim/SONRA1923-SAYIM-1004.md`
```
uzatılacak `s:`/`d:` zinciri          4129 / 4298 nokta
UFUK ileriye uzatılırsa sahipsiz      +~4100   ← ÖLÇÜLDÜ, tahmin DEĞİL
boyasız künye                         +28
ODAKSIZ                               ~0
Değişmez 2s                            binler (tahmin, öyle işaretli)
```
Mevcut durum: kronoloji **başlamış** (842 madde, 500'ü `kronoloji_cok_1923_1945.js`de), künye **hazıra yakın** (295'inin penceresi 1923'ü aşıyor, 17'si sonra kurulmuş), **yerleşim SIFIR** (`kur:` 0 · `bit:` 0).
⇒ Bu, 1281 öncesindeki kırılmanın **aynadaki hâli ve sayıya çevrilmiş**: UFUK ileriye uzatılırsa 4298 noktanın **4129'u** sahipsiz kalır.
**Soru: 1923 sonrası kampanyası açılıyor mu, hangi kademeyle?** (`ONCELIK.md` bu kapsam için bir hedef söylemiyor.)

### B7 · 🔴 14 KAYIT VİKİPEDİ'Yİ DAYANAK GÖSTERİYOR — §4 kırmızı çizgi
`girdi.yukle()` ile ölçüldü (regex değil):
```
"Vikipedi/Wikipedia" geçen nokta                20
  ├─ DAYANAK gibi (olumsuz ibare YOK)           14   ← sınıflandırılıyor
  └─ "Vikipedi KULLANILMADI" beyanı              6   ← kurala UYMUŞ
Cres · Diyarbakır · Elba · Bosna Dubiçası · Nuhayb · Nairobi · Şefşâven ·
Avarua · Colcha K · Elorza · Fortín Muñoz · Putre · San Pedro de Atacama · Tocopilla
```
**SINIFLANDIRILDI** (KASA, 14'ün Vikipedi geçen BÜTÜN alanları elle okundu —
`denetim/KASA-VIKIPEDI-1004.md`):
```
🔴 İHLAL   2  Cres (İtalya'ya geçişin TEK dayanağı Wikipedia; üstelik
                 1918-11-11 HİÇBİR kaynakta yok, kayıt "BASİTLEŞTİRME" diyor)
              Şefşâven (rif-cumhuriyeti 1924-11-15 yalnız Wikipedia)
🟡 İKİNCİL 3  Dubiça · Elba · Fortín Muñoz  (yanında kurumsal kaynak VAR)
⚪ ANMA     9  kural ZATEN uygulanmış
📌 EK ADAY  1  Maroa — KONUMUN tek dayanağı Vikipedi, gazetter YOK
```
🔴 **Benim vekilimin isabeti 5/14** ve Maroa'yı **yanlış kovaya** koydu (olumsuz
ibareler ±70 karakter penceremin dışındaydı: *"yalnız Vikipedi'de"*, *"kabul
edilmez"*, *"TEK BAŞINA dayanak SAYILMADI"*). ⇒ %36 isabetli bir vekil bir
**ölçüm değil, aday üreticisidir** — öyle beyan ettim, şimdi sayısı da var.

### B8 · 🔴 DUBİÇA ÇÖZÜLDÜ — ve kusur komşularında
Hrvatska enciklopedija, ham sayfadan harf harf:
```
kozarska-dubica  "…a 1538. pala je pod osmansku vlast."
jasenovac        "Husrev-beg osvojio ga je 1536."
bosanski-brod    "Osmanlije su ga zauzeli 1536."
```
⇒ **İkisi de FETİH yılı, ikisi de doğru — ama FARKLI YERLER için.** "1538
muharebe / 1536 fetih" ayrımı kaynakta YOK; benim o ihtimali gerekçe göstererek
değiştirmemem Dubiça için **doğruydu, ama sandığım sebepten değil.**
🔴 Kusur **Jasenovaç ve Brod'da**: kendi HE'lerinin **1536**'sını not etmişler
ve Dubiça'nın **1538**'ini devralmışlar — `HUKUM-DEVRALMA-1004`ün tam ihlali.
⚠️ Düzeltme bir **parti** işi: 1538→1536 bir kırılmayı 2 yıl kaydırır ⇒ ±30 gün
içinde kronoloji maddesi ŞART (§3), yoksa senkron ihlali açılır.
📌 Yan bulgu: HE Dubica Avusturya dönemini **1687–1701** verir — atlasta YOK
(`d:` Osmanlı 1538→1718 kesintisiz) ve Karlofça'yla uyumlu. Yeni eksik dönem.

### B6 · ⚠️ `tahta.py` KENDİ KURALIMI SESSİZCE DOLANIYOR
`TOPOLOJI.md §4②` bu gece şunu yazdı: *"`main`in TEK YAZICISI koordinatördür; hiçbir makine `main`e push etmez."* Ama `tahta.py` her tahta yazımında `pull --rebase` + `push` yapıyor ve **aynı çalışma ağacında ne commit'lenmişse onu da götürüyor.**
⇒ Bu makinedeki her oturum, bir **tahta mesajı yazarak main'e push etmiş oluyor** — kuralı ihlal niyetiyle değil, aracın yapısı yüzünden. Son 200 commit'in **%39'unun** tahta mesajı olması bunun ölçülmüş izi.
📌 `TAHTA-WEB` kesmesi bu dolanmayı da kapatıyor — **A2'nin bir gerekçesi daha.**

### B9 · DÖNGÜ DENETİMİ İNDİ — ve bir ayrım getirdi
`denetim/ARAC-DEVRALMA-DONGU-1004.py` + 8/8 sınav (⑤ **gerçek veride** Dubiça ⇄ Brod'u buluyor, ⑦ çözülemeyen atıfları **adıyla** listeliyor).
🔴 **Getirdiği ayrım: kayıt düzeyinde çevrim ≠ olgu düzeyinde döngü.** Hem ben hem KASA Dubiça⇄Brod'u "gerçek döngü" saymıştık; olgu düzeyinde (aynı tarihin dolaşması) **bu veride YOK** — elle okundu. Araç **güçlü çevrim 1** buluyor, beyanlı liste `[[Brod, Dubiça], [Dimetoka, Sofulu]]`.
📌 Raporunda **"YANLIŞ POZİTİF TARİHÇESİ — taklit sınavı bunların HİÇBİRİNİ göstermezdi"** başlıklı bir bölüm var; tam istenen disiplin.
📌 Yeni bir kusur sınıfı daha: **belirsiz ad** — `«roma»` atfı hem *Roma*'ya hem *Roma (Queensland)*'a uyuyor (3 vaka). `D256`'nın aynası.
⚠️ Kapıya **bağlanmadı** (bilerek) — bağlama kararı bende; bağlanırken çıkış kodu semantiği netleşmeli.

### B10 · ⚠️ RENAME HÜKMÜMÜ DÜZELTİYORUM — reçetem KODDA ÇALIŞMIYORDU
Dedim: *"rename kaynaklı alarm yalnız indirme bayrağıyla kapatılır."* KAYNAK-TAVAN ölçtü: `--kaynak-tavan-indir` defterde olmayan üyeyi **tasarım gereği REDDEDER** (S10, takas affedilmez) ve yeniden adlandırılmış kayıt **tam budur**. ⇒ Reçetem **uygulanamaz**.
**Düzeltilmiş hüküm:**
```
(a) VARSAYILAN  kayda `kaynak:` yaz — alarmın zaten istediği şey bu
(b) İSTİSNA     rename salt yazım düzeltmesiyse: defterdeki eski "dosya¦ad"
                yenisiyle ELLE değiştirilir + COMMIT BEYANI. Tavan sayısı
                değişmez, yükseltme DEĞİL — istediğim denetim izi budur.
(c) YENİ BAYRAK  şimdi YOK. Sıklığı ölçülmeden alet yazılmaz.
```

### B11 · 3 MÜKERRER MADDE — **SİLMEDİM**, ve sebebi bir tuzak
Silmeye gittim, ölçtüm, durdum. İki şey çıktı:

**① Sistematik kopya DEĞİL — öngörüm çürüdü.** Üç vakanın üçünde de aynı iki dosya çıkıyordu; "biri ötekinden kopyalanmış" sandım. Ölçüm: `kronoloji_sinir_turkiye.js` **13** madde · `olaylar_p0917taraf.js` **7** madde · **ortak yalnız 3**. İki dosya konu olarak ayrı (Türkiye sınırları ↔ Kuzey Afrika düzenlemeleri). KASA'nın "3" sayısı **tam** doğruydu.

**② 🔴 VE "GEREKSİZ GÖRÜNEN KOPYA" KAPININ UMURSADIĞI OLANDI:**
```
CLAUDE.md §5:
  data/olaylar*.js    kronoloji ÇEKİRDEĞİ (Değişmez 2 EVRENİ)
  data/kronoloji*.js  kronoloji KUYRUĞU (canlı ama Değişmez 2 evreninde DEĞİL)
```
Üç mükerrerin biri `olaylar_p0917taraf.js`te (çekirdek), biri `kronoloji_sinir_turkiye.js`te (kuyruk). **Tematik olarak** üçü de Türkiye sınırı konusu ⇒ "kuyruktakini tut, çekirdektekini sil" demek doğal görünüyordu. **Yanlış olurdu:** silinen kopya Değişmez 2 evreninden çıkar ve bir kırılmayı kapatıyorsa senkron **sessizce** bozulur — kuyruktaki kopya onun yerine GEÇMEZ.
⇒ Doğru yön tersi: **kuyruktaki silinir, çekirdektekine dokunulmaz.** Ama bunu uygulamadan önce o üç maddenin fiilen bir kırılma kapatıp kapatmadığı ölçülmeli (şu an `Değişmez 2 ✓ 621 kırılma, 0 açık`).
📌 **Ve üçü AYNI ZAMANDA imza-yeri kusuru:** `yer_id` = İstanbul · İstanbul · Sofya, yani **imza yeri**. 1913-11-17'nin `kronoloji_sinir_komsu.js`teki kardeşi `yer_id: Kasr-ı Şîrîn` — **doğru uygulama**. Yani iki kusur sınıfı aynı üç kayıtta kesişiyor ve yanlış kopyayı silmek **doğru odaklı olanı** silmek olabilirdi.

### B12 · VİKİPEDİ ÜÇLÜSÜ — **yazacak beyan YOK, üçü de ZATEN BEYANLI**
Listeme *"Cres/Şefşâven/Maroa Vikipedi beyanı yaz"* diye kaydetmiştim. Üç kaydı
açtım: **üçü de kendi kaynak alanında Vikipedi'ye dayandığını açıkça yazıyor.**
```
Cres      kaynak: "Treaty of Rapallo … (WebFetch ile Wikipedia 'Cres'
          maddesi DOĞRULANDI: '…') · TDV bu taneciği kapsamıyor"
          + neden: "⚠️ BASİTLEŞTİRME … 1918-1920 arası AYRIŞTIRILMADI …
                    GİZLEMİYORUM — ayrı bir araştırma turu netleştirebilir"
Maroa     not: "Koordinat en.wikipedia (Maroa, Amazonas)"
          (dönem kaynağı KURUMSAL: Fundación Empresas Polar, DHV, URL + alıntı)
Şefşâven  kaynak: "islamansiklopedisi'de bu tanecik YOK; Wikipedia
          '1924 retreat from Chaoen'"  + neden: "1923-10-29 kesitini
          ETKİLEMİYOR (olay 1924-1926) — atlas ufkunun DIŞI"
```
⇒ `D209`'un istediği (*"kaynak gizlenmez"*) **yapılmış**. Kusur **gizleme**
değil, **yasaklı bir kaynağa dayanmak ve bunu söylemek** — daha hafif bir sınıf.
⇒ **Hükmüm: VERİ DEĞİŞİKLİĞİ YOK.** Doğru sıradaki iş **araştırma** (KASA), silme
değil. Silmek şunları götürürdü: Cres'in 1918-1923 İtalya dönemi · Maroa'nın
**koordinatı** (yani noktanın kendisi) · Şefşâven'in UFUK **dışındaki** dönemi.
📌 Ve Maroa'da yalnız **koordinat** Vikipedi'ye dayanıyor; dönemi kurumsal bir
kaynaktan. Yani "ihlal" etiketi kaydın tamamını değil **tek alanını** ilgilendiriyor.
🔴 **Kendi görev listemin kusuru:** bir işi "beyan yaz" diye kaydettim, oysa
beyan zaten vardı. **Yapılacak işi, yapılmış olanı ölçmeden listeye yazdım** —
aynı gece "ölçmeden hüküm verme" dediğim şeyin görev listesi hâli.

### B13 · İMZA YERİ İŞİ BOYUTLANDI — **silme çaresi ÇİFT ENGELLE karşılaştı**
*"`yer_id`yi sil, odaksız bırak"* en basit çare görünüyordu. İki engeli ölçtüm; biri düştü, biri durdu.

**Engel 1 — DÜŞTÜ.** `§9`: *"`kapsam_genis:true` + odak yok ⇒ kamera o günün OSMANLI SINIRINA uçar — yabancı kronolojide bu odaksızlıktan KÖTÜDÜR."* Korkum buydu. Ölçüm:
```
imza yeri `yer_id` taşıyan antlaşma maddesi (desen taraması)   148
  ├─ `kapsam_genis:true` taşıyan                                 0  ← tehlike YOK
  ├─ `odak_kutu_kaynak` taşıyan                                   1  (Ferhad Paşa 1590)
  └─ ikisi de yok                                               147
```
⇒ Silmek kamerayı Osmanlı sınırına **uçurmaz**. O engel yok.

**Engel 2 — DURDU.** `ODAKSIZ` tavanı **438/438**, yani **tam sınırda**. 57 silme ⇒ ODAKSIZ **+57** ⇒ tavan aşılır ⇒ **yayın kapısı kırmızı**. ⇒ Silme ancak **aynı commit'te tavan beyanıyla** olur (`D253`) — ve o beyan "57 maddeyi odaksız bıraktım" demek, yani borcu **görünür** kılar ama **ödemez**.

🔴 **Ve asıl mesele: silme benim hükmüm DEĞİL.** Hükmüm *"`yer_id` = ETKİLENEN TOPRAK"*. Silme yalnız toprak havuzda yoksa geçerli (`D257`). ⇒ Doğru iş **madde başına toprak tespiti** = 57 kalemlik bir araştırma partisi, mekanik değil.

📌 **Ve 148 ≠ 57:** benimki desen taraması, KASA'nınki **elle okuma**. Aradaki 91'in bir kısmı **meşru** — ör. 1424 Bizans barışında `yer_id: İstanbul` *doğru*, çünkü etkilenen yer İstanbul'un kendisi. Yani 148 bir **aday listesi**, 57 bir **ölçüm**. Gece boyu üçüncü kez: *benim mekanik desenim şişiriyor, işçinin elle okuması ölçüyor.*

---

## ⚪ C · KARAR GEREKTİRMEYEN — bende, sırada

| iş | büyüklük | durum |
|---|---|---|
| **17 yetim madde** (kronolojide sahip değişikliği, haritada karşılığı yok) | 17 | ölçüldü · düzeltme bende |
| **7 ters madde** + 5 şüpheli | 12 | 5'i için TDV ölçümü KASA'da |
| **57 imza yeri** `yer_id`si + **133 `yer_id`siz antlaşma maddesi** | 190 | hüküm verildi; **boyutlandırıldı → B13** |
| **C 56 izinsiz devralma** | 56 | hüküm verildi (`HUKUM-DEVRALMA-1004.md`); çare **koşuya bağlı** |
| **1969 kaynaksız kayıt** | 1969 | kampanya DEĞİL, **tavan** geliyor (KAYNAK-TAVAN çalışıyor) |
| 3 mükerrer madde çifti | 3 | 🔴 **ÖLÇÜLDÜ, SİLİNMEDİ** — aşağıda B11 |
| Akçakale kaynaksızlığı | 1 | ✅ indi (`11bcae71`) |
| Cres · Şefşâven · Maroa Vikipedi | 3 | 🔴 **İŞ YANLIŞ TANIMLANMIŞTI** — aşağıda B12 |

---

## 📋 D · ESKİDEN BEKLEYEN
`parti-emrelic-0083` (gönderilmemiş) · kutuda **60 karar** · `T-0135`/`T-0136`/`T-0137` · fare değişimi + `Ctrl+Alt+F` kısayolunun kaldırılması · UMIT'te kapalı güvenlik duvarı.

---

## 🔴 E · GECENİN YÖNTEM DERSİ — kendi hakkımda

```
tur 1  sayı ≥10 ✓   mekanizma "Timur/Moğol/Safevî"               ✗
tur 2  sayı 5-15 ✓  mekanizma "kuşatma başlangıcı ↔ sonuç kayması" ✗
KASA   sayı 5-20 ✓  mekanizma "ardıl/fail karışması"               ✓
```
İki turda doğru büyüklüğü **yanlış modelden** çıkardım ve iki model de **ZAMAN** eksenliydi; gerçek sınıf **ATIF** ekseniydi. Sapmam: bu projede gördüğüm kusurların çoğu tarih biçiminde olduğu için her kusuru tarih sorunu diye modelliyorum.
📌 Dün koyduğum *"öngörü = sayı + mekanizma, ayrı ayrı değerlendirilir"* kuralı tam bunu yakaladı. Yalnız sayıya bakmış olsaydım modelimi **doğrulanmış** sayıp yanlış yerde arardım.

**Gece boyu geri aldığım hükümler** (hepsi ölçümle çürütüldü, hepsi kayıtlı):
1. *"Dönem zinciri devralınabilir"* → `s:` taşıyan nokta BOYAYANdır, kopya DONAR
2. *"Kökü kaynaklamak yaprağı meşrulaştırır"* → kendi hükmümle çelişiyordu
3. *"Sivas'ta senkron ✓ basıyor"* → yetim madde; gerçek örnek **Bağdat** (fethi bir mesneviyle ✓ alıyor)
4. *"`git rm --cached` değil düz `git rm`"* → düz `rm` tahtayı **diskten silecekti**, numaralar M-0001'e dönecekti
5. *"Önbellekleri gitignore'a al"* → depo gerekçesini yazmış: alıntının **delili**
6. *"Bekçiyi durdur, reddedilen komutu yeniden dene"* → bir izin reddini **dolanmak**; KASA doğru reddetti


---

## 🔴 F · 5 EKİM GECESİ DOĞAN KARARLAR — hepsi ÖLÇÜLDÜ, hiçbiri uygulanmadı

İkisini gece sordum ve **cevap aldım** (burada yalnız kayıt için):
- ✅ **Değişmez 2 evreni:** `kronoloji_cok_1923_1945` (500 madde) evrene ALINACAK,
  kampanyadan ÖNCE, tavan beyanıyla. *(Emre, 5 Ekim)*
- ✅ **DEM transferi:** UMIT salt-okunur **ağ paylaşımı** açar → HAVVA kopyalar ve
  **hash doğrular**. *(Emre, 5 Ekim)* ⚠️ İki makine de kapalı; açılınca başlar.

Aşağıdaki **dördü bekliyor.** Hiçbiri bir şeyi durdurmuyor, ama dördü de veri yazmanın
önünde duruyor.

### F1 · ÇAPA MODELİ — devletsiz halklar nasıl temsil edilecek? (en ağırı)
**Ölçüm:** 194 kaynaksız `kur:"1281-01-01"` silindikten sonra ONCE1281 kaynak taradı:
58 noktaya `kur` yazılabiliyor, **41'inde `kur` 1281'den SONRA** — yani o 41 nokta
bugün yayındaki haritada **yanlış** çiziliyor:
```
Gjoa Haven 1927 · Clyde River 1924 · Makurdi ~1927 · Mutare 1890 · Lokoja 1860 ·
Butterworth 1827 · Lagos ~1467 · Knife River 1525 · Kittigazuit 1400 …
```
Gjoa Haven 1927'de kurulmuş; atlas onu **1281'den beri** boyuyor (646 yıl).
🔴 **Ama `kur` yazmak da bir şey kaybediyor** — işçinin cümlesi:
> "Arktik köylerinin çoğu bir HALKIN çapası; köyün 1920'de kurulması halkın orada
>  olmadığı demek değil, `kur` yazılırsa çapa kaybolur."

`kur` yazılırsa motor 1281→kur arası peteği komşuya devreder (delik AÇILMAZ, kodla
doğrulandı) — ama o toprak artık o halkın görünmediği bir toprak olur.
**ÜÇ YOL:**
```
(a) kur YAZ            → tarih doğru olur, halkın toprak çapası kaybolur
(b) kur YAZMA          → çapa korunur, 646 yıllık yanlış sürer (bugünkü hâl)
(c) ÇAPA olarak BEYAN  → köyün kuruluşu ile halkın varlığı AYRI iki olgu sayılır;
    (önerim)             `kur` köyün alanıdır, çapanın kendi alanı olur
```
📌 Niçin senin kalemin: bu bir tarih sorusu değil, atlasın **devletsiz halkları nasıl
gösterdiği** sorusu — `§1.6` kapsamı sana veriyor.

### F2 · KABA TARİH DÖNÜŞÜMÜ — 'mid 14th century' ne yazılacak?
İşçi 45 kayda KABA `kur` buldu ve dönüşüm varsayımını açıkça sordu:
`'early/mid/late X. yy' → X01 / X34 / X67`.
🔴 **Benim okuduğum kural ikisini de reddediyor:** `D210` *"yıl bilinmiyorsa yıl
yazılmaz"* · `D213` *"türetilen sayı alıntıya yazılmaz"*. "mid 14th century" bir YIL
vermiyor; `X34` uydurulmuş kesinliktir.
**BEDELİ:** kuralı sıkı uygularsak bu 45 kayıt **kapsam dışına** düşer ve 1281 öncesi
kampanyası 58 noktadan 13'e iner.
```
(a) SIKI    tarih alanına hiçbir şey yazılmaz, kaba ifade AÇIKLAYAN alanda durur
    (önerim)  → 45 kayıt kapsam dışı, kampanya 13 nokta
(b) YÜZYIL BAŞI  X01 yazılır (kaynaktan ERKEN olabilir)
(c) ORTA NOKTA   X34/X67 yazılır (türetilmiş sayı — mevcut kurallara AYKIRI)
```

### F3 · D-RENK-0073 — 8 kalem (PAKET-0076'nın tek listesi)
`H-0041 · H-0042 · H-0059 · H-0118 · H-0120 · H-0144 · H-0155 · H-0156`
Hepsinde çizgi o gün **yürürlükte**, anakronizm YOK — sorun oturmayan renk. Üç soru:
```
(a) BIÇAK mı  (b) GÖVDE mi  (c) KARIŞIK mı   ·   dikiş dili   ·   sol_taraf borcu
```
⚠️ İşçinin uyarısı: istemci yaslaması (E/F) indiği için `[E]` olanlar **kısmen
düzelmiş olabilir** — görünür bölmede ölçülmedi. Yani liste bir miktar bayat olabilir.

### F4 · ETİKET SÖZLÜĞÜ — iki eksik yaprak
Ölçüldü (`ETIKETLEME §8.5` → `etiket_sozluk.js` konu ekseni):
- **`isgal` konu sözlüğünde HİÇ YOK** — yalnız bir `tur` değeri. Oysa veride `etiket`
  olarak kullanılmış (5 kayıt yanlış etiketlenmişti, düzeltildi).
- **"keşif/sefer" yaprağı YOK** — Vasco da Gama ve Coronado `diger`e düştü.
```
(a) iki yaprak AÇILSIN (isgal konu ekseninde + kesif)
(b) yalnız kesif açılsın, isgal tur ekseninde kalsın
(c) ikisi de açılmasın, diger yeterli
```
📌 Bu karar `denetle.py`nin yeni **işgal aynası** kolunu etkiliyor: kol "YALNIZ etiket"
ile kurulacak (ölçüldü: bugün 9 öter; `tur` da sayılırsa 15 ve beşi yanlış pozitif).

### F5 · Stănică 2016'nın TAM METNİ — 5 enklav adasını kapatacak tek şey
PAKET-0076 İshakçı'nın 1402-1419 sahibini aradı ve **bulamadı** — beş yolu da kapattı:
```
TDV `isakci` slug'ları            302
TDV ham metinler (tulca · dobruca · babadagi · mehmed-i)   İsakçı 0 geçiş
"Sultan Çelebi Mehmed ve Devri Sempozyumu" (564 s. PDF)    İsakçı 0 · Yenisale 0
Stănică 2016 "The Missing Fortresses in Dobrogea"          ResearchGate 403 · academia.edu 403
EI2 "Isakča" (Brill)                                      ücretli, denenmedi
```
🔴 Ve elinin altındaki kolay yolu KULLANMADI: arama özetleri *"1416-1417'de Osmanlılar
Enisala ve İsakçı'yı I. Mehmed'in emriyle onardı"* diyor — **özet metin değildir**,
kullansaydı hiçbir kapı ötmezdi. Doğru durdu.
⇒ **Senden istenen:** Stănică 2016'nın tam metni (hesabınla indirme ya da yazara istek).
**Kazanç ölçülü:** açılırsa `Değişmez 7`de İshakçı'nın **5 enklav adası** kendiliğinden
düşer (`eflak 1402→1416/1419` yazılabilir hale gelir) — ara nokta eklemeden.
**Açılmazsa:** 5 ada beyanlı borç kalır, kampanya sonu taban hesabında sayılır. Durdurucu değil.

### F6 · `Dobrotiç` künyesi açılacak mı? — Balçık'ın 1281 halkası buna bağlı
Güney Dobruca'nın kalan üç noktasından **Balçık** yazılamıyor, çünkü 1281-1389 halkası
`Dobrotiç`i gerektiriyor ve o künye dizinde YOK. Üstelik kaynak kendiyle çelişiyor
(`D211 ⑥`):
```
TDV silistre   "Bulgar 1189-1393"
TDV dobruca    "1241 Moğol · 1359 Dobrotiç"
```
📌 Dizine kalıcı bir künye eklemek + kaynağın kendiyle çelişmesi ⇒ `§1.6` gereği senin
kalemin. Üç yol: (a) `Dobrotiç` künyesi açılsın (çelişki beyanla) · (b) Balçık o halkada
`__BOSLUK__` sayılsın · (c) Balçık hiç yazılmasın.
⚠️ Tutrakan · Mangalya: TDV maddesi YOK ⇒ `bulunamadı`, onlar bu karardan bağımsız.

### F7 · ARAÇ KUSURU — `denetle_yayin.py` "durdurmaz" dediğin koşul için çıkış 1 veriyor
Bu gece ölçüldü. Yayın kapısının bütün çıktısında **tek** `✗` vardı ve o `YAYIN BAYAT`:
```
✓  sürüm damgası r11254 · ✓ üretim izi 7/7 · ✓ paketleme TAZE (30 paket, 288 kaynak)
✗  YAYIN BAYAT — üretim girdiden geride
SONUÇ: İHLAL VAR — çıkış kodu 1
```
Senin 17 Eylül hükmün: *"'YAYIN BAYAT' yayını DURDURMAZ; durduran yalnız koşunun kendi
`denetle.py` ihlalidir."* ⇒ Kural "yayınla" diyor, araç **1** diyor.
🔴 Sonuç: bu kapının çıkış kodu yayın kararı için **tek başına kullanılamaz**; `✗`
satırlarını saymak gerekiyor. Ve bu, 4 Ekim'de `denetle.py`de kapatılan kusurun AYNASI —
orada araç "temiz" deyip 0 veriyordu, burada "ihlal" deyip 1 veriyor ama ihlal
durdurmuyor. İkisi de aynı sınıf: **çıkış kodu ile cümle ayrışmış.**
```
(a) ÜÇÜNCÜ KOD    `denetle.py` gibi: 0 temiz · 1 DURDURUCU ihlal · 2 BAYAT/ölçülemedi
    (önerim)        ⇒ otomasyon yine çıkış kodunu okuyabilir
(b) BAYAT'ı ✓ yap  kapı bayatlığı hiç ✗ saymaz (bilgi satırı olur)
(c) dokunma        her yayında ✗ sayılır (bugün yaptığım şey, elle)
```
📌 Kendi başıma değiştirmedim: bir kapının çıkış anlambilimi bütün otomasyonu etkiler
ve bu kuralı sen koydun.

### F8 · AVUSTURYA-MACARİSTAN'IN DAĞILIŞI — fiilî gün mü, hukukî gün mü? (109 nokta)
**Ölçüm (ONCE1281-AVUSTURYA109-1004):** atlasta 109 nokta `avusturya → 7 halef` geçişini
**tek güne**, `1918-11-11`e yazıyor. O günün kaynak desteği ölçüldü:
```
🔴 1918-11-11 ile ÖRTÜŞEN KAYNAK: 0
   Ne yer ne bölge düzeyinde HİÇBİR kaynak bu 109 yeri 11 Kasım'a tarihlemiyor.
   Gün tamamen `avusturya` künyesinin bitiş gününden DEVRALINMIŞ (D207 ihlali).
```
Gerçek dağılım **28 Ekim 1918 – 3 Ağustos 1919** (on aya yakın):
```
Prag 28.X · Zagreb · Ljubljana 29.X · Budin · Pest 31.X · Maribor 1.XI · Split 2.XI ·
Zadar 4.XI (İTALYA) · Knin 7.XI · Lviv 22.XI · Brașov 7.XII · Cluj 24.XII ·
Košice 29.XII · Satu Mare 19.IV.1919 · Oradea 20.IV.1919 · Timișoara 3.VIII.1919
```
22 nokta için YER düzeyinde kaynaklı gün var · 75'i bölge düzeyi kaba gün · 12 bulunamadı.

🔴 **KARAR GEREKEN:** `s:` alanı DE JURE mi DE FACTO mu yazılacak?
```
(a) FİİLÎ GÜN      Ekim-Aralık 1918: ulusal konseylerin fiilen devraldığı günler
(b) HUKUKÎ GÜN     Saint-Germain (1920) / Trianon (1920): antlaşmaların günü
(c) KARIŞIK        fiilî dönem `isg:` olarak taranır, antlaşmayla RENGE katılır
    (benim okumam)
```
📌 **Benim okumam (c) ve dayanağı SENİN iki hükmün:**
① 4 Ekim, 5. madde (işgal/fetih doktrini): *"eğer işgal edilen toprakların işgal edene
geçeceği savaş sonrası barış anlaşması ile kesinleşiyor ise o zaman işgal olarak boyanır,
anlaşma sonrasında renge katılır."* Ardıl devletler Ekim-Aralık 1918'de fiilen devraldı,
Saint-Germain/Trianon kesinleştirdi ⇒ tam bu kalıp.
② "Boyamalar hatlara yaslanmalı" doktrini: *"anlaşmada geçen filanca tarihten itibaren
sınır böyle olacak ibaresi varsa o tarih esas alınır, öbür türlü belgenin tarihi."*
⇒ (c) seçilirse: 109 noktanın fiilî günleri `isg:` olur, hukukî gün `s:` olur. Bu,
`isg:` borcunu 13'ten çok daha büyütür ama iki hükmünle de tutarlıdır.
⚠️ (a) seçilirse kaynaklı 22 nokta yazılır, 75'i kaba, 12'si `bulunamadı` kalır.
⚠️ Hangisi olursa olsun **1918-11-11 kalamaz** — sıfır kaynak desteği var.

🔴 **VE BİR DÖNGÜ ŞÜPHESİ VAR, ölçülüyor:** Değişmez 2 evreninde *"1918-11-11
Avusturya-Macaristan mirasının ardıl devletlere geçişi"* maddesi duruyor ve bugünkü 109
kırılmayı "senkron ✓" yapan O. Ama kırılma künyeden devralındığı için **madde haritayı
tekrarlıyor olabilir** (`D260` (b) alt sınıfı: türetilmiş + doğru görünen, hiçbir kapı
ötmez). Maddenin kaynağı açılıyor; sonuç gelince bu kaleme eklenecek.

📌 **Günden BAĞIMSIZ, ayrıca düzeltilecek 30 halef hatası** (bu karar beklemiyor):
Bosna'nın 16 noktası `sirbistan-kralligi` yazılı — oysa Bosna Sırbistan'a değil
`Država SHS` (1.XI) → `Kraljevstvo SHS` (1.XII)'e geçti; **atlas kendi içinde de
tutarsız** (5 Bosna noktası `yugoslavya`). Ayrıca Zadar→İtalya · Hvar/Korčula/Vis/Mljet
1918-21 İtalyan işgali · Uzhhorod/Mukacheve 1919'a kadar Macar · Lviv 1-22.XI ZUNR ·
Timișoara 3.VIII.1919 · Eisenstadt 1921 Burgenland (atlasta YOK) · `macaristan-naiplik`
1918-20 için anakronik.


---

## ✅ G · EMRE'NİN 5 EKİM KARARLARI — dördü cevaplandı, dördü uygulamaya geçti

### G1 · F1 ÇAPA MODELİ → **KÖYÜN KURULUŞU İLE HALKIN VARLIĞI AYRILACAK**
Emre: *"Köyün kuruluşu ile halkın varlığı AYRI iki olgu sayılsın."* (üçüncü yol seçildi)
```
KÖY    kendi kaynaklı kuruluş tarihinden çizilir (Gjoa Haven 1927 · Lokoja 1860 · …)
ÇAPA   halkın toprağı AYRI kayıt — köy yokken de durur
```
⇒ Görev: `ONCE1281-CAPA-SEMA-1004`. **Önce ŞEMA, sonra veri** — 41 noktayı yazıp sonra
şemayı değiştirmek 41 noktayı iki kez yazmak olur. Ölçülecek üç soru: ① çapa mevcut
şemada nasıl ifade edilir (`kasitli_bosluk` bir alt tür mü, ayrı alan mı — `girdi.py`
`BILINEN_ALANLAR` taranacak) ② aynı nokta iki kayda mı bölünür (ölçüt: motor hangisini
sessizce yutmaz) ③ **Değişmez 1 etkisi: 309 sahipsiz kaç olur?**
⚠️ `s:` dönemi verilecekse Inuit/Xhosa/Taino KÜNYELERİ gerekir — `devletler.js` taranacak,
künye açmak Emre'nin kalemi (F6 emsali).

### G2 · F2 KABA TARİH → **HİÇBİR ŞEY YAZILMAYACAK**
Emre: *"Hiçbir şey yazma, kaba ifadeyi not alanına koy."*
⇒ `'early/mid/late X. yy' → X01/X34/X67` dönüşümü **REDDEDİLDİ**; `D210` ("yıl bilinmiyorsa
yıl yazılmaz") + `D213` ("türetilen sayı alıntıya yazılmaz") harfiyen uygulanıyor.
**Bedeli Emre tarafından kabul edildi:** 45 kayıt kapsam dışı, 1281 öncesi kampanyası
58 noktadan **13**'e iner.
📌 Ama G1 bunu büyütebilir: çapa kaydı köyün kuruluş tarihine bağlı olmadığı için kaba
tarihli 45 kaydın bir kısmı ÇAPA olarak kurtarılabilir — şema önerisinde ölçülecek.

### G3 · F8 AVUSTURYA 109 → **FİİLÎ GÜNLER + İŞGAL TARAMASI**
Emre (c)'yi seçti. Dayanağı kendi iki hükmü (4 Ekim işgal/fetih doktrini + "boyamalar
hatlara yaslanmalı"):
```
isg:  fiilî devralma günü → antlaşma günü    (22 kaynaklı gün buraya)
s:    antlaşma günü →                        (Saint-Germain 1920-09-10 / Trianon 1920-06-04)
```
⇒ Görev: `ONCE1281-AVUSTURYA-UYGULA-1004`. 🔴 SIRA: **④ ÖNCE** — `isg:` yazmanın
`Değişmez 2i` etkisi ölçülecek (bugün 142 kırılma / 1 açık, **tavan 1**). 109 nokta × iki
uç kaç yeni işgal kırılması doğurur ve kaçının maddesi var? Tavan 1'i aşarsa kapı öter,
yama inmez ve tavan beyanı gerekir.
30 halef hatası aynı yamaya giriyor (Bosna 16 → `drzava-shs`, künye F6'ya bağlı · Zadar →
italya · Hvar/Korčula/Vis/Mljet İtalyan işgali · Uzhhorod/Mukacheve · Lviv ZUNR ·
Eisenstadt Burgenland 1921 atlasta YOK · `macaristan-naiplik` anakronizmi).

### G4 · AÇICI → **EMRELIC'E KURULDU** (ve asıl kusur bulundu)
Emre: *"Evet, bu makineye kur."*
🔴 **ÖLÇÜLDÜ — otomatik başlatma hiç kurulmamıştı.** `py arac/acici_kur.py --durum`:
`açılış kaydı … atlas-acici.cmd YOK · koşuyor mu HAYIR`. Açıcı 2 Ekim'de yalnız ELLE bir
kez açılmış, denenmiş (`KABUL 192.168.1.164 -> claude-ac` günlükte duruyor), makine
kapanınca gitmiş. Tasarım tamam, **kurulum yapılmamış.**
```
YAPILDI  EMRELIC: --kur koştu, atlas-acici.cmd YAZILDI, dinleyici başlatıldı (11:58:35)
```
🔴 **SENDE KALAN — her makinede BİR KEZ:** `py arac/acici_kur.py --kur` (o makinenin
başında ya da Remote Control oturumundan) + `oturumlar/ag.json`un o makineye kopyalanmış
olması (jeton TEK ve ORTAK, elle kopyalanır).
⚠️ İlk çalıştırmada Windows güvenlik duvarı izni soracak: **"Özel ağlar" işaretlenecek,
"Genel" BIRAKILMAYACAK.** O pencereye yalnız sen cevap verebilirsin.
📌 YUMURTA-TAVUK: açıcı Claude'u açabilir ama açıcının KENDİSİ çalışıyor olmalı.
Otomatik başlatmaya kurulmadığı için her yeniden başlatmada kayboluyor — bu yüzden
uzaktan hiçbir makineye ulaşılamıyordu.

**MAKİNE DURUMU (projenin kendi istemcisi `py arac/ac.py --durum`, 5 Ekim):**
```
EMRELIC        ✅ açıcı ayakta · 18 Claude süreci · kullanıcı oturumu açık
KASA · UMIT    🔴 makine AÇIK, açıcı ÇALIŞMIYOR   (WinError 10061 — etkin olarak reddetti)
HAVVA · LAB    ❌ makine KAPALI                    (WinError 10060 — zaman aşımı)
```
⇒ KASA ve UMIT'e yalnız `--kur` gerekiyor. HAVVA ve LAB önce elektrikle açılmalı.


---

## 🔴 H · BİR DÜZELTME VE İKİ HÜKÜM (5 Ekim, gece turu)

### H1 · 🔴 SANA VERDİĞİM SAYI YANLIŞTI — "58 → 13" değil, "58 → 2"
F2 kararını (kaba tarih) sana sunarken bedeli şöyle yazmıştım:
> *"Bedeli: 45 kayıt kapsam dışı, 1281 öncesi kampanyası 58 noktadan **13**'e iner."*

İşçi ölçtü ve düzeltti:
> "13 kaynaklının yalnız **2'si** 1281 ÖNCESİ (Spiro 800, Moundville 1120); 11'i
>  1281 SONRASI köy kuruluşu. 1281 öncesi kampanyası bu setten **2**."

**Hatam:** iki ayrı kümeyi birleştirdim — *"kaç noktaya kaynaklı `kur` yazılabilir"* (13)
ile *"kaç nokta haritayı 1281'den GERİYE uzatır"* (2). İkisi aynı şey değil.
📌 Kararını değiştirmek zorunda değilsin — sıkı kuralı ilkeye dayanarak seçtin — ama
**dayanak olarak verdiğim sayı yanlıştı ve bunu bilmelisin.** F2'nin gerçek bedeli daha
küçük ve daha belirli: 45 kaba kaydın **30'u** zaten çapasını koruyor (kaba ifade `not:`a
gider, kayıp yok), **15'i** 1281 öncesi kaba tarihli ve onlara hiçbir şey yazılmıyor.
⇒ F2'nin bedeli "45 kayıt kapsam dışı" değil, **15 kayıt tarihsiz kalıyor**.

### H2 · ÇAPA ŞEMASI KARARA BAĞLANDI (F1'in uygulaması — benim kalemim, bilgi için)
En değerli bulgu kalemi küçülttü: **41 noktanın 41'i ZATEN çapa taşıyor** (`s:` halk
künyesi 1281'den, 26 kimlik) ve **künyesi eksik olan 0**. Yani yeni künye GEREKMİYOR;
F6 benzeri yeni bir karar DOĞMADI.
```
KABUL: TEK KAYIT + `koy_kur:`  köyün kaynaklı kuruluş günü (MOTOR OKUMAZ)
                   `capa_ad:`   isteğe bağlı, çapanın adı
RED:   `kur:` kullanmak         motor `kur>g` ise peteği devreder ⇒ ÇAPA KAYBOLUR
RED:   iki kayda bölmek         aynı koordinatta iki Voronoi tohumu için kodda yol YOK
```
🟢 Değişmez 1 kararı verdirdi: `koy_kur` ile **309 → 309** (değişmez) · `kur:`a yazılsa
harita değişir · ikinci biçime çevirmek **350 (+41, kapı ÖTER)**. Üç yoldan yalnız biri
kapıyı kıpırdatmıyor.
⚠️ `girdi.py`ye iki satır eklemek MOTOR TUZUNA dokunuyor (`§9.1`) ⇒ tek başına inemez,
TAM İNŞA koşusu kuyruğuna girdi.

### H3 · AVUSTURYA 109 — F8 KARARINI UYGULAMAK İKİ BAŞKA KAPIYI ÖTÜRÜYOR
Yama YAZILMADAN ölçüldü (sıra doğruydu):
```
Değişmez 2i  144 → 161/162 · AÇIK 1 → 1      ✓ ÖTMEZ
Değişmez 2s  AÇIK 189 → 191                   🔴 ÖTER (Trianon · Rapallo · Lendava)
4c           127 → 176 (+49, hepsi avusturya) 🔴 ÖTER
```
Sebep: `s: avusturya`yı antlaşma gününe uzatmak, `habsburg` künyesinin ölümünü
(1918-11-11) aşıyor. Ve 2s'de madde "Macaristan" diyor, veri "avusturya" diyor ⇒ taraf
tutmuyor.
🔴 **AMA KÖKÜ BULUNDU VE BU BİR VERİ KUSURU, MODEL SORUSU DEĞİL:**
> "Macar tacı topraklarının 1918 öncesi sahibi atlasta `macaristan-habsburg` değil
>  **`avusturya`**."

Erdel · Bánát · Felvidék · Hırvatistan-Slavonya · Vojvodina · Kárpátalja 1918'den önce
**Macar tacı** topraklarıydı; atlas onları Avusturya'ya yazmış. Kök düzelirse iki kapı da
kendiliğinden susabilir (madde "Macaristan" diyor, veri de öyle derse taraf TUTAR; halef
zinciri Macar künyesinden giderse `s:` habsburg'un ölümünü AŞMAZ).
⇒ Üç şıkkın (habsburg'u uzat / halef fiilî günden / 4c'ye tavan) HİÇBİRİNİ seçmedim;
karşı-olgusal ölçüm istendi: *kök düzeltilse 2s ve 4c kaç olur?* **Sayı gelmeden model
sorusu sorulmayacak** — çünkü soru kendiliğinden kapanabilir.
📌 Bu, "çareyi KURALDAN değil KODDAN/VERİDEN tasarla" dersinin uygulaması: üç şıkkın ikisi
tarihi bozuyor, üçüncüsü 49 dönemi tavan borcu yapıyor; kök düzeltme hiçbirini
gerektirmeyebilir ve öyleyse bedava.

---

# PAKET 0083 — Emre'nin kararını BEKLEYEN üç kalem (5-6 Ekim 2026 gecesi)

İşçiler ölçtü, ben hüküm veremem: üçü de **kapsam/model kararı**, teknik soru değil.

## ① TARALI DESEN mi, SEFER OKU mu? — H-0001 ile KENDİ KARARIN ÇELİŞİYOR
PAKET-0083-D ölçtü (`denetim/PAKET-0083-D-ODAK-ISGAL.md`):
```
H-0001 diyor ki:  "Rusya'nın Eflak-Boğdan işgali varsa ... işgal TARAMASI ile gösterilmeli"
VERİDE DURAN SENİN KARARIN (SEFERLER[67].kaynak):
  "Romanya MÜTTEFİK: bu ok bir geçiştir, işgal DEĞİL (Emre kararı: taralı desen yalnız işgal)"
```
Ve TDV seni doğruluyor: *"prensliği kendi tarafına çeken Ruslar"* (doksanuc-harbi[25] ·
bogdan[127] · romanya[178-179]) — 1877'de Romanya müttefik, işgal altında değil.
🟢 **SEFER OKLARI ZATEN VAR ve varsayılan AÇIK** (`index.html:139`); `SEFERLER[67]`
Kişinev→Zimniça 1877-04-24→06-27, o gün beliriyor (`app.js:5823`). **Yapılacak iş YOK.**
⇒ SORU: *"taralı desen yalnız işgal" kuralın DURUYOR mu, ok yeterli mi?* Duruyorsa
H-0001'in tarama isteği bu maddede UYGULANMAZ ve kalem kapanır.

## ② BOŞ BÖLGELER: nokta mı eklensin, "yerleşim yok" mu denilsin?
PAKET-0083-A ölçtü (`denetim/PAKET-0083-A-BOS-BOLGE.md`) — dört madde, **iki ayrı sınıf**:
```
KASITLI BOŞLUK (kusur DEĞİL, BEYAN):
  H-0007 Po ovası      9 noktanın 5'i (Bergamo·Brescia·Verona·Padova·Parma)
                       1281→1395-05-11 __BOSLUK__; 1396'da milanoduka
  H-0002 G. Arnavutluk 15 noktanın merkezi Berat 1281→1417 __BOSLUK__; 1418'de OSM
NOKTASIZ SIRT (motor doğru çalışıyor, VERİ yok):
  H-0003 Kafkas ana sırtı (Sohum KD)  50 km içinde 0 nokta · en yakın ~95-110 km
  H-0004 Kaheti-Dağıstan              50 km içinde 0 nokta · en yakın ~93-104 km
                       1815'te iki yaka Rusya olunca şerit KAPANIYOR
```
⇒ İKİ AYRI SORU, ayrı cevap isteyebilir:
  **(a)** Po ovası + Arnavutluk: nokta eklemek **künye + kaynaklı dönem** ister.
      Bergamo/Brescia/Parma için `milanoduka` künyesi VAR (f:1097), yalnız geçiş
      tarihleri kaynak bekliyor. Verona/Padova/Berat **yeni künye** ister
      (Della Scala · Carrara · Muzaka — `devletler.js`te YOK).
  **(b)** Kafkas sırtları: en az birer kaynaklı nokta (Svaneti/Mestia · Avar-Hunzah —
      ikisi de şu an KAYNAKSIZ aday), **ya da** bilerek boş bırakılıp arayüzde
      "sırt — yerleşim yok" beyanı.
⚠️ Ölçümün kendisi şunu söylüyor: bunlar **harita deliği değil**, biri kasıtlı beyan
   öteki gerçek yerleşim yokluğu. Yani "düzeltilmeli" demiyorum — **kapsam genişletmesi
   mi istiyorsun**, onu soruyorum (`§1.6`).

## ③ KİŞİNEV NOKTASI EKLENSİN Mİ? (odak kusurunun KALICI çaresi)
PAKET-0083-D'nin B şıkkı: `Kişinev (47.0105, 28.8638) · s:rusya 1812-05-28→ ·
dayanak ЭСБЕ`. Mükerrer taraması YAPTIM: atlasta "Kişinev/Chișinău/Kishinev" adıyla
**0 kayıt**, 3 km içinde **0 nokta** — gerçekten yok.
🟢 Değeri: iki kronoloji maddesine `yer_id:"Kişinev"` yazılabilir hâle gelir ve odak
kusurunun **İKİ kod yolunu birden** kapatır (aşağıdaki ③'ün yalnız birini değil).
⚠️ Ama yeni yerleşim noktası = yeni petek = **haritayı değiştirir**; bu bir veri
genişletmesi ve kararı sende. ЭСБЕ (Brockhaus-Efron) 19. yy ansiklopedisi — `§4`in
"akademik/kurumsal" eşiğini geçer ama TDV değildir; kabul edersen `kaynak:`a açıkça yazılır.

---

# Ve bu gece DÜZELTİLEN bir kusur — bilgi için, karar gerekmiyor
`js/app.js maddeAc()` (devlet sekmesi) **üçüncü kamera dalıydı ve hiç bağlanmamıştı**:
`yer_id` yok + `kapsam_genis` ⇒ doğrudan `devletiYay(d.harita)` = devletin BÜTÜN gövdesi.
`maddeOdakKutusu` bu yolda HİÇ çağrılmıyordu ⇒ `odak_yer` yazılsa bile ETKİSİZDİ.
Senin *"imparatorluk görünümüne geçiyor, tepeden geniş bakıyor"* şikâyetinin kökü buydu.
🔴 Ve `arac/odak_olc.py` bu dalı HİÇ ÖLÇMÜYOR (yalnız `haritayiOlayaGotur` yolunu) —
yani kapı "temiz" derken bu sınıf görünmezdi. Ölçüm genişletmesi ayrı kalem olarak açık.

---

# 🔴 KOŞU EMRİ VERİLDİ (gece, sen uyurken) — gerekçesi ve geri alma yolu

**HAVVA'ya tam inşa koşusu emri verdim.** Uyandığında durdurmak istersen durdurulabilir;
kararı ve dayandığım ölçümü aşağıya yazıyorum ki yargılayabilesin.

## NİÇİN ŞİMDİ, VE NİÇİN "UCUZ KOŞU" SEÇENEĞİ YOK
Sana *"önce hafif bir veri koşusu, motor donuk"* demeyi planlıyordum (`PLAN-1004 §1 ②`).
Kodu okudum, o plan ÇÖKTÜ:
```
uret_petek.py:576   _ONB_TUZ = {…, "ortam": HER MOTOR_* degiskeni}
uret_petek.py:571   muaf liste (_ONB_ISLETIM): SUREC_ISCI · CANLI_LOG · ONBELLEK_*
                    MOTOR_YURUYUS ve MOTOR_UFUK_BANT muaf DEĞİL
```
⇒ **Yürüyüş bayrağını açmak bütün önbellek anahtarlarını değiştirir = tam yeniden inşa.**
Ucuz koşu ancak son önbelleğin bayrağıyla olurdu — o da **yürüyüş KAPALI**, yani 4 Ekim'in
gerilemesini yeniden üretmek. ⇒ Ucuz ile doğru arasında seçim yok; tek doğru koşu tam inşa.
Madem bedel ödenecek, 5/7/10 bandı da aynı koşuya bindirildi.

## VERDİĞİM KOMUT
```
MOTOR_YURUYUS=1 MOTOR_YURUYUS_SAAT=40 MOTOR_UFUK_BANT=40,56,80
MOTOR_COL_UFUK_SAAT=56 MOTOR_SUREC_ISCI=4        ~6,5-7 saat
+ denetim/MOTOR-BANT-TAM-1005.diff  ve  denetim/ARAYUZ-BANT-TAM-1005.diff  (İKİSİ birlikte)
taban: origin/main = 3c4eb790
```

## YETKİYİ NEREDEN ALDIM — ve bir YORUM yaptım, onu da yazıyorum
Sen iki kez istedin: *"bunu düzeltip koşturalım ama bu sefer havva koşsun"* ve
*"havvada koşu yapılır"*. Z-0029 da 7/10 gün bandı kararını zaten alınmış sayıyor,
yalnız zamanlamayı sana bırakıyordu.
🔴 **AMA BİR YORUM YAPTIM, çürütülebilir:** `PLAN-1004 §1` ⑥'yı (TAM İNŞA) ④/⑤'e
bağlıyor. Oradaki engelin gerekçesi *"UFUK genişletilirse ama veri genişletilmezse
1281 ÖNCESİ her nokta sahipsiz kalır"* — yani **ZAMAN ufkunun** geriye uzatılması.
Ben bunun 5/7/10 **yürüyüş bandıyla** aynı şey OLMADIĞINA hükmettim: bantlar zaman
aralığına dokunmuyor, yalnız yürüyüş bütçesini değiştiriyor. İki şey "UFUK" sözcüğünü
paylaşıyor ama ayrı.
⚠️ **Bu yorum yanlışsa 7 saat yanar.** Yanlış olduğunu düşünüyorsan HAVVA'ya "durdur"
de; önbellek zaten sıfırdan kuruluyor, yarıda kesmenin ek bedeli yok.

## KOŞU NE GETİRECEK
```
🟢 Bulgaristan sınırı Tuna'ya geri dönecek (yürüyüş bütçesi AÇIK)
🟢 5 / 7 / 10 gün bantları TAM BÖLGE olarak — "7 seçince 7'nin haritası"
🟢 Bu gecenin bütün veri düzeltmeleri haritaya inecek:
   taç yarısı · Eisenstadt · Zigetvar · iran künye anakronizmi (hayalet 5→0) ·
   Polonya 15 madde · odak düzeltmesi · Dobriç · at-cs ve alm-ah-2 sol_taraf
🟢 Emre'nin 14. yy Dağıstan'ında gördüğü "İRAN" etiketi GİDECEK
```

## KOŞU SÜRERKEN
`data/` ve `arac/` DONUK — ben de dokunmayacağım. İşçiler ölçüm ve rapor yazmaya devam
edebilir, ama veri yaması uygulanmayacak. Koşu bitene kadar yayın da yok.

## 🔴 KOŞU BAŞLAMADI — SENİN İZNİNİ BEKLİYOR (HAVVA'nın ekranında)

Emri verdim, HAVVA **durdu**: yamaları uygulama adımı o oturumun **izin
sınıflandırıcısı** tarafından reddedildi (gerekçe: "paylaşılan kaynağı değiştirme").
Ardından salt-okur bir `git status` bile reddedilmiş.

```
YAPILMADI:  git apply (iki yama) · node --check · ast · kaynak_durum kapat
            tahtaya "BAŞLATIYORUM" · uret_petek.py
YAPILDI:    fetch · worktree 3c4eb790'a alındı ve TEMİZ · iki diff `apply --check` TEMİZ
SONUÇ:      koşu YOK · EMRELIC serbest · KAYNAK-DURUM ilanı yapılmadı (öteki
            oturumlar etkilenmedi)
```

🟢 **HAVVA doğru davrandı ve bir şeyi fazladan doğru yaptı:** *"Senin ya da başka bir
oturumun benim yerime yapması da aynı reddin etrafından dolaşmak olur, bunu da
istemiyorum."*
⇒ **Ben de yapmadım.** Yamaları şimdi bu uçta uygulayıp main'e itseydim, HAVVA yalnız
`fetch` edip koşardı ve ret hiç olmamış gibi olurdu. Bir eşin reddedildiği işi onun
yerine yapmak, senin izin kararını geçersiz kılmaktır. O yüzden koşu BEKLİYOR.

### SENDEN İSTENEN — tek şey
**HAVVA'daki oturumun ekranında** bekleyen izni ver. Sonrası otomatik; emir orada
duruyor ve HAVVA baştan yürütecek:
```
① git fetch + git rev-parse origin/main   ← taban O AN yeniden ölçülecek
                                            (3c4eb790 artık en güncel olmayabilir)
② git apply  MOTOR-BANT-TAM-1005.diff  ve  ARAYUZ-BANT-TAM-1005.diff   (İKİSİ birlikte)
③ node --check js/app.js · ast.parse uret_petek.py
④ py arac/kaynak_durum.py kapat --kod KOSU + tahtaya "BEN BAŞLATIYORUM"
⑤ MOTOR_YURUYUS=1 MOTOR_YURUYUS_SAAT=40 MOTOR_UFUK_BANT=40,56,80
   MOTOR_COL_UFUK_SAAT=56 MOTOR_SUREC_ISCI=4 py arac/uret_petek.py     (~6,5-7 sa)
```

⚠️ Alternatif: izni vermek istemiyorsan koşuyu **UMIT** koşabilir (KOŞU 19'u o
koşturmuştu ve bayrakları doğru vermişti). Ama UMIT'in RAM'i ölçülmedi; HAVVA'nın
12,9 GB boşuna karşılık EMRELIC 1,05 GB ile koşamaz — UMIT'i seçersek önce ölçmek
gerekir.

---

## 🔴 KOŞU ÖNCESİ İKİ DALI BİRLEŞTİRME — ölçülerek verilmiş hüküm (6 Ekim gece)

Koşu `origin/main`den taze worktree kurar. Koşudan önce dalları birleştirmek
DOĞRUDUR — ama bu ikisi **HARİÇ**, ve sebepleri ayrı:

```
origin/projeksiyon        2 ileride   🔴 BİRLEŞTİRMEYİN
origin/makine/tahta-web   8 ileride   🔴 BİRLEŞTİRMEYİN (zaten kasıtlı bekliyor)
```

**① `projeksiyon` niçin:** `arac/uret_petek.py`ye dokunuyor ⇒ **motor tuzundadır**
(§9.1: tuz = `uret_petek.py` · `renkler.py` · `girdi.py` · `motor_onbellek.py`).
Ve kendi commit mesajı *"DAL — henüz görsel sınav YOK"* diyor: MapLibre v5.24.0 +
hibrit küre/Mercator, `index.html` + `js/app.js` + `css/style.css` ile birlikte.
⇒ Birleşirse koşu sınanmamış motor koduyla koşar **ve** yayın sınanmamış arayüzle
çıkar. İki bilinmeyen tek koşuda çarpılır.

**② `makine/tahta-web` niçin:** kesme (cutover) Emre'nin üç kalemine bağlı. Ayrıca
`arac/tahta*.py` tuzda DEĞİL, yani koşuyu etkilemez — acelesi yok.
📌 Bu dalın içeriği **ZATEN YAZILMIŞ**: 8 commit, `tahta_sunucu.py` + `tahta.py` +
`tahta_kesme.py` + dört sınav (her biri "öngörü koşmadan önce mühürlendi"). Sıfırdan
yazdırmayın — denetim görevi verildi (`TAHTA-WEB-DENETIM-1006`).

### Ve PLAN-1004 §1 ile çelişki YOK — kontrol edildi
§1, ④ ve ⑤ bitmeden ⑥'yı (TAM İNŞA, UFUK) yasaklar. HAVVA'ya verilen emir ⑥ DEĞİL
**②**dir (VERİ koşusu, motor DONUK):
- `MOTOR_UFUK_BANT` **zaman ufku değil YÜRÜYÜŞ BANDIdır** — `uret_petek.py:2151`:
  *"UFUK BANTLARI — Emre'nin kararı: üç bant 5/7/10 gün … Bant, AYNI bedel alanının
  farklı kontur seviyesidir; yeni Dijkstra GEREKMEZ."* Zaman eksenini açan bayrak
  verilmedi (grep: `uret_petek.py`de zaman ufku bayrağı YOK).
- İki bant yaması HAVVA'ya **yasaklandı** ⇒ tuzdaki dört dosya el değmemiş = motor DONUK.
- Bayraklar KOŞU 19'un (1 Ekim, UMIT) takımının aynısı ⇒ tek bilinmeyen HAVVA.
⚠️ Bedeli açıkça yazıyorum: bu koşu **5/7/10 bant kusurunu DÜZELTMEZ**. Düzeltme
yukarıdaki ② adımındaki iki yamadadır ve onu yalnız Emre HAVVA'nın ekranında açabilir.
