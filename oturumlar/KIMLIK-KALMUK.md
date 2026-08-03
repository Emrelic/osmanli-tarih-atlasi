# KİMLİK TASLAĞI — İdil (Volga) Kalmuk Hanlığı

**3 Ağustos 2026 · VERİ KİMLİK 3 · Opus.**
`arac/renkler.py`ye **DOKUNULMADI** — RENK'in dosyası, renk ondan gelecek.
`data/devletler.js`e de yazılmadı: talimat *"taslak dosyaya"* diyordu.
**Tek kelimeyle uygulanır** — künye hazır, aşağıdaki blok kopyalanabilir.

## ✅ TDV KENDİM DOĞRULADIM — `kalmuklar` CANLI

Sayfa açıldı, `<title>` sınandı: **"KALMUKLAR - TDV İslâm Ansiklopedisi"**.
İletilen dört tarihin dördü de maddede var:

| tarih | TDV'nin sözü |
|---|---|
| 1618-1632 | Torgut beyi **Horluk** önce Hârizm'e girdi, sonra ardışık göç dalgalarıyla halkını İdil boyuna taşıdı |
| **1632** | **İdil Kalmuk Hanlığı kuruldu** |
| — | Hükümdar dizisi: Horluk → Dayçin → Bunçuk → **Ayuka Han** |
| — | *"bir yandan Kırım Hanlığı, bir yandan Rus Çarlığı ile savaşarak bağımsızlıklarını korudular"* |
| **1724** | Rusya'ya bağımlı hâle geldiler |
| **1770** | Son han **Ubaşi** önderliğinde ~300.000 Kalmuk Cungarya'ya geri gönderildi; Kazakların Balkaş çevresinde çöle sürmesiyle ancak ~70.000'i ulaştı |

⇒ Koordinatörün vurgusu doğru: **nüfus katmanı değil, bağımsız siyasî
varlık.** TDV'nin kendi cümlesi iki büyük güçle savaşarak korunan bir
bağımsızlıktan söz ediyor.

---

## ① `data/devletler.js` künye taslağı

```javascript
{ id:"kalmuk", ad:"İdil (Volga) Kalmuk Hanlığı", tur:"hanlik", bolge:"sibirya-bozkir",
  f:"1632-01-01", t:"1770-01-01", baskent:"(sabit başkent yok, göçebe ordugâh)", harita:"kalmuk",
  tabi:[{f:"1724-01-01", t:"1770-01-01", ust:"rusya"}],
  ozet:"Torgut beyi Horluk'un halkını Cungarya'dan İdil boyuna taşımasıyla kurulan Oyrat hanlığı; Kırım ve Rusya ile savaşarak bağımsızlığını korudu, 1724'te Rusya'ya bağımlı oldu ve Ubaşi'nin göçüyle batıdaki varlığı sona erdi (kaynak: TDV, madde: kalmuklar).",
  kronoloji:[
    { t:"1618-01-01", tur:"toprak-kazanc", b:"Torgut beyi Horluk önderliğinde batıya göç dalgaları başladı" },
    { t:"1632-01-01", tur:"kurulus", b:"İdil boyunda Kalmuk Hanlığı kuruldu" },
    { t:"1724-01-01", tur:"antlasma", b:"Hanlık Rusya'ya bağımlı hâle geldi" },
    { t:"1770-01-01", tur:"son", b:"Ubaşi önderliğinde yaklaşık 300.000 Kalmuk Cungarya'ya döndü, batıdaki hanlık sona erdi (bkz. [[cungar]])" }
  ]
},
```

### Uydurulmayanlar — kayda geçsin
```
BAŞKENT   TDV başkent vermiyor ve hanlık göçebeydi. "(sabit başkent yok,
          göçebe ordugâh)" yazıldı — `isvicre` kaydındaki kalıbın aynısı.
          Bir yer adı uydurulmadı.
GÜNLER    Dört tarihin hiçbirinin GÜNÜ TDV'de yok → YYYY-01-01.
BİTİŞ     TDV **1770** diyor. Standart literatür hanlığın resmen 1771'de
          kaldırıldığını yazar; TDV asıldır (§4) ve o cümle eklenmedi.
          ⚠️ Başka bir oturum 1771 için kaynak getirirse düzeltilir.
HÜKÜMDAR  Horluk/Dayçin/Bunçuk/Ayuka dizisi TDV'de TARİHSİZ; kronolojiye
          hükümdar maddesi yazılmadı.
```

### ⚠️ İSİM TUZAĞI — `cungar` ile aynı halk, ayrı devlet
```
cungar   "Cungar Hanlığı (Kalmuk)"   1634-1758   Cungarya (Doğu Türkistan)
kalmuk   "İdil Kalmuk Hanlığı"       1632-1770   İdil (Volga) boyu
```
İkisi de Oyrat; `devletler.js`teki `cungar` kaydının özeti bile *"TDV'de
ayrı madde yok (Kalmuklar maddesi içinde işleniyor)"* diyor. **Aynı
maddeden beslenen iki ayrı devlet** ve `cungar`ın görünen adı zaten
"(Kalmuk)" taşıyor.
⇒ Bu tam `mogolistan/mogulistan` sınıfı bir okuma tuzağı. Korunma
`ad` alanında: biri **"İdil (Volga)"**, öteki **"Cungar"** ile açıkça
ayrılmalı ve kronolojide `[[cungar]]` bağı kurulmalı (yukarıda kuruldu).
📌 Ve tarihsel bağ gerçek: Ubaşi'nin 1770 göçü **Cungarya'ya dönüştür** —
iki kimlik aynı hikâyenin iki ucu.

---

## ② RENGİ — SEÇMEDİM, RENK'e girdi

Talimata uyarak hex önermiyorum. RENK'in ihtiyacı olan **kısıt kümesi**:

```
EŞZAMANLI KOMŞULAR (1632-1770 penceresinde, ΔE ≥ 12 gerekir)
  rusya         kuzey ve batı — hanlığın 1724'ten sonraki üstü
  don-kazak     batı komşusu (1570-1721) — künyesi yazıldı, RENGİ HENÜZ YOK
  kirim         güneybatı — TDV'nin saydığı iki düşmandan biri
  nogay         güney/güneybatı bozkır
  kazak-hanligi doğu — TDV: Ubaşi'nin göçünü çöle süren taraf
  astarhan      YOK sayılır (1556'da bitiyor, örtüşme yok)

AYRICA AYRIŞMALI (komşu değil ama karışma riski yüksek)
  cungar        aynı halkın öbür devleti, adı da "(Kalmuk)" taşıyor
                ⚠️ tarihleri ÖRTÜŞÜYOR (1634-1758 ↔ 1632-1770) — yani
                  aynı kesitte ikisi de sahnede olabilir
  kazak-hanligi kullanıcının "Kazaklar karışmasın" uyarısının kapsamında
```
⚠️ `don-kazak` ve `kalmuk` **aynı anda ve sınırdaş** (1632-1721). İkisi
de bugün renksiz; RENK'in **ikisini BİRLİKTE çözmesi** gerekiyor —
`renk_olc.py`nin kendi kuralı: *"`--oner` N kimliği BİRLİKTE çözer, tek
tek değil… `aragon` ve `kastilya` ayrı ayrı bakıldığında ikisi de temiz
görünüyor ama 249 yıl yan yana yaşıyorlar."*

📌 Ölçüm notum (bilgi, karar değil): paletin doyduğu ölçüldü —
`BOYALAR` 226 kimlik / 184 hex ve eşikleri geçen adayların **hiçbiri**
palet geneline ΔE 4,6'dan fazla açamıyor. Ayrıntı
`oturumlar/KIMLIK-DON-KAZAK.md` §③.

---

## ③ BEKLEYEN İKİ KAYIT — ve biri BİR HAYALETİ DE KAPATIYOR

Koordinatörün verdiği kayıt:
```
Kalmuk bozkırı (46,50 / 45,50)
  bugün    altinorda 1281→1556 · rusya 1556→1923
  olması   rusya 1556→1632 · kalmuk 1632→1724 · rusya 1724→1923
```

🔴 **Bu kayıt bugünkü hâliyle İKİ ayrı hata taşıyor** ve ikincisi benim
maruziyet ölçümümde zaten listedeydi:

```
① adını taşıdığı halkın devletini hiç göstermiyor   ← koordinatörün bulduğu
② altinorda 1281→1556 bir HAYALET dönemdir          ← benim ölçümümde 2. sırada
   Altın Orda 1502'de dağıldı; künye 1242-1502.
   54 yıl fazla · 71.507 km² (oturumlar/OLCUM-HAYALET-MARUZIYET.md)
```
⇒ Önerilen zincirde `altinorda 1281→1556` düzeltilmiyor, olduğu gibi
kalıyor. **Tam doğru hâli:**
```
altinorda  1281 → 1502     (künyeyle uyumlu)
astarhan   1502 → 1556     🔴 künyesi VAR (1466-1556, TDV) ama RENGİ YOK
rusya      1556 → 1632
kalmuk     1632 → 1724     ← bu taslak
rusya      1724 → 1923
```
⚠️ `astarhan` renksiz olduğu için bu adım **bugün atılamaz** — atılırsa
renksiz delik açar. Yani tek bir kayıtta B sınıfının (*"ardıl kimlik
var, rengi yok"*) canlı örneği duruyor.

📌 Ve koordinatörün *"üçüncü kez aynı sınıf"* tespiti ölçümle örtüşüyor:
Azak'ta `rusya`, Kalmuk bozkırında `rusya`, Donets'te açılmamış hücre —
üçünün de gerekçesi *"o kimlik renkler.py'de yok"*. Maruziyet ölçümüm
aynı deseni **altinorda→astarhan** ve **irlanda→irlanda-serbest-devlet**
çiftlerinde de buldu: **doğru künye zaten yazılmış, rengi olmadığı için
veri komşusunun adını ödünç almış.** Dört vaka, tek sebep.

---

## İŞLEME SIRASI

```
① kalmuk künyesini devletler.js'e ekle        (yukarıdaki blok — bende hazır)
② RENK: kalmuk + don-kazak renklerini BİRLİKTE çözsün   (sınırdaş, eşzamanlı)
③ astarhan + irlanda-serbest-devlet'e de renk  (B sınıfı, iki hayalet kapanır)
④ PETEK/NOKTA: Kalmuk bozkırı zincirini yaz    (§③'teki tam hâl)
⑤ py arac/denetle_anakronizm.py                altinorda hayaleti 7 → 6 kayda inmeli
```
