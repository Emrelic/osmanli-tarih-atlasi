# PAKET-0083-C-OKSUZ-HAT — H-0010 · H-0005 · H-0006
5 Ekim 2026 · şartname `oturumlar/PAKET-0083.md` §0 + §C · koordinatör YILDIRIM BAYEZIT
Yalnız okundu: `data/` `arac/` `js/` dokunulmadı. Ölçüm betikleri oturumun scratchpad'inde
(`dtara.js` · `prut_nokta.py` · `voronoi_prut.py` · `ibrail.py`); gerekirse `denetim/`e alınır.

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı (sayı + mekanizma ayrı)
Görsel H-0010 (74×101 px): kırmızı = "…ler (Romanya…" etiketi ⇒ `Birleşik Prenslikler (Romanya)`.
Sol üst sarı, üst yeşil. Koyu yeşil D hattı sarı/yeşil/kırmızı üçlü noktasından GD'ye,
KIRMIZININ İÇİNDEN geçiyor.
- Mekanizma öngörüsü: hat bir Rusya–Boğdan **Prut hattı** (1812 Bükreş) ya da Avusturya–Boğdan
  **Bukovina hattı**; kusur `sol_taraf` değil, hattın **`t:` ucu / taraf kimliği**.
- Sayı öngörüsü: kutuda (25–30.5°D, 45–49°K) 10–20 D hattı; adaylardan 1–3'ü uyuşur.

**Tuttu mu:** SAYI tuttu (kutuda **14** hat; uyuşan **1**). Hat kimliği yarı tuttu (Prut,
ama Bukovina hattı hiç ÇİZİLMİYOR — D-YOK). **MEKANİZMA ÇÜRÜDÜ:** pencere ve taraf
doğru; sebep **nokta yoğunluğu** (aşağıda).

---

## 1. H-0010 — "öksüz hat"

### ÖLÇÜM
**Görselden tarih:** kırmızı = `romanya` tâbi rengi ve "Birleşik Prenslikler (Romanya)"
etiketi ⇒ `romanya` künyesi `v:` (tâbi) dönemi = **1859-01-24 → 1877-05-09**
(Yaş/Roman/Birlad `v:romanya` bu aralık). Sarı = Avusturya (Bukovina), yeşil = Rusya.

**Hat:** `d1859-ru-rp-prut-kuzey` — `data/d_sinirlar_avrupa_orta.js` (kaynak) **ve**
`data/paket_28.js` (canlı kopya; kimlik paket içinde 1 kez, dizinde 1 kez geçiyor).
```
taraflar rusya / romanya · f 1859-01-24 · t 1878-08-03 · kategori D · sinif E
sol_taraf romanya · 146 nokta · 207,6 km · [27.867,47.1046] → [26.6179,48.259]
geometri  Natural Earth 10m admin-0 (BUGÜNKÜ sınır) · kesinlik ÖLÇÜLMEDİ
```
Aynı geometrinin ardılları/öncülleri (kutudaki 14 hattın Prut ailesi):
`d1812-ru-bg-prut` (1812-06-23→1856-04-27, tam Prut) · `d1856-ru-bg-prut-kuzey`
(1856-04-27→1859-01-24) · `d1859-ru-rp-prut-kuzey` · `d1878-ru-ro-prut-rus-rp/-rk/-gecici-rk/-sovyet-rk`
(1878→1918, tam Prut, Berlin md. 45).

**"Hangi anlaşmanın hattı":** Prut sınırı **Bükreş Antlaşması 1812 md. 4** ile kuruldu
(Besarabya Rusya'ya; TDV `hotin` de "1812'deki Bükreş Antlaşması ile … Rusya'ya bırakıldı"
der). **Paris 1856 md. 20** yalnız GÜNEY Besarabya'yı Boğdan'a geri verdi; kuzey Prut
değişmedi (kaydın kendi notu: "kuzey Prut 1856'da değişmedi", IBS 43 + Paris md. 20).
1859'da yalnız TARAF değişti (Boğdan → Birleşik Prenslikler), hat aynı kaldı.

⚠️ **Dayanak alanı bunu SÖYLEMİYOR** (`§4` tuzak ⑧ — alıntı neyi tarihliyor):
- `d1859-ru-rp-prut-kuzey.dayanak[0]` = "Hertslet c. 2 s. 1335 notu; No. 299, 334" —
  **Cuza'nın seçimini** tarihliyor, hattı değil.
- `dayanak[1]` IBS 43'ün `alinti`si = *"(214 km.) of the prewar Czechoslovakia – Rumania
  frontier"* — **Çekoslovakya–Romanya** sınırı hakkında; Prut'u desteklemez. Bu aynı alıntı
  `d_sinirlar_avrupa_orta.js`te **36/205** kayıtta tekrarlanıyor (paket_28'de de 36).
- Hattın asıl hukukî zinciri (1812 md. 4 → 1856 md. 20) yalnız `d1812-ru-bg-prut`ın
  dayanağında (Noradounghian c. II, Bükreş 1812 md. 4) duruyor; ardıllara geçmemiş.

**Kardeş hat sınavı (dışarıdan veri gerektirmeden):** her Prut parçası GÜNEYDEN KUZEYE
(akıntıya karşı) ilerliyor ⇒ ilerleme yönünün solu BATI = Boğdan/Romanya yakası.
```
d1812-ru-bg-prut          sol bogdan            ✓
d1856-ru-bg-prut-kuzey    sol bogdan            ✓
d1859-ru-rp-prut-kuzey    sol romanya           ✓
d1878-ru-ro-prut-*  (4)   sol romanya/-kralligi ✓
d1878-ru-ro-tuna-*  (4)   doğuya ilerliyor, sol = kuzey = Besarabya → sol rusya/-gecici/sovyet ✓
```
⇒ **Ters `sol_taraf` YOK** (8 Prut + 4 Tuna parçası tutarlı). Kusur yaka değil.

**"Neden dayanılmamış" — üç adayın ölçümü:**
1. **`kategori`:** D / sınıf E ⇒ muaf DEĞİL, çizilmesi doğru.
2. **`sol_taraf`:** doğru (yukarıda).
3. **Nokta yoğunluğu — SEBEP BU.** Motor D hatlarını OKUMUYOR (`uret_petek.py`de
   `d_sinirlar`/`D_SINIR` geçen satır **0**). Dolgu sınırı Voronoi'dir; doğal hatta yaslama
   `dogal_hatta_yasla()` (`uret_petek.py:2842`) ile yalnız **≤ 0,30°** mesafedeki nehre olur
   (Prut `NEHIR_SINIF1_ADLAR`da var). Nehir geçiş bedeli kara-kara sınırına İNMİYOR
   (`uret_petek.py:1441-1447` yorumu: "Kara-kara sınırı hâlâ Voronoi + 200 km tavan").
   Prut çevresinde (26–30,5°D · 45,3–48,7°K) **16 yerleşim** var:
   ```
   BATI yaka (Boğdan/Romanya)  Yaş (Prut'a 15 km) · Roman · Birlad · Kalas
                               Yaş'ın KUZEYİNDE Prut'a kadar Boğdan noktası: 0
                               (Suçava/Çernovitz Avusturya'nın)
   DOĞU yaka (Besarabya)       Soroka (96 km) · Orhei (94 km) · Bender (103 km) · Akkirman
                               Hotin (Prut'un kuzey ucunda, Rusya)
   YOK (aranıp bulunamadı)     Kişinev · Belts (Bălți) · Botoşani · Dorohoi · Hüş (Huşi) ·
                               Ungheni · Leova · Vaslui · Bacău · Focşani · Piatra
   ```
   Ham Voronoi ile ölçüm (1870-01-01, 104 nokta; kara maskesi/Chaikin YOK — yaklaşık):
   ```
   Prut boyunca 61 örnek, iki yakaya 0,05° yoklama:
     58/61 ÖKSÜZ  — iki yaka aynı petekte
       47,10–47,90 K   iki yaka da Yaş (romanya tâbi)   → Romanya Besarabya'ya taşıyor
       47,99–48,26 K   iki yaka da Hotin (rusya)       → Rusya Boğdan'a taşıyor
      3/61 "yaslı" ama TERS: batı Hotin(rusya) · doğu Yaş(romanya) — sınır hattı ÇAPRAZ kesiyor
   Rusya|Romanya petek sınırının Prut'a uzaklığı: min 0,083° · medyan 0,485° · max 0,599°
   eşiğin (0,30°) ötesindeki köşe: 5/8
   ```
   Görseldeki çizim birebir bu: hat önce kırmızı kenarda (çapraz kesişme), sonra kırmızının
   İÇİNDE (Yaş peteği Prut'u ~40 km aşıyor).

### HÜKÜM
- Hat **öksüz değil, yetim kalmış**: yeri ve dayanağı doğru (Bükreş 1812 md. 4, Paris 1856'da
  değişmedi), dolgu ona yaslanamıyor çünkü **iki yakada da yeterli nokta yok**: medyan sınır
  0,485° uzakta, yaslama eşiği 0,30°. Kusur **iki yönlü** (`§3.5` ters yön): orta Prut'ta
  Romanya Besarabya'ya, kuzeyde Rusya Boğdan'a taşıyor.
- `sol_taraf` düzeltmesi GEREKMEZ; D hattına dokunulmaz.
- Çare koordinatörde (`§0`: nokta ad + kaynak ister). Yaslamayı sağlayacak en az küme:
  doğu yakada **Kişinev** ve **Belts**, batı yakada **Botoşani**, **Dorohoi**, **Hüş**
  (ve Prut'a yakın bir Boğdan noktası, ör. Ştefăneşti/Ungheni). Kaç nokta gerektiği: sınırın
  Prut'a ≤0,30° inmesi için her iki yakada Prut'a ~25 km mesafede karşılıklı nokta çiftleri
  ⇒ 47,1–48,3 K arasında (~180 km) **3–4 çift**. Bu bir tahmindir; koşudan sonra ÖLÇÜLMELİ.

---

## 2. H-0006 — "Hotin Boğdan voyvodalığının başkenti midir"

### ÖLÇÜM
Görsel: yeşil bölgede Hotin + Çernovitz noktaları, "BOĞDAN VOYVODALIĞI" etiketi Hotin'in
hemen altında; Kamaniçe ayrı renkte. Atlasta Hotin `v:bogdan` 1456-06-01→1713-06-24,
Çernovitz `v:bogdan` →1775-05-07 ⇒ görselin tarihi **1713 öncesi** (ikisi birlikte Boğdan).
Kesin yıl görselden **ölçülemedi**.

**TDV:**
- `hotin` (D. Kolodziejczyk, 1998; HTTP 200): Hotin "Kuzey Moldova'da Dinyester … sağ kıyısında"
  bir **kale**; Boğdan beylerinin idaresinde; "1711'den sonra Boğdan'dan alınıp doğrudan
  Osmanlı idaresine sokuldu ve önce bir nahiye, sonra da sancak statüsü verildi"; "Hotin kasabası
  kalenin gölgesinde kaldığı için hiçbir zaman önemli bir merkez haline gelmedi."
- `yas--romanya` (HTTP 200; ⚠️ `yas` slug'ı **302 = ölü**): "Önceki merkez olan Suceava …
  1564'te Boğdan'ın merkezi Yaş şehrine nakledilmiştir"; Lapuşneanu kaleleri yıktırınca
  "Hotin, Soroca, Orhei gibi **sınır kaleleri** ayakta kalmış".
- `bogdan` (HTTP 200): 1476 seferinde Osmanlı ordusu "beyliğin merkezi Suceava'ya girdi".
- Atlas künyesi `bogdan` `baskent:"Suceava → Iaşi"` — TDV ile uyuşuyor.

### HÜKÜM
**HAYIR.** Hotin Boğdan'ın başkenti hiç olmadı: merkez **Suceava (Suçava)**, 1564'ten itibaren
**Yaş**. Hotin bir **sınır kalesi**ydi; 1711'den sonra Boğdan'dan alınıp doğrudan Osmanlı
sancağı yapıldı, 1812 Bükreş'le Rusya'ya geçti.
Haritadaki etiket bir **devlet adı etiketi**dir, başkent işareti değil; ama Hotin'in yanına
düşmesi okura "başkent" izlenimi veriyor. Etiketin NEDEN oraya yerleştiği (`app.js` etiket
konumlama mantığı) **ölçülemedi** — bu görevde açılmadı. Öneri: etiket konumu Yaş/Suçava
yakınına sabitlenebilir mi, arayüz sahibine sorulmalı.

---

## 3. H-0005 — "bu bölge İbrail'in mi"

### ÖLÇÜM
Görsel (51×88 px): parlak yeşil, Tuna kollarıyla sınırlı, İbrail noktasının GÜNEY/
GÜNEYDOĞUSUNA uzanan dar bir bölge; İbrail noktası bölgenin batı/kuzey kenarında.
Altta kesik etiket "…ACARISTAN" — **[M]ACARİSTAN** okunuyor olabilir (atlas: İbrail
`s:macaristan` **1281–1330**); bu bir ÇIKARIM, görselin tarihi **ölçülemedi**.
- Atlas İbrail: `s` macaristan 1281→1330 · eflak 1330→1462 · `v` eflak 1462→1538 ·
  (Osmanlı doğrudan 1538→1829) · `v` eflak 1829→1859 · `v` romanya 1859→1878 · `m: Silistre`.
- Ham Voronoi (1300-01-01): adanın dört örnek noktası (28,05/45,15 · 28,05/45,0 · 27,98/44,9 ·
  28,1/45,25) **İbrail hücresinde**; hücre kutusu [27,45–28,22 D · 44,5–45,45 K]. Motorun
  yerleşim başına petek geometrisi `donemler.js`te saklanmıyor (`PETEKLER` yalnız ad taşır)
  ⇒ görseldeki gerçek petek **ölçülemedi**.

**TDV `ibrail`** (HTTP 200): "Osmanlı idaresi altına girdikten sonra İbrâil Rumeli eyaletinin
Silistre sancağına bağlı bir kaza merkezi"; "İbrâil kazasının sınırları daha sonra biraz
genişlemiş **1695'te** Tuna'nın sol yakasında dikdörtgen şeklindeki bir arazi parçası ile bu
nehir içinde bulunan büyükçe bir adayı da (**Insula Mare a Brǎila veya Balta Brǎila**) içine
almıştır." Osmanlı idaresi 1538–1540 arası başlıyor (yıl kesin değil), 1830'a kadar.

### HÜKÜM
Görseldeki bölge Tuna kolları arasındaki **Balta Brǎila (Büyük İbrail Adası)** ise:
**1695–1829 için EVET** — TDV adanın İbrail kazasına katıldığını açıkça yazıyor. 1695 öncesi
için TDV hüküm vermiyor (**bulunamadı**). Görsel 1281–1330 (Macaristan) dönemindense "kaza"
kavramı yoktur; o dönem için kaynakta bölgesel hüküm **bulunamadı**. Kesin cevap için görselin
tarihi gerekir — Emre'ye tek soru: *"H-0005 ekran görüntüsü hangi tarihte?"*

---

## 4. Yan bulgular (görev dışı, kayıt için — düzeltmedim)
1. **Kahul + Bolgrad** `v` 1856-03-30→1878-07-13: `kid` alanı YOK ve `k` metni 1859 sonrasında
   da "Boğdan Voyvodalığı" diyor (Boğdan 1859-01-24'te bitti → hayalet devlet, `§3.5`).
   Olması gereken: `kid:bogdan` →1859-01-24, `kid:romanya` 1859-01-24→1878-07-13.
2. **Güney Besarabya 1856 hattı** (`d1856-bes-guney-bg/-rp`) D-YOK, koordinatsız; kayıt notu
   "Katamori'nin koordinatı BULUNAMADI" diyor. Kuzey Prut hattı bu yüzden 47,10 K'de bitiyor;
   Paris md. 20'nin bitiş noktası Katamori (Cotul Morii ~46,9 K?) ile arada ~25 km Prut çizilmiyor.
3. **Bukovina hatları** (`d1775-ah-bukovina-bg/-rp`, `d1878-ah-ro-bukovina-*`) D-YOK — görselin
   sarı|kırmızı sınırında hat yok; bu tasarım (koordinatsız), kusur değil.
