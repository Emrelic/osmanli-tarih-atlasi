# HALKA-SARI-0072 — parti 0072 / H-0003 raporu

20 Eylül 2026 · oturum **HALKA-SARI-0072** · Emre'nin sorusu:
*"bu iki şehir neden sarı görünüyor bunun anlamı ne idi"* + iki ek madde.

Öngörü (ölçümden ÖNCE yazıldı): [`HALKA-SARI-0072-ONGORU.md`](HALKA-SARI-0072-ONGORU.md)
Ölçüm: [`OLCUM-HALKA-SARI-0072-ONCE.json`](OLCUM-HALKA-SARI-0072-ONCE.json) (düzeltmeden önce) ·
[`OLCUM-HALKA-SARI-0072-SONRA.json`](OLCUM-HALKA-SARI-0072-SONRA.json) (sonra)
Alet: [`ARAC-HALKA-SARI-0072-SINAV.js`](ARAC-HALKA-SARI-0072-SINAV.js) — headless Chrome + CDP,
gerçek `index.html`, sınav anı **1813-10-05**, odak `16.5/45.12`, zoom 8.

---

## ① Teşhis — o sarı işaretler NE

**Kaynaklı sahiplik halkası DEĞİL.** Ölçüldü: ⑧ kapalıyken halka katmanı
gerçekten boş (`KHALKA.acik=false`, `cizilen=0`, `halka-kaynakli` katmanında
**0** çizilen feature). Ekrandaki iki sarı işaret başka bir katmandan geliyor:

| ölçülen | değer |
|---|---|
| katman | `hukuki-sinir-nokta` (C ÇİZİM KATMANI, 11 Eylül 2026) |
| veri dosyası | **`data/hukuki_sinirlar.js`** — `data/kaynakli_halka_*.js` DEĞİL |
| kayıt | `karlofca-bosna-kaleler-1699` · `hat.tur = "nokta-kumesi"` · 2 nokta |
| noktalar | `Kostayniça (Kostajnica)` · `Bosna Novi'si (Bosanski Novi)` |
| renk | **`#bdab3f`** = `_cTarafRengi("habsburg")` → künye `harita:"avusturya"` → `DEVLET_HARITA.avusturya.renk` |
| pencere | `f:"1699-01-26"` → `t:"1918-11-11"` = **219 yıl** |

**Anlamı:** "Karlofça antlaşmasının birincil metni bu iki kaleyi Habsburg'a
veriyor." Sarı = Avusturya/Habsburg harita rengi. İşaret bir *antlaşma hükmü
rozeti*, şehrin o günkü sahipliği değil.

### 🔴 Teşhisin yan bulgusu 1 — Bosanski Novi YANLIŞ TARAFTA
Kaydın kendi alıntısı şöyle: *"…all the Imperial Garrisons that are in **Novi**,
Dubizza, Sessenovizza, Doboy and Bred on the part of Bosnia…shall be **drawn
out** from thence…**But whereas Castanoviz**…are and **remain in the Power of
the Emperor of the Romans**…"* — yani Novi'nin imparatorluk garnizonu
**çekiliyor** (Osmanlı'da kalıyor), yalnız Kostayniçe Avusturya'da kalıyor.
Kayıt ikisine de `taraf:"habsburg"` yazmış.

TDV (§4 birincil) aynı hükmü veriyor:
> "Brot, Dobay (Debej), Yesanofça (Jasenowac), Dupiçe (Dubica), Kostayniçe
> (Kostajnica), Novi, Krupa ve Bihke (Bihaç) kaleleri üzerinde uzun tartışmalar
> oldu." … "Neticede **Kostayniçe'nin Avusturya'da kalmasına karşılık diğer
> kalelerin boşaltılması** kararlaştırıldı."
> — TDV İslâm Ansiklopedisi, «Karlofça Antlaşması», 20 Eylül 2026'da okundu.

Atlasın kendi verisi de aynı yönde: `data/yerlesimler_ek29.js`te
`Bosna Novi'si` için `s:` Avusturya dönemi **YOK**, yalnız `isg:` 1788-10-03 →
1791-08-04 işgali var. Yani 1813'te şehir Osmanlı dolgusunda — sarı işaret
dolguyla ÇELİŞİYOR. `Kostayniçe` içinse `s:{1699-01-26→1918-11-11, avusturya}`
var, orada işaret dolguyla uyumlu (ama gereksiz tekrar).

⇒ **Öneri (uygulanmadı, kayıt paylaşılan veri):** `karlofca-bosna-kaleler-1699`
kaydından `Bosna Novi'si (Bosanski Novi)` nokta ataması ÇIKARILSIN, ya da
`taraf:"osmanli"` olarak düzeltilsin (metin "boşaltılıyor" diyor; "Osmanlı'ya
veriliyor" hükmünü TDV açıkça kuruyor). Karar 1.MURAT/Emre'nin.

### 🔴 Teşhisin yan bulgusu 2 — Kostajnica'nın işareti şehrinden 12,5 km uzakta
| | lat/lon |
|---|---|
| C kaydındaki nokta (`hukuki_sinirlar.js`) | 45.183 / 16.683 |
| Yerleşim kaydı (`yerlesimler_ek29.js`, ad: `Kostayniçe (Kostajnica)`) | 45.232 / 16.539 |
| fark | **12,53 km** |

Görselde sarı beneğin şehir etiketinin yanında AYRI durmasının sebebi bu (Emre
"iki şehir" derken birinde halka, ötekinde yalnız benek görüyor). Bosanski
Novi'de iki koordinat AYNI (45.048/16.377, fark 0 km) — bu yüzden orada işaret
şehir noktasının çevresinde *halka gibi* görünüyor. Ayrıca iki dosyada ad da
ayrışmış: C `Kostayniça` · yerleşim `Kostayniçe`.

---

## ② Kusur iddiası — "ayar işaretli değilken halkalar gösteriliyor"

**Emre HAKLI (gözlem), ama sebep halka motorunda değil.** Ölçüm (düzeltmeden
önce, `OLCUM-…-ONCE.json`):

| ⑧ ayarı | `halka-kaynakli` çizilen | `hukuki-sinir-nokta` çizilen |
|---|---|---|
| KAPALI (`ayar_isaretli:false`) | **0** | **2** (ikisi de sarı, `#bdab3f`) |
| AÇIK (`ayar_isaretli:true`) | **0** | **2** (aynı iki nokta) |

Sebep: `_khCNoktaSuzgeci()` (14 Eylül 2026) yalnız `_KH_GOCMUS_C_KAYITLARI`
listesindeki tek kaydı (`ferhad-pasa-istanbul-1590`) süzüyordu; Karlofça
noktaları ⑧'den **bağımsız** çiziliyordu. Üstelik 14 Eylül kararıyla ⑧'in
halkası da AYNI biçime (yarıçap 6, dolu daire, `#1a1a1a` ince kenar)
getirilmişti ⇒ ekranda ayırt edilemeyen iki işaretten yalnız biri ayara bağlı.

Ayrıca bu iki şehir için kaynaklı halka havuzunda (198 tanıklık) **hiç kayıt
yok** (`eslesen: []`) — yani ⑧ açılsa bile onlara halka gelmiyor; gelen tek şey
C noktası.

📌 Bağlam: 1813-10-05'te **bütün havuzun** aktif halka sayısı **0**
(`KHALKA.cizilen = 0`, ⑧ açıkken de). Havuz 1326–1699 arasında yoğun; Emre'nin
baktığı ekranda ⑧ ne yapılırsa yapılsın halka çıkmıyordu — ekrandaki tek işaret
C noktasıydı. Bu, "ayar çalışmıyor" izlenimini büyüten ikinci sebep.

### Düzeltme (uygulandı — `js/app.js`, COMMİTLENMEDİ)
`_khCNoktaSuzgeci()` artık ⑧ kapalıyken `hukuki-sinir-nokta` katmanını
tamamen boşaltıyor (`["==", ["literal",1], ["literal",0]]`); ⑧ açılınca eski
davranış (göçmüş kayıt hariç) aynen dönüyor. Geri alma tek satır:
`_KH_C_NOKTA_AYARA_BAGLI = false`.

**Düzeltmeden sonra ölçüldü** (`OLCUM-…-SONRA.json`, aynı gün/aynı odak):

| ⑧ ayarı | `halka-kaynakli` çizilen | `hukuki-sinir-nokta` çizilen |
|---|---|---|
| KAPALI | 0 | **0** ✓ |
| AÇIK | 0 | 2 (Kostayniça · Bosna Novi'si) |

⚠️ Kapsam: bu değişiklik yalnız `hukuki-sinir-nokta` katmanını etkiler —
C'nin **dolgu** ve **hat** (kesik çizgi) katmanları eskisi gibi ⑧'den
bağımsızdır. Etkilenen kayıtlar: `karlofca-lehistan-1699` (4 nokta) ·
`karlofca-venedik-1699` (4 nokta) · `karlofca-bosna-kaleler-1699` (2 nokta) =
**10 nokta** (+ zaten gizli olan `ferhad-pasa-istanbul-1590`'ın 18 noktası).
Yani ⑧ kapalıyken haritadan 10 benek kalkar. Emre bunun tersini isterse tek
satırla dönülür.

---

## ③ ZAMAN SINIRI — "her zaman için geçerli olmamalıdır"

### Ölçüm: halka şemasında zaman alanı ZATEN VAR
| ölçülen (havuz = 198 tanıklık) | değer |
|---|---|
| `f`/`t` aralığı taşıyan kayıt | 17 |
| tekil `tarih` taşıyan kayıt | 181 |
| **zaman alanı hiç olmayan kayıt** | **0** |
| penceresi çözülemeyen (`kesinlik:"belirsiz"`) | 1 |

Motoru `kaynakliHalkaPencere()` (js/app.js): `f` kendi hassasiyet biriminin
sonuna, `t` başına yuvarlanır; tekil `tarih` yalnız kendi birimi boyunca
geçerlidir; üstüne `_khKirpikPencere()` (13 Eylül) nokta tanıklığını haritanın
kendi dilimleriyle daraltır.

**Emre'nin Knin örneği zaten böyle çalışıyor:** `data/kaynakli_halka_kronoloji.js`
içinde `kr-knin-venedik-1688` — `yer:"Knin"`, `devlet:"venedik"`,
`tarih:"1688-01-01"`, `kesinlik:"yil"`. Halka yalnız o pencerede çiziliyor,
Venedik'in koyu harita renginde. Yani istenen davranış **halka sisteminde
mevcut**.

### Sınırsızlık NEREDE: C kayıtlarının `t:` alanı
`data/hukuki_sinirlar.js`in 9 kaydının penceresi:

| kayıt | f | t | yıl | nokta |
|---|---|---|---|---|
| `midye-enez-1913` | 1913-05-30 | 1913-06-29 | 0 | 0 |
| `misir-sudan-22-paralel-1899` | 1899-01-19 | 1914-12-18 | 15 | 0 |
| `ii-erzurum-sattularap-1847` | 1847-05-31 | 1923-10-29 | 76 | 0 |
| `karlofca-lehistan-1699` | 1699-01-26 | 1795-10-24 | 96 | 4 |
| `karlofca-venedik-1699` | 1699-01-26 | 1797-05-12 | 98 | 4 |
| `karlofca-bosna-sava-1699` | 1699-01-26 | 1918-11-11 | 219 | 0 |
| **`karlofca-bosna-kaleler-1699`** | 1699-01-26 | **1918-11-11** | **219** | **2** |
| `ferhad-pasa-istanbul-1590` | 1590-03-21 | 1603-10-21 | 13 | 18 |
| `ferhad-pasa-1590-sinir-hatti` | 1590-03-21 | 1603-10-21 | 13 | 0 |

`t:"1918-11-11"`in kaydın kendi içindeki gerekçesi: *"habsburg'un kendi sonu"*
— yani **kaynağın söylediği bir tarih değil, devletin ömrü**. Kaynak (Karlofça
metni, 26 Ocak 1699) yalnız o günkü tahliye/kalma hükmünü söylüyor.
Emre'nin şikâyeti tam buraya oturuyor: bir 1699 hükmü 219 yıl boyunca ekranda
duruyor ve 1813'te Sırp İsyanı ekranında anlamsız görünüyor.

### Şema önerisi — A/B (karar Emre'nin, veri YAZILMADI)

**A — C nokta atamalarını halka sistemine GÖÇÜR (önerim).**
Her `nokta_atamalari[i]` → `data/kaynakli_halka_karlofca.js` içinde bir halka
kaydı: `yer` (yerleşim adıyla TAM eşleşen), `devlet`, `tarih:"1699-01-26"`,
`kesinlik:"gun"`, `kaynak.alinti` kaydınkinden devralınır; kaydın id'si
`_KH_GOCMUS_C_KAYITLARI`ya eklenir.
- Veri maliyeti: **10 nokta → 10 halka kaydı**, 3 C kaydına birer id satırı;
  yeni dosya 1 (`kaynakli_halka_karlofca.js`) + `_KAYNAKLI_HALKA_DOSYA_ADLARI`ya
  1 satır. Kod değişikliği **yok** (mekanizma hazır).
- Geriye dönük uyum: tam — C kayıtları SİLİNMEZ, dolgu/hat aynen kalır; yalnız
  nokta çizimi göçer (14 Eylül'de `ferhad-pasa-istanbul-1590` için aynısı
  yapıldı, emsal var).
- Kazanç: tek mekanizma · tek ayar · pencere KAYNAKTAN (`tarih`+`kesinlik`) ·
  `_khKirpikPencere` kırpması · tıklayınca kaynak+alıntı kartı · çelişen
  tanıklıkta ikinci halka.
- Bedel: 1699 hükmü artık yalnız 26 Ocak 1699 günü (kesinlik `gun`) görünür.
  Süreklilik isteniyorsa `f/t` aralığı yazılır ama **iki ucu da kaynaktan**
  gelmeli — Karlofça metni bitiş vermiyor, o yüzden `tarih` doğru biçim.

**B — C şemasına nokta başına pencere ekle.**
`hat.nokta_atamalari[i]` kendi `f`/`t`/`tarih`+`kesinlik`ini taşısın; kaydın
`t:` alanı yalnız HAT için geçerli kalsın.
- Veri maliyeti: aynı 10 nokta elden geçer + `VERI-YAPISI.md`de şema maddesi.
- Kod maliyeti: `_cNoktaKumesiOzellikleri` (js/app.js) nokta başına pencere
  süzecek — **yeni kod**, halka motorundaki pencere mantığı ikinci kez yazılır
  (ya da ortak hâle getirilir).
- Geriye dönük uyum: penceresiz nokta eski davranışı sürdürür (kayıt penceresi).
- Kazanç: C kayıtları bütün kalır.
- Bedel: iki paralel mekanizma yaşamaya devam eder; Emre'nin bugün sorduğu
  "neden iki tür işaret var" sorusu tekrar sorulur.

**Önerim A** — çünkü bugünkü kusurun kökü tek şeyin iki mekanizmayla
çizilmesi; A onu teke indiriyor ve kod yazmıyor.

---

## Ne bulamadım
- `karlofca-bosna-kaleler-1699`in ana kaynağı (Scribd'de barındırılan "Karlovački
  Mir" derlemesi) **açılmadı** — kaydın kendi `guvenilirlik_notu`nda da aynı
  uyarı var. Hüküm TDV'nin kendi cümlesiyle teyit edildi; birincil metnin
  akademik neşri **bulunamadı**.
- C kaydındaki Kostajnica koordinatının (45.183/16.683) dayanağı kayıtta
  **yazmıyor**; yerleşim kaydınınki (45.232/16.539) ile hangisinin doğru olduğu
  bu oturumda ölçülmedi — koordinat doğrulaması istenirse ayrı iş.
- Ekran görüntüsü (`Page.captureScreenshot`) headless + swiftshader'da cevapsız
  kalabiliyor; sınav 20 sn yarışla çağırıyor, gelmezse `false` yazıyor. Sayılar
  bundan etkilenmiyor.
