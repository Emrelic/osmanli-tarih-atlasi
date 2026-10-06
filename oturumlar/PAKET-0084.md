# PAKET 0084 — Emre'nin 20 maddesi · 6 Ekim 2026

Kaynak: `C:/claudemre/kutu/giden/parti-emrelic-0084/PARTI.md` (ham kopyası
`denetim/PAKET-0084-gorsel/PARTI-ham.md`). Koordinatör: **YILDIRIM BAYEZIT**.
🔴 **GÖRSELLER DEPODA:** `denetim/PAKET-0084-gorsel/H-00NN-*.png` (43 dosya, 28 MB).
0083'te görseller yalnız `C:/claudemre` altındaydı ve **UMIT onları göremiyordu** —
bu paket beş makinede dağıtılacağı için depoya alındı.

🔴 **EMRE'NİN ÖNCELİK TALİMATI** (UMIT üzerinden, 6 Ekim): *"son madde ile birinci madde
arasında fazla fark yok, SON MADDEDEKİ MESELEYE önem verelim ve o konuyu çözelim."*
⇒ **H-0020 İLK SIRADA ve en güçlü kıtada.** H-0001 ve H-0002 onunla AYNI konudur (§A).

---

## 0. HEPSİ İÇİN GEÇERLİ — okumadan başlama

### 🔴 ÖNCE MÜKERRER KAPISI
Bu paketin maddelerinden en az biri **ZATEN TEŞHİS EDİLMİŞ** (H-0016, aşağıda adıyla).
Her madde için işe başlamadan `denetim/` altını kalemin adıyla tara. Zaten ölçülmüşse
**DUR ve bildir**. Sebep ölçülmüş: 6 Ekim'de koordinatör ÜÇ kalemi mükerrer dağıttı,
üçü de daha önce ölçülmüştü. **Kalem listesi KAYIT değil, doğrulanması gereken İDDİADIR.**

### 🔴 GÖRSELİ AÇ, SONRA KONUŞ — ama GEREKİYORSA
Maddelerin çoğunun metni tek cümle ("bu bölge neden boş") — soru GÖRSELDE. Ama paketin
kendi uyarısı: *"bir görsel, metnine göre kabaca otuz kat pahalıdır"*. ⇒ Metin yetiyorsa
açma; yetmiyorsa `Read` ile aç ve **açtığını yaz**.

### 🔴 ÖLÇÜM ile HÜKÜM AYRI YAZILIR
```
ÖLÇÜM   ne gördüm — sayıyla, dosya ve SATIR adıyla
HÜKÜM   ne anlamına geliyor — ve hangi sınıfa düşüyor
```
"Ölçüm doğru, çıkarım yanlış" bu projenin en sık hata ailesidir.

### ⚠️ KANAL: TAHTA SİZİ UYANDIRMAZ
Bekçiler bu ortamda **en çok 2 saat** yaşıyor. Tahtaya yazın (kayıt için) **ama cevabı
beklemeyin**; koordinatör `send_message` ile ulaşır. Bekçi yeniden KURMAYIN.

### ⚠️ DOSYA SAHİPLİĞİ
`data/yerlesimler*.js` · `data/yer_yama.js` · üretilmiş `data/*.js` (`donemler` ·
`bolgeler` · `devletler_harita` · `petek_govde` · `devirler`) · kök `*.md` → **KOORDİNATÖR**.
Bunlara dokunacak madde **diff üretir, uygulamaz** (`denetim/<AD>.diff`).
Kronoloji · olaylar · devletler · `app.js` · `index.html` → UMIT'in parti sırasında.
🔴 `uret_petek.py` · `renkler.py` · `girdi.py` · `motor_onbellek.py` = **MOTOR TUZU**
(`§9.1`): bunlara dokunan yama **yalnız TAM İNŞA koşusunda** iner, diff olarak bekler.

---

## A. 🔴 UFUK BANDI — H-0020 (öncelik) · H-0001 · H-0002

### A.0 ÖNCE BU ÖLÇÜMÜ OKU — işin yarısı burada
Dağıtmadan önce ölçtüm (6 Ekim, EMRELIC):
```
index.html:158-160   <input type="radio" name="ufuk-gun" value="7"  DISABLED>
                     <input type="radio" name="ufuk-gun" value="10" DISABLED>
                     ⇒ 7 ve 10 gün ARAYÜZDE KAPALI
data/ufuk_bantlari.js  main'de YOK · motor-yuruyus'ta YOK · makine/havva'da YOK
                       DİSKTE VAR, yalnız iki yerde:
                         C:/atlas-kosu17   265.320.865 bayt  28 Eyl 14:17
                         C:/atlas-kosu18   266.399.069 bayt  30 Eyl 17:50
üreten kod            arac/uret_petek.py:7912 (`_byol = … "ufuk_bantlari.js"`)
```
⇒ **ÜÇ SONUÇ, üçü de işin biçimini belirliyor:**
1. **Emre'nin görüntüleri main'den DEĞİL**, `atlas-kosu17`/`kosu18` çıktısından. Kusuru
   yeniden üretmek için o worktree'de çalışılır — `C:/atlas`ta dosya YOK.
2. Bant geometrisi **MOTORDA** üretiliyor ⇒ çare `uret_petek.py`de ⇒ **MOTOR TUZU** ⇒
   `§9.1 ②` gereği **yalnız TAM İNŞA koşusunda iner.** Bu kalem bugün **diff** üretir,
   uygulama YAPMAZ. Bunu bilmeden "düzelttim" denirse 40+ dakikalık koşu boşa istenir.
3. `data/ufuk_bantlari.js` **265 MB** — depoya girmez, girmesi de istenmez.
   `Z-0029` (kutu): 7/10 gün koşusu **Emre'nin kararını bekliyor**, komutu
   `MOTOR_UFUK_BANT=40,56,80 + MOTOR_COL_UFUK_SAAT=56`, ~6,5-7 saat.
   ⇒ **Bu maddenin çaresi o koşuya biniyor.** Ayrıntı: `oturumlar/UFUK-BANT-0081.md`.

### A.1 `H-0020` — 5/7/10 günlük ayarların görüntülerindeki hatalar ⭐ ÖNCELİK
Görsel: `H-0020-1 … H-0020-13.png` (13 adet).
Emre'nin saydığı **BEŞ AYRI KUSUR** — her biri ayrı ölçülür, tek cümleyle toplanmaz:
```
① bazı bölgelerde "7 gün" denince ARADA BOŞLUK BIRAKAN ÇEMBERSEL yapı ekleniyor
   (Sahra'da da böyle)
② bazı yerlerde DOĞRUDAN GÖVDEYE ekleniyor (boşluk yok)        ← ① ile ÇELİŞİK davranış
③ bazı yerlerde 5 ile 7 gün arasında FARK YOK
④ bazı yerlerde 5, 7 ve 10 gün arasında FARK YOK
⑤ bazı yerlerde KATMANLAR ÜSTÜSTE BİNİYOR
```
🔴 ① ve ② **aynı kodun iki ayrı davranışı** — hangi koşulda hangisinin çalıştığı
ölçülmeli. "Bazen böyle bazen öyle" bir kusur tarifi değil, bir **ölçüm sorusudur**.
🔴 ⑤ için **MÜKERRER UYARISI**: `denetim/PAKET-0083-B-KATMAN-BINME.md` üst üste binmeyi
**zaten teşhis etti** — mekanizma `kapat()` (≈16 km morfolojik kapama,
`uret_petek.py:2885`), `delikleri_doldur`ın "başka devletin yerleşimi varsa kapatma"
yasağından (`:2972`) ÖNCE koşuyor, yasak hiç devreye girmiyor. ⇒ ⑤ **aynı mekanizma mı
yoksa bant katmanına özgü AYRI bir binme mi**, İLK İŞ bunu ayırt etmek. Aynıysa cevap
mevcut diff'tir, yeni teşhis değil.
③ ve ④ için ayrı bir soru: fark olmaması **kusur mu, yoksa o coğrafyada 5-10 gün
yürüyüşün gerçekten aynı alana düşmesi mi**? İkisi farklı sonuçtur ve ikincisi kusur
değildir — ama **beyan edilmelidir**, yoksa kullanıcı her seferinde aynı soruyu sorar.

### A.2 `H-0002` — 5/7/10 günlük yürüyüşün görüntüleri
Görsel: `H-0002-1 … 3.png`. Emre'nin üç şikâyeti:
```
① yeni eklenen 5 günlük sürtünmeli yürüyüş alanlarının RENGİ ÇOK KOYU
② 5 günlük bölgenin üstüne eklenmek yerine ARADA BOŞLUK BIRAKILIP sonra eklenmiş
   (= H-0020 ①'in aynısı ⇒ TEK kalem olarak ölç, iki kez ölçme)
③ "her bölümde yok, bazı bölümlerde var bazı bölümlerde yok"  (= H-0020 ③/④ ailesi)
```
⚠️ ① bir RENK meselesi ⇒ `arac/renkler.py` ⇒ **O DA MOTOR TUZUNDA.** Aynı tam inşaya
biner. Renk yaması ayrı bir diff olarak bekler.

### A.3 `H-0001` — ayarlar açıkken haritanın görünümü + **AYRI BİR VERİ SORUSU**
Görsel: `H-0001-1 … 8.png` (8 adet).
🔴 **BU MADDE İKİ AYRI ŞEY SORUYOR, ayrı ayrı cevaplanır:**
```
(a) UFUK: "ayarlar açık iken haritanın görünümü neden böyle, zaten boyalı olan alanlar"
    ⇒ A.1/A.2 ile aynı aile, aynı kaleme bağlanır
(b) VERİ, ufukla İLGİSİ YOK — Timur/Memlük/Osmanlı sahipliği:
    · Timur Sivas'ı ALMADAN ÖNCEki görünüm, sonra Sivas'ı alıyor
    · FAKAT Sivas'ın DOĞUSUNDA birden MEMLÛK toprakları peydah oluyor
      Emre'nin sorusu: "Timur o bölgeyi alıp Memlüklere mi verdi, ne alaka?"
    · sonra Osmanlı Kemah ve Erzincan'ı alıyor AMA ARADA Memlûk toprağı görünüyor
    Emre: "bu doğru mu yanlış mı ARAŞTIRALIM"
```
⇒ (b) bir **sahiplik/kaynak** kalemidir (§C ailesi), ufuk kalemine KARIŞTIRILMAZ.
Muhtemel kök: Memlûk yerleşim noktalarının `s:` zinciri ya da **noktasızlık** (`§2`:
noktası olmayan bölge en yakın peteğe emilir ve O PETEĞİN SAHİBİYLE boyanır) — ilk soru
her zaman *"o bölgede yerleşim noktası var mı?"*

---

## B. 🔴 HARİTA RÖTUŞU — YENİ BİR KAVRAM, ve bir POLİTİKA KARARI

### B.0 `H-0019` — Emre kavramı TANIMLIYOR
Emre'nin tanımı birebir: *"harita rötuşu: koşunun hesapladığı fakat göze tuhaf görünen
yapıların, eğer **belge ile çürütülemez ise**, ufak tefek düzenlemelerle göze ve mantığa
uygun hale getirilmesi işlemidir. bunu kaydedelim sisteme tanıtalım ve ara sıra 'harita
rötuşu' diyerek koşuya istisna durumlar ile müdahale edelim."*
Ve `H-0017`de aynı şeyi tekrar ediyor: *"böyle ufak tefek rötuşları yapmak için istisnaî
durum olarak işaretlenebilir… gözümüz kanamasın diye koşunun hesabına ek istisnalar olsun."*

🔴 **BU BİR KUSUR DEĞİL, BİR YETKİ TALEBİDİR — ve tasarımı dikkat ister.**
Projenin bütün disiplini şu eksende duruyor: *motor çıktısını ÖLÇ, VERİYİ düzelt.*
Rötuş mekanizması bunun yanına **geometri üzerinde bir istisna listesi** koyar.
⇒ Emre istiyor, **onay onun** ve verildi sayılır. Ama `§3.4(5)` gereği:
```
· istisna SAYI DEĞİL LİSTE tutar — her rötuş ADIYLA ve GEREKÇESİYLE yazılır
· her rötuşta şu üçü ZORUNLU:  ne değişti · NİÇİN (belge çürütemiyor mu, ölçüldü mü)
                               · kim karar verdi
· rötuş İKİ YÖNDE ölçülebilir olmalı: rötuşsuz ve rötuşlu hâl yan yana görünmeli
· 📌 "En iyi istisna yazılmayan istisnadır": bugün hiçbir şeyi susturmayan bir istisna,
  yarın GERÇEK bir ihlali susturur. Rötuş listesi ölü girdi tutmaz.
🔴 VE EN ÖNEMLİSİ — EMRE'NİN KENDİ ŞARTI: "BELGE İLE ÇÜRÜTÜLEMEZ İSE".
  Yani rötuş, kaynak araştırmasının YERİNE GEÇMEZ, ondan SONRA gelir. Sırası:
  ① kaynak ara  ② kaynak hüküm veriyorsa VERİYİ düzelt (rötuş YOK)
  ③ kaynak sessizse VE görüntü mantığa aykırıysa ANCAK O ZAMAN rötuş
```
**TESLİM (B.0):** bir TASARIM ÖNERİSİ — mekanizma nereye yazılacak (yeni bir
`data/rotus.js`? `yer_yama.js` genişletmesi? motorda bir istisna kovası?), `denetle.py`
onu nasıl GÖRECEK, ve rötuşlu/rötuşsuz hâl nasıl karşılaştırılacak. **Uygulama YOK,
öneri VAR** — kavramın kendisi Emre'nin, biçimi koordinatör + Emre kararı.

### B.1 Rötuş ADAYLARI — Emre'nin işaret ettiği üç somut vaka
```
H-0013  Şehirköy (Pirot) elden çıkmış ama ÇOK UFAK bir toprakla ADA gibi görünüyor.
        Emre: "ikinci resimdeki ufak bölüm OLMASA DA enklav olmadan görünse daha iyi."
        Görsel: H-0013-1.png · H-0013-2.png
H-0017  Şehirköy'ü ENKLAV olmaktan kurtarmak için Sırbistan tarafındaki (batı kesimi)
        ince Osmanlı KIYMIK toprağının Sırbistan'a verilmesi.  Görsel: H-0017-1.png
        ⚠️ H-0013 ile AYNI YERİ konuşuyor — ikisi TEK kalem olarak ele alınır.
H-0018  İbrail bölgesini ANA KARA ile bağlamak — "ufak bir rötuşta buraya atılabilir".
        Görsel: H-0018-1.png    ⚠️ H-0003 ile aynı coğrafya (İbrail/İshakçı/Kalas).
```
🔴 **SIRA: B.0'ın tasarımı ONAYLANMADAN B.1 uygulanmaz.** Üç vakayı ölçüp
*"rötuş gerekiyor mu, ne kadar, hangi gerekçeyle"* yazmak serbest; **geometriye
dokunmak** mekanizma kurulduktan sonra.

---

## C. SAHİPLİK VE KRONOLOJİ DOĞRULAMA — araştırma kalemleri

🔴 **İKİSİ DEĞİŞMEZ 2 İHLALİ ADAYI** (toprak değişmiş, kronoloji maddesi YOK) —
bu paketin en sert kalemleri, çünkü `§3`ün çekirdek değişmezine dokunuyorlar:
```
H-0012  Bursa civarı BİRDEN Çelebi Mehmed'e geçmiş görünüyor, "bu ele geçişin kronoloji
        maddesi YOK".  Görsel: H-0012-1.png
H-0014  (8-9 Mart 1403, Yıldırım Bayezid'in esarette ölümü maddesinde) "bu bölüm
        Bizans'a katılmış görünüyor haritada ama kronolojide maddesi yok".
        Görsel: H-0014-1.png
⇒ Her ikisinde İLK İŞ: kırılmayı BUL (`d:`/`v:` hangi gün, hangi yerleşim), sonra
  ±30 gün içinde madde var mı ÖLÇ. Yoksa Değişmez 2 ihlalidir ve MADDE YAZILIR
  (kaynakla). `denetle.py` bugün "0 açık" diyor ⇒ ikisinden biri doğruysa kapı o
  kırılmayı GÖRMÜYOR, ve o AYRI bir bulgudur.
```
**TERS YÖN — kronoloji diyor, harita göstermiyor:**
```
H-0010  "1402, Ankara bozgununun ardından Eflak Voyvodası Mircea Dobruca'yı yeniden
        aldı — Silistre, Köstence, Babadağı, İshakçı" maddesi VAR ama
        Emre: "bu durum haritaya YANSIMAMIŞ, hata var".  Görsel: H-0010-1/2.png
⇒ Dört yerleşimin `s:` zinciri 1402'de eflak'a geçiyor mu, ÖLÇ. Geçmiyorsa veri
  eksik; geçiyorsa boyama/petek sorusu (noktasızlık? `§2`).
```
**SAHİPLİK TEYİDİ (kaynak işi):**
```
H-0003  İbrail · İshakçı · Kalas — "bu tarihte kimde imiş, haritadaki görünüm doğru mu"
        Görsel: H-0003-1/2.png                        ⚠️ H-0018 ile aynı coğrafya
H-0005  Rezve · Ahtapolu — "kendilerinden ÖNCE gelen topraklardan DAHA ÖNCE alınmış
        görünüyor, doğru mu teyit edelim".  Görsel: H-0005-1/2.png
        📌 Not: `denetim/KORIDOR-0081-tdv-onbellek/` altında `ahtapolu.txt` ·
        `ahtabolu.txt` · `rezve` civarı önbellek VAR — önce ONU oku, TDV'yi yeniden
        çekmeden.
H-0006  Timur Batı Azerbaycan ve Kuzey İran'ı NEREDEN GEÇEREK fethetti —
        Muzafferîler · Celâyirîler · Serbedârîler · Mâzenderan · Gîlan arada.
        "Bu ele geçirme olurken ARADAKİ bölgelerin durumunu tam teyit edelim."
        Görsel: H-0006-1.png
H-0008  Braşov (Brassó) — Eflak'a dâhil bir şehir mi, Erdel'e bağlı mı? Görsel: H-0008-1.png
        ⚠️ MÜKERRER UYARISI: `denetim/` altında "Brass" 15 dosyada geçiyor ve
        `TEMESVAR-BRASSO-PREKMURJE-1006` kalemi BUGÜN dağıtıldı (M-5872, kıta 1237).
        ⇒ ÖNCE o kalemin raporuna bak; ölçülmüşse bu madde ONA BAĞLANIR, yeniden ölçülmez.
H-0011  Timur Anadolu beyliklerini yeniden kurdu deniyor "ama bu bölüm KOMPLE
        Karamanoğlu görünüyor, doğru mu".  Görsel: H-0011-1.png
        ⇒ Beyliklerin ihyası 1402 sonrası: Germiyan · Aydın · Menteşe · Saruhan ·
        Candar · Karaman ayrı ayrı mı, yoksa veride tek kimliğe mi düşmüş? Ölç.
H-0015  Macaristan topraklarına doğru UZANAN toprağın sebebi — "bu uzantı doğal ve doğru
        mu, tarihî/siyasî/coğrafî gerçeklere uygun mu, yoksa hata mı".
        Görsel: H-0015-1/2.png
        ⇒ `§2` ilk sorusu: o bölgede yerleşim noktası var mı? Noktasızlık iki yöne
        hata üretir (`D206`).
```

---

## D. ETİKETLEME — `H-0004`, mekanik ve GENİŞ
Emre: *"1357 dolayı — Kırkpınar güreşlerinin rivayet edilen başlangıcı: teknik/bilimsel
diye kategorilendirilmiş, halbuki **SPOR** olarak kategorilendirilmeli. Okçuluk, cirit,
güreş, atçılık — **tüm sporla alâkalı maddeler SPOR**; kültür-sanat ile alâkalı olanlar
**KÜLTÜR SANAT** olarak kategorilendirilmeli."*
⇒ Tek maddenin düzeltmesi DEĞİL, bir **sınıf taraması**: `etiket`/`konu` alanlarında
spor ve kültür-sanat konularının bugün nereye düştüğünü ölç, listeyi çıkar, diff öner.
Otorite: `ETIKETLEME.md`. 🔴 Yeni bir etiket değeri gerekiyorsa (ör. `konu-spor`)
onu **koordinatör yazar**, işçi ÖNERİR — ve `app.js`in süzgeci o değeri tanımıyorsa
**sessizce elemez, sayıp basar** (`D225`).

---

## E. ODAK VE HAREKÂT — iki tek maddelik kalem
```
H-0007  "1387 — Timur'un İran'ın büyük bölümünü hâkimiyeti altına alması" maddesinin
        ODAĞI YANLIŞ YERE gidiyor; Emre: "odaklanması TİMUR İMPARATORLUĞU olmalı".
        ⇒ `odak_kimlik` / `yer_id` / `odak_kutu_kaynak` alanlarından hangisi yazılı,
          `arac/odak_cozum.js` ne çözüyor, ÖLÇ. Çare bir alan düzeltmesi.
        ⚠️ Odak kapısı (`denetle_yayin.py`) KIRIK ATIFA 0 TOLERANSLI — yeni bir
          `yer_id`/`odak_kimlik` yazarken çözülüyor olduğunu DOĞRULA, yoksa yayın durur.
        ⚠️ Ve `kapsam_genis:true` + odak yok ⇒ kamera o günün OSMANLI sınırına uçar
          (`app.js:11835`) — yabancı kronolojide bu, odaksızlıktan KÖTÜDÜR. Bu madde
          tam o sınıf olabilir: ÖLÇ.
H-0009  "Timur'un sefer oku TEBRİZ'den başlayarak gelmeli".  Görsel: H-0009-1.png
        ⇒ Harekât oku katmanı (`index.html` ④ "Harekât okları"). Okun başlangıç
          noktası hangi alandan okunuyor, ÖLÇ ve düzelt.
```

---

## F. KATMAN BİNMESİ — `H-0016`, 🔴 MÜKERRER ADAYI
Emre: *"bu üstüste binilmiş katmanların sebebi nedir. düzeltelim"*. Görsel: `H-0016-1.png`
🔴 **BU KALEM BÜYÜK OLASILIKLA ZATEN TEŞHİS EDİLDİ.**
`denetim/PAKET-0083-B-KATMAN-BINME.md` (5 Ekim) aynı sınıfı çözdü ve mekanizmayı
ADIYLA yazdı:
```
motorun kapat() işlemi (≈16 km yarıçaplı morfolojik kapama, uret_petek.py:2885)
Osmanlı gövdesindeki ≈33 km'den dar Bizans adalarını ve çıkıntılarını YUTUYOR, ve bunu
delikleri_doldur'un "BAŞKA DEVLETİN yerleşimi varsa kapatma" yasağından (B1, :2972)
ÖNCE yaptığı için yasak HİÇ DEVREYE GİRMİYOR ⇒ iki gövde aynı yeri boyuyor.
Yama: denetim/PAKET-0083-B-KATMAN-BINME.diff (MOTOR TUZU ⇒ tam inşa bekliyor)
```
⇒ **İLK İŞ TEŞHİS DEĞİL, AYIRT ETME:** `H-0016-1.png`deki binme bu mekanizma mı?
 · **Aynıysa** → hüküm `once-cozuldu`, cevap mevcut diff, **yeni iş YOK**.
 · **Farklıysa** → NİÇİN farklı olduğu yazılır (hangi iki katman, hangi coğrafya,
   dar mı geniş mi) ve ancak o zaman yeni teşhis açılır.
📌 Aynı uyarı `H-0020 ⑤` için de geçerli (§A.1).

---

## 7. SEVK TABLOSU — koordinatörün önerisi, UMIT dağıtır

| sıra | kalem | madde | tip | dosya / sınır |
|---|---|---|---|---|
| **1** | **UFUK-BANT-HATA** | **H-0020 · H-0002 · H-0001(a)** | ölçüm + diff | 🔴 `C:/atlas-kosu18`de ölç · MOTOR TUZU ⇒ **diff, uygulama YOK** · en güçlü kıta |
| 2 | ROTUS-TASARIM | H-0019 (+ H-0017/H-0013/H-0018 vaka) | tasarım önerisi | öneri; geometriye DOKUNMA |
| 3 | DEGISMEZ2-ADAY | H-0012 · H-0014 | ölçüm + madde | kronoloji → UMIT · kırılma ölçümü şart |
| 4 | DOBRUCA-1402 | H-0010 | ölçüm | yerleşim diff → koordinatör |
| 5 | TIMUR-SAHIPLIK | H-0006 · H-0011 · H-0001(b) | araştırma | TDV birincil · kaynak ADIYLA |
| 6 | TUNA-AGZI | H-0003 (+ H-0018 coğrafyası) | araştırma | önbellek VAR, önce onu oku |
| 7 | TRAKYA-TEYIT | H-0005 | araştırma | `KORIDOR-0081-tdv-onbellek/` oku |
| 8 | BRASSO | H-0008 | ⚠️ önce 1237'nin raporuna bak | mükerrer riski YÜKSEK |
| 9 | ETIKET-SPOR | H-0004 | sınıf taraması | `ETIKETLEME.md` · yeni etiket koordinatörde |
| 10 | ODAK-TIMUR | H-0007 | ölçüm + düzeltme | odak kapısı 0 toleranslı |
| 11 | HAREKAT-OK | H-0009 | ölçüm + düzeltme | harekât katmanı |
| 12 | KATMAN-BINME-2 | H-0016 | ⚠️ önce AYIRT ET | 0083-B ile mükerrer olabilir |
| — | MACARISTAN-UZANTI | H-0015 | araştırma | `§2` noktasızlık ilk soru |

🔴 **TESLİM BİÇİMİ — her kalem:** `denetim/<KALEM-ADI>-1006.md` · ölçüm sayıyla ·
bulunamayanlar ADIYLA · öngörü ÖLÇÜMDEN ÖNCE (sayı + mekanizma) · diff varsa
**UYGULANMAMIŞ** · tek teslim mesajı (ölçtüm / bulamadım / istiyorum) + "bekçimi
öldüreyim mi?". Commit: `git add -- <açık adlar>`; **`git add -A` ve dizin pathspec'i
YASAK**, `git stash` YASAK.
