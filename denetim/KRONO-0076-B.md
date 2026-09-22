# KRONO-0076-B — 24 madde · kronoloji 1883-1909

**Paket:** `parti-emrelic-0076` · **Şartname:** `oturumlar/ORTAK-0076.md` + `oturumlar/SEVK-0076.md`
**Teslim:** 23 Eylül 2026 · **Koordinatör:** YILDIRIM BAYEZIT

---

## 0. ÖZET — bir bakışta

| | sayı |
|---|---|
| Madde | **24 / 24** işlendi |
| Çapa kronoloji maddesi veride bulundu | **24 / 24** |
| Üretilen ek okuma kartı | **20** (19 sevkli + 1 ölçümden doğan) |
| Kartların çapası gerçek maddeye tutuyor | **25 / 25 bağ** (doğrulayıcıyla ölçüldü) |
| Geliştirici sesi ihlali | **0** |
| KOŞU İSTEYEN (nokta/hat eksiği) | **3 küme** |
| Kendi ölçümümü çürüttüğüm hüküm | **3** (§4 — ikisi veri, biri denetimin kendisi) |
| `CEVAP.json` | 19 başkasının anahtarı korundu + 24 benimki = **43** |

**Dosyalarım**
```
denetim/KRONO-0076-B-YAMA-ekokuma_p76e.js   -> window.EKOKUMA_P76E   (20 kart)
denetim/KRONO-0076-B-dogrula.js             yama doğrulayıcı (node ile koşar)
denetim/KRONO-0076-B-olc1..olc6.py          ölçüm betikleri
denetim/KRONO-0076-B-olc3/4/5.txt           ölçüm çıktıları
denetim/KRONO-0076-B.md                     bu rapor
```
🔴 `arac/` · `data/` · `js/` · `index.html` · `css/` — **hiçbirine dokunulmadı.**

---

## 1. SINIFLANDIRMA — gövdeler okunduktan sonra

Sevk, 164 maddeyi **başlıktan** sınıflandırmıştı. Gövdeleri okuyunca kümem şöyle bölündü:

| sınıf | sayı | maddeler |
|---|---|---|
| Saf **ek okuma** talebi | 17 | H-0067 H-0083 H-0084 H-0085 H-0086 H-0088 H-0089 H-0091 H-0092 H-0094 H-0100 H-0101 H-0102 H-0104 H-0105 H-0109 H-0110 |
| **Karma** (ek okuma + veri sorusu) | 2 | H-0074 · H-0112 |
| Saf **veri/harita ölçümü** | 5 | H-0070 H-0081 H-0082 H-0087 H-0103 |

Bu, kümemin **%79'unun** `data/ekokuma*.js` ailesine düştüğü anlamına geliyordu ve
aksaklık olarak bildirildi (M-5020). Koordinatörün hükmü (M-5022/M-5023): **numara
senindir, dosya ailesi değil** — 19 kartı ben ürettim.

---

## 2. İKİZ SINAVI — sevkin açıkça sorduğu iki çift

### H-0083 / H-0084 — **MÜKERRER DEĞİL, iki ayrı yüz**
Çapa maddeleri **aynı**: `olaylar_ek5.js:411` · `t:"1888-09-24"` ·
*"Haydarpaşa-Ankara demiryolu imtiyazının Almanlara verilmesi"*.
Gövdeler farklı:
- **H-0083** → Osmanlı demiryollarının **genel** gelişimi ve inşası.
- **H-0084** → **Alman** imtiyazının stratejik anlamı + Bağdat/Hicaz projelerinin amacı.

Örtüşme yalnız "Bağdat-Hicaz" ekseninde. **İki ayrı kart üretildi**
(`teknik-osmanli-demiryollari` · `sebep-sonuc-alman-imtiyazi-1888`); ikincisinin
sonunda Hicaz hattının niçin **bağışla** finanse edildiği ayrıca anlatılarak
çapraz bağ kuruldu. Hüküm `once-cozuldu` **değildir**.

### H-0087 / H-0088 — **başlık ikiz, gövde ALAKASIZ; H-0088 arızalı**
Her ikisinin başlığı `t:"1892-01-01"` · *"Tunus-Trablusgarp sınırı Gadames'e kadar
uzatıldı"* maddesine oturuyor.
- **H-0087** gövdesi konuyla ilgili: *"bu anlaşmada belirlenen koordinatlar haritada
  karşılık buluyor mu"*.
- **H-0088** gövdesi: *"İstanbul depremleri ile ilgili ek okumalar yapalım"* —
  1892 Tunus sınırıyla **hiçbir** ilgisi yok.

**ÖLÇÜM:** H-0088 bir **paket yakalama arızasıdır** — not yanlış çapaya iliştirilmiş.
Koordinatörün hükmü (M-5022 ②) uyarınca gerçek çapa **ölçülerek** arandı ve bulundu:

```
data/olaylar_ek14.js:147   t:"1894-07-10"   b:"1894 İstanbul depremi"
ayrıca  olaylar_ek7.js:23  t:"1509-09-14"   b:"İstanbul'da 'Küçük Kıyamet' depremi"
        olaylar_ek7.js:123 t:"1766-05-01"   b:"Büyük İstanbul depremi ve Fâtih Camii'nin yıkılması"
```
Kart bu **üç** çapaya birden bağlandı. Uydurma çapa açılmadı.

---

## 3. MADDE MADDE HÜKÜM

| madde | hüküm | ölçüm / gerekçe |
|---|---|---|
| H-0067 | cozuldu | Şeykan kartı. Çapa `kronoloji_misir.js:267` · `t:"1883-11-05"`. |
| H-0070 | olculecek | **Emre'nin sorusu ölçüldü, harita YANLIŞ DEĞİL** — §5. |
| H-0074 | cozuldu | Habeş eyaleti kartı. Emre'nin itirazı **haklı**: eyalet Etiyopya'yı değil Kızıldeniz kıyı şeridini kapsıyordu. |
| H-0081 | senin-kararin | Emre'nin saydığı üç yer de **VAR**; eksik olan başka üç sancak merkezi — §6.1. |
| H-0082 | kosu-bekliyor | Ras Ecdir noktası yok **ve** 1886 hattı hiç çizilmemiş — §6.3. |
| H-0083 | cozuldu | Genel demiryolu kartı. |
| H-0084 | cozuldu | Alman imtiyazı kartı + Bağdat/Hicaz çapraz bağı. |
| H-0085 | cozuldu | İttihâd-ı Osmânî kartı. |
| H-0086 | cozuldu | Râşidîler kartı. **Tarih çelişkisi bildirildi** — §7. |
| H-0087 | kosu-bekliyor | 1892 hattı hiç çizilmemiş — §6.3. |
| H-0088 | cozuldu | 🔴 **ÇAPA DEĞİŞTİRİLDİ** — §2 ve §8. |
| H-0089 | cozuldu | Dârülaceze + kurumlaşma kartı. |
| H-0091 | cozuldu | İngiltere'nin Sudan'a inme sebebi kartı. |
| H-0092 | cozuldu | Dömeke kartı. Savaş ilânı günü için kaynak farkı bildirildi. |
| H-0094 | cozuldu | Alman yakınlaşması kartı. |
| H-0100 | cozuldu | Mürzsteg kartı. |
| H-0101 | cozuldu | Yemen ısrarı kartı. |
| H-0102 | cozuldu | Yıldız Suikastı kartı — **fail konusunda hüküm verilmedi**, §8. |
| H-0104 | cozuldu | II. Meşrutiyet kartı (telgraf · Niyazi · cemiyet · kutlamalar). |
| H-0105 | cozuldu | Hicaz Demiryolu kartı. Film/popüler kültür **kapsam dışı** bırakıldı, §8. |
| H-0109 | cozuldu | 1908 seçimleri ve meclis kartı. Mebus sayısı **bulunamadı**, §8. |
| H-0110 | cozuldu | 31 Mart kartı — dört ayrı muhalefet kümesi ayrıştırıldı. |
| H-0112 | cozuldu | Bulgaristan sınırının üç aşaması kartı. |

---

## 4. 🔴 KENDİ ÖLÇÜMÜMÜ ÇÜRÜTTÜM — iki hükmüm yanlıştı

İlk turda (M-5020) iki "bulunamadı" hükmü verdim; ikisi de **sahteydi**. Sebep veri
değil, **kendi aramamdı** — literal dizgi karşılaştırması kullanmıştım.

| iddia ettiğim | gerçek |
|---|---|
| "Eski Zağra yerleşim noktası YOK" | **VAR** — `yerlesimler.js` `ad:"Eski Zağra (Stara Zagora)"` lat 42.425 lon 25.633. Kaçırma sebebi: ad **parantezli**. |
| "Gadames 0 satır" | **VAR** — `yerlesimler_afrika.js` `ad:"Ğadâmis"`. Kaçırma sebebi: baş harf **G değil Ğ**. Ayrıca `Derc (Derj)` de var. |

Düzeltme M-5026 ile aynı gece bildirildi.

**Alınan tedbir (B9):** `denetim/KRONO-0076-B-olc5.py` artık
① Türkçe harfleri **elde** eşler (`[^a-z]` süzgeci kullanmaz),
② parantezli adları **iki anahtarla** indeksler,
③ hüküm vermeden önce **9 pozitif vakayla ateşlenir** (Kıbrıs · Islahat · İslimye ·
Eski Zağra · Şarkî Rumeli · Tatarpazarcığı · Nâlût · Bi'rüssebi · Fâşoda → 9/9 OK).
Aynı sınav `denetim/KRONO-0076-B-dogrula.js` içinde de var; orada da bir **yanlış
pozitif** yakalandı ve düzeltildi: `/Emre/i` kalıbı *"emretti"* kelimesinin içinde
ateşleniyordu.

### 🔴 Üçüncü kör nokta — denetim kendini doğruladı
`CEVAP.json` yazıcısının ilk koşusunda ekrana **"BENİM 24 ANAHTARIM YAZILDI MI:
EVET (24/24)"** basıldı. Sözlükte **23** anahtar vardı: **H-0103 sessizce
düşmüştü.** Sebep, denetimin kendi sözlüğünün uzunluğuna bakmasıydı — yani
*"yazdıklarımı yazdım mı"* sorusunu soruyordu, *"yazmam gerekenleri yazdım mı"*
sorusunu değil. Bir kümeyi kendisiyle karşılaştıran denetim her zaman temiz çıkar.
**Tedbir:** sevkin verdiği 24 numaralık liste betiğe **ayrıca** yazıldı,
`assert len(SEVK) == 24` konuldu ve karşılaştırma artık sözlüğe değil **sevke**
karşı yapılıyor. Toplam da ayrıca basılıyor
(`19 başkasının + 24 benim = 43 · gerçek: 43`).

---

## 5. H-0070 — "Mehdî Doğu Sudan'a uçakla mı geldi?"

**Cevap: harita yanlış değil; 1884'te Mehdî devleti gerçekten bitişik değildi.**

`s:` kırılmalarını batıdan doğuya sıraladım:

| yer | lon | `mehdi` olduğu gün |
|---|---|---|
| Kordofan | 29.50 | 1882-09-07 |
| Kordofan (Ubeyyid) | 30.22 | 1882-09-07 |
| **Tokar** | **37.73** | **1884-01-01** · `enklav:true` |
| Berber | 33.98 | 1884-05-01 |
| Dongola | 30.47 | 1885-01-26 |
| Fâşoda | 32.12 | 1885-01-26 |
| Hartum | 32.56 | 1885-01-26 |
| Sennar | 33.62 | 1885-01-26 |
| Kesela | 36.40 | 1885-01-26 |

**1884-01-01 → 1884-05-01 penceresinde** Mehdî'nin doğuda tek noktası Tokar, batıda
Kordofan; arası (Berber · Hartum · Dongola · Sennar · Kesela) hâlâ Mısır. Emre'nin
gördüğü boşluk **o yılın gerçeğidir** ve veride zaten `enklav:true` ile beyan
edilmiş.

**Niçin uçakla gelmediler:** TDV `osman-dikne` maddesi ölçüldü — Doğu Sudan'daki
Mehdî emîri Osman Dikne **Sevâkinli** (1836 doğumlu rivayeti) ve Mehdî tarafından
**Bece kabilelerine** emîr tayin edilmiş. Yani doğudaki ayaklanma yereldir; batıdan
yürüyen bir ordu değil. Kaynak, 5 Ağustos 1883'ten 12 Mart 1884'e kadar dokuz
çarpışmayı gün gün veriyor. Bu ölçüm `kimdir-osman-dikne` kartına dönüştürüldü
(sevkli 19'a **ek**).

### 🟡 Yan bulgu — iki tarih çelişkisi (benim kalemim değil, bildiriyorum)
1. **Ubeyyid:** veri `1882-09-07`, TDV `sudan` *"Ubeyyid'e girdi (19 Ocak 1883)"*.
   Fark ~4,5 ay. Muhtemelen biri kuşatmanın başı, öteki şehrin düşüşü.
2. **Kesela:** veri `1885-01-26` → `mehdi`; TDV `osman-dikne` *"8 Şubat 1884 …
   Keselâ'yı ele geçirdi"*. Fark ~1 yıl.
3. **Tokar:** veri `1884-01-01` — bu bir **gün bilinmiyor** dolgusudur. TDV
   `osman-dikne` Doğu Sudan çarpışmalarını gün gün sayıyor ama **Tokar'ın teslim
   gününü vermiyor**. `bulunamadı`.

---

## 6. 🔴 KOŞU İSTEYEN — nokta ve hat eksikleri

> Koordinatörün istediği biçimde: **koordinat + kaynak** ile.
> ⚠️ Kaynak notu: TDV koordinat vermez. Aşağıdaki enlem/boylamların
> **hangisinin nereden geldiği** her satırda ayrı yazıldı; "atlasın kendi
> koordinatı" olanlar **dayanak sayılmaz**, doğrulanmadan yazılmamalıdır.

### 6.1 H-0081 — Şarkî Rumeli vilâyeti: 6 sancaktan 3'ünün merkezi yok

**KAYNAK (TDV `bulgaristan`, gövde okundu):** Doğu Rumeli vilâyeti
**Filibe, İslimye, Eski Zağra, Tatarpazarcığı, Burgaz ve Hasköy** sancaklarından
oluşturuldu. Altı sancak.

| sancak merkezi | havuzda | not |
|---|---|---|
| Filibe | ✓ `yerlesimler.js` lat 42.144 lon 24.750 | `v:` 1878-07-13→1885-09-18 `kid:"sarki-rumeli"` |
| Eski Zağra (Stara Zagora) | ✓ `yerlesimler.js` lat 42.425 lon 25.633 | aynı `v:` |
| Tatarpazarcığı | ✓ `yerlesimler.js` lat 42.192 lon 24.333 | aynı `v:` |
| **İslimye (Sliven)** | 🔴 **YOK** | önerilen ≈ **42.685 K · 26.329 D** |
| **Burgaz (Burgas)** | 🔴 **YOK** | önerilen ≈ **42.506 K · 27.468 D** |
| **Hasköy (Haskovo)** | 🔴 **YOK** | önerilen ≈ **41.934 K · 25.556 D** |

🔴 **Koordinatların kaynağı:** TDV bu maddede **koordinat vermiyor**; yukarıdakiler
şehirlerin bilinen coğrafî konumlarıdır ve **ayrıca doğrulanmalıdır**. Kaynağın
verdiği ve burada dayanak olan şey **hangi altı sancağın vilâyete girdiğidir**,
noktaların yeri değil.

**Emre'nin sorusunun cevabı (H-0081):** saydığı üç yerin **üçü de haritada var**.
Ama vilâyetin altı sancak merkezinden üçü havuzda yok; vilâyetin doğu yarısı
(Burgaz kıyısı · İslimye havzası) **noktasız**. Petek motorunda noktasız bölge en
yakın peteğe emildiğinden, ekrandaki Doğu Rumeli şekli **vilâyetin sınırı değil, üç
noktanın Voronoi'sidir**. Karar Emre'nin: üç nokta eklenirse şekil vilâyete yaklaşır.

*(Havuzda ayrıca `Yanbolu (Yambol)` ve `Kırcaali` var; ikisi de sancak merkezi
değil. Vilâyetin öteki kazalarından Yeni Zağra · Kızanlık · Çırpan · Ahyolu ·
Mesemvri · Sozopol · Karînâbâd · Aydos · Rupçoz · Ahıçelebi de havuzda yok.)*

### 6.2 H-0103 — Refah-Taba hattı: hat çizili, iki ucu da noktasız

**ÖLÇÜLDÜ:** `d1906-filistin-misir-hidivlik` **VAR** — `f:"1906-10-01"`,
`t:"1914-12-18"`, `kategori:"E"`, 22 noktalı `hat`.
⇒ **Emre'nin tahmini doğru**, madde gerçekten bir sınır hattını tarif ediyor ve o
hat zaten çizili.

Ama hattın **tarif ettiği iki uçta yerleşim noktası yok**:

| yer | havuzda | hattın kendi ucu |
|---|---|---|
| **Taba** | 🔴 YOK | hattın GÜNEY ucu: lon **34.8691** lat **29.4806** |
| **Refah** | 🔴 YOK | hattın KUZEY ucu: lon **34.2484** lat **31.2114** |
| Akabe · Nahl · Bi'rüssebi · Kusayme | 🔴 YOK | — |
| El-Arîş · Gazze · Süveyş | ✓ var | — |

🔴 **Kaynak uyarısı:** yukarıdaki koordinatlar **atlasın kendi hat verisinden**
okundu. `CLAUDE.md §4` gereği **atlas referans değildir** — bu sayılar nokta
eklemek için kullanılacaksa dış kaynakla doğrulanmalıdır. Burada ölçülen tek şey
şudur: *hat nereye kadar çizilmiş.*

### 6.3 H-0082 + H-0087 — kronoloji "sınır çizildi" diyor, harita 24 yıl boş

**ÖLÇÜLDÜ:** 1886 ve 1892 düzenlemeleri için `d_sinirlar*` kaydı **SIFIR**.
Çizilen en eski hat:

```
d1910-libya-tunus-osmanli            f:1910-05-19  t:1912-10-18  57 nokta
   Akdeniz ucu (= Ras Ecdir): lon 11.5252 lat 33.1771
   güney ucu (≈ Gadames)    : lon  9.5017 lat 30.2203
d1910-libya-cezayir-gadames-osmanli  f:1910-05-19  t:1912-10-18   5 nokta
```

Kronoloji ise iki kez sınır çizildiğini söylüyor:
`kronoloji_sinir_ortadogu.js:11` (`t:"1886-01-01"`, kıyı kesimi) ve
`:12` (`t:"1892-01-01"`, Gadames'e kadar). Her ikisinin `yer_id`'si **boş**.

**Eksik nokta:** **Ras Ecdir** — hattın Akdeniz ucu ve 1886 düzenlemesinin tam
konusu (Emre'nin *"bu maddenin haritada noktası yok, koyalım"* dediği yer).
Havuzda **yok**. Ayrıca Sinâven · Dehibat · Remada yok; Ğadâmis · Derc · Nâlût ·
Zuvâre · Bin Gerdân · Tatavin · Medenîn **var**.

🔴 **HAT İÇİN ÖNERİM — ve niçin "1910 geometrisini kopyala" DEMİYORUM:**
`d1910-libya-tunus-osmanli` ile `d1923-libya-tunus` **birebir aynı 57 noktayı**
taşıyor. Aynı geometriyi 1886'ya ve 1892'ye de kopyalamak **sahte kesinlik** olur:
1886 düzenlemesi yalnız **kıyı kesimini**, 1892 ise **Gadames'e kadarki** kesimi
çizmişti ve bu iki hattın gerçek güzergâhı elimdeki kaynaklarda **yok**.
⇒ Şemanın zaten desteklediği yol kullanılmalı: `d_sinirlar_amerika.js`teki
`"kategori":"D-YOK", "hat":null, "kutu":[...]` kalıbı. Böylece "burada bir hat
vardı ama güzergâhı bilinmiyor" **beyan edilmiş** olur, uydurulmuş olmaz.
Bu bir kalem kararıdır; hükmü koordinatörün.

---

## 7. H-0086 — Müleydâ: üç ayrı tarih, hiçbiri kaynaklı değil

| nerede | değer |
|---|---|
| paket başlığı | 21 Ocak 1891 |
| `data/olaylar_ek16.js:366` | `t:"1891-01-01"` · `gun:"21 Ocak 1891"` |
| `data/devletler.js:1538` ve `:1562` | `1891-01-24` |

**KAYNAĞA SORULDU:**
- TDV `residiler`: Müleydâ **adı hiç geçmiyor**.
- TDV `suudiler`: savaşın taraflarını veriyor (Abdurrahman b. Faysal ×
  Muhammed b. Reşîd), **YIL veriyor (1891)**, **gün vermiyor**.

⇒ `CLAUDE.md §4` (hassasiyet kaynağı aşamaz): kaynak **yıl** diyor, gün
desteklenmiyor. Kart **yıl hassasiyetinde** yazıldı ve bu açıkça beyan edildi.
`devletler.js`teki `1891-01-24` **bir kaynak değildir** ve delil sayılmamıştır.
Veriyi ben düzeltmedim — `devletler.js` benim dosyam değil; **21 ↔ 24 farkı
koordinatöre bildirilir.**

---

## 8. `bulunamadı` — aranıp bulunamayanlar (ÖLÇÜM SONUCUDUR)

| ne arandı | sonuç |
|---|---|
| Müleydâ Savaşı'nın **günü** | iki TDV maddesinde de yok (§7) |
| Tokar'ın Mehdî'ye geçiş **günü** | `osman-dikne` dokuz çarpışmayı sayıyor, Tokar'ı vermiyor |
| 1894 depreminin **can kaybı** | `zelzele` gövdesinden çekilen rakamların **hangi depremi** tarihlediği ayırt edilemedi → karta **yazılmadı** |
| 1908 meclisinin **mebus sayısı ve etnik dağılımı** | `meclis-i-mebusan` ve `mesrutiyet` gövdeleri rakam vermiyor |
| Yıldız Suikastı'nın **faili ve saiki** | `abdulhamid-ii` gövdesi konuyu **kapsamıyor** → kartta hüküm **verilmedi** |
| Arabistanlı Lawrence filmi / popüler kültür (H-0105) | TDV **kapsam dışı**; kartta anılmadı |

### TDV tuzakları — yaşananlar ve çözümleri
| slug | ne oldu | çözüm |
|---|---|---|
| `habesistan` | gövde yalnız *"bk. ETİYOPYA"* (canlı yönlendirme kütüğü) | `habes-eyaleti` slugunda asıl madde bulundu |
| `demiryolu` | müstakil madde yok, arama sayfası döndü | `rumeli-demiryolu` + `bagdat-demiryolu` |
| `domeke-muharebesi` | **0 sonuç** | TDV olay değil yer-kişi ansiklopedisi: `arama/?q=dömeke` → `gazi-edhem-pasa` okundu |
| `abdulhamid-ii` | gövde çekildi ama 1905 suikastını kapsamıyor | `tevfik-fikret`ten şiirin yüzü alındı, fail **yazılmadı** |

---

## 9. ÜRETİLEN KARTLAR — `window.EKOKUMA_P76E` (20)

| # | id | tür | madde |
|---|---|---|---|
| 1 | `sebep-sonuc-seykan-1883` | sebep-sonuc | H-0067 |
| 2 | `kimdir-osman-dikne` | kimdir | H-0070 (ölçümden doğan **ek** kart) |
| 3 | `teknik-habes-eyaleti` | teknik-bilimsel | H-0074 |
| 4 | `teknik-osmanli-demiryollari` | teknik-bilimsel | H-0083 |
| 5 | `sebep-sonuc-alman-imtiyazi-1888` | sebep-sonuc | H-0084 |
| 6 | `sebep-sonuc-ittihadi-osmani-1889` | sebep-sonuc | H-0085 |
| 7 | `kimdir-sammar-hail-residileri` | kimdir | H-0086 |
| 8 | `teknik-istanbul-depremleri` | teknik-bilimsel | H-0088 (**çapa değişti**) |
| 9 | `teknik-darulaceze-ve-hayir-kurumlari` | teknik-bilimsel | H-0089 |
| 10 | `sebep-sonuc-ingiltere-sudan-1896` | sebep-sonuc | H-0091 |
| 11 | `savas-hikayesi-domeke-1897` | savas-hikayesi | H-0092 |
| 12 | `sebep-sonuc-alman-osmanli-yakinlasmasi-1898` | sebep-sonuc | H-0094 |
| 13 | `sebep-sonuc-murzsteg-1903` | sebep-sonuc | H-0100 |
| 14 | `sebep-sonuc-yemen-israri` | sebep-sonuc | H-0101 |
| 15 | `tartisma-yildiz-suikasti-1905` | tartisma | H-0102 |
| 16 | `sebep-sonuc-ikinci-mesrutiyet-1908` | sebep-sonuc | H-0104 |
| 17 | `teknik-hicaz-demiryolu` | teknik-bilimsel | H-0105 |
| 18 | `teknik-1908-secimleri-ve-meclis` | teknik-bilimsel | H-0109 |
| 19 | `tartisma-otuzbir-mart-1909` | tartisma | H-0110 |
| 20 | `teknik-bulgaristan-sinirinin-cizilisi` | teknik-bilimsel | H-0112 |

**Okunan ve kullanılan TDV maddeleri (20):** `sudan` · `osman-dikne` ·
`habes-eyaleti` · `bagdat-demiryolu` · `rumeli-demiryolu` · `hicaz-demiryolu` ·
`almanya` · `ittihat-ve-terakki-cemiyeti` · `mesrutiyet` · `meclis-i-mebusan` ·
`otuzbir-mart-vakasi` · `tevfik-fikret` · `yemen` · `residiler` · `suudiler` ·
`darulaceze` · `makedonya` · `bulgaristan` · `zelzele` · `gazi-edhem-pasa`
(ayrıca çapa metinleri için `istanbul` ve `fatih-camii-ve-kulliyesi`).

`gorsel:` **hiçbir kartta yok** — kamu malı/CC0 olduğu doğrulanmış görsel bulunamadı.

### Doğrulayıcı çıktısı
```
① SOZDIZIMI OK · kart sayisi: 20
② SEMA: OK (0 hata)
   B9 POZITIF KANIT (yasak sesle dolu deneme cumlesi): SUZGEC CALISIYOR (5/9 kalip)
③ GELISTIRICI SESI: OK (0 ihlal)
   (kronoloji havuzu: 12247 madde)
   B9 POZITIF KANIT (1908-07-23|Meşrutiyet'in ilanı): TUTTU
④ CAPA: OK (25/25 bag tutuyor, hepsi bir kronoloji dosyasina)
SONUC: YAMA GECERLI
```
Koşturmak için: `node denetim/KRONO-0076-B-dogrula.js`

---

## 10. KOORDİNATÖRE AÇIK KALEMLER

1. **Yükleyici satırı** — `js/app.js` `_EKOKUMA_DOSYA_ADLARI` dizisine dosya adı
   eklenecek. Değişken: **`window.EKOKUMA_P76E`**. `index.html`e dokunulmadı.
2. **H-0081** → Emre'nin kararı: üç sancak merkezi (İslimye · Burgaz · Hasköy)
   eklensin mi? Koordinatlar §6.1'de, **doğrulanması şartıyla**.
3. **H-0103** → Refah ve Taba noktaları. Koordinatlar hattın kendi ucundan; dış
   kaynakla doğrulanmalı.
4. **H-0082/H-0087** → Ras Ecdir noktası **ve** 1886/1892 hat kayıtları.
   Önerim `D-YOK` + `kutu`; hüküm sende (§6.3).
5. **H-0086** → `devletler.js`teki `1891-01-24` ile `olaylar_ek16.js`teki
   `21 Ocak 1891` çelişiyor, ikisi de kaynaksız. Senin dosyan.
6. **Sudan tarih çelişkileri** → Ubeyyid (~4,5 ay) ve Kesela (~1 yıl), §5.
