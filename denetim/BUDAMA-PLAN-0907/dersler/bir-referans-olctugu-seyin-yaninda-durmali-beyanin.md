# 🔴🔴 BİR REFERANS, ÖLÇTÜĞÜ ŞEYİN YANINDA DURMALI — BEYANIN YANINDA

> **Vaka anlatısı — `CLAUDE.md §11`den çıkarıldı (BUDAMA-0907).**
> Kuralın kendisi ve hükmü `CLAUDE.md §11`de **kalmıştır**;
> burada duran, o kuralı doğuran VAKADIR.
> Eski konum: `CLAUDE.md` satır **0** · 1169 token

---

- 🔴🔴 **BİR REFERANS, ÖLÇTÜĞÜ ŞEYİN YANINDA DURMALI — BEYANIN YANINDA
  DEĞİL.** *(4 Eylül 2026 · `PAKET RENK 0904` ölçtü, koordinatörü çürüttü)*

  Emre *"renkler denizle benzer, ayırt etmek zorlaşıyor"* dedi. Koordinatör
  `renk_olc.py`nin deniz denetimini koşturdu ve *"eşiğin altında **0**,
  denetim TEMİZ diyor ⇒ metrik doğru, EŞİK gevşek"* diye teşhis koydu.
  **İki yarısı da yanlıştı, ve bir işçi oturum ikisini de çürüttü.**

  **① KOORDİNATÖR ALETİN YARDIMCISINI ÇAĞIRDI, ALETİN KENDİ SORUSUNU DEĞİL:**
```
                lab(hex)  ← koordinatör   gorunen()  ← ALETİN kullandığı
novgorod          17.87                     13.25    ← eşiğin ALTINDA
le-hanedani       19.66                     14.61    ← eşiğin ALTINDA
norvec-kralligi   43.89                     13.95    ← 30 ΔE fark, HİÇ görülmedi
R.deniz_ihlal() → DAL1 12 · DAL2 ek 9 · BİRLEŞİM 21      ("0" DEĞİL)
```
  `gorunen(k) = lab(bind(hex))` — gövde **altlıkla harmanlanmış** hâliyle
  ölçülüyor; ham hex hiçbir yerde ekranda yok.
  📌 Aynı koordinatörün aynı gün **üçüncü** *"aletin cevabını yanlış yerden
  okuma"* vakası (`konum_denetimi`in dönüşü · tahtanın `kim` alanı · bu).
  Üçü de **hata vermedi**, üçü de **temiz bir sayı** üretti.

  **② VE ASIL KUSUR BİR KADEME DERİNDE — REFERANSIN KENDİSİ EKRANDA YOK:**
```
js/app.js:673   { id:"zemin",  background-color: SU_RENGI }  #c4dcea
js/app.js:674   { id:"altlik", type:"raster" }  ← ÜSTÜNDE, Esri World Physical
```
  `SU_RENGI` bir **arka plan**; üstüne dünya çapında bir raster biniyor ve
  kullanıcının deniz diye gördüğü şey **Esri'nin okyanusu**. `g-gol` de
  kurtarmıyor — o da rasterin ALTINDA (`app.js:705`, *"Grup A — rasterin
  ALTINDA"*).
```
beyan (SU_RENGI)   #c4dcea             L* 86.4
EKRANDA çizilen    #78b0d0 · #80b8d8   L* 69-72
                   ΔE00 19.5-21.8   ·   |ΔL*| 14.3-17.3
```
  ⇒ **Aletin referansı, ölçtüğü şeyden ΔE ~20 uzakta** — kendi eşiğinden
  (15) büyük.

  🔴 **Ve `_deniz_oku()` bunu göremiyor çünkü YANLIŞ SORUYU SORUYOR:**
  *"beyan iki yerde tutarlı mı"* diye soruyor (zemin ↔ `g-gol`, ayrışırsa
  `SystemExit`), ***"beyan EKRANDA GÖRÜNÜYOR MU"*** diye sormuyor.
  📌 Alet 12 Ağustos'ta tam *"denetim var ≠ o soruyu soruyor"* dersi için
  yazılmış ve **aynı sınıfa kendisi düşmüş.** Dersin bir kademe ötesi:
  ***bir ÇAPRAZ denetim iki BEYANI karşılaştırabilir ve ikisi de ekranda
  olmayabilir.***

  🟢 **Ve Emre haklı çıktı, alet kör:** `ilhanli` ekranda L* 67.8, ekrandaki
  Hazar L* 70.7 ⇒ **|ΔL*| 2.9** — neredeyse aynı açıklık. Emre *"deniz
  TONUNA yakın"* derken ton = açıklık, ve birebir haklı. `renk_olc`in
  `DAL 2`si (|ΔL*| < 4) tam bunu yakalamak için yazılmış ve **yanlış
  referans yüzünden ateşlemiyor.**

  ⚠️ Ve bir tasarım sonucu: Emre'nin *"deniz daha AÇIK renk olmalı"*
  isteği bugün **uygulanamaz** — `SU_RENGI`yi değiştirmek ekranda hiçbir
  şeyi değiştirmez. Referansı düzeltmek, o isteğin ÖN KOŞULU.

