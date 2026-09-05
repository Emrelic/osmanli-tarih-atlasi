# FAZ 2 ③④ — ÇUKUROVA + GÜNEYDOĞU · ÖLÇÜM VE KAYNAK

> **NEHİR SÜRTÜNME · 6 Eylül 2026 · VERİ YAZILMADI, HÜKÜM VERİLMEDİ.**
> Aletler: `denetim/ARAC-FAZ2-CUKUROVA-0906.py` (veri) ·
> `denetim/ARAC-FAZ2-TDV-0906.py` (kaynak)
> 🔴 Gövdeler **kesilmedi**; yıl araması **sınır korumalı**; boilerplate
> **ayrı kovaya** yazıldı (`§4④`) ve *"yok"* sayılmadı.

---

## ① BUGÜNKÜ HÂL — 19 kayıt, `isg:` **0**, VE İKİ AYRI MODEL

```
19 kayıt bulundu · `isg:` taşıyan 0 · 1914+ kırılması olan 19
🔴 ATLASTA YOK: Osmaniye · Ceyhan · Kozan
```

**Aynı işgal iki farklı modelle çizilmiş:**
```
Ⓐ İŞGAL `s:` OLARAK ÇİZİLMİŞ (12)   fransa-cumhuriyet / ingiltere
   Mersin · Dörtyol · Payas · Erzin · Yumurtalık · Antep · Kilis ·
   Suruç · Akçakale · Ceylanpınar · Nusaybin · Silopi(ingiltere)
Ⓒ İŞGAL HİÇ ÇİZİLMEMİŞ (7)          kesintisiz Osmanlı `d:` → 1920-04-23
   Adana · Tarsus · Silifke · Maraş · Urfa · Birecik · Mardin
```
🔴 **En keskin tutarsızlık: `Adana` Ⓒ'de.** Fransız işgal bölgesinin
**merkezi** haritada işgalsiz görünüyor, oysa ona bağlı kazalar
(Dörtyol · Payas · Erzin · Yumurtalık) işgalli çiziliyor.

---

## ② 🔴🔴 KAYNAK VERİYİ ÜÇ EKSENDE ÇÜRÜTTÜ

### Ⓐ BAŞLANGIÇ GÜNÜ — veri MONDROS gününü kullanıyor, TDV GERÇEK günü veriyor
```
                veri            TDV                       fark
Adana           1918-10-30      24 Aralık 1918            55 gün
Tarsus          (çizilmemiş)    17 Aralık 1918              —
Osmaniye        (kayıt YOK)     23 Aralık 1918              —
Kilis           1918-10-30       6 Aralık 1918 (İngiliz)   37 gün
Antep           1919-01-01      17 Aralık 1918 (İngiliz)   15 gün
Maraş           (çizilmemiş)    22 Şubat 1919 (İngiliz)     —
Urfa            (çizilmemiş)    Mart 1919 (İngiliz) ← AY    —
```
⇒ `1918-10-30` bir **fetih günü değil, mütareke günü**; veri onu
17 kayıtta ortak başlangıç olarak kullanmış. Bu, bu gecenin
*"yuvarlak tarih yalnız yanlış değildir, çelişkiyi de saklar"*
dersinin işgal ekseni.

### Ⓑ 🔴 BİRİNCİ SAFHA HİÇ YOK — **İNGİLİZ İŞGALİ**
TDV dördünü de açıkça iki safhalı anlatıyor; atlasta **yalnız Fransız
safhası** var (Silopi hariç):
```
Antep   İngiliz 17 Ara 1918 → Fransız  5 Kas 1919 → tahliye 25 Ara 1921
Kilis   İngiliz  6 Ara 1918 → Fransız 29 Eki 1919 → tahliye 23 Ara 1921
Maraş   İngiliz 22 Şub 1919 → Fransız 29 Eki 1919 → tahliye 11 Şub 1920
Urfa    İngiliz Mart  1919  → Fransız ~Eki 1919   → tahliye 10 Nis 1920
```
> *"I. Dünya Savaşı'ndan sonra ilk olarak 17 Aralık 1918'de İngilizler
> şehre girdiler. Yaklaşık bir yıl süren işgalin ardından Fransızlar ile
> yaptıkları anlaşma gereği burayı onlara terkettiler (5 Kasım 1919)."*
> — TDV `gaziantep`

### Ⓒ BİTİŞ GÜNÜ — veri ANTLAŞMA gününü kullanıyor, tahliye HAFTALAR SONRA
```
                veri            TDV (fiilî tahliye)
Kilis           1921-10-20      23 Aralık 1921   (tahliye 7 Ara'da başladı)
Antep           1921-10-20      25 Aralık 1921
Tarsus          —               27 Aralık 1921
Osmaniye        —               29 Aralık 1921
Mersin          1921-10-20       3 Ocak 1922 (millî kuvvetler girdi;
                                 son Fransız birliği ERTESİ GÜN çekildi)
Adana           —                5 Ocak 1922
Silifke/İçel    —                4 Ocak 1922
```
🔴 **Ve tam da Emre'nin istediği şey bu:** *"şehir şehir, AY AY"* —
veri hepsini `1921-10-20`ye yığmış, kaynak ise **her şehrin kendi
gününü** veriyor ve tahliye **iki buçuk ay** sürüyor.

---

## ③ 🔴 AKSAKLIK — KAYNAK ÇELİŞKİSİ (`§7.1⑥`, çözmedim)

Ankara İtilâfnâmesi'nin günü **iki TDV maddesinde farklı**:
```
`osmaniye`  "20 Ekim 1921 Ankara Antlaşması'nın ardından"
`kilis`     "20 Ekim 1921 tarihinde … imzalanan Ankara itilâfnâmesi"
`nusaybin`  "🔴 21 Ekim 1921'de imzalanan Ankara Muahedesi"
veri        1921-10-20
```
İki maddeye karşı bir madde, ve veri çoğunlukla uyuyor — ama `§4⑥`
gereği **taraf seçmek yerine bildiriyorum.** (Ayrıştırma hatası
değil: üçü de doğrudan imza gününü tarihliyor.)

---

## ④ HASSASİYET — bir kayıt AY, biri "ERTESİ GÜN"

```
🟡 Urfa İngiliz girişi   TDV "Mart 1919" — GÜN YOK
   ⇒ `§4`: `1919-01-01` yazılır, ay `b:`/`kaynak:` metnine konur.
      🔴 AYIN 1'İNE KODLANMAZ (bu gece 53 kesin vakası ölçüldü).
🟡 Urfa Fransız devri    "yedi ay kadar sonra" — TÜRETİLEBİLİR (~Ekim 1919)
   ⇒ türetilen sayı ALINTIYA YAZILMAZ; `1919-01-01` + metinde açıklama.
🟢 Mersin son Fransız    "3 Ocak 1922'de millî kuvvetler girdi …
                          son Fransız kuvvetleri ERTESİ GÜN terketti"
   ⇒ 4 Ocak 1922 türetilebilir ama İŞGALİN BİTİŞİ 3 Ocak'tır
      (fiilî kontrol o gün el değiştirdi).
```

## ⑤ TAKVİM SINAVI — 🟢 TEMİZ
Şartname Rumî riskini uyardı. Sınandı: TDV bu maddelerde Milâdî
kullanıyor ve **bilinen çapalarla birebir tutuyor** —
`20 Ekim 1921` (Ankara İtilâfnâmesi) · `11 Şubat 1920` (Maraş) ·
`5 Kasım 1919`. 13 günlük bir sapma **hiçbirinde yok.**
⇒ Bu bölge için takvim kalemi **kapalı**; ①②⑥⑦ bölgelerinde ayrıca
sınanacak.

---

## ⑥ 🔴 SINIR VAKASI — KARAR SENİN (`§7` gereği sormuyorum, SORUYORUM)

**`Silopi` bugün `s:ingiltere 1918-10-30 → 1921-10-20` taşıyor.**
Öteki 11'i Fransız bölgesi ve model kararı gereği `isg:`e dönecek.
Silopi ise **Musul vilâyeti hattında**: İngiliz işgali Mondros'la
başladı, ama o hat sonradan **Irak'a** gitti ve Silopi Türkiye'de kaldı.
```
🅐 `isg:` — işgaldi, sonra çekildiler (öteki 11 ile aynı muamele)
🅑 `s:`  — Musul meselesi ayrı bir devir hattı, dokunma
```
**Önerim 🅐**, gerekçesi: Silopi Ankara İtilâfnâmesi hattının kuzeyinde
kaldı ve Türkiye'ye geçişi bir **devir** değil bir **tahliye**.
🔴 Ama TDV'ye bu özel soruyu sormadım ⇒ **ölçmedim, ÖNERİYORUM.**

---

## ⑦ ÖLÇMEDİĞİM · BULAMADIĞIM
```
🔴 Mersin'in İŞGAL BAŞLANGICI — `mersin` gövdesi tahliyeyi veriyor,
   Fransızların şehre GİRİŞ gününü vermiyor. `icel` de vermiyor.
   ⇒ `bulunamadı` DEĞİL, **ARANMAYA DEVAM** (ikinci kaynak denenmedi).
🔴 Urfa'nın Fransız devir GÜNÜ — yalnız "yedi ay kadar sonra".
🔴 Ceyhan · Kozan — TDV slug'ları 302, ve atlasta da nokta YOK.
   Kozan (Sis) Fransız bölgesinin sancak merkeziydi ⇒ nokta eksikliği
   `§2`nin emilme kuralı gereği harita hatası üretiyor olabilir; ÖLÇMEDİM.
🔴 Osmaniye ATLASTA YOK ama TDV maddesi ZENGİN (13.081 kar., iki günü
   birden veriyor) ⇒ nokta yazılması gereken en hazır aday.
⚪ `maras` ve `urfa` slug'ları BOİLERPLATE (2.399 / 2.338 kar., §4④) —
   *"yok"* yazmadım; `kahramanmaras` ve `sanliurfa` ile çözüldü.
```

## ⑧ SIRADAKİ — yamayı yazmadan önce iki şey lazım
```
① ⑥'daki Silopi kararı
② Ⓐ kümesinin 12 kaydında `s:` → `isg:` çevrimi, altındaki Osmanlı
   `d:`sinin 1920-04-23'e UZATILMASINI gerektiriyor (bugün orada
   BOŞLUK var: `d:` 1918-10-30'da bitiyor). Bu `Değişmez 1`i
   ilgilendirir ⇒ yamayı ona göre kuracağım, ama önce ① lazım.
```
