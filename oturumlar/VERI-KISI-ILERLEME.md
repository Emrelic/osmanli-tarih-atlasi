# VERİ KİŞİ — ilerleme

**Oturum:** VERİ KİŞİ (Opus) · **Dosya:** `data/kisiler.js` (tek)
**Tarih:** 10 Ağustos 2026 · **Şartname:** `oturumlar/VERI-KISI.md`

---

## TESLİM — `281 → 287`

| # | kart | `id` | TDV slug | durum |
|---|---|---|---|---|
| 1 | İvazzâde Halil Paşa | `ivazzade-halil-pasa` | `ivazzade-halil-pasa` 🟢 200 | yazıldı |
| 2 | Hadım Ali Paşa (Atik Ali Paşa, sadrazam) | `atik-ali-pasa` | `atik-ali-pasa` 🟢 200 | yazıldı |
| 3 | Kemal Reis | `kemal-reis` | `kemal-reis` 🟢 200 | yazıldı |
| 4 | Burak Reis | `burak-reis` | müstakil madde **YOK** (302) → `kemal-reis` | yazıldı |
| 5 | Aydınoğlu Cüneyd Bey | `cuneyd-bey` | `cuneyd-bey` 🟢 200 | yazıldı |
| 6 | Elvend Bey (Akkoyunlu) | `elvend-bey` | müstakil madde **YOK** (302) → `akkoyunlular` | yazıldı |
| — | **I. Ahmed** | — | — | 🔴 **YAZILMADI** — aşağıya bak |

Altısında da `kaynak:` **dolu**; ikisinde *"müstakil maddesi bulunamadı"* açıkça yazılı.

---

## 🔴 `I. Ahmed` YAZILMADI — ve sebebi ölçüldü

Şartname ②'nin uyarısı gerçekleşti. Ama kusur *"iki otorite"*den de ağır:
**kart yazılsaydı ekranda ASLA görünmeyecekti.**

`js/app.js:3489`, `olayOzel`in kişi döngüsünün ilk satırı:
```js
o.kisiler.split(",").slice(0, 4).forEach(function (ad) {
  if (padisahEslesmesi(ad)) return;   // padişah zaten portre olarak görünüyor
  var k = kisiBul(ad);                // ← "I. Ahmed"te buraya HİÇ VARILMIYOR
```
`padisahEslesmesi("I. Ahmed")` tutuyor (`data/padisahlar.js:398`, `id:"ahmed1"`)
⇒ döngü o adda geri dönüyor, `kisiBul` **çağrılmıyor bile.**

📌 Yani sekiz maddede kart çıkmamasının sebebi *"kayıt yok"* değil,
**kasıtlı bir tasarım**: padişah zaten portre olarak sahnede. Kart yazmak
`kisiler.js` ile `padisahlar.js` arasında ikinci bir otorite doğurur ve
**hiçbir görsel karşılığı olmaz.**

---

## NASIL SINANDI — iki yönlü, ÖRNEKLEMSİZ (`C13`)

Sınav aleti `app.js`in **gerçek** `kisiBul` / `padisahEslesmesi` / `ozAdlar`
kodunu dosyadan kesip `eval` ediyor — **yeniden yazmıyor.**
📌 (`§11`: *"kendi yazdığın ayrıştırıcı, var olan bir ayrıştırıcıdan her zaman
kötüdür"* — bu sefer ders kod tarafında uygulandı.)

Evren: bütün `data/olaylar*.js` dosyalarındaki `kisiler:` alanlarının
**tamamı** — örnekleme yok.

```
EVREN: 1000 benzersiz ad · kisiler.js 281 -> 287
🟢 YENİ KART   Akkoyunlu Elvend Bey      : — -> Elvend Bey (Akkoyunlu)
🟢 YENİ KART   Aydınoğlu Cüneyd Bey      : — -> Aydınoğlu Cüneyd Bey
🟢 YENİ KART   Elvend Bey (Akkoyunlu)    : — -> Elvend Bey (Akkoyunlu)
🟢 YENİ KART   Kemal Reis                : — -> Kemal Reis
🟢 YENİ KART   Sadrazam Hadım Ali Paşa   : — -> Hadım Ali Paşa (Atik Ali Paşa, sadrazam)
🟢 YENİ KART   İvazzâde Halil Paşa       : — -> İvazzâde Halil Paşa
yeni kart: 6 · kart kaybı: 0 · kart değişimi: 0
```
**ATEŞLEME** ✓ altı ad da hedeflendiği yerde açılıyor ·
**GEÇME** ✓ var olan 994 adın hiçbirinde kart kaybı ya da kart değişimi yok.

🟢 **Şartnamenin gerçek sınavı:** `1770-08-01 Kartal` maddesindeki
`İvazzâde Halil Paşa` artık **kart AÇIYOR** — sınandı.

---

## 🔴 BU PARTİ İKİNCİ BİR "146 YIL" ÜRETMEK ÜZEREYDİ — ad ölçülerek seçildi

Kronolojide **iki AYRI Hadım Ali Paşa** geçiyor:
```
olaylar_ek5.js  1511-07-02  Şahkulu İsyanı  "Sadrazam Hadım Ali Paşa"  ← BU KAYIT (ö. 1511)
olaylar_ek5.js  1552-09-04  Solnok'un fethi "Hadım Ali Paşa"           ← BUDİN BEYLERBEYİ, BAŞKA KİŞİ
```
Kart `"Hadım Ali Paşa"` diye kısa yazılsaydı **1552 maddesinde de açılacaktı**
— 1511'de ölmüş bir adamın kartı, **41 yıl sonraki** bir sefere. Yani partinin
doğuş sebebi olan kusurun (`146 yıl`) birebir tekrarı.

Ad `"Hadım Ali Paşa (Atik Ali Paşa, sadrazam)"` seçildi ve **ölçüldü**:
```
"Sadrazam Hadım Ali Paşa" (1511)  -> KART   ✓ doğru kişi açılıyor
"Hadım Ali Paşa"          (1552)  -> KART YOK ✓ yanlış kişi AÇILMIYOR
```
⚠️ Bu bir **çözüm değil, hasar sınırlaması**: 1552 maddesi hâlâ kartsız ve
adı hâlâ belirsiz. **Asıl çare `olaylar_ek5.js:1552-09-04`ün `kisiler`
alanında** — `"Budin Beylerbeyi Hadım Ali Paşa"` yazılmalı. O dosya bu
oturumun yetkisinde değil; koordinatöre bildirildi.

---

## KOORDİNATÖRE BİLDİRİLEN ÜÇ KAYNAK ÇELİŞKİSİ (kendi dosyam değil, düzeltmedim)

`§7.1 ⑥` — kaynaklar çelişiyorsa karar bana ait değil. Üçü de TDV **gövdesinden**
okundu, başlıktan değil.

```
① Kartal Bozgunu
   veri  olaylar_ek5.js  1770-08-01  "Kartal (Kagul) Ovası Bozgunu"
   TDV   ivazzade-halil-pasa: "Kartal (Larga) Muharebesi'dir (2 Ağustos 1770)"
   fark  BİR GÜN + AD (Kagul / Larga)

② Sapienza deniz zaferi
   veri  olaylar_ek5.js  1499-08-28  "Sapienza (Zonchio) Deniz Zaferi"
   TDV   kemal-reis: Burak Reis gemileri ateşe verdi "(19 Zilhicce 904 / 28 Temmuz 1499)"
   fark  BİR AY — TDV Sapienza'yı TEMMUZ'a koyuyor

③ İnebahtı'nın teslimi
   veri  olaylar_ek10.js 1499-08-26  "İnebahtı'nın teslimi"
   TDV   kemal-reis: "21 Muharrem 905'te (28 Ağustos 1499) İnebahtı'nın teslim olması"
   fark  İKİ GÜN
```
📌 ② ile ③ birlikte bakıldığında desen şu: verideki iki tarih **birbirine çok
yakın** (26 ve 28 Ağustos), TDV'de ise **bir ay arayla** (28 Temmuz · 28
Ağustos). TDV metni sırayı da açıkça yazıyor: *"Kemal Reis bundan **bir ay
sonra** meydana gelen Holomiç, Çamlıca ve İnebahtı Boğazı'ndaki deniz
savaşlarında da… zafer kazandı."*

---

## ÖLÇÜLMÜŞ TDV SLUG TURU (`§4` — sonraki oturumlar için)

```
🟢 CANLI (200)  ivazzade-halil-pasa · kemal-reis · cuneyd-bey · atik-ali-pasa ·
                akkoyunlular · sah-ismail · safeviler · inebahti · sahkulu
🔴 ÖLÜ   (302)  burak-reis · elvend-bey · elvend · elvend-bey--akkoyunlu ·
                elvend-mirza · hadim-ali-pasa · ali-pasa · ali-pasa--hadim ·
                ali-pasa--atik · hadim-ali-pasa--sadrazam · halil-pasa ·
                halil-pasa--ivazzade · halil-pasa--kut · cuneyd · sapienza ·
                zonchio · kartal-savasi · kagul · sahkulu-isyani ·
                atik-ali-pasa-kulliyesi
```

🔴 **`sahkulu` — `§4②` tuzağının YENİ bir vakası.** Slug **canlı (200)**,
başlık **"ŞAHKULU"** — ama açılan madde **1511 isyanının Şahkulu'su değil**,
Kanûnî devrinde saray nakkaşhânesinde çalışan, *saz üslûbu*nun öncüsü
**nakkaş Şahkulu (ö. 963/1556)**. İki test de temiz, madde yanlış.
⇒ Şahkulu isyanının tarihleri bu maddeden **alınamaz**; `atik-ali-pasa`
maddesinden alındı (Gökçay, 2 Temmuz 1511).

🟢 **Ve `§4`ün *"dar slug tutmazsa kapsayıcı maddeyi dene"* kuralı iki kez
işe yaradı:** `burak-reis` ölü ama `kemal-reis` maddesi onun ölüm gününü
**tam** veriyor (19 Zilhicce 904 / 28 Temmuz 1499); `elvend-bey` ölü ama
`akkoyunlular` maddesi Elvend'in babasını, hükümdarlık bölgesini, 1501
yenilgisini ve 1505 ölümünü veriyor.

---

## KENDİ HATAM — kayda geçiyorum

İlk taramam *"`İvazzâde` kronolojide HİÇ geçmiyor"* dedi ve **yanlıştı**.
Sebep Python'un Türkçe büyük İ'si: `"İvazzâde".lower()` → `i̇vazzâde`
(`i` + U+0307 birleşen nokta), yani `"ivazz" in low` **tutmuyor**.
Ölçüm NFD normalizasyonuyla tekrarlandı, raporlanan bütün sayılar **ikinci
ölçüm.** 📌 Alet doğruydu, **karşılaştırma evreni** bozuktu.

⚠️ İkinci bir gözlem: sınav evreni bir oturum içinde **993 → 1000** ad
büyüdü (KRONOLOJİ 16 aynı anda yazıyor). Gerileme sınavı bu yüzden
**büyümüş evrende yeniden koşuldu**; ikisinde de sonuç aynı çıktı.
📌 `§11`in *"bir aletin evreni değişince alet değişmeden sessizce yanılır"*
dersinin canlı hâli — bu sefer yakalandı.
