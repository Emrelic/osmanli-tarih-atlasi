# NOKTA KALİTE-4 — ilerleme günlüğü

## AÇILIŞ

Açıldım (bu, SİBİRYA'nın hemen ardından beşinci parti). `oturumlar/NOKTA-KALITE-4.md`
okundu. Sıra: ① İran (~70, en verimli) → ② Avrupa Rusyası (~70) → ③ Avusturya/Orta
Avrupa (~40, Macaristan'a dokunulmayacak). Yazma yetkim: `data/yerlesimler_kalite4.js`
(bağlandı, girdi 36 dosya) ve bu ilerleme dosyası.

## ① İRAN KÜNYE KUSURU — ÖLÇÜM (§③, yazmadan önce)

`iran` künyesi f:1925-12-12 (Pehlevi). Veride 1925 öncesi **124 dönem** d:"iran"
kullanıyor — **113'ü tek bir tarihte (1335-12-01) başlıyor, aynı toplu yazımın izi**
(koordinatörün sezgisi doğrulandı: TEK bir toplu düzeltme değil ama KÜÇÜK SAYIDA
küme-düzeyi düzeltmeyle kapanabilir, 113 ayrı araştırma GEREKMEDİ).

**YAPISAL BULGU — önemli:** çoğu noktada (Tebriz, Şiraz, Kirman gibi) `iran`
segmentinin ARDINDAN zaten doğru zincir var (timurlu→karakoyunlu→akkoyunlu→
safevi→afsar→zend→kacar) — yani düzeltme yalnız TEK segmentin `d:` değerini
değiştirmek. Ama bir ALT KÜME'de (Isfahan/Kazvin/Kum/Tahran/Hemedan/Kirmanşah/
Luristan/Zencan + bütün Kafkasya/Gilan/Mazenderan kıyı kümesi, ~43 nokta) `iran`
segmenti TEK BAŞINA 1335'ten 1501-1596'ya kadar uzanıyor, ara zincir YOK — bunlar
basit isim-değişimiyle değil, ya (a) gerçekten TEK bir yerel hanedanın o kadar
sürdüğünü (tarihen çok mantıklı: Şirvan/Gilan/Mazenderan Safevî'ye geç katıldı)
ya da (b) segment BÖLÜNMESİ gerektirebilir.

### KÜME TABLOSU (t-tarihine göre, 113 nokta)

| t (bitiş) | # | bölge | ÖNERİLEN ardıl | GÜVEN | kaynak |
|---|---|---|---|---|---|
| 1393-01-01 | 22 | Fars/Kirman/Hürmüz kıyısı (Şiraz, Kirman, Bûşehr, Bender Abbas, Lâr, Sîrcân…) | **muzafferi** | 🟢 YÜKSEK | TDV `muzafferiler`: "Güney ve Batı İran'da hüküm süren mahallî bir hânedan (1318-1393)" — künyenin kendi f/t'siyle BİREBİR örtüşüyor |
| 1386-01-01 | 25 | Azerbaycan/Kürdistan (Tebriz, Nahçıvan, Erdebil, Urmiye, Sultâniye, Merâga, Hoy…) | **celayirli** | 🟢 YÜKSEK | Celâyirli künyesi f:1340 (1335'e çok yakın), bölge TAM örtüşüyor; TDV `tebriz` maddesi: "İlhanlılar'ın ardından Çobanlı, Altın Orda, Muzafferîler ve Celâyirliler'in hâkimiyetine girdi" — sıra karışık ama Celâyirli bu bölgenin ana gücü |
| 1381-01-01 (Meşhed/Tebbes/Herat: 1381-04-01) | 22 | Horasan (Nîşâbur, Tûs, Sebzevâr… + Herat/Meşhed/Tebbes + Kâin/Bîrcend/Zerenc-Sîstan) | **KARIŞIK — üç alt-küme** | 🟡 ORTA | aşağıda ayrıştırıldı |
| 1387-11-01 | 14 | Yezd + Cibâl/Zagros batısı (Nihâvend, Kasr-ı Şîrîn, Kâşân, Sâve, Simnân, Dâmgan, Bistâm, Erâk, Gulpâygân, Erdistan, Nâin, Burûcird, Erdekân) | **KARIŞIK, araştırılmadı** | 🔴 DÜŞÜK | Yezd muhtemelen `muzafferi` (TDV maddesi hanedanın Yezd'de doğduğunu söylüyor), Nihâvend/Kasr-ı Şîrîn/Burûcird belki mevcut künye `lur-i-buzurg` (f:1155-t:1424, coğrafya örtüşüyor) — DOĞRULANMADI |
| 1411-01-01 | 1 | Telafer (Musul yakını) | **celayirli** (öneri) | 🟡 ORTA | celayirli künye t:1431, coğrafya uyumlu, tek nokta olduğu için ayrı doğrulama yapılmadı |
| 1501-07-01 | 9 | Revan, Gence, Şamahı, Bakü, Kabala, Ereş, Şâbüran, Mahmudâbâd, Reşt | **ölçmedim** | 🔴 | muhtemelen Şirvanşahlar (Bakü/Şamahı/Kuba/Şeki kümesiyle birlikte 1538'e kadar) — YENİ künye gerekebilir, TDV slug ARANMADI |
| 1503-01-01 | 4 | Isfahan, Kazvin, Kum, Tahran | **ölçmedim** | 🔴 | muhtemelen çoklu-segment gerekiyor (timurlu→karakoyunlu→akkoyunlu, Tebriz/Şiraz'daki gibi) — bu 4 nokta o ara zinciri HİÇ içermiyor |
| 1508-01-01 | 5 | Hemedan, Kirmanşah, Luristan, Zencan, Zagros içi | **ölçmedim** | 🔴 | aynı sınıf |
| 1510-12-02 | 1 | Esterâbâd (Gürgân) | **ölçmedim** | 🔴 | |
| 1538-01-01 | 3 | Salyan, Kuba, Şeki (Nuha) | **Şirvanşahlar (öneri)** | 🟡 ORTA | 1501 kümesiyle aynı coğrafya/aile, farklı t — muhtemelen Şirvanşah'ın Safevî'ye düşüş sırası (Bakü/Şamahı önce, Şeki/Kuba/Salyan sonra) |
| 1592-01-01 | 2 | Lâhîcan, Bender Enzeli (Gilan) | **Gîlan yerel hanedanı (öneri, künyesiz)** | 🟡 ORTA | 1592 = I. Abbas'ın Gîlan'ı ilhakı, TARİHEN İYİ BİLİNİR (Kâr-kiyâ Seyyidleri) — TDV slug ARANMADI |
| 1596-01-01 | 5 | Sârî, Âmül, Bârfurûş, Ferahâbâd, Eşref | **Mâzenderân yerel hanedanı (öneri, künyesiz)** | 🟡 ORTA | 1596 = I. Abbas'ın Mâzenderân'ı ilhakı (Mar'aşî Seyyidleri) — TDV slug ARANMADI |

### 1381 kümesinin üç alt-kümeye ayrımı (22 nokta)

- **Serbedârî çekirdeği** (~16): Nîşâbur, Tûs, Sebzevâr, Turşiz, Turbet-i Haydariye,
  Turbet-i Câm, Serahs, Kelât-ı Nâdirî, Kûçân, Bocnûrd, Esferâyin, Nesâ, Ebîverd,
  Dihistan ovası, Merv, Kızılarvat → `serbedariler` slug CANLI (koordinatör
  doğruladı), 🟢 YÜKSEK güven — Serbedârî 1381'de Timur tarafından bitirildi (TDV
  dolaylı doğrulaması: Sîstan maddesi Zerenc'in 1383'te düştüğünü, Horasan'ın
  "Kert hânedanına bağlı" olduğunu yazıyor — bölge komşulukları uyumlu)

- **KERT hanedanı** (Herat, Meşhed, Tebbes + Kâin/Bîrcend/Zerenc-Sîstan, 6 nokta):
  🟢 **YENİ KÜNYE ÖNERİSİ — `kert`.** TDV'de slug **CANLI** (`islamansiklopedisi.org.tr/kert`,
  HTTP 200), başlık doğru: *"KERT — XIII ve XIV. yüzyıllarda Herat'ta hüküm süren
  bir hânedan."* 🔴 **Önceki bir turda `kertler` (çoğul) denenmiş ve ÖLÜ çıkmıştı**
  (`CLAUDE.md` §4 6 Ağustos listesi) — doğru slug TEKİL `kert`, çoğul DEĞİL. Aynı
  Türkçe-yazım-ekseni tuzağının bir vakası daha.
  Ayrıca TDV `sistan` maddesi (canlı, 200) AÇIKÇA doğruluyor: *"Bölge, İlhanlı
  Devleti'nin yıkılmasından sonra Horasan'ın bir kısmına hâkim olan Kert hânedanına
  bağlandı. Timur, 785 (1383)'te ... Zerenc şehrini ele geçirdi."* ⇒ Sîstan da
  Kert'e bağlıydı, AYRI bir "Sîstan meliği" künyesi GEREKMİYOR.
  ⚠️ Zerenc'in gerçek düşüş tarihi 1383, veride 1381 — 2 yıllık fark, küçük ama
  not edilmeli.

## KASITLI_BOŞLUK BEKLENTİSİ (henüz araştırma erken aşamada)

Ana ~180 noktalık kısma henüz başlamadım (İran künye kusuru ölçümü önce
istenmişti). Tahminimi araştırma ilerledikçe güncelleyip bildireceğim —
şimdiden sayı vermek "ölçmedim"i "ölçtüm" gibi göstermek olur.

## SONRAKİ ADIM

Koordinatöre bu tabloyu gönderdim ve iki soru sordum: (a) kalan ~43 noktanın
derinlemesine araştırması mı önce, yoksa (b) ana ~180 nokta kotasına mı
geçeyim (kendi önerim: b — çünkü bu bir "ölçüm ekle" partisi değil "nokta
ekle" partisi, künye kusuru YAN ÜRÜN). Cevap beklerken İran'ın sancak-düzeyi
nokta araştırmasına geçiyorum.

## PARTİ 1 YAZILDI — Azerbaycan/Kürdistan (4 nokta)

Sıra değişti (koordinatör): Azerbaycan/Kürdistan (TDV zengin) → Hazar → Kirman/Yezd.

Grid-boşluk taraması (34.5-39.5K/44-49.5D, 0.5° ızgara, >40km eşik):
64/132 hücre boş. En kötü kümeler: Zencan-Bîcâr-Senendec üçgeni, Hemedan/Sâve
çevresi, Nahçıvan kuzeyi, Astara/Lenkeran Hazar ucu.

Yazılan 4 nokta (küçük kasaba TDV sluglari hepsi ÖLÜ — mehabad/savucbulak/
sardest/tekab denendi — ikinci kaynağa (standart akademik/Iranica) geçildi,
koordinatör onayı: "taneciklik boşluğu" kategorisi):

- **Meşkinşehr (Hiyav)** 38.40,47.68 — Sasani dönemine kadar giden yerleşim
  (Azerbaycan Atabegleri sikkeleri), TAM zincir (komşu Erdebil/Sarâb ile aynı)
- **Mahabad (Sâvücbulak)** 36.77,45.72 — kur:1501-07-01, "ilk kez 16.yy'da
  kaydediliyor, 17.yy'da Mükrî beyliği merkezi"
- **Bâne** 35.99,45.88 — kur:1501-07-01, Erdelan/Mükriyân Kürt beyliği,
  Ehtiyârüddin ailesi Safevî döneminde "sultan" unvanıyla
- **Serdeşt (Sardasht)** 36.16,45.48 — kur:1501-07-01, aynı Mükriyân kuşağı

Yeni künye ÖNERİLMEDİ — bölgedeki BÜTÜN komşu noktalar (Erdebil/Sakkız/
Bîcâr/Merîvan/Senendec) zaten TEK zincir (ilhanli→celayirli→...→kacar)
kullanıyor, ayrı bir "Erdelan/Mükrî" rengi yok, ben de açmadım.

DOĞRULAMA: 3km yakınlık — 0 çakışma (tüm corpus'a karşı). `denetle.py`:
Değişmez 1 ✓ 180/182 · 2 ✓ 0 açık · 2s ✓ 121/121 · 2i ✓ 3/3 · konum ✓
0 kara maskesi dışı (4 noktam pencere İÇİNDE, sorun yok).

"BULUNAMADI" SAYACI: bu partide 0 — dört adayın dördü de (iki kaynak
sınırı içinde) doğrulandı.
