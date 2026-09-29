# KRONO-AFRIKA-0929 — DÜZELTME ÖNERİLERİ (silme/değiştirme hükmü koordinatörde)

Hiçbir mevcut kayıt silinmedi/değiştirilmedi. Biçim: kayıt · mevcut · önerilen · kaynak · gerekçe.

## 1. Sokoto — başkent/halifelik kuruluş yılı
- **Kayıt:** `data/devletler.js` `sokoto` künyesi `kronoloji:[…]` → `{t:"1809-01-01", tur:"kurulus", b:"Sokoto başkent yapılıp halifelik resmen kuruldu"}` (kaynaksız, gün yok).
- **Mevcut:** 1809. **Önerilen:** 1812 (madde yazıldı: `kronoloji_cok_afrika.js` 1812-01-01).
- **Kaynak:** TDV `sokoto` — «1808'de Gobir'in başşehri Alkalawa'yı ele geçirip … 1812'de Sokoto Sultanlığı (/Halifeliği) veya Nijerya Fûlânî Devleti olarak tanınan bir yönetim kurdu». TDV `osman-b-fudi` 1809'u devletin sınırlarına ulaştığı yıl olarak (Atlantik–Tinbüktü) anıyor, başkent kuruluşu olarak değil.
- **Gerekçe:** iki kayıt ÇELİŞMİYOR, farklı olayı tarihliyor olabilir; ama künyedeki madde "başkent yapılıp halifelik kuruldu" diyor ve TDV bunu 1812'ye koyuyor. Künye maddesinin tarihi/metni gözden geçirilsin (silme değil). Yerleşim `Sokoto` `s:` 1812'yi zaten kullanıyor (TDV ile uyumlu).

## 2. Mali — künye sonu (1670) ↔ TDV "1430'da ortadan kalktı"
- **Kayıt:** `devletler.js` `mali-imparatorlugu` `t:"1670-01-01"`; kronoloji: `1670-01-01 Küçülen imparatorluk komşu güçler arasında dağılıp tarihe karıştı`.
- **TDV `mali`:** «XIV. yüzyılın sonlarından itibaren dağılmaya başladı ve Tevârikler'in 1430'da Tinbüktü, Velâte, Aravuan ve Gao'yu ele geçirmesi üzerine ortadan kalktı ve yerini Songay Sultanlığı aldı.»
- **Değerlendirme:** çelişki ŞEHİR düzeyi ile ÇEKİRDEK düzeyi arasında olabilir (Mande çekirdeği 1670'e kadar sürmüş olabilir — TDV bunu tarihlemiyor). **Ölçülemedi.** Şehirlerin (Tinbüktü/Velâte) 1430'da çıkışı TDV'ye dayalı olarak yazıldı; künye `t:` değişmedi. `1670` için TDV'de kaynak `bulunamadı` — künye `t:` alanının kaynağı sorgulanmalı.

## 3. Hamdullahi / Masina — kuruluş yılı
- **Kayıtlar:** `yerlesimler_afrika2.js:321` Hamdullahi `kur/f:1820-01-01` · `devletler.js` `massina` `f:1818-01-01` + kronoloji `1818-01-01 Seku Amadu … Hamdullahi'yi başşehir yaptı`.
- **TDV `fulaniler`:** «1815'te Bani nehri kıyısında Hamdullahi (Hamdallay) şehrini kurarak burasını başşehir yaptı»; «Mâsînâ Fûlânî Devleti, Ahmedü Lobbo idaresinde (1810-1844) en parlak dönemini yaşadı».
- **Önerilen:** yerleşim `f` → 1815; künye `massina` `f` → 1810 (ya da 1815); 1818 maddesi 1815'e (TDV). Üç kayıt üç ayrı yıl veriyor (1815 · 1818 · 1820). **Sıra önemli:** önce künye `f`, sonra yerleşim (yoksa 4c/4d "künye penceresi" ihlali).

## 4. Samori — Kankan yılı
- **Kayıt:** `devletler.js` `vasulu` kronoloji `1879-01-01 Samori Ture Kankan'ı aldı`.
- **TDV `samori-ture`:** «1878'de Yukarı Nijer bölgesini, **1881'de** Dyula'nın en önemli ticarî merkezi Kankan'ı ele geçirdi».
- **Önerilen:** 1879 → 1881. (Ek: künye `f:1878` = Yukarı Nijer; Samori'nin mücadelesi 1861'de, Bisandugu merkezi 1871'de başlar — künye penceresi bunu kapsamaz, bilinçli seçim olabilir.)

## 5. Umman-Zengibar — başkentin Zengibar'a taşınışı (üç ayrı yıl)
- **Kayıt:** `devletler.js` `umman-zengibar` kronoloji `1832-01-01 Said bin Sultan başkentini Zengibar'a taşıdı`.
- **TDV `zengibar`:** «Umman Sultanlığı devlet merkezini **1840'ta** Zengibar'a taşıyınca» / «Bû Saîd hânedanı 1840 yılında pâyitahtı Zengibar'a taşıyınca». **TDV `tanzanya`:** «Seyyid Saîd **1837'de** Mombasa'yı ele geçirdikten sonra başşehrini Maskat'tan Zengibar adasına taşıdı».
- **Sonuç:** kaynak KENDİYLE ÇELİŞİYOR (TDV iki maddesi 1837 ↔ 1840); künye 1832. Hangisi doğru: **ölçülemedi.** Üçü de DUZELTME'de, hüküm koordinatörde; yeni madde yazılmadı (mükerrer olurdu).

## 6. Oranj Hür Devleti / Transvaal — künye başlangıç günleri
- **Kayıt:** `devletler.js` `oranj` `f:1854-04-07` · `transvaal` `f:1852-01-01` (kronolojide `1852-01-17 Sand River Konvansiyonu` zaten var).
- **SAHO** (`sahistory.org.za/dated-event/bloemfontein-convention-signed`): «The Republic of the Orange Free State was established by the signing of the Bloemfontein Convention» — **23 Feb 1854**.
- **Önerilen:** `oranj` `f` → 1854-02-23 (ya da 1854-04-07'nin hangi olay olduğu künyede belirtilsin); `transvaal` `f` → 1852-01-17. (Bloemfontein maddesi yazılmadı: künye penceresinden önce düşerdi — M-5416 kural 2.)

## 7. Künye içi kronolojilerin ilk maddesi = künye `f:` günü (sahte kesinlik riski)
Bu paketin 35 "künye içi kapalı" grubunda kapatan madde, hemen her zaman künyenin `f:` günüyle aynı günü
(`YYYY-01-01`) taşıyor ve çoğunda `kaynak:` alanı yok: `valo 1287` · `sine-salum/colof 1350` ·
`kayor 1549` · `gonja 1550` · `berabis 1600` · `bambara/kenedugu 1650` · `aro/gyaaman/bundu 1690` ·
`futa-callon 1747` · `futa-toro 1776` … `CLAUDE.md §4`: *künyenin f:/t: günü bir KAYNAK DEĞİLDİR*.
Bunlar **yıl-temsilî** sınıfıdır; kaynak eksikliği AFRİKA paketinde gideremedim (TDV bu kuruluşları anmıyor,
Britannica bu ortamdan erişilemedi). Öneri: bu maddelerin `gun:` alanı "yıl temsilî, kaynak bulunamadı" ile
işaretlensin (silme değil).

## 8. Mükerrer tuzağı — `kronoloji_dogu_afrika.js` (218 madde)
Bu dosya `KRONO-BAGLAMA-0929`un elinde ve şu an künyeye bağlanmıyor (`KRONOLOJI_DOGU_AFRIKA` eşlenemiyor).
1577 Adal/Harar çöküşü (`1577-01-01 Vebi nehri bozgunu`, `Harar Sultanlığı'nın Galla göçebelerince yıkılışı`)
orada var; `adal` künye kronolojisi de aynı yılı taşıyor → Doğu Afrika'da bu olaya yeni madde yazılmadı.
Ölçülen mükerrer YOK: yazdığım 9 maddenin hiçbiri (`t` ±30 gün + anahtar sözcük) başka dosyada yok
(`ARAC-KRONO-AFRIKA-0929-MUKERRER.py`).
