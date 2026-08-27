# BULGU — TARALI ALAN (DEVİR) HATA KÖKÜ

**Oturum:** TARALI ALAN KÖK · **Tarih:** 27 Ağustos 2026
**Görev:** ORHANGAZİ sevki · şartname `oturumlar/TARALI-ALAN-KOK.md`
**Yetki:** YALNIZ RAPOR. `data/devirler.js` · `arac/uret_devirler.py` ·
`js/app.js` **salt okundu**, hiçbirine yazılmadı.

---

## 0. Emre'nin sorusu ve cevabı

> *"Barış anlaşmalarının toprak kazanç ve kayıplarını gösteren taralı alan
> gösterimlerinde berbat hatalar var. O hataları ya düzeltmeliyiz ya da bu
> sistemi kaldırmalıyız."*

```
KÖK TEK Mİ?   ✅ EVET — ve tek bir FONKSİYONDA, tek bir satırda.
ÖNERİ         🟢 DÜZELT. Sistemi kaldırmak israf olur; kusur sistemde değil,
              onu besleyen OKUMADA.
```

**Şikâyet haklıydı.** *"Berbat"* abartı değil: ölçüldü, üretilen Osmanlı
gövdesi yerleşim verisiyle **1021 noktada** çelişiyor. Ama kusur taralı
alan fikrinde değil — **bir okuma hatasında.**

---

## 1. KÖK — `arac/uret_devirler.py:160`, `coz()`

`js/app.js:109-120` (`parcaCoz`) **yeni bir veri biçimi** kullanıyor:

```js
var yeniBicim = !!(parcaHalka && parcaHalka.length);
if (!yeniBicim) return havuz[p];                    // ESKİ: doğrudan poligon
var ph = parcaHalka[p];                             // YENİ: önce PARCA_HALKA
return ph.map(function (h) { return havuz[h]; });   // sonra PARCALAR
```

Yani `donemler.js`teki bir dönemin `o` / `v` dizisi artık
**`PARCA_HALKA` indeksleri** taşıyor. `PARCA_HALKA[p]` bir **halka indeksleri
listesi**; her halka `PARCALAR`'a bakar. Dış halka + iç halkalar (delikler)
birlikte bir poligon eder.

`arac/uret_devirler.py` ise hâlâ **eski biçimi** okuyor:

```python
def coz(dizi, havuz):
    return [havuz[x] if isinstance(x, int) else x for x in dizi]
    #       ^^^^^^^^ PARCA_HALKA katmanı ATLANIYOR
```

⇒ `d.o` içindeki indeks **`PARCA_HALKA` için** üretilmiş, ama
**`PARCALAR`'a** uygulanıyor. Sonuç: alakasız halkalardan kurulmuş,
**hiçbir tarihe ait olmayan** bir gövde.

```
PARCALAR      2756 kayıt
PARCA_HALKA   2681 kayıt      ← DOLU, yani app.js'in "yeniBicim" dalı AKTİF
```

### Kanıt — okumayı düzeltince ne oluyor

Yerleşim verisi (`girdi.yukle()`) ile üretilmiş gövdeyi nokta nokta
kıyasladım. Aynı günler, iki okuma yan yana:

| gün | ESKİ EKSİK | ESKİ FAZLA | **DÜZELTİLMİŞ EKSİK** | **DÜZELTİLMİŞ FAZLA** |
|---|---|---|---|---|
| 1600-06-15 | 158 | 2 | **1** | 4 |
| 1683-07-14 | 81 | 19 | **1** | 1 |
| 1699-01-26 | 61 | 74 | **1** | 0 |
| 1718-07-21 | 61 | 87 | **1** | 0 |
| 1774-07-21 | 53 | 83 | **1** | 0 |
| 1829-09-14 | 50 | 97 | **1** | 1 |
| 1878-07-13 | 44 | 151 | **1** | 0 |
| **TOPLAM** | **508** | **513** | **7** | **6** |

> `EKSİK` = veri OSMANLI diyor, gövde içermiyor
> `FAZLA` = veri YABANCI diyor, gövde içeriyor

**%98,6 ve %98,8 azalma.** Tek bir okuma katmanı.

### Ve en keskin iki sınav

```
1774-07-21 — bu dört yer Karlofça'da (1699) KAYBEDİLMİŞTİ:
  Budin      ESKİ: Osmanlı 🔴    DÜZELTİLMİŞ: dışarıda ✓
  Estergon   ESKİ: Osmanlı 🔴    DÜZELTİLMİŞ: dışarıda ✓
  Kanije     ESKİ: Osmanlı 🔴    DÜZELTİLMİŞ: dışarıda ✓
  Kamaniçe   ESKİ: Osmanlı 🔴    DÜZELTİLMİŞ: dışarıda ✓

1683-07-14 — Kamaniçe (Podolya) Osmanlı OLMALI:
             ESKİ: yok 🔴        DÜZELTİLMİŞ: içeriyor ✓   ← H-0010'un ta kendisi
```

---

## 2. Yedi şikâyetin tamamı bu kökten türüyor

Taralı alan **türetilmiş** bir katman; kendine ait hiçbir "gerçeği" yok:

```
devir[alıcı] = (Osmanlı gövdesi @ savaş başı) ∩ (alıcının gövdesi @ antlaşma)
```

Sol yan bozuksa **her antlaşma** bozulur. Ve iki bozuk kümenin kesişimi,
her birinden **daha** bozuktur.

| madde | şikâyet | ölçülen cins | kök |
|---|---|---|---|
| **H-0006** | Bihaç, Venedik kazancı içinde Osmanlı görünüyor | Bihaç verisi 1699'da **Osmanlı** ve bu **tarihen doğru** (1878'e kadar Osmanlı kaldı). Yanlış olan **taralı alanın sınırı** | ① halka |
| **H-0007** | Kanije · Uyvar · Eğri · Fülek · Yanıkkale · Tokaj sayılmıyor mu | 🔴 **Avusturya taramada HİÇ YOK.** Kesişim 738 km² çıkıp 2000 eşiğine takılmış | ① halka |
| **H-0008** | dört ülkeyi teker teker teyit et | Karlofça'da beklenen 4 alıcıdan **yalnız 1'i** (Venedik) çiziliyor | ① halka |
| **H-0009** | Mora "yarım yamalak", Draç terkedildi mi | Yamalılık gövde↔nokta ayrışması. Draç verisi 1699'da Osmanlı — **doğru**, Venedik'e verilmedi | ① halka |
| **H-0010** | **Podolya görünmüyor** | 🔴 **Lehistan taramada HİÇ YOK.** Kesişim BOŞ, çünkü bozuk Osmanlı gövdesi Kamaniçe'yi içermiyordu | ① halka |
| **H-0017** | Pasarofça taraması yanlış | İki alıcı da çiziliyor ama **bozuk** Osmanlı gövdesi üzerinden | ① halka |
| **H-0018** | Eflak'ta toprak boyasız | Bükreş · Yaş · Suçava · Çernovitz eski okumada **EKSİK** kovasındaydı; düzeltilmiş okumada kayboluyor | ① halka |

📌 **H-0006 ve H-0009'un bir kısmı aslında HATA DEĞİL:** Bihaç 1699'da
Osmanlı'ydı, Draç Venedik'e verilmedi. Emre ikisini de *soru* olarak sormuş
(*"olmamalı sanki"*, *"terkedildi mi"*) — ve verinin cevabı **hayır**. Bu
ikisi düzeltme değil, **teyit** ister.

---

## 3. İKİNCİ, BAĞIMSIZ KUSUR — sessiz düşürme

Kök düzeltilse bile bu ayrı durur ve **kendi başına ölçüldü**.

24 (antlaşma, alıcı) çiftinden **14'ü çiziliyor, 10'u düşüyor** — ve
düşüşlerin **6'sı hiçbir şey basmadan**:

```
① alıcı gövdesi yok      1   "gövde yok, atlandı"        BASIYOR
② kesişim boş            6   continue                    🔴 SESSİZ
④ km² < 2000             3   "atlandı (eşik 2000)"       BASIYOR
✓ çizildi               14
```

| antlaşma | beklenen alıcı | çizilen | düşen |
|---|---|---|---|
| **Karlofça** | 4 | **1** | avusturya (738 km²) · lehistan (boş) · rusya (0 km²) |
| **Berlin** | 5 | 2 | sirbistan · romanya · bulgaristan — **üçü de sessiz** |
| **Londra/Bükreş** | 4 | 2 | bulgaristan · karadag — **ikisi de sessiz** |
| **İstanbul 1736** | 1 | **0** | iran — künyede 1736-09-01'de aktif dönem yok |
| **Uşi** | 1 | **0** | italya (1160 km², eşiğe takıldı) |

> ⚠️ Bir alıcının **sessizce** düşmesi, hatayı **görünmez** yapıyor. Çıktıda
> Karlofça var, Venedik var, her şey normal görünüyor — Avusturya'nın ve
> Lehistan'ın hiç olmadığı ancak **beklenen liste ile kıyaslanınca** çıkıyor.
> Bu, projenin *"ölçülemedi ≠ temiz"* kuralının devir tarafı.

📌 `rusya` @Karlofça = 0 km² **doğru bir düşüş**: Rusya Azak'ı Karlofça'da
değil 1700 İstanbul Antlaşması'nda aldı. Yani her düşüş kusur değil — ama
**hangisinin doğru olduğu ancak basılırsa bilinir.**

---

## 4. Teslim — istenen beş kalem

### ① Kaç madde / kaç görsel

```
okunan madde   7 / 7      (H-0006·0007·0008·0009·0010·0017·0018)
açılan görsel  0
```
Şartname §④'ün sırası uygulandı: metin yetti. Yedi şikâyetin tamamı
**koordinat ve veri** üzerinden ölçüldü; hiçbirinde görsele inmek
gerekmedi. Klasörde 18 görsel var, hiçbiri açılmadı.

### ② Her hatanın cinsi

```
yanlış yer      7/7  — ama TÜMÜ tek kökten (halka indeksi)
eksik kayıt     0    — H-0010 "eksik kayıt" SANILIYORDU, değil:
                       Kamaniçe verisi DOĞRU (1683 Osmanlı → 1699 Lehistan),
                       gövde onu göremiyordu
yanlış alıcı    0
yanlış tarih    0
```
🔴 **Şartname H-0010 için *"eksik kayıt, yanlış yer değil"* diye bir ayrı
sınıf öngörüyordu — ÇÜRÜDÜ.** Kayıt eksik değil; okuma bozuk. Podolya
verisi baştan beri doğruymuş.

### ③ Kök tek mi

**EVET.** `arac/uret_devirler.py:160` `coz()` fonksiyonu `PARCA_HALKA`
katmanını atlıyor. Dayanak: düzeltilmiş okumada 1021 uyuşmazlığın 1008'i
kayboluyor (508→7, 513→6).

**Sebep bir "hata" değil, bir SÖZLEŞME KAYMASI:** veri biçimi
`PARCA_HALKA`ya geçirilmiş, `js/app.js` güncellenmiş,
`arac/uret_devirler.py` **güncellenmemiş**. Üretici ile tüketici aynı
diziyi iki farklı şekilde okuyor.

### ④ Öneri

🟢 **DÜZELT.** Gerekçe:
1. Kusur **taralı alan sisteminde değil**, onu besleyen okumada. Sistemi
   kaldırmak, çalışan bir fikri bozuk bir okuma yüzünden atmak olur.
2. Düzeltme **tek fonksiyon**: `coz()` `PARCA_HALKA`yı da alacak.
   `js/app.js:109-120` **çalışan referans uygulamayı zaten taşıyor** —
   yeniden tasarım gerekmiyor, **kopyalanacak bir mantık var**.
3. Kazanç ölçüldü: 1021 → 13 uyuşmazlık.

⚠️ **Ama düzeltme TEK BAŞINA yetmez** — §3'teki sessiz düşürme ayrı bir
kusur ve kök düzeltilince **daha da önemli** hâle gelir: Avusturya artık
2000 km² eşiğini aşacak, ama bir sonraki sessiz düşüşü kimse görmeyecek.
⇒ İkisi birlikte kapatılmalı: `② kesişim boş` dalı **bassın**.

### ⑤ Ölçmediklerim — açıkça

- **Hiçbir görsel açılmadı.** Metin yetti, ama görseller şikâyetin
  *görsel* tarafını taşıyor olabilir; ölçümüm veri tarafında.
- **Düzeltmeyi UYGULAMADIM ve uygulanmış hâlini ölçmedim.** Kanıt testim
  gövdeyi kendi betiğimde yeniden okudu; `uret_devirler.py` koşturulmadı,
  `data/devirler.js` yeniden üretilmedi. **Yeni taralı alanların gerçekten
  doğru çıktığı ölçülmedi** — yalnız girdinin düzeldiği ölçüldü.
- **Kalan 7 EKSİK / 6 FAZLA** incelenmedi. Küçük, ama sıfır değil.
- **`devletler_harita.js` tarafı ayrıca sınanmadı.** Avusturya'nın gövdesi
  1699'da 747 km² çıkıyor; bu ① halka kusurundan mı geliyor yoksa yabancı
  gövdelerde ayrı bir sorun mu var — **ÖLÇMEDİM.** Kök düzeltildikten
  sonra tekrar bakılmalı.
- **`İstanbul 1736` ve `Uşi`** hiç çıktı üretmiyor; sebepleri ayrı
  (künye dönemi / eşik) ve bu raporda **kök analizine dâhil edilmedi**.
- Emre'nin *"Çehrin Karlofça ile mi kaybedildi"* sorusu: veri
  `1699'da lehistan` diyor, **TDV'den doğrulamadım**.

---

## 5. Bu ölçümde kendi aletim üç kez çürüdü

Dürüstlük kaydı — üçü de düzeltildi, ama üçü de rapor edilmeye değer:

| # | ne yaptım | ne çıktı |
|---|---|---|
| ① | `oku_pencere`yi elle kopyaladım | patladı — projenin kendi dersi: *"var olan ayrıştırıcıyı çağır"*. Modülü **içe aktardım** (`__main__` koruması var, hiçbir şey yazmıyor) |
| ② | `PAR`ı `petek_govde.js`ten okumaya çalıştım | yanlış dosya; `main():283` `donemler.js` diyor |
| ③ | *"gövde Macaristan'ı içermiyor"* diye hüküm verecektim | **önce testi sınadım**: İstanbul·Edirne·Budin·Temeşvar ✓ çıktı, yani test sağlamdı ve bulgu gerçekti |

📌 ③ olmasaydı, bulguyu *"benim testim bozuk"* diye eleyip kökü
kaçırabilirdim. **Bir bulguya inanmadan önce aleti sınamak, bulguyu
elemekten farklıdır** — biri ölçer, öteki susturur.

---
---

# EK — DÜZELTMEDEN SONRA: ÇIKTININ ÖLÇÜMÜ

**Tarih:** 27 Ağustos 2026, ikinci tur · **Dayanak:** `e53c86a`
Yukarıdaki bölümler **girdinin** düzeldiğini ölçmüştü. Bu ek **çıktıyı**
ölçüyor. Yine yalnız rapor; hiçbir dosyaya yazılmadı.

## E0. Kök gerçekten kapandı — çıktı tarafından doğrulandı

Karlofça **1 alıcı → 4 alıcı**, ve içleri tek tek okundu:

| alıcı | km² | içindeki yerleşimler |
|---|---|---|
| Avusturya | 263.758 | Budin · Peçuy · Estergon · **Eğri · Kanije · Uyvar** · İstolni Belgrad · Peşte · Varad · Yanova · Ösek · Mohaç · Varadin … |
| Lehistan | 164.643 | **Kamaniçe · Bar (Podolya)** · Çehrin · Meciboj · Yazlofça |
| Venedik | 36.263 | Mora · Modon · Patras · İnebahtı · Ayamavra · Koron · **Knin · Sinj** · Herseknovi … |
| Rusya | 24.340 | **Azak** · Taganrog · Rostov |

> ✅ **H-0007 kapandı** — Emre'nin adıyla saydığı Kanije · Uyvar · Eğri
> artık Avusturya'nın taralı alanının içinde.
> ✅ **H-0010 kapandı** — Kamaniçe ve Bar (Podolya) artık Lehistan'ın
> alanında.

---

## E1. 🔴 rusya@Karlofça = **AZAK** — ve çelişki gerçekti

Koordinatör haklı olarak sordu: *"Sen 0 km² doğru demiştin, şimdi 24 bin
km² var. Hangisi doğru?"*

**Ölçüm: 24.340 km²'nin içi Azak · Taganrog · Rostov.** Yani tam da
gerekçemin konusu.

**İkisi de doğru — farklı sorulara cevap veriyorlar:**

```
FORMÜLÜN sorusu   "alıcı, antlaşma günü Osmanlı'nın savaş başı toprağından
                   ne TUTUYORDU?"        → Azak. Rusya 1696'da ALDI. ✓ doğru
BENİM sorum       "antlaşma NEYİ DEVRETTİ?"
                   → Karlofça'da Rusya'ya hiçbir şey. ✓ doğru
```

**Tarihsel dayanak:** Karlofça (26 Ocak 1699) Osmanlı ile Avusturya ·
Lehistan · Venedik arasında imzalandı. **Rusya yalnız iki yıllık bir
mütareke imzaladı**; Azak'ı devreden kesin barış **İstanbul Antlaşması,
13 Temmuz 1700**'dür.

> 🔴 **Ve bu, koordinatörün ③ hipotezinin ISIRDIĞI yer.** Ben o hipotezi
> Karlofça'nın *geçiş tarihleri* üzerinde ölçmüş ve *"69'da 1, bedeli
> sıfıra yakın"* demiştim — **o ölçüm doğruydu ama dar bir evrende**.
> Hipotez geçiş tarihlerinde değil, **katalogun ALICI LİSTESİNDE** ısırıyor:
> Rusya, Karlofça'nın tarafı bile değil.
> 📌 Kendi dersimin üstüme düşen hâli: *ölçüm doğru, evren dar.*

**Öneri:** `rusya`yı Karlofça'nın `alicilar` listesinden **çıkar**, ayrı bir
kayıt aç:
```python
{"ad": "İstanbul Antlaşması (1700)", "t": "1700-07-13",
 "savas_basi": "1683-07-14", "alicilar": ["rusya"]}
```
Alan aynı kalır (Azak yine çıkar), ama **doğru antlaşmanın altında**.

---

## E2. Alıcı listeleri tarihen doğru mu — sayıyla

Taralı alanların içindeki **246 yerleşim**, savaş başındaki sahibine göre:

| savaş başı sahibi | sayı | oran | hüküm |
|---|---|---|---|
| **OSMANLI** | **193** | %78 | ✅ gerçek toprak devri |
| **tâbi** | 39 | %16 | ⚠️ **egemenlik** kaybı, toprak devri değil |
| **yabancı / sahipsiz** | 14 | %6 | 🔴 hiç Osmanlı olmamış |

### ⚠️ `tâbi` 39 — ayrı bir CİNS, hata değil ama aynı da değil

Yoğunlaştığı yerler: **Berlin/Romanya 15** · **Berlin/Sırbistan 6** ·
Karlofça/Avusturya 10 (Erdel) · Pasarofça/Avusturya 4 · Bükreş 2 ·
Edirne/Yunanistan 2.

Bunlar *yanlış* değil — Erdel Karlofça'da gerçekten Habsburg'a geçti,
Sırbistan ve Romanya Berlin'de gerçekten bağımsızlandı. **Ama Bükreş ve
Yaş'ın 1878'de "kaybedilmesi", Budin'in 1699'da kaybedilmesiyle aynı şey
değil**: biri tâbiiyetten çıkış, öteki toprak devri.

> **Öneri:** taralı gösterimde ayırt edilsin (ayrı desen ya da lejantta
> *"tâbiiyetten çıkan"*). Aksi hâlde Berlin Antlaşması, Romanya'nın
> tamamını "kaybedilen toprak" gibi gösteriyor — ki Emre'nin *"berbat"*
> dediği hissin bir kaynağı bu olabilir.
> ⚠️ **Bu bir ÖNERİ, ölçüm değil** — Emre'nin görsel şikâyetinin bununla
> ilgili olduğunu **ölçmedim**.

### 🔴 `yabancı/sahipsiz` 14 — bunlar gerçekten fazla

```
Kotor (Cattaro)      Karlofça/Venedik   1420'den beri Venedik  ← gerçek kusur
Gümrü · Eçmiyadzin   Ahmed Paşa/Safevî  savaş başı zaten safevi ← gerçek kusur
Rostov · Taganrog    Karlofça/Rusya     hiç Osmanlı olmadı
8 Libya çölü noktası Uşi/İtalya         `kasıtlı_boşluk` dolgu noktaları
```
Son ikisi **§2 emilme artefaktı**: nokta yokken alan en yakın peteğe
düşüyor. İlk üçü ise gerçek — hepsi **sınır komşusu** ve gövdenin kenarında.

---

## E3. Kalan EKSİK / FAZLA — ve kalan EKSİK **tek bir yerleşim**

| gün | EKSİK | FAZLA |
|---|---|---|
| 1600-06-15 | **Munastır** | Kasr-ı Şîrîn · Kotor · Gümrü · +1 |
| 1683-07-14 | **Munastır** | Kotor |
| 1699-01-26 | **Munastır** | — |
| 1718-07-21 | **Munastır** | — |
| 1774-07-21 | **Munastır** | — |
| 1829-09-14 | **Munastır** | Eğriboz |
| 1878-07-13 | **Munastır** | — |

> 🟢 **7 EKSİK = 1 yerleşim × 7 gün.** `Munastır` (Manastır/Bitola) yedi
> kesitin yedisinde de Osmanlı gövdesinin dışında. Tek, kararlı, adı
> belli bir kusur — ve **artık aranabilir**, çünkü gürültü kalktı.
> ⚠️ **Sebebini ÖLÇMEDİM.** Koordinat hatası mı, mükerrer ad mı, peteği
> mi yok — bakılmadı.

FAZLA 6'nın 3'ü (Kotor · Gümrü · Kasr-ı Şîrîn) E2'deki listeyle **aynı
kayıtlar**, yani iki ölçüm birbirini doğruluyor.

---

## E4. İstanbul 1736 — sebep bulundu, **veri değil KATALOG yanlış**

```
katalog       "alicilar": ["iran"]
`iran` künyesi  1281-01-01 → 1510-12-02 · SON DÖNEM 1510'DA BİTİYOR
1736-09-01'i kapsayan dönem: 0        ⇒ "gövde yok, atlandı"
```

1736-09-01'de o coğrafyada aktif olan kimlikler ölçüldü:

| kimlik | ad | parça |
|---|---|---|
| **`afsar`** | **Afşâr Devleti (Nâdir Şah)** | **21** |
| `galzay` | Galzay (Hotakî) Hânedanı | 1 |

Ve `safevi` **1736-03-08**'de bitiyor — Nâdir Şah'ın tahta çıkışıyla,
**tarihen doğru**.

> ✅ **Öneri:** `"alicilar": ["iran"]` → **`["afsar"]`**.
> Veri doğru, künye doğru, tarih doğru; yalnız katalog eski bir kimliği
> gösteriyor. Tek kelimelik düzeltme.
> 📌 Bu, `§4`ün *"kendi transliterasyonunu değil gerçek `id:`yi kullan"*
> kuralının katalog tarafı.

---

## E5. Bu turda ölçmediklerim

- **`Munastır`ın niçin dışarıda kaldığı** — tespit edildi, teşhis edilmedi.
- **`Kotor` · `Gümrü` · `Eçmiyadzin`in niçin içeride kaldığı** — sınır
  komşusu oldukları görüldü, sebep ölçülmedi.
- **`tâbi` 39 kaydının görsel etkisi** — Emre'nin şikâyetiyle bağı
  **kurulmadı**, yalnız hipotez olarak yazıldı.
- **Uşi/İtalya 1.056.626 km²** doğru mu — Libya'nın yüzölçümüyle
  kıyaslanmadı.
- **Hiçbir görsel yine açılmadı** (0/18).
- **Yeni `devirler.js` haritada nasıl görünüyor** — çizim katmanı
  (`js/app.js:1065`) **hiç çalıştırılmadı**; ölçümüm veride kaldı.
