# PLAN — "Dünya garipliği tarama" organizasyonu (24 Kasım 2026)

Yazan: EMRELİC 21 KASIM'ın istediği yan oturum (Sonnet 5.5). **Bu belge bir plandır; tarama koşturulmadı.**
Yapılan tek ölçüm: nokta (yerleşim) yoğunluğu — `girdi.yukle()` ile 5.650 kaydın okunması, küçük (birkaç saniyelik).
Motor dosyalarına (`uret_petek.py`, `renkler.py`, `girdi.py`, `motor_onbellek.py`) dokunulmadı. Ölçüm ağacı: bu worktree
(`origin/main` tabanı, 24 Kasım). Üretilmiş harita dosyaları (`donemler.js`, `devletler_harita.js`) bu ağaçta YOK → harita
şekli (poligon) ölçülmedi; yalnız yerleşim noktaları ölçüldü.

## 0. Önce: bu iş SIFIRDAN değil — var olanlar

Aynı soruya daha önce bakılmış. Plan bunların üstüne kurulur, tekrar etmez:

| Var olan | Ne veriyor | Plan'da kullanımı |
|---|---|---|
| `denetim/ENKLAV-TARAMA-1013.md/.json` | 17 günde 1.774 tekil kopuk bileşen; sayı eşiğe çok duyarlı (150 km: 14.161 · 250 km: 5.452 · 400 km: 1.622 gün-aday); çoğu "noktasızlık" | eşik duyarlılığının kanıtı; 3. tür (kopuk parça) için başlangıç yöntemi |
| `arac/_dunya_bosluk.py` | Motorun 200 km tavanına göre "hiçbir peteğe girmeyen kara hücresi" ızgarası (`ne_10m_land` maskesi) | 2. ve 5. tür (boşluk) ölçümünün temeli |
| `arac/_enklav_kara.py` | `donemler.js`'ten poligonları çözüp karasal enklav ölçer | 1. tür (eksklav/enklav) ölçümünün temeli |
| `denetim/ENVANTER-BOSLUK-1119/` | 2.547 satır boşluk envanteri (sahipsiz yerleşim 207, `bos:` alanı 375, `__BOSLUK__` dönemi 1.328, …) | **bilinen boşlukları ELE** (yeniden bulma) |
| `denetim/BULGU-BOSLUK-CINSI.md` | `bos:` alanı (devletsiz / veri-yok / kabile / insansiz / hata) zaten var ve makine okuyor | "teyitli" işaretin cins sözlüğü buradan |
| `denetim/BOSLUK-DOGRULAMA-1123/RAPOR.md` | Roma MÖ 26 pilot raporu: bölge × tür × (a,b,c,d) sorgu tablosu | **teyit tablosu biçimi** (§D) |
| `denetim/KOSU41-ISTEK-BOSLUK-KURALI-1123.md` | "Çevrili boşluk + bitişik kıyı" kuralı Koşu 41'e istendi | **sıralamayı belirler** (aşağıda §E-3) |
| VERI-YAPISI §220 `enklav:true` / `eksklav:true` | `s:` dönemlerinde gerçek enklav/eksklav bayrağı | "gerçek enklav" ile "boşluk"u ayırmanın makine yolu |
| `denetle.py` Değişmez 1 / 7 (D7) / 8 | sahipsizlik, 150 km ada sorgusu, şehir bölgesi ülke sınırı | tarama bunların bulamadığını arar; onların yerine geçmez |
| `js/gelistirici.js` + `data/rotus.js` (`yalniz-gelistirici` katmanı) | geliştirici kipine özel katman + veri dosyası örneği | §F'nin taslağı bunun kopyasıdır |

**Asıl çıkarım:** Koşu 41'e istenen kural (çevrili boşluk ve kıyı şeridi devletin sayılsın) onaylandı
(`KOSU41-KURAL-ONAYI-1123.md`). 4. tür (devlet içi boşluk) ve 2. türün büyük kısmı o kuralla **kendiliğinden kapanacak**.
Koşu 41 öncesi toplu tarama yapmak, kuralın zaten çözeceği yüzlerce bulguyu boşuna araştırmak demektir. Bu yüzden:
**araç + pilot şimdi; toplu tarama Koşu 41 çıktısı yayınlandıktan sonra** (bkz. §E-3, §H).

---

## A. BÖLGE BÖLME — KARAR

### A.1 Ölçülen yük (yerleşim noktası, kaba kutular)

| Bölge | Nokta sayısı | Not |
|---|---|---|
| R1 Avrupa (Urallara kadar) | 2.129 | en ağır |
| R2 Orta Doğu + Kuzey Afrika | 1.732 | ikinci ağır |
| R7 Sahra-altı Afrika | 675 | |
| R8 Kuzey Amerika | 571 | |
| R10 Güney Amerika | 411 | |
| R5 Doğu Asya | 394 | |
| R6 GD Asya + adalar | 333 | |
| R3 Orta Asya + Step | 300 | |
| R4 Güney Asya | 272 | |
| R9 Meksika + Karayipler | 272 | |
| R11 Okyanusya | 252 | |
| **Toplam bölge-nokta** | **7.341** (5.650 yerleşim) | çakışma payı = 1.691 (≈ %30), **55 nokta hiçbir kutuda yok** (uzak adalar) |

Kronoloji toplamı 18.821 madde (envanter 1119); **bölgeye göre kronoloji maddesi dağılımı ölçülmedi.**

### A.2 Karar

1. **Avrasya tek parça DEĞİL.** Tek oturum 2.129 + 1.732 + 300 + 272 + 394 noktalık, 330'a yakın devletli bir kuşağı bağlama
   sığdıramaz; ayrıca Emre'nin gözlemleri bölge bölge geliyor. Ama **Avrupa Urallara kadar tek bütün** (Emre'nin önerisi uygun):
   Avrupa'yı Batı/Doğu diye ikiye bölmek Rusya–Polonya–Balkan kuşağını (en çok devlet değişen yer) tam ortadan keserdi.
2. **Bölgeler ÇAKIŞIR** (kutular aşağıda; kasıtlı ≈ %30 çakışma). Çakışma kuşakları: Urallar/Volga, Kafkasya–Anadolu, Balkanlar,
   Akdeniz iki yakası, İran–Afganistan, Hazar, Hindistan–Çin sınırı, Sahel.
3. **Çakışmada sorumluluk:** her bulgunun bir **sorumlu bölgesi** vardır = bulguya dahil devletin **başkenti/merkezinin** (yoksa
   bulgunun ağırlık merkezinin) düştüğü bölge. Öteki bölge o bulguyu **görürse yalnız bildirir** (tsv'ye `gorunen_bolge` sütunu),
   araştırmaz ve düzeltmez. Çoklu başkent (devlet birden çok merkezli) → bulgunun merkezi; hâlâ eşitse sayı olarak büyük bölge.
4. **Büyük adalar kıtanın bölgesine bağlı kalır** (Britanya, İrlanda, İzlanda, Akdeniz adaları, Japonya, Sri Lanka, Madagaskar,
   Grönland, Karayipler…). Sebep: 2. tür "deniz–kara boşluğu" ölçüsü kıyıya göre işler; adayı kıtadan koparmak bu ölçüyü bozar.
   **Uzak okyanus adaları** (Pasifik, Hint, Atlantik açığı: 55 nokta) **R11 "Okyanusya + uzak adalar"** altında toplanır.
   *Emre "kıta-adalar ayrı" demişti → karar bekliyor (K2): önerim ayrı değil, kıyı bağlı.*
5. **Afrika'yı Sahra'yla ikiye böl — evet.** Kuzey Afrika R2'de (Orta Doğu komşusu, Mısır–Magrib), Sahra-altı R7'de; Sahel
   kuşağı (enlem 12–20) iki bölgede çakışır.

### A.3 Bölge şeması (kaba kutular; enlem K–G, boylam B–D)

| Kod | Bölge | Kutu (enlem; boylam) | Çakıştığı komşular |
|---|---|---|---|
| R1 | Avrupa (Urallara kadar) | 35–72 ; −25–62 | R2 (Balkan, Anadolu, Magrib), R3 (Ural/Volga) |
| R2 | Orta Doğu + Kuzey Afrika (Magrib, Mısır, Anadolu, Kafkasya, İran, Arabistan) | 12–43 ; −18–65 | R1, R3 (Hazar), R4 (İran–Afganistan), R7 (Sahel) |
| R3 | Orta Asya + Step (Türkistan, Kazakistan, Batı Sibirya, Moğol batısı) | 36–60 ; 45–100 | R1, R2, R4, R5 |
| R4 | Güney Asya (Afganistan–Bangladeş–Sri Lanka) | 5–38 ; 60–95 | R2, R3, R5, R6 |
| R5 | Doğu Asya (Çin, Moğolistan, Kore, Japonya, Doğu Sibirya) | 18–70 ; 95–180 | R3, R4, R6 |
| R6 | GD Asya + adalar (Hint-Çin, Malay, Endonezya, Filipinler, Yeni Gine) | −11–25 ; 92–150 | R4, R5, R11 |
| R7 | Sahra-altı Afrika | −35–15 ; −20–52 | R2 (Sahel/Habeşistan) |
| R8 | Kuzey Amerika (Kanada, ABD, Grönland) | 15–85 ; −170–−50 | R9 |
| R9 | Meksika + Orta Amerika + Karayipler | 5–33 ; −120–−58 | R8, R10 |
| R10 | Güney Amerika | −56–13 ; −82–−34 | R9 |
| R11 | Okyanusya + uzak adalar (Avustralya, Yeni Zelanda, Pasifik) | −50–0 ; 110–180 (+ 55 serseri nokta) | R6 |

(Kutular **ilk yaklaşım**: kıyıdaki sınır noktaları ve Sibirya/Arktik için ince ayar pilotta yapılır. Kutu dışına düşen
bulgu `bolge=?` ile tsv'ye yazılır, koordinatör atar.)

### A.4 Oturum birimi = bölge × çağ dilimi

R1 ve R2 tek oturuma bile ağır gelir → **çağ dilimi**: Antik (< MS 500) · Erken Ortaçağ (500–1000) · Ortaçağ (1000–1500) ·
Erken Yeni (1500–1800) · Yakın (1800–1945) · Modern (1945→). Noktalı sahipli yerleşim sayısı ölçüldü (§C.1): MÖ 500'de 58,
MS 0'da 389, 1000'de 589, 1281'de 2.789, 1900'de 4.672 → **ağırlık yakın çağlarda**; antik ve erken dilimler birleştirilebilir.
Bir oturum = **1 bölge × 1–2 dilim** (≈ ağır olmayan bir oturum işi).

### A.5 Tekilleştirme (aynı bulgu iki bölgede çıkmasın)

Bulgu kimliği (hash) şu alanlardan üretilir (`sha1`, ilk 12 hane):
`tür | 0,5° hücre merkezi (lat,lon yuvarlak) | devlet kimlikleri (sıralı) | geometri dönemi başlangıç günü`.
- Aynı yapı yüzlerce günde görünür → bulgu **gün değil, "kalıcılık aralığı"**dır: `ilk_gun`, `son_gun` (geometri dönemi
  sınırlarına göre, tek tek kronoloji maddesine göre değil — madde başına satır üretilirse tek boşluk 40 satır olur).
- İki bölge aynı hash'i bulursa **tek satır** (sorumlu bölge dosyasında), öteki bölgenin dosyasında yalnız `gorunen_bolge`.
- Bulgu `denetim/GARIPLIK-TEYITLI-INDEKS.tsv`'deki (§F) bir kayıtla eşleşirse **atlanır** (yeniden araştırılmaz).

---

## B. TARAMA YÖNTEMİ

### B.1 Ne taranır

Emre'nin istediği: "her maddenin gününde 5 garipliğe bak". **Öneri:** maddeleri tek tek oynatmak yerine **geometri değişim
günlerini** tara — haritada bir şey ancak o gün değişirse (`d:`/`v:`/`s:` kırılması) yeni garipliğin doğma ihtimali vardır.
Değişmez 2 zaten her kırılmanın ±30 gününde kronoloji maddesi şart koşuyor; yani **her geometri değişim gününe ≥ 1 madde
bağlı**. Bu nedenle: gün listesi = bölgenin yerleşimlerinin dönem kırılma günleri (birleşik, tekilleştirilmiş) + her çağ
dilimi için 1 "kontrol günü" (kırılma olmasa da). Tarama kronoloji maddesini **gün kaynağı olarak** kullanır
(Emre'nin amacı: madde okunduğunda haritada o değişim görünsün) ama maddeyi tekrar tekrar oynatmaz.
Kırılma günü sayısı ve bölge başına yük **ölçülmedi** (dönem dosyaları çözülmedi) → pilotta ölçülür.

### B.2 5 tür ve nasıl bulunur

| # | Tür | Tanım (ölçülebilir) | Yöntem |
|---|---|---|---|
| 1 | Kopuk enklav/eksklav | Aynı devletin, ana gövdeye değmeyen ve **arası boşluk/başka devlet** olan parçası | gün kesitinde devlet poligonlarının bağlantılı bileşenleri; küçük bileşen + gövdeye en yakın mesafe + aradaki alanın sahibi (ENKLAV-TARAMA-1013 yöntemi, poligonla) |
| 2 | Deniz–kara boşluğu | Kıyıya bitişik, hiçbir devletin boyamadığı kara/kıyı şeridi (ya da kıyıyla devlet poligonu arası) | kıyı çizgisi (`ne_10m_land`) − (boyalı alan ∪ deniz tamponu); en uzun kıyı-dik mesafe km |
| 3 | Girinti/koridor | Devlet gövdesinin içine sokulan dar ve uzun boşluk ya da başka devlet şeridi | morfolojik açma: gövdeyi önce kapat (tampon +r, −r), farkın alanı ve en/boy oranı |
| 4 | Devlet içi boşluk | Tek devletin tamamen çevirdiği sahipsiz delik | poligon delikleri (iç halka), alanı km² |
| 5 | İki devlet arası sahipsiz toprak | İki (veya daha çok) devlet gövdesinin arasında kalan boşluk | boşluğun komşuları: hangi devletlere değiyor, en küçük genişlik km |

**Ayrım (boşluk mu, enklav mı):** 1 ve 3. türde aradaki alan **başka devletin boyalı toprağıysa** bu boşluk DEĞİL, o devletin
enklavıdır → bulgu "enklav-adayı"dır ve kayıtta `s:` bayrağı (`enklav:true` / `eksklav:true`) aranır: bayrak varsa **meşru** (tsv'ye
yazılmaz); yoksa "bayrak eksik" bulgusu olur. Aradaki alan **sahipsiz** ise bu 4/5. türdür. Bunu ayıran tek soru:
*"kesişimdeki alanın nihai sahibi (devlet-dolgu) var mı?"* — Koşu 41 isteğindeki Ⓑ çakışması (Halep/Şam'da iki katman) bunun
tuzağıdır: Ⓑ (`dolgu-b-alan`) sahibi olan toprağa da çiziliyorsa "boşluk" yanlış görünür → tarama **`devlet-dolgu` kimliğini
esas alır, Ⓑ'yi saymaz**.

### B.3 Nerede ölçülür

1. **Birincil: koddan/veriden** — `data/` + motor çıktısı (`donemler.js` çözülmüş: `py arac/kodla.py coz-c data data/donemler.js donem`).
   Ayrı worktree'de, `origin/main`den. Poligon ölçümü shapely + kara maskesi (`veri-kaynak/ne_10m_land.geojson`) ile.
2. **İkincil: tarayıcıda görsel teyit** — yalnız bulunan bulgunun kendisi için (`preview` + `queryRenderedFeatures`; Koşu 41
   isteğindeki ölçüm yöntemi). Toplu tarama tarayıcıdan yapılmaz (yavaş, RAM yer).
3. **Motor çıktısı bayat olabilir** (Koşu 40 sürüyor, hep girdiden geride — "koşu bayat da yayınla" kuralı). Ölçüm raporuna
   "hangi koşu, hangi commit" yazılır; bulgu, **girdi (yerleşim kaydı) bu sorunu çözdüyse** "koşu bekliyor" etiketiyle ayrılır.

---

## C. EŞİK MANTIĞI

### C.1 Ölçülen yoğunluk (yerleşim noktası aralığı)

Yöntem: gün kesitinde sahipli (sahibi `__BOSLUK__` olmayan) noktalar; her noktanın en yakın başka sahipli noktaya mesafesi (km);
"farklı sahip" = en yakın **başka devletin** noktasına mesafe (ilk 12 komşu içinde). Yalnız nokta; poligon ölçülmedi.

| Gün | Sahipli nokta | Devlet | Aralık medyan | p90 | p99 | Farklı-sahip medyan / p90 | >150 km komşusuz | >300 km |
|---|---|---|---|---|---|---|---|---|
| MÖ 500 | 58 | 35 | 106 | 483 | 1.843 | 366 / 1.064 | 26 | 14 |
| MS 0 | 389 | 26 | 48 | 119 | 1.354 | 227 / 1.022 | 33 | 15 |
| 500 | 364 | 61 | 53 | 298 | 802 | 327 / 658 | 59 | 35 |
| 1000 | 589 | 165 | 67 | 266 | 1.063 | 183 / 610 | 120 | 50 |
| 1281 | 2.789 | 340 | 56 | 193 | 427 | 120 / 413 | 414 | 101 |
| 1500 | 3.041 | 334 | 54 | 183 | 430 | 139 / 432 | 435 | 104 |
| 1700 | 3.608 | 323 | 60 | 197 | 389 | 169 / 444 | 608 | 115 |
| 1800 | 3.914 | 335 | 63 | 200 | 372 | 174 / 431 | 697 | 102 |
| 1900 | 4.672 | 224 | 69 | 194 | 336 | 176 / 391 | 896 | 75 |
| 1950 | 4.808 | 186 | 69 | 192 | 335 | 168 / 386 | 921 | 71 |
| 2000 | 4.862 | 233 | 68 | 191 | 335 | 163 / 385 | 914 | 69 |

Okuma: 1281 sonrası p90 ≈ 190 km ve sabit, **motorun 200 km tavanıyla örtüşüyor** (tesadüf değil: veri tavanı hedefleyerek
yazıldı). 1281 öncesinde yoğunluk düşük ve oynak (MÖ 500'de 58 nokta). Yani eşik **çağa göre** gevşemeli; 1281 sonrası sabit kalabilir.
Bu bir **noktasal** ölçüdür: "boşluk" km'si poligonla ölçülünce farklı çıkabilir. (Not: veri seyrek olduğu için bu sayılar
"gerçek dünya"nın değil "atlasın" yoğunluğudur — Atlas referans değildir kuralı bu yüzden eşiği veriye değil, **kaynaklı tarihsel
beklentiye** bağlamaz; eşik yalnız *araştırma önceliği* belirler, hüküm vermez.)

### C.2 Eşik tablosu (ÖNERİ — "araştırmaya al" eşiği; üstü bulgudur)

Mantık: **çağ** (yoğunluk) × **devlet ölçeği** (komşu iki devletten küçüğünün ana gövde çapı: Küçük < 300 km · Orta 300–1.500 ·
Büyük > 1.500 km) × **tür**. Boşluk eşiği = en dar genişlik (km). Bölüştürme sınırı = boşluk komşulara paylaştırılabilecek en
büyük genişlik (yalnız 5. tür): genişlik ≤ sınır ise "komşulara böl" önerilir; > sınır ise **bölüştürme yapılmaz**, devletsiz/veri-yok/kabile
cinsiyle beyan edilir (`bos:`).

| Çağ | Tür 2: deniz–kara boşluğu | Tür 4: devlet içi boşluk (alan) | Tür 5: iki devlet arası — Küçük / Orta / Büyük | Bölüştürme sınırı | Tür 1: eksklav kopukluk (arası) | Tür 3: koridor/girinti (en < … ve boy > …) |
|---|---|---|---|---|---|---|
| Antik (< 500) | > 500 km (1000 normal) | > 60.000 km² | 150 / 300 / 600 km | 400 km | > 800 km (deniz hariç) | en < 80, boy > 400 |
| Erken Ortaçağ (500–1000) | > 400 km | > 40.000 km² | 120 / 250 / 450 km | 300 km | > 600 km | en < 60, boy > 300 |
| Ortaçağ (1000–1500) | > 250 km | > 20.000 km² | 100 / 200 / 350 km | 250 km | > 400 km | en < 50, boy > 250 |
| Erken Yeni (1500–1800) | > 150 km | > 10.000 km² | 80 / 150 / 250 km | 200 km | > 300 km | en < 40, boy > 200 |
| Yakın (1800–1945) | > 100 km | > 5.000 km² | 50 / 100 / 150 km | 150 km | > 250 km | en < 30, boy > 150 |
| Modern (1945→) | > 100 km (Emre: "100–150 şüpheli") | > 2.000 km² | 30 / 60 / 100 km | 100 km | > 200 km | en < 25, boy > 100 |

Emre'nin verdiği iki sabit nokta tabloya girdi: "denize 100–150 km şüpheli; 500–1000 km eski çağda normal" (Tür 2 satırları) ve
"200 km bölüştürülür, 2.000 km bölüştürülmez" (bölüştürme sınırı 100–400 km; üstü bölüştürülmez). Boşluk km'si bu eşiği aşmasa da
**kaynakla zıt görülürse** (kaynak orayı kime veriyorsa) bulgu açılır — eşik süzgeçtir, hüküm değil.

### C.3 Kalibrasyon durumu ve belirsizlikler

- **Ölçülebilen:** yalnız nokta aralığı (§C.1). 1281 sonrası p90 ≈ 190 km → "Erken Yeni / Yakın" Tür 5 eşiklerinin (50–250) bir kısmı
  veri aralığının **altında** kalır: nokta aralığı zaten 190 km ise 100 km'lik boşluğun çoğu "noktasızlık"tır, gerçek boşluk değil.
  Bu yüzden Tür 5'te alt eşik = max(tablo, 0,5 × yerel nokta aralığı p90) uygulanır (pilotta doğrulanacak).
- **Ölçülmedi:** poligon genişliği, kıyı boşluğu km'si, delik alanı, koridor en/boyu; bölge başına kaç bulgu çıkacağı.
  Tablo bu yüzden **ilk öneridir**; pilotta (§H) 1 bölge × 1 dilim için bulgu sayısı ölçülür ve **bulgu sayısı gün başına
  50'yi aşıyorsa eşik 1,5× gevşetilir** (yığılma = eşik kötü, dünya kötü değil).
- 1013 taramasının dersi: 150 → 250 → 400 km eşik 14.161 → 5.452 → 1.622 aday veriyor (≈ 9 kat). **Eşik sayıyı belirler;
  bu yüzden ilk koşuda tek eşik değil üç eşik (×0,7 / ×1 / ×1,5) raporlanır**, Emre/koordinatör sayıdan karar verir.
- Devlet ölçeği sınıfı (Küçük/Orta/Büyük) kaynaktan değil **atlasın o günkü gövde alanından** hesaplanır; bu atlasa dayanır
  → yalnız süzgeç için kullanılır, bulgunun doğruluğuna gerekçe yapılmaz.

---

## D. TEYİT BASAMAĞI (her bulgu için, sırayla)

**D.0 Ön eleme (kaynak okumadan, makineyle):** bulgu şu kovalardan birine düşüyorsa kaynak araştırması AÇILMAZ, etiketlenir:
1. Zaten `bos:`/`kasitli_bosluk`/`BEYAN_EDILEN_BOSLUK`/`enklav:`/`eksklav:` ile beyanlı → `beyanli` (meşru).
2. Envanter 1119'da kayıtlı (a–f sınıfları) → `bilinen` (iş zaten sahipli).
3. **Koşu 41 kuralının kapsadığı** (tek devletin çevirdiği boşluk / bitişik kıyı) → `kosu41-bekliyor`.
4. Girdi (yerleşim kaydı) düzeltilmiş ama koşu bayat → `kosu-bekliyor`.

**D.1 Sorgu (kalan bulgular):** altı soru, cevap kayıtta alan olarak yazılır —

| Soru | Cevap alanı |
|---|---|
| Orada yerleşim noktası var mı? (en yakın 3 nokta, mesafe, sahipleri) | `yerlesim_var` |
| Sahipli yerleşim var mı ve haritada neden boyamıyor? | `sahipli_yerlesim` |
| Veri mi eksik? (yerleşim kaydı yok / dönemi yok) | `veri_eksik` |
| Araştırma mı eksik? (kaynak var ama okunmamış) | `arastirma_eksik` |
| Hata mı? (yanlış koordinat/tarih/devlet, 1 yanlış yama) | `hata` |
| Gerçekten boşluk/enklav mı (kaynak "orası kimsenin değil / şu devletin enklavı" diyor) | `gercek_tur` |

**D.2 Kaynak merdiveni** (CLAUDE.md "Boşluk doldurma merdiveni", aynen): ① TDV → ② öteki akademik kaynaklar → ③ komşu büyük/yerel
devlet kaynakları → ④ yerleşim o devirde var mıydı? (yoksa dönem kırp; toprak komşulara kalır) → ⑤ **abi merkez** (siyasî/idarî/
askerî/iktisadî kader ortağı; `kaynak:`a "ABİ MERKEZ: … — <kaynak>" + BEYANLI YAKLAŞIKLIK). Kaynak sırası ve **Hakemli karar**
(çelişkide ≥ 2 bağımsız akademik kaynak; `ic_not`a çelişen kaynaklar + seçilen gün + gerekçe) **aynen geçerli**; Vikipedi tek
dayanak olamaz; "okunamadı" ≠ "yok" — okunmayan kaynak yazılmaz, `BORC-DEFTERI.md`ne girer (paywall/403 dahil).

**D.3 Karar çıktısı** (tek bulgu → tek sonuç): `gercek-bosluk | gercek-enklav | gercek-eksklav | gercek-koridor | veri-duzeltildi |
dönem-kırpıldı | abi-merkez-bağlandı | hata-düzeltildi | cevaplanamadı(borç)`. `gercek-*` sonuçları §F'deki **teyitli** kayda girer;
`*-düzeltildi` sonuçlar normal veri commit'idir (dal, §E) ve tsv satırı kapanır.

**Zor kural:** tarama bulgusu "atlasa göre boşluk"tur; atlas referans olmadığı için **bulguyu kendi başına kanıt sayma** —
kaynak bulunmadan teyitli işaret yazılmaz, veri de değişmez.

---

## E. POST-IT / OTURUM ORGANİZASYONU

### E.1 İlke: bulgu → dosya → gruplu iş paketi → (ancak sonra) oturum

```
tarama betiği  ──►  denetim/GARIPLIK-<bolge>.tsv      (HAM bulgu; binlerce satır olabilir, post-it DEĞİL)
tsv'yi gruplayan betik ──►  denetim/GARIPLIK-KUYRUK.tsv  (İŞ PAKETİ: bölge × dilim × tür, ≤ 30 bulgu/paket)
koordinatör/dağıtıcı  ──►  paketi bir oturuma verir (teyit §D) ──► sonuç: veri dalı + teyitli kayıt
```

Hiçbir ham bulgu Issue olmaz. Issue'ya yalnız **Emre'den cevap bekleyen** karar gider (borç defteri kuralı).

### E.2 Emre'nin harita notlarıyla karışmama

`arac/not.py` içinde `ETIKET = "harita-notu"` **tek satırda** sabit (satır 60) ve **tek yerde** kullanılıyor (`notlar()`, satır 244).
Sonuç (ölçüldü: 2 geçiş): `al`, `sahipsiz-bekle`, `bekle`, `liste` hep bu fonksiyondan geçer. Demek ki:
- Ayrı etiket (**`gariplik-paketi`**) kullanılırsa mevcut post-it dağıtıcısı ve `/postit` bu Issue'ları **görmez** → karışmaz (iyi).
- `not.py`'nin bu paketleri de işlemesi istenirse **tek satırlık değişiklik** gerekir (`ETIKET = os.environ.get("NOT_ETIKET",
  "harita-notu")`) — `not.py` motor dosyası değil, yasak değil. **Öneri: Faz 1'de hiç gerek yok**, paket dosya kuyruğundan
  verilir (E.1). Issue kullanımı Faz 2'de, gerekirse.
- Emre'nin sitede notlarını gördüğü panel (`js/gelistirici.js` satır 58 `ETIKET`) yalnız `harita-notu` okur → `gariplik-paketi`
  Emre'nin panelinde **görünmez**. İstenirse ayrı bir bölüm (K5).
- Ek koruma: paket Issue'ları açılacaksa başlık `GARIPLIK <bölge>·<dilim>·<tür> (N bulgu)` ile başlar.

### E.3 Sıralama ve sınırlar

| Konu | Öneri |
|---|---|
| **Sıra** | 1) Araç + pilot (şimdi, KASA/LAB) · 2) **Koşu 41 yayınlandıktan sonra** toplu tarama · 3) paketler |
| Eşzamanlı oturum | **en çok 2 tarama-teyit oturumu** aynı anda (CLAUDE.md post-it dağıtıcısı 1'dir; bu iş post-it dağıtıcısıyla **yarışmaz**: toplam eşzamanlı yeni oturum ≤ 2, post-it 1 + gariplik 1 bu sayıya girer) |
| Makine | **HAVVA: hiç** (koşu varsa dolu). **KASA, LAB** önce (boş makineler). **UMIT**: yalnız mesai dışı ve ≤ %25; mesaide yok. **EMRELİC**: tarama koşmaz (RAM yetmiyor), yalnız koordinasyon + dal alma |
| Günlük üst sınır | en çok **8 paket / gün** (≈ 240 bulgu) ve **en çok 4 teyit oturumu saati/makine** |
| Öncelik | ① bulgu sayısı çok + Emre'nin gördüğü yer (Roma, Balkan, Anadolu) ② yakın çağlar (eşik sıkı, kaynak bol) ③ tür 5 > tür 2 > tür 1 > tür 4 > tür 3 (en çok toprak etkileyen ve en güvenli düzelen önce) |
| Durma koşulu | gün sonunda o bölge×dilimde **2 ardışık pakette yeni gerçek bulgu yoksa** dilim kapanır; **bir pakette çıkan bulgunun ≥ %70'i "kosu41-bekliyor/beyanli/bilinen" ise** tarama durdurulur, eşik gözden geçirilir; **RAM/kasma uyarısı** ya da Emre mesaisi → otomatik durur; Emre "dur" der |
| Çıktı yok sayma | tsv hiçbir zaman `main`e girmez; dalda (`gariplik-<bolge>-<dilim>`), `git push origin HEAD:refs/heads/…` ile |

### E.4 Kim ne koşar, ölçüm nerede

| İş | CPU/RAM | Makine | Not |
|---|---|---|---|
| Tarama betiği (poligon, kara maskesi) | **ağır** (kara maskesi + shapely; `_dunya_bosluk.py` 1°'de bile uzun) | **KASA** veya **LAB**; ayrı worktree, `coz-c` ile | bir bölge×dilim ≈ pilotta ölçülür (**ölçülmedi**) |
| Kaynak teyit oturumları (okuma/yazma) | hafif | KASA, LAB, mesai dışı UMIT | Sonnet; ≤ 2 hafif ajan |
| Tsv gruplama, hash, indeks | hafif | herhangi | saniyeler |
| Veri düzeltme commit'i | hafif | araştırma/yazma makinesi (UMIT/EMRELİC) | `denetle/paketle/push` **KASA kapısı** |
| Görsel teyit (preview) | orta | LAB | yalnız bulunan bulgu için |

---

## F. TEYİTLİ İŞARET SİSTEMİ

### F.1 Amaç
Doğrulanan **gerçek** boşluk/enklav/eksklav/koridor haritada "teyitli" diye işaretlenir; geliştirici bir düğmeyle görür; aynı yapıya
**bir daha bakılmaz** (tarama bu kayıtla eşleşeni atlar).

### F.2 Veri şeması — yeni küçük `data/teyitli_yapilar.js` (motordan bağımsız; `window.TEYITLI_YAPILAR`)

```js
window.TEYITLI_YAPILAR = [
  { id: "gr-3fa2c19b04ae",          // §A.5 hash
    tur: "bosluk",                  // bosluk | enklav | eksklav | koridor | girinti
    bos: "devletsiz",               // yalnız tur=bosluk: devletsiz|veri-yok|kabile|insansiz (girdi.py `bos:` sözlüğüyle AYNI)
    f: "1526-09-01", t: "1683-09-12",   // kalıcılık aralığı (geometri dönemi sınırları; negatif yıl desteklenir)
    geo: [[lon,lat],[lon,lat],…],   // tek halka (kaba), VEYA  yer: {lat,lon,r_km} (yuvarlak, küçük yapılar)
    devletler: ["osmanli", "venedik"],  // devletler.js gerçek id'ler
    bolge: "R1",
    karar: "gercek-bosluk",         // §D.3'ün gercek-* değerleri; başkası yazılmaz
    kaynak: ["TDV İslâm Ansiklopedisi: … (madde, cilt/sayfa)", "…"],   // tıklanır liste (kaynak damga kuralı)
    ic_not: "iki kaynakla teyit; Hakemli karar: …",
    teyit: { oturum: "…", tarih: "2026-11-30" } }
];
```
Kurallar: `hata`/`veri-duzeltildi` kayıtları BU dosyaya girmez (onlar veri commit'idir). `kaynak` boşsa kayıt reddedilir
(Vikipedi tek başına geçmez). Kayıt **görsel işarettir**, harita boyamasını/motoru DEĞİŞTİRMEZ (rötuş gibi uygulanmaz).

### F.3 UI taslağı (`js/gelistirici.js` içinde ya da yeni `js/teyitli.js`; `app.js`e dokunmadan)

- Katman listesine bir satır: `☐ Teyitli yapılar` (`index.html` Rötuşlar satırının yanında, **`yalniz-gelistirici`** sınıfı —
  ziyaretçi görmez; Rötuşlar satırı örnek: `index.html` satır 244).
- Açıkken: seçili günde (`f ≤ gün < t`) etkin kayıtlar haritada **çizgili, yarı saydam çerçeve** (türe göre renk: boşluk gri,
  enklav/eksklav mor, koridor turuncu) çizilir; ortasında **küçük yazı**: `Boşluk · teyitli · <kaynak kısa ad>` (tür + "teyitli" +
  kaynak notu); tıklayınca panel: `ic_not` + kaynak listesi.
- Tarama aracı da aynı kayıtla çalışır: haritada işaret yoksa "bir daha bakılmadı" anlamı yok → **işaret = kayıt = atlama**.
- Düğme sayacı: `Teyitli yapılar (N)` — o gün etkin kayıt sayısı.

### F.4 Etkiler

| Konu | Etki |
|---|---|
| **Çeviri (21 dil)** | Arayüz dizgeleri sayılıyor (`ceviri.py`: gelistirici.js dizgeleri "eksik arayüz" tavanına girmiş; 16 Kasım notu). Yeni düğme etiketi + 5 tür adı + "teyitli" ≈ **7–8 arayüz dizgesi** → ya `ceviri-yenile` ile 21 dile eklenir ya da ölçüm tavanı **açılır ve sonradan raporlanır** (CLAUDE.md tavan kuralı). Kayıtların `ic_not`/`kaynak` metni Türkçe kalır (geliştirici kipi). **Ölçülmedi:** tavana kaç yazının gireceği. |
| **denetle.py** | Yeni küçük denetim ("Değişmez T"): `id` tekil · `f<t` · `tur`/`karar` sözlükte · `devletler` `devletler.js`'te gerçek id · `kaynak` boş değil · `geo` halka kapalı/≥3 nokta. İhlal bloke eder. Rötuş ("Değişmez R") örnek. |
| **paketle** | Küçük `data/*.js` → `py arac/paketle.py topla` otomatik paketler (idempotent); `index.html`e `<script>` satırı (CLAUDE.md "yeni data/*.js"). |
| **surum_damgala** | `?v=rNN` damgası (KASA kapısı yapar). |
| **Motor / koşu** | **Yok**: `uret_petek.py`/`renkler.py`/`girdi.py`/`motor_onbellek.py` dokunulmaz, koşu gerekmez, 7–8 saatlik yeniden inşa yok. Veri düzeltmeleri (veri-duzeltildi sonuçları) haritaya ancak koşu sonrası yansır — bu **ayrı** ve bilinen durum. |
| **Kronoloji** | Etkisi yok (Değişmez 2 evreninde değil). |

---

## G. MODEL — Opus mu Sonnet mi?

CLAUDE.md: araştırma/mekanik → Sonnet; Opus yalnız karar/tasarım/çatışma; kaynak araştırmasında Haiku yasak.

| Adım | Model | Gerekçe | Tahmini yük (ölçülmedi; ≈ tahmin) |
|---|---|---|---|
| Bu plan, eşik tablosu, şema tasarımı | **Opus** (bir kez) ya da bu belge Sonnet yazdı → Opus **yalnız gözden geçirsin** | tasarım kararı (§A, §C) | 1 kısa oturum |
| Tarama betiği yazımı (geometri, shapely) | **Sonnet**; motor/geometri çatışması çıkarsa Opus | mekanik ama titiz; mevcut `_enklav_kara.py`/`_dunya_bosluk.py` kopya ve uyarlama | 1 oturum ≈ 2–4 saat |
| Betiği koşturma + tsv gruplama | **model yok** (betik; ağır olan CPU) | modeli koşuya sokma | KASA/LAB CPU saatleri |
| Pilot teyit (kaynak okuma, §D) | **Sonnet** | araştırma | ≈ 20–30 bulgu/oturum |
| Toplu teyit paketleri | **Sonnet** | araştırma; Haiku yasak | paket başı 1 oturum |
| **Hakemli karar** (kaynaklar çelişiyor) | **Opus** (yalnız o bulgu) | çatışma çözümü | paket başı çoğu 0–2 bulgu |
| "Gerçek enklav mı, hata mı" belirsizliği, tür 1/3 sınır vakaları | **Opus** (kovalarla toplanıp tek oturumda) | tasarım/hüküm | günde ≤ 1 oturum |
| Teyitli kayıt yazımı + denetle | Sonnet | mekanik | küçük |
| Görsel teyit (preview) | Sonnet | | küçük |

Önerim: **%90+ Sonnet, Opus yalnız (a) belge/şema gözden geçirmesi, (b) hakemli karar, (c) belirsiz tür vakaları.**
Maliyet rakamı verilmedi çünkü bu oturumda kullanım ölçülmedi; pilot bitince tokenler `get_usage` ile ölçülüp tabloya
yazılacak ("Sonnet tasarruf" ve "token ekonomisi" kuralları geçerli: bağlam şişerse yeni temiz oturum).

---

## H. PİLOT

**Hedef:** (1) aracın çalıştığını **iki yönde** sınamak, (2) eşiklerin ilk kalibrasyonu, (3) teyit sorgusunun iş yükünü ölçmek.

| | |
|---|---|
| **Pozitif kontrol** (bilinen gariplik; araç bulmalı) | Roma MS 150: Emre'nin gördüğü İtalya/Galya/İberya boşlukları + MÖ 27 Mısır (`BOSLUK-DOGRULAMA-1123`): araç bunları **bulmuyorsa araç hatalı**. Yalnız bulma testi, düzeltme yok (Koşu 41 kuralı bekleniyor). |
| **Negatif kontrol** | bilinen temiz bir gün (örn. 1900 Avrupa, devletler yoğun): bulgu sayısı **eşik gevşekliğini** gösterir; çok çıkıyorsa eşik kötü |
| **Pilot bölge × dilim** | **R4 Güney Asya × Erken Yeni (1500–1800)**: 272 nokta (en küçük bölgelerden), başka oturum çalışmıyor, Mughal/Maratha/Safevî komşuluğu 1–5. türü verir, Roma bölgesiyle çakışmaz. (Alternatif: R9 Meksika.) |
| **Kim** | **KASA** (tarama betiği, ölçüm) + 1 Sonnet teyit oturumu (KASA ya da LAB); EMRELİC yalnız dalı alır |
| **Nerede** | KASA'da ayrı worktree (`coz-c` ile motor çıktısı çözülür); HAVVA'ya dokunulmaz |
| **Süre** | betik uyarlama ≈ 3 saat · pilot tarama koşusu ≈ **ölçülmedi** (tahmin 0,5–1 saat CPU) · teyit ≈ 3–4 saat · **toplam ≈ 7–8 saat, 2 oturum, 2 gün** |
| **Çıktı** | `denetim/GARIPLIK-R4-ERKENYENI.tsv` + 3 eşik sayısı (×0,7 / ×1 / ×1,5) + `denetim/GARIPLIK-PILOT-RAPOR-<tarih>.md` (kaç bulgu, kaçı gerçek, kaçı veri/koşu bekliyor, teyit süresi bulgu başına) + 3–5 örnek `teyitli_yapilar.js` kaydı (dalda, `main`e değil) |
| **Geçer notu** | pozitif kontrol ≥ %80 bulur · negatif kontrol gün başına ≤ 50 bulgu · teyit ortalaması ≤ 30 dk/bulgu · RAM sınırı aşılmaz |
| **Ondan sonra** | rapor Emre'ye (§KARAR); onaylanırsa **Koşu 41 sonrası** R1 ve R2 (en büyük yük), sonra öteki bölgeler |

---

## KARAR BEKLİYOR (Emre)

| # | Soru | Önerim |
|---|---|---|
| K1 | Bölge şeması: 11 çakışmalı bölge (R1–R11), Avrupa Urallara kadar TEK bölge, Afrika Sahra'dan ikiye (Kuzey R2 / Sahra-altı R7) — onaylıyor musun? | Evet |
| K2 | Kıta-adalar ayrı bölge mi? (Önerim: **büyük adalar kıtayla**, yalnız uzak okyanus adaları ayrı → R11) | Büyük adalar kıtayla |
| K3 | Toplu tarama **Koşu 41 yayınlanana kadar beklesin** mi (Koşu 41'in çevrili-boşluk kuralı bulguların büyük kısmını kapatacak)? Pilot ve araç hazırlığı beklemeden başlar. | Evet, bekle |
| K4 | Eşik tablosu (§C.2) ilk öneri olarak kabul mü, yoksa pilot sonucunu (3 eşikli sayı) görüp mü karar verelim? | Pilotu gör, sonra kesinleştir |
| K5 | `gariplik-paketi` Issue'ları Faz 2'de açılsın mı; Emre'nin panelinde ayrı bölümde görünsün mü yoksa hiç görünmesin mi? | Faz 1: Issue yok; Faz 2: panelde görünmesin |
| K6 | Teyitli işaretler yeni `data/teyitli_yapilar.js` + geliştirici katmanı + yeni `denetle` kontrolü (Değişmez T) ile eklenebilir mi? Yeni arayüz dizgeleri (≈ 7–8) çeviri tavanını açabilir (sonradan raporlanır). | Evet |
| K7 | Tarama CPU'su KASA/LAB'a verilsin; HAVVA/EMRELİC kasılmasın — KASA ve LAB boş mu (Emre bilir)? Ölçülmedi: bu makinelerin şu anki yükü. | Evet |
| K8 | Günlük üst sınır 8 paket / 2 eşzamanlı oturum; "bulgu ≥ %70 bilinen/beyanlı ise dur" kuralı kabul mü? | Evet |
| K9 | Pilot bölgesi: R4 Güney Asya × 1500–1800 (önerim) mı, yoksa Emre'nin gördüğü bir yer (Roma/İtalya) mı? Roma'yı seçersek Koşu 41 öncesi sonuç yarı çözümsüz kalır. | R4; Roma yalnız pozitif kontrol |

## Bu belgede ÖLÇÜLMEDİ olanlar (özet)
Poligon genişlikleri/delik alanları (üretilmiş harita bu ağaçta yok) · bölge başına kronoloji maddesi sayısı · geometri değişim günü
sayısı · tarama koşusunun CPU/RAM/süresi · çeviri tavanına eklenecek tam dizge sayısı · makinelerin şu anki yükü · token/maliyet
(bu oturumda kullanım ölçülmedi) · eşik tablosunun gerçek bulgu sayısı üzerindeki etkisi (yalnız tablo önerisi).
