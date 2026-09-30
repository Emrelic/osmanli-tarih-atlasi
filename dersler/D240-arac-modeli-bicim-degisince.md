# D240 — Ölçen aracın modeli, ölçtüğü verinin biçimi değişince sessizce yanlışa geçer

**30 Eylül 2026 · YILDIRIM BAYEZIT · aynı sınıf BİR GÜNDE ÜÇ KEZ**

> **Slogan:** *Bir denetimin "temiz" ya da "N ihlal" demesi, o denetimin
> hâlâ aynı soruyu sorabildiğini KANITLAMAZ. Veri biçimi değiştiğinde araç
> ölmez — yanlış sayı verir, ve sayı güven telkin eder.*

---

## Niçin ayrı bir ders

`dersler/DIZIN.md`de zaten iki komşu var: *"Denetim var ≠ o soruyu
soruyor"* ve *"Bayatlayan belge/sayı"*. Bu ders üçüncüsü ve ikisinden de
farkı şu: orada araç **doğru soruyu sormuyordu** ya da **sayı eskimişti**.
Burada araç doğru soruyu soruyor, sayı da tazedir — ama **aracın veri
modeli** ile **verinin bugünkü biçimi** ayrışmıştır. Araç kendi
eksikliğini veriye yazar ve bunu bir ÖLÇÜM gibi basar.

Üç vakanın üçü de aynı gün, üç ayrı araçta çıktı. Bir tesadüf değil desen.

---

## Vaka ① — Üç kapı beş dosyayı "0 madde" saydı

12 yetim kronoloji dosyasını bağlamak için üç kapı (sözdizim · küresel ad
çakışması · künye atfı) koştu. Sonuç: **12/12 geçti · 246 madde · künyesiz
kimlik 0.** Tertemiz görünüyordu.

Ama beş dosya **0 madde** basmıştı ve dosyalar 6–64 KB'tı. Sebep:

```js
kronoloji_cok_memluk.js        { t:"1516-06-20", b:"...", devlet:"memluk" }
kronoloji_cok_bulgaristan.js   {"t": "1365-01-01", "devlet": "vidin-carligi", ...}
```

İki yazım biçimi var: **çıplak anahtar** ve **JSON tırnaklı anahtar**.
Kapının kalıbı `\{\s*t\s*:` yalnız birincisini tutuyordu.

🔴 **Ve asıl tehlike sayıda değildi:** aynı regex ailesi *kimlik* alanını
da (`"devlet":`) kaçırdığı için **"künyesiz kimlik 0"** da yanlış temizdi.
Boş küme her öngörüyü doğrular. İki biçim de tarandı:

```
madde     246  →  419
```

## Vaka ② — Uygulayıcı dizginin İÇİNE vurdu

`ARAC-YERLESIM-UYGULA-0930.py` bir kayıttaki `alan:` dizisini şöyle
buluyordu:

```python
m = re.search(r'(?<![A-Za-z0-9_])' + alan + r'\s*:\s*\[', kayit)
```

Zagem (Kaheti) kaydının `neden:` **metninin içinde** bir kod alıntısı var:

```
neden:"... veri de aynı günle teyit ediyor: v:[{\"f\":\"1578-08-24\", ...}]"
```

`v` alanı yazılırken regex **o alıntıyı** buldu (gerçek `v:` alanından
önce geliyordu), alıntıyı dengeli `]`'ye kadar kesti ve yerine tırnaksız
JSON koydu. `data/yerlesimler.js` — motorun ana girdisi — bozuldu.

Aracın modeli: *"kayıt = alanlar dizisi"*. Verinin biçimi: *"alan değeri
kod metni TAŞIYABİLİR"*. Model o olasılığı hiç içermiyordu.

⚠️ Aracın kendi koruması vardı ve **çalıştı** — ama yanlış düzeyde: kaydı
ad ile belirsiz/mükerrer bulmaya karşı korunuyordu, **kayıt içindeki alanı**
belirsiz bulmaya karşı değil.

**Çare:** dizgi-farkında tarayıcı — alan adı yalnız dizgi dışında ve
derinlik 1'de aranır (`_ust_duzey_alanlar`), dengeli kapanış da dizgi
içindeki parantezleri saymaz (`_dengeli_son`).
**Sınav:** `denetim/ARAC-YERLESIM-UYGULA-0930-SINAV.py`, 19 maddede iki
yönde — öngörü ölçümden önce yazıldı.

## Vaka ③ — `durum_tablosu.py` paketi göremedi, 42 borç UYDURDU

Tablo şunu bastı:

```
katman evreni: index.html'in yüklediği 0 sınır · 4 kronoloji/olay ·
               0 savaş · 0 kişi dosyası
gerçek sessiz borç: 14 → 54
```

Sebep tek satır:

```python
canli = set(re.findall(r'src="data/([^"?]+\.js)', _oku("index.html")))
```

Dosyalar `paket_NN.js` içine paketlendi; index.html'de **adıyla geçmiyor.**
Araç onları göremedi, göremediği katmanlarda kimlik arayamadı, ve
bulamadığı 42 kimliği **"gerçek sessiz borç"** kovasına yazdı.

```
katman evreni  0/4/0/0  →  13 sınır · 165 kronoloji/olay · 2 savaş · 1 kişi
sessiz borç         54  →  12        (eski tablodaki 14'ten de İYİ)
```

🔴 **Ve bu kusur ZATEN ÇÖZÜLMÜŞTÜ — başka bir araçta.**
`arac/_bagli_mi.py:index_dosyalari()` 29 Eylül 2026'da tam bunu düzeltti
ve docstring'ine uyarısını da yazdı:

> *"Paket açılmazsa bu araç 'MOTOR VAR · TARAYICI YOK' ve 'KRONOLOJİ
> YETİMİ' diye 161 ihlal basar ve HEPSİ YANLIŞ ALARMDIR — ölçüldü. İki
> tüketici listesi ayrışırsa denetim kendi modelinin eksikliğini veriye
> yazar."*

`durum_tablosu.py` o düzeltmeyi almamıştı. ⇒ Çare **üçüncü bir liste
yazmak değil**, ortak işleve bağlanmak. Bu, [`D234`](D234-care-sinifa-uygulanmadi.md)in
("çare kayda uygulandı, sınıfa uygulanmadı") alet tarafındaki yüzüdür:
çare BİR ARACA uygulandı, **SINIFA** uygulanmadı.

---

## Kural — üç madde

1. **Bir aracın "0" ya da "temiz" demesi, o soruyu SORABİLDİĞİNİ
   kanıtlamaz.** Boş kümeyi görünce ikinci soru şudur: *aracın evreni kaç
   eleman?* Evren 0 ise sonuç "temiz" değil **"ölçülemedi"**dir.
   `durum_tablosu.py` evreni basıyordu ("0 sınır") ve kimse okumadı.
2. **Veri biçimi çoğulsa ayrıştırıcı da çoğul olmalı, ve bu YAZILI
   olmalı.** Bu depoda üç yazım bir arada yaşıyor: çıplak anahtar · JSON
   tırnaklı anahtar · **dizgi içinde kod alıntısı.** Yeni bir tarayıcı
   yazan üçünü de sınar, yoksa sessizce bir alt kümeyi ölçer.
3. **Bir tüketici listesi düzeltildiğinde ÖTEKİ TÜKETİCİLER taranır.**
   `grep -rl 'src="data/'` bir dakikalık iştir; atlanması 42 uydurma borç
   üretti. Düzeltmeyi paylaşılan bir işleve koy, kopyalama.

📌 **Ve biçim değişikliğini YAPAN kişi bu taramayı borçludur.** Paketleme
29 Eylül'de indi; `_bagli_mi.py` aynı gün düzeltildi, `durum_tablosu.py`
bir gün sonra yakalandı. Arada tabloyu koşan bir oturum 54 borç görüp
onları "kapatmaya" girişebilirdi — yani yanlış ölçüm, yanlış İŞ üretir.

---

## İlgili dersler

[`D199`](D199-durum-tablosu-elle-yazilmaz.md) (tablo üretilir, elle
yazılmaz — bu ders onun tersini ekler: **üretilen tablo da yanlış
olabilir**) · [`D234`](D234-care-sinifa-uygulanmadi.md) (çare sınıfa
uygulanmadı) · [`D215`](D215-turkce-yazim-ekseni-lower.md) (Türkçe yazım
ekseni — aynı aile: ayrıştırıcı verinin biçimini tam kapsamıyor) ·
[`D235`](D235-worktree-izlenmeyen-girdi.md) (worktree kodu taşır, izlenmeyen
girdiyi taşımaz — bugün koşuyu DEM yokluğuyla durduran kusur da odur)
