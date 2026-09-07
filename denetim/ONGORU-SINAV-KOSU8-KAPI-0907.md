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
