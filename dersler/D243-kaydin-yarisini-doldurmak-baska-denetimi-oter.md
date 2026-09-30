# D243 — Kaydın BİR KISMINI doldurmak, AYNI KAYITTA başka bir denetimi ötebilir

**Slogan:** Bir kaydı eksik hâlden yarı-dolu hâle getirmek, onu bir denetimin
evreninden **başkasının evrenine taşır.** Kusur o an doğmaz — **görünür olur.**
Ve bu, düzeltmeyi yapan oturumun "bozdum mu?" diye sormasına yol açar; sormak
doğrudur, cevap "hayır"dır.

---

## VAKA — 30 Eylül / 1 Ekim 2026, Katar Yarımadası

`data/yerlesimler_ek_korfez.js` içindeki nokta:

```js
{ ad:"Katar Yarımadası (iç, dolgu)", tur:"bolge", lat:25.40, lon:50.95,
  bos:"devletsiz",
  neden:"… 1559 öncesi ve 1670 sonrası sahipsizlik KASITLI HÜKÜM DEĞİL:
         bağlılık BULUNAMADI (TDV katar 1559'dan 1776'ya atlıyor) …",
  d:[], s:[] }          ← 🔴 ÖNCESİNDE `s:` BOŞTU
```

`UYGULA-YERLESIM-0930` oturumu kayda **iki pencere** yazdı (TDV `katar`
alıntılı):
```
s:[{f:"1868-01-01", t:"1871-09-20", d:"katar"},
   {f:"1913-07-29", t:"1923-10-29", d:"katar"}]
```

Ve `py arac/denetle.py` **Değişmez 1b**de ihlal verdi:
```
✗ BEYANSIZ pencere arası boşluk: 1 (beklenen 0)
  Katar Yarımadası (iç, dolgu)  1670-01-01 → 1868-01-01  (72.317 gün sahipsiz)
```

---

## SEBEP — nokta EVREN DEĞİŞTİRDİ

`1b` dalının **kendi yorumu** şöyle diyor:

> *"Penceresi HİÇ OLMAYAN noktalar buraya girmez — onlar kasten boş dolgu
> noktaları ve zaten Değişmez 1'in sayısında görünüyorlar."*

⇒ `s:[]` iken nokta `1b`nin evreninin **dışındaydı**. İki pencere yazılınca
**içine girdi** ve 1868 öncesi boşluğu ölçülebilir hâle geldi.

```
ÖNCE:  s:[]               → 1b evreni DIŞI   → boşluk ölçülemez
SONRA: s:[1868…, 1913…]   → 1b evreni İÇİ    → 1670→1868 boşluğu GÖRÜNÜR
```

**Boşluk yeni doğmadı.** 1670-1868 arası sahipsizlik kaydın `neden:` alanında
zaten **kaynağıyla yazılıydı**: TDV `katar` 1559'dan 1776'ya atlıyor, TDV
`riyad` Benî Hâlid geçişini yalnız *"XVII. yüzyılın ikinci yarısı"* diye
veriyor ve **yılın kendi kaynağı bulunamadı.** Kusur beyanlıydı; ölçülebilir
değildi.

---

## ÇARE — beyan listesine ad ve UÇLARLA girdi

`arac/denetle.py`nin `BEYAN_EDILEN_BOSLUK` kümesine eklendi:
```python
("Katar Yarımadası (iç, dolgu)", "1670-01-01", "1868-01-01"),
```
⚠️ Bu bir **tavan değil ADLI LİSTEDİR** — dalın kendi uyarısı: *"Çıplak tavan
(`<= 3`) başka bir yerde doğan DÖRDÜNCÜ boşluğu üçüncüsü kapanınca gizler.
Liste, ADI VE UÇLARI tutmayan her boşlukta öter."*
🔜 Borç: Benî Hâlid / Âl Sânî öncesi Katar künyesi yazılırsa satır **silinir.**

---

## KURAL

1. **Bir kaydın bir kısmını doldururken, o kaydın hangi denetim evrenlerine
   girdiğini sor.** "Eksik" ile "yarı dolu" farklı evrenlerdir; ikincisi daha
   çok soru alır.
2. **Yeni ihlal ≠ yeni kusur.** Düzeltmeden sonra doğan bir ihlal, düzeltmenin
   bir şeyi **bozduğu** anlamına gelmez; çoğu zaman bir şeyi **görünür
   kıldığı** anlamına gelir. Teşhis, ihlalin doğuş anına değil kaydın kendi
   metnine bakılarak verilir — burada cevap kaydın `neden:` alanındaydı.
3. **"Yarım düzeltme yapmayacağım" yanlış sonuç.** Doğru sonuç: yarım
   düzeltmenin hangi kapıyı öteceğini **önden ölç**, ve öteceği kapının beyan
   mekanizmasını **aynı teslimde** hazırla.

---

## TERSİ DE DOĞRU — ve daha tehlikeli

Bir kaydı **tamamen boş** bırakmak onu birçok denetimin evreninden çıkarır ve
"temiz" görünmesini sağlar. `CLAUDE.md §11`: *"boş küme her öngörüyü
doğrular."* ⇒ Sıfır penceresi olan bir nokta, `1b` için **her zaman** temizdir;
bu bir sağlık işareti değil **ölçülemezlik** işaretidir.

---

## BAĞLI DERSLER

- `D234` çare kayda uygulandı, sınıfa uygulanmadı — kardeş: orada düzeltme
  **yetersizdi**, burada düzeltme **yeni bir soru açtı**.
- `D238` tek havuz iki soruya hizmet ediyordu · `D242` "çözülüyor ≠ doğru yere
  çözülüyor" — üçü de **evren** ailesinden: bir sayı okunurken evreni de okunur.
- `CLAUDE.md §11` *"ölçülemedi ≠ yok ≠ temiz."*
