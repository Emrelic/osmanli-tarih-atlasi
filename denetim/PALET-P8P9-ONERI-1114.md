# P8 + P9 — PALET VE ALAN ŞEMASI: ANALİZ VE ÖNERİ (KOŞU 39 HAZIRLIK #5)

**SADECE ÖNERİ.** `arac/renkler.py`, `arac/girdi.py`, `arac/uret_petek.py`, `data/*.js` DEĞİŞTİRİLMEDİ.
Bütün denemeler scratchpad kopyalarında (arac kopyası + `data/` `js/` junction) yapıldı.

- Ölçüm ağacı: `origin/main` `0e889da30` (5636 nokta · 2246 BOYALAR kimliği · 1739'u veride kullanılıyor).
- Araçlar: `py arac/renk_olc.py --ayrinti` (taban), kopyalarda `renk_olc.py` (deneme).
- KOSU39-BORC #5'teki sayılar (454 / 9 çift / 164 / ~120) ANALIZ-1113'ten geliyordu; bugünkü ölçüm
  aşağıda (veri büyüdüğü için çakışan çift 9 → **12**, beyansız paylaşım grubu ~120 → **108**).

## 0. Üç ana bulgu (önce bunlar)

1. **164 + 6 + 12'nin büyük kısmı PALET değil ÖLÇER kusurudur.** `renk_olc.ayni_anahtar()` `harita:` alanına
   bakar; motor ise boya anahtarını `id`den alır, yalnız `id` BOYALAR'da yoksa `harita:`ya düşer
   (`uret_petek.py` ~1141, "YOL A'"). Ölçülen 164 çiftin **hepsinde** iki kaydın kendi `id`si BOYALAR'da
   tanımlı ⇒ gerçekte aynı anahtarı paylaşan **0** çift. Etkin renkler 163 çiftte ΔE ≥ 12.
2. **`renk_olc.py` MÖ tarihleri dizgi olarak karşılaştırıyor** (`"-0201-01-01" < "-0770-01-01"` Python'da
   True, kronolojik olarak yanlış). Komşuluk, aynı-hex, aynı-anahtar, engel kümesi ve yakın-renk ölçümlerinin
   hepsinde MÖ çiftler hem yanlış alarm (roma-imp ↔ ptolemai/ppnb-guney-levant/selinous, bati-han ↔ bati-zhou)
   hem **gizlenen gerçek çakışma** (+12 "yakın-ama-değmeyen") üretiyor. Düzeltme `renk_olc.py` içinde kalır, tuz DEĞİL.
3. **`renkler.py` + `girdi.py` ayrı geometri tuzunda YOK** (`uret_petek.py:662-681` `_ONB_GEO_TUZ`; genel tuz `:645`,
   MOTOR-LEGO-0925: `motor` sözlüğünden `renkler.py`/`girdi.py` çıkarılıyor). Yalnız "genel" tuz
   (k1 · col · kusat · dolgu katmanları) değişir; `govde` (koşunun ~%78'i) · `osm` · `sb` isabet almaya devam eder.
   "Tam yeniden inşa 7-8 saat" varsayımı bu iki dosya için **muhafazakâr** — ama süre ÖLÇÜLMEDİ (bkz. §6).

## 1. Mevcut renk_olc sayıları (taban, `origin/main` 0e889da30, `--ayrinti`)

| Ölçüm | Sayı | Not |
|---|---|---|
| Altlıktan ayrışmayan (düz zemin) | 0 | kabartma: açık ton 30 · **koyu ton 108** (rapor, çıkış kodunu etkilemez) |
| **Denizle karışan** | **454** = DAL1 240 + DAL2-ek 214 | deniz `#c4dcea`; `renk_olc.py:857-868` (`deniz_ihlal()` 293-306). Özet satırında (952-957) YOK — ayrı blok olarak basılıyor, çıkış kodunu etkilemez |
| Komşusuyla çakışan | **12 çift** | ΔE 0,0 ×6 · roma-imp ×3 · amalfi↔napoli 5,9 · delhi↔ranthambore 8,4 · aragon↔empuries 11,3 |
| Aynı anahtar + tarih örtüşen | **164 çift** (`ingiltere` 122, `portekiz` 15, `fransa-cumhuriyet` 6, 15 anahtar daha) | 18 `harita:` anahtarı |
| Aynı hex + eşzamanlı + <600 km | **6 çift** | atina-dukaligi↔atinadukaligi · bosna↔bosna-kralligi · fetret-musa↔musa-celebi · fetret-suleyman↔suleyman-celebi · avusturya↔habsburg · bati-han↔bati-zhou |
| Yakın ama değmeyen | **47 ihlal** (+363 sınırda) | ΔE<12, eşzamanlı, <600 km |
| Beyansız paylaşım hex grubu | **108 grup / 476 üye** (toplam 129 paylaşımlı hex, 19'u beyanlı) | `renkler.py` import uyarısı; her import'ta 108 satır basıyor |
| Ölçülemedi | **1478 çift** (aynı-hex) · **88 665 çift** (yakın-renk) | "dönemi yok" = kimliğin veride hiç `s:`/`v:` dönemi yok (1739/2246 kullanımda) |

Özet satırı: `🔴 0 görünmez · 12 çakışma · 164 aynı-anahtar örtüşmesi · 6 aynı-hex çakışması · 47 yakın-ama-değmeyen`.

## 2. Bulgu sınıfları — (a) kök neden · (b) öneri · (c) ölçülen etki · (d) tuz

Deneme matrisi (aynı veri, kopyalarda tam `renk_olc` turu; bkz. §5):

| Senaryo | deniz | komşu çakışma | aynı-anahtar | aynı-hex | yakın | kabartma (koyu) |
|---|---|---|---|---|---|---|
| M0 taban | 454 | 12 | 164 | 6 | 47 | 108 |
| MA ölçer düzeltmesi F1+F2 (palet aynı) | 454 | 7 | 0 | 1 | 47 | 108 |
| MB ölçer F1+F2+F3 (palet aynı) | 454 | 3 | 0 | 0 | 59 | 108 |
| M1 palet-deniz (eski ölçer) | 21 | 11 | 164 | 5 | 34 | 68 |
| M2 palet-deniz+çift (eski ölçer) | 19 | 12 | 164 | 5 | 12 | 66 |
| M4 palet-deniz + yeni ölçer | 19 | 3 | 0 | 0 | 47 | 67 |
| **M3 palet-deniz+çift + yeni ölçer** | **19** | **2** | **0** | **0** | **11** | **66** |

### S1 — Denizle karışan 454

(a) **Kök neden: iki ayrı kalibrasyon boşluğu.**
- Ölçütün iki kolu: DAL1 ΔE<18 (240) ve DAL2 `|ΔL*|<4 ∧ ΔE<51` (214 ek). DAL2'nin ΔE<51 tavanı çok geniş:
  214'ünün 101'i deniz renginden ΔE ≥ 35 uzakta (sarı, pembe, yeşil) — yalnız **parlaklık yakınlığı** yüzünden bayraklı.
  Dağılım (ΔE): <6: 36 · 6-12: 26 · 12-18: 177 · 18-25: 42 · 25-30: 43 · 30-35: 29 · 35-40: 41 · 40-45: 50 · 45-52: 10.
- 454'ün **296'sı veride kullanılıyor** (şu an haritada), **158'i yalnız künye** (renk önceden verilmiş, dönemi yok).
  DAL1'in 151'i veride; ΔE<12 olan 44 kimlik ekranda denizle gerçekten karışıyor (ör. emevi 3,3 · vizigot/akitanya/asturias 3,7).
- 454 anahtar **252 benzersiz hex**; 53 paylaşımlı hex 255 anahtarı taşıyor (`#03a6ff` ×39, `#05eba2` ×22, `#8ec2ff` ×15).
  Büyük gruplar tek hex olarak taşınamıyor (birleşik engel kümesi çözümsüz) ⇒ **gruplar bölünmeli**.
- `renkler.py:_su_yakinligi_dogrula` (SU_ESIK_DE 18) **HAM hex'i** denize karşı ölçer, bindirilmiş rengi değil;
  bu yüzden 0 uyarı verir, `renk_olc` ise 240 bulur. Nöbetçi sessizdir.

(b) **Öneri:** BOYALAR'da **435 anahtarın** hex'i değişir (Ek tablosu; bu 455'lik tablonun içinde). Yöntem:
- 262 144 renklik ızgara (adım 4), şu süzgeçler: bindirilmiş L* ≥ 59,6 (açıklık tabanı) · altlıktan ΔE ≥ 16 ·
  denizden ΔE ≥ 19 ve DAL2'ye girmemek (|ΔL*| ≥ 4,6) · kabartma tonlarından ΔE ≥ 15,5 (yoksa gevşet) ·
  engel kümesinden (`engel_kumesi`: Voronoi komşuları ∪ 1500 km eşzamanlı ∪ Osmanlı ikilisi) ΔE ≥ 13,5
  (yoksa 12,5) · başka kimliğin hex'i olmamak.
- Hedef fonksiyon: **kendi rengine en yakın** geçerli hex (kimlik sürekliliği). En zor (en çok engelli) önce.
- Aynı polity takma adları (`PAYLASIM` gerekçesi "ayni polity") **birlikte** taşınır; öteki paylaşım grupları **bölünür**.
- Kayma (kendi görünen renginden ΔE76): ort 11,0 · medyan 8,0 · p90 21,9. 272/455 anahtar ΔE<10 (ince ayar);
  **54 anahtar ΔE>20, 11 anahtar ΔE>40** — bunlar göz kontrolü ister: dogu-macar-kralligi `#80cf6a→#4c0cc4`,
  valensiya-amiriler `#3b8bfd→#f4c400`, zaragoza-hudiler `#7cd2a1→#cc0098`, sovyet-rusya `#00d9ff→#2414f8`
  (673 yerleşim dönemi, kimliği en görünür devletlerden), raska-buyuk-prensligi, sipsong-panna…
  İlk tura yalnız ΔE ≤ 20 olanları (≈401) almak, 54'ünü elle bakıp ayrı tura bırakmak güvenli yoldur.
- Alias grubu `#d2ea8d` (kaffa/kaffa-kralligi) birlikte taşındığı için `PAYLASIM` anahtarı yeni hex'e güncellenmeli
  (yoksa import "BEYAN EDILEN PAYLASIM BOZULDU" basar).

(c) **Ölçülen etki (M1/M3):** 454 → **19** (DAL1 10 + DAL2 9). Yan kazanç: kabartma koyu ton 108 → **66**,
  açık ton 30 → 7; beyansız paylaşım grubu 108 → **56** (218 üye; gruplar bölününce paylaşım kendiliğinden azaldı).
  Kalan 19 = çözülemeyen yoğun Avrupa kümesi (aşağıdaki liste).

(c2) **Çözülemeyenler (hiçbir ızgara hex'i ΔE ≥ 12,5 ile hem denizi hem komşuları aşamıyor):**
akitanya-dukaligi, ancona-cumhuriyeti, braunschweig-luneburg-dukaligi, cenova, chalandritsa-baronluk,
champagne-kontlugu, fetret-suleyman/suleyman-celebi (alias), floransa, lur-i-kucek, mayorka, montferrat-markizligi,
piacenza-komunu, portekiz, prusya, rodos-sovalyeleri, silezya-piast, sirbistan-nemanjic, sirp-despotlugu;
çift fazından ayrıca amalfi-cumhuriyeti/napoli-dukaligi, empuries, besalu/urgell gibi İtalya-İber-Provence kümesi.
Çözüm: ya komşularıyla **birlikte** yeniden dağıtım (küme çözümü, `renk_olc --oner a,b,c` birlikte çözer)
ya da DAL2 ölçütünün kalibrasyonu (aşağıda seçenek P).

**Seçenek P — ölçüt kalibrasyonu (KARAR İSTER, palet değil ölçüt değişimi):** DAL2'nin ΔE tavanı 51 yerine
30/35/40 olursa hedef küme 323/352/393'e iner (şimdi 454). Ölçütü gevşetmek bir yayın kararıdır; ben yalnız sayıyı veriyorum.

(d) **Tuz:** yalnız `renkler.py` (hex satırları) — genel tuz. BOYALAR anahtarı eklenip silinmiyor, yalnız hex.

### S2 — Komşusuyla çakışan 12 çift

(a) Çiftlerin 3 sınıfı:
- **5 beyanlı takma ad çifti, ΔE 0** (atina-dukaligi↔atinadukaligi, avusturya↔habsburg, bosna↔bosna-kralligi,
  fetret-musa↔musa-celebi, fetret-suleyman↔suleyman-celebi): `PAYLASIM`da "ayni polity, harita degismesin"
  gerekçesiyle KASA'nın kasıtlı eklediği takma adlar; ölçer bu beyanı tanımıyor ⇒ **ölçer kusuru**.
- **4 MÖ yalancı çakışma** (roma-imp↔ptolemai 5,5 · roma-imp↔ppnb-guney-levant 6,8 · roma-imp↔selinous 9,9 ·
  bati-han↔bati-zhou 0,0): MÖ dizgi kıyası ⇒ **ölçer kusuru** (F3).
- **3 gerçek palet çakışması:** amalfi-cumhuriyeti↔napoli-dukaligi 5,9 · delhi-sultanligi↔ranthambore-cauhan 8,4 ·
  aragon↔empuries 11,3.

(b) Ölçer: F2 (beyanlı takma ad çiftini atla) + F3 (MÖ kıyası). Palet: gerçek 3 çift için çift fazı (§S1 yöntemi,
engel = çift + bütün komşular); çözücü delhi↔ranthambore'yi kapattı, amalfi/napoli ile aragon/empuries'i kapatamadı.
(c) MA 12→7, MB 12→3, M3 12→**2** (amalfi↔napoli, aragon↔empuries).
(d) Ölçer kısmı tuz değil; 3 gerçek çift renkler.py (S1 ile aynı paket).

### S3 — Aynı anahtar + tarih örtüşen 164

(a) **Ölçer kusuru, veri kusuru değil, palet kusuru değil.** 164 çift = 18 `harita:` anahtarı (ingiltere 122 [17 koloni],
portekiz 15, fransa-cumhuriyet 6, ingiliz-malaya 3, italya 3, meiji-japonya 3, 11 anahtar 1'er). Hepsinde en az bir
kaydın kendi `id`si BOYALAR'da var ⇒ motor `id`yi kullanır, `harita:`ya düşmez. Etkin renkler: 163 çiftte ΔE ≥ 12
(124'ü komşu değil, 39'u komşu ama ΔE ≥ 12); 1 çift ΔE<12: milano-dukaligi↔visconti 1,2 (komşu değil — yakın-renk
bölümünde zaten görünür: asti-komunu↔milano-dukaligi 1,25 gibi).
(b) `renk_olc.py` `ayni_anahtar()`: etkin anahtar = `id` BOYALAR'da ise `id`, değilse `harita:` (BOYALAR'da ise):
```
-        if d.get("harita") and d.get("f") and d.get("t"):
-            grup[d["harita"]].append(d)
+        _ek = d["id"] if d.get("id") in BOYALAR else d.get("harita")
+        if _ek in BOYALAR and d.get("f") and d.get("t"):
+            grup[_ek].append(d)
```
(c) 164 → **0** (MA/MB/M3/M4 hepsinde). (d) Tuz DEĞİL (`arac/renk_olc.py`).

### S4 — Aynı hex eşzamanlı 6 çift
(a) 5'i beyanlı takma ad (S2), 1'i MÖ yalancı çakışma. Gerçek paylaşım çakışması: **0**.
(b) `ayni_hex()`: `PAYLASIM` gerekçesinde "ayni polity" geçen aynı-grup çiftini atla (F2) + F3.
(c) 6 → **0**. (d) Tuz değil.

### S5 — Beyansız paylaşım hex grupları (108 grup / 476 üye)
(a) 129 paylaşımlı hex'in 19'u beyanlı. İmport uyarısı ham hex'te 108 grup basar; açıklık-tabanı lift'i sonrası bellekteki
sayım 110'dur (ölçüm bu 110 üzerinden; aşağıdaki sınıf toplamı 110). Sınıflama (çift-bazlı, aynı-hex mantığıyla):
- **86 grup** en az bir üyesi veride dönemsiz (künye-only, 226 üye) ⇒ **ölçülemez** (şimdilik çatışma yok, ileride doğabilir);
- 11 grup ardıl/eş-bölge ama eşzamansız (bilerek ardıl paylaşım adayı: ferrara→modena emsali);
- 8 grup eşzamansız + uzak; 4 grup eşzamanlı ama ≥600 km; **1 grup gerçek çakışma** (`#8ec2ff`: bati-han↔bati-zhou, MÖ yalancı).
- Tesadüf ≠ kasıt ayrımı hex ızgarasından gelir: `oner()` 6'lık ızgaradan seçtiği için aynı hex farklı oturumlarda
  yeniden çıkıyor; kasıt belirtisi yalnız beyan.
(b) (i) S1 paketi 108 grubu kendiliğinden **56**'ya indiriyor (büyük paylaşım gruplarını bölerken). (ii) Kalan 56 için
`renkler.py` içinde AYNI paketle: `_paylasim_dogrula`'nın 108 satır basması yerine tek özet satırı + ölçerin
(`renk_olc`) çatışmayı ölçmesi; ardıl/uzak sınıfı (≈23 grup) `PAYLASIM`a yazılır. (iii) Beyanı yazılmayacak 86 "ölçülemez" grup
için beyan UYDURULMAZ — veri gelince `renk_olc` zaten ölçer.
(c) 108 → 56 (M3). Beyan etmek görsel kazanç sağlamaz, yalnız gürültüyü keser. (d) renkler.py (S1 ile aynı paket).

### S6 — Yakın-ama-değmeyen 47 (+ MÖ gizli 12)
(a) F3 uygulanınca MÖ çiftler doğru eşzamanlılıkla ölçülür: **47 → 59** (gerçek sayı; 12 gizli çakışma ortaya çıkıyor —
ör. iskender-imparatorlugu↔selevkos 2,5 · akhaia-birligi↔antigonid-makedonya 10,4 · akragas↔mozia 5,5).
(b) Çift fazı (S1 yöntemi, her çiftin yüksek dereceli ucu taşınır). (c) M3'te **11**'e iner (kalan: asti-komunu↔milano-dukaligi,
floransa↔vercelli-komunu, empuries↔muvahhidler, cenova ×4, bergamo-komunu ×2, ancona↔vercelli, arles↔urgell — hepsi
S1'in çözülemeyen İtalya kümesi). (d) renkler.py.

### S7 — Ölçülemeyen çiftler
1478 (aynı-hex) / 88 665 (yakın-renk): hepsi dönemsiz künye. Palet değil veri/künye borcu. M3'te aynı-hex ölçülemez sayısı 403'e
iner — bu, paylaşım grupları bölününce çift sayısı azaldığı içindir, çözülme DEĞİLDİR. Öneri yok; sayı raporlanmaya devam.

### S8 — Kabartma (yan konu)
Koyu kabartma 108 ihlal / açık 30; S1 paketi bunu 66/7'ye indirdi (kabartma ≥15,5 süzgeci ile). Ayrı karar: kapı bağlanmıyor.

## 3. `arac/girdi.py` — BILINEN_ALANLAR (P9) — YALNIZ ÖNERİ

**Düzeltme:** `s.eksklav` **BILINEN_ALANLAR'a değil `BILINEN_DONEM_ALANLARI`'na** girer (`s:` dönemi alanı; kütükte kardeşi
`enklav` zaten orada). `konum_kesinlik` kayıt-düzeyi alandır ⇒ `BILINEN_ALANLAR`.

Ölçüm (`py arac/renk_olc.py`/`girdi.yukle()`): `UYARI alan: 'konum_kesinlik' ... 126 kayıtta` · `'s.eksklav' ... 251 kayıtta`.
- **126 kayıt** = 125 `yerlesimler_once1281_yt_*.js` (+1 `yerlesimler_e9353f.js`); değerler `'bolge'` 75 · `'yaklasik'` 51.
  Okuyan kod YOK (grep: arac/ ve js/ içinde tüketici yok; VERI-YAPISI.md'de de tanımsız). Yalnız bilgi alanı.
- **251 uyarı = 198 yerleşim kaydı** (251 dönem; `yukle()` kayıt değil dönem say-ıyor). `eksklav:true` her biri True.
  Okuyan: `denetle.py:3693,3696` (Değişmez 7 muafiyeti: `p.get("enklav") or p.get("eksklav")`); motor okumuyor
  (VERI-YAPISI.md:229-232). BORÇ'taki 247 bayat (#151 öncesi enklav sayısı).
- Uyarı bir **HATA DEĞİL** (girdi.py:648 "UYARIDIR"); kimse parse etmiyor (`UYARI alan` için başka tüketici yok).
  Eklemek **hiçbir doğrulamayı değiştirmez, hiçbir hata kapanmaz**; yalnız her `yukle()` çağrısında (renk_olc tek turda
  ≥ 6 kez) basılan iki uyarı satırı susar. Kopyada sınandı: eklemeden sonra bu ikisi uyarı listesinden düştü, 5636 nokta aynı.
- Aynı satırda **6 uyarı daha** duruyor (aynı tek tuz olayına katılırsa bedelsiz): `dogrulanmis_bosluk` (1), `ic_not` (1),
  `karar_notu` (1), `kaynak_kur` (1), `s.ic_not` (2), `s.ic_not_takvim` (17). Öneri: hepsi birlikte kaydedilsin.

Önerilen diff (`arac/girdi.py`):
```
 BILINEN_ALANLAR = {
@@  "kaynak": "TDV slug ...",
+    "konum_kesinlik": "konum güvenilirliği — 'yaklasik' (nehir/vadi/yöre) · 'bolge' (yalnız bölge, "
+                      "temsilci nokta). Motor/denetim OKUMAZ (bilgi alanı). Değerler ölçüldü: bolge 75 · yaklasik 51.",
@@
 BILINEN_DONEM_ALANLARI = {
@@  "enklav": "True ise yerleşimin BU DÖNEMDE hinterlandı yoktur ...",
+    "eksklav": "True ise ana gövdeden KOPUK ama hinterlandı OLAN toprak (VERI-YAPISI.md #151). "
+               "Okuyan: denetle.py Değişmez 7 muafiyeti; motor OKUMAZ. Yalnız kaynaklı hükümle yazılır.",
```
İsteğe bağlı ikinci iyileştirme (aynı dosya): uyarı sayacı `bilinmeyen[...]` listesine yinelenen kaydı eklemesin
(`if kimlik not in liste`) — "251 kayıtta" aslında 198 kayıt.

## 4. `renk_olc.py` ölçer düzeltmeleri (tuz DEĞİL — hemen yapılabilir)

Üçü kopyada uygulandı ve ölçüldü (M A/B). Diff taslağı (hepsi `arac/renk_olc.py`):
- **F1** `ayni_anahtar()` etkin boya anahtarı (§S3).
- **F2** `PAYLASIM` gerekçesinde "ayni polity" geçen aynı-grup çifti `denetle()` çakışma döngüsünde ve `ayni_hex()` içinde atlanır:
  `_ALIAS = {kimlik: hex}` (PAYLASIM'dan) · `if d < DE_KOMSU and not _alias(a, b)` · `if _alias(a, b): continue`.
- **F3** MÖ kıyası: `girdi.yukle()/oku_devletler()` dönüşünde `f`/`t` (ve `kur`/`bit`) alanları `gun.gun()` ile kıyaslayan
  `str` alt sınıfına sarılır (≈25 satır, yalnız renk_olc içinde; `girdi.py`ye DOKUNMAZ — o tuz dosyası).
  17 kıyas noktasını tek tek değiştirmek yerine bu sargı seçildi. `denetle.py` ve öteki araçlardaki benzer dizgi kıyaslarının
  aynı kusuru taşıyıp taşımadığı **ölçülmedi**.
- **F4** (öneri, ölçülmedi): özet satırına deniz (DAL1/DAL2 birleşim) ve kabartma sayısını ekle; bugün özet 454'ü göstermiyor.

## 5. Yöntem ve sınırlar

- Kopya düzeni: `<scratchpad>/kopya_*/arac` (worktree'den kopya) + `data`/`js` junction; `renk_olc.py` `__file__` göreli
  yol kullandığı için ana ağaç etkilenmedi (`renkler.py` yalnız kopyada değişti). Her senaryo tam `renk_olc.py` turu.
- Çözücü: numpy, adım-4 ızgara, kademeli gevşetme (13,5+kabartma → 13,5 → 12,5): 434 çözülen deniz biriminin 427'si en sıkı
  kademede, 1'i kabartmasız, 6'sı 12,5'te çözüldü (18 birim çözülemedi). Süre: deniz fazı ~9-12 dk (tek çekirdek).
- M1 satırında 2 anahtar (azerbaycan-/gurcistan-demokratik-cumhuriyeti: tuple iki satıra bölünmüş) yamaya girmedi; M2-M4'te girdi
  (M1'in 21'i bu yüzden M4/M2'nin 19'undan 2 fazla).
- MA satırının deniz/kabartma sütunları taban değerdir (palet aynı; yalnız özet satırı alındı).
- **Öneri BUGÜNKÜ veriye göredir** (5636 nokta). Veri değişince bayatlar; uygulamadan önce çözücü yeniden koşturulmalı
  ve sonuç `py arac/renk_olc.py --dogrula <liste>` ile doğrulanmalı. Çözücü betiği scratchpad'de (kalıcı değil).
- `renk_cikti.py` (çizili gövde komşuluğu) bu deneyde **koşturulmadı**; Voronoi dışı komşuluk ölçülmedi.

## 6. Tuz riski ve tek tur için küme seçimi

- **Tuz dosyaları:** `renkler.py` ve `girdi.py` yalnız "genel" tuzda (`uret_petek.py:645`); geometri tuzunda değiller
  (`_ONB_GEO_TUZ`, 662-681). `uret_petek.py` ve `motor_onbellek.py` değişmediği sürece `govde`/`osm`/`sb` katmanları
  **isabet almaya devam eder**; yeniden hesaplanacak: `k1` (kara/göl/col/kıyı tamponu), `col`, `kusat`, `dolgu`.
  Bu katmanların süresi ÖLÇÜLMEDİ (HAVVA önbellek logundan okunmalı).
- Hex-only değişim motor çıktısının geometrisini değiştirmez ama renk alanları (`DEVLET_KAYIT`, `devletler_harita.js` `renk`)
  yeniden yazılır ⇒ koşu gerekir; `paketle.py yenile` + `surum_damgala` normal zincir.
- Koşu sürerken `renkler.py`/`girdi.py`'ye dokunmak YASAK (`KOSU-YAYIN.md`); Koşu 37 ve 39 sınırını KASA/HAVVA belirler.
- **Tek tur için en yüksek getiri / en düşük risk:** tuz gerektirmeyen ölçer düzeltmeleri önce (maliyet 0); tuz tek olay olacağı
  için `renkler.py` içinde **tek commit'te**: S1+S6 hex kümesi + `PAYLASIM` güncellemesi + `_paylasim_dogrula` özeti +
  `_su_yakinligi_dogrula`'yı bindirilmiş renge çevirme + `girdi.py` 2+6 alan.

## 7. Öncelik listesi (getiri / risk)

| # | İş | Dosya | Tuz | Beklenen etki (ölçüldü) | Risk |
|---|---|---|---|---|---|
| 1 | Ölçer F1+F2 | `renk_olc.py` | yok | 164→0 · 6→0 · 12→7 (yanlış alarmlar gider) | çok düşük |
| 2 | Ölçer F3 (MÖ kıyası) | `renk_olc.py` | yok | komşu 7→3 · yakın 47→**59** (12 gizli çakışma görünür) | düşük; sayı artar, beklenmedik |
| 3 | Ölçer F4 (özet satırı deniz+kabartma) | `renk_olc.py` | yok | görünürlük | çok düşük |
| 4 | Palet S1+S6: ΔE≤20 hex alt kümesi (~401 anahtar) | `renkler.py` | genel tuz | deniz 454 → ≈50-100 (alt küme ölçülmedi; tam küme 19) | orta: görünür renk değişir, göz kontrolü |
| 5 | Palet: kalan 54 büyük-kayma anahtar (ΔE>20) | `renkler.py` | aynı paket | deniz →19 | orta-yüksek: sovyet-rusya dahil kimlik değişimi |
| 6 | `girdi.py` 2 alan (+6) | `girdi.py` | genel tuz (#4 ile aynı olay) | 2 (8) uyarı satırı susar; doğrulama değişmez | çok düşük |
| 7 | `PAYLASIM`: #d2ea8d güncelle, ardıl/uzak ≈23 grup beyan, import uyarısını özetle | `renkler.py` | aynı paket | 108→56 grup; gürültü kesilir | düşük |
| 8 | `_su_yakinligi_dogrula` bindirilmiş renge | `renkler.py` | aynı paket | nöbetçi 0 yerine 240'ı görür | düşük |
| 9 | Çözülemeyen ≈26 anahtar: küme çözümü (`--oner a,b,c`) ya da Seçenek P (DAL2 kalibrasyonu) | `renkler.py` / `renk_olc.py` | kalıcı karar | 19 → 0'a yakın | karar ister |

Not: #4 için "ΔE≤20 alt kümesi" ayrı ölçülmedi; M3 tam küme ölçümüdür. Alt küme sayıları tahmindir (DAL1'in 240 anahtarının
ΔE<12 olan 62'si kesin hedef; DAL2'nin ΔE'si yüksek olanları parlaklık kaymasıyla kapanır).

## 8. Ölçemediklerim

- HAVVA'daki gerçek önbellek isabeti / `k1`-`col`-`kusat`-`dolgu` süreleri (genel tuz değişirse ne kadar sürer).
- Ayrı ayrı alt kümelerin (yalnız DAL1 / yalnız ΔE≤20) `renk_olc` sayıları — yalnız tam küme ve ölçer düzeltmeleri ölçüldü.
- Çizili gövde komşuluğu (`renk_cikti.py`); kabartmanın gerçek ekranda görünümü; hex'lerin gözle kabulü.
- `denetle.py`/öteki araçlarda MÖ dizgi kıyası kusuru var mı.
- 86 "ölçülemez" paylaşım grubunun gelecekteki durumu (dönemsiz künyeler).
- İtalya/İber/Provence yoğun kümesinin (≈26 anahtar) tam çözümü: adım-2 ızgarayla ikinci geçiş denendi ama bu raporun kapanışına yetişmedi.

## Ek A — önerilen BOYALAR hex değişimi (M3 durumu; bugünkü veri, `kimlik eski yeni`)

"eski" bellekteki hex (açıklık-tabanı lift sonrası) — kaynak satırdaki hex ne ise yenisiyle değiştirilir. 455 satır.
Çözülemeyenler yoktur bu listede (S1 c2).
```
12-su-quan #f8c054 #b48818
abhazya-prensligi #3f95ee #1078dc
adamava #2484d2 #0050fc
afganistan #e4b1d5 #8c8094
ahamenis-misir-2 #c9a6f5 #cc9cf0
akhaia-birligi #c9a6f5 #f878a8
alania-krallik #5eecb2 #48cc94
alas-ozerkligi #05eba2 #04d88c
alman-guneybati-afrikasi #9fde94 #70c478
alman-kamerun #d6c0ef #b88494
an-lushan-yan #9ea4f6 #9c84e4
anau-ia-kultur #1ca4f3 #007cdc
angola-unita-fnla #d6c0ef #d4a0cc
ani-bagratli-kralligi #5498d7 #0c68a8
antigonid-makedonya #9364b8 #603494
apulya-kontlugu-melfi #9ea1f3 #a084e0
aquileia-patrikligi #52de9e #30d0a0
arap-cumhuriyetleri-federasyonu #05eba2 #08d890
arnavutluk-iskenderbey #fab1cf #303cfc
aro-konfederasyonu #24aed2 #145438
arsakuni-ermenistan #05eba2 #04dc88
arua #96e68d #84c454
arvanid-sancagi #8fe878 #78c85c
asturias #8ec2ff #707090
atina-demokrasisi #26eba3 #00dc80
atropatene #5eecb2 #009410
austrasia #6a99f5 #4874e0
avad #deabe4 #fc9884
avustralya #f9b169 #f4a050
avusturya-hollandasi #8fe5ac #00b8e0
avusturya-ikinci-cumhuriyet #6bd58f #50c0b8
azerbaycan-demokratik-cumhuriyeti #eacf75 #fcfc6c
bagdat-memlukleri #05eba2 #00d894
baku-hanligi #68ec93 #4cd04c
balear-tavaif #c8c659 #b0b82c
bambara #248ad2 #30543c
ban-chiang-kultur #84bff7 #607088
barbados-ingiliz #f5c4f2 #d8a0d0
bati-chu-xiang-yu #03a6ff #00c4f0
bati-ganga #3e82b2 #00648c
bati-gokturk #03a6ff #0490fc
bati-han #8ec2ff #3068c4
bati-jin #8cc7f8 #588c8c
bati-qin-qifu #03a6ff #0088f4
bati-roma #f1c1fa #d4a0f0
bati-ukrayna-halk-cumhuriyeti #05eba2 #00dc94
bati-zhou #8ec2ff #6c68ac
bemba #247ed2 #1070cc
beni-ammar-trablussam #b9b0e2 #7c848c
berg-buyuk-dukaligi #78e7be #64c8a0
besalu #3893a2 #00f870
betsileo #249cd2 #007ca8
bima-sultanligi #ff9bf8 #f890f0
bobastro #e3b851 #e8a830
boiotia-birligi #8fe878 #58d054
bonacolsi #461945 #6c3488
bosna-eyaleti #2099f8 #0488f0
bosna-isgal #73e1fc #40cccc
britanya-imp #8ec2ff #5c64ac
britanya-imparatorlugu-carausius #03a6ff #048cfc
bundu #24b4d2 #0078a8
burgund #7cd2a1 #38b48c
butan #03a6ff #008cf4
byzantion-polis #b8d95f #889018
cabo-juby-ispanyol #05eba2 #00dc68
caka-beyligi #68ec93 #6cb094
cao-wei #03a6ff #0084ec
cape-hollanda #e2c4fd #d4a0e0
caracol-maya #03a6ff #0090fc
casma-sechin #f5c4f2 #ec98a0
catuvellauni-krallik #8ec2ff #786cb0
cavnpur-sultanligi #e7b763 #fc985c
cebele-kadilari #c286ac #c8847c
chapa-vardhamana #8ce5aa #74c868
chen #03a6ff #008cf8
chenla #ff9bf8 #b050c8
chimei-jianshi #03a6ff #008cfc
cohor-sultanligi #eab463 #f44c14
copan #2fe9f0 #0cd4d8
creek-konfederasyonu #28d8d8 #00682c
da-qi-liu-yu #adda7a #80c45c
dai-tuoba #ff9bf8 #f890ec
dakya #1ca4f3 #00acd0
dal-riata #03a6ff #0070b8
danimarka-erken #8ec2ff #6064a0
danimarka-hindistani #03a6ff #00accc
daxi-zhang #8ec2ff #6c689c
della-torre-signoria #5ab6e3 #0c88a4
dendi #99cdf8 #74888c
denyanke #debbe6 #f098c8
derbent-hanligi #f5d149 #f09ca4
dervis-devleti #efc840 #d8b028
dingan-guo #9a8ef0 #9888fc
dinh #1596ba #048cac
dogu-anglia #88e873 #1cfc34
dogu-francia #e7cf42 #e8d434
dogu-gokturk #73e1fc #0cd0f8
dogu-gokturk-2 #73e1fc #08ccf4
dogu-han #8ec2ff #786ca4
dogu-macar-kralligi #80cf6a #4c0cc4
dogu-sumatra-sultanliklari #eaaedb #9478c0
dogu-wei #03a6ff #0080e0
dogu-zhou #8cc7f8 #5c9490
doguhebei-ozerk #03a6ff #0480e4
dongdan #66d36f #60cc68
duong-dinh-nghe #95aef2 #9084f0
dvaravati #03a6ff #04a898
ebla-1 #6b7bab #606890
ebla-orta-tunc #5eecb2 #40d09c
eftalit #62bed0 #347488
el-argar-kultur #73b7fd #1c6cc8
el-tajin #98cb77 #249840
emevi #8dc7fc #74c4a4
endulus-emevi #7773a2 #ac1870
endulus-tavaif #88e0e9 #086c70
epir #52e8f6 #30ccd4
erdel #0e8cc8 #083470
eretna #8df0ae #00bc60
erken-harappa #a3da8b #78c490
estonya #88e8e0 #70c4a0
etowah #2496d2 #0074a8
evfat #2ad8ba #20d4b4
eyyubi-meyyafarikin #2cc5fd #04ccf8
falkland-arjantin-isgali #03a6ff #0888f4
falkland-ingiliz #d3a6fc #d4a0dc
fayum-neolitik #0cdeea #00d0f4
fenike-sehirleri #5eecb2 #48cc90
fipa-nyakyusa #24a8d2 #005058
frank #26e8f6 #306c48
fransiz-birligi #adc8fd #807498
fransiz-hindistani #3286b9 #0c6c9c
fransiz-misir-seferi #f5c4f2 #e0a0bc
friuli-dukaligi-lombard #fac368 #f0a440
funan #03a6ff #00c8f8
galatya-keltleri #9cbbff #7c7494
galicya-volhinya #0397c8 #008c6c
galya-imp #8ec2ff #6064a4
gambiya-kolonisi #fab1cf #e89cc0
gec-harappa #fea647 #f8a040
gengshi #8fe5ac #74c490
gepid #05eba2 #04dc8c
germiyan #1eeaf3 #009008
gilan-kiya #4272c3 #68708c
gobero-kultur #8ce5aa #68c88c
gokturk-1 #7d7eb3 #786ca0
gongsun-liaodong #8fe5ac #68c890
guney-han-10krallik #fdb767 #f89c68
guney-liang-16 #ff9bf8 #f490f0
guney-ming #d8d060 #cc8c0c
guney-qi #4fbafd #0078d0
guney-saray-nanbokucho #8ec2ff #5c6498
guney-tang #6a7eb9 #0c68a0
guney-xiongnu #03a6ff #0480e8
gurcistan-demokratik-cumhuriyeti #90eab1 #74c48c
hadramavt #03a6ff #0074a4
halaf-kultur #70c5cf #5cbcb0
hamat #c9a6f5 #d0a0f4
hamsavati-pegu #4faebf #006048
han-devleti-zhou #8fe5ac #6cc88c
han-zhao #03a6ff #088cf8
hanse-birligi #74e6bf #50cca8
harappa #d4c3f7 #d4a0d4
harsha #21a4c3 #4c9490
hasmoni #6277a7 #546490
hawaii-kralligi #ffa5d6 #f498c8
herakleopolis #05eba2 #00d890
herero #24bad2 #14b4c8
hicaz-kralligi #007842 #007890
himera #8fe878 #68cc48
himyar #72e6e3 #14d0c4
hindu-sahiler #1ca4f3 #005cb8
hissar-kultur #02dcfc #00d0ec
hitit #6b7bab #586494
hohokam #06e7a5 #00d898
hong-kong-ingiliz #8ec2ff #6c68a0
hu-xia #fdb767 #f4a04c
hulefa-yi-rasidin #ffaec9 #a88ca4
hunnu-xiongnu #03a6ff #0084f0
ifni-ispanyol #2bbef3 #04b8dc
ihsidi #49b0db #0478a4
ikinci-meksika-imparatorlugu #72e6e3 #58c8bc
imereti #deea90 #fcc804
indo-grek #17def8 #0cd0ec
ingiliz-basutoland #c4bef9 #a884d4
ingiliz-kuzey-amerika #00ade2 #046c80
ingiltere-irlanda-krallik #8ec2ff #48648c
irlanda-dail-cumhuriyeti #8fe5ac #6cc888
iskender-imparatorlugu #11e7a4 #04d89c
ispanyol-filipinler #1596ba #0490b0
ispanyol-florida #fab1cf #e4a0bc
ispanyol-kuba #b7db7f #7cc460
italyan-eritre #7d76a9 #3c386c
italyan-karadag #397ea3 #24708c
izmir-haclisi #c9a6f5 #cc9cfc
janggala #9d95ee #9488f4
jorvik #03a6ff #0080e4
kachchhapaghata-gwalior #6ebffc #0c7090
kaffa #d2ea8d #a8fc38
kaffa-kralligi #d2ea8d #a8fc38
kafsa-benirend-emirligi #60a1ea #2c1ca8
kapadokya-krallik #8fe878 #98f048
kaqchikel-kralligi #d6c0ef #d4a0d0
karluk #62bed0 #04c4ec
karnata-mithila #bdd84a #a4f400
karnatik #aee499 #746c20
karolenj-italya #95e0a6 #74c4a0
karya-hekatomnid #13b07e #3cc4ac
kataban #62bac2 #208094
kefe-gazaria #b7db7f #80c054
khok-phanom-di-neolitik #0e8cc8 #008cb0
kibris-krallik #721e6c #7c60ac
kibris-venedik #c9a6f5 #c898e8
kidarit #03a6ff #0484ec
kilikya-fransiz #05eba2 #00dc70
kilkenny-konfederasyonu #68ec93 #4cd078
kimek #7571af #7068a8
kis-egemenlik #5eecb2 #1cd4bc
kizzuwatna #c9a6f5 #cc9cec
komanci #78bdff #248490
kommagene #5ae9c3 #2cc8c4
kongo-kralligi #f09cf3 #ec98ec
korint #e271d9 #b454d8
korint-birligi #05eba2 #00d88c
korsika-cumhuriyeti #4d82a8 #386888
kotosh-dini-gelenek #5da8f9 #1874d8
kuahuqiao #1fabf7 #047cdc
kuca-hocalari #8fe878 #74c85c
kulasekhara-cera #1febe6 #689088
kurland-dukaligi #88e873 #10b010
kusan #73e1fc #008cac
kusan-sasani #03a6ff #0488f4
kush-krallik #68ec93 #44d080
kuzco-krallik #6f7eaf #686894
kuzey-han-10krallik #7dcbfd #687888
kuzey-qi #ff9bf8 #f494ec
ladak #a8c63c #1c7804
lao-issara-hukumeti #1596ba #0890ac
larsa #0adbfc #00d0f0
lavo #9991d3 #782464
liberya #d2de60 #fcb800
lihtenstayn #56e49e #14c04c
likya-birligi #f5d149 #f8d438
linjiang-krallik #7d76a9 #8070a0
linyi-champa #8fc3f7 #9488fc
liu-song #ff9bf8 #f490ec
lizimakhos #8fe878 #54d058
lori-kralligi #11a141 #244834
louisiana #9fde94 #74c474
luba #dbf396 #a0fc54
lubeck-sehri #f5d149 #f4c830
ma-in #ffbd5d #f0a444
macar-prensligi #05eba2 #009818
magadha #75bdee #1c7c94
magrave-fas #5eecb2 #60c894
maldivler-sultanligi #99cdf8 #08acc4
maliseet #24a2d2 #0084ac
malta-fransiz #d4adf9 #dca0cc
malta-gantija-tarxien #01e0b3 #00d8ac
malta-ingiliz #d4adf9 #d8a0cc
mangkunegaran #03a6ff #00487c
mari-erken #68ec93 #54d060
mari-lim #c9a6f5 #c898e4
massalia #8fe5ac #2c7c64
maya-klasik #adda7a #80c458
mayapan-birligi #d6c0ef #d0a0c8
mecklenburg-dukaligi #a3dc57 #a4fc54
mecklenburg-strelitz #397ea3 #246c8c
medya #7783b5 #746c98
megara-hyblaia #4d82a8 #44648c
mehdi #eaa8ea #e09ce4
mekke-kureys #03a6ff #00ccfc
memuni-harezm #c3a9f9 #c89cf4
min-krallik #7dcbfd #08a4c0
ming-annam-idaresi #03a6ff #68589c
mirdasi #6da1fb #3880f4
misir-erken-hanedan #5eecb2 #40d094
misir-eski-krallik #05eba2 #00d888
misir-eyaleti #e7a4fc #dc9cf4
misir-kavalali #6fdab0 #60c8a0
mitanni #5eecb2 #44cc98
moab #05eba2 #00dc84
moche #f5c4f2 #fc84a8
moldova-demokratik-cum #05eba2 #00dc90
mozia #f04766 #fc5494
murcia-ibn-merdenis #80d9b9 #44b490
namibya-gecici-ulusal-birlik-hukumeti #f5c4f2 #dca0d0
nan-ping-jingnan #8fd793 #74c478
nanzhao #8fe5ac #6cac50
naqada-kultur #7179ab #606494
nassau #05eba2 #00d89c
natalia #e2c4fd #d4a0d8
nekor-emirligi #a39a51 #d494a8
nevers-kontlugu #6ac0c8 #68a498
ngo-hanedani #d2b5e8 #fc78a4
niebla #bac345 #f0fc18
norman-ifrikiye #90e893 #08d88c
norvec-isvec-birligi #8fe5ac #7cc45c
numidia #5eecb2 #58c8a4
obotrit-prensligi #537fc9 #ecfca0
odessos-polis #a3dc57 #98c028
odoakar #10a0ed #007cd8
odris #397ea3 #28688c
ogedey-ulusu #03a6ff #0080e8
olmek #00a6f1 #0074c8
onceki-qin #fdb767 #f4a054
onceki-shu #ff9bf8 #d47cfc
onceki-yan #03a6ff #0084e8
orta-gurcistan-bagrati #05eba2 #00dc88
osrhoene #247db6 #086ca4
ostland #05eba2 #00dc8c
padova-carrara #8fe878 #74c858
pagan #e1e787 #6c9470
pallars #a3c6fb #bc94b8
pallava #a3c6fb #e4a0b8
palmira #58ecb3 #18d4bc
pandya #54e7b4 #10d8a4
parsua #03a6ff #088cfc
pattikera #6286c2 #3858b0
pecenek #42d82a #688c00
peloponnes-birligi #f5d149 #fcd83c
pereyaslavl-knezligi #1ed2d2 #681454
peru-bolivya-konfederasyonu #03a6ff #0088f8
piktler #68ec93 #38d464
polotsk-knezligi #ffbd5d #fc6818
poni #1ee7ea #0c7c38
portekiz-malaka #03a6ff #04d4e0
powys #b0e15c #9814fc
qi-devleti #03a6ff #048cf8
qin-hanedani #8cc7f8 #6c8c8c
ranthambore-cauhan #54d82a #58fc08
raska-buyuk-prensligi #32a85f #a00058
ravenna-eksarhligi #05eba2 #04dc70
revan-hanligi #2292c4 #0080a8
roma-cumhuriyeti-1798 #4d82a8 #00bce4
roma-cumhuriyeti-1849 #52e8f6 #2cccd8
rouran #0397c8 #0088ac
rustemi #9ec97a #74c070
ryazan #cce787 #a47470
ryukyu-shunten-eiso #97cc87 #74c080
saar-havzasi-mandasi #5c8fa3 #0070c8
sahaptin #2484cc #084888
sahra-sanhaca #a5b2e6 #b890b8
sait-26-hanedan #c9a6f5 #a08cf4
sakalar-bati-satraplar #17def8 #00d4e8
saksonya-dukaligi #0397c8 #642408
saksonya-eski #75e2dc #4cc8c0
saksonya-weimar #88e873 #80ec48
sanxingdui-kultur #08e49f #04d894
sarawak-brooke #78e090 #24d474
sardinya-aragon #52e8f6 #28ccd8
sardinya-piyemonte #28d7fb #2840fc
sasani #7bdcb8 #6ca884
sealand-1 #05eba2 #00d884
seddadiler-ani #9795fc #8058ac
selanik-imparatorlugu #245ad8 #004c2c
selanik-kralligi #2454d8 #b8009c
selevkos #06e0a7 #00fc7c
senegambiya #debbe6 #d4a0c8
serbedariler #a5f3c3 #84c82c
sfaks-hammu-emirligi #3ab8ca #00acc8
shimao-kultur #05e3ad #00d8a4
shu-han #8cc7f8 #648088
sican #81a6f5 #6478e4
sicilya-emirligi #faa4f8 #bc2c10
sidamo-kralliklari #75aef5 #4868c4
sipsong-panna #6ebffc #6c20fc
sirbistan #518790 #e0f89c
sirbistan-prensligi #7098c6 #5c6494
sirvan-hanligi #f24c9a #f82044
skit-krallik #68ec93 #4cd07c
smolensk-knezligi #1ca4f3 #006c80
solima-yalunka #5a78d8 #0c80fc
somali-ingiliz-himayesi #5282ac #206890
somavamsi #6eb2e5 #186c94
sonraki-han-5hanedan #03a6ff #606498
sonraki-liang-5hanedan #8fe5ac #2cd0b0
sonraki-shu #ff9bf8 #f494f0
sonraki-tang-5hanedan #6a7eb9 #243858
sovyet-rusya #00d9ff #2414f8
sui-liang-xiao-xian #48d4f7 #20cce0
sui-qin-xue-ju #71b4dd #509894
sui-zheng-wang-shichong #ffbd5d #f8a05c
sukhothai #e1aed5 #a08cfc
sunga #4090c0 #107098
sunik-kralligi #96de24 #087858
sur-kadilari #5dd3c0 #54c8b4
suud-ucuncu #50dcff #00c0ec
svalbard #8fe5ac #68c894
svaneti #5eecb2 #40d098
svazi #24a2cc #0090b4
sybaris #05eba2 #00dc7c
taberistan-zeydi #6b7bab #746490
taberistan-zeydi-ii #f39df7 #fc90e8
taebong #6f7cb1 #686898
tahiri-horasan #4a8bb0 #307088
tairona #f5c4f2 #dca0bc
talis-hanligi #0be5b2 #00dc74
tanca-bolgesi #5ae9c3 #50c8b4
taras #32a85f #008400
tarsus-emirlik #61bcd6 #30a4a8
tebai-17-hanedan #c9a6f5 #d4a0ec
teuton-sovalyeleri #527ce7 #4c74e0
tibet #e1aed2 #d4a4c8
tidore-sultanligi #72ccc0 #68908c
tiv #ded866 #f8b400
tiwanaku #03a6ff #0c88f4
tolunogullari #9d9be8 #a080d0
torino-markizligi #bfdc70 #8cc44c
trablusgarp-ocagi #e9b333 #f4e040
tran-hanedani #96e7b4 #404814
transkaspi-hukumeti #85dee8 #50c8c0
trento-piskoposlugu #05eba2 #04dc7c
trinidad-tobago-ingiliz #72e6e3 #70c4b0
tsongkha #6ebffc #0070b0
tunus-ocagi #c696cc #e494d0
turges #03a6ff #0088f0
tuyuhun #7579ab #70689c
ugarit #68ec93 #1cb050
ukaydir #85dee8 #6cc4b4
uman-ibadi #03a6ff #0c64c8
untac #8fc3f7 #687c88
untea #2099f8 #0884ec
urbino-dukaligi #5eecb2 #44d094
utpala-kesmir #75cee7 #708c8c
uyuni #d1d859 #b0bc30
valensiya-amiriler #3b8bfd #f4c400
van-xuan #1596ba #2c8490
vandal #fdb56d #f4a074
vasconia #83b8ee #58688c
vasulu #248acc #0070b4
venedik-1848 #78e7be #20d4a8
vietnam-imparatorlugu-1945 #1596ba #0894b0
vinca-kultur #03daf5 #00d4ec
vizigot #8ec2ff #14c8e4
wei-devleti-zhou #7579ab #6c6898
westfalya-krallik #397ea3 #24688c
wiman-joseon #03a6ff #0484f0
wu-devleti #8fe5ac #70c48c
xin #8ec2ff #6868b4
xin-hanedani #03a6ff #007ce0
yamato #8fe5ac #44cc94
yan-krallik-chuhan #ff9bf8 #f094f0
yang-wu #03a6ff #7c78fc
yangshao #08e29b #04d890
yatenga #84e472 #2c5c04
yeni-babil #01aefd #04c8f4
yeni-hitit #6adb73 #70c840
yeni-isvec #9fde94 #70c47c
yenisey-kirgiz #05eba2 #009c40
yin-krallik #8fe5ac #78c48c
yunanistan #20e0c0 #143840
zankle-messana #d4adf9 #94686c
zaragoza-hudiler #7cd2a1 #cc0098
ziyadi #b7e274 #80c838
zuni #1e78c0 #046cb0
```
