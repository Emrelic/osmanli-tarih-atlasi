# NOKTA HALKA-2 1 — ilerleme notu

> Sartname: `oturumlar/NOKTA-HALKA2.md` (UC oturumun ORTAK dosyasi — okunur,
> YAZILMAZ). Bu dosya yalniz **1 numarali** oturumun ilerleme notudur.
> Koordinator duzeltmesi (8 Agustos 2026): ilerleme notu ortak sartnameye
> degil, AYRI dosyaya yazilir — `§7` "her dosyanin tek sahibi olur".

---

## ⑦ İLERLEME — NOKTA HALKA-2 **1** (Sudan · Habeşistan · Eritre · Somali · Umman)

> Bu bölüm **yalnız 1 numaralı oturuma** aittir. 2 ve 3 kendi bölümlerini
> ayrı başlık altında yazsın; bu başlığa dokunmayın.

**TESLİM — 8 Ağustos 2026 · `data/yerlesimler_h2_afrika.js` · 181 nokta**

```
kutu içi nokta        99 → 280      yoğunluk   8,9 → 25,2   ölçüt 25  ✅
benim sekiz ülkem     80 → 261      yoğunluk  17,2 → 56,2
boşluk ortancası  199 km → 93 km  · >200 km hücre  %49,8 → %23,1

Sudan       16,6 → 46,0     Etiyopya    20,2 → 59,9
Güney Sudan  0,0 → 41,2     Somali      23,1 → 65,2
Umman        9,1 → 68,4     Somaliland  41,5 → 95,0
Eritre      40,6 → 113,6    Cibuti      45,5 → 227,4
```

**SEKİZ KONTROL, SEKİZİ DE TEMİZ** (canlı 1800 noktaya karşı, `girdi.py`ye
dokunmadan, dosya canlıymış gibi ölçüldü):

| # | kontrol | sonuç |
|---|---|---|
| 1 | ayrıştırma + bilinmeyen alan | 181 kayıt · bilinmeyen alan **0** |
| 2 | ad çakışması | canlıyla **0** · kendi içinde **0** |
| 3 | 3 km mükerrer | **0** ihlal · en yakın çift **8,54 km** (Ed-Damazîn ↔ Rusayris) |
| 4 | kara maskesi | maske dışı **0** (6 nokta ölçülerek karaya çekildi) |
| 5 | kimlik | 13 kimlik · renksiz **0** · künyesiz **0** |
| 6 | dönem sağlığı | ters/sıfır/çakışan **0** |
| 7 | Değişmez 1 (günlük tam tarama) | **işaretsiz boşluk 0** · kasten boşluk 56 |
| 8 | yeni gün (Değişmez 2/2s borcu) | canlıda olmayan gün **0** |

📌 **9. ölçüm — kapsam:** 181 noktanın **181'i** benim sekiz ülkemin içinde;
halka 6-7'ye (Kenya · Uganda · Kongo · Orta Afrika · Çad · Tanzanya · Ruanda)
taşan nokta **0**. Beş nokta ölçülerek geri çekildi: Tîne Çad'daydı (iki
kez), Ceel Vaak Kenya'da, Sudan kuzeybatı çölü Libya'da, Rub'ul Hâlî
güneybatısı Yemen'deydi.

### 🔴 TASARIM KARARI — SIFIR KIRILMA BORCU

Dosyadaki **hiçbir tarih icat edilmedi**; bütün `f:`/`t:` değerleri canlı
veride zaten var olan kırılmalardır. ⇒ Değişmez 2 ve 2s borcu **yapısal
sıfır**. Bedeli var ve saklanmıyor: altı gerçek dönem bu yüzden
**yazılamadı** ve dosyada tek tek ⚠️ ile işaretli —
Mısır Ekvatorya/Bahrülgazâl (1867-1885) · Debârve'nin Osmanlı dönemi
(1557'den) · Derviş Devleti (1899-1920) · Kısmâyû ve Ceel Vaak'ın İngiliz
Cûbâland'ı (1895-1925) · Beni Şengûl'ün 1902 Gwynn hattı.
**Kronoloji maddeleri yazıldıktan sonra bu altı yer güncellenmelidir.**

### KOORDİNATÖRDEN GEREKENLER (bende olmayan dosyalar)

1. `arac/girdi.py` → `GIRDI_DOSYALARI`'na `yerlesimler_h2_afrika.js`
2. `arac/denetle.py` → `BEKLENEN_SAHIPSIZ` **114 → 170** (56 yeni kasten
   sahipsiz nokta; 56'sı da `kasitli_bosluk:true` + `neden:` taşıyor)
3. `index.html` + `js/app.js` → dosyanın script satırı ve birleştirme noktası
4. `data/devletler.js` → `kaffa` · `cimma` · `vollayta` · `sidamo` **künyesiz**
   (bu dosyanın eseri DEĞİL; dördü de canlı noktalarda kullanılıyor)
5. Hiç olmayan kimlikler (ne renk ne künye), gerekçesi dosyada yazılı:
   `silluk` · `zende` · `vaday` · `avsa` · `mecerteyn` · `hobyo` · `tuncur`

### 2 ve 3 NUMARALI OTURUMLARA — sınır teması YOK

Ölçtüm: en kuzey noktam **21,87°K** (Cebel Ûveynât). Oturum 3'ün kutusu
25°K'den başlıyor, Oturum 2'ninki 45°K'den. **Örtüşme yok, mükerrer riski
yok.** (`§⑤`'in "ayrı dosyalar birbirini göremez" uyarısı bu tur için
konusuz.)

---

## ⑧ TESLİMDEN SONRA — koordinatörün üç mesajına karşılık yapılanlar

### (a) 🔴 ORTAK ŞARTNAMEYE YAZMIŞTIM — GERİ ALINDI

Koordinatörün düzeltmesi geldiğinde ilerleme notumu **zaten** ortak
`oturumlar/NOKTA-HALKA2.md`ye yazmış ve commit etmiştim (`bf93e9e`).
Geri alındı: 69 satır ayrıldı, bu dosyaya taşındı, ortak şartname
`git diff --exit-code 54e8850` ile **birebir** koordinatörün hâline
döndürüldü. 2 ve 3 numaralı oturumların alanına hiç dokunulmadı.

### (b) 🔴 DÂRFÛR ZİNCİRİ — 414 YILLIK HAYALET DEVLET KALDIRILDI

Koordinatörün bildirdiği yeni künyeler ölçüldü:
```
dacu       Dâcû (Daju) Hanedanlığı        1200-01-01 .. 1400-01-01   renkli+künyeli
tunciler   Tunciler (Tunjur) Hanedanlığı  1400-01-01 .. 1695-01-01   renkli+künyeli
darfur     Dârfûr (Keyra)                 1695-01-01 .. 1916-11-06   renkli+künyeli
```
🔴 **Benim 11 Dârfûr noktam `darfur`u 1281-01-01'den yazıyordu** — yani
künyenin kuruluşundan **414 yıl önce.** CLAUDE.md §3.5'in tarif ettiği
hayalet devletin ta kendisi. Düzeltildi:
`dacu` → 1400-01-01 `tunciler` → 1695-01-01 `darfur` → 1874-11-02 …

**Bedeli ÖNCE ölçüldü, sonra yazıldı:** iki yeni sınır günü gerekiyordu ve
ikisinin de kronolojide **0 gün** uzaklıkta maddesi var ⇒ 2s borcu sıfır,
tavan (121, DOLU) delinmedi.

🔴🔴 **AMA "denetim temiz" burada YETMİYOR** ve bunu saklamıyorum. O iki
maddenin ne olduğuna baktım:
```
1400-01-01 → "Bursa'da Yıldırım Darüşşifası — ilk Osmanlı hastanesi"
1695-01-01 → "Hâfız Osman'ın II. Mustafa'ya hat hocası tayin edilmesi"
```
İkisinin de Dârfûr'la ilgisi **yok**. Ölçüt (*"±30 günde madde var mı"*)
EVET diyor; kullanıcının göreceği şey ise **hânedan değişiminin bir hat
hocası tayininin altında belirmesi.** CLAUDE.md §3 bunu kelimesi kelimesine
tarif ediyor. ⇒ **Denetim geçiyor, gösterim yanlış.**

### (c) DENETİM BETİĞİM KENDİ KENDİNİ ÖLÇÜYORDU — düzeltildi

Koordinatör dosyayı `GIRDI_DOSYALARI`na bağlamış (canlı evren 1800 → 2133).
Betiğim `yukle()`den geleni "canlı" sayıp kendi 181 noktamı **ikinci kez**
karşılaştırdı: 181 ad çakışması, 181 mükerrer, en yakın çift **0,00 km**.
Hepsi sahte. Betik kendi dosyasını canlı evrenden çıkaracak şekilde
düzeltildi ve sekiz kontrol yeniden temiz çıktı.
📌 Aynı sınıf: **araç, ölçmesi gereken soruyu değil kendi kurduğu soruyu
ölçüyor.** Bu sefer bende çıktı.

### (d) KUTU KURALI — zaten uyumluydum

`54e8850`in *"mükerrer kontrolü GENİŞ kutu"* kuralı: benim 3 km taramam
baştan beri **bütün canlı evrene** karşı koşuyor (dar kutuya değil), yani
kural geldiğinde uyum zaten vardı. En yakın çift 8,54 km.

### KOORDİNATÖRDEN GEREKEN — güncel liste

```
1  arac/denetle.py   BEKLENEN_SAHIPSIZ  114 → 170   (56 kasten sahipsiz)
2  olaylar*.js       İKİ MADDE: Tunciler'in Dâcû'yu devirmesi (~1400) ve
                     Keyra hânedanının kurulması (1695). Yazılana kadar
                     o iki gün "teknik olarak kapalı, ANLATI OLARAK AÇIK".
3  data/devletler.js kaffa · cimma · vollayta · sidamo KÜNYESİZ (renkleri var)
4  yerlesimler_afrika.js  El-Fâşir · Nyala · Cenîne HÂLÂ `darfur` 1281'den
                     — aynı 414 yıllık hayalet orada duruyor. Benim dosyam değil.
5  makdisu-sultanligi KULLANILMADI ve sebebi ölçüldü: künye 1281-1500 diyor
                     ama 1500-01-01'in en yakın kronoloji maddesi 126 GÜN
                     ötede ⇒ kullanmak 2s'ye +1 açık ekler ve tavan DOLU.
                     Kararı sana bırakıyorum.
6  ZATEN YAPILMIŞ:   girdi.py bağlantısı (canlı evren 2133'te görüldü)
```
