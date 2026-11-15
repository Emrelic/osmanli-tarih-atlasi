# BOLGE italya — Adım 6: enklav/eksklav (15 Kasım 2026)

Ölçüm yöntemi: yerleşim pencereleri (adım 4 tablosu) + künye listesi. Haritada gerçek petek geometrisi bu oturumda **ölçülmedi** (üretilmiş harita ham dosyaları worktree'de yok; D8 ana checkout'ta ölçülemez).

| Konu | Atlasta durum (ölçüldü) | Hüküm |
|---|---|---|
| **Papalık Devleti** | `papalik` 0756-01-01..1870-09-20; Roma/Ravenna/Bolonya/Rimini/Ancona/Perugia pencereleri var; Benevento 1051-07-05..1861 `papalik` (enklav, Napoli içinde) modellenmiş; Avignon (Fransa içinde) `avignon-venaissin` ayrı künye | Benevento enklavı VAR; **Pontecorvo** (papalık eksklavı Napoli içinde; tarihleri okunmadı) adlı yerleşim **yok** → `bulunamadı`, kuyruğa |
| **San Marino** | yerleşim `San Marino (Monte Titano)` 1000..1739-10-17 / `papalik` 1739-10-17..1740-02-05 / 1740-02-05.. | Papalık-içi enklav modellenmiş, Alberoni işgali dahil. Gün kaynakları okunmadı |
| **Vatikan** | `vatikan` 1929-02-11.., yerleşim tek nokta | Roma peteği içinde; Değişmez 8 (şehir bölgesi ülke sınırı) ölçülemedi |
| **Venedik kara toprakları** (Terraferma) | Brescia 1426, Bergamo 1428, Padova 1405-11-17, Verona 1404-1405 (1404-04-08..05-25 Carrara BOŞLUK beyanı), Udine 1420-06-07, Belluno/Feltre 1404, Treviso/Vicenza yerleşimi **yok** | Treviso (1339) ve Vicenza (1404) — Venedik'in kara toprağının merkezleri — yerleşimsiz; petek emilimi komşu Padova/Belluno/Udine'ye gidiyor olabilir. **Ölçülmedi** |
| **Cenova** | Cenova kenti ve Korsika (Bastia/Ayacyo 1281..1768-05-15), Sassari 1281-1324, Alghero 1281-1354 `cenova`; Tabarka 1544.. | Ligurya sahili küçük kasabaları (Savona, Chiavari…) yok; Korsika 1755-1769 Paoli ve 1794-96 Anglo-Korsika **pencere yok** (künyeler 0 pencere) |
| **Trento / Brixen** prens-piskoposlukları | Trento pencere `almanya`; Brixen yerleşimi var (a78 dosyası) | Künye yerleşimsiz (Trento) → adım 4 kuyruğu |
| **Aquileia Patrikliği** (Friuli) | Aquileia 0553..1281 `__BOSLUK__` | künye 1077-04-03..1420 pencerede yok |
| **Piombino/Elba** | `piombino` 1399-02-19..1804-01-01; Elba 1399-02-19..1548 `piombino` | Enklav modellenmiş; Elba'nın 1548 sonrası `toskana` (Cosimo I) okunmadı |
| **Siena → Montalcino** | `siena` t=1555-04-17 | Montalcino'ya sığınan Senese Cumhuriyeti **Temmuz 1559'a dek** (Treccani EI «Siena») sürdü; atlasta künye/yerleşim **yok**. Yeni künye `siena-montalcino` adayı, gün **okunmadı** → kuyruğa |
| **Saluzzo** | `harita:saluzzo` 1142..1548-02-23, Piyemonte içinde enklav | Fransa/Savoya 1548-1601; pencere 1548 sonrası sahibi? **ölçülmedi** (yerleşim penceresi Saluzzo: 1028-1142 BOŞLUK beyanlı) |
| **Montferrat** | `montferrat-markizligi` 1000..1708, yerleşim Casale | Torino (Savoya) içinde enklav; Casale tek nokta |
| **Malta** | Malta adası: `sicilya-aragon` 1283-06-08..1530-03-24, `rodos-sovalyeleri` 1530-03-24..1798-06-12, `fransa-cumhuriyet` 1798-06-12..1800-09-05, `ingiltere` 1800-09-05.. | Pencere zinciri tam; künyeler `malta-fransiz`/`malta-ingiliz` 0 pencere (zinciri pencere başka kimliklerle — ikiz) |
| **Sardinya** | Cagliari `piza` 1281-1324-06-19 → `aragon` → `ispanya`; künye `sardinya-aragon` 0 pencere | `aragon`/`ispanya` kimlikleri adayı kullanıyor — hata değil ama ikiz künye |
| **Gorizia / Trieste / Pula** | Trieste `almanya` 1281-1382-09-30, `avusturya` 1382..; Pula `venedik` 1331.. | Gorizia Kontluğu künyesi yok; Görz `almanya` 1000-1500 |

**Değişmez 8** (şehir bölgesi ülke sınırını aşamaz): italya bölgesinde ölçülemedi (ana checkout). `push_kapısı` ayrı worktree'de ölçer.

**Öneri:** (1) Treviso/Vicenza + Montalcino için KASA'nın yerleşim kararı; (2) Pontecorvo yerleşimi; (3) Korsika 1755-69 ve 1794-96 pencereleri (künye var, pencere yok).
