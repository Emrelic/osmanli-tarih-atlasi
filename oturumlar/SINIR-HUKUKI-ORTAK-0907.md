# SINIR HUKUKİ — ORTAK ŞARTNAME · 7 Eylül 2026

> 🔴 **ALTI KOLUN ALTISI DA BU DOSYAYI OKUR.** Kendi bölgen, dosyan ve
> ad alanın sana ayrıca gönderildi. Buradaki her şey **hepiniz için**
> aynıdır — ve aynı olması işin şartıdır.

---

## ① NİÇİN VAR — Emre'nin üç kademe kararı

Emre 7 Eylül'de haritacılığı **üç kademeye** ayırdı:
```
A  şehir etki alanları toplamı — benekli/enklavlı/koridorlu HAM hâl
B  A'nın rötuşlanmışı — boşluk/enklav/koridor PAYLAŞTIRILMIŞ
C  🆕 modern uluslararası ANTLAŞMALARLA çizilmiş HUKUKÎ sınır
```
**Sen C'yi kuruyorsun.** Ve Emre'nin kararı: **çıpa `1923-10-29`**,
**birim KENAR** (ülke poligonu değil, iki ülkenin paylaştığı sınır
parçası).

🔴 **C BİR GÖRÜNÜM ANAHTARI DEĞİL, BİR ÖRTÜDÜR** — geçiş tarihi harita
başına değil **SINIR BAŞINA** farklıdır. Tam hüküm:
`denetim/HUKUM-UC-KADEME-0907.md`.

---

## ② TEK SORU — işin tamamı buna indirgenir

> **«Bu sınır çizgisi 1923-10-29'dan bugüne DEĞİŞTİ Mİ?»**

```
🟢 DEĞİŞMEDİYSE   Natural Earth'ün BUGÜNKÜ çizgisi 1923 için KULLANILABİLİR
🟡 DEĞİŞTİYSE     1923'ün antlaşma metni ARANIR
🔴 METİN YOKSA    o kenar C'ye GİRMEZ — A/B'de kalır, ve bu BİR SONUÇTUR
```
⚠️ **🔴 bir başarısızlık değildir.** *"Arandı, metin yok"* yazmak,
uydurmaktan kat kat değerlidir (`§4`).

---

## ③ ÖLÇÜLMÜŞ TABAN — devralma, ama YENİDEN ÖLÇME de

Bunları `KADEME-MODEL-0907` ölçtü ve koordinatör kabul etti:
```
🟢 ÖLÇÜLDÜ  veri-kaynak/ne_10m_admin_0_countries.geojson DEPODA
            13 MB · 258 girdi · MultiPolygon · BAĞLANMAMIŞ
🟢 ÖLÇÜLDÜ  kenar paylaşan çift 342 · TAMAMI birebir ortak (%100)
            hat tepesi 69.011 · iki tarafta da olmayan 0
            ⇒ KENAR ÇIKARIMI MEKANİK: tolerans YOK, eşik YOK
🟢 ÖLÇÜLDÜ  değmeyen 838 çiftin hiçbiri topoloji artefaktı DEĞİL
            (Macao enklav · Kıbrıs BM tampon · Batı Sahra)
            ⇒ 342 bir ALT SINIR değil, TAM SAYI
🟢 ÖLÇÜLDÜ  3 ondalık · ardışık tekrarsız ⇒ gövde 1,05 MB (KÜÇÜK)
🔴 ÖLÇÜLDÜ  o dosya BUGÜNÜN sınırları (2020'ler)
            Hatay 1939 · Aouzou 1994 · Cezayir-Fas 1963 …
⚠️ ÖLÇÜLDÜ  258 girdinin HEPSİ DEVLET DEĞİL: Sovereign 185 ·
            Dependency 33 · Country 19 · Indeterminate 12 ·
            Disputed 5 · Lease 2 (Baikonur · Bir Tawil · Siachen ·
            Cyprus U.N. Buffer Zone)
            ⇒ `kimlik-degil` KOVASI ŞART. Yoksa Baikonur'a
              `bulunamadı` yazılır ve o YANLIŞ DAMGA olur.
⚪ ÖLÇÜLEMEDİ `Egypt`in geometrisi GEÇERSİZ (258'in tek geçersizi).
            `KADEME-MODEL-0907` ölçüyor; sonucu gelene kadar Mısır
            kenarlarına dayanan bir sayı YAZMA.
```
🔴 **Ve bir öncül DEVRALINDI, DOĞRULANMADI:** *"bilinen değişimler"*
listesi (Hatay 1939 · Aouzou 1994 · Cezayir-Fas 1963 · 1947 Hindistan ·
1948 Filistin · 1991-93 dağılmalar) **hafızadan yazıldı, kaynağa
sorulmadı.** Başlangıç listesi olarak kullan, **TABAN YAPMA.**

---

## ④ KAYIT BİÇİMİ — İCAT ETME, BU

`denetim/ONERI-KADEME-C-MODEL-0907.md` onaylandı. Alanlar:
```
a, b          kenarın iki ucu — ATLAS KİMLİĞİ, ALFABETİK sıralı
              (kararlı anahtar: aynı kenar hep aynı çifti verir)
f, t          tarih
t_cinsi       "pencere" (atlas ucu — BİR İDDİA DEĞİL) ¦ "gercek"
hal           "hukuki" ¦ "bulunamadi" ¦ "olculemedi"
dayanak       antlaşma adı ¦ madde no
dayanak_t     antlaşmanın tarihi
kaynak        §4 — slug ya da tam künye
gc            geometri: SÜREKLİ çizgi dizisi, 3 ondalık, kaydın İÇİNDE
kimlik_bugun  NE adı → bugünkü atlas kimliği
kimlik_1923   1923-10-29'da o toprağın kimliği
```
🔴 **`hal` alanı ZORUNLU ve üç kovası da GEÇERLİ BİR SONUÇTUR.**
Kaydın hiç yazılmaması = *"okumadım"*. Yazıp `bulunamadi` demek =
*"aradım, yok"*. İkisi **ayrı şeydir** ve sınavı tek soru:
***bunu bir `if` ile sorabiliyor muyum?***
```js
SINIR_HUKUKI.filter(k => k.hal === "bulunamadi")   // "arandı, yok"
// kayıt YOK                                        // "hiç bakılmadı"
```

🔴 **`t_cinsi` NİÇİN VAR:** `1923-10-29` atlasın **pencere ucudur**, bir
tarih iddiası değil. Bu ayrım yapılmadığı için proje bir kez 161 künyeyi
*"gün hassasiyetli ama kaynaksız"* diye saydı; **14'ü** yalnız pencere
ucu taşıdığı için o kümeye girmişti (payda 161 → 147 diye düzeldi).

---

## ⑤ KAYNAK KURALI — `§4`, ve DIŞARI ÇIKINCA NEREYE

```
🟢 KABUL       TDV (İslâm dünyası için BİRİNCİL) · antlaşma METNİ ·
               Cambridge History · Encyclopaedia Iranica · hakemli
               makale · üniversite yayını · birincil kaynak neşri
🔴 KULLANILMAZ forum · blog · içerik çiftliği · kaynaksız derleme ·
               YAPAY ZEKÂ ÜRETİMİ metin · "tarih sayfası" tipi site
🟡 Vikipedi    TEK DAYANAK DEĞİL — yalnız "hangi maddeye bakayım"
```
🔴 **BAĞLAYICI SINAV 🔴 LİSTEDİR**, yeşil liste bir örnek kümesidir.
Kırmızıya girmeyen kurumsal/ansiklopedik kaynak kabul edilir; şartı
**adıyla yazılması.**

⚠️ **Britannica TUZAĞI (7 Eylül'de ölçüldü):** sayfanın *"Quick Summary
… created from Britannica articles using **AI**"* diyeni **🔴
KULLANILMAZ** — imzalı uzman maddesi 🟢 kullanılır. ***Bir kaynağın
güvenilirliği ARTIK SAYFA DÜZEYİNDEDİR, site düzeyinde değil.***

🔴 **TDV ÖLÜ SLUG TUZAĞI:** `302` = ÖLÜ. `200` *"doğru madde"* demek
**değildir** (`ordu` askerî ordudur, şehir maddesi `ordu--sehir`).
Dar slug tutmazsa **kapsayıcı maddeyi** dene, ve **kapsayıcının
BAĞLANTILARINI tara** — o bir slug dizinidir.

🔴 **TAKVİM:** TDV aynı savaş için iki takvim kullanabiliyor ve
söylemiyor. 20. yy'da Rumî, Milâdî'nin **13 gün** gerisindedir. Bir
günü yazmadan önce **çapa sınavı** koş: aynı olayın başka maddedeki
tarihiyle karşılaştır.

🔴 **TARİH UYDURMA.** Kaynak yıl diyorsa yıl yaz. Alan, kaynağın
desteklediği **en kaba güvenli** düzeyi taşır; gerisi metinde durur.

---

## ⑥ DOSYA VE AD ALANI — `§7`

```
🟢 SENİN    denetim/SINIR-HUKUKI-<BOLGE>-0907.json   ← ÇIKTIN
            denetim/ARAC-SINIR-<BOLGE>-*-0907.py|js
            oturumlar/<SENİN ADIN>.md                ← ilerleme notun
🔴 DEĞİL    data/*  ·  arac/*  ·  js/app.js  ·  index.html
            BAŞKA BİR KOLUN dosyası
```
🔒 **KOŞU 8 SÜRÜYOR** (11:17:46 başladı, ~16 saat). `data/` ve
`arac/uret_petek.py · renkler.py · girdi.py` **DONUK** — okumak
serbest, **yazmak koşuyu ÖLDÜRÜR.** Zaten `denetim/`e yazıyorsun.

🔴 **AD ALANI ŞİMDİDEN VERİLİYOR** — birleştirme günü belirsizlik
olmasın diye:
```
data/sinir_hukuki_<bolge>.js  →  window.SINIR_HUKUKI_<BOLGE>
```
📌 *"Ayrı dosya vermek ayrı ad alanı vermek DEĞİLDİR"* (`§7`): bu proje
beş dosyaya tek ad verdi ve **537 kayıt 137'ye düştü**, %74 sessizce
kayboldu. Ad alanın sana ayrıca yazıldı.
⚠️ Ve **`KADEME` kelimesi ad alanında YASAK** — o ad bu projede
yerleşimin idarî kademesi demek (`window.KADEME_YAMA` …). Konuşurken
*"kademe C"* diyoruz, veride `SINIR_HUKUKI`.

---

## ⑦ EŞLEME TABLOSU — TEK YAZAR, ve o SEN DEĞİLSİN

NE'nin adları İngilizce (`Turkey` · `Greece` · `Egypt`), atlasınkiler
Türkçe. **175 kenar ucundan yalnız 6'sı otomatik eşleşiyor.**
```
denetim/ESLEME-NE-KIMLIK-0907.json   ← YAZAN: KADEME-MODEL-0907
SEN                                   ← kendi bölgenin satırlarını
                                        TAHTADAN ona bildirirsin
```
🔴 **O dosyaya YAZMIYORSUN.** İki oturum tek dosyaya yazarsa sessiz
veri kaybı olur. Bulguyu tahtaya yaz, o işlesin.
🟢 Ama **kendi kayıtlarında** `kimlik_bugun` / `kimlik_1923` alanlarını
doldurursun — bölgeni sen biliyorsun.

⚠️ **`kimlik_1923` MEKANİK DOLDURULAMAZ:** `Syria` bugün devlet,
1923'te **Fransız mandası**. Mekanik doldurmak `§3.5`in hayalet devlet
ailesine kendi elinle üye katmaktır.

---

## ⑧ HABERLEŞME — `§7.1`

```
py arac/tahta.py yaz --kim "<SENİN ADIN>" --kime "1.MURAT" --mesaj "..."
```
```
AÇILINCA     "açıldım, brifingi okudum, şu dosyalar bende"
KALEM KALEM  bir iş bitince HEMEN — biriktirme
SORU GELİNCE iş sürerken bile: "iş üstündeyim · şu aşamadayım · ~ne kadar"
BİTİNCE      SAYIYLA. "Bitirdim" değil, "142 → 38, şu 38'i şu sebeple"
```
⚠️ **Kendi pencerene yazmak = hiç cevap vermemek.**
🔴 Kritik mesajı `oturumlar/tahta.json`dan **GERİ OKU** — *"yazıldı"*
cevabı yetmez; tahta bir kez mesaj kaybetti.
🔴 **AKSAKLIK BEKLEMEZ** (`§7.1⑥`): kaynaklar çelişiyorsa · şartname
yanlış çıktıysa · beklenenden ÇOK farklı bir sayı ölçtüysen — **bitmesini
bekleme.**
🟢 **YATAY MESAJ SERBEST** (`§7.1③`): başka bir kola *"bu kenar sende
mi"* diye doğrudan yaz. Şartı **tahtadan geçmesi.**

🟢 **VE BİR ŞEY DAHA, bugün öğrenildi:** bir sevk ya da düzeltme senin
**kendi ölçümünle çelişiyorsa UYGULAMA** — ölç, yaz, bildir. Bugün bir
oturum koordinatörün *"DUR, sayın yanlış"* uyarısına uymadı ve **haklı
çıktı**; uysaydı 50 dönemlik mükerrer iş olacaktı.
⚠️ Şartı: **uymamak SESSİZ OLAMAZ.**

---

## ⑨ ÖNCÜL DAMGASI — her sayının yanında

```
🟢 ÖLÇTÜM      sayı + yöntem
🟡 DEVRALDIM   nereden, ve DOĞRULANMADI diye AÇIKÇA
⚪ ÖLÇMEDİM    bakmadım
🔴 bulunamadi  ARADIM, YOK          ← bir SONUÇ
🔴 olculemedi  aradım, alet cevap veremedi
🔴 okumadim    ARAMADIM BİLE        ← en kolay kaybolan
```
📌 **Yanlış damga hatayı KALICILAŞTIRIR:** `bulunamadı` yazılırsa bir
sonraki oturum o kaydı **bir daha aramaz.**
🔴 Ve bekleyen yaması olan bir sayı **`(disk)`** ya da **`(yamalı)`**
damgası taşır — uygulanmamış bir yama **iki geçerli «şimdi»** yaratır.

---

## ⑩ KABUL ÖLÇÜTÜ — bölgeni BİTİRMEK değil

```
① üç kovanın SAYILARI: 🟢 C'ye girer · 🟡 metin gerekiyor · 🔴 A/B'de kalır
② bakılan KENAR sayısı (payda)
③ `kimlik-degil` kovasına düşenler ADIYLA
④ ölçemediklerin ADIYLA
```
**Hepsini bitirmek ölçüt DEĞİLDİR.** Beş kenarı kaynağıyla kapatmak,
kırkını tahminle doldurmaktan değerlidir.

---

## ⑪ İLERLEME
Kendi `oturumlar/<AD>.md` dosyanı commit edebilirsin — **pathspec
ZORUNLU**:
```bash
git commit -F <mesaj-dosyasi> -- oturumlar/<AD>.md
```
`git add -A` / `git add .` **ASLA** — git index 20+ oturum arasında
paylaşılıyor.
⚠️ **Commit teslim değildir; teslim MESAJDIR.**

🔴 **§11 — KABUK KURALI:** kaçış · Türkçe karakter · backtick bash'ten
**GEÇMEZ.** `sed` · heredoc · `py -c` · `git commit -m` YOK. Metni
`Write` ile dosyaya yaz, `py <yol>` ya da `git commit -F <yol>` ile ver.
Ve dosyayı **kabukta ÜRETME** (`printf` ile bile) — metin `-F`e
ulaşmadan bozulur.
