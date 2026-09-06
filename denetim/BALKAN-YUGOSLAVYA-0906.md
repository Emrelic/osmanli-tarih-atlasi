# `yugoslavya` KİMLİK DENETİMİ — 1923-10-28 · 64 nokta

> Oturum: `BALKAN-DOĞU AVRUPA` · 7 Eylül 2026
> Alet: `denetim/ARAC-YUGOSLAVYA-1923-0906.js`
> Soru: kimlik **1918-12-01'de doğdu — öncesi ne?** SHS Krallığı üç ayrı
> mirastan kuruldu (Sırbistan · Karadağ · Habsburg) ve üçü farklı zincir ister.

---

## ⓪ SONUÇ — KÜME TEMİZ, TEK BİR SİSTEMİK KONVANSİYON VAR

```
64 nokta · İKİ giriş yolu, ikisi de doğru tarafta:
   1918-12-01  <- sirbistan-kralligi   36   ✓ künyeyle BİREBİR
   1918-11-11  <- avusturya            28   🟡 künyeden 20 gün ERKEN
BOŞLUK: 0     ÖRTÜŞME: 0
```
🟢 Önceki kimliklerin ikisi de doğru: Sırbistan tarafı `sirbistan-kralligi`
(künyesi tam **1918-12-01**'de bitiyor), Habsburg tarafı `avusturya`.
🟢 Hiçbir noktada boşluk ya da örtüşme yok — zincirler uç uca.

---

## ① 🟡 `1918-11-11` BİR KONVANSİYON — ve ÜÇ KİMLİĞİ birden etkiliyor

Tek başına `yugoslavya`ya bakınca *"20 gün erken"* görünüyor. Atlas çapında
ölçülünce **desen çıktı**:

```
`1918-11-11`de BİTEN:     avusturya 89 · sovyet-rusya 8 · almanya 1
`1918-11-11`de BAŞLAYAN:
   yugoslavya          28   🟡 künye f: 1918-12-01  → 20 gün erken
   macaristan-naiplik  20   🟡 künye f: 1918-11-16  →  5 gün erken
   letonya              3   🟡 künye f: 1918-11-18  →  7 gün erken
   sirbistan-kralligi  15 · cekoslovakya 12 · polonya 9 ·
   romanya-kralligi     8 · avusturya 2 · italya 1      (bunlar pencere içi)
```

🟢 **VE KONVANSİYON KRONOLOJİDE BEYAN EDİLMİŞ** — çekirdekte, o günde:
> `olaylar_ok109.js` · `1918-11-11`:
> «**Avusturya-Macaristan mirasının ardıl devletlere geçişi — altı devlet
> haritaya giriyor**»

⇒ Yani bu bir kaza değil: Habsburg'un sonu **tek bir güne** toplanmış ve
ardılların hepsi o gün haritaya girmiş. Alternatif — her ardılı kendi
kuruluş gününde başlatmak — **5 ilâ 20 günlük boşluklar** açardı ve
`Değişmez 1`i bozardı.

### 🔴 AMA KONVANSİYON KÜNYE TARAFINDA BEYAN EDİLMEMİŞ
Üç künyenin `ozet` alanı da okundu: `yugoslavya` · `macaristan-naiplik` ·
`avusturya-cumhuriyet`. **Hiçbiri verinin künyeden erken başladığını
söylemiyor.**
```
etkilenen nokta: 28 + 20 + 3 = 51
bugün GÖRÜNMÜYOR çünkü HAYALET_TOLERANS_GUN = 400
```
⚠️ Tolerans daraltılırsa (ya da `4d`yi taklit eden bir alet toleransı
taşımazsa) **51 nokta kusur diye raporlanır** — ve olmadıkları hâlde.
📌 Bu, `§11`in *"bir aleti taklit eden ölçüm onun EŞİĞİNİ de taşımalı"*
dersinin **ters yüzü**: burada eşik doğru çalışıyor ve bir konvansiyonu
görünmez kılıyor; konvansiyonun kendisi **yazılı olmadığı için** eşik
değişirse kusur gibi görünecek.

⇒ **ÖNERİ (hüküm koordinatörün):** üç künyenin `ozet` alanına bir cümle —
*"veri `1918-11-11` (Habsburg mirasının devri) gününü kullanır; künye `f:`
devletin kendi kuruluş günüdür, fark KASITLIDIR"*. Yazılırsa bir sonraki
oturum onu kusur sanmaz.

---

## ② 🟢 VE BENİM `karadag` YAMAM BU KONVANSİYONA UYUYOR

`denetim/yer_yama_balkan_1923.js` Cetinje ve Podgorica'yı `karadag
→ 1918-11-26` sonra `yugoslavya 1918-11-26 →` yapıyor — künyeden **5 gün
erken**. Ölçüm bunun **istisna değil kural** olduğunu gösterdi: 28 nokta
zaten 20 gün erken başlıyor.
🟢 Yama yazılırken bunu *"tolerans içinde"* diye gerekçelendirmiştim;
şimdi daha güçlü bir gerekçesi var — **verinin kendi konvansiyonu.**

---

## ③ 🟡 SEÇİLMEYEN YOL — `SHS Devleti` künyesi YOK

Tarihsel olarak Habsburg'un güney Slav toprakları 1918-10-29'da
**Slovenler, Hırvatlar ve Sırplar Devleti**ni (Država SHS) kurdu ve
1 Aralık'ta Sırbistan'la birleşti. Yani 11-11 ile 12-01 arası o topraklarda
ayrı bir yapı vardı.
```
`devletler.js` tarandı (id'de shs|sloven|hirvat|dalmac|banat|vojvod): 🔴 YOK
```
⇒ Atlas o ara yapıyı **modellemiyor** ve bunun yerine `yugoslavya`yı 20 gün
öne çekiyor. Bu bir kusur değil bir **tercih** — ve `Ammâroğulları` ile
`Sisam` vakalarının aynı ailesi: *modelin ifade edemediği ara statü.*
🔴 Ama öteki ikisinden **farkı var**: burada tercih `Değişmez 1`i koruyor
(boşluk açmıyor), ötekilerde tercih bir kimliği yanlış yere yayıyordu.

---

## ④ DAMGALAR

```
ölçtüm      64 noktanın giriş günü ve önceki kimliği · boşluk/örtüşme 0 ·
            `1918-11-11`in atlas çapındaki kullanımı (biten 98 · başlayan 98) ·
            üç künyenin `ozet` beyanı · SHS kimliğinin yokluğu
bulunamadı  `SHS Devleti` künyesi — `devletler.js` tarandı, YOK
            (id TAHMİN EDİLMEDİ, altı desenle tarandı)
okumadım    TDV `yugoslavya` · `sirbistan` gövdelerinin 1918 bölümü —
            bu tur VERİNİN İÇ TUTARLILIĞIYLA sınırlı kaldı
dokunmadım  hiçbir kayıt — SALT ÖLÇÜM, yama YAZILMADI
```

📌 **İki kimlik denetimi arka arkaya yamasız bitti** (`yunanistan` 97 ·
`yugoslavya` 64 = 161 nokta). Bu bir verimsizlik değil bir **ölçüm sonucu**:
`4c`/`4d` temiz çıkan bir bölgede, kalan kusurlar ya künye içinde saklıdır
(Besarabya · `OSMANLI`/`tbmm`) ya da **hiç yoktur.** İkisini ayırmanın tek
yolu tek tek bakmaktır, ve bakıldı.
