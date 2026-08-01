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
  → *Tur 4'te ölçüldü ve paketlendi (`CAPRAZ-KUZEY.md` §21-24).*

---

## Tur 4 — 2026-08-01, `astarhan` paketi

### Ö16 · Çizilirlik elemesi — 1500-06-15 kesiti

Ölçüt: `!((kur && kur > g) || (bit && bit <= g))` — motorun `petek_epok()`
içindeki ölçütünün aynısı (Ö13'te koddan alındı).

Kutu **lat 40-56 · lon 42-60**, 1500-06-15:
```
ÇİZİLİYOR + altinorda   Astrahan · Terek deltası · Kalmuk bozkırı · Ural eteği
                        Mangışlak · Garabogaz · Bozkır (Deşt-i Kıpçak)      = 7
ÇİZİLMİYOR              Tsaritsyn (kur:1589) · Saratov (kur:1590)
                        Ufa (kur:1574) · Vladikavkaz (kur:1784)
                        Krasnovodsk (kur:1869)                              = 5
ÇİZİLİYOR + sahipsiz    Üstyurt platosu (doğu) · Üstyurt platosu (batı)     = 2
```

📌 **İki kazanç:**
1. Paket 9 nokta değil **7 nokta** — Saratov/Tsaritsyn etkisiz, dokunulmayacak.
   (Tur 3'te düşen iddiam burada iş tasarrufuna dönüştü.)
2. Aynı kutuda **kasten sahipsiz iki nokta** zaten var (Üstyurt) — B11'de
   önerdiğim "kasten boş" çözümünün **çalışır emsali** aynı coğrafyada.

---

### Ö17 · TDV `nogaylar` — sahanın sınırı kaynaktan çıktı

`<title>`: "NOGAYLAR - TDV İslâm Ansiklopedisi" 🟢

> batıda **"İdil'in (Volga) sol yakasındaki alçak ovalar"** · kuzeydoğuda İrtiş
> kolları · doğuda **"Emba nehrinden Aral gölüne kadar"** · başşehir **Sarayçık**
> Kalmuk baskısı Nogayları batıya sürdü, **1644** çarpışması.

⇒ **Ölçüt: Volga'nın sol (doğu) yakası = Nogay.** Bu, paketteki noktaları
ikiye ayırmayı kaynağa dayandırıyor:
```
Volga'nın BATISI / ağzı  → astarhan   Astrahan · Kalmuk bozkırı · Terek deltası
Volga'nın SOL yakası     → nogay      Ural eteği · Mangışlak
```

⚠️ **Nogay için tarih aralığı ölçülemedi.** TDV tek kuruluş tarihi vermiyor
(Edige'nin 1420'deki ölümüne dayandırıyor); `devletler.js` 1440-1783 diyor.
Kural ⑤ — gün uydurmadım, paketin **açık ucu** olarak işaretlendi.

---

### Ö18 · TDV slug ölçümü — tur 4

| slug | `<title>` | hüküm |
|---|---|---|
| `nogaylar` | "NOGAYLAR - TDV İslâm Ansiklopedisi" | 🟢 canlı, dolu |

📌 Dört turda **7 canlı · 1 kabuk · 3 ölü** slug. Ölülerin üçünde de kaynak
vardı, adres yanlıştı (`ejderhan` · `karlofca-antlasmasi` · + kabuk `lehistan`).

---

## Tur 4'te ölçmediğim, iddia da etmediğim şeyler

- **`nogay` tarih aralığı** — paketin açık ucu (Ö17).
- **Garabogaz · Çeleken** — Türkmen kıyısı Nogay mı Hîve mi, ölçülmedi.
- **Üstyurt'un sahipsizliği kasıtlı mı** — 34'lük listede mi, bakılmadı.
- **Paketin Değişmez 1'e etkisi** — veriye yazamadığım için `denetle.py`
  koşturamadım; uygulayan oturum koşturmalı.
- **1648 Hmelnitski günü** — **dördüncü turda da yapılmadı.** Borç büyüyor,
  sıradaki turun ilk işi.
  → *Tur 5'te de yapılmadı — koordinatör takvim taramasını öne aldı.*

---

## Tur 5 — 2026-08-01, sistematik takvim taraması

### Ö19 · Tarama tabanı

`rusya` · `lehistan` · `isvec` pencerelerinin 1582-1918 arası **bütün** sınır
günleri çıkarıldı: **63 ayrı gün.**

```bash
node -e "…for(const g of [p.f,p.t]){if(g<='1582-01-01'||g>='1919-01-01')continue;…}"
```
En kalabalık günler: `1813-10-24` (15 nokta, Gülistan) · `1723-09-23` (10, Petro'nun
Hazar seferi) · `1774-07-21` (8, Küçük Kaynarca) · `1793-01-23` (7, 2. taksim) ·
`1812-05-28` (7, Bükreş).

📌 Yan gözlem: `1667-02-09` listede — **Tur 1'deki Kiev düzeltmem uygulanmış.**

---

### Ö20 · Çift gösterimli kanıt bulunan iki vaka

| olay | kaynağın verdiği | bizdeki | fark |
|---|---|---|---|
| Kırım'ın ilhakı | **"19 April [O.S. 8 April] 1783"** | `1783-04-08` | 11 gün |
| Nystad | **"10 September [O.S. 30 August] 1721"** | `1721-08-30` | 11 gün |

Fark, XVIII. yy için beklenen **11 gün** ile birebir tutuyor — koordinatörün
verdiği kademe tablosuyla uyumlu.

⚠️ Kırım vakası **üç dosyaya** birden dokunuyor: `yerlesimler.js` (3 nokta) ·
`devletler.js` (`kirim` `t:`) · kronoloji (`1783-04`).

---

### Ö21 · TDV'nin hicrî karşılığı — B14'ün dayanağı

| TDV maddesi | verdiği hicrî | milâdî günü doğru mu |
|---|---|---|
| `karlofca` (Karlofça) | 24 Receb 1110 | 🟢 |
| `karlofca` (İstanbul 1700) | 27 Muharrem 1112 | 🟢 |
| `kucuk-kaynarca-antlasmasi` | 12 Cemâziyelevvel 1188 | 🟢 |
| `kirim` (1783 ilhak) | **1197** (yalnız yıl) | 🔴 Jülyen |
| `azak` (1696) | **1108** (yalnız yıl) | 🟡 tutmuyor |

**n=5, ayrım beş vakada da tutuyor.** Eşik ÖNERİLMEDİ (`ORGANIZASYON §7.4`).

---

### Ö22 · Türkmençay'ın veride ikiye bölünmüş hâli

```
1828-02-10   Astara · Lenkeran            (2 nokta)  ← düzeltilmemiş
1828-02-22   Nahçıvan · Revan · Ordubad   (3 nokta)  ← düzeltilmiş
```
Aynı antlaşma, 12 gün arayla iki gün. Yarım uygulanmış düzeltme.

---

### Ö23 · TDV slug ölçümü — tur 5

| slug | `<title>` | hüküm |
|---|---|---|
| `kucuk-kaynarca-antlasmasi` | "KÜÇÜK KAYNARCA ANTLAŞMASI - TDV İslâm Ansiklopedisi" | 🟢 canlı, dolu |

📌 Beş turda **8 canlı · 1 kabuk · 3 ölü.** Bu turun slug'ı **uzun ad olduğu
hâlde canlı** — yani `karlofca-antlasmasi`'nın ölü, `kucuk-kaynarca-antlasmasi`'nın
canlı olması TDV'de **tek bir adlandırma kuralı olmadığını** gösteriyor.
Tur 2'de *"TDV kısa adı kullanıyor"* diye desen çıkarmıştım — **o da çürüdü.**

---

## Tur 5'te ölçmediğim, iddia da etmediğim şeyler

- **`1617-02-27` Stolbovo · `1621-09-15` Riga · `1769-09-19` Hotin** — kaynak
  aranmadı, "sebebi belirsiz" olarak bırakıldı.
- **`isvec` pencerelerinin tamamı** — İsveç 1753'e kadar Jülyen kullandı, yani
  5 nokta/5 pencerenin hepsi aday. **Taranmadı.**
- **`1637-06-18` Azak** — TDV gün vermiyor, çift gösterim bulunamadı.
- **63 sınır gününün çoğu** — yalnız antlaşmaya bağlananlar tarandı; geri kalan
  (fetih/kuşatma günleri) **taranmadı.**
- **1648 Hmelnitski günü** — beşinci turda da yapılmadı.

---

## Tur 6 — 2026-08-01, Kırım paketi

### Ö24 · B15 geri çekildi — yarış durumu, hata bende değil ama ders bende

Koordinatör ölçtü: YAMACI `00ffed0`'da Kafkasya paketini bitirmiş,
`1828-02-10` artık veride **0 adet**. Ben commit'ten **önceki** ağacı ölçmüşüm.

📌 **Kendi payıma ders:** paralel oturumda *"veri şu an şöyle"* demeden önce
`git log`'a bakılır. Ölçümüm o an doğruydu ama **raporladığımda bayattı** —
yani ölçümün doğruluğu, raporun doğruluğunu garanti etmiyor.
⇒ §20'deki listeye **dördüncü satır**: *hangi dosya kümesi · hangi alanlar ·
birincil belge kimin · **ağacın hangi hâli.***

---

### Ö25 · 1783-04-08 ve 1774-07-21 günlerinin taşıdığı noktalar

```
1783-04-08 → rusya   Bahçesaray · Kuban (Yekaterinodar) · Bozkır (Deşt-i Kıpçak)   = 3
1774-07-21 → rusya   Kefe · Kerç · Azak · Taman · Kabartay (Nalçik)                = 5
devletler.js  kirim t:"1783-04-08"                                                 = 1 kayıt
"1784-01-08" geçen kayıt (devletler.js + yerlesimler.js)                           = 0
```

Kefe ve Taman'ın tam zinciri:
```
Kefe    s:ceneviz 1281→1475 · d:OSMANLI 1475-06-06→1771-07-01 ·
        s:rusya 1771-07-01→1774-07-21 · s:rusya 1774-07-21→1923
Taman   s:ceneviz 1281→1482 · d:OSMANLI 1482-06-01→1774-07-21 · s:rusya 1774→1923
```

---

### Ö26 · TDV — Kırım'ın üç tarihi

| soru | TDV'nin cevabı | madde |
|---|---|---|
| ilhak ilanı | *"Ruslar da **8 Nisan 1783**'te Kırım'ın ilhakını resmen ilân ettiler"* | `sahin-giray` |
| fiilî son | Şâhin Giray **14 Mayıs 1782** Ruslara sığındı; Potemkin **Ekim 1782** işgal | `sahin-giray` |
| **Osmanlı'nın tanıması** | *"**8 Ocak 1784**'te İstanbul'da imzaladığı bir antlaşma ile **Kırım, Taman ve Kuban**'ın ilhakını tanıdı"* | `kirim` |
| Yaş 1792 | *"Dinyester'e kadar ihtilâflı arazi"* + Bucak — **Kırım değil** | `kirim` |
| 1774'te Rusya'ya geçenler | *"**Azak, Kerç, Yenikale ve Kılburun**"* — Kefe/Taman **YOK** | `kucuk-kaynarca-antlasmasi` |

⇒ Koordinatörün *"1783-1792 arası 9 yıl"* endişesi ölçülünce **9 ay** çıktı
(1783-04-19 → 1784-01-08).

⚠️ **`1784-01-08` B14 ölçütüyle SINANMADI** — TDV bu çekişte hicrî karşılığını
vermedi. Kendi kuralıma göre *"yalnız yıl"* sınıfına girip girmediği belirsiz;
**bu tarih de Jülyen olabilir.**

---

### Ö27 · TDV slug ölçümü — tur 6

| slug | `<title>` | hüküm |
|---|---|---|
| `sahin-giray` | "ŞÂHİN GİRAY - TDV İslâm Ansiklopedisi" | 🟢 canlı, dolu |
| `aynalikavak-tenkihnamesi` | **"Arama - TDV İslâm Ansiklopedisi"** | 🔴 **ÖLÜ** |
| `arama/?q=Aynalıkavak` | — | 📌 yalnız **AYNALIKAVAK SARAYI** ve **TERSANE SARAYI** çıkıyor |

🔴 **Bu, ölü slug'ın farklı bir çeşidi:** `aynalikavak-tenkihnamesi` ölü **ve
arama da müstakil madde bulmuyor.** Yani antlaşmanın TDV'de kendi maddesi
**yok**; hükümleri `kirim` · `sahin-giray` · `abdulhamid-i` maddelerine dağılmış.
📌 `CLAUDE.md §4`'teki **Ferhat Paşa Antlaşması** vakasının aynısı — *"müstakil
maddesi yok, hükümleri yer maddelerinden toplanır."* İkinci emsal.

Altı turda: **10 canlı · 1 kabuk · 4 ölü** slug.

---

## Tur 6'da ölçmediğim, iddia da etmediğim şeyler

- **`1784-01-08`'in takvimi** — hicrî karşılığı gelmedi, B14 ile sınanmadı.
- **Kefe ve Taman'ın doğru günü** — çeliştiğini ölçtüm, **hangi güne** taşınacağını
  ölçmedim (1782 Ekim · 1783-04-19 · 1784-01-08 arasında).
- **Kabartay (Nalçik)** — Küçük Kaynarca'daki statüsü ayrı maddeye bağlıydı,
  bakmadım.
- **`kirim t:` kararı** — üç aday sıralandı, **karar vermedim** (koordinatörün).
- **1648 Hmelnitski günü** — **altıncı turda da yapılmadı.**

---

## Tur 7 — 2026-08-01, Kefe/Taman + paket envanteri

**Ölçüm ağacı: `1fecf5d`** (§14 gereği commit yazılıyor).

### Ö28 · `1783-04-08` tam envanteri

```
data/yerlesimler.js   6 sınır / 3 nokta
  Bahçesaray              s:kirim 1774-07-21→1783-04-08 · s:rusya 1783-04-08→1923
  Kuban (Yekaterinodar)   s:kirim 1281-01-01→1783-04-08 · s:rusya 1783-04-08→1923
  Bozkır (Deşt-i Kıpçak)  s:kirim 1502-03-01→1783-04-08 · s:rusya 1783-04-08→1923
data/devletler.js     3 sınır  (satır 149 · 162 · 200)
data/olaylar.js       1 kayıt  (satır 120, "1783-04" — AY hassasiyetli)
```

🔴 **Tur 6'da `devletler.js` için "1 kayıt" demiştim — yanlıştı, 3.**
Sebebi: `grep -o` desenim dardı, `grep -c` üç saydı. **Aracın çıktısına güvenip
aracı sınamadım.**

---

### Ö29 · TDV `kefe` — `KESİN`

`<title>`: "KEFE - TDV İslâm Ansiklopedisi" 🟢
> **"1783'te Kefe kesin olarak Rus hâkimiyeti altına girdi."**
> Osmanlı idaresi 1475 → 1783, ~308 yıl.
> 1771'de işgal edildi · 1777 ikinci saldırı ·
> **"Ruslar anlaşmaya rağmen Kefe'yi ellerinde tuttular."**

⇒ Bizde `1774-07-21`. **9 yıl fark**, ve TDV'nin ifadesi **beyan** (çıkarım değil).
📌 *"Anlaşmaya rağmen ellerinde tuttular"* = koordinatörün `isg:` modelinin
kaynaktaki karşılığı.

---

### Ö30 · TDV `taman` — madde YOK, etiket `DESEN`

```
islamansiklopedisi.org.tr/taman   <title> "Arama - TDV İslâm Ansiklopedisi"  ← ÖLÜ
arama sonucu: yalnız "TAMÂNÎ, Hüseyin Rifkı" (matematikçi) — alâkasız
```
TDV'de müstakil Taman maddesi **yok**. Üç dolaylı işaret var (1774 listesinde
yok · 1784 üçlüsünde var · coğrafî eşi Kuban bizde zaten 1783) ama **hiçbiri
doğrudan beyan değil** ⇒ `DESEN`, yamaya girmez.

---

### Ö31 · TDV slug ölçümü — tur 7

| slug | `<title>` | hüküm |
|---|---|---|
| `kefe` | "KEFE - TDV İslâm Ansiklopedisi" | 🟢 canlı, dolu |
| `taman` | **"Arama - TDV İslâm Ansiklopedisi"** | 🔴 **ÖLÜ, ve madde yok** |

Yedi turda: **11 canlı · 1 kabuk · 5 ölü.**
📌 Ölü beşin ikisi (`aynalikavak-tenkihnamesi`, `taman`) **gerçekten madde yok**
sınıfı; üçünde (`ejderhan`, `karlofca-antlasmasi`, + `lehistan` kabuk) adres
yanlıştı. **Ayrım önemli:** ilkinde başka kaynağa gidilir, ikincisinde TDV'de
kalınır.

---

## Tur 7'de ölçmediğim, iddia da etmediğim şeyler

- **Taman'ın doğru günü** — `DESEN` etiketiyle açık bırakıldı, akademik kaynak gerek.
- **`devletler.js:200`'ün hangi devlete ait olduğu** — satır numarasından
  `rusya` olduğunu **çıkardım**, kaydın başını okumadım.
- **Kefe'nin `isg:` penceresinin başlangıcı** — `1771-07-01` mevcut veriden
  alındı; TDV *"1771"* diyor, **günü doğrulanmadı.**
- **Kabartay (Nalçik)** — hâlâ bakılmadı.
- **1648 Hmelnitski günü** — **yedinci turda da yapılmadı.**
  → *Tur 8'de KAPANDI: gün TDV'de yok, hüküm "doğrulanamadı".*

---

## Tur 8 — 2026-08-01, borç + beş kale

**Ölçüm ağacı: `7462b26` sonrası** (Kefe `05d799e` ile uygulanmış hâliyle).

### Ö32 · Kefe doğrulaması — önerim aynen girmiş

```
Kefe   d:   OSMANLI  1475-06-06 → 1783-04-19
       s:   ceneviz  1281-01-01 → 1475-06-06
       s:   rusya    1783-04-19 → 1923-10-29
       isg: rusya     1771-07-01 → 1783-04-19
```
✅ Art arda iki `rusya` penceresi kapandı.

---

### Ö33 · 1648'in günü — üç adres, üç kez yok

| adres | `<title>` | gün var mı |
|---|---|---|
| `ukrayna` | UKRAYNA | ❌ yalnız "1648" |
| `arama/?q=Hmelnitski` | — | ❌ üç madde (`hatman`·`ukrayna`·`vasal`), günsüz |
| **`hatman`** | HATMAN | ❌ yalnız "1648" |

⇒ **Hüküm: doğrulanamadı.** Kayıt `t:"1648-01-01"` + `gun:"1648"` olmalı.

**Ve `hatman`'dan iki yeni tarih:**
```
1648  Hmelnitski hatman seçildi
1650  Ukrayna-Kazak devletini OSMANLI HİMAYESİ altına soktu   ← B3'e yeni
1657  ölümü        ·   Doroşenko 1665-1676
```

---

### Ö34 · Beş kale — TDV `karlofca` doğruladı

⚠️ **İlk adresim yanlıştı:** TDV `bogdan` beş kaleyi **anmıyor**; az kalsın
*"doğrulanamadı"* yazacaktım. `karlofca`'da kelimesi kelimesine var:
> *"Boğdan'da Leh işgali altındaki **Suçeva (Suczawa), Roman, Nemçe (Njamtzo),
> Soroka ve Kampulek** kalelerini geri alıyordu."*

Aynı maddeden iki şey daha:
> *"Osmanlı Devleti Podolya'yı boşaltıyor, **Ukrayna'da kurduğu Kazak
> Hatmanlığı'nı lağvediyor**, Kamaniçe Kalesi'ni boşaltıp yıkıyor"*
> Osmanlı-Leh anlaşması **on bir madde**, **22 Receb 1110 (18-22 Kasım 1698)**

---

### Ö35 · Üç kalenin veri zinciri — işgal HİÇ YOK

```
Suçava (Suceava)   s:bogdan 1281→1456-06-01 · v:OSMANLI 1456-06-01→1775-05-07
Roman              s:bogdan 1281→1456-06-01 · v:OSMANLI 1456-06-01→1878-07-13
Soroka (Soroca)    s:bogdan 1281→1456-06-01 · v:OSMANLI 1456-06-01→1812-05-28
Nemçe (Neamț)      YOK
Kampulek (Câmpulung) YOK
```
1699 civarında **hiçbir kırılma yok.** Yani "geri alış" çizilmemiş çünkü
**"kayıp" da çizilmemiş** — eksik olan bir sınır değil, **bir bölüm.**

📌 Karşılaştırma: `1699-01-26` günü yalnız 5 Podolya/Ukrayna noktasını
oynatıyor (Kamaniçe·Çehrin·Bar·Meciboj·Yazlofça) — Boğdan tarafı **sıfır**.

---

### Ö36 · TDV slug ölçümü — tur 8

| slug | `<title>` | hüküm |
|---|---|---|
| `hatman` | "HATMAN - TDV İslâm Ansiklopedisi" | 🟢 canlı, dolu |
| `bogdan` | "BOĞDAN - TDV İslâm Ansiklopedisi" | 🟢 canlı — **ama beş kaleyi anmıyor** |
| `arama/?q=Hmelnitski` | — | 📌 `hatman`·`ukrayna`·`vasal` |

Sekiz turda: **13 canlı · 1 kabuk · 5 ölü.**
📌 `bogdan` yeni bir sınıf: **canlı, dolu, konuyla ilgili — ama aranan bilgi
başka maddede.** *"Madde doğru görünüyor"* ile *"cevap burada"* aynı şey değil.

---

## Tur 8'de ölçmediğim, iddia da etmediğim şeyler

- **Leh işgalinin BAŞLANGIÇ tarihi** — TDV *"Leh işgali altındaki"* diyor ama
  tarih vermiyor. **`isg:` bu olmadan yazılamaz.** Sobieski'nin Boğdan
  seferleri (1686 · 1691) aday, **ölçmedim.**
- **Nemçe ve Kampulek'in koordinatları** — hafızadan yazmadım, GeoNames gerek.
- **1650 Osmanlı himayesinin süresi** — TDV başlangıcı veriyor, bitişini vermiyor.
- **Helsinki boşluğu** (70.637 km², 1566-1623) — koordinatör üçüncü sıraya
  koydu, **başlanmadı.** → *Tur 9'da bakıldı; sebep bulunamadı, iki yanlış iz elendi.*
- **Kabartay (Nalçik)** — hâlâ bakılmadı.

---

## Tur 9 — 2026-08-01, Helsinki boşluğu

**Ölçüm ağacı: `5e0264d`.** Kaynak: `denetim/BOSLUK-ENVANTERI-2026-08-01.md:38`

### Ö37 · Helsinki'nin kaydı — kusursuz

```json
{"ad":"Helsinki","tur":"liman","lat":60.17,"lon":24.938,"kur":"1550-06-12",
 "d":[], "s":[{1281-01-01→1809-09-17 isvec},{1809-09-17→1917-12-06 rusya},
              {1917-12-06→1923-10-29 finlandiya}]}
```
1566-1623 boyunca **kesintisiz `isvec`**. Boşluk Helsinki'nin kaydından gelmiyor.
Boşluğun gerçek konumu `61.0N, 25.0D` — Helsinki'ye **92 km**.

---

### Ö38 · Aralığın uçları — Baltık'a ait değil

```
1566-04-14  → Sakız · İpsara (Psara)          Ege, ceneviz → OSMANLI
1623-11-28  → Bağdat · Kerkük · Şehrizor · Necef · Kerbelâ · Erbil …
              22 nokta, Irak, OSMANLI → safevi
```
⇒ Küresel epok sınırları. **Finlandiya'da o tarihlerde bir olay yok.**

---

### Ö39 · Boşluk çevresi — canlı vs merge dışı

```
CANLI          Helsinki         92 km   (kur:1550-06-12)
               St. Petersburg  315 km
               Novgorod        446 km
MERGE DIŞI     Hämeenlinna      29 km   ← üç kat yakın
(avrupa.js)    Turku (Åbo)     161 km
               Viipuri         205 km
avrupa partisi: 237 nokta, bu kutuda 3
```

---

### Ö40 · Sınıflandırma tutarsızlığı — TAHMİN, ölçüm değil

Envanterin `NOKTA YOK` tarifi *"o bölgede yerleşim noktası yok"* — boşluğun
durumu bu. Ama `ARAŞTIRMA`ya konmuş.

**Tahminim** (ve tahmin olduğunu işaretliyorum): envanter `NOKTA YOK` sınıfını
*"aynı yerler **bütün zaman boyunca** boş"* diye tarif ediyor, yani zamandan
bağımsız bekliyor; bu boşluk **zamana bağlı** (1566-1623) olduğu için imzaya
uymamış.

---

## Tur 9'da ölçmediğim, iddia da etmediğim şeyler

- 🔴 **Boşluğun SEBEBİ** — bulamadım. Açık soru: *bir alanın sahipsizliği,
  hiçbir noktanın kaydı değişmediği hâlde nasıl zamana bağlı olabiliyor?*
  Cevap `uret_petek.py`'de ve **benim dosyam değil**; üretim de koşuyor.
  **Tahmin yürütmedim.**
- **`ARAŞTIRMA` sınıfının diğer dördü** (Hâil · Vladikavkaz · Cetinje · Manama)
  — bana verilmedi, bakmadım.
- **Merge'in ikinci kapısı** (15 tanımsız kimlik / renk) — hâlâ ölçmedim,
  benim işim değil. *"Merge edin"* demiyorum, yalnız maliyeti kaydediyorum.
- **Leh işgalinin başlangıcı · Nemçe/Kampulek koordinatları · Kazak
  Hatmanlığı paketi** — sıradaki turlar.
