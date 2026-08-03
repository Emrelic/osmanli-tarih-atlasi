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
