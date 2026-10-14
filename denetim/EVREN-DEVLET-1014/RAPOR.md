# EVREN-DEVLET — atlas künyeleri × Cliopatria v0.2.1

*Bu dosya `py -I arac/evren_devlet.py <zip>` tarafından ÜRETİLDİ; elle düzenleme — yeniden koştur.*

> Kaynak: Cliopatria v0.2.1, Seshat Global History Databank (Bennett ve diğ., Scientific Data 2025, doi:10.1038/s41597-025-04516-9), CC-BY 4.0; değiştirildi: özetlendi.

| | |
|---|---|
| ağaç | `C:\atlas\.claude\worktrees\agent-aea098fbaa678caf3` |
| dal · commit | `worktree-agent-aea098fbaa678caf3` · `4937b2d42e5d6a7fca2d4ac4ea9f16144dbcf270` |
| data/ + girdi kirli mi | HAYIR (temiz) |
| makine · zaman | EMRELIC · 2026-10-14 12:11 |
| girdi | `cliopatria.geojson.zip` (içerik: `cliopatria_polities_only_v021.geojson`) |
| süre | 165 sn · 4260414 nokta-poligon testi |

## Sonuç özeti
- **Cliopatria:** 1587 polity adı (13412 POLITY satırı); bunların 43'i bileşik (parantezli ad), 6'i 2000 sonrası başladığı için kapsam dışı.
- **Polity sınıfları:** eslesen 886 · aday 357 · kunye-var-noktasiz 63 · atlasta-yok 275 · kapsam-disi 6
- **İkinci geçiş (ad + zaman, yalnız mekânsal eşleşmesi olmayanlar):** atlasta-yok ÖNCE 343 (tekil 341) → SONRA 275 (tekil 273); 63 polity `kunye-var-noktasiz`e geçti ve 5 polity yalnız tolerans çiftiyle `aday`a geçti (`kunye_var_noktasiz.tsv`).
- **Künye sınıfları (1801 künye, 1'i sentetik osmanli):** aday 329 · atlasa-ozgu 191 · eslesen 877 · noktasiz-kunye 232 · noktasiz-kunye(ad-adayi) 172
- **İki yönlü sınav:** çıkış 2 (ölçülemedi var).

🔴 **Cevap (halka ①):** hayır, liste elimizde değil. Cliopatria'nın kapsamı içindeki 1538 tekil (bileşik olmayan) polity'den **273**'i atlasın hiçbir künyesiyle mekân+zaman üzerinden eşleşmedi ve ad+zaman yardımcı işareti de yok (`atlasta_yok.tsv`). Ama bu sayı bir ÜST sınırdır: atlasın MÖ ve 330 öncesi yerleşim sahipliği hiç yazılmadığı için o dönemde tek mekânsal işaret künyenin BAŞKENT noktasıdır; başkenti çözülemeyen künye eşleşemez (aşağıda `noktasiz-kunye`).

## Yıl dönüşümü — KARAR
- README (aynı dizin): *Years are recorded as integers, negative for BCE, positive for CE*, From/To **kapsayıcı**.
- Veride ölçüldü: `-1` değeri **0** kez, `0` değeri **6** kez, `1` değeri **7** kez geçiyor. `0` ile biten 6 satırın ardılı `1` ile başlıyor (Roman Empire, Parthian Empire, Yuezhi, Indo-Scythians, Judea, Indo-Greeks). Roman Empire FromYear=-31 (Aktion, MÖ 31), Roman Republic ToYear=-32.
- ⇒ Negatif değer **MÖ etiketidir** (tarihî numaralandırma); `0`, MÖ 1 yerine kullanılmış. **Dönüşüm: `astro = Y + 1` (Y < 0), `astro = Y` (Y ≥ 0).** MÖ 3400 → -3399; MÖ 31 → -30; 0 → 0 (= MÖ 1). `-1` veride yok ⇒ 0 ile çakışan iki değer yok.
- Satır aralığı astronomik `[astro(From), astro(To)+1)` yarı açık aralık; atlas künyesi `[f, t)`.
- Atlas künyeleri zaten astronomik (`VERI-YAPISI.md` §MÖ). Kalan risk: Cliopatria'nın tek tek satırlarının yılları kendi kaynaklarına göre kaba (ör. Ptolemaic Kingdom ToYear=-28, Achaemenid ToYear=-327); bu bir yıllık kaymadan büyüktür ve dönüşüm onu düzeltmez.

## Evren ve tanımlar
- **RELATION:** 385 satır, 50 ad. Biçim `(Alliance between X and Y)` / `(Allegiance of X to Y)` — bir siyasi yapı DEĞİL, iki polity arasındaki ittifak/tâbiiyet ilişkisi; `Components` alanı tarafları sayar. Eşleşmeye **katılmadı**. Örnek: (Allegiance of Ayyubid Sultanate to Abbasid Caliphate); (Allegiance of Chagatai Khanate to Yuan Dynasty); (Allegiance of Delhi Sultanate to Abbasid Caliphate); (Allegiance of Duchy of Aquitaine to Kingdom of France); (Allegiance of East Franks to Carolingian Empire).
- **Bileşik POLITY:** adı parantezli 43 polity (`(Holy Roman Empire)`, `(Kingdom of France)` …) — bileşenlerinin (Components) çatısı; tekil polity'ler `MemberOf` ile ona bağlanır. Eşleşmeye katıldı ama `bilesik=1` işaretli; özetteki eksik sayısına KATILMADI.
- **Atlas yerleşim evreni:** `girdi.yukle()` → 4563 yerleşim. Sahiplik `v:`/`d:` → `osmanli`, `s:` → `d:` (öncelik v > d > s, `kur`/`bit` sahnesi, `__BOSLUK__` atılır; `isg:` sahiplik değiştirmediği için sayılmaz). **En erken sahiplik dönemi: 330** ⇒ bundan önceki örnek yıllarda yerleşim oyu YOKTUR.
- 🔴 **Osmanlı'nın `data/devletler.js`te künyesi YOK** (`id:"osmanli"` bulunmadı; `d:`/`v:` katmanı onu taşır). Ölçüm için sentetik künye kullanıldı: ömür atlasın kapsam beyanı 1281–1923 (CLAUDE.md), başkent İstanbul. Kendi başına bir bulgudur.
- **Başkent çözümü:** `silsile_olc.py` Dizin + `parca_coz` (yeni çözücü yazılmadı); `baskent` metni `→ / , ; ve sonra` ile parçalanır. Sonuç: {'cozulemedi': 505, 'cozuldu': 1192, 'baskent-yok': 85, 'kita-celiskisi-atildi': 19}.
- **Başkent kıta süzgeci:** çözülen başkent noktası künyenin `bolge` kıtasıyla çelişirse (Avrupa↔Asya hariç) nokta atıldı — çözücünün eşadlı yanlış yeri: **21** nokta. umman-zengibar: 'Maskat → Zengibar (Stone Town)'→Maskat (Asya, beklenen Afrika); hawaii-kralligi: 'Honolulu'→Honolulu (K.Amerika, beklenen Okyanusya); nikaragua-cumhuriyeti: 'León → Managua'→León (Avrupa, beklenen K.Amerika); fransiz-komorlari: 'Dzaoudzi / Moroni'→Dzaoudzi (Mayotte) (Avrupa, beklenen Afrika); fransiz-birligi: 'Paris'→Paris (Avrupa, beklenen Afrika); birlesik-arap-devletleri: 'Kahire'→Kahire (Afrika, beklenen Asya); hong-kong-ingiliz: 'Victoria'→Victoria (Fort Victoria) (K.Amerika, beklenen Asya); untea: 'Hollandia'→Jayapura (Hollandia) (Asya, beklenen Okyanusya); guyana: 'Georgetown'→Georgetown (Okyanusya, beklenen G.Amerika); martinik: 'Fort-de-France'→Fort-de-France (Fort-Royal) (Avrupa, beklenen K.Amerika); ganiyeler: 'Mayorka, sonra İfrîkıye'→Mayorka (Palma) (Avrupa, beklenen Afrika); misir-erken-hanedan: 'Thinis → Memfis'→Memphis (Chickasaw Bluffs) (K.Amerika, beklenen Afrika)
- **Açık uçlu künye:** `t` yok → 2025 sayıldı (221 künye: fransa-cumhuriyet, ingiltere, isvec, fas, ispanya, portekiz, hollanda, danimarka…).
- **Nokta-poligon:** saf Python (ray casting, çift-tek; bbox + 1° yerleşim ızgarası + enlem bandı kenar dizini). Köşe seyreltme 0.005°; poligon dışına düşen nokta için ±0.05° (~5 km) dört komşu denenir (kıyı şehirleri kaba poligonun dışında kalmasın).
- **Örnek yıllar:** her satırın ilk, orta, son yılı (astronomik, yıl ortası).

## Sınıflama kuralları (eşikler)
Her (polity P, künye K) çifti için: `zaman_kisa` = örtüşme / kısa olanın süresi; `pay_P` = P poligonlarındaki sahipli yerleşim oylarının K'ya düşen payı; `kapsam_K` = aynı örnek yıllarda K'nın dünyadaki yerleşimlerinin P içinde kalan payı; `baskent` = K'nın ömrüyle örtüşen P satırlarının kaçında K'nın başkenti poligonda; `ad_benzer` = transliterasyon katlamalı (q→k, kh→h, w→v, ç ekleri…) en iyi difflib oranı — YALNIZ yardımcı.

| sınıf | kural |
|---|---|
| eslesen (mekan-iki-yon) | zaman_kisa ≥ 0.5 VE pay_P ≥ 0.4 VE kapsam_K ≥ 0.4 |
| eslesen (baskent) | zaman_kisa ≥ 0.5 VE başkent satırların ≥ %50'inde içeride VE (pay_P ≥ 0.15 YA DA K'nın o yıllarda hiç yerleşim oyu yok) VE (örtüşme/uzun süre ≥ 0.25 YA DA ad_benzer ≥ 0.8) |
| eslesen (mekan-zayif+ad) | zaman_kisa ≥ 0.5 VE (zayıf mekân YA DA başkent) VE ad_benzer ≥ 0.8 |
| aday | zaman örtüşüyor ama yukarıdakiler tutmuyor ve bir mekânsal işaret var (zayıf mekân: oy ≥ 3 ve pay ≥ 0.15 ya da kapsam ≥ 0.3); ya da künye noktasız ve ad_benzer ≥ 0.8 + zaman_kisa ≥ 0.5 — `neden` sütunu hangisi olduğunu yazar |
| atlasta-yok | polity hiçbir künyeyle eslesen/aday değil — EKSİK DEVLET ADAYI |
| atlasa-ozgu | künye hiçbir polity ile eslesen/aday değil (YANLIŞ demek değil: Cliopatria küçük beylik/kontluk/kabile kapsamayabilir) |
| noktasiz-kunye | künyenin hiçbir `s:` dönemi yok VE başkenti yerleşime çözülemedi — mekânsal ÖLÇÜLEMEDİ (≠ yok) |

## Dönem × kıta
Polity için dönem = astronomik ilk yıl, kıta = en büyük satırın temsil noktasının modern ülkesi (Natural Earth CONTINENT; Rusya Avrupa sayılır). Künye için kıta = başkent noktası çözüldüyse NE ülkesi, yoksa `bolge` eşlemesi. **Bileşik polity'ler ve 2000 sonrası başlayanlar hariç.**

### Cliopatria polity — eslesen

| kıta | MÖ | 1–999 | 1000–1280 | 1281–1923 | 1924+ | toplam |
|---|---|---|---|---|---|---|
| Avrupa | 5 | 52 | 56 | 128 | 43 | 284 |
| Asya | 15 | 59 | 40 | 196 | 61 | 371 |
| Afrika | 0 | 6 | 12 | 41 | 56 | 115 |
| K.Amerika | 0 | 1 | 0 | 29 | 13 | 43 |
| G.Amerika | 0 | 0 | 1 | 21 | 6 | 28 |
| Okyanusya | 0 | 0 | 0 | 2 | 5 | 7 |
| ? | 0 | 0 | 0 | 0 | 2 | 2 |

### Cliopatria polity — aday

| kıta | MÖ | 1–999 | 1000–1280 | 1281–1923 | 1924+ | toplam |
|---|---|---|---|---|---|---|
| Avrupa | 8 | 33 | 48 | 51 | 4 | 144 |
| Asya | 52 | 54 | 7 | 35 | 4 | 152 |
| Afrika | 3 | 6 | 4 | 14 | 1 | 28 |
| K.Amerika | 4 | 2 | 3 | 7 | 0 | 16 |
| G.Amerika | 0 | 1 | 0 | 9 | 1 | 11 |
| Okyanusya | 0 | 0 | 0 | 1 | 0 | 1 |
| ? | 0 | 0 | 0 | 0 | 0 | 0 |

### Cliopatria polity — kunye-var-noktasiz

| kıta | MÖ | 1–999 | 1000–1280 | 1281–1923 | 1924+ | toplam |
|---|---|---|---|---|---|---|
| Avrupa | 2 | 9 | 2 | 4 | 0 | 17 |
| Asya | 9 | 18 | 1 | 4 | 0 | 32 |
| Afrika | 10 | 0 | 1 | 0 | 1 | 12 |
| K.Amerika | 0 | 0 | 0 | 0 | 2 | 2 |
| G.Amerika | 0 | 0 | 0 | 0 | 0 | 0 |
| Okyanusya | 0 | 0 | 0 | 0 | 0 | 0 |
| ? | 0 | 0 | 0 | 0 | 0 | 0 |

### Cliopatria polity — atlasta-yok

| kıta | MÖ | 1–999 | 1000–1280 | 1281–1923 | 1924+ | toplam |
|---|---|---|---|---|---|---|
| Avrupa | 12 | 60 | 26 | 18 | 0 | 116 |
| Asya | 71 | 47 | 7 | 4 | 1 | 130 |
| Afrika | 5 | 3 | 0 | 3 | 2 | 13 |
| K.Amerika | 0 | 1 | 0 | 6 | 1 | 8 |
| G.Amerika | 0 | 0 | 0 | 2 | 0 | 2 |
| Okyanusya | 0 | 0 | 0 | 1 | 1 | 2 |
| ? | 1 | 0 | 0 | 0 | 1 | 2 |

### Atlas künyesi — aday

| kıta | MÖ | 1–999 | 1000–1280 | 1281–1923 | 1924+ | toplam |
|---|---|---|---|---|---|---|
| Avrupa | 2 | 1 | 11 | 33 | 18 | 65 |
| Asya | 1 | 5 | 14 | 91 | 26 | 137 |
| Afrika | 0 | 1 | 4 | 73 | 23 | 101 |
| K.Amerika | 0 | 0 | 0 | 17 | 2 | 19 |
| G.Amerika | 0 | 0 | 0 | 6 | 0 | 6 |
| Okyanusya | 0 | 0 | 0 | 1 | 0 | 1 |
| ? | 0 | 0 | 0 | 0 | 0 | 0 |

### Atlas künyesi — atlasa-ozgu

| kıta | MÖ | 1–999 | 1000–1280 | 1281–1923 | 1924+ | toplam |
|---|---|---|---|---|---|---|
| Avrupa | 2 | 2 | 3 | 2 | 0 | 9 |
| Asya | 17 | 5 | 3 | 14 | 0 | 39 |
| Afrika | 1 | 3 | 4 | 59 | 6 | 73 |
| K.Amerika | 0 | 0 | 2 | 45 | 3 | 50 |
| G.Amerika | 0 | 1 | 0 | 4 | 0 | 5 |
| Okyanusya | 0 | 1 | 3 | 4 | 7 | 15 |
| ? | 0 | 0 | 0 | 0 | 0 | 0 |

### Atlas künyesi — eslesen

| kıta | MÖ | 1–999 | 1000–1280 | 1281–1923 | 1924+ | toplam |
|---|---|---|---|---|---|---|
| Avrupa | 4 | 45 | 79 | 107 | 46 | 281 |
| Asya | 11 | 60 | 70 | 171 | 48 | 360 |
| Afrika | 1 | 8 | 12 | 66 | 67 | 154 |
| K.Amerika | 0 | 0 | 2 | 34 | 11 | 47 |
| G.Amerika | 0 | 0 | 1 | 20 | 2 | 23 |
| Okyanusya | 0 | 0 | 0 | 4 | 6 | 10 |
| ? | 0 | 0 | 0 | 1 | 1 | 2 |

### Atlas künyesi — noktasiz-kunye

| kıta | MÖ | 1–999 | 1000–1280 | 1281–1923 | 1924+ | toplam |
|---|---|---|---|---|---|---|
| Avrupa | 13 | 10 | 10 | 23 | 3 | 59 |
| Asya | 34 | 37 | 20 | 11 | 1 | 103 |
| Afrika | 16 | 4 | 2 | 18 | 2 | 42 |
| K.Amerika | 0 | 6 | 0 | 6 | 0 | 12 |
| G.Amerika | 3 | 3 | 0 | 6 | 1 | 13 |
| Okyanusya | 0 | 0 | 2 | 1 | 0 | 3 |
| ? | 0 | 0 | 0 | 0 | 0 | 0 |

### Atlas künyesi — noktasiz-kunye(ad-adayi)

| kıta | MÖ | 1–999 | 1000–1280 | 1281–1923 | 1924+ | toplam |
|---|---|---|---|---|---|---|
| Avrupa | 5 | 15 | 6 | 15 | 0 | 41 |
| Asya | 41 | 44 | 12 | 9 | 1 | 107 |
| Afrika | 4 | 2 | 3 | 1 | 0 | 10 |
| K.Amerika | 4 | 5 | 0 | 1 | 0 | 10 |
| G.Amerika | 0 | 2 | 0 | 0 | 0 | 2 |
| Okyanusya | 0 | 0 | 1 | 0 | 1 | 2 |
| ? | 0 | 0 | 0 | 0 | 0 | 0 |

## En büyük 50 `atlasta-yok` (tekil polity; alan × süre)

| # | Cliopatria | yıl (ham) | astro | kıta · ülke | alan km² | süre | Wikidata | eşik altı ipucu |
|---|---|---|---|---|---|---|---|---|
| 1 | Protectorate of the Western Regions | 117…601 | 117…601 | Asya · Çin Halk Cumhuriyeti | 695193 | 403 | Q911440 |  |
| 2 | Scandinavian minor kingdoms | 500…1002 | 500…1002 | Avrupa · Norveç | 426216 | 503 | Q1275225;Q213649 | ad~min-krallik(0.75) |
| 3 | Vakataka Kingdom | 260…554 | 260…554 | Asya · Hindistan | 671270 | 295 | Q1501306 |  |
| 4 | Brythons | 439…1235 | 439…1235 | Avrupa · Birleşik Krallık | 207600 | 797 | Q849967 |  |
| 5 | Oghuz Turks | 750…1055 | 750…1055 | Asya · Özbekistan | 466506 | 306 | Q2118293 | ad~bizans(0.75) |
| 6 | Pyu City-States | 84…1045 | 84…1045 | Asya · Myanmar | 116187 | 962 | Q1627675 |  |
| 7 | Gothia | 207…382 | 207…382 | Avrupa · Moldova | 634926 | 176 | Q422253 |  |
| 8 | Turk Shahis | 561…874 | 561…874 | Asya · Afganistan | 339517 | 314 | Q654380 | ad~hindu-sahiler(0.80) |
| 9 | Lavo Kingdom | 638…1394 | 638…1394 | Asya · Tayland | 143092 | 676 | Q1332305 | ayutthaya(oy 2) | sukhothai(oy 1) | ad~lan-xang(0.75) |
| 10 | Anurādhapura | -291…1017 | -290…1017 | Asya · Sri Lanka | 73532 | 1308 | Q5724 |  |
| 11 | Minyue | -333…-111 | -332…-110 | Asya · Çin Halk Cumhuriyeti | 468197 | 179 | Q1936158 | ad~ma-in(0.73) |
| 12 | Maitraka Dynasty | 476…731 | 476…731 | Asya · Hindistan | 303531 | 256 | Q6737189 |  |
| 13 | Former Qin | 353…393 | 353…393 | Asya · Çin Halk Cumhuriyeti | 1798333 | 41 | Q1471995 |  |
| 14 | Minaeans | -383…-26 | -382…-25 | Asya · Suudi Arabistan | 214510 | 328 | Q1177379 |  |
| 15 | Lohara Dynasty | 1003…1259 | 1003…1259 | Asya · Afganistan | 226659 | 257 | Q1315339 |  |
| 16 | Wu | -750…-451 | -749…-450 | Asya · Çin Halk Cumhuriyeti | 193280 | 300 | Q274488 |  |
| 17 | Sabaeans | -800…282 | -799…282 | Asya · Yemen | 63948 | 880 | Q940785 |  |
| 18 | Jin | -750…-405 | -749…-404 | Asya · Çin Halk Cumhuriyeti | 152647 | 346 | Q6201794 | ad~qi-devleti(0.75) |
| 19 | Nobatia | 347…655 | 347…655 | Afrika · Sudan | 147534 | 309 | Q568523 | ad~bati-roma(0.73) |
| 20 | Saxons | 283…799 | 283…799 | Avrupa · Almanya | 82798 | 512 | Q101985 |  |
| 21 | Phrygia | -900…-676 | -899…-675 | Asya · Türkiye | 188102 | 225 | Q32579 |  |
| 22 | Ganzhou Kingdom | 860…1039 | 860…1039 | Asya · Çin Halk Cumhuriyeti | 233037 | 180 | Q1000124 |  |
| 23 | Kadamba Empire | 353…554 | 353…554 | Asya · Hindistan | 202263 | 202 | Q1479952 |  |
| 24 | Kalabhra Dynasty | 353…601 | 353…601 | Asya · Hindistan | 137945 | 249 | Q2572901 |  |
| 25 | Nabataeans | -164…105 | -163…105 | Asya · Ürdün | 126171 | 263 | Q220594 | ad~nabatiye(0.71) |
| 26 | Yue | -500…-334 | -499…-333 | Asya · Çin Halk Cumhuriyeti | 188597 | 167 | Q1936158 |  |
| 27 | Maukhari Dynasty | 555…611 | 555…611 | Asya · Hindistan | 533393 | 57 | Q12448145 | ad~nube(0.71) |
| 28 | Bavarians | 540…787 | 540…787 | Avrupa · Almanya | 122313 | 248 | Q13048507 |  |
| 29 | Mycenaean Greece | -1500…-1101 | -1499…-1100 | ? · (deniz/bulunamadı) | 71057 | 400 | Q181264 | ad~miken(0.73) |
| 30 | Former Yan | 337…370 | 337…370 | Asya · Çin Halk Cumhuriyeti | 772045 | 34 | Q1472004 |  |
| 31 | Norse | 161…499 | 161…499 | Avrupa · Norveç | 71171 | 339 | Q909583 |  |
| 32 | Kingdom of Cappadocia | -239…22 | -238…22 | Asya · Türkiye | 91738 | 251 | Q29654286 | ad~kapadokya-krallik(0.78) |
| 33 | Kannauj-Varman Dynasty | 732…771 | 732…771 | Asya · Hindistan | 573391 | 40 | Q614890 | ad~kamarupa(1.00) |
| 34 | Lu | -750…-248 | -749…-247 | Asya · Çin Halk Cumhuriyeti | 43571 | 503 | Q555994 |  |
| 35 | Mahan | -91…346 | -90…346 | Asya · Güney Kore | 49731 | 437 | Q421372 |  |
| 36 | Goths | 30…206 | 30…206 | Avrupa · İsveç | 117739 | 177 | Q42193 |  |
| 37 | Caucasian Iberia | -63…533 | -62…533 | Asya · Gürcistan | 35868 | 569 | Q19083 | ad~eftalit(0.73) |
| 38 | Burgundians | 154…409 | 154…409 | Avrupa · Polonya | 100279 | 196 | Q13590051 |  |
| 39 | Early Pandyas | -291…305 | -290…305 | Asya · Hindistan | 32556 | 596 | Q3532152 |  |
| 40 | Tarumanagara | 367…673 | 367…673 | Asya · Endonezya | 62499 | 307 | Q2247225 |  |
| 41 | Cheng Han | 306…346 | 306…346 | Asya · Çin Halk Cumhuriyeti | 451935 | 41 | Q1069905 |  |
| 42 | Greek Dark Ages | -1100…-801 | -1099…-800 | Avrupa · Yunanistan | 60722 | 300 | Q210443 |  |
| 43 | Lazica | -63…545 | -62…545 | Asya · Gürcistan | 28525 | 608 | Q136884 | ad~nazca(0.73) |
| 44 | Later Qin | 387…416 | 387…416 | Asya · Çin Halk Cumhuriyeti | 573288 | 30 | Q1730130 |  |
| 45 | Early Cholas | -291…305 | -290…305 | Asya · Hindistan | 28856 | 596 | Q3532146 |  |
| 46 | Former Liang | 324…377 | 324…377 | Asya · Çin Halk Cumhuriyeti | 305896 | 54 | Q943392 |  |
| 47 | Song | -750…-285 | -749…-284 | Asya · Çin Halk Cumhuriyeti | 34728 | 466 | Q7462 |  |
| 48 | Kingdom of Croatia | 926…1098 | 926…1098 | Avrupa · Bosna-Hersek | 92789 | 173 | Q858841 |  |
| 49 | County of Blôis | 990…1401 | 990…1401 | Avrupa · Fransa | 38821 | 412 | Q19336869 | ad~burgonya(0.73) |
| 50 | Yaudheya Republic | 306…377 | 306…377 | Asya · Hindistan | 220729 | 72 | Q8050331 |  |

## İkinci geçiş — `kunye-var-noktasiz`
Mekânsal eşleşmesi çıkmayan her polity için, zamanı (±25 yıl tolerans) örtüşen bütün künyelerle ad karşılaştırması: İngilizce kök (elle exonym sözlüğü + transliterasyon katlaması, -ian/-ic/-s ekleri) ↔ künye adı ve id kökleri; dönem/yön ekleri (Old/Middle/Neo/New ↔ eski/orta/yeni, Northern/Southern/Western/Eastern ↔ kuzey/güney/batı/doğu) ikisinde de varsa KESİŞMELİ; 'Kingdom/Empire/Dynasty of' atılır; ≤4 harfli kök (wei, xia, song) yalnız birebir; zayıf kök (Mısır, Türk, Arap…) tek başına yetmez; milliyet sıfatı (French/Dutch/Danish…) künyede de olmalı; genel kelimeler (Communists, Saint, Gold Coast, Republiek…) kök sayılmaz; kıtalar çelişmemeli (Avrupa↔Asya hariç). Ad burada mekânın ölçülemediği yerde KÜNYENİN VARLIĞINI gösterir; mekânsal eşleşme DEĞİLDİR.


Ek kurallar: İngilizce sıra sayısı (First…Thirty-first, 1st…31st) rakama çevrilir; adında 'Dynasty' geçen polity, aynı numarayı (aralık dahil: `misir-28-30-hanedan` → 28,29,30) taşıyan 'hanedan' künyesiyle kök tutmasa da eşleşir; kök tutup numara çelişirse eşleşmez. Kıta süzgeci künyenin kıta KÜMESİyle çalışır (başkent + sahip olduğu yerleşimler); künyenin noktası yoksa ya da künye birden çok kıtaya yayılıyorsa uygulanmaz. Tüm-ad exonym: yalnız adı tamamen 'Turks' olan polity → göktürk kökü ('Oghuz Turks' etkilenmez). **Zaman örtüşmesi 0 olup yalnız ±25 yıl toleransıyla tutan çift `kunye-var-noktasiz` SAYILMAZ, `aday`dır**; polity'nin bütün çiftleri böyleyse polity sınıfı `aday` olur.

| Cliopatria | astro | sınıf | künye (örtüşen) | yalnız tolerans (aday) |
|---|---|---|---|---|
| Tibetans | 850…1259 | kunye-var-noktasiz | guge (kunye-noktasiz; kok=tibet; ortusme 260 yil (tolerans ±25)) | sakya (kunye-noktali-mekan-tutmadi; kok=tibet; ortusme 0 yil (tolerans ±25)); tibet-imparatorlugu (kunye-noktali-mekan-tutmadi; kok=tibet; ortusme 0 yil (tolerans ±25)); tubo-tibet-imparatorlugu (kunye-noktali-mekan-tutmadi; kok=tibet; ortusme 0 yil (tolerans ±25)) |
| Scythia | -649…-223 | kunye-var-noktasiz | skit-krallik (kunye-noktasiz; kok=skit; ortusme 427 yil (tolerans ±25)) | - |
| Assyria | -1799…-900 | kunye-var-noktasiz | eski-asur (kunye-noktasiz; kok=asur; ortusme 50 yil (tolerans ±25)); orta-asur (kunye-noktasiz; kok=asur; ortusme 452 yil (tolerans ±25)); yeni-asur (kunye-noktasiz; kok=asur; ortusme 11 yil (tolerans ±25)) | - |
| New Kingdom of Egypt | -1499…-800 | kunye-var-noktasiz | misir-yeni-krallik (kunye-noktasiz; kok=misir niteleyici=yeni; ortusme 431 yil (tolerans ±25)) | - |
| Hunnic Empire | 426…673 | kunye-var-noktasiz | hun-avrupa (kunye-noktasiz; kok=hun; ortusme 29 yil (tolerans ±25)); eftalit (kunye-noktasiz; kok=hun; ortusme 103 yil (tolerans ±25)) | - |
| Huns | 106…425 | kunye-var-noktasiz | hun-avrupa (kunye-noktasiz; kok=hun; ortusme 56 yil (tolerans ±25)) | - |
| Elam | -3199…-600 | kunye-var-noktasiz | elam-simaski (kunye-noktali-mekan-tutmadi; kok=elam; ortusme 200 yil (tolerans ±25)); elam-sukkalmah (kunye-noktali-mekan-tutmadi; kok=elam; ortusme 400 yil (tolerans ±25)); elam-orta (kunye-noktali-mekan-tutmadi; kok=elam; ortusme 400 yil (tolerans ±25)); elam-yeni (kunye-noktali-mekan-tutmadi; kok=elam; ortusme 485 yil (tolerans ±25)); awan (kunye-noktasiz; kok=elam; ortusme 100 yil (tolerans ±25)) | - |
| Yuezhi | -403…42 | aday | - | kusan (kunye-noktali-mekan-tutmadi; kok=kusan; ortusme 0 yil (tolerans ±25)) |
| Southern Song | 1139…1278 | kunye-var-noktasiz | song (kunye-noktali-mekan-tutmadi; kok=song; ortusme 140 yil (tolerans ±25)) | - |
| Türgesh | 692…749 | kunye-var-noktasiz | turges (kunye-noktasiz; kok=turges; ortusme 33 yil (tolerans ±25)) | - |
| Carthage | -649…-144 | kunye-var-noktasiz | kartaca (kunye-noktasiz; kok=kartaca; ortusme 504 yil (tolerans ±25)) | - |
| Babylonia | -1799…-600 | kunye-var-noktasiz | babil-eski (kunye-noktali-mekan-tutmadi; kok=babil; ortusme 205 yil (tolerans ±25)); kassit-babil (kunye-noktali-mekan-tutmadi; kok=babil; ortusme 420 yil (tolerans ±25)); isin-2 (kunye-noktali-mekan-tutmadi; kok=babil; ortusme 75 yil (tolerans ±25)); yeni-babil (kunye-noktali-mekan-tutmadi; kok=babil; ortusme 15 yil (tolerans ±25)) | - |
| Middle Kingdom of Egypt | -1999…-1600 | kunye-var-noktasiz | misir-orta-krallik (kunye-noktasiz; kok=misir niteleyici=orta; ortusme 350 yil (tolerans ±25)) | - |
| Northern Wei | 387…533 | kunye-var-noktasiz | kuzey-wei (kunye-noktali-mekan-tutmadi; kok=vei niteleyici=kuzey; ortusme 147 yil (tolerans ±25)) | - |
| Sumerian City-States | -3399…-1760 | kunye-var-noktasiz | sumer-lagas-1 (kunye-noktasiz; kok=sumer; ortusme 150 yil (tolerans ±25)) | - |
| Western Xia | 990…1226 | kunye-var-noktasiz | bati-xia (kunye-noktasiz; kok=hia niteleyici=bati; ortusme 189 yil (tolerans ±25)) | - |
| Eastern Wu | 207…282 | kunye-var-noktasiz | sun-wu (kunye-noktasiz; kok=vu; ortusme 58 yil (tolerans ±25)) | - |
| Sind-Habbari Dynasty | 860…1201 | aday | - | kabace (kunye-noktasiz; kok=sind; ortusme 0 yil (tolerans ±25)) |
| Southern Qi | 480…509 | kunye-var-noktasiz | guney-qi (kunye-noktasiz; kok=ki niteleyici=guney; ortusme 22 yil (tolerans ±25)) | - |
| Qi | -749…-203 | kunye-var-noktasiz | qi-devleti (kunye-noktasiz; kok=ki; ortusme 529 yil (tolerans ±25)) | - |
| Turks | 666…756 | kunye-var-noktasiz | dogu-gokturk-2 (kunye-noktasiz; kok=gokturk; ortusme 36 yil (tolerans ±25)) | - |
| Twenty-sixth Dynasty of Egypt | -614…-500 | kunye-var-noktasiz | sait-26-hanedan (kunye-noktasiz; sira=26 (hanedan numarası); ortusme 90 yil (tolerans ±25)) | - |
| Early Dynastic Period of Egypt | -2999…-2500 | kunye-var-noktasiz | misir-erken-hanedan (kunye-noktasiz; kok=misir niteleyici=erken; ortusme 314 yil (tolerans ±25)) | - |
| Vandals | 337…438 | kunye-var-noktasiz | vandal (kunye-noktasiz; kok=vandal; ortusme 4 yil (tolerans ±25)) | - |
| Seljuk Dynasty | 990…1039 | aday | - | buyuk-selcuklu (kunye-noktali-mekan-tutmadi; kok=selcuk; ortusme 0 yil (tolerans ±25)); kirman-selcuklu (kunye-noktali-mekan-tutmadi; kok=selcuk; ortusme 0 yil (tolerans ±25)) |
| Thirtieth Dynasty of Egypt | -382…-337 | kunye-var-noktasiz | misir-28-30-hanedan (kunye-noktasiz; sira=30 (hanedan numarası); ortusme 40 yil (tolerans ±25)) | - |
| Magyars | 840…910 | kunye-var-noktasiz | macar-prensligi (kunye-noktasiz; kok=magiar; ortusme 16 yil (tolerans ±25)) | - |
| Principality of Hungary | 900…999 | kunye-var-noktasiz | macar-prensligi (kunye-noktasiz; kok=macar; ortusme 100 yil (tolerans ±25)) | - |
| Old Kingdom of Egypt | -2499…-2200 | kunye-var-noktasiz | misir-eski-krallik (kunye-noktasiz; kok=misir niteleyici=eski; ortusme 300 yil (tolerans ±25)) | - |
| Kingdom of Urartu | -799…-550 | kunye-var-noktasiz | urartu (kunye-noktali-mekan-tutmadi; kok=urartu; ortusme 125 yil (tolerans ±25)) | - |
| Southern Wu | 911…959 | kunye-var-noktasiz | yang-wu (kunye-noktasiz; kok=vu; ortusme 26 yil (tolerans ±25)) | - |
| Southern Han | 911…979 | kunye-var-noktasiz | guney-han-10krallik (kunye-noktasiz; kok=han niteleyici=guney; ortusme 54 yil (tolerans ±25)) | - |
| Lombards | 480…586 | kunye-var-noktasiz | langobard (kunye-noktasiz; kok=lombard; ortusme 19 yil (tolerans ±25)) | - |
| Later Shu | 936…969 | kunye-var-noktasiz | sonraki-shu (kunye-noktasiz; kok=shu; ortusme 29 yil (tolerans ±25)) | onceki-shu (kunye-noktasiz; kok=shu; ortusme 0 yil (tolerans ±25)) |
| Southern Chu | 911…959 | kunye-var-noktasiz | chu-ma (kunye-noktasiz; kok=chu; ortusme 24 yil (tolerans ±25)) | - |
| Northern Qi | 555…576 | kunye-var-noktasiz | kuzey-qi (kunye-noktasiz; kok=ki niteleyici=kuzey; ortusme 22 yil (tolerans ±25)) | - |
| Twenty-second Dynasty of Egypt | -799…-700 | kunye-var-noktasiz | misir-3-ara (kunye-noktasiz; sira=22 (hanedan numarası); ortusme 100 yil (tolerans ±25)) | - |
| Mataram Kingdom | 741…1009 | kunye-var-noktasiz | medang (kunye-noktali-mekan-tutmadi; kok=mataram; ortusme 269 yil (tolerans ±25)) | - |
| Kingdom of Aragon | 1015…1168 | kunye-var-noktasiz | aragon (kunye-noktali-mekan-tutmadi; kok=aragon; ortusme 129 yil (tolerans ±25)) | - |
| Eastern Wei | 534…554 | kunye-var-noktasiz | dogu-wei (kunye-noktasiz; kok=vei niteleyici=dogu; ortusme 16 yil (tolerans ±25)) | - |
| Ripuarian Franks | 238…509 | kunye-var-noktasiz | frank (kunye-noktali-mekan-tutmadi; kok=frank; ortusme 29 yil (tolerans ±25)) | - |
| Qarmatians | 899…1071 | kunye-var-noktasiz | karmati (kunye-noktali-mekan-tutmadi; kok=karmat; ortusme 173 yil (tolerans ±25)) | - |
| Former Shu | 911…925 | kunye-var-noktasiz | onceki-shu (kunye-noktasiz; kok=shu; ortusme 14 yil (tolerans ±25)) | sonraki-shu (kunye-noktasiz; kok=shu; ortusme 0 yil (tolerans ±25)) |
| Empire of Kanem | 1072…1384 | kunye-var-noktasiz | kanem-tubu (kunye-noktali-mekan-tutmadi; kok=kanem; ortusme 104 yil (tolerans ±25)); kanem-bornu (kunye-noktali-mekan-tutmadi; kok=kanem; ortusme 313 yil (tolerans ±25)) | - |
| Twenty-third Dynasty of Egypt | -799…-700 | kunye-var-noktasiz | misir-3-ara (kunye-noktasiz; sira=23 (hanedan numarası); ortusme 100 yil (tolerans ±25)) | - |
| Early Lý Dynasty | 546…601 | kunye-var-noktasiz | van-xuan (kunye-noktasiz; kok=li niteleyici=erken; ortusme 56 yil (tolerans ±25)) | - |
| First Sealand Dynasty | -1699…-1400 | kunye-var-noktasiz | sealand-1 (kunye-noktasiz; kok=sealand; ortusme 225 yil (tolerans ±25)) | - |
| Kingdom of East Anglia | 534…869 | aday | - | danelaw (kunye-noktasiz; kok=anglia niteleyici=dogu; ortusme 0 yil (tolerans ±25)) |
| Seventeenth Dynasty of Egypt | -1599…-1500 | kunye-var-noktasiz | tebai-17-hanedan (kunye-noktasiz; sira=17 (hanedan numarası); ortusme 50 yil (tolerans ±25)) | - |
| Fifteenth Dynasty of Egypt | -1599…-1500 | kunye-var-noktasiz | hiksos-15 (kunye-noktasiz; sira=15 (hanedan numarası); ortusme 50 yil (tolerans ±25)) | - |
| Western Chu | -207…-202 | aday | - | chu-devleti (kunye-noktasiz; kok=chu; ortusme 0 yil (tolerans ±25)) |
| Republic of Burundi | 1963…2024 | kunye-var-noktasiz | burundi-krallik (kunye-noktali-mekan-tutmadi; kok=burundi; ortusme 4 yil (tolerans ±25)); burundi-cumhuriyeti (kunye-noktali-mekan-tutmadi; kok=burundi; ortusme 58 yil (tolerans ±25)) | ruanda-urundi-mandasi (kunye-noktali-mekan-tutmadi; kok=burundi; ortusme 0 yil (tolerans ±25)) |
| Visigoths | 396…425 | kunye-var-noktasiz | vizigot (kunye-noktali-mekan-tutmadi; kok=visigot; ortusme 8 yil (tolerans ±25)) | - |
| Kingdom of Judah | -899…-700 | kunye-var-noktasiz | yahuda (kunye-noktali-mekan-tutmadi; kok=yahuda; ortusme 200 yil (tolerans ±25)) | - |
| Sultanate of Bone | 1512…1858 | kunye-var-noktasiz | bugis-kralliklari (kunye-noktali-mekan-tutmadi; kok=bone; ortusme 347 yil (tolerans ±25)) | - |
| Northern Han | 960…979 | kunye-var-noktasiz | kuzey-han-10krallik (kunye-noktasiz; kok=han niteleyici=kuzey; ortusme 19 yil (tolerans ±25)) | - |
| Janapada of Magadha | -599…-500 | kunye-var-noktasiz | magadha (kunye-noktasiz; kok=magada; ortusme 43 yil (tolerans ±25)) | - |
| Ahi Republic | 1305…1362 | kunye-var-noktasiz | ahiler (kunye-noktali-mekan-tutmadi; kok=ahi; ortusme 49 yil (tolerans ±25)) | - |
| Pontianak Kadriyah Sultanate | 1772…1827 | kunye-var-noktasiz | pontianak (kunye-noktali-mekan-tutmadi; kok=pontianak; ortusme 56 yil (tolerans ±25)) | - |
| Kedah-Perlis District | 1842…1910 | kunye-var-noktasiz | malay-sultanliklari (kunye-noktali-mekan-tutmadi; kok=kedah; ortusme 68 yil (tolerans ±25)); federe-olmayan-malay-devletleri (kunye-noktali-mekan-tutmadi; kok=kedah,perli; ortusme 2 yil (tolerans ±25)) | - |
| Duchy of Anhalt | 1806…1870 | kunye-var-noktasiz | anhalt-dukaligi (kunye-noktasiz; kok=anhalt; ortusme 8 yil (tolerans ±25)) | - |
| Antigua and Barbuda | 1967…2024 | kunye-var-noktasiz | antigua-barbuda (kunye-noktali-mekan-tutmadi; kok=antigua,barbuda; ortusme 43 yil (tolerans ±25)) | - |
| Free City of Bremen | 1806…1870 | kunye-var-noktasiz | bremen-sehri (kunye-noktali-mekan-tutmadi; kok=bremen; ortusme 58 yil (tolerans ±25)) | - |
| Saint Kitts | 1967…2024 | kunye-var-noktasiz | saint-kitts-nevis (kunye-noktali-mekan-tutmadi; kok=kit; ortusme 41 yil (tolerans ±25)) | - |
| Electorate of Salzburg | 1803…1805 | kunye-var-noktasiz | salzburg-prens-basepiskoposlugu (kunye-noktasiz; kok=salzburg; ortusme 0 yil (tolerans ±25)) | - |
| Negroponte | 1206…1209 | kunye-var-noktasiz | euboea-negroponte (kunye-noktasiz; kok=negroponte; ortusme 1 yil (tolerans ±25)) | - |
| Republic of Amalfi | 960…1033 | kunye-var-noktasiz | amalfi-cumhuriyeti (kunye-noktasiz; kok=amalfi; ortusme 34 yil (tolerans ±25)) | - |
| Republic of San Marino | 1797…1799 | kunye-var-noktasiz | san-marino (kunye-noktali-mekan-tutmadi; kok=marino; ortusme 3 yil (tolerans ±25)) | - |

## Kırılma ayrımı
- **Bire-çok** (bir Cliopatria polity'si ↔ ≥2 künye; atlas daha ince bölmüş ya da eyalet/tâbi künyeleri çatıya düşüyor): **204** polity.
- **Çoka-bir** (bir künye ↔ ≥2 Cliopatria polity'si; Cliopatria dönemlere bölmüş, ör. Roman Empire / Eastern Roman / Byzantine): **280** künye.

### Bire-çok (ilk 40, künye sayısına göre)
- **(Holy Roman Empire)** → almanya, aquileia-patrikligi, bohemya, hamburg-sehri, hanse-birligi, hessen-landgrafligi, karintiya-dukaligi, liege-piskoposlugu, lubeck-sehri, luksemburg-kontlugu, magdeburg-basepiskoposlugu, mecklenburg-dukaligi, pomeranya-dukaligi, teuton-devleti, teuton-sovalyeleri, trento-piskoposlugu, utrecht-piskoposlugu
- **Holy Roman Empire** → aquileia-patrikligi, bohemya, dauphine-viennois, flandre, franche-comte, hainaut-kontlugu, hollanda-kontlugu, karintiya-dukaligi, liege-piskoposlugu, lorraine-dukaligi, luksemburg-kontlugu, magdeburg-basepiskoposlugu, provence-kontlugu, san-marino, savoya, trento-piskoposlugu, utrecht-piskoposlugu
- **(British Empire)** → barbados-ingiliz, basutoland, cape-ingiliz, cebelitarik-ingiliz, falkland-ingiliz, fiji-kolonisi, gambiya-kolonisi, ingiliz-basutoland, ingiliz-gambiya, ingiliz-hindistani, ingiliz-mauritius, ingiliz-siyera-leon, ingiltere, jamaika-ingiliz, ruperts-land, somali-ingiliz-himayesi, trinidad-tobago-ingiliz
- **British Africa** → basutoland, dervis-devleti, gambiya-kolonisi, ingiliz-basutoland, ingiliz-gambiya, ingiliz-guney-rodezya, ingiliz-kenya-kolonisi, ingiliz-kuzey-rodezya, ingiliz-nyasaland, ingiliz-siyera-leon, ingiliz-sudani, ingiltere, rodezya-nyasaland-federasyonu, somali-ingiliz-himayesi
- **Holy Roman Empire Minor States** → almanya, hamburg-sehri, hanse-birligi, hessen-landgrafligi, liege-piskoposlugu, lubeck-sehri, magdeburg-basepiskoposlugu, mecklenburg-dukaligi, pomeranya-dukaligi, trento-piskoposlugu, utrecht-piskoposlugu
- **(Spanish Empire)** → brabant-dukaligi, ispanya, ispanyol-filipinler, ispanyol-florida, ispanyol-kuba, ispanyol-peru, ispanyol-santo-domingo, sardinya-aragon, sicilya-aragon, sili-kaptanligi, yeni-ispanya
- **Mongol Empire** → galicya-volhinya, kert, kutlughanli, mogol-imparatorlugu, rostov-knezligi, salgurlu, smolensk-knezligi, yaroslavl-knezligi, yezd-atabegligi
- **British Colonial Empire** → barbados-ingiliz, falkland-ingiliz, fiji-kolonisi, ingiliz-kuzey-amerika, ingiliz-mauritius, jamaika-ingiliz, kanada, ruperts-land, trinidad-tobago-ingiliz
- **(Kingdom of France)** → akitanya-dukaligi, avignon-venaissin, flandre, fransa, normandiya, provence-kontlugu, toulouse, yeni-fransa
- **Great Seljuk Empire** → abbasi, buyuk-selcuklu, harizmsah, irak-selcuklu, kirman-selcuklu, mezyedi, saltuklu, ukayli
- **Spanish Empire** → ispanyol-filipinler, ispanyol-florida, ispanyol-kuba, ispanyol-peru, ispanyol-santo-domingo, portekiz-malaka, sili-kaptanligi, yeni-ispanya
- **Hamdanid Emirates** → artuklu, dilmacogullari, hamdani-halep, hamdani-musul, revvadi, tiflis-emirligi, ukayli
- **Habsburg Monarchy** → avusturya-hollandasi, habsburg, habsburg-hollandasi, karniola-dukaligi, macaristan-habsburg, moravya-markgraflik, trento-piskoposlugu
- **Khanates of the Caucasus** → baku-hanligi, gence-hanligi, karabag-hanligi, kuba-hanligi, nahcivan-hanligi, seki-hanligi, sirvan-hanligi
- **(French Third Republic)** → cezayir-fransiz, fransa-cumhuriyet, fransiz-komorlari, fransiz-somali, fransiz-somalisi, madagaskar-fransiz, nguyen-hanedani
- **Kingdom of Italy** → antalya-italyan, arnavutluk-italyan-koruma, italya, italyan-karadag, oniki-ada-italyan, salo-cumhuriyeti
- **(Portuguese Empire)** → portekiz, portekiz-angola, portekiz-brezilyasi, portekiz-hindistani-goa, portekiz-malaka, portekiz-timor
- **French Africa** → cezayir-fransiz, fransa-cumhuriyet, fransiz-komorlari, fransiz-somali, fransiz-somalisi, madagaskar-fransiz
- **Samanid Empire** → buveyhi, karahanli, saffari, samani, ziyari
- **Zengid dynasty** → artuklu, begteginli, dilmacogullari, inalogullari, zengi-musul
- **Crown of Aragon** → aragon, rodos-sovalyeleri, sardinya-aragon, sicilya-aragon, valensiya-kralligi
- **(Habsburg Monarchy)** → habsburg, habsburg-hollandasi, karniola-dukaligi, macaristan-habsburg, moravya-markgraflik
- **(Dutch Republic)** → bima-sultanligi, cape-hollanda, hollanda, hollanda-dogu-hint, hollanda-malaka
- **(Netherlands)** → bima-sultanligi, hollanda, hollanda-dogu-hint, luksemburg-hollanda-birligi, mangkunegaran
- **Italian Africa** → italya, italyan-dogu-afrikasi, italyan-eritre, italyan-libya, italyan-somali
- **Federal Republic of Somalia** → puntland, somali-cumhuriyeti, somali-ulusal-gecis-hukumeti, somaliland-1960, somaliland-cumhuriyeti
- **(Carolingian Empire)** → bati-francia, dogu-francia, orta-francia-lotharingia, toulouse
- **Kievan Rus'** → cernigov-knezligi, kiev-rusu, polotsk-knezligi, smolensk-knezligi
- **Fatimid Caliphate** → fatimi, medine-emirligi, trablus-benihazrun, ziriler
- **(Taifas of Iberia)** → aragon, granada-ziriler, sevilla-abbadiler, toledo-zunnunler
- **Kara-Khitans** → bati-karahanli, dogu-karahanli, harizmsah, karahitay
- **Ayyubid Sultanate** → eyyubi-halep, eyyubi-hama, eyyubi-yemen, kudus-kralligi
- **Nicaean Empire** → bizans, iznik-imparatorlugu, selcuklu, sirbistan-nemanjic
- **Ottoman Empire** → cizre-botan, lubnan-emirligi, osmanli, rodos-sovalyeleri
- **Portuguese Empire** → portekiz-angola, portekiz-brezilyasi, portekiz-malaka, portekiz-seylani
- **Tsardom of Russia** → kalmuk-hanligi, kasim, kazak-hetmanligi, rusya
- **Dutch Republic** → bima-sultanligi, hollanda, hollanda-dogu-hint, hollanda-malaka
- **Thanjavur Maratha Kingdom** → danimarka-hindistani, maratha, nayak-devletleri, tancur-maratha
- **Empire of Japan** → japon-kore, japon-tayvani, meiji-japonya, vietnam-imparatorlugu-1945
- **Russian Republic** → alas-ozerkligi, rusya-gecici-hukumet, sovyet-rusya, turkistan-ossc

### Çoka-bir (ilk 40, polity sayısına göre)
- **fransa-cumhuriyet** → (Bourbon Kingdom of France), (First French Empire), (French Consulate), (French Directory), (French First Republic), (French Fourth Republic), (French Second Republic), (French Third Republic), (Second French Empire), (Vichy France), Bourbon Kingdom of France, First French Empire, French Africa, French Consulate, French Directory, French Fifth Republic, French First Republic, French Second Republic, French Third Republic, Second French Empire
- **ingiltere** → (British Empire), (Commonwealth of Nations), (Kingdom of England), British Africa, Commonwealth of England, Kingdom of England, Kingdom of Great Britain
- **malay-sultanliklari** → Malaya, Pahang Sultanate, Patani Kingdom, Sultanate of Kedah, Sultanate of Perak, Sultanate of Selangor, Sultanate of Terengganu
- **afganistan** → Afghanistan, Durrani Dynasty, Emirate of Afghanistan, Kingdom of Afghanistan, Mujahideen, Republic of Afghanistan, Taliban
- **ispanya** → (Spanish Empire), First Spanish Republic, Francoist Spain, Iberian Union, Kingdom of Spain, Second Spanish Republic
- **hollanda** → (Dutch Republic), (Netherlands), Batavian Republic, Dutch Republic, Netherlands, Sovereign Principality of the United Netherlands
- **almanya** → (Holy Roman Empire), German Empire, Holy Roman Empire Minor States, North German Confederation, Weimar Republic
- **moravya-markgraflik** → (Habsburg Monarchy), (Kingdom of Bohemia), Habsburg Monarchy, Kingdom of Bohemia, Margraviate of Moravia
- **delhi-sultanligi** → (Delhi Sultanate), Khalji Dynasty, Lodi Dynasty, Mamluk Dynasty, Tughlaq Dynasty
- **mogulistan** → Chagatai Khanate, East Turkestan, Eastern Chagatai Khanate, Moghulistan, Western Moghulistan
- **macaristan-habsburg** → (Habsburg Monarchy), Austria-Hungary, Austrian Empire, Habsburg Monarchy, Hungarian Nationalists
- **hollanda-dogu-hint** → (Batavian Republic), (Dutch Republic), (Netherlands), Dutch East Indies, Dutch Republic
- **ingiliz-hindistani** → (British Empire), British Empire, British Raj, Danish India, French India
- **baden** → Electorate of Baden, Electorate of Württemberg, Grand Duchy of Baden, Kingdom of Württemberg, Republic of Baden
- **meksika** → Centralist Mexico, Federated Republic of Mexico, First Mexican Empire, Mexico, Second Mexican Empire
- **toulouse** → (Carolingian Empire), (Kingdom of France), County of Toulouse, West Franks
- **normandiya** → (Kingdom of England), (Kingdom of France), Duchy of Normandy, Norman England
- **trento-piskoposlugu** → (Holy Roman Empire), Habsburg Monarchy, Holy Roman Empire, Holy Roman Empire Minor States
- **bohemya** → (Holy Roman Empire), (Kingdom of Bohemia), Holy Roman Empire, Kingdom of Bohemia
- **danimarka** → (Kingdom of Denmark), Denmark, Denmark-Norway, Kingdom of Denmark
- **isvec-birlik-oncesi** → (Kalmar Union), House of Oldenburg, Kalmar Union, Kingdom of Sweden
- **harizmsah** → Great Seljuk Empire, Kara-Khitans, Khwarezmid Dynasty, Khwarezmid Empire
- **portekiz-angola** → (Portuguese Empire), Estado Novo, Kingdom of Portugal, Portuguese Empire
- **portekiz** → (Portuguese Empire), Kingdom of Portugal, Portugal, Portuguese Republic
- **habsburg** → (Habsburg Monarchy), Austria-Hungary, Habsburg Monarchy, House of Habsburg
- **napoli** → House of Anjou-Sicily, Kingdom of Naples, Kingdom of Naples (Napoleonic), Kingdom of the Two Sicilies
- **portekiz-hindistani-goa** → (Portuguese Empire), Bijapur Sultanate, Maratha Empire, Portuguese Colonies
- **bima-sultanligi** → (Dutch Republic), (Netherlands), Dutch East Indies, Dutch Republic
- **umman** → Qatar Protectorate, Sultanate of Muscat and Oman, Sultanate of Oman, Yarubid dynasty
- **prusya** → Confederation of the Rhine, German Confederation, Kingdom of Prussia, North German Confederation
- **mangkunegaran** → (Netherlands), Dutch East Indies, Republic of Indonesia, Surakarta Sunanate
- **kolombiya-cumhuriyeti** → Granadine Confederation, Republic of Colombia, Republic of New Granada, United States of Colombia
- **brezilya-cumhuriyeti** → Brazilian Republic, Federated Republic of Brazil, Republic of Brazil, Unitary State of Brazil
- **cin-cumhuriyeti** → Empire of China, Kuomintang, People's Republic of China, Republic of China
- **fenike-sehirleri** → (Phoenician Empire), Achaemenid Empire, Phoenicia
- **silla** → Jinhan, Silla, Unified Silla
- **frank** → (Kingdom of the Franks), (Merovingian Empire), Kingdom of the Franks
- **tiflis-emirligi** → Abbasid Caliphate, Georgia, Hamdanid Emirates
- **pandya-1** → Chola Empire, Pandya Dynasty, Pandya Empire
- **dogu-francia** → (Carolingian Empire), East Franks, Kingdom of Germany

## İki yönlü sınav

- POZ · Ottoman Empire ↔ osmanli · GEÇTİ eslesen (mekan-iki-yon)
- POZ · Byzantine Empire ↔ bizans · GEÇTİ eslesen (mekan-iki-yon)
- POZ · Safavid Dynasty ↔ safevi · GEÇTİ eslesen (mekan-iki-yon)
- POZ · Mamluk Sultanate ↔ memluk · GEÇTİ eslesen (mekan-iki-yon)
- POZ · Akkadian Empire ↔ akad · ÖLÇÜLEMEDİ: künye noktasız (başkent çözülemedi, yerleşim dönemi yok) — sınıf=aday noktasiz-kunye: yalniz ad+zaman
- POZ · (Cliopatria'da Ur III yok) ↔ ur-3 · Sumerian City-States ile: None None — Cliopatria Ur III'ü ayrı polity olarak TAŞIMIYOR (bilgi, sınav maddesi değil)
- AD2 · Assyria ↔ eski-asur/orta-asur/yeni-asur · GEÇTİ kunye-var-noktasiz → örtüşen: eski-asur,orta-asur,yeni-asur · yalnız-tolerans(aday): -
- AD2 · Elam ↔ elam-simaski/elam-sukkalmah/elam-orta/elam-yeni/awan · GEÇTİ kunye-var-noktasiz → örtüşen: awan,elam-orta,elam-simaski,elam-sukkalmah,elam-yeni · yalnız-tolerans(aday): -
- AD2 · Southern Song ↔ song · GEÇTİ kunye-var-noktasiz → örtüşen: song · yalnız-tolerans(aday): -
- AD2 · Northern Wei ↔ kuzey-wei · GEÇTİ kunye-var-noktasiz → örtüşen: kuzey-wei · yalnız-tolerans(aday): -
- AD2 · Western Xia ↔ bati-xia · GEÇTİ kunye-var-noktasiz → örtüşen: bati-xia · yalnız-tolerans(aday): -
- AD2 · Hunnic Empire ↔ hun-avrupa · GEÇTİ kunye-var-noktasiz → örtüşen: eftalit,hun-avrupa · yalnız-tolerans(aday): -
- AD2 · Huns ↔ hun-avrupa · GEÇTİ kunye-var-noktasiz → örtüşen: hun-avrupa · yalnız-tolerans(aday): -
- AD2 · Tibetans ↔ tibet-imparatorlugu · GEÇTİ kunye-var-noktasiz → örtüşen: guge · yalnız-tolerans(aday): sakya,tibet-imparatorlugu,tubo-tibet-imparatorlugu
- AD2 · Scythia ↔ skit-krallik · GEÇTİ kunye-var-noktasiz → örtüşen: skit-krallik · yalnız-tolerans(aday): -
- AD2 · Yuezhi ↔ kusan · GEÇTİ aday → örtüşen: - · yalnız-tolerans(aday): kusan
- AD2 · Türgesh ↔ turges · GEÇTİ kunye-var-noktasiz → örtüşen: turges · yalnız-tolerans(aday): -
- AD2 · Carthage ↔ kartaca · GEÇTİ kunye-var-noktasiz → örtüşen: kartaca · yalnız-tolerans(aday): -
- AD2 · Twenty-sixth Dynasty of Egypt ↔ sait-26-hanedan · GEÇTİ kunye-var-noktasiz → örtüşen: sait-26-hanedan · yalnız-tolerans(aday): -
- AD2 · Vandals ↔ vandal · GEÇTİ kunye-var-noktasiz → örtüşen: vandal · yalnız-tolerans(aday): -
- AD2 · Turks ↔ dogu-gokturk-2 · GEÇTİ kunye-var-noktasiz → örtüşen: dogu-gokturk-2 · yalnız-tolerans(aday): -
- NEG2 · Phrygia ↔ - · GEÇTİ atlasta-yok
- NEG2 · Vakataka Kingdom ↔ - · GEÇTİ atlasta-yok
- NEG2 · Anurādhapura ↔ - · GEÇTİ atlasta-yok
- NEG · Phrygia ↔ - · GEÇTİ atlasta-yok
- NEG · Byzantine Empire ↔ safevi · GEÇTİ eşleşmedi (None)
- NEG · Ottoman Empire ↔ akad · GEÇTİ eşleşmedi (None)
- NEG · Akkadian Empire ↔ bizans · GEÇTİ eşleşmedi (None)

## Kapsam uyarıları
- Cliopatria **kalıcı toprak tutan siyasi yapıları** çizer; poligonsuz (göçebe konfederasyon çekirdeği belirsiz olanlar kısmen var), çok küçük şehir devletleri, kontluklar, Haçlı senyörlükleri, beylik altı birimler, isyan/geçici hükümetler, sömürge alt birimleri büyük ölçüde yoktur ya da bileşik çatı altına toplanmıştır (`MemberOf`). Bu yüzden `atlasa-ozgu` YANLIŞ demek değildir.
- Cliopatria satırları yıl hassasiyetindedir (çoğu kaba adım: 10–100 yıl). Gün hassasiyetli atlas künyesiyle yalnız örtüşme oranı karşılaştırılır.
- Cliopatria'da adlar İngilizce/Wikipedia biçimi; Ur III, Lagaş, Isin, Larsa gibi şehir hanedanları **Sumerian City-States** çatısında tek polity'dir.
- Atlas tarafında: MÖ ve 330 öncesi yerleşim sahipliği hiç yazılmamış (en erken sahiplik 330) ⇒ o dönemde eşleşme YALNIZ başkent noktasına dayanır; başkent çözülemeyen künye noktasızdır.
- Polity poligonları çoğunlukla kaba; ±5 km tampon kıyı şehirlerini kurtarır ama komşu polity'nin sınır şehrini de içeri alabilir (zayıf oy eşiği bunun için ≥ 3).

## Ölçülemeyenler
- `noktasiz-kunye`: **404** künye — hiç `s:` dönemi yok ve başkenti çözülemedi. Mekânsal ölçülemedi; `atlasa_ozgu.tsv`de ayrı sınıfla listelenir. Örnek: arnavutluk-iskenderbey, evfat, sidamo-kralliklari, vollayta-kralligi, guarani-misyonlari, arua, poni, harezm-halk-cumhuriyeti, arma, topia, norse-gronland, orta-macar-kralligi, arvanid-sancagi, mekke-serifligi, konstantin-beyligi.
- MÖ künyeleri: 159; bunların **120**'i noktasız (yerleşim dönemi MÖ'ye inmiyor, başkent yerleşim indeksinde yok/çözülmedi). Çözülemeyen MÖ başkent metinleri (halka ③ ile aynı kopukluk): Agade (konum bilinmiyor); Aigai / Pella; Aigion; Amaseia -> Sinope; Ankyra / Tavium / Pessinus; Antigoneia; Anyi → Daliang; Armavir -> Yervandaşat; Artaksata; Assur; Assur, Kalhu (Nimrud), Ninova; Avaris; Awan (yeri bilinmiyor); Baktra / Ay Hanum; Cahuachi; Caral; Charax Spasinou; Chavin de Huantar; Cirta; Danyang → Ying (Jingzhou/Hubei) → Shouchun; Dimask; Dodona -> Ambrakia; Ebla; Ebla (Tell Mardikh); Ekbatana (Hegmatana); Esnunna (Tell Asmar); Garama (Germa); Gazaka (Ganzak); Girsu/Lagaş; Handan; Haojing; Hattusa; Hattuşa; Herakleopolis (Ehnasya); Isin; Itj-tawy / Tebai; Izirtu (Zirta); Jolbon → Gungnae → Pyeongyang; Kala'at al-Bahrain; Karkamis; Karna; Kartaca; Knossos; Korint; Kummanni / Adaniya; Kyrene; Lagas (Girsu); Larsa; Longcheng / Ötüken; Luoyi; Lysimacheia; Marib; Massalia; Mazaka; Memfis; Miken / Pylos / Tiryns / Teb; Monte Alban; Monte Albán; Mylasa, sonra Halikarnassos; Napata / Memfis; Napata → Meroe; Nikomedia; Nisa → Ktesiphon; None; Pantikapaion; Pataliputra; Pataliputra → Vidisha; Patara; Pella; Petra; Pratishthana (Paithan) / Amaravati; Rajagriha → Pataliputra; Sabva; Sais; Sais / Mendes / Sebennytos; Samosata; San Lorenzo → La Venta; Sardes; Sarmizegetusa; Sekem → Tirsa → Samiriye; Seuthopolis / Kabyle; Sparta; Subat-Enlil; Taksila → Sagala (Sialkot); Tanis / Bubastis; Tarquinia / Fanum Voltumnae (birlik toplantı yeri); Tebai; Tebai (Teb); Tebai / Pi-Ramesses; Teotihuacan; Thermon; Thinis → Memfis; Tigranokerta; Timna; Ugarit (Ras Şamra); Umma; Ur; Uruk.
- Künye `f` okunamayan: 0.

## Dosyalar
- `cliopatria_polity.tsv` — türetilmiş polity listesi (ad başına özet + sınıf)
- `eslesme.tsv` · `aday.tsv` — çift metrikleri; `neden` sütunu
- `atlasta_yok.tsv` — EKSİK DEVLET ADAYLARI (alan × süre sıralı; bileşikler `bilesik=1`)
- `atlasa_ozgu.tsv` — künye tarafı: atlasa-özgü + noktasız

> Kaynak: Cliopatria v0.2.1, Seshat Global History Databank (Bennett ve diğ., Scientific Data 2025, doi:10.1038/s41597-025-04516-9), CC-BY 4.0; değiştirildi: özetlendi.
