# DEVİR RAPORU — KRONOLOJİ AFRİKA GÖVDE · 4 Eylül 2026

> **Bu dosya taze bir oturumun TABANIDIR.** Buradaki her sayı ölçülmüştür;
> hiçbiri devralınmadı. Aşağıdakileri **yeniden ölçme** — üzerine kur.
>
> Oturum bağlamı dolduğu için kapandı, işi bittiği için değil.
> Yama dosyası: **`denetim/KRONOLOJI-BATIAFRIKA-0904.json`**

---

## 0. TESLİMİN ÖLÇÜSÜ

```
22 künye · 92 madde · hata 0 · 33'ü GERÇEK gün hassasiyetli
guney-afrika 12/18   ·   bati-afrika 10/51
JSON geçerli · tur 92/92 sözlükten · t 92/92 gün biçiminde · kaynak 92/92 DOLU
12 tur değerinin 12'si de dolu — `bolunme` dâhil
```

⚠️ **Koordinatörün elindeki sayı `21 künye · 91 madde`.** Doğru sayı
**22 / 92**'dir — son parti (`gyaaman` +1, commit `76a937d`) mesaj
çaprazlaşmasından sonra indi. Birleştirmede bunu kullan.

| künye | ekleme | künye | ekleme |
|---|---|---|---|
| `transvaal` | 0 → 10 | `sokoto` | +7 |
| `oranj` | 0 → 11 | `tekrur` | 0 → 7 |
| `vasulu` | +7 | `xhosa` | +6 |
| `dahomey` | +6 | `zulu-kralligi` | +5 |
| `mutapa` | 0 → 4 | `basuto` · `pedi` · `svazi` · `hausa-sehir-devletleri` · `asanti` | +3 her biri |
| `rozvi` · `matabele` · `bambara` | +2 her biri | `griqua` · `kenedugu` · `zimbabve-kralligi` · `gyaaman` | +1 her biri |

---

## 1. TDV SLUG HARİTASI — **YENİDEN TARAMA**

### 🔴 Önce bunu oku: iki bölge tamamen farklı

```
guney-afrika   32 slug →  8 CANLI / 24 ölü   (%25)
bati-afrika    38 slug → 26 CANLI / 12 ölü   (%68)
```

**Bir bölgede ölçülen kaynak yoğunluğu komşu bölgeye TAŞINMAZ.** Güneyde
ölçtüğüm TDV yoksunluğunu batıya taşımak üzereydim; beni bir kural değil,
`tekrur` künyesinin **kendi `kaynak` alanı** durdurdu (TDV `el-hac-omer`e
dayanıyordu). Batıda Britannica'ya dayansaydım **`§4`ü çiğnemiş olacaktım.**

### BATI AFRİKA — 🟢 CANLI (26)

```
el-hac-omer · sokoto · osman-b-fudi · fulaniler · tekrur · mali · gine ·
senegal · nijerya · nijer · fildisi-sahili · gana · togo · benin ·
burkina-faso · samori-ture · gine-bissau · sierra-leone · liberya ·
timbuktu · tinbuktu · kano · bornu · cad · dahomey(⚠️ aşağıya bak)
```

### BATI AFRİKA — 🔴 ÖLÜ 302 (12)

```
omer-b-said-el-futi · masina · hamdullahi · segu · mavritanya · katsina ·
zaria · kanem · hausa · yoruba · asante · futa-callon · futa-toro
```

### GÜNEY AFRİKA — karşılaştırma için

```
🟢 CANLI (8)  afrika · zimbabve · mozambik · hollanda · ingiltere ·
              zambiya · malavi · guney-afrika-cumhuriyeti
🔴 ÖLÜ (24)   guney-afrika · lesotho · svaziland · botsvana · namibya ·
              zulu · zulular · basutoland · transvaal · oranj · boer ·
              angola · kap · monomotapa · rodezya · bantu · hotanto ·
              ndebele · sotho · tsvana · herero · afrika-guney ·
              vitvatersrand · ummu-durman
```

### 🔴🔴 İKİ ÖLÇÜM TUZAĞI — ikisi de bu turda gerçekleşti

**① `000` BİR HTTP KODU DEĞİLDİR.** `guney-afrika-cumhuriyeti` ilk turda
`000` döndü. *"Ölü"* **yazmadım** — `000` taşıma arızasıdır. Yeniden
ölçtüm: **200 CANLI**, ve gövdesi bölgenin **tek** kapsayıcı maddesiydi.
Kaydetseydim onu *"yok"* diye damgalayacaktım.

**② `200` "MADDE VAR" DEMEK DEĞİLDİR — beşinci tuzak.** `dahomey` **200**
dönüyor ama gövdesinin tamamı tek satır:

> *«bk. BENİN — Batı Afrika'da İslâm Konferansı Teşkilâtı üyesi olan bir ülke.»*

Bir **adres**, madde değil. `§4`ün dört tuzağının hiçbiri bu değil:

```
① ölü slug              302
② canlı, yanlış madde   200 · gövde DOLU ama başka konu   (ordu · saray · cin)
③ canlı, boş gövde      200 · doğru başlık, içerik yok    (mogadisu)
④ boilerplate           200 · gövde HİÇ gelmez            (mazenderan)
🆕 YÖNLENDİRME KÜTÜĞÜ   200 · gövde GELİYOR, boş DEĞİL, yanlış konu da
                        DEĞİL — bir ADRES
```

⚠️ **Ve en tehlikeli yanı: benim kendi 38 sluglık taramam onu "CANLI"
saydı.** Bir HTTP taraması bundan *"TDV Dahomey'i kapsıyor"* hükmü çıkarır.
🟢 Yönlendirmeyi **izledim** ve doğruyu gösterdi — altı maddenin altısı
`benin` gövdesinden geldi.

---

## 2. HANGİ KÜMEDE HANGİ KAPSAYICI İŞE YARADI

🔴 **Dördünde de kapsayıcı bir YER ya da KİŞİ maddesiydi.** Bu, projenin
*"TDV bir OLAY ansiklopedisi değil, YER-KİŞİ ansiklopedisidir"* kuralının
bu turdaki **dört bağımsız doğrulaması**.

| küme | dar slug | kapsayıcı | ne verdi |
|---|---|---|---|
| Umarî / Masina | `masina` 302 · `hamdullahi` 302 · `segu` 302 | **`el-hac-omer`** (KİŞİ) 200 | kümenin tamamı, **gün hassasiyetiyle** |
| Samori | — | **`samori-ture`** (KİŞİ) 200 | doğrudan tutuyor, **gün veriyor** |
| Sokoto / Fûta | `hausa` 302 · `katsina` 302 · `zaria` 302 | **`sokoto`** + **`osman-b-fudi`** (KİŞİ) 200 | gün + **hicrî** karşılık |
| Aşanti | `asante` 302 · `yoruba` 302 | **`gana`** (YER) 200 | yalnız 1874 · 1898 · 1901 · 1902 — muharebeleri **anmıyor** |
| Dahomey | `dahomey` = **yönlendirme** | **`benin`** (YER) 200 | hükümdar listesi + antlaşmalar |

### 🔴 `benin` SLUG'I İKİ KÜNYE İÇİN İKİ AYRI ŞEY

TDV `benin` = **modern Benin Cumhuriyeti** (Dahomey'in ardılı), Nijerya'daki
**Benin Krallığı değil**.

```
dahomey        → `benin` DOĞRU kapsayıcı
benin-kralligi → `benin` §4② TUZAĞI  (kullanma!)
                 muhtemel kapsayıcısı `nijerya` (200, OKUMADIM)
```

`ordu` → `ordu--sehir`, `saray` → `saray--sehir`, `cin` → `cin--ulke`,
`torun` ailesinin **yeni bir vakası**.

---

## 3. TDV'NİN **GÜN** VERDİĞİ MADDELER — ve hangi gövdeden

📌 **Bu bölgede TDV akademik kaynaktan DAHA HASSAS.** Britannica yıl
veriyor, TDV gün veriyor. Sıralamayı buna göre kur.

| gün | olay | gövde |
|---|---|---|
| **21 Haziran 1804** | Tabkin Kwatto zaferi | `osman-b-fudi` |
| **20 Nisan 1817** (3 Cemâziyelâhir 1232) | Osman b. Fûdî'nin ölümü | `osman-b-fudi` |
| **11 Kasım 1854** | Kaarta'nın İslâm devleti oluşu | `el-hac-omer` |
| **14 Şubat 1864** | El-Hâc Ömer'in ölümü | `el-hac-omer` |
| **13 Şubat 1889** | Samori'nin son antlaşması | `samori-ture` |
| **29 Eylül 1898** | Samori'nin esir düşmesi — *mevcut maddeyi doğruladı* | `samori-ture` |
| **15 Mart 1903** | Sokoto'nun İngiliz işgali | `sokoto` |
| **27 Temmuz 1903** | son sultanın ölümü — *mevcut maddeyi doğruladı* | `sokoto` |
| **14 Haziran 1898** | Paris Konvansiyonu | `gana` — 🔴 **YAZILMADI**, aşağıya bak |

---

## 4. YAZMADIKLARIM — ve **NİÇİN**

🔴 **Hiçbiri için *"TDV'de yok"* demedim.** Her birinin sebebi ayrıdır.

### `liptako` · `damagaram` · `adar` · `zerma` · `gurma` · `borgu`
Şartname bunları Sokoto kümesine bağlamıştı. **TDV `sokoto` gövdesi
hiçbirini adıyla anmıyor** ⇒ *"bu gövdede geçmiyor"*, **"yok" DEĞİL**.
Ayrı bir arama turu gerekir; yapmadım.

### `gonja` · `dagbon`
Britannica fethi/haraca bağlamayı **anıyor** ama **yıl vermiyor** (yalnız
Opoku Ware'in saltanatı, *c.* 1720-50). **Yıl uydurmadım.**

### `buna`
Samori'nin 1897 yıkımı **iki kaynakta da geçmedi**. **Aradım, bulamadım.**

### `benin-kralligi`
Tek kapsayıcı adayı `benin` ve o **modern Benin** — `§4②` tuzağı.
Kullanmadım, künyeye madde **yazmadım**.

### Fomena Antlaşması (1874)
TDV `gana` **anmıyor**; Britannica sonuçlarında da **geçmedi**.
*"Yok"* demiyorum — **bu iki gövdede geçmiyor**.

### 🔴 14 Haziran 1898 Paris Konvansiyonu — **gün taşıyordu ve yazmadım**
TDV `gana`da **günüyle** var. Yazmadım çünkü **Aşanti o antlaşmanın tarafı
değil** — üç Avrupa devleti arasında, ve Aşanti'nin kendi tasarrufunu değil
komşularının paylaşımını düzenliyor.

> *Bir devletin kronolojisine taraf olmadığı bir olayı yazmak, onu
> oturmadığı bir masaya oturtur.*

`§11`in **"ATLAS SEFERİ DEĞİL TASARRUFU BOYAR"** dersinin kronoloji tarafı.
⚠️ **Gün taşıyan bir madde en cazip olandır** — bir sonraki oturum bunu
*"atlanmış"* sanmasın diye buraya yazıyorum.

### Kalan künyeler
```
guney-afrika 6/18   torva · manica · venda · tsvana · herero · nama-orlam
                    (koordinatörün kararıyla beklemeye alındı)
bati-afrika 41/51   sömürge kümesi hiç açılmadı — §6'ya bak
```

---

## 5. ÇÖZÜLMEMİŞ DÖRT KAYNAK ÇELİŞKİSİ

🔴 **Dördü de AÇIK.** Hiçbirinde *"hangisi doğru"* diye hüküm vermedim.
Üçünde TDV esas alındı (`§4`: İslâm dünyası için TDV birincil), ama
**alternatif gizlenmedi** — her biri maddenin içinde yazılı.

| # | çelişki | A | B | durum |
|---|---|---|---|---|
| ① | El-Hâc Ömer'in ölümü | TDV `el-hac-omer` **14 Şubat 1864** | Britannica **12 Şubat 1864** | **iki gün fark** · ölçemedim |
| ② | Cihadın başlangıcı | TDV **Eylül 1852** | Britannica **1854** | **iki yıl fark** · TDV esas |
| ③ | Samori'nin ilk Fransız savaşı | TDV **1881** | Britannica **1883** | çelişmiyor **olabilir** — TDV 1883'ü *Bamako işgali* diye AYRI anıyor · **ölçmedim** |
| ④ | Dahomey'in sonu | TDV **1893** (Abomey'in düşüşü) | künye + mevcut `son` **1894** | ayrı olaylar **olabilir** · ölçemedim · rakip `son` **yazmadım** |

### Ayrıca künyelerle üç çelişki — `data/` donmuş, dokunmadım

```
sokoto   kurulus 1809 ("başkent yapılıp halifelik resmen kuruldu")
         TDV İKİ maddede halifeliği 1812'ye koyuyor; 1809'u Bornu kaybına
         ⇒ tek maddede İKİ olay sıkışmış olabilir · ölçemedim
basuto   son 1868-03-12 "Moshoeshoe'nin ölümüyle"
         SAHO aynı günü Basotho'nun İngiliz himayesi ilânına bağlıyor
         ⇒ aynı gün iki olay · yalnız birini ölçebildim (Britannica 403)
torva    son 1683 "Dombo Khami'yi yıktı"
         Britannica Dombo'yu 1684-95'e koyuyor ⇒ bir yıl fark · ölçemedim
```

---

## 6. SIRADAKİ KÜMENİN HAZIR ADRESİ

**FRANSIZ / İNGİLİZ İŞGALİ, 1880-1903.** En yüksek getirili küme: `bati-afrika`
künyelerinin **çoğunun `t:` yılı zaten o aralıkta**, yani `son` ve
`toprak-kayip` maddeleri tek kümeden çıkar.

```
🟢 HAZIR CANLI SLUGLAR (ölçüldü, yeniden tarama)
   nijerya · nijer · senegal · mali · gine · burkina-faso ·
   fildisi-sahili · togo · gine-bissau · sierra-leone · liberya · cad
```

### 🔴 O kümeye girerken üç uyarı

**① BÖLGE SLUG HARİTASINI TAŞIMA.** Bu turda beni ısırmak üzere olan
şeydi. Yeni bir bölgeye girerken sluglarını **ayrıca ölç**.

**② `f: YYYY-MM-01` BİÇİMİ AY HASSASİYETİ OLABİLİR.** `tekrur` künyesinin
`f:`i **1852-09-01** ve TDV *"Eylül 1852"* diyor — ay, ayın birine
kodlanmış. Ama biçim *"ayın 1'i"* ile *"ay biliniyor, gün bilinmiyor"*u
**ayırt edemiyor**. (Koordinatörün ölçümü: **42 künyenin** `f:`/`t:`si bu
biçimde, ve bir kısmı **gerçekten** ayın 1'i.)
⇒ **Maddede `YYYY-01-01` yaz, ayı METNE koy.** Tarih alanı kaynağın
desteklediği **en kaba güvenli** düzeyi taşır.

**③ GÜN TAŞIYAN BİR MADDE EN CAZİP OLANDIR — ve bazen yazılmamalıdır.**
Paris Konvansiyonu vakası (§4). Önce sor: **bu devlet o olayın TARAFI mı?**

---

## 7. UYGULANMAYI BEKLEYEN İKİ ÖNERİ

`data/devletler.js` donmuş ve benim değil — **uygulamadım**, koordinatör
koşu sonrası kuyruğuna aldı. Burada duruyor ki kaybolmasın:

```
asanti   kaynak: "bulunamadı — TDV'de müstakil maddesi yok"
         → DOĞRU (`asante` 302) ama EKSİK: TDV `gana` Aşanti'yi
           1874 · 1898 · 1901 · 1902 ile KAPSIYOR.  ⇒ `gana`ya bağlansın

dahomey  kaynak: "bulunamadı — TDV'de müstakil maddesi yok"
         → teknik olarak DOĞRU (slug bir yönlendirme kütüğü) ama pratikte
           YANILTIYOR: TDV `benin` kapsıyor.        ⇒ `benin`e bağlansın
```

Ayrıca: `sokoto` künyesinin mevcut `hukumdar` maddesi **1817-01-01**'de
(yıl işaretçisi); benim eklediğim veraset günü **1817-04-20** ve
**kaynaktan** geliyor. Koordinatör ikisini birleştirecek.

---

## 8. BU TURDA GERİ ALDIĞIM İKİ ŞEY

Kayıt olsun diye — bir kuralın işlediği ancak birine **mal olduğunda**
görünür.

**① `mutapa` `kurulus` maddesini SİLDİM.** Koordinatörün *"`YYYY-01-01`
günü bilinmeyen içindir, **yılı** bilinmeyen için değil"* kuralını kendi
dosyama uyguladım: 46 maddenin 23'ünü denetledim, dördü geçmedi.
`mutapa`nın kaynakları **yüzyıl** veriyordu (*"at least the fifteenth
century"*), 1450 künyenin kendi `f:`iydi.
🔴 **Ve bu benim kendi eleştirimin ihlaliydi:** aynı teslimde pencere-sınırı
kuruluşlarını bir **ölçer kusuru** diye bildirmiş, sonra tam o deseni
üretmiştim. Damgayı koymuştum — ama damga meşrulaştırmaz, yalnız görünür
kılar; görünür kıldığı için yakalayabildim.

**② `vasulu` 1887'de yılı TÜRETTİM ve alıntıya EKLEMEDİM.** TDV *"bir yıl
sonra"* diyor, yıl vermiyor. 1887'yi bir önceki cümledeki *"Mart 1886"*ya
ekleyerek türettim.

> *Kaynağın söylemediği bir sayıyı alıntı metnine yazmak uydurmaktan
> kötüdür, çünkü SAHTE BİR DAYANAK üretir.*

---

## 9. ÖLÇÜT / ARAÇ TARAFINDA BULDUĞUM İKİ ŞEY

**① PENCERE MUAFİYETİ BİR HÂLİ İFADE ETMİYORDU** — koordinatör düzeltti.
Kural *"1281'den **ÖNCEYSE**"* diyordu; künyelerin `f:`si **tam 1281**.

```
bütün dizinde  f == 1281-01-01                     137 / 591
bunlardan kurulus maddesi DE tam 1281-01-01 olan     82
benim bölgelerimde   bati-afrika 16/16 · guney-afrika 4/5
```
Metinler kendini ele veriyor: *"Gurma krallığı **teşekkül etti**"* — olay
yok, fail yok, gün yok.
**ÖLÇÜM:** `bati-afrika`nın kuruluş maddelerinin 16'sı pencere sınırında.
**ÇIKARIM (ayrı satır):** aletin *"kuruluş %96"* rakamının üçte biri gerçek
bir kuruluş değil, bir **pencere işareti** ölçüyor.
⚠️ Kusur **veride değil** — `1281-01-01` dürüst bir yer tutucu. Kusur
**ölçerde**: alet onu kapsama sayıyor.
🟢 Düzeltildi: `f <= 1281-01-01` ⇒ kuruluş kapsaması **%84 → %91**.

**② ŞARTNAME İLE ÖLÇÜT TESLİM BİÇİMİNDE ÇELİŞİYORDU** — koordinatör
ölçüt lehine hükmetti. Kararı veriden ölçmüştüm: `data/devletler.js`teki
**1980 maddenin 1980'i** yalnız `t` + `tur` + `b` taşıyor; şartnamedeki
`d` ve `kesinlik` alanlarının hedef şemada karşılığı **yok**.
Ve `kaynak` alanının **evi yoktu** (1980 maddenin **0'ı** taşıyordu) —
şema genişletildi, `VERI-YAPISI.md`ye yazıldı.

---

**Oturum:** KRONOLOJİ AFRİKA GÖVDE · Opus 5
**Yama:** `denetim/KRONOLOJI-BATIAFRIKA-0904.json`
**Commit'ler:** `26f807d` · `5ebebe5` · `562ab4b` · `a93375d` · `a58c19a` · `37e7e63` · `76a937d`
**`data/` ve üç motor dosyasına hiç dokunulmadı.**
