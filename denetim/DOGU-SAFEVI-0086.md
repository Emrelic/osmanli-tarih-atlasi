# DOGU-SAFEVI-0086 — parti-emrelic-0086: H-0002 · H-0003 · H-0007 · H-0008 · H-0009 · H-0012 · H-0013

Ağaç: `C:\atlas-safevi` · temel `origin/main` `6865cc87` · 9 Ekim 2026 · UMIT.
Diffler **UYGULANMADI**:
- `denetim/DOGU-SAFEVI-0086-KOORD.diff` — veri + 2sk tavanı
- `denetim/DOGU-SAFEVI-0086-KRONO.diff` — 3 yeni madde
- 🔴 İkisi **aynı commit'te** inmeli.

**Görseller:** PARTI.md metni kimlik ve tarih vermiyordu ("bu dönemde", "burası"). O yüzden şu görseller
**açıldı**: H-0002-1 · H-0003-1 · H-0007-1 · H-0008-1 · H-0009-1 · H-0012-1/2 · H-0013-1.
Paket gizli depodadır; görsel açık depoya kopyalanmadı.

## 0. Öngörü (ölçümden önce, görsel açılmadan yazıldı)
| Madde | Öngörü | Ölçüm | |
|---|---|---|---|
| Dönem | 1500-1508 | 1500 · ~1502-1514 · 1508 sonrası | ✓ |
| H-0002 | Maveraünnehir'de Timurlu gecikmesi | Ters: **Taşkent** 1485-1503 Moğulistan olmalı; Fergana 1500-1504 Timurlu olmalı (atlas 1500'de Buhara) | yarı ✓ |
| H-0007 | Şirvanşah doğru, renk sorunu | **Ters bölünme:** çekirdek 1501'de Safevî, kenar 1538'e kadar Şirvanşah | ✗ |
| H-0008 | Bayburt doğru | **Doğru** (TDV) | ✓ |
| H-0009 | Kars Akkoyunlu 13 yıl geç | Kars, Ardahan, Sarıkamış Akkoyunlu →1514-09-06 (künye 1514-01-01'de ölüyor) | ✓ |
| H-0012 | iki cep Mardin/Diyarbekir ya da Basra | Cepler **Kars grubu + Kirman** (1510'a kadar); ayrıca Irâk-ı Acem ve Fars 5 yıl geç (1508, olması gereken 1503) | ✗ (yer) |
| Etkilenen nokta | 15-40 | **24** | ✓ |

## 1. Madde madde

### H-0009 — "Kars, Ardahan, Sarıkamış Akkoyunlularda mı kalmış?" → **HAYIR, hata**
- Ölçüm:
  - Üçü de `akkoyunlu 1467 → 1514-09-06`. Akkoyunlu künyesi `1514-01-01`de ölüyor.
  - Erzurum 1502'de, Bayburt 1501'de, Revan/Arpaçay/Digor/Iğdır 1501-07-01'de Safevî.
  - ⇒ 1501-1514 arasında Safevî ortasında bir Akkoyunlu adası (görsel H-0009 tam bu).
- TDV `kars`, birebir: *"907’de (1501) Akkoyunlu Devleti’nin Safevîler tarafından yıkılmasıyla Kars bir müddet
  Avşar Türkmenleri’nden Sevündük Han Kurçibaşı’nın elinde kaldı."*
- Öneri:
  - Üçü de `akkoyunlu →1501-07-01 · safevi 1501-07-01 →` (Safevî künyesinin açılışı, komşularla aynı gün).
  - Ardahan ve Sarıkamış için **gün komşudan: Kars** (60 / 47 km, aynı süreç, D207 beyanı `kaynak:`ta).
    TDV `ardahan` tarih vermiyor; `sarikamis` 302 (ölü slug).
- D205: sınıf ① (devlet öldü → dönem KISALIR). Bitlis'teki emsal (`neden:` alanı) aynısı.
- Çakışma kontrolü: TEBRIZ-1514-0087'ye (Doğubayazıt'ın oturumu) yatay mesaj atıldı, cevap gelmedi.
  Diff'i ölçüldü: yalnız Tebriz/Kemah/Siirt notlarına dokunuyor. **Çakışma yok** (sıralı `apply` temiz).

### H-0012 — "Bağdat'ı Safevîler aldı ama bu iki toprak [Akkoyunlu] görünüyor" → **HATA, iki kat**
- 1509-01-01'de kalan Akkoyunlu noktaları: **Kars, Ardahan, Sarıkamış** (H-0009) ve **Kirman** (→1510-12-02).
  Görseldeki iki cep bunlar.
- Kirman — TDV `kirman`, birebir: *"908’de (1502-1503) Şah İsmâil’in zaptıyla başlayan Safevîler dönemi Kirman’a
  eski refah günlerini geri getirdi."*
  ⇒ `1503-01-01` (yıl-temsilî; hicrî 908 iki miladî yıla düşer; Isfahan ve Hemedan ile aynı gün).
- **Aynı sınıfın büyük hâli:** Hemedan, Şîraz, Yezd, Zencan ve "Zagros içi" 1508-01-01'e kadar Akkoyunlu.
  - Oysa atlasın **kendi kronolojisi** `olaylar_ek11` 1503-01-01 diyor: *"Murad Bey'in Hemedan yenilgisi:
    Irâk-ı Acem ve Fars Safevî'ye geçti"* (yer: Hemedan, Isfahan, Şîraz, Kâşân). Madde ile harita
    birbirini **yalanlıyordu**.
  - TDV `safeviler`, birebir: *"909’da (1503) Irâk-ı Arab ve Fars hâkimi Murad Bey’e karşı yürüyen Şah İsmâil yine
    az bir kuvvetle Hemedan yakınlarında yapılan savaşta üstün geldi."*
  - TDV `akkoyunlular`: *"… 1503’te Hemedan yakınlarında yapılan savaşta o da yenilerek Bağdat’a kaçtı, 1509’a
    kadar orada hüküm sürdü."*
  - ⇒ Beşi `1503-01-01`. Zencan ve Zagros içi `BÖLGE CÜMLESİ, ŞEHİR TANIKLIĞI DEĞİL` beyanlı.
- **Dokunulmayanlar:**
  - Irâk-ı Arab (Bağdat, Musul, Basra …) 1508'de kalır: TDV "Ertesi yıl Bağdat" ve "1509'a kadar orada" der.
  - **Kirmanşah** (Irâk-ı Acem sınırı) için yer cümlesi bulunamadı ⇒ 1508'de bırakıldı.
  - **Huzistan** (Havîza, Dizfûl, Şüşter, Ahvaz, Râmhürmüz, Behbehân, Abâdân) `akkoyunlu →1508`. Bölge Akkoyunlu değil
    Müşa'şa'ların elindeydi. Bu bir kimlik sorusu ve künye yok ⇒ **ayrı kalem**, dokunulmadı.

### H-0007 — "Şirvanşahlar bu şekilde mi?" → **HAYIR, ters bölünme**
- Ölçüm:
  - Çekirdek (Şamahı, Bakü, Şâbüran, Kabala, Ereş, Mahmudâbâd) `sirvansah →1501-07-01 → safevi`.
  - Kenar (Salyan, Kuba, Şeki) `sirvansah →1538-01-01`.
  - ⇒ 1501-1538'de iki kopuk Şirvanşah parçası, ortası Safevî (görsel H-0007).
- TDV `sirvan`, birebir: *"Böylece teşekkül eden Şirvanşahlar idaresi uzun süre bölgede hâkimiyetini devam
  ettirdi."* · *"Şah Tahmasb’ın 1538’de Şirvanşahlar’ın hâkimiyetine son vermesinin ardından bölge Safevî
  Devleti’nin bir vilâyeti haline geldi."*
- TDV `sirvansahlar`: *"945 Cemâziyelevvelinde (Ekim 1538) Baykurd Kalesi’ni zaptettiler … Şâhruh’u esir alarak
  Tebriz’e götürdüler."*
- Öneri:
  - 8 nokta (çekirdek 6 + Salyan, Kuba) `sirvansah →1538-10-01`, `safevi 1538-10-01 kesinlik:"ay" →`.
  - KRONO: 1538-10-01 maddesi (yoktu).
- ⚠️ TDV `baku`: *"1501 yılında Safevî Hükümdarı Şah İsmâil tarafından ele geçirildi."* `sirvansahlar` da
  1500'de Bakü ve Şemâhî'nin zaptını yazıyor. Yani 1501 zaptı GERÇEK. Ama TDV `sirvan` Safevî vilâyetliğini 1538'e
  koyuyor: hanedan metbû altında sürdü.
  - Bakü'yü dışarıda bırakmak 1501-1538 için bir Safevî adacığı açardı (D206). Dahil edildi, gerilim raporda.
  - 1501-1538 Safevî metbûluğu motor tarafından ayrıca boyanmıyor (`v:` yalnız Osmanlı tâbiliği içindir).
- **Dokunulmayanlar:**
  - Derbend (`safevi 1509`): kaynak bulunamadı.
  - **Şeki**: TDV'ye göre Şirvanşah değil, ayrı hâkimdir ("Şeki hâkimi Seyyid Ahmed"). `sirvansah` kimliği yanlış
    olabilir ⇒ ayrı kalem.

### H-0008 — "Bayburt Safevîlerin elinde mi?" → **EVET, doğru**
- TDV `bayburt`, birebir:
  - *"Bundan sonra uzun süre Akkoyunlular’ın elinde kalan şehir ve yöresi 1501’de Safevîler tarafından alındı."*
  - *"… Kara Maksûd-i Sultânî’nin müdafaa ettiği Bayburt’u aldılar (Ekim 1514)."*
- Veri: `akkoyunlu →1501-07-01 · safevi →1514-10-23 · Osmanlı`. **Değişiklik yok.**
- Yan not: Kelkit 1473'ten beri Osmanlı (Otlukbeli). Bu maddede sorulmadı, ölçülmedi.

### H-0002 — "Ortada Timurlu toprağı görünüyor, hata mı?" (1500) → **EVET, hata, ama tersten**
- Görselde 1500'de Buhara Hanlığı Fergana'yı, Taraz'ı ve Sayram'ı da kaplıyor; ortadaki "Timurlu" cebi **Taşkent**.
- Taşkent — TDV `taskent`, birebir:
  - *"Timurlular arasında başlayan taht mücadelesi neticesinde Taşkent ve çevresi Yûnus Han’ın idaresine girdi (890/1485)."*
  - *"908’de (1503) Taşkent’i Özbek Şeybânî Han aldı"*
  - ⇒ `timurlu →1485-01-01 · mogulistan 1485→1503 · buhara 1503→`. Künye `mogulistan` (1347-1680) var.
  - KRONO: 1485 maddesi (yoktu).
- Fergana (Andican, Oş, Hokand, Hucend): bunlar 1500-01-01'de Buhara'ya geçiyordu (Semerkant/Buhara şablonu, kaynaksız).
  - TDV `fergana`: *"… Bâbür … 1504’te bölgeyi Özbekler’e bırakarak Kâbil’e gitti."* TDV `babur`: *"Fergana hâkimiyeti (1494-1504)"*.
  - ⇒ `timurlu →1504-01-01 · buhara 1504→`, `BÖLGE CÜMLESİ` beyanlı. KRONO: 1504 maddesi.
  - ⚠️ `kronoloji_cok_orta_asya2.js` 1503-06-01 Aksı maddesi "Fergana … Özbek eline geçti" diyor
    (Britannica/EI² web özeti). TDV 1504 diyor; TDV esas alındı, çelişki yeni maddenin `ic_not_d`ında.
- **Bulunamadı (KASA'ya):**
  - Sayram, Çimkent, Taraz, Türkistan (Yesi) 1500'de Buhara. TDV `seybaniler` Türkistan'ın 1488'de Şeybânî'ye
    yurtluk verildiğini yazıyor; Sayram, Çimkent ve Taraz için 1485-1503 Moğulistan mı Şeybânî mi, kaynak yok.
  - Hisar, Termez, Külâb 1500'de Buhara. Hisar-Kunduz'da Timurlu emîri Husrev Şah 1505'e kadar vardı; TDV'de bulunamadı.

### H-0003 — "Timurlu devleti bu dönemde doğru mu?" → **Büyük ölçüde doğru, iki istisna**
- Horasan (Herat, Meşhed, Nîşâbur …) `timurlu →1507` (Hüseyin Baykara): doğru. Harezm →1505: TDV `seybaniler` ile uyumlu.
- İstisna 1: Taşkent (yukarıda).
- İstisna 2: Kâbil ve Gazne `timurlu →1504-10-01 · babur`. 1502-1504 Argun gaspı (Mukîm) atlanmış;
  künye yok ⇒ ayrı kalem.

### H-0013 — "Burası gerçekten Timurlu'ya mı ait?" → **HAYIR (Kandehar), ama künye eksik**
- Görseldeki etiket "TİMURLU VALİLİĞİ" = `timurlu` kimliğinin harita adı (`arac/renkler.py:1933`,
  "Timurlu valiliği"). 1508 sonrasında `timurlu` taşıyan **tek** nokta **Kandehar** (`timurlu →1522-09-06`).
  `timurlu` künyesi 1507-05-01'de ölüyor ⇒ sınıf ③ (ardıl yapı).
- TDV `kandehar`: *"… Baykara’nın Kandehar valisi Zünnûn Argun bölgede bağımsızlığını ilân etmek için harekete geçti ve
  Kandehar’ı kendisine merkez yaptı."* · *"Bâbür, Argunlular’ın üzerine yürüyerek … 928’de (1522) şehri zaptetti."*
- ⇒ Doğru sahip **Argunlular**. `devletler.js`'te künyesi YOK; TDV `argunlular` 302 (ölü slug). Künye ve boya
  `renkler.py`ye gider, yani motor tuzuna ⇒ bu diff'te **yapılmadı**. Öneri: künye `argunlular` (~1479/1507–1522,
  Kandehar–Sind), `boya_gerekli:true`, tam inşa koşusunda. **KASA'ya:** Argun künyesinin akademik kaynağı.
- Yan not: etiketin "valiliği" demesi `renkler.py`de (motor tuzu); dokunulmadı.

## 2. D206 — iki uç (kesit ölçümü, uygulanmış ağaçta)
- 1500-06: değişmedi (bütün kırılmalar 1501 ve sonrası; Taşkent 1485-1503 Moğulistan).
- 1504-06: Akkoyunlu 62 nokta. Hepsi Irâk-ı Arab, Diyarbekir ve Huzistan; Irâk-ı Acem/Fars ve Kars adası kalktı.
- 1509-01: **Akkoyunlu 0** (önce 4: Kars, Ardahan, Sarıkamış, Kirman).
- 1509 ve 1520: Şirvanşah 9 nokta, tek parça (Şamahı çekirdeği + Salyan + Kuba + Şeki).
- Değişmez 1 sahipsiz 309/309 (yeni delik yok) · Değişmez 7 enklav **737 → 736**.

## 3. Denetim (main 6865cc87, `PYTHONHASHSEED=0`) — uygula → ölç → geri al
| | Önce | Veri+KRONO | + tavan |
|---|---|---|---|
| Çıkış | **2** (D8 ölçülemedi) | 2 | **2** |
| Değişmez 1 / 2 / 4c / 4d | 309 · 627/0 · 126 · 324 | aynı | aynı |
| 2s | 1727 · **184 AÇIK** · 167 yıl-temsilî | 1729 · **184 AÇIK** · 167 | aynı |
| **2sk** | YER 2087 · görünür+maskeli 2251 (tavan 2251) | YER **2101** · **2242** | 2242 (tavan **2242**) |
| Değişmez 7 | 737 | **736** | 736 |
| kaynaksız `s:` | 1908 | **1892** | 1892 |
- 2sk İYİLEŞTİ (−9) ⇒ tavan §3.4③ gereği **2251 → 2242**, aynı diff'te. Değer yazmadan hemen önce yeniden ölçüldü.
- Kaynaksız `s:` tavanı (1930) zaten gevşekti (önce 1908); indirme koordinatöre (`--kaynak-tavan-indir`).
- Geri alındı, ağaç temiz. KOORD + KRONO `--check` ayrı ayrı ve birlikte temiz, CR 0.
- **Sıralı** uygulamada temiz: TEBRIZ-1514-0087(-KOORD) · DOGU-1533-0087-KRONO · SABLON-KANADA · HAYALET-KUNYE (+EK).
- ⚠️ **Tek çakışma:** DOGU-1533-0087-KOORD aynı tavan satırını (2251→2259) değiştiriyor. Sonra inen diff tavanı
  YENİDEN ÖLÇER; toplanmaz.

## 4. İstek
1. KOORD + KRONO inişi, **aynı commit**, 2sk tavanı 2242.
2. Ayrı kalemler:
   - Huzistan'ın kimliği (Müşa'şa')
   - Şeki'nin kimliği
   - Kâbil 1502-1504 Argun
   - Argun künyesi (Kandehar 1507-1522) + boya
   - Kirmanşah 1503
3. **KASA'ya araştırma:**
   - Sayram, Çimkent, Taraz 1485-1503 sahibi
   - Hisar, Termez, Külâb (Husrev Şah) 1500-1505
   - Argunlular künyesinin akademik kaynağı
