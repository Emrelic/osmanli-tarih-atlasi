# GEÇİŞ SÜRE — 0907

| alan | değer |
|---|---|
| **AD** | GECIS-SURE-0907 (eski adın: YUK-FETCH-0907) |
| **MODEL** | Opus |
| **DİZİN** | `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ` |
| **ClaudEmre** | çalıştırma |

> ⚠️ Bu, `index.html` işinin **yerine geçmiyor.** O iş koşu 8'in bitişine
> kilitli ve işareti bende. Bu, o beklerken yapılacak iş.

---

## ① İŞİN ÖZÜ — Emre'nin sorusunun AÇIK KALAN YARISI

Emre'nin açık isteği: **"ikinci geçişin süresini ölç."**
Bugün ölçülen (`denetim/OLCUM-IKINCI-GECIS-0907.txt`, commit `979fca6`):
```
A çıktısı              552 kimlik · 240.687 parça
naif çift              152.076
EŞ ZAMANLI çift         85.977   (%56,5)   ← İŞİN BÜYÜKLÜĞÜ
```
🔴 Aletin kendi `③`ü sınırını yazıyor: ***"Ölçülen şey SÜRE değil İŞİN
BÜYÜKLÜĞÜ. Süreye çevirmek için çift başına kesişim maliyeti gerekir —
YOK."***

**Senin işin o eksik çarpanı ölçmek:** çift başına kesişim maliyeti.

---

## ② NİÇİN YAPILABİLİR — aletin gerekçesi eksikti

O alet *"motoru çağırmayı gerektirir ve `uret_petek.py:39` importu
REDDEDİYOR"* diyor. **Bu doğru ama yeterli değil:** kesişim maliyetini
ölçmek için motora gerek yok —
```
shapely BAĞIMSIZ olarak içe aktarılabilir
geometri `data/devletler_harita.js` içinde ZATEN duruyor (dnm[].g)
⇒ örnek çiftleri kendin kurup KENDİN zamanlayabilirsin
```
📌 Ve bu, `§11`in *"«çözülemedi» demeden önce hangi kısıtın bağladığını
ölç"* dersinin uygulaması: bağlayan şey **kesişim** değil **motorun
importu**ydu, ve ikisi ayrı şeyler.

---

## ③ 🔴 ÜÇ ŞART — üçü de ölçümün geçerliliğini belirliyor

### Ⓐ ÖRNEKLEM DÜZ OLMAZ — TABAKALANIR
Maliyeti çift SAYISI değil **parça KARMAŞIKLIĞI** sürüyor. 240.687 parça
552 kimliğe dağılmış ve dağılım neredeyse kesinlikle **çarpık.**
🔴 Rastgele bir örneklem basit çiftlerin ağırlığında kalır ve maliyeti
**olduğundan küçük** gösterir.
⇒ **Önce dağılımı ölç** (kimlik başına parça sayısı: ortanca · azami ·
en büyük üye yüzde kaçını tutuyor). Sonra tabakalı örnekle.
📌 Dayanak: `§11` — *"evrenin en büyük üyesi yarıdan fazlasını
tutuyorsa, örneklem bir oran değil O ÜYENİN PORTRESİDİR"* (`urabi-pasa`
vakası: 110 ucun 2 iddia olduğu ölçüldü).

### Ⓑ KOŞU 8 SÜRÜYOR ⇒ ÖLÇÜM YÜK ALTINDA
Senin kendi bulgun (M-3139): *"mutlak sayılar koşu 8'in yüküyle 12-21 sn
arasında geziniyor; yalnız EŞLİ ölçüm anlamlı."*
⇒ Yük altında ölçülen çift maliyeti bir **ÜST SINIRDIR.** Bu bir kusur
değil — bir fizibilite kararı için üst sınır **tam olarak işe yarayan
şeydir.** Ama **damgalanmadan** yazılamaz.
```
🟢 YAZ    "ÜST SINIR — koşu 8 yükü altında ölçüldü (CPU %47-100 arası)"
🔴 YAZMA  damgasız bir saniye sayısı
```
Koşu biterse ölçümü **tekrarla** ve iki sayıyı yan yana koy; aradaki
fark yükün kendisidir ve o da bir bilgidir.

### Ⓒ SONUÇ TEK SAYI DEĞİL BİR BANT OLMALI
`85.977 × (çift maliyeti)` bir çarpım, ama iki çarpanın da hatası var.
Bandı ver, ortancayı da ver, ve **hangi çarpanın hatayı sürüklediğini**
söyle.

---

## ④ DOSYALARIN

```
🟢 SENİN         denetim/ARAC-GECIS-SURE-*-0907.py
                 denetim/OLCUM-GECIS-SURE-0907.md
                 oturumlar/GECIS-SURE-0907.md   (ilerleme notun)
🔴 SENİN DEĞİL   data/*.js · arac/*.py · index.html · js/app.js
```
🔒 **KOŞU 8 SÜRÜYOR** ⇒ `data/` ve `arac/uret_petek.py · renkler.py ·
girdi.py` DONUK. `data/devletler_harita.js`i **OKUMAK serbest** — yazmak
değil.
⚠️ 53 MB'lık dosyayı tekrar tekrar ayrıştırma; bir kez oku, belleğe al.

**Ad alanı:** `window.<AD>` gerektirmiyor — çıktın `denetim/` altında.

---

## ⑤ C13 — DÖRT AYAK, ve dördü de koşulur
```
① GEÇME      kusur yokken TEMİZ diyor mu
② ATEŞLEME   her kusur dalı AYRI AYRI ötüyor mu (zorlanarak)
③ GİRDİ      girdiyi GERÇEK kaynağından (dosya) okuma yolu koşuldu mu
④ ÇIKTI      aletin cevabını DOĞRU YERDEN okuduğunu göster
```
📌 Bugün `②`nin değerini sen kanıtladın: `v instanceof Date` kusurunu
**gerçek veri gösteremezdi**, yalnız zorlanmış fikstür gösterdi.

🔴 **VE BİR ŞART DAHA, bugün üç kez ısırdı:**
```python
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
```
Windows konsolu **cp1254**. Bu satır olmadan `⇒` ya da `⚠️` basan bir
alet **kendi çıktısında ölür.** Bugün: nöbetçi `⏳` ile öldü (koşu 43 dk
nöbetsiz kaldı) · `ARAC-IKINCI-GECIS` çöktü · ve **bir iç ölçüm
`ÖLÇÜLEMEDİ` diye damgalandı, oysa ölçüm BAŞARILIYDI ve yalnız
BASILAMAMIŞTI.**
⇒ Bir çıktı hatasını ölçüm hatası diye damgalamak, kalemi yanlış kovaya
koyar. `try/except`in yakaladığı şeyin **hangi cinsten** olduğunu ayır.

---

## ⑥ HABERLEŞME
```
py arac/tahta.py yaz --kim "GECIS-SURE-0907" --kime "1.MURAT" --mesaj "..."
```
Açılınca · kalem kalem · soru gelince hemen · bitince **sayıyla.**
🔴 Aksaklık beklemez (`§7.1⑥`). Kritik mesajı `tahta.json`dan **geri oku.**

---

## ⑦ ÖNCÜL DAMGALARI
```
🟢 ÖLÇTÜM    85.977 eş zamanlı çift · 552 kimlik · 240.687 parça
             (bugün, denetim/OLCUM-IKINCI-GECIS-0907.txt)
🟢 ÖLÇTÜM    o sayı bir ALT SINIR — A çıktısı koşu 7b'nin ürünü, yani
             ZATEN düzeltilmiş; ham çıktı saklanmıyor
⚪ ÖLÇMEDİM  çift başına kesişim maliyeti  ← SENİN İŞİN
⚪ ÖLÇMEDİM  parça sayısının kimlikler arası dağılımı ← Ⓐ'nın ön koşulu
```

---

## ⑧ KABUL ÖLÇÜTÜ
```
① çift başına maliyet — BANT hâlinde, damgalı
② 85.977 ile çarpımı — ve hangi çarpanın hatayı sürüklediği
③ Ⓐ'nın dağılım ölçümü — tabakalamanın GEREKLİ olup olmadığı
④ ölçülemeyen kalan varsa ADIYLA
```
⚠️ *"Süre ölçülemez"* çıkarsa **o da teslimdir** — ama niçin
ölçülemediği, aletin `③`ünden farklı bir gerekçeyle yazılmalı; onun
gerekçesi (`motor importu`) yukarıda `②`de çürütüldü.

---

## İLERLEME NOTLARI
