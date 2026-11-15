# BOLGE italya — Adım 1: künye envanteri (UMIT alt ajanı, 15 Kasım 2026)

Ölçüm: `origin/main` (8fb10bdf1) ağacı, `data/devletler.js` içinde `bolge:"italya"` = **119 künye** (`py` yerine node ile yüklendi; makine UMIT). Ortaçağ evreni (künye ömrü 0700-1550 ile kesişen, antik hariç) = **68 künye / 349 künye-içi madde**.

## 1. Ölçüm

| Küme | Sayı | Not |
|---|---|---|
| bolge=italya künye (tüm tarih) | 119 | KAPSAM-OLCUM-1114 ile aynı |
| Ortaçağ evreni (0700-1550) | 68 | |
| Yerleşim penceresinde HİÇ geçmeyen künye | 24 | aşağıda |
| `harita:` anahtarı olmayan (kendi kimliğiyle boyanan) künye | tümü BOYALAR'da | `renkler.py` ölçüldü: eksik 0 |
| İkiz/mükerrer künye çiftleri | 5 | aşağıda |

### 1a. Pencerede hiç geçmeyen 24 künye (1114 ölçümü 16 diyordu; 1550 sonrası + antik dahil sayıldı)
Ortaçağ (görev hedefi 16): sardinya-aragon, verona-scaliger, verona-komunu, aquileia-patrikligi, taranto-prensligi, urbino-dukaligi, padova-carrara, trento-piskoposlugu, capua-prensligi, torino-markizligi, apulya-kontlugu-melfi, lombard-birligi, pavia-komunu, ezzelino-signoria, visconti-signoria, della-torre-signoria.
Diğer: malta-ingiliz, malta-fransiz, malta-kolonisi, anglo-korsika-krallik, korsika-cumhuriyeti, lombardiya-venedik, bari-emirligi, insubres-kabile-devleti, bruttii-birligi.

Sebepler adım 4 belgesindedir (ikiz künye / vasal-alt yapı olup pencerede egemen devletin boyanması / gerçek eksik zincir; kesin sayım ölçülmedi, tek tek sınıflandırma adım 4'te verilen örneklerle sınırlıdır).

### 1b. İkiz künye çiftleri (aynı polity iki künyede; biri pencerede kullanılıyor)
| Kullanılan | Kullanılmayan ikiz | Not |
|---|---|---|
| della-scala (1277-01-01..1387-10-18) | verona-scaliger (1262-01-01..1387-10-19) | f/t farklı; ikisi de kaynaklı |
| carrara (1345-01-01..1405-11-17) | padova-carrara (1318-01-01..1405-11-22) | t 5 gün farklı; Padova penceresi 1318-1345 `__BOSLUK__` |
| visconti (1311-07-13..1395-05-11) | visconti-signoria (1277-01-01..1395-05-11) | |
| sardinya-piyemonte/aragon pencerede `aragon`,`ispanya` | sardinya-aragon (1326-01-01..1720-08-24) | Sardinya pencereleri `aragon`/`ispanya` kimliğiyle |
| verona-komunu (1136..1259) / ezzelino (1236-11-01..1259-10-01) / della-torre (1260..1277) | — | Verona penceresi 1164-1277 `__BOSLUK__` |

**Öneri (KASA/EMRELIC kararı):** ikizlerden biri kaynak günleriyle birleştirilmeli; ben birleştirmedim (hangi künyenin f/t'sinin kazanacağı hakem kararı ister).

## 2. Eksik devlet adayları (atlasta karşılığı YOK — `devletler.js` tüm bölgelerde arandı)
Kaynak okuma durumu açık yazılır; **gün hassasiyetinde kaynak okunamayanlar "bulunamadı/okunmadı"**.

| Aday | Yer | Yaklaşık süre | Kaynak durumu |
|---|---|---|---|
| Bentivoglio Signoria'sı (Bologna) | Bologna | **1401-02-27 .. 1506-11-02** | OKUNDU: Treccani, Enciclopedia Italiana «Bentivoglio»: Giovanni I 27 Şubat 1401'de signore ilan; «La notte del 2 novembre 1506 Giovanni abbandonò per sempre Bologna». Atlasta `bologna-komunu` künyesi 1114..**1506-11-11** (papalık girişi) olarak bu aralığı kapsıyor → ayrı künye gerekmez ama Bologna penceresinde 1401-1506 Bentivoglio hanesi adlandırılmıyor (adım 4) |
| Malatesta (Rimini) | Rimini | 13.-16. yy. | Treccani EI «Malatesta»: Verucchio'lu Malatesta 1239'da podestà; signoria «1295'e dek süren mücadeleden sonra» yerleşti; **gün YOK**. Bitiş (Cesare Borgia 1500 / Venedik / 1503) gün okunmadı |
| Montefeltro/Ordelaffi (Forlì)/Manfredi (Faenza)/Da Polenta (Ravenna)/Varano (Camerino)/Pico (Mirandola)/Pio (Carpi)/Malaspina (Lunigiana)/Gorizia Kontluğu/Treviso, Vicenza, Pistoia, Arezzo, Lodi, Novara komünleri | | 12.-16. yy. | **Okunmadı** (süre/gün kaynakla yazılmadı; uydurma yok) |
| Malta Şövalyeleri (1530-03-24..1798-06-12) | Malta | | Atlasta `rodos-sovalyeleri` (bolge=balkanlar, 1310-01-01..1798-06-12) olarak var; Malta penceresi bunu kullanıyor. Bölge etiketi italya değil — raporlanır |
| Monako | | 1297-01-08 .. | `monako` (bati-avrupa) var; Monako yerleşimi var |

Bu adımda **yeni künye yazılmadı**: Bentivoglio için ayrı künye gerekmediği, öteki adaylar için gün kaynağı okunmadığı için.

## 3. Künye uçlarında bulunan sorunlar (ölçüldü)
1. `ferrara` künyesi t=1859-01-01 (yıl), Ferrara kenti 1598-01-29'da papalığa geçti; Este devleti 1598 sonrası `modena` künyesiyle (t=1859-06-11) sürüyor. `ferrara` t'si yıl hassasiyetli ve modena ile çelişir (aynı polity iki künyede). `ferrara.t` DEĞİŞTİRİLMEDİ: künye "Ferrara/Modena" tek polity tanımı; birleştirme kararı hakemdir.
2. `modena` künyesindeki `ic_not_t` bayat ("veride Modena dönemi 1860-03-18'e kadar sürüyor"): yerleşim verisi şimdi 1859-06-11'de bitiyor.
3. `mantua` t=1708-01-01 (yıl), Mantova yerleşim penceresi 1707-04-02'de bitiyor (kaynakla ayrıca doğrulanmadı).
4. `saluzzo-markizligi`: künye t=1548-02-23 iken kronoloji maddesi 1549-01-01 (künye dışı); künyenin kendi `ic_not` notu 23 Şubat gününün doğrulanmadığını söylüyor (DBI 1504'te bitiyor). Hâlâ **okunmadı**.
5. `trento-piskoposlugu` t=1803-01-01 künye notu çelişki beyanı istiyor (Treccani 1802/1803 arasında).
6. `bologna-komunu` t=1506-11-11 (papa girişi); Treccani'ye göre Bentivoglio 2 Kasım'da ayrıldı — t'nin neyi tarihlediği künye notunda yok.

## 4. Üretilmiş ham dosya/tavan
Dokunulmadı. Çeviri hash'i: yalnız `kaynak`/`ic_not` ve tarih alanları değişti (adım 7), `b` metni değişmedi.
