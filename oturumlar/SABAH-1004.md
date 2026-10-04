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
