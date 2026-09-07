# ÖNGÖRÜ — `denetim/` YAMALARININ SAHİPLİĞİ

> **SINAV-KOSU8-0907** · sevk `1.MURAT` · 7 Eylül 2026
> 🔴 **ÖLÇÜMDEN ÖNCE YAZILDI.** Hiçbir JSON'un içi açılmadı. Yalnız
> *aletler* incelendi (bunlar ölçüm **aracı**, ölçüm **sonucu** değil) ve
> payda sayıldı: `denetim/*.json` = **322**, `YAMA-KUNYE-*` 13,
> `KRONOLOJI-*` 22. Sahibi: bu oturum. Sınav anı: **hemen.**

## ⓪ ÖNCE BİR DÜZELTME — «3 → 1» İKİ AYRI SORUNUN CEVABI

1.MURAT *"sen 3 saydın, makine 1 görüyor"* dedi. Ölçtüm (`7260b83`):
```
aletin okuduğu anahtarlar   d.get("_HEDEF") or d.get("hedef")
benim saydığım              _HEDEF · hedef_dosya · hedef_dosya_onerisi · hedef …
```
⇒ **İkisi de doğru, farklı şeyi ölçüyor:**
```
3 = dosyanın YAPILANDIRILMIŞ bir hedef alanı VAR
1 = ALETİN o alanı OKUYABİLDİĞİ
```
🔴 **Ve aradaki 2, bir bulgu:** `ZEND` ve `AVRUPA` hedefini
`hedef_dosya` **alanında** söylüyor — serbest metinde değil. Alet onu
okumuyor çünkü **anahtar kümesi dar.** Bu, `not` kilidinin birebir aynı
sınıfı: ***aracın alan kümesi eksik.*** Tek satırlık düzeltme (`hedef_dosya`
eklenmesi) aletin gördüğünü **1 → 3** yapar.
⇒ Bu, önümdeki ölçümün de ölçütünü belirliyor: **«beyanlı» iki kademeli
sayılacak** — *alan var* ve *ALET OKUYOR*.

---

## ÖNGÖRÜLER — dört alanla

```
Ö-P1  «YAMA CİNSİ» JSON sayısı 322'nin AZINLIĞI olacak: 40 ≤ N ≤ 140
      ① beklenen bant  ② mazeret VAR: «yama cinsi»nin tanımı benim
         seçimim; ölçüt gevşerse N büyür. O yüzden ölçüt AŞAĞIDA yazılı
         ve sonradan değiştirilmeyecek.
      ③ nereden: denetim/*.json · birim DOSYA
      ④ neye karşı: bugünkü depo

Ö-P2  SAHİPSİZ (③+④) ORAN OLARAK ÇOĞUNLUK: ≥ %60
      ① beklenen ≥%60
      ② MAZERET YOK — iki glob yalnız 35 dosyayı tutabiliyor ve
         `_sahiplik_uygula` `denetim/`e HİÇ bakmıyor (`data/` tarıyor).
         Aritmetik zaten bunu söylüyor; ölçüm onu sayacak.
      ③ nereden: glob eşleşmesi · birim DOSYA
      ④ neye karşı: bugünkü depo

Ö-P3  ⑤ İKİ ALET BİRDEN sahipleniyor = 0
      ① beklenen 0
      ② MAZERET YOK — `YAMA-KUNYE-*` ile `KRONOLOJI-*` önekleri AYRIK;
         çakışma ancak bir dosya ikisiyle de başlarsa olur, ki imkânsız.
      ③ nereden: iki glob'un kesişimi · birim DOSYA
      ④ neye karşı: bugünkü depo
      ⚠️ Tutması BİLGİ TAŞIMAZ (aritmetik). Yalnız ÇÜRÜRSE bilgi taşır —
         ve çürürse üçüncü bir glob var demektir ki onu bilmiyorum.

Ö-P4  MAKİNE OKUNUR hedef beyanı ORAN OLARAK KÜÇÜK: ≤ %20
      ① beklenen ≤%20
      ② MAZERET YOK — 12 dosyalık örneklemde 1/12 çıkmıştı (%8)
      ③ nereden: `_HEDEF`/`hedef` anahtarı · birim DOSYA
      ④ neye karşı: bugünkü depo

Ö-P5  🔴 ③ SAHİPSİZ+BEYANLI kovası BOŞ ÇIKACAK
      ① beklenen 0
      ② MAZERET YOK
      ③ sebebi: hedefini yapılandırılmış bir alanda beyan etme
         ALIŞKANLIĞI, sahipli bir aletin varlığıyla birlikte doğar.
         Sahipsiz bir dosyanın beyan etme SEBEBİ olmaz.
      ④ neye karşı: bugünkü depo
      ⚠️ ÇÜRÜRSE değerli: sahipsiz ama hedefini söyleyen bir dosya,
         «yama var, aleti yok» sınıfının en temiz kanıtıdır.
```

## ÖLÇÜT — şimdi yazılıyor, sonradan değiştirilmeyecek

```
YAMA CİNSİ  = üst düzeyde şu anahtarlardan EN AZ BİRİ:
              kunyeler · maddeler · madde · yamalar · yama · oneri ·
              oneriler · eklenen · kayitlar
              YA DA üst düzey bir DİZİ ve öğeleri `id` ya da `ad` taşıyor
SAHİPLİ     = `_kunye_uygula` (denetim/YAMA-KUNYE-*.json) ya da
              `_kronoloji_uygula` (denetim/KRONOLOJI-*.json) glob'u tutuyor
BEYANLI-alan = `_HEDEF` · `hedef` · `hedef_dosya` · `hedef_dosya_onerisi`
BEYANLI-alet = yalnız `_HEDEF` · `hedef`   (aletin BUGÜN okuduğu)
```

🔴 **MAZERETİ OLMAYANLAR: Ö-P2 · Ö-P3 · Ö-P4 · Ö-P5.** Yalnız Ö-P1'in
mazereti var ve yukarıda yazılı.

⚠️ **VE `_HEDEF` BİR ÖNERİDİR, DAYATMA DEĞİL.** 1.MURAT'ın ayrımı:
*bir sözleşme önermek ile onu zorunlu kılmak ayrı yetkiler.* Ölçüm
sözleşmeyi **ölçer**, koymaz.
