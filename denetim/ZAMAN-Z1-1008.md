# ZAMAN-Z1-1008 — motor ve araçların ufkunu açan atomik yama (1000-01-01 → 1945-09-02)

Oturum: ZAMAN-Z1-MOTOR-UFUK-1008 (UMIT) · 8 Ekim 2026 · ağaç `C:\atlas-z1` @ `origin/makine/umit` `e28edfdc`
Şartname: `ZAMAN-GENIS-ORTAK.md` + `GOREV-ORTAK.md` + UMIT İRTİBAT mesajı. **Veriye ve depoya yazılmadı; commit yok.**

## HÜKÜM — tek paragraf
Üç diff (MOTOR · ARAC · KOORD) **aynı commit'te ve tam inşa koşusundan önce** iner. Ayrı inemezler:
ARAC, `girdi.VERI_UFKU`yi import eder (MOTOR'suz ImportError verir). KOORD'suz MOTOR ise Aral Gölü'nü
**bütün yıllarda siler** (ölçüldü). Tavan sabiti **oynamıyor**. Veri uzatılmadan denetim sonucu
bugünküyle aynı kalıyor (+1 YIL-TEMSİLÎ kırılması, bilgi). Asıl bedel motor çıktısında: **1923-10-29
sonrasında 4.278 nokta, 1000-1281 arasında 2.824 nokta sahipsiz.** Harita bu yıllarda neredeyse boş
olur. Yani ufuk açılabilir, ama veri (Z5/Z6) gelmeden o yıllar arayüzde "kapsam dışı" diye işaretlenmeli (Z2).

## §0 — önceki ölçümler ne diyordu (mükerrer kapısı)
- `KAPSAM-1945-OLC-0930 §①`: motorda bitiş 4 yerde, 7 satırda düz `"1923-11-01"` · başlangıç tek `EPOK` ·
  `girdi.UFUK` · `app.js BITIS` · `denetle`de 27 geçiş, `arac/`ta 32 dosya — **hangisinin tavan olduğu ölçülmemişti.**
- `ONCE1281-MOTOR-UFUK-1004`: motor 1281'den eski `f:`yi okur ama örneklemez · tarihler DİZGİ
  karşılaştırılır (yıl < 1000 ve MÖ bozuk) · 191 kenetli `kur:` tuzağı · başlangıçta 6 otorite / 8 site,
  bunlar birbirine bağlı değil · `"1923-11-01"` çıktıya `fas`ın 3 günlük dönemi olarak sızıyor.
- `SONRA1923-SAYIM-1004 ⑥`: ufuk açılırsa sahipsiz için "+~4.100" denmişti · 2s için "binler" (ölçülmemişti).
- **O günden bugüne değişen (ölçüldü, `e28edfdc`):** satır numaraları kaymış (2878→2903, 4498→4570 …).
  Satır sayısı aynı (7 + 1). **191 kenetli `kur:1281-01-01` → 0** (temizlenmiş, ONCE1281 tuzak 2 kapandı).
  `ONCE1281-*.diff`ler veriye inmemiş: yerleşimde 1281 öncesi tarih yalnız **1** (Lapaha 1220).

## ② NE ÖLÇTÜM (sayıyla) — alet `denetim/ARAC-ZAMAN-Z1-OLC-1008.py` + `denetle.py` önce/sonra

### 2.1 Öngörü × ölçüm
| soru | öngörü | ölçüm | |
|---|---|---|---|
| 4 haneli olmayan tarih (s/d/v/isg) | — | **0** | dizgi tuzağı bugün yok |
| Osmanlı kesit listesi | +0…5 | 629 → **630** (+`1000-01-01`; nöbetçi `1923-11-01`→`1945-09-05`) | ✅ |
| Yabancı devlet×kesit aralığı (koşu maliyeti vekili) | — | 8.377 → **8.619 (+242, +%2,9)** | |
| 1923 sonrası kesit günleri | < 50 | (1923-10-29, 1945-09-02) arası tarih **4**, hepsi Şefşâven | ✅ |
| 1281 öncesi kesit günleri | 100-400 | **1** (Lapaha 1220-01-01) — kampanya diff'leri inmemiş | ❌ öngörü fazla |
| Değişmez 1, kesitler 1000-1940'a genişletilirse | ~4.200 | **309 → 4.288** (1000-1280: 2.833 · 1925-1945: 4.278) | ✅ |
| Değişmez 1, kesitler sabit | 309 | **309** | ✅ |
| 2s, eski uçlar SINIR İŞARETİ sayılırsa | AÇIK +10…150 | **AÇIK 185 → 185** · kırılma 1.722→1.723 · YIL-TEMSİLÎ 165→166 | ✅ (alt uçtan da az) |
| 2 Osmanlı | 0 | açık 0 (değişmedi) | ✅ |
| Değişmez 7 (enklav) muaf | — | coğrafî-tecrit 4.673→4.674 · küçük-devlet 308→310 · ihlal değişmedi | |
| Kuyruk (`yerlesimler_h2_kuzeyafrika.js`) | — | 47→**49** kırılma · 2→**4** maddesiz (Şefşâven 1924-11-15 / 1926-05-27, Rif) | kuyruk, borç değil |
| Aral (`girdi.oku_goller`) | — | yalnız MOTOR inerse: **"ATLANDI"** · KOORD ile: 1 göl alınıyor | 🔴 bulundu |
| `denetle_gorunur` tarih-dışı madde | — | 1 → **0** (Hârizm/Buhara 1924-01-01) | |
| `renk_olc.py` | — | önce/sonra çıktı **birebir aynı** (0 görünmez · 6 çakışma · 60 örtüşme) | |
| `denetle_eslesme` · `denetle_statu` | — | önce/sonra çıktı **birebir aynı** (ikisi de bugün çıkış 1 — yamadan bağımsız) | |
| Harita 1000-1281 "dolgu ile AKTİF YANLIŞ yayılma" | evet | **kodla çürüdü:** `_dolgu_kumesi` puanı ≤ 400 km'den toplar (`uret_petek.py:6329`), 1281 öncesi sahipli nokta yalnız Lapaha ⇒ yayılma yerel kalır. Kalan risk BOŞ harita, yanlış harita değil | ❌ öngörü fazla |
| `denetle.py` çıkış | — | önce **2** · sonra **2** (D8: `devletler_harita.js` bu ağaçta yok — ölçülemedi) | |

### 2.2 Uç sayımları (veri, `girdi.yukle`, 4.300 kayıt)
`t=1923-10-29`: s **4.094** · isg 97 · v 36 · `f=1281-01-01`: s **2.522** · d 5 · `t>1945-09-02`: s 1 (Şefşâven `9999-01-01`).

### 2.3 Sınıflandırma — `arac/`ta 1281/1923 geçen 37 dosya
| sınıf | dosya / site | işlem |
|---|---|---|
| **UFUK (motor)** | `uret_petek.py` `EPOK` + 7 satır `"1923-11-01"` · `girdi.py` `UFUK` | **MOTOR.diff**: `EPOK = girdi.UFUK[0]`, `KESIT_SON = UFUK[1] + 3 gün` (eski değerde birebir `1923-11-01` verir, sınandı) |
| **UFUK (araç)** | `denetle.py` `ATLAS_SONU`/`ATLAS_BASI` (4c/4d) · `denetle_gorunur.py:294` zaman çubuğu · `renk_olc.py:1019` verisiz kimlik penceresi | **ARAC.diff** → `girdi.UFUK` |
| **KIRILMA PENCERESİ** (ufuk + sınır işareti) | `denetle.py:1849` (D2/2s/2i) · `:3655/:3662` (D7) · `denetle_eslesme.py:169` · `denetle_statu.py:292` | **ARAC.diff** → tek kapı `denetle.kirilma_disi(g)`: ufuk dışı/ucu **ya da** `VERI_UFKU` ucu |
| **VERİ UFKU** (bugünkü değer kalır, bağ kurulur) | `denetle.py` 5b `1281+SUPHE_ESIK_YIL` · 5c `"1281-12-31"` | **ARAC.diff** → `VERI_UFKU[0]`'dan türetildi (değer aynı) |
| **VERİ UFKU** (dokunulmadı) | `denetle.py:1208` Değişmez 1 kesitleri `[1285…1920]` | öneri §④-2 |
| **TAVAN** | yok — 1281/1923 içeren `BEKLENEN_*` yok. Oynayan tavan: **yok** (YIL-TEMSİLÎ 165→166 bilgi satırı, tavanı 151 ve zaten aşılmış) | — |
| **TARİHÎ DEĞER / ölçüm günü** | `_paket_olc`, `_sinir_envanteri`, `_sinir_hassasiyet` (1923-06-15) · `calu_deney`, `puan_alani`, `altyapi_durum`, `bosluk_haritasi` (1281 açılış ölçümü) · `uret_donemler.py:586-587` (Mütareke dönemi `t:1923-11-01`) | dokunulmadı; `uret_donemler` için §④-4 |
| **TEK SEFERLİK BETİK** (`_` önekli) | `_odunc_tarih`, `_odunc_capraz_sh110`, `_sahiplik_uygula`, `_yama_sinav`, `_yer_eslesme_ok102`, `_bolge_sahip`, `_dunya_bosluk`, `_bekci_kosu4c` | dokunulmadı (tarihî kayıt) |
| **ARAYÜZE BAĞLI** (Z2'nin kararı) | `kodla.py:592/634/974` açılış günü `1281-01-01` (ilk dilim) · `odak_cozum.js:348` yorum ("1281–1923'e KISTIRIR") | Z2'ye bildirildi; açılış günü app.js'e göre hizalanmalı |
| **YALNIZ YORUM/METİN** | `renkler.py` (41, hepsi yorum — motor tuzuna DOKUNULMADI) · `girdi_listesi`, `isal`, `kademe`, `denetle_anakronizm`, `dolgu`, `yukseklik_indir`, `durum_tablosu`, `denetle_yayin`, `viabundus_olc`, `denetle_bitisiklik` | — |

## ③ NE BULAMADIM / ÖLÇEMEDİM
- **D8 ve motor çıktısı:** koşu yok. `devletler_harita.js` bu ağaçta yok, D8 iki koşuda da "ölçülemedi". Öngörü: değişmez (D hatları 1923'te bitiyor).
- **Koşu süresi:** ölçülemedi. Vekil devlet×kesit aralığı **+%2,9**, Osmanlı kesiti +1. Asıl bedel tuzun değişmesi, yani **tam inşa** (koşu 18: 4 sa 10 dk). Tuz zaten değişiyor, ufuk ek bir bedel getirmiyor.
  ⚠️ Sınanmadı: `petek_epok(EPOK)` ve `② PAYLAŞTIRMA (EPOK)` 1000-01-01'de neredeyse tamamen sahipsiz bir dünyada koşacak. Kod okununca çökme yolu görmedim, ama ilk koşunun logunda bu iki satır OKUNMALI.
- **Aral 1000-1281:** gölün Ortaçağ'daki seviye düşüşü için kaynak yok. KOORD diff'teki `f:1000` kaynaksız bir genişletme ve öyle beyan edildi.
- **Z2'nin cevabı:** hizalama mesajı kuyruğa girdi (`b1fe0486`), cevap gelmedi.

## ④ NE İSTİYORUM / ÖNERİYORUM
1. **Üç diff tek commit'te ve tam inşa koşusunda** (`§9.1`). ARAC'ı MOTOR'dan önce indirmek
   `denetle.py`yi kırar · KOORD'u geride bırakmak Aral'ı siler.
2. **Değişmez 1 — 1281 öncesi ve 1923 sonrası noktasız yıl DELİK SAYILMAZ, KAPSAM DIŞI sayılır**
   (2s'nin `KAPSAM DIŞI` kovasıyla aynı desen). Ölçüt evreni `VERI_UFKU`dur: Z5/Z6 bir dilimi
   kaynakla doldurdukça `VERI_UFKU` o yöne genişler ve kesitler oraya uzar. Aksi hâlde sahipsiz
   sayısı 309 → **4.288** olur ve **bu bir af olur**: 309'luk gerçek borç 4.000'lik kapsam
   kovasının içinde görünmez kalır (`§3.4`-3'ün aynası). Önerdiğim ikinci adım (bu diff'te YOK, sınav ister):
   `denetle.py:1208` kesitlerini `VERI_UFKU`ya bağlamak ve UFUK − VERI_UFKU arasını ayrı satırda
   bilgi olarak basmak ("1923-1945: 4.278 nokta kapsam dışı").
   ⚠️ **Ve harita aynı soruyu sormalı:** motor bu yılları çizecek, ama noktaların %66'sı (1000-1281)
   ve %99'u (1923-1945) sahipsiz olacak. Z2, `VERI_UFKU` dışını arayüzde "kapsam dışı" diye örtmezse
   kullanıcı boş haritayı "devletsiz dünya" diye okur.
3. **Yayın kapısı önerisi (Z1+Z2 ortak):** `denetle_yayin.py`ye tek soru eklensin: `app.js`
   `BASLANGIC/BITIS` == `girdi.UFUK` mu. Bugün iki değer birbirine bağlı değil; biri değişip öteki
   değişmezse koşu çıktısıyla arayüz sessizce ayrışır.
4. **`uret_donemler.py:586-587`** Mütareke dönemleri `t:"1923-11-01"`de bitiyor (eski nöbetçi). Bu, 1923
   sonrası Osmanlı/Türkiye dönem etiketi olmadığı anlamına geliyor. Z4/Z2 "Cumhuriyet" dönemini
   ekleyince bu uç `1923-10-29`a çekilmeli. Tarihî karar, bende değil.
5. **Yan bulgu:** Şefşâven'de `rif-cumhuriyeti 1924-11-15→1926-05-27` dönemi **iki kez** yazılı ve son
   dönem `t:"9999-01-01"` (SONRA1923-SAYIM §4-2 de aynısını söylüyor). Ufuk açılınca 9999 motora "sonsuz" olarak girer.
   Z5'in kalemi.

## Dosyalar (`C:\atlas-umit\denetim\`e kopyalandı, izlenmeyen)
- `ZAMAN-Z1-1008.md` — bu rapor
- `ZAMAN-Z1-1008-MOTOR.diff` — `arac/girdi.py` (`UFUK` + `VERI_UFKU`) · `arac/uret_petek.py` (`EPOK`, `KESIT_SON`) — **motor tuzu**
- `ZAMAN-Z1-1008-ARAC.diff` — `denetle.py` (`kirilma_disi`, ATLAS_BASI/SONU, 5b/5c) · `denetle_eslesme.py` · `denetle_statu.py` · `denetle_gorunur.py` · `renk_olc.py`
- `ZAMAN-Z1-1008-KOORD.diff` — `data/goller.js` Aral `gecerli` → 1000-01-01 / 1945-09-02 (koordinatör dosyası)
- `ARAC-ZAMAN-Z1-OLC-1008.py` — ölçüm aleti (yalnız okur)
Üç diff de temeli `origin/makine/umit` `e28edfdc` olan taze bir ağaçta `git apply --check` ile temiz geçti (ayrı ayrı ve birlikte). LF, CR 0.

## ① ÖNGÖRÜ — ölçümden ÖNCE yazıldı (betik koşmadan, yalnız kod okunarak)

Senaryo: motor + araç yaması uygulanır, UFUK = (1000-01-01, 1945-09-02), **veri uzatılmaz**.

| soru | öngörü | mekanizma |
|---|---|---|
| Osmanlı kesit listesi (`tarihler`, d/v) | +0…5 gün | Osmanlı d/v 1923'te bitmiş; 1281 öncesi d/v yok |
| Yabancı kesit günleri (s, 1923-10-29 ile 1945-09-05 arası) | < 50 farklı gün | SONRA1923-SAYIM ③: yerleşim katmanı 1923 sonrası "sıfır" |
| Yabancı kesit günleri (s, 1000 ile 1281 arası) | ~100-400 farklı gün | ONCE1281 kampanyası bazı `f:`leri geriye yazdı (Lapaha, Avusturya 109, Alaska…) |
| Değişmez 1, kesitler 1000-1940'a genişletilirse | sahipsiz **309 → ~4.200** | 1940'ta ~4.100 zincir bitmiş · 1281 öncesinde 2.526 nokta başlamamış (`kur:` yok) |
| Değişmez 1, kesitler SABİT kalırsa (önerim) | **309** (değişmez) | ölçüt evreni = veri ufku |
| Değişmez 2/2s, eski uçlar SINIR İŞARETİ olarak dışlanırsa | 2 Osmanlı: 0 · 2s AÇIK: +10…+150 | yalnız yeni penceredeki GERÇEK tarihler evrene girer |
| Değişmez 2/2s, eski uçlar dışlanmazsa | 2s: +~4.000 (her 1923-10-29 `t:`'si bir "kayıp") | yapısal |
| D8 (motor çıktısı) | ölçülemez (koşu yok); mertebe ≈ değişmez | D hatları 1923'te bitiyor, yeni kesitlerde hat yok |
| Koşu süresi | +%10…30 | maliyet ≈ devlet × kesit; 1281 öncesi canlı ~94 künye + kesit eklenir |
| Harita, 1000-1281 | **AKTİF YANLIŞ**: f<1281 olan az sayıda devlet, DOLGU kapısıyla sahipsiz peteklere yayılır | `_dolgu_kumesi` sahipsiz peteği komşu devlete verir |
| Harita, 1923-10-29 sonrası | Dünya ~boş; yalnız 1923'ü aşan s: dönemleri | veri yok |
