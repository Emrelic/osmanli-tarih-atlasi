# ARAŞTIRMA A6b — Lehistan · Litvanya · Rus · Karadeniz (6 madde)

> PAKET-A6B · 13 Eylül 2026 · 1.MURAT sevki · **salt okuma**: proje verisine ve koda dokunulmadı, commit yok.
> Yazılan dosyalar: bu rapor · `denetim/YAMA-A6B-0913.json` · `denetim/ARAC-A6B-GIRDI-0913.py` · `denetim/ARAC-A6B-OLCUM-0913.js` · `denetim/ARAC-A6B-LEHLIT-0913.js` · `denetim/ARAC-A6B-BOGDAN-0913.js`
> Veri evreni: `arac/girdi.py` `GIRDI_DOSYALARI` = **79 dosya · 3818 kayıt** (ölçüldü) + `data/devletler.js` (salt okuma).
> 🔴 `§4` "atlas referans değildir": aşağıdaki hiçbir hüküm atlasın kendi dönem kaydına dayanmıyor. Atlas yalnız **ölçülen şey**; dayanak her satırda adıyla yazılı.

## Özet

| madde | soru | hüküm | çare |
|---|---|---|---|
| `0042/H-0007` MASTER | Lehistan ile Litvanya iki ayrı devlet mi | **1385-1569 iki ayrı devlet** (şahsî birlik) · **1569-1795 tek birleşik devlet** (Lublin), içinde Litvanya'nın ayrı ordu/hazine/hukuku var. Atlasın iki kimlik modeli **doğru**; ama 1308 görüntüsündeki "LEHİSTAN-LİTVANYA" etiketi **yanlış**: 1569'dan önce öyle bir devlet yok | **veri yanlış** (Varşova + 8 kayıt `lehistan` 1569 öncesi) · **künye/boya** (`polonya-erken` renksiz) |
| `0042/H-0006` | Çehrin Litvanya'ya mı aitti | 1308'de **hayır**: Kiev bölgesi 1362'ye kadar Altın Orda'daydı; atlas Çehrin'i 1281'den Litvanya boyuyor ve bu, Dinyeper üstünde **kopuk bir Litvanya parçası** üretiyor (görüntüdeki mavi leke) | **veri yanlış** (Çehrin `s[0]`) |
| `0040/H-0009` | Çehrin Lehistan'a mı ait | 1569 sonrası **evet, Taç (Polonya) tarafında** (Kiev voyvodalığı Lublin'de Taç'a geçti). **Ama 1648-1678 arası değil**: 1648'den hatmanlık başkenti, 1668'den Osmanlı himayesindeki Doroşenko'nun merkezi, ~1676'dan Rus garnizonu. Osmanlı zaptı **21 Ağustos 1678** (veri ve madde 19 Temmuz diyor) | **veri yanlış** (gün) · **künye eksik** (Kazak Hatmanlığı kimliği yok) |
| `0035/H-0035` | Hotin 1769-74 kara bağlantısız Rus enklavı mı | Hotin **gerçekten** 1769-1774 Rus elindeydi. Ama **tek başına değildi**: 7 Ekim 1769'da Yaş, sonbaharda Boğdan'ın çoğu Rus işgaline girdi. Atlas Boğdan'ı bu pencerede **tâbi** boyuyor, Hotin'i de **egemen Rus toprağı** (`s:`). İkisi de işgal olarak çizilmeli | **veri yanlış** (`s:`→`isg:` + Boğdan'a `isg:`) |
| `0035/H-0077` | Ruslar Özi'ye nereden geldi | **Çehrin'den değil.** 1737: Rus sol yakasından çıkıp Dinyeper'i geçtiler, Kırım/Zaporojye bozkırını aştılar, Haziran ortasında Bug'u geçtiler, 29 Haziran (Jülyen) Özi önüne geldiler. 1788: Bug'u Mayıs 1788'de geçtiler. Yolun geçtiği bozkırın Rus toprağı görünmemesi **doğru**; eksik olan ok | **veri doğru** · SEFERLER önerisi (A4) |
| `0035/H-0080` | Ruslar Hotin'e nereden geldi | **Lehistan topraklarından (Podolya).** Golitsın ordusu Kamaniçe'nin 40 km kuzeydoğusunda (Minkovtsı) toplandı, Dinyester'i Kalus'ta geçti. Boğdan'dan ya da Kırım bozkırından gelmediler | SEFERLER önerisi (A4) |

---

## 0 · Ölçüm tabanı

```
node denetim/ARAC-A6B-OLCUM-0913.js    → Hotin · Özi · Çehrin ve komşuları, seçilen günlerde
node denetim/ARAC-A6B-LEHLIT-0913.js   → lehistan · polonya-erken · litvanya-buyuk-dukalik kullanımı
node denetim/ARAC-A6B-BOGDAN-0913.js   → 1769-74 penceresinde Boğdan ve Dinyester-Tuna kaleleri
dosya 79 · kayıt 3818   (§1.5 tablosu 3808 diyor; bugünkü 58e9a41 inişi +10/11 — ölçüm canlı dosyadan)
```

Künye pencereleri (`data/devletler.js`, salt okuma):
```
litvanya-buyuk-dukalik  1253-07-06 → 1569-07-01   renk ✓ #060cff
polonya-erken           1320-01-20 → 1569-07-01   harita: YOK · renkler.py'de YOK   ← 🔴
lehistan                1569-07-01 → 1795-10-24   harita:"lehistan" · ad "Lehistan-Litvanya Birliği" · renk #fc87c9
rusya                   1547-01-16 → 1917-03-15   renk #4f7d4f
bogdan                  1359 → 1859 · tabi osmanli 1456-06-01 → 1859-01-24
```

---

## 1 · `0042/H-0007` MASTER — Lehistan ve Litvanya iki ayrı devlet mi

### ① Kaynak ne diyor
- **Krevo (14 Ağustos 1385):** hanedan antlaşması. Litvanya Büyük Dükü Jogaila, Polonya Kraliçesi Jadwiga ile evlenip (Şubat 1386) Polonya kralı oldu. Bu bir **şahsî birliktir**, iki devlet ayrı kaldı. *(Britannica, «Union of Lublin»; Encyclopedia.com «Lithuania, Grand Duchy of, to 1569»)*
- TDV `ukrayna` aynı süreci **"birleşme sürecinin ürünü olan Krevo Birliği (1385)"** diye anlatıyor ve Lublin'i şöyle niteliyor: *"Litvanya Dukalığı'nı Lehistan içinde eritip gerçek bir birliktelik oluşturan Lublin İttihadı (1569)"*.
- **Lublin (1 Temmuz 1569):** Encyclopedia of Ukraine «Lublin, Union of» (CIUS, c. 3, 1993): *"a single state, the Polish-Lithuanian Commonwealth, with a common elected monarch … a common diet and senate, a joint foreign policy, and one monetary system"*.
- Britannica aynı birlik için şunu da yazıyor: Büyük Dükalık **kendi ordusunu, hazinesini ve hukukunu korudu.** Yani ortada bir federasyon var, tam ilhak değil.
- TDV `polonya` 1370-1444'ü *"Polonya, Macaristan ve Litvanya ile birlik dönemi"* diye anlatıyor. ⚠️ **Bu birlik kesintisiz değildi.** Kaynaklar 1440-1447 ve 1492-1501'de iki tahtın ayrı hükümdarlarda olduğunu belirtir. Bu tespit burada ayrıca doğrulanmadı, `ölçülemedi` diye kaydedildi.

### ② Atlas nasıl göstermeli
```
1253/1320 → 1569-07-01   İKİ AYRI KİMLİK   polonya-erken  ·  litvanya-buyuk-dukalik
                         (1386'dan sonra ortak kral olsa bile iki ayrı gövde, iki ayrı renk)
1569-07-01 → 1795-10-24  TEK KİMLİK         lehistan  ("Lehistan-Litvanya Birliği")
                         İç sınır (Taç ↔ Büyük Dükalık) istenirse bir SINIR ÇİZGİSİ olabilir,
                         iki ayrı gövde OLMAMALI — ortak kral, ortak meclis, ortak dış politika
```
⇒ Künyedeki model **doğru**. Kullanıcının gördüğü iki gövdenin sebebi model değil, **veri ve boya kusuru**:

### ③ Ölçüm — 1308 görüntüsü neden "LEHİSTAN-LİTVANYA" gösteriyor
```
1308-01-01 kesiti (canlı veri):
  polonya-erken  9  Kamaniçe · Krakov · Lvov · Poznan · Bar · Meciboj · Yazlofça · Lublin · Chełm
  lehistan       1  Varşova                           ← künye 1569'da başlıyor
  litvanya      16  Vilnius … Çehrin … Lutsk · Rivne
```
- **Varşova `s: lehistan 1281-01-01 → 1795-10-24`**: kimlik künyenin başlangıcından **288 yıl önce** kullanılıyor.
- `lehistan` künye öncesi toplam **9 kayıtta** kullanılıyor:
  ```
  1466-10-19 → …   Gdansk · Torun · Elbing          (II. Toruń Barışı → Polonya Tacı; 1466-1569 = polonya-erken olmalı)
  1561-11-28 → …   Riga · Cēsis · Tartu · Pärnu · Daugavpils  (Livonya 1561 → Litvanya+Polonya; 8 yıllık dilim)
  1281-01-01 → …   Varşova
  ```
- **`polonya-erken`in rengi yok.** Kimlik `renkler.py`de tanımlı değil, künyede `harita:` alanı da yok. `data/donemler.js` (yayın `a8feb8d`, 12 Eylül 01:32) ve `devletler_harita.js`te kimlik **0 kez** geçiyor. `polonya-erken` ataması `58e9a41` (12 Eylül) ile veriye girdi, yani **yayından sonra**. Yayındaki 1308 haritası bu yüzden hâlâ eski `lehistan` atamasını çiziyor. Koşu 10 çıktısında bu 9 nokta renksiz kalabilir (`§1.5` "HARİTA DELİĞİ" satırı). **Motoru koşturmadım; bu bir çıkarım, ölçüm değil.**

### ④ Hüküm
**Cevap:** 1385-1569 arasında Lehistan ile Litvanya ortak kral altında **iki ayrı devletti**. 1569'da **tek devlette birleştiler**, Litvanya bazı ayrı kurumlarını korudu. "Lehistan-Litvanya" adı 1569'dan önce kullanılmamalı.
**Sınıf:** veri yanlış (9 `lehistan` kaydı) + künye/boya (`polonya-erken` renksiz) → B1 · B (koşu sonrası).
**Yama:** `YAMA-A6B-0913.json` → `P-LEH-1`, `P-LEH-2`, `P-LEH-3`, `K-LEH-1`.

⚠️ **Ölçülen ama bu paketin kapsamında olmayan anakronizmler.** Ayrı sevk gerekiyor; kaynak taraması yapılmadı, yalnız sayıldı:
```
1308'de litvanya boyanan ama o tarihte Litvanya'da olmayan yerler:
  Smolensk (Litvanya'ya 1404) · Lutsk / Volodimir / Rivne (Galiçya-Volinya; Litvanya'ya ~1340) · Çehrin (§2)
1281'den polonya-erken boyanan ama o tarihte Polonya'da olmayan yerler:
  Lvov · Chełm (Galiçya-Volinya; Polonya'ya 1349) · Kamaniçe · Bar · Meciboj (Podolya; 1362-1430 Litvanya/Koriatoviçler)
```
Bu tarihler bilinen genel tarih bilgisidir. **Bu turda kaynakla sınanmadı ⇒ yama değil, sevk adayı.**

---

## 2 · `0042/H-0006` — Çehrin 1308'de Litvanya'ya mı aitti

### Ölçüm
```
Çehrin (Çigirin) [yerlesimler.js] 49.077, 32.663 · kaynak:"polonya"
  s: litvanya-buyuk-dukalik 1281-01-01 → 1569-07-01
     lehistan               1569-07-01 → 1678-07-19
     lehistan               1699-01-26 → 1793-01-23 …
  d: 1678-07-19 → 1699-01-26 (y:"kusatma")

1308 komşuları: Lubnı · Poltava · Kiev · Baturin  = altinorda
                Çehrin                            = litvanya   ← tek başına
```
⇒ Görüntüdeki **Dinyeper üzerindeki mavi "LİTVANYA BÜYÜK DUKALIĞI" lekesi** tam olarak bu. Çehrin'in peteği, Altın Orda gövdesinin içinde **kopuk bir Litvanya parçası**. `§2`'deki emilme tarifinin tersi: burada nokta var, ama **yanlış kimlikle**.

### Kaynak
- Encyclopedia of Ukraine «Chyhyryn»: *"a fortified winter station of the Cossacks in the first half of the 16th century"* · *"In 1592 the town was granted Magdeburg law"*. **Çehrin 14. yüzyılda bir yerleşim değildi.** Nokta burada bölgeyi temsil ediyor.
- Kiev bölgesinin Litvanya'ya geçişi: atlasın kendi Kiev/Poltava kayıtları 1362 kullanıyor (Mavi Sular). **Bu tarih için akademik kaynak bu turda çekilemedi**: EoU «Blue Waters» sayfası "not found" döndü. ⇒ `§4` şartlı komşu kuralının ① şartı (komşunun günü kendi kaynağına dayanıyor) **doğrulanamadı**.

### Hüküm
**Veri yanlış.** Çehrin 1308'de Litvanya'nın değildi. Atlas Çehrin'i komşularıyla (Altın Orda) aynı boyamalı.
**Yama:** `P-CEH-1` **ŞARTLI**. Bitiş günü olarak Kiev'in 1362-01-01'i önerildi. Bu gün, Kiev kaydının kendi kaynağı doğrulanınca iner. Doğrulanamazsa kimlik kısmı yine iner (1281'de Litvanya **değil**), gün `bulunamadı` damgasıyla yazılır.
**Halka:** yok. Bu yer için kaynak kesin bir sahiplik günü vermiyor.

---

## 3 · `0040/H-0009` — Çehrin Lehistan'a mı ait

### Kaynak
```
1569   Lublin: Kiev bölgesi Polonya Tacı'na geçti          EoU «Lublin, Union of»
       (gün: 6 Haziran 1569 yalnız Vikipedi/arama özetinde → §4 tek dayanak DEĞİL → ölçülemedi)
1648   Hmelnitski'nin ikametgâhı, hatmanlık devletinin başkenti   EoU «Chyhyryn»
1663   başkent Baturin'e taşındı                           EoU «Chyhyryn»
1668   "Doroşenko'yu sancak beyliği derecesinde … hatmanlığına getirdiler. Beyliğin merkezi
        Çehrin'di … Böylece devletin kuzey sınırları üzerinde tampon bir beylik kurulmuş oldu (1668)"
                                                           TDV `cehrin-seferi`
1672   "Kamaniçe zaferinden sonra Ukrayna üzerindeki Leh hâkimiyetine son verilince burası
        Osmanlı himayesindeki Doroşenko'nun eline geçti"   TDV `cehrin-seferi`
~1676  "Doroşenko'nun hatmanlık merkezi olan Çehrin'i Ruslar'a teslimi"  TDV `cehrin-seferi` (gün yok)
1677   "Kale 6000 kadar Rus, Kazak ve Alman askeri tarafından başarılı bir şekilde müdafaa edildi"
1678   "Kuşatma 21 Temmuz 1678 günü başladı" · "kale kuşatmanın 33. günü alındı (21 Ağustos 1678).
        Muhafazası çok zor olduğu için kale tamamen yıkıldı."   TDV `cehrin-seferi`
1681   Bahçesaray: "Özü nehri sınır kabul edilmiş"         TDV `cehrin-seferi`
```

### Ölçüm ve çelişki
```
yerleşim   s: lehistan 1569-07-01 → 1678-07-19   · d: 1678-07-19 → 1699-01-26
madde      olaylar_ek5.js:249  t:"1678-07-19"  "Çehrin Kalesi'nin fethi"  gun:"19 Temmuz 1678"
TDV        kuşatma BAŞI 21 Temmuz · ZAPT 21 Ağustos 1678
```
⇒ Veri ve madde **fethi kuşatma başlamadan 2 gün önceye** koyuyor. Fark 33 gün (Değişmez 2 penceresinin dışında).

### Hüküm
**Kısmen evet.** Çehrin 1569-1648 ve 1699-1793 arasında Lehistan'ındı, Taç (Polonya) tarafında. **1648-1678 arasında Lehistan'ın değildi.**
- **Veri yanlış (gün):** `P-CEH-2` (yerleşim) + `P-CEH-3` (madde) → 1678-08-21. İkisi birlikte iner, Değişmez 2 kapalı kalır.
  ⚠️ `olaylar_ek5.js` KITA 14'te (`OLCUM-PAKET-SINIF-0913` §A3 notu). **Madde yaması o dosya serbest kalınca iner.**
- **Künye eksik:** 1648-1676 için atlasta bir Kazak Hatmanlığı kimliği **yok**. `zaporojye` ("Zaporojye Kazak Hetmanlığı", 1552-1775) Seç'i temsil ediyor, Çehrin merkezli hatmanlık devletini değil. `K-CEH-1` önerisi yazıldı: yeni künye + renk (B1) ve ardından Çehrin dönemleri. Künye yazılmadan dönem **yazılamaz** (`§3.5.0` ③ ARDIL: *künyenin var olması yetmez, penceresi de tutmalı*).
- 1676→1678 Rus dönemi: TDV gün vermiyor ⇒ `bulunamadı`, yazılmadı.

**Halka adayları** (TDV `cehrin-seferi`, kesin cümleler):
- `H-CEH-1` Çehrin · osmanli · **tabi** · `tarih:1668` (yıl). Kaynak: "tampon bir beylik … merkezi Çehrin'di". Uç yalnız 1668 veriliyor ⇒ NOKTA.
- `H-CEH-2` Çehrin · osmanli · **dogrudan** · `tarih:1678-08-21` (gün). Kaynak: "kale … alındı (21 Ağustos 1678)".

---

## 4 · `0035/H-0035` — Hotin 1769-74 kara bağlantısız bir Rus enklavı mı

### Ölçüm (`ARAC-A6B-BOGDAN-0913.js`)
```
Hotin      d: OSMANLI 1713-06-24 → 1769-09-19 · s: rusya 1769-09-19 → 1774-07-21 · d: 1774-07-21 → 1812-05-28
           isg: rusya 1806-01-01 → 1812-05-28   ← 🟢 EMSAL: ikinci Rus işgali İŞGAL olarak çizilmiş
                      1769-10-10  1771-06-01  1774-07-01
Hotin         rusya       rusya       rusya
Çernovitz · Suçava · Soroka · Orhei · Yaş · Roman · Birlad · Kahul · Kalas    tabi:bogdan  (hepsi, üç günde de)
Bender        OSMANLI     rusya       rusya     (s:rusya 1770-09-27 → 1774-07-21)
Akkirman · Kili · İsmail · İbrail              OSMANLI  (üç günde de)
Kamaniçe · Bar · Meciboj (kuzey komşu)         lehistan
isg: 1769-1774 penceresinde HİÇBİR noktada YOK
```
⇒ Haritanın gösterdiği: bütün Boğdan tâbi, ortasında tek başına **egemen** bir Rus Hotin'i. Kuzeyinde Lehistan.

### Kaynak
- TDV `hotin`: *"1769'da … Golitsın tarafından zaptedildi … Hotin'deki muhafızlar da kaleyi terketmişler ve böylece kale Ruslar'ın eline geçmişti. 1774'teki Küçük Kaynarca Antlaşması ile Hotin yeniden Osmanlılar'a bırakıldı."* Tek kaynak, iki uç ⇒ kesintisiz Rus tasarrufu (yıl hassasiyeti).
- **Kashirin, V. B.** «Днестровский поход генерала князя А. М. Голицына в 1769 г. …», *Славяноведение* 2024/1, s. 5-30, DOI 10.31857/S0869544X24010012 (Rus Bilimler Akademisi dergisi):
  - *"В ночь с 8 на 9 сентября 1769 г. турки оставили Хотин без боя"* ⇒ Jülyen 8/9 Eylül = **Gregoryen 19/20 Eylül** ⇒ veri `1769-09-19` **doğru**.
  - *"26 сентября (7 октября) 1769 г. сам генерал-поручик Эльмпт с главными силами вверенного ему корпуса торжественно вступил в Яссы"*
  - Özet: *"rapid and successful occupation of most of Moldavia by Russian troops in the autumn of 1769"*
  - Makaledeki iki çekilme (21 Nisan, 1/2 Ağustos) **zapttan öncedir**. Zapttan sonra Hotin'in bırakıldığına dair bir cümle **yok** (ayrıca soruldu).

### Hüküm
**Hotin'in Rus elinde olması doğru. "Kara bağlantısız enklav" görüntüsü yanlış**, iki sebeple:
1. **Hukukî cins yanlış.** 1769-1774 bir **savaş zamanı işgaliydi**, ilhak değil. Kaynarca Hotin'i ve Boğdan'ı iade etti. Atlas aynı kalenin 1806-1812 işgalini zaten `isg:` ile çiziyor; 1769-1774 de öyle çizilmeli.
2. **Komşu yanlış.** 7 Ekim 1769'dan itibaren Yaş ve Boğdan'ın çoğu Rus işgalindeydi, yani Hotin yalnız değildi. Kuzeydeki Lehistan (Podolya) egemen Lehistan olarak kalır, Rus ordusu oradan geçti (§6).

**Yama:**
- `P-HOT-1` Hotin: `s:rusya` → `isg:rusya` (aynı pencere). İki `d:` birleşir (1713-06-24 → 1812-05-28).
- `P-BOG-1` Yaş `isg:rusya` **1769-10-07 → 1774-07-21** (Kashirin gün verdi · bitiş TDV `hotin`/Kaynarca).
- `P-BOG-2` Suçava · Çernovitz · Roman · Soroka · Orhei `isg:rusya` 1769-10-07 → 1774-07-21. **Gün komşudan: Yaş · Kashirin 2024** (`§4` şartlı komşu: ① Yaş'ın günü kendi kaynağında ✓ · ② hedefte gün yok ✓ · ③ aynı sonbahar 1769 işgal süreci, 60-200 km ✓ · ④ kayda yazıldı ✓).
- **Kahul · Kalas · Birlad YAZILMADI.** Güney Boğdan 1770 yazına kadar çekişmeliydi (Larga ve Kartal/Kagul muharebeleri o bölgededir). "Sonbahar 1769'da Boğdan'ın çoğu" cümlesi bu üçünü kapsamaya yetmiyor ⇒ `bulunamadı`.
- **Ek bulgu, aynı sınıf:** Bender `s:rusya 1770-09-27 → 1774-07-21` de işgaldir. Kaynarca Bender'i iade etti, kale Osmanlı'ya döndü. `P-BEN-1` önerildi, **kaynak tarafı zayıf**: TDV `bender` slugu ölü (302), gün yalnız atlas maddesinde (`olaylar_ek5.js:87`, 27 Eylül 1770). `§4` gereği gün atlastan alınamaz ⇒ yalnız **cins değişikliği** (`s:`→`isg:`) öneriliyor, gün aynen kalıyor ve `kaynak bulunamadı` damgası taşıyor.

**Değişmez etkisi (öngörü, ölçülmedi):** Değişmez 2'den iki kırılma düşer (Hotin `d:` birleşir). `2i`ye yeni kırılmalar eklenir: 1769-10-07 başlangıç (en yakın madde Hotin 1769-09-19, 18 gün ✓) ve 1774-07-21 bitiş (`olaylar.js:120` Küçük Kaynarca ✓).

**Halka adayları:**
- `H-HOT-1` Hotin · rusya · isgal · **f:1769 t:1774** · kesinlik yil · TDV `hotin` (tek kaynak, iki uç ⇒ ARALIK).
- `H-HOT-2` Hotin · rusya · isgal · **tarih:1769-09-19** · gün · Kashirin 2024 (NOKTA; TDV kaydıyla uçları birleştirilmedi).
- `H-YAS-1` Yaş · rusya · isgal · **tarih:1769-10-07** · gün · Kashirin 2024.

**Ek bulgu, Hotin'in öteki iki Rus dönemi:** ölçüldü, veride **yok**.
```
TDV `hotin`: "kale 1739'da Mareşal Münnich idaresindeki Rus ordusunun eline geçti … Belgrad Antlaşması'ndan (1739) sonra Hotin Osmanlılar'a geri verildi"
             "1788-1791 savaşı sırasında Avusturya ve Rusya ortak kuvvetleri tarafından kuşatıldı ve 1788 Eylülünde bu kuvvetlerce alındı. Yaş Antlaşması ile (1792) Osmanlılar'a geri verilen"
veri         d: 1713-06-24 → 1769-09-19 kesintisiz · d: 1774-07-21 → 1812-05-28 kesintisiz (yalnız 1806 isg)
```
⇒ İki işgal eksik: 1739 (EoU «Russo-Turkish wars», Zhukovsky: "In 1739 … the Russian army captured Khotyn") ve 1788-1792. **Gün bu turda aranmadı ⇒ yama yok, sevk adayı** (`S-HOT-1739`, `S-HOT-1788`).

---

## 5 · `0035/H-0077` — Ruslar Özi'ye nereden geldi

### Ölçüm
```
Özi  d: 1538-09-01 → 1737-07-13 · s: rusya 1737-07-13 → 1738-08-01 · d: 1738-08-01 → 1788-12-17 · s: rusya 1788-12-17 → …
1737-07-01'de komşular:  Yedisan bozkırı kirim · Yediçkul bozkırı kirim · Zaporojye Seçi zaporojye
                         Çehrin lehistan · Uman lehistan · Kremençuk RUSYA (306 km)
1788-06-01'de:           Kızıkermen · Or Kapı · Yelisavetgrad · Zaporojye Seçi = rusya · Yedisan bozkırı OSMANLI
```

### Kaynak
**1737:**
- ESBE «Брянская флотилия» (Brockhaus-Efron, c. IVa, 1891, s. 813-814): *"армия в числе 65 тысяч, перешедшая Буг в середине июня 1737 г. и пришедшая к Очакову 29-го"* · *"2-го июля крепость сдалась"*. Jülyen 2 Temmuz = **Gregoryen 13 Temmuz** ⇒ veri `1737-07-13` bu kaynakla uyuşuyor.
- EoU «Russo-Turkish wars» (A. Zhukovsky): *"the Russian Dnieper Army (which included Ukrainian Cossack regiments) … Ochakiv in 1737"*.
- 🔴 **Kaynak çelişkisi:** TDV `ozu`: *"Bu savaşta Özü Ruslar'ın eline geçti (11 Temmuz 1737)"*. ESBE (dönüştürülmüş) 13 Temmuz diyor. İki gün fark var ve takvim tuzağı olabilir (`D110`). **Taraf seçmedim.** Madde (`olaylar_ek5.js:278`) `kaynak:"osmanlilar"` taşıyor ve `gun:"Temmuz 1737"` diyor. ⇒ **Koordinatör kararı:** TDV esas mı (11), yoksa Jülyen dönüşümü mü (13)?
- Dinyeper'in **nerede** geçildiği: "Perevoloçna" yalnız Vikipedi ve arama özetlerinde geçiyor. EoU «Perevolochna» sayfası "not found" döndü, Ukrayna Bilimler Akademisi kütüphanesindeki PDF («Штурм и оборона Очакова в 1737 году») HTML döndürdü, indirilemedi. ⇒ **`ölçülemedi`** (bulunamadı değil).

**1788:**
- Başkanlık Kütüphanesi (prlib.ru, «Русскими войсками взят Очаков»): *"В мае 1788 г. 50 тыс. человек из Екатеринославской армии переправились через реку Буг"* · *"6 (17) декабря 1788 г. в 7 ч. утра при 23°мороза начался штурм Очакова"* ⇒ veri `1788-12-17` ✓.
- Toplanma yeri **Olviopol** (bugün Pervomaysk, 48.044 K · 30.850 D) ve "25 Mayıs'ta Bug'u geçti, 200 versta 33 günde" bilgisi: yalnız Rusya Savunma Bakanlığı ansiklopedisinin **arama özetinde** geçiyor. Sayfa `ECONNREFUSED` verdi, okunamadı ⇒ **`ölçülemedi`**.
- TDV `ozu` 1788 hücumunu *"Rus Mareşali Suvarov"*a bağlıyor. Öteki kaynaklar başkomutanın Potemkin olduğunu, Suvorov'un bir kanadı yönettiğini yazıyor. Bu turda hüküm verilmedi, **not** olarak kaydedildi.

### Hüküm
**Çehrin üzerinden gelmediler.** Çehrin 1737'de Lehistan'ındı (Sağ yaka); Rus ordusu Lehistan topraklarını kullanmadı.
- **1737:** Rus Sol yakası (Poltava-Kremençuk hattı, veride `rusya` ✓) → Dinyeper (geçiş yeri ölçülemedi) → Kırım/Zaporojye bozkırı → Bug (Haziran ortası) → Özi (29 Haziran Jülyen = 10 Temmuz Gregoryen).
- **1788:** Yeni Rusya (Yelisavetgrad-Olviopol, 1774 sonrası Rus, veride `rusya` ✓) → Bug (Mayıs 1788) → Bug'un sağ yakası boyunca Özi.
- Kullanıcının "geldikleri yer Rus toprağı görünmüyor" gözlemi: 1737 görüntüsünün kadrajında Rus toprağı yok, çünkü sefer **Rus olmayan bozkırı aştı**. **Harita doğru.** Eksik olan yol oku ⇒ A4 (`savaslar.js` SEFERLER). Öneri: `SEF-OZI-1737` (**TASLAK**: başlangıç koordinatı kaynaksız, ayrıca bekliyor) ve `SEF-OZI-1788`.

**Halka adayları:** `H-OZI-1737` (ESBE, tarih 1737-07-13 dönüştürülmüş · TDV çelişkisi `not`ta · `§4` halka ⑦ gereği iki kaynak iki kayıt: `H-OZI-1737-TDV` 1737-07-11) · `H-OZI-1788` (prlib, 1788-12-17).

---

## 6 · `0035/H-0080` — Ruslar Hotin'e nereden geldi

### Kaynak (Kashirin 2024)
```
"главные силы 1-й армии А. М. Голицына сосредотачивались в лагере у деревень Минковцы и Антоновка
 в 40 км к северо-востоку от Каменца-Подольского"
"Переправившись 15 апреля через Днестр по наведенному мосту у Калуса"
çekilmeler: 21 Nisan geri · 24 Nisan Dinyester'in gerisine · Temmuz başı ikinci geçiş · 1/2 Ağustos yine geri
"В ночь с 8 на 9 сентября 1769 г. турки оставили Хотин без боя"
```
TDV `hotin`: *"Sadrazam Moldovancı Ali Paşa'nın Kamaniçe ile Hotin arasında meydana gelen savaşta yenilmesi üzerine"*. Son muharebenin de Lehistan tarafında, Kamaniçe-Hotin arasında geçtiğini söylüyor.

### Hüküm
**Lehistan topraklarından (Podolya) geldiler.** Boğdan'dan da Kırım bozkırından da gelmediler. Minkovtsı kampı Kamaniçe'nin 40 km kuzeydoğusunda, **Lehistan'da**; ölçümde Kamaniçe · Bar · Meciboj `lehistan` ✓. 1768-72 arası Lehistan Bar Konfederasyonu savaşı içinde Rus askerî nüfuzu altındaydı. TDV `kucuk-kaynarca-antlasmasi`: *"Ruslar'ın Lehistan'ın iç işlerine yaptıkları müdahale ve burasını kendi nüfuzları altına almaları … sebebiyle başlayan savaş"*. **Ama egemenlik Lehistan'daydı**, yani harita doğru.
**SEFERLER önerisi:** `SEF-HOT-1769`.
- Yol: Minkovtsı (48.854 K · 27.108 D, Vikipedi koordinatı; köy adı ve kamp Kashirin'den) → Hotin (48.522 K · 26.498 D).
- Kalus geçiş noktasının koordinatı **bulunamadı**. Yol ona uğratılmadı, doğrudan Hotin'e çekildi.
- f: `1769-04-25` (14 Nisan Jülyen, sefer başı) · t: `1769-09-19` (zapt; madde günüyle aynı).

---

## 7 · Ne bulunamadı / ölçülemedi

```
ölçülemedi  Kiev bölgesinin 1362'de Litvanya'ya geçişi için akademik sayfa (EoU "not found")
ölçülemedi  6 Haziran 1569 Kiev voyvodalığı günü (yalnız Vikipedi/arama özeti)
ölçülemedi  1737 Dinyeper geçiş yeri (EoU "not found" · NAN PDF inmedi)
ölçülemedi  1788 Olviopol toplanması (mil.ru ECONNREFUSED; yalnız arama özeti)
bulunamadı  Kalus (1769 Dinyester köprüsü) koordinatı
bulunamadı  Çehrin'in Ruslara teslim günü (~1676) · Kahul/Kalas/Birlad için 1769 işgal günü
bulunamadı  Bender 1770 zaptı için kaynak (TDV `bender` 302)
okumadım    Hotin 1739 ve 1788 zapt/iade günleri (ek bulgu, sevk adayı)
            1308 Litvanya/Polonya anakronizmleri (Smolensk · Volinya · Galiçya · Podolya), yalnız sayıldı
motoru koşturmadım  `polonya-erken`in koşu 10 çıktısında renksiz kalıp kalmayacağı bir ÇIKARIM
```

## 8 · Karar bekleyenler (1.MURAT)

1. **Özi 1737 günü:** TDV `ozu` 11 Temmuz · ESBE Jülyen 2 Temmuz = 13 Temmuz. Hangisi esas? Veri ve madde 13 diyor.
2. **Kazak Hatmanlığı künyesi** (`K-CEH-1`): açılsın mı? Açılmazsa Çehrin 1648-1678 kusuru yazılamaz.
3. **`polonya-erken` rengi** (`K-LEH-1`): koşu 10 yayınında 9 noktanın delik çıkıp çıkmadığı canlıda ölçülmeli.
4. Güney Boğdan (Kahul · Kalas · Birlad) 1769-1770 işgal günü için ayrı araştırma sevk edilsin mi?

## Kaynaklar
- TDV İslâm Ansiklopedisi: `hotin` · `ozu` · `cehrin-seferi` · `ukrayna` · `polonya` · `kucuk-kaynarca-antlasmasi` · `bogdan` · `mustafa-iii` (hepsi 200, gövde okundu) · ölü: `ozi` · `cehrin` · `litvanya` · `bender` · `yas` (302)
- Kashirin, V. B., *Славяноведение* 2024/1, 5-30, DOI [10.31857/S0869544X24010012](https://journals.rcsi.science/0869-544X/article/view/255403)
- [Encyclopedia of Ukraine, «Chyhyryn»](https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CC%5CH%5CChyhyryn.htm) · [«Lublin, Union of»](https://www.encyclopediaofukraine.com/display.asp?linkpath=pages\L\U\LublinUnionof.htm) · [«Russo-Turkish wars» (A. Zhukovsky)](https://www.encyclopediaofukraine.com/display.asp?linkpath=pages\R\U\Russo6Turkishwars.htm) · [«Chyhyryn campaigns, 1677-8»](https://www.encyclopediaofukraine.com/display.asp?linkpath=pages\C\H\Chyhyryncampaigns1677hD78.htm)
- [Britannica, «Union of Lublin»](https://www.britannica.com/event/Union-of-Lublin) · [Encyclopedia.com, «Lublin, Union of (1569)»](https://www.encyclopedia.com/history/encyclopedias-almanacs-transcripts-and-maps/lublin-union-1569)
- [ЭСБЕ, «Брянская флотилия» (1891)](https://ru.wikisource.org/wiki/ЭСБЕ/Брянская_флотилия)
- [Президентская библиотека, «Русскими войсками взят Очаков»](https://www.prlib.ru/history/619816)
- Vikipedi yalnız "hangi maddeye bakayım" için kullanıldı; hiçbir gün ya da hüküm yalnız ona dayanmıyor.
