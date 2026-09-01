# GÜRCİSTAN ÜÇLÜSÜ — `parti-emrelic-0034` H-0011 · H-0017 · H-0023

> Oturum **OPUS HAZIR KITA 106** · 1 Eylül 2026 · şartname M-1903 · koordinatör 1.MURAT
> 🔒 Koşu canlı. `arac/uret_petek.py · girdi.py · renkler.py` **okundu, YAZILMADI.**
> Paylaşılan hiçbir `data/*.js` dosyasına yazılmadı. Bu dosya bir RAPORDUR, yama değildir.

---

## 0. ÜÇ CÜMLEDE

```
H-0017  BAYAT      — şikâyetteki pembe "GÜRCİSTAN" adacığı BUGÜNKÜ VERİDE YOK.
                     1599-06-01'de o kutuda gurcistan dönemi taşıyan SIFIR nokta var.
H-0011  ZATEN-DOĞRU (ayrımı) — "iki parça" bir çizim kusuru DEĞİL, tarihî gerçek.
                     Ama İKİ PARÇANIN DA RENGİ yanlış: 1555 Amasya'dan sonra batı
                     Osmanlı, doğu Safevî nüfuzundaydı; atlas ikisini de BAĞIMSIZ boyuyor.
H-0023  SENİN-KARARIN — Emre'nin sorusunun TDV cevabı NET: Tiflis İRAN'A geçti,
                     Kartli Şah Abbas tarafından HANLIK ilân edildi. Veri onu
                     1606-1801 arası BAĞIMSIZ Gürcistan gösteriyor (195 yıl).
                     Çare bir tasarım kararı gerektiriyor: yabancı tâbiiyet
                     veri modelinde İFADE EDİLEMİYOR.
```

---

## 1. GÖRSELLERİN KÜNYESİ — üçü de alt şeritten okundu

| madde | gün | kutu | ekrandaki madde |
|---|---|---|---|
| H-0011 | **1566-01-01** | 40,90-44,91K / 39,23-47,38D · z6.7 | Edirnekapı (Mihrimah Sultan) Camii'nin tamamlanması |
| H-0017 | **1599-06-01** | 40,51-44,46K / 39,89-45,40D · z6.2 | Ankara sofunun Avrupa'ya yoğun ihracı |
| H-0023 | **1606-01-01** | 36,83-44,56K / 39,66-50,66D · z4.6 | Tiflis ve Gence'nin kaybı |

---

## 2. ① NE ÖLÇTÜM — bugünkü veri, üç günün üçünde

`arac/girdi.py` içe aktarıldı (2624 nokta / 63 dosya), kutular tarandı:

```
H-0011 · 1566-01-01
   OSMANLI-doğrudan 12 · gurcistan 6 · kirim 4 · rusya 1 · imereti 1 · safevi 1 · SAHİPSİZ 1
   gurcistan: Ahıska · Batum · Hulo (Acara) · Sohum   ← BATI parçası
              Tiflis · Zagem (Kaheti)                 ← DOĞU parçası
   imereti  : Kutaisi

H-0017 · 1599-06-01
   OSMANLI-doğrudan 18 · OSMANLI-tâbi 1 (Kutaisi) · kirim 1 · safevi 1 · SAHİPSİZ 1
   🔴 gurcistan dönemi taşıyan nokta: SIFIR

H-0023 · 1606-01-01
   OSMANLI-doğrudan 55 · safevi 34 · kirim 2 · OSMANLI-tâbi 2 · gurcistan 2 · …
   gurcistan: Tiflis · Zagem (Kaheti)
```

**Dönem zincirleri (bugünkü veri):**
```
Kutaisi  v: 1578-08-09 → 1810-02-20        s: gurcistan 1281→1490 · imereti 1490→1810 · rusya 1810→
Tiflis   d: 1578-08-09 → 1606-01-01 · d: 1723-06-15 → 1735-06-19
         s: gurcistan 1281-01-01 → 1801-09-12 · rusya 1801-09-12 →
Zagem    v: 1578-08-09 → 1606-01-01        s: gurcistan 1281-01-01 → 1801-09-12
Ahıska   d: 1578-08-01 → 1829-09-14        s: gurcistan 1281 → 1578-08-01
Batum    d: 1578-08-09 → 1878-07-13        Sohum d: 1578-08-09 → 1810-07-11
```

---

## 3. ② KAYNAK — TDV, gövdesi okundu

`islamansiklopedisi.org.tr/gurcistan` ve `/tiflis` (ikisi de **canlı**, içerik okundu):

```
1490      "Gürcistan üç krallığa (Kartliya, Kahetya, İmeretiya) ve beş beyliğe ayrıldı"
1555      Amasya: "İmeret, Dadyan (Megrel ve Svanet), Güryel, Daveli/Tao-eli
          OSMANLI Devleti'ne; Kartli, Kahet ve Mosuk ise SAFEVÎ Devleti'ne veriliyordu"
1578-08-24 "Lala Mustafa Paşa … 24 Ağustos'ta Tiflis şehrini savaşsız ele geçirdiler"
1590      "1590 antlaşmasına göre … Gürcistan Osmanlı idaresine geçti"
1603      `tiflis`: "1603'te Tiflis Şah Abbas'ın eline geçti"
          `gurcistan`: "1603'te Şah I. Abbas Tiflis şehrini Osmanlılar'dan geri alıp
                        KARTLİ'Yİ HANLIK OLARAK İLÂN ETTİ"
1606-1616 `tiflis`: Kartli Kralı X. Georgi'nin ölümüyle yerine "Şah Abbas tarafından
          II. Laursab getirildi (1606-1616)"
1801-09-12 "Rus Çarı I. Pavel … 12 Eylül 1801 tarihli emirle Rusya'nın bir eyaleti ilân"
```

---

## 4. H-0017 — **BAYAT**, ve iki yönden birden

Emre 1599 ekranında Kutaisi çevresinde açık pembe bir **GÜRCİSTAN adacığı** görüp
*"bu tarihte bu şekilde yaşayan müstakil bir Gürcistan var mı, hata mı"* diye sordu.

```
ÖLÇÜM   bugünkü veride o kutuda gurcistan dönemi taşıyan nokta: 0
        Kutaisi 1578-08-09'dan itibaren OSMANLI-TÂBİ (v:), kimliği `imereti`
ÇIKARIM (ayrı satır) şikâyetin gösterdiği gövde bugünkü veriyle ÜRETİLEMEZ.
```

Düzeltmeyi yapan **KAFKAS KRONOLOJİ** oturumu (20 Ağustos, tahta M-0900 civarı):
*"Kutaisi `gurcistan` → `imereti` (1490'dan) + Osmanlı TÂBİİYETİ"* — ve aynı raporda
Kutaisi'nin **8,4 yıllık ikinci hayaletini** de kapattığını yazıyor
(eski kayıt `gurcistan`ı 1810'a taşıyordu, künye 1801'de bitiyor).

Ve **tarih de** Emre'yi doğruluyor: TDV'ye göre 1590 antlaşmasından sonra
Gürcistan Osmanlı idaresindedir ⇒ 1599'da müstakil bir Gürcistan **yoktu**.
Bugünkü veri bunu doğru gösteriyor (kutudaki 18 nokta doğrudan Osmanlı).

⚠️ **Ölçmediğim:** şikâyetin hangi yayından olduğunu görselden **doğrulayamadım** —
H-0017 görselinde kronoloji paneli (`N / TOPLAM başlık`) kırpılmış. Bayatlık hükmü
görselin tarihine değil, **bugünkü verinin o gövdeyi üretememesine** dayanıyor.

---

## 5. H-0011 — ayrım **GERÇEK**, ama iki parçanın da **RENGİ** yanlış

Emre: *"bu Gürcistan böyle iki parça görünüyor normal mi… iki bölge arasında bir
koridor yol geçiş var ise bu koridor Gürcistan hâkimiyetinde görünmeli… yoksa kopuk
ise onu da araştır söyle."*

### 5.1 Kopukluğun sebebi ölçüldü — 1551 Osmanlı kaması
1566'da iki pembe gövdenin arasına giren doğrudan Osmanlı toprağı, **`1551-01-01`
tarihli dokuz kaydın** ta kendisi:
```
Ahılkelek (41,40 · 43,48)  Ardahan  Artvin  Borçka  Hanak  Hopa  Posof  Sarp  Şavşat
```
Ahılkelek tam olarak Ahıska (42,99°D) ile Tiflis (44,78°D) arasında oturuyor ⇒
batı gövdesi (Ahıska·Batum·Hulo·Sohum + Kutaisi) ile doğu gövdesi (Tiflis·Zagem)
**birbirine değmiyor.**

### 5.2 🟢 KOPUKLUK TARİHÎ OLARAK DOĞRU — koridor ARANMAMALI
TDV'ye göre 1555 Amasya Antlaşması Gürcistan'ı **iki imparatorluğun nüfuz alanına
böldü**: İmeret/Megrel/Güryel/Tao → Osmanlı, Kartli/Kahet/Mosuk → Safevî.
⇒ 1566'da batı ile doğuyu birleştiren **Gürcü hâkimiyetinde bir koridor YOKTU**;
iki yarı **ayrı devletlerin** nüfuzundaydı. Emre'nin ikinci şıkkı geçerli:
*"yoksa kopuk ise onu da araştır söyle"* — **kopuk, ve kopukluk gerçek.**

### 5.3 🔴 AMA ASIL KUSUR BAŞKA YERDE — ve şikâyetin sorduğu yer değil
```
1566'da atlasın gösterdiği          TDV'nin söylediği (Amasya 1555)
──────────────────────────────      ────────────────────────────────
Ahıska·Batum·Hulo·Sohum BAĞIMSIZ    Osmanlı nüfuz alanı
Kutaisi (imereti)       BAĞIMSIZ    Osmanlı'ya VERİLDİ
Tiflis·Zagem            BAĞIMSIZ    Safevî'ye VERİLDİ
```
Yani **iki parça da bağımsız boyanıyor**, oysa 1555'ten beri ikisi de birer
imparatorluğun nüfuzunda. Bu, H-0023'ün kökünün 40 yıl daha erken hâli.

📌 Ve bir **kayıt tutarsızlığı**: KAFKAS KRONOLOJİ 20 Ağustos raporunda Kutaisi için
*"Osmanlı TÂBİİYETİ **1555-07-23** (TDV: Amasya Antlaşması'na göre (1555) İmeret …
Osmanlı Devleti'ne … veriliyordu)"* diyor. **Bugünkü veride Kutaisi'nin `v:`si
1578-08-09'dan başlıyor** — yani 23 yıl geç. Yamanın o ayağının uygulanıp
uygulanmadığını **ölçmedim**; yalnız bugünkü değeri ölçtüm ve raporla ayrıştığını
gösteriyorum.

---

## 6. H-0023 — Emre'nin sorusunun cevabı: **İRAN'A**

Emre: *"Tiflis ve Gence'nin kaybı sonrası Gürcistan Krallığı şeklinde görünüyor…
buralar Gürcistan mı yoksa İran'a mı ait oldu Osmanlı'dan geri alınınca?"*

### 6.1 CEVAP — TDV iki maddede birden söylüyor
> `gurcistan`: *"1603'te Şah I. Abbas Tiflis şehrini Osmanlılar'dan geri alıp
> **Kartli'yi hanlık olarak ilân etti**."*
> `tiflis`: Kartli Kralı X. Georgi'nin ölümüyle yerine **"Şah Abbas tarafından
> II. Laursab getirildi (1606-1616)"**.

⇒ **Bağımsız bir Gürcistan Krallığı DEĞİL.** Kartli bir **Safevî hanlığı**dır;
kralını şah atar. Yani cevap Emre'nin ikinci şıkkı: **İran'a ait oldu** — ama
"ilhak" anlamında değil, **tâbiiyet** anlamında (Gürcü hânedanı yerinde kalır).

### 6.2 🔴 VERİDEKİ KUSUR — 195 yıl bağımsız görünüyor
```
Tiflis   s: gurcistan 1281-01-01 → 1801-09-12   (d: 1578-08-09 → 1606-01-01 Osmanlı)
Zagem    s: gurcistan 1281-01-01 → 1801-09-12   (v: 1578-08-09 → 1606-01-01)
⇒ 1606-01-01'den 1801-09-12'ye kadar İKİSİ DE "gurcistan" = BAĞIMSIZ boyanıyor
   195,7 yıl · ve bu sürenin tamamı TDV'ye göre Safevî/Afşar/Kaçar tâbiiyeti
   (1723-1735 arası Osmanlı işgali veride ZATEN var — o kısım doğru)
```

### 6.3 🔴 VE ÇARESİ TEK BAŞINA YAZILAMAZ — model boşluğu
`VERI-YAPISI.md`: `v:` **yalnız Osmanlı tâbiiyetini** ifade eder (kayıtta devlet
kimliği yoktur, yalnız açıklama alanı `k:`). **Yabancı bir devletin vasalı** diye
bir hâl veri modelinde **yok.** Üç seçenek var, üçü de tasarım kararı:
```
(a) s:"safevi" yaz          → renk Safevî olur, GÜRCİSTAN kimliği EKRANDAN SİLİNİR
                              (Emre'nin gördüğü ad kaybolur — bilgi kaybı)
(b) kartli · kaheti künyesi → alt-künyeler açılır, tâbiiyet yine ifade edilemez
    aç ve gurcistan'ı böl      ama en azından "Gürcistan Krallığı" yanılgısı biter
(c) yabancı tâbiiyet alanı  → `s:[{d:"gurcistan", tabi:"safevi"}]` gibi bir alan
    ŞEMAYA EKLENSİN            + motorda açık ton; EN DOĞRUSU, EN PAHALISI
                              📌 Osmanlı için zaten var olan ayrımın (koyu/açık)
                                 yabancı devletlere genelleştirilmesi
```
🔴 **Kararı vermiyorum** — `CLAUDE.md §7`: şema değişikliği ve `devletler.js`
künye bölme benim dosyam değil. Ama ölçümü yaptım ve seçenekleri gerekçesiyle
ayırdım; hangisinin seçileceği koordinatörün.

### 6.4 🟡 YAN BULGU — Tiflis'in kayıp günü ÜÇ AYRI YERDE ÜÇ AYRI GÜN
```
data/yerlesimler…  Tiflis d: … → 1606-01-01
data/olaylar_ek6.js            1606-01-01  "Tiflis ve Gence'nin kaybı"
data/kronoloji_gurcistan.js    1603-10-21  "Tiflis'in Şah Abbas tarafından geri alınması"
TDV `tiflis`                   "1603'te Tiflis Şah Abbas'ın eline geçti"
```
⇒ TDV **1603** diyor; harita **1606-01-01**'de bırakıyor ⇒ **~2,2 yıl geç.**
📌 Ve `1603-10-21` bu külliyatta **zaten bir kırılma günü**: `yer_yama_iran.js`
onu *"Şah Abbas'ın karşı taarruzu — Tebriz'in kaybı"* maddesine ±0 günle bağlıyor.
Yani düzeltme **yeni gün doğurmaz.**

⚠️ **YAZMADIM.** Sebebi tek başına doğruluk değil, **muhasebe**: 1606-01-01'de
Zagem'in `v:`si de bitiyor ve o gün `olaylar_ek6.js` maddesinin kırılmasıdır.
Tiflis'i 1603'e çekmek Değişmez 2'nin iki ucunu birden oynatır (bir gün kırılma
kaybeder, bir gün kazanır) ve iki uç da **aynı anda** ölçülmelidir (`§3.5.1`).
Koordinatör isterse tek turda yaparım; kabul ölçütü: `denetle.py` `2` ve `2t`
sayıları DEĞİŞMEMELİ.

---

## 7. TESLİM

```
H-0017   bayat          (ölçüm: 1599'da kutuda gurcistan noktası 0)
H-0011   zaten-dogru    (kopukluk gerçek; koridor aranmamalı — 1555 Amasya)
         + AÇILAN YENİ BULGU: iki parçanın da rengi bağımsız, oysa ikisi de
           nüfuz altındaydı ⇒ H-0023'ün kökünün 1566'daki hâli
H-0023   senin-kararin  (cevap: İRAN'A — Kartli hanlık; kusur 195 yıl;
                         çare üç şıktan biri, şema kararı)
```
