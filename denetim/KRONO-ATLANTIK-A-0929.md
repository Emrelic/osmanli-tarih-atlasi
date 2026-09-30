# KRONO-ATLANTIK-A-0929 — Fransa · İspanya · Portekiz kronoloji denetimi ve dolgusu

29 Eylül 2026 · Dalga 2 · model Opus · şartname `oturumlar/KRONO-ATLANTIK-A-0929.md`

Ekler: [`-DUZELTME.md`](KRONO-ATLANTIK-A-0929-DUZELTME.md) · [`-YERLESIM-ONERI.md`](KRONO-ATLANTIK-A-0929-YERLESIM-ONERI.md) ·
[`-KUNYE.md`](KRONO-ATLANTIK-A-0929-KUNYE.md) · ham denetim `-bulgu-{fransa,ispanya,portekiz}.json` ·
taslaklar (doğrulama notlarıyla) `KRONO-ATLANTIK-A-0929-taslak/` · TDV önbelleği `-tdv-onbellek/`

## 0. Özet — sayılarla

| | ölçüm |
|---|---|
| Denetlenen madde | 428 (fransa 184 · ispanya 158 · portekiz 86), madde madde, üç ayrı denetimde |
| Bulunan tarih/metin kusuru | fransa 22 · ispanya 23 · portekiz 23 (sınıf: tarih-yanlış · sahte-kesinlik · metin-çelişki) |
| **Uygulanan düzeltme** | **30** (hepsi açılmış kaynakla; 23 tarih/metin + 6 adlı kaynak + 1 odak) → `-DUZELTME.md §1` |
| Uygulanmayan öneri (orta/düşük güven) | `-DUZELTME.md §2` — hüküm koordinatörde |
| Kaynak borcu | fransa **158/184** maddenin kaynağı yalnız "standart ders kitabı bilgisi"; ispanya ~72 adsız "standart akademik kaynak" → `-DUZELTME.md §4` |
| **Künye atfı kusuru** | `KRONOLOJI_FRANSA`'nın **92** maddesi (1792-09-22 sonrası) `fransa` (Krallık) künyesinde; `KRONOLOJI_ISPANYA`'nın **7** maddesi 1479 öncesi → `-DUZELTME.md §3` |
| **Yeni madde** | **163** — `kronoloji_cok_fransa.js` 27 · `kronoloji_cok_ispanya.js` 115 · `kronoloji_cok_portekiz.js` 21 |
| Yeni maddelerin odağı | 163/163 odaklı, kırık atıf 0 (`odak_olc.py --dosya`, üç dosya) |
| Harita önerisi | 31 yerleşim, dosya:satır + mevcut s: kaydıyla → `-YERLESIM-ONERI.md` |
| Künye önerisi | 2 yeni (mayorka · arborea) + 3 künye kusuru → `-KUNYE.md` |

## 1. Senkron defteri — A kolunun payı

`denetim/SENKRON-DEFTER-0929.json` → `paket["KRONO-ATLANTIK-0929"]`, 1125 kayıt. Bölüşüm aracı
`denetim/ARAC-KRONO-ATLANTIK-A-0929-BOL.py` (kural: kayıt hangi metropolün künyesine bağlıysa o kol; iki uçta
iki kol = ORTAK, A üstlendi — M-5419 ile B'ye bildirildi):

```
A 497 · B 575 · ORTAK 53  →  A+ORTAK 550 kayıt · 308 (gün,eski,yeni) grubu · 254 AÇIK grup
```

Açık grupların coğrafyası (`ARAC-...-SOMURGE.py`, grup ortalama koordinatı):

| bölge | açık grup | açık kayıt | hüküm |
|---|---|---|---|
| **metropol + Akdeniz + Levant** | **17** | **46** | **bu paketin işi — hepsi ele alındı (§2)** |
| Amerika | 153 | 212 | 🔴 SÖMÜRGE — yazılmadı. İspanya 92 · Fransa 35 · Portekiz 6 grup. PAKETSİZ Amerika tier'ına (DALGA 3) ait |
| Sahra-altı Afrika | 71 | 147 | 🔴 SÖMÜRGE — yazılmadı. Fransa-cumhuriyet 46 · Portekiz 17 · Fransa 5. Batı/Orta/Doğu Afrika tier'ına ait |
| Mağrib-Sahra (İspanyol/Fransız Sahrası 1884-1920) | 6 | 7 | 🔴 SÖMÜRGE — KRONO-MAGRIB / Afrika tier'ı |
| Asya-Okyanusya | 7 | 8 | 🔴 SÖMÜRGE — Güney/Güneydoğu Asya-Okyanusya tier'ı |

⇒ Şartnamenin öngörüsü doğrulandı: A kolunun açık yükünün **~%93'ü (237/254 grup) sömürge kırılmasıdır**,
metropol olayı değil. Grup listesi `denetim/KRONO-ATLANTIK-A-0929-gruplar.json` (`bolge` alanıyla).
⚠️ Sahra-altı kovasında 1 "acik" (1896-09-01 Vagadugu) var — sömürge, yazılmadı.

## 2. Metropol/Akdeniz açık grupları — tek tek

| gün | kırılma | yapılan |
|---|---|---|
| 1324-01-01 | Kalyari, Sasari ceneviz→aragon (yıl-temsilî) | 7 Aragon maddesi (1323-06-14 çıkarma · 1323-07-04 Sassari · 1324-02-07 Iglesias · 02-29 Lucocisterna · **06-19 Cagliari** · 1325 isyan · 1326-06-09 Pisa'nın çekilişi) + öneri: önceki sahip **Pisa**, Ceneviz değil |
| 1443-11-21 | Lüksemburg kasabaları →burgonya | madde 1443-11-22 (orta güven: gün yalnız ikincil kaynakta) |
| 1451-06-30 | Bordo ingiltere→fransa | madde (fransa+ingiltere; A. Curry, Gascon Rolls) |
| 1497-01-01 | Melîle (yıl-temsilî) | madde ZATEN VAR (`kronoloji_sinir_avrupa_bati.js` 1497-09-17) → öneri: harita günü |
| 1798-10-23 | Butrint fransa→OSMANLI | Fransız gözüyle madde (`ikiz_cekirdek: olaylar_ek5.js`) + öneri 10-25 |
| 1809-01-01 | Cres/Krk/Rab (yıl-temsilî) | öneri 1809-10-14 (Schönbrunn); madde adaları adıyla anar |
| 1809-10-14 | Karlovac, Gospić… avusturya→fransa | madde: Schönbrunn + İlirya Eyaletleri (HE `schonbrunnski-mir`) |
| 1833-07-28 | Mustagānim | madde (TDV `musteganim`) |
| 1839-05-13 | Cicel | madde (ANOM) |
| 1844-03-04 ×2 | 7 Cezayir kasabası | madde Biskra (ANOM) + öneri: 7 kasabanın gerçek yılları 1844-1882 arası dağılıyor — harita günü YUVARLANMIŞ (`yerlesimler_afrika.js:30`un kendi itirafı) |
| 1852-12-04 | Gardâye | madde Laghouat (orta güven) + öneri: Gardâye 1882 |
| 1860-06-14 | Savoya kasabaları | madde (orta güven: arşiv sayfaları açılmadı) |
| 1918-10-08…30 | Beyrut, Trablusşam, Rakka, Mersin, Malikiye… OSMANLI→fransa | madde 1918-10-07 Beyrut (TDV `beyrut`) + öneri: **Mersin 1918-12-17** (TDV), **Rakka/Deyrizor 1918'de Fransız DEĞİL**, Sayda önce İngiliz |

## 3. Yeni maddeler — neyi doldurdu

Şartname "üç devletin künye zinciri parçalı" diyordu; ölçüm: `granada` **0** madde, `navarra` **0**,
`kastilya` 9, `aragon` 8, `burgonya` 1. Dolgu buraya yöneldi:

| künye | yeni | başlıca kaynak |
|---|---|---|
| granada (Nasrî) | 34 | **TDV** `nasriler` · `girnata` · `gani-billah` · `elhamra-sarayi` · `meriniler` · `maleka` · `meriye` · `cebelitarik` · `endulus` + RAH Historia Hispánica (Boabdil) |
| kastilya | 29 | RAH DB~e biyografileri (nid'leriyle) · TDV (Müslüman taraflı olaylarda) |
| aragon | 31 | Gran Enciclopèdia Catalana · Soddu (Sardinya) · TDV `aragon`/`nasriler` |
| navarra | 19 | RAH DB~e · Adot Lerga 2013 |
| portekiz | 21 | RAH DB~e · Lencart 2016 |
| burgonya | 15+1 | Dict. historique de la Suisse · Persée (Caron, Paviot) · BnF · TDV `nigbolu-savasi` |
| fransa / fransa-cumhuriyet | 11 | TDV `imtiyazat` (**1569-10-18 ilk tasdikli kapitülasyon — veride hiç yoktu**) · Conseil constitutionnel (1804-05-18) · ANOM · HE |
| ispanya | 2 | FCSH-UNL (Alcáçovas) · Adot Lerga |

Her taslak `DERLE.js`ten geçti: zorunlu 10 alan · `tur` sözlüğü · künye var mı · olay günü künye
penceresinde mi (`pad`'li) · veriye ve taslaklar arasına mükerrer (±3 gün, başlık benzerliği) · `yer_id`
çözülüyor mu. Derleyici **iki yönde sınandı** (bozuk taslak → 7 ayrı ötme). Taslaklar arası **5 mükerrer**
bulundu ve birleştirildi (1299/1321 Gırnata-Aragon · 1304 Torrellas · 1309/1462 Cebelitârık · 1344 Algeciras · 1356).

⚠️ Kaynak çelişkileri `gun:` alanında açıkça yazıldı; ağırları:
- **1491 Gırnata teslim antlaşması:** TDV `nasriler` "25 Ekim 1491"; RAH 25 Kasım 1491. Kural gereği TDV günü yazıldı, çelişki `gun`'da. Batı literatürünün tamamı Kasım der — **TDV'nin sürçmesi olabilir, hüküm koordinatörde.**
- 1309/1310 Cebelitârık (Hicrî 709 iki yıla düşüyor) · 1374 Cebelitârık (`gani-billah` vs `cebelitarik` 1410) · RAH'ın kendi içinde 9 gün çelişkisi (hepsi `gun`'da).

## 4. Bulamadıklarım

- Lüksemburg 1443'ün gününü veren akademik metin (Vaughan açılamadı) · Laghouat 1852 günü için akademik kaynak ·
  Savoya 1860 arşiv sayfaları (yüklenmedi) · 1853 Mizab himaye sözleşmesi (TDV `mizab` anmıyor).
- Antequera 1410'u TDV'de düşüş olarak (yalnız göç anılıyor) · Alhama 1482 · Ronda 1485 · Tarifa 1292 günü.
- Menorka için TDV maddesi · Collo 1282 · V. Alfonso'nun Cerbe seferi 1432.
- Hepsi taslak dosyalarının `bulunamadi` alanında; toplam ~35 kalem.

## 5. Dokunmadıklarım

- `data/kronoloji_{fransa,ispanya,portekiz}.js`e madde EKLENMEDİ (BAGLAMA kuralı); yalnız 30 düzeltme.
- `data/yerlesimler*.js` · `data/devletler.js` · `index.html` — dokunulmadı.
- Sömürge kırılmaları (237 grup) — yazılmadı, §1'de ayrıldı.
- `denetle.py` teslimden önce **bir kez** koşturuldu (M-5457).
