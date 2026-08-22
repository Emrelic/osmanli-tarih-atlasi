# GÜNEY ASYA KRONOLOJİ — ilerleme defteri

Oturum: **GÜNEY ASYA KRONOLOJİ** (açılış adı: SONNET HAZIR KITA 79 · model Opus 5)
Görevi veren: OSMANGAZİ (koordinatör), tahta **M-1057**
Şartname: `oturumlar/KRONOLOJI-SARTNAME.md` (tek otorite)
Dosyam: `data/kronoloji_guney_asya.js` → `window.KRONOLOJI_GUNEY_ASYA`

---

## TUR 1 — 22 Ağustos 2026

### Künyeler ve ölçülen taban

Koordinatörün M-1057'de verdiği sayılar `devletler.js`ten **doğrulandı, dördü de tuttu**:

| künye | aralık | yıl | gömülü olay | bu turda yazılan |
|---|---|---|---|---|
| `delhi-sultanligi` | 1206-01-01 → 1526-04-21 | 320 | 7 | — (bkz. çakışma) |
| `babur-imparatorlugu` | 1526-04-21 → 1857-09-21 | 331 | 6 | 1 (yalnız kesişim) |
| `racput` | 1281-01-01 → 1923-10-29 | 642 | 4 | **32** |
| `sind` | 1281-01-01 → 1843-02-17 | 562 | 4 | **34** |
| `ladak` | 1281-01-01 → 1834-01-01 | 553 | 4 | **13** |
| `travankur` | 1281-01-01 → 1923-10-29 | 642 | 3 | **21** |
| `nepal` | 1281-01-01 → 1923-10-29 | 642 | 3 | **32** |
| `manipur` | 1281-01-01 → 1923-10-29 | 642 | 5 | **20** |

**0 → 153 madde**, aralık 1281-1923.

### Çakışma kararı

`data/kronoloji_hindistan.js` (131 madde) ülke ölçeklidir; `d:` önekine göre
**Bâbürlü 57 + Delhi Sultanlığı 22 = dosyanın %60'ı**. Buna karşılık benim
öteki altı künyem orada **neredeyse yok**: racput 0 · ladak 0 · travankur 0 ·
nepal 0 · manipur 0 · sind 1.

⇒ Bu tur **altı boş künyeye** ayrıldı. Delhi ve Bâbürlü'ye ana hat maddesi
yazılmadı; ikisi yalnız benim devletlerimle **kesiştiği** yerde geçiyor
(Hânüvâ, Çitor, cizye, Sind fetihleri, Ladakh tâbiiyeti…).
HİNDİSTAN KRONOLOJİ oturumuna **M-1064** ile doğrudan yazıldı, iş bölümü
önerildi, cevabı bekleniyor. Cevaba kadar bloke olunmadı.

### 🔴 `dunya` ayrışması — bulundu ve KAPATILDI

Aynı olay iki dosyada farklı `dunya` taşıyorsa kusurdur (M-0873). Kendi
çapraz ölçümümde **beş gerçek ayrışma** çıktı ve hepsi `kronoloji_hindistan.js`
değerine **hizalandı**:

```
1303-08-26  Çitor'un Halacî'ye düşmesi        benim 3 → 2
1527-03-16  Hânüvâ (Khanwa)                   benim 4 → 2
1568-02-23  Ekber'in Çitor fethi              benim 3 → 2
1679-04-02  cizyenin yeniden konması          benim 4 → 2
1724-01-01  Cey Singh'in Delhi rasathanesi    benim 3 → 2
```

⚠️ Hizalandı, ama **iki tanesine itirazım var ve sessiz kalmıyorum**:
Hânüvâ (1527) Kuzey Hindistan'ın kaderini belirleyen muharebedir; cizyenin
1679'da yeniden konması Bâbürlü-Racput ittifakını çözen karardır. İkisinin de
`dunya:2` (bölgesel etki) olması bana düşük geliyor — **ama tek taraflı
yükseltmedim**, çünkü değişmez tutarlılığı emrediyor. Karar koordinatörün ve
HİNDİSTAN KRONOLOJİ'nin.

### Kaynak durumu

TDV'de **madde bulunan** ve gövdesi okunan sluglar: `nepal` · `sind` ·
`multan` · `ecmir` · `kesmir` · `gucerat` · `delhi-sultanligi` · `babur` ·
`ekber-sah` · `cihangir` · `sah-cihan` · `evrengzib` · `suriler` · `seylan` ·
`tibet` · `ahmed-sah-durrani`.

TDV'de **madde bulunmayan** (302): `ladakh` · `ladak` · `travankur` ·
`manipur` · `racput` · `rajput` · `mevar` · `marvar` · `citor` · `udeypur` ·
`caypur` · `bikaner` · `codhpur` · `tetta` · `sehvan` · `bakkar` · `argun` ·
`erkun` · `kalhoralar` · `talpurlar` · `sumreler` · `katmandu` · `gorkha`.

⇒ Bunlar `§4`ün **tanecik boşluğu**dur; standart akademik kaynak kullanıldı ve
`kaynak:` alanında **açıkça** yazıldı. Gizlenmedi.

### 🔴 İki TDV tuzağı bu turda YENİDEN ölçüldü

```
ekber   HTTP 200 · <title> "EKBER" · GÖVDE BOİLERPLATE    doğrusu ekber-sah
amber   HTTP 200 · <title> "AMBER" · kokulu madde amberi   Racput şehri DEĞİL
```
İkisi de `<title>` testini geçiyor. `§4` tuzak ② ve ④'ün canlı örnekleri.

### 🔴 Bildirilen ariza: `arac/denetle_kronoloji.py` çöküyor

`data/kronoloji_eslesme_yama.js` (veri değil, yama tarifi) glob'a giriyor ve
araç `AttributeError` ile ölüyor. Alfabetik olarak ondan sonraki **27 dosya
denetimsiz** kalıyor, 8. dal (`dunya` tutarlılığı) hiç koşmuyor.
Tahta **M-1074** ile bildirildi. Araç benim dosyam değil, **tek bayt
yazılmadı**; kendi dosyamı scratchpad'deki eşdeğer bir ölçümle denetledim.

### Denetim sonucu (kendi ölçümüm, sekiz dal)

```
ad alanı KRONOLOJI_GUNEY_ASYA (beklenenle aynı)   ✓
zorunlu alan eksik 0 · tarih biçimi 0 · onem/dunya aralık 0 · kapsam 0
yer_id eşleşmiyor 0 · Vikipedi tek dayanak 0 · mükerrer 0
node --check TEMİZ
```

### Sıradaki tur için açık kalemler

1. **Delhi Sultanlığı ve Bâbürlü** — HİNDİSTAN KRONOLOJİ'nin cevabına bağlı.
2. **yer_id'si olmayan 11 madde** — koordinatörden nokta isteniyor (aşağıda).
3. **Konu dengesi** — askerî-siyasî kova hâlâ %66 (hedef ~%40). İkinci turda
   idarî/iktisadî kollar derinleştirilecek.
4. `1923-12-21` Britanya-Nepal Antlaşması atlas ufkunun (1923-10-29) **dışında**;
   madde 10-29'a yerleştirilip gerçek tarih metinde açıkça yazıldı.
