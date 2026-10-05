# UMIT-W9-ZINCIR-1006 — `zincir_kaynagi:` (makine-okunur kopya beyanı) + bayat kopya kapısı

Görev: UMIT İRTİBAT → UMIT-W9-ZINCIR-1006 · ürün DİFF, uygulanmaz, commit yok.
Ağaç: `C:\atlas-w9` (origin/main 8552686e, detached). W6 ölçümü 3d89e4c4 üstündeydi
(arada 11 commit).

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi (2026-10-05)
Yalnız W6 raporu, `girdi.yukle`, `denetle.main` iskeleti ve VERI-YAPISI yerleşim şeması
okundu; hiçbir kopya kaydı açılmadı, hiçbir karşılaştırma koşmadı.
- **Ö1 — beyan yazılacak elle kopya:** 54 − 4 (kaynak adı yok: Radom · Uneyze · Chełm ·
  Kovel) − 5 (kopya bilerek ayrıldı: Darende · Soçi · Tuapse · Maykop · Dimetoka; beyan
  yazmak YALAN olur) = **45 ± 3** kayıt.
- **Ö2 — gerçek veride kapının bayat sayısı (veri diff'i uygulanmış hâl):** **7**
  (Arpaçay · Digor · Iğdır · Gümrü · Eçmiyadzin · Lublin + yönü ölçülemeyen Ceylanpınar).
  12 DEĞİL, çünkü W6'nın 12'sinin 6'sı üretici kaydıdır (Malak Dervent · Umur Fakih +
  zincirleme 4) ve görev gereği onlara elle alan yazılmaz. `isg:` karşılaştırmaya
  girdiği için **+0…3** ek bayat (kaynakta işgal örtüsü var, kopyada yok) olabilir.
- **Ö3 — origin/main'in 11 yeni commit'i** Revan kopyalarından hiçbirini düzeltmemiştir
  (0 ± 1 kayıt değişmiş).
- **Ö4 — `girdi.yukle` veri diff'iyle 1 UYARI satırı basar** (`zincir_kaynagi`
  BILINEN_ALANLAR'da yok — 45 kayıt); kapı diff'i tek başına UYARI basmaz.

## 1. ÖLÇÜM — öngörü ile karşılaştırma
| | Öngörü | Ölçüm | |
|---|---|---|---|
| Ö1 beyan yazılan elle kopya | 45 ± 3 | **45** (46 parça; Şeyh Salû iki kaynaklı) → sonra Arpaçay ÇIKARILDI (Emre kararı) ⇒ **44** | ✓ |
| Ö2 gerçek veride bayat (bütün elle beyan) | 7 (+0…3 isg) | **8** (Arpaçay'sız) · Arpaçay'lı ilk koşu 9 | ✓ (aralıkta) |
| Ö3 11 yeni commit Revan kopyalarını düzeltti mi | 0 ± 1 | **0** — Gümrü/Eçmiyadzin/Digor/Iğdır hâlâ bayat | ✓ |
| Ö4 UYARI satırı | 1 | **1** (denetle.py'de 1, odak_olc.py'de 1) | ✓ |

Öngörünün TUTMAYAN tarafı (adıyla): beklemediğim iki bayat **Wiltz** (yalnız `isg:` —
Lüksemburg'un 1914-08-02→1918-11-20 Alman işgal örtüsü kopyaya alınmamış) ve **Yagodina**
(`v:` 1830-10-17→1878-07-13 Kragujevac'ta `kid:"sirbistan-prensligi"`, kopyada kimliksiz).
W6 ikisine de AYNI demişti: W6 `isg:`yi karşılaştırmadı ve sahipliği `d > v > s` sırasıyla
okudu (`v:kid`i görmedi). VERI-YAPISI §d/v'ye göre doğru sıra **v → d → s**; kapı onu kullanıyor.

## 2. ALAN — tanım (VERI-YAPISI.md'ye girecek METİN; W7 kilidi kalkınca diff olacak)
> ### 🆕 `zincir_kaynagi:` — makine-okunur KOPYA BEYANI *(UMIT-W9-ZINCIR-1006, 6 Ekim 2026)*
> ```js
> zincir_kaynagi:{yer:"Revan", pencere:["1281-01-01","1534-01-01"], tur:"pencere"}
> zincir_kaynagi:[{yer:"Nusaybin",         pencere:["1281-01-01","1918-10-30"], tur:"birlesim"},
>                 {yer:"Malikiye (Derik)", pencere:["1918-10-30","1923-10-29"], tur:"birlesim"}]
> ```
> **OPSİYONEL — yalnız zincirini (ya da bir penceresini) BAŞKA BİR KAYITTAN KOPYALAMIŞ
> kayıtta bulunur.** Değer tek NESNE ya da NESNE LİSTESİ (birden çok kaynak: her parça
> kendi kaynağı ve penceresi).
>
> | Alan | Anlamı |
> |---|---|
> | `yer` | Kaynak kaydın `ad:`ı — TAM eşleşme (parantezli ad dahil). Kendisi olamaz |
> | `pencere` | `["f","t"]`, `YYYY-MM-DD`, `f < t`, yarı-açık `[f, t)` — dönem alanlarıyla aynı aralık |
> | `tur` | `birebir` (bütün zincir tek kaynaktan) · `birlesim` (zincir birden çok kaynaktan, T gününde bölünmüş — liste biçimi) · `pencere` (zincirin YALNIZ bir kısmı kopya) |
>
> **Ne demektir:** "bu kaydın `[f,t)` penceresindeki de jure sahibi (`v:`→`d:`→`s:`) ve
> `isg:` örtüsü, `yer` kaydınınkiyle AYNIDIR, çünkü oradan alındı." Bir ÖLÇÜM değil bir
> DEVRALMA beyanıdır — dayanağı `yer` kaydının `kaynak:`ıdır (`CLAUDE.md §4` komşu günü
> kuralı; zincirleme devralma yasak).
> **Kim okur:** `denetle.py` "bayat kopya" ek denetimi — kopya ile kaynak ayrıldıysa adıyla
> basar. Motor OKUMAZ. Üretici `ARAC-TR1923-YAZ` kendi kayıtlarına yazar.
> **Kurallar:**
> - Gün devri (tek kırılma günü kopyalandıysa) pencere o kırılmanın İKİ YANINI kapsar
>   (Çehrin 1362: `["1281-01-01","1569-07-01"]`) — yalnız sonrasını kapsarsa kaynak günü
>   ÖNE kaydığında kapı göremez.
> - Kopya bilerek kaynaktan AYRILDIYSA beyan SİLİNİR (kapı susturulmaz).
> - Kaynağın adı yoksa ("Darfur kümesi", "külliyat deseni") beyan YAZILMAZ — `yer` uydurulmaz.

## 3. KAPI — `arac/denetle.py` (ZINCIR-KAYNAGI-KAPI-1006.diff)
- İşlevler: `_zk_durum` · `_zk_yaz` · `zincir_kopya_karsilastir` · `zincir_kaynagi_denetimi` ·
  `zincir_kaynagi_rapor`; `main()`de Değişmez 8'den hemen önce "Ek denetim" satırı + `SONUÇ`un
  üstünde **ÖZET satırı** (`ÖZET · bayat kopya: N (…) · bozuk beyan: B · beyanlı kayıt: K`) —
  D265: sayı özette. Değişmez 7 / işgal bloğuna DOKUNMUYOR (W8'in 733 + işgal bloğu aynen
  basıldı, ölçüldü).
- Karşılaştırma: pencere içindeki bütün kırılma günlerinde (iki kaydın `s/d/v/isg` uçları)
  `(sahip, isg kümesi)` çifti. Ayrı dönem yazımı (A/B biçimi, bölünmüş aynı sahip) sahte
  bayat üretmez — sınandı.
- Hüküm: **bozuk beyan** (kaynak yok · tanımsız tur · ters/eksik pencere · kendine kopya ·
  boş liste) = İHLAL (0 tolerans). **Bayat** tavana bağlı; `BEKLENEN_BAYAT_KOPYA = None` ⇒
  "TAVAN YAZILMADI — yalnız bilgi" (görev: sabit yazılmaz). Tavan yazılınca aşan = ihlal,
  altı = "TAVAN GEVŞEK" uyarısı. Yalnız `isg:` farkı ayrıca etiketlenir; zincirleme (kaynak
  da beyanlı kopya) bilgi satırı.
- Alan yoksa: TEK bilgi satırı, ÖZET satırı yok, hüküm değişmez.
- **Uygulanma (CR 0):** origin/main tek başına ileri ✓ / -R ✗ · origin/main + D7-ISG-1006 →
  KAPI ileri ✓ / -R ✗ · ters sıra (KAPI → D7) de ✓. Diff D7 uygulanmış hâl üzerine üretildi.
- **③ tam çıktı karşılaştırması** (origin/main, veri yok, eski ↔ kapılı denetle): çıkış kodu
  2 = 2 (ikisinde de Değişmez 8 `devletler_harita.js` yok — taze ağaç); çıktı farkı **yalnız
  1 eklenen satır** (`Ek denetim i zincir_kaynagi: 0 kayıt beyanlı …`). Bir de `adal`/`katalan`
  satırlarının yer değiştirmesi var — eşit sayılı küme sıralaması, kapıdan bağımsız.

## 4. SINAV — `denetim/ARAC-ZINCIR-SINAV-1006.py` (KAPI diff'inde)
**23/23 kol tuttu** (origin/main + D7 + KAPI, verili ve verisiz). ① 16 kol (taban farkı ·
adıyla basma · ÖZET · yalnız isg · v:kid · pencere dışı/içi · 6 bozuk beyan · tavan aşan/içinde
· zincirleme) ② 4 (birebir aynı · A/B biçimi · bölünmüş dönem · liste biçimi) ③ 3 (beyansız
farklı kayıt görünmez · ihlal/ÖZET yok · tek satır) ④ gerçek veri (bilgi).
**İki yön:** `zincir_kopya_karsilastir` her zaman `[]` döndürecek biçimde bozulunca sınav
**7 kolda ÇÜRÜDÜ** (16/23, çıkış 1). W8'in `ARAC-D7-ISG-SINAV-1006.py`si aynı ağaçta GEÇTİ.

## 5. VERİ — ZINCIR-KAYNAGI-VERI-1006.diff (13 dosya, 32 kayıt)
Kilit gereği yalnız serbest 13 dosya: a78_avrupa · afrika · anadolu_0914 · ek13 · ek25 · ek26
(Arpaçay HARİÇ) · kdmacar · ok101 · ok107 · p0043libya · serhat · sibirya2 · sinir_dogu. Her
kayıtta yalnız `ad:"…",`dan sonra tek alan; CR 0; origin/main'e ileri ✓ / -R ✗; D7+KAPI+VERI ✓.
Digor dahil (ek26, Revan ankrajı).

**Bu 32 kayıtla kapı: 6 BAYAT** — Ceylanpınar ← Mardin (1516-08-24→1517-05-01 OSMANLI≠safevi
+ 1918-10-30→1921-10-20 kopyada `isg:fransa-cumhuriyet` var, Mardin'de yok) · Digor, Iğdır ←
Revan (1468-04-01→1469-01-01 karakoyunlu≠akkoyunlu) · Gümrü, Eçmiyadzin ← Revan (5 dilim:
1468 · 1635-36 safevi≠OSMANLI · 1827-28 isg:rusya · **1917-11-07→1920-12-02 sovyet-rusya ≠
transkafkasya/ermenistan-dc**) · Wiltz ← Lüksemburg (yalnız isg). Bozuk 0 · zincirleme 1
(Bacirge ← Yüksekova).

**SIRA BEKLEYEN 12 kayıt** (değerleri ölçüldü, kilit kalkınca eklenecek):

| dosya (sıra) | kayıt | zincir_kaynagi | bugün |
|---|---|---|---|
| yerlesimler.js (W8→W18→W9) | Bitlis | Van `["1281-01-01","1515-09-15"]` pencere | AYNI |
| 〃 | Divriği | Sivas `["1281-01-01","1381-01-01"]` pencere | AYNI |
| 〃 | Culfa | Nahçıvan `["1586-01-01","1603-10-21"]` pencere | AYNI |
| 〃 | Bolayır · Maydos (Eceabat) | Gelibolu `["1366-08-01","1376-09-01"]` pencere | AYNI ×2 |
| 〃 | Çehrin (Çigirin) | Kiev `["1281-01-01","1569-07-01"]` pencere | AYNI |
| p0037 (W8→W9) | Lovozero (Luyavr) | Kola, bütün zincir, birebir | AYNI |
| 〃 | Kahul (Cahul) | İsmail `["1456-06-01","1538-09-01"]` pencere | AYNI |
| 〃 | **Lublin** | Varşova `["1917-03-15","1918-11-11"]` pencere | 🔴 BAYAT (rusya-gecici/sovyet ≠ almanya) — W8'den sonra YENİDEN ÖLÇÜLECEK |
| 〃 | Białystok | Varşova `["1918-11-11","1923-10-29"]` pencere | AYNI |
| ek29 (W18→W9) | **Yagodina (Jagodina)** | Kragujevac, birebir | 🔴 BAYAT (v:kid) |
| 〃 | İshakçı (Isaccea) | Silistre `["1402-07-28","1419-01-01"]` pencere | AYNI |

**Beyan YAZILMAYAN elle kopyalar (10):** Arpaçay (Emre kararı bekliyor — ölçüldü: bayat,
Digor/Iğdır ile aynı fark) · bilerek ayrılmış 5: Darende · Soçi · Tuapse · Maykop · Dimetoka
(ölçüldü, kaynaktan farklı ⇒ beyan yalan olurdu) · kaynak adı olmayan 4: Radom · Uneyze ·
Chełm · Kovel.

**Üretilmiş dosyalar — ELLE YOK, "üretici yazacak (W6 TR1923-ELEK-1006)":** sinir_kuzey 16 +
sinir_guney 12 = 28 kayıt; 4 zincirleme köy (Küçükperveli · Beri · Kliçatak · Norapat) bunların
içinde. Önerilen değerler (W6'nın biçimiyle aynı: tek kaynak nesne, birleşim iki nesnelik liste):
- birlesim: Qaţţīnah [Ceylanpınar ‹1918-10-26› Rakka] · Ḩīmū, Babū [Nusaybin ‹1918-10-30›
  Malikiye (Derik)] · Jadlā’ [Akçakale ‹1918-10-30› Ayn el-Arab (Kobani)] · Gōrabī [Şemdinli
  (Şemdinni) ‹1918-11-08› Rewândiz]
- birebir `["1281-01-01","1923-10-29"]`: Mercihamis←Birecik · Sincan←İskenderun · Cibri←Cizre ·
  Kilise←Çölemerik (Hakkâri) · Tirwānīsh←İmâdiye (Amêdî) · Balıklı←Şemdinli (Şemdinni) ·
  Cumai←Silopi · Uluköy←Uzunköprü · Stérna←Orestiada (Kumçiftliği) · Távri←Ferecik (Feres) ·
  Küfkaynapınarı←Havsa · Karpuzlu←İpsala · Malak Dervent, Umur Fakih←Elhova (Elhovo) · Zazalo,
  Ts’q’altbila←Ahıska · Murvaneti←Batum · Saylıca←Şavşat · Makhalak’auri←Hulo (Acara) ·
  Norapat←Eçmiyadzin · Beri←Iğdır · Kliçatak (Suser)←Gümrü (Aleksandropol) ·
  Küçükperveli←Arpaçay (Akyaka)
- Bellekte benzetildi (32 elle + 28 üretici): **12 bayat** — yukarıdaki 6 + Stérna,
  Küfkaynapınarı (1361-01-01→05-05) · Malak Dervent, Umur Fakih (1369→1371) · **Norapat,
  Kliçatak** (1583-09-13→1604-06-08 ve 1724-1735 safevi≠OSMANLI: üretimden sonraki elle "gün
  komşudan" düzeltmesi kopyayı doğrudan kaynağından AYIRMIŞ).

## 6. "Gerçek veride 12 mi?" — farkın adıyla açıklaması
Tam evren (44 elle + 28 üretici, kilitler kalkınca) beklenen: **14** = 6 + Lublin + Yagodina +
6 üretici. W6'nın 12'sinden 14'e: **−1** Arpaçay (beyan yazılmıyor) · **−2 Küçükperveli, Beri**
(W6'da "zincirleme bayat"; kapı TEK ATLAMA sorar: kaynakları Arpaçay/Iğdır ile AYNILAR, çünkü
kaynak da aynı biçimde bayat) · **+5** Ceylanpınar · Stérna · Küfkaynapınarı (W6: "fark var, yön
ölçülemedi"; kapı yön değil ayrılık sorar) · Wiltz (`isg:`) · Yagodina (`v:kid`). Norapat ve
Kliçatak iki listede de var, ama kapı onları doğrudan kaynağına karşı BAŞKA bir farkla
(1583-1604) yakalıyor.
⚠️ **Kapının sınırı (ölçüldü):** zincirleme bayatlık tek atlamada görünmez. Revan düzelir,
Iğdır düzelmezse Beri temiz görünür — ama Iğdır'ın kendisi bayat basılır; ara halka düzelince
sıra Beri'ye gelir. Gerekirse "kök kaynağa kadar in" kolu ayrı iş.

## 7. UYARI — tam inşa koşusuna bağlılık
VERİ diff'i uygulanmış ağaçta (45 kayıtlık ilk hâl):
- `py arac/denetle.py` → **1 yeni UYARI satırı**: `UYARI alan: 'zincir_kaynagi'
  BILINEN_ALANLAR'da yok — 45 kayıtta (yerlesimler.js:Bitlis, …)`. (Öteki tek UYARI
  `dogrulanmadi`, önceden de var.) 13 dosyalık hâlde `girdi.yukle` aynı satırı 32 kayıtla basar.
- `py arac/odak_olc.py` → **1 yeni UYARI satırı** (aynı metin), çıkış 0; odak sonucu değişmedi
  (1 çözülmeyen atıf `Ogaden`, önceden var).
- Hüküm etkisi YOK (UYARI çıkış kodunu değiştirmiyor). Ama girdi.py'nin kuralı "yeni alanı
  AÇIKÇA kaydet" ⇒ **veri diff'i ancak `BILINEN_ALANLAR`a `zincir_kaynagi` girince temiz iner;
  girdi.py motor tuzu ⇒ tam inşa koşusuna bağlı.** girdi.py diff'i üretilmedi. Kapı diff'i
  veriden bağımsız iner (beyan 0 ⇒ tek bilgi satırı).

## 8. ÖNERİLER (hüküm koordinatörde)
1. **`BEKLENEN_BAYAT_KOPYA`**: veri diff'inin İNDİĞİ GÜNÜN ölçümü — 13 dosyalık diff ile **6**;
   kilitli 12 kayıt eklenince **8**; W6'nın üreticisi 28 kaydı yazınca **14**. Sabit 12 bugün
   gevşek olur (6 puanlık yeni bayat görünmez).
2. Revan ailesi (Gümrü · Eçmiyadzin · Digor · Iğdır + Arpaçay) Kafkas kampanyasına.
3. Wiltz `isg:almanya 1914-08-02→1918-11-20` ve Yagodina `v:kid` — kaynaklı düzeltme adayları.
4. Bilerek ayrılmış 5 kaydın serbest metnindeki "X deseni" cümleleri bayat — metin düzeltmesi.

## 9. Ağaç ve dosyalar
`C:\atlas-w9` sıfırlandı (origin/main 8552686e, temiz). Çıktılar `C:\atlas-umit\denetim\`:
ZINCIR-KAYNAGI-KAPI-1006.diff (denetle.py + ARAC-ZINCIR-SINAV-1006.py; D7-ISG-1006 üstüne) ·
ZINCIR-KAYNAGI-VERI-1006.diff (13 dosya, 32 kayıt) · UMIT-W9-ZINCIR-1006.md.
**VERI-YAPISI-ZINCIR-1006.diff ÜRETİLMEDİ** (W7 kilidi) — metni §2'de; sıram gelince W7'nin
diff'i üstüne üretirim. Commit yok.

## 10. EK — 1006b (p0037 · ek29 · VERI-YAPISI), 6 Ekim 2026
Taban zinciri: origin/main → D7-ISG → KAPI → VERI-1006 → POLONYA-ISG (1d3c8245) →
VIKIPEDI-DOGRULANMADI → JASENOVAC-BROD-1536 (20c393af) → ODAK-SEKME → VERI-YAPISI-DOGRULANMADI
(b4737774); hepsi `--index` ile uygulandı, ek diff onların üstüne alındı.

**Yeniden ölçüm (W8 ve W18'den sonra):**
| kayıt | kaynak | sonuç |
|---|---|---|
| Lovozero (Luyavr) | Kola, birebir | AYNI → beyan yazıldı |
| Kahul (Cahul) | İsmail `[1456-06-01, 1538-09-01)` | AYNI → yazıldı |
| Białystok | Varşova `[1918-11-11, 1923-10-29)` | AYNI → yazıldı |
| İshakçı (Isaccea) | Silistre `[1402-07-28, 1419-01-01)` | AYNI → yazıldı |
| **Yagodina (Jagodina)** | Kragujevac, birebir | 🔴 HÂLÂ BAYAT (W18'in diff'i Kragujevac/Yagodina'ya dokunmadı): `v:` 1830-10-17→1878-07-13 kopyada kimliksiz, kaynakta `kid:"sirbistan-prensligi"` → yazıldı, kapı basıyor |
| **Lublin** | Varşova `[1917-03-15, 1918-11-11)` | W8'den sonra `s:` kuyruğu Varşova ile AYNI oldu (rusya-gecici · sovyet-rusya). Kalan fark YALNIZ `isg:`: Lublin `avusturya` (1915-07-30→), Varşova `almanya` (1915-08-05→) — **tarihen DOĞRU fark** (Avusturya-Macaristan / Alman işgal bölgeleri). ⇒ **Beyan YAZILMADI**: alan sahip + isg'yi birlikte beyan eder; yazılsa kalıcı sahte "bayat" olurdu. Kural VERI-YAPISI metnine eklendi. |

**Alan biçimi DEĞİŞMEDİ** (nesne | nesne listesi). Lublin vakası bir "yalnız taban katmanı"
seçeneği ister mi? Bugün tek vaka ⇒ önerim: alan genişletilmesin, beyan yazılmasın.

**Ölçüm (zincirin tamamı + 1006b):** beyanlı 37 kayıt / 38 parça · **7 BAYAT** (Ceylanpınar ·
Digor · Iğdır · Gümrü · Eçmiyadzin · Yagodina · Wiltz) · bozuk 0 · zincirleme 1. Sınav 23/23.
denetle.py: `zincir_kaynagi` UYARI satırı 1 (37 kayıt); çıkış 2 yalnız Değişmez 8
`devletler_harita.js` yokluğundan (taze ağaç, önceden de öyle).

**Uygulanma (CR 0):**
- ZINCIR-KAYNAGI-VERI-1006b.diff: origin/main tek başına ileri ✓ / -R ✗ · zincirde ileri ✓ / -R ✗.
- VERI-YAPISI-ZINCIR-1006.diff: zincirde (W7'nin diff'i üstüne) ileri ✓ / -R ✗ · origin/main tek
  başına ✗ — beklenen: bölüm W7'nin `dogrulanmadi` bölümünün ardına, `kesinlik` başlığının önüne
  oturuyor; tablo satırı (`zincir_kaynagi`) `kur` satırının altına.

**Tavan önerisi güncel:** 13 dosya 6 → +1006b **7** (Lublin beyansız ⇒ 8 değil) →
yerlesimler.js'in 6 kaydı (hepsi AYNI) ile yine **7** → üretici 28 kaydı yazınca **13**.
**SIRADA:** yerlesimler.js (Bitlis · Divriği · Culfa · Bolayır · Maydos · Çehrin) — W18 bitince.

### 10.1 DÜZELTME — kilit değişikliği (`dogrulanmadi` → `kaynak_zayif`, W7 yeniden üretiyor)
§10'un üstündeki hâl GERİ ÇEKİLDİ, yayımlanan dosyalar daraltıldı:
- **ZINCIR-KAYNAGI-VERI-1006b.diff artık YALNIZ `data/yerlesimler_p0037.js`** (3 kayıt:
  Lovozero · Kahul · Białystok; Lublin beyansız). CR 0 · origin/main tek başına ileri ✓ / -R ✗
  · …→POLONYA-ISG zincirinde ileri ✓ · tam zincirde (…→ODAK-SEKME) ileri ✓ / -R ✗.
- **VERI-YAPISI-ZINCIR-1006.diff `denetim/`den KALDIRILDI** ve ek29 parçası (Yagodina ·
  İshakçı) diff'ten çıkarıldı: ikisi de W7'nin YENİ diff'lerinin üstüne yeniden kurulacak.
  Hazır metin/değerler §2 ve §10'da (VERI-YAPISI bölümü `kesinlik` başlığının önüne + `kur`
  satırının altına tablo satırı) — W7'nin bölüm adı değişeceği için yeri yeniden seçilecek.
- Tavan (koordinatör hükmü): **6**; her artış kendi commit'inde sabitle birlikte. 1006b'nin
  p0037 parçası bayat sayısını DEĞİŞTİRMEZ (3 kayıt da AYNI) ⇒ 6 kalır. Yagodina gelince 7.
