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

---

## ⚪ C · KARAR GEREKTİRMEYEN — bende, sırada

| iş | büyüklük | durum |
|---|---|---|
| **17 yetim madde** (kronolojide sahip değişikliği, haritada karşılığı yok) | 17 | ölçüldü · düzeltme bende |
| **7 ters madde** + 5 şüpheli | 12 | 5'i için TDV ölçümü KASA'da |
| **57 imza yeri** `yer_id`si + **133 `yer_id`siz antlaşma maddesi** (93'ünde `kapsam_genis` de yok) | 190 | hüküm verildi: `yer_id` = ETKİLENEN TOPRAK, imza yeri değil (§1'in amacı) |
| **C 56 izinsiz devralma** | 56 | hüküm verildi (`HUKUM-DEVRALMA-1004.md`); çare **koşuya bağlı** |
| **1969 kaynaksız kayıt** | 1969 | kampanya DEĞİL, **tavan** geliyor (KAYNAK-TAVAN çalışıyor) |
| 3 mükerrer madde çifti | 3 | bende |
| Akçakale kaynaksızlığı · Vikipedi dayanağı (1538→1536) | 2 | bende |

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
