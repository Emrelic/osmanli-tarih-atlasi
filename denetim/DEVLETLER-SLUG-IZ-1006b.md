# DEVLETLER-SLUG-IZ-1006b — atlas günü kaldırma (4) + iki "çelişki"nin iki taraflı okunması

Yapan: UMIT-W51b · istek: UMIT İRTİBAT · 6 Ekim 2026 · `DEVLETLER-SLUG-IZ-1006.diff`in ÜSTÜNE zincir.
Ağaç: `C:\atlas-w51` = origin/main **`d0f3cda1`** + 1006 diff. Dokunulan tek dosya `data/devletler.js`, **5 satır**.
Teslim: `denetim/DEVLETLER-SLUG-IZ-1006b.diff` (UYGULANMADI) · commit YOK.

## ① "GÜN atlastan alınmış" 4 madde — §4 / D207
Kural: atlas günü KALDIRILIR; dış kaynakta gün varsa adıyla yazılır; yoksa `YYYY-01-01` + `kesinlik:"yil"` (VERI-YAPISI
`kesinlik` alanı) + kaynaksızlık bildirilir. "temsilî" / "gün komşudan" YAZILMADI. Eski değer `ic_not_t`de iz.

| madde | eski t | yeni t | gün dayanağı |
|---|---|---|---|
| `ingiliz-kuzey-amerika#2` (Paris Antl.) | 1763-02-10 | **1763-02-10** | DIŞ KAYNAK BULUNDU: Office of the Historian (ABD Dışişleri), 'Treaty of Paris, 1763' — «the treaty went into effect on February 10, 1763» (HTTP 200, bu turda okundu) |
| `nahua-sehir-devletleri#2` (Tenochtitlan) | 1521-08-13 | **1521-08-13** | DIŞ KAYNAK BULUNDU: Encyclopaedia Britannica, 'Hernán Cortés' — «conquering it street by street until its capture was completed on August 13, 1521» (bu turda okundu) |
| `sirbistan-eyaleti#3` (Sırp isyanı) | 1804-02-14 | **1804-01-01** `kesinlik:"yil"` | GÜN **bulunamadı** — TDV `sirbistan` yalnız «1804’te»; Britannica 'Karadjordje' «In the spring of 1804», 'Serbia' «In 1804». Eski gün sirbistan-prensligi künyesinin `f:`'sinden (ATLAS) |
| `cerkez#0` (Aşağıra Çerkezleri) | 1475-06-06 | **1475-01-01** `kesinlik:"yil"` | GÜN **bulunamadı** — TDV `cerkezler` tanımayı «1475’te Gedik Ahmed Paşa, 1479’da Kasım Paşa» seferlerinin ardından anlatıyor, gün yok. Eski gün atlasın KEFE fethi kırılmasından (başka yer; TDV `kefe` «Haziran 1475» Kefe'yi tarihliyor, Çerkez kıyısını değil — taşınmadı) |

**Kaynaksız sayısına dahil:** dört maddenin dördü de "atlas günü taşıyan" sınıfından çıktı. Bunlardan **2'sinin günü
artık kaynaksızdır** (sirbistan-eyaleti#3, cerkez#0 — gün yazılmadı, `kesinlik:"yil"`). Öteki **2'sinin** günü
(ingiliz-kuzey-amerika#2, nahua#2) bu turda adıyla bulunan dış kaynağa dayanıyor; TDV yalnız yılı veriyor ve kaynak metni
ikisini AYRI yazıyor. ⚠️ Dış kaynak bulunması koordinatörün "kaynaksız sayısına dahil" talimatıyla çatışıyorsa (dördünün
de kaynaksız sayılması isteniyorsa) iki satır `YYYY-01-01`e çevrilebilir — hüküm sizde.
- Künye uçları (`sirbistan-eyaleti` künye `t:"1804-02-14"`, `ingiliz-kuzey-amerika` künye `f:"1763-02-10"`) bu işin
  kapsamında DEĞİL, dokunulmadı; sirbistan-eyaleti künye `t:`'si aynı atlas gününü hâlâ taşıyor (aday iş).

## ② İki "çelişki" — iki taraf alıntılandı (§4 ⑧)
### `buganda#2` — AYNI OLAY ⇒ TDV'ye çekildi
- Madde: t `1856-01-01` · «Kabaka I. Mutesa (Mutesa I) tahta çıktı; 1884'e kadar hüküm sürdü» · eski kaynak: «TDV uganda
  (…'Kral I. Mutasa dönemi (1854-1884)'). … 1856 tercih edildi» — 1856'nın dayanağı ADIYLA yok.
- TDV `uganda`: «Kral II. Suna Kalema Kansinge (1836-1854)» … «yerine geçen oğlu I. Mutasa’ya (1854-1884)».
- Britannica 'Mutesa I' (bu turda okundu): tahta çıkış yılı VERMİYOR («born c. 1838—died October 1884»).
- Aynı olay (I. Mutesa'nın tahta çıkışı). ⇒ t **1854-01-01** `kesinlik:"yil"`, kaynak `TDV: uganda — «…»`; eski t ve eski kaynak
  `ic_not_t`de. 1856'yı veren akademik kaynak bu turda **bulunamadı**.
### `funj#3` — AYRI OLAYLAR ⇒ DOKUNULMADI, çelişki YOK (W51'deki "ÇELİŞKİ" hükmümü GERİ ALIYORUM)
- Madde: t `1770-01-01` · «Şâyikıyye kabilesi bağımsızlığını ilan edip Benî Abdellâb'a vergi ödemeyi reddetti».
- TDV `func`'ta İKİ ayrı Şâyikıyye olayı var:
  (a) «Şâyikıyye II. Bâdî zamanında (1649-1680) ayaklandı» — Func SULTANLIĞINA karşı ayaklanma;
  (b) «1770 yılından itibaren Sennâr’da Benî Abdellâb güç kazandı. … Şâyikıyye kabilesi de nüfuzunu arttırdı. XVII. yüzyılın
  sonlarından itibaren yönetim Şâyikıyye’nin eline geçti. Bunlar Abdellâb ailesine bağlı idiler, fakat çok geçmeden
  istiklâllerini ilân ettiler, … onlara cizye vermeyi reddettiler.» — maddenin olayı BUDUR.
- Madde (b)'yi anlatıyor; 1649-1680 (a)'nın tarihidir ⇒ çelişki yok, talimat gereği dokunulmadı.
- ⚠️ Not (dokunulmadı): (b)'de TDV olaya YIL vermiyor; maddenin 1770'i komşu cümledeki Abdellâb tarihinden. TDV pasajı kendi
  içinde de karışık ("1770'ten itibaren" → "XVII. yüzyılın sonlarından itibaren"). Madde bugün kaynaksız; ayrı iş adayı.

## Kova (künye içi, 3.203 madde)
1006 sonrası tdv 387 · başka 677 · kaynaksız 2.000 → 1006b sonrası **tdv 392 · başka 672** · kaynaksız 2.000 · beyan 139.
(5 maddenin kaynağı "TDV:" ile başlar oldu; kaynaksız sayısı madde DÜZEYİNDE değişmez — gün kaynaksızlığı `kesinlik:"yil"` ile beyan.)

## Zincir --check
| temel | 1006 | 1006b |
|---|---|---|
| origin/main `d0f3cda1` | ✓ uygulanır | ✓ zincirde temiz |
| origin/makine/umit `b0829580` (KRONO zinciri inmiş) | ✗ **1 hunk reddedildi** (karakoyunlu #9/#10, satır 549: KRONO bağlam satırlarını — 1406…1447 maddelerini — silmiş) | — |
| aynı, `DEVLETLER-SLUG-IZ-1006-MAKINE-UMIT.diff` ile (yeniden temellenmiş 1006, 284/284 satır) | ✓ | ✓ zincirde temiz |
KRONO zinciri benim 284 maddemden HİÇBİRİNİN içeriğine dokunmamış (yalnız bağlam çakışması); yeniden temellenmiş diff aynı
284 değişikliği taşır.

## Kapı
`py arac/denetle.py`: 1006 hâli **2** · 1006b hâli **2** — özet satırları birebir aynı (tek fark bir listede eşit-sıralı
iki satırın yer değiştirmesi, içerik değil). Kod 2 = Değişmez 8 ÖLÇÜLEMEDİ (taze ağaçta `devletler_harita.js` yok).
