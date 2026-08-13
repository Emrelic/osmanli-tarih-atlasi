# ARAYÜZ BOŞLUK — harita kendi BELİRSİZLİĞİNİ söyleyebilsin

## ⓪ KİMLİK — HADDİN
```
SEN        : ARAYÜZ oturumu · adın ARAYÜZ BOŞLUK
DEĞİLSİN   : koordinatör DEĞİLSİN · MOTOR DEĞİLSİN · YAPIMCI DEĞİLSİN
ÜSTÜN      : ClaudEmre koordinatörü (sana bu dosyayı veren oturum)
ALTIN      : kimse
YASAKLARIN : `data/*` · `arac/*` · kök `*.md` · üretim koşusu ·
             VERİ DEĞİŞTİRMEK (bir kaydın `bos:` değerini "düzeltmek"
             SENİN İŞİN DEĞİL — yanlış görünse bile BİLDİR, dokunma) ·
             iş dağıtmak · başka oturum açmak
```

---

## ① NİÇİN VARSIN — veri HAZIR, harita ÇİZMİYOR

**Emre'nin sözü** (`h17#7`, 10 Ağustos):
> *"Boş alanların taranarak teyit edilmesi gerekmektedir… orada müstakil
> bir siyasî yapı var ise **etiketlenip boyanmalı**."*

Ve kısaltması (`*nedenboş`, 12 Ağustos):
> *"Bu topraklar neden boş: insan mı yok · devlet mi yok · kabile
> yönetimi mi var · veri mi yok · hata mı — bu beşten hangisi?"*

**12 Ağustos'ta VERİ TARAFI BİTTİ.** Bugünkü ölçüm (2369 nokta):
```
kasitli_bosluk bayraklı   138
bos: cinsi YAZILI         138 / 138   ✅ makine SORABİLİYOR
   devletsiz 100 · kabile 15 · insansiz 9 · hata 8 · veri-yok 6
```
🔴 **AMA HARİTA BU BEŞ KOVAYI ÇİZMİYOR — hepsi AYNI beyazlık.**
Kullanıcı Sibirya'ya bakıp *"burası boş"* görüyor; **niçin** boş olduğunu
göremiyor. Oysa cevap veride duruyor.

📌 Ve bir öğretim aracının en kötü yanılgısı budur: **bilmediğini
bildiği gibi göstermek.** Öğrenci 1450 Sibirya'sına bakıp *"demek
buranın sahibi yokmuş"* diyor — oysa `veri-yok` ile `devletsiz`
tamamen farklı iki cümledir ve harita ikisini de aynı boyuyor.

---

## ② İŞİN — sıra bağlayıcı, EN UCUZ ÖNCE

### 🔴 İŞ 0 — ÖNCE OKU, TASARIM ZATEN VAR
`MIMARI.md §6` (*"Bilinmeyeni bilinmiyor diye göstermek"*) bunu **zaten
tasarlamış**:
```
devletsiz   düz nötr
veri-yok    TARALI
lejantta    AYRI SATIR
```
🔴 **Bu proje 10 Ağustos'ta *"istenen şeyin altyapısı zaten vardı"*
hatasını BİR GÜNDE BEŞ KEZ yaptı.** Önce `MIMARI §6`yı oku, sonra
`git grep` ile `bos` · `kasitli_bosluk` · `desen` · `pattern` ara.
**Ne bulduğunu SAYIYLA bildir** — tasarımın ne kadarı zaten kodda?

### İŞ 1 — BEŞ KOVAYI GÖRSELLEŞTİR
`MIMARI §6` iki değer öngörmüştü; veri **beşe** ayrıldı. Beşi de ayırt
edilmeli ama **ekran kalabalıklaşmamalı** — Emre'nin en sık şikâyeti
*"gözü kanatıyor"*.
```
devletsiz  100  kaynak KONUŞUYOR: burada devlet yoktu
kabile      15  adlı bir kabile/krallık var ama künyesi yok
insansiz     9  insan hiç yoktu (kutup adaları)
hata         8  bayrağın KENDİSİ şüpheli
veri-yok     6  kaynak SUSUYOR
```
🟡 **Öneri (bağlayıcı DEĞİL, sen tasarla ve gerekçelendir):** ikisi
*"bilgi var"* (devletsiz · insansiz), ikisi *"bilgi yok"* (veri-yok ·
hata), biri *"kısmî"* (kabile). Belki üç görsel sınıf yeter, beş değil.
⚠️ Kararını **gerekçesiyle** yaz; ben dayatmıyorum.

### İŞ 2 — LEJANT
Her sınıf lejantta **adıyla** görünmeli. Kullanıcı rengi görüp ne
demek olduğunu **tahmin etmek zorunda kalmamalı.**

### İŞ 3 — DETAY (varsa kolay)
Boş bir alana tıklanınca ya da üstüne gelinince `neden:` serbest metni
görünsün. Veri zaten orada (133 kayıtta dolu).
⚠️ Bu iş kolay DEĞİLSE atla ve BİLDİR — İŞ 1 ve 2 asıl değeri taşıyor.

### 🟡 İŞ 4 — YUVARLAK TARİH İŞARETİ (yeter cephane kalırsa)
`YYYY-01-01` biçimindeki kırılmalar *"yıl biliniyor, gün bilinmiyor"*
demektir. Zaman çubuğunda farklı işaretlenebilirler.
📌 Bunun canlı vakası bugün çıktı: `1361-01-01`e **on bir** Trakya
yerleşimi birden konmuş ve harita o gün hepsini birden boyuyor —
kullanıcı *"kocaman bir toprak bir anda alınmış"* sanıyor.
⚠️ Bu iş İŞ 1-2-3'ten SONRA. Sıra gelmezse sorun değil.

---

## ③ YAZMA YETKİSİ
```
🟢 SENİN   js/app.js  ·  css/style.css
           oturumlar/ARAYUZ-BOSLUK-ILERLEME.md
🔴 DEĞİL   data/*  ·  arac/*  ·  index.html  ·  kök *.md
```
⚠️ **`index.html` sana KAPALI.** Yeni bir dosya ya da satır gerekiyorsa
koordinatöre söyle.
🔴 Şu an aynı anda çalışan oturumlar: MOTOR MALİYET (`arac/uret_petek.py`)
· VERİ FETRET (`data/yerlesimler*.js`) · KORİDOR ŞEMA (`data/koridor.js`)
· NOKTA AMERİKA · NOKTA OKYANUSYA. **Hiçbirinin dosyasına dokunma.**

## ④ SENİ BAĞLAYAN KURALLAR
```
CLAUDE.md §11   🔴 kaçış içeren metin BASH'ten geçmez, heredoc DÂHİL.
                `Write` ile yaz, `py <yol>` ile koştur.
CLAUDE.md §11   🔴 yazdıktan sonra GERİ OKU — "yaptım" kanıt değildir.
                `js/app.js` bozulursa SİTE AÇILMAZ; her düzenlemeden sonra
                `node --check js/app.js` koştur.
CLAUDE.md §9    yayından önce sürüm damgası — ama onu KOORDİNATÖR yükseltir
YASALAR C13     yeni davranış İKİ YÖNDE sınanır:
                GEÇME     `bos:` olmayan gövde ESKİSİ GİBİ çiziliyor mu
                ATEŞLEME  beş kovanın HER BİRİ gerçekten AYRI görünüyor mu
                ⚠️ `hata` kovasında 8, `veri-yok`ta 6 kayıt var — azlar,
                   ama ateşleme için YETER. Bulup EKRANDA doğrula.
```
📌 Ve bu projenin yazılı dersi: *"bir ders veriye SERBEST METİN olarak
inerse inmiş sayılmaz."* Senin işin onun **ekran** tarafı: veri artık
`if` ile sorulabiliyor, ama **göz** ile hâlâ sorulamıyor.

## ⑤ HABERLEŞME — 🔴 ÖNCE KANAL
Cevabın **kendi pencerene YAZILMAZ**; koordinatör ekranını GÖRMEZ.
```
mcp__ccd_session_mgmt__send_message
    session_id : local_17712720-a5a0-4315-8986-48c222eeeadf
    ⚠️ ADRES DOGRULAMA — HER MESAJDAN ONCE:
       Bu kimlik BAYATLAYABILIR. `send_message` "Session not found." derse
       DURMA: `mcp__ccd_session_mgmt__list_sessions` ile koordinatoru ARA
       (basligi KOORDINATOR ya da CLAUDEMRE, dizini bu proje) ve ORAYA yaz.
       🔴 13 Agu'da tam bu oldu: sartnamelerdeki adres OLUYDU ve UC oturumun
       raporu hicbir yere gitmedi. Ucu de kusuru KENDI buldu — sen de bul.
```
🔴 Bu kural dün ÜÇ oturum tarafından çiğnendi — üçü de çalıştı, dosyaya
yazdı, mesaj atmadı, ölü sanıldılar.
`AÇILINCA HEMEN` tek satır · `KALEM KALEM` bildir · **AKSAKLIK BEKLEMEZ.**

## ⑥ BİTİŞ ÖLÇÜTÜ — sayıyla
```
① `MIMARI §6` + `git grep`: tasarımın ne kadarı ZATEN kodda    — sayıyla
② kaç görsel sınıf kuruldu (5 mi, 3 mü) ve NİÇİN               — gerekçeli
③ lejantta kaç satır göründü
④ C13 GEÇME: bos: olmayan gövde eskisi gibi mi                 — ekranda
⑤ C13 ATEŞLEME: beş kovanın her biri ayrı görünüyor mu         — kova kova
⑥ `node --check js/app.js` TEMİZ mi
```
Teslim *"yaptım"* değil: *"MIMARI §6'nın taraması ZATEN kodda vardı,
3 sınıf kurdum çünkü…; lejant 4 satır; C13 5/5."*
**Bulamadığını `bulunamadı`, ölçmediğini `ölçmedim` diye yaz.**
