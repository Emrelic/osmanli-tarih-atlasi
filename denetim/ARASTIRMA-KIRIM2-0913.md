# ARAŞTIRMA — KIRIM BOZKIRI İKİ KUSUR (kuzey vahşi bozkır · 1441/1502) + ANAPA 1791

```
OTURUM   ARAS-KIRIM2  ·  koordinatör 1.MURAT  ·  açılış tahta M-3863
ÖNCÜL    denetim/ARASTIRMA-KIRIM-0912.md (KITA 18) · data/yerlesimler_ek_bozkir.js başlığı
🔴 BU BİR ARAŞTIRMA RAPORUDUR. data/ ve arac/'a DOKUNULMADI (koşu 10 donuk).
   Makinece öneri: denetim/YAMA-KIRIM2-0913.json (14 satır, 13 kayıt)
```

## ⓪ ÖZET

```
incelenen kayıt                  19
yama önerisi (satır/kayıt)       14 / 13
  🟡 iki ucu da kaynaklı          6   Voronej · Belgorod · Harkov · Kabartay · Hacıbey · Anapa isg:
  🟠 kaynaklı ama ARA ÇÖZÜM       7   Sloboda · Kuban×3 · Anapa-s · Soçi · Tuapse · Maykop
                                      (künye yok / 1441-1502 sahibi adıyla yok)
değişiklik YOK                    6   Özi (yıl bulunamadı) · Kızıkermen (doğru) ·
                                      Deşt-i Kıpçak · Yediçkul · Camboyluk · Yedisan (1502 zaten doğru)
yeni kırılma günü                 2   1480-01-01 (Hacıbey) · 1475-06-06 (Çerkes kıyısı, madde VAR)
madde önerisi                     3   1480 Hacıbey · 1585 Voronej · 1596 Belgorod
```

**Tek cümle:** kuzey vahşi bozkıra hiçbir kaynak Kırım *tasarrufu* yazmıyor
(IEU: ıssız bozkır, Tatar akın yolu), Çerkes kıyısına 1441'de Kırım yazan
kaynak yok (TDV `anapa` Kırım nüfuzunu **1475 sonrasına** bağlıyor), Kabartay'ın
kendi künyesi ve rengi zaten var, ve Hacıbey 1441'de **Litvanya**'nındı.

---

## ① KUZEY VAHŞİ BOZKIR — `s:kirim` 1441 → Moskova kalesi

### Kaynak ne diyor
**IEU "Slobidska Ukraine"** (encyclopediaofukraine.com, `pages\S\L\SlobidskaUkraine.htm`, okundu):
- Moğol yıkımından sonra toprak ıssız kaldı; 16. yy başında *"an expanse of wild steppe"*, Tatar akınları belli yollardan geçiyor.
- Moskova ileri garnizonları: **Voronej 1585 · Belgorod 1596 · Kursk 1596**; Belgorod Hattı 1630'lar-40'lar.
- Ukraynalı iskânı 1630'lardan; Çuguyev 1638; **Harkov 1654**.

**IEU "Kharkiv"** (`pages\K\H\Kharkiv.htm`, okundu): Harkov **1654/5**'te Kazaklarca (I. Karkach) kuruldu; bölge 13-17. yy vahşi bozkır, önce Kumanlar sonra Tatarların hâkimiyetinde; 17. yy başından **resmen Moskova'ya** ait, sınır garnizonları.
**IEU "Kharkiv oblast"** (okundu): 16. yy'da *"nominally part of Muscovy"*.
**IEU "Belgorod"** (`pages\B\E\Belgorod.htm`, okundu): 1596'dan kale kasabası ve 300 km'lik Belgorod Hattı'nın merkezi; ilk anılışı 1237 (bu, 1441-1596 arası bir yerleşim sürekliliği göstermiyor, ölçülemedi).
**TDV:** `voronej` · `harkov` · `belgorod` → 302 ÖLÜ. `ukrayna` (200) Sloboda'yı anmıyor (ek4 başlığı da bunu kaydetmiş).

### Üç seçeneğin sınavı
```
(a) __BOSLUK__ dönemi      KAYNAKLA UYUMLU. "ıssız bozkır / akın yolu" = kimsenin tasarrufu yok.
                           Nokta KALIR ⇒ petek komşuya itilmez (§3.5.1: kimse kazanmaz).
                           Değişmez 1: denetle.degismez1 `s:` dönemini var sayar ⇒ yeni sahipsiz 0.
(b) kur: ile nokta yok      REDDEDİLDİ. Voronej'in petek komşuları (ölçüldü, 1450 kesiti):
                           Tambov 194 km `kirim` · Borisoglebsk 203 km `nogay` · Kursk 206 km
                           `litvanya-buyuk-dukalik`. ⇒ Kırım hayaleti Tambov'dan geri gelir ya da
                           Litvanya/Nogay bozkıra taşar — hayalet taraf değiştirir.
(c) Litvanya/Moskova       REDDEDİLDİ. Kaynak "nominally" diyor (IEU Kharkiv oblast): VARLIK/İDDİA
                           çapası, TASARRUF değil (D076). Atlas tasarruf boyar.
```
⇒ **Öneri (a).** Kırılma günleri DEĞİŞMİYOR (1441-01-01 · 1585 · 1596 · 1654); yalnız kimlik.

| kayıt | mevcut | önerilen | güven |
|---|---|---|---|
| Voronej `yerlesimler.js:972` | kirim 1441→1585-01-01 | `__BOSLUK__` 1441→1585-01-01 | 🟡 |
| Belgorod `yerlesimler_ek17.js:163-164` | kirim 1441→1596-01-01 | `__BOSLUK__` 1441→1596-01-01 | 🟡 |
| Harkov `yerlesimler.js:971` | kirim 1441→1654-01-01 | `__BOSLUK__` 1441→1654-01-01 | 🟡 |
| Sloboda bozkırı `yerlesimler_ek4.js:195-196` | kirim 1441→1654-01-18 | `__BOSLUK__` 1441→1654-01-18 | 🟠 |

⚠️ **Sloboda'nın bitiş günü 1654-01-18 kaynaklı DEĞİL:** ek4 başlığına göre Poltava'nın
Pereyaslav gününden devralınmış (komşu günü). Oysa çekirdek Pereyaslav maddesi
`olaylar_ek16.js:317` **1654-01-08** diyor ⇒ 10 günlük iç tutarsızlık. §4 komşu
şartı ① (komşunun günü kendi kaynağına dayanıyor) ölçülmedi. Bitiş değiştirilmedi,
**açık soru** olarak bırakıldı.
⚠️ **Harkov 1654-01-01** IEU'nun yıl hassasiyetiyle uyumlu (1654/5); gün yok.
⚠️ 1281-1441 `altinorda` dilimleri bu araştırmada **sınanmadı** (IEU "Kumanlar sonra Tatarlar" diyor, ad vermiyor).

### 🔴 BEKLENMEDİK BULGU — `Tambov` ADASI
`yerlesimler_ek17.js:166` **Tambov** aynı deseni taşıyor: `kirim` 1441 → **1636-04-17**.
Öneri uygulanır da Tambov kalırsa, Voronej'in 194 km kuzeydoğusunda **tek başına
bir Kırım adası** kalır (bozkır şeridi boşken daha kuzeyde Kırım rengi). Tambov
**ARAŞTIRILMADI** (kapsam dışı); aynı sınıftır, aynı pakette ele alınmalı.
Aynı ölçümde `Borisoglebsk` ve `Penza` 1450-1600 kesitlerinde `nogay` — o da sınanmadı.

### Değişmez 2s
Günler aynı kaldığı için yeni kırılma yok. Ama kimlik değişince iki kırılmanın maddesizliği görünür kalıyor:
```
1585-01-01  en yakın madde olaylar_ek2.js:18 "Büyük tağşiş" — ±0 gün ama ALAKASIZ (denetimi tesadüfen geçiyor)
1596-01-01  çekirdekte ±30 günde madde bulunamadı (en yakın 1596-06-20)
```
⇒ Yamaya iki madde önerisi eklendi (yıl hassasiyeti, IEU).

---

## ② 1441 mi 1502 mi — kayıt kayıt

### Kaynakların ortak zemini
- **TDV `altin-orda-hanligi`** (200, gövde okundu): Altın Orda **1241-1502**; son han Şeyh Ahmed (1481-1502). 1440'lar-1502 arası toprak dökümü **vermiyor**.
- **TDV `kirim`** (200, gövde okundu): Hacı Giray'ın en eski parası **845 (1441-42)**; Mengli Giray **1502**'de Saray'ı yakıp Altın Orda'ya son darbeyi vurdu; Nogayların tâbiiyeti *"gevşek"*.
- **TDV `giray`** (200): Hacı Giray 1428-1466; serasker sultanlara Kuban, Bucak, Yedisan idaresi (dönem belirtilmiyor, 16-18. yy bağlamı).
- **TDV `nogaylar`** (200): Nogayların asıl sahası İdil'in doğusu; Yedisan/Camboyluk/Bucak/Kuban Nogayları Kırım hâkimiyetinde (16. yy+); **Kazi Mirza 1557-58**'de İdil'i geçip Kabarda ile Azak arasına yerleşti (Küçük Nogay).
- **Iranica `crimean-tatar` · `qepcaq`** → HTTP **403**, **okunmadı**.
- Bulunan "Büyük Orda Kuban'a sürüldü" anlatıları yalnız Vikipedi'de → dayanak yapılmadı.

### Kuban bozkırı — `Kuban (Yekaterinodar)` · `Kuban Nogay bozkırı` · `Stavropol–Kuma bozkırı`
- **Mevcut:** altinorda →1441-01-01, kirim 1441 → 1783-04-19.
- **Kaynak:** 1441'de Kırım'ın Kuban'a hâkim olduğunu söyleyen **hiçbir kaynak bulunamadı**. IEU "Kuban" (okundu): Altın Orda dağıldıktan sonra Nogaylar Kuban bozkırına yerleşip Kırım'la müttefik oldu — **tarih yok**. TDV `nogaylar`: Küçük Nogay'ın Kabarda-Azak arasına gelişi **1557-58**.
- **Öneri:** `altinorda` → **1502-03-01**, `kirim` 1502-03-01 → 1783-04-19. Kardeş kayıtlarla (Deşt-i Kıpçak · Yediçkul · Camboyluk · Yedisan) aynı zincir; **dayanak kardeşler değil**, TDV'nin "Altın Orda 1241-1502 · 1502'de Mengli Giray" hükmü.
- **Güven 🟠.** 1441-1502 arası Kuban'da Büyük Orda'nın *adıyla* tasarrufu bulunamadı; öneri "hanlığın var olmadığı yere yazılmış Kırım"ı kaldırıyor, yerine kaynaklı bir sahip koymuyor, yalnız TDV'nin genel kronolojisini uyguluyor.
- `Stavropol–Kuma` için ek not: TDV'ye göre Kırım-bağlı Nogay 1557-58'de geliyor ⇒ **1502-1557 arası sahibi BULUNAMADI.** Alternatif (1502-1557 `__BOSLUK__`) yamaya konmadı, açık soru.

### Çerkes kıyısı — `Anapa` · `Soçi (Sâşe)` · `Tuapse` · `Maykop (Çerkezya)`
- **Mevcut:** altinorda →1441, kirim 1441 → 1781 (Anapa) / 1783-04-19 (öteki üçü).
- **Kaynak:**
  - **TDV `anapa`** (200, önceki araştırmada okundu, bugün slug 200 doğrulandı): Kırım Hanlığı Osmanlı himayesine **girdikten sonra** Kuzey Kafkasya kesimi Kırım hanlarının *"nüfuz alanı"* oldu ⇒ Kırım nüfuzu **1475 sonrası**.
  - **TDV `cerkezler`** (200, gövde okundu; `cerkesler` 302): Prens Yinal (1427-1456) Çerkeslerin çoğunu birleştirdi; Gedik Ahmed 1475 ve Kasım Paşa 1479 seferleri sonrası kıyı Çerkesleri Osmanlı hâkimiyetini tanıdı.
- **Öneri:** 1441-01-01 → **1475-06-06 `__BOSLUK__`**, 1475-06-06 → mevcut bitiş `kirim`.
  `__BOSLUK__` gerekçesi `Kabartay (Nalçik)` emsali (`yerlesimler.js:575` `neden:`): Çerkes/Adige için **künye YOK**, `kabartay` künyesini batı Çerkes kıyısına taşımak kimliği coğrafyasının dışına çıkarmak olur. **Doğru çözüm bir `cerkes` künyesi** — ara çözüm diye damgalandı.
- **Gün 1475-06-06:** TDV `anapa` nüfuzu olayın kendisine bağlıyor (Kırım'ın Osmanlı himayesine girişi); o olayın çekirdek maddesi `olaylar.js:47` "6 Haziran 1475". Komşu günü değil, **olayın günü**. Değişmez 2: ±0 madde var, **alakalı**.
- **Güven 🟠.** İkinci okuma da mümkün: TDV `cerkezler` kıyı Çerkeslerinin **Osmanlı'yı** tanıdığını söylüyor, Kırım'ı değil. Bu tanımanın `v:` ile ifadesi bir tasarruf iddiası olurdu (D089); yamaya konmadı.
- `Maykop` iç kesim ⇒ "kıyı Çerkeslerinin tanıması" cümlesi onu **kapsamıyor**; güven daha düşük.

### Kabartay (Nalçik) — `yerlesimler.js:575`
- **Mevcut:** altinorda →1441, **kirim 1441 → 1739-09-18**, `__BOSLUK__` 1739-09-18 → 1774-07-21.
- **Kaynak:**
  - **TDV `cerkezler`**: Yinal (1427-1456) birleştirdi; Kabartay beylikleri **18. yy'a kadar** komşu halklara hükmetti; Kırım akınları yüzünden Temryuk **1557-59**'da Moskova'ya yöneldi; Kırım'a yükümlülükler (tahta çıkışta köle, yıllık hediye, sefere asker) **18. yy** bağlamında.
  - **TDV `kabartaylar`** (200, gövde okundu): Altın Orda çöküşünden sonra bölgede birinci derecede nüfuz; 1739 Belgrad **tarafsız ülke**; 1774 Küçük Kaynarca Rusya'ya bağladı.
- ⇒ **Haraç/akın tasarruf değildir** (D030 · D076). Kaynak Kabartay'ı kendi beylikleriyle anlatıyor.
- **Künye ve renk ZATEN VAR:** `devletler.js:7229` `kabartay` (f 1281 · t 1774-07-21) · `renkler.py:3059` `#d058e8`. `devletler.js:7224-7226`'daki sıra (① künye ✓ → ② renk ✓ → ③ `__BOSLUK__`→`kabartay`) **üçüncü adıma hazır.**
- **Öneri:** `kirim` + `__BOSLUK__` iki dönemi → tek **`kabartay` 1441-01-01 → 1774-07-21**.
- **Güven 🟡.** Yinal'in birleştirmesi (1427-56) başlangıcın 1441'den ÖNCE olabileceğini gösteriyor; 1281-1441 `altinorda` dilimi **sınanmadı**.
- Değişmez 2s: 1739-09-18 kırılması kaybolur (kırılma sayısı −1); 1441-01-01 kalır.

### Hacıbey (Odessa) — `yerlesimler.js:955`
- **Mevcut:** altinorda →1441, **kirim 1441 → 1538-09-01**, `d:` 1538-09-01 → 1792-01-09.
- **Kaynak:**
  - **IEU "Odesa"** (`pages\O\D\Odesa.htm`, okundu): 14. yy'da Kaçibey limanı; **15. yy başında Litvanya büyük dükü Vytautas tahkim etti**; **1480**'de kale Türklerce alınıp Hacıbey adını aldı.
  - **IEU "Ochakiv"** (okundu): 15. yy sonunda Karadeniz'in kuzey kıyısı Kırım Hanlığı'nın denetimine geçti.
  - **TDV:** `hacibey` · `hocabey` · `odesa` · `odessa` → 302 ÖLÜ; `ozu`, `akkirman`, `bucak` (üçü 200, gövde okundu) Hacıbey'i **hiç anmıyor**. TDV `bucak`: Bucak idarî bölgesi **1538**'de teşkilatlandı.
- **Öneri:** `litvanya-buyuk-dukalik` 1441-01-01 → **1480-01-01**, `kirim` 1480-01-01 → 1538-09-01 (`d:` değişmez).
- 🔴 **KAYNAK ÇELİŞKİSİ (hafif):** IEU 1480 için "Türkler" diyor; TDV ise Osmanlı idarî teşkilatını 1538'e koyuyor ve atlasın `d:`si de 1538'de başlıyor. 1480-1538 arasında **Osmanlı mı, Kırım mı** sorusu bu iki kaynakla kesin çözülmüyor; öneri IEU "Ochakiv"in "kıyı Kırım'da" cümlesine dayanıyor (1475'ten beri Osmanlı'ya tâbi han). Koordinatöre bildirildi.
- **Güven 🟡** (Litvanya dilimi) / 🟠 (1480 yılı tek kaynak).
- Künye `litvanya-buyuk-dukalik` 1253-1569 pencereyi kapsıyor; renk `renkler.py:698` VAR.
- **Yeni kırılma 1480-01-01**: çekirdekte ±30 günde madde **yok** (en yakın 1481-05) ⇒ madde önerisi yamada.
- Sınanmayan: 1281-1441 `altinorda` (IEU'ya göre Litvanya 15. yy başından; yıl yok ⇒ yazılamaz).

### Özi — `yerlesimler.js:450` — 🔴 DEĞİŞİKLİK ÖNERİLMEDİ (yıl bulunamadı)
- **Mevcut:** altinorda →1441, kirim 1441 → 1538-09-01.
- **Kaynak:** TDV `ozu` (200, gövde okundu): Litvanyalıların 1400'lerde "Daşiv" istihkâmı kurduğu *öne sürülür* (kaynak kendi temkinini koyuyor); Kırım Hanlığı **1490'larda** küçük bir Tatar kalesi (Cankirman) yaptı; 1538 sonrası Osmanlı. IEU "Ochakiv": Vytautas "Dashiv" kalesini kurdu; 15. yy sonunda kıyı Kırım'a geçti.
- ⇒ Litvanya→Kırım geçişinin **yılı yok**, yalnız onyıl. `§4`: *YYYY-01-01 günü bilinmeyen içindir, yılı bilinmeyen için DEĞİL.* `1490-01-01` yazmak yıl uydurmak olur (ve `olaylar_ek20.js:95` Gürcistan maddesi o günü ALAKASIZCA kapatırdı).
- ⇒ **Veri değişmedi; kayıt borç:** 1441-1490'lar arası `kirim` muhtemelen erken, düzeltilecek yıl bulunamadı.

### Kızıkermen — `yerlesimler_ok106.js:167` — değişiklik yok
IEU "Beryslav" (okundu): 15. yy başında Vytautas'ın kalesi/gümrüğü, **15. yy ortasında Tatarlar geri alıp Kazi-Kermen'i kurdu**, 1526 Osmanlı. Mevcut `kur:"1441-01-01"` + `kesinlik:"yuzyil"` bu kaynağı doğru taşıyor.

### Deşt-i Kıpçak · Yediçkul · Camboyluk · Yedisan — değişiklik yok
1502'de `altinorda`→`kirim` TDV ile uyumlu. **Açık soru (gün):**
```
künye altinorda t:     1502-01-01   (devletler.js:194)
künye kirim kronoloji  1502-01-01   (devletler.js:212)
veri + çekirdek madde  1502-03-01   (olaylar_ek5.js:142 — gun:"1502")
```
Madde yalnız **yıl** diyor ama `t:` ay-gün taşıyor ⇒ `§4`'ün "hassasiyet şişmiş" sınıfı. Bu yamada 1502-03-01 **kullanıldı** (madde o günde, yeni kırılma üretmesin diye) ve açıkça işaretlendi; hizalama ayrı kalem.

---

## ③ ANAPA 1791-07-26 → Yaş

- **TDV `anapa`** (200): üçüncü kuşatma sonunda **26 Temmuz 1791**'de işgal; Yaş Antlaşması'yla (1792) Kafkasya'da eski sınırlar kabul edildiği için Osmanlı'ya geri verildi.
- **Öneri:** `isg:[{f:"1791-07-26",t:"1792-01-09",d:"rusya"}]` — `d:` 1781→1829-09-14'e dokunulmaz (Kefe emsali `yerlesimler.js:530`).
- 🔴 **MÜKERRER UYARISI:** Aynı öneri `denetim/YAMA-ANAPA-0913.json` içinde (KITA 18) **zaten var** (1828-06-24 → 1829-09-14 ikinci `isg:` ile birlikte), ve madde `data/olaylar_p0043kirim.js` (1791-07-26) **zaten yazılmış**. Bu satır **iki kez uygulanmamalı**; tek yama olarak YAMA-ANAPA'nınki esas alınsın.
- **Bitiş günü:** TDV yalnız "1792" diyor. 1792-01-09 Yaş'ın atlastaki günü; çekirdek madde `olaylar_ek5.js:302` **10 Ocak** diyor (1 gün fark, KITA 18 de kaydetmiş). Gün için bağımsız kaynak **okunmadı**.
- Değişmez 2i: 1791-07-26 maddesi var (±0); 1792-01-09 → `olaylar_ek5.js:302` ±1.

---

## ④ ETKİ ÖZETİ

```
Değişmez 1     yeni sahipsiz 0 — `__BOSLUK__` bir `s:` dönemi olarak sayılıyor (denetle.py:1022-1024)
Kasıtlı boşluk durum_tablosu "1 kimlik / 2 pencere" → 1 kimlik / 9 pencere
               (+4 kuzey bozkır +4 Çerkes kıyısı; −1 Kabartay)
§3.5.1         kirim'den çıkan toprağı KİMSE almıyor (nokta duruyor, boyanmıyor).
               İstisna: Hacıbey 1441-1480 LİTVANYA kazanıyor (kaynaklı).
               Risk: Tambov kirim adası (yukarıda).
Değişmez 2s    yeni kırılma: 1480-01-01 (maddesiz → öneri) · 1475-06-06 ×4 (madde var)
               kaybolan: 1739-09-18 (Kabartay) · 1441-01-01 (Kuban×3 — 1502-03-01'e katılıyor)
Künye 4c       altinorda t:1502-01-01, veri 1502-03-01 → 59 gün kuyruk (Kuban×3 için YENİ;
               Deşt-i Kıpçak ailesinde zaten var)
Madde metni    olaylar_ek16.js:88 (1441 Kırım'ın kuruluşu) `yer:` listesinde
               "Kabartay (Nalçik), Kuban (Yekaterinodar)" var — yama inerse bu iki ad
               yanlış olur. Kronoloji sahibine metin düzeltmesi (veri alanı değil).
Motor          petek/renk etkisi ÖLÇÜLMEDİ (koşu gerekir).
```

## ⑤ BULUNAMADI / OKUNMADI / ÖLÇÜLEMEDİ

```
BULUNAMADI   Kuban bozkırında 1441-1502 arası sahibin ADI (Büyük Orda tasarrufu kaynakta yok)
BULUNAMADI   Stavropol–Kuma 1502-1557 sahibi
BULUNAMADI   Özi'nin Litvanya→Kırım geçiş YILI (yalnız "1490'lar")
BULUNAMADI   Moskova'nın bozkıra "resmî" sahipliğinin yılı (IEU: "17. yy başı")
BULUNAMADI   Yaş Antlaşması gününün (9/10 Ocak) bağımsız kaynağı
OKUNMADI     Encyclopaedia Iranica crimean-tatar · qepcaq (403)
OKUNMADI     IEU Wild Field / Dyke Pole / Khadzhybei / Lithuania Grand Duchy (404)
ÖLÇÜLEMEDİ   IEU Belgorod "1237 anılışı"nın bu kaleyle sürekliliği
SINANMADI    bütün kayıtların 1281-1441 `altinorda` dilimi · Tambov · Borisoglebsk · Penza
ÖLÇÜLMEDİ    yamanın petek/renk etkisi · `kesinlik` alanının sözlük değerleri
TDV ÖLÜ      voronej harkov belgorod kuban hacibey hocabey odesa odessa ozi yedisan litvanya
             kizikermen kazikerman cankirman haci-giray mengli-giray cerkesler kabartay taman
             temruk kopil buyuk-orda (hepsi 302, bugün ölçüldü)
TDV CANLI    altin-orda-hanligi kirim giray nogaylar anapa ozu kabartaylar ukrayna akkirman
             bucak cerkezler saray (200)
```

## ⑥ KAYNAKÇA

```
TDV  altin-orda-hanligi · kirim · giray · nogaylar · ozu · kabartaylar · cerkezler · anapa ·
     akkirman · bucak · ukrayna · kafkasya   (islamansiklopedisi.org.tr/<slug>, gövdeler okundu)
IEU  (Internet Encyclopedia of Ukraine, CIUS, encyclopediaofukraine.com)
     Slobidska Ukraine · Kharkiv · Kharkiv oblast · Belgorod · Odesa · Ochakiv · Beryslav ·
     Kuban · Crimean Khanate · Golden Horde · Voronezh region (son üçü sorulan konuda boş)
Vikipedi ve popüler siteler yalnız yön bulmak için görüldü, DAYANAK YAPILMADI.
```
