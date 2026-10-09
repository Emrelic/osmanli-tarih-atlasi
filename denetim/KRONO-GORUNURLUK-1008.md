# KRONO-GORUNURLUK-1008 — kronoloji maddesinin sitede görünürlüğü · `tur`/`onem`/`dunya` alanları

Oturum: KRONO-GORUNURLUK-1008 (UMIT, eski ZAMAN-Z7) · 9 Ekim 2026 · görev: UMIT İRTİBAT · ağaç `C:\atlas-kg` @ `origin/makine/umit` 8b2f5415

## ① ÖNGÖRÜ — eşleme uygulanmadan ÖNCE yazıldı
(①–④ ölçümleri bu yazıdan önce yapıldı; öngörü yalnız EŞLEMENİN etkisi içindir.)
- Kimlik eşlemesi (tur = k, yalnız k ∈ `TUR_GRUP`): 9 dosya · 477 madde → **278 eşlenir, 199 BOŞ** kalır
  (BOŞ: siyasi 172 · olay 18 · catisma 4 · temas 3 · toplumsal 2).
  Dosya dosya eşlenen: 500_1000 14 · ince_avrupa_amerika 16 · ince_dg_afrika 6 · ince_gd_asya 20 · ince_guney_asya 42 · ince_kuzey_amerika 7 · ince_misir_orta_asya 21 · once1281_iran 152 · senkron_0930 0.
- `SUZGEC.maddeGrubu` önce `k`ye bakar; değişen yalnız k ∉ KONU_GRUPLARI ama tur ∈ TUR_GRUP olanlar ⇒ **142 madde "Sınıflandırılmamış"tan gerçek gruba geçer**
  (askeri 56 · hanedan 56 · hukumdar 22 · olum 3 · toprak-kayip 2 · isgal 1 · din 1 · yikilis 1). iran dosyasında "diğer" 75 → 18.
- Görünürlük sayıları DEĞİŞMEZ: ODAK görünümü zaten 100% (varsayılan süzgeç puansızı gösterir); EK eşiği `dunya`ya bakar, `tur`a bakmaz.
- Kapılar: `denetle.py` (toprak iddiası `etiket`ten) değişmez · `denetle_kronoloji.py` (`tur` zorunlu alan DEĞİL) 81 İHLAL → 81 · `odak_olc` değişmez.
- onem/dunya/kapsam: dokunulmaz, 477'de boş kalır.

### Öngörü değerlendirmesi
- 278 eşlenen / 199 BOŞ → **278 / 199** ✓ (dosya dosya birebir).
- "Sınıflandırılmamış"tan çıkan 142 → **142** ✓; iran "diğer" 75 → **18** ✓.
- Görünürlük sayıları değişmez → ✓ (ODAK, EK4, EK3, EK1 dosya dosya aynı).
- `denetle_kronoloji` 81 → ikinci kez koşturulmadı; `tur` ZORUNLU listesinde yok (`ZORUNLU = ("t","b","onem","dunya","kapsam","kaynak")`, denetle_kronoloji.py:47) — bu bir mekanizma hükmüdür, ölçüm değil.

## ② NE ÖLÇTÜM

### Yöntem
`gorunur.js` (scratchpad): index.html'in `js/app.js`'ten ÖNCE yüklediği 67 betik AYNI sırayla koşar (paket demetleri dahil — tarayıcının yüklediği şey); `app.js`ten `var KRONOLOJI_ID_OZEL` … `(function odakKur()` arası (iki bağlama IIFE'si) ve `function birlesikTopla()` METİNLE kesilip eval edilir; `js/suzgec.js` gerçek modül (`SUZGEC.onemSuz`, `maddeGrubu`). Python kopyası YOK. Kesim işareti bulunamazsa ÖLÇÜLEMEDİ ile çıkar (odak_cozum.js emsali).
Betik hatası 2 (DOM): `data/acilis_siluet.js` (Element yok) · `js/geo_coz.js` — ikisi de kronoloji verisi değil, bağlamaya girdi değiller.
Varsayılan ayarlar `index.html`den: ODAK `ic=1 · bolge=1 · dunya=kapalı · puansiz=✓` (satır 506-552) · EK eşiği `4` (satır 479) · konu süzgeci yok (`ODAK_KONU=null`, app.js:15215).
Görünür = ① madde bir künyenin `kronoloji[]`ine iniyor (nesne kimliği, ya da aynı `t+b` ikizi zaten orada) ② o künye ODAK seçilince `odakSuz` geçiriyor ③ EK olarak eklenince `birlesikTopla` geçiriyor.

### ① iran dosyası sitede görünüyor mu
```
KRONOLOJI_COK_ONCE1281_IRAN   170 madde
  künyeye iner                           170/170
  ODAK listesi (devlet seçilince)        170/170 GÖRÜNÜR  (puansız → `puansiz:✓` varsayılanı geçirir)
  EK (başka devletin yanında) eşik 4       0/170 GİZLİ    (dunya yok → onem yok → 3 sayılır, app.js:15339)
  EK eşik 3                              170/170
  EK eşik 1                              170/170
```
⇒ **Görünür, ama yalnız kendi devleti seçilince.** EK sekmesinde varsayılanda HİÇ görünmez; sebep `tur` değil `dunya`. `tur` eşlemesi bu tabloyu DEĞİŞTİRMEZ (ölçüldü).
Bütün evren için (dosyalardaki 7.622 madde): iner 7.232 · ODAK 7.232 · **EK4 656** · EK3 2.401.

### ② `tur`u okuyan her süzgeç/sözlük (kronoloji MADDESİ için)
| yer | ne yapar | tanınmayan `tur` |
|---|---|---|
| `js/suzgec.js:84-90` `maddeGrubu` | konu grubu: ÖNCE `k` (KONU_GRUPLARI :36), yoksa `tur` (`TUR_GRUP` :259-286) | **"diger" (Sınıflandırılmamış)** grubuna düşer — elenmez; ama kullanıcı ⚙ konu süzgecinde "Sınıflandırılmamış"ı kapatırsa SESSİZCE gider |
| `js/app.js:15311` `odakSuz` → `ODAK_KONU` | yukarıdaki grupla süzer (yalnız kullanıcı konu seçerse) | aynı |
| `js/app.js:7842` Osmanlı listesi `suzgecSecim` | aynı `maddeGrubu` | aynı |
| `js/app.js:15555` detay başlığı | `m.tur || "madde"` — yalnız yazı | ham değer basılır |
| `js/suzgec.js:133` `bilinmeyenler()` | "bilinmeyen değer DIGER'e düşer ama GÖRÜNÜR" vaadi (:34, :83) | 🔴 **yalnız `k`yi sayar, `tur`u SAYMAZ** ve **app.js'te hiç ÇAĞRILMIYOR** (grep 0) ⇒ vaat edilen görünürlük bağlı değil |

Öteki `tur` sözlükleri BAŞKA kayıt türleri içindir, kronoloji maddesine değmez: `TUR_SIRA` (şehir, app.js:3973) · `HAREKET` (sefer, :5525) · `EKOKUMA_TUR` / `k.tur===tur` (ek okuma kartı, :12035 — GLM-B emsalinin sınıfı) · `DEVLET_TUR_ADI` (devlet dizini, :9640; sessiz eleme 11 Eylül'de kapatılmış) · kişi `TUR_ADI` · `_KH_TUR_ADI` (halka) · `_YA_TUR` (arama). Python: `denetle.py` toprak iddiasını `etiket`ten okur (:2163), `tur` okumaz.
**TUR_GRUP'ta OLMAYAN `tur` (bugün "diğer"e düşen):** rejim 102 · kurtulus 19 · bagimsizlik 6 · ilhak 4 (hepsi `1923_1945`) · tabi 21 (`once1281_anadolu` 17, künye-içi 4) · siyasi 3 (`1dunya_A`) · ateskes 2 (`sinir_avrupa_bati`) · hanedanlik 1 · olay 1 (künye-içi). ⇒ `1923_1945`te 131 madde "Sınıflandırılmamış". **Sessiz ELEME yok; sessiz SINIFSIZLIK var.**
**KONU_GRUPLARI'nda olmayan `k`:** siyasi 182 · hanedan 77 · hukumdar 60 · askeri 60 · toprak-kazanc 36 · toprak-kayip 28 · olay 24 · bolunme 7 · catisma 4 · olum 4 · temas 3 · birlesme 2 · isgal 2 · toplumsal 2 · yikilis 1 · din 1.

### ③ `tur`suz madde — dosya dosya (bütün `KRONOLOJI_*` + künye-içi; tekil nesne evreni 10.710)
```
kronoloji_cok_once1281_iran          170/170
kronoloji_cok_senkron_0930            68/68
kronoloji_cok_ince_guney_asya         56/56
kronoloji_cok_ince_avrupa_amerika     48/48
kronoloji_cok_ince_gd_asya            44/44
kronoloji_cok_ince_misir_orta_asya    35/35
kronoloji_cok_ince_dg_afrika          28/28
kronoloji_cok_500_1000                16/16
kronoloji_cok_ince_kuzey_amerika      12/12
öteki 101 dosya                        0
künye-içi (3.088 madde)                0
TOPLAM                               477  (dokuz dosya, her biri TAMAMEN tursuz)
```
⇒ **Bir SINIF, istisna değil:** bir dosya ya tamamen `tur`lu ya tamamen `tur`suz; `tur`suz dokuzun dokuzu `k:` taşıyor (`k`siz 0) — `olaylar*`ın eski `k:` şeması ile `KRONOLOJI_*`ın `tur:` şemasının karışması. Aynı dokuz dosya `onem/dunya/kapsam`ı da TAŞIMIYOR (477/477) ⇒ şemanın tamamı eski.
Kapı: `py arac/denetle_kronoloji.py` bu dokuzu ZATEN görüyor ("zorunlu alan eksik · onem/dunya 1-5 dışı · kapsam geçersiz"); toplam **109 dosya · 8.266 madde · 81 İHLAL · çıkış 1**. ⚠️ Bu kapı yayına BAĞLI DEĞİL (`denetle_yayin.py`de yalnız :1769 yorumunda anılıyor) — kırmızı ama kimseyi durdurmuyor.

### ④ `onem` ve `dunya` — tanım, yazan, okuyan, boşluk
- **Tanım:** `arac/denetle_kronoloji.py:20-27,47` — ZORUNLU alan, 1-5 tamsayı (0 ve 6+ ihlal), `dunya` aynı olayda dosyalar arası TUTARLI olmalı (⑦). `js/suzgec.js:142-169` — Emre'nin 10 Eylül tarifi: "5 çok önemli / … / 1 hiç önemli değil"; `onem` devletin KENDİ olayına, `dunya` dünya ölçeğine. 🔴 **`VERI-YAPISI.md`de `onem`/`dunya`/`kapsam` TANIMI YOK** (grep 0) — şemanın yazılı olduğu tek yer bir denetim betiği ve bir JS yorumu.
- **Yazan:** kronoloji içerik oturumları, elle (editoryal puan). Türeten araç yok.
- **Okuyan:** `suzgec.js:184-209 onemGecer` (ODAK listesi; üç dal VEYA) · `app.js:15339 birlesikTopla` (EK: `dunya ?? onem ?? 3`, eşik varsayılan 4) · `suzgec.js:788 disOnemGizliMi` (Osmanlı listesindeki `kapsam:"dis"` maddeler) · `suzgec.js:219 onemSay` (puansızı sayıp panele beyan) · `denetle_kronoloji.py` (şema).
- **Boş olunca:**
  ODAK: `onem` yok → `puansiz` ayarı karar verir (varsayılan ✓ ⇒ GÖRÜNÜR, "ölçülmedi ≠ önemsiz", suzgec.js:195) · `dunya` yok → dünya kurtarma dalı geçmez.
  **EK: ikisi de yok → 3 sayılır ⇒ varsayılan eşik 4'te GİZLİ.**
  Osmanlı dış eşiği: `kapsam:"dis"` + puansız → yalnız "hepsi"de · `kapsam` yok → İÇ sayılır, hiç gizlenmez.
  `denetle_kronoloji`: İHLAL.
- 🔴 Yan bulgu (sayıldı): **künye-içi 3.088 maddenin HİÇBİRİNDE `onem`/`dunya` yok** ⇒ EK olarak varsayılanda bunların hepsi de gizli. `suzgec.js:152`deki "DEVLETLER[].kronoloji onem %100" ölçümü (10 Eylül) künye-içi için bugün TUTMUYOR — o gün kronoloji dosyadan geliyordu, künye-içi maddeler sonra çoğaldı.

### ⑤ Yan bulgu — dosyada yazılı ama hiçbir künyeye inmeyen 390 madde
İlk sayımda 488 çıkmıştı; 98'i aynı `t+b` ile künyede ZATEN var (ekleyici ikinciyi eklemez, içerik görünür — `SINIR_GUNEY_G8`in 74'ü bu) ⇒ gerçek inmeyen **390**. Bunun **382'si taraf alanı OLMAYAN madde** (bölgesel `KRONOLOJI_<BÖLGE>`: ORTA_ASYA 69 · BALKAN 50 · IRAN_ARDILLARI 47 · HINDISTAN 30 · DOGU_AFRIKA 28 · ANADOLU 27 · GUNEY_ASYA 20 · SIRBISTAN 19 · KUZEYAFRIKA 18 · ARABISTAN 17 · ITALYA_SEHIR 15 · CIN 12 · OZBEK 12 · JAPONYA 9 · MISIR 9). `KRONOLOJI-COK-1006` bunu konsola basıyor; sınıf bilinen, sayısı bugün 382. Kalan 8: SINIR_ASYA 3 · LEHISTAN 1 · LIBYA 1 · GUNEY_AMERIKA 1 · ONCE1281_ANADOLU 1 (Nakşa 1205, ZAMAN-Z7'de bildirildi) · INCE_GUNEY_ASYA 1.

## ②b EŞLEME — `KRONO-GORUNURLUK-1008-TUR.diff`

**Şart 1 — k→tur tablosu, TAM LİSTE.** Kural: `tur = k`, YALNIZ `k` ∈ `SUZGEC.TUR_GRUP` anahtarları (gerçek modülden okundu). Başka hiçbir çeviri yapılmadı — `siyasi`→`siyaset` gibi "bariz" olanlar DAHİL.
| k | → tur | madde | dosyalar |
|---|---|---|---|
| savas | savas | 67 | 500_1000 2 · ince_guney_asya 13 · once1281_iran 52 |
| hanedan | hanedan | 56 | once1281_iran 56 |
| askeri | askeri | 56 | ince_avrupa_amerika 15 · ince_dg_afrika 4 · ince_gd_asya 16 · ince_misir_orta_asya 21 |
| fetih | fetih | 34 | 500_1000 3 · once1281_iran 31 |
| antlasma | antlasma | 26 | ince_guney_asya 10 · ince_kuzey_amerika 5 · once1281_iran 11 |
| hukumdar | hukumdar | 22 | 500_1000 3 · ince_guney_asya 19 |
| idari | idari | 4 | 500_1000 1 · ince_dg_afrika 1 · ince_gd_asya 1 · ince_kuzey_amerika 1 |
| olum | olum | 3 | ince_gd_asya 3 |
| toprak-kayip | toprak-kayip | 2 | 500_1000 2 |
| kurulus | kurulus | 1 | 500_1000 |
| isgal | isgal | 1 | 500_1000 |
| vassal | vassal | 1 | 500_1000 |
| ekonomi | ekonomi | 1 | ince_avrupa_amerika |
| diplomasi | diplomasi | 1 | ince_dg_afrika |
| din | din | 1 | ince_kuzey_amerika |
| yikilis | yikilis | 1 | once1281_iran |
| isyan | isyan | 1 | once1281_iran |
| **toplam** | | **278** | |

Eşlemenin dayanağı (ölçüldü): hem `k` hem `tur` taşıyan 258 maddede ikisi **202'sinde (%78) birebir aynı**; farklı olanlarda `tur`, `k`nin daha özel alt türü (hanedan→hukumdar 16, fetih→toprak-kazanc 7 …) — kimlik eşlemesi hiçbir grupla çelişmiyor.

**Şart 2 — eşlemesi olmayan `k` BOŞ kaldı (199 madde):** siyasi 172 (senkron_0930 68 · ince_avrupa_amerika 30 · ince_gd_asya 24 · ince_dg_afrika 22 · ince_guney_asya 14 · ince_misir_orta_asya 14) · olay 18 (once1281_iran) · catisma 4 (500_1000 2 · ince_kuzey_amerika 2) · temas 3 · toplumsal 2. `senkron_0930` dosyasına HİÇ dokunulmadı (68/68 siyasi).

**Şart 3 — elle doğrulama: 33 madde** (her dosyanın her `tur`undan 1, 20'yi aşan gruptan 2; başlık + anlatı okunarak).
31 ✅ uygun. 2 ⚠️ — ikisi de eşlemenin değil `k`nin kusuru (eşleme `k`ye sadık):
- `500_1000` 0820 "Ziyâdî emîri İbn Ziyâd Zebîd şehrini kurdu" — `kurulus` devlet kuruluşu anlamında kullanılıyor, burada ŞEHİR kuruluşu.
- `ince_guney_asya` 1790 "Haydarabad … İngilizlerle ortak cephe kurdu" — içerik `savas` değil `ittifak`.
Uygun örnekler: 0637 Halep → fetih · 0642 Nihâvend → savas · 0787 Rüstemî imamı öldü → hukumdar · 0870 Katâi'ye taşınma → idari · 0911 Zerenc / Saffârî Leysî kolunun sonu → toprak-kayip · 0964 Musul Büveyhî işgali → isgal · 0963 Sicilmâse Fâtımî nüfuzu → vassal · 1170 Novgorod-Suzdal → askeri · 1855 Approuague altını → ekonomi · 1286 Kalavun'un Nûbe seferi → askeri · 1850 Vedây başşehri → idari · 1880 Bargaş-Mirambo → diplomasi · 1615 Osaka Kalesi → askeri · 1887 Hindiçini Birliği → idari · 1389 Hayam Wuruk öldü → olum · 1748 Nizâmülmülk öldü → hukumdar · 1665 Purandar → antlasma · 1771 Nain misyonu → din · 1870 Rupert's Land devri → idari · 1874 4 Numaralı Antlaşma → antlasma · 1248 Muvahhid halifesi Tilimsân'da öldürüldü → askeri · 1884 Berber ensar eline geçti → askeri · 1001 Gazneli-Karahanlı antlaşması → antlasma · 1001 Revvâdî Memlân öldü → hanedan · 1161 Arslanşah tahta çıktı → hanedan · 1007 Belh Savaşı → savas · 1150 Gurlular Gazne'yi yaktı → savas · 1017 Hârizm ilhakı → fetih · 1204 Nîşâbur-Merv-Serahs → fetih · 1104 Dımaşk melikliği sona erdi → yikilis · 1259 Rus vergi isyanları → isyan.

**Nesne düzeyinde doğrulama** (`dogrula.js`, HEAD ↔ diff sonrası her madde): 477 madde · 278 eşlendi · 199 boş · **hata 0** — eklenen `tur` dışında hiçbir alan değişmedi; `onem/dunya/kapsam` 477'de aynı, hâlâ BOŞ.
**Etki (gerçek işlevlerle):** "Sınıflandırılmamış" −142 (iran 75→18 · 500_1000 8→2 · ince_avrupa_amerika 47→32 · ince_dg_afrika 26→22 · ince_gd_asya 43→24 · ince_guney_asya 33→14 · ince_kuzey_amerika 6→5 · ince_misir_orta_asya 35→14) · görünürlük (iner/ODAK/EK4/EK3/EK1) **değişmedi**.
Kapılar: `node --check` 9/9 · `git apply --check` ağaçta ve bugünkü `C:\atlas-umit`te ✓ · CR 0 · 8 dosya, 278+/278− satır.
**onem / dunya / kapsam: DEĞER YAZILMADI. 477 maddede BOŞ — beyan.** Sonucu: bu 477 madde EK'te varsayılanda gizli kalır ve `denetle_kronoloji` onları ihlal saymaya devam eder.

## ③ NE BULAMADIM / ÖLÇMEDİM
- Tarayıcıda gerçek tıklama yapılmadı; ölçüm app.js'in kesilen işlevleri + gerçek suzgec.js ile node'da. `localStorage`'da kayıtlı kullanıcı ayarı varsayılanı değiştirir — ölçüm "ilk açılış" içindir.
- `denetle_kronoloji` eşlemeden sonra yeniden koşturulmadı (mekanizma: `tur` zorunlu değil).
- 33 madde elle doğrulandı; kalan 245 eşleme yalnız mekanik (`k`ye sadık).

## ④ NE İSTİYORUM
1. `KRONO-GORUNURLUK-1008-TUR.diff` uygulansın (yalnız sınıflandırma; görünürlüğü değiştirmez).
2. Asıl görünürlük kusuru `dunya`dır, `tur` değil: 477 dosya maddesi + 3.088 künye-içi madde EK varsayılanında gizli. Seçenekler (karar senin):
   (a) puan geçişi — editoryal oturum, `denetle_kronoloji` ⑦ tutarlılığıyla;
   (b) app.js:15339'da puansız EK maddesini 3 yerine "puansız" say ve ODAK'taki gibi `puansiz` kutusuna bağla (Z2) — "ölçülmedi ≠ önemsiz" ilkesinin EK'e taşınması.
   Önerim: (b) hemen, (a) sonra.
3. `js/suzgec.js` (arayüz kalemi): `TUR_GRUP`'a `rejim · kurtulus · bagimsizlik · ilhak · tabi · ateskes · siyasi` (157 madde "diğer"den çıkar); `bilinmeyenler()` `tur`u da saysın ve panele bağlansın.
4. `VERI-YAPISI.md`ye `onem/dunya/kapsam/tur/k` tanımı (koordinatör dosyası) — bugün tek tanım `denetle_kronoloji.py`de.
5. `denetle_kronoloji.py` (81 İHLAL, çıkış 1) yayına bağlı değil — bağlamak ya da tavanlamak koordinatör kararı.

## Dosya listesi (`C:\atlas-umit\denetim\`e kopyalandı; commit/push YOK)
- `denetim/KRONO-GORUNURLUK-1008.md` — bu rapor
- `denetim/KRONO-GORUNURLUK-1008-TUR.diff` — 8 dosya, 278 maddeye `tur` eklendi (temel 8b2f5415)
- Araçlar scratchpad'de (depoya girmedi): `gorunur.js` · `tur_esle.py` · `dogrula.js` · `tur_tablo.json`

## § v2 (1009) — KUYRUK-2-1009
Ölçen KUYRUK-2-1009 · taban `origin/main` 0c4b383c (fetch sonrası) · ikinci taban: main + `ZAMAN-PAKET-1009.diff` (`-C1`) · ağaçlar `C:\atlas-umit-k2a` / `-k2z` (kaldırıldı) · commit yok.
Yöntem: hunk hunk `git apply --check` ileri/geri (+ satır içerik araması); İNDİ denen her şey iki yönde: ① iniş commit'inin ATASINA diff uygulandı, dosyalar commit ile `git diff --quiet` karşılaştırıldı ② bugünkü HEAD'de `-R --check`.
`denetle.py` (`PYTHONHASHSEED=0 --ayrinti`): main önce/sonra ve ZAMAN önce/sonra — DÖRT koşu da **çıkış 2** (yalnız D8 ÖLÇÜLEMEDİ, UMIT tabanı). Önce↔sonra çıktıları **bayt bayt aynı** (B+C birlikte uygulanmış hâl, iki tabanda). ⇒ DEĞİŞEN SAYAÇ YOK; "kaç bekleyen diff dokunuyor" satırı boş küme. Taban kaydı (main): D1 309/309 · D2 628/0 · 2s 1738 · AÇIK 181 (tavan 181) · 2sk yalnız-taraf 2265 (tavan 2265).

### Ölçtüm
| diff | temiz main | main + ZAMAN-PAKET | kova |
|---|---|---|---|
| `-SUZGEC.diff` (`js/suzgec.js`, 2 hunk) | ✓ 2/2 | ✓ | TEMİZ |
| `-TUR.diff` (8 dosya, 69 hunk) | ✗ — 68 TEMİZ · 1 ÇAKIŞMA: `kronoloji_cok_once1281_iran.js @@-7` (152/152), 1 `−` satırı main'de yok | ✓ 69/69 | **PAKETTEN SONRA TEMİZ** — o satırı ZAMAN-PAKET (Z7-MADDE) getiriyor; TUR o hâle göre yazılmış |
| `-TUR2.diff` (6 dosya, 60 hunk) | ✓ 60/60 | ✓ | TEMİZ |
Sıralı zincir SUZGEC → TUR → TUR2: main'de TUR ✗, ötekiler ✓ · ZAMAN tabanında üçü de ✓.
ZATEN MAIN'DE 0 · geçersiz varyant 0. Sayaç değişimi yok (kronoloji kuyruğu ve `suzgec.js` Değişmez evreninde değil).

### Bulamadım
—

### İstiyorum
- v2 YAZILMADI: **TUR paketten sonra temiz**; SUZGEC ve TUR2 bugün de temiz.
- İniş sırası: ZAMAN-PAKET → SUZGEC → TUR → TUR2. ⚠️ TUR2 metin olarak SUZGEC'siz de uygulanır ama ANLAMCA ona bağlı (`siyasi` TUR_GRUP'a SUZGEC ile giriyor, -DEVAM ②a) ⇒ TUR2, SUZGEC'ten önce inmesin.
- Dosya çakışması bekleyenlerle: ZAMAN-PAKET `kronoloji_cok_once1281_iran.js`e dokunuyor (yukarıdaki sebep). Başka bekleyen bu sekiz dosyaya dokunmuyor (ZAMAN-PAKET dosya listesinden okundu; Z6 v2 henüz yok — ölçülemedi).
**YENİ DOSYALAR:** yok.

## § v2b (1009) — KAPSAM DARALDI (UMIT İRTİBAT), paket tabanında birlikte ölçüm
Taban: `origin/main` **0e9e8f71** (0c4b383c'den farkı yalnız 3 belge dosyası, veri/araç yok) + `ZAMAN-PAKET-1009.diff` `-C1` · ağaç `C:tlas-umit-k3` (kaldırıldı).
- Üçlü BİRLİKTE, sırayla SUZGEC → TUR → TUR2: **üçü de ✓** paket tabanında ⇒ **v2 YAZILMADI, paketten sonra temiz.**
- **+ satırı araması (yöntem dersi):** TUR 278/278 ve TUR2 172/172 satır çiftinde `−` ile `+` arasındaki TEK fark eklenen `tur` alanı (JSON tırnaklı anahtar dahil) ⇒ hiçbir + satırı başka bir alanın ESKİ değerini taşımıyor; BAYAT satır 0.
- Temiz main'deki TUR çakışması **gerçek çakışma değil, TABAN farkı**: `kronoloji_cok_once1281_iran.js`te main'de olmayan TEK `−` satırı (1026-01-08 "Gazneli Mahmud Somnat Kalesi'ni fethetti") ZAMAN-PAKET'in + satırıdır (doğrulandı). TUR o hâl üzerine yazılmış.
- `odak_olc.py` (Z → Z+B): **bayt bayt aynı**, çıkış 0 (TUR/TUR2'nin eklediği `tur` alanını odak çözümü okumuyor). `denetle.py`: önceki ölçümde (0c4b383c, aynı veri) bayt bayt aynı.
- **Kaç diff dokunuyor:** B hiçbir sayacı değiştirmiyor ⇒ B için satır boş küme. (SEKME sayaçlarına dokunanlar C'de.)
