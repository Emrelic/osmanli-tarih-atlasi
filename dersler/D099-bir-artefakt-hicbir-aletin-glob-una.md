# BİR ARTEFAKT HİÇBİR ALETİN GLOB'UNA GİRMİYORSA, YAPILMAMIŞ OLMAKLA AYNI SONUCU VERİR — ve hiçbir denetim ötmez.

> Kimlik `D099` · `CLAUDE.md §11` dizininden taşındı (10 Eylül 2026 budaması).
> Slogan orada, vaka burada.

---

- 🔴🔴 **BİR ARTEFAKT HİÇBİR ALETİN GLOB'UNA GİRMİYORSA, YAPILMAMIŞ
  OLMAKLA AYNI SONUCU VERİR — ve hiçbir denetim ötmez.**
  *(5 Eylül 2026 · `KÜRE GÖRÜNÜM` taradı, koordinatör bağımsız doğruladı)*

  Bir gecede dört oturum ~43 `denetim/` artefaktı yazdı. Ters yön
  tarandı — *hangi dosyayı hiçbir glob tutmuyor?*
```
43 artefaktın 21'i HİÇBİR GLOB tarafından tutulmuyor
🔴🔴 YAMA-1923-0905.json — GERÇEK bir künye yaması, ve İKİ AYRI
     yerden kaçıyor, ve iki kusur BAĞIMSIZ:
     ① ad `YAMA-1923-*` ≠ `YAMA-KUNYE-*`     ⇒ glob TUTMUYOR
     ② alan `id_onerisi`/`ad_onerisi` ≠ `id`/`ad`
        ⇒ glob TUTSAYDI BİLE çıkarıcı 0 KAYIT görürdü
```
  Koordinatör bağımsız ölçtü: `VARSAYILAN = "denetim/YAMA-KUNYE-*0905*.json"`
  (satır 44) ve dosyanın ilk öğesinin alanları `['ad_onerisi', 'bolge',
  'f', 'id_onerisi', …]`. **İkisi de doğrulandı.**
  ⇒ Biri düzeltilse öteki hâlâ yutardı — ***iki bağımsız kusurun üst
  üste binmesi, tek bir kusurdan farklıdır: her biri ayrı ayrı
  "düzeltildi" sanılabilir.***

  🟡 **AMA MANŞET SAYISI DÜZELDİ — 11 DEĞİL ~4.** Ölçen oturum kaybı
  *"11 künye"* diye bildirdi; koordinatör onu **öteki artefaktla**
  karşılaştırdı:
```
YAMA-1923-0905        11 öğe · 9 kimlik
YAMA-KUNYE-1923-0905  10 öğe · 10 kimlik  ← bu DOĞRU adlı, glob TUTUYOR
ORTAK 5 · yalnız kaçanda: fransiz-guyanasi · hollanda-guyanasi ·
ingiliz-guyanasi · ve id'siz bir öğe
```
  ⇒ Beşi zaten iniyor; gerçek kayıp **üç Guyana + kimliksiz öğe.**
  📌 Ve sebebi öğretici: kayıp **alete karşı** ölçülmüştü (*"glob bunu
  tutmuyor"*), **öteki artefaktlara karşı** değil. ***Bir kaybı
  ölçerken, kaybolanın başka bir yerden gelip gelmediği de ölçülür.***
  Bulgu gerçek, büyüklüğü değil.

  🔴 **VE İKİNCİ SESSİZ SIFIR SINIFI DA GENİŞLEDİ:**
  `YAMA-KUNYE-T-0905.json` → 0 künye · `KRONOLOJI-ZEND-1794-0905.json`
  → 0 madde. İkisinde de glob sahipleniyor, alet hiçbir şey bulamıyor,
  **`0` basıp geçiyor.** O sıfır *"kayıt yok"* demek değil.

  > 🟡 **TEŞHİS DÜZELDİ — 7 Eylül 2026 (`SINAV-KOSU8-0907` ölçtü).**
  > Yukarıda *"bu dosya o cinsten değil"* yazıyordu. `ZEND-1794`ün
  > kendi `hedef_dosya` alanı **`data/olaylar_ek*.js`** diyor ⇒ dosya
  > **o cinsten**, gerçek bir kronoloji yaması; yalnız **hedefi başka.**
  > ⇒ *"Yanlış cins"* değil ***"yanlış hedef."***
  > 🟢 **Ders ayakta** (`0` basan alet sessizce yanıltır), düzelen
  > yalnız teşhis — `§11`: *doğru hüküm, yanlış teşhisle gelebilir.*
  > 🟢 Ve sınıf o gün ölçüldü: glob'un tuttuğu 22 dosyanın **12'si**
  > sıfır basıyordu, ve şema uyuşmazlığından **GERÇEK KAYIP 0** —
  > hiçbiri o aletin hedefine ait değildi. Çare bir dördüncü kova
  > oldu: `⚫ SAHİPLENMEDİM` (`7260b83` · `d4913af`).

  🟢 Ve koordinatörün *"üç uygulayıcı"* öncülü de daraldı: **beş** alet
  var ve yalnız **ikisi** `denetim/` glob'u kullanıyor;
  `_sahiplik_uygula.py` `data/` dizinini `^yer_yama.*\.js$` ile tarıyor
  ve `denetim/` altına **hiç bakmıyor** — kuyruğun ⑥. adımının *"önce
  `data/`ye TAŞI"* demesi bu yüzden doğru.
