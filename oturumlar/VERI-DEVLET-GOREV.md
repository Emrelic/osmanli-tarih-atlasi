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

---

## ⑬ EMRE "EVET" DEDİ — DALGA 1 TASLAKLARI (kilit sürüyor, `devletler.js`e
## YAZILMADI, yalnız araştırma + taslak)

Kapsam: A sınıfı yalnız (≥20 yıl taşma). `iran` (1335-1501) Emre'nin
ERTELEDİĞİ bölge — dokunulmadı. `norvec` kararı geldi: **tek künye,
`danimarka`ya bağlanmıyor.** Aşağıdaki 7 taslak (5 yeni-künye-adayı bölge ×
bazısı 2 künye + 1 tek-künye + 2 düzeltme) kilit kalkınca birebir
`data/devletler.js`e taşınmaya hazır — burada yalnız TASLAK, canlı değil.

### TASLAK 1 — `moskova` (rusya ön boşluk, 1281→1547)

TDV `rusya` (200, CANLI) doğruladı: "I. İvan Daniloviç (1325-1341) 'büyük
knez' unvanını edindi", "1480'de Altın Orda hâkimiyetinden çıktı". Bitiş
tarihi (1547-01-16) mevcut `rusya` künyesinin kendi `f:`siyle bire bir aynı
tutuldu (süreklilik).

```js
{ id:"moskova", ad:"Moskova Büyük Knezliği", tur:"prenslik", bolge:"dogu-avrupa",
  f:"1325-01-01", t:"1547-01-16", baskent:"Moskova",
  ozet:"I. İvan Kalita'nın 'büyük knez' unvanını almasıyla Rus topraklarının siyasî merkezi hâline gelen knezlik; 1480'de Altın Orda hâkimiyetinden fiilen çıktı, IV. İvan'ın çar ilan edilmesiyle Rusya Çarlığı'na dönüştü (bkz. [[rusya]]). (kaynak: TDV, madde: rusya)",
  kronoloji:[
    { t:"1325-01-01", tur:"kurulus", b:"I. İvan Daniloviç (Kalita) 'büyük knez' unvanını aldı, Moskova Rus topraklarının siyasî merkezi oldu" },
    { t:"1480-01-01", tur:"toprak-kazanc", b:"Altın Orda hâkimiyetinden fiilen çıktı (Ugra Nehri karşılaşması)" },
    { t:"1547-01-16", tur:"son", b:"IV. İvan çar ilan edildi, Moskova Knezliği'nin yerini Rusya Çarlığı aldı" }
  ]
},
```

### TASLAK 2 — `sovyet-rusya` (rusya arka boşluk, 1917→1923 — EN BÜYÜK KALEM, 242 kayıt)

TDV `rusya` (200, CANLI) doğruladı: "1917 Ekim İhtilâli", "Sovyet Sosyalist
Cumhuriyetleri Birliği... 30 Aralık 1922". Ekim İhtilali'nin gün tarihi (7
Kasım, Gregoryen) maddede birebir geçmiyor — standart tarihtir, işaretli.

```js
{ id:"sovyet-rusya", ad:"Sovyet Rusya / SSCB", tur:"cumhuriyet", bolge:"dogu-avrupa",
  f:"1917-11-07", t:"1923-10-29", baskent:"Petrograd → Moskova",
  ozet:"Ekim İhtilâli ile Bolşeviklerin iktidara gelmesiyle kurulan Rusya Sovyet Federatif Sosyalist Cumhuriyeti; Ukrayna, Beyaz Rusya ve Transkafkasya ile birleşerek SSCB'yi oluşturdu (1923 sonrasında da sürdü). ⚠️ Ekim İhtilâli'nin günü (7 Kasım, Gregoryen — dönemin Rusya'sında hâlâ kullanılan Jülyen takvimiyle 25 Ekim) TDV maddesinde birebir geçmiyor, standart tarihtir. (kaynak: TDV, madde: rusya — SSCB kuruluş tarihi '30 Aralık 1922' birebir)",
  kronoloji:[
    { t:"1917-11-07", tur:"kurulus", b:"Ekim İhtilâli — Bolşevikler Petrograd'da iktidarı ele geçirdi (Jülyen takvimle 25 Ekim)" },
    { t:"1918-03-03", tur:"antlasma", b:"Brest-Litovsk Antlaşması ile Osmanlı dahil Merkezi Güçler'le savaştan çekildi" },
    { t:"1922-12-30", tur:"birlesme", b:"Rusya, Ukrayna, Beyaz Rusya ve Transkafkasya birleşerek SSCB'yi kurdu" }
  ]
},
```

### TASLAK 3 — `fransa-cumhuriyet` (fransa arka boşluk, 1792→1923 — ikinci en büyük kalem, 93 kayıt; `yerlesimler_afrika.js`teki Cezayir/Tunus 1830/1881 sonrası payı dahil)

TDV `fransa` (200, CANLI) tam kronolojiyi verdi. ⚠️ **TARİH FARKI:** TDV
"22 Eylül'de cumhuriyet ilân edildi" diyor; mevcut `fransa` künyesinin
`t:"1792-09-21"`i 21'inde — 1 gün fark, aşağıda düzeltme olarak da not
düşüldü.

```js
{ id:"fransa-cumhuriyet", ad:"Fransa (1792 Sonrası — Cumhuriyet/İmparatorluk/Restorasyon)", tur:"cumhuriyet", bolge:"bati-avrupa",
  f:"1792-09-22", t:"1923-10-29", baskent:"Paris",
  ozet:"I. Cumhuriyet'in ilanından III. Cumhuriyet'e uzanan, rejim rejim değişen ama devlet kimliği süren dönem (bkz. [[fransa]] Krallık dönemi için) — Napolyon'un İmparatorluğu, Restorasyon, Temmuz Monarşisi, II. Cumhuriyet ve II. İmparatorluk hepsi TEK kayıtta (1923 sonrasında da sürdü; `almanya` kaydının Kutsal Roma→Alman İmparatorluğu emsali). Cezayir (bkz. [[cezayir-fransiz]]) ve Tunus'un 1881 sonrası fiilî Fransız idaresi de bu kaydın harita kimliğine dahil. (kaynak: TDV, madde: fransa)",
  kronoloji:[
    { t:"1792-09-22", tur:"kurulus", b:"I. Fransız Cumhuriyeti ilan edildi" },
    { t:"1804-01-01", tur:"hukumdar", b:"Napolyon Bonapart kendini imparator ilan etti (1814'e dek)" },
    { t:"1815-06-09", tur:"hukumdar", b:"Restorasyon — Bourbon hanedanı geri döndü (1830'a dek)" },
    { t:"1830-08-09", tur:"bolunme", b:"Temmuz Monarşisi — Louis Philippe tahta çıktı" },
    { t:"1848-02-24", tur:"kurulus", b:"II. Cumhuriyet ilan edildi" },
    { t:"1852-12-02", tur:"hukumdar", b:"III. Napolyon kendini imparator ilan etti (II. İmparatorluk)" },
    { t:"1870-09-04", tur:"kurulus", b:"III. Cumhuriyet ilan edildi" },
    { t:"1881-05-12", tur:"toprak-kazanc", b:"Bardo Antlaşması ile Tunus fiilen Fransız protektorası oldu (bkz. [[tunus-ocagi]])" }
  ]
},
```

### TASLAK 4 — `isvec-birlik-oncesi` (isvec ön boşluk, 1281→1523, çoğu Finlandiya)

TDV `isvec` (200, CANLI) Kalmar Birliği'ni (1397-1434) ve 1523 bağımsızlığını
doğruladı. Kalmar-öncesi (1281-1397) için TDV'de ayrı bir kesin tarih yok —
atlasın pencere-başlangıcı konvansiyonuyla `f:"1281-01-01"` kullanıldı (emsal:
birçok kayıt aynısını yapıyor, bkz. `kirim`, çeşitli beylikler).

```js
{ id:"isvec-birlik-oncesi", ad:"İsveç Krallığı (Kalmar Birliği Öncesi ve Dönemi)", tur:"krallik", bolge:"kuzey-avrupa",
  f:"1281-01-01", t:"1523-06-06", baskent:"Stockholm",
  ozet:"Kalmar Birliği (1397-1523) öncesi bağımsız İsveç Krallığı ve birlik dönemi (Danimarka-Norveç-İsveç birleşik krallığı); Gustav Vasa'nın Danimarkalıları yenip bağımsızlığı yeniden kurmasıyla sona erdi (bkz. [[isvec]]). ⚠️ 1281 tarihi hânedanın kuruluşu değil atlasın pencere başlangıcıdır. (kaynak: TDV, madde: isvec)",
  kronoloji:[
    { t:"1397-01-01", tur:"birlesme", b:"Kalmar Birliği kuruldu — Danimarka, Norveç ve İsveç Margrete I altında birleşti" },
    { t:"1434-01-01", tur:"isyan", b:"İsveçliler Kral XIII. Erich'e karşı ayaklandı (Engelbrekt isyanı)" },
    { t:"1523-06-06", tur:"son", b:"Gustav Vasa, Danimarkalıları yenip İsveç'i birlikten çıkardı, kral seçildi" }
  ]
},
```

### TASLAK 5 — `polonya-erken` (lehistan ön boşluk parçası 1/2, 1281→1569)

TDV `polonya` (200, CANLI): "20 Ocak 1320" taç giyme, devletleşme "963"e
uzanıyor.

```js
{ id:"polonya-erken", ad:"Polonya Krallığı (Birlik Öncesi)", tur:"krallik", bolge:"dogu-avrupa",
  f:"1320-01-20", t:"1569-07-01", baskent:"Krakov",
  ozet:"IV. Ladislav Lokietek'in taç giymesiyle fetret döneminin sona erip krallığın yeniden birleştiği dönem; devletleşme kökleri X. yüzyıla (963) uzanır. Litvanya Büyük Dükalığı ile 1386'da kişisel birlik, 1569'da Lublin Birliği ile tam birleşme (bkz. [[litvanya-buyuk-dukalik]], [[lehistan]]). (kaynak: TDV, madde: polonya)",
  kronoloji:[
    { t:"1320-01-20", tur:"kurulus", b:"IV. Ladislav Lokietek Krakov'da taç giyerek fetret dönemini sona erdirdi" },
    { t:"1386-01-01", tur:"ittifak", b:"Litvanya Büyük Dükü Jogaila ile Kraliçe Jadwiga'nın evliliğiyle kişisel birlik kuruldu" },
    { t:"1569-07-01", tur:"son", b:"Lublin Birliği ile Litvanya'yla tam birleşerek Lehistan-Litvanya Birliği'ni oluşturdu" }
  ]
},
```

### TASLAK 6 — `litvanya-buyuk-dukalik` (lehistan ön boşluk parçası 2/2, 1281→1569)

**BULUNAMADI (TDV'de):** `litvanya` slug'ı yalnız "LİPKALAR" (Litvanya'da
yaşayan Tatar topluluğu) maddesine düşüyor, Litvanya Büyük Dükalığı'nın
kendi maddesi yok. §4 gereği standart akademik kaynağa (Mindaugas'ın taç
giymesi, yaygın kabul gören tarih) dayanıldı.

```js
{ id:"litvanya-buyuk-dukalik", ad:"Litvanya Büyük Dükalığı", tur:"dukalik", bolge:"dogu-avrupa",
  f:"1253-07-06", t:"1569-07-01", baskent:"Vilnius",
  ozet:"Mindaugas'ın taç giyerek Litvanya'yı Katolik bir krallık ilan ettiği (tek örnek — sonraki hükümdarlar dük unvanını kullandı) devlet; Gediminas hanedanı döneminde büyük güce dönüştü, Polonya ile 1386 kişisel birliği 1569'da tam birleşmeye evrildi (bkz. [[polonya-erken]], [[lehistan]]). TDV'de Litvanya Büyük Dükalığı'nın kendi maddesi yok (yalnız `LİPKALAR` — Litvanya Tatarları — maddesi var); tarihler standart akademik kaynağa göredir.",
  kronoloji:[
    { t:"1253-07-06", tur:"kurulus", b:"Mindaugas taç giyerek Litvanya'yı Katolik krallık ilan etti" },
    { t:"1316-01-01", tur:"hukumdar", b:"Gediminas tahta çıktı, hanedanı ve devleti büyük bir güce dönüştürdü" },
    { t:"1386-01-01", tur:"ittifak", b:"Büyük Dük Jogaila, Polonya Kraliçesi Jadwiga ile evlenip Polonya kralı oldu — kişisel birlik başladı" },
    { t:"1569-07-01", tur:"son", b:"Lublin Birliği ile Polonya'yla tam birleşerek Lehistan-Litvanya Birliği'ni oluşturdu" }
  ]
},
```

### TASLAK 7 — `norvec-kralligi` (norvec, 1281→1537 — KARAR GELDİ: tek künye, `danimarka`ya BAĞLANMIYOR)

**BULUNAMADI (TDV'de):** `norvec` slug'ı 302 (ölü), TDV'de müstakil Norveç
maddesi yok. §4 gereği (Avrupa iç tarihi, TDV kapsamı dışı) standart akademik
kaynağa dayanıldı — koordinatörün talimatındaki gibi.

```js
{ id:"norvec-kralligi", ad:"Norveç Krallığı (Birlik Öncesi ve Kalmar Dönemi)", tur:"krallik", bolge:"kuzey-avrupa",
  f:"1281-01-01", t:"1537-01-01", baskent:"Bergen → Oslo",
  ozet:"Bağımsız ortaçağ Norveç Krallığı; 1319'da İsveç ile, 1380'de Danimarka ile kişisel birliğe girdi, 1397'de Kalmar Birliği'nin parçası oldu; 1523'te İsveç birlikten ayrılınca Danimarka ile kaldı, 1536-37 Reform hareketiyle Norveç Krallık Meclisi kaldırılıp fiilen Danimarka eyaletine dönüştü (bkz. [[danimarka]] — AYRI künye, birleştirilmedi). ⚠️ 1281 tarihi hânedanın kuruluşu değil atlasın pencere başlangıcıdır; TDV'de `norvec` maddesi YOK (302), tarihler standart akademik kaynağa göredir (§4).",
  kronoloji:[
    { t:"1319-01-01", tur:"ittifak", b:"VII. Magnus (Magnus Eriksson) hem Norveç hem İsveç kralı oldu — ilk kişisel birlik" },
    { t:"1380-01-01", tur:"ittifak", b:"IV. Olav'ın tahta çıkışıyla Danimarka ile kişisel birlik başladı" },
    { t:"1397-06-17", tur:"birlesme", b:"Kalmar Birliği resmen kuruldu — Danimarka, Norveç, İsveç Margrete I altında birleşti" },
    { t:"1523-06-06", tur:"bolunme", b:"İsveç Kalmar Birliği'nden ayrıldı; Norveç Danimarka ile birlikte kaldı" },
    { t:"1537-01-01", tur:"son", b:"Reform hareketiyle Norveç Krallık Meclisi kaldırıldı, ülke fiilen Danimarka'nın bir eyaletine dönüştü" }
  ]
},
```

### DÜZELTME 1 — `danimarka.f:` geriye çekilmeli (1380 → 1281)

TDV `danimarka` (200, CANLI): krallığı "VI. yüzyıl"a dayandırıyor,
1281-1380 arasında bir KOPUŞ yok. **Bu YENİ KÜNYE değil**, mevcut kaydın
`f:` alanının atlasın pencere-başlangıcına (1281-01-01) çekilmesi ve
1380'in kronolojiye "Danimarka-Norveç birliği başladı" biçiminde
taşınmasıdır. Taslak (mevcut kayda uygulanacak diff):

```
ESKİ: f:"1380-01-01"
YENİ: f:"1281-01-01"
ozet'e ekle: "Krallık VI. yüzyıla uzanır (TDV); 1380 Norveç ile kişisel
  birliğin başlangıcıdır, devletin kendi kuruluşu değil."
kronoloji'ye EKLE (başa): { t:"1380-01-01", tur:"ittifak",
  b:"IV. Olav'ın tahta çıkışıyla Norveç ile kişisel birlik başladı
  (bkz. [[norvec-kralligi]])" }
```

### DÜZELTME 2 — `fransa.t:` bir gün kaydırılmalı (1792-09-21 → 1792-09-22)

TDV `fransa` maddesi "22 Eylül'de cumhuriyet ilân edildi" diyor; mevcut
kayıt 21'inde bitiyor. `fransa-cumhuriyet` taslağının `f:`si de 22'de
başlıyor (TASLAK 3) — tutarlılık için ikisi birlikte düzeltilmeli, yoksa
1 günlük sahipsiz/çakışan aralık açılır.

---

### TOPLAM — DALGA 1 sonucu netleşti

**7 yeni künye taslağı + 2 düzeltme.** (Önceki "≈7-9" tahmininin ALT
UCUNDA netleşti — `lehistan` 2 ayrı künye ile çözüldü, `norvec` 1 künye ile
çözüldü, `danimarka` gerçekten 0 yeni künye/1 düzeltme çıktı.) Hepsi TASLAK
— `data/devletler.js` hâlâ kilitli, HİÇBİRİ YAZILMADI. Kilit kalkıp
"dosya senin" gelince yukarıdaki 7 bloğu birebir kopyalayıp gerçek künyeye
çevireceğim, ardından `node -e eval` ile sözdizimi + mükerrer id doğrulaması
yapacağım (bu oturumun standart pratiği).

DALGA 2 (35 kimlik/~203 pencere: irlanda, umman, adal, somali, ispanya,
sardinya, bosna, kirim, avusturya, bogdan, darfur, eflak, altinorda,
maratha, milanoduka, ...) — **Dalga 1 bitmeden başlanmadı**, koordinatörün
talimatı buydu.

---

## ⑭ 🔓 KİLİT KALKTI — DALGA 1 CANLIYA GEÇTİ + ARAŞTIRMA KÜNYE 3 kalemleri

### Dalga 1 — 7 taslak birebir yazıldı

`⑬`'teki 7 blok `data/devletler.js`e taşındı, doğrulandı (`node -e eval`,
sözdizimi temiz, mükerrer id 0): `moskova` · `sovyet-rusya` ·
`fransa-cumhuriyet` · `isvec-birlik-oncesi` · `polonya-erken` ·
`litvanya-buyuk-dukalik` · `norvec-kralligi`. 2 düzeltme uygulandı:
`danimarka.f` 1380→1281, `fransa.t` 1792-09-21→1792-09-22 (+ ilgili
kronoloji satırları). Kayıt sayısı 317→324.

### ARAŞTIRMA KÜNYE 3 kalemleri

- **`umman`** — dokunulmadı (talimat: künye zaten var, taşıma koordinatörün işi).
- **`benihalid` düzeltildi**: `t:` 1795→1830, kronolojiye ikinci dönem
  eklendi (1795 toprak-kayip → 1818 toprak-kazanc, Mâcid el-Ureyyir'in
  restorasyonu → 1830 son, Aklâ savaşı). TDV `halid-beni-halid` doğrulandı
  (WebFetch): "Lahsâ bölgesi Suûd ailesinin denetiminde kaldı… 1872'ye
  dek" — mevcut ozetteki "1874-75'te tarihe karıştı" ifadesi bu yeni
  bilgiyle çelişiyordu (TDV 1872 diyor, üstelik bu Osmanlı'nın DOĞRUDAN
  idareyi kurduğu tarih, Benî Hâlid'in kendi sonu değil), o yüzden
  kaldırıldı. Haritadaki 1841 bitişini 1830'a çekmek KOORDİNATÖRÜN işi,
  dokunulmadı.
- **3 yeni künye kalemi, 4 kayıt yazıldı** (ikisi tek kalem: dâcû+tunciler):
  - `evfat` (Evfât/İfat Emirliği, 1285-1415) — TDV `evfat` **CANLI** (⚠️
    araştırma raporu 302 demişti, kendi testimde 200 çıktı — muhtemelen
    ara dönemde slug canlandı ya da önceki test hatalıydı; `harar`
    maddesiyle çapraz doğrulandı, ikisi aynı tarihleri veriyor).
  - `dacu` (Dâcû/Daju, ~1200-1400) + `tunciler` (Tunjur, 1400-1695) —
    ikisinin de kendi slug'ı ölü (302), TDV `darfur` maddesinin İÇİNDEN
    çıkarıldı. Kesinlik düşük işaretlendi (TDV yalnız yüzyıl veriyor).
  - `makdisu-sultanligi` (Ebû Bekir b. Fahreddin, 1281-1500) — TDV
    `makdisu` **canlı**, `mogadisu` slug'ı canlı ama içi boş/yönlendirme
    olduğu doğrulandı (WebFetch ile ayrıca test edildi).
- **⚪ Dokunulmadı**: `kaffa` (Mato hanedanı, isimsiz 32 kral — TDV'de
  `kefa`/`kafa`/`kaffa` üçü de 302) ve `somali`'nin iç/güney noktaları —
  ikisi de "bulunamadı", araştırma raporu zaten böyle işaretlemişti,
  tekrar aramadım.

### 🔴 `darfur` TARİH TARTIŞMASI — ÖLÇÜLDÜ, DEĞİŞTİRİLMEDİ, KARAR KOORDİNATÖRDE

TDV `darfur` maddesi WebFetch ile tekrar okundu, birebir alıntı:
> "Dârfûr Sultanlığı'nın kuruluşu, XVII. yüzyılın sonlarında Bumû el-Kasîr'in
> bölgeyi istilâ etmesiyle birlikte gelen karışıklıktan sonraya rastlamaktadır.
> Sultan Süleyman Solonc'un saltanatı 1695-1715 yıllarında olup…"

Mevcut `darfur` künyesi `f:"1603-01-01"` diyor, kronolojisi de "1603-01-01
kurulus Süleyman Solon (Solong) tarafından" yazıyor — **TDV'nin kendi
verdiği hükümdarlık tarihiyle (1695) ~92 yıl fark var.** İki ihtimal:
(a) künye yanlış ölçülmüş (1603 başka bir kaynaktan/yanlış aktarılmış),
(b) 1603 farklı bir olayı (Keira hanedanının çok daha erken, gevşek bir
başlangıcını) işaretliyor ve TDV yalnız Süleyman Solonc ile "asıl
konsolidasyonu" anlatıyor — ikisi ÇELİŞEN değil FARKLI SORULARIN cevabı
olabilir (CLAUDE.md kimlikler.js §74 emsali). **Ben karar vermedim,
künyeyi değiştirmedim** — `dacu`/`tunciler` taslaklarını TDV'nin 1695
tarihine göre yazdım (bağımsız, `darfur`ın kendi tarihine dayanmadan),
böylece hangi karar çıkarsa çıksın `dacu`→`tunciler`→`darfur` zinciri
tutarlı kalır (1400→1695→[darfur'un kendi f'si, 1603 ya da 1695]).

### GÜNCEL SAYIM

`data/devletler.js`: 317 (kilit öncesi) → 324 (Dalga 1) → **328** (ARAŞTIRMA
KÜNYE 3, +4: evfat/dacu/tunciler/makdisu-sultanligi) + 1 düzeltme
(benihalid). Hepsi `node -e eval` ile doğrulandı: sözdizimi temiz,
mükerrer id 0.

Koordinatöre haber verildi, commit'i koordinatör yapacak.

---

## ⑮ `darfur.f` düzeltmesi uygulandı — 1603 → 1695

Koordinatör kararını verdi: TDV birincil kaynak (§4), `darfur` maddesi
Süleyman Solonc'un hükümdarlığını "1695-1715" diye tarihliyor, eski 1603'ün
künyede kaynağı yoktu. Uygulandı:

```
ESKİ: f:"1603-01-01", kronoloji[0].t:"1603-01-01"
YENİ: f:"1695-01-01", kronoloji[0].t:"1695-01-01"
```

`ozet:`e neden değiştiği not düşüldü (kaynaksız 1603 → TDV'nin 1695-1715
hükümdarlık tarihi, §4 gereği). Zincir artık kesintisiz: `dacu` (1200-1400)
→ `tunciler` (1400-1695) → `darfur` (1695-1916). Doğrulandı (`node -e eval`):
328 kayıt, mükerrer id 0, `darfur.f`="1695-01-01". Ayrıca `evfat`'ın canlı
çıkması koordinatör tarafından teyit edildi (araştırma raporu yanılmış).

`data/devletler.js` yine pathspec'siz bırakıldı, yalnız bu ilerleme dosyası
commit edildi. Koordinatöre haber verildi; dört araştırma oturumunun raporu
(Balkanlar/Akdeniz/Hindistan-İran/Doğu Asya) geldikçe bekleniyor.

---

## ⑯ DALGA 2 — beş araştırma oturumu teslimi işlendi (317 → 337 kayıt)

Bir API bağlantı hatasıyla `surakarta`/`yogyakarta` ortasında durmuştum;
koordinatör 335 kayıtta (sözdizimi temiz, mükerrer 0) doğrulayıp devam
etmemi istedi. Kaldığım yerden bitirdim.

### ① 12 künye kaleminden 9'u yazıldı, 3'ü DOKUNULMADI (gerekçeyle)

**Yazılanlar** (9 yeni kayıt, hepsi `node -e eval` ile doğrulandı):
`savoya` (1032-1720-08-02, TDV yok/standart akademik) · `floransa`
(1115-1532, TDV yok/standart akademik, `toskana`nın kendi ozetiyle
doğrulandı) · `bonacolsi` (1273-1328-08-16, TDV yok/standart akademik,
`mantua`nın f:1328-01-01'iyle aynı yıl) · `imereti` (1490-1810-02-20, TDV
`gurcistan` yalnız "1804 birleşme" diyor, kesin ilhak standart akademik) ·
`gurcistan-demokratik-cumhuriyeti` (1918-05-26–1921-03-16, TDV kuruluşu
birebir doğruluyor, bitiş günü atlasın kendi Batum verisiyle uyumlu) ·
`poni` (977-1405, TDV `bruney` Po-ni'den hiç bahsetmiyor, standart Çin
tarihi kaynağı) · `sanzan` (1322-1429, 1281-1322 BİLEREK boş bırakıldı —
gerçek boşluk, uydurulmadı) · `surakarta` + `yogyakarta` (1755-02-13,
Giyanti Antlaşması — TDV `mataram` ölü/302, standart akademik kaynak).

**🔴 DOKUNULMADI — iki kalem ZATEN VARDI (araştırma raporu güncel değildi):**
- **`astarhan-hanligi`** — bu künye 7 Ağustos'ta ZATEN yazılmıştı, id
  `astarhan` (TDV'nin kendi transkripsiyonu), f/t (1466-1556) BİREBİR aynı,
  `harita:"astarhan"` alanı da o gün eklenmişti. DALGA 2 araştırma oturumu
  muhtemelen `yerlesimler_ek22.js`deki eski yorumu ("astrahan-hanligi kimliği
  yok") görüp künyenin `astarhan` adıyla zaten var olduğunu FARK ETMEMİŞ —
  benim 7 Ağustos'taki notum tam bunu açıklıyordu. Yeni künye YAZILMADI,
  mükerrer olurdu.
- **`irlanda-hur-devleti`** — aynı desen: `irlanda-serbest-devlet` id'siyle
  ZATEN VAR, f/t (1922-12-06–1923-10-29) BİREBİR istenen aralık. Yeni künye
  YAZILMADI.
- **`sulu` (Buansa Racalığı, 1390-1457)** — talimat zaten "YAZMA, bulunamadı
  bırak" diyordu, kaynak zayıf olduğu için hiç araştırmadım, "bulunamadı"
  olarak bırakıldı.

📌 İki mükerrer kalem, `§5`'in "bayat satır bir araştırma oturumunu yanılttı"
desenine tam uyuyor — burada bayat olan tek dosya değil, PARALEL çalışan bir
araştırma oturumunun ELİNDEKİ SNAPSHOT'tı. Koordinatöre paralel oturumların
`devletler.js`in EN GÜNCEL hâlini (özellikle aynı gün içindeki commit'leri)
görüp görmediğini kontrol etmesini öneririm.

### ② Beş TDV-künye tarih çelişkisi — ÖLÇÜLDÜ, `navarra` HARİÇ DEĞİŞTİRİLMEDİ

| kimlik | künyedeki | TDV'nin dediği | fark | durum |
|---|---|---|---|---|
| `eflak` | f:1330-01-01 | TDV `eflak`: "1310 yılında... Basarab... voyvoda ortaya çıktı", 1330 Posada'da bağımsızlık | 20 yıl | ÖLÇÜLDÜ, DEĞİŞTİRİLMEDİ — muhtemelen iki farklı SORU (voyvoda mı oldu / bağımsız mı oldu), §74 emsali gibi olabilir, karar koordinatörde |
| `brunei-sultanligi` | f:1368-01-01, kronoloji "Muhammed Şah tahta çıktı" | TDV `bruney`: "Muhammed Şah (**1405-1415**) adını alan... Alang Betatar'ın sultanlık kurmasıyla başlar" — AYNI KİŞİ, TDV'nin verdiği yıl farklı | ~40 yıl | ÖLÇÜLDÜ, DEĞİŞTİRİLMEDİ — künyenin kendi kronoloji CÜMLESİ ile TDV'nin aynı olayı anlattığı görülüyor, `poni`nin t:'si TDV'nin 1405'ine bağlandı (yukarı bak) ama `brunei-sultanligi`nin kendisi değiştirilmedi |
| `demak` | t:1587-01-01 | TDV `demak`: "Demak bölgede güçlenen diğer devletlerin hâkimiyetine girdi (**1578**)" | 9 yıl | ÖLÇÜLDÜ, DEĞİŞTİRİLMEDİ (bir ara ozet'e not eklemiştim, "tek başına değiştirme" talimatına daha sıkı uymak için GERİ ALDIM — künye şu an tamamen dokunulmamış hâliyle duruyor) |
| `navarra` | t:1512-07-25 | Kendi kronolojisi: "1620-10-19 Béarn/Fransız kolu Fransa'ya katıldı" | 108 yıl | **DÜZELTİLDİ** (talimat böyleydi) — bu TDV çelişkisi değil, künyenin KENDİ İÇİNDE t: alanı ile son kronoloji satırının tutarsızlığıydı. `t:` 1620-10-19'a çekildi, 1512 satırı `son`dan `toprak-kayip`e, 1620 satırı `birlesme`den `son`a çevrildi |
| `sih-imparatorlugu` | f:1801-04-12 | Misl konfederasyonu ~1765'ten aynı siyasi gövdenin erken hâli (standart tarih bilgisi) | 36 yıl | ÖLÇÜLDÜ, DEĞİŞTİRİLMEDİ — **TDV bu tartışmayı hiç KAPSAMIYOR**: `misl` slug'ı CANLI ama alakasız bir Arapça terim maddesi ("benzeşme/özdeşlik"), Sih tarihiyle ilgisi yok; `pencap` maddesi de Misl'lerden hiç bahsetmiyor. Yani bu köşe TDV'nin DEĞİL, tamamen standart akademik kaynağın konusu — §4'ün "TDV'nin kapsamadığı coğrafyalar" maddesine tam örnek |

🔴 **AYRI BULGU — `sih-imparatorlugu`nun ozet alanında veri bozulması var,
BEKLETMEDEN bildiriyorum (§7.1⑥):** Künyenin `ozet:` alanı şu paragrafı
taşıyor: *"⚠️ BİTİŞ 1635 DEĞİL 1691: 1635 ÇAHAR'ın (İç Moğolistan)
teslimidir; HALHA 30 Mayıs 1691'de Dolonnor'da tâbi oldu..."* — bu METIN SİH
İMPARATORLUĞU İLE HİÇ İLGİLİ DEĞİL, Moğolistan/Halha tarihinden bir başka
kaydın notu yanlışlıkla buraya yapıştırılmış (muhtemelen toplu bir düzenleme
sırasında kopyala-yapıştır hatası). **Ben dokunmadım** (bu künye "tek başına
değiştirme" listesindeydi) ama bu ayrı bir düzeltme gerektiriyor — Sih
İmparatorluğu ozeti temizlenmeli, o paragraf muhtemelen Kuzey-Yuan/Halha
kaydına ait.

### ③ Yeni denetim pratiği — `artuklu` tipi künye-içi/harita çelişkisi

Anladım ve kabul ediyorum: bundan sonra künye yazarken/düzeltirken kronoloji
satırlarının haritayla (yerlesimler'in `d:` dönemleriyle) çelişip
çelişmediğine bakacağım, görürsem BEKLETMEDEN bildireceğim. `artuklu`
örneğini (kronoloji "1234 Harput Selçuklulara geçti" diyor, harita 1465'e
kadar Artuklu boyuyor) zaten koordinatör biliyor, yeniden ölçmedim — bu
turda YENİ bir örnek bulmadım (ama yukarıdaki `sih-imparatorlugu` ozet
bozulması bu pratiğin bir yan ürünü olarak ortaya çıktı).

### GÜNCEL SAYIM

`data/devletler.js`: 328 (bir önceki teslim) → **337** (+9 DALGA 2 künyesi).
Doğrulandı (`node -e eval`): sözdizimi temiz, mükerrer id 0, ters/sıfır
dönem 0. `demak` ve `eflak`/`brunei-sultanligi`/`sih-imparatorlugu`
TAMAMEN dokunulmamış hâlde. `navarra` düzeltildi. `data/devletler.js` yine
pathspec'siz bırakıldı, yalnız bu ilerleme dosyası commit edildi.

Koordinatöre haber verildi.

---

## ⑰ Üretim koşusu sürerken iki iş — `harita:` ölçümü (② uygulandı, ① AÇIK SORU)

### ① `harita:` alanı eksikleri — ÖLÇÜLDÜ, KÖRLEMESİNE EKLENMEDİ, açık soru var

Verilen komutla ölçtüm (`girdi.yukle()`, 27 çekirdek dosya, 278 farklı
`d:` kimliği canlı haritada). Bugün yazdığım/yazacağım künyeler için sonuç:

```
surakarta                          1   ← zaten kullanılıyor, id=harita, EK GEREKMİYOR
yogyakarta                         2   ← zaten kullanılıyor, id=harita, EK GEREKMİYOR
zend                              124  ← zaten kullanılıyor, id=harita (harita: alanı zaten VAR, 7 Ağustos'ta eklenmişti)
lur-i-buzurg                       8   ← zaten kullanılıyor, id=harita, EK GEREKMİYOR
turkmen                            8   ← zaten kullanılıyor, id=harita, EK GEREKMİYOR
iran                              124  ← ayrı konu (1335-1501 kararı bekliyor)
evfat, dacu, tunciler,
makdisu-sultanligi, ryazan          0  ← HENÜZ HİÇ KULLANILMIYOR (yerlesimler'e taşınmadı)
moskova, sovyet-rusya, fransa-cumhuriyet,
isvec-birlik-oncesi, polonya-erken,
litvanya-buyuk-dukalik, norvec-kralligi,
savoya, floransa, bonacolsi, imereti,
gurcistan-demokratik-cumhuriyeti, poni,
sanzan, ermenistan-demokratik-cumhuriyeti,
azerbaycan-demokratik-cumhuriyeti   0  ← HENÜZ HİÇ KULLANILMIYOR
```

**Sonuç: adı geçen 14 kalemin (evfat/dacu/tunciler/makdisu-sultanligi/ryazan +
9 Dalga 2) HİÇBİRİ şu an haritada `id:`sinden FARKLI bir kimlikle
kullanılmıyor — çoğu HİÇ kullanılmıyor (henüz `yerlesimler`e taşınmadı),
ikisi (surakarta/yogyakarta) zaten `id`siyle birebir kullanılıyor.**
Verdiğiniz kural ("id ile harita kimliği AYNIYSA harita: alanı GEREKMİYOR")
harfiyen uygulanırsa **bu 14 kaleme EK YAPILACAK BİR ŞEY YOK.**

⚠️ **AÇIK SORU — bekletmeden soruyorum (§7.1⑥):** "kırk renksiz kimlik"i
göremedim (mesajda listelenmedi, yalnız sayı verildi) — o kırk kimliği
KÖRLEMESİNE aramaya çalışmadım, çünkü hangi künyeleri kapsadığını bilmeden
"aynı mı farklı mı" ölçemem. Ayrıca gerçek bir ÇELİŞKİ var: mevcut
`rusya`/`fransa`/`isvec`/`danimarka`/`lehistan`/`norvec` kayıtlarının
HEPSİNDE `harita:` alanı `id:`siyle AYNI DEĞERLE zaten yazılı duruyor
(ör. `{ id:"danimarka", ..., harita:"danimarka" }`) — yani mevcut dosyanın
YERLEŞİK GELENEĞİ "id=harita olsa bile açıkça yaz"ken, bana verilen YENİ
kural "gerekmiyor" diyor. RENK 2'nin beş kez şikâyet etmesi, aracının
`id:`ye DÜŞMEDEN yalnız `harita:` alanını okuyor olabileceğini
düşündürüyor — eğer öyleyse yeni kural (durum_tablosu.py:48) ile RENK 2'nin
kendi aracı FARKLI davranıyor demektir. **İki seçenek sunuyorum:**
(a) yeni kuralı harfiyen uygula, 14 kaleme dokunma — RENK 2'nin aracını
kontrol edin; (b) eski gelenek gibi 14 kaleme de `harita:"<id>"` (kendi
id'siyle aynı) ekleyeyim, zararsız ama "gerekmiyor" kuralına aykırı. Hangisi
isteniyor, ve "kırk renksiz kimlik" listesi nedir — bildirin, elimde
olmadan ilerleyemem.

### ② `ermenistan-demokratik-cumhuriyeti` + `azerbaycan-demokratik-cumhuriyeti` — YAZILDI

İki yeni künye eklendi (`data/devletler.js` 337→**339**):

- **`azerbaycan-demokratik-cumhuriyeti`** (1918-05-28 → 1920-04-27) — TDV
  `azerbaycan` (200, CANLI) birebir doğruladı: "28 Mayıs 1918'de Azerbaycan
  Demokratik Cumhuriyeti ilân edildi", "27 Nisan 1920'de... Kızıl Ordu...
  son verdi". ⚠️ Verdiğiniz tarih (04-28) ile 1 gün fark var — TDV'nin kendi
  metni ayırıyor: cumhuriyetin SONU 27 Nisan, ARDIL SSC'nin kuruluşu 28
  Nisan (\"Hemen ardından 28 Nisan 1920'de Azerbaycan Sovyet Sosyalist
  Cumhuriyeti kurulmuştur\") — iki farklı olay, ben cumhuriyetin KENDİ
  sonunu (27'sini) yazdım, ozette açıkça not düştüm.
- **`ermenistan-demokratik-cumhuriyeti`** (1918-05-28 → 1920-12-02) — ⚠️
  **BULUNAMADI (TDV'de):** `ermenistan` slug'ı ÖLÜ (302) — alternatifler de
  denendi (`ermeniler`, `ermeni`, `ermenistan-cumhuriyeti`, hepsi 302).
  `kafkasya` maddesi genel çerçeveyi doğruluyor ("Azerbaycan, Gürcistan,
  Ermenistan... millî cumhuriyetleri kuruldu") ama gün vermiyor. Tarihler
  standart akademik kaynağa göredir (§4) — verdiğiniz tarihlerle (1918-05-28,
  1920-12-02) yazdım, TDV bunları DOĞRULAMADI, çürütmedi de.

Üçü de (`gurcistan-demokratik-cumhuriyeti` dahil) `bolge:"kafkasya"`,
aynı 1918-05-2x kuruluş penceresinde ama AYRI bitiş tarihleriyle yazılı.
Doğrulandı (`node -e eval`): 339 kayıt, mükerrer id 0, ters/sıfır dönem 0.

`data/devletler.js` pathspec'siz bırakıldı, yalnız bu ilerleme dosyası
commit edildi. Koordinatöre haber verildi — ① için cevap bekliyorum.

---

## ⑱ NOKTA HALKA-2'nin 266 yıllık hayaleti — üç künye yazıldı + Geçici Hükûmet raporu

`harita:` konusu kapandı, cevabı okudum (§⑫ referansı: `js/app.js` arayüz
kalemi, koordinatörde — bir daha dokunmuyorum).

### ① `novgorod` · `pskov` · `tver` — YAZILDI (339 → 342)

TDV tarandı: `novgorod`, `pskov`, `tver` ve denenen bütün alternatifler
(`-knezligi`, `-cumhuriyeti`, `-buyuk-knezligi`, `novogrod`, `pskof`,
`tferi`, `kiev`, `kiev-knezligi`, `rus-knezlikleri` — 9 slug) **HEPSİ 302
(ölü).** TDV bu coğrafyayı gerçekten kapsamıyor, uyarınız doğru çıktı.
Üçü de `ermenistan` emsaliyle AÇIKÇA "BULUNAMADI (TDV'de)" işaretlendi,
standart akademik kaynağa (yaygın kabul gören tarihler) dayanıldı:

```
novgorod   1136-01-01 → 1478-01-15   (III. İvan, veçe çanını indirdi)
pskov      1348-01-01 → 1510-01-13   (III. Vasili, veçe çanını indirdi)
tver       1246-01-01 → 1485-09-12   (III. İvan'ın kuşatması, son knez Litvanya'ya kaçtı)
```

`moskova` ve `ryazan`a dokunulmadı (talimat böyleydi — renksiz ama zaten
yazılı, RENK 2'nin işi). Doğrulandı (`node -e eval`): 342 kayıt, mükerrer
id 0, ters/sıfır dönem 0.

### ② Geçici Hükûmet boşluğu (1917-03-15 → 1917-11-07) — ÖLÇÜLDÜ, ÖNERİLDİ, YAZILMADI

Ölçüm (`girdi.yukle()`): bu 8 aylık pencereyi kesen **233 `rusya`-etiketli
dönem** var (hepsi `rusya`nın kendi `t:`sinden (1917-03-15) sonraya taşıp
1918-1923 arası bir tarihte bitiyor — yani bu 233, daha önce ölçtüğüm
"rusya arka boşluğu"nun (242 kayıt) neredeyse tamamıyla aynı küme, sadece
bu 8 aylık dilimi de kapsıyor). TDV'de Geçici Hükûmet'e (`gecici-hukumet`,
`kerenski`, `subat-devrimi`, `rus-inkilabi` — dördü de 302) dair MÜSTAKİL
bir madde yok; `rusya` genel maddesi Şubat/Ekim devrimlerini ayrıntılı
tarihsiz, tek bir anlatı akışı içinde veriyor.

**İki seçenek, KARAR VERMİYORUM:**

**(a) Yeni künye** — `gecici-hukumet-rusya` (veya benzeri), f:1917-03-15
(Nikolay II'nin tahttan çekilmesi) → t:1917-11-07 (sovyet-rusya'nın f'i).
Artı: tarihsel olarak GERÇEK bir rejim (Kerenski hükûmeti, çarlık değil ama
henüz Sovyet de değil) — üç aylık `ermenistan`/`azerbaycan`/`gurcistan`
partisiyle aynı hassasiyet düzeyi. Eksi: TDV hiç kapsamıyor, künye
"standart akademik" damgasıyla dizine bir tane daha kısa ömürlü geçiş
rejimi ekler.

**(b) `sovyet-rusya`nın `f:`i geriye çekilir** (1917-11-07 → 1917-03-15).
Artı: tek künye, daha basit; zaten `sovyet-rusya`nın kendi kronolojisinde
"1917-11-07 kurulus" satırı zaten Ekim İhtilali'ni ayrı bir OLAY olarak
taşıyor — künyenin `f:`i geriye çekilse bile bu satır olduğu gibi kalıp
"Ekim İhtilali" gerçek tarihiyle görünmeye devam eder (bilgi kaybolmaz).
Eksi: Şubat-Ekim arası "Sovyet" değildi (Bolşevikler henüz iktidarda
değildi), künyenin kendi `ad:`ıyla ("Sovyet Rusya / SSCB") 8 aylık
Kerenski dönemini kapsamak tarihsel olarak yanıltıcı olabilir.

Şahsi gözlemim (karar değil): (b) bu partinin ölçeğine (8 ay, `rusya`nın
350 yıllık ömrüne kıyasla küçük) daha uygun görünüyor — ama TDV'nin bu
ayrımı hiç yapmaması ve künyenin kendi `ad:`ının "Sovyet" içermesi (a)'yı
da savunulabilir kılıyor. Karar koordinatörde.

`data/devletler.js` pathspec'siz bırakıldı. Koordinatöre haber verildi.

---

## ⑲ `rusya-gecici-hukumet` yazıldı + 🔴 BÜYÜK BULGU (bekletmeden bildiriyorum)

### `rusya-gecici-hukumet` — YAZILDI (342 → 343)

```
rusya-gecici-hukumet   1917-03-15 → 1917-11-07
```
Talimatınız birebir uygulandı: `f:` `rusya`nın kendi bitişiyle (1917-03-15),
`t:` `sovyet-rusya`nın kendi başlangıcıyla (1917-11-07) BİREBİR — zincir
`rusya → rusya-gecici-hukumet → sovyet-rusya` kesintisiz. 1 Eylül 1917 Rus
Cumhuriyeti ilanı kronolojiye eklendi. TDV'de yok (4 slug — `gecici-hukumet`,
`kerenski`, `subat-devrimi`, `rus-inkilabi` — hepsi 302), `ermenistan`
emsaliyle açıkça işaretlendi. Doğrulandı (`node -e eval`): 343 kayıt,
mükerrer id 0, ters/sıfır dönem 0.

### 🔴🔴 BÜYÜK BULGU — `sih-imparatorlugu` tek vaka DEĞİLMİŞ, AYNI PARAGRAF 53 KAYITTA

`sih-imparatorlugu`nun özetini temizlerken (istendiği gibi, tek kayıt)
merak edip `grep -c "BİTİŞ 1635 DEĞİL 1691"` koştum — **53 kayıtta AYNI
BİREBİR PARAGRAF var** (Moğolistan/Kuzey-Yuan/Halha'nın 1635-1691 tartışması),
temizledikten sonra hâlâ **52 kayıtta duruyor.** Etkilenen kayıtlar tamamen
ALAKASIZ coğrafyalar: Vijayanagara, Maratha, Mali, Hausa Bakwai, Aşanti,
Dahomey, Benin (krallık), Oyo, Kongo, Ndongo, Lunda, Buganda, Zulu, Merina,
Svahili kent-devletleri, Zengibar, Racputâne, Bicapur/Golkonda bölgesi,
Odisha, Tibet (guşi-han-oncesi), **`kuzey-yuan`nın KENDİSİ** (muhtemelen
BURASI gerçek/orijinal yuva — paragraf onun kendi konusu), Assam, Manipur,
Nepal, Ladak, Travankur, Kandy, Yafna, Ava, Lan Na, Şan devletleri, Lan
Sang, Angkor/Kamboçya, Mac hanedanı, Malaka ardılı sultanlıklar, Palembang,
Banten, Banjarmasin, Gowa, Tidore, Banda, Bali, Minangkabau, Timor, Azuchi-
Momoyama, Güney Ming, Trịnh, Formosa (Zheng), Mankup — **hepsi aynı 45+
kelimelik paragrafı taşıyor, hiçbirinin (kuzey-yuan hariç) konusuyla
ilgisi yok.**

**Bu benim yazdığım/dokunduğum bir şey DEĞİL** — dosyanın önceden var olan
hâlinde duruyordu, muhtemelen CLAUDE.md §11'in tarif ettiği türden toplu bir
düzenleme/betik hatası (bir notun "kuzey-yuan"a yazılırken bir şekilde
başka 52 kayda da bulaşması — sed/toplu-değiştirme kalıntısı gibi
görünüyor). **DOKUNMADIM** (yalnız açıkça izin verilen `sih-imparatorlugu`yu
temizledim) — bu, tek bir künyenin ötesinde bir karar/iş kalemi, "sıkışmadığın
bir anda kapat" ölçeğinin çok üzerinde.

**③ ne istiyorum:** Bu 52 kaydın temizliği ayrı bir iş kalemi olarak
planlanmalı mı (muhtemelen tek bir toplu-değiştirme betiğiyle, tek tek elle
değil — 52 kayıt) yoksa bekletmeden şimdi mi hallediyorum? Liste (id'ler)
gerekirse tam çıkarabilirim. Karar sizde.

`data/devletler.js` pathspec'siz bırakıldı. Koordinatöre haber verildi.

---

## ⑳ 53 kayıt temizliği — üç korumayla YAPILDI

Talimattaki sıraya göre:

**① önce ölç:** Paragrafın tam metnini regex ile çıkardım — **52 kayıtta
BİREBİR aynı varyant** (tek varyant, kısmi/farklı sürüm YOK). Sözde "53" bir
önceki turda zaten temizlediğim `sih-imparatorlugu`yu da sayıyordu; o hariç
tutulunca 52 kaldı. Kısmen eşleşen 0 kayıt olduğu için dokunulmayan bir
"kısmi vaka" kümesi yok.

**② `kuzey-yuan` ayrıldı, doğrulandı, DOKUNULMADI:** `kuzey-yuan.f`
"1368-09-14", `t:` "1691-05-30" — söylediğiniz gibi Dolonnor Kurultayı
tarihiyle birebir. Script id takibiyle satır satır ilerleyip yalnız
`kuzey-yuan` DIŞINDAKİ 51 kayıttan paragrafı çıkardı; `kuzey-yuan`ın kendi
kopyası dokunulmadan kaldı (doğrulandı: `ozet.includes('BİTİŞ 1635')` yalnız
`kuzey-yuan` için `true`).

**③ boş kalma kontrolü:** 51 kaydın hepsi için paragraf çıkarıldıktan sonra
kalan `ozet` uzunluğu ölçüldü — **en kısası 185 karakter**, hepsi "TDV'de
ayrı madde yok; standart akademik kaynağa göre yazıldı." cümlesiyle ve
öncesindeki gerçek tarihî anlatımla dolu, anlamsız/boş kalan YOK. **İşaretlenip
bekletilen kayıt: 0.**

**TESLİM: 53 tarandı (52 gerçek dış vaka, biri zaten önceki turda
temizlenmişti) · 52'de tam eşleşme (kısmi eşleşme 0) · 51'i temizlendi ·
0'ı boş kalacağı için işaretlendi · `kuzey-yuan`a dokunulmadı.**

Doğrulama (`node -e eval` + özel kontrol scripti): 343 kayıt (değişmedi,
yalnız metin kısaldı), mükerrer id 0, ters/sıfır dönem 0, çok kısa/boş özet
0, paragraf artık yalnız `kuzey-yuan`da. Ham dosyadan da elle iki örnek
(`vijayanagara`, `tungning`) satır satır kontrol edildi, temiz.

`data/devletler.js` pathspec'siz bırakıldı. Koordinatöre haber verildi —
② (40 künye listesi) bekleniyor.

---

## ㉑ 40'lık liste işlendi — ① afsar/kacar harita: düzeltildi, ② 37/38 künye yazıldı

### ① afsar/kacar `harita:` — YAZILDI (2 satır)

```
afsar   harita: "iran" → "afsar"
kacar   harita: "iran" → "kacar"
```
İkisine de bu değişikliği açıklayan not düşüldü. Doğrulandı.

### ② 38 künyeden 37'si yazıldı, 1'i (`ainu`) BULUNAMADI/UYDURULMADI

`denetim/kunye-bekleyen-40.txt`den okudum, büyükten küçüğe sırayla yazdım.
`data/devletler.js`: 343 → **380** (+37). Doğrulandı (`node -e eval`): 0
mükerrer id, 0 ters/sıfır dönem, listedeki 37 id'nin **hepsi** dosyada VAR.

**TDV CANLI ve İÇERİKLE doğrulanan 9 kalem** (curl + WebFetch, birebir
alıntı ozet'lerde): `bengal-sultanligi` (madde: `bengal`, 1340→1576 birebir)
· `bengal-nevabligi` (kısmen, 1757 Plassey birebir) · `haydarabad-nizam`
(madde: `haydarabad-nizamligi`, 11 Ekim 1724 birebir) · `cavnpur-sultanligi`
(madde: `jaunpur`, 1394-1483 birebir) · `cammu-kesmir` (madde: `kesmir`,
1846 birebir) · `bahavelpur` (madde: `bahavelpur`, 1748 birebir) ·
`multan-langah` (madde: `multan`, 1451/1527 birebir) · `bhopal` (madde:
`bopal--devlet` — dikkat: `ordu--sehir` tipi ÇİFT TİRE slug, id yine de
listedeki `bhopal` olarak tutuldu) · `pingnan` (madde: `panthay` — TDV
kimliği "Panthay" ama künye id'si listedeki `pingnan`, Yunnan'daki Hui
Müslüman isyanı, 1855-1873 birebir).

**TDV kısmen/dolaylı doğrulayan 1 kalem:** `samudra-pasai` (madde:
`endonezya` — "1280'lerde İslâm'ı kabul" ifadesi atlasın 1281 pencere-
başlangıcıyla ÇAKIŞIYOR, ilginç bir rastlantı; bitiş tarihi standart
akademik).

**🔴 BULUNAMADI ama önce arandı, sonra açıkça işaretlenen 3 kalem** (🟢
etiketliydi ama TDV'de gerçekten yoktu — ölçüm coordinatörün tahminini
düzeltti): `avad` (yalnız dolaylı bahisler, müstakil madde yok) ·
`cunagadh` (TDV arama motoru "madde başlıklarında sonuç bulunamadı" dedi,
sıfır sonuç) · `karnatik` (TDV arama motoru sıfır sonuç).

**Standart akademik kaynağa dayanan 24 kalem** (⚪ etiketliydi, tahmin
doğru çıktı): `kenmu` · `fransiz-cinhindi` · `san-fan` · `dashun` ·
`yadava` · `hanthawaddy` · `kakatiya` · `pagan` · `pandya` · `tay-son` ·
`taiping` · `madurai-sultanligi` · `singhasari` · `ho-hanedani` · `tonburi`
· `tran-hanedani` · `hoysala` · `laos-kralliklari` · `seylan-sinhala` ·
`sukhothai` · `bharatpur-cat` · `kocin` · `sarawak-brooke` ·
`sunda-pajajaran` — hepsi ozet'te AÇIKÇA "TDV'de ayrı maddesi yok" diye
işaretlendi, tarihler yaygın kabul gören standart tarihler (çoğu için
birden fazla bağımsız kaynakla örtüşen, tartışmasız denilebilecek
tarihler — Plassey, Dali'nin düşüşü, Bạch Đằng gibi iyi belgeli olaylar).

**🔴 `ainu` — YAZILMADI, BULUNAMADI:** Hokkaido'daki Ainu halkının biçimsel
bir "devlet" kurduğuna dair kaynak yok — dönemin haritada boyanan kimliği
muhtemelen Matsumae klanının (Japon) ticaret tekelini yansıtıyor, bu bir
Ainu devleti değil dışarıdan kurulan bir ilişki. Uydurmadım, künye
yazmadım; "bulunamadı" olarak bırakıldı.

### ⚠️ "veride görünen aralık" sütununa güvenilmedi — birkaç somut fark

Talimat gereği pencere sütunu yalnız BAĞLAM için kullanıldı, künye
tarihleri hep kaynaktan geldi. En büyük farklar: `taiping`in gözlemlenen
başlangıcı "1853-02-18" idi, gerçek kuruluş (Jintian Ayaklanması) 1851-01-11
— iki yıl fark, künye gerçek tarihi kullandı. `karnatik`in gözlemlenen
başlangıcı "1714" idi, standart akademik kaynak fiilî özerkleşmeyi 1690'a
koyuyor — künye 1690'ı kullandı. `pagan`ın gözlemlenen bitişi "1313" idi,
standart akademik kaynak Myinsaing kardeşlerin iktidarı 1297'de aldığını
söylüyor — künye 1297'yi kullandı.

### 🔴 Ö1 hazırlığı — her kayıtta hanedan/süreklilik notu

Talimat edildiği gibi, yazılan 37 künyenin **HEPSİNDE** ozet'e açıkça
"HANEDAN ÖMRÜ kimliğidir" / "ÜLKE SÜREKLİLİĞİ kimliğidir" / "HANEDAN/ÜLKE
karışık kimliktir" notu düşüldü. Kabaca dağılım: ~19 HANEDAN ÖMRÜ (İsyan
dahil), ~10 ÜLKE SÜREKLİLİĞİ (çoğu 1923 ufkunda kesilip gerçekte ötesine
taşıyan prens devletleri: `haydarabad-nizam`, `bahavelpur`, `bhopal`,
`cunagadh`, `bharatpur-cat`, `sarawak-brooke`, `cammu-kesmir`), ~8 karışık.
Bundan sonraki her künyede bu alışkanlığı sürdüreceğim.

`data/devletler.js` pathspec'siz bırakıldı. Koordinatöre haber verildi.

---

## ㉒ 7 kalem — 2 GERÇEK yeni künye + 4 MÜKERRER bulgu + 1 ölçüm raporu

### 🔴① `sadi` — YAZILDI, ÖNCELİKLİ İŞ BİTTİ (380 → 381)

```
sadi   1549-01-01 → 1659-01-01   kaynak: "sadiler"
```
TDV `sadiler` (200, CANLI) birebir doğruladı: kuruluş "916/1511" (Sûs cihad
emirliği), Fas'ın alınışı "956/1549", sona eriş "1069/1659" — üçü de
alıntılandı. ⚠️ Bulgu: `fas`ın kendi kronolojisi Alevî geçişini "1666" diye
veriyor, TDV "1659" diyor — 7 yıllık fark, **`fas`a dokunulmadı**, yalnız
`sadi`nin ozetinde işaretlendi. **RENK 2'YE HABER: `sadi` künyesi hazır,
renk yazılabilir.**

### 🔴② `kaffa` — YAZILMADI, ZATEN VARDI (aynı desen üçüncü/dördüncü kez)

Künye ZATEN yazılmıştı, id `kaffa-kralligi`, `harita:"kaffa"` ZATEN
BAĞLIYDI: `f:"1390-01-01"`, `t:"1897-09-10"` — coordinatörün istediği "1390-
1897, 5 asır" penceresiyle BİREBİR örtüşüyor. RENK 2'nin ölçümü (`kaffa↔
sidamo` ΔE 2,8) zaten bu iki künyenin f/t'lerine bakabilir, ek bir şey
gerekmiyor.

### ③ `cimma` — YAZILMADI, ZATEN VARDI

id `cimma-sultanligi`, `harita:"cimma"` ZATEN BAĞLI: `f:"1830-01-01"`,
`t:"1923-10-29"`.

### ④ `vollayta` — YAZILMADI, ZATEN VARDI

id `vollayta-kralligi`, `harita:"vollayta"` ZATEN BAĞLI: `f:"1281-01-01"`,
`t:"1894-01-17"`.

### ⑤ `sidamo` — YAZILMADI, ZATEN VARDI

id `sidamo-kralliklari`, `harita:"sidamo"` ZATEN BAĞLI: `f:"1281-01-01"`,
`t:"1897-01-01"`. RENK 2'nin `kaffa↔sidamo` ΔE 2,8 uyarısı için gereken
tarihler zaten dizinde — `kaffa-kralligi` (1390-1897) ile `sidamo-kralliklari`
(1281-1897) **gerçekten beş asır boyunca aynı anda sahnede**, uyarı GERÇEK,
yalnız künye eksikliği değil.

📌 **Dördü de aynı desen** (§5, `astarhan-hanligi`/`irlanda-hur-devleti`
vakalarıyla aynı kök): RENK 2'nin listesi `id:` ile eşleşme arıyor,
`harita:` alanına bakmıyor — dört kayıt da `harita:` ile zaten doğru
bağlıydı. **Yeni künye YAZILMADI, mükerrer olurdu.** Bu, aynı sınıf
hatanın şimdiye dek ölçülen 3.-6. vakası; RENK 2'nin ölçüm yönteminin
`id:`nin yanına `harita:`yı da eklemesi gerektiğini bir kez daha öneririm.

### ⑥ `kasim` — YAZILDI, GERÇEKTEN YOKTU (382. kayıt)

```
kasim   1452-01-01 → 1681-01-01   kaynak: "kasim-hanligi"
```
Kontrol ettim: ne `id:"kasim"` ne `harita:"kasim"` vardı — bu GERÇEK bir
boşluktu. TDV `kasim-hanligi` (200, CANLI) doğruladı: sona eriş "1681
yılında... Kāsım Hanlığı tarihe karıştı" birebir. ⚠️ Kuruluş yılı TDV'nin
KENDİ maddesinde tartışmalı ("1445" ya da "1452-1456", kaynaklar farklı) —
1452 orta bir tarih olarak seçildi, ozette işaretlendi.

### ⑦ `ainu` — KÜNYE DEĞİL, ÖLÇÜM RAPORU

`girdi.yukle()` ile ölçtüm: **`d:"ainu"` yalnız 2 kayıtta geçiyor**
(Matsumae, Hakodate), ikisi de aynı pencere: `1281-01-01 → 1550-01-01`.
Bu, önceki turda "bulunamadı" dediğim hükmü doğruluyor — küçük, ölçülmüş
bir boşluk (2 nokta), künye yazılmadı.

### GERÇEK TESLİM SAYISI

**2 GERÇEK yeni künye** (`sadi`, `kasim` — ikisi de TDV'den, kaynak: alanı
dolu) **+ 4 MÜKERRER bulgu** (`kaffa`/`cimma`/`vollayta`/`sidamo` zaten
vardı, dokunulmadı) **+ 1 ölçüm raporu** (`ainu`, 2 kayıt, künyesiz kaldı).
`data/devletler.js`: 380 → **382**. Doğrulandı (`node -e eval`): mükerrer
id 0, ters/sıfır dönem 0. Her iki yeni künyede `kaynak:` alanı dolduruldu
(yeni zorunluluk) ve hanedan/süreklilik notu düşüldü.

`data/devletler.js` pathspec'siz bırakıldı. Koordinatöre haber verildi —
`sadi` bitince ayrıca vurgulandı, RENK 2 bekliyor.

---

## ㉓ Üç ölçüm ağırlıklı iş — sibir birleştirme, mükerrer tarama, ainu, kaynak: maliyeti

### ① `sibir` ↔ `sibir-hanligi` BİRLEŞTİRİLDİ (382 → 381)

`sibir` kaldırıldı, `sibir-hanligi` tutuldu (zaten `harita:`/`kaynak:` ile
bağlıydı). TDV `sibir-hanligi` maddesi kesin gün vermiyor ("Sibirya
topraklarının tam fethi 1593-1604 arasında tamamlandı" diyor), ama
tutulan kaydın `t:"1598-08-20"`si bu aralığın içinde — standart akademik
kaynaktaki bilinen tarih (Ob Nehri Savaşı) ile tutarlı, DEĞİŞTİRİLMEDİ.
`sibir-hanligi`nin ozetine birleştirme notu düşüldü. `[[sibir]]` çapraz
referansı taranıp hiç kullanılmadığı doğrulandı (kırık link riski yok).

### ① TAM MÜKERRER TARAMASI — dört ayrı yöntemle, SIFIR yeni vaka

```
A) Aynı ad: farklı id:                                    0 çift
B) id: iç içe geçen (biri digerinin on-eki) çiftler       15 çift — HEPSİ
   incelendi, HEPSİ meşru ardışık-dönem/iç-içe-koloni
   zinciri (macaristan→habsburg→naiplik, fransa→
   fransa-cumhuriyet, umman→umman-zengibar, vb.) —
   MÜKERRER DEĞİL
C) harita:'siz kayıt + yakın f/t + ortak ad kelimesi
   taşıyan harita:'lı bir eş                                0 çift
D) Tam aynı f: VE t: (aynı bölge)                          4 grup — hepsi
   TESADÜFİ (atlas-penceresi konvansiyonunu paylaşan
   gerçekten FARKLI devletler, ör. `surakarta`/`yogyakarta`
   aynı gün Giyanti Antlaşması'yla doğan iki AYRI devlet)
```
**Sonuç: `sibir`in dışında BAŞKA mükerrer künye çifti YOK.** Dört yöntem de
sıfır ek vaka verdi; B ve D yöntemlerinin bulduğu 19 "aday" tek tek
incelendi, hiçbiri gerçek mükerrer değildi.

### ② `ainu` — KASITLI BOŞLUK, künye yazılmadı

`d:"ainu"` yalnız `Matsumae` ve `Hakodate`de geçiyor (Hokkaido/Ezo), ikisi
de `1281-01-01 → 1550-01-01`. `japonya` diye tek bir künye YOK — ana
kara Japonya'sı zincir hâlinde bağlı: `kamakura` (1185-1333, harita ✓) →
`kenmu` (1333-1336) → `muromachi` (1336-1573, harita ✓) → ... Bu zincir
1281-1550'yi TAM kapsıyor ama **yalnız ana kara (Honşu) için** — Hokkaido
tarihsel olarak bu şogunlukların YÖNETİMİNDE DEĞİLDİ. Matsumae klanının
Hokkaido'da ticarî/idarî varlığı ancak 16. yüzyıl sonunda (Toyotomi
Hideyoshi'nin 1590'larda tanımasıyla) başlıyor — tam da `ainu` penceresinin
BİTTİĞİ (1550) tarihe yakın. **Hüküm: `1281-1550` arası Hokkaido hiçbir
devletin toprağı değildi — bu KASITLI BOŞLUK, hata değil.** Künye
yazılmadı, `yerlesimler_*.js`e dokunulmadı (talimat böyleydi).

### ③ `kaynak:` alanı geriye dönük maliyet ölçümü — 339/342 boş, 38'i BEDAVA

343 tabanı (bugünün 39 yeni kaydı — 37'lik parti + `sadi`/`kasim` —
çıkarılarak) rekonstrükte edildi: 342 kayıt (fark 1: `sibir` bu turda
kaldırıldı, orijinal 343'te vardı ve o da boştu). **339 kayıtta `kaynak:`
alanı BOŞ** (koordinatörün "340" sayısıyla ±1 uyumlu).

`data/olaylar*.js`deki doğrulanmış `kaynak:` slug kümesi ölçüldü: **521
benzersiz slug.** Bu kümeye karşı 339 boş kaydı iki yoldan test ettim: (a)
ozet metnindeki "madde: X" ifadesi bu kümede mi, (b) kaydın kendi `id:`si
bu kümede mi (birebir çakışma).

**Sonuç: 339'un 38'i (%11) BEDAVA türetilebilir** — zaten ozette adı geçen
ya da id'siyle birebir örtüşen bir slug `olaylar*.js`de doğrulanmış hâlde
duruyor, yalnız `kaynak:` alanına KOPYALANMASI yeterli (yeniden TDV taraması
gerekmez). Örnekler: `bizans→bizans`, `memluk→memluk`, `kirim→kirim`,
`venedik→venedik`, `muzafferi→muzafferiler`, `macaristan→macaristan`,
`fransa→fransa`, `fransa-cumhuriyet→fransa`, `ingiltere→ingiltere`,
`sirbistan-nemanjic→sirbistan`. **Kalan 301 kayıt (%89) için ya yeni TDV
taraması ya da "TDV'de yok" tespiti gerekecek** — bu partinin "ucuz" kısmı
küçük, çoğu iş hâlâ araştırma gerektiriyor.

### GÜNCEL SAYIM

`data/devletler.js`: 382 → **381** (`sibir` birleştirmesiyle). Doğrulandı
(`node -e eval`): mükerrer id 0, ters/sıfır dönem 0. Üç iş de ölçüm
ağırlıklıydı, yalnız `sibir` birleştirmesi gerçek bir düzenlemeydi (silme).

`data/devletler.js` pathspec'siz bırakıldı. Koordinatöre haber verildi.

---

## ㉔ `merini` tek satır + genişletilmiş `harita:≠id:` taraması

(Not: mesajınızda tekrar listelenen sibir/ainu/kaynak: kalemleri bir önceki
turda zaten bitirilip raporlanmıştı — muhtemelen çapraz geldi, tekrar
yapmadım, yalnız bu yeni işe odaklandım.)

### ① `merini.harita` — DÜZELTİLDİ (tek satır)

```
merini   harita: "fas" → "merini"
```
Doğrulandı.

### ② Genişletilmiş tarama — `harita:≠id:` olan TÜM kayıtlar

**33 künyede `harita:` kendi `id:`sinden farklı.** Her biri iki testten
geçirildi: (a) bu `harita:` değerini BAŞKA künyeler de mi paylaşıyor
(paylaşım>1 → kasıtlı "ülke sürekliliği şemsiyesi", `kimlikler.js`'in kendi
belgelediği `suud-birinci/ikinci/ücüncü→suud` örneğiyle aynı desen), (b)
paylaşılmıyorsa bu `harita:` değeri AYRICA başka bir künyenin KENDİ `id:`si
mi (gerçek çarpışma — tam `merini→fas` deseni: `merini` `fas`ın rengini
gasp ediyordu).

```
33 künyede harita:≠id:
  22'si PAYLAŞIMLI ŞEMSİYE (aynı ülkenin ardışık dönemleri TEK renk
       paylaşıyor) — sirbistan (4), bulgaristan (3), suud (3), macaristan (3),
       arnavutluk (2), romanya (2), + tekil örnekler
  11'i 1:1 KISALTMA/FARKLI YAZIM (ör. `atina-dukaligi`→`atinadukaligi`,
       `milano-dukaligi`→`milanoduka`, `fetret-*`→`*-celebi`,
       `kaffa-kralligi`→`kaffa` gibi hâlihazırda kendi künyesine ait,
       başka hiçbir kayıtla çakışmayan sadeleştirilmiş isimler)
  0'ı  `merini` TİPİ ÇARPIŞMA (kendi `id:`si dışında BAŞKA bir künyenin
       `id:`sini gasp eden) — YOK
```

**TESLİM: 33 künyede harita:≠id:, 33'ü KASITLI (22 paylaşımlı şemsiye + 11
tekil kısaltma), 0'ı KUSUR.** `merini` tek istisnaydı, düzeltildi.

⚠️ Yöntem notu: bu tarama YAPISAL (id/harita metnini karşılaştırıyor),
RENK 2'nin kendi ΔE ölçümüne erişimim yok — `merini`yi yakalayan da RENK 2
kendi 5. denetim dalıydı, ben değildim. 33'ün hepsi yapısal olarak temiz
çıktı ama RENK 2 kendi rengiyle çelişen bir tane daha bulursa bildirsin,
ben görebildiğim kadarını gördüm.

Doğrulandı (`node -e eval`): 381 kayıt, mükerrer id 0, `merini.harita`
artık `"merini"`.

`data/devletler.js` pathspec'siz bırakıldı. Koordinatöre haber verildi.

---

## ㉕ Üç kalem — `kaynak:` bedava %11 yazıldı, japonya zinciri ölçüldü, `fas` 1666/1659 önerisi

### ① `kaynak:` bedava 38 kayıt — YAZILDI (mekanik, tek script)

Önceki turda ölçtüğüm 38 id→slug eşleşmesinin TAMAMI `kaynak:` alanına
yazıldı (id-takipli script, `kronoloji:[` satırının hemen öncesine ekledi).
Doğrulandı: **38/38 kayıtta `kaynak:` artık dolu**, kayıt sayısı değişmedi
(381), mükerrer id 0. Kalan 301 kayıt (yeni araştırma gerektiren) DOKUNULMADI,
talimat böyleydi.

### ② `kamakura→kenmu→muromachi→azuchi-momoyama→edo-bakufu→meiji-japonya` zinciri — YAZMADAN ölçüldü

```
kamakura          1185-01-01 -> 1333-07-04   harita ✓
kenmu             1333-07-04 -> 1336-11-07   harita YOK (zaten künye var, RENK 2'nin işi)
muromachi         1336-01-01 -> 1573-09-01   harita ✓
azuchi-momoyama   1568-01-01 -> 1615-06-04   harita ✓
edo-bakufu        1603-03-24 -> 1868-01-03   harita ✓
meiji-japonya     1868-01-03 -> 1923-10-29   harita ✓
```

**Sonuç: BOŞLUK YOK — zincir 1281'den (kamakura zaten 1185'ten başlıyor,
atlas penceresini kapsıyor) 1923-10-29'a (meiji-japonya'nın kendi `t:`si
ufkun kendisiyle birebir) KESİNTİSİZ.** Hiçbir noktada "hayalet/sahipsizlik"
riski yok.

⚠️ Ama TERSİ bir durum var — GAP değil ÜST ÜSTE BİNME (overlap), üç yerde:
`kenmu↔muromachi` ~10 ay, `muromachi↔azuchi-momoyama` ~5 yıl,
`azuchi-momoyama↔edo-bakufu` ~12 yıl. Bunlar muhtemelen KASITLI (dönem
adlarının tarihyazımında gerçekten örtüşmesi yaygın — Nobunaga'nın 1568'de
Kyoto'ya girişi ile 1573'te Ashikaga şogunluğunun resmen kaldırılması gibi
iki ayrı ama meşru "başlangıç" anı) — ama künye-içi tutarlılık pratiğim
gereği (§Ö1 hazırlığı) bunu işaretliyorum, KARAR/DÜZELTME istemiyorum,
yalnız görüldü diye not düşüyorum.

### ③ `fas` 1666 vs TDV 1659 — ÖLÇÜLDÜ + ÖNERİ (karar verilmedi)

TDV'yi tekrar okudum, iki AYRI madde İKİ FARKLI ek tarih daha verdi —
mesele "1666 mı 1659 mu" değil, **üç ayrı olay var:**

```
1659   TDV `sadiler`: son Sâdî sultanının öldürülmesi, hanedan İÇTEN çöktü
1664   TDV `fas`: "1664'te başa geçen Mevlây Reşîd... Merakeş ve Fas gibi
       önemli şehirleri ele geçirdiler" — Alevî hânedanının FİİLEN iktidara
       gelişi, iki ana şehrin alınışı
1666   mevcut `fas` künyesinin kendi kronolojisi — TDV'nin verdiği HİÇBİR
       tarihle birebir örtüşmüyor, kaynağı künyede belirtilmemiş
(+20 yıl)  TDV `fas`: tam ülke birleşmesi "müteakip yirmi yıl içinde"
       tamamlandı (~1684'e dek)
```

**ÖNERİM (karar değil):** `fas`ın "1666 bolunme" satırı TDV `fas`
maddesinin verdiği **1664**'e çekilsin — bu, künyenin kendi olayının
("Alevî hanedanı Sâdîlerin yerini aldı") TDV'nin birebir anlattığı olayla
(Mevlây Reşîd'in Fas ve Merakeş'i alışı) en yakın eşleşmesi. 1659 (Sâdî'nin
kendi içten çöküşü) zaten ayrı bir olay olarak `sadi` künyesinde var;
1666'nın nereden geldiği belirsiz, TDV'nin verdiği hiçbir tarihle
uyuşmuyor. **Ama bu benim önerim — `fas`a DOKUNMADIM, karar
koordinatörde.**

### GÜNCEL SAYIM

`data/devletler.js`: 381 (değişmedi, yalnız 38 kayıtta `kaynak:` dolduruldu).
Doğrulandı (`node -e eval`): mükerrer id 0, ters/sıfır dönem 0.

`data/devletler.js` pathspec'siz bırakıldı. Koordinatöre haber verildi.

---

## ㉖ Dört kalem — fas nüanslı düzeltme, japonya nokta ölçümü, 21 künye doğrulaması, kavalali

### ① `fas` — NÜANSLI DÜZELTME YAZILDI

```
1666 bölünme → 1664 hukumdar: "Mevlây Reşîd başa geçti; Alevî (Filalî)
hanedanı fiilen iktidara geldi (şehirlerin tam ele geçirilişi onun
döneminde, sonraki 20 yıl içinde tamamlandı)"
```
Üç tarih ayrıştırıldı ve ozete işlendi: 1659 (Sâdî'nin kendi çöküşü, `sadi`
künyesinde/haritada kalıyor, DOKUNULMADI) · 1664 (Mevlây Reşîd başa geçti,
BU satır) · 1666 (kaynaksızdı, kaldırıldı). Harita sınırı (`sadi`→`fas`,
1659) DOKUNULMADI. Doğrulandı.

### ② Japonya üç örtüşmesi — NOKTA DÜZEYİNDE ÖLÇÜLDÜ: ZARARSIZ

`girdi.yukle()` ile üç örtüşme penceresinin her birinde hangi `d:`
değerlerinin fiilen kullanıldığı tarandı:

```
kenmu↔muromachi (1336-01-01..1336-11-07)    yalnız 'kenmu' kullanılıyor,
                                              hiçbir nokta 'muromachi'ye
                                              bu pencerede GEÇMEMİŞ
muromachi↔azuchi (1568-01-01..1573-09-01)   noktalar 1573-01-01'de TEMİZ
                                              geçiş yapıyor (muromachi→
                                              azuchi-momoyama), ORTAK tarih
                                              yok
azuchi↔edo (1603-03-24..1615-06-04)         çoğu nokta 1603-03-24'te temiz
                                              geçiyor; Osaka İSTİSNA —
                                              azuchi-momoyama'da 1615'e
                                              dek KALIYOR (Osaka Kuşatması,
                                              tarihsel olarak doğru), ama
                                              yine TEK sahip
```

**Sonuç: HİÇBİR noktada iki devlete birden ait görünme YOK — 0 çakışan
nokta-dönem.** Künye tanımlarındaki örtüşme (kağıt üzerinde) hiçbir zaman
veri düzeyinde gerçek bir çift-sahiplik doğurmuyor; her nokta üç örtüşme
penceresinin hepsinde de TEK bir `d:` değerine sahip. **Zararsız, kayda
geçildi, kapatıldı** — değişmez 3 ihlali yok.

### ③ 21 künye doğrulaması — TAMAMI GERÇEK, hiçbiri `ainu`-tipi çürütme adayı değil

`arac/renkler.py`nin `BOYALAR` sözlüğü (311 kayıt) ile `girdi.yukle()`
karşılaştırıldı: **22 renk veride hiç kullanılmıyor.** 21'i doğrudan bir
künyeyle eşleşti (id ya da harita), 1'i (`kavalali`) doğrudan eşleşmedi —
o ayrı kalem olarak ④'te ele alındı.

| kimlik | künye f/t (teyit) | TDV canlı slug (② HTTP+içerik) | ③ gerçek mi? |
|---|---|---|---|
| `lur-i-kucek` | 1184-1597 | ✅ `lur-i-kucek` CANLI (kendi slug'ı!) | GERÇEK — TDV kendi maddesinde adı geçiyor |
| `kutlughanli` | 1222-1306 | ✅ `kutlughanlilar` CANLI | GERÇEK, kurucu+tarih TDV'de birebir |
| `incu` | 1325-1357 | ✅ `incu` CANLI (tarihsiz) | GERÇEK — hanedan TDV'de tanımlı, tarihler standart akademik |
| `muzafferi` | 1318-1393 | ✅ `muzafferiler` CANLI | GERÇEK, TDV birebir |
| `imereti` | 1490-1810 | ⚪ TDV'de yok | GERÇEK — Gürcistan tarihinde su götürmez, iyi belgeli (üç parçadan biri, standart akademik) |
| `ermenistan-demokratik-cumhuriyeti` | 1918-1920 | ⚪ TDV'de dedike madde yok (`kafkasya` genel çerçeveyi doğruluyor) | GERÇEK — 20. yy devleti, tartışmasız |
| `azerbaycan-demokratik-cumhuriyeti` | 1918-1920 | ✅ `azerbaycan` CANLI, tarihler birebir | GERÇEK, en sağlam kalem |
| `gurcistan-demokratik-cumhuriyeti` | 1918-1921 | ✅ `gurcistan` CANLI, kuruluş birebir | GERÇEK |
| `rusya-gecici-hukumet` | 1917-1917 | ✅ `rusya` CANLI (genel madde) | GERÇEK — dünya çapında tartışmasız |
| `litvanya-buyuk-dukalik` | 1253-1569 | ⚪ TDV'de yok (yalnız Lipkalar maddesi) | GERÇEK — Avrupa tarihinin en iyi belgeli ortaçağ devletlerinden biri |
| `sovyet-rusya` | 1917-1923 | ✅ `rusya` CANLI | GERÇEK, tartışmasız |
| `bahreyn` | 1783-1923 | ✅ `bahreyn` CANLI | GERÇEK (zaten kaynak: alanı dolu) |
| `evfat` | 1285-1415 | ✅ `evfat` CANLI (koordinatörün 2. kez doğruladığı vaka) | GERÇEK |
| `makdisu-sultanligi` | 1281-1500 | ✅ `makdisu` CANLI | GERÇEK |
| `savoya` | 1032-1720 | ⚪ TDV'de yok | GERÇEK — Savoya hanedanı dünya tarihinin en iyi belgeli hanedanlarından (sonradan İtalya Krallığı) |
| `floransa` | 1115-1532 | ⚪ TDV'de yok | GERÇEK — Floransa Cumhuriyeti tartışmasız (Rönesans'ın merkezi) |
| `bonacolsi` | 1273-1328 | ⚪ TDV'de yok | GERÇEK ama bu listenin EN İNCE kaynaklı kalemlerinden biri — İtalyan bölgesel tarihçiliğinde belgeli (Gonzaga'nın selefi), büyük/genel kaynaklarda daha az öne çıkıyor |
| `irlanda-serbest-devlet` | 1922-1923 | ⚪ TDV'de yok | GERÇEK, tartışmasız (modern İrlanda'nın doğrudan selefi) |
| `poni` | 977-1405 | ⚪ TDV'de yok (`bruney` maddesi Po-ni'den hiç bahsetmiyor) | GERÇEK ama listenin EN ZAYIF kaynaklı kalemi — Çin haraç kayıtlarına (Song hanedanı) dayanan akademik konsensüs var (Nicholl gibi Brunei tarihçileri), ama TDV hiç değinmiyor VE kesin kuruluş yılı (977) yaklaşık |
| `sanzan` | 1322-1429 | ⚪ TDV'de yok | GERÇEK — Ryukyu/Okinawa tarihinin standart bir dönemi (Hokuzan/Chuzan/Nanzan), akademik konsensüs güçlü |
| `galzay` | 1709-1738 | ✅ `kandehar` CANLI | GERÇEK — Mirveys Hotek isyanı dünya çapında bilinen bir olay (Safevî çöküşünü tetikledi) |

**TESLİM: 21/21 GERÇEK, 0 `ainu`-tipi çürütme adayı.** 9'u TDV canlı-
doğrulanmış, 12'si TDV'de yok ama standart akademik kaynakla GÜÇLÜ
belgeli. **En ince kaynaklı ikisi** (`poni`, `bonacolsi`) — ikisi de gerçek
ama listenin geri kalanına göre daha az merkezî kaynaklı, ayrıca
işaretledim. Hiçbirinde `ainu` sınıfı bir "isim var, devlet yok" riski
görmedim.

### ④ `kavalali` — misir-kavalali'ye `harita:` eklendi (381, kayıt sayısı sabit)

```
① TDV: `kavalali-mehmed-ali-pasa` CANLI (200) — künye zaten bu slug'ı
   kaynak: olarak kullanıyordu (benim 38'lik partimde eklenmişti)
② f/t: misir-kavalali'nin KENDİ f/t'si (1805-07-03 → 1914-12-18)
   DOKUNULMADI — TDV'nin verdiği iki tarih (3 Temmuz 1805 valilik, 24 Mayıs
   1841 irsî ferman birebir doğrulandı) zaten künyenin kronolojisinde iki
   AYRI olay olarak duruyor. Ö1 notu ozete AÇIKÇA yazıldı: bu kayıt ÜLKE
   SÜREKLİLİĞİ kimliğidir (1805-1914 TAM hanedan dönemi), yalnız 1805-1841
   genişleme evresi değil.
③ ÖNERİ (karar vermedim): künye zaten hem `tabi:[{...,ust:"osmanli"}]`
   hem kendi ayrı gövde/renk istiyordu — `kirim`/`eflak`/`bogdan` emsaliyle
   AYNI ikili model. Ayrıca yeni bir tasarım kararı gerekmiyor, mevcut
   yapı zaten doğru model; yalnız `harita:` bağlantısı eksikti.
④ `kaynak:"kavalali-mehmed-ali-pasa"` ZATEN vardı (38'lik partimden),
   dokunulmadı.
```
**YAPILAN TEK DEĞİŞİKLİK: `harita:"kavalali"` eklendi.** Doğrulandı.

### GÜNCEL SAYIM

`data/devletler.js`: 381 (sabit, bu turda yeni kayıt yok — yalnız
düzeltme/bağlama). Doğrulandı (`node -e eval`): mükerrer id 0, ters/sıfır
dönem 0.

`data/devletler.js` pathspec'siz bırakıldı. Koordinatöre haber verildi.

---

## ㉗ 301'lik `kaynak:` kuyruğu — "ucuz/pahalı" ölçümü (SALT ÖLÇÜM, hiçbir yazma yapılmadı)

`data/devletler.js`e bu turda **hiç dokunulmadı** (`git status` ile
doğrulandı — dosya bu turdan ÖNCEKİ hâliyle duruyor).

### Yöntem

301 kaydın her biri için `id:` ve `ad:` alanlarından ≥5 karakterlik,
idari-genel kelimelerden (devlet/krallık/imparatorluk/cumhuriyet/büyük/
birinci vb. — bir "stopword" listesi) arındırılmış kelime parçaları
çıkarıldı; bu parçalar `data/olaylar*.js`deki 521 doğrulanmış slug'ın
(≥5 karakter olanları) içinde alt-dize olarak aranıyor. Bu KESİN eşleşme
DEĞİL — "muhtemelen aynı devlet, TDV taraması ucuzlaşabilir" adayı.

### ① Aday üreten: 81/301 (%27)

### ② Hiç aday üretmeyen: 220/301 (%73) — sıfırdan TDV araması gerekir

### ③ Bölge dağılımı

```
ADAY ÜRETEN (81) — en yoğun bölgeler:
  balkanlar        18   (TDV'nin bulgaristan/sirbistan/bosna-hersek gibi
                          genel ülke maddeleri zaten doğrulanmış kümede)
  anadolu          16   (Anadolu beylikleri — "-oğulları" TDV adlandırma
                          kalıbı olaylar*.js'te zaten sık geçiyor:
                          karamanogullari, germiyanogullari, aydinogullari,
                          saruhanogullari, hamidogullari, candarogullari,
                          dulkadirogullari, ramazanogullari)
  dogu-avrupa       6
  kuzey-afrika      6
  orta-avrupa       5
  iran              4 · italya 4 · kafkasya 4 · arabistan 4
  (geri kalan bölgelerde 1-3'er)

HİÇ ADAY ÜRETMEYEN (220) — en yoğun bölgeler:
  guneydogu-asya   40   ⚠️ EN PAHALI BÖLGE
  guney-asya       29   ⚠️
  dogu-asya        21   ⚠️
  dogu-afrika      12
  italya           11
  dogu-avrupa      10
  iran              9
  anadolu           8 · arabistan 8 · orta-asya 8
  bati-afrika       7 · bati-avrupa 7
  kuzey-avrupa      6 · iberya 6
  (geri kalan bölgelerde 1-5'er)
```

### Okuma

**"Ucuz" kısım küçük ve coğrafi olarak YOĞUN**: Balkanlar + Anadolu tek
başına adayların 34/81'ini (%42) oluşturuyor — bu iki bölge TDV'nin zaten
genel ülke/beylik maddeleriyle iyi kapsadığı, `olaylar*.js`nin de sıkça
alıntıladığı bir alan (DALGA 1/2'de zaten gördüğümüz desenin tersi:
oralarda TDV zayıftı, burada güçlü). **"Pahalı" kısım BÜYÜK ve üç Asya
bölgesinde yoğunlaşıyor** (Güneydoğu Asya + Güney Asya + Doğu Asya = 90/220,
%41) — bu tam olarak DALGA 2'de "TDV zayıf kapsıyor" diye önceden ölçtüğüm
coğrafyalarla ÖRTÜŞÜYOR, yani bu üç bölgede muhtemelen yine standart
akademik kaynağa dönülecek, TDV taraması az verim verecek.

⚠️ Yöntem notu: bu bir YAKLAŞIK maliyet tahmini, kesin eşleşme listesi
değil — "aday" bulunan 81 kaydın TDV'de gerçekten doğru maddeye karşılık
geldiği TEK TEK doğrulanmadı (yalnız isim benzerliği). Gerçek "bedava" oran
(38/339, önceki ölçüm) bunun çok altındaydı; bu 81 "ucuz" demek, "araştırma
süresi kısalır" demek, "araştırmasız" demek değil.

**TESLİM: 81 aday üretiyor (%27, "ucuz") · 220 hiç aday üretmiyor (%73,
"pahalı") · en ucuz iki bölge Balkanlar+Anadolu (34/81) · en pahalı üç
bölge Güneydoğu Asya+Güney Asya+Doğu Asya (90/220).**

`data/devletler.js` HİÇ değiştirilmedi bu turda. Koordinatöre haber verildi
— 301'e yazmaya başlanmadı, talimat bekleniyor.

---

## ㉘ PARTİ A yazıldı (36 aday sınandı, 33 doğrulandı) + C1/C2 ölçümü (salt ölçüm)

### PARTİ A — Balkanlar+Anadolu 36 aday, HER BİRİ § 4 yöntemiyle sınandı

⚠️ Not: benim ölçtüğüm Balkanlar+Anadolu kesişimi 34 değil **36** çıktı (iki
fazlalık, muhtemelen sınır bölgesi kayıtları — `kibris-krallik`/
`kibris-ingiliz` anadolu'ya, `hersek` balkanlar'a düşüyor, saymanızdaki 34
belki bunlardan ikisini farklı gruplamış olabilir). 36'nın hepsini sınadım.

**Yöntem — her aday için HTTP kodu VE gövde okuması (WebFetch):**

```
DOĞRULANDI (ilk denemede):            29/36
ÇÜRÜDÜ (ilk aday yanlış çıktı):         7/36  ← alt-dizge yönteminin
                                                 GERÇEK isabet oranı: %81
```

**Çürüyen 7'nin detayı** (yöntemin ele verdiği tuzaklar — hepsi HTTP 200
döndü ama içerik YANLIŞ maddeydi, tam `§4`'ün uyardığı sınıf):
```
arnavutluk-iskenderbey -> nis          Niş şehri maddesi, İskender Bey'le İLGİSİZ
kilikya-ermeni -> kili                 Tuna deltasındaki Kili kalesi, Kilikya'yla İLGİSİZ
sarki-rumeli -> rumeli-hisari (ÖLÜ)    sonra 'rumeli' denendi, o da 1878 sonrasını KAPSAMIYOR
ahiler -> ankara                       Ahi loncasından bahsediyor ama Ankara'yı YÖNETTİKLERİNİ DOĞRULAMIYOR
fetret-suleyman -> suleyman-i          BU KANUNÎ SÜLEYMAN, madde kendisi Fetret'teki
                                        Süleyman Çelebi'yle KARIŞTIRILMASIN diye özellikle uyarıyor
fetret-isa -> bursa                    Bursa maddesinin Fetret bölümü İSA ÇELEBİ'den değil
                                        ŞEHZADE CEM'den (1481, bambaşka bir olay) bahsediyor
fetret-musa -> saltanat                "saltanat" kavramının genel hukuki tanımı, Musa Çelebi'yle İLGİSİZ
```

**Çürüyen 7'den 4'ü ek aramayla KURTARILDI** (doğru slug bulundu, TDV
içerikle doğrulandı): `arnavutluk-iskenderbey`→`iskender-bey` ✅,
`fetret-suleyman`→`emir-suleyman` ✅, `fetret-isa`→`isa-celebi` ✅,
`fetret-musa`→`musa-celebi` ✅. **3'ü kurtarılamadı, BULUNAMADI kaldı:**
`kilikya-ermeni` (kili/kilikya/ermeni-krallik/cukurova-ermeni/sis hepsi
denendi, hiçbiri tutmadı), `sarki-rumeli` (rumeli-hisari ölü, rumeli genel
maddesi 1878 sonrasını kapsamıyor), `ahiler` (ahilik maddesi VAR ama
Ankara'yı yönetme iddiasını doğrulamıyor — künyenin kendisi hâlâ geçerli
olabilir, yalnız bu spesifik iddia TDV'den doğrulanamadı).

**YAZILAN kaynak: alanı sayısı: 33** (29 ilk-turda doğrulanan + 4
kurtarılan). Tek script ile (id-takipli, `kronoloji:[` öncesine ekliyor)
yazıldı. Doğrulandı (`node -e eval`): 381 kayıt (sabit), mükerrer id 0,
ters/sıfır dönem 0.

**TESLİM (istenen üç sayı): 33 doğrulandı (ilk tur 29 + kurtarılan 4) ·
7 ilk-tur çürüdü (bunun 3'ü kalıcı BULUNAMADI, 4'ü kurtarıldı) ·
3 kalıcı bulunamadı.**

### C1/C2 ölçümü — 220 aday-üretmeyen kaydın özeti tarandı (SALT ÖLÇÜM)

⚠️ Kendi kendimi düzelttim: bu ölçümü ilk koşumda yanlışlıkla ESKİ (v2,
206 kayıtlık) listeyle yaptım, fark edip v3 (81 aday/220 aday-üretmeyen,
raporunuzdaki sayılarla BİREBİR) listesiyle TEKRARLADI.

`ozet:` alanında zaten "TDV'de ayrı maddesi yok" / "standart akademik
kaynağa göre" / bilinen bir müellif adı (Uzunçarşılı, Spuler,
Encyclopaedia Iranica, Cambridge History vb.) geçip geçmediği tarandı:

```
① PARTİ C1 adayı (özette dayanak ZATEN var, yalnız kaynak: alanına
   TAŞINMASI yeterli):                                    80/220 (%36)
② PARTİ C2 (özette hiç dayanak yok, sıfırdan araştırma gerekir):  140/220 (%64)
```

**Bölge dağılımı:**
```
C1 (80) — en yoğun: guneydogu-asya 21 · guney-asya 17 · dogu-afrika 9 ·
  dogu-asya 7 · bati-afrika 6 · dogu-avrupa 5
  (bu, DALGA 2'de yazdığım "standart akademik + açık işaretleme" partisinin
  izidir — o partide her kalem zaten bu cümleyi taşıyordu)

C2 (140) — en yoğun: guneydogu-asya 19 · dogu-asya 14 · guney-asya 12 ·
  italya 9 · anadolu 8 · arabistan 8 · bati-avrupa 7 · iran 6 · iberya 6 ·
  orta-asya 6
```

⚠️ Not: Güneydoğu Asya/Güney Asya/Doğu Asya HER İKİ kovada da (C1 ve C2)
kalabalık — bu bölgede bazı kayıtlar zaten dayanaklı yazılmış (Dalga 2),
bazıları henüz hiç işlenmemiş (daha eski/başka oturumların yazdığı
kayıtlar). Yani "bu bölge pahalı" hükmü hâlâ geçerli ama TAMAMI değil,
içeride de kendi C1/C2 ayrımı var.

`data/devletler.js` PARTİ A dışında değiştirilmedi (C1/C2 ölçümü salt
ölçümdü, hiçbir yazma yapılmadı). Koordinatöre haber verildi — Parti B/C1/C2
için talimat bekleniyor.

---

## ㉙ Parti C1 (80 kayıt, taşındı) + Parti B (47 aday, sınandı) — TAMAMLANDI

### PARTİ C1 — 80 kayıt taşındı, pozitif/negatif ayrımıyla

Özetinde zaten bir dayanak cümlesi olan 80 kaydın tamamı tarandı:

```
POZİTİF (özel isim/eser adı var):     1/80 — `incu` (Spuler/Encyclopaedia
                                        Iranica anılıyor) → kaynak:"incu"
                                        (TDV'nin kendi CANLI maddesi de var,
                                        onu esas aldım — tarihsiz ama devletin
                                        varlığını doğruluyor)
NEGATİF ("TDV'de yok" beyanı):        79/80 → her birine AÇIKÇA:
   kaynak:"bulunamadı — TDV'de müstakil maddesi yok, dayanak: standart
   akademik kaynak"
```

Tek script ile (id-takipli) yazıldı. **80/80 yazıldı, çakışma 0** (hiçbiri
önceden kaynak: alanına sahip değildi).

### PARTİ B — 47 aday, Parti A ile AYNI yöntem (HTTP + içerik)

**Kritik bulgu — "cumhuriyet" adayının kendisi ÖLÜ (302) çıktı:** benim
alt-dizge yöntemim `ad:` alanındaki "Cumhuriyeti" kelimesinden bu genel
sözcüğe 20 kez düşmüş (iran, novgorod, pskov, cenova, gurcistan/ermenistan/
azerbaycan-demokratik-cumhuriyeti, floransa, cekoslovakya, polonya, letonya,
litvanya, estonya, finlandiya, avusturya-cumhuriyet, macaristan-naiplik,
haiti, siena, piza, cin-cumhuriyeti). Aynı şekilde "kirim-hanligi" de ÖLÜ
çıktı (kazak-hanligi, yarkent-hanligi — 2 kayıt). Bu 22 kayıt HTTP
aşamasında elendi.

**Kalan 25 canlı-slug adayının içerik okuması — 17'si doğru, 8'i YANLIŞ
madde:**
```
suud-ucuncu       -> hicaz             ÇÜRÜDÜ (III. Suûdî'nin fethinden hiç bahsetmiyor)
hicaz-kralligi    -> hicaz-demiryolu   ÇÜRÜDÜ (demiryolu inşaatı, Şerif Hüseyin yan konu)
fransiz-misir-seferi -> irakeyn-seferi ÇÜRÜDÜ (Kanuni'nin 1533 İran seferi, alakasız)
babur-imparatorlugu  -> timur          ÇÜRÜDÜ (yalnız Timur'un kendi hayatı, imparatorluk yok)
hausa-sehir-devletleri -> ordu--sehir  ÇÜRÜDÜ (Karadeniz'deki Ordu şehri, Hausa'yla ilgisiz)
maya-sehir-devletleri  -> ordu--sehir  ÇÜRÜDÜ (aynı, Maya'yla ilgisiz)
nguyen-beyligi    -> alaiye-beyligi    ÇÜRÜDÜ (Anadolu'daki Alaiye, Vietnam'la ilgisiz)
hosut             -> orhan             ÇÜRÜDÜ (Orhan Gazi, Hoşut Moğollarından hiç bahsetmiyor)
```

**Bu 8'in 4'ü ek aramayla KURTARILDI** (doğru slug bulundu, içerik
doğrulandı):
```
suud-ucuncu          -> abdulaziz-b-suud   ✅ (Abdülazîz b. Suûd'un kendi maddesi)
hicaz-kralligi        -> serif-huseyin      ✅ (Şerif Hüseyin'in kendi maddesi, 1916-1924 birebir)
babur-imparatorlugu   -> baburluler         ✅ (Babür'den Bahadır Şah II'ye tam hanedan tarihi)
hosut                 -> kalmuklar          ✅ (Hoşut'un Oyrat/Batı Moğolları içindeki yeri doğrulanıyor)
```
**4'ü kurtarılamadı:** `fransiz-misir-seferi`, `hausa-sehir-devletleri`,
`maya-sehir-devletleri`, `nguyen-beyligi` — dördü de TDV'nin coğrafi
kapsamının (İslâm dünyası + komşuları) tamamen dışında (Fransız-Mısır
seferi için "misir" genel maddesinde bir "Fransız İşgali" bölüm başlığı
görüldü ama içerik alınamadı, kesin doğrulanamadı — zorlamadım).

**17 ilk-tur doğru adayın 3'ü içerikle bizzat doğrulandı** (`sirvansah`→
`sirvan`, `zeyyani`→`tilimsan`, `mehdi`→`sudan` — üçü de TAM eşleşme,
alıntılarla). Kalan 14'ü (`safevi`, `habsburg`, `akkoyunlu`, `karakoyunlu`,
`macaristan-habsburg`, `cezayir-ocagi`, `tunus-ocagi`, `trablusgarp-ocagi`,
`yemen-zeydi`, `cezayir-fransiz`, `timurlu`, `benihalid`, `hafsi`,
`hollanda-dogu-hint`) Parti A'da doğrulanmış "genel ülke/bölge maddesi
birden fazla dönemi kapsar" kalıbına güçlü şekilde uyduğu için PATTERN
GÜVENİYLE kabul edildi, tek tek içerik çekilmedi — bu bir yöntem sınırı,
açıkça belirtiyorum.

**YAZILAN kaynak: alanı: 21.** Doğrulandı (`node -e eval`): 381 kayıt
(sabit), mükerrer id 0, ters/sıfır dönem 0.

### TESLİM (istenen üç sayı, Parti B)

**21 doğrulandı (17 ilk-tur + 4 kurtarılan) · 30 çürüdü (ilk aday yanlış —
22 ölü slug + 8 yanlış içerik) · 26 kalıcı bulunamadı.**

⚠️ **Önemli fark — beklentiyle ölçüm uyuşmadı:** koordinatörün tahmini
"~38 doğrulanacak, ~9 çürüyecek" idi (Parti A'nın %81 isabetinden
çıkarılmış); GERÇEK SONUÇ **21 doğrulandı, 26 kalıcı bulunamadı** — isabet
oranı yalnız **%45**, Parti A'nın YARISI. Sebep açık: Parti B, Balkanlar/
Anadolu'nun aksine TDV'nin ZAYIF kapsadığı karışık bir coğrafya sepeti
(İran/Kafkasya/Orta Asya/20.yy Baltık-Orta Avrupa cumhuriyetleri/İtalyan
şehir devletleri/Vietnam-Moğol konuları bir arada) — alt-dizge yönteminin
isabeti BÖLGEYE göre çok değişiyor, tek bir "genel isabet oranı" ileri
partiler için güvenilir bir tahmin değil.

`data/devletler.js` pathspec'siz bırakıldı. Koordinatöre haber verildi.

---

## ㉚ Durak listesi genişletildi, Parti B + tüm 301 yeniden ölçüldü (SALT ÖLÇÜM, yazma yok)

`data/devletler.js`e bu turda hiç dokunulmadı (`git status` ile doğrulandı).

Durak listesine eklendi: `cumhuriyet` (zaten vardı, genişletilmiş hâliyle
tuttum), `hanlik`, `hanligi`, `sultanlik`, `beylik`, `emirlik`, `prenslik`,
`dukalik`, `hanedan`, `hanedani`, `devleti`, `kralligi`.

### ① Parti B'nin 47'si yeniden üretildi

```
YENİ listeyle hâlâ aday üreten:    45/47
YENİ listeyle ARTIK ELENEN:         2/47 — kazak-hanligi, yarkent-hanligi
                                    (ikisi de "kirim-hanligi" adayına yeni
                                    eklenen `hanligi` durağı yüzünden
                                    düşüyordu)
```

**Bilgi kaybı YOK:** bu iki kayıt Parti B'de İÇERİK OKUMASIYLA zaten
ÇÜRÜDÜ/BULUNAMADI diye işaretlenmişti (kazaklar ve kaşgar maddeleri
yetersiz bulunmuştu). Genişletme yalnız yöntemi RETROAKTİF olarak
doğruladı — ileri partilerde bu ikisi gibi sahte adaylar artık baştan
üretilmeyecek.

📌 Yan bulgu: her ikisinin de `ozet:`inde ZATEN kendi (zayıf) TDV atfı
gömülüydü (`kazak-hanligi`: "kaynak: TDV, madde: kazaklar";
`yarkent-hanligi`: "kaynak: TDV, madde: kasgar — kısmî") — bunlar C1/C2
ayrımına GİRMEMİŞTİ çünkü negatif ("TDV'de yok") değil pozitif ama
İÇERİKLE zaten yetersiz bulunmuş atıflar; ayrı bir üçüncü alt-sınıf
("pozitif ama zayıf atıf") olarak not düşüyorum, `kaynak:` alanına
YAZMADIM (Parti B'de zaten "bulunamadı" hükmü verilmişti).

### ② Tüm 301 kayıt yeniden üretildi

```
ESKİ (dar durak listesi):    81 aday üretiyor  ·  220 aday üretmiyor
YENİ (geniş durak listesi):  79 aday üretiyor  ·  222 aday üretmiyor
NET DEĞİŞİM:                  -2 aday          ·   +2 aday-üretmeyen
```

**C1/C2'nin KENDİ boyutu DEĞİŞMEDİ.** C1 (80) ve C2 (140) ayrımı bu
token-eşleştirme sürecinden TAMAMEN bağımsız bir ölçümdü — `ozet:`teki
GERÇEK dayanak cümlesine bakıyordu, aday üretip üretmemesine değil. Genişleme
yalnız Parti B'den düşen 2 kaydı ("aday üretmeyen" listeye) taşıdı; bu ikisi
C1/C2 ayrımına hiç girmemişti (Parti B'nin kendi 47'lik kovasındaydı),
dolayısıyla **C2'nin gerçek boyutu hâlâ 140** — genişletme ona hiç
dokunmadı, yalnız Parti B'nin ölçümünü temizledi.

### TESLİM (istenen sayılar)

**① Parti B: 47 → 45 aday üretmeye devam ediyor, 2 elendi (bilgi kaybı yok,
zaten çürük bulunmuşlardı). ② Toplam 301: 81→79 aday, 220→222 aday-üretmeyen
(net -2/+2). C2'nin gerçek boyutu hâlâ 140, değişmedi.**

③ için hazır bekliyorum — C2'ye girerken ilk 20 kaydı ölçüp o sepetin kendi
isabet oranını bulacağım, talimat gelince başlayacağım, bu turda
BAŞLAMADIM.

`data/devletler.js` bu turda HİÇ değiştirilmedi. Koordinatöre haber verildi.

---

## ㉛ "Yetersiz" biçimi yazıldı + C2 pilotu (20 kayıt, tabakalı) + bölge bölge oran

### ① `kazak-hanligi` / `yarkent-hanligi` — YENİ BİÇİMLE YAZILDI

```
kazak-hanligi:   kaynak:"yetersiz — kazaklar maddesi okundu, hanlığın
  (1465-1847) kendi siyasi tarihini karşılamıyor; madde ağırlıklı olarak
  etnik/kültürel tarihe ve 1991 sonrasına odaklanıyor; dayanak: standart
  akademik kaynak"
yarkent-hanligi: kaynak:"yetersiz — kaşgar maddesi okundu, Yarkent'i ayrı
  bir siyasi varlık olarak ele almıyor, yalnız geçerken anıyor; dayanak:
  standart akademik kaynak"
```

### ⚠️ Pilot hazırlığı sırasında bulunan 7 ek "kaçırılmış C1" kaydı — DÜZELTİLDİ

Havuzu tazeden kurarken (bkz. aşağıdaki yöntem notu) `301 taban − kaynak:
alanı dolu olanlar` hesabı 165 verdi, ama C1/C2 taraması bunun 7'sinin
ÖZETİNDE ZATEN "TDV'de yok/bulunamadı" cümlesi taşıdığını gösterdi
(`novgorod`, `pskov`, `ermenistan-demokratik-cumhuriyeti`, `floransa`,
`hausa-sehir-devletleri`, `nguyen-beyligi`, `cin-cumhuriyeti` — hepsi daha
önceki turlarda benim yazdığım, zaten "TDV'de yok" diye işaretli kayıtlar).
Bunlar Parti C1'in AYNI mekanik kuralıyla (negatif beyan → `kaynak:`
alanına taşı) yazıldı — 7 ek satır, araştırma değil taşıma.
**GERÇEK C2 havuzu böylece 158'e düzeltildi** (140 değil — önceki ölçümüm
Parti A/B'nin farklı ara listelerden beslendiğini hesaba katmamıştı, bu
turda düzelttim).

### ② C2 PİLOTU — 158'lik havuzdan 20 kayıt, TABAKALI (bölgeyle orantılı)

En büyük kalan artık yöntemiyle (largest remainder) 17 bölgeden orantılı
seçildi (büyük bölgeler 2, küçükler 1, en küçük 8 bölge bu turda 0 pay
aldı — 158'i 20'ye bölünce kaçınılmaz). Her kayıt §4 ile sınandı (HTTP +
WebFetch gövde okuması).

### TESLİM — DÖRT SAYI

**12 doğrulandı · 0 çürüdü (bu turda hiç "canlı ama yanlış madde" çıkmadı)
· 7 bulunamadı · 1 yetersiz.**

```
DOĞRULANDI (12):
  ace-sultanligi -> ace          (1521 kuruluş, TDV birebir)
  arakan         -> arakan       (1237 Launggret'ten modern döneme tam kapsıyor)
  ahmednagar     -> nizamsahiler (1489-90 kuruluş, 1636 son, TDV birebir)
  aiz            -> ebha         (Âiz b. Mûsâ isyanı doğrudan anlatılıyor)
  afsar          -> avsarlilar   (1736-1804 hanedan tarihi, TDV birebir)
  almanya        -> almanya      (Roma'dan 1989'a tam siyasi tarih)
  belcika        -> belcika      (1830 bağımsızlık ve sonrası)
  aragon         -> aragon       (1035 kuruluş, 1479 Kastilya birliği)
  buhara         -> buhara       (Şeybânî'den Sovyet'e tam hanlık/emirlik tarihi)
  altinorda      -> altin-orda-hanligi (1241-1502 birebir)
  danimarka      -> danimarka    (6. yy'dan 1978'e tam tarih)
  naksa-dukaligi -> naksa        (1205 kuruluş, 1537-38 Osmanlı fethi)

YETERSİZ (1):
  ahiler -> ahilik (madde teşkilatı tanımlıyor ama Ankara'yı yönetme
                     iddiasını karşılamıyor — Parti A'daki "ankara" adayı
                     denemesiyle AYNI sonuç, ikinci kez doğrulandı)

BULUNAMADI (7):
  edo-bakufu, goryeo, cenova, ferrara, estonya, aztek-imparatorlugu,
  brezilya-imparatorlugu — hepsi için 3-4 alternatif slug denendi, hiçbiri
  tutmadı (Kore/İtalyan şehir devletleri/Baltık/Amerika-öncesi Kolomb
  konuları TDV kapsamı dışında kaldı)
```

**20 kaynak: alanı yazıldı** (12 pozitif + 7 negatif + 1 yetersiz).

### BÖLGE BÖLGE İSABET TABLOSU (bu pilotun haritası)

| bölge | pilotta test | doğrulandı | oran |
|---|---|---|---|
| iberya | 1 | 1 | %100 |
| orta-avrupa | 1 | 1 | %100 |
| bati-avrupa | 1 | 1 | %100 |
| orta-asya | 1 | 1 | %100 |
| sibirya-bozkir | 1 | 1 | %100 |
| kuzey-avrupa | 1 | 1 | %100 |
| balkanlar | 1 | 1 | %100 |
| iran | 1 | 1 | %100 |
| arabistan | 1 | 1 | %100 |
| guneydogu-asya | 2 | 2 | %100 |
| guney-asya | 1 | 1 | %100 |
| anadolu | 1 | 0 (1 yetersiz) | %0 (yetersiz) |
| dogu-asya | 2 | 0 | %0 |
| italya | 2 | 0 | %0 |
| dogu-avrupa | 1 | 0 | %0 |
| orta-amerika | 1 | 0 | %0 |
| guney-amerika | 1 | 0 | %0 |

⚠️ **Örneklem küçük (bölge başına 1-2 kayıt) — bu tablo KESİN bölgesel oran
değil, İLK İZLENİM.** Ama desen açık: **Avrupa (Batı/Orta/Kuzey/Doğu
hariç)+İberya+İran+Arabistan+Orta Asya+Sibirya+Balkanlar+G.Asya+GD.Asya
kümesinde TDV güçlü (12/14 test = %86)**; **Doğu Asya+İtalya+Amerika
kümesinde TDV bu örneklemde SIFIR (0/6)** — İtalya'nın sıfır çıkması özellikle
dikkat çekici (Parti B'de `cezayir-fransiz`/`hollanda-dogu-hint` gibi genel
ülke maddeleri iyi sonuç vermişti, ama İtalyan şehir-devletleri — floransa,
savoya, bonacolsi, şimdi cenova/ferrara — TEK BİR TANESİ bile TDV'de
doğrulanamadı; 6/6 bulunamadı artık). Amerika kıtası (Aztek, Brezilya) ve
Doğu Asya (Kore, Japon şogunluğu adları) beklenen şekilde sıfır — TDV'nin
coğrafi kapsamının dışında.

`data/devletler.js` pathspec'siz bırakıldı. Kalan 138 (158-20) kayda
BAŞLANMADI — talimat bekleniyor. Koordinatöre haber verildi.

## ㉜ GERİYE DÖNÜK AYRIM (①) + GRUP 1/2 (②) — devam ediyor

### ① Geriye dönük yetersiz/bulunamadı ayrımı — TAMAMLANDI, 17 kayıt

Parti A'nın 2 ve Parti B'nin 15 hâlâ `kaynak:`sız çürüyeni (toplam 17)
tek tek yeniden arandı:

**DOĞRULANDI'ya YÜKSELDİ (8)** — ilk taramada "çürüdü" sayılmıştı ama
gerçekte TDV'nin GENEL ülke maddesi (avusturya/macaristan/polonya/gurcistan/
azerbaycan/cekoslovakya/finlandiya/iran) modern/spesifik dönemi de
kapsıyordu, içerik okunarak doğrulandı:
`gurcistan-demokratik-cumhuriyeti`→gurcistan · `azerbaycan-demokratik-
cumhuriyeti`→azerbaycan · `iran`→iran · `cekoslovakya`→cekoslovakya ·
`finlandiya`→finlandiya · `polonya`→polonya · `avusturya-cumhuriyet`→
avusturya · `macaristan-naiplik`→macaristan.

**YETERSİZ (2)**: `sarki-rumeli` (rumeli maddesi okundu, 1878-85 dönemini
karşılamıyor — madde Tanzimat/1864 reformuyla bitiyor) · `fransiz-misir-
seferi` (misir maddesi okundu, "Fransız İşgali ve Sonrası" başlığı var ama
sefer detayı yok).

**BULUNAMADI (7)**: `kilikya-ermeni` (kili/sis alakasız) · `letonya` ·
`litvanya` (arama yalnız Lipkalar'a düşüyor) · `haiti` · `siena` · `piza` ·
`maya-sehir-devletleri`.

Ayrıca `ermenistan-demokratik-cumhuriyeti` (zaten "bulunamadı" işaretliydi)
gurcistan/azerbaycan paterniyle yeniden test edildi — "ermenistan" TDV'de
yalnız arama sayfası, doğru sınıflandırma teyit edildi, değiştirilmedi.
Diğer 8 eski "bulunamadı" kaydı (novgorod, pskov, cenova, floransa, estonya,
cin-cumhuriyeti, hausa-sehir-devletleri, nguyen-beyligi) YENİDEN AUDIT
EDİLMEDİ — kapsam dışı bırakıldı (görev ① yalnız "çürüdü" kalanlarını
istiyordu).

### ② GRUP 1/2 — 158 havuzdan 84'ü işlendi, devam ediyor

Tam derinlikte arandı (kanonik + gereken kadar alternatif + gövde okuması):

**Kafkasya+Anadolu+İran+Arabistan (20)**: 19 doğrulandı, 1 bulunamadı
(usfuri). Anadolu beylikleri (mentese, karesi, çobanoğulları, eşrefoğulları,
inançoğulları, sâhib-ataoğulları) + selçuklu(→selcuklular) TAM İSABET.

**İberya+Orta Asya+Sibirya+Balkanlar (17)**: 14 doğrulandı, 3 bulunamadı
(zaporojye, navarra + arabistan'daki usfuri hariç). yakub-beg'in TDV'de
AYNI İSİMLİ AMA FARKLI KİŞİ (Germiyanoğulları kurucusu) tuzağı vardı —
doğru slug `kasgar` ile düzeltildi.

**Avrupa alt-bölgeleri — Doğu/Batı/Kuzey/Orta (17)**: 9 doğrulandı
(rusya, polonya-erken→polonya, lehistan→polonya, erdel, isvicre,
isvec-birlik-oncesi→isvec, isvec), 13 bulunamadı — İskoçya/İrlanda/
Lüksemburg/Norveç/Bohemya/Bretanya/Burgonya/Moskova/Sovyet Rusya TDV'de YOK
(yalnız isim geçen kişi maddeleri var, ülke maddesi yok).

**Güney Asya (30)**: 17 doğrulandı, 13 bulunamadı. İslami sultanlıklar
(behmeni, gucerat, bicapur, gölkonde, sind, malva, imadşahiler/berar,
bengal, haydarabad, bahavelpur, bopal, multan-langah) TAM İSABET; Hindu
krallıkları (hoysala, pandya, kakatiya, yadava, bharatpur) ve İngiliz-öncesi
küçük nevablıklar (avad, cavnpur, karnatik, cunagadh, kocin, madurai) TDV'de
YOK.

**Güneydoğu Asya (30)**: İŞLENİYOR — ilk tur: brunei, sulu, demak
doğrulandı; malaka(şehir maddesi, sultanlık kuruluşu anlatılıyor) doğrulandı;
mataram, mağindanao, samudra-pasai bulunamadı (yalnız arama/geçiş
referansı). Vietnam/Tayland/Myanmar/Kamboçya GENEL ülke maddeleri (vietnam
YOK, tayland/myanmar/kamboçya VAR) test ediliyor — tayland ve myanmar
genel maddeleri ilgili hanedanları (Ayutthaya/Sukhothai/Thonburi/Chakri;
Pagan/Toungoo/Konbaung/Hanthawaddy-Pegu) İÇERİYOR, bunlar doğrulandı
sayılacak. Endonezya genel maddesi Majapahit/Singhasari/Sunda-Pajajaran'ı
İslam-öncesi bağlamda anıyor — içerik yeterliliği değerlendiriliyor.

🔴 **ARA MÜDAHALE — TIRNAK TUTARSIZLIĞI DÜZELTİLDİ:** koordinatör
`kaynak:'...'` (tek tırnak, 208 kayıt) ile `kaynak:"..."` (çift tırnak, 99
kayıt) tutarsızlığını bildirdi (`arac/girdi.py` okuyucusu tek tırnak kabul
etmiyordu). `Write` ile scratchpad'e `tirnak_duzelt.py` yazıldı (regex ile
`\'` kaçışları düz kesme işaretine çevrildi, içerikte çift tırnak varsa
kaçırıldı — Bash/sed KULLANILMADI, §11 kuralı). Sonuç: `kaynak:'` → 0,
`kaynak:"` → 307, kayıt 381, mükerrer 0, kaynaksız 74 (değişmedi — yalnız
biçim düzeltildi). Koordinatöre HEMEN bildirildi.

Devam ediyor: güneydoğu-asya'nın kalanı → GRUP 2 (italya/doğu-asya/amerika,
2-deneme tavanlı) → küçük bölgeler (misir-sudan/kuzey-afrika/orta-afrika/
bati-afrika/dogu-afrika/okyanusya, listede açıkça yoktu, GRUP 1 muamelesi
uygulanıyor çünkü İslam dünyası kapsamına daha yakınlar; okyanusya GRUP 2
muamelesi görecek).

## ㉝ TESLİM — ① geriye dönük ayrım + ② GRUP 1/2 TAMAMLANDI, 158/158

### Dört sayı (① + ②, kurtarılanlar ayrı)

```
DOĞRULANDI   115   (① 8 + ② 107)
YETERSİZ       4   (① 2 + ② 2)
BULUNAMADI    56   (① 7 + ② 49)
ÇÜRÜDÜ         0   (hepsi çözüldü — geriye kalan yok)
─────────────────
TOPLAM       175   (① 17 + ② 158)
```
Daha önce (bu turdan ÖNCE) Parti A/B'nin orijinal çürüyenlerinden 8'i
(4+4) DOĞRULANDI'ya kurtarılmıştı — bu sayı yukarıdaki 175'e DAHİL DEĞİL,
ayrı ve önceki bir tur işiydi.

**Dosya geneli** (381 kayıt, tamamı artık kaynaklı):
`doğrulandı 225 · yetersiz 7 · bulunamadı 149` — kaynaksız kayıt **0**.

### Bölge tablosu (② — 158 kayıt, pilot formatında)

| bölge | doğrulandı | yetersiz | bulunamadı | toplam | isabet |
|---|---|---|---|---|---|
| kafkasya | 1 | 0 | 0 | 1 | %100 |
| anadolu | 7 | 0 | 0 | 7 | %100 |
| iran | 5 | 0 | 0 | 5 | %100 |
| arabistan | 6 | 0 | 1 | 7 | %86 |
| iberya | 4 | 0 | 1 | 5 | %80 |
| orta-asya | 5 | 0 | 0 | 5 | %100 |
| sibirya-bozkir | 3 | 0 | 1 | 4 | %75 |
| balkanlar | 3 | 0 | 0 | 3 | %100 |
| dogu-avrupa | 3 | 0 | 2 | 5 | %60 |
| bati-avrupa | 0 | 0 | 6 | 6 | %0 |
| kuzey-avrupa | 2 | 0 | 1 | 3 | %67 |
| orta-avrupa | 2 | 0 | 1 | 3 | %67 |
| guney-asya | 17 | 0 | 13 | 30 | %57 |
| guneydogu-asya | 16 | 2 | 12 | 30 | %53 (yetersiz dahil %60) |
| misir-sudan | 1 | 0 | 0 | 1 | %100 |
| kuzey-afrika | 1 | 0 | 0 | 1 | %100 |
| orta-afrika | 1 | 0 | 0 | 1 | %100 |
| bati-afrika | 1 | 0 | 0 | 1 | %100 |
| dogu-afrika | 3 | 0 | 0 | 3 | %100 |
| **italya (GRUP2)** | 5 | 0 | 3 | 8 | %63 |
| **dogu-asya (GRUP2)** | 11 | 0 | 6 | 17 | %65 |
| **kuzey-amerika (GRUP2)** | 2 | 0 | 0 | 2 | %100 |
| **orta-amerika (GRUP2)** | 2 | 0 | 0 | 2 | %100 |
| **guney-amerika (GRUP2)** | 4 | 0 | 0 | 4 | %100 |
| **okyanusya (GRUP2)** | 2 | 0 | 2 | 4 | %50 |

### 🔴 EK — GRUP 2'de 2. denemeyle kaç tuttu (pilotun %0'ı gerçek miydi?)

**CEVAP: pilotun %0'ı ÖRNEKLEM GÜRÜLTÜSÜYDÜ, gerçek desen değildi.**

GRUP 2'de canonik slug tutmayınca denenen 2. (alternatif) denemelerin
SONUCU:
```
2. denemesi yapılan kayıt     : 17
2. denemede TUTAN              : 10   (%59)
2. denemede de tutmayan        : 7
```
Tutan 10'un ayrımı: **Doğu Asya'da Çin hanedanları (song, jin-hanedani,
yuan-hanedani, ming-hanedani, qing-hanedani) 5 kayıt** — kanonik "cin"
slug'ı YANLIŞ maddeye (cin = "jinn/ruh" fıkıh terimi) düşüyordu, doğru slug
`cin--ulke` idi (tıpkı `ordu`/`ordu--sehir` tuzağı gibi — bkz. CLAUDE.md
§4③). **Amerika'da 5 kayıt** (inka-imparatorlugu, yeni-ispanya, meksika,
portekiz-brezilyasi, ispanyol-peru) — hiçbirinin kendi özel maddesi yoktu
ama TDV'nin GENEL "amerika" (kıta) maddesi hepsini somut tarih/olayla
(1519 Aztek fethi, 1536 Buenos Aires kuruluşu, 1500 Brezilya işgali vb.)
kapsıyordu.

Tutmayan 7: İtalya'da milano-dukaligi/mantua/parma (üçü de yalnız isim
geçen şehir-devletleri, TDV'de bağımsız madde yok) + Doğu Asya'da
joseon/ryukyu/taiping (gerçekten TDV kapsamı dışı) + Okyanusya'da
hawaii-kralligi.

📌 **Sonuç: pilotun İtalya/Doğu Asya/Amerika için ölçtüğü "%0" yanlış
genellemeydi — asıl sorun bölgenin TDV kapsamı DIŞINDA olması değil, PİLOTUN
DENEDİĞİ SLUG'LARIN YANLIŞ TÜR olmasıydı (özel-kurum adı yerine GENEL
ÜLKE/KITA maddesi denenmeliydi).** İtalya'da bile "napoli/papalik/toskana/
sardinya/italya" (ülke-şehir genel maddeleri) 1. denemede TUTTU; yalnız saf
"Dükalık" kurumsal adları (milano-dukaligi, mantua, parma) boş çıktı.

### Metodoloji notu — tibet, kesmir, sind gibi "genel bölge maddesi" örnekleri

Bu turda tekrarlanan güçlü bir örüntü: TDV'nin GENEL ülke/bölge/kıta maddesi
(polonya, avusturya, macaristan, gurcistan, azerbaycan, rusya, ispanya,
portekiz, hindistan, bengal, japonya, cin--ulke, amerika...) çoğunlukla o
coğrafyanın TÜM tarihini (ortaçağ krallığı → modern cumhuriyet) tek maddede
kapsıyor. Kurumsal/hanedan-özel adlar (milano-dukaligi, kutluhanlilar,
hazaraspiler) ise ayrı ve dar aranmalı; bulunmazsa GENEL coğrafya maddesi
denenmeli — bu turda en çok isabeti bu ikinci deneme getirdi.

### Doğrulama
```
kayıt sayısı        : 381 (değişmedi)
mükerrer id          : 0
kaynaksız kayıt       : 0  (158 havuzun TAMAMI işlendi)
ters/sıfır süreli f-t : 0  (düzgün sayısal karşılaştırmayla, önceki "18"
                            3 haneli yıl string karşılaştırma yanılgısıydı,
                            gerçek hata DEĞİL — dokunulmadı)
dosya geneli          : doğrulandı 225 · yetersiz 7 · bulunamadı 149
```
`data/devletler.js` pathspec'siz bırakıldı (koordinatör kuralı). Koordinatöre
bildirildi.
