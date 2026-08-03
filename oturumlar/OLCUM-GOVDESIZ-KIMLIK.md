# ÖLÇÜM — gövdesiz kimlikler ve `harita:` köprüsünün deliği

**3 Ağustos 2026 · VERİ KİMLİK 3 · Opus.** Koşu sürerken yazıldı;
`data/devletler.js` ve `arac/renkler.py` **KİLİTLİ, dokunulmadı.**

Girdi: koordinatörün `zaporojye` vakası — *"kimlik `devletler.js` ve
`renkler.py`de TAM, ama hiçbir yerleşimde `d:"zaporojye"` yok."*
Soru: **böyle kaç kimlik var?**

Ölçüm tabanı: `devletler.js` **301 kayıt** × `data/yerlesimler*.js`
(9 dosya, **5.796 sahiplik dönemi**, 268 ayrı kimlik) × `BOYALAR` 226.

---

## CEVAP — gövdesiz kimlik: **BİR TANE**, o da `zaporojye`

```
devletler.js'te harita: alanı olan kayıt        185
  → bunlardan veride SIFIR kez geçen             1     zaporojye
```

`zaporojye` · 1552-01-01 → 1775-06-16 · `sibirya-bozkir` · rengi VAR
(`#8c92fe`). Koordinatörün teşhisi doğruydu ve **tek vakaydı.**

📌 Yani "kimlik üretildi, gövdesi hiç gelmedi" sınıfı bir salgın değil.
Ama **bu ölçüm asıl deliği ararken başka bir şey buldu ve o çok daha
büyük.**

---

## 🔴 ASIL BULGU — 97 KİMLİK ANAKRONİZM DENETİMİNİN DIŞINDA

`denetle_anakronizm.py` bunu **zaten kendisi yazıyor** ve kimse
okumamış. Aracın kendi çıktısının 6. satırı:

```
⚠️ devletler.js'te 'harita:' karşılığı OLMAYAN 97 kimlik —
   bu kimlikler denetlenemiyor
```

Yani `CLAUDE.md §3.5`'in "hayalet devletler" sınıfı — Batnoz'un 84 yılı,
Memlûk'ün 40 yılı, Safevî'nin 235 yılı — **haritanın beşte biri için hiç
sorulmuyor.** Ölçüldü:

```
veride toplam sahiplik dönemi                5.796
denetlenebilen (harita: köprüsü kurulu)      4.397   %76
DENETLENEMEYEN                               1.399   %24
```

### Dört bölge — her kimlik için: boyar mı? künyesi var mı?

```
① boyar + künyesi var + köprü kurulu   171 kimlik · 4.397 dönem   ✅ SAĞLIKLI
② boyar, kaydı VAR, KÖPRÜ YOK           52 kimlik · 1.040 dönem   🔴 tek satırlık iş
③ künyesi var ama BOYAMIYOR              0 kimlik ·     0 dönem   ✅ temiz
④ ne rengi ne künyesi var               44 kimlik ·   351 dönem   bilinen kuyruk
   + `turkmen` (boyar, kaydı hiç yok)     1 kimlik ·     8 dönem
```

🟢 **③ sıfır çıktı** — yani "künye var, motor boyamıyor" biçiminde
sessiz renksiz delik **yok.** Bu iyi haber ve ölçülerek söyleniyor.

### 🔴 ②'nin listesi — kaydı VAR, yalnız `harita:` satırı yazılmamış

Bunlar haritada **doğru boyanıyor**; kusur yalnızca denetim köprüsünde.
En büyük on tanesi tek başına 700 dönem:

| kimlik | dönem | kimlik | dönem |
|---|---|---|---|
| `qing-hanedani` | 117 | `ming-hanedani` | 73 |
| `babur-imparatorlugu` | 109 | `meiji-japonya` | 55 |
| `ingiliz-hindistani` | 96 | `edo-bakufu` | 32 |
| `delhi-sultanligi` | 83 | `maratha` | 31 |
| `yuan-hanedani` | 73 | `hollanda-dogu-hint` | 31 |

Kalan 42: `muromachi` 22 · `kastilya` 22 · `behmeni` 19 · `kamakura` 17 ·
`joseon` 17 · `irlanda` 16 · `konbaung` 15 · `vijayanagara` 15 ·
`goryeo` 15 · `sih-imparatorlugu` 13 · `le-hanedani` 13 · `burgonya` 12 ·
`siyam-chakri` 11 · `aragon` 11 · `toungoo` 9 · `nguyen-hanedani` 9 ·
`iskocya` 9 · `belcika` 9 · `cungar` 8 · `isvicre` 7 · `meysur` 6 ·
`yakub-beg` 6 · `ayutthaya` 6 · `ingiliz-malaya` 6 · `majapahit` 6 ·
`bretanya` 6 · `tibet-ganden-phodrang` 5 · `mataram-sultanligi` 5 ·
`kamboc-kralligi` 4 · `abd` 4 · `malaka-sultanligi` 2 · `ace-sultanligi` 2 ·
`brunei-sultanligi` 2 · `navarra` 2 · `ferrara` 2 · `ryukyu` 1 ·
`sulu-sultanligi` 1 · `siena` 1 · `mantua` 1 · `parma` 1 · `piza` 1 ·
`luksemburg` 1

⇒ **Düzeltme kayıt başına TEK SATIR:** `harita:"<id>"` eklenecek, id ile
BOYALAR anahtarı zaten birebir aynı. 52 satır, sıfır araştırma.
Karşılığında **1.040 dönem denetime girer** ve `§3.5`'in hayalet devlet
taraması haritanın %76'sından %94'üne çıkar.

📌 **Neden bu kadar birikmiş:** `devletler.js` başlığı diyor ki
*"harita: … Karşılığı yoksa alan hiç yazılmaz."* Kayıtlar yazıldığında
o kimliklerin çoğunun rengi **gerçekten yoktu** — Parti 9-15 notları
bunu açıkça söylüyor (*"harita kapsamı dışı, hiçbiri BOYALAR'da yok"*).
Sonra renkler geldi (Oturum 16, RENK, bu oturum) ama **geri dönüp köprü
kurulmadı.** Kural doğruydu, ama tek yönlüydü: *"renk gelince harita:
alanını da yaz"* diye bir adım yok.
⚠️ Ve bu oturum aynı hatayı **yapmadı** — 55 kimliğin 55'ine `harita:`
yazıldı. Ama yazmasaydım kimse fark etmezdi; bu bir disiplin meselesi,
araç zorlamıyor.

### `turkmen` — tek gerçek boşluk (④'ün dışında)
`turkmen` boyuyor (8 dönem, `#00acc1`) ama `devletler.js`te kaydı **hiç
yok**. Adı da genel (*"Türkmen boyları"*) — bir devlet mi, bir nüfus
katmanı mı? Karar gerektiriyor; künye yazılmadan önce sorulmalı.

---

## ③ mogolistan / mogulistan — ÖLÇÜLDÜ, artık bu taramanın bir satırı

Yakın-slug avı (benzerlik ≥ 0,80) veride geçen 44 kayıtsız anahtarı
`devletler.js`in bütün id'lerine karşı taradı. **En yüksek eşleşme:**

```
benzerlik 0,90   veri 'mogolistan' (7 dönem)  ↔  kayıtlı 'mogulistan'
```

Durum tablosu:
```
mogulistan   veride 7 dönem · BOYALAR VAR · devletler.js VAR   ✅ (PARTİ 1b'de yazıldı)
mogolistan   veride 7 dönem · BOYALAR YOK · devletler.js YOK   ⬜ kuyrukta
```

**AYNI KURUM DEĞİL — `YASALAR B11` ihlali YOK.** Ölçüm:
```
mogulistan  1347-01-01 → 1680-01-01   Doğu Çağatay Hanlığı · Almalık → Turfan
mogolistan  1911-12-29 → 1923-10-29   Bogd Han Moğolistanı · Urga
ortak gün 0 · aralarında 231 yıl · ortak coğrafya 0 (Tarım havzası ↔ Halha bozkırı)
```
⇒ Biri silinmemeli; ikisi de yazılmalı. `mogulistan`ın künyesi yazıldı ve
`ozet`ine *"⚠️ [[mogolistan]] ile karıştırılmamalı, aralarında 231 yıl
var"* satırı kondu. `mogolistan` yazılınca karşılıklı bağ tamamlanmalı.

⚠️ **Ama tehlike gerçek ve `B11` onu yakalamıyor:** iki slug tek harfle
ayrılıyor, ikisi de geçerli anahtar; bir oturum yanlışını yazarsa hiçbir
denetim görmez. Bugün görünmemesinin tek sebebi `mogolistan`ın henüz
renksiz olması — renk gelince ikisi de sessizce boyar.

### Taramanın öteki eşleşmeleri — hepsi YANLIŞ ALARM, ölçüldü
`avad↔ava` (0,86) · `bengal-sultanligi↔banjar/banten/ternate-sultanligi` ·
`ho-hanedani↔le-hanedani` (0,82) · `laos↔bali/gond/sidamo-kralliklari` ·
`madurai↔malaka/malva/mataram-sultanligi` · `tran-hanedani↔jin/mac/sur/
yuan-hanedani` (0,85).
Hepsi **gerçekten ayrı devletler**; benzerlik ortak ekten geliyor
(`-sultanligi`, `-hanedani`, `-kralliklari`). ⇒ Bu avın eşiği tek başına
karar veremez; `mogolistan/mogulistan` ayırt edilebilmesinin sebebi
**ölçüm**, benzerlik oranı değil.

---

---

# ✅ UYGULANDI — 52 KÖPRÜ YAZILDI (3 Ağustos, kilit kalktıktan sonra)

`data/devletler.js`e 52 satır `harita:"<id>"` eklendi. Araştırma
gerekmedi: id ile `BOYALAR` anahtarı birebir aynıydı.

```
harita: alanı olan kayıt      185 → 238   (+52 köprü +1 don-kazak)
denetlenebilen boya kimliği   172 → 225
denetlenemeyen kimlik          97 →  45   (kalan 44 künyesiz + turkmen)
denetime giren dönem        4.397 → 5.437  (+1.040)
kapsama                       %76  → %94
```

## 🔴 VE 24 GİZLİ HAYALET DÖNEM ORTAYA ÇIKTI

Anakronik dönem **189 → 213**. Bu bir kötüleşme değil, **köprü kurulunca
görünür hâle gelen borç** — dün de oradaydılar, araç bakamıyordu.

### En büyük yediler

```
meysur         124,5 yıl ×3   Bangalor · Seringapatam · Meysûr → 1923
                              künye 1761-1799, veri 1565-1923
maratha        105,4 yıl ×5   Gvalyar · İndor · Uccayn · Mandu · Kolhapûr → 1923
                              künye 1674-1818
navarra        108,2 yıl      Pau (Béarn) 1479→1620, künye 1512'de bitiyor
mataram-sult.   56,5 yıl      Surakarta 1745→1811, künye 1755'te bitiyor
ming-hanedani   17,0 yıl      Penghu 1624→1661, künye 1644'te bitiyor
malaka-sult.    16,4 yıl      Johor 1400→1528, künye 1511'de bitiyor
yuan-hanedani   13,3 yıl ×3   Kunming · Dali · Guiyang 1281→1382
vijayanagara    10,0 yıl ×2   Vellor · Arkot 1378→1656, künye 1646
timurlu         15,3 yıl      Kandehar 1370→1522
cungar           4 dönem
```

### 📌 VE ÖNEMLİ OLAN ŞU: ÇOĞUNDA VERİ DEĞİL KÜNYE DAR

Bu bulguların büyük kısmı "veri yanlış" demiyor; **künye, verinin
kastettiği gövdeyi kapsamıyor** diyor. Üç örnek, üçü de belgeli:

```
meysur       OTURUM-13-ILERLEME.md §B bunu ZATEN yazmış:
             "devletler.js 1761-1799 · bu dosya 1565-1923 · Vodeyar
              krallığının tamamı; boyanan toprak aynı"
             ⇒ Veri bilinçli. Künye Haydar Ali/Tipu ile sınırlı.
             Düzeltme künye tarafında: 1565-1923'e genişletilmeli mi,
             yoksa Vodeyar için ayrı kimlik mi? KARAR gerekiyor.
maratha      Gvalyar (Scindia) · İndor (Holkar) hânedanları 1818'den
             sonra da tahttaydı — İngiliz himayesinde prens devleti.
             Künye Konfederasyon'un sonunu (1818) alıyor, veri
             hânedanların sürekliliğini. İkisi de doğru, ölçüt farklı.
             ⇒ OTURUM-13'ün "İngiliz hâkimiyeti ≠ İngiliz Hindistanı"
               kararının aynı sınıfı; o karar burada da uygulanmalı.
navarra      Künyenin KENDİ kronolojisinde son madde şu:
             1620-10-19 "Kuzeydeki Béarn/Fransız kolu da Fransa'ya katıldı"
             ama t:"1512-07-25". ⇒ Kayıt kendi kendisiyle çelişiyor.
             En net düzeltme bu; yine de kaydı yazan oturumun kararı.
yuan-hanedani Kunming/Dali 1382'ye kadar Yuan — TARİHSEL OLARAK DOĞRU.
             Liang Prensi Yunnan'da 1382'ye kadar direndi. Künye
             1368'i (Dadu'nun düşüşü) alıyor.
             ⇒ §3.5.1'in tersi: "merkez düştü diye çevre otomatik
               devrolmaz" — burada çevre 14 yıl daha dayandı.
```

⚠️ **Hiçbirini tek taraflı düzeltmedim.** Beşi de karar gerektiriyor ve
üçünün verisi başka oturumların dosyasında. Ölçüm teslim, karar değil.

## ✅ Değişmezler — köprüler yazıldıktan sonra

```
Değişmez 1  ✓  1615 yerleşim, 55 sahipsiz (beklenen 55)
Değişmez 1b ✓  pencere arası boşluk 0
Değişmez 2  ✓  496 kırılma, 0 açık
Değişmez 2s ✗  620 yabancı kırılması, 119 açık (tavan 114)  ← değişmedi
Değişmez 2t ✗  kırılmasız madde 61 (tavan 49)               ← 52'den YÜKSELDİ
```
🔴 **`2t`nin 52 → 61 yükselişi BENDEN DEĞİL — ölçüldü.** `2t`,
`olaylar*.js` maddelerini `yerlesimler*.js` kırılmalarına karşı sayar;
bu oturumun düzenlemesi yalnız `devletler.js` künyelerine dokundu, o iki
dosyaya değil. Aracın kendi 2t defteri yeni 13 maddeyi sayıyor ve hepsi
r724 ile gelen CAPRAZ İBERYA kalemleri: Safi · Azemmûr · Mazagan ·
Agadir · Arzila · Cerbe · Tunus (1569 ve 1573) · Granbosa. `don-kazak`ın
altı kronoloji maddesinin hiçbiri listede yok.
📌 Yine de kayda geçiyor: **bir sayı yükseldiğinde "ben yapmadım" demek
yetmiyor, defteri açıp göstermek gerekiyor.**

---

## ÖNERİLEN İŞ SIRASI

```
① 52 KÖPRÜ SATIRI            devletler.js'e harita:"<id>" ekle
   sıfır araştırma · 1.040 dönem denetime girer · en yüksek getiri
② `mogolistan` künyesi+rengi  ikizini tamamla, karşılıklı bağ kur
③ `turkmen` kararı            devlet mi nüfus katmanı mı — SORU, iş değil
④ `zaporojye` gövdesi         PETEK/NOKTA'nın üç hücresi (aşağı bak)
⑤ Parti 3                     44 kimlik, sıra oturumlar/VERI-KIMLIK-3-PARTI3.md
```

### ④ hakkında — `zaporojye` gövdesi için hâlâ geçerli uyarı
Kimlik `1552 → 1775-06-16`. Atlas penceresi `1281 → 1923`. O üç hücrede
(Donets bozkırı · Don aşağısı · Harkov) **iki uçta sahip yok**:
```
1281 → 1552   271 yıl      1775 → 1923   148 yıl
```
Yalnız `zaporojye` yazılırsa Değişmez 1 iki yeni sahipsiz pencere görür.
İskelet (üçü de mevcut kimlik, yeni renk gerekmez): `altinorda` →
`kirim` → `zaporojye` → `rusya`. Devir günleri kaynakla konmalı ve
`§3.5.1` gereği iki uç da ölçülmeli.
📌 Ayrıntı ve TDV `ukrayna` tarihleri: `oturumlar/KIMLIK-ZAPOROG.md`
(o dosyanın künye taslağı GEÇERSİZ — kayıt zaten var; kronoloji ve
`tabi` önerisi ile zaman zinciri uyarısı geçerli).
