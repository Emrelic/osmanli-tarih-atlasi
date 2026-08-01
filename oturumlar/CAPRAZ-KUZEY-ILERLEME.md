# ÇAPRAZ KUZEY — ölçüm kayıtları

Bulgular ve öneriler: **`CAPRAZ-KUZEY.md`**. Bu dosya yalnız **ham ölçüm** tutar —
komut, çıktı, sayı. Amaç: her sayının yeniden üretilebilmesi (`OGRENILENLER §52`).

---

## Tur 1 — 2026-08-01, açılış turu

### Ö0 · Ölçüm tabanı doğrulandı (bunu yapmasaydım tur baştan yanlış olurdu)

İlk ölçümümü `data/yerlesimler*.js`'in **tamamı** üzerinde koştum ve `Y_AVRUPA`
noktalarını (Uppsala · Kalmar · Turku · Göteborg …) canlı sandım. **Değiller.**

`arac/girdi.py` `GIRDI_DOSYALARI` (tek doğru kaynak, CLAUDE.md §5):
```
CANLI     yerlesimler.js · yerlesimler_afrika.js                → 975 nokta
DIŞARIDA  yerlesimler_asya.js (344) · yerlesimler_avrupa.js (228)
          yerlesimler_ortaasya2.js
```
📌 CLAUDE.md §5'in uyardığı tuzağın aynısına düştüm ve **belgeyi okuyarak**
çıktım: *"ayrıştırıcıyı doğrulamak yetmiyor, hangi DOSYALARI okuduğunu da
doğrulamak gerekiyor."* Aşağıdaki bütün sayılar **canlı iki dosya** üzerinden.

```bash
node -e "global.window={};const fs=require('fs');
for(const f of ['yerlesimler.js','yerlesimler_afrika.js'])eval(fs.readFileSync('data/'+f,'utf8'));
const Y=[];for(const k of Object.keys(window))if(/^YERLESIMLER/.test(k))Y.push(...window[k]);
console.log('CANLI nokta:',Y.length);"
```
→ `CANLI nokta: 975` (koordinatörün r430 sayısıyla uyuşuyor ✓)

---

### Ö1 · Kuzey kümesi kimlik kullanımı

| kimlik | pencere | nokta | `devletler.js` ömrü | not |
|---|---:|---:|---|---|
| `rusya` | **116** | **101** | 1547-01-16 → 1917-03-15 | koordinatörün 128/113'ü tüm dosyalardan; canlıda 116/101 |
| `lehistan` | **23** | **16** | 1569-07-01 → 1795-10-24 | en zayıf, doğrulandı |
| `altinorda` | 22 | 22 | 1242 → 1502 | |
| `kirim` | 14 | 13 | 1441 → 1783-04-08 | |
| `isvec` | 5 | 5 | 1523-06-06 → | Stokholm·Oslo·Helsinki·Riga·St.Petersburg |
| `kazan` | 2 | 2 | 1437 → 1552-10-02 | Kazan · Ufa |
| `litvanya` | 1 | 1 | 1918-02-16 → 1923 | yalnız Vilnius |
| **`zaporojye`** | **0** | **0** | 1552 → 1775-06-16 | 🔴 hiç boyanmıyor |
| **`astarhan`** | **0** | **0** | 1466 → 1556 | 🔴 hiç boyanmıyor |
| **`nogay`** | **0** | **0** | 1440 → 1783 | 🔴 hiç boyanmıyor |
| **`sibir`** | **0** | **0** | 1420 → 1598 | 🔴 hiç boyanmıyor |
| `moskova` · `novgorod` · `ukrayna` · `kazak` | 0 | 0 | **kayıt yok** | kimlik hiç tanımlı değil |

📌 **Dört devlet `devletler.js`'te kayıtlı ve haritada hiç görünmüyor.** Bu,
CLAUDE.md §3.5'in "hayalet devlet" sınıfının **ters yönü**: orada var olmayan
devlet boyanıyordu, burada var olan devlet **hiç** boyanmıyor. §3.5'teki
denetimlerin hiçbiri bu yönü sormuyor (kural ⑥).

---

### Ö2 · Kimlik ömrü ↔ yerleşim penceresi çelişkisi

Şu soruyu sordum: *bir `s:` penceresi, devletin `devletler.js`'teki doğuşundan
önce mi başlıyor?*

```bash
# tam komut CAPRAZ-KUZEY.md ölçümlerinde; özet sonuç:
rusya      devletler.js 1547-01-16  ↔  7 nokta 1281'den  (Moskova·Novgorod·
                                       St.Petersburg·Tula·Nijniy Novgorod·Vologda·Perm)
lehistan   devletler.js 1569-07-01  ↔  12 nokta 1281'den
isvec      devletler.js 1523-06-06  ↔  Stokholm·Helsinki 1281'den
```

⚠️ **Bunu hata olarak RAPOR ETMİYORUM.** `OTURUM-16-KUZEY-DOGU-AVRUPA.md §E.3`
bu konvansiyonu kasten kurmuş: `rusya` = Moskova Knezliği → Çarlık →
İmparatorluk tek siyasî gövde; `lehistan` Litvanya'yı da kapsıyor. Yani
**dizin ekseni ile harita ekseni farklı şey ölçüyor** — dizin *kurumu*, harita
*gövdeyi*. Kayda geçiyor çünkü ileride bir denetim bu ikisini eşitlemeye
kalkarsa 21 kaydı yanlış "düzeltir".

---

### Ö3 · `altinorda` bitiş tarihleri — dağılım

```
1441-01-01  Bahçesaray · Hacıbey (Odessa) · Harkov · Voronej · Rostov (Don)
1502-01-01  Çeleken · Garabogaz (Bekdaş) · Mangışlak
1502-03-01  Bozkır (Deşt-i Kıpçak)          ← bugün düzeltilen tek kayıt
1438-01-01  Kazan · Ufa                     (→ kazan)
1379-01-01  Köhne Ürgenç · Yeni Ürgenç · Küngrat
1362-01-01  Kiev · Poltava                  (→ lehistan)
1556-01-01  Terek deltası · Astrahan · Saratov · Tsaritsyn · Kalmuk bozkırı ·
            Ural eteği                      (→ rusya)
```
📌 Aynı devletin sonu için **yedi ayrı tarih** — çoğu meşru (bölgesel devir),
ama 1441 ile 1502-03-01 ayrımı bugünkü düzeltmeden sonra **yarım** kaldı
(`CAPRAZ-KUZEY.md` B5).

---

### Ö4 · Kronoloji taraması — Rusya/Kazak/Leh maddeleri

`data/olaylar*.js`, **1009 madde**. Rusya ile ilgili ilk madde:
```
1637-06-18  Azak Kalesi'nin Don Kazaklarına kaybı
```
1670-1700 penceresinin tamamı tarandı (53 madde). Bulunmayanlar:
```
1552 Kazan · 1556 Astarhan · 1569 Ejderhan seferi
1648 Hmelnitski · 1654 Pereyaslav · 1667 Andrusova · 1676 Zuravno
```
Bulunanlar (Leh-Osmanlı ekseni tam):
```
1672-08-27 Kamaniçe   1672-10-18 Bucaş   1678-07-19 Çehrin
1681-01-11 Bahçesaray 1699-01-26 Karlofça
```

---

### Ö5 · TDV slug ölçümü — `<title>` ile sınandı

| slug | `<title>` | hüküm |
|---|---|---|
| `azak` | "AZAK - TDV İslâm Ansiklopedisi" | 🟢 canlı, dolu |
| `ukrayna` | "UKRAYNA - TDV İslâm Ansiklopedisi" | 🟢 canlı, dolu |
| `polonya` | "POLONYA - TDV İslâm Ansiklopedisi" | 🟢 canlı, dolu |
| `astarhan-hanligi` | "ASTARHAN HANLIĞI - TDV İslâm Ansiklopedisi" | 🟢 canlı, dolu |
| `lehistan` | "LEHİSTAN - TDV İslâm Ansiklopedisi" | 🟡 **kabuk** — gövde `bk. POLONYA` |
| `ejderhan` | **"Arama - TDV İslâm Ansiklopedisi"** | 🔴 **ÖLÜ** → `astarhan-hanligi` |

📌 Kural ③ iki kez işledi: ikisinde de **kaynak vardı, adres yanlıştı.**
📌 Ve `ejderhan` ölü sayfasının **arama sonucu** gerçek maddenin adını verdi
("ASTARHAN HANLIĞI") — ölü slug'ın kendisi doğru adresi buldurdu.

---

### Ö6 · Takvim ölçümü — ilk iki vaka

| olay | bizdeki kayıt | Jülyen | Gregoryen | TDV | sapma |
|---|---|---|---|---|---|
| Pereyaslav → Poltava | `1654-01-18` | 8 Oca | **18 Oca** | 1654 | 🟢 dönüştürülmüş |
| Andrusova → Kiev | `1667-01-30` | **30 Oca** | 9 Şub | 1667 | 🔴 **ham Jülyen, 10 gün** |
| Azak'ın Petro'ya kaybı | `1696-07-19` | **19 Tem** | 29 Tem | **6 Ağu** | 🔴 üç tarih, 18 gün |

Andrusova çift gösterimli künyeyle doğrulandı: *"signed on 9 February
[O.S. 30 January] 1667"*.

⚠️ **Desen henüz kararlaşmadı** — iki vaka var, üçüncüsü hangi ucun kaydığını
söyleyecek. `CAPRAZ-GOREV.md §3`: *çelişki çözülmeden önce kaydedilir.*

---

## Bu turda ÖLÇMEDİĞİM, iddia da etmediğim şeyler

Kural ⑥'ya uyarak açık bırakıyorum — "doğrulanamadı" tam bir hükümdür (§8):

- **1648 Hmelnitski ayaklanmasının günü** — TDV yalnız yıl veriyor. Gün
  bulunmadan B3'ün önerisi tarihlenemez.
- **Harkov · Voronej · Rostov'un 1441-1502 arası sahibi** — "Vahşi Bozkır"
  sınıfına mı giriyor, ölçülmedi.
- **`kazan-hanligi` slug'ı** — sınanmadı; Kazan 1552 maddesi önerilirken gerekecek.
- **Bahçesaray 1681-01-11** — bizdeki gün ile 3/13 Ocak arasındaki ilişki
  ölçülmedi (üçüncü takvim vakası adayı).
- **`rusya` 116 vs koordinatörün 128'i** — fark merge dışı dosyalardan geliyor
  olmalı ama **doğrulamadım**; koordinatörün sayısını çürütmüyorum, tabanının
  farklı olduğunu söylüyorum.
  → *Tur 2 notu: koordinatör kabul etti, taban farkı teyit edildi.*

---

## Tur 2 — 2026-08-01, Karlofça kesişimi + Vahşi Bozkır

### Ö7 · Karlofça günü haritada ne yapıyor

1697-1701 arasındaki **bütün** kırılma günleri tarandı:
```
1697-01-01   Cetinje                                    (2 kırılma)
1699-01-26   Kamaniçe · Bar · Meciboj · Yazlofça · Çehrin  (10 kırılma)
        ... ve BAŞKA HİÇBİR GÜN YOK
```
→ Karlofça haritada **yalnız 5 nokta** oynatıyor ve **hepsi Lehistan tarafı.**
Avusturya/Venedik hiç kımıldamıyor, Rusya hiç kımıldamıyor.

`avusturya` + `venedik` pencerelerinin 1680-1720 arası **başlangıç** tarihleri
ayrıca çıkarıldı: **33 ayrı gün**, hepsi fetih günü (Budin 1686-09-02, Erdel
1687-08-12, Mora 1687-08-01 …), **1699-01-26 listede yok.**

📌 Bu bir kusur DEĞİL: iki grup da fiilî hâkimiyeti yazıyor. Kamaniçe 1699'a
kadar Osmanlı garnizonundaydı, Budin 1686'da fiilen düştü. (`CAPRAZ-KUZEY.md` B10)

---

### Ö8 · Bozkır noktalarının tam zinciri

```
Harkov         altinorda 1281→1441 · kirim 1441→1654 · rusya 1654→1923   kur: YOK
Voronej        altinorda 1281→1441 · kirim 1441→1585 · rusya 1585→1923   kur: YOK
Rostov (Don)   altinorda 1281→1441 · kirim 1441→1739 · rusya 1739→1923   kur:1749-12-15
Hacıbey        altinorda 1281→1441 · kirim 1441→1538 · d:OSMANLI 1538-09-01→1792-01-09
Bozkır (D.K.)  altinorda 1281→1502 · kirim 1502→1783 · rusya 1783→1923
Bahçesaray     altinorda 1281→1441 · kirim 1441→1475 · v:OSMANLI 1475→1771 …
```

📌 **Tur 1'de eksik ölçtüğüm yer:** `altinorda`nın bitişine bakıp durmuştum;
**sonrasına** bakmamıştım. Beş noktanın hepsi 1441'de `kirim`'e geçiyor —
yani B5'te *"düzeltme yarım kaldı"* derken kastettiğim şey aslında
**tutarlı bir zincirin parçasıymış.** Asıl soru `altinorda`nın bitişi değil,
`kirim`'in o bozkırda **ne anlama geldiği** (B11).
⚠️ Kural ⑥'nın bana çarpan hâli: ölçümü tek yönde sordum (*"altinorda ne zaman
bitiyor"*), ters yön (*"sonra kim alıyor"*) bambaşka bir sınıf gösterdi.

---

### Ö9 · Kuruluş yılı ↔ geçiş tarihi çakışması

| nokta | veride geçiş | şehrin kuruluşu | `kur:` |
|---|---|---|---|
| Voronej | `1585-01-01` | Voronej kalesi 1585 | YOK |
| Harkov | `1654-01-01` | Harkov 1654 | YOK |
| Rostov (Don) | `1739-09-18` (Belgrad) | — | **`1749-12-15` VAR** |

→ İlk ikisinde **kuruluş yılı el değiştirme günü olarak kullanılmış.**
⚠️ **Doğrulanmadı:** iki kuruluş yılı için ikinci kaynak aramadım; veri-içi
çakışmadan çıkardım. TDV kapsamı dışı (Rus iç tarihi), akademik referans gerek.
Bu yüzden §8'e göre hükmüm *"doğrulanmadı"* — B11'in (a) önerisi bu doğrulamaya
bağlı.

---

### Ö10 · TDV slug ölçümü — tur 2

| slug | `<title>` | hüküm |
|---|---|---|
| `karlofca` | "KARLOFÇA ANTLAŞMASI - TDV İslâm Ansiklopedisi" | 🟢 canlı, dolu |
| `kirim` | "KIRIM - TDV İslâm Ansiklopedisi" | 🟢 canlı, dolu |
| `karlofca-antlasmasi` | **"Arama - TDV İslâm Ansiklopedisi"** | 🔴 **ÖLÜ** → `karlofca` |

📌 Bu turun ölü slug'ı yine *"uzun ad denedim"* sınıfından — `kirim-hanligi`
(bilinen ölü) ile aynı desen: **TDV kısa adı kullanıyor.** İki turda dört ölü/
kabuk slug: `ejderhan` · `lehistan` · `karlofca-antlasmasi` · (bilinen)
`kirim-hanligi`. Üçünde de kaynak vardı.

---

### Ö11 · Takvim hipotezinin sınanması (B12)

Tur 2'de **iki yeni TDV tarihi** eklendi ve ikisi de temiz çıktı:
```
1699-01-26 Karlofça   TDV "24 Receb 1110 / 26 Ocak 1699"    ✓
1700-07-14 İstanbul   TDV "27 Muharrem 1112 / 14 Temmuz 1700" ✓
```
Toplam tablo: **TDV kaynaklı 4/4 doğru · Rus kaynaklı 3 tarihten 2'si ham Jülyen.**

⚠️ **Eşik önermiyorum.** 3 vakalı bir tarafta 1 istisna var; `ORGANIZASYON §7.4`
*"ölçmeden eşik koyma"*. Hipotez kayıtlı, vaka biriktikçe sınanacak.

---

## Tur 2'de ölçmediğim, iddia da etmediğim şeyler

- **Harkov/Voronej kuruluş yılları** — ikinci kaynak aranmadı (Ö9).
- **Venedik'in Karlofça'da kaybettiği bir şey var mı** — ÇAPRAZ BATI'nın ucu,
  ben ölçmedim.
- **Hacıbey'in 1538-09-01 ve 1792-01-09 tarihleri** — fark edildi, sınanmadı.
- **`nogay` sahası** — TDV `kirim` "tâbiiyetleri gevşek" diyor; Nogay Ordası'nın
  kendi coğrafyası ölçülmedi.
- **1648 Hmelnitski günü** — hâlâ yok.

---

## Tur 3 — 2026-08-01, kendi iddiamı ölçtüm

### Ö12 · `kur:` alanı — B4'ün düşen yarısı

```
Saratov                   kur:1590-07-12   bit:—   tur:sehir
Tsaritsyn                 kur:1589-07-02   bit:—   tur:sehir
Kalmuk bozkırı            kur:—            bit:—   tur:bolge
Ural eteği                kur:—            bit:—   tur:bolge
Terek deltası (Kızlar)    kur:—            bit:—   tur:bolge
Astrahan                  kur:—            bit:—   tur:sehir
Harkov                    kur:—            bit:—   tur:sehir   ← B11 ayakta
Voronej                   kur:—            bit:—   tur:sehir   ← B11 ayakta
St. Petersburg            kur:1703-05-27
CANLI veride kur: taşıyan nokta: 35
```
→ Koordinatörün ölçümü **bağımsız olarak doğrulandı**; iddiamın o yarısı düştü.

---

### Ö13 · Motor `kur:`/`bit:` okuyor mu — koda bakıldı

```bash
grep -n '"kur"\|\bkur\b\|"bit"' arac/uret_petek.py arac/girdi.py
```
Belirleyici satırlar:
```
uret_petek.py:1135   # ---------------- kur: / bit: — VARLIK EPOKLARI ----------------
uret_petek.py:1138   # Motor `kur:` alanını okumuyordu:  ← GEÇMİŞ ZAMAN
uret_petek.py:1259   if not ((y.get("kur") and y["kur"] > g) or (y.get("bit") and y["bit"] <= g)):
uret_petek.py:1274   (aynı ölçüt, komşu tarama)
uret_petek.py:1298   (aynı ölçüt, devir)
uret_petek.py:1435   print("Varlık epokları (kur:/bit:) hazırlanıyor...")
girdi.py:166         "kur": "kuruluş tarihi — motor: petek_epok() bu tarihten önce peteği ..."
```
⇒ **Motor `kur:`'u uyguluyor.** Blokaj kapanmış; `OTURUM-16 §E.6` bayat
(`CAPRAZ-KUZEY.md` B13).

⚠️ **Ölçmediğim:** merge'in önündeki **öbür** kapı (15 tanımsız kimlik / renk).
Yalnız `kur:` gerekçesinin düştüğünü söylüyorum, "merge yapılabilir" demiyorum.

---

### Ö14 · Bahçesaray — üçüncü takvim adayı elendi

`data/olaylar_ek5.js:242`:
```js
t:"1681-01-11",  gun:"1681",  kaynak:"merzifonlu-kara-mustafa-pasa"
```
TDV `bahcesaray` (`<title>` doğrulandı): yalnız *"1681'de"*, gün yok.

⇒ `gun:` alanı zaten yıl hassasiyeti bildiriyor — **takvim sapması vakası değil.**
B12'nin vaka sayısı 3'te kaldı, eşik önermemek doğruydu.

🟡 Yan gözlem: `t:"1681-01-11"`, `CLAUDE.md §4`'ün `YYYY-01-01` konvansiyonuna
uymuyor. Zararsız (çünkü `gun:` doğruyu söylüyor), düzeltme önermedim.

---

### Ö15 · TDV slug ölçümü — tur 3

| slug | `<title>` | hüküm |
|---|---|---|
| `bahcesaray` | "BAHÇESARAY - TDV İslâm Ansiklopedisi" | 🟢 canlı — ama 1681 antlaşması için **gün yok** |

📌 Madde canlı ve dolu olduğu hâlde **aradığım veriyi taşımıyor.** Bu da bir
hüküm: *"kaynak var, cevap yok"* — `CAPRAZ-GOREV.md §8`'in *"doğrulanamadı tam
bir hükümdür"* maddesi.

---

## Tur 3'te ölçmediğim, iddia da etmediğim şeyler

- **Kuzey-Doğu Avrupa merge'inin önündeki renk/kimlik kapısı** — E.6'nın `kur:`
  gerekçesi düştü, **öbür gerekçe ölçülmedi.**
- **Harkov/Voronej kuruluş yılları** — hâlâ ikinci kaynaksız (Tur 2'den devir).
- **1648 Hmelnitski günü** — üçüncü turda da yapılmadı.
- **`astarhan` penceresinin hangi noktalara yazılacağı** — kimlik ayakta ama
  hangi altı noktanın hangi tarih aralığını alacağı ölçülmedi.
