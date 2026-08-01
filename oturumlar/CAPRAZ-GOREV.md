# ÇAPRAZ OTURUMLAR — GÖREV TANIMI

> Dört oturum: **ÇAPRAZ DOĞU · ÇAPRAZ KUZEY · ÇAPRAZ BATI · ÇAPRAZ AKDENİZ**
> Bu dosya dördünü birden tanımlar. Kendi bölümünü oku, ortak kuralları hepiniz uygulayın.
> Kullanıcının isteği: *"O devletlerin haritalarını düzeltirsek bizim haritamızda düzelmiş, çaprazlama doğrulanmış olur."*

---

## 0. "ÇAPRAZ" NE DEMEK — ilinti değil, DOĞRULAMA

**Başka bir oturumun teslimini yeniden sınamıyorsunuz.** Yaptığınız şey:

> **Bizim haritamızı ve kronolojimizi, karşı tarafın kendi tarih yazımına karşı sınamak.**

Kullanıcının kurduğu mantık: Osmanlı 1288-1923 arasında sekiz devletle uzun süreli mücadele etti. O devletlerin **kendi kaynakları** aynı sınırları, aynı fetihleri, aynı antlaşmaları **kendi tarafından** anlatıyor. İki anlatı çakışmıyorsa **birimiz yanlışız** — ve hangimiz olduğu araştırılır.

📌 Bugüne kadarki bütün doğrulamamız **tek taraflıydı**: TDV bize Osmanlı'nın ne aldığını söyledi. Çapraz doğrulama, aynı olayı **kaybeden tarafın** kaydından okur.

---

## 1. KAPSAM — sekiz devlet, BEŞ oturum

⚠️ **1 Ağustos 15:55'te güncellendi.** Belge 1 Ağustos boyunca **plan A**'yı
(üç oturum) anlatmaya devam etti; bu sürede ÇAPRAZ AKDENİZ açıldı ve Fransa
el değiştirdi. Yeni açılan bir oturum belgeyi okuyup **çelişkiyi bildirdi** —
bayat belge, bir günde beşinci vaka.

| oturum | devletler | CANLI GİRDİ (pencere / nokta) |
|---|---|---|
| **ÇAPRAZ DOĞU** | **İran** (İlhanlı → Timurlu → Karakoyunlu → Akkoyunlu → Safevî → **Afşar → Zend → Kaçar**) + **Memlük** + **Fransa** | iran 317/169 · safevi 197/162 · memluk 107/101 · **fransa 99/98** |
| **ÇAPRAZ KUZEY** | **Rusya + Lehistan** | rusya 117/102 · **lehistan 23/16** ← en zayıf |
| **ÇAPRAZ BATI** | **Avusturya + Macaristan** | avusturya 85/68 · macaristan 45/31 |
| **ÇAPRAZ AKDENİZ** | **Venedik** + **Kuzey Afrika** (292 yerleşim) | venedik 80/74 |

🔴 **SAYILAR 1 Ağustos 16:05'te YENİDEN ÖLÇÜLDÜ — öncekiler YANLIŞTI.**
Eski tablo `fransa 178/149` diyordu; canlı girdide **99/98.** Fark, sayının
**merge edilmemiş `yerlesimler_avrupa.js`'i de sayması**ndan geliyordu — yani
haritada **görünmeyen** noktalar sayıya dâhildi. ÇAPRAZ AKDENİZ ölçtü ve
bildirdi; koordinatör tabloyu bir saat önce **eski sayılarla** güncellemişti.
```
ölçüm tabanı: data/yerlesimler.js + data/yerlesimler_afrika.js
              (girdi.py GIRDI_DOSYALARI'nın okuduğu küme)
```
⚠️ `iran` da 326→**317**, `avusturya` 90→**85**, `venedik` 83→**80** düştü.
📌 Ders: **kapsam tablosu bir ÖLÇÜM sonucudur, elle taşınmaz** — `§14`'ün
belge tarafındaki hâli.

🔴 **Fransa ÇAPRAZ DOĞU'da, ÇAPRAZ BATI'da DEĞİL.** Sebep: DOĞU Memlük'ü
bitirince ilk bakışı yaptı, 642 yıllık torbayı buldu ve **Bordo'yu
kaynaklandırdı** (`cca1861`, 172,5 yıl, Gascon Rolls Project). Yapılmış işi
çöpe atmamak için orada bırakıldı. **Plan B'nin Venedik+Fransa eşleştirmesi bu
noktada uygulanmadı** — AKDENİZ yalnız Venedik'i aldı.

📌 **Kuzey Afrika artık atanmış** (ÇAPRAZ AKDENİZ). Gerekçe: Cezayir/Tunus
ocaklıkları hem Venedik hem Fransa muhatabı, 1830 işgali aynı eksende.
⚠️ `ARAŞTIRMA ARAP AFRİKA` oturumuyla çakışma ihtimali var; çakışırsa
koordinatör ayırır.

⚠️ **Sınır boylam değil, DEVLET.** Bir olay birden çok oturumu ilgilendiriyorsa (ör. 1699 Karlofça: Avusturya + Venedik + Lehistan + Rusya) **ilgili oturumlar ayrı ayrı bakar** ve sonuçları karşılaştırılır. Bu bir çakışma değil, **kasıtlı örtüşme** — dört ayrı kaynağın aynı antlaşmayı nasıl anlattığı bilginin kendisidir.


---

## 2. 🔴 TAKVİM — veri gelmeden ÖNCE karara bağlandı

Bu iş başlar başlamaz **sistematik bir çelişki** üretecek ve **anlaşmazlık sanılacak:**

```
Rusya       Jülyen takvim, 1918'e kadar      (19. yy'da 12 gün fark)
Lehistan    1582'de Gregoryen'e geçti
Venedik     1582'de geçti
Avusturya   1583-1584
Macaristan  1587
Osmanlı     Hicrî · Rûmî
```

Rus kaynağı *"12 Eylül"*, bizim kaynağımız *"24 Eylül"* diyecek — **aynı gün.**

> **KURAL: Her dış tarih, kaynağın takvimiyle birlikte kaydedilir. Dönüştürme
> yapılır ama HAM HÂLİ DE KALIR.**

⚠️ Bu kural olmadan yüzlerce **sahte çelişki** üretir ve gerçek olanları gizlersiniz.

### 2.1 HANGİ YÖNE — 1 Ağustos'ta karara bağlandı

Kural yukarıda *"dönüştürülür"* diyordu ama **hangi takvime** dönüştürüleceğini
söylemiyordu. İki oturum aynı gün bu boşluğa çarptı:

```
ÇAPRAZ KUZEY   Kiev 1667-01-30        ham Jülyen  (Pereyaslav 1654 dönüştürülmüş)
ÇAPRAZ DOĞU    Türkmençay 1828-02-10  ham Jülyen  (Gülistan 1813 Gregoryen)
               TDV talis-hanligi: "22 Şubat 1828"  →  fark TAM 12 gün
```

> **KARAR: Proje GREGORYEN esaslıdır.**
> ```
> t: / f: ekseni  →  GREGORYEN, istisnasız
> gun: alanı      →  HAM HÂL, kaynağın takvimiyle   ("10/22 Şubat 1828")
> ```

Üç gerekçe: ① verinin geri kalanı zaten Gregoryen · ② **zaman ekseni tek ölçek
ister** — karışık takvim olayları yanlış sıralar · ③ `gun:` ham hâli zaten taşıyor.

🔴 **DÖRDÜNCÜ GEREKÇE ÇÜRÜDÜ — ÖLÇÜLDÜ.** Kararı ilk yazarken *"TDV Gregoryen
verir, birincil kaynağımızdır"* demiştim. **Yanlış.** ÇAPRAZ KUZEY tur 5'te
ölçtü: TDV `kirim` maddesi 1783 ilhakını **"8 Nisan 1783"** veriyor — yani
**Jülyen günün kendisi** (Gregoryen'i 19 Nisan). *"TDV'den geldiyse temizdir"*
ölçütüne dayanan bir tarama, iki açık vakadan birini **kaçırırdı.**

> **TDV'nin tarihi, kaynağının takvimini taşır.** Madde Rus/Batı belgesine
> dayanıyorsa tarih çevrilmemiş olabilir.

🟢 Yerine geçen ölçüt (ÇAPRAZ KUZEY, n=5, beşinde de tutuyor — **eşik
önerilmedi**, örneklem küçük):
```
TDV tarihi GÜN-AY hicrîsiyle veriyorsa   → Osmanlı belgesi var, DOĞRU
   (Karlofça 24 Receb 1110 · Küçük Kaynarca 12 Cemâziyelevvel 1188)
TDV yalnız YIL veriyorsa (1197, 1108)    → birincil belge Rus/Batı,
                                            ÇEVRİLMEMİŞ OLABİLİR
```

🔴 **Ve fark 10-13 gün ise Jülyen ŞÜPHESİ doğar** (XVI. yy 10 · XVII. 10 ·
XVIII. 11 · XIX. 12 · XX. 13) — ama **otomatik teşhis değildir.** İmza ile
onay, ateşkes ile barış arasında da gerçekten 12 gün olabilir. Ayırt edici
soru: **kaynak çift tarih ya da "eski/yeni takvim" diyor mu?** Demiyorsa
*"sebebi belirsiz"* diye ayrı yazılır — Jülyen denmez.

📌 Bu kural yazıldığı gün **sıfır bulgu** üretti, iki gün sonra iki oturumu
yanlış teşhisten alıkoydu. Gerekçesi `OGRENILENLER §71`.

---

## 3. KAYNAK HİYERARŞİSİ — alana göre değişir

Bugüne kadar kural tekti: *TDV birincil.* Bu iş için **yetmiyor:**

| ne | birincil | çapraz kontrol |
|---|---|---|
| Osmanlı / İslam dünyası olguları | **TDV** | dış kaynak |
| Bir dış devletin **kendi iç** kronolojisi | **o devletin akademik kaynağı** | TDV |
| **Temas olguları** (X bizden Y'yi ne zaman aldı) | **İKİSİ BİRDEN** | — |

🔴 **Ve üçüncü satır işin özü: orada anlaşmazlık bir KUSUR DEĞİL, BULGUDUR.**
Çözülmeden önce **kaydedilir** — çünkü sistematik bir sapma (takvim gibi) ancak
biriktiğinde görünür. Tek çelişkiyi *"hangisi doğru"* diye çözmek deseni yok eder.

⚠️ **Wikipedia aday üreticidir, kaynak değil.** *"Hangi olaya bakmalıyım"* sorusunu
cevaplar; tarih oradan alınıp **doğrulanmadan yazılmaz.**

### 3.1 🔴 İKİ TDV MADDESİ ÇELİŞİRSE — dört kademe

`CLAUDE.md §4` *"TDV esastır"* diyor ama **TDV kendiyle çelişince** ne olacağını
söylemiyordu. Kızıldeniz'de çelişti (`bece` *"1517'de hâkim oldular"* ⟷
`habes-eyaleti` *"1517'de devralınmadı"*) ve ölçüt yazıldı.

📌 **Ölçüt tek vakada değil, kayıtlı YEDİ çelişkide sınandı** (ÇAPRAZ DOĞU,
Teslim 7) ve **iki yerde çatladı.** Aşağıdaki hâli, çatlaktan sonraki hâlidir.

```
⓪  İki madde AYNI SORUYA mı cevap veriyor?
      Hayırsa ÇELİŞKİ YOKTUR. Haritanın sorduğu soru alınır:
      "o gün orayı FİİLEN kim yönetiyordu."
①  BELGE > ÖZET.   Tarihli + failli tekil kayıt  >  genel dönem cümlesi.
②  ÖZEL > GENEL.   Konusu O YER olan madde  >  oradan geçerken değinen madde.
③  İkisi de eşitse → `ÇELİŞKİLİ` kalır, VERİYE DOKUNULMAZ, kullanıcıya gider.
```

🔴 **Kademe ⓪ sonradan eklendi ve en önemlisi odur.** İlk hâlde yoktu; ölçüt
Ç6'da **yanlış cevap verdi.** Teşhis:

> *"Ç6 ve Ç4 **kaynak çelişkisi değil** — iki madde **farklı SORUYA** cevap
> veriyor (1796 hâkimiyetin sonu / 1804 iddianın sonu). Ölçüt 'hangi kaynak
> güvenilir' diye soruyor, **oysa ikisi de doğru.**"*

⇒ ⓪ eklenince: Ç6→1796 ✓ · Ç4→1538 ✓ · Ç7 ⓪'ı geçip ①②'ye iniyor ✓.

📌 **Ve ⓪ bu belgenin dışında da geçerli.** Aynı gün üç ayrı vaka aynı sınıf
çıktı — hepsinde "rakip cevaplar" sanılan şey **ayrı sorulara ayrı cevaplardı**:
```
Kırım    1782 fiilî işgal · 1783 ilhak ilanı · 1784 Osmanlı tanıması
Kefe     1771 işgal · 1774 antlaşma · 1783 kesin hâkimiyet
Şirvan   aynı maddede ÜÇ "son" — çünkü üç ayrı soru
```
Üçünde de doğru hamle **birini seçmek değil, üçünü ayrı alana yazmaktı**
(`isg:` · `s:` · olay). ⚠️ **Bir tarihi diğerinin yerine koymadan önce sor:
bunlar aynı sorunun cevapları mı?**

⚠️ Kademe **SIRASI** karar verebilir: Ç2'de ①→1335, ②→1353 çıkıyor. Sıra
yukarıdaki gibidir, değiştirilmez.

---

## 4. 🔴 BUGÜN ÖĞRENİLEN VE SİZE GEÇEN ALTI KURAL

Bunlar bu projede **bedeli ödenmiş** kurallardır — hepsinin bir vakası var.

**① Sayısal veri tek çekişten alınmaz.** TDV özetleyicisi bir çekişte olmayan bir
tarih üretti (`1444`), ikinci çekişte o cümle yoktu.

**② Ve iki çekiş de aynı yanlışı üretebilir.** *"Bu anlaşma Orhan Gazi döneminde
imzalanmıştır"* — anlaşma 1387, Orhan 1362'de öldü. ⇒ **Gelen her tarih,
elimizdeki BAĞIMSIZ bir veriyle çarpıştırılır**: `padisahlar.js` saltanat aralığı ·
hicrî↔milâdî tutarlılık · `devletler.js` ömrü. (`OGRENILENLER §63`)

**③ Slug ölü çıkınca "kaynak yok" denmez.** `kirim-hanligi` ölüydü, doğrusu sade
`kirim`; `mehmed-ali-pasa` ölüydü, doğrusu `kavalali-mehmed-ali-pasa`. **Kaynak
vardı, adres yanlıştı** — bugün iki kez.

**④ İki kaynak maddesi çeliştiğinde OLAYIN KENDİ maddesi esastır.** TDV `memlukler`
Ridâniye'yi 23 Ocak veriyor; `ridaniye-savasi` **22 Ocak** diyor ve 23'ün yanlış
kaydedildiğini **yazıyor.**

**⑤ Kaynağın verdiği hassasiyet, verildiği gibi yazılır.** Mevsimi aya, ayı güne
çevirmek aynı kusur. `t:` sıralanabilir tarih, `gun:` insanın okuduğu hassasiyet
(*"1454 yazı"*, `gun:` alanında 18 emsal var).

**⑥ Bir ölçüm TEK YÖNDE sorulursa ters yöndeki kusuru göremez.** *"Bu boya kaç
devleti yutuyor"* sorusu bir kusur sınıfı buldu; *"bu pencere hangi devlete
düşüyor — hiçbirine düşmüyorsa?"* sorusu **bambaşka** bir sınıf buldu.
(`OGRENILENLER §68`)

---

## 5. YAZMA YETKİSİ — kesin sınır

```
YAZARSINIZ    oturumlar/CAPRAZ-<BÖLGE>.md          (bulgular, öneriler)
              oturumlar/CAPRAZ-<BÖLGE>-ILERLEME.md (ölçüm kayıtları)

YAZMAZSINIZ   data/*.js          ← veri oturumlarının
              arac/*.py          ← koordinatörün / DENETÇİ'nin / MOTOR'un
              js/ css/ index.html ← ARAYÜZ'ün
              CLAUDE.md · ORGANIZASYON.md · OGRENILENLER.md · KARAR-DAYANAK.md
```

📌 Sebep `ORGANIZASYON §7`: iki oturum aynı dosyaya yazınca **sessiz veri kaybı**
oluyor. Bugün üç commit çakışması yaşandı.

🟢 **Öneri yazarsınız, uygulamayı başkası yapar.** Önerileriniz `YAMACI` ·
`VERİ DEVLET` · `VERİ KRONOLOJİ` · `VERİ SAVAŞ`'a koordinatör üzerinden gider.

⚠️ **Commit ederken yol adı yazın** (`ORGANIZASYON §13`):
```
git commit -F - -- oturumlar/CAPRAZ-DOGU.md
```
Index paylaşılıyor; yol adı olmadan başkasının sahnelediği dosya sizin commit'inize girer.

**Modeliniz Opus** — doğru. Sebebi `ORGANIZASYON Karar 1`: yanlış cevap sessizce
"tarihî gerçek" olarak veriye yazılıyorsa Opus.

---

## 6. GİRDİ KİLİDİ — ŞU AN AÇIK

```
üretim koşusu   11:55 → 13:14 (79 dk)  BİTTİ
data/donemler.js · petek_govde.js  13:14'te yazıldı
```
MOTOR on ölçütle doğruluyor. **Zaten veriye yazmıyorsunuz**, kilit sizi
etkilemiyor. `.uretim-basladi` damgası kökte duruyorsa MOTOR temizleyecek.

---

## 7. İLK SOMUT İŞ — oturum başına

### ÇAPRAZ DOĞU

🔴 **Birinci iş: `iran` bir TORBA ve üç hanedan hiç yok.**
```
s:"iran"   317 pencere / 169 nokta  (CANLI taban — ÇAPRAZ DOĞU ölçtü)
s:"iran"   326 = beş dosya toplamı; 9'u merge dışı, ÇİZİLMİYOR
s:"afsar"  0 kayıt   ·  s:"zend"  0  ·  s:"kacar"  0
```
Kullanıcı haritada İran'ın *"benekli parçalı"* göründüğünü bildirdi. Sebebi ölçüldü:
**1500'de `akkoyunlu`(67) ile `iran`(46) aynı bölgede yerleşim yerleşim değişiyor** —
biri gerçek hanedan, öteki torba.

Kullanıcının istediği adlandırma: **"Safevî İranı" · "Afşar İranı" · "Akkoyunlu
İranı" · "Kaçar İranı"** — ayrı kimlikler, ve *"İran"* bunların **birleşimi**
olarak türetilecek.

⇒ **317 pencere yalnız 24 ayrık `(f,t)` çifti kullanıyor — iş 317 karar değil, 24 karar.**
⇒ Her biri hangi hanedana ait? Ölç, öner, `CAPRAZ-DOGU.md`'ye yaz.
⚠️ Yeni kimlik = yeni renk gerektirir; VERİ KİMLİK'in kuyruğu bugün çok uzun.
**Renk olmadan yazılan kimlik BOYANMAZ** — önerini renk ihtiyacıyla birlikte ver.

📌 **Sorduğun soruya cevap:** `yerlesimler_asya.js`'in 344 noktası gerçekten merge
dışı ve tamamı 62°D'nin doğusunda — **ama o senin işin değil**, MOTOR'un pencere
kararı (`KARAR-DAYANAK` 15-18). Sen İran'ın **pencere içindeki** kısmıyla ilgilen.

🟡 **İkinci iş: Memlük.** Bugün iki kusuru çıktı — devletin sonu yanlış tarihteydi
(`1517-01-22` = son savaşın günü; düzeltildi → `1517-04-13`), ve Kızıldeniz
kıyısında **39,7 yıl** fazladan Memlûk boyalı yer var (Arkîko · Halâib · Akīk ·
Tokar · Sinkat · Vâdî Halfâ). Memlük kaynaklarıyla Suriye-Filistin-Hicaz kesitini
çapraz sına.

### ÇAPRAZ KUZEY

🔴 **Birinci iş: Lehistan 16 nokta ile en zayıf devlet.** Osmanlı'nın en uzun
süreli kuzey komşusu için çok az. Kamaniçe (1672-1699), Hotin, Podolya, Ukrayna
kazakları, Zaporojye — bunların kaç tanesi veride?

🟡 **İkinci iş: Rusya'nın Osmanlı sınırına NE ZAMAN dayandığı.** Kullanıcının
sorusu aynen: *"Rusya ne zaman kuruldu, nasıl Osmanlı sınırına dayandı, anlamamız
lazım."* Bugün `rusya` 128 pencere taşıyor ama **ilk teması** hangi tarih?

📌 Ve bir bulgu hazır: **Deşt-i Kıpçak 1441'de değil 1502'de** Kırım'a geçiyor
(bugün düzeltildi) — Altın Orda'nın yıkılışı. Rus/Kazak/Nogay tarafından bu geçiş
nasıl anlatılıyor, çapraz sına.

### ÇAPRAZ BATI

🔴 **Birinci iş: Macaristan 30 nokta, ve ince kimlikleri HİÇ kullanılmıyor.**
```
macaristan  44 pencere ↔ dizinde 3 devlet (bağımsız · Habsburg · naiplik) · kullanım 0
```
1526 Mohaç'tan sonra Macaristan **üçe bölündü** (Kraliyet Macaristanı · Osmanlı
Budin · Erdel) ve haritamız bunu **tek renkle** gösteriyor.

🟡 **İkinci iş: Venedik'in adaları ve iskeleleri.** Kullanıcının sorusu aynen:
*"Venedik kaynaklarında Dubrovnik, Parga, Preveze, Modon, Koron ve çeşitli adalar
hakkında — Girit, Kıbrıs, Rodos vesaire — ne anlatıyor, bizdeki karşılığı nedir?"*
Venedik arşivi (Senato kararları, *Relazioni*) tarih bakımından **çok kesindir**;
bizim tarihlerimizi gün gün sınayabilir.

---

## 8. ÇIKTI BİÇİMİ

Her bulgu şu üçünü taşısın:
```
① BİZDE NE VAR      dosya · alan · tarih (ölçülmüş, tahmin değil)
② KAYNAKTA NE VAR   künye + takvim + alıntı
③ HÜKÜM             uyuyor / çelişiyor / doğrulanamadı
                    ⚠️ "doğrulanamadı" tam bir hükümdür, boşluk değil
```

📌 **Çelişki bulduğunuzda ÇÖZMEYE ÇALIŞMAYIN — kaydedin.** Karar koordinatörde,
ve karar ancak birkaç çelişki birikince doğru verilebilir (takvim sapması gibi
sistematik bir sebep ancak desende görünür).
