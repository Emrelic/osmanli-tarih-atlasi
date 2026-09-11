# BULGU — C DENETİMİ, 11 Eylül 2026

Oturum: **C DENETİMİ** (önceki isimler: YABANCI SENKRON → ENKLAV TAVANI →
T ALANI ŞEMASI) · Koordinatör: 1.MURAT · Zemin: `denetim/SEMA-C-0911.md`
(§8, şema kesinleşmiş), `denetim/TASLAK-hukuki_sinirlar.js` (bugünkü tek
gerçek/taslak veri).

🔒 `data/*.js` ve `arac/*.py` yalnız **okundu** — `arac/denetle.py`ye TEK
SATIR YAZILMADI (görev şartı: koşu 10'da oraya taşınacak). Çıktı:
`denetim/ARAC-C-DENETIM-0911.py` (çalışır, bağımsız betik) + bu rapor.

---

## ① MEVCUT DEĞİŞMEZLER C'YE KARŞI OKUNDU

### Değişmez 1 (sahipsizlik) — C bir hattın iki yakasını nasıl atıyor?

`SEMA-C-0911.md §8.2`nin `cross_yerel` formülü **matematiksel olarak her
noktayı KESİN bir tarafa atar** (`cross_yerel > 0` ya da `< 0`) — hattın
TAM ÜZERİNDE olmayan hiçbir nokta "ne A ne B" kalamaz, yani formülün
KENDİSİ bir delik AÇAMAZ. **Gerçek delik riski başka yerde:** `kapsama.kutu`
sınırında, kutunun DIŞINDAKİ Voronoi/yaslama sonucuyla kutunun İÇİNDEKİ
`cross_yerel` sonucu arasında bir **dikiş** oluşabilir (SEMA-C §2.3'ün
kendi uyarısı: "açık eğri + kapalı bölge → iki yarım poligon"). Bu,
`arac/`e dokunmadan SINANAMAZ — SEMA-C'nin kendi SINAV 2'si (referans
koşusuyla bbox-dışı diff) tam bunu hedefliyor ama koşulmadı. **Ben de
koşturamadım (donuk).** Bunun yerine ölçülebilir bir ÖN-KOŞUL denetimi
yazdım: **C1** (aşağıda) — `taraflar[]`in İKİSİNİN de gerçek, GEÇERLİ
künye olduğunu ve C kaydının [f,t) penceresinde HER İKİSİNİN de VAR
olduğunu doğruluyor. Bu, "delik"in en sık kaynağı olacak hatayı (yanlış/
hayalet taraf id'si) motor koşmadan yakalar.

### Değişmez 2 (sessiz toprak değişimi) — Midye-Enez'in maddesi VAR MI?

**DOĞRULANDI, bağımsız olarak** (kardeş oturumun iddiasına güvenilmedi,
kendim aradım):
```
f:"1913-05-30"  →  data/olaylar.js:167       t:"1913-05-30" BİREBİR
                    b:"Londra Antlaşması — Rumeli'nin kaybı"
                    d:"...Midye-Enez hattının batısındaki bütün topraklar..."
                →  data/kronoloji_balkan.js:609/994  (aynı gün, İKİ AYRI kayıt daha)
t:"1913-06-29"  →  data/olaylar_ek5.js:403   t:"1913-06-29" BİREBİR
                    b:"II. Balkan Savaşı'nın başlaması"
                    d:"...Midye-Enez hattını aştı ve Doğu Trakya'yı
                       Edirne ile birlikte geri aldı."
```
**Her iki uç da 0 GÜN farkla (±30 değil, TAM AYNI GÜN) eşleşiyor** — bu,
proje standardının ÇOK üstünde bir senkron. **C2** denetimi (aşağıda) bunu
GENELLEŞTİRİYOR: her C kaydının `f`/`t`si için ±30 gün eşiğini otomatik
ölçer.

### `§8` çakışma — iki C kaydı / C×A-B

İki alt-soru ayrıştırıldı ve AYRI denetimlere bölündü (**C3**, aşağıda):
```
① İki C kaydı aynı bölgede (kapsama.kutu kesişir) aynı zaman diliminde
   (f/t kesişir) aktifse → HANGİSİ geçerli BELİRSİZDİR, bu bir İHLALDİR.
② Bir C kaydı ile A/B'nin kendi ataması (yerlesimler.js'in `s:`/`d:`
   dönemi) ÇELİŞİRSE → bu betikte YALNIZ BİLGİ AMAÇLI raporlanıyor
   (gerçek A/B çözümü — o tarihte o noktanın hangi dönem'e düştüğü —
   AYRI bir çapraz kontrol betiği gerektirir, bu görevde YAPILMADI,
   D107: ölçülemedi).
```

---

## ② YENİ DENETİM ADAYLARI — dördü de yazıldı, İKİ YÖNDE sınandı

**🔴 D187 UYGULANMASI:** bugün `data/hukuki_sinirlar.js` YOK, tek veri
`denetim/TASLAK-hukuki_sinirlar.js`de (2 kayıt — biri bu görev SIRASINDA,
başka bir oturum tarafından EKLENDİ, bkz. aşağıdaki not). "0 ihlal" TEK
BAŞINA bir başarı SAYILMADI — her denetimin betiğin İÇİNE gömülü bir
**sentetik bozuk kayıt** (`SENTETIK_BOZUK`) ile İKİ YÖNDE sınandığı bir
**öz-sınav** bloğu var (`oz_sinav()`), betik HER koşuda önce bunu çalıştırır.

### C1 — Taraf künyesi geçerliliği
```
NE SORUYOR   : taraflar[] iki elemanlı mı, ikisi de devletler.js'te (veya
               "osmanli" özel durumunda) GERÇEK bir id mi, ve C kaydının
               [f,t) penceresinde HER İKİ taraf da (kendi f/t'sine göre)
               VAR mı?
NASIL ÖLÇÜLÜR: devletler.js node ile ayrıştırılır (kendi ayrıştırıcı
               YAZILMADI, D023), id kümesiyle karşılaştırılır.
BEKLENEN     : 0 sorun — ama bu sayı c1_taraf_gecerliligi()'nin DÖNDÜĞÜ
               liste, otomatik "temiz" ilan ETMEZ (aşağıya bak).
İKİ YÖN      : ① sentetik bozuk (["osmanli","balkan-devletleri"]) →
               "balkan-devletleri" gerçek değil → ✓ YAKALADI
               ② GERÇEK Midye-Enez tarafları (["osmanli",
               "bulgaristan-kralligi"]) → temiz geçmeli → ✓ DOĞRU
```
🔴🔴 **BU DENETİMİN İLK KOŞUSU KENDİ HATASINI BULDU (ve düzeltildi,
D049/D107: hata SİLİNMEDİ, düzeltme İÇİNDE damgalandı):**
`"osmanli"` **`devletler.js`'te KÜNYE OLARAK YOK** — o dosya YABANCI
devletler dizinidir, Osmanlı ayrı ele alınır (`js/app.js`nin kendi
`OSMANLI_SYNTH` sabiti AYNI özel durumu tanıyor). İlk koşuda C1,
Midye-Enez'in GERÇEK verisinde `"osmanli"`yı **yanlışlıkla reddetti** —
yani düzeltilmeseydi, muhtemelen HER GELECEK C kaydının en sık tarafı
olan `"osmanli"` YÜZDE YÜZ yanlış-pozitif üretecekti. **Sentetik testim
bunu YAKALAMAMIŞTI** (sentetik kaydımda "osmanli" zaten kullanılıyordu
ama onu AYRICA "temiz geçmeli" diye sınamamıştım) — yakalayan GERÇEK
veriydi. Düzeltme: `devlet_ix`e `osmanli: ("1281-01-01", None)` sentezi
eklendi (js/app.js'in kendi kuralıyla tutarlı) VE bir REGRESYON KİLİDİ
(kalıcı öz-sınav maddesi) eklendi ki bu hata bir daha SESSİZCE geri
gelmesin.
📌 **D010'un kendi dersinin YENİ bir kanıtı: sentetik test YETMEZ, GERÇEK
veriyle de sınamak gerekir** — sentetik veri yazarın KENDİ kör noktasını
miras alır.

### C2 — Kronoloji senkronu (Değişmez 2'nin C ekseni)
```
NE SORUYOR   : C kaydının f/t'si ±30 gün içinde bir kronoloji maddesiyle
               eşleşiyor mu? (Değişmez 2'nin BİREBİR aynı sorusu, kaynağı
               yerlesimler.js yerine HUKUKI_SINIRLAR.)
NASIL ÖLÇÜLÜR: olaylar*.js + kronoloji_*.js'teki TÜM `t:` günleri taranır
               (regex, KENDİ ayrıştırıcı — burada meşru, çünkü tek soru
               "gün var mı", tam alan şeması gerekmiyor), en yakın günün
               farkı hesaplanır.
BEKLENEN     : fark <= 30 (her iki uç için ayrı ayrı)
İKİ YÖN      : ① sentetik bozuk (f:1650-03-15, rastgele tarih) → madde
               YOK → ✓ YAKALADI (2 hata, hem f hem t)
               ② Midye-Enez → HER İKİ UÇ DA 0 gün farkla eşleşti → ✓
```

### C3 — Çakışma (C×C zaman+mekan)
```
NE SORUYOR   : iki C kaydının kapsama.kutu'su KESİŞİYOR mu VE [f,t)
               pencereleri ÇAKIŞIYOR mu?
NASIL ÖLÇÜLÜR: bbox kesişim testi (basit dikdörtgen) + tarih aralığı
               kesişim testi.
BEKLENEN     : 0 çakışma
İKİ YÖN      : ① iki ÖZDEŞ sentetik kayıt → çakışma → ✓ YAKALADI
               ② gerçek 2 kayıt (Midye-Enez Trakya'da, Mısır-Sudan 22.
               paralelde — coğrafi olarak UZAK) → çakışma yok → ✓
⚠️ **2 kayıtla bu denetim "anlamlı" DEĞİL** — D187 ruhu: "çakışma yok"
sonucu, kayıt sayısı arttıkça ANCAK o zaman gerçek bir sınav olur. Betik
bunu HER koşuda AÇIKÇA yazıyor, sessizce "temiz" demiyor.
```

### C4 — Kaynak bütünlüğü (Emre'nin kuralı: "C tamamen belgeye/hukukî
anlaşmaya dayanır", "kaynak antlaşma metninin KENDİSİDİR")

🔴 **BU EN ÖNEMLİSİ, görev metninin kendi vurgusuyla — ve ölçülebilir
olduğu doğrulandı:**
```
NE SORUYOR   : kaynak.tur / kaynak.madde / kaynak.alinti ÜÇÜ DE dolu mu
               (boş, "bulunamadı", "-" DEĞİL)? alinti gerçek bir alıntı
               kadar UZUN mu (>=20 karakter, özet/yorum değil)?
               kaynak_ikincil alanı VAR mı (dolu YA DA "aranmadı" diye
               AÇIKÇA damgalı — SESSİZCE eksik OLAMAZ, D107)?
NASIL ÖLÇÜLÜR: doğrudan alan varlığı/uzunluk kontrolü.
BEKLENEN     : 0 sorun
İKİ YÖN      : ① sentetik bozuk (kaynak:{tur:"",madde:"",alinti:""},
               kaynak_ikincil YOK) → 4 hata → ✓ YAKALADI (tur+madde+
               alinti+ikincil-eksik)
               ② Midye-Enez → tur="antlaşma metni (neşir)", madde="Madde
               II (Article II)", alinti=141 karakterlik GERÇEK antlaşma
               metni, kaynak_ikincil={tur:"TDV...", not:"aranmadı..."}
               → 0 hata → ✓
```

---

## 🔴🔴 C1'İN GERÇEK VERİDE BULDUĞU İKİNCİ SORUN — `misir-sudan-22-paralel-1899`

Betiği çalıştırırken `TASLAK-hukuki_sinirlar.js`de BAŞKA BİR OTURUMUN
(bu görev sırasında, tahtadan gelen "Sykes-Picot tipi aday" sevkine
cevaben) eklediği **ikinci bir kayıt** bulundu — SEMA-C'nin kendi notu
("İKİNCİL KAYIT: bu turda EKLENMEDİ... cevap gelirse eklenecek") artık
BAYAT, kayıt gerçekten eklenmiş. C1 onu çalıştırınca:

```
`misir-kavalali` C kaydı bitmeden (1923-10-29) ÖNCE bitti (1914-12-18)
— taraf o tarihte yoktu
```

**Bu GERÇEK bir kusur, C1'in yanlış-pozitifi DEĞİL.** Kaydın kendi
yorumu bunu zaten İTİRAF EDİYOR: `"misir-kavalali" (Mısır Kavalalı
Hanedanı) 1899'da hâlâ aktif (t:1914-12-18)` diyor, ama kaydın KENDİ
`t:`si `"1923-10-29"` — yani `ingiliz-sudani` künyesinin ESKİ pencere-
sonu placeholder'ından **DEVRALINMIŞ** (`t_kaynak` alanı bunu AÇIKÇA
söylüyor). 📌 **Bu, bu oturumun BUGÜN DAHA ÖNCE (T ALANI ŞEMASI görevinde)
tam olarak tanımladığı sorunun AYNISI**: bir künyenin `t:`si atlas
penceresinin sonuysa, ondan MİRAS alan başka bir kayıt da aynı YANLIŞ
varsayımı taşır. **Öneri: bu C kaydının `t:`si `1914-12-18`e (misir-
kavalali'nin GERÇEK sonu, İngiltere'nin Mısır'ı resmen himayesine
alması) çekilmeli** — bölgenin GÜNEY tarafı (`ingiliz-sudani`) 1923'e
kadar sürse bile, KUZEY tarafın (`misir-kavalali`) kimliği 1914'te
DEĞİŞTİĞİ için sınırın kendisi (ya da en azından KİM olduğu) o tarihte
yeniden değerlendirilmeli.

---

## 🔴🔴 EK — M-3463 GENİŞLEMESİ: Emre C'nin tanımını düzeltti, iki YENİ denetim eklendi

Görev sürerken Emre C'nin kapsamını büyüttü: *"C uygulanınca artık tavan,
enklav düzeltme, koridor doldurma, boşluk kapatma, arazi bölüşme filan
hiçbir şey kalmaz. Belgede ne varsa o çizilir."* Kapsama kutusu içinde
A/B'nin SEZGİSEL mekanizmaları (emilme dahil) KAPANIYOR — bu, `SEMA-C-
0911.md §9`da zaten şemaya işlendi (`kapsama.sezgi_kapali`, `gereken_
cografya`, `hat.tur:"nokta-kumesi"`). İki YENİ denetim eklendi:

### C5 — Kapsama kaplama (görevin kendi ifadesiyle "en tehlikeli yer")
```
NE SORUYOR   : kapsama.kutu İÇİNDEKİ HER GERÇEK yerleşim, gereken_
               cografya'da anılıyor mu? Anılmıyorsa: sezgi kapalıyken bu
               nokta HİÇBİR mekanizmayla bir tarafa atanmaz → Değişmez
               1 ihlali (delik).
İKİ YÖN      : ① sentetik eksik liste (2 noktadan 1'i eksik) → ✓ YAKALADI
               ② sentetik TAM liste → ✓ DOĞRU (temiz geçti)
```
🔴🔴 **GERÇEK VERİDE ÇARPICI SONUÇ:** Midye-Enez'in kapsama kutusunda
(40.5-42.0K/25.8-29.3D) **44 GERÇEK yerleşim** var (İstanbul, Kırklareli,
Edirne, Tekirdağ dahil) ve kayıt henüz `gereken_cografya` TAŞIMIYOR (M-3463
öncesi yazıldı) — yani BUGÜN uygulansaydı **44 nokta sahipsiz kalırdı.**
Aynı desen 7 kaydın 7'sinde de: **hiçbiri henüz göç etmemiş**, C5 hepsini
"`sezgi_kapali` yok, GÖÇ GEREKİYOR" diye işaretliyor. **Bu C5'in İLK
gerçek işi** — bir sonraki uygulama turu bu göçü YAPMADAN `sezgi_kapali:
true` yazarsa harita delinir.

### C6 — Belgenin saydığı yerler atlasta var mı (İKİNCİ KAPI dahil)
```
NE SORUYOR   : gereken_cografya'daki her kalem (yerleşim/nehir/dağ)
               GERÇEKTEN atlasta var mı? Nehirler için İKİ KAPI (ad
               listesi ∪ scalerank<=5.0) — TEK kapıya bakıp yanlış hüküm
               vermemek için (kardeş oturumun Şattülarap dersi AYNEN
               uygulandı).
```
🔴🔴 **BU DENETİMİN YAZIMI SIRASINDA ÜÇ KENDİ HATAM BULUNDU VE DÜZELTİLDİ**
(D049/D107 — hiçbiri silinmedi, düzeltme İÇERDE damgalandı):
```
① Parantezli isimler ("Tuna (Danube)", "Sava (nehir)") norm() sonrası
   BUYUK kümesiyle eşleşmiyordu → ana ad + parantez içi alternatif ad
   AYRI AYRI denendi (denetle.py'nin `_madde_yeri_aniyor` deseni AYNEN
   taşındı, D023). Düzeltmeden ÖNCE Sava/Tisza/Tuna YANLIŞLIKLA "yok"
   çıkıyordu — üçü de gerçekten BUYUK'te VAR.
② 600 karakterlik ad→lat/lon arama penceresi (B-UCUZ-PARÇALAR'dan
   KOPYALANMIŞTI) `Suçava (Suceava)` gibi ÇOK UZUN `neden:`/`kaynak:`
   alanı taşıyan kayıtlarda YETMİYORDU — nokta SESSİZCE kaçıyordu.
   2000'e çıkarıldı, ölçüldü: Suçava artık yakalanıyor.
③ `atlasta_var:"taranmadı"` gibi bir STRING damga, Python'da
   `bool("taranmadı")==True` olduğu için YANLIŞLIKLA "yanlış beyan"
   sayılıyordu — string değerler artık "damga" (ölçülemedi) olarak AYRI
   işleniyor, doğru/yanlış karşılaştırmasına sokulmuyor.
```
📌 **Üçü de D010'un aynı dersini tekrarlıyor: bir denetim yalnız
SENTETİK veriyle değil GERÇEK veriyle de sınanmalı** — sentetik
testlerimin hiçbiri bu üç hatayı yakalayamazdı çünkü onları YAZAN kişi
(ben) aynı kör noktayı sentetik veriye de taşımıştı.

**Düzeltmeden SONRA gerçek veride kalan GERÇEK bulgular:**
```
🔴 `avusturya` / `lehistan-litvanya` devletler.js'te YOK — gerçek id'ler
   `habsburg` / `lehistan`. 4 Karlofça kaydı bunu taşıyor.
   ⚠️ AMA BU TEK BAŞINA "yazarın hatası" değil — `avusturya` yerlesimler.js
   ailesinde `d:`/`s:` alanı olarak **173 KEZ** kullanılıyor (`habsburg`
   yalnız 2 kez) — yani C kaydının yazarı YERLEŞİK bir konvansiyonu takip
   etti, ama o konvansiyonun KENDİSİ devletler.js'in dizini ile UYUŞMUYOR.
   Bu, bu görevin kapsamı DIŞINDA bir ÖNCEDEN VAR OLAN sistemik boşluk
   (muhtemelen "künyesiz" sınıfının bir üyesi, `denetle.py`nin zaten
   izlediği bir kova) — burada YALNIZ İŞARETLENDİ, düzeltilmedi.
🟡 `kaynak.madde` alanı 5/7 kayıtta BOŞ — ama bu kısmen bir ŞEMA
   TUTARSIZLIĞI: bu kayıtlar `madde` yerine `ad:"karlofca"` (TDV madde
   başlığı) kullanıyor. Emre'nin M-3329 kuralı (antlaşma metni birincil,
   TDV onu AKTARIYORSA kural bozulmuyor) burada muhtemelen İHLAL
   EDİLMİYOR — ama alan adı standartlaşmalı (`madde` mi `ad` mı, TEK
   isim seçilmeli).
🟡 `Korent kıyısı` kaydı `tur:"bolge"` taşıyor — şemanın üç türüne
   (yerlesim/nehir/dag) uymuyor. Yeni bir tür mü gerekiyor, yoksa bu
   kayıt YANLIŞ mı sınıflandırılmış — KARAR gerektiriyor, ben karar
   VERMEDİM.
```

### ③ Önceki maddeler (C1-C4) hâlâ geçerli mi?

Evet — dördü de yeni 6 kayıtla (Karlofça'nın parçaları) tekrar çalıştı,
hiçbiri güvenilmezleşmedi. C1 yukarıdaki avusturya/lehistan bulgusunu
ZATEN kendi mekanizmasıyla yakaladı (yeni bir değişiklik gerekmedi).

### ④ Kapsama kenarında süreksizlik — ÖLÇÜLEMEDİ, ama çerçevesi net

Bu soru (bir yerleşim C alanının içinde ama peteği dışına taşarsa ne
olur) **gerçek petek geometrisi olmadan yanıtlanamaz** — `arac/` donuk.
Çerçeve: `kapsama.kutu`nun kenarında, İÇERİDE `gereken_cografya`nın
belirlediği sahiplik, DIŞARIDA A/B'nin Voronoi/emilme sonucu geçerli
olacak; ikisinin kenarda ÇAKIŞMAMASI (aynı petek her iki kuralda da AYNI
tarafa düşmesi) SEMA-C'nin kendi SINAV 2'sinin (referans-koşu diff) işi.
Bu betik bunu SIMÜLE edemez — D107: konum/çerçeve verildi, ölçüm
YAPILAMADI.

---

## Öz-değerlendirme (D107)

- **ÖLÇÜLDÜ:** Midye-Enez'in kronoloji senkronu (bağımsız, iki ayrı
  dosyada, 0 gün farkla). Dört denetimin dördü de İKİ YÖNDE (sentetik +
  gerçek) çalıştı ve GEÇERLİ çıktı — hiçbiri `GÜVENİLMEZ` damgası almadı.
  C1'in kendi hatası (osmanli) BULUNDU ve DÜZELTİLDİ, regresyon kilidi
  eklendi. `misir-sudan-22-paralel-1899`'un `t:` sorunu bulundu.
- **BULUNAMADI:** —
- **ÖLÇÜLEMEDİ:** C×A/B nokta çelişkisi TAM olarak çözülmedi (yalnız
  BİLGİ satırı üretiliyor, gerçek A/B karşılaştırması ayrı bir betik
  ister). SEMA-C'nin kendi SINAV 2/3'ü (referans-koşu diff, zaman sınırı
  testi) `arac/` donuk olduğu için koşulamadı — bir sonraki koşuda
  (koşu 10, `denetle.py`ye taşındıktan sonra) tamamlanmalı.

---
🤖 Generated with [Claude Code](https://claude.com/claude-code)
