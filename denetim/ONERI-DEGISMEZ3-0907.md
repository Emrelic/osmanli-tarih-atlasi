# DEĞİŞMEZ 3 — ÖNERİLER · 7 Eylül 2026 · `DEGISMEZ3-0907`

> Dayanak: `OLCUM-DEGISMEZ3-0907.md`. **Hiçbiri uygulanmadı** — `data/` ve
> `arac/` koşu 8'de donuk, ve bunlar şema kararı. Sıra: **ucuzdan pahalıya**,
> ve ilk üçü **hiç tarih araştırması gerektirmiyor**.

---

## Ö1 · BAYAT BELGE SATIRI — ücretsiz, ve bekletilmemeli
`VERI-YAPISI.md:160` `kd:`yi **"🔜 Planlanan alanlar (henüz yok)"** altında
gösteriyor. Gerçek: `girdi.kd_oku()`+`kd_gun()` canlı · `kd`
`BILINEN_ALANLAR`da · veride **192 kayıt**.

**Çare:** satırı planlanandan **canlı şemaya** taşı, yanına iki not:
*"okuyucu 2 Eylül'de indi; `kd:` yoksa `k:`/`m:`den türetilir"* ve
*"`m:` zamanlı hâli yalnız 4 kayıtta."*

🔴 **Niçin bekletilmemeli:** bu satıra bakan bir oturum **var olan bir alanı
yeniden tasarlar** — `sinif:` ↔ `kd:` vakasının birebir tekrarı, ve o vaka
bir turu yakmıştı. **Kalem sende (kök `*.md`).**

---

## Ö2 · DENETİMİN KENDİSİ — borcu OLDUĞUNDAN KÜÇÜK gösteriyor
```
denetle.degismez3 bugün      493 yerleşim-tarih çifti (6 kesit)
tam tarama                   690 benzersiz çift · 2531 aralık
örneklemin HİÇ GÖRMEDİĞİ     436 çift  (%63)
```
**Çare (üç kalem, `arac/denetle.py`):**
1. `degismez3`i **olay-noktası** taramasına çevir. Yöntem
   `ARAC-DEGISMEZ3-TAM-0907.py`de çalışıyor ve **denklik sınavı** taşıyor
   (6 kesite daraltınca bugünkü sayıyı birebir üretiyor) — yani geçişte
   sessiz bir kayma olmadığı **gösterilebilir**.
2. **Kör noktayı BAS:** `if not m: continue` dalı bugün sessiz. Sayısı
   raporlansın — 4 kayıt *"temiz"* değil **"bakılmadı"**.
3. `degismez3z`in *"gerçek kd: 192"* satırı **yanıltıcı**; borcun ödenen
   kısmı `m:` değişen kayıt sayısıdır (**4**). İkisi de bassın.

⚠️ Tavan/eşik önermiyorum: 493'ten 690'a geçiş bir **gerileme değil ölçüm
değişikliği**, ve yeni tabanın tavanı bu oturumun kalemi değil.

---

## Ö3 · ① ANAKRONİK KOVA (372 çift, %52) — **araştırma GEREKTİRMİYOR**
Vaka: `Çehrin  m:"Kamaniçe"` — Kamaniçe **1672-08-27**'de Osmanlı oldu; veri
Çehrin'i **1281'den beri** ona bağlıyor. 391 yıl boyunca "Kamaniçe sancağı"
diye bir şey **yoktu**.

🟢 **Çare bir iddia YAZMAK değil, bir iddiayı GERİ ÇEKMEK:**
```js
kd:[{f:"1281-01-01", t:"1672-08-27", k:<mevcut>, m:null},
    {f:"1672-08-27", t:"1923-10-29", k:<mevcut>, m:"Kamaniçe"}]
```
Bugünkü `m:"Kamaniçe"` 1281 için **kaynaksız bir iddiadır**; `m:null` onu
geri çeker. `§4`: *bilmediğini bilgi diye yazma.*

📌 **Ve kırılma günü zaten veride** (merkezin ilk `d:`/`v:` günü) ⇒ bu kova
**mekanik olarak türetilebilir**, ~3221'lik araştırma maliyetinin dışında.

### 🟢 KİLİT AÇILDI — ÖLÇÜLDÜ (`ARAC-DEGISMEZ3-BOLGE-0907.py`)

Soru şuydu: *"`m:null` bölge katmanını boşaltır mı?"* Cevap **hangi yolla
yazıldığına bağlı**, ve iki yol arasındaki fark **-378 üye**:

```
                                    bölge   üye    bölgesiz
TABAN (bugün)                          77   874      46
🔴 S1  `m:` TAMAMEN null               77   496     424    (-378 üye, %43)
🟢 S2  `kd:` EKLENİR, `m:` KORUNUR     77   874      46    (DEĞİŞİKLİK YOK)
```

⇒ **Ö3 GÜVENLE UYGULANABİLİR — TEK ŞARTLA: `m:` ALANI SİLİNMEZ.**
Zaman penceresi `kd:` içine yazılır, `m:` olduğu gibi bırakılır.

**Sebep tek satırda:** `uret_petek.py:770` `k12_merkez()` **`y["m"]` okuyor,
`girdi.kd_gun()` DEĞİL.** `kd:` motorun bölge katmanına **görünmez**.

📌 Ve bu, bugün bu projede kaydedilen *"alan var, okuyan yok"* ailesinin
dördüncü üyesi: `kid` (dolu, kimlik olarak okunmuyor) · `statu` · `kd:`
damgasızlığı · ve **`kd:` motorun bölge katmanında.**

### Koordinatörün 🟡 hipotezi — DOĞRULANDI, ama ŞARTLI
> *"Bölge katmanı zaten yalnız Osmanlı dönemlerinde çiziliyor ⇒ anakronik
> dönemde `m:null` çizimi hiç etkilemiyor olabilir."*

```
ÇİZİM penceresi  = MERKEZİN Osmanlı aralığı   (uret_petek.py:3941-3942)
                   ⇒ anakronik dönemde bölge çizgisi ZATEN YOK   ✓ hipotez
ÜYELİK şartı     = yerleşimin d:/v: VARLIĞI — zaman penceresi DEĞİL
                   ⇒ `m:` null olursa üyelik HER ZAMAN kaybolur  ✗
```
🔴 **İkisi aynı şey değil.** Hipotez *çizim* için doğru, *üyelik* için
yanlış — ve S1'in -378'i tam buradan geliyor. Hipoteze dayanıp `m:`yi
silmek, doğru bir gerekçeyle yanlış bir sonuç üretirdi.

### 🟢 KONTROL GRUBU BEDAVA ÇIKTI — ve bu durum ZATEN YAŞANIYOR
```
bugün: bölge adayı ama `m:` BOŞ olan k:3/4 kayıt = 46
       (Soçi · Tuapse · Hoy · Culfa · Mîyandoab · Kasr-ı Şîrîn · Abâdân …)
uret_petek.py:780  "UYARI kademe: … m: zinciri bir k1/k2 merkeze kapanmıyor"
uret_petek.py:781  "kademe: N yerleşimin m: zinciri açık (BEKLENEN 0)"
```
⚠️ **"Beklenen 0" ama 46 var** — bu benim kalemim değil, **bildiriyorum**.
Ve motorun kendi yorumu (`:758`) bedeli tarif ediyor: *"bedeli kozmetik
(bölge sınırı çizilmiyor, TOPRAK BOYAMASI ETKİLENMİYOR)"*.
⇒ S1 bile *"harita bozulur"* demek değil — **sınır çizgisi** kaybolur,
gövde boyası değil. Ama 378 kayıtta kozmetik kayıp yine de büyük.

⚠️ **HÂLÂ ÖLÇMEDİM:** `kd:` yazmak `degismez3`in **zamansız** sayacını
düşürmez (o da `y["m"]` okuyor) — yalnız `degismez3z` düşer. Bu beklenen
davranış (aletin kendi beyanı) ama **sayının 690'da kalacağını** bir sonraki
oturum kusur sanabilir.

---

## Ö4 · KÖR NOKTA — ad varyantı, 4 kayıt
```
Prizren              m:"Üsküb" → `Üsküp`          (b/p)
Kovel · Rivne · Volodymyr-Volynskyi  m:"Lutsk" → `Lutsk (Łuck)`  (parantez)
```
**Çare:** `m:` değerlerini atlastaki gerçek adla eşle. `data/` donuk ⇒ öneri.
⚠️ Düzeltilince bu 4 kayıt ölçüme **girer**; 690 **artabilir** — bu bir
gerileme değil, **görünürlük kazancı**.

📌 Ve ikisi de `CLAUDE.md §4` eşanlam borcunun yeni ekseni: **parantezli ek**
ve **b/p varyantı**. Benim normalleştiricim ikisinde de kördü ve önce
*"GERÇEKTEN YOK"* bastı — bir eşanlam sözlüğü olmadan bu sınıf tekrar eder.

---

## Ö5 · `turetildi` DAMGASI — ayırt edilemezlik
`kd_oku()` türettiği dönemi `turetildi:True` ile damgalıyor; veriye **elle**
yazılan tek dönemli `kd:` damga taşımıyor (ölçüldü: **0/175**).
⇒ *"Bu kayıt araştırıldı mı, yoksa varsayılan mı"* **veriden
cevaplanamıyor.**

**Çare:** elle yazılan `kd:` dönemine açık bir damga (`kaynak:` ya da
`arastirildi:true`). Küçük bir alan, ama `§11`in *"bilmediğini bilgi diye
yazma"* kuralının bu alandaki tek kapısı.

---

## Ö6 · 🟠 COĞRAFÎ 7 ÇİFT — `kd:` BUNLARI ÇÖZMEZ, ayrı kalem
```
Otranto · Korfu · Paksos · Zakynthos · Kefalonya · İthaki   m:"Yanya"
Dir'iye (Necid)                                             m:"Basra"
```
Bunlar merkezleriyle **neredeyse hiç** aynı devlette olmadı (uyum < %5).
Zamanlı bir merkez yazmak onları aynı devlete sokmaz.

🔴 **Tek satırda raporlanmamalı:** `kd:` çaresiyle birlikte sunulursa
*"çözüldü"* sayılır ve bir daha bakılmaz — `§11`in *"iki ayrı kusur tek
satırda raporlanırsa çareleri ters olsa bile aynı çare uygulanır"* dersi.

⚠️ **ÖLÇMEDİM:** `m:"Yanya"`nın Korfu için tarihen doğru bir idarî atıf olup
olmadığını **kaynağa sormadım**. Kova *"uyum yok"* diyor, *"atıf yanlış"*
**demiyor**. Hüküm için TDV/akademik kaynak gerekir.

---

## Ö7 · GÖÇ SIRASI — 3221 iddianın tamamı bir oturumun işi değil
```
① mekanik, araştırmasız   ① ANAKRONİK kovası (372 çift)      ← Ö3
② ucuz, kaynak hazır      ④ MERKEZ HİÇ OSMANLI OLMAMIŞ (2)
③ orta                    ② FETİH ARASI (347) — kırılma günleri çoğu veride
④ pahalı                  ③ kovası (451) — gerçek idarî tarih araştırması
⑤ ayrı eksen              🟠 coğrafî 7 çift                   ← Ö6
```
📌 En çok bölünecek kayıtlar tek coğrafyada toplanmış (Basra 4 · Erzurum 2 ·
Silistre 4 — 16'şar aralık): **bir bölge oturumu, dağınık bir partiden çok
daha ucuz.**

---

## KARAR İSTEMİYORUM, BİLDİRİYORUM
Bu oturumun kabul ölçütü ölçüm ve sınıflandırmaydı; ikisi de dosyada.
**Uygulama kalemi bende değil** (`data/` · `arac/` donuk, ve Ö1 kök `*.md`).
Sevk gelirse Ö3'ün mekanik türetimini yazabilirim — ama **Ö3'ün bölge
katmanı etkisi ölçülmeden değil.**
