# OTURUM 13 — KIRIM: YEDİ NOKTA PAKETİ

Kalibrasyon çelişkisi çözüldükten sonra (`OTURUM-13-ANADOLU.md` §21-§22)
uygulanabilir hâle gelen yedi noktalık öneri. **Yeni devlet kimliği
gerekmiyor** — dördü de `renkler.py`'de tanımlı: `altinorda` · `kirim` ·
`ceneviz` · `rusya`. DSATUR dengesi bozulmuyor.

---

## 1. Bugünkü durum — yarımadada dört nokta

| Nokta | Konum | Zincir |
|---|---|---|
| Kefe | 45,032K 35,382D | `ceneviz` → `d:` 1475-06-06 → `rusya` 1771-07-01 |
| Kerç | 45,356K 36,467D | `ceneviz` → `d:` 1475-06-06 → `rusya` 1774-07-21 |
| Taman | 45,203K 36,717D | `ceneviz` → `d:` 1482-06-01 → `rusya` 1774-07-21 |
| Bahçesaray | 44,753K 33,861D | `altinorda` → `kirim` 1441 → `v:` 1475-06-06 → `rusya` 1771 → `kirim` 1774-07-21 → `rusya` 1783-04-08 |

⇒ Dördünün **üçü** Kerç boğazı ucunda kümelenmiş. Batı ve orta Kırım'ın tek
noktası Bahçesaray. Ölçülen sonuç: yarımadada **Kefe ↔ Bahçesaray dikey orta
dikmesi 127,4 km tek parça kenar** — 154,7 km'lik bütün iç sınırın %82'si.

Yaklaşık yüzölçüm 26.900 km²:
**bugün 6.725 km²/petek → yedi nokta sonrası 2.445 km²/petek** (Bitinya 1.203).

---

## 2. `d:` / `v:` ayrımı — TDV'den doğrudan

Bu ayrım tahmin değil; iki canlı madde **iddiayı içeriyor**:

> **`kirim`** ✔ — *"Kerç'ten itibaren Balıklava'ya kadar uzanan sahiller
> doğrudan Osmanlı kontrolü"* altındaydı. Hanlığın merkezleri: **Bahçesaray**
> (Han Sarayı) · **Akmescid** (kalgayların merkezi) · **Karasubazar** ·
> **Gözleve** (önemli liman) · **Or Kapı/Perekop** (veliahtların mevki yeri).

> **`kefe`** ✔ — Kefe sancağı beş kazadan oluşuyordu: **Mangub, Sudak
> (Suğdak), Kerç, Azak, Taman**; ayrıca *"Balıklagu (Balıklava) ve
> **İnkerman**"* önemli tâbi yerleşimlerdi.

⇒ Koordinatörün önerdiği bölünme **birebir doğrulandı**:
`v:` Karasubazar · Akmescid · Gözleve · Or Kapı — hanlık
`d:` Sudak · Balaklava · İnkirman — Kefe sancağı

## 3. Zincirin dört kırılma günü — hepsi TDV'de

| Gün | Ne | Kaynak |
|---|---|---|
| `1441-01-01` | Hacı Giray'ın hanlığı | `kirim` ✔ *"adını taşıyan en eski para 845 (1441-42) tarihini taşır"* — **yıl doğru, gün bilinmiyor** |
| `1475-06-06` | Gedik Ahmed Paşa'nın fethi | `kefe` ✔ *"Safer 880 / **Haziran 1475**"* — ⚠️ **ay doğrulandı, GÜN TDV'de yok**; `06` verinin mevcut kabulüdür (Kefe·Kerç·Azak aynı günü taşıyor) |
| `1774-07-21` | Küçük Kaynarca | `kirim` ✔ *"21 Temmuz 1774"* — **birebir** |
| `1783-04-08` | Rus ilhakı | `kirim` ✔ *"8 Nisan 1783"* — **birebir** |
| `1771-07-01` | Dolgorukov'un işgali | `kirim` ✔ · `kefe` ✔ *"işgal edildi (1771)"* — **yıl doğru, gün/ay TDV'de yok** |

---

## 4. 🔴 Paketten ÖNCE çıkan bir kusur — Kefe 1774-1783

Mevcut veri Kefe'yi **1771'de** kalıcı olarak Rusya'ya veriyor. TDV bunu
desteklemiyor:

> **`kefe`** ✔ — 1771'de işgal edildi; **1777'de ikinci bir Rus saldırısı**
> oldu; **1783'te** *"kesin olarak Rus hâkimiyeti altına"* girdi.

⇒ 1774 Küçük Kaynarca'sıyla Kefe Osmanlı'ya **geri dönmüştür**; 1774-1783
arası dokuz yıl veride yanlış. Ve bu, Bahçesaray'ın modeliyle de çelişiyor:
Bahçesaray 1774-07-21'de `kirim`'e (müstakil hanlık) dönüyor, Kefe dönmüyor.

📌 **Yeni üç `d:` noktası bu kusuru miras almamalı.** Aşağıdaki paket
düzeltilmiş zinciri kullanıyor ve **Kefe'nin kendisi için de düzeltme
öneriyor** — yoksa Sudak (Kefe'ye 38 km) 1774-1783 arası Osmanlı, Kefe Rus
görünür ve haritada görünür bir çelişki doğar.

⚠️ İkinci bir tutarsızlık ölçüldü ama **dokunulmadı**: Kefe 1771'de,
Kerç 1774'te Osmanlı'dan çıkıyor. Kerç/Yenikale gerçekten Küçük Kaynarca ile
**kalıcı olarak** devredildiği için Kerç'in tarihi doğru; düzeltilmesi
gereken Kefe'dir.

---

## 5. 🔧 PAKET — yedi kayıt

Mükerrer denetimi yapıldı: en yakın mevcut noktaya uzaklıklar
**25,8 – 157,1 km**; 3 km kuralını ihlal eden yok. Ad çakışması yok.
Hepsi `BOLGE = box(-12, 1.5, 62, 62)` penceresinin içinde.

### 5.1 Hanlık — `v:` (dört nokta)

```js
// TDV KIRIM: hanlığın merkezleri Bahçesaray, Akmescid (kalgay), Karasubazar,
// Gözleve (liman), Or Kapı (veliaht mevkii). Zincir Bahçesaray'ınkiyle aynı.
{ ad:"Karasubazar", tur:"sehir", lat:45.0553, lon:34.6003, g:0, k:3, m:"Bahçesaray",
    s:[{f:"1281-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1475-06-06",d:"kirim"},
       {f:"1771-07-01",t:"1774-07-21",d:"rusya"},{f:"1774-07-21",t:"1783-04-08",d:"kirim"},
       {f:"1783-04-08",t:"1923-10-29",d:"rusya"}],
    v:[{f:"1475-06-06",t:"1771-07-01"}] },
{ ad:"Akmescid (Simferopol)", tur:"sehir", lat:44.9521, lon:34.1024, g:0, k:3, m:"Bahçesaray",
    s:[{f:"1281-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1475-06-06",d:"kirim"},
       {f:"1771-07-01",t:"1774-07-21",d:"rusya"},{f:"1774-07-21",t:"1783-04-08",d:"kirim"},
       {f:"1783-04-08",t:"1923-10-29",d:"rusya"}],
    v:[{f:"1475-06-06",t:"1771-07-01"}] },
{ ad:"Gözleve (Yevpatoriya)", tur:"liman", lat:45.1904, lon:33.3667, g:0, k:4, m:"Bahçesaray",
    s:[{f:"1281-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1475-06-06",d:"kirim"},
       {f:"1771-07-01",t:"1774-07-21",d:"rusya"},{f:"1774-07-21",t:"1783-04-08",d:"kirim"},
       {f:"1783-04-08",t:"1923-10-29",d:"rusya"}],
    v:[{f:"1475-06-06",t:"1771-07-01"}] },
{ ad:"Or Kapı (Perekop)", tur:"kale", lat:46.1611, lon:33.6892, g:0, k:4, m:"Bahçesaray",
    s:[{f:"1281-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1475-06-06",d:"kirim"},
       {f:"1771-07-01",t:"1774-07-21",d:"rusya"},{f:"1774-07-21",t:"1783-04-08",d:"kirim"},
       {f:"1783-04-08",t:"1923-10-29",d:"rusya"}],
    v:[{f:"1475-06-06",t:"1771-07-01"}] },
```

### 5.2 Kefe sancağı — `d:` (iki nokta + biri koşullu)

```js
// TDV KEFE: sancak Mangub, Sudak, Kerç, Azak, Taman kazalarından oluşuyordu;
// Balıklava ve İnkerman önemli tâbi yerleşimlerdi.
// TDV KIRIM: "Kerç'ten itibaren Balıklava'ya kadar uzanan sahiller doğrudan
// Osmanlı kontrolü" altındaydı.
{ ad:"Sudak", tur:"liman", lat:44.8492, lon:34.9744, g:0, k:3, m:"Kefe",
    s:[{f:"1281-01-01",t:"1475-06-06",d:"ceneviz"},
       {f:"1771-07-01",t:"1774-07-21",d:"rusya"},{f:"1783-04-08",t:"1923-10-29",d:"rusya"}],
    d:[{f:"1475-06-06",t:"1771-07-01"},{f:"1774-07-21",t:"1783-04-08"}] },
{ ad:"Balaklava", tur:"liman", lat:44.5006, lon:33.5992, g:0, k:4, m:"Kefe",
    s:[{f:"1281-01-01",t:"1475-06-06",d:"ceneviz"},
       {f:"1771-07-01",t:"1774-07-21",d:"rusya"},{f:"1783-04-08",t:"1923-10-29",d:"rusya"}],
    d:[{f:"1475-06-06",t:"1771-07-01"},{f:"1774-07-21",t:"1783-04-08"}] },
```

### 5.3 🟡 İNKİRMAN — koşullu, iki çözülmemiş nokta var

```js
{ ad:"İnkirman", tur:"kale", lat:44.6047, lon:33.6103, g:0, k:4, m:"Kefe",
    s:[{f:"1281-01-01",t:"1475-06-06",d:"ceneviz"},          // ⚠️ bkz. aşağı
       {f:"1771-07-01",t:"1774-07-21",d:"rusya"},{f:"1783-04-08",t:"1923-10-29",d:"rusya"}],
    d:[{f:"1475-06-06",t:"1771-07-01"},{f:"1774-07-21",t:"1783-04-08"}] },
```

| Sorun | Açıklama |
|---|---|
| **1475 sonrası** | ✅ **kaynaklı** — `kefe` İnkerman'ı sancağın tâbi yerleşimi sayıyor |
| **1475 öncesi kimlik** | 🔴 `ceneviz` **muhtemelen yanlış**. İnkirman (Kalamita) Ceneviz'in değil **Teodoro/Mangup** beyliğinindi. `renkler.py`'de `teodoro` diye kimlik **yok** ve TDV'de `mangup` maddesi **yok** — ne kimlik yazılabiliyor ne kaynak bulunabiliyor |
| **1475 fetih günü** | 🔴 Mangup, Kefe'den **aylar sonra** düştü; `1475-06-06` en çok **6 ay erken**. TDV bu tarihi vermiyor |
| **Yoğunluk değeri** | 🟡 Bahçesaray'a **25,8 km** — yedi noktanın en az kazanç getireni |

📌 **Tavsiyem: İnkirman'ı şimdilik YAZMA.** İki kusuru da kaynaksız,
kazancı da en düşük. Altı nokta yoğunluğun %95'ini zaten sağlıyor.
Karar merkezin; kayıt yukarıda hazır duruyor.

### 5.4 Kefe düzeltmesi (paketin parçası)

```
Kefe: d:[{f:"1475-06-06",t:"1771-07-01"}]
   →  d:[{f:"1475-06-06",t:"1771-07-01"},{f:"1774-07-21",t:"1783-04-08"}]
   ve s: içindeki rusya 1774-07-21>1923-10-29 → 1783-04-08>1923-10-29
```

---

## 6. Paket üzerinde koşulan denetimler — hepsi temiz

Yedi kaydın zinciri betikle sınandı (`kirim_dogrula.py`), yamadan önce:

| Denetim | Sonuç |
|---|---|
| Zincir sürekliliği (boşluk · çakışma · sıfır uzunluk) | **7/7 TEMİZ** — 1281-01-01'den 1923-10-29'a kesintisiz |
| Harita penceresi `box(-12, 1.5, 62, 62)` | **7/7 içinde** |
| Paket içi mükerrer (3 km eşiği) | en küçük mesafe **11,6 km** (Balaklava ↔ İnkirman) — ihlal yok |
| Mevcut noktalara mesafe | **25,8 – 157,1 km** — ihlal yok |
| Yoğunluk | 6.725 → **2.690** (altı nokta) → **2.445** km²/petek (yedi nokta) |

📌 İnkirman'ın katkısı 2.690 → 2.445, yani toplam iyileşmenin **%6'sı**.
Balaklava'ya 11,6 km olması bunu doğruluyor — §5.3'teki "yazma" tavsiyesinin
sayısal karşılığı budur.

### Yamadan sonra koşulacaklar
- **Değişmez 1** — sayı **34** kalmalı (zincirler kesintisiz olduğu için
  değişmemeli).
- **Değişmez 2** — dört kırılma günü açılıyor: `1475-06-06` · `1771-07-01` ·
  `1774-07-21` · `1783-04-08`. Dördü de Bahçesaray/Kefe'de **zaten var**, yani
  maddeleri olmalı; ama §5.4 Kefe düzeltmesi `1774-07-21`'de **yeni bir `d:`
  kırılması** yaratıyor ⇒ denetim koşulmalı, AÇIK çıkarsa madde yazılmalı.
- **Değişmez 3** — yedisinin de `m:` alanı dolu (`Bahçesaray` k2 · `Kefe` k2);
  ikisi de hanlık/sancak merkezi olarak doğru.

---

## 7. ⚠️ Bilerek çözülmeden bırakılan: `kur:` sorunu

TDV `akmescid` ✔ diyor ki şehre bu ad **Mengli Giray (ö. 1514)** devrinde
yapılan camiden verildi ve *"muhtemelen bu sıralarda kurulmuş"*tur. Yani
Akmescid'in 1281'de var olması şüphelidir.

Ama bu **yeni bir sorun değil**: mevcut **Bahçesaray** da hanlık başkenti
olarak 16. yüzyıl kuruluşudur ve veride 1281'den `altinorda` taşır. Proje bu
noktaları *şehir* olarak değil, **çevresindeki toprağın temsilcisi** olarak
kullanıyor.

⇒ Yeni noktalar **mevcut kabulle hizalandı**, `kur:` yazılmadı. Kırım'ın
bütün `kur:` alanları (Bahçesaray dahil) **ayrı bir turda** birlikte
çözülmelidir; yedi noktayı tek başına farklı kurala tâbi tutmak yeni bir
tutarsızlık üretirdi.

---

## 8. Slug denetimi (`<title>` + **madde metni**)

| Slug | Durum |
|---|---|
| `kirim` | ✅ CANLI — `d:`/`v:` ayrımını, beş merkezi ve dört tarihi içeriyor |
| `kefe` | ✅ CANLI — sancak kazalarını ve Balıklava/İnkerman'ı içeriyor |
| `karasubazar` | ✅ CANLI — kalgay kaymakamlığı, Şirin beyleri merkezi |
| `akmescid` | ✅ CANLI — kalgay sultanların merkezi |
| `bahcesaray` | ✅ CANLI (mevcut kayıtta zaten kullanılıyor) |
| `gedik-ahmed-pasa` | ✅ CANLI — *"1475'te Kefe, ardından Sudak ve Azak'ı zaptedip"* |
| `han-camii` | ✅ CANLI — Gözleve'deki Mimar Sinan yapısı (Gözleve'nin varlığı) |
| `kirim-hanligi` | 🔴 ÖLÜ — doğrusu **`kirim`** |
| `sudak` / `sugdak` | 🔴 müstakil madde **YOK** — `kefe` ve `gedik-ahmed-pasa` içinden |
| `gozleve` | 🔴 müstakil madde **YOK** — `kirim` ve `han-camii` içinden |
| `or-kapi` / `perekop` | 🔴 müstakil madde **YOK** — `kirim` içinden |
| `balaklava` · `inkirman` · `mangup` | 🔴 müstakil madde **YOK** — `kefe` ve `kirim` içinden |

📌 **Zübâre kuralı ihlal edilmedi.** Beşinin müstakil maddesi yok ama
**beşinin de sahibi ve tarih çerçevesi canlı maddelerde adıyla geçiyor.**
Zübâre'de hiç kaynak yoktu; burada kaynak var, yalnız künyesi ayrı değil.
Tek istisna İnkirman'ın 1475 öncesidir ve o **açıkça işaretlendi** (§5.3).
