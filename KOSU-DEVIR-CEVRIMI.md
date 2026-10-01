# KOŞU DEVİR ÇEVRİMİ — üç makineli çalışma düzeni

*1 Ekim 2026 · koordinatör YILDIRIM BAYEZIT · Emre'nin isteği:
"bu konuları derleyip toplayalım ve sistematik hale getirelim."*

Bu belge **tek bir soruyu** cevaplar: bir veri değişikliği, hangi makinede
hangi kapıdan geçerek haritaya ve yayına dönüşür. Bütün sayılar 30 Eylül –
1 Ekim 2026 gecesinde **ölçüldü**; hiçbiri tahmin değil.

---

## 0 · ÜÇ MAKİNE, ÜÇ ROL — ve rollerin ÖLÇÜLMÜŞ gerekçesi

```
              CPU                        çekirdek  RAM (boş)      DİSK boş   node
UMIT      i5-1135G7 2,40 Tiger Lake      4c/8t     15,75 (7,63)   298,5 GB    ✓
KASA      i5-3330   3,00 Ivy Bridge      4c/4t     15,90 (8,62)    17,7 GB    ✓ (1 Ekim'de kuruldu)
EMRELIC   i5-8250U  1,60 Kaby Lake R     4c/8t     11,88 (0,62)   693,5 GB    ✓
HAVVA     i5-1135G7 2,40 Tiger Lake      4c/8t      7,75 (0,31)   341,7 GB    ✗
EMRE      i5-4430S  2,70 Haswell         4c/4t      7,88 (4,09)    82,4 GB    ✗
```

| makine | rol | niçin — ölçüm |
|---|---|---|
| **UMIT** | **KOŞUCU** | Koşu **tek çekirdek sınırlıdır**; Tiger Lake çekirdek başına en hızlı. 298 GB disk DEM (780 MiB) + önbellek (909 MiB) + ham çıktı (492 MiB) için bol. |
| **KASA** | **YAZICI** | RAM'i en iyi ikinci (8,62 GB boş). Yazma işi **RAM'e bağlı**: 30 Eylül gecesi EMRELIC'te 23 oturum çalıştı, boş RAM 0,25 GB'a düştü, pagefile 3.422 MB oldu ve iş **yavaşladı**. KASA o darboğazı açar. ⚠️ Diski koşuya YETMEZ. |
| **EMRELIC** | **OKUYUCU + YAYINCI** | En zayıf CPU — okuma/gözlem için doğru. Ama **693 GB disk** ve **node** var; yayın kapısı node ister (`arac/odak_cozum.js` · `denetle_yayin.py`). |
| HAVVA | yedek koşucu | UMIT'in ikizi ama 7,75 GB RAM; koşu tepesi ~6 GB, dar. |
| EMRE | yedek | en zayıf bileşim. |

🔴 **ÜÇ MAKİNE 3 KAT TOKEN DEĞİLDİR.** Bütün Claude oturumları aynı hesap
limitinden içer. Kazanılan şey RAM ve işlemci, yani **duvar saati** — aynı
limiti daha hızlı işe çevirmek.

🔴 **TEK YAYINCI, mutlak.** `main`e yalnız EMRELIC dokunur ve yayın yüzeyi
(`index.html` · `js/` · `css/` · `data/paket_*.js`) **yalnız orada** değişir.
Gerekçesi ölçülmüş: 30 Eylül'de aynı sıcak yüzeye iki yazıcı olduğu için
`oturumlar/tahta.json` bir kez bozuldu, üç commit dört saat çıkamadı, iki
oturum "push reddedildi" aldı ve bir **yarım yayın siteyi kırdı**.

---

## 1 · ÇEVRİM — yedi adım, her adımın kapısı

```
① YAZ        KASA + EMRELIC'teki oturumlar  →  data/ altındaki KENDİ dosyaları
② KAPI       node --check <her dosya>                          ← işçinin kendi sınavı
③ COMMIT     açık pathspec · git show --name-only ile GÖZLE     ← D223
④ DENETİM    EMRELIC: py arac/denetle.py    TEK SEFER           ← koşunun kapısı
⑤ KOŞU       UMIT: git pull → worktree → uret_petek.py
             → uret_devirler → kodla yay (×4 HEDEF) → kodla on-dilim → renk_olc
             → dal push (main'e ASLA)
⑥ YAYIN KAPISI  EMRELIC: denetle_yayin.py (odak · paket · kodlama · yetim)
⑦ YAYIN      EMRELIC: surum_damgala.py → main push
```

### 🔴 EN ÖNEMLİ AYRIM: KOŞU YAYIN İSTEMEZ, COMMIT İSTER
Motorun girdisi **yalnız** `arac/girdi.py`nin okuduğu 93 `yerlesimler*` dosyası
(+ `goller.js` + `gecitler.js` = motorun anlık görüntüsünde 95). Kronoloji,
künye, arayüz, paket **koşunun çıktısını etkilemez.**

⇒ Koşu ④'ten sonra başlayabilir; ⑥ ve ⑦ beklemesine gerek yoktur. Bu ayrım
30 Eylül gecesi karıştırıldı: yayın kapısı üç ihlal verdi (odak · paket ·
arayüz) ve koşu boşuna bekletiliyordu. Ölçüm ayırdı, koşu başladı.

### 🔴 İKİNCİ AYRIM: koşu SÜRERKEN `data/` ARTIK DONMUYOR
`CLAUDE.md §7` *"koşu sürerken `data/` VE `arac/` donmuştur"* der. O kural
koşu ile geliştirmenin **aynı ağacı paylaştığı** için yazıldı. UMIT kendi
worktree'sinde **sabitlenmiş bir commit'ten** koşarken buradaki düzenleme ona
dokunamaz. ⇒ Donma kalkar. **Koşuyu taşımanın asıl değeri budur.**
⚠️ Tek istisna sürüyor: motor tuzunun dört dosyası (aşağı).

---

## 2 · KOŞU — UMIT'te, adım adım

### ② Worktree ve DEM/önbellek
```
git -C C:\atlas worktree add -b kosuNN C:\atlas-kosuNN HEAD
```
🔴 DEM ve önbellek `.gitignore`ludur, **worktree'ye GELMEZ.** Sabit bağlantı:
```
veri-kaynak\yukseklik\etopo2022_30s_atlas.tif    183,4 MiB
veri-kaynak\yukseklik\etopo2022_30s_dunya.tif    597,1 MiB
_motor_onbellek\motor_onbellek.sqlite            908,7 MiB
```
🔴 **DEM olmadan koşu 30 saniyede kendini öldürür** ve sebebini yazar:
*"eğimsiz koşan motor kusursuz görünen bir harita üretir ve HİÇBİR denetim
bunu görmez."* Bu ölüm bir iyiliktir.
⚠️ **BİRİM TUZAĞI:** aynı dosyalar MB ile 192,3 / 626,1 / 952,9 görünür
(10⁶ ↔ 2²⁰). 30 Eylül gecesi bu iki makine arasında bir "fark" sanıldı;
fark yoktu. ⇒ **Herkes MiB yazar.**

### ③ Üç bayrak — ÜÇÜ DE ŞART
```
set MOTOR_YURUYUS=1
set MOTOR_COL_UFUK_SAAT=56
set MOTOR_UFUK_BANT=40,56,80
py -X utf8 arac\uret_petek.py > kosuNN.log 2>&1
```
🔴 `MOTOR_YURUYUS=1` düşerse koşu **3 saat çalışır, hata vermez, hiçbir şey
yapmaz** — çöl kelepçesi (`_COL_UFUK_SAAT`) ve bant blokları o bayrağın `if`
bloğunun İÇİNDEDİR. Üstelik yayındaki harita yürüyüşle çizilidir; bayrağı
düşürmek haritayı **geriletir.** Bir kez buna çok yaklaşıldı; önbellek
üstverisinden okunarak yakalandı.

Logda şu üç satır **görülmeden** koşu doğru sayılmaz:
```
🚶 MOTOR_YURUYUS=1 … bütçe 40 saat
🏜 ÇÖL KELEPÇESİ AÇIK: çöl ufku 56 saat (282,2 km) · 58 çöl poligonu
Ⓑ ufuk bantları: 40 sa, 56 sa, 80 sa · kontur parçaları …
```

### ④ Kütüphane sürümleri — tuzda DEĞİL, ama hizalanır
```
numpy 2.2.6 · shapely 2.1.2 · rasterio 1.5.1 · scipy 1.18.1 · contourpy 1.3.3
```
🔴 Önbelleğin **tuzu yalnız dört python DOSYASININ** sha256'sıdır; kütüphane
sürümlerini **kapsamaz.** Yani nakil önbellek eski `contourpy` ile hesaplanmış
kontürler taşırken yeni sürüm yeni kontür üretirse motor ikisini aynı havuzda
**karıştırır** ve ne tuz ne `denetle.py` bunu görür. ⇒ Koşucu makinenin beş
kütüphanesi yayıncı makineyle **birebir** aynı tutulur.

### ⑤ Nöbetçi — 60 dakikada bir
Log dosyasının **son değişme zamanı** + son satırlar + python RSS.
🔴 "Bitti" tahminle söylenmez: koşu `data/donemler.js` **oluştuğunda**
bitmiştir (`§10`: *bitti sanıp erken haber vermek, hiç vermemekten kötüdür*).
⚠️ Makine saatleri farklı olabilir — 30 Eylül gecesi EMRELIC ile UMIT arasında
~26 dakika fark vardı ve "rapor gecikti" sanıldı. **Rapor UMIT saatiyle yazılır.**

### ⑥ Koşu bitince — DÖRT komut daha, hepsi şart
```
py -X utf8 arac\uret_devirler.py      # uret_petek'ten SONRA (§9)
🔴 `yay` TEK KELIME KOSMAZ — imza: yay <girdi.js> <dizin> <HEDEF>
#    HEDEF'in varsayilani KASITLI YOKTUR (kodla.py:962): yanlis hedefle kosmak
#    "bir havuzu otekinin adlariyla yazmak"tir. Dort hedefin DORDU kosar:
py -X utf8 arac\kodla.py yay data\devletler_harita.js data devlet   # 171 MB
py -X utf8 arac\kodla.py yay data\donemler.js          data donem    #  56 MB
py -X utf8 arac\kodla.py yay data\petek_govde.js       data govde    #  11 MB
py -X utf8 arac\kodla.py yay data\ufuk_bantlari.js     data bant     # 254 MB
#    (`kodla.py hedefler` tabloyu basar — ezberleme, sor)
py -X utf8 arac\kodla.py on-dilim     # 🔴 AYRI KOMUT — `yay` bunu KOŞTURMAZ
py -X utf8 arac\renk_olc.py           # §9: veriye dokunan her koşudan SONRA
```
🔴 `on-dilim` atlandığında açılış dilimi bayat kalır ve bir teşhisi yanlış
yola sokar — 30 Eylül'de tam bu oldu.

### ⑦ Ham çıktı PUSH EDİLEMEZ
```
HAM (hepsi .gitignore'lu)            KODLANMIŞ (izlenen, ~109 MB)
devletler_harita.js    171 MB        ufuk_bant_parcalar.js   42,95 MB
ufuk_bantlari.js       254 MB        devlet_parcalar.js      32,38 MB
donemler.js             56 MB        motor_kara.geojson      11,02 MB
petek_govde.js        11,1 MB        donem_parcalar.js       10,20 MB
                     ─────────       + ust/on/bolgeler/devirler
                       492 MB        en büyük tek dosya 42,9 MB (GitHub sınırı 100 MB)
```
`kodla.py` çıktıyı diskten geri okur ve bayt bayt karşılaştırır; tutmazsa
**çıktıyı siler** — sessiz bozulma yoktur. Dış bağımlılığı **yoktur**
(AST ile ölçüldü: salt standart kütüphane).

### ⑧ Dala push — `main`e ASLA
```
git add -- <git status'un gosterdigi dosyalar, ADIYLA>
git commit -F <mesaj> -- <ayni adlar>
git push -u origin kosuNN
git show --name-only --oneline HEAD      ← 🔴 GÖZLE DOĞRULA
```

---

## 3 · 🔴 DOKUNULMAZLAR

```
MOTOR TUZU — sha256'ları önbellek anahtarıdır (§9.1)
  arac/uret_petek.py · renkler.py · girdi.py · motor_onbellek.py
  ⇒ birine dokunmak BÜTÜN anahtarları geçersiz kılar
  ⇒ koşu SÜRERKEN dokunmak: motor her aşamada parmak izini sınar ve REDDEDER
     (8 Ağustos: 83 dakika çalışıp en sonda reddedildi)
  ⇒ yamalar denetim/*.diff olarak bekler, TAM İNŞA koşusunda tek seferde girer

YAYIN YÜZEYİ — yalnız EMRELIC
  index.html · js/ · css/ · data/paket_*.js

ÜRETİLMİŞ — elle düzenlenmez
  data/donemler.js · devletler_harita.js · bolgeler.js · petek_govde.js
  veri-kaynak/motor_kara.geojson  (GİRDİ DEĞİL ÇIKTI)
```

---

## 4 · TAHTA — makineler arası kanal ve iki tuzağı

`arac/tahta.py` her yazımda `git pull --rebase` + `push` yapar ⇒ tahta
makineden **bağımsız** senkrondur (1 Ekim: 5714 mesaj, boşluk 0).

🔴 **TUZAK ①: `tahta.py` `main`e PUSH EDER.** Çalışma ağacı temiz değilse
yarım iş yayına taşınır. 30 Eylül'de bir arayüz yaması tam bu yolla çıktı ve
**site kırıldı.** ⇒ Tahtaya yazmadan önce `git status --short` **boş** olsun.
⇒ Koşu sırasında koşucu makine tahtaya **yazmaz** (ağaçta kodlanmış çıktı var);
doğrudan kanal kullanır.

🔴 **TUZAK ②: bekçi tahtayı DOSYA SİSTEMİNDEN okur, git'ten değil.**
`tahta_bekci.py:139` yerel `oturumlar/tahta.json`u okur. ⇒ Aynı makinedeki
oturumlar mesajı **push olmadan** alır; başka makine **almaz.** Aracın
"mesaj kimseye ulaşmadı" uyarısı makineler arası için doğru, aynı makine için
**fazla karamsardır.**

### 🔴 KAYNAK KAPISI — makineler arası ve BİR YALAN SÖYLEDİ
`kaynak_durum.py kapat/ac` yerel `oturumlar/KAYNAK-DURUM.json`u yazar ama
**commit ETMEZ.** Kapı bir DOSYA kapısı olduğu için:
```
ilan eden makinede   → doğru
her ÖTEKİ makinede   → son COMMITLENMİŞ hâli geçerli
```
30 Eylül: yasak 15:28'de ilan edildi, **18:33'te kaldırıldı, commitlenmedi**;
UMIT dört saat önce kaldırılmış bir yasağı okudu ve bekçisini kurmadı — **doğru
davrandı, yalan söyleyen dosyaydı.**
🔴 **Ve tersi daha tehlikeli:** yasak ilan edilip commitlenmezse uzak makine
darboğazdan **habersiz** bekçi kurar.
⇒ KALEM: `kaynak_durum.py`nin `kapat`/`ac` adımlarına commit+push eklenecek.

---

## 5 · DOSYA SAHİPLİĞİ — ve koordinatörün kendi ihlali

`CLAUDE.md §7`: her dosyanın **tek** sahibi var.
🔴 **Uzak makinedeki işçi KENDİ ADLI dosyalarını KENDİ commitler.** `§7.2 ⑦`
("paylaşılan dosyayı koordinatör commitler") tek makineli bir dünyada yazıldı;
koordinatör **başka bir makinede var olan bir dosyayı commitleyemez.**

🔴 **VAKA (1 Ekim):** koordinatör `kronoloji_cok_once1281_dogu_asya.js`yi
KASA'ya verdi, sonra kendisi de ona bir onarım geçişi uyguladı. İki taraf aynı
dosyayı değiştirdi. Çözüm sırası:
```
① koordinatör kendi commit'inden o dosyayı ÇIKARIR
② işçi commitler ve push eder
③ koordinatör kendi yarım işini `git checkout --` ile ATAR
④ işçinin sürümünün ÜSTÜNE yeniden uygular
```
Ölçüt: **hangi iş tekrar üretilebilir?** Koordinatörün 17 geçişi üretilebilirdi,
işçinin 73 maddelik kaynak doğrulaması değildi.
📌 Ders: **dosya sahipliği verildikten sonra koordinatör de dokunmaz.** "Küçük
bir düzeltme" diye dokunmak işçiyi ya beklemeye ya çakışmaya zorlar.

---

## 6 · PATHSPEC — 3530 dosya vakası

🔴 `git status --porcelain` izlenmeyen **DİZİNLERİ** tek satır olarak verir.
Onu dosya listesi sanıp `git add`e vermek, 1 Ekim'de 327 yerine **3530 dosya**
sahneledi ve **gömülü bir git deposu** (`ClaudEmre-kutu`) commit'e soktu.
`D223`in *"dizin pathspec'i YASAK"* kuralı tam bunun içindi ve **yazılıydı**;
ihlal acele ederken oldu.

⇒ Her commit'te **üç kaçak sınavı**, sayıyla:
```
arayuz/paket kacagi   0 olmalı   (js/ · css/ · index.html · data/paket_)
gomulu depo kacagi    0 olmalı
onbellek/taslak       0 olmalı   (*-onbellek/ · *-taslak/ · *-ham/)
```
Ve `.gitignore`da yapısal sigorta: `ClaudEmre-kutu/`.
📌 **Kural insanın hafızası, ignore makinenin hafızası.**

---

## 7 · KAPILARIN EVRENİ — üç araç, üç farklı sayı

30 Eylül gecesi aynı soruya üç araç üç cevap verdi:
```
odak_olc.py          ODAKSIZ 1531  → (odak yazıldıktan sonra) 725
denetle_yayin.py     ODAKSIZ  952
ODAK-KAPAT ölçümü    yüklü evrende 480 · yüklenmemiş +1051
```
Fark **kusur değil EVREN**: biri `data/` altındaki her dosyayı tarar, biri
`index.html`in yüklediğini, biri paketi. ⇒ **Bir sayı okunurken evreni de
okunur.** `CLAUDE.md §11`: *"denetim var ≠ o soruyu soruyor."*

🔴 Ve bunun pratik sonucu: **bağlanmamış bir dosyanın kusuru gizlidir.**
1 Ekim'de 58 madde `yer_id` taşıyordu ve hiçbiri çözülmüyordu; kapı onları
görmüyordu çünkü dosyalar `index.html`de değildi. Bağlandıkları gün ötecekti.
⇒ Bağlamadan ÖNCE kendi taramanı yap.

---

## 8 · YAYIN SIRASI — ve niçin bu sıra

```
① odak alanları     yazılır          (aksi hâlde ⑥ kapısı öter)
② paketle.py yenile                  🔴 ①'den SONRA — paketler index.html'de
                                     YÜKLÜ, ① bitmeden yenilemek odaksız
                                     sayısını ARTIRIR
③ arayüz üçlüsü     birlikte         index.html + js/app.js + css/style.css
                                     🔴 ÜÇÜ BİRDEN ya da HİÇBİRİ
④ denetle.py        TEK SEFER
⑤ denetle_yayin.py
⑥ surum_damgala.py → main push
```
🔴 ③'ün gerekçesi ölçülmüş: 30 Eylül'de yeni `index.html` eski `js/app.js` ile
yayınlandı; eski `bVeriKapisi` `#ufuk-sec`i bulup `sec.options` okudu →
*"TypeError: Array.prototype.map called on null or undefined"*, çağrı
`haritaHazir`dan ÖNCE ve `try`sız ⇒ kurulum yarıda kaldı, `atlas-hazir` hiç
gelmedi, **site açılış animasyonunda takıldı.**
📌 *"Bozulan site, eksik özellikten kötüdür."*

⚠️ Ve `git status`un "temiz" demesi bir dosyanın **bitmiş** olduğunu
söylemez — bir işçinin **kaydedilmiş ama yarım** hâli de temiz görünür.

---

## 9 · TAVANLAR — iki yönde takip

`CLAUDE.md §11`: *"tavan yalnız yukarı değil AŞAĞI da takip edilir."*
İyileşme kayda geçmezse yarınki gerileme `"400 <= 409"` diye **sessizce geçer.**

1 Ekim'de yedi tavan indirildi (`BEKLENEN_ONCE` 409→317 en büyüğü, 92 kalem).
🔴 **Bir tavan bilerek indirilMEDİ ve yükseltilMEDİ:** `BEKLENEN_2S_YIL_BORC`
151 iken ölçüm 164 çıktı. Sebep bir kusur değil **zorunluluk**: 1281 öncesi ve
Sahra altı maddelerinde gün hassasiyeti kaynakta yok, `D210` gereği
`YYYY-01-01` yazıldı. Borç, **doğru davranmanın bedeli** ve görünür kalmalı.
📌 **Tavan iki yönde takip edilir, ama YÜKSELTME bir ölçüm değil bir AFTIR.**

⚠️ İki tavan motor çıktısına bağlı olduğu için koşu sürerken **dokunulmadı**:
`BEKLENEN_ENKLAV_SORGU` (dalın kendi yorumu "kampanya sonunda bir kez yeniden
hesaplanmalı" der) ve `BEKLENEN_D8A/D8B`.

🔴 Motorun **kendi isteği** de bir kalem: koşu logunda
*"TABAN GEVŞEK, BOZUK_KIYI_TABAN = 22 yapılmalı"* (58'den). O sabit motor
tuzunda; `denetim/*.diff` olarak bekler, tam inşa koşusuna biner.

---

## 10 · AÇIK KALEMLER — 1 Ekim 2026 sabahı

```
① odaksız 725 > tavan 480          mekanik kapanmıyor; kalan maddelerin çoğunda
                                   `yer` alanı HİÇ YOK
② ad_esanlam.js ORPHAN             25 kayıt · odak_cozum.js · app.js · odak_olc.py
                                   ÜÇÜ DE ona BAKMIYOR ⇒ Dımaşk↔Şam, Tokyo↔Edo,
                                   Budapeşte↔Budin eşlemeleri kayıp
③ 2 çözülemez odak                 Cáceres (İspanyol, atlasta YOK — havuzdaki
                                   eşleşme BREZİLYA'da) · Ogaden (d/v/s yok)
④ paket bayat 44 kaynak            ①'den sonra
⑤ arayüz üçlüsü                    ①②④'ten sonra ⇒ İKİNCİ YAYIN
⑥ koşu 19 çıktısı                  UMIT'te sürüyor ⇒ ÜÇÜNCÜ YAYIN
⑦ kaynak_durum.py commit etmiyor   makineler arası yalan
⑧ agy/ 890 dosya izlenmiyor        gemini/ ve glm/ izleniyor — tutarsızlık
⑨ BOZUK_KIYI_TABAN 58 → 22         motorun kendi isteği, tuzda, .diff bekler
⑩ 496 açık paket maddesi           hükümleri yazıldı, uygulama kaldı
```
