# TESPİH — 4 Eylül 2026

> Sıra `FAYDA ÷ EMEK`e göre. Kalem kapandıkça işaretlenir; ertesi gün
> **buradan** devam edilir. 20 dakikalık uyandırıcı (`cron fb6be0f1`)
> her turda bu dosyayı okur.

## 🔒 GÜNÜN KISITI — KOŞU 5 **ÖLDÜ**, KOŞU 5B KOŞUYOR

```
🔴 KOŞU 5   21:26:47 başladı · PID 19380 · ~00:47'de ZİNCİRİN KENDİ ZAMAN
            AŞIMIYLA kesildi (dk=200, başlığı "~75 dk"). Koşu 4b 16s09dk
            sürmüştü ⇒ 200 dakikalık tavan onu ASLA bitiremezdi.
            3 SAAT 20 DAKİKA boşa gitti.
🟢 KOŞU 5B  2026-09-05 02:40:26 başladı · uret_petek.py PID **21540**
            bekçi PID 20172 · zincir tavanı 200 → **1440 dk**
            beklenen bitiş **~18:40** — SABAHA YETİŞMEZ, bu bir ÖLÇÜM
            (16s09dk koşu 4b'nin gerçek süresi), tahmin değil.
log       kosu_ayrik.log + kosu_zincir.log · bekçi denetim/BEKCI-KOSU4C.log
DONMUŞ : data/*  ·  arac/uret_petek.py · renkler.py · girdi.py
SERBEST: js/app.js · css/style.css · index.html · denetim/* · oturumlar/*
```

🔴 **ÖLÇÜM SÜREÇTEN YAPILIR, KİLİT DOSYASINDAN DEĞİL.**
```
DOĞRU   Get-Process -Id 21540        ya da  tasklist /FI "PID eq 21540"
YANLIŞ  .petek.kilit'i okuyup "PID yazıyor ⇒ canlı" demek
```
Koordinatör bu gece iki saat boyunca "PID canlı" diye rapor etti çünkü
**dosyayı** okuyordu; dosyadaki PID'in **yaşadığını** hiç ölçmedi. Ölümü
bir işçi oturum (`1923 SINIRLARI`) kendi işine başlamadan önce ölçüp
buldu — üç bağımsız kanıtla (log · tasklist · kilit).
📌 Ve bekçi de **yanlış konuşuyordu**: yalnız `donemler.js` damgasına
bakıyordu, koşu ölünce damga da değişmez ⇒ ölümü *"henüz bitmedi"* diye
okudu. Artık `.petek.kilit`ten PID okuyup her turda canlılığa bakıyor
(`🔴🔴 SUREC OLDU` + 3 alçak beep). ***Bir yanlış "iyi gidiyor",
sessizlikten tehlikelidir — çünkü sorgulanmaz.***

⚠️ Log 02:40'tan sonra SESSİZ görünür — motor stdout'u tamponluyor, bu
   BELGELİ ve normal (`CLAUDE.md §9`).
🟢 Çift koşu kilidi (`arac/kosu_kilit.py`) İLK GERÇEK İŞİNİ YAPTI: ölü
   PID'i kendiliğinden devraldı, elle temizlik gerekmedi.

### KOŞU 5 NELERİ TAŞIYOR (hepsi 4 Eylül'de indi, hiçbiri ekranda yoktu)
```
RENK    21 kimlik · komşu çakışması 4→0 · yakın-ama-değmeyen 12→1
R1      don_kose ORTAK IZGARAYA oturdu — dikiş boşluğunun kök sebebi
R7      yeni nöbetçi: "örtülmeyen kara km², kıta kırılımıyla"
A2      çift koşu kilidi motorun içinde
_KUS_BEKLENEN  8 ad → 159 (bayat fotoğraf tazelendi, büyüme atfedildi)
```

### 🔴🔴 KOŞU 5 BİTİNCE **KAPI DURACAK** — BU BEKLENEN, VE ÇARESİ HAZIR

⚠️ **BU BLOK BİR OTURUMUN BAĞLAMINDAN KURTARILDI.** Bilgi 4 Eylül gecesi
yalnız koordinatörün kafasındaydı; `§7.1⑦` (*"sende kalan hiçbir bilgi
kurtarılamaz"*) gereği buraya yazıldı. Koordinatör gece ölürse devralan
bunu okuyup devam edebilsin.

```
NE OLACAK   zincir üretimi bitirecek, YAYIN KAPISI (denetle_yayin.py)
            REDDEDECEK ve yayın YAPILMAYACAK.
NİÇİN       data/altlik.js BAYAT — kaynağı `arac/uret_petek.py` 4 Eylül'de
            değişti (R1 · R7 · _KUS_BEKLENEN) ve koşu `motor_kara.geojson`u
            da yeniden yazıyor. Zincir `uret_altlik.py`yi KOŞMUYOR.
```

**ÇARE — sırayla, ~10 dakika:**
```bash
py arac/uret_altlik.py          # motor_kara.geojson → data/altlik.js
py arac/uret_bekleyenler.py     # BEKLEYENLER.md    → data/bekleyenler.js
py arac/denetle.py              # altı değişmez
py arac/renk_olc.py             # veri değişti ⇒ ŞART (§9)
py arac/denetle_yayin.py        # şimdi TEMİZ çıkmalı: taze 7 · bayat 0
py arac/durum_tablosu.py --yaz
py arac/surum_damgala.py
git add -- data index.html && git commit -F <mesaj> && git push
```

🟢 **VE ZİNCİR KALICI OLARAK DÜZELTİLDİ** (`arac/kos_ve_yayinla.py`):
`uret_altlik` + `uret_bekleyenler` adımları eklendi. Ama **çalışan süreç
eski kodu yükledi**, yani bu düzeltme **bir sonraki koşudan** itibaren
geçerli. Koşu 5 yine kapıda duracak.
📌 Aynı arıza 4 Eylül sabahı koşu 4b'de de oldu ve üç üreteç elle koşuldu.
Kapı doğru davrandı; eksik olan ZİNCİRDİ.

---

### 🔴 KOŞU BİTİNCE — kabul ölçütleri ÖNCEDEN yazılı
```
① R1 SINAVI   py denetim/ARAC-DIKIS-0904-olc.py  (alet 4 Eylül'de kuruldu)
              TABAN (koşu 5 ÖNCESİ, 1281-01-01, 232 gövde):
                 DİKİŞ 640 parça · 34.318 km²
                 KIYI KENARI 42.233 · KAPSAMA 357
              ⚠️ Reçetenin "96 parça"sı 2731 petekli yayından; AYNI TABAN
                DEĞİL. Kıyas ŞU 640 ile yapılacak.
② R7 ilk gerçek sayısı (bugünkü mertebe %20,4 — motorun KARA'sı gölleri
   çıkardığı için birebir beklenmiyor)
③ devletler_harita.js boyutu (bugün 53,74 MB · R1 dondurma kümesini
   GENİŞLETİR ⇒ büyüme beklenir; aşarsa çare R1'i geri almak DEĞİL,
   seyreltme toleransıdır)
④ denetle.py + renk_olc + yayın kapısı TEMİZ
⑤ 21 rengin EKRANDA gözle sınanması — alet "meşru" der, "güzel" demez.
   Beşi Anadolu beyliği (karaman · aydin · teke · ramazanoglu ·
   inancogullari) ve belirgin değişti.
```

---

## 🌙 GECE NÖBETİ — 5 Eylül 04:15 · BEŞ OTURUM SEVK EDİLDİ

Emre'nin gece talimatı: *"hazır kıtaları kullan sabaha kadar çalış… pek çok
konu var, konulara sen kendin analiz ile ne eksik karar ver."*
Beşi de gece boyunca teslim etti, **beşi de boştaydı** ⇒ yeniden sevk edildi.
Yamalar `denetim/` altına yazılıyor; birleştirme koşu 5b bitince (`§KUYRUK`).

| oturum | yeni iş | çıktı |
|---|---|---|
| `1923 SINIRLARI` | 1918-23 halef künyeleri (≥8) | `YAMA-KUNYE-1923-0905.json` |
| `NEHİR SÜRTÜNME` | 11 künyede `f:`/`t:` triyajı (A/B/C) | `TRIYAJ-KUNYE-TARIH-0905.md` |
| `KRONOLOJİ BATI AFRİKA 2` | güney-asya, 50 künye | `KRONOLOJI-GASYA-0905.json` |
| `KRONOLOJİ BOŞ KÜNYE` | dünya seyreklik haritası (nokta YAZMA) | `SEYREKLIK-DUNYA-0905.json` |
| `KÜRE GÖRÜNÜM` | "dereler çaylar" tanecik ölçümü | `BULGU-DERE-CAY-0905.md` |

### 🔴 VE BİR SEVKİN ÖNCÜLÜ ÖLÇÜLDÜ, ÇERÇEVESİ ÇÜRÜDÜ *(`§11` — sevk öncülünü doğrular)*
`1923 SINIRLARI` şunu bildirmişti: *"`mezopotamya` ve `suriye-filistin`
bölgelerinin ikisinde de tek künye yok (0/0)."* Koordinatör ölçtü:
```
devletler.js · 591 künye · 27 BÖLGE CİNSİ — ve o ikisi LİSTEDE HİÇ YOK
⇒ "0/0" DOĞRU bir sayıdır ama VAR OLMAYAN bir alan değerini sorar
  (`kim` vs `kimden` vakasının birebir aynısı: 0, "yok" ile "bakmadım"ı ayırmaz)
```
🔴 **Ve asıl düzeltme çerçevede:** Irak ve Suriye 1281-1918 arası **Osmanlı
vilâyetidir** — ayrı künyeleri olmaması kusur değil, **doğru.** Bu çerçeveyle
iş verilseydi, doğru çizilen 600 yıla künye yazılacaktı.
🟢 **Bulgu yine de ayakta:** gerçek boşluk **1918-1923 halefleridir** ve
bağımsız ölçüm onu doğruladı — `1923-10-29`da canlı künye **96/591**; Irak ·
Suriye-Lübnan · Filistin · Ürdün · Mısır 1914-23 · Rif · Tannu-Tuva ·
Harezm/Buhara halefi **gerçekten yok.**
📌 Ders iki uçlu: *bir sevk öncülünü doğrular* — ama doğrularken **bulguyu
çürütmek ile çerçeveyi çürütmek** ayrı şeydir. Burada çerçeve çürüdü, bulgu
ayakta kaldı.

### 🟢 KAPANAN İKİ KALEM
```
NEHİRLER HARİTAYA   Emre'nin isteği ÖLÇÜLDÜ ve YARISI ZATEN KARŞILANMIŞ:
                    ALTLIK.nehir 1454 parça, zoom ≥ 3,5'te çiziliyor.
                    AÇIK KALAN: Natural Earth 10m'de DERE ve ÇAY YOKTUR
                    ⇒ istenen tanecik ile verinin taneciği AYRIŞIYOR olabilir
SİBİRYA YERLEŞİM    KAPATILDI — 54 ostrogun 40'ı zaten atlasta, kalan
                    boşlukların çoğu BEYAN EDİLMİŞ (51 `kasitli_bosluk`)
```

---

## ✅ BUGÜN KAPANANLAR

| # | iş | commit |
|---|---|---|
| 1 | Siyasî katman coğrafyayı örtüyordu → **KİP SEÇİMİ** (⑤ Yumuşak renk) | `932d4cf` · r5589 YAYINDA |
| 2 | 1923-10-29'da yalnız Türkiye görünüyordu | `00975a8` |
| 3 | Katman seçici haritadan butonların içine | `00975a8` |
| 4 | **OWTRAD toplamaya girdi** — kenar 121→295 · bileşen 4→**1** | `e0b0e82` |
| 5 | **KOŞU 4 İNDİ** — Ö9 geçti: `PETEK_GOVDE` 2731→3805 · peteksiz 1074→**0** | `0e7cb11` · r5635 YAYINDA |
| 6 | Kronoloji 200 madde · 56 künye | `f384609` |
| 7 | `KRONOLOJI_*` ① — 146 madde bağlandı (`_`→`-`) | `51c2022` |
| 8 | **Serbest topraklar** — iki katman yıllardır hiç yüklenmiyormuş | `61f6f60` |
| 9 | 🔴 ~~Kronoloji dalga 2 — Okyanusya · Sibirya · Orta Asya~~ **ÇERÇEVE ÇÜRÜDÜ** — «5+8+14 künye» o bölgelerin TOPLAMI; gerçek iş **8 künye** (19'u zaten 4+ maddeli) | — | — | ölçüldü 4 Eylül · aşağıya bak |
| 10 | 🔴 ~~Kronoloji dalga 2 — Avrupa boşlukları~~ **AYNI HATA** — «%43 · %45 · %55» bölgesel boşluk değil; 1-3 madde KÜLLİYATIN NORMU (591'in 304'ü) | — | — | ölçüldü 4 Eylül · aşağıya bak |
| 11 | **A2** çift koşu kilidi + **R1** + **R7** | `93a3f9f` · `89cd681` · `1fd5a20` |
| 12 | Dikiş nöbetçisi kuruldu — R1'in kabul testi ölçülebilir | `23a3e54` |
| 13 | Yanlış alarmlar sustu: `_opaklik_dogrula` · kuşatılmışlık (154 satır) | `e421853` · `d4e56e7` |

🔴 **4'ün TARAYICI DOĞRULAMASI BORÇ.** Mantık `app.js`'ten kesilen GERÇEK
kodla, gerçek veriyle sınandı (9 kalemin 9'u tuttu) — ama canlı sayfada
`isStyleLoaded()` hiç `true` olmadı (koşu + üç oturum makineyi doyurdu).
`C13④` (çıktıyı doğru yerden okuduğunu göster) **koşulmadı**; "doğrulandı"
diye yazılmayacak.

---

### 🔴 #9 ve #10'UN ÇERÇEVESİ ÖLÇÜLDÜ VE ÇÜRÜDÜ — 4 Eylül 2026

İkisi de **bölgesel bir boşluk** tarif ediyordu. Ölçüm başka bir şey gösterdi.

```
KÜRESEL:  591 künye · BOŞ 17 · 1-3 madde 304 · 4+ madde 270
```
⇒ *"1-3 madde"* bir bölge kusuru DEĞİL — **külliyatın yarısından fazlasının
hâli.** #9 ve #10 aynı evrensel durumu iki ayrı bölgesel iş sanıyordu.

**#9'un sayısı da şişikti:** *"5 + 8 + 14 künye"* o bölgelerdeki **toplam**
künyedir, iş değil:
```
OKYANUSYA        5 künye   BOŞ 1 · 1-3 madde 3 · 4+ 1
SİBİRYA-BOZKIR   8 künye   BOŞ 0 · 1-3 madde 2 · 4+ 6
ORTA-ASYA       14 künye   BOŞ 0 · 1-3 madde 2 · 4+ 12
                           ⇒ gerçek iş 8 künye, 27 değil
```
📌 `§11`in *"koordinatörün «hızlı bir bakış» ölçümü, iş dağıtımının tabanı
olunca artık hızlı bir bakış değildir"* dersi. Şartname bu sayılardan
yazılsaydı **1 oturumluk iş için 3 oturum** açılacaktı.

### 🟢 GERÇEKTEN SINIRLI VE İŞ OLAN KÜME: **17 BOŞ KÜNYE**
```
kuzey-amerika  11   teksas-cumhuriyeti · cahokia · cherokee · choctaw ·
                    creek-konfederasyonu · haudenosaunee · powhatan ·
                    natchez · pueblo-bagimsizligi · apaci-ovalar · komanci
guney-amerika   3   charrua · arua · diaguita-calchaqui-konfederasyonu
guney-asya      1   farukiler [1370-1601]
anadolu         1   eyyubi-hisnikeyfa [1232-1462]
okyanusya       1   tui-tonga-imparatorlugu [1220-1845]
```
⚠️ **14'ü Amerika yerli siyasî yapısı.** `§4`ün TDV kapsamı orada yok;
akademik kaynak meşru ama `kaynak:` alanına AÇIKÇA yazılacak. Ve `§4`ün
4 Eylül dersi geçerli: *hassasiyet kaynağı aşamaz* — çoğu için gün değil
yıl bile tartışmalı.

### 🔴 VE BU BİR KARAR İSTİYOR — EMRE'DE
`1-3 madde` 304 künyede. *"Kaç madde yeter?"* sorusunun cevabı yazılı değil.
```
① yalnız 17 BOŞ künye doldurulsun        → sınırlı, 1-2 oturum
② + `1-3 madde`lilere eşik konsun (kaç?)  → 304 künyelik PROGRAM
③ eşik bölgeye göre değişsin (`ONCELIK.md` halkaları)
```
Ölçüt yazılmadan bu iki kalem bir OTURUMA VERİLEMEZ: işçi ne zaman
"bitti" diyeceğini bilemez.

## ⏳ SEVK EDİLDİ — 4 Eylül, üç oturum

| oturum | kimlik | küme | şartname |
|---|---|---|---|
| KRONOLOJİ ORTA AMERİKA | OPUS HAZIR KITA 125 (346 K) | 13 künye · 8'i %0 | `KRONOLOJI-ORTAAMERIKA-0904.md` |
| KRONOLOJİ GÜNEY AMERİKA | OPUS HAZIR KITA 126 (402 K) | 25 künye · 18'i boş | `KRONOLOJI-GUNEYAMERIKA-0904.md` |
| KRONOLOJİ AFRİKA GÖVDE | OPUS HAZIR KITA 127 (527 K) | 69 künye · iskelet | `KRONOLOJI-BATIAFRIKA-0904.md` |

Üçü de **yalnız** `denetim/KRONOLOJI-<AD>-0904.json` yamasına yazar;
`data/devletler.js`ye DOKUNMAZ (koşu sürüyor + tek dosya = sessiz veri kaybı).

🔴 **VE BURADA BİR PLAN ÇÜRÜDÜ, ÖLÇÜMLE.** İlk niyet bölge oturumlarını
(Afrika · Gamerika · Kamerika · Okyanusya · Sibirya) uyandırmaktı — Emre'nin
*"o konuda çalışmış oturumlara iş verebilirsin"* izniyle. Ama izin **şartlıydı**
(*"eğer daha doğru, hızlı, tasarruflu olacaksa"*) ve şart ölçülünce sağlanmadı:
```
Dünya-Afrika-0903     970 K   🔴 ÖNCE YAZ — diskte OLMAYAN iş var
Dünya-Gamerika-0903   944 K   🔴 EMEKLİ ET
Prusya                865 K   🔴 EMEKLİ ET
Sibirya-0903          794 K   🔴 EMEKLİ ET
DUNYA-KAMERIKA-0903   783 K   🟡 "kalan işi TAZE işçiye vermek DAHA UCUZ"
Dünya-Okyanusya       713 K   🔴 EMEKLİ ET
OPUS HAZIR KITA 125   346 K   ← seçilen
```
Bir mesaj bağlamın **tamamını** yeniden taşır ⇒ 944 K'lık oturumu uyandırmak
346 K'lıktan ~3 kat pahalı. Bölge oturumlarının öğrendiği zaten `denetim/`
altında yazılı.

---

### 🟢 ÖNCELİK TABLOSU — "bir sonraki VERİ işi nereye" · 4 Eylül ölçümü

🔴 **İKİ AYRI BÖLÜNTÜ VAR VE AYNI YERİ GÖSTERMİYOR.** Toplamları birbirini
tutmaz; örtüştürmek `§11`in *"yanlış evren"* tuzağıdır.

```
① ALAN EKSENİ (R7 kutuları) — HARİTA nerede boş
   kutu              nokta  örtülmeyen
   Sibirya             106     %43,2   🔴
   Güney Amerika       168     %36,1   🔴
   Doğu Asya           189     %27,2   🔴
   Kuzey Afrika        225     %26,2   🔴
   Güney Asya          131     %23,2   🟡
   Orta Asya            76     %15,3   🟡
   Kuzey Amerika       487     %13,7   🟡
   Sahra altı          627     % 3,5   🟢
   Avrupa              401     % 1,1   🟢
   Anadolu+Rumeli      504     % 0,5   🟢

② KÜNYE EKSENİ (`devletler.js bolge:`) — KRONOLOJİ nerede boş
   bölge              künye  BOŞ  1-3 madde
   kuzey-amerika         59   11     41     🔴
   bati-afrika           51    0     42     🟡
   guney-amerika         25    3     10     🔴
   dogu-afrika           39    0     34     🟡
   guneydogu-asya        59    0     34     🟡
   anadolu               33    1     15     🔴
```

**⇒ HÜKÜM — iki ayrı iş, iki ayrı oturum:**
```
NOKTA işi      → Sibirya · G.Amerika · D.Asya · K.Afrika
                 (harita boş, künyeler fena değil)
KRONOLOJİ işi  → kuzey-amerika · bati-afrika
                 (nokta VAR — Sahra altı 627 nokta / %3,5 boşluk —
                  ama kronoloji YOK)
```
📌 En keskin örnek **Sahra altı Afrika**: 627 nokta, örtülmeyen yalnız %3,5
— haritası neredeyse tam. Ama `bati-afrika` künyelerinin **42/51'i 1-3
maddeli**. ⇒ Orada eksik olan NOKTA değil **KRONOLOJİ**.
Ve tersi **Doğu Asya**: 189 nokta, %27,2 boş — orada eksik olan NOKTA.

⚠️ **Tek tabloya bakıp tek iş türetmek yanlış olur.** #11 (*"dizin TAMLIK"*)
ve #12 (*"tenha bölgelerde şehir"*) bu yüzden AYRI kalmalı: biri künye
ekseninde, öteki alan ekseninde.

---

## 🔵 SIRA

| # | iş | keskinlik | hedef | niçin bu sırada |
|---|---|---|---|---|
| 5 | ✅ **Koşu 4 yayın zinciri** — BİTTİ (r5635) · koşu 5 için ZİNCİR OTOMATİK | — | — | `denetle.py` → `renk_olc.py` → `durum_tablosu.py --yaz` → `surum_damgala.py` → push |
| 6 | ✅ `serbest-hale` · `serbest-cekirdek` — **DÜZELTİLDİ** `61f6f60` · katman 39, ikisi de VAR | %100 | %100 | 🔴 MapLibre ifade hatası (4 konsol hatası) ⇒ **"serbest" topraklar haritada hiç çizilmiyor.** `js/app.js` SERBEST, küçük iş, görünür etki |
| 7 | 🟡 `KRONOLOJI_*` — **ÜÇ AİLE, çerçeve ÇÜRÜDÜ** · ① BİTTİ `_`→`-` (146 madde bağlandı) · ② 566 madde ÇOK KÜNYEYE dağılıyor · ③ 1518 madde BÖLGE derlemesi, künyesi YOK | %7 | %80 | ölçüldü 4 Eylül — ayrıntı aşağıda |
| 8 | ❌ `tur` sözlük kayması — **ÖLÇÜLDÜ, PREMİS ÇÜRÜDÜ · İŞ YOK** | — | — | `kayip`(55) ve `toprak`(24) yazım hatası DEĞİL, yerleşik tür. Uygulansaydı Mandan'ın çiçek salgını «toprak kaybı» olurdu. Kalan iş yalnız BAYAT METİNDİ, düzeltildi. |
| 9 | Kronoloji dalga 2 — Okyanusya · Sibirya-bozkır · Orta Asya | %0 | %80 | 5 + 8 + 14 künye · şartname yazılacak |
| 10 | Kronoloji dalga 2 — Avrupa boşlukları | %0 | %80 | `kuzey-avrupa` 7 künye kuruluş **%43** · `bati-avrupa` son %45 · `orta-avrupa` son %55 · `dogu-avrupa` son %61 |
| 11 | **Emre görev ①**: dizin TAMLIK denetimi | %0 | %85 | *"1281-1923 arası tüm devletlerin var olup olmadığı"* — bu kronoloji dolumundan AYRI iş: eksik KÜNYE aramak |
| 12 | **Emre görev ③**: tenha bölgelerde ŞEHİR | %0 | %80 | *"devletler şehirler kronolojiler"* — şehir ayağı yerleşim noktası işi, `§2` emilme kuralına bağlı |
| 13 | **Emre (K)**: küresel görünüm planı | %10 | %70 | maplibre-gl 4.7.1'de `setProjection` YOK, v5 gerekli. `setTerrain` VAR. Risk: 37 katman + 9 sefer katmanı + 481 DOM işaretçisi v5'te sınanmadı |



### 🔴 #7'NİN ÇERÇEVESİ ÖLÇÜLDÜ VE ÇÜRÜDÜ — 4 Eylül 2026

TESPİH *"veri zaten var, adres yanlış — en ucuz kronoloji kazancı"* diyordu.
Ölçüldü: bu **tek bir kusur değil, ÜÇ AYRI AİLE** ve üçünün cevabı farklı.
Toplam **2230 madde** yüklü ve hiçbirine bağlanmıyor — `devletler.js`'in
kendi 2180 maddesinden **fazla**.

```
① ADRES YANLIŞ · künye GERÇEKTEN VAR            146 madde   ✅ BİTTİ
   KRONOLOJI_ATINA_DUKALIGI    → atina-dukaligi       25
   KRONOLOJI_NAKSA_DUKALIGI    → naksa-dukaligi       25
   KRONOLOJI_RODOS_SOVALYELERI → rodos-sovalyeleri    96
   Sebep: türetme `_`yi `-`ye çevirmiyordu. Geri düşüş eklendi (`61f6f60`
   sonrası). Güvenli, ölçüldü: 591 künyenin `id`sinde alt çizgi taşıyan SIFIR.

② ÇOK KÜNYEYE DAĞILIYOR — tek adrese İNMEZ      566 madde   🔴 KARAR GEREK
   cin        136   → song · yuan-hanedani · ming · qing
   hindistan  131   → Delhi sultanlıkları + ingiliz-hindistani
   misir      120   → memluk + misir-kavalali
   ozbek       73   → şeybânî/buhara
   japonya     71   → kamakura · azuchi-momoyama · kenmu · meiji-japonya
   sirbistan   35   → sirbistan-nemanjic · -prensligi · -kralligi
   ⇒ Bir dosya bir künyeye bağlanıyor; bunlar bir COĞRAFYANIN ardışık
     hânedanlarını taşıyor. Ya maddeler künyelere DAĞITILACAK, ya bağlama
     modeli çoklu bağı öğrenecek.

③ BÖLGE DERLEMESİ — karşılığı olan künye YOK   1518 madde   🔴 MODEL İŞİ
   anadolu 281 · dogu-afrika 218 · orta-asya 205 · italya-sehir 186 ·
   balkan 177 · iran-ardillari 155 · guney-asya 153 · kuzeyafrika 83 ·
   arabistan 60
   ⇒ Burada "adres yanlış" DEĞİL — **adres YOK.** `anadolu` diye bir künye
     yok ve olmamalı da. Bu maddeler bir künyeye değil bir BÖLGEYE ait ve
     veri modeli bugün bunu ifade edemiyor.

📌 Ve dersin kendisi: *"18 küresel karşılıksız"* tek bir sayıydı ve tek bir
iş gibi okunuyordu. Üçe ayrılınca biri **on dakikada** kapandı, ikisi
**Emre'nin kararını** bekliyor. ⇒ `§11`in *"çok parçalı bir ilişkiyi tek
sayıya indiren ölçü, kusuru yanlış yönde özetler"* dersinin kuyruk tarafı:
tek satır, üç ayrı çareyi tek çare sanmaya davet ediyordu.

🔴 **VE BİR TEHLİKE DAHA ÖLÇÜLDÜ (aynı kod):** bağlama `D[i].kronoloji =
derin` yapıyor — künyenin KENDİ maddelerini **eziyor**. Bugün çakışma yok
(bindirilen 24 künye ile 4 Eylül'de `devletler.js`ye inen 56 künye
kesişmiyor) ama bu bir **tasarım güvencesi değil bir tesadüf**. Nöbetçi
eklendi: eziliyorsa konsola BAĞIRIYOR.

---

## 🔴 YENİ BULGU — YANLIŞ HASSASİYET, 161 künye

*(4 Eylül · bir işçi oturumun reddinden doğdu)*

KRONOLOJİ ORTA AMERİKA, `purepecha-imparatorlugu` için `son` maddesi
yazmayı **reddetti** — ve gerekçesi bir tek künyeden büyük çıktı:

```
künye        t:1530-02-14        ← GÜN hassasiyeti
akademik     1529                ← bir yıl fark
künyenin KENDİ kaynak alanı:
   "bulunamadı — … Tarihin dayanağı DURUYOR: f:/t: BAĞLI VERİNİN
    kullandığı aralığa HİZALANDI. Akademik kaynak ARANACAK."
```
⇒ Gün hassasiyeti bir **ölçüm** değil, bir **hizalama**.

**TARANDI — tek vaka değil:**
```
591 künyenin 161'i  gün hassasiyetli tarih taşıyor VE `kaynak` alanı
                    LİTERAL olarak "bulunamadı" ile BAŞLIYOR
novgorod 1478-01-15 · pskov 1510-01-13 · tver 1485-09-12
moskova 1547-01-16 · litvanya 1569-07-01 · cenova 1797-06-14
imereti 1810-02-20 · kilikya-ermeni 1375-04-14 …
```

> 🔴 **PAYDA DÜZELTİLDİ 4 Eylül — 161 DEĞİL 147.** `KRONOLOJİ ORTA AMERİKA`
> örneklemi çekerken gördü, koordinatör bağımsız doğruladı (tam **14**
> künye): bunlar kümeye **yalnız `1923-10-29`** yüzünden girmiş, ve o
> atlasın **pencere sonu** — bir gün iddiası değil.
> `cimma-sultanligi · somali · buganda · umman-zengibar · haiti · racput ·
> manipur · nepal · travankur · san-devletleri · cohor-sultanligi ·
> tidore-sultanligi · bharatpur-cat · cunagadh`
> ⇒ Gerçek küme **147**, *"yalnız geometride"* kovası **97**.
>
> 📌 Ve aynı tuzak bugün **ÜÇ ayrı ölçümde** çıktı: istatistik sınavında
> taban şişti (29. gün 109 kez) · kronoloji çapraz kontrolünde eşleşmelerin
> çoğu `1923-10-29` çıktı · ve burada paydada. ⇒ ***Pencere uçları bir
> ÖLÇÜM DEĞERİ değil, bir SINIR İŞARETİDİR; her sayımda ayrıca elenir.***
>
> 🟢 **VE ÖLÇÜLDÜ — çürüme oranı ≈ 0:** 97'den `random.Random(20260904)`
> ile çekilen 20 künyede **gün doğrulandı 6 · yıl/ay doğrulandı 7 ·
> ölçülemedi 7 · ÇÜRÜYEN 0**. Altısı birincil belgeden (Pontotoc Creek
> 1832-10-20 · Greenville 1795-08-03 · Estonya 1918-02-24 …).
> ⚠️ Sınırı: 20'lik örneklem küçük bir oranı ayırt edemez. *"Sıfır çürüme"*
> = **"oran düşük"**, *"oran sıfır"* DEĞİL.
> ⇒ Hüküm: **97 künye SÜPÜRÜLMEYECEK.** Kova bir borç değil, bir kayıt.

⚠️ **Ve hüküm dikkatli verilmeli: bunların çoğu muhtemelen DOĞRU.**
Moskova `1547-01-16` IV. İvan'ın taç giymesidir. Kusur *yanlışlık* değil,
**yanlış HASSASİYET**: gün yazmak *"bu günü biliyorum"* demektir, oysa
aynı kaydın `kaynak` alanı *"bilmiyorum"* diyor. İkisi yan yana duruyor ve
**gün, kaynağın yokluğunu ÖRTÜYOR.**

📌 Bu, `§11`in *"yuvarlak tarih yalnız yanlış değildir — çelişkiyi de
saklar"* dersinin **AYNASI**. Orada yuvarlaklık bir boşluğu 21 aydan iki
aya indirip gizliyordu; burada **sahte kesinlik** bir dayanaksızlığı
gizliyor. İkisi de aynı aileden: *hassasiyet yalnız doğruluk değil,
GÖRÜNÜRLÜK meselesidir.*

🔜 **İŞ DEĞİL, HENÜZ ÖLÇÜM.** Yapılacak olan üç kova ayırmak:
```
① kaynak VAR ama künyeye yazılmamış    → yaz, kapan
② gün gerçekten biliniyor              → kaynağı bul
③ gün HİZALAMA ürünü                   → `YYYY-01-01`e ÇEK
```
⚠️ ③ bir veri değişikliğidir ve `Değişmez 2` senkronunu etkileyebilir —
koşudan sonra, ölçülerek.

## 🔴 AÇIK BORÇLAR — iş değil, KAYIT

```
① OWTRAD tarayıcı doğrulaması   node ile sınandı, TARAYICIDA değil (yukarıda)
② renkler.py OPAKLIK denetimi   `"fill-opacity": 0.44` DİZGİSİNİ arıyor;
                                yumuşak değerler artık SIYASI_KIP sözlüğünde
                                ⇒ uyarı SERT kipte DOĞRU, YUMUŞAK kipte YANLIŞ
                                🔒 renkler.py DONMUŞ — koşu bitince
③ Suceava ↔ Suçava  4,15 km     OWTRAD'ın KENDİ `hal:"supheli"` damgası;
                                birleştirilmedi, konsolda ADIYLA basılıyor.
                                KARAR bekliyor: aynı şehir mi?
④ koridor 7 kenar hâlâ atlanıyor  ucu koordinatsız düğüm
⑤ VERI_SINIRI uyuşmazlığı        js (-180,-60,180,85) ↔ altlık
                                 (-176.2,-45.5,180.0,81.8)
⑥ `s.kesinlik` alanı             BILINEN_ALANLAR'da yok (2 kayıt)
⑦ EMEKLİLİK                      9 oturum emekli edilmeli · 1 iş bölünmeli
                                 🔴 Dünya-Afrika-0903 ÖNCE DEVİR RAPORU
                                 vermeli (970 K, diskte olmayan iş var)
```

## ÜRETEÇ ÖNERİLERİ — Emre'nin onayını bekliyor
```
T-0126  Ters sorgu: haritaya tıklayınca o noktanın TAM zaman çizgisi
T-0127  Kırılma vurgusu: madde tıklanınca o gün DEĞİŞEN yerler parlasın
T-0128  Belirsizlik görselleştirmesi (YYYY-01-01 kesinlik taşımıyor)
onay:   py <ClaudEmre>/kutu/tespih.py --onayla T-0126
```

```
✅ bitti   ⏳ sürüyor   🔵 sırada   ⚪ bekletildi
```
