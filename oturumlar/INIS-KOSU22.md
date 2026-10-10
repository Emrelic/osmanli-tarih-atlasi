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
      BEKLENEN_TABAN_OLCULEMEDI = 190   (UMIT 07:08'de ÖLÇTÜ · koşu sonrası
                                         defterin evreni DEĞİŞEBİLİR)
      BEKLENEN_D5C = 2449               (iki D5 sürümü de AYNI değeri koyuyor)
🔴 **"188" BİR ÖNERİYDİ VE BEN ONU SAYIYMIŞ GİBİ YAZDIM** (LAB ölçtü,
`LAB-DIFF-CARPISMA-1010 ④`): *"'188' HİÇBİR diff'te ya da dalda YOK."*
UMIT onu *"tavan ÖNERİSİ (yazılmadı): 190 → 188, Mersin + Mergen
`kur-oncesi`ne geçiyor"* diye vermişti — **öneri**, ölçüm değil. Ben
belgeye sabit gibi yazdım.
📌 Ve bu, bu gece `§11`e yazdığım kuralın BİREBİR ihlali: *"ÖNERİ üzerinde
ölçülen sayı da bugünkü durum DEĞİLDİR… öneri sayısı GELECEĞİ bugün gibi
gösterir, ve daha sinsidir çünkü TARİHİ YOKTUR."*
⇒ **Geçerli tek değer `190`.** `KUR-KAPI` inince yeniden ÖLÇÜLÜR; çıkan
sayı ne olursa o yazılır (`§3.4 ⓪`: tavan YAZILDIĞI ANDA ölçülür).
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

---

## 🔴 9. İNİŞ SONRASI DUYURULAR — HAZIR METİN, DOĞAÇLANMAZ

Bu inişte **dört şey SIKILAŞIYOR ya da DEĞİŞİYOR**, ve bilmeyen bir oturum
bugün çalışan bir şeyi yarın çalışmaz bulacak. Metinler burada duruyor ki
iniş anında yazılmasın — **doğaçlanan bir duyuru eksik kalır.**
⚠️ Kanal: `tahta.py yaz --kim "YILDIRIM BAYEZIT" --kime "<AD>"` **EMRELIC'ten**
(UMIT'te `tahta.py` kapalı — `main`e push edemediği için commit biriktirip
makineyi kilitler). Başka makinedeki alıcılar için kayıt **o makinenin
kendi dalındaki** bir dosyaya gider.
🔴 Ve bugün `"🔴 DURDURUCU"` biçimi **TANINMIYOR** (TAHTA-ACIL inene kadar)
⇒ duyuruyu yazarken aciliyet gerekiyorsa **`ACIL` (noktasız I)** kullan.

### ⓐ ACİLİYET TESPİTİ BİRLEŞTİ — ve KAPI SIKILAŞTI
```
arac/aciliyet.py  TEK OTORİTE · tahta.py · tahta_bekci.py · tahta_sunucu.py
                  üçü de ONU soruyor (eskiden ÜÇ AYRI tespit, ÜÇ FARKLI CEVAP)
🔴 "🔴 DURDURUCU" ve "ACİL:" ARTIK TANINIYOR — ve DAYANAK İSTİYOR
   (eskiden bu biçimler HİÇ tanınmıyordu ve sessizce kütüğe düşüyordu;
    koordinatörün 05:54'teki durdurucu hükmü böyle kayboldu)
⇒ Dayanaksız bir ACİL/DURDURUCU artık REDDEDİLİR (çıkış 2)
🔴 BEKÇİNİZİ YENİDEN KURUN: eski süreçler ESKİ kodla çalışıyor
⚠️ GEÇİŞ PENCERESİ: yeniden kurulana kadar yazıcı ile bekçi AYRIŞIK kalır
   (yazıcı "kimseyi uyandırmaz" derken bekçi herkesi uyandırabilir)
```

### ⓑ ESKİ `.zincir.kilit` ELLE SİLİNİR
```
kilit artık bir SÜREÇ DAMGASI (pid | bas | makine | argv, O_EXCL)
   canlı PID ⇒ 3 · ölü PID ⇒ devralır · bozuk/eski biçim/başka makine ⇒ 2
   YAŞ yalnız BİLGİ (eskiden 240 dk YAŞ VEKİLİ idi ve canlı bir zincirin
   kilidini DEVRALIP commit + push atabiliyordu — ölçüldü)
⇒ Yamadan sonra eski biçimli bir `.zincir.kilit` ÖLÇÜLEMEDİ verir.
  BİLİNÇLİ. Elle silinir, sonra zincir normal çalışır.
```

### ⓒ `olcum_agaci` ARTIK STANDART — çıplak ağaçta `2` DOĞRUDUR
```
py arac/olcum_agaci.py hazirla      # ~78 sn · 231 MB · fetch + worktree +
                                   #   İKİ hedefi çöz + sha256'yı damgayla kıyas
py arac/olcum_agaci.py kaldir
```
🔴 **Çıplak bir ağaçta `denetle`/`denetle_yayin` artık `2` verir ve bu
DOĞRUDUR** — gerçekten ölçülmemiştir. Sebebi ölçüldü: çıplak ağaç bu gece
boyunca **bir ihlali gizledi** (D8a **1517** > tavan 1508, çıkış 2'nin
arkasında, üç tabanda aynı). ⇒ *"Ölçülemedi bir ihlali GİZLER."*
⚠️ Kova artık **hangi soruyu** ölçemediğini adıyla yazıyor ve **çare
komutunu** basıyor.

### ⓓ YAYIN KAPISI TAVİZSİZ OLDU
```
kosu_yayin ⑥   eskiden `uyari_kodu=True` ile 1, 2 VE ÇÖKME'yi
               "bilinen borç" sayıyordu ⇒ commit + push YİNE atılıyordu
               ve andığı `--yayin-kapisi-uyari` bayrağı YOKTU
🔴 ÖLÇÜLEN VAKA: kapı ÜÇ GÜNDÜR ✗ veriyordu ve yayın SÜRÜYORDU
   (SEKME SESSİZ gerilemesi, 14174ef7 = KOŞU 21 · bisect 123 commit)
   ve KOŞU 21'in COMMIT MESAJI bunu YAZIYORDU
⇒ ③ her zaman ölümcül · ⑥ varsayılan TAVİZSİZ, yalnız
  `--yayin-kapisi-uyari` ile uyarıya iner (bayrak artık GERÇEK) ·
  2 HER ZAMAN durdurur · commit ya da push düşerse 1
⇒ commit yalnız TÜRETİLMİŞ LİSTEDEKİ dosyalar, pathspec ADIYLA, ve
  `git show --name-only` ile GERİ OKUNARAK (eskiden `add -A -- data` +
  pathspec'SİZ commit: başka oturumun indekslediğini de taşıyordu)
```
📌 **Bir commit mesajı KİMSENİN OKUDUĞU bir kayıt değildir** — orada beyan
edilen bir gerileme, beyan edilmemiş sayılır. Bu yüzden bu dört duyuru
**tahtaya** gider, commit mesajına değil.

---

## 🔴 10. KOŞU 22b ÖLDÜ (10:47) — VE İNİŞ ARTIK KOŞUYA BAĞLI DEĞİL

### Ne oldu — HAVVA ölçtü, tahmin değil
```
System olayı 1074 · 10:47:21
  "StartMenuExperienceHost.exe … HAVVA\user kullanıcısı adına …
   yeniden başlat … Diğer (Planlanmamış)"
⇒ ELLE, Başlat menüsünden. Windows Update DEĞİL · ÇÖKME DEĞİL
  (olay 1000 06:53'ten beri YOK) · 6006 kapanış 10:47:26 ·
  Kernel-Boot 20: "son kapatma başarılı"
ÖLEN SÜREÇLER : zincir 17800 · uret_petek 1988 · işçi 18284 · bekçi 20332
NEREDE ÖLDÜ   : 10:43:21 "Yabancı devlet gövdeleri 2s20dk57sn ·
                FAZ 2 bekliyor: ingiltere" · işçi 1: "ingiltere gün
                322/345 (1916-09-01)" ⇒ gövde bitişine ~10-15 dk
KAYIP         : 3 saat 50 dakika
```
⚠️ **`kosu_ayrik_baslat.ps1` kendi notunda yazıyor: "ayrık düzen reboot'u
kurtarmıyor."** Yani bu bir sürpriz değil, **beyan edilmiş bir kırılganlığın
tahsil edilmesi.** Çaresi (aşama damgası + kaldığı yerden devam) MOTOR
işidir ⇒ TUZ ⇒ bu koşuda olmaz. İniş sonrası kalemi.
🔴 Ve asıl kapı KODDA DEĞİL: *"bu makine koşarken yeniden başlatılmamalı"*
cümlesi **makineyi kullanan insana** gider. Emre'nin sabah belgesine yazıldı.

### Reboot'un SESSİZ ikinci zararı
Koşunun öldüğü GÖRÜNÜYOR; **donma ilanının da öldüğü GÖRÜNMÜYOR.**
`kaynak_durum.py kapat --kod KOSU` ilanı da reboot'la gitti ⇒ ilan
edilmeden yeniden başlanırsa UMIT'in yazıcı oturumları tuza dokunabilir ve
`§9.1 ③` korumasız kalır. ⇒ KOŞU 22c'nin başlatma sırasında **③. adım**
olarak eklendi.

### KOŞU 22c — onaylandı, ve önbellek ÖNCE DOĞRULANIR
```
① 🔴 ÖNBELLEK SAĞLAMLIK ÖLÇÜMÜ — başlamadan önce, atlanamaz
   Reboot 48 MB'lık WAL açıkken geldi (son yazım 10:47:21 = reboot
   olayıyla AYNI SANİYE). 1.382 MB'lık bir dosyanın VARLIĞI, içindekinin
   OKUNABİLİR olduğunu söylemez — `§5`in 93 MB vakasının aynı sınıfı:
   dosya VARDI ve YANLIŞTI, varlığı doğruluk sanıldı.
      PRAGMA integrity_check;            → "ok" DEĞİLSE BAŞLATMA
      PRAGMA wal_checkpoint(TRUNCATE);
      SELECT katman, COUNT(*) FROM kayit GROUP BY katman;   ← TABAN
   🔴 Bozuk bir önbellekle sekiz saat koşmak, sıfırdan koşmaktan KÖTÜDÜR:
     sonunda hangi aşamanın gerçekten hesaplandığı ÖLÇÜLEMEZ.
② kendi ölü kilitlerini sil: `.petek.kilit` (pid 1988 ÖLÜ) ·
   `.zincir.kilit` (06:53:49). İkisi de O KOŞUNUN soyundan ⇒ meşru;
   `§7`in süreç öldürme yasağı SÜREÇLERE dairdir, kilit DOSYASINA değil.
③ `py arac/kaynak_durum.py kapat --kod KOSU`  ← reboot'un öldürdüğü ilan
④ tahtaya ilan + 60 sn (`§7`)
⑤ BEŞ BAYRAK + TUZ TEYİDİ: tuz **810b524268d5** çıkmalı; başka bir şey
   çıkarsa önbellek ıskalar (= 7-8 saat) ⇒ DUR. Beyan değil ÖLÇÜM:
   motorun kendi tuz satırı koordinatöre kopyalanır (`§9`).
⑥ ilk "▶ YÜRÜYÜŞ" satırı — gelmezse DURDUR
```
🔴 **AĞAÇ DEĞİŞTİRİLMEZ** — ölçüldü ve koordinatörün ilk fikri ÇÜRÜDÜ:
```
koşu tabanı e54e60df → HEAD = 109 commit
  TUZ dosyalarına dokunan commit          : 0  ⇒ tuz GÜVENDE
  93 `yerlesimler*.js`ten değişen         : 0  ⇒ 4300 nokta BİREBİR AYNI
  `devletler.js`                          : 1 satır (+1/−1) · değişen id: 0
```
⇒ Motorun gözüyle iki ağaç neredeyse AYNI. *"Taze `main`den koş, gecenin
109 commit'i de girsin"* fikri **bir satır** kazandırıp kırılgan bir anda
bir git işlemi riski eklerdi. ⇒ Kazanç ~0 olduğu ÖLÇÜLDÜĞÜ için
DÜŞÜK RİSKLİ yol seçildi: HAVVA kendi worktree'sinde, dokunmadan kalır.
📌 Ve aynı ölçüm HAVVA'nın *"DAYANAK ZAYIF"* dediği tahmini güçlendirir:
önbellek anahtarı `sha256(tuz · katman · parçalar)` — **kalem başına**,
koşu başına DEĞİL (`motor_onbellek.py:66-80`). Tuz aynı + girdi birebir
aynı ⇒ bitmiş aşamaların isabet alması bir temenni değil **mekanizmanın
gereği.** Yine de ÖLÇÜLÜR (①).
🔴 YANLIŞLANABİLİR EŞİK: ilk 30 dakikada `col`/`kusat`/`dolgu` isabeti
**%80'in altındaysa** bir şey yanlış ⇒ DURDUR ve bildir, sekiz saat öğütme.

### 🔴 KARARIN BÖLÜNMESİ — bu iniş için bağlayıcı
```
KOORDİNATÖRÜN : koşu yeniden başlasın mı · hangi ağaçta · hangi sırada ·
                inişin koşuya bağlı olup olmadığı        (§7.1)
EMRE'NİN      : makine iki çekirdekte tam yükte kalabilir mi
                (yani MAKİNEYİ O KULLANACAK MI)
```
⚠️ HAVVA *"karar artık Emre'nin, reboot onun elinden"* dedi — yarısı doğru.
CPU'yu sormak DOĞRU. Ama reboot'un ELLE olduğu ölçüldü, **NİÇİN olduğu
ÖLÇÜLMEDİ**; Başlat menüsünden gelen bir yeniden başlatma *"makineyi
istiyorum"* demek zorunda değil (takılmış uygulama · güncelleme uyarısı ·
alışkanlık aynı olayı üretir). ⇒ Sebebi hükme çevirmemek doğru, **ama
kararı da ona bağlamamak** gerekir: Emre masada değilse koşu saatlerce
boşta bekler. Koşu başlar; Emre *"makineyi kullanacağım"* derse durur.

### 🔴 İNİŞ İKİ GRUBA BÖLÜNDÜ — ETA öldüğü için, ve bu KALICI bir ayrım
Koşuya bağlı bir iniş, gecenin 154 kalemini bir reboot'a rehin verir.
```
A GRUBU — KOŞUYU BEKLEMEZ, planlanan saatte iner
   `INIS-SIRA-1010`in tuza DOKUNMAYAN ve üretilmiş `data/*.js` OKUMAYAN
   bütün kalemleri: veri düzeltmeleri · künyeler · belgeler · diffler
   (Feyzâbâd v2 · Bosna ek29 v2 · KAYIT-GUNU · Ji'an v2 · BAYAT-OZILAN)
B GRUBU — KOŞU 22c BİTENE KADAR BEKLER
   ① tuz yamaları (`girdi.py` tanım düzeltmeleri — `PAKET-1010-UMIT §M`)
   ② koşu sonrası ÖLÇÜLECEK iki tavan (TABAN 190 · D5C 2449)
   ③ üretilmiş haritayı okuyan her ölçüm (D8 · `coz-c` İKİLİSİ, `§5`)
```

### 🔴 10.1 LAB ÖLÇTÜ VE YUKARIDAKİ ②'NİN GEREKÇESİ YANLIŞTI
(`LAB-INIS-AB-1010`, `origin/makine/lab@e9a5ce704` · ağaç `681e2a82`)
```
ÖLÇÜM : BEKLENEN_TABAN_OLCULEMEDI=190  (SAHIPLIK-KAPSAM-v3.diff:1138)
        BEKLENEN_D5C=2449              (D5-GUN-v3.diff:41 · NEG-SONRA.diff:26)
        🔴 İKİSİ DE ÜRETİLMİŞ DOSYA OKUMUYOR
SEBEP : B olmalarının sebebi KOŞU DEĞİL — **A grubundaki veri/yama
        kalemleri bu kümeleri oynatıyor**
```
⇒ Doğru etiket **"koşu sonrası"** değil, **"A-İNİŞİ SONRASI"**. Fark bir
ayrıntı değil bir TAKVİM: koşuya bağlamak onları 22c'nin sonuna
erteliyordu; doğru yer **A grubu tam indikten hemen sonra**, ve
`§3.4 ②` gereği **sabitleriyle AYNI COMMIT'TE.**
📌 Kusur sınıfı: *bir kalemin NİÇİN beklediğini ölçmeden, beklediği şeyi
en görünür sebebe (koşu) bağlamak.* Koşu o anda ölmüştü ve dikkatimi
tutuyordu ⇒ **en taze olay, en kolay gerekçe oldu.** LAB kodda aradı ve
bulamadı; ben koymuştum.
🔴 Ve bir rahatlatıcı ölçüm: **motor çıktısına bağlı YENİ ③ tavanı YOK (0).**
`VERILI_DELIK` (None) · KASA-GORUNURLUK'un üç yeni veri tavanı (110/112/27)
· `2S_YALNIZ_TARAF` · `ONCE` · `ASAN` · `ODAK-TAVAN` · `KAYNAK-TAVAN` ·
`ARDIL_BOSLUK` — hiçbiri üretilmiş dosya okumuyor; `D8A`/`D8B`'yi de
hiçbir kalem değiştirmiyor. ⇒ Korktuğum *"A'da inip de arada kalan
commit'te doğru çıktıyı reddedecek üçüncü bir tavan"* **yok.**

### 🔴 10.2 ÜÇÜNCÜ KOVA: **A-ŞERHLİ** — iner, DOĞRULAMASI beyanla ertelenir
LAB iki sınır kalemi getirdi ve benim ② tanımımın belirsiz olduğunu
gösterdi (`KOSU-YAYIN-KAPI (Z1)` · `ZAMAN-Z1-ARAC`): kodları üretilmiş
dosyaya dokunmuyor, ama **SINAVLARI** `--gercek` kipinde
`devletler_harita.js` istiyor. ⇒ Tanımım harfiyen uygulanırsa B, ruhuyla A.
Ayrımı netleştiriyorum:
```
İNİŞ sorusu     : bu commit `main`e girince DOĞRU mu?        → A/B'yi bu belirler
DOĞRULAMA sorusu: bugün ÇALIŞTIĞINI kanıtlayabilir miyiz?    → A/B'yi belirlemez
```
⇒ **A-ŞERHLİ**: kod doğruluğu taze haritadan BAĞIMSIZ doğrulanabiliyorsa
kalem **iner**, ve koşturulamayan sınav **ADIYLA + KOMUTUYLA** bir listeye
yazılır (`INIS §9`'un duyuru listesine komşu bir kova).
🔴 **İSTİSMAR KAPISI KAPALI — iki şart, ikisi de zorunlu:**
```
① kalemin kendi doğruluğu taze harita OLMADAN gösterilebilmeli
   (birim sınavı · py_compile · node yükleme · ÖNCE/SONRA denetle kıyası)
② ertelenen sınav ADIYLA, KİPİYLE ve KOMUTUYLA yazılmalı —
   "sonra koşturulur" YASAK, "`py denetim/X.py --gercek` · KOŞU 22c
   sonrası" ZORUNLU
```
📌 Bu, `boya_gerekli:true` deseninin SINAV yüzü (`§3.4 ⑦`): *beyanlı borç,
sessiz borçtan iyidir* — ve `INIS-SIRA`nın zaten "sınavsız indi" diye
işaretlediği altı kalemle (F4/F5/F6/K2/P5/P6) **aynı kova.** O altısı bu
kovanın adsız hâliydi; artık adı var.
⇒ HÜKÜM: `KOSU-YAYIN-KAPI (Z1)` ve `ZAMAN-Z1-ARAC` **A-ŞERHLİ.** İkiye
bölmek (kod A / sınav B) gereksiz: sınav ayrı bir kalem değil, bir kalemin
ertelenmiş yarısı — ve ayrı kalem yapmak envanteri şişirir.

### 🔴 10.3 BİR YIĞIN, DONMA SINIRININ İKİ YAKASINA BÖLÜNEMEZ
LAB'in çatışması: `F2 SAHIPLIK-KUR-KAPI` ve `F6 KASA-DIKIS-v3` A'da ama
B'deki `F1`/`F3`'e bağlı ⇒ tek başlarına `main`e inemezler.
```
HÜKÜM — RİSK ASİMETRİSİ karar verir:
   F2/F6 → B'ye ÇEKİLİR (varsayılan)
   F1/F3 → A'ya ALINMAZ
```
Gerekçe: F2/F6'yı aşağı çekmek **hiçbir şeyin doğruluğunu** değiştirmez,
yalnız ZAMANLAMASINI. F1/F3'ü yukarı almak **iki kalemin RİSKİNİ**
değiştirir — ve F1/F3 ① (TUZ) yüzünden B'deyse zaten İMKÂNSIZ: koşu
sürerken tuz donmuştur (`§9.1 ③`).
⚠️ LAB: F1/F3'ün hangi ölçütten B'de olduğunu yaz. ① ise konu kapanır
(F2/F6 B'de kalır). YALNIZ ② ise F1/F3+F2/F6 dördü birden **A-ŞERHLİ**
olabilir — o zaman yeniden bakarım.
📌 Genel kural: **bağımlılık yönü kovayı belirler, tersi değil.** Bir
yığının en kısıtlı üyesi bütün yığının kovasını tayin eder.

### ⚠️ 10.4 VE BİR YOL HATAM — `INIS-SIRA-1010.md` DEDİĞİM YERDE DEĞİL
```
söylediğim : oturumlar/INIS-SIRA-1010.md
GERÇEK     : denetim/INIS-SIRA-1010.md · origin/makine/umit@371961c8e
             blob 43cd59af · origin/main'de YOK
```
⇒ İşçilere *"`oturumlar/INIS-SIRA`yı oku"* dedim ve o yolda dosya yok.
Bu gece **üçüncü** kez aynı aile (dosya henüz yazılmamıştı · alet main'de
değildi · şimdi dosya BAŞKA YERDE). LAB doğru davrandı: yolu arayıp
bulamayınca **evreni kendi kurdu** ve sayıları `INIS` ile kıyasladı —
154 · 52 inmiş · 50 uygulanabilir · 52 çakışan **birebir tuttu.**
⚠️ Ama LAB'in şerhi duruyor: sayılar tuttu, **AD AD aynı olduğu
doğrulanamadı**; `envanter.json` hiçbir dalda yok ve takipsiz diffler
yüzünden LAB 132, `INIS` 134 diyor. ⇒ İki fark ADIYLA bulunacak;
`ÖLÇÜLEMEDİ` değil, **AÇIK KALEM.**
🔴 ⇒ `INIS-SIRA-1010.md` **`main`e gelecek** (A grubu, koordinatör kalemi):
bir inişin otoritesi tek bir makinenin dalında duramaz — `§7.2`nin
*"dalda çalışan bir makine `main`e yazılanı HİÇ görmez"* şerhinin
tersi: **`main`de olmayan bir otoriteyi hiçbir makine göremez.**

### 📊 10.5 ÖLÇÜM SONUCU — ve öngörü İKİNCİ KEZ aynı yönde yanıldı
```
          ÖNGÖRÜ (LAB §0)          ÖLÇÜM
A              95                   134
B              45                    20   (2'si zaten inmiş ⇒ AÇIK 18)
ÖLÇÜLEMEDİ     14                     0
yeni ③ tavan    3                     0
evren: 154 KALEM / 154 DİFF / 359 DOSYA · 86 kalem YALNIZ `data/*.js`
B ölçüt dağılımı: yalnız ① 11 · yalnız ② 5 · ①+② 1 (NEG-B-v2) · yalnız ③ 3
```
🔴 Öngörü **KÖTÜMSER** çıktı ve LAB bunu adlandırdı: *"arama türü işte bu
gece ikinci kez aynı yön."* ⇒ KASA'nın tahmin disiplini refinement'ının
(**yanlılığın YÖNÜ çıkarsanamaz; SORU TÜRÜ belirler**) ikinci teyidi:
**ARAMA/SINIFLAMA türü sorularda yanlılık KÖTÜMSER** (beklenenden az
engel bulunur), çünkü tahmin eden kişi engeli HAYAL EDEBİLİYOR ama
engelsizliği sayamıyor. ⇒ Bundan sonra bir arama işine öngörü yazan
oturum bu yönü ADIYLA yazar ve ona göre pay bırakır.

⇒ `§9.1 ③`ün dördüncü şartı (*koşu bitene kadar tuz içeren hiçbir commit
`main`e girmez*) **B grubuyla** korunuyor; A grubu `main`i ilerletirken
HAVVA'nın worktree'si yerinde kalır ve tuz değişmez.
📌 Ayrım kalıcı çünkü sebebi kalıcı: **bir inişin bir koşuya bağlı olması
bir gereklilik değil, bir ALIŞKANLIKTI.** Kalemlerin çoğu motor çıktısına
dokunmuyor; dokunanlar ADIYLA B grubundadır.

### 🔴 10.6 B TEK KOVA DEĞİL — ÖLÇÜT KOVAYI BELİRLİYOR, VE 8 KALEM BUGÜNE AÇILDI

LAB'in ölçüt dökümünü kendi ağacımda bağımsız saydım (`LAB-INIS-AB-1010.csv`,
154 satır): **A 134 · B 20** · ① 11 · ② 5 · ①+② 1 · ③ 3 · açık B **18**.
Birebir tuttu. Ama döküm `10.1`in sonucuyla birlikte okununca B'nin
**tek kova olmadığı** görünüyor:

```
B③   3 KALEM   D5-GUN-1010-v3 · D5-GUN-1010-NEG-SONRA · SAHIPLIK-KAPSAM-1010-v3
     ⇒ KOŞUYU BEKLEMİYOR. `10.1`de ölçüldü: bu üçü üretilmiş dosya
       OKUMUYOR; bekledikleri şey A GRUBUNUN İNMESİ. ⇒ A tam indikten
       HEMEN SONRA iner, ve tavan (190 · 2449) YENİDEN ÖLÇÜLÜP
       SABİTLE AYNI COMMIT'TE yazılır (`§3.4 ⓪`+②).
B②   5 KALEM   DENETLE-TARIH-KALAN-1008 · KOSU-YAYIN-LISTE-1010 ·
               KOS-VE-YAYINLA-ADD-1010 · OLCUM-AGACI-1010 ·
               YAYIN-KAPI-OLCULEMEDI-1010
     ⇒ **A-ŞERHLİ ADAYI** (`10.2`): kodları taze harita olmadan
       doğrulanabiliyorsa iner, `--gercek` sınavı 22c sonrasına ADIYLA
       ve KOMUTUYLA ertelenir.
     ⚠️ İKİ İSTİSNA, ve sebebi `§9`: `KOSU-YAYIN-LISTE` ve
       `KOS-VE-YAYINLA-ADD` YAYIN ZİNCİRİ kalemleri. `§9` bu inişte
       zincirin yayın kiplerini KULLANMIYOR ⇒ bu ikisi inse bile
       bu gece hiçbir şeyi değiştirmez, ama `kosu_yayin`ın
       "her sıfır-dışı kodu borç sayma" kusurunu KAPATIYORLAR
       ⇒ İNMELERİ İYİDİR (kapı sıkılaşır), yalnız sınavları ertelenir.
B①  11 KALEM   BOYA-BORC ×2 · BOYA-PARTISI ×2 · C3-YURUYUS-SUZGEC ·
               GIRDI-TEKIL · TUZ-DORT-DOSYA-v3 · TUZ-YUKSEKLIK ·
               ZAMAN-PAKET ×2 · ZAMAN-Z1-MOTOR
     ⇒ **KOŞU 22c BİTENE KADAR BEKLER, İSTİSNASIZ.** Tuz donmuştur
       (`§9.1 ③`) ve bunlar tam o dört dosyaya dokunuyor.
B①+② 1 KALEM   NEGATIF-YIL-1010-B-v2  ⇒ ① BASKIN, bekler.
```
🔴 **HÜKÜM: B③ + B② (ikisi şerhli) = 8 kalem BUGÜNE açıldı.** Koşuya bağlı
kalan gerçek sayı **12**, benim dün akşam sandığım gibi "koşu bitmeden
hiçbir şey inmez" değil.
📌 Ders, `§3.4 ⑤`in kardeşi: **bir kovanın ADI (B) içindekinin SINIFINI
belirlemez** — ve bu, `D271`in (*kovanın adı sınıfını belirlemez*) birebir
tekrarı, bu kez benim kendi kovamda. "B" adını koyarken onu *"koşuyu
bekleyenler"* diye tanımladım; ölçüm 20 kalemin **8'inin** koşuyla
ilgisi olmadığını gösterdi. Kovayı ÖLÇÜT yapar, AD değil.

### 🔴 10.7 F YIĞINI — F2/F6 B'ye ÇEKİLMİYOR, SIRAYA giriyor
`10.3`te varsayılan olarak *"F2/F6 → B"* demiştim. `10.6` onu geçersiz
kıldı: F2/F6'nın bağlı olduğu F1/F3, **B③**te — yani KOŞUYU beklemiyorlar.
```
SIRA (hepsi BUGÜN):
   ① A grubu (134 kalem; 5'i 11:10'da indi)
   ② B③ — üç tavan kalemi, tavanlar YENİDEN ÖLÇÜLÜP sabitle aynı commit'te
   ③ A-SON — SAHIPLIK-KUR-KAPI-1010 · KASA-DIKIS-KAPI-1010
             (A'dalar ama F1/F3'e bağlı ⇒ onlardan SONRA)
   ④ B② — şerhli, sınavları ertelenerek
   ⑤ (22c bittikten sonra) B① 11 + B①+② 1
```
⇒ `10.3`ün *"bir yığın donma sınırının iki yakasına bölünemez"* kuralı
yerinde duruyor — ama **F1/F3 donmanın İÇİNDE DEĞİLMİŞ.** Kural doğruydu,
sınırı yanlış yere çizmiştim. ⇒ Çare kovaları değiştirmek değil
**SIRA vermek**: bağımlılık bir kova sorunu değil, bir SIRA sorunudur —
ve yalnız ikisi aynı kovada olamadığında kova sorunu olur.
📌 LAB'in DIFF-CARPISMA ölçümü (8 zorunlu sıra) bu yüzden kıymetli: sıra
zaten ölçülmüştü, ben onu kova diye okudum.
