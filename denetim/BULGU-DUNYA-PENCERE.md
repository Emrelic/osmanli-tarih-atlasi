<!-- DURUM: BITTI | 2026-08-29 | DUNYA PENCERE | olcum + tasarim + ongoru -->
# DÜNYA PENCERESİ — ölçüm, tasarım, öngörü

**Oturum:** DÜNYA PENCERE · **Koordinatör:** ORHANGAZİ · **Model:** Opus
**Kapsam:** ölçüm ve tasarım. `arac/uret_petek.py`ye **dokunulmadı** (koşu kilidi).

> Emre: *"Böyle ilerleyelim, bir görelim bakalım ne çıkacak önümüze — tüm
> dünyayı açalım."*

---

## ÖZET — üç işin üçü de ölçüldü

```
③ SURE      koordinatorun tahmini 10-15 saat  →  OLCUM ~5s 15dk
            sebep: kosunun %89'u PENCEREYE DUYARSIZ bir asamada
② KUTU      box(-180,-60,180,85) DOGRU · 2609/2609 nokta iceride
            ±180 sarmasi: petek ATLAMAZ (0 site) ama KOMSULUK KAYBI VAR
① ESIK      hesaplanmis olcut bolgeleri TEMIZ AYIRIYOR (50 km → 942 km)
            🔴 ama COL'U YAKALAMIYOR — iki olcut RAKIP DEGIL, DIK
```

---

## ③ SÜRE — pencereye duyarlılık aşama aşama

### Ölçtüğüm
`kosu2_28agu.log`un ⏱ satırları sınıflandırıldı:

| sınıf | süre | aşamalar |
|---|---|---|
| 🔴 **pencereye duyarlı** | **303 sn (5,0 dk)** | kara maskesi 25 · göller 12 · kıyı kesimi+A1 74 · ada kuralı 39 · ızgara 8 · DEM 9 · Dijkstra 67 · A/B 59 · motor_kara 8 |
| 🟡 kısmî | 711 sn (11,8 dk) | çöl tavanı |
| 🟢 duyarsız | 448 sn (7,5 dk) | Voronoi 51 · kenar yaslama 13 · petek alanları 168 · varlık epokları 194 … |
| | **1462 sn = 24,4 dk** | loglanan toplam |

🔴 **Ve asıl maliyet loglanmamış aşamada:** *"Yabancı devlet gövdeleri"* —
ölçüm anında `devlet 330/396 · geçen 3s 38dk · %94` ⇒ tek başına ~3s 50dk,
**koşunun ~%89'u.**

### Bundan çıkardığım
**Koşu, pencereye duyarsız bir aşamanın hâkimiyetinde.** "3,55 kat" çarpanı
koşunun %89'una uygulanmaz.

O baskın aşamanın pencereye ne kadar duyarlı olduğu ayrıca ölçüldü:
```
veride kullanilan kimlik        394
pencere ICINDE noktasi olan     342
🔴 YALNIZ pencere DISINDA        52   inka · aztek · maya · cahokia ·
                                     haudenosaunee · mapuche · brezilya …
NOKTA  icinde 2430 · disinda 179 (%6,9)
```
⇒ Dünya penceresinde 342 → 394 devlet gerçek gövde üretir: **çarpan 1,15.**

```
pencereye duyarli   303 sn × 3,48   ≈ 17,6 dk
col tavani          711 sn × ~2     ≈ 24 dk
duyarsiz            448 sn          =  7,5 dk
yabanci govdeler    ~3s 50dk × 1,15 ≈ 4s 25dk
──────────────────────────────────────────────
TOPLAM              ≈ 5 saat 15 dk   (bant 4s 45 – 6s 30)
```
📌 Bugünkü koşu zaten ~4s 20dk sürüyor ⇒ **dünya penceresi ~1 saat ekliyor.**

### 🔴 Bu tahmini zayıflatan üç ölçmediğim
```
① 3,48 DERECE-KARE orani (14.980 → 52.200 deg²). Dijkstra izgarasi KARA
  izgarasidir; gercek carpan KARA ALANI oranidir ve OLCMEDIM.
  ⇒ Gercek carpan DAHA KUCUK olabilir.
② "Yabanci govdeler" carpanini DEVLET SAYISIYLA kurdum (1,15). Maliyet
  govde KARMASIKLIGI olabilir: Inka · Brezilya · Meksika AZ NOKTAYLA BUYUK
  POLIGON uretir. ⇒ Carpan 1,15'ten BUYUK olabilir. Olcmek icin kosu gerekir.
③ Col tavani "×2" bir KESTIRIM. Dunya col poligonunun bugunkune orani
  OLCULMEDI.
```

---

## ② PENCERE KUTUSU — `box(-180, -60, 180, 85)`

### (a) ve (b) — güney ve kuzey sınırı 🟢 DOĞRU

```
en GUNEY noktamiz   Te Waipounamu (Yeni Zelanda)  -44,0
en KUZEY noktamiz   Franz Josef Toprağı            80,33
                    Severnaya Zemlya  79,5 · Svalbard 78,23 · K.D. Grönland 76,77
box(-180,-60,180,85) icinde kalan nokta: 2609 / 2609   🟢 hicbiri disarida degil
```

🔴 **AMA NOKTA UÇ DEĞERİ SINIRI BELİRLEMEZ — KARA MASKESİ BELİRLER.**
`BOLGE` kara maskesini de kesiyor (`CLAUDE.md §11`de ölçülmüş: *"kara maskesi
zaten `bolge` ile kesiliyor"*). Yani noktamız olmayan bir kıyı da kesilir.
```
Tierra del Fuego   -55,9   ⇒ -50 kesilseydi Guney Amerika'nin UCU KOPARDI
Falkland           -51,7
Guney Georgia      -54,4
Gronland kuzey ucu  83,6   ⇒ 85 DOGRU, 83 yetmezdi
```
⇒ **-60 cömert değil, GEREKLİ.** *(Bunu neredeyse yanlış yazacaktım: yalnız
nokta uçlarına baksaydım "-50 yeterli, ızgarada %7 tasarruf" derdim ve
Patagonya'nın ucunu kesecektim.)*

### (c) 🔴 ±180 SARMASI — "en tehlikelisi ve kimse bakmadı"

**SORU: bir petek 179°D'den 179°B'ye atlayabilir mi?**
**CEVAP: HAYIR — ve sebebi ölçülebilir, kuramsal değil.**

Bir hücrenin meridyeni atlaması için tek bir poligonun hem `-179`da hem
`+179`da tepesi olması gerekir. Düzlemsel Voronoi'de bu ancak o enlem
kuşağında **başka site yoksa** olur.
```
Enlem kusagi ±5° · her site icin dogusunda/batisinda site var mi:
   IKI KENARA BIRDEN dayanan site: 0   🟢 HICBIRI
   dogu kenarina (+180) dayanan : 10
   bati kenarina (-180) dayanan : 13
```
⇒ **Hiçbir hücre meridyeni atlayamaz.**

### 🔴 AMA GERÇEK ZARAR BAŞKA: **KOMŞULUK KAYBI**
```
Bau (Fiji)      178,567 D  ← dogu kenarina dayaniyor
Lapaha (Tonga) -175,117 B  ← bati kenarina dayaniyor
GERCEK MESAFE    750 km
MOTORUN GORDUGU  353,7 DERECE
```
Motor onları komşu **saymaz**; aralarında ortak kenar oluşmaz. Aynısı yüksek
enlemde:
```
Anadır 177,48 D  ↔  Novoarkhangelsk (Sitka) -135,33 B
55-75 K kusaginda EN BUYUK IC BOSLUK: 113,4°  (-135,3 → -22,0)
```
⇒ Çukotka ile Alaska **hiç komşu olmaz.**

**Motor sarma için hiçbir şey yapmıyor** — `uret_petek.py` okundu (yalnız
okuma): `antimeridian`/`antimeridyen`/`dateline` **0 bulgu**; `wrap|sarma`
tek bulgu ve o stdout tamponu hakkında bir yorum; `360` aritmetiği yalnız
süre biçimlendirme ve bir açı hesabı.

### ② ÇIKARDIĞIM — ve önerim
Zarar **görsel değil YAPISAL**: gövdeler doğru çizilir (ada kuralı karaya
kırpar), ama **komşuluk ağı eksik kurulur.** Buna dayanan her şey — renk
çakışması ölçümü, sahiplik yayılımı, ortak kenar — Pasifik'te yanılır.

🟢 **Ucuz çare, kod değişikliği gerektirmez:** bugün etkilenen **tek çift
Fiji↔Tonga** (750 km) ve **Çukotka↔Alaska** (komşu değiller zaten, 113°
boşluk var). ⇒ **Dünya penceresi bu yüzden ERTELENMEMELİ.**
🔴 Ama Pasifik'e nokta eklendikçe (Samoa · Hawaii · Aleutlar) sorun **büyür**.
⇒ **Kaydedilmesi gereken bir borç**, çözülmesi gereken bir engel değil.

---

## ① SEYREK BÖLGE EŞİĞİ

### Ölçüt: her nokta için **en yakın 5 komşunun ortalama mesafesi (km)**

### Ölçtüğüm — ölçüt bölgeleri TEMİZ ayırıyor

| bölge | n | ortanca km | | bölge | n | ortanca km |
|---|---|---|---|---|---|---|
| Anadolu | 284 | **50** | | Çin | 263 | 198 |
| Rumeli/Balkan | 306 | 55 | | **Kuzey Amerika** | 35 | **406** |
| Arabistan | 143 | 129 | | Güney Amerika | 53 | 489 |
| Sahra altı Afrika | 251 | 137 | | Sibirya | 61 | 505 |
| **Sahra (çöl)** | 149 | **141** | | **Avustralya** | 14 | **942** |
| Hindistan | 126 | 152 | | | | |
| Güneydoğu Asya | 207 | 174 | | | | |

🟢 **Sıralama şartnamedeki km²/nokta tablosuyla örtüşüyor** — bağımsız iki
ölçüt aynı sırayı veriyor.

🟢 **Ve doğal bir kopma var:** Çin **198** → Kuzey Amerika **406**. Arada
hiçbir bölge yok, tam **2 kat** boşluk. Eşik oraya konur.

### Öneri: `SEYREK_ESIK_KM = 300`
```
> 200 km  618 nokta (%23,7)     ← Cin ve GDAsya'yi da yakalar, FAZLA GENIS
> 300 km  313 nokta (%12,0)     ← 🟢 ONERI
> 400 km  203 nokta (%7,8)      ← K.Amerika'nin ortancasini kil payi kacirir
ceyrekler: %25=77 · %50=119 · %75=194 · %90=344 · %95=505 · %99=942
```
🟢 **BAĞLAYICI OLDUĞU ÖLÇÜLDÜ: 313 nokta (%12,0) eşiği aşıyor.**
⚠️ Şartnamenin uyardığı tuzağa düşmedim: `COL_TAVAN_KM = 300` işlevsizdi
çünkü **hiçbir nokta onu aşmıyordu**. Bu eşik 313 noktada davranış
değiştirir — **işlevsiz değil.**

### (b) COĞRAFÎ mi HESAPLANMIŞ mı → **HESAPLANMIŞ**
Koordinatörün sezgisi ölçümle destekleniyor:
```
🟢 veri buyudukce KENDILIGINDEN gevser — Avustralya'ya 20 nokta eklenirse
   ortanca 942'den duser ve esik orayi BIRAKIR. Poligon birakmazdi.
🟢 bakim gerektirmez, bayatlamaz
🟢 sinir bolgelerinde YUMUSAK — poligon kenarinda ani sicrama yapar
```

### (c) 🔴 ÇÖL POLİGONUYLA ÇAKIŞIRSA HANGİSİ KAZANIR — **SORU YANLIŞ KURULMUŞ**

```
Sahra (col) ortanca seyreklik: 141 km    ← YOGUN bolgeler arasinda!
   Arabistan 129 · Sahra alti 137 · SAHRA 141 · Hindistan 152
```
🔴 **Hesaplanmış ölçüt Sahra'yı YAKALAMIYOR** — çünkü Sahra'ya **149 dolgu
noktası** kasten konmuş (`CLAUDE.md §3`: *"çölün emilip Osmanlı boyanmasını
engellemek için konmuş dolgu noktaları"*). Nokta yoğunluğu **yüksek**, ama
arazi **çöl.**

⇒ **İki ölçüt RAKİP DEĞİL, DİK:**
```
COL POLIGONU        "burasi COL"        → ARAZI CINSI
HESAPLANMIS OLCUT   "burada nokta AZ"   → VERI YOGUNLUGU

Sahra       col   AMA yogun   (141 km)  → yalniz poligon yakalar
Sibirya     col DEGIL, seyrek (505 km)  → yalniz hesaplanmis yakalar
Avustralya  KISMEN col, seyrek (942 km) → IKISI DE yakalar
Anadolu     ne col ne seyrek   (50 km)  → hicbiri
```
🟢 **CEVAP: `max(COL_PUAN_ESIK, SEYREK_PUAN_ESIK)` — biri ötekini ezmez.**
Hangisi daha kısıtlayıcıysa o uygulanır. *"Hangisi kazanır"* sorusunun
cevabı **"ikisi de, ve çakışma yok"**.

### 🔴 ÖLÇMEDİĞİM — bu öneriyi zayıflatan
```
· N=5 SECIMININ DUYARLILIGI. N=3 ya da N=10'da bolge siralamasi AYNI kalir mi
  OLCMEDIM. Esik N ile kayarsa oneri kirilgan demektir. ⇒ Uygulamadan once
  olculmeli; bir kosu gerektirmiyor, tek betik.
· ESIK DEGERININ (8 mi 6 mi 12 mi) ne olacagi. Sahra'da 8 CALISTI ama seyrek
  bolge icin AYNI degerin dogru oldugunu OLCMEDIM.
· Bu olcut PETEGE degil NOKTAYA ait. Bir petegin hangi noktanin seyrekligini
  kullanacagi (kendi sitesi mi, komsu ortalamasi mi) TASARIM KARARI, olculmedi.
```

---

## 🔴 ÖNGÖRÜ — koşudan ÖNCE yazıldı

### MAZERETİ OLMAYAN
```
① OSMANLI GOVDESI DEGISMEZ (±%0,5)
   1600 · 1700 · 1800 · 1900 · dogrudan + tabi TOPLAMI
   🔴 Tutmazsa: pencere kodu Osmanli'yi de etkilemis demektir, KOD YANLIS.
② ±180 SARMASI YOK — hicbir petek meridyeni atlamaz
   🟢 Bunu ONCEDEN olctum: 0 site iki kenara birden dayaniyor. Tutmazsa
     olcum yontemim yanlis demektir (enlem kusagi ±5° fazla dar olabilir).
③ ADA KURALI COK ATESLER — kitalar arasi deniz eklendi, sayac ARTMALI
```
### MAZERETİ OLABİLİR
```
④ kac km² boyandi · kac km² sahipsiz   (taban yok, ilk olcum)
⑤ sure ~5s 15dk (bant 4s45–6s30)       — ucunu de yukarida yazdim
⑥ bozuk kenar sayisi                   (yeni kiyi seritleri geldi)
⑦ COL TAVANI SURESI ×2 kestirimi       (olculmedi)
```

---

## Aletler (scratchpad, depoya girmedi)
```
dp_sure.py     asama pencereye-duyarlilik siniflandirmasi + pencere disi kimlikler
dp_sarma.py    ±180 kusagindaki noktalar · motor kodunda sarma araniyor
dp_sarma2.py   hangi site kutu kenarina dayaniyor · Pasifik boslugu
dp_seyrek.py   en yakin 5 komsu ortalamasi · bolge ortancalari · esik adaylari
```
