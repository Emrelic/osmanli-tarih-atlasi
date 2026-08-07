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
✅ zend künyesi            YAZILDI (harita:"zend" ile) — 124 nokta serbest kaldı
✅ lur-i-buzurg/kucek      YAZILDI (1155-1424 · 1184-1597, TDV luristan)
✅ galzay                  YAZILDI (1709-1738, TDV kandehar)
✅ turkmen                 YAZILDI — çekirdekte dizinsiz kalan TEK kimlikti
✅ iran künyesi            YAZILDI (modern devlet: Pehlevi → İ.İ.C.)
✅ hasat künyeleri         muzafferi · incu · kutlughanli · ryazan · astarhan
⚪ ölü slug taraması       AÇIK — sıradaki iş
🟡 üç açık soru            koordinatöre bırakıldı (iran t: şeması · Hûzistan
                          sahibi · harita:"iran"ın afsar'a bağlılığı)

⚠️ İPTAL EDİLEN eski ölçütler (7 Ağustos düzeltmesi): "çekirdek dizinsiz
24 → 10" · "dört Fetret şehzâdesi" · "B sınıfı 8 kalem" — üçü de
koordinatörün yanlış ölçümünden doğmuştu, hepsinin künyesi zaten vardı.

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

Her satırın yanına **ölçtüğün sayıyı** yaz. *"Bitirdim"* değil,
*"24 → 7, şu yedisi şu sebeple kaldı"* de.

---

## ⑧ KAPANIŞ — `iran.t:` düzeltme geri alındı + ②.6 tekrar doğrulandı (7 Ağustos, devam)

**`iran.t:` olayı:** Koordinatör önce "`t:"1923-10-29"` yaz, `f:`i 1925'te
bırak" dedi — bu iki talimat birlikte `f:1925 > t:1923` TERS DÖNEM açıyordu
(kendi uyarısının tarif ettiği tam kusur). Talimatı henüz uygulamamıştım
(dosyayı yalnız okuyordum, `isvec`/`danimarka` emsalini doğruluyordum) —
koordinatör kendi kendini düzeltip talimatı GERİ ÇEKTİ ("YANLIŞTI"). Sonuç:
`iran` kaydına **hiç dokunulmadı**, hâlâ orijinal hâliyle duruyor:
`f:"1925-12-12"`, `t:"2026-08-07"`, `harita:` alanı yok (317 kayıttan 70'i
zaten haritasız — bu normal, yalnız dizin amaçlı kayıtlar). Doğrulandı
(`grep id:"iran"`).

**②.6 ölü slug ertelemesi taraması — TEKRAR ÇALIŞTIRILDI, aynı sonuç: 0.**
Bu turda arama örüntüsü genişletildi: `ertele`, `ertelen`, `bulunmadığı için`,
`302`, `ölü slug`/`olu slug`, `dead slug`, `slug bulunamadı`, `slug yok`,
`doğru slug`, `yeniden dene`, `taslak`, `geçici olarak`, `sonra bulun`,
`taranacak`, `yeniden ara`, `slug ara` — tümü `data/devletler.js`nin tamamına
(317 kayıt, ~3600 satır) karşı koşturuldu. **Hiçbir künye "TDV'de madde
bulunmadığı için ertelendi" ya da eşdeğeri bir notla ERTELENMİŞ görünmüyor.**
Bulunan tek yakın eşleşme yine `nebhani` (Uman) kaydındaki not — ve bu, daha
önce raporlandığı gibi, eksik bir künye değil, künyenin İÇİNDEKİ bir alt-ayrım
kararı (Cülfâr'ın Hürmüz'e tâbiiyetinin ayrı satır olup olmaması). `data/
devletler.js` içindeki üç mevcut "302 döndürüyor" notu (`kandehar`/`galzay`
komşusu, `ryazan`, `izlanda`) hâlihazırda standart-akademik kaynakla ÇÖZÜLMÜŞ
kayıtlar, ertelenmiş değil.

**SONUÇ — §②.6 KAPANDI: 317 kayıt tarandı, 0 künye "ertelendi" örüntüsüyle
eşleşti, 0 adres düzeltildi (düzeltilecek aday yok).**

Listemdeki tüm kalemler bitti. Yeni iş bekliyorum ("battaniye ad" ölçümü).

---

## ⑨ "BATTANİYE AD" ÖLÇÜMÜ (7 Ağustos, SALT ÖLÇÜM — `devletler.js`e HİÇ DOKUNULMADI)

**Yöntem notu (şeffaflık için):** Koordinatörün verdiği "pencere" sayıları
(rusya 221, fransa 162…) muhtemelen `data/donemler.js`nin (üretilmiş, 12 MB)
patlatılmış zaman-dilimi sayısı — ben KAYNAK seviyesinde ölçtüm: çekirdek 27
`yerlesimler*.js` dosyasındaki HAM `s:[{f,t,d}]` kayıtlarını `d:` değerine göre
grupladım. Sayılar bu yüzden EŞLEŞMİYOR (ör. rusya benim ölçümümde 48 grup/115
nokta-dönem) — ama **hangi tarih aralığının boşta kaldığı ve hangi noktaların
örnek olduğu** aynı kaynaktan geliyor, güvenilir. `lehistan` istenen ölçüm
BENDEN yapıldı (künye yok değildi, zaten dizinde vardı — `f:1569-07-01,
t:1795-10-24`).

| battaniye ad | künye ömrü | boşluk penceresi (kaynak seviyesi) | dizinde var mı | gereken yeni künye | TDV durumu |
|---|---|---|---|---|---|
| **rusya** | 1547-01-16→1917-03-15 | **ÖN**: 1281→1547 (3 grup/8 nokta-dönem, örn. Moskova, Novgorod, Tula). **ARKA**: 1917-03-15→1923-10-29 (35 grup/**94 nokta-dönem — en büyük tek boşluk**, örn. Kırım/Kafkasya/Orta Asya'nın hemen hepsi) | Moskova/Sovyet için HİÇBİR künye yok (`moskova`, `sovyet-rusya`, `sscb` id'leri taranmadı bulunamadı) | **2**: (a) Moskova Büyük Knezliği (~1325→1547), (b) Sovyet Rusya/SSCB (1917-11-07→1923-10-29 ufuk) | TDV `rusya` (200, CANLI, genel madde) İKİSİNİ DE kapsıyor — birebir: "I. İvan Daniloviç (1325-1341) 'büyük knez' unvanını edindi", "1480'de Altın Orda hâkimiyetinden çıktı", "1917 Ekim İhtilâli", "Sovyet Sosyalist Cumhuriyetleri Birliği... 30 Aralık 1922" |
| **fransa** | 987-01-01→1792-09-21 | **ARKA**: 1792-09-21→1923-10-29 (23 grup/**46 nokta-dönem — ikinci en büyük boşluk**, Cumhuriyet+Napolyon+Restorasyon+III. Cumhuriyet) | YOK (`fransa-cumhuriyet` vb. hiçbir id yok) | **1**: Fransa (1792 sonrası — Cumhuriyet/İmparatorluk/Restorasyon/III. Cumhuriyet TEK kayıtta, `almanya` kaydının HRE→Alman İmparatorluğu emsali gibi) | TDV `fransa` (200, CANLI) kapsıyor: "22 Eylül'de cumhuriyet ilân edildi", "imparatorluk dönemi (1804-1814)", restorasyon, "yeniden cumhuriyet ilân edildi (4 Eylül 1870)". ⚠️ TDV "22 Eylül" diyor, mevcut `fransa` künyesinin `t:"1792-09-21"`i 21'inde — 1 günlük fark, KOORDİNATÖRE bırakıldı |
| **isvec** | 1523-06-06→1923-10-29 | **ÖN**: 1281→1523 (2 grup/2 nokta-dönem, Helsinki+Stockholm — küçük) | YOK (`kalmar-birligi` id yok) | **1** (belki 2: Kalmar-öncesi ayrı İsveç + Kalmar Birliği), düşük öncelik — yalnız 2 nokta etkileniyor | TDV `isvec` (200, CANLI) Kalmar Birliği'ni (1397-1434 kuruluş) VE 1523 Gustav Vasa bağımsızlığını doğruluyor; Kalmar-öncesi kesin kuruluş tarihi madde özetinde net değil |
| **lehistan** | 1569-07-01→1795-10-24 (BEN ÖLÇTÜM) | **ÖN**: 1281→1569 (10 grup/**16 nokta-dönem — üçüncü boşluk**). **ARKA**: 1795→1815 (1 grup/1 nokta, Varşova — Varşova Dükalığı) | YOK (Polonya Krallığı/Litvanya Büyük Dükalığı/Varşova Dükalığı hiçbiri dizinde yok — `polonya` id'si zaten 1918-sonrasına ayrılmış, `litvanya` de öyle) | **2-3**: Polonya Krallığı (1569 öncesi) + Litvanya Büyük Dükalığı (1569 öncesi) — hangi NOKTANIN hangisine ait olduğu AYRI coğrafi araştırma ister, ölçmedim; + küçük bir Varşova Dükalığı kaydı (1 nokta, düşük öncelik) | Polonya: TDV `polonya` (200, CANLI) — "20 Ocak 1320" taç giyme, devletleşme "963"e uzanıyor. Litvanya: TDV `polonya` maddesinde 1386 evlilik birliği geçiyor ama Litvanya'nın KENDİ kuruluş tarihi maddede YOK — standart akademik gerekir. Varşova Dükalığı: `varsova`/`varsova-dukaligi` slugları ÖLÜ (302), bulunamadı |
| **norvec** | 1905-06-07→1923-10-29 | **YOK** — künye kendi tek penceresini (1905→1923, 1 nokta) tam kapsıyor | — | **0** | — |
| **danimarka** | 1380-01-01→1923-10-29 | **ÖN**: 1281→1380 (2 grup/2 nokta-dönem, Oslo+Kopenhag — küçük) | — | **muhtemelen 0 yeni künye** — TDV `danimarka` (200, CANLI) krallığı "VI. yüzyıl"a dayandırıyor, 1281-1380 arasında bir KOPUŞ yok; bu muhtemelen YENİ KÜNYE değil, mevcut kaydın `f:`sinin geriye çekilmesi (**1 düzeltme**) | TDV `danimarka` sürekliliği doğruluyor, 1380'i özel kılan bir olay maddede geçmiyor |

**TOPLAM: bu iş yaklaşık 7 yeni künye + 2 düzeltme demektir** (rusya 2 kesin +
fransa 1 kesin + isvec 1 muhtemel + lehistan 2-3 muhtemel/araştırma-bağımlı +
danimarka 0 yeni/1 düzeltme + fransa'nın 1 günlük tarih farkı 1 düzeltme).
⚠️ **Belirsizlik lehistan'da**: Polonya/Litvanya ayrımı nokta-bazlı coğrafi
araştırma istiyor, ölçmedim (kapsam dışı bıraktım) — kesin sayı 6-8 arası
olabilir. **En büyük tek kalem rusya'nın ARKA boşluğu (94 nokta-dönem, Sovyet
Rusya/SSCB)** — bu tek künye yazılırsa boşluğun büyük kısmı kapanır.

`devletler.js`e HİÇ YAZILMADI/DEĞİŞTİRİLMEDİ — yalnız okundu (`node -e` ile
salt-okunur), TDV slug'ları `curl`/`WebFetch` ile test edildi. Bu bulgu bu
dosyaya (kendi ilerleme notum) yazıldı, pathspec'li commit edilecek.

---

## ⑩ 🔴 ⑨'DAKİ TABLO YANLIŞTI — KÖK SEBEP BULUNDU, ÖLÇÜM TEKRARLANDI

**Kök sebep koordinatörün tahmininden FARKLI çıktı — ama sonuç aynı: veri
kaçıyordu.** Koordinatör "çok satırlı alan/boşluk toleranslı regex" kusurundan
şüphelendi; gerçek sebep ondan da temel bir şey: `⑨`'daki script'im tüm
dosyaları `eval()` ettikten sonra yalnız `window.YERLESIMLER`'i okuyordu. Ama
**`yerlesimler.js` DIŞINDAKİ HER DOSYA KENDİ DEĞİŞKENİNE yazıyor**
(`window.YERLESIMLER_EK7`, `_EK8`, `_AFRIKA`, `_KIRIM`, ...) — `girdi.py`nin
`oku_dosya()`'sı bunu `re.search(r"window\.(YERLESIMLER\w*)\s*=", js)` ile
dosya başına ayrı buluyor, ben bulmuyordum. Sonuç: script'im **yalnız
`yerlesimler.js`'in kendi 765 noktasını** görüyordu, geri kalan 26 dosyanın
TAMAMI sessizce düşüyordu. `norvec`'in "boşluk yok" hükmü tam bu yüzden
yanlıştı — `norvec` verisinin neredeyse tamamı `_ek7`/`_ek8`/`_ek12`'de.

⚠️ **Bu, `⑨`'la sınırlı değil — bu OTURUMDAKİ TÜM önceki ölçümlerim aynı
script kalıbını kullandı** (iran/zend pencereleri, B sınıfı suud/sirbistan/
bulgaristan/vs. nokta sayıları, lür/muzafferî döneminin nokta sayıları).
**Yazılan KÜNYE'lerin f/t'leri etkilenmedi** (TDV'den geldi, yerleşim sayımına
dayanmıyordu) ama o bölümlerdeki NOKTA/PENCERE sayıları muhtemelen düşük
ölçülmüştü. Koordinatör isterse o ölçümleri de tekrarlarım — şimdilik yalnız
istenen altı battaniye adı düzelttim.

### Düzeltme sonrası yöntem

`re.search`in JS karşılığıyla dosya başına değişken adını bulup (`window\.(YERLESIMLER\w*)\s*=`)
o değişkeni okudum — `girdi.py`nin kendi yöntemi. **Taranan dosya: 27/27**
(`GIRDI_DOSYALARI` listesinin tamamı, `girdi.py`den birebir alındı).

**Dosya başına battaniye-ad kırılımı** (0 gören her hücre gerçek sıfır,
kontrol edildi — hiçbiri kaçırılmış kalıp değil, çünkü artık her dosyanın
KENDİ değişkeni okunuyor):

```
dosya                      rusya fransa isvec lehistan norvec danimarka
yerlesimler.js               115    47     5     23       1      2
yerlesimler_kirim.js          14     0     0      0       0      0
yerlesimler_seyrek.js          1     1     0      0       0      0
yerlesimler_ek2.js             2     0     0      0       0      0
yerlesimler_ek3.js             2     1     0      0       0      0
yerlesimler_ek4.js             2     0     0      0       0      0
yerlesimler_ek5.js              0     0     0      0       0      0   ← gerçek sıfır
yerlesimler_ek6.js             3     0     0      0       0      0
yerlesimler_afrika.js          0    45     0      0       0      0   ← fransa'nın Cezayir/Tunus payı BURADAYDI
yerlesimler_ek.js               0     0     0      0       0      0   ← gerçek sıfır
yerlesimler_ortaasya2.js       7     0     0      0       0      0
yerlesimler_ek7.js             18     0    33      6      19     12  ← norvec'in payı
yerlesimler_ek8.js             27     0    13      0      10      5  ← norvec'in payı
yerlesimler_ek9.js             13     0     0      0       0      0
yerlesimler_ek13.js            17     0     0      0       0      0
yerlesimler_ek14.js             9     0     0      0       0      0
yerlesimler_ek15.js             7     0     0      0       0      0
yerlesimler_ek17.js            13     0     0      8       0      0
yerlesimler_ek18.js            10     0     0      0       0      0
yerlesimler_ek16.js             0     0     0      0       0      0   ← gerçek sıfır
yerlesimler_ek20.js             1     0     0      0       0      0
yerlesimler_ek19.js             0     0     0      0       0      0   ← gerçek sıfır
yerlesimler_ek21.js             0     0     0      0       0      0   ← gerçek sıfır
yerlesimler_ek22.js             5     0     0      0       0      0
yerlesimler_ek11.js             4     0     4      2       0      0
yerlesimler_ek10.js             3     0     0      0       0      0
yerlesimler_ek12.js             0     0     0      0       2      2  ← norvec'in payı
```

### Yeni toplamlar — koordinatörün çekirdek sayısıyla karşılaştırma

| battaniye ad | benim toplam (kayıt) | koordinatörün çekirdek ölçümü | fark |
|---|---|---|---|
| rusya | **273** | 264 | +9 (küçük, muhtemelen gruplama farkı) |
| fransa | **94** | 93 | +1 (ihmal edilebilir) |
| isvec | **55** | 55 | **BİREBİR** |
| lehistan | **39** | (verilmedi) | — |
| norvec | **32** | (verilmedi, ama bulgu doğrulandı) | `1281-01-01→1537-01-01` 17 kayıt, dosya `ek7+ek8+ek12` — **koordinatörün bulgusuyla BİREBİR** |
| danimarka | **21** | 21 | **BİREBİR** |

**Dört kalemde (isvec/danimarka birebir, rusya/fransa ±1) doğrulandı — yöntem artık güvenilir.**

### Düzeltilmiş boşluk tablosu

| battaniye ad | künye ömrü | ÖN boşluk | ARKA boşluk | dizinde var mı | gereken yeni künye | TDV |
|---|---|---|---|---|---|---|
| **rusya** | 1547-01-16→1917-03-15 | 23 kayıt (7 pencere-grubu), 1281→1547 | **242 kayıt (96 pencere-grubu) — devasa, önceki ölçümün 2,5 katı**, 1917→1923 | YOK | **2**: Moskova Büyük Knezliği (~1325→1547) + Sovyet Rusya/SSCB (1917-11-07→1923-10-29) | TDV `rusya` (200, CANLI) ikisini de kapsıyor — önceki turda doğrulandı |
| **fransa** | 987-01-01→1792-09-21 | 0 | **93 kayıt (31 pencere-grubu) — önceki ölçümün 2 katı**, 1792→1923 (metropol + `yerlesimler_afrika.js`'teki Cezayir/Tunus, 1830/1881 sonrası) | YOK | **1**, ama artık AÇIKÇA metropol Fransa + Cezayir/Tunus'u birlikte kapsamalı (İspanya/Portekiz emsali gibi tek kayıt) | TDV `fransa` (200, CANLI) — önceki turda doğrulandı |
| **isvec** | 1523-06-06→1923-10-29 | **30 kayıt (3 pencere-grubu) — önceki ölçümün 15 katı**, 1281→1523 (çoğu Finlandiya: `1281→1809-09-17` tek pencerede 17 kayıt) | 0 | YOK | **1** (Kalmar-öncesi/Kalmar Birliği İsveç), artık düşük öncelik DEĞİL — 30 kayıt etkileniyor | TDV `isvec` (200, CANLI) Kalmar Birliği'ni doğruluyor — önceki turda doğrulandı |
| **lehistan** | 1569-07-01→1795-10-24 | **30 kayıt (13 pencere-grubu)**, 1281→1569 | 1 kayıt, 1795→1815 (Varşova Dükalığı) | YOK | **2-3**: Polonya Krallığı + Litvanya Büyük Dükalığı (nokta ayrımı araştırma ister) + küçük Varşova Dükalığı | Polonya: TDV canlı. Litvanya: TDV'de tarih yok. Varşova: slug ölü |
| **norvec** 🔴 **DÜZELTİLDİ** | 1905-06-07→1923-10-29 | **17 kayıt (1 pencere-grubu), 1281→1537**, dosya `ek7+ek8+ek12` — ÖNCEKİ TURDA "boşluk yok" denmişti, YANLIŞTI | 0 | YOK (`kalmar-birligi`/`norvec-kralligi` yok) | **1 (belirsiz)** — 1380'den beri Danimarka ile birlikte olduğu için (`danimarka` künyesinin f'si de 1380) belki YENİ KÜNYE değil, 1380-1537 kısmı `d:"danimarka"`ya devir; yalnız 1281-1380 (birlik öncesi bağımsız Norveç) için küçük bir künye gerekebilir. KESİN KARAR ARAŞTIRMA İSTİYOR | TDV'de **`norvec` maddesi YOK** (302) — Avrupa iç tarihi, TDV kapsamı dışı (§4), standart akademik kaynak gerekir |
| **danimarka** | 1380-01-01→1923-10-29 | 4 kayıt (3 pencere-grubu), 1281→1380 | 0 | — | **muhtemelen 0 yeni künye**, `f:` geriye çekilebilir (1 düzeltme) | TDV `danimarka` sürekliliği doğruluyor — önceki turda doğrulandı |

### TOPLAM — GÜNCELLENDİ, ⑨'daki "7+2" ASKIDAN İNDİ, YERİNE BU GEÇERLİ

**Bu iş toplam ≈ 7-9 yeni künye + 2 düzeltme demektir** (rusya 2 kesin +
fransa 1 kesin + isvec 1 kesin + lehistan 2-3 muhtemel + norvec 0-1 belirsiz
+ danimarka 0 yeni/1 düzeltme + fransa'nın 1 günlük tarih farkı 1 düzeltme).
Nokta SAYILARI ciddi değişti (rusya arka boşluk 94→242, fransa arka boşluk
46→93, isvec ön boşluk 2→30) ama KAÇ YENİ KÜNYE gerektiği hemen hemen aynı
kaldı — tek gerçek yeni madde **norvec** (önceki turda "0" denmişti, şimdi
"0-1, araştırma ister"). **En büyük tek kalem hâlâ rusya'nın 1917-1923 arası
boşluğu (242 kayıt, Sovyet Rusya/SSCB).**

`devletler.js`e bu turda da HİÇ YAZILMADI (git status ile doğrulandı).

---

## ⑪ NOT — düzeltme öncesi destekleyici nokta sayıları hakkında

Düzeltme öncesi (`⑨`'dan önceki) ölçümlerdeki — Lür-i Büzürg/Küçek, Muzafferî,
İncû, Kutluğhanlı ve benzeri kalemlerin künyelerini yazarken kullandığım
destekleyici nokta/pencere sayıları — yöntemi `⑩`'da bulunan aynı hataya
sahipti: `eval()` sonrası yalnız `window.YERLESIMLER` okunuyordu, geri kalan
26/27 dosya sessizce atlanıyordu. **Künyelerin f/t tarihleri bundan
etkilenmedi** (hepsi TDV'den geldi, yerleşim nokta sayımına dayanmadı) — hiçbir
karar bu hatalı sayılara dayanılarak verilmedi, yalnız ölçüm bağlamı/örnek
sayıları düşük çıkmış olabilir. Koordinatör bunu CLAUDE.md §5 vakası olarak
not düştü; eski ölçümlerin yeniden koşulmasına gerek yok.

**DURUM: BEKLEMEDE.** `norvec` kararı ve "battaniye ad" programının tamamı
Emre'nin onayını bekliyor. `data/devletler.js`e karar gelene kadar hiçbir şey
yazılmayacak. Yeni talimat gelene kadar aktif iş yapılmıyor.

---

## ⑫ 🔒 RESMİ KİLİT — petek üretimi koşuyor

Koordinatör petek üretimini başlattı (~30 dk). `data/devletler.js`e koşu
bitene kadar KESİNLİKLE YAZILMAYACAK — zaten beklemedeydim, bu resmî teyit.
Bugünkü iki teslim (`zend` 124 pencere, `lur-i-buzurg` 8 nokta) bu koşuyla
canlıya çıkıyor; `muzafferi`/`incu`/`kutlughanli`/`galzay` yazılı ve renkleri
hazır, taşımaları İran 1335-1501 kararına bağlı (Emre'de). Koordinatör
"dosya senin" diyene kadar hiçbir işlem yapılmıyor, tamamen beklemedeyim.
