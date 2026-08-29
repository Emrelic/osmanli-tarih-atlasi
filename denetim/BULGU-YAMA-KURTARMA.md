# BULGU — YAMA KURTARMA

> Oturum: **YAMA KURTARMA** (Opus) · 28 Ağustos 2026 · koordinatör ORHANGAZİ
> Görev: `data/yer_yama_enklav.js` · `_iran.js` · `_owtrad.js` — üçü de NESNE,
> hiçbir alet okumuyor. İçlerindeki işi kurtar.
> Tahta: M-1441 (① ölçümü) · M-1442 (KADEME ZİNCİRİ'ne yatay uyarı)

---

## 0. İKİ SATIR

Üç dosyanın **hiçbiri** "diziye çevir, iş biter" cinsinden değildi: biri
tamamen rapor, biri karışık, biri de **yanlış dosya türünde** duran yeni
nokta önerileri. Kurtarılan gerçek kayıt **2** (`iran`); geri kalan
**968 kalem** kaybolmadan `denetim/` altına taşındı, **5 kalem** koordinatöre
yapıştırmaya hazır hâlde devredildi.

Ve iş sırasında şartnamede olmayan **dördüncü bir bozuk dosya** ölçüldü —
o, nesne olanlardan daha kötü durumda: sözdizimi hatalı, `node` hiç okumuyor.

---

## 1. ÖLÇÜM — dosya dosya, cins cins

```
DOSYA                       DURUM      İÇERİK                         KARAR
yer_yama_enklav.js          NESNE      956 kayıt · 4 kova · hepsi     rapora TAŞINDI
                                       SORGU ÇIKTISI (ad:/d:/s: YOK)  dosya [] oldu
yer_yama_iran.js            NESNE      2 gerçek kayıt + 6 rapor       DİZİYE ÇEVRİLDİ
yer_yama_owtrad.js          NESNE      5 YENİ NOKTA + 7 rapor         rapora TAŞINDI
                                       (lat/lon taşıyor)              dosya [] oldu
yer_yama_kademe_zincir.js   SÖZDİZİMİ  14 kayıt · node HİÇ okumuyor   sahibine bildirildi
   ← şartnamede yoktu, iş sırasında bulundu                           (M-1442)
```

**Ölçüm aletleri:** `node --check` · `node -e` (eval + `Array.isArray`) ·
`py arac/_yer_ara.py` (2607 nokta / 56 girdi dosyası) · `node arac/yama_uygula.js`
(kuru koşu) · külliyat üzerinde ±gün mesafesi hesabı.

---

## 2. `yer_yama_iran.js` — ÇEVRİLDİ, 2 kayıt

Dosya artık `window.YER_YAMA_IRAN = [ … ]` ve iki kaydın ikisi de `ad:` +
`kaynak:` + `neden:` taşıyor. `ad:` alanları veriyle **birebir** doğrulandı
(kopyalanarak, elle yazılmadan):

```
"Mîyandoab"   ESLESTI      "Hoy"   ESLESTI
```

### 2.1 Mîyandoab — temiz

`d: [{1585-09-25 → 1603-10-21}]`. İki gün de külliyatta **±0**
("Tebriz'in fethi" · "Şah Abbas'ın karşı taarruzu"). Sancak merkezi
Merâga'nın günleriyle aynı — kaynak günü değil **tutarlılık seçimi**, ve
kayıtta böyle yazılı.

**Desen doğrulandı** (`_yer_ara.py`, Merâga'nın bugünkü hâli):
```
Merâga   d: [{1585-09-25→1603-10-21}, {1725-08-04→1730-08-12}]
         s: [... safevi 1501-07-01 → 1736-03-08 ...]     ← BÖLÜNMEMİŞ
```
⇒ `s:` dokunulmadan kalır, `d:` üstüne biner. İki yeni kayıt bunu izliyor.

### 2.2 🔴 Hoy — GÜN DEĞİŞTİRİLDİ, ve sebebi ölçüm

Dosyanın eski hâli `1724-01-01 → 1739-01-01` yazıyordu (TDV yıl veriyor,
gün vermiyor ⇒ `§4` yuvarlama kuralı). **Ölçüldü:**

```
GÜN            en yakın kronoloji maddesi          Değişmez 2 (ölçüt ±30, tavan 0)
1724-01-01     ±92 gün   "Kirmanşah'ın alınışı"    🔴 AÇIK
1739-01-01     ±151 gün  "İstanbul'da veba salgını" 🔴 AÇIK
```
⇒ Yazılsaydı **iki yeni AÇIK kırılma** doğar, `denetle.py` kırılır, yayın durur.

**Yazılan:** `1724-09-28 → 1730-08-12` — ikisi de **±0**:
```
1724-09-28   "Revan'ın yeniden fethi"        ← TDV'nin verdiği YILI koruyor
1730-08-12   "Nâdir'in taarruzu: Tebriz, Nahçıvan, Hemedan, Kirmanşah,
              Merâga ve Kasr-ı Şîrîn'in kaybı"
```
Bitiş günü atlasın **Tebriz · Ahar · Merâga** için zaten kullandığı gün —
bütün Azerbaycan aynı gün elden çıkıyor.

### 🟡 VE BİR KARAR KOORDİNATÖRDE — ölçtüm, seçmedim

TDV **"on beş yıl"** ve **1739** diyor; yazılan pencere **6 yıl**. Külliyatta
1739'un ±30 günü içinde madde **yok**. Uzatmak istenirse iki temiz gün var:

```
1735-06-19  "Baghavard (Arpaçay) bozgunu — Kafkasya'nın Nâdir Han'a kaybı"  ±0
            ⇒ 10,7 yıl · atlasın REVAN için kullandığı bitiş
1736-09-01  "İstanbul Antlaşması — Güney Kafkasya'nın İran'a terki"          ±0
            ⇒ 11,9 yıl · hukukî terk günü
```
Üçü de savunulabilir; ***tercih tarihî bir hüküm ve benim değil.*** Tek satır
değişikliği (`t:` alanı).

### 2.3 Yazılmayanlar — ve niçin

```
`bulunamadi` kovası — 3 kalem, 6 yerleşim:
   Urmiye · Selmâs (Dilman) · Sulduz · Dizmâr · Sarukurgân · Saidâbâd
   sebep: TDV ya hiç yıl vermiyor ya çelişen iki yıl veriyor  ⇒ YAZILMADI

Mîyandoab'ın 2. dönemi (1725-08-04→1730-08-12)
   TDV nahiyeyi o dönem için adıyla anmıyor ⇒ savunulabilir ama KAYNAKSIZ
```
📌 *"Bulunamadı"* bir **sonuçtur** ve uydurmaktan kat kat değerlidir —
o altı yerleşim artık "araştırılmadı" değil, **"arandı, TDV susuyor"** diye
biliniyor. Tam gerekçeler: `denetim/IRAN-YAMA-DOKUM.json → bulunamadi`.

Dosyanın eski hâlindeki `olcum` · `bulunamadi` · `duzeltme` blokları
**`denetim/IRAN-YAMA-DOKUM.json`e taşındı** — içinde çevre yerleşimlerin
(Tebriz · Ahar · Nahçıvan · Revan · Merâga) ölçülmüş Osmanlı pencereleri ve
oturumun kendi hükmünü çürüttüğü `duzeltme` notu (şapkalı harf dersi) duruyor.

---

## 3. `yer_yama_enklav.js` — TAŞINDI, dosya boşaltıldı

**Ne vardı:** 956 kayıt, dört kova, alanları `gun` · `yerlesim` ·
`yeni_sahip` · `kova` · `ada` · `ana_govde_km` · `komsu_150km`. Yani
Değişmez 7 enklav sorgusunun **çıktısı**. Uygulanabilir tek kayıt yok.

**Nereye gitti:** `denetim/ENKLAV-SORGU-DOKUM.json` (347 KB).
Gidiş-dönüş doğrulandı: **956 → 956**, `olcum` bloğu dâhil.

### 🔴 NİÇİN "DİZİYE ÇEVİR" YANLIŞ HAMLEYDİ

`arac/yama_uygula.js` yer_yama*.js içindeki **her diziyi** topluyor ve
anahtarı `(dosya, t, b)` üçlüsü — yani **kronoloji** yaması bekliyor. Bu 956
kayıt o üçlüyü taşımaz ⇒ hepsi `undefined` anahtarı alıp
*"MUKERRER, AYNI HÜKÜM"* kovasına düşerdi: aletin kendi yorumundaki
`yer_yama_rumeli.js` vakasının (9 kayıt) **106 katı** gürültü.
📌 Bir süzgeç tanımadığını sessizce elemez — **sayıp basar.**

### ⚠️ VE TAŞIRKEN BİR BORÇ ÖLÇÜLDÜ

```
olcum.kova diyor ki   cografi-tecrit 1847 · veri-eksigi 377 · bilinmiyor 140 · hakiki-enklav 39
dizide gerçekten var    400 ·                377 ·             140 ·            39
```
Üç kova tam; **birinci kova 400'e kırpılmış.** ⇒ **1447 aday ölçülmüş ama
hiçbir yere dökülmemiş.** Bu bir kayıp değil (dosya öyle geldi) ama
kayıtsız kalırsa yarın "hiç ölçülmemiş" sanılır. **Borç olarak yazıldı.**

### ⚠️ VE RAPORLAR BU DÖKÜMÜ TAŞIMIYOR — ölçüldü

```
denetim/BULGU-ENKLAV-SORGU.md + BULGU-SORGUSUZ-ENKLAV.md
462 benzersiz yerleşim adının       13'ü geçiyor · 449'u GEÇMİYOR
gun + yerlesim ikisi birden geçen kayıt:   6 / 956
```
⇒ *"Zaten raporda var, dosyayı silelim"* **yanlış olurdu.** Taşıma şarttı.

---

## 4. `yer_yama_owtrad.js` — TAŞINDI + 5 KALEM KOORDİNATÖRE DEVREDİLDİ

**Ne vardı:** `hazir` 5 · `eksik_dayanak` 3 · `elendi` 3 · `bulunamadi` 1.
**Nereye gitti:** `denetim/OWTRAD-ADAY-DOKUM.json` (tam fidelity, 12 kalem).

### 🔴 Beş "hazır" kalem YAMA DEĞİL, YENİ NOKTA

Beşi de `lat` · `lon` · `tur` · `g` taşıyor. `_yer_ara.py` ile ölçüldü
(2607 nokta / 56 girdi dosyası) — **beşi de veride YOK**, yani `ad:`
eşleştirecek kayıt yok, yama olarak yazılsalardı sessizce atlanırlardı.
⇒ Yerleri `data/yerlesimler*.js`, o da **koordinatörde.**

### 🟢 DEĞİŞMEZ 2 ÖN TEMİZLİĞİ — beşi de temiz, ölçüldü

Her önerinin `d:`/`v:` kırılma günleri külliyata soruldu:

```
A-1 Birecik        1516-08-24 ±0
A-2 Prizren        1455-06-20 ±19 | 1912-10-22 ±1
A-3 Debre          1395-01-01 ±0 | 1402-07-28 ±0 | 1413-07-05 ±0 | 1912-11-29 ±26
A-4 Sibin (Sibiu)  1526-09-01 ±0 | 1541-08-29 ±0 | 1687-08-12 ±0
A-5 Foça           1455-01-01 ±0 | 1919-05-15 ±0 | 1922-09-09 ±0
```
🟢 **Hiçbiri ±30'u aşmıyor — beşi de yeni AÇIK doğurmaz.** Yeni gün de
doğurulmuyor. Kayıtların kendisi ve TDV dayanakları
`denetim/OWTRAD-ADAY-DOKUM.json → hazir` altında, `oneri` alanı
**doğrudan yapıştırmaya hazır.**

### ⚠️ AD TUZAĞI — biri kayda geçti, ikincisi yeni

```
① Orijinal oturum yakalamış: TDV `foca` slug'ı 200 döner ve başlığı FOÇA'dır
   ama açılan madde BOSNA'daki Foča'dır. Tuzağa düşülmüş, çıkılmış, yazılmış.
② YENİ: veride de `Foça (Foča)` VAR — 43,506 / 18,779, yani Bosna'daki.
   Öneri `ad:"Foça"` diyor ve İzmir'dekini kastediyor (38,671 / 26,757).
   `girdi.py` ValueError atmaz (dizgeler farklı) ama dizinde iki "Foça"
   yan yana durur.  ⇒ ÖNERİM: `ad:"Foça (İzmir)"`. Karar koordinatörün.
```
📌 Ve bu, koordinatörün *"`ad:` birebir olacak"* şartının **yetmediği** yer:
ad birebir eşleşebilir ve **yanlış kayda** eşleşebilir.

---

## 5. 🔴 YAPISAL BULGU — `ad:` temelli yamaların otomatik uygulayıcısı YOK

`node arac/yama_uygula.js` kuru koşusu (ölçüm, bugün):

```
ham kayıt toplamı           3096
"MUKERRER, AYNI HÜKÜM"      1487   ← bunların 1455'i anahtar `undefined`
    kademe2 1091 · hayalet 129 · hayalet2 118 · sahiplik 35 · kademe 38
    emilme 16 · veri31 14 · acik 8 · p32 6
```

Sebep: `yama_uygula.js` **kronoloji** yaması uygulayıcısıdır — kararları
`yer_id` · `eksik_nokta` · `kapsam_genis`, anahtarı `(dosya, t, b)`.
`ad:` temelli **yerleşim** yamaları o üçlüyü taşımaz. `arac/*.py`de yalnız
`_kademe_uygula.py` var ve o da **yalnız** `yer_yama_kademe*.js` okuyor.

⇒ **Ölçtüğüm:** `ad:` temelli yama ailesinin (kademe hariç) otomatik
uygulayıcısı yok.
⇒ **Bundan çıkardığım:** uygulamayı koordinatör elle yapıyor, ve
"yama dosyası yazıldı" ile "yama veriye indi" arasında **denetimsiz bir
boşluk** var. Bu, görevin gerekçesindeki kusurun (*"hiçbir denetim
'yama OKUNDU mu' diye sormuyor"*) bir kademe derini: **"yama UYGULANDI mı"
diye soran da yok.**
⚠️ Bu iki satırın ikincisi bir **çıkarımdır**, ölçüm değil — ayrı yazıldı.

---

## 6. 🔴 DÖRDÜNCÜ BOZUK DOSYA — şartnamede yoktu

```
data/yer_yama_kademe_zincir.js : 11
    "adlı beş kaza mevcuttu\" · \"Kefe, Osmanlı'nın Kırım'da doğrudan "
    ^ iki dizge yan yana, aralarında `+` YOK
node --check → SyntaxError: Unexpected string
yama_uygula.js → "🔴 OKUNAMADI: yer_yama_kademe_zincir.js"  (her koşuda basıyor)
window.YER_YAMA_KADEME_ZINCIR hiç tanımlanmıyor · 14 kayıt görünmez · dosya COMMİT'SİZ
```
Nesne kusuru dosyayı **sessiz** yapar; bu kusur **hiç** yapar — ve alet bunu
her koşuda basıyor, kimse bakmamış. Dosya benim değil: **dokunulmadı**,
sahibine (KADEME ZİNCİRİ) tahtadan yatay bildirildi (M-1442), koordinatöre
M-1441'de.

---

## 7. ÖLÇMEDİKLERİM — açıkça

```
· `yer_yama_emilme2.js` (NESNE) — sahibi düzeltiyor, ŞARTNAME DIŞI, açmadım
· Enklav dökümündeki 956 kaydın TARİHÎ doğruluğu — cinsini ölçtüm,
  içeriğini DOĞRULAMADIM
· 1447 dökülmemiş `cografi-tecrit` adayı — sayısını ölçtüm, kendilerini GÖRMEDİM
· Owtrad'ın 5 önerisinin TDV dayanakları — dosyada yazılı, gövdeleri
  YENİDEN OKUMADIM (Değişmez 2 tarafını ölçtüm, kaynak tarafını devraldım)
· `yama_uygula.js`in 1455 `undefined` kaydına DOKUNMADIM — ölçtüm, koordinatöre sordum
```

---

## 8. DOSYA DÖKÜMÜ

```
DEĞİŞTİRİLDİ   data/yer_yama_iran.js        NESNE → DİZİ, 2 kayıt
               data/yer_yama_enklav.js      NESNE → [] + gerekçe başlığı
               data/yer_yama_owtrad.js      NESNE → [] + gerekçe başlığı
YENİ           denetim/ENKLAV-SORGU-DOKUM.json    956 kayıt (347 KB)
               denetim/OWTRAD-ADAY-DOKUM.json     12 kalem
               denetim/IRAN-YAMA-DOKUM.json       olcum + 3 bulunamadi + duzeltme
               denetim/BULGU-YAMA-KURTARMA.md     bu dosya
DOKUNULMADI    yer_yama_emilme2.js · yer_yama_kademe_zincir.js ·
               yerlesimler*.js · arac/*.py · js/* · index.html
```
