# SAYAC-EVREN-0920 — sessiz borç sayacının evreni

**Oturum:** SAYAC-EVREN-0920 (Sonnet 5) · **Tarih:** 20 Eylül 2026 · **Koordinatör:** 1.MURAT
**Dosya sahipliği:** `arac/durum_tablosu.py` + bu dosya. Veri dosyalarına dokunulmadı.

---

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı

Girdi: `denetim/KUNYE-BORC-0920.md` B.0 (53 = 30 + 9 + 14). Kod okundu, hiçbir ölçüm koşulmadı.

| kova | öngörü | dayanak |
|---|---|---|
| `renksiz_sessiz` toplamı (bugünkü sayaç) | **53** | KUNYE-BORC-0920 B.0 (ekleme sonrası ölçüm) |
| haritada kullanılıyor (`s:`/`isg:`, renksiz = HARİTA DELİĞİ) | **0** | §1.5 satırı ✓ 0 diyor |
| yalnız sınır/kronoloji/savaş/kişi katmanında | **39** (±2) | 30 D-sınırı + 9 metin |
| hiçbir yerde (gerçek sessiz borç) | **14** (14–16 arası) | KUNYE-BORC B.3 |

Riskler (öngörüyü kaydırabilecek üç şey):
1. KUNYE-BORC "metinde geçen"i **metin taramasıyla** saymış olabilir; ben yalnız **kimlik taşıyan alanları**
   sayacağım. `kasim` gibi bir kimlik metinde geçip alanda geçmiyorsa 9'dan düşer, ③ 14'ten büyür.
2. `d:` alanı `olaylar*`/`kronoloji*`te **kimlik değil ANLATI metni** (`d:"Horasan 1380'de …"`); görev metni
   "d:/v:" derken `yerlesimler` şemasını (`s:`/`d:`/`v:`) kastetmiş olabilir. Anlatıyı kimlik saymak
   yanlış olurdu — ölçümden sonra bakılacak.
3. Koşu 14 sürerken veri değişebilir (öteki oturumlar `d_sinirlar*` / `olaylar*` yazıyor).

---

## 1. ÖLÇÜM — öngörü ↔ sonuç

| kova | öngörü | ölçülen | hüküm |
|---|---|---|---|
| sessiz borç toplamı (eski sayaç) | 53 | **53** | tuttu |
| haritada kullanılıyor (`s:`/`isg:`, renksiz = delik) | 0 | **0** | tuttu |
| yalnız sınır/kronoloji/savaş/kişi katmanında | 39 ±2 | **38** | tuttu |
| hiçbir yerde (gerçek sessiz borç) | 14 (14–16) | **15** | tuttu — fazla 1 = `kasim` (aşağıda) |

Öngörünün 1. riski gerçekleşti: KUNYE-BORC "9 metin" demişti; alan taramasıyla **8** çıkıyor.
`kasim` anlatıda/yorumda geçiyor (`olaylar_ek8.js` 3 · `kronoloji_orta_asya.js` 3 satır: Kâsım Han,
"kasim-hanligi" yorumu) ama hiçbir **kimlik alanında** yok ⇒ gerçek borca döndü. Öteki 14, KUNYE-BORC B.3
listesiyle birebir aynı.

**Katman dağılımı** (38 künye; bir künye birden çok katmanda olabilir): sınır 30 · kronoloji 20 · kişi 5 ·
savaş 1. Yalnız tek katmanda olanlar: sınır 13 · kişi 4 · kronoloji 3 · savaş 1.

**Gerçek sessiz borç (15):** `aleut` · `arua` · `charrua` · `ranquel` · `guarani-misyonlari` (halk/kabile,
KUNYE-BORC B.3'te *kasıtlı* sayılmıştı) · `sabah-emirligi` · `sani-emirligi` · `kibris-ingiliz` ·
`oniki-ada-italyan` · `girit-devleti` · `italya-napolyon` · `crnojevic-zetasi` ·
`norvec-isvec-birligi` · `luksemburg-hollanda-birligi` · `kasim`.

## 2. NE DEĞİŞTİ (yalnız `arac/durum_tablosu.py`)

- **`katman_evreni()`** (yeni) — sınır · kronoloji/olay · savaş · kişi katmanlarını okur; **hangi dosya
  hangi alandan** kodda yorum olarak durur:

  | katman | dosyalar | okunan alanlar |
  |---|---|---|
  | sınır | `d_sinirlar*.js` | `taraflar:[..]` · `sol_taraf` · `sag_taraf` |
  | kronoloji | `olaylar*.js` + `kronoloji*.js` | `devletler:[..]` · `kunye:[..]` · `taraflar:[..]` · `devlet` |
  | savaş | `savaslar*.js` | `taraf:[..]` · `galip` · `devlet` |
  | kişi | `kisiler.js` | `devlet` |

  Dosya kümesi `glob`dan değil **`index.html`in yüklediği** dosyalardan (9 sınır · 123 kronoloji/olay ·
  2 savaş · 1 kişi). `glob` ile karşılaştırıldı: tek fark yüklenmeyen `kronoloji_sinir_guney_g8.js`; sonuç
  **değişmiyor** (38/15, fark boş).
- **`sessiz_bol()`** (yeni, saf fonksiyon) — sessiz adayları `(baska, gercek)` ikiye böler. C13 sınamasına
  **4 dal** eklendi (boş katman · tek katman · karışık 1/1/1 · iki katmanda tek kayıt); `--sina` **9/9** +
  renksiz 10/10 + sessiz_bol 4/4, çıkış kodu 0. Yeni dallar `_t` toplamına girer (kapı sağlam).
- **`olc()`** — `o["renksiz_baska"]`, `o["renksiz_gercek"]`, `o["katman_dosya"]`; `o["renksiz_sessiz"]`
  (toplam) yerinde kaldı.
- **`tablo()`** — "Renksiz künye — HARİTA DELİĞİ" satırı artık üç sayı gösteriyor:
  `0 haritada kullanılıyor (delik)` · `🟡 15 hiçbir yerde (gerçek sessiz borç)` ·
  `⚪ 38 yalnız sınır/kronoloji/savaş/kişi katmanında (borç değil)` (+ mevcut `⚪ 13 tâbi-çizili`).
  Kapsam notu katman evrenini ve dosya sayılarını taşıyor. Sonda gerçek borç kimlikleri listelenir.
- **`kimlik_evreni()` DOKUNULMADI.** Görev "genişlet" dedi; genişletmedim, AYRI bir evren kurdum.
  Gerekçe (kodda da yazılı): `kimlik_evreni()` yayın kapısını (`denetle_yayin.py:1374`),
  `bosluk_kovalari` ve `renk_kovalari`'yi besliyor. Katman kimliklerini `kul`a katmak "dizinsiz kimlik"
  ve "ölü renk" hükümlerini de sessizce değiştirirdi; görev yalnız sessiz-borç sayacıydı. İstenirse ayrı
  iş olarak açılır (bkz. §3).

## 3. BULUNAMADIM / DİKKAT

- **`d:`/`v:` görevde kimlik alanı olarak geçiyordu — değil.** `olaylar*`/`kronoloji*`te `d:` **anlatı
  metnidir**; `yerlesimler`te `d:` `{f,t,y}` dönemidir, kimlik taşımaz. Sayılmadı. `olaylar*.js` aynı alan
  kümesiyle tarandı: **0 isabet** (olay dosyalarında `devlet`/`kunye`/`taraflar` alanı yok; kimlik yalnız
  `kronoloji*.js`te).
- **`etiket:[..]` sayılmadı** (konu etiketiyle karışık). Ölçüldü: etiketle kurtulan ama alanlarda
  bulunmayan sessiz kimlik **0** — yani karar sonucu değiştirmiyor.
- **Katman kimliklerinin dizin karşılığı (kapsam dışı, yalnız ölçüm):** katmanlarda geçen ama `devletler.js`
  dizininde olmayan dize: sınır 2 (`osmanli`, `necid-kuveyt-tarafsiz-bolge` — ikisi de künye değil, bölge
  etiketi/takma ad) · kronoloji 12 (ör. `alman-konfederasyonu`, `baden`, `brandenburg-prusya`,
  `dini-elektorlukler`, `hannover`, `hansa`, `pfalz`, `saksonya`, `teuton-sovalyeleri`) · savaş 1 · kişi 1.
  Kronolojideki 12'nin bir kısmı serbest etiket olabilir; **hüküm vermedim, ayrı ölçüm işi.**
- Veri bu görevin yazıldığından bu yana büyüdü (künye 665→677, yerleşim 3808→3921); **53 sessiz** sayısı
  değişmedi, öngörü aynı veriyle ölçüldü.

## 4. SINAV

- `py arac/durum_tablosu.py` → temiz, tablo basıldı (yukarıdaki satır).
- `py arac/denetle.py` → **SONUÇ: temiz**.
- `--yaz` **kullanılmadı**; `CLAUDE.md` §1.5'e dokunulmadı (koşu 14 bitince koordinatör yazdıracak).
