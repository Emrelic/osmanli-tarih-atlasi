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

Belge seti — başlamadan önce oku: **`CLAUDE.md`** (nasıl çalışılır, kurallar),
**`YOL-HARITASI.md`** (beş eksen ve fazlar), **`VERI-YAPISI.md`** (`devletler.js` şeması).

## Senin işin

**1200-1924 arasında dünyada var olmuş bütün devletlerin dizinini ve
kronolojisini kurmak.** Devlet şekli fark etmez: imparatorluk, krallık, sultanlık,
hanlık, beylik, prenslik, dükalık, despotluk, emirlik, cumhuriyet, ocak, vladikalık,
şövalye devleti, voyvodalık, isyan devleti, geçici işgal idaresi — hepsi.

**Fazlama (önemli):** bu partide kronolojileri **yalnız başlık düzeyinde** yaz.
Her madde tek satırlık kısa bir başlık olsun; detay paragrafı YAZMA. Detay doldurma
sonraki fazın işi. Kapsama genişliği derinliğe tercih edilir: 300 devletin
başlık kronolojisi, 40 devletin ayrıntılı kronolojisinden kıymetlidir.

## Kapsam: BÜTÜN DÜNYA

Coğrafî sınır **yoktur**. 1200-1924 arasında dünyanın herhangi bir yerinde var olmuş
her siyasî yapı bu dizine girer: Çin hanedanları, Japonya, Kore, Güneydoğu Asya
krallıkları, Hint sultanlıkları ve prenslikleri, Orta Asya hanlıkları, Afrika
krallıkları ve sultanlıkları, Kolomb öncesi Amerika devletleri, sömürge sonrası
Amerika cumhuriyetleri, Okyanusya krallıkları — hepsi.

Haritanın kendisi şimdilik dar bir pencerede (Fas–Ural, Norveç–Afrika Boynuzu)
çiziliyor; bu seni ilgilendirmiyor. **Sen dizin katmanını kuruyorsun, harita
katmanını değil.** Harita penceresi ancak yerleşim noktaları eklendikten sonra,
başka bir oturumda kademe kademe açılacak (bkz. `YOL-HARITASI.md`, Eksen 2).

### Ayrıntı düzeyi — dengeyi böyle kur
Kapsam çok geniş olduğu için her bölgeye aynı çözünürlükte inersen iş bitmez.
Şu kademelendirmeyi uygula:

- **Tam ayrıntı**: Osmanlı'nın komşuları ve temas ettiği bütün devletler
  (Avrupa, Ortadoğu, Kuzey Afrika, Kafkasya, İran, Karadeniz kuzeyi). Küçük
  beylikler, dükalıklar, despotluklar dahil.
- **Orta ayrıntı**: büyük dünya devletleri ve hanedanları — Çin (Song, Yuan, Ming,
  Qing), Japonya (Kamakura/Muromachi/Azuchi-Momoyama/Edo/Meiji), Kore, Hindistan
  (Delhi sultanlıkları, Vijayanagara, Babür, Maratha, Sih, İngiliz Hindistanı),
  İran ötesi Orta Asya hanlıkları, büyük Afrika devletleri (Mali, Songhay, Kanem-
  Bornu, Etiyopya, Kongo, Zulu, Sokoto…), Amerika (Aztek, İnka, sömürge idareleri,
  bağımsızlık sonrası cumhuriyetler), Güneydoğu Asya (Majapahit, Ayutthaya, Đại
  Việt, Birmanya, Malakka…).
- **Asgari kayıt**: kısa ömürlü ya da çok küçük yapılar — yalnız `id/ad/tur/f/t/
  baskent/ozet` ve **2-4 satırlık** kronoloji (kuruluş, bir iki dönüm noktası, son).

Hindistan'ın 500 prensliğini ya da Kutsal Roma'nın 300 devletçiğini tek tek yazma;
bunları çatı devlet altında topla ve `ozet`te "bünyesinde N kadar prenslik vardı"
diye not düş. Ölçüt şu: **bir tarih öğrencisinin adını duymuş olması muhtemel mi?**

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
- kök dizindeki `*.md` belgeleri, `index.html`, `js/app.js`, `css/style.css`

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
- `bolge`: kapsam dünyaya açıldığı için bu alanın artık tutarlı bir sözlüğü olmalı.
  Şunları kullan, gerekirse ekle ama dosyanın başındaki listeye de yaz:
  `anadolu` · `balkanlar` · `orta-avrupa` · `bati-avrupa` · `kuzey-avrupa` ·
  `dogu-avrupa` · `italya` · `iberya` · `kafkasya` · `iran` · `mezopotamya` ·
  `suriye-filistin` · `arabistan` · `kuzey-afrika` · `misir-sudan` · `dogu-afrika` ·
  `bati-afrika` · `orta-afrika` · `guney-afrika` · `orta-asya` · `guney-asya` ·
  `dogu-asya` · `guneydogu-asya` · `sibirya-bozkir` · `kuzey-amerika` ·
  `orta-amerika` · `guney-amerika` · `okyanusya`
  Mevcut 77 kaydın `bolge` değerleri serbest metindi; onları da bu sözlüğe çevir.

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

Kapsam dünyaya açıldığı için kaynak kuralı iki kollu işler:

- **İslâm dünyası, Osmanlı ve komşuları için birincil kaynak TDV İslâm
  Ansiklopedisi'dir** (islamansiklopedisi.org.tr). Bu coğrafyada TDV maddesi varsa
  başka kaynağa dayanma; çelişirse TDV esastır.
- **TDV'nin kapsamadığı coğrafyalar için** (Doğu Asya, Amerika, Sahra altı Afrika'nın
  Hıristiyan/animist devletleri, Okyanusya, Avrupa'nın iç tarihi) standart akademik
  referans yeterlidir.
- **Vikipedi hiçbir zaman tek dayanak değildir.** "Hangi olaya bakmalıyım" sorusunu
  cevaplamak için kullanılır; tarih oradan alınıp doğrulanmadan yazılmaz.
- **Tarih uydurma.** Kesin gün bilinmiyorsa `YYYY-01-01` yaz — bu, "yıl biliniyor,
  gün bilinmiyor" demenin kabul edilmiş yoludur. Yıl bile tartışmalıysa `ozet`te
  belirt, kronolojiye tek bir tarih yaz.

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

İş çok büyük; **partiler hâlinde ilerle ve her partiden sonra dosyayı kaydet.**
Oturum kesilirse kaldığın yerden devam edebilmelisin. Bu iş tek oturumda bitmez;
bitmemesi normaldir, önemli olan her partinin kendi içinde tamamlanmış olmasıdır.

Sıra **kasten Osmanlı merkezinden dışarı doğru** kuruldu: en değerli katman ilk
partilerde tamamlanır, uzak coğrafyalar sonra gelir. Sıralamayı bozma.

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

*(Buraya kadarı "tam ayrıntı" kademesidir; Osmanlı atlası bu sekiz partiyle
kendi içinde tamamlanmış olur. Aşağısı dünya kapsamıdır, "orta ayrıntı".)*

9. **Orta Asya ve bozkırın doğusu** — Çağatay, Timurlu ardılları, Buhara, Hîve,
   Hokand hanlıkları, Kazak cüzleri, Cungar Hanlığı, Doğu Türkistan
10. **Hindistan** — Delhi sultanlıkları (Memlûk, Halacî, Tuğluk, Seyyid, Lûdî),
    Behmenî ve Dekken sultanlıkları, Vijayanagara, Babür, Maratha Konfederasyonu,
    Sih İmparatorluğu, Meysûr, Şirket idaresi ve İngiliz Hindistanı
11. **Doğu Asya** — Çin (Song, Jin, Yuan, Ming, Qing), Moğol İmparatorluğu ve
    ulusları, Kore (Goryeo, Joseon), Japonya (Kamakura, Muromachi, Azuchi-Momoyama,
    Edo, Meiji), Ryukyu, Tibet
12. **Güneydoğu Asya** — Majapahit, Malakka, Ayutthaya ve Siyam, Đại Việt ve
    Nguyễn, Khmer, Birmanya (Pagan/Taungû/Konbaung), Açe, Mataram, Brunei, Sulu,
    Hollanda ve İngiliz sömürge idareleri
13. **Sahra altı Afrika** — Mali, Songhay, Kanem-Bornu, Hausa şehir devletleri,
    Sokoto Halifeliği, Aşanti, Dahomey, Benin, Oyo, Kongo, Ndongo, Lunda,
    Buganda, Etiyopya, Zulu, Merina (Madagaskar), Svahili şehir devletleri,
    Umman-Zengibar
14. **Amerika** — Aztek/Mexika, İnka, Maya şehir devletleri, İspanyol genel
    valilikleri, Portekiz Brezilyası, İngiliz ve Fransız kolonileri, ABD,
    Meksika, Büyük Kolombiya ve ardılları, Brezilya İmparatorluğu, Haiti
15. **Kalanlar** — Okyanusya krallıkları (Hawaii, Tonga, Maori), Sibirya hanlıkları,
    Kuzey Kutbu ve ada devletleri, ilk on dört partide gözden kaçanlar

Her parti sonunda `oturumlar/OTURUM-3-ILERLEME.md` dosyasına hangi partiyi
bitirdiğini, kaç kayıt eklediğini ve varsa kararsız kaldığın noktaları yaz.
Bu dosya, bir sonraki oturumun kaldığın yerden devam etme yoludur.

## Bitirdiğinde doğrula

Dosyayı kaydettikten sonra şunu çalıştır, hepsi temiz çıkmalı:

```bash
node -e "global.window={};eval(require('fs').readFileSync('data/devletler.js','utf8'));const D=window.DEVLETLER;const id=new Set();let h=0;for(const d of D){if(id.has(d.id))console.log('TEKRAR id:',d.id);id.add(d.id);if(!d.ad||!d.tur||!d.f||!d.t)console.log('EKSIK alan:',d.id);if(d.t<d.f)console.log('TERS aralik:',d.id);for(const k of (d.kronoloji||[])){if(!/^\d{3,4}-\d\d-\d\d$/.test(k.t))console.log('BOZUK tarih:',d.id,k.t);}if(d.harita)h++;}console.log('kayit:',D.length,'| harita eslesmesi olan:',h);"
```

Sonra kullanıcıya kaç devlet eklediğini, kaç tanesinin `harita:` eşleşmesi
olduğunu ve hangi partilerin kaldığını söyle. **Commit etme.**
