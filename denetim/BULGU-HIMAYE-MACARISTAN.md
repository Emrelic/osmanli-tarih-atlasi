# HİMAYE VE MACARİSTAN — ölçüm raporu

**Oturum:** OPUS HAZIR KITA 86 · **Tarih:** 24 Ağustos 2026
**Görev:** koordinatör (OSMANGAZİ) — ① himaye kapsamı · ② Szapolyai hükmü ·
③ 1526-1541 Macaristan verisi + enklav ayrımı
**Yetki:** yalnız RAPOR. `data/` · `arac/` · `js/app.js` · `css/` — hiçbirine
yazılmadı. Şerit çizimi **tarif edildi, kodlanmadı.**

---

## 0. ÜÇ CÜMLEDE SONUÇ

```
① HİMAYE   veri karşılığı gerçekten YOK — ama YARISI VAR: `v[].k` alanı
           tâbi devletin adını 396 dönemde taşıyor ve motor onu OKUMUYOR
           ("gösterim için", girdi.py:657). Emre'nin istediği iç renk için
           gereken bilgi ORADA DURUYOR, kullanılmıyor.
② SZAPOLYAI  Emre'nin eğilimi (vassal) SINANDI ve TDV daha keskin bir şey
           söylüyor: 1526-1541 "HİMAYE", 1541 sonrası "HARAÇGÜZÂR".
           ⇒ Emre'nin iki kararı BİRBİRİNE KİLİTLENİYOR — Szapolyai,
             himaye kademesinin ARKETİPİ.
③ ENKLAV   GERÇEK, ve §2 emilmesi DEĞİL. Sebep ölçüldü: 13 nokta,
           künyesi 1526-08-29'da BİTEN `macaristan` kimliğiyle 68 yıla
           kadar boyanmaya devam ediyor.
```

---

## 1. ③ ÖLÇÜM — 1526-1541 Macaristan bugünkü veride ne yazıyor

Kutu 45,4-49,8K / 15,8-23,6D · evren `girdi.yukle()` = 2606 nokta / 55 dosya.

### 1.1 NE ÖLÇTÜM

| gün | avusturya | macaristan | TÂBİ [Zapolya] | OSMANLI | TÂBİ[?] |
|---|---|---|---|---|---|
| 1526-09-15 | 20 | 13 | 4 | 3 | 1 |
| 1530-06-15 | 20 | 13 | 4 | 3 | 1 |
| 1538-06-15 | 20 | 13 | 4 | 3 | 1 |
| 1541-09-15 | 20 | 12 | 0 → **Erdel Prensliği 2** | 6 | 1 |

*(Zapolya kaydı toplam **5**; beşincisi Erdel/Kaloşvar 23,591D, kutunun dışında.)*

**Zapolya kayıtları — beşi de aynı pencere, `v:` (tâbi):**
```
Budin 47,498/19,040 · Peşte 47,494/19,060 · Varad 47,053/21,941 ·
Yanova 46,426/21,741 · Erdel-Kaloşvar 46,770/23,591
   v: 1526-09-01 → 1541-08-29   k:"Macaristan (Zapolya vasal krallığı)"
```
🟢 ⇒ **Emre'nin "ben vassal saymaktan yanayım" eğilimi, verinin BUGÜN YAPTIĞI
şeydir.** Değiştirilecek bir şey yok; sorulması gereken, kademenin ADI.

### 1.2 ENKLAV — gerçek mi, §2 emilmesi mi? **GERÇEK.**

Üretilmiş çıktıda 1530-06-15 için nokta nokta sorguladım (hangi gövdeler o
koordinatı **kapsıyor**):

| nokta | onu kapsayan gövdeler |
|---|---|
| **Budin** | `macaristan` **VE** `TÂBİ` — **İKİSİ BİRDEN** |
| **Peşte** | `macaristan` **VE** `TÂBİ` — **İKİSİ BİRDEN** |
| Vaç · Hatvan · İstolni Belgrad · Solnok · Segedin | yalnız `macaristan` |
| Varad | yalnız `TÂBİ` |

⇒ Budin/Peşte'nin tâbi lekesi, `macaristan` gövdesinin **üstünde** duruyor
(`js/app.js:761` vassal-dolgu, `:725` devlet-dolgunun üstünde) ve etrafı
`macaristan` olduğu için **ada gibi görünüyor.**

**§2 emilmesi DEĞİL, çünkü emilme için nokta yokluğu gerekir — kutuda 41 nokta
var ve boşluk sıfır.** Kusur geometride değil, **kimlik atamasında.**

### 1.3 🔴 KÖK SEBEP — KÜNYESİ BİTMİŞ BİR DEVLET 68 YIL DAHA BOYANIYOR

`data/devletler.js`:
```
macaristan            "Macaristan Krallığı (BAĞIMSIZ DÖNEM)"   f:1000-01-01  t:1526-08-29
macaristan-habsburg   "Macaristan Krallığı (Habsburg Tacı)"    f:1526-08-29  t:1918-11-16
   — ikisinin de harita: "macaristan"  (aynı renk anahtarı)
```
**Veride ölçtüm:**
```
s:"macaristan" dönemi 1526-08-29'dan SONRAYA uzanan nokta:  13
s:"macaristan-habsburg" kullanan dönem:                       0     🔴
```
13 noktanın bitiş tarihleri, **her birinin Osmanlı tarafından fethedildiği
gün**:
```
Kalocsa 1541-08-29 · Peçuy 1543-07-21 · Estergon 1543-08-10 ·
İstolni Belgrad 1543-08-10 · Segedin 1543-08-10 · Şimontorna 1544-09-01 ·
Hatvan 1544-09-01 · Vaç 1544-09-01 · Temeşvar 1552-07-27 ·
Solnok 1552-09-04 · Gyula 1566-09-02 · Zigetvar 1566-09-07 ·
Yanıkkale (Győr) 1594-09-27          ⇒ en uzun fazlalık 68 YIL
```

**① NE ÖLÇTÜM:** künye `macaristan`'ı 1526-08-29'da bitiriyor; 13 nokta o
kimlikle 1541-1594 arasına kadar boyanıyor; `macaristan-habsburg` künyesi
**hiç kullanılmıyor**; Habsburg Macaristanı veride `avusturya` diye yazılmış
(Bratislava · Sopron · Kassa · Nitra · Komárom · Tokaj … 20 nokta).

**② ONDAN NE ÇIKARDIM:** bu, CLAUDE.md `§3.5`'in **hayalet devlet** sınıfı —
"veri denetimi temiz raporlarken harita var olmayan devletleri boyuyor". Ve
Emre'nin enklav şikâyetinin **doğrudan sebebi**: Szapolyai'nin ülkesi iki
ayrı dille aynı anda anlatılıyor — beş nokta `v:` tâbi, ortadaki on üç nokta
`s:"macaristan"`. İki dil aynı toprakta çakışınca ada çıkıyor.

⚠️ **ÇIKARIMIM DOĞRULANMADI:** o 13 noktanın 1526-1541 arası **kime**
yazılması gerektiğini ölçmedim. Tarihen üçe bölünür (Ferdinand'ın Kraliyet
Macaristanı · Szapolyai'nin doğu krallığı · fetihle Osmanlı) ve **hangi
noktanın hangisinde olduğu kaynak işidir** — ayrı bir parti.

---

## 2. ② SZAPOLYAI — kaynak SINANDI, doğrulanmadı

Koordinatörün şartı: *"Araştırma bunu DOĞRULAMAK için değil, SINAMAK için
yapılır."* Uygulandı.

### 2.1 Slug sınavı (`§4`, HTTP kodu)
```
🔴 ÖLÜ (302)   zapolya · zapolyai · janos-zapolya · ferdinand ·
               habsburglar · orta-macar-kralligi
🟢 CANLI (200) macaristan · budin · erdel · mohac · kanuni-sultan-suleyman
```
⇒ `§4`'ün *"dar slug tutmazsa kapsayıcı maddeyi dene"* kuralı uygulandı;
üç maddenin **gövdesi okundu.**

### 2.2 Kaynak ne diyor — üç madde, tek yönde

**`macaristan`** (müellif: GÉZA DÁVID):
> *"asilzadeler, I. Ferdinand (1526-1564) olmak üzere bir Habsburg ve
> Transilvanya Voyvodası I. János Szapolyai (1526-1540) olmak üzere bir de
> yerli kral seçtiler… Bu yüzden **Osmanlı himayesini kabul eden I. János**
> ile buna karşı çıkan I. Ferdinand arasında kararsız kalıp sık sık taraf
> değiştirenler oldu."*
> *"1529'da… Kanûnî… **Budin'e yeniden girdi ve burayı Szapolyai'ye
> bırakarak** yoluna devam etti."*
> *"**1540'ta I. János ölünce Budin merkezli bir Osmanlı beylerbeyiliği
> kuruldu.**"*

**`erdel`:**
> *"Ferdinand tarafından mağlûp edilen Szapolyai Kanûnî Sultan Süleyman'a
> **itaat ederek Osmanlı himayesine girince** Osmanlı desteğiyle Macar ve
> Erdel kralı oldu"*
> *"…1541'de Erdel Osmanlılar'a bağlı **haraçgüzâr statüsünde bir
> voyvodalık** hâline geldi. Önceleri **10.000 altın** olan Erdel haracı
> XVII. yüzyılda 40.000 altına yükseldi."*

**`budin`:**
> *"Değişen siyasî şartlar karşısında Sultan Süleyman **himaye
> politikasından vazgeçip** Macaristan'ın merkezini kalıcı bir şekilde
> kendine bağlamaya karar verdi."* (1541)
> *"…hemen bir beylerbeyi tayin edip merkeze bağlı yeni bir eyalet kurdu
> (948/1541)."*

### 2.3 HÜKÜM

**① NE ÖLÇTÜM:** TDV üç ayrı maddede 1526-1541 dönemini **"himaye"**
kelimesiyle adlandırıyor (`macaristan`: "Osmanlı himayesini kabul eden" ·
`erdel`: "Osmanlı himayesine girince" · `budin`: "himaye politikasından
vazgeçip"). 1541 sonrası Erdel için **başka** bir kelime kullanıyor:
**"haraçgüzâr voyvodalık"**, ve rakam veriyor: **10.000 altın haraç**.

**② ONDAN NE ÇIKARDIM:** Emre'nin eğilimi (*"vassal saymaktan yanayım"*)
**yanlış değil ama kaba** — kaynak iki farklı bağlılığı ayırıyor ve ayrımın
**ölçülebilir bir sınavı** var:

```
HARAÇ VAR MI?
   VAR  → haraçgüzâr vasal      Erdel 1541+ · Eflak · Boğdan
   YOK  → HİMAYE                Szapolyai Macaristanı 1526-1541
```
Ve Szapolyai'nin ayırt edici nitelikleri, Emre'nin `3 a` kararının tarifiyle
birebir örtüşüyor: **kendi kralı, kendi tacı, kendi devlet adı** (iç renk
kendisinin) + **Osmanlı askerî koruması ve siyasî bağımlılığı** (kırmızı
şerit).

🟢 **VERİ ZATEN BU SINIRI TUTUYOR — ölçtüm:** Erdel · Varad · Yanova'nın
`v[].k` değeri **tam 1541-08-29'da** `"Macaristan (Zapolya vasal krallığı)"`
→ `"Erdel Prensliği"` diye değişiyor. Yani veri, TDV'nin kırılma gününü
**zaten biliyor**; eksik olan tek şey, iki tarafa **farklı kademe adı**
vermek.

---

## 3. ① HİMAYE KAPSAMI — ölçüt + 11 kayıt

### 3.1 Önce ölçtüm: veri karşılığı var mı?
```
`himaye:` diye bir ALAN            → YOK   (grep: data/ arac/ js/ css/ — sıfır)
`v:` dönemlerinin alanları         → f · t · k        (405 dönem, k 396'sında)
`d:` dönemlerinin alanları         → f · t · y        (1166 dönem)
`s:` dönemlerinin alanları         → f · t · d · kaynak · enklav
```
⇒ Koordinatörün *"veride karşılığı YOK"* teşhisi **bu sefer doğru** — ama
yarısı var:

🟢 **`v[].k` = "tâbi devletin adı" ve 396 dönemde DOLU.** `girdi.py:657`:
> *"tâbi devletin adı — v: içinde (**motor okumaz, gösterim için**)"*

**② ÇIKARIM:** Emre'nin istediği *"iç renk O DEVLETİN KENDİ RENGİ"* için
gereken bilgi **zaten kayıtlı**; motor onu okumadığı için bütün tâbiler tek
tip açık Osmanlı tonuyla boyanıyor.
⚠️ **AMA `k:` bir SERBEST METİN, kimlik değil** — `"Macaristan (Zapolya vasal
krallığı)"` bir renk anahtarına çevrilemez. Renk için **id** gerekir.

### 3.2 Şema önerim — yeni kademe değil, var olan `v:`e İKİ ALAN

```js
v: [{ f:"1526-09-01", t:"1541-08-29",
      k:"Macaristan (Zapolya vasal krallığı)",   // BUGÜNKÜ — kalır
      hm: true,                                   // ÖNERİ: himaye kademesi
      hid:"macaristan" }]                         // ÖNERİ: iç rengin KİMLİĞİ
```
| alan | ne | niçin |
|---|---|---|
| `hm:` | `true` ise **himaye** — kırmızı şerit + kendi rengi | üçüncü kademeyi tek bit ile ifade eder; `hm` yoksa bugünkü davranış |
| `hid:` | iç rengi verecek **devlet kimliği** (`renkler.BOYALAR` anahtarı) | `k:` serbest metin, renge çevrilemez |

**Geriye uyum:** `hm` yazılmayan 394 dönem bugünkü gibi çizilir. Tek satır
veri bozulmaz.

⚠️ **`hid:` için renk var mı — ölçtüm:** `macaristan` → `#20d880` **VAR**.
`erdel` → **YOK** · `kuveyt` → **YOK**. Yani himaye kümesi büyütülürse
`renkler.py`'de yeni renk gerekir (RENK oturumunun işi).

### 3.3 Aday küme — DAR TUTULDU, 11 dönem / 3 küme

Koordinatörün şartı: *"yalnız Emre'nin adıyla andığı vakalar + açıkça aynı
sınıfta olanlar. Bütün tâbiyet ilişkilerini yeniden sınıflandırmaya KALKMA."*
Uygulandı — ölçüt **haraç sınavı** ve **kendi tacı** şartı.

| # | küme | dönem | pencere | dayanak |
|---|---|---|---|---|
| 1 | **Macaristan (Zapolya)** — Budin · Peşte · Varad · Yanova · Erdel(Kaloşvar) | 5 | 1526-09-01 → 1541-08-29 | TDV `macaristan`·`erdel`·`budin`: **"himaye"** ✓ okundu |
| 2 | **Orta Macar Krallığı (Tököli İmre)** — Kassa · Eperjes · Tokaj · Fülek · Ungvár | 5 | 1682-09-16 → 1685-10-15 | Osmanlı'nın kral ilân ettiği, kendi tacı olan krallık — **TDV ile doğrulamadım** |
| 3 | **Kuveyt** — Sabah emirliği | 1 | 1795-04-01 → 1871-01-01 | kaydın kendi `k:` değeri **zaten "Osmanlı himayesinde" diyor** |

**TOPLAM: 11 dönem, 11 kayıt.**

📌 3 numara ayrı bir cinsten değerli: **kaydı yazan oturum "himaye" kelimesini
kendisi kullanmış** ama ifade edecek alan olmadığı için serbest metne gömmüş.
CLAUDE.md'nin *kusur sınıfı ⑪* — doğru öğrenilmiş bir dersin makinenin
göremeyeceği yere yazılması.

🔴 **KÜME KAPANMADI VE KAPATAMAM:** koordinatöre M-1268'de bildirdim —
**Emre'nin himayeyi hangi vakalar için andığını gösteren liste bende yok.**
Yukarıdaki üç küme *benim* taramamdır (`v[].k` içinde "apoly" · "Tököli" ·
"himaye"). Emre'nin listesiyle **karşılaştırılmadan kesin sayılmaz.**

**Bilerek DIŞARIDA bıraktıklarım** (haraç sınavını geçemiyorlar ya da başka
sınıf): Eflak · Boğdan · Erdel 1541+ (haraçgüzâr) · Kırım Hanlığı ·
Cezayir/Tunus/Trablusgarp ocaklıkları · Mısır (Kavalalı) · Bulgaristan ·
Sırbistan · Şarkî Rumeli · Mekke Şerifliği.
⚠️ **Mekke Şerifliği ve Kırım Hanlığı tartışmaya en açık ikisi** — ikisi de
haraç ödemez, ikisinin de kendi hânedanı vardır. **Ölçmedim, karar
vermedim**; Emre'nin listesi gelince ilk bakılacaklar bunlar.

### 3.4 ŞERİT ÇİZİMİNİN TARİFİ (yazmadım — `js/app.js` ve `css/` koordinatörde)

```
KATMAN SIRASI (bugünkü sıra korunur)
  1. devlet-dolgu        app.js:725
  2. himaye-dolgu        YENİ — iç renk = renkler.BOYALAR[hid]
  3. himaye-şerit        YENİ — çizgi katmanı, gövdenin KENDİ sınırı boyunca
  4. vassal-dolgu        app.js:761 (değişmez)

ŞERİT
  renk      Osmanlı doğrudan gövdesinin kırmızısı (tek kaynak: aynı sabit
            okunsun, KOPYALANMASIN — iki yerde duran renk ayrışır)
  kalınlık  ince, 1,5-2 px sabit; zoom ile BÜYÜMESİN — büyürse küçük
            himaye gövdelerinde şerit gövdeyi yutar
  konum     gövdenin İÇİNE doğru; dışa taşarsa komşu devletin rengini örter
  opaklık   tam — şerit bir İDDİADIR, soluk çizilirse kademe okunmaz
⚠️ SINANMASI GEREKEN: Budin/Peşte gibi KÜÇÜK gövdelerde şerit içeriyi
   tamamen kaplayabilir. Kabul ölçütü: 1530 kesitinde Budin gövdesinin
   iç renginin en az %60'ı görünür kalmalı.
```

### 3.5 🔴 İKİ KARARIN BİRBİRİNE ETKİSİ — koordinatörün bilmesi gereken

Emre'nin `3 a` kararı Szapolyai'ye uygulanırsa, **iç renk `macaristan`
(#20d880) olur.** Ama Budin/Peşte'nin **etrafı da** bugün `macaristan` diye
boyanıyor (§1.3'teki 13 nokta).

```
⇒ İKİSİ AYNI RENGE DÜŞER ve enklav GÖRSEL OLARAK KAYBOLUR —
  yani Emre'nin şikâyeti "düzelmiş" görünür.
🔴 AMA ALTINDAKİ KUSUR DURUYOR: künyesi 1526'da biten bir devlet
  hâlâ 68 yıl boyanıyor olacak, sadece artık FARK EDİLMEYECEK.
```
📌 Bu, projenin *"bir kusuru düzeltmek onu görünmez kılmakla aynı şey
değildir"* dersinin yeni bir yüzü. **Öneri: §1.3'teki 13 kayıt, himaye
şeridi devreye girmeden ÖNCE çözülsün** — yoksa çözüm, kusuru saklar.

---

## 4. NE ÖLÇMEDİM — açıkça

1. **Emre'nin himaye listesi.** Elimde yok; kümem kendi taramam.
   Koordinatöre soruldu (M-1268), **cevap gelmedi.**
2. **Tököli'nin (küme 2) kaynak doğrulaması.** `orta-macar-kralligi` slug'ı
   **ölü**; kapsayıcı maddeye gitmedim. Sınıflandırma **veri kaydının kendi
   ifadesine** dayanıyor, TDV'ye değil.
3. **13 `macaristan` noktasının 1526-1541 arası doğru sahibi.** Ölçtüm ki
   yanlış; **doğrusunun ne olduğunu ölçmedim.**
4. **Mekke Şerifliği · Kırım Hanlığı** himaye sayılır mı — bakmadım.
5. **Şerit çiziminin küçük gövdelerdeki davranışı.** Kabul ölçütü önerdim,
   **sınamadım** (arayüz bende değil).
6. **Çıktı geometrisi 23 Ağustos damgalı.** §1.2'deki çakışma ölçümü o
   günün haritasına aittir.
