# İNİŞ KONTROL LİSTESİ — KOŞU 22 (FAZ 0)

Koordinatör (YILDIRIM BAYEZIT) 09:15-09:30'da bunu uygular. Hazırlandı 06:20,
koşu sürerken — **amaç: iniş anında karar vermemek.**

---

## 🔴 0. İLK KURAL — DOSYA LİSTESİ EZBERDEN OKUNMAZ

KOŞU 21 (`14174ef7`) **33 dosya** taşıdı ve bu bir **ŞABLON**, bir liste değil:
```
30  data/*.js + data/paket_kunye.json
 1  denetim/DEGISMEZ-KOSU21-HAVVA.log
 1  index.html                      (sürüm damgası ?v=rNN)
 1  veri-kaynak/motor_kara.geojson  (§5: GİRDİ DEĞİL ÇIKTI)
```
⚠️ KOŞU 22'nin kümesi FARKLI olabilir — `paket_23` yeniden paketleme konuşuldu,
ve paket sayısı kırılma sayısına bağlı. ⇒ **Liste HAVVA'nın commit'inden
OKUNUR:**
```bash
git fetch origin --quiet
git show --name-only --format="%h %s" <HAVVA'nın commit'i>
```
📌 Bu, `D219`un ("hangi dosyanın canlı olduğu yalnız `GIRDI_DOSYALARI`'ndan
okunur") iniş yüzü: **hangi dosyaların üretildiği yalnız KOŞUNUN KENDİ
COMMIT'İNDEN okunur.** Aşağıdaki liste karşılaştırma içindir, kopyalanmak için
değil.

---

## 1. ÖNCE OKU, SONRA AL

```bash
① git fetch origin --quiet && git rev-list --count HEAD..origin/main   # 0 olmalı
② git log --oneline origin/kosu/22 -3                                  # dal var mı
③ git show --name-only --format="%h %s" <commit>                       # LİSTE
④ HAVVA'nın teslim mesajındaki DÖRT SATIRI oku (aşağıda ⑤)
```
🔴 **ÜÇ ŞEY DOĞRULANMADAN DOSYA ALINMAZ:**
```
ⓐ koşunun kendi `denetle.py` çıkışı       → 1 ise DUR (aşağıda §3)
ⓑ `DEGISMEZ-KOSU22-*.log` commit'te VAR MI
ⓒ taban: koşu `e54e60df` üstünde başladı; arada main çok ilerledi —
   bu NORMAL ve YAYINI DURDURMAZ (`§9`: *"koşu çıktısı her zaman bayattır,
   yine de yayınlanır"*). Durduran yalnız koşunun KENDİ ihlalidir.
```

## 2. ALMA BİÇİMİ — birleştirme YOK

```bash
git checkout origin/kosu/22 -- <③'ten gelen dosyalar, ADIYLA>
```
⚠️ `git merge` YAPILMAZ. `§7`: **üretilmiş `data/*.js` çatışması
birleştirilmez, yeniden üretilir.** Dosyalar olduğu gibi alınır.
⚠️ `index.html` de alınır (sürüm damgası içinde) — ama o dosya KOORDİNATÖRÜN:
almadan önce **kendi bekleyen düzenlemem var mı** diye bak. Şu an YOK
(FAZ 2'nin `olaylar_once1281_zincir_1010.js` satırı HENÜZ eklenmedi; o satır
FAZ 2'de, bu inişten SONRA).
⚠️ `veri-kaynak/motor_kara.geojson` ÇIKTIDIR, girdi sanıp atlanmaz.

## 3. ÇIKIŞ KODUNA GÖRE — ve `8a` İSTİSNASI

```
0  temiz          → al, yayınla
2  ÖLÇÜLEMEDİ     → al, yayınla; ölçülemeyen soruyu ADIYLA `§1.5`e işaretle
1  İHLAL          → 🔴 DUR
```
🔴 **`1` gelir ve TEK ihlal `8a` ise: YAYIN DURUR, kararı ben veririm.**
(HAVVA'nın emrinde bu yazılı; burada da duruyor.)

## 4. ALDIKTAN SONRA — sıra bağlayıcı

```bash
py arac/uret_devirler.py        # uret_petek'ten SONRA  (HAVVA koştuysa atla)
py arac/renk_olc.py             # 🔴 veri değiştiyse ŞART
py arac/denetle.py              # tek kapı
py arac/surum_damgala.py        # ?v=rNN yükselt
py arac/denetle_yayin.py        # yayın kapısı
git push origin main            # = YAYIN · Pages gecikmesi ~40-60 sn
```
⚠️ Koşu bittiği an ≠ yayın indiği an; yayın inene kadar motor donuk (`§9`).

## 5. 🔴 HAVVA'NIN RAPORUNDAN ADIYLA İSTEDİĞİM DÖRT SATIR
```
① 8a Hanak        KAYBOLDU mu KALDI mı
② Tehuantepec
③ Kıbrıs 1000-1192
④ 1000-1280 görüntüsü
```
Dördü gelmeden iniş TAMAM sayılmaz — bunlar koşunun **kabul ölçütü.**

## 6. ⚠️ BU KOŞUNUN BİLİNEN KUSURU — sayaçlar

İşçi 2 **çöktü** (GEOS segfault `0xC0000005`, 02:27:46). Çıktı EKSİK DEĞİL
(yedek yol 175 devleti ana süreçte hesapladı, 61'i çökmeden önce diske
yazılmıştı) **ama:**
```
🔴 GOVDE-CAKISMA ve EKLEYİCİ KAPI sayaçları YALNIZ ANA SÜRECİN PAYI
   (logun kendisi beyan ediyor) ⇒ bu koşuda ALT SINIR, ölçüm DEĞİL
   ⇒ `§1.5`e KOYULMAZ; `ölçülemedi` diye ADIYLA işaretlenir
```
📌 **ÜRÜN SAĞLAM, ÖLÇÜSÜ SAKAT** — ikisini ayırt etmek bu inişin en kolay
kaçırılacak şeyi.

## 6b. 🟢 DİFF'LER SINANDI — 07:00, koşu sürerken, AYRI WORKTREE'DE

Tek tek değil **İNİŞ SIRASINDA, KÜMÜLATİF** denendi (`origin/main` `0f893331`
üstünde, `/c/atlas-sira-sinav`, ana ağaca DOKUNULMADI):
```
FAZ1   SAHIPLIK-KAPSAM-1010-v2.diff                 UYGULANDI
FAZ1   D5-GUN-1010-v2.diff                          UYGULANDI
FAZ1   KASA-DIKIS-KAPI-1010.diff                    UYGULANDI
FAZ2a  YER-YAMA-SESSIZ-7-1010-KOORD-v2.diff         UYGULANDI
FAZ2b  LAB-KONUM-ONERI-1010-v3.diff                 UYGULANDI
FAZ2b  LAB-KONUM-ONERI-1010-v3-ikame.diff           UYGULANDI
FAZ2b  LAB-KONUM-ONERI-1010-v3-balasagun-not.diff   UYGULANDI
FAZ2c  ZAMAN-Z5-1009-KOORD-v4.diff                  UYGULANDI
FAZ2k  KUNYE-SUMER-7-1010-v2.diff                   UYGULANDI
⇒ 16 dosya: 3 arac/*.py · 7 data/*.js · 1 sınav · 5 YENİ dosya
   (hüküm listesi · iki defter · D5C defteri · KAPSAM sınavı)
```
🔴 **NİÇİN TEK TEK YETMEZ:** on diff tek tek `apply --check` geçebilir ve
**sırayla çakışabilir** — her biri öncekinin değiştirdiği satırların üstüne
geliyor. `D269`un dersi: *`--check` çatışması bir teşhis değil*, ve
`--check` İKİ AĞAÇTA ayrı sonuç verir (`autocrlf`) ⇒ **sınav İNİŞ AĞACINDA
yapıldı.**
⚠️ Ve bu sınav **bir fotoğraftır:** `main` ilerledikçe ya da yeni diff
geldikçe (`SAHIPLIK-KUR-KAPI` · `D5-GUN-v3`) **yeniden koşulur.**
Betik: `scratchpad/diff_sira.sh` (ayrı worktree kurar, iner, kaldırır).

🔴 **BİR UYARI, sınavdan çıktı:** `data/yer_yama_1923_1945.js` **DEĞİŞİYOR**
(SESSIZ-7-v2 dokunuyor) — ve bu, LAB'ın karantina uyarısındaki dosyanın
kendisi: *"karantinadaki `yer_yama_1923_1945.js` etkinleşirse Kandehar ve
Angkor'un tam zincirini geri yazar."* ⇒ Dosya **karantinada KALIR**; iniş
sonrası o iki kayıt **adıyla** kontrol edilir (`§5.1` açık kalemim).

## 7. İNİŞTEN SONRA SIRA
```
FAZ 1  KAPILAR (veriden ÖNCE): SAHIPLIK-KAPSAM + hüküm listesi + hızlı kip
       + 🔴 KASA'nın DİKİŞ KAPISI v2 (ESKI_UFUKLAR + gun() kıyası, tek diff)
FAZ 2  VERİ — `KAMPANYA-SUMER-2000.md §10 ⑤` sırası (2a…2q)
FAZ 3  MOTOR PARTİSİ + SÜMER BLOĞU (tuz bir kez değişir)
FAZ 4  tam inşa + yayın
```
🔴 Ve `§1.5` **koşu sonrası `py arac/durum_tablosu.py --yaz` ile** tazelenir
(`D199`: elle yazılmaz) — ama ⑥'nın iki sayacı elle `ölçülemedi` işaretlenir.

---

## 🔴 8. TAM İNŞA PARTİSİ — ÜÇ KOL, TEK TUZ DEĞİŞİMİ (10 Ekim 08:20)

**Emre'nin kararı (bu sabah): *"mö paketini indirelim."*** FAZ 3'ü FAZ 4 ile
birleştiriyorum — tam inşa gerektiren HER ŞEY tek koşuya biniyor.
📌 Niçin: üç kol ayrı koşarsa **21-24 saat**, tek koşuda **7-8**. Tuz bir kez
değişir, önbellek bir kez ıskalar (`§9.1 ②`).

```
① MÖ BLOĞU   origin/makine/emrelic-nokta 7100bd5f · …-kunye-2 cd5828f8
   NOKTA-SUMER-1010.diff              12 nokta (ANA)
   NOKTA-SUMER-1010-B10.diff           9 nokta — 🔴 KESİŞİM ÖLÇÜLECEK
   KUNYE-SUMER-7-1010-v2.diff   🔴 BU DA ÇIKTI — v3 BEKLİYOR (aşağıda ⓔ)
   NEGATIF-YIL-1010-A.diff             js/suzgec.js
   NEGATIF-YIL-1010-B-v2.diff          🔴 uret_petek.py + girdi.py ⇒ TUZDA
② BOYA PARTİSİ  (renkler.py ⇒ TUZDA) — origin/makine/umit c6daf618
   teuton-devleti #6c0cf0 (ΔE 13,51) · bavyera #ea9618 (13,12) ·
   nagpur-bhonsle #b424d8 (14,08) · renk_olc yeni ihlal 0 · ardıl
   ÖLÇÜLEMEDİ 7 → 0
   ➕ BOYA-BORC-1009-v2 de `renkler.py`ye dokunuyor ve İNMEMİŞ ⇒ **AYNI
      COMMIT'te** iner (iki sırada da temiz; hunk :3356 ↔ :3119)
   🔴 MISIR PARTİDE DEĞİL — ölçüm kalemi ÇÜRÜTTÜ (aşağıda ⓒ)
③ TUZ/DAMGA     TUZ-YUKSEKLIK-1010 öneri (c)  ⇒ uret_petek.py TUZDA
   yukseklik.dem_izi() {ad, boyut, sha256} → _EGIM_IZI → log + 4 URETIM_IZI
```

### 8.1 🔴 ÖLÇÜLMÜŞ İKİ TUZAK — iniş anında kontrol edilecek
```
ⓐ NEG-B'nin SINAV DOSYASI ÇAKIŞIYOR
   denetim/ARAC-NEGATIF-YIL-B-SINAV-1010.py main'de ZATEN VAR
      main  15.196 bayt · 397c00c6 · 10-10 02:04
      diff  "new file mode 100644" · "--- /dev/null" · @@ -0,0 +1,295 @@
   ⇒ diff o commit'ten ÖNCE üretilmiş ⇒ DİFF'İN KOPYASI ESKİ
   ÇARE: --exclude=denetim/ARAC-NEGATIF-YIL-B-SINAV-1010.py
   🔴 ŞART: main'in sürümü yamalı ağaçta KOŞTURULUR ve iki yönde ısırdığı
   GÖSTERİLİR — dışlanan bir sınav, çalıştığı doğrulanmadan "var" sayılmaz.
ⓒ 🔴 "MISIR 51 KAYIT" KALEMİ ÇÜRÜDÜ — ve hata KOORDİNATÖRÜN OKUMASINDA
   Ölçüldü (BOYA-PARTISI-1010, c6daf618): `misir-sultanligi` ve
   `misir-kralligi` HEM KÜNYELİ (devletler.js:7523/7530) HEM RENKLİ
   (renkler.py:3147-3148, #4ed224 / #48d224) ve **57 yerleşim ikisini de
   `s:`te kullanıyor.** 51 kayıttaki *"KUNYE+RENK BEKLIYOR"* notu BAYAT.
   📌 Kusur tarayıcıda DEĞİL: o kalemleri `ENGEL-DONULMUS` (= engel kalkmış,
   kayıt künyeyi ZATEN kullanıyor) kovasına doğru koymuştu. **Ben o kovanın
   İÇERİĞİNİ okuyup ADINI dikkate almadım** ve bir boya borcu sandım —
   `D271`in (*kovanın adı sınıfını belirlemez*) TERS yüzü: burada ad DOĞRUYDU,
   okuyan yanlış okudu.
   ⇒ Parti kalemi değil **iki ayrı iş**: ① bayat not temizliği (yerlesimler 7
   + afrika 44) ② 🔴 EMRE KARARI: `misir-sultanligi` ↔ `misir-kralligi`
   ardıl çakışması **ΔE 1,0** (57 geçiş) — yani Sultanlık→Krallık geçişinde
   haritada GÖRÜNÜR DEĞİŞİKLİK YOK. `§1`in amacı (*kronoloji ile haritanın
   birbirini doğrulaması*) gereği ÖNERİM **ayrı renk** `#9cd824` (ΔE 13,46);
   alternatif aynı hex + `PAYLASIM` beyanı (`ONERI-MISIR-BOYA-ANAHTARI-0906 §④`).
ⓑ B10'un 9 NOKTASI MÜKERRER OLABİLİR
   yazan kıta: "DOLGU §91 onları SUMER-KUNYE'nin sayıyor, mükerrer riski"
   ⇒ ANA 12 ile B10 9'un kesişimi ÖLÇÜLÜR (normalleştirilmiş ad + 3 km).
   Mükerrer varsa B10 DÜŞER.
```

### 8.1b 🔴🔴 MÖ'NÜN İKİ ÖN KOŞULU — PARTİ BUNLAR OLMADAN İNEMEZ
Ölçüldü (`DIZGI-TARIH-TARAMA-1010`, 227 site: 153 `arac/*.py` AST taint +
19 js). **NEGATIF-YIL-A İNDİ ama bu ikisini KAPATMADI** — yani partiyi
"motor yaması var" diye güvenli sanmak YANLIŞTI:
```
④ js/suzgec.js   sahipAnahtari :422 · isgalAnahtari :553 · aktifVAdi :614
   `p.f <= gs < p.t` DİZGİ kıyası · MÖ penceresinde **"" dönüyor**
   (doğrusu "s:ahameni")
   TÜKETİCİLER: harita süzgeci · kamera `app.js:13648` ·
                🔴 `arac/odak_cozum.js:239` = YAYIN KAPISI odak nöbetçisi
   ⇒ KUNYE-SUMER yayınlanırsa **MÖ haritası BOŞ SAHİPLE boyanır**
⑤ arac/_sahiplik_uygula.py  maddesi_var :181 (+ :166 regex `^\d{4}`)
   MÖ gününü "sorma" sayıp **True** döndürüyor (= madde VAR)
   ⇒ NOKTA-SUMER yazılırken **Değişmez 2 SUSAR.** KUR-KAPI bunu ÖRTMEZ.
   ⚠️ Ve aynı işlevin 1281/1923 sınırları UFUK 1000-1945'e göre BAYAT.
```
🔴 İkisi de `CLAUDE.md §3`ün YAZICI/DENETLEYİCİ ayrımının vakası: ⑤ bir
**YAZICI** ve değişmezi susturuyor — kusuru BULMUYOR, **YAZIYOR.**
✅ **İkisi de TUZDA DEĞİL** ⇒ FAZ 1'e girer, tam inşa beklemez:
```
FAZ 1'e EKLENDİ (mevcut beşliden SONRA):
   NEGATIF-YIL-A2   suzgec.js'in üç kıyası → GUN.gun       (MÖ YAYININDAN önce)
   MADDE-VAR-MÖ     maddesi_var → gun.gun + sınırlar girdi.UFUK'tan
                    (NOKTA-SUMER YAZIMINDAN önce)
```
📌 Öteki AÇIK-SESSİZ 27 kalem (`[:4]` yıl anahtarı — MÖ 330..339 tek `-033`e
düşüyor · `denetle_anakronizm:316` 14 gün kayma · `app.js:15186` *"50"→1950*)
bugün tetiklenmiyor (MÖ veri 0) ve 57'si NEG-B-v2 inince kapanıyor.
🟢 `rotus.js` MÖ'yü **YÜKSEK SESLE** reddediyor (ÇÖKER) — bu bir kusur
değil, **sessiz yanlışın yeğlenen alternatifi.**

### 8.1c 🔴 ⓔ KÜNYE DE ÇIKTI — "ETKİSİZ" GEÇERLİ DEMEK DEĞİLDİ
Sabah `KUNYE-SUMER-7-v2`yi *"etkisiz olduğu ölçüldü, delik açmıyor"* diye
partide BIRAKTIM. Ölçüm (`NEGATIF-YIL-A2`) bir **`§8` ihlali** gösterdi:
```
makedon.f  -0330-10-18
ahameni.t  -0330-10-22     ⇒ 4 GÜNLÜK ÖRTÜŞME
```
`§8`: *"Dönemler çakışmamalı, ters olmamalı, sıfır uzunlukta olmamalı."*
⇒ **Hükmümün kusuru:** DELİK aradım, **ÇAKIŞMAYI SORMADIM.** *"Etkisiz"*
bir yama, *"geçerli"* bir yama değildir — iki ayrı soru.
⇒ `KUNYE-SUMER-7-1010-v3.diff` bekler: hangi uç kaynaklı (kaynak cümlesiyle),
örtüşme kaldırılır, **boşluk zorla kapatılmaz** (`§4`).

### 8.1d 🔴 VE MÖ'NÜN GERÇEK ÖN KOŞULU MOTOR YAMASI DEĞİL: `s:` DÖNEMLERİ
Ölçüldü (`NEGATIF-YIL-A2` ②): **`NOKTA-SUMER` noktalarının HEPSİ `s:[] d:[]`**
— sahiplik dönemi YOK (K2, K2-B ve B10'da da). ⇒
```
MOTOR-GECISLI ölü peteklerin toprağını DEVREDİYOR — ama devredilecek
   bir SAHİP yok ⇒ yama bu noktalar için TEK BAŞINA ÇARE DEĞİL
KUNYE-SUMER'in 16 MÖ maddesinin HEPSİ ODAKSIZ (sahipli nokta yok)
sentetik kanıt: 11 noktaya ahameni penceresi eklenince -0400-06-15'te
   eski "" → yeni `s:ahameni`, sınırlar DOĞRU  ⇒ A2 + `s:` = ÇALIŞAN harita
```
📌 Ve bu sabah YENİ MÖ bölgeleri için şartnameye yazdığım kural tam bu:
*"🔴 HİÇBİR NOKTAYI `s:`SİZ YAZMA."* Sümer paketi o kuraldan ÖNCE yazılmış
⇒ kural doğruydu, paket ona uymuyor.
🔴 **MÖ'NÜN BEŞLİ ÖN KOŞULU** (hepsi bir sonraki tam inşaya):
```
① NEGATIF-YIL-A2      suzgec.js — FAZ 1'de İNİYOR ✅
② KUNYE-SUMER-7-v3    4 günlük örtüşme kalkar
③ SUMER-SAHIP-1010    21 noktaya KAYNAKLI `s:` · bilinmeyen `bos:`/`bit:`
④ MOTOR-GECISLI       `bit:`li noktaların peteği GEÇİŞLİ devrolur
⑤ NEG-B-v2            MÖ KRONOLOJİ MADDESİ için — aşağıda
```
⚠️ **BU SAYI 08:48'de "DÖRTLÜ"ydü ve 09:00'da BEŞ oldu** — tam uyardığım
bayatlık, kendi belgemde. Sayıyı değiştiren ölçüm (`KRONO-NEG-1010`):
```
degismez2'de gun_no(o["t"]) MÖ'de ValueError ("year -33") ve çağrı :6707
TRY'SIZ ⇒ denetle.py TRACEBACK ile ÇIKIŞ 1 ⇒ otomasyon "İHLAL" okur
DOĞRUSU 2 (ölçülemedi). NEG-B-v2 kapatıyor.
```
🔴 ⇒ **NEG-B İNMEDEN MÖ KRONOLOJİ MADDESİ YAZILMAZ.** Ve bu sınıf artık
**ÜÇ BAĞIMSIZ ÖLÇÜMDE** çıktı (LAB `OLCULEMEDI-TABAN` · PARTİ ajanı ·
`KRONO-NEG`): **çöküş, ihlalden ayırt edilemiyor.** `§3`ün 0/1/2
sözleşmesinin en pahalı ihlali — bir traceback, bir veri hatası gibi
görünüyor.
⚠️ ③'te **künye penceresinden TÜRETİLEN sahiplik bir KAYNAK DEĞİLDİR**
(`§4`: atlas kendi dayanağı olamaz) — ve ölçüldü ki **gövdesi tanıksız uzun
dilim %62 yanlış.** Türetilen dilim ya KASA'nın kaynağıyla teyit edilir ya
`bos:`/`bit:` olur.

### 8.1e 🔴 CANLI RİSK — ZİNCİR KİLİDİ ~11:53'TE YAŞ VEKİLİNİ AŞIYOR
Ölçüldü (`KOSU-YAYIN-KAPI-1010`, yamasız L1 kolu):
```
kos_ve_yayinla.py kilidi bir YAŞ VEKİLİ kullanıyor (240 dk)
yamasız sınav: CANLI PID + 5 saatlik kilit ⇒ zincir kilidi DEVRALDI,
               commit attı ve PUSH ETTİ
dosyanın :241'deki kendi yorumu bu kusuru "düzeltildi" diyor — DEĞİLDİ
```
🔴 **VE BUGÜN CANLI:** KOŞU 22b `kos_ve_yayinla.py --yayinlama` ile koşuyor
(PID 17800, 06:53:49) ⇒ **~11:53'ten sonra kilidi 240 dakikayı geçiyor.** O
andan sonra o zinciri İKİNCİ kez başlatan **canlı koşunun kilidini devralır.**
⇒ **KOŞU 22b bitene kadar `kos_ve_yayinla` HİÇBİR KİPTE ikinci kez
başlatılmaz** (HAVVA ve UMIT teyit etti; hiçbir hat gerçek zinciri
koşturmuyor, sınavlar sahte depoda).
✅ Çare hazır (`700bebd9`): kilit **süreç damgası** olur
(`pid | bas | makine | argv`, `O_EXCL`) · canlı PID ⇒ 3 · ölü ⇒ devralır ·
bozuk/başka makine/ölçülemeyen ⇒ 2 · **yaş yalnız BİLGİ** · kilit yalnız
kendi PID'iyse silinir, **süreç öldürme YOK** (`§7`).
⚠️ **GEÇİŞ:** eski biçimli `.zincir.kilit` yamadan sonra ÖLÇÜLEMEDİ verir ve
**elle silinmesi** gerekir — bilinçli, ve iniş duyurusuna yazılacak.

### 8.1f 🔴 COMMIT LİSTESİ YANLIŞ DOSYAYI CANLI SANIYOR — `§5`in üçüncü tekrarı
```
kosu_yayin'in commit LİSTESİ:  data/devletler_harita.js · data/petek_govde.js
                               İKİSİ DE GITIGNORE'DA (:28, :56)
                               ⇒ diskteyseler add+commit DÜŞÜYOR ve
                                 HİÇBİR ŞEY commitlenmiyor (ölçüldü: K9)
YAYINDAKİ GERÇEK HARİTA:       data/devlet_harita_ust.js  ⇒ LİSTEDE YOK
```
Yamadan önce bu düşüş **çıkış 0 ile örtülüyordu.** ⇒ `KOSU-YAYIN-LISTE-1010`
listeyi `index.html`in `<script src>` satırlarından **türetiyor** (+ dolaylı
yükleyiciler: `geo_coz` dinamik · `paket_*` · `donem_*`), ve türetmeyi
**ADIYLA basıyor** (satır → dosya).

### 8.2 İNİŞ SIRASI — bağlayıcı
```
① KOŞU 22b iner (~15:45-17:00) · §0-§7 uygulanır
② FAZ 1 beşlisi:  KAPSAM-v3 → KUR-KAPI → D5-GUN-v3 → SESSIZ-7 →
                  KASA-GORUNURLUK-SAYAC
   ⚠️ KASA-DIKIS-KAPI kümülatif olarak DÜŞTÜ (arac/denetle.py:7229) —
      yeniden tabanlanmasını BEKLER (ölçüldü 07:55, taban 534633f8)
③ iki tavan YENİDEN ÖLÇÜLÜR ve sabitle AYNI COMMIT'e girer (`§3.4 ②`):
      BEKLENEN_TABAN_OLCULEMEDI = 190   (UMIT 07:08'de ölçtü, koşu sonrası
                                         defterin evreni DEĞİŞEBİLİR)
      BEKLENEN_D5C = 2449
④ PARTİ (①+②+③) tek seferde uygulanır, tuz BİR KEZ değişir
⑤ tam inşa (7-8 saat) + yayın zinciri:
   kodla.py yay → coz-c (İKİ dosya!) → denetle → renk_olc →
   paketle.py yenile → surum_damgala → denetle_yayin
```

### 8.3 🔴 ZEMİN BUGÜN İHLALDE — iniş raporunda "temiz" YAZILMAZ
LAB ölçtü (`LAB-OLCULEMEDI-TABAN-1010`, taban 79ff492a2, 07:48):
```
taze main                         → çıkış 2 (D8: devletler_harita.js YOK)
coz-c TEK dosya (eski §5)         → çıkış 2 (D8: bu kez donemler.js YOK)
coz-c İKİ dosya                   → çıkış 1 🔴 D8a 1517 > tavan 1508 (+9)
                                     körlük: defterde olmayan 18 (hat, gün), 11 hat
bağımlılık/API/ağ sebebiyle ölçülemeyen: 0
```
⇒ **ÖNCE değerleri bunlar.** +9'un VERİDEN mi GÖVDEDEN mi geldiği
`ÖLÇÜLEMEDİ` — gövde KOŞU 21'den (`14174ef7`, motor izi `108ec62b`).
🔴 KOŞU 22b yeni gövde getirince **aynı üç koşu tekrarlanır** ve fark
teşhis edilir. İniş raporu `denetle.py` çıkış kodunu **ADIYLA** basar;
*"bütün değişmezler temiz"* cümlesi bu zeminde YAZILAMAZ.
📌 `CLAUDE.md §5`in çaresi 10 Ekim'de düzeltildi (ikinci `coz-c` satırı
eklendi) — eski hâliyle uygulayan *"D8'i ölçtüm"* sanıyordu.

### 8.4 BEKLEYEN, PARTİYE GİRMEYENLER
```
_sahiplik_uygula.py:430  yukle()'yi ATLIYOR ⇒ AD ÇAKIŞMASI kontrolü YOK
                         (OKU-DOSYA-ATLAMA-1010 ölçüyor) · TUZDA DEĞİL
                         ⇒ FAZ 1'den SONRA inebilir, partiyi beklemez
girdi.py:108             kalem DÜŞTÜ — kontrol :620-626'da ZATEN VAR
MOTOR_ISCI_BETIK         BEYANLI RİSK: motor_izi betiğin ADINI özetliyor,
                         YOLUNU değil ⇒ başka betiğe işaret ettirilirse
                         işçiler tuzun tanımadığı kodla önbelleğe yazar.
                         Bugün teorik (varsayılanda yol yok). Yama YOK.
normalleştirilmiş ad      KAPI AÇILMADI (verim 1: Kordofan 80,5 km)
```
