# BOLGE italya — Adım 2: kronoloji teyidi (15 Kasım 2026)

## 1. Ne ölçüldü (sayı)
`data/devletler.js` künye-içi kronoloji (bolge=italya):

| Ölçü | Sayı |
|---|---|
| künye | 119 (118 maddeli; `modena` maddesiz idi → 2 madde yazıldı) |
| künye-içi madde | 607 (+2 yeni = 609) |
| günü `YYYY-01-01` (yıl hassasiyeti) | 327 (%54) |
| `kaynak:` alanı boş madde | 76 |
| `odak_yer`/`yer_id` boş madde | 8 |
| `gun`/`ic_not` taşıyan (çelişki beyanı) | 1 / 6 |
| Ortaçağ evreni (68 künye) | 349 madde, 216 yıl-01-01 (%62), 58 kaynaksız |

Madde ayrıntısı (`künye, madde sırası, tarih, tür, kaynak var mı, yer`): scratchpad `it_kron.tsv` (607 satır; bu belgeye eklenmedi, ölçü yeniden üretilebilir: devletler.js'i vm ile yükleyip `bolge==='italya'` süz).

Ortaçağ künyeleri içinde **kaynaksız madde yoğunluğu** (kaynaksız / madde): cenova 8/10 · napoli 6/6 · papalik 5/6 · milano-dukaligi 5/5 · ferrara 4/4 · floransa 3/4 · toskana 3/4 · savoya 3/9 · siena 3/9 · mantua 3/9 · parma 3/13 · piza 3/12 · sicilya-kralligi 3/10 · bonacolsi 2/8 · sicilya-emirligi 2/13 · apulya-dukaligi 2/7 · sicilya-aragon 0/11. Bu 58 madde "Kaynak sırası"na göre ilk adımda: **kaynaksız = doğrulanmamış**.

## 2. Gerçekten teyit edilenler (kaynak okundu)
| Madde / künye ucu | Atlas günü | Kaynak okundu | Sonuç |
|---|---|---|---|
| Piza düşüşü (`piza` t, 1406-10-09) | 1406-10-09 | Treccani, Enciclopedia Italiana (1935) «Pisa», Storia: «(9 ottobre 1406)» | **DOĞRU** |
| Siena teslimi (`siena` t, 1555-04-17) | 1555-04-17 | Treccani EI (1936) «Siena»: «la città si arrese il 17 aprile 1555» | **DOĞRU** (not: Montalcino cumhuriyeti Temmuz 1559'a dek sürdü — adım 6) |
| Este Ferrara'dan çıkış (`ferrara` 1598 maddesi) | 1598-01-01 (yıl) | Chiappini, «1598: diario di una svolta», Fondazione Estense 1997 (künye `modena` kaynağı; bu oturumda yeniden okunmadı, künyedeki alıntı esas) | **GÜN EKLENDİ → 1598-01-29** (adım 7) |
| Bentivoglio başlangıç/bitiş | (atlasta ayrı madde yok) | Treccani EI «Bentivoglio»: 27 Şubat 1401; 2 Kasım 1506 gecesi | okundu, tek kaynak; `bologna-komunu` t=1506-11-11 ile aralık 9 gün: t papalık girişi olabilir, kaynaksız |
| Modena dükalığı sonu (11 Haziran 1859) | — | Archivio di Stato di Modena «Austro Estense Vienna» envanteri (asmo.cultura.gov.it): Francesco V 11 Haziran 1859'da ayrıldı | tek akademik/arşiv kaynağı; ilhak günü 1860-03-18 **okunmadı** |
| Urbino dükalığı başlangıcı (Oddantonio) | 1443-01-01 (madde) | Treccani EI «Urbino»: «ricevuta a Siena dalle mani di Eugenio IV il 25 aprile 1443» (künye f zaten bu gün) | **GÜN EKLENDİ → 1443-04-25** (adım 7) |
| Malatesta/Rimini | (atlasta yok) | Treccani EI «Malatesta»: gün YOK | bulunamadı |

**Çift teyit** (≥2 bağımsız akademik kaynak) hiçbir madde için tamamlanamadı; `ic_not`a "çift teyit" yazılmadı.

## 3. Çelişen / sorunlu maddeler (düzeltilmedi, listelendi)
1. `saluzzo-markizligi` maddeleri: künye t=1548-02-23, son madde 1549-01-01 (künye dışı, kaynağı Vikipedi tek kaynak; künye notu "gün teyitsiz"). DBI 1504'te bitiyor. **Okunmadı.**
2. `urbino-dukaligi:1` (1444-07-22 Oddantonio suikastı): kaynak yalnız Vikipedi → **doğrulanmamış**; Treccani DBI «Oddantonio da Montefeltro» okunmadı.
3. `gaeta-dukaligi:8` 1140-01-01 künye t=1136 sonrası; Gaeta Roger II'ye katılımı 1140 / 1136 farkı kaynakta yok.
4. `korsika-cumhuriyeti:0` (1553-08-17, Turgut Reis/Fransız ortak seferi) künye ömrü 1755-1769'un öncesinde; bu madde Korsika'nın *Cenova dönemi* olayıdır ama Cenova künyesinde değil. Taşınma önerisi: `cenova` künyesine (Treccani/TDV «Turgut Reis» günü okunmadı).
5. Künye f/t dışında görünen 73 madde ölçümünden 69'u antik künyedir (negatif yıl dizgi karşılaştırması sahte); gerçek ortaçağ künye-dışı: urbino:0 (düzeltildi), saluzzo:5, gaeta:8, korsika:0.
6. Yıl-hassasiyetli (`YYYY-01-01`) 216 ortaçağ maddesinden hiçbirine gün YAZILMADI (uydurma yasağı); gün kaynağı bulunan 2 madde (ferrara, urbino) düzeltildi.

## 4. Kaynak sırası sınırı
- TDV (`islamansiklopedisi.org.tr`): bu oturumda sorgulanmadı (Cloudflare riski + Osmanlı dışı İtalya maddeleri çoğunlukla TDV'de yok; künyeler zaten "TDV'de müstakil maddesi yok" yazıyor). **Okunmadı.**
- İSAM/TTK/DergiPark/YÖK: İtalyan şehir devletleri için **okunmadı**.
- Treccani (İtalyanca), Archivio di Stato di Modena: okundu (yukarıda).
