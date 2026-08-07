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

---

## ⑦ İLERLEME NOTU — VERİ DEVLET (7 Ağustos 2026, tek oturum, tamamlandı)

**Açılış:** brifing okundu, `devletler.js` bende. Koordinatör iki kez kapsamı
değiştirdi (İran → yalnız 1501-sonrası, sonra öncelik: zend → lur → galzay →
turkmen → hasat → ölü slug) ve BÜYÜK bir ölçüm düzeltmesi geldi: `harita:`
alanı görülmeden yapılan ilk "24 kimlik" sayımı yanlıştı; gerçek ölçüm
(id ∪ harita) çekirdekte yalnız **`turkmen`**'i dizinsiz buluyordu. Bütün
işi bu son sıraya göre yaptım.

### YAZILAN 9 YENİ KÜNYE (`data/devletler.js`, 308 → 317 kayıt, sözdizimi
### `node -e eval` ile doğrulandı, mükerrer id: 0)

| id | f → t | kaynak |
|---|---|---|
| `lur-i-buzurg` | 1155-01-01 → 1424-01-01 | TDV `luristan` (tarih birebir) |
| `lur-i-kucek` | 1184-01-01 → 1597-01-01 | TDV `luristan` (tarih birebir) |
| `muzafferi` | 1318-01-01 → 1393-01-01 | TDV `muzafferiler` |
| `incu` | 1325-01-01 → 1357-01-01 | TDV `incu` tarihsiz — standart akademik (Spuler/Iranica) |
| `kutlughanli` | 1222-01-01 → 1306-01-01 | TDV `kutlughanlilar` |
| `galzay` | 1709-04-21 → 1738-01-01 | TDV `kandehar` (gün TDV'de yok, standart akademik) |
| `turkmen` | 1600-01-01 → 1884-01-01 | TDV `turkmenler` |
| `ryazan` | 1129-01-01 → 1521-01-01 | TDV'de yok (Rus iç tarihi, §4 istisnası), standart akademik |
| `iran` | 1925-12-12 → 2026-08-07 | TDV `riza-sah-pehlevi`, `humeyni` — bkz. AÇIK SORU altta |

### DÜZELTİLEN 3 MEVCUT KAYIT (yeni yazılmadı, alan eklendi/düzeltildi)

- **`zend`**: `harita:"zend"` eklendi (yoktu). Ozete pencere/künye tarih farkı
  notu düşüldü (künye 1751-1794, hedef pencere 1747-1796 — 1747-51 kargaşa
  dönemi, kusur değil).
- **`astarhan`**: `harita:"astarhan"` eklendi (yoktu). `yerlesimler_ek22.js`nin
  "astrahan-hanligi kimliği yok" notu YANLIŞ — künye zaten f/t BİREBİR aynı
  (1466-1556), yalnız yazımı farklı (`astarhan`, TDV'nin kendi transkripsiyonu).
  Renk hâlâ eksik (`renkler.py`'de yok) — bu benim dosyam değil.
- **`kacar`**: ozetteki "1925'e dek" tarihi YANLIŞ ölçülmüş — TDV
  `riza-sah-pehlevi`: "31 Ocak 1924 tarihinde meclis... Kaçar hânedanına son
  verdi." 1924 olarak düzeltildi.

### AÇIK SORU 1 — KOORDİNATÖRE: `iran` künyesinin `t` alanı

`iran` kaydının gerçek `f`'si (1925-12-12) atlasın ufkunun (1923-10-29)
SONRASINDA — dosyanın "t=1923-10-29, ufuk sonrası da süren devletlerde" kuralı
yalnız f<ufuk kayıtları düşünüyor, bu ilk kez f>ufuk olan kayıt. `t`'ye bugünün
tarihini (2026-08-07) yazdım çünkü devlet hâlâ var ve emsal yok; bu satır asla
haritada boyanmayacak (ufuk 1923'te bitiyor), yalnız dizin/isim netliği için.
Şema uygun değilse (`t` boş/"—" mü olmalı, yoksa bu kayıt hiç mi yazılmamalı)
KARAR SİZİN — Emre'nin "iran islam cumhuriyeti bir devlet ismidir... yaz"
talimatı açık olduğu için yazdım ama biçimi tartışmaya açık.

### AÇIK SORU 2 — KOORDİNATÖRE: Hûzistan 1335-1393, Lür-i Büzürg mü Küçek mi

**BULUNAMADI — TDV KESİN DEĞİL.** TDV `huzistan` maddesi: "İlhanlı Hükümdarı
Abaka Han, Hûzistan'ı Luristan Atabegi I. Yûsuf Şah'a iktâ olarak verdi" ama
I. Yûsuf Şah'ın Lür-i Büzürg mü Lür-i Küçek mi atabegi olduğunu BELİRTMİYOR,
tarih de vermiyor. ⚠️ İPUCU (kesin değil, uydurmuyorum — işaretliyorum):
standart akademik kaynaklarda (Encyclopaedia Iranica, "Atabakan-e Lorestan")
I. Yûsuf Şah adı Hazaraspî/Lür-i Büzürg hükümdarları arasında geçer ve
Lür-i Büzürg coğrafi olarak Hûzistan'a bitişik (güneydoğu Luristan); Lür-i
Küçek kuzey-batıda, Hûzistan'dan uzak. Bu YALNIZ bir ipucu — TDV doğrulamadığı
için Emre'ye "muhtemelen Lür-i Büzürg, TDV teyit etmiyor" diye götürün, kesin
diye değil.

### AÇIK SORU 3 — KOORDİNATÖRE: `harita:"iran"` ölçümü (yeni araştırma kalemi)

İstenen ölçüm yapıldı, künyeye DOKUNULMADI:
- **1335-1501 penceresi**: `harita:"iran"` hiçbir noktada bu pencereyi
  KAPSAMIYOR — `afsar` f=1736, `kacar` f=1789, ikisi de bu tarihten çok
  sonra başlıyor. (Zaten bilinen, ERTELENMİŞ sorun; Lür/Muzafferî/İncû/
  Kutluğhanlı künyeleri artık hazır ama noktaya BAĞLANMADI — o karar sizin.)
- **1747-1796 penceresi (123 nokta, en büyük tek pencere)**: `afsar`'ın f/t'si
  (1736-1796) SAYISAL olarak bu pencereyi tam kapsıyor, id/harita araması
  muhtemelen bu künyeyi BULACAK — **ama TARİHSEL OLARAK YANLIŞ.** `afsar`'ın
  kendi ozeti "Nadir Şah'ın ölümüyle (1747) fiilen parçalandı, Horasan'da bir
  kolu 1796'ya dek sürdü" diyor; 123 noktanın örnekleri (Tarki, Ağraham burnu,
  Tebriz…) Horasan'da DEĞİL, çoğu Kafkasya/İran içi — yani bu coğrafya
  1747-1794 arası fiilen `zend`in (ya da yerel kargaşanın) konusu, `afsar`ın
  Horasan kalıntısının değil. `zend`e bugün `harita:"zend"` eklendi (yukarı
  bak); noktaların `d:"iran"` → `d:"zend"` devri (1751-1794 için, muhtemelen
  Kafkasya noktaları hariç — onlar için ayrı bir Kafkas hanlığı künyesi
  gerekebilir, dizinde hiç yok, bu oturumun kapsamı dışında bırakıldı) sizin
  kararınız.

### ②.6 ölü slug ertelemesi taraması — SONUÇ: 0 künye

`devletler.js`'te "ertele", "bekliyor", "sonraya bırak", "araştırılacak"
örüntülerinin TAMAMI tarandı (grep, tüm dosya). **Tek bir künye bile TDV ölü
slug yüzünden "ertelendi" notu taşımıyor.** En yakın örnek `nebhani` (Uman)
kaydındaki "TDV'de ayrı madde bulunmadığı için henüz ayrılmamıştır" notu ama
bu farklı bir konu (Cülfâr'ın Hürmüz'e tâbiiyetinin ayrı satır olup olmaması),
eksik künye değil — künyenin kendisi zaten yazılı ve canlı.

### İPTAL EDİLEN KALEMLER (koordinatör talimatıyla, hiç yazılmadı)

Fetret şehzadeleri (zaten `fetret-suleyman/isa/musa/mehmed` + doğru `harita:`
alanlarıyla var), Ceneviz (zaten `cenova` + `harita:"ceneviz"` var), B sınıfı
8 kalemin 8'i de (suud/sirbistan/bulgaristan/avusturya/yemen/bosna zaten
`harita:` ile bağlı künyelere sahip). Bu üçüne HİÇ yazma yapılmadı — okuma
sırasında da yerlesimler*.js'e dokunulmadı, yalnız `harita:` alanları
`node -e` ile okundu (salt okunur doğrulama).

### BİTİŞ ÖLÇÜTÜ TABLOSU (güncel sayılarla)

```
✅ çekirdek dizinsiz kimlik   koordinatörün düzelttiği ölçüme göre 1 (`turkmen`) → 0 (künye yazıldı)
✅ iran · zend künyeleri      ikisi de yazık/güncellendi, TDV ile doğrulandı (AÇIK SORU 1: iran'ın t alanı)
✅ dört Fetret şehzâdesi      zaten künyeli bulundu (fetret-*), rapor edildi, YAZILMADI
✅ B sınıfı 8 kalem           8/8 zaten künyeli bulundu (harita: alanıyla), YAZILMADI
✅ hasat künyeleri            lur ×2 · muzafferi ×3(muzafferi/incu/kutlughanli) · astrahan(mevcut, harita eklendi) · ryazan(yeni) — 6/6 tamam
✅ ölü slug taraması          tüm dosya (317 kayıt) tarandı, 0 künye "ertelendi" örüntüsüyle eşleşti
+  ek: galzay (koordinatörün sonradan eklediği kalem) yazıldı
```
```

Her satırın yanına **ölçtüğün sayıyı** yaz. *"Bitirdim"* değil,
*"24 → 7, şu yedisi şu sebeple kaldı"* de.
