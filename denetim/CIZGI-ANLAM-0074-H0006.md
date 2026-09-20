# CIZGI-ANLAM-0072 — DALGA-0074 H-0006: "bu mavi çizgiler ne anlatıyor?"

21 Eylül 2026 · oturum CIZGI-ANLAM-0072 · sevk M-4877 · yatay ölçüm M-4862
Aletler: `denetim/ARAC-CIZGI-ANLAM-0074-ANLAM.js` (veri/gösterim ölçümü) ·
`denetim/ARAC-CIZGI-ANLAM-0074-SINAV.js` (headless Chrome + CDP, gerçek
`index.html`, gerçek tuval tıklaması)

**Emre:** *"buradaki mavi çizgiler sınır çizgileri sanırım ama bu çizgiler o
sene için geçerli ise sınır bu çizgilere göre çizilmek zorunda ama renkler bu
sınırlara birebir oturması lazım ama oturmuyor."*

🔴 **Sapma ölçümü BURADA TEKRARLANMADI** — D-RENK-0073 ölçtü (M-4862: 95 örnek
noktanın 10'unda iki yan farklı sahip; renk hattı medyan 11 km, en fazla 40 km
aşıyor). Bu raporun konusu **anlam ve gösterim**: kullanıcı o çizgiye bakınca /
tıklayınca ne öğrenebiliyor ve öğrendiği şey doğru mu.

---

## 0. Öngörüler — ölçümden ÖNCE yazıldı (aletlerin başlığında da duruyor)

| # | öngörü | sonuç |
|---|---|---|
| P1 | Balon başlığı kaydın iç slug'ı; şemada `ad` alanı yok (%0) | ✅ TUTTU (0/349) |
| P2 | `taraflar[]` devletler.js'te insan adına çözülür (≥%90) | ✅ TUTTU (%97,6) |
| P3 | Balon `t:`yi hiç göstermiyor; gösterse 1923-10-29 yanıltırdı | ✅ TUTTU |
| P4 | Dört sınıf yalnız desen+kalınlıkla ayrışıyor, renk ayırt edici değil | ✅ TUTTU |
| Q1 | Sahnede `d-sinir-hat-E` iki kayıt çizer, başka sınıf çizilmez | ✅ TUTTU (E:2 · C/D/F:0) |
| Q2 | Yeni balonda slug başlıkta değil, pencere uyarısı doğru kayıtta | ✅ TUTTU |
| Q3 | Gerçek tuval tıklaması DOM'da balon açar | ✅ TUTTU |
| **P5** | — **ÖNGÖRÜDE YOKTU, ölçüm sırasında doğdu** (§3'te açıkça işaretli) | yeni bulgu |

---

## 1. ÇIKTI ① — bugün çizilen sınıfların EKRANDAKİ karşılığı

Evren: `js/d_katman.js`in çizebildiği kayıtlar = `hat` ≥2 köşe + `f` dolu +
sınıf ≠ YOK ⇒ **349 kayıt** (toplam 723 D kaydının yarısı; kalanı `hat:null`
ya da `kategori:"D-YOK"`).

| sınıf | renk | genişlik | desen | opaklık | **desen periyodu** | bugün çizilebilen | balondaki adı | hangi görünümde |
|---|---|---|---|---|---|---|---|---|
| **F** | `#0a2f5c` | 3,5 px | düz | 1 | — | **0** | "hukukî (uluslararası tanınmış)" | ikisinde de |
| **E** | `#0a2f5c` | 2,8 px | `[6,2]` | 1 | **22,4 px** | **244** | "hukukî" | ikisinde de |
| **C** | `#0a2f5c` | 2,2 px | `[2,2]` | 0,85 | **8,8 px** | **64** | "belge kaba" | ikisinde de |
| **D** | `#0a2f5c` | 2,5 px | `[1,2]` | 0,75 | **7,5 px** | **41** | "fiilî (de facto, hukuken geçersiz)" | YALNIZ "D: Fiilî" |

Taraflardan biri o gün Osmanlı'ya tâbi ise **aynı hat `#d4707d` (açık kırmızı)**
çizilir — sınıf değişmez, yalnız renk değişir (CIZGI-ANLAM-0072'nin dünkü
ölçümü). MapLibre'de `line-dasharray` birimi ÇİZGİ GENİŞLİĞİDİR, bu yüzden
periyot **zoomdan bağımsız, ekranda sabit** kalır (`js/app.js:4103`).

### Bu tablodan çıkan üç gösterim kusuru *(ölçülmüş, yorum değil)*
1. **F stili hiç görünmüyor.** 349 kaydın **0**'ı F. "Düz ve en kalın hat"
   bugün ekranda karşılığı olmayan bir vaattir (sebebi veride: `sinif_not`
   %77,9'unda "F kanıtı bekliyor — TANINMA-1923-0916.json henüz yok").
2. **C ile D ayırt edilemiyor.** İkisi aynı renk, periyotları **8,8 px ve
   7,5 px** — %15 fark. Oysa anlamları taban tabana zıt: C "belgeli ama kaba",
   D "fiilî, HUKUKEN GEÇERSİZ". "D: Fiilî" görünümünde ikisi aynı ekranda
   bulunur. E (22,4 px) ötekilerden gerçekten ayrışıyor.
3. **Ayrım yalnız desen okuryazarlığıyla çözülüyor.** Renk ayırt edici değil
   (tek ton); kullanıcı dört deseni ezberlemek zorunda ve ezberleyeceği yer
   bugüne kadar hiç yoktu (lejant satırı DÜN eklendi, CIZGI-ANLAM-0072).

---

## 2. ÇIKTI ② — Emre'nin görselindeki çizgi TAM OLARAK hangi kayıt

Görselde **iki** lacivert hat var; ikisi de `d-sinir-hat-E`. Tarayıcıda geri
okundu (1827-07-06, kutu 1,94–7,83°D / 48,87–53,74°K): `d-sinir-hat-E` → **2
özellik**, `C`/`D`/`F` → **0**. Yani o ekranda başka hiçbir D hattı yok.

Hangi hattın hangi kayıt olduğu **pikselden** ayrıldı (görsel, adı yazan altı
şehrin atlastaki gerçek koordinatından Web Mercator ile kalibre edildi; en büyük
artık 8,3 px · 1 px = 0,0136°). 1 353 lacivert piksel şöyle bölünüyor:

| ekrandaki hat | kayıt | piksel payı | medyan uzaklık |
|---|---|---|---|
| **güneybatı** (Ypres–Lille–Mons–Namur–Lüksemburg) | `dg4-nl-fr-kortrijk` | 719 px (%53) | 1,24 px |
| **doğu** (Groningen–Nijmegen–Maastricht–Liège) | `d1923-nl-de` | 566 px (%42) | 2,46 px |
| hiçbirine 6 px'ten yakın değil | — | 68 px (%5) | kalibrasyon payı |

**Emre'nin sorusunun doğrudan cevabı — EVET, ikisi de o sene geçerli:**

| | `d1923-nl-de` | `dg4-nl-fr-kortrijk` |
|---|---|---|
| dosya | `data/d_sinirlar_avrupa_orta.js` | `data/d_sinirlar_avrupa_bati.js` |
| pencere | 1824-07-02 → 1923-10-29 | 1820-03-28 → 1830-10-04 |
| 1827-07-06 içinde mi | ✔ | ✔ |
| uzunluk · kesinlik | 476,1 km · ±2 km | 462,7 km · ±1,5 km |
| dayanak | Aachen 1816-06-26 (Hollanda–**Prusya**) · **Meppen 1824-07-02** (Hollanda–**Hannover**) · IBS 31 | **Kortrijk 1820-03-28** (Fransa–**Birleşik Hollanda**) |

### Kullanıcıya ne demesi gerektiği
> **Meppen Sınır Antlaşması (Hollanda–Hannover)**
> hukukî · 476,1 km · kesinlik ±2 km
> Geçerli: 2 Temmuz 1824'ten itibaren — bu hat 1923 sınırından geriye sarıldı;
> **29 Ekim 1923 atlasın pencere sonudur, sınırın sonu değildir.**
> Dayanak: Aachen Sınır Antlaşması (Hollanda–Prusya) (1816-06-26) · Meppen
> Sınır Antlaşması (Hollanda–Hannover) (1824-07-02) · +1 kaynak daha
> ⚠️ Bu hat **antlaşmanın** çizgisidir; altındaki renk **yerleşim peteğinden**
> gelir. İkisi ayrışabilir — ayrıştığı yerde henüz o hattı tutacak yerleşim
> noktası yoktur.

Son satır Emre'nin ikinci cümlesinin ("renkler bu sınırlara birebir oturmuyor")
cevabıdır: **ayrışma bir kusur değil bir ÖLÇÜdür** ve bugüne kadar ekranda
okunabilir hiçbir karşılığı yoktu.

---

## 3. 🔴 P5 — "tarafların adını yaz" ÖNERİSİ NİÇİN YANLIŞ OLURDU
*(öngörüde yoktu, ölçüm sırasında doğdu — açıkça böyle işaretleniyor)*

İlk akla gelen çare "başlığa `Hollanda ↔ Almanya` yaz"dır ve **veri buna
elverişli görünür**: 698 taraf-kayıt çiftinin **%97,6'sı** `devletler.js`te bir
`ad`a çözülüyor (çözülmeyen tek kimlik `osmanli`×17 — beklenen, o `donemler.js`
katmanıdır). Ama çözülen ad **o günün devleti değildir**:

- `hollanda` künyesi → "Hollanda Cumhuriyeti", penceresi **1581–1923**. Oysa
  Hollanda Cumhuriyeti 1795'te bitti; 1827'de **Birleşik Hollanda Krallığı** var.
- `almanya` künyesi → "Kutsal Roma / Almanya", penceresi **962–1923**. Oysa
  1806'da Kutsal Roma dağıldı; bu sınırı imzalayanlar **Prusya ve Hannover**.
- Ölçüldü: taraf atıflarının **%25,8'i (180/698)** 300 yıldan geniş bir künyeye
  düşüyor; künye penceresi medyanı 100 yıl, üst çeyrek 348 yıl, **en geniş 962 yıl**.

⇒ Künye adını basmak, tarihsel olarak **yanlış bir cümle üretirdi** (D207
ailesinin gösterim tarafı: atlasın kendi kaydı dayanak olamaz).
**Doğru kaynak antlaşmanın KENDİ adıdır** — hem insan okunur hem döneme doğru
("Kortrijk Sınır Antlaşması (Fransa–**Birleşik Hollanda**)"), ve `dayanak`
doluluğu **%100**, ilk dayanakta `ad` **%100**.

📌 Ve bu bölümü ölçerken alet bir kez `"962-02-02" <= "1827-07-06"` dizgi
karşılaştırmasına düştü (FALSE döner) — **D205'in üç haneli yıl tuzağı**;
düzeltildi, alette not olarak duruyor.

---

## 4. ÇIKTI ③ — ÖNERİ: **tıklanabilir açıklama (balon)**. Tek seçim, gerekçesiyle.

Üç aday karşılaştırıldı:

| aday | niçin seçilmedi / seçildi |
|---|---|
| **etiket (harita üstü yazı)** | ✗ 349 kayıt, çoğu kısa parça; Emre'nin M-4714 kuralı "simge ve yazılar birbirine girmeyecek" diyor. Dahası dürüst içerik (pencere + sınıf + antlaşma + petek uyarısı) bir etikete SIĞMAZ — sığdırmak için kısaltmak, "1923'te bitti" gibi yanlış bir iddiaya döner. |
| **yalnız lejant** | ✗ Lejant SINIF anahtarıdır, Emre'nin sorusu ise KAYDA ÖZELdir ("bu çizgi **o sene** geçerli mi"). Pencere kayıt başına değişir; lejant bunu taşıyamaz. Ayrıca lejant varsayılan KAPALI. *(Sınıf anahtarı satırı dün zaten eklendi — CIZGI-ANLAM-0072; bu öneri onun yerine değil, üstüne geçiyor.)* |
| **tıklanabilir açıklama** | ✅ **SEÇİLDİ.** ① Mekanizma ZATEN VAR (`d_katman.js` `click`→`maplibregl.Popup`) ve evin deseni budur (C katmanı da aynısını yapar) — D023, var olanı yeniden yazma. ② Cevap kayıt başına ve yıl başına olmak zorunda; balon tek yer bunu taşıyabiliyor. ③ Veri BUGÜN hazır: `dayanak` %100 · `f`/`t` %100 · `uzunluk_km` %100 · `kesinlik_km` %82,5 · `not` %100 — yeni veri işi GEREKMİYOR. ④ Kusur "balon yok"tu değil, **balon yanlış şeyi gösteriyordu**. |

### Yapıldı — `js/d_katman.js` (**yazıldı, COMMİTLENMEDİ**)
`_dPopupHtml` yeniden yazıldı. Önce / sonra, tarayıcıdan geri okundu:

```
ÖNCE (ölçüldü)   d1923-nl-de
                 hukukî · 476.1 km · kesinlik ±2 km
                 Aachen Sınır Antlaşması (Hollanda–Prusya) (1816-06-26) …

SONRA (ölçüldü)  Meppen Sınır Antlaşması (Hollanda–Hannover)
                 hukukî · 476.1 km · kesinlik ±2 km
                 Geçerli: 2 Temmuz 1824'ten itibaren — bu hat 1923 sınırından
                 geriye sarıldı; 29 Ekim 1923 atlasın pencere sonudur,
                 sınırın sonu değildir.
                 Dayanak: Aachen … (1816-06-26) · Meppen … (1824-07-02) · +1 kaynak daha
                 ⚠️ Bu hat antlaşmanın çizgisidir; altındaki renk yerleşim
                 peteğinden gelir. İkisi ayrışabilir — …
                 d1923-nl-de            ← slug soluk, en altta (bize lazım, okura değil)
```

Dört kural kodda duruyor, her biri ölçüme dayanıyor:
1. **Başlık = antlaşmanın adı, slug değil** (`ad`/`baslik` alanı %0).
2. **Hangi dayanak?** `tarih`i `f` ile birebir eşleşen; yoksa ilki. Ölçüldü:
   48 kayıtta tek dayanak (soru yok) · 131'inde eşleşen var ve bunların
   **36'sında eşleşen İLK SIRADA DEĞİL** · 170'inde eşleşen yok (bugünkü
   davranış aynen korunur). Emre'nin kaydı tam bu 36'dan biri: başlık
   Aachen 1816 iken Meppen 1824 oldu ve artık `f` ile tutuyor.
3. **`t` asla çıplak "bitiş" diye yazılmaz.** 349 kaydın **196'sı (%56,2)** tam
   `1923-10-29`da biter ve bu tarihî bitiş değil, geriye sarmanın tasarım
   günüdür (D-RENK-0073, M-4862). O değerde balon uyarıyı basar, başka
   değerlerde normal aralığı yazar (`dg4-nl-fr-kortrijk`: "28 Mart 1820 –
   4 Ekim 1830", uyarı YOK — sınavda iki yönde de doğrulandı).
4. **Ay hassasiyetli tarih gün diye yazılmaz** — `_dGunYazi` yalnız
   `YYYY-MM-DD` kalıbında `idxYazi`ye geçer, aksi hâlde ham değeri bırakır
   (CLAUDE.md §4 uydurma kesinlik yasağı).

**Sınav (headless Chrome, gerçek `index.html`, gerçek tuval tıklaması):**
`node --check` temiz · sahnede E:2 / C:0 / D:0 / F:0 · başlıkta slug YOK (iki
kayıtta da) · pencere uyarısı `d1923-nl-de`de VAR, `dg4-nl-fr-kortrijk`te YOK ·
petek uyarısı ikisinde de VAR · **tuvale tıklanınca DOM'da `.maplibregl-popup`
açıldı** ve metni birebir yukarıdaki.

### Yapılmadı — 1.MURAT/Emre'ye bırakılan iki kalem
- **C ile D'yi ayırmak** (§1 kusur 2): periyotları 8,8 ve 7,5 px. Ucuz çare
  D'yi `[1,3]`e (periyot 10 px) ya da C'yi `[3,2]`ye (11 px) çekmek; ama
  **renk kalemi D-RENK-0073'te**, desen de renkle birlikte kararlaştırılmalı —
  tek elden gitmesi için dokunmadım.
- **F stilinin karşılığı yok** (0 kayıt): ya `TANINMA-1923-0916.json` gelecek ya
  lejant "bugün çizilmiyor" diyecek. Veri kalemi, benim değil.

---

## 5. Değişen dosyalar
- `js/d_katman.js` — **yazıldı, commitlenmedi** (`_dPopupHtml` + iki yardımcı).
  `node --check` temiz. 🔴 Aynı dosyada **D-RENK-0073** renk kalemiyle çalışıyor;
  benim dokunduğum tek yer POPUP bloğu (`_dDayanakSatirlari` ile
  `_dSinirGuncelle` arası), renk sabitlerine ELLENMEDİ.
- `js/app.js` — dünden kalan lejant bloğu, hâlâ commitsiz (CIZGI-ANLAM-0072).
- `denetim/ARAC-CIZGI-ANLAM-0074-ANLAM.js` · `denetim/ARAC-CIZGI-ANLAM-0074-SINAV.js`
  · `denetim/CIZGI-ANLAM-0074-H0006.md` — bu oturum commitler.
- `data/*` **DOKUNULMADI**; `denetle.py` koşturulmadı (veri değişmedi).
