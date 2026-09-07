# ÖNGÖRÜ — YAYIN KAPISI TABANI (`arac/denetle_yayin.py`)

> **SINAV-KOSU8-0907** · sevk `1.MURAT` · 7 Eylül 2026
> Sahibi: bu oturum. Sınav anı: **hemen.**
> 🔴 **SALT OKUR.** Kapı `1.MURAT`ın kalemi (`§7`); kusur bulursam
> **bildiririm, dokunmam.** `data/` ve parmak izli üçlü DONUK.

---

## ⚠️ ÖNCE: ÖNCEDEN BİLDİĞİM ŞEYİ ÖNGÖRÜ DİYE YAZMIYORUM

Bu oturum bugün `denetle_yayin.py:1356`yı **okudu** ve ret şartı
zincirini gördü:
```
yoklar or izlenmeyenler or kayitsiz or len(damgalar) > 1 or
damga_ihlali or bayat or izsiz or iz_bayat or _sz or _bagli or _dizinsiz
```
⇒ **11 şart.** 1.MURAT'ın devraldığı sayı da 11 ve *"doğrulanmadı"*
damgalı. İkisi uyuşuyor — ama bu bir **öngörü değil, ÖNCEDEN BİLGİ**.
`§11`: *ölçmediğini «ölçmedim» diye yaz*; bunun aynası da geçerli —
***bildiğini «öngördüm» diye yazma.*** Aşağıda `Ö-Y2` bu yüzden
**öngörü değil DOĞRULAMA** olarak damgalı.

⚠️ Ve o okuma **tek bir satırdı**: `if` zincirinde sayılan 11 ad, kapının
**bütün** ret yolları olmayabilir — daha erken `return`/`sys.exit`
olabilir. Onu **ölçmedim.**

---

## ÖNGÖRÜLER — dört ayakla

```
Ö-Y1  KAPI KOŞUYOR — ilk satırda ölmüyor
      ① beklenen: koşar (çıkış kodu ne olursa olsun, gövdeyi basar)
      ② MAZERET VAR: bugün beş uygulayıcıdan İKİSİNİN belgesiz ön
         koşulu çıktı (`ATLAS_KOK` ortam değişkeni · `os.getcwd()`).
         Kapı da böyle bir şart taşıyor olabilir ve o zaman «çalışmıyor»
         değil «çağrılışı yanlış» olur.
      ③ nereden: `py arac/denetle_yayin.py` çıktısı · birim SATIR
      ④ neye karşı: bugünkü depo, koşu 8 sürerken

Ö-Y2  🔴 ÖNGÖRÜ DEĞİL — DOĞRULAMA: ret şartı sayısı 11
      ① beklenen 11 (satır 1356'da SAYDIM, tahmin etmedim)
      ② MAZERET YOK — ama ölçüt şu: 11 rakamı değil, **o zincirin
         kapının TEK ret yolu olup olmadığı.** Daha erken bir çıkış
         varsa sayı 11'den BÜYÜKTÜR ve benim okumam DARDI.
      ③ nereden: kaynakta `sys.exit` / `return` / `raise` sayımı
      ④ neye karşı: bugünkü kaynak

Ö-Y3  BUGÜN EN AZ ÜÇ ŞART ATEŞLER
      ① beklenen ≥3
      ② MAZERET VAR: çıktı bayat (koşu 8 daha inmedi) ve bayatlıkla
         ilgili şartlar kümelenir (`bayat` · `iz_bayat` · `izsiz`).
         Ama kaçının ateşlediğini görmedim; bant tek yönlü.
      ③ nereden: kapının kendi çıktısı · birim ŞART
      ④ neye karşı: bugünkü depo

Ö-Y4  🔴 EN AZ BİR ATEŞLEYEN ŞART, BAYAT ÇIKTIYLA AÇIKLANAMAZ
      ① beklenen ≥1 «kapının kendi kusuru» ya da «yapısal, koşu
         çözmez» kovasında
      ② MAZERET YOK — bu, sevkin ③. sorusunun tam kendisi ve işin
         sebebi. Sıfır çıkarsa kapı bu gece bizi bekletmiyor demektir
         ve bu İYİ HABERDİR; ama öngörümün çürümesidir.
      ③ nereden: her ateşleyen şartın gerekçesi · birim ŞART
      ④ neye karşı: bugünkü depo

Ö-Y5  KAPI, ATEŞLEYEN ŞARTI ADIYLA BASIYOR
      ① beklenen: her ret şartı için ayırt edilebilir bir satır
      ② MAZERET VAR: kapı yalnız bir ÖZET basıyor olabilir; o zaman
         hangi şartın ötüğü **koddan** çıkarılır ve bu bir
         `ölçülemedi` DEĞİL, daha pahalı bir ölçüm olur.
      ③ nereden: çıktı ↔ 11 şart adının eşleşmesi · birim ŞART
      ④ neye karşı: bu koşu
      ⚠️ ÇÜRÜRSE: `0`, «yok» ile «bakmadım» arasında ayrım yapmaz —
        basmayan bir şartı «geçti» saymam.

Ö-Y6  KAPI SIFIRDAN FARKLI KODLA ÇIKAR
      ① beklenen: çıkış ≠ 0
      ② MAZERET VAR: kapı bir «rapor» kipinde 0 dönebilir ve reddi
         yalnız metinle bildirebilir. O zaman çıkış kodu bir ölçüt
         DEĞİLDİR ve bunu bilmek merge gecesi için önemlidir.
      ③ nereden: `$?` · birim KOD
      ④ neye karşı: bu koşu
```

🔴 **MAZERETİ OLMAYAN: Ö-Y4.** (Ö-Y2 bir öngörü değil.)
🟡 Mazereti olanlar: Ö-Y1 · Ö-Y3 · Ö-Y5 · Ö-Y6.

---

## PAYDA ŞARTI

Hiçbir kalem `TUTTU` damgalanmadan önce **paydası sorulacak.** Bugün
bir kalem boş kümede `✓` bastı (`savas_basi` 0/0 → `TUTTU` yazdı,
doğrusu `SINANAMADI`ydı). Payda 0 ise damga **`SINANAMADI`.**

## ⚠️ VE BİR ŞEY ÖNCEDEN YAZILIYOR

Kapının **geçmemesi bekleniyor** — çıktı bayat. ⇒ *"Kapı reddetti"*
tek başına bir bulgu **değildir**; bulgu, **hangi şartın niçin**
ötüdüğüdür. Üç kova ayrı tutulacak:
```
🟡 BAYAT ÇIKTI    koşu 8 inince kendiliğinden susar → kayda geç, DOKUNMA
🔴 KAPININ KUSURU koşu sussa da öter → BU GECE bildirilir
⚫ ÖLÇÜLEMEDİ     şart ateşliyor ama sebebi çıktıdan okunamıyor
```
Tek sayıda toplanırsa merge gecesinde *"kapı ötüyor"* denir ve
hangisinin beklediği bilinmez.

---
---

# ⇒ SINAV SONUCU — ölçüldü · 6'nın 6'sı tuttu, VE BİLGİ ÖNGÖRÜDEN GELMEDİ

```
Ö-Y1 kapı koşuyor              🟢 TUTTU        MAZERET VARDI
Ö-Y2 ret şartı 11 · tek yol    🟢 DOĞRULANDI   (öngörü DEĞİLDİ)
Ö-Y3 ≥3 şart ateşler           🟢 TUTTU (tam 3, SINIRDA)  MAZERET VARDI
Ö-Y4 ≥1 şart bayatla açıklanamaz 🟢 TUTTU     🔴 MAZERETİ YOKTU
Ö-Y5 kapı şartı adıyla basıyor 🟢 TUTTU        MAZERET VARDI
Ö-Y6 çıkış kodu ≠ 0            🟢 TUTTU        MAZERET VARDI
```
🔴 **Altısı da tuttu ⇒ hiçbiri bir şey öğretmedi.** Bu turda bilgiyi
taşıyan şey öngörüler değil, **kendi aletimin iki kez yalan söylemesi**
oldu (aşağıda). `§11`: *"beş öngörülük bir kümede bilgiyi yalnız YANLIŞ
OLAN taşıdı."* Burada yanlış olan öngörü değil **alet**ti.

---

## ① KAPI KOŞUYOR — ve belgesiz ön koşulu YOK
```
çıkış kodu 1 · çıktı 197 satır
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.environ / os.getcwd / os.chdir kullanımı: 0
geçici dosya  tempfile.gettempdir()/_yayin_blok.js  ⇒ DEPO DIŞI
```
🟢 `_bayat_uygula`nın (`ATLAS_KOK`) ve iki `getcwd()` aletinin sorunu
kapıda **yok**: nereden çağrılırsa çağrılsın doğru kökü buluyor, ve
koşu 8 sürerken depoya **hiçbir şey yazmıyor.**

## ② RET YOLU GERÇEKTEN TEK — 11 şart
```
main() içindeki return : 1, 0     sys.exit çağrısı : 1
⇒ `return 1`in TEK koşulu 1356'daki 11 şartlık zincir
```
⇒ 1.MURAT'ın *"11"* öncülü **doğru** ve artık **doğrulanmış** —
devralınmış değil.

## ③ ÜÇÜ ÖTÜYOR, SEKİZİ SESSİZ
```
🟢 yoklar 0 · izlenmeyenler 0 · kayitsiz 0 · damgalar r6711 (tek)
🟢 izsiz 0 · _sz 1 blok temiz · _bagli iki kapı uyuşuyor · _dizinsiz 0
🔴 damga_ihlali  2
🔴 bayat
🔴 iz_bayat      5
```

## 🔴 VE ASIL AYRIM — SEVKİN ③. SORUSU
```
🟡 bayat        KOŞU ÇÖZER. donemler.js · devletler_harita.js girdiden
                geride; koşu 8 inince susar. DOKUNMA.
🟡 iz_bayat 5   KOŞU ÇÖZER — ama BEŞİNİN BEŞİ AYNI YOLDAN DEĞİL:
                  devirler · devletler_harita · donemler · petek_govde
                     → uret_petek + uret_devirler üretir
                  altlik.js  → `uret_altlik` ADIMI gerekir, ve o adım
                     YALNIZ `kos_ve_yayinla.py`de var (`_yayin_zinciri.py`de YOK).
                     Fırlatıcının `kos_ve_yayinla.py` olduğu ÖLÇÜLDÜ ⇒ inecek.
                     ⚠️ Ama yanlış zincir koşulursa altlik.js BAYAT KALIR
                       ve kapı TEK BAŞINA onun yüzünden reddeder.
🔴 damga_ihlali KOŞU ÇÖZMEZ.  css/style.css · js/app.js ÇALIŞMA AĞACINDA
                değişik (git status doğruladı), damga hâlâ r6711.
                Koşu 8 bu iki dosyaya dokunmuyor ⇒ sabaha kadar öter.
```

### 🔴 `damga_ihlali` — merge gecesini bekleyen TEK şart
```
✗  ÇALIŞMA AĞACI: 2 kod dosyası değişmiş, damga hâlâ r6711
     css/style.css
     js/app.js
     → COMMIT ETMEDEN ÖNCE: py arac/surum_damgala.py
```
⚠️ **Ve bu benim kalemim değil:** iki dosya da **Oturum 1**'in (`§7`),
ve `surum_damgala.py` `index.html`i yazar — o da Oturum 1'in. Üç yol
var ve üçü de **sahibinin kararı**: ya commit edilir (damga yükseltilerek),
ya geri alınır, ya da damga elle yükseltilir.
🟢 Geçmiş temiz: *"son 30 commit'te js/css değiştiren **0** commit
damgayı arttırmamış"* ⇒ takılı kalmış eski bir ihlal **yok**; şart
yalnız **bugünkü çalışma ağacından** ötüyor.

## ④ KAPININ SORMADIĞI SORU — ve cevabı bugün İYİ
```
koşu 8 başlangıcı (SÜREÇ damgası, beyandan değil): 2026-09-07 11:17:46
girdi dosyası: 77
🟢 koşu başladıktan SONRA değişen girdi: 0
```
Kapı *"çıktı girdiden geride mi"* diye sorar; ***"girdi, koşu
başladıktan SONRA mı değişti"*** diye **sormaz.** `§7`de adıyla kayıtlı
vaka bu: *"koşu 10s35dk çalıştı, temiz bitti, kapı REDDETTİ"* — çünkü
koşu sürerken `data/` altı kez değişmişti.
⚠️ **Bu ölçüm ANLIKTIR.** Koşu bitene kadar `data/` donuk kalmalı ve
soru **koşu bitmeden bir kez daha** sorulmalı.

---

## 🔴 VE BİLGİYİ TAŞIYAN ŞEY: KENDİ ALETİM İKİ KEZ YALAN SÖYLEDİ

### ⓐ GİRİNTİ DERİNLİĞİ BİR SÖZLEŞME DEĞİLDİR
```
yazdığım   re.findall(r"\n    return\s+(\S+)", govde)     ← DÖRT boşluk
gerçek     `return 1` bir `if`in İÇİNDE, SEKİZ boşlukla girintili
alet dedi  "🔴 BİRDEN ÇOK ret yolu — 11 sayısı EKSİK"
doğrusu    "🟢 TEK ret yolu"
```
⇒ Alet **yanlış alarm** verdi ve o alarm doğrudan sevkin ②. sorusunu
yanlış cevaplıyordu. Çare: `\s+`.

### ⓑ ÖTÜP ÖTMEDİĞİNİ TAHMİN ETMEK ≠ KAPIYA SORMAK
İlk yazımda her şart için *"sayı 0 değilse ötüyor"* diye **kendi
ölçütümü** kurmuştum — ve `_sz` için `"temiz" not in cikti` gibi kırılgan
bir kural yazmıştım (çıktıda *"SONUÇ: TEMİZ"* de geçiyor).
🟢 Çare: kapı **her satıra kendi `durum` değişkeninden bir ✓/✗ basıyor**
(satır 814 · 819 · 1112 · 1164 · 1222 · 1341). O işaret **değişkenin
doğruluk değerinin ta kendisi.** Artık işaret okunuyor, sayı yeniden
yorumlanmıyor.
📌 `§11`in *"bir aletin cevabını DOĞRU YERDEN okuduğunu göster"*
dersinin bu turdaki uygulaması — ve dersi **uygularken** ihlal ettim.
⚠️ Tek istisna kayıtlı: `izsiz` ile `iz_bayat` **tek satırı paylaşıyor**
(`durum_iz` ikisine birden bakıyor) ⇒ o ikisi için sayı okunuyor, ve
sebebi kodda yazılı.

---

## ⚫ ÖLÇÜLMEDİ — `bulunamadı` değil
```
· `damga_ihlali`in çözümü DENENMEDİ (`surum_damgala.py` koşturulmadı):
  başkasının dosyası, `§7`.
· Kapının 11 şartının hepsi ATEŞLENMEDİ: bugün 8'i sessiz ve onları
  zorlamak `data/`ye dokunmayı gerektirir ⇒ koşu 8 boyunca YASAK.
  ⇒ *"8 şart geçiyor"* demiyorum; ***"8 şart bugün ötmüyor"*** diyorum.
· `iz_bayat`ın koşudan sonra gerçekten susacağı bir ÖNGÖRÜ, ölçüm değil.
```
