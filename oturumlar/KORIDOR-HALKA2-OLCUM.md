<!-- DURUM: BITTI | 2026-08-14 17:40 | halka 2 olcumu 14/14 · sartname taslagi hazir · M-0059 teslimi -->
# KORİDOR HALKA 2 — ölçüm ve şartname taslağı

**KORİDOR ŞEMA · 14 Ağustos 2026 · M-0059 teslimi**

Koordinatörün istediği: *"14 devletin kaçında akademik güzergâh kaynağı VAR,
kaçında YOK — önce iki sayı. Sonra: halka 2 şu beş devletten başlamalı,
sebebi şu."*

---

## ⓪ ÖNCE ÖNGÖRÜM — ölçümden ÖNCE yazılmıştı (M-0063, 17:12)

```
beklediğim   BELGELİ 4 · KISMİ 4 · BULUNAMADI 6
ölçüm        BELGELİ 3 · KISMİ 3 · ARANMADI  8
```
**Tuttu mu:** kabaca. Ama **bir kovayı yanlış adlandırmışım** — 8 devlet için
*"bulunamadı"* diyemem, çünkü **akademik literatürde ARAMADIM.** TDV'de
yokluklarını ölçtüm, o kadar. `bulunamadı` bir **sonuçtur**, `aranmadı`
bir **eksiktir**; ikisini karıştırmak kendi kuralımın ihlali olurdu.

---

## ① İKİ SAYI — istenen ölçüm

```
BELGELİ    3 / 14     hakemli ya da akademik yayın, yapı+güzergâh somut
KISMİ      3 / 14     yapı biliniyor, kaynak kırmızı çizginin ALTINDA
ARANMADI   8 / 14     TDV'de YOK (ölçüldü) · akademik literatürde ARANMADI
```

### 🟢 BELGELİ — 3
| devlet | sistem | kaynak | somut veri |
|---|---|---|---|
| **Rusya** | **yam** | CERGE-EI Working Paper 807, *Post(-Mongol) Roads* (ampirik) · *Postal organisation (yam) in the Golden Horde* (hakemli) | 🔴 **17. yy'da Moskova'dan ışınsal DOKUZ ANA KOL** · `Iamskoi prikaz` (Menzil Divanı) yolları planlıyor |
| **İran** | **çapar** | Cambridge, *Iranian Studies*: **"The Postal System in Safavid, Afsharid, and Zand Iran"** (hakemli, **1500-1800** — tam bizim dönem) · Silverstein, *Postal Systems in the Pre-Modern Islamic World* (Cambridge) | iki ulak sınıfı: `çapar` (atlı, resmî) · `şâtır` (yaya) |
| **Avusturya** | **Taxis / Reichspost** | Schobesberger v.d., *European Postal Networks*, **Brill** (doi 10.1163/9789004277199_003) | 1490 Innsbruck/Viyana→Brüksel · menzil istasyonları · 🔴 **günde 150 km** |

### 🟡 KISMİ — 3
| devlet | durum |
|---|---|
| **Lehistan** | 🔴 **Güzergâh YAPISI elimde ama KAYNAK YETERSİZ.** 1558 Sigismund II Augustus kuruyor · 1562 Krzysztof **Taxis** ile anlaşma · iki kol: **İtalyan kolu** (Kraków–Viyana–Venedik) ve **Litvanya kolu** (Kraków–Varşova–Vilnius) · 1583 Batory Avrupa'nın ilk ağırlık tarifesi. ⚠️ Kaynak `poczta-polska.pl` (şirketin kendi tarihçesi) + Vikipedi ⇒ `§4` kırmızı çizgisinin **altında**. Akademik teyit ŞART. |
| **Venedik** | Brill'in *European Postal Networks* cildi büyük ihtimalle kapsıyor (Venedik erken modern Avrupa posta ağının **düğümüydü**) — **AÇMADIM**. |
| **Macaristan** | Habsburg sistemi içinde; **ayrıca ölçmedim.** ⚠️ TUNA HAVZASI oturumu aynı coğrafyada — çakışma riski. |

### 🔴 ARANMADI — 8
```
Fas · Ceneviz · Umman · Gürcistan · Habeşistan · Sudan · Eritre · Somali
```
Bunlar için **ölçtüğüm tek şey TDV'dir** ve TDV'de güzergâh yok (aşağıda).
Akademik literatürde **aramadım** — tur bütçesi. Bir sonraki turun ilk işi.

---

## ② TDV TARAMASI — 14 devlet · 44 slug · kod VE gövde

**Hüküm: TDV halka 2 için güzergâh VERMİYOR.** Güçlü güzergâh delili taşıyan
tek maddeler **Osmanlı kurumlarının kendisi**:
```
menzil--osmanli  11 güçlü delil      berid  7      ulak  3      posta  2
14 halka-2 devletinin HİÇBİRİNDE  0
```

### 🔴 VE İKİ METODOLOJİK BULGU — kaydediyorum

**① `302` testi bu turda ÇALIŞMADI — ve sebebi araçta.**
`CLAUDE.md §4` *"ölü slug 302 döndürür"* diyor. Bu turda **urllib** kullandım
ve urllib **yönlendirmeyi otomatik izliyor** ⇒ ölü sluglar **200** döndü.
Ayırt eden şey **başlık** oldu:
```
nemce · habsburg · moskova · cenova · kartli · gonder · sevakin
   → HTTP 200  ·  <title> "Arama - TDV İslâm Ansiklopedisi"  ⇒ ÖLÜ
```
**Yedi slug** bu şekilde yakalandı. ⇒ *"302 = ölü"* kuralı **araca bağlı**;
`curl` (yönlendirme izlemez) ile doğru, `urllib` (izler) ile yanlış.
📌 Kural yanlış değil, **eksik**: hangi araçla ölçüldüğü yazılmalı.

**② Kendi ölçüm aletimin bir kusuru:** "yol-kelime" sayacım sayfanın
**atıf/gönderme bloğunu** da sayıyor. Bu yüzden bir **arama sayfası**
(`capar`) 3 puan aldı, ve `yam` 19 puanla güçlü göründü. Gövdeyi okuyunca:
```
yam → kısa GÖNDERME maddesi: "Bazı İslâm devletlerinde resmî haberleşmeyi
      sağlayan görevli" · bk. PEYK.  GÖVDE YOK.
```
⇒ `yam` TDV'de **Moğol/Rus posta sistemi olarak yok.** Sayaç yalan söyledi,
**gövde okuması düzeltti.** (`§11`: *aletin gösterdiği ≠ dosyada yazan*.)

---

## ③ ŞARTNAME TASLAĞI — halka 2 hangi beş devletten başlamalı

### 🔴 ASIL GEREKÇE ÖLÇÜLDÜ: halka 2 SIFIRDAN BAŞLAMAZ, UÇ DÜĞÜMLERDEN DEVAM EDER

`koridor.js`in **derece-1 düğümleri** (kolun bittiği yer) ölçüldü:
```
Medine · Kerkük · Kars · Tebriz · Kırım · Belgrad · İstefe · Beyşehir
```
**Yedi uç düğümün beşi doğrudan bir halka-2 devletine bakıyor:**
```
Belgrad  (rumeli/orta sonu)  →  AVUSTURYA     Belgrad-Viyana ekseni
Kırım    (rumeli/sag sonu)   →  RUSYA         Kırım-Moskova
Tebriz   (anadolu/sol çatal) →  İRAN          çapar ağının içinde
Kerkük   (anadolu/orta sonu) →  İRAN          Bağdat-İsfahan
Kars     (anadolu/sol sonu)  →  GÜRCİSTAN / İRAN
```
⇒ **Ağ genişlemiyor, UZUYOR.** Bu, hem ucuz hem de `§2`nin emilme kuralına
uygun: uç düğümün ötesi bugün **komşu peteğe emiliyor**, koridor oraya
uzayınca sınır kendiliğinden keskinleşir.

### ÖNERİLEN SIRA — beş devlet, gerekçesiyle

```
1. AVUSTURYA / HABSBURG
   · kaynak BELGELİ (Brill) · uç düğüm HAZIR (Belgrad, derece 1)
   · günde 150 km ölçüsü var ⇒ ağırlık birimimizle (SAAT) KIYASLANABİLİR
   ⚠️ TUNA HAVZASI oturumu aynı coğrafyada — ÇAKIŞMA RİSKİ, önce tahtadan sor

2. İRAN
   · kaynak BELGELİ ve tam dönem (Cambridge, 1500-1800)
   · İKİ uç düğüm birden hazır: Tebriz VE Kerkük
   · 🔴 Tebriz zaten koridor.js'te bir düğüm — bağlantı noktası KURULU

3. RUSYA
   · kaynak EN GÜÇLÜ (ampirik çalışma + Altın Orda yam makalesi)
   · uç düğüm hazır (Kırım, derece 1)
   · 🔴 DOKUZ KOL yapısı bizim ALTI KOL yapımızın birebir akrabası —
     aynı şema hiç değiştirilmeden uygulanabilir

4. LEHİSTAN
   · güzergâh yapısı BİLİNİYOR ama kaynak zayıf ⇒ ilk iş AKADEMİK TEYİT
   · 🔴 ve bir yapısal armağan: Lehistan'ın İtalyan kolu VİYANA'dan geçiyor
     ⇒ Habsburg ağıyla AYNI DÜĞÜMDE birleşiyor. İkisi ayrı ağ değil,
     tek ağın iki parçası. Bu, 1 ve 4'ü birbirine bağlar.

5. VENEDİK
   · Avrupa posta ağının düğümü · İstefe (rumeli/sol sonu) Ege'ye bakıyor
   ⚠️ AMA deniz ağı — kara koridoru şemamız (SAAT/menzil) burada
     doğrudan uygulanmayabilir. Şema uyarlaması gerekir, ÖLÇMEDİM.
```

### 🔴 SIRA DIŞI BIRAKTIKLARIM — ve sebebi
```
Fas · Umman · Habeşistan · Sudan · Eritre · Somali
  → uç düğüm bağlantısı YOK ya da zayıf; kaynak ARANMADI
Ceneviz
  → 1475'te Kefe düşüyor, ağ Osmanlı'ya GEÇİYOR ⇒ ayrı bir koridor ağı
    olarak modellemek yerine halka 1'in erken dönemine ait olabilir.
    ÖLÇMEDİM, bir eğilim.
Gürcistan
  → Kars uç düğümü bakıyor ama kaynak aranmadı; 6. sıraya aday
Macaristan
  → Habsburg'un içinde sayılmalı mı ayrı mı — TUNA HAVZASI'nın raporu
    bunu belirleyecek, ONU BEKLEMELİ
```

---

## ④ ÖLÇMEDİKLERİM — açıkça

```
· 8 devlet için akademik literatür ARANMADI (bulunamadı DEĞİL)
· Brill "European Postal Networks" cildi AÇILMADI — Venedik ve Lehistan'ın
  cevabı büyük ihtimalle ORADA
· CERGE-EI WP 807 açılmadı; GIS verisi VAR MI bilmiyorum (varsa Rusya
  halka 1'den bile HIZLI biter)
· Cambridge Iranian Studies makalesi ABSTRACT düzeyinde okundu, gövdesi HAYIR
· "150 km/gün" (Habsburg) ile bizim "120 km/gün" (ulak) farkının sebebi
· Venedik deniz ağının SAAT birimiyle nasıl ifade edileceği
```

---

## ⑤ BEKLEYEN — koordinatörden cevap gerektiren

```
① 26 eksik durak listesi: lat/lon YOK. Koordinatsız liste işe yarar mı?
   (M-0030 · M-0039 · M-0055'te soruldu, üç turdur cevapsız — İŞ BLOKE)
② TDV `sofya` RUMELİ SAĞ KOL diyor, Sak-Çetin ORTA KOL diyor.
   koridor.js Sak-Çetin'i kullanıyor. Karar koordinatörün.
③ Halka 2'de 14 devletin TAMAMI mı ölçülsün, yoksa bitişik olanlar mı?
   (Bu turda tamamını taradım — TDV tarafını. Akademik taraf 6'da kaldı.)
```
