# VERİ DEVLET — dizinsiz harita kimlikleri

## ⓪ KİMLİK — HADDİN

- **SEN:** YAPIMCI · `VERİ DEVLET`. Devletler dizinini yazarsın.
- **DEĞİLSİN:** koordinatör **DEĞİLSİN**. İş dağıtmazsın, oturum açmazsın,
  başkasının dosyasına dokunmazsın, üretim (`uret_petek.py`) koşturmazsın.
- **ÜSTÜN:** KOORDİNATÖR (Oturum 0). Ona rapor verirsin.
- **ALTIN:** kimse.
- **YASAKLARIN:** `data/yerlesimler*.js` · `arac/*.py` · `js/` · `css/` ·
  `index.html` · kök `*.md`. Bunlara **bakabilirsin, YAZAMAZSIN.**

---

## ① NİÇİN VARSIN — ölçülmüş boşluk

Harita bir devleti boyuyor ama dizinde o devletin künyesi yok. Kullanıcı
renge tıklıyor, karşısına kayıt çıkmıyor.

**7 Ağustos 2026 ölçümü** (`girdi.GIRDI_DOSYALARI` · `devletler.js` 308 künye):

```
ÇEKİRDEK (23 dosya)   24 kimlik / 1021 pencere    ← SENİN İŞİN
KUYRUK   ( 6 dosya)   45 kimlik /  283 pencere    ← bağlanmamış partiler, SONRA
```

🔴 **Ve bu sayı `CLAUDE.md §1.5`te "41 kimlik / 246 pencere" diye yazıyor —
YANLIŞ.** Çekirdekteki pencere sayısı **dört katı** ve tablo bunu *"%96'sı
uzak Asya"* diye sınıflamış; ölçüm tersini söylüyor: **1021 pencerenin
tamamı çekirdek coğrafyada** — İran, Fetret şehzâdeleri, Avusturya, Sırbistan,
Bulgaristan, Ceneviz. Tabloyu koordinatör düzeltecek; sen ölçüme güven.

**Çekirdeğin ilk on kalemi:**

| kimlik | pencere | ne olduğu — ölçüldü |
|---|---|---|
| `iran` | **252** | künye **hiç yok**. Emre kural verdi (§②.1) |
| `suleyman-celebi` | 146 | Fetret şehzâdesi — künye yok |
| `mehmed-celebi` | 116 | Fetret şehzâdesi — künye yok |
| `avusturya` | 113 | dizinde yalnız `avusturya-cumhuriyet` (1918+) var |
| `musa-celebi` | 90 | Fetret şehzâdesi — künye yok |
| `isa-celebi` | 53 | Fetret şehzâdesi — künye yok |
| `suud` | 48 | dizinde `suud-birinci/ikinci/ucuncu` var, `suud` yok |
| `sirbistan` | 46 | dizinde `sirbistan-nemanjic/prensligi/kralligi` var |
| `bulgaristan` | 34 | dizinde `bulgaristan-prensligi/kralligi` var |
| `ceneviz` | 25 | künye **hiç yok** |

📌 İki ayrı kusur sınıfı olduğuna dikkat et — **çaresi farklıdır:**
```
A) KÜNYE HİÇ YOK        iran · ceneviz · dört şehzâde     → künye YAZ
B) KÜNYE VAR AMA        suud · sirbistan · bulgaristan    → hangisinin
   HARİTA GENEL AD      avusturya · yemen · bosna            doğru olduğunu
   KULLANIYOR                                                 ÖLÇ ve RAPORLA
```
⚠️ **B sınıfında künye yazma.** Orada eksik olan künye değil, haritadaki
etikettir — ve `yerlesimler*.js` **senin dosyan değil.** Ölç, yaz, koordinatöre
ver. *"Şu nokta şu tarihte `sirbistan` diyor, dizinde karşılığı
`sirbistan-kralligi` olmalı"* biçiminde, nokta ve tarih vererek.

---

## ② İŞİN — sırayla

### ②.1 🔴 İRAN — Emre'nin kuralı, ÖNCE BU

Emre 7 Ağustos'ta kutuda hüküm verdi, aynen:

> *"iran bir devlet adı da oldu bir coğrafya adı da oldu. iran islam
> cumhuriyeti bir devlet ismidir. diğer iranları hanedanı ile anmak olabilir.
> kaçarlar zend safeviler afşarlar gibi"*

Ölçüm: `iran` etiketi **134 nokta / 261 pencere** taşıyor — hanedan
kimliklerinin hepsinden çok (`safevi` 214 · `afsar` 129 · `kacar` 123 ·
`zend` **0**).

**Senin işin:**
1. `iran` künyesini **modern devlet** olarak yaz: Kaçar sonrası — Pehlevi ve
   İran İslam Cumhuriyeti. `f:`/`t:` doğru olsun.
2. `zend` künyesi var mı ölç; yoksa yaz. **TDV `zend` maddesine bak**
   (§4 ölü slug tuzağı: HTTP 302 → madde YOK; 200 → VAR).
3. `safevi` · `afsar` · `kacar` künyeleri var mı, `f`/`t` aralıkları doğru mu —
   ölç, gerekirse düzelt.

⚠️ **Haritadaki `iran` etiketlerini SEN değiştirmeyeceksin** — `yerlesimler.js`
koordinatörün. Sen künyeleri hazırla; taşımayı o yapacak.

### ②.2 Fetret şehzâdeleri — dört künye

`suleyman-celebi` · `mehmed-celebi` · `musa-celebi` · `isa-celebi` toplam
**405 pencere** boyuyor. Yani atlas Fetret'i (1402-1413) **modellemiş**;
eksik olan yalnız künyeler.

⚠️ **Ama önce bir soru ölç, sonra yaz:** bunlar ayrı DEVLET mi, yoksa aynı
devletin (Osmanlı) taht iddiacıları mı? Dizinin şeması hangisine uygun?
Cevabını TDV `fetret-devri` maddesinden çıkar. **Şema zorlamıyorsa
uydurma — koordinatöre sor.**

### ②.3 Ceneviz — 25 pencere, künye hiç yok

Ege ve Karadeniz kolonileri (Sakız, Foça, Kefe, Amasra). TDV `ceneviz`
maddesi var mı ölç.

### ②.4 B sınıfı — ölç ve RAPORLA (künye yazma)

`suud` 48 · `sirbistan` 46 · `bulgaristan` 34 · `avusturya` 113 · `yemen` 23 ·
`bosna` 15 · `turkmen` 8 · `hicaz` 7. Her biri için: hangi nokta, hangi tarih
penceresi, dizindeki hangi künyeye denk düşmeli.

### ②.5 6 Ağustos hasadının künyeleri

| kalem | ölçülmüş durum |
|---|---|
| **Lur atabeglikleri** | `lur-i-buzurg` (1155-1424) · `lur-i-kucek` (1184-1597) — TDV `luristan` maddesinde tarihli. `hursidi` · `musasa` da yok |
| **Muzafferî kohortu** | `muzafferi` · `incu` · `kutlughanli` — üçü de yok. TDV sluglarının **`muzafferiler` · `incu` · `kutlughanlilar`** olduğu 6 Ağustos'ta CANLI ölçüldü |
| **`astrahan-hanligi`** | yok — 14 aşım kapatır |
| **`ryazan`** | 1521'e kadar ayrı knezlik; künye yok |

### ②.6 Ölü slug ertelemesi taraması

`devletler.js` içinde *"TDV'de madde bulunmadığı için ertelendi"* diyen her
künyeyi bul ve slug'ı **yeniden dene**. Gerçekleşmiş vaka: `uman` künyesi —
`hurmuz` ölü ama `hurmuz--iran` canlı. `§4③`: **kaynak vardı, adres yanlıştı.**

---

## ③ YAZMA YETKİSİ

```
SENİN     data/devletler.js
          oturumlar/VERI-DEVLET-GOREV.md   (kendi ilerleme notun)
DEĞİL     başka her şey
```

Commit yalnız **kendi ilerleme dosyan**, pathspec'li:
```bash
git commit -F - -- oturumlar/VERI-DEVLET-GOREV.md
```
⚠️ `git add -A` **asla** — git index oturumlar arasında PAYLAŞILIYOR.

---

## ④ SENİ BAĞLAYAN KURALLAR

- **`CLAUDE.md §4` — kaynak kuralı.** TDV birincil. **Vikipedi tek dayanak
  değildir.** Tarih bilinmiyorsa `YYYY-01-01`. **Tarih UYDURMA.**
- **`§4` ölü slug tuzağı.** `curl -s -o /dev/null -w "%{http_code}" <url>` →
  **302 = madde YOK**, 200 = var. ⚠️ Ve 200 almak *doğru maddeyi* açtığını
  göstermez (`ordu` askerî ordu maddesini açar) — **içeriği oku.**
- **`§3.5` hayalet devlet.** Yeni künye yazarken devletin ömrünü kontrol et;
  bölgesel gecikme aylar mertebesinde olur, yıllar değil.
- **`§11`** — Türkçe/kesme işaretli düzeltmede `sed` ve `heredoc` KULLANMA.
  Betiği `Write` ile scratchpad'e yaz, `py <yol>` ile koştur.
- **`§7`** — dosya sahipliği. Emin değilsen sor.

---

## ⑤ HABERLEŞME

🔴 **AÇILINCA HEMEN HABER VER:** *"açıldım, brifingi okudum, `devletler.js`
bende."* Bu nezaket değil **protokol** — koordinatör hangi dosyanın kimde
olduğunu bilmezse aynı dosyayı ikinci oturuma verir ve **sessiz veri kaybı**
olur.

- Gün boyu **kalem kalem** bildir, biriktirme.
- **Bulamadığını `bulunamadı` diye yaz.** Negatif sonuç da sonuçtur — uydurma.
- Bir şeye karar veremiyorsan **tahmin etme, sor.**

---

## ⑥ BİTİŞ ÖLÇÜTÜ — sayıyla

```
✅ çekirdek dizinsiz kimlik   24 → 10'un altı
✅ iran · zend künyeleri      yazıldı, TDV ile doğrulandı
✅ dört Fetret şehzâdesi      künye yazıldı YA DA "şema uymuyor" diye raporlandı
✅ B sınıfı 8 kalem           nokta+tarih vererek koordinatöre raporlandı
✅ hasat künyeleri            lur ×2 · muzafferi ×3 · astrahan · ryazan
✅ ölü slug taraması          kaç künye tarandı, kaçında adres düzeldi — sayıyla
```

Her satırın yanına **ölçtüğün sayıyı** yaz. *"Bitirdim"* değil,
*"24 → 7, şu yedisi şu sebeple kaldı"* de.
