# Oturum 3 — Devletler dizini ve kronolojileri

Bu dosya, ayrı bir Claude Code oturumuna verilecek görev tanımıdır.
Aşağıdaki metnin tamamını o oturumun ilk mesajı olarak yapıştır.

---

## Proje

`C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ` — **Osmanlı Tarih Atlası**,
1281-1923 arasını gün hassasiyetiyle gösteren statik bir web sitesi. MapLibre GL JS,
sunucu yok, veritabanı yok; her şey `data/` altındaki düz JS dosyalarında.
Yayında: https://emrelic.github.io/osmanli-tarih-atlasi/

Zaman çubuğu ilerledikçe harita değişir, yanında o günün kronolojisi ve padişahı akar.
Harita **petek (Voronoi) motoruyla** üretilir: her yerleşim çevresindeki toprağı temsil
eden bir hücreye sahiptir, yerleşim el değiştirince hücresi de değişir.

Genel plan ve mimari: **`PLAN.md`** — başlamadan önce oku.

## Senin işin

**1200-1924 arasında bu coğrafyada var olmuş bütün devletlerin dizinini ve
kronolojisini kurmak.** Devlet şekli fark etmez: imparatorluk, krallık, sultanlık,
hanlık, beylik, prenslik, dükalık, despotluk, emirlik, cumhuriyet, ocak, vladikalık,
şövalye devleti, voyvodalık, isyan devleti, geçici işgal idaresi — hepsi.

**Fazlama (önemli):** bu partide kronolojileri **yalnız başlık düzeyinde** yaz.
Her madde tek satırlık kısa bir başlık olsun; detay paragrafı YAZMA. Detay doldurma
sonraki fazın işi. Kapsama genişliği derinliğe tercih edilir: 300 devletin
başlık kronolojisi, 40 devletin ayrıntılı kronolojisinden kıymetlidir.

## Kapsam sınırı

Atlasın harita penceresi şu kutudur: **batıda 12°B, doğuda 62°D, güneyde 1.5°K,
kuzeyde 62°K** — yani Fas'tan Ural batısına, Norveç güneyinden Afrika Boynuzu'na.

Bu kutunun **içinde** olan ya da Osmanlı ile doğrudan temas etmiş devletleri al.
Çin, Hindistan, Japonya, Amerika kıtası kapsam dışıdır. Babür Devleti gibi temas
noktası olan uzak devletleri yalnızca temas varsa ve kısa tut.

## Dosya sahipliği — EN ÖNEMLİ KURAL

Bu projede aynı anda birkaç oturum çalışıyor. Çakışmayı önlemek için her dosyanın
tek sahibi var. **Senin sahip olduğun tek dosya: `data/devletler.js`.**

**Yazabileceğin dosyalar:**
- `data/devletler.js` — asıl işin
- `oturumlar/` altında kendi ilerleme notların

**KESİNLİKLE dokunma** (bunlar entegrasyon oturumunun, üzerine yazarsan sessiz veri
kaybı olur):
- `data/yerlesimler.js`
- `arac/uret_petek.py`
- `data/donemler.js`, `data/devletler_harita.js`, `data/bolgeler.js` (üretilmiş dosyalar)
- `data/olaylar*.js`
- `PLAN.md`, `index.html`, `js/app.js`, `css/style.css`

**Yapmayacakların:**
- `arac/uret_petek.py`'yi ÇALIŞTIRMA. Üretim yalnız entegrasyon oturumundan koşar.
- **commit ya da push YAPMA.** İşin bitince "hazır" de, birleştirmeyi o oturum yapar.
- `data/devletler.js`'i baştan yazma. İçinde **77 mevcut kayıt var**, hepsi korunacak.
  Sadece yeni kayıt ekle ve mevcut kayıtlara eksik alan ekle.

## `data/devletler.js` biçimi

Dosyanın başındaki açıklama bloğunu oku, biçim orada tanımlı. Özeti:

```js
{ id:"bizans", ad:"Bizans (Doğu Roma) İmparatorluğu", tur:"imparatorluk",
  bolge:"anadolu-balkan", f:"330-05-11", t:"1461-08-15",
  baskent:"Konstantinopolis",
  ozet:"1-2 cümlelik tanım.",
  kronoloji:[
    { t:"1204-04-13", tur:"bolunme",     b:"IV. Haçlı Seferi İstanbul'u yağmaladı" },
    { t:"1453-05-29", tur:"son",         b:"İstanbul'un fethi; imparatorluk sona erdi" }
  ] },
```

- `tur`: imparatorluk | krallik | prenslik | dukalik | cumhuriyet | hanlik | beylik |
  devlet | sultanlik | ocaklik | hanedanlik | isyan | gecici-isgal
  — yetmezse yeni tür ekle ama dosyanın başındaki listeye de yaz.
- `f`/`t`: kesin gün bilinmiyorsa `YYYY-01-01`. Atlas 1923-10-29'da bittiği için
  sonrasında da süren devletlerde `t:"1923-10-29"` yaz, `ozet`te not düş.
- `kronoloji[].tur`: kurulus | hukumdar | toprak-kazanc | toprak-kayip | savas |
  antlasma | bolunme | birlesme | ittifak | isyan | isgal | son
- `kronoloji[].b`: **kısa başlık**, tek satır. Bu bir dizindir, `olaylar*.js` değil.

## Düzeltmen gereken yapısal sorun

Projede devlet kimliği **iki ayrı yerde** tutuluyor ve ikisi birbirini tutmuyor:

1. `data/devletler.js` → Dizin panelindeki devlet kartları (**77 kayıt**)
2. `arac/uret_petek.py` içindeki `BOYALAR` sözlüğü → haritada boyanan devletler
   (**97 kayıt**) — buna dokunmayacaksın, sadece okuyacaksın

Kimlikler ayrışmış: dizinde `habsburg` / haritada `avusturya`, dizinde `cenova` /
haritada `ceneviz`, dizinde `yemen-zeydi` / haritada `yemen`, dizinde
`atina-dukaligi` / haritada `atinadukaligi`, dizinde `suud-birinci`+`suud-ikinci` /
haritada tek `suud`… Haritada olup dizinde hiç karşılığı olmayan **53 devlet** var:

```
iran avusturya kazan ceneviz italya sovalye bulgaristan sirbistan bosna arnavutluk
yemen suud aiz benihalid hicaz somali cekoslovakya polonya yugoslavya letonya
litvanya finlandiya norvec sardinya toskana milanoduka mehdi nube teke katalan
timurlu suleyman-celebi isa-celebi mehmed-celebi musa-celebi lusignan ilhanli
eretna burhaneddin artuklu ahiler cobanogullari pervane esrefogullari
inancogullari sahibata taceddin alaiye haciemir mutahharten hafsi zeyyani
atinadukaligi
```

**Çözüm — böyle yap:** `devletler.js` kayıtlarına yeni bir alan ekle:

```js
harita:"avusturya"    // BOYALAR'daki karşılığı; yoksa alanı hiç yazma
```

Böylece dizin kendi kimliğini korur, harita da kendi kimliğini korur, ikisi tek
alanla eşleşir. Mevcut 77 kaydın `id`'lerini **değiştirme** — bağlantıları kırarsın.
Yukarıdaki 53 devletin her biri için ya mevcut bir kayda `harita:` alanı ekle
(ör. `habsburg` kaydına `harita:"avusturya"`) ya da yeni kayıt aç.

## Kaynak kuralı — ihlal etme

- **Birincil kaynak: TDV İslâm Ansiklopedisi** (islamansiklopedisi.org.tr).
- Vikipedi yalnız "hangi olaya bakmalıyım" sorusunu cevaplamak için kullanılır,
  **tek dayanak olamaz**. TDV ile çelişirse TDV esastır.
- TDV'de maddesi olmayan Avrupa devletleri için (Danimarka, Litvanya, Toskana gibi)
  standart akademik kaynak kullan ve `ozet`te kaynağı belirtme zorunluluğu yok;
  ama **tarih uydurma**. Kesin gün bilinmiyorsa `YYYY-01-01` yaz.

### ⚠️ TDV ölü slug tuzağı — bu projede en çok hata bunun yüzünden çıktı

`islamansiklopedisi.org.tr/<slug>` adresi, **olmayan slug için de HTTP 200 döndürür**
ve sessizce arama sayfasına yönlendirir. Yani "sayfa açıldı" demek "madde var" demek
değildir. Ölü slug'ı **yalnızca sayfa başlığı** ele verir:

> `<title>` içeriği **"Arama - TDV İslâm Ansiklopedisi"** ise o madde **YOKTUR**.

Her slug'ı bu kontrolle doğrula. Madde bulamazsan doğru slug'ı şu arama adresinden
çıkar (sonuçlarda gerçek slug'lar listelenir):

```
https://islamansiklopedisi.org.tr/arama/?q=<aradığın+kelime>
```

Örnek: `ordu` slug'ı "askerî ordu" maddesini açar; şehir maddesinin gerçek slug'ı
`ordu--sehir`'dir. `haciemirogullari` diye bir madde yoktur.

Zaten doğrulanmış slug'ların listesini `data/olaylar*.js` dosyalarındaki `kaynak:`
alanlarından çıkarabilirsin — o küme baştan doğrulanmıştır, güvenle kullan.

## Çalışma düzeni

İş büyük; **partiler hâlinde ilerle ve her partiden sonra dosyayı kaydet.**
Oturum kesilirse kaldığın yerden devam edebilmelisin. Önerilen sıra:

1. **Anadolu ve Osmanlı öncesi** — Selçuklu, İlhanlı, Eretna, Kadı Burhâneddin,
   Artuklu, tüm beylikler (haritadaki 20+ beylik id'si yukarıdaki listede)
2. **Balkanlar** — Sırp, Bulgar, Bosna, Arnavut, Eflak, Boğdan, Erdel, Dubrovnik,
   Karadağ, Hersek, Zeta, Mora despotluğu, Atina/Nakşa dükalıkları
3. **Orta ve Batı Avrupa** — Habsburg, Macaristan, Lehistan-Litvanya, Bohemya,
   Venedik, Ceneviz, Napoli, Papalık, Milano, Floransa/Toskana, Sardinya-Piyemonte,
   Fransa, İspanya, Portekiz, İngiltere, Hollanda, İsveç, Danimarka-Norveç
4. **Doğu ve Kafkasya** — Bizans, Trabzon Rum, Kilikya Ermeni, Gürcü krallıkları,
   Şirvanşahlar, Karakoyunlu, Akkoyunlu, Timurlu, Safevî, Afşar, Zend, Kaçar
5. **Kuzey ve bozkır** — Altın Orda, Kırım, Kazan, Astarhan, Nogay, Sibir,
   Zaporojye, Moskova/Rusya
6. **Arabistan ve körfez** — Memlûk, Yemen imamlığı, Suûdî devletleri, Şammar,
   Benî Hâlid, Umman, Hicaz, Asîr/Âiz, körfez şeyhlikleri
7. **Afrika** — Hafsî, Zeyyanî, Merînî/Fas, Cezayir-Tunus-Trablus ocakları,
   Func/Sennâr, Mehdî Devleti, Habeşistan, Adal, Somali sultanlıkları, Nûbe
8. **1918-1924 ardılları** — Çekoslovakya, Polonya, Yugoslavya, Baltık devletleri,
   Finlandiya, Avusturya ve Macaristan cumhuriyetleri, TBMM/Türkiye

Her parti sonunda `oturumlar/OTURUM-3-ILERLEME.md` dosyasına hangi partiyi
bitirdiğini ve kaç kayıt eklediğini yaz.

## Bitirdiğinde doğrula

Dosyayı kaydettikten sonra şunu çalıştır, hepsi temiz çıkmalı:

```bash
node -e "global.window={};eval(require('fs').readFileSync('data/devletler.js','utf8'));const D=window.DEVLETLER;const id=new Set();let h=0;for(const d of D){if(id.has(d.id))console.log('TEKRAR id:',d.id);id.add(d.id);if(!d.ad||!d.tur||!d.f||!d.t)console.log('EKSIK alan:',d.id);if(d.t<d.f)console.log('TERS aralik:',d.id);for(const k of (d.kronoloji||[])){if(!/^\d{3,4}-\d\d-\d\d$/.test(k.t))console.log('BOZUK tarih:',d.id,k.t);}if(d.harita)h++;}console.log('kayit:',D.length,'| harita eslesmesi olan:',h);"
```

Sonra kullanıcıya kaç devlet eklediğini, kaç tanesinin `harita:` eşleşmesi
olduğunu ve hangi partilerin kaldığını söyle. **Commit etme.**
