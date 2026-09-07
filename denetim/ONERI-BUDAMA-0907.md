# ÖNERİ — BUDAMA-0907 · taban bağlamın sadeleştirilmesi

**Oturum:** BUDAMA-0907 · **Tarih:** 7 Eylül 2026
**Dayanak:** `denetim/OLCUM-BUDAMA-0907.md` — bu dosyadaki her sayı oradan.

🔴 **BU BİR ÖNERİDİR, HÜKÜM DEĞİL.** `CLAUDE.md`de değişen satır: **0.**
Uygulama koşu 8'den ve dalga bitiminden sonra, kararı **Emre'nin.**

---

## ⓪ ÖNCE İKİ ÇÜRÜME — çünkü öneri onların üstüne kuruldu

```
🔴 ÇÜRÜDÜ  "compact'ı yanlış zamanda mı yapıyoruz?"
           Compact DEĞİŞKENİ siler. CLAUDE.md her oturumda YENİDEN
           yüklenir ve compact onu HİÇ göremez. Zamanlama ne olursa
           olsun taban aynı yere iner — çünkü inilen yer TABANDIR.

🔴 ÇÜRÜDÜ  "hangi ders atıf alıyor? kullanılmayanın vakası ayrı dosyaya
           iner" (şartnamenin «asıl ölçüm» dediği Ⓒ)
           178 dersin 163'ünün korpusta açık izi var. Bu ölçütle
           budanabilen toplam: 2.615 token = CLAUDE.md'nin %1,8'i.
           ⇒ ÖLÇÜT DOĞRU BİR SORU SORUYOR AMA SORUNU ÇÖZMÜYOR.
```
🟡 **ÜÇÜNCÜ ADAY DA ÖLÇÜLDÜ VE ELENDİ:** *"Türkçe kötü tokenlaşıyor"* —
doğru ama **+%2,4.** Bütün Türkçe harfler silinse kazanç 3.361 token.

⇒ **Geriye tek ölçüt kaldı ve o ölçüldü: KURAL ile VAKAYI ayırmak.**

---

## ① YENİ YAPI NE — ve niçin `dersler/DIZIN.md` DEĞİL

### 🟢 ÖNERİLEN

```
CLAUDE.md §11        DEĞİŞMEZ YERİNDE KALIR — ve DİZİNİN KENDİSİ OLUR
   her ders =  manşet satırı            (kuralın kendisi)
             + `⇒` / `📌` / `KURAL` satırları  (damıtılmış hüküm)
             + vakanın TEK SATIRLIK künyesi   (kim · ne zaman · anahtar sayı)
             + `→ dersler/<slug>.md`          (bağlantı)

dersler/<slug>.md    VAKA ANLATISI — ölçümler, kod parçaları, çürütmeler,
                     alıntılar, "niçin öyle" gerekçesi. HİÇBİR ŞEY SİLİNMEZ.
```

### 🔴 NİÇİN AYRI BİR `dersler/DIZIN.md` **ÖNERMİYORUM**

Çünkü CLAUDE.md'nin kendi dersi onu yasaklıyor:

> *"Bir bilgi iki yerde duruyorsa, biri güncellenince öteki bayatlar — ve
> hangisinin okunduğunu ALET söyler, GÖZ değil."* (`§11`)
> *"…iki otorite doğar ve ayrışır."*

Ayrı bir dizin dosyası **ikinci bir otorite** yaratır: bir ders eklenince
ya da manşeti değişince iki yer güncellenmeli, ve biri unutulur. Bu proje
o kusuru **dört kez** kaydetmiş (`uret_bekleyenler.py` · `renkler.py`nin
yorum/sözlük çifti · `girdi.py` dosya listesi · `§5`in dosya haritası).

🟢 **§11'in kendisi dizindir.** Tek otorite, sıfır senkron borcu, ve
şartnamenin ⑤. sorusundaki *"bayat bir DIZIN satırı"* riski **yapısal
olarak doğmaz.**

📌 Ve emsal ters yönde okunmalı: `claudemre-basla` skill'i `yasalar/gelen/`
için bir `DIZIN.md` kurdu **çünkü orada gelen kutusu ayrı bir yerdeydi.**
Burada dizin zaten CLAUDE.md'nin içinde duruyor; ikincisini kurmak
kazanç değil **borç** olur.

---

## ② CLAUDE.md'DE NE KALIR — kural mı, slogan mı?

🔴 **Slogan DEĞİL, KURAL.** Bir slogan (*"ölçülemedi ≠ temiz"*) hatırlatır
ama **uygulanamaz**; bir oturum onu okuyup ne yapacağını bilemez.

Kalması önerilen dört parça ve her birinin gerekçesi:

| parça | niçin kalır |
|---|---|
| **manşet** | kuralın kendisi; `§N` atıfları buna çarpar |
| **`⇒` / `📌` hüküm satırı** | dersin *uygulanabilir* hâli — 178 dersin **169'u** (%95) zaten böyle bir satır taşıyor |
| **vaka künyesi (1 satır)** | *"bu gerçekten oldu"* — dersin ağırlığı vakasından gelir; künyesiz kural bir temenniye döner |
| **bağlantı** | vakayı okumak isteyene tek tık |

⚠️ **Ve bir şey kesinlikle kalmalı: DAMGALAR.** `🔴🔴 ÇÜRÜDÜ` · `🟡
DEVRALDIM` · `⚠️ DERS SİLİNMEDİ, VAKA DAMGALANDI` satırları bir vakanın
**bugünkü geçerliliğini** taşıyor. Bunlar vakayla birlikte inerse, bir
oturum çürümüş bir dersi geçerli sanır. ⇒ **Damga manşetin yanında kalır.**

### 🟡 Ⓓ MÜKERRERLİK: «BİRLEŞTİRME» ÖNERİLMİYOR — ATIF ÖNERİLİYOR

Şartname *"birleştirme, silmekten güvenlidir — ve öneri o yönde olmalı"*
diyordu. Ölçüm bunu **daralttı:**
```
en yaygın 12 formülün geçtiği ders  : 47 / 178 · 35.578 token (§11'in %33,4'ü)
«denetim var ≠ o soruyu soruyor»    : 7 derste — AMA YEDİ AYRI VAKA
   renk_cikti · --dogrula · renk_olc · konum_denetimi · tahtanın `kim`
   alanı · gorunen() · glob
```
🔴 **Tekrar eden şey KURAL CÜMLESİ, vakalar farklı.** Yedi dersi bire
indirmek **yedi vakayı** siler — `§11`: *"bir vakayı SİLMEK dersi de
siler."*
🟢 **Doğru biçim `Ⓚ2`nin kendisi:** kural cümlesi **bir kez kanonik**
durur, öteki dersler ona **atıf** yapar. Külliyat bunu zaten yapıyor —
dersin %21'i *"…nin YÜZÜ"*, %12'si *"…ailesinin"* diyor. Öneri yeni bir
alışkanlık getirmiyor, **var olanı ucuzlatıyor.**

---

## ③ KAZANÇ KAÇ TOKEN — ve hangi ölçümden

**Ölçüm aleti:** `denetim/ARAC-BUDAMA-KAZANC-0907.py` (178 dersin
tamamı üzerinde, o200k 🟡 PROXY).

| | §11 | CLAUDE.md | pencerede |
|---|---:|---:|---:|
| **bugün** | 106.678 | **145.947** | ~%29-30 |
| **Ⓚ2 — otomatik ölçüm** (ort. 118 tok/ders) | 21.081 | **60.350** | ~%12 |
| **Ⓚ2 — elle yazılmış örneğe göre** (184 tok/ders) | 32.752 | **72.021** | ~%15 |

```
KAZANÇ BANDI :  73.900 – 85.600 token
CLAUDE.md    :  %41 – %49'una iner
```
🔴 **BANDIN ÜST UCU ÖNERİLİR, ALT UCU DEĞİL.** Otomatik ölçüm (118 tok)
yalnız var olan `📌`/`⇒` satırlarını topluyor; elle yazınca **184 token**
çıktı (aşağıdaki örnek). ⇒ ***Otomatik sayı iyimser; gerçek sonuç 72.000
civarında beklenmeli.*** Bir ölçümün iyimser tarafını manşet yapmak, bu
projenin `§11`de üç kez kaydettiği hata.

🟡 **AYRICA ÖLÇÜLMEDİ — ikinci kademe adayı:** `§4` (13.764) ve `§3.5`
(7.750) da vaka ağırlıklı. Aynı işlem oralara uygulanırsa **~15.000 token**
daha beklenir — ama bu **tahmin, ölçüm değil**; ayrı bir kalem.

---

## ④ RİSK: bir ders taşınınca ona atıf yapan ne bozulur?

**Ölçüldü:**
```
korpusta `§N` bölüm atıfı                    11.061   ⇒ ETKİLENMEZ
korpusta `CLAUDE.md:<satır>` atıfı               14
     §11'in ÜSTÜNDE (satır < 2007)               12   ⇒ ETKİLENMEZ
     §11'in İÇİNDE (`CLAUDE.md:4189`)             2   ⇒ 🔴 KIRILIR
```
⇒ **Atıfların %99,87'si kırılmaz.** Oturumlar CLAUDE.md'ye satır
numarasıyla değil **bölüm numarasıyla** atıf yapıyor (11.061'e 14).

### 🔴 ASIL RİSK BU DEĞİL — üçü daha var, ikisinin çaresi var

```
① VAKASIZ KURAL YANLIŞ UYGULANIR
   Bir kural, vakası olmadan fazla geniş okunur. Ölçülmüş emsal:
   `§3.5.1`de bir vaka silinseydi ders de silinecekti; damgalanınca korundu.
   🟢 ÇARE: manşet + `⇒` satırı + TEK SATIRLIK vaka künyesi birlikte kalır.
      Kural asla künyesiz durmaz.

② BAĞLANTI KIRILIR — `dersler/<slug>.md` silinir/yeniden adlandırılır
   🟢 ÇARE: bir nöbetçi (`arac/ders_bag.py`) her `→ dersler/…` bağlantısının
      hedefini sınar. `§11 C13`: nöbetçi İKİ YÖNDE de sınanır —
      GEÇME (bütün hedefler varken temiz) ve ATEŞLEME (bir hedef silinince
      öter), ve ③ GİRDİ (dosyayı GERÇEK kaynağından okuma yolu koşulur).

③ 🔴 ÇARESİ OLMAYAN RİSK — VAKAYI KİMSE AÇMAZ
   Bugün bir oturum vakayı OKUMAK ZORUNDA, çünkü gözünün önünde.
   Yarın açmayabilir. Ve bu projenin en pahalı dersleri VAKALARDAN çıktı.
   ⚠️ BU BİR ÖDÜNLEŞMEDİR, çözüm değil: 106.678 token'ı taşımanın bedeli
      "vaka bir tık uzakta" olmasıdır. ÖLÇÜLMEDİ ve ölçülemez —
      ancak uygulandıktan sonra gözlenebilir.
```

---

## ⑤ GERİ ALINABİLİR Mİ?

```
🟢 GIT'TE EVET — tek commit, tek `git revert`. Vaka metinleri SİLİNMİYOR,
   yalnız başka dosyaya taşınıyor; içerik kaybı sıfır (sınanabilir:
   taşınan metnin karakter toplamı = inen dosyaların karakter toplamı).
🟢 "BAYAT DIZIN SATIRI" RİSKİ YAPISAL OLARAK YOK — çünkü ayrı bir dizin
   önerilmiyor (`①`). Tek otorite §11'in kendisi.
🔴 GERİ ALINAMAYAN TEK ŞEY: taşıma sırasında bir vakanın SESSİZCE
   düşmesi. Çare bir sayım kapısı: taşımadan önce ve sonra
   (CLAUDE.md + dersler/*) TOPLAM KARAKTER SAYISI eşit olmalı;
   eşit değilse taşıma DURUR.
```

---

## ⑥ ÖRNEK — ÖNCE / SONRA (kabul ölçütü ③)

Seçilen ders: **`CLAUDE.md:2232`** — *"ÖLÇEMEDİĞİNİ ELEYEN BİR SÜZGEÇ,
ONU TEMİZ SAYAR"* · **638 token · 33 satır.** (Ortancaya yakın bir ders;
en uzunlardan biri seçilseydi kazanç olduğundan iyi görünürdü.)

### ÖNCE — bugün CLAUDE.md'de duran hâli (638 token, 33 satır)
```
- 🔴 **ÖLÇEMEDİĞİNİ ELEYEN BİR SÜZGEÇ, ONU TEMİZ SAYAR.**

  **Vaka (8 Ağustos 2026, RENK 2 — ve öngörüsü bunu ORTAYA ÇIKARDI).**
  Koşu 3 için beş kalemlik damgalı bir öngörü yazılmıştı. Dördü tuttu,
  **④ çürüdü:**
  ```
  ④ YENİ Voronoi çakışması     öngörü 0   ölçüm 1
     kuba ↔ lunda-imparatorlugu   ΔE 9,06 · 365 km · Voronoi komşusu
  ```
  🔴 **Ve ilk teşhis de yanlıştı:** araç *"1500 km yetmedi, eşik
  büyütülmeli"* dedi. Ölçüldü — mesafe **365 km** …
  ```python
  if b == kim or b in out or b not in nokta:   # ← b not in nokta
  ```
  … (toplam 33 satır)
```

### SONRA — CLAUDE.md'de kalan (184 token, 6 satır)
```
- 🔴 **ÖLÇEMEDİĞİNİ ELEYEN BİR SÜZGEÇ, ONU TEMİZ SAYAR.**
  ⇒ Ölçemediğin aday *"sorun olmayan aday"* diye elenmez; **en kötü hâl
  varsayılır.** `§11`in *"ölçülemedi ≠ temiz"* kuralının süzgeç tarafı.
  📌 *Beş öngörülük bir kümede bilgiyi yalnız YANLIŞ OLAN taşıdı.*
  → vaka: `dersler/olcemedigini-eleyen-bir-suzgec-onu-temiz.md`
    (RENK 2 · 8 Ağu 2026 · `kuba ↔ lunda` ΔE 9,06 · 365 km · `engel_kumesi()`)
```
```
638 → 184 token · KAZANÇ 454 (%71,2) · İÇERİK KAYBI 0 (vaka dosyada)
```
🟢 **Ve kuralın uygulanabilirliği korundu:** *"en kötü hâl varsayılır"*
cümlesi ne yapılacağını söylüyor; künye satırı *"bu gerçekten oldu ve
şu maliyeti verdi"* diyor; `→` vakayı bir tık uzağa koyuyor.

⚠️ **Ve bu örnek ortalamanın ÜSTÜNDE:** 184 token, otomatik ölçümün
öngördüğü 118'in üstünde. `③`teki bandın üst ucu buradan geliyor.

---

## ⑦ UYGULAMA — ne zaman, kim, hangi sırayla

```
🔒 ŞİMDİ DEĞİL. Şu an ALTI KOL (SINIR-*-0907) CLAUDE.md'yi okuyarak
   çalışıyor ve koşu 8 sürüyor. Okudukları belge altlarından değişirse
   ne okuduklarını kimse bilemez.
👤 KİM: kök `*.md` Oturum 0'ın; ve CLAUDE.md EMRE'NİN belgesi ⇒ karar onun.
```

**Önerilen sıra — kademeli, her kademede ölçüm:**
```
① EN UZUN 20 DERS   ~26.000 token · en yüksek kazanç, en az kayıt
                     Ölç: CLAUDE.md yeni token · atıf kırılması · içerik
                     toplamı (karakter) eşit mi?
② kalan 158 ders     kademe ① temiz geçtiyse
③ 🟡 AYRI KALEM      `§4` + `§3.5` (21.514 token) — ölçülmedi, tahmin
```
📌 ①'in ayrı bir kademe olmasının sebebi `§11`in kendi dersi:
*"bir düzeltme, dokunduğu bütün eksenleri yeniden ölçmeli."* Yirmi ders
bir gecede geri alınabilir; 178 ders alınamaz.

---

## ⑧ ÖNERİLMEYENLER — ve niçin

```
🔴 «Kullanılmayan dersi sil»       ölçüldü: kazanç %1,8. VE ölçüm iki şeyi
                                   ayırt edemiyor — ölü ders mi, yoksa o
                                   kadar iyi yerleşmiş ki kimse atıf
                                   yapmıyor mu? («üretimi veri değişirken
                                   başlatma» 24 token, izi YOK, ve dört
                                   üretimi çöpe götürmüş kural.)
🔴 «Türkçe karakterleri sadeleştir» ölçüldü: kazanç %2,4. Okunabilirliği
                                   bozar, kazanç yok.
🔴 «§11'i tamamen ayrı dosyaya al»  o zaman §11 hiç okunmaz — ve
                                   `claudemre-basla`nın kendi kaydı bunu
                                   söylüyor: "kural yazılıydı,
                                   UYGULANAMAZDI." Manşetler KALMALI.
🔴 «Eski dersleri tarihe göre at»   ölçülmedi ve ölçülemez: bir dersin
                                   yaşı, geçerliliği hakkında bir şey
                                   söylemiyor. `§11` bunu üç kez kaydetti.
```
