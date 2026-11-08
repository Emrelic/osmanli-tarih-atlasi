# F-ADIMI-1108 — toprak-değişimi maddeleri haritada gösteriliyor mu? (SALT ÖLÇÜM)

Taban commit: `cf3aa1f39` · tohum 1108 · 2026-11-08 14:51
- data/donemler.js: 78.2 MB · sha256 `350fde0c97922237`
- data/devletler_harita.js: 389.8 MB · sha256 `f4453f595112f2f0`

Yöntem: Değişmez 2 kırılma↔madde çiftleri (denetle.py `degismez2`, yalnız MADDESİ OLAN/kapalı kırılmalar) → bir yerleşim + ±30 günde yer-eşleşen en yakın madde → üretilmiş haritada (Osmanlı `o/v/h` gövdesi + `devletler_harita` gövdeleri) yerleşimin KOORDİNATI için nokta-içinde-poligon ile sahip kümesi, madde gününün -4..+3 komşuluğunda. EVET = sahip kümesi madde gün-1 ile gün arasında değişiyor; KAYMA = ±3 gün içinde başka bir günde; YOK = ±3 günde değişmiyor. Gövde dışı noktalar için 4 km yakınlık yedeği.

## ÖLÇÜM 1 — kırılma↔madde çiftinin haritadaki karşılığı

Evren (kapalı kırılma sayısı): dv: 746 (örnek 100) · s: 2083 (örnek 200) · isg: 333 (örnek 100)

| tabaka | n | EVET | ±3g KAYMA | YOK | ÖLÇÜLEMEDİ |
|---|---|---|---|---|---|
| Osmanlı d/v | 100 | 84 (%84) | 1 (%1) | 15 (%15) | 0 (%0) |
| yabancı s | 200 | 169 (%84) | 3 (%2) | 28 (%14) | 0 (%0) |
| işgal | 100 | 4 (%4) | 3 (%3) | 93 (%93) | 0 (%0) |
| TOPLAM | 400 | 257 (%64) | 7 (%2) | 136 (%34) | 0 (%0) |

Kırılma GÜNÜNDE (veri→harita sadakati, madde değil): Osmanlı d/v %91 · yabancı s %88 · işgal %5 örnekte harita sahibi kırılma gününde değişiyor.
Yıl-temsili (YYYY-01-01) kırılma payı: Osmanlı d/v %21, yabancı s %30, işgal %3
Madde yeri adıyla eşleşmeyen (yalnız yakınlık) çift payı: %10

### YOK ve KAYMA nedenleri

- YOK · motor farklı sahip veriyor: 103
- YOK · madde-kırılma günü farkı: 11
- YOK · noktasız/gövde dışı: 9
- KAYMA · kayma: 7
- YOK · yeni sahip kırılmadan ÖNCE de görünüyor (motor/dönem erken): 7
- YOK · yıl-temsili kırılma (YYYY-01-01) — harita değişimi başka günde/yıl içinde: 6
  - Osmanlı d/v YOK (15): motor farklı sahip veriyor 8; madde-kırılma günü farkı 6; yıl-temsili kırılma (YYYY-01-01) — harita değişimi başka günde/yıl içinde 1
  - yabancı s YOK (28): noktasız/gövde dışı 9; yeni sahip kırılmadan ÖNCE de görünüyor (motor/dönem erken) 7; madde-kırılma günü farkı 5; motor farklı sahip veriyor 5; yıl-temsili kırılma (YYYY-01-01) — harita değişimi başka günde/yıl içinde 2
  - işgal YOK (93): motor farklı sahip veriyor 90; yıl-temsili kırılma (YYYY-01-01) — harita değişimi başka günde/yıl içinde 3

### Örnek vakalar (her sınıftan; madde / gün / yerleşim / sonuç)

| id | madde günü | madde | yerleşim | kırılma günü (fark) | harita (gün-1 → gün) | sonuç |
|---|---|---|---|---|---|---|
| dv000 | 1300-01-01 | Köprühisar'ın alınışı ve Yenişehir'in kuruluşuna hazırlık | Köprühisar (Yenişehir) | 1300-01-01 (+0g) | bizans → osmanli | EVET  |
| dv072 | 1822-01-01 | Gördüs'ün (Korint) Yunan isyancılara geçmesi | Gördüs (Korint) | 1822-01-01 (+0g) | osmanli → yunanistan | EVET  |
| s153 | 1114-01-01 | Ratanpur: kalacuri-ratnapura egemenliği başladı | Ratanpur | 1114-01-01 (+0g) |  → kalacuri-ratnapura | EVET  |
| s222 | 1720-09-24 | Qing ordusu Lhasa'ya girdi — Cungar işgali sona erdi, Qing h | Sakya Manastırı (Sakya) | 1720-09-24 (+0g) | tibet-ganden-phodrang → qing-hanedani | EVET  |
| dv048 | 1658-08-27 | Yanova'nın (Ineu) fethi ve Erdel seferi | Lugos (Lugoj) | 1658-08-30 (-3g) | osmanli-tabi → osmanli | KAYMA harita değişimi madde gününden +3 gün |
| s260 | 1918-12-29 | Çekoslovak birlikleri Košice'yi (Kassa) aldı | Poznan | 1918-12-27 (+2g) | almanya → polonya | KAYMA harita değişimi madde gününden -2 gün |
| dv017 | 1465-01-01 | Foça'nın alınışı — Hersek Düklüğü'ne ilk girişin açılması | Kili | 1465-01-24 (-23g) | osmanli-tabi → osmanli-tabi | YOK motor farklı sahip veriyor: kırılmada harita sahibi değişmiyor (osmanli-tabi) |
| s250 | 1913-09-29 | İstanbul Antlaşması: Bulgaristan ile barış ve Edirne'nin tes | Gümülcine | 1913-10-25 (-26g) | garbi-trakya → bulgaristan-kralligi | YOK madde-kırılma günü farkı: harita kırılma gününde (1913-10-25) değişiyor, madde -26 gün ötede |
| isg327 | 1799-05-20 | Akkâ Savunması — Napolyon'un püskürtülmesi | Kusayr | 1799-05-29 (-9g) | osmanli → osmanli | YOK motor farklı sahip veriyor: kırılmada harita sahibi değişmiyor (osmanli) |
| isg365 | 1918-10-30 | Mondros Mütarekesi | Nusaybin | 1918-10-30 (+0g) | osmanli → osmanli | YOK motor farklı sahip veriyor: kırılmada harita sahibi değişmiyor (osmanli) |

Tüm 400 satır: `sonuc.json` → `olcum1.ornek`.

## ÖLÇÜM 2 — Değişmez 2 evreni DIŞINDAKİ kronolojiler

Madde: 10589 · toprak-etiketli (`toprak-kazanc/kayip/degisimi`): 1500 · yalnız `tur` toprak (etiketsiz): 488
- UFUK dışı (harita verisi/kırılma tanımsız): 0 · tarih bozuk: 0
- ÖLÇÜLEN: 1500
- ±30 günde HERHANGİ bir kırılma var (gevşek): 1174 (%78)
- ±30 günde madde yeri/adıyla EŞLEŞEN kırılma var: 511 (%34)
- ±3 günde yer-eşleşen kırılma: 463 (%31)
- Eşleşmeyen (yer-eşleşen kırılması yok): 989 (%66)

### Dosya bazında (eşleşmeyen sayısına göre ilk 40)

| kronoloji dosyası | etiketli | ölçülen | yer-eşleşen | eşleşmeyen | %eşleşmeyen |
|---|---|---|---|---|---|
| kronoloji_cok_ms1_1000_ortadogu.js | 150 | 150 | 14 | 136 | %91 |
| kronoloji_cok_once1281_avrupa.js | 105 | 105 | 34 | 71 | %68 |
| kronoloji_cok_once1281_ortadogu.js | 73 | 73 | 22 | 51 | %70 |
| kronoloji_cok_1923_1945.js | 68 | 68 | 20 | 48 | %71 |
| kronoloji_cok_once1281_iran.js | 59 | 59 | 17 | 42 | %71 |
| kronoloji_cok_ms1_1000_batiavrupa.js | 39 | 39 | 3 | 36 | %92 |
| kronoloji_cok_once1281_anadolu.js | 44 | 44 | 13 | 31 | %70 |
| kronoloji_orta_asya.js | 34 | 34 | 5 | 29 | %85 |
| kronoloji_portekiz.js | 32 | 32 | 9 | 23 | %72 |
| kronoloji_cok_ms1_1000_iber_balkan.js | 27 | 27 | 6 | 21 | %78 |
| kronoloji_dogu_afrika.js | 30 | 30 | 10 | 20 | %67 |
| kronoloji_fransa.js | 27 | 27 | 8 | 19 | %70 |
| kronoloji_anadolu.js | 24 | 24 | 6 | 18 | %75 |
| kronoloji_balkan.js | 31 | 31 | 13 | 18 | %58 |
| kronoloji_cin.js | 26 | 26 | 8 | 18 | %69 |
| kronoloji_ingiltere.js | 34 | 34 | 16 | 18 | %53 |
| kronoloji_ispanya.js | 36 | 36 | 18 | 18 | %50 |
| kronoloji_cok_once1281_avrupa2.js | 18 | 18 | 1 | 17 | %94 |
| kronoloji_ozbek.js | 23 | 23 | 6 | 17 | %74 |
| kronoloji_venedik.js | 32 | 32 | 15 | 17 | %53 |
| kronoloji_cok_once1281_afrika.js | 19 | 19 | 4 | 15 | %79 |
| kronoloji_cok_once1281_hint_amerika.js | 17 | 17 | 2 | 15 | %88 |
| kronoloji_kuzeyafrika.js | 35 | 35 | 20 | 15 | %43 |
| kronoloji_cok_ms1_1000_ortaavrupa_italya.js | 17 | 17 | 3 | 14 | %82 |
| kronoloji_bizans.js | 25 | 25 | 12 | 13 | %52 |
| kronoloji_cok_ispanya.js | 25 | 25 | 13 | 12 | %48 |
| kronoloji_cok_once1281_dogu_asya.js | 16 | 16 | 5 | 11 | %69 |
| kronoloji_habsburg.js | 24 | 24 | 13 | 11 | %46 |
| kronoloji_hindistan.js | 21 | 21 | 10 | 11 | %52 |
| kronoloji_italya.js | 19 | 19 | 8 | 11 | %58 |
| kronoloji_lehistan.js | 14 | 14 | 4 | 10 | %71 |
| kronoloji_cok_fas.js | 13 | 13 | 4 | 9 | %69 |
| kronoloji_cok_ms1_1000_akdeniz.js | 10 | 10 | 1 | 9 | %90 |
| kronoloji_cok_ms1_1000_asya.js | 9 | 9 | 0 | 9 | %100 |
| kronoloji_altinorda.js | 10 | 10 | 2 | 8 | %80 |
| kronoloji_cok_gurcistan.js | 10 | 10 | 2 | 8 | %80 |
| kronoloji_guney_asya.js | 12 | 12 | 4 | 8 | %67 |
| kronoloji_iran_ardillari.js | 11 | 11 | 3 | 8 | %73 |
| kronoloji_memluk.js | 14 | 14 | 6 | 8 | %57 |
| kronoloji_cok_ince_avrupa_amerika.js | 7 | 7 | 0 | 7 | %100 |

(Toplam 80 dosya; tüm eşleşmeyen maddeler `eslesmeyen.tsv`.) Not: 'eşleşmeyen' = +-30 günde madde adını/yerini taşıyan bir yerleşim kırılması yok; bu hem eksik harita verisi hem de harita-dışı olay (savaş, ölüm vb. yanlış etiket) olabilir — ayrımı ÖLÇÜM 3'teki elle bakış gösteriyor.

## ÖLÇÜM 3 — D2t 'kırılmasız madde' dökümü

Toplam: 232

Otomatik başlık sınıfı: diğer 203 · kuruluş/ilan 10 · kuşatma 8 · antlaşma/statüko 7 · isyan/harekât 4

Tam döküm: `kirilmasiz.tsv`. Elle bakış (ilk 50) aşağıda `EL-BAKIS.md` içindedir.


## YORUM VE SINIRLAR (elle yazıldı; koşu 35'te sayılar değişirse güncellenir)

**Cevap (koşu 34 haritası, taban `cf3aa1f39`):** sahiplik değiştiren kırılmaların maddeleri için, madde gününde harita sahibi
gerçekten değişiyor: Osmanlı d/v %84, yabancı s %84 (n=100/200; +%1-2 ±3 gün kayma). Kalan %14-15'in büyük kısmı
*veri→harita* kusuru değil: (a) madde ile kırılma günü 4-30 gün ayrı (D2'nin ±30 penceresi buna izin verir; harita kırılma
gününde doğru değişiyor), (b) tâbi→tâbi / yeni sahip önceden görünen motor sonuçları, (c) gövde dışı nokta (kıyı/emilme) — yabancı s'de 9/200.
Kırılma günü ölçüsüyle (madde değil) sadakat: d/v %91, s %88.

**İşgal (isg) %4 EVET çıktı ama bu bir kusur DEĞİL, ölçünün uyuşmazlığı:** VERI-YAPISI satır 147 — `isg:` "sahiplik
DEĞİŞTİRMEZ, üstüne biner"; harita onu sahip gövdesi olarak değil desen (`isgalDesenleriKur`) olarak çizer. Bu betik yalnız
sahip gövdesini ölçer, desen katmanını ölçmez ⇒ işgal tabakası için bu ölçüm **ÖLÇÜLEMEDİ sayılmalı** (EVET %4 / YOK %93 hükme
dönüştürülmemeli). Desen katmanı ayrı ölçülmeli (öneri: `isgalDesenleriKur` girdisi × madde günü).

**Sınırlar:** (1) Nokta-içinde-poligon yerleşim KOORDİNATINDA yapıldı, peteğin tamamında değil; sınır çizgisine <birkaç km'de
yanlış taraf riski var (gövde dışıysa 4 km yakınlık yedeği). (2) "Sahip" = gövdelerin kümesi (osmanli, osmanli-tabi, h:renk,
devlet id); tâbi↔Osmanlı geçişi de değişim sayıldı. (3) Madde seçimi: ±30 günde yer-adı eşleşen, yoksa en yakın madde
(örneklerin %10'u yalnız yakınlık). (4) Evren yalnız D2'nin KAPALI kırılmaları (maddesiz 1447 yabancı s kırılması bu soruya girmez
— onlar zaten D2s borcu). (5) Örnek tek tohum (1108); %±5 puan güven aralığı. (6) UFUK = `denetle.UFUK`; MÖ katmanı bu ölçümde
gövde olarak sorgulanmadı (D2 evreninde yok).

**Ölçüm 2 yorumu:** D2 dışı kronolojilerde (80 dosya) 1500 toprak-etiketli madde var; yalnız %34'ü ±30 günde madde yeri/adıyla
eşleşen bir kırılmaya sahip (%78'inin ±30 günde *herhangi* bir kırılması var — çoğu tesadüfi yan kırılma). Yani bu maddelerin
**yaklaşık üçte ikisi için haritada tam o yerin değişimi doğrulanamıyor**. En kötü: kronoloji_cok_ms1_1000_ortadogu (136/150),
kronoloji_cok_once1281_avrupa (71/105), cok_ms1_1000_batiavrupa (36/39), cok_1923_1945 (48/68). Ad eşleşmesi yöntemi
yerleşim adı ile madde metni ad farklarını (Fas/Fez, Kayrevan/Kairouan…) kaçırabilir ⇒ gerçek eşleşme oranı biraz yukarıda olabilir;
alt sınır olarak oku. Etiketsiz ama `tur` toprak: 488 madde ayrıca (bu oranlara girmedi).

**Ölçüm 3 yorumu:** bkz. EL-BAKIS.md — 232 kırılmasız maddenin 222'si `kapsam: dis`, 105'i MÖ, 51'i 0-999; Osmanlı kapsamlı
(`ic`) yalnız 10.

