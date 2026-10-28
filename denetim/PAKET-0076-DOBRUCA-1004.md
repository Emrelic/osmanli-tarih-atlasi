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

## 8 · ④ HATTIN İKİ YAKASI — `g3-bg-ro-dobruca-p4` (koordinatörün ek sorusu, 8a sinyali)
Hat: `d_sinirlar_komsu.js:29` · 1908-10-05 → 1913-08-10 · sınıf E · `sol_taraf: romanya-kralligi`
· 22 nokta, uçlar (27,251 44,122) Silistre → (28,578 43,741) Karadeniz kıyısı.
ÖLÇÜM (girdi.yukle, 120 km şerit, de jure sahip — 8a'nın `_d8_sahip`i ile aynı kural):
```
                     1908-10-05 ve 1913-08-09 (İKİSİ AYNI)
BULGAR YAKASI (sağ)  Silistre 0,0 km (hattın UCUNDA, üstünde) · sonra Varna 67,0 · Prevadi 88,8 ·
                     Şumnu 90,5 · Rusçuk 106,8   ⇒ hat ile Varna arasında NOKTA YOK
ROMEN YAKASI (sol)   Köstence 48,3 · Buzău 119,6 ⇒ hattın 48 km içinde nokta YOK
```
⇒ **CEVAP: Güney Dobruca'nın içinde nokta VAR DEĞİL — 0.** Hattın Bulgar yakasındaki tek nokta
hattın ucunda oturan Silistre; en yakın gerçek iç nokta 67 km (Varna). Romen yakasında 48 km
(Köstence). **Çare kaynak değil NOKTA YOĞUNLUĞU** (§6) — ve o noktalar (Dobriç · Balçık · Tutrakan
· Mangalya) tam olarak bu raporun zincir sorusuna bağlı: Berlin taslağında Dobriç taşınabilir,
Balçık/Tutrakan/Mangalya'nın 1281-1419 halkası kaynaksız ⇒ **önce §4 kararı, sonra noktalar.**
(Yaka ataması uzak noktalarda — Bükreş, Yergöğü — hattın uzantısına göredir, anlamı yoktur.)

🔴 **8a'daki 3 YENİ ÜYE GERÇEK YENİ TAŞMA DEĞİL — eski taşmanın YENİDEN ADLANDIRILMASI.** Ölçüldü:
commitli defter (`denetim/DEGISMEZ-0086-defter.json`, HEAD) bu hat için `1913-08-09|sag|Silistre`
üyesini taşıyordu. 8a taşan parçayı o gün KARŞI tarafa (romanya) ait EN YAKIN noktaya atfeder
(`denetle.py` `agac(karsi_ad, gun)` · `query_nearest`). Berlin yaması (A8) Silistre'nin Romen
devrini 1913-05-30 → 1913-08-10'a çekti ⇒ 1913-08-09'da Silistre artık BULGAR ⇒ aynı parça
en yakın Romen noktalara düştü: Buzău · Bükreş · Yergöğü. ÇIKAN 1 (Silistre) + GİREN 3 = net +2.
Geometri koşu 19'un (Silistre'yi 05-30'dan Romen sayan) çıktısı. ⇒ **Öngörü:** bir sonraki tam
inşa koşusunda Romanya gövdesi 1913-08-09'da Silistre'yi kapsamayacağı için bu 3 üye (ve eski
Silistre üyesi) DÜŞER; `sag|Köstence` üyesi (gerçek noktasızlık) ise kalır. Öngörü koşudan ÖNCE
yazıldı; koşu bunu sınayacak.

## 9 · KARAR (A) → `denetim/PAKET-0076-DOBRUCA-1004.diff` (5 Ekim 2026)
Koordinatör kararı (A): yalnız 1402-1419 halkası, her yer KENDİ TDV maddesinden ((B) D208 gereği reddedildi).
```
Silistre   çelebi ×4 (1402-07-28→1413-07-05) → s eflak 1402-07-28→1419-01-01 · d 1413→ olur d 1419→   (TDV silistre)
Köstence   aynı → eflak 1402-07-28→1419-01-01 · d 1419→                                         (TDV kostence)
Babadağı   aynı → eflak 1402-07-28→1416-01-01 · d 1416→                                         (TDV babadagi)
İshakçı    DOKUNULMADI — kendi TDV maddesi yok (slug 302), bölge cümlesi D208 ⇒ beyanlı borç
Tulça      veride NOKTA YOK (karar metninde adı geçiyordu) ⇒ uygulanacak kayıt yok
MADDELER (Değişmez 2, D261 "yeri ANMALI"):
  + 1402-07-28 "Mircea Dobruca'yı yeniden aldı — Silistre, Köstence, Babadağı" (kaynak silistre)
  + 1416-01-01 "Babadağı ve çevresinin Osmanlı'ya geçişi" (kaynak babadagi)
  + 1419-01-01 "Silistre ve Dobruca'nın geri alınışı" (kaynak silistre)
  ~ 1420-01-01 maddesinden Dobruca AYRILDI (başlık · yer · metinde "bir yıl önce, 1419" notu)
  + arac/denetle.py BILINEN_AYRI'ya 2 çift (mükerrer dedektörü yanlış pozitifi, gerekçeli):
    1416 Babadağı ↔ Torlak Kemal'in idamı · 1419 Dobruca ↔ Orta Anadolu'nun geri alınışı
    (ortak olan yalnız YYYY-01-01 + Çelebi Mehmed; ölçüldü: ekleme öncesi 115, sonrası 113)
```
SINAV (worktree, HEAD 874940ee üstünde): `denetle.py --ayrinti` D1 309/309 · 1b 0 · 2 623 kırılma 0 açık ·
2s/2i/2t tavanda · 4/5 ✓ · mükerrer 113 (tavan) · D8 ÖLÇÜLEMEDİ (worktree'de izlenmeyen dosya yok;
motor çıktısını ölçer). İki yönlü sahiplik (girdi.yukle, 14 yer×gün): SONRA 14/14 doğru · ÖNCE 7/14 yanlış
(7'si de değişen halkada; değişmeyen kontroller — 1395, 1402-07-27, 1878, İshakçı — iki yönde de aynı).
`git apply --check` ana depoda TEMİZ (HEAD 55630d33'te de).
⚠️ Koşuya biner (yerlesimler değişti). ⚠️ Bölgede görsel tutarsızlık beklenir: İshakçı 1402-1413'te
çelebi, komşuları Eflak — beyanlı borç, kaynağı bulununca kapanır.

## 10 · GÖREV A — İshakçı 1402-1419 kaynak taraması: BULUNAMADI (5 Ekim 2026)
```
TDV         isakci · isakci--kale · isakci-kalesi → 302 (ölü) · arama sayfası JS, sonuç okunamaz
            tulca · dobruca · babadagi · mehmed-i ham metinlerinde İsakçı/İshakçı/Isaccea: 0 geçiş
Sempozyum   "Vefâtının 600. Yılı … Sultan Çelebi Mehmed ve Devri" (Bursa BB, 564 s., PDF indirildi,
            pypdf ile tarandı): İsakçı 0 · Yenisale 0 — Dobruca yalnız BÖLGE düzeyinde
Akademik    Aurel-Daniel Stănică, "The Missing Fortresses in Dobrogea. Case Study: Turkish
            Fortifications" (2016) + Romence sürümü — İsakçı'yı ADIYLA ele alıyor AMA erişilemedi:
            ResearchGate 403 · academia.edu 403 (curl ve WebFetch). Arama ÖZETLERİ "Osmanlılar Enisala
            ve İsakçı kalelerini I. Mehmed'in emriyle onardı, 1416-1417" diyor — özet METİN DEĞİLDİR,
            KULLANILMADI.
            EI2 "Isakča" (Brill, ücretli) denenmedi.
Kırmızı     historia.ro · istorie-pe-scurt · ziuaconstanta · Wikipedia/Wikiwand/fandom çıktı — D209, ELENDİ
```
⇒ **İshakçı'nın 5 adası BEYANLI BORÇ kalır.** Komşu Eflak olduğu için Eflak demek D208 yasağı.
🔴 Yolu açacak tek erişim: Stănică 2016'nın tam metni (Emre'nin hesabıyla ResearchGate/academia
indirmesi ya da yazara istek). Okunursa İshakçı muhtemelen `eflak 1402-07-28 → 1416/1417` olur.

🆕 **TDV İÇ ÇELİŞKİSİ (bildiriliyor, D211 ⑥):** TDV `mehmed-i`: *"Şeyhi koruyan ve bilfiil destekleyen
Mircea Deliorman'ı işgal etti ve Silistre'ye saldırdı (sonbahar 819/1416)"* — Mircea 1416'da Silistre'ye
SALDIRIYORSA şehir o an Osmanlı'dadır. TDV `silistre` ise *"Mircea Silistre'yi … 1418'de ölümüne kadar
elinde tuttu"* diyor. Ayrıca `mehmed-i` Eflak seferini 822/1419 (Kasım 1419 mektubu) tarihliyor.
Dobruca (A) yaması `silistre`yi izledi (şehrin kendi maddesi); çelişki bu raporda kayıtlı.

### 10a · Stănică 2016 — iki ERİŞİM SINIFI ayrı (koordinatör, M-5815 cevabı)
Koordinatör yazarın KENDİ ResearchGate profilinde bir PDF buldu (`profile/Aurel-Daniel-Stanica/publication/310063401/…`).
Bu, epdf.pub / kişisel hesaplı archive.org yüklemelerinden FARKLI bir sınıftır:
```
✅ yazar öz-arşivi (yazarın kendi profili / kurumsal depo)   → okunursa ATIF VERİLEBİR
❌ üçüncü kişinin aynası / kişisel hesap yüklemesi           → okunsa da ATIF VERİLEMEZ
```
Sayfa iki tarafta da açılmadı (RG gerçek tarayıcıda da engelliyor). Emre'nin hesabıyla öz-arşivden
okunabilirse İshakçı'nın 5 adası kaynaklanabilir. Aynı ayrım ODB ve Vásáry için de geçerli
(DOBROTIC-1004 İnceleme 2): resmî IA ödünç nüshası ya da kütüphane = meşru; kişisel yüklemeler = değil.

## 11 · GÖREV B — Güney Dobruca'nın ilk iç noktası → `denetim/PAKET-0076-DOBRIC-1004.diff`
```
Hacıoğlupazarcığı (Dobrich)  43,565 K 27,831 D · yerlesimler_ek29.js (İshakçı'nın önüne)
  kur 1518-01-01   TDV hacioglupazarcigi (Kiel): "en eski kayıtlar, 924'te (1518) … Hacıoğlu adını
                   taşıyan bir köy" · kazılar "600-1500 yılları arasında yerleşim bulunmadığını"
                   ⇒ 1281-1419 Dobruca zinciri bu noktaya HİÇ DEĞMİYOR (A'nın sonucundan bağımsız)
  d 1518 → 1878-07-13 · v prenslik 1878-07-13 → 1908-10-05 ("1877-1878 savaşından sonra … Bulgaristan'ın
  bir parçası oldu") · s bulgaristan-kralligi 1908-10-05 → 1913-08-10 · s romanya-kralligi 1913-08-10 →
  (TDV dobruca Bükreş 1913 · gün TDV balkan-savasi; Silistre A8 ile aynı gün)
MÜKERRER: ad (dobri/haciog/bazargic/pazarcık/tolbuhin) 0 · en yakın Varna 39,7 km (3 km eşiği çok uzak)
SINAV (worktree HEAD 90aaa54d): denetle D1 309/309 (4299 nokta) · 1b 0 · 2 623/0 açık · 2i tavanda ·
  4/5 ✓ · D7 732 (değişmedi — yeni enklav açmadı) · kaynaksız tavanları ✓ · D8 ÖLÇÜLEMEDİ (beklenen)
  🔴 ilk koşu "kayıt-kaynaksız 2302 > 2301" ile ötü — üst düzey `kaynak:` eklendi, temizlendi
  sahiplik 6/6 doğru (1500 yok · 1600 Osmanlı · 1880 tâbi · 1913-08-09 Bulgar · 08-11 Romen · 1923 Romen)
  ana depoda kayıt YOK (sınav ters yönde ayırt ediyor) · git apply --check TEMİZ
⚠️ Koordinat bu turda YENİDEN DOĞRULANMADI (GeoNames demo kotası dolu, OSM 403) — kaynak alanında yazılı.
ÖNGÖRÜ (koşudan ÖNCE): 8a `g3-bg-ro-dobruca-p4|1913-08-09|sag|Köstence` taşması Dobriç'in Bulgar peteği
  hattın güneyini doldurunca KÜÇÜLÜR ya da DÜŞER (Köstence 48 km, Dobriç hattın ~40 km güneyinde).
UYGULANMADI: Balçık (1281-1389 halkası — Dobrotiç künyesi yok, TDV iç çelişkisi) · Tutrakan ·
  Mangalya (TDV maddesi yok; Osmanlı öncesi sahip/fetih bulunamadı).

## Ölçüm defteri
TDV ham HTML: scratchpad `tdv/{dobruca,silistre,babadagi,kostence,tulca,balcik,bulgaristan}.html`
(curl, 200) · `isakci` · `mircea` 302. Zincir dökümü: `girdi.yukle()` (regex DEĞİL).
ÖLÇÜLMEDİ: önerinin denetle sonucu (veri değiştirilmedi) · Silistre 1377 Radu penceresi (TDV
"kısa bir süre" diyor, yıl dışında süre yok — öneriye konmadı).
