# D256 — ÜÇÜNCÜ SINIF: "çözülüyor AMA YANLIŞ çözülüyor" — hiçbir denetim sormuyor

**Tarih:** 1 Ekim 2026 · **Ölçen:** ODAK-KAPAT (dört bağımsız vaka)
**Bağlı:** `D249` (kişi adı yerleşim adıyla eşleşir) · `D204` · `D250`

## SLOGAN

Odak denetimi iki soru soruyor: *alan yazılmış mı* (odaksızlık) ve *yazılan
alan çözülüyor mu* (kırık atıf). **Üçüncü soruyu kimse sormuyor:
ÇÖZÜLEN YER DOĞRU YER Mİ?**

Çözülen bir yanlış ad, denetimde **TEMİZ** görünür — çünkü denetim
"çözülüyor" sorusuna *evet* alır ve durur.

```
odaksiz          alan YOK              → OLCULUYOR
kirik atif       alan var, COZULMUYOR  → OLCULUYOR
🔴 YANLIS COZUM  alan var, COZULUYOR,  → HICBIR DENETIM SORMUYOR
                 ama YANLIS YERE
```

## DÖRT ÖLÇÜLMÜŞ VAKA

### ① `Mora` → Tripoliçe ŞEHRİ (bölge/şehir karışması)
Havuzda `Mora (Tripoliçe)` var. `app.js`in ad çözümü `" ("` **öncesini** de
kabul ediyor ⇒ `yer_id:"Mora"` **çözülür** ve kamerayı **Tripoliçe şehrine**
götürür. Ama Mora bir **yarımada**; "Mora Despotluğu" maddesi bir şehirde
geçmiyor. Denetim: temiz.

### ② `Mora` → **İSVEÇ** (kıtalar arası, en çarpıcı)
Havuzda **İKİ** `Mora` var:
```
Mora              61.006 / 14.542    ISVEC
Mora (Tripolice)                      YUNANISTAN
```
Kamerun'daki **Mora kalesinin** teslimini anlatan maddeye `yer_id:"Mora"`
yazılsa, **birebir ad eşleşmesi İsveç'i seçer** ve kamera **~5.000 km** sapar.
Denetim: temiz.

### ③ `Freiburg` ≠ `Fribourg`
Havuzdaki `Freiburg` **Breisgau/ALMANYA**. İsviçre'deki `Fribourg` atlasta
**yok**. *"Fribourg Barışı"* maddesine havuzdaki Freiburg yazılsa kamera
**yanlış ülkeye** gider. Denetim: temiz.

### ④ `Isparta` ⊃ `Sparta`
Alt dizgi taramasında `Isparta`, `Sparta`yı **içeriyor**. Antik Sparta
maddesine Isparta çözülebilir.

## NİÇİN BELİRSİZLİK SINAVI GÖRMÜYOR

`D249`de ölçülmüştü: belirsizlik sınavı *"bu ad havuzda BİRDEN ÇOK noktaya
mı çözülüyor"* diye sorar. Yukarıdaki dördünde:
- ①③④'te havuzda o ad için **TEK** nokta var ⇒ "belirsiz değil" ⇒ temiz
- ②'de iki nokta var ama biri **BİREBİR**, öteki parantezli ⇒ birebir kazanır
  ve yine "belirsiz değil" sayılır

⇒ Sınav **ÇOKLUĞU** ölçüyor, **DOĞRULUĞU** ölçmüyor. Ve tek nokta, bir
kusurun en iyi saklandığı yerdir.

## 🔴 VE KUSUR KENDİ KANITINI ÜRETİR

Bir yanlış `yer_id` yazıldıktan sonra her denetim onu "çözülüyor, tek nokta,
temiz" diye raporlar. Yani **yazıldığı an denetlenemez hâle gelir.** Bu,
`D249`un da ana uyarısıydı; burada mekanizması farklı (eşleştirici fazla
esnek, orada ad tesadüfen eşleşiyordu) ama sonuç aynı.

## KURAL — yazarken

1. **Havuzda `"X (Y)"` biçiminde bir ad varsa ve X bir BÖLGE, Y bir ŞEHİRSE,
   o adı BÖLGE maddesine YAZMA.** (ODAK-KAPAT bunu `Harzem → Hîve`de
   kendiliğinden uyguladı: Harzem bölge, başkenti yazmadı.)
2. **Aynı ad birden çok ülkede olabilir — KOORDİNATI oku, adı değil.**
   `Mora` İsveç'te de var.
3. **Yazımlar benzer ama yerler ayrı:** `Freiburg`/`Fribourg` ·
   `Akkerman`/`Akkirman` · `Hive`/`Hîve`. Havuzun **tam yazımını** bul;
   yakın yazım bir eşleşme değil bir TUZAKTIR.
4. **Alt dizgi taraması tek başına kullanılmaz** (`Isparta` ⊃ `Sparta`).

## KURAL — denetim tarafı (AÇIK KALEM)

Bu sınıfı ölçen bir denetim **YOK** ve yazılması gerekiyor. Ölçülebilir
biçimi: her `yer_id` için çözülen noktanın koordinatı ile maddenin
`taraflar`/`devlet` kimliklerinin o tarihteki coğrafyası arasındaki mesafe.
Eşiği aşan her kalem şüpheli. (Kamerun ↔ İsveç 5.000 km bu sınavdan
kaçamazdı.)
⚠️ Bugün bu denetim yok; dört vaka da **işçinin gözüyle** yakalandı. Yani
bugünkü koruma bir ARAÇ değil, bir DİKKAT — ve `D251`in dediği gibi,
yalnız dikkatle ayakta duran bir adım protokolde YOKTUR.

## BAĞLI

`D249` (kişi/hanedan adı yerleşim adıyla eşleşir) · `D204` (devlet var, yeri
yanlış) · `D250` (kör ölçümün kaydı) · `D215` (Türkçe yazım ekseni) ·
`denetim/ODAK-KAPAT-BIZANS-1001.md` · `denetim/ODAK-KAPAT-SINIRAFRIKA-1001.md`
