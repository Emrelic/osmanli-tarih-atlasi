# PAKET-0076-DOBRUCA-1004 — Dobruca zinciri TDV'ye karşı, kayıt kayıt

5 Ekim 2026 · oturum PAKET-0076-TASNIF-1004 · koordinatör görevi (M-5794 cevabı ③).
**Öneri. Veri dosyalarına yazılmadı.** Uygulama koordinatörde (`yerlesimler*.js`, `olaylar*.js`).

## 0 · Sonuç bir cümlede
Dobruca'nın dört noktası (İshakçı · Babadağı · Köstence · Silistre) birebir aynı zinciri taşıyor:
`bulgaristan 1281→1393-09-01 · d 1393-09-01→1402-07-28 · Fetret çelebileri 1402-07-28→1413-07-05 ·
d 1413-07-05→1878-07-13`. **Zincirin dört halkasından üçü TDV'nin beş maddesiyle çelişiyor, ve
dördüncüsünde TDV kendi içinde çelişiyor.** Hiçbir halkanın kayıtta `kaynak:` alanı yok.

## 1 · Ölçüm — mevcut zincir (girdi.yukle, 1830 öncesi)
Kutu 43,35-45,6 K · 27,0-29,9 D = 9 nokta. Tuna'nın KUZEYİNDEKİ beşi (Kili · Kalas · Rimnik-i
Sârat · İsmail · İbrail) kaynaklı (TDV bucak · eflak · kili) ve bu raporun konusu DEĞİL.
Tuna'nın GÜNEYİNDEKİ dördü — Dobruca:
```
İshakçı (45.274, 28.460)   yerlesimler_ek29.js   ┐
Babadağı (44.892, 28.717)  yerlesimler_ek29.js   │ dördü de BİREBİR:
Köstence (44.173, 28.639)  yerlesimler.js        │  s bulgaristan    1281-01-01 → 1393-09-01
Silistre (44.117, 27.260)  yerlesimler.js        ┘  d                1393-09-01 → 1402-07-28
                                                    s suleyman/musa   1402-07-28 → 1413-07-05 (4 pencere)
                                                    d                1413-07-05 → 1878-07-13
                                                    kaynak: — (dördünde de halka kaynaksız)
```
Zincirin gün dayanağı: `data/olaylar_ek.js:39` — `t:"1393-09-01"` "Dobruca'nın katılışı",
`kaynak:"bulgaristan"`. **TDV `bulgaristan` gövdesi Dobruca'yı ANMIYOR** (ham metin tarandı):
yalnız "1393'te … Tırnova'yı ele geçirerek Bulgar Krallığı'na son verdiler" diyor.
⇒ **Tırnova'nın yılı Dobruca'ya taşınmış — bölgeden bölgeye türetme** (`D208`: bölgeden şehre
taşınan hüküm halka almaz; burada daha da uzak: başka bölgenin olayından).
Ve veride İKİNCİ, çelişen bir madde var: `data/olaylar_ek10.js:489` — `t:"1420-01-01"`
"Aşağı Tuna'nın kapanması — Yergöğü, Turnu, Orşova ve **Dobruca'nın ilhakı**" (`kaynak:"yergogu"`).
⇒ Atlasın kronolojisi Dobruca'yı İKİ kez katıyor (1393 ve 1420), haritası ise 1393 + 1413.

## 2 · TDV — beş madde, ham metinden (WebFetch özeti DEĞİL; HTML çekildi, grep ile okundu)
```
silistre  "II. Bulgar Krallığı boyunca (1189-1393) Drǎstǎr hakkında çok az şey bilinmektedir."
          "1377'de Eflak Voyvodası I. Radu, Silistre'yi almasına rağmen kısa bir süre sonra … Çar İvan
           Şişman'a geri verildi."
          "790 (1388) kışında Çandarlı Ali Paşa kumandasındaki Osmanlı ordusu Silistre'yi ele geçirdi."
          "kısa bir süre sonra 1390'da Mircea burayı ele geçirdi ve Drǎstǎr lordu ve Dobrotiç
           topraklarının despotu unvanıyla anıldı."
          "Yıldırım Bayezid'i Bulgaristan'ın bütün kuzey topraklarını ele geçirmeye sevketti (796/1394)."
          "Ankara Savaşı'nda (1402) … Mircea Silistre'yi tekrar aldı ve 1418'de ölümüne kadar elinde tuttu."
          "822 (1419) ilkbaharında Çelebi Sultan Mehmed'in Silistre'yi ve bütün Dobruca'yı tekrar almasına"
dobruca   "1186'da Kumanlar tarafından kurulan ikinci Bulgar devleti varlığını, Dobruca'nın 1241'de
           Moğollar tarafından istilâsına kadar sürdürmüştür." · "Moğol hâkimiyetine giren Dobruca,
           böylece hem Bizans hem de Bulgarlar'a karşı muhtariyet kazanarak"
          "Balik'in Dobrotiç adındaki kardeşi … 1359'da Kuzey Dobruca'yı işgal ederek"
          "Dobruca'nın Osmanlı idaresine giriş tarihi kesin olarak belli değildir."
          "Eflak Beyi Mircea, 1388'de kısa bir süre Dobruca'nın güneybatı kısmını ele geçirmişse de
           1394'te Yıldırım Bayezid tarafından mağlûp edilerek Dobruca'yı terketmek zorunda kalmıştır."
          "Mircea Ankara Savaşı'ndan sonraki karışıklıklar sırasında tekrar Dobruca'ya girmiş, …
           ancak 1416'da Çelebi Mehmed'e yenilmiştir." · "Mircea'ya Osmanlı hâkimiyetini kabul
           ettirmiştir (1419)."
balcik    "Balçık bütün Dobruca ile birlikte Temmuz 1389'dan sonra Osmanlılar'ın idaresi altına girdi."
          "Ocak 1390'da … Eflak Voyvodası Koca Mircea tarafından işgal edildi; 1393-1402 yılları
           arasında yine Osmanlı hâkimiyeti altında kaldı." · "Dobruca Mircea'nın ölümüne (1418)
           kadar onun hâkimiyetindeydi."
kostence  "1402'de Mircea buraya hâkim olmuşsa da Osmanlılar 1419'da Constanta ile beraber Dobruca'nın
           büyük kısmını fethettiler."
babadagi  "Babadağı ve çevresi, Çelebi Sultan Mehmed'in Eflak Voyvodası Mircea ile oğlu Mihail'i
           mağlûp etmesinden sonra Osmanlı hâkimiyetine girdi (819/1416)"
tulca     "1419'da Dobruca Osmanlı toprakları içine alındı."
isakci    BULUNAMADI — slug 302 (ölü), isakci--kale / isakci-kalesi 302; arama sayfası JS ile
          yükleniyor, sonuç okunamadı. İshakçı için yalnız BÖLGE maddeleri (dobruca · tulca) var.
```

## 3 · Halka halka hüküm
```
HALKA                     ATLAS             TDV                                     HÜKÜM
① 1281 → ~1388 sahibi     bulgaristan       silistre: Bulgar 1189-1393              ⚠️ TDV İÇ ÇELİŞKİ
                                            dobruca: 1241 Moğol, muhtar; 1359
                                            Dobrotiç Kuzey Dobruca; Ivanko
② Osmanlı ilk girişi      1393-09-01        Silistre 1388 kışı · Balçık "Temmuz      ✗ YANLIŞ (5 yıl geç)
                                            1389'dan sonra"                          + türetilmiş gün
③ Eflak (Mircea) I        YOK               Silistre 1390 · Balçık Ocak 1390 →       ✗ EKSİK
                                            Osmanlı 1393 (balcik) / 1394 (silistre,
                                            dobruca)                                 ⚠️ 1393↔1394 TDV iç farkı
④ 1394 → 1402 Osmanlı     d (1393'ten)      üç madde de Osmanlı                      ✓ (başı ③'e bağlı)
⑤ 1402 → 1413 sahibi      Süleyman/Mûsâ     MİRCEA (Eflak) — silistre · balcik ·     ✗ YANLIŞ
                          Çelebi            kostence · dobruca. Çelebiler DEĞİL.
⑥ 1413 → 1416/1419        d (Osmanlı)       Mircea sürüyor: Babadağı 1416,           ✗ YANLIŞ (3-6 yıl erken)
                                            Silistre/Köstence/Tulça 1419
⑦ 1419 → 1878             d                 ✓                                        ✓ (başı ⑥'ya bağlı)
```
⑤'nin önemi: atlas 1402-1413'te bütün Rumeli'yi çelebiler arasında paylaştırıyor ve Dobruca'yı da
o şablona sokmuş. TDV'nin dört maddesi o yılların Dobruca'sını açıkça Mircea'nın elinde gösteriyor.

## 4 · ÖNERİ — kayıt kayıt (halka ①'e DOKUNULMADI, aşağıya bakınız)
`eflak` künyesi `f:1330-01-01 → t:1859-01-24` — pencereler künyenin içinde.
```
SİLİSTRE  (kendi maddesi var — en güçlü kayıt)
  s bulgaristan  1281-01-01 → 1388-01-01   (bitiş: "790 (1388) kışında" — YIL, hicrî 790 = 1388)
  d              1388-01-01 → 1390-01-01   kaynak: TDV silistre "790 (1388) kışında … ele geçirdi"
  s eflak        1390-01-01 → 1394-01-01   kaynak: TDV silistre "1390'da Mircea" · "796/1394"
  d              1394-01-01 → 1402-07-28
  s eflak        1402-07-28 → 1419-01-01   kaynak: TDV silistre "Ankara Savaşı … neticesinde Mircea Silistre'yi
                                           tekrar aldı" · "822 (1419) ilkbaharında"
                                           ⚠️ f = Ankara günü: Mircea'nın GİRİŞ günü bulunamadı; TDV olayı Ankara'ya
                                              bağlıyor (terminus post quem). ⚠️ t: "ilkbahar" ⇒ YIL (D210)
  d              1419-01-01 → 1878-07-13
KÖSTENCE  (kendi maddesi: 1402 Mircea · 1419 Osmanlı; öncesi bölge maddelerinden)
  s bulgaristan  1281-01-01 → 1389-01-01   ⚠️ halka ① + bitiş "Temmuz 1389'dan sonra" (balcik, BÖLGE cümlesi)
  d              1389-01-01 → 1390-01-01   kaynak: TDV balcik "bütün Dobruca ile birlikte" (bölge → şehir ⚠️)
  s eflak        1390-01-01 → 1393-01-01   kaynak: TDV balcik "Ocak 1390 … 1393-1402 Osmanlı" (bölge ⚠️)
  d              1393-01-01 → 1402-07-28
  s eflak        1402-07-28 → 1419-01-01   kaynak: TDV kostence "1402'de Mircea … Osmanlılar 1419'da Constanta ile"
  d              1419-01-01 → 1878-07-13
BABADAĞI  (kendi maddesi: 819/1416)
  … 1402-07-28'e kadar Köstence ile aynı (bölge ⚠️)
  s eflak        1402-07-28 → 1416-01-01   kaynak: TDV babadagi "Mircea ile oğlu Mihail'i mağlûp etmesinden sonra
                                           Osmanlı hâkimiyetine girdi (819/1416)" · TDV dobruca "1416'da … yenilmiştir"
  d              1416-01-01 → 1878-07-13
İSHAKÇI   (kendi maddesi BULUNAMADI — tamamı bölge maddelerinden, ⚠️ D208)
  … Köstence ile aynı · s eflak 1402-07-28 → 1419-01-01 (TDV tulca "1419'da Dobruca") · d 1419-01-01 →
```
🔴 **İki öneri arasında seç (koordinatörün):**
- **(A) Yalnız Silistre + Köstence + Babadağı'nın 1402-1419 halkası** (⑤ ⑥) — her biri KENDİ
  maddesinden, en düşük risk. Halka ②③ ve İshakçı dokunulmaz, borç olarak beyan edilir.
- **(B) Dört noktanın 1388-1419'unun tamamı** — Köstence/Babadağı/İshakçı'nın 1389-1393'ü bölge
  cümlesinden türetilir (D208 sınırında), `kaynak:` alanına açıkça "bölge maddesi" yazılır.
Önerim **(A)**: TDV'nin şehir maddeleri dördünde de 1402-1419 halkasını ayrı ayrı söylüyor; 1388-1393
halkasını yalnız Silistre kendisi için söylüyor.

## 5 · Değişmez 2 — uygulama şu maddeleri GETİRMEK ZORUNDA (ölçülmedi, tahmin: kırılmaların listesi)
```
1402-07-28  Ankara günü kırılması (çelebi → eflak) — mevcut Ankara maddesi Dobruca'yı ANMIYOR
            (D2 "madde bu yerlerden BAHSETMİYOR" kuralı) ⇒ yeni madde ya da metin eki:
            "Mircea Dobruca'yı ve Silistre'yi yeniden aldı" (TDV silistre · dobruca · kostence)
1413-07-05  bugünkü çelebi → d kırılması KALKAR (Çamurlu maddesi Dobruca'dan bahsetmiyorsa sorun yok)
1416-01-01  Babadağı: yeni madde "Çelebi Mehmed Mircea'yı yendi, Babadağı ve çevresi" (TDV babadagi)
1419-01-01  Silistre · Köstence (· İshakçı): mevcut 1420-01-01 maddesi 365 gün uzakta ⇒ TUTMAZ.
            Öneri: o maddenin Dobruca kısmını 1419'a ayır (TDV silistre "822 (1419) ilkbaharı" ·
            kostence · tulca "1419") — Yergöğü/Turnu/Orşova 1420'de kalır (kendi kaynağı yergogu)
(B) seçilirse ek: 1388-01-01 (mevcut "Çandarlı Ali Paşa'nın Bulgaristan seferi" maddesi Silistre'yi
            ANMIYOR — metne eklenmeli) · 1390-01-01 Mircea (yeni) · 1393/1394 Osmanlı geri (mevcut
            1393-09-01 maddesi düzeltilmeli: gün TDV'de yok, kaynağı Dobruca'yı anmıyor)
```
⚠️ Mevcut `1393-09-01` maddesi — kaynağı Dobruca'yı anmadığı için **kaynak alanı yanlış**; (A)
seçilse de bu maddenin `kaynak:`ı `silistre`/`balcik` ile değiştirilmeli ve günü YIL'a indirilmeli
(Balçık 1393, Silistre 1394 — TDV iç farkı metinde açıkça yazılarak).

## 6 · Halka ① — DOKUNULMADI, karar gerekir
TDV `silistre` Silistre'yi 1189-1393 Bulgar sayıyor; TDV `dobruca` Dobruca'yı 1241'den Moğol
hâkimiyetinde ve "muhtar", 1359'dan Dobrotiç'in (Balik'in kardeşi) devletinde gösteriyor.
Veride **Dobrotiç / Dobruca Despotluğu künyesi YOK** (`devletler.js` tarandı: `dobruca`, `dobrotic`
0 eşleşme). Seçenekler: ① bırak, iç çelişki beyanıyla (öneri — kaynak çelişirken birini seçmek
hüküm uydurmaktır) · ② yeni künye `dobruca-despotlugu` (TDV dobruca; başlangıç yılı TDV'de "1359
Kuzey Dobruca" dışında YOK) — kuzey noktalar (İshakçı, Babadağı) için.

## 7 · Sonra — Berlin noktaları
Dobruca zinciri karara bağlanınca `PAKET-0076-BITIR-berlin-noktalar.js`teki Tulça · Hırşova ·
Mangalya · Balçık · Tutrakan · Dobriç taslakları bu zincire göre yeniden yazılmalı. Ajan taslakları
zaten TDV'nin 1390-93 / 1402-18 Eflak dönemlerini izliyor — yani (A)/(B) kararıyla UYUMLU olacaklar;
1281 halkası (①) ise aynı karara bağlı.

## Ölçüm defteri
TDV ham HTML: scratchpad `tdv/{dobruca,silistre,babadagi,kostence,tulca,balcik,bulgaristan}.html`
(curl, 200) · `isakci` · `mircea` 302. Zincir dökümü: `girdi.yukle()` (regex DEĞİL).
ÖLÇÜLMEDİ: önerinin denetle sonucu (veri değiştirilmedi) · Silistre 1377 Radu penceresi (TDV
"kısa bir süre" diyor, yıl dışında süre yok — öneriye konmadı).
