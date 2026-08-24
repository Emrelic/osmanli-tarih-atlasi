# BOŞLUK VE KOPUKLUK — ölçüm raporu ve şema önerisi

**Oturum:** OPUS HAZIR KITA 86 · **Tarih:** 24 Ağustos 2026
**Görev:** koordinatör (OSMANGAZİ), altı madde — 0032/H-0016 · 0033/H-0002 ·
0033/H-0009 · 0033/H-0014 · 0033/H-0019 · 0034/H-0011
**Yetki:** yalnız RAPOR. Veriye ve motora yazılmadı (`§7`).

---

## 0. ÖNCE KABUL ÖLÇÜTÜ — şartnamedeki "97" ÇÜRÜDÜ

Şartname *"`kasitli_bosluk` taşıyan 138 noktanın 97'sinde cinsi yazılmamış"*
diyordu ve **kaba olduğunu kendisi işaretlemişti.** İlk iş onu ölçmek oldu.

```
                                    ŞARTNAME (CLAUDE.md)   ÖLÇÜM (24 Ağu)
kasitli_bosluk taşıyan nokta                138                198
cinsi yazılmamış                             97                  0        🔴
```

🔴 **VE ASIL BULGU SAYIDA DEĞİL: ÖNERMEM İSTENEN ALAN ZATEN VAR VE DOLU.**

Koordinatör benden *"cins hangi ALANDA, hangi değerlerle tutulmalı"* diye bir
şema önerisi istedi (`bosluk_cinsi:"devletsiz"|"veri-yok"` gibi). Ölçüm:

```
198 kaydın 198'i `bos:` alanını taşıyor — BOŞ OLAN YOK
    devletsiz 119 · kabile 48 · veri-yok 14 · insansiz 9 · hata 8
```

Ve alan **belgelenmiş**: `arac/girdi.py:626`
> `"bos": "boşluğun CİNSİ: devletsiz | veri-yok | kabile | insansiz | hata."`

**Ve üç ayrı yerde MAKİNE tarafından okunuyor** — yani `if` ile sorulabiliyor,
şartnamenin koyduğu sınavı geçiyor:

| okuyan | satır | ne yapıyor |
|---|---|---|
| `arac/uret_petek.py` | 3609 | `DOLDURULABILIR_BOS` — hangi boşluk doldurulur |
| `arac/denetle.py` | 872 · 2199 | denetim cinsi okuyor |
| `js/app.js` | 1077 · 1110 | `devletsiz`/`insansiz`/`hata` **çizilmez** |
| `arac/nicin_bos.py` | 219 | teşhis çıktısında cinsi basıyor |

⇒ CLAUDE.md'nin *"makine SORAMIYOR · harita ÇİZEMİYOR · denetim GÖRMÜYOR"*
teşhisi **bugün için yanlış.** Borç ödenmiş, **kaydı güncellenmemiş.**

📌 Bu, CLAUDE.md'nin kendi dersinin altıncı vakası: *"ödenmiş bir borç kayıtsız
kalırsa yeniden **iş** diye bulunur."* Ben o işi yapmaya gönderildim; on dakikalık
bir ölçüm (`git grep "bos"`) bunu şartname yazılmadan önce söylerdi.

⚠️ **Ve bir tuzağı da ölçtüm:** `neden:` serbest metninde cins kelimesi arayınca
**152 kayıt "cinsi yazılmamış" çıkıyor.** Şartnamedeki 97 bu şekilde üretilmiş
olmalı. **Soru doğru, evren yanlış** — cins `neden:` metninde değil, `bos:`
alanında duruyor.

### 0.1 GERÇEK BORÇ NE — iki kalem, ikisi de yeni ölçüldü

**① CİNSSİZ SAHİPSİZ NOKTA: 13.** Hiçbir tarihte sahiplik dönemi olmayan 83
noktanın 13'ünde `kasitli_bosluk` bayrağı **yok** ⇒ hiçbir cins taşımıyorlar.
Bunlar haritada delik açıyor ve **sebepleri kayıtlı değil**:

```
Ndjamena 12,107/15,045 · Agadez 16,973/7,991 · Timbuktu 16,775/-3,009
Hadramut 15,5/48,5 · Darfur 13,5/24,0 · Somali çölü 8,0/46,5 · Ogaden 7,2/44,0
İfe (Ile-Ife) 7,467/4,567 · Upemba havzası -8,45/26,55 · Malebo Havuzu -4,27/15,35
Kasai havzası -5,0/22,5 · Ubangi-Uele havzası 3,5/22,0 · Mapungubwe -22,194/29,389
```
⇒ **Kabul ölçütü önerim: 13 → 0.** (97 → N değil; 97 diye bir küme yok.)
📌 Ve bunlardan biri **doğrudan Emre'nin `H-0014` şikâyetinin sebebi** — §5'e bak.

**② CİNSİN ZAMAN BOYUTU YOK.** `kasitli_bosluk:true` taşıyan 198 kaydın
**128'inde sahiplik dönemi DE var.** Yani boşluk noktanın ömrünün **bir
penceresinde** var, ama cins **bütün ömre** yazılı:

```
Teymâ        bos:"kabile"     ama 2 tane `s:` dönemi var
Cetinje      bos:"hata"       ama d:1 v:1 s:1 dönemi var
Kuveyt       bos:"hata"       ama v:2 s:2
```
⇒ *"Teymâ 1517'de kimin?"* sorusuna veri cevap veriyor; *"Teymâ hangi ARALIKTA
ve NİÇİN boştu?"* sorusuna **cevap veremiyor.**

### 0.2 ŞEMA ÖNERİM — yeni alan İCAT ETME, var olanı ZAMANLA

Projenin kendi deseni zaten mevcut: `VERI-YAPISI.md` `k:`/`m:` için
`kd:[{f,t,k,m}]` tasarlamış. Aynısı:

```js
// bugünkü hâl — KALIR, geriye uyumlu
bos: "devletsiz",
neden: "serbest metin, insan için",

// ÖNERİLEN EK — boşluğun PENCERESİ ve cinsi
bosd: [
  { f:"1281-01-01", t:"1517-07-06", c:"kabile",
    kaynak:"islamansiklopedisi.org.tr/teyma" }
]
```
| alan | ne | niçin |
|---|---|---|
| `c:` | cins — **`bos:` ile AYNI beş değer**, yeni sözlük yok | iki otorite doğmasın |
| `f`/`t` | boşluğun penceresi | 128 kaydın ihtiyacı bu |
| `kaynak:` | dayanak, yoksa `bulunamadı` | `§4` kırmızı çizgi |

**Geçiş kuralı:** `bosd` yoksa `bos` bütün ömre uygulanır (bugünkü davranış).
⇒ Tek satır veri değişmeden geçerli; kayıt kayıt zenginleşir.

⚠️ **`bos:`in beş değerini DEĞİŞTİRMEYİN.** Şartname `"devletsiz"|"veri-yok"`
ikilisini öneriyordu; veride **beş** değer var ve üçü fazladan iş görüyor:
`kabile` (örgütlü ama devlet değil) · `insansiz` (Svalbard: terra nullius) ·
`hata` (nokta yanlış, silinmeli). İkiye indirmek **bilgi yakar.**

📌 CLAUDE.md'nin sınavı — *"bu bilgiyi bir `if` ile sorabiliyor muyum?"*:
`bos:` **geçiyor**, pencere **geçmiyor.** Önerdiğim tam olarak o eksik ayak.

---

## 1. ALTI VAKA — ölçüm yöntemi

Her görselin alt şeridinden kutu ve gün **birebir** alındı (tahmin yok).
Her kutuda 13×13 ızgara; her hücrede iki soru **aynı anda**:

```
① üretilmiş çıktıda BOYALI mı   (donemler.js + devletler_harita.js)
② motorun KARA maskesinde mi     (ne_10m_land ∩ göl kuralı)
⇒ BOŞ+SU = kusur değil · BOŞ+KARA = gerçek boşluk
```
Sonra her boş+kara hücrenin **en yakın noktası** ve o günkü sahibi ölçüldü.

**Evren:** `girdi.yukle()` — 2606 nokta, 55 girdi dosyası (dosya listesi
`GIRDI_DOSYALARI`'ndan alındı, belgeden **değil**).

⚠️ **Çıktı geometrisi 23 Ağustos damgalı, bugün 24 Ağustos** — yani ölçtüğüm
harita **dünkü.** Emre'nin görselleri de yayından alındığı için karşılaştırma
doğru eksende, ama bugün inen veri bu tabloda **yok.**

| # | madde | kutuda nokta | boş+kara | kara üstünde boşluk | HÜKÜM |
|---|---|---|---|---|---|
| 1 | 0032/H-0016 Dinyeper 1493 | **0** | 53/169 | %31 | rakip petek — sebep ÖLÇÜLEMEDİ |
| 2 | 0033/H-0002 Aşağı İdil 1502 | 1 | 60/169 | %36 | **kur: öncesi nokta delik açıyor** |
| 3 | 0033/H-0009 Üstyurt 1509 | 19 | 50/169 | %41 | çoğu **KASITLI** (kabile) |
| 4 | 0033/H-0019 KB Arabistan 1517 | **3** | 64/169 | %48 | KASITLI + **gerçek yerleşim eksik** |
| 5 | 0033/H-0014 Kanem-Bornu 1513 | **4** | 98/169 | %58 | **cinssiz sahipsiz nokta + noktasızlık** |
| 6 | 0034/H-0011 Gürcistan 1566 | 26 | **0**/169 | **%0** | 🔴 **BOŞLUK YOK — KAMA VAR** |

---

## 2. 0032/H-0016 — Dinyeper bozkırı, 1493-01-01

*"BU BOŞLUĞUN SEBEBİ NE ÇÖZELİM"* · kutu 47,20-47,97K / 32,25-33,50D

```
① kutuda nokta            0  (sıfır)
② en yakın nokta        145 km  Zaporojye Seçi (altinorda)
                        147 km  Özi (kirim) · 148/151 km Yedisan·Yediçkul bozkırı
③ boş+kara               53 hücre (%31)
```
**Boş hücrelerin en yakın noktaları — 53'ünün 53'ü SAHİPLİ:**
`RAKİP-altinorda 43 · RAKİP-kirim 10`, mesafeler **119-141 km**.

⇒ Sebep **noktasızlık DEĞİL** (nokta var, sahipli, 250 km içinde),
**sahipsizlik DEĞİL**, **puanlama DEĞİL** (`nicin_bos.py`: dört devletin
dördü de eşiği geçiyor), **kara maskesi DEĞİL**, **kasıtlı boşluk DEĞİL.**

🔴 **Geriye tek aday kalıyor: A1 YARIÇAP TAVANININ YÖNLÜ HÂLİ (A1b).**
Noktaların dördü de `k:0` ⇒ izotrop tavan 280 km, mesafeler 119-141 km, yani
**izotrop ölçüme göre yetişiyor.** `nicin_bos.py` bunu *"burası BOYANIYOR
olmalı"* diye raporluyor — **ve kendi başlığında bu hükmün ZAYIF olduğunu
önceden yazıyor:** *"tavan şekil değiştirir ama ALANI korur ⇒ 'yetişiyor'
hükmü ZAYIF."*

⚠️ **BU KALEMİ ÇÖZMEDİM VE ÇÖZDÜM DEMİYORUM.** Kesin hüküm motor koşusu
gerektirir (`uret_petek.py` — bende yetki yok, `§7`). Koordinatöre öneri:
bu vaka **MOTOR oturumuna** gitmeli, `A1b` yönlü tavanın bozkır `k:0`
noktalarında ne kadar daralttığı ölçülsün.

📌 Bu vakada **ölçtüğüm şey** ile **çıkardığım hüküm** ayrı iki satır: ölçüm
*"53 hücre boş ve hepsinin en yakın komşusu sahipli"*; çıkarım *"geriye A1b
kalıyor"* — ve çıkarım **doğrulanmadı.**

---

## 3. 0033/H-0002 — Aşağı İdil / Astrahan, 1502-03-01

*"bu boşluğun sebebini bulalım çözelim"* · kutu 45,84-48,33K / 46,14-47,63D

```
① kutuda nokta            1  — Yenotayevsk 47,245/47,017
② en yakın (merkeze)     20 km Yenotayevsk · 63 km Saray · 120 km Astrahan
③ boş+kara               60 hücre (%36) — su hücresi SIFIR
```
**Boş hücrelerin sebebi: `SAHİPSİZ/YOK-HENÜZ` 48 · `RAKİP-astarhan` 12**

🔴 **VE SEBEBİ TAM OLARAK ŞU: HENÜZ KURULMAMIŞ ÜÇ RUS KALESİ.**
```
Yenotayevsk   kur: 1741   s: 1741→1923 rusya    boş hücrelere 19-63 km
Krasnıy Yar   kur: 1667   s: 1667→1923 rusya
Çernıy Yar    kur: 1627   s: 1627→1923 rusya
```
1502'de üçü de **yok.** Motor bunu biliyor — `uret_petek.py:2440`:
> *"kurulmamış peteğin payı, o tarihte SAHNEDE OLAN en yakın komşuya
> devredilir. **Ölçüt 'kurulmamış' değil, 'kurulmamış VE o tarihte bir sahibi
> yazılı'**."*

⚠️ **Ve ölçüt tam burada tutmuyor:** Yenotayevsk 1502'de *kurulmamış* ama o
tarih için **yazılı bir sahibi de yok** (ilk dönemi 1741'de başlıyor) ⇒ ikinci
şart sağlanmıyor ⇒ **pay devredilmiyor** ⇒ peteği boş kalıyor. Sonuç: İdil
boyunca kuzey-güney uzanan bir **delik şeridi**, ve şeridin şekli üç kalenin
dizilişiyle birebir örtüşüyor.

**HÜKÜM:** bu bir **veri kusuru değil, kural boşluğu.** İki çare var, ikisi de
benim yetkimde değil:
```
(a) MOTOR   devir ölçütünden ikinci şartı kaldır — "kurulmamış" tek başına yetsin
(b) VERİ    üç kayda kuruluş öncesi için `kasitli_bosluk` + `bos:` cinsi yaz
```
📌 **(a)'yı öneriyorum**, çünkü (b) her kur:'lu nokta için tekrarlanır ve
2606 noktanın kaçında aynı desenin olduğu **ölçülmedi** — bu, tek başına bir
sonraki oturumun işi (`kur:` taşıyan ve kuruluş öncesi sahipsiz kalan bütün
noktalar taranmalı).

---

## 4. 0033/H-0009 — Üstyurt / Mangışlak / Karakum, 1509-09-14

*"bu bölgedeki boş alanlarda hiç devlet otoritesi olmadığı kesin mi… siyasî
yapıları hanlık emirlik devlet yapılarını kontrol edelim"*
kutu 38,04-49,57K / 49,59-61,34D

```
① kutuda 19 nokta: 12 SAHİPLİ · 4 KASITLI BOŞLUK · 3 sahipsiz
   sahipli olanlar: Mangışlak·Garabogaz·Çeleken·Küngrat·Köhne Ürgenç·Hîve·
                    Hazârasp = buhara · Üstyurt kuzeyi·Emba = nogay ·
                    Bakü = safevi · Dihistan·Kızılarvat = iran
② merkeze en yakın   90 km Üstyurt platosu (doğu) — SAHİPSİZ, bos:kabile
③ boş+kara 50 hücre (%41)
```
**Boş hücrelerin sebebi: `KASITLI(kabile)` 33 · `SAHİPSİZ` 17 · rakip 11**

⇒ **EMRE'NİN SORUSUNA DOĞRUDAN CEVAP: hayır, "hiç otorite yoktu" diye bir
hüküm verilmiş DEĞİL — tam tersine, veri o bölgeye DÖRT AYRI DOLGU NOKTASI
koyup cinsini `kabile` diye YAZMIŞ.** Yani atlas *"devlet yoktu"* demiyor,
*"devlet değil BOY/KONFEDERASYON vardı"* diyor:
```
Üstyurt platosu (batı) 43,8/53,5 · (doğu) 43,5/56,5 · Uzboy 39,9/55,5 ·
Karakum 39,5/58,5   — dördü de bos:"kabile"
```
Ve çevresi **boş değil**: Hârizm vahaları (Hîve, Köhne Ürgenç, Hazârasp,
Küngrat) 1509'da `buhara` — tarihen doğru, Şeybânî Muhammed Han Hârizm'i
1505'te almıştı. Kuzeyde Nogay, doğuda Kazak Hanlığı boyalı.

**KALAN KUSUR:** 17 hücre `kur:` öncesi noktalardan geliyor — **§3'ün aynı
sınıfı**: `Guryev (Atyrau)` kur 1640 · `Krasnovodsk` kur 1869 · `Yeni Ürgenç`
kur 1646. ⇒ İki vaka tek çareyle kapanır.

**ÖNERİ (araştırma, veri değil):** `kabile` cinsi doğru ama **kaynaksız** —
dört kaydın `kaynak:` alanı boş. TDV `ustyurt` slug'ı **ÖLÜ** (302), `harizm`
**CANLI** (200). Türkmen boyları için `harizm` + standart akademik kaynak
kullanılmalı ve `kaynak:` alanına **açıkça** yazılmalı (`§4` kırmızı çizgi).

---

## 5. 0033/H-0014 — Kanem-Bornu, 1513-09-01 · KOPUKLUK

*"bu kanem bornu imparatorluğunun sınırlarını ayrı kopuk bölgelerinin birleşik
gösterilmemesi için sebeb ne"* · kutu 10,66-16,85K / 7,92-17,39D

```
① kutuda 4 nokta:  Kano (hausa) · Birni N'gazargamu (kanem-bornu) ·
                   Mao/Kanem (kanem-bornu) · Ndjamena (SAHİPSİZ)
   ⇒ İMPARATORLUĞUN TAMAMI İKİ NOKTAYLA temsil ediliyor, aralarında 500 km
② en yakın (merkeze) 265 km Birni · 289 km Mao · 318 km Ndjamena
③ boş+kara 98 hücre (%58)
```
**Boş hücrelerin sebebi: `SAHİPSİZ` 40 · `NOKTASIZ >250km` 36 · rakip 21**

🔴 **KOPUKLUĞUN ADI VAR: `Ndjamena`.**
```json
{"ad":"Ndjamena","tur":"sehir","lat":12.107,"lon":15.045,
 "g":0,"k":0,"d":[],"m":null,"s":[],"v":[]}
```
**Hiçbir dönemi yok. `kur:` yok. `kasitli_bosluk` yok. `bos:` cinsi yok.**
Ve tam olarak **iki lobun arasında** duruyor (Birni'ye 424 km, Mao'ya 210 km).
⇒ Peteği hiçbir zaman boyanmıyor ve **Çad gölünün batı-doğu geçişini kesiyor.**
📌 Bu, §0.1'de saydığım **13 cinssiz sahipsiz noktadan biri** — yani şema
borcu ile Emre'nin şikâyeti **aynı kayıtta buluşuyor.**

**İkinci sebep: NOKTASIZLIK.** 36 hücrenin en yakın komşusu 250 km'den uzak.
TDV `bornu` maddesi (**CANLI**, okundu) bölgeyi şöyle tarif ediyor:
> *"May Ömer b. İdrîs (1382-1387) … Çad gölünün batı tarafına çekilerek burada
> merkezi Kafa olan Bornu Devleti'ni kurdu"* · *"kuzeyinde Büyük Sahrâ,
> güneyinde Adamava, **doğusunda Çad gölü**, batısında Hevsâ ülkesi"*

⇒ İki loblu görüntü **coğrafyada gerçek** (göl ortada), ama **kopukluk gerçek
değil**: göl kıyısı boyunca güneyden ve kuzeyden dolaşan hâkimiyet var.
TDV maddesi `Ngala` şehrini adıyla anıyor.

**HÜKÜM:** kopukluğun sebebi motor değil, **iki nokta ile bir imparatorluk
temsil etmek** — `§2` emilme kuralının ders kitabı vakası.

---

## 6. 0034/H-0011 — Gürcistan, 1566-01-01 · 🔴 SORU YANLIŞ KURULMUŞ

*"bu gürcistan böyle iki parça görünüyor normal mi… iki parça görünmesine
sebeb olan şehir bölgelerini tespit edelim… koridor var ise Gürcistan
hâkimiyetinde görünmeli"* · kutu 40,90-44,91K / 39,23-47,38D

```
① kutuda 26 nokta — gurcistan olanlar: Sohum · Batum · Hulo (Acara) ·
   Kutaisi · Ahıska · Tiflis · Zagem (Kaheti)
③ boş+kara  0 hücre    ·   motor_kara ile ayrışma 0
```

🔴 **BURADA BOŞLUK YOK. %0. Gürcistan'ı ikiye bölen şey bir BOŞLUK DEĞİL,
BAŞKA BİR DEVLETİN GÖVDESİ — `kirim`.**

Izgara (kuzey üstte) bunu doğrudan gösteriyor: kuzeyden aşağı inen kesintisiz
bir `kir` kaması, batıdaki `gur` (Sohum-Kutaisi) ile doğudaki `gur`
(Tiflis-Zagem) arasına giriyor ve güneyde Osmanlı kamasıyla buluşuyor.

**KAMAYI YAPAN NOKTA:**
```
Kabartay (Nalçik)   43,498 / 43,618   s: kirim      yerlesimler.js
   ⇒ peteği Büyük Kafkas ana sırtını AŞIP güneye, Gürcistan'ın ortasına sarkıyor
Stavropol–Kuma bozkırı 44,850/42,600 · Maykop 44,609/40,101 — ikisi de kirim
```
**SEBEP:** kamanın indiği koridorda (Raça · Svaneti · İç Kartli) **tek bir
Gürcü noktası yok.** En yakın Gürcü noktaları Kutaisi (42,268/42,695) ve
Tiflis (41,716/44,783) — aralarında **190 km** ve arada hiçbir şey yok.

**EMRE'NİN KORİDOR SORUSUNA CEVAP: EVET, KORİDOR VAR VE ADI BELLİ.**
Imereti (batı) ile Kartli (doğu) arasındaki tek tarihî geçiş **Lihi (Surami)
sırtı** üzerindeki geçittir — Kutaisi–Surami–Gori–Mtsheta–Tiflis yolu. Bu yol
Gürcü tarihinin ana ekseni; kamayı kaldıracak olan şey de tam olarak bu hat
üzerine nokta koymaktır.

⚠️ **VE BİR AYRIM: "iki parça" ÖZDE doğru, BİÇİMDE yanlış.**
1490'dan sonra Gürcistan gerçekten parçalıdır (Kartli · Kahetî · İmeretî +
Samtshe atabeyliği), ve 1555 Amasya antlaşması batıyı Osmanlı, doğuyu Safevî
nüfuz alanına ayırmıştır. **Ama atlasın gösterdiği bölünme bu değil** — atlas
tek bir `gurcistan` kimliğini **Kırım peteğiyle** ikiye kesiyor. Yani ekranda
doğru görünen şey, **yanlış sebepten** doğru görünüyor.
📌 Bunu düzeltmenin iki yolu var ve **ikisi ayrı iştir**: (a) kamayı kaldırmak
(nokta işi, aşağıda) · (b) Gürcistan'ı gerçek parçalarına ayırmak (künye işi,
`data/devletler.js` — **başka oturumun dosyası**).

⚠️ **AYRICA — ÖLÇTÜM AMA ÇÖZMEDİM:** `Ahılkelek (Akhalkalaki)` 41,403/43,484
1566'da **OSMANLI** yazılı. Osmanlı'nın Ahılkelek/Samtshe'yi alışı **1578
Çıldır** seferidir; 12 yıllık bir öne alma olabilir. **Kaynakla
doğrulamadım**, koordinatöre bildiriyorum — anakronizm oturumunun işi.

---

## 7. ALETLERDE BULUNAN İKİ KUSUR (görevin parçası değildi, yolda çıktı)

### 7.1 🔴 `arac/denetle_bosluk.py` — 23 GÜNDÜR YABANCI GÖVDE OKUYAMIYOR

Bu görevin **tam adını taşıyan** alet çalışmıyor:
```
py arac/denetle_bosluk.py --kesit 1493-01-01
  !  2465 yabancı parça çözülemedi (boşluk ŞİŞMİŞ olabilir)
  !! HİÇ yabancı gövde çözülemedi — okuyucu bozuk olabilir, envanter güvenilmez
```
**SEBEP:** `_parca()` şöyle diyor — `Polygon(halkalar[0], halkalar[1:])`, yani
havuz girdisini **halka listesi** sanıyor. Oysa `DEVLET_PARCALAR` bir **halka
havuzu** (`uret_petek.py:3679`) ve poligonu `DEVLET_PARCA_HALKA` indeksi
kuruyor (`js/app.js parcaCoz`).

**TARİHLER — ve desen tanıdık:**
```
denetle_bosluk.py son dokunuş   88ef981   1 Ağustos 2026
DEVLET_PARCA_HALKA doğuşu       348434e   4 Ağustos 2026     ← ÜÇ GÜN SONRA
```
⇒ Alet değişmedi, **evreni değişti.** CLAUDE.md'nin *"bir aletin evreni
değişince, alet değişmeden sessizce yanılır"* dersinin birebir tekrarı.
🟢 **Ama sessiz değil:** aletin yazarı *"hiçbir başarısızlık `None` dönmüyor,
hepsi GÜRÜLTÜLÜ ölüyor"* diye bir nöbetçi koymuş ve **nöbetçi öttü.** Kusur
alette değil, **23 gün kimsenin koşturmamış olmasında.**

**Yan kusur:** `bolge_kutusu()` `None` döndürüyor — çıktıda
`harita penceresi: None`. Regex tek bir `box(...)` arıyor, pencere ise artık
`unary_union([box(...), box(...)])` (L şekli). *"Veri zaten bir dilde
yazılıysa o dilin yorumlayıcısını çağır"* dersinin bir vakası daha.

**Yan bulgu:** `denetim/BOSLUK-DEFTERI.json` **1 Ağustos** tarihli, 135 kayıt —
veri o günden bugüne ~900 nokta büyümüş. Defter **bayat**.

### 7.2 🔴 `veri-kaynak/motor_kara.geojson` MOTORDAN AYRIŞMIŞ — ve ben buna DÜŞTÜM

İlk taramamı bu dosyayla yaptım ve **yanlış sonuç ürettim**: Dinyeper kutusunda
46 hücre *"su"* çıktı, hüküm *"boşluğun çoğu zaten deniz"* olacaktı.
Doğrulama sınavı kurtardı:
```
47,31K / 32,85D  (Ukrayna, Berezneguvate civarı)
   ne_10m_land.geojson   → KARA        ne_10m_lakes'te göl YOK
   motor_kara.geojson    → SU          🔴
```
**SEBEP:** `uret_petek.py:379` **`ne_10m_land.geojson`** okur ve modern baraj
göllerini **kasten çıkarmaz** (`hatalar 5.docx` md.1 — Dinyeper zinciri: Kiev
1964 · Kahovka 1956 · Kremençug 1959 adıyla sayılı). `motor_kara.geojson` ise
o karardan **önceki** hâli taşıyor gibi: Dinyeper barajları hâlâ oyuk.
```
ayrışan hücre / 169:  Dinyeper 48 · Kanem-Bornu 26 · Üstyurt 11 ·
                      Arabistan 4 · Aşağı İdil 1 · Gürcistan 0
```
⚠️ **Ve `arac/maliyet.py:132` onu şöyle tarif ediyor:**
> *"`motor_kara.geojson` motorun KENDİ kara maskesi"*

📌 Bu, CLAUDE.md'nin *"yanlış bir güvence, hiç yazılmamış bir nottan
kötüdür"* dersinin yeni bir vakası: cümle okuyanı **doğrulamaktan alıkoyuyor**,
ve beni de tam olarak öyle yaptı. Onu kullanan üç alet var —
`maliyet.py` · `olc_ekleyici.py` · `uret_altlik.py` (altlık = kullanıcının
gördüğü fizikî zemin) — **üçünün de çıktısı bu ayrışmadan etkilenir.**
⇒ Koordinatöre öneri: dosya ya motorun tarifiyle **yeniden üretilsin**, ya da
üreten adım motor koşusuna bağlansın.

---

## 8. NOKTA ÖNERİLERİ — 3 KM kuralı ölçüldü, hiçbiri ihlal etmiyor

🔴 **BUNLAR ÖNERİDİR, VERİYE YAZILMADI.** `kur:` ve dönemler için kaynak
doğrulaması **tamamlanmadı** — aşağıda hangisinin doğrulandığı açıkça yazılı.

### 8.1 Gürcistan koridoru (vaka 6) — kamayı kaldıracak olan
| ad | lat | lon | en yakın kayıt | TDV |
|---|---|---|---|---|
| Gori | 41,984 | 44,113 | Tiflis 63,1 km | `gori` **ÖLÜ (302)** |
| Surami / Haşuri | 41,993 | 43,600 | Ahıska 64,1 km | ölü |
| Oni (Raça) | 42,579 | 43,443 | Kutaisi 70,5 km | ölü |
| Mtsheta | 41,845 | 44,720 | Tiflis 15,3 km | ölü |

**Kaynak durumu:** `gurcistan` · `tiflis` · `ahiska` · `acara` **CANLI (200)**;
`gori` · `kutaisi` · `imereti` · `kartli` · `kaheti` **ÖLÜ (302)**.
⇒ `§4`: bu tanecikte TDV susuyor ⇒ standart akademik kaynak **meşru**, ama
`kaynak:` alanına **açıkça** yazılmalı. **Ben o kaynağı bulmadım.**
📌 **En kritik olan Oni (Raça)** — Kabartay kamasının indiği yer tam orası.
Tek başına bir nokta bile kamayı ana sırtın kuzeyine iter.

### 8.2 Kuzeybatı Arabistan (vaka 4) — "hiç mi yerleşim yok" sorusunun cevabı
🟢 **TDV AÇIKÇA "VAR" DİYOR.** `vadilkura` maddesi (**CANLI**, gövdesi okundu):
> *"Bölge ismini Medine'nin kuzeybatısında **Teymâ ile Medine arasında** halkı
> tarımla uğraşan **birkaç köyün sıralandığı** vadiden (Vâdilkurâ = köyler
> vadisi) almıştır"*

Yani Emre'nin parmakla gösterdiği boşluk, TDV'nin **adını koyduğu** bir
yerleşim kuşağı.
| ad | lat | lon | en yakın kayıt | TDV |
|---|---|---|---|---|
| Vâdilkurâ | 26,100 | 38,400 | Teymâ 171,1 km | `vadilkura` **CANLI 200** ✓ okundu |
| Hayber | 25,700 | 39,292 | Medine 140,7 km | `hayber` **CANLI 200** |
| el-Ulâ | 26,617 | 37,917 | Teymâ 129,0 km | `ula`/`el-ula` **ÖLÜ** → `vadilkura` |
| Medâin Sâlih (el-Hicr) | 26,787 | 37,953 | Teymâ 110,8 km | `hicr`/`medain-salih` **ÖLÜ** |

⚠️ **1517-07-12 ve sahiplik:** görselin maddesi *"Hâdimü'l-Haremeyn unvanının
kabulü"* — yani Hicaz'ın Osmanlı'ya geçtiği günlerdeyiz. Bu noktaların
dönemleri **Medine ile aynı eksende** yazılmalı; **ben o tarihleri kaynaktan
doğrulamadım.**

### 8.3 Çad havzası (vaka 5)
| ad | lat | lon | en yakın kayıt | not |
|---|---|---|---|---|
| **Ndjamena — DÜZELTİLECEK** | 12,107 | 15,045 | — | dönemi yok; ya `kanem-bornu` dönemi yazılsın ya `kasitli_bosluk`+`bos:` |
| Ngala | 12,354 | 14,185 | Ndjamena 97,5 km | TDV `bornu` maddesinde **adı geçiyor** |
| Nguigmi | 14,253 | 13,110 | Mao 239,5 km | gölün kuzeybatı kıyısı |

🔴 **`Kusseri` (12,078/15,030) ÖNERİLMEZ — Ndjamena'ya 3,6 km.** 3 km kuralının
hemen dışında ama `§11`in *"yakın mükerrer yerleşim"* tuzağına birebir uyuyor.
⇒ Yeni nokta eklemek yerine **var olan Ndjamena kaydı düzeltilmeli.**

---

## 9. ÖLÇMEDİKLERİM — açıkça

`§7.1 ④` gereği, ölçmediğimi *"ölçmedim"* diye yazıyorum:

1. **Vaka 1'in kesin sebebi.** A1b yönlü tavan hipotezi **doğrulanmadı**;
   motor koşusu gerekir, yetkim yok.
2. **`kur:` deseninin kapsamı.** Vaka 2 ve 4'teki delik sınıfı 2606 noktanın
   kaçında var — **saymadım.** Ayrı bir tarama işi.
3. **Ahılkelek 1566 anakronizmi.** Şüphelendim, **kaynakla sınamadım.**
4. **Önerdiğim noktaların dönem ve kuruluş tarihleri.** Yalnız konum, en yakın
   komşu ve TDV slug canlılığı ölçüldü; **dönemler yazılmadı.**
5. **Görsellerin bayatlığı.** CLAUDE.md'nin *"N / TOPLAM başlık"* aleti bu altı
   görselde **kullanılamadı** — altısı da kronoloji panelini içermiyor, harita
   kırpılmış. Onun yerine paket damgasına baktım: **0032 · 0033 · 0034 üçü de
   BUGÜN** (24 Ağu 11:07 · 13:50 · 17:35) ⇒ şikâyetler taze. Ama çıktı
   geometrisi **23 Ağustos** damgalı, yani görsellerin gösterdiği yayın ile
   bugünkü girdi arasında **bir tur** fark olabilir.
6. **`motor_kara.geojson`un ne zaman ayrıştığı.** Ayrışmayı ölçtüm, **tarihini
   ve sebebini git'ten doğrulamadım** — "baraj kararı öncesinden kalma" bir
   **tahmindir**, ölçüm değil.
