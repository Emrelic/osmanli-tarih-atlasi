# `sovyet-rusya` KİMLİK DENETİMİ — 1923-10-28 · 65 nokta

> Oturum: `BALKAN-DOĞU AVRUPA` · 7 Eylül 2026
> Alet: `denetim/ARAC-SOVYET-1923-0907.js` · `denetim/ARAC-SOVYET-ALT-0907.js`
> Emre'nin sevki: *"ikisini de ölç, sonra Sohum'a geç."*

---

## ⓪ TABAN

```
BENİM BÖLGEMDE 65 nokta   (dünya geneli 399 · 334'ü başka bölgelerde)
GİRİŞ YOLU: 1917-11-07 <- rusya-gecici-hukumet   65/65   — TEK yol
```
⇒ Gün ya da önceki kimlik sorunu **yok**. Soru tek: *bu 65'in hepsi 1923'te
gerçekten Sovyet miydi?*

---

## ① 🔴🔴 İKİSİ DEĞİLDİ — VE İKİSİ DE BU OTURUMUN KAÇIRDIKLARIYDI

```
Akkirman  46,20 / 30,34   `sovyet-rusya`   🔴 Besarabya · dünkü yamada YOK
Hotin     48,51 / 26,49   `sovyet-rusya`   🔴 Besarabya · dünkü yamada YOK
```

### Kusur yöntemdeydi — kutu, ad listesinin yerine kullanıldı
Besarabya kümesini bir **coğrafî kutu** ile seçmiştim
(lat 45,2-48,6 · lon 26,6-30,3), oysa TDV `bucak` ilçeleri **adıyla** sayıyor:
> «…eski Bucak arazisi ise **İsmâil, Cetatea Alba (AKKİRMAN), Tighina
> (Bender) ve Kahul** adlarıyla dört vilâyete bölünmüştür.»

```
Akkirman  lon 30,34 → kutuyu 0,04 derece AŞIYOR      🔴 KAÇTI
Hotin     lon 26,49 → kutunun 0,11 derece ALTINDA    🔴 KAÇTI
```
🟢 Ve Hotin'in **kendi TDV maddesi var**, tek cümleyle:
> `hotin` (200, 11.176 kar.): «**1918'de Hotin ile Besarabya Romanya'ya
> verildi.**»

📌 **DERS:** elimde kaynaktan gelen bir **AD LİSTESİ** varken bir
**DİKDÖRTGEN** kullandım. Ad listesi kutudan **önce** gelir; kutu yalnız ad
listesi **yokken** bir yaklaşıklamadır. İki nokta yüzde birkaç derecelik bir
sınırdan düştü ve ikisi de kaynakta **adıyla** yazılıydı.
🟢 Ve yakalayan şey bir denetim değil, **bir sonraki kalemin ölçümü** oldu —
65 nokta listelenince ikisi orada duruyordu. `§7`nin ÇAPRAZ gerekçesinin bir
başka yüzü: bu sefer çapraz bakan **kendi bir sonraki turumdu**.

⇒ `denetim/yer_yama_balkan_1923.js` **11 → 13 kayıt** (yerinde güncellendi,
düzeltme gerekçesi başlıkta).

---

## ② 🟢 UKRAYNA / BELARUS SSC — KUSUR YOK, KÜNYE BEYAN EDİYOR

`devletler.js` altı desenle tarandı
(`ukray|belarus|beyaz-rus|galic|volhin|podol`):
```
ayrı Ukrayna SSC / Belarus SSC künyesi   🔴 YOK
veride kullanım                          🔴 0
```
🟢 **Ama bu bir boşluk değil — tercih künyede AÇIKÇA yazılı:**
```
ad    : «Sovyet Rusya / SSCB»
özet  : «…Ukrayna, Beyaz Rusya ve Transkafkasya ile birleşerek SSCB'yi
         oluşturdu»
kronoloji: 1922-12-30 birlesme — «Rusya, Ukrayna, Beyaz Rusya ve
         Transkafkasya birleşerek SSCB'yi kurdu»
```
Ve kesit tarihi **1923-10-28**, yani birleşmeden **on ay sonra**.
⇒ Tek kimlik doğru, beyanlı, tarihe uygun. **Yama yok.**

---

## ③ 🟢 RİGA HATTI (1921-03-18) — ATLAS ZATEN MODELLEMİŞ

```
`1921-03-18` veride 14 uç · YEDİ nokta o gün `sovyet-rusya` → `polonya`:
   Brest-Litovsk · Pinsk · Grodno · Kovel · Lutsk ·
   Volodymyr-Volynskyi · Rivne
`polonya`nın EN DOĞU noktası    26,25°  (Rivne)
`sovyet-rusya`nın EN BATI'sı    26,49°  (Hotin)
⇒ İki küme ÖRTÜŞMÜYOR · yanlış tarafta kalan nokta: 0
```
📌 Hattı bir **boylam varsayımıyla** değil, **verinin kendi `polonya`
noktalarıyla** ölçtüm — atlasın çizdiği sınır neredeyse, ölçüt odur.
**Kusur yok.**

---

## ④ KALAN 63 — bu tur VERİ ölçümüydü

Kırım (9) · Ukrayna/Orta (55) · Kuban-Taman-Anapa · Minsk. Hepsi Riga
hattının doğusunda ve 1920-11 sonrası Sovyet.
🔴 **Kaynağa nokta nokta SORULMADI** — damga: **okumadım**. Bu tur verinin
iç tutarlılığı ve iki alt sorusuyla sınırlı kaldı.

---

## ⑤ DAMGALAR

```
ölçtüm      65 noktanın giriş yolu · Akkirman/Hotin'in kutu dışılığı ·
            TDV `hotin` ve `bucak` · künye taraması (6 desen) ·
            Riga hattı (verinin kendi sınırıyla) · `sovyet-rusya` künyesinin
            beyanı
düzelttim   kendi yamamı (11 → 13 kayıt)
okumadım    kalan 63 noktanın nokta nokta kaynak denetimi
dokunmadım  `data/*.js` (Koşu 7b canlı)
```

📌 **Ve bu turun asıl kazancı bir kusur değil bir YÖNTEM DÜZELTMESİ:**
*ad listesi kutudan önce gelir.* Aynı hata bugün ikinci kez ortaya çıktı —
sabah `letonya`ya yanlış gerekçe yazmıştım (gerekçe ödünç vermek), burada
kutu ad listesinin yerine geçti. İkisi de **kendi metnimi/ölçütümü
sınayarak** yakalandı, kural bilerek değil.
