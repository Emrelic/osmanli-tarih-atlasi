# ONCE1281-GERIYE-KAPI-1004 — geriye açmanın iki kapısı

Oturum: ONCE1281-MOTOR-UFUK-1004 · 4 Ekim 2026 · görev: YILDIRIM BAYEZIT (send_message)
Önceki: [`ONCE1281-KUR191-1004.md`](ONCE1281-KUR191-1004.md). Koordinatör 191 + 3 (Taino)
= **194** `kur:`u sildi. **Veriye yazılmadı**; her kalem öneridir, uygulama koordinatörde.

- **A — "ezelden beri var" kapısı:** 194 noktaya kaynaklı/kaba bir `kur:` yazılabilir mi?
- **B — "devlet var, yeri yanlış" (D204) tam taraması:** ilk sahipliği 1281-01-01'de
  başlayan ve o gün o coğrafyada bulunmayan bir devlete verilmiş noktalar.

## B. 0 — Yöntem ve öngörü (ölçümden ÖNCE)

**Evren:** `girdi.yukle()`; her noktanın `s/d/v` dönemlerinin en küçük `f`'si `1281-01-01`
olan ve o ilk dönem `s:` olanlar (kesişim süzgeci UYARISI: koordinatörün 3 kayıt dersi —
aşağıda ayrıca `d:`/`v:` ile başlayanlar da sayılır, `s:` dışında kalan kol görünür kalsın).
**Kimliğin menzili:** atlas DAYANAK DEĞİLDİR (`D207`); kimliğin kendi koordinat bulutu
kullanılmaz. Ölçülebilir, atlas-dışı tek menzil bilgisi **künyenin `bolge:` alanı** — onu
KITAYA çevirip noktanın koordinatından hesaplanan kıtayla karşılaştırırım:
- künye `bolge` → kıta: Avrupa (balkanlar, orta/bati/kuzey/dogu-avrupa, italya, iberya) ·
  Asya (anadolu, iran, kafkasya, arabistan, orta-asya, sibirya-bozkir, dogu-asya,
  guneydogu-asya, guney-asya) · Afrika (misir-sudan, kuzey/dogu/bati/orta/guney-afrika) ·
  Amerika (kuzey-amerika, orta-amerika, orta-amerika-karayip, guney-amerika) · Okyanusya.
- nokta → kıta: koordinat kutuları (Amerika: boylam < −25 · Okyanusya: Avustralya/Pasifik
  kutuları · Sahra-altı Afrika: enlem < 20, boylam −20…52 ve Arabistan hariç · gerisi Avrasya
  ya da Kuzey Afrika). Avrupa↔Asya ve Kuzey Afrika↔Asya sınırı BULANIK sayılır ve **o
  çiftler işaretlenmez** (yanlış alarmı önlemek için yalnız okyanus aşan ya da Sahra'yı aşan
  uyuşmazlık sayılır).
- `bolge` boş / tanınmayan künye ⇒ ⚪ ölçülemedi.
- ⚠️ Bu ölçüt yalnız KITA ölçeğindeki yanlışı görür; "İlhanlı ama aslında Çağatay" gibi
  komşu-devlet yanlışını GÖRMEZ. O ince sınıf ölçülemedi diye beyan edilecek.

**Öngörü:** kıta aşan uyuşmazlık **15–40 nokta**, mekanizma: Avrupa sömürge kimlikleri
(`ingiltere`, `fransa`, `ispanya`, `portekiz`, `hollanda`) sömürge öncesi döneme 1281'den
geriye uzatılmış — yazar "ilk bilinen sahip"i UFUK tabanına kadar çekmiş. 4 Alaska noktası +
Natashquan bu sınıfın parçası; başka kıtalarda (Afrika kıyıları, Güneydoğu Asya) da
bekliyorum. Ters yön (Amerikan/Afrikan kimliği Avrupa'da) **0**.

## A. 0 — Yöntem

194 nokta iki tabakaya ayrıldı (Kuzey Amerika + Taino 113 · Afrika 81); her nokta için
akademik kaynakta BU YERİN ilk yerleşim/kuruluş tarihi arandı. Ölçüt: bölge ya da kültür
düzeyindeki bir tarih ("Thule göçü ~1200") noktaya TAŞINMAZ (`D208`); yalnız bu yeri ya da
bu yerdeki adlandırılmış bir arkeolojik alanı tarihleyen cümle sayılır. Vikipedi tek dayanak
değildir; WebFetch (küçük model) kullanılmadı, ham metin okundu.

**Öngörü:** 🟢+🟡 (kaynaklı ya da kaba `kur:` yazılabilen) **~30 / 194**; Afrika kasabalarında
(Lagos, Swahili şehirleri, Madagaskar) oran yüksek, İnuit/Dene kamplarında çok düşük.

## B. Ölçüm — "devlet var, yeri yanlış"

`git rev-parse HEAD` başta/sonda `250b62ae` (aynı). Betik scratchpad `yer1.py`.

| kova | nokta |
|---|---|
| ilk sahipliği tam 1281-01-01 olan nokta | **2526** (ilk dönem `s:` 2521 · `d:` 5) |
| ✅ künye `bolge` kıtası = nokta kıtası | 2124 |
| 〰 bulanık sınır çifti (Avrupa↔Asya, K.Afrika↔Asya/Avrupa/Sahra-altı, Asya↔Okyanusya) — SAYILMADI | 351 |
| ⚪ künye `bolge`'si yok | 34 (hepsi `__BOSLUK__` — kasıtlı boşluk, kimlik değil) |
| 🔴 kıta aşıyor (ham) | 12 |
| ⤷ **benim kutu hatam** — Eritre kıyısı (lat 13-17, lon 38-43) Asya sayılmış: `habesistan` 6 + `adal` 1 (Asmara, Keren, Nakfa, Ginda, Debarwa, Zula, Aseb) | 7 ❌ yanlış alarm |
| ⤷ **GERÇEK kıta aşan** | **5** |

**Bulanık 351'i de açtım** (kimlik × çift): `altinorda` Asya→Avrupa 59 · `nube` 45 · `memluk`
37+27+6 · `ilhanli` 25 · `selcuklu` 22+4 · `venedik` (Girit/Kıbrıs → "K.Afrika") 19 · `novgorod`
16 · `hafsi`/`zeyyani` (Tunus/Cezayir lat > 35 → "Avrupa") 4 … Hepsi kutularımın kaba
sınırından (Anadolu'yu Avrupa, Girit'i K.Afrika saymam) doğan payı; aralarında okyanus ya da
Sahra aşan bir yanlış GÖRMEDİM. ⇒ Bulanık kova "temiz" DEĞİL, "bu ölçütle ölçülemedi"dir.

### B.1 — Gerçek 5 nokta ve ikinci bir kusur aynı kayıtlarda

| nokta | bugün | sorun 1 (1281) | sorun 2 (1867 sonrası) |
|---|---|---|---|
| Alatna / Allakaket (66,6 K / 152,7 B) | `ingiltere 1281→1763` · `ingiliz-kuzey-amerika →1867` · `kanada 1867→1923` | İngiltere 1281'de Alaska içinde YOK | Alaska 1867'de ABD'ye satıldı — `kanada` YANLIŞ |
| Nuchalawoya (Tanana) | aynı zincir | 〃 | 〃 |
| Telida / Denali eteği | aynı zincir | 〃 | 〃 |
| Nikolai (Yukarı Kuskokwim) | aynı zincir | 〃 | 〃 |
| Natashquan (50,2 K / 61,8 B, Quebec) | `fransa 1281→1763` · `ingiliz-kuzey-amerika` · `kanada` | Fransa 1281'de Kuzey Amerika'da YOK (komşu Mingan `fransa 1679`, Gaspé `1534`) | — (Quebec, doğru) |

**Sorun 2'nin sınıf taraması** (Alaska kutusu: boylam < −141, enlem > 51 — 39 nokta): 1900'de
sahibi `abd` 32 · **`kanada` 5** · sahipsiz 2. Beşinci: **Fort Yukon** (`ingiliz-kuzey-amerika
1847→1867` · `kanada 1867→1923`) — HBC karakolu Rus Alaskası'ndaydı; `kanada` dönemi yanlış.

**Öneri (uygulama koordinatörde; künye/kaynak işi):**
- 4 Alaska içi nokta: ilk sahip `ingiltere` → komşularının kullandığı yerli kimlik (ör. 174 km'deki
  Vashrąįį K'ǫǫ `dene 1281 → abd 1899`; `dene` künyesi VAR) — kaydın kendi `not:`'u (HNAI c.6
  Subarctic) dayanak; `ingiliz-kuzey-amerika` ve `kanada` dönemleri kaldırılıp 1867-10-18'den
  `abd`. Rus dönemi (Rus-Amerikan Şirketi) iç kesimde fiilî mi — **ölçmedim**, kaynak ister.
- Fort Yukon: `kanada 1867→1923` yerine `abd` (HBC 1869'a kadar orada kaldı — kaynakla
  günlenmeli; ölçmedim).
- Natashquan: `fransa 1281` yanlış; yerli sahip **Innu** — `devletler.js`'te `innu` künyesi
  YOK (ölçüldü). Künye kararı koordinatörün.

### B.2 — Ölçemediğim
Kıta ölçütü yalnız okyanus/Sahra aşan yanlışı görür. "Devlet aynı kıtada ama o bölgede
değildi" (ör. `ilhanli` yerine `cagatay`, `altinorda` yerine `novgorod`) sınıfı bu ölçütle
**ölçülemedi**; onun için kimlik başına atlas-dışı bir menzil (kaynaklı sınır) gerekir —
`D204`ün asıl yöntemi, 234 kimlik × kaynak = ayrı bir iş.

### B.3 — Öngörü × ölçüm
| öngörü | ölçüm | |
|---|---|---|
| kıta aşan 15–40 | **5** (+7 yanlış alarm) | ❌ fazla tahmin |
| mekanizma: Avrupa sömürge kimlikleri UFUK tabanına geriye çekilmiş, Afrika/Asya kıyılarında da | yalnız Kuzey Amerika'da 5; Afrika/Asya'da 0 | ❌ yarım — mekanizma doğru, yaygınlık değil |
| ters yön 0 | 0 | ✅ |
| ÖNGÖRÜLMEYEN | aynı 4 kayıtta + Fort Yukon'da `kanada` Alaska'yı 1867-1923 boyuyor | |

## A. Ölçüm — "ezelden beri var" kapısı

**Kim yaptı:** iki araştırma alt ajanı (bu oturumun, Opus; WebFetch YOK — `curl`/`urllib` ile ham
metin, akademik özetler Europe PMC / OpenAlex'ten) — Kuzey Amerika + Taino 113 · Afrika 81.
Nokta başına sonuç, alıntı ve URL: **[`ONCE1281-GERIYE-KAPI-1004-kur-onerileri.json`](ONCE1281-GERIYE-KAPI-1004-kur-onerileri.json)**
(194 kayıt, girdiyle aynı sıra; alanlar `ad · kova · oneri_kur · kaynak · alinti · not · tabaka`).
**Benim doğrulamam (örneklem, kaynağı kendim açtım):** Kittigazuit — Parks Canada *"…between
1400 and 1900."* ✅ · Moundville — Encyclopedia of Alabama *"founded around 1120"* ✅ · Lokoja —
Britannica *"in 1860 … William Balfour Baikie founded Lokoja."* ✅ · Hall Beach — Canadian
Encyclopedia 403 verdi, **açamadım** (⚪). 3/3 açılan tuttu; 191'i açmadım.

### A.1 — SONUÇ

| kova | Amerika | Afrika | **toplam** |
|---|---|---|---|
| 🟢 KAYNAKLI `kur:` (yıl ya da daha dar) | 7 | 6 | **13** |
| 🟡 KABA `kur:` (yüzyıl/dönem) | 29 | 16 | **45** |
| ⚪ KAPSAM DIŞI (`bulunamadı`) | 77 | 59 | **136** |

🔴 **Koordinatörün istediği tek sayı: 194'ün 58'ine kaynaklı ya da kaba bir `kur:` yazılabilir;
136'sı kapsam dışı beyanı olacak.**

Ama 58'in YÖNÜ ikiye ayrılıyor ve bu ayrım kampanyadan daha önemli:

| yön | nokta | ne demek |
|---|---|---|
| **`kur` < 1281** — nokta 1281'den önce de var | **17** (Amerika 16 · Afrika 1) | geriye açmaya HAZIR: Utqiaġvik ~1000 · Iglulik −2000 · Sanirajak ~1200 · Tikiġaq ~300 · Wales 770 · Kinngait ~1000 · Native Point ~1250 · SG̱ang Gwaay ~100 · Yuquot −2300 · Celilo −9000 · Spiro 800 · Zuni 700 · Etowah 1100 · Moundville 1120 · Ocmulgee 900 · Mound Key 500 · Pangani ~600 |
| **`kur` > 1281** — kaynak noktayı 1281'den SONRA kuruyor | **41** (Amerika 20 · Afrika 21) | 🔴 **BUGÜNKÜ HARİTA YANLIŞ:** atlas bunları 1281'den beri çiziyor. Ör. Lokoja 1860 · Makurdi ~1927 · Mutare 1890 · Butterworth 1827 · Onitsha 17. yy · Lagos ~1467 (KABA, Britannica "late 15th c.") · Kittigazuit 1400 · Knife River 1525 · Clyde River 1924 · Cambridge Bay 1921 · Gjoa Haven 1927 · Anaktuvuk 1949 … |

### A.2 — Üç önemli düzeltme / uyarı

1. **41 "sonra kurulmuş" nokta 1281 kampanyasının değil BUGÜNÜN kusurudur.** `kur:` yazılırsa
   motor 1281 → `kur` arası bu noktaların peteğini KOMŞUYA DEVREDER (`devir_kumesi`: `kur > g` VE
   `_sahipli`, `uret_petek.py:4937-4940`) ⇒ **delik açılmaz** (alt ajan "petek deliği açılır" dedi
   — koda göre YANLIŞ; noktalar 1281'den sahipli olduğu için devir koşulu sağlanır). Ama bugünkü
   çıktı DEĞİŞİR ⇒ veri koşusu ister. Ayrıca bir **modelleme kararı** var: Arktik köylerinin çoğu
   (Clyde River, Gjoa Haven, Arviat …) bir HALKI temsil eden çapa noktası olarak konmuş; köyün
   1920'lerde kurulması, o halkın bölgede olmadığı anlamına gelmez. `kur` yazılırsa çapa
   kaybolur ve bölge komşu çapaya düşer. Karar koordinatörün/Emre'nin.
2. **17 "önce" noktanın 3'ü MÖ** (Iglulik −2000, Yuquot −2300, Celilo −9000): `MOTOR-UFUK` §1.2
   — dizgi karşılaştırması MÖ'de sırayı tersine çeviriyor ⇒ motor yaması (MOTOR-LEGO kuyruğu)
   inmeden YAZILMAMALI. 0–999 arası 7 değer (`0100`, `0300`, `0500`, `0601`, `0700`, `0770`,
   `0800`, `0900`) sıfırla doldurulmuş — güvenli.
3. **KABA dönüşümü bir varsayım:** Afrika ajanı "early X. yy" → X01, "mid" → X34, "late" → X67
   kuralı kullandı (her kaydın `not`'unda yazılı). §4 "kaynağın desteklediği en kaba güvenli
   düzey" der; yüzyıl için `X01-01-01` savunulabilir, "mid/late" sayıları ise TÜRETİLMİŞ sayıdır —
   yazmadan önce koordinatör kuralı onaylamalı.

### A.3 — Alt ajanların bildirdiği yan bulgular (doğrulamadım, aday)
- **Hayalet/yanlış sahip adayı:** Tehuantepec `zapotek-krallik` 1281'den — Ancient Mesoamerica
  (2024): Zapotek akını ~1350/1370, başkent 1440. Tsegi (Canyon de Chelly) `navaho` 1281'den — NPS:
  Pueblolular kanyonu 1300'lerin ortasında terk etti. Lagos `benin-kralligi` 1281'den — Britannica:
  Benin hâkimiyeti "from the late 16th century".
- **Zayıf KABA'lar:** Zuni 700 (UNM sayfası turizm kaynağına dayanıyor) · Kinngait (tarih yanındaki
  Mallikjuaq Adası'nın) · Bobo-Diulasso (yalnız sözlü gelenek) · Klukwan ("over 300 years ago",
  yerel müze). Kullanmadan önce bakılmalı.
- **Okunamayan kaynaklar** (bot engeli): SAH Archipedia, ScienceDirect, Wiley, NOAA Alaska
  profilleri, Oxford Reference, Pawlowicz 2012 (Mikindani) — "yok" DEĞİL, "okunamadı".

### A.4 — Öngörü × ölçüm
| öngörü | ölçüm | |
|---|---|---|
| 🟢+🟡 ~30 / 194 | **58** | ❌ az tahmin |
| Afrika'da oran yüksek, İnuit/Dene'de çok düşük | Afrika 22/81 (%27) · Amerika 36/113 (%32) | ❌ — Amerika'da arkeolojik alanlar (Mississippi höyükleri, Arktik NHS'ler) çok iyi tarihli |
| ÖNGÖRÜLMEYEN | 58'in 41'i 1281'den SONRA kuruluş ⇒ bugünkü harita yanlış | |

## Sonuç — iki kapının ikisi de ölçüldü

- **A:** 194'ün **58**'ine `kur:` yazılabilir (13 kaynaklı + 45 kaba); **136** kapsam dışı beyan.
  58'in **17**'si geriye açmaya hazır (3'ü MÖ yamasını bekler), **41**'i bugünkü haritanın
  kusurudur (1281'den beri çiziliyor, sonra kurulmuş).
- **B:** kıta aşan "yeri yanlış" nokta **5** (4 Alaska + Natashquan) + aynı sınıfın 1867 yüzü
  **5** (Alaska'da `kanada`, Fort Yukon dahil). İnce sınıf (aynı kıtada komşu devlet) ölçülemedi.
