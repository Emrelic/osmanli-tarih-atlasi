# YAPI DENETİM 3 — Emre'nin istediği ÜÇ YENİ SORU

## ⓪ KİMLİK — HADDİN
```
SEN        : YAPI DENETİMİ oturumu · adın YAPI DENETİM 3
DEĞİLSİN   : koordinatör DEĞİLSİN · MOTOR DEĞİLSİN · YAPIMCI DEĞİLSİN
ÜSTÜN      : ClaudEmre koordinatörü
ALTIN      : kimse
YASAKLARIN : 🔴 VERİ DÜZELTMEK — bulduğun her şeyi RAPOR EDERSİN, DÜZELTMEZSİN
             (CLAUDE.md §7: "Oturum 2 ve 6 düzeltme yapmaz, yalnız rapor yazar;
              yoksa iki oturum aynı satırı ters yönlerde değiştirir")
             `data/*` · `js/*` · `index.html` · kök `*.md` · üretim koşusu
```

---

## ① NİÇİN VARSIN — Emre üç DENETİM istedi, üçü de bugün SORULMUYOR

`parti-0019`dan, kendi sözleriyle:

```
H-0024  "kronolojide OLMAYAN ama haritada GÖRÜLEN toprak değişimlerinin
         hepsini kontrol edecek bir SİSTEM kurup hepsini gözden geçirelim"
H-0023  "haritada hiçbir zaman çizelgesindeki noktada ETİKETSİZ toprak parçası
         olmamalı; hangi devlete aitse etiketi kesin olmalı.
         BİR KONTROL ÇALIŞTIRALIM ve hepsini kontrol etsin"
H-0066  "BİR OSMANLI TOPRAĞINDAN İLERİDEKİ BİR TOPRAK ALINDIĞINDA ARADAKİ
         TOPRAKLAR BOYANMIYORSA SİSTEM ŞUNU SORMALI: ARADAKİ TOPRAKLAR
         KATILMADI MI? KATILMADIĞINA DAİR KUVVETLİ EMARE VARSA BU DOĞRUDUR…"
```

🔴 **Üçü de bugünkü altı değişmezin GÖRMEDİĞİ şey.** Bu projenin en pahalı
ders ailesi tam bu: ***"denetim var ≠ o soruyu soruyor."*** (`CLAUDE.md §11`)

🟢 **Ve bugün bunun emsali doğdu:** `Değişmez 1` *"kaç nokta sahipsiz"* diye
soruyordu, cevap 202'ydi ve hepsi kasıtlıydı. Soru **"kaç nokta sahipsiz VE
BELGESİZ"** diye değiştirildi (`Değişmez 1c`) ve **29 gerçek iş** çıktı —
üstelik üç temiz kümede. **Aynı veriye yeni bir soru sormak, yeni veri
toplamaktan ucuz ve keskin çıktı.** Senin işin bunun üç katı.

---

## ② İŞİN — üç dal, sıra bağlayıcı (ucuzdan pahalıya)

### İŞ 1 — `H-0023` · ETİKETSİZ GÖVDE (en ucuz, en kesin)
```
SORU:  haritada BOYANAN her gövdenin bir devlet ETİKETİ var mı?
NEREYE BAK: data/devletler_harita.js (ÜRETİLMİŞ) ve/veya donemler.js
            + arac/renkler.py BOYALAR + data/devletler.js künyeleri
ÖLÇ:   kaç gövde boyanıyor · kaçının kimliği BOYALAR'da var ·
       kaçının `devletler.js`te künyesi var · kaçı ham slug gösteriyor
```
📌 Bunun bir kısmı zaten ölçülmüştü (`§1.5`: *"dizinsiz harita kimliği 0"*)
ama o **kimlik** tarafı; Emre'nin sorduğu **ekranda görünen etiket** tarafı.
🔴 İkisinin aynı olduğunu VARSAYMA — ölç.

### İŞ 2 — `H-0024` · SESSİZ TOPRAK DEĞİŞİMİ (Değişmez 2'nin TERSİ)
```
bugünkü Değişmez 2   "harita kırılması var → ±30 günde MADDE VAR MI?"
Emre'nin istediği    "harita değişti → KRONOLOJİ BUNDAN BAHSEDİYOR MU?"
```
⚠️ **Bunlar aynı soru DEĞİL** ve fark hayatî. `Değişmez 2` *"o güne yakın
herhangi bir madde"* arıyor; Emre *"O DEĞİŞİMİ ANLATAN madde"* istiyor.
🔴 Yaşanmış vaka (`oturumlar/VERI-FETRET.md`): **Elhova**'nın kırılmasına en
yakın madde *"Kârkiyâ hânedanı Gîlân'da kuruldu — Hazar kıyısı"*ydı. Trakya'yla
sıfır ilgi. `Değişmez 2` bunu **TEMİZ** gördü.
```
ÖLÇÜLEBİLİR HÂLE GETİR — öneri (sen daha iyisini bulursan ONU kullan, gerekçele):
  kırılmanın YERİ (yerleşim adı / koordinat) ile eşleştirilen maddenin
  `yer_id` / `yer` / `b:` metni arasında BAĞ var mı?
  yoksa → "SESSİZ DEĞİŞİM" · kaç tane olduğunu SAY
🔴 Bu bir TAVAN işi değil ÖLÇÜM işi: önce sayıyı gör, tavanı SONRA konuşuruz.
```
📌 Ve `KRONOLOJİ YER` oturumu şu an `yer_id`yi 493'ten yukarı çekiyor — bu
denetim **onun ilerlemesiyle keskinleşecek.** İkinizin işi birbirini besliyor.

### İŞ 3 — `H-0066` · KOPUK GÖVDE (ENKLAV) DENETİMİ
```
SORU:  bir devletin gövdesi KAÇ AYRI PARÇAYA bölünmüş, ve her parça
       ana gövdeye bağlı mı?
ÖLÇ:   hangi devlet · hangi tarihte · kaç parça · en küçük parçanın km²'si ·
       ana gövdeye UZAKLIĞI
```
🔴 **VE BU DENETİM "İHLAL" ÜRETMEZ, SORU ÜRETİR.** Emre açıkça yazıyor:
*"katılmadığına dair kuvvetli emare varsa BU DOĞRUDUR"* — yani bazı enklavlar
**gerçektir** (Kefe · Hotin · Varad hepsi Osmanlı sisteminde meşru enklavdır).
⇒ Çıktın *"şu 40 gövde kopuk"* listesi olmalı, *"40 ihlal"* değil.
⚠️ Deniz aşırı parçalar (adalar) enklav SAYILMAZ — ayrı kovaya koy.

---

## ③ 🔴 C13 — YAZDIĞIN HER DENETİM İKİ YÖNDE SINANIR
```
GEÇME     kusur YOKKEN gerçekten sessiz mi
ATEŞLEME  HER kusur dalı için AYRI AYRI gerçekten ötüyor mu
```
⚠️ Gerçek veride o kusur yoksa dal koşulamaz ⇒ **sahte girdi ya da geçici eşik
değişikliğiyle ZORLA ateşle. Zorlanamayan dal, DENETİMSİZ DALDIR.**
🔴 Ve hangi yönün zorlama isteyeceği ÖNCEDEN BİLİNMEZ — ikisine de hazır ol.
📌 Bugün `Değişmez 1c`de üç dal da zorlandı (3/3) ve biri (*"tavan gevşek"*)
gerçek veride HİÇ koşmuyordu — zorlanmasaydı denetimsiz kalacaktı, üstelik
tam da yakın gelecekte ilk ötecek olan daldı.

---

## ④ YAZMA YETKİSİ
```
🟢 SENİN   arac/denetle.py         ← YALNIZ YENİ FONKSİYON EKLERSİN
           denetim/YAPI-3-*.md     ← raporların
           oturumlar/YAPI-DENETIM-3-ILERLEME.md
🔴 DEĞİL   data/*  ·  js/*  ·  index.html  ·  kök *.md  ·
           arac/uret_petek.py  ·  arac/renkler.py  ·  arac/girdi.py
           var olan denetimlerin MANTIĞI (tavanları DEĞİŞTİRME, sorma bile)
```
🔴🔴 **`arac/denetle.py`ye ŞU AN DOKUNMA — ÜRETİM KOŞUSU KOŞUYOR** (18:47
başladı, ~20:10 biter). `arac/*.py` koşu sırasında parmak izleniyor ve bir
değişiklik **koşuyu ÖLDÜRÜR** (8 Ağustos'ta 83 dakikalık bir koşu tam böyle
öldü). Bitince sana **"dosya senin"** diyeceğim.
⇒ **O zamana kadar ÖLÇÜM yap** — betiklerini `scratchpad`e yaz, `denetle.py`ye
sonra taşı. İŞ 1 ve İŞ 3'ün ölçümü zaten `data/`yi okur, yazmaz.

---

## ⑤ SENİ BAĞLAYAN KURALLAR
```
CLAUDE.md §7   🔴 DÜZELTME YAPMAZSIN, RAPOR YAZARSIN
CLAUDE.md §11  🔴 kaçış içeren metin BASH'ten geçmez, heredoc DÂHİL.
               `Write` ile yaz, `py <yol>` ile koştur.
CLAUDE.md §11  🔴 kendi ayrıştırıcını yazma — `arac/girdi.py`den içe aktar.
               Bu proje aynı dersi ÜÇ kez öğrendi (regex virgülü kaçırdı,
               heredoc kaçışı yedi, CRLF bozdu).
CLAUDE.md §11  🔴 "ölçülemedi" ASLA "temiz" diye raporlanmaz — AYRI KOVA
CLAUDE.md §11  🔴 ölçtüğünü ve ondan ÇIKARDIĞINI AYRI SATIRA yaz.
               Tek satırda birleşince çıkarım, ölçümün güvenilirliğini
               ödünç alıyor — bugün bir günde ALTI vaka ölçüldü.
YASALAR B10    devraldığın hiçbir rakamı doğrulamadan aktarma
```

---

## ⑥ HABERLEŞME — 🔴 ÖNCE KANAL
Cevabın **kendi pencerene YAZILMAZ**; koordinatör ekranını GÖRMEZ.
```
🔴 ADRES YERİNE YOL: sana bu görevi gönderen mesajı YANITLA. Doğru adres ODUR.
   (Bugün şartnamelere yazdığım adres ÖLÜYDÜ ve üç oturumun raporu kayboldu —
    `list_sessions` bana kendi kimliğimi göstermiyor.)
   Ulaşamazsan: ilerleme dosyana yaz VE EMRE'YE SÖYLE. Arıza ÜÇ YERE bildirilir.
```
`AÇILINCA HEMEN` bir satır · `KALEM KALEM` bildir · *"ne oldu iş?"* gelirse
**hemen** üç parça · **AKSAKLIK BEKLEMEZ.**

---

## ⑦ BİTİŞ ÖLÇÜTÜ — sayıyla
```
① İŞ 1 etiketsiz gövde: kaç gövde · kaçı etiketsiz · hangi tarihlerde
② İŞ 2 sessiz değişim: ölçütü NASIL kurdun (gerekçeli) · kaç tane çıktı
③ İŞ 3 kopuk gövde: kaç gövde-tarih çifti · kaçı ada (muaf) · kaçı KARA enklavı
④ C13: her yeni dal için GEÇME ✓ + ATEŞLEME ✓ — kaç/kaç, ve hangisini ZORLADIN
⑤ `py arac/denetle.py` SONUÇ satırı bozulmadı mı (eski denetimler aynı mı)
```
Teslim *"yaptım"* değil: *"İŞ 3'te 47 kopuk gövde-tarih çifti buldum, 31'i ada
(muaf), 16'sı kara enklavı ve 9'u aynı desende: …"*
**Bulamadığını `bulunamadı`, ölçmediğini `ölçmedim` diye yaz.**
