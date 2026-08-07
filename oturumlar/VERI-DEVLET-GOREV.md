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

🔴 **DİKKAT — bu bölüm 7 Ağustos'ta DÜZELTİLDİ. Önceki hâli YANLIŞTI.**

İlk yazımda burada *"çekirdekte 24 kimlik / 1021 pencere"* diyordu ve
`CLAUDE.md §1.5`i yanlış ilan ediyordu. **Ölçüm koordinatörün, hata da
koordinatörün.** `devletler.js` künyelerinde bir **`harita:` alanı** var —
harita kimliğini künyeye bağlayan açık bir takma ad mekanizması. Ölçüm
yalnız `id:` üzerinden yapıldı, `harita:` hiç görülmedi.

**Doğru ölçüm** (`arac/durum_tablosu.py:48`in tanımı — `id:` ∪ `harita:`):
```
ÇEKİRDEK (23 dosya)    1 kimlik /   7 pencere    ← yalnız `turkmen`
KUYRUK   ( 6 dosya)   41 kimlik / 239 pencere    ← bağlanmamış partiler, SONRA
```
⇒ `§1.5`in *"41 kimlik / 246 pencere · %96'sı asya merge borcu"* satırı
**doğruymuş.**

**İPTAL EDİLEN KALEMLER — hepsinin künyesi ZATEN VAR, dokunma:**
```
iran            → harita:"iran"  ⇒ afsar + kacar
suleyman-celebi → fetret-suleyman     mehmed-celebi → fetret-mehmed
musa-celebi     → fetret-musa         isa-celebi    → fetret-isa
avusturya       → habsburg            ceneviz       → cenova
suud            → suud-birinci / suud-ikinci / suud-ucuncu
sirbistan · bulgaristan · yemen · bosna · hicaz   → hepsi harita: ile bağlı
```
Aşağıdaki **§②.2 (Fetret şehzâdeleri) · §②.3 (Ceneviz) · §②.4 (B sınıfı)
bölümleri DÜŞTÜ.** Okuma, atla.

**GEÇERLİ KALAN GERÇEK BOŞLUKLAR** — bunlar bağımsız ölçüldü, `harita:`
alanından etkilenmiyor:

| # | kimlik | bekleyen | not |
|---|---|---|---|
| 1 | **`zend`** | **123 nokta** | künye YOK, renk YOK — en yüksek kaldıraç |
| 2 | **`lur-i-buzurg` · `lur-i-kucek`** | **10 nokta** | TDV `luristan`: 1155-1424 · 1184-1597 |
| 3 | **`galzay`** | 1 nokta / 38 yıl | TDV imlâsı GALZAY; `hotaki`/`gilzai` ölü slug |
| 4 | **`turkmen`** | 7 pencere | çekirdekte dizinsiz kalan **tek** kimlik |
| 5 | §②.5 hasat | — | `muzafferi` · `incu` · `kutlughanli` · `astrahan-hanligi` · `ryazan` |
| 6 | §②.6 | — | ölü slug ertelemesi taraması |

⚠️ **Ve bir yeni kalem:** `harita:"iran"` **iki ayrı künyede** duruyor
(`afsar` 1736-1796 · `kacar` 1789-1923). `iran` etiketinin 1335-1501 ve
1747-1796 pencereleri **yanlış künyeye** düşüyor olabilir. Bu artık *"künye
yok"* sorunu değil, ***"takma ad yanlış künyeye bağlı"*** sorunu — **ölç ve
raporla**, künyeyi kendi başına değiştirme.

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
