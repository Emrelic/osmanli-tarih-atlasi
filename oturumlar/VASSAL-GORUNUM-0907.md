# VASSAL GÖRÜNÜM — 0907

| alan | değer |
|---|---|
| **AD** | VASSAL-GORUNUM-0907 |
| **MODEL** | Opus |
| **DİZİN** | `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ` |
| **ClaudEmre** | çalıştırma |

---

## ① İŞİN ÖZÜ — bugün ölçülmüş bir BOŞLUĞU kapatıyorsun

Emre'nin **tâbi devlet görünümü** isteği bir yıldır açık. Bugün niçin
açık kaldığı ölçüldü, ve sebep veri değil **gösterim yolu**:

```
v: dönemleri     429 · statu 421 · kid 291 · k 373
uret_petek.py    `vl` çapası ÜRETİYOR (k · statu · nokta) — 4826/4844
js/app.js        `v:` dönem `statu`sunu ve `kid`ini HİÇ OKUMUYOR
denetle.py       HİÇ OKUMUYOR
```
🔴 ⇒ **Alan var, dolu, geçerli — ve okuyan yok.** `CLAUDE.md §11`in
*"bir ders veriye SERBEST METİN olarak inerse inmiş sayılmaz"*
dersinin **alan** yüzü: `grep` *"var"* der, motor *"yok"* der.

**Senin işin:** `js/app.js`te o okuma yolunu **yazmak ve SINAMAK.**

---

## ② 🔴 EN ÖNEMLİ KISIT — VERİ HENÜZ YOK, ve bu bir ENGEL DEĞİL

```
`vl` çapası bugün SABAH `uret_petek.py`ye yazıldı
KOŞU 8 onu ŞU AN üretiyor (11:17'de başladı, ~16 saat)
⇒ bugünkü `data/donemler.js`te `vl` YOK. Koşu 8'inkinde OLACAK.
```
⇒ **Kodu ŞİMDİ yaz, SENTETİK bir fikstürle sına, YAYINLAMA.**
Koşu inince gerçek veriyle bir kez daha koşulur ve yayına girer.

📌 Ve bu tam olarak `C13`ün **ATEŞLEME** ayağıdır: gerçek veride o
durum yoksa dal **zorlanarak** sınanır. Bu proje bugün o disiplinin
değerini ölçtü — bir `instanceof` kusuru **yalnız zorlanmış fikstürde**
göründü, gerçek veri onu asla gösteremezdi.

🔴 **Fikstürün gerçek şemayı taşımalı, TAHMİN ETTİĞİNİ değil.**
`uret_petek.py:4826-4850` aralığını **oku** ve `vl`in tam biçimini
oradan al. Kayıt biçimini hatırlamaya çalışmak, bu projede yedi kez
ısırdı.

---

## ③ NE YAPILACAK

```
① `uret_petek.py`nin `vl` çapasını OKU — alanları, tipleri, ne zaman
   yazılıp ne zaman yazılmadığı (`_dn is None` dalı var)
② `js/app.js`te tâbi gövdenin etiketini `vl`den KUR
③ `statu` değerini göster — bugün TEK DEĞER var (`vassal` 421) ama
   sözlük genişleyecek; kodun **bilinmeyen bir değeri** gördüğünde
   ÇÖKMEMESİ ve SESSİZCE YUTMAMASI gerekiyor: bilinmeyen değer
   GÖRÜNÜR biçimde ele alınır
④ C13 DÖRT AYAK — hepsi koşulur:
      GEÇME      `vl` yokken (BUGÜNKÜ veri) sayfa NORMAL açılıyor mu
      ATEŞLEME   sentetik `vl` ile etiket ÇIKIYOR mu · her dal ayrı
      GİRDİ      gerçek `donemler.js`ten okuma yolu koşuldu mu
      ÇIKTI      aletin cevabını DOĞRU YERDEN okuduğunu göster
```

🔴 **GEÇME AYAĞI BU KALEMDE EN ÖNEMLİSİ:** bugünkü `donemler.js`te
`vl` **yok**, ve senin kodun bugün canlı yayında koşacak. `vl`
yokluğunda sayfa **açılmaya devam etmeli.** Bu proje bir kez
`duygu:"notr"` yüzünden siteyi **tamamen ölü** yayınladı ve
`denetle.py` TEMİZ diyordu.

---

## ④ DOSYALARIN — ve komşun

```
🟢 SENİN         js/app.js · css/style.css
                 denetim/SINAV-VASSAL-GORUNUM-0907.* · _fikstur/
                 oturumlar/VASSAL-GORUNUM-0907.md
🔴 SENİN DEĞİL   data/* · arac/* · index.html
```
⚠️ **`index.html` `GECIS-SURE-0907`de** (geometri `fetch`+JSON diff'i,
onaylandı, inişi koşu 8'e kilitli). Ona dokunma; kesişme sezersen
**tahtadan doğrudan yaz** (`§7.1③` yatay mesaj serbest).
🔒 `data/` ve `arac/uret_petek.py · renkler.py · girdi.py` **DONUK** —
**okumak serbest**, yazmak koşuyu ÖLDÜRÜR.

**Ad alanı:** `window.<AD>` gerektirmiyor.

---

## ⑤ ÖNCÜL DAMGALARI
```
🟢 ÖLÇTÜM      js/app.js `v:` dönem `statu`sunu okumuyor
               (`statu_dogrudan`/`statu_vasal` KRONOLOJİ alanlarıdır,
                BAŞKA ŞEY — karıştırma)
🟢 ÖLÇTÜM      v: 429 dönem · statu 421 · kid 291 · k 373
🟢 ÖLÇTÜM      bugünkü donemler.js'te `vl` YOK
🟡 DEVRALDIM   `uret_petek.py:4826` ve `:4844` satır numaraları —
               başka bir oturumdan, DOĞRULAMADIM. Dosyayı kendin aç.
⚪ ÖLÇMEDİM    `vl` çapasının koşu 8 çıktısında GERÇEKTEN üretilip
               üretilmeyeceği — koşu bitmeden bilinemez
```

---

## ⑥ HABERLEŞME
```
py arac/tahta.py yaz --kim "VASSAL-GORUNUM-0907" --kime "1.MURAT" --mesaj "..."
```
Açılınca · kalem kalem · soru gelince **hemen** · bitince **sayıyla.**
🔴 Kritik mesajı `oturumlar/tahta.json`dan **geri oku** (`§7.1⑤b`).
🔴 **Aksaklık beklemez** (`§7.1⑥`).
⚠️ **Kendi pencerene yazmak = hiç cevap vermemek.**

🟢 **VE BİR ŞEY DAHA — bugün öğrenildi:** bir sevk ya da düzeltme senin
**kendi ölçümünle çelişiyorsa UYGULAMA** — ölç, yaz, bildir. Bugün bir
oturum koordinatörün *"DUR, sayın yanlış"* uyarısına uymadı ve **haklı
çıktı** (uysaydı 50 dönemlik mükerrer iş olurdu).
⚠️ Şartı: **uymamak SESSİZ OLAMAZ.**

---

## ⑦ KABUL ÖLÇÜTÜ
```
① GEÇME ayağı: `vl` YOKKEN sayfa normal açılıyor — KANITIYLA
② ATEŞLEME: sentetik fikstürle etiket çıkıyor — her dal AYRI
③ bilinmeyen `statu` değeri: ne çöküyor ne SESSİZCE yutuluyor
④ YAYINLANMADI — koşu 8 bitmeden yayına girmez
```
⚠️ *"Kod yazıldı"* kabul ölçütü **değildir**; *"sınandı"* ölçüttür. Bu
proje o farkı defalarca ölçtü.

---

## ⑧ İLERLEME
Bu dosyanın altına yaz. Kendi dosyanı commit edebilirsin — **pathspec
ZORUNLU**, `git add -A` / `git add .` **ASLA** (git index 20+ oturum
arasında paylaşılıyor).
⚠️ Commit teslim değildir; **teslim mesajdır.**

---

## İLERLEME NOTLARI

### TUR 1 — 7 Eylül 2026 · KOD YAZILDI VE SINANDI · YAYINLANMADI

#### ⓪ ŞARTNAMEDEN DEVRALINAN İKİ SATIR NUMARASI ÇÜRÜDÜ
`⑤`teki 🟡 DEVRALDIM damgası haklıydı; dosyayı açtım:
```
devralınan   uret_petek.py:4826 · :4844
ÖLÇÜLEN      :4802 (yorum başlığı) · :4847 (kayit["vl"] = _vl)
grep -n '"vl"' arac/uret_petek.py  →  TEK sonuç: 4847
```
Blok aynı blok, hüküm değişmiyor — **sapma 24 ve 3 satır.** Damga işini
yaptı: numaraya güvenmedim, dosyayı açtım.

#### ① ŞEMA — çapadan OKUNDU, hatırlanmadı
```
kayit.vl = [ {k:<görünen ad>, s:<statü>, p:[lon,lat]} ]  · sorted
k = _dn.k || _dn.kid   ·   s = _dn.statu || "vassal"
p = grubun EN BÜYÜK peteğinin representative_point()'i, 4 ondalık
vl boşsa ANAHTAR HİÇ YAZILMAZ · `v:` dönemi olmayan tâbi indeks çapa ÜRETMEZ
```

#### ② ŞEMADAN ÇIKAN KISIT — PUNTO VERİDEN TÜRETİLEMİYOR (bugün)
`vl` **alan taşımıyor.** Devlet puntosu `halkaAlan`dan, bölge puntosu
`b.ec.alan`dan türüyor — ikisi de ölçülmüş bantlar (`§33`). Tâbi tarafta o
sürücü yok: `d.v` bütün tâbi toprağı TEK union olarak taşıyor ve kimlik
`unary_union` içinde kayboluyor (çapanın var olma sebebi bu).
⇒ `VASSAL_PUNTO = 11` **SABİT** ve bu bir **SEÇİM**, ölçüm değil — koda
öyle yazıldı. Union'ın alanını bir ada atfetmek ölçüm değil **yanlış bir
iddia** olurdu ve ondan türetilen punto *"veriden türedi"* diye okunurdu.
🔜 **BORÇ (motor kolunun kalemi, `arac/` bu oturumda DONUK):** `vl` öğesine
çapa peteğinin alanı eklenirse (`_al`, `uret_petek.py:4830`da **zaten
hesaplı**) punto veriden türer ve bu sabit düşer.

#### ③ KOD YAZMADAN ÖNCE BULUNAN ESKİ RİSK — VE ÖLÇÜLDÜ
`devletGuncelle()` `if (imza === devletImza) return;` ile erken çıkıyor ve
`etiketleriYerlestir()` **o dalda hiç çağrılmıyor**. İmza yalnız YABANCI
gövdeleri özetliyordu; tâbi etiketleri ise **Osmanlı döneminin** alanı.
⇒ İmzaya `|dn:<aktifDonem>` eklendi. **Ve etkisi varsayılmadı, ölçüldü** —
aletin kendi ürettiği `devletImza` okunup önekine ayrıldı (taklit alet
kurulmadı):
```
örneklem: dönem 120-179 ve 300-329 · 87 geçiş
ESKİ KODDA ETİKET YERLEŞİMİ ATLANIRDI: 1   (geçiş 132→133)
```
⚠️ **Bu bir örneklem** (87 / 523 geçiş), tamamı değil. Oran ~%1,1: risk
**gerçek ama seyrek** — yani ortaya çıksaydı *"bazen tâbi adları eskide
kalıyor"* diye, tekrarlanamayan bir şikâyet olarak gelirdi.

#### ④ BİLİNMEYEN STATÜ — İKİ KANAL, ve ikisi de ölçüldü
Sözlük **tanımlandığı yerden** alındı (`arac/girdi.py:940`), kullanıldığı
yerden değil. Bugün veride tek değer var (`vassal` 421); öteki beş terim
(özerk · himaye · haraçgüzâr · ocaklık · voyvodalık) tanımın kendi metninden
ve kodda **"ÖLÇÜLMEDİ, tahmin edilen anahtar"** diye damgalı duruyor.
```
EKRAN    ham değer yazılır + `vassal-etiket-bilinmeyen` sınıfı (noktalı alt çizgi)
KONSOL   değer başına BİR uyarı, sözlüğün ve tanımın ADRESİYLE
```

#### ⑤ C13 — DÖRT AYAK · `denetim/SINAV-VASSAL-GORUNUM-0907.js` · **18/18 GEÇTİ**
```
KAPI       visibilityState "visible" ŞART — gizli sekmede her ölçüm "YOK" der
           ve o "yok" bir sonuç değil ARTEFAKTTIR. Sınav bunu kendi kapısında
           sorar ve gizliyse `OLCULEMEDI` döner, "temiz" DEMEZ.
GEÇME      `vl` YOKKEN: vassal etiketi 0 · devlet 27 · bölge 1 · katman 39 ·
           konsol hatası 0 · 524/524 kayıtta `vl` alanı DİZİ
           ve 6 ayrı yıla atlandı (1400·1500·1600·1700·1800·1900) — hepsinde 0
ATEŞLEME   13 dal, her biri AYRI: bilinen statü · statüsüz (varsayılan) ·
           sözlükteki ikinci terim · bilinmeyen (ham + sınıf + BİR uyarı) ·
           aynı değer ikinci kez ÖTMÜYOR · üç bozuk çapa (k yok / p yok /
           p sayı değil) ÜÇÜ DE bildirildi · görüş alanı dışı elendi ·
           aynı noktadaki iki çapadan biri elendi · 40 tâbi çapası devlet
           etiketlerini İTMEDİ (27 → 27)
GİRDİ      Fikstür enjekte edildi ama **taşıyıcı gerçek**: `donemler` dizisi
           tarayıcının `data/donemler.js`ten yüklediği 524 gerçek kayıt.
           Node tarafında da ölçüldü: `vl` taşıyan kayıt **0**, `v:` taşıyan 468.
ÇIKTI      Sınav **KALABİLDİĞİNİ gösterdi** (aşağı bak) + KONTROL satırı:
           fikstür kaldırılınca vassal 0'a, devlet 27'ye döndü, `vl` alanı
           geri kondu. Kontrol olmasaydı sayılar bir yan etkiden de gelebilirdi.
```

#### ⑥ 🔴 SINAV İLK KOŞUSUNDA **KALDI** — ve sebebi ölçüldü, varsayılmadı
```
ilk koşu   KALDI — 3 dal (① dört çapa · ⑤ ham değer ekranda · ⑥ ayrı sınıf)
tanı       fikstürün bilinmeyen statüsü `"sinav-statu-"+Date.now()` idi
           ⇒ etiket 42 karakter ⇒ ~233 px kutu, tuval 819 px
KONTROL    aynı çapa TEK BAŞINA da yerleşmedi (öteki fikstür çapalarıyla
           çakışma DEĞİL) · KISA değerle AYNI NOKTADA yerleşti
⇒ Kod doğru çalışıyordu, ÇAKIŞMA ELEMESİ doğru çalışıyordu; geniş olan FİKSTÜRDÜ.
```
🟢 **Ve bu, iki kanallı tasarımın değerini ölçtü:** etiket elendiği o koşuda
bile `console.warn` ötüyordu (dal ⑦ orada da GEÇTİ) ⇒ bilinmeyen bir statü
**hiçbir hâlde sessiz kalmıyor.** Tek kanal olsaydı bu koşu *"statü sessizce
yutuldu"* demek olurdu.
📌 Ve `CLAUDE.md`nin *"bir denetim iki yönde de sınanmadan çalışıyor
sayılmaz"* dersinin canlı hâli: **ateşleme dalı bir kusur buldurdu** —
bu sefer kusur fikstürdeydi, ama sınavın gerçekten kalabildiğini gösterdi.

#### ⑦ CSS EKRANDAN ÖLÇÜLDÜ — beyandan değil
`getComputedStyle` ile, 5 etiket üzerinde:
```
11px · 600 · rgba(94,20,34,0.92) · pointer-events none · beyaz hâle
statü eki 9,02px · opacity 0,72
BİLİNMEYEN olanın eki: border-bottom **dotted 1px** · opacity 0,9
```
🟢 **Ve görsel fikstürde kazara bir kanıt çıktı:** `"haracgüzar"` yazdım
(sözlükteki `"haraçgüzâr"` DEĞİL — ç ve â eksik). Kod onu **bilinmeyen**
saydı, ham hâliyle yazdı, noktalı çizgiyle işaretledi ve konsola düştü.
⇒ `CLAUDE.md §4`ün Türkçe yazım ekseni bu alanı da bekliyor, ve gösterim
katmanı ona **sessiz kalmıyor.**

#### ⑧ ÖLÇEMEDİKLERİM — açıkça
```
⚪ EKRAN GÖRÜNTÜSÜ ALINAMADI — `screenshot` beş denemede de
   "page did not finish rendering" ile zaman aşımına uğradı (harita sürekli
   çiziyor). `ölçülemedi` diye yazıyorum; kanıt DOM ve computed-style
   ölçümlerinde, ve onlar ekran görüntüsünden GÜÇLÜ (metin, sınıf ve
   hesaplanmış renk tek tek okundu).
⚪ GERÇEK `vl` VERİSİYLE KOŞULMADI — koşu 8 bitmeden imkânsız. Sınav bunu
   kendi çıktısında yazıyor: *"BUGUN 0 — koşu 8 inince BU SAYI ARTMALI ve
   sınav TEKRAR koşulmalı."*
⚪ PUNTO 11'in İYİ OLUP OLMADIĞI — ölçülmedi, seçildi (bkz. ②).
⚪ ZOOM KAPISI KONULMADI: bölge etiketinin `BOLGE_ZOOM 5.2`si gibi bir eşik
   YOK. Uydurmamak için konmadı; görüş alanı kırpması ve çakışma elemesi
   (ikisi de ÖLÇÜLMÜŞ mekanizmalar) yeterli sayıldı. Gerçek `vl` inince
   dünya görünümünde kalabalık ölçülmeli — o zaman eşik VERİDEN konur.
```

#### ⑨ YOL ÜSTÜNDE BULUNAN, DOKUNMADIĞIM İKİ ŞEY
```
🟡 `.bolge-etiket` `pointer-events:none` ama `js/app.js` ona `title` yazıyor
   ⇒ o ipucu HİÇ görünmüyor. Ölü bir vaat. Benim kalemim değil, DOKUNMADIM;
   tâbi etiketinde aynı hataya düşmemek için `title` KASTEN yazılmadı.
🟡 Şartname "462 dönem" diyor; bugünkü `data/donemler.js` **524** kayıt
   taşıyor (koşu 4'ün çıktısı). Sayı bir sonraki sevke taşınmadan tazelensin.
```

#### ⑩ DOSYA DURUMU
```
YAZILDI, COMMIT EDİLMEDİ   js/app.js · css/style.css ·
                           denetim/SINAV-VASSAL-GORUNUM-0907.js
COMMIT EDİLDİ (pathspec)   oturumlar/VASSAL-GORUNUM-0907.md
YAYIN                      YOK — sürüm damgası YÜKSELTİLMEDİ, push YOK
```
⚠️ `CLAUDE.md §7` commit istisnasını **yalnız `oturumlar/` altındaki kendi
dosyasına** veriyor ve `js/`yi adıyla Oturum 0'a bırakıyor; şartnamenin ⑧'i
*"kendi dosyanı"* diyor. İkisini birden okuyup **dar olanı** uyguladım.
Çelişkiyi sessizce çözmedim, koordinatöre bildirdim.
