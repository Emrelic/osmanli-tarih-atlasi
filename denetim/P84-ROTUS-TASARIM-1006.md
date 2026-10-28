# P84-ROTUS-TASARIM-1006 · H-0019 rötuş tasarımı + üç aday + H-0016 ayırt etme

Oturum: P84-ROTUS-TASARIM-1006 (eski: HAZIR KITA 0610 1240) · 6 Ekim 2026
Görevi veren: UMIT İRTİBAT · Şartname: `GOREV-ORTAK.md` + `PAKET-0084.md §B, §F`
Çalışma ağacı: `C:\atlas-p84-rotus` (`origin/makine/umit` @ `cdc1ccea`)
Ölçülen geometri: **yayındaki** üretim (`C:\atlas\data` paketleri, 1 Eki 10:51),
`py arac/kodla.py coz-c data <scratch> devlet|donem|govde` ile çözüldü. Yerleşim
verisi: `girdi.yukle()` (4299 nokta, 93 dosya).
**Uygulama YOK · geometriye dokunulmadı · diff YOK · commit YOK.**
Açılan görseller: H-0013-1, H-0013-2, H-0017-1, H-0018-1, H-0016-1 (metin tarih vermiyordu).

---

## 0. TEK PARAGRAF

Emre'nin işaret ettiği üç rötuş adayının **üçü de rötuş DEĞİL**. H-0013+H-0017 bir
**veri/hassasiyet** kusuru: TDV'nin 1443 Haçlı zaptı `1443-01-01`e yazılmış. H-0018
bir **noktasızlık** kusuru (§2): Boğdan'ın Kalas peteği güneye doğru İbrail'in batısına
uzanıyor, motorun nehir girdisinde Siret yok. Emre'nin kendi sırası (① kaynak
② veri ③ rötuş) burada ilk iki adımda bitiyor. ⇒ Rötuş mekanizması **tasarlanmalı ama
acele kurulmamalı**: bugün bekleyen tek bir gerçek rötuş adayı yok. H-0016 **aynı
mekanizma** (`kapat()` Osmanlı gövdesinde Bizans peteğini yutuyor) ama **mevcut
0083-B yaması onu KAPATMAZ**: yutulan parçalarda yabancı nokta 0, yamanın ölçütü ise
nokta. ⇒ `once-cozuldu` DEĞİL; 0083-B'nin kendi yazdığı "bilinen sınır (b)" vakası.

---

## 1. İŞ 1 — H-0019 HARİTA RÖTUŞU: TASARIM ÖNERİSİ

### 1.0 Mükerrer kapısı
`denetim/` + `oturumlar/` "rötuş|rotus" tarandı: 9 dosya. Bir rötuş MEKANİZMASI
tasarlayan yok. İlgili öncüller:
- `oturumlar/GORUNUM-ABC-0910.md` (Emre, 10 Eyl): **A** üretilir · **B** A'yı
  *algoritmayla* rötuşlar (enklav/koridor/boşluk) · **C** hukukî hat. Kullanıcı A ya da
  B'yi seçer.
- `denetim/MOTOR-0916.md §④`: B1/B2/B3 her koşuda açık, "iki çıktı (A ham · B
  rötuşlu) 🔴 YOK".

⇒ H-0019'un rötuşu B değildir. B **kural**dır, her yere uygulanır. H-0019 **elle
yazılmış, yerel, adıyla anılan istisna**dır. Bu yüzden ayrı bir harf hak ediyor.
Bu raporda adı **R**. Öncelik sırası:
`C (hukukî) > VERİ (kaynaklı s:/d:/v:) > B (algoritma) > R (rötuş)`.
R yalnız C'nin ve kaynaklı verinin **sessiz** kaldığı yerde yazılabilir.

### 1.1 Üç seçenek — ölçülen öncüllerle
| seçenek | ne | artısı | eksisi | hüküm |
|---|---|---|---|---|
| **(A) `data/rotus.js` + motorda gövde SONRASI uygulama** | kayıt listesi; motor, gövde hesabından (ve önbellekten) SONRA `X −= P`, `Y ∪= P` uygular | öncülü var ve çalışıyor: `_komsu_toprak_cikar` (GOVDE-CAKISMA-0079, `uret_petek.py:6629`) tam bu noktada, önbellekten SONRA uygulanıyor, kendi yorumu "önbellek çıkarmadan ÖNCEKİ gövdeyi tutar". ⇒ yeni rötuş = **veri koşusu**, tuz değişmez | bir kez motor yaması (tuz ⇒ TAM İNŞA) + `girdi.py` girdi listesi | **ÖNERİM** |
| (B) `yer_yama` genişletmesi / "rötuş noktası" eklemek | sahte yerleşim ya da `s:` oynatarak peteği çekmek | motor değişmez | yerleşim katmanını kirletir (Değişmez 1 sayacı, kronoloji senkronu, etiket). Şekil denetlenemez, petek nereye uzanırsa oraya gider. "Rötuş" bir sahiplik iddiasına dönüşür | **RED**. Gerçek bir noktanın eklenmesi meşrudur ama o rötuş değil VERİ'dir (H-0018 tam bu) |
| (C) motorda sabit istisna kovası | `uret_petek.py` içinde sözlük | basit | her rötuş tuzu değiştirir ⇒ her rötuş tam inşa (`§9.1`, 19 commit/0 isabet vakası) | **RED** |
| (D) yalnız `app.js`te çizimde yama | tarayıcı poligonu boyar | koşu gerekmez | `denetle.py`, `uret_devirler.py`, Değişmez 8, `bolgeler` RÖTUŞSUZ geometriyi görür: **iki gerçek** | **RED** |

### 1.2 Önerilen kayıt şeması (`data/rotus.js` → `window.ROTUS`)
```js
{ id:"R-0001",                       // kalıcı, H-no gibi
  ad:"Şehirköy kıymığı",             // insan okur
  f:"1443-01-01", t:"1444-08-01",    // 🔴 ikisi de VAR OLAN bir kırılma günü olmalı (R5)
  kimden:"OSMANLI", kime:"sirp-despotlugu",   // gövde kimlikleri (harita: anahtarı değil)
  geo:[[lon,lat],…],                 // küçük poligon, elle; ≤ R4 tavanı
  gerekce:"…göze tuhaf olan ne",     // serbest metin
  kaynak_arama:{ne:"TDV sehirkoy, nis; arama 'Şehirköy'", sonuc:"sessiz"},  // R2
  karar:"Emre · H-0017 · 2026-10-06" }                                       // kim karar verdi
```
`§3.4(5)`in üç zorunluluğu birebir alan oldu: **ne değişti** (`kimden/kime/geo/f/t`),
**niçin** (`gerekce` + `kaynak_arama`), **kim** (`karar`). Sayı tutulmaz, LİSTE tutulur.

### 1.3 Motor tarafı (bir kez, tam inşada)
1. `girdi.py`: `rotus.js` girdi listesine (URETIM_IZI'ye) girer. Yoksa yayın kapısı
   bayat rötuşu göremez.
2. Gövde hesabının SONUNDA, `_komsu_toprak_cikar`ın yanında, **Osmanlı (doğrudan +
   tâbi) ve yabancı gövde yollarının HEPSİNDE** (`:6671`, `:7057`, `:7354` ailesi):
   `[f,t)` içindeki her gün için `kimden −= geo` · `kime ∪= geo`, sonra KARA kesimi.
   İkisi birlikte yapılır, yoksa rötuş yeni bir binme ya da delik doğurur.
3. Motor her rötuş için `rotus_olcum` satırı basar (log + küçük JSON): gün aralığı ·
   `kimden`den kesilen km² · `kime`ye eklenen km² · etkilenen dönem sayısı.
   **Bu satır iki yönlü karşılaştırmanın kendisidir:** rötuşsuz gövde önbellekte
   zaten var (rötuş önbellekten SONRA uygulanıyor), yani ham hâl bedavaya saklanır.
4. Ekran: `app.js` küçük bir `ROTUS` çizgi katmanı çizer (kesikli kontur + "rötuş
   R-0001: <gerekce>" ipucu). "Rötuşları göster/gizle" anahtarı, gizli konumda P'yi
   `kimden`in rengiyle boyar. ⇒ Emre aynı ekranda iki hâli görür.

### 1.4 `denetle.py` onu nasıl GÖRÜR — "Değişmez R" (öneri, 6 soru)
| | soru | çıkış |
|---|---|---|
| R1 şema | her kayıtta `id ad f t kimden kime geo gerekce kaynak_arama karar` dolu mu | eksik ⇒ 1 |
| R2 sıra | `kaynak_arama.sonuc == "sessiz"` mi. "hukum_var" ya da boş ⇒ veri düzelmeli, rötuş YASAK | 1 |
| R3 ölü girdi | `rotus_olcum`da kesilen + eklenen < 1 km² (her gün) ⇒ rötuş artık hiçbir şey yapmıyor | **1**. `§3.4(5)`: ölü istisna yarın gerçek ihlali susturur |
| R4 ufak tefek | `geo` alanı ≤ tavan (öneri **≤ 500 km²**, H-0013 kıymığı bu mertebede) **ve** `geo` içinde `kimden`in o günkü HİÇBİR yerleşim noktası yok | 1. Nokta içeren poligon rötuş değil sahiplik değişimidir ⇒ VERİ |
| R5 senkron | `f` ve `t` VAR OLAN bir `d:/v:/s:` kırılma günü mü | 1. Böylece rötuş yeni bir "sessiz toprak değişimi" doğuramaz, **Değişmez 2 dokunulmadan kalır** |
| R6 bayatlık | `rotus.js` özeti ile `rotus_olcum`daki özet aynı mı | farklı / dosya yok ⇒ **2 (ÖLÇÜLEMEDİ)**, `OLCULEMEDI_KOVA`ya ADIYLA |

Ek olarak hükümde LİSTE basılır: `R-0001 <ad> <f>→<t> · −<kesilen>/+<eklenen> km²` (biçim örneği, sayı yok).
Değişmez 8 rötuşlu çıktıyı ölçer (istenen bu). Rötuşun D8'e etkisi ayrı satırda
gösterilir, tavana karışmaz.
**Sınav (iki yön, `§3.4` gereği):** ① bir şey değiştiren rötuş ⇒ R temiz ② poligonu
zaten `kime`ye ait bir rötuş ⇒ R3 öter ③ içinde `kimden` noktası olan rötuş ⇒ R4 öter
④ `f` kırılma günü değil ⇒ R5 öter ⑤ `sonuc:"hukum_var"` ⇒ R2 öter.

### 1.5 Sahiplik ve sıra
- `data/rotus.js` motor girdisi ⇒ **KOORDİNATÖR** (`§7`). İşçi ÖNERİR (kayıt + ölçüm),
  koordinatör yazar, `karar` alanı Emre'nin onayını taşır.
- Motor yaması tuz ⇒ **yalnız TAM İNŞA**. 🔴 **Öneri: mekanizma ancak ilk GERÇEK
  rötuş adayı çıktığında kurulsun.** Bugün o aday yok (§2). Boş bir mekanizma,
  boş bir istisna listesi kadar zararsız değildir. Tasarım ise şimdiden kayıtta.

### 1.6 Açık sorular (Emre / koordinatör)
① R4 alan tavanı kaç km²? (öneri 500) ② Rötuş, kullanıcı "A görünümü" seçtiğinde de
uygulansın mı? (öneri: EVET. R görünüm değil, istisnadır, B'ye bağlanmaz)
③ İlk sürüm yalnız `kimden→kime` devri mi, yoksa "sahipsize bırak" da mı?
(öneri: yalnız devir. "Sahipsize bırak" Değişmez 1'e dokunur)

---

## 2. İŞ 2 — ÜÇ ADAY: rötuş gerekir mi?

### 2.1 H-0013 + H-0017 (TEK kalem) — Şehirköy/Pirot enklavı
**ÖLÇÜM**
- Görselin günü: yalnız yerleşim dönemleriyle bulunabiliyor. Kruševac Osmanlı
  (`d: 1428-01-01→1444-08-01`) **ve** Pirot Sırp (`s: 1412→1428`, `1443→1456`)
  ⇒ kesişim **tek pencere: `1443-01-01 → 1444-08-01`**. İki görsel aynı sınırları
  gösteriyor, renkleri farklı (tema). İkisi aynı pencere.
- Yayın geometrisi (`sirbistan` boyası, `sirp-despotlugu` onun altında):
  `1443-01-01→1444-08-01` **3 bileşen** · ana 25.999 km² · **Pirot 6.017 km² AYRI** ·
  38 km² kıymık. Ana gövde ile Pirot arası en kısa ~1,4 km (Osmanlı).
  Aynı enklav **`1412-01-01→1413-07-05`**te de var (Pirot 6.017 km², ara bölge
  `musa-celebi`).
- TDV `sehirkoy` (önbellek `KORIDOR-0081-tdv-onbellek/sehirkoy.txt`), birebir:
  *"1443'te Kral Vladislav ve Sırp Despotu Curac Brankoviç liderliğindeki Haçlı ordusu
  Şehirköy'ü zaptetti."* · *"Segedin Antlaşması'nın (1444) ardından II. Murad tarafından
  tekrar Sırplar'a verildi"*. Yıl var, gün yok.
- Veride iki kronoloji maddesi aynı seferi **10 ay arayla** anlatıyor:
  `1443-01-01` "Haçlı ordusu Şehirköy'ü zaptetti — 'Uzun Sefer'in Nişava kolu" ·
  `1443-11-01` "İzladi bozgunu — 'Uzun Sefer'" (`gun:"Kasım 1443 - Ocak 1444"`).
  Ayrıca `1444-08-01` "Semendire ve Sırp kalelerinin iadesi".

**HÜKÜM: RÖTUŞ DEĞİL. Kaynak hüküm veriyor ⇒ VERİ (Emre sırası ②).**
1443-44 enklavı, yıl hassasiyetli bir tanıklığın `YYYY-01-01`e yazılmasından doğuyor
(§4 izin veriyor). Sefer Ekim/Kasım 1443'te başladı, Pirot ise Ocak 1443'ten beri Sırp
görünüyor. TDV'nin ikinci cümlesi ("Segedin'in **ardından tekrar** Sırplar'a verildi")
de Haçlı zaptı ile 1444-08 iadesi arasında kalenin yeniden Osmanlı olduğunu ima ediyor.
Veri bunu tek kesintisiz `sirp-despotlugu 1443→1456` dönemi olarak yazmış.
Önerilen veri düzeltmesi (koordinatör seçer; `yerlesimler*` ⇒ KOORD diff, bu görevde YAZILMADI):
- **(a) önerim:** Pirot `s: sirp-despotlugu` başlangıcı `1444-08-01` olsun
  (gün komşudan: Niş/Kruševac/Semendire `1444-08-01` · olaylar `1444-08-01` iade
  maddesi · TDV sehirkoy "Segedin'in ardından"). `d:` `1428→1443` → `1428→1444-08-01`.
  Haçlı zaptı `isg:` olarak kalsın (motor okumaz, Değişmez 2i evreni). ⇒ 1443-44
  enklavı **tamamen kalkar**, 1444-08'den sonra Niş + Kruševac + Pirot birlikte Sırp
  olduğu için de doğmaz.
  ⚠️ Bedel: `1443-01-01` maddesinin `d:/s:` kırılması gider. `isg:` kırılması
  aynı ±30 günde değilse **Değişmez 2t (tavan 13) +1** olur. `isg:` günü ile madde günü
  BİRLİKTE seçilmeli: ikisi de `1443-01-01` ya da ikisi de sefer günü. Tavan + sabit
  aynı commit'te (`§3.4(2)`).
- (b) olduğu gibi bırak: §4'e uygun, enklav 19 ay görünür. Emre'ye "kaynak yıl diyor"
  diye beyan edilir.
- **1412-13 enklavı rötuş adayı DEĞİL:** TDV *"1412'de Sırp Despotu Stefan Lazareviç
  tarafından alındı ve Mûsâ Çelebi'nin saldırısına karşı savunuldu"*. Niş o sırada
  Musa'da (TDV `nis`: 1413'te Mehmed Niş'i Lazareviç'e verdi). Kaynak enklavı
  DESTEKLİYOR. Rötuş onu silerse belgeyi çiğner.
- H-0017'nin "batıdaki Osmanlı kıymığı" bu pencerenin ana gövde–Pirot arası
  Osmanlı şeridi. (a) uygulanırsa o şerit 1443-44'te kıymık olmaktan çıkar, bütün
  bölge Osmanlı olur.
- Yan bulgu (kapsam dışı, düzeltilmedi): 1402-1428 despotluk dönemi verisi iki ayrı
  kimlik kullanıyor: Kruševac `sirbistan`, Pirot/Niş `sirp-despotlugu`.

### 2.2 H-0018 — İbrail'i ana karaya bağlamak
**ÖLÇÜM**
- Yayın geometrisi: `eflak` gövdesinde **İbrail AYRI BİLEŞEN, 2.201 km²**. Bu,
  `1330-01-01 → 1462-06-01` arasındaki **bütün** `s:eflak` dönemlerinde böyle
  (5 dönem kaydı). Ana gövde 72-76 bin km².
- Arada ne var: `1400/1430/1450-06-01`de kutu 27,3-28,2D / 44,7-45,6K içinde
  **`bogdan` 2.769 km², enlem 44,70–45,60**. Boğdan'ın tek noktası Kalas (45,44K).
  ⇒ Kalas peteği Kalas'ın ~80 km güneyine, **Siret ağzının güneyine**, Buzău ile
  İbrail arasına kama gibi giriyor. Görseldeki koyu yeşil, çizgiyle ayrılmış dilim bu.
  Ana gövde–İbrail en kısa ara ~4,3 km.
- Nokta yoğunluğu: İbrail (27,97) ile Buzău (26,82) / Rîmnic (27,06) arasında, yani
  Bărăgan'da **0 Eflak noktası**.
- `veri-kaynak/ne_10m_rivers.geojson`: Danube · Prut · Ialomița VAR, **Siret YOK** ⇒
  motor Boğdan–Eflak sınırını nehre yaslayamıyor.
- Kaynak (önbellek): TDV `eflak` · `bogdan` · `ibrail` · `romanya` · `erdel` tarandı.
  Eflak–Boğdan sınırını (Milkov/Siret) koyan cümle **bulunamadı**. TDV `ibrail` yalnız
  şunu diyor: *"Eflak tuzu Tuna yoluyla İbrâil'den daha aşağıya indirilemez, Boğdan tuzu
  ise Kalas'tan … daha yukarıya götürülüp satılamazdı"* (İbrail Eflak, Kalas Boğdan).

**HÜKÜM: RÖTUŞ DEĞİL. Sınıf §2 noktasızlık.** Kaynak araması (Emre sırası ①)
**yarım**. Önbellek sessiz ama TDV canlı aranmadı: "Milkov", "Siret/Seret",
"Fokşan" önerilir. Fokşani, Eflak–Boğdan sınır kasabasıdır. Akademik kaynak da
§4'e göre meşru. Kaynak sınırı verirse çare VERİ'dir: sınıra/Bărăgan'a kaynaklı
Eflak noktası ya da noktaları. Rötuş ancak kaynak sessiz kalırsa sırası gelir, ve o
zaman bile R4'ün "nokta içermez" şartı bir rötuşla 2.769 km²'lik kamayı
taşımayı zorlar (tavanın 5 katı).
⚠️ **ÇAKIŞMA:** aynı coğrafya `TUNA-AGZI` kalemi (H-0003 İbrail/İshakçı/Kalas
sahipliği). Bu ölçüm o kıtaya devredilmeli, iki kez araştırılmasın.
Ölçülmedi: `1462→1538` (ikisi de tâbi) tâbi katmanında kama görünüyor mu.

### 2.3 Özet tablo
| kalem | sınıf | rötuş? | çare | sahibi |
|---|---|---|---|---|
| H-0013+17 (1443-44) | hassasiyet / veri | **HAYIR** | Pirot `s:`/`d:` günü + `isg:` + madde günü | koordinatör (KOORD diff) |
| H-0013 (1412-13) | kaynaklı gerçek durum | **HAYIR** | beyan | — |
| H-0018 | noktasızlık (§2) + nehir eksiği | **HAYIR (şimdilik)** | kaynak ara → Eflak noktası | TUNA-AGZI kıtası + koordinatör |

---

## 3. İŞ 3 — H-0016 KATMAN-BINME-2: AYIRT ETME

**ÖLÇÜM**
- Görsel: Tırhala sağ üstte. Batıda "…anya bölgesi" (Yanya) ve Bizans. Osmanlı
  kırmızısının içinde sınır boyunca iki koyu lob.
- Gün penceresi: Tırhala Osmanlı **ve** Yanya Bizans ⇒ `1395→1402` ya da `1413→1430`.
  Ölçülen her kesitte (1396 · 1399 · 1414 · 1420 · 1428) binme aynı.
- `Osmanlı gövdesi ∩ bizans gövdesi`, kutu 20,6-22,2D / 38,9-40,2K:
  **1.245–1.343 km²**. Loblar: **833 km² @21,71/39,06** · **300 km² @21,46/39,46** ·
  59 · 47 (+102 yalnız 1396-1414).
- Lobların petek sahibi (`petek_govde`, zamansız taban petek): **%100 Arta** (iki büyük
  lob) ve **%100 Yanya** (iki küçük lob), ikisi de o gün `s:bizans`. Hiçbir petekte
  olmayan pay %0. ⇒ **Fazla olan OSMANLI gövdesi**, 0083-B ile aynı yön.
- `kapat()` sınavı (1420; 19 Osmanlı peteğinin birleşimine motorun birebir kapaması
  `buffer(0,15, mitre).buffer(−0,15)`): kapamanın eklediği alan binmenin
  **1.049 / 1.245 km²'sini (%84)** birebir üretiyor. Kalan %16: epok peteği, KARA ve
  dolgu farkları; ölçülmedi.
- **0083-B yamasının ölçütüyle sınandı:** binmeyi taşıyan iki kapama bileşeni
  (1.245 km² @21,72/38,95 · 214 km² @21,48/39,47) **içinde yabancı yerleşim noktası: 0**.

**HÜKÜM: AYNI MEKANİZMA, AMA `once-cozuldu` DEĞİL.**
Mekanizma 0083-B'ninkiyle aynı: `kapat()` Osmanlı gövdesinde komşunun peteğini
yutuyor. Ama 0083-B yaması yalnız *"eklenen bileşen başka devletin NOKTASINI içeriyorsa
ekleme"* der. Pindus'ta nokta yok (Arta 64 km, Yanya 40+ km uzakta), yama burada
**hiçbir şey yapmaz**. Bu, 0083-B raporunun kendi §4 "bilinen sınır (b)" maddesi:
*"Noktası ek bileşende olmayan ama peteği kısmen orada olan yabancı petek korunmaz"*.
H-0016 o sınırın ilk ölçülmüş vakası.
- Yabancı gövdeler için bu sınıf zaten kapalı: `_komsu_toprak_cikar`
  (GOVDE-CAKISMA-0079, koşu 16'dan beri motorda) **PETEK** çıkarıyor. Ama kendi
  yorumu *"Osmanlı/tâbi/himaye gövdeleri bu yamada yok"* diyor. Boşluk tam orası.
- **Öneri (koordinatör seçer, motor tuzu ⇒ TAM İNŞA):** 0083-B yamasının ölçütünü
  noktadan **petek alanına** genişletmek, ya da daha az kodla `_komsu_toprak_cikar`ı
  Osmanlı doğrudan + tâbi gövde yoluna da uygulamak. Öngörü: bu kutudaki 1.245 km²
  binme **≥%84 düşer**, 0'a inmez (§3'teki %16 kalan). Diff bu görevde istenmediği için
  YAZILMADI. İstenirse 0083-B diff'inin üstüne `-1006.diff` olarak çıkarılabilir.
- H-0020 ⑤ (bant katmanı binmesi) bu ölçümle ÇÖZÜLMEDİ. O ayrı kalemde.

---

## 4. ÖNGÖRÜ DİSİPLİNİ — dürüst kayıt
Öngörüler dosyaya ölçümden önce **YAZILMADI**, yalnız çalışırken kuruldu. Bu,
`GOREV-ORTAK §2` ihlalidir. Kuruldukları sırayla ve sonuçlarıyla:
- H-0013 penceresi önce veriden çıkarıldı (`1443-01-01→1444-08-01`), sonra geometri
  ölçüldü: **tuttu** (Pirot ayrı bileşen tam o pencerede). Geometri ikinci pencereyi
  (1412-13) ayrıca gösterdi, öngörüde yoktu.
- H-0016'da ilk tahminim (en yakın nokta Tırhala ⇒ "Bizans gövdesi Osmanlı peteğini
  yutuyor, 0083-B'nin TERSİ") **ÇÜRÜDÜ**. Petek ölçümü %100 Arta/Yanya çıkardı. En
  yakın nokta petek sahibi değildir (Pindus'ta petek sürtünme/yaslama ile şekilleniyor).
  Bu yanlış ara rapora girmedi.

## 5. BULAMADIĞIM / ÖLÇEMEDİĞİM
- Görsellerin tam günü: tarih damgası yok. Pencereler yerleşim dönemlerinden çıktı.
- Görseller yayından mı koşu 17/18'den mi: bilinmiyor. Ölçüm YAYIN geometrisinde
  (1 Eki üretimi).
- Eflak–Boğdan sınırının kaynağı: önbellekte yok, canlı TDV araması yapılmadı.
- H-0016 binmesinin kalan %16'sı: ölçülmedi.
- İbrail kaması `1462→1538` tâbi katmanında: ölçülmedi.

## 6. YENİDEN ÜRETMEK İÇİN
`py arac/kodla.py coz-c data <out.js> devlet|donem|govde` (C:\atlas, ~1 dk) →
`DEVLET_HARITA[].dnm[].g` / `DONEMLER[].o` / `PETEK_GOVDE` · `PARCA_HALKA` halka
eşlemesi. Betikler scratchpad'deydi (`p84_dh.py`, `p84_dn.py`, `p84_pg.py`,
`p84_kp.py`). İstenirse `denetim/`e alınır.
