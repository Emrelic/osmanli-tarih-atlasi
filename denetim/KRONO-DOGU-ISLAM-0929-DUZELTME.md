# KRONO-DOGU-ISLAM-0929 — DÜZELTME kaydı (29 Eylül 2026)

Kapsam: `kronoloji_iran · _iran_ardillari · _safevi · _akkoyunlu · _karakoyunlu · _memluk · _misir`
(765 madde). **A** = bu oturumun UYGULADIĞI (dosya benim, her biri kaynaklı) · **B** = ÖNERİ,
hüküm koordinatörde (başkasının dosyası ya da anahtar kıran değişiklik).
Makine kaydı: `denetim/KRONO-DOGU-ISLAM-0929-GUN-KARAR.json` (489 satır: dosya · eski t · yeni t · gun · sınıf).
Araçlar: `ARAC-KRONO-DOGU-ISLAM-0929-{TDV,GUN,GUNYAZ,YAMA2,KAPANIS}.py`.

---

## A1 — `gun:` beyanı: 489 madde (t = YYYY-01-01 ya da YYYY-MM-01, `gun:` alanı YOKTU)

Yöntem: her madde için `kaynak:` alanındaki TDV slug'ları + dosyanın hânedan/hükümdar maddeleri +
`yer_id`'den türetilen TDV yer maddesi (ör. `isfahan`) çekildi; o yılın (miladî ve ±1 hicrî) bütün
günlü/aylı tarih ifadeleri çıkarıldı; GÜNLÜ isabetlerin HER BİRİ elle okundu (rakamı taşıyan cümle
neyi tarihliyor — CLAUDE.md §4 tuzak ⑧). Otomatik isabetlerin çoğu AYNI YILIN BAŞKA olayıydı.

| Sonuç | Madde |
|---|---|
| TDV **GÜN** verdi (t düzeltildi ya da "gerçek gün" diye beyan edildi) | **14** |
| TDV **AY** verdi, gün yok | **43** (+1 TDV iç çelişkisi notlu, +1 TDV–TDV ay farkı notlu) |
| TDV yalnız **YIL** veriyor | **386** — bunların **52**'si YYYY-MM-01'di: ay ne `d`'de ne TDV'de vardı → **yıla indirildi** |
| Ay TDV-DIŞI kaynağa (Iranica/Cambridge/Holt…) dayanıyor, **doğrulanamadı** | **45** (t değişmedi; Iranica Cloudflare engeli) |
| TDV ile TDV-dışı kaynak **çelişiyor** | **1** (Nâsırüddin Şah, bkz. B3) |

🔴 **Ayın 1'i yer tutucusu ile gerçek "ayın 1'i" ayrıldı** (D213): Barsbay 1 Nisan 1422 · Kayıtbay
1 Şubat 1468 · Abdürrezzâk 1 Temmuz 1338 · Gürgân nehri 1 Şubat 1342 · Kal'a Vakası 1 Mart 1811 →
`gun:`de "GERÇEK GÜN" yazıyor.

### A1a — TDV'nin gün/ay verdiği ve `t`nin DEĞİŞTİĞİ 12 madde

| Dosya | Eski t | Yeni t | Madde | TDV dayanağı |
|---|---|---|---|---|
| iran | 1295-01-01 | **1295-06-19** | Gazan Han İslâm'ı kabul etti | `gazan-han` Lâr vadisinde ihtida (19 Haziran 1295) |
| iran | 1335-12-01 | **1335-11-30** | Ebû Said'in ölümü | `ebu-said-bahadir-han` 13 Rebîülâhir 736 / 30 Kasım 1335 |
| iran_ardillari | 1335-12-01 | **1335-11-30** | Ebû Said Bahadır Han'ın ölümü | aynı |
| iran | 1387-01-01 | **1387-11-18** | İsfahan katliamı | `isfahan` 6 Zilkade 789 / 18 Kasım 1387 |
| iran_ardillari | 1387-11-01 | **1387-11-18** | Timur İsfahan'da katliam yaptı | aynı (ilk geçişte yıla inmişti; yer maddesi günü verdi) |
| iran | 1467-01-01 | **1467-11-10** | Akkoyunlu, Karakoyunlu'yu yendi | `karakoyunlular`/`uzun-hasan`/`cihan-sah` 12 Rebîülâhir 872 / 10 Kasım 1467 |
| iran | 1588-10-01 | **1587-10-01** | I. Şah Abbas tahta çıktı | `abbas-i` "(Ekim 1587)" · `safeviler` listesi "Abbas I 995 (1587)" — **YIL düzeltmesi** |
| karakoyunlu | 1446-01-01 | **1446-06-09** | Bağdat altı aylık kuşatmadan sonra alındı | `cihan-sah` (9 Haziran 1446) |
| misir | 1786-01-01 | **1786-06-09** | Cezayirli Gazi Hasan Paşa'nın Mısır'a gönderilmesi | `misir` 11 Şâban 1200 / 9 Haziran 1786 |
| safevi | 1504-06-01 | **1504-12-06** | Kâşân ve Yezd'in ilhakı | `yezd` 28 Cemâziyelâhir 910 / 6 Aralık 1504 (Iranica'ya dayalı Haziran TDV ile çelişiyordu) |
| misir | `1805-05` | 1805-05-01 | Kahire ulemâsının Mehmed Ali'yi vali ilan etmesi | biçim: YYYY-MM şemaya aykırı (§8); hassasiyet değişmedi |
| memluk | 1294-12-01 | (aynı) | Kitbugâ çocuk sultanı indirdi | ay doğrulandı: `muhammed-b-kalavun` Muharrem 694 / Aralık 1294 |

### A1b — Ay dayanaksızdı → yıla indirildi: 52 madde
iran_ardillari 21 · memluk 15 · misir 9 · akkoyunlu 5 · iran 1 · karakoyunlu 1. Tam liste karar
JSON'unda (`sinif:"C-YIL"`). Örüntü: **`-06-01` yıl ortası yer tutucusu** — t'si değişen 63
maddenin **36**'sının eski günü `-06-01` idi (HEAD ile node karşılaştırması: 765 madde · 63 t · 489
gun eklendi · **0 başlık değişti**). Ör.
`1289-06-01 Trablusşam yeniden kuruldu` — d "688'de (1289)", TDV `trablussam` yalnız yıl.
⚠️ `1347-07-01 Kara Ölüm Mısır'a ulaştı` → 1347-01-01; d "1347 yazında" diyor, mevsim `gun:`e yazıldı.

## A2 — Çift `yer_id` anahtarı: 33 madde (misir 26 · memluk 7)
Hepsi aynı kalıp: önce `yer_id:""`, aynı nesnede sonra dolu `yer_id:"…"` (sonradan eklenmiş odak).
JS sonuncuyu kullandığı için **etkili değer değişmedi** — node ile önce/sonra 7.995 kayıt
karşılaştırıldı: **0 fark**. Boş olan silindi.

---

## B — ÖNERİLER (uygulanmadı, hüküm koordinatörde)

### B1 🔴 Bekleyen yama kayıtları ESKİ t ile anahtarlı — 7 kayıt
`yer_yama*.js` / `etiket_yama.js` maddelere **dosya+t+b** ile bağlanıyor. t düzeltmelerim 12 atıfı
kırdı; **5'inin içeriği maddeye ZATEN uygulanmış** (yer_id/kapsam_genis VAR). Bekleyen 7:

| Yama dosyası | Eski anahtar | Yeni t | Bekleyen içerik |
|---|---|---|---|
| etiket_yama.js | memluk 1347-07-01 Kara Ölüm Mısır'a ulaştı | 1347-01-01 | etiket_oneri afet-salgin |
| etiket_yama.js | memluk 1348-08-01 Kara Ölüm Dımaşk'ı vurdu… | 1348-01-01 | etiket_oneri afet-salgin |
| etiket_yama.js | memluk 1348-09-01 1348 vebası Şam'ı vurdu | 1348-01-01 | etiket_oneri afet-salgin |
| etiket_yama.js | memluk 1403-06-01 Kıtlık ve veba Kahire… | 1403-01-01 | etiket_oneri afet-kitlik, afet-salgin |
| yer_yama.js | iran 1335-12-01 Ebû Said'in ölümü… | 1335-11-30 | eksik_nokta Karabağ (madde zaten `yer_kon:[39.99,46.92]` taşıyor) |
| yer_yama.js | iran 1467-01-01 Akkoyunlu, Karakoyunlu'yu yendi… | 1467-11-10 | eksik_nokta Çapakçur (Bingöl) |
| yer_yama_memluk.js | memluk 1375-06-01 Sis'in fethi… | 1375-01-01 | eksik_nokta Sis (Kozan) |

⇒ Bu dosyalar benim değil; anahtarların t'si güncellenmeli ya da uygulayıcı t'siz (dosya+b) eşlemeli.
📌 Aynı sebeple **başlık (b) düzeltmesi YAPMADIM** — b de anahtarın parçası (B4).

### B2 — Başka dosyalarda aynı olay, farklı gün (SİLMEDİM)
| Dosya:t | Madde | TDV | Öneri |
|---|---|---|---|
| olaylar_ek7.js:1335-12-01 | İlhanlı Devleti'nin dağılması: Ebû Said… | `ebu-said-bahadir-han` **30 Kasım 1335** | 1335-11-30 (çekirdek — Değişmez 2 evreni, koşu etkisi ölçülmeli) |
| olaylar_ek20.js:1467-01-01 | Uzun Hasan Karakoyunlu Devleti'ne son verdi… | Bingöl baskını **10 Kasım 1467** | 1467-11-10 |
| olaylar_ek7.js:1468-04-01 | Uzun Hasan'ın Karakoyunlu Devleti'ne son vermesi | Hasan Ali'nin öldürülüşü **Şevval 873 / Nisan 1469** (`karakoyunlular`) | 1469-04-01 + gun (ay) |
| kronoloji_anadolu.js:1277-04-01 ↔ iran_ardillari 1277-04-15 | Elbistan Savaşı | `baybars-i` "Nisan 1277" (gün yok) | 15'i hangi kaynağa dayanıyor — ölçülemedi; ay kesin |
| kronoloji_arabistan.js:1775-01-01 | "Kerim Han Zend'in Basra kuşatmasında **Osmanlı'ya yardım**" | `zendler`: Zend Basra'yı Osmanlı'dan **aldı** (1776), Osmanlı İran'a savaş açtı | başlık TDV ile TERS — düzeltilmeli |
| kronoloji_iran.js:1828-02-10 ↔ kronoloji_sinir_komsu.js:1828-02-22 | Türkmençay Antlaşması | — | 12 gün = Jülyen/Gregoryen farkı; VERI-YAPISI §TAKVİM gereği çevirme yok, **`kaynak:`a varyant notu** |
| kronoloji_akkoyunlu.js:1501-01-01 ↔ iran.js:1501-07-01 ↔ safevi.js:1501-04-01 (Şarur) | Şah İsmail Tebriz'e girdi | `safeviler`/`akkoyunlular` yalnız **907/1501** | üçü de ay dayanaksız; iran.js künye başında (devralma beyanlı), akkoyunlu yıla indirildi |

### B3 — Kaynak çelişkileri (t DEĞİŞTİRİLMEDİ, `gun:`de beyanlı)
1. **Nâsırüddin Şah'ın öldürülüşü** — iran.js 1896-05-01 (Iranica) · TDV `kacarlar` "3 Zilkade 1313 /
   16 Nisan 1896". CLAUDE.md §4: TDV esas. ⚠️ Ama TDV'nin kendi hicrî-miladî eşlemesi Iranica'nın
   gününden 15 gün farklı; hüküm vermedim, koordinatöre bırakıyorum.
2. **İskender Mirza'nın öldürülüşü** — TDV `karakoyunlular` "Zilkade 841 / Mayıs 1438" · TDV `cihan-sah`
   Cihan Şah'ın bu ölümden SONRAKİ cülûsu "19 Nisan 1438" → **TDV kendi içinde çelişiyor** (§4 ⑥).
3. **Napolyon'un Mısır işgali** — TDV `misir` "Temmuz 1798" · TDV `iskenderiye` "30 Haziran 1798".
4. **Kerim Han Zend'in yükselişi** — iran.js 1750-01-01 ve safevi.js 1750-06-01 (III. İsmail'i şah
   ilan etmesi, Iranica) · TDV `zendler` "**1751 yılının ilk aylarında** … III. İsmâil'in adına vekillik".
   Öneri: 1751-01-01. Ayrıca safevi.js'teki 1750 ve 1773 maddeleri `safevi` künyesinin (→1736-03-08)
   **dışında** — ardıl yapı (zend) maddesidir (§3.5 sınıf ③).
5. **Zend'in Basra'yı alması** — iran.js 1775-04-16 "Zend, Basra'yı kuşattı ve ele geçirdi" · TDV `zendler`
   "1776'da … şehre hâkim olunca". 1775-04-16 kuşatmanın başlangıcı; başlık alınışı ima ediyor → başlık
   "kuşatmaya başladı" olmalı ya da alınış 1776'ya ayrı madde.

### B4 — Başlık netleştirme önerileri (taraf adı başlıkta yok → kuyruk kapanışı ölçülemiyor)
Madde DOĞRU günde ve doğru olayı anlatıyor; ölçüt yalnız başlıkta taraf ya da yer adı arıyor.
Uygulanmadı — b anahtarın parçası ve `yer_yama_memluk.js` Mercidâbık için bekleyen eksik_nokta taşıyor.

| Dosya:t | Mevcut b | Önerilen b | Kapanacak defter grubu |
|---|---|---|---|
| memluk 1516-08-24 | Mercidâbık Muharebesi — Kansu Gavri'nin ölümü | Mercidâbık Muharebesi — **Memlük** ordusu yenildi, Kansu Gavri öldü | #30 (9 yerleşim) |
| iran 1514-08-23 | Çaldıran Muharebesi — Osmanlı'ya ağır yenilgi | Çaldıran Muharebesi — **Safevî** ordusu Osmanlı'ya ağır yenildi | #27 (3) |
| iran 1534-12-04 | Bağdat Osmanlı'ya geçti | Bağdat **Safevî**'den Osmanlı'ya geçti | #37 (2) |
| iran 1623-11-28 | Bağdat'ın Safevîlerce ele geçirilmesi | Bağdat'ın **Safevî** ordusunca ele geçirilmesi ("Safevîlerce" çekimi ölçüte takılıyor) | #42 (5) |
| iran 1638-12-24 | Bağdat Osmanlı'ya kesin olarak kaybedildi | Bağdat **Safevî**'den Osmanlı'ya kesin olarak geçti | #44, #45 (4) |
| iran_ardillari 1381-01-01 | Timur Sebzevâr'a yürüdü — Hâce Ali itaat… | … **Serbedârîler** Timur'a tâbi oldu | #7 (17) — ⚠️ harita tâbiliği ilhak gibi boyuyor (ONERI) |
| iran_ardillari 1393-01-01 | Timur Luristan'a hâkim oldu… | … **Lür-i Büzürg** atabegliği Timur'a boyun eğdi | #16 (7) |
| kronoloji_anadolu 1337-01-01 | Zeyneddin Karaca Bey tarafından kuruldu | **Dulkadiroğulları** Beyliği … kuruldu (TDV: Memlük himayesinde) | #1, #2 (2) — benim dosyam değil |

### B5 — Zayıf kaynak
`kronoloji_memluk.js`'te **14 madde** `kaynak:"WebSearch çapraz doğrulama (ikincil akademik kaynak)…"`
taşıyor — kaynak ADI yok (kırmızı çizgi: "kaynak gizlenmez"). 1345 Muda · 1386 Ceneviz barışı · 1400
Venedik Şam · 1403 kıtlık · 1403 fülûs · 1404 Nil nakliyesi · 1405 veba · 1429 baharat tekeli · 1498
Vasco da Gama · 1502 Portekiz tehdidi · 1504 Süveyş donanması · 1507 Hüseyin el-Kürdî · 1509 Diu sonrası
· 1510 ağır vergiler. Bir kısmı TDV `karimi`, `kansu-gavri`, `barsbay`, `taun` ile yeniden kaynaklanabilir.
`kronoloji_iran.js`'in 74 maddesi yalnız Encyclopaedia Iranica'ya dayanıyor — TDV'nin kapsadığı
olaylarda TDV eklenmeli (§4 birincil kural); bu oturumda yalnız tarih çelişkisi olanlar işlendi.

### B6 — Künye penceresi dışı (bilgi)
safevi.js 5 (1500-01-01, 1500-12-01, 1501-04-01 künyeden önce — kuruluş hareketi; 1750, 1773 sonra —
zend) · karakoyunlu.js 3 (1469-04-01, 1469-12-19, 1479 — künye t 1469-01-01 TDV'den ERKEN, bkz. KUNYE.md) ·
**kronoloji_iran.js'in 107 maddesinin TAMAMI**: `KRONOLOJI_IRAN` app.js'te `iran` künyesine
(Pehlevi → İİC, **1925-12-12**'den itibaren) bağlanıyor; 1281-1923 maddeleri o pencerenin dışında
(BAGLAMA-0929 bilgisine; onların listesinde "bağlı" sayılıyor).
