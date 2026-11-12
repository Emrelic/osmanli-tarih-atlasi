# KRON-BABIL-ASUR-1112 — Babil ve Asur: kronoloji × harita × kaynak denetimi

12 Kasım 2026 · yalnız okuma/araştırma; veri dosyasına dokunulmadı · ağaç: claude/epic-khayyam-9013c1 (origin/main'e göre `git fetch` ayrıca yapılmadı)
Yıl çevirisi: atlas `-0910` = MÖ 911 (astronomik). Aşağıda "MÖ" yıl, `-NNNN` atlas değeridir.

## 0. Envanter (ölçüm)

**Künye (`data/devletler.js`)** — 8 kayıt, hepsi `bolge:"mezopotamya"`:

| id | f → t (atlas) | MÖ | satır |
|---|---|---|---|
| eski-asur | -2024 → -1749 | 2025–1750 | 19243 |
| babil-eski | -1893 → -1594 | 1894–1595 | 19255 |
| sealand-1 | -1731 → -1474 | 1732–1475 | 19261 |
| kassit-babil | -1594 → -1154 | 1595–1155 | 19268 |
| isin-2 | -1154 → -1025 | 1155–1026 | 19274 |
| orta-asur | -1362 → -0910 | 1363–911 | 19284 |
| yeni-babil | -0625 → -0538-10-12 | 626–539 | 19293 |
| yeni-asur | -0910 → -0608 | 911–609 | 20885 |

Yan kayıtlar: `samsi-adad` (-1807→-1775), `mari-lim`, `mitanni`, `akad`, `ur-3`, `isin`, `larsa`, `esnunna`.
**Kronoloji:** kayıt içi `kronoloji:[]` (devletler.js) + `olaylar_antik_yakin_dogu.js` (satır 46–146 arası Babil/Asur) + `kronoloji_sinir_antik3_1024.js` (14–18, 34–35) + `olaylar_antik_misir_nubya.js` (39–47) + `kronoloji_cok_antik_frigya.js`.
**Yerleşim zinciri:** `yerlesimler_mo_zincir.js` (Babil 7, Aşşur 11, Ninova 12), `yerlesimler_zincir64.js` (Kalhu 247), `yerlesimler_mo_sumer.js` (Nippur, Sippar).

Konvansiyon: tüm uçlar **Orta kronoloji** ile uyumlu (Eski Babil 1894–1595, Kassit 1595–1155, Orta Asur 1363, Yeni Babil 626–539) → künyeler arası yıl çelişkisi **yok**; ardışıklık sağlam (babil-eski.t = kassit.f; kassit.t = isin-2.f; orta-asur.t = yeni-asur.f; Mitanni/Sealand örtüşmeleri meşru). Sorun künye uçlarında değil, **olay maddeleri ve harita zincirindedir**.

## 1. Bulgular (ağırlık sırasıyla)

### B1 — Tukulti-Ninurta I'in Babil'i alışı: 4 farklı tarih (Değişmez 2 / kaynak)
| yer | atlas | MÖ | kaynak durumu |
|---|---|---|---|
| orta-asur kronolojisi (devletler.js ~19290) | -1242 | 1243 (tahta çıkış günü) | RIAo: «1243-1207»; ama **Babil fethi tahta çıkış yılına bağlanmış** — RIAo fetih yılı vermez |
| kassit-babil kronolojisi | -1234 | ~1235 | kaynak: «arama özeti; tam metin doğrulanamadı» (kendi beyanı) |
| olaylar_antik_yakin_dogu.js:105 | -1224 | 1225 | Livius (ikincil) |
| yerlesimler_mo_zincir.js (Babil) | -1219 → -1209 | 1220–1210 | Zadok, Iranica «Kassites» (Boese/Brinkman 1982/86) |

Tek kaynak okuması (RIAo ria2, ORACC, bu tur okundu): Kaştiliaş IV yakalanmış, Kâr-Tukulti-Ninurta «fetihten sonra, ~11. saltanat yılı (MÖ 1231) civarında» kurulmuş; Babil'i 7 yıl elinde tutmuş; fetih yılı **verilmemiş**. Bu → fetih ≤ MÖ ~1232, yani -1224 (MÖ 1225) ile **çelişir**, -1234 ve -1242 ile uyumlu görünür. Zadok 1227–1220 verir (başka dizilim). Orta kronolojide Kaştiliaş IV genelde 1232–1225 olarak anılır (ikincil/Vikipedi-türevi arama sonucu; **dayanak sayılmadı**). Iranica 403 verdi, okunamadı → üçüncü bağımsız teyit **sağlanamadı**. Sonuç: madde yılı tek değerde çekilemiyor; **beyanlı bırak**, tek kaynaklı (RIAo) alt sınır "≤MÖ 1232" yaz.
Ayrıca orta-asur kronolojisindeki «Salmanasar tahta çıktı… Babil'e bağımlılığı reddetti» ve «Tukulti-Ninurta tahta çıktı; Babil'i fethedip…» maddelerinin `odak_yer:["Babil"]` kamerası Babil'e gider; olay Asur'da/Hanigalbat'tadır (odak yanlış).

### B2 — Haritada Orta Asur ve Isin II / Sealand görünmüyor (Değişmez 1/2 evreni)
- `d:"orta-asur"` yalnız 2 yerde: Babil -1219→-1209 (10 yıl) ve zincir64 (1 kayıt). **Aşşur'un zinciri** -1775→-0910 arası `__BOSLUK__` (865 yıl; Orta Asur'un tamamı, Eski Asur sonu, Mitanni vesayeti). Yani Orta Asur künyesi (-1362→-910) haritada **neredeyse hiç boyanmıyor**; Aşşur boşluk = delik.
- `isin-2`, `sealand-1`: **hiçbir yerleşimde** `d:` yok → haritada yok. Babil -1209→-0709 `__BOSLUK__` (500 yıl); künye "Babil" başkent diyor, Kassit künyesi t=-1154 ama Babil'de -1219 sonrası boşluk.
- Aşşur yeni-asur dönemi (-0910→-0613) `kaynak:`ı Aşşur-uballit I (MÖ 1364–1328) bağımsızlığını anlatan Livius cümlesini taşıyor → alıntı Orta Asur'u tarihliyor, Yeni Asur ucunu değil (kaynak–iddia uyumsuz).
- Ninova: kaynaksız ve yalnız yeni-asur (-0910→-0611); ilk anılış çok eskidir (Ninova öncesi KAYNAKLANMADI notu var). Bit -0611-01-01 = MÖ 612 başı; düşüş Ağustos 612 (aşağıda B6).
- Babil -0626-01-01…-0625-01-01: 1 yıllık `__BOSLUK__` (yeni-asur zincir ucu keyfî; Nabopolassar'ın oturuşu 23 Kasım MÖ 626 = -0625-11-23). Yeni-babil f künyede `-0625-01-01` → **~1 yıllık delik** Babil'de.
- Merdiven (CLAUDE.md boşluk doldurma): Babil 1219/1209→709 için bağlı abi merkez: Kassit sonrası Isin II/Babil kendi başkentidir → abi merkez gerekmez; dönem kaynak olarak `isin-2` künyesi (+ ORACC RIBo «Rulers of Babylonia 1157–64 BC») ile doldurulabilir. Not: isin-2 künyesi f -1154 iken zincirde Kassit ucu -1219 → "künye sonrası/öncesi" çelişkisi ayrıca sınıflanmalı (Asur kuklaları 1220–1210, sonra Kassit restorasyonu 1210–1155 — yani zincirdeki -1209 sonrası boşluk **Kassit dönemidir**, kassit-babil künyesi zaten -1154'e kadar uzanır).

### B3 — Eski Asur ↔ TDV uyumsuzluğu (zaten beyanlı, karar bekliyor)
TDV «Asya» maddesi: Eski Asur 1800–1375, Orta Asur 1375–1047, Yeni Asur 883–612. Atlas: 2025–1750 / 1363–911 / 911–609. Künye ic_not'larında "Karar verilmedi" yazıyor. Değerlendirme: TDV listesi ders-kitabı amaçlı kaba aralıktır, TDV kendisi Yeni Asur 883'ü (II. Aşurnasirpal) verip Adad-nirari II'yi (911) atlıyor; birincil/akademik (RIAo, Veenhof–Eidem 2008, Bryce 2005) atlas değerlerini destekliyor. CLAUDE.md "TDV esas" der → çelişki `ic_not`ta iki kaynağıyla beyan edilmeli (Orta Asur künyesi beyan ister diyor, yapılmamış). Eski Asur t=-1749 ayrıca Şamşi-Adad ile örtüşür (samsi-adad -1807→-1775 Aşşur'u ayrı polity yapıyor; eski-asur.t -1749 ardından 1749–1363 Asur hakkında hiç polity yok).

### B4 — Zayıf/yasak kaynaklar (Kaynak kuralı)
Şu kayıtlarda maddenin tek dayanağı Vikipedi veya popüler site:
- orta-asur `son` (-0910): yalnız `en.wikipedia.org/Middle_Assyrian_Empire (ikincil)`.
- yeni-babil `kurulus` (-0625): Vikipedi + «Beaulieu 1989» (sayfasız); yeni-asur: Asurbanipal tahta çıkışı (-0667), Ninova yağması (-0611), son (Harran) = worldhistory.org / Livius özeti (Livius "çeviri taşıyıcı" kabul ediliyorsa ikinci dolaylı).
- isin-2 kronolojisinde 6 madde: Vikipedi, `sites.google.com/site/historicdynasties`, lumenlearning, boundless (kaynak kuralının yasakladığı sınıf; RIBo «Rulers of Babylonia» zaten bir maddede var, diğerleri ona bağlanabilir).
- kassit-babil: Tukulti-Ninurta maddesi (B1) kendi beyanıyla «doğrulanamadı».
- sealand-1 künyesi: Vikipedi "ipucu".

### B5 — Çift/örtüşen kayıt
`kronoloji_sinir_antik3_1024.js:35` (-0604-09-07, Nebukadnezar II tahta çıkışı) ile `olaylar_antik_yakin_dogu.js:64` aynı gün/olay (mükerrer; ABC 5 doğru, 7 Eylül MÖ 605 Jülyen). Nabopolassar'ın ölümü 15 Ağustos MÖ 605 → b metni ölümü 7 Eylül'e bağlamış (gün tek madde için iki olay).

### B6 — Gün hassasiyeti
- `olaylar…` Yeni Babil: Ninova'nın alınışı `-0611-08-10` (MÖ 612). Ninova Düşüş Vakayinamesi (ABC 3) günü kırık; "Ağustos 612" yalnız ay. `-08-10` günü **kaynakta okunmadı → uydurma gün riski**. Öneri: `-0611-08-01` değil `-0611-01-01` + "ay Ağustos, gün kırık" beyanı.
- Yeni Babil t `-0538-10-12` (Gobryas, ABC 7 iii.15-16; zincirde Iranica Cyrus iii ile teyitli ✓). Kyros'un girişi 29 Ekim kayıtlı (olaylar:53) ✓ — Babil zincirinde ahamenis f aynı güne (12 Ekim) bağlı; Kyros'un girişi 29 Ekim'dir → 17 günlük aralık beyanı yok (Gobryas ordusu "Pers" adına girdi, kabul edilebilir; ic_not'a ekle).
- Yeni-asur t `-0608-01-01` (MÖ 609): Harran kuşatmasının kalkışı Ağustos 609; yıl hassasiyeti doğru.

### B7 — Eksik maddeler (Değişmez 2'ye dokunmayan ama kronoloji×harita için)
Hammurabi tahta çıkışı (1792) ve ölümü (1750) ile Samsu-ditana yok değil: sınır değişimleri (Larsa -1762, Esnunna -1761, Mari -1760, Eski Babil sonu -1594) mevcut ✓. Eksik: **Asur'un Yeni Asur → Babil sınır dalgaları**: Sargon II Babil tahtı 709 (zincirde var, kronolojide yok), Sanherib Babil'i yıkışı -0688 ✓ var; Şamaş-şuma-ukin isyanı sonu -0647 ✓; Nippur/Sippar bit "0640" yüzyıl hassasiyetli. Orta Asur'un Mitanni sonu: devletler.js `mitanni.t=-1259` ↔ olaylar:107 `-1269` (Şalmaneser I Hanigalbat'ı ilhak) → 10 yıl uyumsuz.
Elam–Babil: olaylar:102 Şutruk-Nahhunte Babil yağması **-1157** (MÖ 1158) ↔ kassit-babil kronolojisi/künye t **-1154** (MÖ 1155). Aramadaki ikincil kaynaklar 1155'i verir (Vikipedi-türevi; dayanak değil); iki atlas kaydı arasında 3 yıl fark var, olaylar:102 «yağma» (~1158), künye t «hanedan sonu» (1155) olabilir → ayrı olay olarak ic_not'ta beyan edilirse çelişki kalkar; **şimdilik teyitsiz**.

## 2. Doğrulananlar (temiz)
- Künyeler arası zincir ve Orta kronoloji uyumu (yukarı).
- yeni-babil t: Sippar 10 Ekim / Gobryas 12 Ekim / Kyros 29 Ekim 539 — ABC 7, Iranica Cyrus iii (zincirde) ✓.
- Hammurabi–Rim-Sin (-1762), Esnunna (-1761), Mari (-1760): Barreyra Fracaroli 2011 (okundu) ✓.
- Sargon II Karkemiş (-0716), Sanherib Babil (-0688), Ninova alınışı yılı (612), Harran (609), Karkemiş savaşı (605) ✓.

## 3. Ölçülemedi / yapılmadı
- Iranica «Kassites» 403, web.archive.org erişim kısıtlı → Kaştiliaş IV/Elam tarihleri için üçüncü bağımsız teyit **alınamadı** (RIAo yıl vermiyor). RlA «Kaššu»/Brinkman MSKH okunamadı.
- TDV Babil/Asur madde gövdeleri bu turda yeniden çekilmedi (künye alıntıları devralındı).
- `denetle*.py`, paketleme ve harita çıktısı koşturulmadı (yasak) → "boşluk delik olarak görünüyor" hükmü veri okumasından, görsel çıktıdan değil.

## Karar gereken (öneri ile)
1. **Tukulti-Ninurta Babil fethi tek tarih** — öneri: üç kaydı (-1242/-1234/-1224) ve zincir (-1219) tek "fetih ≤ MÖ ~1232 (RIAo; fetih yılı belirsiz)" kaydında topla; kronolojide maddeyi **yıl yerine onyıl** (`-1232` + beyan «RIAo: Kâr-Tukulti-N. ~MÖ 1231 öncesi; Zadok 1227–1220 ile çelişir») yaz; -1224 maddesi ve Babil zincirinin -1219…-1209 Asur dilimi aynı konvansiyonda tek değere çekilsin. Konvansiyon (Boese/Zadok vs Brinkman orta) Emre'nin: **Brinkman/Orta kronoloji** öneririm (CLAUDE.md antik konvansiyonu).
2. **Aşşur ve Babil zincir boşlukları** (Orta Asur, Isin II, Sealand dilimleri) — öneri: yeni iş: Aşşur -1775→-0910'u eski-asur/Mitanni-vesayeti/orta-asur olarak kaynaklı doldur (RIAo, Bryce 2005); Babil -1209→-1154 kassit-babil'e, -1154→-1025 isin-2'ye bağla (RIBo «Rulers of Babylonia»), -1025→-709 için Aram/Kaldean dönemini kaynak arayıp beyanlı boşluk ya da Asur hakimiyeti. Veri yazan oturum + HAVVA koşusu şart.
3. **TDV çelişkisi (Eski/Orta/Yeni Asur)** — öneri: künye ic_not'larına TDV rakamını iki kaynaklı beyan yaz, atlas değerlerini (RIAo/Bryce) koru; TDV esas kuralı gereği Emre onayı.
4. **Vikipedi/blog dayanaklı 12 madde (B4)** — öneri: RIBo/RIAo/Grayson 1975 ile yeniden kaynakla; olmazsa maddeyi gün→yıl hassasiyetine indir, yeni-babil/Ninova -08-10 gününü kaldır.
5. **Elam–Babil -1157 ↔ -1154** — öneri: iki ayrı olay olarak beyan; Brinkman/Iranica (arşiv erişimi olan oturum) ile teyit.
