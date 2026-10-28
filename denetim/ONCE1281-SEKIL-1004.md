# ONCE1281-SEKIL-1004 — 1281 öncesi kampanyasının BOYU

Oturum: ONCE1281-SEKIL-1004 · 4 Ekim 2026 · görev: YILDIRIM BAYEZIT (send_message)
Bağlam: Emre "1281 öncesini koşulacak, yayınlanacak hâle getir". Bu dosya kampanyayı YAPMAZ,
BOYUNU ölçer. **Veriye yazılmadı.** Koşu sürerken (HAVVA) yalnız OKUMA yapıldı.
Okunan ders: [`D257`](../dersler/D257-olu-nokta-kamera-alamaz.md) (ölü nokta kamera alamaz).

## 0. Yöntem — ölçümden önce sabitlendi

- Evren: `girdi.yukle()` (projenin okuyucusu; regex YOK, `D219`). `UFUK = ("1281-01-01",
  "1923-10-29")` `girdi.py:705`ten.
- Her nokta için `s:` ∪ `d:` ∪ `v:` dönemlerinin EN KÜÇÜK `f:`'si = ilk sahiplik günü.
  (`isg:` örtüdür, sahiplik değil — dışarıda.)
  - 🔴 KENETLİ: ilk `f` tam `1281-01-01`
  - 🟢 GERÇEK: ilk `f` > `1281-01-01` (`kur:` varsa onunla karşılaştırılır)
  - 🟡 ÖNCESİ VAR: ilk `f` < `1281-01-01`
  - ⚪ ÖLÇÜLEMEDİ: hiç dönem yok ya da `f` okunamıyor
- 🔴 kovasında `kur:` taşıyanlar ayrıca sayılır.
- Bölge: yerleşim şemasında `bolge:` alanı YOK (`girdi.BILINEN_ALANLAR`). İki gruplama
  yapılacak: ① **1281'deki ilk sahip kimliği** (`d` için `osmanli`, `s`/`v` için `d:`/`kid:`) —
  "1281 öncesi X = şu" hükmü tam bu kimlik üzerinden verilir; ② 10°×10° koordinat karesi.
  İlk 10 grubun kapattığı nokta sayısı ikisinde de raporlanır.

## 1. ÖNGÖRÜ — ölçümden ÖNCE yazıldı

**Sayı** (4298 noktada):
- 🔴 KENETLİ **~%65 (≈2800, aralık 2200–3300)**
- 🟢 GERÇEK **~%30 (≈1300)** — Osmanlı'nın sonraki fetih/kuruluş bölgeleri (Kuzey Afrika,
  Arabistan, Amerika, ileri tarihli kurulan şehirler)
- 🟡 ÖNCESİ VAR **< 50** — motor UFUK'tan önce okumadığı için yazarların 1281'den eski `f`
  yazma sebebi yok; yalnız birkaç kaynaklı pilot noktası
- ⚪ ÖLÇÜLEMEDİ **~20–40** — `D257`nin ölü noktaları (Askalân, Dvin gibi `bit:` < 1281 olup
  `s:` boş bırakılanlar; D257 "19 nokta `bit:`" diyor)
- 🔴 içinde `kur:` taşıyan: **< 15**

**Mekanizma:**
- KENETLEME mekaniktir, kaynaklı değildir: yazarlar her noktanın sahip zincirini UFUK'un
  tabanından başlatmış — çünkü motor 1281'den öncesini okumuyor, Değişmez 1 "1281'de
  sahipsiz nokta = delik" diye bakıyor. Yani `1281-01-01` çoğunlukla "bilinmiyor/sorulmadı"
  demek; gerçek bir olay günü değil.
- Kenetli noktaların ilk sahip kimliği az sayıda devlette toplanır (Bizans, Anadolu
  Selçuklu/İlhanlı ve beylikler, Bulgar/Sırp, Memlük, Altın Orda) ⇒ **ilk 10 kimlik 🔴'nin
  %70'inden fazlasını** kapatır. Kampanyanın gerçek birimi nokta değil, bu kimliklerin
  1281 öncesi zinciridir.
- 🔴 içinde `kur:` olması bir ÇELİŞKİdir (kur > 1281 ise ilk `f` 1281 olamaz; kur < 1281 ise
  zaten öncesi biliniyor demektir) — az ve araştırmaya değer.

## 2. Ölçüm

`girdi.yukle()` → **4298 nokta**, okunamayan `f:` **0** (betikler scratchpad `once1.py`,
`once2.py`, `once3.py`). Künye eşlemesi `girdi.oku_devletler()` (895 künye; `id` ve
`harita:` anahtarıyla).

### 2.1 Dört kova

| kova | nokta | oran |
|---|---|---|
| 🔴 KENETLİ — ilk `f` tam `1281-01-01` | **2526** | **%58,8** |
| 🟢 GERÇEK — ilk `f` > 1281 | **1619** | %37,7 |
| 🟡 ÖNCESİ VAR — ilk `f` < 1281 | **1** | %0,02 (Lapaha, Tonga: `s: tui-tonga` 1220) |
| ⚪ ÖLÇÜLEMEDİ — hiç dönem yok | **152** | %3,5 |

### 2.2 🔴 kovasında `kur:` — 192, ama 191'i ANLAMSIZ

| durum | nokta |
|---|---|
| `kur:` tam `1281-01-01` (kur alanı da KENETLİ) | **191** — `yerlesimler_kamerika.js` 110 · `yerlesimler_afrika2.js` 81 (İnuit 39, Dene 13 …) |
| `kur:` > 1281 ama ilk sahiplik 1281'de başlıyor (ÇELİŞKİ) | **1** — Uzunköprü (`kur: 1443-01-01`) |
| `kur:` < 1281 (nokta 1281 öncesinde de var, kaynaklı) | **0** |

🔴 **Koordinatörün kuralı burada TERSİNE işler.** "`kur:` varsa nokta o tarihte kurulmuştur,
1281 öncesi için sahip aramak yanlış" — bu 191 nokta için YANLIŞ: Utqiaġvik, Iglulik,
Point Hope 1281'de kurulmadı; `kur:` alanına UFUK'un tabanı yazılmış. Motor `kur:`'u okuyor
(`petek_epok`, D257) ⇒ UFUK geriye çekildiği an bu 191 nokta "henüz kurulmamış" sayılıp
peteğini komşuya devredecek. Bu noktalarda `kur:` bir ölçüm değil, ikinci bir kenettir.

### 2.3 🟢 kovası — çoğu gerçekten hazır

| durum | nokta |
|---|---|
| `kur:` = ilk `f` (kuruluş günü sahiplikle aynı — nokta o gün doğmuş) | **1448** |
| `kur:` YOK — öncesi sahipsiz, kasıt mı bilgisizlik mi okunamıyor | **147** |
| `kur:` < ilk `f` (kurulmuş, sahibi sonra gelmiş) | 20 |
| öteki | 4 |

147 `kur:`suz noktanın dağılımı: 18. yy 25 · 19. yy 75 · 15-17. yy 43; ilk sahip
`ingiliz-sudani` 23, `habesistan` 17, `rusya` 13, `mapuche` 10, `suud` 8 … (ör. Riyad, Dir'iye
`suud` 1744'ten başlıyor, öncesi boş). Bunlar bugün Değişmez 1'in "beklenen sahipsiz"
kovasında; 1281 öncesine uzatmada aynı soruyu sorarlar.

### 2.4 ⚪ kovası — beyanlı boşluk, hazır

152 noktanın **142**'si `kasitli_bosluk`, **150**'si `neden:`/`bos:` taşıyor (çöl/dolgu
noktaları: Hoggar, Tibesti, Rub'ul Hâlî …). 2'si `D257`nin ölüleri (Askalân `bit: 1270`,
Dvin `bit: 1236`). Bu kova kampanyaya iş getirmez.

### 2.5 🔴 kovasını BÖLGEYE göre gruplama

**① İlk sahibin künyesindeki `bolge:`** (27 bölge):

| sıra | bölge | nokta | kümülatif |
|---|---|---|---|
| 1 | balkanlar | 241 | %9,5 |
| 2 | iran | 217 | %18,1 |
| 3 | misir-sudan | 190 | %25,7 |
| 4 | orta-avrupa | 187 | %33,1 |
| 5 | guneydogu-asya | 179 | %40,1 |
| 6 | kuzey-afrika | 144 | %45,8 |
| 7 | dogu-afrika | 143 | %51,5 |
| 8 | sibirya-bozkir | 132 | %56,7 |
| 9 | dogu-asya | 132 | %62,0 |
| 10 | italya | 119 | **%66,7 (1684 nokta)** |
| … | anadolu (15.) | 79 | |

**② İlk sahip kimliği** (234 kimlik): ilk 10 — `ilhanli` 211 · `bizans` 174 · `altinorda`
132 · `memluk` 129 · `almanya` 104 · `yuan-hanedani` 101 · `macaristan` 81 · `hafsi` 57 ·
`venedik` 51 · `nube` 47 ⇒ **1087 nokta (%43,0)**. İlk 25 → %64,5.

**③ 10°×10° kare** (153 kare): ilk 10 → **1036 nokta (%41,0)**; en yoğun 40°K/20°D (Balkanlar) 194.

### 2.6 Kenetin altındaki ikinci kenet: ilk sahibin KÜNYESİ

🔴 kovasındaki 2526 noktanın ilk sahibinin künye `f:`'si:

| künye `f:` | nokta | ne demek |
|---|---|---|
| < 1000 | 609 | sahip çok eski (Bizans, Venedik …) — zincir aynı sahiple geriye uzayabilir, KAYNAKLA |
| 1000–1199 | 574 | 〃 |
| 1200–1280 | **926** | sahip 1281'den hemen önce doğmuş (İlhanlı 1256, Memlük 1250, Yuan 1271, Hafsî 1229, Altın Orda …) ⇒ **bir ÖNCEKİ sahip araştırması kesin gerekli** |
| tam `1281-01-01` | **275** (118 kimlik) | künye de KENETLİ ⇒ kimliğin kendisi araştırma ister |
| > 1281 | **103** (18 kimlik) | 🔴 **GERÇEK HAYALET** — nokta 1281'de var olmayan bir devlete boyanmış |
| künye yok | 39 | `__BOSLUK__` 34 · `osmanli` 5 |

**103 hayalet nokta (§3.5 "Hayalet devlet" sınıfı — denetim GÖRMÜYOR):** `adal` (künye
1415) 37 · `napoli` (1282-03-30) 24 · `somali` (1500) 21 · `iran` (**1925-12-12**) 3 ·
`arnavutluk` (1443) 2 · `avusturya` (1282) 2 · `sardinya` (1720) 2 · `kaffa` (1390) 2 · tekil:
`ahiler`, `katalan`, `bogdan`, `mantua`, `ryukyu`, `brunei-sultanligi`, `sulu-sultanligi`,
`aztek-imparatorlugu`, `inka-imparatorlugu`, `kuzey-yuan`. Bunlar 1281 kampanyasından
BAĞIMSIZ bugünkü kusurlardır (ör. Dağıstan'daki Tarki 1281'den beri `iran` = Pehlevî İran'ı).

## 3. Kampanyanın gerçek boyu

| iş | nokta | not |
|---|---|---|
| **1281 öncesi sahip araştırması GEREKEN** | **2526** | 🔴 kovası |
| ⤷ önceki sahip KESİN gerekli (ilk sahip 1200-1280'de doğmuş) | 926 | |
| ⤷ künyesi de kenetli (önce künye) | 275 | 118 kimlik |
| ⤷ bugün zaten hayalet (önce bugünkü kusur) | 103 | 18 kimlik |
| ⤷ `kur:` de kenetli (ikinci kenet, motor okuyor) | 191 | |
| kasıt/bilgisizlik okunamayan öncesi | 147 | 🟢 `kur:`suz |
| **HAZIR** (1281 öncesi soru yok ya da beyanlı) | **1448 + 152 + 1 = 1601** | %37 |

- **Gruplama ölçeği:** tek bir bölge hükmü ortalama ~94 noktayı kapatıyor (2526 / 27), ama
  ilk 10 bölge %67'de kalıyor; kimlik bazında ilk 10 yalnız %43. Kampanya **dağınık**: "bir
  hüküm yüzlerce nokta" deseni yalnız birkaç büyük kimlikte (İlhanlı 211, Bizans 174, Altın
  Orda 132, Memlük 129) geçerli.
- ⚠️ "Aynı sahip geriye uzar" kestirmesi CAZİP ve YASAK: künyenin `f:`'si bir KAYNAK
  değildir (`D210`, `D207`). Künye yalnız "bu sahip 1281 öncesinde VAR mıydı" sorusuna üst
  sınır verir; noktanın ona ait olduğunu söylemez.

## 4. Öngörü × ölçüm

| öngörü | ölçüm | |
|---|---|---|
| 🔴 ~2800 (2200–3300) | **2526** | ✅ aralıkta |
| 🟢 ~1300 | 1619 | ❌ az tahmin |
| 🟡 < 50 | 1 | ✅ |
| ⚪ 20–40 | **152** | ❌ — çöl/dolgu `kasitli_bosluk` noktalarını unuttum |
| 🔴'de `kur:` < 15 | **192** | ❌ — ama 191'i KENETLİ `kur:`; öngörmediğim mekanizma |
| ilk 10 kimlik > %70 | **%43** | ❌ — kampanya sandığımdan dağınık |
| MEKANİZMA: kenet mekanik, kaynaklı değil | ✅ güçlendi — kenet ÜÇ alanda birden: ilk `f` (2526), `kur:` (191), künye `f:` (275) |
| ÖNGÖRÜLMEYEN | 103 hayalet nokta (bugünkü kusur, kampanyadan bağımsız) | |

## 5. D257 — aynı engele ikinci kez çarpmamak için

- D257'nin engeli **1281'den önce ÖLEN** noktalardır (`d/v/s` boş ⇒ havuz dışı ⇒ `yer_id`
  yazılamaz). Bugünkü veride bunlar yalnız **2** (Askalân, Dvin). Kampanya yeni ölü noktalar
  ekledikçe bu sayı büyüyecek; UFUK geri çekilmeden onlara kronoloji odağı bağlanamaz.
- **Kampanyanın sırası buradan çıkıyor:** ① UFUK'u geri çekmenin motor/denetim etkisi
  (bugün 2526 nokta 1281 öncesinde sahipsiz kalır ⇒ Değişmez 1 patlar; 191 `kur:`-kenetli
  nokta peteğini devreder) ② ancak ondan sonra sahip zinciri yazımı.
- **ÖLÇMEDİM:** motorun 1281'den eski bir `s: f:`'yi bugün okuyup okumadığı (UFUK'ta kırpıyor
  mu). Lapaha (`f: 1220`) tek canlı örnek; bu soru koşu bitince `uret_petek.py`de ya da
  Lapaha'nın çıktısında ölçülmeli. Koşu sürdüğü için dokunmadım.

## 6. Öneri (karar koordinatörün)

1. **Önce bugünkü kusur:** 103 hayalet nokta (18 kimlik; `adal` 37, `napoli` 24, `somali` 21
   tek başına 82'si). Kampanya beklemez, bugün yanlış.
2. **191 kenetli `kur:`** — UFUK geri çekilmeden önce temizlenmeli (sil ya da kaynaklı gün);
   yoksa uzatma anında 191 petek sessizce devredilir.
3. **Kampanya birimi kimliktir, nokta değil:** 275 kenetli künye (118 kimlik) önce, sonra 926
   "yakın doğmuş sahip" noktasının önceki sahibi (İlhanlı/Memlük/Altın Orda/Yuan/Hafsî — 5
   kimlik ~630 nokta, `ilhanli`+`memluk`+`altinorda`+`yuan-hanedani`+`hafsi`).
4. **Uzunköprü** (`kur: 1443` ama sahiplik 1281'den) tek kayıtlık çelişki.
